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
  client.on('joinGame', (roomCode) => { joinGameHandler(client, roomCode) });

  startGameInterval(client, stateStorage);
  // 綁定server 下線事件
  client.on('disconnect', () => console.log('Client disconnected'));
});


function newGameHandler(client) {
  let roomCode = genRandomId(5);
  clientRooms[client.id] = roomCode;
  client.emit('genRoomCode', roomCode);
  stateStorage[roomCode] = genGameState();
  client.join(roomCode);
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
    client.emit('playerJoined', {
      playerNumber: 2,
      playerName: client.name
    })
    client.in(roomCode).emit('playerJoined', 2)
  }
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
