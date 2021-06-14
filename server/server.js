const io = require('./io');
const { stateStorage, clientRooms, getGameStatus, genGameState } = require('./data');
const { genRandomId } = require('./util');
const { FRAME_RATE } = require('./constant');

io.on("connection", (client) => {
  // 送出server 上線訊號
  client.emit('greeting', { data: 'hello player' });

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
  client.number = 1;
  client.emit('init', 1)
}


function joinGameHandler(client, roomCode) {
  const room = io.sockets.adapter.rooms[roomCode];

  let usersInThisRoom;
  if (room) {
    usersInThisRoom = room.sockets;
  }
  // 計算該房user 數量
  let numClients = 0;
  if (usersInThisRoom) {
    numClients = Object.keys(allUsers).length;
  }

  // 如果該房內玩家數量為空
  if (numClients === 0) {
    client.emit('unknownCode');
    return;
  }
  // 若該房人數在超過1人
  else if (numClients > 1) {
    client.emit('tooManyPlayers');
    return;
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
