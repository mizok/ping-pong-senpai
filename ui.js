import { playerNumber } from './data';
import { $ } from './core/lib/dom'


export function initUI(socket) {
  let createGameBtn = $('#create-game');
  let showJoinGamePromptBtn = $('#show-join-game-prompt');
  let confirmJoinGameBtn = $('#confirm-join-game');
  let roomCodeInput = $('#room-code-input');
  let roomCodeDisplay = $('#room-code-display');
  let initTrigger;
  let initUIPromise = new Promise((res, rej) => {
    initTrigger = res;
  })

  //bind events
  showJoinGamePromptBtn.addEventListener('click', () => {
    togglePopout('join-game-prompt', true);
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


function togglePopout(id, status) {
  let popout = $(`.popout#${id}`);
  if (status) {
    popout.classList.add('popout--show');
  }
  else {
    popout.classList.remove('popout--show');
  }
}

export function hideInitialScreen() {
  let initialScreen = $('#initial-screen');
  initialScreen.style.display = 'none';
}

function newGame(socket) {
  togglePopout('room-code-display-popout', true);
  socket.emit('newGame');
}

function confirmJoinGame(socket, roomCode) {
  socket.emit('joinGame', roomCode);
}
