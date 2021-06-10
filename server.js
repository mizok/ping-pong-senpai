import { CACHE } from './cache.js';
const express = require('express');
const WebsocketServer = require('ws').Server;
const FPS = 60;

const PORT = process.env.PORT || 3000;
const INDEX = './build/index.html';

const expressServer = express()
  .use((req, res) => res.sendFile(INDEX, { root: __dirname }))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));



const wsServer = new WebsocketServer({ expressServer });

wsServer.on('connection', (ws) => {
  console.log('Client connected');
  ws.on('close', () => console.log('Client disconnected'));
});

setInterval(() => {
  wss.clients.forEach((client) => {
    client.send();
  });
}, 1000 / FPS);