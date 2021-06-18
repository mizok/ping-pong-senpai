import { initUI, hideInitialScreen } from './ui';
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


socket.on('gameInit', () => {
  gameContoller.drawCourt();
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


