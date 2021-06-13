const express = require('express');
const socketIO = require('socket.io');
const PORT = process.env.PORT || 3000;
const INDEX = '/index.html';


const expressServer = express()
  .use(express.static('../build'), (req, res) => res.sendFile(INDEX))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));


const io = socketIO(expressServer, {});


module.exports = io;