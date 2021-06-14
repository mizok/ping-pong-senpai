import { initUI, hideInitialScreen } from './ui';
import { gameBuilder } from './core/game'
const socket = require('socket.io-client')('http://localhost:3000');
let uiInitPromise = initUI(socket);
let game = gameBuilder();
let gameContoller;

uiInitPromise.then(() => {
  game.start();
})
game.promise.then((instance) => {
  gameContoller = instance;
})

socket.on('greeting', greetingHandler);

socket.on('gameInit', (playerNumber) => {
  hideInitialScreen();
  gameContoller.drawCourt();
})

function greetingHandler() {

}


