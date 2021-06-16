import { $ } from './core/lib/dom';
import { toggle, toggleClass } from './core/lib/dom';
import { playerRef } from './data'


export function initUI(socket) {
  let createGameBtn = $('#create-game');
  let showJoinGamePromptBtn = $('#show-join-game-prompt');
  let confirmJoinGameBtn = $('#confirm-join-game');
  let roomCodeInput = $('#room-code-input');
  let roomCodeDisplay = $('#room-code-display');
  let nameInput = $('#name-input');
  let nameConfirm = $('#name-confirm');
  let initTrigger;
  let initUIPromise = new Promise((res, rej) => {
    initTrigger = res;
  })

  let flag;

  nameConfirm.addEventListener('click', () => {
    let name = nameInput.value;
    confirmName(socket, name);
    if (flag === 'onJoin') {
      togglePopout('join-game-prompt', true);
    }
    else if (flag === 'onCreate') {
      newGame(socket);
    }
  })


  //bind events
  showJoinGamePromptBtn.addEventListener('click', () => {
    flag = 'onJoin';
    togglePopout('name-input-prompt', true);
  });

  createGameBtn.addEventListener('click', () => {
    flag = 'onCreate';
    togglePopout('name-input-prompt', true);
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


export function togglePopout(id, status) {
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

export function toggleWaitingOpponent(status) {
  toggleClass('#game-start', 'button--hidden', !status);
  toggle('#waiting-opponent-msg', !status);
}

function newGame(socket) {
  playerRef.number = 0;
  togglePopout('room-code-display-popout', true);
  socket.emit('newGame');
}

function confirmJoinGame(socket, roomCode) {
  socket.emit('joinGame', roomCode);
}

function confirmName(socket, name, cb) {
  playerRef.name = name;
  socket.emit('nameConfirm', name);
  document.querySelectorAll(`[data-role="name"]`).forEach((o, i) => {
    o.innerHTML = name;
  })
  togglePopout('name-input-prompt', false);
}
