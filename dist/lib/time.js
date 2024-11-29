"use strict";
module.exports.getTimeString = function getTimeString(seconds) {
    seconds = Math.round(seconds);
    let minutes = 0;
    let resultString = `${seconds} ${getTimeName('sekund', seconds)}`;
    if (seconds >= 60) {
        minutes = Math.floor(seconds / 60);
        seconds = Math.round(seconds % 60);
        resultString = `${minutes} ${getTimeName('minut', minutes)} i ${seconds} ${getTimeName('sekund', seconds)}`;
    }
    return resultString;
};
function getTimeName(word, time) {
    if (time === 1) {
        return `${word}a`;
    }
    if (time < 10 || time > 20) {
        if ([2, 3, 4].includes(+(time.toString().slice(-1)))) {
            return `${word}y`;
        }
    }
    return word;
}
