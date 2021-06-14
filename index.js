import { initUI, hideInitialScreen } from './ui';
import { initSplash } from './core/splash';
import { gameBuilder } from './core/game';
import { $, toggle } from './core/lib/dom';

const socket = require('socket.io-client')('http://localhost:3000');

initSplash();

let uiInitPromise = initUI(socket);
let game = gameBuilder();
let gameContoller;
let toggleWaitingOpponent = (status) => {
  toggle('#game-start', status);
  toggle('#wait-opponent-msg', !status);
}


uiInitPromise.then(() => {
  game.trigger();
})

game.promise.then((instance) => {
  gameContoller = instance;
})

socket.on('greeting', greetingHandler);

socket.on('gameInit', () => {
  hideInitialScreen();
  gameContoller.drawCourt();
})

socket.on('playerJoined', (playerNumber) => {
  if (playerNumber === 2) {
    toggleWaitingOpponent(true);
  }
})

socket.on('tooManyPlayers', () => {
  alert('該房人數已滿');
})

socket.on('unknownCode', () => {
  alert('無效的房間碼');
})

socket.on('hostCantBeGuest', () => {
  alert('房主不能重複加入自己開好的房間喔');
})

function greetingHandler() {

}


