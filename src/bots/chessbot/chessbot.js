const board = require('./board.js');
const chess = require('chess.js').Chess();

const randomBitstring = () => {
    
};

const zobrist = () => {
  // fill a table of random numbers/bitstrings
  let table[64][board.pieces.length];
  _.each(table, (v, k, o) => {
    _.each(table[k], random_bitstring())
  });

}

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
