import { initUI, hideInitialScreen, toggleWaitingOpponent, togglePopout } from './ui';
import { initSplash } from './core/splash';
import { gameBuilder } from './core/game';


const socket = require('socket.io-client')('http://localhost:3000');

initSplash();

let uiInitPromise = initUI(socket);
let game = gameBuilder();
let gameContoller;



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

socket.on('playerJoined', (data) => {
  if (data.playerNumber === 2) {
    if (planerRef.number !== 1) {
      planerRef.number = 2;
    }
    toggleWaitingOpponent(true);
    togglePopout('join-game-prompt', false);
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
  togglePopout('name-input-prompt', true);
}


