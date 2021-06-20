import { initUI, startCounting } from './ui';
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
  window.kk = () => {
    gameContoller.cvs.classList.add('promoted');
    gameContoller.drawGame();
  }

})

socket.on('gameInit', () => {
  startCounting(() => {
    gameContoller.cvs.classList.add('promoted');
    gameContoller.drawCourt();
  })
})

socket.on('host-leave', () => {
  gameContoller.cvs.classList.remove('promoted');
})

socket.on('challenger-leave', () => {
  gameContoller.cvs.classList.remove('promoted');
})

socket.on('leave', () => {
  gameContoller.cvs.classList.remove('promoted');
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


