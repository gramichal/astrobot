"use strict";
require('dotenv').config();
module.exports.Anniversary = class Anniversary {
    constructor(client, embed, anniversaryData) {
        this.guild = client.guilds.cache.get(process.env.GUILD_ID);
        this.channel = this.guild.channels.cache.get(process.env.CHANNEL_MAIN_ID);
        this.anniversaryData = anniversaryData;
        this.embed = embed;
        this.today = new Date();
        this.today.setHours(1, 0, 0, 0);
        this.today.setFullYear(anniversaryData.date.getFullYear());
    }
    celebrate() {
        if (this.today.getTime() === this.anniversaryData.date.getTime()) {
            this.embed
                .setTitle(this.anniversaryData.title)
                .setColor(this.anniversaryData.color);
            if (this.anniversaryData.description) {
                this.embed.setDescription(this.anniversaryData.description);
            }
            if (this.anniversaryData.imageUrl) {
                this.embed.setImage(this.anniversaryData.imageUrl);
            }
            this.channel.send({ embeds: [this.embed] });
        }
    }
};
