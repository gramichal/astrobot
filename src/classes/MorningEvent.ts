require('dotenv').config();

module.exports.MorningEvent = class MorningEvent {

	guild: any;
	channel: any;
	today: Date;
	morningEvent: EventData;

	constructor(client: any, morningEvent: EventData) {
		// pobieramy ID serwera
		this.guild = client.guilds.cache.get(process.env.GUILD_ID);

		// pobieramy kanał na który wyślemy wiadomość
		this.channel = this.guild.channels.cache.get(process.env.CHANNEL_MAIN_ID);

		// dane wydarzenia
		this.morningEvent = morningEvent;

		// tworzymy 'dzisiejszą' datę
		this.today = new Date();
		// ustawiamy 'dzisiejszą' godzinę 00:00:00 (tak na serio to na 01:00:00 bo strefy czasowe - trzeba to później ogarnąć)
		this.today.setHours(1, 0, 0, 0);
		// ustawiamy 'dzisiejszy' rok na rok wydarzenia
		this.today.setFullYear(morningEvent.date.getFullYear());
	}

	show() {
		// jeśli timestamp z daty wydarzenia i dzisiejszej (przetworzonej) daty jest taki sam to działamy
		if (this.today.getTime() === this.morningEvent.date.getTime()) {
			
			// przygotowujemy wiadomość
			// ...
			const description: string = this.morningEvent.description;

	 		// wysyłamy info na kanał
			this.channel.send(description);
		}
	}
}