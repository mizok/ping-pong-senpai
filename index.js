import { initUI } from './ui';
const socket = require('socket.io-client')('http://localhost:3000');

let uiInitPromise = initUI(socket);
uiInitPromise.then(() => {

})

socket.on('init', (data) => {

})
