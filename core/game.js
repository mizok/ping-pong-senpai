import { Canvas2DFxBase, boot } from './lib/base';
import { StrokeAnimation, Swirl8Bit, StarSky } from './lib/animation';
import { getCacheCanvas } from './lib/util';
import { playersData, ball } from '../data';
import { drawRect, drawCircle } from './lib/shape'

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
    this.fps = 30,
      this.courtOffset = 65;
    this.gameStatus = 0;
    this.pause = false;
    //0: not start yet
    //1: curtain animating
    //2: court animating
    //3: animating players and scroeboard
    //4: game is ready
  }

  init() {
    this.curtain = this.genCurtain();
    this.court = this.genCourt();
    this.starSky = new StarSky(this.ctx);
    this.players = this.genPlayers();
    this.scoreboards = this.genScoreboards();
    this.ball = this.genBall();
    this.initResized();
  }

  initResized() {
    this.resizedCallback = () => {
      this.curtain.drawStatic()
        .then(() => {
          if (this.gameStatus === 3) {
            this.background('black');
          }
          this.starSky.draw();
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
          this.starSky.draw();
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

  responsivePainter(targetCvs, initialImage) {
    let offset = this.courtOffset;
    this.ctx.save();
    //畫court 會有四種狀況, (canvas長寬>預設長寬比>1) | (1<=canvas長寬<預設長寬比) | (預設長寬比倒數<canvas長寬比<1) ｜ (canvas長寬比<預設長寬比倒數<1)
    if (this.getAspectRatio() >= 1) {
      // 這邊是前兩種狀況
      //先清除一次之後畫initialImage , 再畫court
      this.clear();
      let typeA = (this.cvs.height - 2 * offset) * this.config.courtAspectRatio < this.cvs.width - 2 * offset;
      let offsetV, offsetH, courtHeight, courtWidth;
      if (typeA) {
        // 先算出縮減過offset 的cvs 寬
        offsetV = offset;
        courtHeight = this.cvs.height - 2 * offset;
        courtWidth = courtHeight * this.config.courtAspectRatio;
        offsetH = (this.cvs.width - courtWidth) / 2;
      }
      else {
        // 非typeA的狀況, 也就是canvas寬高比低於config 設定的比例
        offsetH = offset;
        courtWidth = this.cvs.width - 2 * offset;
        courtHeight = courtWidth / this.config.courtAspectRatio;
        offsetV = (this.cvs.height - courtHeight) / 2;
      }
      if (initialImage) {
        this.ctx.drawImage(
          initialImage,
          0,
          0,
          initialImage.width,
          initialImage.height,
          0,
          0,
          this.cvs.width,
          this.cvs.height
        )

      }
      // 先旋轉畫布, 因為 virtualcanvas 是一張垂直的畫布
      this.ctx.translate(this.cvs.width / 2, this.cvs.height / 2);
      this.ctx.rotate(Math.PI / 2);
      this.ctx.translate(-this.cvs.height / 2, -this.cvs.width / 2);
      // 因為court 的大小會隨著canvas 的長寬比而變動
      // 這邊先 假設今天是canvas 寬比高超出很多的情況 , 也就是狀況"typeA"
      this.ctx.drawImage(
        targetCvs,
        0,
        0,
        targetCvs.width,
        targetCvs.height,
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
      let typeA = (this.cvs.width - 2 * offset) * this.config.courtAspectRatio < this.cvs.height - 2 * offset;
      let offsetV, offsetH, courtHeight, courtWidth;
      if (typeA) {
        // 先算出縮減過offset 的cvs 寬
        offsetH = offset;
        courtWidth = this.cvs.width - 2 * offset;
        courtHeight = courtWidth * this.config.courtAspectRatio;
        offsetV = (this.cvs.height - courtHeight) / 2;
      }
      else {
        // 非typeA的狀況, 也就是canvas寬高比低於config 設定的比例
        offsetV = offset;
        courtHeight = this.cvs.height - 2 * offset;
        courtWidth = courtHeight / this.config.courtAspectRatio;
        offsetH = (this.cvs.width - courtWidth) / 2;
      }
      if (initialImage) {
        this.ctx.drawImage(
          initialImage,
          0,
          0,
          initialImage.width,
          initialImage.height,
          0,
          0,
          this.cvs.width,
          this.cvs.height
        )
      }
      this.ctx.drawImage(
        targetCvs,
        0,
        0,
        targetCvs.width,
        targetCvs.height,
        offsetH,
        offsetV,
        courtWidth,
        courtHeight
      )
    }

    this.ctx.restore();
  }

  genCourt(strokeWidth = 10, offset = 65) {
    let courtCanvasInstance = this.courtCanvasInstance = this.createVirtualCanvasBaseInstance();
    let courtCanvasWidth = this.pixelBase / this.config.courtAspectRatio;
    let courtCanvasHeight = this.pixelBase;
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
          this.responsivePainter(courtCanvasInstance.cvs, court.initialImage);
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
          this.responsivePainter(courtCanvasInstance.cvs, court.initialImage);
          res();
        })
      }
    };

    return court;
  }

  genPlayers(widthPram = 10, gapRatio = 0.05, color = 'white', thickness = 20) {
    let playersCanvasInstance = this.playersCanvasInstance = this.createVirtualCanvasBaseInstance();
    playersCanvasInstance.setCanvasSize(this.courtCanvasInstance.cvs.width, this.courtCanvasInstance.cvs.height);

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
        let initialImage = getCacheCanvas(this.ctx);
        let interval = setInterval(() => {
          if (opacity >= 1) {
            clearInterval(interval);
            trigger();
          }
          for (let i = 0; i < playersData.length; i++) {
            drawRect(playersCanvasInstance.ctx, playersData[i].position.x, playersData[i].position.y, playersData[i].width, thickness, color, opacity);
          }
          this.responsivePainter(playersCanvasInstance.cvs, initialImage);
          opacity += 0.01;
        }, this.fps)
        return promise;
      },

      loopUpdate: () => {
        let initialImage = getCacheCanvas(this.ctx);
        let interval = setInterval(() => {
          for (let i = 0; i < playersData.length; i++) {
            playersCanvasInstance.clear();
            drawRect(playersCanvasInstance.ctx, playersData[i].position.x, playersData[i].position.y, playersData[i].width, thickness, color, 1);
          }
          this.responsivePainter(playersCanvasInstance.cvs, initialImage);
        }, this.fps)
      }
    }

    return players;
  }

  genScoreboards() {
    let scoreboardsCanvasInstance = this.scoreboardsCanvasInstance = this.createVirtualCanvasBaseInstance();
  }

  genBall() {
    let ballCanvasInstance = this.ballCanvasInstance = this.createVirtualCanvasBaseInstance();
    return ball;
  }

  drawGame() {
    this.gameStatus = 1;
    let promise = this.curtain.animate();
    promise
      .then(() => {
        this.gameStatus = 2;
        return this.court.animate();
      })
      .then(() => {
        this.gameStatus = 3;
        let playersReady = this.players.ready();
        let allReadyPromise = Promise.all([
          playersReady
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
  }



}

export function gameBuilder() {
  let game = boot(Engine, DEFAULT, {}, document.body);
  return game;
}
