const mersenneTwister = require('mersenne-twister');
const random = new mersenneTwister().random;

function getGameStatus(state) {
  let end, winner;
  return {
    end: end,
    winner: winner
  }
}

function genRandomId(digits) {
  const randomSource = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';
  let
    randomCode = '',
    random = 0;
  for (let i = 0; i < digits; i++) {
    random = Math.floor(randomSource.length * random());
    randomCode += randomSource[random];
  }
  return randomCode;
}


module.exports = {
  getGameStatus,
  genRandomId
}