import { Canvas2DFxBase, boot } from './lib/base';
import { StrokeAnimation, Swirl8Bit, StarSky } from './lib/animation';
import { getCacheCanvas } from './lib/util';
import { playersData, ballData, courtData, playerRef } from '../data';
import { drawRect, drawCircle } from './lib/shape'
import { randomWithinRange, padString } from './lib/function';

const DEFAULT = {
  bgColor: 'rgba(0,0,0,1)',
  courtColor: 'rgba(255,255,255,1)',
  courtAspectRatio: 5 / 3
}

export class Engine extends Canvas2DFxBase {
  constructor(ele, defaultConfig, config) {
    super(ele, defaultConfig, config)
    this.pixelBase = 1440;
    this.init();
    this.fps = 30;
    this.courtOffset = 75;
    this.courtOffsetMobile = 25;
    this.gameStatus = 0;
    this.pause = false;
    this.playersThickness = 20;
    //0: not start yet
    //1: curtain animating
    //2: court animating
    //3: animating players and scroeboard
    //4: game is ready
  }

  init() {
    this.curtain = this.genCurtain();// 最底層canvas
    this.court = this.genCourt();//最底層canvas
    this.starSky = this.genStarSky();//倒數第二層canvas
    this.players = this.genPlayers();//倒數第三層canvas
    this.ball = this.genBall();//倒數第四層canvas
    this.scoreboards = this.genScoreboards();//最表層canvas
    this.initResized();
  }

  initResized() {
    this.resizedCallback = () => {
      this.curtain.drawStatic()
        .then(() => {
          if (this.gameStatus === 3) {
            this.background('black');
          }
          this.court.drawStatic();
        })
    }
  }

  genCurtain(bandWidth = 30) {
    let curtainCanvasInstance = this.curtainCanvasInstance = this.createVirtualCanvasBaseInstance();
    curtainCanvasInstance.setCanvasSize(this.cvs.width, this.cvs.height);
    let curtainAnimationInstance = new Swirl8Bit(curtainCanvasInstance.ctx);
    let curtain = {
      animate: () => {
        let initialImage = getCacheCanvas(this.ctx);
        let promise = curtainAnimationInstance.animate(false, bandWidth, this.config.bgColor);
        let interval = setInterval(() => {
          this.clear();
          this.ctx.drawImage(initialImage, 0, 0, this.cvs.width, this.cvs.height, 0, 0, this.cvs.width, this.cvs.height);
          this.ctx.drawImage(curtainCanvasInstance.cvs, 0, 0, curtainCanvasInstance.cvs.width, curtainCanvasInstance.cvs.height, 0, 0, this.cvs.width, this.cvs.height);
        }, this.fps);
        return promise.then(() => {
          return new Promise((res) => {
            setTimeout(() => {
              clearInterval(interval);
              res();
            }, 500)
          })
        })
      },
      drawStatic: () => { //
        let trigger;
        let promise = new Promise((res, rej) => {
          trigger = res;
        })
        let staticImage = curtainCanvasInstance.cvs;
        this.ctx.drawImage(
          staticImage,
          0,
          0,
          staticImage.width,
          staticImage.height,
          0,
          0,
          this.cvs.width,
          this.cvs.height
        )
        trigger();
        return promise;
      }
    };
    return curtain;
  }

  getAspectRatio() {
    return this.cvs.width / this.cvs.height;
  }

