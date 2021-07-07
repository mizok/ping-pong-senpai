import { initUI, startCounting } from './ui';
import { initSplash } from './core/splash';
import { gameBuilder } from './core/game';
import { initKeyControl } from './controll';


const socket = require('socket.io-client')('http://localhost:3000');

let splashSwitcher;
let splashPromise = initSplash();
splashPromise.then((switcher) => {
  splashSwitcher = switcher;
})

let uiInitPromise = initUI(socket);
export const game = gameBuilder();

// 上線後要移除 start
game.promise.then(() => {
  game.controller.surrounding.classList.add('promoted');
  let gameReadyPromise = game.controller.drawGame();
  gameReadyPromise.then(() => {
    splashSwitcher(false);
    initKeyControl(socket);
  })
})
// 上線後要移除 end

uiInitPromise.then(() => {
  game.trigger();
})

socket.on('gameInit', () => {
  startCounting(() => {
    game.controller.surrounding.classList.add('promoted');
    game.controller.scoreboards.update();
    let gameReadyPromise = game.controller.drawGame();
    gameReadyPromise.then(() => {
      splashSwitcher(false);
    })
  })
})

socket.on('host-leave', () => {
  game.controller.surrounding.classList.remove('promoted');
})

socket.on('challenger-leave', () => {
  game.controller.surrounding.classList.remove('promoted');
})

socket.on('leave', () => {
  game.controller.surrounding.classList.remove('promoted');
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


