const io = require('./io');
const dataStorage = require('./data');
const { getGameStatus } = require('./game');
const { FRAME_RATE } = require('./constant');

io.on("connection", (socket) => {
  // 送出server 上線訊號
  socket.emit('init', { data: 'hello player' });



  startGameInterval(socket, dataStorage);
  // 綁定server 下線事件
  socket.on('disconnect', () => console.log('Client disconnected'));
});



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