  responsivePainter(targetLayer, sourceCanvas, initialImage) {
    let offset = this.courtOffset;
    let offsetMobile = this.courtOffsetMobile;
    targetLayer.ctx.save();
    targetLayer.clear();
    //畫court 會有四種狀況, (canvas長寬>預設長寬比>1) | (1<=canvas長寬<預設長寬比) | (預設長寬比倒數<canvas長寬比<1) ｜ (canvas長寬比<預設長寬比倒數<1)
    if (this.getAspectRatio() >= 1) {
      // 這邊是前兩種狀況
      //畫initialImage , 再畫court
      let typeA = (targetLayer.cvs.height - 2 * offset) * this.config.courtAspectRatio < targetLayer.cvs.width - 2 * offset;
      let offsetV, offsetH, courtHeight, courtWidth;
      if (typeA) {
        // 先算出縮減過offset 的cvs 寬
        offsetV = offset;
        courtHeight = targetLayer.cvs.height - 2 * offset;
        courtWidth = courtHeight * this.config.courtAspectRatio;
        offsetH = (targetLayer.cvs.width - courtWidth) / 2;
      }
      else {
        // 非typeA的狀況, 也就是canvas寬高比低於config 設定的比例
        offsetH = offset;
        courtWidth = targetLayer.cvs.width - 2 * offset;
        courtHeight = courtWidth / this.config.courtAspectRatio;
        offsetV = (targetLayer.cvs.height - courtHeight) / 2;
      }
      if (initialImage) {
        targetLayer.ctx.drawImage(
          initialImage,
          0,
          0,
          initialImage.width,
          initialImage.height,
          0,
          0,
          targetLayer.cvs.width,
          targetLayer.cvs.height
        )

      }
      // 先旋轉畫布, 因為 virtualcanvas 是一張垂直的畫布
      let rotatePram = playerRef.number == 1 ? 1 : -1
      let scalePram = playerRef.number == 1 ? 1 : -1
      targetLayer.ctx.translate(targetLayer.cvs.width / 2, targetLayer.cvs.height / 2);
      targetLayer.ctx.rotate(-Math.PI / 2);
      targetLayer.ctx.scale(1, 1 * scalePram);
      targetLayer.ctx.translate(-targetLayer.cvs.height / 2, -targetLayer.cvs.width / 2);
      // 因為court 的大小會隨著canvas 的長寬比而變動
      // 這邊先 假設今天是canvas 寬比高超出很多的情況 , 也就是狀況"typeA"
      targetLayer.ctx.drawImage(
        sourceCanvas,
        0,
        0,
        sourceCanvas.width,
        sourceCanvas.height,
        offsetV,
        offsetH,
        courtHeight,
        courtWidth
      )
    }
    else {
      //這邊是後兩種狀況
      // 因為court 的大小會隨著canvas 的長寬比而變動
      // 這邊先 假設今天是canvas 高比寬比超出很多的情況 , 也就是狀況"typeA"
      let typeA = (targetLayer.cvs.width - 2 * offsetMobile) * this.config.courtAspectRatio < targetLayer.cvs.height - 2 * offset;
      let offsetV, offsetH, courtHeight, courtWidth;
      if (typeA) {
        // 先算出縮減過offset 的cvs 寬
        offsetH = offsetMobile;
        courtWidth = targetLayer.cvs.width - 2 * offsetMobile;
        courtHeight = courtWidth * this.config.courtAspectRatio;
        offsetV = (targetLayer.cvs.height - courtHeight) / 2;
      }
      else {
        // 非typeA的狀況, 也就是canvas寬高比低於config 設定的比例
        offsetV = offset;
        courtHeight = targetLayer.cvs.height - 2 * offset;
        courtWidth = courtHeight / this.config.courtAspectRatio;
        offsetH = (targetLayer.cvs.width - courtWidth) / 2;
      }
      if (initialImage) {
        targetLayer.ctx.drawImage(
          initialImage,
          0,
          0,
          initialImage.width,
          initialImage.height,
          0,
          0,
          targetLayer.cvs.width,
          targetLayer.cvs.height
        )
      }
      let rotatePram = playerRef.number == 1 ? 2 : 1;
      let scalePram = playerRef.number == 1 ? 1 : -1;
      targetLayer.ctx.translate(targetLayer.cvs.width / 2, targetLayer.cvs.height / 2);
      targetLayer.ctx.rotate(Math.PI * rotatePram);
      targetLayer.ctx.scale(1 * scalePram, 1);
      targetLayer.ctx.translate(-targetLayer.cvs.width / 2, -targetLayer.cvs.height / 2);
      targetLayer.ctx.drawImage(
        sourceCanvas,
        0,
        0,
        sourceCanvas.width,
        sourceCanvas.height,
        offsetH,
        offsetV,
        courtWidth,
        courtHeight
      )
    }

    targetLayer.ctx.restore();
  }

