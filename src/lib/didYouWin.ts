const { getTimeString } = require('./time.js');

module.exports.didYouWin = function didYouWin(message: any, embed: any, win: boolean, Play: WordPlay): string[] {
	const title: string = (win) ? 'HURRA! WYGRANA!' : 'PRZEGRALIŚCIE!';
	const description: string = (win) ? 'Wygraliście niggera!' : `Przegraliście niggera! <@${message.author.id}> Ty łobuzie!`;
	const color: number = (win) ? 0x65a30d : 0xb91c1c;
	const image: string = (win) ? 'https://media1.tenor.com/m/qCW8S4o4MR0AAAAd/win-breakingbad.gif' : 'https://media1.tenor.com/m/5YfymoVCTr0AAAAd/you-lose-good-day-sir-willy-wonka-and-the-chocolate-factory.gif';

	let seconds: number = (new Date().getTime() - Play.timeStart.getTime()) / 1000;
	const resultString = getTimeString(seconds);
	
	embed.setTitle(title)
		.setDescription(description)
		.addFields({
			name: 'Czas:',
			value: resultString,
		})
		.setColor(color)
		.setImage(image);
	
	message.channel.send({ embeds: [embed] });
	
	return [];
}