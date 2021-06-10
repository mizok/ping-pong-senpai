import { Canvas2DFxBase, boot } from './lib/base';
import { drawCircle } from './lib/shape';

const DEFAULT = {
  bgColor: '#000'
}

export class Engine extends Canvas2DFxBase {
  constructor(ele, defaultConfig, config) {
    super(ele, defaultConfig, config)
    this.init();
  }
  init() {
    this.background(this.config.bgColor);
  }
  draw(data, localData) {
    for (let i = 0; i < data.clients.length; i++) {
      drawCircle(
        this.ctx,
        data.clients[i].cursor.x,
        data.clients[i].cursor.y,
        50,
        '#fff'
      )
    }
  }
}

export function gameBuilder() {
  let game = boot(Engine, DEFAULT, {}, false);
  return game;
}
