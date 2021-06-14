const mersenneTwister = require('mersenne-twister');
const mt = new mersenneTwister();

function genRandomId(digits) {
  const randomSource = 'ABCDEFGHJKLMNOPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz1234567890';
  let
    randomCode = '',
    randomNum = 0;
  for (let i = 0; i < digits; i++) {
    randomNum = Math.floor(randomSource.length * mt.random());
    randomCode += randomSource[randomNum];
  }
  return randomCode;
}


module.exports = {
  genRandomId
}