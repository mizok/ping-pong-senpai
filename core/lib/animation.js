import { randomWithinRange, calcWaypoints } from './function';
import { getCacheCanvas } from './util';
import { drawCircle } from './shape';
import 'path2d-polyfill';

export class Swirl8Bit {
  constructor(ctx) {
    this.counterClockwiseArr = [
      { name: 'tl', x: 0, y: 0 },
      { name: 'bl', x: 0, y: 1 },
      { name: 'br', x: 1, y: 1 },
      { name: 'tr', x: 1, y: 0 }
    ]
    this.clockwiseArr = [
      { name: 'tr', x: 1, y: 0 },
      { name: 'br', x: 1, y: 1 },
      { name: 'bl', x: 0, y: 1 },
      { name: 'tl', x: 0, y: 0 }
    ]
    this.ctx = ctx;
    this.cvs = ctx.canvas;
    this.animationEndTrigger;
    this.order = 0;
    this.path = new Path2D();
    this.initialImage = getCacheCanvas(this.ctx);
    this.bandWidthStack = 0;
  }
  getStartLocation(clockwise, order, totalWidth, totalHeight) {
    let directionArr = clockwise ? this.clockwiseArr : this.counterClockwiseArr;

    let location = {
      name: directionArr[order].name,
      x: directionArr[order].x * totalWidth + this.bandWidthStack,
      y: directionArr[order].y * totalHeight + this.bandWidthStack
    }
    return location;
  }
  animate(clockwise = false, bandWidth = 20, color = 'rgba(0,0,0,1)') {
    let animationPromise = new Promise((res, rej) => {
      this.animationEndTrigger = res;
    })
    this.drawSwirl(clockwise, bandWidth, color);

    return animationPromise;
  }

  drawSwirl(clockwise, bandWidth, color) {
    let interval = setInterval(() => {
      this.path.addPath(this.draWRandomAngledBandPath(
        bandWidth,
        this.cvs.width - 2 * this.bandWidthStack,
        this.cvs.height - 2 * this.bandWidthStack,
        this.getStartLocation(clockwise, this.order, this.cvs.width - 2 * this.bandWidthStack, this.cvs.height - 2 * this.bandWidthStack),
        color,
        clockwise
      ))
      this.ctx.fill(this.path);
      if (this.cvs.width - 2 * this.bandWidthStack > 0 && this.cvs.height - 2 * this.bandWidthStack > 0) {

        if (this.order < 3) {
          this.order++
        }
        else {
          this.order = 0;
          this.bandWidthStack += bandWidth;

        }

      }
      else {
        clearInterval(interval);
        this.animationEndTrigger();
      }

    }, 30)
  }

