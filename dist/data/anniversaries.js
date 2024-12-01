"use strict";
const { getYearString } = require('./../lib/year.js');
const currentYear = new Date().getFullYear();
const anni = [
    {
        date: new Date('2023-01-08'),
        title: 'Rocznica wyjścia wesołegooo',
        color: '#f97316',
        description: `23 minuty po 15 tego dnia ${getYearString(currentYear - 2023)} temu to moment, w którym odzyskaliśmy naszą wolność!`,
        imageUrl: 'https://media1.tenor.com/m/c86D6_XlACMAAAAd/weekend-party.gif'
    },
    {
        date: new Date('2022-12-01'),
        title: 'Rocznica Utworzenia Astry',
        color: '#f97316',
        description: `Chwała założycielom! To już ${getYearString(currentYear - 2022)} razem!`,
        imageUrl: 'https://media1.tenor.com/m/6nhSFu2lUKkAAAAC/burn-elmo.gif'
    }
];
module.exports.ANNIVERSARIES = anni;
