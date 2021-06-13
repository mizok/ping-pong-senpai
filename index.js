const socket = require('socket.io-client')('http://localhost:3000');

socket.on('init', (data) => {
  console.log(data);
})