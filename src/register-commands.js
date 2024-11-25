require('dotenv').config();
const { REST, Routes, ApplicationCommandOptionType } = require('discord.js');

const commands = [
	{
		name: 'status',
		description: 'Pozwala ustawić status',
		options: [
			{
				name: 'bot-status',
				description: 'Treść statusu bota',
				type: ApplicationCommandOptionType.String,
				required: true
			}
		]
	},
	{
		name: 'wordplay',
		description: 'Pozwala ustawić słowo do gry w N',
		options: [
			{
				name: 'word',
				description: 'Słowo do gry w N',
				type: ApplicationCommandOptionType.String,
				required: true
			}
		]
	}
];

const rest = new REST({ version: 10 }).setToken(process.env.TOKEN);

(async () => {
	try {
		console.log('Registering slash commands...');

		await rest.put(
			Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
			{
				body: commands
			}
		)

		console.log('Slash commands were registered successfully!');

	} catch (error) {
		console.log(`There was an error: ${error}`);
	}
})();