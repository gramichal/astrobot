require('dotenv').config();
const { Client, IntentsBitField, ActivityType } = require('discord.js');
const { didYouWin } = require('./didYouWin');
//const { WordPlay } = require('./WordPlay');

const client = new Client({
	intents: [
		IntentsBitField.Flags.Guilds,
		IntentsBitField.Flags.GuildMembers,
		IntentsBitField.Flags.GuildMessages,
		IntentsBitField.Flags.MessageContent,
	]
});

let word = 'NIGGER';
let inputWord = [];

client.on('ready', (c) => {
	console.log(`${c.user.username} is online`);

	// ustawiamy status bota. Typ custom pozwala na usunięcie przedrostków 'Jest w grze', 'Słucha' itd
	client.user.setActivity({
		name: "Sprzedam słoik i 5kg twarogu!",
		type: ActivityType.Custom
	});
});

client.on('messageCreate', (message) => {
	// sprawdzamy czy wiadomość nie jest od bota - żeby się boty nie zapętlały
	if (message.author.bot) {
		return;
	}

	// sprawdzamy czy wiadomość/literka wysłana przez użytkownika znajduje się w słowie-kluczu
	// jeśli nie to nie zawracamy sobie głowy
	if (message.content !== '' && word.includes(message.content)) {
		
	// 	// dodajemy literkę do tablicy
		inputWord.push(message.content);

	// 	// jeśli wprowadzone przez użytkowników 'słowo' jest takie samo jak poszukiwane to instant win
		if (inputWord.join("") === word) {
			inputWord = didYouWin(message, true);
		}

	// 	// porównujemy wprowadzoną część słowa do takiej samej części słowa-klucza
	// 	// pozwala zachować kolejność liter
		if (inputWord.join("") !== word.slice(0, inputWord.length)) {
			inputWord = didYouWin(message, false);
		}

	// // jeśli konkurs na słowo już wystartował a wiadomość/litera nie znajduje się w słowie-kluczu
	// // to instalose
	} else if (inputWord.length > 0) {
		inputWord = didYouWin(message, false);
	}
	
	// const wordPlay = new WordPlay(message, word, inputWord);
	// inputWord = wordPlay.play();

	console.log(`${message.author.username}: ${message.content}`);
});

client.on('interactionCreate', (interaction) => {
	if (!interaction.isChatInputCommand()) return;

	if (interaction.commandName === 'status') {
		const status = interaction.options.get('bot-status').value;
		client.user.setActivity({
			name: status,
			type: ActivityType.Custom
		});
		interaction.reply(`Status zmieniony na: ${status}`);
	}

	if (interaction.commandName === 'wordplay') {
		word = interaction.options.get('word').value.toUpperCase();
		interaction.reply(`Słowo gry zmienione na: ${word}`);
	}
});

// logujemy i uruchamiamy bota
client.login(process.env.TOKEN);