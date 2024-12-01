require('dotenv').config();
const { daysPassed } = require('./../lib/daysPassed.js');

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

			const daysInYear: number = this.isLeapYear() ? 366 : 365;

			let description: string = `
Dziś jest **${this.today.toLocaleDateString('pl-PL', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}.** Dzień ten jest **${daysPassed(this.today)}** dniem w kalendarzu gregoriańskim. Do końca roku pozostało **${daysInYear - daysPassed(this.today)}** dni

Imieniny obchodzą: ${this.prepareNameDayString()}

Tego dnia w roku ${this.morningEvent.description}

Nieznane przysłowie na dzisiaj: **_${this.morningEvent.proverb}_**`;

	 		// wysyłamy info na kanał
			this.channel.send(description);
		}
	}

	prepareNameDayString(): string {
		const names = this.morningEvent.nameDay.join(', ');
		
		const pos = names.lastIndexOf(', ');
		return `${names.substring(0,pos)} i ${names.substring(pos+1)}`
	}

	isLeapYear(): boolean {
		const year = new Date().getFullYear();
		return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
	}
}