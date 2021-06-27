import { Canvas2DFxBase, boot } from './lib/base';
import { StrokeAnimation, Swirl8Bit } from './lib/animation';
import { getCacheCanvas } from './lib/util';

const DEFAULT = {
  bgColor: 'rgba(0,0,0,1)',
  courtColor: 'rgba(255,255,255,1)',
  courtAspectRatio: 2
}

export class Engine extends Canvas2DFxBase {
  constructor(ele, defaultConfig, config) {
    super(ele, defaultConfig, config)
    this.curtain = {};
    this.pixelBase = screen.width > screen.height ? screen.width : screen.height;
    this.init();
    this.staticCurtainImage = new Image();
  }

  init() {
    this.curtain = this.genCurtain();
    this.court = this.genCourt();
    this.scoreboard = this.genScoreboard();
    this.initResized();
  }

  initResized() {
    this.resizedCallback = () => {
      this.curtain.drawStatic()
        .then(() => {
          this.court.drawStatic()
        })
    }
  }

  genCurtain(bandWidth = 30) {
    let curtainCanvasInstance = this.createVirtualCanvasBaseInstance();
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
        }, 30);
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

  genScoreboard() {

  }

  getAspectRatio() {
    return this.cvs.width / this.cvs.height;
  }

  genCourt(strokeWidth = 10, offsetPercent = 5) {
    let courtCanvasInstance = this.createVirtualCanvasBaseInstance();
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
        let initialImage = getCacheCanvas(this.ctx);
        let promise = strokeAnimationInstance.animate(strokeWidth, this.config.courtColor);
        let interval = setInterval(() => {
          this.ctx.save();
          if (this.getAspectRatio() >= 1) {
            this.ctx.translate(this.cvs.width / 2, this.cvs.height / 2);
            this.ctx.rotate(Math.PI / 2);
            this.ctx.translate(-this.cvs.height / 2, -this.cvs.width / 2);
            let offsetX = (this.cvs.height - (this.cvs.width * (1 - offsetPercent / 50) / this.config.courtAspectRatio)) / 2;
            let offsetY = this.cvs.width * offsetPercent / 100;
            this.clear();
            this.ctx.drawImage(initialImage, 0, 0, initialImage.width, initialImage.height, 0, 0, this.cvs.height, this.cvs.width);
            this.ctx.drawImage(
              courtCanvasInstance.cvs,
              0,
              0,
              courtCanvasInstance.cvs.width,
              courtCanvasInstance.cvs.height,
              offsetX,
              offsetY,
              this.cvs.height * (1 - offsetPercent / 50),
              this.cvs.height * (1 - offsetPercent / 50) * this.config.courtAspectRatio
            );
          }
          else {
            let offsetX = (this.cvs.width - (this.cvs.height * (1 - offsetPercent / 50) / this.config.courtAspectRatio)) / 2;
            let offsetY = this.cvs.height * offsetPercent / 100;
            this.clear();
            this.ctx.drawImage(initialImage, 0, 0, initialImage.width, initialImage.height, 0, 0, this.cvs.width, this.cvs.height);
            this.ctx.drawImage(
              courtCanvasInstance.cvs,
              0,
              0,
              courtCanvasInstance.cvs.width,
              courtCanvasInstance.cvs.height,
              offsetX,
              offsetY,
              this.cvs.height * (1 - offsetPercent / 50) / this.config.courtAspectRatio,
              this.cvs.height * (1 - offsetPercent / 50)
            );
          }

          this.ctx.restore();
        }, 30)
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
        let trigger;
        let promise = new Promise((res, rej) => {
          trigger = res;
        })

        this.ctx.save();
        if (this.getAspectRatio() >= 1) {
          this.ctx.translate(this.cvs.width / 2, this.cvs.height / 2);
          this.ctx.rotate(Math.PI / 2);
          this.ctx.translate(-this.cvs.height / 2, -this.cvs.width / 2);
          let offsetX = (this.cvs.height - (this.cvs.width * (1 - offsetPercent / 50) / this.config.courtAspectRatio)) / 2;
          let offsetY = this.cvs.width * offsetPercent / 100;
          this.ctx.drawImage(
            courtCanvasInstance.cvs,
            0,
            0,
            courtCanvasInstance.cvs.width,
            courtCanvasInstance.cvs.height,
            offsetX,
            offsetY,
            this.cvs.width * (1 - offsetPercent / 50) / this.config.courtAspectRatio,
            this.cvs.width * (1 - offsetPercent / 50)
          );
        }
        else {
          let offsetX = (this.cvs.width - (this.cvs.height * (1 - offsetPercent / 50) / this.config.courtAspectRatio)) / 2;
          let offsetY = this.cvs.height * offsetPercent / 100;
          this.ctx.drawImage(
            courtCanvasInstance.cvs,
            0,
            0,
            courtCanvasInstance.cvs.width,
            courtCanvasInstance.cvs.height,
            offsetX,
            offsetY,
            this.cvs.height * (1 - offsetPercent / 50) / this.config.courtAspectRatio,
            this.cvs.height * (1 - offsetPercent / 50)
          );
        }

        this.ctx.restore();

      }
    };
    return court;
  }

  drawGame() {
    let curtainCallPromise = this.curtain.animate();
    curtainCallPromise
      .then(() => {
        return this.court.animate();
      }).then(() => {
      })
  }



}

export function gameBuilder() {
  let game = boot(Engine, DEFAULT, {}, document.body);
  return game;
}