  genCourt(strokeWidth = 10) {
    let courtCanvasInstance = this.courtCanvasInstance = this.createVirtualCanvasBaseInstance();
    let courtCanvasWidth = courtData.width = this.pixelBase / this.config.courtAspectRatio;
    let courtCanvasHeight = courtData.height = this.pixelBase;
    courtCanvasInstance.setCanvasSize(courtCanvasWidth, courtCanvasHeight);
    let vertices = [
      { x: 0, y: 0 },
      { x: courtCanvasInstance.cvs.width, y: 0 },
      { x: courtCanvasInstance.cvs.width, y: courtCanvasInstance.cvs.height },
      { x: 0, y: courtCanvasInstance.cvs.height },
      { x: 0, y: 0 }
    ];

    let strokeAnimationInstance = new StrokeAnimation(courtCanvasInstance.ctx, vertices);

    let court = {
      animate: () => {
        court.initialImage = getCacheCanvas(this.ctx);
        let promise = strokeAnimationInstance.animate(strokeWidth, this.config.courtColor).then(() => {
          let vertices = [
            { x: 0, y: courtCanvasInstance.cvs.height / 2 },
            { x: courtCanvasInstance.cvs.width, y: courtCanvasInstance.cvs.height / 2 },
          ]
          return new StrokeAnimation(courtCanvasInstance.ctx, vertices).animate(strokeWidth, this.config.courtColor, false, [10, 30], 'transparent');
        });
        let interval = setInterval(() => {
          this.responsivePainter(this, courtCanvasInstance.cvs, court.initialImage);
        }, this.fps)
        return promise.then(() => {
          return new Promise((res) => {
            setTimeout(() => {
              clearInterval(interval);
              res();
            }, 500)
          })
        })

      },
      drawStatic: () => {
        return new Promise((res, rej) => {
          this.responsivePainter(this, courtCanvasInstance.cvs, court.initialImage);
          res();
        })
      }
    };

    return court;
  }

  genStarSky() {
    let starSkyCanvasInstance = this.starSkyCanvasInstance = this.addNewLayer();
    let starSkyAnimationInstance = new StarSky(starSkyCanvasInstance.ctx);
    starSkyCanvasInstance.resizedCallback = starSkyAnimationInstance.refreshStars.bind(starSkyAnimationInstance);
    return starSkyAnimationInstance;
  }


  genPlayers(widthPram = 10, gapRatio = 0.05, color = 'white', thickness = 20) {
    this.playersThickness = thickness;
    let playersCanvasInstance = this.playersCanvasInstance = this.addNewLayer();
    let playersVirtualCanvasInstance = this.playersVirtualCanvasInstance = this.createVirtualCanvasBaseInstance();
    playersVirtualCanvasInstance.setCanvasSize(this.courtCanvasInstance.cvs.width, this.courtCanvasInstance.cvs.height);

    for (let i = 0; i < playersData.length; i++) {
      playersData[i].width = (this.pixelBase / this.config.courtAspectRatio) / widthPram;
      playersData[i].position.x = this.courtCanvasInstance.cvs.width / 2;
      if (i === 0) {
        playersData[i].position.y = this.courtCanvasInstance.cvs.height * (1 - gapRatio)
      }
      else if (i === 1) {
        playersData[i].position.y = this.courtCanvasInstance.cvs.height * gapRatio
      }
    }
    let players = {
      ready: () => {
        let trigger;
        let promise = new Promise(res => {
          trigger = res;
        })
        let opacity = 0;
        let interval = setInterval(() => {
          if (opacity >= 1) {
            clearInterval(interval);
            trigger();
          }
          for (let i = 0; i < playersData.length; i++) {
            drawRect(playersVirtualCanvasInstance.ctx, playersData[i].position.x, playersData[i].position.y, playersData[i].width, thickness, color, opacity);
          }
          this.responsivePainter(playersCanvasInstance, playersVirtualCanvasInstance.cvs);
          opacity += 0.01;
        }, this.fps)
        return promise;
      },

      loopUpdate: () => {
        let interval = setInterval(() => {
          playersVirtualCanvasInstance.clear();
          for (let i = 0; i < playersData.length; i++) {
            drawRect(playersVirtualCanvasInstance.ctx, playersData[i].position.x, playersData[i].position.y, playersData[i].width, thickness, color, 1);
          }
          this.responsivePainter(playersCanvasInstance, playersVirtualCanvasInstance.cvs);
        }, this.fps)
      }
    }

    return players;
  }

