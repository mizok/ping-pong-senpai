const io = require('./io');
const dataStorage = require('./data');

io.on("connection", (socket) => {
  socket.emit('init', { data: 'hello player' });
  socket.on('disconnect', () => console.log('Client disconnected'));
});

