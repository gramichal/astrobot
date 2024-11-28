require('dotenv').config();

module.exports.Anniversary = class Anniversary {

	guild: any;
	channel: any;
	embed: any;
	today: Date;
	anniversaryData: AnniversaryData;

	constructor(client: any, embed: any, anniversaryData: AnniversaryData) {
		// pobieramy ID serwera
		this.guild = client.guilds.cache.get(process.env.GUILD_ID);

		// pobieramy kanał na który wyślemy embed
		this.channel = this.guild.channels.cache.get(process.env.CHANNEL_MAIN_ID);

		// dane rocznicy
		this.anniversaryData = anniversaryData;

		// obiekt EmbedBuilder
		this.embed = embed;

		// tworzymy 'dzisiejszą' datę
		this.today = new Date();
		// ustawiamy 'dzisiejszą' godzinę 00:00:00 (tak na serio to na 01:00:00 bo strefy czasowe - trzeba to później ogarnąć)
		this.today.setHours(1, 0, 0, 0);
		// ustawiamy 'dzisiejszy' rok na rok rocznicy
		this.today.setFullYear(anniversaryData.date.getFullYear());
	}

	celebrate() {
		
		// jeśli timestamp z daty rocznicy i dzisiejszej (przetworzonej) daty jest taki sam to znaczy że mamy rocznicę
		if (this.today.getTime() === this.anniversaryData.date.getTime()) {

			// tworzymy embed do wysłania na kanał
			this.embed
				.setTitle(this.anniversaryData.title)
				.setColor(this.anniversaryData.color);
			
			// opcjonalne elementy embed
			if (this.anniversaryData.description) {
				this.embed.setDescription(this.anniversaryData.description);
			}
			
			if (this.anniversaryData.imageUrl) {
				this.embed.setImage(this.anniversaryData.imageUrl);
			}
			
			// wysyłamy embed na kanał
			this.channel.send({ embeds: [this.embed] });
		}
	}
}