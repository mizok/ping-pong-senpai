import { initUI, startCounting } from './ui';
import { initSplash } from './core/splash';
import { gameBuilder } from './core/game';
import { initKeyControl } from './controll';
import { playersData, ballData } from './data'

const socket = require('socket.io-client')('http://localhost:3000');

let splashSwitcher;
let splashPromise = initSplash();
splashPromise.then((switcher) => {
  splashSwitcher = switcher;
})

let uiInitPromise = initUI(socket);
export const game = gameBuilder();

uiInitPromise.then(() => {
  game.trigger();
})

socket.on('gameInit', () => {
  startCounting(() => {
    game.controller.surrounding.classList.add('promoted');
    game.controller.scoreboards.update();
    let gameReadyPromise = game.controller.drawGame();
    gameReadyPromise.then(() => {
      socket.emit('gameReady');
      splashSwitcher(false);
      initKeyControl(100, socket);
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

socket.on('gameProceeding', (data) => {
  let serverData = JSON.parse(data);
  for (let i = 0; i < playersData.length; i++) {
    playersData[i].position.x = serverData.players[i].position.x;
  }
  ballData.position = serverData.ball.position;
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


