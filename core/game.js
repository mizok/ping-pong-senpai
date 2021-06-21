import { Canvas2DFxBase, boot } from './lib/base';
import { strokeAnimation, swirl8Bit } from './lib/animation';

const DEFAULT = {
  bgColor: 'rgba(0,0,0,1)',

}

export class Engine extends Canvas2DFxBase {
  constructor(ele, defaultConfig, config) {
    super(ele, defaultConfig, config)
    this.curtain = {};
    this.init();
  }

  init() {
    this.curtain = new swirl8Bit(this.ctx, this.cvs);
    this.court = this.genCourt();

  }

  initResizing() {
    this.isResizingCallback = () => {
    }
  }

  genCurtain() {
    let curtain = this.createVirtualCanvas();
    return curtain;
  }

  genCourt() {
    let court = this.createVirtualCanvas();
    court.setCanvasSize(720, 1440);
    return court;
  }

  curtainCall() {
    return this.curtain.animate(false, 50, this.config.bgColor);
  }

  drawGame() {
    let curtainCallPromise = this.curtainCall();
    curtainCallPromise
      .then(() => {
        return this.drawCourt();
      }).then(() => {
      })
  }

  drawCourt(offsetPercent = 8, bandWidth = 20, color = 'white') {
    let promiseTrigger;
    let drawCourtPromise = new Promise((res, rej) => {
      promiseTrigger = res;
    })
    let vertices = [
      { x: 0, y: 0 },
      { x: this.court.cvs.width, y: 0 },
      { x: this.court.cvs.width, y: this.court.cvs.height },
      { x: 0, y: this.court.cvs.height },
      { x: 0, y: 0 }
    ]

    let cvsAspectRatio = this.cvs.width / this.cvs.height;
    if (cvsAspectRatio >= 1) {
      let courtWidth = this.cvs.width * (100 - offsetPercent * 2) / 100;
      let courtHeight = courtWidth / 2;
      let courtOffset = this.cvs.width * offsetPercent / 100;
      this.ctx.translate(courtOffset, this.cvs.height * 0.5 + courtHeight * 0.5)
      this.ctx.rotate(-Math.PI / 2);
    }
    else {

    }

    let interval = setInterval(() => {
      this.ctx.drawImage(this.court.cvs, 0, 0, this.cvs.width * ((100 - 2 * offsetPercent) / 100) / 2, this.cvs.width * ((100 - 2 * offsetPercent) / 100));
    }, 30)

    let courtOpeningAnimationPromise = new strokeAnimation(this.court.ctx, vertices).animate(bandWidth, color);
    courtOpeningAnimationPromise.then(() => {
      let timeout = setTimeout(() => {
        clearInterval(interval);
        clearTimeout(timeout);
        promiseTrigger();
      }, 500)
    })



    return drawCourtPromise;
  }

  draw() {


  }
}

export function gameBuilder() {
  let game = boot(Engine, DEFAULT, {}, document.body);
  return game;
}
