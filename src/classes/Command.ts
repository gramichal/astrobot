require('dotenv').config(); 
const EV = require('./../data/events.js');
const COMPLEMENTS = require('./../data/complements.js');
const COMFORTS = require('./../data/comforts.js');
const SLAPS = require('./../data/slaps.js');


module.exports.Command = class Command {

	input: string;
	message: any;
	embed: any;

	constructor(input: string, message: any, embed: any) {
		this.input = input;
		this.message = message;
		this.embed = embed;
	}

	run() {
		//'.mysl', '.poc ', '.kom '
		if (this.input === '.mysl') {

			if (this.message.content !== '.mysl') {
				return;
			}

			const proverb: EventData = EV.filter((event: EventData) => {
				const eventDate = event.date;
				eventDate.setHours(1, 0, 0, 0);
	
				const today = new Date();
				today.setHours(1, 0, 0, 0);
	
				return eventDate.getTime() === today.getTime();
			})[0];
	
			this.message.reply(`Myśl dnia: **_${proverb.proverb}_**`);
		}

		if (this.input === '.psz ') {
			if (this.message.mentions.users.size === 0) {
				return;
			}
			
			const mentions: string[] = [];

			this.message.mentions.users.forEach((mention: any) => {
				mentions.push(`<@${mention.id}>`);
			});

			const mentionedUsers: string = mentions.join(" ");
			
			this.message.reply(`${mentionedUsers} ${COMFORTS[Math.floor(Math.random() * (COMFORTS.length - 0) + 0)]}`);
		}

		if (this.input === '.kom ') {
			if (this.message.mentions.users.size === 0) {
				return;
			}

			const mentions: string[] = [];

			this.message.mentions.users.forEach((mention: any) => {
				mentions.push(`<@${mention.id}>`);
			});

			const mentionedUsers: string = mentions.join(" ");
			this.message.reply(`${mentionedUsers} ${COMPLEMENTS[Math.floor(Math.random() * (COMPLEMENTS.length - 0) + 0)]}`);
		}

		if (this.input === '.pac ') {
			if (this.message.mentions.users.size === 0) {
				return;
			}

			const mentions: string[] = [];

			this.message.mentions.users.forEach((mention: any) => {
				mentions.push(`<@${mention.id}>`);
			});

			const mentionedUsers: string = mentions.join(" ");
			
			const description = SLAPS.text[Math.floor(Math.random() * (SLAPS.text.length - 0) + 0)];
			const imageUrl = SLAPS.images[Math.floor(Math.random() * (SLAPS.images.length - 0) + 0)];

			this.embed
				.setDescription(`E! ${mentionedUsers} ${description}`)
				.setImage(imageUrl)
				.setColor(0xb91c1c);
			
			this.message.channel.send({ embeds: [this.embed] });
		}
	}
}