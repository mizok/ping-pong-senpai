const express = require('express');
const CACHE = require('./cache');
const PORT = process.env.PORT || 3000;
const INDEX = '/index.html';
const FPS = 60;

const server = express()
  .use(express.static('build'), (req, res) => res.sendFile(INDEX, { root: __dirname + '/build' }))
  .listen(PORT, () => console.log(`Server online, Listening on ${PORT}`));


const WebsocketServer = require('ws').Server;

const wsServer = new WebsocketServer({ server });
let intervalID;

wsServer.on('connection', (client) => {
  client.send(JSON.stringify({ connected: true }));

  client.on('message', (data) => {
    let parseData = JSON.parse(data);
    if (parseData.login === false) {
      CACHE.clients.push(parseData);
    }
    for (let i = 0; i < CACHE.clients.length; i++) {
      if (CACHE.clients[i].id === parseData.id) {
        CACHE.clients[i] = parseData;
      }
    }
  })

  client.on('close', () => {
    clearInterval(intervalID)
  });


  intervalID = setInterval(() => {
    wsServer.clients.forEach((client) => {
      client.send(JSON.stringify(CACHE));
    });
  }, 1000 / FPS);
});

