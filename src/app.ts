require('dotenv').config();
const { Client, IntentsBitField, ActivityType, EmbedBuilder } = require('discord.js');
const cron = require('cron');

const { didYouWin } = require('./lib/didYouWin.js');
// const { daysPassed } = require('./lib/daysPassed.js');

const { Anniversary } = require('./classes/Anniversary.js');
const { MorningEvent } = require('./classes/MorningEvent.js');

// pewnie przejdziemy na baze danych z rocznicami - póki co tablica obiektów typu AnniversaryData
const { ANNIVERSARIES } = require('./data/anniversaries.js');
const { EVENTS } = require('./data/events.js');
const { COMPLEMENTS } = require('./data/complements.js');

interface WordPlay {
	word: string;
	inputWord: string[];
	timeStart: Date;
};

interface AnniversaryData {
	date: Date,
	title: string,
	color: string,
	description?: string,
	imageUrl?: string
};

interface EventData {
	date: Date,
	description: string,
	proverb: string,
	nameDay: string[]
}

const client = new Client({
	intents: [
		IntentsBitField.Flags.Guilds,
		IntentsBitField.Flags.GuildMembers,
		IntentsBitField.Flags.GuildMessages,
		IntentsBitField.Flags.MessageContent,
	]
});

const Play: WordPlay = {
	word: process.env.THE_WORD!,
	inputWord: [],
	timeStart: new Date(),
};

client.on('ready', (c: any) => {
	console.log(`${c.user.username} is online`);

	// ustawiamy status bota. Typ custom pozwala na usunięcie przedrostków 'Jest w grze', 'Słucha' itd
	client.user.setActivity({
		name: "Sprzedam słoik i 5kg twarogu!",
		type: ActivityType.Custom
	});

	// ustawiamy crona aby codziennie o określonej godzinie robił akcję
	let morningShow = new cron.CronJob('00 00 08 * * *', () => {
		// trawersujemy całą tablicę wydarzeń
		EVENTS.forEach((morningEvent: EventData) => {
			new MorningEvent(client, morningEvent).show();
		});
	});
	// startujemy roskład dnia
	morningShow.start();

	// ustawiamy crona aby codziennie o określonej godzinie robił akcję
	let scheduledMessage = new cron.CronJob('00 45 15 * * *', () => {
		// trawersujemy całą tablicę rocznic
		ANNIVERSARIES.forEach((anniversary: AnniversaryData) => {
			new Anniversary(client, new EmbedBuilder(), anniversary).celebrate();
		});
	});
	// startujemy roskład dnia
	scheduledMessage.start();
	
});

client.on('messageCreate', (message: any) => {
	// ograniczenie bota tylko do serwera ASTRy - później do ogarnięcia przez prefixy
	if (message.guildId != process.env.GUILD_ID) {
		return;
	}

	// losowa odpowiedź na powitanie bota
	if (message.content.toLowerCase() === 'hi astrobot') {
		const welcomeOptions: string[] = [
			'Dzień dobry!', 'Siemano!', 'No co tam? Jak leci?', 'Bążur!', 'Sup!', 'Hejo!', 'Hello!'
		];
		message.reply(welcomeOptions[Math.floor(Math.random() * (welcomeOptions.length - 0) + 0)]);
	}

	// konkretnego usera (zdefiniowany w .env) :D
	// wiadomość musi być napisana przez konkretnego usera (zdefiniowany w .env) i nie być odpowiedzią na żadną inną wiadomość
	if (message.author.username === process.env.AIN_NAME && !message.interaction) {

		// wiadomość zaczynać się od 'dzień dobry wszystkim'
		if (message.content.toLowerCase().startsWith('dzień dobry wszystkim')) {
			message.channel.send(`Dzień dobry <@${process.env.AIN_ID}>! :wave:`);
		}

		// i dobranoc!
		if (message.content.toLowerCase().startsWith('dobranoc wszystkim')) {
			message.channel.send(`Dobranoc <@${process.env.AIN_ID}>! :stich_sleep:`);
		}
	}

	// sprawdzamy czy wiadomość nie jest od bota - żeby się boty nie zapętlały
	// chyba że jest to literka N wysyłana przez bota o 20:04 - niech sobie chłopak też pogra
	if (message.author.bot && message.content !== 'N') {
		return;
	} 

	// gra w słowa może być tylko na głównym kanale
	if (message.channel == process.env.CHANNEL_MAIN_ID) {

		// sprawdzamy czy wiadomość/literka wysłana przez użytkownika znajduje się w słowie-kluczu
		// jeśli nie to nie zawracamy sobie głowy
		if ((message.content !== '' && Play.word.includes(message.content))) {
			
			// dodajemy literkę do tablicy
			Play.inputWord.push(message.content);
			if (Play.inputWord.length === 1) {
				Play.timeStart = new Date();
			}

			// jeśli wprowadzone przez użytkowników 'słowo' jest takie samo jak poszukiwane to instant win
			if (Play.inputWord.join("") === Play.word) {
				Play.inputWord = didYouWin(message, new EmbedBuilder, true, Play);
			}

			// porównujemy wprowadzoną część słowa do takiej samej części słowa-klucza
			// pozwala zachować kolejność liter
			if (Play.inputWord.join("") !== Play.word.slice(0, Play.inputWord.length)) {
				Play.inputWord = didYouWin(message, new EmbedBuilder, false, Play);
			}

		// jeśli konkurs na słowo już wystartował a wiadomość/litera nie znajduje się w słowie-kluczu
		// to instalose
		} else if (Play.inputWord.length > 0) {
			Play.inputWord = didYouWin(message, new EmbedBuilder, false, Play);
		}
	}

	console.log(`[${message.createdAt.toLocaleString()}] ${message.author.username}@${message.guildId}${message.channel}: ${message.content}`);
});

client.on('interactionCreate', (interaction: any) => {
	if (!interaction.isChatInputCommand()) return;

	if (interaction.commandName === 'przyslowie') {

		const proverb: EventData = EVENTS.filter((event: EventData) => {
			const eventDate = event.date;
			eventDate.setHours(1, 0, 0, 0);

			const today = new Date();
			today.setHours(1, 0, 0, 0);

			return eventDate.getTime() === today.getTime();
		})[0];

		interaction.reply(`Myśl dnia: **_${proverb.proverb}_**`);
	}

	if (interaction.commandName === 'komplement') {
		interaction.reply(COMPLEMENTS[Math.floor(Math.random() * (COMPLEMENTS.length - 0) + 0)]);
	}

	// if (interaction.commandName === 'status') {
	// 	const status = interaction.options.get('bot-status').value;
	// 	client.user.setActivity({
	// 		name: status,
	// 		type: ActivityType.Custom
	// 	});
	// 	interaction.reply(`Status zmieniony na: ${status}`);
	// }

	// if (interaction.commandName === 'wordplay') {
	// 	word = interaction.options.get('word').value.toUpperCase();
	// 	interaction.reply(`Słowo gry zmienione na: ${word}`);
	// }
});

// logujemy i uruchamiamy bota
client.login(process.env.TOKEN);