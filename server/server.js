const io = require('./io');
const { stateStorage, clientRooms, getGameStatus, genGameState } = require('./data');
const { genRandomId } = require('./util');
const { FRAME_RATE } = require('./constant');

io.on("connection", (client) => {
  // 送出server 上線訊號
  client.emit('greeting');

  client.on('nameConfirm', data => {
    client.name = data;
  })

  client.on('newGame', (data) => {
    newGameHandler(client, data)
  });

  client.on('leaveStartingGame', (data) => {
    leaveStartingGameHandler(data, client);
  })

  client.on('leaveWaiting', () => {
    // 關閉該client 所存在的房間,也就是移除所有玩家
    closeRoomHandler(client);
  })

  client.on('joinGame', (roomCode) => { joinGameHandler(client, roomCode) });

  client.on('startMatch', () => {
    startMatchHandler(client);
  })

  client.on('playerMovePlus', (data) => {
    let roomId = client.roomId;
    let positionNow = stateStorage[roomId].players[data.number - 1].position.x;
    let playerWidth = stateStorage[roomId].players[data.number - 1].width;
    let courtSize = stateStorage[roomId].court.width;
    if (positionNow + 20 >= courtSize - playerWidth / 2) return;
    stateStorage[roomId].players[data.number - 1].position.x += 20;
    if (stateStorage[roomId].ball.isStuck) {
      let ballIsHoldBy = stateStorage[roomId].ball.isHoldBy;
      stateStorage[roomId].ball.position.x = stateStorage[roomId].players[ballIsHoldBy].position.x;
    }
  })

  client.on('playerMoveMinus', (data) => {
    let roomId = client.roomId;
    let positionNow = stateStorage[roomId].players[data.number - 1].position.x;
    let playerWidth = stateStorage[roomId].players[data.number - 1].width;
    if (positionNow - 20 <= playerWidth / 2) return;
    stateStorage[roomId].players[data.number - 1].position.x -= 20;
    if (stateStorage[roomId].ball.isStuck) {
      let ballIsHoldBy = stateStorage[roomId].ball.isHoldBy;
      stateStorage[roomId].ball.position.x = stateStorage[roomId].players[ballIsHoldBy].position.x;
    }
  })

  client.on('playerLaunchBall', (data) => {
    let roomId = client.roomId;
    stateStorage[roomId].ball.isStuck = false;
  })



  // 綁定server 下線事件
  client.on('disconnecting', () => {
    disconnectHandler(client);
  });
});


function newGameHandler(client, data) {
  let roomCode = genRandomId(5);
  clientRooms[client.id] = roomCode;
  client.emit('genRoomCode', roomCode);
  stateStorage[roomCode] = genGameState(data);
  client.join(roomCode);
  client.roomId = roomCode;
  client.number = 1;
  client.emit('playerJoined', {
    playerNumber: 1,
    playerName: client.name
  })
}


async function joinGameHandler(client, roomCode) {
  const roomsOnServer = io.sockets.adapter.rooms;
  const room = roomsOnServer.get(roomCode);

  //如果房間不存在
  if (!room) {
    client.emit('unknownCode');
    return;
  }


  const socketInstances = await io.in(roomCode).fetchSockets();
  // 這邊判斷指定房名玩家數量的方法是根據當前該房有多少socket實例來判斷

  if (socketInstances.indexOf(client) != -1) {
    client.emit('hostCantBeGuest');
    return;
  }


  // 如果該房內玩家數量為空
  if (!socketInstances.length) {
    client.emit('unknownCode');
    return;
  }
  // 若該房人數在超過1人
  else if (socketInstances.length > 1) {
    client.emit('tooManyPlayers');
    return;
  }
  else {

    client.join(roomCode);
    client.number = 2;
    client.roomId = roomCode;
    client.emit('playerJoined', {
      playerNumber: 2,
      playerName: client.name,
      hostName: socketInstances[0].name
    })
    client.in(roomCode).emit('playerJoined', {
      playerNumber: 2,
      playerName: client.name,
      hostName: socketInstances[0].name
    })
  }
}

async function leaveStartingGameHandler(data, client) {
  let socketInstances = await io.in(client.roomId).fetchSockets();
  let players = {
    host: client.name,
    challenger: socketInstances[1].name
  }
  if (data.number === 1) {
    socketInstances[0].emit('leave', players);
    socketInstances[1].emit('host-leave', players);
    closeRoomHandler(client);
  }
  else if (data.number === 2) {
    socketInstances[1].emit('leave', players);
    socketInstances[0].emit('challenger-leave', players);
    socketInstances[1].leave(client.roomId);
  }
}

async function disconnectHandler(client) {
  let socketInstances = await io.in(client.roomId).fetchSockets();
  if (socketInstances.length <= 1 || !socketInstances) return;
  let players = {
    host: client.name,
    challenger: socketInstances[1].name
  }
  if (client.number === 1) {
    socketInstances[1].emit('host-leave', players);
    closeRoomHandler(client);
  }
  else if (client.number === 2) {
    socketInstances[0].emit('challenger-leave', players);
    socketInstances[1].leave(client.roomId);
  }

}

async function closeRoomHandler(client) {

  let roomId = client.roomId;

  let socketInstances = await io.in(client.roomId).fetchSockets();
  socketInstances.forEach(socket => {
    socket.leave(roomId)
  })
}


async function startMatchHandler(client) {
  let socketInstances = await io.in(client.roomId).fetchSockets();
  socketInstances.forEach(client => {
    client.emit('gameInit');
    startGameInterval(client);
  })
}


function startGameInterval(client) {
  let roomCode = client.roomId;
  const intervalId = setInterval(() => {
    const gameStatus = getGameStatus(stateStorage[roomCode]);
    if (!stateStorage[roomCode]) return;
    if (gameStatus.end) {
      client.emit('gameOver', JSON.stringify(stateStorage[roomCode]));
      clearInterval(intervalId);
    }
    else {
      client.emit('gameProceeding', JSON.stringify(stateStorage[roomCode]))
    }
  }, 1000 / FRAME_RATE)
}