  genScoreboards() {
    let scoreboardsLayer = this.addDivLayer('scoreboards', 'scoreboards');
    let topBar = document.createElement('div');
    let botBar = document.createElement('div');
    topBar.classList.add('scoreboards__top-bar');
    botBar.classList.add('scoreboards__bot-bar');
    scoreboardsLayer.append(topBar, botBar);
    let genPlayerShowcase = (playerName, playerId, scoreMax) => {

      let playerShowCase = document.createElement('div');
      playerShowCase.classList.add('player-showcase');
      playerShowCase.id = `player${playerId}`;
      let innerHTML = `
        <div class="player-showcase__name">${playerName}</div>
        <div class="player-showcase__score">
          0000   
        </div>
      `
      playerShowCase.innerHTML = innerHTML;
      return playerShowCase;
    }
    for (let i = 0; i < playersData.length; i++) {
      topBar.append(genPlayerShowcase(playersData[i].name, playersData[i].id, 5))
    }
    let scoreboards = {
      update: () => {
        for (let i = 0; i < playersData.length; i++) {
          scoreboardsLayer.querySelector(`#player${i}`).querySelector('.player-showcase__name').innerHTML = playersData[i].name;
          scoreboardsLayer.querySelector(`#player${i}`).querySelector('.player-showcase__score').innerHTML = padString(playersData[i].score, 4);
        }
      },
      ready: () => {
        scoreboardsLayer.classList.add('scoreboards--ready');
      }
    }

    return scoreboards
  }

  genBall(speed = 100, size = 30, color = 'white') {
    let ballCanvasInstance = this.ballCanvasInstance = this.addNewLayer();
    let ballVirtualCanvasInstance = this.ballVirtualCanvasInstance = this.createVirtualCanvasBaseInstance();
    ballVirtualCanvasInstance.setCanvasSize(this.courtCanvasInstance.cvs.width, this.courtCanvasInstance.cvs.height);

    //init ballData

    ballData.speed = {
      x: randomWithinRange(0, speed),
      y: randomWithinRange(0, speed)
    }
    ballData.size = size;
    ballData.color = color;
    ballData.position = {
      x: playersData[0].position.x, //房主先持球
      y: playersData[0].position.y - this.playersThickness - 10
    };

    let ball = {
      ready: () => {
        let trigger;
        let promise = new Promise(res => {
          trigger = res;
        })
        let opacity = 0;
        setTimeout(() => {
          let interval = setInterval(() => {
            if (opacity >= 1) {
              clearInterval(interval);
              trigger();
            }
            drawCircle(ballVirtualCanvasInstance.ctx, ballData.position.x, ballData.position.y, ballData.size, ballData.color, opacity);
            this.responsivePainter(ballCanvasInstance, ballVirtualCanvasInstance.cvs);

            opacity += 0.01;
          }, this.fps)
        }, 500)
        return promise;
      },
      loopUpdate: () => {
        let interval = setInterval(() => {
          ballVirtualCanvasInstance.clear();
          drawCircle(ballVirtualCanvasInstance.ctx, ballData.position.x, ballData.position.y, ballData.size, ballData.color);
          this.responsivePainter(ballCanvasInstance, ballVirtualCanvasInstance.cvs);
        }, this.fps)
      }
    }
    return ball;
  }

  drawGame() {
    this.gameStatus = 1;
    this.starSky.animate();
    let promise = this.curtain.animate()
      .then(() => {
        this.gameStatus = 2;
        return this.court.animate();
      })
      .then(() => {
        this.gameStatus = 3;
        let playersReady = this.players.ready();
        let ballReady = this.ball.ready();
        let scoreboardsReady = this.scoreboards.ready();
        let allReadyPromise = Promise.all([
          playersReady, ballReady, scoreboardsReady
        ])
        return allReadyPromise;
      })
      .then(() => {
        this.gameStatus = 4;
        let gameReadyPromise = new Promise((res, rej) => {
          this.initGameDataUpdateInterval();
          res();
        })
        return gameReadyPromise;
      })
    return promise;
  }

  initGameDataUpdateInterval() {
    this.players.loopUpdate();
    this.ball.loopUpdate();
  }



}

export function gameBuilder() {
  let game = boot(Engine, DEFAULT, {}, document.body);
  game.promise.then((instance) => {
    game.controller = instance;
  })
  return game;
}

