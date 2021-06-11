import { gameBuilder } from './core/engine';

let HOST = location.origin.replace(/^http/, 'ws')
let ws = new WebSocket(HOST);
let id = new Date().getTime();
let game;
let gameController;
let localData = {
  login: false,
  id: id,
  cursor: {
    x: 0,
    y: 0
  }
}

ws.onmessage = (event) => {
  // 取回整體遊戲當前狀況資料
  let dataFromServer = JSON.parse(event.data);

  if (dataFromServer.connected === true) {
    ws.send(JSON.stringify(localData));
    game = gameBuilder();
    game.promise.then((instance) => {
      localData.login = true;
      document.body.addEventListener('mousemove', (event) => {
        localData.cursor.x = event.pageX;
        localData.cursor.y = event.pageY;
      })
      gameController = instance;
    })
    game.start();
  }
  else {
    // 渲染遊戲畫面
    gameController.draw(dataFromServer);
    // 把當前玩家操作狀況送給server
    // 注意送出前都要先轉字串
    ws.send(JSON.stringify(localData));
  }

};

ws.onclose = (event) => {
  ws.send(JSON.stringify(localData));
}
