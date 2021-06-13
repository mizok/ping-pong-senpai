const io = require('./io');
const dataStorage = require('./data');

io.on("connection", (socket) => {
  console.log('Client connected');
  socket.on('disconnect', () => console.log('Client disconnected'));
});
