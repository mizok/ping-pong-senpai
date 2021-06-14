import { playerNumber } from './data';

export function initUI(socket) {
  let createGameBtn = document.querySelector('#create-game');
  let showJoinGamePromptBtn = document.querySelector('#show-join-game-prompt');
  let confirmJoinGameBtn = document.querySelector('#confirm-join-game');
  let roomCodeInput = document.querySelector('#room-code-input');
  let initTrigger;
  let initUIPromise = new Promise((res, rej) => {
    initTrigger = res;
  })

  //bind events
  showJoinGamePromptBtn.addEventListener('click', () => {
    showJoinGamePrompt();
  });

  createGameBtn.addEventListener('click', () => {
    newGame(socket);
  });

  confirmJoinGameBtn.addEventListener('click', () => {
    let roomCode = roomCodeInput.value;
    confirmJoinGame(socket, roomCode);
  })

  initTrigger();

  return initUIPromise;
}

function showJoinGamePrompt() {

}

function newGame(socket) {
  socket.emit('newGame');
  initGame(socket);
}

function confirmJoinGame(socket, roomCode) {
  socket.emit('joinGame', roomCode);
  initGame(socket);
}

function initGame(socket) {
  socket.emit('playerJoined', playerJoinedHandler);
}


function playerJoinedHandler(number) {
  playerNumber = number;
}