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
    this.background(this.config.bgColor);
  }
  draw(data, localData) {
    this.background(this.config.bgColor);
    for (let i = 0; i < data.clients.length; i++) {
      drawCircle(
        this.ctx,
        data.clients[i].cursor.x,
        data.clients[i].cursor.y,
        this.config.cursor.radius,
        this.config.cursor.color
      )

      drawText(
        this.ctx, `Player${i}`,
        data.clients[i].cursor.x + this.config.cursor.radius,
        data.clients[i].cursor.y + this.config.cursor.radius / 2 - 10,
        '#fff',
        12,
        'Arial'
      )
    }
  }
}

export function gameBuilder() {
  let game = boot(Engine, DEFAULT, {}, document.body);
  return game;
}
