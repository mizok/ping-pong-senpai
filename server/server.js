const io = require('./io');
const { dataStorage, clientRooms, state } = require('./data');
const { getGameStatus, genRandomId } = require('./util');
const { FRAME_RATE } = require('./constant');

io.on("connection", (socket) => {
  // 送出server 上線訊號
  socket.emit('greeting', { data: 'hello player' });

  io.on('newGame', newGameHandler);
  io.on('joinGame', joinGameHandler);

  startGameInterval(socket, dataStorage);
  // 綁定server 下線事件
  socket.on('disconnect', () => console.log('Client disconnected'));
});


function newGameHandler(client) {
  let roomCode = genRandomId(5);
  clientRooms[client.id] = roomCode;
  client.emit('genRoomCode', roomCode);
  state[roomCode] = genGame();
  client.join(roomCode);
  client.number = 1;
  client.emit('gameInit', 1)
}


function joinGameHandler(client) {

}


function startGameInterval(client, state) {
  const intervalId = setInterval(() => {
    const gameStatus = getGameStatus(state);
    if (gameStatus.end) {
      client.emit('gameOver', JSON.stringify(state));
      clearInterval(intervalId);
    }
    else {
      client.emit('gameProceeding', JSON.stringify(state))
    }
  }, 1000 / FRAME_RATE)
}
