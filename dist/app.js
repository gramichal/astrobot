"use strict";
require('dotenv').config();
const { Client, IntentsBitField, ActivityType, EmbedBuilder } = require('discord.js');
const cron = require('cron');
const { didYouWin } = require('./lib/didYouWin.js');
const { Anniversary } = require('./classes/Anniversary.js');
const { ANNIVERSARIES } = require('./data/anniversaries.js');
;
;
const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ]
});
const Play = {
    word: process.env.THE_WORD,
    inputWord: [],
    timeStart: new Date(),
};
client.on('ready', (c) => {
    console.log(`${c.user.username} is online`);
    client.user.setActivity({
        name: "Sprzedam słoik i 5kg twarogu!",
        type: ActivityType.Custom
    });
    let scheduledMessage = new cron.CronJob('00 45 15 * * *', () => {
        ANNIVERSARIES.forEach((anniversary) => {
            new Anniversary(client, new EmbedBuilder(), anniversary).celebrate();
        });
    });
    scheduledMessage.start();
});
client.on('messageCreate', (message) => {
    if (message.guildId != process.env.GUILD_ID) {
        return;
    }
    if (message.content.toLowerCase() === 'hi astrobot') {
        const welcomeOptions = [
            'Dzień dobry!', 'Siemano!', 'No co tam? Jak leci?', 'Bążur!', 'Sup!', 'Hejo!', 'Hello!'
        ];
        message.reply(welcomeOptions[Math.floor(Math.random() * (welcomeOptions.length - 0) + 0)]);
    }
    if (message.author.username === process.env.AIN_NAME && !message.interaction) {
        if (message.content.toLowerCase().startsWith('dzień dobry wszystkim')) {
            message.channel.send(`Dzień dobry <@${process.env.AIN_ID}> !`);
        }
        if (message.content.toLowerCase().startsWith('dobranoc wszystkim')) {
            message.channel.send(`Dobranoc <@${process.env.AIN_ID}> !`);
        }
    }
    if (message.author.bot && message.content !== 'N') {
        return;
    }
    if (message.channel == process.env.CHANNEL_MAIN_ID) {
        if ((message.content !== '' && Play.word.includes(message.content))) {
            Play.inputWord.push(message.content);
            if (Play.inputWord.length === 1) {
                Play.timeStart = new Date();
            }
            if (Play.inputWord.join("") === Play.word) {
                Play.inputWord = didYouWin(message, new EmbedBuilder, true, Play);
            }
            if (Play.inputWord.join("") !== Play.word.slice(0, Play.inputWord.length)) {
                Play.inputWord = didYouWin(message, new EmbedBuilder, false, Play);
            }
        }
        else if (Play.inputWord.length > 0) {
            Play.inputWord = didYouWin(message, new EmbedBuilder, false, Play);
        }
    }
    console.log(`[${message.createdAt.toLocaleString()}] ${message.author.username}@${message.guildId}${message.channel}: ${message.content}`);
});
client.login(process.env.TOKEN);
