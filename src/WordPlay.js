const { EmbedBuilder } = require('discord.js');

module.exports.WordPlay = class WordPlay {

	constructor(message, word, inputWord){
		this.message = message;
		this.word = word;
		this.inputWord = inputWord;
	}

	play(){
		if (this.message.content !== '' && this.word.includes(this.message.content)) {
		
			// dodajemy literkę do tablicy
			this.inputWord.push(this.message.content);
	
			// jeśli wprowadzone przez użytkowników 'słowo' jest takie samo jak poszukiwane to instant win
			if (this.inputWord.join("") === this.word) {
				return this.didYouWin(this.message, true);
			}
	
			// porównujemy wprowadzoną część słowa do takiej samej części słowa-klucza
			// pozwala zachować kolejność liter
			if (this.inputWord.join("") !== this.word.slice(0, this.inputWord.length)) {	
				return this.didYouWin(this.message, false);
			}
	
		// jeśli konkurs na słowo już wystartował a wiadomość/litera nie znajduje się w słowie-kluczu
		// to instalose
		} else if (this.inputWord.length > 0) {
			return this.didYouWin(this.message, false);
		}
	}

	didYouWin(message, win) {
		title = (win) ? 'HURRA!' : 'PRZEGRAŁEŚ!';
		description = (win) ? 'Wygrałeś niggera!' : 'Przegrałeś niggera!';
		color = (win) ? 0x65a30d : 0xb91c1c;
		image = (win) ? 'https://media1.tenor.com/m/qCW8S4o4MR0AAAAd/win-breakingbad.gif' : 'https://media1.tenor.com/m/5YfymoVCTr0AAAAd/you-lose-good-day-sir-willy-wonka-and-the-chocolate-factory.gif';
	
		const embed = new EmbedBuilder()
			.setTitle(title)
			.setDescription(description)
			.setColor(color)
			.setImage(image);
		
		message.channel.send({ embeds: [embed] });
		return [];
	}
}