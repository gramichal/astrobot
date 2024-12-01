"use strict";
require('dotenv').config();
const { daysPassed } = require('./../lib/daysPassed.js');
module.exports.MorningEvent = class MorningEvent {
    constructor(client, morningEvent) {
        this.guild = client.guilds.cache.get(process.env.GUILD_ID);
        this.channel = this.guild.channels.cache.get(process.env.CHANNEL_MAIN_ID);
        this.morningEvent = morningEvent;
        this.today = new Date();
        this.today.setHours(1, 0, 0, 0);
        this.today.setFullYear(morningEvent.date.getFullYear());
    }
    show() {
        if (this.today.getTime() === this.morningEvent.date.getTime()) {
            const daysInYear = this.isLeapYear() ? 366 : 365;
            let description = `
Dziś jest **${this.today.toLocaleDateString('pl-PL', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}.** Dzień ten jest **${daysPassed(this.today)}** dniem w kalendarzu gregoriańskim. Do końca roku pozostało **${daysInYear - daysPassed(this.today)}** dni

Imieniny obchodzą: ${this.prepareNameDayString()}

Tego dnia w roku ${this.morningEvent.description}

Nieznane przysłowie na dzisiaj: **_${this.morningEvent.proverb}_**`;
            this.channel.send(description);
        }
    }
    prepareNameDayString() {
        const names = this.morningEvent.nameDay.join(', ');
        const pos = names.lastIndexOf(', ');
        return `${names.substring(0, pos)} i ${names.substring(pos + 1)}`;
    }
    isLeapYear() {
        const year = new Date().getFullYear();
        return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
    }
};
