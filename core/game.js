import { Canvas2DFxBase, boot } from './lib/base';
import { drawCircle, drawText } from './lib/shape';

const DEFAULT = {
  bgColor: 'rgba(0,0,0,0.3)',
  cursor: {
    color: '#fff',
    radius: 50
  }
}

export class Engine extends Canvas2DFxBase {
  constructor(ele, defaultConfig, config) {
    super(ele, defaultConfig, config)
    this.init();
    this.radius = 50;
  }
  init() {
  }
  drawCourt() {

  }
  draw(data, localData) {


  }
}

export function gameBuilder() {
  let game = boot(Engine, DEFAULT, {}, document.body);
  return game;
}
