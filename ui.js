export function initUI(socket) {
  let createGameBtn = document.querySelector('#create-game');
  let showJoinGamePromptBtn = document.querySelector('#show-join-game-prompt');
  let confirmJoinGameBtn = document.querySelector('#confirm-join-game');
  let roomCodeInput = document.querySelector('#room-code-input');
  let initTrigger;
  let initGamePromise = new Promise((res, rej) => {
    initTrigger = res;
  })

  //bind events

  showJoinGamePromptBtn.addEventListener('click', () => {
    showJoinGamePrompt();
  });

  createGameBtn.addEventListener('click', () => {
    newGame(socket, initTrigger);
  });

  confirmJoinGameBtn.addEventListener('click', () => {
    let roomCode = roomCodeInput.value;
    confirmJoinGame(socket, roomCode, initTrigger);
  })

  return initGamePromise;

}

function showJoinGamePrompt() {

}

function hideInitialScreen() {
  let initialScreen = document.querySelector('#initial-screen');
  initialScreen.style.display = 'none';
}

function newGame(socket, initTrigger) {
  socket.emit('newGame');
  proceed(initTrigger);
}

function confirmJoinGame(socket, roomCode, initTrigger) {
  socket.emit('joinGame', roomCode);
  initGame(initTrigger);
}

function initGame(initTrigger) {
  hideInitialScreen();
  initTrigger();
}