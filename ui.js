import { $ } from './core/lib/dom';
import { parents } from './core/lib/dom';
import { playerRef } from './data'


export function initUI(socket) {
  // status
  let gameCreated, joined, nameConfirmed, gameStarted;
  // query Elements
  let createGameBtn = $('#create-game');  //  bindEvent : gameCreated
  let showJoinGamePromptBtn = $('#show-join-game-prompt'); //  bindEvent
  let confirmJoinGameBtn = $('#confirm-join-game'); //  bindEvent: joined
  let roomCodeInput = $('#room-code-input');
  let roomCodeDisplay = $('#room-code-display');
  let nameInput = $('#name-input');
  let nameConfirm = $('#name-confirm'); //  bindEvent nameConfirmed
  let leaveWaitingBtn = $('#leave-waiting'); //  bindEvent
  let leaveGameStartAlert = $('#leave-game-start-alert'); //  bindEvent
  let gameStart = $('#game-start'); //  bindEvent

  // 建立 iniUI Promise 
  let initTrigger;
  let initUIPromise = new Promise((res, rej) => {
    initTrigger = res;
  })

  //...文字
  setInterval(() => {
    document.querySelectorAll('[data-role="..."]').forEach(ele => {
      if (ele.innerHTML.length < 3) {
        ele.innerHTML += '.'
      }
      else {
        ele.innerHTML = ''
      }
    })
  }, 500)

  //綁定關閉popout
  document.querySelectorAll('[close-this-popout]').forEach(ele => {
    let parentPopouts = parents(ele, '.popout');
    ele.addEventListener('click', () => {
      togglePopout(parentPopouts[0].id, false);
    })
  })


  // 宣告 flag, 目的是用來判定到底namePrompt 是從哪一個管道去call出來的
  let flag;


  //綁定確認送出按鈕的點擊事件
  nameConfirm.addEventListener('click', () => {
    if (nameConfirmed || gameCreated || joined) return;
    let name = nameInput.value ? nameInput.value : playerRef.name;
    confirmName(socket, name);
    if (flag === 'onJoin') {
      togglePopout('join-game-prompt', true);
    }
    else if (flag === 'onCreate') {
      if (!gameCreated) {
        newGame(socket);
        gameCreated = true;
        joined = true;
        nameConfirmed = true;
      }
      else {
        return
      }
    }
  })

  //綁定按鈕點擊後開啟name-input-prompt => joinGame prompt
  showJoinGamePromptBtn.addEventListener('click', () => {
    flag = 'onJoin';
    togglePopout('name-input-prompt', true);
  });

  //綁定按鈕點擊後送出想參加的房間碼的事件
  confirmJoinGameBtn.addEventListener('click', () => {
    if (!joined) {
      let roomCode = roomCodeInput.value;
      confirmJoinGame(socket, roomCode);
      joined = true;
      gameCreated = true;
      nameConfirmed = true;
    }
    else {
      return;
    }
  })

  //綁定按鈕點擊後開啟name-input-prompt => newGame prompt
  createGameBtn.addEventListener('click', () => {
    flag = 'onCreate';
    togglePopout('name-input-prompt', true);
  });

  //綁定第一離開按鈕
  leaveWaitingBtn.addEventListener('click', () => {
    socket.emit('leaveWaiting');
    gameCreated = false;
    joined = false;
    nameConfirmed = false;
    togglePopout('room-code-display-popout', false);
  })
  //綁定第二離開按鈕
  leaveGameStartAlert.addEventListener('click', () => {
    socket.emit('leaveStartingGame', playerRef);
    togglePopout('game-start-alert', false);
  })

  gameStart.addEventListener('click', () => {
    if (!gameStarted) {
      socket.emit('startMatch');
      gameStarted = true;
    }
    else {
      return
    }
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
          ele.innerHTML = `YOUR OPPONENT ${data.playerName} SHOWS UP!`
        });
        document.querySelectorAll('[data-role="player2"]').forEach(ele => {
          ele.style.display = 'none';
        })
      }
      else if (playerRef.number == 2) {
        document.querySelectorAll('[data-role="opponent"]').forEach(ele => {
          ele.innerHTML = `WAITING FOR THE ROOM HOST<br><br>${data.hostName}<br><br>TO ACCEPT YOUR CHALLENGE<span data-role="..."></span>`
        });
        document.querySelectorAll('[data-role="player1"]').forEach(ele => {
          ele.style.display = 'none';
        })
      }
      togglePopout('room-code-display-popout', false);
      togglePopout('join-game-prompt', false);
      togglePopout('game-start-alert', true);
    }
  })

  socket.on('host-leave', (data) => {
    togglePopout('game-start-alert', false);
    togglePopout('leave-alert', true);
    gameStarted = false;
    joined = false;
    nameConfirmed = false;
    gameCreated = false;

    $('[data-role="leave-msg"]').innerHTML = `HOST ${data.host} LEFT AND SHUTDOWN THE ROOM.`
  })

  socket.on('challenger-leave', (data) => {
    togglePopout('game-start-alert', false);
    togglePopout('leave-alert', true);
    togglePopout('room-code-display-popout', true);
    gameStarted = false;
    joined = false;
    nameConfirmed = false;
    gameCreated = false;

    $('[data-role="leave-msg"]').innerHTML = `CHALLENGER ${data.challenger} LEFT THIS MATCH.`
  })

  socket.on('leave', () => {
    gameStarted = false;
    joined = false;
    nameConfirmed = false;
    gameCreated = false;
  })

  //綁定當server傳來'gameInit'訊號後，ui 應產生的對應行為
  socket.on('gameInit', () => {

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
 *  開關具有hide-on-action屬性的ui element,
 *
 * @param {*} status
 */
function toggleHideOnAction(status) {
  document.querySelectorAll('[hide-on-action]').forEach(ele => {
    ele.setAttribute('hide-on-action', status ? '' : 'hide');
  })
}
/**
 * 開關具有show-on-full屬性的ui element,
 *
 * @param {*} status
 */
function toggleShowOnAction(status) {
  document.querySelectorAll('[show-on-action]').forEach(ele => {
    ele.setAttribute('show-on-action', status ? '' : 'hide');
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
