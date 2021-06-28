import { Canvas2DFxBase, boot } from './lib/base';
import { drawCircle } from './lib/shape';
import { $ } from './lib/dom'
import { toggle } from './lib/dom';

const BALL_ANIMATION_DEFAULT = {
  afterImage: false,
  radius: 25,
  color: 'blue',
  speedX: 1000,
  speedY: 1000,
  accelerationX: 0,
  accelerationY: 0,
  frictionX: 1,
  frictionY: 0.9997
}

const SPOTS_ANIMATION_DEFAULT = {
  minSize: 10,
  maxSize: 20,
  period: 300,
  step: 10,
  bottomLayer: null,
  color: 'rgba(0,0,0,0.03)',
  col: 15,
  row: 15
}

class BasicRefelection extends Canvas2DFxBase {
  constructor(canvas, defaultConfig, config, virtualParent) {
    super(canvas, defaultConfig, config, virtualParent);
    this.init();
  }
  init() {
    this.initBall();
    this.animateBall();
  }
  initBall() {
    let $this = this;
    this.ball = {
      afterImage: $this.config.afterImage,
      color: $this.config.color,
      radius: $this.config.radius,
      location: {
        x: $this.cvs.width / 2,
        y: $this.cvs.height / 2,
      },
      speed: {
        x: $this.config.speedX,
        y: $this.config.speedY
      },
      acceleration: {
        x: $this.config.accelerationX,
        y: $this.config.accelerationY
      },
      friction: {
        x: $this.config.frictionX,
        y: $this.config.frictionY
      }
    }
  }
  drawBall() {
    drawCircle(this.ctx, this.ball.location.x, this.ball.location.y, this.ball.radius * 2, this.ball.color);
  }
  animateBall() {
    let $this = this;
    if ($this.ball.afterImage === true) {
      $this.background('rgb(255, 177, 43,0.1)');
    }
    else {
      $this.ctx.clearRect(0, 0, $this.cvs.width, $this.cvs.height);
    }
    $this.ctx.drawImage($this.config.bottomLayer, 0, 0);
    $this.drawBall();
    $this.refreshLocation();
    $this.refreshSpeed();
    $this.checkBoundary();
    requestAnimationFrame($this.animateBall.bind($this));
  }

  refreshSpeed() {
    let dt = this.timeElapsed;
    this.ball.speed.x = this.ball.speed.x * this.ball.friction.x + this.ball.acceleration.x * dt;
    this.ball.speed.y = this.ball.speed.y * this.ball.friction.y + this.ball.acceleration.y * dt;
  }

  refreshLocation() {
    let dt = this.timeElapsed;
    this.ball.location.x += this.ball.speed.x * dt;
    this.ball.location.y += this.ball.speed.y * dt;
  }
  checkBoundary() {
    let ball = this.ball;
    let canvas = this.cvs;
    // 當球正在底端
    if (ball.location.y + ball.radius > canvas.height) {
      // 且速度為正值（朝下）
      if (ball.speed.y > 0) {
        ball.speed.y = -ball.speed.y;
      }
    }
    // 當球正在頂端
    else if (ball.location.y - ball.radius < 0) {
      // 且速度為負值（朝上）
      if (ball.speed.y < 0) {
        ball.speed.y = -ball.speed.y;
      }
    }

    // 當球正在右端
    if (ball.location.x + ball.radius > canvas.width) {
      if (ball.speed.x > 0) {
        ball.speed.x = -ball.speed.x;
      }
    }
    // 當球正在左端
    else if (ball.location.x - ball.radius < 0) {
      if (ball.speed.x < 0) {
        ball.speed.x = -ball.speed.x;
      }
    }

  }
}

class SpotsBumping extends Canvas2DFxBase {
  constructor(canvas, defaultConfig, config, virtualParent) {
    super(canvas, defaultConfig, config, virtualParent);
    this.spotsSize = this.config.minSize;
    this.expand = true;
    this.init();
  }
  init() {
    this.animate();
  }

  animate() {
    let $this = this;
    this.interval = setInterval(() => {
      $this.clear();
      $this.drawSpots();
    }, this.config.period)
  }

  drawSpots() {
    for (let i = 0; i <= this.config.col; i++) {
      for (let j = 0; j <= this.config.col; j++) {
        drawCircle(
          this.ctx,
          i * this.cvs.width / this.config.col,
          j * this.cvs.height / this.config.row,
          this.spotsSize,
          this.config.color,
          1
        )
      }
    }
    if (this.spotsSize - 1 < this.config.minSize) {
      this.expand = true
    }
    else if (this.spotsSize + 1 > this.config.maxSize) {
      this.expand = false
    }
    if (this.expand) {
      this.spotsSize += this.config.step;
    }
    else {
      this.spotsSize -= this.config.step;
    }
  }
}

export function initSplash() {
  let initialScreen = $('#initial-screen');
  let virtualCanvas = document.createElement('canvas');

  let spotAnimation = boot(SpotsBumping, SPOTS_ANIMATION_DEFAULT, {}, virtualCanvas, initialScreen);
  spotAnimation.promise.then((instance) => {
    boot(BasicRefelection, BALL_ANIMATION_DEFAULT, {
      afterImage: true,
      radius: 40,
      color: 'rgba(0, 0, 0,0.75)',
      speedX: 1000,
      bottomLayer: instance.cvs,
      speedY: 1000,
      accelerationX: 0,
      accelerationY: 980,
      frictionX: 1,
    }, initialScreen).trigger();
  });
  spotAnimation.toggle = (status) => { toggle('#initial-screen', status) };
  spotAnimation.trigger();
  return spotAnimation;
}

