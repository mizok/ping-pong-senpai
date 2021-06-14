import { playerNumber } from './data';

export function initUI(socket) {
  let createGameBtn = document.querySelector('#create-game');
  let showJoinGamePromptBtn = document.querySelector('#show-join-game-prompt');
  let confirmJoinGameBtn = document.querySelector('#confirm-join-game');
  let roomCodeInput = document.querySelector('#room-code-input');
  let roomCodeDisplay = document.querySelector('#room-code-display');
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

  socket.on('genRoomCode', (data) => {
    roomCodeDisplay.innerHTML = data;
  })

  initTrigger();

  return initUIPromise;
}

export function hideInitialScreen() {
  let initialScreen = document.querySelector('#initial-screen');
  initialScreen.style.display = 'none';
}


function showJoinGamePrompt() {

}

function newGame(socket) {
  socket.emit('newGame');
}

function confirmJoinGame(socket, roomCode) {
  socket.emit('joinGame', roomCode);
}
