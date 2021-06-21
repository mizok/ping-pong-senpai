import { randomWithinRange, calcWaypoints } from './function'
import 'path2d-polyfill';

export class swirl8Bit {
  constructor(ctx, cvs) {
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
    this.cvs = cvs;
    this.animationEndTrigger;
    this.order = 0;
    this.bandWidthStack = 0;
  }
  init() {

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
    let $this = this;
    let animationPromise = new Promise((res, rej) => {
      this.animationEndTrigger = res;
    })
    let interval = setInterval(() => {
      $this.draWRandomAngledBand(
        bandWidth,
        this.cvs.width - 2 * $this.bandWidthStack,
        this.cvs.height - 2 * $this.bandWidthStack,
        $this.getStartLocation(clockwise, $this.order, this.cvs.width - 2 * $this.bandWidthStack, this.cvs.height - 2 * $this.bandWidthStack),
        color,
        clockwise
      );
      if (this.cvs.width - 2 * $this.bandWidthStack > 0 && this.cvs.height - 2 * $this.bandWidthStack > 0) {

        if ($this.order < 3) {
          $this.order++
        }
        else {
          $this.order = 0;
          $this.bandWidthStack += bandWidth;

        }

      }
      else {
        clearInterval(interval);
        this.animationEndTrigger();
      }

    }, 30)

    return animationPromise;
  }
  draWRandomAngledBand(bandWidth, width, height, point, color, clockwise) {
    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.fillStyle = color;
    if (point.name === 'tl') {
      this.drawAngledBandFromTL(bandWidth, width, height, point, clockwise);
    }
    else if (point.name === 'bl') {
      this.drawAngledBandFromBL(bandWidth, width, height, point, clockwise);
    }
    else if (point.name === 'br') {
      this.drawAngledBandFromBR(bandWidth, width, height, point, clockwise);
    }
    else if (point.name === 'tr') {
      this.drawAngledBandFromTR(bandWidth, width, height, point, clockwise);
    }
    this.ctx.closePath();
    this.ctx.fill();
    this.ctx.restore();
  }
  drawAngledBandFromTL(bandWidth, width, height, point, clockwise) {
    this.ctx.moveTo(point.x, point.y);
    if (clockwise) {
      let randomHeight = randomWithinRange(0.5 * height, 0.9 * height);
      this.ctx.lineTo(point.x + width, point.y);
      this.ctx.lineTo(point.x + width, point.y + randomHeight);
      this.ctx.lineTo(point.x + width - bandWidth, point.y + randomHeight);
      this.ctx.lineTo(point.x + width - bandWidth, point.y + bandWidth);
      this.ctx.lineTo(point.x, point.y + bandWidth);
    }
    else {
      let randomWidth = randomWithinRange(0.5 * width, 0.9 * width);
      this.ctx.lineTo(point.x + bandWidth, point.y);
      this.ctx.lineTo(point.x + bandWidth, point.y + height - bandWidth);
      this.ctx.lineTo(point.x + randomWidth, point.y + height - bandWidth);
      this.ctx.lineTo(point.x + randomWidth, point.y + height);
      this.ctx.lineTo(point.x, point.y + height);
    }
  }
  drawAngledBandFromBL(bandWidth, width, height, point, clockwise) {
    this.ctx.moveTo(point.x, point.y);
    if (clockwise) {
      let randomWidth = randomWithinRange(0.5 * width, 0.9 * width);
      this.ctx.lineTo(point.x + bandWidth, point.y);
      this.ctx.lineTo(point.x + bandWidth, point.y - height + bandWidth);
      this.ctx.lineTo(point.x + randomWidth, point.y - height + bandWidth);
      this.ctx.lineTo(point.x + randomWidth, point.y - height);
      this.ctx.lineTo(point.x, point.y - height);
    }
    else {
      let randomHeight = randomWithinRange(0.5 * height, 0.9 * height);
      this.ctx.lineTo(point.x, point.y - bandWidth);
      this.ctx.lineTo(point.x + width - bandWidth, point.y - bandWidth);
      this.ctx.lineTo(point.x + width - bandWidth, point.y - randomHeight);
      this.ctx.lineTo(point.x + width, point.y - randomHeight);
      this.ctx.lineTo(point.x + width, point.y);
    }
  }
  drawAngledBandFromBR(bandWidth, width, height, point, clockwise) {
    this.ctx.moveTo(point.x, point.y);
    if (clockwise) {
      let randomHeight = randomWithinRange(0.5 * height, 0.9 * height);
      this.ctx.lineTo(point.x, point.y - bandWidth);
      this.ctx.lineTo(point.x - width + bandWidth, point.y - bandWidth);
      this.ctx.lineTo(point.x - width + bandWidth, point.y - randomHeight);
      this.ctx.lineTo(point.x - width, point.y - randomHeight);
      this.ctx.lineTo(point.x - width, point.y);
    }
    else {
      let randomWidth = randomWithinRange(0.5 * width, 0.9 * width);
      this.ctx.lineTo(point.x - bandWidth, point.y);
      this.ctx.lineTo(point.x - bandWidth, point.y - height + bandWidth);
      this.ctx.lineTo(point.x - randomWidth, point.y - height + bandWidth);
      this.ctx.lineTo(point.x - randomWidth, point.y - height);
      this.ctx.lineTo(point.x, point.y - height);
    }
  }
  drawAngledBandFromTR(bandWidth, width, height, point, clockwise) {
    this.ctx.moveTo(point.x, point.y);
    if (clockwise) {
      let randomWidth = randomWithinRange(0.5 * width, 0.9 * width);
      this.ctx.lineTo(point.x - bandWidth, point.y);
      this.ctx.lineTo(point.x - bandWidth, point.y + height - bandWidth);
      this.ctx.lineTo(point.x - randomWidth, point.y + height - bandWidth);
      this.ctx.lineTo(point.x - randomWidth, point.y + height);
      this.ctx.lineTo(point.x, point.y + height);
    }
    else {
      let randomHeight = randomWithinRange(0.5 * height, 0.9 * height);
      this.ctx.lineTo(point.x, point.y + bandWidth);
      this.ctx.lineTo(point.x - width + bandWidth, point.y + bandWidth);
      this.ctx.lineTo(point.x - width + bandWidth, point.y + randomHeight);
      this.ctx.lineTo(point.x - width, point.y + randomHeight);
      this.ctx.lineTo(point.x - width, point.y);
    }
  }
}

export class strokeAnimation {
  constructor(ctx, vertices) {
    this.ctx = ctx;
    this.waypoints = calcWaypoints(vertices);
  }

  animate(bandWidth = 20, color = 'rgba(0,0,0,1)') {
    let animationPromise = new Promise((res, rej) => {
      this.animationEndTrigger = res;
      this.loopingDrawStroke(bandWidth, color);
    })

    return animationPromise;
  }

  loopingDrawStroke(bandWidth, color = 'white', fps = 60) {
    let counter = 0;
    let $this = this;
    this.ctx.save();
    this.ctx.lineCap = 'round'
    this.ctx.strokeStyle = color;
    this.ctx.lineWidth = bandWidth;
    this.ctx.beginPath();
    let interval = setInterval(() => {
      if (counter < $this.waypoints.length - 1) {
        $this.ctx.moveTo($this.waypoints[counter].x, $this.waypoints[counter].y);
        $this.ctx.lineTo($this.waypoints[counter + 1].x, $this.waypoints[counter + 1].y);
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
