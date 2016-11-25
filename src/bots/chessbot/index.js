'use strict';

const chessbot = require('./chessbot.js');
const config = require('../../util/config.js').nconf;
const logger = require('../../util/log.js').logger;

module.exports = {
    onChess: (message, body) => {
        chessbot.response(message, body);
    },
    onCh: (message, body) => {
        chessbot.response(message, body);
    }
};