  draWRandomAngledBandPath(bandWidth, width, height, point, color, clockwise) {
    let path = new Path2D();
    if (point.name === 'tl') {
      this.drawAngledBandFromTL(path, bandWidth, width, height, point, clockwise);
    }
    else if (point.name === 'bl') {
      this.drawAngledBandFromBL(path, bandWidth, width, height, point, clockwise);
    }
    else if (point.name === 'br') {
      this.drawAngledBandFromBR(path, bandWidth, width, height, point, clockwise);
    }
    else if (point.name === 'tr') {
      this.drawAngledBandFromTR(path, bandWidth, width, height, point, clockwise);
    }
    return path;
  }
  drawAngledBandFromTL(path, bandWidth, width, height, point, clockwise) {
    path.moveTo(point.x, point.y);
    if (clockwise) {
      let randomHeight = randomWithinRange(0.5 * height, 0.9 * height);
      path.lineTo(point.x + width, point.y);
      path.lineTo(point.x + width, point.y + randomHeight);
      path.lineTo(point.x + width - bandWidth, point.y + randomHeight);
      path.lineTo(point.x + width - bandWidth, point.y + bandWidth);
      path.lineTo(point.x, point.y + bandWidth);
    }
    else {
      let randomWidth = randomWithinRange(0.5 * width, 0.9 * width);
      path.lineTo(point.x + bandWidth, point.y);
      path.lineTo(point.x + bandWidth, point.y + height - bandWidth);
      path.lineTo(point.x + randomWidth, point.y + height - bandWidth);
      path.lineTo(point.x + randomWidth, point.y + height);
      path.lineTo(point.x, point.y + height);
    }
  }
  drawAngledBandFromBL(path, bandWidth, width, height, point, clockwise) {
    path.moveTo(point.x, point.y);
    if (clockwise) {
      let randomWidth = randomWithinRange(0.5 * width, 0.9 * width);
      path.lineTo(point.x + bandWidth, point.y);
      path.lineTo(point.x + bandWidth, point.y - height + bandWidth);
      path.lineTo(point.x + randomWidth, point.y - height + bandWidth);
      path.lineTo(point.x + randomWidth, point.y - height);
      path.lineTo(point.x, point.y - height);
    }
    else {
      let randomHeight = randomWithinRange(0.5 * height, 0.9 * height);
      path.lineTo(point.x, point.y - bandWidth);
      path.lineTo(point.x + width - bandWidth, point.y - bandWidth);
      path.lineTo(point.x + width - bandWidth, point.y - randomHeight);
      path.lineTo(point.x + width, point.y - randomHeight);
      path.lineTo(point.x + width, point.y);
    }
  }
  drawAngledBandFromBR(path, bandWidth, width, height, point, clockwise) {
    path.moveTo(point.x, point.y);
    if (clockwise) {
      let randomHeight = randomWithinRange(0.5 * height, 0.9 * height);
      path.lineTo(point.x, point.y - bandWidth);
      path.lineTo(point.x - width + bandWidth, point.y - bandWidth);
      path.lineTo(point.x - width + bandWidth, point.y - randomHeight);
      path.lineTo(point.x - width, point.y - randomHeight);
      path.lineTo(point.x - width, point.y);
    }
    else {
      let randomWidth = randomWithinRange(0.5 * width, 0.9 * width);
      path.lineTo(point.x - bandWidth, point.y);
      path.lineTo(point.x - bandWidth, point.y - height + bandWidth);
      path.lineTo(point.x - randomWidth, point.y - height + bandWidth);
      path.lineTo(point.x - randomWidth, point.y - height);
      path.lineTo(point.x, point.y - height);
    }
  }
  drawAngledBandFromTR(path, bandWidth, width, height, point, clockwise) {
    path.moveTo(point.x, point.y);
    if (clockwise) {
      let randomWidth = randomWithinRange(0.5 * width, 0.9 * width);
      path.lineTo(point.x - bandWidth, point.y);
      path.lineTo(point.x - bandWidth, point.y + height - bandWidth);
      path.lineTo(point.x - randomWidth, point.y + height - bandWidth);
      path.lineTo(point.x - randomWidth, point.y + height);
      path.lineTo(point.x, point.y + height);
    }
    else {
      let randomHeight = randomWithinRange(0.5 * height, 0.9 * height);
      path.lineTo(point.x, point.y + bandWidth);
      path.lineTo(point.x - width + bandWidth, point.y + bandWidth);
      path.lineTo(point.x - width + bandWidth, point.y + randomHeight);
      path.lineTo(point.x - width, point.y + randomHeight);
      path.lineTo(point.x - width, point.y);
    }
  }
}

export class StrokeAnimation {
  constructor(ctx, vertices) {
    this.ctx = ctx;
    this.waypoints = calcWaypoints(vertices);
  }

  animate(bandWidth = 20, color = 'rgba(255,255,255,1)', glowing = 'transparent', glowingSize = 40, flicker = true) {
    let animationPromise = new Promise((res, rej) => {
      this.animationEndTrigger = res;
      this.loopingDrawStroke(bandWidth, color, glowing, glowingSize, flicker);
    })

    return animationPromise;
  }

  loopingDrawStroke(bandWidth, color, glowing, glowingSize, flicker, fps = 60) {
    let counter = 0;
    let $this = this;
    this.ctx.save();
    this.ctx.lineCap = 'round'
    this.ctx.strokeStyle = color;
    this.ctx.lineWidth = bandWidth;
    this.ctx.shadowColor = glowing;
    this.ctx.shadowBlur = glowingSize;
    let flickerRange = 0;

    this.ctx.beginPath();
    let interval = setInterval(() => {
      if (counter < $this.waypoints.length - 1) {
        $this.ctx.moveTo($this.waypoints[counter].x, $this.waypoints[counter].y);
        $this.ctx.lineTo($this.waypoints[counter + 1].x, $this.waypoints[counter + 1].y);
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        if (flicker) {
          this.ctx.globalAlpha = randomWithinRange(flickerRange, 1);
          flickerRange += (fps / 10000);
        }
        $this.ctx.stroke();
      }
      else {
        clearInterval(interval);
        $this.ctx.closePath();
        $this.ctx.restore();
        $this.animationEndTrigger();
      }
      counter++;
    }, 1000 / fps)
  }
}

export class StarSky {
  constructor(ctx) {
    this.ctx = ctx;
    this.cvs = ctx.canvas;
    this.stars = [];
    this.init();
  }
  init() {
    this.genStars();

  }
  genStars(number = 100) {
    for (let i = 0; i < number; i++) {
      let star = {
        x: randomWithinRange(0, this.cvs.width),
        y: randomWithinRange(0, this.cvs.height),
        color: `rgba(255,255,255,${randomWithinRange(0.25, 1)})`,
        size: randomWithinRange(2, 5),
      }
      this.stars.push(star);
    }
  }
  draw() {
    for (let i = 0; i < this.stars.length; i++) {
      drawCircle(this.ctx, this.stars[i].x, this.stars[i].y, this.stars[i].size, this.stars[i].color);
    }
  }
}