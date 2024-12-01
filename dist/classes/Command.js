"use strict";
require('dotenv').config();
const EV = require('./../data/events.js');
const COMPLEMENTS = require('./../data/complements.js');
const COMFORTS = require('./../data/comforts.js');
module.exports.Command = class Command {
    constructor(input, message) {
        this.input = input;
        this.message = message;
    }
    run() {
        if (this.input === '.mysl') {
            if (this.message.content !== '.mysl') {
                return;
            }
            const proverb = EV.filter((event) => {
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
            const mentions = [];
            this.message.mentions.users.forEach((mention) => {
                mentions.push(`<@${mention.id}>`);
            });
            const mentionedUsers = mentions.join(" ");
            this.message.reply(`${mentionedUsers} ${COMFORTS[Math.floor(Math.random() * (COMFORTS.length - 0) + 0)]}`);
        }
        if (this.input === '.kom ') {
            if (this.message.mentions.users.size === 0) {
                return;
            }
            const mentions = [];
            this.message.mentions.users.forEach((mention) => {
                mentions.push(`<@${mention.id}>`);
            });
            const mentionedUsers = mentions.join(" ");
            this.message.reply(`${mentionedUsers} ${COMPLEMENTS[Math.floor(Math.random() * (COMPLEMENTS.length - 0) + 0)]}`);
        }
    }
};
