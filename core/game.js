import { Canvas2DFxBase, boot } from './lib/base';
import { swirl8Bit } from './lib/animation';

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
    this.isResizingCallback = () => {
      this.background(this.config.bgColor);
    }
  }

  curtainCall() {
    return this.curtain.animate(false, 20, this.config.bgColor);
  }

  drawGame() {
    let curtainCallPromise = this.curtainCall();
    curtainCallPromise
      .then(() => {
        return this.drawCourt();
      }).then(() => {
      })
  }

  drawCourt() {
    let drawCourtPromise = new Promise((res, rej) => {
      res();
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
