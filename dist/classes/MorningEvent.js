"use strict";
require('dotenv').config();
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
            const description = this.morningEvent.description;
            this.channel.send(description);
        }
    }
};
