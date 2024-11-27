const { EmbedBuilder } = require('discord.js');

module.exports.didYouWin = function (message: any, win: boolean) : string[] {
	const title: string = (win) ? 'HURRA!' : 'PRZEGRAŁEŚ!';
	const description: string = (win) ? 'Wygrałeś niggera!' : 'Przegrałeś niggera!';
	const color: number = (win) ? 0x65a30d : 0xb91c1c;
	const image: string = (win) ? 'https://media1.tenor.com/m/qCW8S4o4MR0AAAAd/win-breakingbad.gif' : 'https://media1.tenor.com/m/5YfymoVCTr0AAAAd/you-lose-good-day-sir-willy-wonka-and-the-chocolate-factory.gif';

	const embed = new EmbedBuilder()
		.setTitle(title)
		.setDescription(description)
		.setColor(color)
		.setImage(image);
	
	message.channel.send({ embeds: [embed] });
	
	return [];
}