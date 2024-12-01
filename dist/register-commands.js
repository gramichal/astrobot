"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
require('dotenv').config();
const { REST, Routes, ApplicationCommandOptionType } = require('discord.js');
const commands = [
    {
        name: 'przyslowie',
        description: 'Wyświetla przysłowie dnia',
    },
    {
        name: 'komplement',
        description: 'Wysyła piękny komplement',
    },
];
const rest = new REST({ version: 10 }).setToken(process.env.TOKEN);
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('Registering slash commands...');
        yield rest.put(Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID), {
            body: commands
        });
        console.log('Slash commands were registered successfully!');
    }
    catch (error) {
        console.log(`There was an error: ${error}`);
    }
}))();
