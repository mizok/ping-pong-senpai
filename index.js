import { initUI, startCounting } from './ui';
import { initSplash } from './core/splash';
import { gameBuilder } from './core/game';


const socket = require('socket.io-client')('http://localhost:3000');

let splashSwitcher;
let splashPromise = initSplash();
splashPromise.then((switcher) => {
  splashSwitcher = switcher;
})

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
    let gameReadyPromise = gameContoller.drawGame();
    gameReadyPromise.then(() => {
      splashSwitcher(false);
    })
  }

})

socket.on('gameInit', () => {
  startCounting(() => {
    gameContoller.cvs.classList.add('promoted');
    let gameReadyPromise = gameContoller.drawGame();
    gameReadyPromise.then(() => {
      splashSwitcher(false);
    })
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
  alert('Room Is Full Now');
})

socket.on('unknownCode', () => {
  alert('Incorrect Room Code');
})

socket.on('hostCantBeGuest', () => {
  alert("You Can't Join The Game You Are Hosting");
})


