const board = require('./board.js');
const chess = require('chess.js').Chess();
// const sequelize = require('sequelize').Sequelize(config.get(db:dbParams));

const alphaNumeric = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';



const randomBitstring = (length, chars) => {
    let result = '';
    return result;
};

const zobrist = () => {

};

module.exports = {
    response: (message, body) => {
        const channel = message.channel;
        const time = message.timestamp;
        const player = message.author.id;
        // Future, select from a db the zobrist hash  of the chess game in the current channel
        // and output the hash as a fen string for Chess.js
        if(body) {

        } else {
            message.reply('\n' + board.render(/* fen string from DB */));
        }
    }
};
