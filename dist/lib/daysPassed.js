"use strict";
module.exports.daysPassed = function daysPassed(dt) {
    const current = new Date(dt.getTime());
    const previous = new Date(dt.getFullYear(), 0, 1);
    return Math.ceil((current.getTime() - previous.getTime() + 1) / 86400000);
};
