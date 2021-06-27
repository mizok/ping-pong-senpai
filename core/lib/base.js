import { debounce, is, pointerEventToXY } from './function';

export class Canvas2DFxBase {
  constructor(
    ele, config = {}, defaultConfig = {}, virtualParent
  ) {
    config = is.obj(config) ? config : {};
    defaultConfig = is.obj(defaultConfig) ? defaultConfig : {};
    this.config = Object.assign(defaultConfig, config);
    this.ele = ele;
    this.frameCount = 0;
    this.mouse = {
      x: 0,
      y: 0
    };
    this.virtualParent = virtualParent;
    this.ctx = null;
    this.frameIsPaused = false;
    this.isClick = false;
    this.canvasSizefixed = false;
    this.previousFrameTime = new Date().getTime();
    this.isResizing = false;
    this.isResizingCallback = () => { };
    this.resizedCallback = () => { };
    this.initBase();
  }
  initBase() {

    if (this.ele.tagName !== 'CANVAS') {
      const cvs = document.createElement('canvas');

      this.ele.appendChild(cvs);

      this.cvs = cvs;
    }
    else {
      this.cvs = this.ele;
    }

    this.ctx = this.cvs.getContext('2d');
    this.triggerResizingMechanism();

    window.addEventListener('resize', () => {
      this.isResizing = true;
      this.isResizingCallback();
    });

    window.addEventListener('resize', debounce(() => {
      this.isResizing = false;
      this.triggerResizingMechanism();
      this.resizedCallback();
    }, 500));

    window.addEventListener('visibilitychange', () => {
      if (document.visibilityState !== "visible") {
        this.frameIsPaused = true;
      }
    });

    this.addEventHandler();

    this.refreshBaseFrameCounter();

  }
  refreshBaseFrameCounter() {
    let thisFrameTime = new Date().getTime();
    this.timeElapsed = (thisFrameTime - this.previousFrameTime) / 1000;
    if (this.frameIsPaused) {
      this.timeElapsed = 0;
      this.frameIsPaused = false;
    }
    this.frameCount += 1;
    this.previousFrameTime = thisFrameTime
    requestAnimationFrame(() => {
      this.refreshBaseFrameCounter();
    })
  }

  virtualParentValidation() {
    return document.body.contains(this.virtualParent) || this.virtualParent === document.body;
  }

  triggerResizingMechanism() {
    if (this.canvasSizefixed) return;
    let cacheCvs = document.createElement('canvas');
    let cacheCvsContext = cacheCvs.getContext('2d');
    cacheCvs.width = this.cvs.width;
    cacheCvs.height = this.cvs.height;



    if (this.ele.tagName !== 'CANVAS') {
      let canvasWidth, canvasHeight;
      if (this.virtualParentValidation()) {
        canvasWidth = this.virtualParent.getBoundingClientRect().width;
        canvasHeight = this.virtualParent.getBoundingClientRect().height;
      }
      else {
        canvasWidth = this.ele.getBoundingClientRect().width;
        canvasHeight = this.ele.getBoundingClientRect().height;
      }

      this.cvs.width = canvasWidth;
      this.cvs.height = canvasHeight;



    }
    else {
      let canvasWidth, canvasHeight;
      if (this.virtualParentValidation()) {
        canvasWidth = this.virtualParent.getBoundingClientRect().width;
        canvasHeight = this.virtualParent.getBoundingClientRect().height;
      }
      else {
        canvasWidth = this.cvs.parentElement.getBoundingClientRect().width;
        canvasHeight = this.cvs.parentElement.getBoundingClientRect().height;
      }
      this.cvs.width = canvasWidth;
      this.cvs.height = canvasHeight;

    }

  }

  setCanvasSize(width, height) {
    this.canvasSizefixed = true;
    this.cvs.width = width;
    this.cvs.height = height;
  }

  background(color) {
    this.ctx.save();
    this.ctx.fillStyle = color;
    this.ctx.fillRect(0, 0, this.cvs.width, this.cvs.height);
    this.ctx.restore();
  }

  clear() {
    this.ctx.clearRect(0, 0, this.cvs.width, this.cvs.height);
  }

  addEventHandler() {

    this.cvs.addEventListener('click', () => {
      this.isClick = true;
    })
    this.cvs.addEventListener('touchstart', () => {
      this.isClick = true;

    })

    this.cvs.addEventListener('mousemove', (e) => {
      let pos = pointerEventToXY(e);
      this.mouse = {
        x: pos.x,
        y: pos.y
      }
    })

    this.cvs.addEventListener('touchmove', (e) => {
      let pos = pointerEventToXY(e);
      this.mouse = {
        x: pos.x,
        y: pos.y
      }
    })
  }

  createVirtualCanvasBaseInstance() {
    let vcvs = document.createElement('canvas');
    let vcvsInstance = new Canvas2DFxBase(vcvs, {}, {}, this.ele);
    return vcvsInstance;
  }

}

export function boot(ctor, defaultConfig, config, targetEle, virtualParent) {
  let cvs = document.getElementById('canvas');
  cvs = cvs ? cvs : document.body;
  let ele = targetEle ? targetEle : cvs;
  let trigger;
  let bootPromise = new Promise((res, rej) => {
    trigger = () => {
      let instance = new ctor(ele, config, defaultConfig, virtualParent);
      res(instance);
    };
  });

  let controller = {
    promise: bootPromise,
    trigger: trigger
  }

  return controller;
}