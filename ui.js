import { $ } from './core/lib/dom';
import { toggle, toggleClass } from './core/lib/dom';
import { playerRef } from './data'


export function initUI(socket) {
  // query Elements
  let createGameBtn = $('#create-game');
  let showJoinGamePromptBtn = $('#show-join-game-prompt');
  let confirmJoinGameBtn = $('#confirm-join-game');
  let roomCodeInput = $('#room-code-input');
  let roomCodeDisplay = $('#room-code-display');
  let nameInput = $('#name-input');
  let nameConfirm = $('#name-confirm');
  let leaveWaitingBtn = $('#leave-waiting');

  // 建立 iniUI Promise 
  let initTrigger;
  let initUIPromise = new Promise((res, rej) => {
    initTrigger = res;
  })


  // 宣告 flag, 目的是用來判定到底namePrompt 是從哪一個管道去call出來的
  let flag;


  //綁定確認送出按鈕的點擊事件
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

  //綁定按鈕點擊後開啟name-input-prompt => joinGame prompt
  showJoinGamePromptBtn.addEventListener('click', () => {
    flag = 'onJoin';
    togglePopout('name-input-prompt', true);
  });

  //綁定按鈕點擊後送出想參加的房間碼的事件
  confirmJoinGameBtn.addEventListener('click', () => {
    let roomCode = roomCodeInput.value;
    confirmJoinGame(socket, roomCode);
  })

  //綁定按鈕點擊後開啟name-input-prompt => newGame prompt
  createGameBtn.addEventListener('click', () => {
    flag = 'onCreate';
    togglePopout('name-input-prompt', true);
  });

  leaveWaitingBtn.addEventListener('click', () => {
    socket.emit('leaveWaiting');
    togglePopout('room-code-display-popout', false);
  })

  //綁定當server傳來'genRoomCode'訊號後，ui 應產生的對應行為
  socket.on('genRoomCode', (data) => {
    roomCodeDisplay.innerHTML = data;
  })

  //綁定當server傳來'playerJoined'訊號後，ui 應產生的對應行為
  socket.on('playerJoined', (data) => {
    if (data.playerNumber === 2) {
      if (playerRef.number == 1) {
        document.querySelectorAll('[data-role="opponent"]').forEach(ele => {
          ele.innerHTML = data.playerName;
        });
      }
      toggleShowOnFull(true);
      toggleHideOnFull(false);
      togglePopout('join-game-prompt', false);
    }
  })


  //綁定當server傳來'gameInit'訊號後，ui 應產生的對應行為
  socket.on('gameInit', () => {
    hideInitialScreen();
  })


  // 觸發 promise fullfill機制
  initTrigger();

  // 回傳 fullfill後的promise
  return initUIPromise;
}

/**
 * 開啟 popout
 *
 * @param {*} id
 * @param {*} status
 */
function togglePopout(id, status) {
  let popout = $(`.popout#${id}`);
  if (status) {
    popout.classList.add('popout--show');
  }
  else {
    popout.classList.remove('popout--show');
  }
}
/**
 * 隱藏起始畫面
 *
 */
function hideInitialScreen() {
  let initialScreen = $('#initial-screen');
  initialScreen.style.display = 'none';
}
/**
 *  開關具有hide-on-full屬性的ui element,
 *
 * @param {*} status
 */
function toggleHideOnFull(status) {
  document.querySelectorAll('[hide-on-full]').forEach(ele => {
    ele.setAttribute('hide-on-full', status ? '' : 'hide');
  })
}
/**
 * 開關具有show-on-full屬性的ui element,
 *
 * @param {*} status
 */
function toggleShowOnFull(status) {
  document.querySelectorAll('[show-on-full]').forEach(ele => {
    ele.setAttribute('show-on-full', status ? '' : 'hide');
  })
}


/**
 * 建立新遊戲
 *
 * @param {*} socket
 */
function newGame(socket) {
  playerRef.number = 1;
  togglePopout('room-code-display-popout', true);
  socket.emit('newGame');
}
/**
 * 向server發出確認參加遊戲的信號
 *
 * @param {*} socket
 * @param {*} roomCode
 */
function confirmJoinGame(socket, roomCode) {
  playerRef.number = 2;
  socket.emit('joinGame', roomCode);
}
/**
 * 
 * 確認輸入的暱稱後，把遊戲內所有data-role="name" 的 element, 內容都換成輸入的name, 並同時向server發送'nameConfirm'的訊號
 * 最後關閉name-input-prompt
 * @param {*} socket
 * @param {*} name
 * @param {*} cb
 */
function confirmName(socket, name, cb) {
  playerRef.name = name;
  socket.emit('nameConfirm', name);
  document.querySelectorAll(`[data-role="name"]`).forEach((o, i) => {
    o.innerHTML = name;
  })
  togglePopout('name-input-prompt', false);
}
