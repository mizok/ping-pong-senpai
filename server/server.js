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

  client.on('newGame', () => {
    newGameHandler(client)
  });

  client.on('leaveStartingGame', (data) => {
    leaveStartingGameHandler(data, client);
  })

  client.on('leaveWaiting', async () => {
    // 關閉該client 所存在的房間,也就是移除所有玩家
    closeRoomHandler(client);
  })

  client.on('joinGame', (roomCode) => { joinGameHandler(client, roomCode) });

  client.on('startMatch', () => {
    startMatchHandler(client);
  })


  startGameInterval(client, stateStorage);
  // 綁定server 下線事件
  client.on('disconnecting', () => {
    disconnectHandler(client);
  });
});


function newGameHandler(client) {
  let roomCode = genRandomId(5);
  clientRooms[client.id] = roomCode;
  client.emit('genRoomCode', roomCode);
  stateStorage[roomCode] = genGameState();
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
  if (socketInstances.length === 0 || !socketInstances) return;
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
  })
}


function startGameInterval(client, roomCode) {
  const intervalId = setInterval(() => {
    const gameStatus = getGameStatus(stateStorage[roomCode]);
    if (gameStatus.end) {
      client.emit('gameOver', JSON.stringify(stateStorage[roomCode]));
      clearInterval(intervalId);
    }
    else {
      client.emit('gameProceeding', JSON.stringify(stateStorage[roomCode]))
    }
  }, 1000 / FRAME_RATE)
}
