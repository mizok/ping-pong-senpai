/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./core/game.js":
/*!**********************!*\
  !*** ./core/game.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Engine": function() { return /* binding */ Engine; },
/* harmony export */   "gameBuilder": function() { return /* binding */ gameBuilder; }
/* harmony export */ });
/* harmony import */ var _lib_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/base */ "./core/lib/base.js");
/* harmony import */ var _lib_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/animation */ "./core/lib/animation.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var DEFAULT = {
  bgColor: 'rgba(0,0,0,1)'
};
var Engine = /*#__PURE__*/function (_Canvas2DFxBase) {
  _inherits(Engine, _Canvas2DFxBase);

  var _super = _createSuper(Engine);

  function Engine(ele, defaultConfig, config) {
    var _this;

    _classCallCheck(this, Engine);

    _this = _super.call(this, ele, defaultConfig, config);
    _this.curtain = {};

    _this.init();

    return _this;
  }

  _createClass(Engine, [{
    key: "init",
    value: function init() {
      this.curtain = new _lib_animation__WEBPACK_IMPORTED_MODULE_1__.swirl8Bit(this.ctx, this.cvs);
      this.court = this.genCourt();
    }
  }, {
    key: "initResizing",
    value: function initResizing() {
      this.isResizingCallback = function () {};
    }
  }, {
    key: "genCurtain",
    value: function genCurtain() {
      var curtain = this.createVirtualCanvas();
      return curtain;
    }
  }, {
    key: "genCourt",
    value: function genCourt() {
      var court = this.createVirtualCanvas();
      court.setCanvasSize(720, 1440);
      return court;
    }
  }, {
    key: "curtainCall",
    value: function curtainCall() {
      return this.curtain.animate(false, 50, this.config.bgColor);
    }
  }, {
    key: "drawGame",
    value: function drawGame() {
      var _this2 = this;

      var curtainCallPromise = this.curtainCall();
      curtainCallPromise.then(function () {
        return _this2.drawCourt();
      }).then(function () {});
    }
  }, {
    key: "drawCourt",
    value: function drawCourt() {
      var _this3 = this;

      var offsetPercent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 8;
      var bandWidth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;
      var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'white';
      var promiseTrigger;
      var drawCourtPromise = new Promise(function (res, rej) {
        promiseTrigger = res;
      });
      var vertices = [{
        x: 0,
        y: 0
      }, {
        x: this.court.cvs.width,
        y: 0
      }, {
        x: this.court.cvs.width,
        y: this.court.cvs.height
      }, {
        x: 0,
        y: this.court.cvs.height
      }, {
        x: 0,
        y: 0
      }];
      var cvsAspectRatio = this.cvs.width / this.cvs.height;

      if (cvsAspectRatio >= 1) {
        var courtWidth = this.cvs.width * (100 - offsetPercent * 2) / 100;
        var courtHeight = courtWidth / 2;
        var courtOffset = this.cvs.width * offsetPercent / 100;
        this.ctx.translate(courtOffset, this.cvs.height * 0.5 + courtHeight * 0.5);
        this.ctx.rotate(-Math.PI / 2);
      } else {}

      var interval = setInterval(function () {
        _this3.ctx.drawImage(_this3.court.cvs, 0, 0, _this3.cvs.width * ((100 - 2 * offsetPercent) / 100) / 2, _this3.cvs.width * ((100 - 2 * offsetPercent) / 100));
      }, 30);
      var courtOpeningAnimationPromise = new _lib_animation__WEBPACK_IMPORTED_MODULE_1__.strokeAnimation(this.court.ctx, vertices).animate(bandWidth, color);
      courtOpeningAnimationPromise.then(function () {
        var timeout = setTimeout(function () {
          clearInterval(interval);
          clearTimeout(timeout);
          promiseTrigger();
        }, 500);
      });
      return drawCourtPromise;
    }
  }, {
    key: "draw",
    value: function draw() {}
  }]);

  return Engine;
}(_lib_base__WEBPACK_IMPORTED_MODULE_0__.Canvas2DFxBase);
function gameBuilder() {
  var game = (0,_lib_base__WEBPACK_IMPORTED_MODULE_0__.boot)(Engine, DEFAULT, {}, document.body);
  return game;
}

/***/ }),

/***/ "./core/lib/animation.js":
/*!*******************************!*\
  !*** ./core/lib/animation.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "swirl8Bit": function() { return /* binding */ swirl8Bit; },
/* harmony export */   "strokeAnimation": function() { return /* binding */ strokeAnimation; }
/* harmony export */ });
/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./function */ "./core/lib/function.js");
/* harmony import */ var path2d_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path2d-polyfill */ "./node_modules/path2d-polyfill/dist/index.esm.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var swirl8Bit = /*#__PURE__*/function () {
  function swirl8Bit(ctx, cvs) {
    _classCallCheck(this, swirl8Bit);

    this.counterClockwiseArr = [{
      name: 'tl',
      x: 0,
      y: 0
    }, {
      name: 'bl',
      x: 0,
      y: 1
    }, {
      name: 'br',
      x: 1,
      y: 1
    }, {
      name: 'tr',
      x: 1,
      y: 0
    }];
    this.clockwiseArr = [{
      name: 'tr',
      x: 1,
      y: 0
    }, {
      name: 'br',
      x: 1,
      y: 1
    }, {
      name: 'bl',
      x: 0,
      y: 1
    }, {
      name: 'tl',
      x: 0,
      y: 0
    }];
    this.ctx = ctx;
    this.cvs = cvs;
    this.animationEndTrigger;
    this.order = 0;
    this.bandWidthStack = 0;
  }

  _createClass(swirl8Bit, [{
    key: "init",
    value: function init() {}
  }, {
    key: "getStartLocation",
    value: function getStartLocation(clockwise, order, totalWidth, totalHeight) {
      var directionArr = clockwise ? this.clockwiseArr : this.counterClockwiseArr;
      var location = {
        name: directionArr[order].name,
        x: directionArr[order].x * totalWidth + this.bandWidthStack,
        y: directionArr[order].y * totalHeight + this.bandWidthStack
      };
      return location;
    }
  }, {
    key: "animate",
    value: function animate() {
      var _this = this;

      var clockwise = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var bandWidth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;
      var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'rgba(0,0,0,1)';
      var $this = this;
      var animationPromise = new Promise(function (res, rej) {
        _this.animationEndTrigger = res;
      });
      var interval = setInterval(function () {
        $this.draWRandomAngledBand(bandWidth, _this.cvs.width - 2 * $this.bandWidthStack, _this.cvs.height - 2 * $this.bandWidthStack, $this.getStartLocation(clockwise, $this.order, _this.cvs.width - 2 * $this.bandWidthStack, _this.cvs.height - 2 * $this.bandWidthStack), color, clockwise);

        if (_this.cvs.width - 2 * $this.bandWidthStack > 0 && _this.cvs.height - 2 * $this.bandWidthStack > 0) {
          if ($this.order < 3) {
            $this.order++;
          } else {
            $this.order = 0;
            $this.bandWidthStack += bandWidth;
          }
        } else {
          clearInterval(interval);

          _this.animationEndTrigger();
        }
      }, 30);
      return animationPromise;
    }
  }, {
    key: "draWRandomAngledBand",
    value: function draWRandomAngledBand(bandWidth, width, height, point, color, clockwise) {
      this.ctx.save();
      this.ctx.beginPath();
      this.ctx.fillStyle = color;

      if (point.name === 'tl') {
        this.drawAngledBandFromTL(bandWidth, width, height, point, clockwise);
      } else if (point.name === 'bl') {
        this.drawAngledBandFromBL(bandWidth, width, height, point, clockwise);
      } else if (point.name === 'br') {
        this.drawAngledBandFromBR(bandWidth, width, height, point, clockwise);
      } else if (point.name === 'tr') {
        this.drawAngledBandFromTR(bandWidth, width, height, point, clockwise);
      }

      this.ctx.closePath();
      this.ctx.fill();
      this.ctx.restore();
    }
  }, {
    key: "drawAngledBandFromTL",
    value: function drawAngledBandFromTL(bandWidth, width, height, point, clockwise) {
      this.ctx.moveTo(point.x, point.y);

      if (clockwise) {
        var randomHeight = (0,_function__WEBPACK_IMPORTED_MODULE_0__.randomWithinRange)(0.5 * height, 0.9 * height);
        this.ctx.lineTo(point.x + width, point.y);
        this.ctx.lineTo(point.x + width, point.y + randomHeight);
        this.ctx.lineTo(point.x + width - bandWidth, point.y + randomHeight);
        this.ctx.lineTo(point.x + width - bandWidth, point.y + bandWidth);
        this.ctx.lineTo(point.x, point.y + bandWidth);
      } else {
        var randomWidth = (0,_function__WEBPACK_IMPORTED_MODULE_0__.randomWithinRange)(0.5 * width, 0.9 * width);
        this.ctx.lineTo(point.x + bandWidth, point.y);
        this.ctx.lineTo(point.x + bandWidth, point.y + height - bandWidth);
        this.ctx.lineTo(point.x + randomWidth, point.y + height - bandWidth);
        this.ctx.lineTo(point.x + randomWidth, point.y + height);
        this.ctx.lineTo(point.x, point.y + height);
      }
    }
  }, {
    key: "drawAngledBandFromBL",
    value: function drawAngledBandFromBL(bandWidth, width, height, point, clockwise) {
      this.ctx.moveTo(point.x, point.y);

      if (clockwise) {
        var randomWidth = (0,_function__WEBPACK_IMPORTED_MODULE_0__.randomWithinRange)(0.5 * width, 0.9 * width);
        this.ctx.lineTo(point.x + bandWidth, point.y);
        this.ctx.lineTo(point.x + bandWidth, point.y - height + bandWidth);
        this.ctx.lineTo(point.x + randomWidth, point.y - height + bandWidth);
        this.ctx.lineTo(point.x + randomWidth, point.y - height);
        this.ctx.lineTo(point.x, point.y - height);
      } else {
        var randomHeight = (0,_function__WEBPACK_IMPORTED_MODULE_0__.randomWithinRange)(0.5 * height, 0.9 * height);
        this.ctx.lineTo(point.x, point.y - bandWidth);
        this.ctx.lineTo(point.x + width - bandWidth, point.y - bandWidth);
        this.ctx.lineTo(point.x + width - bandWidth, point.y - randomHeight);
        this.ctx.lineTo(point.x + width, point.y - randomHeight);
        this.ctx.lineTo(point.x + width, point.y);
      }
    }
  }, {
    key: "drawAngledBandFromBR",
    value: function drawAngledBandFromBR(bandWidth, width, height, point, clockwise) {
      this.ctx.moveTo(point.x, point.y);

      if (clockwise) {
        var randomHeight = (0,_function__WEBPACK_IMPORTED_MODULE_0__.randomWithinRange)(0.5 * height, 0.9 * height);
        this.ctx.lineTo(point.x, point.y - bandWidth);
        this.ctx.lineTo(point.x - width + bandWidth, point.y - bandWidth);
        this.ctx.lineTo(point.x - width + bandWidth, point.y - randomHeight);
        this.ctx.lineTo(point.x - width, point.y - randomHeight);
        this.ctx.lineTo(point.x - width, point.y);
      } else {
        var randomWidth = (0,_function__WEBPACK_IMPORTED_MODULE_0__.randomWithinRange)(0.5 * width, 0.9 * width);
        this.ctx.lineTo(point.x - bandWidth, point.y);
        this.ctx.lineTo(point.x - bandWidth, point.y - height + bandWidth);
        this.ctx.lineTo(point.x - randomWidth, point.y - height + bandWidth);
        this.ctx.lineTo(point.x - randomWidth, point.y - height);
        this.ctx.lineTo(point.x, point.y - height);
      }
    }
  }, {
    key: "drawAngledBandFromTR",
    value: function drawAngledBandFromTR(bandWidth, width, height, point, clockwise) {
      this.ctx.moveTo(point.x, point.y);

      if (clockwise) {
        var randomWidth = (0,_function__WEBPACK_IMPORTED_MODULE_0__.randomWithinRange)(0.5 * width, 0.9 * width);
        this.ctx.lineTo(point.x - bandWidth, point.y);
        this.ctx.lineTo(point.x - bandWidth, point.y + height - bandWidth);
        this.ctx.lineTo(point.x - randomWidth, point.y + height - bandWidth);
        this.ctx.lineTo(point.x - randomWidth, point.y + height);
        this.ctx.lineTo(point.x, point.y + height);
      } else {
        var randomHeight = (0,_function__WEBPACK_IMPORTED_MODULE_0__.randomWithinRange)(0.5 * height, 0.9 * height);
        this.ctx.lineTo(point.x, point.y + bandWidth);
        this.ctx.lineTo(point.x - width + bandWidth, point.y + bandWidth);
        this.ctx.lineTo(point.x - width + bandWidth, point.y + randomHeight);
        this.ctx.lineTo(point.x - width, point.y + randomHeight);
        this.ctx.lineTo(point.x - width, point.y);
      }
    }
  }]);

  return swirl8Bit;
}();
var strokeAnimation = /*#__PURE__*/function () {
  function strokeAnimation(ctx, vertices) {
    _classCallCheck(this, strokeAnimation);

    this.ctx = ctx;
    this.waypoints = (0,_function__WEBPACK_IMPORTED_MODULE_0__.calcWaypoints)(vertices);
  }

  _createClass(strokeAnimation, [{
    key: "animate",
    value: function animate() {
      var _this2 = this;

      var bandWidth = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 20;
      var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'rgba(0,0,0,1)';
      var animationPromise = new Promise(function (res, rej) {
        _this2.animationEndTrigger = res;

        _this2.loopingDrawStroke(bandWidth, color);
      });
      return animationPromise;
    }
  }, {
    key: "loopingDrawStroke",
    value: function loopingDrawStroke(bandWidth) {
      var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'white';
      var fps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 60;
      var counter = 0;
      var $this = this;
      this.ctx.save();
      this.ctx.lineCap = 'round';
      this.ctx.strokeStyle = color;
      this.ctx.lineWidth = bandWidth;
      this.ctx.beginPath();
      var interval = setInterval(function () {
        if (counter < $this.waypoints.length - 1) {
          $this.ctx.moveTo($this.waypoints[counter].x, $this.waypoints[counter].y);
          $this.ctx.lineTo($this.waypoints[counter + 1].x, $this.waypoints[counter + 1].y);
          $this.ctx.stroke();
        } else {
          clearInterval(interval);
          $this.ctx.closePath();
          $this.ctx.restore();
          $this.animationEndTrigger();
        }

        counter++;
      }, 1000 / fps);
    }
  }]);

  return strokeAnimation;
}();

/***/ }),

/***/ "./core/lib/base.js":
/*!**************************!*\
  !*** ./core/lib/base.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Canvas2DFxBase": function() { return /* binding */ Canvas2DFxBase; },
/* harmony export */   "boot": function() { return /* binding */ boot; }
/* harmony export */ });
/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./function */ "./core/lib/function.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var Canvas2DFxBase = /*#__PURE__*/function () {
  function Canvas2DFxBase(ele) {
    var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var defaultConfig = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var virtualParent = arguments.length > 3 ? arguments[3] : undefined;

    _classCallCheck(this, Canvas2DFxBase);

    config = _function__WEBPACK_IMPORTED_MODULE_0__.is.obj(config) ? config : {};
    defaultConfig = _function__WEBPACK_IMPORTED_MODULE_0__.is.obj(defaultConfig) ? defaultConfig : {};
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

    this.isResizingCallback = function () {};

    this.resizedCallback = function () {};

    this.initBase();
  }

  _createClass(Canvas2DFxBase, [{
    key: "initBase",
    value: function initBase() {
      var _this = this;

      if (this.ele.tagName !== 'CANVAS') {
        var cvs = document.createElement('canvas');
        this.ele.appendChild(cvs);
        this.cvs = cvs;
      } else {
        this.cvs = this.ele;
      }

      this.ctx = this.cvs.getContext('2d');
      this.triggerResizingMechanism();
      window.addEventListener('resize', function () {
        _this.isResizing = true;

        _this.isResizingCallback();
      });
      window.addEventListener('resize', (0,_function__WEBPACK_IMPORTED_MODULE_0__.debounce)(function () {
        _this.isResizing = false;

        _this.triggerResizingMechanism();

        _this.resizedCallback();
      }, 500));
      window.addEventListener('visibilitychange', function () {
        if (document.visibilityState !== "visible") {
          _this.frameIsPaused = true;
        }
      });
      this.addEventHandler();
      this.refreshBaseFrameCounter();
    }
  }, {
    key: "refreshBaseFrameCounter",
    value: function refreshBaseFrameCounter() {
      var _this2 = this;

      var thisFrameTime = new Date().getTime();
      this.timeElapsed = (thisFrameTime - this.previousFrameTime) / 1000;

      if (this.frameIsPaused) {
        this.timeElapsed = 0;
        this.frameIsPaused = false;
      }

      this.frameCount += 1;
      this.previousFrameTime = thisFrameTime;
      requestAnimationFrame(function () {
        _this2.refreshBaseFrameCounter();
      });
    }
  }, {
    key: "virtualParentValidation",
    value: function virtualParentValidation() {
      return document.body.contains(this.virtualParent) || this.virtualParent === document.body;
    }
  }, {
    key: "triggerResizingMechanism",
    value: function triggerResizingMechanism() {
      if (this.canvasSizefixed) return;
      var cacheCvs = document.createElement('canvas');
      var cacheCvsContext = cacheCvs.getContext('2d');
      cacheCvs.width = this.cvs.width;
      cacheCvs.height = this.cvs.height;
      var canvasImageDataBeforeResize = canvasImageDataBeforeResize = this.ctx.getImageData(0, 0, this.cvs.width, this.cvs.height);

      if (this.ele.tagName !== 'CANVAS') {
        var canvasWidth, canvasHeight;

        if (this.virtualParentValidation()) {
          canvasWidth = this.virtualParent.getBoundingClientRect().width;
          canvasHeight = this.virtualParent.getBoundingClientRect().height;
        } else {
          canvasWidth = this.ele.getBoundingClientRect().width;
          canvasHeight = this.ele.getBoundingClientRect().height;
        }

        this.cvs.width = canvasWidth;
        this.cvs.height = canvasHeight;
        cacheCvsContext.putImageData(canvasImageDataBeforeResize, 0, 0);
        this.ctx.drawImage(cacheCvs, 0, 0, canvasWidth, canvasHeight);
      } else {
        var _canvasWidth, _canvasHeight;

        if (this.virtualParentValidation()) {
          _canvasWidth = this.virtualParent.getBoundingClientRect().width;
          _canvasHeight = this.virtualParent.getBoundingClientRect().height;
        } else {
          _canvasWidth = this.cvs.parentElement.getBoundingClientRect().width;
          _canvasHeight = this.cvs.parentElement.getBoundingClientRect().height;
        }

        this.cvs.width = _canvasWidth;
        this.cvs.height = _canvasHeight;
        cacheCvsContext.putImageData(canvasImageDataBeforeResize, 0, 0);
        this.ctx.drawImage(cacheCvs, 0, 0, _canvasWidth, _canvasHeight);
      }

      cacheCvs = undefined;
      cacheCvsContext = undefined;
    }
  }, {
    key: "setCanvasSize",
    value: function setCanvasSize(width, height) {
      this.canvasSizefixed = true;
      this.cvs.width = width;
      this.cvs.height = height;
    }
  }, {
    key: "background",
    value: function background(color) {
      this.ctx.save();
      this.ctx.fillStyle = color;
      this.ctx.fillRect(0, 0, this.cvs.width, this.cvs.height);
      this.ctx.restore();
    }
  }, {
    key: "clear",
    value: function clear() {
      this.ctx.clearRect(0, 0, this.cvs.width, this.cvs.height);
    }
  }, {
    key: "addEventHandler",
    value: function addEventHandler() {
      var _this3 = this;

      this.cvs.addEventListener('click', function () {
        _this3.isClick = true;
      });
      this.cvs.addEventListener('touchstart', function () {
        _this3.isClick = true;
      });
      this.cvs.addEventListener('mousemove', function (e) {
        var pos = (0,_function__WEBPACK_IMPORTED_MODULE_0__.pointerEventToXY)(e);
        _this3.mouse = {
          x: pos.x,
          y: pos.y
        };
      });
      this.cvs.addEventListener('touchmove', function (e) {
        var pos = (0,_function__WEBPACK_IMPORTED_MODULE_0__.pointerEventToXY)(e);
        _this3.mouse = {
          x: pos.x,
          y: pos.y
        };
      });
    }
  }, {
    key: "createVirtualCanvas",
    value: function createVirtualCanvas() {
      var vcvs = document.createElement('canvas');
      var vcvsInstance = new Canvas2DFxBase(vcvs, {}, {}, this.ele);
      return vcvsInstance;
    }
  }]);

  return Canvas2DFxBase;
}();
function boot(ctor, defaultConfig, config, targetEle, virtualParent) {
  var cvs = document.getElementById('canvas');
  cvs = cvs ? cvs : document.body;
  var ele = targetEle ? targetEle : cvs;
  var trigger;
  var bootPromise = new Promise(function (res, rej) {
    trigger = function trigger() {
      var instance = new ctor(ele, config, defaultConfig, virtualParent);
      res(instance);
    };
  });
  var controller = {
    promise: bootPromise,
    trigger: trigger
  };
  return controller;
}

/***/ }),

/***/ "./core/lib/dom.js":
/*!*************************!*\
  !*** ./core/lib/dom.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": function() { return /* binding */ $; },
/* harmony export */   "toggle": function() { return /* binding */ toggle; },
/* harmony export */   "toggleClass": function() { return /* binding */ toggleClass; },
/* harmony export */   "emit": function() { return /* binding */ emit; },
/* harmony export */   "parents": function() { return /* binding */ parents; },
/* harmony export */   "fadeOut": function() { return /* binding */ fadeOut; }
/* harmony export */ });
function $(selector) {
  return document.querySelector(selector);
}
function toggle(selector, status) {
  var styleStr = status ? 'block' : 'none';
  $(selector).setAttribute('style', "display:".concat(styleStr));
}
function toggleClass(selector, classname, status) {
  var action = status ? 'add' : 'remove';
  $(selector).classList[action](classname);
}
function emit(eventName) {
  var someEvent = document.createEvent('Event');
  someEvent.initEvent(eventName, true, true);
  document.dispatchEvent(someEvent);
}
function parents(node, selector) {
  var current = node,
      list = [];

  while (current.parentNode != null && current.parentNode != document.documentElement) {
    list.push(current.parentNode);
    current = current.parentNode;
  }

  return list.filter(function (o, i) {
    return o.matches(selector);
  });
}
function fadeOut(ele, duration) {
  var cb = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {
    ele.style.display = 'none';
  };
  var fadeTarget = ele;
  var fadeEffect = setInterval(function () {
    if (!fadeTarget.style.opacity) {
      fadeTarget.style.opacity = 1;
    }

    if (fadeTarget.style.opacity > 0) {
      fadeTarget.style.opacity -= 1 / duration;
    } else {
      clearInterval(fadeEffect);
      cb();
      ele.style.opacity = '';
    }
  }, 1 / duration);
}

/***/ }),

/***/ "./core/lib/function.js":
/*!******************************!*\
  !*** ./core/lib/function.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "debounce": function() { return /* binding */ debounce; },
/* harmony export */   "is": function() { return /* binding */ is; },
/* harmony export */   "randomWithinRange": function() { return /* binding */ randomWithinRange; },
/* harmony export */   "getDistance": function() { return /* binding */ getDistance; },
/* harmony export */   "degreeToRadian": function() { return /* binding */ degreeToRadian; },
/* harmony export */   "pointerEventToXY": function() { return /* binding */ pointerEventToXY; },
/* harmony export */   "targetHasProp": function() { return /* binding */ targetHasProp; },
/* harmony export */   "isEmpty": function() { return /* binding */ isEmpty; },
/* harmony export */   "colorToRgba": function() { return /* binding */ colorToRgba; },
/* harmony export */   "getChannelValuesFromRgba": function() { return /* binding */ getChannelValuesFromRgba; },
/* harmony export */   "calcWaypoints": function() { return /* binding */ calcWaypoints; }
/* harmony export */ });
var MersenneTwister = __webpack_require__(/*! mersenne-twister */ "./node_modules/mersenne-twister/src/mersenne-twister.js");

var MT = new MersenneTwister();
function debounce(func, delay) {
  var _arguments = arguments;
  var timer = null;
  var $this = this;
  return function () {
    var context = $this;
    var args = _arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      func.apply(context, args);
    }, delay);
  };
}
var is = {
  arr: function arr(a) {
    return Array.isArray(a);
  },
  obj: function obj(a) {
    return Object.prototype.toString.call(a).indexOf('Object') > -1;
  },
  pth: function pth(a) {
    return is.obj(a) && a.hasOwnProperty('totalLength');
  },
  svg: function svg(a) {
    return a instanceof SVGElement;
  },
  inp: function inp(a) {
    return a instanceof HTMLInputElement;
  },
  dom: function dom(a) {
    return a.nodeType || is.svg(a);
  },
  str: function str(a) {
    return typeof a === 'string';
  },
  fnc: function fnc(a) {
    return typeof a === 'function';
  },
  und: function und(a) {
    return typeof a === 'undefined';
  },
  nil: function nil(a) {
    return is.und(a) || a === null;
  },
  hex: function hex(a) {
    return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a);
  },
  rgba: function rgba(a) {
    return /^rgba/.test(a);
  },
  rgb: function rgb(a) {
    return /^rgb/.test(a);
  },
  hsl: function hsl(a) {
    return /^hsl/.test(a);
  },
  col: function col(a) {
    return is.hex(a) || is.rgb(a) || is.hsl(a);
  },
  key: function key(a) {
    return !defaultInstanceSettings.hasOwnProperty(a) && !defaultTweenSettings.hasOwnProperty(a) && a !== 'targets' && a !== 'keyframes';
  }
};
function randomWithinRange(min, max, seed) {
  return MT.random(seed) * (max - min) + min;
}
function getDistance(x0, y0, x1, y1) {
  return Math.sqrt((x1 - x0) * (x1 - x0) + (y1 - y0) * (y1 - y0));
}
function degreeToRadian(degree) {
  return degree / 180 * Math.PI;
}
/**
 * 統一 touchEvent/mouseEvent 的事件觸發座標取得方式
 * @export
 * @param {object}  傳入的event 物件
 * @returns {Object} 一個物件, 內含事件觸發座標的X/Y 座標值
 */

function pointerEventToXY(e) {
  var out = {
    x: 0,
    y: 0
  };

  if (e.type === 'touchstart' || e.type === 'touchmove' || e.type === 'touchend' || e.type === 'touchcancel') {
    var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
    out.x = touch.pageX;
    out.y = touch.pageY;
  } else if (e.type === 'mousedown' || e.type === 'mouseup' || e.type === 'mousemove' || e.type === 'mouseover' || e.type === 'mouseout' || e.type === 'mouseenter' || e.type === 'mouseleave') {
    out.x = e.pageX;
    out.y = e.pageY;
  }

  return out;
}
/**
 * 直接呼叫hasOwnProperty的原型方法(用在hasOwnProperty被改動過的狀況)
 *
 * @export
 * @param {object} target 目標物件
 * @param {string} prop 目標prop
 * @returns {boolean} 是/否
 */

function targetHasProp(target, prop) {
  return Object.prototype.hasOwnProperty.call(target, prop);
}
/**
 * 確認一個變數/值是否為空(0不算空值)
 * @export
 * @param {*} val
 * @returns {boolean} 是/否
 */

function isEmpty(val) {
  return typeof val === 'number' ? isNaN(val) : !val;
}

function rgbToRgba(rgbValue) {
  var rgb = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(rgbValue);
  return rgb ? "rgba(".concat(rgb[1], ",1)") : rgbValue;
}

function hexToRgba(hexValue) {
  var rgx = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  var hex = hexValue.replace(rgx, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });
  var rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  var r = parseInt(rgb[1], 16);
  var g = parseInt(rgb[2], 16);
  var b = parseInt(rgb[3], 16);
  return "rgba(".concat(r, ",").concat(g, ",").concat(b, ",1)");
}

function hslToRgba(hslValue) {
  var hsl = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(hslValue) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(hslValue);
  var h = parseInt(hsl[1], 10) / 360;
  var s = parseInt(hsl[2], 10) / 100;
  var l = parseInt(hsl[3], 10) / 100;
  var a = hsl[4] || 1;

  function hue2rgb(p, q, t) {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  }

  var r, g, b;

  if (s == 0) {
    r = g = b = l;
  } else {
    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return "rgba(".concat(r * 255, ",").concat(g * 255, ",").concat(b * 255, ",").concat(a, ")");
}

function colorToRgba(val) {
  if (is.rgb(val)) return rgbToRgba(val);
  if (is.hex(val)) return hexToRgba(val);
  if (is.hsl(val)) return hslToRgba(val);
}
function getChannelValuesFromRgba(rgba) {
  return rgba.replace(/^(rgb|rgba)\(/, '').replace(/\)$/, '').replace(/\s/g, '').split(',').map(function (x) {
    return parseInt(x);
  });
}
function calcWaypoints(vertices) {
  var interpolate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 30;
  var waypoints = [];

  for (var i = 1; i < vertices.length; i++) {
    var pt0 = vertices[i - 1];
    var pt1 = vertices[i];
    var dx = pt1.x - pt0.x;
    var dy = pt1.y - pt0.y;

    for (var j = 0; j <= interpolate; j++) {
      var x = pt0.x + dx * j / interpolate;
      var y = pt0.y + dy * j / interpolate;
      waypoints.push({
        x: x,
        y: y
      });
    }
  }

  console.log(vertices, waypoints);
  return waypoints;
}

/***/ }),

/***/ "./core/lib/shape.js":
/*!***************************!*\
  !*** ./core/lib/shape.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "drawSquare": function() { return /* binding */ drawSquare; },
/* harmony export */   "drawCircle": function() { return /* binding */ drawCircle; },
/* harmony export */   "drawLine": function() { return /* binding */ drawLine; },
/* harmony export */   "drawText": function() { return /* binding */ drawText; }
/* harmony export */ });
function drawSquare(ctx, x, y, width, color, alpha) {
  ctx.save();
  ctx.fillStyle = color;
  ctx.globalAlpha = alpha;
  ctx.fillRect(x - width / 2, y - width / 2, width, width);
  ctx.restore();
}
function drawCircle(ctx, x, y, width, color, alpha) {
  ctx.save();
  ctx.fillStyle = color;
  ctx.globalAlpha = alpha;
  ctx.beginPath();
  ctx.arc(x, y, width / 2, 0, Math.PI * 2, true);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}
function drawLine(ctx, x0, y0, x1, y1, strokeColor, strokeWidth) {
  ctx.save();
  ctx.strokeStyle = strokeColor;
  ctx.lineWidth = strokeWidth;
  ctx.beginPath();
  ctx.moveTo(x0, y0);
  ctx.lineTo(x1, y1);
  ctx.closePath();
  ctx.stroke();
  ctx.restore();
}
function drawText(ctx) {
  var textContent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'text';
  var x = arguments.length > 2 ? arguments[2] : undefined;
  var y = arguments.length > 3 ? arguments[3] : undefined;
  var color = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '#000';
  var fontSize = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 12;
  var font = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 'Arial';
  ctx.save();
  ctx.fillStyle = color;
  ctx.font = "".concat(fontSize, "px ").concat(font);
  ctx.fillText(textContent, x, y);
  ctx.restore();
}

/***/ }),

/***/ "./core/splash.js":
/*!************************!*\
  !*** ./core/splash.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initSplash": function() { return /* binding */ initSplash; }
/* harmony export */ });
/* harmony import */ var _lib_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/base */ "./core/lib/base.js");
/* harmony import */ var _lib_shape__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/shape */ "./core/lib/shape.js");
/* harmony import */ var _lib_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/dom */ "./core/lib/dom.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var BALL_ANIMATION_DEFAULT = {
  afterImage: false,
  radius: 25,
  color: 'blue',
  speedX: 1000,
  speedY: 1000,
  accelerationX: 0,
  accelerationY: 0,
  frictionX: 1,
  frictionY: 0.9997
};
var SPOTS_ANIMATION_DEFAULT = {
  minSize: 10,
  maxSize: 20,
  period: 300,
  step: 10,
  bottomLayer: null,
  color: 'rgba(0,0,0,0.03)',
  col: 15,
  row: 15
};

var BasicRefelection = /*#__PURE__*/function (_Canvas2DFxBase) {
  _inherits(BasicRefelection, _Canvas2DFxBase);

  var _super = _createSuper(BasicRefelection);

  function BasicRefelection(canvas, defaultConfig, config, virtualParent) {
    var _this;

    _classCallCheck(this, BasicRefelection);

    _this = _super.call(this, canvas, defaultConfig, config, virtualParent);

    _this.init();

    return _this;
  }

  _createClass(BasicRefelection, [{
    key: "init",
    value: function init() {
      this.initBall();
      this.animateBall();
    }
  }, {
    key: "initBall",
    value: function initBall() {
      var $this = this;
      this.ball = {
        afterImage: $this.config.afterImage,
        color: $this.config.color,
        radius: $this.config.radius,
        location: {
          x: $this.cvs.width / 2,
          y: $this.cvs.height / 2
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
      };
    }
  }, {
    key: "drawBall",
    value: function drawBall() {
      (0,_lib_shape__WEBPACK_IMPORTED_MODULE_1__.drawCircle)(this.ctx, this.ball.location.x, this.ball.location.y, this.ball.radius * 2, this.ball.color);
    }
  }, {
    key: "animateBall",
    value: function animateBall() {
      var $this = this;

      if ($this.ball.afterImage === true) {
        $this.background('rgb(255, 177, 43,0.1)');
      } else {
        $this.ctx.clearRect(0, 0, $this.cvs.width, $this.cvs.height);
      }

      $this.ctx.drawImage($this.config.bottomLayer, 0, 0);
      $this.drawBall();
      $this.refreshLocation();
      $this.refreshSpeed();
      $this.checkBoundary();
      requestAnimationFrame($this.animateBall.bind($this));
    }
  }, {
    key: "refreshSpeed",
    value: function refreshSpeed() {
      var dt = this.timeElapsed;
      this.ball.speed.x = this.ball.speed.x * this.ball.friction.x + this.ball.acceleration.x * dt;
      this.ball.speed.y = this.ball.speed.y * this.ball.friction.y + this.ball.acceleration.y * dt;
    }
  }, {
    key: "refreshLocation",
    value: function refreshLocation() {
      var dt = this.timeElapsed;
      this.ball.location.x += this.ball.speed.x * dt;
      this.ball.location.y += this.ball.speed.y * dt;
    }
  }, {
    key: "checkBoundary",
    value: function checkBoundary() {
      var ball = this.ball;
      var canvas = this.cvs; // 當球正在底端

      if (ball.location.y + ball.radius > canvas.height) {
        // 且速度為正值（朝下）
        if (ball.speed.y > 0) {
          ball.speed.y = -ball.speed.y;
        }
      } // 當球正在頂端
      else if (ball.location.y - ball.radius < 0) {
          // 且速度為負值（朝上）
          if (ball.speed.y < 0) {
            ball.speed.y = -ball.speed.y;
          }
        } // 當球正在右端


      if (ball.location.x + ball.radius > canvas.width) {
        if (ball.speed.x > 0) {
          ball.speed.x = -ball.speed.x;
        }
      } // 當球正在左端
      else if (ball.location.x - ball.radius < 0) {
          if (ball.speed.x < 0) {
            ball.speed.x = -ball.speed.x;
          }
        }
    }
  }]);

  return BasicRefelection;
}(_lib_base__WEBPACK_IMPORTED_MODULE_0__.Canvas2DFxBase);

var SpotsBumping = /*#__PURE__*/function (_Canvas2DFxBase2) {
  _inherits(SpotsBumping, _Canvas2DFxBase2);

  var _super2 = _createSuper(SpotsBumping);

  function SpotsBumping(canvas, defaultConfig, config, virtualParent) {
    var _this2;

    _classCallCheck(this, SpotsBumping);

    _this2 = _super2.call(this, canvas, defaultConfig, config, virtualParent);
    _this2.spotsSize = _this2.config.minSize;
    _this2.expand = true;

    _this2.init();

    return _this2;
  }

  _createClass(SpotsBumping, [{
    key: "init",
    value: function init() {
      this.animate();
    }
  }, {
    key: "animate",
    value: function animate() {
      var $this = this;
      this.interval = setInterval(function () {
        $this.clear();
        $this.drawSpots();
      }, this.config.period);
    }
  }, {
    key: "drawSpots",
    value: function drawSpots() {
      for (var i = 0; i <= this.config.col; i++) {
        for (var j = 0; j <= this.config.col; j++) {
          (0,_lib_shape__WEBPACK_IMPORTED_MODULE_1__.drawCircle)(this.ctx, i * this.cvs.width / this.config.col, j * this.cvs.height / this.config.row, this.spotsSize, this.config.color, 1);
        }
      }

      if (this.spotsSize - 1 < this.config.minSize) {
        this.expand = true;
      } else if (this.spotsSize + 1 > this.config.maxSize) {
        this.expand = false;
      }

      if (this.expand) {
        this.spotsSize += this.config.step;
      } else {
        this.spotsSize -= this.config.step;
      }
    }
  }]);

  return SpotsBumping;
}(_lib_base__WEBPACK_IMPORTED_MODULE_0__.Canvas2DFxBase);

function initSplash() {
  var initialScreen = (0,_lib_dom__WEBPACK_IMPORTED_MODULE_2__.$)('#initial-screen');
  var virtualCanvas = document.createElement('canvas');
  var spotAnimation = (0,_lib_base__WEBPACK_IMPORTED_MODULE_0__.boot)(SpotsBumping, SPOTS_ANIMATION_DEFAULT, {}, virtualCanvas, initialScreen);
  spotAnimation.promise.then(function (instance) {
    (0,_lib_base__WEBPACK_IMPORTED_MODULE_0__.boot)(BasicRefelection, BALL_ANIMATION_DEFAULT, {
      afterImage: true,
      radius: 40,
      color: 'rgba(0, 0, 0,0.75)',
      speedX: 1000,
      bottomLayer: instance.cvs,
      speedY: 1000,
      accelerationX: 0,
      accelerationY: 980,
      frictionX: 1
    }, initialScreen).trigger();
  });
  spotAnimation.trigger();
}

/***/ }),

/***/ "./data.js":
/*!*****************!*\
  !*** ./data.js ***!
  \*****************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dataStorage": function() { return /* binding */ dataStorage; },
/* harmony export */   "playerRef": function() { return /* binding */ playerRef; }
/* harmony export */ });
var dataStorage = {
  ball: {
    speed: {
      x: 0,
      y: 0
    },
    position: {
      x: 0,
      y: 0
    }
  },
  clients: []
};
var playerRef = {
  name: '???',
  number: 0
};

/***/ }),

/***/ "./node_modules/backo2/index.js":
/*!**************************************!*\
  !*** ./node_modules/backo2/index.js ***!
  \**************************************/
/***/ (function(module) {

/**
 * Expose `Backoff`.
 */
module.exports = Backoff;
/**
 * Initialize backoff timer with `opts`.
 *
 * - `min` initial timeout in milliseconds [100]
 * - `max` max timeout [10000]
 * - `jitter` [0]
 * - `factor` [2]
 *
 * @param {Object} opts
 * @api public
 */

function Backoff(opts) {
  opts = opts || {};
  this.ms = opts.min || 100;
  this.max = opts.max || 10000;
  this.factor = opts.factor || 2;
  this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
  this.attempts = 0;
}
/**
 * Return the backoff duration.
 *
 * @return {Number}
 * @api public
 */


Backoff.prototype.duration = function () {
  var ms = this.ms * Math.pow(this.factor, this.attempts++);

  if (this.jitter) {
    var rand = Math.random();
    var deviation = Math.floor(rand * this.jitter * ms);
    ms = (Math.floor(rand * 10) & 1) == 0 ? ms - deviation : ms + deviation;
  }

  return Math.min(ms, this.max) | 0;
};
/**
 * Reset the number of attempts.
 *
 * @api public
 */


Backoff.prototype.reset = function () {
  this.attempts = 0;
};
/**
 * Set the minimum duration
 *
 * @api public
 */


Backoff.prototype.setMin = function (min) {
  this.ms = min;
};
/**
 * Set the maximum duration
 *
 * @api public
 */


Backoff.prototype.setMax = function (max) {
  this.max = max;
};
/**
 * Set the jitter
 *
 * @api public
 */


Backoff.prototype.setJitter = function (jitter) {
  this.jitter = jitter;
};

/***/ }),

/***/ "./node_modules/base64-arraybuffer/lib/base64-arraybuffer.js":
/*!*******************************************************************!*\
  !*** ./node_modules/base64-arraybuffer/lib/base64-arraybuffer.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports) {

/*
 * base64-arraybuffer
 * https://github.com/niklasvh/base64-arraybuffer
 *
 * Copyright (c) 2012 Niklas von Hertzen
 * Licensed under the MIT license.
 */
(function (chars) {
  "use strict";

  exports.encode = function (arraybuffer) {
    var bytes = new Uint8Array(arraybuffer),
        i,
        len = bytes.length,
        base64 = "";

    for (i = 0; i < len; i += 3) {
      base64 += chars[bytes[i] >> 2];
      base64 += chars[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];
      base64 += chars[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];
      base64 += chars[bytes[i + 2] & 63];
    }

    if (len % 3 === 2) {
      base64 = base64.substring(0, base64.length - 1) + "=";
    } else if (len % 3 === 1) {
      base64 = base64.substring(0, base64.length - 2) + "==";
    }

    return base64;
  };

  exports.decode = function (base64) {
    var bufferLength = base64.length * 0.75,
        len = base64.length,
        i,
        p = 0,
        encoded1,
        encoded2,
        encoded3,
        encoded4;

    if (base64[base64.length - 1] === "=") {
      bufferLength--;

      if (base64[base64.length - 2] === "=") {
        bufferLength--;
      }
    }

    var arraybuffer = new ArrayBuffer(bufferLength),
        bytes = new Uint8Array(arraybuffer);

    for (i = 0; i < len; i += 4) {
      encoded1 = chars.indexOf(base64[i]);
      encoded2 = chars.indexOf(base64[i + 1]);
      encoded3 = chars.indexOf(base64[i + 2]);
      encoded4 = chars.indexOf(base64[i + 3]);
      bytes[p++] = encoded1 << 2 | encoded2 >> 4;
      bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
      bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
    }

    return arraybuffer;
  };
})("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/");

/***/ }),

/***/ "./node_modules/component-emitter/index.js":
/*!*************************************************!*\
  !*** ./node_modules/component-emitter/index.js ***!
  \*************************************************/
/***/ (function(module) {

/**
 * Expose `Emitter`.
 */
if (true) {
  module.exports = Emitter;
}
/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */


function Emitter(obj) {
  if (obj) return mixin(obj);
}

;
/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }

  return obj;
}
/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */


Emitter.prototype.on = Emitter.prototype.addEventListener = function (event, fn) {
  this._callbacks = this._callbacks || {};
  (this._callbacks['$' + event] = this._callbacks['$' + event] || []).push(fn);
  return this;
};
/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */


Emitter.prototype.once = function (event, fn) {
  function on() {
    this.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};
/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */


Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function (event, fn) {
  this._callbacks = this._callbacks || {}; // all

  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  } // specific event


  var callbacks = this._callbacks['$' + event];
  if (!callbacks) return this; // remove all handlers

  if (1 == arguments.length) {
    delete this._callbacks['$' + event];
    return this;
  } // remove specific handler


  var cb;

  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];

    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  } // Remove event specific arrays for event types that no
  // one is subscribed for to avoid memory leak.


  if (callbacks.length === 0) {
    delete this._callbacks['$' + event];
  }

  return this;
};
/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */


Emitter.prototype.emit = function (event) {
  this._callbacks = this._callbacks || {};
  var args = new Array(arguments.length - 1),
      callbacks = this._callbacks['$' + event];

  for (var i = 1; i < arguments.length; i++) {
    args[i - 1] = arguments[i];
  }

  if (callbacks) {
    callbacks = callbacks.slice(0);

    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};
/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */


Emitter.prototype.listeners = function (event) {
  this._callbacks = this._callbacks || {};
  return this._callbacks['$' + event] || [];
};
/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */


Emitter.prototype.hasListeners = function (event) {
  return !!this.listeners(event).length;
};

/***/ }),

/***/ "./node_modules/debug/node_modules/ms/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/debug/node_modules/ms/index.js ***!
  \*****************************************************/
/***/ (function(module) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Helpers.
 */
var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;
/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function (val, options) {
  options = options || {};

  var type = _typeof(val);

  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isFinite(val)) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }

  throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val));
};
/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */


function parse(str) {
  str = String(str);

  if (str.length > 100) {
    return;
  }

  var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(str);

  if (!match) {
    return;
  }

  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();

  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;

    case 'weeks':
    case 'week':
    case 'w':
      return n * w;

    case 'days':
    case 'day':
    case 'd':
      return n * d;

    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;

    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;

    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;

    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;

    default:
      return undefined;
  }
}
/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */


function fmtShort(ms) {
  var msAbs = Math.abs(ms);

  if (msAbs >= d) {
    return Math.round(ms / d) + 'd';
  }

  if (msAbs >= h) {
    return Math.round(ms / h) + 'h';
  }

  if (msAbs >= m) {
    return Math.round(ms / m) + 'm';
  }

  if (msAbs >= s) {
    return Math.round(ms / s) + 's';
  }

  return ms + 'ms';
}
/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */


function fmtLong(ms) {
  var msAbs = Math.abs(ms);

  if (msAbs >= d) {
    return plural(ms, msAbs, d, 'day');
  }

  if (msAbs >= h) {
    return plural(ms, msAbs, h, 'hour');
  }

  if (msAbs >= m) {
    return plural(ms, msAbs, m, 'minute');
  }

  if (msAbs >= s) {
    return plural(ms, msAbs, s, 'second');
  }

  return ms + ' ms';
}
/**
 * Pluralization helper.
 */


function plural(ms, msAbs, n, name) {
  var isPlural = msAbs >= n * 1.5;
  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}

/***/ }),

/***/ "./node_modules/debug/src/browser.js":
/*!*******************************************!*\
  !*** ./node_modules/debug/src/browser.js ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

/* eslint-env browser */

/**
 * This is the web browser implementation of `debug()`.
 */
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();

exports.destroy = function () {
  var warned = false;
  return function () {
    if (!warned) {
      warned = true;
      console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
    }
  };
}();
/**
 * Colors.
 */


exports.colors = ['#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC', '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF', '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC', '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF', '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC', '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033', '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366', '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933', '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC', '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF', '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'];
/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */
// eslint-disable-next-line complexity

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
    return true;
  } // Internet Explorer and Edge do not support colors.


  if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
    return false;
  } // Is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632


  return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
  typeof window !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
  // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
}
/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */


function formatArgs(args) {
  args[0] = (this.useColors ? '%c' : '') + this.namespace + (this.useColors ? ' %c' : ' ') + args[0] + (this.useColors ? '%c ' : ' ') + '+' + module.exports.humanize(this.diff);

  if (!this.useColors) {
    return;
  }

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit'); // The final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into

  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function (match) {
    if (match === '%%') {
      return;
    }

    index++;

    if (match === '%c') {
      // We only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });
  args.splice(lastC, 0, c);
}
/**
 * Invokes `console.debug()` when available.
 * No-op when `console.debug` is not a "function".
 * If `console.debug` is not available, falls back
 * to `console.log`.
 *
 * @api public
 */


exports.log = console.debug || console.log || function () {};
/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */


function save(namespaces) {
  try {
    if (namespaces) {
      exports.storage.setItem('debug', namespaces);
    } else {
      exports.storage.removeItem('debug');
    }
  } catch (error) {// Swallow
    // XXX (@Qix-) should we be logging these?
  }
}
/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */


function load() {
  var r;

  try {
    r = exports.storage.getItem('debug');
  } catch (error) {// Swallow
    // XXX (@Qix-) should we be logging these?
  } // If debug isn't set in LS, and we're in Electron, try to load $DEBUG


  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }

  return r;
}
/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */


function localstorage() {
  try {
    // TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
    // The Browser also has localStorage in the global context.
    return localStorage;
  } catch (error) {// Swallow
    // XXX (@Qix-) should we be logging these?
  }
}

module.exports = __webpack_require__(/*! ./common */ "./node_modules/debug/src/common.js")(exports);
var formatters = module.exports.formatters;
/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

formatters.j = function (v) {
  try {
    return JSON.stringify(v);
  } catch (error) {
    return '[UnexpectedJSONParseError]: ' + error.message;
  }
};

/***/ }),

/***/ "./node_modules/debug/src/common.js":
/*!******************************************!*\
  !*** ./node_modules/debug/src/common.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */
function setup(env) {
  createDebug.debug = createDebug;
  createDebug.default = createDebug;
  createDebug.coerce = coerce;
  createDebug.disable = disable;
  createDebug.enable = enable;
  createDebug.enabled = enabled;
  createDebug.humanize = __webpack_require__(/*! ms */ "./node_modules/debug/node_modules/ms/index.js");
  createDebug.destroy = destroy;
  Object.keys(env).forEach(function (key) {
    createDebug[key] = env[key];
  });
  /**
  * The currently active debug mode names, and names to skip.
  */

  createDebug.names = [];
  createDebug.skips = [];
  /**
  * Map of special "%n" handling functions, for the debug "format" argument.
  *
  * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
  */

  createDebug.formatters = {};
  /**
  * Selects a color for a debug namespace
  * @param {String} namespace The namespace string for the for the debug instance to be colored
  * @return {Number|String} An ANSI color code for the given namespace
  * @api private
  */

  function selectColor(namespace) {
    var hash = 0;

    for (var i = 0; i < namespace.length; i++) {
      hash = (hash << 5) - hash + namespace.charCodeAt(i);
      hash |= 0; // Convert to 32bit integer
    }

    return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
  }

  createDebug.selectColor = selectColor;
  /**
  * Create a debugger with the given `namespace`.
  *
  * @param {String} namespace
  * @return {Function}
  * @api public
  */

  function createDebug(namespace) {
    var prevTime;
    var enableOverride = null;

    function debug() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      // Disabled?
      if (!debug.enabled) {
        return;
      }

      var self = debug; // Set `diff` timestamp

      var curr = Number(new Date());
      var ms = curr - (prevTime || curr);
      self.diff = ms;
      self.prev = prevTime;
      self.curr = curr;
      prevTime = curr;
      args[0] = createDebug.coerce(args[0]);

      if (typeof args[0] !== 'string') {
        // Anything else let's inspect with %O
        args.unshift('%O');
      } // Apply any `formatters` transformations


      var index = 0;
      args[0] = args[0].replace(/%([a-zA-Z%])/g, function (match, format) {
        // If we encounter an escaped % then don't increase the array index
        if (match === '%%') {
          return '%';
        }

        index++;
        var formatter = createDebug.formatters[format];

        if (typeof formatter === 'function') {
          var val = args[index];
          match = formatter.call(self, val); // Now we need to remove `args[index]` since it's inlined in the `format`

          args.splice(index, 1);
          index--;
        }

        return match;
      }); // Apply env-specific formatting (colors, etc.)

      createDebug.formatArgs.call(self, args);
      var logFn = self.log || createDebug.log;
      logFn.apply(self, args);
    }

    debug.namespace = namespace;
    debug.useColors = createDebug.useColors();
    debug.color = createDebug.selectColor(namespace);
    debug.extend = extend;
    debug.destroy = createDebug.destroy; // XXX Temporary. Will be removed in the next major release.

    Object.defineProperty(debug, 'enabled', {
      enumerable: true,
      configurable: false,
      get: function get() {
        return enableOverride === null ? createDebug.enabled(namespace) : enableOverride;
      },
      set: function set(v) {
        enableOverride = v;
      }
    }); // Env-specific initialization logic for debug instances

    if (typeof createDebug.init === 'function') {
      createDebug.init(debug);
    }

    return debug;
  }

  function extend(namespace, delimiter) {
    var newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
    newDebug.log = this.log;
    return newDebug;
  }
  /**
  * Enables a debug mode by namespaces. This can include modes
  * separated by a colon and wildcards.
  *
  * @param {String} namespaces
  * @api public
  */


  function enable(namespaces) {
    createDebug.save(namespaces);
    createDebug.names = [];
    createDebug.skips = [];
    var i;
    var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
    var len = split.length;

    for (i = 0; i < len; i++) {
      if (!split[i]) {
        // ignore empty strings
        continue;
      }

      namespaces = split[i].replace(/\*/g, '.*?');

      if (namespaces[0] === '-') {
        createDebug.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
      } else {
        createDebug.names.push(new RegExp('^' + namespaces + '$'));
      }
    }
  }
  /**
  * Disable debug output.
  *
  * @return {String} namespaces
  * @api public
  */


  function disable() {
    var namespaces = [].concat(_toConsumableArray(createDebug.names.map(toNamespace)), _toConsumableArray(createDebug.skips.map(toNamespace).map(function (namespace) {
      return '-' + namespace;
    }))).join(',');
    createDebug.enable('');
    return namespaces;
  }
  /**
  * Returns true if the given mode name is enabled, false otherwise.
  *
  * @param {String} name
  * @return {Boolean}
  * @api public
  */


  function enabled(name) {
    if (name[name.length - 1] === '*') {
      return true;
    }

    var i;
    var len;

    for (i = 0, len = createDebug.skips.length; i < len; i++) {
      if (createDebug.skips[i].test(name)) {
        return false;
      }
    }

    for (i = 0, len = createDebug.names.length; i < len; i++) {
      if (createDebug.names[i].test(name)) {
        return true;
      }
    }

    return false;
  }
  /**
  * Convert regexp to namespace
  *
  * @param {RegExp} regxep
  * @return {String} namespace
  * @api private
  */


  function toNamespace(regexp) {
    return regexp.toString().substring(2, regexp.toString().length - 2).replace(/\.\*\?$/, '*');
  }
  /**
  * Coerce `val`.
  *
  * @param {Mixed} val
  * @return {Mixed}
  * @api private
  */


  function coerce(val) {
    if (val instanceof Error) {
      return val.stack || val.message;
    }

    return val;
  }
  /**
  * XXX DO NOT USE. This is a temporary stub function.
  * XXX It WILL be removed in the next major release.
  */


  function destroy() {
    console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
  }

  createDebug.enable(createDebug.load());
  return createDebug;
}

module.exports = setup;

/***/ }),

/***/ "./node_modules/engine.io-client/lib/globalThis.browser.js":
/*!*****************************************************************!*\
  !*** ./node_modules/engine.io-client/lib/globalThis.browser.js ***!
  \*****************************************************************/
/***/ (function(module) {

module.exports = function () {
  if (typeof self !== "undefined") {
    return self;
  } else if (typeof window !== "undefined") {
    return window;
  } else {
    return Function("return this")();
  }
}();

/***/ }),

/***/ "./node_modules/engine.io-client/lib/index.js":
/*!****************************************************!*\
  !*** ./node_modules/engine.io-client/lib/index.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var Socket = __webpack_require__(/*! ./socket */ "./node_modules/engine.io-client/lib/socket.js");

module.exports = function (uri, opts) {
  return new Socket(uri, opts);
};
/**
 * Expose deps for legacy compatibility
 * and standalone browser access.
 */


module.exports.Socket = Socket;
module.exports.protocol = Socket.protocol; // this is an int

module.exports.Transport = __webpack_require__(/*! ./transport */ "./node_modules/engine.io-client/lib/transport.js");
module.exports.transports = __webpack_require__(/*! ./transports/index */ "./node_modules/engine.io-client/lib/transports/index.js");
module.exports.parser = __webpack_require__(/*! engine.io-parser */ "./node_modules/engine.io-parser/lib/index.js");

/***/ }),

/***/ "./node_modules/engine.io-client/lib/socket.js":
/*!*****************************************************!*\
  !*** ./node_modules/engine.io-client/lib/socket.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var transports = __webpack_require__(/*! ./transports/index */ "./node_modules/engine.io-client/lib/transports/index.js");

var Emitter = __webpack_require__(/*! component-emitter */ "./node_modules/component-emitter/index.js");

var debug = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js")("engine.io-client:socket");

var parser = __webpack_require__(/*! engine.io-parser */ "./node_modules/engine.io-parser/lib/index.js");

var parseuri = __webpack_require__(/*! parseuri */ "./node_modules/parseuri/index.js");

var parseqs = __webpack_require__(/*! parseqs */ "./node_modules/parseqs/index.js");

var Socket = /*#__PURE__*/function (_Emitter) {
  _inherits(Socket, _Emitter);

  var _super = _createSuper(Socket);

  /**
   * Socket constructor.
   *
   * @param {String|Object} uri or options
   * @param {Object} options
   * @api public
   */
  function Socket(uri) {
    var _this;

    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Socket);

    _this = _super.call(this);

    if (uri && "object" === _typeof(uri)) {
      opts = uri;
      uri = null;
    }

    if (uri) {
      uri = parseuri(uri);
      opts.hostname = uri.host;
      opts.secure = uri.protocol === "https" || uri.protocol === "wss";
      opts.port = uri.port;
      if (uri.query) opts.query = uri.query;
    } else if (opts.host) {
      opts.hostname = parseuri(opts.host).host;
    }

    _this.secure = null != opts.secure ? opts.secure : typeof location !== "undefined" && "https:" === location.protocol;

    if (opts.hostname && !opts.port) {
      // if no port is specified manually, use the protocol default
      opts.port = _this.secure ? "443" : "80";
    }

    _this.hostname = opts.hostname || (typeof location !== "undefined" ? location.hostname : "localhost");
    _this.port = opts.port || (typeof location !== "undefined" && location.port ? location.port : _this.secure ? 443 : 80);
    _this.transports = opts.transports || ["polling", "websocket"];
    _this.readyState = "";
    _this.writeBuffer = [];
    _this.prevBufferLen = 0;
    _this.opts = Object.assign({
      path: "/engine.io",
      agent: false,
      withCredentials: false,
      upgrade: true,
      jsonp: true,
      timestampParam: "t",
      rememberUpgrade: false,
      rejectUnauthorized: true,
      perMessageDeflate: {
        threshold: 1024
      },
      transportOptions: {},
      closeOnBeforeunload: true
    }, opts);
    _this.opts.path = _this.opts.path.replace(/\/$/, "") + "/";

    if (typeof _this.opts.query === "string") {
      _this.opts.query = parseqs.decode(_this.opts.query);
    } // set on handshake


    _this.id = null;
    _this.upgrades = null;
    _this.pingInterval = null;
    _this.pingTimeout = null; // set on heartbeat

    _this.pingTimeoutTimer = null;

    if (typeof addEventListener === "function") {
      if (_this.opts.closeOnBeforeunload) {
        // Firefox closes the connection when the "beforeunload" event is emitted but not Chrome. This event listener
        // ensures every browser behaves the same (no "disconnect" event at the Socket.IO level when the page is
        // closed/reloaded)
        addEventListener("beforeunload", function () {
          if (_this.transport) {
            // silently close the transport
            _this.transport.removeAllListeners();

            _this.transport.close();
          }
        }, false);
      }

      if (_this.hostname !== "localhost") {
        _this.offlineEventListener = function () {
          _this.onClose("transport close");
        };

        addEventListener("offline", _this.offlineEventListener, false);
      }
    }

    _this.open();

    return _this;
  }
  /**
   * Creates transport of the given type.
   *
   * @param {String} transport name
   * @return {Transport}
   * @api private
   */


  _createClass(Socket, [{
    key: "createTransport",
    value: function createTransport(name) {
      debug('creating transport "%s"', name);
      var query = clone(this.opts.query); // append engine.io protocol identifier

      query.EIO = parser.protocol; // transport name

      query.transport = name; // session id if we already have one

      if (this.id) query.sid = this.id;
      var opts = Object.assign({}, this.opts.transportOptions[name], this.opts, {
        query: query,
        socket: this,
        hostname: this.hostname,
        secure: this.secure,
        port: this.port
      });
      debug("options: %j", opts);
      return new transports[name](opts);
    }
    /**
     * Initializes transport to use and starts probe.
     *
     * @api private
     */

  }, {
    key: "open",
    value: function open() {
      var _this2 = this;

      var transport;

      if (this.opts.rememberUpgrade && Socket.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1) {
        transport = "websocket";
      } else if (0 === this.transports.length) {
        // Emit error on next tick so it can be listened to
        setTimeout(function () {
          _this2.emit("error", "No transports available");
        }, 0);
        return;
      } else {
        transport = this.transports[0];
      }

      this.readyState = "opening"; // Retry with the next transport if the transport is disabled (jsonp: false)

      try {
        transport = this.createTransport(transport);
      } catch (e) {
        debug("error while creating transport: %s", e);
        this.transports.shift();
        this.open();
        return;
      }

      transport.open();
      this.setTransport(transport);
    }
    /**
     * Sets the current transport. Disables the existing one (if any).
     *
     * @api private
     */

  }, {
    key: "setTransport",
    value: function setTransport(transport) {
      var _this3 = this;

      debug("setting transport %s", transport.name);

      if (this.transport) {
        debug("clearing existing transport %s", this.transport.name);
        this.transport.removeAllListeners();
      } // set up transport


      this.transport = transport; // set up transport listeners

      transport.on("drain", this.onDrain.bind(this)).on("packet", this.onPacket.bind(this)).on("error", this.onError.bind(this)).on("close", function () {
        _this3.onClose("transport close");
      });
    }
    /**
     * Probes a transport.
     *
     * @param {String} transport name
     * @api private
     */

  }, {
    key: "probe",
    value: function probe(name) {
      var _this4 = this;

      debug('probing transport "%s"', name);
      var transport = this.createTransport(name, {
        probe: 1
      });
      var failed = false;
      Socket.priorWebsocketSuccess = false;

      var onTransportOpen = function onTransportOpen() {
        if (failed) return;
        debug('probe transport "%s" opened', name);
        transport.send([{
          type: "ping",
          data: "probe"
        }]);
        transport.once("packet", function (msg) {
          if (failed) return;

          if ("pong" === msg.type && "probe" === msg.data) {
            debug('probe transport "%s" pong', name);
            _this4.upgrading = true;

            _this4.emit("upgrading", transport);

            if (!transport) return;
            Socket.priorWebsocketSuccess = "websocket" === transport.name;
            debug('pausing current transport "%s"', _this4.transport.name);

            _this4.transport.pause(function () {
              if (failed) return;
              if ("closed" === _this4.readyState) return;
              debug("changing transport and sending upgrade packet");
              cleanup();

              _this4.setTransport(transport);

              transport.send([{
                type: "upgrade"
              }]);

              _this4.emit("upgrade", transport);

              transport = null;
              _this4.upgrading = false;

              _this4.flush();
            });
          } else {
            debug('probe transport "%s" failed', name);
            var err = new Error("probe error");
            err.transport = transport.name;

            _this4.emit("upgradeError", err);
          }
        });
      };

      function freezeTransport() {
        if (failed) return; // Any callback called by transport should be ignored since now

        failed = true;
        cleanup();
        transport.close();
        transport = null;
      } // Handle any error that happens while probing


      var onerror = function onerror(err) {
        var error = new Error("probe error: " + err);
        error.transport = transport.name;
        freezeTransport();
        debug('probe transport "%s" failed because of error: %s', name, err);

        _this4.emit("upgradeError", error);
      };

      function onTransportClose() {
        onerror("transport closed");
      } // When the socket is closed while we're probing


      function onclose() {
        onerror("socket closed");
      } // When the socket is upgraded while we're probing


      function onupgrade(to) {
        if (transport && to.name !== transport.name) {
          debug('"%s" works - aborting "%s"', to.name, transport.name);
          freezeTransport();
        }
      } // Remove all listeners on the transport and on self


      var cleanup = function cleanup() {
        transport.removeListener("open", onTransportOpen);
        transport.removeListener("error", onerror);
        transport.removeListener("close", onTransportClose);

        _this4.removeListener("close", onclose);

        _this4.removeListener("upgrading", onupgrade);
      };

      transport.once("open", onTransportOpen);
      transport.once("error", onerror);
      transport.once("close", onTransportClose);
      this.once("close", onclose);
      this.once("upgrading", onupgrade);
      transport.open();
    }
    /**
     * Called when connection is deemed open.
     *
     * @api public
     */

  }, {
    key: "onOpen",
    value: function onOpen() {
      debug("socket open");
      this.readyState = "open";
      Socket.priorWebsocketSuccess = "websocket" === this.transport.name;
      this.emit("open");
      this.flush(); // we check for `readyState` in case an `open`
      // listener already closed the socket

      if ("open" === this.readyState && this.opts.upgrade && this.transport.pause) {
        debug("starting upgrade probes");
        var i = 0;
        var l = this.upgrades.length;

        for (; i < l; i++) {
          this.probe(this.upgrades[i]);
        }
      }
    }
    /**
     * Handles a packet.
     *
     * @api private
     */

  }, {
    key: "onPacket",
    value: function onPacket(packet) {
      if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
        debug('socket receive: type "%s", data "%s"', packet.type, packet.data);
        this.emit("packet", packet); // Socket is live - any packet counts

        this.emit("heartbeat");

        switch (packet.type) {
          case "open":
            this.onHandshake(JSON.parse(packet.data));
            break;

          case "ping":
            this.resetPingTimeout();
            this.sendPacket("pong");
            this.emit("pong");
            break;

          case "error":
            var err = new Error("server error");
            err.code = packet.data;
            this.onError(err);
            break;

          case "message":
            this.emit("data", packet.data);
            this.emit("message", packet.data);
            break;
        }
      } else {
        debug('packet received with socket readyState "%s"', this.readyState);
      }
    }
    /**
     * Called upon handshake completion.
     *
     * @param {Object} handshake obj
     * @api private
     */

  }, {
    key: "onHandshake",
    value: function onHandshake(data) {
      this.emit("handshake", data);
      this.id = data.sid;
      this.transport.query.sid = data.sid;
      this.upgrades = this.filterUpgrades(data.upgrades);
      this.pingInterval = data.pingInterval;
      this.pingTimeout = data.pingTimeout;
      this.onOpen(); // In case open handler closes socket

      if ("closed" === this.readyState) return;
      this.resetPingTimeout();
    }
    /**
     * Sets and resets ping timeout timer based on server pings.
     *
     * @api private
     */

  }, {
    key: "resetPingTimeout",
    value: function resetPingTimeout() {
      var _this5 = this;

      clearTimeout(this.pingTimeoutTimer);
      this.pingTimeoutTimer = setTimeout(function () {
        _this5.onClose("ping timeout");
      }, this.pingInterval + this.pingTimeout);

      if (this.opts.autoUnref) {
        this.pingTimeoutTimer.unref();
      }
    }
    /**
     * Called on `drain` event
     *
     * @api private
     */

  }, {
    key: "onDrain",
    value: function onDrain() {
      this.writeBuffer.splice(0, this.prevBufferLen); // setting prevBufferLen = 0 is very important
      // for example, when upgrading, upgrade packet is sent over,
      // and a nonzero prevBufferLen could cause problems on `drain`

      this.prevBufferLen = 0;

      if (0 === this.writeBuffer.length) {
        this.emit("drain");
      } else {
        this.flush();
      }
    }
    /**
     * Flush write buffers.
     *
     * @api private
     */

  }, {
    key: "flush",
    value: function flush() {
      if ("closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
        debug("flushing %d packets in socket", this.writeBuffer.length);
        this.transport.send(this.writeBuffer); // keep track of current length of writeBuffer
        // splice writeBuffer and callbackBuffer on `drain`

        this.prevBufferLen = this.writeBuffer.length;
        this.emit("flush");
      }
    }
    /**
     * Sends a message.
     *
     * @param {String} message.
     * @param {Function} callback function.
     * @param {Object} options.
     * @return {Socket} for chaining.
     * @api public
     */

  }, {
    key: "write",
    value: function write(msg, options, fn) {
      this.sendPacket("message", msg, options, fn);
      return this;
    }
  }, {
    key: "send",
    value: function send(msg, options, fn) {
      this.sendPacket("message", msg, options, fn);
      return this;
    }
    /**
     * Sends a packet.
     *
     * @param {String} packet type.
     * @param {String} data.
     * @param {Object} options.
     * @param {Function} callback function.
     * @api private
     */

  }, {
    key: "sendPacket",
    value: function sendPacket(type, data, options, fn) {
      if ("function" === typeof data) {
        fn = data;
        data = undefined;
      }

      if ("function" === typeof options) {
        fn = options;
        options = null;
      }

      if ("closing" === this.readyState || "closed" === this.readyState) {
        return;
      }

      options = options || {};
      options.compress = false !== options.compress;
      var packet = {
        type: type,
        data: data,
        options: options
      };
      this.emit("packetCreate", packet);
      this.writeBuffer.push(packet);
      if (fn) this.once("flush", fn);
      this.flush();
    }
    /**
     * Closes the connection.
     *
     * @api private
     */

  }, {
    key: "close",
    value: function close() {
      var _this6 = this;

      var close = function close() {
        _this6.onClose("forced close");

        debug("socket closing - telling transport to close");

        _this6.transport.close();
      };

      var cleanupAndClose = function cleanupAndClose() {
        _this6.removeListener("upgrade", cleanupAndClose);

        _this6.removeListener("upgradeError", cleanupAndClose);

        close();
      };

      var waitForUpgrade = function waitForUpgrade() {
        // wait for upgrade to finish since we can't send packets while pausing a transport
        _this6.once("upgrade", cleanupAndClose);

        _this6.once("upgradeError", cleanupAndClose);
      };

      if ("opening" === this.readyState || "open" === this.readyState) {
        this.readyState = "closing";

        if (this.writeBuffer.length) {
          this.once("drain", function () {
            if (_this6.upgrading) {
              waitForUpgrade();
            } else {
              close();
            }
          });
        } else if (this.upgrading) {
          waitForUpgrade();
        } else {
          close();
        }
      }

      return this;
    }
    /**
     * Called upon transport error
     *
     * @api private
     */

  }, {
    key: "onError",
    value: function onError(err) {
      debug("socket error %j", err);
      Socket.priorWebsocketSuccess = false;
      this.emit("error", err);
      this.onClose("transport error", err);
    }
    /**
     * Called upon transport close.
     *
     * @api private
     */

  }, {
    key: "onClose",
    value: function onClose(reason, desc) {
      if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
        debug('socket close with reason: "%s"', reason); // clear timers

        clearTimeout(this.pingIntervalTimer);
        clearTimeout(this.pingTimeoutTimer); // stop event from firing again for transport

        this.transport.removeAllListeners("close"); // ensure transport won't stay open

        this.transport.close(); // ignore further transport communication

        this.transport.removeAllListeners();

        if (typeof removeEventListener === "function") {
          removeEventListener("offline", this.offlineEventListener, false);
        } // set ready state


        this.readyState = "closed"; // clear session id

        this.id = null; // emit close event

        this.emit("close", reason, desc); // clean buffers after, so users can still
        // grab the buffers on `close` event

        this.writeBuffer = [];
        this.prevBufferLen = 0;
      }
    }
    /**
     * Filters upgrades, returning only those matching client transports.
     *
     * @param {Array} server upgrades
     * @api private
     *
     */

  }, {
    key: "filterUpgrades",
    value: function filterUpgrades(upgrades) {
      var filteredUpgrades = [];
      var i = 0;
      var j = upgrades.length;

      for (; i < j; i++) {
        if (~this.transports.indexOf(upgrades[i])) filteredUpgrades.push(upgrades[i]);
      }

      return filteredUpgrades;
    }
  }]);

  return Socket;
}(Emitter);

Socket.priorWebsocketSuccess = false;
/**
 * Protocol version.
 *
 * @api public
 */

Socket.protocol = parser.protocol; // this is an int

function clone(obj) {
  var o = {};

  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      o[i] = obj[i];
    }
  }

  return o;
}

module.exports = Socket;

/***/ }),

/***/ "./node_modules/engine.io-client/lib/transport.js":
/*!********************************************************!*\
  !*** ./node_modules/engine.io-client/lib/transport.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var parser = __webpack_require__(/*! engine.io-parser */ "./node_modules/engine.io-parser/lib/index.js");

var Emitter = __webpack_require__(/*! component-emitter */ "./node_modules/component-emitter/index.js");

var debug = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js")("engine.io-client:transport");

var Transport = /*#__PURE__*/function (_Emitter) {
  _inherits(Transport, _Emitter);

  var _super = _createSuper(Transport);

  /**
   * Transport abstract constructor.
   *
   * @param {Object} options.
   * @api private
   */
  function Transport(opts) {
    var _this;

    _classCallCheck(this, Transport);

    _this = _super.call(this);
    _this.opts = opts;
    _this.query = opts.query;
    _this.readyState = "";
    _this.socket = opts.socket;
    return _this;
  }
  /**
   * Emits an error.
   *
   * @param {String} str
   * @return {Transport} for chaining
   * @api public
   */


  _createClass(Transport, [{
    key: "onError",
    value: function onError(msg, desc) {
      var err = new Error(msg);
      err.type = "TransportError";
      err.description = desc;
      this.emit("error", err);
      return this;
    }
    /**
     * Opens the transport.
     *
     * @api public
     */

  }, {
    key: "open",
    value: function open() {
      if ("closed" === this.readyState || "" === this.readyState) {
        this.readyState = "opening";
        this.doOpen();
      }

      return this;
    }
    /**
     * Closes the transport.
     *
     * @api private
     */

  }, {
    key: "close",
    value: function close() {
      if ("opening" === this.readyState || "open" === this.readyState) {
        this.doClose();
        this.onClose();
      }

      return this;
    }
    /**
     * Sends multiple packets.
     *
     * @param {Array} packets
     * @api private
     */

  }, {
    key: "send",
    value: function send(packets) {
      if ("open" === this.readyState) {
        this.write(packets);
      } else {
        // this might happen if the transport was silently closed in the beforeunload event handler
        debug("transport is not open, discarding packets");
      }
    }
    /**
     * Called upon open
     *
     * @api private
     */

  }, {
    key: "onOpen",
    value: function onOpen() {
      this.readyState = "open";
      this.writable = true;
      this.emit("open");
    }
    /**
     * Called with data.
     *
     * @param {String} data
     * @api private
     */

  }, {
    key: "onData",
    value: function onData(data) {
      var packet = parser.decodePacket(data, this.socket.binaryType);
      this.onPacket(packet);
    }
    /**
     * Called with a decoded packet.
     */

  }, {
    key: "onPacket",
    value: function onPacket(packet) {
      this.emit("packet", packet);
    }
    /**
     * Called upon close.
     *
     * @api private
     */

  }, {
    key: "onClose",
    value: function onClose() {
      this.readyState = "closed";
      this.emit("close");
    }
  }]);

  return Transport;
}(Emitter);

module.exports = Transport;

/***/ }),

/***/ "./node_modules/engine.io-client/lib/transports/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/engine.io-client/lib/transports/index.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var XMLHttpRequest = __webpack_require__(/*! ../../contrib/xmlhttprequest-ssl/XMLHttpRequest */ "./node_modules/engine.io-client/lib/xmlhttprequest.js");

var XHR = __webpack_require__(/*! ./polling-xhr */ "./node_modules/engine.io-client/lib/transports/polling-xhr.js");

var JSONP = __webpack_require__(/*! ./polling-jsonp */ "./node_modules/engine.io-client/lib/transports/polling-jsonp.js");

var websocket = __webpack_require__(/*! ./websocket */ "./node_modules/engine.io-client/lib/transports/websocket.js");

exports.polling = polling;
exports.websocket = websocket;
/**
 * Polling transport polymorphic constructor.
 * Decides on xhr vs jsonp based on feature detection.
 *
 * @api private
 */

function polling(opts) {
  var xhr;
  var xd = false;
  var xs = false;
  var jsonp = false !== opts.jsonp;

  if (typeof location !== "undefined") {
    var isSSL = "https:" === location.protocol;
    var port = location.port; // some user agents have empty `location.port`

    if (!port) {
      port = isSSL ? 443 : 80;
    }

    xd = opts.hostname !== location.hostname || port !== opts.port;
    xs = opts.secure !== isSSL;
  }

  opts.xdomain = xd;
  opts.xscheme = xs;
  xhr = new XMLHttpRequest(opts);

  if ("open" in xhr && !opts.forceJSONP) {
    return new XHR(opts);
  } else {
    if (!jsonp) throw new Error("JSONP disabled");
    return new JSONP(opts);
  }
}

/***/ }),

/***/ "./node_modules/engine.io-client/lib/transports/polling-jsonp.js":
/*!***********************************************************************!*\
  !*** ./node_modules/engine.io-client/lib/transports/polling-jsonp.js ***!
  \***********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Polling = __webpack_require__(/*! ./polling */ "./node_modules/engine.io-client/lib/transports/polling.js");

var globalThis = __webpack_require__(/*! ../globalThis */ "./node_modules/engine.io-client/lib/globalThis.browser.js");

var rNewline = /\n/g;
var rEscapedNewline = /\\n/g;
/**
 * Global JSONP callbacks.
 */

var callbacks;

var JSONPPolling = /*#__PURE__*/function (_Polling) {
  _inherits(JSONPPolling, _Polling);

  var _super = _createSuper(JSONPPolling);

  /**
   * JSONP Polling constructor.
   *
   * @param {Object} opts.
   * @api public
   */
  function JSONPPolling(opts) {
    var _this;

    _classCallCheck(this, JSONPPolling);

    _this = _super.call(this, opts);
    _this.query = _this.query || {}; // define global callbacks array if not present
    // we do this here (lazily) to avoid unneeded global pollution

    if (!callbacks) {
      // we need to consider multiple engines in the same page
      callbacks = globalThis.___eio = globalThis.___eio || [];
    } // callback identifier


    _this.index = callbacks.length; // add callback to jsonp global

    callbacks.push(_this.onData.bind(_assertThisInitialized(_this))); // append to query string

    _this.query.j = _this.index;
    return _this;
  }
  /**
   * JSONP only supports binary as base64 encoded strings
   */


  _createClass(JSONPPolling, [{
    key: "supportsBinary",
    get: function get() {
      return false;
    }
    /**
     * Closes the socket.
     *
     * @api private
     */

  }, {
    key: "doClose",
    value: function doClose() {
      if (this.script) {
        // prevent spurious errors from being emitted when the window is unloaded
        this.script.onerror = function () {};

        this.script.parentNode.removeChild(this.script);
        this.script = null;
      }

      if (this.form) {
        this.form.parentNode.removeChild(this.form);
        this.form = null;
        this.iframe = null;
      }

      _get(_getPrototypeOf(JSONPPolling.prototype), "doClose", this).call(this);
    }
    /**
     * Starts a poll cycle.
     *
     * @api private
     */

  }, {
    key: "doPoll",
    value: function doPoll() {
      var _this2 = this;

      var script = document.createElement("script");

      if (this.script) {
        this.script.parentNode.removeChild(this.script);
        this.script = null;
      }

      script.async = true;
      script.src = this.uri();

      script.onerror = function (e) {
        _this2.onError("jsonp poll error", e);
      };

      var insertAt = document.getElementsByTagName("script")[0];

      if (insertAt) {
        insertAt.parentNode.insertBefore(script, insertAt);
      } else {
        (document.head || document.body).appendChild(script);
      }

      this.script = script;
      var isUAgecko = "undefined" !== typeof navigator && /gecko/i.test(navigator.userAgent);

      if (isUAgecko) {
        setTimeout(function () {
          var iframe = document.createElement("iframe");
          document.body.appendChild(iframe);
          document.body.removeChild(iframe);
        }, 100);
      }
    }
    /**
     * Writes with a hidden iframe.
     *
     * @param {String} data to send
     * @param {Function} called upon flush.
     * @api private
     */

  }, {
    key: "doWrite",
    value: function doWrite(data, fn) {
      var _this3 = this;

      var iframe;

      if (!this.form) {
        var form = document.createElement("form");
        var area = document.createElement("textarea");
        var id = this.iframeId = "eio_iframe_" + this.index;
        form.className = "socketio";
        form.style.position = "absolute";
        form.style.top = "-1000px";
        form.style.left = "-1000px";
        form.target = id;
        form.method = "POST";
        form.setAttribute("accept-charset", "utf-8");
        area.name = "d";
        form.appendChild(area);
        document.body.appendChild(form);
        this.form = form;
        this.area = area;
      }

      this.form.action = this.uri();

      function complete() {
        initIframe();
        fn();
      }

      var initIframe = function initIframe() {
        if (_this3.iframe) {
          try {
            _this3.form.removeChild(_this3.iframe);
          } catch (e) {
            _this3.onError("jsonp polling iframe removal error", e);
          }
        }

        try {
          // ie6 dynamic iframes with target="" support (thanks Chris Lambacher)
          var html = '<iframe src="javascript:0" name="' + _this3.iframeId + '">';
          iframe = document.createElement(html);
        } catch (e) {
          iframe = document.createElement("iframe");
          iframe.name = _this3.iframeId;
          iframe.src = "javascript:0";
        }

        iframe.id = _this3.iframeId;

        _this3.form.appendChild(iframe);

        _this3.iframe = iframe;
      };

      initIframe(); // escape \n to prevent it from being converted into \r\n by some UAs
      // double escaping is required for escaped new lines because unescaping of new lines can be done safely on server-side

      data = data.replace(rEscapedNewline, "\\\n");
      this.area.value = data.replace(rNewline, "\\n");

      try {
        this.form.submit();
      } catch (e) {}

      if (this.iframe.attachEvent) {
        this.iframe.onreadystatechange = function () {
          if (_this3.iframe.readyState === "complete") {
            complete();
          }
        };
      } else {
        this.iframe.onload = complete;
      }
    }
  }]);

  return JSONPPolling;
}(Polling);

module.exports = JSONPPolling;

/***/ }),

/***/ "./node_modules/engine.io-client/lib/transports/polling-xhr.js":
/*!*********************************************************************!*\
  !*** ./node_modules/engine.io-client/lib/transports/polling-xhr.js ***!
  \*********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/* global attachEvent */
var XMLHttpRequest = __webpack_require__(/*! ../../contrib/xmlhttprequest-ssl/XMLHttpRequest */ "./node_modules/engine.io-client/lib/xmlhttprequest.js");

var Polling = __webpack_require__(/*! ./polling */ "./node_modules/engine.io-client/lib/transports/polling.js");

var Emitter = __webpack_require__(/*! component-emitter */ "./node_modules/component-emitter/index.js");

var _require = __webpack_require__(/*! ../util */ "./node_modules/engine.io-client/lib/util.js"),
    pick = _require.pick;

var globalThis = __webpack_require__(/*! ../globalThis */ "./node_modules/engine.io-client/lib/globalThis.browser.js");

var debug = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js")("engine.io-client:polling-xhr");
/**
 * Empty function
 */


function empty() {}

var hasXHR2 = function () {
  var xhr = new XMLHttpRequest({
    xdomain: false
  });
  return null != xhr.responseType;
}();

var XHR = /*#__PURE__*/function (_Polling) {
  _inherits(XHR, _Polling);

  var _super = _createSuper(XHR);

  /**
   * XHR Polling constructor.
   *
   * @param {Object} opts
   * @api public
   */
  function XHR(opts) {
    var _this;

    _classCallCheck(this, XHR);

    _this = _super.call(this, opts);

    if (typeof location !== "undefined") {
      var isSSL = "https:" === location.protocol;
      var port = location.port; // some user agents have empty `location.port`

      if (!port) {
        port = isSSL ? 443 : 80;
      }

      _this.xd = typeof location !== "undefined" && opts.hostname !== location.hostname || port !== opts.port;
      _this.xs = opts.secure !== isSSL;
    }
    /**
     * XHR supports binary
     */


    var forceBase64 = opts && opts.forceBase64;
    _this.supportsBinary = hasXHR2 && !forceBase64;
    return _this;
  }
  /**
   * Creates a request.
   *
   * @param {String} method
   * @api private
   */


  _createClass(XHR, [{
    key: "request",
    value: function request() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      Object.assign(opts, {
        xd: this.xd,
        xs: this.xs
      }, this.opts);
      return new Request(this.uri(), opts);
    }
    /**
     * Sends data.
     *
     * @param {String} data to send.
     * @param {Function} called upon flush.
     * @api private
     */

  }, {
    key: "doWrite",
    value: function doWrite(data, fn) {
      var _this2 = this;

      var req = this.request({
        method: "POST",
        data: data
      });
      req.on("success", fn);
      req.on("error", function (err) {
        _this2.onError("xhr post error", err);
      });
    }
    /**
     * Starts a poll cycle.
     *
     * @api private
     */

  }, {
    key: "doPoll",
    value: function doPoll() {
      var _this3 = this;

      debug("xhr poll");
      var req = this.request();
      req.on("data", this.onData.bind(this));
      req.on("error", function (err) {
        _this3.onError("xhr poll error", err);
      });
      this.pollXhr = req;
    }
  }]);

  return XHR;
}(Polling);

var Request = /*#__PURE__*/function (_Emitter) {
  _inherits(Request, _Emitter);

  var _super2 = _createSuper(Request);

  /**
   * Request constructor
   *
   * @param {Object} options
   * @api public
   */
  function Request(uri, opts) {
    var _this4;

    _classCallCheck(this, Request);

    _this4 = _super2.call(this);
    _this4.opts = opts;
    _this4.method = opts.method || "GET";
    _this4.uri = uri;
    _this4.async = false !== opts.async;
    _this4.data = undefined !== opts.data ? opts.data : null;

    _this4.create();

    return _this4;
  }
  /**
   * Creates the XHR object and sends the request.
   *
   * @api private
   */


  _createClass(Request, [{
    key: "create",
    value: function create() {
      var _this5 = this;

      var opts = pick(this.opts, "agent", "enablesXDR", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
      opts.xdomain = !!this.opts.xd;
      opts.xscheme = !!this.opts.xs;
      var xhr = this.xhr = new XMLHttpRequest(opts);

      try {
        debug("xhr open %s: %s", this.method, this.uri);
        xhr.open(this.method, this.uri, this.async);

        try {
          if (this.opts.extraHeaders) {
            xhr.setDisableHeaderCheck && xhr.setDisableHeaderCheck(true);

            for (var i in this.opts.extraHeaders) {
              if (this.opts.extraHeaders.hasOwnProperty(i)) {
                xhr.setRequestHeader(i, this.opts.extraHeaders[i]);
              }
            }
          }
        } catch (e) {}

        if ("POST" === this.method) {
          try {
            xhr.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
          } catch (e) {}
        }

        try {
          xhr.setRequestHeader("Accept", "*/*");
        } catch (e) {} // ie6 check


        if ("withCredentials" in xhr) {
          xhr.withCredentials = this.opts.withCredentials;
        }

        if (this.opts.requestTimeout) {
          xhr.timeout = this.opts.requestTimeout;
        }

        if (this.hasXDR()) {
          xhr.onload = function () {
            _this5.onLoad();
          };

          xhr.onerror = function () {
            _this5.onError(xhr.responseText);
          };
        } else {
          xhr.onreadystatechange = function () {
            if (4 !== xhr.readyState) return;

            if (200 === xhr.status || 1223 === xhr.status) {
              _this5.onLoad();
            } else {
              // make sure the `error` event handler that's user-set
              // does not throw in the same tick and gets caught here
              setTimeout(function () {
                _this5.onError(typeof xhr.status === "number" ? xhr.status : 0);
              }, 0);
            }
          };
        }

        debug("xhr data %s", this.data);
        xhr.send(this.data);
      } catch (e) {
        // Need to defer since .create() is called directly from the constructor
        // and thus the 'error' event can only be only bound *after* this exception
        // occurs.  Therefore, also, we cannot throw here at all.
        setTimeout(function () {
          _this5.onError(e);
        }, 0);
        return;
      }

      if (typeof document !== "undefined") {
        this.index = Request.requestsCount++;
        Request.requests[this.index] = this;
      }
    }
    /**
     * Called upon successful response.
     *
     * @api private
     */

  }, {
    key: "onSuccess",
    value: function onSuccess() {
      this.emit("success");
      this.cleanup();
    }
    /**
     * Called if we have data.
     *
     * @api private
     */

  }, {
    key: "onData",
    value: function onData(data) {
      this.emit("data", data);
      this.onSuccess();
    }
    /**
     * Called upon error.
     *
     * @api private
     */

  }, {
    key: "onError",
    value: function onError(err) {
      this.emit("error", err);
      this.cleanup(true);
    }
    /**
     * Cleans up house.
     *
     * @api private
     */

  }, {
    key: "cleanup",
    value: function cleanup(fromError) {
      if ("undefined" === typeof this.xhr || null === this.xhr) {
        return;
      } // xmlhttprequest


      if (this.hasXDR()) {
        this.xhr.onload = this.xhr.onerror = empty;
      } else {
        this.xhr.onreadystatechange = empty;
      }

      if (fromError) {
        try {
          this.xhr.abort();
        } catch (e) {}
      }

      if (typeof document !== "undefined") {
        delete Request.requests[this.index];
      }

      this.xhr = null;
    }
    /**
     * Called upon load.
     *
     * @api private
     */

  }, {
    key: "onLoad",
    value: function onLoad() {
      var data = this.xhr.responseText;

      if (data !== null) {
        this.onData(data);
      }
    }
    /**
     * Check if it has XDomainRequest.
     *
     * @api private
     */

  }, {
    key: "hasXDR",
    value: function hasXDR() {
      return typeof XDomainRequest !== "undefined" && !this.xs && this.enablesXDR;
    }
    /**
     * Aborts the request.
     *
     * @api public
     */

  }, {
    key: "abort",
    value: function abort() {
      this.cleanup();
    }
  }]);

  return Request;
}(Emitter);
/**
 * Aborts pending requests when unloading the window. This is needed to prevent
 * memory leaks (e.g. when using IE) and to ensure that no spurious error is
 * emitted.
 */


Request.requestsCount = 0;
Request.requests = {};

if (typeof document !== "undefined") {
  if (typeof attachEvent === "function") {
    attachEvent("onunload", unloadHandler);
  } else if (typeof addEventListener === "function") {
    var terminationEvent = "onpagehide" in globalThis ? "pagehide" : "unload";
    addEventListener(terminationEvent, unloadHandler, false);
  }
}

function unloadHandler() {
  for (var i in Request.requests) {
    if (Request.requests.hasOwnProperty(i)) {
      Request.requests[i].abort();
    }
  }
}

module.exports = XHR;
module.exports.Request = Request;

/***/ }),

/***/ "./node_modules/engine.io-client/lib/transports/polling.js":
/*!*****************************************************************!*\
  !*** ./node_modules/engine.io-client/lib/transports/polling.js ***!
  \*****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Transport = __webpack_require__(/*! ../transport */ "./node_modules/engine.io-client/lib/transport.js");

var parseqs = __webpack_require__(/*! parseqs */ "./node_modules/parseqs/index.js");

var parser = __webpack_require__(/*! engine.io-parser */ "./node_modules/engine.io-parser/lib/index.js");

var yeast = __webpack_require__(/*! yeast */ "./node_modules/yeast/index.js");

var debug = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js")("engine.io-client:polling");

var Polling = /*#__PURE__*/function (_Transport) {
  _inherits(Polling, _Transport);

  var _super = _createSuper(Polling);

  function Polling() {
    _classCallCheck(this, Polling);

    return _super.apply(this, arguments);
  }

  _createClass(Polling, [{
    key: "name",
    get:
    /**
     * Transport name.
     */
    function get() {
      return "polling";
    }
    /**
     * Opens the socket (triggers polling). We write a PING message to determine
     * when the transport is open.
     *
     * @api private
     */

  }, {
    key: "doOpen",
    value: function doOpen() {
      this.poll();
    }
    /**
     * Pauses polling.
     *
     * @param {Function} callback upon buffers are flushed and transport is paused
     * @api private
     */

  }, {
    key: "pause",
    value: function pause(onPause) {
      var _this = this;

      this.readyState = "pausing";

      var pause = function pause() {
        debug("paused");
        _this.readyState = "paused";
        onPause();
      };

      if (this.polling || !this.writable) {
        var total = 0;

        if (this.polling) {
          debug("we are currently polling - waiting to pause");
          total++;
          this.once("pollComplete", function () {
            debug("pre-pause polling complete");
            --total || pause();
          });
        }

        if (!this.writable) {
          debug("we are currently writing - waiting to pause");
          total++;
          this.once("drain", function () {
            debug("pre-pause writing complete");
            --total || pause();
          });
        }
      } else {
        pause();
      }
    }
    /**
     * Starts polling cycle.
     *
     * @api public
     */

  }, {
    key: "poll",
    value: function poll() {
      debug("polling");
      this.polling = true;
      this.doPoll();
      this.emit("poll");
    }
    /**
     * Overloads onData to detect payloads.
     *
     * @api private
     */

  }, {
    key: "onData",
    value: function onData(data) {
      var _this2 = this;

      debug("polling got data %s", data);

      var callback = function callback(packet) {
        // if its the first message we consider the transport open
        if ("opening" === _this2.readyState && packet.type === "open") {
          _this2.onOpen();
        } // if its a close packet, we close the ongoing requests


        if ("close" === packet.type) {
          _this2.onClose();

          return false;
        } // otherwise bypass onData and handle the message


        _this2.onPacket(packet);
      }; // decode payload


      parser.decodePayload(data, this.socket.binaryType).forEach(callback); // if an event did not trigger closing

      if ("closed" !== this.readyState) {
        // if we got data we're not polling
        this.polling = false;
        this.emit("pollComplete");

        if ("open" === this.readyState) {
          this.poll();
        } else {
          debug('ignoring poll - transport state "%s"', this.readyState);
        }
      }
    }
    /**
     * For polling, send a close packet.
     *
     * @api private
     */

  }, {
    key: "doClose",
    value: function doClose() {
      var _this3 = this;

      var close = function close() {
        debug("writing close packet");

        _this3.write([{
          type: "close"
        }]);
      };

      if ("open" === this.readyState) {
        debug("transport open - closing");
        close();
      } else {
        // in case we're trying to close while
        // handshaking is in progress (GH-164)
        debug("transport not open - deferring close");
        this.once("open", close);
      }
    }
    /**
     * Writes a packets payload.
     *
     * @param {Array} data packets
     * @param {Function} drain callback
     * @api private
     */

  }, {
    key: "write",
    value: function write(packets) {
      var _this4 = this;

      this.writable = false;
      parser.encodePayload(packets, function (data) {
        _this4.doWrite(data, function () {
          _this4.writable = true;

          _this4.emit("drain");
        });
      });
    }
    /**
     * Generates uri for connection.
     *
     * @api private
     */

  }, {
    key: "uri",
    value: function uri() {
      var query = this.query || {};
      var schema = this.opts.secure ? "https" : "http";
      var port = ""; // cache busting is forced

      if (false !== this.opts.timestampRequests) {
        query[this.opts.timestampParam] = yeast();
      }

      if (!this.supportsBinary && !query.sid) {
        query.b64 = 1;
      }

      query = parseqs.encode(query); // avoid port if default for schema

      if (this.opts.port && ("https" === schema && Number(this.opts.port) !== 443 || "http" === schema && Number(this.opts.port) !== 80)) {
        port = ":" + this.opts.port;
      } // prepend ? to query


      if (query.length) {
        query = "?" + query;
      }

      var ipv6 = this.opts.hostname.indexOf(":") !== -1;
      return schema + "://" + (ipv6 ? "[" + this.opts.hostname + "]" : this.opts.hostname) + port + this.opts.path + query;
    }
  }]);

  return Polling;
}(Transport);

module.exports = Polling;

/***/ }),

/***/ "./node_modules/engine.io-client/lib/transports/websocket-constructor.browser.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/engine.io-client/lib/transports/websocket-constructor.browser.js ***!
  \***************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var globalThis = __webpack_require__(/*! ../globalThis */ "./node_modules/engine.io-client/lib/globalThis.browser.js");

module.exports = {
  WebSocket: globalThis.WebSocket || globalThis.MozWebSocket,
  usingBrowserWebSocket: true,
  defaultBinaryType: "arraybuffer"
};

/***/ }),

/***/ "./node_modules/engine.io-client/lib/transports/websocket.js":
/*!*******************************************************************!*\
  !*** ./node_modules/engine.io-client/lib/transports/websocket.js ***!
  \*******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Transport = __webpack_require__(/*! ../transport */ "./node_modules/engine.io-client/lib/transport.js");

var parser = __webpack_require__(/*! engine.io-parser */ "./node_modules/engine.io-parser/lib/index.js");

var parseqs = __webpack_require__(/*! parseqs */ "./node_modules/parseqs/index.js");

var yeast = __webpack_require__(/*! yeast */ "./node_modules/yeast/index.js");

var _require = __webpack_require__(/*! ../util */ "./node_modules/engine.io-client/lib/util.js"),
    pick = _require.pick;

var _require2 = __webpack_require__(/*! ./websocket-constructor */ "./node_modules/engine.io-client/lib/transports/websocket-constructor.browser.js"),
    WebSocket = _require2.WebSocket,
    usingBrowserWebSocket = _require2.usingBrowserWebSocket,
    defaultBinaryType = _require2.defaultBinaryType;

var debug = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js")("engine.io-client:websocket"); // detect ReactNative environment


var isReactNative = typeof navigator !== "undefined" && typeof navigator.product === "string" && navigator.product.toLowerCase() === "reactnative";

var WS = /*#__PURE__*/function (_Transport) {
  _inherits(WS, _Transport);

  var _super = _createSuper(WS);

  /**
   * WebSocket transport constructor.
   *
   * @api {Object} connection options
   * @api public
   */
  function WS(opts) {
    var _this;

    _classCallCheck(this, WS);

    _this = _super.call(this, opts);
    _this.supportsBinary = !opts.forceBase64;
    return _this;
  }
  /**
   * Transport name.
   *
   * @api public
   */


  _createClass(WS, [{
    key: "name",
    get: function get() {
      return "websocket";
    }
    /**
     * Opens socket.
     *
     * @api private
     */

  }, {
    key: "doOpen",
    value: function doOpen() {
      if (!this.check()) {
        // let probe timeout
        return;
      }

      var uri = this.uri();
      var protocols = this.opts.protocols; // React Native only supports the 'headers' option, and will print a warning if anything else is passed

      var opts = isReactNative ? {} : pick(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");

      if (this.opts.extraHeaders) {
        opts.headers = this.opts.extraHeaders;
      }

      try {
        this.ws = usingBrowserWebSocket && !isReactNative ? protocols ? new WebSocket(uri, protocols) : new WebSocket(uri) : new WebSocket(uri, protocols, opts);
      } catch (err) {
        return this.emit("error", err);
      }

      this.ws.binaryType = this.socket.binaryType || defaultBinaryType;
      this.addEventListeners();
    }
    /**
     * Adds event listeners to the socket
     *
     * @api private
     */

  }, {
    key: "addEventListeners",
    value: function addEventListeners() {
      var _this2 = this;

      this.ws.onopen = function () {
        if (_this2.opts.autoUnref) {
          _this2.ws._socket.unref();
        }

        _this2.onOpen();
      };

      this.ws.onclose = this.onClose.bind(this);

      this.ws.onmessage = function (ev) {
        return _this2.onData(ev.data);
      };

      this.ws.onerror = function (e) {
        return _this2.onError("websocket error", e);
      };
    }
    /**
     * Writes data to socket.
     *
     * @param {Array} array of packets.
     * @api private
     */

  }, {
    key: "write",
    value: function write(packets) {
      var _this3 = this;

      this.writable = false; // encodePacket efficient as it uses WS framing
      // no need for encodePayload

      var _loop = function _loop(i) {
        var packet = packets[i];
        var lastPacket = i === packets.length - 1;
        parser.encodePacket(packet, _this3.supportsBinary, function (data) {
          // always create a new object (GH-437)
          var opts = {};

          if (!usingBrowserWebSocket) {
            if (packet.options) {
              opts.compress = packet.options.compress;
            }

            if (_this3.opts.perMessageDeflate) {
              var len = "string" === typeof data ? Buffer.byteLength(data) : data.length;

              if (len < _this3.opts.perMessageDeflate.threshold) {
                opts.compress = false;
              }
            }
          } // Sometimes the websocket has already been closed but the browser didn't
          // have a chance of informing us about it yet, in that case send will
          // throw an error


          try {
            if (usingBrowserWebSocket) {
              // TypeError is thrown when passing the second argument on Safari
              _this3.ws.send(data);
            } else {
              _this3.ws.send(data, opts);
            }
          } catch (e) {
            debug("websocket closed before onclose event");
          }

          if (lastPacket) {
            // fake drain
            // defer to next tick to allow Socket to clear writeBuffer
            setTimeout(function () {
              _this3.writable = true;

              _this3.emit("drain");
            }, 0);
          }
        });
      };

      for (var i = 0; i < packets.length; i++) {
        _loop(i);
      }
    }
    /**
     * Called upon close
     *
     * @api private
     */

  }, {
    key: "onClose",
    value: function onClose() {
      Transport.prototype.onClose.call(this);
    }
    /**
     * Closes socket.
     *
     * @api private
     */

  }, {
    key: "doClose",
    value: function doClose() {
      if (typeof this.ws !== "undefined") {
        this.ws.close();
        this.ws = null;
      }
    }
    /**
     * Generates uri for connection.
     *
     * @api private
     */

  }, {
    key: "uri",
    value: function uri() {
      var query = this.query || {};
      var schema = this.opts.secure ? "wss" : "ws";
      var port = ""; // avoid port if default for schema

      if (this.opts.port && ("wss" === schema && Number(this.opts.port) !== 443 || "ws" === schema && Number(this.opts.port) !== 80)) {
        port = ":" + this.opts.port;
      } // append timestamp to URI


      if (this.opts.timestampRequests) {
        query[this.opts.timestampParam] = yeast();
      } // communicate binary support capabilities


      if (!this.supportsBinary) {
        query.b64 = 1;
      }

      query = parseqs.encode(query); // prepend ? to query

      if (query.length) {
        query = "?" + query;
      }

      var ipv6 = this.opts.hostname.indexOf(":") !== -1;
      return schema + "://" + (ipv6 ? "[" + this.opts.hostname + "]" : this.opts.hostname) + port + this.opts.path + query;
    }
    /**
     * Feature detection for WebSocket.
     *
     * @return {Boolean} whether this transport is available.
     * @api public
     */

  }, {
    key: "check",
    value: function check() {
      return !!WebSocket && !("__initialize" in WebSocket && this.name === WS.prototype.name);
    }
  }]);

  return WS;
}(Transport);

module.exports = WS;

/***/ }),

/***/ "./node_modules/engine.io-client/lib/util.js":
/*!***************************************************!*\
  !*** ./node_modules/engine.io-client/lib/util.js ***!
  \***************************************************/
/***/ (function(module) {

module.exports.pick = function (obj) {
  for (var _len = arguments.length, attr = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    attr[_key - 1] = arguments[_key];
  }

  return attr.reduce(function (acc, k) {
    if (obj.hasOwnProperty(k)) {
      acc[k] = obj[k];
    }

    return acc;
  }, {});
};

/***/ }),

/***/ "./node_modules/engine.io-client/lib/xmlhttprequest.js":
/*!*************************************************************!*\
  !*** ./node_modules/engine.io-client/lib/xmlhttprequest.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// browser shim for xmlhttprequest module
var hasCORS = __webpack_require__(/*! has-cors */ "./node_modules/has-cors/index.js");

var globalThis = __webpack_require__(/*! ./globalThis */ "./node_modules/engine.io-client/lib/globalThis.browser.js");

module.exports = function (opts) {
  var xdomain = opts.xdomain; // scheme must be same when usign XDomainRequest
  // http://blogs.msdn.com/b/ieinternals/archive/2010/05/13/xdomainrequest-restrictions-limitations-and-workarounds.aspx

  var xscheme = opts.xscheme; // XDomainRequest has a flow of not sending cookie, therefore it should be disabled as a default.
  // https://github.com/Automattic/engine.io-client/pull/217

  var enablesXDR = opts.enablesXDR; // XMLHttpRequest can be disabled on IE

  try {
    if ("undefined" !== typeof XMLHttpRequest && (!xdomain || hasCORS)) {
      return new XMLHttpRequest();
    }
  } catch (e) {} // Use XDomainRequest for IE8 if enablesXDR is true
  // because loading bar keeps flashing when using jsonp-polling
  // https://github.com/yujiosaka/socke.io-ie8-loading-example


  try {
    if ("undefined" !== typeof XDomainRequest && !xscheme && enablesXDR) {
      return new XDomainRequest();
    }
  } catch (e) {}

  if (!xdomain) {
    try {
      return new globalThis[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch (e) {}
  }
};

/***/ }),

/***/ "./node_modules/engine.io-parser/lib/commons.js":
/*!******************************************************!*\
  !*** ./node_modules/engine.io-parser/lib/commons.js ***!
  \******************************************************/
/***/ (function(module) {

var PACKET_TYPES = Object.create(null); // no Map = no polyfill

PACKET_TYPES["open"] = "0";
PACKET_TYPES["close"] = "1";
PACKET_TYPES["ping"] = "2";
PACKET_TYPES["pong"] = "3";
PACKET_TYPES["message"] = "4";
PACKET_TYPES["upgrade"] = "5";
PACKET_TYPES["noop"] = "6";
var PACKET_TYPES_REVERSE = Object.create(null);
Object.keys(PACKET_TYPES).forEach(function (key) {
  PACKET_TYPES_REVERSE[PACKET_TYPES[key]] = key;
});
var ERROR_PACKET = {
  type: "error",
  data: "parser error"
};
module.exports = {
  PACKET_TYPES: PACKET_TYPES,
  PACKET_TYPES_REVERSE: PACKET_TYPES_REVERSE,
  ERROR_PACKET: ERROR_PACKET
};

/***/ }),

/***/ "./node_modules/engine.io-parser/lib/decodePacket.browser.js":
/*!*******************************************************************!*\
  !*** ./node_modules/engine.io-parser/lib/decodePacket.browser.js ***!
  \*******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _require = __webpack_require__(/*! ./commons */ "./node_modules/engine.io-parser/lib/commons.js"),
    PACKET_TYPES_REVERSE = _require.PACKET_TYPES_REVERSE,
    ERROR_PACKET = _require.ERROR_PACKET;

var withNativeArrayBuffer = typeof ArrayBuffer === "function";
var base64decoder;

if (withNativeArrayBuffer) {
  base64decoder = __webpack_require__(/*! base64-arraybuffer */ "./node_modules/base64-arraybuffer/lib/base64-arraybuffer.js");
}

var decodePacket = function decodePacket(encodedPacket, binaryType) {
  if (typeof encodedPacket !== "string") {
    return {
      type: "message",
      data: mapBinary(encodedPacket, binaryType)
    };
  }

  var type = encodedPacket.charAt(0);

  if (type === "b") {
    return {
      type: "message",
      data: decodeBase64Packet(encodedPacket.substring(1), binaryType)
    };
  }

  var packetType = PACKET_TYPES_REVERSE[type];

  if (!packetType) {
    return ERROR_PACKET;
  }

  return encodedPacket.length > 1 ? {
    type: PACKET_TYPES_REVERSE[type],
    data: encodedPacket.substring(1)
  } : {
    type: PACKET_TYPES_REVERSE[type]
  };
};

var decodeBase64Packet = function decodeBase64Packet(data, binaryType) {
  if (base64decoder) {
    var decoded = base64decoder.decode(data);
    return mapBinary(decoded, binaryType);
  } else {
    return {
      base64: true,
      data: data
    }; // fallback for old browsers
  }
};

var mapBinary = function mapBinary(data, binaryType) {
  switch (binaryType) {
    case "blob":
      return data instanceof ArrayBuffer ? new Blob([data]) : data;

    case "arraybuffer":
    default:
      return data;
    // assuming the data is already an ArrayBuffer
  }
};

module.exports = decodePacket;

/***/ }),

/***/ "./node_modules/engine.io-parser/lib/encodePacket.browser.js":
/*!*******************************************************************!*\
  !*** ./node_modules/engine.io-parser/lib/encodePacket.browser.js ***!
  \*******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _require = __webpack_require__(/*! ./commons */ "./node_modules/engine.io-parser/lib/commons.js"),
    PACKET_TYPES = _require.PACKET_TYPES;

var withNativeBlob = typeof Blob === "function" || typeof Blob !== "undefined" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]";
var withNativeArrayBuffer = typeof ArrayBuffer === "function"; // ArrayBuffer.isView method is not defined in IE10

var isView = function isView(obj) {
  return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj && obj.buffer instanceof ArrayBuffer;
};

var encodePacket = function encodePacket(_ref, supportsBinary, callback) {
  var type = _ref.type,
      data = _ref.data;

  if (withNativeBlob && data instanceof Blob) {
    if (supportsBinary) {
      return callback(data);
    } else {
      return encodeBlobAsBase64(data, callback);
    }
  } else if (withNativeArrayBuffer && (data instanceof ArrayBuffer || isView(data))) {
    if (supportsBinary) {
      return callback(data instanceof ArrayBuffer ? data : data.buffer);
    } else {
      return encodeBlobAsBase64(new Blob([data]), callback);
    }
  } // plain string


  return callback(PACKET_TYPES[type] + (data || ""));
};

var encodeBlobAsBase64 = function encodeBlobAsBase64(data, callback) {
  var fileReader = new FileReader();

  fileReader.onload = function () {
    var content = fileReader.result.split(",")[1];
    callback("b" + content);
  };

  return fileReader.readAsDataURL(data);
};

module.exports = encodePacket;

/***/ }),

/***/ "./node_modules/engine.io-parser/lib/index.js":
/*!****************************************************!*\
  !*** ./node_modules/engine.io-parser/lib/index.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var encodePacket = __webpack_require__(/*! ./encodePacket */ "./node_modules/engine.io-parser/lib/encodePacket.browser.js");

var decodePacket = __webpack_require__(/*! ./decodePacket */ "./node_modules/engine.io-parser/lib/decodePacket.browser.js");

var SEPARATOR = String.fromCharCode(30); // see https://en.wikipedia.org/wiki/Delimiter#ASCII_delimited_text

var encodePayload = function encodePayload(packets, callback) {
  // some packets may be added to the array while encoding, so the initial length must be saved
  var length = packets.length;
  var encodedPackets = new Array(length);
  var count = 0;
  packets.forEach(function (packet, i) {
    // force base64 encoding for binary packets
    encodePacket(packet, false, function (encodedPacket) {
      encodedPackets[i] = encodedPacket;

      if (++count === length) {
        callback(encodedPackets.join(SEPARATOR));
      }
    });
  });
};

var decodePayload = function decodePayload(encodedPayload, binaryType) {
  var encodedPackets = encodedPayload.split(SEPARATOR);
  var packets = [];

  for (var i = 0; i < encodedPackets.length; i++) {
    var decodedPacket = decodePacket(encodedPackets[i], binaryType);
    packets.push(decodedPacket);

    if (decodedPacket.type === "error") {
      break;
    }
  }

  return packets;
};

module.exports = {
  protocol: 4,
  encodePacket: encodePacket,
  encodePayload: encodePayload,
  decodePacket: decodePacket,
  decodePayload: decodePayload
};

/***/ }),

/***/ "./node_modules/has-cors/index.js":
/*!****************************************!*\
  !*** ./node_modules/has-cors/index.js ***!
  \****************************************/
/***/ (function(module) {

/**
 * Module exports.
 *
 * Logic borrowed from Modernizr:
 *
 *   - https://github.com/Modernizr/Modernizr/blob/master/feature-detects/cors.js
 */
try {
  module.exports = typeof XMLHttpRequest !== 'undefined' && 'withCredentials' in new XMLHttpRequest();
} catch (err) {
  // if XMLHttp support is disabled in IE then it will throw
  // when trying to create
  module.exports = false;
}

/***/ }),

/***/ "./node_modules/mersenne-twister/src/mersenne-twister.js":
/*!***************************************************************!*\
  !*** ./node_modules/mersenne-twister/src/mersenne-twister.js ***!
  \***************************************************************/
/***/ (function(module) {

/*
  https://github.com/banksean wrapped Makoto Matsumoto and Takuji Nishimura's code in a namespace
  so it's better encapsulated. Now you can have multiple random number generators
  and they won't stomp all over eachother's state.

  If you want to use this as a substitute for Math.random(), use the random()
  method like so:

  var m = new MersenneTwister();
  var randomNumber = m.random();

  You can also call the other genrand_{foo}() methods on the instance.

  If you want to use a specific seed in order to get a repeatable random
  sequence, pass an integer into the constructor:

  var m = new MersenneTwister(123);

  and that will always produce the same random sequence.

  Sean McCullough (banksean@gmail.com)
*/

/*
   A C-program for MT19937, with initialization improved 2002/1/26.
   Coded by Takuji Nishimura and Makoto Matsumoto.

   Before using, initialize the state by using init_seed(seed)
   or init_by_array(init_key, key_length).

   Copyright (C) 1997 - 2002, Makoto Matsumoto and Takuji Nishimura,
   All rights reserved.

   Redistribution and use in source and binary forms, with or without
   modification, are permitted provided that the following conditions
   are met:

     1. Redistributions of source code must retain the above copyright
        notice, this list of conditions and the following disclaimer.

     2. Redistributions in binary form must reproduce the above copyright
        notice, this list of conditions and the following disclaimer in the
        documentation and/or other materials provided with the distribution.

     3. The names of its contributors may not be used to endorse or promote
        products derived from this software without specific prior written
        permission.

   THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
   "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
   LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
   A PARTICULAR PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
   CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
   EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
   PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
   PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
   LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
   NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
   SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.


   Any feedback is very welcome.
   http://www.math.sci.hiroshima-u.ac.jp/~m-mat/MT/emt.html
   email: m-mat @ math.sci.hiroshima-u.ac.jp (remove space)
*/
var MersenneTwister = function MersenneTwister(seed) {
  if (seed == undefined) {
    seed = new Date().getTime();
  }
  /* Period parameters */


  this.N = 624;
  this.M = 397;
  this.MATRIX_A = 0x9908b0df;
  /* constant vector a */

  this.UPPER_MASK = 0x80000000;
  /* most significant w-r bits */

  this.LOWER_MASK = 0x7fffffff;
  /* least significant r bits */

  this.mt = new Array(this.N);
  /* the array for the state vector */

  this.mti = this.N + 1;
  /* mti==N+1 means mt[N] is not initialized */

  if (seed.constructor == Array) {
    this.init_by_array(seed, seed.length);
  } else {
    this.init_seed(seed);
  }
};
/* initializes mt[N] with a seed */

/* origin name init_genrand */


MersenneTwister.prototype.init_seed = function (s) {
  this.mt[0] = s >>> 0;

  for (this.mti = 1; this.mti < this.N; this.mti++) {
    var s = this.mt[this.mti - 1] ^ this.mt[this.mti - 1] >>> 30;
    this.mt[this.mti] = (((s & 0xffff0000) >>> 16) * 1812433253 << 16) + (s & 0x0000ffff) * 1812433253 + this.mti;
    /* See Knuth TAOCP Vol2. 3rd Ed. P.106 for multiplier. */

    /* In the previous versions, MSBs of the seed affect   */

    /* only MSBs of the array mt[].                        */

    /* 2002/01/09 modified by Makoto Matsumoto             */

    this.mt[this.mti] >>>= 0;
    /* for >32 bit machines */
  }
};
/* initialize by an array with array-length */

/* init_key is the array for initializing keys */

/* key_length is its length */

/* slight change for C++, 2004/2/26 */


MersenneTwister.prototype.init_by_array = function (init_key, key_length) {
  var i, j, k;
  this.init_seed(19650218);
  i = 1;
  j = 0;
  k = this.N > key_length ? this.N : key_length;

  for (; k; k--) {
    var s = this.mt[i - 1] ^ this.mt[i - 1] >>> 30;
    this.mt[i] = (this.mt[i] ^ (((s & 0xffff0000) >>> 16) * 1664525 << 16) + (s & 0x0000ffff) * 1664525) + init_key[j] + j;
    /* non linear */

    this.mt[i] >>>= 0;
    /* for WORDSIZE > 32 machines */

    i++;
    j++;

    if (i >= this.N) {
      this.mt[0] = this.mt[this.N - 1];
      i = 1;
    }

    if (j >= key_length) j = 0;
  }

  for (k = this.N - 1; k; k--) {
    var s = this.mt[i - 1] ^ this.mt[i - 1] >>> 30;
    this.mt[i] = (this.mt[i] ^ (((s & 0xffff0000) >>> 16) * 1566083941 << 16) + (s & 0x0000ffff) * 1566083941) - i;
    /* non linear */

    this.mt[i] >>>= 0;
    /* for WORDSIZE > 32 machines */

    i++;

    if (i >= this.N) {
      this.mt[0] = this.mt[this.N - 1];
      i = 1;
    }
  }

  this.mt[0] = 0x80000000;
  /* MSB is 1; assuring non-zero initial array */
};
/* generates a random number on [0,0xffffffff]-interval */

/* origin name genrand_int32 */


MersenneTwister.prototype.random_int = function () {
  var y;
  var mag01 = new Array(0x0, this.MATRIX_A);
  /* mag01[x] = x * MATRIX_A  for x=0,1 */

  if (this.mti >= this.N) {
    /* generate N words at one time */
    var kk;
    if (this.mti == this.N + 1)
      /* if init_seed() has not been called, */
      this.init_seed(5489);
    /* a default initial seed is used */

    for (kk = 0; kk < this.N - this.M; kk++) {
      y = this.mt[kk] & this.UPPER_MASK | this.mt[kk + 1] & this.LOWER_MASK;
      this.mt[kk] = this.mt[kk + this.M] ^ y >>> 1 ^ mag01[y & 0x1];
    }

    for (; kk < this.N - 1; kk++) {
      y = this.mt[kk] & this.UPPER_MASK | this.mt[kk + 1] & this.LOWER_MASK;
      this.mt[kk] = this.mt[kk + (this.M - this.N)] ^ y >>> 1 ^ mag01[y & 0x1];
    }

    y = this.mt[this.N - 1] & this.UPPER_MASK | this.mt[0] & this.LOWER_MASK;
    this.mt[this.N - 1] = this.mt[this.M - 1] ^ y >>> 1 ^ mag01[y & 0x1];
    this.mti = 0;
  }

  y = this.mt[this.mti++];
  /* Tempering */

  y ^= y >>> 11;
  y ^= y << 7 & 0x9d2c5680;
  y ^= y << 15 & 0xefc60000;
  y ^= y >>> 18;
  return y >>> 0;
};
/* generates a random number on [0,0x7fffffff]-interval */

/* origin name genrand_int31 */


MersenneTwister.prototype.random_int31 = function () {
  return this.random_int() >>> 1;
};
/* generates a random number on [0,1]-real-interval */

/* origin name genrand_real1 */


MersenneTwister.prototype.random_incl = function () {
  return this.random_int() * (1.0 / 4294967295.0);
  /* divided by 2^32-1 */
};
/* generates a random number on [0,1)-real-interval */


MersenneTwister.prototype.random = function () {
  return this.random_int() * (1.0 / 4294967296.0);
  /* divided by 2^32 */
};
/* generates a random number on (0,1)-real-interval */

/* origin name genrand_real3 */


MersenneTwister.prototype.random_excl = function () {
  return (this.random_int() + 0.5) * (1.0 / 4294967296.0);
  /* divided by 2^32 */
};
/* generates a random number on [0,1) with 53-bit resolution*/

/* origin name genrand_res53 */


MersenneTwister.prototype.random_long = function () {
  var a = this.random_int() >>> 5,
      b = this.random_int() >>> 6;
  return (a * 67108864.0 + b) * (1.0 / 9007199254740992.0);
};
/* These real versions are due to Isaku Wada, 2002/01/09 added */


module.exports = MersenneTwister;

/***/ }),

/***/ "./node_modules/parseqs/index.js":
/*!***************************************!*\
  !*** ./node_modules/parseqs/index.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports) {

/**
 * Compiles a querystring
 * Returns string representation of the object
 *
 * @param {Object}
 * @api private
 */
exports.encode = function (obj) {
  var str = '';

  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      if (str.length) str += '&';
      str += encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]);
    }
  }

  return str;
};
/**
 * Parses a simple querystring into an object
 *
 * @param {String} qs
 * @api private
 */


exports.decode = function (qs) {
  var qry = {};
  var pairs = qs.split('&');

  for (var i = 0, l = pairs.length; i < l; i++) {
    var pair = pairs[i].split('=');
    qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
  }

  return qry;
};

/***/ }),

/***/ "./node_modules/parseuri/index.js":
/*!****************************************!*\
  !*** ./node_modules/parseuri/index.js ***!
  \****************************************/
/***/ (function(module) {

/**
 * Parses an URI
 *
 * @author Steven Levithan <stevenlevithan.com> (MIT license)
 * @api private
 */
var re = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
var parts = ['source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'];

module.exports = function parseuri(str) {
  var src = str,
      b = str.indexOf('['),
      e = str.indexOf(']');

  if (b != -1 && e != -1) {
    str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ';') + str.substring(e, str.length);
  }

  var m = re.exec(str || ''),
      uri = {},
      i = 14;

  while (i--) {
    uri[parts[i]] = m[i] || '';
  }

  if (b != -1 && e != -1) {
    uri.source = src;
    uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ':');
    uri.authority = uri.authority.replace('[', '').replace(']', '').replace(/;/g, ':');
    uri.ipv6uri = true;
  }

  uri.pathNames = pathNames(uri, uri['path']);
  uri.queryKey = queryKey(uri, uri['query']);
  return uri;
};

function pathNames(obj, path) {
  var regx = /\/{2,9}/g,
      names = path.replace(regx, "/").split("/");

  if (path.substr(0, 1) == '/' || path.length === 0) {
    names.splice(0, 1);
  }

  if (path.substr(path.length - 1, 1) == '/') {
    names.splice(names.length - 1, 1);
  }

  return names;
}

function queryKey(uri, query) {
  var data = {};
  query.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function ($0, $1, $2) {
    if ($1) {
      data[$1] = $2;
    }
  });
  return data;
}

/***/ }),

/***/ "./node_modules/path2d-polyfill/dist/index.esm.js":
/*!********************************************************!*\
  !*** ./node_modules/path2d-polyfill/dist/index.esm.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var ARG_LENGTH = {
  a: 7,
  c: 6,
  h: 1,
  l: 2,
  m: 2,
  q: 4,
  s: 4,
  t: 2,
  v: 1,
  z: 0
};
var SEGMENT_PATTERN = /([astvzqmhlc])([^astvzqmhlc]*)/gi;
var NUMBER = /-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/gi;

function parseValues(args) {
  var numbers = args.match(NUMBER);
  return numbers ? numbers.map(Number) : [];
}
/**
 * parse an svg path data string. Generates an Array
 * of commands where each command is an Array of the
 * form `[command, arg1, arg2, ...]`
 *
 * https://www.w3.org/TR/SVG/paths.html#PathDataGeneralInformation
 * @ignore
 *
 * @param {string} path
 * @returns {array}
 */


function parse(path) {
  var data = [];
  var p = String(path).trim(); // A path data segment (if there is one) must begin with a "moveto" command

  if (p[0] !== 'M' && p[0] !== 'm') {
    return data;
  }

  p.replace(SEGMENT_PATTERN, function (_, command, args) {
    var type = command.toLowerCase();
    var theArgs = parseValues(args);
    var theCommand = command; // overloaded moveTo

    if (type === 'm' && theArgs.length > 2) {
      data.push([theCommand].concat(theArgs.splice(0, 2)));
      type = 'l';
      theCommand = theCommand === 'm' ? 'l' : 'L';
    } // Ignore invalid commands


    if (theArgs.length < ARG_LENGTH[type]) {
      return '';
    }

    data.push([theCommand].concat(theArgs.splice(0, ARG_LENGTH[type]))); // The command letter can be eliminated on subsequent commands if the
    // same command is used multiple times in a row (e.g., you can drop the
    // second "L" in "M 100 200 L 200 100 L -100 -200" and use
    // "M 100 200 L 200 100 -100 -200" instead).

    while (theArgs.length >= ARG_LENGTH[type] && theArgs.length && ARG_LENGTH[type]) {
      data.push([theCommand].concat(theArgs.splice(0, ARG_LENGTH[type])));
    }

    return '';
  });
  return data;
}

var parsePath = parse;

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
/**
 * Work around for https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/8438884/
 * @ignore
 */


function supportsSvgPathArgument(window) {
  var canvas = window.document.createElement('canvas');
  var g = canvas.getContext('2d');
  var p = new window.Path2D('M0 0 L1 1');
  g.strokeStyle = 'red';
  g.lineWidth = 1;
  g.stroke(p);
  var imgData = g.getImageData(0, 0, 1, 1);
  return imgData.data[0] === 255; // Check if pixel is red
}

function rotatePoint(point, angle) {
  var nx = point.x * Math.cos(angle) - point.y * Math.sin(angle);
  var ny = point.y * Math.cos(angle) + point.x * Math.sin(angle);
  point.x = nx;
  point.y = ny;
}

function translatePoint(point, dx, dy) {
  point.x += dx;
  point.y += dy;
}

function scalePoint(point, s) {
  point.x *= s;
  point.y *= s;
}

function polyFillPath2D(window) {
  if (typeof window === 'undefined' || !window.CanvasRenderingContext2D) {
    return;
  }

  if (window.Path2D && supportsSvgPathArgument(window)) {
    return;
  }
  /**
   * Crates a Path2D polyfill object
   * @constructor
   * @ignore
   * @param {String} path
   */


  var Path2D = /*#__PURE__*/function () {
    function Path2D(path) {
      _classCallCheck(this, Path2D);

      this.segments = [];

      if (path && path instanceof Path2D) {
        var _this$segments;

        (_this$segments = this.segments).push.apply(_this$segments, _toConsumableArray(path.segments));
      } else if (path) {
        this.segments = parsePath(path);
      }
    }

    _createClass(Path2D, [{
      key: "addPath",
      value: function addPath(path) {
        if (path && path instanceof Path2D) {
          var _this$segments2;

          (_this$segments2 = this.segments).push.apply(_this$segments2, _toConsumableArray(path.segments));
        }
      }
    }, {
      key: "moveTo",
      value: function moveTo(x, y) {
        this.segments.push(['M', x, y]);
      }
    }, {
      key: "lineTo",
      value: function lineTo(x, y) {
        this.segments.push(['L', x, y]);
      }
    }, {
      key: "arc",
      value: function arc(x, y, r, start, end, ccw) {
        this.segments.push(['AC', x, y, r, start, end, !!ccw]);
      }
    }, {
      key: "arcTo",
      value: function arcTo(x1, y1, x2, y2, r) {
        this.segments.push(['AT', x1, y1, x2, y2, r]);
      }
    }, {
      key: "ellipse",
      value: function ellipse(x, y, rx, ry, angle, start, end, ccw) {
        this.segments.push(['E', x, y, rx, ry, angle, start, end, !!ccw]);
      }
    }, {
      key: "closePath",
      value: function closePath() {
        this.segments.push(['Z']);
      }
    }, {
      key: "bezierCurveTo",
      value: function bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y) {
        this.segments.push(['C', cp1x, cp1y, cp2x, cp2y, x, y]);
      }
    }, {
      key: "quadraticCurveTo",
      value: function quadraticCurveTo(cpx, cpy, x, y) {
        this.segments.push(['Q', cpx, cpy, x, y]);
      }
    }, {
      key: "rect",
      value: function rect(x, y, width, height) {
        this.segments.push(['R', x, y, width, height]);
      }
    }]);

    return Path2D;
  }();

  function buildPath(canvas, segments) {
    var endAngle;
    var startAngle;
    var largeArcFlag;
    var sweepFlag;
    var endPoint;
    var midPoint;
    var angle;
    var lambda;
    var t1;
    var t2;
    var x;
    var x1;
    var y;
    var y1;
    var r;
    var rx;
    var ry;
    var w;
    var h;
    var pathType;
    var centerPoint;
    var cpx;
    var cpy;
    var qcpx;
    var qcpy;
    var ccw;
    var startPoint = {
      x: 0,
      y: 0
    };
    var currentPoint = {
      x: 0,
      y: 0
    };
    canvas.beginPath();

    for (var i = 0; i < segments.length; ++i) {
      var s = segments[i];
      pathType = s[0]; // Reset control point if command is not cubic

      if (pathType !== 'S' && pathType !== 's' && pathType !== 'C' && pathType !== 'c') {
        cpx = null;
        cpy = null;
      }

      if (pathType !== 'T' && pathType !== 't' && pathType !== 'Q' && pathType !== 'q') {
        qcpx = null;
        qcpy = null;
      }

      switch (pathType) {
        case 'm':
        case 'M':
          if (pathType === 'm') {
            x += s[1];
            y += s[2];
          } else {
            x = s[1];
            y = s[2];
          }

          if (pathType === 'M' || !startPoint) {
            startPoint = {
              x: x,
              y: y
            };
          }

          canvas.moveTo(x, y);
          break;

        case 'l':
          x += s[1];
          y += s[2];
          canvas.lineTo(x, y);
          break;

        case 'L':
          x = s[1];
          y = s[2];
          canvas.lineTo(x, y);
          break;

        case 'H':
          x = s[1];
          canvas.lineTo(x, y);
          break;

        case 'h':
          x += s[1];
          canvas.lineTo(x, y);
          break;

        case 'V':
          y = s[1];
          canvas.lineTo(x, y);
          break;

        case 'v':
          y += s[1];
          canvas.lineTo(x, y);
          break;

        case 'a':
        case 'A':
          if (pathType === 'a') {
            x += s[6];
            y += s[7];
          } else {
            x = s[6];
            y = s[7];
          }

          rx = s[1]; // rx

          ry = s[2]; // ry

          angle = s[3] * Math.PI / 180;
          largeArcFlag = !!s[4];
          sweepFlag = !!s[5];
          endPoint = {
            x: x,
            y: y
          }; // https://www.w3.org/TR/SVG/implnote.html#ArcImplementationNotes

          midPoint = {
            x: (currentPoint.x - endPoint.x) / 2,
            y: (currentPoint.y - endPoint.y) / 2
          };
          rotatePoint(midPoint, -angle); // radius correction

          lambda = midPoint.x * midPoint.x / (rx * rx) + midPoint.y * midPoint.y / (ry * ry);

          if (lambda > 1) {
            lambda = Math.sqrt(lambda);
            rx *= lambda;
            ry *= lambda;
          }

          centerPoint = {
            x: rx * midPoint.y / ry,
            y: -(ry * midPoint.x) / rx
          };
          t1 = rx * rx * ry * ry;
          t2 = rx * rx * midPoint.y * midPoint.y + ry * ry * midPoint.x * midPoint.x;

          if (sweepFlag !== largeArcFlag) {
            scalePoint(centerPoint, Math.sqrt((t1 - t2) / t2) || 0);
          } else {
            scalePoint(centerPoint, -Math.sqrt((t1 - t2) / t2) || 0);
          }

          startAngle = Math.atan2((midPoint.y - centerPoint.y) / ry, (midPoint.x - centerPoint.x) / rx);
          endAngle = Math.atan2(-(midPoint.y + centerPoint.y) / ry, -(midPoint.x + centerPoint.x) / rx);
          rotatePoint(centerPoint, angle);
          translatePoint(centerPoint, (endPoint.x + currentPoint.x) / 2, (endPoint.y + currentPoint.y) / 2);
          canvas.save();
          canvas.translate(centerPoint.x, centerPoint.y);
          canvas.rotate(angle);
          canvas.scale(rx, ry);
          canvas.arc(0, 0, 1, startAngle, endAngle, !sweepFlag);
          canvas.restore();
          break;

        case 'C':
          cpx = s[3]; // Last control point

          cpy = s[4];
          x = s[5];
          y = s[6];
          canvas.bezierCurveTo(s[1], s[2], cpx, cpy, x, y);
          break;

        case 'c':
          canvas.bezierCurveTo(s[1] + x, s[2] + y, s[3] + x, s[4] + y, s[5] + x, s[6] + y);
          cpx = s[3] + x; // Last control point

          cpy = s[4] + y;
          x += s[5];
          y += s[6];
          break;

        case 'S':
          if (cpx === null || cpx === null) {
            cpx = x;
            cpy = y;
          }

          canvas.bezierCurveTo(2 * x - cpx, 2 * y - cpy, s[1], s[2], s[3], s[4]);
          cpx = s[1]; // last control point

          cpy = s[2];
          x = s[3];
          y = s[4];
          break;

        case 's':
          if (cpx === null || cpx === null) {
            cpx = x;
            cpy = y;
          }

          canvas.bezierCurveTo(2 * x - cpx, 2 * y - cpy, s[1] + x, s[2] + y, s[3] + x, s[4] + y);
          cpx = s[1] + x; // last control point

          cpy = s[2] + y;
          x += s[3];
          y += s[4];
          break;

        case 'Q':
          qcpx = s[1]; // last control point

          qcpy = s[2];
          x = s[3];
          y = s[4];
          canvas.quadraticCurveTo(qcpx, qcpy, x, y);
          break;

        case 'q':
          qcpx = s[1] + x; // last control point

          qcpy = s[2] + y;
          x += s[3];
          y += s[4];
          canvas.quadraticCurveTo(qcpx, qcpy, x, y);
          break;

        case 'T':
          if (qcpx === null || qcpx === null) {
            qcpx = x;
            qcpy = y;
          }

          qcpx = 2 * x - qcpx; // last control point

          qcpy = 2 * y - qcpy;
          x = s[1];
          y = s[2];
          canvas.quadraticCurveTo(qcpx, qcpy, x, y);
          break;

        case 't':
          if (qcpx === null || qcpx === null) {
            qcpx = x;
            qcpy = y;
          }

          qcpx = 2 * x - qcpx; // last control point

          qcpy = 2 * y - qcpy;
          x += s[1];
          y += s[2];
          canvas.quadraticCurveTo(qcpx, qcpy, x, y);
          break;

        case 'z':
        case 'Z':
          x = startPoint.x;
          y = startPoint.y;
          startPoint = undefined;
          canvas.closePath();
          break;

        case 'AC':
          // arc
          x = s[1];
          y = s[2];
          r = s[3];
          startAngle = s[4];
          endAngle = s[5];
          ccw = s[6];
          canvas.arc(x, y, r, startAngle, endAngle, ccw);
          break;

        case 'AT':
          // arcTo
          x1 = s[1];
          y1 = s[2];
          x = s[3];
          y = s[4];
          r = s[5];
          canvas.arcTo(x1, y1, x, y, r);
          break;

        case 'E':
          // ellipse
          x = s[1];
          y = s[2];
          rx = s[3];
          ry = s[4];
          angle = s[5];
          startAngle = s[6];
          endAngle = s[7];
          ccw = s[8];
          canvas.save();
          canvas.translate(x, y);
          canvas.rotate(angle);
          canvas.scale(rx, ry);
          canvas.arc(0, 0, 1, startAngle, endAngle, ccw);
          canvas.restore();
          break;

        case 'R':
          // rect
          x = s[1];
          y = s[2];
          w = s[3];
          h = s[4];
          startPoint = {
            x: x,
            y: y
          };
          canvas.rect(x, y, w, h);
          break;
      }

      currentPoint.x = x;
      currentPoint.y = y;
    }
  }

  var cFill = window.CanvasRenderingContext2D.prototype.fill;
  var cStroke = window.CanvasRenderingContext2D.prototype.stroke;

  window.CanvasRenderingContext2D.prototype.fill = function fill() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var fillRule = 'nonzero';

    if (args.length === 0 || args.length === 1 && typeof args[0] === 'string') {
      cFill.apply(this, args);
      return;
    }

    if (arguments.length === 2) {
      fillRule = args[1];
    }

    var path = args[0];
    buildPath(this, path.segments);
    cFill.call(this, fillRule);
  };

  window.CanvasRenderingContext2D.prototype.stroke = function stroke(path) {
    if (!path) {
      cStroke.call(this);
      return;
    }

    buildPath(this, path.segments);
    cStroke.call(this);
  };

  var cIsPointInPath = window.CanvasRenderingContext2D.prototype.isPointInPath;

  window.CanvasRenderingContext2D.prototype.isPointInPath = function isPointInPath() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    } // let fillRule = 'nonzero';


    if (args[0].constructor.name === 'Path2D') {
      // first argument is a Path2D object
      var x = args[1];
      var y = args[2];
      var fillRule = args[3] || 'nonzero';
      var path = args[0];
      buildPath(this, path.segments);
      return cIsPointInPath.apply(this, [x, y, fillRule]);
    } else {
      return cIsPointInPath.apply(this, args);
    }
  };

  window.Path2D = Path2D;
}

var path2dPolyfill = polyFillPath2D;

if (typeof window !== 'undefined') {
  path2dPolyfill(window);
}

var src = {
  path2dPolyfill: path2dPolyfill,
  parsePath: parsePath
};
/* harmony default export */ __webpack_exports__["default"] = (src);

/***/ }),

/***/ "./node_modules/socket.io-client/build/index.js":
/*!******************************************************!*\
  !*** ./node_modules/socket.io-client/build/index.js ***!
  \******************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.io = exports.Socket = exports.Manager = exports.protocol = void 0;

var url_1 = __webpack_require__(/*! ./url */ "./node_modules/socket.io-client/build/url.js");

var manager_1 = __webpack_require__(/*! ./manager */ "./node_modules/socket.io-client/build/manager.js");

var debug = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js")("socket.io-client");
/**
 * Module exports.
 */


module.exports = exports = lookup;
/**
 * Managers cache.
 */

var cache = exports.managers = {};

function lookup(uri, opts) {
  if (_typeof(uri) === "object") {
    opts = uri;
    uri = undefined;
  }

  opts = opts || {};
  var parsed = url_1.url(uri, opts.path || "/socket.io");
  var source = parsed.source;
  var id = parsed.id;
  var path = parsed.path;
  var sameNamespace = cache[id] && path in cache[id]["nsps"];
  var newConnection = opts.forceNew || opts["force new connection"] || false === opts.multiplex || sameNamespace;
  var io;

  if (newConnection) {
    debug("ignoring socket cache for %s", source);
    io = new manager_1.Manager(source, opts);
  } else {
    if (!cache[id]) {
      debug("new io instance for %s", source);
      cache[id] = new manager_1.Manager(source, opts);
    }

    io = cache[id];
  }

  if (parsed.query && !opts.query) {
    opts.query = parsed.queryKey;
  }

  return io.socket(parsed.path, opts);
}

exports.io = lookup;
/**
 * Protocol version.
 *
 * @public
 */

var socket_io_parser_1 = __webpack_require__(/*! socket.io-parser */ "./node_modules/socket.io-parser/dist/index.js");

Object.defineProperty(exports, "protocol", ({
  enumerable: true,
  get: function get() {
    return socket_io_parser_1.protocol;
  }
}));
/**
 * `connect`.
 *
 * @param {String} uri
 * @public
 */

exports.connect = lookup;
/**
 * Expose constructors for standalone build.
 *
 * @public
 */

var manager_2 = __webpack_require__(/*! ./manager */ "./node_modules/socket.io-client/build/manager.js");

Object.defineProperty(exports, "Manager", ({
  enumerable: true,
  get: function get() {
    return manager_2.Manager;
  }
}));

var socket_1 = __webpack_require__(/*! ./socket */ "./node_modules/socket.io-client/build/socket.js");

Object.defineProperty(exports, "Socket", ({
  enumerable: true,
  get: function get() {
    return socket_1.Socket;
  }
}));
exports.default = lookup;

/***/ }),

/***/ "./node_modules/socket.io-client/build/manager.js":
/*!********************************************************!*\
  !*** ./node_modules/socket.io-client/build/manager.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Manager = void 0;

var eio = __webpack_require__(/*! engine.io-client */ "./node_modules/engine.io-client/lib/index.js");

var socket_1 = __webpack_require__(/*! ./socket */ "./node_modules/socket.io-client/build/socket.js");

var parser = __webpack_require__(/*! socket.io-parser */ "./node_modules/socket.io-parser/dist/index.js");

var on_1 = __webpack_require__(/*! ./on */ "./node_modules/socket.io-client/build/on.js");

var Backoff = __webpack_require__(/*! backo2 */ "./node_modules/backo2/index.js");

var typed_events_1 = __webpack_require__(/*! ./typed-events */ "./node_modules/socket.io-client/build/typed-events.js");

var debug = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js")("socket.io-client:manager");

var Manager = /*#__PURE__*/function (_typed_events_1$Stric) {
  _inherits(Manager, _typed_events_1$Stric);

  var _super = _createSuper(Manager);

  function Manager(uri, opts) {
    var _this;

    _classCallCheck(this, Manager);

    _this = _super.call(this);
    _this.nsps = {};
    _this.subs = [];

    if (uri && "object" === _typeof(uri)) {
      opts = uri;
      uri = undefined;
    }

    opts = opts || {};
    opts.path = opts.path || "/socket.io";
    _this.opts = opts;

    _this.reconnection(opts.reconnection !== false);

    _this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);

    _this.reconnectionDelay(opts.reconnectionDelay || 1000);

    _this.reconnectionDelayMax(opts.reconnectionDelayMax || 5000);

    _this.randomizationFactor(opts.randomizationFactor || 0.5);

    _this.backoff = new Backoff({
      min: _this.reconnectionDelay(),
      max: _this.reconnectionDelayMax(),
      jitter: _this.randomizationFactor()
    });

    _this.timeout(null == opts.timeout ? 20000 : opts.timeout);

    _this._readyState = "closed";
    _this.uri = uri;

    var _parser = opts.parser || parser;

    _this.encoder = new _parser.Encoder();
    _this.decoder = new _parser.Decoder();
    _this._autoConnect = opts.autoConnect !== false;
    if (_this._autoConnect) _this.open();
    return _this;
  }

  _createClass(Manager, [{
    key: "reconnection",
    value: function reconnection(v) {
      if (!arguments.length) return this._reconnection;
      this._reconnection = !!v;
      return this;
    }
  }, {
    key: "reconnectionAttempts",
    value: function reconnectionAttempts(v) {
      if (v === undefined) return this._reconnectionAttempts;
      this._reconnectionAttempts = v;
      return this;
    }
  }, {
    key: "reconnectionDelay",
    value: function reconnectionDelay(v) {
      var _a;

      if (v === undefined) return this._reconnectionDelay;
      this._reconnectionDelay = v;
      (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMin(v);
      return this;
    }
  }, {
    key: "randomizationFactor",
    value: function randomizationFactor(v) {
      var _a;

      if (v === undefined) return this._randomizationFactor;
      this._randomizationFactor = v;
      (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setJitter(v);
      return this;
    }
  }, {
    key: "reconnectionDelayMax",
    value: function reconnectionDelayMax(v) {
      var _a;

      if (v === undefined) return this._reconnectionDelayMax;
      this._reconnectionDelayMax = v;
      (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMax(v);
      return this;
    }
  }, {
    key: "timeout",
    value: function timeout(v) {
      if (!arguments.length) return this._timeout;
      this._timeout = v;
      return this;
    }
    /**
     * Starts trying to reconnect if reconnection is enabled and we have not
     * started reconnecting yet
     *
     * @private
     */

  }, {
    key: "maybeReconnectOnOpen",
    value: function maybeReconnectOnOpen() {
      // Only try to reconnect if it's the first time we're connecting
      if (!this._reconnecting && this._reconnection && this.backoff.attempts === 0) {
        // keeps reconnection from firing twice for the same reconnection loop
        this.reconnect();
      }
    }
    /**
     * Sets the current transport `socket`.
     *
     * @param {Function} fn - optional, callback
     * @return self
     * @public
     */

  }, {
    key: "open",
    value: function open(fn) {
      var _this2 = this;

      debug("readyState %s", this._readyState);
      if (~this._readyState.indexOf("open")) return this;
      debug("opening %s", this.uri);
      this.engine = eio(this.uri, this.opts);
      var socket = this.engine;
      var self = this;
      this._readyState = "opening";
      this.skipReconnect = false; // emit `open`

      var openSubDestroy = on_1.on(socket, "open", function () {
        self.onopen();
        fn && fn();
      }); // emit `error`

      var errorSub = on_1.on(socket, "error", function (err) {
        debug("error");
        self.cleanup();
        self._readyState = "closed";

        _this2.emitReserved("error", err);

        if (fn) {
          fn(err);
        } else {
          // Only do this if there is no fn to handle the error
          self.maybeReconnectOnOpen();
        }
      });

      if (false !== this._timeout) {
        var timeout = this._timeout;
        debug("connect attempt will timeout after %d", timeout);

        if (timeout === 0) {
          openSubDestroy(); // prevents a race condition with the 'open' event
        } // set timer


        var timer = setTimeout(function () {
          debug("connect attempt timed out after %d", timeout);
          openSubDestroy();
          socket.close();
          socket.emit("error", new Error("timeout"));
        }, timeout);

        if (this.opts.autoUnref) {
          timer.unref();
        }

        this.subs.push(function subDestroy() {
          clearTimeout(timer);
        });
      }

      this.subs.push(openSubDestroy);
      this.subs.push(errorSub);
      return this;
    }
    /**
     * Alias for open()
     *
     * @return self
     * @public
     */

  }, {
    key: "connect",
    value: function connect(fn) {
      return this.open(fn);
    }
    /**
     * Called upon transport open.
     *
     * @private
     */

  }, {
    key: "onopen",
    value: function onopen() {
      debug("open"); // clear old subs

      this.cleanup(); // mark as open

      this._readyState = "open";
      this.emitReserved("open"); // add new subs

      var socket = this.engine;
      this.subs.push(on_1.on(socket, "ping", this.onping.bind(this)), on_1.on(socket, "data", this.ondata.bind(this)), on_1.on(socket, "error", this.onerror.bind(this)), on_1.on(socket, "close", this.onclose.bind(this)), on_1.on(this.decoder, "decoded", this.ondecoded.bind(this)));
    }
    /**
     * Called upon a ping.
     *
     * @private
     */

  }, {
    key: "onping",
    value: function onping() {
      this.emitReserved("ping");
    }
    /**
     * Called with data.
     *
     * @private
     */

  }, {
    key: "ondata",
    value: function ondata(data) {
      this.decoder.add(data);
    }
    /**
     * Called when parser fully decodes a packet.
     *
     * @private
     */

  }, {
    key: "ondecoded",
    value: function ondecoded(packet) {
      this.emitReserved("packet", packet);
    }
    /**
     * Called upon socket error.
     *
     * @private
     */

  }, {
    key: "onerror",
    value: function onerror(err) {
      debug("error", err);
      this.emitReserved("error", err);
    }
    /**
     * Creates a new socket for the given `nsp`.
     *
     * @return {Socket}
     * @public
     */

  }, {
    key: "socket",
    value: function socket(nsp, opts) {
      var socket = this.nsps[nsp];

      if (!socket) {
        socket = new socket_1.Socket(this, nsp, opts);
        this.nsps[nsp] = socket;
      }

      return socket;
    }
    /**
     * Called upon a socket close.
     *
     * @param socket
     * @private
     */

  }, {
    key: "_destroy",
    value: function _destroy(socket) {
      var nsps = Object.keys(this.nsps);

      for (var _i = 0, _nsps = nsps; _i < _nsps.length; _i++) {
        var nsp = _nsps[_i];
        var _socket = this.nsps[nsp];

        if (_socket.active) {
          debug("socket %s is still active, skipping close", nsp);
          return;
        }
      }

      this._close();
    }
    /**
     * Writes a packet.
     *
     * @param packet
     * @private
     */

  }, {
    key: "_packet",
    value: function _packet(packet) {
      debug("writing packet %j", packet);
      var encodedPackets = this.encoder.encode(packet);

      for (var i = 0; i < encodedPackets.length; i++) {
        this.engine.write(encodedPackets[i], packet.options);
      }
    }
    /**
     * Clean up transport subscriptions and packet buffer.
     *
     * @private
     */

  }, {
    key: "cleanup",
    value: function cleanup() {
      debug("cleanup");
      this.subs.forEach(function (subDestroy) {
        return subDestroy();
      });
      this.subs.length = 0;
      this.decoder.destroy();
    }
    /**
     * Close the current socket.
     *
     * @private
     */

  }, {
    key: "_close",
    value: function _close() {
      debug("disconnect");
      this.skipReconnect = true;
      this._reconnecting = false;

      if ("opening" === this._readyState) {
        // `onclose` will not fire because
        // an open event never happened
        this.cleanup();
      }

      this.backoff.reset();
      this._readyState = "closed";
      if (this.engine) this.engine.close();
    }
    /**
     * Alias for close()
     *
     * @private
     */

  }, {
    key: "disconnect",
    value: function disconnect() {
      return this._close();
    }
    /**
     * Called upon engine close.
     *
     * @private
     */

  }, {
    key: "onclose",
    value: function onclose(reason) {
      debug("onclose");
      this.cleanup();
      this.backoff.reset();
      this._readyState = "closed";
      this.emitReserved("close", reason);

      if (this._reconnection && !this.skipReconnect) {
        this.reconnect();
      }
    }
    /**
     * Attempt a reconnection.
     *
     * @private
     */

  }, {
    key: "reconnect",
    value: function reconnect() {
      var _this3 = this;

      if (this._reconnecting || this.skipReconnect) return this;
      var self = this;

      if (this.backoff.attempts >= this._reconnectionAttempts) {
        debug("reconnect failed");
        this.backoff.reset();
        this.emitReserved("reconnect_failed");
        this._reconnecting = false;
      } else {
        var delay = this.backoff.duration();
        debug("will wait %dms before reconnect attempt", delay);
        this._reconnecting = true;
        var timer = setTimeout(function () {
          if (self.skipReconnect) return;
          debug("attempting reconnect");

          _this3.emitReserved("reconnect_attempt", self.backoff.attempts); // check again for the case socket closed in above events


          if (self.skipReconnect) return;
          self.open(function (err) {
            if (err) {
              debug("reconnect attempt error");
              self._reconnecting = false;
              self.reconnect();

              _this3.emitReserved("reconnect_error", err);
            } else {
              debug("reconnect success");
              self.onreconnect();
            }
          });
        }, delay);

        if (this.opts.autoUnref) {
          timer.unref();
        }

        this.subs.push(function subDestroy() {
          clearTimeout(timer);
        });
      }
    }
    /**
     * Called upon successful reconnect.
     *
     * @private
     */

  }, {
    key: "onreconnect",
    value: function onreconnect() {
      var attempt = this.backoff.attempts;
      this._reconnecting = false;
      this.backoff.reset();
      this.emitReserved("reconnect", attempt);
    }
  }]);

  return Manager;
}(typed_events_1.StrictEventEmitter);

exports.Manager = Manager;

/***/ }),

/***/ "./node_modules/socket.io-client/build/on.js":
/*!***************************************************!*\
  !*** ./node_modules/socket.io-client/build/on.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.on = void 0;

function on(obj, ev, fn) {
  obj.on(ev, fn);
  return function subDestroy() {
    obj.off(ev, fn);
  };
}

exports.on = on;

/***/ }),

/***/ "./node_modules/socket.io-client/build/socket.js":
/*!*******************************************************!*\
  !*** ./node_modules/socket.io-client/build/socket.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Socket = void 0;

var socket_io_parser_1 = __webpack_require__(/*! socket.io-parser */ "./node_modules/socket.io-parser/dist/index.js");

var on_1 = __webpack_require__(/*! ./on */ "./node_modules/socket.io-client/build/on.js");

var typed_events_1 = __webpack_require__(/*! ./typed-events */ "./node_modules/socket.io-client/build/typed-events.js");

var debug = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js")("socket.io-client:socket");
/**
 * Internal events.
 * These events can't be emitted by the user.
 */


var RESERVED_EVENTS = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
  newListener: 1,
  removeListener: 1
});

var Socket = /*#__PURE__*/function (_typed_events_1$Stric) {
  _inherits(Socket, _typed_events_1$Stric);

  var _super = _createSuper(Socket);

  /**
   * `Socket` constructor.
   *
   * @public
   */
  function Socket(io, nsp, opts) {
    var _this;

    _classCallCheck(this, Socket);

    _this = _super.call(this);
    _this.receiveBuffer = [];
    _this.sendBuffer = [];
    _this.ids = 0;
    _this.acks = {};
    _this.flags = {};
    _this.io = io;
    _this.nsp = nsp;
    _this.ids = 0;
    _this.acks = {};
    _this.receiveBuffer = [];
    _this.sendBuffer = [];
    _this.connected = false;
    _this.disconnected = true;
    _this.flags = {};

    if (opts && opts.auth) {
      _this.auth = opts.auth;
    }

    if (_this.io._autoConnect) _this.open();
    return _this;
  }
  /**
   * Subscribe to open, close and packet events
   *
   * @private
   */


  _createClass(Socket, [{
    key: "subEvents",
    value: function subEvents() {
      if (this.subs) return;
      var io = this.io;
      this.subs = [on_1.on(io, "open", this.onopen.bind(this)), on_1.on(io, "packet", this.onpacket.bind(this)), on_1.on(io, "error", this.onerror.bind(this)), on_1.on(io, "close", this.onclose.bind(this))];
    }
    /**
     * Whether the Socket will try to reconnect when its Manager connects or reconnects
     */

  }, {
    key: "active",
    get: function get() {
      return !!this.subs;
    }
    /**
     * "Opens" the socket.
     *
     * @public
     */

  }, {
    key: "connect",
    value: function connect() {
      if (this.connected) return this;
      this.subEvents();
      if (!this.io["_reconnecting"]) this.io.open(); // ensure open

      if ("open" === this.io._readyState) this.onopen();
      return this;
    }
    /**
     * Alias for connect()
     */

  }, {
    key: "open",
    value: function open() {
      return this.connect();
    }
    /**
     * Sends a `message` event.
     *
     * @return self
     * @public
     */

  }, {
    key: "send",
    value: function send() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      args.unshift("message");
      this.emit.apply(this, args);
      return this;
    }
    /**
     * Override `emit`.
     * If the event is in `events`, it's emitted normally.
     *
     * @return self
     * @public
     */

  }, {
    key: "emit",
    value: function emit(ev) {
      if (RESERVED_EVENTS.hasOwnProperty(ev)) {
        throw new Error('"' + ev + '" is a reserved event name');
      }

      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      args.unshift(ev);
      var packet = {
        type: socket_io_parser_1.PacketType.EVENT,
        data: args
      };
      packet.options = {};
      packet.options.compress = this.flags.compress !== false; // event ack callback

      if ("function" === typeof args[args.length - 1]) {
        debug("emitting packet with ack id %d", this.ids);
        this.acks[this.ids] = args.pop();
        packet.id = this.ids++;
      }

      var isTransportWritable = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
      var discardPacket = this.flags.volatile && (!isTransportWritable || !this.connected);

      if (discardPacket) {
        debug("discard packet as the transport is not currently writable");
      } else if (this.connected) {
        this.packet(packet);
      } else {
        this.sendBuffer.push(packet);
      }

      this.flags = {};
      return this;
    }
    /**
     * Sends a packet.
     *
     * @param packet
     * @private
     */

  }, {
    key: "packet",
    value: function packet(_packet) {
      _packet.nsp = this.nsp;

      this.io._packet(_packet);
    }
    /**
     * Called upon engine `open`.
     *
     * @private
     */

  }, {
    key: "onopen",
    value: function onopen() {
      var _this2 = this;

      debug("transport is open - connecting");

      if (typeof this.auth == "function") {
        this.auth(function (data) {
          _this2.packet({
            type: socket_io_parser_1.PacketType.CONNECT,
            data: data
          });
        });
      } else {
        this.packet({
          type: socket_io_parser_1.PacketType.CONNECT,
          data: this.auth
        });
      }
    }
    /**
     * Called upon engine or manager `error`.
     *
     * @param err
     * @private
     */

  }, {
    key: "onerror",
    value: function onerror(err) {
      if (!this.connected) {
        this.emitReserved("connect_error", err);
      }
    }
    /**
     * Called upon engine `close`.
     *
     * @param reason
     * @private
     */

  }, {
    key: "onclose",
    value: function onclose(reason) {
      debug("close (%s)", reason);
      this.connected = false;
      this.disconnected = true;
      delete this.id;
      this.emitReserved("disconnect", reason);
    }
    /**
     * Called with socket packet.
     *
     * @param packet
     * @private
     */

  }, {
    key: "onpacket",
    value: function onpacket(packet) {
      var sameNamespace = packet.nsp === this.nsp;
      if (!sameNamespace) return;

      switch (packet.type) {
        case socket_io_parser_1.PacketType.CONNECT:
          if (packet.data && packet.data.sid) {
            var id = packet.data.sid;
            this.onconnect(id);
          } else {
            this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
          }

          break;

        case socket_io_parser_1.PacketType.EVENT:
          this.onevent(packet);
          break;

        case socket_io_parser_1.PacketType.BINARY_EVENT:
          this.onevent(packet);
          break;

        case socket_io_parser_1.PacketType.ACK:
          this.onack(packet);
          break;

        case socket_io_parser_1.PacketType.BINARY_ACK:
          this.onack(packet);
          break;

        case socket_io_parser_1.PacketType.DISCONNECT:
          this.ondisconnect();
          break;

        case socket_io_parser_1.PacketType.CONNECT_ERROR:
          var err = new Error(packet.data.message); // @ts-ignore

          err.data = packet.data.data;
          this.emitReserved("connect_error", err);
          break;
      }
    }
    /**
     * Called upon a server event.
     *
     * @param packet
     * @private
     */

  }, {
    key: "onevent",
    value: function onevent(packet) {
      var args = packet.data || [];
      debug("emitting event %j", args);

      if (null != packet.id) {
        debug("attaching ack callback to event");
        args.push(this.ack(packet.id));
      }

      if (this.connected) {
        this.emitEvent(args);
      } else {
        this.receiveBuffer.push(Object.freeze(args));
      }
    }
  }, {
    key: "emitEvent",
    value: function emitEvent(args) {
      if (this._anyListeners && this._anyListeners.length) {
        var listeners = this._anyListeners.slice();

        var _iterator = _createForOfIteratorHelper(listeners),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var listener = _step.value;
            listener.apply(this, args);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }

      _get(_getPrototypeOf(Socket.prototype), "emit", this).apply(this, args);
    }
    /**
     * Produces an ack callback to emit with an event.
     *
     * @private
     */

  }, {
    key: "ack",
    value: function ack(id) {
      var self = this;
      var sent = false;
      return function () {
        // prevent double callbacks
        if (sent) return;
        sent = true;

        for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          args[_key3] = arguments[_key3];
        }

        debug("sending ack %j", args);
        self.packet({
          type: socket_io_parser_1.PacketType.ACK,
          id: id,
          data: args
        });
      };
    }
    /**
     * Called upon a server acknowlegement.
     *
     * @param packet
     * @private
     */

  }, {
    key: "onack",
    value: function onack(packet) {
      var ack = this.acks[packet.id];

      if ("function" === typeof ack) {
        debug("calling ack %s with %j", packet.id, packet.data);
        ack.apply(this, packet.data);
        delete this.acks[packet.id];
      } else {
        debug("bad ack %s", packet.id);
      }
    }
    /**
     * Called upon server connect.
     *
     * @private
     */

  }, {
    key: "onconnect",
    value: function onconnect(id) {
      debug("socket connected with id %s", id);
      this.id = id;
      this.connected = true;
      this.disconnected = false;
      this.emitBuffered();
      this.emitReserved("connect");
    }
    /**
     * Emit buffered events (received and emitted).
     *
     * @private
     */

  }, {
    key: "emitBuffered",
    value: function emitBuffered() {
      var _this3 = this;

      this.receiveBuffer.forEach(function (args) {
        return _this3.emitEvent(args);
      });
      this.receiveBuffer = [];
      this.sendBuffer.forEach(function (packet) {
        return _this3.packet(packet);
      });
      this.sendBuffer = [];
    }
    /**
     * Called upon server disconnect.
     *
     * @private
     */

  }, {
    key: "ondisconnect",
    value: function ondisconnect() {
      debug("server disconnect (%s)", this.nsp);
      this.destroy();
      this.onclose("io server disconnect");
    }
    /**
     * Called upon forced client/server side disconnections,
     * this method ensures the manager stops tracking us and
     * that reconnections don't get triggered for this.
     *
     * @private
     */

  }, {
    key: "destroy",
    value: function destroy() {
      if (this.subs) {
        // clean subscriptions to avoid reconnections
        this.subs.forEach(function (subDestroy) {
          return subDestroy();
        });
        this.subs = undefined;
      }

      this.io["_destroy"](this);
    }
    /**
     * Disconnects the socket manually.
     *
     * @return self
     * @public
     */

  }, {
    key: "disconnect",
    value: function disconnect() {
      if (this.connected) {
        debug("performing disconnect (%s)", this.nsp);
        this.packet({
          type: socket_io_parser_1.PacketType.DISCONNECT
        });
      } // remove socket from pool


      this.destroy();

      if (this.connected) {
        // fire events
        this.onclose("io client disconnect");
      }

      return this;
    }
    /**
     * Alias for disconnect()
     *
     * @return self
     * @public
     */

  }, {
    key: "close",
    value: function close() {
      return this.disconnect();
    }
    /**
     * Sets the compress flag.
     *
     * @param compress - if `true`, compresses the sending data
     * @return self
     * @public
     */

  }, {
    key: "compress",
    value: function compress(_compress) {
      this.flags.compress = _compress;
      return this;
    }
    /**
     * Sets a modifier for a subsequent event emission that the event message will be dropped when this socket is not
     * ready to send messages.
     *
     * @returns self
     * @public
     */

  }, {
    key: "volatile",
    get: function get() {
      this.flags.volatile = true;
      return this;
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback.
     *
     * @param listener
     * @public
     */

  }, {
    key: "onAny",
    value: function onAny(listener) {
      this._anyListeners = this._anyListeners || [];

      this._anyListeners.push(listener);

      return this;
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback. The listener is added to the beginning of the listeners array.
     *
     * @param listener
     * @public
     */

  }, {
    key: "prependAny",
    value: function prependAny(listener) {
      this._anyListeners = this._anyListeners || [];

      this._anyListeners.unshift(listener);

      return this;
    }
    /**
     * Removes the listener that will be fired when any event is emitted.
     *
     * @param listener
     * @public
     */

  }, {
    key: "offAny",
    value: function offAny(listener) {
      if (!this._anyListeners) {
        return this;
      }

      if (listener) {
        var listeners = this._anyListeners;

        for (var i = 0; i < listeners.length; i++) {
          if (listener === listeners[i]) {
            listeners.splice(i, 1);
            return this;
          }
        }
      } else {
        this._anyListeners = [];
      }

      return this;
    }
    /**
     * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
     * e.g. to remove listeners.
     *
     * @public
     */

  }, {
    key: "listenersAny",
    value: function listenersAny() {
      return this._anyListeners || [];
    }
  }]);

  return Socket;
}(typed_events_1.StrictEventEmitter);

exports.Socket = Socket;

/***/ }),

/***/ "./node_modules/socket.io-client/build/typed-events.js":
/*!*************************************************************!*\
  !*** ./node_modules/socket.io-client/build/typed-events.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.StrictEventEmitter = void 0;

var Emitter = __webpack_require__(/*! component-emitter */ "./node_modules/component-emitter/index.js");
/**
 * Strictly typed version of an `EventEmitter`. A `TypedEventEmitter` takes type
 * parameters for mappings of event names to event data types, and strictly
 * types method calls to the `EventEmitter` according to these event maps.
 *
 * @typeParam ListenEvents - `EventsMap` of user-defined events that can be
 * listened to with `on` or `once`
 * @typeParam EmitEvents - `EventsMap` of user-defined events that can be
 * emitted with `emit`
 * @typeParam ReservedEvents - `EventsMap` of reserved events, that can be
 * emitted by socket.io with `emitReserved`, and can be listened to with
 * `listen`.
 */


var StrictEventEmitter = /*#__PURE__*/function (_Emitter) {
  _inherits(StrictEventEmitter, _Emitter);

  var _super = _createSuper(StrictEventEmitter);

  function StrictEventEmitter() {
    _classCallCheck(this, StrictEventEmitter);

    return _super.apply(this, arguments);
  }

  _createClass(StrictEventEmitter, [{
    key: "on",
    value:
    /**
     * Adds the `listener` function as an event listener for `ev`.
     *
     * @param ev Name of the event
     * @param listener Callback function
     */
    function on(ev, listener) {
      _get(_getPrototypeOf(StrictEventEmitter.prototype), "on", this).call(this, ev, listener);

      return this;
    }
    /**
     * Adds a one-time `listener` function as an event listener for `ev`.
     *
     * @param ev Name of the event
     * @param listener Callback function
     */

  }, {
    key: "once",
    value: function once(ev, listener) {
      _get(_getPrototypeOf(StrictEventEmitter.prototype), "once", this).call(this, ev, listener);

      return this;
    }
    /**
     * Emits an event.
     *
     * @param ev Name of the event
     * @param args Values to send to listeners of this event
     */

  }, {
    key: "emit",
    value: function emit(ev) {
      var _get2;

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      (_get2 = _get(_getPrototypeOf(StrictEventEmitter.prototype), "emit", this)).call.apply(_get2, [this, ev].concat(args));

      return this;
    }
    /**
     * Emits a reserved event.
     *
     * This method is `protected`, so that only a class extending
     * `StrictEventEmitter` can emit its own reserved events.
     *
     * @param ev Reserved event name
     * @param args Arguments to emit along with the event
     */

  }, {
    key: "emitReserved",
    value: function emitReserved(ev) {
      var _get3;

      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      (_get3 = _get(_getPrototypeOf(StrictEventEmitter.prototype), "emit", this)).call.apply(_get3, [this, ev].concat(args));

      return this;
    }
    /**
     * Returns the listeners listening to an event.
     *
     * @param event Event name
     * @returns Array of listeners subscribed to `event`
     */

  }, {
    key: "listeners",
    value: function listeners(event) {
      return _get(_getPrototypeOf(StrictEventEmitter.prototype), "listeners", this).call(this, event);
    }
  }]);

  return StrictEventEmitter;
}(Emitter);

exports.StrictEventEmitter = StrictEventEmitter;

/***/ }),

/***/ "./node_modules/socket.io-client/build/url.js":
/*!****************************************************!*\
  !*** ./node_modules/socket.io-client/build/url.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.url = void 0;

var parseuri = __webpack_require__(/*! parseuri */ "./node_modules/parseuri/index.js");

var debug = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js")("socket.io-client:url");
/**
 * URL parser.
 *
 * @param uri - url
 * @param path - the request path of the connection
 * @param loc - An object meant to mimic window.location.
 *        Defaults to window.location.
 * @public
 */


function url(uri) {
  var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var loc = arguments.length > 2 ? arguments[2] : undefined;
  var obj = uri; // default to window.location

  loc = loc || typeof location !== "undefined" && location;
  if (null == uri) uri = loc.protocol + "//" + loc.host; // relative path support

  if (typeof uri === "string") {
    if ("/" === uri.charAt(0)) {
      if ("/" === uri.charAt(1)) {
        uri = loc.protocol + uri;
      } else {
        uri = loc.host + uri;
      }
    }

    if (!/^(https?|wss?):\/\//.test(uri)) {
      debug("protocol-less url %s", uri);

      if ("undefined" !== typeof loc) {
        uri = loc.protocol + "//" + uri;
      } else {
        uri = "https://" + uri;
      }
    } // parse


    debug("parse %s", uri);
    obj = parseuri(uri);
  } // make sure we treat `localhost:80` and `localhost` equally


  if (!obj.port) {
    if (/^(http|ws)$/.test(obj.protocol)) {
      obj.port = "80";
    } else if (/^(http|ws)s$/.test(obj.protocol)) {
      obj.port = "443";
    }
  }

  obj.path = obj.path || "/";
  var ipv6 = obj.host.indexOf(":") !== -1;
  var host = ipv6 ? "[" + obj.host + "]" : obj.host; // define unique id

  obj.id = obj.protocol + "://" + host + ":" + obj.port + path; // define href

  obj.href = obj.protocol + "://" + host + (loc && loc.port === obj.port ? "" : ":" + obj.port);
  return obj;
}

exports.url = url;

/***/ }),

/***/ "./node_modules/socket.io-parser/dist/binary.js":
/*!******************************************************!*\
  !*** ./node_modules/socket.io-parser/dist/binary.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.reconstructPacket = exports.deconstructPacket = void 0;

var is_binary_1 = __webpack_require__(/*! ./is-binary */ "./node_modules/socket.io-parser/dist/is-binary.js");
/**
 * Replaces every Buffer | ArrayBuffer | Blob | File in packet with a numbered placeholder.
 *
 * @param {Object} packet - socket.io event packet
 * @return {Object} with deconstructed packet and list of buffers
 * @public
 */


function deconstructPacket(packet) {
  var buffers = [];
  var packetData = packet.data;
  var pack = packet;
  pack.data = _deconstructPacket(packetData, buffers);
  pack.attachments = buffers.length; // number of binary 'attachments'

  return {
    packet: pack,
    buffers: buffers
  };
}

exports.deconstructPacket = deconstructPacket;

function _deconstructPacket(data, buffers) {
  if (!data) return data;

  if (is_binary_1.isBinary(data)) {
    var placeholder = {
      _placeholder: true,
      num: buffers.length
    };
    buffers.push(data);
    return placeholder;
  } else if (Array.isArray(data)) {
    var newData = new Array(data.length);

    for (var i = 0; i < data.length; i++) {
      newData[i] = _deconstructPacket(data[i], buffers);
    }

    return newData;
  } else if (_typeof(data) === "object" && !(data instanceof Date)) {
    var _newData = {};

    for (var key in data) {
      if (data.hasOwnProperty(key)) {
        _newData[key] = _deconstructPacket(data[key], buffers);
      }
    }

    return _newData;
  }

  return data;
}
/**
 * Reconstructs a binary packet from its placeholder packet and buffers
 *
 * @param {Object} packet - event packet with placeholders
 * @param {Array} buffers - binary buffers to put in placeholder positions
 * @return {Object} reconstructed packet
 * @public
 */


function reconstructPacket(packet, buffers) {
  packet.data = _reconstructPacket(packet.data, buffers);
  packet.attachments = undefined; // no longer useful

  return packet;
}

exports.reconstructPacket = reconstructPacket;

function _reconstructPacket(data, buffers) {
  if (!data) return data;

  if (data && data._placeholder) {
    return buffers[data.num]; // appropriate buffer (should be natural order anyway)
  } else if (Array.isArray(data)) {
    for (var i = 0; i < data.length; i++) {
      data[i] = _reconstructPacket(data[i], buffers);
    }
  } else if (_typeof(data) === "object") {
    for (var key in data) {
      if (data.hasOwnProperty(key)) {
        data[key] = _reconstructPacket(data[key], buffers);
      }
    }
  }

  return data;
}

/***/ }),

/***/ "./node_modules/socket.io-parser/dist/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/socket.io-parser/dist/index.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Decoder = exports.Encoder = exports.PacketType = exports.protocol = void 0;

var Emitter = __webpack_require__(/*! component-emitter */ "./node_modules/component-emitter/index.js");

var binary_1 = __webpack_require__(/*! ./binary */ "./node_modules/socket.io-parser/dist/binary.js");

var is_binary_1 = __webpack_require__(/*! ./is-binary */ "./node_modules/socket.io-parser/dist/is-binary.js");

var debug = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js")("socket.io-parser");
/**
 * Protocol version.
 *
 * @public
 */


exports.protocol = 5;
var PacketType;

(function (PacketType) {
  PacketType[PacketType["CONNECT"] = 0] = "CONNECT";
  PacketType[PacketType["DISCONNECT"] = 1] = "DISCONNECT";
  PacketType[PacketType["EVENT"] = 2] = "EVENT";
  PacketType[PacketType["ACK"] = 3] = "ACK";
  PacketType[PacketType["CONNECT_ERROR"] = 4] = "CONNECT_ERROR";
  PacketType[PacketType["BINARY_EVENT"] = 5] = "BINARY_EVENT";
  PacketType[PacketType["BINARY_ACK"] = 6] = "BINARY_ACK";
})(PacketType = exports.PacketType || (exports.PacketType = {}));
/**
 * A socket.io Encoder instance
 */


var Encoder = /*#__PURE__*/function () {
  function Encoder() {
    _classCallCheck(this, Encoder);
  }

  _createClass(Encoder, [{
    key: "encode",
    value:
    /**
     * Encode a packet as a single string if non-binary, or as a
     * buffer sequence, depending on packet type.
     *
     * @param {Object} obj - packet object
     */
    function encode(obj) {
      debug("encoding packet %j", obj);

      if (obj.type === PacketType.EVENT || obj.type === PacketType.ACK) {
        if (is_binary_1.hasBinary(obj)) {
          obj.type = obj.type === PacketType.EVENT ? PacketType.BINARY_EVENT : PacketType.BINARY_ACK;
          return this.encodeAsBinary(obj);
        }
      }

      return [this.encodeAsString(obj)];
    }
    /**
     * Encode packet as string.
     */

  }, {
    key: "encodeAsString",
    value: function encodeAsString(obj) {
      // first is type
      var str = "" + obj.type; // attachments if we have them

      if (obj.type === PacketType.BINARY_EVENT || obj.type === PacketType.BINARY_ACK) {
        str += obj.attachments + "-";
      } // if we have a namespace other than `/`
      // we append it followed by a comma `,`


      if (obj.nsp && "/" !== obj.nsp) {
        str += obj.nsp + ",";
      } // immediately followed by the id


      if (null != obj.id) {
        str += obj.id;
      } // json data


      if (null != obj.data) {
        str += JSON.stringify(obj.data);
      }

      debug("encoded %j as %s", obj, str);
      return str;
    }
    /**
     * Encode packet as 'buffer sequence' by removing blobs, and
     * deconstructing packet into object with placeholders and
     * a list of buffers.
     */

  }, {
    key: "encodeAsBinary",
    value: function encodeAsBinary(obj) {
      var deconstruction = binary_1.deconstructPacket(obj);
      var pack = this.encodeAsString(deconstruction.packet);
      var buffers = deconstruction.buffers;
      buffers.unshift(pack); // add packet info to beginning of data list

      return buffers; // write all the buffers
    }
  }]);

  return Encoder;
}();

exports.Encoder = Encoder;
/**
 * A socket.io Decoder instance
 *
 * @return {Object} decoder
 */

var Decoder = /*#__PURE__*/function (_Emitter) {
  _inherits(Decoder, _Emitter);

  var _super = _createSuper(Decoder);

  function Decoder() {
    _classCallCheck(this, Decoder);

    return _super.call(this);
  }
  /**
   * Decodes an encoded packet string into packet JSON.
   *
   * @param {String} obj - encoded packet
   */


  _createClass(Decoder, [{
    key: "add",
    value: function add(obj) {
      var packet;

      if (typeof obj === "string") {
        packet = this.decodeString(obj);

        if (packet.type === PacketType.BINARY_EVENT || packet.type === PacketType.BINARY_ACK) {
          // binary packet's json
          this.reconstructor = new BinaryReconstructor(packet); // no attachments, labeled binary but no binary data to follow

          if (packet.attachments === 0) {
            _get(_getPrototypeOf(Decoder.prototype), "emit", this).call(this, "decoded", packet);
          }
        } else {
          // non-binary full packet
          _get(_getPrototypeOf(Decoder.prototype), "emit", this).call(this, "decoded", packet);
        }
      } else if (is_binary_1.isBinary(obj) || obj.base64) {
        // raw binary data
        if (!this.reconstructor) {
          throw new Error("got binary data when not reconstructing a packet");
        } else {
          packet = this.reconstructor.takeBinaryData(obj);

          if (packet) {
            // received final buffer
            this.reconstructor = null;

            _get(_getPrototypeOf(Decoder.prototype), "emit", this).call(this, "decoded", packet);
          }
        }
      } else {
        throw new Error("Unknown type: " + obj);
      }
    }
    /**
     * Decode a packet String (JSON data)
     *
     * @param {String} str
     * @return {Object} packet
     */

  }, {
    key: "decodeString",
    value: function decodeString(str) {
      var i = 0; // look up type

      var p = {
        type: Number(str.charAt(0))
      };

      if (PacketType[p.type] === undefined) {
        throw new Error("unknown packet type " + p.type);
      } // look up attachments if type binary


      if (p.type === PacketType.BINARY_EVENT || p.type === PacketType.BINARY_ACK) {
        var start = i + 1;

        while (str.charAt(++i) !== "-" && i != str.length) {}

        var buf = str.substring(start, i);

        if (buf != Number(buf) || str.charAt(i) !== "-") {
          throw new Error("Illegal attachments");
        }

        p.attachments = Number(buf);
      } // look up namespace (if any)


      if ("/" === str.charAt(i + 1)) {
        var _start = i + 1;

        while (++i) {
          var c = str.charAt(i);
          if ("," === c) break;
          if (i === str.length) break;
        }

        p.nsp = str.substring(_start, i);
      } else {
        p.nsp = "/";
      } // look up id


      var next = str.charAt(i + 1);

      if ("" !== next && Number(next) == next) {
        var _start2 = i + 1;

        while (++i) {
          var _c = str.charAt(i);

          if (null == _c || Number(_c) != _c) {
            --i;
            break;
          }

          if (i === str.length) break;
        }

        p.id = Number(str.substring(_start2, i + 1));
      } // look up json data


      if (str.charAt(++i)) {
        var payload = tryParse(str.substr(i));

        if (Decoder.isPayloadValid(p.type, payload)) {
          p.data = payload;
        } else {
          throw new Error("invalid payload");
        }
      }

      debug("decoded %s as %j", str, p);
      return p;
    }
  }, {
    key: "destroy",
    value:
    /**
     * Deallocates a parser's resources
     */
    function destroy() {
      if (this.reconstructor) {
        this.reconstructor.finishedReconstruction();
      }
    }
  }], [{
    key: "isPayloadValid",
    value: function isPayloadValid(type, payload) {
      switch (type) {
        case PacketType.CONNECT:
          return _typeof(payload) === "object";

        case PacketType.DISCONNECT:
          return payload === undefined;

        case PacketType.CONNECT_ERROR:
          return typeof payload === "string" || _typeof(payload) === "object";

        case PacketType.EVENT:
        case PacketType.BINARY_EVENT:
          return Array.isArray(payload) && payload.length > 0;

        case PacketType.ACK:
        case PacketType.BINARY_ACK:
          return Array.isArray(payload);
      }
    }
  }]);

  return Decoder;
}(Emitter);

exports.Decoder = Decoder;

function tryParse(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
    return false;
  }
}
/**
 * A manager of a binary event's 'buffer sequence'. Should
 * be constructed whenever a packet of type BINARY_EVENT is
 * decoded.
 *
 * @param {Object} packet
 * @return {BinaryReconstructor} initialized reconstructor
 */


var BinaryReconstructor = /*#__PURE__*/function () {
  function BinaryReconstructor(packet) {
    _classCallCheck(this, BinaryReconstructor);

    this.packet = packet;
    this.buffers = [];
    this.reconPack = packet;
  }
  /**
   * Method to be called when binary data received from connection
   * after a BINARY_EVENT packet.
   *
   * @param {Buffer | ArrayBuffer} binData - the raw binary data received
   * @return {null | Object} returns null if more binary data is expected or
   *   a reconstructed packet object if all buffers have been received.
   */


  _createClass(BinaryReconstructor, [{
    key: "takeBinaryData",
    value: function takeBinaryData(binData) {
      this.buffers.push(binData);

      if (this.buffers.length === this.reconPack.attachments) {
        // done with buffer list
        var packet = binary_1.reconstructPacket(this.reconPack, this.buffers);
        this.finishedReconstruction();
        return packet;
      }

      return null;
    }
    /**
     * Cleans up binary packet reconstruction variables.
     */

  }, {
    key: "finishedReconstruction",
    value: function finishedReconstruction() {
      this.reconPack = null;
      this.buffers = [];
    }
  }]);

  return BinaryReconstructor;
}();

/***/ }),

/***/ "./node_modules/socket.io-parser/dist/is-binary.js":
/*!*********************************************************!*\
  !*** ./node_modules/socket.io-parser/dist/is-binary.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.hasBinary = exports.isBinary = void 0;
var withNativeArrayBuffer = typeof ArrayBuffer === "function";

var isView = function isView(obj) {
  return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj.buffer instanceof ArrayBuffer;
};

var toString = Object.prototype.toString;
var withNativeBlob = typeof Blob === "function" || typeof Blob !== "undefined" && toString.call(Blob) === "[object BlobConstructor]";
var withNativeFile = typeof File === "function" || typeof File !== "undefined" && toString.call(File) === "[object FileConstructor]";
/**
 * Returns true if obj is a Buffer, an ArrayBuffer, a Blob or a File.
 *
 * @private
 */

function isBinary(obj) {
  return withNativeArrayBuffer && (obj instanceof ArrayBuffer || isView(obj)) || withNativeBlob && obj instanceof Blob || withNativeFile && obj instanceof File;
}

exports.isBinary = isBinary;

function hasBinary(obj, toJSON) {
  if (!obj || _typeof(obj) !== "object") {
    return false;
  }

  if (Array.isArray(obj)) {
    for (var i = 0, l = obj.length; i < l; i++) {
      if (hasBinary(obj[i])) {
        return true;
      }
    }

    return false;
  }

  if (isBinary(obj)) {
    return true;
  }

  if (obj.toJSON && typeof obj.toJSON === "function" && arguments.length === 1) {
    return hasBinary(obj.toJSON(), true);
  }

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key) && hasBinary(obj[key])) {
      return true;
    }
  }

  return false;
}

exports.hasBinary = hasBinary;

/***/ }),

/***/ "./node_modules/yeast/index.js":
/*!*************************************!*\
  !*** ./node_modules/yeast/index.js ***!
  \*************************************/
/***/ (function(module) {

"use strict";


var alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'.split(''),
    length = 64,
    map = {},
    seed = 0,
    i = 0,
    prev;
/**
 * Return a string representing the specified number.
 *
 * @param {Number} num The number to convert.
 * @returns {String} The string representation of the number.
 * @api public
 */

function encode(num) {
  var encoded = '';

  do {
    encoded = alphabet[num % length] + encoded;
    num = Math.floor(num / length);
  } while (num > 0);

  return encoded;
}
/**
 * Return the integer value specified by the given string.
 *
 * @param {String} str The string to convert.
 * @returns {Number} The integer value represented by the string.
 * @api public
 */


function decode(str) {
  var decoded = 0;

  for (i = 0; i < str.length; i++) {
    decoded = decoded * length + map[str.charAt(i)];
  }

  return decoded;
}
/**
 * Yeast: A tiny growing id generator.
 *
 * @returns {String} A unique id.
 * @api public
 */


function yeast() {
  var now = encode(+new Date());
  if (now !== prev) return seed = 0, prev = now;
  return now + '.' + encode(seed++);
} //
// Map each character to its index.
//


for (; i < length; i++) {
  map[alphabet[i]] = i;
} //
// Expose the `yeast`, `encode` and `decode` functions.
//


yeast.encode = encode;
yeast.decode = decode;
module.exports = yeast;

/***/ }),

/***/ "./ui.js":
/*!***************!*\
  !*** ./ui.js ***!
  \***************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initUI": function() { return /* binding */ initUI; },
/* harmony export */   "startCounting": function() { return /* binding */ startCounting; }
/* harmony export */ });
/* harmony import */ var _core_lib_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/lib/dom */ "./core/lib/dom.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ "./data.js");



function initUI(socket) {
  // status
  var gameCreated, joined, nameConfirmed, gameStarted; // query Elements

  var createGameBtn = (0,_core_lib_dom__WEBPACK_IMPORTED_MODULE_0__.$)('#create-game'); //  bindEvent : gameCreated

  var showJoinGamePromptBtn = (0,_core_lib_dom__WEBPACK_IMPORTED_MODULE_0__.$)('#show-join-game-prompt'); //  bindEvent

  var confirmJoinGameBtn = (0,_core_lib_dom__WEBPACK_IMPORTED_MODULE_0__.$)('#confirm-join-game'); //  bindEvent: joined

  var roomCodeInput = (0,_core_lib_dom__WEBPACK_IMPORTED_MODULE_0__.$)('#room-code-input');
  var roomCodeDisplay = (0,_core_lib_dom__WEBPACK_IMPORTED_MODULE_0__.$)('#room-code-display');
  var nameInput = (0,_core_lib_dom__WEBPACK_IMPORTED_MODULE_0__.$)('#name-input');
  var nameConfirm = (0,_core_lib_dom__WEBPACK_IMPORTED_MODULE_0__.$)('#name-confirm'); //  bindEvent nameConfirmed

  var leaveWaitingBtn = (0,_core_lib_dom__WEBPACK_IMPORTED_MODULE_0__.$)('#leave-waiting'); //  bindEvent

  var leaveGameStartAlert = (0,_core_lib_dom__WEBPACK_IMPORTED_MODULE_0__.$)('#leave-game-start-alert'); //  bindEvent

  var gameStart = (0,_core_lib_dom__WEBPACK_IMPORTED_MODULE_0__.$)('#game-start'); //  bindEvent
  // 建立 iniUI Promise 

  var initTrigger;
  var initUIPromise = new Promise(function (res, rej) {
    initTrigger = res;
  }); //...文字

  setInterval(function () {
    document.querySelectorAll('[data-role="..."]').forEach(function (ele) {
      if (ele.innerHTML.length < 3) {
        ele.innerHTML += '.';
      } else {
        ele.innerHTML = '';
      }
    });
  }, 500); //綁定關閉popout

  document.querySelectorAll('[close-this-popout]').forEach(function (ele) {
    var parentPopouts = (0,_core_lib_dom__WEBPACK_IMPORTED_MODULE_0__.parents)(ele, '.popout');
    ele.addEventListener('click', function () {
      togglePopout(parentPopouts[0].id, false);
    });
  }); // 宣告 flag, 目的是用來判定到底namePrompt 是從哪一個管道去call出來的

  var flag; //綁定確認送出按鈕的點擊事件

  nameConfirm.addEventListener('click', function () {
    if (nameConfirmed || gameCreated || joined) return;
    var name = nameInput.value ? nameInput.value : _data__WEBPACK_IMPORTED_MODULE_1__.playerRef.name;
    confirmName(socket, name);

    if (flag === 'onJoin') {
      togglePopout('join-game-prompt', true);
    } else if (flag === 'onCreate') {
      if (!gameCreated) {
        newGame(socket);
        gameCreated = true;
        joined = true;
        nameConfirmed = true;
      } else {
        return;
      }
    }
  }); //綁定按鈕點擊後開啟name-input-prompt => joinGame prompt

  showJoinGamePromptBtn.addEventListener('click', function () {
    flag = 'onJoin';
    togglePopout('name-input-prompt', true);
  }); //綁定按鈕點擊後送出想參加的房間碼的事件

  confirmJoinGameBtn.addEventListener('click', function () {
    if (!joined) {
      var roomCode = roomCodeInput.value;
      confirmJoinGame(socket, roomCode);
      joined = true;
      gameCreated = true;
      nameConfirmed = true;
    } else {
      return;
    }
  }); //綁定按鈕點擊後開啟name-input-prompt => newGame prompt

  createGameBtn.addEventListener('click', function () {
    flag = 'onCreate';
    togglePopout('name-input-prompt', true);
  }); //綁定第一離開按鈕

  leaveWaitingBtn.addEventListener('click', function () {
    socket.emit('leaveWaiting');
    gameCreated = false;
    joined = false;
    nameConfirmed = false;
    togglePopout('room-code-display-popout', false);
  }); //綁定第二離開按鈕

  leaveGameStartAlert.addEventListener('click', function () {
    socket.emit('leaveStartingGame', _data__WEBPACK_IMPORTED_MODULE_1__.playerRef);
    togglePopout('game-start-alert', false);
  });
  gameStart.addEventListener('click', function () {
    if (!gameStarted) {
      socket.emit('startMatch');
      gameStarted = true;
    } else {
      return;
    }
  }); //綁定當server傳來'genRoomCode'訊號後，ui 應產生的對應行為

  socket.on('genRoomCode', function (data) {
    roomCodeDisplay.innerHTML = data;
  }); //綁定當server傳來'playerJoined'訊號後，ui 應產生的對應行為

  socket.on('playerJoined', function (data) {
    if (data.playerNumber === 2) {
      if (_data__WEBPACK_IMPORTED_MODULE_1__.playerRef.number == 1) {
        document.querySelectorAll('[data-role="opponent"]').forEach(function (ele) {
          ele.innerHTML = "YOUR OPPONENT ".concat(data.playerName, " SHOWS UP!");
        });
        document.querySelectorAll('[data-role="player2"]').forEach(function (ele) {
          ele.style.display = 'none';
        });
      } else if (_data__WEBPACK_IMPORTED_MODULE_1__.playerRef.number == 2) {
        document.querySelectorAll('[data-role="opponent"]').forEach(function (ele) {
          ele.innerHTML = "WAITING FOR THE ROOM HOST<br><br>".concat(data.hostName, "<br><br>TO ACCEPT YOUR CHALLENGE<span data-role=\"...\"></span>");
        });
        document.querySelectorAll('[data-role="player1"]').forEach(function (ele) {
          ele.style.display = 'none';
        });
      }

      togglePopout('room-code-display-popout', false);
      togglePopout('join-game-prompt', false);
      togglePopout('game-start-alert', true);
    }
  });
  socket.on('host-leave', function (data) {
    togglePopout('game-start-alert', false);
    togglePopout('leave-alert', true);
    gameStarted = false;
    joined = false;
    nameConfirmed = false;
    gameCreated = false;
    (0,_core_lib_dom__WEBPACK_IMPORTED_MODULE_0__.$)('[data-role="leave-msg"]').innerHTML = "HOST ".concat(data.host, " LEFT AND SHUTDOWN THE ROOM.");
  });
  socket.on('challenger-leave', function (data) {
    togglePopout('game-start-alert', false);
    togglePopout('leave-alert', true);
    togglePopout('room-code-display-popout', true);
    gameStarted = false;
    joined = false;
    nameConfirmed = false;
    gameCreated = false;
    (0,_core_lib_dom__WEBPACK_IMPORTED_MODULE_0__.$)('[data-role="leave-msg"]').innerHTML = "CHALLENGER ".concat(data.challenger, " LEFT THIS MATCH.");
  });
  socket.on('leave', function () {
    gameStarted = false;
    joined = false;
    nameConfirmed = false;
    gameCreated = false;
  }); //綁定當server傳來'gameInit'訊號後，ui 應產生的對應行為

  socket.on('gameInit', function () {
    togglePopout('game-start-alert', false);
  }); // 觸發 promise fullfill機制

  initTrigger(); // 回傳 fullfill後的promise

  return initUIPromise;
}
/**
 * 開啟 popout
 *
 * @param {*} id
 * @param {*} status
 */

function togglePopout(id, status) {
  var popout = (0,_core_lib_dom__WEBPACK_IMPORTED_MODULE_0__.$)(".popout#".concat(id));

  if (status) {
    popout.classList.add('popout--show');
  } else {
    popout.classList.remove('popout--show');
  }
}
/**
 * 隱藏起始畫面
 *
 */


function hideInitialScreen() {
  var initialScreen = (0,_core_lib_dom__WEBPACK_IMPORTED_MODULE_0__.$)('#initial-screen');
  initialScreen.style.display = 'none';
}
/**
 *  開關具有hide-on-action屬性的ui element,
 *
 * @param {*} status
 */


function toggleHideOnAction(status) {
  document.querySelectorAll('[hide-on-action]').forEach(function (ele) {
    ele.setAttribute('hide-on-action', status ? '' : 'hide');
  });
}
/**
 * 開關具有show-on-full屬性的ui element,
 *
 * @param {*} status
 */


function toggleShowOnAction(status) {
  document.querySelectorAll('[show-on-action]').forEach(function (ele) {
    ele.setAttribute('show-on-action', status ? '' : 'hide');
  });
}
/**
 * 建立新遊戲
 *
 * @param {*} socket
 */


function newGame(socket) {
  _data__WEBPACK_IMPORTED_MODULE_1__.playerRef.number = 1;
  togglePopout('room-code-display-popout', true);
  socket.emit('newGame');
}
/**
 * 向server發出確認參加遊戲的信號
 *
 * @param {*} socket
 * @param {*} roomCode
 */


function confirmJoinGame(socket, roomCode) {
  _data__WEBPACK_IMPORTED_MODULE_1__.playerRef.number = 2;
  socket.emit('joinGame', roomCode);
}
/**
 * 
 * 確認輸入的暱稱後，把遊戲內所有data-role="name" 的 element, 內容都換成輸入的name, 並同時向server發送'nameConfirm'的訊號
 * 最後關閉name-input-prompt
 * @param {*} socket
 * @param {*} name
 * @param {*} cb
 */


function confirmName(socket, name, cb) {
  _data__WEBPACK_IMPORTED_MODULE_1__.playerRef.name = name;
  socket.emit('nameConfirm', name);
  document.querySelectorAll("[data-role=\"name\"]").forEach(function (o, i) {
    o.innerHTML = name;
  });
  togglePopout('name-input-prompt', false);
}

function startCounting(cb) {
  var gc = (0,_core_lib_dom__WEBPACK_IMPORTED_MODULE_0__.$)('#game-start-counting');
  gc.classList.add('game-start-counting--show');
  var number = gc.querySelector('.game-start-counting__number');
  number.innerHTML = 3;
  var timeInterval = setInterval(function () {
    if (parseInt(number.innerHTML) > 0) {
      number.innerHTML = parseInt(number.innerHTML) - 1;
    } else {
      clearInterval(timeInterval);
      (0,_core_lib_dom__WEBPACK_IMPORTED_MODULE_0__.fadeOut)(gc, 1000, function () {
        gc.classList.remove('game-start-counting--show');
      });
      cb();
    }
  }, 1000);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
var __webpack_exports__ = {};
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ "./ui.js");
/* harmony import */ var _core_splash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/splash */ "./core/splash.js");
/* harmony import */ var _core_game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/game */ "./core/game.js");




var socket = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/build/index.js")('http://localhost:3000');

(0,_core_splash__WEBPACK_IMPORTED_MODULE_1__.initSplash)();
var uiInitPromise = (0,_ui__WEBPACK_IMPORTED_MODULE_0__.initUI)(socket);
var game = (0,_core_game__WEBPACK_IMPORTED_MODULE_2__.gameBuilder)();
var gameContoller;
uiInitPromise.then(function () {
  game.trigger();
});
game.promise.then(function (instance) {
  gameContoller = instance;

  window.kk = function () {
    gameContoller.cvs.classList.add('promoted');
    gameContoller.drawGame();
  };
});
socket.on('gameInit', function () {
  (0,_ui__WEBPACK_IMPORTED_MODULE_0__.startCounting)(function () {
    gameContoller.cvs.classList.add('promoted');
    gameContoller.drawCourt();
  });
});
socket.on('host-leave', function () {
  gameContoller.cvs.classList.remove('promoted');
});
socket.on('challenger-leave', function () {
  gameContoller.cvs.classList.remove('promoted');
});
socket.on('leave', function () {
  gameContoller.cvs.classList.remove('promoted');
});
socket.on('tooManyPlayers', function () {
  alert('該房人數已滿');
});
socket.on('unknownCode', function () {
  alert('無效的房間碼');
});
socket.on('hostCantBeGuest', function () {
  alert('房主不能重複加入自己開好的房間喔');
});
}();
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vY29yZS9nYW1lLmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9jb3JlL2xpYi9hbmltYXRpb24uanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL2NvcmUvbGliL2Jhc2UuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL2NvcmUvbGliL2RvbS5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vY29yZS9saWIvZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL2NvcmUvbGliL3NoYXBlLmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9jb3JlL3NwbGFzaC5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vZGF0YS5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL2JhY2tvMi9pbmRleC5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL2Jhc2U2NC1hcnJheWJ1ZmZlci9saWIvYmFzZTY0LWFycmF5YnVmZmVyLmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvY29tcG9uZW50LWVtaXR0ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9kZWJ1Zy9ub2RlX21vZHVsZXMvbXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9kZWJ1Zy9zcmMvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL2RlYnVnL3NyYy9jb21tb24uanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2xpYi9nbG9iYWxUaGlzLmJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvbGliL3NvY2tldC5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvbGliL3RyYW5zcG9ydC5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvbGliL3RyYW5zcG9ydHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2xpYi90cmFuc3BvcnRzL3BvbGxpbmctanNvbnAuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2xpYi90cmFuc3BvcnRzL3BvbGxpbmcteGhyLmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9saWIvdHJhbnNwb3J0cy9wb2xsaW5nLmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9saWIvdHJhbnNwb3J0cy93ZWJzb2NrZXQtY29uc3RydWN0b3IuYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvbGliL3RyYW5zcG9ydHMvd2Vic29ja2V0LmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9saWIvdXRpbC5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvbGliL3htbGh0dHByZXF1ZXN0LmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLXBhcnNlci9saWIvY29tbW9ucy5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1wYXJzZXIvbGliL2RlY29kZVBhY2tldC5icm93c2VyLmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLXBhcnNlci9saWIvZW5jb2RlUGFja2V0LmJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tcGFyc2VyL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL2hhcy1jb3JzL2luZGV4LmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvbWVyc2VubmUtdHdpc3Rlci9zcmMvbWVyc2VubmUtdHdpc3Rlci5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL3BhcnNlcXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9wYXJzZXVyaS9pbmRleC5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4uL3NyYy9wYXJzZS1wYXRoLmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi4vc3JjL3BhdGgyZC1wb2x5ZmlsbC5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1jbGllbnQvYnVpbGQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tY2xpZW50L2J1aWxkL21hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tY2xpZW50L2J1aWxkL29uLmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLWNsaWVudC9idWlsZC9zb2NrZXQuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tY2xpZW50L2J1aWxkL3R5cGVkLWV2ZW50cy5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1jbGllbnQvYnVpbGQvdXJsLmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLXBhcnNlci9kaXN0L2JpbmFyeS5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1wYXJzZXIvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1wYXJzZXIvZGlzdC9pcy1iaW5hcnkuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy95ZWFzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vdWkuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9pbmRleC5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vc3JjL3Njc3MvbWFpbi5zY3NzIl0sIm5hbWVzIjpbIkRFRkFVTFQiLCJiZ0NvbG9yIiwiRW5naW5lIiwiZWxlIiwiZGVmYXVsdENvbmZpZyIsImNvbmZpZyIsImN1cnRhaW4iLCJpbml0Iiwic3dpcmw4Qml0IiwiY3R4IiwiY3ZzIiwiY291cnQiLCJnZW5Db3VydCIsImlzUmVzaXppbmdDYWxsYmFjayIsImNyZWF0ZVZpcnR1YWxDYW52YXMiLCJzZXRDYW52YXNTaXplIiwiYW5pbWF0ZSIsImN1cnRhaW5DYWxsUHJvbWlzZSIsImN1cnRhaW5DYWxsIiwidGhlbiIsImRyYXdDb3VydCIsIm9mZnNldFBlcmNlbnQiLCJiYW5kV2lkdGgiLCJjb2xvciIsInByb21pc2VUcmlnZ2VyIiwiZHJhd0NvdXJ0UHJvbWlzZSIsIlByb21pc2UiLCJyZXMiLCJyZWoiLCJ2ZXJ0aWNlcyIsIngiLCJ5Iiwid2lkdGgiLCJoZWlnaHQiLCJjdnNBc3BlY3RSYXRpbyIsImNvdXJ0V2lkdGgiLCJjb3VydEhlaWdodCIsImNvdXJ0T2Zmc2V0IiwidHJhbnNsYXRlIiwicm90YXRlIiwiTWF0aCIsIlBJIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImRyYXdJbWFnZSIsImNvdXJ0T3BlbmluZ0FuaW1hdGlvblByb21pc2UiLCJzdHJva2VBbmltYXRpb24iLCJ0aW1lb3V0Iiwic2V0VGltZW91dCIsImNsZWFySW50ZXJ2YWwiLCJjbGVhclRpbWVvdXQiLCJDYW52YXMyREZ4QmFzZSIsImdhbWVCdWlsZGVyIiwiZ2FtZSIsImJvb3QiLCJkb2N1bWVudCIsImJvZHkiLCJjb3VudGVyQ2xvY2t3aXNlQXJyIiwibmFtZSIsImNsb2Nrd2lzZUFyciIsImFuaW1hdGlvbkVuZFRyaWdnZXIiLCJvcmRlciIsImJhbmRXaWR0aFN0YWNrIiwiY2xvY2t3aXNlIiwidG90YWxXaWR0aCIsInRvdGFsSGVpZ2h0IiwiZGlyZWN0aW9uQXJyIiwibG9jYXRpb24iLCIkdGhpcyIsImFuaW1hdGlvblByb21pc2UiLCJkcmFXUmFuZG9tQW5nbGVkQmFuZCIsImdldFN0YXJ0TG9jYXRpb24iLCJwb2ludCIsInNhdmUiLCJiZWdpblBhdGgiLCJmaWxsU3R5bGUiLCJkcmF3QW5nbGVkQmFuZEZyb21UTCIsImRyYXdBbmdsZWRCYW5kRnJvbUJMIiwiZHJhd0FuZ2xlZEJhbmRGcm9tQlIiLCJkcmF3QW5nbGVkQmFuZEZyb21UUiIsImNsb3NlUGF0aCIsImZpbGwiLCJyZXN0b3JlIiwibW92ZVRvIiwicmFuZG9tSGVpZ2h0IiwicmFuZG9tV2l0aGluUmFuZ2UiLCJsaW5lVG8iLCJyYW5kb21XaWR0aCIsIndheXBvaW50cyIsImNhbGNXYXlwb2ludHMiLCJsb29waW5nRHJhd1N0cm9rZSIsImZwcyIsImNvdW50ZXIiLCJsaW5lQ2FwIiwic3Ryb2tlU3R5bGUiLCJsaW5lV2lkdGgiLCJsZW5ndGgiLCJzdHJva2UiLCJ2aXJ0dWFsUGFyZW50IiwiaXMiLCJPYmplY3QiLCJhc3NpZ24iLCJmcmFtZUNvdW50IiwibW91c2UiLCJmcmFtZUlzUGF1c2VkIiwiaXNDbGljayIsImNhbnZhc1NpemVmaXhlZCIsInByZXZpb3VzRnJhbWVUaW1lIiwiRGF0ZSIsImdldFRpbWUiLCJpc1Jlc2l6aW5nIiwicmVzaXplZENhbGxiYWNrIiwiaW5pdEJhc2UiLCJ0YWdOYW1lIiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZENoaWxkIiwiZ2V0Q29udGV4dCIsInRyaWdnZXJSZXNpemluZ01lY2hhbmlzbSIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJkZWJvdW5jZSIsInZpc2liaWxpdHlTdGF0ZSIsImFkZEV2ZW50SGFuZGxlciIsInJlZnJlc2hCYXNlRnJhbWVDb3VudGVyIiwidGhpc0ZyYW1lVGltZSIsInRpbWVFbGFwc2VkIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY29udGFpbnMiLCJjYWNoZUN2cyIsImNhY2hlQ3ZzQ29udGV4dCIsImNhbnZhc0ltYWdlRGF0YUJlZm9yZVJlc2l6ZSIsImdldEltYWdlRGF0YSIsImNhbnZhc1dpZHRoIiwiY2FudmFzSGVpZ2h0IiwidmlydHVhbFBhcmVudFZhbGlkYXRpb24iLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJwdXRJbWFnZURhdGEiLCJwYXJlbnRFbGVtZW50IiwidW5kZWZpbmVkIiwiZmlsbFJlY3QiLCJjbGVhclJlY3QiLCJlIiwicG9zIiwicG9pbnRlckV2ZW50VG9YWSIsInZjdnMiLCJ2Y3ZzSW5zdGFuY2UiLCJjdG9yIiwidGFyZ2V0RWxlIiwiZ2V0RWxlbWVudEJ5SWQiLCJ0cmlnZ2VyIiwiYm9vdFByb21pc2UiLCJpbnN0YW5jZSIsImNvbnRyb2xsZXIiLCJwcm9taXNlIiwiJCIsInNlbGVjdG9yIiwicXVlcnlTZWxlY3RvciIsInRvZ2dsZSIsInN0YXR1cyIsInN0eWxlU3RyIiwic2V0QXR0cmlidXRlIiwidG9nZ2xlQ2xhc3MiLCJjbGFzc25hbWUiLCJhY3Rpb24iLCJjbGFzc0xpc3QiLCJlbWl0IiwiZXZlbnROYW1lIiwic29tZUV2ZW50IiwiY3JlYXRlRXZlbnQiLCJpbml0RXZlbnQiLCJkaXNwYXRjaEV2ZW50IiwicGFyZW50cyIsIm5vZGUiLCJjdXJyZW50IiwibGlzdCIsInBhcmVudE5vZGUiLCJkb2N1bWVudEVsZW1lbnQiLCJwdXNoIiwiZmlsdGVyIiwibyIsImkiLCJtYXRjaGVzIiwiZmFkZU91dCIsImR1cmF0aW9uIiwiY2IiLCJzdHlsZSIsImRpc3BsYXkiLCJmYWRlVGFyZ2V0IiwiZmFkZUVmZmVjdCIsIm9wYWNpdHkiLCJNZXJzZW5uZVR3aXN0ZXIiLCJyZXF1aXJlIiwiTVQiLCJmdW5jIiwiZGVsYXkiLCJ0aW1lciIsImNvbnRleHQiLCJhcmdzIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJhcnIiLCJhIiwiQXJyYXkiLCJpc0FycmF5Iiwib2JqIiwicHJvdG90eXBlIiwidG9TdHJpbmciLCJjYWxsIiwiaW5kZXhPZiIsInB0aCIsImhhc093blByb3BlcnR5Iiwic3ZnIiwiU1ZHRWxlbWVudCIsImlucCIsIkhUTUxJbnB1dEVsZW1lbnQiLCJkb20iLCJub2RlVHlwZSIsInN0ciIsImZuYyIsInVuZCIsIm5pbCIsImhleCIsInRlc3QiLCJyZ2JhIiwicmdiIiwiaHNsIiwiY29sIiwia2V5IiwiZGVmYXVsdEluc3RhbmNlU2V0dGluZ3MiLCJkZWZhdWx0VHdlZW5TZXR0aW5ncyIsIm1pbiIsIm1heCIsInNlZWQiLCJyYW5kb20iLCJnZXREaXN0YW5jZSIsIngwIiwieTAiLCJ4MSIsInkxIiwic3FydCIsImRlZ3JlZVRvUmFkaWFuIiwiZGVncmVlIiwib3V0IiwidHlwZSIsInRvdWNoIiwib3JpZ2luYWxFdmVudCIsInRvdWNoZXMiLCJjaGFuZ2VkVG91Y2hlcyIsInBhZ2VYIiwicGFnZVkiLCJ0YXJnZXRIYXNQcm9wIiwidGFyZ2V0IiwicHJvcCIsImlzRW1wdHkiLCJ2YWwiLCJpc05hTiIsInJnYlRvUmdiYSIsInJnYlZhbHVlIiwiZXhlYyIsImhleFRvUmdiYSIsImhleFZhbHVlIiwicmd4IiwicmVwbGFjZSIsIm0iLCJyIiwiZyIsImIiLCJwYXJzZUludCIsImhzbFRvUmdiYSIsImhzbFZhbHVlIiwiaCIsInMiLCJsIiwiaHVlMnJnYiIsInAiLCJxIiwidCIsImNvbG9yVG9SZ2JhIiwiZ2V0Q2hhbm5lbFZhbHVlc0Zyb21SZ2JhIiwic3BsaXQiLCJtYXAiLCJpbnRlcnBvbGF0ZSIsInB0MCIsInB0MSIsImR4IiwiZHkiLCJqIiwiY29uc29sZSIsImxvZyIsImRyYXdTcXVhcmUiLCJhbHBoYSIsImdsb2JhbEFscGhhIiwiZHJhd0NpcmNsZSIsImFyYyIsImRyYXdMaW5lIiwic3Ryb2tlQ29sb3IiLCJzdHJva2VXaWR0aCIsImRyYXdUZXh0IiwidGV4dENvbnRlbnQiLCJmb250U2l6ZSIsImZvbnQiLCJmaWxsVGV4dCIsIkJBTExfQU5JTUFUSU9OX0RFRkFVTFQiLCJhZnRlckltYWdlIiwicmFkaXVzIiwic3BlZWRYIiwic3BlZWRZIiwiYWNjZWxlcmF0aW9uWCIsImFjY2VsZXJhdGlvblkiLCJmcmljdGlvblgiLCJmcmljdGlvblkiLCJTUE9UU19BTklNQVRJT05fREVGQVVMVCIsIm1pblNpemUiLCJtYXhTaXplIiwicGVyaW9kIiwic3RlcCIsImJvdHRvbUxheWVyIiwicm93IiwiQmFzaWNSZWZlbGVjdGlvbiIsImNhbnZhcyIsImluaXRCYWxsIiwiYW5pbWF0ZUJhbGwiLCJiYWxsIiwic3BlZWQiLCJhY2NlbGVyYXRpb24iLCJmcmljdGlvbiIsImJhY2tncm91bmQiLCJkcmF3QmFsbCIsInJlZnJlc2hMb2NhdGlvbiIsInJlZnJlc2hTcGVlZCIsImNoZWNrQm91bmRhcnkiLCJiaW5kIiwiZHQiLCJTcG90c0J1bXBpbmciLCJzcG90c1NpemUiLCJleHBhbmQiLCJjbGVhciIsImRyYXdTcG90cyIsImluaXRTcGxhc2giLCJpbml0aWFsU2NyZWVuIiwidmlydHVhbENhbnZhcyIsInNwb3RBbmltYXRpb24iLCJkYXRhU3RvcmFnZSIsInBvc2l0aW9uIiwiY2xpZW50cyIsInBsYXllclJlZiIsIm51bWJlciIsIm1vZHVsZSIsImV4cG9ydHMiLCJCYWNrb2ZmIiwib3B0cyIsIm1zIiwiZmFjdG9yIiwiaml0dGVyIiwiYXR0ZW1wdHMiLCJwb3ciLCJyYW5kIiwiZGV2aWF0aW9uIiwiZmxvb3IiLCJyZXNldCIsInNldE1pbiIsInNldE1heCIsInNldEppdHRlciIsImNoYXJzIiwiYXJyYXlidWZmZXIiLCJieXRlcyIsIlVpbnQ4QXJyYXkiLCJsZW4iLCJiYXNlNjQiLCJzdWJzdHJpbmciLCJidWZmZXJMZW5ndGgiLCJlbmNvZGVkMSIsImVuY29kZWQyIiwiZW5jb2RlZDMiLCJlbmNvZGVkNCIsIkFycmF5QnVmZmVyIiwiRW1pdHRlciIsIm1peGluIiwib24iLCJldmVudCIsImZuIiwiX2NhbGxiYWNrcyIsIm9uY2UiLCJvZmYiLCJyZW1vdmVMaXN0ZW5lciIsInJlbW92ZUFsbExpc3RlbmVycyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjYWxsYmFja3MiLCJzcGxpY2UiLCJzbGljZSIsImxpc3RlbmVycyIsImhhc0xpc3RlbmVycyIsImQiLCJ3Iiwib3B0aW9ucyIsInBhcnNlIiwiaXNGaW5pdGUiLCJsb25nIiwiZm10TG9uZyIsImZtdFNob3J0IiwiRXJyb3IiLCJKU09OIiwic3RyaW5naWZ5IiwiU3RyaW5nIiwibWF0Y2giLCJuIiwicGFyc2VGbG9hdCIsInRvTG93ZXJDYXNlIiwibXNBYnMiLCJhYnMiLCJyb3VuZCIsInBsdXJhbCIsImlzUGx1cmFsIiwiZm9ybWF0QXJncyIsImxvYWQiLCJ1c2VDb2xvcnMiLCJsb2NhbHN0b3JhZ2UiLCJ3YXJuZWQiLCJ3YXJuIiwicHJvY2VzcyIsIl9fbndqcyIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsIldlYmtpdEFwcGVhcmFuY2UiLCJmaXJlYnVnIiwiZXhjZXB0aW9uIiwidGFibGUiLCJSZWdFeHAiLCIkMSIsIm5hbWVzcGFjZSIsImh1bWFuaXplIiwiZGlmZiIsImMiLCJpbmRleCIsImxhc3RDIiwiZGVidWciLCJuYW1lc3BhY2VzIiwic3RvcmFnZSIsInNldEl0ZW0iLCJyZW1vdmVJdGVtIiwiZXJyb3IiLCJnZXRJdGVtIiwiZW52IiwiREVCVUciLCJsb2NhbFN0b3JhZ2UiLCJmb3JtYXR0ZXJzIiwidiIsIm1lc3NhZ2UiLCJzZXR1cCIsImNyZWF0ZURlYnVnIiwiZGVmYXVsdCIsImNvZXJjZSIsImRpc2FibGUiLCJlbmFibGUiLCJlbmFibGVkIiwiZGVzdHJveSIsImtleXMiLCJmb3JFYWNoIiwibmFtZXMiLCJza2lwcyIsInNlbGVjdENvbG9yIiwiaGFzaCIsImNoYXJDb2RlQXQiLCJjb2xvcnMiLCJwcmV2VGltZSIsImVuYWJsZU92ZXJyaWRlIiwic2VsZiIsImN1cnIiLCJOdW1iZXIiLCJwcmV2IiwidW5zaGlmdCIsImZvcm1hdCIsImZvcm1hdHRlciIsImxvZ0ZuIiwiZXh0ZW5kIiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwiZ2V0Iiwic2V0IiwiZGVsaW1pdGVyIiwibmV3RGVidWciLCJzdWJzdHIiLCJ0b05hbWVzcGFjZSIsImpvaW4iLCJyZWdleHAiLCJzdGFjayIsIkZ1bmN0aW9uIiwiU29ja2V0IiwidXJpIiwicHJvdG9jb2wiLCJ0cmFuc3BvcnRzIiwicGFyc2VyIiwicGFyc2V1cmkiLCJwYXJzZXFzIiwiaG9zdG5hbWUiLCJob3N0Iiwic2VjdXJlIiwicG9ydCIsInF1ZXJ5IiwicmVhZHlTdGF0ZSIsIndyaXRlQnVmZmVyIiwicHJldkJ1ZmZlckxlbiIsInBhdGgiLCJhZ2VudCIsIndpdGhDcmVkZW50aWFscyIsInVwZ3JhZGUiLCJqc29ucCIsInRpbWVzdGFtcFBhcmFtIiwicmVtZW1iZXJVcGdyYWRlIiwicmVqZWN0VW5hdXRob3JpemVkIiwicGVyTWVzc2FnZURlZmxhdGUiLCJ0aHJlc2hvbGQiLCJ0cmFuc3BvcnRPcHRpb25zIiwiY2xvc2VPbkJlZm9yZXVubG9hZCIsImRlY29kZSIsImlkIiwidXBncmFkZXMiLCJwaW5nSW50ZXJ2YWwiLCJwaW5nVGltZW91dCIsInBpbmdUaW1lb3V0VGltZXIiLCJ0cmFuc3BvcnQiLCJjbG9zZSIsIm9mZmxpbmVFdmVudExpc3RlbmVyIiwib25DbG9zZSIsIm9wZW4iLCJjbG9uZSIsIkVJTyIsInNpZCIsInNvY2tldCIsInByaW9yV2Vic29ja2V0U3VjY2VzcyIsImNyZWF0ZVRyYW5zcG9ydCIsInNoaWZ0Iiwic2V0VHJhbnNwb3J0Iiwib25EcmFpbiIsIm9uUGFja2V0Iiwib25FcnJvciIsInByb2JlIiwiZmFpbGVkIiwib25UcmFuc3BvcnRPcGVuIiwic2VuZCIsImRhdGEiLCJtc2ciLCJ1cGdyYWRpbmciLCJwYXVzZSIsImNsZWFudXAiLCJmbHVzaCIsImVyciIsImZyZWV6ZVRyYW5zcG9ydCIsIm9uZXJyb3IiLCJvblRyYW5zcG9ydENsb3NlIiwib25jbG9zZSIsIm9udXBncmFkZSIsInRvIiwicGFja2V0Iiwib25IYW5kc2hha2UiLCJyZXNldFBpbmdUaW1lb3V0Iiwic2VuZFBhY2tldCIsImNvZGUiLCJmaWx0ZXJVcGdyYWRlcyIsIm9uT3BlbiIsImF1dG9VbnJlZiIsInVucmVmIiwid3JpdGFibGUiLCJjb21wcmVzcyIsImNsZWFudXBBbmRDbG9zZSIsIndhaXRGb3JVcGdyYWRlIiwicmVhc29uIiwiZGVzYyIsInBpbmdJbnRlcnZhbFRpbWVyIiwiZmlsdGVyZWRVcGdyYWRlcyIsIlRyYW5zcG9ydCIsImRlc2NyaXB0aW9uIiwiZG9PcGVuIiwiZG9DbG9zZSIsInBhY2tldHMiLCJ3cml0ZSIsImRlY29kZVBhY2tldCIsImJpbmFyeVR5cGUiLCJYTUxIdHRwUmVxdWVzdCIsIlhIUiIsIkpTT05QIiwid2Vic29ja2V0IiwicG9sbGluZyIsInhociIsInhkIiwieHMiLCJpc1NTTCIsInhkb21haW4iLCJ4c2NoZW1lIiwiZm9yY2VKU09OUCIsIlBvbGxpbmciLCJnbG9iYWxUaGlzIiwick5ld2xpbmUiLCJyRXNjYXBlZE5ld2xpbmUiLCJKU09OUFBvbGxpbmciLCJfX19laW8iLCJvbkRhdGEiLCJzY3JpcHQiLCJyZW1vdmVDaGlsZCIsImZvcm0iLCJpZnJhbWUiLCJhc3luYyIsInNyYyIsImluc2VydEF0IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJpbnNlcnRCZWZvcmUiLCJoZWFkIiwiaXNVQWdlY2tvIiwiYXJlYSIsImlmcmFtZUlkIiwiY2xhc3NOYW1lIiwidG9wIiwibGVmdCIsIm1ldGhvZCIsImNvbXBsZXRlIiwiaW5pdElmcmFtZSIsImh0bWwiLCJ2YWx1ZSIsInN1Ym1pdCIsImF0dGFjaEV2ZW50Iiwib25yZWFkeXN0YXRlY2hhbmdlIiwib25sb2FkIiwicGljayIsImVtcHR5IiwiaGFzWEhSMiIsInJlc3BvbnNlVHlwZSIsImZvcmNlQmFzZTY0Iiwic3VwcG9ydHNCaW5hcnkiLCJSZXF1ZXN0IiwicmVxIiwicmVxdWVzdCIsInBvbGxYaHIiLCJjcmVhdGUiLCJleHRyYUhlYWRlcnMiLCJzZXREaXNhYmxlSGVhZGVyQ2hlY2siLCJzZXRSZXF1ZXN0SGVhZGVyIiwicmVxdWVzdFRpbWVvdXQiLCJoYXNYRFIiLCJvbkxvYWQiLCJyZXNwb25zZVRleHQiLCJyZXF1ZXN0c0NvdW50IiwicmVxdWVzdHMiLCJvblN1Y2Nlc3MiLCJmcm9tRXJyb3IiLCJhYm9ydCIsIlhEb21haW5SZXF1ZXN0IiwiZW5hYmxlc1hEUiIsInVubG9hZEhhbmRsZXIiLCJ0ZXJtaW5hdGlvbkV2ZW50IiwieWVhc3QiLCJwb2xsIiwib25QYXVzZSIsInRvdGFsIiwiZG9Qb2xsIiwiY2FsbGJhY2siLCJkZWNvZGVQYXlsb2FkIiwiZW5jb2RlUGF5bG9hZCIsImRvV3JpdGUiLCJzY2hlbWEiLCJ0aW1lc3RhbXBSZXF1ZXN0cyIsImI2NCIsImVuY29kZSIsImlwdjYiLCJXZWJTb2NrZXQiLCJNb3pXZWJTb2NrZXQiLCJ1c2luZ0Jyb3dzZXJXZWJTb2NrZXQiLCJkZWZhdWx0QmluYXJ5VHlwZSIsImlzUmVhY3ROYXRpdmUiLCJwcm9kdWN0IiwiV1MiLCJjaGVjayIsInByb3RvY29scyIsImhlYWRlcnMiLCJ3cyIsImFkZEV2ZW50TGlzdGVuZXJzIiwib25vcGVuIiwiX3NvY2tldCIsIm9ubWVzc2FnZSIsImV2IiwibGFzdFBhY2tldCIsImVuY29kZVBhY2tldCIsIkJ1ZmZlciIsImJ5dGVMZW5ndGgiLCJhdHRyIiwicmVkdWNlIiwiYWNjIiwiayIsImhhc0NPUlMiLCJjb25jYXQiLCJQQUNLRVRfVFlQRVMiLCJQQUNLRVRfVFlQRVNfUkVWRVJTRSIsIkVSUk9SX1BBQ0tFVCIsIndpdGhOYXRpdmVBcnJheUJ1ZmZlciIsImJhc2U2NGRlY29kZXIiLCJlbmNvZGVkUGFja2V0IiwibWFwQmluYXJ5IiwiY2hhckF0IiwiZGVjb2RlQmFzZTY0UGFja2V0IiwicGFja2V0VHlwZSIsImRlY29kZWQiLCJCbG9iIiwid2l0aE5hdGl2ZUJsb2IiLCJpc1ZpZXciLCJidWZmZXIiLCJlbmNvZGVCbG9iQXNCYXNlNjQiLCJmaWxlUmVhZGVyIiwiRmlsZVJlYWRlciIsImNvbnRlbnQiLCJyZXN1bHQiLCJyZWFkQXNEYXRhVVJMIiwiU0VQQVJBVE9SIiwiZnJvbUNoYXJDb2RlIiwiZW5jb2RlZFBhY2tldHMiLCJjb3VudCIsImVuY29kZWRQYXlsb2FkIiwiZGVjb2RlZFBhY2tldCIsIk4iLCJNIiwiTUFUUklYX0EiLCJVUFBFUl9NQVNLIiwiTE9XRVJfTUFTSyIsIm10IiwibXRpIiwiY29uc3RydWN0b3IiLCJpbml0X2J5X2FycmF5IiwiaW5pdF9zZWVkIiwiaW5pdF9rZXkiLCJrZXlfbGVuZ3RoIiwicmFuZG9tX2ludCIsIm1hZzAxIiwia2siLCJyYW5kb21faW50MzEiLCJyYW5kb21faW5jbCIsInJhbmRvbV9leGNsIiwicmFuZG9tX2xvbmciLCJlbmNvZGVVUklDb21wb25lbnQiLCJxcyIsInFyeSIsInBhaXJzIiwicGFpciIsImRlY29kZVVSSUNvbXBvbmVudCIsInJlIiwicGFydHMiLCJzb3VyY2UiLCJhdXRob3JpdHkiLCJpcHY2dXJpIiwicGF0aE5hbWVzIiwicXVlcnlLZXkiLCJyZWd4IiwiJDAiLCIkMiIsIkFSR19MRU5HVEgiLCJ6IiwiU0VHTUVOVF9QQVRURVJOIiwiTlVNQkVSIiwibnVtYmVycyIsImNvbW1hbmQiLCJ0aGVBcmdzIiwicGFyc2VWYWx1ZXMiLCJ0aGVDb21tYW5kIiwiaW1nRGF0YSIsIm54IiwibnkiLCJzdXBwb3J0c1N2Z1BhdGhBcmd1bWVudCIsIlBhdGgyRCIsInBhcnNlUGF0aCIsInN0YXJ0UG9pbnQiLCJjdXJyZW50UG9pbnQiLCJzZWdtZW50cyIsInBhdGhUeXBlIiwiY3B4IiwiY3B5IiwicWNweCIsInFjcHkiLCJyeCIsInJ5IiwiYW5nbGUiLCJsYXJnZUFyY0ZsYWciLCJzd2VlcEZsYWciLCJlbmRQb2ludCIsIm1pZFBvaW50Iiwicm90YXRlUG9pbnQiLCJsYW1iZGEiLCJjZW50ZXJQb2ludCIsInQxIiwidDIiLCJzY2FsZVBvaW50Iiwic3RhcnRBbmdsZSIsImVuZEFuZ2xlIiwidHJhbnNsYXRlUG9pbnQiLCJjY3ciLCJjRmlsbCIsImNTdHJva2UiLCJmaWxsUnVsZSIsImJ1aWxkUGF0aCIsImNJc1BvaW50SW5QYXRoIiwicGF0aDJkUG9seWZpbGwiLCJ1cmxfMSIsIm1hbmFnZXJfMSIsImxvb2t1cCIsImNhY2hlIiwicGFyc2VkIiwidXJsIiwic2FtZU5hbWVzcGFjZSIsIm5ld0Nvbm5lY3Rpb24iLCJmb3JjZU5ldyIsIm11bHRpcGxleCIsImlvIiwiTWFuYWdlciIsInNvY2tldF9pb19wYXJzZXJfMSIsIm1hbmFnZXJfMiIsInNvY2tldF8xIiwiZWlvIiwib25fMSIsInR5cGVkX2V2ZW50c18xIiwibnNwcyIsInN1YnMiLCJyZWNvbm5lY3Rpb24iLCJyZWNvbm5lY3Rpb25BdHRlbXB0cyIsIkluZmluaXR5IiwicmVjb25uZWN0aW9uRGVsYXkiLCJyZWNvbm5lY3Rpb25EZWxheU1heCIsInJhbmRvbWl6YXRpb25GYWN0b3IiLCJiYWNrb2ZmIiwiX3JlYWR5U3RhdGUiLCJfcGFyc2VyIiwiZW5jb2RlciIsIkVuY29kZXIiLCJkZWNvZGVyIiwiRGVjb2RlciIsIl9hdXRvQ29ubmVjdCIsImF1dG9Db25uZWN0IiwiX3JlY29ubmVjdGlvbiIsIl9yZWNvbm5lY3Rpb25BdHRlbXB0cyIsIl9hIiwiX3JlY29ubmVjdGlvbkRlbGF5IiwiX3JhbmRvbWl6YXRpb25GYWN0b3IiLCJfcmVjb25uZWN0aW9uRGVsYXlNYXgiLCJfdGltZW91dCIsIl9yZWNvbm5lY3RpbmciLCJyZWNvbm5lY3QiLCJlbmdpbmUiLCJza2lwUmVjb25uZWN0Iiwib3BlblN1YkRlc3Ryb3kiLCJlcnJvclN1YiIsImVtaXRSZXNlcnZlZCIsIm1heWJlUmVjb25uZWN0T25PcGVuIiwic3ViRGVzdHJveSIsIm9ucGluZyIsIm9uZGF0YSIsIm9uZGVjb2RlZCIsImFkZCIsIm5zcCIsImFjdGl2ZSIsIl9jbG9zZSIsIm9ucmVjb25uZWN0IiwiYXR0ZW1wdCIsIlN0cmljdEV2ZW50RW1pdHRlciIsIlJFU0VSVkVEX0VWRU5UUyIsImZyZWV6ZSIsImNvbm5lY3QiLCJjb25uZWN0X2Vycm9yIiwiZGlzY29ubmVjdCIsImRpc2Nvbm5lY3RpbmciLCJuZXdMaXN0ZW5lciIsInJlY2VpdmVCdWZmZXIiLCJzZW5kQnVmZmVyIiwiaWRzIiwiYWNrcyIsImZsYWdzIiwiY29ubmVjdGVkIiwiZGlzY29ubmVjdGVkIiwiYXV0aCIsIm9ucGFja2V0Iiwic3ViRXZlbnRzIiwiUGFja2V0VHlwZSIsIkVWRU5UIiwicG9wIiwiaXNUcmFuc3BvcnRXcml0YWJsZSIsImRpc2NhcmRQYWNrZXQiLCJ2b2xhdGlsZSIsIl9wYWNrZXQiLCJDT05ORUNUIiwib25jb25uZWN0Iiwib25ldmVudCIsIkJJTkFSWV9FVkVOVCIsIkFDSyIsIm9uYWNrIiwiQklOQVJZX0FDSyIsIkRJU0NPTk5FQ1QiLCJvbmRpc2Nvbm5lY3QiLCJDT05ORUNUX0VSUk9SIiwiYWNrIiwiZW1pdEV2ZW50IiwiX2FueUxpc3RlbmVycyIsImxpc3RlbmVyIiwic2VudCIsImVtaXRCdWZmZXJlZCIsImxvYyIsImhyZWYiLCJpc19iaW5hcnlfMSIsImRlY29uc3RydWN0UGFja2V0IiwiYnVmZmVycyIsInBhY2tldERhdGEiLCJwYWNrIiwiX2RlY29uc3RydWN0UGFja2V0IiwiYXR0YWNobWVudHMiLCJpc0JpbmFyeSIsInBsYWNlaG9sZGVyIiwiX3BsYWNlaG9sZGVyIiwibnVtIiwibmV3RGF0YSIsInJlY29uc3RydWN0UGFja2V0IiwiX3JlY29uc3RydWN0UGFja2V0IiwiYmluYXJ5XzEiLCJoYXNCaW5hcnkiLCJlbmNvZGVBc0JpbmFyeSIsImVuY29kZUFzU3RyaW5nIiwiZGVjb25zdHJ1Y3Rpb24iLCJkZWNvZGVTdHJpbmciLCJyZWNvbnN0cnVjdG9yIiwiQmluYXJ5UmVjb25zdHJ1Y3RvciIsInRha2VCaW5hcnlEYXRhIiwic3RhcnQiLCJidWYiLCJuZXh0IiwicGF5bG9hZCIsInRyeVBhcnNlIiwiaXNQYXlsb2FkVmFsaWQiLCJmaW5pc2hlZFJlY29uc3RydWN0aW9uIiwicmVjb25QYWNrIiwiYmluRGF0YSIsIndpdGhOYXRpdmVGaWxlIiwiRmlsZSIsInRvSlNPTiIsImFscGhhYmV0IiwiZW5jb2RlZCIsIm5vdyIsImluaXRVSSIsImdhbWVDcmVhdGVkIiwiam9pbmVkIiwibmFtZUNvbmZpcm1lZCIsImdhbWVTdGFydGVkIiwiY3JlYXRlR2FtZUJ0biIsInNob3dKb2luR2FtZVByb21wdEJ0biIsImNvbmZpcm1Kb2luR2FtZUJ0biIsInJvb21Db2RlSW5wdXQiLCJyb29tQ29kZURpc3BsYXkiLCJuYW1lSW5wdXQiLCJuYW1lQ29uZmlybSIsImxlYXZlV2FpdGluZ0J0biIsImxlYXZlR2FtZVN0YXJ0QWxlcnQiLCJnYW1lU3RhcnQiLCJpbml0VHJpZ2dlciIsImluaXRVSVByb21pc2UiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaW5uZXJIVE1MIiwicGFyZW50UG9wb3V0cyIsInRvZ2dsZVBvcG91dCIsImZsYWciLCJjb25maXJtTmFtZSIsIm5ld0dhbWUiLCJyb29tQ29kZSIsImNvbmZpcm1Kb2luR2FtZSIsInBsYXllck51bWJlciIsInBsYXllck5hbWUiLCJob3N0TmFtZSIsImNoYWxsZW5nZXIiLCJwb3BvdXQiLCJyZW1vdmUiLCJoaWRlSW5pdGlhbFNjcmVlbiIsInRvZ2dsZUhpZGVPbkFjdGlvbiIsInRvZ2dsZVNob3dPbkFjdGlvbiIsInN0YXJ0Q291bnRpbmciLCJnYyIsInRpbWVJbnRlcnZhbCIsInVpSW5pdFByb21pc2UiLCJnYW1lQ29udG9sbGVyIiwiZHJhd0dhbWUiLCJhbGVydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLE9BQU8sR0FBRztBQUNkQyxTQUFPLEVBQUU7QUFESyxDQUFoQjtBQUtPLElBQU1DLE1BQWI7QUFBQTs7QUFBQTs7QUFDRSxrQkFBWUMsR0FBWixFQUFpQkMsYUFBakIsRUFBZ0NDLE1BQWhDLEVBQXdDO0FBQUE7O0FBQUE7O0FBQ3RDLDhCQUFNRixHQUFOLEVBQVdDLGFBQVgsRUFBMEJDLE1BQTFCO0FBQ0EsVUFBS0MsT0FBTCxHQUFlLEVBQWY7O0FBQ0EsVUFBS0MsSUFBTDs7QUFIc0M7QUFJdkM7O0FBTEg7QUFBQTtBQUFBLFdBT0UsZ0JBQU87QUFDTCxXQUFLRCxPQUFMLEdBQWUsSUFBSUUscURBQUosQ0FBYyxLQUFLQyxHQUFuQixFQUF3QixLQUFLQyxHQUE3QixDQUFmO0FBQ0EsV0FBS0MsS0FBTCxHQUFhLEtBQUtDLFFBQUwsRUFBYjtBQUVEO0FBWEg7QUFBQTtBQUFBLFdBYUUsd0JBQWU7QUFDYixXQUFLQyxrQkFBTCxHQUEwQixZQUFNLENBQy9CLENBREQ7QUFFRDtBQWhCSDtBQUFBO0FBQUEsV0FrQkUsc0JBQWE7QUFDWCxVQUFJUCxPQUFPLEdBQUcsS0FBS1EsbUJBQUwsRUFBZDtBQUNBLGFBQU9SLE9BQVA7QUFDRDtBQXJCSDtBQUFBO0FBQUEsV0F1QkUsb0JBQVc7QUFDVCxVQUFJSyxLQUFLLEdBQUcsS0FBS0csbUJBQUwsRUFBWjtBQUNBSCxXQUFLLENBQUNJLGFBQU4sQ0FBb0IsR0FBcEIsRUFBeUIsSUFBekI7QUFDQSxhQUFPSixLQUFQO0FBQ0Q7QUEzQkg7QUFBQTtBQUFBLFdBNkJFLHVCQUFjO0FBQ1osYUFBTyxLQUFLTCxPQUFMLENBQWFVLE9BQWIsQ0FBcUIsS0FBckIsRUFBNEIsRUFBNUIsRUFBZ0MsS0FBS1gsTUFBTCxDQUFZSixPQUE1QyxDQUFQO0FBQ0Q7QUEvQkg7QUFBQTtBQUFBLFdBaUNFLG9CQUFXO0FBQUE7O0FBQ1QsVUFBSWdCLGtCQUFrQixHQUFHLEtBQUtDLFdBQUwsRUFBekI7QUFDQUQsd0JBQWtCLENBQ2ZFLElBREgsQ0FDUSxZQUFNO0FBQ1YsZUFBTyxNQUFJLENBQUNDLFNBQUwsRUFBUDtBQUNELE9BSEgsRUFHS0QsSUFITCxDQUdVLFlBQU0sQ0FDYixDQUpIO0FBS0Q7QUF4Q0g7QUFBQTtBQUFBLFdBMENFLHFCQUE4RDtBQUFBOztBQUFBLFVBQXBERSxhQUFvRCx1RUFBcEMsQ0FBb0M7QUFBQSxVQUFqQ0MsU0FBaUMsdUVBQXJCLEVBQXFCO0FBQUEsVUFBakJDLEtBQWlCLHVFQUFULE9BQVM7QUFDNUQsVUFBSUMsY0FBSjtBQUNBLFVBQUlDLGdCQUFnQixHQUFHLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxHQUFELEVBQU1DLEdBQU4sRUFBYztBQUMvQ0osc0JBQWMsR0FBR0csR0FBakI7QUFDRCxPQUZzQixDQUF2QjtBQUdBLFVBQUlFLFFBQVEsR0FBRyxDQUNiO0FBQUVDLFNBQUMsRUFBRSxDQUFMO0FBQVFDLFNBQUMsRUFBRTtBQUFYLE9BRGEsRUFFYjtBQUFFRCxTQUFDLEVBQUUsS0FBS25CLEtBQUwsQ0FBV0QsR0FBWCxDQUFlc0IsS0FBcEI7QUFBMkJELFNBQUMsRUFBRTtBQUE5QixPQUZhLEVBR2I7QUFBRUQsU0FBQyxFQUFFLEtBQUtuQixLQUFMLENBQVdELEdBQVgsQ0FBZXNCLEtBQXBCO0FBQTJCRCxTQUFDLEVBQUUsS0FBS3BCLEtBQUwsQ0FBV0QsR0FBWCxDQUFldUI7QUFBN0MsT0FIYSxFQUliO0FBQUVILFNBQUMsRUFBRSxDQUFMO0FBQVFDLFNBQUMsRUFBRSxLQUFLcEIsS0FBTCxDQUFXRCxHQUFYLENBQWV1QjtBQUExQixPQUphLEVBS2I7QUFBRUgsU0FBQyxFQUFFLENBQUw7QUFBUUMsU0FBQyxFQUFFO0FBQVgsT0FMYSxDQUFmO0FBUUEsVUFBSUcsY0FBYyxHQUFHLEtBQUt4QixHQUFMLENBQVNzQixLQUFULEdBQWlCLEtBQUt0QixHQUFMLENBQVN1QixNQUEvQzs7QUFDQSxVQUFJQyxjQUFjLElBQUksQ0FBdEIsRUFBeUI7QUFDdkIsWUFBSUMsVUFBVSxHQUFHLEtBQUt6QixHQUFMLENBQVNzQixLQUFULElBQWtCLE1BQU1YLGFBQWEsR0FBRyxDQUF4QyxJQUE2QyxHQUE5RDtBQUNBLFlBQUllLFdBQVcsR0FBR0QsVUFBVSxHQUFHLENBQS9CO0FBQ0EsWUFBSUUsV0FBVyxHQUFHLEtBQUszQixHQUFMLENBQVNzQixLQUFULEdBQWlCWCxhQUFqQixHQUFpQyxHQUFuRDtBQUNBLGFBQUtaLEdBQUwsQ0FBUzZCLFNBQVQsQ0FBbUJELFdBQW5CLEVBQWdDLEtBQUszQixHQUFMLENBQVN1QixNQUFULEdBQWtCLEdBQWxCLEdBQXdCRyxXQUFXLEdBQUcsR0FBdEU7QUFDQSxhQUFLM0IsR0FBTCxDQUFTOEIsTUFBVCxDQUFnQixDQUFDQyxJQUFJLENBQUNDLEVBQU4sR0FBVyxDQUEzQjtBQUNELE9BTkQsTUFPSyxDQUVKOztBQUVELFVBQUlDLFFBQVEsR0FBR0MsV0FBVyxDQUFDLFlBQU07QUFDL0IsY0FBSSxDQUFDbEMsR0FBTCxDQUFTbUMsU0FBVCxDQUFtQixNQUFJLENBQUNqQyxLQUFMLENBQVdELEdBQTlCLEVBQW1DLENBQW5DLEVBQXNDLENBQXRDLEVBQXlDLE1BQUksQ0FBQ0EsR0FBTCxDQUFTc0IsS0FBVCxJQUFrQixDQUFDLE1BQU0sSUFBSVgsYUFBWCxJQUE0QixHQUE5QyxJQUFxRCxDQUE5RixFQUFpRyxNQUFJLENBQUNYLEdBQUwsQ0FBU3NCLEtBQVQsSUFBa0IsQ0FBQyxNQUFNLElBQUlYLGFBQVgsSUFBNEIsR0FBOUMsQ0FBakc7QUFDRCxPQUZ5QixFQUV2QixFQUZ1QixDQUExQjtBQUlBLFVBQUl3Qiw0QkFBNEIsR0FBRyxJQUFJQywyREFBSixDQUFvQixLQUFLbkMsS0FBTCxDQUFXRixHQUEvQixFQUFvQ29CLFFBQXBDLEVBQThDYixPQUE5QyxDQUFzRE0sU0FBdEQsRUFBaUVDLEtBQWpFLENBQW5DO0FBQ0FzQixrQ0FBNEIsQ0FBQzFCLElBQTdCLENBQWtDLFlBQU07QUFDdEMsWUFBSTRCLE9BQU8sR0FBR0MsVUFBVSxDQUFDLFlBQU07QUFDN0JDLHVCQUFhLENBQUNQLFFBQUQsQ0FBYjtBQUNBUSxzQkFBWSxDQUFDSCxPQUFELENBQVo7QUFDQXZCLHdCQUFjO0FBQ2YsU0FKdUIsRUFJckIsR0FKcUIsQ0FBeEI7QUFLRCxPQU5EO0FBVUEsYUFBT0MsZ0JBQVA7QUFDRDtBQW5GSDtBQUFBO0FBQUEsV0FxRkUsZ0JBQU8sQ0FHTjtBQXhGSDs7QUFBQTtBQUFBLEVBQTRCMEIscURBQTVCO0FBMkZPLFNBQVNDLFdBQVQsR0FBdUI7QUFDNUIsTUFBSUMsSUFBSSxHQUFHQywrQ0FBSSxDQUFDcEQsTUFBRCxFQUFTRixPQUFULEVBQWtCLEVBQWxCLEVBQXNCdUQsUUFBUSxDQUFDQyxJQUEvQixDQUFmO0FBQ0EsU0FBT0gsSUFBUDtBQUNELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RHRDtBQUNBO0FBRU8sSUFBTTdDLFNBQWI7QUFDRSxxQkFBWUMsR0FBWixFQUFpQkMsR0FBakIsRUFBc0I7QUFBQTs7QUFDcEIsU0FBSytDLG1CQUFMLEdBQTJCLENBQ3pCO0FBQUVDLFVBQUksRUFBRSxJQUFSO0FBQWM1QixPQUFDLEVBQUUsQ0FBakI7QUFBb0JDLE9BQUMsRUFBRTtBQUF2QixLQUR5QixFQUV6QjtBQUFFMkIsVUFBSSxFQUFFLElBQVI7QUFBYzVCLE9BQUMsRUFBRSxDQUFqQjtBQUFvQkMsT0FBQyxFQUFFO0FBQXZCLEtBRnlCLEVBR3pCO0FBQUUyQixVQUFJLEVBQUUsSUFBUjtBQUFjNUIsT0FBQyxFQUFFLENBQWpCO0FBQW9CQyxPQUFDLEVBQUU7QUFBdkIsS0FIeUIsRUFJekI7QUFBRTJCLFVBQUksRUFBRSxJQUFSO0FBQWM1QixPQUFDLEVBQUUsQ0FBakI7QUFBb0JDLE9BQUMsRUFBRTtBQUF2QixLQUp5QixDQUEzQjtBQU1BLFNBQUs0QixZQUFMLEdBQW9CLENBQ2xCO0FBQUVELFVBQUksRUFBRSxJQUFSO0FBQWM1QixPQUFDLEVBQUUsQ0FBakI7QUFBb0JDLE9BQUMsRUFBRTtBQUF2QixLQURrQixFQUVsQjtBQUFFMkIsVUFBSSxFQUFFLElBQVI7QUFBYzVCLE9BQUMsRUFBRSxDQUFqQjtBQUFvQkMsT0FBQyxFQUFFO0FBQXZCLEtBRmtCLEVBR2xCO0FBQUUyQixVQUFJLEVBQUUsSUFBUjtBQUFjNUIsT0FBQyxFQUFFLENBQWpCO0FBQW9CQyxPQUFDLEVBQUU7QUFBdkIsS0FIa0IsRUFJbEI7QUFBRTJCLFVBQUksRUFBRSxJQUFSO0FBQWM1QixPQUFDLEVBQUUsQ0FBakI7QUFBb0JDLE9BQUMsRUFBRTtBQUF2QixLQUprQixDQUFwQjtBQU1BLFNBQUt0QixHQUFMLEdBQVdBLEdBQVg7QUFDQSxTQUFLQyxHQUFMLEdBQVdBLEdBQVg7QUFDQSxTQUFLa0QsbUJBQUw7QUFDQSxTQUFLQyxLQUFMLEdBQWEsQ0FBYjtBQUNBLFNBQUtDLGNBQUwsR0FBc0IsQ0FBdEI7QUFDRDs7QUFuQkg7QUFBQTtBQUFBLFdBb0JFLGdCQUFPLENBRU47QUF0Qkg7QUFBQTtBQUFBLFdBdUJFLDBCQUFpQkMsU0FBakIsRUFBNEJGLEtBQTVCLEVBQW1DRyxVQUFuQyxFQUErQ0MsV0FBL0MsRUFBNEQ7QUFDMUQsVUFBSUMsWUFBWSxHQUFHSCxTQUFTLEdBQUcsS0FBS0osWUFBUixHQUF1QixLQUFLRixtQkFBeEQ7QUFFQSxVQUFJVSxRQUFRLEdBQUc7QUFDYlQsWUFBSSxFQUFFUSxZQUFZLENBQUNMLEtBQUQsQ0FBWixDQUFvQkgsSUFEYjtBQUViNUIsU0FBQyxFQUFFb0MsWUFBWSxDQUFDTCxLQUFELENBQVosQ0FBb0IvQixDQUFwQixHQUF3QmtDLFVBQXhCLEdBQXFDLEtBQUtGLGNBRmhDO0FBR2IvQixTQUFDLEVBQUVtQyxZQUFZLENBQUNMLEtBQUQsQ0FBWixDQUFvQjlCLENBQXBCLEdBQXdCa0MsV0FBeEIsR0FBc0MsS0FBS0g7QUFIakMsT0FBZjtBQUtBLGFBQU9LLFFBQVA7QUFDRDtBQWhDSDtBQUFBO0FBQUEsV0FpQ0UsbUJBQW9FO0FBQUE7O0FBQUEsVUFBNURKLFNBQTRELHVFQUFoRCxLQUFnRDtBQUFBLFVBQXpDekMsU0FBeUMsdUVBQTdCLEVBQTZCO0FBQUEsVUFBekJDLEtBQXlCLHVFQUFqQixlQUFpQjtBQUNsRSxVQUFJNkMsS0FBSyxHQUFHLElBQVo7QUFDQSxVQUFJQyxnQkFBZ0IsR0FBRyxJQUFJM0MsT0FBSixDQUFZLFVBQUNDLEdBQUQsRUFBTUMsR0FBTixFQUFjO0FBQy9DLGFBQUksQ0FBQ2dDLG1CQUFMLEdBQTJCakMsR0FBM0I7QUFDRCxPQUZzQixDQUF2QjtBQUdBLFVBQUllLFFBQVEsR0FBR0MsV0FBVyxDQUFDLFlBQU07QUFDL0J5QixhQUFLLENBQUNFLG9CQUFOLENBQ0VoRCxTQURGLEVBRUUsS0FBSSxDQUFDWixHQUFMLENBQVNzQixLQUFULEdBQWlCLElBQUlvQyxLQUFLLENBQUNOLGNBRjdCLEVBR0UsS0FBSSxDQUFDcEQsR0FBTCxDQUFTdUIsTUFBVCxHQUFrQixJQUFJbUMsS0FBSyxDQUFDTixjQUg5QixFQUlFTSxLQUFLLENBQUNHLGdCQUFOLENBQXVCUixTQUF2QixFQUFrQ0ssS0FBSyxDQUFDUCxLQUF4QyxFQUErQyxLQUFJLENBQUNuRCxHQUFMLENBQVNzQixLQUFULEdBQWlCLElBQUlvQyxLQUFLLENBQUNOLGNBQTFFLEVBQTBGLEtBQUksQ0FBQ3BELEdBQUwsQ0FBU3VCLE1BQVQsR0FBa0IsSUFBSW1DLEtBQUssQ0FBQ04sY0FBdEgsQ0FKRixFQUtFdkMsS0FMRixFQU1Fd0MsU0FORjs7QUFRQSxZQUFJLEtBQUksQ0FBQ3JELEdBQUwsQ0FBU3NCLEtBQVQsR0FBaUIsSUFBSW9DLEtBQUssQ0FBQ04sY0FBM0IsR0FBNEMsQ0FBNUMsSUFBaUQsS0FBSSxDQUFDcEQsR0FBTCxDQUFTdUIsTUFBVCxHQUFrQixJQUFJbUMsS0FBSyxDQUFDTixjQUE1QixHQUE2QyxDQUFsRyxFQUFxRztBQUVuRyxjQUFJTSxLQUFLLENBQUNQLEtBQU4sR0FBYyxDQUFsQixFQUFxQjtBQUNuQk8saUJBQUssQ0FBQ1AsS0FBTjtBQUNELFdBRkQsTUFHSztBQUNITyxpQkFBSyxDQUFDUCxLQUFOLEdBQWMsQ0FBZDtBQUNBTyxpQkFBSyxDQUFDTixjQUFOLElBQXdCeEMsU0FBeEI7QUFFRDtBQUVGLFNBWEQsTUFZSztBQUNIMkIsdUJBQWEsQ0FBQ1AsUUFBRCxDQUFiOztBQUNBLGVBQUksQ0FBQ2tCLG1CQUFMO0FBQ0Q7QUFFRixPQTFCeUIsRUEwQnZCLEVBMUJ1QixDQUExQjtBQTRCQSxhQUFPUyxnQkFBUDtBQUNEO0FBbkVIO0FBQUE7QUFBQSxXQW9FRSw4QkFBcUIvQyxTQUFyQixFQUFnQ1UsS0FBaEMsRUFBdUNDLE1BQXZDLEVBQStDdUMsS0FBL0MsRUFBc0RqRCxLQUF0RCxFQUE2RHdDLFNBQTdELEVBQXdFO0FBQ3RFLFdBQUt0RCxHQUFMLENBQVNnRSxJQUFUO0FBQ0EsV0FBS2hFLEdBQUwsQ0FBU2lFLFNBQVQ7QUFDQSxXQUFLakUsR0FBTCxDQUFTa0UsU0FBVCxHQUFxQnBELEtBQXJCOztBQUNBLFVBQUlpRCxLQUFLLENBQUNkLElBQU4sS0FBZSxJQUFuQixFQUF5QjtBQUN2QixhQUFLa0Isb0JBQUwsQ0FBMEJ0RCxTQUExQixFQUFxQ1UsS0FBckMsRUFBNENDLE1BQTVDLEVBQW9EdUMsS0FBcEQsRUFBMkRULFNBQTNEO0FBQ0QsT0FGRCxNQUdLLElBQUlTLEtBQUssQ0FBQ2QsSUFBTixLQUFlLElBQW5CLEVBQXlCO0FBQzVCLGFBQUttQixvQkFBTCxDQUEwQnZELFNBQTFCLEVBQXFDVSxLQUFyQyxFQUE0Q0MsTUFBNUMsRUFBb0R1QyxLQUFwRCxFQUEyRFQsU0FBM0Q7QUFDRCxPQUZJLE1BR0EsSUFBSVMsS0FBSyxDQUFDZCxJQUFOLEtBQWUsSUFBbkIsRUFBeUI7QUFDNUIsYUFBS29CLG9CQUFMLENBQTBCeEQsU0FBMUIsRUFBcUNVLEtBQXJDLEVBQTRDQyxNQUE1QyxFQUFvRHVDLEtBQXBELEVBQTJEVCxTQUEzRDtBQUNELE9BRkksTUFHQSxJQUFJUyxLQUFLLENBQUNkLElBQU4sS0FBZSxJQUFuQixFQUF5QjtBQUM1QixhQUFLcUIsb0JBQUwsQ0FBMEJ6RCxTQUExQixFQUFxQ1UsS0FBckMsRUFBNENDLE1BQTVDLEVBQW9EdUMsS0FBcEQsRUFBMkRULFNBQTNEO0FBQ0Q7O0FBQ0QsV0FBS3RELEdBQUwsQ0FBU3VFLFNBQVQ7QUFDQSxXQUFLdkUsR0FBTCxDQUFTd0UsSUFBVDtBQUNBLFdBQUt4RSxHQUFMLENBQVN5RSxPQUFUO0FBQ0Q7QUF2Rkg7QUFBQTtBQUFBLFdBd0ZFLDhCQUFxQjVELFNBQXJCLEVBQWdDVSxLQUFoQyxFQUF1Q0MsTUFBdkMsRUFBK0N1QyxLQUEvQyxFQUFzRFQsU0FBdEQsRUFBaUU7QUFDL0QsV0FBS3RELEdBQUwsQ0FBUzBFLE1BQVQsQ0FBZ0JYLEtBQUssQ0FBQzFDLENBQXRCLEVBQXlCMEMsS0FBSyxDQUFDekMsQ0FBL0I7O0FBQ0EsVUFBSWdDLFNBQUosRUFBZTtBQUNiLFlBQUlxQixZQUFZLEdBQUdDLDREQUFpQixDQUFDLE1BQU1wRCxNQUFQLEVBQWUsTUFBTUEsTUFBckIsQ0FBcEM7QUFDQSxhQUFLeEIsR0FBTCxDQUFTNkUsTUFBVCxDQUFnQmQsS0FBSyxDQUFDMUMsQ0FBTixHQUFVRSxLQUExQixFQUFpQ3dDLEtBQUssQ0FBQ3pDLENBQXZDO0FBQ0EsYUFBS3RCLEdBQUwsQ0FBUzZFLE1BQVQsQ0FBZ0JkLEtBQUssQ0FBQzFDLENBQU4sR0FBVUUsS0FBMUIsRUFBaUN3QyxLQUFLLENBQUN6QyxDQUFOLEdBQVVxRCxZQUEzQztBQUNBLGFBQUszRSxHQUFMLENBQVM2RSxNQUFULENBQWdCZCxLQUFLLENBQUMxQyxDQUFOLEdBQVVFLEtBQVYsR0FBa0JWLFNBQWxDLEVBQTZDa0QsS0FBSyxDQUFDekMsQ0FBTixHQUFVcUQsWUFBdkQ7QUFDQSxhQUFLM0UsR0FBTCxDQUFTNkUsTUFBVCxDQUFnQmQsS0FBSyxDQUFDMUMsQ0FBTixHQUFVRSxLQUFWLEdBQWtCVixTQUFsQyxFQUE2Q2tELEtBQUssQ0FBQ3pDLENBQU4sR0FBVVQsU0FBdkQ7QUFDQSxhQUFLYixHQUFMLENBQVM2RSxNQUFULENBQWdCZCxLQUFLLENBQUMxQyxDQUF0QixFQUF5QjBDLEtBQUssQ0FBQ3pDLENBQU4sR0FBVVQsU0FBbkM7QUFDRCxPQVBELE1BUUs7QUFDSCxZQUFJaUUsV0FBVyxHQUFHRiw0REFBaUIsQ0FBQyxNQUFNckQsS0FBUCxFQUFjLE1BQU1BLEtBQXBCLENBQW5DO0FBQ0EsYUFBS3ZCLEdBQUwsQ0FBUzZFLE1BQVQsQ0FBZ0JkLEtBQUssQ0FBQzFDLENBQU4sR0FBVVIsU0FBMUIsRUFBcUNrRCxLQUFLLENBQUN6QyxDQUEzQztBQUNBLGFBQUt0QixHQUFMLENBQVM2RSxNQUFULENBQWdCZCxLQUFLLENBQUMxQyxDQUFOLEdBQVVSLFNBQTFCLEVBQXFDa0QsS0FBSyxDQUFDekMsQ0FBTixHQUFVRSxNQUFWLEdBQW1CWCxTQUF4RDtBQUNBLGFBQUtiLEdBQUwsQ0FBUzZFLE1BQVQsQ0FBZ0JkLEtBQUssQ0FBQzFDLENBQU4sR0FBVXlELFdBQTFCLEVBQXVDZixLQUFLLENBQUN6QyxDQUFOLEdBQVVFLE1BQVYsR0FBbUJYLFNBQTFEO0FBQ0EsYUFBS2IsR0FBTCxDQUFTNkUsTUFBVCxDQUFnQmQsS0FBSyxDQUFDMUMsQ0FBTixHQUFVeUQsV0FBMUIsRUFBdUNmLEtBQUssQ0FBQ3pDLENBQU4sR0FBVUUsTUFBakQ7QUFDQSxhQUFLeEIsR0FBTCxDQUFTNkUsTUFBVCxDQUFnQmQsS0FBSyxDQUFDMUMsQ0FBdEIsRUFBeUIwQyxLQUFLLENBQUN6QyxDQUFOLEdBQVVFLE1BQW5DO0FBQ0Q7QUFDRjtBQTFHSDtBQUFBO0FBQUEsV0EyR0UsOEJBQXFCWCxTQUFyQixFQUFnQ1UsS0FBaEMsRUFBdUNDLE1BQXZDLEVBQStDdUMsS0FBL0MsRUFBc0RULFNBQXRELEVBQWlFO0FBQy9ELFdBQUt0RCxHQUFMLENBQVMwRSxNQUFULENBQWdCWCxLQUFLLENBQUMxQyxDQUF0QixFQUF5QjBDLEtBQUssQ0FBQ3pDLENBQS9COztBQUNBLFVBQUlnQyxTQUFKLEVBQWU7QUFDYixZQUFJd0IsV0FBVyxHQUFHRiw0REFBaUIsQ0FBQyxNQUFNckQsS0FBUCxFQUFjLE1BQU1BLEtBQXBCLENBQW5DO0FBQ0EsYUFBS3ZCLEdBQUwsQ0FBUzZFLE1BQVQsQ0FBZ0JkLEtBQUssQ0FBQzFDLENBQU4sR0FBVVIsU0FBMUIsRUFBcUNrRCxLQUFLLENBQUN6QyxDQUEzQztBQUNBLGFBQUt0QixHQUFMLENBQVM2RSxNQUFULENBQWdCZCxLQUFLLENBQUMxQyxDQUFOLEdBQVVSLFNBQTFCLEVBQXFDa0QsS0FBSyxDQUFDekMsQ0FBTixHQUFVRSxNQUFWLEdBQW1CWCxTQUF4RDtBQUNBLGFBQUtiLEdBQUwsQ0FBUzZFLE1BQVQsQ0FBZ0JkLEtBQUssQ0FBQzFDLENBQU4sR0FBVXlELFdBQTFCLEVBQXVDZixLQUFLLENBQUN6QyxDQUFOLEdBQVVFLE1BQVYsR0FBbUJYLFNBQTFEO0FBQ0EsYUFBS2IsR0FBTCxDQUFTNkUsTUFBVCxDQUFnQmQsS0FBSyxDQUFDMUMsQ0FBTixHQUFVeUQsV0FBMUIsRUFBdUNmLEtBQUssQ0FBQ3pDLENBQU4sR0FBVUUsTUFBakQ7QUFDQSxhQUFLeEIsR0FBTCxDQUFTNkUsTUFBVCxDQUFnQmQsS0FBSyxDQUFDMUMsQ0FBdEIsRUFBeUIwQyxLQUFLLENBQUN6QyxDQUFOLEdBQVVFLE1BQW5DO0FBQ0QsT0FQRCxNQVFLO0FBQ0gsWUFBSW1ELFlBQVksR0FBR0MsNERBQWlCLENBQUMsTUFBTXBELE1BQVAsRUFBZSxNQUFNQSxNQUFyQixDQUFwQztBQUNBLGFBQUt4QixHQUFMLENBQVM2RSxNQUFULENBQWdCZCxLQUFLLENBQUMxQyxDQUF0QixFQUF5QjBDLEtBQUssQ0FBQ3pDLENBQU4sR0FBVVQsU0FBbkM7QUFDQSxhQUFLYixHQUFMLENBQVM2RSxNQUFULENBQWdCZCxLQUFLLENBQUMxQyxDQUFOLEdBQVVFLEtBQVYsR0FBa0JWLFNBQWxDLEVBQTZDa0QsS0FBSyxDQUFDekMsQ0FBTixHQUFVVCxTQUF2RDtBQUNBLGFBQUtiLEdBQUwsQ0FBUzZFLE1BQVQsQ0FBZ0JkLEtBQUssQ0FBQzFDLENBQU4sR0FBVUUsS0FBVixHQUFrQlYsU0FBbEMsRUFBNkNrRCxLQUFLLENBQUN6QyxDQUFOLEdBQVVxRCxZQUF2RDtBQUNBLGFBQUszRSxHQUFMLENBQVM2RSxNQUFULENBQWdCZCxLQUFLLENBQUMxQyxDQUFOLEdBQVVFLEtBQTFCLEVBQWlDd0MsS0FBSyxDQUFDekMsQ0FBTixHQUFVcUQsWUFBM0M7QUFDQSxhQUFLM0UsR0FBTCxDQUFTNkUsTUFBVCxDQUFnQmQsS0FBSyxDQUFDMUMsQ0FBTixHQUFVRSxLQUExQixFQUFpQ3dDLEtBQUssQ0FBQ3pDLENBQXZDO0FBQ0Q7QUFDRjtBQTdISDtBQUFBO0FBQUEsV0E4SEUsOEJBQXFCVCxTQUFyQixFQUFnQ1UsS0FBaEMsRUFBdUNDLE1BQXZDLEVBQStDdUMsS0FBL0MsRUFBc0RULFNBQXRELEVBQWlFO0FBQy9ELFdBQUt0RCxHQUFMLENBQVMwRSxNQUFULENBQWdCWCxLQUFLLENBQUMxQyxDQUF0QixFQUF5QjBDLEtBQUssQ0FBQ3pDLENBQS9COztBQUNBLFVBQUlnQyxTQUFKLEVBQWU7QUFDYixZQUFJcUIsWUFBWSxHQUFHQyw0REFBaUIsQ0FBQyxNQUFNcEQsTUFBUCxFQUFlLE1BQU1BLE1BQXJCLENBQXBDO0FBQ0EsYUFBS3hCLEdBQUwsQ0FBUzZFLE1BQVQsQ0FBZ0JkLEtBQUssQ0FBQzFDLENBQXRCLEVBQXlCMEMsS0FBSyxDQUFDekMsQ0FBTixHQUFVVCxTQUFuQztBQUNBLGFBQUtiLEdBQUwsQ0FBUzZFLE1BQVQsQ0FBZ0JkLEtBQUssQ0FBQzFDLENBQU4sR0FBVUUsS0FBVixHQUFrQlYsU0FBbEMsRUFBNkNrRCxLQUFLLENBQUN6QyxDQUFOLEdBQVVULFNBQXZEO0FBQ0EsYUFBS2IsR0FBTCxDQUFTNkUsTUFBVCxDQUFnQmQsS0FBSyxDQUFDMUMsQ0FBTixHQUFVRSxLQUFWLEdBQWtCVixTQUFsQyxFQUE2Q2tELEtBQUssQ0FBQ3pDLENBQU4sR0FBVXFELFlBQXZEO0FBQ0EsYUFBSzNFLEdBQUwsQ0FBUzZFLE1BQVQsQ0FBZ0JkLEtBQUssQ0FBQzFDLENBQU4sR0FBVUUsS0FBMUIsRUFBaUN3QyxLQUFLLENBQUN6QyxDQUFOLEdBQVVxRCxZQUEzQztBQUNBLGFBQUszRSxHQUFMLENBQVM2RSxNQUFULENBQWdCZCxLQUFLLENBQUMxQyxDQUFOLEdBQVVFLEtBQTFCLEVBQWlDd0MsS0FBSyxDQUFDekMsQ0FBdkM7QUFDRCxPQVBELE1BUUs7QUFDSCxZQUFJd0QsV0FBVyxHQUFHRiw0REFBaUIsQ0FBQyxNQUFNckQsS0FBUCxFQUFjLE1BQU1BLEtBQXBCLENBQW5DO0FBQ0EsYUFBS3ZCLEdBQUwsQ0FBUzZFLE1BQVQsQ0FBZ0JkLEtBQUssQ0FBQzFDLENBQU4sR0FBVVIsU0FBMUIsRUFBcUNrRCxLQUFLLENBQUN6QyxDQUEzQztBQUNBLGFBQUt0QixHQUFMLENBQVM2RSxNQUFULENBQWdCZCxLQUFLLENBQUMxQyxDQUFOLEdBQVVSLFNBQTFCLEVBQXFDa0QsS0FBSyxDQUFDekMsQ0FBTixHQUFVRSxNQUFWLEdBQW1CWCxTQUF4RDtBQUNBLGFBQUtiLEdBQUwsQ0FBUzZFLE1BQVQsQ0FBZ0JkLEtBQUssQ0FBQzFDLENBQU4sR0FBVXlELFdBQTFCLEVBQXVDZixLQUFLLENBQUN6QyxDQUFOLEdBQVVFLE1BQVYsR0FBbUJYLFNBQTFEO0FBQ0EsYUFBS2IsR0FBTCxDQUFTNkUsTUFBVCxDQUFnQmQsS0FBSyxDQUFDMUMsQ0FBTixHQUFVeUQsV0FBMUIsRUFBdUNmLEtBQUssQ0FBQ3pDLENBQU4sR0FBVUUsTUFBakQ7QUFDQSxhQUFLeEIsR0FBTCxDQUFTNkUsTUFBVCxDQUFnQmQsS0FBSyxDQUFDMUMsQ0FBdEIsRUFBeUIwQyxLQUFLLENBQUN6QyxDQUFOLEdBQVVFLE1BQW5DO0FBQ0Q7QUFDRjtBQWhKSDtBQUFBO0FBQUEsV0FpSkUsOEJBQXFCWCxTQUFyQixFQUFnQ1UsS0FBaEMsRUFBdUNDLE1BQXZDLEVBQStDdUMsS0FBL0MsRUFBc0RULFNBQXRELEVBQWlFO0FBQy9ELFdBQUt0RCxHQUFMLENBQVMwRSxNQUFULENBQWdCWCxLQUFLLENBQUMxQyxDQUF0QixFQUF5QjBDLEtBQUssQ0FBQ3pDLENBQS9COztBQUNBLFVBQUlnQyxTQUFKLEVBQWU7QUFDYixZQUFJd0IsV0FBVyxHQUFHRiw0REFBaUIsQ0FBQyxNQUFNckQsS0FBUCxFQUFjLE1BQU1BLEtBQXBCLENBQW5DO0FBQ0EsYUFBS3ZCLEdBQUwsQ0FBUzZFLE1BQVQsQ0FBZ0JkLEtBQUssQ0FBQzFDLENBQU4sR0FBVVIsU0FBMUIsRUFBcUNrRCxLQUFLLENBQUN6QyxDQUEzQztBQUNBLGFBQUt0QixHQUFMLENBQVM2RSxNQUFULENBQWdCZCxLQUFLLENBQUMxQyxDQUFOLEdBQVVSLFNBQTFCLEVBQXFDa0QsS0FBSyxDQUFDekMsQ0FBTixHQUFVRSxNQUFWLEdBQW1CWCxTQUF4RDtBQUNBLGFBQUtiLEdBQUwsQ0FBUzZFLE1BQVQsQ0FBZ0JkLEtBQUssQ0FBQzFDLENBQU4sR0FBVXlELFdBQTFCLEVBQXVDZixLQUFLLENBQUN6QyxDQUFOLEdBQVVFLE1BQVYsR0FBbUJYLFNBQTFEO0FBQ0EsYUFBS2IsR0FBTCxDQUFTNkUsTUFBVCxDQUFnQmQsS0FBSyxDQUFDMUMsQ0FBTixHQUFVeUQsV0FBMUIsRUFBdUNmLEtBQUssQ0FBQ3pDLENBQU4sR0FBVUUsTUFBakQ7QUFDQSxhQUFLeEIsR0FBTCxDQUFTNkUsTUFBVCxDQUFnQmQsS0FBSyxDQUFDMUMsQ0FBdEIsRUFBeUIwQyxLQUFLLENBQUN6QyxDQUFOLEdBQVVFLE1BQW5DO0FBQ0QsT0FQRCxNQVFLO0FBQ0gsWUFBSW1ELFlBQVksR0FBR0MsNERBQWlCLENBQUMsTUFBTXBELE1BQVAsRUFBZSxNQUFNQSxNQUFyQixDQUFwQztBQUNBLGFBQUt4QixHQUFMLENBQVM2RSxNQUFULENBQWdCZCxLQUFLLENBQUMxQyxDQUF0QixFQUF5QjBDLEtBQUssQ0FBQ3pDLENBQU4sR0FBVVQsU0FBbkM7QUFDQSxhQUFLYixHQUFMLENBQVM2RSxNQUFULENBQWdCZCxLQUFLLENBQUMxQyxDQUFOLEdBQVVFLEtBQVYsR0FBa0JWLFNBQWxDLEVBQTZDa0QsS0FBSyxDQUFDekMsQ0FBTixHQUFVVCxTQUF2RDtBQUNBLGFBQUtiLEdBQUwsQ0FBUzZFLE1BQVQsQ0FBZ0JkLEtBQUssQ0FBQzFDLENBQU4sR0FBVUUsS0FBVixHQUFrQlYsU0FBbEMsRUFBNkNrRCxLQUFLLENBQUN6QyxDQUFOLEdBQVVxRCxZQUF2RDtBQUNBLGFBQUszRSxHQUFMLENBQVM2RSxNQUFULENBQWdCZCxLQUFLLENBQUMxQyxDQUFOLEdBQVVFLEtBQTFCLEVBQWlDd0MsS0FBSyxDQUFDekMsQ0FBTixHQUFVcUQsWUFBM0M7QUFDQSxhQUFLM0UsR0FBTCxDQUFTNkUsTUFBVCxDQUFnQmQsS0FBSyxDQUFDMUMsQ0FBTixHQUFVRSxLQUExQixFQUFpQ3dDLEtBQUssQ0FBQ3pDLENBQXZDO0FBQ0Q7QUFDRjtBQW5LSDs7QUFBQTtBQUFBO0FBc0tPLElBQU1lLGVBQWI7QUFDRSwyQkFBWXJDLEdBQVosRUFBaUJvQixRQUFqQixFQUEyQjtBQUFBOztBQUN6QixTQUFLcEIsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsU0FBSytFLFNBQUwsR0FBaUJDLHdEQUFhLENBQUM1RCxRQUFELENBQTlCO0FBQ0Q7O0FBSkg7QUFBQTtBQUFBLFdBTUUsbUJBQWlEO0FBQUE7O0FBQUEsVUFBekNQLFNBQXlDLHVFQUE3QixFQUE2QjtBQUFBLFVBQXpCQyxLQUF5Qix1RUFBakIsZUFBaUI7QUFDL0MsVUFBSThDLGdCQUFnQixHQUFHLElBQUkzQyxPQUFKLENBQVksVUFBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQWM7QUFDL0MsY0FBSSxDQUFDZ0MsbUJBQUwsR0FBMkJqQyxHQUEzQjs7QUFDQSxjQUFJLENBQUMrRCxpQkFBTCxDQUF1QnBFLFNBQXZCLEVBQWtDQyxLQUFsQztBQUNELE9BSHNCLENBQXZCO0FBS0EsYUFBTzhDLGdCQUFQO0FBQ0Q7QUFiSDtBQUFBO0FBQUEsV0FlRSwyQkFBa0IvQyxTQUFsQixFQUF3RDtBQUFBLFVBQTNCQyxLQUEyQix1RUFBbkIsT0FBbUI7QUFBQSxVQUFWb0UsR0FBVSx1RUFBSixFQUFJO0FBQ3RELFVBQUlDLE9BQU8sR0FBRyxDQUFkO0FBQ0EsVUFBSXhCLEtBQUssR0FBRyxJQUFaO0FBQ0EsV0FBSzNELEdBQUwsQ0FBU2dFLElBQVQ7QUFDQSxXQUFLaEUsR0FBTCxDQUFTb0YsT0FBVCxHQUFtQixPQUFuQjtBQUNBLFdBQUtwRixHQUFMLENBQVNxRixXQUFULEdBQXVCdkUsS0FBdkI7QUFDQSxXQUFLZCxHQUFMLENBQVNzRixTQUFULEdBQXFCekUsU0FBckI7QUFDQSxXQUFLYixHQUFMLENBQVNpRSxTQUFUO0FBQ0EsVUFBSWhDLFFBQVEsR0FBR0MsV0FBVyxDQUFDLFlBQU07QUFDL0IsWUFBSWlELE9BQU8sR0FBR3hCLEtBQUssQ0FBQ29CLFNBQU4sQ0FBZ0JRLE1BQWhCLEdBQXlCLENBQXZDLEVBQTBDO0FBQ3hDNUIsZUFBSyxDQUFDM0QsR0FBTixDQUFVMEUsTUFBVixDQUFpQmYsS0FBSyxDQUFDb0IsU0FBTixDQUFnQkksT0FBaEIsRUFBeUI5RCxDQUExQyxFQUE2Q3NDLEtBQUssQ0FBQ29CLFNBQU4sQ0FBZ0JJLE9BQWhCLEVBQXlCN0QsQ0FBdEU7QUFDQXFDLGVBQUssQ0FBQzNELEdBQU4sQ0FBVTZFLE1BQVYsQ0FBaUJsQixLQUFLLENBQUNvQixTQUFOLENBQWdCSSxPQUFPLEdBQUcsQ0FBMUIsRUFBNkI5RCxDQUE5QyxFQUFpRHNDLEtBQUssQ0FBQ29CLFNBQU4sQ0FBZ0JJLE9BQU8sR0FBRyxDQUExQixFQUE2QjdELENBQTlFO0FBQ0FxQyxlQUFLLENBQUMzRCxHQUFOLENBQVV3RixNQUFWO0FBQ0QsU0FKRCxNQUtLO0FBQ0hoRCx1QkFBYSxDQUFDUCxRQUFELENBQWI7QUFDQTBCLGVBQUssQ0FBQzNELEdBQU4sQ0FBVXVFLFNBQVY7QUFDQVosZUFBSyxDQUFDM0QsR0FBTixDQUFVeUUsT0FBVjtBQUNBZCxlQUFLLENBQUNSLG1CQUFOO0FBQ0Q7O0FBQ0RnQyxlQUFPO0FBQ1IsT0FieUIsRUFhdkIsT0FBT0QsR0FiZ0IsQ0FBMUI7QUFjRDtBQXJDSDs7QUFBQTtBQUFBLEk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDektBO0FBRU8sSUFBTXhDLGNBQWI7QUFDRSwwQkFDRWhELEdBREYsRUFFRTtBQUFBLFFBREtFLE1BQ0wsdUVBRGMsRUFDZDtBQUFBLFFBRGtCRCxhQUNsQix1RUFEa0MsRUFDbEM7QUFBQSxRQURzQzhGLGFBQ3RDOztBQUFBOztBQUNBN0YsVUFBTSxHQUFHOEYsNkNBQUEsQ0FBTzlGLE1BQVAsSUFBaUJBLE1BQWpCLEdBQTBCLEVBQW5DO0FBQ0FELGlCQUFhLEdBQUcrRiw2Q0FBQSxDQUFPL0YsYUFBUCxJQUF3QkEsYUFBeEIsR0FBd0MsRUFBeEQ7QUFDQSxTQUFLQyxNQUFMLEdBQWMrRixNQUFNLENBQUNDLE1BQVAsQ0FBY2pHLGFBQWQsRUFBNkJDLE1BQTdCLENBQWQ7QUFDQSxTQUFLRixHQUFMLEdBQVdBLEdBQVg7QUFDQSxTQUFLbUcsVUFBTCxHQUFrQixDQUFsQjtBQUNBLFNBQUtDLEtBQUwsR0FBYTtBQUNYekUsT0FBQyxFQUFFLENBRFE7QUFFWEMsT0FBQyxFQUFFO0FBRlEsS0FBYjtBQUlBLFNBQUttRSxhQUFMLEdBQXFCQSxhQUFyQjtBQUNBLFNBQUt6RixHQUFMLEdBQVcsSUFBWDtBQUNBLFNBQUsrRixhQUFMLEdBQXFCLEtBQXJCO0FBQ0EsU0FBS0MsT0FBTCxHQUFlLEtBQWY7QUFDQSxTQUFLQyxlQUFMLEdBQXVCLEtBQXZCO0FBQ0EsU0FBS0MsaUJBQUwsR0FBeUIsSUFBSUMsSUFBSixHQUFXQyxPQUFYLEVBQXpCO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQixLQUFsQjs7QUFDQSxTQUFLakcsa0JBQUwsR0FBMEIsWUFBTSxDQUFHLENBQW5DOztBQUNBLFNBQUtrRyxlQUFMLEdBQXVCLFlBQU0sQ0FBRyxDQUFoQzs7QUFDQSxTQUFLQyxRQUFMO0FBQ0Q7O0FBdkJIO0FBQUE7QUFBQSxXQXdCRSxvQkFBVztBQUFBOztBQUVULFVBQUksS0FBSzdHLEdBQUwsQ0FBUzhHLE9BQVQsS0FBcUIsUUFBekIsRUFBbUM7QUFDakMsWUFBTXZHLEdBQUcsR0FBRzZDLFFBQVEsQ0FBQzJELGFBQVQsQ0FBdUIsUUFBdkIsQ0FBWjtBQUVBLGFBQUsvRyxHQUFMLENBQVNnSCxXQUFULENBQXFCekcsR0FBckI7QUFFQSxhQUFLQSxHQUFMLEdBQVdBLEdBQVg7QUFDRCxPQU5ELE1BT0s7QUFDSCxhQUFLQSxHQUFMLEdBQVcsS0FBS1AsR0FBaEI7QUFDRDs7QUFFRCxXQUFLTSxHQUFMLEdBQVcsS0FBS0MsR0FBTCxDQUFTMEcsVUFBVCxDQUFvQixJQUFwQixDQUFYO0FBQ0EsV0FBS0Msd0JBQUw7QUFFQUMsWUFBTSxDQUFDQyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxZQUFNO0FBQ3RDLGFBQUksQ0FBQ1QsVUFBTCxHQUFrQixJQUFsQjs7QUFDQSxhQUFJLENBQUNqRyxrQkFBTDtBQUNELE9BSEQ7QUFLQXlHLFlBQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NDLG1EQUFRLENBQUMsWUFBTTtBQUMvQyxhQUFJLENBQUNWLFVBQUwsR0FBa0IsS0FBbEI7O0FBQ0EsYUFBSSxDQUFDTyx3QkFBTDs7QUFDQSxhQUFJLENBQUNOLGVBQUw7QUFDRCxPQUp5QyxFQUl2QyxHQUp1QyxDQUExQztBQU1BTyxZQUFNLENBQUNDLGdCQUFQLENBQXdCLGtCQUF4QixFQUE0QyxZQUFNO0FBQ2hELFlBQUloRSxRQUFRLENBQUNrRSxlQUFULEtBQTZCLFNBQWpDLEVBQTRDO0FBQzFDLGVBQUksQ0FBQ2pCLGFBQUwsR0FBcUIsSUFBckI7QUFDRDtBQUNGLE9BSkQ7QUFNQSxXQUFLa0IsZUFBTDtBQUVBLFdBQUtDLHVCQUFMO0FBRUQ7QUE3REg7QUFBQTtBQUFBLFdBOERFLG1DQUEwQjtBQUFBOztBQUN4QixVQUFJQyxhQUFhLEdBQUcsSUFBSWhCLElBQUosR0FBV0MsT0FBWCxFQUFwQjtBQUNBLFdBQUtnQixXQUFMLEdBQW1CLENBQUNELGFBQWEsR0FBRyxLQUFLakIsaUJBQXRCLElBQTJDLElBQTlEOztBQUNBLFVBQUksS0FBS0gsYUFBVCxFQUF3QjtBQUN0QixhQUFLcUIsV0FBTCxHQUFtQixDQUFuQjtBQUNBLGFBQUtyQixhQUFMLEdBQXFCLEtBQXJCO0FBQ0Q7O0FBQ0QsV0FBS0YsVUFBTCxJQUFtQixDQUFuQjtBQUNBLFdBQUtLLGlCQUFMLEdBQXlCaUIsYUFBekI7QUFDQUUsMkJBQXFCLENBQUMsWUFBTTtBQUMxQixjQUFJLENBQUNILHVCQUFMO0FBQ0QsT0FGb0IsQ0FBckI7QUFHRDtBQTFFSDtBQUFBO0FBQUEsV0E0RUUsbUNBQTBCO0FBQ3hCLGFBQU9wRSxRQUFRLENBQUNDLElBQVQsQ0FBY3VFLFFBQWQsQ0FBdUIsS0FBSzdCLGFBQTVCLEtBQThDLEtBQUtBLGFBQUwsS0FBdUIzQyxRQUFRLENBQUNDLElBQXJGO0FBQ0Q7QUE5RUg7QUFBQTtBQUFBLFdBZ0ZFLG9DQUEyQjtBQUN6QixVQUFJLEtBQUtrRCxlQUFULEVBQTBCO0FBQzFCLFVBQUlzQixRQUFRLEdBQUd6RSxRQUFRLENBQUMyRCxhQUFULENBQXVCLFFBQXZCLENBQWY7QUFDQSxVQUFJZSxlQUFlLEdBQUdELFFBQVEsQ0FBQ1osVUFBVCxDQUFvQixJQUFwQixDQUF0QjtBQUNBWSxjQUFRLENBQUNoRyxLQUFULEdBQWlCLEtBQUt0QixHQUFMLENBQVNzQixLQUExQjtBQUNBZ0csY0FBUSxDQUFDL0YsTUFBVCxHQUFrQixLQUFLdkIsR0FBTCxDQUFTdUIsTUFBM0I7QUFHQSxVQUFJaUcsMkJBQTJCLEdBQUdBLDJCQUEyQixHQUFHLEtBQUt6SCxHQUFMLENBQVMwSCxZQUFULENBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLEtBQUt6SCxHQUFMLENBQVNzQixLQUFyQyxFQUE0QyxLQUFLdEIsR0FBTCxDQUFTdUIsTUFBckQsQ0FBaEU7O0FBQ0EsVUFBSSxLQUFLOUIsR0FBTCxDQUFTOEcsT0FBVCxLQUFxQixRQUF6QixFQUFtQztBQUNqQyxZQUFJbUIsV0FBSixFQUFpQkMsWUFBakI7O0FBQ0EsWUFBSSxLQUFLQyx1QkFBTCxFQUFKLEVBQW9DO0FBQ2xDRixxQkFBVyxHQUFHLEtBQUtsQyxhQUFMLENBQW1CcUMscUJBQW5CLEdBQTJDdkcsS0FBekQ7QUFDQXFHLHNCQUFZLEdBQUcsS0FBS25DLGFBQUwsQ0FBbUJxQyxxQkFBbkIsR0FBMkN0RyxNQUExRDtBQUNELFNBSEQsTUFJSztBQUNIbUcscUJBQVcsR0FBRyxLQUFLakksR0FBTCxDQUFTb0kscUJBQVQsR0FBaUN2RyxLQUEvQztBQUNBcUcsc0JBQVksR0FBRyxLQUFLbEksR0FBTCxDQUFTb0kscUJBQVQsR0FBaUN0RyxNQUFoRDtBQUNEOztBQUVELGFBQUt2QixHQUFMLENBQVNzQixLQUFULEdBQWlCb0csV0FBakI7QUFDQSxhQUFLMUgsR0FBTCxDQUFTdUIsTUFBVCxHQUFrQm9HLFlBQWxCO0FBRUFKLHVCQUFlLENBQUNPLFlBQWhCLENBQTZCTiwyQkFBN0IsRUFBMEQsQ0FBMUQsRUFBNkQsQ0FBN0Q7QUFDQSxhQUFLekgsR0FBTCxDQUFTbUMsU0FBVCxDQUFtQm9GLFFBQW5CLEVBQTZCLENBQTdCLEVBQWdDLENBQWhDLEVBQW1DSSxXQUFuQyxFQUFnREMsWUFBaEQ7QUFHRCxPQWxCRCxNQW1CSztBQUNILFlBQUlELFlBQUosRUFBaUJDLGFBQWpCOztBQUNBLFlBQUksS0FBS0MsdUJBQUwsRUFBSixFQUFvQztBQUNsQ0Ysc0JBQVcsR0FBRyxLQUFLbEMsYUFBTCxDQUFtQnFDLHFCQUFuQixHQUEyQ3ZHLEtBQXpEO0FBQ0FxRyx1QkFBWSxHQUFHLEtBQUtuQyxhQUFMLENBQW1CcUMscUJBQW5CLEdBQTJDdEcsTUFBMUQ7QUFDRCxTQUhELE1BSUs7QUFDSG1HLHNCQUFXLEdBQUcsS0FBSzFILEdBQUwsQ0FBUytILGFBQVQsQ0FBdUJGLHFCQUF2QixHQUErQ3ZHLEtBQTdEO0FBQ0FxRyx1QkFBWSxHQUFHLEtBQUszSCxHQUFMLENBQVMrSCxhQUFULENBQXVCRixxQkFBdkIsR0FBK0N0RyxNQUE5RDtBQUNEOztBQUNELGFBQUt2QixHQUFMLENBQVNzQixLQUFULEdBQWlCb0csWUFBakI7QUFDQSxhQUFLMUgsR0FBTCxDQUFTdUIsTUFBVCxHQUFrQm9HLGFBQWxCO0FBRUFKLHVCQUFlLENBQUNPLFlBQWhCLENBQTZCTiwyQkFBN0IsRUFBMEQsQ0FBMUQsRUFBNkQsQ0FBN0Q7QUFDQSxhQUFLekgsR0FBTCxDQUFTbUMsU0FBVCxDQUFtQm9GLFFBQW5CLEVBQTZCLENBQTdCLEVBQWdDLENBQWhDLEVBQW1DSSxZQUFuQyxFQUFnREMsYUFBaEQ7QUFFRDs7QUFFREwsY0FBUSxHQUFHVSxTQUFYO0FBQ0FULHFCQUFlLEdBQUdTLFNBQWxCO0FBQ0Q7QUFoSUg7QUFBQTtBQUFBLFdBa0lFLHVCQUFjMUcsS0FBZCxFQUFxQkMsTUFBckIsRUFBNkI7QUFDM0IsV0FBS3lFLGVBQUwsR0FBdUIsSUFBdkI7QUFDQSxXQUFLaEcsR0FBTCxDQUFTc0IsS0FBVCxHQUFpQkEsS0FBakI7QUFDQSxXQUFLdEIsR0FBTCxDQUFTdUIsTUFBVCxHQUFrQkEsTUFBbEI7QUFDRDtBQXRJSDtBQUFBO0FBQUEsV0F3SUUsb0JBQVdWLEtBQVgsRUFBa0I7QUFDaEIsV0FBS2QsR0FBTCxDQUFTZ0UsSUFBVDtBQUNBLFdBQUtoRSxHQUFMLENBQVNrRSxTQUFULEdBQXFCcEQsS0FBckI7QUFDQSxXQUFLZCxHQUFMLENBQVNrSSxRQUFULENBQWtCLENBQWxCLEVBQXFCLENBQXJCLEVBQXdCLEtBQUtqSSxHQUFMLENBQVNzQixLQUFqQyxFQUF3QyxLQUFLdEIsR0FBTCxDQUFTdUIsTUFBakQ7QUFDQSxXQUFLeEIsR0FBTCxDQUFTeUUsT0FBVDtBQUNEO0FBN0lIO0FBQUE7QUFBQSxXQStJRSxpQkFBUTtBQUNOLFdBQUt6RSxHQUFMLENBQVNtSSxTQUFULENBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLEtBQUtsSSxHQUFMLENBQVNzQixLQUFsQyxFQUF5QyxLQUFLdEIsR0FBTCxDQUFTdUIsTUFBbEQ7QUFDRDtBQWpKSDtBQUFBO0FBQUEsV0FtSkUsMkJBQWtCO0FBQUE7O0FBRWhCLFdBQUt2QixHQUFMLENBQVM2RyxnQkFBVCxDQUEwQixPQUExQixFQUFtQyxZQUFNO0FBQ3ZDLGNBQUksQ0FBQ2QsT0FBTCxHQUFlLElBQWY7QUFDRCxPQUZEO0FBR0EsV0FBSy9GLEdBQUwsQ0FBUzZHLGdCQUFULENBQTBCLFlBQTFCLEVBQXdDLFlBQU07QUFDNUMsY0FBSSxDQUFDZCxPQUFMLEdBQWUsSUFBZjtBQUVELE9BSEQ7QUFLQSxXQUFLL0YsR0FBTCxDQUFTNkcsZ0JBQVQsQ0FBMEIsV0FBMUIsRUFBdUMsVUFBQ3NCLENBQUQsRUFBTztBQUM1QyxZQUFJQyxHQUFHLEdBQUdDLDJEQUFnQixDQUFDRixDQUFELENBQTFCO0FBQ0EsY0FBSSxDQUFDdEMsS0FBTCxHQUFhO0FBQ1h6RSxXQUFDLEVBQUVnSCxHQUFHLENBQUNoSCxDQURJO0FBRVhDLFdBQUMsRUFBRStHLEdBQUcsQ0FBQy9HO0FBRkksU0FBYjtBQUlELE9BTkQ7QUFRQSxXQUFLckIsR0FBTCxDQUFTNkcsZ0JBQVQsQ0FBMEIsV0FBMUIsRUFBdUMsVUFBQ3NCLENBQUQsRUFBTztBQUM1QyxZQUFJQyxHQUFHLEdBQUdDLDJEQUFnQixDQUFDRixDQUFELENBQTFCO0FBQ0EsY0FBSSxDQUFDdEMsS0FBTCxHQUFhO0FBQ1h6RSxXQUFDLEVBQUVnSCxHQUFHLENBQUNoSCxDQURJO0FBRVhDLFdBQUMsRUFBRStHLEdBQUcsQ0FBQy9HO0FBRkksU0FBYjtBQUlELE9BTkQ7QUFPRDtBQTVLSDtBQUFBO0FBQUEsV0E4S0UsK0JBQXNCO0FBQ3BCLFVBQUlpSCxJQUFJLEdBQUd6RixRQUFRLENBQUMyRCxhQUFULENBQXVCLFFBQXZCLENBQVg7QUFDQSxVQUFJK0IsWUFBWSxHQUFHLElBQUk5RixjQUFKLENBQW1CNkYsSUFBbkIsRUFBeUIsRUFBekIsRUFBNkIsRUFBN0IsRUFBaUMsS0FBSzdJLEdBQXRDLENBQW5CO0FBQ0EsYUFBTzhJLFlBQVA7QUFDRDtBQWxMSDs7QUFBQTtBQUFBO0FBcUxPLFNBQVMzRixJQUFULENBQWM0RixJQUFkLEVBQW9COUksYUFBcEIsRUFBbUNDLE1BQW5DLEVBQTJDOEksU0FBM0MsRUFBc0RqRCxhQUF0RCxFQUFxRTtBQUMxRSxNQUFJeEYsR0FBRyxHQUFHNkMsUUFBUSxDQUFDNkYsY0FBVCxDQUF3QixRQUF4QixDQUFWO0FBQ0ExSSxLQUFHLEdBQUdBLEdBQUcsR0FBR0EsR0FBSCxHQUFTNkMsUUFBUSxDQUFDQyxJQUEzQjtBQUNBLE1BQUlyRCxHQUFHLEdBQUdnSixTQUFTLEdBQUdBLFNBQUgsR0FBZXpJLEdBQWxDO0FBQ0EsTUFBSTJJLE9BQUo7QUFDQSxNQUFJQyxXQUFXLEdBQUcsSUFBSTVILE9BQUosQ0FBWSxVQUFDQyxHQUFELEVBQU1DLEdBQU4sRUFBYztBQUMxQ3lILFdBQU8sR0FBRyxtQkFBTTtBQUNkLFVBQUlFLFFBQVEsR0FBRyxJQUFJTCxJQUFKLENBQVMvSSxHQUFULEVBQWNFLE1BQWQsRUFBc0JELGFBQXRCLEVBQXFDOEYsYUFBckMsQ0FBZjtBQUNBdkUsU0FBRyxDQUFDNEgsUUFBRCxDQUFIO0FBQ0QsS0FIRDtBQUlELEdBTGlCLENBQWxCO0FBT0EsTUFBSUMsVUFBVSxHQUFHO0FBQ2ZDLFdBQU8sRUFBRUgsV0FETTtBQUVmRCxXQUFPLEVBQUVBO0FBRk0sR0FBakI7QUFLQSxTQUFPRyxVQUFQO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6TU0sU0FBU0UsQ0FBVCxDQUFXQyxRQUFYLEVBQXFCO0FBQzFCLFNBQU9wRyxRQUFRLENBQUNxRyxhQUFULENBQXVCRCxRQUF2QixDQUFQO0FBQ0Q7QUFFTSxTQUFTRSxNQUFULENBQWdCRixRQUFoQixFQUEwQkcsTUFBMUIsRUFBa0M7QUFDdkMsTUFBSUMsUUFBUSxHQUFHRCxNQUFNLEdBQUcsT0FBSCxHQUFhLE1BQWxDO0FBQ0FKLEdBQUMsQ0FBQ0MsUUFBRCxDQUFELENBQVlLLFlBQVosQ0FBeUIsT0FBekIsb0JBQTZDRCxRQUE3QztBQUNEO0FBRU0sU0FBU0UsV0FBVCxDQUFxQk4sUUFBckIsRUFBK0JPLFNBQS9CLEVBQTBDSixNQUExQyxFQUFrRDtBQUN2RCxNQUFJSyxNQUFNLEdBQUdMLE1BQU0sR0FBRyxLQUFILEdBQVcsUUFBOUI7QUFDQUosR0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWVMsU0FBWixDQUFzQkQsTUFBdEIsRUFBOEJELFNBQTlCO0FBQ0Q7QUFFTSxTQUFTRyxJQUFULENBQWNDLFNBQWQsRUFBeUI7QUFDOUIsTUFBSUMsU0FBUyxHQUFHaEgsUUFBUSxDQUFDaUgsV0FBVCxDQUFxQixPQUFyQixDQUFoQjtBQUNBRCxXQUFTLENBQUNFLFNBQVYsQ0FBb0JILFNBQXBCLEVBQStCLElBQS9CLEVBQXFDLElBQXJDO0FBQ0EvRyxVQUFRLENBQUNtSCxhQUFULENBQXVCSCxTQUF2QjtBQUNEO0FBRU0sU0FBU0ksT0FBVCxDQUFpQkMsSUFBakIsRUFBdUJqQixRQUF2QixFQUFpQztBQUN0QyxNQUFJa0IsT0FBTyxHQUFHRCxJQUFkO0FBQUEsTUFDRUUsSUFBSSxHQUFHLEVBRFQ7O0FBRUEsU0FBT0QsT0FBTyxDQUFDRSxVQUFSLElBQXNCLElBQXRCLElBQThCRixPQUFPLENBQUNFLFVBQVIsSUFBc0J4SCxRQUFRLENBQUN5SCxlQUFwRSxFQUFxRjtBQUNuRkYsUUFBSSxDQUFDRyxJQUFMLENBQVVKLE9BQU8sQ0FBQ0UsVUFBbEI7QUFDQUYsV0FBTyxHQUFHQSxPQUFPLENBQUNFLFVBQWxCO0FBQ0Q7O0FBQ0QsU0FBT0QsSUFBSSxDQUFDSSxNQUFMLENBQVksVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKLEVBQVU7QUFDM0IsV0FBT0QsQ0FBQyxDQUFDRSxPQUFGLENBQVUxQixRQUFWLENBQVA7QUFDRCxHQUZNLENBQVA7QUFHRDtBQUVNLFNBQVMyQixPQUFULENBQWlCbkwsR0FBakIsRUFBc0JvTCxRQUF0QixFQUE0RTtBQUFBLE1BQTVDQyxFQUE0Qyx1RUFBdkMsWUFBTTtBQUFFckwsT0FBRyxDQUFDc0wsS0FBSixDQUFVQyxPQUFWLEdBQW9CLE1BQXBCO0FBQTZCLEdBQUU7QUFDakYsTUFBSUMsVUFBVSxHQUFHeEwsR0FBakI7QUFDQSxNQUFJeUwsVUFBVSxHQUFHakosV0FBVyxDQUFDLFlBQU07QUFDakMsUUFBSSxDQUFDZ0osVUFBVSxDQUFDRixLQUFYLENBQWlCSSxPQUF0QixFQUErQjtBQUM3QkYsZ0JBQVUsQ0FBQ0YsS0FBWCxDQUFpQkksT0FBakIsR0FBMkIsQ0FBM0I7QUFDRDs7QUFDRCxRQUFJRixVQUFVLENBQUNGLEtBQVgsQ0FBaUJJLE9BQWpCLEdBQTJCLENBQS9CLEVBQWtDO0FBQ2hDRixnQkFBVSxDQUFDRixLQUFYLENBQWlCSSxPQUFqQixJQUE0QixJQUFJTixRQUFoQztBQUNELEtBRkQsTUFFTztBQUNMdEksbUJBQWEsQ0FBQzJJLFVBQUQsQ0FBYjtBQUNBSixRQUFFO0FBQ0ZyTCxTQUFHLENBQUNzTCxLQUFKLENBQVVJLE9BQVYsR0FBb0IsRUFBcEI7QUFFRDtBQUNGLEdBWjJCLEVBWXpCLElBQUlOLFFBWnFCLENBQTVCO0FBYUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9DRCxJQUFNTyxlQUFlLEdBQUdDLG1CQUFPLENBQUMsaUZBQUQsQ0FBL0I7O0FBQ0EsSUFBTUMsRUFBRSxHQUFHLElBQUlGLGVBQUosRUFBWDtBQUdPLFNBQVN0RSxRQUFULENBQWtCeUUsSUFBbEIsRUFBd0JDLEtBQXhCLEVBQStCO0FBQUE7QUFDcEMsTUFBSUMsS0FBSyxHQUFHLElBQVo7QUFDQSxNQUFNL0gsS0FBSyxHQUFHLElBQWQ7QUFDQSxTQUFPLFlBQU07QUFDWCxRQUFNZ0ksT0FBTyxHQUFHaEksS0FBaEI7QUFDQSxRQUFNaUksSUFBSSxHQUFHQyxVQUFiO0FBQ0FwSixnQkFBWSxDQUFDaUosS0FBRCxDQUFaO0FBQ0FBLFNBQUssR0FBR25KLFVBQVUsQ0FBQyxZQUFNO0FBQ3ZCaUosVUFBSSxDQUFDTSxLQUFMLENBQVdILE9BQVgsRUFBb0JDLElBQXBCO0FBQ0QsS0FGaUIsRUFFZkgsS0FGZSxDQUFsQjtBQUdELEdBUEQ7QUFRRDtBQUVNLElBQU0vRixFQUFFLEdBQUc7QUFDaEJxRyxLQUFHLEVBQUUsYUFBQUMsQ0FBQztBQUFBLFdBQUlDLEtBQUssQ0FBQ0MsT0FBTixDQUFjRixDQUFkLENBQUo7QUFBQSxHQURVO0FBRWhCRyxLQUFHLEVBQUUsYUFBQUgsQ0FBQztBQUFBLFdBQUlyRyxNQUFNLENBQUN5RyxTQUFQLENBQWlCQyxRQUFqQixDQUEwQkMsSUFBMUIsQ0FBK0JOLENBQS9CLEVBQWtDTyxPQUFsQyxDQUEwQyxRQUExQyxJQUFzRCxDQUFDLENBQTNEO0FBQUEsR0FGVTtBQUdoQkMsS0FBRyxFQUFFLGFBQUFSLENBQUM7QUFBQSxXQUFJdEcsRUFBRSxDQUFDeUcsR0FBSCxDQUFPSCxDQUFQLEtBQWFBLENBQUMsQ0FBQ1MsY0FBRixDQUFpQixhQUFqQixDQUFqQjtBQUFBLEdBSFU7QUFJaEJDLEtBQUcsRUFBRSxhQUFBVixDQUFDO0FBQUEsV0FBSUEsQ0FBQyxZQUFZVyxVQUFqQjtBQUFBLEdBSlU7QUFLaEJDLEtBQUcsRUFBRSxhQUFBWixDQUFDO0FBQUEsV0FBSUEsQ0FBQyxZQUFZYSxnQkFBakI7QUFBQSxHQUxVO0FBTWhCQyxLQUFHLEVBQUUsYUFBQWQsQ0FBQztBQUFBLFdBQUlBLENBQUMsQ0FBQ2UsUUFBRixJQUFjckgsRUFBRSxDQUFDZ0gsR0FBSCxDQUFPVixDQUFQLENBQWxCO0FBQUEsR0FOVTtBQU9oQmdCLEtBQUcsRUFBRSxhQUFBaEIsQ0FBQztBQUFBLFdBQUksT0FBT0EsQ0FBUCxLQUFhLFFBQWpCO0FBQUEsR0FQVTtBQVFoQmlCLEtBQUcsRUFBRSxhQUFBakIsQ0FBQztBQUFBLFdBQUksT0FBT0EsQ0FBUCxLQUFhLFVBQWpCO0FBQUEsR0FSVTtBQVNoQmtCLEtBQUcsRUFBRSxhQUFBbEIsQ0FBQztBQUFBLFdBQUksT0FBT0EsQ0FBUCxLQUFhLFdBQWpCO0FBQUEsR0FUVTtBQVVoQm1CLEtBQUcsRUFBRSxhQUFBbkIsQ0FBQztBQUFBLFdBQUl0RyxFQUFFLENBQUN3SCxHQUFILENBQU9sQixDQUFQLEtBQWFBLENBQUMsS0FBSyxJQUF2QjtBQUFBLEdBVlU7QUFXaEJvQixLQUFHLEVBQUUsYUFBQXBCLENBQUM7QUFBQSxXQUFJLHFDQUFxQ3FCLElBQXJDLENBQTBDckIsQ0FBMUMsQ0FBSjtBQUFBLEdBWFU7QUFZaEJzQixNQUFJLEVBQUUsY0FBQXRCLENBQUM7QUFBQSxXQUFJLFFBQVFxQixJQUFSLENBQWFyQixDQUFiLENBQUo7QUFBQSxHQVpTO0FBYWhCdUIsS0FBRyxFQUFFLGFBQUF2QixDQUFDO0FBQUEsV0FBSSxPQUFPcUIsSUFBUCxDQUFZckIsQ0FBWixDQUFKO0FBQUEsR0FiVTtBQWNoQndCLEtBQUcsRUFBRSxhQUFBeEIsQ0FBQztBQUFBLFdBQUksT0FBT3FCLElBQVAsQ0FBWXJCLENBQVosQ0FBSjtBQUFBLEdBZFU7QUFlaEJ5QixLQUFHLEVBQUUsYUFBQXpCLENBQUM7QUFBQSxXQUFLdEcsRUFBRSxDQUFDMEgsR0FBSCxDQUFPcEIsQ0FBUCxLQUFhdEcsRUFBRSxDQUFDNkgsR0FBSCxDQUFPdkIsQ0FBUCxDQUFiLElBQTBCdEcsRUFBRSxDQUFDOEgsR0FBSCxDQUFPeEIsQ0FBUCxDQUEvQjtBQUFBLEdBZlU7QUFnQmhCMEIsS0FBRyxFQUFFLGFBQUExQixDQUFDO0FBQUEsV0FBSSxDQUFDMkIsdUJBQXVCLENBQUNsQixjQUF4QixDQUF1Q1QsQ0FBdkMsQ0FBRCxJQUE4QyxDQUFDNEIsb0JBQW9CLENBQUNuQixjQUFyQixDQUFvQ1QsQ0FBcEMsQ0FBL0MsSUFBeUZBLENBQUMsS0FBSyxTQUEvRixJQUE0R0EsQ0FBQyxLQUFLLFdBQXRIO0FBQUE7QUFoQlUsQ0FBWDtBQW1CQSxTQUFTcEgsaUJBQVQsQ0FBMkJpSixHQUEzQixFQUFnQ0MsR0FBaEMsRUFBcUNDLElBQXJDLEVBQTJDO0FBQ2hELFNBQU94QyxFQUFFLENBQUN5QyxNQUFILENBQVVELElBQVYsS0FBbUJELEdBQUcsR0FBR0QsR0FBekIsSUFBZ0NBLEdBQXZDO0FBQ0Q7QUFFTSxTQUFTSSxXQUFULENBQXFCQyxFQUFyQixFQUF5QkMsRUFBekIsRUFBNkJDLEVBQTdCLEVBQWlDQyxFQUFqQyxFQUFxQztBQUMxQyxTQUFPdE0sSUFBSSxDQUFDdU0sSUFBTCxDQUFVLENBQUNGLEVBQUUsR0FBR0YsRUFBTixLQUFhRSxFQUFFLEdBQUdGLEVBQWxCLElBQXdCLENBQUNHLEVBQUUsR0FBR0YsRUFBTixLQUFhRSxFQUFFLEdBQUdGLEVBQWxCLENBQWxDLENBQVA7QUFDRDtBQUVNLFNBQVNJLGNBQVQsQ0FBd0JDLE1BQXhCLEVBQWdDO0FBQ3JDLFNBQVFBLE1BQU0sR0FBRyxHQUFWLEdBQWlCek0sSUFBSSxDQUFDQyxFQUE3QjtBQUNEO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLFNBQVNzRyxnQkFBVCxDQUEwQkYsQ0FBMUIsRUFBNkI7QUFDbEMsTUFBSXFHLEdBQUcsR0FBRztBQUFFcE4sS0FBQyxFQUFFLENBQUw7QUFBUUMsS0FBQyxFQUFFO0FBQVgsR0FBVjs7QUFDQSxNQUFJOEcsQ0FBQyxDQUFDc0csSUFBRixLQUFXLFlBQVgsSUFBMkJ0RyxDQUFDLENBQUNzRyxJQUFGLEtBQVcsV0FBdEMsSUFBcUR0RyxDQUFDLENBQUNzRyxJQUFGLEtBQVcsVUFBaEUsSUFBOEV0RyxDQUFDLENBQUNzRyxJQUFGLEtBQVcsYUFBN0YsRUFBNEc7QUFDMUcsUUFBSUMsS0FBSyxHQUFHdkcsQ0FBQyxDQUFDd0csYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0IsQ0FBeEIsS0FBOEJ6RyxDQUFDLENBQUN3RyxhQUFGLENBQWdCRSxjQUFoQixDQUErQixDQUEvQixDQUExQztBQUNBTCxPQUFHLENBQUNwTixDQUFKLEdBQVFzTixLQUFLLENBQUNJLEtBQWQ7QUFDQU4sT0FBRyxDQUFDbk4sQ0FBSixHQUFRcU4sS0FBSyxDQUFDSyxLQUFkO0FBQ0QsR0FKRCxNQUlPLElBQUk1RyxDQUFDLENBQUNzRyxJQUFGLEtBQVcsV0FBWCxJQUEwQnRHLENBQUMsQ0FBQ3NHLElBQUYsS0FBVyxTQUFyQyxJQUFrRHRHLENBQUMsQ0FBQ3NHLElBQUYsS0FBVyxXQUE3RCxJQUE0RXRHLENBQUMsQ0FBQ3NHLElBQUYsS0FBVyxXQUF2RixJQUFzR3RHLENBQUMsQ0FBQ3NHLElBQUYsS0FBVyxVQUFqSCxJQUErSHRHLENBQUMsQ0FBQ3NHLElBQUYsS0FBVyxZQUExSSxJQUEwSnRHLENBQUMsQ0FBQ3NHLElBQUYsS0FBVyxZQUF6SyxFQUF1TDtBQUM1TEQsT0FBRyxDQUFDcE4sQ0FBSixHQUFRK0csQ0FBQyxDQUFDMkcsS0FBVjtBQUNBTixPQUFHLENBQUNuTixDQUFKLEdBQVE4RyxDQUFDLENBQUM0RyxLQUFWO0FBQ0Q7O0FBQ0QsU0FBT1AsR0FBUDtBQUNEO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxTQUFTUSxhQUFULENBQXVCQyxNQUF2QixFQUErQkMsSUFBL0IsRUFBcUM7QUFDMUMsU0FBT3hKLE1BQU0sQ0FBQ3lHLFNBQVAsQ0FBaUJLLGNBQWpCLENBQWdDSCxJQUFoQyxDQUFxQzRDLE1BQXJDLEVBQTZDQyxJQUE3QyxDQUFQO0FBQ0Q7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sU0FBU0MsT0FBVCxDQUFpQkMsR0FBakIsRUFBc0I7QUFDM0IsU0FBTyxPQUFPQSxHQUFQLEtBQWUsUUFBZixHQUEwQkMsS0FBSyxDQUFDRCxHQUFELENBQS9CLEdBQXVDLENBQUNBLEdBQS9DO0FBQ0Q7O0FBR0QsU0FBU0UsU0FBVCxDQUFtQkMsUUFBbkIsRUFBNkI7QUFDM0IsTUFBTWpDLEdBQUcsR0FBRyxrQ0FBa0NrQyxJQUFsQyxDQUF1Q0QsUUFBdkMsQ0FBWjtBQUNBLFNBQU9qQyxHQUFHLGtCQUFXQSxHQUFHLENBQUMsQ0FBRCxDQUFkLFdBQXlCaUMsUUFBbkM7QUFDRDs7QUFFRCxTQUFTRSxTQUFULENBQW1CQyxRQUFuQixFQUE2QjtBQUMzQixNQUFNQyxHQUFHLEdBQUcsa0NBQVo7QUFDQSxNQUFNeEMsR0FBRyxHQUFHdUMsUUFBUSxDQUFDRSxPQUFULENBQWlCRCxHQUFqQixFQUFzQixVQUFDRSxDQUFELEVBQUlDLENBQUosRUFBT0MsQ0FBUCxFQUFVQyxDQUFWO0FBQUEsV0FBZ0JGLENBQUMsR0FBR0EsQ0FBSixHQUFRQyxDQUFSLEdBQVlBLENBQVosR0FBZ0JDLENBQWhCLEdBQW9CQSxDQUFwQztBQUFBLEdBQXRCLENBQVo7QUFDQSxNQUFNMUMsR0FBRyxHQUFHLDRDQUE0Q2tDLElBQTVDLENBQWlEckMsR0FBakQsQ0FBWjtBQUNBLE1BQU0yQyxDQUFDLEdBQUdHLFFBQVEsQ0FBQzNDLEdBQUcsQ0FBQyxDQUFELENBQUosRUFBUyxFQUFULENBQWxCO0FBQ0EsTUFBTXlDLENBQUMsR0FBR0UsUUFBUSxDQUFDM0MsR0FBRyxDQUFDLENBQUQsQ0FBSixFQUFTLEVBQVQsQ0FBbEI7QUFDQSxNQUFNMEMsQ0FBQyxHQUFHQyxRQUFRLENBQUMzQyxHQUFHLENBQUMsQ0FBRCxDQUFKLEVBQVMsRUFBVCxDQUFsQjtBQUNBLHdCQUFld0MsQ0FBZixjQUFvQkMsQ0FBcEIsY0FBeUJDLENBQXpCO0FBQ0Q7O0FBRUQsU0FBU0UsU0FBVCxDQUFtQkMsUUFBbkIsRUFBNkI7QUFDM0IsTUFBTTVDLEdBQUcsR0FBRywwQ0FBMENpQyxJQUExQyxDQUErQ1csUUFBL0MsS0FBNEQsdURBQXVEWCxJQUF2RCxDQUE0RFcsUUFBNUQsQ0FBeEU7QUFDQSxNQUFNQyxDQUFDLEdBQUdILFFBQVEsQ0FBQzFDLEdBQUcsQ0FBQyxDQUFELENBQUosRUFBUyxFQUFULENBQVIsR0FBdUIsR0FBakM7QUFDQSxNQUFNOEMsQ0FBQyxHQUFHSixRQUFRLENBQUMxQyxHQUFHLENBQUMsQ0FBRCxDQUFKLEVBQVMsRUFBVCxDQUFSLEdBQXVCLEdBQWpDO0FBQ0EsTUFBTStDLENBQUMsR0FBR0wsUUFBUSxDQUFDMUMsR0FBRyxDQUFDLENBQUQsQ0FBSixFQUFTLEVBQVQsQ0FBUixHQUF1QixHQUFqQztBQUNBLE1BQU14QixDQUFDLEdBQUd3QixHQUFHLENBQUMsQ0FBRCxDQUFILElBQVUsQ0FBcEI7O0FBQ0EsV0FBU2dELE9BQVQsQ0FBaUJDLENBQWpCLEVBQW9CQyxDQUFwQixFQUF1QkMsQ0FBdkIsRUFBMEI7QUFDeEIsUUFBSUEsQ0FBQyxHQUFHLENBQVIsRUFBV0EsQ0FBQyxJQUFJLENBQUw7QUFDWCxRQUFJQSxDQUFDLEdBQUcsQ0FBUixFQUFXQSxDQUFDLElBQUksQ0FBTDtBQUNYLFFBQUlBLENBQUMsR0FBRyxJQUFJLENBQVosRUFBZSxPQUFPRixDQUFDLEdBQUcsQ0FBQ0MsQ0FBQyxHQUFHRCxDQUFMLElBQVUsQ0FBVixHQUFjRSxDQUF6QjtBQUNmLFFBQUlBLENBQUMsR0FBRyxJQUFJLENBQVosRUFBZSxPQUFPRCxDQUFQO0FBQ2YsUUFBSUMsQ0FBQyxHQUFHLElBQUksQ0FBWixFQUFlLE9BQU9GLENBQUMsR0FBRyxDQUFDQyxDQUFDLEdBQUdELENBQUwsS0FBVyxJQUFJLENBQUosR0FBUUUsQ0FBbkIsSUFBd0IsQ0FBbkM7QUFDZixXQUFPRixDQUFQO0FBQ0Q7O0FBQ0QsTUFBSVYsQ0FBSixFQUFPQyxDQUFQLEVBQVVDLENBQVY7O0FBQ0EsTUFBSUssQ0FBQyxJQUFJLENBQVQsRUFBWTtBQUNWUCxLQUFDLEdBQUdDLENBQUMsR0FBR0MsQ0FBQyxHQUFHTSxDQUFaO0FBQ0QsR0FGRCxNQUVPO0FBQ0wsUUFBTUcsQ0FBQyxHQUFHSCxDQUFDLEdBQUcsR0FBSixHQUFVQSxDQUFDLElBQUksSUFBSUQsQ0FBUixDQUFYLEdBQXdCQyxDQUFDLEdBQUdELENBQUosR0FBUUMsQ0FBQyxHQUFHRCxDQUE5QztBQUNBLFFBQU1HLENBQUMsR0FBRyxJQUFJRixDQUFKLEdBQVFHLENBQWxCO0FBQ0FYLEtBQUMsR0FBR1MsT0FBTyxDQUFDQyxDQUFELEVBQUlDLENBQUosRUFBT0wsQ0FBQyxHQUFHLElBQUksQ0FBZixDQUFYO0FBQ0FMLEtBQUMsR0FBR1EsT0FBTyxDQUFDQyxDQUFELEVBQUlDLENBQUosRUFBT0wsQ0FBUCxDQUFYO0FBQ0FKLEtBQUMsR0FBR08sT0FBTyxDQUFDQyxDQUFELEVBQUlDLENBQUosRUFBT0wsQ0FBQyxHQUFHLElBQUksQ0FBZixDQUFYO0FBQ0Q7O0FBQ0Qsd0JBQWVOLENBQUMsR0FBRyxHQUFuQixjQUEwQkMsQ0FBQyxHQUFHLEdBQTlCLGNBQXFDQyxDQUFDLEdBQUcsR0FBekMsY0FBZ0RqRSxDQUFoRDtBQUNEOztBQUVNLFNBQVM0RSxXQUFULENBQXFCdkIsR0FBckIsRUFBMEI7QUFDL0IsTUFBSTNKLEVBQUUsQ0FBQzZILEdBQUgsQ0FBTzhCLEdBQVAsQ0FBSixFQUFpQixPQUFPRSxTQUFTLENBQUNGLEdBQUQsQ0FBaEI7QUFDakIsTUFBSTNKLEVBQUUsQ0FBQzBILEdBQUgsQ0FBT2lDLEdBQVAsQ0FBSixFQUFpQixPQUFPSyxTQUFTLENBQUNMLEdBQUQsQ0FBaEI7QUFDakIsTUFBSTNKLEVBQUUsQ0FBQzhILEdBQUgsQ0FBTzZCLEdBQVAsQ0FBSixFQUFpQixPQUFPYyxTQUFTLENBQUNkLEdBQUQsQ0FBaEI7QUFDbEI7QUFFTSxTQUFTd0Isd0JBQVQsQ0FBa0N2RCxJQUFsQyxFQUF3QztBQUM3QyxTQUFPQSxJQUFJLENBQUN1QyxPQUFMLENBQWEsZUFBYixFQUE4QixFQUE5QixFQUFrQ0EsT0FBbEMsQ0FBMEMsS0FBMUMsRUFBaUQsRUFBakQsRUFBcURBLE9BQXJELENBQTZELEtBQTdELEVBQW9FLEVBQXBFLEVBQXdFaUIsS0FBeEUsQ0FBOEUsR0FBOUUsRUFBbUZDLEdBQW5GLENBQXVGLFVBQUExUCxDQUFDO0FBQUEsV0FBSTZPLFFBQVEsQ0FBQzdPLENBQUQsQ0FBWjtBQUFBLEdBQXhGLENBQVA7QUFDRDtBQUlNLFNBQVMyRCxhQUFULENBQXVCNUQsUUFBdkIsRUFBbUQ7QUFBQSxNQUFsQjRQLFdBQWtCLHVFQUFKLEVBQUk7QUFDeEQsTUFBSWpNLFNBQVMsR0FBRyxFQUFoQjs7QUFDQSxPQUFLLElBQUk0RixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHdkosUUFBUSxDQUFDbUUsTUFBN0IsRUFBcUNvRixDQUFDLEVBQXRDLEVBQTBDO0FBQ3hDLFFBQUlzRyxHQUFHLEdBQUc3UCxRQUFRLENBQUN1SixDQUFDLEdBQUcsQ0FBTCxDQUFsQjtBQUNBLFFBQUl1RyxHQUFHLEdBQUc5UCxRQUFRLENBQUN1SixDQUFELENBQWxCO0FBQ0EsUUFBSXdHLEVBQUUsR0FBR0QsR0FBRyxDQUFDN1AsQ0FBSixHQUFRNFAsR0FBRyxDQUFDNVAsQ0FBckI7QUFDQSxRQUFJK1AsRUFBRSxHQUFHRixHQUFHLENBQUM1UCxDQUFKLEdBQVEyUCxHQUFHLENBQUMzUCxDQUFyQjs7QUFDQSxTQUFLLElBQUkrUCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxJQUFJTCxXQUFyQixFQUFrQ0ssQ0FBQyxFQUFuQyxFQUF1QztBQUNyQyxVQUFJaFEsQ0FBQyxHQUFHNFAsR0FBRyxDQUFDNVAsQ0FBSixHQUFROFAsRUFBRSxHQUFHRSxDQUFMLEdBQVNMLFdBQXpCO0FBQ0EsVUFBSTFQLENBQUMsR0FBRzJQLEdBQUcsQ0FBQzNQLENBQUosR0FBUThQLEVBQUUsR0FBR0MsQ0FBTCxHQUFTTCxXQUF6QjtBQUNBak0sZUFBUyxDQUFDeUYsSUFBVixDQUFlO0FBQ2JuSixTQUFDLEVBQUVBLENBRFU7QUFFYkMsU0FBQyxFQUFFQTtBQUZVLE9BQWY7QUFJRDtBQUNGOztBQUVEZ1EsU0FBTyxDQUFDQyxHQUFSLENBQVluUSxRQUFaLEVBQXNCMkQsU0FBdEI7QUFFQSxTQUFRQSxTQUFSO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEtNLFNBQVN5TSxVQUFULENBQW9CeFIsR0FBcEIsRUFBeUJxQixDQUF6QixFQUE0QkMsQ0FBNUIsRUFBK0JDLEtBQS9CLEVBQXNDVCxLQUF0QyxFQUE2QzJRLEtBQTdDLEVBQW9EO0FBQ3pEelIsS0FBRyxDQUFDZ0UsSUFBSjtBQUNBaEUsS0FBRyxDQUFDa0UsU0FBSixHQUFnQnBELEtBQWhCO0FBQ0FkLEtBQUcsQ0FBQzBSLFdBQUosR0FBa0JELEtBQWxCO0FBQ0F6UixLQUFHLENBQUNrSSxRQUFKLENBQWE3RyxDQUFDLEdBQUdFLEtBQUssR0FBRyxDQUF6QixFQUE0QkQsQ0FBQyxHQUFHQyxLQUFLLEdBQUcsQ0FBeEMsRUFBMkNBLEtBQTNDLEVBQWtEQSxLQUFsRDtBQUNBdkIsS0FBRyxDQUFDeUUsT0FBSjtBQUNEO0FBQ00sU0FBU2tOLFVBQVQsQ0FBb0IzUixHQUFwQixFQUF5QnFCLENBQXpCLEVBQTRCQyxDQUE1QixFQUErQkMsS0FBL0IsRUFBc0NULEtBQXRDLEVBQTZDMlEsS0FBN0MsRUFBb0Q7QUFDekR6UixLQUFHLENBQUNnRSxJQUFKO0FBQ0FoRSxLQUFHLENBQUNrRSxTQUFKLEdBQWdCcEQsS0FBaEI7QUFDQWQsS0FBRyxDQUFDMFIsV0FBSixHQUFrQkQsS0FBbEI7QUFDQXpSLEtBQUcsQ0FBQ2lFLFNBQUo7QUFDQWpFLEtBQUcsQ0FBQzRSLEdBQUosQ0FBUXZRLENBQVIsRUFBV0MsQ0FBWCxFQUFjQyxLQUFLLEdBQUcsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEJRLElBQUksQ0FBQ0MsRUFBTCxHQUFVLENBQXRDLEVBQXlDLElBQXpDO0FBQ0FoQyxLQUFHLENBQUN1RSxTQUFKO0FBQ0F2RSxLQUFHLENBQUN3RSxJQUFKO0FBQ0F4RSxLQUFHLENBQUN5RSxPQUFKO0FBQ0Q7QUFDTSxTQUFTb04sUUFBVCxDQUFrQjdSLEdBQWxCLEVBQXVCa08sRUFBdkIsRUFBMkJDLEVBQTNCLEVBQStCQyxFQUEvQixFQUFtQ0MsRUFBbkMsRUFBdUN5RCxXQUF2QyxFQUFvREMsV0FBcEQsRUFBaUU7QUFDdEUvUixLQUFHLENBQUNnRSxJQUFKO0FBQ0FoRSxLQUFHLENBQUNxRixXQUFKLEdBQWtCeU0sV0FBbEI7QUFDQTlSLEtBQUcsQ0FBQ3NGLFNBQUosR0FBZ0J5TSxXQUFoQjtBQUNBL1IsS0FBRyxDQUFDaUUsU0FBSjtBQUNBakUsS0FBRyxDQUFDMEUsTUFBSixDQUFXd0osRUFBWCxFQUFlQyxFQUFmO0FBQ0FuTyxLQUFHLENBQUM2RSxNQUFKLENBQVd1SixFQUFYLEVBQWVDLEVBQWY7QUFDQXJPLEtBQUcsQ0FBQ3VFLFNBQUo7QUFDQXZFLEtBQUcsQ0FBQ3dGLE1BQUo7QUFDQXhGLEtBQUcsQ0FBQ3lFLE9BQUo7QUFDRDtBQUVNLFNBQVN1TixRQUFULENBQWtCaFMsR0FBbEIsRUFBa0c7QUFBQSxNQUEzRWlTLFdBQTJFLHVFQUE3RCxNQUE2RDtBQUFBLE1BQXJENVEsQ0FBcUQ7QUFBQSxNQUFsREMsQ0FBa0Q7QUFBQSxNQUEvQ1IsS0FBK0MsdUVBQXZDLE1BQXVDO0FBQUEsTUFBL0JvUixRQUErQix1RUFBcEIsRUFBb0I7QUFBQSxNQUFoQkMsSUFBZ0IsdUVBQVQsT0FBUztBQUN2R25TLEtBQUcsQ0FBQ2dFLElBQUo7QUFDQWhFLEtBQUcsQ0FBQ2tFLFNBQUosR0FBZ0JwRCxLQUFoQjtBQUNBZCxLQUFHLENBQUNtUyxJQUFKLGFBQWNELFFBQWQsZ0JBQTRCQyxJQUE1QjtBQUNBblMsS0FBRyxDQUFDb1MsUUFBSixDQUFhSCxXQUFiLEVBQTBCNVEsQ0FBMUIsRUFBNkJDLENBQTdCO0FBQ0F0QixLQUFHLENBQUN5RSxPQUFKO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25DRDtBQUNBO0FBQ0E7QUFFQSxJQUFNNE4sc0JBQXNCLEdBQUc7QUFDN0JDLFlBQVUsRUFBRSxLQURpQjtBQUU3QkMsUUFBTSxFQUFFLEVBRnFCO0FBRzdCelIsT0FBSyxFQUFFLE1BSHNCO0FBSTdCMFIsUUFBTSxFQUFFLElBSnFCO0FBSzdCQyxRQUFNLEVBQUUsSUFMcUI7QUFNN0JDLGVBQWEsRUFBRSxDQU5jO0FBTzdCQyxlQUFhLEVBQUUsQ0FQYztBQVE3QkMsV0FBUyxFQUFFLENBUmtCO0FBUzdCQyxXQUFTLEVBQUU7QUFUa0IsQ0FBL0I7QUFZQSxJQUFNQyx1QkFBdUIsR0FBRztBQUM5QkMsU0FBTyxFQUFFLEVBRHFCO0FBRTlCQyxTQUFPLEVBQUUsRUFGcUI7QUFHOUJDLFFBQU0sRUFBRSxHQUhzQjtBQUk5QkMsTUFBSSxFQUFFLEVBSndCO0FBSzlCQyxhQUFXLEVBQUUsSUFMaUI7QUFNOUJyUyxPQUFLLEVBQUUsa0JBTnVCO0FBTzlCMk0sS0FBRyxFQUFFLEVBUHlCO0FBUTlCMkYsS0FBRyxFQUFFO0FBUnlCLENBQWhDOztJQVdNQyxnQjs7Ozs7QUFDSiw0QkFBWUMsTUFBWixFQUFvQjNULGFBQXBCLEVBQW1DQyxNQUFuQyxFQUEyQzZGLGFBQTNDLEVBQTBEO0FBQUE7O0FBQUE7O0FBQ3hELDhCQUFNNk4sTUFBTixFQUFjM1QsYUFBZCxFQUE2QkMsTUFBN0IsRUFBcUM2RixhQUFyQzs7QUFDQSxVQUFLM0YsSUFBTDs7QUFGd0Q7QUFHekQ7Ozs7V0FDRCxnQkFBTztBQUNMLFdBQUt5VCxRQUFMO0FBQ0EsV0FBS0MsV0FBTDtBQUNEOzs7V0FDRCxvQkFBVztBQUNULFVBQUk3UCxLQUFLLEdBQUcsSUFBWjtBQUNBLFdBQUs4UCxJQUFMLEdBQVk7QUFDVm5CLGtCQUFVLEVBQUUzTyxLQUFLLENBQUMvRCxNQUFOLENBQWEwUyxVQURmO0FBRVZ4UixhQUFLLEVBQUU2QyxLQUFLLENBQUMvRCxNQUFOLENBQWFrQixLQUZWO0FBR1Z5UixjQUFNLEVBQUU1TyxLQUFLLENBQUMvRCxNQUFOLENBQWEyUyxNQUhYO0FBSVY3TyxnQkFBUSxFQUFFO0FBQ1JyQyxXQUFDLEVBQUVzQyxLQUFLLENBQUMxRCxHQUFOLENBQVVzQixLQUFWLEdBQWtCLENBRGI7QUFFUkQsV0FBQyxFQUFFcUMsS0FBSyxDQUFDMUQsR0FBTixDQUFVdUIsTUFBVixHQUFtQjtBQUZkLFNBSkE7QUFRVmtTLGFBQUssRUFBRTtBQUNMclMsV0FBQyxFQUFFc0MsS0FBSyxDQUFDL0QsTUFBTixDQUFhNFMsTUFEWDtBQUVMbFIsV0FBQyxFQUFFcUMsS0FBSyxDQUFDL0QsTUFBTixDQUFhNlM7QUFGWCxTQVJHO0FBWVZrQixvQkFBWSxFQUFFO0FBQ1p0UyxXQUFDLEVBQUVzQyxLQUFLLENBQUMvRCxNQUFOLENBQWE4UyxhQURKO0FBRVpwUixXQUFDLEVBQUVxQyxLQUFLLENBQUMvRCxNQUFOLENBQWErUztBQUZKLFNBWko7QUFnQlZpQixnQkFBUSxFQUFFO0FBQ1J2UyxXQUFDLEVBQUVzQyxLQUFLLENBQUMvRCxNQUFOLENBQWFnVCxTQURSO0FBRVJ0UixXQUFDLEVBQUVxQyxLQUFLLENBQUMvRCxNQUFOLENBQWFpVDtBQUZSO0FBaEJBLE9BQVo7QUFxQkQ7OztXQUNELG9CQUFXO0FBQ1RsQiw0REFBVSxDQUFDLEtBQUszUixHQUFOLEVBQVcsS0FBS3lULElBQUwsQ0FBVS9QLFFBQVYsQ0FBbUJyQyxDQUE5QixFQUFpQyxLQUFLb1MsSUFBTCxDQUFVL1AsUUFBVixDQUFtQnBDLENBQXBELEVBQXVELEtBQUttUyxJQUFMLENBQVVsQixNQUFWLEdBQW1CLENBQTFFLEVBQTZFLEtBQUtrQixJQUFMLENBQVUzUyxLQUF2RixDQUFWO0FBQ0Q7OztXQUNELHVCQUFjO0FBQ1osVUFBSTZDLEtBQUssR0FBRyxJQUFaOztBQUNBLFVBQUlBLEtBQUssQ0FBQzhQLElBQU4sQ0FBV25CLFVBQVgsS0FBMEIsSUFBOUIsRUFBb0M7QUFDbEMzTyxhQUFLLENBQUNrUSxVQUFOLENBQWlCLHVCQUFqQjtBQUNELE9BRkQsTUFHSztBQUNIbFEsYUFBSyxDQUFDM0QsR0FBTixDQUFVbUksU0FBVixDQUFvQixDQUFwQixFQUF1QixDQUF2QixFQUEwQnhFLEtBQUssQ0FBQzFELEdBQU4sQ0FBVXNCLEtBQXBDLEVBQTJDb0MsS0FBSyxDQUFDMUQsR0FBTixDQUFVdUIsTUFBckQ7QUFDRDs7QUFDRG1DLFdBQUssQ0FBQzNELEdBQU4sQ0FBVW1DLFNBQVYsQ0FBb0J3QixLQUFLLENBQUMvRCxNQUFOLENBQWF1VCxXQUFqQyxFQUE4QyxDQUE5QyxFQUFpRCxDQUFqRDtBQUNBeFAsV0FBSyxDQUFDbVEsUUFBTjtBQUNBblEsV0FBSyxDQUFDb1EsZUFBTjtBQUNBcFEsV0FBSyxDQUFDcVEsWUFBTjtBQUNBclEsV0FBSyxDQUFDc1EsYUFBTjtBQUNBNU0sMkJBQXFCLENBQUMxRCxLQUFLLENBQUM2UCxXQUFOLENBQWtCVSxJQUFsQixDQUF1QnZRLEtBQXZCLENBQUQsQ0FBckI7QUFDRDs7O1dBRUQsd0JBQWU7QUFDYixVQUFJd1EsRUFBRSxHQUFHLEtBQUsvTSxXQUFkO0FBQ0EsV0FBS3FNLElBQUwsQ0FBVUMsS0FBVixDQUFnQnJTLENBQWhCLEdBQW9CLEtBQUtvUyxJQUFMLENBQVVDLEtBQVYsQ0FBZ0JyUyxDQUFoQixHQUFvQixLQUFLb1MsSUFBTCxDQUFVRyxRQUFWLENBQW1CdlMsQ0FBdkMsR0FBMkMsS0FBS29TLElBQUwsQ0FBVUUsWUFBVixDQUF1QnRTLENBQXZCLEdBQTJCOFMsRUFBMUY7QUFDQSxXQUFLVixJQUFMLENBQVVDLEtBQVYsQ0FBZ0JwUyxDQUFoQixHQUFvQixLQUFLbVMsSUFBTCxDQUFVQyxLQUFWLENBQWdCcFMsQ0FBaEIsR0FBb0IsS0FBS21TLElBQUwsQ0FBVUcsUUFBVixDQUFtQnRTLENBQXZDLEdBQTJDLEtBQUttUyxJQUFMLENBQVVFLFlBQVYsQ0FBdUJyUyxDQUF2QixHQUEyQjZTLEVBQTFGO0FBQ0Q7OztXQUVELDJCQUFrQjtBQUNoQixVQUFJQSxFQUFFLEdBQUcsS0FBSy9NLFdBQWQ7QUFDQSxXQUFLcU0sSUFBTCxDQUFVL1AsUUFBVixDQUFtQnJDLENBQW5CLElBQXdCLEtBQUtvUyxJQUFMLENBQVVDLEtBQVYsQ0FBZ0JyUyxDQUFoQixHQUFvQjhTLEVBQTVDO0FBQ0EsV0FBS1YsSUFBTCxDQUFVL1AsUUFBVixDQUFtQnBDLENBQW5CLElBQXdCLEtBQUttUyxJQUFMLENBQVVDLEtBQVYsQ0FBZ0JwUyxDQUFoQixHQUFvQjZTLEVBQTVDO0FBQ0Q7OztXQUNELHlCQUFnQjtBQUNkLFVBQUlWLElBQUksR0FBRyxLQUFLQSxJQUFoQjtBQUNBLFVBQUlILE1BQU0sR0FBRyxLQUFLclQsR0FBbEIsQ0FGYyxDQUdkOztBQUNBLFVBQUl3VCxJQUFJLENBQUMvUCxRQUFMLENBQWNwQyxDQUFkLEdBQWtCbVMsSUFBSSxDQUFDbEIsTUFBdkIsR0FBZ0NlLE1BQU0sQ0FBQzlSLE1BQTNDLEVBQW1EO0FBQ2pEO0FBQ0EsWUFBSWlTLElBQUksQ0FBQ0MsS0FBTCxDQUFXcFMsQ0FBWCxHQUFlLENBQW5CLEVBQXNCO0FBQ3BCbVMsY0FBSSxDQUFDQyxLQUFMLENBQVdwUyxDQUFYLEdBQWUsQ0FBQ21TLElBQUksQ0FBQ0MsS0FBTCxDQUFXcFMsQ0FBM0I7QUFDRDtBQUNGLE9BTEQsQ0FNQTtBQU5BLFdBT0ssSUFBSW1TLElBQUksQ0FBQy9QLFFBQUwsQ0FBY3BDLENBQWQsR0FBa0JtUyxJQUFJLENBQUNsQixNQUF2QixHQUFnQyxDQUFwQyxFQUF1QztBQUMxQztBQUNBLGNBQUlrQixJQUFJLENBQUNDLEtBQUwsQ0FBV3BTLENBQVgsR0FBZSxDQUFuQixFQUFzQjtBQUNwQm1TLGdCQUFJLENBQUNDLEtBQUwsQ0FBV3BTLENBQVgsR0FBZSxDQUFDbVMsSUFBSSxDQUFDQyxLQUFMLENBQVdwUyxDQUEzQjtBQUNEO0FBQ0YsU0FoQmEsQ0FrQmQ7OztBQUNBLFVBQUltUyxJQUFJLENBQUMvUCxRQUFMLENBQWNyQyxDQUFkLEdBQWtCb1MsSUFBSSxDQUFDbEIsTUFBdkIsR0FBZ0NlLE1BQU0sQ0FBQy9SLEtBQTNDLEVBQWtEO0FBQ2hELFlBQUlrUyxJQUFJLENBQUNDLEtBQUwsQ0FBV3JTLENBQVgsR0FBZSxDQUFuQixFQUFzQjtBQUNwQm9TLGNBQUksQ0FBQ0MsS0FBTCxDQUFXclMsQ0FBWCxHQUFlLENBQUNvUyxJQUFJLENBQUNDLEtBQUwsQ0FBV3JTLENBQTNCO0FBQ0Q7QUFDRixPQUpELENBS0E7QUFMQSxXQU1LLElBQUlvUyxJQUFJLENBQUMvUCxRQUFMLENBQWNyQyxDQUFkLEdBQWtCb1MsSUFBSSxDQUFDbEIsTUFBdkIsR0FBZ0MsQ0FBcEMsRUFBdUM7QUFDMUMsY0FBSWtCLElBQUksQ0FBQ0MsS0FBTCxDQUFXclMsQ0FBWCxHQUFlLENBQW5CLEVBQXNCO0FBQ3BCb1MsZ0JBQUksQ0FBQ0MsS0FBTCxDQUFXclMsQ0FBWCxHQUFlLENBQUNvUyxJQUFJLENBQUNDLEtBQUwsQ0FBV3JTLENBQTNCO0FBQ0Q7QUFDRjtBQUVGOzs7O0VBOUY0QnFCLHFEOztJQWlHekIwUixZOzs7OztBQUNKLHdCQUFZZCxNQUFaLEVBQW9CM1QsYUFBcEIsRUFBbUNDLE1BQW5DLEVBQTJDNkYsYUFBM0MsRUFBMEQ7QUFBQTs7QUFBQTs7QUFDeEQsZ0NBQU02TixNQUFOLEVBQWMzVCxhQUFkLEVBQTZCQyxNQUE3QixFQUFxQzZGLGFBQXJDO0FBQ0EsV0FBSzRPLFNBQUwsR0FBaUIsT0FBS3pVLE1BQUwsQ0FBWW1ULE9BQTdCO0FBQ0EsV0FBS3VCLE1BQUwsR0FBYyxJQUFkOztBQUNBLFdBQUt4VSxJQUFMOztBQUp3RDtBQUt6RDs7OztXQUNELGdCQUFPO0FBQ0wsV0FBS1MsT0FBTDtBQUNEOzs7V0FFRCxtQkFBVTtBQUNSLFVBQUlvRCxLQUFLLEdBQUcsSUFBWjtBQUNBLFdBQUsxQixRQUFMLEdBQWdCQyxXQUFXLENBQUMsWUFBTTtBQUNoQ3lCLGFBQUssQ0FBQzRRLEtBQU47QUFDQTVRLGFBQUssQ0FBQzZRLFNBQU47QUFDRCxPQUgwQixFQUd4QixLQUFLNVUsTUFBTCxDQUFZcVQsTUFIWSxDQUEzQjtBQUlEOzs7V0FFRCxxQkFBWTtBQUNWLFdBQUssSUFBSXRJLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLElBQUksS0FBSy9LLE1BQUwsQ0FBWTZOLEdBQWpDLEVBQXNDOUMsQ0FBQyxFQUF2QyxFQUEyQztBQUN6QyxhQUFLLElBQUkwRyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxJQUFJLEtBQUt6UixNQUFMLENBQVk2TixHQUFqQyxFQUFzQzRELENBQUMsRUFBdkMsRUFBMkM7QUFDekNNLGdFQUFVLENBQ1IsS0FBSzNSLEdBREcsRUFFUjJLLENBQUMsR0FBRyxLQUFLMUssR0FBTCxDQUFTc0IsS0FBYixHQUFxQixLQUFLM0IsTUFBTCxDQUFZNk4sR0FGekIsRUFHUjRELENBQUMsR0FBRyxLQUFLcFIsR0FBTCxDQUFTdUIsTUFBYixHQUFzQixLQUFLNUIsTUFBTCxDQUFZd1QsR0FIMUIsRUFJUixLQUFLaUIsU0FKRyxFQUtSLEtBQUt6VSxNQUFMLENBQVlrQixLQUxKLEVBTVIsQ0FOUSxDQUFWO0FBUUQ7QUFDRjs7QUFDRCxVQUFJLEtBQUt1VCxTQUFMLEdBQWlCLENBQWpCLEdBQXFCLEtBQUt6VSxNQUFMLENBQVltVCxPQUFyQyxFQUE4QztBQUM1QyxhQUFLdUIsTUFBTCxHQUFjLElBQWQ7QUFDRCxPQUZELE1BR0ssSUFBSSxLQUFLRCxTQUFMLEdBQWlCLENBQWpCLEdBQXFCLEtBQUt6VSxNQUFMLENBQVlvVCxPQUFyQyxFQUE4QztBQUNqRCxhQUFLc0IsTUFBTCxHQUFjLEtBQWQ7QUFDRDs7QUFDRCxVQUFJLEtBQUtBLE1BQVQsRUFBaUI7QUFDZixhQUFLRCxTQUFMLElBQWtCLEtBQUt6VSxNQUFMLENBQVlzVCxJQUE5QjtBQUNELE9BRkQsTUFHSztBQUNILGFBQUttQixTQUFMLElBQWtCLEtBQUt6VSxNQUFMLENBQVlzVCxJQUE5QjtBQUNEO0FBQ0Y7Ozs7RUE1Q3dCeFEscUQ7O0FBK0NwQixTQUFTK1IsVUFBVCxHQUFzQjtBQUMzQixNQUFJQyxhQUFhLEdBQUd6TCwyQ0FBQyxDQUFDLGlCQUFELENBQXJCO0FBQ0EsTUFBSTBMLGFBQWEsR0FBRzdSLFFBQVEsQ0FBQzJELGFBQVQsQ0FBdUIsUUFBdkIsQ0FBcEI7QUFFQSxNQUFJbU8sYUFBYSxHQUFHL1IsK0NBQUksQ0FBQ3VSLFlBQUQsRUFBZXRCLHVCQUFmLEVBQXdDLEVBQXhDLEVBQTRDNkIsYUFBNUMsRUFBMkRELGFBQTNELENBQXhCO0FBQ0FFLGVBQWEsQ0FBQzVMLE9BQWQsQ0FBc0J0SSxJQUF0QixDQUEyQixVQUFDb0ksUUFBRCxFQUFjO0FBQ3ZDakcsbURBQUksQ0FBQ3dRLGdCQUFELEVBQW1CaEIsc0JBQW5CLEVBQTJDO0FBQzdDQyxnQkFBVSxFQUFFLElBRGlDO0FBRTdDQyxZQUFNLEVBQUUsRUFGcUM7QUFHN0N6UixXQUFLLEVBQUUsb0JBSHNDO0FBSTdDMFIsWUFBTSxFQUFFLElBSnFDO0FBSzdDVyxpQkFBVyxFQUFFckssUUFBUSxDQUFDN0ksR0FMdUI7QUFNN0N3UyxZQUFNLEVBQUUsSUFOcUM7QUFPN0NDLG1CQUFhLEVBQUUsQ0FQOEI7QUFRN0NDLG1CQUFhLEVBQUUsR0FSOEI7QUFTN0NDLGVBQVMsRUFBRTtBQVRrQyxLQUEzQyxFQVVEOEIsYUFWQyxDQUFKLENBVWtCOUwsT0FWbEI7QUFXRCxHQVpEO0FBYUFnTSxlQUFhLENBQUNoTSxPQUFkO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7OztBQzlMTSxJQUFNaU0sV0FBVyxHQUFHO0FBQ3pCcEIsTUFBSSxFQUFFO0FBQ0pDLFNBQUssRUFBRTtBQUNMclMsT0FBQyxFQUFFLENBREU7QUFFTEMsT0FBQyxFQUFFO0FBRkUsS0FESDtBQUtKd1QsWUFBUSxFQUFFO0FBQ1J6VCxPQUFDLEVBQUUsQ0FESztBQUVSQyxPQUFDLEVBQUU7QUFGSztBQUxOLEdBRG1CO0FBV3pCeVQsU0FBTyxFQUFFO0FBWGdCLENBQXBCO0FBZ0JBLElBQU1DLFNBQVMsR0FBRztBQUN2Qi9SLE1BQUksRUFBRSxLQURpQjtBQUV2QmdTLFFBQU0sRUFBRTtBQUZlLENBQWxCLEM7Ozs7Ozs7Ozs7QUNmUDtBQUNBO0FBQ0E7QUFFQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCQyxPQUFqQjtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsT0FBVCxDQUFpQkMsSUFBakIsRUFBdUI7QUFDckJBLE1BQUksR0FBR0EsSUFBSSxJQUFJLEVBQWY7QUFDQSxPQUFLQyxFQUFMLEdBQVVELElBQUksQ0FBQ3hILEdBQUwsSUFBWSxHQUF0QjtBQUNBLE9BQUtDLEdBQUwsR0FBV3VILElBQUksQ0FBQ3ZILEdBQUwsSUFBWSxLQUF2QjtBQUNBLE9BQUt5SCxNQUFMLEdBQWNGLElBQUksQ0FBQ0UsTUFBTCxJQUFlLENBQTdCO0FBQ0EsT0FBS0MsTUFBTCxHQUFjSCxJQUFJLENBQUNHLE1BQUwsR0FBYyxDQUFkLElBQW1CSCxJQUFJLENBQUNHLE1BQUwsSUFBZSxDQUFsQyxHQUFzQ0gsSUFBSSxDQUFDRyxNQUEzQyxHQUFvRCxDQUFsRTtBQUNBLE9BQUtDLFFBQUwsR0FBZ0IsQ0FBaEI7QUFDRDtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUFMLE9BQU8sQ0FBQ2hKLFNBQVIsQ0FBa0J0QixRQUFsQixHQUE2QixZQUFVO0FBQ3JDLE1BQUl3SyxFQUFFLEdBQUcsS0FBS0EsRUFBTCxHQUFVdlQsSUFBSSxDQUFDMlQsR0FBTCxDQUFTLEtBQUtILE1BQWQsRUFBc0IsS0FBS0UsUUFBTCxFQUF0QixDQUFuQjs7QUFDQSxNQUFJLEtBQUtELE1BQVQsRUFBaUI7QUFDZixRQUFJRyxJQUFJLEdBQUk1VCxJQUFJLENBQUNpTSxNQUFMLEVBQVo7QUFDQSxRQUFJNEgsU0FBUyxHQUFHN1QsSUFBSSxDQUFDOFQsS0FBTCxDQUFXRixJQUFJLEdBQUcsS0FBS0gsTUFBWixHQUFxQkYsRUFBaEMsQ0FBaEI7QUFDQUEsTUFBRSxHQUFHLENBQUN2VCxJQUFJLENBQUM4VCxLQUFMLENBQVdGLElBQUksR0FBRyxFQUFsQixJQUF3QixDQUF6QixLQUErQixDQUEvQixHQUFvQ0wsRUFBRSxHQUFHTSxTQUF6QyxHQUFxRE4sRUFBRSxHQUFHTSxTQUEvRDtBQUNEOztBQUNELFNBQU83VCxJQUFJLENBQUM4TCxHQUFMLENBQVN5SCxFQUFULEVBQWEsS0FBS3hILEdBQWxCLElBQXlCLENBQWhDO0FBQ0QsQ0FSRDtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBc0gsT0FBTyxDQUFDaEosU0FBUixDQUFrQjBKLEtBQWxCLEdBQTBCLFlBQVU7QUFDbEMsT0FBS0wsUUFBTCxHQUFnQixDQUFoQjtBQUNELENBRkQ7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQUwsT0FBTyxDQUFDaEosU0FBUixDQUFrQjJKLE1BQWxCLEdBQTJCLFVBQVNsSSxHQUFULEVBQWE7QUFDdEMsT0FBS3lILEVBQUwsR0FBVXpILEdBQVY7QUFDRCxDQUZEO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUF1SCxPQUFPLENBQUNoSixTQUFSLENBQWtCNEosTUFBbEIsR0FBMkIsVUFBU2xJLEdBQVQsRUFBYTtBQUN0QyxPQUFLQSxHQUFMLEdBQVdBLEdBQVg7QUFDRCxDQUZEO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUFzSCxPQUFPLENBQUNoSixTQUFSLENBQWtCNkosU0FBbEIsR0FBOEIsVUFBU1QsTUFBVCxFQUFnQjtBQUM1QyxPQUFLQSxNQUFMLEdBQWNBLE1BQWQ7QUFDRCxDQUZELEM7Ozs7Ozs7Ozs7QUNqRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLFVBQVNVLEtBQVQsRUFBZTtBQUNkOztBQUVBZixnQkFBQSxHQUFpQixVQUFTZ0IsV0FBVCxFQUFzQjtBQUNyQyxRQUFJQyxLQUFLLEdBQUcsSUFBSUMsVUFBSixDQUFlRixXQUFmLENBQVo7QUFBQSxRQUNBeEwsQ0FEQTtBQUFBLFFBQ0cyTCxHQUFHLEdBQUdGLEtBQUssQ0FBQzdRLE1BRGY7QUFBQSxRQUN1QmdSLE1BQU0sR0FBRyxFQURoQzs7QUFHQSxTQUFLNUwsQ0FBQyxHQUFHLENBQVQsRUFBWUEsQ0FBQyxHQUFHMkwsR0FBaEIsRUFBcUIzTCxDQUFDLElBQUUsQ0FBeEIsRUFBMkI7QUFDekI0TCxZQUFNLElBQUlMLEtBQUssQ0FBQ0UsS0FBSyxDQUFDekwsQ0FBRCxDQUFMLElBQVksQ0FBYixDQUFmO0FBQ0E0TCxZQUFNLElBQUlMLEtBQUssQ0FBRSxDQUFDRSxLQUFLLENBQUN6TCxDQUFELENBQUwsR0FBVyxDQUFaLEtBQWtCLENBQW5CLEdBQXlCeUwsS0FBSyxDQUFDekwsQ0FBQyxHQUFHLENBQUwsQ0FBTCxJQUFnQixDQUExQyxDQUFmO0FBQ0E0TCxZQUFNLElBQUlMLEtBQUssQ0FBRSxDQUFDRSxLQUFLLENBQUN6TCxDQUFDLEdBQUcsQ0FBTCxDQUFMLEdBQWUsRUFBaEIsS0FBdUIsQ0FBeEIsR0FBOEJ5TCxLQUFLLENBQUN6TCxDQUFDLEdBQUcsQ0FBTCxDQUFMLElBQWdCLENBQS9DLENBQWY7QUFDQTRMLFlBQU0sSUFBSUwsS0FBSyxDQUFDRSxLQUFLLENBQUN6TCxDQUFDLEdBQUcsQ0FBTCxDQUFMLEdBQWUsRUFBaEIsQ0FBZjtBQUNEOztBQUVELFFBQUsyTCxHQUFHLEdBQUcsQ0FBUCxLQUFjLENBQWxCLEVBQXFCO0FBQ25CQyxZQUFNLEdBQUdBLE1BQU0sQ0FBQ0MsU0FBUCxDQUFpQixDQUFqQixFQUFvQkQsTUFBTSxDQUFDaFIsTUFBUCxHQUFnQixDQUFwQyxJQUF5QyxHQUFsRDtBQUNELEtBRkQsTUFFTyxJQUFJK1EsR0FBRyxHQUFHLENBQU4sS0FBWSxDQUFoQixFQUFtQjtBQUN4QkMsWUFBTSxHQUFHQSxNQUFNLENBQUNDLFNBQVAsQ0FBaUIsQ0FBakIsRUFBb0JELE1BQU0sQ0FBQ2hSLE1BQVAsR0FBZ0IsQ0FBcEMsSUFBeUMsSUFBbEQ7QUFDRDs7QUFFRCxXQUFPZ1IsTUFBUDtBQUNELEdBbEJEOztBQW9CQXBCLGdCQUFBLEdBQWtCLFVBQVNvQixNQUFULEVBQWlCO0FBQ2pDLFFBQUlFLFlBQVksR0FBR0YsTUFBTSxDQUFDaFIsTUFBUCxHQUFnQixJQUFuQztBQUFBLFFBQ0ErUSxHQUFHLEdBQUdDLE1BQU0sQ0FBQ2hSLE1BRGI7QUFBQSxRQUNxQm9GLENBRHJCO0FBQUEsUUFDd0I4RixDQUFDLEdBQUcsQ0FENUI7QUFBQSxRQUVBaUcsUUFGQTtBQUFBLFFBRVVDLFFBRlY7QUFBQSxRQUVvQkMsUUFGcEI7QUFBQSxRQUU4QkMsUUFGOUI7O0FBSUEsUUFBSU4sTUFBTSxDQUFDQSxNQUFNLENBQUNoUixNQUFQLEdBQWdCLENBQWpCLENBQU4sS0FBOEIsR0FBbEMsRUFBdUM7QUFDckNrUixrQkFBWTs7QUFDWixVQUFJRixNQUFNLENBQUNBLE1BQU0sQ0FBQ2hSLE1BQVAsR0FBZ0IsQ0FBakIsQ0FBTixLQUE4QixHQUFsQyxFQUF1QztBQUNyQ2tSLG9CQUFZO0FBQ2I7QUFDRjs7QUFFRCxRQUFJTixXQUFXLEdBQUcsSUFBSVcsV0FBSixDQUFnQkwsWUFBaEIsQ0FBbEI7QUFBQSxRQUNBTCxLQUFLLEdBQUcsSUFBSUMsVUFBSixDQUFlRixXQUFmLENBRFI7O0FBR0EsU0FBS3hMLENBQUMsR0FBRyxDQUFULEVBQVlBLENBQUMsR0FBRzJMLEdBQWhCLEVBQXFCM0wsQ0FBQyxJQUFFLENBQXhCLEVBQTJCO0FBQ3pCK0wsY0FBUSxHQUFHUixLQUFLLENBQUMzSixPQUFOLENBQWNnSyxNQUFNLENBQUM1TCxDQUFELENBQXBCLENBQVg7QUFDQWdNLGNBQVEsR0FBR1QsS0FBSyxDQUFDM0osT0FBTixDQUFjZ0ssTUFBTSxDQUFDNUwsQ0FBQyxHQUFDLENBQUgsQ0FBcEIsQ0FBWDtBQUNBaU0sY0FBUSxHQUFHVixLQUFLLENBQUMzSixPQUFOLENBQWNnSyxNQUFNLENBQUM1TCxDQUFDLEdBQUMsQ0FBSCxDQUFwQixDQUFYO0FBQ0FrTSxjQUFRLEdBQUdYLEtBQUssQ0FBQzNKLE9BQU4sQ0FBY2dLLE1BQU0sQ0FBQzVMLENBQUMsR0FBQyxDQUFILENBQXBCLENBQVg7QUFFQXlMLFdBQUssQ0FBQzNGLENBQUMsRUFBRixDQUFMLEdBQWNpRyxRQUFRLElBQUksQ0FBYixHQUFtQkMsUUFBUSxJQUFJLENBQTVDO0FBQ0FQLFdBQUssQ0FBQzNGLENBQUMsRUFBRixDQUFMLEdBQWMsQ0FBQ2tHLFFBQVEsR0FBRyxFQUFaLEtBQW1CLENBQXBCLEdBQTBCQyxRQUFRLElBQUksQ0FBbkQ7QUFDQVIsV0FBSyxDQUFDM0YsQ0FBQyxFQUFGLENBQUwsR0FBYyxDQUFDbUcsUUFBUSxHQUFHLENBQVosS0FBa0IsQ0FBbkIsR0FBeUJDLFFBQVEsR0FBRyxFQUFqRDtBQUNEOztBQUVELFdBQU9WLFdBQVA7QUFDRCxHQTNCRDtBQTRCRCxDQW5ERCxFQW1ERyxrRUFuREgsRTs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUVBLElBQUksSUFBSixFQUFtQztBQUNqQ2pCLFFBQU0sQ0FBQ0MsT0FBUCxHQUFpQjRCLE9BQWpCO0FBQ0Q7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxTQUFTQSxPQUFULENBQWlCNUssR0FBakIsRUFBc0I7QUFDcEIsTUFBSUEsR0FBSixFQUFTLE9BQU82SyxLQUFLLENBQUM3SyxHQUFELENBQVo7QUFDVjs7QUFBQTtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM2SyxLQUFULENBQWU3SyxHQUFmLEVBQW9CO0FBQ2xCLE9BQUssSUFBSXVCLEdBQVQsSUFBZ0JxSixPQUFPLENBQUMzSyxTQUF4QixFQUFtQztBQUNqQ0QsT0FBRyxDQUFDdUIsR0FBRCxDQUFILEdBQVdxSixPQUFPLENBQUMzSyxTQUFSLENBQWtCc0IsR0FBbEIsQ0FBWDtBQUNEOztBQUNELFNBQU92QixHQUFQO0FBQ0Q7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTRLLE9BQU8sQ0FBQzNLLFNBQVIsQ0FBa0I2SyxFQUFsQixHQUNBRixPQUFPLENBQUMzSyxTQUFSLENBQWtCdEYsZ0JBQWxCLEdBQXFDLFVBQVNvUSxLQUFULEVBQWdCQyxFQUFoQixFQUFtQjtBQUN0RCxPQUFLQyxVQUFMLEdBQWtCLEtBQUtBLFVBQUwsSUFBbUIsRUFBckM7QUFDQSxHQUFDLEtBQUtBLFVBQUwsQ0FBZ0IsTUFBTUYsS0FBdEIsSUFBK0IsS0FBS0UsVUFBTCxDQUFnQixNQUFNRixLQUF0QixLQUFnQyxFQUFoRSxFQUNHMU0sSUFESCxDQUNRMk0sRUFEUjtBQUVBLFNBQU8sSUFBUDtBQUNELENBTkQ7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBSixPQUFPLENBQUMzSyxTQUFSLENBQWtCaUwsSUFBbEIsR0FBeUIsVUFBU0gsS0FBVCxFQUFnQkMsRUFBaEIsRUFBbUI7QUFDMUMsV0FBU0YsRUFBVCxHQUFjO0FBQ1osU0FBS0ssR0FBTCxDQUFTSixLQUFULEVBQWdCRCxFQUFoQjtBQUNBRSxNQUFFLENBQUNyTCxLQUFILENBQVMsSUFBVCxFQUFlRCxTQUFmO0FBQ0Q7O0FBRURvTCxJQUFFLENBQUNFLEVBQUgsR0FBUUEsRUFBUjtBQUNBLE9BQUtGLEVBQUwsQ0FBUUMsS0FBUixFQUFlRCxFQUFmO0FBQ0EsU0FBTyxJQUFQO0FBQ0QsQ0FURDtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUFGLE9BQU8sQ0FBQzNLLFNBQVIsQ0FBa0JrTCxHQUFsQixHQUNBUCxPQUFPLENBQUMzSyxTQUFSLENBQWtCbUwsY0FBbEIsR0FDQVIsT0FBTyxDQUFDM0ssU0FBUixDQUFrQm9MLGtCQUFsQixHQUNBVCxPQUFPLENBQUMzSyxTQUFSLENBQWtCcUwsbUJBQWxCLEdBQXdDLFVBQVNQLEtBQVQsRUFBZ0JDLEVBQWhCLEVBQW1CO0FBQ3pELE9BQUtDLFVBQUwsR0FBa0IsS0FBS0EsVUFBTCxJQUFtQixFQUFyQyxDQUR5RCxDQUd6RDs7QUFDQSxNQUFJLEtBQUt2TCxTQUFTLENBQUN0RyxNQUFuQixFQUEyQjtBQUN6QixTQUFLNlIsVUFBTCxHQUFrQixFQUFsQjtBQUNBLFdBQU8sSUFBUDtBQUNELEdBUHdELENBU3pEOzs7QUFDQSxNQUFJTSxTQUFTLEdBQUcsS0FBS04sVUFBTCxDQUFnQixNQUFNRixLQUF0QixDQUFoQjtBQUNBLE1BQUksQ0FBQ1EsU0FBTCxFQUFnQixPQUFPLElBQVAsQ0FYeUMsQ0FhekQ7O0FBQ0EsTUFBSSxLQUFLN0wsU0FBUyxDQUFDdEcsTUFBbkIsRUFBMkI7QUFDekIsV0FBTyxLQUFLNlIsVUFBTCxDQUFnQixNQUFNRixLQUF0QixDQUFQO0FBQ0EsV0FBTyxJQUFQO0FBQ0QsR0FqQndELENBbUJ6RDs7O0FBQ0EsTUFBSW5NLEVBQUo7O0FBQ0EsT0FBSyxJQUFJSixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHK00sU0FBUyxDQUFDblMsTUFBOUIsRUFBc0NvRixDQUFDLEVBQXZDLEVBQTJDO0FBQ3pDSSxNQUFFLEdBQUcyTSxTQUFTLENBQUMvTSxDQUFELENBQWQ7O0FBQ0EsUUFBSUksRUFBRSxLQUFLb00sRUFBUCxJQUFhcE0sRUFBRSxDQUFDb00sRUFBSCxLQUFVQSxFQUEzQixFQUErQjtBQUM3Qk8sZUFBUyxDQUFDQyxNQUFWLENBQWlCaE4sQ0FBakIsRUFBb0IsQ0FBcEI7QUFDQTtBQUNEO0FBQ0YsR0EzQndELENBNkJ6RDtBQUNBOzs7QUFDQSxNQUFJK00sU0FBUyxDQUFDblMsTUFBVixLQUFxQixDQUF6QixFQUE0QjtBQUMxQixXQUFPLEtBQUs2UixVQUFMLENBQWdCLE1BQU1GLEtBQXRCLENBQVA7QUFDRDs7QUFFRCxTQUFPLElBQVA7QUFDRCxDQXZDRDtBQXlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUFILE9BQU8sQ0FBQzNLLFNBQVIsQ0FBa0J4QyxJQUFsQixHQUF5QixVQUFTc04sS0FBVCxFQUFlO0FBQ3RDLE9BQUtFLFVBQUwsR0FBa0IsS0FBS0EsVUFBTCxJQUFtQixFQUFyQztBQUVBLE1BQUl4TCxJQUFJLEdBQUcsSUFBSUssS0FBSixDQUFVSixTQUFTLENBQUN0RyxNQUFWLEdBQW1CLENBQTdCLENBQVg7QUFBQSxNQUNJbVMsU0FBUyxHQUFHLEtBQUtOLFVBQUwsQ0FBZ0IsTUFBTUYsS0FBdEIsQ0FEaEI7O0FBR0EsT0FBSyxJQUFJdk0sQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR2tCLFNBQVMsQ0FBQ3RHLE1BQTlCLEVBQXNDb0YsQ0FBQyxFQUF2QyxFQUEyQztBQUN6Q2lCLFFBQUksQ0FBQ2pCLENBQUMsR0FBRyxDQUFMLENBQUosR0FBY2tCLFNBQVMsQ0FBQ2xCLENBQUQsQ0FBdkI7QUFDRDs7QUFFRCxNQUFJK00sU0FBSixFQUFlO0FBQ2JBLGFBQVMsR0FBR0EsU0FBUyxDQUFDRSxLQUFWLENBQWdCLENBQWhCLENBQVo7O0FBQ0EsU0FBSyxJQUFJak4sQ0FBQyxHQUFHLENBQVIsRUFBVzJMLEdBQUcsR0FBR29CLFNBQVMsQ0FBQ25TLE1BQWhDLEVBQXdDb0YsQ0FBQyxHQUFHMkwsR0FBNUMsRUFBaUQsRUFBRTNMLENBQW5ELEVBQXNEO0FBQ3BEK00sZUFBUyxDQUFDL00sQ0FBRCxDQUFULENBQWFtQixLQUFiLENBQW1CLElBQW5CLEVBQXlCRixJQUF6QjtBQUNEO0FBQ0Y7O0FBRUQsU0FBTyxJQUFQO0FBQ0QsQ0FsQkQ7QUFvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBbUwsT0FBTyxDQUFDM0ssU0FBUixDQUFrQnlMLFNBQWxCLEdBQThCLFVBQVNYLEtBQVQsRUFBZTtBQUMzQyxPQUFLRSxVQUFMLEdBQWtCLEtBQUtBLFVBQUwsSUFBbUIsRUFBckM7QUFDQSxTQUFPLEtBQUtBLFVBQUwsQ0FBZ0IsTUFBTUYsS0FBdEIsS0FBZ0MsRUFBdkM7QUFDRCxDQUhEO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBSCxPQUFPLENBQUMzSyxTQUFSLENBQWtCMEwsWUFBbEIsR0FBaUMsVUFBU1osS0FBVCxFQUFlO0FBQzlDLFNBQU8sQ0FBQyxDQUFFLEtBQUtXLFNBQUwsQ0FBZVgsS0FBZixFQUFzQjNSLE1BQWhDO0FBQ0QsQ0FGRCxDOzs7Ozs7Ozs7Ozs7QUM1S0E7QUFDQTtBQUNBO0FBRUEsSUFBSStLLENBQUMsR0FBRyxJQUFSO0FBQ0EsSUFBSVIsQ0FBQyxHQUFHUSxDQUFDLEdBQUcsRUFBWjtBQUNBLElBQUlELENBQUMsR0FBR1AsQ0FBQyxHQUFHLEVBQVo7QUFDQSxJQUFJaUksQ0FBQyxHQUFHMUgsQ0FBQyxHQUFHLEVBQVo7QUFDQSxJQUFJMkgsQ0FBQyxHQUFHRCxDQUFDLEdBQUcsQ0FBWjtBQUNBLElBQUl6VyxDQUFDLEdBQUd5VyxDQUFDLEdBQUcsTUFBWjtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBN0MsTUFBTSxDQUFDQyxPQUFQLEdBQWlCLFVBQVM5RixHQUFULEVBQWM0SSxPQUFkLEVBQXVCO0FBQ3RDQSxTQUFPLEdBQUdBLE9BQU8sSUFBSSxFQUFyQjs7QUFDQSxNQUFJdkosSUFBSSxXQUFVVyxHQUFWLENBQVI7O0FBQ0EsTUFBSVgsSUFBSSxLQUFLLFFBQVQsSUFBcUJXLEdBQUcsQ0FBQzlKLE1BQUosR0FBYSxDQUF0QyxFQUF5QztBQUN2QyxXQUFPMlMsS0FBSyxDQUFDN0ksR0FBRCxDQUFaO0FBQ0QsR0FGRCxNQUVPLElBQUlYLElBQUksS0FBSyxRQUFULElBQXFCeUosUUFBUSxDQUFDOUksR0FBRCxDQUFqQyxFQUF3QztBQUM3QyxXQUFPNEksT0FBTyxDQUFDRyxJQUFSLEdBQWVDLE9BQU8sQ0FBQ2hKLEdBQUQsQ0FBdEIsR0FBOEJpSixRQUFRLENBQUNqSixHQUFELENBQTdDO0FBQ0Q7O0FBQ0QsUUFBTSxJQUFJa0osS0FBSixDQUNKLDBEQUNFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZXBKLEdBQWYsQ0FGRSxDQUFOO0FBSUQsQ0FaRDtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxTQUFTNkksS0FBVCxDQUFlbEwsR0FBZixFQUFvQjtBQUNsQkEsS0FBRyxHQUFHMEwsTUFBTSxDQUFDMUwsR0FBRCxDQUFaOztBQUNBLE1BQUlBLEdBQUcsQ0FBQ3pILE1BQUosR0FBYSxHQUFqQixFQUFzQjtBQUNwQjtBQUNEOztBQUNELE1BQUlvVCxLQUFLLEdBQUcsbUlBQW1JbEosSUFBbkksQ0FDVnpDLEdBRFUsQ0FBWjs7QUFHQSxNQUFJLENBQUMyTCxLQUFMLEVBQVk7QUFDVjtBQUNEOztBQUNELE1BQUlDLENBQUMsR0FBR0MsVUFBVSxDQUFDRixLQUFLLENBQUMsQ0FBRCxDQUFOLENBQWxCO0FBQ0EsTUFBSWpLLElBQUksR0FBRyxDQUFDaUssS0FBSyxDQUFDLENBQUQsQ0FBTCxJQUFZLElBQWIsRUFBbUJHLFdBQW5CLEVBQVg7O0FBQ0EsVUFBUXBLLElBQVI7QUFDRSxTQUFLLE9BQUw7QUFDQSxTQUFLLE1BQUw7QUFDQSxTQUFLLEtBQUw7QUFDQSxTQUFLLElBQUw7QUFDQSxTQUFLLEdBQUw7QUFDRSxhQUFPa0ssQ0FBQyxHQUFHdFgsQ0FBWDs7QUFDRixTQUFLLE9BQUw7QUFDQSxTQUFLLE1BQUw7QUFDQSxTQUFLLEdBQUw7QUFDRSxhQUFPc1gsQ0FBQyxHQUFHWixDQUFYOztBQUNGLFNBQUssTUFBTDtBQUNBLFNBQUssS0FBTDtBQUNBLFNBQUssR0FBTDtBQUNFLGFBQU9ZLENBQUMsR0FBR2IsQ0FBWDs7QUFDRixTQUFLLE9BQUw7QUFDQSxTQUFLLE1BQUw7QUFDQSxTQUFLLEtBQUw7QUFDQSxTQUFLLElBQUw7QUFDQSxTQUFLLEdBQUw7QUFDRSxhQUFPYSxDQUFDLEdBQUd2SSxDQUFYOztBQUNGLFNBQUssU0FBTDtBQUNBLFNBQUssUUFBTDtBQUNBLFNBQUssTUFBTDtBQUNBLFNBQUssS0FBTDtBQUNBLFNBQUssR0FBTDtBQUNFLGFBQU91SSxDQUFDLEdBQUc5SSxDQUFYOztBQUNGLFNBQUssU0FBTDtBQUNBLFNBQUssUUFBTDtBQUNBLFNBQUssTUFBTDtBQUNBLFNBQUssS0FBTDtBQUNBLFNBQUssR0FBTDtBQUNFLGFBQU84SSxDQUFDLEdBQUd0SSxDQUFYOztBQUNGLFNBQUssY0FBTDtBQUNBLFNBQUssYUFBTDtBQUNBLFNBQUssT0FBTDtBQUNBLFNBQUssTUFBTDtBQUNBLFNBQUssSUFBTDtBQUNFLGFBQU9zSSxDQUFQOztBQUNGO0FBQ0UsYUFBTzNRLFNBQVA7QUF4Q0o7QUEwQ0Q7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsU0FBU3FRLFFBQVQsQ0FBa0JoRCxFQUFsQixFQUFzQjtBQUNwQixNQUFJeUQsS0FBSyxHQUFHaFgsSUFBSSxDQUFDaVgsR0FBTCxDQUFTMUQsRUFBVCxDQUFaOztBQUNBLE1BQUl5RCxLQUFLLElBQUloQixDQUFiLEVBQWdCO0FBQ2QsV0FBT2hXLElBQUksQ0FBQ2tYLEtBQUwsQ0FBVzNELEVBQUUsR0FBR3lDLENBQWhCLElBQXFCLEdBQTVCO0FBQ0Q7O0FBQ0QsTUFBSWdCLEtBQUssSUFBSTFJLENBQWIsRUFBZ0I7QUFDZCxXQUFPdE8sSUFBSSxDQUFDa1gsS0FBTCxDQUFXM0QsRUFBRSxHQUFHakYsQ0FBaEIsSUFBcUIsR0FBNUI7QUFDRDs7QUFDRCxNQUFJMEksS0FBSyxJQUFJakosQ0FBYixFQUFnQjtBQUNkLFdBQU8vTixJQUFJLENBQUNrWCxLQUFMLENBQVczRCxFQUFFLEdBQUd4RixDQUFoQixJQUFxQixHQUE1QjtBQUNEOztBQUNELE1BQUlpSixLQUFLLElBQUl6SSxDQUFiLEVBQWdCO0FBQ2QsV0FBT3ZPLElBQUksQ0FBQ2tYLEtBQUwsQ0FBVzNELEVBQUUsR0FBR2hGLENBQWhCLElBQXFCLEdBQTVCO0FBQ0Q7O0FBQ0QsU0FBT2dGLEVBQUUsR0FBRyxJQUFaO0FBQ0Q7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsU0FBUytDLE9BQVQsQ0FBaUIvQyxFQUFqQixFQUFxQjtBQUNuQixNQUFJeUQsS0FBSyxHQUFHaFgsSUFBSSxDQUFDaVgsR0FBTCxDQUFTMUQsRUFBVCxDQUFaOztBQUNBLE1BQUl5RCxLQUFLLElBQUloQixDQUFiLEVBQWdCO0FBQ2QsV0FBT21CLE1BQU0sQ0FBQzVELEVBQUQsRUFBS3lELEtBQUwsRUFBWWhCLENBQVosRUFBZSxLQUFmLENBQWI7QUFDRDs7QUFDRCxNQUFJZ0IsS0FBSyxJQUFJMUksQ0FBYixFQUFnQjtBQUNkLFdBQU82SSxNQUFNLENBQUM1RCxFQUFELEVBQUt5RCxLQUFMLEVBQVkxSSxDQUFaLEVBQWUsTUFBZixDQUFiO0FBQ0Q7O0FBQ0QsTUFBSTBJLEtBQUssSUFBSWpKLENBQWIsRUFBZ0I7QUFDZCxXQUFPb0osTUFBTSxDQUFDNUQsRUFBRCxFQUFLeUQsS0FBTCxFQUFZakosQ0FBWixFQUFlLFFBQWYsQ0FBYjtBQUNEOztBQUNELE1BQUlpSixLQUFLLElBQUl6SSxDQUFiLEVBQWdCO0FBQ2QsV0FBTzRJLE1BQU0sQ0FBQzVELEVBQUQsRUFBS3lELEtBQUwsRUFBWXpJLENBQVosRUFBZSxRQUFmLENBQWI7QUFDRDs7QUFDRCxTQUFPZ0YsRUFBRSxHQUFHLEtBQVo7QUFDRDtBQUVEO0FBQ0E7QUFDQTs7O0FBRUEsU0FBUzRELE1BQVQsQ0FBZ0I1RCxFQUFoQixFQUFvQnlELEtBQXBCLEVBQTJCSCxDQUEzQixFQUE4QjNWLElBQTlCLEVBQW9DO0FBQ2xDLE1BQUlrVyxRQUFRLEdBQUdKLEtBQUssSUFBSUgsQ0FBQyxHQUFHLEdBQTVCO0FBQ0EsU0FBTzdXLElBQUksQ0FBQ2tYLEtBQUwsQ0FBVzNELEVBQUUsR0FBR3NELENBQWhCLElBQXFCLEdBQXJCLEdBQTJCM1YsSUFBM0IsSUFBbUNrVyxRQUFRLEdBQUcsR0FBSCxHQUFTLEVBQXBELENBQVA7QUFDRCxDOzs7Ozs7Ozs7O0FDaktEOztBQUVBO0FBQ0E7QUFDQTtBQUVBaEUsa0JBQUEsR0FBcUJpRSxVQUFyQjtBQUNBakUsWUFBQSxHQUFlblIsSUFBZjtBQUNBbVIsWUFBQSxHQUFla0UsSUFBZjtBQUNBbEUsaUJBQUEsR0FBb0JtRSxTQUFwQjtBQUNBbkUsZUFBQSxHQUFrQm9FLFlBQVksRUFBOUI7O0FBQ0FwRSxlQUFBLEdBQW1CLFlBQU07QUFDeEIsTUFBSXFFLE1BQU0sR0FBRyxLQUFiO0FBRUEsU0FBTyxZQUFNO0FBQ1osUUFBSSxDQUFDQSxNQUFMLEVBQWE7QUFDWkEsWUFBTSxHQUFHLElBQVQ7QUFDQWxJLGFBQU8sQ0FBQ21JLElBQVIsQ0FBYSx1SUFBYjtBQUNBO0FBQ0QsR0FMRDtBQU1BLENBVGlCLEVBQWxCO0FBV0E7QUFDQTtBQUNBOzs7QUFFQXRFLGNBQUEsR0FBaUIsQ0FDaEIsU0FEZ0IsRUFFaEIsU0FGZ0IsRUFHaEIsU0FIZ0IsRUFJaEIsU0FKZ0IsRUFLaEIsU0FMZ0IsRUFNaEIsU0FOZ0IsRUFPaEIsU0FQZ0IsRUFRaEIsU0FSZ0IsRUFTaEIsU0FUZ0IsRUFVaEIsU0FWZ0IsRUFXaEIsU0FYZ0IsRUFZaEIsU0FaZ0IsRUFhaEIsU0FiZ0IsRUFjaEIsU0FkZ0IsRUFlaEIsU0FmZ0IsRUFnQmhCLFNBaEJnQixFQWlCaEIsU0FqQmdCLEVBa0JoQixTQWxCZ0IsRUFtQmhCLFNBbkJnQixFQW9CaEIsU0FwQmdCLEVBcUJoQixTQXJCZ0IsRUFzQmhCLFNBdEJnQixFQXVCaEIsU0F2QmdCLEVBd0JoQixTQXhCZ0IsRUF5QmhCLFNBekJnQixFQTBCaEIsU0ExQmdCLEVBMkJoQixTQTNCZ0IsRUE0QmhCLFNBNUJnQixFQTZCaEIsU0E3QmdCLEVBOEJoQixTQTlCZ0IsRUErQmhCLFNBL0JnQixFQWdDaEIsU0FoQ2dCLEVBaUNoQixTQWpDZ0IsRUFrQ2hCLFNBbENnQixFQW1DaEIsU0FuQ2dCLEVBb0NoQixTQXBDZ0IsRUFxQ2hCLFNBckNnQixFQXNDaEIsU0F0Q2dCLEVBdUNoQixTQXZDZ0IsRUF3Q2hCLFNBeENnQixFQXlDaEIsU0F6Q2dCLEVBMENoQixTQTFDZ0IsRUEyQ2hCLFNBM0NnQixFQTRDaEIsU0E1Q2dCLEVBNkNoQixTQTdDZ0IsRUE4Q2hCLFNBOUNnQixFQStDaEIsU0EvQ2dCLEVBZ0RoQixTQWhEZ0IsRUFpRGhCLFNBakRnQixFQWtEaEIsU0FsRGdCLEVBbURoQixTQW5EZ0IsRUFvRGhCLFNBcERnQixFQXFEaEIsU0FyRGdCLEVBc0RoQixTQXREZ0IsRUF1RGhCLFNBdkRnQixFQXdEaEIsU0F4RGdCLEVBeURoQixTQXpEZ0IsRUEwRGhCLFNBMURnQixFQTJEaEIsU0EzRGdCLEVBNERoQixTQTVEZ0IsRUE2RGhCLFNBN0RnQixFQThEaEIsU0E5RGdCLEVBK0RoQixTQS9EZ0IsRUFnRWhCLFNBaEVnQixFQWlFaEIsU0FqRWdCLEVBa0VoQixTQWxFZ0IsRUFtRWhCLFNBbkVnQixFQW9FaEIsU0FwRWdCLEVBcUVoQixTQXJFZ0IsRUFzRWhCLFNBdEVnQixFQXVFaEIsU0F2RWdCLEVBd0VoQixTQXhFZ0IsRUF5RWhCLFNBekVnQixFQTBFaEIsU0ExRWdCLEVBMkVoQixTQTNFZ0IsRUE0RWhCLFNBNUVnQixDQUFqQjtBQStFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUNBLFNBQVNtRSxTQUFULEdBQXFCO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBLE1BQUksT0FBT3pTLE1BQVAsS0FBa0IsV0FBbEIsSUFBaUNBLE1BQU0sQ0FBQzZTLE9BQXhDLEtBQW9EN1MsTUFBTSxDQUFDNlMsT0FBUCxDQUFlaEwsSUFBZixLQUF3QixVQUF4QixJQUFzQzdILE1BQU0sQ0FBQzZTLE9BQVAsQ0FBZUMsTUFBekcsQ0FBSixFQUFzSDtBQUNySCxXQUFPLElBQVA7QUFDQSxHQU5tQixDQVFwQjs7O0FBQ0EsTUFBSSxPQUFPQyxTQUFQLEtBQXFCLFdBQXJCLElBQW9DQSxTQUFTLENBQUNDLFNBQTlDLElBQTJERCxTQUFTLENBQUNDLFNBQVYsQ0FBb0JmLFdBQXBCLEdBQWtDSCxLQUFsQyxDQUF3Qyx1QkFBeEMsQ0FBL0QsRUFBaUk7QUFDaEksV0FBTyxLQUFQO0FBQ0EsR0FYbUIsQ0FhcEI7QUFDQTs7O0FBQ0EsU0FBUSxPQUFPN1YsUUFBUCxLQUFvQixXQUFwQixJQUFtQ0EsUUFBUSxDQUFDeUgsZUFBNUMsSUFBK0R6SCxRQUFRLENBQUN5SCxlQUFULENBQXlCUyxLQUF4RixJQUFpR2xJLFFBQVEsQ0FBQ3lILGVBQVQsQ0FBeUJTLEtBQXpCLENBQStCOE8sZ0JBQWpJLElBQ047QUFDQyxTQUFPalQsTUFBUCxLQUFrQixXQUFsQixJQUFpQ0EsTUFBTSxDQUFDeUssT0FBeEMsS0FBb0R6SyxNQUFNLENBQUN5SyxPQUFQLENBQWV5SSxPQUFmLElBQTJCbFQsTUFBTSxDQUFDeUssT0FBUCxDQUFlMEksU0FBZixJQUE0Qm5ULE1BQU0sQ0FBQ3lLLE9BQVAsQ0FBZTJJLEtBQTFILENBRkssSUFHTjtBQUNBO0FBQ0MsU0FBT0wsU0FBUCxLQUFxQixXQUFyQixJQUFvQ0EsU0FBUyxDQUFDQyxTQUE5QyxJQUEyREQsU0FBUyxDQUFDQyxTQUFWLENBQW9CZixXQUFwQixHQUFrQ0gsS0FBbEMsQ0FBd0MsZ0JBQXhDLENBQTNELElBQXdIekksUUFBUSxDQUFDZ0ssTUFBTSxDQUFDQyxFQUFSLEVBQVksRUFBWixDQUFSLElBQTJCLEVBTDlJLElBTU47QUFDQyxTQUFPUCxTQUFQLEtBQXFCLFdBQXJCLElBQW9DQSxTQUFTLENBQUNDLFNBQTlDLElBQTJERCxTQUFTLENBQUNDLFNBQVYsQ0FBb0JmLFdBQXBCLEdBQWtDSCxLQUFsQyxDQUF3QyxvQkFBeEMsQ0FQN0Q7QUFRQTtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLFNBQVNTLFVBQVQsQ0FBb0J4TixJQUFwQixFQUEwQjtBQUN6QkEsTUFBSSxDQUFDLENBQUQsQ0FBSixHQUFVLENBQUMsS0FBSzBOLFNBQUwsR0FBaUIsSUFBakIsR0FBd0IsRUFBekIsSUFDVCxLQUFLYyxTQURJLElBRVIsS0FBS2QsU0FBTCxHQUFpQixLQUFqQixHQUF5QixHQUZqQixJQUdUMU4sSUFBSSxDQUFDLENBQUQsQ0FISyxJQUlSLEtBQUswTixTQUFMLEdBQWlCLEtBQWpCLEdBQXlCLEdBSmpCLElBS1QsR0FMUyxHQUtIcEUsTUFBTSxDQUFDQyxPQUFQLENBQWVrRixRQUFmLENBQXdCLEtBQUtDLElBQTdCLENBTFA7O0FBT0EsTUFBSSxDQUFDLEtBQUtoQixTQUFWLEVBQXFCO0FBQ3BCO0FBQ0E7O0FBRUQsTUFBTWlCLENBQUMsR0FBRyxZQUFZLEtBQUt6WixLQUEzQjtBQUNBOEssTUFBSSxDQUFDK0wsTUFBTCxDQUFZLENBQVosRUFBZSxDQUFmLEVBQWtCNEMsQ0FBbEIsRUFBcUIsZ0JBQXJCLEVBYnlCLENBZXpCO0FBQ0E7QUFDQTs7QUFDQSxNQUFJQyxLQUFLLEdBQUcsQ0FBWjtBQUNBLE1BQUlDLEtBQUssR0FBRyxDQUFaO0FBQ0E3TyxNQUFJLENBQUMsQ0FBRCxDQUFKLENBQVFpRSxPQUFSLENBQWdCLGFBQWhCLEVBQStCLFVBQUE4SSxLQUFLLEVBQUk7QUFDdkMsUUFBSUEsS0FBSyxLQUFLLElBQWQsRUFBb0I7QUFDbkI7QUFDQTs7QUFDRDZCLFNBQUs7O0FBQ0wsUUFBSTdCLEtBQUssS0FBSyxJQUFkLEVBQW9CO0FBQ25CO0FBQ0E7QUFDQThCLFdBQUssR0FBR0QsS0FBUjtBQUNBO0FBQ0QsR0FWRDtBQVlBNU8sTUFBSSxDQUFDK0wsTUFBTCxDQUFZOEMsS0FBWixFQUFtQixDQUFuQixFQUFzQkYsQ0FBdEI7QUFDQTtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBcEYsV0FBQSxHQUFjN0QsT0FBTyxDQUFDb0osS0FBUixJQUFpQnBKLE9BQU8sQ0FBQ0MsR0FBekIsSUFBaUMsWUFBTSxDQUFFLENBQXZEO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxTQUFTdk4sSUFBVCxDQUFjMlcsVUFBZCxFQUEwQjtBQUN6QixNQUFJO0FBQ0gsUUFBSUEsVUFBSixFQUFnQjtBQUNmeEYsYUFBTyxDQUFDeUYsT0FBUixDQUFnQkMsT0FBaEIsQ0FBd0IsT0FBeEIsRUFBaUNGLFVBQWpDO0FBQ0EsS0FGRCxNQUVPO0FBQ054RixhQUFPLENBQUN5RixPQUFSLENBQWdCRSxVQUFoQixDQUEyQixPQUEzQjtBQUNBO0FBQ0QsR0FORCxDQU1FLE9BQU9DLEtBQVAsRUFBYyxDQUNmO0FBQ0E7QUFDQTtBQUNEO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxTQUFTMUIsSUFBVCxHQUFnQjtBQUNmLE1BQUl0SixDQUFKOztBQUNBLE1BQUk7QUFDSEEsS0FBQyxHQUFHb0YsT0FBTyxDQUFDeUYsT0FBUixDQUFnQkksT0FBaEIsQ0FBd0IsT0FBeEIsQ0FBSjtBQUNBLEdBRkQsQ0FFRSxPQUFPRCxLQUFQLEVBQWMsQ0FDZjtBQUNBO0FBQ0EsR0FQYyxDQVNmOzs7QUFDQSxNQUFJLENBQUNoTCxDQUFELElBQU0sT0FBTzJKLE9BQVAsS0FBbUIsV0FBekIsSUFBd0MsU0FBU0EsT0FBckQsRUFBOEQ7QUFDN0QzSixLQUFDLEdBQUcySixPQUFPLENBQUN1QixHQUFSLENBQVlDLEtBQWhCO0FBQ0E7O0FBRUQsU0FBT25MLENBQVA7QUFDQTtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxTQUFTd0osWUFBVCxHQUF3QjtBQUN2QixNQUFJO0FBQ0g7QUFDQTtBQUNBLFdBQU80QixZQUFQO0FBQ0EsR0FKRCxDQUlFLE9BQU9KLEtBQVAsRUFBYyxDQUNmO0FBQ0E7QUFDQTtBQUNEOztBQUVEN0YsTUFBTSxDQUFDQyxPQUFQLEdBQWlCN0osbUJBQU8sQ0FBQyxvREFBRCxDQUFQLENBQW9CNkosT0FBcEIsQ0FBakI7QUFFQSxJQUFPaUcsVUFBUCxHQUFxQmxHLE1BQU0sQ0FBQ0MsT0FBNUIsQ0FBT2lHLFVBQVA7QUFFQTtBQUNBO0FBQ0E7O0FBRUFBLFVBQVUsQ0FBQy9KLENBQVgsR0FBZSxVQUFVZ0ssQ0FBVixFQUFhO0FBQzNCLE1BQUk7QUFDSCxXQUFPN0MsSUFBSSxDQUFDQyxTQUFMLENBQWU0QyxDQUFmLENBQVA7QUFDQSxHQUZELENBRUUsT0FBT04sS0FBUCxFQUFjO0FBQ2YsV0FBTyxpQ0FBaUNBLEtBQUssQ0FBQ08sT0FBOUM7QUFDQTtBQUNELENBTkQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JRQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLFNBQVNDLEtBQVQsQ0FBZU4sR0FBZixFQUFvQjtBQUNuQk8sYUFBVyxDQUFDZCxLQUFaLEdBQW9CYyxXQUFwQjtBQUNBQSxhQUFXLENBQUNDLE9BQVosR0FBc0JELFdBQXRCO0FBQ0FBLGFBQVcsQ0FBQ0UsTUFBWixHQUFxQkEsTUFBckI7QUFDQUYsYUFBVyxDQUFDRyxPQUFaLEdBQXNCQSxPQUF0QjtBQUNBSCxhQUFXLENBQUNJLE1BQVosR0FBcUJBLE1BQXJCO0FBQ0FKLGFBQVcsQ0FBQ0ssT0FBWixHQUFzQkEsT0FBdEI7QUFDQUwsYUFBVyxDQUFDbkIsUUFBWixHQUF1Qi9PLG1CQUFPLENBQUMseURBQUQsQ0FBOUI7QUFDQWtRLGFBQVcsQ0FBQ00sT0FBWixHQUFzQkEsT0FBdEI7QUFFQW5XLFFBQU0sQ0FBQ29XLElBQVAsQ0FBWWQsR0FBWixFQUFpQmUsT0FBakIsQ0FBeUIsVUFBQXRPLEdBQUcsRUFBSTtBQUMvQjhOLGVBQVcsQ0FBQzlOLEdBQUQsQ0FBWCxHQUFtQnVOLEdBQUcsQ0FBQ3ZOLEdBQUQsQ0FBdEI7QUFDQSxHQUZEO0FBSUE7QUFDRDtBQUNBOztBQUVDOE4sYUFBVyxDQUFDUyxLQUFaLEdBQW9CLEVBQXBCO0FBQ0FULGFBQVcsQ0FBQ1UsS0FBWixHQUFvQixFQUFwQjtBQUVBO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7O0FBQ0NWLGFBQVcsQ0FBQ0osVUFBWixHQUF5QixFQUF6QjtBQUVBO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQyxXQUFTZSxXQUFULENBQXFCL0IsU0FBckIsRUFBZ0M7QUFDL0IsUUFBSWdDLElBQUksR0FBRyxDQUFYOztBQUVBLFNBQUssSUFBSXpSLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUd5UCxTQUFTLENBQUM3VSxNQUE5QixFQUFzQ29GLENBQUMsRUFBdkMsRUFBMkM7QUFDMUN5UixVQUFJLEdBQUksQ0FBQ0EsSUFBSSxJQUFJLENBQVQsSUFBY0EsSUFBZixHQUF1QmhDLFNBQVMsQ0FBQ2lDLFVBQVYsQ0FBcUIxUixDQUFyQixDQUE5QjtBQUNBeVIsVUFBSSxJQUFJLENBQVIsQ0FGMEMsQ0FFL0I7QUFDWDs7QUFFRCxXQUFPWixXQUFXLENBQUNjLE1BQVosQ0FBbUJ2YSxJQUFJLENBQUNpWCxHQUFMLENBQVNvRCxJQUFULElBQWlCWixXQUFXLENBQUNjLE1BQVosQ0FBbUIvVyxNQUF2RCxDQUFQO0FBQ0E7O0FBQ0RpVyxhQUFXLENBQUNXLFdBQVosR0FBMEJBLFdBQTFCO0FBRUE7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0MsV0FBU1gsV0FBVCxDQUFxQnBCLFNBQXJCLEVBQWdDO0FBQy9CLFFBQUltQyxRQUFKO0FBQ0EsUUFBSUMsY0FBYyxHQUFHLElBQXJCOztBQUVBLGFBQVM5QixLQUFULEdBQXdCO0FBQUEsd0NBQU45TyxJQUFNO0FBQU5BLFlBQU07QUFBQTs7QUFDdkI7QUFDQSxVQUFJLENBQUM4TyxLQUFLLENBQUNtQixPQUFYLEVBQW9CO0FBQ25CO0FBQ0E7O0FBRUQsVUFBTVksSUFBSSxHQUFHL0IsS0FBYixDQU51QixDQVF2Qjs7QUFDQSxVQUFNZ0MsSUFBSSxHQUFHQyxNQUFNLENBQUMsSUFBSXhXLElBQUosRUFBRCxDQUFuQjtBQUNBLFVBQU1tUCxFQUFFLEdBQUdvSCxJQUFJLElBQUlILFFBQVEsSUFBSUcsSUFBaEIsQ0FBZjtBQUNBRCxVQUFJLENBQUNuQyxJQUFMLEdBQVloRixFQUFaO0FBQ0FtSCxVQUFJLENBQUNHLElBQUwsR0FBWUwsUUFBWjtBQUNBRSxVQUFJLENBQUNDLElBQUwsR0FBWUEsSUFBWjtBQUNBSCxjQUFRLEdBQUdHLElBQVg7QUFFQTlRLFVBQUksQ0FBQyxDQUFELENBQUosR0FBVTRQLFdBQVcsQ0FBQ0UsTUFBWixDQUFtQjlQLElBQUksQ0FBQyxDQUFELENBQXZCLENBQVY7O0FBRUEsVUFBSSxPQUFPQSxJQUFJLENBQUMsQ0FBRCxDQUFYLEtBQW1CLFFBQXZCLEVBQWlDO0FBQ2hDO0FBQ0FBLFlBQUksQ0FBQ2lSLE9BQUwsQ0FBYSxJQUFiO0FBQ0EsT0FyQnNCLENBdUJ2Qjs7O0FBQ0EsVUFBSXJDLEtBQUssR0FBRyxDQUFaO0FBQ0E1TyxVQUFJLENBQUMsQ0FBRCxDQUFKLEdBQVVBLElBQUksQ0FBQyxDQUFELENBQUosQ0FBUWlFLE9BQVIsQ0FBZ0IsZUFBaEIsRUFBaUMsVUFBQzhJLEtBQUQsRUFBUW1FLE1BQVIsRUFBbUI7QUFDN0Q7QUFDQSxZQUFJbkUsS0FBSyxLQUFLLElBQWQsRUFBb0I7QUFDbkIsaUJBQU8sR0FBUDtBQUNBOztBQUNENkIsYUFBSztBQUNMLFlBQU11QyxTQUFTLEdBQUd2QixXQUFXLENBQUNKLFVBQVosQ0FBdUIwQixNQUF2QixDQUFsQjs7QUFDQSxZQUFJLE9BQU9DLFNBQVAsS0FBcUIsVUFBekIsRUFBcUM7QUFDcEMsY0FBTTFOLEdBQUcsR0FBR3pELElBQUksQ0FBQzRPLEtBQUQsQ0FBaEI7QUFDQTdCLGVBQUssR0FBR29FLFNBQVMsQ0FBQ3pRLElBQVYsQ0FBZW1RLElBQWYsRUFBcUJwTixHQUFyQixDQUFSLENBRm9DLENBSXBDOztBQUNBekQsY0FBSSxDQUFDK0wsTUFBTCxDQUFZNkMsS0FBWixFQUFtQixDQUFuQjtBQUNBQSxlQUFLO0FBQ0w7O0FBQ0QsZUFBTzdCLEtBQVA7QUFDQSxPQWhCUyxDQUFWLENBekJ1QixDQTJDdkI7O0FBQ0E2QyxpQkFBVyxDQUFDcEMsVUFBWixDQUF1QjlNLElBQXZCLENBQTRCbVEsSUFBNUIsRUFBa0M3USxJQUFsQztBQUVBLFVBQU1vUixLQUFLLEdBQUdQLElBQUksQ0FBQ2xMLEdBQUwsSUFBWWlLLFdBQVcsQ0FBQ2pLLEdBQXRDO0FBQ0F5TCxXQUFLLENBQUNsUixLQUFOLENBQVkyUSxJQUFaLEVBQWtCN1EsSUFBbEI7QUFDQTs7QUFFRDhPLFNBQUssQ0FBQ04sU0FBTixHQUFrQkEsU0FBbEI7QUFDQU0sU0FBSyxDQUFDcEIsU0FBTixHQUFrQmtDLFdBQVcsQ0FBQ2xDLFNBQVosRUFBbEI7QUFDQW9CLFNBQUssQ0FBQzVaLEtBQU4sR0FBYzBhLFdBQVcsQ0FBQ1csV0FBWixDQUF3Qi9CLFNBQXhCLENBQWQ7QUFDQU0sU0FBSyxDQUFDdUMsTUFBTixHQUFlQSxNQUFmO0FBQ0F2QyxTQUFLLENBQUNvQixPQUFOLEdBQWdCTixXQUFXLENBQUNNLE9BQTVCLENBMUQrQixDQTBETTs7QUFFckNuVyxVQUFNLENBQUN1WCxjQUFQLENBQXNCeEMsS0FBdEIsRUFBNkIsU0FBN0IsRUFBd0M7QUFDdkN5QyxnQkFBVSxFQUFFLElBRDJCO0FBRXZDQyxrQkFBWSxFQUFFLEtBRnlCO0FBR3ZDQyxTQUFHLEVBQUU7QUFBQSxlQUFNYixjQUFjLEtBQUssSUFBbkIsR0FBMEJoQixXQUFXLENBQUNLLE9BQVosQ0FBb0J6QixTQUFwQixDQUExQixHQUEyRG9DLGNBQWpFO0FBQUEsT0FIa0M7QUFJdkNjLFNBQUcsRUFBRSxhQUFBakMsQ0FBQyxFQUFJO0FBQ1RtQixzQkFBYyxHQUFHbkIsQ0FBakI7QUFDQTtBQU5zQyxLQUF4QyxFQTVEK0IsQ0FxRS9COztBQUNBLFFBQUksT0FBT0csV0FBVyxDQUFDMWIsSUFBbkIsS0FBNEIsVUFBaEMsRUFBNEM7QUFDM0MwYixpQkFBVyxDQUFDMWIsSUFBWixDQUFpQjRhLEtBQWpCO0FBQ0E7O0FBRUQsV0FBT0EsS0FBUDtBQUNBOztBQUVELFdBQVN1QyxNQUFULENBQWdCN0MsU0FBaEIsRUFBMkJtRCxTQUEzQixFQUFzQztBQUNyQyxRQUFNQyxRQUFRLEdBQUdoQyxXQUFXLENBQUMsS0FBS3BCLFNBQUwsSUFBa0IsT0FBT21ELFNBQVAsS0FBcUIsV0FBckIsR0FBbUMsR0FBbkMsR0FBeUNBLFNBQTNELElBQXdFbkQsU0FBekUsQ0FBNUI7QUFDQW9ELFlBQVEsQ0FBQ2pNLEdBQVQsR0FBZSxLQUFLQSxHQUFwQjtBQUNBLFdBQU9pTSxRQUFQO0FBQ0E7QUFFRDtBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0MsV0FBUzVCLE1BQVQsQ0FBZ0JqQixVQUFoQixFQUE0QjtBQUMzQmEsZUFBVyxDQUFDeFgsSUFBWixDQUFpQjJXLFVBQWpCO0FBRUFhLGVBQVcsQ0FBQ1MsS0FBWixHQUFvQixFQUFwQjtBQUNBVCxlQUFXLENBQUNVLEtBQVosR0FBb0IsRUFBcEI7QUFFQSxRQUFJdlIsQ0FBSjtBQUNBLFFBQU1tRyxLQUFLLEdBQUcsQ0FBQyxPQUFPNkosVUFBUCxLQUFzQixRQUF0QixHQUFpQ0EsVUFBakMsR0FBOEMsRUFBL0MsRUFBbUQ3SixLQUFuRCxDQUF5RCxRQUF6RCxDQUFkO0FBQ0EsUUFBTXdGLEdBQUcsR0FBR3hGLEtBQUssQ0FBQ3ZMLE1BQWxCOztBQUVBLFNBQUtvRixDQUFDLEdBQUcsQ0FBVCxFQUFZQSxDQUFDLEdBQUcyTCxHQUFoQixFQUFxQjNMLENBQUMsRUFBdEIsRUFBMEI7QUFDekIsVUFBSSxDQUFDbUcsS0FBSyxDQUFDbkcsQ0FBRCxDQUFWLEVBQWU7QUFDZDtBQUNBO0FBQ0E7O0FBRURnUSxnQkFBVSxHQUFHN0osS0FBSyxDQUFDbkcsQ0FBRCxDQUFMLENBQVNrRixPQUFULENBQWlCLEtBQWpCLEVBQXdCLEtBQXhCLENBQWI7O0FBRUEsVUFBSThLLFVBQVUsQ0FBQyxDQUFELENBQVYsS0FBa0IsR0FBdEIsRUFBMkI7QUFDMUJhLG1CQUFXLENBQUNVLEtBQVosQ0FBa0IxUixJQUFsQixDQUF1QixJQUFJMFAsTUFBSixDQUFXLE1BQU1TLFVBQVUsQ0FBQzhDLE1BQVgsQ0FBa0IsQ0FBbEIsQ0FBTixHQUE2QixHQUF4QyxDQUF2QjtBQUNBLE9BRkQsTUFFTztBQUNOakMsbUJBQVcsQ0FBQ1MsS0FBWixDQUFrQnpSLElBQWxCLENBQXVCLElBQUkwUCxNQUFKLENBQVcsTUFBTVMsVUFBTixHQUFtQixHQUE5QixDQUF2QjtBQUNBO0FBQ0Q7QUFDRDtBQUVEO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0MsV0FBU2dCLE9BQVQsR0FBbUI7QUFDbEIsUUFBTWhCLFVBQVUsR0FBRyw2QkFDZmEsV0FBVyxDQUFDUyxLQUFaLENBQWtCbEwsR0FBbEIsQ0FBc0IyTSxXQUF0QixDQURlLHNCQUVmbEMsV0FBVyxDQUFDVSxLQUFaLENBQWtCbkwsR0FBbEIsQ0FBc0IyTSxXQUF0QixFQUFtQzNNLEdBQW5DLENBQXVDLFVBQUFxSixTQUFTO0FBQUEsYUFBSSxNQUFNQSxTQUFWO0FBQUEsS0FBaEQsQ0FGZSxHQUdqQnVELElBSGlCLENBR1osR0FIWSxDQUFuQjtBQUlBbkMsZUFBVyxDQUFDSSxNQUFaLENBQW1CLEVBQW5CO0FBQ0EsV0FBT2pCLFVBQVA7QUFDQTtBQUVEO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQyxXQUFTa0IsT0FBVCxDQUFpQjVZLElBQWpCLEVBQXVCO0FBQ3RCLFFBQUlBLElBQUksQ0FBQ0EsSUFBSSxDQUFDc0MsTUFBTCxHQUFjLENBQWYsQ0FBSixLQUEwQixHQUE5QixFQUFtQztBQUNsQyxhQUFPLElBQVA7QUFDQTs7QUFFRCxRQUFJb0YsQ0FBSjtBQUNBLFFBQUkyTCxHQUFKOztBQUVBLFNBQUszTCxDQUFDLEdBQUcsQ0FBSixFQUFPMkwsR0FBRyxHQUFHa0YsV0FBVyxDQUFDVSxLQUFaLENBQWtCM1csTUFBcEMsRUFBNENvRixDQUFDLEdBQUcyTCxHQUFoRCxFQUFxRDNMLENBQUMsRUFBdEQsRUFBMEQ7QUFDekQsVUFBSTZRLFdBQVcsQ0FBQ1UsS0FBWixDQUFrQnZSLENBQWxCLEVBQXFCMEMsSUFBckIsQ0FBMEJwSyxJQUExQixDQUFKLEVBQXFDO0FBQ3BDLGVBQU8sS0FBUDtBQUNBO0FBQ0Q7O0FBRUQsU0FBSzBILENBQUMsR0FBRyxDQUFKLEVBQU8yTCxHQUFHLEdBQUdrRixXQUFXLENBQUNTLEtBQVosQ0FBa0IxVyxNQUFwQyxFQUE0Q29GLENBQUMsR0FBRzJMLEdBQWhELEVBQXFEM0wsQ0FBQyxFQUF0RCxFQUEwRDtBQUN6RCxVQUFJNlEsV0FBVyxDQUFDUyxLQUFaLENBQWtCdFIsQ0FBbEIsRUFBcUIwQyxJQUFyQixDQUEwQnBLLElBQTFCLENBQUosRUFBcUM7QUFDcEMsZUFBTyxJQUFQO0FBQ0E7QUFDRDs7QUFFRCxXQUFPLEtBQVA7QUFDQTtBQUVEO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQyxXQUFTeWEsV0FBVCxDQUFxQkUsTUFBckIsRUFBNkI7QUFDNUIsV0FBT0EsTUFBTSxDQUFDdlIsUUFBUCxHQUNMbUssU0FESyxDQUNLLENBREwsRUFDUW9ILE1BQU0sQ0FBQ3ZSLFFBQVAsR0FBa0I5RyxNQUFsQixHQUEyQixDQURuQyxFQUVMc0ssT0FGSyxDQUVHLFNBRkgsRUFFYyxHQUZkLENBQVA7QUFHQTtBQUVEO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQyxXQUFTNkwsTUFBVCxDQUFnQnJNLEdBQWhCLEVBQXFCO0FBQ3BCLFFBQUlBLEdBQUcsWUFBWWtKLEtBQW5CLEVBQTBCO0FBQ3pCLGFBQU9sSixHQUFHLENBQUN3TyxLQUFKLElBQWF4TyxHQUFHLENBQUNpTSxPQUF4QjtBQUNBOztBQUNELFdBQU9qTSxHQUFQO0FBQ0E7QUFFRDtBQUNEO0FBQ0E7QUFDQTs7O0FBQ0MsV0FBU3lNLE9BQVQsR0FBbUI7QUFDbEJ4SyxXQUFPLENBQUNtSSxJQUFSLENBQWEsdUlBQWI7QUFDQTs7QUFFRCtCLGFBQVcsQ0FBQ0ksTUFBWixDQUFtQkosV0FBVyxDQUFDbkMsSUFBWixFQUFuQjtBQUVBLFNBQU9tQyxXQUFQO0FBQ0E7O0FBRUR0RyxNQUFNLENBQUNDLE9BQVAsR0FBaUJvRyxLQUFqQixDOzs7Ozs7Ozs7O0FDcFFBckcsTUFBTSxDQUFDQyxPQUFQLEdBQWtCLFlBQU07QUFDdEIsTUFBSSxPQUFPc0gsSUFBUCxLQUFnQixXQUFwQixFQUFpQztBQUMvQixXQUFPQSxJQUFQO0FBQ0QsR0FGRCxNQUVPLElBQUksT0FBTzVWLE1BQVAsS0FBa0IsV0FBdEIsRUFBbUM7QUFDeEMsV0FBT0EsTUFBUDtBQUNELEdBRk0sTUFFQTtBQUNMLFdBQU9pWCxRQUFRLENBQUMsYUFBRCxDQUFSLEVBQVA7QUFDRDtBQUNGLENBUmdCLEVBQWpCLEM7Ozs7Ozs7Ozs7QUNBQSxJQUFNQyxNQUFNLEdBQUd6UyxtQkFBTyxDQUFDLCtEQUFELENBQXRCOztBQUVBNEosTUFBTSxDQUFDQyxPQUFQLEdBQWlCLFVBQUM2SSxHQUFELEVBQU0zSSxJQUFOO0FBQUEsU0FBZSxJQUFJMEksTUFBSixDQUFXQyxHQUFYLEVBQWdCM0ksSUFBaEIsQ0FBZjtBQUFBLENBQWpCO0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBSCxxQkFBQSxHQUF3QjZJLE1BQXhCO0FBQ0E3SSx1QkFBQSxHQUEwQjZJLE1BQU0sQ0FBQ0UsUUFBakMsQyxDQUEyQzs7QUFDM0MvSSxxSEFBQTtBQUNBQSxvSUFBQTtBQUNBQSxtSEFBQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JBLElBQU1nSixVQUFVLEdBQUc1UyxtQkFBTyxDQUFDLG1GQUFELENBQTFCOztBQUNBLElBQU15TCxPQUFPLEdBQUd6TCxtQkFBTyxDQUFDLG9FQUFELENBQXZCOztBQUNBLElBQU1vUCxLQUFLLEdBQUdwUCxtQkFBTyxDQUFDLGtEQUFELENBQVAsQ0FBaUIseUJBQWpCLENBQWQ7O0FBQ0EsSUFBTTZTLE1BQU0sR0FBRzdTLG1CQUFPLENBQUMsc0VBQUQsQ0FBdEI7O0FBQ0EsSUFBTThTLFFBQVEsR0FBRzlTLG1CQUFPLENBQUMsa0RBQUQsQ0FBeEI7O0FBQ0EsSUFBTStTLE9BQU8sR0FBRy9TLG1CQUFPLENBQUMsZ0RBQUQsQ0FBdkI7O0lBRU15UyxNOzs7OztBQUNKO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Usa0JBQVlDLEdBQVosRUFBNEI7QUFBQTs7QUFBQSxRQUFYM0ksSUFBVyx1RUFBSixFQUFJOztBQUFBOztBQUMxQjs7QUFFQSxRQUFJMkksR0FBRyxJQUFJLHFCQUFvQkEsR0FBcEIsQ0FBWCxFQUFvQztBQUNsQzNJLFVBQUksR0FBRzJJLEdBQVA7QUFDQUEsU0FBRyxHQUFHLElBQU47QUFDRDs7QUFFRCxRQUFJQSxHQUFKLEVBQVM7QUFDUEEsU0FBRyxHQUFHSSxRQUFRLENBQUNKLEdBQUQsQ0FBZDtBQUNBM0ksVUFBSSxDQUFDaUosUUFBTCxHQUFnQk4sR0FBRyxDQUFDTyxJQUFwQjtBQUNBbEosVUFBSSxDQUFDbUosTUFBTCxHQUFjUixHQUFHLENBQUNDLFFBQUosS0FBaUIsT0FBakIsSUFBNEJELEdBQUcsQ0FBQ0MsUUFBSixLQUFpQixLQUEzRDtBQUNBNUksVUFBSSxDQUFDb0osSUFBTCxHQUFZVCxHQUFHLENBQUNTLElBQWhCO0FBQ0EsVUFBSVQsR0FBRyxDQUFDVSxLQUFSLEVBQWVySixJQUFJLENBQUNxSixLQUFMLEdBQWFWLEdBQUcsQ0FBQ1UsS0FBakI7QUFDaEIsS0FORCxNQU1PLElBQUlySixJQUFJLENBQUNrSixJQUFULEVBQWU7QUFDcEJsSixVQUFJLENBQUNpSixRQUFMLEdBQWdCRixRQUFRLENBQUMvSSxJQUFJLENBQUNrSixJQUFOLENBQVIsQ0FBb0JBLElBQXBDO0FBQ0Q7O0FBRUQsVUFBS0MsTUFBTCxHQUNFLFFBQVFuSixJQUFJLENBQUNtSixNQUFiLEdBQ0luSixJQUFJLENBQUNtSixNQURULEdBRUksT0FBTzlhLFFBQVAsS0FBb0IsV0FBcEIsSUFBbUMsYUFBYUEsUUFBUSxDQUFDdWEsUUFIL0Q7O0FBS0EsUUFBSTVJLElBQUksQ0FBQ2lKLFFBQUwsSUFBaUIsQ0FBQ2pKLElBQUksQ0FBQ29KLElBQTNCLEVBQWlDO0FBQy9CO0FBQ0FwSixVQUFJLENBQUNvSixJQUFMLEdBQVksTUFBS0QsTUFBTCxHQUFjLEtBQWQsR0FBc0IsSUFBbEM7QUFDRDs7QUFFRCxVQUFLRixRQUFMLEdBQ0VqSixJQUFJLENBQUNpSixRQUFMLEtBQ0MsT0FBTzVhLFFBQVAsS0FBb0IsV0FBcEIsR0FBa0NBLFFBQVEsQ0FBQzRhLFFBQTNDLEdBQXNELFdBRHZELENBREY7QUFHQSxVQUFLRyxJQUFMLEdBQ0VwSixJQUFJLENBQUNvSixJQUFMLEtBQ0MsT0FBTy9hLFFBQVAsS0FBb0IsV0FBcEIsSUFBbUNBLFFBQVEsQ0FBQythLElBQTVDLEdBQ0cvYSxRQUFRLENBQUMrYSxJQURaLEdBRUcsTUFBS0QsTUFBTCxHQUNBLEdBREEsR0FFQSxFQUxKLENBREY7QUFRQSxVQUFLTixVQUFMLEdBQWtCN0ksSUFBSSxDQUFDNkksVUFBTCxJQUFtQixDQUFDLFNBQUQsRUFBWSxXQUFaLENBQXJDO0FBQ0EsVUFBS1MsVUFBTCxHQUFrQixFQUFsQjtBQUNBLFVBQUtDLFdBQUwsR0FBbUIsRUFBbkI7QUFDQSxVQUFLQyxhQUFMLEdBQXFCLENBQXJCO0FBRUEsVUFBS3hKLElBQUwsR0FBWTFQLE1BQU0sQ0FBQ0MsTUFBUCxDQUNWO0FBQ0VrWixVQUFJLEVBQUUsWUFEUjtBQUVFQyxXQUFLLEVBQUUsS0FGVDtBQUdFQyxxQkFBZSxFQUFFLEtBSG5CO0FBSUVDLGFBQU8sRUFBRSxJQUpYO0FBS0VDLFdBQUssRUFBRSxJQUxUO0FBTUVDLG9CQUFjLEVBQUUsR0FObEI7QUFPRUMscUJBQWUsRUFBRSxLQVBuQjtBQVFFQyx3QkFBa0IsRUFBRSxJQVJ0QjtBQVNFQyx1QkFBaUIsRUFBRTtBQUNqQkMsaUJBQVMsRUFBRTtBQURNLE9BVHJCO0FBWUVDLHNCQUFnQixFQUFFLEVBWnBCO0FBYUVDLHlCQUFtQixFQUFFO0FBYnZCLEtBRFUsRUFnQlZwSyxJQWhCVSxDQUFaO0FBbUJBLFVBQUtBLElBQUwsQ0FBVXlKLElBQVYsR0FBaUIsTUFBS3pKLElBQUwsQ0FBVXlKLElBQVYsQ0FBZWpQLE9BQWYsQ0FBdUIsS0FBdkIsRUFBOEIsRUFBOUIsSUFBb0MsR0FBckQ7O0FBRUEsUUFBSSxPQUFPLE1BQUt3RixJQUFMLENBQVVxSixLQUFqQixLQUEyQixRQUEvQixFQUF5QztBQUN2QyxZQUFLckosSUFBTCxDQUFVcUosS0FBVixHQUFrQkwsT0FBTyxDQUFDcUIsTUFBUixDQUFlLE1BQUtySyxJQUFMLENBQVVxSixLQUF6QixDQUFsQjtBQUNELEtBbkV5QixDQXFFMUI7OztBQUNBLFVBQUtpQixFQUFMLEdBQVUsSUFBVjtBQUNBLFVBQUtDLFFBQUwsR0FBZ0IsSUFBaEI7QUFDQSxVQUFLQyxZQUFMLEdBQW9CLElBQXBCO0FBQ0EsVUFBS0MsV0FBTCxHQUFtQixJQUFuQixDQXpFMEIsQ0EyRTFCOztBQUNBLFVBQUtDLGdCQUFMLEdBQXdCLElBQXhCOztBQUVBLFFBQUksT0FBT2paLGdCQUFQLEtBQTRCLFVBQWhDLEVBQTRDO0FBQzFDLFVBQUksTUFBS3VPLElBQUwsQ0FBVW9LLG1CQUFkLEVBQW1DO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBM1ksd0JBQWdCLENBQ2QsY0FEYyxFQUVkLFlBQU07QUFDSixjQUFJLE1BQUtrWixTQUFULEVBQW9CO0FBQ2xCO0FBQ0Esa0JBQUtBLFNBQUwsQ0FBZXhJLGtCQUFmOztBQUNBLGtCQUFLd0ksU0FBTCxDQUFlQyxLQUFmO0FBQ0Q7QUFDRixTQVJhLEVBU2QsS0FUYyxDQUFoQjtBQVdEOztBQUNELFVBQUksTUFBSzNCLFFBQUwsS0FBa0IsV0FBdEIsRUFBbUM7QUFDakMsY0FBSzRCLG9CQUFMLEdBQTRCLFlBQU07QUFDaEMsZ0JBQUtDLE9BQUwsQ0FBYSxpQkFBYjtBQUNELFNBRkQ7O0FBR0FyWix3QkFBZ0IsQ0FBQyxTQUFELEVBQVksTUFBS29aLG9CQUFqQixFQUF1QyxLQUF2QyxDQUFoQjtBQUNEO0FBQ0Y7O0FBRUQsVUFBS0UsSUFBTDs7QUF2RzBCO0FBd0czQjtBQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztXQUNFLHlCQUFnQm5kLElBQWhCLEVBQXNCO0FBQ3BCeVgsV0FBSyxDQUFDLHlCQUFELEVBQTRCelgsSUFBNUIsQ0FBTDtBQUNBLFVBQU15YixLQUFLLEdBQUcyQixLQUFLLENBQUMsS0FBS2hMLElBQUwsQ0FBVXFKLEtBQVgsQ0FBbkIsQ0FGb0IsQ0FJcEI7O0FBQ0FBLFdBQUssQ0FBQzRCLEdBQU4sR0FBWW5DLE1BQU0sQ0FBQ0YsUUFBbkIsQ0FMb0IsQ0FPcEI7O0FBQ0FTLFdBQUssQ0FBQ3NCLFNBQU4sR0FBa0IvYyxJQUFsQixDQVJvQixDQVVwQjs7QUFDQSxVQUFJLEtBQUswYyxFQUFULEVBQWFqQixLQUFLLENBQUM2QixHQUFOLEdBQVksS0FBS1osRUFBakI7QUFFYixVQUFNdEssSUFBSSxHQUFHMVAsTUFBTSxDQUFDQyxNQUFQLENBQ1gsRUFEVyxFQUVYLEtBQUt5UCxJQUFMLENBQVVtSyxnQkFBVixDQUEyQnZjLElBQTNCLENBRlcsRUFHWCxLQUFLb1MsSUFITSxFQUlYO0FBQ0VxSixhQUFLLEVBQUxBLEtBREY7QUFFRThCLGNBQU0sRUFBRSxJQUZWO0FBR0VsQyxnQkFBUSxFQUFFLEtBQUtBLFFBSGpCO0FBSUVFLGNBQU0sRUFBRSxLQUFLQSxNQUpmO0FBS0VDLFlBQUksRUFBRSxLQUFLQTtBQUxiLE9BSlcsQ0FBYjtBQWFBL0QsV0FBSyxDQUFDLGFBQUQsRUFBZ0JyRixJQUFoQixDQUFMO0FBRUEsYUFBTyxJQUFJNkksVUFBVSxDQUFDamIsSUFBRCxDQUFkLENBQXFCb1MsSUFBckIsQ0FBUDtBQUNEO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7OztXQUNFLGdCQUFPO0FBQUE7O0FBQ0wsVUFBSTJLLFNBQUo7O0FBQ0EsVUFDRSxLQUFLM0ssSUFBTCxDQUFVK0osZUFBVixJQUNBckIsTUFBTSxDQUFDMEMscUJBRFAsSUFFQSxLQUFLdkMsVUFBTCxDQUFnQjNSLE9BQWhCLENBQXdCLFdBQXhCLE1BQXlDLENBQUMsQ0FINUMsRUFJRTtBQUNBeVQsaUJBQVMsR0FBRyxXQUFaO0FBQ0QsT0FORCxNQU1PLElBQUksTUFBTSxLQUFLOUIsVUFBTCxDQUFnQjNZLE1BQTFCLEVBQWtDO0FBQ3ZDO0FBQ0FoRCxrQkFBVSxDQUFDLFlBQU07QUFDZixnQkFBSSxDQUFDcUgsSUFBTCxDQUFVLE9BQVYsRUFBbUIseUJBQW5CO0FBQ0QsU0FGUyxFQUVQLENBRk8sQ0FBVjtBQUdBO0FBQ0QsT0FOTSxNQU1BO0FBQ0xvVyxpQkFBUyxHQUFHLEtBQUs5QixVQUFMLENBQWdCLENBQWhCLENBQVo7QUFDRDs7QUFDRCxXQUFLUyxVQUFMLEdBQWtCLFNBQWxCLENBakJLLENBbUJMOztBQUNBLFVBQUk7QUFDRnFCLGlCQUFTLEdBQUcsS0FBS1UsZUFBTCxDQUFxQlYsU0FBckIsQ0FBWjtBQUNELE9BRkQsQ0FFRSxPQUFPNVgsQ0FBUCxFQUFVO0FBQ1ZzUyxhQUFLLENBQUMsb0NBQUQsRUFBdUN0UyxDQUF2QyxDQUFMO0FBQ0EsYUFBSzhWLFVBQUwsQ0FBZ0J5QyxLQUFoQjtBQUNBLGFBQUtQLElBQUw7QUFDQTtBQUNEOztBQUVESixlQUFTLENBQUNJLElBQVY7QUFDQSxXQUFLUSxZQUFMLENBQWtCWixTQUFsQjtBQUNEO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7OztXQUNFLHNCQUFhQSxTQUFiLEVBQXdCO0FBQUE7O0FBQ3RCdEYsV0FBSyxDQUFDLHNCQUFELEVBQXlCc0YsU0FBUyxDQUFDL2MsSUFBbkMsQ0FBTDs7QUFFQSxVQUFJLEtBQUsrYyxTQUFULEVBQW9CO0FBQ2xCdEYsYUFBSyxDQUFDLGdDQUFELEVBQW1DLEtBQUtzRixTQUFMLENBQWUvYyxJQUFsRCxDQUFMO0FBQ0EsYUFBSytjLFNBQUwsQ0FBZXhJLGtCQUFmO0FBQ0QsT0FOcUIsQ0FRdEI7OztBQUNBLFdBQUt3SSxTQUFMLEdBQWlCQSxTQUFqQixDQVRzQixDQVd0Qjs7QUFDQUEsZUFBUyxDQUNOL0ksRUFESCxDQUNNLE9BRE4sRUFDZSxLQUFLNEosT0FBTCxDQUFhM00sSUFBYixDQUFrQixJQUFsQixDQURmLEVBRUcrQyxFQUZILENBRU0sUUFGTixFQUVnQixLQUFLNkosUUFBTCxDQUFjNU0sSUFBZCxDQUFtQixJQUFuQixDQUZoQixFQUdHK0MsRUFISCxDQUdNLE9BSE4sRUFHZSxLQUFLOEosT0FBTCxDQUFhN00sSUFBYixDQUFrQixJQUFsQixDQUhmLEVBSUcrQyxFQUpILENBSU0sT0FKTixFQUllLFlBQU07QUFDakIsY0FBSSxDQUFDa0osT0FBTCxDQUFhLGlCQUFiO0FBQ0QsT0FOSDtBQU9EO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O1dBQ0UsZUFBTWxkLElBQU4sRUFBWTtBQUFBOztBQUNWeVgsV0FBSyxDQUFDLHdCQUFELEVBQTJCelgsSUFBM0IsQ0FBTDtBQUNBLFVBQUkrYyxTQUFTLEdBQUcsS0FBS1UsZUFBTCxDQUFxQnpkLElBQXJCLEVBQTJCO0FBQUUrZCxhQUFLLEVBQUU7QUFBVCxPQUEzQixDQUFoQjtBQUNBLFVBQUlDLE1BQU0sR0FBRyxLQUFiO0FBRUFsRCxZQUFNLENBQUMwQyxxQkFBUCxHQUErQixLQUEvQjs7QUFFQSxVQUFNUyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFDNUIsWUFBSUQsTUFBSixFQUFZO0FBRVp2RyxhQUFLLENBQUMsNkJBQUQsRUFBZ0N6WCxJQUFoQyxDQUFMO0FBQ0ErYyxpQkFBUyxDQUFDbUIsSUFBVixDQUFlLENBQUM7QUFBRXpTLGNBQUksRUFBRSxNQUFSO0FBQWdCMFMsY0FBSSxFQUFFO0FBQXRCLFNBQUQsQ0FBZjtBQUNBcEIsaUJBQVMsQ0FBQzNJLElBQVYsQ0FBZSxRQUFmLEVBQXlCLFVBQUFnSyxHQUFHLEVBQUk7QUFDOUIsY0FBSUosTUFBSixFQUFZOztBQUNaLGNBQUksV0FBV0ksR0FBRyxDQUFDM1MsSUFBZixJQUF1QixZQUFZMlMsR0FBRyxDQUFDRCxJQUEzQyxFQUFpRDtBQUMvQzFHLGlCQUFLLENBQUMsMkJBQUQsRUFBOEJ6WCxJQUE5QixDQUFMO0FBQ0Esa0JBQUksQ0FBQ3FlLFNBQUwsR0FBaUIsSUFBakI7O0FBQ0Esa0JBQUksQ0FBQzFYLElBQUwsQ0FBVSxXQUFWLEVBQXVCb1csU0FBdkI7O0FBQ0EsZ0JBQUksQ0FBQ0EsU0FBTCxFQUFnQjtBQUNoQmpDLGtCQUFNLENBQUMwQyxxQkFBUCxHQUErQixnQkFBZ0JULFNBQVMsQ0FBQy9jLElBQXpEO0FBRUF5WCxpQkFBSyxDQUFDLGdDQUFELEVBQW1DLE1BQUksQ0FBQ3NGLFNBQUwsQ0FBZS9jLElBQWxELENBQUw7O0FBQ0Esa0JBQUksQ0FBQytjLFNBQUwsQ0FBZXVCLEtBQWYsQ0FBcUIsWUFBTTtBQUN6QixrQkFBSU4sTUFBSixFQUFZO0FBQ1osa0JBQUksYUFBYSxNQUFJLENBQUN0QyxVQUF0QixFQUFrQztBQUNsQ2pFLG1CQUFLLENBQUMsK0NBQUQsQ0FBTDtBQUVBOEcscUJBQU87O0FBRVAsb0JBQUksQ0FBQ1osWUFBTCxDQUFrQlosU0FBbEI7O0FBQ0FBLHVCQUFTLENBQUNtQixJQUFWLENBQWUsQ0FBQztBQUFFelMsb0JBQUksRUFBRTtBQUFSLGVBQUQsQ0FBZjs7QUFDQSxvQkFBSSxDQUFDOUUsSUFBTCxDQUFVLFNBQVYsRUFBcUJvVyxTQUFyQjs7QUFDQUEsdUJBQVMsR0FBRyxJQUFaO0FBQ0Esb0JBQUksQ0FBQ3NCLFNBQUwsR0FBaUIsS0FBakI7O0FBQ0Esb0JBQUksQ0FBQ0csS0FBTDtBQUNELGFBYkQ7QUFjRCxXQXRCRCxNQXNCTztBQUNML0csaUJBQUssQ0FBQyw2QkFBRCxFQUFnQ3pYLElBQWhDLENBQUw7QUFDQSxnQkFBTXllLEdBQUcsR0FBRyxJQUFJbkosS0FBSixDQUFVLGFBQVYsQ0FBWjtBQUNBbUosZUFBRyxDQUFDMUIsU0FBSixHQUFnQkEsU0FBUyxDQUFDL2MsSUFBMUI7O0FBQ0Esa0JBQUksQ0FBQzJHLElBQUwsQ0FBVSxjQUFWLEVBQTBCOFgsR0FBMUI7QUFDRDtBQUNGLFNBOUJEO0FBK0JELE9BcENEOztBQXNDQSxlQUFTQyxlQUFULEdBQTJCO0FBQ3pCLFlBQUlWLE1BQUosRUFBWSxPQURhLENBR3pCOztBQUNBQSxjQUFNLEdBQUcsSUFBVDtBQUVBTyxlQUFPO0FBRVB4QixpQkFBUyxDQUFDQyxLQUFWO0FBQ0FELGlCQUFTLEdBQUcsSUFBWjtBQUNELE9BdkRTLENBeURWOzs7QUFDQSxVQUFNNEIsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQUYsR0FBRyxFQUFJO0FBQ3JCLFlBQU0zRyxLQUFLLEdBQUcsSUFBSXhDLEtBQUosQ0FBVSxrQkFBa0JtSixHQUE1QixDQUFkO0FBQ0EzRyxhQUFLLENBQUNpRixTQUFOLEdBQWtCQSxTQUFTLENBQUMvYyxJQUE1QjtBQUVBMGUsdUJBQWU7QUFFZmpILGFBQUssQ0FBQyxrREFBRCxFQUFxRHpYLElBQXJELEVBQTJEeWUsR0FBM0QsQ0FBTDs7QUFFQSxjQUFJLENBQUM5WCxJQUFMLENBQVUsY0FBVixFQUEwQm1SLEtBQTFCO0FBQ0QsT0FURDs7QUFXQSxlQUFTOEcsZ0JBQVQsR0FBNEI7QUFDMUJELGVBQU8sQ0FBQyxrQkFBRCxDQUFQO0FBQ0QsT0F2RVMsQ0F5RVY7OztBQUNBLGVBQVNFLE9BQVQsR0FBbUI7QUFDakJGLGVBQU8sQ0FBQyxlQUFELENBQVA7QUFDRCxPQTVFUyxDQThFVjs7O0FBQ0EsZUFBU0csU0FBVCxDQUFtQkMsRUFBbkIsRUFBdUI7QUFDckIsWUFBSWhDLFNBQVMsSUFBSWdDLEVBQUUsQ0FBQy9lLElBQUgsS0FBWStjLFNBQVMsQ0FBQy9jLElBQXZDLEVBQTZDO0FBQzNDeVgsZUFBSyxDQUFDLDRCQUFELEVBQStCc0gsRUFBRSxDQUFDL2UsSUFBbEMsRUFBd0MrYyxTQUFTLENBQUMvYyxJQUFsRCxDQUFMO0FBQ0EwZSx5QkFBZTtBQUNoQjtBQUNGLE9BcEZTLENBc0ZWOzs7QUFDQSxVQUFNSCxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQ3BCeEIsaUJBQVMsQ0FBQ3pJLGNBQVYsQ0FBeUIsTUFBekIsRUFBaUMySixlQUFqQztBQUNBbEIsaUJBQVMsQ0FBQ3pJLGNBQVYsQ0FBeUIsT0FBekIsRUFBa0NxSyxPQUFsQztBQUNBNUIsaUJBQVMsQ0FBQ3pJLGNBQVYsQ0FBeUIsT0FBekIsRUFBa0NzSyxnQkFBbEM7O0FBQ0EsY0FBSSxDQUFDdEssY0FBTCxDQUFvQixPQUFwQixFQUE2QnVLLE9BQTdCOztBQUNBLGNBQUksQ0FBQ3ZLLGNBQUwsQ0FBb0IsV0FBcEIsRUFBaUN3SyxTQUFqQztBQUNELE9BTkQ7O0FBUUEvQixlQUFTLENBQUMzSSxJQUFWLENBQWUsTUFBZixFQUF1QjZKLGVBQXZCO0FBQ0FsQixlQUFTLENBQUMzSSxJQUFWLENBQWUsT0FBZixFQUF3QnVLLE9BQXhCO0FBQ0E1QixlQUFTLENBQUMzSSxJQUFWLENBQWUsT0FBZixFQUF3QndLLGdCQUF4QjtBQUVBLFdBQUt4SyxJQUFMLENBQVUsT0FBVixFQUFtQnlLLE9BQW5CO0FBQ0EsV0FBS3pLLElBQUwsQ0FBVSxXQUFWLEVBQXVCMEssU0FBdkI7QUFFQS9CLGVBQVMsQ0FBQ0ksSUFBVjtBQUNEO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7OztXQUNFLGtCQUFTO0FBQ1AxRixXQUFLLENBQUMsYUFBRCxDQUFMO0FBQ0EsV0FBS2lFLFVBQUwsR0FBa0IsTUFBbEI7QUFDQVosWUFBTSxDQUFDMEMscUJBQVAsR0FBK0IsZ0JBQWdCLEtBQUtULFNBQUwsQ0FBZS9jLElBQTlEO0FBQ0EsV0FBSzJHLElBQUwsQ0FBVSxNQUFWO0FBQ0EsV0FBSzZYLEtBQUwsR0FMTyxDQU9QO0FBQ0E7O0FBQ0EsVUFDRSxXQUFXLEtBQUs5QyxVQUFoQixJQUNBLEtBQUt0SixJQUFMLENBQVU0SixPQURWLElBRUEsS0FBS2UsU0FBTCxDQUFldUIsS0FIakIsRUFJRTtBQUNBN0csYUFBSyxDQUFDLHlCQUFELENBQUw7QUFDQSxZQUFJL1AsQ0FBQyxHQUFHLENBQVI7QUFDQSxZQUFNNEYsQ0FBQyxHQUFHLEtBQUtxUCxRQUFMLENBQWNyYSxNQUF4Qjs7QUFDQSxlQUFPb0YsQ0FBQyxHQUFHNEYsQ0FBWCxFQUFjNUYsQ0FBQyxFQUFmLEVBQW1CO0FBQ2pCLGVBQUtxVyxLQUFMLENBQVcsS0FBS3BCLFFBQUwsQ0FBY2pWLENBQWQsQ0FBWDtBQUNEO0FBQ0Y7QUFDRjtBQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7Ozs7V0FDRSxrQkFBU3NYLE1BQVQsRUFBaUI7QUFDZixVQUNFLGNBQWMsS0FBS3RELFVBQW5CLElBQ0EsV0FBVyxLQUFLQSxVQURoQixJQUVBLGNBQWMsS0FBS0EsVUFIckIsRUFJRTtBQUNBakUsYUFBSyxDQUFDLHNDQUFELEVBQXlDdUgsTUFBTSxDQUFDdlQsSUFBaEQsRUFBc0R1VCxNQUFNLENBQUNiLElBQTdELENBQUw7QUFFQSxhQUFLeFgsSUFBTCxDQUFVLFFBQVYsRUFBb0JxWSxNQUFwQixFQUhBLENBS0E7O0FBQ0EsYUFBS3JZLElBQUwsQ0FBVSxXQUFWOztBQUVBLGdCQUFRcVksTUFBTSxDQUFDdlQsSUFBZjtBQUNFLGVBQUssTUFBTDtBQUNFLGlCQUFLd1QsV0FBTCxDQUFpQjFKLElBQUksQ0FBQ04sS0FBTCxDQUFXK0osTUFBTSxDQUFDYixJQUFsQixDQUFqQjtBQUNBOztBQUVGLGVBQUssTUFBTDtBQUNFLGlCQUFLZSxnQkFBTDtBQUNBLGlCQUFLQyxVQUFMLENBQWdCLE1BQWhCO0FBQ0EsaUJBQUt4WSxJQUFMLENBQVUsTUFBVjtBQUNBOztBQUVGLGVBQUssT0FBTDtBQUNFLGdCQUFNOFgsR0FBRyxHQUFHLElBQUluSixLQUFKLENBQVUsY0FBVixDQUFaO0FBQ0FtSixlQUFHLENBQUNXLElBQUosR0FBV0osTUFBTSxDQUFDYixJQUFsQjtBQUNBLGlCQUFLTCxPQUFMLENBQWFXLEdBQWI7QUFDQTs7QUFFRixlQUFLLFNBQUw7QUFDRSxpQkFBSzlYLElBQUwsQ0FBVSxNQUFWLEVBQWtCcVksTUFBTSxDQUFDYixJQUF6QjtBQUNBLGlCQUFLeFgsSUFBTCxDQUFVLFNBQVYsRUFBcUJxWSxNQUFNLENBQUNiLElBQTVCO0FBQ0E7QUFwQko7QUFzQkQsT0FsQ0QsTUFrQ087QUFDTDFHLGFBQUssQ0FBQyw2Q0FBRCxFQUFnRCxLQUFLaUUsVUFBckQsQ0FBTDtBQUNEO0FBQ0Y7QUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7V0FDRSxxQkFBWXlDLElBQVosRUFBa0I7QUFDaEIsV0FBS3hYLElBQUwsQ0FBVSxXQUFWLEVBQXVCd1gsSUFBdkI7QUFDQSxXQUFLekIsRUFBTCxHQUFVeUIsSUFBSSxDQUFDYixHQUFmO0FBQ0EsV0FBS1AsU0FBTCxDQUFldEIsS0FBZixDQUFxQjZCLEdBQXJCLEdBQTJCYSxJQUFJLENBQUNiLEdBQWhDO0FBQ0EsV0FBS1gsUUFBTCxHQUFnQixLQUFLMEMsY0FBTCxDQUFvQmxCLElBQUksQ0FBQ3hCLFFBQXpCLENBQWhCO0FBQ0EsV0FBS0MsWUFBTCxHQUFvQnVCLElBQUksQ0FBQ3ZCLFlBQXpCO0FBQ0EsV0FBS0MsV0FBTCxHQUFtQnNCLElBQUksQ0FBQ3RCLFdBQXhCO0FBQ0EsV0FBS3lDLE1BQUwsR0FQZ0IsQ0FRaEI7O0FBQ0EsVUFBSSxhQUFhLEtBQUs1RCxVQUF0QixFQUFrQztBQUNsQyxXQUFLd0QsZ0JBQUw7QUFDRDtBQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7Ozs7V0FDRSw0QkFBbUI7QUFBQTs7QUFDakIxZixrQkFBWSxDQUFDLEtBQUtzZCxnQkFBTixDQUFaO0FBQ0EsV0FBS0EsZ0JBQUwsR0FBd0J4ZCxVQUFVLENBQUMsWUFBTTtBQUN2QyxjQUFJLENBQUM0ZCxPQUFMLENBQWEsY0FBYjtBQUNELE9BRmlDLEVBRS9CLEtBQUtOLFlBQUwsR0FBb0IsS0FBS0MsV0FGTSxDQUFsQzs7QUFHQSxVQUFJLEtBQUt6SyxJQUFMLENBQVVtTixTQUFkLEVBQXlCO0FBQ3ZCLGFBQUt6QyxnQkFBTCxDQUFzQjBDLEtBQXRCO0FBQ0Q7QUFDRjtBQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7Ozs7V0FDRSxtQkFBVTtBQUNSLFdBQUs3RCxXQUFMLENBQWlCakgsTUFBakIsQ0FBd0IsQ0FBeEIsRUFBMkIsS0FBS2tILGFBQWhDLEVBRFEsQ0FHUjtBQUNBO0FBQ0E7O0FBQ0EsV0FBS0EsYUFBTCxHQUFxQixDQUFyQjs7QUFFQSxVQUFJLE1BQU0sS0FBS0QsV0FBTCxDQUFpQnJaLE1BQTNCLEVBQW1DO0FBQ2pDLGFBQUtxRSxJQUFMLENBQVUsT0FBVjtBQUNELE9BRkQsTUFFTztBQUNMLGFBQUs2WCxLQUFMO0FBQ0Q7QUFDRjtBQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7Ozs7V0FDRSxpQkFBUTtBQUNOLFVBQ0UsYUFBYSxLQUFLOUMsVUFBbEIsSUFDQSxLQUFLcUIsU0FBTCxDQUFlMEMsUUFEZixJQUVBLENBQUMsS0FBS3BCLFNBRk4sSUFHQSxLQUFLMUMsV0FBTCxDQUFpQnJaLE1BSm5CLEVBS0U7QUFDQW1WLGFBQUssQ0FBQywrQkFBRCxFQUFrQyxLQUFLa0UsV0FBTCxDQUFpQnJaLE1BQW5ELENBQUw7QUFDQSxhQUFLeWEsU0FBTCxDQUFlbUIsSUFBZixDQUFvQixLQUFLdkMsV0FBekIsRUFGQSxDQUdBO0FBQ0E7O0FBQ0EsYUFBS0MsYUFBTCxHQUFxQixLQUFLRCxXQUFMLENBQWlCclosTUFBdEM7QUFDQSxhQUFLcUUsSUFBTCxDQUFVLE9BQVY7QUFDRDtBQUNGO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O1dBQ0UsZUFBTXlYLEdBQU4sRUFBV3BKLE9BQVgsRUFBb0JkLEVBQXBCLEVBQXdCO0FBQ3RCLFdBQUtpTCxVQUFMLENBQWdCLFNBQWhCLEVBQTJCZixHQUEzQixFQUFnQ3BKLE9BQWhDLEVBQXlDZCxFQUF6QztBQUNBLGFBQU8sSUFBUDtBQUNEOzs7V0FFRCxjQUFLa0ssR0FBTCxFQUFVcEosT0FBVixFQUFtQmQsRUFBbkIsRUFBdUI7QUFDckIsV0FBS2lMLFVBQUwsQ0FBZ0IsU0FBaEIsRUFBMkJmLEdBQTNCLEVBQWdDcEosT0FBaEMsRUFBeUNkLEVBQXpDO0FBQ0EsYUFBTyxJQUFQO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7V0FDRSxvQkFBV3pJLElBQVgsRUFBaUIwUyxJQUFqQixFQUF1Qm5KLE9BQXZCLEVBQWdDZCxFQUFoQyxFQUFvQztBQUNsQyxVQUFJLGVBQWUsT0FBT2lLLElBQTFCLEVBQWdDO0FBQzlCakssVUFBRSxHQUFHaUssSUFBTDtBQUNBQSxZQUFJLEdBQUduWixTQUFQO0FBQ0Q7O0FBRUQsVUFBSSxlQUFlLE9BQU9nUSxPQUExQixFQUFtQztBQUNqQ2QsVUFBRSxHQUFHYyxPQUFMO0FBQ0FBLGVBQU8sR0FBRyxJQUFWO0FBQ0Q7O0FBRUQsVUFBSSxjQUFjLEtBQUswRyxVQUFuQixJQUFpQyxhQUFhLEtBQUtBLFVBQXZELEVBQW1FO0FBQ2pFO0FBQ0Q7O0FBRUQxRyxhQUFPLEdBQUdBLE9BQU8sSUFBSSxFQUFyQjtBQUNBQSxhQUFPLENBQUMwSyxRQUFSLEdBQW1CLFVBQVUxSyxPQUFPLENBQUMwSyxRQUFyQztBQUVBLFVBQU1WLE1BQU0sR0FBRztBQUNidlQsWUFBSSxFQUFFQSxJQURPO0FBRWIwUyxZQUFJLEVBQUVBLElBRk87QUFHYm5KLGVBQU8sRUFBRUE7QUFISSxPQUFmO0FBS0EsV0FBS3JPLElBQUwsQ0FBVSxjQUFWLEVBQTBCcVksTUFBMUI7QUFDQSxXQUFLckQsV0FBTCxDQUFpQnBVLElBQWpCLENBQXNCeVgsTUFBdEI7QUFDQSxVQUFJOUssRUFBSixFQUFRLEtBQUtFLElBQUwsQ0FBVSxPQUFWLEVBQW1CRixFQUFuQjtBQUNSLFdBQUtzSyxLQUFMO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBOzs7O1dBQ0UsaUJBQVE7QUFBQTs7QUFDTixVQUFNeEIsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUNsQixjQUFJLENBQUNFLE9BQUwsQ0FBYSxjQUFiOztBQUNBekYsYUFBSyxDQUFDLDZDQUFELENBQUw7O0FBQ0EsY0FBSSxDQUFDc0YsU0FBTCxDQUFlQyxLQUFmO0FBQ0QsT0FKRDs7QUFNQSxVQUFNMkMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQzVCLGNBQUksQ0FBQ3JMLGNBQUwsQ0FBb0IsU0FBcEIsRUFBK0JxTCxlQUEvQjs7QUFDQSxjQUFJLENBQUNyTCxjQUFMLENBQW9CLGNBQXBCLEVBQW9DcUwsZUFBcEM7O0FBQ0EzQyxhQUFLO0FBQ04sT0FKRDs7QUFNQSxVQUFNNEMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0FBQzNCO0FBQ0EsY0FBSSxDQUFDeEwsSUFBTCxDQUFVLFNBQVYsRUFBcUJ1TCxlQUFyQjs7QUFDQSxjQUFJLENBQUN2TCxJQUFMLENBQVUsY0FBVixFQUEwQnVMLGVBQTFCO0FBQ0QsT0FKRDs7QUFNQSxVQUFJLGNBQWMsS0FBS2pFLFVBQW5CLElBQWlDLFdBQVcsS0FBS0EsVUFBckQsRUFBaUU7QUFDL0QsYUFBS0EsVUFBTCxHQUFrQixTQUFsQjs7QUFFQSxZQUFJLEtBQUtDLFdBQUwsQ0FBaUJyWixNQUFyQixFQUE2QjtBQUMzQixlQUFLOFIsSUFBTCxDQUFVLE9BQVYsRUFBbUIsWUFBTTtBQUN2QixnQkFBSSxNQUFJLENBQUNpSyxTQUFULEVBQW9CO0FBQ2xCdUIsNEJBQWM7QUFDZixhQUZELE1BRU87QUFDTDVDLG1CQUFLO0FBQ047QUFDRixXQU5EO0FBT0QsU0FSRCxNQVFPLElBQUksS0FBS3FCLFNBQVQsRUFBb0I7QUFDekJ1Qix3QkFBYztBQUNmLFNBRk0sTUFFQTtBQUNMNUMsZUFBSztBQUNOO0FBQ0Y7O0FBRUQsYUFBTyxJQUFQO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBOzs7O1dBQ0UsaUJBQVF5QixHQUFSLEVBQWE7QUFDWGhILFdBQUssQ0FBQyxpQkFBRCxFQUFvQmdILEdBQXBCLENBQUw7QUFDQTNELFlBQU0sQ0FBQzBDLHFCQUFQLEdBQStCLEtBQS9CO0FBQ0EsV0FBSzdXLElBQUwsQ0FBVSxPQUFWLEVBQW1COFgsR0FBbkI7QUFDQSxXQUFLdkIsT0FBTCxDQUFhLGlCQUFiLEVBQWdDdUIsR0FBaEM7QUFDRDtBQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7Ozs7V0FDRSxpQkFBUW9CLE1BQVIsRUFBZ0JDLElBQWhCLEVBQXNCO0FBQ3BCLFVBQ0UsY0FBYyxLQUFLcEUsVUFBbkIsSUFDQSxXQUFXLEtBQUtBLFVBRGhCLElBRUEsY0FBYyxLQUFLQSxVQUhyQixFQUlFO0FBQ0FqRSxhQUFLLENBQUMsZ0NBQUQsRUFBbUNvSSxNQUFuQyxDQUFMLENBREEsQ0FHQTs7QUFDQXJnQixvQkFBWSxDQUFDLEtBQUt1Z0IsaUJBQU4sQ0FBWjtBQUNBdmdCLG9CQUFZLENBQUMsS0FBS3NkLGdCQUFOLENBQVosQ0FMQSxDQU9BOztBQUNBLGFBQUtDLFNBQUwsQ0FBZXhJLGtCQUFmLENBQWtDLE9BQWxDLEVBUkEsQ0FVQTs7QUFDQSxhQUFLd0ksU0FBTCxDQUFlQyxLQUFmLEdBWEEsQ0FhQTs7QUFDQSxhQUFLRCxTQUFMLENBQWV4SSxrQkFBZjs7QUFFQSxZQUFJLE9BQU9DLG1CQUFQLEtBQStCLFVBQW5DLEVBQStDO0FBQzdDQSw2QkFBbUIsQ0FBQyxTQUFELEVBQVksS0FBS3lJLG9CQUFqQixFQUF1QyxLQUF2QyxDQUFuQjtBQUNELFNBbEJELENBb0JBOzs7QUFDQSxhQUFLdkIsVUFBTCxHQUFrQixRQUFsQixDQXJCQSxDQXVCQTs7QUFDQSxhQUFLZ0IsRUFBTCxHQUFVLElBQVYsQ0F4QkEsQ0EwQkE7O0FBQ0EsYUFBSy9WLElBQUwsQ0FBVSxPQUFWLEVBQW1Ca1osTUFBbkIsRUFBMkJDLElBQTNCLEVBM0JBLENBNkJBO0FBQ0E7O0FBQ0EsYUFBS25FLFdBQUwsR0FBbUIsRUFBbkI7QUFDQSxhQUFLQyxhQUFMLEdBQXFCLENBQXJCO0FBQ0Q7QUFDRjtBQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O1dBQ0Usd0JBQWVlLFFBQWYsRUFBeUI7QUFDdkIsVUFBTXFELGdCQUFnQixHQUFHLEVBQXpCO0FBQ0EsVUFBSXRZLENBQUMsR0FBRyxDQUFSO0FBQ0EsVUFBTTBHLENBQUMsR0FBR3VPLFFBQVEsQ0FBQ3JhLE1BQW5COztBQUNBLGFBQU9vRixDQUFDLEdBQUcwRyxDQUFYLEVBQWMxRyxDQUFDLEVBQWYsRUFBbUI7QUFDakIsWUFBSSxDQUFDLEtBQUt1VCxVQUFMLENBQWdCM1IsT0FBaEIsQ0FBd0JxVCxRQUFRLENBQUNqVixDQUFELENBQWhDLENBQUwsRUFDRXNZLGdCQUFnQixDQUFDelksSUFBakIsQ0FBc0JvVixRQUFRLENBQUNqVixDQUFELENBQTlCO0FBQ0g7O0FBQ0QsYUFBT3NZLGdCQUFQO0FBQ0Q7Ozs7RUEzb0JrQmxNLE87O0FBOG9CckJnSCxNQUFNLENBQUMwQyxxQkFBUCxHQUErQixLQUEvQjtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUExQyxNQUFNLENBQUNFLFFBQVAsR0FBa0JFLE1BQU0sQ0FBQ0YsUUFBekIsQyxDQUFtQzs7QUFFbkMsU0FBU29DLEtBQVQsQ0FBZWxVLEdBQWYsRUFBb0I7QUFDbEIsTUFBTXpCLENBQUMsR0FBRyxFQUFWOztBQUNBLE9BQUssSUFBSUMsQ0FBVCxJQUFjd0IsR0FBZCxFQUFtQjtBQUNqQixRQUFJQSxHQUFHLENBQUNNLGNBQUosQ0FBbUI5QixDQUFuQixDQUFKLEVBQTJCO0FBQ3pCRCxPQUFDLENBQUNDLENBQUQsQ0FBRCxHQUFPd0IsR0FBRyxDQUFDeEIsQ0FBRCxDQUFWO0FBQ0Q7QUFDRjs7QUFDRCxTQUFPRCxDQUFQO0FBQ0Q7O0FBRUR3SyxNQUFNLENBQUNDLE9BQVAsR0FBaUI0SSxNQUFqQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pxQkEsSUFBTUksTUFBTSxHQUFHN1MsbUJBQU8sQ0FBQyxzRUFBRCxDQUF0Qjs7QUFDQSxJQUFNeUwsT0FBTyxHQUFHekwsbUJBQU8sQ0FBQyxvRUFBRCxDQUF2Qjs7QUFDQSxJQUFNb1AsS0FBSyxHQUFHcFAsbUJBQU8sQ0FBQyxrREFBRCxDQUFQLENBQWlCLDRCQUFqQixDQUFkOztJQUVNNFgsUzs7Ozs7QUFDSjtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRSxxQkFBWTdOLElBQVosRUFBa0I7QUFBQTs7QUFBQTs7QUFDaEI7QUFFQSxVQUFLQSxJQUFMLEdBQVlBLElBQVo7QUFDQSxVQUFLcUosS0FBTCxHQUFhckosSUFBSSxDQUFDcUosS0FBbEI7QUFDQSxVQUFLQyxVQUFMLEdBQWtCLEVBQWxCO0FBQ0EsVUFBSzZCLE1BQUwsR0FBY25MLElBQUksQ0FBQ21MLE1BQW5CO0FBTmdCO0FBT2pCO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O1dBQ0UsaUJBQVFhLEdBQVIsRUFBYTBCLElBQWIsRUFBbUI7QUFDakIsVUFBTXJCLEdBQUcsR0FBRyxJQUFJbkosS0FBSixDQUFVOEksR0FBVixDQUFaO0FBQ0FLLFNBQUcsQ0FBQ2hULElBQUosR0FBVyxnQkFBWDtBQUNBZ1QsU0FBRyxDQUFDeUIsV0FBSixHQUFrQkosSUFBbEI7QUFDQSxXQUFLblosSUFBTCxDQUFVLE9BQVYsRUFBbUI4WCxHQUFuQjtBQUNBLGFBQU8sSUFBUDtBQUNEO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7OztXQUNFLGdCQUFPO0FBQ0wsVUFBSSxhQUFhLEtBQUsvQyxVQUFsQixJQUFnQyxPQUFPLEtBQUtBLFVBQWhELEVBQTREO0FBQzFELGFBQUtBLFVBQUwsR0FBa0IsU0FBbEI7QUFDQSxhQUFLeUUsTUFBTDtBQUNEOztBQUVELGFBQU8sSUFBUDtBQUNEO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7OztXQUNFLGlCQUFRO0FBQ04sVUFBSSxjQUFjLEtBQUt6RSxVQUFuQixJQUFpQyxXQUFXLEtBQUtBLFVBQXJELEVBQWlFO0FBQy9ELGFBQUswRSxPQUFMO0FBQ0EsYUFBS2xELE9BQUw7QUFDRDs7QUFFRCxhQUFPLElBQVA7QUFDRDtBQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztXQUNFLGNBQUttRCxPQUFMLEVBQWM7QUFDWixVQUFJLFdBQVcsS0FBSzNFLFVBQXBCLEVBQWdDO0FBQzlCLGFBQUs0RSxLQUFMLENBQVdELE9BQVg7QUFDRCxPQUZELE1BRU87QUFDTDtBQUNBNUksYUFBSyxDQUFDLDJDQUFELENBQUw7QUFDRDtBQUNGO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7OztXQUNFLGtCQUFTO0FBQ1AsV0FBS2lFLFVBQUwsR0FBa0IsTUFBbEI7QUFDQSxXQUFLK0QsUUFBTCxHQUFnQixJQUFoQjtBQUNBLFdBQUs5WSxJQUFMLENBQVUsTUFBVjtBQUNEO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O1dBQ0UsZ0JBQU93WCxJQUFQLEVBQWE7QUFDWCxVQUFNYSxNQUFNLEdBQUc5RCxNQUFNLENBQUNxRixZQUFQLENBQW9CcEMsSUFBcEIsRUFBMEIsS0FBS1osTUFBTCxDQUFZaUQsVUFBdEMsQ0FBZjtBQUNBLFdBQUszQyxRQUFMLENBQWNtQixNQUFkO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7Ozs7V0FDRSxrQkFBU0EsTUFBVCxFQUFpQjtBQUNmLFdBQUtyWSxJQUFMLENBQVUsUUFBVixFQUFvQnFZLE1BQXBCO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBOzs7O1dBQ0UsbUJBQVU7QUFDUixXQUFLdEQsVUFBTCxHQUFrQixRQUFsQjtBQUNBLFdBQUsvVSxJQUFMLENBQVUsT0FBVjtBQUNEOzs7O0VBL0dxQm1OLE87O0FBa0h4QjdCLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQitOLFNBQWpCLEM7Ozs7Ozs7Ozs7QUN0SEEsSUFBTVEsY0FBYyxHQUFHcFksbUJBQU8sQ0FBQyw4R0FBRCxDQUE5Qjs7QUFDQSxJQUFNcVksR0FBRyxHQUFHclksbUJBQU8sQ0FBQyxvRkFBRCxDQUFuQjs7QUFDQSxJQUFNc1ksS0FBSyxHQUFHdFksbUJBQU8sQ0FBQyx3RkFBRCxDQUFyQjs7QUFDQSxJQUFNdVksU0FBUyxHQUFHdlksbUJBQU8sQ0FBQyxnRkFBRCxDQUF6Qjs7QUFFQTZKLGVBQUEsR0FBa0IyTyxPQUFsQjtBQUNBM08saUJBQUEsR0FBb0IwTyxTQUFwQjtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQyxPQUFULENBQWlCek8sSUFBakIsRUFBdUI7QUFDckIsTUFBSTBPLEdBQUo7QUFDQSxNQUFJQyxFQUFFLEdBQUcsS0FBVDtBQUNBLE1BQUlDLEVBQUUsR0FBRyxLQUFUO0FBQ0EsTUFBTS9FLEtBQUssR0FBRyxVQUFVN0osSUFBSSxDQUFDNkosS0FBN0I7O0FBRUEsTUFBSSxPQUFPeGIsUUFBUCxLQUFvQixXQUF4QixFQUFxQztBQUNuQyxRQUFNd2dCLEtBQUssR0FBRyxhQUFheGdCLFFBQVEsQ0FBQ3VhLFFBQXBDO0FBQ0EsUUFBSVEsSUFBSSxHQUFHL2EsUUFBUSxDQUFDK2EsSUFBcEIsQ0FGbUMsQ0FJbkM7O0FBQ0EsUUFBSSxDQUFDQSxJQUFMLEVBQVc7QUFDVEEsVUFBSSxHQUFHeUYsS0FBSyxHQUFHLEdBQUgsR0FBUyxFQUFyQjtBQUNEOztBQUVERixNQUFFLEdBQUczTyxJQUFJLENBQUNpSixRQUFMLEtBQWtCNWEsUUFBUSxDQUFDNGEsUUFBM0IsSUFBdUNHLElBQUksS0FBS3BKLElBQUksQ0FBQ29KLElBQTFEO0FBQ0F3RixNQUFFLEdBQUc1TyxJQUFJLENBQUNtSixNQUFMLEtBQWdCMEYsS0FBckI7QUFDRDs7QUFFRDdPLE1BQUksQ0FBQzhPLE9BQUwsR0FBZUgsRUFBZjtBQUNBM08sTUFBSSxDQUFDK08sT0FBTCxHQUFlSCxFQUFmO0FBQ0FGLEtBQUcsR0FBRyxJQUFJTCxjQUFKLENBQW1Cck8sSUFBbkIsQ0FBTjs7QUFFQSxNQUFJLFVBQVUwTyxHQUFWLElBQWlCLENBQUMxTyxJQUFJLENBQUNnUCxVQUEzQixFQUF1QztBQUNyQyxXQUFPLElBQUlWLEdBQUosQ0FBUXRPLElBQVIsQ0FBUDtBQUNELEdBRkQsTUFFTztBQUNMLFFBQUksQ0FBQzZKLEtBQUwsRUFBWSxNQUFNLElBQUkzRyxLQUFKLENBQVUsZ0JBQVYsQ0FBTjtBQUNaLFdBQU8sSUFBSXFMLEtBQUosQ0FBVXZPLElBQVYsQ0FBUDtBQUNEO0FBQ0YsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUNELElBQU1pUCxPQUFPLEdBQUdoWixtQkFBTyxDQUFDLDRFQUFELENBQXZCOztBQUNBLElBQU1pWixVQUFVLEdBQUdqWixtQkFBTyxDQUFDLGdGQUFELENBQTFCOztBQUVBLElBQU1rWixRQUFRLEdBQUcsS0FBakI7QUFDQSxJQUFNQyxlQUFlLEdBQUcsTUFBeEI7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSS9NLFNBQUo7O0lBRU1nTixZOzs7OztBQUNKO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNFLHdCQUFZclAsSUFBWixFQUFrQjtBQUFBOztBQUFBOztBQUNoQiw4QkFBTUEsSUFBTjtBQUVBLFVBQUtxSixLQUFMLEdBQWEsTUFBS0EsS0FBTCxJQUFjLEVBQTNCLENBSGdCLENBS2hCO0FBQ0E7O0FBQ0EsUUFBSSxDQUFDaEgsU0FBTCxFQUFnQjtBQUNkO0FBQ0FBLGVBQVMsR0FBRzZNLFVBQVUsQ0FBQ0ksTUFBWCxHQUFvQkosVUFBVSxDQUFDSSxNQUFYLElBQXFCLEVBQXJEO0FBQ0QsS0FWZSxDQVloQjs7O0FBQ0EsVUFBS25LLEtBQUwsR0FBYTlDLFNBQVMsQ0FBQ25TLE1BQXZCLENBYmdCLENBZWhCOztBQUNBbVMsYUFBUyxDQUFDbE4sSUFBVixDQUFlLE1BQUtvYSxNQUFMLENBQVkxUSxJQUFaLCtCQUFmLEVBaEJnQixDQWtCaEI7O0FBQ0EsVUFBS3dLLEtBQUwsQ0FBV3JOLENBQVgsR0FBZSxNQUFLbUosS0FBcEI7QUFuQmdCO0FBb0JqQjtBQUVEO0FBQ0Y7QUFDQTs7Ozs7U0FDRSxlQUFxQjtBQUNuQixhQUFPLEtBQVA7QUFDRDtBQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7Ozs7V0FDRSxtQkFBVTtBQUNSLFVBQUksS0FBS3FLLE1BQVQsRUFBaUI7QUFDZjtBQUNBLGFBQUtBLE1BQUwsQ0FBWWpELE9BQVosR0FBc0IsWUFBTSxDQUFFLENBQTlCOztBQUNBLGFBQUtpRCxNQUFMLENBQVl2YSxVQUFaLENBQXVCd2EsV0FBdkIsQ0FBbUMsS0FBS0QsTUFBeEM7QUFDQSxhQUFLQSxNQUFMLEdBQWMsSUFBZDtBQUNEOztBQUVELFVBQUksS0FBS0UsSUFBVCxFQUFlO0FBQ2IsYUFBS0EsSUFBTCxDQUFVemEsVUFBVixDQUFxQndhLFdBQXJCLENBQWlDLEtBQUtDLElBQXRDO0FBQ0EsYUFBS0EsSUFBTCxHQUFZLElBQVo7QUFDQSxhQUFLQyxNQUFMLEdBQWMsSUFBZDtBQUNEOztBQUVEO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBOzs7O1dBQ0Usa0JBQVM7QUFBQTs7QUFDUCxVQUFNSCxNQUFNLEdBQUcvaEIsUUFBUSxDQUFDMkQsYUFBVCxDQUF1QixRQUF2QixDQUFmOztBQUVBLFVBQUksS0FBS29lLE1BQVQsRUFBaUI7QUFDZixhQUFLQSxNQUFMLENBQVl2YSxVQUFaLENBQXVCd2EsV0FBdkIsQ0FBbUMsS0FBS0QsTUFBeEM7QUFDQSxhQUFLQSxNQUFMLEdBQWMsSUFBZDtBQUNEOztBQUVEQSxZQUFNLENBQUNJLEtBQVAsR0FBZSxJQUFmO0FBQ0FKLFlBQU0sQ0FBQ0ssR0FBUCxHQUFhLEtBQUtsSCxHQUFMLEVBQWI7O0FBQ0E2RyxZQUFNLENBQUNqRCxPQUFQLEdBQWlCLFVBQUF4WixDQUFDLEVBQUk7QUFDcEIsY0FBSSxDQUFDMlksT0FBTCxDQUFhLGtCQUFiLEVBQWlDM1ksQ0FBakM7QUFDRCxPQUZEOztBQUlBLFVBQU0rYyxRQUFRLEdBQUdyaUIsUUFBUSxDQUFDc2lCLG9CQUFULENBQThCLFFBQTlCLEVBQXdDLENBQXhDLENBQWpCOztBQUNBLFVBQUlELFFBQUosRUFBYztBQUNaQSxnQkFBUSxDQUFDN2EsVUFBVCxDQUFvQithLFlBQXBCLENBQWlDUixNQUFqQyxFQUF5Q00sUUFBekM7QUFDRCxPQUZELE1BRU87QUFDTCxTQUFDcmlCLFFBQVEsQ0FBQ3dpQixJQUFULElBQWlCeGlCLFFBQVEsQ0FBQ0MsSUFBM0IsRUFBaUMyRCxXQUFqQyxDQUE2Q21lLE1BQTdDO0FBQ0Q7O0FBQ0QsV0FBS0EsTUFBTCxHQUFjQSxNQUFkO0FBRUEsVUFBTVUsU0FBUyxHQUNiLGdCQUFnQixPQUFPM0wsU0FBdkIsSUFBb0MsU0FBU3ZNLElBQVQsQ0FBY3VNLFNBQVMsQ0FBQ0MsU0FBeEIsQ0FEdEM7O0FBR0EsVUFBSTBMLFNBQUosRUFBZTtBQUNiaGpCLGtCQUFVLENBQUMsWUFBVztBQUNwQixjQUFNeWlCLE1BQU0sR0FBR2xpQixRQUFRLENBQUMyRCxhQUFULENBQXVCLFFBQXZCLENBQWY7QUFDQTNELGtCQUFRLENBQUNDLElBQVQsQ0FBYzJELFdBQWQsQ0FBMEJzZSxNQUExQjtBQUNBbGlCLGtCQUFRLENBQUNDLElBQVQsQ0FBYytoQixXQUFkLENBQTBCRSxNQUExQjtBQUNELFNBSlMsRUFJUCxHQUpPLENBQVY7QUFLRDtBQUNGO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7V0FDRSxpQkFBUTVELElBQVIsRUFBY2pLLEVBQWQsRUFBa0I7QUFBQTs7QUFDaEIsVUFBSTZOLE1BQUo7O0FBRUEsVUFBSSxDQUFDLEtBQUtELElBQVYsRUFBZ0I7QUFDZCxZQUFNQSxJQUFJLEdBQUdqaUIsUUFBUSxDQUFDMkQsYUFBVCxDQUF1QixNQUF2QixDQUFiO0FBQ0EsWUFBTStlLElBQUksR0FBRzFpQixRQUFRLENBQUMyRCxhQUFULENBQXVCLFVBQXZCLENBQWI7QUFDQSxZQUFNa1osRUFBRSxHQUFJLEtBQUs4RixRQUFMLEdBQWdCLGdCQUFnQixLQUFLakwsS0FBakQ7QUFFQXVLLFlBQUksQ0FBQ1csU0FBTCxHQUFpQixVQUFqQjtBQUNBWCxZQUFJLENBQUMvWixLQUFMLENBQVc4SixRQUFYLEdBQXNCLFVBQXRCO0FBQ0FpUSxZQUFJLENBQUMvWixLQUFMLENBQVcyYSxHQUFYLEdBQWlCLFNBQWpCO0FBQ0FaLFlBQUksQ0FBQy9aLEtBQUwsQ0FBVzRhLElBQVgsR0FBa0IsU0FBbEI7QUFDQWIsWUFBSSxDQUFDN1YsTUFBTCxHQUFjeVEsRUFBZDtBQUNBb0YsWUFBSSxDQUFDYyxNQUFMLEdBQWMsTUFBZDtBQUNBZCxZQUFJLENBQUN4YixZQUFMLENBQWtCLGdCQUFsQixFQUFvQyxPQUFwQztBQUNBaWMsWUFBSSxDQUFDdmlCLElBQUwsR0FBWSxHQUFaO0FBQ0E4aEIsWUFBSSxDQUFDcmUsV0FBTCxDQUFpQjhlLElBQWpCO0FBQ0ExaUIsZ0JBQVEsQ0FBQ0MsSUFBVCxDQUFjMkQsV0FBZCxDQUEwQnFlLElBQTFCO0FBRUEsYUFBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsYUFBS1MsSUFBTCxHQUFZQSxJQUFaO0FBQ0Q7O0FBRUQsV0FBS1QsSUFBTCxDQUFVcmIsTUFBVixHQUFtQixLQUFLc1UsR0FBTCxFQUFuQjs7QUFFQSxlQUFTOEgsUUFBVCxHQUFvQjtBQUNsQkMsa0JBQVU7QUFDVjVPLFVBQUU7QUFDSDs7QUFFRCxVQUFNNE8sVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUN2QixZQUFJLE1BQUksQ0FBQ2YsTUFBVCxFQUFpQjtBQUNmLGNBQUk7QUFDRixrQkFBSSxDQUFDRCxJQUFMLENBQVVELFdBQVYsQ0FBc0IsTUFBSSxDQUFDRSxNQUEzQjtBQUNELFdBRkQsQ0FFRSxPQUFPNWMsQ0FBUCxFQUFVO0FBQ1Ysa0JBQUksQ0FBQzJZLE9BQUwsQ0FBYSxvQ0FBYixFQUFtRDNZLENBQW5EO0FBQ0Q7QUFDRjs7QUFFRCxZQUFJO0FBQ0Y7QUFDQSxjQUFNNGQsSUFBSSxHQUFHLHNDQUFzQyxNQUFJLENBQUNQLFFBQTNDLEdBQXNELElBQW5FO0FBQ0FULGdCQUFNLEdBQUdsaUIsUUFBUSxDQUFDMkQsYUFBVCxDQUF1QnVmLElBQXZCLENBQVQ7QUFDRCxTQUpELENBSUUsT0FBTzVkLENBQVAsRUFBVTtBQUNWNGMsZ0JBQU0sR0FBR2xpQixRQUFRLENBQUMyRCxhQUFULENBQXVCLFFBQXZCLENBQVQ7QUFDQXVlLGdCQUFNLENBQUMvaEIsSUFBUCxHQUFjLE1BQUksQ0FBQ3dpQixRQUFuQjtBQUNBVCxnQkFBTSxDQUFDRSxHQUFQLEdBQWEsY0FBYjtBQUNEOztBQUVERixjQUFNLENBQUNyRixFQUFQLEdBQVksTUFBSSxDQUFDOEYsUUFBakI7O0FBRUEsY0FBSSxDQUFDVixJQUFMLENBQVVyZSxXQUFWLENBQXNCc2UsTUFBdEI7O0FBQ0EsY0FBSSxDQUFDQSxNQUFMLEdBQWNBLE1BQWQ7QUFDRCxPQXZCRDs7QUF5QkFlLGdCQUFVLEdBdkRNLENBeURoQjtBQUNBOztBQUNBM0UsVUFBSSxHQUFHQSxJQUFJLENBQUN2UixPQUFMLENBQWE0VSxlQUFiLEVBQThCLE1BQTlCLENBQVA7QUFDQSxXQUFLZSxJQUFMLENBQVVTLEtBQVYsR0FBa0I3RSxJQUFJLENBQUN2UixPQUFMLENBQWEyVSxRQUFiLEVBQXVCLEtBQXZCLENBQWxCOztBQUVBLFVBQUk7QUFDRixhQUFLTyxJQUFMLENBQVVtQixNQUFWO0FBQ0QsT0FGRCxDQUVFLE9BQU85ZCxDQUFQLEVBQVUsQ0FBRTs7QUFFZCxVQUFJLEtBQUs0YyxNQUFMLENBQVltQixXQUFoQixFQUE2QjtBQUMzQixhQUFLbkIsTUFBTCxDQUFZb0Isa0JBQVosR0FBaUMsWUFBTTtBQUNyQyxjQUFJLE1BQUksQ0FBQ3BCLE1BQUwsQ0FBWXJHLFVBQVosS0FBMkIsVUFBL0IsRUFBMkM7QUFDekNtSCxvQkFBUTtBQUNUO0FBQ0YsU0FKRDtBQUtELE9BTkQsTUFNTztBQUNMLGFBQUtkLE1BQUwsQ0FBWXFCLE1BQVosR0FBcUJQLFFBQXJCO0FBQ0Q7QUFDRjs7OztFQW5Md0J4QixPOztBQXNMM0JwUCxNQUFNLENBQUNDLE9BQVAsR0FBaUJ1UCxZQUFqQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xNQTtBQUVBLElBQU1oQixjQUFjLEdBQUdwWSxtQkFBTyxDQUFDLDhHQUFELENBQTlCOztBQUNBLElBQU1nWixPQUFPLEdBQUdoWixtQkFBTyxDQUFDLDRFQUFELENBQXZCOztBQUNBLElBQU15TCxPQUFPLEdBQUd6TCxtQkFBTyxDQUFDLG9FQUFELENBQXZCOztBQUNBLGVBQWlCQSxtQkFBTyxDQUFDLDREQUFELENBQXhCO0FBQUEsSUFBUWdiLElBQVIsWUFBUUEsSUFBUjs7QUFDQSxJQUFNL0IsVUFBVSxHQUFHalosbUJBQU8sQ0FBQyxnRkFBRCxDQUExQjs7QUFFQSxJQUFNb1AsS0FBSyxHQUFHcFAsbUJBQU8sQ0FBQyxrREFBRCxDQUFQLENBQWlCLDhCQUFqQixDQUFkO0FBRUE7QUFDQTtBQUNBOzs7QUFFQSxTQUFTaWIsS0FBVCxHQUFpQixDQUFFOztBQUVuQixJQUFNQyxPQUFPLEdBQUksWUFBVztBQUMxQixNQUFNekMsR0FBRyxHQUFHLElBQUlMLGNBQUosQ0FBbUI7QUFBRVMsV0FBTyxFQUFFO0FBQVgsR0FBbkIsQ0FBWjtBQUNBLFNBQU8sUUFBUUosR0FBRyxDQUFDMEMsWUFBbkI7QUFDRCxDQUhlLEVBQWhCOztJQUtNOUMsRzs7Ozs7QUFDSjtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRSxlQUFZdE8sSUFBWixFQUFrQjtBQUFBOztBQUFBOztBQUNoQiw4QkFBTUEsSUFBTjs7QUFFQSxRQUFJLE9BQU8zUixRQUFQLEtBQW9CLFdBQXhCLEVBQXFDO0FBQ25DLFVBQU13Z0IsS0FBSyxHQUFHLGFBQWF4Z0IsUUFBUSxDQUFDdWEsUUFBcEM7QUFDQSxVQUFJUSxJQUFJLEdBQUcvYSxRQUFRLENBQUMrYSxJQUFwQixDQUZtQyxDQUluQzs7QUFDQSxVQUFJLENBQUNBLElBQUwsRUFBVztBQUNUQSxZQUFJLEdBQUd5RixLQUFLLEdBQUcsR0FBSCxHQUFTLEVBQXJCO0FBQ0Q7O0FBRUQsWUFBS0YsRUFBTCxHQUNHLE9BQU90Z0IsUUFBUCxLQUFvQixXQUFwQixJQUNDMlIsSUFBSSxDQUFDaUosUUFBTCxLQUFrQjVhLFFBQVEsQ0FBQzRhLFFBRDdCLElBRUFHLElBQUksS0FBS3BKLElBQUksQ0FBQ29KLElBSGhCO0FBSUEsWUFBS3dGLEVBQUwsR0FBVTVPLElBQUksQ0FBQ21KLE1BQUwsS0FBZ0IwRixLQUExQjtBQUNEO0FBQ0Q7QUFDSjtBQUNBOzs7QUFDSSxRQUFNd0MsV0FBVyxHQUFHclIsSUFBSSxJQUFJQSxJQUFJLENBQUNxUixXQUFqQztBQUNBLFVBQUtDLGNBQUwsR0FBc0JILE9BQU8sSUFBSSxDQUFDRSxXQUFsQztBQXRCZ0I7QUF1QmpCO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztXQUNFLG1CQUFtQjtBQUFBLFVBQVhyUixJQUFXLHVFQUFKLEVBQUk7QUFDakIxUCxZQUFNLENBQUNDLE1BQVAsQ0FBY3lQLElBQWQsRUFBb0I7QUFBRTJPLFVBQUUsRUFBRSxLQUFLQSxFQUFYO0FBQWVDLFVBQUUsRUFBRSxLQUFLQTtBQUF4QixPQUFwQixFQUFrRCxLQUFLNU8sSUFBdkQ7QUFDQSxhQUFPLElBQUl1UixPQUFKLENBQVksS0FBSzVJLEdBQUwsRUFBWixFQUF3QjNJLElBQXhCLENBQVA7QUFDRDtBQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O1dBQ0UsaUJBQVErTCxJQUFSLEVBQWNqSyxFQUFkLEVBQWtCO0FBQUE7O0FBQ2hCLFVBQU0wUCxHQUFHLEdBQUcsS0FBS0MsT0FBTCxDQUFhO0FBQ3ZCakIsY0FBTSxFQUFFLE1BRGU7QUFFdkJ6RSxZQUFJLEVBQUVBO0FBRmlCLE9BQWIsQ0FBWjtBQUlBeUYsU0FBRyxDQUFDNVAsRUFBSixDQUFPLFNBQVAsRUFBa0JFLEVBQWxCO0FBQ0EwUCxTQUFHLENBQUM1UCxFQUFKLENBQU8sT0FBUCxFQUFnQixVQUFBeUssR0FBRyxFQUFJO0FBQ3JCLGNBQUksQ0FBQ1gsT0FBTCxDQUFhLGdCQUFiLEVBQStCVyxHQUEvQjtBQUNELE9BRkQ7QUFHRDtBQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7Ozs7V0FDRSxrQkFBUztBQUFBOztBQUNQaEgsV0FBSyxDQUFDLFVBQUQsQ0FBTDtBQUNBLFVBQU1tTSxHQUFHLEdBQUcsS0FBS0MsT0FBTCxFQUFaO0FBQ0FELFNBQUcsQ0FBQzVQLEVBQUosQ0FBTyxNQUFQLEVBQWUsS0FBSzJOLE1BQUwsQ0FBWTFRLElBQVosQ0FBaUIsSUFBakIsQ0FBZjtBQUNBMlMsU0FBRyxDQUFDNVAsRUFBSixDQUFPLE9BQVAsRUFBZ0IsVUFBQXlLLEdBQUcsRUFBSTtBQUNyQixjQUFJLENBQUNYLE9BQUwsQ0FBYSxnQkFBYixFQUErQlcsR0FBL0I7QUFDRCxPQUZEO0FBR0EsV0FBS3FGLE9BQUwsR0FBZUYsR0FBZjtBQUNEOzs7O0VBMUVldkMsTzs7SUE2RVpzQyxPOzs7OztBQUNKO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNFLG1CQUFZNUksR0FBWixFQUFpQjNJLElBQWpCLEVBQXVCO0FBQUE7O0FBQUE7O0FBQ3JCO0FBQ0EsV0FBS0EsSUFBTCxHQUFZQSxJQUFaO0FBRUEsV0FBS3dRLE1BQUwsR0FBY3hRLElBQUksQ0FBQ3dRLE1BQUwsSUFBZSxLQUE3QjtBQUNBLFdBQUs3SCxHQUFMLEdBQVdBLEdBQVg7QUFDQSxXQUFLaUgsS0FBTCxHQUFhLFVBQVU1UCxJQUFJLENBQUM0UCxLQUE1QjtBQUNBLFdBQUs3RCxJQUFMLEdBQVluWixTQUFTLEtBQUtvTixJQUFJLENBQUMrTCxJQUFuQixHQUEwQi9MLElBQUksQ0FBQytMLElBQS9CLEdBQXNDLElBQWxEOztBQUVBLFdBQUs0RixNQUFMOztBQVRxQjtBQVV0QjtBQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7Ozs7O1dBQ0Usa0JBQVM7QUFBQTs7QUFDUCxVQUFNM1IsSUFBSSxHQUFHaVIsSUFBSSxDQUNmLEtBQUtqUixJQURVLEVBRWYsT0FGZSxFQUdmLFlBSGUsRUFJZixLQUplLEVBS2YsS0FMZSxFQU1mLFlBTmUsRUFPZixNQVBlLEVBUWYsSUFSZSxFQVNmLFNBVGUsRUFVZixvQkFWZSxFQVdmLFdBWGUsQ0FBakI7QUFhQUEsVUFBSSxDQUFDOE8sT0FBTCxHQUFlLENBQUMsQ0FBQyxLQUFLOU8sSUFBTCxDQUFVMk8sRUFBM0I7QUFDQTNPLFVBQUksQ0FBQytPLE9BQUwsR0FBZSxDQUFDLENBQUMsS0FBSy9PLElBQUwsQ0FBVTRPLEVBQTNCO0FBRUEsVUFBTUYsR0FBRyxHQUFJLEtBQUtBLEdBQUwsR0FBVyxJQUFJTCxjQUFKLENBQW1Cck8sSUFBbkIsQ0FBeEI7O0FBRUEsVUFBSTtBQUNGcUYsYUFBSyxDQUFDLGlCQUFELEVBQW9CLEtBQUttTCxNQUF6QixFQUFpQyxLQUFLN0gsR0FBdEMsQ0FBTDtBQUNBK0YsV0FBRyxDQUFDM0QsSUFBSixDQUFTLEtBQUt5RixNQUFkLEVBQXNCLEtBQUs3SCxHQUEzQixFQUFnQyxLQUFLaUgsS0FBckM7O0FBQ0EsWUFBSTtBQUNGLGNBQUksS0FBSzVQLElBQUwsQ0FBVTRSLFlBQWQsRUFBNEI7QUFDMUJsRCxlQUFHLENBQUNtRCxxQkFBSixJQUE2Qm5ELEdBQUcsQ0FBQ21ELHFCQUFKLENBQTBCLElBQTFCLENBQTdCOztBQUNBLGlCQUFLLElBQUl2YyxDQUFULElBQWMsS0FBSzBLLElBQUwsQ0FBVTRSLFlBQXhCLEVBQXNDO0FBQ3BDLGtCQUFJLEtBQUs1UixJQUFMLENBQVU0UixZQUFWLENBQXVCeGEsY0FBdkIsQ0FBc0M5QixDQUF0QyxDQUFKLEVBQThDO0FBQzVDb1osbUJBQUcsQ0FBQ29ELGdCQUFKLENBQXFCeGMsQ0FBckIsRUFBd0IsS0FBSzBLLElBQUwsQ0FBVTRSLFlBQVYsQ0FBdUJ0YyxDQUF2QixDQUF4QjtBQUNEO0FBQ0Y7QUFDRjtBQUNGLFNBVEQsQ0FTRSxPQUFPdkMsQ0FBUCxFQUFVLENBQUU7O0FBRWQsWUFBSSxXQUFXLEtBQUt5ZCxNQUFwQixFQUE0QjtBQUMxQixjQUFJO0FBQ0Y5QixlQUFHLENBQUNvRCxnQkFBSixDQUFxQixjQUFyQixFQUFxQywwQkFBckM7QUFDRCxXQUZELENBRUUsT0FBTy9lLENBQVAsRUFBVSxDQUFFO0FBQ2Y7O0FBRUQsWUFBSTtBQUNGMmIsYUFBRyxDQUFDb0QsZ0JBQUosQ0FBcUIsUUFBckIsRUFBK0IsS0FBL0I7QUFDRCxTQUZELENBRUUsT0FBTy9lLENBQVAsRUFBVSxDQUFFLENBdEJaLENBd0JGOzs7QUFDQSxZQUFJLHFCQUFxQjJiLEdBQXpCLEVBQThCO0FBQzVCQSxhQUFHLENBQUMvRSxlQUFKLEdBQXNCLEtBQUszSixJQUFMLENBQVUySixlQUFoQztBQUNEOztBQUVELFlBQUksS0FBSzNKLElBQUwsQ0FBVStSLGNBQWQsRUFBOEI7QUFDNUJyRCxhQUFHLENBQUN6aEIsT0FBSixHQUFjLEtBQUsrUyxJQUFMLENBQVUrUixjQUF4QjtBQUNEOztBQUVELFlBQUksS0FBS0MsTUFBTCxFQUFKLEVBQW1CO0FBQ2pCdEQsYUFBRyxDQUFDc0MsTUFBSixHQUFhLFlBQU07QUFDakIsa0JBQUksQ0FBQ2lCLE1BQUw7QUFDRCxXQUZEOztBQUdBdkQsYUFBRyxDQUFDbkMsT0FBSixHQUFjLFlBQU07QUFDbEIsa0JBQUksQ0FBQ2IsT0FBTCxDQUFhZ0QsR0FBRyxDQUFDd0QsWUFBakI7QUFDRCxXQUZEO0FBR0QsU0FQRCxNQU9PO0FBQ0x4RCxhQUFHLENBQUNxQyxrQkFBSixHQUF5QixZQUFNO0FBQzdCLGdCQUFJLE1BQU1yQyxHQUFHLENBQUNwRixVQUFkLEVBQTBCOztBQUMxQixnQkFBSSxRQUFRb0YsR0FBRyxDQUFDMWEsTUFBWixJQUFzQixTQUFTMGEsR0FBRyxDQUFDMWEsTUFBdkMsRUFBK0M7QUFDN0Msb0JBQUksQ0FBQ2llLE1BQUw7QUFDRCxhQUZELE1BRU87QUFDTDtBQUNBO0FBQ0Eva0Isd0JBQVUsQ0FBQyxZQUFNO0FBQ2Ysc0JBQUksQ0FBQ3dlLE9BQUwsQ0FBYSxPQUFPZ0QsR0FBRyxDQUFDMWEsTUFBWCxLQUFzQixRQUF0QixHQUFpQzBhLEdBQUcsQ0FBQzFhLE1BQXJDLEdBQThDLENBQTNEO0FBQ0QsZUFGUyxFQUVQLENBRk8sQ0FBVjtBQUdEO0FBQ0YsV0FYRDtBQVlEOztBQUVEcVIsYUFBSyxDQUFDLGFBQUQsRUFBZ0IsS0FBSzBHLElBQXJCLENBQUw7QUFDQTJDLFdBQUcsQ0FBQzVDLElBQUosQ0FBUyxLQUFLQyxJQUFkO0FBQ0QsT0F6REQsQ0F5REUsT0FBT2haLENBQVAsRUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBN0Ysa0JBQVUsQ0FBQyxZQUFNO0FBQ2YsZ0JBQUksQ0FBQ3dlLE9BQUwsQ0FBYTNZLENBQWI7QUFDRCxTQUZTLEVBRVAsQ0FGTyxDQUFWO0FBR0E7QUFDRDs7QUFFRCxVQUFJLE9BQU90RixRQUFQLEtBQW9CLFdBQXhCLEVBQXFDO0FBQ25DLGFBQUswWCxLQUFMLEdBQWFvTSxPQUFPLENBQUNZLGFBQVIsRUFBYjtBQUNBWixlQUFPLENBQUNhLFFBQVIsQ0FBaUIsS0FBS2pOLEtBQXRCLElBQStCLElBQS9CO0FBQ0Q7QUFDRjtBQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7Ozs7V0FDRSxxQkFBWTtBQUNWLFdBQUs1USxJQUFMLENBQVUsU0FBVjtBQUNBLFdBQUs0WCxPQUFMO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBOzs7O1dBQ0UsZ0JBQU9KLElBQVAsRUFBYTtBQUNYLFdBQUt4WCxJQUFMLENBQVUsTUFBVixFQUFrQndYLElBQWxCO0FBQ0EsV0FBS3NHLFNBQUw7QUFDRDtBQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7Ozs7V0FDRSxpQkFBUWhHLEdBQVIsRUFBYTtBQUNYLFdBQUs5WCxJQUFMLENBQVUsT0FBVixFQUFtQjhYLEdBQW5CO0FBQ0EsV0FBS0YsT0FBTCxDQUFhLElBQWI7QUFDRDtBQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7Ozs7V0FDRSxpQkFBUW1HLFNBQVIsRUFBbUI7QUFDakIsVUFBSSxnQkFBZ0IsT0FBTyxLQUFLNUQsR0FBNUIsSUFBbUMsU0FBUyxLQUFLQSxHQUFyRCxFQUEwRDtBQUN4RDtBQUNELE9BSGdCLENBSWpCOzs7QUFDQSxVQUFJLEtBQUtzRCxNQUFMLEVBQUosRUFBbUI7QUFDakIsYUFBS3RELEdBQUwsQ0FBU3NDLE1BQVQsR0FBa0IsS0FBS3RDLEdBQUwsQ0FBU25DLE9BQVQsR0FBbUIyRSxLQUFyQztBQUNELE9BRkQsTUFFTztBQUNMLGFBQUt4QyxHQUFMLENBQVNxQyxrQkFBVCxHQUE4QkcsS0FBOUI7QUFDRDs7QUFFRCxVQUFJb0IsU0FBSixFQUFlO0FBQ2IsWUFBSTtBQUNGLGVBQUs1RCxHQUFMLENBQVM2RCxLQUFUO0FBQ0QsU0FGRCxDQUVFLE9BQU94ZixDQUFQLEVBQVUsQ0FBRTtBQUNmOztBQUVELFVBQUksT0FBT3RGLFFBQVAsS0FBb0IsV0FBeEIsRUFBcUM7QUFDbkMsZUFBTzhqQixPQUFPLENBQUNhLFFBQVIsQ0FBaUIsS0FBS2pOLEtBQXRCLENBQVA7QUFDRDs7QUFFRCxXQUFLdUosR0FBTCxHQUFXLElBQVg7QUFDRDtBQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7Ozs7V0FDRSxrQkFBUztBQUNQLFVBQU0zQyxJQUFJLEdBQUcsS0FBSzJDLEdBQUwsQ0FBU3dELFlBQXRCOztBQUNBLFVBQUluRyxJQUFJLEtBQUssSUFBYixFQUFtQjtBQUNqQixhQUFLd0QsTUFBTCxDQUFZeEQsSUFBWjtBQUNEO0FBQ0Y7QUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBOzs7O1dBQ0Usa0JBQVM7QUFDUCxhQUFPLE9BQU95RyxjQUFQLEtBQTBCLFdBQTFCLElBQXlDLENBQUMsS0FBSzVELEVBQS9DLElBQXFELEtBQUs2RCxVQUFqRTtBQUNEO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7OztXQUNFLGlCQUFRO0FBQ04sV0FBS3RHLE9BQUw7QUFDRDs7OztFQTNNbUJ6SyxPO0FBOE10QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTZQLE9BQU8sQ0FBQ1ksYUFBUixHQUF3QixDQUF4QjtBQUNBWixPQUFPLENBQUNhLFFBQVIsR0FBbUIsRUFBbkI7O0FBRUEsSUFBSSxPQUFPM2tCLFFBQVAsS0FBb0IsV0FBeEIsRUFBcUM7QUFDbkMsTUFBSSxPQUFPcWpCLFdBQVAsS0FBdUIsVUFBM0IsRUFBdUM7QUFDckNBLGVBQVcsQ0FBQyxVQUFELEVBQWE0QixhQUFiLENBQVg7QUFDRCxHQUZELE1BRU8sSUFBSSxPQUFPamhCLGdCQUFQLEtBQTRCLFVBQWhDLEVBQTRDO0FBQ2pELFFBQU1raEIsZ0JBQWdCLEdBQUcsZ0JBQWdCekQsVUFBaEIsR0FBNkIsVUFBN0IsR0FBMEMsUUFBbkU7QUFDQXpkLG9CQUFnQixDQUFDa2hCLGdCQUFELEVBQW1CRCxhQUFuQixFQUFrQyxLQUFsQyxDQUFoQjtBQUNEO0FBQ0Y7O0FBRUQsU0FBU0EsYUFBVCxHQUF5QjtBQUN2QixPQUFLLElBQUlwZCxDQUFULElBQWNpYyxPQUFPLENBQUNhLFFBQXRCLEVBQWdDO0FBQzlCLFFBQUliLE9BQU8sQ0FBQ2EsUUFBUixDQUFpQmhiLGNBQWpCLENBQWdDOUIsQ0FBaEMsQ0FBSixFQUF3QztBQUN0Q2ljLGFBQU8sQ0FBQ2EsUUFBUixDQUFpQjljLENBQWpCLEVBQW9CaWQsS0FBcEI7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQxUyxNQUFNLENBQUNDLE9BQVAsR0FBaUJ3TyxHQUFqQjtBQUNBek8sc0JBQUEsR0FBeUIwUixPQUF6QixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNVQSxJQUFNMUQsU0FBUyxHQUFHNVgsbUJBQU8sQ0FBQyxzRUFBRCxDQUF6Qjs7QUFDQSxJQUFNK1MsT0FBTyxHQUFHL1MsbUJBQU8sQ0FBQyxnREFBRCxDQUF2Qjs7QUFDQSxJQUFNNlMsTUFBTSxHQUFHN1MsbUJBQU8sQ0FBQyxzRUFBRCxDQUF0Qjs7QUFDQSxJQUFNMmMsS0FBSyxHQUFHM2MsbUJBQU8sQ0FBQyw0Q0FBRCxDQUFyQjs7QUFFQSxJQUFNb1AsS0FBSyxHQUFHcFAsbUJBQU8sQ0FBQyxrREFBRCxDQUFQLENBQWlCLDBCQUFqQixDQUFkOztJQUVNZ1osTzs7Ozs7Ozs7Ozs7Ozs7QUFDSjtBQUNGO0FBQ0E7QUFDRSxtQkFBVztBQUNULGFBQU8sU0FBUDtBQUNEO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O1dBQ0Usa0JBQVM7QUFDUCxXQUFLNEQsSUFBTDtBQUNEO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O1dBQ0UsZUFBTUMsT0FBTixFQUFlO0FBQUE7O0FBQ2IsV0FBS3hKLFVBQUwsR0FBa0IsU0FBbEI7O0FBRUEsVUFBTTRDLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFDbEI3RyxhQUFLLENBQUMsUUFBRCxDQUFMO0FBQ0EsYUFBSSxDQUFDaUUsVUFBTCxHQUFrQixRQUFsQjtBQUNBd0osZUFBTztBQUNSLE9BSkQ7O0FBTUEsVUFBSSxLQUFLckUsT0FBTCxJQUFnQixDQUFDLEtBQUtwQixRQUExQixFQUFvQztBQUNsQyxZQUFJMEYsS0FBSyxHQUFHLENBQVo7O0FBRUEsWUFBSSxLQUFLdEUsT0FBVCxFQUFrQjtBQUNoQnBKLGVBQUssQ0FBQyw2Q0FBRCxDQUFMO0FBQ0EwTixlQUFLO0FBQ0wsZUFBSy9RLElBQUwsQ0FBVSxjQUFWLEVBQTBCLFlBQVc7QUFDbkNxRCxpQkFBSyxDQUFDLDRCQUFELENBQUw7QUFDQSxjQUFFME4sS0FBRixJQUFXN0csS0FBSyxFQUFoQjtBQUNELFdBSEQ7QUFJRDs7QUFFRCxZQUFJLENBQUMsS0FBS21CLFFBQVYsRUFBb0I7QUFDbEJoSSxlQUFLLENBQUMsNkNBQUQsQ0FBTDtBQUNBME4sZUFBSztBQUNMLGVBQUsvUSxJQUFMLENBQVUsT0FBVixFQUFtQixZQUFXO0FBQzVCcUQsaUJBQUssQ0FBQyw0QkFBRCxDQUFMO0FBQ0EsY0FBRTBOLEtBQUYsSUFBVzdHLEtBQUssRUFBaEI7QUFDRCxXQUhEO0FBSUQ7QUFDRixPQXBCRCxNQW9CTztBQUNMQSxhQUFLO0FBQ047QUFDRjtBQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7Ozs7V0FDRSxnQkFBTztBQUNMN0csV0FBSyxDQUFDLFNBQUQsQ0FBTDtBQUNBLFdBQUtvSixPQUFMLEdBQWUsSUFBZjtBQUNBLFdBQUt1RSxNQUFMO0FBQ0EsV0FBS3plLElBQUwsQ0FBVSxNQUFWO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBOzs7O1dBQ0UsZ0JBQU93WCxJQUFQLEVBQWE7QUFBQTs7QUFDWDFHLFdBQUssQ0FBQyxxQkFBRCxFQUF3QjBHLElBQXhCLENBQUw7O0FBQ0EsVUFBTWtILFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUFyRyxNQUFNLEVBQUk7QUFDekI7QUFDQSxZQUFJLGNBQWMsTUFBSSxDQUFDdEQsVUFBbkIsSUFBaUNzRCxNQUFNLENBQUN2VCxJQUFQLEtBQWdCLE1BQXJELEVBQTZEO0FBQzNELGdCQUFJLENBQUM2VCxNQUFMO0FBQ0QsU0FKd0IsQ0FNekI7OztBQUNBLFlBQUksWUFBWU4sTUFBTSxDQUFDdlQsSUFBdkIsRUFBNkI7QUFDM0IsZ0JBQUksQ0FBQ3lSLE9BQUw7O0FBQ0EsaUJBQU8sS0FBUDtBQUNELFNBVndCLENBWXpCOzs7QUFDQSxjQUFJLENBQUNXLFFBQUwsQ0FBY21CLE1BQWQ7QUFDRCxPQWRELENBRlcsQ0FrQlg7OztBQUNBOUQsWUFBTSxDQUFDb0ssYUFBUCxDQUFxQm5ILElBQXJCLEVBQTJCLEtBQUtaLE1BQUwsQ0FBWWlELFVBQXZDLEVBQW1EekgsT0FBbkQsQ0FBMkRzTSxRQUEzRCxFQW5CVyxDQXFCWDs7QUFDQSxVQUFJLGFBQWEsS0FBSzNKLFVBQXRCLEVBQWtDO0FBQ2hDO0FBQ0EsYUFBS21GLE9BQUwsR0FBZSxLQUFmO0FBQ0EsYUFBS2xhLElBQUwsQ0FBVSxjQUFWOztBQUVBLFlBQUksV0FBVyxLQUFLK1UsVUFBcEIsRUFBZ0M7QUFDOUIsZUFBS3VKLElBQUw7QUFDRCxTQUZELE1BRU87QUFDTHhOLGVBQUssQ0FBQyxzQ0FBRCxFQUF5QyxLQUFLaUUsVUFBOUMsQ0FBTDtBQUNEO0FBQ0Y7QUFDRjtBQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7Ozs7V0FDRSxtQkFBVTtBQUFBOztBQUNSLFVBQU1zQixLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQ2xCdkYsYUFBSyxDQUFDLHNCQUFELENBQUw7O0FBQ0EsY0FBSSxDQUFDNkksS0FBTCxDQUFXLENBQUM7QUFBRTdVLGNBQUksRUFBRTtBQUFSLFNBQUQsQ0FBWDtBQUNELE9BSEQ7O0FBS0EsVUFBSSxXQUFXLEtBQUtpUSxVQUFwQixFQUFnQztBQUM5QmpFLGFBQUssQ0FBQywwQkFBRCxDQUFMO0FBQ0F1RixhQUFLO0FBQ04sT0FIRCxNQUdPO0FBQ0w7QUFDQTtBQUNBdkYsYUFBSyxDQUFDLHNDQUFELENBQUw7QUFDQSxhQUFLckQsSUFBTCxDQUFVLE1BQVYsRUFBa0I0SSxLQUFsQjtBQUNEO0FBQ0Y7QUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztXQUNFLGVBQU1xRCxPQUFOLEVBQWU7QUFBQTs7QUFDYixXQUFLWixRQUFMLEdBQWdCLEtBQWhCO0FBRUF2RSxZQUFNLENBQUNxSyxhQUFQLENBQXFCbEYsT0FBckIsRUFBOEIsVUFBQWxDLElBQUksRUFBSTtBQUNwQyxjQUFJLENBQUNxSCxPQUFMLENBQWFySCxJQUFiLEVBQW1CLFlBQU07QUFDdkIsZ0JBQUksQ0FBQ3NCLFFBQUwsR0FBZ0IsSUFBaEI7O0FBQ0EsZ0JBQUksQ0FBQzlZLElBQUwsQ0FBVSxPQUFWO0FBQ0QsU0FIRDtBQUlELE9BTEQ7QUFNRDtBQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7Ozs7V0FDRSxlQUFNO0FBQ0osVUFBSThVLEtBQUssR0FBRyxLQUFLQSxLQUFMLElBQWMsRUFBMUI7QUFDQSxVQUFNZ0ssTUFBTSxHQUFHLEtBQUtyVCxJQUFMLENBQVVtSixNQUFWLEdBQW1CLE9BQW5CLEdBQTZCLE1BQTVDO0FBQ0EsVUFBSUMsSUFBSSxHQUFHLEVBQVgsQ0FISSxDQUtKOztBQUNBLFVBQUksVUFBVSxLQUFLcEosSUFBTCxDQUFVc1QsaUJBQXhCLEVBQTJDO0FBQ3pDakssYUFBSyxDQUFDLEtBQUtySixJQUFMLENBQVU4SixjQUFYLENBQUwsR0FBa0M4SSxLQUFLLEVBQXZDO0FBQ0Q7O0FBRUQsVUFBSSxDQUFDLEtBQUt0QixjQUFOLElBQXdCLENBQUNqSSxLQUFLLENBQUM2QixHQUFuQyxFQUF3QztBQUN0QzdCLGFBQUssQ0FBQ2tLLEdBQU4sR0FBWSxDQUFaO0FBQ0Q7O0FBRURsSyxXQUFLLEdBQUdMLE9BQU8sQ0FBQ3dLLE1BQVIsQ0FBZW5LLEtBQWYsQ0FBUixDQWRJLENBZ0JKOztBQUNBLFVBQ0UsS0FBS3JKLElBQUwsQ0FBVW9KLElBQVYsS0FDRSxZQUFZaUssTUFBWixJQUFzQi9MLE1BQU0sQ0FBQyxLQUFLdEgsSUFBTCxDQUFVb0osSUFBWCxDQUFOLEtBQTJCLEdBQWxELElBQ0UsV0FBV2lLLE1BQVgsSUFBcUIvTCxNQUFNLENBQUMsS0FBS3RILElBQUwsQ0FBVW9KLElBQVgsQ0FBTixLQUEyQixFQUZuRCxDQURGLEVBSUU7QUFDQUEsWUFBSSxHQUFHLE1BQU0sS0FBS3BKLElBQUwsQ0FBVW9KLElBQXZCO0FBQ0QsT0F2QkcsQ0F5Qko7OztBQUNBLFVBQUlDLEtBQUssQ0FBQ25aLE1BQVYsRUFBa0I7QUFDaEJtWixhQUFLLEdBQUcsTUFBTUEsS0FBZDtBQUNEOztBQUVELFVBQU1vSyxJQUFJLEdBQUcsS0FBS3pULElBQUwsQ0FBVWlKLFFBQVYsQ0FBbUIvUixPQUFuQixDQUEyQixHQUEzQixNQUFvQyxDQUFDLENBQWxEO0FBQ0EsYUFDRW1jLE1BQU0sR0FDTixLQURBLElBRUNJLElBQUksR0FBRyxNQUFNLEtBQUt6VCxJQUFMLENBQVVpSixRQUFoQixHQUEyQixHQUE5QixHQUFvQyxLQUFLakosSUFBTCxDQUFVaUosUUFGbkQsSUFHQUcsSUFIQSxHQUlBLEtBQUtwSixJQUFMLENBQVV5SixJQUpWLEdBS0FKLEtBTkY7QUFRRDs7OztFQWxNbUJ3RSxTOztBQXFNdEJoTyxNQUFNLENBQUNDLE9BQVAsR0FBaUJtUCxPQUFqQixDOzs7Ozs7Ozs7O0FDNU1BLElBQU1DLFVBQVUsR0FBR2paLG1CQUFPLENBQUMsZ0ZBQUQsQ0FBMUI7O0FBRUE0SixNQUFNLENBQUNDLE9BQVAsR0FBaUI7QUFDZjRULFdBQVMsRUFBRXhFLFVBQVUsQ0FBQ3dFLFNBQVgsSUFBd0J4RSxVQUFVLENBQUN5RSxZQUQvQjtBQUVmQyx1QkFBcUIsRUFBRSxJQUZSO0FBR2ZDLG1CQUFpQixFQUFFO0FBSEosQ0FBakIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQSxJQUFNaEcsU0FBUyxHQUFHNVgsbUJBQU8sQ0FBQyxzRUFBRCxDQUF6Qjs7QUFDQSxJQUFNNlMsTUFBTSxHQUFHN1MsbUJBQU8sQ0FBQyxzRUFBRCxDQUF0Qjs7QUFDQSxJQUFNK1MsT0FBTyxHQUFHL1MsbUJBQU8sQ0FBQyxnREFBRCxDQUF2Qjs7QUFDQSxJQUFNMmMsS0FBSyxHQUFHM2MsbUJBQU8sQ0FBQyw0Q0FBRCxDQUFyQjs7QUFDQSxlQUFpQkEsbUJBQU8sQ0FBQyw0REFBRCxDQUF4QjtBQUFBLElBQVFnYixJQUFSLFlBQVFBLElBQVI7O0FBQ0EsZ0JBSUloYixtQkFBTyxDQUFDLGdIQUFELENBSlg7QUFBQSxJQUNFeWQsU0FERixhQUNFQSxTQURGO0FBQUEsSUFFRUUscUJBRkYsYUFFRUEscUJBRkY7QUFBQSxJQUdFQyxpQkFIRixhQUdFQSxpQkFIRjs7QUFNQSxJQUFNeE8sS0FBSyxHQUFHcFAsbUJBQU8sQ0FBQyxrREFBRCxDQUFQLENBQWlCLDRCQUFqQixDQUFkLEMsQ0FFQTs7O0FBQ0EsSUFBTTZkLGFBQWEsR0FDakIsT0FBT3ZQLFNBQVAsS0FBcUIsV0FBckIsSUFDQSxPQUFPQSxTQUFTLENBQUN3UCxPQUFqQixLQUE2QixRQUQ3QixJQUVBeFAsU0FBUyxDQUFDd1AsT0FBVixDQUFrQnRRLFdBQWxCLE9BQW9DLGFBSHRDOztJQUtNdVEsRTs7Ozs7QUFDSjtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRSxjQUFZaFUsSUFBWixFQUFrQjtBQUFBOztBQUFBOztBQUNoQiw4QkFBTUEsSUFBTjtBQUVBLFVBQUtzUixjQUFMLEdBQXNCLENBQUN0UixJQUFJLENBQUNxUixXQUE1QjtBQUhnQjtBQUlqQjtBQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7Ozs7O1NBQ0UsZUFBVztBQUNULGFBQU8sV0FBUDtBQUNEO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7OztXQUNFLGtCQUFTO0FBQ1AsVUFBSSxDQUFDLEtBQUs0QyxLQUFMLEVBQUwsRUFBbUI7QUFDakI7QUFDQTtBQUNEOztBQUVELFVBQU10TCxHQUFHLEdBQUcsS0FBS0EsR0FBTCxFQUFaO0FBQ0EsVUFBTXVMLFNBQVMsR0FBRyxLQUFLbFUsSUFBTCxDQUFVa1UsU0FBNUIsQ0FQTyxDQVNQOztBQUNBLFVBQU1sVSxJQUFJLEdBQUc4VCxhQUFhLEdBQ3RCLEVBRHNCLEdBRXRCN0MsSUFBSSxDQUNGLEtBQUtqUixJQURILEVBRUYsT0FGRSxFQUdGLG1CQUhFLEVBSUYsS0FKRSxFQUtGLEtBTEUsRUFNRixZQU5FLEVBT0YsTUFQRSxFQVFGLElBUkUsRUFTRixTQVRFLEVBVUYsb0JBVkUsRUFXRixjQVhFLEVBWUYsaUJBWkUsRUFhRixRQWJFLEVBY0YsWUFkRSxFQWVGLFFBZkUsRUFnQkYscUJBaEJFLENBRlI7O0FBcUJBLFVBQUksS0FBS0EsSUFBTCxDQUFVNFIsWUFBZCxFQUE0QjtBQUMxQjVSLFlBQUksQ0FBQ21VLE9BQUwsR0FBZSxLQUFLblUsSUFBTCxDQUFVNFIsWUFBekI7QUFDRDs7QUFFRCxVQUFJO0FBQ0YsYUFBS3dDLEVBQUwsR0FDRVIscUJBQXFCLElBQUksQ0FBQ0UsYUFBMUIsR0FDSUksU0FBUyxHQUNQLElBQUlSLFNBQUosQ0FBYy9LLEdBQWQsRUFBbUJ1TCxTQUFuQixDQURPLEdBRVAsSUFBSVIsU0FBSixDQUFjL0ssR0FBZCxDQUhOLEdBSUksSUFBSStLLFNBQUosQ0FBYy9LLEdBQWQsRUFBbUJ1TCxTQUFuQixFQUE4QmxVLElBQTlCLENBTE47QUFNRCxPQVBELENBT0UsT0FBT3FNLEdBQVAsRUFBWTtBQUNaLGVBQU8sS0FBSzlYLElBQUwsQ0FBVSxPQUFWLEVBQW1COFgsR0FBbkIsQ0FBUDtBQUNEOztBQUVELFdBQUsrSCxFQUFMLENBQVFoRyxVQUFSLEdBQXFCLEtBQUtqRCxNQUFMLENBQVlpRCxVQUFaLElBQTBCeUYsaUJBQS9DO0FBRUEsV0FBS1EsaUJBQUw7QUFDRDtBQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7Ozs7V0FDRSw2QkFBb0I7QUFBQTs7QUFDbEIsV0FBS0QsRUFBTCxDQUFRRSxNQUFSLEdBQWlCLFlBQU07QUFDckIsWUFBSSxNQUFJLENBQUN0VSxJQUFMLENBQVVtTixTQUFkLEVBQXlCO0FBQ3ZCLGdCQUFJLENBQUNpSCxFQUFMLENBQVFHLE9BQVIsQ0FBZ0JuSCxLQUFoQjtBQUNEOztBQUNELGNBQUksQ0FBQ0YsTUFBTDtBQUNELE9BTEQ7O0FBTUEsV0FBS2tILEVBQUwsQ0FBUTNILE9BQVIsR0FBa0IsS0FBSzNCLE9BQUwsQ0FBYWpNLElBQWIsQ0FBa0IsSUFBbEIsQ0FBbEI7O0FBQ0EsV0FBS3VWLEVBQUwsQ0FBUUksU0FBUixHQUFvQixVQUFBQyxFQUFFO0FBQUEsZUFBSSxNQUFJLENBQUNsRixNQUFMLENBQVlrRixFQUFFLENBQUMxSSxJQUFmLENBQUo7QUFBQSxPQUF0Qjs7QUFDQSxXQUFLcUksRUFBTCxDQUFRN0gsT0FBUixHQUFrQixVQUFBeFosQ0FBQztBQUFBLGVBQUksTUFBSSxDQUFDMlksT0FBTCxDQUFhLGlCQUFiLEVBQWdDM1ksQ0FBaEMsQ0FBSjtBQUFBLE9BQW5CO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7V0FDRSxlQUFNa2IsT0FBTixFQUFlO0FBQUE7O0FBQ2IsV0FBS1osUUFBTCxHQUFnQixLQUFoQixDQURhLENBR2I7QUFDQTs7QUFKYSxpQ0FLSi9YLENBTEk7QUFNWCxZQUFNc1gsTUFBTSxHQUFHcUIsT0FBTyxDQUFDM1ksQ0FBRCxDQUF0QjtBQUNBLFlBQU1vZixVQUFVLEdBQUdwZixDQUFDLEtBQUsyWSxPQUFPLENBQUMvZCxNQUFSLEdBQWlCLENBQTFDO0FBRUE0WSxjQUFNLENBQUM2TCxZQUFQLENBQW9CL0gsTUFBcEIsRUFBNEIsTUFBSSxDQUFDMEUsY0FBakMsRUFBaUQsVUFBQXZGLElBQUksRUFBSTtBQUN2RDtBQUNBLGNBQU0vTCxJQUFJLEdBQUcsRUFBYjs7QUFDQSxjQUFJLENBQUM0VCxxQkFBTCxFQUE0QjtBQUMxQixnQkFBSWhILE1BQU0sQ0FBQ2hLLE9BQVgsRUFBb0I7QUFDbEI1QyxrQkFBSSxDQUFDc04sUUFBTCxHQUFnQlYsTUFBTSxDQUFDaEssT0FBUCxDQUFlMEssUUFBL0I7QUFDRDs7QUFFRCxnQkFBSSxNQUFJLENBQUN0TixJQUFMLENBQVVpSyxpQkFBZCxFQUFpQztBQUMvQixrQkFBTWhKLEdBQUcsR0FDUCxhQUFhLE9BQU84SyxJQUFwQixHQUEyQjZJLE1BQU0sQ0FBQ0MsVUFBUCxDQUFrQjlJLElBQWxCLENBQTNCLEdBQXFEQSxJQUFJLENBQUM3YixNQUQ1RDs7QUFFQSxrQkFBSStRLEdBQUcsR0FBRyxNQUFJLENBQUNqQixJQUFMLENBQVVpSyxpQkFBVixDQUE0QkMsU0FBdEMsRUFBaUQ7QUFDL0NsSyxvQkFBSSxDQUFDc04sUUFBTCxHQUFnQixLQUFoQjtBQUNEO0FBQ0Y7QUFDRixXQWZzRCxDQWlCdkQ7QUFDQTtBQUNBOzs7QUFDQSxjQUFJO0FBQ0YsZ0JBQUlzRyxxQkFBSixFQUEyQjtBQUN6QjtBQUNBLG9CQUFJLENBQUNRLEVBQUwsQ0FBUXRJLElBQVIsQ0FBYUMsSUFBYjtBQUNELGFBSEQsTUFHTztBQUNMLG9CQUFJLENBQUNxSSxFQUFMLENBQVF0SSxJQUFSLENBQWFDLElBQWIsRUFBbUIvTCxJQUFuQjtBQUNEO0FBQ0YsV0FQRCxDQU9FLE9BQU9qTixDQUFQLEVBQVU7QUFDVnNTLGlCQUFLLENBQUMsdUNBQUQsQ0FBTDtBQUNEOztBQUVELGNBQUlxUCxVQUFKLEVBQWdCO0FBQ2Q7QUFDQTtBQUNBeG5CLHNCQUFVLENBQUMsWUFBTTtBQUNmLG9CQUFJLENBQUNtZ0IsUUFBTCxHQUFnQixJQUFoQjs7QUFDQSxvQkFBSSxDQUFDOVksSUFBTCxDQUFVLE9BQVY7QUFDRCxhQUhTLEVBR1AsQ0FITyxDQUFWO0FBSUQ7QUFDRixTQXZDRDtBQVRXOztBQUtiLFdBQUssSUFBSWUsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRzJZLE9BQU8sQ0FBQy9kLE1BQTVCLEVBQW9Db0YsQ0FBQyxFQUFyQyxFQUF5QztBQUFBLGNBQWhDQSxDQUFnQztBQTRDeEM7QUFDRjtBQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7Ozs7V0FDRSxtQkFBVTtBQUNSdVksZUFBUyxDQUFDOVcsU0FBVixDQUFvQitULE9BQXBCLENBQTRCN1QsSUFBNUIsQ0FBaUMsSUFBakM7QUFDRDtBQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7Ozs7V0FDRSxtQkFBVTtBQUNSLFVBQUksT0FBTyxLQUFLbWQsRUFBWixLQUFtQixXQUF2QixFQUFvQztBQUNsQyxhQUFLQSxFQUFMLENBQVF4SixLQUFSO0FBQ0EsYUFBS3dKLEVBQUwsR0FBVSxJQUFWO0FBQ0Q7QUFDRjtBQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7Ozs7V0FDRSxlQUFNO0FBQ0osVUFBSS9LLEtBQUssR0FBRyxLQUFLQSxLQUFMLElBQWMsRUFBMUI7QUFDQSxVQUFNZ0ssTUFBTSxHQUFHLEtBQUtyVCxJQUFMLENBQVVtSixNQUFWLEdBQW1CLEtBQW5CLEdBQTJCLElBQTFDO0FBQ0EsVUFBSUMsSUFBSSxHQUFHLEVBQVgsQ0FISSxDQUtKOztBQUNBLFVBQ0UsS0FBS3BKLElBQUwsQ0FBVW9KLElBQVYsS0FDRSxVQUFVaUssTUFBVixJQUFvQi9MLE1BQU0sQ0FBQyxLQUFLdEgsSUFBTCxDQUFVb0osSUFBWCxDQUFOLEtBQTJCLEdBQWhELElBQ0UsU0FBU2lLLE1BQVQsSUFBbUIvTCxNQUFNLENBQUMsS0FBS3RILElBQUwsQ0FBVW9KLElBQVgsQ0FBTixLQUEyQixFQUZqRCxDQURGLEVBSUU7QUFDQUEsWUFBSSxHQUFHLE1BQU0sS0FBS3BKLElBQUwsQ0FBVW9KLElBQXZCO0FBQ0QsT0FaRyxDQWNKOzs7QUFDQSxVQUFJLEtBQUtwSixJQUFMLENBQVVzVCxpQkFBZCxFQUFpQztBQUMvQmpLLGFBQUssQ0FBQyxLQUFLckosSUFBTCxDQUFVOEosY0FBWCxDQUFMLEdBQWtDOEksS0FBSyxFQUF2QztBQUNELE9BakJHLENBbUJKOzs7QUFDQSxVQUFJLENBQUMsS0FBS3RCLGNBQVYsRUFBMEI7QUFDeEJqSSxhQUFLLENBQUNrSyxHQUFOLEdBQVksQ0FBWjtBQUNEOztBQUVEbEssV0FBSyxHQUFHTCxPQUFPLENBQUN3SyxNQUFSLENBQWVuSyxLQUFmLENBQVIsQ0F4QkksQ0EwQko7O0FBQ0EsVUFBSUEsS0FBSyxDQUFDblosTUFBVixFQUFrQjtBQUNoQm1aLGFBQUssR0FBRyxNQUFNQSxLQUFkO0FBQ0Q7O0FBRUQsVUFBTW9LLElBQUksR0FBRyxLQUFLelQsSUFBTCxDQUFVaUosUUFBVixDQUFtQi9SLE9BQW5CLENBQTJCLEdBQTNCLE1BQW9DLENBQUMsQ0FBbEQ7QUFDQSxhQUNFbWMsTUFBTSxHQUNOLEtBREEsSUFFQ0ksSUFBSSxHQUFHLE1BQU0sS0FBS3pULElBQUwsQ0FBVWlKLFFBQWhCLEdBQTJCLEdBQTlCLEdBQW9DLEtBQUtqSixJQUFMLENBQVVpSixRQUZuRCxJQUdBRyxJQUhBLEdBSUEsS0FBS3BKLElBQUwsQ0FBVXlKLElBSlYsR0FLQUosS0FORjtBQVFEO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O1dBQ0UsaUJBQVE7QUFDTixhQUNFLENBQUMsQ0FBQ3FLLFNBQUYsSUFDQSxFQUFFLGtCQUFrQkEsU0FBbEIsSUFBK0IsS0FBSzlsQixJQUFMLEtBQWNvbUIsRUFBRSxDQUFDamQsU0FBSCxDQUFhbkosSUFBNUQsQ0FGRjtBQUlEOzs7O0VBeE9jaWdCLFM7O0FBMk9qQmhPLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQmtVLEVBQWpCLEM7Ozs7Ozs7Ozs7QUM5UEFuVSxtQkFBQSxHQUFzQixVQUFDL0ksR0FBRCxFQUFrQjtBQUFBLG9DQUFUZ2UsSUFBUztBQUFUQSxRQUFTO0FBQUE7O0FBQ3RDLFNBQU9BLElBQUksQ0FBQ0MsTUFBTCxDQUFZLFVBQUNDLEdBQUQsRUFBTUMsQ0FBTixFQUFZO0FBQzdCLFFBQUluZSxHQUFHLENBQUNNLGNBQUosQ0FBbUI2ZCxDQUFuQixDQUFKLEVBQTJCO0FBQ3pCRCxTQUFHLENBQUNDLENBQUQsQ0FBSCxHQUFTbmUsR0FBRyxDQUFDbWUsQ0FBRCxDQUFaO0FBQ0Q7O0FBQ0QsV0FBT0QsR0FBUDtBQUNELEdBTE0sRUFLSixFQUxJLENBQVA7QUFNRCxDQVBELEM7Ozs7Ozs7Ozs7QUNBQTtBQUVBLElBQU1FLE9BQU8sR0FBR2pmLG1CQUFPLENBQUMsa0RBQUQsQ0FBdkI7O0FBQ0EsSUFBTWlaLFVBQVUsR0FBR2paLG1CQUFPLENBQUMsK0VBQUQsQ0FBMUI7O0FBRUE0SixNQUFNLENBQUNDLE9BQVAsR0FBaUIsVUFBU0UsSUFBVCxFQUFlO0FBQzlCLE1BQU04TyxPQUFPLEdBQUc5TyxJQUFJLENBQUM4TyxPQUFyQixDQUQ4QixDQUc5QjtBQUNBOztBQUNBLE1BQU1DLE9BQU8sR0FBRy9PLElBQUksQ0FBQytPLE9BQXJCLENBTDhCLENBTzlCO0FBQ0E7O0FBQ0EsTUFBTTBELFVBQVUsR0FBR3pTLElBQUksQ0FBQ3lTLFVBQXhCLENBVDhCLENBVzlCOztBQUNBLE1BQUk7QUFDRixRQUFJLGdCQUFnQixPQUFPcEUsY0FBdkIsS0FBMEMsQ0FBQ1MsT0FBRCxJQUFZb0csT0FBdEQsQ0FBSixFQUFvRTtBQUNsRSxhQUFPLElBQUk3RyxjQUFKLEVBQVA7QUFDRDtBQUNGLEdBSkQsQ0FJRSxPQUFPdGIsQ0FBUCxFQUFVLENBQUUsQ0FoQmdCLENBa0I5QjtBQUNBO0FBQ0E7OztBQUNBLE1BQUk7QUFDRixRQUFJLGdCQUFnQixPQUFPeWYsY0FBdkIsSUFBeUMsQ0FBQ3pELE9BQTFDLElBQXFEMEQsVUFBekQsRUFBcUU7QUFDbkUsYUFBTyxJQUFJRCxjQUFKLEVBQVA7QUFDRDtBQUNGLEdBSkQsQ0FJRSxPQUFPemYsQ0FBUCxFQUFVLENBQUU7O0FBRWQsTUFBSSxDQUFDK2IsT0FBTCxFQUFjO0FBQ1osUUFBSTtBQUNGLGFBQU8sSUFBSUksVUFBVSxDQUFDLENBQUMsUUFBRCxFQUFXaUcsTUFBWCxDQUFrQixRQUFsQixFQUE0QjdNLElBQTVCLENBQWlDLEdBQWpDLENBQUQsQ0FBZCxDQUNMLG1CQURLLENBQVA7QUFHRCxLQUpELENBSUUsT0FBT3ZWLENBQVAsRUFBVSxDQUFFO0FBQ2Y7QUFDRixDQWxDRCxDOzs7Ozs7Ozs7O0FDTEEsSUFBTXFpQixZQUFZLEdBQUc5a0IsTUFBTSxDQUFDcWhCLE1BQVAsQ0FBYyxJQUFkLENBQXJCLEMsQ0FBMEM7O0FBQzFDeUQsWUFBWSxDQUFDLE1BQUQsQ0FBWixHQUF1QixHQUF2QjtBQUNBQSxZQUFZLENBQUMsT0FBRCxDQUFaLEdBQXdCLEdBQXhCO0FBQ0FBLFlBQVksQ0FBQyxNQUFELENBQVosR0FBdUIsR0FBdkI7QUFDQUEsWUFBWSxDQUFDLE1BQUQsQ0FBWixHQUF1QixHQUF2QjtBQUNBQSxZQUFZLENBQUMsU0FBRCxDQUFaLEdBQTBCLEdBQTFCO0FBQ0FBLFlBQVksQ0FBQyxTQUFELENBQVosR0FBMEIsR0FBMUI7QUFDQUEsWUFBWSxDQUFDLE1BQUQsQ0FBWixHQUF1QixHQUF2QjtBQUVBLElBQU1DLG9CQUFvQixHQUFHL2tCLE1BQU0sQ0FBQ3FoQixNQUFQLENBQWMsSUFBZCxDQUE3QjtBQUNBcmhCLE1BQU0sQ0FBQ29XLElBQVAsQ0FBWTBPLFlBQVosRUFBMEJ6TyxPQUExQixDQUFrQyxVQUFBdE8sR0FBRyxFQUFJO0FBQ3ZDZ2Qsc0JBQW9CLENBQUNELFlBQVksQ0FBQy9jLEdBQUQsQ0FBYixDQUFwQixHQUEwQ0EsR0FBMUM7QUFDRCxDQUZEO0FBSUEsSUFBTWlkLFlBQVksR0FBRztBQUFFamMsTUFBSSxFQUFFLE9BQVI7QUFBaUIwUyxNQUFJLEVBQUU7QUFBdkIsQ0FBckI7QUFFQWxNLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjtBQUNmc1YsY0FBWSxFQUFaQSxZQURlO0FBRWZDLHNCQUFvQixFQUFwQkEsb0JBRmU7QUFHZkMsY0FBWSxFQUFaQTtBQUhlLENBQWpCLEM7Ozs7Ozs7Ozs7QUNoQkEsZUFBK0NyZixtQkFBTyxDQUFDLGlFQUFELENBQXREO0FBQUEsSUFBUW9mLG9CQUFSLFlBQVFBLG9CQUFSO0FBQUEsSUFBOEJDLFlBQTlCLFlBQThCQSxZQUE5Qjs7QUFFQSxJQUFNQyxxQkFBcUIsR0FBRyxPQUFPOVQsV0FBUCxLQUF1QixVQUFyRDtBQUVBLElBQUkrVCxhQUFKOztBQUNBLElBQUlELHFCQUFKLEVBQTJCO0FBQ3pCQyxlQUFhLEdBQUd2ZixtQkFBTyxDQUFDLHVGQUFELENBQXZCO0FBQ0Q7O0FBRUQsSUFBTWtZLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNzSCxhQUFELEVBQWdCckgsVUFBaEIsRUFBK0I7QUFDbEQsTUFBSSxPQUFPcUgsYUFBUCxLQUF5QixRQUE3QixFQUF1QztBQUNyQyxXQUFPO0FBQ0xwYyxVQUFJLEVBQUUsU0FERDtBQUVMMFMsVUFBSSxFQUFFMkosU0FBUyxDQUFDRCxhQUFELEVBQWdCckgsVUFBaEI7QUFGVixLQUFQO0FBSUQ7O0FBQ0QsTUFBTS9VLElBQUksR0FBR29jLGFBQWEsQ0FBQ0UsTUFBZCxDQUFxQixDQUFyQixDQUFiOztBQUNBLE1BQUl0YyxJQUFJLEtBQUssR0FBYixFQUFrQjtBQUNoQixXQUFPO0FBQ0xBLFVBQUksRUFBRSxTQUREO0FBRUwwUyxVQUFJLEVBQUU2SixrQkFBa0IsQ0FBQ0gsYUFBYSxDQUFDdFUsU0FBZCxDQUF3QixDQUF4QixDQUFELEVBQTZCaU4sVUFBN0I7QUFGbkIsS0FBUDtBQUlEOztBQUNELE1BQU15SCxVQUFVLEdBQUdSLG9CQUFvQixDQUFDaGMsSUFBRCxDQUF2Qzs7QUFDQSxNQUFJLENBQUN3YyxVQUFMLEVBQWlCO0FBQ2YsV0FBT1AsWUFBUDtBQUNEOztBQUNELFNBQU9HLGFBQWEsQ0FBQ3ZsQixNQUFkLEdBQXVCLENBQXZCLEdBQ0g7QUFDRW1KLFFBQUksRUFBRWdjLG9CQUFvQixDQUFDaGMsSUFBRCxDQUQ1QjtBQUVFMFMsUUFBSSxFQUFFMEosYUFBYSxDQUFDdFUsU0FBZCxDQUF3QixDQUF4QjtBQUZSLEdBREcsR0FLSDtBQUNFOUgsUUFBSSxFQUFFZ2Msb0JBQW9CLENBQUNoYyxJQUFEO0FBRDVCLEdBTEo7QUFRRCxDQTFCRDs7QUE0QkEsSUFBTXVjLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQzdKLElBQUQsRUFBT3FDLFVBQVAsRUFBc0I7QUFDL0MsTUFBSW9ILGFBQUosRUFBbUI7QUFDakIsUUFBTU0sT0FBTyxHQUFHTixhQUFhLENBQUNuTCxNQUFkLENBQXFCMEIsSUFBckIsQ0FBaEI7QUFDQSxXQUFPMkosU0FBUyxDQUFDSSxPQUFELEVBQVUxSCxVQUFWLENBQWhCO0FBQ0QsR0FIRCxNQUdPO0FBQ0wsV0FBTztBQUFFbE4sWUFBTSxFQUFFLElBQVY7QUFBZ0I2SyxVQUFJLEVBQUpBO0FBQWhCLEtBQVAsQ0FESyxDQUMwQjtBQUNoQztBQUNGLENBUEQ7O0FBU0EsSUFBTTJKLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUMzSixJQUFELEVBQU9xQyxVQUFQLEVBQXNCO0FBQ3RDLFVBQVFBLFVBQVI7QUFDRSxTQUFLLE1BQUw7QUFDRSxhQUFPckMsSUFBSSxZQUFZdEssV0FBaEIsR0FBOEIsSUFBSXNVLElBQUosQ0FBUyxDQUFDaEssSUFBRCxDQUFULENBQTlCLEdBQWlEQSxJQUF4RDs7QUFDRixTQUFLLGFBQUw7QUFDQTtBQUNFLGFBQU9BLElBQVA7QUFBYTtBQUxqQjtBQU9ELENBUkQ7O0FBVUFsTSxNQUFNLENBQUNDLE9BQVAsR0FBaUJxTyxZQUFqQixDOzs7Ozs7Ozs7O0FDeERBLGVBQXlCbFksbUJBQU8sQ0FBQyxpRUFBRCxDQUFoQztBQUFBLElBQVFtZixZQUFSLFlBQVFBLFlBQVI7O0FBRUEsSUFBTVksY0FBYyxHQUNsQixPQUFPRCxJQUFQLEtBQWdCLFVBQWhCLElBQ0MsT0FBT0EsSUFBUCxLQUFnQixXQUFoQixJQUNDemxCLE1BQU0sQ0FBQ3lHLFNBQVAsQ0FBaUJDLFFBQWpCLENBQTBCQyxJQUExQixDQUErQjhlLElBQS9CLE1BQXlDLDBCQUg3QztBQUlBLElBQU1SLHFCQUFxQixHQUFHLE9BQU85VCxXQUFQLEtBQXVCLFVBQXJELEMsQ0FFQTs7QUFDQSxJQUFNd1UsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQW5mLEdBQUcsRUFBSTtBQUNwQixTQUFPLE9BQU8ySyxXQUFXLENBQUN3VSxNQUFuQixLQUE4QixVQUE5QixHQUNIeFUsV0FBVyxDQUFDd1UsTUFBWixDQUFtQm5mLEdBQW5CLENBREcsR0FFSEEsR0FBRyxJQUFJQSxHQUFHLENBQUNvZixNQUFKLFlBQXNCelUsV0FGakM7QUFHRCxDQUpEOztBQU1BLElBQU1rVCxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUFpQnJELGNBQWpCLEVBQWlDMkIsUUFBakMsRUFBOEM7QUFBQSxNQUEzQzVaLElBQTJDLFFBQTNDQSxJQUEyQztBQUFBLE1BQXJDMFMsSUFBcUMsUUFBckNBLElBQXFDOztBQUNqRSxNQUFJaUssY0FBYyxJQUFJakssSUFBSSxZQUFZZ0ssSUFBdEMsRUFBNEM7QUFDMUMsUUFBSXpFLGNBQUosRUFBb0I7QUFDbEIsYUFBTzJCLFFBQVEsQ0FBQ2xILElBQUQsQ0FBZjtBQUNELEtBRkQsTUFFTztBQUNMLGFBQU9vSyxrQkFBa0IsQ0FBQ3BLLElBQUQsRUFBT2tILFFBQVAsQ0FBekI7QUFDRDtBQUNGLEdBTkQsTUFNTyxJQUNMc0MscUJBQXFCLEtBQ3BCeEosSUFBSSxZQUFZdEssV0FBaEIsSUFBK0J3VSxNQUFNLENBQUNsSyxJQUFELENBRGpCLENBRGhCLEVBR0w7QUFDQSxRQUFJdUYsY0FBSixFQUFvQjtBQUNsQixhQUFPMkIsUUFBUSxDQUFDbEgsSUFBSSxZQUFZdEssV0FBaEIsR0FBOEJzSyxJQUE5QixHQUFxQ0EsSUFBSSxDQUFDbUssTUFBM0MsQ0FBZjtBQUNELEtBRkQsTUFFTztBQUNMLGFBQU9DLGtCQUFrQixDQUFDLElBQUlKLElBQUosQ0FBUyxDQUFDaEssSUFBRCxDQUFULENBQUQsRUFBbUJrSCxRQUFuQixDQUF6QjtBQUNEO0FBQ0YsR0FoQmdFLENBaUJqRTs7O0FBQ0EsU0FBT0EsUUFBUSxDQUFDbUMsWUFBWSxDQUFDL2IsSUFBRCxDQUFaLElBQXNCMFMsSUFBSSxJQUFJLEVBQTlCLENBQUQsQ0FBZjtBQUNELENBbkJEOztBQXFCQSxJQUFNb0ssa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDcEssSUFBRCxFQUFPa0gsUUFBUCxFQUFvQjtBQUM3QyxNQUFNbUQsVUFBVSxHQUFHLElBQUlDLFVBQUosRUFBbkI7O0FBQ0FELFlBQVUsQ0FBQ3BGLE1BQVgsR0FBb0IsWUFBVztBQUM3QixRQUFNc0YsT0FBTyxHQUFHRixVQUFVLENBQUNHLE1BQVgsQ0FBa0I5YSxLQUFsQixDQUF3QixHQUF4QixFQUE2QixDQUE3QixDQUFoQjtBQUNBd1gsWUFBUSxDQUFDLE1BQU1xRCxPQUFQLENBQVI7QUFDRCxHQUhEOztBQUlBLFNBQU9GLFVBQVUsQ0FBQ0ksYUFBWCxDQUF5QnpLLElBQXpCLENBQVA7QUFDRCxDQVBEOztBQVNBbE0sTUFBTSxDQUFDQyxPQUFQLEdBQWlCNlUsWUFBakIsQzs7Ozs7Ozs7OztBQzdDQSxJQUFNQSxZQUFZLEdBQUcxZSxtQkFBTyxDQUFDLG1GQUFELENBQTVCOztBQUNBLElBQU1rWSxZQUFZLEdBQUdsWSxtQkFBTyxDQUFDLG1GQUFELENBQTVCOztBQUVBLElBQU13Z0IsU0FBUyxHQUFHcFQsTUFBTSxDQUFDcVQsWUFBUCxDQUFvQixFQUFwQixDQUFsQixDLENBQTJDOztBQUUzQyxJQUFNdkQsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDbEYsT0FBRCxFQUFVZ0YsUUFBVixFQUF1QjtBQUMzQztBQUNBLE1BQU0vaUIsTUFBTSxHQUFHK2QsT0FBTyxDQUFDL2QsTUFBdkI7QUFDQSxNQUFNeW1CLGNBQWMsR0FBRyxJQUFJL2YsS0FBSixDQUFVMUcsTUFBVixDQUF2QjtBQUNBLE1BQUkwbUIsS0FBSyxHQUFHLENBQVo7QUFFQTNJLFNBQU8sQ0FBQ3RILE9BQVIsQ0FBZ0IsVUFBQ2lHLE1BQUQsRUFBU3RYLENBQVQsRUFBZTtBQUM3QjtBQUNBcWYsZ0JBQVksQ0FBQy9ILE1BQUQsRUFBUyxLQUFULEVBQWdCLFVBQUE2SSxhQUFhLEVBQUk7QUFDM0NrQixvQkFBYyxDQUFDcmhCLENBQUQsQ0FBZCxHQUFvQm1nQixhQUFwQjs7QUFDQSxVQUFJLEVBQUVtQixLQUFGLEtBQVkxbUIsTUFBaEIsRUFBd0I7QUFDdEIraUIsZ0JBQVEsQ0FBQzBELGNBQWMsQ0FBQ3JPLElBQWYsQ0FBb0JtTyxTQUFwQixDQUFELENBQVI7QUFDRDtBQUNGLEtBTFcsQ0FBWjtBQU1ELEdBUkQ7QUFTRCxDQWZEOztBQWlCQSxJQUFNdkQsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDMkQsY0FBRCxFQUFpQnpJLFVBQWpCLEVBQWdDO0FBQ3BELE1BQU11SSxjQUFjLEdBQUdFLGNBQWMsQ0FBQ3BiLEtBQWYsQ0FBcUJnYixTQUFyQixDQUF2QjtBQUNBLE1BQU14SSxPQUFPLEdBQUcsRUFBaEI7O0FBQ0EsT0FBSyxJQUFJM1ksQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR3FoQixjQUFjLENBQUN6bUIsTUFBbkMsRUFBMkNvRixDQUFDLEVBQTVDLEVBQWdEO0FBQzlDLFFBQU13aEIsYUFBYSxHQUFHM0ksWUFBWSxDQUFDd0ksY0FBYyxDQUFDcmhCLENBQUQsQ0FBZixFQUFvQjhZLFVBQXBCLENBQWxDO0FBQ0FILFdBQU8sQ0FBQzlZLElBQVIsQ0FBYTJoQixhQUFiOztBQUNBLFFBQUlBLGFBQWEsQ0FBQ3pkLElBQWQsS0FBdUIsT0FBM0IsRUFBb0M7QUFDbEM7QUFDRDtBQUNGOztBQUNELFNBQU80VSxPQUFQO0FBQ0QsQ0FYRDs7QUFhQXBPLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjtBQUNmOEksVUFBUSxFQUFFLENBREs7QUFFZitMLGNBQVksRUFBWkEsWUFGZTtBQUdmeEIsZUFBYSxFQUFiQSxhQUhlO0FBSWZoRixjQUFZLEVBQVpBLFlBSmU7QUFLZitFLGVBQWEsRUFBYkE7QUFMZSxDQUFqQixDOzs7Ozs7Ozs7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBSTtBQUNGclQsUUFBTSxDQUFDQyxPQUFQLEdBQWlCLE9BQU91TyxjQUFQLEtBQTBCLFdBQTFCLElBQ2YscUJBQXFCLElBQUlBLGNBQUosRUFEdkI7QUFFRCxDQUhELENBR0UsT0FBT2hDLEdBQVAsRUFBWTtBQUNaO0FBQ0E7QUFDQXhNLFFBQU0sQ0FBQ0MsT0FBUCxHQUFpQixLQUFqQjtBQUNELEM7Ozs7Ozs7Ozs7QUNoQkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBSTlKLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBUzBDLElBQVQsRUFBZTtBQUNwQyxNQUFJQSxJQUFJLElBQUk5RixTQUFaLEVBQXVCO0FBQ3RCOEYsUUFBSSxHQUFHLElBQUk1SCxJQUFKLEdBQVdDLE9BQVgsRUFBUDtBQUNBO0FBRUQ7OztBQUNBLE9BQUtnbUIsQ0FBTCxHQUFTLEdBQVQ7QUFDQSxPQUFLQyxDQUFMLEdBQVMsR0FBVDtBQUNBLE9BQUtDLFFBQUwsR0FBZ0IsVUFBaEI7QUFBOEI7O0FBQzlCLE9BQUtDLFVBQUwsR0FBa0IsVUFBbEI7QUFBOEI7O0FBQzlCLE9BQUtDLFVBQUwsR0FBa0IsVUFBbEI7QUFBOEI7O0FBRTlCLE9BQUtDLEVBQUwsR0FBVSxJQUFJeGdCLEtBQUosQ0FBVSxLQUFLbWdCLENBQWYsQ0FBVjtBQUE2Qjs7QUFDN0IsT0FBS00sR0FBTCxHQUFTLEtBQUtOLENBQUwsR0FBTyxDQUFoQjtBQUFtQjs7QUFFbkIsTUFBSXJlLElBQUksQ0FBQzRlLFdBQUwsSUFBb0IxZ0IsS0FBeEIsRUFBK0I7QUFDOUIsU0FBSzJnQixhQUFMLENBQW1CN2UsSUFBbkIsRUFBeUJBLElBQUksQ0FBQ3hJLE1BQTlCO0FBQ0EsR0FGRCxNQUdLO0FBQ0osU0FBS3NuQixTQUFMLENBQWU5ZSxJQUFmO0FBQ0E7QUFDRCxDQXJCRDtBQXVCQTs7QUFDQTs7O0FBQ0ExQyxlQUFlLENBQUNlLFNBQWhCLENBQTBCeWdCLFNBQTFCLEdBQXNDLFVBQVN2YyxDQUFULEVBQVk7QUFDakQsT0FBS21jLEVBQUwsQ0FBUSxDQUFSLElBQWFuYyxDQUFDLEtBQUssQ0FBbkI7O0FBQ0EsT0FBSyxLQUFLb2MsR0FBTCxHQUFTLENBQWQsRUFBaUIsS0FBS0EsR0FBTCxHQUFTLEtBQUtOLENBQS9CLEVBQWtDLEtBQUtNLEdBQUwsRUFBbEMsRUFBOEM7QUFDN0MsUUFBSXBjLENBQUMsR0FBRyxLQUFLbWMsRUFBTCxDQUFRLEtBQUtDLEdBQUwsR0FBUyxDQUFqQixJQUF1QixLQUFLRCxFQUFMLENBQVEsS0FBS0MsR0FBTCxHQUFTLENBQWpCLE1BQXdCLEVBQXZEO0FBQ0EsU0FBS0QsRUFBTCxDQUFRLEtBQUtDLEdBQWIsSUFBcUIsQ0FBRSxDQUFDLENBQUNwYyxDQUFDLEdBQUcsVUFBTCxNQUFxQixFQUF0QixJQUE0QixVQUE3QixJQUE0QyxFQUE3QyxJQUFtRCxDQUFDQSxDQUFDLEdBQUcsVUFBTCxJQUFtQixVQUF2RSxHQUNsQixLQUFLb2MsR0FEUDtBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBLFNBQUtELEVBQUwsQ0FBUSxLQUFLQyxHQUFiLE9BQXVCLENBQXZCO0FBQ0E7QUFDQTtBQUNELENBYkQ7QUFlQTs7QUFDQTs7QUFDQTs7QUFDQTs7O0FBQ0FyaEIsZUFBZSxDQUFDZSxTQUFoQixDQUEwQndnQixhQUExQixHQUEwQyxVQUFTRSxRQUFULEVBQW1CQyxVQUFuQixFQUErQjtBQUN4RSxNQUFJcGlCLENBQUosRUFBTzBHLENBQVAsRUFBVWlaLENBQVY7QUFDQSxPQUFLdUMsU0FBTCxDQUFlLFFBQWY7QUFDQWxpQixHQUFDLEdBQUMsQ0FBRjtBQUFLMEcsR0FBQyxHQUFDLENBQUY7QUFDTGlaLEdBQUMsR0FBSSxLQUFLOEIsQ0FBTCxHQUFPVyxVQUFQLEdBQW9CLEtBQUtYLENBQXpCLEdBQTZCVyxVQUFsQzs7QUFDQSxTQUFPekMsQ0FBUCxFQUFVQSxDQUFDLEVBQVgsRUFBZTtBQUNkLFFBQUloYSxDQUFDLEdBQUcsS0FBS21jLEVBQUwsQ0FBUTloQixDQUFDLEdBQUMsQ0FBVixJQUFnQixLQUFLOGhCLEVBQUwsQ0FBUTloQixDQUFDLEdBQUMsQ0FBVixNQUFpQixFQUF6QztBQUNBLFNBQUs4aEIsRUFBTCxDQUFROWhCLENBQVIsSUFBYSxDQUFDLEtBQUs4aEIsRUFBTCxDQUFROWhCLENBQVIsSUFBYyxDQUFFLENBQUMsQ0FBQzJGLENBQUMsR0FBRyxVQUFMLE1BQXFCLEVBQXRCLElBQTRCLE9BQTdCLElBQXlDLEVBQTFDLElBQWlELENBQUNBLENBQUMsR0FBRyxVQUFMLElBQW1CLE9BQW5GLElBQ1h3YyxRQUFRLENBQUN6YixDQUFELENBREcsR0FDR0EsQ0FEaEI7QUFDbUI7O0FBQ25CLFNBQUtvYixFQUFMLENBQVE5aEIsQ0FBUixPQUFnQixDQUFoQjtBQUFtQjs7QUFDbkJBLEtBQUM7QUFBSTBHLEtBQUM7O0FBQ04sUUFBSTFHLENBQUMsSUFBRSxLQUFLeWhCLENBQVosRUFBZTtBQUFFLFdBQUtLLEVBQUwsQ0FBUSxDQUFSLElBQWEsS0FBS0EsRUFBTCxDQUFRLEtBQUtMLENBQUwsR0FBTyxDQUFmLENBQWI7QUFBZ0N6aEIsT0FBQyxHQUFDLENBQUY7QUFBTTs7QUFDdkQsUUFBSTBHLENBQUMsSUFBRTBiLFVBQVAsRUFBbUIxYixDQUFDLEdBQUMsQ0FBRjtBQUNuQjs7QUFDRCxPQUFLaVosQ0FBQyxHQUFDLEtBQUs4QixDQUFMLEdBQU8sQ0FBZCxFQUFpQjlCLENBQWpCLEVBQW9CQSxDQUFDLEVBQXJCLEVBQXlCO0FBQ3hCLFFBQUloYSxDQUFDLEdBQUcsS0FBS21jLEVBQUwsQ0FBUTloQixDQUFDLEdBQUMsQ0FBVixJQUFnQixLQUFLOGhCLEVBQUwsQ0FBUTloQixDQUFDLEdBQUMsQ0FBVixNQUFpQixFQUF6QztBQUNBLFNBQUs4aEIsRUFBTCxDQUFROWhCLENBQVIsSUFBYSxDQUFDLEtBQUs4aEIsRUFBTCxDQUFROWhCLENBQVIsSUFBYyxDQUFFLENBQUMsQ0FBQzJGLENBQUMsR0FBRyxVQUFMLE1BQXFCLEVBQXRCLElBQTRCLFVBQTdCLElBQTRDLEVBQTdDLElBQW1ELENBQUNBLENBQUMsR0FBRyxVQUFMLElBQW1CLFVBQXJGLElBQ1gzRixDQURGO0FBQ0s7O0FBQ0wsU0FBSzhoQixFQUFMLENBQVE5aEIsQ0FBUixPQUFnQixDQUFoQjtBQUFtQjs7QUFDbkJBLEtBQUM7O0FBQ0QsUUFBSUEsQ0FBQyxJQUFFLEtBQUt5aEIsQ0FBWixFQUFlO0FBQUUsV0FBS0ssRUFBTCxDQUFRLENBQVIsSUFBYSxLQUFLQSxFQUFMLENBQVEsS0FBS0wsQ0FBTCxHQUFPLENBQWYsQ0FBYjtBQUFnQ3poQixPQUFDLEdBQUMsQ0FBRjtBQUFNO0FBQ3ZEOztBQUVELE9BQUs4aEIsRUFBTCxDQUFRLENBQVIsSUFBYSxVQUFiO0FBQXlCO0FBQ3pCLENBeEJEO0FBMEJBOztBQUNBOzs7QUFDQXBoQixlQUFlLENBQUNlLFNBQWhCLENBQTBCNGdCLFVBQTFCLEdBQXVDLFlBQVc7QUFDakQsTUFBSTFyQixDQUFKO0FBQ0EsTUFBSTJyQixLQUFLLEdBQUcsSUFBSWhoQixLQUFKLENBQVUsR0FBVixFQUFlLEtBQUtxZ0IsUUFBcEIsQ0FBWjtBQUNBOztBQUVBLE1BQUksS0FBS0ksR0FBTCxJQUFZLEtBQUtOLENBQXJCLEVBQXdCO0FBQUU7QUFDekIsUUFBSWMsRUFBSjtBQUVBLFFBQUksS0FBS1IsR0FBTCxJQUFZLEtBQUtOLENBQUwsR0FBTyxDQUF2QjtBQUEyQjtBQUMxQixXQUFLUyxTQUFMLENBQWUsSUFBZjtBQUF1Qjs7QUFFeEIsU0FBS0ssRUFBRSxHQUFDLENBQVIsRUFBVUEsRUFBRSxHQUFDLEtBQUtkLENBQUwsR0FBTyxLQUFLQyxDQUF6QixFQUEyQmEsRUFBRSxFQUE3QixFQUFpQztBQUNoQzVyQixPQUFDLEdBQUksS0FBS21yQixFQUFMLENBQVFTLEVBQVIsSUFBWSxLQUFLWCxVQUFsQixHQUErQixLQUFLRSxFQUFMLENBQVFTLEVBQUUsR0FBQyxDQUFYLElBQWMsS0FBS1YsVUFBdEQ7QUFDQSxXQUFLQyxFQUFMLENBQVFTLEVBQVIsSUFBYyxLQUFLVCxFQUFMLENBQVFTLEVBQUUsR0FBQyxLQUFLYixDQUFoQixJQUFzQi9xQixDQUFDLEtBQUssQ0FBNUIsR0FBaUMyckIsS0FBSyxDQUFDM3JCLENBQUMsR0FBRyxHQUFMLENBQXBEO0FBQ0E7O0FBQ0QsV0FBTTRyQixFQUFFLEdBQUMsS0FBS2QsQ0FBTCxHQUFPLENBQWhCLEVBQWtCYyxFQUFFLEVBQXBCLEVBQXdCO0FBQ3ZCNXJCLE9BQUMsR0FBSSxLQUFLbXJCLEVBQUwsQ0FBUVMsRUFBUixJQUFZLEtBQUtYLFVBQWxCLEdBQStCLEtBQUtFLEVBQUwsQ0FBUVMsRUFBRSxHQUFDLENBQVgsSUFBYyxLQUFLVixVQUF0RDtBQUNBLFdBQUtDLEVBQUwsQ0FBUVMsRUFBUixJQUFjLEtBQUtULEVBQUwsQ0FBUVMsRUFBRSxJQUFFLEtBQUtiLENBQUwsR0FBTyxLQUFLRCxDQUFkLENBQVYsSUFBK0I5cUIsQ0FBQyxLQUFLLENBQXJDLEdBQTBDMnJCLEtBQUssQ0FBQzNyQixDQUFDLEdBQUcsR0FBTCxDQUE3RDtBQUNBOztBQUNEQSxLQUFDLEdBQUksS0FBS21yQixFQUFMLENBQVEsS0FBS0wsQ0FBTCxHQUFPLENBQWYsSUFBa0IsS0FBS0csVUFBeEIsR0FBcUMsS0FBS0UsRUFBTCxDQUFRLENBQVIsSUFBVyxLQUFLRCxVQUF6RDtBQUNBLFNBQUtDLEVBQUwsQ0FBUSxLQUFLTCxDQUFMLEdBQU8sQ0FBZixJQUFvQixLQUFLSyxFQUFMLENBQVEsS0FBS0osQ0FBTCxHQUFPLENBQWYsSUFBcUIvcUIsQ0FBQyxLQUFLLENBQTNCLEdBQWdDMnJCLEtBQUssQ0FBQzNyQixDQUFDLEdBQUcsR0FBTCxDQUF6RDtBQUVBLFNBQUtvckIsR0FBTCxHQUFXLENBQVg7QUFDQTs7QUFFRHByQixHQUFDLEdBQUcsS0FBS21yQixFQUFMLENBQVEsS0FBS0MsR0FBTCxFQUFSLENBQUo7QUFFQTs7QUFDQXByQixHQUFDLElBQUtBLENBQUMsS0FBSyxFQUFaO0FBQ0FBLEdBQUMsSUFBS0EsQ0FBQyxJQUFJLENBQU4sR0FBVyxVQUFoQjtBQUNBQSxHQUFDLElBQUtBLENBQUMsSUFBSSxFQUFOLEdBQVksVUFBakI7QUFDQUEsR0FBQyxJQUFLQSxDQUFDLEtBQUssRUFBWjtBQUVBLFNBQU9BLENBQUMsS0FBSyxDQUFiO0FBQ0EsQ0FsQ0Q7QUFvQ0E7O0FBQ0E7OztBQUNBK0osZUFBZSxDQUFDZSxTQUFoQixDQUEwQitnQixZQUExQixHQUF5QyxZQUFXO0FBQ25ELFNBQVEsS0FBS0gsVUFBTCxPQUFvQixDQUE1QjtBQUNBLENBRkQ7QUFJQTs7QUFDQTs7O0FBQ0EzaEIsZUFBZSxDQUFDZSxTQUFoQixDQUEwQmdoQixXQUExQixHQUF3QyxZQUFXO0FBQ2xELFNBQU8sS0FBS0osVUFBTCxNQUFtQixNQUFJLFlBQXZCLENBQVA7QUFDQTtBQUNBLENBSEQ7QUFLQTs7O0FBQ0EzaEIsZUFBZSxDQUFDZSxTQUFoQixDQUEwQjRCLE1BQTFCLEdBQW1DLFlBQVc7QUFDN0MsU0FBTyxLQUFLZ2YsVUFBTCxNQUFtQixNQUFJLFlBQXZCLENBQVA7QUFDQTtBQUNBLENBSEQ7QUFLQTs7QUFDQTs7O0FBQ0EzaEIsZUFBZSxDQUFDZSxTQUFoQixDQUEwQmloQixXQUExQixHQUF3QyxZQUFXO0FBQ2xELFNBQU8sQ0FBQyxLQUFLTCxVQUFMLEtBQW9CLEdBQXJCLEtBQTJCLE1BQUksWUFBL0IsQ0FBUDtBQUNBO0FBQ0EsQ0FIRDtBQUtBOztBQUNBOzs7QUFDQTNoQixlQUFlLENBQUNlLFNBQWhCLENBQTBCa2hCLFdBQTFCLEdBQXdDLFlBQVc7QUFDbEQsTUFBSXRoQixDQUFDLEdBQUMsS0FBS2doQixVQUFMLE9BQW9CLENBQTFCO0FBQUEsTUFBNkIvYyxDQUFDLEdBQUMsS0FBSytjLFVBQUwsT0FBb0IsQ0FBbkQ7QUFDQSxTQUFNLENBQUNoaEIsQ0FBQyxHQUFDLFVBQUYsR0FBYWlFLENBQWQsS0FBa0IsTUFBSSxrQkFBdEIsQ0FBTjtBQUNBLENBSEQ7QUFLQTs7O0FBRUFpRixNQUFNLENBQUNDLE9BQVAsR0FBaUI5SixlQUFqQixDOzs7Ozs7Ozs7O0FDak5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE4SixjQUFBLEdBQWlCLFVBQVVoSixHQUFWLEVBQWU7QUFDOUIsTUFBSWEsR0FBRyxHQUFHLEVBQVY7O0FBRUEsT0FBSyxJQUFJckMsQ0FBVCxJQUFjd0IsR0FBZCxFQUFtQjtBQUNqQixRQUFJQSxHQUFHLENBQUNNLGNBQUosQ0FBbUI5QixDQUFuQixDQUFKLEVBQTJCO0FBQ3pCLFVBQUlxQyxHQUFHLENBQUN6SCxNQUFSLEVBQWdCeUgsR0FBRyxJQUFJLEdBQVA7QUFDaEJBLFNBQUcsSUFBSXVnQixrQkFBa0IsQ0FBQzVpQixDQUFELENBQWxCLEdBQXdCLEdBQXhCLEdBQThCNGlCLGtCQUFrQixDQUFDcGhCLEdBQUcsQ0FBQ3hCLENBQUQsQ0FBSixDQUF2RDtBQUNEO0FBQ0Y7O0FBRUQsU0FBT3FDLEdBQVA7QUFDRCxDQVhEO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQW1JLGNBQUEsR0FBaUIsVUFBU3FZLEVBQVQsRUFBWTtBQUMzQixNQUFJQyxHQUFHLEdBQUcsRUFBVjtBQUNBLE1BQUlDLEtBQUssR0FBR0YsRUFBRSxDQUFDMWMsS0FBSCxDQUFTLEdBQVQsQ0FBWjs7QUFDQSxPQUFLLElBQUluRyxDQUFDLEdBQUcsQ0FBUixFQUFXNEYsQ0FBQyxHQUFHbWQsS0FBSyxDQUFDbm9CLE1BQTFCLEVBQWtDb0YsQ0FBQyxHQUFHNEYsQ0FBdEMsRUFBeUM1RixDQUFDLEVBQTFDLEVBQThDO0FBQzVDLFFBQUlnakIsSUFBSSxHQUFHRCxLQUFLLENBQUMvaUIsQ0FBRCxDQUFMLENBQVNtRyxLQUFULENBQWUsR0FBZixDQUFYO0FBQ0EyYyxPQUFHLENBQUNHLGtCQUFrQixDQUFDRCxJQUFJLENBQUMsQ0FBRCxDQUFMLENBQW5CLENBQUgsR0FBbUNDLGtCQUFrQixDQUFDRCxJQUFJLENBQUMsQ0FBRCxDQUFMLENBQXJEO0FBQ0Q7O0FBQ0QsU0FBT0YsR0FBUDtBQUNELENBUkQsQzs7Ozs7Ozs7OztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFJSSxFQUFFLEdBQUcseU9BQVQ7QUFFQSxJQUFJQyxLQUFLLEdBQUcsQ0FDUixRQURRLEVBQ0UsVUFERixFQUNjLFdBRGQsRUFDMkIsVUFEM0IsRUFDdUMsTUFEdkMsRUFDK0MsVUFEL0MsRUFDMkQsTUFEM0QsRUFDbUUsTUFEbkUsRUFDMkUsVUFEM0UsRUFDdUYsTUFEdkYsRUFDK0YsV0FEL0YsRUFDNEcsTUFENUcsRUFDb0gsT0FEcEgsRUFDNkgsUUFEN0gsQ0FBWjs7QUFJQTVZLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixTQUFTaUosUUFBVCxDQUFrQnBSLEdBQWxCLEVBQXVCO0FBQ3BDLE1BQUlrWSxHQUFHLEdBQUdsWSxHQUFWO0FBQUEsTUFDSWlELENBQUMsR0FBR2pELEdBQUcsQ0FBQ1QsT0FBSixDQUFZLEdBQVosQ0FEUjtBQUFBLE1BRUluRSxDQUFDLEdBQUc0RSxHQUFHLENBQUNULE9BQUosQ0FBWSxHQUFaLENBRlI7O0FBSUEsTUFBSTBELENBQUMsSUFBSSxDQUFDLENBQU4sSUFBVzdILENBQUMsSUFBSSxDQUFDLENBQXJCLEVBQXdCO0FBQ3BCNEUsT0FBRyxHQUFHQSxHQUFHLENBQUN3SixTQUFKLENBQWMsQ0FBZCxFQUFpQnZHLENBQWpCLElBQXNCakQsR0FBRyxDQUFDd0osU0FBSixDQUFjdkcsQ0FBZCxFQUFpQjdILENBQWpCLEVBQW9CeUgsT0FBcEIsQ0FBNEIsSUFBNUIsRUFBa0MsR0FBbEMsQ0FBdEIsR0FBK0Q3QyxHQUFHLENBQUN3SixTQUFKLENBQWNwTyxDQUFkLEVBQWlCNEUsR0FBRyxDQUFDekgsTUFBckIsQ0FBckU7QUFDSDs7QUFFRCxNQUFJdUssQ0FBQyxHQUFHK2QsRUFBRSxDQUFDcGUsSUFBSCxDQUFRekMsR0FBRyxJQUFJLEVBQWYsQ0FBUjtBQUFBLE1BQ0lnUixHQUFHLEdBQUcsRUFEVjtBQUFBLE1BRUlyVCxDQUFDLEdBQUcsRUFGUjs7QUFJQSxTQUFPQSxDQUFDLEVBQVIsRUFBWTtBQUNScVQsT0FBRyxDQUFDOFAsS0FBSyxDQUFDbmpCLENBQUQsQ0FBTixDQUFILEdBQWdCbUYsQ0FBQyxDQUFDbkYsQ0FBRCxDQUFELElBQVEsRUFBeEI7QUFDSDs7QUFFRCxNQUFJc0YsQ0FBQyxJQUFJLENBQUMsQ0FBTixJQUFXN0gsQ0FBQyxJQUFJLENBQUMsQ0FBckIsRUFBd0I7QUFDcEI0VixPQUFHLENBQUMrUCxNQUFKLEdBQWE3SSxHQUFiO0FBQ0FsSCxPQUFHLENBQUNPLElBQUosR0FBV1AsR0FBRyxDQUFDTyxJQUFKLENBQVMvSCxTQUFULENBQW1CLENBQW5CLEVBQXNCd0gsR0FBRyxDQUFDTyxJQUFKLENBQVNoWixNQUFULEdBQWtCLENBQXhDLEVBQTJDc0ssT0FBM0MsQ0FBbUQsSUFBbkQsRUFBeUQsR0FBekQsQ0FBWDtBQUNBbU8sT0FBRyxDQUFDZ1EsU0FBSixHQUFnQmhRLEdBQUcsQ0FBQ2dRLFNBQUosQ0FBY25lLE9BQWQsQ0FBc0IsR0FBdEIsRUFBMkIsRUFBM0IsRUFBK0JBLE9BQS9CLENBQXVDLEdBQXZDLEVBQTRDLEVBQTVDLEVBQWdEQSxPQUFoRCxDQUF3RCxJQUF4RCxFQUE4RCxHQUE5RCxDQUFoQjtBQUNBbU8sT0FBRyxDQUFDaVEsT0FBSixHQUFjLElBQWQ7QUFDSDs7QUFFRGpRLEtBQUcsQ0FBQ2tRLFNBQUosR0FBZ0JBLFNBQVMsQ0FBQ2xRLEdBQUQsRUFBTUEsR0FBRyxDQUFDLE1BQUQsQ0FBVCxDQUF6QjtBQUNBQSxLQUFHLENBQUNtUSxRQUFKLEdBQWVBLFFBQVEsQ0FBQ25RLEdBQUQsRUFBTUEsR0FBRyxDQUFDLE9BQUQsQ0FBVCxDQUF2QjtBQUVBLFNBQU9BLEdBQVA7QUFDSCxDQTVCRDs7QUE4QkEsU0FBU2tRLFNBQVQsQ0FBbUIvaEIsR0FBbkIsRUFBd0IyUyxJQUF4QixFQUE4QjtBQUMxQixNQUFJc1AsSUFBSSxHQUFHLFVBQVg7QUFBQSxNQUNJblMsS0FBSyxHQUFHNkMsSUFBSSxDQUFDalAsT0FBTCxDQUFhdWUsSUFBYixFQUFtQixHQUFuQixFQUF3QnRkLEtBQXhCLENBQThCLEdBQTlCLENBRFo7O0FBR0EsTUFBSWdPLElBQUksQ0FBQ3JCLE1BQUwsQ0FBWSxDQUFaLEVBQWUsQ0FBZixLQUFxQixHQUFyQixJQUE0QnFCLElBQUksQ0FBQ3ZaLE1BQUwsS0FBZ0IsQ0FBaEQsRUFBbUQ7QUFDL0MwVyxTQUFLLENBQUN0RSxNQUFOLENBQWEsQ0FBYixFQUFnQixDQUFoQjtBQUNIOztBQUNELE1BQUltSCxJQUFJLENBQUNyQixNQUFMLENBQVlxQixJQUFJLENBQUN2WixNQUFMLEdBQWMsQ0FBMUIsRUFBNkIsQ0FBN0IsS0FBbUMsR0FBdkMsRUFBNEM7QUFDeEMwVyxTQUFLLENBQUN0RSxNQUFOLENBQWFzRSxLQUFLLENBQUMxVyxNQUFOLEdBQWUsQ0FBNUIsRUFBK0IsQ0FBL0I7QUFDSDs7QUFFRCxTQUFPMFcsS0FBUDtBQUNIOztBQUVELFNBQVNrUyxRQUFULENBQWtCblEsR0FBbEIsRUFBdUJVLEtBQXZCLEVBQThCO0FBQzFCLE1BQUkwQyxJQUFJLEdBQUcsRUFBWDtBQUVBMUMsT0FBSyxDQUFDN08sT0FBTixDQUFjLDJCQUFkLEVBQTJDLFVBQVV3ZSxFQUFWLEVBQWNsVSxFQUFkLEVBQWtCbVUsRUFBbEIsRUFBc0I7QUFDN0QsUUFBSW5VLEVBQUosRUFBUTtBQUNKaUgsVUFBSSxDQUFDakgsRUFBRCxDQUFKLEdBQVdtVSxFQUFYO0FBQ0g7QUFDSixHQUpEO0FBTUEsU0FBT2xOLElBQVA7QUFDSCxDOzs7Ozs7Ozs7Ozs7QUNuRUQsSUFBTW1OLFVBQVUsR0FBRztBQUNqQnZpQixHQUFDLEVBRGdCO0FBRWpCdU8sR0FBQyxFQUZnQjtBQUdqQmxLLEdBQUMsRUFIZ0I7QUFJakJFLEdBQUMsRUFKZ0I7QUFLakJULEdBQUMsRUFMZ0I7QUFNakJZLEdBQUMsRUFOZ0I7QUFPakJKLEdBQUMsRUFQZ0I7QUFRakJLLEdBQUMsRUFSZ0I7QUFTakIwSyxHQUFDLEVBVGdCO0FBVWpCbVQsR0FBQyxFQUFFO0FBVmMsQ0FBbkI7QUFhQSxJQUFNQyxlQUFlLEdBQXJCO0FBRUEsSUFBTUMsTUFBTSxHQUFaOztBQUVBLDJCQUEyQjtBQUN6QixNQUFNQyxPQUFPLEdBQUcvaUIsSUFBSSxDQUFKQSxNQUFoQixNQUFnQkEsQ0FBaEI7QUFDQSxTQUFPK2lCLE9BQU8sR0FBR0EsT0FBTyxDQUFQQSxJQUFILE1BQUdBLENBQUgsR0FBZDtBQUNEO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EscUJBQXFCO0FBQ25CLE1BQU12TixJQUFJLEdBQVY7QUFDQSxNQUFNM1EsQ0FBQyxHQUFHaUksTUFBTSxDQUFOQSxJQUFNLENBQU5BLENBRlMsSUFFVEEsRUFBVixDQUZtQjs7QUFLbkIsTUFBSWpJLENBQUMsQ0FBREEsQ0FBQyxDQUFEQSxZQUFnQkEsQ0FBQyxDQUFEQSxDQUFDLENBQURBLEtBQXBCLEtBQWtDO0FBQ2hDO0FBQ0Q7O0FBRURBLEdBQUMsQ0FBREEseUJBQTJCLDRCQUFzQjtBQUMvQyxRQUFJL0IsSUFBSSxHQUFHa2dCLE9BQU8sQ0FBbEIsV0FBV0EsRUFBWDtBQUNBLFFBQUlDLE9BQU8sR0FBR0MsV0FBVyxDQUF6QixJQUF5QixDQUF6QjtBQUNBLFFBQUlDLFVBQVUsR0FIaUMsT0FHL0MsQ0FIK0M7O0FBSy9DLFFBQUlyZ0IsSUFBSSxLQUFKQSxPQUFnQm1nQixPQUFPLENBQVBBLFNBQXBCLEdBQXdDO0FBQ3RDek4sVUFBSSxDQUFKQSxLQUFVLG9CQUFvQnlOLE9BQU8sQ0FBUEEsVUFBOUJ6TixDQUE4QnlOLENBQXBCLENBQVZ6TjtBQUNBMVMsVUFBSSxHQUFKQTtBQUNBcWdCLGdCQUFVLEdBQUdBLFVBQVUsS0FBVkEsWUFBYkE7QUFSNkM7OztBQVkvQyxRQUFJRixPQUFPLENBQVBBLFNBQWlCTixVQUFVLENBQS9CLElBQStCLENBQS9CLEVBQXVDO0FBQ3JDO0FBQ0Q7O0FBRURuTixRQUFJLENBQUpBLEtBQVUsb0JBQW9CeU4sT0FBTyxDQUFQQSxVQUFrQk4sVUFBVSxDQWhCWCxJQWdCVyxDQUE1Qk0sQ0FBcEIsQ0FBVnpOLEVBaEIrQzs7Ozs7QUFzQi9DLFdBQ0V5TixPQUFPLENBQVBBLFVBQWtCTixVQUFVLENBQTVCTSxJQUE0QixDQUE1QkEsSUFDQUEsT0FBTyxDQURQQSxVQUVBTixVQUFVLENBSFosSUFHWSxDQUhaLEVBSUU7QUFDQW5OLFVBQUksQ0FBSkEsS0FBVSxvQkFBb0J5TixPQUFPLENBQVBBLFVBQWtCTixVQUFVLENBQTFEbk4sSUFBMEQsQ0FBNUJ5TixDQUFwQixDQUFWek47QUFDRDs7QUFFRDtBQTlCRjNRO0FBZ0NBO0FBQ0Q7O0FBRUQsYUFBYyxHQUFkOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0VBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSx5Q0FBeUM7QUFDdkMsTUFBTTZDLE1BQU0sR0FBR3pNLE1BQU0sQ0FBTkEsdUJBQWYsUUFBZUEsQ0FBZjtBQUNBLE1BQU1tSixDQUFDLEdBQUdzRCxNQUFNLENBQU5BLFdBQVYsSUFBVUEsQ0FBVjtBQUNBLE1BQU03QyxDQUFDLEdBQUcsSUFBSTVKLE1BQU0sQ0FBVixPQUFWLFdBQVUsQ0FBVjtBQUNBbUosR0FBQyxDQUFEQTtBQUNBQSxHQUFDLENBQURBO0FBQ0FBLEdBQUMsQ0FBREE7QUFDQSxNQUFNZ2YsT0FBTyxHQUFHaGYsQ0FBQyxDQUFEQSxzQkFBaEIsQ0FBZ0JBLENBQWhCO0FBQ0EsU0FBT2dmLE9BQU8sQ0FBUEEsWUFSZ0MsR0FRdkMsQ0FSdUM7QUFTeEM7O0FBRUQsbUNBQW1DO0FBQ2pDLE1BQU1DLEVBQUUsR0FBR2xyQixLQUFLLENBQUxBLElBQVVoQyxJQUFJLENBQUpBLElBQVZnQyxLQUFVaEMsQ0FBVmdDLEdBQTRCQSxLQUFLLENBQUxBLElBQVVoQyxJQUFJLENBQUpBLElBQWpELEtBQWlEQSxDQUFqRDtBQUNBLE1BQU1tdEIsRUFBRSxHQUFHbnJCLEtBQUssQ0FBTEEsSUFBVWhDLElBQUksQ0FBSkEsSUFBVmdDLEtBQVVoQyxDQUFWZ0MsR0FBNEJBLEtBQUssQ0FBTEEsSUFBVWhDLElBQUksQ0FBSkEsSUFBakQsS0FBaURBLENBQWpEO0FBQ0FnQyxPQUFLLENBQUxBO0FBQ0FBLE9BQUssQ0FBTEE7QUFDRDs7QUFFRCx1Q0FBdUM7QUFDckNBLE9BQUssQ0FBTEE7QUFDQUEsT0FBSyxDQUFMQTtBQUNEOztBQUVELDhCQUE4QjtBQUM1QkEsT0FBSyxDQUFMQTtBQUNBQSxPQUFLLENBQUxBO0FBQ0Q7O0FBRUQsZ0NBQWdDO0FBQzlCLE1BQUksaUNBQWlDLENBQUM4QyxNQUFNLENBQTVDLDBCQUF1RTtBQUNyRTtBQUNEOztBQUNELE1BQUlBLE1BQU0sQ0FBTkEsVUFBaUJzb0IsdUJBQXVCLENBQTVDLE1BQTRDLENBQTVDLEVBQXNEO0FBQ3BEO0FBQ0Q7O0FBR0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBYmdDLE1BY3hCQyxNQWR3QjtBQWU1QiwwQkFBa0I7QUFBQTs7QUFDaEI7O0FBQ0EsVUFBSXRRLElBQUksSUFBSUEsSUFBSSxZQUFoQixRQUFvQztBQUFBOztBQUNsQyx1RkFBc0JBLElBQUksQ0FBMUI7QUFERixhQUVPLFVBQVU7QUFDZix3QkFBZ0J1USxTQUFTLENBQXpCLElBQXlCLENBQXpCO0FBQ0Q7QUFDRjs7QUF0QjJCO0FBQUE7QUFBQSxhQXdCNUIsdUJBQWM7QUFDWixZQUFJdlEsSUFBSSxJQUFJQSxJQUFJLFlBQWhCLFFBQW9DO0FBQUE7O0FBQ2xDLDJGQUFzQkEsSUFBSSxDQUExQjtBQUNEO0FBQ0Y7QUE1QjJCO0FBQUE7QUFBQSxhQThCNUIsc0JBQWE7QUFDWCwyQkFBbUIsU0FBbkIsQ0FBbUIsQ0FBbkI7QUFDRDtBQWhDMkI7QUFBQTtBQUFBLGFBa0M1QixzQkFBYTtBQUNYLDJCQUFtQixTQUFuQixDQUFtQixDQUFuQjtBQUNEO0FBcEMyQjtBQUFBO0FBQUEsYUFzQzVCLHVDQUE4QjtBQUM1QiwyQkFBbUIsNEJBQTRCLENBQUMsQ0FBaEQsR0FBbUIsQ0FBbkI7QUFDRDtBQXhDMkI7QUFBQTtBQUFBLGFBMEM1QixrQ0FBeUI7QUFDdkIsMkJBQW1CLHVCQUFuQixDQUFtQixDQUFuQjtBQUNEO0FBNUMyQjtBQUFBO0FBQUEsYUE4QzVCLHVEQUE4QztBQUM1QywyQkFBbUIsdUNBQXVDLENBQUMsQ0FBM0QsR0FBbUIsQ0FBbkI7QUFDRDtBQWhEMkI7QUFBQTtBQUFBLGFBa0Q1QixxQkFBWTtBQUNWLDJCQUFtQixDQUFuQixHQUFtQixDQUFuQjtBQUNEO0FBcEQyQjtBQUFBO0FBQUEsYUFzRDVCLHFEQUE0QztBQUMxQywyQkFBbUIsaUNBQW5CLENBQW1CLENBQW5CO0FBQ0Q7QUF4RDJCO0FBQUE7QUFBQSxhQTBENUIsMENBQWlDO0FBQy9CLDJCQUFtQixtQkFBbkIsQ0FBbUIsQ0FBbkI7QUFDRDtBQTVEMkI7QUFBQTtBQUFBLGFBOEQ1QixtQ0FBMEI7QUFDeEIsMkJBQW1CLG1CQUFuQixNQUFtQixDQUFuQjtBQUNEO0FBaEUyQjs7QUFBQTtBQUFBOztBQW1FOUIsdUNBQXFDO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFJd1EsVUFBVSxHQUFHO0FBQUVqdUIsT0FBQyxFQUFIO0FBQVFDLE9BQUMsRUFBRTtBQUFYLEtBQWpCO0FBQ0EsUUFBTWl1QixZQUFZLEdBQUc7QUFBRWx1QixPQUFDLEVBQUg7QUFBUUMsT0FBQyxFQUFFO0FBQVgsS0FBckI7QUFFQWdTLFVBQU0sQ0FBTkE7O0FBQ0EsU0FBSyxJQUFJM0ksQ0FBQyxHQUFWLEdBQWdCQSxDQUFDLEdBQUc2a0IsUUFBUSxDQUE1QixRQUFxQyxFQUFyQyxHQUEwQztBQUN4QyxVQUFNbGYsQ0FBQyxHQUFHa2YsUUFBUSxDQUFsQixDQUFrQixDQUFsQjtBQUNBQyxjQUFRLEdBQUduZixDQUFDLENBRjRCLENBRTVCLENBQVptZixDQUZ3Qzs7QUFLeEMsVUFDRUEsUUFBUSxLQUFSQSxPQUNBQSxRQUFRLEtBRFJBLE9BRUFBLFFBQVEsS0FGUkEsT0FHQUEsUUFBUSxLQUpWLEtBS0U7QUFDQUMsV0FBRyxHQUFIQTtBQUNBQyxXQUFHLEdBQUhBO0FBQ0Q7O0FBRUQsVUFDRUYsUUFBUSxLQUFSQSxPQUNBQSxRQUFRLEtBRFJBLE9BRUFBLFFBQVEsS0FGUkEsT0FHQUEsUUFBUSxLQUpWLEtBS0U7QUFDQUcsWUFBSSxHQUFKQTtBQUNBQyxZQUFJLEdBQUpBO0FBQ0Q7O0FBRUQ7QUFDRTtBQUNBO0FBQ0UsY0FBSUosUUFBUSxLQUFaLEtBQXNCO0FBQ3BCcHVCLGFBQUMsSUFBSWlQLENBQUMsQ0FBTmpQLENBQU0sQ0FBTkE7QUFDQUMsYUFBQyxJQUFJZ1AsQ0FBQyxDQUFOaFAsQ0FBTSxDQUFOQTtBQUZGLGlCQUdPO0FBQ0xELGFBQUMsR0FBR2lQLENBQUMsQ0FBTGpQLENBQUssQ0FBTEE7QUFDQUMsYUFBQyxHQUFHZ1AsQ0FBQyxDQUFMaFAsQ0FBSyxDQUFMQTtBQUNEOztBQUVELGNBQUltdUIsUUFBUSxLQUFSQSxPQUFvQixDQUF4QixZQUFxQztBQUNuQ0gsc0JBQVUsR0FBRztBQUFFanVCLGVBQUMsRUFBSDtBQUFLQyxlQUFDLEVBQURBO0FBQUwsYUFBYmd1QjtBQUNEOztBQUVEaGMsZ0JBQU0sQ0FBTkE7QUFDQTs7QUFDRjtBQUNFalMsV0FBQyxJQUFJaVAsQ0FBQyxDQUFOalAsQ0FBTSxDQUFOQTtBQUNBQyxXQUFDLElBQUlnUCxDQUFDLENBQU5oUCxDQUFNLENBQU5BO0FBQ0FnUyxnQkFBTSxDQUFOQTtBQUNBOztBQUNGO0FBQ0VqUyxXQUFDLEdBQUdpUCxDQUFDLENBQUxqUCxDQUFLLENBQUxBO0FBQ0FDLFdBQUMsR0FBR2dQLENBQUMsQ0FBTGhQLENBQUssQ0FBTEE7QUFDQWdTLGdCQUFNLENBQU5BO0FBQ0E7O0FBQ0Y7QUFDRWpTLFdBQUMsR0FBR2lQLENBQUMsQ0FBTGpQLENBQUssQ0FBTEE7QUFDQWlTLGdCQUFNLENBQU5BO0FBQ0E7O0FBQ0Y7QUFDRWpTLFdBQUMsSUFBSWlQLENBQUMsQ0FBTmpQLENBQU0sQ0FBTkE7QUFDQWlTLGdCQUFNLENBQU5BO0FBQ0E7O0FBQ0Y7QUFDRWhTLFdBQUMsR0FBR2dQLENBQUMsQ0FBTGhQLENBQUssQ0FBTEE7QUFDQWdTLGdCQUFNLENBQU5BO0FBQ0E7O0FBQ0Y7QUFDRWhTLFdBQUMsSUFBSWdQLENBQUMsQ0FBTmhQLENBQU0sQ0FBTkE7QUFDQWdTLGdCQUFNLENBQU5BO0FBQ0E7O0FBQ0Y7QUFDQTtBQUNFLGNBQUltYyxRQUFRLEtBQVosS0FBc0I7QUFDcEJwdUIsYUFBQyxJQUFJaVAsQ0FBQyxDQUFOalAsQ0FBTSxDQUFOQTtBQUNBQyxhQUFDLElBQUlnUCxDQUFDLENBQU5oUCxDQUFNLENBQU5BO0FBRkYsaUJBR087QUFDTEQsYUFBQyxHQUFHaVAsQ0FBQyxDQUFMalAsQ0FBSyxDQUFMQTtBQUNBQyxhQUFDLEdBQUdnUCxDQUFDLENBQUxoUCxDQUFLLENBQUxBO0FBQ0Q7O0FBRUR3dUIsWUFBRSxHQUFHeGYsQ0FBQyxDQVRSLENBU1EsQ0FBTndmLENBVEY7O0FBVUVDLFlBQUUsR0FBR3pmLENBQUMsQ0FWUixDQVVRLENBQU55ZixDQVZGOztBQVdFQyxlQUFLLEdBQUkxZixDQUFDLENBQURBLENBQUMsQ0FBREEsR0FBT3ZPLElBQUksQ0FBWixFQUFDdU8sR0FBVDBmO0FBQ0FDLHNCQUFZLEdBQUcsQ0FBQyxDQUFDM2YsQ0FBQyxDQUFsQjJmLENBQWtCLENBQWxCQTtBQUNBQyxtQkFBUyxHQUFHLENBQUMsQ0FBQzVmLENBQUMsQ0FBZjRmLENBQWUsQ0FBZkE7QUFDQUMsa0JBQVEsR0FBRztBQUFFOXVCLGFBQUMsRUFBSDtBQUFLQyxhQUFDLEVBQURBO0FBQUwsV0FBWDZ1QixDQWRGOztBQWtCRUMsa0JBQVEsR0FBRztBQUNUL3VCLGFBQUMsRUFBRSxDQUFDa3VCLFlBQVksQ0FBWkEsSUFBaUJZLFFBQVEsQ0FBMUIsS0FETTtBQUVUN3VCLGFBQUMsRUFBRSxDQUFDaXVCLFlBQVksQ0FBWkEsSUFBaUJZLFFBQVEsQ0FBMUIsS0FBZ0M7QUFGMUIsV0FBWEM7QUFJQUMscUJBQVcsV0FBVyxDQXRCeEIsS0FzQmEsQ0FBWEEsQ0F0QkY7O0FBeUJFQyxnQkFBTSxHQUNIRixRQUFRLENBQVJBLElBQWFBLFFBQVEsQ0FBdEIsQ0FBQ0EsSUFBNEJOLEVBQUUsR0FBL0IsRUFBQ00sSUFDQUEsUUFBUSxDQUFSQSxJQUFhQSxRQUFRLENBQXRCLENBQUNBLElBQTRCTCxFQUFFLEdBRmpDTyxFQUVHRixDQUZIRTs7QUFHQSxjQUFJQSxNQUFNLEdBQVYsR0FBZ0I7QUFDZEEsa0JBQU0sR0FBR3Z1QixJQUFJLENBQUpBLEtBQVR1dUIsTUFBU3Z1QixDQUFUdXVCO0FBQ0FSLGNBQUUsSUFBRkE7QUFDQUMsY0FBRSxJQUFGQTtBQUNEOztBQUVEUSxxQkFBVyxHQUFHO0FBQ1psdkIsYUFBQyxFQUFHeXVCLEVBQUUsR0FBR00sUUFBUSxDQUFkLENBQUNOLEdBRFE7QUFFWnh1QixhQUFDLEVBQUUsRUFBRXl1QixFQUFFLEdBQUdLLFFBQVEsQ0FBZixLQUFxQk47QUFGWixXQUFkUztBQUlBQyxZQUFFLEdBQUdWLEVBQUUsR0FBRkEsVUFBTFU7QUFDQUMsWUFBRSxHQUNBWCxFQUFFLEdBQUZBLEtBQVVNLFFBQVEsQ0FBbEJOLElBQXVCTSxRQUFRLENBQS9CTixJQUNBQyxFQUFFLEdBQUZBLEtBQVVLLFFBQVEsQ0FBbEJMLElBQXVCSyxRQUFRLENBRmpDSzs7QUFHQSxjQUFJUCxTQUFTLEtBQWIsY0FBZ0M7QUFDOUJRLHNCQUFVLGNBQWMzdUIsSUFBSSxDQUFKQSxLQUFVLENBQUN5dUIsRUFBRSxHQUFILE1BQVZ6dUIsT0FBeEIydUIsQ0FBVSxDQUFWQTtBQURGLGlCQUVPO0FBQ0xBLHNCQUFVLGNBQWMsQ0FBQzN1QixJQUFJLENBQUpBLEtBQVUsQ0FBQ3l1QixFQUFFLEdBQUgsTUFBWCxFQUFDenVCLENBQUQsSUFBeEIydUIsQ0FBVSxDQUFWQTtBQUNEOztBQUVEQyxvQkFBVSxHQUFHNXVCLElBQUksQ0FBSkEsTUFDWCxDQUFDcXVCLFFBQVEsQ0FBUkEsSUFBYUcsV0FBVyxDQUF6QixLQURXeHVCLElBRVgsQ0FBQ3F1QixRQUFRLENBQVJBLElBQWFHLFdBQVcsQ0FBekIsS0FGRkksRUFBYTV1QixDQUFiNHVCO0FBSUFDLGtCQUFRLEdBQUc3dUIsSUFBSSxDQUFKQSxNQUNULEVBQUVxdUIsUUFBUSxDQUFSQSxJQUFhRyxXQUFXLENBQTFCLEtBRFN4dUIsSUFFVCxFQUFFcXVCLFFBQVEsQ0FBUkEsSUFBYUcsV0FBVyxDQUExQixLQUZGSyxFQUFXN3VCLENBQVg2dUI7QUFLQVAscUJBQVcsY0FBWEEsS0FBVyxDQUFYQTtBQUNBUSx3QkFBYyxjQUVaLENBQUNWLFFBQVEsQ0FBUkEsSUFBYVosWUFBWSxDQUExQixLQUZZLEdBR1osQ0FBQ1ksUUFBUSxDQUFSQSxJQUFhWixZQUFZLENBQTFCLEtBSEZzQixDQUFjLENBQWRBO0FBTUF2ZCxnQkFBTSxDQUFOQTtBQUNBQSxnQkFBTSxDQUFOQSxVQUFpQmlkLFdBQVcsQ0FBNUJqZCxHQUFnQ2lkLFdBQVcsQ0FBM0NqZDtBQUNBQSxnQkFBTSxDQUFOQTtBQUNBQSxnQkFBTSxDQUFOQTtBQUNBQSxnQkFBTSxDQUFOQSxtQ0FBMEMsQ0FBMUNBO0FBQ0FBLGdCQUFNLENBQU5BO0FBQ0E7O0FBQ0Y7QUFDRW9jLGFBQUcsR0FBR3BmLENBQUMsQ0FEVCxDQUNTLENBQVBvZixDQURGOztBQUVFQyxhQUFHLEdBQUdyZixDQUFDLENBQVBxZixDQUFPLENBQVBBO0FBQ0F0dUIsV0FBQyxHQUFHaVAsQ0FBQyxDQUFMalAsQ0FBSyxDQUFMQTtBQUNBQyxXQUFDLEdBQUdnUCxDQUFDLENBQUxoUCxDQUFLLENBQUxBO0FBQ0FnUyxnQkFBTSxDQUFOQSxjQUFxQmhELENBQUMsQ0FBdEJnRCxDQUFzQixDQUF0QkEsRUFBMkJoRCxDQUFDLENBQTVCZ0QsQ0FBNEIsQ0FBNUJBO0FBQ0E7O0FBQ0Y7QUFDRUEsZ0JBQU0sQ0FBTkEsY0FDRWhELENBQUMsQ0FBREEsQ0FBQyxDQUFEQSxHQURGZ0QsR0FFRWhELENBQUMsQ0FBREEsQ0FBQyxDQUFEQSxHQUZGZ0QsR0FHRWhELENBQUMsQ0FBREEsQ0FBQyxDQUFEQSxHQUhGZ0QsR0FJRWhELENBQUMsQ0FBREEsQ0FBQyxDQUFEQSxHQUpGZ0QsR0FLRWhELENBQUMsQ0FBREEsQ0FBQyxDQUFEQSxHQUxGZ0QsR0FNRWhELENBQUMsQ0FBREEsQ0FBQyxDQUFEQSxHQU5GZ0Q7QUFRQW9jLGFBQUcsR0FBR3BmLENBQUMsQ0FBREEsQ0FBQyxDQUFEQSxHQVRSLENBU0VvZixDQVRGOztBQVVFQyxhQUFHLEdBQUdyZixDQUFDLENBQURBLENBQUMsQ0FBREEsR0FBTnFmO0FBQ0F0dUIsV0FBQyxJQUFJaVAsQ0FBQyxDQUFOalAsQ0FBTSxDQUFOQTtBQUNBQyxXQUFDLElBQUlnUCxDQUFDLENBQU5oUCxDQUFNLENBQU5BO0FBQ0E7O0FBQ0Y7QUFDRSxjQUFJb3VCLEdBQUcsS0FBSEEsUUFBZ0JBLEdBQUcsS0FBdkIsTUFBa0M7QUFDaENBLGVBQUcsR0FBSEE7QUFDQUMsZUFBRyxHQUFIQTtBQUNEOztBQUVEcmMsZ0JBQU0sQ0FBTkEsY0FDRSxRQURGQSxLQUVFLFFBRkZBLEtBR0VoRCxDQUFDLENBSEhnRCxDQUdHLENBSEhBLEVBSUVoRCxDQUFDLENBSkhnRCxDQUlHLENBSkhBLEVBS0VoRCxDQUFDLENBTEhnRCxDQUtHLENBTEhBLEVBTUVoRCxDQUFDLENBTkhnRCxDQU1HLENBTkhBO0FBUUFvYyxhQUFHLEdBQUdwZixDQUFDLENBZFQsQ0FjUyxDQUFQb2YsQ0FkRjs7QUFlRUMsYUFBRyxHQUFHcmYsQ0FBQyxDQUFQcWYsQ0FBTyxDQUFQQTtBQUNBdHVCLFdBQUMsR0FBR2lQLENBQUMsQ0FBTGpQLENBQUssQ0FBTEE7QUFDQUMsV0FBQyxHQUFHZ1AsQ0FBQyxDQUFMaFAsQ0FBSyxDQUFMQTtBQUNBOztBQUNGO0FBQ0UsY0FBSW91QixHQUFHLEtBQUhBLFFBQWdCQSxHQUFHLEtBQXZCLE1BQWtDO0FBQ2hDQSxlQUFHLEdBQUhBO0FBQ0FDLGVBQUcsR0FBSEE7QUFDRDs7QUFFRHJjLGdCQUFNLENBQU5BLGNBQ0UsUUFERkEsS0FFRSxRQUZGQSxLQUdFaEQsQ0FBQyxDQUFEQSxDQUFDLENBQURBLEdBSEZnRCxHQUlFaEQsQ0FBQyxDQUFEQSxDQUFDLENBQURBLEdBSkZnRCxHQUtFaEQsQ0FBQyxDQUFEQSxDQUFDLENBQURBLEdBTEZnRCxHQU1FaEQsQ0FBQyxDQUFEQSxDQUFDLENBQURBLEdBTkZnRDtBQVFBb2MsYUFBRyxHQUFHcGYsQ0FBQyxDQUFEQSxDQUFDLENBQURBLEdBZFIsQ0FjRW9mLENBZEY7O0FBZUVDLGFBQUcsR0FBR3JmLENBQUMsQ0FBREEsQ0FBQyxDQUFEQSxHQUFOcWY7QUFDQXR1QixXQUFDLElBQUlpUCxDQUFDLENBQU5qUCxDQUFNLENBQU5BO0FBQ0FDLFdBQUMsSUFBSWdQLENBQUMsQ0FBTmhQLENBQU0sQ0FBTkE7QUFDQTs7QUFDRjtBQUNFc3VCLGNBQUksR0FBR3RmLENBQUMsQ0FEVixDQUNVLENBQVJzZixDQURGOztBQUVFQyxjQUFJLEdBQUd2ZixDQUFDLENBQVJ1ZixDQUFRLENBQVJBO0FBQ0F4dUIsV0FBQyxHQUFHaVAsQ0FBQyxDQUFMalAsQ0FBSyxDQUFMQTtBQUNBQyxXQUFDLEdBQUdnUCxDQUFDLENBQUxoUCxDQUFLLENBQUxBO0FBQ0FnUyxnQkFBTSxDQUFOQTtBQUNBOztBQUNGO0FBQ0VzYyxjQUFJLEdBQUd0ZixDQUFDLENBQURBLENBQUMsQ0FBREEsR0FEVCxDQUNFc2YsQ0FERjs7QUFFRUMsY0FBSSxHQUFHdmYsQ0FBQyxDQUFEQSxDQUFDLENBQURBLEdBQVB1ZjtBQUNBeHVCLFdBQUMsSUFBSWlQLENBQUMsQ0FBTmpQLENBQU0sQ0FBTkE7QUFDQUMsV0FBQyxJQUFJZ1AsQ0FBQyxDQUFOaFAsQ0FBTSxDQUFOQTtBQUNBZ1MsZ0JBQU0sQ0FBTkE7QUFDQTs7QUFDRjtBQUNFLGNBQUlzYyxJQUFJLEtBQUpBLFFBQWlCQSxJQUFJLEtBQXpCLE1BQW9DO0FBQ2xDQSxnQkFBSSxHQUFKQTtBQUNBQyxnQkFBSSxHQUFKQTtBQUNEOztBQUNERCxjQUFJLEdBQUcsUUFMVCxJQUtFQSxDQUxGOztBQU1FQyxjQUFJLEdBQUcsUUFBUEE7QUFDQXh1QixXQUFDLEdBQUdpUCxDQUFDLENBQUxqUCxDQUFLLENBQUxBO0FBQ0FDLFdBQUMsR0FBR2dQLENBQUMsQ0FBTGhQLENBQUssQ0FBTEE7QUFDQWdTLGdCQUFNLENBQU5BO0FBQ0E7O0FBQ0Y7QUFDRSxjQUFJc2MsSUFBSSxLQUFKQSxRQUFpQkEsSUFBSSxLQUF6QixNQUFvQztBQUNsQ0EsZ0JBQUksR0FBSkE7QUFDQUMsZ0JBQUksR0FBSkE7QUFDRDs7QUFDREQsY0FBSSxHQUFHLFFBTFQsSUFLRUEsQ0FMRjs7QUFNRUMsY0FBSSxHQUFHLFFBQVBBO0FBQ0F4dUIsV0FBQyxJQUFJaVAsQ0FBQyxDQUFOalAsQ0FBTSxDQUFOQTtBQUNBQyxXQUFDLElBQUlnUCxDQUFDLENBQU5oUCxDQUFNLENBQU5BO0FBQ0FnUyxnQkFBTSxDQUFOQTtBQUNBOztBQUNGO0FBQ0E7QUFDRWpTLFdBQUMsR0FBR2l1QixVQUFVLENBQWRqdUI7QUFDQUMsV0FBQyxHQUFHZ3VCLFVBQVUsQ0FBZGh1QjtBQUNBZ3VCLG9CQUFVLEdBQVZBO0FBQ0FoYyxnQkFBTSxDQUFOQTtBQUNBOztBQUNGOztBQUNFalMsV0FBQyxHQUFHaVAsQ0FBQyxDQUFMalAsQ0FBSyxDQUFMQTtBQUNBQyxXQUFDLEdBQUdnUCxDQUFDLENBQUxoUCxDQUFLLENBQUxBO0FBQ0F5TyxXQUFDLEdBQUdPLENBQUMsQ0FBTFAsQ0FBSyxDQUFMQTtBQUNBNGdCLG9CQUFVLEdBQUdyZ0IsQ0FBQyxDQUFkcWdCLENBQWMsQ0FBZEE7QUFDQUMsa0JBQVEsR0FBR3RnQixDQUFDLENBQVpzZ0IsQ0FBWSxDQUFaQTtBQUNBRSxhQUFHLEdBQUd4Z0IsQ0FBQyxDQUFQd2dCLENBQU8sQ0FBUEE7QUFDQXhkLGdCQUFNLENBQU5BO0FBQ0E7O0FBQ0Y7O0FBQ0VsRixZQUFFLEdBQUdrQyxDQUFDLENBQU5sQyxDQUFNLENBQU5BO0FBQ0FDLFlBQUUsR0FBR2lDLENBQUMsQ0FBTmpDLENBQU0sQ0FBTkE7QUFDQWhOLFdBQUMsR0FBR2lQLENBQUMsQ0FBTGpQLENBQUssQ0FBTEE7QUFDQUMsV0FBQyxHQUFHZ1AsQ0FBQyxDQUFMaFAsQ0FBSyxDQUFMQTtBQUNBeU8sV0FBQyxHQUFHTyxDQUFDLENBQUxQLENBQUssQ0FBTEE7QUFDQXVELGdCQUFNLENBQU5BO0FBQ0E7O0FBQ0Y7O0FBQ0VqUyxXQUFDLEdBQUdpUCxDQUFDLENBQUxqUCxDQUFLLENBQUxBO0FBQ0FDLFdBQUMsR0FBR2dQLENBQUMsQ0FBTGhQLENBQUssQ0FBTEE7QUFDQXd1QixZQUFFLEdBQUd4ZixDQUFDLENBQU53ZixDQUFNLENBQU5BO0FBQ0FDLFlBQUUsR0FBR3pmLENBQUMsQ0FBTnlmLENBQU0sQ0FBTkE7QUFDQUMsZUFBSyxHQUFHMWYsQ0FBQyxDQUFUMGYsQ0FBUyxDQUFUQTtBQUNBVyxvQkFBVSxHQUFHcmdCLENBQUMsQ0FBZHFnQixDQUFjLENBQWRBO0FBQ0FDLGtCQUFRLEdBQUd0Z0IsQ0FBQyxDQUFac2dCLENBQVksQ0FBWkE7QUFDQUUsYUFBRyxHQUFHeGdCLENBQUMsQ0FBUHdnQixDQUFPLENBQVBBO0FBQ0F4ZCxnQkFBTSxDQUFOQTtBQUNBQSxnQkFBTSxDQUFOQTtBQUNBQSxnQkFBTSxDQUFOQTtBQUNBQSxnQkFBTSxDQUFOQTtBQUNBQSxnQkFBTSxDQUFOQTtBQUNBQSxnQkFBTSxDQUFOQTtBQUNBOztBQUNGOztBQUNFalMsV0FBQyxHQUFHaVAsQ0FBQyxDQUFMalAsQ0FBSyxDQUFMQTtBQUNBQyxXQUFDLEdBQUdnUCxDQUFDLENBQUxoUCxDQUFLLENBQUxBO0FBQ0EwVyxXQUFDLEdBQUcxSCxDQUFDLENBQUwwSCxDQUFLLENBQUxBO0FBQ0EzSCxXQUFDLEdBQUdDLENBQUMsQ0FBTEQsQ0FBSyxDQUFMQTtBQUNBaWYsb0JBQVUsR0FBRztBQUFFanVCLGFBQUMsRUFBSDtBQUFLQyxhQUFDLEVBQURBO0FBQUwsV0FBYmd1QjtBQUNBaGMsZ0JBQU0sQ0FBTkE7QUFDQTtBQWpRSjs7QUFzUUFpYyxrQkFBWSxDQUFaQTtBQUNBQSxrQkFBWSxDQUFaQTtBQUNEO0FBQ0Y7O0FBRUQsTUFBTXdCLEtBQUssR0FBR2xxQixNQUFNLENBQU5BLG1DQUFkO0FBQ0EsTUFBTW1xQixPQUFPLEdBQUducUIsTUFBTSxDQUFOQSxtQ0FBaEI7O0FBRUFBLFFBQU0sQ0FBTkEsMENBQWlELGdCQUF1QjtBQUFBLHNDQUFOK0UsSUFBTTtBQUFOQSxVQUFNLE1BQU5BLEdBQU0sZUFBTkE7QUFBTTs7QUFDdEUsUUFBSXFsQixRQUFRLEdBQVo7O0FBQ0EsUUFDRXJsQixJQUFJLENBQUpBLGdCQUNDQSxJQUFJLENBQUpBLGdCQUFxQixPQUFPQSxJQUFJLENBQVgsQ0FBVyxDQUFYLEtBRnhCLFVBR0U7QUFDQW1sQixXQUFLLENBQUxBO0FBQ0E7QUFDRDs7QUFDRCxRQUFJbGxCLFNBQVMsQ0FBVEEsV0FBSixHQUE0QjtBQUMxQm9sQixjQUFRLEdBQUdybEIsSUFBSSxDQUFmcWxCLENBQWUsQ0FBZkE7QUFDRDs7QUFDRCxRQUFNblMsSUFBSSxHQUFHbFQsSUFBSSxDQUFqQixDQUFpQixDQUFqQjtBQUNBc2xCLGFBQVMsT0FBT3BTLElBQUksQ0FBcEJvUyxRQUFTLENBQVRBO0FBQ0FILFNBQUssQ0FBTEE7QUFkRmxxQjs7QUFpQkFBLFFBQU0sQ0FBTkEsNENBQW1ELHNCQUFzQjtBQUN2RSxRQUFJLENBQUosTUFBVztBQUNUbXFCLGFBQU8sQ0FBUEE7QUFDQTtBQUNEOztBQUNERSxhQUFTLE9BQU9wUyxJQUFJLENBQXBCb1MsUUFBUyxDQUFUQTtBQUNBRixXQUFPLENBQVBBO0FBTkZucUI7O0FBU0EsTUFBTXNxQixjQUFjLEdBQ2xCdHFCLE1BQU0sQ0FBTkEsbUNBREY7O0FBR0FBLFFBQU0sQ0FBTkEsbURBQTBELHlCQUV4RDtBQUFBLHVDQURHK0UsSUFDSDtBQURHQSxVQUNILE9BREdBLEdBQ0gsZ0JBREdBO0FBQ0gsTTs7O0FBRUEsUUFBSUEsSUFBSSxDQUFKQSxDQUFJLENBQUpBLHNCQUFKLFVBQTJDOztBQUV6QyxVQUFNdkssQ0FBQyxHQUFHdUssSUFBSSxDQUFkLENBQWMsQ0FBZDtBQUNBLFVBQU10SyxDQUFDLEdBQUdzSyxJQUFJLENBQWQsQ0FBYyxDQUFkO0FBQ0EsVUFBTXFsQixRQUFRLEdBQUdybEIsSUFBSSxDQUFKQSxDQUFJLENBQUpBLElBQWpCO0FBQ0EsVUFBTWtULElBQUksR0FBR2xULElBQUksQ0FBakIsQ0FBaUIsQ0FBakI7QUFDQXNsQixlQUFTLE9BQU9wUyxJQUFJLENBQXBCb1MsUUFBUyxDQUFUQTtBQUNBLGFBQU9DLGNBQWMsQ0FBZEEsWUFBMkIsT0FBbEMsUUFBa0MsQ0FBM0JBLENBQVA7QUFQRixXQVFPO0FBQ0wsYUFBT0EsY0FBYyxDQUFkQSxZQUFQLElBQU9BLENBQVA7QUFDRDtBQWRIdHFCOztBQWlCQUEsUUFBTSxDQUFOQTtBQUNEOztBQUVELGtCQUFjLEdBQWQ7O0FDemRBLElBQUksa0JBQUosYUFBbUM7QUFDakN1cUIsZ0JBQWMsQ0FBZEEsTUFBYyxDQUFkQTtBQUNEOztPQUVhLEdBQUc7QUFDZkEsZ0JBQWMsRUFEQztBQUVmL0IsV0FBUyxFQUFUQTtBQUZlLEM7Ozs7Ozs7Ozs7OztBQ1BKOzs7O0FBQ2IxcEIsOENBQTZDO0FBQUVzZ0IsT0FBSyxFQUFFO0FBQVQsQ0FBN0M7QUFDQTlRLFVBQUEsR0FBYUEsY0FBQSxHQUFpQkEsZUFBQSxHQUFrQkEsZ0JBQUEsR0FBbUIsS0FBSyxDQUF4RTs7QUFDQSxJQUFNa2MsS0FBSyxHQUFHL2xCLG1CQUFPLENBQUMsMkRBQUQsQ0FBckI7O0FBQ0EsSUFBTWdtQixTQUFTLEdBQUdobUIsbUJBQU8sQ0FBQyxtRUFBRCxDQUF6Qjs7QUFDQSxJQUFNb1AsS0FBSyxHQUFHcFAsbUJBQU8sQ0FBQyxrREFBRCxDQUFQLENBQWlCLGtCQUFqQixDQUFkO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTRKLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQkEsT0FBTyxHQUFHb2MsTUFBM0I7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUMsS0FBSyxHQUFJcmMsZ0JBQUEsR0FBbUIsRUFBbEM7O0FBQ0EsU0FBU29jLE1BQVQsQ0FBZ0J2VCxHQUFoQixFQUFxQjNJLElBQXJCLEVBQTJCO0FBQ3ZCLE1BQUksUUFBTzJJLEdBQVAsTUFBZSxRQUFuQixFQUE2QjtBQUN6QjNJLFFBQUksR0FBRzJJLEdBQVA7QUFDQUEsT0FBRyxHQUFHL1YsU0FBTjtBQUNIOztBQUNEb04sTUFBSSxHQUFHQSxJQUFJLElBQUksRUFBZjtBQUNBLE1BQU1vYyxNQUFNLEdBQUdKLEtBQUssQ0FBQ0ssR0FBTixDQUFVMVQsR0FBVixFQUFlM0ksSUFBSSxDQUFDeUosSUFBTCxJQUFhLFlBQTVCLENBQWY7QUFDQSxNQUFNaVAsTUFBTSxHQUFHMEQsTUFBTSxDQUFDMUQsTUFBdEI7QUFDQSxNQUFNcE8sRUFBRSxHQUFHOFIsTUFBTSxDQUFDOVIsRUFBbEI7QUFDQSxNQUFNYixJQUFJLEdBQUcyUyxNQUFNLENBQUMzUyxJQUFwQjtBQUNBLE1BQU02UyxhQUFhLEdBQUdILEtBQUssQ0FBQzdSLEVBQUQsQ0FBTCxJQUFhYixJQUFJLElBQUkwUyxLQUFLLENBQUM3UixFQUFELENBQUwsQ0FBVSxNQUFWLENBQTNDO0FBQ0EsTUFBTWlTLGFBQWEsR0FBR3ZjLElBQUksQ0FBQ3djLFFBQUwsSUFDbEJ4YyxJQUFJLENBQUMsc0JBQUQsQ0FEYyxJQUVsQixVQUFVQSxJQUFJLENBQUN5YyxTQUZHLElBR2xCSCxhQUhKO0FBSUEsTUFBSUksRUFBSjs7QUFDQSxNQUFJSCxhQUFKLEVBQW1CO0FBQ2ZsWCxTQUFLLENBQUMsOEJBQUQsRUFBaUNxVCxNQUFqQyxDQUFMO0FBQ0FnRSxNQUFFLEdBQUcsSUFBSVQsU0FBUyxDQUFDVSxPQUFkLENBQXNCakUsTUFBdEIsRUFBOEIxWSxJQUE5QixDQUFMO0FBQ0gsR0FIRCxNQUlLO0FBQ0QsUUFBSSxDQUFDbWMsS0FBSyxDQUFDN1IsRUFBRCxDQUFWLEVBQWdCO0FBQ1pqRixXQUFLLENBQUMsd0JBQUQsRUFBMkJxVCxNQUEzQixDQUFMO0FBQ0F5RCxXQUFLLENBQUM3UixFQUFELENBQUwsR0FBWSxJQUFJMlIsU0FBUyxDQUFDVSxPQUFkLENBQXNCakUsTUFBdEIsRUFBOEIxWSxJQUE5QixDQUFaO0FBQ0g7O0FBQ0QwYyxNQUFFLEdBQUdQLEtBQUssQ0FBQzdSLEVBQUQsQ0FBVjtBQUNIOztBQUNELE1BQUk4UixNQUFNLENBQUMvUyxLQUFQLElBQWdCLENBQUNySixJQUFJLENBQUNxSixLQUExQixFQUFpQztBQUM3QnJKLFFBQUksQ0FBQ3FKLEtBQUwsR0FBYStTLE1BQU0sQ0FBQ3RELFFBQXBCO0FBQ0g7O0FBQ0QsU0FBTzRELEVBQUUsQ0FBQ3ZSLE1BQUgsQ0FBVWlSLE1BQU0sQ0FBQzNTLElBQWpCLEVBQXVCekosSUFBdkIsQ0FBUDtBQUNIOztBQUNERixVQUFBLEdBQWFvYyxNQUFiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFJVSxrQkFBa0IsR0FBRzNtQixtQkFBTyxDQUFDLHVFQUFELENBQWhDOztBQUNBM0YsNENBQTJDO0FBQUV3WCxZQUFVLEVBQUUsSUFBZDtBQUFvQkUsS0FBRyxFQUFFLGVBQVk7QUFBRSxXQUFPNFUsa0JBQWtCLENBQUNoVSxRQUExQjtBQUFxQztBQUE1RSxDQUEzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTlJLGVBQUEsR0FBa0JvYyxNQUFsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBSVcsU0FBUyxHQUFHNW1CLG1CQUFPLENBQUMsbUVBQUQsQ0FBdkI7O0FBQ0EzRiwyQ0FBMEM7QUFBRXdYLFlBQVUsRUFBRSxJQUFkO0FBQW9CRSxLQUFHLEVBQUUsZUFBWTtBQUFFLFdBQU82VSxTQUFTLENBQUNGLE9BQWpCO0FBQTJCO0FBQWxFLENBQTFDOztBQUNBLElBQUlHLFFBQVEsR0FBRzdtQixtQkFBTyxDQUFDLGlFQUFELENBQXRCOztBQUNBM0YsMENBQXlDO0FBQUV3WCxZQUFVLEVBQUUsSUFBZDtBQUFvQkUsS0FBRyxFQUFFLGVBQVk7QUFBRSxXQUFPOFUsUUFBUSxDQUFDcFUsTUFBaEI7QUFBeUI7QUFBaEUsQ0FBekM7QUFDQTVJLGVBQUEsR0FBa0JvYyxNQUFsQixDOzs7Ozs7Ozs7OztBQ3RFYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ2I1ckIsOENBQTZDO0FBQUVzZ0IsT0FBSyxFQUFFO0FBQVQsQ0FBN0M7QUFDQTlRLGVBQUEsR0FBa0IsS0FBSyxDQUF2Qjs7QUFDQSxJQUFNaWQsR0FBRyxHQUFHOW1CLG1CQUFPLENBQUMsc0VBQUQsQ0FBbkI7O0FBQ0EsSUFBTTZtQixRQUFRLEdBQUc3bUIsbUJBQU8sQ0FBQyxpRUFBRCxDQUF4Qjs7QUFDQSxJQUFNNlMsTUFBTSxHQUFHN1MsbUJBQU8sQ0FBQyx1RUFBRCxDQUF0Qjs7QUFDQSxJQUFNK21CLElBQUksR0FBRy9tQixtQkFBTyxDQUFDLHlEQUFELENBQXBCOztBQUNBLElBQU04SixPQUFPLEdBQUc5SixtQkFBTyxDQUFDLDhDQUFELENBQXZCOztBQUNBLElBQU1nbkIsY0FBYyxHQUFHaG5CLG1CQUFPLENBQUMsNkVBQUQsQ0FBOUI7O0FBQ0EsSUFBTW9QLEtBQUssR0FBR3BQLG1CQUFPLENBQUMsa0RBQUQsQ0FBUCxDQUFpQiwwQkFBakIsQ0FBZDs7SUFDTTBtQixPOzs7OztBQUNGLG1CQUFZaFUsR0FBWixFQUFpQjNJLElBQWpCLEVBQXVCO0FBQUE7O0FBQUE7O0FBQ25CO0FBQ0EsVUFBS2tkLElBQUwsR0FBWSxFQUFaO0FBQ0EsVUFBS0MsSUFBTCxHQUFZLEVBQVo7O0FBQ0EsUUFBSXhVLEdBQUcsSUFBSSxxQkFBb0JBLEdBQXBCLENBQVgsRUFBb0M7QUFDaEMzSSxVQUFJLEdBQUcySSxHQUFQO0FBQ0FBLFNBQUcsR0FBRy9WLFNBQU47QUFDSDs7QUFDRG9OLFFBQUksR0FBR0EsSUFBSSxJQUFJLEVBQWY7QUFDQUEsUUFBSSxDQUFDeUosSUFBTCxHQUFZekosSUFBSSxDQUFDeUosSUFBTCxJQUFhLFlBQXpCO0FBQ0EsVUFBS3pKLElBQUwsR0FBWUEsSUFBWjs7QUFDQSxVQUFLb2QsWUFBTCxDQUFrQnBkLElBQUksQ0FBQ29kLFlBQUwsS0FBc0IsS0FBeEM7O0FBQ0EsVUFBS0Msb0JBQUwsQ0FBMEJyZCxJQUFJLENBQUNxZCxvQkFBTCxJQUE2QkMsUUFBdkQ7O0FBQ0EsVUFBS0MsaUJBQUwsQ0FBdUJ2ZCxJQUFJLENBQUN1ZCxpQkFBTCxJQUEwQixJQUFqRDs7QUFDQSxVQUFLQyxvQkFBTCxDQUEwQnhkLElBQUksQ0FBQ3dkLG9CQUFMLElBQTZCLElBQXZEOztBQUNBLFVBQUtDLG1CQUFMLENBQXlCemQsSUFBSSxDQUFDeWQsbUJBQUwsSUFBNEIsR0FBckQ7O0FBQ0EsVUFBS0MsT0FBTCxHQUFlLElBQUkzZCxPQUFKLENBQVk7QUFDdkJ2SCxTQUFHLEVBQUUsTUFBSytrQixpQkFBTCxFQURrQjtBQUV2QjlrQixTQUFHLEVBQUUsTUFBSytrQixvQkFBTCxFQUZrQjtBQUd2QnJkLFlBQU0sRUFBRSxNQUFLc2QsbUJBQUw7QUFIZSxLQUFaLENBQWY7O0FBS0EsVUFBS3h3QixPQUFMLENBQWEsUUFBUStTLElBQUksQ0FBQy9TLE9BQWIsR0FBdUIsS0FBdkIsR0FBK0IrUyxJQUFJLENBQUMvUyxPQUFqRDs7QUFDQSxVQUFLMHdCLFdBQUwsR0FBbUIsUUFBbkI7QUFDQSxVQUFLaFYsR0FBTCxHQUFXQSxHQUFYOztBQUNBLFFBQU1pVixPQUFPLEdBQUc1ZCxJQUFJLENBQUM4SSxNQUFMLElBQWVBLE1BQS9COztBQUNBLFVBQUsrVSxPQUFMLEdBQWUsSUFBSUQsT0FBTyxDQUFDRSxPQUFaLEVBQWY7QUFDQSxVQUFLQyxPQUFMLEdBQWUsSUFBSUgsT0FBTyxDQUFDSSxPQUFaLEVBQWY7QUFDQSxVQUFLQyxZQUFMLEdBQW9CamUsSUFBSSxDQUFDa2UsV0FBTCxLQUFxQixLQUF6QztBQUNBLFFBQUksTUFBS0QsWUFBVCxFQUNJLE1BQUtsVCxJQUFMO0FBN0JlO0FBOEJ0Qjs7OztXQUNELHNCQUFhL0UsQ0FBYixFQUFnQjtBQUNaLFVBQUksQ0FBQ3hQLFNBQVMsQ0FBQ3RHLE1BQWYsRUFDSSxPQUFPLEtBQUtpdUIsYUFBWjtBQUNKLFdBQUtBLGFBQUwsR0FBcUIsQ0FBQyxDQUFDblksQ0FBdkI7QUFDQSxhQUFPLElBQVA7QUFDSDs7O1dBQ0QsOEJBQXFCQSxDQUFyQixFQUF3QjtBQUNwQixVQUFJQSxDQUFDLEtBQUtwVCxTQUFWLEVBQ0ksT0FBTyxLQUFLd3JCLHFCQUFaO0FBQ0osV0FBS0EscUJBQUwsR0FBNkJwWSxDQUE3QjtBQUNBLGFBQU8sSUFBUDtBQUNIOzs7V0FDRCwyQkFBa0JBLENBQWxCLEVBQXFCO0FBQ2pCLFVBQUlxWSxFQUFKOztBQUNBLFVBQUlyWSxDQUFDLEtBQUtwVCxTQUFWLEVBQ0ksT0FBTyxLQUFLMHJCLGtCQUFaO0FBQ0osV0FBS0Esa0JBQUwsR0FBMEJ0WSxDQUExQjtBQUNBLE9BQUNxWSxFQUFFLEdBQUcsS0FBS1gsT0FBWCxNQUF3QixJQUF4QixJQUFnQ1csRUFBRSxLQUFLLEtBQUssQ0FBNUMsR0FBZ0QsS0FBSyxDQUFyRCxHQUF5REEsRUFBRSxDQUFDM2QsTUFBSCxDQUFVc0YsQ0FBVixDQUF6RDtBQUNBLGFBQU8sSUFBUDtBQUNIOzs7V0FDRCw2QkFBb0JBLENBQXBCLEVBQXVCO0FBQ25CLFVBQUlxWSxFQUFKOztBQUNBLFVBQUlyWSxDQUFDLEtBQUtwVCxTQUFWLEVBQ0ksT0FBTyxLQUFLMnJCLG9CQUFaO0FBQ0osV0FBS0Esb0JBQUwsR0FBNEJ2WSxDQUE1QjtBQUNBLE9BQUNxWSxFQUFFLEdBQUcsS0FBS1gsT0FBWCxNQUF3QixJQUF4QixJQUFnQ1csRUFBRSxLQUFLLEtBQUssQ0FBNUMsR0FBZ0QsS0FBSyxDQUFyRCxHQUF5REEsRUFBRSxDQUFDemQsU0FBSCxDQUFhb0YsQ0FBYixDQUF6RDtBQUNBLGFBQU8sSUFBUDtBQUNIOzs7V0FDRCw4QkFBcUJBLENBQXJCLEVBQXdCO0FBQ3BCLFVBQUlxWSxFQUFKOztBQUNBLFVBQUlyWSxDQUFDLEtBQUtwVCxTQUFWLEVBQ0ksT0FBTyxLQUFLNHJCLHFCQUFaO0FBQ0osV0FBS0EscUJBQUwsR0FBNkJ4WSxDQUE3QjtBQUNBLE9BQUNxWSxFQUFFLEdBQUcsS0FBS1gsT0FBWCxNQUF3QixJQUF4QixJQUFnQ1csRUFBRSxLQUFLLEtBQUssQ0FBNUMsR0FBZ0QsS0FBSyxDQUFyRCxHQUF5REEsRUFBRSxDQUFDMWQsTUFBSCxDQUFVcUYsQ0FBVixDQUF6RDtBQUNBLGFBQU8sSUFBUDtBQUNIOzs7V0FDRCxpQkFBUUEsQ0FBUixFQUFXO0FBQ1AsVUFBSSxDQUFDeFAsU0FBUyxDQUFDdEcsTUFBZixFQUNJLE9BQU8sS0FBS3V1QixRQUFaO0FBQ0osV0FBS0EsUUFBTCxHQUFnQnpZLENBQWhCO0FBQ0EsYUFBTyxJQUFQO0FBQ0g7QUFDRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7V0FDSSxnQ0FBdUI7QUFDbkI7QUFDQSxVQUFJLENBQUMsS0FBSzBZLGFBQU4sSUFDQSxLQUFLUCxhQURMLElBRUEsS0FBS1QsT0FBTCxDQUFhdGQsUUFBYixLQUEwQixDQUY5QixFQUVpQztBQUM3QjtBQUNBLGFBQUt1ZSxTQUFMO0FBQ0g7QUFDSjtBQUNEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O1dBQ0ksY0FBSzdjLEVBQUwsRUFBUztBQUFBOztBQUNMdUQsV0FBSyxDQUFDLGVBQUQsRUFBa0IsS0FBS3NZLFdBQXZCLENBQUw7QUFDQSxVQUFJLENBQUMsS0FBS0EsV0FBTCxDQUFpQnptQixPQUFqQixDQUF5QixNQUF6QixDQUFMLEVBQ0ksT0FBTyxJQUFQO0FBQ0ptTyxXQUFLLENBQUMsWUFBRCxFQUFlLEtBQUtzRCxHQUFwQixDQUFMO0FBQ0EsV0FBS2lXLE1BQUwsR0FBYzdCLEdBQUcsQ0FBQyxLQUFLcFUsR0FBTixFQUFXLEtBQUszSSxJQUFoQixDQUFqQjtBQUNBLFVBQU1tTCxNQUFNLEdBQUcsS0FBS3lULE1BQXBCO0FBQ0EsVUFBTXhYLElBQUksR0FBRyxJQUFiO0FBQ0EsV0FBS3VXLFdBQUwsR0FBbUIsU0FBbkI7QUFDQSxXQUFLa0IsYUFBTCxHQUFxQixLQUFyQixDQVRLLENBVUw7O0FBQ0EsVUFBTUMsY0FBYyxHQUFHOUIsSUFBSSxDQUFDcGIsRUFBTCxDQUFRdUosTUFBUixFQUFnQixNQUFoQixFQUF3QixZQUFZO0FBQ3ZEL0QsWUFBSSxDQUFDa04sTUFBTDtBQUNBeFMsVUFBRSxJQUFJQSxFQUFFLEVBQVI7QUFDSCxPQUhzQixDQUF2QixDQVhLLENBZUw7O0FBQ0EsVUFBTWlkLFFBQVEsR0FBRy9CLElBQUksQ0FBQ3BiLEVBQUwsQ0FBUXVKLE1BQVIsRUFBZ0IsT0FBaEIsRUFBeUIsVUFBQ2tCLEdBQUQsRUFBUztBQUMvQ2hILGFBQUssQ0FBQyxPQUFELENBQUw7QUFDQStCLFlBQUksQ0FBQytFLE9BQUw7QUFDQS9FLFlBQUksQ0FBQ3VXLFdBQUwsR0FBbUIsUUFBbkI7O0FBQ0EsY0FBSSxDQUFDcUIsWUFBTCxDQUFrQixPQUFsQixFQUEyQjNTLEdBQTNCOztBQUNBLFlBQUl2SyxFQUFKLEVBQVE7QUFDSkEsWUFBRSxDQUFDdUssR0FBRCxDQUFGO0FBQ0gsU0FGRCxNQUdLO0FBQ0Q7QUFDQWpGLGNBQUksQ0FBQzZYLG9CQUFMO0FBQ0g7QUFDSixPQVpnQixDQUFqQjs7QUFhQSxVQUFJLFVBQVUsS0FBS1IsUUFBbkIsRUFBNkI7QUFDekIsWUFBTXh4QixPQUFPLEdBQUcsS0FBS3d4QixRQUFyQjtBQUNBcFosYUFBSyxDQUFDLHVDQUFELEVBQTBDcFksT0FBMUMsQ0FBTDs7QUFDQSxZQUFJQSxPQUFPLEtBQUssQ0FBaEIsRUFBbUI7QUFDZjZ4Qix3QkFBYyxHQURDLENBQ0c7QUFDckIsU0FMd0IsQ0FNekI7OztBQUNBLFlBQU16b0IsS0FBSyxHQUFHbkosVUFBVSxDQUFDLFlBQU07QUFDM0JtWSxlQUFLLENBQUMsb0NBQUQsRUFBdUNwWSxPQUF2QyxDQUFMO0FBQ0E2eEIsd0JBQWM7QUFDZDNULGdCQUFNLENBQUNQLEtBQVA7QUFDQU8sZ0JBQU0sQ0FBQzVXLElBQVAsQ0FBWSxPQUFaLEVBQXFCLElBQUkyTyxLQUFKLENBQVUsU0FBVixDQUFyQjtBQUNILFNBTHVCLEVBS3JCalcsT0FMcUIsQ0FBeEI7O0FBTUEsWUFBSSxLQUFLK1MsSUFBTCxDQUFVbU4sU0FBZCxFQUF5QjtBQUNyQjlXLGVBQUssQ0FBQytXLEtBQU47QUFDSDs7QUFDRCxhQUFLK1AsSUFBTCxDQUFVaG9CLElBQVYsQ0FBZSxTQUFTK3BCLFVBQVQsR0FBc0I7QUFDakM5eEIsc0JBQVksQ0FBQ2lKLEtBQUQsQ0FBWjtBQUNILFNBRkQ7QUFHSDs7QUFDRCxXQUFLOG1CLElBQUwsQ0FBVWhvQixJQUFWLENBQWUycEIsY0FBZjtBQUNBLFdBQUszQixJQUFMLENBQVVob0IsSUFBVixDQUFlNHBCLFFBQWY7QUFDQSxhQUFPLElBQVA7QUFDSDtBQUNEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztXQUNJLGlCQUFRamQsRUFBUixFQUFZO0FBQ1IsYUFBTyxLQUFLaUosSUFBTCxDQUFVakosRUFBVixDQUFQO0FBQ0g7QUFDRDtBQUNKO0FBQ0E7QUFDQTtBQUNBOzs7O1dBQ0ksa0JBQVM7QUFDTHVELFdBQUssQ0FBQyxNQUFELENBQUwsQ0FESyxDQUVMOztBQUNBLFdBQUs4RyxPQUFMLEdBSEssQ0FJTDs7QUFDQSxXQUFLd1IsV0FBTCxHQUFtQixNQUFuQjtBQUNBLFdBQUtxQixZQUFMLENBQWtCLE1BQWxCLEVBTkssQ0FPTDs7QUFDQSxVQUFNN1QsTUFBTSxHQUFHLEtBQUt5VCxNQUFwQjtBQUNBLFdBQUt6QixJQUFMLENBQVVob0IsSUFBVixDQUFlNm5CLElBQUksQ0FBQ3BiLEVBQUwsQ0FBUXVKLE1BQVIsRUFBZ0IsTUFBaEIsRUFBd0IsS0FBS2dVLE1BQUwsQ0FBWXRnQixJQUFaLENBQWlCLElBQWpCLENBQXhCLENBQWYsRUFBZ0VtZSxJQUFJLENBQUNwYixFQUFMLENBQVF1SixNQUFSLEVBQWdCLE1BQWhCLEVBQXdCLEtBQUtpVSxNQUFMLENBQVl2Z0IsSUFBWixDQUFpQixJQUFqQixDQUF4QixDQUFoRSxFQUFpSG1lLElBQUksQ0FBQ3BiLEVBQUwsQ0FBUXVKLE1BQVIsRUFBZ0IsT0FBaEIsRUFBeUIsS0FBS29CLE9BQUwsQ0FBYTFOLElBQWIsQ0FBa0IsSUFBbEIsQ0FBekIsQ0FBakgsRUFBb0ttZSxJQUFJLENBQUNwYixFQUFMLENBQVF1SixNQUFSLEVBQWdCLE9BQWhCLEVBQXlCLEtBQUtzQixPQUFMLENBQWE1TixJQUFiLENBQWtCLElBQWxCLENBQXpCLENBQXBLLEVBQXVObWUsSUFBSSxDQUFDcGIsRUFBTCxDQUFRLEtBQUttYyxPQUFiLEVBQXNCLFNBQXRCLEVBQWlDLEtBQUtzQixTQUFMLENBQWV4Z0IsSUFBZixDQUFvQixJQUFwQixDQUFqQyxDQUF2TjtBQUNIO0FBQ0Q7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7OztXQUNJLGtCQUFTO0FBQ0wsV0FBS21nQixZQUFMLENBQWtCLE1BQWxCO0FBQ0g7QUFDRDtBQUNKO0FBQ0E7QUFDQTtBQUNBOzs7O1dBQ0ksZ0JBQU9qVCxJQUFQLEVBQWE7QUFDVCxXQUFLZ1MsT0FBTCxDQUFhdUIsR0FBYixDQUFpQnZULElBQWpCO0FBQ0g7QUFDRDtBQUNKO0FBQ0E7QUFDQTtBQUNBOzs7O1dBQ0ksbUJBQVVhLE1BQVYsRUFBa0I7QUFDZCxXQUFLb1MsWUFBTCxDQUFrQixRQUFsQixFQUE0QnBTLE1BQTVCO0FBQ0g7QUFDRDtBQUNKO0FBQ0E7QUFDQTtBQUNBOzs7O1dBQ0ksaUJBQVFQLEdBQVIsRUFBYTtBQUNUaEgsV0FBSyxDQUFDLE9BQUQsRUFBVWdILEdBQVYsQ0FBTDtBQUNBLFdBQUsyUyxZQUFMLENBQWtCLE9BQWxCLEVBQTJCM1MsR0FBM0I7QUFDSDtBQUNEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztXQUNJLGdCQUFPa1QsR0FBUCxFQUFZdmYsSUFBWixFQUFrQjtBQUNkLFVBQUltTCxNQUFNLEdBQUcsS0FBSytSLElBQUwsQ0FBVXFDLEdBQVYsQ0FBYjs7QUFDQSxVQUFJLENBQUNwVSxNQUFMLEVBQWE7QUFDVEEsY0FBTSxHQUFHLElBQUkyUixRQUFRLENBQUNwVSxNQUFiLENBQW9CLElBQXBCLEVBQTBCNlcsR0FBMUIsRUFBK0J2ZixJQUEvQixDQUFUO0FBQ0EsYUFBS2tkLElBQUwsQ0FBVXFDLEdBQVYsSUFBaUJwVSxNQUFqQjtBQUNIOztBQUNELGFBQU9BLE1BQVA7QUFDSDtBQUNEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztXQUNJLGtCQUFTQSxNQUFULEVBQWlCO0FBQ2IsVUFBTStSLElBQUksR0FBRzVzQixNQUFNLENBQUNvVyxJQUFQLENBQVksS0FBS3dXLElBQWpCLENBQWI7O0FBQ0EsK0JBQWtCQSxJQUFsQiwyQkFBd0I7QUFBbkIsWUFBTXFDLEdBQUcsWUFBVDtBQUNELFlBQU1wVSxPQUFNLEdBQUcsS0FBSytSLElBQUwsQ0FBVXFDLEdBQVYsQ0FBZjs7QUFDQSxZQUFJcFUsT0FBTSxDQUFDcVUsTUFBWCxFQUFtQjtBQUNmbmEsZUFBSyxDQUFDLDJDQUFELEVBQThDa2EsR0FBOUMsQ0FBTDtBQUNBO0FBQ0g7QUFDSjs7QUFDRCxXQUFLRSxNQUFMO0FBQ0g7QUFDRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7V0FDSSxpQkFBUTdTLE1BQVIsRUFBZ0I7QUFDWnZILFdBQUssQ0FBQyxtQkFBRCxFQUFzQnVILE1BQXRCLENBQUw7QUFDQSxVQUFNK0osY0FBYyxHQUFHLEtBQUtrSCxPQUFMLENBQWFySyxNQUFiLENBQW9CNUcsTUFBcEIsQ0FBdkI7O0FBQ0EsV0FBSyxJQUFJdFgsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR3FoQixjQUFjLENBQUN6bUIsTUFBbkMsRUFBMkNvRixDQUFDLEVBQTVDLEVBQWdEO0FBQzVDLGFBQUtzcEIsTUFBTCxDQUFZMVEsS0FBWixDQUFrQnlJLGNBQWMsQ0FBQ3JoQixDQUFELENBQWhDLEVBQXFDc1gsTUFBTSxDQUFDaEssT0FBNUM7QUFDSDtBQUNKO0FBQ0Q7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7OztXQUNJLG1CQUFVO0FBQ055QyxXQUFLLENBQUMsU0FBRCxDQUFMO0FBQ0EsV0FBSzhYLElBQUwsQ0FBVXhXLE9BQVYsQ0FBa0IsVUFBQ3VZLFVBQUQ7QUFBQSxlQUFnQkEsVUFBVSxFQUExQjtBQUFBLE9BQWxCO0FBQ0EsV0FBSy9CLElBQUwsQ0FBVWp0QixNQUFWLEdBQW1CLENBQW5CO0FBQ0EsV0FBSzZ0QixPQUFMLENBQWF0WCxPQUFiO0FBQ0g7QUFDRDtBQUNKO0FBQ0E7QUFDQTtBQUNBOzs7O1dBQ0ksa0JBQVM7QUFDTHBCLFdBQUssQ0FBQyxZQUFELENBQUw7QUFDQSxXQUFLd1osYUFBTCxHQUFxQixJQUFyQjtBQUNBLFdBQUtILGFBQUwsR0FBcUIsS0FBckI7O0FBQ0EsVUFBSSxjQUFjLEtBQUtmLFdBQXZCLEVBQW9DO0FBQ2hDO0FBQ0E7QUFDQSxhQUFLeFIsT0FBTDtBQUNIOztBQUNELFdBQUt1UixPQUFMLENBQWFqZCxLQUFiO0FBQ0EsV0FBS2tkLFdBQUwsR0FBbUIsUUFBbkI7QUFDQSxVQUFJLEtBQUtpQixNQUFULEVBQ0ksS0FBS0EsTUFBTCxDQUFZaFUsS0FBWjtBQUNQO0FBQ0Q7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7OztXQUNJLHNCQUFhO0FBQ1QsYUFBTyxLQUFLNlUsTUFBTCxFQUFQO0FBQ0g7QUFDRDtBQUNKO0FBQ0E7QUFDQTtBQUNBOzs7O1dBQ0ksaUJBQVFoUyxNQUFSLEVBQWdCO0FBQ1pwSSxXQUFLLENBQUMsU0FBRCxDQUFMO0FBQ0EsV0FBSzhHLE9BQUw7QUFDQSxXQUFLdVIsT0FBTCxDQUFhamQsS0FBYjtBQUNBLFdBQUtrZCxXQUFMLEdBQW1CLFFBQW5CO0FBQ0EsV0FBS3FCLFlBQUwsQ0FBa0IsT0FBbEIsRUFBMkJ2UixNQUEzQjs7QUFDQSxVQUFJLEtBQUswUSxhQUFMLElBQXNCLENBQUMsS0FBS1UsYUFBaEMsRUFBK0M7QUFDM0MsYUFBS0YsU0FBTDtBQUNIO0FBQ0o7QUFDRDtBQUNKO0FBQ0E7QUFDQTtBQUNBOzs7O1dBQ0kscUJBQVk7QUFBQTs7QUFDUixVQUFJLEtBQUtELGFBQUwsSUFBc0IsS0FBS0csYUFBL0IsRUFDSSxPQUFPLElBQVA7QUFDSixVQUFNelgsSUFBSSxHQUFHLElBQWI7O0FBQ0EsVUFBSSxLQUFLc1csT0FBTCxDQUFhdGQsUUFBYixJQUF5QixLQUFLZ2UscUJBQWxDLEVBQXlEO0FBQ3JEL1ksYUFBSyxDQUFDLGtCQUFELENBQUw7QUFDQSxhQUFLcVksT0FBTCxDQUFhamQsS0FBYjtBQUNBLGFBQUt1ZSxZQUFMLENBQWtCLGtCQUFsQjtBQUNBLGFBQUtOLGFBQUwsR0FBcUIsS0FBckI7QUFDSCxPQUxELE1BTUs7QUFDRCxZQUFNdG9CLEtBQUssR0FBRyxLQUFLc25CLE9BQUwsQ0FBYWpvQixRQUFiLEVBQWQ7QUFDQTRQLGFBQUssQ0FBQyx5Q0FBRCxFQUE0Q2pQLEtBQTVDLENBQUw7QUFDQSxhQUFLc29CLGFBQUwsR0FBcUIsSUFBckI7QUFDQSxZQUFNcm9CLEtBQUssR0FBR25KLFVBQVUsQ0FBQyxZQUFNO0FBQzNCLGNBQUlrYSxJQUFJLENBQUN5WCxhQUFULEVBQ0k7QUFDSnhaLGVBQUssQ0FBQyxzQkFBRCxDQUFMOztBQUNBLGdCQUFJLENBQUMyWixZQUFMLENBQWtCLG1CQUFsQixFQUF1QzVYLElBQUksQ0FBQ3NXLE9BQUwsQ0FBYXRkLFFBQXBELEVBSjJCLENBSzNCOzs7QUFDQSxjQUFJZ0gsSUFBSSxDQUFDeVgsYUFBVCxFQUNJO0FBQ0p6WCxjQUFJLENBQUMyRCxJQUFMLENBQVUsVUFBQ3NCLEdBQUQsRUFBUztBQUNmLGdCQUFJQSxHQUFKLEVBQVM7QUFDTGhILG1CQUFLLENBQUMseUJBQUQsQ0FBTDtBQUNBK0Isa0JBQUksQ0FBQ3NYLGFBQUwsR0FBcUIsS0FBckI7QUFDQXRYLGtCQUFJLENBQUN1WCxTQUFMOztBQUNBLG9CQUFJLENBQUNLLFlBQUwsQ0FBa0IsaUJBQWxCLEVBQXFDM1MsR0FBckM7QUFDSCxhQUxELE1BTUs7QUFDRGhILG1CQUFLLENBQUMsbUJBQUQsQ0FBTDtBQUNBK0Isa0JBQUksQ0FBQ3NZLFdBQUw7QUFDSDtBQUNKLFdBWEQ7QUFZSCxTQXBCdUIsRUFvQnJCdHBCLEtBcEJxQixDQUF4Qjs7QUFxQkEsWUFBSSxLQUFLNEosSUFBTCxDQUFVbU4sU0FBZCxFQUF5QjtBQUNyQjlXLGVBQUssQ0FBQytXLEtBQU47QUFDSDs7QUFDRCxhQUFLK1AsSUFBTCxDQUFVaG9CLElBQVYsQ0FBZSxTQUFTK3BCLFVBQVQsR0FBc0I7QUFDakM5eEIsc0JBQVksQ0FBQ2lKLEtBQUQsQ0FBWjtBQUNILFNBRkQ7QUFHSDtBQUNKO0FBQ0Q7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7OztXQUNJLHVCQUFjO0FBQ1YsVUFBTXNwQixPQUFPLEdBQUcsS0FBS2pDLE9BQUwsQ0FBYXRkLFFBQTdCO0FBQ0EsV0FBS3NlLGFBQUwsR0FBcUIsS0FBckI7QUFDQSxXQUFLaEIsT0FBTCxDQUFhamQsS0FBYjtBQUNBLFdBQUt1ZSxZQUFMLENBQWtCLFdBQWxCLEVBQStCVyxPQUEvQjtBQUNIOzs7O0VBMVdpQjFDLGNBQWMsQ0FBQzJDLGtCOztBQTRXckM5ZixlQUFBLEdBQWtCNmMsT0FBbEIsQzs7Ozs7Ozs7Ozs7QUN0WGE7O0FBQ2Jyc0IsOENBQTZDO0FBQUVzZ0IsT0FBSyxFQUFFO0FBQVQsQ0FBN0M7QUFDQTlRLFVBQUEsR0FBYSxLQUFLLENBQWxCOztBQUNBLFNBQVM4QixFQUFULENBQVk5SyxHQUFaLEVBQWlCMmQsRUFBakIsRUFBcUIzUyxFQUFyQixFQUF5QjtBQUNyQmhMLEtBQUcsQ0FBQzhLLEVBQUosQ0FBTzZTLEVBQVAsRUFBVzNTLEVBQVg7QUFDQSxTQUFPLFNBQVNvZCxVQUFULEdBQXNCO0FBQ3pCcG9CLE9BQUcsQ0FBQ21MLEdBQUosQ0FBUXdTLEVBQVIsRUFBWTNTLEVBQVo7QUFDSCxHQUZEO0FBR0g7O0FBQ0RoQyxVQUFBLEdBQWE4QixFQUFiLEM7Ozs7Ozs7Ozs7O0FDVGE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDYnRSLDhDQUE2QztBQUFFc2dCLE9BQUssRUFBRTtBQUFULENBQTdDO0FBQ0E5USxjQUFBLEdBQWlCLEtBQUssQ0FBdEI7O0FBQ0EsSUFBTThjLGtCQUFrQixHQUFHM21CLG1CQUFPLENBQUMsdUVBQUQsQ0FBbEM7O0FBQ0EsSUFBTSttQixJQUFJLEdBQUcvbUIsbUJBQU8sQ0FBQyx5REFBRCxDQUFwQjs7QUFDQSxJQUFNZ25CLGNBQWMsR0FBR2huQixtQkFBTyxDQUFDLDZFQUFELENBQTlCOztBQUNBLElBQU1vUCxLQUFLLEdBQUdwUCxtQkFBTyxDQUFDLGtEQUFELENBQVAsQ0FBaUIseUJBQWpCLENBQWQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsSUFBTTRwQixlQUFlLEdBQUd2dkIsTUFBTSxDQUFDd3ZCLE1BQVAsQ0FBYztBQUNsQ0MsU0FBTyxFQUFFLENBRHlCO0FBRWxDQyxlQUFhLEVBQUUsQ0FGbUI7QUFHbENDLFlBQVUsRUFBRSxDQUhzQjtBQUlsQ0MsZUFBYSxFQUFFLENBSm1CO0FBS2xDO0FBQ0FDLGFBQVcsRUFBRSxDQU5xQjtBQU9sQ2plLGdCQUFjLEVBQUU7QUFQa0IsQ0FBZCxDQUF4Qjs7SUFTTXdHLE07Ozs7O0FBQ0Y7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNJLGtCQUFZZ1UsRUFBWixFQUFnQjZDLEdBQWhCLEVBQXFCdmYsSUFBckIsRUFBMkI7QUFBQTs7QUFBQTs7QUFDdkI7QUFDQSxVQUFLb2dCLGFBQUwsR0FBcUIsRUFBckI7QUFDQSxVQUFLQyxVQUFMLEdBQWtCLEVBQWxCO0FBQ0EsVUFBS0MsR0FBTCxHQUFXLENBQVg7QUFDQSxVQUFLQyxJQUFMLEdBQVksRUFBWjtBQUNBLFVBQUtDLEtBQUwsR0FBYSxFQUFiO0FBQ0EsVUFBSzlELEVBQUwsR0FBVUEsRUFBVjtBQUNBLFVBQUs2QyxHQUFMLEdBQVdBLEdBQVg7QUFDQSxVQUFLZSxHQUFMLEdBQVcsQ0FBWDtBQUNBLFVBQUtDLElBQUwsR0FBWSxFQUFaO0FBQ0EsVUFBS0gsYUFBTCxHQUFxQixFQUFyQjtBQUNBLFVBQUtDLFVBQUwsR0FBa0IsRUFBbEI7QUFDQSxVQUFLSSxTQUFMLEdBQWlCLEtBQWpCO0FBQ0EsVUFBS0MsWUFBTCxHQUFvQixJQUFwQjtBQUNBLFVBQUtGLEtBQUwsR0FBYSxFQUFiOztBQUNBLFFBQUl4Z0IsSUFBSSxJQUFJQSxJQUFJLENBQUMyZ0IsSUFBakIsRUFBdUI7QUFDbkIsWUFBS0EsSUFBTCxHQUFZM2dCLElBQUksQ0FBQzJnQixJQUFqQjtBQUNIOztBQUNELFFBQUksTUFBS2pFLEVBQUwsQ0FBUXVCLFlBQVosRUFDSSxNQUFLbFQsSUFBTDtBQXBCbUI7QUFxQjFCO0FBQ0Q7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7Ozs7V0FDSSxxQkFBWTtBQUNSLFVBQUksS0FBS29TLElBQVQsRUFDSTtBQUNKLFVBQU1ULEVBQUUsR0FBRyxLQUFLQSxFQUFoQjtBQUNBLFdBQUtTLElBQUwsR0FBWSxDQUNSSCxJQUFJLENBQUNwYixFQUFMLENBQVE4YSxFQUFSLEVBQVksTUFBWixFQUFvQixLQUFLcEksTUFBTCxDQUFZelYsSUFBWixDQUFpQixJQUFqQixDQUFwQixDQURRLEVBRVJtZSxJQUFJLENBQUNwYixFQUFMLENBQVE4YSxFQUFSLEVBQVksUUFBWixFQUFzQixLQUFLa0UsUUFBTCxDQUFjL2hCLElBQWQsQ0FBbUIsSUFBbkIsQ0FBdEIsQ0FGUSxFQUdSbWUsSUFBSSxDQUFDcGIsRUFBTCxDQUFROGEsRUFBUixFQUFZLE9BQVosRUFBcUIsS0FBS25RLE9BQUwsQ0FBYTFOLElBQWIsQ0FBa0IsSUFBbEIsQ0FBckIsQ0FIUSxFQUlSbWUsSUFBSSxDQUFDcGIsRUFBTCxDQUFROGEsRUFBUixFQUFZLE9BQVosRUFBcUIsS0FBS2pRLE9BQUwsQ0FBYTVOLElBQWIsQ0FBa0IsSUFBbEIsQ0FBckIsQ0FKUSxDQUFaO0FBTUg7QUFDRDtBQUNKO0FBQ0E7Ozs7U0FDSSxlQUFhO0FBQ1QsYUFBTyxDQUFDLENBQUMsS0FBS3NlLElBQWQ7QUFDSDtBQUNEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7Ozs7V0FDSSxtQkFBVTtBQUNOLFVBQUksS0FBS3NELFNBQVQsRUFDSSxPQUFPLElBQVA7QUFDSixXQUFLSSxTQUFMO0FBQ0EsVUFBSSxDQUFDLEtBQUtuRSxFQUFMLENBQVEsZUFBUixDQUFMLEVBQ0ksS0FBS0EsRUFBTCxDQUFRM1IsSUFBUixHQUxFLENBS2M7O0FBQ3BCLFVBQUksV0FBVyxLQUFLMlIsRUFBTCxDQUFRaUIsV0FBdkIsRUFDSSxLQUFLckosTUFBTDtBQUNKLGFBQU8sSUFBUDtBQUNIO0FBQ0Q7QUFDSjtBQUNBOzs7O1dBQ0ksZ0JBQU87QUFDSCxhQUFPLEtBQUt5TCxPQUFMLEVBQVA7QUFDSDtBQUNEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztXQUNJLGdCQUFjO0FBQUEsd0NBQU54cEIsSUFBTTtBQUFOQSxZQUFNO0FBQUE7O0FBQ1ZBLFVBQUksQ0FBQ2lSLE9BQUwsQ0FBYSxTQUFiO0FBQ0EsV0FBS2pULElBQUwsQ0FBVWtDLEtBQVYsQ0FBZ0IsSUFBaEIsRUFBc0JGLElBQXRCO0FBQ0EsYUFBTyxJQUFQO0FBQ0g7QUFDRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztXQUNJLGNBQUtrZSxFQUFMLEVBQWtCO0FBQ2QsVUFBSW9MLGVBQWUsQ0FBQ3pvQixjQUFoQixDQUErQnFkLEVBQS9CLENBQUosRUFBd0M7QUFDcEMsY0FBTSxJQUFJdlIsS0FBSixDQUFVLE1BQU11UixFQUFOLEdBQVcsNEJBQXJCLENBQU47QUFDSDs7QUFIYSx5Q0FBTmxlLElBQU07QUFBTkEsWUFBTTtBQUFBOztBQUlkQSxVQUFJLENBQUNpUixPQUFMLENBQWFpTixFQUFiO0FBQ0EsVUFBTTdILE1BQU0sR0FBRztBQUNYdlQsWUFBSSxFQUFFdWpCLGtCQUFrQixDQUFDa0UsVUFBbkIsQ0FBOEJDLEtBRHpCO0FBRVhoVixZQUFJLEVBQUV4VjtBQUZLLE9BQWY7QUFJQXFXLFlBQU0sQ0FBQ2hLLE9BQVAsR0FBaUIsRUFBakI7QUFDQWdLLFlBQU0sQ0FBQ2hLLE9BQVAsQ0FBZTBLLFFBQWYsR0FBMEIsS0FBS2tULEtBQUwsQ0FBV2xULFFBQVgsS0FBd0IsS0FBbEQsQ0FWYyxDQVdkOztBQUNBLFVBQUksZUFBZSxPQUFPL1csSUFBSSxDQUFDQSxJQUFJLENBQUNyRyxNQUFMLEdBQWMsQ0FBZixDQUE5QixFQUFpRDtBQUM3Q21WLGFBQUssQ0FBQyxnQ0FBRCxFQUFtQyxLQUFLaWIsR0FBeEMsQ0FBTDtBQUNBLGFBQUtDLElBQUwsQ0FBVSxLQUFLRCxHQUFmLElBQXNCL3BCLElBQUksQ0FBQ3lxQixHQUFMLEVBQXRCO0FBQ0FwVSxjQUFNLENBQUN0QyxFQUFQLEdBQVksS0FBS2dXLEdBQUwsRUFBWjtBQUNIOztBQUNELFVBQU1XLG1CQUFtQixHQUFHLEtBQUt2RSxFQUFMLENBQVFrQyxNQUFSLElBQ3hCLEtBQUtsQyxFQUFMLENBQVFrQyxNQUFSLENBQWVqVSxTQURTLElBRXhCLEtBQUsrUixFQUFMLENBQVFrQyxNQUFSLENBQWVqVSxTQUFmLENBQXlCMEMsUUFGN0I7QUFHQSxVQUFNNlQsYUFBYSxHQUFHLEtBQUtWLEtBQUwsQ0FBV1csUUFBWCxLQUF3QixDQUFDRixtQkFBRCxJQUF3QixDQUFDLEtBQUtSLFNBQXRELENBQXRCOztBQUNBLFVBQUlTLGFBQUosRUFBbUI7QUFDZjdiLGFBQUssQ0FBQywyREFBRCxDQUFMO0FBQ0gsT0FGRCxNQUdLLElBQUksS0FBS29iLFNBQVQsRUFBb0I7QUFDckIsYUFBSzdULE1BQUwsQ0FBWUEsTUFBWjtBQUNILE9BRkksTUFHQTtBQUNELGFBQUt5VCxVQUFMLENBQWdCbHJCLElBQWhCLENBQXFCeVgsTUFBckI7QUFDSDs7QUFDRCxXQUFLNFQsS0FBTCxHQUFhLEVBQWI7QUFDQSxhQUFPLElBQVA7QUFDSDtBQUNEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztXQUNJLGdCQUFPNVQsT0FBUCxFQUFlO0FBQ1hBLGFBQU0sQ0FBQzJTLEdBQVAsR0FBYSxLQUFLQSxHQUFsQjs7QUFDQSxXQUFLN0MsRUFBTCxDQUFRMEUsT0FBUixDQUFnQnhVLE9BQWhCO0FBQ0g7QUFDRDtBQUNKO0FBQ0E7QUFDQTtBQUNBOzs7O1dBQ0ksa0JBQVM7QUFBQTs7QUFDTHZILFdBQUssQ0FBQyxnQ0FBRCxDQUFMOztBQUNBLFVBQUksT0FBTyxLQUFLc2IsSUFBWixJQUFvQixVQUF4QixFQUFvQztBQUNoQyxhQUFLQSxJQUFMLENBQVUsVUFBQzVVLElBQUQsRUFBVTtBQUNoQixnQkFBSSxDQUFDYSxNQUFMLENBQVk7QUFBRXZULGdCQUFJLEVBQUV1akIsa0JBQWtCLENBQUNrRSxVQUFuQixDQUE4Qk8sT0FBdEM7QUFBK0N0VixnQkFBSSxFQUFKQTtBQUEvQyxXQUFaO0FBQ0gsU0FGRDtBQUdILE9BSkQsTUFLSztBQUNELGFBQUthLE1BQUwsQ0FBWTtBQUFFdlQsY0FBSSxFQUFFdWpCLGtCQUFrQixDQUFDa0UsVUFBbkIsQ0FBOEJPLE9BQXRDO0FBQStDdFYsY0FBSSxFQUFFLEtBQUs0VTtBQUExRCxTQUFaO0FBQ0g7QUFDSjtBQUNEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztXQUNJLGlCQUFRdFUsR0FBUixFQUFhO0FBQ1QsVUFBSSxDQUFDLEtBQUtvVSxTQUFWLEVBQXFCO0FBQ2pCLGFBQUt6QixZQUFMLENBQWtCLGVBQWxCLEVBQW1DM1MsR0FBbkM7QUFDSDtBQUNKO0FBQ0Q7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O1dBQ0ksaUJBQVFvQixNQUFSLEVBQWdCO0FBQ1pwSSxXQUFLLENBQUMsWUFBRCxFQUFlb0ksTUFBZixDQUFMO0FBQ0EsV0FBS2dULFNBQUwsR0FBaUIsS0FBakI7QUFDQSxXQUFLQyxZQUFMLEdBQW9CLElBQXBCO0FBQ0EsYUFBTyxLQUFLcFcsRUFBWjtBQUNBLFdBQUswVSxZQUFMLENBQWtCLFlBQWxCLEVBQWdDdlIsTUFBaEM7QUFDSDtBQUNEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztXQUNJLGtCQUFTYixNQUFULEVBQWlCO0FBQ2IsVUFBTTBQLGFBQWEsR0FBRzFQLE1BQU0sQ0FBQzJTLEdBQVAsS0FBZSxLQUFLQSxHQUExQztBQUNBLFVBQUksQ0FBQ2pELGFBQUwsRUFDSTs7QUFDSixjQUFRMVAsTUFBTSxDQUFDdlQsSUFBZjtBQUNJLGFBQUt1akIsa0JBQWtCLENBQUNrRSxVQUFuQixDQUE4Qk8sT0FBbkM7QUFDSSxjQUFJelUsTUFBTSxDQUFDYixJQUFQLElBQWVhLE1BQU0sQ0FBQ2IsSUFBUCxDQUFZYixHQUEvQixFQUFvQztBQUNoQyxnQkFBTVosRUFBRSxHQUFHc0MsTUFBTSxDQUFDYixJQUFQLENBQVliLEdBQXZCO0FBQ0EsaUJBQUtvVyxTQUFMLENBQWVoWCxFQUFmO0FBQ0gsV0FIRCxNQUlLO0FBQ0QsaUJBQUswVSxZQUFMLENBQWtCLGVBQWxCLEVBQW1DLElBQUk5YixLQUFKLENBQVUsMkxBQVYsQ0FBbkM7QUFDSDs7QUFDRDs7QUFDSixhQUFLMFosa0JBQWtCLENBQUNrRSxVQUFuQixDQUE4QkMsS0FBbkM7QUFDSSxlQUFLUSxPQUFMLENBQWEzVSxNQUFiO0FBQ0E7O0FBQ0osYUFBS2dRLGtCQUFrQixDQUFDa0UsVUFBbkIsQ0FBOEJVLFlBQW5DO0FBQ0ksZUFBS0QsT0FBTCxDQUFhM1UsTUFBYjtBQUNBOztBQUNKLGFBQUtnUSxrQkFBa0IsQ0FBQ2tFLFVBQW5CLENBQThCVyxHQUFuQztBQUNJLGVBQUtDLEtBQUwsQ0FBVzlVLE1BQVg7QUFDQTs7QUFDSixhQUFLZ1Esa0JBQWtCLENBQUNrRSxVQUFuQixDQUE4QmEsVUFBbkM7QUFDSSxlQUFLRCxLQUFMLENBQVc5VSxNQUFYO0FBQ0E7O0FBQ0osYUFBS2dRLGtCQUFrQixDQUFDa0UsVUFBbkIsQ0FBOEJjLFVBQW5DO0FBQ0ksZUFBS0MsWUFBTDtBQUNBOztBQUNKLGFBQUtqRixrQkFBa0IsQ0FBQ2tFLFVBQW5CLENBQThCZ0IsYUFBbkM7QUFDSSxjQUFNelYsR0FBRyxHQUFHLElBQUluSixLQUFKLENBQVUwSixNQUFNLENBQUNiLElBQVAsQ0FBWTlGLE9BQXRCLENBQVosQ0FESixDQUVJOztBQUNBb0csYUFBRyxDQUFDTixJQUFKLEdBQVdhLE1BQU0sQ0FBQ2IsSUFBUCxDQUFZQSxJQUF2QjtBQUNBLGVBQUtpVCxZQUFMLENBQWtCLGVBQWxCLEVBQW1DM1MsR0FBbkM7QUFDQTtBQTlCUjtBQWdDSDtBQUNEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztXQUNJLGlCQUFRTyxNQUFSLEVBQWdCO0FBQ1osVUFBTXJXLElBQUksR0FBR3FXLE1BQU0sQ0FBQ2IsSUFBUCxJQUFlLEVBQTVCO0FBQ0ExRyxXQUFLLENBQUMsbUJBQUQsRUFBc0I5TyxJQUF0QixDQUFMOztBQUNBLFVBQUksUUFBUXFXLE1BQU0sQ0FBQ3RDLEVBQW5CLEVBQXVCO0FBQ25CakYsYUFBSyxDQUFDLGlDQUFELENBQUw7QUFDQTlPLFlBQUksQ0FBQ3BCLElBQUwsQ0FBVSxLQUFLNHNCLEdBQUwsQ0FBU25WLE1BQU0sQ0FBQ3RDLEVBQWhCLENBQVY7QUFDSDs7QUFDRCxVQUFJLEtBQUttVyxTQUFULEVBQW9CO0FBQ2hCLGFBQUt1QixTQUFMLENBQWV6ckIsSUFBZjtBQUNILE9BRkQsTUFHSztBQUNELGFBQUs2cEIsYUFBTCxDQUFtQmpyQixJQUFuQixDQUF3QjdFLE1BQU0sQ0FBQ3d2QixNQUFQLENBQWN2cEIsSUFBZCxDQUF4QjtBQUNIO0FBQ0o7OztXQUNELG1CQUFVQSxJQUFWLEVBQWdCO0FBQ1osVUFBSSxLQUFLMHJCLGFBQUwsSUFBc0IsS0FBS0EsYUFBTCxDQUFtQi94QixNQUE3QyxFQUFxRDtBQUNqRCxZQUFNc1MsU0FBUyxHQUFHLEtBQUt5ZixhQUFMLENBQW1CMWYsS0FBbkIsRUFBbEI7O0FBRGlELG1EQUUxQkMsU0FGMEI7QUFBQTs7QUFBQTtBQUVqRCw4REFBa0M7QUFBQSxnQkFBdkIwZixRQUF1QjtBQUM5QkEsb0JBQVEsQ0FBQ3pyQixLQUFULENBQWUsSUFBZixFQUFxQkYsSUFBckI7QUFDSDtBQUpnRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS3BEOztBQUNELDREQUFXRSxLQUFYLENBQWlCLElBQWpCLEVBQXVCRixJQUF2QjtBQUNIO0FBQ0Q7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7OztXQUNJLGFBQUkrVCxFQUFKLEVBQVE7QUFDSixVQUFNbEQsSUFBSSxHQUFHLElBQWI7QUFDQSxVQUFJK2EsSUFBSSxHQUFHLEtBQVg7QUFDQSxhQUFPLFlBQW1CO0FBQ3RCO0FBQ0EsWUFBSUEsSUFBSixFQUNJO0FBQ0pBLFlBQUksR0FBRyxJQUFQOztBQUpzQiwyQ0FBTjVyQixJQUFNO0FBQU5BLGNBQU07QUFBQTs7QUFLdEI4TyxhQUFLLENBQUMsZ0JBQUQsRUFBbUI5TyxJQUFuQixDQUFMO0FBQ0E2USxZQUFJLENBQUN3RixNQUFMLENBQVk7QUFDUnZULGNBQUksRUFBRXVqQixrQkFBa0IsQ0FBQ2tFLFVBQW5CLENBQThCVyxHQUQ1QjtBQUVSblgsWUFBRSxFQUFFQSxFQUZJO0FBR1J5QixjQUFJLEVBQUV4VjtBQUhFLFNBQVo7QUFLSCxPQVhEO0FBWUg7QUFDRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7V0FDSSxlQUFNcVcsTUFBTixFQUFjO0FBQ1YsVUFBTW1WLEdBQUcsR0FBRyxLQUFLeEIsSUFBTCxDQUFVM1QsTUFBTSxDQUFDdEMsRUFBakIsQ0FBWjs7QUFDQSxVQUFJLGVBQWUsT0FBT3lYLEdBQTFCLEVBQStCO0FBQzNCMWMsYUFBSyxDQUFDLHdCQUFELEVBQTJCdUgsTUFBTSxDQUFDdEMsRUFBbEMsRUFBc0NzQyxNQUFNLENBQUNiLElBQTdDLENBQUw7QUFDQWdXLFdBQUcsQ0FBQ3RyQixLQUFKLENBQVUsSUFBVixFQUFnQm1XLE1BQU0sQ0FBQ2IsSUFBdkI7QUFDQSxlQUFPLEtBQUt3VSxJQUFMLENBQVUzVCxNQUFNLENBQUN0QyxFQUFqQixDQUFQO0FBQ0gsT0FKRCxNQUtLO0FBQ0RqRixhQUFLLENBQUMsWUFBRCxFQUFldUgsTUFBTSxDQUFDdEMsRUFBdEIsQ0FBTDtBQUNIO0FBQ0o7QUFDRDtBQUNKO0FBQ0E7QUFDQTtBQUNBOzs7O1dBQ0ksbUJBQVVBLEVBQVYsRUFBYztBQUNWakYsV0FBSyxDQUFDLDZCQUFELEVBQWdDaUYsRUFBaEMsQ0FBTDtBQUNBLFdBQUtBLEVBQUwsR0FBVUEsRUFBVjtBQUNBLFdBQUttVyxTQUFMLEdBQWlCLElBQWpCO0FBQ0EsV0FBS0MsWUFBTCxHQUFvQixLQUFwQjtBQUNBLFdBQUswQixZQUFMO0FBQ0EsV0FBS3BELFlBQUwsQ0FBa0IsU0FBbEI7QUFDSDtBQUNEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7Ozs7V0FDSSx3QkFBZTtBQUFBOztBQUNYLFdBQUtvQixhQUFMLENBQW1CelosT0FBbkIsQ0FBMkIsVUFBQ3BRLElBQUQ7QUFBQSxlQUFVLE1BQUksQ0FBQ3lyQixTQUFMLENBQWV6ckIsSUFBZixDQUFWO0FBQUEsT0FBM0I7QUFDQSxXQUFLNnBCLGFBQUwsR0FBcUIsRUFBckI7QUFDQSxXQUFLQyxVQUFMLENBQWdCMVosT0FBaEIsQ0FBd0IsVUFBQ2lHLE1BQUQ7QUFBQSxlQUFZLE1BQUksQ0FBQ0EsTUFBTCxDQUFZQSxNQUFaLENBQVo7QUFBQSxPQUF4QjtBQUNBLFdBQUt5VCxVQUFMLEdBQWtCLEVBQWxCO0FBQ0g7QUFDRDtBQUNKO0FBQ0E7QUFDQTtBQUNBOzs7O1dBQ0ksd0JBQWU7QUFDWGhiLFdBQUssQ0FBQyx3QkFBRCxFQUEyQixLQUFLa2EsR0FBaEMsQ0FBTDtBQUNBLFdBQUs5WSxPQUFMO0FBQ0EsV0FBS2dHLE9BQUwsQ0FBYSxzQkFBYjtBQUNIO0FBQ0Q7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7V0FDSSxtQkFBVTtBQUNOLFVBQUksS0FBSzBRLElBQVQsRUFBZTtBQUNYO0FBQ0EsYUFBS0EsSUFBTCxDQUFVeFcsT0FBVixDQUFrQixVQUFDdVksVUFBRDtBQUFBLGlCQUFnQkEsVUFBVSxFQUExQjtBQUFBLFNBQWxCO0FBQ0EsYUFBSy9CLElBQUwsR0FBWXZxQixTQUFaO0FBQ0g7O0FBQ0QsV0FBSzhwQixFQUFMLENBQVEsVUFBUixFQUFvQixJQUFwQjtBQUNIO0FBQ0Q7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O1dBQ0ksc0JBQWE7QUFDVCxVQUFJLEtBQUsrRCxTQUFULEVBQW9CO0FBQ2hCcGIsYUFBSyxDQUFDLDRCQUFELEVBQStCLEtBQUtrYSxHQUFwQyxDQUFMO0FBQ0EsYUFBSzNTLE1BQUwsQ0FBWTtBQUFFdlQsY0FBSSxFQUFFdWpCLGtCQUFrQixDQUFDa0UsVUFBbkIsQ0FBOEJjO0FBQXRDLFNBQVo7QUFDSCxPQUpRLENBS1Q7OztBQUNBLFdBQUtuYixPQUFMOztBQUNBLFVBQUksS0FBS2dhLFNBQVQsRUFBb0I7QUFDaEI7QUFDQSxhQUFLaFUsT0FBTCxDQUFhLHNCQUFiO0FBQ0g7O0FBQ0QsYUFBTyxJQUFQO0FBQ0g7QUFDRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7V0FDSSxpQkFBUTtBQUNKLGFBQU8sS0FBS3dULFVBQUwsRUFBUDtBQUNIO0FBQ0Q7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7V0FDSSxrQkFBUzNTLFNBQVQsRUFBbUI7QUFDZixXQUFLa1QsS0FBTCxDQUFXbFQsUUFBWCxHQUFzQkEsU0FBdEI7QUFDQSxhQUFPLElBQVA7QUFDSDtBQUNEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O1NBQ0ksZUFBZTtBQUNYLFdBQUtrVCxLQUFMLENBQVdXLFFBQVgsR0FBc0IsSUFBdEI7QUFDQSxhQUFPLElBQVA7QUFDSDtBQUNEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O1dBQ0ksZUFBTWUsUUFBTixFQUFnQjtBQUNaLFdBQUtELGFBQUwsR0FBcUIsS0FBS0EsYUFBTCxJQUFzQixFQUEzQzs7QUFDQSxXQUFLQSxhQUFMLENBQW1COXNCLElBQW5CLENBQXdCK3NCLFFBQXhCOztBQUNBLGFBQU8sSUFBUDtBQUNIO0FBQ0Q7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7V0FDSSxvQkFBV0EsUUFBWCxFQUFxQjtBQUNqQixXQUFLRCxhQUFMLEdBQXFCLEtBQUtBLGFBQUwsSUFBc0IsRUFBM0M7O0FBQ0EsV0FBS0EsYUFBTCxDQUFtQnphLE9BQW5CLENBQTJCMGEsUUFBM0I7O0FBQ0EsYUFBTyxJQUFQO0FBQ0g7QUFDRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7V0FDSSxnQkFBT0EsUUFBUCxFQUFpQjtBQUNiLFVBQUksQ0FBQyxLQUFLRCxhQUFWLEVBQXlCO0FBQ3JCLGVBQU8sSUFBUDtBQUNIOztBQUNELFVBQUlDLFFBQUosRUFBYztBQUNWLFlBQU0xZixTQUFTLEdBQUcsS0FBS3lmLGFBQXZCOztBQUNBLGFBQUssSUFBSTNzQixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHa04sU0FBUyxDQUFDdFMsTUFBOUIsRUFBc0NvRixDQUFDLEVBQXZDLEVBQTJDO0FBQ3ZDLGNBQUk0c0IsUUFBUSxLQUFLMWYsU0FBUyxDQUFDbE4sQ0FBRCxDQUExQixFQUErQjtBQUMzQmtOLHFCQUFTLENBQUNGLE1BQVYsQ0FBaUJoTixDQUFqQixFQUFvQixDQUFwQjtBQUNBLG1CQUFPLElBQVA7QUFDSDtBQUNKO0FBQ0osT0FSRCxNQVNLO0FBQ0QsYUFBSzJzQixhQUFMLEdBQXFCLEVBQXJCO0FBQ0g7O0FBQ0QsYUFBTyxJQUFQO0FBQ0g7QUFDRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7V0FDSSx3QkFBZTtBQUNYLGFBQU8sS0FBS0EsYUFBTCxJQUFzQixFQUE3QjtBQUNIOzs7O0VBcmJnQmhGLGNBQWMsQ0FBQzJDLGtCOztBQXVicEM5ZixjQUFBLEdBQWlCNEksTUFBakIsQzs7Ozs7Ozs7Ozs7QUMzY2E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDYnBZLDhDQUE2QztBQUFFc2dCLE9BQUssRUFBRTtBQUFULENBQTdDO0FBQ0E5USwwQkFBQSxHQUE2QixLQUFLLENBQWxDOztBQUNBLElBQU00QixPQUFPLEdBQUd6TCxtQkFBTyxDQUFDLG9FQUFELENBQXZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztJQUNNMnBCLGtCOzs7Ozs7Ozs7Ozs7OztBQUNGO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNJLGdCQUFHbkwsRUFBSCxFQUFPeU4sUUFBUCxFQUFpQjtBQUNiLGlGQUFTek4sRUFBVCxFQUFheU4sUUFBYjs7QUFDQSxhQUFPLElBQVA7QUFDSDtBQUNEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztXQUNJLGNBQUt6TixFQUFMLEVBQVN5TixRQUFULEVBQW1CO0FBQ2YsbUZBQVd6TixFQUFYLEVBQWV5TixRQUFmOztBQUNBLGFBQU8sSUFBUDtBQUNIO0FBQ0Q7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O1dBQ0ksY0FBS3pOLEVBQUwsRUFBa0I7QUFBQTs7QUFBQSx3Q0FBTmxlLElBQU07QUFBTkEsWUFBTTtBQUFBOztBQUNkLDJHQUFXa2UsRUFBWCxTQUFrQmxlLElBQWxCOztBQUNBLGFBQU8sSUFBUDtBQUNIO0FBQ0Q7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O1dBQ0ksc0JBQWFrZSxFQUFiLEVBQTBCO0FBQUE7O0FBQUEseUNBQU5sZSxJQUFNO0FBQU5BLFlBQU07QUFBQTs7QUFDdEIsMkdBQVdrZSxFQUFYLFNBQWtCbGUsSUFBbEI7O0FBQ0EsYUFBTyxJQUFQO0FBQ0g7QUFDRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7V0FDSSxtQkFBVXNMLEtBQVYsRUFBaUI7QUFDYiwrRkFBdUJBLEtBQXZCO0FBQ0g7Ozs7RUFwRDRCSCxPOztBQXNEakM1QiwwQkFBQSxHQUE2QjhmLGtCQUE3QixDOzs7Ozs7Ozs7OztBQ3ZFYTs7QUFDYnR2Qiw4Q0FBNkM7QUFBRXNnQixPQUFLLEVBQUU7QUFBVCxDQUE3QztBQUNBOVEsV0FBQSxHQUFjLEtBQUssQ0FBbkI7O0FBQ0EsSUFBTWlKLFFBQVEsR0FBRzlTLG1CQUFPLENBQUMsa0RBQUQsQ0FBeEI7O0FBQ0EsSUFBTW9QLEtBQUssR0FBR3BQLG1CQUFPLENBQUMsa0RBQUQsQ0FBUCxDQUFpQixzQkFBakIsQ0FBZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsU0FBU29tQixHQUFULENBQWExVCxHQUFiLEVBQWtDO0FBQUEsTUFBaEJjLElBQWdCLHVFQUFULEVBQVM7QUFBQSxNQUFMNFksR0FBSztBQUM5QixNQUFJdnJCLEdBQUcsR0FBRzZSLEdBQVYsQ0FEOEIsQ0FFOUI7O0FBQ0EwWixLQUFHLEdBQUdBLEdBQUcsSUFBSyxPQUFPaDBCLFFBQVAsS0FBb0IsV0FBcEIsSUFBbUNBLFFBQWpEO0FBQ0EsTUFBSSxRQUFRc2EsR0FBWixFQUNJQSxHQUFHLEdBQUcwWixHQUFHLENBQUN6WixRQUFKLEdBQWUsSUFBZixHQUFzQnlaLEdBQUcsQ0FBQ25aLElBQWhDLENBTDBCLENBTTlCOztBQUNBLE1BQUksT0FBT1AsR0FBUCxLQUFlLFFBQW5CLEVBQTZCO0FBQ3pCLFFBQUksUUFBUUEsR0FBRyxDQUFDZ04sTUFBSixDQUFXLENBQVgsQ0FBWixFQUEyQjtBQUN2QixVQUFJLFFBQVFoTixHQUFHLENBQUNnTixNQUFKLENBQVcsQ0FBWCxDQUFaLEVBQTJCO0FBQ3ZCaE4sV0FBRyxHQUFHMFosR0FBRyxDQUFDelosUUFBSixHQUFlRCxHQUFyQjtBQUNILE9BRkQsTUFHSztBQUNEQSxXQUFHLEdBQUcwWixHQUFHLENBQUNuWixJQUFKLEdBQVdQLEdBQWpCO0FBQ0g7QUFDSjs7QUFDRCxRQUFJLENBQUMsc0JBQXNCM1EsSUFBdEIsQ0FBMkIyUSxHQUEzQixDQUFMLEVBQXNDO0FBQ2xDdEQsV0FBSyxDQUFDLHNCQUFELEVBQXlCc0QsR0FBekIsQ0FBTDs7QUFDQSxVQUFJLGdCQUFnQixPQUFPMFosR0FBM0IsRUFBZ0M7QUFDNUIxWixXQUFHLEdBQUcwWixHQUFHLENBQUN6WixRQUFKLEdBQWUsSUFBZixHQUFzQkQsR0FBNUI7QUFDSCxPQUZELE1BR0s7QUFDREEsV0FBRyxHQUFHLGFBQWFBLEdBQW5CO0FBQ0g7QUFDSixLQWpCd0IsQ0FrQnpCOzs7QUFDQXRELFNBQUssQ0FBQyxVQUFELEVBQWFzRCxHQUFiLENBQUw7QUFDQTdSLE9BQUcsR0FBR2lTLFFBQVEsQ0FBQ0osR0FBRCxDQUFkO0FBQ0gsR0E1QjZCLENBNkI5Qjs7O0FBQ0EsTUFBSSxDQUFDN1IsR0FBRyxDQUFDc1MsSUFBVCxFQUFlO0FBQ1gsUUFBSSxjQUFjcFIsSUFBZCxDQUFtQmxCLEdBQUcsQ0FBQzhSLFFBQXZCLENBQUosRUFBc0M7QUFDbEM5UixTQUFHLENBQUNzUyxJQUFKLEdBQVcsSUFBWDtBQUNILEtBRkQsTUFHSyxJQUFJLGVBQWVwUixJQUFmLENBQW9CbEIsR0FBRyxDQUFDOFIsUUFBeEIsQ0FBSixFQUF1QztBQUN4QzlSLFNBQUcsQ0FBQ3NTLElBQUosR0FBVyxLQUFYO0FBQ0g7QUFDSjs7QUFDRHRTLEtBQUcsQ0FBQzJTLElBQUosR0FBVzNTLEdBQUcsQ0FBQzJTLElBQUosSUFBWSxHQUF2QjtBQUNBLE1BQU1nSyxJQUFJLEdBQUczYyxHQUFHLENBQUNvUyxJQUFKLENBQVNoUyxPQUFULENBQWlCLEdBQWpCLE1BQTBCLENBQUMsQ0FBeEM7QUFDQSxNQUFNZ1MsSUFBSSxHQUFHdUssSUFBSSxHQUFHLE1BQU0zYyxHQUFHLENBQUNvUyxJQUFWLEdBQWlCLEdBQXBCLEdBQTBCcFMsR0FBRyxDQUFDb1MsSUFBL0MsQ0F4QzhCLENBeUM5Qjs7QUFDQXBTLEtBQUcsQ0FBQ3dULEVBQUosR0FBU3hULEdBQUcsQ0FBQzhSLFFBQUosR0FBZSxLQUFmLEdBQXVCTSxJQUF2QixHQUE4QixHQUE5QixHQUFvQ3BTLEdBQUcsQ0FBQ3NTLElBQXhDLEdBQStDSyxJQUF4RCxDQTFDOEIsQ0EyQzlCOztBQUNBM1MsS0FBRyxDQUFDd3JCLElBQUosR0FDSXhyQixHQUFHLENBQUM4UixRQUFKLEdBQ0ksS0FESixHQUVJTSxJQUZKLElBR0ttWixHQUFHLElBQUlBLEdBQUcsQ0FBQ2paLElBQUosS0FBYXRTLEdBQUcsQ0FBQ3NTLElBQXhCLEdBQStCLEVBQS9CLEdBQW9DLE1BQU10UyxHQUFHLENBQUNzUyxJQUhuRCxDQURKO0FBS0EsU0FBT3RTLEdBQVA7QUFDSDs7QUFDRGdKLFdBQUEsR0FBY3VjLEdBQWQsQzs7Ozs7Ozs7Ozs7QUNqRWE7Ozs7QUFDYi9yQiw4Q0FBNkM7QUFBRXNnQixPQUFLLEVBQUU7QUFBVCxDQUE3QztBQUNBOVEseUJBQUEsR0FBNEJBLHlCQUFBLEdBQTRCLEtBQUssQ0FBN0Q7O0FBQ0EsSUFBTXlpQixXQUFXLEdBQUd0c0IsbUJBQU8sQ0FBQyxzRUFBRCxDQUEzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxTQUFTdXNCLGlCQUFULENBQTJCNVYsTUFBM0IsRUFBbUM7QUFDL0IsTUFBTTZWLE9BQU8sR0FBRyxFQUFoQjtBQUNBLE1BQU1DLFVBQVUsR0FBRzlWLE1BQU0sQ0FBQ2IsSUFBMUI7QUFDQSxNQUFNNFcsSUFBSSxHQUFHL1YsTUFBYjtBQUNBK1YsTUFBSSxDQUFDNVcsSUFBTCxHQUFZNlcsa0JBQWtCLENBQUNGLFVBQUQsRUFBYUQsT0FBYixDQUE5QjtBQUNBRSxNQUFJLENBQUNFLFdBQUwsR0FBbUJKLE9BQU8sQ0FBQ3Z5QixNQUEzQixDQUwrQixDQUtJOztBQUNuQyxTQUFPO0FBQUUwYyxVQUFNLEVBQUUrVixJQUFWO0FBQWdCRixXQUFPLEVBQUVBO0FBQXpCLEdBQVA7QUFDSDs7QUFDRDNpQix5QkFBQSxHQUE0QjBpQixpQkFBNUI7O0FBQ0EsU0FBU0ksa0JBQVQsQ0FBNEI3VyxJQUE1QixFQUFrQzBXLE9BQWxDLEVBQTJDO0FBQ3ZDLE1BQUksQ0FBQzFXLElBQUwsRUFDSSxPQUFPQSxJQUFQOztBQUNKLE1BQUl3VyxXQUFXLENBQUNPLFFBQVosQ0FBcUIvVyxJQUFyQixDQUFKLEVBQWdDO0FBQzVCLFFBQU1nWCxXQUFXLEdBQUc7QUFBRUMsa0JBQVksRUFBRSxJQUFoQjtBQUFzQkMsU0FBRyxFQUFFUixPQUFPLENBQUN2eUI7QUFBbkMsS0FBcEI7QUFDQXV5QixXQUFPLENBQUN0dEIsSUFBUixDQUFhNFcsSUFBYjtBQUNBLFdBQU9nWCxXQUFQO0FBQ0gsR0FKRCxNQUtLLElBQUluc0IsS0FBSyxDQUFDQyxPQUFOLENBQWNrVixJQUFkLENBQUosRUFBeUI7QUFDMUIsUUFBTW1YLE9BQU8sR0FBRyxJQUFJdHNCLEtBQUosQ0FBVW1WLElBQUksQ0FBQzdiLE1BQWYsQ0FBaEI7O0FBQ0EsU0FBSyxJQUFJb0YsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR3lXLElBQUksQ0FBQzdiLE1BQXpCLEVBQWlDb0YsQ0FBQyxFQUFsQyxFQUFzQztBQUNsQzR0QixhQUFPLENBQUM1dEIsQ0FBRCxDQUFQLEdBQWFzdEIsa0JBQWtCLENBQUM3VyxJQUFJLENBQUN6VyxDQUFELENBQUwsRUFBVW10QixPQUFWLENBQS9CO0FBQ0g7O0FBQ0QsV0FBT1MsT0FBUDtBQUNILEdBTkksTUFPQSxJQUFJLFFBQU9uWCxJQUFQLE1BQWdCLFFBQWhCLElBQTRCLEVBQUVBLElBQUksWUFBWWpiLElBQWxCLENBQWhDLEVBQXlEO0FBQzFELFFBQU1veUIsUUFBTyxHQUFHLEVBQWhCOztBQUNBLFNBQUssSUFBTTdxQixHQUFYLElBQWtCMFQsSUFBbEIsRUFBd0I7QUFDcEIsVUFBSUEsSUFBSSxDQUFDM1UsY0FBTCxDQUFvQmlCLEdBQXBCLENBQUosRUFBOEI7QUFDMUI2cUIsZ0JBQU8sQ0FBQzdxQixHQUFELENBQVAsR0FBZXVxQixrQkFBa0IsQ0FBQzdXLElBQUksQ0FBQzFULEdBQUQsQ0FBTCxFQUFZb3FCLE9BQVosQ0FBakM7QUFDSDtBQUNKOztBQUNELFdBQU9TLFFBQVA7QUFDSDs7QUFDRCxTQUFPblgsSUFBUDtBQUNIO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsU0FBU29YLGlCQUFULENBQTJCdlcsTUFBM0IsRUFBbUM2VixPQUFuQyxFQUE0QztBQUN4QzdWLFFBQU0sQ0FBQ2IsSUFBUCxHQUFjcVgsa0JBQWtCLENBQUN4VyxNQUFNLENBQUNiLElBQVIsRUFBYzBXLE9BQWQsQ0FBaEM7QUFDQTdWLFFBQU0sQ0FBQ2lXLFdBQVAsR0FBcUJqd0IsU0FBckIsQ0FGd0MsQ0FFUjs7QUFDaEMsU0FBT2dhLE1BQVA7QUFDSDs7QUFDRDlNLHlCQUFBLEdBQTRCcWpCLGlCQUE1Qjs7QUFDQSxTQUFTQyxrQkFBVCxDQUE0QnJYLElBQTVCLEVBQWtDMFcsT0FBbEMsRUFBMkM7QUFDdkMsTUFBSSxDQUFDMVcsSUFBTCxFQUNJLE9BQU9BLElBQVA7O0FBQ0osTUFBSUEsSUFBSSxJQUFJQSxJQUFJLENBQUNpWCxZQUFqQixFQUErQjtBQUMzQixXQUFPUCxPQUFPLENBQUMxVyxJQUFJLENBQUNrWCxHQUFOLENBQWQsQ0FEMkIsQ0FDRDtBQUM3QixHQUZELE1BR0ssSUFBSXJzQixLQUFLLENBQUNDLE9BQU4sQ0FBY2tWLElBQWQsQ0FBSixFQUF5QjtBQUMxQixTQUFLLElBQUl6VyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHeVcsSUFBSSxDQUFDN2IsTUFBekIsRUFBaUNvRixDQUFDLEVBQWxDLEVBQXNDO0FBQ2xDeVcsVUFBSSxDQUFDelcsQ0FBRCxDQUFKLEdBQVU4dEIsa0JBQWtCLENBQUNyWCxJQUFJLENBQUN6VyxDQUFELENBQUwsRUFBVW10QixPQUFWLENBQTVCO0FBQ0g7QUFDSixHQUpJLE1BS0EsSUFBSSxRQUFPMVcsSUFBUCxNQUFnQixRQUFwQixFQUE4QjtBQUMvQixTQUFLLElBQU0xVCxHQUFYLElBQWtCMFQsSUFBbEIsRUFBd0I7QUFDcEIsVUFBSUEsSUFBSSxDQUFDM1UsY0FBTCxDQUFvQmlCLEdBQXBCLENBQUosRUFBOEI7QUFDMUIwVCxZQUFJLENBQUMxVCxHQUFELENBQUosR0FBWStxQixrQkFBa0IsQ0FBQ3JYLElBQUksQ0FBQzFULEdBQUQsQ0FBTCxFQUFZb3FCLE9BQVosQ0FBOUI7QUFDSDtBQUNKO0FBQ0o7O0FBQ0QsU0FBTzFXLElBQVA7QUFDSCxDOzs7Ozs7Ozs7OztBQy9FWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNiemIsOENBQTZDO0FBQUVzZ0IsT0FBSyxFQUFFO0FBQVQsQ0FBN0M7QUFDQTlRLGVBQUEsR0FBa0JBLGVBQUEsR0FBa0JBLGtCQUFBLEdBQXFCQSxnQkFBQSxHQUFtQixLQUFLLENBQWpGOztBQUNBLElBQU00QixPQUFPLEdBQUd6TCxtQkFBTyxDQUFDLG9FQUFELENBQXZCOztBQUNBLElBQU1vdEIsUUFBUSxHQUFHcHRCLG1CQUFPLENBQUMsZ0VBQUQsQ0FBeEI7O0FBQ0EsSUFBTXNzQixXQUFXLEdBQUd0c0IsbUJBQU8sQ0FBQyxzRUFBRCxDQUEzQjs7QUFDQSxJQUFNb1AsS0FBSyxHQUFHcFAsbUJBQU8sQ0FBQyxrREFBRCxDQUFQLENBQWlCLGtCQUFqQixDQUFkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E2SixnQkFBQSxHQUFtQixDQUFuQjtBQUNBLElBQUlnaEIsVUFBSjs7QUFDQSxDQUFDLFVBQVVBLFVBQVYsRUFBc0I7QUFDbkJBLFlBQVUsQ0FBQ0EsVUFBVSxDQUFDLFNBQUQsQ0FBVixHQUF3QixDQUF6QixDQUFWLEdBQXdDLFNBQXhDO0FBQ0FBLFlBQVUsQ0FBQ0EsVUFBVSxDQUFDLFlBQUQsQ0FBVixHQUEyQixDQUE1QixDQUFWLEdBQTJDLFlBQTNDO0FBQ0FBLFlBQVUsQ0FBQ0EsVUFBVSxDQUFDLE9BQUQsQ0FBVixHQUFzQixDQUF2QixDQUFWLEdBQXNDLE9BQXRDO0FBQ0FBLFlBQVUsQ0FBQ0EsVUFBVSxDQUFDLEtBQUQsQ0FBVixHQUFvQixDQUFyQixDQUFWLEdBQW9DLEtBQXBDO0FBQ0FBLFlBQVUsQ0FBQ0EsVUFBVSxDQUFDLGVBQUQsQ0FBVixHQUE4QixDQUEvQixDQUFWLEdBQThDLGVBQTlDO0FBQ0FBLFlBQVUsQ0FBQ0EsVUFBVSxDQUFDLGNBQUQsQ0FBVixHQUE2QixDQUE5QixDQUFWLEdBQTZDLGNBQTdDO0FBQ0FBLFlBQVUsQ0FBQ0EsVUFBVSxDQUFDLFlBQUQsQ0FBVixHQUEyQixDQUE1QixDQUFWLEdBQTJDLFlBQTNDO0FBQ0gsQ0FSRCxFQVFHQSxVQUFVLEdBQUdoaEIsT0FBTyxDQUFDZ2hCLFVBQVIsS0FBdUJoaEIsa0JBQUEsR0FBcUIsRUFBNUMsQ0FSaEI7QUFTQTtBQUNBO0FBQ0E7OztJQUNNZ2UsTzs7Ozs7Ozs7QUFDRjtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSSxvQkFBT2huQixHQUFQLEVBQVk7QUFDUnVPLFdBQUssQ0FBQyxvQkFBRCxFQUF1QnZPLEdBQXZCLENBQUw7O0FBQ0EsVUFBSUEsR0FBRyxDQUFDdUMsSUFBSixLQUFheW5CLFVBQVUsQ0FBQ0MsS0FBeEIsSUFBaUNqcUIsR0FBRyxDQUFDdUMsSUFBSixLQUFheW5CLFVBQVUsQ0FBQ1csR0FBN0QsRUFBa0U7QUFDOUQsWUFBSWMsV0FBVyxDQUFDZSxTQUFaLENBQXNCeHNCLEdBQXRCLENBQUosRUFBZ0M7QUFDNUJBLGFBQUcsQ0FBQ3VDLElBQUosR0FDSXZDLEdBQUcsQ0FBQ3VDLElBQUosS0FBYXluQixVQUFVLENBQUNDLEtBQXhCLEdBQ01ELFVBQVUsQ0FBQ1UsWUFEakIsR0FFTVYsVUFBVSxDQUFDYSxVQUhyQjtBQUlBLGlCQUFPLEtBQUs0QixjQUFMLENBQW9CenNCLEdBQXBCLENBQVA7QUFDSDtBQUNKOztBQUNELGFBQU8sQ0FBQyxLQUFLMHNCLGNBQUwsQ0FBb0Ixc0IsR0FBcEIsQ0FBRCxDQUFQO0FBQ0g7QUFDRDtBQUNKO0FBQ0E7Ozs7V0FDSSx3QkFBZUEsR0FBZixFQUFvQjtBQUNoQjtBQUNBLFVBQUlhLEdBQUcsR0FBRyxLQUFLYixHQUFHLENBQUN1QyxJQUFuQixDQUZnQixDQUdoQjs7QUFDQSxVQUFJdkMsR0FBRyxDQUFDdUMsSUFBSixLQUFheW5CLFVBQVUsQ0FBQ1UsWUFBeEIsSUFDQTFxQixHQUFHLENBQUN1QyxJQUFKLEtBQWF5bkIsVUFBVSxDQUFDYSxVQUQ1QixFQUN3QztBQUNwQ2hxQixXQUFHLElBQUliLEdBQUcsQ0FBQytyQixXQUFKLEdBQWtCLEdBQXpCO0FBQ0gsT0FQZSxDQVFoQjtBQUNBOzs7QUFDQSxVQUFJL3JCLEdBQUcsQ0FBQ3lvQixHQUFKLElBQVcsUUFBUXpvQixHQUFHLENBQUN5b0IsR0FBM0IsRUFBZ0M7QUFDNUI1bkIsV0FBRyxJQUFJYixHQUFHLENBQUN5b0IsR0FBSixHQUFVLEdBQWpCO0FBQ0gsT0FaZSxDQWFoQjs7O0FBQ0EsVUFBSSxRQUFRem9CLEdBQUcsQ0FBQ3dULEVBQWhCLEVBQW9CO0FBQ2hCM1MsV0FBRyxJQUFJYixHQUFHLENBQUN3VCxFQUFYO0FBQ0gsT0FoQmUsQ0FpQmhCOzs7QUFDQSxVQUFJLFFBQVF4VCxHQUFHLENBQUNpVixJQUFoQixFQUFzQjtBQUNsQnBVLFdBQUcsSUFBSXdMLElBQUksQ0FBQ0MsU0FBTCxDQUFldE0sR0FBRyxDQUFDaVYsSUFBbkIsQ0FBUDtBQUNIOztBQUNEMUcsV0FBSyxDQUFDLGtCQUFELEVBQXFCdk8sR0FBckIsRUFBMEJhLEdBQTFCLENBQUw7QUFDQSxhQUFPQSxHQUFQO0FBQ0g7QUFDRDtBQUNKO0FBQ0E7QUFDQTtBQUNBOzs7O1dBQ0ksd0JBQWViLEdBQWYsRUFBb0I7QUFDaEIsVUFBTTJzQixjQUFjLEdBQUdKLFFBQVEsQ0FBQ2IsaUJBQVQsQ0FBMkIxckIsR0FBM0IsQ0FBdkI7QUFDQSxVQUFNNnJCLElBQUksR0FBRyxLQUFLYSxjQUFMLENBQW9CQyxjQUFjLENBQUM3VyxNQUFuQyxDQUFiO0FBQ0EsVUFBTTZWLE9BQU8sR0FBR2dCLGNBQWMsQ0FBQ2hCLE9BQS9CO0FBQ0FBLGFBQU8sQ0FBQ2piLE9BQVIsQ0FBZ0JtYixJQUFoQixFQUpnQixDQUlPOztBQUN2QixhQUFPRixPQUFQLENBTGdCLENBS0E7QUFDbkI7Ozs7OztBQUVMM2lCLGVBQUEsR0FBa0JnZSxPQUFsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBQ01FLE87Ozs7O0FBQ0YscUJBQWM7QUFBQTs7QUFBQTtBQUViO0FBQ0Q7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7Ozs7V0FDSSxhQUFJbG5CLEdBQUosRUFBUztBQUNMLFVBQUk4VixNQUFKOztBQUNBLFVBQUksT0FBTzlWLEdBQVAsS0FBZSxRQUFuQixFQUE2QjtBQUN6QjhWLGNBQU0sR0FBRyxLQUFLOFcsWUFBTCxDQUFrQjVzQixHQUFsQixDQUFUOztBQUNBLFlBQUk4VixNQUFNLENBQUN2VCxJQUFQLEtBQWdCeW5CLFVBQVUsQ0FBQ1UsWUFBM0IsSUFDQTVVLE1BQU0sQ0FBQ3ZULElBQVAsS0FBZ0J5bkIsVUFBVSxDQUFDYSxVQUQvQixFQUMyQztBQUN2QztBQUNBLGVBQUtnQyxhQUFMLEdBQXFCLElBQUlDLG1CQUFKLENBQXdCaFgsTUFBeEIsQ0FBckIsQ0FGdUMsQ0FHdkM7O0FBQ0EsY0FBSUEsTUFBTSxDQUFDaVcsV0FBUCxLQUF1QixDQUEzQixFQUE4QjtBQUMxQiw4RUFBVyxTQUFYLEVBQXNCalcsTUFBdEI7QUFDSDtBQUNKLFNBUkQsTUFTSztBQUNEO0FBQ0EsNEVBQVcsU0FBWCxFQUFzQkEsTUFBdEI7QUFDSDtBQUNKLE9BZkQsTUFnQkssSUFBSTJWLFdBQVcsQ0FBQ08sUUFBWixDQUFxQmhzQixHQUFyQixLQUE2QkEsR0FBRyxDQUFDb0ssTUFBckMsRUFBNkM7QUFDOUM7QUFDQSxZQUFJLENBQUMsS0FBS3lpQixhQUFWLEVBQXlCO0FBQ3JCLGdCQUFNLElBQUl6Z0IsS0FBSixDQUFVLGtEQUFWLENBQU47QUFDSCxTQUZELE1BR0s7QUFDRDBKLGdCQUFNLEdBQUcsS0FBSytXLGFBQUwsQ0FBbUJFLGNBQW5CLENBQWtDL3NCLEdBQWxDLENBQVQ7O0FBQ0EsY0FBSThWLE1BQUosRUFBWTtBQUNSO0FBQ0EsaUJBQUsrVyxhQUFMLEdBQXFCLElBQXJCOztBQUNBLDhFQUFXLFNBQVgsRUFBc0IvVyxNQUF0QjtBQUNIO0FBQ0o7QUFDSixPQWJJLE1BY0E7QUFDRCxjQUFNLElBQUkxSixLQUFKLENBQVUsbUJBQW1CcE0sR0FBN0IsQ0FBTjtBQUNIO0FBQ0o7QUFDRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7V0FDSSxzQkFBYWEsR0FBYixFQUFrQjtBQUNkLFVBQUlyQyxDQUFDLEdBQUcsQ0FBUixDQURjLENBRWQ7O0FBQ0EsVUFBTThGLENBQUMsR0FBRztBQUNOL0IsWUFBSSxFQUFFaU8sTUFBTSxDQUFDM1AsR0FBRyxDQUFDZ2UsTUFBSixDQUFXLENBQVgsQ0FBRDtBQUROLE9BQVY7O0FBR0EsVUFBSW1MLFVBQVUsQ0FBQzFsQixDQUFDLENBQUMvQixJQUFILENBQVYsS0FBdUJ6RyxTQUEzQixFQUFzQztBQUNsQyxjQUFNLElBQUlzUSxLQUFKLENBQVUseUJBQXlCOUgsQ0FBQyxDQUFDL0IsSUFBckMsQ0FBTjtBQUNILE9BUmEsQ0FTZDs7O0FBQ0EsVUFBSStCLENBQUMsQ0FBQy9CLElBQUYsS0FBV3luQixVQUFVLENBQUNVLFlBQXRCLElBQ0FwbUIsQ0FBQyxDQUFDL0IsSUFBRixLQUFXeW5CLFVBQVUsQ0FBQ2EsVUFEMUIsRUFDc0M7QUFDbEMsWUFBTW1DLEtBQUssR0FBR3h1QixDQUFDLEdBQUcsQ0FBbEI7O0FBQ0EsZUFBT3FDLEdBQUcsQ0FBQ2dlLE1BQUosQ0FBVyxFQUFFcmdCLENBQWIsTUFBb0IsR0FBcEIsSUFBMkJBLENBQUMsSUFBSXFDLEdBQUcsQ0FBQ3pILE1BQTNDLEVBQW1ELENBQUc7O0FBQ3RELFlBQU02ekIsR0FBRyxHQUFHcHNCLEdBQUcsQ0FBQ3dKLFNBQUosQ0FBYzJpQixLQUFkLEVBQXFCeHVCLENBQXJCLENBQVo7O0FBQ0EsWUFBSXl1QixHQUFHLElBQUl6YyxNQUFNLENBQUN5YyxHQUFELENBQWIsSUFBc0Jwc0IsR0FBRyxDQUFDZ2UsTUFBSixDQUFXcmdCLENBQVgsTUFBa0IsR0FBNUMsRUFBaUQ7QUFDN0MsZ0JBQU0sSUFBSTROLEtBQUosQ0FBVSxxQkFBVixDQUFOO0FBQ0g7O0FBQ0Q5SCxTQUFDLENBQUN5bkIsV0FBRixHQUFnQnZiLE1BQU0sQ0FBQ3ljLEdBQUQsQ0FBdEI7QUFDSCxPQW5CYSxDQW9CZDs7O0FBQ0EsVUFBSSxRQUFRcHNCLEdBQUcsQ0FBQ2dlLE1BQUosQ0FBV3JnQixDQUFDLEdBQUcsQ0FBZixDQUFaLEVBQStCO0FBQzNCLFlBQU13dUIsTUFBSyxHQUFHeHVCLENBQUMsR0FBRyxDQUFsQjs7QUFDQSxlQUFPLEVBQUVBLENBQVQsRUFBWTtBQUNSLGNBQU00UCxDQUFDLEdBQUd2TixHQUFHLENBQUNnZSxNQUFKLENBQVdyZ0IsQ0FBWCxDQUFWO0FBQ0EsY0FBSSxRQUFRNFAsQ0FBWixFQUNJO0FBQ0osY0FBSTVQLENBQUMsS0FBS3FDLEdBQUcsQ0FBQ3pILE1BQWQsRUFDSTtBQUNQOztBQUNEa0wsU0FBQyxDQUFDbWtCLEdBQUYsR0FBUTVuQixHQUFHLENBQUN3SixTQUFKLENBQWMyaUIsTUFBZCxFQUFxQnh1QixDQUFyQixDQUFSO0FBQ0gsT0FWRCxNQVdLO0FBQ0Q4RixTQUFDLENBQUNta0IsR0FBRixHQUFRLEdBQVI7QUFDSCxPQWxDYSxDQW1DZDs7O0FBQ0EsVUFBTXlFLElBQUksR0FBR3JzQixHQUFHLENBQUNnZSxNQUFKLENBQVdyZ0IsQ0FBQyxHQUFHLENBQWYsQ0FBYjs7QUFDQSxVQUFJLE9BQU8wdUIsSUFBUCxJQUFlMWMsTUFBTSxDQUFDMGMsSUFBRCxDQUFOLElBQWdCQSxJQUFuQyxFQUF5QztBQUNyQyxZQUFNRixPQUFLLEdBQUd4dUIsQ0FBQyxHQUFHLENBQWxCOztBQUNBLGVBQU8sRUFBRUEsQ0FBVCxFQUFZO0FBQ1IsY0FBTTRQLEVBQUMsR0FBR3ZOLEdBQUcsQ0FBQ2dlLE1BQUosQ0FBV3JnQixDQUFYLENBQVY7O0FBQ0EsY0FBSSxRQUFRNFAsRUFBUixJQUFhb0MsTUFBTSxDQUFDcEMsRUFBRCxDQUFOLElBQWFBLEVBQTlCLEVBQWlDO0FBQzdCLGNBQUU1UCxDQUFGO0FBQ0E7QUFDSDs7QUFDRCxjQUFJQSxDQUFDLEtBQUtxQyxHQUFHLENBQUN6SCxNQUFkLEVBQ0k7QUFDUDs7QUFDRGtMLFNBQUMsQ0FBQ2tQLEVBQUYsR0FBT2hELE1BQU0sQ0FBQzNQLEdBQUcsQ0FBQ3dKLFNBQUosQ0FBYzJpQixPQUFkLEVBQXFCeHVCLENBQUMsR0FBRyxDQUF6QixDQUFELENBQWI7QUFDSCxPQWpEYSxDQWtEZDs7O0FBQ0EsVUFBSXFDLEdBQUcsQ0FBQ2dlLE1BQUosQ0FBVyxFQUFFcmdCLENBQWIsQ0FBSixFQUFxQjtBQUNqQixZQUFNMnVCLE9BQU8sR0FBR0MsUUFBUSxDQUFDdnNCLEdBQUcsQ0FBQ3lRLE1BQUosQ0FBVzlTLENBQVgsQ0FBRCxDQUF4Qjs7QUFDQSxZQUFJMG9CLE9BQU8sQ0FBQ21HLGNBQVIsQ0FBdUIvb0IsQ0FBQyxDQUFDL0IsSUFBekIsRUFBK0I0cUIsT0FBL0IsQ0FBSixFQUE2QztBQUN6QzdvQixXQUFDLENBQUMyUSxJQUFGLEdBQVNrWSxPQUFUO0FBQ0gsU0FGRCxNQUdLO0FBQ0QsZ0JBQU0sSUFBSS9nQixLQUFKLENBQVUsaUJBQVYsQ0FBTjtBQUNIO0FBQ0o7O0FBQ0RtQyxXQUFLLENBQUMsa0JBQUQsRUFBcUIxTixHQUFyQixFQUEwQnlELENBQTFCLENBQUw7QUFDQSxhQUFPQSxDQUFQO0FBQ0g7Ozs7QUFpQkQ7QUFDSjtBQUNBO0FBQ0ksdUJBQVU7QUFDTixVQUFJLEtBQUt1b0IsYUFBVCxFQUF3QjtBQUNwQixhQUFLQSxhQUFMLENBQW1CUyxzQkFBbkI7QUFDSDtBQUNKOzs7V0F2QkQsd0JBQXNCL3FCLElBQXRCLEVBQTRCNHFCLE9BQTVCLEVBQXFDO0FBQ2pDLGNBQVE1cUIsSUFBUjtBQUNJLGFBQUt5bkIsVUFBVSxDQUFDTyxPQUFoQjtBQUNJLGlCQUFPLFFBQU80QyxPQUFQLE1BQW1CLFFBQTFCOztBQUNKLGFBQUtuRCxVQUFVLENBQUNjLFVBQWhCO0FBQ0ksaUJBQU9xQyxPQUFPLEtBQUtyeEIsU0FBbkI7O0FBQ0osYUFBS2t1QixVQUFVLENBQUNnQixhQUFoQjtBQUNJLGlCQUFPLE9BQU9tQyxPQUFQLEtBQW1CLFFBQW5CLElBQStCLFFBQU9BLE9BQVAsTUFBbUIsUUFBekQ7O0FBQ0osYUFBS25ELFVBQVUsQ0FBQ0MsS0FBaEI7QUFDQSxhQUFLRCxVQUFVLENBQUNVLFlBQWhCO0FBQ0ksaUJBQU81cUIsS0FBSyxDQUFDQyxPQUFOLENBQWNvdEIsT0FBZCxLQUEwQkEsT0FBTyxDQUFDL3pCLE1BQVIsR0FBaUIsQ0FBbEQ7O0FBQ0osYUFBSzR3QixVQUFVLENBQUNXLEdBQWhCO0FBQ0EsYUFBS1gsVUFBVSxDQUFDYSxVQUFoQjtBQUNJLGlCQUFPL3FCLEtBQUssQ0FBQ0MsT0FBTixDQUFjb3RCLE9BQWQsQ0FBUDtBQVpSO0FBY0g7Ozs7RUFqSWlCdmlCLE87O0FBMkl0QjVCLGVBQUEsR0FBa0JrZSxPQUFsQjs7QUFDQSxTQUFTa0csUUFBVCxDQUFrQnZzQixHQUFsQixFQUF1QjtBQUNuQixNQUFJO0FBQ0EsV0FBT3dMLElBQUksQ0FBQ04sS0FBTCxDQUFXbEwsR0FBWCxDQUFQO0FBQ0gsR0FGRCxDQUdBLE9BQU81RSxDQUFQLEVBQVU7QUFDTixXQUFPLEtBQVA7QUFDSDtBQUNKO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0lBQ002d0IsbUI7QUFDRiwrQkFBWWhYLE1BQVosRUFBb0I7QUFBQTs7QUFDaEIsU0FBS0EsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBSzZWLE9BQUwsR0FBZSxFQUFmO0FBQ0EsU0FBSzRCLFNBQUwsR0FBaUJ6WCxNQUFqQjtBQUNIO0FBQ0Q7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7V0FDSSx3QkFBZTBYLE9BQWYsRUFBd0I7QUFDcEIsV0FBSzdCLE9BQUwsQ0FBYXR0QixJQUFiLENBQWtCbXZCLE9BQWxCOztBQUNBLFVBQUksS0FBSzdCLE9BQUwsQ0FBYXZ5QixNQUFiLEtBQXdCLEtBQUttMEIsU0FBTCxDQUFleEIsV0FBM0MsRUFBd0Q7QUFDcEQ7QUFDQSxZQUFNalcsTUFBTSxHQUFHeVcsUUFBUSxDQUFDRixpQkFBVCxDQUEyQixLQUFLa0IsU0FBaEMsRUFBMkMsS0FBSzVCLE9BQWhELENBQWY7QUFDQSxhQUFLMkIsc0JBQUw7QUFDQSxlQUFPeFgsTUFBUDtBQUNIOztBQUNELGFBQU8sSUFBUDtBQUNIO0FBQ0Q7QUFDSjtBQUNBOzs7O1dBQ0ksa0NBQXlCO0FBQ3JCLFdBQUt5WCxTQUFMLEdBQWlCLElBQWpCO0FBQ0EsV0FBSzVCLE9BQUwsR0FBZSxFQUFmO0FBQ0g7Ozs7Ozs7Ozs7Ozs7OztBQ3RSUTs7OztBQUNibnlCLDhDQUE2QztBQUFFc2dCLE9BQUssRUFBRTtBQUFULENBQTdDO0FBQ0E5USxpQkFBQSxHQUFvQkEsZ0JBQUEsR0FBbUIsS0FBSyxDQUE1QztBQUNBLElBQU15VixxQkFBcUIsR0FBRyxPQUFPOVQsV0FBUCxLQUF1QixVQUFyRDs7QUFDQSxJQUFNd1UsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ25mLEdBQUQsRUFBUztBQUNwQixTQUFPLE9BQU8ySyxXQUFXLENBQUN3VSxNQUFuQixLQUE4QixVQUE5QixHQUNEeFUsV0FBVyxDQUFDd1UsTUFBWixDQUFtQm5mLEdBQW5CLENBREMsR0FFREEsR0FBRyxDQUFDb2YsTUFBSixZQUFzQnpVLFdBRjVCO0FBR0gsQ0FKRDs7QUFLQSxJQUFNekssUUFBUSxHQUFHMUcsTUFBTSxDQUFDeUcsU0FBUCxDQUFpQkMsUUFBbEM7QUFDQSxJQUFNZ2YsY0FBYyxHQUFHLE9BQU9ELElBQVAsS0FBZ0IsVUFBaEIsSUFDbEIsT0FBT0EsSUFBUCxLQUFnQixXQUFoQixJQUNHL2UsUUFBUSxDQUFDQyxJQUFULENBQWM4ZSxJQUFkLE1BQXdCLDBCQUZoQztBQUdBLElBQU13TyxjQUFjLEdBQUcsT0FBT0MsSUFBUCxLQUFnQixVQUFoQixJQUNsQixPQUFPQSxJQUFQLEtBQWdCLFdBQWhCLElBQ0d4dEIsUUFBUSxDQUFDQyxJQUFULENBQWN1dEIsSUFBZCxNQUF3QiwwQkFGaEM7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFNBQVMxQixRQUFULENBQWtCaHNCLEdBQWxCLEVBQXVCO0FBQ25CLFNBQVN5ZSxxQkFBcUIsS0FBS3plLEdBQUcsWUFBWTJLLFdBQWYsSUFBOEJ3VSxNQUFNLENBQUNuZixHQUFELENBQXpDLENBQXRCLElBQ0hrZixjQUFjLElBQUlsZixHQUFHLFlBQVlpZixJQUQ5QixJQUVId08sY0FBYyxJQUFJenRCLEdBQUcsWUFBWTB0QixJQUZ0QztBQUdIOztBQUNEMWtCLGdCQUFBLEdBQW1CZ2pCLFFBQW5COztBQUNBLFNBQVNRLFNBQVQsQ0FBbUJ4c0IsR0FBbkIsRUFBd0IydEIsTUFBeEIsRUFBZ0M7QUFDNUIsTUFBSSxDQUFDM3RCLEdBQUQsSUFBUSxRQUFPQSxHQUFQLE1BQWUsUUFBM0IsRUFBcUM7QUFDakMsV0FBTyxLQUFQO0FBQ0g7O0FBQ0QsTUFBSUYsS0FBSyxDQUFDQyxPQUFOLENBQWNDLEdBQWQsQ0FBSixFQUF3QjtBQUNwQixTQUFLLElBQUl4QixDQUFDLEdBQUcsQ0FBUixFQUFXNEYsQ0FBQyxHQUFHcEUsR0FBRyxDQUFDNUcsTUFBeEIsRUFBZ0NvRixDQUFDLEdBQUc0RixDQUFwQyxFQUF1QzVGLENBQUMsRUFBeEMsRUFBNEM7QUFDeEMsVUFBSWd1QixTQUFTLENBQUN4c0IsR0FBRyxDQUFDeEIsQ0FBRCxDQUFKLENBQWIsRUFBdUI7QUFDbkIsZUFBTyxJQUFQO0FBQ0g7QUFDSjs7QUFDRCxXQUFPLEtBQVA7QUFDSDs7QUFDRCxNQUFJd3RCLFFBQVEsQ0FBQ2hzQixHQUFELENBQVosRUFBbUI7QUFDZixXQUFPLElBQVA7QUFDSDs7QUFDRCxNQUFJQSxHQUFHLENBQUMydEIsTUFBSixJQUNBLE9BQU8zdEIsR0FBRyxDQUFDMnRCLE1BQVgsS0FBc0IsVUFEdEIsSUFFQWp1QixTQUFTLENBQUN0RyxNQUFWLEtBQXFCLENBRnpCLEVBRTRCO0FBQ3hCLFdBQU9vekIsU0FBUyxDQUFDeHNCLEdBQUcsQ0FBQzJ0QixNQUFKLEVBQUQsRUFBZSxJQUFmLENBQWhCO0FBQ0g7O0FBQ0QsT0FBSyxJQUFNcHNCLEdBQVgsSUFBa0J2QixHQUFsQixFQUF1QjtBQUNuQixRQUFJeEcsTUFBTSxDQUFDeUcsU0FBUCxDQUFpQkssY0FBakIsQ0FBZ0NILElBQWhDLENBQXFDSCxHQUFyQyxFQUEwQ3VCLEdBQTFDLEtBQWtEaXJCLFNBQVMsQ0FBQ3hzQixHQUFHLENBQUN1QixHQUFELENBQUosQ0FBL0QsRUFBMkU7QUFDdkUsYUFBTyxJQUFQO0FBQ0g7QUFDSjs7QUFDRCxTQUFPLEtBQVA7QUFDSDs7QUFDRHlILGlCQUFBLEdBQW9Cd2pCLFNBQXBCLEM7Ozs7Ozs7Ozs7O0FDdERhOztBQUViLElBQUlvQixRQUFRLEdBQUcsbUVBQW1FanBCLEtBQW5FLENBQXlFLEVBQXpFLENBQWY7QUFBQSxJQUNJdkwsTUFBTSxHQUFHLEVBRGI7QUFBQSxJQUVJd0wsR0FBRyxHQUFHLEVBRlY7QUFBQSxJQUdJaEQsSUFBSSxHQUFHLENBSFg7QUFBQSxJQUlJcEQsQ0FBQyxHQUFHLENBSlI7QUFBQSxJQUtJaVMsSUFMSjtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFNBQVNpTSxNQUFULENBQWdCeVAsR0FBaEIsRUFBcUI7QUFDbkIsTUFBSTBCLE9BQU8sR0FBRyxFQUFkOztBQUVBLEtBQUc7QUFDREEsV0FBTyxHQUFHRCxRQUFRLENBQUN6QixHQUFHLEdBQUcveUIsTUFBUCxDQUFSLEdBQXlCeTBCLE9BQW5DO0FBQ0ExQixPQUFHLEdBQUd2MkIsSUFBSSxDQUFDOFQsS0FBTCxDQUFXeWlCLEdBQUcsR0FBRy95QixNQUFqQixDQUFOO0FBQ0QsR0FIRCxRQUdTK3lCLEdBQUcsR0FBRyxDQUhmOztBQUtBLFNBQU8wQixPQUFQO0FBQ0Q7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsU0FBU3RhLE1BQVQsQ0FBZ0IxUyxHQUFoQixFQUFxQjtBQUNuQixNQUFJbWUsT0FBTyxHQUFHLENBQWQ7O0FBRUEsT0FBS3hnQixDQUFDLEdBQUcsQ0FBVCxFQUFZQSxDQUFDLEdBQUdxQyxHQUFHLENBQUN6SCxNQUFwQixFQUE0Qm9GLENBQUMsRUFBN0IsRUFBaUM7QUFDL0J3Z0IsV0FBTyxHQUFHQSxPQUFPLEdBQUc1bEIsTUFBVixHQUFtQndMLEdBQUcsQ0FBQy9ELEdBQUcsQ0FBQ2dlLE1BQUosQ0FBV3JnQixDQUFYLENBQUQsQ0FBaEM7QUFDRDs7QUFFRCxTQUFPd2dCLE9BQVA7QUFDRDtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsU0FBU2xELEtBQVQsR0FBaUI7QUFDZixNQUFJZ1MsR0FBRyxHQUFHcFIsTUFBTSxDQUFDLENBQUMsSUFBSTFpQixJQUFKLEVBQUYsQ0FBaEI7QUFFQSxNQUFJOHpCLEdBQUcsS0FBS3JkLElBQVosRUFBa0IsT0FBTzdPLElBQUksR0FBRyxDQUFQLEVBQVU2TyxJQUFJLEdBQUdxZCxHQUF4QjtBQUNsQixTQUFPQSxHQUFHLEdBQUUsR0FBTCxHQUFVcFIsTUFBTSxDQUFDOWEsSUFBSSxFQUFMLENBQXZCO0FBQ0QsQyxDQUVEO0FBQ0E7QUFDQTs7O0FBQ0EsT0FBT3BELENBQUMsR0FBR3BGLE1BQVgsRUFBbUJvRixDQUFDLEVBQXBCO0FBQXdCb0csS0FBRyxDQUFDZ3BCLFFBQVEsQ0FBQ3B2QixDQUFELENBQVQsQ0FBSCxHQUFtQkEsQ0FBbkI7QUFBeEIsQyxDQUVBO0FBQ0E7QUFDQTs7O0FBQ0FzZCxLQUFLLENBQUNZLE1BQU4sR0FBZUEsTUFBZjtBQUNBWixLQUFLLENBQUN2SSxNQUFOLEdBQWVBLE1BQWY7QUFDQXhLLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjhTLEtBQWpCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25FQTtBQUNBO0FBQ0E7QUFHTyxTQUFTaVMsTUFBVCxDQUFnQjFaLE1BQWhCLEVBQXdCO0FBQzdCO0FBQ0EsTUFBSTJaLFdBQUosRUFBaUJDLE1BQWpCLEVBQXlCQyxhQUF6QixFQUF3Q0MsV0FBeEMsQ0FGNkIsQ0FHN0I7O0FBQ0EsTUFBSUMsYUFBYSxHQUFHdHhCLGdEQUFDLENBQUMsY0FBRCxDQUFyQixDQUo2QixDQUlXOztBQUN4QyxNQUFJdXhCLHFCQUFxQixHQUFHdnhCLGdEQUFDLENBQUMsd0JBQUQsQ0FBN0IsQ0FMNkIsQ0FLNEI7O0FBQ3pELE1BQUl3eEIsa0JBQWtCLEdBQUd4eEIsZ0RBQUMsQ0FBQyxvQkFBRCxDQUExQixDQU42QixDQU1xQjs7QUFDbEQsTUFBSXl4QixhQUFhLEdBQUd6eEIsZ0RBQUMsQ0FBQyxrQkFBRCxDQUFyQjtBQUNBLE1BQUkweEIsZUFBZSxHQUFHMXhCLGdEQUFDLENBQUMsb0JBQUQsQ0FBdkI7QUFDQSxNQUFJMnhCLFNBQVMsR0FBRzN4QixnREFBQyxDQUFDLGFBQUQsQ0FBakI7QUFDQSxNQUFJNHhCLFdBQVcsR0FBRzV4QixnREFBQyxDQUFDLGVBQUQsQ0FBbkIsQ0FWNkIsQ0FVUzs7QUFDdEMsTUFBSTZ4QixlQUFlLEdBQUc3eEIsZ0RBQUMsQ0FBQyxnQkFBRCxDQUF2QixDQVg2QixDQVdjOztBQUMzQyxNQUFJOHhCLG1CQUFtQixHQUFHOXhCLGdEQUFDLENBQUMseUJBQUQsQ0FBM0IsQ0FaNkIsQ0FZMkI7O0FBQ3hELE1BQUkreEIsU0FBUyxHQUFHL3hCLGdEQUFDLENBQUMsYUFBRCxDQUFqQixDQWI2QixDQWFLO0FBRWxDOztBQUNBLE1BQUlneUIsV0FBSjtBQUNBLE1BQUlDLGFBQWEsR0FBRyxJQUFJajZCLE9BQUosQ0FBWSxVQUFDQyxHQUFELEVBQU1DLEdBQU4sRUFBYztBQUM1Qzg1QixlQUFXLEdBQUcvNUIsR0FBZDtBQUNELEdBRm1CLENBQXBCLENBakI2QixDQXFCN0I7O0FBQ0FnQixhQUFXLENBQUMsWUFBTTtBQUNoQlksWUFBUSxDQUFDcTRCLGdCQUFULENBQTBCLG1CQUExQixFQUErQ25mLE9BQS9DLENBQXVELFVBQUF0YyxHQUFHLEVBQUk7QUFDNUQsVUFBSUEsR0FBRyxDQUFDMDdCLFNBQUosQ0FBYzcxQixNQUFkLEdBQXVCLENBQTNCLEVBQThCO0FBQzVCN0YsV0FBRyxDQUFDMDdCLFNBQUosSUFBaUIsR0FBakI7QUFDRCxPQUZELE1BR0s7QUFDSDE3QixXQUFHLENBQUMwN0IsU0FBSixHQUFnQixFQUFoQjtBQUNEO0FBQ0YsS0FQRDtBQVFELEdBVFUsRUFTUixHQVRRLENBQVgsQ0F0QjZCLENBaUM3Qjs7QUFDQXQ0QixVQUFRLENBQUNxNEIsZ0JBQVQsQ0FBMEIscUJBQTFCLEVBQWlEbmYsT0FBakQsQ0FBeUQsVUFBQXRjLEdBQUcsRUFBSTtBQUM5RCxRQUFJMjdCLGFBQWEsR0FBR254QixzREFBTyxDQUFDeEssR0FBRCxFQUFNLFNBQU4sQ0FBM0I7QUFDQUEsT0FBRyxDQUFDb0gsZ0JBQUosQ0FBcUIsT0FBckIsRUFBOEIsWUFBTTtBQUNsQ3cwQixrQkFBWSxDQUFDRCxhQUFhLENBQUMsQ0FBRCxDQUFiLENBQWlCMWIsRUFBbEIsRUFBc0IsS0FBdEIsQ0FBWjtBQUNELEtBRkQ7QUFHRCxHQUxELEVBbEM2QixDQTBDN0I7O0FBQ0EsTUFBSTRiLElBQUosQ0EzQzZCLENBOEM3Qjs7QUFDQVYsYUFBVyxDQUFDL3pCLGdCQUFaLENBQTZCLE9BQTdCLEVBQXNDLFlBQU07QUFDMUMsUUFBSXV6QixhQUFhLElBQUlGLFdBQWpCLElBQWdDQyxNQUFwQyxFQUE0QztBQUM1QyxRQUFJbjNCLElBQUksR0FBRzIzQixTQUFTLENBQUMzVSxLQUFWLEdBQWtCMlUsU0FBUyxDQUFDM1UsS0FBNUIsR0FBb0NqUixpREFBL0M7QUFDQXdtQixlQUFXLENBQUNoYixNQUFELEVBQVN2ZCxJQUFULENBQVg7O0FBQ0EsUUFBSXM0QixJQUFJLEtBQUssUUFBYixFQUF1QjtBQUNyQkQsa0JBQVksQ0FBQyxrQkFBRCxFQUFxQixJQUFyQixDQUFaO0FBQ0QsS0FGRCxNQUdLLElBQUlDLElBQUksS0FBSyxVQUFiLEVBQXlCO0FBQzVCLFVBQUksQ0FBQ3BCLFdBQUwsRUFBa0I7QUFDaEJzQixlQUFPLENBQUNqYixNQUFELENBQVA7QUFDQTJaLG1CQUFXLEdBQUcsSUFBZDtBQUNBQyxjQUFNLEdBQUcsSUFBVDtBQUNBQyxxQkFBYSxHQUFHLElBQWhCO0FBQ0QsT0FMRCxNQU1LO0FBQ0g7QUFDRDtBQUNGO0FBQ0YsR0FsQkQsRUEvQzZCLENBbUU3Qjs7QUFDQUcsdUJBQXFCLENBQUMxekIsZ0JBQXRCLENBQXVDLE9BQXZDLEVBQWdELFlBQU07QUFDcER5MEIsUUFBSSxHQUFHLFFBQVA7QUFDQUQsZ0JBQVksQ0FBQyxtQkFBRCxFQUFzQixJQUF0QixDQUFaO0FBQ0QsR0FIRCxFQXBFNkIsQ0F5RTdCOztBQUNBYixvQkFBa0IsQ0FBQzN6QixnQkFBbkIsQ0FBb0MsT0FBcEMsRUFBNkMsWUFBTTtBQUNqRCxRQUFJLENBQUNzekIsTUFBTCxFQUFhO0FBQ1gsVUFBSXNCLFFBQVEsR0FBR2hCLGFBQWEsQ0FBQ3pVLEtBQTdCO0FBQ0EwVixxQkFBZSxDQUFDbmIsTUFBRCxFQUFTa2IsUUFBVCxDQUFmO0FBQ0F0QixZQUFNLEdBQUcsSUFBVDtBQUNBRCxpQkFBVyxHQUFHLElBQWQ7QUFDQUUsbUJBQWEsR0FBRyxJQUFoQjtBQUNELEtBTkQsTUFPSztBQUNIO0FBQ0Q7QUFDRixHQVhELEVBMUU2QixDQXVGN0I7O0FBQ0FFLGVBQWEsQ0FBQ3p6QixnQkFBZCxDQUErQixPQUEvQixFQUF3QyxZQUFNO0FBQzVDeTBCLFFBQUksR0FBRyxVQUFQO0FBQ0FELGdCQUFZLENBQUMsbUJBQUQsRUFBc0IsSUFBdEIsQ0FBWjtBQUNELEdBSEQsRUF4RjZCLENBNkY3Qjs7QUFDQVIsaUJBQWUsQ0FBQ2gwQixnQkFBaEIsQ0FBaUMsT0FBakMsRUFBMEMsWUFBTTtBQUM5QzBaLFVBQU0sQ0FBQzVXLElBQVAsQ0FBWSxjQUFaO0FBQ0F1d0IsZUFBVyxHQUFHLEtBQWQ7QUFDQUMsVUFBTSxHQUFHLEtBQVQ7QUFDQUMsaUJBQWEsR0FBRyxLQUFoQjtBQUNBaUIsZ0JBQVksQ0FBQywwQkFBRCxFQUE2QixLQUE3QixDQUFaO0FBQ0QsR0FORCxFQTlGNkIsQ0FxRzdCOztBQUNBUCxxQkFBbUIsQ0FBQ2owQixnQkFBcEIsQ0FBcUMsT0FBckMsRUFBOEMsWUFBTTtBQUNsRDBaLFVBQU0sQ0FBQzVXLElBQVAsQ0FBWSxtQkFBWixFQUFpQ29MLDRDQUFqQztBQUNBc21CLGdCQUFZLENBQUMsa0JBQUQsRUFBcUIsS0FBckIsQ0FBWjtBQUNELEdBSEQ7QUFLQU4sV0FBUyxDQUFDbDBCLGdCQUFWLENBQTJCLE9BQTNCLEVBQW9DLFlBQU07QUFDeEMsUUFBSSxDQUFDd3pCLFdBQUwsRUFBa0I7QUFDaEI5WixZQUFNLENBQUM1VyxJQUFQLENBQVksWUFBWjtBQUNBMHdCLGlCQUFXLEdBQUcsSUFBZDtBQUNELEtBSEQsTUFJSztBQUNIO0FBQ0Q7QUFDRixHQVJELEVBM0c2QixDQXFIN0I7O0FBQ0E5WixRQUFNLENBQUN2SixFQUFQLENBQVUsYUFBVixFQUF5QixVQUFDbUssSUFBRCxFQUFVO0FBQ2pDdVosbUJBQWUsQ0FBQ1MsU0FBaEIsR0FBNEJoYSxJQUE1QjtBQUNELEdBRkQsRUF0SDZCLENBMEg3Qjs7QUFDQVosUUFBTSxDQUFDdkosRUFBUCxDQUFVLGNBQVYsRUFBMEIsVUFBQ21LLElBQUQsRUFBVTtBQUNsQyxRQUFJQSxJQUFJLENBQUN3YSxZQUFMLEtBQXNCLENBQTFCLEVBQTZCO0FBQzNCLFVBQUk1bUIsbURBQUEsSUFBb0IsQ0FBeEIsRUFBMkI7QUFDekJsUyxnQkFBUSxDQUFDcTRCLGdCQUFULENBQTBCLHdCQUExQixFQUFvRG5mLE9BQXBELENBQTRELFVBQUF0YyxHQUFHLEVBQUk7QUFDakVBLGFBQUcsQ0FBQzA3QixTQUFKLDJCQUFpQ2hhLElBQUksQ0FBQ3lhLFVBQXRDO0FBQ0QsU0FGRDtBQUdBLzRCLGdCQUFRLENBQUNxNEIsZ0JBQVQsQ0FBMEIsdUJBQTFCLEVBQW1EbmYsT0FBbkQsQ0FBMkQsVUFBQXRjLEdBQUcsRUFBSTtBQUNoRUEsYUFBRyxDQUFDc0wsS0FBSixDQUFVQyxPQUFWLEdBQW9CLE1BQXBCO0FBQ0QsU0FGRDtBQUdELE9BUEQsTUFRSyxJQUFJK0osbURBQUEsSUFBb0IsQ0FBeEIsRUFBMkI7QUFDOUJsUyxnQkFBUSxDQUFDcTRCLGdCQUFULENBQTBCLHdCQUExQixFQUFvRG5mLE9BQXBELENBQTRELFVBQUF0YyxHQUFHLEVBQUk7QUFDakVBLGFBQUcsQ0FBQzA3QixTQUFKLDhDQUFvRGhhLElBQUksQ0FBQzBhLFFBQXpEO0FBQ0QsU0FGRDtBQUdBaDVCLGdCQUFRLENBQUNxNEIsZ0JBQVQsQ0FBMEIsdUJBQTFCLEVBQW1EbmYsT0FBbkQsQ0FBMkQsVUFBQXRjLEdBQUcsRUFBSTtBQUNoRUEsYUFBRyxDQUFDc0wsS0FBSixDQUFVQyxPQUFWLEdBQW9CLE1BQXBCO0FBQ0QsU0FGRDtBQUdEOztBQUNEcXdCLGtCQUFZLENBQUMsMEJBQUQsRUFBNkIsS0FBN0IsQ0FBWjtBQUNBQSxrQkFBWSxDQUFDLGtCQUFELEVBQXFCLEtBQXJCLENBQVo7QUFDQUEsa0JBQVksQ0FBQyxrQkFBRCxFQUFxQixJQUFyQixDQUFaO0FBQ0Q7QUFDRixHQXRCRDtBQXdCQTlhLFFBQU0sQ0FBQ3ZKLEVBQVAsQ0FBVSxZQUFWLEVBQXdCLFVBQUNtSyxJQUFELEVBQVU7QUFDaENrYSxnQkFBWSxDQUFDLGtCQUFELEVBQXFCLEtBQXJCLENBQVo7QUFDQUEsZ0JBQVksQ0FBQyxhQUFELEVBQWdCLElBQWhCLENBQVo7QUFDQWhCLGVBQVcsR0FBRyxLQUFkO0FBQ0FGLFVBQU0sR0FBRyxLQUFUO0FBQ0FDLGlCQUFhLEdBQUcsS0FBaEI7QUFDQUYsZUFBVyxHQUFHLEtBQWQ7QUFFQWx4QixvREFBQyxDQUFDLHlCQUFELENBQUQsQ0FBNkJteUIsU0FBN0Isa0JBQWlEaGEsSUFBSSxDQUFDN0MsSUFBdEQ7QUFDRCxHQVREO0FBV0FpQyxRQUFNLENBQUN2SixFQUFQLENBQVUsa0JBQVYsRUFBOEIsVUFBQ21LLElBQUQsRUFBVTtBQUN0Q2thLGdCQUFZLENBQUMsa0JBQUQsRUFBcUIsS0FBckIsQ0FBWjtBQUNBQSxnQkFBWSxDQUFDLGFBQUQsRUFBZ0IsSUFBaEIsQ0FBWjtBQUNBQSxnQkFBWSxDQUFDLDBCQUFELEVBQTZCLElBQTdCLENBQVo7QUFDQWhCLGVBQVcsR0FBRyxLQUFkO0FBQ0FGLFVBQU0sR0FBRyxLQUFUO0FBQ0FDLGlCQUFhLEdBQUcsS0FBaEI7QUFDQUYsZUFBVyxHQUFHLEtBQWQ7QUFFQWx4QixvREFBQyxDQUFDLHlCQUFELENBQUQsQ0FBNkJteUIsU0FBN0Isd0JBQXVEaGEsSUFBSSxDQUFDMmEsVUFBNUQ7QUFDRCxHQVZEO0FBWUF2YixRQUFNLENBQUN2SixFQUFQLENBQVUsT0FBVixFQUFtQixZQUFNO0FBQ3ZCcWpCLGVBQVcsR0FBRyxLQUFkO0FBQ0FGLFVBQU0sR0FBRyxLQUFUO0FBQ0FDLGlCQUFhLEdBQUcsS0FBaEI7QUFDQUYsZUFBVyxHQUFHLEtBQWQ7QUFDRCxHQUxELEVBMUs2QixDQWlMN0I7O0FBQ0EzWixRQUFNLENBQUN2SixFQUFQLENBQVUsVUFBVixFQUFzQixZQUFNO0FBQzFCcWtCLGdCQUFZLENBQUMsa0JBQUQsRUFBcUIsS0FBckIsQ0FBWjtBQUNELEdBRkQsRUFsTDZCLENBdUw3Qjs7QUFDQUwsYUFBVyxHQXhMa0IsQ0EwTDdCOztBQUNBLFNBQU9DLGFBQVA7QUFDRDtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxTQUFTSSxZQUFULENBQXNCM2IsRUFBdEIsRUFBMEJ0VyxNQUExQixFQUFrQztBQUNoQyxNQUFJMnlCLE1BQU0sR0FBRy95QixnREFBQyxtQkFBWTBXLEVBQVosRUFBZDs7QUFDQSxNQUFJdFcsTUFBSixFQUFZO0FBQ1YyeUIsVUFBTSxDQUFDcnlCLFNBQVAsQ0FBaUJnckIsR0FBakIsQ0FBcUIsY0FBckI7QUFDRCxHQUZELE1BR0s7QUFDSHFILFVBQU0sQ0FBQ3J5QixTQUFQLENBQWlCc3lCLE1BQWpCLENBQXdCLGNBQXhCO0FBQ0Q7QUFDRjtBQUNEO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxTQUFTQyxpQkFBVCxHQUE2QjtBQUMzQixNQUFJeG5CLGFBQWEsR0FBR3pMLGdEQUFDLENBQUMsaUJBQUQsQ0FBckI7QUFDQXlMLGVBQWEsQ0FBQzFKLEtBQWQsQ0FBb0JDLE9BQXBCLEdBQThCLE1BQTlCO0FBQ0Q7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxTQUFTa3hCLGtCQUFULENBQTRCOXlCLE1BQTVCLEVBQW9DO0FBQ2xDdkcsVUFBUSxDQUFDcTRCLGdCQUFULENBQTBCLGtCQUExQixFQUE4Q25mLE9BQTlDLENBQXNELFVBQUF0YyxHQUFHLEVBQUk7QUFDM0RBLE9BQUcsQ0FBQzZKLFlBQUosQ0FBaUIsZ0JBQWpCLEVBQW1DRixNQUFNLEdBQUcsRUFBSCxHQUFRLE1BQWpEO0FBQ0QsR0FGRDtBQUdEO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsU0FBUyt5QixrQkFBVCxDQUE0Qi95QixNQUE1QixFQUFvQztBQUNsQ3ZHLFVBQVEsQ0FBQ3E0QixnQkFBVCxDQUEwQixrQkFBMUIsRUFBOENuZixPQUE5QyxDQUFzRCxVQUFBdGMsR0FBRyxFQUFJO0FBQzNEQSxPQUFHLENBQUM2SixZQUFKLENBQWlCLGdCQUFqQixFQUFtQ0YsTUFBTSxHQUFHLEVBQUgsR0FBUSxNQUFqRDtBQUNELEdBRkQ7QUFHRDtBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLFNBQVNveUIsT0FBVCxDQUFpQmpiLE1BQWpCLEVBQXlCO0FBQ3ZCeEwscURBQUEsR0FBbUIsQ0FBbkI7QUFDQXNtQixjQUFZLENBQUMsMEJBQUQsRUFBNkIsSUFBN0IsQ0FBWjtBQUNBOWEsUUFBTSxDQUFDNVcsSUFBUCxDQUFZLFNBQVo7QUFDRDtBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsU0FBUyt4QixlQUFULENBQXlCbmIsTUFBekIsRUFBaUNrYixRQUFqQyxFQUEyQztBQUN6QzFtQixxREFBQSxHQUFtQixDQUFuQjtBQUNBd0wsUUFBTSxDQUFDNVcsSUFBUCxDQUFZLFVBQVosRUFBd0I4eEIsUUFBeEI7QUFDRDtBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLFNBQVNGLFdBQVQsQ0FBcUJoYixNQUFyQixFQUE2QnZkLElBQTdCLEVBQW1DOEgsRUFBbkMsRUFBdUM7QUFDckNpSyxtREFBQSxHQUFpQi9SLElBQWpCO0FBQ0F1ZCxRQUFNLENBQUM1VyxJQUFQLENBQVksYUFBWixFQUEyQjNHLElBQTNCO0FBQ0FILFVBQVEsQ0FBQ3E0QixnQkFBVCx5QkFBZ0RuZixPQUFoRCxDQUF3RCxVQUFDdFIsQ0FBRCxFQUFJQyxDQUFKLEVBQVU7QUFDaEVELEtBQUMsQ0FBQzB3QixTQUFGLEdBQWNuNEIsSUFBZDtBQUNELEdBRkQ7QUFHQXE0QixjQUFZLENBQUMsbUJBQUQsRUFBc0IsS0FBdEIsQ0FBWjtBQUNEOztBQUdNLFNBQVNlLGFBQVQsQ0FBdUJ0eEIsRUFBdkIsRUFBMkI7QUFDaEMsTUFBSXV4QixFQUFFLEdBQUdyekIsZ0RBQUMsQ0FBQyxzQkFBRCxDQUFWO0FBQ0FxekIsSUFBRSxDQUFDM3lCLFNBQUgsQ0FBYWdyQixHQUFiLENBQWlCLDJCQUFqQjtBQUNBLE1BQUkxZixNQUFNLEdBQUdxbkIsRUFBRSxDQUFDbnpCLGFBQUgsQ0FBaUIsOEJBQWpCLENBQWI7QUFDQThMLFFBQU0sQ0FBQ21tQixTQUFQLEdBQW1CLENBQW5CO0FBQ0EsTUFBSW1CLFlBQVksR0FBR3I2QixXQUFXLENBQUMsWUFBTTtBQUNuQyxRQUFJZ08sUUFBUSxDQUFDK0UsTUFBTSxDQUFDbW1CLFNBQVIsQ0FBUixHQUE2QixDQUFqQyxFQUFvQztBQUNsQ25tQixZQUFNLENBQUNtbUIsU0FBUCxHQUFtQmxyQixRQUFRLENBQUMrRSxNQUFNLENBQUNtbUIsU0FBUixDQUFSLEdBQTZCLENBQWhEO0FBQ0QsS0FGRCxNQUdLO0FBQ0g1NEIsbUJBQWEsQ0FBQys1QixZQUFELENBQWI7QUFDQTF4Qiw0REFBTyxDQUFDeXhCLEVBQUQsRUFBSyxJQUFMLEVBQVcsWUFBTTtBQUN0QkEsVUFBRSxDQUFDM3lCLFNBQUgsQ0FBYXN5QixNQUFiLENBQW9CLDJCQUFwQjtBQUNELE9BRk0sQ0FBUDtBQUdBbHhCLFFBQUU7QUFDSDtBQUNGLEdBWDZCLEVBVzNCLElBWDJCLENBQTlCO0FBWUQsQzs7Ozs7O1VDdlNEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSw2Q0FBNkMsd0RBQXdELEU7Ozs7O1dDQXJHO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBOztBQUdBLElBQU15VixNQUFNLEdBQUdsVixtQkFBTyxDQUFDLHdFQUFELENBQVAsQ0FBNEIsdUJBQTVCLENBQWY7O0FBRUFtSix3REFBVTtBQUVWLElBQUkrbkIsYUFBYSxHQUFHdEMsMkNBQU0sQ0FBQzFaLE1BQUQsQ0FBMUI7QUFDQSxJQUFJNWQsSUFBSSxHQUFHRCx1REFBVyxFQUF0QjtBQUNBLElBQUk4NUIsYUFBSjtBQUVBRCxhQUFhLENBQUM5N0IsSUFBZCxDQUFtQixZQUFNO0FBQ3ZCa0MsTUFBSSxDQUFDZ0csT0FBTDtBQUNELENBRkQ7QUFJQWhHLElBQUksQ0FBQ29HLE9BQUwsQ0FBYXRJLElBQWIsQ0FBa0IsVUFBQ29JLFFBQUQsRUFBYztBQUM5QjJ6QixlQUFhLEdBQUczekIsUUFBaEI7O0FBQ0FqQyxRQUFNLENBQUNxbUIsRUFBUCxHQUFZLFlBQU07QUFDaEJ1UCxpQkFBYSxDQUFDeDhCLEdBQWQsQ0FBa0IwSixTQUFsQixDQUE0QmdyQixHQUE1QixDQUFnQyxVQUFoQztBQUNBOEgsaUJBQWEsQ0FBQ0MsUUFBZDtBQUNELEdBSEQ7QUFLRCxDQVBEO0FBU0FsYyxNQUFNLENBQUN2SixFQUFQLENBQVUsVUFBVixFQUFzQixZQUFNO0FBQzFCb2xCLG9EQUFhLENBQUMsWUFBTTtBQUNsQkksaUJBQWEsQ0FBQ3g4QixHQUFkLENBQWtCMEosU0FBbEIsQ0FBNEJnckIsR0FBNUIsQ0FBZ0MsVUFBaEM7QUFDQThILGlCQUFhLENBQUM5N0IsU0FBZDtBQUNELEdBSFksQ0FBYjtBQUlELENBTEQ7QUFPQTZmLE1BQU0sQ0FBQ3ZKLEVBQVAsQ0FBVSxZQUFWLEVBQXdCLFlBQU07QUFDNUJ3bEIsZUFBYSxDQUFDeDhCLEdBQWQsQ0FBa0IwSixTQUFsQixDQUE0QnN5QixNQUE1QixDQUFtQyxVQUFuQztBQUNELENBRkQ7QUFJQXpiLE1BQU0sQ0FBQ3ZKLEVBQVAsQ0FBVSxrQkFBVixFQUE4QixZQUFNO0FBQ2xDd2xCLGVBQWEsQ0FBQ3g4QixHQUFkLENBQWtCMEosU0FBbEIsQ0FBNEJzeUIsTUFBNUIsQ0FBbUMsVUFBbkM7QUFDRCxDQUZEO0FBSUF6YixNQUFNLENBQUN2SixFQUFQLENBQVUsT0FBVixFQUFtQixZQUFNO0FBQ3ZCd2xCLGVBQWEsQ0FBQ3g4QixHQUFkLENBQWtCMEosU0FBbEIsQ0FBNEJzeUIsTUFBNUIsQ0FBbUMsVUFBbkM7QUFDRCxDQUZEO0FBSUF6YixNQUFNLENBQUN2SixFQUFQLENBQVUsZ0JBQVYsRUFBNEIsWUFBTTtBQUNoQzBsQixPQUFLLENBQUMsUUFBRCxDQUFMO0FBQ0QsQ0FGRDtBQUlBbmMsTUFBTSxDQUFDdkosRUFBUCxDQUFVLGFBQVYsRUFBeUIsWUFBTTtBQUM3QjBsQixPQUFLLENBQUMsUUFBRCxDQUFMO0FBQ0QsQ0FGRDtBQUlBbmMsTUFBTSxDQUFDdkosRUFBUCxDQUFVLGlCQUFWLEVBQTZCLFlBQU07QUFDakMwbEIsT0FBSyxDQUFDLGtCQUFELENBQUw7QUFDRCxDQUZELEU7Ozs7Ozs7OztBQ3JEQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FudmFzMkRGeEJhc2UsIGJvb3QgfSBmcm9tICcuL2xpYi9iYXNlJztcbmltcG9ydCB7IHN0cm9rZUFuaW1hdGlvbiwgc3dpcmw4Qml0IH0gZnJvbSAnLi9saWIvYW5pbWF0aW9uJztcblxuY29uc3QgREVGQVVMVCA9IHtcbiAgYmdDb2xvcjogJ3JnYmEoMCwwLDAsMSknLFxuXG59XG5cbmV4cG9ydCBjbGFzcyBFbmdpbmUgZXh0ZW5kcyBDYW52YXMyREZ4QmFzZSB7XG4gIGNvbnN0cnVjdG9yKGVsZSwgZGVmYXVsdENvbmZpZywgY29uZmlnKSB7XG4gICAgc3VwZXIoZWxlLCBkZWZhdWx0Q29uZmlnLCBjb25maWcpXG4gICAgdGhpcy5jdXJ0YWluID0ge307XG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuY3VydGFpbiA9IG5ldyBzd2lybDhCaXQodGhpcy5jdHgsIHRoaXMuY3ZzKTtcbiAgICB0aGlzLmNvdXJ0ID0gdGhpcy5nZW5Db3VydCgpO1xuXG4gIH1cblxuICBpbml0UmVzaXppbmcoKSB7XG4gICAgdGhpcy5pc1Jlc2l6aW5nQ2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgfVxuICB9XG5cbiAgZ2VuQ3VydGFpbigpIHtcbiAgICBsZXQgY3VydGFpbiA9IHRoaXMuY3JlYXRlVmlydHVhbENhbnZhcygpO1xuICAgIHJldHVybiBjdXJ0YWluO1xuICB9XG5cbiAgZ2VuQ291cnQoKSB7XG4gICAgbGV0IGNvdXJ0ID0gdGhpcy5jcmVhdGVWaXJ0dWFsQ2FudmFzKCk7XG4gICAgY291cnQuc2V0Q2FudmFzU2l6ZSg3MjAsIDE0NDApO1xuICAgIHJldHVybiBjb3VydDtcbiAgfVxuXG4gIGN1cnRhaW5DYWxsKCkge1xuICAgIHJldHVybiB0aGlzLmN1cnRhaW4uYW5pbWF0ZShmYWxzZSwgNTAsIHRoaXMuY29uZmlnLmJnQ29sb3IpO1xuICB9XG5cbiAgZHJhd0dhbWUoKSB7XG4gICAgbGV0IGN1cnRhaW5DYWxsUHJvbWlzZSA9IHRoaXMuY3VydGFpbkNhbGwoKTtcbiAgICBjdXJ0YWluQ2FsbFByb21pc2VcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZHJhd0NvdXJ0KCk7XG4gICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgIH0pXG4gIH1cblxuICBkcmF3Q291cnQob2Zmc2V0UGVyY2VudCA9IDgsIGJhbmRXaWR0aCA9IDIwLCBjb2xvciA9ICd3aGl0ZScpIHtcbiAgICBsZXQgcHJvbWlzZVRyaWdnZXI7XG4gICAgbGV0IGRyYXdDb3VydFByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcbiAgICAgIHByb21pc2VUcmlnZ2VyID0gcmVzO1xuICAgIH0pXG4gICAgbGV0IHZlcnRpY2VzID0gW1xuICAgICAgeyB4OiAwLCB5OiAwIH0sXG4gICAgICB7IHg6IHRoaXMuY291cnQuY3ZzLndpZHRoLCB5OiAwIH0sXG4gICAgICB7IHg6IHRoaXMuY291cnQuY3ZzLndpZHRoLCB5OiB0aGlzLmNvdXJ0LmN2cy5oZWlnaHQgfSxcbiAgICAgIHsgeDogMCwgeTogdGhpcy5jb3VydC5jdnMuaGVpZ2h0IH0sXG4gICAgICB7IHg6IDAsIHk6IDAgfVxuICAgIF1cblxuICAgIGxldCBjdnNBc3BlY3RSYXRpbyA9IHRoaXMuY3ZzLndpZHRoIC8gdGhpcy5jdnMuaGVpZ2h0O1xuICAgIGlmIChjdnNBc3BlY3RSYXRpbyA+PSAxKSB7XG4gICAgICBsZXQgY291cnRXaWR0aCA9IHRoaXMuY3ZzLndpZHRoICogKDEwMCAtIG9mZnNldFBlcmNlbnQgKiAyKSAvIDEwMDtcbiAgICAgIGxldCBjb3VydEhlaWdodCA9IGNvdXJ0V2lkdGggLyAyO1xuICAgICAgbGV0IGNvdXJ0T2Zmc2V0ID0gdGhpcy5jdnMud2lkdGggKiBvZmZzZXRQZXJjZW50IC8gMTAwO1xuICAgICAgdGhpcy5jdHgudHJhbnNsYXRlKGNvdXJ0T2Zmc2V0LCB0aGlzLmN2cy5oZWlnaHQgKiAwLjUgKyBjb3VydEhlaWdodCAqIDAuNSlcbiAgICAgIHRoaXMuY3R4LnJvdGF0ZSgtTWF0aC5QSSAvIDIpO1xuICAgIH1cbiAgICBlbHNlIHtcblxuICAgIH1cblxuICAgIGxldCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmNvdXJ0LmN2cywgMCwgMCwgdGhpcy5jdnMud2lkdGggKiAoKDEwMCAtIDIgKiBvZmZzZXRQZXJjZW50KSAvIDEwMCkgLyAyLCB0aGlzLmN2cy53aWR0aCAqICgoMTAwIC0gMiAqIG9mZnNldFBlcmNlbnQpIC8gMTAwKSk7XG4gICAgfSwgMzApXG5cbiAgICBsZXQgY291cnRPcGVuaW5nQW5pbWF0aW9uUHJvbWlzZSA9IG5ldyBzdHJva2VBbmltYXRpb24odGhpcy5jb3VydC5jdHgsIHZlcnRpY2VzKS5hbmltYXRlKGJhbmRXaWR0aCwgY29sb3IpO1xuICAgIGNvdXJ0T3BlbmluZ0FuaW1hdGlvblByb21pc2UudGhlbigoKSA9PiB7XG4gICAgICBsZXQgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICBwcm9taXNlVHJpZ2dlcigpO1xuICAgICAgfSwgNTAwKVxuICAgIH0pXG5cblxuXG4gICAgcmV0dXJuIGRyYXdDb3VydFByb21pc2U7XG4gIH1cblxuICBkcmF3KCkge1xuXG5cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2FtZUJ1aWxkZXIoKSB7XG4gIGxldCBnYW1lID0gYm9vdChFbmdpbmUsIERFRkFVTFQsIHt9LCBkb2N1bWVudC5ib2R5KTtcbiAgcmV0dXJuIGdhbWU7XG59XG4iLCJpbXBvcnQgeyByYW5kb21XaXRoaW5SYW5nZSwgY2FsY1dheXBvaW50cyB9IGZyb20gJy4vZnVuY3Rpb24nXG5pbXBvcnQgJ3BhdGgyZC1wb2x5ZmlsbCc7XG5cbmV4cG9ydCBjbGFzcyBzd2lybDhCaXQge1xuICBjb25zdHJ1Y3RvcihjdHgsIGN2cykge1xuICAgIHRoaXMuY291bnRlckNsb2Nrd2lzZUFyciA9IFtcbiAgICAgIHsgbmFtZTogJ3RsJywgeDogMCwgeTogMCB9LFxuICAgICAgeyBuYW1lOiAnYmwnLCB4OiAwLCB5OiAxIH0sXG4gICAgICB7IG5hbWU6ICdicicsIHg6IDEsIHk6IDEgfSxcbiAgICAgIHsgbmFtZTogJ3RyJywgeDogMSwgeTogMCB9XG4gICAgXVxuICAgIHRoaXMuY2xvY2t3aXNlQXJyID0gW1xuICAgICAgeyBuYW1lOiAndHInLCB4OiAxLCB5OiAwIH0sXG4gICAgICB7IG5hbWU6ICdicicsIHg6IDEsIHk6IDEgfSxcbiAgICAgIHsgbmFtZTogJ2JsJywgeDogMCwgeTogMSB9LFxuICAgICAgeyBuYW1lOiAndGwnLCB4OiAwLCB5OiAwIH1cbiAgICBdXG4gICAgdGhpcy5jdHggPSBjdHg7XG4gICAgdGhpcy5jdnMgPSBjdnM7XG4gICAgdGhpcy5hbmltYXRpb25FbmRUcmlnZ2VyO1xuICAgIHRoaXMub3JkZXIgPSAwO1xuICAgIHRoaXMuYmFuZFdpZHRoU3RhY2sgPSAwO1xuICB9XG4gIGluaXQoKSB7XG5cbiAgfVxuICBnZXRTdGFydExvY2F0aW9uKGNsb2Nrd2lzZSwgb3JkZXIsIHRvdGFsV2lkdGgsIHRvdGFsSGVpZ2h0KSB7XG4gICAgbGV0IGRpcmVjdGlvbkFyciA9IGNsb2Nrd2lzZSA/IHRoaXMuY2xvY2t3aXNlQXJyIDogdGhpcy5jb3VudGVyQ2xvY2t3aXNlQXJyO1xuXG4gICAgbGV0IGxvY2F0aW9uID0ge1xuICAgICAgbmFtZTogZGlyZWN0aW9uQXJyW29yZGVyXS5uYW1lLFxuICAgICAgeDogZGlyZWN0aW9uQXJyW29yZGVyXS54ICogdG90YWxXaWR0aCArIHRoaXMuYmFuZFdpZHRoU3RhY2ssXG4gICAgICB5OiBkaXJlY3Rpb25BcnJbb3JkZXJdLnkgKiB0b3RhbEhlaWdodCArIHRoaXMuYmFuZFdpZHRoU3RhY2tcbiAgICB9XG4gICAgcmV0dXJuIGxvY2F0aW9uO1xuICB9XG4gIGFuaW1hdGUoY2xvY2t3aXNlID0gZmFsc2UsIGJhbmRXaWR0aCA9IDIwLCBjb2xvciA9ICdyZ2JhKDAsMCwwLDEpJykge1xuICAgIGxldCAkdGhpcyA9IHRoaXM7XG4gICAgbGV0IGFuaW1hdGlvblByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcbiAgICAgIHRoaXMuYW5pbWF0aW9uRW5kVHJpZ2dlciA9IHJlcztcbiAgICB9KVxuICAgIGxldCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICR0aGlzLmRyYVdSYW5kb21BbmdsZWRCYW5kKFxuICAgICAgICBiYW5kV2lkdGgsXG4gICAgICAgIHRoaXMuY3ZzLndpZHRoIC0gMiAqICR0aGlzLmJhbmRXaWR0aFN0YWNrLFxuICAgICAgICB0aGlzLmN2cy5oZWlnaHQgLSAyICogJHRoaXMuYmFuZFdpZHRoU3RhY2ssXG4gICAgICAgICR0aGlzLmdldFN0YXJ0TG9jYXRpb24oY2xvY2t3aXNlLCAkdGhpcy5vcmRlciwgdGhpcy5jdnMud2lkdGggLSAyICogJHRoaXMuYmFuZFdpZHRoU3RhY2ssIHRoaXMuY3ZzLmhlaWdodCAtIDIgKiAkdGhpcy5iYW5kV2lkdGhTdGFjayksXG4gICAgICAgIGNvbG9yLFxuICAgICAgICBjbG9ja3dpc2VcbiAgICAgICk7XG4gICAgICBpZiAodGhpcy5jdnMud2lkdGggLSAyICogJHRoaXMuYmFuZFdpZHRoU3RhY2sgPiAwICYmIHRoaXMuY3ZzLmhlaWdodCAtIDIgKiAkdGhpcy5iYW5kV2lkdGhTdGFjayA+IDApIHtcblxuICAgICAgICBpZiAoJHRoaXMub3JkZXIgPCAzKSB7XG4gICAgICAgICAgJHRoaXMub3JkZXIrK1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICR0aGlzLm9yZGVyID0gMDtcbiAgICAgICAgICAkdGhpcy5iYW5kV2lkdGhTdGFjayArPSBiYW5kV2lkdGg7XG5cbiAgICAgICAgfVxuXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uRW5kVHJpZ2dlcigpO1xuICAgICAgfVxuXG4gICAgfSwgMzApXG5cbiAgICByZXR1cm4gYW5pbWF0aW9uUHJvbWlzZTtcbiAgfVxuICBkcmFXUmFuZG9tQW5nbGVkQmFuZChiYW5kV2lkdGgsIHdpZHRoLCBoZWlnaHQsIHBvaW50LCBjb2xvciwgY2xvY2t3aXNlKSB7XG4gICAgdGhpcy5jdHguc2F2ZSgpO1xuICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgIGlmIChwb2ludC5uYW1lID09PSAndGwnKSB7XG4gICAgICB0aGlzLmRyYXdBbmdsZWRCYW5kRnJvbVRMKGJhbmRXaWR0aCwgd2lkdGgsIGhlaWdodCwgcG9pbnQsIGNsb2Nrd2lzZSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHBvaW50Lm5hbWUgPT09ICdibCcpIHtcbiAgICAgIHRoaXMuZHJhd0FuZ2xlZEJhbmRGcm9tQkwoYmFuZFdpZHRoLCB3aWR0aCwgaGVpZ2h0LCBwb2ludCwgY2xvY2t3aXNlKTtcbiAgICB9XG4gICAgZWxzZSBpZiAocG9pbnQubmFtZSA9PT0gJ2JyJykge1xuICAgICAgdGhpcy5kcmF3QW5nbGVkQmFuZEZyb21CUihiYW5kV2lkdGgsIHdpZHRoLCBoZWlnaHQsIHBvaW50LCBjbG9ja3dpc2UpO1xuICAgIH1cbiAgICBlbHNlIGlmIChwb2ludC5uYW1lID09PSAndHInKSB7XG4gICAgICB0aGlzLmRyYXdBbmdsZWRCYW5kRnJvbVRSKGJhbmRXaWR0aCwgd2lkdGgsIGhlaWdodCwgcG9pbnQsIGNsb2Nrd2lzZSk7XG4gICAgfVxuICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICB0aGlzLmN0eC5yZXN0b3JlKCk7XG4gIH1cbiAgZHJhd0FuZ2xlZEJhbmRGcm9tVEwoYmFuZFdpZHRoLCB3aWR0aCwgaGVpZ2h0LCBwb2ludCwgY2xvY2t3aXNlKSB7XG4gICAgdGhpcy5jdHgubW92ZVRvKHBvaW50LngsIHBvaW50LnkpO1xuICAgIGlmIChjbG9ja3dpc2UpIHtcbiAgICAgIGxldCByYW5kb21IZWlnaHQgPSByYW5kb21XaXRoaW5SYW5nZSgwLjUgKiBoZWlnaHQsIDAuOSAqIGhlaWdodCk7XG4gICAgICB0aGlzLmN0eC5saW5lVG8ocG9pbnQueCArIHdpZHRoLCBwb2ludC55KTtcbiAgICAgIHRoaXMuY3R4LmxpbmVUbyhwb2ludC54ICsgd2lkdGgsIHBvaW50LnkgKyByYW5kb21IZWlnaHQpO1xuICAgICAgdGhpcy5jdHgubGluZVRvKHBvaW50LnggKyB3aWR0aCAtIGJhbmRXaWR0aCwgcG9pbnQueSArIHJhbmRvbUhlaWdodCk7XG4gICAgICB0aGlzLmN0eC5saW5lVG8ocG9pbnQueCArIHdpZHRoIC0gYmFuZFdpZHRoLCBwb2ludC55ICsgYmFuZFdpZHRoKTtcbiAgICAgIHRoaXMuY3R4LmxpbmVUbyhwb2ludC54LCBwb2ludC55ICsgYmFuZFdpZHRoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBsZXQgcmFuZG9tV2lkdGggPSByYW5kb21XaXRoaW5SYW5nZSgwLjUgKiB3aWR0aCwgMC45ICogd2lkdGgpO1xuICAgICAgdGhpcy5jdHgubGluZVRvKHBvaW50LnggKyBiYW5kV2lkdGgsIHBvaW50LnkpO1xuICAgICAgdGhpcy5jdHgubGluZVRvKHBvaW50LnggKyBiYW5kV2lkdGgsIHBvaW50LnkgKyBoZWlnaHQgLSBiYW5kV2lkdGgpO1xuICAgICAgdGhpcy5jdHgubGluZVRvKHBvaW50LnggKyByYW5kb21XaWR0aCwgcG9pbnQueSArIGhlaWdodCAtIGJhbmRXaWR0aCk7XG4gICAgICB0aGlzLmN0eC5saW5lVG8ocG9pbnQueCArIHJhbmRvbVdpZHRoLCBwb2ludC55ICsgaGVpZ2h0KTtcbiAgICAgIHRoaXMuY3R4LmxpbmVUbyhwb2ludC54LCBwb2ludC55ICsgaGVpZ2h0KTtcbiAgICB9XG4gIH1cbiAgZHJhd0FuZ2xlZEJhbmRGcm9tQkwoYmFuZFdpZHRoLCB3aWR0aCwgaGVpZ2h0LCBwb2ludCwgY2xvY2t3aXNlKSB7XG4gICAgdGhpcy5jdHgubW92ZVRvKHBvaW50LngsIHBvaW50LnkpO1xuICAgIGlmIChjbG9ja3dpc2UpIHtcbiAgICAgIGxldCByYW5kb21XaWR0aCA9IHJhbmRvbVdpdGhpblJhbmdlKDAuNSAqIHdpZHRoLCAwLjkgKiB3aWR0aCk7XG4gICAgICB0aGlzLmN0eC5saW5lVG8ocG9pbnQueCArIGJhbmRXaWR0aCwgcG9pbnQueSk7XG4gICAgICB0aGlzLmN0eC5saW5lVG8ocG9pbnQueCArIGJhbmRXaWR0aCwgcG9pbnQueSAtIGhlaWdodCArIGJhbmRXaWR0aCk7XG4gICAgICB0aGlzLmN0eC5saW5lVG8ocG9pbnQueCArIHJhbmRvbVdpZHRoLCBwb2ludC55IC0gaGVpZ2h0ICsgYmFuZFdpZHRoKTtcbiAgICAgIHRoaXMuY3R4LmxpbmVUbyhwb2ludC54ICsgcmFuZG9tV2lkdGgsIHBvaW50LnkgLSBoZWlnaHQpO1xuICAgICAgdGhpcy5jdHgubGluZVRvKHBvaW50LngsIHBvaW50LnkgLSBoZWlnaHQpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGxldCByYW5kb21IZWlnaHQgPSByYW5kb21XaXRoaW5SYW5nZSgwLjUgKiBoZWlnaHQsIDAuOSAqIGhlaWdodCk7XG4gICAgICB0aGlzLmN0eC5saW5lVG8ocG9pbnQueCwgcG9pbnQueSAtIGJhbmRXaWR0aCk7XG4gICAgICB0aGlzLmN0eC5saW5lVG8ocG9pbnQueCArIHdpZHRoIC0gYmFuZFdpZHRoLCBwb2ludC55IC0gYmFuZFdpZHRoKTtcbiAgICAgIHRoaXMuY3R4LmxpbmVUbyhwb2ludC54ICsgd2lkdGggLSBiYW5kV2lkdGgsIHBvaW50LnkgLSByYW5kb21IZWlnaHQpO1xuICAgICAgdGhpcy5jdHgubGluZVRvKHBvaW50LnggKyB3aWR0aCwgcG9pbnQueSAtIHJhbmRvbUhlaWdodCk7XG4gICAgICB0aGlzLmN0eC5saW5lVG8ocG9pbnQueCArIHdpZHRoLCBwb2ludC55KTtcbiAgICB9XG4gIH1cbiAgZHJhd0FuZ2xlZEJhbmRGcm9tQlIoYmFuZFdpZHRoLCB3aWR0aCwgaGVpZ2h0LCBwb2ludCwgY2xvY2t3aXNlKSB7XG4gICAgdGhpcy5jdHgubW92ZVRvKHBvaW50LngsIHBvaW50LnkpO1xuICAgIGlmIChjbG9ja3dpc2UpIHtcbiAgICAgIGxldCByYW5kb21IZWlnaHQgPSByYW5kb21XaXRoaW5SYW5nZSgwLjUgKiBoZWlnaHQsIDAuOSAqIGhlaWdodCk7XG4gICAgICB0aGlzLmN0eC5saW5lVG8ocG9pbnQueCwgcG9pbnQueSAtIGJhbmRXaWR0aCk7XG4gICAgICB0aGlzLmN0eC5saW5lVG8ocG9pbnQueCAtIHdpZHRoICsgYmFuZFdpZHRoLCBwb2ludC55IC0gYmFuZFdpZHRoKTtcbiAgICAgIHRoaXMuY3R4LmxpbmVUbyhwb2ludC54IC0gd2lkdGggKyBiYW5kV2lkdGgsIHBvaW50LnkgLSByYW5kb21IZWlnaHQpO1xuICAgICAgdGhpcy5jdHgubGluZVRvKHBvaW50LnggLSB3aWR0aCwgcG9pbnQueSAtIHJhbmRvbUhlaWdodCk7XG4gICAgICB0aGlzLmN0eC5saW5lVG8ocG9pbnQueCAtIHdpZHRoLCBwb2ludC55KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBsZXQgcmFuZG9tV2lkdGggPSByYW5kb21XaXRoaW5SYW5nZSgwLjUgKiB3aWR0aCwgMC45ICogd2lkdGgpO1xuICAgICAgdGhpcy5jdHgubGluZVRvKHBvaW50LnggLSBiYW5kV2lkdGgsIHBvaW50LnkpO1xuICAgICAgdGhpcy5jdHgubGluZVRvKHBvaW50LnggLSBiYW5kV2lkdGgsIHBvaW50LnkgLSBoZWlnaHQgKyBiYW5kV2lkdGgpO1xuICAgICAgdGhpcy5jdHgubGluZVRvKHBvaW50LnggLSByYW5kb21XaWR0aCwgcG9pbnQueSAtIGhlaWdodCArIGJhbmRXaWR0aCk7XG4gICAgICB0aGlzLmN0eC5saW5lVG8ocG9pbnQueCAtIHJhbmRvbVdpZHRoLCBwb2ludC55IC0gaGVpZ2h0KTtcbiAgICAgIHRoaXMuY3R4LmxpbmVUbyhwb2ludC54LCBwb2ludC55IC0gaGVpZ2h0KTtcbiAgICB9XG4gIH1cbiAgZHJhd0FuZ2xlZEJhbmRGcm9tVFIoYmFuZFdpZHRoLCB3aWR0aCwgaGVpZ2h0LCBwb2ludCwgY2xvY2t3aXNlKSB7XG4gICAgdGhpcy5jdHgubW92ZVRvKHBvaW50LngsIHBvaW50LnkpO1xuICAgIGlmIChjbG9ja3dpc2UpIHtcbiAgICAgIGxldCByYW5kb21XaWR0aCA9IHJhbmRvbVdpdGhpblJhbmdlKDAuNSAqIHdpZHRoLCAwLjkgKiB3aWR0aCk7XG4gICAgICB0aGlzLmN0eC5saW5lVG8ocG9pbnQueCAtIGJhbmRXaWR0aCwgcG9pbnQueSk7XG4gICAgICB0aGlzLmN0eC5saW5lVG8ocG9pbnQueCAtIGJhbmRXaWR0aCwgcG9pbnQueSArIGhlaWdodCAtIGJhbmRXaWR0aCk7XG4gICAgICB0aGlzLmN0eC5saW5lVG8ocG9pbnQueCAtIHJhbmRvbVdpZHRoLCBwb2ludC55ICsgaGVpZ2h0IC0gYmFuZFdpZHRoKTtcbiAgICAgIHRoaXMuY3R4LmxpbmVUbyhwb2ludC54IC0gcmFuZG9tV2lkdGgsIHBvaW50LnkgKyBoZWlnaHQpO1xuICAgICAgdGhpcy5jdHgubGluZVRvKHBvaW50LngsIHBvaW50LnkgKyBoZWlnaHQpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGxldCByYW5kb21IZWlnaHQgPSByYW5kb21XaXRoaW5SYW5nZSgwLjUgKiBoZWlnaHQsIDAuOSAqIGhlaWdodCk7XG4gICAgICB0aGlzLmN0eC5saW5lVG8ocG9pbnQueCwgcG9pbnQueSArIGJhbmRXaWR0aCk7XG4gICAgICB0aGlzLmN0eC5saW5lVG8ocG9pbnQueCAtIHdpZHRoICsgYmFuZFdpZHRoLCBwb2ludC55ICsgYmFuZFdpZHRoKTtcbiAgICAgIHRoaXMuY3R4LmxpbmVUbyhwb2ludC54IC0gd2lkdGggKyBiYW5kV2lkdGgsIHBvaW50LnkgKyByYW5kb21IZWlnaHQpO1xuICAgICAgdGhpcy5jdHgubGluZVRvKHBvaW50LnggLSB3aWR0aCwgcG9pbnQueSArIHJhbmRvbUhlaWdodCk7XG4gICAgICB0aGlzLmN0eC5saW5lVG8ocG9pbnQueCAtIHdpZHRoLCBwb2ludC55KTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIHN0cm9rZUFuaW1hdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGN0eCwgdmVydGljZXMpIHtcbiAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICB0aGlzLndheXBvaW50cyA9IGNhbGNXYXlwb2ludHModmVydGljZXMpO1xuICB9XG5cbiAgYW5pbWF0ZShiYW5kV2lkdGggPSAyMCwgY29sb3IgPSAncmdiYSgwLDAsMCwxKScpIHtcbiAgICBsZXQgYW5pbWF0aW9uUHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xuICAgICAgdGhpcy5hbmltYXRpb25FbmRUcmlnZ2VyID0gcmVzO1xuICAgICAgdGhpcy5sb29waW5nRHJhd1N0cm9rZShiYW5kV2lkdGgsIGNvbG9yKTtcbiAgICB9KVxuXG4gICAgcmV0dXJuIGFuaW1hdGlvblByb21pc2U7XG4gIH1cblxuICBsb29waW5nRHJhd1N0cm9rZShiYW5kV2lkdGgsIGNvbG9yID0gJ3doaXRlJywgZnBzID0gNjApIHtcbiAgICBsZXQgY291bnRlciA9IDA7XG4gICAgbGV0ICR0aGlzID0gdGhpcztcbiAgICB0aGlzLmN0eC5zYXZlKCk7XG4gICAgdGhpcy5jdHgubGluZUNhcCA9ICdyb3VuZCdcbiAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IGNvbG9yO1xuICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IGJhbmRXaWR0aDtcbiAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICBsZXQgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBpZiAoY291bnRlciA8ICR0aGlzLndheXBvaW50cy5sZW5ndGggLSAxKSB7XG4gICAgICAgICR0aGlzLmN0eC5tb3ZlVG8oJHRoaXMud2F5cG9pbnRzW2NvdW50ZXJdLngsICR0aGlzLndheXBvaW50c1tjb3VudGVyXS55KTtcbiAgICAgICAgJHRoaXMuY3R4LmxpbmVUbygkdGhpcy53YXlwb2ludHNbY291bnRlciArIDFdLngsICR0aGlzLndheXBvaW50c1tjb3VudGVyICsgMV0ueSk7XG4gICAgICAgICR0aGlzLmN0eC5zdHJva2UoKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgJHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAkdGhpcy5jdHgucmVzdG9yZSgpO1xuICAgICAgICAkdGhpcy5hbmltYXRpb25FbmRUcmlnZ2VyKCk7XG4gICAgICB9XG4gICAgICBjb3VudGVyKys7XG4gICAgfSwgMTAwMCAvIGZwcylcbiAgfVxufVxuIiwiaW1wb3J0IHsgZGVib3VuY2UsIGlzLCBwb2ludGVyRXZlbnRUb1hZIH0gZnJvbSAnLi9mdW5jdGlvbic7XG5cbmV4cG9ydCBjbGFzcyBDYW52YXMyREZ4QmFzZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIGVsZSwgY29uZmlnID0ge30sIGRlZmF1bHRDb25maWcgPSB7fSwgdmlydHVhbFBhcmVudFxuICApIHtcbiAgICBjb25maWcgPSBpcy5vYmooY29uZmlnKSA/IGNvbmZpZyA6IHt9O1xuICAgIGRlZmF1bHRDb25maWcgPSBpcy5vYmooZGVmYXVsdENvbmZpZykgPyBkZWZhdWx0Q29uZmlnIDoge307XG4gICAgdGhpcy5jb25maWcgPSBPYmplY3QuYXNzaWduKGRlZmF1bHRDb25maWcsIGNvbmZpZyk7XG4gICAgdGhpcy5lbGUgPSBlbGU7XG4gICAgdGhpcy5mcmFtZUNvdW50ID0gMDtcbiAgICB0aGlzLm1vdXNlID0ge1xuICAgICAgeDogMCxcbiAgICAgIHk6IDBcbiAgICB9O1xuICAgIHRoaXMudmlydHVhbFBhcmVudCA9IHZpcnR1YWxQYXJlbnQ7XG4gICAgdGhpcy5jdHggPSBudWxsO1xuICAgIHRoaXMuZnJhbWVJc1BhdXNlZCA9IGZhbHNlO1xuICAgIHRoaXMuaXNDbGljayA9IGZhbHNlO1xuICAgIHRoaXMuY2FudmFzU2l6ZWZpeGVkID0gZmFsc2U7XG4gICAgdGhpcy5wcmV2aW91c0ZyYW1lVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIHRoaXMuaXNSZXNpemluZyA9IGZhbHNlO1xuICAgIHRoaXMuaXNSZXNpemluZ0NhbGxiYWNrID0gKCkgPT4geyB9O1xuICAgIHRoaXMucmVzaXplZENhbGxiYWNrID0gKCkgPT4geyB9O1xuICAgIHRoaXMuaW5pdEJhc2UoKTtcbiAgfVxuICBpbml0QmFzZSgpIHtcblxuICAgIGlmICh0aGlzLmVsZS50YWdOYW1lICE9PSAnQ0FOVkFTJykge1xuICAgICAgY29uc3QgY3ZzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG5cbiAgICAgIHRoaXMuZWxlLmFwcGVuZENoaWxkKGN2cyk7XG5cbiAgICAgIHRoaXMuY3ZzID0gY3ZzO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuY3ZzID0gdGhpcy5lbGU7XG4gICAgfVxuXG4gICAgdGhpcy5jdHggPSB0aGlzLmN2cy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIHRoaXMudHJpZ2dlclJlc2l6aW5nTWVjaGFuaXNtKCk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgICAgdGhpcy5pc1Jlc2l6aW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuaXNSZXNpemluZ0NhbGxiYWNrKCk7XG4gICAgfSk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZGVib3VuY2UoKCkgPT4ge1xuICAgICAgdGhpcy5pc1Jlc2l6aW5nID0gZmFsc2U7XG4gICAgICB0aGlzLnRyaWdnZXJSZXNpemluZ01lY2hhbmlzbSgpO1xuICAgICAgdGhpcy5yZXNpemVkQ2FsbGJhY2soKTtcbiAgICB9LCA1MDApKTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd2aXNpYmlsaXR5Y2hhbmdlJywgKCkgPT4ge1xuICAgICAgaWYgKGRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZSAhPT0gXCJ2aXNpYmxlXCIpIHtcbiAgICAgICAgdGhpcy5mcmFtZUlzUGF1c2VkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuYWRkRXZlbnRIYW5kbGVyKCk7XG5cbiAgICB0aGlzLnJlZnJlc2hCYXNlRnJhbWVDb3VudGVyKCk7XG5cbiAgfVxuICByZWZyZXNoQmFzZUZyYW1lQ291bnRlcigpIHtcbiAgICBsZXQgdGhpc0ZyYW1lVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIHRoaXMudGltZUVsYXBzZWQgPSAodGhpc0ZyYW1lVGltZSAtIHRoaXMucHJldmlvdXNGcmFtZVRpbWUpIC8gMTAwMDtcbiAgICBpZiAodGhpcy5mcmFtZUlzUGF1c2VkKSB7XG4gICAgICB0aGlzLnRpbWVFbGFwc2VkID0gMDtcbiAgICAgIHRoaXMuZnJhbWVJc1BhdXNlZCA9IGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLmZyYW1lQ291bnQgKz0gMTtcbiAgICB0aGlzLnByZXZpb3VzRnJhbWVUaW1lID0gdGhpc0ZyYW1lVGltZVxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICB0aGlzLnJlZnJlc2hCYXNlRnJhbWVDb3VudGVyKCk7XG4gICAgfSlcbiAgfVxuXG4gIHZpcnR1YWxQYXJlbnRWYWxpZGF0aW9uKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5ib2R5LmNvbnRhaW5zKHRoaXMudmlydHVhbFBhcmVudCkgfHwgdGhpcy52aXJ0dWFsUGFyZW50ID09PSBkb2N1bWVudC5ib2R5O1xuICB9XG5cbiAgdHJpZ2dlclJlc2l6aW5nTWVjaGFuaXNtKCkge1xuICAgIGlmICh0aGlzLmNhbnZhc1NpemVmaXhlZCkgcmV0dXJuO1xuICAgIGxldCBjYWNoZUN2cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIGxldCBjYWNoZUN2c0NvbnRleHQgPSBjYWNoZUN2cy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGNhY2hlQ3ZzLndpZHRoID0gdGhpcy5jdnMud2lkdGg7XG4gICAgY2FjaGVDdnMuaGVpZ2h0ID0gdGhpcy5jdnMuaGVpZ2h0O1xuXG5cbiAgICBsZXQgY2FudmFzSW1hZ2VEYXRhQmVmb3JlUmVzaXplID0gY2FudmFzSW1hZ2VEYXRhQmVmb3JlUmVzaXplID0gdGhpcy5jdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIHRoaXMuY3ZzLndpZHRoLCB0aGlzLmN2cy5oZWlnaHQpO1xuICAgIGlmICh0aGlzLmVsZS50YWdOYW1lICE9PSAnQ0FOVkFTJykge1xuICAgICAgbGV0IGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQ7XG4gICAgICBpZiAodGhpcy52aXJ0dWFsUGFyZW50VmFsaWRhdGlvbigpKSB7XG4gICAgICAgIGNhbnZhc1dpZHRoID0gdGhpcy52aXJ0dWFsUGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICAgICAgICBjYW52YXNIZWlnaHQgPSB0aGlzLnZpcnR1YWxQYXJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNhbnZhc1dpZHRoID0gdGhpcy5lbGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gICAgICAgIGNhbnZhc0hlaWdodCA9IHRoaXMuZWxlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcbiAgICAgIH1cblxuICAgICAgdGhpcy5jdnMud2lkdGggPSBjYW52YXNXaWR0aDtcbiAgICAgIHRoaXMuY3ZzLmhlaWdodCA9IGNhbnZhc0hlaWdodDtcblxuICAgICAgY2FjaGVDdnNDb250ZXh0LnB1dEltYWdlRGF0YShjYW52YXNJbWFnZURhdGFCZWZvcmVSZXNpemUsIDAsIDApO1xuICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKGNhY2hlQ3ZzLCAwLCAwLCBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0KTtcblxuXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgbGV0IGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQ7XG4gICAgICBpZiAodGhpcy52aXJ0dWFsUGFyZW50VmFsaWRhdGlvbigpKSB7XG4gICAgICAgIGNhbnZhc1dpZHRoID0gdGhpcy52aXJ0dWFsUGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICAgICAgICBjYW52YXNIZWlnaHQgPSB0aGlzLnZpcnR1YWxQYXJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNhbnZhc1dpZHRoID0gdGhpcy5jdnMucGFyZW50RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcbiAgICAgICAgY2FudmFzSGVpZ2h0ID0gdGhpcy5jdnMucGFyZW50RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG4gICAgICB9XG4gICAgICB0aGlzLmN2cy53aWR0aCA9IGNhbnZhc1dpZHRoO1xuICAgICAgdGhpcy5jdnMuaGVpZ2h0ID0gY2FudmFzSGVpZ2h0O1xuXG4gICAgICBjYWNoZUN2c0NvbnRleHQucHV0SW1hZ2VEYXRhKGNhbnZhc0ltYWdlRGF0YUJlZm9yZVJlc2l6ZSwgMCwgMCk7XG4gICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoY2FjaGVDdnMsIDAsIDAsIGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQpO1xuXG4gICAgfVxuXG4gICAgY2FjaGVDdnMgPSB1bmRlZmluZWQ7XG4gICAgY2FjaGVDdnNDb250ZXh0ID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgc2V0Q2FudmFzU2l6ZSh3aWR0aCwgaGVpZ2h0KSB7XG4gICAgdGhpcy5jYW52YXNTaXplZml4ZWQgPSB0cnVlO1xuICAgIHRoaXMuY3ZzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5jdnMuaGVpZ2h0ID0gaGVpZ2h0O1xuICB9XG5cbiAgYmFja2dyb3VuZChjb2xvcikge1xuICAgIHRoaXMuY3R4LnNhdmUoKTtcbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICB0aGlzLmN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLmN2cy53aWR0aCwgdGhpcy5jdnMuaGVpZ2h0KTtcbiAgICB0aGlzLmN0eC5yZXN0b3JlKCk7XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jdnMud2lkdGgsIHRoaXMuY3ZzLmhlaWdodCk7XG4gIH1cblxuICBhZGRFdmVudEhhbmRsZXIoKSB7XG5cbiAgICB0aGlzLmN2cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMuaXNDbGljayA9IHRydWU7XG4gICAgfSlcbiAgICB0aGlzLmN2cy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgKCkgPT4ge1xuICAgICAgdGhpcy5pc0NsaWNrID0gdHJ1ZTtcblxuICAgIH0pXG5cbiAgICB0aGlzLmN2cy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZSkgPT4ge1xuICAgICAgbGV0IHBvcyA9IHBvaW50ZXJFdmVudFRvWFkoZSk7XG4gICAgICB0aGlzLm1vdXNlID0ge1xuICAgICAgICB4OiBwb3MueCxcbiAgICAgICAgeTogcG9zLnlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5jdnMuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgKGUpID0+IHtcbiAgICAgIGxldCBwb3MgPSBwb2ludGVyRXZlbnRUb1hZKGUpO1xuICAgICAgdGhpcy5tb3VzZSA9IHtcbiAgICAgICAgeDogcG9zLngsXG4gICAgICAgIHk6IHBvcy55XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGNyZWF0ZVZpcnR1YWxDYW52YXMoKSB7XG4gICAgbGV0IHZjdnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICBsZXQgdmN2c0luc3RhbmNlID0gbmV3IENhbnZhczJERnhCYXNlKHZjdnMsIHt9LCB7fSwgdGhpcy5lbGUpO1xuICAgIHJldHVybiB2Y3ZzSW5zdGFuY2U7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvb3QoY3RvciwgZGVmYXVsdENvbmZpZywgY29uZmlnLCB0YXJnZXRFbGUsIHZpcnR1YWxQYXJlbnQpIHtcbiAgbGV0IGN2cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcbiAgY3ZzID0gY3ZzID8gY3ZzIDogZG9jdW1lbnQuYm9keTtcbiAgbGV0IGVsZSA9IHRhcmdldEVsZSA/IHRhcmdldEVsZSA6IGN2cztcbiAgbGV0IHRyaWdnZXI7XG4gIGxldCBib290UHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xuICAgIHRyaWdnZXIgPSAoKSA9PiB7XG4gICAgICBsZXQgaW5zdGFuY2UgPSBuZXcgY3RvcihlbGUsIGNvbmZpZywgZGVmYXVsdENvbmZpZywgdmlydHVhbFBhcmVudCk7XG4gICAgICByZXMoaW5zdGFuY2UpO1xuICAgIH07XG4gIH0pO1xuXG4gIGxldCBjb250cm9sbGVyID0ge1xuICAgIHByb21pc2U6IGJvb3RQcm9taXNlLFxuICAgIHRyaWdnZXI6IHRyaWdnZXJcbiAgfVxuXG4gIHJldHVybiBjb250cm9sbGVyO1xufSIsImV4cG9ydCBmdW5jdGlvbiAkKHNlbGVjdG9yKSB7XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZShzZWxlY3Rvciwgc3RhdHVzKSB7XG4gIGxldCBzdHlsZVN0ciA9IHN0YXR1cyA/ICdibG9jaycgOiAnbm9uZSdcbiAgJChzZWxlY3Rvcikuc2V0QXR0cmlidXRlKCdzdHlsZScsIGBkaXNwbGF5OiR7c3R5bGVTdHJ9YCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVDbGFzcyhzZWxlY3RvciwgY2xhc3NuYW1lLCBzdGF0dXMpIHtcbiAgbGV0IGFjdGlvbiA9IHN0YXR1cyA/ICdhZGQnIDogJ3JlbW92ZSc7XG4gICQoc2VsZWN0b3IpLmNsYXNzTGlzdFthY3Rpb25dKGNsYXNzbmFtZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbWl0KGV2ZW50TmFtZSkge1xuICBsZXQgc29tZUV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0V2ZW50Jyk7XG4gIHNvbWVFdmVudC5pbml0RXZlbnQoZXZlbnROYW1lLCB0cnVlLCB0cnVlKTtcbiAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChzb21lRXZlbnQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyZW50cyhub2RlLCBzZWxlY3Rvcikge1xuICBsZXQgY3VycmVudCA9IG5vZGUsXG4gICAgbGlzdCA9IFtdO1xuICB3aGlsZSAoY3VycmVudC5wYXJlbnROb2RlICE9IG51bGwgJiYgY3VycmVudC5wYXJlbnROb2RlICE9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICAgIGxpc3QucHVzaChjdXJyZW50LnBhcmVudE5vZGUpO1xuICAgIGN1cnJlbnQgPSBjdXJyZW50LnBhcmVudE5vZGU7XG4gIH1cbiAgcmV0dXJuIGxpc3QuZmlsdGVyKChvLCBpKSA9PiB7XG4gICAgcmV0dXJuIG8ubWF0Y2hlcyhzZWxlY3RvcilcbiAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZhZGVPdXQoZWxlLCBkdXJhdGlvbiwgY2IgPSAoKSA9PiB7IGVsZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyB9KSB7XG4gIHZhciBmYWRlVGFyZ2V0ID0gZWxlO1xuICB2YXIgZmFkZUVmZmVjdCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICBpZiAoIWZhZGVUYXJnZXQuc3R5bGUub3BhY2l0eSkge1xuICAgICAgZmFkZVRhcmdldC5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICB9XG4gICAgaWYgKGZhZGVUYXJnZXQuc3R5bGUub3BhY2l0eSA+IDApIHtcbiAgICAgIGZhZGVUYXJnZXQuc3R5bGUub3BhY2l0eSAtPSAxIC8gZHVyYXRpb247XG4gICAgfSBlbHNlIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwoZmFkZUVmZmVjdCk7XG4gICAgICBjYigpXG4gICAgICBlbGUuc3R5bGUub3BhY2l0eSA9ICcnO1xuXG4gICAgfVxuICB9LCAxIC8gZHVyYXRpb24pO1xufSIsImNvbnN0IE1lcnNlbm5lVHdpc3RlciA9IHJlcXVpcmUoJ21lcnNlbm5lLXR3aXN0ZXInKTtcbmNvbnN0IE1UID0gbmV3IE1lcnNlbm5lVHdpc3RlcigpO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBkZWJvdW5jZShmdW5jLCBkZWxheSkge1xuICBsZXQgdGltZXIgPSBudWxsO1xuICBjb25zdCAkdGhpcyA9IHRoaXM7XG4gIHJldHVybiAoKSA9PiB7XG4gICAgY29uc3QgY29udGV4dCA9ICR0aGlzO1xuICAgIGNvbnN0IGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICB9LCBkZWxheSk7XG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBpcyA9IHtcbiAgYXJyOiBhID0+IEFycmF5LmlzQXJyYXkoYSksXG4gIG9iajogYSA9PiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYSkuaW5kZXhPZignT2JqZWN0JykgPiAtMSxcbiAgcHRoOiBhID0+IGlzLm9iaihhKSAmJiBhLmhhc093blByb3BlcnR5KCd0b3RhbExlbmd0aCcpLFxuICBzdmc6IGEgPT4gYSBpbnN0YW5jZW9mIFNWR0VsZW1lbnQsXG4gIGlucDogYSA9PiBhIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCxcbiAgZG9tOiBhID0+IGEubm9kZVR5cGUgfHwgaXMuc3ZnKGEpLFxuICBzdHI6IGEgPT4gdHlwZW9mIGEgPT09ICdzdHJpbmcnLFxuICBmbmM6IGEgPT4gdHlwZW9mIGEgPT09ICdmdW5jdGlvbicsXG4gIHVuZDogYSA9PiB0eXBlb2YgYSA9PT0gJ3VuZGVmaW5lZCcsXG4gIG5pbDogYSA9PiBpcy51bmQoYSkgfHwgYSA9PT0gbnVsbCxcbiAgaGV4OiBhID0+IC8oXiNbMC05QS1GXXs2fSQpfCheI1swLTlBLUZdezN9JCkvaS50ZXN0KGEpLFxuICByZ2JhOiBhID0+IC9ecmdiYS8udGVzdChhKSxcbiAgcmdiOiBhID0+IC9ecmdiLy50ZXN0KGEpLFxuICBoc2w6IGEgPT4gL15oc2wvLnRlc3QoYSksXG4gIGNvbDogYSA9PiAoaXMuaGV4KGEpIHx8IGlzLnJnYihhKSB8fCBpcy5oc2woYSkpLFxuICBrZXk6IGEgPT4gIWRlZmF1bHRJbnN0YW5jZVNldHRpbmdzLmhhc093blByb3BlcnR5KGEpICYmICFkZWZhdWx0VHdlZW5TZXR0aW5ncy5oYXNPd25Qcm9wZXJ0eShhKSAmJiBhICE9PSAndGFyZ2V0cycgJiYgYSAhPT0gJ2tleWZyYW1lcycsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByYW5kb21XaXRoaW5SYW5nZShtaW4sIG1heCwgc2VlZCkge1xuICByZXR1cm4gTVQucmFuZG9tKHNlZWQpICogKG1heCAtIG1pbikgKyBtaW47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXN0YW5jZSh4MCwgeTAsIHgxLCB5MSkge1xuICByZXR1cm4gTWF0aC5zcXJ0KCh4MSAtIHgwKSAqICh4MSAtIHgwKSArICh5MSAtIHkwKSAqICh5MSAtIHkwKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWdyZWVUb1JhZGlhbihkZWdyZWUpIHtcbiAgcmV0dXJuIChkZWdyZWUgLyAxODApICogTWF0aC5QSTtcbn1cblxuLyoqXG4gKiDntbHkuIAgdG91Y2hFdmVudC9tb3VzZUV2ZW50IOeahOS6i+S7tuinuOeZvOW6p+aomeWPluW+l+aWueW8j1xuICogQGV4cG9ydFxuICogQHBhcmFtIHtvYmplY3R9ICDlgrPlhaXnmoRldmVudCDnianku7ZcbiAqIEByZXR1cm5zIHtPYmplY3R9IOS4gOWAi+eJqeS7tiwg5YWn5ZCr5LqL5Lu26Ke455m85bqn5qiZ55qEWC9ZIOW6p+aomeWAvFxuICovXG5leHBvcnQgZnVuY3Rpb24gcG9pbnRlckV2ZW50VG9YWShlKSB7XG4gIHZhciBvdXQgPSB7IHg6IDAsIHk6IDAgfTtcbiAgaWYgKGUudHlwZSA9PT0gJ3RvdWNoc3RhcnQnIHx8IGUudHlwZSA9PT0gJ3RvdWNobW92ZScgfHwgZS50eXBlID09PSAndG91Y2hlbmQnIHx8IGUudHlwZSA9PT0gJ3RvdWNoY2FuY2VsJykge1xuICAgIHZhciB0b3VjaCA9IGUub3JpZ2luYWxFdmVudC50b3VjaGVzWzBdIHx8IGUub3JpZ2luYWxFdmVudC5jaGFuZ2VkVG91Y2hlc1swXTtcbiAgICBvdXQueCA9IHRvdWNoLnBhZ2VYO1xuICAgIG91dC55ID0gdG91Y2gucGFnZVk7XG4gIH0gZWxzZSBpZiAoZS50eXBlID09PSAnbW91c2Vkb3duJyB8fCBlLnR5cGUgPT09ICdtb3VzZXVwJyB8fCBlLnR5cGUgPT09ICdtb3VzZW1vdmUnIHx8IGUudHlwZSA9PT0gJ21vdXNlb3ZlcicgfHwgZS50eXBlID09PSAnbW91c2VvdXQnIHx8IGUudHlwZSA9PT0gJ21vdXNlZW50ZXInIHx8IGUudHlwZSA9PT0gJ21vdXNlbGVhdmUnKSB7XG4gICAgb3V0LnggPSBlLnBhZ2VYO1xuICAgIG91dC55ID0gZS5wYWdlWTtcbiAgfVxuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIOebtOaOpeWRvOWPq2hhc093blByb3BlcnR555qE5Y6f5Z6L5pa55rOVKOeUqOWcqGhhc093blByb3BlcnR56KKr5pS55YuV6YGO55qE54uA5rOBKVxuICpcbiAqIEBleHBvcnRcbiAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXQg55uu5qiZ54mp5Lu2XG4gKiBAcGFyYW0ge3N0cmluZ30gcHJvcCDnm67mqJlwcm9wXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0g5pivL+WQplxuICovXG5leHBvcnQgZnVuY3Rpb24gdGFyZ2V0SGFzUHJvcCh0YXJnZXQsIHByb3ApIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0YXJnZXQsIHByb3ApO1xufVxuXG4vKipcbiAqIOeiuuiqjeS4gOWAi+iuiuaVuC/lgLzmmK/lkKbngrrnqbooMOS4jeeul+epuuWAvClcbiAqIEBleHBvcnRcbiAqIEBwYXJhbSB7Kn0gdmFsXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0g5pivL+WQplxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNFbXB0eSh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdudW1iZXInID8gaXNOYU4odmFsKSA6ICF2YWw7XG59XG5cblxuZnVuY3Rpb24gcmdiVG9SZ2JhKHJnYlZhbHVlKSB7XG4gIGNvbnN0IHJnYiA9IC9yZ2JcXCgoXFxkKyxcXHMqW1xcZF0rLFxccypbXFxkXSspXFwpL2cuZXhlYyhyZ2JWYWx1ZSk7XG4gIHJldHVybiByZ2IgPyBgcmdiYSgke3JnYlsxXX0sMSlgIDogcmdiVmFsdWU7XG59XG5cbmZ1bmN0aW9uIGhleFRvUmdiYShoZXhWYWx1ZSkge1xuICBjb25zdCByZ3ggPSAvXiM/KFthLWZcXGRdKShbYS1mXFxkXSkoW2EtZlxcZF0pJC9pO1xuICBjb25zdCBoZXggPSBoZXhWYWx1ZS5yZXBsYWNlKHJneCwgKG0sIHIsIGcsIGIpID0+IHIgKyByICsgZyArIGcgKyBiICsgYik7XG4gIGNvbnN0IHJnYiA9IC9eIz8oW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkkL2kuZXhlYyhoZXgpO1xuICBjb25zdCByID0gcGFyc2VJbnQocmdiWzFdLCAxNik7XG4gIGNvbnN0IGcgPSBwYXJzZUludChyZ2JbMl0sIDE2KTtcbiAgY29uc3QgYiA9IHBhcnNlSW50KHJnYlszXSwgMTYpO1xuICByZXR1cm4gYHJnYmEoJHtyfSwke2d9LCR7Yn0sMSlgO1xufVxuXG5mdW5jdGlvbiBoc2xUb1JnYmEoaHNsVmFsdWUpIHtcbiAgY29uc3QgaHNsID0gL2hzbFxcKChcXGQrKSxcXHMqKFtcXGQuXSspJSxcXHMqKFtcXGQuXSspJVxcKS9nLmV4ZWMoaHNsVmFsdWUpIHx8IC9oc2xhXFwoKFxcZCspLFxccyooW1xcZC5dKyklLFxccyooW1xcZC5dKyklLFxccyooW1xcZC5dKylcXCkvZy5leGVjKGhzbFZhbHVlKTtcbiAgY29uc3QgaCA9IHBhcnNlSW50KGhzbFsxXSwgMTApIC8gMzYwO1xuICBjb25zdCBzID0gcGFyc2VJbnQoaHNsWzJdLCAxMCkgLyAxMDA7XG4gIGNvbnN0IGwgPSBwYXJzZUludChoc2xbM10sIDEwKSAvIDEwMDtcbiAgY29uc3QgYSA9IGhzbFs0XSB8fCAxO1xuICBmdW5jdGlvbiBodWUycmdiKHAsIHEsIHQpIHtcbiAgICBpZiAodCA8IDApIHQgKz0gMTtcbiAgICBpZiAodCA+IDEpIHQgLT0gMTtcbiAgICBpZiAodCA8IDEgLyA2KSByZXR1cm4gcCArIChxIC0gcCkgKiA2ICogdDtcbiAgICBpZiAodCA8IDEgLyAyKSByZXR1cm4gcTtcbiAgICBpZiAodCA8IDIgLyAzKSByZXR1cm4gcCArIChxIC0gcCkgKiAoMiAvIDMgLSB0KSAqIDY7XG4gICAgcmV0dXJuIHA7XG4gIH1cbiAgbGV0IHIsIGcsIGI7XG4gIGlmIChzID09IDApIHtcbiAgICByID0gZyA9IGIgPSBsO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHEgPSBsIDwgMC41ID8gbCAqICgxICsgcykgOiBsICsgcyAtIGwgKiBzO1xuICAgIGNvbnN0IHAgPSAyICogbCAtIHE7XG4gICAgciA9IGh1ZTJyZ2IocCwgcSwgaCArIDEgLyAzKTtcbiAgICBnID0gaHVlMnJnYihwLCBxLCBoKTtcbiAgICBiID0gaHVlMnJnYihwLCBxLCBoIC0gMSAvIDMpO1xuICB9XG4gIHJldHVybiBgcmdiYSgke3IgKiAyNTV9LCR7ZyAqIDI1NX0sJHtiICogMjU1fSwke2F9KWA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb2xvclRvUmdiYSh2YWwpIHtcbiAgaWYgKGlzLnJnYih2YWwpKSByZXR1cm4gcmdiVG9SZ2JhKHZhbCk7XG4gIGlmIChpcy5oZXgodmFsKSkgcmV0dXJuIGhleFRvUmdiYSh2YWwpO1xuICBpZiAoaXMuaHNsKHZhbCkpIHJldHVybiBoc2xUb1JnYmEodmFsKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENoYW5uZWxWYWx1ZXNGcm9tUmdiYShyZ2JhKSB7XG4gIHJldHVybiByZ2JhLnJlcGxhY2UoL14ocmdifHJnYmEpXFwoLywgJycpLnJlcGxhY2UoL1xcKSQvLCAnJykucmVwbGFjZSgvXFxzL2csICcnKS5zcGxpdCgnLCcpLm1hcCh4ID0+IHBhcnNlSW50KHgpKTtcbn1cblxuXG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjV2F5cG9pbnRzKHZlcnRpY2VzLCBpbnRlcnBvbGF0ZSA9IDMwKSB7XG4gIHZhciB3YXlwb2ludHMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCB2ZXJ0aWNlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBwdDAgPSB2ZXJ0aWNlc1tpIC0gMV07XG4gICAgdmFyIHB0MSA9IHZlcnRpY2VzW2ldO1xuICAgIHZhciBkeCA9IHB0MS54IC0gcHQwLng7XG4gICAgdmFyIGR5ID0gcHQxLnkgLSBwdDAueTtcbiAgICBmb3IgKHZhciBqID0gMDsgaiA8PSBpbnRlcnBvbGF0ZTsgaisrKSB7XG4gICAgICB2YXIgeCA9IHB0MC54ICsgZHggKiBqIC8gaW50ZXJwb2xhdGU7XG4gICAgICB2YXIgeSA9IHB0MC55ICsgZHkgKiBqIC8gaW50ZXJwb2xhdGU7XG4gICAgICB3YXlwb2ludHMucHVzaCh7XG4gICAgICAgIHg6IHgsXG4gICAgICAgIHk6IHlcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGNvbnNvbGUubG9nKHZlcnRpY2VzLCB3YXlwb2ludHMpXG5cbiAgcmV0dXJuICh3YXlwb2ludHMpO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGRyYXdTcXVhcmUoY3R4LCB4LCB5LCB3aWR0aCwgY29sb3IsIGFscGhhKSB7XG4gIGN0eC5zYXZlKCk7XG4gIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgY3R4Lmdsb2JhbEFscGhhID0gYWxwaGE7XG4gIGN0eC5maWxsUmVjdCh4IC0gd2lkdGggLyAyLCB5IC0gd2lkdGggLyAyLCB3aWR0aCwgd2lkdGgpO1xuICBjdHgucmVzdG9yZSgpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGRyYXdDaXJjbGUoY3R4LCB4LCB5LCB3aWR0aCwgY29sb3IsIGFscGhhKSB7XG4gIGN0eC5zYXZlKClcbiAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICBjdHguZ2xvYmFsQWxwaGEgPSBhbHBoYTtcbiAgY3R4LmJlZ2luUGF0aCgpO1xuICBjdHguYXJjKHgsIHksIHdpZHRoIC8gMiwgMCwgTWF0aC5QSSAqIDIsIHRydWUpO1xuICBjdHguY2xvc2VQYXRoKCk7XG4gIGN0eC5maWxsKCk7XG4gIGN0eC5yZXN0b3JlKCk7XG59XG5leHBvcnQgZnVuY3Rpb24gZHJhd0xpbmUoY3R4LCB4MCwgeTAsIHgxLCB5MSwgc3Ryb2tlQ29sb3IsIHN0cm9rZVdpZHRoKSB7XG4gIGN0eC5zYXZlKCk7XG4gIGN0eC5zdHJva2VTdHlsZSA9IHN0cm9rZUNvbG9yO1xuICBjdHgubGluZVdpZHRoID0gc3Ryb2tlV2lkdGg7XG4gIGN0eC5iZWdpblBhdGgoKTtcbiAgY3R4Lm1vdmVUbyh4MCwgeTApO1xuICBjdHgubGluZVRvKHgxLCB5MSk7XG4gIGN0eC5jbG9zZVBhdGgoKTtcbiAgY3R4LnN0cm9rZSgpO1xuICBjdHgucmVzdG9yZSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZHJhd1RleHQoY3R4LCB0ZXh0Q29udGVudCA9ICd0ZXh0JywgeCwgeSwgY29sb3IgPSAnIzAwMCcsIGZvbnRTaXplID0gMTIsIGZvbnQgPSAnQXJpYWwnKSB7XG4gIGN0eC5zYXZlKCk7XG4gIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgY3R4LmZvbnQgPSBgJHtmb250U2l6ZX1weCAke2ZvbnR9YDtcbiAgY3R4LmZpbGxUZXh0KHRleHRDb250ZW50LCB4LCB5KTtcbiAgY3R4LnJlc3RvcmUoKTtcbn1cblxuIiwiaW1wb3J0IHsgQ2FudmFzMkRGeEJhc2UsIGJvb3QgfSBmcm9tICcuL2xpYi9iYXNlJztcbmltcG9ydCB7IGRyYXdDaXJjbGUgfSBmcm9tICcuL2xpYi9zaGFwZSc7XG5pbXBvcnQgeyAkIH0gZnJvbSAnLi9saWIvZG9tJ1xuXG5jb25zdCBCQUxMX0FOSU1BVElPTl9ERUZBVUxUID0ge1xuICBhZnRlckltYWdlOiBmYWxzZSxcbiAgcmFkaXVzOiAyNSxcbiAgY29sb3I6ICdibHVlJyxcbiAgc3BlZWRYOiAxMDAwLFxuICBzcGVlZFk6IDEwMDAsXG4gIGFjY2VsZXJhdGlvblg6IDAsXG4gIGFjY2VsZXJhdGlvblk6IDAsXG4gIGZyaWN0aW9uWDogMSxcbiAgZnJpY3Rpb25ZOiAwLjk5OTdcbn1cblxuY29uc3QgU1BPVFNfQU5JTUFUSU9OX0RFRkFVTFQgPSB7XG4gIG1pblNpemU6IDEwLFxuICBtYXhTaXplOiAyMCxcbiAgcGVyaW9kOiAzMDAsXG4gIHN0ZXA6IDEwLFxuICBib3R0b21MYXllcjogbnVsbCxcbiAgY29sb3I6ICdyZ2JhKDAsMCwwLDAuMDMpJyxcbiAgY29sOiAxNSxcbiAgcm93OiAxNVxufVxuXG5jbGFzcyBCYXNpY1JlZmVsZWN0aW9uIGV4dGVuZHMgQ2FudmFzMkRGeEJhc2Uge1xuICBjb25zdHJ1Y3RvcihjYW52YXMsIGRlZmF1bHRDb25maWcsIGNvbmZpZywgdmlydHVhbFBhcmVudCkge1xuICAgIHN1cGVyKGNhbnZhcywgZGVmYXVsdENvbmZpZywgY29uZmlnLCB2aXJ0dWFsUGFyZW50KTtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuICBpbml0KCkge1xuICAgIHRoaXMuaW5pdEJhbGwoKTtcbiAgICB0aGlzLmFuaW1hdGVCYWxsKCk7XG4gIH1cbiAgaW5pdEJhbGwoKSB7XG4gICAgbGV0ICR0aGlzID0gdGhpcztcbiAgICB0aGlzLmJhbGwgPSB7XG4gICAgICBhZnRlckltYWdlOiAkdGhpcy5jb25maWcuYWZ0ZXJJbWFnZSxcbiAgICAgIGNvbG9yOiAkdGhpcy5jb25maWcuY29sb3IsXG4gICAgICByYWRpdXM6ICR0aGlzLmNvbmZpZy5yYWRpdXMsXG4gICAgICBsb2NhdGlvbjoge1xuICAgICAgICB4OiAkdGhpcy5jdnMud2lkdGggLyAyLFxuICAgICAgICB5OiAkdGhpcy5jdnMuaGVpZ2h0IC8gMixcbiAgICAgIH0sXG4gICAgICBzcGVlZDoge1xuICAgICAgICB4OiAkdGhpcy5jb25maWcuc3BlZWRYLFxuICAgICAgICB5OiAkdGhpcy5jb25maWcuc3BlZWRZXG4gICAgICB9LFxuICAgICAgYWNjZWxlcmF0aW9uOiB7XG4gICAgICAgIHg6ICR0aGlzLmNvbmZpZy5hY2NlbGVyYXRpb25YLFxuICAgICAgICB5OiAkdGhpcy5jb25maWcuYWNjZWxlcmF0aW9uWVxuICAgICAgfSxcbiAgICAgIGZyaWN0aW9uOiB7XG4gICAgICAgIHg6ICR0aGlzLmNvbmZpZy5mcmljdGlvblgsXG4gICAgICAgIHk6ICR0aGlzLmNvbmZpZy5mcmljdGlvbllcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZHJhd0JhbGwoKSB7XG4gICAgZHJhd0NpcmNsZSh0aGlzLmN0eCwgdGhpcy5iYWxsLmxvY2F0aW9uLngsIHRoaXMuYmFsbC5sb2NhdGlvbi55LCB0aGlzLmJhbGwucmFkaXVzICogMiwgdGhpcy5iYWxsLmNvbG9yKTtcbiAgfVxuICBhbmltYXRlQmFsbCgpIHtcbiAgICBsZXQgJHRoaXMgPSB0aGlzO1xuICAgIGlmICgkdGhpcy5iYWxsLmFmdGVySW1hZ2UgPT09IHRydWUpIHtcbiAgICAgICR0aGlzLmJhY2tncm91bmQoJ3JnYigyNTUsIDE3NywgNDMsMC4xKScpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICR0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgJHRoaXMuY3ZzLndpZHRoLCAkdGhpcy5jdnMuaGVpZ2h0KTtcbiAgICB9XG4gICAgJHRoaXMuY3R4LmRyYXdJbWFnZSgkdGhpcy5jb25maWcuYm90dG9tTGF5ZXIsIDAsIDApO1xuICAgICR0aGlzLmRyYXdCYWxsKCk7XG4gICAgJHRoaXMucmVmcmVzaExvY2F0aW9uKCk7XG4gICAgJHRoaXMucmVmcmVzaFNwZWVkKCk7XG4gICAgJHRoaXMuY2hlY2tCb3VuZGFyeSgpO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgkdGhpcy5hbmltYXRlQmFsbC5iaW5kKCR0aGlzKSk7XG4gIH1cblxuICByZWZyZXNoU3BlZWQoKSB7XG4gICAgbGV0IGR0ID0gdGhpcy50aW1lRWxhcHNlZDtcbiAgICB0aGlzLmJhbGwuc3BlZWQueCA9IHRoaXMuYmFsbC5zcGVlZC54ICogdGhpcy5iYWxsLmZyaWN0aW9uLnggKyB0aGlzLmJhbGwuYWNjZWxlcmF0aW9uLnggKiBkdDtcbiAgICB0aGlzLmJhbGwuc3BlZWQueSA9IHRoaXMuYmFsbC5zcGVlZC55ICogdGhpcy5iYWxsLmZyaWN0aW9uLnkgKyB0aGlzLmJhbGwuYWNjZWxlcmF0aW9uLnkgKiBkdDtcbiAgfVxuXG4gIHJlZnJlc2hMb2NhdGlvbigpIHtcbiAgICBsZXQgZHQgPSB0aGlzLnRpbWVFbGFwc2VkO1xuICAgIHRoaXMuYmFsbC5sb2NhdGlvbi54ICs9IHRoaXMuYmFsbC5zcGVlZC54ICogZHQ7XG4gICAgdGhpcy5iYWxsLmxvY2F0aW9uLnkgKz0gdGhpcy5iYWxsLnNwZWVkLnkgKiBkdDtcbiAgfVxuICBjaGVja0JvdW5kYXJ5KCkge1xuICAgIGxldCBiYWxsID0gdGhpcy5iYWxsO1xuICAgIGxldCBjYW52YXMgPSB0aGlzLmN2cztcbiAgICAvLyDnlbbnkIPmraPlnKjlupXnq69cbiAgICBpZiAoYmFsbC5sb2NhdGlvbi55ICsgYmFsbC5yYWRpdXMgPiBjYW52YXMuaGVpZ2h0KSB7XG4gICAgICAvLyDkuJTpgJ/luqbngrrmraPlgLzvvIjmnJ3kuIvvvIlcbiAgICAgIGlmIChiYWxsLnNwZWVkLnkgPiAwKSB7XG4gICAgICAgIGJhbGwuc3BlZWQueSA9IC1iYWxsLnNwZWVkLnk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIOeVtueQg+ato+WcqOmgguerr1xuICAgIGVsc2UgaWYgKGJhbGwubG9jYXRpb24ueSAtIGJhbGwucmFkaXVzIDwgMCkge1xuICAgICAgLy8g5LiU6YCf5bqm54K66LKg5YC877yI5pyd5LiK77yJXG4gICAgICBpZiAoYmFsbC5zcGVlZC55IDwgMCkge1xuICAgICAgICBiYWxsLnNwZWVkLnkgPSAtYmFsbC5zcGVlZC55O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIOeVtueQg+ato+WcqOWPs+err1xuICAgIGlmIChiYWxsLmxvY2F0aW9uLnggKyBiYWxsLnJhZGl1cyA+IGNhbnZhcy53aWR0aCkge1xuICAgICAgaWYgKGJhbGwuc3BlZWQueCA+IDApIHtcbiAgICAgICAgYmFsbC5zcGVlZC54ID0gLWJhbGwuc3BlZWQueDtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8g55W255CD5q2j5Zyo5bem56uvXG4gICAgZWxzZSBpZiAoYmFsbC5sb2NhdGlvbi54IC0gYmFsbC5yYWRpdXMgPCAwKSB7XG4gICAgICBpZiAoYmFsbC5zcGVlZC54IDwgMCkge1xuICAgICAgICBiYWxsLnNwZWVkLnggPSAtYmFsbC5zcGVlZC54O1xuICAgICAgfVxuICAgIH1cblxuICB9XG59XG5cbmNsYXNzIFNwb3RzQnVtcGluZyBleHRlbmRzIENhbnZhczJERnhCYXNlIHtcbiAgY29uc3RydWN0b3IoY2FudmFzLCBkZWZhdWx0Q29uZmlnLCBjb25maWcsIHZpcnR1YWxQYXJlbnQpIHtcbiAgICBzdXBlcihjYW52YXMsIGRlZmF1bHRDb25maWcsIGNvbmZpZywgdmlydHVhbFBhcmVudCk7XG4gICAgdGhpcy5zcG90c1NpemUgPSB0aGlzLmNvbmZpZy5taW5TaXplO1xuICAgIHRoaXMuZXhwYW5kID0gdHJ1ZTtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuICBpbml0KCkge1xuICAgIHRoaXMuYW5pbWF0ZSgpO1xuICB9XG5cbiAgYW5pbWF0ZSgpIHtcbiAgICBsZXQgJHRoaXMgPSB0aGlzO1xuICAgIHRoaXMuaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAkdGhpcy5jbGVhcigpO1xuICAgICAgJHRoaXMuZHJhd1Nwb3RzKCk7XG4gICAgfSwgdGhpcy5jb25maWcucGVyaW9kKVxuICB9XG5cbiAgZHJhd1Nwb3RzKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IHRoaXMuY29uZmlnLmNvbDsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8PSB0aGlzLmNvbmZpZy5jb2w7IGorKykge1xuICAgICAgICBkcmF3Q2lyY2xlKFxuICAgICAgICAgIHRoaXMuY3R4LFxuICAgICAgICAgIGkgKiB0aGlzLmN2cy53aWR0aCAvIHRoaXMuY29uZmlnLmNvbCxcbiAgICAgICAgICBqICogdGhpcy5jdnMuaGVpZ2h0IC8gdGhpcy5jb25maWcucm93LFxuICAgICAgICAgIHRoaXMuc3BvdHNTaXplLFxuICAgICAgICAgIHRoaXMuY29uZmlnLmNvbG9yLFxuICAgICAgICAgIDFcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5zcG90c1NpemUgLSAxIDwgdGhpcy5jb25maWcubWluU2l6ZSkge1xuICAgICAgdGhpcy5leHBhbmQgPSB0cnVlXG4gICAgfVxuICAgIGVsc2UgaWYgKHRoaXMuc3BvdHNTaXplICsgMSA+IHRoaXMuY29uZmlnLm1heFNpemUpIHtcbiAgICAgIHRoaXMuZXhwYW5kID0gZmFsc2VcbiAgICB9XG4gICAgaWYgKHRoaXMuZXhwYW5kKSB7XG4gICAgICB0aGlzLnNwb3RzU2l6ZSArPSB0aGlzLmNvbmZpZy5zdGVwO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuc3BvdHNTaXplIC09IHRoaXMuY29uZmlnLnN0ZXA7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0U3BsYXNoKCkge1xuICBsZXQgaW5pdGlhbFNjcmVlbiA9ICQoJyNpbml0aWFsLXNjcmVlbicpO1xuICBsZXQgdmlydHVhbENhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuXG4gIGxldCBzcG90QW5pbWF0aW9uID0gYm9vdChTcG90c0J1bXBpbmcsIFNQT1RTX0FOSU1BVElPTl9ERUZBVUxULCB7fSwgdmlydHVhbENhbnZhcywgaW5pdGlhbFNjcmVlbik7XG4gIHNwb3RBbmltYXRpb24ucHJvbWlzZS50aGVuKChpbnN0YW5jZSkgPT4ge1xuICAgIGJvb3QoQmFzaWNSZWZlbGVjdGlvbiwgQkFMTF9BTklNQVRJT05fREVGQVVMVCwge1xuICAgICAgYWZ0ZXJJbWFnZTogdHJ1ZSxcbiAgICAgIHJhZGl1czogNDAsXG4gICAgICBjb2xvcjogJ3JnYmEoMCwgMCwgMCwwLjc1KScsXG4gICAgICBzcGVlZFg6IDEwMDAsXG4gICAgICBib3R0b21MYXllcjogaW5zdGFuY2UuY3ZzLFxuICAgICAgc3BlZWRZOiAxMDAwLFxuICAgICAgYWNjZWxlcmF0aW9uWDogMCxcbiAgICAgIGFjY2VsZXJhdGlvblk6IDk4MCxcbiAgICAgIGZyaWN0aW9uWDogMSxcbiAgICB9LCBpbml0aWFsU2NyZWVuKS50cmlnZ2VyKCk7XG4gIH0pO1xuICBzcG90QW5pbWF0aW9uLnRyaWdnZXIoKTtcbn1cblxuIiwiZXhwb3J0IGNvbnN0IGRhdGFTdG9yYWdlID0ge1xuICBiYWxsOiB7XG4gICAgc3BlZWQ6IHtcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwXG4gICAgfSxcbiAgICBwb3NpdGlvbjoge1xuICAgICAgeDogMCxcbiAgICAgIHk6IDBcbiAgICB9XG4gIH0sXG4gIGNsaWVudHM6IFtcblxuICBdXG59XG5cbmV4cG9ydCBjb25zdCBwbGF5ZXJSZWYgPSB7XG4gIG5hbWU6ICc/Pz8nLFxuICBudW1iZXI6IDBcbn07IiwiXG4vKipcbiAqIEV4cG9zZSBgQmFja29mZmAuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBCYWNrb2ZmO1xuXG4vKipcbiAqIEluaXRpYWxpemUgYmFja29mZiB0aW1lciB3aXRoIGBvcHRzYC5cbiAqXG4gKiAtIGBtaW5gIGluaXRpYWwgdGltZW91dCBpbiBtaWxsaXNlY29uZHMgWzEwMF1cbiAqIC0gYG1heGAgbWF4IHRpbWVvdXQgWzEwMDAwXVxuICogLSBgaml0dGVyYCBbMF1cbiAqIC0gYGZhY3RvcmAgWzJdXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9wdHNcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gQmFja29mZihvcHRzKSB7XG4gIG9wdHMgPSBvcHRzIHx8IHt9O1xuICB0aGlzLm1zID0gb3B0cy5taW4gfHwgMTAwO1xuICB0aGlzLm1heCA9IG9wdHMubWF4IHx8IDEwMDAwO1xuICB0aGlzLmZhY3RvciA9IG9wdHMuZmFjdG9yIHx8IDI7XG4gIHRoaXMuaml0dGVyID0gb3B0cy5qaXR0ZXIgPiAwICYmIG9wdHMuaml0dGVyIDw9IDEgPyBvcHRzLmppdHRlciA6IDA7XG4gIHRoaXMuYXR0ZW1wdHMgPSAwO1xufVxuXG4vKipcbiAqIFJldHVybiB0aGUgYmFja29mZiBkdXJhdGlvbi5cbiAqXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkJhY2tvZmYucHJvdG90eXBlLmR1cmF0aW9uID0gZnVuY3Rpb24oKXtcbiAgdmFyIG1zID0gdGhpcy5tcyAqIE1hdGgucG93KHRoaXMuZmFjdG9yLCB0aGlzLmF0dGVtcHRzKyspO1xuICBpZiAodGhpcy5qaXR0ZXIpIHtcbiAgICB2YXIgcmFuZCA9ICBNYXRoLnJhbmRvbSgpO1xuICAgIHZhciBkZXZpYXRpb24gPSBNYXRoLmZsb29yKHJhbmQgKiB0aGlzLmppdHRlciAqIG1zKTtcbiAgICBtcyA9IChNYXRoLmZsb29yKHJhbmQgKiAxMCkgJiAxKSA9PSAwICA/IG1zIC0gZGV2aWF0aW9uIDogbXMgKyBkZXZpYXRpb247XG4gIH1cbiAgcmV0dXJuIE1hdGgubWluKG1zLCB0aGlzLm1heCkgfCAwO1xufTtcblxuLyoqXG4gKiBSZXNldCB0aGUgbnVtYmVyIG9mIGF0dGVtcHRzLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuQmFja29mZi5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbigpe1xuICB0aGlzLmF0dGVtcHRzID0gMDtcbn07XG5cbi8qKlxuICogU2V0IHRoZSBtaW5pbXVtIGR1cmF0aW9uXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5CYWNrb2ZmLnByb3RvdHlwZS5zZXRNaW4gPSBmdW5jdGlvbihtaW4pe1xuICB0aGlzLm1zID0gbWluO1xufTtcblxuLyoqXG4gKiBTZXQgdGhlIG1heGltdW0gZHVyYXRpb25cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkJhY2tvZmYucHJvdG90eXBlLnNldE1heCA9IGZ1bmN0aW9uKG1heCl7XG4gIHRoaXMubWF4ID0gbWF4O1xufTtcblxuLyoqXG4gKiBTZXQgdGhlIGppdHRlclxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuQmFja29mZi5wcm90b3R5cGUuc2V0Sml0dGVyID0gZnVuY3Rpb24oaml0dGVyKXtcbiAgdGhpcy5qaXR0ZXIgPSBqaXR0ZXI7XG59O1xuXG4iLCIvKlxuICogYmFzZTY0LWFycmF5YnVmZmVyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbmlrbGFzdmgvYmFzZTY0LWFycmF5YnVmZmVyXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDEyIE5pa2xhcyB2b24gSGVydHplblxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICovXG4oZnVuY3Rpb24oY2hhcnMpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICBleHBvcnRzLmVuY29kZSA9IGZ1bmN0aW9uKGFycmF5YnVmZmVyKSB7XG4gICAgdmFyIGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXlidWZmZXIpLFxuICAgIGksIGxlbiA9IGJ5dGVzLmxlbmd0aCwgYmFzZTY0ID0gXCJcIjtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrPTMpIHtcbiAgICAgIGJhc2U2NCArPSBjaGFyc1tieXRlc1tpXSA+PiAyXTtcbiAgICAgIGJhc2U2NCArPSBjaGFyc1soKGJ5dGVzW2ldICYgMykgPDwgNCkgfCAoYnl0ZXNbaSArIDFdID4+IDQpXTtcbiAgICAgIGJhc2U2NCArPSBjaGFyc1soKGJ5dGVzW2kgKyAxXSAmIDE1KSA8PCAyKSB8IChieXRlc1tpICsgMl0gPj4gNildO1xuICAgICAgYmFzZTY0ICs9IGNoYXJzW2J5dGVzW2kgKyAyXSAmIDYzXTtcbiAgICB9XG5cbiAgICBpZiAoKGxlbiAlIDMpID09PSAyKSB7XG4gICAgICBiYXNlNjQgPSBiYXNlNjQuc3Vic3RyaW5nKDAsIGJhc2U2NC5sZW5ndGggLSAxKSArIFwiPVwiO1xuICAgIH0gZWxzZSBpZiAobGVuICUgMyA9PT0gMSkge1xuICAgICAgYmFzZTY0ID0gYmFzZTY0LnN1YnN0cmluZygwLCBiYXNlNjQubGVuZ3RoIC0gMikgKyBcIj09XCI7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJhc2U2NDtcbiAgfTtcblxuICBleHBvcnRzLmRlY29kZSA9ICBmdW5jdGlvbihiYXNlNjQpIHtcbiAgICB2YXIgYnVmZmVyTGVuZ3RoID0gYmFzZTY0Lmxlbmd0aCAqIDAuNzUsXG4gICAgbGVuID0gYmFzZTY0Lmxlbmd0aCwgaSwgcCA9IDAsXG4gICAgZW5jb2RlZDEsIGVuY29kZWQyLCBlbmNvZGVkMywgZW5jb2RlZDQ7XG5cbiAgICBpZiAoYmFzZTY0W2Jhc2U2NC5sZW5ndGggLSAxXSA9PT0gXCI9XCIpIHtcbiAgICAgIGJ1ZmZlckxlbmd0aC0tO1xuICAgICAgaWYgKGJhc2U2NFtiYXNlNjQubGVuZ3RoIC0gMl0gPT09IFwiPVwiKSB7XG4gICAgICAgIGJ1ZmZlckxlbmd0aC0tO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBhcnJheWJ1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcihidWZmZXJMZW5ndGgpLFxuICAgIGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXlidWZmZXIpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSs9NCkge1xuICAgICAgZW5jb2RlZDEgPSBjaGFycy5pbmRleE9mKGJhc2U2NFtpXSk7XG4gICAgICBlbmNvZGVkMiA9IGNoYXJzLmluZGV4T2YoYmFzZTY0W2krMV0pO1xuICAgICAgZW5jb2RlZDMgPSBjaGFycy5pbmRleE9mKGJhc2U2NFtpKzJdKTtcbiAgICAgIGVuY29kZWQ0ID0gY2hhcnMuaW5kZXhPZihiYXNlNjRbaSszXSk7XG5cbiAgICAgIGJ5dGVzW3ArK10gPSAoZW5jb2RlZDEgPDwgMikgfCAoZW5jb2RlZDIgPj4gNCk7XG4gICAgICBieXRlc1twKytdID0gKChlbmNvZGVkMiAmIDE1KSA8PCA0KSB8IChlbmNvZGVkMyA+PiAyKTtcbiAgICAgIGJ5dGVzW3ArK10gPSAoKGVuY29kZWQzICYgMykgPDwgNikgfCAoZW5jb2RlZDQgJiA2Myk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycmF5YnVmZmVyO1xuICB9O1xufSkoXCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvXCIpO1xuIiwiXHJcbi8qKlxyXG4gKiBFeHBvc2UgYEVtaXR0ZXJgLlxyXG4gKi9cclxuXHJcbmlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJykge1xyXG4gIG1vZHVsZS5leHBvcnRzID0gRW1pdHRlcjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEluaXRpYWxpemUgYSBuZXcgYEVtaXR0ZXJgLlxyXG4gKlxyXG4gKiBAYXBpIHB1YmxpY1xyXG4gKi9cclxuXHJcbmZ1bmN0aW9uIEVtaXR0ZXIob2JqKSB7XHJcbiAgaWYgKG9iaikgcmV0dXJuIG1peGluKG9iaik7XHJcbn07XHJcblxyXG4vKipcclxuICogTWl4aW4gdGhlIGVtaXR0ZXIgcHJvcGVydGllcy5cclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IG9ialxyXG4gKiBAcmV0dXJuIHtPYmplY3R9XHJcbiAqIEBhcGkgcHJpdmF0ZVxyXG4gKi9cclxuXHJcbmZ1bmN0aW9uIG1peGluKG9iaikge1xyXG4gIGZvciAodmFyIGtleSBpbiBFbWl0dGVyLnByb3RvdHlwZSkge1xyXG4gICAgb2JqW2tleV0gPSBFbWl0dGVyLnByb3RvdHlwZVtrZXldO1xyXG4gIH1cclxuICByZXR1cm4gb2JqO1xyXG59XHJcblxyXG4vKipcclxuICogTGlzdGVuIG9uIHRoZSBnaXZlbiBgZXZlbnRgIHdpdGggYGZuYC5cclxuICpcclxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXHJcbiAqIEByZXR1cm4ge0VtaXR0ZXJ9XHJcbiAqIEBhcGkgcHVibGljXHJcbiAqL1xyXG5cclxuRW1pdHRlci5wcm90b3R5cGUub24gPVxyXG5FbWl0dGVyLnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24oZXZlbnQsIGZuKXtcclxuICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XHJcbiAgKHRoaXMuX2NhbGxiYWNrc1snJCcgKyBldmVudF0gPSB0aGlzLl9jYWxsYmFja3NbJyQnICsgZXZlbnRdIHx8IFtdKVxyXG4gICAgLnB1c2goZm4pO1xyXG4gIHJldHVybiB0aGlzO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEFkZHMgYW4gYGV2ZW50YCBsaXN0ZW5lciB0aGF0IHdpbGwgYmUgaW52b2tlZCBhIHNpbmdsZVxyXG4gKiB0aW1lIHRoZW4gYXV0b21hdGljYWxseSByZW1vdmVkLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcclxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cclxuICogQHJldHVybiB7RW1pdHRlcn1cclxuICogQGFwaSBwdWJsaWNcclxuICovXHJcblxyXG5FbWl0dGVyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24oZXZlbnQsIGZuKXtcclxuICBmdW5jdGlvbiBvbigpIHtcclxuICAgIHRoaXMub2ZmKGV2ZW50LCBvbik7XHJcbiAgICBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG4gIH1cclxuXHJcbiAgb24uZm4gPSBmbjtcclxuICB0aGlzLm9uKGV2ZW50LCBvbik7XHJcbiAgcmV0dXJuIHRoaXM7XHJcbn07XHJcblxyXG4vKipcclxuICogUmVtb3ZlIHRoZSBnaXZlbiBjYWxsYmFjayBmb3IgYGV2ZW50YCBvciBhbGxcclxuICogcmVnaXN0ZXJlZCBjYWxsYmFja3MuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxyXG4gKiBAcmV0dXJuIHtFbWl0dGVyfVxyXG4gKiBAYXBpIHB1YmxpY1xyXG4gKi9cclxuXHJcbkVtaXR0ZXIucHJvdG90eXBlLm9mZiA9XHJcbkVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyID1cclxuRW1pdHRlci5wcm90b3R5cGUucmVtb3ZlQWxsTGlzdGVuZXJzID1cclxuRW1pdHRlci5wcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKGV2ZW50LCBmbil7XHJcbiAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xyXG5cclxuICAvLyBhbGxcclxuICBpZiAoMCA9PSBhcmd1bWVudHMubGVuZ3RoKSB7XHJcbiAgICB0aGlzLl9jYWxsYmFja3MgPSB7fTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLy8gc3BlY2lmaWMgZXZlbnRcclxuICB2YXIgY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzWyckJyArIGV2ZW50XTtcclxuICBpZiAoIWNhbGxiYWNrcykgcmV0dXJuIHRoaXM7XHJcblxyXG4gIC8vIHJlbW92ZSBhbGwgaGFuZGxlcnNcclxuICBpZiAoMSA9PSBhcmd1bWVudHMubGVuZ3RoKSB7XHJcbiAgICBkZWxldGUgdGhpcy5fY2FsbGJhY2tzWyckJyArIGV2ZW50XTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLy8gcmVtb3ZlIHNwZWNpZmljIGhhbmRsZXJcclxuICB2YXIgY2I7XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjYWxsYmFja3MubGVuZ3RoOyBpKyspIHtcclxuICAgIGNiID0gY2FsbGJhY2tzW2ldO1xyXG4gICAgaWYgKGNiID09PSBmbiB8fCBjYi5mbiA9PT0gZm4pIHtcclxuICAgICAgY2FsbGJhY2tzLnNwbGljZShpLCAxKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBSZW1vdmUgZXZlbnQgc3BlY2lmaWMgYXJyYXlzIGZvciBldmVudCB0eXBlcyB0aGF0IG5vXHJcbiAgLy8gb25lIGlzIHN1YnNjcmliZWQgZm9yIHRvIGF2b2lkIG1lbW9yeSBsZWFrLlxyXG4gIGlmIChjYWxsYmFja3MubGVuZ3RoID09PSAwKSB7XHJcbiAgICBkZWxldGUgdGhpcy5fY2FsbGJhY2tzWyckJyArIGV2ZW50XTtcclxuICB9XHJcblxyXG4gIHJldHVybiB0aGlzO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEVtaXQgYGV2ZW50YCB3aXRoIHRoZSBnaXZlbiBhcmdzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcclxuICogQHBhcmFtIHtNaXhlZH0gLi4uXHJcbiAqIEByZXR1cm4ge0VtaXR0ZXJ9XHJcbiAqL1xyXG5cclxuRW1pdHRlci5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uKGV2ZW50KXtcclxuICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XHJcblxyXG4gIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKVxyXG4gICAgLCBjYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3NbJyQnICsgZXZlbnRdO1xyXG5cclxuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XHJcbiAgfVxyXG5cclxuICBpZiAoY2FsbGJhY2tzKSB7XHJcbiAgICBjYWxsYmFja3MgPSBjYWxsYmFja3Muc2xpY2UoMCk7XHJcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XHJcbiAgICAgIGNhbGxiYWNrc1tpXS5hcHBseSh0aGlzLCBhcmdzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiB0aGlzO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFJldHVybiBhcnJheSBvZiBjYWxsYmFja3MgZm9yIGBldmVudGAuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxyXG4gKiBAcmV0dXJuIHtBcnJheX1cclxuICogQGFwaSBwdWJsaWNcclxuICovXHJcblxyXG5FbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lcnMgPSBmdW5jdGlvbihldmVudCl7XHJcbiAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xyXG4gIHJldHVybiB0aGlzLl9jYWxsYmFja3NbJyQnICsgZXZlbnRdIHx8IFtdO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIENoZWNrIGlmIHRoaXMgZW1pdHRlciBoYXMgYGV2ZW50YCBoYW5kbGVycy5cclxuICpcclxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XHJcbiAqIEByZXR1cm4ge0Jvb2xlYW59XHJcbiAqIEBhcGkgcHVibGljXHJcbiAqL1xyXG5cclxuRW1pdHRlci5wcm90b3R5cGUuaGFzTGlzdGVuZXJzID0gZnVuY3Rpb24oZXZlbnQpe1xyXG4gIHJldHVybiAhISB0aGlzLmxpc3RlbmVycyhldmVudCkubGVuZ3RoO1xyXG59O1xyXG4iLCIvKipcbiAqIEhlbHBlcnMuXG4gKi9cblxudmFyIHMgPSAxMDAwO1xudmFyIG0gPSBzICogNjA7XG52YXIgaCA9IG0gKiA2MDtcbnZhciBkID0gaCAqIDI0O1xudmFyIHcgPSBkICogNztcbnZhciB5ID0gZCAqIDM2NS4yNTtcblxuLyoqXG4gKiBQYXJzZSBvciBmb3JtYXQgdGhlIGdpdmVuIGB2YWxgLlxuICpcbiAqIE9wdGlvbnM6XG4gKlxuICogIC0gYGxvbmdgIHZlcmJvc2UgZm9ybWF0dGluZyBbZmFsc2VdXG4gKlxuICogQHBhcmFtIHtTdHJpbmd8TnVtYmVyfSB2YWxcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEB0aHJvd3Mge0Vycm9yfSB0aHJvdyBhbiBlcnJvciBpZiB2YWwgaXMgbm90IGEgbm9uLWVtcHR5IHN0cmluZyBvciBhIG51bWJlclxuICogQHJldHVybiB7U3RyaW5nfE51bWJlcn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih2YWwsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbDtcbiAgaWYgKHR5cGUgPT09ICdzdHJpbmcnICYmIHZhbC5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIHBhcnNlKHZhbCk7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ251bWJlcicgJiYgaXNGaW5pdGUodmFsKSkge1xuICAgIHJldHVybiBvcHRpb25zLmxvbmcgPyBmbXRMb25nKHZhbCkgOiBmbXRTaG9ydCh2YWwpO1xuICB9XG4gIHRocm93IG5ldyBFcnJvcihcbiAgICAndmFsIGlzIG5vdCBhIG5vbi1lbXB0eSBzdHJpbmcgb3IgYSB2YWxpZCBudW1iZXIuIHZhbD0nICtcbiAgICAgIEpTT04uc3RyaW5naWZ5KHZhbClcbiAgKTtcbn07XG5cbi8qKlxuICogUGFyc2UgdGhlIGdpdmVuIGBzdHJgIGFuZCByZXR1cm4gbWlsbGlzZWNvbmRzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHBhcnNlKHN0cikge1xuICBzdHIgPSBTdHJpbmcoc3RyKTtcbiAgaWYgKHN0ci5sZW5ndGggPiAxMDApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIG1hdGNoID0gL14oLT8oPzpcXGQrKT9cXC4/XFxkKykgKihtaWxsaXNlY29uZHM/fG1zZWNzP3xtc3xzZWNvbmRzP3xzZWNzP3xzfG1pbnV0ZXM/fG1pbnM/fG18aG91cnM/fGhycz98aHxkYXlzP3xkfHdlZWtzP3x3fHllYXJzP3x5cnM/fHkpPyQvaS5leGVjKFxuICAgIHN0clxuICApO1xuICBpZiAoIW1hdGNoKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBuID0gcGFyc2VGbG9hdChtYXRjaFsxXSk7XG4gIHZhciB0eXBlID0gKG1hdGNoWzJdIHx8ICdtcycpLnRvTG93ZXJDYXNlKCk7XG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgJ3llYXJzJzpcbiAgICBjYXNlICd5ZWFyJzpcbiAgICBjYXNlICd5cnMnOlxuICAgIGNhc2UgJ3lyJzpcbiAgICBjYXNlICd5JzpcbiAgICAgIHJldHVybiBuICogeTtcbiAgICBjYXNlICd3ZWVrcyc6XG4gICAgY2FzZSAnd2Vlayc6XG4gICAgY2FzZSAndyc6XG4gICAgICByZXR1cm4gbiAqIHc7XG4gICAgY2FzZSAnZGF5cyc6XG4gICAgY2FzZSAnZGF5JzpcbiAgICBjYXNlICdkJzpcbiAgICAgIHJldHVybiBuICogZDtcbiAgICBjYXNlICdob3Vycyc6XG4gICAgY2FzZSAnaG91cic6XG4gICAgY2FzZSAnaHJzJzpcbiAgICBjYXNlICdocic6XG4gICAgY2FzZSAnaCc6XG4gICAgICByZXR1cm4gbiAqIGg7XG4gICAgY2FzZSAnbWludXRlcyc6XG4gICAgY2FzZSAnbWludXRlJzpcbiAgICBjYXNlICdtaW5zJzpcbiAgICBjYXNlICdtaW4nOlxuICAgIGNhc2UgJ20nOlxuICAgICAgcmV0dXJuIG4gKiBtO1xuICAgIGNhc2UgJ3NlY29uZHMnOlxuICAgIGNhc2UgJ3NlY29uZCc6XG4gICAgY2FzZSAnc2Vjcyc6XG4gICAgY2FzZSAnc2VjJzpcbiAgICBjYXNlICdzJzpcbiAgICAgIHJldHVybiBuICogcztcbiAgICBjYXNlICdtaWxsaXNlY29uZHMnOlxuICAgIGNhc2UgJ21pbGxpc2Vjb25kJzpcbiAgICBjYXNlICdtc2Vjcyc6XG4gICAgY2FzZSAnbXNlYyc6XG4gICAgY2FzZSAnbXMnOlxuICAgICAgcmV0dXJuIG47XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbn1cblxuLyoqXG4gKiBTaG9ydCBmb3JtYXQgZm9yIGBtc2AuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IG1zXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBmbXRTaG9ydChtcykge1xuICB2YXIgbXNBYnMgPSBNYXRoLmFicyhtcyk7XG4gIGlmIChtc0FicyA+PSBkKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBkKSArICdkJztcbiAgfVxuICBpZiAobXNBYnMgPj0gaCkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gaCkgKyAnaCc7XG4gIH1cbiAgaWYgKG1zQWJzID49IG0pIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIG0pICsgJ20nO1xuICB9XG4gIGlmIChtc0FicyA+PSBzKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBzKSArICdzJztcbiAgfVxuICByZXR1cm4gbXMgKyAnbXMnO1xufVxuXG4vKipcbiAqIExvbmcgZm9ybWF0IGZvciBgbXNgLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBtc1xuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gZm10TG9uZyhtcykge1xuICB2YXIgbXNBYnMgPSBNYXRoLmFicyhtcyk7XG4gIGlmIChtc0FicyA+PSBkKSB7XG4gICAgcmV0dXJuIHBsdXJhbChtcywgbXNBYnMsIGQsICdkYXknKTtcbiAgfVxuICBpZiAobXNBYnMgPj0gaCkge1xuICAgIHJldHVybiBwbHVyYWwobXMsIG1zQWJzLCBoLCAnaG91cicpO1xuICB9XG4gIGlmIChtc0FicyA+PSBtKSB7XG4gICAgcmV0dXJuIHBsdXJhbChtcywgbXNBYnMsIG0sICdtaW51dGUnKTtcbiAgfVxuICBpZiAobXNBYnMgPj0gcykge1xuICAgIHJldHVybiBwbHVyYWwobXMsIG1zQWJzLCBzLCAnc2Vjb25kJyk7XG4gIH1cbiAgcmV0dXJuIG1zICsgJyBtcyc7XG59XG5cbi8qKlxuICogUGx1cmFsaXphdGlvbiBoZWxwZXIuXG4gKi9cblxuZnVuY3Rpb24gcGx1cmFsKG1zLCBtc0FicywgbiwgbmFtZSkge1xuICB2YXIgaXNQbHVyYWwgPSBtc0FicyA+PSBuICogMS41O1xuICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIG4pICsgJyAnICsgbmFtZSArIChpc1BsdXJhbCA/ICdzJyA6ICcnKTtcbn1cbiIsIi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG4vKipcbiAqIFRoaXMgaXMgdGhlIHdlYiBicm93c2VyIGltcGxlbWVudGF0aW9uIG9mIGBkZWJ1ZygpYC5cbiAqL1xuXG5leHBvcnRzLmZvcm1hdEFyZ3MgPSBmb3JtYXRBcmdzO1xuZXhwb3J0cy5zYXZlID0gc2F2ZTtcbmV4cG9ydHMubG9hZCA9IGxvYWQ7XG5leHBvcnRzLnVzZUNvbG9ycyA9IHVzZUNvbG9ycztcbmV4cG9ydHMuc3RvcmFnZSA9IGxvY2Fsc3RvcmFnZSgpO1xuZXhwb3J0cy5kZXN0cm95ID0gKCgpID0+IHtcblx0bGV0IHdhcm5lZCA9IGZhbHNlO1xuXG5cdHJldHVybiAoKSA9PiB7XG5cdFx0aWYgKCF3YXJuZWQpIHtcblx0XHRcdHdhcm5lZCA9IHRydWU7XG5cdFx0XHRjb25zb2xlLndhcm4oJ0luc3RhbmNlIG1ldGhvZCBgZGVidWcuZGVzdHJveSgpYCBpcyBkZXByZWNhdGVkIGFuZCBubyBsb25nZXIgZG9lcyBhbnl0aGluZy4gSXQgd2lsbCBiZSByZW1vdmVkIGluIHRoZSBuZXh0IG1ham9yIHZlcnNpb24gb2YgYGRlYnVnYC4nKTtcblx0XHR9XG5cdH07XG59KSgpO1xuXG4vKipcbiAqIENvbG9ycy5cbiAqL1xuXG5leHBvcnRzLmNvbG9ycyA9IFtcblx0JyMwMDAwQ0MnLFxuXHQnIzAwMDBGRicsXG5cdCcjMDAzM0NDJyxcblx0JyMwMDMzRkYnLFxuXHQnIzAwNjZDQycsXG5cdCcjMDA2NkZGJyxcblx0JyMwMDk5Q0MnLFxuXHQnIzAwOTlGRicsXG5cdCcjMDBDQzAwJyxcblx0JyMwMENDMzMnLFxuXHQnIzAwQ0M2NicsXG5cdCcjMDBDQzk5Jyxcblx0JyMwMENDQ0MnLFxuXHQnIzAwQ0NGRicsXG5cdCcjMzMwMENDJyxcblx0JyMzMzAwRkYnLFxuXHQnIzMzMzNDQycsXG5cdCcjMzMzM0ZGJyxcblx0JyMzMzY2Q0MnLFxuXHQnIzMzNjZGRicsXG5cdCcjMzM5OUNDJyxcblx0JyMzMzk5RkYnLFxuXHQnIzMzQ0MwMCcsXG5cdCcjMzNDQzMzJyxcblx0JyMzM0NDNjYnLFxuXHQnIzMzQ0M5OScsXG5cdCcjMzNDQ0NDJyxcblx0JyMzM0NDRkYnLFxuXHQnIzY2MDBDQycsXG5cdCcjNjYwMEZGJyxcblx0JyM2NjMzQ0MnLFxuXHQnIzY2MzNGRicsXG5cdCcjNjZDQzAwJyxcblx0JyM2NkNDMzMnLFxuXHQnIzk5MDBDQycsXG5cdCcjOTkwMEZGJyxcblx0JyM5OTMzQ0MnLFxuXHQnIzk5MzNGRicsXG5cdCcjOTlDQzAwJyxcblx0JyM5OUNDMzMnLFxuXHQnI0NDMDAwMCcsXG5cdCcjQ0MwMDMzJyxcblx0JyNDQzAwNjYnLFxuXHQnI0NDMDA5OScsXG5cdCcjQ0MwMENDJyxcblx0JyNDQzAwRkYnLFxuXHQnI0NDMzMwMCcsXG5cdCcjQ0MzMzMzJyxcblx0JyNDQzMzNjYnLFxuXHQnI0NDMzM5OScsXG5cdCcjQ0MzM0NDJyxcblx0JyNDQzMzRkYnLFxuXHQnI0NDNjYwMCcsXG5cdCcjQ0M2NjMzJyxcblx0JyNDQzk5MDAnLFxuXHQnI0NDOTkzMycsXG5cdCcjQ0NDQzAwJyxcblx0JyNDQ0NDMzMnLFxuXHQnI0ZGMDAwMCcsXG5cdCcjRkYwMDMzJyxcblx0JyNGRjAwNjYnLFxuXHQnI0ZGMDA5OScsXG5cdCcjRkYwMENDJyxcblx0JyNGRjAwRkYnLFxuXHQnI0ZGMzMwMCcsXG5cdCcjRkYzMzMzJyxcblx0JyNGRjMzNjYnLFxuXHQnI0ZGMzM5OScsXG5cdCcjRkYzM0NDJyxcblx0JyNGRjMzRkYnLFxuXHQnI0ZGNjYwMCcsXG5cdCcjRkY2NjMzJyxcblx0JyNGRjk5MDAnLFxuXHQnI0ZGOTkzMycsXG5cdCcjRkZDQzAwJyxcblx0JyNGRkNDMzMnXG5dO1xuXG4vKipcbiAqIEN1cnJlbnRseSBvbmx5IFdlYktpdC1iYXNlZCBXZWIgSW5zcGVjdG9ycywgRmlyZWZveCA+PSB2MzEsXG4gKiBhbmQgdGhlIEZpcmVidWcgZXh0ZW5zaW9uIChhbnkgRmlyZWZveCB2ZXJzaW9uKSBhcmUga25vd25cbiAqIHRvIHN1cHBvcnQgXCIlY1wiIENTUyBjdXN0b21pemF0aW9ucy5cbiAqXG4gKiBUT0RPOiBhZGQgYSBgbG9jYWxTdG9yYWdlYCB2YXJpYWJsZSB0byBleHBsaWNpdGx5IGVuYWJsZS9kaXNhYmxlIGNvbG9yc1xuICovXG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb21wbGV4aXR5XG5mdW5jdGlvbiB1c2VDb2xvcnMoKSB7XG5cdC8vIE5COiBJbiBhbiBFbGVjdHJvbiBwcmVsb2FkIHNjcmlwdCwgZG9jdW1lbnQgd2lsbCBiZSBkZWZpbmVkIGJ1dCBub3QgZnVsbHlcblx0Ly8gaW5pdGlhbGl6ZWQuIFNpbmNlIHdlIGtub3cgd2UncmUgaW4gQ2hyb21lLCB3ZSdsbCBqdXN0IGRldGVjdCB0aGlzIGNhc2Vcblx0Ly8gZXhwbGljaXRseVxuXHRpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LnByb2Nlc3MgJiYgKHdpbmRvdy5wcm9jZXNzLnR5cGUgPT09ICdyZW5kZXJlcicgfHwgd2luZG93LnByb2Nlc3MuX19ud2pzKSkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0Ly8gSW50ZXJuZXQgRXhwbG9yZXIgYW5kIEVkZ2UgZG8gbm90IHN1cHBvcnQgY29sb3JzLlxuXHRpZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudCAmJiBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkubWF0Y2goLyhlZGdlfHRyaWRlbnQpXFwvKFxcZCspLykpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHQvLyBJcyB3ZWJraXQ/IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzE2NDU5NjA2LzM3Njc3M1xuXHQvLyBkb2N1bWVudCBpcyB1bmRlZmluZWQgaW4gcmVhY3QtbmF0aXZlOiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QtbmF0aXZlL3B1bGwvMTYzMlxuXHRyZXR1cm4gKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZSAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuV2Via2l0QXBwZWFyYW5jZSkgfHxcblx0XHQvLyBJcyBmaXJlYnVnPyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8zOTgxMjAvMzc2NzczXG5cdFx0KHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5jb25zb2xlICYmICh3aW5kb3cuY29uc29sZS5maXJlYnVnIHx8ICh3aW5kb3cuY29uc29sZS5leGNlcHRpb24gJiYgd2luZG93LmNvbnNvbGUudGFibGUpKSkgfHxcblx0XHQvLyBJcyBmaXJlZm94ID49IHYzMT9cblx0XHQvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1Rvb2xzL1dlYl9Db25zb2xlI1N0eWxpbmdfbWVzc2FnZXNcblx0XHQodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudCAmJiBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkubWF0Y2goL2ZpcmVmb3hcXC8oXFxkKykvKSAmJiBwYXJzZUludChSZWdFeHAuJDEsIDEwKSA+PSAzMSkgfHxcblx0XHQvLyBEb3VibGUgY2hlY2sgd2Via2l0IGluIHVzZXJBZ2VudCBqdXN0IGluIGNhc2Ugd2UgYXJlIGluIGEgd29ya2VyXG5cdFx0KHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci51c2VyQWdlbnQgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLm1hdGNoKC9hcHBsZXdlYmtpdFxcLyhcXGQrKS8pKTtcbn1cblxuLyoqXG4gKiBDb2xvcml6ZSBsb2cgYXJndW1lbnRzIGlmIGVuYWJsZWQuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBmb3JtYXRBcmdzKGFyZ3MpIHtcblx0YXJnc1swXSA9ICh0aGlzLnVzZUNvbG9ycyA/ICclYycgOiAnJykgK1xuXHRcdHRoaXMubmFtZXNwYWNlICtcblx0XHQodGhpcy51c2VDb2xvcnMgPyAnICVjJyA6ICcgJykgK1xuXHRcdGFyZ3NbMF0gK1xuXHRcdCh0aGlzLnVzZUNvbG9ycyA/ICclYyAnIDogJyAnKSArXG5cdFx0JysnICsgbW9kdWxlLmV4cG9ydHMuaHVtYW5pemUodGhpcy5kaWZmKTtcblxuXHRpZiAoIXRoaXMudXNlQ29sb3JzKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgYyA9ICdjb2xvcjogJyArIHRoaXMuY29sb3I7XG5cdGFyZ3Muc3BsaWNlKDEsIDAsIGMsICdjb2xvcjogaW5oZXJpdCcpO1xuXG5cdC8vIFRoZSBmaW5hbCBcIiVjXCIgaXMgc29tZXdoYXQgdHJpY2t5LCBiZWNhdXNlIHRoZXJlIGNvdWxkIGJlIG90aGVyXG5cdC8vIGFyZ3VtZW50cyBwYXNzZWQgZWl0aGVyIGJlZm9yZSBvciBhZnRlciB0aGUgJWMsIHNvIHdlIG5lZWQgdG9cblx0Ly8gZmlndXJlIG91dCB0aGUgY29ycmVjdCBpbmRleCB0byBpbnNlcnQgdGhlIENTUyBpbnRvXG5cdGxldCBpbmRleCA9IDA7XG5cdGxldCBsYXN0QyA9IDA7XG5cdGFyZ3NbMF0ucmVwbGFjZSgvJVthLXpBLVolXS9nLCBtYXRjaCA9PiB7XG5cdFx0aWYgKG1hdGNoID09PSAnJSUnKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGluZGV4Kys7XG5cdFx0aWYgKG1hdGNoID09PSAnJWMnKSB7XG5cdFx0XHQvLyBXZSBvbmx5IGFyZSBpbnRlcmVzdGVkIGluIHRoZSAqbGFzdCogJWNcblx0XHRcdC8vICh0aGUgdXNlciBtYXkgaGF2ZSBwcm92aWRlZCB0aGVpciBvd24pXG5cdFx0XHRsYXN0QyA9IGluZGV4O1xuXHRcdH1cblx0fSk7XG5cblx0YXJncy5zcGxpY2UobGFzdEMsIDAsIGMpO1xufVxuXG4vKipcbiAqIEludm9rZXMgYGNvbnNvbGUuZGVidWcoKWAgd2hlbiBhdmFpbGFibGUuXG4gKiBOby1vcCB3aGVuIGBjb25zb2xlLmRlYnVnYCBpcyBub3QgYSBcImZ1bmN0aW9uXCIuXG4gKiBJZiBgY29uc29sZS5kZWJ1Z2AgaXMgbm90IGF2YWlsYWJsZSwgZmFsbHMgYmFja1xuICogdG8gYGNvbnNvbGUubG9nYC5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5leHBvcnRzLmxvZyA9IGNvbnNvbGUuZGVidWcgfHwgY29uc29sZS5sb2cgfHwgKCgpID0+IHt9KTtcblxuLyoqXG4gKiBTYXZlIGBuYW1lc3BhY2VzYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlc1xuICogQGFwaSBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHNhdmUobmFtZXNwYWNlcykge1xuXHR0cnkge1xuXHRcdGlmIChuYW1lc3BhY2VzKSB7XG5cdFx0XHRleHBvcnRzLnN0b3JhZ2Uuc2V0SXRlbSgnZGVidWcnLCBuYW1lc3BhY2VzKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZXhwb3J0cy5zdG9yYWdlLnJlbW92ZUl0ZW0oJ2RlYnVnJyk7XG5cdFx0fVxuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdC8vIFN3YWxsb3dcblx0XHQvLyBYWFggKEBRaXgtKSBzaG91bGQgd2UgYmUgbG9nZ2luZyB0aGVzZT9cblx0fVxufVxuXG4vKipcbiAqIExvYWQgYG5hbWVzcGFjZXNgLlxuICpcbiAqIEByZXR1cm4ge1N0cmluZ30gcmV0dXJucyB0aGUgcHJldmlvdXNseSBwZXJzaXN0ZWQgZGVidWcgbW9kZXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBsb2FkKCkge1xuXHRsZXQgcjtcblx0dHJ5IHtcblx0XHRyID0gZXhwb3J0cy5zdG9yYWdlLmdldEl0ZW0oJ2RlYnVnJyk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Ly8gU3dhbGxvd1xuXHRcdC8vIFhYWCAoQFFpeC0pIHNob3VsZCB3ZSBiZSBsb2dnaW5nIHRoZXNlP1xuXHR9XG5cblx0Ly8gSWYgZGVidWcgaXNuJ3Qgc2V0IGluIExTLCBhbmQgd2UncmUgaW4gRWxlY3Ryb24sIHRyeSB0byBsb2FkICRERUJVR1xuXHRpZiAoIXIgJiYgdHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmICdlbnYnIGluIHByb2Nlc3MpIHtcblx0XHRyID0gcHJvY2Vzcy5lbnYuREVCVUc7XG5cdH1cblxuXHRyZXR1cm4gcjtcbn1cblxuLyoqXG4gKiBMb2NhbHN0b3JhZ2UgYXR0ZW1wdHMgdG8gcmV0dXJuIHRoZSBsb2NhbHN0b3JhZ2UuXG4gKlxuICogVGhpcyBpcyBuZWNlc3NhcnkgYmVjYXVzZSBzYWZhcmkgdGhyb3dzXG4gKiB3aGVuIGEgdXNlciBkaXNhYmxlcyBjb29raWVzL2xvY2Fsc3RvcmFnZVxuICogYW5kIHlvdSBhdHRlbXB0IHRvIGFjY2VzcyBpdC5cbiAqXG4gKiBAcmV0dXJuIHtMb2NhbFN0b3JhZ2V9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBsb2NhbHN0b3JhZ2UoKSB7XG5cdHRyeSB7XG5cdFx0Ly8gVFZNTEtpdCAoQXBwbGUgVFYgSlMgUnVudGltZSkgZG9lcyBub3QgaGF2ZSBhIHdpbmRvdyBvYmplY3QsIGp1c3QgbG9jYWxTdG9yYWdlIGluIHRoZSBnbG9iYWwgY29udGV4dFxuXHRcdC8vIFRoZSBCcm93c2VyIGFsc28gaGFzIGxvY2FsU3RvcmFnZSBpbiB0aGUgZ2xvYmFsIGNvbnRleHQuXG5cdFx0cmV0dXJuIGxvY2FsU3RvcmFnZTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHQvLyBTd2FsbG93XG5cdFx0Ly8gWFhYIChAUWl4LSkgc2hvdWxkIHdlIGJlIGxvZ2dpbmcgdGhlc2U/XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2NvbW1vbicpKGV4cG9ydHMpO1xuXG5jb25zdCB7Zm9ybWF0dGVyc30gPSBtb2R1bGUuZXhwb3J0cztcblxuLyoqXG4gKiBNYXAgJWogdG8gYEpTT04uc3RyaW5naWZ5KClgLCBzaW5jZSBubyBXZWIgSW5zcGVjdG9ycyBkbyB0aGF0IGJ5IGRlZmF1bHQuXG4gKi9cblxuZm9ybWF0dGVycy5qID0gZnVuY3Rpb24gKHYpIHtcblx0dHJ5IHtcblx0XHRyZXR1cm4gSlNPTi5zdHJpbmdpZnkodik7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0cmV0dXJuICdbVW5leHBlY3RlZEpTT05QYXJzZUVycm9yXTogJyArIGVycm9yLm1lc3NhZ2U7XG5cdH1cbn07XG4iLCJcbi8qKlxuICogVGhpcyBpcyB0aGUgY29tbW9uIGxvZ2ljIGZvciBib3RoIHRoZSBOb2RlLmpzIGFuZCB3ZWIgYnJvd3NlclxuICogaW1wbGVtZW50YXRpb25zIG9mIGBkZWJ1ZygpYC5cbiAqL1xuXG5mdW5jdGlvbiBzZXR1cChlbnYpIHtcblx0Y3JlYXRlRGVidWcuZGVidWcgPSBjcmVhdGVEZWJ1Zztcblx0Y3JlYXRlRGVidWcuZGVmYXVsdCA9IGNyZWF0ZURlYnVnO1xuXHRjcmVhdGVEZWJ1Zy5jb2VyY2UgPSBjb2VyY2U7XG5cdGNyZWF0ZURlYnVnLmRpc2FibGUgPSBkaXNhYmxlO1xuXHRjcmVhdGVEZWJ1Zy5lbmFibGUgPSBlbmFibGU7XG5cdGNyZWF0ZURlYnVnLmVuYWJsZWQgPSBlbmFibGVkO1xuXHRjcmVhdGVEZWJ1Zy5odW1hbml6ZSA9IHJlcXVpcmUoJ21zJyk7XG5cdGNyZWF0ZURlYnVnLmRlc3Ryb3kgPSBkZXN0cm95O1xuXG5cdE9iamVjdC5rZXlzKGVudikuZm9yRWFjaChrZXkgPT4ge1xuXHRcdGNyZWF0ZURlYnVnW2tleV0gPSBlbnZba2V5XTtcblx0fSk7XG5cblx0LyoqXG5cdCogVGhlIGN1cnJlbnRseSBhY3RpdmUgZGVidWcgbW9kZSBuYW1lcywgYW5kIG5hbWVzIHRvIHNraXAuXG5cdCovXG5cblx0Y3JlYXRlRGVidWcubmFtZXMgPSBbXTtcblx0Y3JlYXRlRGVidWcuc2tpcHMgPSBbXTtcblxuXHQvKipcblx0KiBNYXAgb2Ygc3BlY2lhbCBcIiVuXCIgaGFuZGxpbmcgZnVuY3Rpb25zLCBmb3IgdGhlIGRlYnVnIFwiZm9ybWF0XCIgYXJndW1lbnQuXG5cdCpcblx0KiBWYWxpZCBrZXkgbmFtZXMgYXJlIGEgc2luZ2xlLCBsb3dlciBvciB1cHBlci1jYXNlIGxldHRlciwgaS5lLiBcIm5cIiBhbmQgXCJOXCIuXG5cdCovXG5cdGNyZWF0ZURlYnVnLmZvcm1hdHRlcnMgPSB7fTtcblxuXHQvKipcblx0KiBTZWxlY3RzIGEgY29sb3IgZm9yIGEgZGVidWcgbmFtZXNwYWNlXG5cdCogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZSBUaGUgbmFtZXNwYWNlIHN0cmluZyBmb3IgdGhlIGZvciB0aGUgZGVidWcgaW5zdGFuY2UgdG8gYmUgY29sb3JlZFxuXHQqIEByZXR1cm4ge051bWJlcnxTdHJpbmd9IEFuIEFOU0kgY29sb3IgY29kZSBmb3IgdGhlIGdpdmVuIG5hbWVzcGFjZVxuXHQqIEBhcGkgcHJpdmF0ZVxuXHQqL1xuXHRmdW5jdGlvbiBzZWxlY3RDb2xvcihuYW1lc3BhY2UpIHtcblx0XHRsZXQgaGFzaCA9IDA7XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IG5hbWVzcGFjZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0aGFzaCA9ICgoaGFzaCA8PCA1KSAtIGhhc2gpICsgbmFtZXNwYWNlLmNoYXJDb2RlQXQoaSk7XG5cdFx0XHRoYXNoIHw9IDA7IC8vIENvbnZlcnQgdG8gMzJiaXQgaW50ZWdlclxuXHRcdH1cblxuXHRcdHJldHVybiBjcmVhdGVEZWJ1Zy5jb2xvcnNbTWF0aC5hYnMoaGFzaCkgJSBjcmVhdGVEZWJ1Zy5jb2xvcnMubGVuZ3RoXTtcblx0fVxuXHRjcmVhdGVEZWJ1Zy5zZWxlY3RDb2xvciA9IHNlbGVjdENvbG9yO1xuXG5cdC8qKlxuXHQqIENyZWF0ZSBhIGRlYnVnZ2VyIHdpdGggdGhlIGdpdmVuIGBuYW1lc3BhY2VgLlxuXHQqXG5cdCogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZVxuXHQqIEByZXR1cm4ge0Z1bmN0aW9ufVxuXHQqIEBhcGkgcHVibGljXG5cdCovXG5cdGZ1bmN0aW9uIGNyZWF0ZURlYnVnKG5hbWVzcGFjZSkge1xuXHRcdGxldCBwcmV2VGltZTtcblx0XHRsZXQgZW5hYmxlT3ZlcnJpZGUgPSBudWxsO1xuXG5cdFx0ZnVuY3Rpb24gZGVidWcoLi4uYXJncykge1xuXHRcdFx0Ly8gRGlzYWJsZWQ/XG5cdFx0XHRpZiAoIWRlYnVnLmVuYWJsZWQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBzZWxmID0gZGVidWc7XG5cblx0XHRcdC8vIFNldCBgZGlmZmAgdGltZXN0YW1wXG5cdFx0XHRjb25zdCBjdXJyID0gTnVtYmVyKG5ldyBEYXRlKCkpO1xuXHRcdFx0Y29uc3QgbXMgPSBjdXJyIC0gKHByZXZUaW1lIHx8IGN1cnIpO1xuXHRcdFx0c2VsZi5kaWZmID0gbXM7XG5cdFx0XHRzZWxmLnByZXYgPSBwcmV2VGltZTtcblx0XHRcdHNlbGYuY3VyciA9IGN1cnI7XG5cdFx0XHRwcmV2VGltZSA9IGN1cnI7XG5cblx0XHRcdGFyZ3NbMF0gPSBjcmVhdGVEZWJ1Zy5jb2VyY2UoYXJnc1swXSk7XG5cblx0XHRcdGlmICh0eXBlb2YgYXJnc1swXSAhPT0gJ3N0cmluZycpIHtcblx0XHRcdFx0Ly8gQW55dGhpbmcgZWxzZSBsZXQncyBpbnNwZWN0IHdpdGggJU9cblx0XHRcdFx0YXJncy51bnNoaWZ0KCclTycpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBBcHBseSBhbnkgYGZvcm1hdHRlcnNgIHRyYW5zZm9ybWF0aW9uc1xuXHRcdFx0bGV0IGluZGV4ID0gMDtcblx0XHRcdGFyZ3NbMF0gPSBhcmdzWzBdLnJlcGxhY2UoLyUoW2EtekEtWiVdKS9nLCAobWF0Y2gsIGZvcm1hdCkgPT4ge1xuXHRcdFx0XHQvLyBJZiB3ZSBlbmNvdW50ZXIgYW4gZXNjYXBlZCAlIHRoZW4gZG9uJ3QgaW5jcmVhc2UgdGhlIGFycmF5IGluZGV4XG5cdFx0XHRcdGlmIChtYXRjaCA9PT0gJyUlJykge1xuXHRcdFx0XHRcdHJldHVybiAnJSc7XG5cdFx0XHRcdH1cblx0XHRcdFx0aW5kZXgrKztcblx0XHRcdFx0Y29uc3QgZm9ybWF0dGVyID0gY3JlYXRlRGVidWcuZm9ybWF0dGVyc1tmb3JtYXRdO1xuXHRcdFx0XHRpZiAodHlwZW9mIGZvcm1hdHRlciA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRcdGNvbnN0IHZhbCA9IGFyZ3NbaW5kZXhdO1xuXHRcdFx0XHRcdG1hdGNoID0gZm9ybWF0dGVyLmNhbGwoc2VsZiwgdmFsKTtcblxuXHRcdFx0XHRcdC8vIE5vdyB3ZSBuZWVkIHRvIHJlbW92ZSBgYXJnc1tpbmRleF1gIHNpbmNlIGl0J3MgaW5saW5lZCBpbiB0aGUgYGZvcm1hdGBcblx0XHRcdFx0XHRhcmdzLnNwbGljZShpbmRleCwgMSk7XG5cdFx0XHRcdFx0aW5kZXgtLTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gbWF0Y2g7XG5cdFx0XHR9KTtcblxuXHRcdFx0Ly8gQXBwbHkgZW52LXNwZWNpZmljIGZvcm1hdHRpbmcgKGNvbG9ycywgZXRjLilcblx0XHRcdGNyZWF0ZURlYnVnLmZvcm1hdEFyZ3MuY2FsbChzZWxmLCBhcmdzKTtcblxuXHRcdFx0Y29uc3QgbG9nRm4gPSBzZWxmLmxvZyB8fCBjcmVhdGVEZWJ1Zy5sb2c7XG5cdFx0XHRsb2dGbi5hcHBseShzZWxmLCBhcmdzKTtcblx0XHR9XG5cblx0XHRkZWJ1Zy5uYW1lc3BhY2UgPSBuYW1lc3BhY2U7XG5cdFx0ZGVidWcudXNlQ29sb3JzID0gY3JlYXRlRGVidWcudXNlQ29sb3JzKCk7XG5cdFx0ZGVidWcuY29sb3IgPSBjcmVhdGVEZWJ1Zy5zZWxlY3RDb2xvcihuYW1lc3BhY2UpO1xuXHRcdGRlYnVnLmV4dGVuZCA9IGV4dGVuZDtcblx0XHRkZWJ1Zy5kZXN0cm95ID0gY3JlYXRlRGVidWcuZGVzdHJveTsgLy8gWFhYIFRlbXBvcmFyeS4gV2lsbCBiZSByZW1vdmVkIGluIHRoZSBuZXh0IG1ham9yIHJlbGVhc2UuXG5cblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZGVidWcsICdlbmFibGVkJywge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG5cdFx0XHRnZXQ6ICgpID0+IGVuYWJsZU92ZXJyaWRlID09PSBudWxsID8gY3JlYXRlRGVidWcuZW5hYmxlZChuYW1lc3BhY2UpIDogZW5hYmxlT3ZlcnJpZGUsXG5cdFx0XHRzZXQ6IHYgPT4ge1xuXHRcdFx0XHRlbmFibGVPdmVycmlkZSA9IHY7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHQvLyBFbnYtc3BlY2lmaWMgaW5pdGlhbGl6YXRpb24gbG9naWMgZm9yIGRlYnVnIGluc3RhbmNlc1xuXHRcdGlmICh0eXBlb2YgY3JlYXRlRGVidWcuaW5pdCA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0Y3JlYXRlRGVidWcuaW5pdChkZWJ1Zyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGRlYnVnO1xuXHR9XG5cblx0ZnVuY3Rpb24gZXh0ZW5kKG5hbWVzcGFjZSwgZGVsaW1pdGVyKSB7XG5cdFx0Y29uc3QgbmV3RGVidWcgPSBjcmVhdGVEZWJ1Zyh0aGlzLm5hbWVzcGFjZSArICh0eXBlb2YgZGVsaW1pdGVyID09PSAndW5kZWZpbmVkJyA/ICc6JyA6IGRlbGltaXRlcikgKyBuYW1lc3BhY2UpO1xuXHRcdG5ld0RlYnVnLmxvZyA9IHRoaXMubG9nO1xuXHRcdHJldHVybiBuZXdEZWJ1Zztcblx0fVxuXG5cdC8qKlxuXHQqIEVuYWJsZXMgYSBkZWJ1ZyBtb2RlIGJ5IG5hbWVzcGFjZXMuIFRoaXMgY2FuIGluY2x1ZGUgbW9kZXNcblx0KiBzZXBhcmF0ZWQgYnkgYSBjb2xvbiBhbmQgd2lsZGNhcmRzLlxuXHQqXG5cdCogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZXNcblx0KiBAYXBpIHB1YmxpY1xuXHQqL1xuXHRmdW5jdGlvbiBlbmFibGUobmFtZXNwYWNlcykge1xuXHRcdGNyZWF0ZURlYnVnLnNhdmUobmFtZXNwYWNlcyk7XG5cblx0XHRjcmVhdGVEZWJ1Zy5uYW1lcyA9IFtdO1xuXHRcdGNyZWF0ZURlYnVnLnNraXBzID0gW107XG5cblx0XHRsZXQgaTtcblx0XHRjb25zdCBzcGxpdCA9ICh0eXBlb2YgbmFtZXNwYWNlcyA9PT0gJ3N0cmluZycgPyBuYW1lc3BhY2VzIDogJycpLnNwbGl0KC9bXFxzLF0rLyk7XG5cdFx0Y29uc3QgbGVuID0gc3BsaXQubGVuZ3RoO1xuXG5cdFx0Zm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHRpZiAoIXNwbGl0W2ldKSB7XG5cdFx0XHRcdC8vIGlnbm9yZSBlbXB0eSBzdHJpbmdzXG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRuYW1lc3BhY2VzID0gc3BsaXRbaV0ucmVwbGFjZSgvXFwqL2csICcuKj8nKTtcblxuXHRcdFx0aWYgKG5hbWVzcGFjZXNbMF0gPT09ICctJykge1xuXHRcdFx0XHRjcmVhdGVEZWJ1Zy5za2lwcy5wdXNoKG5ldyBSZWdFeHAoJ14nICsgbmFtZXNwYWNlcy5zdWJzdHIoMSkgKyAnJCcpKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNyZWF0ZURlYnVnLm5hbWVzLnB1c2gobmV3IFJlZ0V4cCgnXicgKyBuYW1lc3BhY2VzICsgJyQnKSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCogRGlzYWJsZSBkZWJ1ZyBvdXRwdXQuXG5cdCpcblx0KiBAcmV0dXJuIHtTdHJpbmd9IG5hbWVzcGFjZXNcblx0KiBAYXBpIHB1YmxpY1xuXHQqL1xuXHRmdW5jdGlvbiBkaXNhYmxlKCkge1xuXHRcdGNvbnN0IG5hbWVzcGFjZXMgPSBbXG5cdFx0XHQuLi5jcmVhdGVEZWJ1Zy5uYW1lcy5tYXAodG9OYW1lc3BhY2UpLFxuXHRcdFx0Li4uY3JlYXRlRGVidWcuc2tpcHMubWFwKHRvTmFtZXNwYWNlKS5tYXAobmFtZXNwYWNlID0+ICctJyArIG5hbWVzcGFjZSlcblx0XHRdLmpvaW4oJywnKTtcblx0XHRjcmVhdGVEZWJ1Zy5lbmFibGUoJycpO1xuXHRcdHJldHVybiBuYW1lc3BhY2VzO1xuXHR9XG5cblx0LyoqXG5cdCogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiBtb2RlIG5hbWUgaXMgZW5hYmxlZCwgZmFsc2Ugb3RoZXJ3aXNlLlxuXHQqXG5cdCogQHBhcmFtIHtTdHJpbmd9IG5hbWVcblx0KiBAcmV0dXJuIHtCb29sZWFufVxuXHQqIEBhcGkgcHVibGljXG5cdCovXG5cdGZ1bmN0aW9uIGVuYWJsZWQobmFtZSkge1xuXHRcdGlmIChuYW1lW25hbWUubGVuZ3RoIC0gMV0gPT09ICcqJykge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0bGV0IGk7XG5cdFx0bGV0IGxlbjtcblxuXHRcdGZvciAoaSA9IDAsIGxlbiA9IGNyZWF0ZURlYnVnLnNraXBzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHRpZiAoY3JlYXRlRGVidWcuc2tpcHNbaV0udGVzdChuYW1lKSkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Zm9yIChpID0gMCwgbGVuID0gY3JlYXRlRGVidWcubmFtZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdGlmIChjcmVhdGVEZWJ1Zy5uYW1lc1tpXS50ZXN0KG5hbWUpKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdC8qKlxuXHQqIENvbnZlcnQgcmVnZXhwIHRvIG5hbWVzcGFjZVxuXHQqXG5cdCogQHBhcmFtIHtSZWdFeHB9IHJlZ3hlcFxuXHQqIEByZXR1cm4ge1N0cmluZ30gbmFtZXNwYWNlXG5cdCogQGFwaSBwcml2YXRlXG5cdCovXG5cdGZ1bmN0aW9uIHRvTmFtZXNwYWNlKHJlZ2V4cCkge1xuXHRcdHJldHVybiByZWdleHAudG9TdHJpbmcoKVxuXHRcdFx0LnN1YnN0cmluZygyLCByZWdleHAudG9TdHJpbmcoKS5sZW5ndGggLSAyKVxuXHRcdFx0LnJlcGxhY2UoL1xcLlxcKlxcPyQvLCAnKicpO1xuXHR9XG5cblx0LyoqXG5cdCogQ29lcmNlIGB2YWxgLlxuXHQqXG5cdCogQHBhcmFtIHtNaXhlZH0gdmFsXG5cdCogQHJldHVybiB7TWl4ZWR9XG5cdCogQGFwaSBwcml2YXRlXG5cdCovXG5cdGZ1bmN0aW9uIGNvZXJjZSh2YWwpIHtcblx0XHRpZiAodmFsIGluc3RhbmNlb2YgRXJyb3IpIHtcblx0XHRcdHJldHVybiB2YWwuc3RhY2sgfHwgdmFsLm1lc3NhZ2U7XG5cdFx0fVxuXHRcdHJldHVybiB2YWw7XG5cdH1cblxuXHQvKipcblx0KiBYWFggRE8gTk9UIFVTRS4gVGhpcyBpcyBhIHRlbXBvcmFyeSBzdHViIGZ1bmN0aW9uLlxuXHQqIFhYWCBJdCBXSUxMIGJlIHJlbW92ZWQgaW4gdGhlIG5leHQgbWFqb3IgcmVsZWFzZS5cblx0Ki9cblx0ZnVuY3Rpb24gZGVzdHJveSgpIHtcblx0XHRjb25zb2xlLndhcm4oJ0luc3RhbmNlIG1ldGhvZCBgZGVidWcuZGVzdHJveSgpYCBpcyBkZXByZWNhdGVkIGFuZCBubyBsb25nZXIgZG9lcyBhbnl0aGluZy4gSXQgd2lsbCBiZSByZW1vdmVkIGluIHRoZSBuZXh0IG1ham9yIHZlcnNpb24gb2YgYGRlYnVnYC4nKTtcblx0fVxuXG5cdGNyZWF0ZURlYnVnLmVuYWJsZShjcmVhdGVEZWJ1Zy5sb2FkKCkpO1xuXG5cdHJldHVybiBjcmVhdGVEZWJ1Zztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXR1cDtcbiIsIm1vZHVsZS5leHBvcnRzID0gKCgpID0+IHtcbiAgaWYgKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHNlbGY7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB3aW5kb3c7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbiAgfVxufSkoKTtcbiIsImNvbnN0IFNvY2tldCA9IHJlcXVpcmUoXCIuL3NvY2tldFwiKTtcblxubW9kdWxlLmV4cG9ydHMgPSAodXJpLCBvcHRzKSA9PiBuZXcgU29ja2V0KHVyaSwgb3B0cyk7XG5cbi8qKlxuICogRXhwb3NlIGRlcHMgZm9yIGxlZ2FjeSBjb21wYXRpYmlsaXR5XG4gKiBhbmQgc3RhbmRhbG9uZSBicm93c2VyIGFjY2Vzcy5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cy5Tb2NrZXQgPSBTb2NrZXQ7XG5tb2R1bGUuZXhwb3J0cy5wcm90b2NvbCA9IFNvY2tldC5wcm90b2NvbDsgLy8gdGhpcyBpcyBhbiBpbnRcbm1vZHVsZS5leHBvcnRzLlRyYW5zcG9ydCA9IHJlcXVpcmUoXCIuL3RyYW5zcG9ydFwiKTtcbm1vZHVsZS5leHBvcnRzLnRyYW5zcG9ydHMgPSByZXF1aXJlKFwiLi90cmFuc3BvcnRzL2luZGV4XCIpO1xubW9kdWxlLmV4cG9ydHMucGFyc2VyID0gcmVxdWlyZShcImVuZ2luZS5pby1wYXJzZXJcIik7XG4iLCJjb25zdCB0cmFuc3BvcnRzID0gcmVxdWlyZShcIi4vdHJhbnNwb3J0cy9pbmRleFwiKTtcbmNvbnN0IEVtaXR0ZXIgPSByZXF1aXJlKFwiY29tcG9uZW50LWVtaXR0ZXJcIik7XG5jb25zdCBkZWJ1ZyA9IHJlcXVpcmUoXCJkZWJ1Z1wiKShcImVuZ2luZS5pby1jbGllbnQ6c29ja2V0XCIpO1xuY29uc3QgcGFyc2VyID0gcmVxdWlyZShcImVuZ2luZS5pby1wYXJzZXJcIik7XG5jb25zdCBwYXJzZXVyaSA9IHJlcXVpcmUoXCJwYXJzZXVyaVwiKTtcbmNvbnN0IHBhcnNlcXMgPSByZXF1aXJlKFwicGFyc2Vxc1wiKTtcblxuY2xhc3MgU29ja2V0IGV4dGVuZHMgRW1pdHRlciB7XG4gIC8qKlxuICAgKiBTb2NrZXQgY29uc3RydWN0b3IuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfE9iamVjdH0gdXJpIG9yIG9wdGlvbnNcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG4gIGNvbnN0cnVjdG9yKHVyaSwgb3B0cyA9IHt9KSB7XG4gICAgc3VwZXIoKTtcblxuICAgIGlmICh1cmkgJiYgXCJvYmplY3RcIiA9PT0gdHlwZW9mIHVyaSkge1xuICAgICAgb3B0cyA9IHVyaTtcbiAgICAgIHVyaSA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHVyaSkge1xuICAgICAgdXJpID0gcGFyc2V1cmkodXJpKTtcbiAgICAgIG9wdHMuaG9zdG5hbWUgPSB1cmkuaG9zdDtcbiAgICAgIG9wdHMuc2VjdXJlID0gdXJpLnByb3RvY29sID09PSBcImh0dHBzXCIgfHwgdXJpLnByb3RvY29sID09PSBcIndzc1wiO1xuICAgICAgb3B0cy5wb3J0ID0gdXJpLnBvcnQ7XG4gICAgICBpZiAodXJpLnF1ZXJ5KSBvcHRzLnF1ZXJ5ID0gdXJpLnF1ZXJ5O1xuICAgIH0gZWxzZSBpZiAob3B0cy5ob3N0KSB7XG4gICAgICBvcHRzLmhvc3RuYW1lID0gcGFyc2V1cmkob3B0cy5ob3N0KS5ob3N0O1xuICAgIH1cblxuICAgIHRoaXMuc2VjdXJlID1cbiAgICAgIG51bGwgIT0gb3B0cy5zZWN1cmVcbiAgICAgICAgPyBvcHRzLnNlY3VyZVxuICAgICAgICA6IHR5cGVvZiBsb2NhdGlvbiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBcImh0dHBzOlwiID09PSBsb2NhdGlvbi5wcm90b2NvbDtcblxuICAgIGlmIChvcHRzLmhvc3RuYW1lICYmICFvcHRzLnBvcnQpIHtcbiAgICAgIC8vIGlmIG5vIHBvcnQgaXMgc3BlY2lmaWVkIG1hbnVhbGx5LCB1c2UgdGhlIHByb3RvY29sIGRlZmF1bHRcbiAgICAgIG9wdHMucG9ydCA9IHRoaXMuc2VjdXJlID8gXCI0NDNcIiA6IFwiODBcIjtcbiAgICB9XG5cbiAgICB0aGlzLmhvc3RuYW1lID1cbiAgICAgIG9wdHMuaG9zdG5hbWUgfHxcbiAgICAgICh0eXBlb2YgbG9jYXRpb24gIT09IFwidW5kZWZpbmVkXCIgPyBsb2NhdGlvbi5ob3N0bmFtZSA6IFwibG9jYWxob3N0XCIpO1xuICAgIHRoaXMucG9ydCA9XG4gICAgICBvcHRzLnBvcnQgfHxcbiAgICAgICh0eXBlb2YgbG9jYXRpb24gIT09IFwidW5kZWZpbmVkXCIgJiYgbG9jYXRpb24ucG9ydFxuICAgICAgICA/IGxvY2F0aW9uLnBvcnRcbiAgICAgICAgOiB0aGlzLnNlY3VyZVxuICAgICAgICA/IDQ0M1xuICAgICAgICA6IDgwKTtcblxuICAgIHRoaXMudHJhbnNwb3J0cyA9IG9wdHMudHJhbnNwb3J0cyB8fCBbXCJwb2xsaW5nXCIsIFwid2Vic29ja2V0XCJdO1xuICAgIHRoaXMucmVhZHlTdGF0ZSA9IFwiXCI7XG4gICAgdGhpcy53cml0ZUJ1ZmZlciA9IFtdO1xuICAgIHRoaXMucHJldkJ1ZmZlckxlbiA9IDA7XG5cbiAgICB0aGlzLm9wdHMgPSBPYmplY3QuYXNzaWduKFxuICAgICAge1xuICAgICAgICBwYXRoOiBcIi9lbmdpbmUuaW9cIixcbiAgICAgICAgYWdlbnQ6IGZhbHNlLFxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IGZhbHNlLFxuICAgICAgICB1cGdyYWRlOiB0cnVlLFxuICAgICAgICBqc29ucDogdHJ1ZSxcbiAgICAgICAgdGltZXN0YW1wUGFyYW06IFwidFwiLFxuICAgICAgICByZW1lbWJlclVwZ3JhZGU6IGZhbHNlLFxuICAgICAgICByZWplY3RVbmF1dGhvcml6ZWQ6IHRydWUsXG4gICAgICAgIHBlck1lc3NhZ2VEZWZsYXRlOiB7XG4gICAgICAgICAgdGhyZXNob2xkOiAxMDI0XG4gICAgICAgIH0sXG4gICAgICAgIHRyYW5zcG9ydE9wdGlvbnM6IHt9LFxuICAgICAgICBjbG9zZU9uQmVmb3JldW5sb2FkOiB0cnVlXG4gICAgICB9LFxuICAgICAgb3B0c1xuICAgICk7XG5cbiAgICB0aGlzLm9wdHMucGF0aCA9IHRoaXMub3B0cy5wYXRoLnJlcGxhY2UoL1xcLyQvLCBcIlwiKSArIFwiL1wiO1xuXG4gICAgaWYgKHR5cGVvZiB0aGlzLm9wdHMucXVlcnkgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIHRoaXMub3B0cy5xdWVyeSA9IHBhcnNlcXMuZGVjb2RlKHRoaXMub3B0cy5xdWVyeSk7XG4gICAgfVxuXG4gICAgLy8gc2V0IG9uIGhhbmRzaGFrZVxuICAgIHRoaXMuaWQgPSBudWxsO1xuICAgIHRoaXMudXBncmFkZXMgPSBudWxsO1xuICAgIHRoaXMucGluZ0ludGVydmFsID0gbnVsbDtcbiAgICB0aGlzLnBpbmdUaW1lb3V0ID0gbnVsbDtcblxuICAgIC8vIHNldCBvbiBoZWFydGJlYXRcbiAgICB0aGlzLnBpbmdUaW1lb3V0VGltZXIgPSBudWxsO1xuXG4gICAgaWYgKHR5cGVvZiBhZGRFdmVudExpc3RlbmVyID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIGlmICh0aGlzLm9wdHMuY2xvc2VPbkJlZm9yZXVubG9hZCkge1xuICAgICAgICAvLyBGaXJlZm94IGNsb3NlcyB0aGUgY29ubmVjdGlvbiB3aGVuIHRoZSBcImJlZm9yZXVubG9hZFwiIGV2ZW50IGlzIGVtaXR0ZWQgYnV0IG5vdCBDaHJvbWUuIFRoaXMgZXZlbnQgbGlzdGVuZXJcbiAgICAgICAgLy8gZW5zdXJlcyBldmVyeSBicm93c2VyIGJlaGF2ZXMgdGhlIHNhbWUgKG5vIFwiZGlzY29ubmVjdFwiIGV2ZW50IGF0IHRoZSBTb2NrZXQuSU8gbGV2ZWwgd2hlbiB0aGUgcGFnZSBpc1xuICAgICAgICAvLyBjbG9zZWQvcmVsb2FkZWQpXG4gICAgICAgIGFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgXCJiZWZvcmV1bmxvYWRcIixcbiAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy50cmFuc3BvcnQpIHtcbiAgICAgICAgICAgICAgLy8gc2lsZW50bHkgY2xvc2UgdGhlIHRyYW5zcG9ydFxuICAgICAgICAgICAgICB0aGlzLnRyYW5zcG9ydC5yZW1vdmVBbGxMaXN0ZW5lcnMoKTtcbiAgICAgICAgICAgICAgdGhpcy50cmFuc3BvcnQuY2xvc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGZhbHNlXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5ob3N0bmFtZSAhPT0gXCJsb2NhbGhvc3RcIikge1xuICAgICAgICB0aGlzLm9mZmxpbmVFdmVudExpc3RlbmVyID0gKCkgPT4ge1xuICAgICAgICAgIHRoaXMub25DbG9zZShcInRyYW5zcG9ydCBjbG9zZVwiKTtcbiAgICAgICAgfTtcbiAgICAgICAgYWRkRXZlbnRMaXN0ZW5lcihcIm9mZmxpbmVcIiwgdGhpcy5vZmZsaW5lRXZlbnRMaXN0ZW5lciwgZmFsc2UpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMub3BlbigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgdHJhbnNwb3J0IG9mIHRoZSBnaXZlbiB0eXBlLlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gdHJhbnNwb3J0IG5hbWVcbiAgICogQHJldHVybiB7VHJhbnNwb3J0fVxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIGNyZWF0ZVRyYW5zcG9ydChuYW1lKSB7XG4gICAgZGVidWcoJ2NyZWF0aW5nIHRyYW5zcG9ydCBcIiVzXCInLCBuYW1lKTtcbiAgICBjb25zdCBxdWVyeSA9IGNsb25lKHRoaXMub3B0cy5xdWVyeSk7XG5cbiAgICAvLyBhcHBlbmQgZW5naW5lLmlvIHByb3RvY29sIGlkZW50aWZpZXJcbiAgICBxdWVyeS5FSU8gPSBwYXJzZXIucHJvdG9jb2w7XG5cbiAgICAvLyB0cmFuc3BvcnQgbmFtZVxuICAgIHF1ZXJ5LnRyYW5zcG9ydCA9IG5hbWU7XG5cbiAgICAvLyBzZXNzaW9uIGlkIGlmIHdlIGFscmVhZHkgaGF2ZSBvbmVcbiAgICBpZiAodGhpcy5pZCkgcXVlcnkuc2lkID0gdGhpcy5pZDtcblxuICAgIGNvbnN0IG9wdHMgPSBPYmplY3QuYXNzaWduKFxuICAgICAge30sXG4gICAgICB0aGlzLm9wdHMudHJhbnNwb3J0T3B0aW9uc1tuYW1lXSxcbiAgICAgIHRoaXMub3B0cyxcbiAgICAgIHtcbiAgICAgICAgcXVlcnksXG4gICAgICAgIHNvY2tldDogdGhpcyxcbiAgICAgICAgaG9zdG5hbWU6IHRoaXMuaG9zdG5hbWUsXG4gICAgICAgIHNlY3VyZTogdGhpcy5zZWN1cmUsXG4gICAgICAgIHBvcnQ6IHRoaXMucG9ydFxuICAgICAgfVxuICAgICk7XG5cbiAgICBkZWJ1ZyhcIm9wdGlvbnM6ICVqXCIsIG9wdHMpO1xuXG4gICAgcmV0dXJuIG5ldyB0cmFuc3BvcnRzW25hbWVdKG9wdHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIHRyYW5zcG9ydCB0byB1c2UgYW5kIHN0YXJ0cyBwcm9iZS5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBvcGVuKCkge1xuICAgIGxldCB0cmFuc3BvcnQ7XG4gICAgaWYgKFxuICAgICAgdGhpcy5vcHRzLnJlbWVtYmVyVXBncmFkZSAmJlxuICAgICAgU29ja2V0LnByaW9yV2Vic29ja2V0U3VjY2VzcyAmJlxuICAgICAgdGhpcy50cmFuc3BvcnRzLmluZGV4T2YoXCJ3ZWJzb2NrZXRcIikgIT09IC0xXG4gICAgKSB7XG4gICAgICB0cmFuc3BvcnQgPSBcIndlYnNvY2tldFwiO1xuICAgIH0gZWxzZSBpZiAoMCA9PT0gdGhpcy50cmFuc3BvcnRzLmxlbmd0aCkge1xuICAgICAgLy8gRW1pdCBlcnJvciBvbiBuZXh0IHRpY2sgc28gaXQgY2FuIGJlIGxpc3RlbmVkIHRvXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5lbWl0KFwiZXJyb3JcIiwgXCJObyB0cmFuc3BvcnRzIGF2YWlsYWJsZVwiKTtcbiAgICAgIH0sIDApO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICB0cmFuc3BvcnQgPSB0aGlzLnRyYW5zcG9ydHNbMF07XG4gICAgfVxuICAgIHRoaXMucmVhZHlTdGF0ZSA9IFwib3BlbmluZ1wiO1xuXG4gICAgLy8gUmV0cnkgd2l0aCB0aGUgbmV4dCB0cmFuc3BvcnQgaWYgdGhlIHRyYW5zcG9ydCBpcyBkaXNhYmxlZCAoanNvbnA6IGZhbHNlKVxuICAgIHRyeSB7XG4gICAgICB0cmFuc3BvcnQgPSB0aGlzLmNyZWF0ZVRyYW5zcG9ydCh0cmFuc3BvcnQpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGRlYnVnKFwiZXJyb3Igd2hpbGUgY3JlYXRpbmcgdHJhbnNwb3J0OiAlc1wiLCBlKTtcbiAgICAgIHRoaXMudHJhbnNwb3J0cy5zaGlmdCgpO1xuICAgICAgdGhpcy5vcGVuKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdHJhbnNwb3J0Lm9wZW4oKTtcbiAgICB0aGlzLnNldFRyYW5zcG9ydCh0cmFuc3BvcnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGN1cnJlbnQgdHJhbnNwb3J0LiBEaXNhYmxlcyB0aGUgZXhpc3Rpbmcgb25lIChpZiBhbnkpLlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIHNldFRyYW5zcG9ydCh0cmFuc3BvcnQpIHtcbiAgICBkZWJ1ZyhcInNldHRpbmcgdHJhbnNwb3J0ICVzXCIsIHRyYW5zcG9ydC5uYW1lKTtcblxuICAgIGlmICh0aGlzLnRyYW5zcG9ydCkge1xuICAgICAgZGVidWcoXCJjbGVhcmluZyBleGlzdGluZyB0cmFuc3BvcnQgJXNcIiwgdGhpcy50cmFuc3BvcnQubmFtZSk7XG4gICAgICB0aGlzLnRyYW5zcG9ydC5yZW1vdmVBbGxMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICAvLyBzZXQgdXAgdHJhbnNwb3J0XG4gICAgdGhpcy50cmFuc3BvcnQgPSB0cmFuc3BvcnQ7XG5cbiAgICAvLyBzZXQgdXAgdHJhbnNwb3J0IGxpc3RlbmVyc1xuICAgIHRyYW5zcG9ydFxuICAgICAgLm9uKFwiZHJhaW5cIiwgdGhpcy5vbkRyYWluLmJpbmQodGhpcykpXG4gICAgICAub24oXCJwYWNrZXRcIiwgdGhpcy5vblBhY2tldC5iaW5kKHRoaXMpKVxuICAgICAgLm9uKFwiZXJyb3JcIiwgdGhpcy5vbkVycm9yLmJpbmQodGhpcykpXG4gICAgICAub24oXCJjbG9zZVwiLCAoKSA9PiB7XG4gICAgICAgIHRoaXMub25DbG9zZShcInRyYW5zcG9ydCBjbG9zZVwiKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb2JlcyBhIHRyYW5zcG9ydC5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IHRyYW5zcG9ydCBuYW1lXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgcHJvYmUobmFtZSkge1xuICAgIGRlYnVnKCdwcm9iaW5nIHRyYW5zcG9ydCBcIiVzXCInLCBuYW1lKTtcbiAgICBsZXQgdHJhbnNwb3J0ID0gdGhpcy5jcmVhdGVUcmFuc3BvcnQobmFtZSwgeyBwcm9iZTogMSB9KTtcbiAgICBsZXQgZmFpbGVkID0gZmFsc2U7XG5cbiAgICBTb2NrZXQucHJpb3JXZWJzb2NrZXRTdWNjZXNzID0gZmFsc2U7XG5cbiAgICBjb25zdCBvblRyYW5zcG9ydE9wZW4gPSAoKSA9PiB7XG4gICAgICBpZiAoZmFpbGVkKSByZXR1cm47XG5cbiAgICAgIGRlYnVnKCdwcm9iZSB0cmFuc3BvcnQgXCIlc1wiIG9wZW5lZCcsIG5hbWUpO1xuICAgICAgdHJhbnNwb3J0LnNlbmQoW3sgdHlwZTogXCJwaW5nXCIsIGRhdGE6IFwicHJvYmVcIiB9XSk7XG4gICAgICB0cmFuc3BvcnQub25jZShcInBhY2tldFwiLCBtc2cgPT4ge1xuICAgICAgICBpZiAoZmFpbGVkKSByZXR1cm47XG4gICAgICAgIGlmIChcInBvbmdcIiA9PT0gbXNnLnR5cGUgJiYgXCJwcm9iZVwiID09PSBtc2cuZGF0YSkge1xuICAgICAgICAgIGRlYnVnKCdwcm9iZSB0cmFuc3BvcnQgXCIlc1wiIHBvbmcnLCBuYW1lKTtcbiAgICAgICAgICB0aGlzLnVwZ3JhZGluZyA9IHRydWU7XG4gICAgICAgICAgdGhpcy5lbWl0KFwidXBncmFkaW5nXCIsIHRyYW5zcG9ydCk7XG4gICAgICAgICAgaWYgKCF0cmFuc3BvcnQpIHJldHVybjtcbiAgICAgICAgICBTb2NrZXQucHJpb3JXZWJzb2NrZXRTdWNjZXNzID0gXCJ3ZWJzb2NrZXRcIiA9PT0gdHJhbnNwb3J0Lm5hbWU7XG5cbiAgICAgICAgICBkZWJ1ZygncGF1c2luZyBjdXJyZW50IHRyYW5zcG9ydCBcIiVzXCInLCB0aGlzLnRyYW5zcG9ydC5uYW1lKTtcbiAgICAgICAgICB0aGlzLnRyYW5zcG9ydC5wYXVzZSgoKSA9PiB7XG4gICAgICAgICAgICBpZiAoZmFpbGVkKSByZXR1cm47XG4gICAgICAgICAgICBpZiAoXCJjbG9zZWRcIiA9PT0gdGhpcy5yZWFkeVN0YXRlKSByZXR1cm47XG4gICAgICAgICAgICBkZWJ1ZyhcImNoYW5naW5nIHRyYW5zcG9ydCBhbmQgc2VuZGluZyB1cGdyYWRlIHBhY2tldFwiKTtcblxuICAgICAgICAgICAgY2xlYW51cCgpO1xuXG4gICAgICAgICAgICB0aGlzLnNldFRyYW5zcG9ydCh0cmFuc3BvcnQpO1xuICAgICAgICAgICAgdHJhbnNwb3J0LnNlbmQoW3sgdHlwZTogXCJ1cGdyYWRlXCIgfV0pO1xuICAgICAgICAgICAgdGhpcy5lbWl0KFwidXBncmFkZVwiLCB0cmFuc3BvcnQpO1xuICAgICAgICAgICAgdHJhbnNwb3J0ID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMudXBncmFkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmZsdXNoKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGVidWcoJ3Byb2JlIHRyYW5zcG9ydCBcIiVzXCIgZmFpbGVkJywgbmFtZSk7XG4gICAgICAgICAgY29uc3QgZXJyID0gbmV3IEVycm9yKFwicHJvYmUgZXJyb3JcIik7XG4gICAgICAgICAgZXJyLnRyYW5zcG9ydCA9IHRyYW5zcG9ydC5uYW1lO1xuICAgICAgICAgIHRoaXMuZW1pdChcInVwZ3JhZGVFcnJvclwiLCBlcnIpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gZnJlZXplVHJhbnNwb3J0KCkge1xuICAgICAgaWYgKGZhaWxlZCkgcmV0dXJuO1xuXG4gICAgICAvLyBBbnkgY2FsbGJhY2sgY2FsbGVkIGJ5IHRyYW5zcG9ydCBzaG91bGQgYmUgaWdub3JlZCBzaW5jZSBub3dcbiAgICAgIGZhaWxlZCA9IHRydWU7XG5cbiAgICAgIGNsZWFudXAoKTtcblxuICAgICAgdHJhbnNwb3J0LmNsb3NlKCk7XG4gICAgICB0cmFuc3BvcnQgPSBudWxsO1xuICAgIH1cblxuICAgIC8vIEhhbmRsZSBhbnkgZXJyb3IgdGhhdCBoYXBwZW5zIHdoaWxlIHByb2JpbmdcbiAgICBjb25zdCBvbmVycm9yID0gZXJyID0+IHtcbiAgICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKFwicHJvYmUgZXJyb3I6IFwiICsgZXJyKTtcbiAgICAgIGVycm9yLnRyYW5zcG9ydCA9IHRyYW5zcG9ydC5uYW1lO1xuXG4gICAgICBmcmVlemVUcmFuc3BvcnQoKTtcblxuICAgICAgZGVidWcoJ3Byb2JlIHRyYW5zcG9ydCBcIiVzXCIgZmFpbGVkIGJlY2F1c2Ugb2YgZXJyb3I6ICVzJywgbmFtZSwgZXJyKTtcblxuICAgICAgdGhpcy5lbWl0KFwidXBncmFkZUVycm9yXCIsIGVycm9yKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gb25UcmFuc3BvcnRDbG9zZSgpIHtcbiAgICAgIG9uZXJyb3IoXCJ0cmFuc3BvcnQgY2xvc2VkXCIpO1xuICAgIH1cblxuICAgIC8vIFdoZW4gdGhlIHNvY2tldCBpcyBjbG9zZWQgd2hpbGUgd2UncmUgcHJvYmluZ1xuICAgIGZ1bmN0aW9uIG9uY2xvc2UoKSB7XG4gICAgICBvbmVycm9yKFwic29ja2V0IGNsb3NlZFwiKTtcbiAgICB9XG5cbiAgICAvLyBXaGVuIHRoZSBzb2NrZXQgaXMgdXBncmFkZWQgd2hpbGUgd2UncmUgcHJvYmluZ1xuICAgIGZ1bmN0aW9uIG9udXBncmFkZSh0bykge1xuICAgICAgaWYgKHRyYW5zcG9ydCAmJiB0by5uYW1lICE9PSB0cmFuc3BvcnQubmFtZSkge1xuICAgICAgICBkZWJ1ZygnXCIlc1wiIHdvcmtzIC0gYWJvcnRpbmcgXCIlc1wiJywgdG8ubmFtZSwgdHJhbnNwb3J0Lm5hbWUpO1xuICAgICAgICBmcmVlemVUcmFuc3BvcnQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZW1vdmUgYWxsIGxpc3RlbmVycyBvbiB0aGUgdHJhbnNwb3J0IGFuZCBvbiBzZWxmXG4gICAgY29uc3QgY2xlYW51cCA9ICgpID0+IHtcbiAgICAgIHRyYW5zcG9ydC5yZW1vdmVMaXN0ZW5lcihcIm9wZW5cIiwgb25UcmFuc3BvcnRPcGVuKTtcbiAgICAgIHRyYW5zcG9ydC5yZW1vdmVMaXN0ZW5lcihcImVycm9yXCIsIG9uZXJyb3IpO1xuICAgICAgdHJhbnNwb3J0LnJlbW92ZUxpc3RlbmVyKFwiY2xvc2VcIiwgb25UcmFuc3BvcnRDbG9zZSk7XG4gICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKFwiY2xvc2VcIiwgb25jbG9zZSk7XG4gICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKFwidXBncmFkaW5nXCIsIG9udXBncmFkZSk7XG4gICAgfTtcblxuICAgIHRyYW5zcG9ydC5vbmNlKFwib3BlblwiLCBvblRyYW5zcG9ydE9wZW4pO1xuICAgIHRyYW5zcG9ydC5vbmNlKFwiZXJyb3JcIiwgb25lcnJvcik7XG4gICAgdHJhbnNwb3J0Lm9uY2UoXCJjbG9zZVwiLCBvblRyYW5zcG9ydENsb3NlKTtcblxuICAgIHRoaXMub25jZShcImNsb3NlXCIsIG9uY2xvc2UpO1xuICAgIHRoaXMub25jZShcInVwZ3JhZGluZ1wiLCBvbnVwZ3JhZGUpO1xuXG4gICAgdHJhbnNwb3J0Lm9wZW4oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiBjb25uZWN0aW9uIGlzIGRlZW1lZCBvcGVuLlxuICAgKlxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cbiAgb25PcGVuKCkge1xuICAgIGRlYnVnKFwic29ja2V0IG9wZW5cIik7XG4gICAgdGhpcy5yZWFkeVN0YXRlID0gXCJvcGVuXCI7XG4gICAgU29ja2V0LnByaW9yV2Vic29ja2V0U3VjY2VzcyA9IFwid2Vic29ja2V0XCIgPT09IHRoaXMudHJhbnNwb3J0Lm5hbWU7XG4gICAgdGhpcy5lbWl0KFwib3BlblwiKTtcbiAgICB0aGlzLmZsdXNoKCk7XG5cbiAgICAvLyB3ZSBjaGVjayBmb3IgYHJlYWR5U3RhdGVgIGluIGNhc2UgYW4gYG9wZW5gXG4gICAgLy8gbGlzdGVuZXIgYWxyZWFkeSBjbG9zZWQgdGhlIHNvY2tldFxuICAgIGlmIChcbiAgICAgIFwib3BlblwiID09PSB0aGlzLnJlYWR5U3RhdGUgJiZcbiAgICAgIHRoaXMub3B0cy51cGdyYWRlICYmXG4gICAgICB0aGlzLnRyYW5zcG9ydC5wYXVzZVxuICAgICkge1xuICAgICAgZGVidWcoXCJzdGFydGluZyB1cGdyYWRlIHByb2Jlc1wiKTtcbiAgICAgIGxldCBpID0gMDtcbiAgICAgIGNvbnN0IGwgPSB0aGlzLnVwZ3JhZGVzLmxlbmd0aDtcbiAgICAgIGZvciAoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIHRoaXMucHJvYmUodGhpcy51cGdyYWRlc1tpXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgYSBwYWNrZXQuXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgb25QYWNrZXQocGFja2V0KSB7XG4gICAgaWYgKFxuICAgICAgXCJvcGVuaW5nXCIgPT09IHRoaXMucmVhZHlTdGF0ZSB8fFxuICAgICAgXCJvcGVuXCIgPT09IHRoaXMucmVhZHlTdGF0ZSB8fFxuICAgICAgXCJjbG9zaW5nXCIgPT09IHRoaXMucmVhZHlTdGF0ZVxuICAgICkge1xuICAgICAgZGVidWcoJ3NvY2tldCByZWNlaXZlOiB0eXBlIFwiJXNcIiwgZGF0YSBcIiVzXCInLCBwYWNrZXQudHlwZSwgcGFja2V0LmRhdGEpO1xuXG4gICAgICB0aGlzLmVtaXQoXCJwYWNrZXRcIiwgcGFja2V0KTtcblxuICAgICAgLy8gU29ja2V0IGlzIGxpdmUgLSBhbnkgcGFja2V0IGNvdW50c1xuICAgICAgdGhpcy5lbWl0KFwiaGVhcnRiZWF0XCIpO1xuXG4gICAgICBzd2l0Y2ggKHBhY2tldC50eXBlKSB7XG4gICAgICAgIGNhc2UgXCJvcGVuXCI6XG4gICAgICAgICAgdGhpcy5vbkhhbmRzaGFrZShKU09OLnBhcnNlKHBhY2tldC5kYXRhKSk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcInBpbmdcIjpcbiAgICAgICAgICB0aGlzLnJlc2V0UGluZ1RpbWVvdXQoKTtcbiAgICAgICAgICB0aGlzLnNlbmRQYWNrZXQoXCJwb25nXCIpO1xuICAgICAgICAgIHRoaXMuZW1pdChcInBvbmdcIik7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcImVycm9yXCI6XG4gICAgICAgICAgY29uc3QgZXJyID0gbmV3IEVycm9yKFwic2VydmVyIGVycm9yXCIpO1xuICAgICAgICAgIGVyci5jb2RlID0gcGFja2V0LmRhdGE7XG4gICAgICAgICAgdGhpcy5vbkVycm9yKGVycik7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcIm1lc3NhZ2VcIjpcbiAgICAgICAgICB0aGlzLmVtaXQoXCJkYXRhXCIsIHBhY2tldC5kYXRhKTtcbiAgICAgICAgICB0aGlzLmVtaXQoXCJtZXNzYWdlXCIsIHBhY2tldC5kYXRhKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZGVidWcoJ3BhY2tldCByZWNlaXZlZCB3aXRoIHNvY2tldCByZWFkeVN0YXRlIFwiJXNcIicsIHRoaXMucmVhZHlTdGF0ZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCB1cG9uIGhhbmRzaGFrZSBjb21wbGV0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gaGFuZHNoYWtlIG9ialxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIG9uSGFuZHNoYWtlKGRhdGEpIHtcbiAgICB0aGlzLmVtaXQoXCJoYW5kc2hha2VcIiwgZGF0YSk7XG4gICAgdGhpcy5pZCA9IGRhdGEuc2lkO1xuICAgIHRoaXMudHJhbnNwb3J0LnF1ZXJ5LnNpZCA9IGRhdGEuc2lkO1xuICAgIHRoaXMudXBncmFkZXMgPSB0aGlzLmZpbHRlclVwZ3JhZGVzKGRhdGEudXBncmFkZXMpO1xuICAgIHRoaXMucGluZ0ludGVydmFsID0gZGF0YS5waW5nSW50ZXJ2YWw7XG4gICAgdGhpcy5waW5nVGltZW91dCA9IGRhdGEucGluZ1RpbWVvdXQ7XG4gICAgdGhpcy5vbk9wZW4oKTtcbiAgICAvLyBJbiBjYXNlIG9wZW4gaGFuZGxlciBjbG9zZXMgc29ja2V0XG4gICAgaWYgKFwiY2xvc2VkXCIgPT09IHRoaXMucmVhZHlTdGF0ZSkgcmV0dXJuO1xuICAgIHRoaXMucmVzZXRQaW5nVGltZW91dCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgYW5kIHJlc2V0cyBwaW5nIHRpbWVvdXQgdGltZXIgYmFzZWQgb24gc2VydmVyIHBpbmdzLlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIHJlc2V0UGluZ1RpbWVvdXQoKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMucGluZ1RpbWVvdXRUaW1lcik7XG4gICAgdGhpcy5waW5nVGltZW91dFRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLm9uQ2xvc2UoXCJwaW5nIHRpbWVvdXRcIik7XG4gICAgfSwgdGhpcy5waW5nSW50ZXJ2YWwgKyB0aGlzLnBpbmdUaW1lb3V0KTtcbiAgICBpZiAodGhpcy5vcHRzLmF1dG9VbnJlZikge1xuICAgICAgdGhpcy5waW5nVGltZW91dFRpbWVyLnVucmVmKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCBvbiBgZHJhaW5gIGV2ZW50XG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgb25EcmFpbigpIHtcbiAgICB0aGlzLndyaXRlQnVmZmVyLnNwbGljZSgwLCB0aGlzLnByZXZCdWZmZXJMZW4pO1xuXG4gICAgLy8gc2V0dGluZyBwcmV2QnVmZmVyTGVuID0gMCBpcyB2ZXJ5IGltcG9ydGFudFxuICAgIC8vIGZvciBleGFtcGxlLCB3aGVuIHVwZ3JhZGluZywgdXBncmFkZSBwYWNrZXQgaXMgc2VudCBvdmVyLFxuICAgIC8vIGFuZCBhIG5vbnplcm8gcHJldkJ1ZmZlckxlbiBjb3VsZCBjYXVzZSBwcm9ibGVtcyBvbiBgZHJhaW5gXG4gICAgdGhpcy5wcmV2QnVmZmVyTGVuID0gMDtcblxuICAgIGlmICgwID09PSB0aGlzLndyaXRlQnVmZmVyLmxlbmd0aCkge1xuICAgICAgdGhpcy5lbWl0KFwiZHJhaW5cIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZmx1c2goKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRmx1c2ggd3JpdGUgYnVmZmVycy5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBmbHVzaCgpIHtcbiAgICBpZiAoXG4gICAgICBcImNsb3NlZFwiICE9PSB0aGlzLnJlYWR5U3RhdGUgJiZcbiAgICAgIHRoaXMudHJhbnNwb3J0LndyaXRhYmxlICYmXG4gICAgICAhdGhpcy51cGdyYWRpbmcgJiZcbiAgICAgIHRoaXMud3JpdGVCdWZmZXIubGVuZ3RoXG4gICAgKSB7XG4gICAgICBkZWJ1ZyhcImZsdXNoaW5nICVkIHBhY2tldHMgaW4gc29ja2V0XCIsIHRoaXMud3JpdGVCdWZmZXIubGVuZ3RoKTtcbiAgICAgIHRoaXMudHJhbnNwb3J0LnNlbmQodGhpcy53cml0ZUJ1ZmZlcik7XG4gICAgICAvLyBrZWVwIHRyYWNrIG9mIGN1cnJlbnQgbGVuZ3RoIG9mIHdyaXRlQnVmZmVyXG4gICAgICAvLyBzcGxpY2Ugd3JpdGVCdWZmZXIgYW5kIGNhbGxiYWNrQnVmZmVyIG9uIGBkcmFpbmBcbiAgICAgIHRoaXMucHJldkJ1ZmZlckxlbiA9IHRoaXMud3JpdGVCdWZmZXIubGVuZ3RoO1xuICAgICAgdGhpcy5lbWl0KFwiZmx1c2hcIik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNlbmRzIGEgbWVzc2FnZS5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2UuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIGZ1bmN0aW9uLlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucy5cbiAgICogQHJldHVybiB7U29ja2V0fSBmb3IgY2hhaW5pbmcuXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuICB3cml0ZShtc2csIG9wdGlvbnMsIGZuKSB7XG4gICAgdGhpcy5zZW5kUGFja2V0KFwibWVzc2FnZVwiLCBtc2csIG9wdGlvbnMsIGZuKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNlbmQobXNnLCBvcHRpb25zLCBmbikge1xuICAgIHRoaXMuc2VuZFBhY2tldChcIm1lc3NhZ2VcIiwgbXNnLCBvcHRpb25zLCBmbik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogU2VuZHMgYSBwYWNrZXQuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwYWNrZXQgdHlwZS5cbiAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGEuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBmdW5jdGlvbi5cbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBzZW5kUGFja2V0KHR5cGUsIGRhdGEsIG9wdGlvbnMsIGZuKSB7XG4gICAgaWYgKFwiZnVuY3Rpb25cIiA9PT0gdHlwZW9mIGRhdGEpIHtcbiAgICAgIGZuID0gZGF0YTtcbiAgICAgIGRhdGEgPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgaWYgKFwiZnVuY3Rpb25cIiA9PT0gdHlwZW9mIG9wdGlvbnMpIHtcbiAgICAgIGZuID0gb3B0aW9ucztcbiAgICAgIG9wdGlvbnMgPSBudWxsO1xuICAgIH1cblxuICAgIGlmIChcImNsb3NpbmdcIiA9PT0gdGhpcy5yZWFkeVN0YXRlIHx8IFwiY2xvc2VkXCIgPT09IHRoaXMucmVhZHlTdGF0ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIG9wdGlvbnMuY29tcHJlc3MgPSBmYWxzZSAhPT0gb3B0aW9ucy5jb21wcmVzcztcblxuICAgIGNvbnN0IHBhY2tldCA9IHtcbiAgICAgIHR5cGU6IHR5cGUsXG4gICAgICBkYXRhOiBkYXRhLFxuICAgICAgb3B0aW9uczogb3B0aW9uc1xuICAgIH07XG4gICAgdGhpcy5lbWl0KFwicGFja2V0Q3JlYXRlXCIsIHBhY2tldCk7XG4gICAgdGhpcy53cml0ZUJ1ZmZlci5wdXNoKHBhY2tldCk7XG4gICAgaWYgKGZuKSB0aGlzLm9uY2UoXCJmbHVzaFwiLCBmbik7XG4gICAgdGhpcy5mbHVzaCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsb3NlcyB0aGUgY29ubmVjdGlvbi5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBjbG9zZSgpIHtcbiAgICBjb25zdCBjbG9zZSA9ICgpID0+IHtcbiAgICAgIHRoaXMub25DbG9zZShcImZvcmNlZCBjbG9zZVwiKTtcbiAgICAgIGRlYnVnKFwic29ja2V0IGNsb3NpbmcgLSB0ZWxsaW5nIHRyYW5zcG9ydCB0byBjbG9zZVwiKTtcbiAgICAgIHRoaXMudHJhbnNwb3J0LmNsb3NlKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGNsZWFudXBBbmRDbG9zZSA9ICgpID0+IHtcbiAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIoXCJ1cGdyYWRlXCIsIGNsZWFudXBBbmRDbG9zZSk7XG4gICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKFwidXBncmFkZUVycm9yXCIsIGNsZWFudXBBbmRDbG9zZSk7XG4gICAgICBjbG9zZSgpO1xuICAgIH07XG5cbiAgICBjb25zdCB3YWl0Rm9yVXBncmFkZSA9ICgpID0+IHtcbiAgICAgIC8vIHdhaXQgZm9yIHVwZ3JhZGUgdG8gZmluaXNoIHNpbmNlIHdlIGNhbid0IHNlbmQgcGFja2V0cyB3aGlsZSBwYXVzaW5nIGEgdHJhbnNwb3J0XG4gICAgICB0aGlzLm9uY2UoXCJ1cGdyYWRlXCIsIGNsZWFudXBBbmRDbG9zZSk7XG4gICAgICB0aGlzLm9uY2UoXCJ1cGdyYWRlRXJyb3JcIiwgY2xlYW51cEFuZENsb3NlKTtcbiAgICB9O1xuXG4gICAgaWYgKFwib3BlbmluZ1wiID09PSB0aGlzLnJlYWR5U3RhdGUgfHwgXCJvcGVuXCIgPT09IHRoaXMucmVhZHlTdGF0ZSkge1xuICAgICAgdGhpcy5yZWFkeVN0YXRlID0gXCJjbG9zaW5nXCI7XG5cbiAgICAgIGlmICh0aGlzLndyaXRlQnVmZmVyLmxlbmd0aCkge1xuICAgICAgICB0aGlzLm9uY2UoXCJkcmFpblwiLCAoKSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMudXBncmFkaW5nKSB7XG4gICAgICAgICAgICB3YWl0Rm9yVXBncmFkZSgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjbG9zZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMudXBncmFkaW5nKSB7XG4gICAgICAgIHdhaXRGb3JVcGdyYWRlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjbG9zZSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCB1cG9uIHRyYW5zcG9ydCBlcnJvclxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIG9uRXJyb3IoZXJyKSB7XG4gICAgZGVidWcoXCJzb2NrZXQgZXJyb3IgJWpcIiwgZXJyKTtcbiAgICBTb2NrZXQucHJpb3JXZWJzb2NrZXRTdWNjZXNzID0gZmFsc2U7XG4gICAgdGhpcy5lbWl0KFwiZXJyb3JcIiwgZXJyKTtcbiAgICB0aGlzLm9uQ2xvc2UoXCJ0cmFuc3BvcnQgZXJyb3JcIiwgZXJyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgdXBvbiB0cmFuc3BvcnQgY2xvc2UuXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgb25DbG9zZShyZWFzb24sIGRlc2MpIHtcbiAgICBpZiAoXG4gICAgICBcIm9wZW5pbmdcIiA9PT0gdGhpcy5yZWFkeVN0YXRlIHx8XG4gICAgICBcIm9wZW5cIiA9PT0gdGhpcy5yZWFkeVN0YXRlIHx8XG4gICAgICBcImNsb3NpbmdcIiA9PT0gdGhpcy5yZWFkeVN0YXRlXG4gICAgKSB7XG4gICAgICBkZWJ1Zygnc29ja2V0IGNsb3NlIHdpdGggcmVhc29uOiBcIiVzXCInLCByZWFzb24pO1xuXG4gICAgICAvLyBjbGVhciB0aW1lcnNcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLnBpbmdJbnRlcnZhbFRpbWVyKTtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLnBpbmdUaW1lb3V0VGltZXIpO1xuXG4gICAgICAvLyBzdG9wIGV2ZW50IGZyb20gZmlyaW5nIGFnYWluIGZvciB0cmFuc3BvcnRcbiAgICAgIHRoaXMudHJhbnNwb3J0LnJlbW92ZUFsbExpc3RlbmVycyhcImNsb3NlXCIpO1xuXG4gICAgICAvLyBlbnN1cmUgdHJhbnNwb3J0IHdvbid0IHN0YXkgb3BlblxuICAgICAgdGhpcy50cmFuc3BvcnQuY2xvc2UoKTtcblxuICAgICAgLy8gaWdub3JlIGZ1cnRoZXIgdHJhbnNwb3J0IGNvbW11bmljYXRpb25cbiAgICAgIHRoaXMudHJhbnNwb3J0LnJlbW92ZUFsbExpc3RlbmVycygpO1xuXG4gICAgICBpZiAodHlwZW9mIHJlbW92ZUV2ZW50TGlzdGVuZXIgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZW1vdmVFdmVudExpc3RlbmVyKFwib2ZmbGluZVwiLCB0aGlzLm9mZmxpbmVFdmVudExpc3RlbmVyLCBmYWxzZSk7XG4gICAgICB9XG5cbiAgICAgIC8vIHNldCByZWFkeSBzdGF0ZVxuICAgICAgdGhpcy5yZWFkeVN0YXRlID0gXCJjbG9zZWRcIjtcblxuICAgICAgLy8gY2xlYXIgc2Vzc2lvbiBpZFxuICAgICAgdGhpcy5pZCA9IG51bGw7XG5cbiAgICAgIC8vIGVtaXQgY2xvc2UgZXZlbnRcbiAgICAgIHRoaXMuZW1pdChcImNsb3NlXCIsIHJlYXNvbiwgZGVzYyk7XG5cbiAgICAgIC8vIGNsZWFuIGJ1ZmZlcnMgYWZ0ZXIsIHNvIHVzZXJzIGNhbiBzdGlsbFxuICAgICAgLy8gZ3JhYiB0aGUgYnVmZmVycyBvbiBgY2xvc2VgIGV2ZW50XG4gICAgICB0aGlzLndyaXRlQnVmZmVyID0gW107XG4gICAgICB0aGlzLnByZXZCdWZmZXJMZW4gPSAwO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBGaWx0ZXJzIHVwZ3JhZGVzLCByZXR1cm5pbmcgb25seSB0aG9zZSBtYXRjaGluZyBjbGllbnQgdHJhbnNwb3J0cy5cbiAgICpcbiAgICogQHBhcmFtIHtBcnJheX0gc2VydmVyIHVwZ3JhZGVzXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKlxuICAgKi9cbiAgZmlsdGVyVXBncmFkZXModXBncmFkZXMpIHtcbiAgICBjb25zdCBmaWx0ZXJlZFVwZ3JhZGVzID0gW107XG4gICAgbGV0IGkgPSAwO1xuICAgIGNvbnN0IGogPSB1cGdyYWRlcy5sZW5ndGg7XG4gICAgZm9yICg7IGkgPCBqOyBpKyspIHtcbiAgICAgIGlmICh+dGhpcy50cmFuc3BvcnRzLmluZGV4T2YodXBncmFkZXNbaV0pKVxuICAgICAgICBmaWx0ZXJlZFVwZ3JhZGVzLnB1c2godXBncmFkZXNbaV0pO1xuICAgIH1cbiAgICByZXR1cm4gZmlsdGVyZWRVcGdyYWRlcztcbiAgfVxufVxuXG5Tb2NrZXQucHJpb3JXZWJzb2NrZXRTdWNjZXNzID0gZmFsc2U7XG5cbi8qKlxuICogUHJvdG9jb2wgdmVyc2lvbi5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblNvY2tldC5wcm90b2NvbCA9IHBhcnNlci5wcm90b2NvbDsgLy8gdGhpcyBpcyBhbiBpbnRcblxuZnVuY3Rpb24gY2xvbmUob2JqKSB7XG4gIGNvbnN0IG8gPSB7fTtcbiAgZm9yIChsZXQgaSBpbiBvYmopIHtcbiAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICBvW2ldID0gb2JqW2ldO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTb2NrZXQ7XG4iLCJjb25zdCBwYXJzZXIgPSByZXF1aXJlKFwiZW5naW5lLmlvLXBhcnNlclwiKTtcbmNvbnN0IEVtaXR0ZXIgPSByZXF1aXJlKFwiY29tcG9uZW50LWVtaXR0ZXJcIik7XG5jb25zdCBkZWJ1ZyA9IHJlcXVpcmUoXCJkZWJ1Z1wiKShcImVuZ2luZS5pby1jbGllbnQ6dHJhbnNwb3J0XCIpO1xuXG5jbGFzcyBUcmFuc3BvcnQgZXh0ZW5kcyBFbWl0dGVyIHtcbiAgLyoqXG4gICAqIFRyYW5zcG9ydCBhYnN0cmFjdCBjb25zdHJ1Y3Rvci5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMuXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgY29uc3RydWN0b3Iob3B0cykge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLm9wdHMgPSBvcHRzO1xuICAgIHRoaXMucXVlcnkgPSBvcHRzLnF1ZXJ5O1xuICAgIHRoaXMucmVhZHlTdGF0ZSA9IFwiXCI7XG4gICAgdGhpcy5zb2NrZXQgPSBvcHRzLnNvY2tldDtcbiAgfVxuXG4gIC8qKlxuICAgKiBFbWl0cyBhbiBlcnJvci5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICAgKiBAcmV0dXJuIHtUcmFuc3BvcnR9IGZvciBjaGFpbmluZ1xuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cbiAgb25FcnJvcihtc2csIGRlc2MpIHtcbiAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IobXNnKTtcbiAgICBlcnIudHlwZSA9IFwiVHJhbnNwb3J0RXJyb3JcIjtcbiAgICBlcnIuZGVzY3JpcHRpb24gPSBkZXNjO1xuICAgIHRoaXMuZW1pdChcImVycm9yXCIsIGVycik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogT3BlbnMgdGhlIHRyYW5zcG9ydC5cbiAgICpcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG4gIG9wZW4oKSB7XG4gICAgaWYgKFwiY2xvc2VkXCIgPT09IHRoaXMucmVhZHlTdGF0ZSB8fCBcIlwiID09PSB0aGlzLnJlYWR5U3RhdGUpIHtcbiAgICAgIHRoaXMucmVhZHlTdGF0ZSA9IFwib3BlbmluZ1wiO1xuICAgICAgdGhpcy5kb09wZW4oKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBDbG9zZXMgdGhlIHRyYW5zcG9ydC5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBjbG9zZSgpIHtcbiAgICBpZiAoXCJvcGVuaW5nXCIgPT09IHRoaXMucmVhZHlTdGF0ZSB8fCBcIm9wZW5cIiA9PT0gdGhpcy5yZWFkeVN0YXRlKSB7XG4gICAgICB0aGlzLmRvQ2xvc2UoKTtcbiAgICAgIHRoaXMub25DbG9zZSgpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbmRzIG11bHRpcGxlIHBhY2tldHMuXG4gICAqXG4gICAqIEBwYXJhbSB7QXJyYXl9IHBhY2tldHNcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBzZW5kKHBhY2tldHMpIHtcbiAgICBpZiAoXCJvcGVuXCIgPT09IHRoaXMucmVhZHlTdGF0ZSkge1xuICAgICAgdGhpcy53cml0ZShwYWNrZXRzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gdGhpcyBtaWdodCBoYXBwZW4gaWYgdGhlIHRyYW5zcG9ydCB3YXMgc2lsZW50bHkgY2xvc2VkIGluIHRoZSBiZWZvcmV1bmxvYWQgZXZlbnQgaGFuZGxlclxuICAgICAgZGVidWcoXCJ0cmFuc3BvcnQgaXMgbm90IG9wZW4sIGRpc2NhcmRpbmcgcGFja2V0c1wiKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIHVwb24gb3BlblxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIG9uT3BlbigpIHtcbiAgICB0aGlzLnJlYWR5U3RhdGUgPSBcIm9wZW5cIjtcbiAgICB0aGlzLndyaXRhYmxlID0gdHJ1ZTtcbiAgICB0aGlzLmVtaXQoXCJvcGVuXCIpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aXRoIGRhdGEuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgb25EYXRhKGRhdGEpIHtcbiAgICBjb25zdCBwYWNrZXQgPSBwYXJzZXIuZGVjb2RlUGFja2V0KGRhdGEsIHRoaXMuc29ja2V0LmJpbmFyeVR5cGUpO1xuICAgIHRoaXMub25QYWNrZXQocGFja2V0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2l0aCBhIGRlY29kZWQgcGFja2V0LlxuICAgKi9cbiAgb25QYWNrZXQocGFja2V0KSB7XG4gICAgdGhpcy5lbWl0KFwicGFja2V0XCIsIHBhY2tldCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIHVwb24gY2xvc2UuXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgb25DbG9zZSgpIHtcbiAgICB0aGlzLnJlYWR5U3RhdGUgPSBcImNsb3NlZFwiO1xuICAgIHRoaXMuZW1pdChcImNsb3NlXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVHJhbnNwb3J0O1xuIiwiY29uc3QgWE1MSHR0cFJlcXVlc3QgPSByZXF1aXJlKFwiLi4vLi4vY29udHJpYi94bWxodHRwcmVxdWVzdC1zc2wvWE1MSHR0cFJlcXVlc3RcIik7XG5jb25zdCBYSFIgPSByZXF1aXJlKFwiLi9wb2xsaW5nLXhoclwiKTtcbmNvbnN0IEpTT05QID0gcmVxdWlyZShcIi4vcG9sbGluZy1qc29ucFwiKTtcbmNvbnN0IHdlYnNvY2tldCA9IHJlcXVpcmUoXCIuL3dlYnNvY2tldFwiKTtcblxuZXhwb3J0cy5wb2xsaW5nID0gcG9sbGluZztcbmV4cG9ydHMud2Vic29ja2V0ID0gd2Vic29ja2V0O1xuXG4vKipcbiAqIFBvbGxpbmcgdHJhbnNwb3J0IHBvbHltb3JwaGljIGNvbnN0cnVjdG9yLlxuICogRGVjaWRlcyBvbiB4aHIgdnMganNvbnAgYmFzZWQgb24gZmVhdHVyZSBkZXRlY3Rpb24uXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gcG9sbGluZyhvcHRzKSB7XG4gIGxldCB4aHI7XG4gIGxldCB4ZCA9IGZhbHNlO1xuICBsZXQgeHMgPSBmYWxzZTtcbiAgY29uc3QganNvbnAgPSBmYWxzZSAhPT0gb3B0cy5qc29ucDtcblxuICBpZiAodHlwZW9mIGxvY2F0aW9uICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY29uc3QgaXNTU0wgPSBcImh0dHBzOlwiID09PSBsb2NhdGlvbi5wcm90b2NvbDtcbiAgICBsZXQgcG9ydCA9IGxvY2F0aW9uLnBvcnQ7XG5cbiAgICAvLyBzb21lIHVzZXIgYWdlbnRzIGhhdmUgZW1wdHkgYGxvY2F0aW9uLnBvcnRgXG4gICAgaWYgKCFwb3J0KSB7XG4gICAgICBwb3J0ID0gaXNTU0wgPyA0NDMgOiA4MDtcbiAgICB9XG5cbiAgICB4ZCA9IG9wdHMuaG9zdG5hbWUgIT09IGxvY2F0aW9uLmhvc3RuYW1lIHx8IHBvcnQgIT09IG9wdHMucG9ydDtcbiAgICB4cyA9IG9wdHMuc2VjdXJlICE9PSBpc1NTTDtcbiAgfVxuXG4gIG9wdHMueGRvbWFpbiA9IHhkO1xuICBvcHRzLnhzY2hlbWUgPSB4cztcbiAgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KG9wdHMpO1xuXG4gIGlmIChcIm9wZW5cIiBpbiB4aHIgJiYgIW9wdHMuZm9yY2VKU09OUCkge1xuICAgIHJldHVybiBuZXcgWEhSKG9wdHMpO1xuICB9IGVsc2Uge1xuICAgIGlmICghanNvbnApIHRocm93IG5ldyBFcnJvcihcIkpTT05QIGRpc2FibGVkXCIpO1xuICAgIHJldHVybiBuZXcgSlNPTlAob3B0cyk7XG4gIH1cbn1cbiIsImNvbnN0IFBvbGxpbmcgPSByZXF1aXJlKFwiLi9wb2xsaW5nXCIpO1xuY29uc3QgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoXCIuLi9nbG9iYWxUaGlzXCIpO1xuXG5jb25zdCByTmV3bGluZSA9IC9cXG4vZztcbmNvbnN0IHJFc2NhcGVkTmV3bGluZSA9IC9cXFxcbi9nO1xuXG4vKipcbiAqIEdsb2JhbCBKU09OUCBjYWxsYmFja3MuXG4gKi9cblxubGV0IGNhbGxiYWNrcztcblxuY2xhc3MgSlNPTlBQb2xsaW5nIGV4dGVuZHMgUG9sbGluZyB7XG4gIC8qKlxuICAgKiBKU09OUCBQb2xsaW5nIGNvbnN0cnVjdG9yLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cy5cbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG4gIGNvbnN0cnVjdG9yKG9wdHMpIHtcbiAgICBzdXBlcihvcHRzKTtcblxuICAgIHRoaXMucXVlcnkgPSB0aGlzLnF1ZXJ5IHx8IHt9O1xuXG4gICAgLy8gZGVmaW5lIGdsb2JhbCBjYWxsYmFja3MgYXJyYXkgaWYgbm90IHByZXNlbnRcbiAgICAvLyB3ZSBkbyB0aGlzIGhlcmUgKGxhemlseSkgdG8gYXZvaWQgdW5uZWVkZWQgZ2xvYmFsIHBvbGx1dGlvblxuICAgIGlmICghY2FsbGJhY2tzKSB7XG4gICAgICAvLyB3ZSBuZWVkIHRvIGNvbnNpZGVyIG11bHRpcGxlIGVuZ2luZXMgaW4gdGhlIHNhbWUgcGFnZVxuICAgICAgY2FsbGJhY2tzID0gZ2xvYmFsVGhpcy5fX19laW8gPSBnbG9iYWxUaGlzLl9fX2VpbyB8fCBbXTtcbiAgICB9XG5cbiAgICAvLyBjYWxsYmFjayBpZGVudGlmaWVyXG4gICAgdGhpcy5pbmRleCA9IGNhbGxiYWNrcy5sZW5ndGg7XG5cbiAgICAvLyBhZGQgY2FsbGJhY2sgdG8ganNvbnAgZ2xvYmFsXG4gICAgY2FsbGJhY2tzLnB1c2godGhpcy5vbkRhdGEuYmluZCh0aGlzKSk7XG5cbiAgICAvLyBhcHBlbmQgdG8gcXVlcnkgc3RyaW5nXG4gICAgdGhpcy5xdWVyeS5qID0gdGhpcy5pbmRleDtcbiAgfVxuXG4gIC8qKlxuICAgKiBKU09OUCBvbmx5IHN1cHBvcnRzIGJpbmFyeSBhcyBiYXNlNjQgZW5jb2RlZCBzdHJpbmdzXG4gICAqL1xuICBnZXQgc3VwcG9ydHNCaW5hcnkoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENsb3NlcyB0aGUgc29ja2V0LlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIGRvQ2xvc2UoKSB7XG4gICAgaWYgKHRoaXMuc2NyaXB0KSB7XG4gICAgICAvLyBwcmV2ZW50IHNwdXJpb3VzIGVycm9ycyBmcm9tIGJlaW5nIGVtaXR0ZWQgd2hlbiB0aGUgd2luZG93IGlzIHVubG9hZGVkXG4gICAgICB0aGlzLnNjcmlwdC5vbmVycm9yID0gKCkgPT4ge307XG4gICAgICB0aGlzLnNjcmlwdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuc2NyaXB0KTtcbiAgICAgIHRoaXMuc2NyaXB0ID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5mb3JtKSB7XG4gICAgICB0aGlzLmZvcm0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmZvcm0pO1xuICAgICAgdGhpcy5mb3JtID0gbnVsbDtcbiAgICAgIHRoaXMuaWZyYW1lID0gbnVsbDtcbiAgICB9XG5cbiAgICBzdXBlci5kb0Nsb3NlKCk7XG4gIH1cblxuICAvKipcbiAgICogU3RhcnRzIGEgcG9sbCBjeWNsZS5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBkb1BvbGwoKSB7XG4gICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcblxuICAgIGlmICh0aGlzLnNjcmlwdCkge1xuICAgICAgdGhpcy5zY3JpcHQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLnNjcmlwdCk7XG4gICAgICB0aGlzLnNjcmlwdCA9IG51bGw7XG4gICAgfVxuXG4gICAgc2NyaXB0LmFzeW5jID0gdHJ1ZTtcbiAgICBzY3JpcHQuc3JjID0gdGhpcy51cmkoKTtcbiAgICBzY3JpcHQub25lcnJvciA9IGUgPT4ge1xuICAgICAgdGhpcy5vbkVycm9yKFwianNvbnAgcG9sbCBlcnJvclwiLCBlKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaW5zZXJ0QXQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKVswXTtcbiAgICBpZiAoaW5zZXJ0QXQpIHtcbiAgICAgIGluc2VydEF0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHNjcmlwdCwgaW5zZXJ0QXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAoZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5ib2R5KS5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgIH1cbiAgICB0aGlzLnNjcmlwdCA9IHNjcmlwdDtcblxuICAgIGNvbnN0IGlzVUFnZWNrbyA9XG4gICAgICBcInVuZGVmaW5lZFwiICE9PSB0eXBlb2YgbmF2aWdhdG9yICYmIC9nZWNrby9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG5cbiAgICBpZiAoaXNVQWdlY2tvKSB7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBpZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoaWZyYW1lKTtcbiAgICAgIH0sIDEwMCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFdyaXRlcyB3aXRoIGEgaGlkZGVuIGlmcmFtZS5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGEgdG8gc2VuZFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsZWQgdXBvbiBmbHVzaC5cbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBkb1dyaXRlKGRhdGEsIGZuKSB7XG4gICAgbGV0IGlmcmFtZTtcblxuICAgIGlmICghdGhpcy5mb3JtKSB7XG4gICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgICBjb25zdCBhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICAgICAgY29uc3QgaWQgPSAodGhpcy5pZnJhbWVJZCA9IFwiZWlvX2lmcmFtZV9cIiArIHRoaXMuaW5kZXgpO1xuXG4gICAgICBmb3JtLmNsYXNzTmFtZSA9IFwic29ja2V0aW9cIjtcbiAgICAgIGZvcm0uc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgICBmb3JtLnN0eWxlLnRvcCA9IFwiLTEwMDBweFwiO1xuICAgICAgZm9ybS5zdHlsZS5sZWZ0ID0gXCItMTAwMHB4XCI7XG4gICAgICBmb3JtLnRhcmdldCA9IGlkO1xuICAgICAgZm9ybS5tZXRob2QgPSBcIlBPU1RcIjtcbiAgICAgIGZvcm0uc2V0QXR0cmlidXRlKFwiYWNjZXB0LWNoYXJzZXRcIiwgXCJ1dGYtOFwiKTtcbiAgICAgIGFyZWEubmFtZSA9IFwiZFwiO1xuICAgICAgZm9ybS5hcHBlbmRDaGlsZChhcmVhKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgICAgIHRoaXMuZm9ybSA9IGZvcm07XG4gICAgICB0aGlzLmFyZWEgPSBhcmVhO1xuICAgIH1cblxuICAgIHRoaXMuZm9ybS5hY3Rpb24gPSB0aGlzLnVyaSgpO1xuXG4gICAgZnVuY3Rpb24gY29tcGxldGUoKSB7XG4gICAgICBpbml0SWZyYW1lKCk7XG4gICAgICBmbigpO1xuICAgIH1cblxuICAgIGNvbnN0IGluaXRJZnJhbWUgPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5pZnJhbWUpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB0aGlzLmZvcm0ucmVtb3ZlQ2hpbGQodGhpcy5pZnJhbWUpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgdGhpcy5vbkVycm9yKFwianNvbnAgcG9sbGluZyBpZnJhbWUgcmVtb3ZhbCBlcnJvclwiLCBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0cnkge1xuICAgICAgICAvLyBpZTYgZHluYW1pYyBpZnJhbWVzIHdpdGggdGFyZ2V0PVwiXCIgc3VwcG9ydCAodGhhbmtzIENocmlzIExhbWJhY2hlcilcbiAgICAgICAgY29uc3QgaHRtbCA9ICc8aWZyYW1lIHNyYz1cImphdmFzY3JpcHQ6MFwiIG5hbWU9XCInICsgdGhpcy5pZnJhbWVJZCArICdcIj4nO1xuICAgICAgICBpZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGh0bWwpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIpO1xuICAgICAgICBpZnJhbWUubmFtZSA9IHRoaXMuaWZyYW1lSWQ7XG4gICAgICAgIGlmcmFtZS5zcmMgPSBcImphdmFzY3JpcHQ6MFwiO1xuICAgICAgfVxuXG4gICAgICBpZnJhbWUuaWQgPSB0aGlzLmlmcmFtZUlkO1xuXG4gICAgICB0aGlzLmZvcm0uYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgICAgIHRoaXMuaWZyYW1lID0gaWZyYW1lO1xuICAgIH07XG5cbiAgICBpbml0SWZyYW1lKCk7XG5cbiAgICAvLyBlc2NhcGUgXFxuIHRvIHByZXZlbnQgaXQgZnJvbSBiZWluZyBjb252ZXJ0ZWQgaW50byBcXHJcXG4gYnkgc29tZSBVQXNcbiAgICAvLyBkb3VibGUgZXNjYXBpbmcgaXMgcmVxdWlyZWQgZm9yIGVzY2FwZWQgbmV3IGxpbmVzIGJlY2F1c2UgdW5lc2NhcGluZyBvZiBuZXcgbGluZXMgY2FuIGJlIGRvbmUgc2FmZWx5IG9uIHNlcnZlci1zaWRlXG4gICAgZGF0YSA9IGRhdGEucmVwbGFjZShyRXNjYXBlZE5ld2xpbmUsIFwiXFxcXFxcblwiKTtcbiAgICB0aGlzLmFyZWEudmFsdWUgPSBkYXRhLnJlcGxhY2Uock5ld2xpbmUsIFwiXFxcXG5cIik7XG5cbiAgICB0cnkge1xuICAgICAgdGhpcy5mb3JtLnN1Ym1pdCgpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG5cbiAgICBpZiAodGhpcy5pZnJhbWUuYXR0YWNoRXZlbnQpIHtcbiAgICAgIHRoaXMuaWZyYW1lLm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuaWZyYW1lLnJlYWR5U3RhdGUgPT09IFwiY29tcGxldGVcIikge1xuICAgICAgICAgIGNvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaWZyYW1lLm9ubG9hZCA9IGNvbXBsZXRlO1xuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEpTT05QUG9sbGluZztcbiIsIi8qIGdsb2JhbCBhdHRhY2hFdmVudCAqL1xuXG5jb25zdCBYTUxIdHRwUmVxdWVzdCA9IHJlcXVpcmUoXCIuLi8uLi9jb250cmliL3htbGh0dHByZXF1ZXN0LXNzbC9YTUxIdHRwUmVxdWVzdFwiKTtcbmNvbnN0IFBvbGxpbmcgPSByZXF1aXJlKFwiLi9wb2xsaW5nXCIpO1xuY29uc3QgRW1pdHRlciA9IHJlcXVpcmUoXCJjb21wb25lbnQtZW1pdHRlclwiKTtcbmNvbnN0IHsgcGljayB9ID0gcmVxdWlyZShcIi4uL3V0aWxcIik7XG5jb25zdCBnbG9iYWxUaGlzID0gcmVxdWlyZShcIi4uL2dsb2JhbFRoaXNcIik7XG5cbmNvbnN0IGRlYnVnID0gcmVxdWlyZShcImRlYnVnXCIpKFwiZW5naW5lLmlvLWNsaWVudDpwb2xsaW5nLXhoclwiKTtcblxuLyoqXG4gKiBFbXB0eSBmdW5jdGlvblxuICovXG5cbmZ1bmN0aW9uIGVtcHR5KCkge31cblxuY29uc3QgaGFzWEhSMiA9IChmdW5jdGlvbigpIHtcbiAgY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KHsgeGRvbWFpbjogZmFsc2UgfSk7XG4gIHJldHVybiBudWxsICE9IHhoci5yZXNwb25zZVR5cGU7XG59KSgpO1xuXG5jbGFzcyBYSFIgZXh0ZW5kcyBQb2xsaW5nIHtcbiAgLyoqXG4gICAqIFhIUiBQb2xsaW5nIGNvbnN0cnVjdG9yLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0c1xuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cbiAgY29uc3RydWN0b3Iob3B0cykge1xuICAgIHN1cGVyKG9wdHMpO1xuXG4gICAgaWYgKHR5cGVvZiBsb2NhdGlvbiAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgY29uc3QgaXNTU0wgPSBcImh0dHBzOlwiID09PSBsb2NhdGlvbi5wcm90b2NvbDtcbiAgICAgIGxldCBwb3J0ID0gbG9jYXRpb24ucG9ydDtcblxuICAgICAgLy8gc29tZSB1c2VyIGFnZW50cyBoYXZlIGVtcHR5IGBsb2NhdGlvbi5wb3J0YFxuICAgICAgaWYgKCFwb3J0KSB7XG4gICAgICAgIHBvcnQgPSBpc1NTTCA/IDQ0MyA6IDgwO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnhkID1cbiAgICAgICAgKHR5cGVvZiBsb2NhdGlvbiAhPT0gXCJ1bmRlZmluZWRcIiAmJlxuICAgICAgICAgIG9wdHMuaG9zdG5hbWUgIT09IGxvY2F0aW9uLmhvc3RuYW1lKSB8fFxuICAgICAgICBwb3J0ICE9PSBvcHRzLnBvcnQ7XG4gICAgICB0aGlzLnhzID0gb3B0cy5zZWN1cmUgIT09IGlzU1NMO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBYSFIgc3VwcG9ydHMgYmluYXJ5XG4gICAgICovXG4gICAgY29uc3QgZm9yY2VCYXNlNjQgPSBvcHRzICYmIG9wdHMuZm9yY2VCYXNlNjQ7XG4gICAgdGhpcy5zdXBwb3J0c0JpbmFyeSA9IGhhc1hIUjIgJiYgIWZvcmNlQmFzZTY0O1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSByZXF1ZXN0LlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgcmVxdWVzdChvcHRzID0ge30pIHtcbiAgICBPYmplY3QuYXNzaWduKG9wdHMsIHsgeGQ6IHRoaXMueGQsIHhzOiB0aGlzLnhzIH0sIHRoaXMub3B0cyk7XG4gICAgcmV0dXJuIG5ldyBSZXF1ZXN0KHRoaXMudXJpKCksIG9wdHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbmRzIGRhdGEuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhIHRvIHNlbmQuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxlZCB1cG9uIGZsdXNoLlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIGRvV3JpdGUoZGF0YSwgZm4pIHtcbiAgICBjb25zdCByZXEgPSB0aGlzLnJlcXVlc3Qoe1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGRhdGE6IGRhdGFcbiAgICB9KTtcbiAgICByZXEub24oXCJzdWNjZXNzXCIsIGZuKTtcbiAgICByZXEub24oXCJlcnJvclwiLCBlcnIgPT4ge1xuICAgICAgdGhpcy5vbkVycm9yKFwieGhyIHBvc3QgZXJyb3JcIiwgZXJyKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdGFydHMgYSBwb2xsIGN5Y2xlLlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIGRvUG9sbCgpIHtcbiAgICBkZWJ1ZyhcInhociBwb2xsXCIpO1xuICAgIGNvbnN0IHJlcSA9IHRoaXMucmVxdWVzdCgpO1xuICAgIHJlcS5vbihcImRhdGFcIiwgdGhpcy5vbkRhdGEuYmluZCh0aGlzKSk7XG4gICAgcmVxLm9uKFwiZXJyb3JcIiwgZXJyID0+IHtcbiAgICAgIHRoaXMub25FcnJvcihcInhociBwb2xsIGVycm9yXCIsIGVycik7XG4gICAgfSk7XG4gICAgdGhpcy5wb2xsWGhyID0gcmVxO1xuICB9XG59XG5cbmNsYXNzIFJlcXVlc3QgZXh0ZW5kcyBFbWl0dGVyIHtcbiAgLyoqXG4gICAqIFJlcXVlc3QgY29uc3RydWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG4gIGNvbnN0cnVjdG9yKHVyaSwgb3B0cykge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5vcHRzID0gb3B0cztcblxuICAgIHRoaXMubWV0aG9kID0gb3B0cy5tZXRob2QgfHwgXCJHRVRcIjtcbiAgICB0aGlzLnVyaSA9IHVyaTtcbiAgICB0aGlzLmFzeW5jID0gZmFsc2UgIT09IG9wdHMuYXN5bmM7XG4gICAgdGhpcy5kYXRhID0gdW5kZWZpbmVkICE9PSBvcHRzLmRhdGEgPyBvcHRzLmRhdGEgOiBudWxsO1xuXG4gICAgdGhpcy5jcmVhdGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIHRoZSBYSFIgb2JqZWN0IGFuZCBzZW5kcyB0aGUgcmVxdWVzdC5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBjcmVhdGUoKSB7XG4gICAgY29uc3Qgb3B0cyA9IHBpY2soXG4gICAgICB0aGlzLm9wdHMsXG4gICAgICBcImFnZW50XCIsXG4gICAgICBcImVuYWJsZXNYRFJcIixcbiAgICAgIFwicGZ4XCIsXG4gICAgICBcImtleVwiLFxuICAgICAgXCJwYXNzcGhyYXNlXCIsXG4gICAgICBcImNlcnRcIixcbiAgICAgIFwiY2FcIixcbiAgICAgIFwiY2lwaGVyc1wiLFxuICAgICAgXCJyZWplY3RVbmF1dGhvcml6ZWRcIixcbiAgICAgIFwiYXV0b1VucmVmXCJcbiAgICApO1xuICAgIG9wdHMueGRvbWFpbiA9ICEhdGhpcy5vcHRzLnhkO1xuICAgIG9wdHMueHNjaGVtZSA9ICEhdGhpcy5vcHRzLnhzO1xuXG4gICAgY29uc3QgeGhyID0gKHRoaXMueGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KG9wdHMpKTtcblxuICAgIHRyeSB7XG4gICAgICBkZWJ1ZyhcInhociBvcGVuICVzOiAlc1wiLCB0aGlzLm1ldGhvZCwgdGhpcy51cmkpO1xuICAgICAgeGhyLm9wZW4odGhpcy5tZXRob2QsIHRoaXMudXJpLCB0aGlzLmFzeW5jKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICh0aGlzLm9wdHMuZXh0cmFIZWFkZXJzKSB7XG4gICAgICAgICAgeGhyLnNldERpc2FibGVIZWFkZXJDaGVjayAmJiB4aHIuc2V0RGlzYWJsZUhlYWRlckNoZWNrKHRydWUpO1xuICAgICAgICAgIGZvciAobGV0IGkgaW4gdGhpcy5vcHRzLmV4dHJhSGVhZGVycykge1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0cy5leHRyYUhlYWRlcnMuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoaSwgdGhpcy5vcHRzLmV4dHJhSGVhZGVyc1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7fVxuXG4gICAgICBpZiAoXCJQT1NUXCIgPT09IHRoaXMubWV0aG9kKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LXR5cGVcIiwgXCJ0ZXh0L3BsYWluO2NoYXJzZXQ9VVRGLThcIik7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICB9XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQWNjZXB0XCIsIFwiKi8qXCIpO1xuICAgICAgfSBjYXRjaCAoZSkge31cblxuICAgICAgLy8gaWU2IGNoZWNrXG4gICAgICBpZiAoXCJ3aXRoQ3JlZGVudGlhbHNcIiBpbiB4aHIpIHtcbiAgICAgICAgeGhyLndpdGhDcmVkZW50aWFscyA9IHRoaXMub3B0cy53aXRoQ3JlZGVudGlhbHM7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLm9wdHMucmVxdWVzdFRpbWVvdXQpIHtcbiAgICAgICAgeGhyLnRpbWVvdXQgPSB0aGlzLm9wdHMucmVxdWVzdFRpbWVvdXQ7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmhhc1hEUigpKSB7XG4gICAgICAgIHhoci5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5vbkxvYWQoKTtcbiAgICAgICAgfTtcbiAgICAgICAgeGhyLm9uZXJyb3IgPSAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5vbkVycm9yKHhoci5yZXNwb25zZVRleHQpO1xuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcbiAgICAgICAgICBpZiAoNCAhPT0geGhyLnJlYWR5U3RhdGUpIHJldHVybjtcbiAgICAgICAgICBpZiAoMjAwID09PSB4aHIuc3RhdHVzIHx8IDEyMjMgPT09IHhoci5zdGF0dXMpIHtcbiAgICAgICAgICAgIHRoaXMub25Mb2FkKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSB0aGUgYGVycm9yYCBldmVudCBoYW5kbGVyIHRoYXQncyB1c2VyLXNldFxuICAgICAgICAgICAgLy8gZG9lcyBub3QgdGhyb3cgaW4gdGhlIHNhbWUgdGljayBhbmQgZ2V0cyBjYXVnaHQgaGVyZVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMub25FcnJvcih0eXBlb2YgeGhyLnN0YXR1cyA9PT0gXCJudW1iZXJcIiA/IHhoci5zdGF0dXMgOiAwKTtcbiAgICAgICAgICAgIH0sIDApO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgZGVidWcoXCJ4aHIgZGF0YSAlc1wiLCB0aGlzLmRhdGEpO1xuICAgICAgeGhyLnNlbmQodGhpcy5kYXRhKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBOZWVkIHRvIGRlZmVyIHNpbmNlIC5jcmVhdGUoKSBpcyBjYWxsZWQgZGlyZWN0bHkgZnJvbSB0aGUgY29uc3RydWN0b3JcbiAgICAgIC8vIGFuZCB0aHVzIHRoZSAnZXJyb3InIGV2ZW50IGNhbiBvbmx5IGJlIG9ubHkgYm91bmQgKmFmdGVyKiB0aGlzIGV4Y2VwdGlvblxuICAgICAgLy8gb2NjdXJzLiAgVGhlcmVmb3JlLCBhbHNvLCB3ZSBjYW5ub3QgdGhyb3cgaGVyZSBhdCBhbGwuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5vbkVycm9yKGUpO1xuICAgICAgfSwgMCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgdGhpcy5pbmRleCA9IFJlcXVlc3QucmVxdWVzdHNDb3VudCsrO1xuICAgICAgUmVxdWVzdC5yZXF1ZXN0c1t0aGlzLmluZGV4XSA9IHRoaXM7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCB1cG9uIHN1Y2Nlc3NmdWwgcmVzcG9uc2UuXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgb25TdWNjZXNzKCkge1xuICAgIHRoaXMuZW1pdChcInN1Y2Nlc3NcIik7XG4gICAgdGhpcy5jbGVhbnVwKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIGlmIHdlIGhhdmUgZGF0YS5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBvbkRhdGEoZGF0YSkge1xuICAgIHRoaXMuZW1pdChcImRhdGFcIiwgZGF0YSk7XG4gICAgdGhpcy5vblN1Y2Nlc3MoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgdXBvbiBlcnJvci5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBvbkVycm9yKGVycikge1xuICAgIHRoaXMuZW1pdChcImVycm9yXCIsIGVycik7XG4gICAgdGhpcy5jbGVhbnVwKHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFucyB1cCBob3VzZS5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBjbGVhbnVwKGZyb21FcnJvcikge1xuICAgIGlmIChcInVuZGVmaW5lZFwiID09PSB0eXBlb2YgdGhpcy54aHIgfHwgbnVsbCA9PT0gdGhpcy54aHIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8geG1saHR0cHJlcXVlc3RcbiAgICBpZiAodGhpcy5oYXNYRFIoKSkge1xuICAgICAgdGhpcy54aHIub25sb2FkID0gdGhpcy54aHIub25lcnJvciA9IGVtcHR5O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBlbXB0eTtcbiAgICB9XG5cbiAgICBpZiAoZnJvbUVycm9yKSB7XG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLnhoci5hYm9ydCgpO1xuICAgICAgfSBjYXRjaCAoZSkge31cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICBkZWxldGUgUmVxdWVzdC5yZXF1ZXN0c1t0aGlzLmluZGV4XTtcbiAgICB9XG5cbiAgICB0aGlzLnhociA9IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIHVwb24gbG9hZC5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBvbkxvYWQoKSB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMueGhyLnJlc3BvbnNlVGV4dDtcbiAgICBpZiAoZGF0YSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5vbkRhdGEoZGF0YSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGl0IGhhcyBYRG9tYWluUmVxdWVzdC5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBoYXNYRFIoKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBYRG9tYWluUmVxdWVzdCAhPT0gXCJ1bmRlZmluZWRcIiAmJiAhdGhpcy54cyAmJiB0aGlzLmVuYWJsZXNYRFI7XG4gIH1cblxuICAvKipcbiAgICogQWJvcnRzIHRoZSByZXF1ZXN0LlxuICAgKlxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cbiAgYWJvcnQoKSB7XG4gICAgdGhpcy5jbGVhbnVwKCk7XG4gIH1cbn1cblxuLyoqXG4gKiBBYm9ydHMgcGVuZGluZyByZXF1ZXN0cyB3aGVuIHVubG9hZGluZyB0aGUgd2luZG93LiBUaGlzIGlzIG5lZWRlZCB0byBwcmV2ZW50XG4gKiBtZW1vcnkgbGVha3MgKGUuZy4gd2hlbiB1c2luZyBJRSkgYW5kIHRvIGVuc3VyZSB0aGF0IG5vIHNwdXJpb3VzIGVycm9yIGlzXG4gKiBlbWl0dGVkLlxuICovXG5cblJlcXVlc3QucmVxdWVzdHNDb3VudCA9IDA7XG5SZXF1ZXN0LnJlcXVlc3RzID0ge307XG5cbmlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgaWYgKHR5cGVvZiBhdHRhY2hFdmVudCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgYXR0YWNoRXZlbnQoXCJvbnVubG9hZFwiLCB1bmxvYWRIYW5kbGVyKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYWRkRXZlbnRMaXN0ZW5lciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgY29uc3QgdGVybWluYXRpb25FdmVudCA9IFwib25wYWdlaGlkZVwiIGluIGdsb2JhbFRoaXMgPyBcInBhZ2VoaWRlXCIgOiBcInVubG9hZFwiO1xuICAgIGFkZEV2ZW50TGlzdGVuZXIodGVybWluYXRpb25FdmVudCwgdW5sb2FkSGFuZGxlciwgZmFsc2UpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVubG9hZEhhbmRsZXIoKSB7XG4gIGZvciAobGV0IGkgaW4gUmVxdWVzdC5yZXF1ZXN0cykge1xuICAgIGlmIChSZXF1ZXN0LnJlcXVlc3RzLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICBSZXF1ZXN0LnJlcXVlc3RzW2ldLmFib3J0KCk7XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gWEhSO1xubW9kdWxlLmV4cG9ydHMuUmVxdWVzdCA9IFJlcXVlc3Q7XG4iLCJjb25zdCBUcmFuc3BvcnQgPSByZXF1aXJlKFwiLi4vdHJhbnNwb3J0XCIpO1xuY29uc3QgcGFyc2VxcyA9IHJlcXVpcmUoXCJwYXJzZXFzXCIpO1xuY29uc3QgcGFyc2VyID0gcmVxdWlyZShcImVuZ2luZS5pby1wYXJzZXJcIik7XG5jb25zdCB5ZWFzdCA9IHJlcXVpcmUoXCJ5ZWFzdFwiKTtcblxuY29uc3QgZGVidWcgPSByZXF1aXJlKFwiZGVidWdcIikoXCJlbmdpbmUuaW8tY2xpZW50OnBvbGxpbmdcIik7XG5cbmNsYXNzIFBvbGxpbmcgZXh0ZW5kcyBUcmFuc3BvcnQge1xuICAvKipcbiAgICogVHJhbnNwb3J0IG5hbWUuXG4gICAqL1xuICBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gXCJwb2xsaW5nXCI7XG4gIH1cblxuICAvKipcbiAgICogT3BlbnMgdGhlIHNvY2tldCAodHJpZ2dlcnMgcG9sbGluZykuIFdlIHdyaXRlIGEgUElORyBtZXNzYWdlIHRvIGRldGVybWluZVxuICAgKiB3aGVuIHRoZSB0cmFuc3BvcnQgaXMgb3Blbi5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBkb09wZW4oKSB7XG4gICAgdGhpcy5wb2xsKCk7XG4gIH1cblxuICAvKipcbiAgICogUGF1c2VzIHBvbGxpbmcuXG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIHVwb24gYnVmZmVycyBhcmUgZmx1c2hlZCBhbmQgdHJhbnNwb3J0IGlzIHBhdXNlZFxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIHBhdXNlKG9uUGF1c2UpIHtcbiAgICB0aGlzLnJlYWR5U3RhdGUgPSBcInBhdXNpbmdcIjtcblxuICAgIGNvbnN0IHBhdXNlID0gKCkgPT4ge1xuICAgICAgZGVidWcoXCJwYXVzZWRcIik7XG4gICAgICB0aGlzLnJlYWR5U3RhdGUgPSBcInBhdXNlZFwiO1xuICAgICAgb25QYXVzZSgpO1xuICAgIH07XG5cbiAgICBpZiAodGhpcy5wb2xsaW5nIHx8ICF0aGlzLndyaXRhYmxlKSB7XG4gICAgICBsZXQgdG90YWwgPSAwO1xuXG4gICAgICBpZiAodGhpcy5wb2xsaW5nKSB7XG4gICAgICAgIGRlYnVnKFwid2UgYXJlIGN1cnJlbnRseSBwb2xsaW5nIC0gd2FpdGluZyB0byBwYXVzZVwiKTtcbiAgICAgICAgdG90YWwrKztcbiAgICAgICAgdGhpcy5vbmNlKFwicG9sbENvbXBsZXRlXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGRlYnVnKFwicHJlLXBhdXNlIHBvbGxpbmcgY29tcGxldGVcIik7XG4gICAgICAgICAgLS10b3RhbCB8fCBwYXVzZSgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLndyaXRhYmxlKSB7XG4gICAgICAgIGRlYnVnKFwid2UgYXJlIGN1cnJlbnRseSB3cml0aW5nIC0gd2FpdGluZyB0byBwYXVzZVwiKTtcbiAgICAgICAgdG90YWwrKztcbiAgICAgICAgdGhpcy5vbmNlKFwiZHJhaW5cIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgZGVidWcoXCJwcmUtcGF1c2Ugd3JpdGluZyBjb21wbGV0ZVwiKTtcbiAgICAgICAgICAtLXRvdGFsIHx8IHBhdXNlKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwYXVzZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTdGFydHMgcG9sbGluZyBjeWNsZS5cbiAgICpcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG4gIHBvbGwoKSB7XG4gICAgZGVidWcoXCJwb2xsaW5nXCIpO1xuICAgIHRoaXMucG9sbGluZyA9IHRydWU7XG4gICAgdGhpcy5kb1BvbGwoKTtcbiAgICB0aGlzLmVtaXQoXCJwb2xsXCIpO1xuICB9XG5cbiAgLyoqXG4gICAqIE92ZXJsb2FkcyBvbkRhdGEgdG8gZGV0ZWN0IHBheWxvYWRzLlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIG9uRGF0YShkYXRhKSB7XG4gICAgZGVidWcoXCJwb2xsaW5nIGdvdCBkYXRhICVzXCIsIGRhdGEpO1xuICAgIGNvbnN0IGNhbGxiYWNrID0gcGFja2V0ID0+IHtcbiAgICAgIC8vIGlmIGl0cyB0aGUgZmlyc3QgbWVzc2FnZSB3ZSBjb25zaWRlciB0aGUgdHJhbnNwb3J0IG9wZW5cbiAgICAgIGlmIChcIm9wZW5pbmdcIiA9PT0gdGhpcy5yZWFkeVN0YXRlICYmIHBhY2tldC50eXBlID09PSBcIm9wZW5cIikge1xuICAgICAgICB0aGlzLm9uT3BlbigpO1xuICAgICAgfVxuXG4gICAgICAvLyBpZiBpdHMgYSBjbG9zZSBwYWNrZXQsIHdlIGNsb3NlIHRoZSBvbmdvaW5nIHJlcXVlc3RzXG4gICAgICBpZiAoXCJjbG9zZVwiID09PSBwYWNrZXQudHlwZSkge1xuICAgICAgICB0aGlzLm9uQ2xvc2UoKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICAvLyBvdGhlcndpc2UgYnlwYXNzIG9uRGF0YSBhbmQgaGFuZGxlIHRoZSBtZXNzYWdlXG4gICAgICB0aGlzLm9uUGFja2V0KHBhY2tldCk7XG4gICAgfTtcblxuICAgIC8vIGRlY29kZSBwYXlsb2FkXG4gICAgcGFyc2VyLmRlY29kZVBheWxvYWQoZGF0YSwgdGhpcy5zb2NrZXQuYmluYXJ5VHlwZSkuZm9yRWFjaChjYWxsYmFjayk7XG5cbiAgICAvLyBpZiBhbiBldmVudCBkaWQgbm90IHRyaWdnZXIgY2xvc2luZ1xuICAgIGlmIChcImNsb3NlZFwiICE9PSB0aGlzLnJlYWR5U3RhdGUpIHtcbiAgICAgIC8vIGlmIHdlIGdvdCBkYXRhIHdlJ3JlIG5vdCBwb2xsaW5nXG4gICAgICB0aGlzLnBvbGxpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMuZW1pdChcInBvbGxDb21wbGV0ZVwiKTtcblxuICAgICAgaWYgKFwib3BlblwiID09PSB0aGlzLnJlYWR5U3RhdGUpIHtcbiAgICAgICAgdGhpcy5wb2xsKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZWJ1ZygnaWdub3JpbmcgcG9sbCAtIHRyYW5zcG9ydCBzdGF0ZSBcIiVzXCInLCB0aGlzLnJlYWR5U3RhdGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBGb3IgcG9sbGluZywgc2VuZCBhIGNsb3NlIHBhY2tldC5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBkb0Nsb3NlKCkge1xuICAgIGNvbnN0IGNsb3NlID0gKCkgPT4ge1xuICAgICAgZGVidWcoXCJ3cml0aW5nIGNsb3NlIHBhY2tldFwiKTtcbiAgICAgIHRoaXMud3JpdGUoW3sgdHlwZTogXCJjbG9zZVwiIH1dKTtcbiAgICB9O1xuXG4gICAgaWYgKFwib3BlblwiID09PSB0aGlzLnJlYWR5U3RhdGUpIHtcbiAgICAgIGRlYnVnKFwidHJhbnNwb3J0IG9wZW4gLSBjbG9zaW5nXCIpO1xuICAgICAgY2xvc2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaW4gY2FzZSB3ZSdyZSB0cnlpbmcgdG8gY2xvc2Ugd2hpbGVcbiAgICAgIC8vIGhhbmRzaGFraW5nIGlzIGluIHByb2dyZXNzIChHSC0xNjQpXG4gICAgICBkZWJ1ZyhcInRyYW5zcG9ydCBub3Qgb3BlbiAtIGRlZmVycmluZyBjbG9zZVwiKTtcbiAgICAgIHRoaXMub25jZShcIm9wZW5cIiwgY2xvc2UpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBXcml0ZXMgYSBwYWNrZXRzIHBheWxvYWQuXG4gICAqXG4gICAqIEBwYXJhbSB7QXJyYXl9IGRhdGEgcGFja2V0c1xuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBkcmFpbiBjYWxsYmFja1xuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIHdyaXRlKHBhY2tldHMpIHtcbiAgICB0aGlzLndyaXRhYmxlID0gZmFsc2U7XG5cbiAgICBwYXJzZXIuZW5jb2RlUGF5bG9hZChwYWNrZXRzLCBkYXRhID0+IHtcbiAgICAgIHRoaXMuZG9Xcml0ZShkYXRhLCAoKSA9PiB7XG4gICAgICAgIHRoaXMud3JpdGFibGUgPSB0cnVlO1xuICAgICAgICB0aGlzLmVtaXQoXCJkcmFpblwiKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdlbmVyYXRlcyB1cmkgZm9yIGNvbm5lY3Rpb24uXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgdXJpKCkge1xuICAgIGxldCBxdWVyeSA9IHRoaXMucXVlcnkgfHwge307XG4gICAgY29uc3Qgc2NoZW1hID0gdGhpcy5vcHRzLnNlY3VyZSA/IFwiaHR0cHNcIiA6IFwiaHR0cFwiO1xuICAgIGxldCBwb3J0ID0gXCJcIjtcblxuICAgIC8vIGNhY2hlIGJ1c3RpbmcgaXMgZm9yY2VkXG4gICAgaWYgKGZhbHNlICE9PSB0aGlzLm9wdHMudGltZXN0YW1wUmVxdWVzdHMpIHtcbiAgICAgIHF1ZXJ5W3RoaXMub3B0cy50aW1lc3RhbXBQYXJhbV0gPSB5ZWFzdCgpO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5zdXBwb3J0c0JpbmFyeSAmJiAhcXVlcnkuc2lkKSB7XG4gICAgICBxdWVyeS5iNjQgPSAxO1xuICAgIH1cblxuICAgIHF1ZXJ5ID0gcGFyc2Vxcy5lbmNvZGUocXVlcnkpO1xuXG4gICAgLy8gYXZvaWQgcG9ydCBpZiBkZWZhdWx0IGZvciBzY2hlbWFcbiAgICBpZiAoXG4gICAgICB0aGlzLm9wdHMucG9ydCAmJlxuICAgICAgKChcImh0dHBzXCIgPT09IHNjaGVtYSAmJiBOdW1iZXIodGhpcy5vcHRzLnBvcnQpICE9PSA0NDMpIHx8XG4gICAgICAgIChcImh0dHBcIiA9PT0gc2NoZW1hICYmIE51bWJlcih0aGlzLm9wdHMucG9ydCkgIT09IDgwKSlcbiAgICApIHtcbiAgICAgIHBvcnQgPSBcIjpcIiArIHRoaXMub3B0cy5wb3J0O1xuICAgIH1cblxuICAgIC8vIHByZXBlbmQgPyB0byBxdWVyeVxuICAgIGlmIChxdWVyeS5sZW5ndGgpIHtcbiAgICAgIHF1ZXJ5ID0gXCI/XCIgKyBxdWVyeTtcbiAgICB9XG5cbiAgICBjb25zdCBpcHY2ID0gdGhpcy5vcHRzLmhvc3RuYW1lLmluZGV4T2YoXCI6XCIpICE9PSAtMTtcbiAgICByZXR1cm4gKFxuICAgICAgc2NoZW1hICtcbiAgICAgIFwiOi8vXCIgK1xuICAgICAgKGlwdjYgPyBcIltcIiArIHRoaXMub3B0cy5ob3N0bmFtZSArIFwiXVwiIDogdGhpcy5vcHRzLmhvc3RuYW1lKSArXG4gICAgICBwb3J0ICtcbiAgICAgIHRoaXMub3B0cy5wYXRoICtcbiAgICAgIHF1ZXJ5XG4gICAgKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBvbGxpbmc7XG4iLCJjb25zdCBnbG9iYWxUaGlzID0gcmVxdWlyZShcIi4uL2dsb2JhbFRoaXNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBXZWJTb2NrZXQ6IGdsb2JhbFRoaXMuV2ViU29ja2V0IHx8IGdsb2JhbFRoaXMuTW96V2ViU29ja2V0LFxuICB1c2luZ0Jyb3dzZXJXZWJTb2NrZXQ6IHRydWUsXG4gIGRlZmF1bHRCaW5hcnlUeXBlOiBcImFycmF5YnVmZmVyXCJcbn07XG4iLCJjb25zdCBUcmFuc3BvcnQgPSByZXF1aXJlKFwiLi4vdHJhbnNwb3J0XCIpO1xuY29uc3QgcGFyc2VyID0gcmVxdWlyZShcImVuZ2luZS5pby1wYXJzZXJcIik7XG5jb25zdCBwYXJzZXFzID0gcmVxdWlyZShcInBhcnNlcXNcIik7XG5jb25zdCB5ZWFzdCA9IHJlcXVpcmUoXCJ5ZWFzdFwiKTtcbmNvbnN0IHsgcGljayB9ID0gcmVxdWlyZShcIi4uL3V0aWxcIik7XG5jb25zdCB7XG4gIFdlYlNvY2tldCxcbiAgdXNpbmdCcm93c2VyV2ViU29ja2V0LFxuICBkZWZhdWx0QmluYXJ5VHlwZVxufSA9IHJlcXVpcmUoXCIuL3dlYnNvY2tldC1jb25zdHJ1Y3RvclwiKTtcblxuY29uc3QgZGVidWcgPSByZXF1aXJlKFwiZGVidWdcIikoXCJlbmdpbmUuaW8tY2xpZW50OndlYnNvY2tldFwiKTtcblxuLy8gZGV0ZWN0IFJlYWN0TmF0aXZlIGVudmlyb25tZW50XG5jb25zdCBpc1JlYWN0TmF0aXZlID1cbiAgdHlwZW9mIG5hdmlnYXRvciAhPT0gXCJ1bmRlZmluZWRcIiAmJlxuICB0eXBlb2YgbmF2aWdhdG9yLnByb2R1Y3QgPT09IFwic3RyaW5nXCIgJiZcbiAgbmF2aWdhdG9yLnByb2R1Y3QudG9Mb3dlckNhc2UoKSA9PT0gXCJyZWFjdG5hdGl2ZVwiO1xuXG5jbGFzcyBXUyBleHRlbmRzIFRyYW5zcG9ydCB7XG4gIC8qKlxuICAgKiBXZWJTb2NrZXQgdHJhbnNwb3J0IGNvbnN0cnVjdG9yLlxuICAgKlxuICAgKiBAYXBpIHtPYmplY3R9IGNvbm5lY3Rpb24gb3B0aW9uc1xuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cbiAgY29uc3RydWN0b3Iob3B0cykge1xuICAgIHN1cGVyKG9wdHMpO1xuXG4gICAgdGhpcy5zdXBwb3J0c0JpbmFyeSA9ICFvcHRzLmZvcmNlQmFzZTY0O1xuICB9XG5cbiAgLyoqXG4gICAqIFRyYW5zcG9ydCBuYW1lLlxuICAgKlxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cbiAgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIFwid2Vic29ja2V0XCI7XG4gIH1cblxuICAvKipcbiAgICogT3BlbnMgc29ja2V0LlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIGRvT3BlbigpIHtcbiAgICBpZiAoIXRoaXMuY2hlY2soKSkge1xuICAgICAgLy8gbGV0IHByb2JlIHRpbWVvdXRcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB1cmkgPSB0aGlzLnVyaSgpO1xuICAgIGNvbnN0IHByb3RvY29scyA9IHRoaXMub3B0cy5wcm90b2NvbHM7XG5cbiAgICAvLyBSZWFjdCBOYXRpdmUgb25seSBzdXBwb3J0cyB0aGUgJ2hlYWRlcnMnIG9wdGlvbiwgYW5kIHdpbGwgcHJpbnQgYSB3YXJuaW5nIGlmIGFueXRoaW5nIGVsc2UgaXMgcGFzc2VkXG4gICAgY29uc3Qgb3B0cyA9IGlzUmVhY3ROYXRpdmVcbiAgICAgID8ge31cbiAgICAgIDogcGljayhcbiAgICAgICAgICB0aGlzLm9wdHMsXG4gICAgICAgICAgXCJhZ2VudFwiLFxuICAgICAgICAgIFwicGVyTWVzc2FnZURlZmxhdGVcIixcbiAgICAgICAgICBcInBmeFwiLFxuICAgICAgICAgIFwia2V5XCIsXG4gICAgICAgICAgXCJwYXNzcGhyYXNlXCIsXG4gICAgICAgICAgXCJjZXJ0XCIsXG4gICAgICAgICAgXCJjYVwiLFxuICAgICAgICAgIFwiY2lwaGVyc1wiLFxuICAgICAgICAgIFwicmVqZWN0VW5hdXRob3JpemVkXCIsXG4gICAgICAgICAgXCJsb2NhbEFkZHJlc3NcIixcbiAgICAgICAgICBcInByb3RvY29sVmVyc2lvblwiLFxuICAgICAgICAgIFwib3JpZ2luXCIsXG4gICAgICAgICAgXCJtYXhQYXlsb2FkXCIsXG4gICAgICAgICAgXCJmYW1pbHlcIixcbiAgICAgICAgICBcImNoZWNrU2VydmVySWRlbnRpdHlcIlxuICAgICAgICApO1xuXG4gICAgaWYgKHRoaXMub3B0cy5leHRyYUhlYWRlcnMpIHtcbiAgICAgIG9wdHMuaGVhZGVycyA9IHRoaXMub3B0cy5leHRyYUhlYWRlcnM7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIHRoaXMud3MgPVxuICAgICAgICB1c2luZ0Jyb3dzZXJXZWJTb2NrZXQgJiYgIWlzUmVhY3ROYXRpdmVcbiAgICAgICAgICA/IHByb3RvY29sc1xuICAgICAgICAgICAgPyBuZXcgV2ViU29ja2V0KHVyaSwgcHJvdG9jb2xzKVxuICAgICAgICAgICAgOiBuZXcgV2ViU29ja2V0KHVyaSlcbiAgICAgICAgICA6IG5ldyBXZWJTb2NrZXQodXJpLCBwcm90b2NvbHMsIG9wdHMpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHRoaXMuZW1pdChcImVycm9yXCIsIGVycik7XG4gICAgfVxuXG4gICAgdGhpcy53cy5iaW5hcnlUeXBlID0gdGhpcy5zb2NrZXQuYmluYXJ5VHlwZSB8fCBkZWZhdWx0QmluYXJ5VHlwZTtcblxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGV2ZW50IGxpc3RlbmVycyB0byB0aGUgc29ja2V0XG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgdGhpcy53cy5vbm9wZW4gPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5vcHRzLmF1dG9VbnJlZikge1xuICAgICAgICB0aGlzLndzLl9zb2NrZXQudW5yZWYoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMub25PcGVuKCk7XG4gICAgfTtcbiAgICB0aGlzLndzLm9uY2xvc2UgPSB0aGlzLm9uQ2xvc2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLndzLm9ubWVzc2FnZSA9IGV2ID0+IHRoaXMub25EYXRhKGV2LmRhdGEpO1xuICAgIHRoaXMud3Mub25lcnJvciA9IGUgPT4gdGhpcy5vbkVycm9yKFwid2Vic29ja2V0IGVycm9yXCIsIGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFdyaXRlcyBkYXRhIHRvIHNvY2tldC5cbiAgICpcbiAgICogQHBhcmFtIHtBcnJheX0gYXJyYXkgb2YgcGFja2V0cy5cbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICB3cml0ZShwYWNrZXRzKSB7XG4gICAgdGhpcy53cml0YWJsZSA9IGZhbHNlO1xuXG4gICAgLy8gZW5jb2RlUGFja2V0IGVmZmljaWVudCBhcyBpdCB1c2VzIFdTIGZyYW1pbmdcbiAgICAvLyBubyBuZWVkIGZvciBlbmNvZGVQYXlsb2FkXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYWNrZXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBwYWNrZXQgPSBwYWNrZXRzW2ldO1xuICAgICAgY29uc3QgbGFzdFBhY2tldCA9IGkgPT09IHBhY2tldHMubGVuZ3RoIC0gMTtcblxuICAgICAgcGFyc2VyLmVuY29kZVBhY2tldChwYWNrZXQsIHRoaXMuc3VwcG9ydHNCaW5hcnksIGRhdGEgPT4ge1xuICAgICAgICAvLyBhbHdheXMgY3JlYXRlIGEgbmV3IG9iamVjdCAoR0gtNDM3KVxuICAgICAgICBjb25zdCBvcHRzID0ge307XG4gICAgICAgIGlmICghdXNpbmdCcm93c2VyV2ViU29ja2V0KSB7XG4gICAgICAgICAgaWYgKHBhY2tldC5vcHRpb25zKSB7XG4gICAgICAgICAgICBvcHRzLmNvbXByZXNzID0gcGFja2V0Lm9wdGlvbnMuY29tcHJlc3M7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHRoaXMub3B0cy5wZXJNZXNzYWdlRGVmbGF0ZSkge1xuICAgICAgICAgICAgY29uc3QgbGVuID1cbiAgICAgICAgICAgICAgXCJzdHJpbmdcIiA9PT0gdHlwZW9mIGRhdGEgPyBCdWZmZXIuYnl0ZUxlbmd0aChkYXRhKSA6IGRhdGEubGVuZ3RoO1xuICAgICAgICAgICAgaWYgKGxlbiA8IHRoaXMub3B0cy5wZXJNZXNzYWdlRGVmbGF0ZS50aHJlc2hvbGQpIHtcbiAgICAgICAgICAgICAgb3B0cy5jb21wcmVzcyA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNvbWV0aW1lcyB0aGUgd2Vic29ja2V0IGhhcyBhbHJlYWR5IGJlZW4gY2xvc2VkIGJ1dCB0aGUgYnJvd3NlciBkaWRuJ3RcbiAgICAgICAgLy8gaGF2ZSBhIGNoYW5jZSBvZiBpbmZvcm1pbmcgdXMgYWJvdXQgaXQgeWV0LCBpbiB0aGF0IGNhc2Ugc2VuZCB3aWxsXG4gICAgICAgIC8vIHRocm93IGFuIGVycm9yXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgaWYgKHVzaW5nQnJvd3NlcldlYlNvY2tldCkge1xuICAgICAgICAgICAgLy8gVHlwZUVycm9yIGlzIHRocm93biB3aGVuIHBhc3NpbmcgdGhlIHNlY29uZCBhcmd1bWVudCBvbiBTYWZhcmlcbiAgICAgICAgICAgIHRoaXMud3Muc2VuZChkYXRhKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy53cy5zZW5kKGRhdGEsIG9wdHMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGRlYnVnKFwid2Vic29ja2V0IGNsb3NlZCBiZWZvcmUgb25jbG9zZSBldmVudFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChsYXN0UGFja2V0KSB7XG4gICAgICAgICAgLy8gZmFrZSBkcmFpblxuICAgICAgICAgIC8vIGRlZmVyIHRvIG5leHQgdGljayB0byBhbGxvdyBTb2NrZXQgdG8gY2xlYXIgd3JpdGVCdWZmZXJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMud3JpdGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5lbWl0KFwiZHJhaW5cIik7XG4gICAgICAgICAgfSwgMCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgdXBvbiBjbG9zZVxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIG9uQ2xvc2UoKSB7XG4gICAgVHJhbnNwb3J0LnByb3RvdHlwZS5vbkNsb3NlLmNhbGwodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogQ2xvc2VzIHNvY2tldC5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBkb0Nsb3NlKCkge1xuICAgIGlmICh0eXBlb2YgdGhpcy53cyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgdGhpcy53cy5jbG9zZSgpO1xuICAgICAgdGhpcy53cyA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdlbmVyYXRlcyB1cmkgZm9yIGNvbm5lY3Rpb24uXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgdXJpKCkge1xuICAgIGxldCBxdWVyeSA9IHRoaXMucXVlcnkgfHwge307XG4gICAgY29uc3Qgc2NoZW1hID0gdGhpcy5vcHRzLnNlY3VyZSA/IFwid3NzXCIgOiBcIndzXCI7XG4gICAgbGV0IHBvcnQgPSBcIlwiO1xuXG4gICAgLy8gYXZvaWQgcG9ydCBpZiBkZWZhdWx0IGZvciBzY2hlbWFcbiAgICBpZiAoXG4gICAgICB0aGlzLm9wdHMucG9ydCAmJlxuICAgICAgKChcIndzc1wiID09PSBzY2hlbWEgJiYgTnVtYmVyKHRoaXMub3B0cy5wb3J0KSAhPT0gNDQzKSB8fFxuICAgICAgICAoXCJ3c1wiID09PSBzY2hlbWEgJiYgTnVtYmVyKHRoaXMub3B0cy5wb3J0KSAhPT0gODApKVxuICAgICkge1xuICAgICAgcG9ydCA9IFwiOlwiICsgdGhpcy5vcHRzLnBvcnQ7XG4gICAgfVxuXG4gICAgLy8gYXBwZW5kIHRpbWVzdGFtcCB0byBVUklcbiAgICBpZiAodGhpcy5vcHRzLnRpbWVzdGFtcFJlcXVlc3RzKSB7XG4gICAgICBxdWVyeVt0aGlzLm9wdHMudGltZXN0YW1wUGFyYW1dID0geWVhc3QoKTtcbiAgICB9XG5cbiAgICAvLyBjb21tdW5pY2F0ZSBiaW5hcnkgc3VwcG9ydCBjYXBhYmlsaXRpZXNcbiAgICBpZiAoIXRoaXMuc3VwcG9ydHNCaW5hcnkpIHtcbiAgICAgIHF1ZXJ5LmI2NCA9IDE7XG4gICAgfVxuXG4gICAgcXVlcnkgPSBwYXJzZXFzLmVuY29kZShxdWVyeSk7XG5cbiAgICAvLyBwcmVwZW5kID8gdG8gcXVlcnlcbiAgICBpZiAocXVlcnkubGVuZ3RoKSB7XG4gICAgICBxdWVyeSA9IFwiP1wiICsgcXVlcnk7XG4gICAgfVxuXG4gICAgY29uc3QgaXB2NiA9IHRoaXMub3B0cy5ob3N0bmFtZS5pbmRleE9mKFwiOlwiKSAhPT0gLTE7XG4gICAgcmV0dXJuIChcbiAgICAgIHNjaGVtYSArXG4gICAgICBcIjovL1wiICtcbiAgICAgIChpcHY2ID8gXCJbXCIgKyB0aGlzLm9wdHMuaG9zdG5hbWUgKyBcIl1cIiA6IHRoaXMub3B0cy5ob3N0bmFtZSkgK1xuICAgICAgcG9ydCArXG4gICAgICB0aGlzLm9wdHMucGF0aCArXG4gICAgICBxdWVyeVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogRmVhdHVyZSBkZXRlY3Rpb24gZm9yIFdlYlNvY2tldC5cbiAgICpcbiAgICogQHJldHVybiB7Qm9vbGVhbn0gd2hldGhlciB0aGlzIHRyYW5zcG9ydCBpcyBhdmFpbGFibGUuXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuICBjaGVjaygpIHtcbiAgICByZXR1cm4gKFxuICAgICAgISFXZWJTb2NrZXQgJiZcbiAgICAgICEoXCJfX2luaXRpYWxpemVcIiBpbiBXZWJTb2NrZXQgJiYgdGhpcy5uYW1lID09PSBXUy5wcm90b3R5cGUubmFtZSlcbiAgICApO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gV1M7XG4iLCJtb2R1bGUuZXhwb3J0cy5waWNrID0gKG9iaiwgLi4uYXR0cikgPT4ge1xuICByZXR1cm4gYXR0ci5yZWR1Y2UoKGFjYywgaykgPT4ge1xuICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgIGFjY1trXSA9IG9ialtrXTtcbiAgICB9XG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xufTtcbiIsIi8vIGJyb3dzZXIgc2hpbSBmb3IgeG1saHR0cHJlcXVlc3QgbW9kdWxlXG5cbmNvbnN0IGhhc0NPUlMgPSByZXF1aXJlKFwiaGFzLWNvcnNcIik7XG5jb25zdCBnbG9iYWxUaGlzID0gcmVxdWlyZShcIi4vZ2xvYmFsVGhpc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcHRzKSB7XG4gIGNvbnN0IHhkb21haW4gPSBvcHRzLnhkb21haW47XG5cbiAgLy8gc2NoZW1lIG11c3QgYmUgc2FtZSB3aGVuIHVzaWduIFhEb21haW5SZXF1ZXN0XG4gIC8vIGh0dHA6Ly9ibG9ncy5tc2RuLmNvbS9iL2llaW50ZXJuYWxzL2FyY2hpdmUvMjAxMC8wNS8xMy94ZG9tYWlucmVxdWVzdC1yZXN0cmljdGlvbnMtbGltaXRhdGlvbnMtYW5kLXdvcmthcm91bmRzLmFzcHhcbiAgY29uc3QgeHNjaGVtZSA9IG9wdHMueHNjaGVtZTtcblxuICAvLyBYRG9tYWluUmVxdWVzdCBoYXMgYSBmbG93IG9mIG5vdCBzZW5kaW5nIGNvb2tpZSwgdGhlcmVmb3JlIGl0IHNob3VsZCBiZSBkaXNhYmxlZCBhcyBhIGRlZmF1bHQuXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9BdXRvbWF0dGljL2VuZ2luZS5pby1jbGllbnQvcHVsbC8yMTdcbiAgY29uc3QgZW5hYmxlc1hEUiA9IG9wdHMuZW5hYmxlc1hEUjtcblxuICAvLyBYTUxIdHRwUmVxdWVzdCBjYW4gYmUgZGlzYWJsZWQgb24gSUVcbiAgdHJ5IHtcbiAgICBpZiAoXCJ1bmRlZmluZWRcIiAhPT0gdHlwZW9mIFhNTEh0dHBSZXF1ZXN0ICYmICgheGRvbWFpbiB8fCBoYXNDT1JTKSkge1xuICAgICAgcmV0dXJuIG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIH1cbiAgfSBjYXRjaCAoZSkge31cblxuICAvLyBVc2UgWERvbWFpblJlcXVlc3QgZm9yIElFOCBpZiBlbmFibGVzWERSIGlzIHRydWVcbiAgLy8gYmVjYXVzZSBsb2FkaW5nIGJhciBrZWVwcyBmbGFzaGluZyB3aGVuIHVzaW5nIGpzb25wLXBvbGxpbmdcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3l1amlvc2FrYS9zb2NrZS5pby1pZTgtbG9hZGluZy1leGFtcGxlXG4gIHRyeSB7XG4gICAgaWYgKFwidW5kZWZpbmVkXCIgIT09IHR5cGVvZiBYRG9tYWluUmVxdWVzdCAmJiAheHNjaGVtZSAmJiBlbmFibGVzWERSKSB7XG4gICAgICByZXR1cm4gbmV3IFhEb21haW5SZXF1ZXN0KCk7XG4gICAgfVxuICB9IGNhdGNoIChlKSB7fVxuXG4gIGlmICgheGRvbWFpbikge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gbmV3IGdsb2JhbFRoaXNbW1wiQWN0aXZlXCJdLmNvbmNhdChcIk9iamVjdFwiKS5qb2luKFwiWFwiKV0oXG4gICAgICAgIFwiTWljcm9zb2Z0LlhNTEhUVFBcIlxuICAgICAgKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICB9XG59O1xuIiwiY29uc3QgUEFDS0VUX1RZUEVTID0gT2JqZWN0LmNyZWF0ZShudWxsKTsgLy8gbm8gTWFwID0gbm8gcG9seWZpbGxcblBBQ0tFVF9UWVBFU1tcIm9wZW5cIl0gPSBcIjBcIjtcblBBQ0tFVF9UWVBFU1tcImNsb3NlXCJdID0gXCIxXCI7XG5QQUNLRVRfVFlQRVNbXCJwaW5nXCJdID0gXCIyXCI7XG5QQUNLRVRfVFlQRVNbXCJwb25nXCJdID0gXCIzXCI7XG5QQUNLRVRfVFlQRVNbXCJtZXNzYWdlXCJdID0gXCI0XCI7XG5QQUNLRVRfVFlQRVNbXCJ1cGdyYWRlXCJdID0gXCI1XCI7XG5QQUNLRVRfVFlQRVNbXCJub29wXCJdID0gXCI2XCI7XG5cbmNvbnN0IFBBQ0tFVF9UWVBFU19SRVZFUlNFID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbk9iamVjdC5rZXlzKFBBQ0tFVF9UWVBFUykuZm9yRWFjaChrZXkgPT4ge1xuICBQQUNLRVRfVFlQRVNfUkVWRVJTRVtQQUNLRVRfVFlQRVNba2V5XV0gPSBrZXk7XG59KTtcblxuY29uc3QgRVJST1JfUEFDS0VUID0geyB0eXBlOiBcImVycm9yXCIsIGRhdGE6IFwicGFyc2VyIGVycm9yXCIgfTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIFBBQ0tFVF9UWVBFUyxcbiAgUEFDS0VUX1RZUEVTX1JFVkVSU0UsXG4gIEVSUk9SX1BBQ0tFVFxufTtcbiIsImNvbnN0IHsgUEFDS0VUX1RZUEVTX1JFVkVSU0UsIEVSUk9SX1BBQ0tFVCB9ID0gcmVxdWlyZShcIi4vY29tbW9uc1wiKTtcblxuY29uc3Qgd2l0aE5hdGl2ZUFycmF5QnVmZmVyID0gdHlwZW9mIEFycmF5QnVmZmVyID09PSBcImZ1bmN0aW9uXCI7XG5cbmxldCBiYXNlNjRkZWNvZGVyO1xuaWYgKHdpdGhOYXRpdmVBcnJheUJ1ZmZlcikge1xuICBiYXNlNjRkZWNvZGVyID0gcmVxdWlyZShcImJhc2U2NC1hcnJheWJ1ZmZlclwiKTtcbn1cblxuY29uc3QgZGVjb2RlUGFja2V0ID0gKGVuY29kZWRQYWNrZXQsIGJpbmFyeVR5cGUpID0+IHtcbiAgaWYgKHR5cGVvZiBlbmNvZGVkUGFja2V0ICE9PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IFwibWVzc2FnZVwiLFxuICAgICAgZGF0YTogbWFwQmluYXJ5KGVuY29kZWRQYWNrZXQsIGJpbmFyeVR5cGUpXG4gICAgfTtcbiAgfVxuICBjb25zdCB0eXBlID0gZW5jb2RlZFBhY2tldC5jaGFyQXQoMCk7XG4gIGlmICh0eXBlID09PSBcImJcIikge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBcIm1lc3NhZ2VcIixcbiAgICAgIGRhdGE6IGRlY29kZUJhc2U2NFBhY2tldChlbmNvZGVkUGFja2V0LnN1YnN0cmluZygxKSwgYmluYXJ5VHlwZSlcbiAgICB9O1xuICB9XG4gIGNvbnN0IHBhY2tldFR5cGUgPSBQQUNLRVRfVFlQRVNfUkVWRVJTRVt0eXBlXTtcbiAgaWYgKCFwYWNrZXRUeXBlKSB7XG4gICAgcmV0dXJuIEVSUk9SX1BBQ0tFVDtcbiAgfVxuICByZXR1cm4gZW5jb2RlZFBhY2tldC5sZW5ndGggPiAxXG4gICAgPyB7XG4gICAgICAgIHR5cGU6IFBBQ0tFVF9UWVBFU19SRVZFUlNFW3R5cGVdLFxuICAgICAgICBkYXRhOiBlbmNvZGVkUGFja2V0LnN1YnN0cmluZygxKVxuICAgICAgfVxuICAgIDoge1xuICAgICAgICB0eXBlOiBQQUNLRVRfVFlQRVNfUkVWRVJTRVt0eXBlXVxuICAgICAgfTtcbn07XG5cbmNvbnN0IGRlY29kZUJhc2U2NFBhY2tldCA9IChkYXRhLCBiaW5hcnlUeXBlKSA9PiB7XG4gIGlmIChiYXNlNjRkZWNvZGVyKSB7XG4gICAgY29uc3QgZGVjb2RlZCA9IGJhc2U2NGRlY29kZXIuZGVjb2RlKGRhdGEpO1xuICAgIHJldHVybiBtYXBCaW5hcnkoZGVjb2RlZCwgYmluYXJ5VHlwZSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHsgYmFzZTY0OiB0cnVlLCBkYXRhIH07IC8vIGZhbGxiYWNrIGZvciBvbGQgYnJvd3NlcnNcbiAgfVxufTtcblxuY29uc3QgbWFwQmluYXJ5ID0gKGRhdGEsIGJpbmFyeVR5cGUpID0+IHtcbiAgc3dpdGNoIChiaW5hcnlUeXBlKSB7XG4gICAgY2FzZSBcImJsb2JcIjpcbiAgICAgIHJldHVybiBkYXRhIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIgPyBuZXcgQmxvYihbZGF0YV0pIDogZGF0YTtcbiAgICBjYXNlIFwiYXJyYXlidWZmZXJcIjpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGRhdGE7IC8vIGFzc3VtaW5nIHRoZSBkYXRhIGlzIGFscmVhZHkgYW4gQXJyYXlCdWZmZXJcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBkZWNvZGVQYWNrZXQ7XG4iLCJjb25zdCB7IFBBQ0tFVF9UWVBFUyB9ID0gcmVxdWlyZShcIi4vY29tbW9uc1wiKTtcblxuY29uc3Qgd2l0aE5hdGl2ZUJsb2IgPVxuICB0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiIHx8XG4gICh0eXBlb2YgQmxvYiAhPT0gXCJ1bmRlZmluZWRcIiAmJlxuICAgIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChCbG9iKSA9PT0gXCJbb2JqZWN0IEJsb2JDb25zdHJ1Y3Rvcl1cIik7XG5jb25zdCB3aXRoTmF0aXZlQXJyYXlCdWZmZXIgPSB0eXBlb2YgQXJyYXlCdWZmZXIgPT09IFwiZnVuY3Rpb25cIjtcblxuLy8gQXJyYXlCdWZmZXIuaXNWaWV3IG1ldGhvZCBpcyBub3QgZGVmaW5lZCBpbiBJRTEwXG5jb25zdCBpc1ZpZXcgPSBvYmogPT4ge1xuICByZXR1cm4gdHlwZW9mIEFycmF5QnVmZmVyLmlzVmlldyA9PT0gXCJmdW5jdGlvblwiXG4gICAgPyBBcnJheUJ1ZmZlci5pc1ZpZXcob2JqKVxuICAgIDogb2JqICYmIG9iai5idWZmZXIgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcjtcbn07XG5cbmNvbnN0IGVuY29kZVBhY2tldCA9ICh7IHR5cGUsIGRhdGEgfSwgc3VwcG9ydHNCaW5hcnksIGNhbGxiYWNrKSA9PiB7XG4gIGlmICh3aXRoTmF0aXZlQmxvYiAmJiBkYXRhIGluc3RhbmNlb2YgQmxvYikge1xuICAgIGlmIChzdXBwb3J0c0JpbmFyeSkge1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKGRhdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZW5jb2RlQmxvYkFzQmFzZTY0KGRhdGEsIGNhbGxiYWNrKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoXG4gICAgd2l0aE5hdGl2ZUFycmF5QnVmZmVyICYmXG4gICAgKGRhdGEgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlciB8fCBpc1ZpZXcoZGF0YSkpXG4gICkge1xuICAgIGlmIChzdXBwb3J0c0JpbmFyeSkge1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKGRhdGEgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlciA/IGRhdGEgOiBkYXRhLmJ1ZmZlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBlbmNvZGVCbG9iQXNCYXNlNjQobmV3IEJsb2IoW2RhdGFdKSwgY2FsbGJhY2spO1xuICAgIH1cbiAgfVxuICAvLyBwbGFpbiBzdHJpbmdcbiAgcmV0dXJuIGNhbGxiYWNrKFBBQ0tFVF9UWVBFU1t0eXBlXSArIChkYXRhIHx8IFwiXCIpKTtcbn07XG5cbmNvbnN0IGVuY29kZUJsb2JBc0Jhc2U2NCA9IChkYXRhLCBjYWxsYmFjaykgPT4ge1xuICBjb25zdCBmaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgZmlsZVJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZmlsZVJlYWRlci5yZXN1bHQuc3BsaXQoXCIsXCIpWzFdO1xuICAgIGNhbGxiYWNrKFwiYlwiICsgY29udGVudCk7XG4gIH07XG4gIHJldHVybiBmaWxlUmVhZGVyLnJlYWRBc0RhdGFVUkwoZGF0YSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGVuY29kZVBhY2tldDtcbiIsImNvbnN0IGVuY29kZVBhY2tldCA9IHJlcXVpcmUoXCIuL2VuY29kZVBhY2tldFwiKTtcbmNvbnN0IGRlY29kZVBhY2tldCA9IHJlcXVpcmUoXCIuL2RlY29kZVBhY2tldFwiKTtcblxuY29uc3QgU0VQQVJBVE9SID0gU3RyaW5nLmZyb21DaGFyQ29kZSgzMCk7IC8vIHNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9EZWxpbWl0ZXIjQVNDSUlfZGVsaW1pdGVkX3RleHRcblxuY29uc3QgZW5jb2RlUGF5bG9hZCA9IChwYWNrZXRzLCBjYWxsYmFjaykgPT4ge1xuICAvLyBzb21lIHBhY2tldHMgbWF5IGJlIGFkZGVkIHRvIHRoZSBhcnJheSB3aGlsZSBlbmNvZGluZywgc28gdGhlIGluaXRpYWwgbGVuZ3RoIG11c3QgYmUgc2F2ZWRcbiAgY29uc3QgbGVuZ3RoID0gcGFja2V0cy5sZW5ndGg7XG4gIGNvbnN0IGVuY29kZWRQYWNrZXRzID0gbmV3IEFycmF5KGxlbmd0aCk7XG4gIGxldCBjb3VudCA9IDA7XG5cbiAgcGFja2V0cy5mb3JFYWNoKChwYWNrZXQsIGkpID0+IHtcbiAgICAvLyBmb3JjZSBiYXNlNjQgZW5jb2RpbmcgZm9yIGJpbmFyeSBwYWNrZXRzXG4gICAgZW5jb2RlUGFja2V0KHBhY2tldCwgZmFsc2UsIGVuY29kZWRQYWNrZXQgPT4ge1xuICAgICAgZW5jb2RlZFBhY2tldHNbaV0gPSBlbmNvZGVkUGFja2V0O1xuICAgICAgaWYgKCsrY291bnQgPT09IGxlbmd0aCkge1xuICAgICAgICBjYWxsYmFjayhlbmNvZGVkUGFja2V0cy5qb2luKFNFUEFSQVRPUikpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn07XG5cbmNvbnN0IGRlY29kZVBheWxvYWQgPSAoZW5jb2RlZFBheWxvYWQsIGJpbmFyeVR5cGUpID0+IHtcbiAgY29uc3QgZW5jb2RlZFBhY2tldHMgPSBlbmNvZGVkUGF5bG9hZC5zcGxpdChTRVBBUkFUT1IpO1xuICBjb25zdCBwYWNrZXRzID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZW5jb2RlZFBhY2tldHMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBkZWNvZGVkUGFja2V0ID0gZGVjb2RlUGFja2V0KGVuY29kZWRQYWNrZXRzW2ldLCBiaW5hcnlUeXBlKTtcbiAgICBwYWNrZXRzLnB1c2goZGVjb2RlZFBhY2tldCk7XG4gICAgaWYgKGRlY29kZWRQYWNrZXQudHlwZSA9PT0gXCJlcnJvclwiKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHBhY2tldHM7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcHJvdG9jb2w6IDQsXG4gIGVuY29kZVBhY2tldCxcbiAgZW5jb2RlUGF5bG9hZCxcbiAgZGVjb2RlUGFja2V0LFxuICBkZWNvZGVQYXlsb2FkXG59O1xuIiwiXG4vKipcbiAqIE1vZHVsZSBleHBvcnRzLlxuICpcbiAqIExvZ2ljIGJvcnJvd2VkIGZyb20gTW9kZXJuaXpyOlxuICpcbiAqICAgLSBodHRwczovL2dpdGh1Yi5jb20vTW9kZXJuaXpyL01vZGVybml6ci9ibG9iL21hc3Rlci9mZWF0dXJlLWRldGVjdHMvY29ycy5qc1xuICovXG5cbnRyeSB7XG4gIG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIFhNTEh0dHBSZXF1ZXN0ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICd3aXRoQ3JlZGVudGlhbHMnIGluIG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xufSBjYXRjaCAoZXJyKSB7XG4gIC8vIGlmIFhNTEh0dHAgc3VwcG9ydCBpcyBkaXNhYmxlZCBpbiBJRSB0aGVuIGl0IHdpbGwgdGhyb3dcbiAgLy8gd2hlbiB0cnlpbmcgdG8gY3JlYXRlXG4gIG1vZHVsZS5leHBvcnRzID0gZmFsc2U7XG59XG4iLCIvKlxuICBodHRwczovL2dpdGh1Yi5jb20vYmFua3NlYW4gd3JhcHBlZCBNYWtvdG8gTWF0c3Vtb3RvIGFuZCBUYWt1amkgTmlzaGltdXJhJ3MgY29kZSBpbiBhIG5hbWVzcGFjZVxuICBzbyBpdCdzIGJldHRlciBlbmNhcHN1bGF0ZWQuIE5vdyB5b3UgY2FuIGhhdmUgbXVsdGlwbGUgcmFuZG9tIG51bWJlciBnZW5lcmF0b3JzXG4gIGFuZCB0aGV5IHdvbid0IHN0b21wIGFsbCBvdmVyIGVhY2hvdGhlcidzIHN0YXRlLlxuXG4gIElmIHlvdSB3YW50IHRvIHVzZSB0aGlzIGFzIGEgc3Vic3RpdHV0ZSBmb3IgTWF0aC5yYW5kb20oKSwgdXNlIHRoZSByYW5kb20oKVxuICBtZXRob2QgbGlrZSBzbzpcblxuICB2YXIgbSA9IG5ldyBNZXJzZW5uZVR3aXN0ZXIoKTtcbiAgdmFyIHJhbmRvbU51bWJlciA9IG0ucmFuZG9tKCk7XG5cbiAgWW91IGNhbiBhbHNvIGNhbGwgdGhlIG90aGVyIGdlbnJhbmRfe2Zvb30oKSBtZXRob2RzIG9uIHRoZSBpbnN0YW5jZS5cblxuICBJZiB5b3Ugd2FudCB0byB1c2UgYSBzcGVjaWZpYyBzZWVkIGluIG9yZGVyIHRvIGdldCBhIHJlcGVhdGFibGUgcmFuZG9tXG4gIHNlcXVlbmNlLCBwYXNzIGFuIGludGVnZXIgaW50byB0aGUgY29uc3RydWN0b3I6XG5cbiAgdmFyIG0gPSBuZXcgTWVyc2VubmVUd2lzdGVyKDEyMyk7XG5cbiAgYW5kIHRoYXQgd2lsbCBhbHdheXMgcHJvZHVjZSB0aGUgc2FtZSByYW5kb20gc2VxdWVuY2UuXG5cbiAgU2VhbiBNY0N1bGxvdWdoIChiYW5rc2VhbkBnbWFpbC5jb20pXG4qL1xuXG4vKlxuICAgQSBDLXByb2dyYW0gZm9yIE1UMTk5MzcsIHdpdGggaW5pdGlhbGl6YXRpb24gaW1wcm92ZWQgMjAwMi8xLzI2LlxuICAgQ29kZWQgYnkgVGFrdWppIE5pc2hpbXVyYSBhbmQgTWFrb3RvIE1hdHN1bW90by5cblxuICAgQmVmb3JlIHVzaW5nLCBpbml0aWFsaXplIHRoZSBzdGF0ZSBieSB1c2luZyBpbml0X3NlZWQoc2VlZClcbiAgIG9yIGluaXRfYnlfYXJyYXkoaW5pdF9rZXksIGtleV9sZW5ndGgpLlxuXG4gICBDb3B5cmlnaHQgKEMpIDE5OTcgLSAyMDAyLCBNYWtvdG8gTWF0c3Vtb3RvIGFuZCBUYWt1amkgTmlzaGltdXJhLFxuICAgQWxsIHJpZ2h0cyByZXNlcnZlZC5cblxuICAgUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0XG4gICBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnNcbiAgIGFyZSBtZXQ6XG5cbiAgICAgMS4gUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHRcbiAgICAgICAgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuXG4gICAgIDIuIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0XG4gICAgICAgIG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lciBpbiB0aGVcbiAgICAgICAgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlIGRpc3RyaWJ1dGlvbi5cblxuICAgICAzLiBUaGUgbmFtZXMgb2YgaXRzIGNvbnRyaWJ1dG9ycyBtYXkgbm90IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlXG4gICAgICAgIHByb2R1Y3RzIGRlcml2ZWQgZnJvbSB0aGlzIHNvZnR3YXJlIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlblxuICAgICAgICBwZXJtaXNzaW9uLlxuXG4gICBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTXG4gICBcIkFTIElTXCIgQU5EIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UXG4gICBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1JcbiAgIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELiAgSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVCBPV05FUiBPUlxuICAgQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsXG4gICBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sXG4gICBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSwgREFUQSwgT1JcbiAgIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWSBUSEVPUlkgT0ZcbiAgIExJQUJJTElUWSwgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HXG4gICBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GIFRISVNcbiAgIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuXG5cbiAgIEFueSBmZWVkYmFjayBpcyB2ZXJ5IHdlbGNvbWUuXG4gICBodHRwOi8vd3d3Lm1hdGguc2NpLmhpcm9zaGltYS11LmFjLmpwL35tLW1hdC9NVC9lbXQuaHRtbFxuICAgZW1haWw6IG0tbWF0IEAgbWF0aC5zY2kuaGlyb3NoaW1hLXUuYWMuanAgKHJlbW92ZSBzcGFjZSlcbiovXG5cbnZhciBNZXJzZW5uZVR3aXN0ZXIgPSBmdW5jdGlvbihzZWVkKSB7XG5cdGlmIChzZWVkID09IHVuZGVmaW5lZCkge1xuXHRcdHNlZWQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblx0fVxuXG5cdC8qIFBlcmlvZCBwYXJhbWV0ZXJzICovXG5cdHRoaXMuTiA9IDYyNDtcblx0dGhpcy5NID0gMzk3O1xuXHR0aGlzLk1BVFJJWF9BID0gMHg5OTA4YjBkZjsgICAvKiBjb25zdGFudCB2ZWN0b3IgYSAqL1xuXHR0aGlzLlVQUEVSX01BU0sgPSAweDgwMDAwMDAwOyAvKiBtb3N0IHNpZ25pZmljYW50IHctciBiaXRzICovXG5cdHRoaXMuTE9XRVJfTUFTSyA9IDB4N2ZmZmZmZmY7IC8qIGxlYXN0IHNpZ25pZmljYW50IHIgYml0cyAqL1xuXG5cdHRoaXMubXQgPSBuZXcgQXJyYXkodGhpcy5OKTsgLyogdGhlIGFycmF5IGZvciB0aGUgc3RhdGUgdmVjdG9yICovXG5cdHRoaXMubXRpPXRoaXMuTisxOyAvKiBtdGk9PU4rMSBtZWFucyBtdFtOXSBpcyBub3QgaW5pdGlhbGl6ZWQgKi9cblxuXHRpZiAoc2VlZC5jb25zdHJ1Y3RvciA9PSBBcnJheSkge1xuXHRcdHRoaXMuaW5pdF9ieV9hcnJheShzZWVkLCBzZWVkLmxlbmd0aCk7XG5cdH1cblx0ZWxzZSB7XG5cdFx0dGhpcy5pbml0X3NlZWQoc2VlZCk7XG5cdH1cbn1cblxuLyogaW5pdGlhbGl6ZXMgbXRbTl0gd2l0aCBhIHNlZWQgKi9cbi8qIG9yaWdpbiBuYW1lIGluaXRfZ2VucmFuZCAqL1xuTWVyc2VubmVUd2lzdGVyLnByb3RvdHlwZS5pbml0X3NlZWQgPSBmdW5jdGlvbihzKSB7XG5cdHRoaXMubXRbMF0gPSBzID4+PiAwO1xuXHRmb3IgKHRoaXMubXRpPTE7IHRoaXMubXRpPHRoaXMuTjsgdGhpcy5tdGkrKykge1xuXHRcdHZhciBzID0gdGhpcy5tdFt0aGlzLm10aS0xXSBeICh0aGlzLm10W3RoaXMubXRpLTFdID4+PiAzMCk7XG5cdFx0dGhpcy5tdFt0aGlzLm10aV0gPSAoKCgoKHMgJiAweGZmZmYwMDAwKSA+Pj4gMTYpICogMTgxMjQzMzI1MykgPDwgMTYpICsgKHMgJiAweDAwMDBmZmZmKSAqIDE4MTI0MzMyNTMpXG5cdFx0KyB0aGlzLm10aTtcblx0XHQvKiBTZWUgS251dGggVEFPQ1AgVm9sMi4gM3JkIEVkLiBQLjEwNiBmb3IgbXVsdGlwbGllci4gKi9cblx0XHQvKiBJbiB0aGUgcHJldmlvdXMgdmVyc2lvbnMsIE1TQnMgb2YgdGhlIHNlZWQgYWZmZWN0ICAgKi9cblx0XHQvKiBvbmx5IE1TQnMgb2YgdGhlIGFycmF5IG10W10uICAgICAgICAgICAgICAgICAgICAgICAgKi9cblx0XHQvKiAyMDAyLzAxLzA5IG1vZGlmaWVkIGJ5IE1ha290byBNYXRzdW1vdG8gICAgICAgICAgICAgKi9cblx0XHR0aGlzLm10W3RoaXMubXRpXSA+Pj49IDA7XG5cdFx0LyogZm9yID4zMiBiaXQgbWFjaGluZXMgKi9cblx0fVxufVxuXG4vKiBpbml0aWFsaXplIGJ5IGFuIGFycmF5IHdpdGggYXJyYXktbGVuZ3RoICovXG4vKiBpbml0X2tleSBpcyB0aGUgYXJyYXkgZm9yIGluaXRpYWxpemluZyBrZXlzICovXG4vKiBrZXlfbGVuZ3RoIGlzIGl0cyBsZW5ndGggKi9cbi8qIHNsaWdodCBjaGFuZ2UgZm9yIEMrKywgMjAwNC8yLzI2ICovXG5NZXJzZW5uZVR3aXN0ZXIucHJvdG90eXBlLmluaXRfYnlfYXJyYXkgPSBmdW5jdGlvbihpbml0X2tleSwga2V5X2xlbmd0aCkge1xuXHR2YXIgaSwgaiwgaztcblx0dGhpcy5pbml0X3NlZWQoMTk2NTAyMTgpO1xuXHRpPTE7IGo9MDtcblx0ayA9ICh0aGlzLk4+a2V5X2xlbmd0aCA/IHRoaXMuTiA6IGtleV9sZW5ndGgpO1xuXHRmb3IgKDsgazsgay0tKSB7XG5cdFx0dmFyIHMgPSB0aGlzLm10W2ktMV0gXiAodGhpcy5tdFtpLTFdID4+PiAzMClcblx0XHR0aGlzLm10W2ldID0gKHRoaXMubXRbaV0gXiAoKCgoKHMgJiAweGZmZmYwMDAwKSA+Pj4gMTYpICogMTY2NDUyNSkgPDwgMTYpICsgKChzICYgMHgwMDAwZmZmZikgKiAxNjY0NTI1KSkpXG5cdFx0KyBpbml0X2tleVtqXSArIGo7IC8qIG5vbiBsaW5lYXIgKi9cblx0XHR0aGlzLm10W2ldID4+Pj0gMDsgLyogZm9yIFdPUkRTSVpFID4gMzIgbWFjaGluZXMgKi9cblx0XHRpKys7IGorKztcblx0XHRpZiAoaT49dGhpcy5OKSB7IHRoaXMubXRbMF0gPSB0aGlzLm10W3RoaXMuTi0xXTsgaT0xOyB9XG5cdFx0aWYgKGo+PWtleV9sZW5ndGgpIGo9MDtcblx0fVxuXHRmb3IgKGs9dGhpcy5OLTE7IGs7IGstLSkge1xuXHRcdHZhciBzID0gdGhpcy5tdFtpLTFdIF4gKHRoaXMubXRbaS0xXSA+Pj4gMzApO1xuXHRcdHRoaXMubXRbaV0gPSAodGhpcy5tdFtpXSBeICgoKCgocyAmIDB4ZmZmZjAwMDApID4+PiAxNikgKiAxNTY2MDgzOTQxKSA8PCAxNikgKyAocyAmIDB4MDAwMGZmZmYpICogMTU2NjA4Mzk0MSkpXG5cdFx0LSBpOyAvKiBub24gbGluZWFyICovXG5cdFx0dGhpcy5tdFtpXSA+Pj49IDA7IC8qIGZvciBXT1JEU0laRSA+IDMyIG1hY2hpbmVzICovXG5cdFx0aSsrO1xuXHRcdGlmIChpPj10aGlzLk4pIHsgdGhpcy5tdFswXSA9IHRoaXMubXRbdGhpcy5OLTFdOyBpPTE7IH1cblx0fVxuXG5cdHRoaXMubXRbMF0gPSAweDgwMDAwMDAwOyAvKiBNU0IgaXMgMTsgYXNzdXJpbmcgbm9uLXplcm8gaW5pdGlhbCBhcnJheSAqL1xufVxuXG4vKiBnZW5lcmF0ZXMgYSByYW5kb20gbnVtYmVyIG9uIFswLDB4ZmZmZmZmZmZdLWludGVydmFsICovXG4vKiBvcmlnaW4gbmFtZSBnZW5yYW5kX2ludDMyICovXG5NZXJzZW5uZVR3aXN0ZXIucHJvdG90eXBlLnJhbmRvbV9pbnQgPSBmdW5jdGlvbigpIHtcblx0dmFyIHk7XG5cdHZhciBtYWcwMSA9IG5ldyBBcnJheSgweDAsIHRoaXMuTUFUUklYX0EpO1xuXHQvKiBtYWcwMVt4XSA9IHggKiBNQVRSSVhfQSAgZm9yIHg9MCwxICovXG5cblx0aWYgKHRoaXMubXRpID49IHRoaXMuTikgeyAvKiBnZW5lcmF0ZSBOIHdvcmRzIGF0IG9uZSB0aW1lICovXG5cdFx0dmFyIGtrO1xuXG5cdFx0aWYgKHRoaXMubXRpID09IHRoaXMuTisxKSAgLyogaWYgaW5pdF9zZWVkKCkgaGFzIG5vdCBiZWVuIGNhbGxlZCwgKi9cblx0XHRcdHRoaXMuaW5pdF9zZWVkKDU0ODkpOyAgLyogYSBkZWZhdWx0IGluaXRpYWwgc2VlZCBpcyB1c2VkICovXG5cblx0XHRmb3IgKGtrPTA7a2s8dGhpcy5OLXRoaXMuTTtraysrKSB7XG5cdFx0XHR5ID0gKHRoaXMubXRba2tdJnRoaXMuVVBQRVJfTUFTSyl8KHRoaXMubXRba2srMV0mdGhpcy5MT1dFUl9NQVNLKTtcblx0XHRcdHRoaXMubXRba2tdID0gdGhpcy5tdFtrayt0aGlzLk1dIF4gKHkgPj4+IDEpIF4gbWFnMDFbeSAmIDB4MV07XG5cdFx0fVxuXHRcdGZvciAoO2trPHRoaXMuTi0xO2trKyspIHtcblx0XHRcdHkgPSAodGhpcy5tdFtra10mdGhpcy5VUFBFUl9NQVNLKXwodGhpcy5tdFtraysxXSZ0aGlzLkxPV0VSX01BU0spO1xuXHRcdFx0dGhpcy5tdFtra10gPSB0aGlzLm10W2trKyh0aGlzLk0tdGhpcy5OKV0gXiAoeSA+Pj4gMSkgXiBtYWcwMVt5ICYgMHgxXTtcblx0XHR9XG5cdFx0eSA9ICh0aGlzLm10W3RoaXMuTi0xXSZ0aGlzLlVQUEVSX01BU0spfCh0aGlzLm10WzBdJnRoaXMuTE9XRVJfTUFTSyk7XG5cdFx0dGhpcy5tdFt0aGlzLk4tMV0gPSB0aGlzLm10W3RoaXMuTS0xXSBeICh5ID4+PiAxKSBeIG1hZzAxW3kgJiAweDFdO1xuXG5cdFx0dGhpcy5tdGkgPSAwO1xuXHR9XG5cblx0eSA9IHRoaXMubXRbdGhpcy5tdGkrK107XG5cblx0LyogVGVtcGVyaW5nICovXG5cdHkgXj0gKHkgPj4+IDExKTtcblx0eSBePSAoeSA8PCA3KSAmIDB4OWQyYzU2ODA7XG5cdHkgXj0gKHkgPDwgMTUpICYgMHhlZmM2MDAwMDtcblx0eSBePSAoeSA+Pj4gMTgpO1xuXG5cdHJldHVybiB5ID4+PiAwO1xufVxuXG4vKiBnZW5lcmF0ZXMgYSByYW5kb20gbnVtYmVyIG9uIFswLDB4N2ZmZmZmZmZdLWludGVydmFsICovXG4vKiBvcmlnaW4gbmFtZSBnZW5yYW5kX2ludDMxICovXG5NZXJzZW5uZVR3aXN0ZXIucHJvdG90eXBlLnJhbmRvbV9pbnQzMSA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gKHRoaXMucmFuZG9tX2ludCgpPj4+MSk7XG59XG5cbi8qIGdlbmVyYXRlcyBhIHJhbmRvbSBudW1iZXIgb24gWzAsMV0tcmVhbC1pbnRlcnZhbCAqL1xuLyogb3JpZ2luIG5hbWUgZ2VucmFuZF9yZWFsMSAqL1xuTWVyc2VubmVUd2lzdGVyLnByb3RvdHlwZS5yYW5kb21faW5jbCA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcy5yYW5kb21faW50KCkqKDEuMC80Mjk0OTY3Mjk1LjApO1xuXHQvKiBkaXZpZGVkIGJ5IDJeMzItMSAqL1xufVxuXG4vKiBnZW5lcmF0ZXMgYSByYW5kb20gbnVtYmVyIG9uIFswLDEpLXJlYWwtaW50ZXJ2YWwgKi9cbk1lcnNlbm5lVHdpc3Rlci5wcm90b3R5cGUucmFuZG9tID0gZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzLnJhbmRvbV9pbnQoKSooMS4wLzQyOTQ5NjcyOTYuMCk7XG5cdC8qIGRpdmlkZWQgYnkgMl4zMiAqL1xufVxuXG4vKiBnZW5lcmF0ZXMgYSByYW5kb20gbnVtYmVyIG9uICgwLDEpLXJlYWwtaW50ZXJ2YWwgKi9cbi8qIG9yaWdpbiBuYW1lIGdlbnJhbmRfcmVhbDMgKi9cbk1lcnNlbm5lVHdpc3Rlci5wcm90b3R5cGUucmFuZG9tX2V4Y2wgPSBmdW5jdGlvbigpIHtcblx0cmV0dXJuICh0aGlzLnJhbmRvbV9pbnQoKSArIDAuNSkqKDEuMC80Mjk0OTY3Mjk2LjApO1xuXHQvKiBkaXZpZGVkIGJ5IDJeMzIgKi9cbn1cblxuLyogZ2VuZXJhdGVzIGEgcmFuZG9tIG51bWJlciBvbiBbMCwxKSB3aXRoIDUzLWJpdCByZXNvbHV0aW9uKi9cbi8qIG9yaWdpbiBuYW1lIGdlbnJhbmRfcmVzNTMgKi9cbk1lcnNlbm5lVHdpc3Rlci5wcm90b3R5cGUucmFuZG9tX2xvbmcgPSBmdW5jdGlvbigpIHtcblx0dmFyIGE9dGhpcy5yYW5kb21faW50KCk+Pj41LCBiPXRoaXMucmFuZG9tX2ludCgpPj4+Njtcblx0cmV0dXJuKGEqNjcxMDg4NjQuMCtiKSooMS4wLzkwMDcxOTkyNTQ3NDA5OTIuMCk7XG59XG5cbi8qIFRoZXNlIHJlYWwgdmVyc2lvbnMgYXJlIGR1ZSB0byBJc2FrdSBXYWRhLCAyMDAyLzAxLzA5IGFkZGVkICovXG5cbm1vZHVsZS5leHBvcnRzID0gTWVyc2VubmVUd2lzdGVyO1xuIiwiLyoqXG4gKiBDb21waWxlcyBhIHF1ZXJ5c3RyaW5nXG4gKiBSZXR1cm5zIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgb2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5leHBvcnRzLmVuY29kZSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgdmFyIHN0ciA9ICcnO1xuXG4gIGZvciAodmFyIGkgaW4gb2JqKSB7XG4gICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgaWYgKHN0ci5sZW5ndGgpIHN0ciArPSAnJic7XG4gICAgICBzdHIgKz0gZW5jb2RlVVJJQ29tcG9uZW50KGkpICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG9ialtpXSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0cjtcbn07XG5cbi8qKlxuICogUGFyc2VzIGEgc2ltcGxlIHF1ZXJ5c3RyaW5nIGludG8gYW4gb2JqZWN0XG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHFzXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5leHBvcnRzLmRlY29kZSA9IGZ1bmN0aW9uKHFzKXtcbiAgdmFyIHFyeSA9IHt9O1xuICB2YXIgcGFpcnMgPSBxcy5zcGxpdCgnJicpO1xuICBmb3IgKHZhciBpID0gMCwgbCA9IHBhaXJzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIHZhciBwYWlyID0gcGFpcnNbaV0uc3BsaXQoJz0nKTtcbiAgICBxcnlbZGVjb2RlVVJJQ29tcG9uZW50KHBhaXJbMF0pXSA9IGRlY29kZVVSSUNvbXBvbmVudChwYWlyWzFdKTtcbiAgfVxuICByZXR1cm4gcXJ5O1xufTtcbiIsIi8qKlxuICogUGFyc2VzIGFuIFVSSVxuICpcbiAqIEBhdXRob3IgU3RldmVuIExldml0aGFuIDxzdGV2ZW5sZXZpdGhhbi5jb20+IChNSVQgbGljZW5zZSlcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbnZhciByZSA9IC9eKD86KD8hW146QF0rOlteOkBcXC9dKkApKGh0dHB8aHR0cHN8d3N8d3NzKTpcXC9cXC8pPygoPzooKFteOkBdKikoPzo6KFteOkBdKikpPyk/QCk/KCg/OlthLWYwLTldezAsNH06KXsyLDd9W2EtZjAtOV17MCw0fXxbXjpcXC8/I10qKSg/OjooXFxkKikpPykoKChcXC8oPzpbXj8jXSg/IVtePyNcXC9dKlxcLltePyNcXC8uXSsoPzpbPyNdfCQpKSkqXFwvPyk/KFtePyNcXC9dKikpKD86XFw/KFteI10qKSk/KD86IyguKikpPykvO1xuXG52YXIgcGFydHMgPSBbXG4gICAgJ3NvdXJjZScsICdwcm90b2NvbCcsICdhdXRob3JpdHknLCAndXNlckluZm8nLCAndXNlcicsICdwYXNzd29yZCcsICdob3N0JywgJ3BvcnQnLCAncmVsYXRpdmUnLCAncGF0aCcsICdkaXJlY3RvcnknLCAnZmlsZScsICdxdWVyeScsICdhbmNob3InXG5dO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHBhcnNldXJpKHN0cikge1xuICAgIHZhciBzcmMgPSBzdHIsXG4gICAgICAgIGIgPSBzdHIuaW5kZXhPZignWycpLFxuICAgICAgICBlID0gc3RyLmluZGV4T2YoJ10nKTtcblxuICAgIGlmIChiICE9IC0xICYmIGUgIT0gLTEpIHtcbiAgICAgICAgc3RyID0gc3RyLnN1YnN0cmluZygwLCBiKSArIHN0ci5zdWJzdHJpbmcoYiwgZSkucmVwbGFjZSgvOi9nLCAnOycpICsgc3RyLnN1YnN0cmluZyhlLCBzdHIubGVuZ3RoKTtcbiAgICB9XG5cbiAgICB2YXIgbSA9IHJlLmV4ZWMoc3RyIHx8ICcnKSxcbiAgICAgICAgdXJpID0ge30sXG4gICAgICAgIGkgPSAxNDtcblxuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgdXJpW3BhcnRzW2ldXSA9IG1baV0gfHwgJyc7XG4gICAgfVxuXG4gICAgaWYgKGIgIT0gLTEgJiYgZSAhPSAtMSkge1xuICAgICAgICB1cmkuc291cmNlID0gc3JjO1xuICAgICAgICB1cmkuaG9zdCA9IHVyaS5ob3N0LnN1YnN0cmluZygxLCB1cmkuaG9zdC5sZW5ndGggLSAxKS5yZXBsYWNlKC87L2csICc6Jyk7XG4gICAgICAgIHVyaS5hdXRob3JpdHkgPSB1cmkuYXV0aG9yaXR5LnJlcGxhY2UoJ1snLCAnJykucmVwbGFjZSgnXScsICcnKS5yZXBsYWNlKC87L2csICc6Jyk7XG4gICAgICAgIHVyaS5pcHY2dXJpID0gdHJ1ZTtcbiAgICB9XG5cbiAgICB1cmkucGF0aE5hbWVzID0gcGF0aE5hbWVzKHVyaSwgdXJpWydwYXRoJ10pO1xuICAgIHVyaS5xdWVyeUtleSA9IHF1ZXJ5S2V5KHVyaSwgdXJpWydxdWVyeSddKTtcblxuICAgIHJldHVybiB1cmk7XG59O1xuXG5mdW5jdGlvbiBwYXRoTmFtZXMob2JqLCBwYXRoKSB7XG4gICAgdmFyIHJlZ3ggPSAvXFwvezIsOX0vZyxcbiAgICAgICAgbmFtZXMgPSBwYXRoLnJlcGxhY2UocmVneCwgXCIvXCIpLnNwbGl0KFwiL1wiKTtcblxuICAgIGlmIChwYXRoLnN1YnN0cigwLCAxKSA9PSAnLycgfHwgcGF0aC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgbmFtZXMuc3BsaWNlKDAsIDEpO1xuICAgIH1cbiAgICBpZiAocGF0aC5zdWJzdHIocGF0aC5sZW5ndGggLSAxLCAxKSA9PSAnLycpIHtcbiAgICAgICAgbmFtZXMuc3BsaWNlKG5hbWVzLmxlbmd0aCAtIDEsIDEpO1xuICAgIH1cblxuICAgIHJldHVybiBuYW1lcztcbn1cblxuZnVuY3Rpb24gcXVlcnlLZXkodXJpLCBxdWVyeSkge1xuICAgIHZhciBkYXRhID0ge307XG5cbiAgICBxdWVyeS5yZXBsYWNlKC8oPzpefCYpKFteJj1dKik9PyhbXiZdKikvZywgZnVuY3Rpb24gKCQwLCAkMSwgJDIpIHtcbiAgICAgICAgaWYgKCQxKSB7XG4gICAgICAgICAgICBkYXRhWyQxXSA9ICQyO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZGF0YTtcbn1cbiIsImNvbnN0IEFSR19MRU5HVEggPSB7XG4gIGE6IDcsXG4gIGM6IDYsXG4gIGg6IDEsXG4gIGw6IDIsXG4gIG06IDIsXG4gIHE6IDQsXG4gIHM6IDQsXG4gIHQ6IDIsXG4gIHY6IDEsXG4gIHo6IDAsXG59O1xuXG5jb25zdCBTRUdNRU5UX1BBVFRFUk4gPSAvKFthc3R2enFtaGxjXSkoW15hc3R2enFtaGxjXSopL2dpO1xuXG5jb25zdCBOVU1CRVIgPSAvLT9bMC05XSpcXC4/WzAtOV0rKD86ZVstK10/XFxkKyk/L2dpO1xuXG5mdW5jdGlvbiBwYXJzZVZhbHVlcyhhcmdzKSB7XG4gIGNvbnN0IG51bWJlcnMgPSBhcmdzLm1hdGNoKE5VTUJFUik7XG4gIHJldHVybiBudW1iZXJzID8gbnVtYmVycy5tYXAoTnVtYmVyKSA6IFtdO1xufVxuXG4vKipcbiAqIHBhcnNlIGFuIHN2ZyBwYXRoIGRhdGEgc3RyaW5nLiBHZW5lcmF0ZXMgYW4gQXJyYXlcbiAqIG9mIGNvbW1hbmRzIHdoZXJlIGVhY2ggY29tbWFuZCBpcyBhbiBBcnJheSBvZiB0aGVcbiAqIGZvcm0gYFtjb21tYW5kLCBhcmcxLCBhcmcyLCAuLi5dYFxuICpcbiAqIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9TVkcvcGF0aHMuaHRtbCNQYXRoRGF0YUdlbmVyYWxJbmZvcm1hdGlvblxuICogQGlnbm9yZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoXG4gKiBAcmV0dXJucyB7YXJyYXl9XG4gKi9cbmZ1bmN0aW9uIHBhcnNlKHBhdGgpIHtcbiAgY29uc3QgZGF0YSA9IFtdO1xuICBjb25zdCBwID0gU3RyaW5nKHBhdGgpLnRyaW0oKTtcblxuICAvLyBBIHBhdGggZGF0YSBzZWdtZW50IChpZiB0aGVyZSBpcyBvbmUpIG11c3QgYmVnaW4gd2l0aCBhIFwibW92ZXRvXCIgY29tbWFuZFxuICBpZiAocFswXSAhPT0gJ00nICYmIHBbMF0gIT09ICdtJykge1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgcC5yZXBsYWNlKFNFR01FTlRfUEFUVEVSTiwgKF8sIGNvbW1hbmQsIGFyZ3MpID0+IHtcbiAgICBsZXQgdHlwZSA9IGNvbW1hbmQudG9Mb3dlckNhc2UoKTtcbiAgICBsZXQgdGhlQXJncyA9IHBhcnNlVmFsdWVzKGFyZ3MpO1xuICAgIGxldCB0aGVDb21tYW5kID0gY29tbWFuZDtcbiAgICAvLyBvdmVybG9hZGVkIG1vdmVUb1xuICAgIGlmICh0eXBlID09PSAnbScgJiYgdGhlQXJncy5sZW5ndGggPiAyKSB7XG4gICAgICBkYXRhLnB1c2goW3RoZUNvbW1hbmRdLmNvbmNhdCh0aGVBcmdzLnNwbGljZSgwLCAyKSkpO1xuICAgICAgdHlwZSA9ICdsJztcbiAgICAgIHRoZUNvbW1hbmQgPSB0aGVDb21tYW5kID09PSAnbScgPyAnbCcgOiAnTCc7XG4gICAgfVxuXG4gICAgLy8gSWdub3JlIGludmFsaWQgY29tbWFuZHNcbiAgICBpZiAodGhlQXJncy5sZW5ndGggPCBBUkdfTEVOR1RIW3R5cGVdKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgZGF0YS5wdXNoKFt0aGVDb21tYW5kXS5jb25jYXQodGhlQXJncy5zcGxpY2UoMCwgQVJHX0xFTkdUSFt0eXBlXSkpKTtcblxuICAgIC8vIFRoZSBjb21tYW5kIGxldHRlciBjYW4gYmUgZWxpbWluYXRlZCBvbiBzdWJzZXF1ZW50IGNvbW1hbmRzIGlmIHRoZVxuICAgIC8vIHNhbWUgY29tbWFuZCBpcyB1c2VkIG11bHRpcGxlIHRpbWVzIGluIGEgcm93IChlLmcuLCB5b3UgY2FuIGRyb3AgdGhlXG4gICAgLy8gc2Vjb25kIFwiTFwiIGluIFwiTSAxMDAgMjAwIEwgMjAwIDEwMCBMIC0xMDAgLTIwMFwiIGFuZCB1c2VcbiAgICAvLyBcIk0gMTAwIDIwMCBMIDIwMCAxMDAgLTEwMCAtMjAwXCIgaW5zdGVhZCkuXG4gICAgd2hpbGUgKFxuICAgICAgdGhlQXJncy5sZW5ndGggPj0gQVJHX0xFTkdUSFt0eXBlXSAmJlxuICAgICAgdGhlQXJncy5sZW5ndGggJiZcbiAgICAgIEFSR19MRU5HVEhbdHlwZV1cbiAgICApIHtcbiAgICAgIGRhdGEucHVzaChbdGhlQ29tbWFuZF0uY29uY2F0KHRoZUFyZ3Muc3BsaWNlKDAsIEFSR19MRU5HVEhbdHlwZV0pKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuICcnO1xuICB9KTtcbiAgcmV0dXJuIGRhdGE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcGFyc2U7XG4iLCJjb25zdCBwYXJzZVBhdGggPSByZXF1aXJlKCcuL3BhcnNlLXBhdGgnKTtcblxuLyoqXG4gKiBXb3JrIGFyb3VuZCBmb3IgaHR0cHM6Ly9kZXZlbG9wZXIubWljcm9zb2Z0LmNvbS9lbi11cy9taWNyb3NvZnQtZWRnZS9wbGF0Zm9ybS9pc3N1ZXMvODQzODg4NC9cbiAqIEBpZ25vcmVcbiAqL1xuZnVuY3Rpb24gc3VwcG9ydHNTdmdQYXRoQXJndW1lbnQod2luZG93KSB7XG4gIGNvbnN0IGNhbnZhcyA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgY29uc3QgZyA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICBjb25zdCBwID0gbmV3IHdpbmRvdy5QYXRoMkQoJ00wIDAgTDEgMScpO1xuICBnLnN0cm9rZVN0eWxlID0gJ3JlZCc7XG4gIGcubGluZVdpZHRoID0gMTtcbiAgZy5zdHJva2UocCk7XG4gIGNvbnN0IGltZ0RhdGEgPSBnLmdldEltYWdlRGF0YSgwLCAwLCAxLCAxKTtcbiAgcmV0dXJuIGltZ0RhdGEuZGF0YVswXSA9PT0gMjU1OyAvLyBDaGVjayBpZiBwaXhlbCBpcyByZWRcbn1cblxuZnVuY3Rpb24gcm90YXRlUG9pbnQocG9pbnQsIGFuZ2xlKSB7XG4gIGNvbnN0IG54ID0gcG9pbnQueCAqIE1hdGguY29zKGFuZ2xlKSAtIHBvaW50LnkgKiBNYXRoLnNpbihhbmdsZSk7XG4gIGNvbnN0IG55ID0gcG9pbnQueSAqIE1hdGguY29zKGFuZ2xlKSArIHBvaW50LnggKiBNYXRoLnNpbihhbmdsZSk7XG4gIHBvaW50LnggPSBueDtcbiAgcG9pbnQueSA9IG55O1xufVxuXG5mdW5jdGlvbiB0cmFuc2xhdGVQb2ludChwb2ludCwgZHgsIGR5KSB7XG4gIHBvaW50LnggKz0gZHg7XG4gIHBvaW50LnkgKz0gZHk7XG59XG5cbmZ1bmN0aW9uIHNjYWxlUG9pbnQocG9pbnQsIHMpIHtcbiAgcG9pbnQueCAqPSBzO1xuICBwb2ludC55ICo9IHM7XG59XG5cbmZ1bmN0aW9uIHBvbHlGaWxsUGF0aDJEKHdpbmRvdykge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgIXdpbmRvdy5DYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKHdpbmRvdy5QYXRoMkQgJiYgc3VwcG9ydHNTdmdQYXRoQXJndW1lbnQod2luZG93KSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmF0ZXMgYSBQYXRoMkQgcG9seWZpbGwgb2JqZWN0XG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAaWdub3JlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwYXRoXG4gICAqL1xuICBjbGFzcyBQYXRoMkQge1xuICAgIGNvbnN0cnVjdG9yKHBhdGgpIHtcbiAgICAgIHRoaXMuc2VnbWVudHMgPSBbXTtcbiAgICAgIGlmIChwYXRoICYmIHBhdGggaW5zdGFuY2VvZiBQYXRoMkQpIHtcbiAgICAgICAgdGhpcy5zZWdtZW50cy5wdXNoKC4uLnBhdGguc2VnbWVudHMpO1xuICAgICAgfSBlbHNlIGlmIChwYXRoKSB7XG4gICAgICAgIHRoaXMuc2VnbWVudHMgPSBwYXJzZVBhdGgocGF0aCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgYWRkUGF0aChwYXRoKSB7XG4gICAgICBpZiAocGF0aCAmJiBwYXRoIGluc3RhbmNlb2YgUGF0aDJEKSB7XG4gICAgICAgIHRoaXMuc2VnbWVudHMucHVzaCguLi5wYXRoLnNlZ21lbnRzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtb3ZlVG8oeCwgeSkge1xuICAgICAgdGhpcy5zZWdtZW50cy5wdXNoKFsnTScsIHgsIHldKTtcbiAgICB9XG5cbiAgICBsaW5lVG8oeCwgeSkge1xuICAgICAgdGhpcy5zZWdtZW50cy5wdXNoKFsnTCcsIHgsIHldKTtcbiAgICB9XG5cbiAgICBhcmMoeCwgeSwgciwgc3RhcnQsIGVuZCwgY2N3KSB7XG4gICAgICB0aGlzLnNlZ21lbnRzLnB1c2goWydBQycsIHgsIHksIHIsIHN0YXJ0LCBlbmQsICEhY2N3XSk7XG4gICAgfVxuXG4gICAgYXJjVG8oeDEsIHkxLCB4MiwgeTIsIHIpIHtcbiAgICAgIHRoaXMuc2VnbWVudHMucHVzaChbJ0FUJywgeDEsIHkxLCB4MiwgeTIsIHJdKTtcbiAgICB9XG5cbiAgICBlbGxpcHNlKHgsIHksIHJ4LCByeSwgYW5nbGUsIHN0YXJ0LCBlbmQsIGNjdykge1xuICAgICAgdGhpcy5zZWdtZW50cy5wdXNoKFsnRScsIHgsIHksIHJ4LCByeSwgYW5nbGUsIHN0YXJ0LCBlbmQsICEhY2N3XSk7XG4gICAgfVxuXG4gICAgY2xvc2VQYXRoKCkge1xuICAgICAgdGhpcy5zZWdtZW50cy5wdXNoKFsnWiddKTtcbiAgICB9XG5cbiAgICBiZXppZXJDdXJ2ZVRvKGNwMXgsIGNwMXksIGNwMngsIGNwMnksIHgsIHkpIHtcbiAgICAgIHRoaXMuc2VnbWVudHMucHVzaChbJ0MnLCBjcDF4LCBjcDF5LCBjcDJ4LCBjcDJ5LCB4LCB5XSk7XG4gICAgfVxuXG4gICAgcXVhZHJhdGljQ3VydmVUbyhjcHgsIGNweSwgeCwgeSkge1xuICAgICAgdGhpcy5zZWdtZW50cy5wdXNoKFsnUScsIGNweCwgY3B5LCB4LCB5XSk7XG4gICAgfVxuXG4gICAgcmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICB0aGlzLnNlZ21lbnRzLnB1c2goWydSJywgeCwgeSwgd2lkdGgsIGhlaWdodF0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGJ1aWxkUGF0aChjYW52YXMsIHNlZ21lbnRzKSB7XG4gICAgbGV0IGVuZEFuZ2xlO1xuICAgIGxldCBzdGFydEFuZ2xlO1xuICAgIGxldCBsYXJnZUFyY0ZsYWc7XG4gICAgbGV0IHN3ZWVwRmxhZztcbiAgICBsZXQgZW5kUG9pbnQ7XG4gICAgbGV0IG1pZFBvaW50O1xuICAgIGxldCBhbmdsZTtcbiAgICBsZXQgbGFtYmRhO1xuICAgIGxldCB0MTtcbiAgICBsZXQgdDI7XG4gICAgbGV0IHg7XG4gICAgbGV0IHgxO1xuICAgIGxldCB5O1xuICAgIGxldCB5MTtcbiAgICBsZXQgcjtcbiAgICBsZXQgcng7XG4gICAgbGV0IHJ5O1xuICAgIGxldCB3O1xuICAgIGxldCBoO1xuICAgIGxldCBwYXRoVHlwZTtcbiAgICBsZXQgY2VudGVyUG9pbnQ7XG4gICAgbGV0IGNweDtcbiAgICBsZXQgY3B5O1xuICAgIGxldCBxY3B4O1xuICAgIGxldCBxY3B5O1xuICAgIGxldCBjY3c7XG4gICAgbGV0IHN0YXJ0UG9pbnQgPSB7IHg6IDAsIHk6IDAgfTtcbiAgICBjb25zdCBjdXJyZW50UG9pbnQgPSB7IHg6IDAsIHk6IDAgfTtcblxuICAgIGNhbnZhcy5iZWdpblBhdGgoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlZ21lbnRzLmxlbmd0aDsgKytpKSB7XG4gICAgICBjb25zdCBzID0gc2VnbWVudHNbaV07XG4gICAgICBwYXRoVHlwZSA9IHNbMF07XG5cbiAgICAgIC8vIFJlc2V0IGNvbnRyb2wgcG9pbnQgaWYgY29tbWFuZCBpcyBub3QgY3ViaWNcbiAgICAgIGlmIChcbiAgICAgICAgcGF0aFR5cGUgIT09ICdTJyAmJlxuICAgICAgICBwYXRoVHlwZSAhPT0gJ3MnICYmXG4gICAgICAgIHBhdGhUeXBlICE9PSAnQycgJiZcbiAgICAgICAgcGF0aFR5cGUgIT09ICdjJ1xuICAgICAgKSB7XG4gICAgICAgIGNweCA9IG51bGw7XG4gICAgICAgIGNweSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgcGF0aFR5cGUgIT09ICdUJyAmJlxuICAgICAgICBwYXRoVHlwZSAhPT0gJ3QnICYmXG4gICAgICAgIHBhdGhUeXBlICE9PSAnUScgJiZcbiAgICAgICAgcGF0aFR5cGUgIT09ICdxJ1xuICAgICAgKSB7XG4gICAgICAgIHFjcHggPSBudWxsO1xuICAgICAgICBxY3B5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgc3dpdGNoIChwYXRoVHlwZSkge1xuICAgICAgICBjYXNlICdtJzpcbiAgICAgICAgY2FzZSAnTSc6XG4gICAgICAgICAgaWYgKHBhdGhUeXBlID09PSAnbScpIHtcbiAgICAgICAgICAgIHggKz0gc1sxXTtcbiAgICAgICAgICAgIHkgKz0gc1syXTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgeCA9IHNbMV07XG4gICAgICAgICAgICB5ID0gc1syXTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAocGF0aFR5cGUgPT09ICdNJyB8fCAhc3RhcnRQb2ludCkge1xuICAgICAgICAgICAgc3RhcnRQb2ludCA9IHsgeCwgeSB9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNhbnZhcy5tb3ZlVG8oeCwgeSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2wnOlxuICAgICAgICAgIHggKz0gc1sxXTtcbiAgICAgICAgICB5ICs9IHNbMl07XG4gICAgICAgICAgY2FudmFzLmxpbmVUbyh4LCB5KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnTCc6XG4gICAgICAgICAgeCA9IHNbMV07XG4gICAgICAgICAgeSA9IHNbMl07XG4gICAgICAgICAgY2FudmFzLmxpbmVUbyh4LCB5KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnSCc6XG4gICAgICAgICAgeCA9IHNbMV07XG4gICAgICAgICAgY2FudmFzLmxpbmVUbyh4LCB5KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnaCc6XG4gICAgICAgICAgeCArPSBzWzFdO1xuICAgICAgICAgIGNhbnZhcy5saW5lVG8oeCwgeSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ1YnOlxuICAgICAgICAgIHkgPSBzWzFdO1xuICAgICAgICAgIGNhbnZhcy5saW5lVG8oeCwgeSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3YnOlxuICAgICAgICAgIHkgKz0gc1sxXTtcbiAgICAgICAgICBjYW52YXMubGluZVRvKHgsIHkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhJzpcbiAgICAgICAgY2FzZSAnQSc6XG4gICAgICAgICAgaWYgKHBhdGhUeXBlID09PSAnYScpIHtcbiAgICAgICAgICAgIHggKz0gc1s2XTtcbiAgICAgICAgICAgIHkgKz0gc1s3XTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgeCA9IHNbNl07XG4gICAgICAgICAgICB5ID0gc1s3XTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByeCA9IHNbMV07IC8vIHJ4XG4gICAgICAgICAgcnkgPSBzWzJdOyAvLyByeVxuICAgICAgICAgIGFuZ2xlID0gKHNbM10gKiBNYXRoLlBJKSAvIDE4MDtcbiAgICAgICAgICBsYXJnZUFyY0ZsYWcgPSAhIXNbNF07XG4gICAgICAgICAgc3dlZXBGbGFnID0gISFzWzVdO1xuICAgICAgICAgIGVuZFBvaW50ID0geyB4LCB5IH07XG5cbiAgICAgICAgICAvLyBodHRwczovL3d3dy53My5vcmcvVFIvU1ZHL2ltcGxub3RlLmh0bWwjQXJjSW1wbGVtZW50YXRpb25Ob3Rlc1xuXG4gICAgICAgICAgbWlkUG9pbnQgPSB7XG4gICAgICAgICAgICB4OiAoY3VycmVudFBvaW50LnggLSBlbmRQb2ludC54KSAvIDIsXG4gICAgICAgICAgICB5OiAoY3VycmVudFBvaW50LnkgLSBlbmRQb2ludC55KSAvIDIsXG4gICAgICAgICAgfTtcbiAgICAgICAgICByb3RhdGVQb2ludChtaWRQb2ludCwgLWFuZ2xlKTtcblxuICAgICAgICAgIC8vIHJhZGl1cyBjb3JyZWN0aW9uXG4gICAgICAgICAgbGFtYmRhID1cbiAgICAgICAgICAgIChtaWRQb2ludC54ICogbWlkUG9pbnQueCkgLyAocnggKiByeCkgK1xuICAgICAgICAgICAgKG1pZFBvaW50LnkgKiBtaWRQb2ludC55KSAvIChyeSAqIHJ5KTtcbiAgICAgICAgICBpZiAobGFtYmRhID4gMSkge1xuICAgICAgICAgICAgbGFtYmRhID0gTWF0aC5zcXJ0KGxhbWJkYSk7XG4gICAgICAgICAgICByeCAqPSBsYW1iZGE7XG4gICAgICAgICAgICByeSAqPSBsYW1iZGE7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY2VudGVyUG9pbnQgPSB7XG4gICAgICAgICAgICB4OiAocnggKiBtaWRQb2ludC55KSAvIHJ5LFxuICAgICAgICAgICAgeTogLShyeSAqIG1pZFBvaW50LngpIC8gcngsXG4gICAgICAgICAgfTtcbiAgICAgICAgICB0MSA9IHJ4ICogcnggKiByeSAqIHJ5O1xuICAgICAgICAgIHQyID1cbiAgICAgICAgICAgIHJ4ICogcnggKiBtaWRQb2ludC55ICogbWlkUG9pbnQueSArXG4gICAgICAgICAgICByeSAqIHJ5ICogbWlkUG9pbnQueCAqIG1pZFBvaW50Lng7XG4gICAgICAgICAgaWYgKHN3ZWVwRmxhZyAhPT0gbGFyZ2VBcmNGbGFnKSB7XG4gICAgICAgICAgICBzY2FsZVBvaW50KGNlbnRlclBvaW50LCBNYXRoLnNxcnQoKHQxIC0gdDIpIC8gdDIpIHx8IDApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzY2FsZVBvaW50KGNlbnRlclBvaW50LCAtTWF0aC5zcXJ0KCh0MSAtIHQyKSAvIHQyKSB8fCAwKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzdGFydEFuZ2xlID0gTWF0aC5hdGFuMihcbiAgICAgICAgICAgIChtaWRQb2ludC55IC0gY2VudGVyUG9pbnQueSkgLyByeSxcbiAgICAgICAgICAgIChtaWRQb2ludC54IC0gY2VudGVyUG9pbnQueCkgLyByeFxuICAgICAgICAgICk7XG4gICAgICAgICAgZW5kQW5nbGUgPSBNYXRoLmF0YW4yKFxuICAgICAgICAgICAgLShtaWRQb2ludC55ICsgY2VudGVyUG9pbnQueSkgLyByeSxcbiAgICAgICAgICAgIC0obWlkUG9pbnQueCArIGNlbnRlclBvaW50LngpIC8gcnhcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgcm90YXRlUG9pbnQoY2VudGVyUG9pbnQsIGFuZ2xlKTtcbiAgICAgICAgICB0cmFuc2xhdGVQb2ludChcbiAgICAgICAgICAgIGNlbnRlclBvaW50LFxuICAgICAgICAgICAgKGVuZFBvaW50LnggKyBjdXJyZW50UG9pbnQueCkgLyAyLFxuICAgICAgICAgICAgKGVuZFBvaW50LnkgKyBjdXJyZW50UG9pbnQueSkgLyAyXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIGNhbnZhcy5zYXZlKCk7XG4gICAgICAgICAgY2FudmFzLnRyYW5zbGF0ZShjZW50ZXJQb2ludC54LCBjZW50ZXJQb2ludC55KTtcbiAgICAgICAgICBjYW52YXMucm90YXRlKGFuZ2xlKTtcbiAgICAgICAgICBjYW52YXMuc2NhbGUocngsIHJ5KTtcbiAgICAgICAgICBjYW52YXMuYXJjKDAsIDAsIDEsIHN0YXJ0QW5nbGUsIGVuZEFuZ2xlLCAhc3dlZXBGbGFnKTtcbiAgICAgICAgICBjYW52YXMucmVzdG9yZSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdDJzpcbiAgICAgICAgICBjcHggPSBzWzNdOyAvLyBMYXN0IGNvbnRyb2wgcG9pbnRcbiAgICAgICAgICBjcHkgPSBzWzRdO1xuICAgICAgICAgIHggPSBzWzVdO1xuICAgICAgICAgIHkgPSBzWzZdO1xuICAgICAgICAgIGNhbnZhcy5iZXppZXJDdXJ2ZVRvKHNbMV0sIHNbMl0sIGNweCwgY3B5LCB4LCB5KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYyc6XG4gICAgICAgICAgY2FudmFzLmJlemllckN1cnZlVG8oXG4gICAgICAgICAgICBzWzFdICsgeCxcbiAgICAgICAgICAgIHNbMl0gKyB5LFxuICAgICAgICAgICAgc1szXSArIHgsXG4gICAgICAgICAgICBzWzRdICsgeSxcbiAgICAgICAgICAgIHNbNV0gKyB4LFxuICAgICAgICAgICAgc1s2XSArIHlcbiAgICAgICAgICApO1xuICAgICAgICAgIGNweCA9IHNbM10gKyB4OyAvLyBMYXN0IGNvbnRyb2wgcG9pbnRcbiAgICAgICAgICBjcHkgPSBzWzRdICsgeTtcbiAgICAgICAgICB4ICs9IHNbNV07XG4gICAgICAgICAgeSArPSBzWzZdO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdTJzpcbiAgICAgICAgICBpZiAoY3B4ID09PSBudWxsIHx8IGNweCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgY3B4ID0geDtcbiAgICAgICAgICAgIGNweSA9IHk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY2FudmFzLmJlemllckN1cnZlVG8oXG4gICAgICAgICAgICAyICogeCAtIGNweCxcbiAgICAgICAgICAgIDIgKiB5IC0gY3B5LFxuICAgICAgICAgICAgc1sxXSxcbiAgICAgICAgICAgIHNbMl0sXG4gICAgICAgICAgICBzWzNdLFxuICAgICAgICAgICAgc1s0XVxuICAgICAgICAgICk7XG4gICAgICAgICAgY3B4ID0gc1sxXTsgLy8gbGFzdCBjb250cm9sIHBvaW50XG4gICAgICAgICAgY3B5ID0gc1syXTtcbiAgICAgICAgICB4ID0gc1szXTtcbiAgICAgICAgICB5ID0gc1s0XTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncyc6XG4gICAgICAgICAgaWYgKGNweCA9PT0gbnVsbCB8fCBjcHggPT09IG51bGwpIHtcbiAgICAgICAgICAgIGNweCA9IHg7XG4gICAgICAgICAgICBjcHkgPSB5O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNhbnZhcy5iZXppZXJDdXJ2ZVRvKFxuICAgICAgICAgICAgMiAqIHggLSBjcHgsXG4gICAgICAgICAgICAyICogeSAtIGNweSxcbiAgICAgICAgICAgIHNbMV0gKyB4LFxuICAgICAgICAgICAgc1syXSArIHksXG4gICAgICAgICAgICBzWzNdICsgeCxcbiAgICAgICAgICAgIHNbNF0gKyB5XG4gICAgICAgICAgKTtcbiAgICAgICAgICBjcHggPSBzWzFdICsgeDsgLy8gbGFzdCBjb250cm9sIHBvaW50XG4gICAgICAgICAgY3B5ID0gc1syXSArIHk7XG4gICAgICAgICAgeCArPSBzWzNdO1xuICAgICAgICAgIHkgKz0gc1s0XTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnUSc6XG4gICAgICAgICAgcWNweCA9IHNbMV07IC8vIGxhc3QgY29udHJvbCBwb2ludFxuICAgICAgICAgIHFjcHkgPSBzWzJdO1xuICAgICAgICAgIHggPSBzWzNdO1xuICAgICAgICAgIHkgPSBzWzRdO1xuICAgICAgICAgIGNhbnZhcy5xdWFkcmF0aWNDdXJ2ZVRvKHFjcHgsIHFjcHksIHgsIHkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdxJzpcbiAgICAgICAgICBxY3B4ID0gc1sxXSArIHg7IC8vIGxhc3QgY29udHJvbCBwb2ludFxuICAgICAgICAgIHFjcHkgPSBzWzJdICsgeTtcbiAgICAgICAgICB4ICs9IHNbM107XG4gICAgICAgICAgeSArPSBzWzRdO1xuICAgICAgICAgIGNhbnZhcy5xdWFkcmF0aWNDdXJ2ZVRvKHFjcHgsIHFjcHksIHgsIHkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdUJzpcbiAgICAgICAgICBpZiAocWNweCA9PT0gbnVsbCB8fCBxY3B4ID09PSBudWxsKSB7XG4gICAgICAgICAgICBxY3B4ID0geDtcbiAgICAgICAgICAgIHFjcHkgPSB5O1xuICAgICAgICAgIH1cbiAgICAgICAgICBxY3B4ID0gMiAqIHggLSBxY3B4OyAvLyBsYXN0IGNvbnRyb2wgcG9pbnRcbiAgICAgICAgICBxY3B5ID0gMiAqIHkgLSBxY3B5O1xuICAgICAgICAgIHggPSBzWzFdO1xuICAgICAgICAgIHkgPSBzWzJdO1xuICAgICAgICAgIGNhbnZhcy5xdWFkcmF0aWNDdXJ2ZVRvKHFjcHgsIHFjcHksIHgsIHkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICd0JzpcbiAgICAgICAgICBpZiAocWNweCA9PT0gbnVsbCB8fCBxY3B4ID09PSBudWxsKSB7XG4gICAgICAgICAgICBxY3B4ID0geDtcbiAgICAgICAgICAgIHFjcHkgPSB5O1xuICAgICAgICAgIH1cbiAgICAgICAgICBxY3B4ID0gMiAqIHggLSBxY3B4OyAvLyBsYXN0IGNvbnRyb2wgcG9pbnRcbiAgICAgICAgICBxY3B5ID0gMiAqIHkgLSBxY3B5O1xuICAgICAgICAgIHggKz0gc1sxXTtcbiAgICAgICAgICB5ICs9IHNbMl07XG4gICAgICAgICAgY2FudmFzLnF1YWRyYXRpY0N1cnZlVG8ocWNweCwgcWNweSwgeCwgeSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3onOlxuICAgICAgICBjYXNlICdaJzpcbiAgICAgICAgICB4ID0gc3RhcnRQb2ludC54O1xuICAgICAgICAgIHkgPSBzdGFydFBvaW50Lnk7XG4gICAgICAgICAgc3RhcnRQb2ludCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBjYW52YXMuY2xvc2VQYXRoKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0FDJzogLy8gYXJjXG4gICAgICAgICAgeCA9IHNbMV07XG4gICAgICAgICAgeSA9IHNbMl07XG4gICAgICAgICAgciA9IHNbM107XG4gICAgICAgICAgc3RhcnRBbmdsZSA9IHNbNF07XG4gICAgICAgICAgZW5kQW5nbGUgPSBzWzVdO1xuICAgICAgICAgIGNjdyA9IHNbNl07XG4gICAgICAgICAgY2FudmFzLmFyYyh4LCB5LCByLCBzdGFydEFuZ2xlLCBlbmRBbmdsZSwgY2N3KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnQVQnOiAvLyBhcmNUb1xuICAgICAgICAgIHgxID0gc1sxXTtcbiAgICAgICAgICB5MSA9IHNbMl07XG4gICAgICAgICAgeCA9IHNbM107XG4gICAgICAgICAgeSA9IHNbNF07XG4gICAgICAgICAgciA9IHNbNV07XG4gICAgICAgICAgY2FudmFzLmFyY1RvKHgxLCB5MSwgeCwgeSwgcik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0UnOiAvLyBlbGxpcHNlXG4gICAgICAgICAgeCA9IHNbMV07XG4gICAgICAgICAgeSA9IHNbMl07XG4gICAgICAgICAgcnggPSBzWzNdO1xuICAgICAgICAgIHJ5ID0gc1s0XTtcbiAgICAgICAgICBhbmdsZSA9IHNbNV07XG4gICAgICAgICAgc3RhcnRBbmdsZSA9IHNbNl07XG4gICAgICAgICAgZW5kQW5nbGUgPSBzWzddO1xuICAgICAgICAgIGNjdyA9IHNbOF07XG4gICAgICAgICAgY2FudmFzLnNhdmUoKTtcbiAgICAgICAgICBjYW52YXMudHJhbnNsYXRlKHgsIHkpO1xuICAgICAgICAgIGNhbnZhcy5yb3RhdGUoYW5nbGUpO1xuICAgICAgICAgIGNhbnZhcy5zY2FsZShyeCwgcnkpO1xuICAgICAgICAgIGNhbnZhcy5hcmMoMCwgMCwgMSwgc3RhcnRBbmdsZSwgZW5kQW5nbGUsIGNjdyk7XG4gICAgICAgICAgY2FudmFzLnJlc3RvcmUoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnUic6IC8vIHJlY3RcbiAgICAgICAgICB4ID0gc1sxXTtcbiAgICAgICAgICB5ID0gc1syXTtcbiAgICAgICAgICB3ID0gc1szXTtcbiAgICAgICAgICBoID0gc1s0XTtcbiAgICAgICAgICBzdGFydFBvaW50ID0geyB4LCB5IH07XG4gICAgICAgICAgY2FudmFzLnJlY3QoeCwgeSwgdywgaCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgIC8vIHRocm93IG5ldyBFcnJvcihgJHtwYXRoVHlwZX0gaXMgbm90IGltcGxlbWVudGVkYCk7ID9cbiAgICAgIH1cblxuICAgICAgY3VycmVudFBvaW50LnggPSB4O1xuICAgICAgY3VycmVudFBvaW50LnkgPSB5O1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGNGaWxsID0gd2luZG93LkNhbnZhc1JlbmRlcmluZ0NvbnRleHQyRC5wcm90b3R5cGUuZmlsbDtcbiAgY29uc3QgY1N0cm9rZSA9IHdpbmRvdy5DYW52YXNSZW5kZXJpbmdDb250ZXh0MkQucHJvdG90eXBlLnN0cm9rZTtcblxuICB3aW5kb3cuQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELnByb3RvdHlwZS5maWxsID0gZnVuY3Rpb24gZmlsbCguLi5hcmdzKSB7XG4gICAgbGV0IGZpbGxSdWxlID0gJ25vbnplcm8nO1xuICAgIGlmIChcbiAgICAgIGFyZ3MubGVuZ3RoID09PSAwIHx8XG4gICAgICAoYXJncy5sZW5ndGggPT09IDEgJiYgdHlwZW9mIGFyZ3NbMF0gPT09ICdzdHJpbmcnKVxuICAgICkge1xuICAgICAgY0ZpbGwuYXBwbHkodGhpcywgYXJncyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyKSB7XG4gICAgICBmaWxsUnVsZSA9IGFyZ3NbMV07XG4gICAgfVxuICAgIGNvbnN0IHBhdGggPSBhcmdzWzBdO1xuICAgIGJ1aWxkUGF0aCh0aGlzLCBwYXRoLnNlZ21lbnRzKTtcbiAgICBjRmlsbC5jYWxsKHRoaXMsIGZpbGxSdWxlKTtcbiAgfTtcblxuICB3aW5kb3cuQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELnByb3RvdHlwZS5zdHJva2UgPSBmdW5jdGlvbiBzdHJva2UocGF0aCkge1xuICAgIGlmICghcGF0aCkge1xuICAgICAgY1N0cm9rZS5jYWxsKHRoaXMpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBidWlsZFBhdGgodGhpcywgcGF0aC5zZWdtZW50cyk7XG4gICAgY1N0cm9rZS5jYWxsKHRoaXMpO1xuICB9O1xuXG4gIGNvbnN0IGNJc1BvaW50SW5QYXRoID1cbiAgICB3aW5kb3cuQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELnByb3RvdHlwZS5pc1BvaW50SW5QYXRoO1xuXG4gIHdpbmRvdy5DYW52YXNSZW5kZXJpbmdDb250ZXh0MkQucHJvdG90eXBlLmlzUG9pbnRJblBhdGggPSBmdW5jdGlvbiBpc1BvaW50SW5QYXRoKFxuICAgIC4uLmFyZ3NcbiAgKSB7XG4gICAgLy8gbGV0IGZpbGxSdWxlID0gJ25vbnplcm8nO1xuICAgIGlmIChhcmdzWzBdLmNvbnN0cnVjdG9yLm5hbWUgPT09ICdQYXRoMkQnKSB7XG4gICAgICAvLyBmaXJzdCBhcmd1bWVudCBpcyBhIFBhdGgyRCBvYmplY3RcbiAgICAgIGNvbnN0IHggPSBhcmdzWzFdO1xuICAgICAgY29uc3QgeSA9IGFyZ3NbMl07XG4gICAgICBjb25zdCBmaWxsUnVsZSA9IGFyZ3NbM10gfHwgJ25vbnplcm8nO1xuICAgICAgY29uc3QgcGF0aCA9IGFyZ3NbMF07XG4gICAgICBidWlsZFBhdGgodGhpcywgcGF0aC5zZWdtZW50cyk7XG4gICAgICByZXR1cm4gY0lzUG9pbnRJblBhdGguYXBwbHkodGhpcywgW3gsIHksIGZpbGxSdWxlXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBjSXNQb2ludEluUGF0aC5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9XG4gIH07XG5cbiAgd2luZG93LlBhdGgyRCA9IFBhdGgyRDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBwb2x5RmlsbFBhdGgyRDtcbiIsImNvbnN0IHBhcnNlUGF0aCA9IHJlcXVpcmUoJy4vcGFyc2UtcGF0aCcpO1xuY29uc3QgcGF0aDJkUG9seWZpbGwgPSByZXF1aXJlKCcuL3BhdGgyZC1wb2x5ZmlsbCcpO1xuXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgcGF0aDJkUG9seWZpbGwod2luZG93KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHBhdGgyZFBvbHlmaWxsLFxuICBwYXJzZVBhdGgsXG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmlvID0gZXhwb3J0cy5Tb2NrZXQgPSBleHBvcnRzLk1hbmFnZXIgPSBleHBvcnRzLnByb3RvY29sID0gdm9pZCAwO1xuY29uc3QgdXJsXzEgPSByZXF1aXJlKFwiLi91cmxcIik7XG5jb25zdCBtYW5hZ2VyXzEgPSByZXF1aXJlKFwiLi9tYW5hZ2VyXCIpO1xuY29uc3QgZGVidWcgPSByZXF1aXJlKFwiZGVidWdcIikoXCJzb2NrZXQuaW8tY2xpZW50XCIpO1xuLyoqXG4gKiBNb2R1bGUgZXhwb3J0cy5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gbG9va3VwO1xuLyoqXG4gKiBNYW5hZ2VycyBjYWNoZS5cbiAqL1xuY29uc3QgY2FjaGUgPSAoZXhwb3J0cy5tYW5hZ2VycyA9IHt9KTtcbmZ1bmN0aW9uIGxvb2t1cCh1cmksIG9wdHMpIHtcbiAgICBpZiAodHlwZW9mIHVyaSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICBvcHRzID0gdXJpO1xuICAgICAgICB1cmkgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIG9wdHMgPSBvcHRzIHx8IHt9O1xuICAgIGNvbnN0IHBhcnNlZCA9IHVybF8xLnVybCh1cmksIG9wdHMucGF0aCB8fCBcIi9zb2NrZXQuaW9cIik7XG4gICAgY29uc3Qgc291cmNlID0gcGFyc2VkLnNvdXJjZTtcbiAgICBjb25zdCBpZCA9IHBhcnNlZC5pZDtcbiAgICBjb25zdCBwYXRoID0gcGFyc2VkLnBhdGg7XG4gICAgY29uc3Qgc2FtZU5hbWVzcGFjZSA9IGNhY2hlW2lkXSAmJiBwYXRoIGluIGNhY2hlW2lkXVtcIm5zcHNcIl07XG4gICAgY29uc3QgbmV3Q29ubmVjdGlvbiA9IG9wdHMuZm9yY2VOZXcgfHxcbiAgICAgICAgb3B0c1tcImZvcmNlIG5ldyBjb25uZWN0aW9uXCJdIHx8XG4gICAgICAgIGZhbHNlID09PSBvcHRzLm11bHRpcGxleCB8fFxuICAgICAgICBzYW1lTmFtZXNwYWNlO1xuICAgIGxldCBpbztcbiAgICBpZiAobmV3Q29ubmVjdGlvbikge1xuICAgICAgICBkZWJ1ZyhcImlnbm9yaW5nIHNvY2tldCBjYWNoZSBmb3IgJXNcIiwgc291cmNlKTtcbiAgICAgICAgaW8gPSBuZXcgbWFuYWdlcl8xLk1hbmFnZXIoc291cmNlLCBvcHRzKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmICghY2FjaGVbaWRdKSB7XG4gICAgICAgICAgICBkZWJ1ZyhcIm5ldyBpbyBpbnN0YW5jZSBmb3IgJXNcIiwgc291cmNlKTtcbiAgICAgICAgICAgIGNhY2hlW2lkXSA9IG5ldyBtYW5hZ2VyXzEuTWFuYWdlcihzb3VyY2UsIG9wdHMpO1xuICAgICAgICB9XG4gICAgICAgIGlvID0gY2FjaGVbaWRdO1xuICAgIH1cbiAgICBpZiAocGFyc2VkLnF1ZXJ5ICYmICFvcHRzLnF1ZXJ5KSB7XG4gICAgICAgIG9wdHMucXVlcnkgPSBwYXJzZWQucXVlcnlLZXk7XG4gICAgfVxuICAgIHJldHVybiBpby5zb2NrZXQocGFyc2VkLnBhdGgsIG9wdHMpO1xufVxuZXhwb3J0cy5pbyA9IGxvb2t1cDtcbi8qKlxuICogUHJvdG9jb2wgdmVyc2lvbi5cbiAqXG4gKiBAcHVibGljXG4gKi9cbnZhciBzb2NrZXRfaW9fcGFyc2VyXzEgPSByZXF1aXJlKFwic29ja2V0LmlvLXBhcnNlclwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInByb3RvY29sXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzb2NrZXRfaW9fcGFyc2VyXzEucHJvdG9jb2w7IH0gfSk7XG4vKipcbiAqIGBjb25uZWN0YC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJpXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydHMuY29ubmVjdCA9IGxvb2t1cDtcbi8qKlxuICogRXhwb3NlIGNvbnN0cnVjdG9ycyBmb3Igc3RhbmRhbG9uZSBidWlsZC5cbiAqXG4gKiBAcHVibGljXG4gKi9cbnZhciBtYW5hZ2VyXzIgPSByZXF1aXJlKFwiLi9tYW5hZ2VyXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiTWFuYWdlclwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbWFuYWdlcl8yLk1hbmFnZXI7IH0gfSk7XG52YXIgc29ja2V0XzEgPSByZXF1aXJlKFwiLi9zb2NrZXRcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJTb2NrZXRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNvY2tldF8xLlNvY2tldDsgfSB9KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGxvb2t1cDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5NYW5hZ2VyID0gdm9pZCAwO1xuY29uc3QgZWlvID0gcmVxdWlyZShcImVuZ2luZS5pby1jbGllbnRcIik7XG5jb25zdCBzb2NrZXRfMSA9IHJlcXVpcmUoXCIuL3NvY2tldFwiKTtcbmNvbnN0IHBhcnNlciA9IHJlcXVpcmUoXCJzb2NrZXQuaW8tcGFyc2VyXCIpO1xuY29uc3Qgb25fMSA9IHJlcXVpcmUoXCIuL29uXCIpO1xuY29uc3QgQmFja29mZiA9IHJlcXVpcmUoXCJiYWNrbzJcIik7XG5jb25zdCB0eXBlZF9ldmVudHNfMSA9IHJlcXVpcmUoXCIuL3R5cGVkLWV2ZW50c1wiKTtcbmNvbnN0IGRlYnVnID0gcmVxdWlyZShcImRlYnVnXCIpKFwic29ja2V0LmlvLWNsaWVudDptYW5hZ2VyXCIpO1xuY2xhc3MgTWFuYWdlciBleHRlbmRzIHR5cGVkX2V2ZW50c18xLlN0cmljdEV2ZW50RW1pdHRlciB7XG4gICAgY29uc3RydWN0b3IodXJpLCBvcHRzKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubnNwcyA9IHt9O1xuICAgICAgICB0aGlzLnN1YnMgPSBbXTtcbiAgICAgICAgaWYgKHVyaSAmJiBcIm9iamVjdFwiID09PSB0eXBlb2YgdXJpKSB7XG4gICAgICAgICAgICBvcHRzID0gdXJpO1xuICAgICAgICAgICAgdXJpID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIG9wdHMgPSBvcHRzIHx8IHt9O1xuICAgICAgICBvcHRzLnBhdGggPSBvcHRzLnBhdGggfHwgXCIvc29ja2V0LmlvXCI7XG4gICAgICAgIHRoaXMub3B0cyA9IG9wdHM7XG4gICAgICAgIHRoaXMucmVjb25uZWN0aW9uKG9wdHMucmVjb25uZWN0aW9uICE9PSBmYWxzZSk7XG4gICAgICAgIHRoaXMucmVjb25uZWN0aW9uQXR0ZW1wdHMob3B0cy5yZWNvbm5lY3Rpb25BdHRlbXB0cyB8fCBJbmZpbml0eSk7XG4gICAgICAgIHRoaXMucmVjb25uZWN0aW9uRGVsYXkob3B0cy5yZWNvbm5lY3Rpb25EZWxheSB8fCAxMDAwKTtcbiAgICAgICAgdGhpcy5yZWNvbm5lY3Rpb25EZWxheU1heChvcHRzLnJlY29ubmVjdGlvbkRlbGF5TWF4IHx8IDUwMDApO1xuICAgICAgICB0aGlzLnJhbmRvbWl6YXRpb25GYWN0b3Iob3B0cy5yYW5kb21pemF0aW9uRmFjdG9yIHx8IDAuNSk7XG4gICAgICAgIHRoaXMuYmFja29mZiA9IG5ldyBCYWNrb2ZmKHtcbiAgICAgICAgICAgIG1pbjogdGhpcy5yZWNvbm5lY3Rpb25EZWxheSgpLFxuICAgICAgICAgICAgbWF4OiB0aGlzLnJlY29ubmVjdGlvbkRlbGF5TWF4KCksXG4gICAgICAgICAgICBqaXR0ZXI6IHRoaXMucmFuZG9taXphdGlvbkZhY3RvcigpLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy50aW1lb3V0KG51bGwgPT0gb3B0cy50aW1lb3V0ID8gMjAwMDAgOiBvcHRzLnRpbWVvdXQpO1xuICAgICAgICB0aGlzLl9yZWFkeVN0YXRlID0gXCJjbG9zZWRcIjtcbiAgICAgICAgdGhpcy51cmkgPSB1cmk7XG4gICAgICAgIGNvbnN0IF9wYXJzZXIgPSBvcHRzLnBhcnNlciB8fCBwYXJzZXI7XG4gICAgICAgIHRoaXMuZW5jb2RlciA9IG5ldyBfcGFyc2VyLkVuY29kZXIoKTtcbiAgICAgICAgdGhpcy5kZWNvZGVyID0gbmV3IF9wYXJzZXIuRGVjb2RlcigpO1xuICAgICAgICB0aGlzLl9hdXRvQ29ubmVjdCA9IG9wdHMuYXV0b0Nvbm5lY3QgIT09IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5fYXV0b0Nvbm5lY3QpXG4gICAgICAgICAgICB0aGlzLm9wZW4oKTtcbiAgICB9XG4gICAgcmVjb25uZWN0aW9uKHYpIHtcbiAgICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JlY29ubmVjdGlvbjtcbiAgICAgICAgdGhpcy5fcmVjb25uZWN0aW9uID0gISF2O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgcmVjb25uZWN0aW9uQXR0ZW1wdHModikge1xuICAgICAgICBpZiAodiA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JlY29ubmVjdGlvbkF0dGVtcHRzO1xuICAgICAgICB0aGlzLl9yZWNvbm5lY3Rpb25BdHRlbXB0cyA9IHY7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICByZWNvbm5lY3Rpb25EZWxheSh2KSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgaWYgKHYgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZWNvbm5lY3Rpb25EZWxheTtcbiAgICAgICAgdGhpcy5fcmVjb25uZWN0aW9uRGVsYXkgPSB2O1xuICAgICAgICAoX2EgPSB0aGlzLmJhY2tvZmYpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5zZXRNaW4odik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICByYW5kb21pemF0aW9uRmFjdG9yKHYpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBpZiAodiA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JhbmRvbWl6YXRpb25GYWN0b3I7XG4gICAgICAgIHRoaXMuX3JhbmRvbWl6YXRpb25GYWN0b3IgPSB2O1xuICAgICAgICAoX2EgPSB0aGlzLmJhY2tvZmYpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5zZXRKaXR0ZXIodik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICByZWNvbm5lY3Rpb25EZWxheU1heCh2KSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgaWYgKHYgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZWNvbm5lY3Rpb25EZWxheU1heDtcbiAgICAgICAgdGhpcy5fcmVjb25uZWN0aW9uRGVsYXlNYXggPSB2O1xuICAgICAgICAoX2EgPSB0aGlzLmJhY2tvZmYpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5zZXRNYXgodik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICB0aW1lb3V0KHYpIHtcbiAgICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RpbWVvdXQ7XG4gICAgICAgIHRoaXMuX3RpbWVvdXQgPSB2O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogU3RhcnRzIHRyeWluZyB0byByZWNvbm5lY3QgaWYgcmVjb25uZWN0aW9uIGlzIGVuYWJsZWQgYW5kIHdlIGhhdmUgbm90XG4gICAgICogc3RhcnRlZCByZWNvbm5lY3RpbmcgeWV0XG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIG1heWJlUmVjb25uZWN0T25PcGVuKCkge1xuICAgICAgICAvLyBPbmx5IHRyeSB0byByZWNvbm5lY3QgaWYgaXQncyB0aGUgZmlyc3QgdGltZSB3ZSdyZSBjb25uZWN0aW5nXG4gICAgICAgIGlmICghdGhpcy5fcmVjb25uZWN0aW5nICYmXG4gICAgICAgICAgICB0aGlzLl9yZWNvbm5lY3Rpb24gJiZcbiAgICAgICAgICAgIHRoaXMuYmFja29mZi5hdHRlbXB0cyA9PT0gMCkge1xuICAgICAgICAgICAgLy8ga2VlcHMgcmVjb25uZWN0aW9uIGZyb20gZmlyaW5nIHR3aWNlIGZvciB0aGUgc2FtZSByZWNvbm5lY3Rpb24gbG9vcFxuICAgICAgICAgICAgdGhpcy5yZWNvbm5lY3QoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBjdXJyZW50IHRyYW5zcG9ydCBgc29ja2V0YC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIC0gb3B0aW9uYWwsIGNhbGxiYWNrXG4gICAgICogQHJldHVybiBzZWxmXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIG9wZW4oZm4pIHtcbiAgICAgICAgZGVidWcoXCJyZWFkeVN0YXRlICVzXCIsIHRoaXMuX3JlYWR5U3RhdGUpO1xuICAgICAgICBpZiAofnRoaXMuX3JlYWR5U3RhdGUuaW5kZXhPZihcIm9wZW5cIikpXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgZGVidWcoXCJvcGVuaW5nICVzXCIsIHRoaXMudXJpKTtcbiAgICAgICAgdGhpcy5lbmdpbmUgPSBlaW8odGhpcy51cmksIHRoaXMub3B0cyk7XG4gICAgICAgIGNvbnN0IHNvY2tldCA9IHRoaXMuZW5naW5lO1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5fcmVhZHlTdGF0ZSA9IFwib3BlbmluZ1wiO1xuICAgICAgICB0aGlzLnNraXBSZWNvbm5lY3QgPSBmYWxzZTtcbiAgICAgICAgLy8gZW1pdCBgb3BlbmBcbiAgICAgICAgY29uc3Qgb3BlblN1YkRlc3Ryb3kgPSBvbl8xLm9uKHNvY2tldCwgXCJvcGVuXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNlbGYub25vcGVuKCk7XG4gICAgICAgICAgICBmbiAmJiBmbigpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gZW1pdCBgZXJyb3JgXG4gICAgICAgIGNvbnN0IGVycm9yU3ViID0gb25fMS5vbihzb2NrZXQsIFwiZXJyb3JcIiwgKGVycikgPT4ge1xuICAgICAgICAgICAgZGVidWcoXCJlcnJvclwiKTtcbiAgICAgICAgICAgIHNlbGYuY2xlYW51cCgpO1xuICAgICAgICAgICAgc2VsZi5fcmVhZHlTdGF0ZSA9IFwiY2xvc2VkXCI7XG4gICAgICAgICAgICB0aGlzLmVtaXRSZXNlcnZlZChcImVycm9yXCIsIGVycik7XG4gICAgICAgICAgICBpZiAoZm4pIHtcbiAgICAgICAgICAgICAgICBmbihlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gT25seSBkbyB0aGlzIGlmIHRoZXJlIGlzIG5vIGZuIHRvIGhhbmRsZSB0aGUgZXJyb3JcbiAgICAgICAgICAgICAgICBzZWxmLm1heWJlUmVjb25uZWN0T25PcGVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoZmFsc2UgIT09IHRoaXMuX3RpbWVvdXQpIHtcbiAgICAgICAgICAgIGNvbnN0IHRpbWVvdXQgPSB0aGlzLl90aW1lb3V0O1xuICAgICAgICAgICAgZGVidWcoXCJjb25uZWN0IGF0dGVtcHQgd2lsbCB0aW1lb3V0IGFmdGVyICVkXCIsIHRpbWVvdXQpO1xuICAgICAgICAgICAgaWYgKHRpbWVvdXQgPT09IDApIHtcbiAgICAgICAgICAgICAgICBvcGVuU3ViRGVzdHJveSgpOyAvLyBwcmV2ZW50cyBhIHJhY2UgY29uZGl0aW9uIHdpdGggdGhlICdvcGVuJyBldmVudFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gc2V0IHRpbWVyXG4gICAgICAgICAgICBjb25zdCB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGRlYnVnKFwiY29ubmVjdCBhdHRlbXB0IHRpbWVkIG91dCBhZnRlciAlZFwiLCB0aW1lb3V0KTtcbiAgICAgICAgICAgICAgICBvcGVuU3ViRGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIHNvY2tldC5jbG9zZSgpO1xuICAgICAgICAgICAgICAgIHNvY2tldC5lbWl0KFwiZXJyb3JcIiwgbmV3IEVycm9yKFwidGltZW91dFwiKSk7XG4gICAgICAgICAgICB9LCB0aW1lb3V0KTtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdHMuYXV0b1VucmVmKSB7XG4gICAgICAgICAgICAgICAgdGltZXIudW5yZWYoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc3Vicy5wdXNoKGZ1bmN0aW9uIHN1YkRlc3Ryb3koKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3Vicy5wdXNoKG9wZW5TdWJEZXN0cm95KTtcbiAgICAgICAgdGhpcy5zdWJzLnB1c2goZXJyb3JTdWIpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWxpYXMgZm9yIG9wZW4oKVxuICAgICAqXG4gICAgICogQHJldHVybiBzZWxmXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIGNvbm5lY3QoZm4pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3Blbihmbik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxlZCB1cG9uIHRyYW5zcG9ydCBvcGVuLlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBvbm9wZW4oKSB7XG4gICAgICAgIGRlYnVnKFwib3BlblwiKTtcbiAgICAgICAgLy8gY2xlYXIgb2xkIHN1YnNcbiAgICAgICAgdGhpcy5jbGVhbnVwKCk7XG4gICAgICAgIC8vIG1hcmsgYXMgb3BlblxuICAgICAgICB0aGlzLl9yZWFkeVN0YXRlID0gXCJvcGVuXCI7XG4gICAgICAgIHRoaXMuZW1pdFJlc2VydmVkKFwib3BlblwiKTtcbiAgICAgICAgLy8gYWRkIG5ldyBzdWJzXG4gICAgICAgIGNvbnN0IHNvY2tldCA9IHRoaXMuZW5naW5lO1xuICAgICAgICB0aGlzLnN1YnMucHVzaChvbl8xLm9uKHNvY2tldCwgXCJwaW5nXCIsIHRoaXMub25waW5nLmJpbmQodGhpcykpLCBvbl8xLm9uKHNvY2tldCwgXCJkYXRhXCIsIHRoaXMub25kYXRhLmJpbmQodGhpcykpLCBvbl8xLm9uKHNvY2tldCwgXCJlcnJvclwiLCB0aGlzLm9uZXJyb3IuYmluZCh0aGlzKSksIG9uXzEub24oc29ja2V0LCBcImNsb3NlXCIsIHRoaXMub25jbG9zZS5iaW5kKHRoaXMpKSwgb25fMS5vbih0aGlzLmRlY29kZXIsIFwiZGVjb2RlZFwiLCB0aGlzLm9uZGVjb2RlZC5iaW5kKHRoaXMpKSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxlZCB1cG9uIGEgcGluZy5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgb25waW5nKCkge1xuICAgICAgICB0aGlzLmVtaXRSZXNlcnZlZChcInBpbmdcIik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxlZCB3aXRoIGRhdGEuXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIG9uZGF0YShkYXRhKSB7XG4gICAgICAgIHRoaXMuZGVjb2Rlci5hZGQoZGF0YSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxlZCB3aGVuIHBhcnNlciBmdWxseSBkZWNvZGVzIGEgcGFja2V0LlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBvbmRlY29kZWQocGFja2V0KSB7XG4gICAgICAgIHRoaXMuZW1pdFJlc2VydmVkKFwicGFja2V0XCIsIHBhY2tldCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxlZCB1cG9uIHNvY2tldCBlcnJvci5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgb25lcnJvcihlcnIpIHtcbiAgICAgICAgZGVidWcoXCJlcnJvclwiLCBlcnIpO1xuICAgICAgICB0aGlzLmVtaXRSZXNlcnZlZChcImVycm9yXCIsIGVycik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgc29ja2V0IGZvciB0aGUgZ2l2ZW4gYG5zcGAuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtTb2NrZXR9XG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIHNvY2tldChuc3AsIG9wdHMpIHtcbiAgICAgICAgbGV0IHNvY2tldCA9IHRoaXMubnNwc1tuc3BdO1xuICAgICAgICBpZiAoIXNvY2tldCkge1xuICAgICAgICAgICAgc29ja2V0ID0gbmV3IHNvY2tldF8xLlNvY2tldCh0aGlzLCBuc3AsIG9wdHMpO1xuICAgICAgICAgICAgdGhpcy5uc3BzW25zcF0gPSBzb2NrZXQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNvY2tldDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHVwb24gYSBzb2NrZXQgY2xvc2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc29ja2V0XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfZGVzdHJveShzb2NrZXQpIHtcbiAgICAgICAgY29uc3QgbnNwcyA9IE9iamVjdC5rZXlzKHRoaXMubnNwcyk7XG4gICAgICAgIGZvciAoY29uc3QgbnNwIG9mIG5zcHMpIHtcbiAgICAgICAgICAgIGNvbnN0IHNvY2tldCA9IHRoaXMubnNwc1tuc3BdO1xuICAgICAgICAgICAgaWYgKHNvY2tldC5hY3RpdmUpIHtcbiAgICAgICAgICAgICAgICBkZWJ1ZyhcInNvY2tldCAlcyBpcyBzdGlsbCBhY3RpdmUsIHNraXBwaW5nIGNsb3NlXCIsIG5zcCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2Nsb3NlKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFdyaXRlcyBhIHBhY2tldC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBwYWNrZXRcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9wYWNrZXQocGFja2V0KSB7XG4gICAgICAgIGRlYnVnKFwid3JpdGluZyBwYWNrZXQgJWpcIiwgcGFja2V0KTtcbiAgICAgICAgY29uc3QgZW5jb2RlZFBhY2tldHMgPSB0aGlzLmVuY29kZXIuZW5jb2RlKHBhY2tldCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZW5jb2RlZFBhY2tldHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLndyaXRlKGVuY29kZWRQYWNrZXRzW2ldLCBwYWNrZXQub3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2xlYW4gdXAgdHJhbnNwb3J0IHN1YnNjcmlwdGlvbnMgYW5kIHBhY2tldCBidWZmZXIuXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGNsZWFudXAoKSB7XG4gICAgICAgIGRlYnVnKFwiY2xlYW51cFwiKTtcbiAgICAgICAgdGhpcy5zdWJzLmZvckVhY2goKHN1YkRlc3Ryb3kpID0+IHN1YkRlc3Ryb3koKSk7XG4gICAgICAgIHRoaXMuc3Vicy5sZW5ndGggPSAwO1xuICAgICAgICB0aGlzLmRlY29kZXIuZGVzdHJveSgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDbG9zZSB0aGUgY3VycmVudCBzb2NrZXQuXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9jbG9zZSgpIHtcbiAgICAgICAgZGVidWcoXCJkaXNjb25uZWN0XCIpO1xuICAgICAgICB0aGlzLnNraXBSZWNvbm5lY3QgPSB0cnVlO1xuICAgICAgICB0aGlzLl9yZWNvbm5lY3RpbmcgPSBmYWxzZTtcbiAgICAgICAgaWYgKFwib3BlbmluZ1wiID09PSB0aGlzLl9yZWFkeVN0YXRlKSB7XG4gICAgICAgICAgICAvLyBgb25jbG9zZWAgd2lsbCBub3QgZmlyZSBiZWNhdXNlXG4gICAgICAgICAgICAvLyBhbiBvcGVuIGV2ZW50IG5ldmVyIGhhcHBlbmVkXG4gICAgICAgICAgICB0aGlzLmNsZWFudXAoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJhY2tvZmYucmVzZXQoKTtcbiAgICAgICAgdGhpcy5fcmVhZHlTdGF0ZSA9IFwiY2xvc2VkXCI7XG4gICAgICAgIGlmICh0aGlzLmVuZ2luZSlcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLmNsb3NlKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFsaWFzIGZvciBjbG9zZSgpXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGRpc2Nvbm5lY3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jbG9zZSgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgdXBvbiBlbmdpbmUgY2xvc2UuXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIG9uY2xvc2UocmVhc29uKSB7XG4gICAgICAgIGRlYnVnKFwib25jbG9zZVwiKTtcbiAgICAgICAgdGhpcy5jbGVhbnVwKCk7XG4gICAgICAgIHRoaXMuYmFja29mZi5yZXNldCgpO1xuICAgICAgICB0aGlzLl9yZWFkeVN0YXRlID0gXCJjbG9zZWRcIjtcbiAgICAgICAgdGhpcy5lbWl0UmVzZXJ2ZWQoXCJjbG9zZVwiLCByZWFzb24pO1xuICAgICAgICBpZiAodGhpcy5fcmVjb25uZWN0aW9uICYmICF0aGlzLnNraXBSZWNvbm5lY3QpIHtcbiAgICAgICAgICAgIHRoaXMucmVjb25uZWN0KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQXR0ZW1wdCBhIHJlY29ubmVjdGlvbi5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgcmVjb25uZWN0KCkge1xuICAgICAgICBpZiAodGhpcy5fcmVjb25uZWN0aW5nIHx8IHRoaXMuc2tpcFJlY29ubmVjdClcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMuYmFja29mZi5hdHRlbXB0cyA+PSB0aGlzLl9yZWNvbm5lY3Rpb25BdHRlbXB0cykge1xuICAgICAgICAgICAgZGVidWcoXCJyZWNvbm5lY3QgZmFpbGVkXCIpO1xuICAgICAgICAgICAgdGhpcy5iYWNrb2ZmLnJlc2V0KCk7XG4gICAgICAgICAgICB0aGlzLmVtaXRSZXNlcnZlZChcInJlY29ubmVjdF9mYWlsZWRcIik7XG4gICAgICAgICAgICB0aGlzLl9yZWNvbm5lY3RpbmcgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGRlbGF5ID0gdGhpcy5iYWNrb2ZmLmR1cmF0aW9uKCk7XG4gICAgICAgICAgICBkZWJ1ZyhcIndpbGwgd2FpdCAlZG1zIGJlZm9yZSByZWNvbm5lY3QgYXR0ZW1wdFwiLCBkZWxheSk7XG4gICAgICAgICAgICB0aGlzLl9yZWNvbm5lY3RpbmcgPSB0cnVlO1xuICAgICAgICAgICAgY29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5za2lwUmVjb25uZWN0KVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgZGVidWcoXCJhdHRlbXB0aW5nIHJlY29ubmVjdFwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXRSZXNlcnZlZChcInJlY29ubmVjdF9hdHRlbXB0XCIsIHNlbGYuYmFja29mZi5hdHRlbXB0cyk7XG4gICAgICAgICAgICAgICAgLy8gY2hlY2sgYWdhaW4gZm9yIHRoZSBjYXNlIHNvY2tldCBjbG9zZWQgaW4gYWJvdmUgZXZlbnRzXG4gICAgICAgICAgICAgICAgaWYgKHNlbGYuc2tpcFJlY29ubmVjdClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIHNlbGYub3BlbigoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlYnVnKFwicmVjb25uZWN0IGF0dGVtcHQgZXJyb3JcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLl9yZWNvbm5lY3RpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucmVjb25uZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXRSZXNlcnZlZChcInJlY29ubmVjdF9lcnJvclwiLCBlcnIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVidWcoXCJyZWNvbm5lY3Qgc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYub25yZWNvbm5lY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSwgZGVsYXkpO1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0cy5hdXRvVW5yZWYpIHtcbiAgICAgICAgICAgICAgICB0aW1lci51bnJlZigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zdWJzLnB1c2goZnVuY3Rpb24gc3ViRGVzdHJveSgpIHtcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHVwb24gc3VjY2Vzc2Z1bCByZWNvbm5lY3QuXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIG9ucmVjb25uZWN0KCkge1xuICAgICAgICBjb25zdCBhdHRlbXB0ID0gdGhpcy5iYWNrb2ZmLmF0dGVtcHRzO1xuICAgICAgICB0aGlzLl9yZWNvbm5lY3RpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5iYWNrb2ZmLnJlc2V0KCk7XG4gICAgICAgIHRoaXMuZW1pdFJlc2VydmVkKFwicmVjb25uZWN0XCIsIGF0dGVtcHQpO1xuICAgIH1cbn1cbmV4cG9ydHMuTWFuYWdlciA9IE1hbmFnZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMub24gPSB2b2lkIDA7XG5mdW5jdGlvbiBvbihvYmosIGV2LCBmbikge1xuICAgIG9iai5vbihldiwgZm4pO1xuICAgIHJldHVybiBmdW5jdGlvbiBzdWJEZXN0cm95KCkge1xuICAgICAgICBvYmoub2ZmKGV2LCBmbik7XG4gICAgfTtcbn1cbmV4cG9ydHMub24gPSBvbjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Tb2NrZXQgPSB2b2lkIDA7XG5jb25zdCBzb2NrZXRfaW9fcGFyc2VyXzEgPSByZXF1aXJlKFwic29ja2V0LmlvLXBhcnNlclwiKTtcbmNvbnN0IG9uXzEgPSByZXF1aXJlKFwiLi9vblwiKTtcbmNvbnN0IHR5cGVkX2V2ZW50c18xID0gcmVxdWlyZShcIi4vdHlwZWQtZXZlbnRzXCIpO1xuY29uc3QgZGVidWcgPSByZXF1aXJlKFwiZGVidWdcIikoXCJzb2NrZXQuaW8tY2xpZW50OnNvY2tldFwiKTtcbi8qKlxuICogSW50ZXJuYWwgZXZlbnRzLlxuICogVGhlc2UgZXZlbnRzIGNhbid0IGJlIGVtaXR0ZWQgYnkgdGhlIHVzZXIuXG4gKi9cbmNvbnN0IFJFU0VSVkVEX0VWRU5UUyA9IE9iamVjdC5mcmVlemUoe1xuICAgIGNvbm5lY3Q6IDEsXG4gICAgY29ubmVjdF9lcnJvcjogMSxcbiAgICBkaXNjb25uZWN0OiAxLFxuICAgIGRpc2Nvbm5lY3Rpbmc6IDEsXG4gICAgLy8gRXZlbnRFbWl0dGVyIHJlc2VydmVkIGV2ZW50czogaHR0cHM6Ly9ub2RlanMub3JnL2FwaS9ldmVudHMuaHRtbCNldmVudHNfZXZlbnRfbmV3bGlzdGVuZXJcbiAgICBuZXdMaXN0ZW5lcjogMSxcbiAgICByZW1vdmVMaXN0ZW5lcjogMSxcbn0pO1xuY2xhc3MgU29ja2V0IGV4dGVuZHMgdHlwZWRfZXZlbnRzXzEuU3RyaWN0RXZlbnRFbWl0dGVyIHtcbiAgICAvKipcbiAgICAgKiBgU29ja2V0YCBjb25zdHJ1Y3Rvci5cbiAgICAgKlxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihpbywgbnNwLCBvcHRzKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMucmVjZWl2ZUJ1ZmZlciA9IFtdO1xuICAgICAgICB0aGlzLnNlbmRCdWZmZXIgPSBbXTtcbiAgICAgICAgdGhpcy5pZHMgPSAwO1xuICAgICAgICB0aGlzLmFja3MgPSB7fTtcbiAgICAgICAgdGhpcy5mbGFncyA9IHt9O1xuICAgICAgICB0aGlzLmlvID0gaW87XG4gICAgICAgIHRoaXMubnNwID0gbnNwO1xuICAgICAgICB0aGlzLmlkcyA9IDA7XG4gICAgICAgIHRoaXMuYWNrcyA9IHt9O1xuICAgICAgICB0aGlzLnJlY2VpdmVCdWZmZXIgPSBbXTtcbiAgICAgICAgdGhpcy5zZW5kQnVmZmVyID0gW107XG4gICAgICAgIHRoaXMuY29ubmVjdGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZGlzY29ubmVjdGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5mbGFncyA9IHt9O1xuICAgICAgICBpZiAob3B0cyAmJiBvcHRzLmF1dGgpIHtcbiAgICAgICAgICAgIHRoaXMuYXV0aCA9IG9wdHMuYXV0aDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pby5fYXV0b0Nvbm5lY3QpXG4gICAgICAgICAgICB0aGlzLm9wZW4oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU3Vic2NyaWJlIHRvIG9wZW4sIGNsb3NlIGFuZCBwYWNrZXQgZXZlbnRzXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHN1YkV2ZW50cygpIHtcbiAgICAgICAgaWYgKHRoaXMuc3VicylcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgY29uc3QgaW8gPSB0aGlzLmlvO1xuICAgICAgICB0aGlzLnN1YnMgPSBbXG4gICAgICAgICAgICBvbl8xLm9uKGlvLCBcIm9wZW5cIiwgdGhpcy5vbm9wZW4uYmluZCh0aGlzKSksXG4gICAgICAgICAgICBvbl8xLm9uKGlvLCBcInBhY2tldFwiLCB0aGlzLm9ucGFja2V0LmJpbmQodGhpcykpLFxuICAgICAgICAgICAgb25fMS5vbihpbywgXCJlcnJvclwiLCB0aGlzLm9uZXJyb3IuYmluZCh0aGlzKSksXG4gICAgICAgICAgICBvbl8xLm9uKGlvLCBcImNsb3NlXCIsIHRoaXMub25jbG9zZS5iaW5kKHRoaXMpKSxcbiAgICAgICAgXTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogV2hldGhlciB0aGUgU29ja2V0IHdpbGwgdHJ5IHRvIHJlY29ubmVjdCB3aGVuIGl0cyBNYW5hZ2VyIGNvbm5lY3RzIG9yIHJlY29ubmVjdHNcbiAgICAgKi9cbiAgICBnZXQgYWN0aXZlKCkge1xuICAgICAgICByZXR1cm4gISF0aGlzLnN1YnM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFwiT3BlbnNcIiB0aGUgc29ja2V0LlxuICAgICAqXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbm5lY3RlZClcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB0aGlzLnN1YkV2ZW50cygpO1xuICAgICAgICBpZiAoIXRoaXMuaW9bXCJfcmVjb25uZWN0aW5nXCJdKVxuICAgICAgICAgICAgdGhpcy5pby5vcGVuKCk7IC8vIGVuc3VyZSBvcGVuXG4gICAgICAgIGlmIChcIm9wZW5cIiA9PT0gdGhpcy5pby5fcmVhZHlTdGF0ZSlcbiAgICAgICAgICAgIHRoaXMub25vcGVuKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBbGlhcyBmb3IgY29ubmVjdCgpXG4gICAgICovXG4gICAgb3BlbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29ubmVjdCgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZW5kcyBhIGBtZXNzYWdlYCBldmVudC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4gc2VsZlxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBzZW5kKC4uLmFyZ3MpIHtcbiAgICAgICAgYXJncy51bnNoaWZ0KFwibWVzc2FnZVwiKTtcbiAgICAgICAgdGhpcy5lbWl0LmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogT3ZlcnJpZGUgYGVtaXRgLlxuICAgICAqIElmIHRoZSBldmVudCBpcyBpbiBgZXZlbnRzYCwgaXQncyBlbWl0dGVkIG5vcm1hbGx5LlxuICAgICAqXG4gICAgICogQHJldHVybiBzZWxmXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIGVtaXQoZXYsIC4uLmFyZ3MpIHtcbiAgICAgICAgaWYgKFJFU0VSVkVEX0VWRU5UUy5oYXNPd25Qcm9wZXJ0eShldikpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignXCInICsgZXYgKyAnXCIgaXMgYSByZXNlcnZlZCBldmVudCBuYW1lJyk7XG4gICAgICAgIH1cbiAgICAgICAgYXJncy51bnNoaWZ0KGV2KTtcbiAgICAgICAgY29uc3QgcGFja2V0ID0ge1xuICAgICAgICAgICAgdHlwZTogc29ja2V0X2lvX3BhcnNlcl8xLlBhY2tldFR5cGUuRVZFTlQsXG4gICAgICAgICAgICBkYXRhOiBhcmdzLFxuICAgICAgICB9O1xuICAgICAgICBwYWNrZXQub3B0aW9ucyA9IHt9O1xuICAgICAgICBwYWNrZXQub3B0aW9ucy5jb21wcmVzcyA9IHRoaXMuZmxhZ3MuY29tcHJlc3MgIT09IGZhbHNlO1xuICAgICAgICAvLyBldmVudCBhY2sgY2FsbGJhY2tcbiAgICAgICAgaWYgKFwiZnVuY3Rpb25cIiA9PT0gdHlwZW9mIGFyZ3NbYXJncy5sZW5ndGggLSAxXSkge1xuICAgICAgICAgICAgZGVidWcoXCJlbWl0dGluZyBwYWNrZXQgd2l0aCBhY2sgaWQgJWRcIiwgdGhpcy5pZHMpO1xuICAgICAgICAgICAgdGhpcy5hY2tzW3RoaXMuaWRzXSA9IGFyZ3MucG9wKCk7XG4gICAgICAgICAgICBwYWNrZXQuaWQgPSB0aGlzLmlkcysrO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGlzVHJhbnNwb3J0V3JpdGFibGUgPSB0aGlzLmlvLmVuZ2luZSAmJlxuICAgICAgICAgICAgdGhpcy5pby5lbmdpbmUudHJhbnNwb3J0ICYmXG4gICAgICAgICAgICB0aGlzLmlvLmVuZ2luZS50cmFuc3BvcnQud3JpdGFibGU7XG4gICAgICAgIGNvbnN0IGRpc2NhcmRQYWNrZXQgPSB0aGlzLmZsYWdzLnZvbGF0aWxlICYmICghaXNUcmFuc3BvcnRXcml0YWJsZSB8fCAhdGhpcy5jb25uZWN0ZWQpO1xuICAgICAgICBpZiAoZGlzY2FyZFBhY2tldCkge1xuICAgICAgICAgICAgZGVidWcoXCJkaXNjYXJkIHBhY2tldCBhcyB0aGUgdHJhbnNwb3J0IGlzIG5vdCBjdXJyZW50bHkgd3JpdGFibGVcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5jb25uZWN0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMucGFja2V0KHBhY2tldCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNlbmRCdWZmZXIucHVzaChwYWNrZXQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZmxhZ3MgPSB7fTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNlbmRzIGEgcGFja2V0LlxuICAgICAqXG4gICAgICogQHBhcmFtIHBhY2tldFxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgcGFja2V0KHBhY2tldCkge1xuICAgICAgICBwYWNrZXQubnNwID0gdGhpcy5uc3A7XG4gICAgICAgIHRoaXMuaW8uX3BhY2tldChwYWNrZXQpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgdXBvbiBlbmdpbmUgYG9wZW5gLlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBvbm9wZW4oKSB7XG4gICAgICAgIGRlYnVnKFwidHJhbnNwb3J0IGlzIG9wZW4gLSBjb25uZWN0aW5nXCIpO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuYXV0aCA9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHRoaXMuYXV0aCgoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucGFja2V0KHsgdHlwZTogc29ja2V0X2lvX3BhcnNlcl8xLlBhY2tldFR5cGUuQ09OTkVDVCwgZGF0YSB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wYWNrZXQoeyB0eXBlOiBzb2NrZXRfaW9fcGFyc2VyXzEuUGFja2V0VHlwZS5DT05ORUNULCBkYXRhOiB0aGlzLmF1dGggfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHVwb24gZW5naW5lIG9yIG1hbmFnZXIgYGVycm9yYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBlcnJcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIG9uZXJyb3IoZXJyKSB7XG4gICAgICAgIGlmICghdGhpcy5jb25uZWN0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZW1pdFJlc2VydmVkKFwiY29ubmVjdF9lcnJvclwiLCBlcnIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxlZCB1cG9uIGVuZ2luZSBgY2xvc2VgLlxuICAgICAqXG4gICAgICogQHBhcmFtIHJlYXNvblxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgb25jbG9zZShyZWFzb24pIHtcbiAgICAgICAgZGVidWcoXCJjbG9zZSAoJXMpXCIsIHJlYXNvbik7XG4gICAgICAgIHRoaXMuY29ubmVjdGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZGlzY29ubmVjdGVkID0gdHJ1ZTtcbiAgICAgICAgZGVsZXRlIHRoaXMuaWQ7XG4gICAgICAgIHRoaXMuZW1pdFJlc2VydmVkKFwiZGlzY29ubmVjdFwiLCByZWFzb24pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgd2l0aCBzb2NrZXQgcGFja2V0LlxuICAgICAqXG4gICAgICogQHBhcmFtIHBhY2tldFxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgb25wYWNrZXQocGFja2V0KSB7XG4gICAgICAgIGNvbnN0IHNhbWVOYW1lc3BhY2UgPSBwYWNrZXQubnNwID09PSB0aGlzLm5zcDtcbiAgICAgICAgaWYgKCFzYW1lTmFtZXNwYWNlKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBzd2l0Y2ggKHBhY2tldC50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIHNvY2tldF9pb19wYXJzZXJfMS5QYWNrZXRUeXBlLkNPTk5FQ1Q6XG4gICAgICAgICAgICAgICAgaWYgKHBhY2tldC5kYXRhICYmIHBhY2tldC5kYXRhLnNpZCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpZCA9IHBhY2tldC5kYXRhLnNpZDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbmNvbm5lY3QoaWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0UmVzZXJ2ZWQoXCJjb25uZWN0X2Vycm9yXCIsIG5ldyBFcnJvcihcIkl0IHNlZW1zIHlvdSBhcmUgdHJ5aW5nIHRvIHJlYWNoIGEgU29ja2V0LklPIHNlcnZlciBpbiB2Mi54IHdpdGggYSB2My54IGNsaWVudCwgYnV0IHRoZXkgYXJlIG5vdCBjb21wYXRpYmxlIChtb3JlIGluZm9ybWF0aW9uIGhlcmU6IGh0dHBzOi8vc29ja2V0LmlvL2RvY3MvdjMvbWlncmF0aW5nLWZyb20tMi14LXRvLTMtMC8pXCIpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHNvY2tldF9pb19wYXJzZXJfMS5QYWNrZXRUeXBlLkVWRU5UOlxuICAgICAgICAgICAgICAgIHRoaXMub25ldmVudChwYWNrZXQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBzb2NrZXRfaW9fcGFyc2VyXzEuUGFja2V0VHlwZS5CSU5BUllfRVZFTlQ6XG4gICAgICAgICAgICAgICAgdGhpcy5vbmV2ZW50KHBhY2tldCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHNvY2tldF9pb19wYXJzZXJfMS5QYWNrZXRUeXBlLkFDSzpcbiAgICAgICAgICAgICAgICB0aGlzLm9uYWNrKHBhY2tldCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHNvY2tldF9pb19wYXJzZXJfMS5QYWNrZXRUeXBlLkJJTkFSWV9BQ0s6XG4gICAgICAgICAgICAgICAgdGhpcy5vbmFjayhwYWNrZXQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBzb2NrZXRfaW9fcGFyc2VyXzEuUGFja2V0VHlwZS5ESVNDT05ORUNUOlxuICAgICAgICAgICAgICAgIHRoaXMub25kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHNvY2tldF9pb19wYXJzZXJfMS5QYWNrZXRUeXBlLkNPTk5FQ1RfRVJST1I6XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyID0gbmV3IEVycm9yKHBhY2tldC5kYXRhLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICBlcnIuZGF0YSA9IHBhY2tldC5kYXRhLmRhdGE7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0UmVzZXJ2ZWQoXCJjb25uZWN0X2Vycm9yXCIsIGVycik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHVwb24gYSBzZXJ2ZXIgZXZlbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcGFja2V0XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBvbmV2ZW50KHBhY2tldCkge1xuICAgICAgICBjb25zdCBhcmdzID0gcGFja2V0LmRhdGEgfHwgW107XG4gICAgICAgIGRlYnVnKFwiZW1pdHRpbmcgZXZlbnQgJWpcIiwgYXJncyk7XG4gICAgICAgIGlmIChudWxsICE9IHBhY2tldC5pZCkge1xuICAgICAgICAgICAgZGVidWcoXCJhdHRhY2hpbmcgYWNrIGNhbGxiYWNrIHRvIGV2ZW50XCIpO1xuICAgICAgICAgICAgYXJncy5wdXNoKHRoaXMuYWNrKHBhY2tldC5pZCkpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmNvbm5lY3RlZCkge1xuICAgICAgICAgICAgdGhpcy5lbWl0RXZlbnQoYXJncyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJlY2VpdmVCdWZmZXIucHVzaChPYmplY3QuZnJlZXplKGFyZ3MpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbWl0RXZlbnQoYXJncykge1xuICAgICAgICBpZiAodGhpcy5fYW55TGlzdGVuZXJzICYmIHRoaXMuX2FueUxpc3RlbmVycy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IGxpc3RlbmVycyA9IHRoaXMuX2FueUxpc3RlbmVycy5zbGljZSgpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBsaXN0ZW5lciBvZiBsaXN0ZW5lcnMpIHtcbiAgICAgICAgICAgICAgICBsaXN0ZW5lci5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzdXBlci5lbWl0LmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQcm9kdWNlcyBhbiBhY2sgY2FsbGJhY2sgdG8gZW1pdCB3aXRoIGFuIGV2ZW50LlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBhY2soaWQpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGxldCBzZW50ID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgICAgICAgICAgLy8gcHJldmVudCBkb3VibGUgY2FsbGJhY2tzXG4gICAgICAgICAgICBpZiAoc2VudClcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBzZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgIGRlYnVnKFwic2VuZGluZyBhY2sgJWpcIiwgYXJncyk7XG4gICAgICAgICAgICBzZWxmLnBhY2tldCh7XG4gICAgICAgICAgICAgICAgdHlwZTogc29ja2V0X2lvX3BhcnNlcl8xLlBhY2tldFR5cGUuQUNLLFxuICAgICAgICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICAgICAgICBkYXRhOiBhcmdzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxlZCB1cG9uIGEgc2VydmVyIGFja25vd2xlZ2VtZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIHBhY2tldFxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgb25hY2socGFja2V0KSB7XG4gICAgICAgIGNvbnN0IGFjayA9IHRoaXMuYWNrc1twYWNrZXQuaWRdO1xuICAgICAgICBpZiAoXCJmdW5jdGlvblwiID09PSB0eXBlb2YgYWNrKSB7XG4gICAgICAgICAgICBkZWJ1ZyhcImNhbGxpbmcgYWNrICVzIHdpdGggJWpcIiwgcGFja2V0LmlkLCBwYWNrZXQuZGF0YSk7XG4gICAgICAgICAgICBhY2suYXBwbHkodGhpcywgcGFja2V0LmRhdGEpO1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuYWNrc1twYWNrZXQuaWRdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZGVidWcoXCJiYWQgYWNrICVzXCIsIHBhY2tldC5pZCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHVwb24gc2VydmVyIGNvbm5lY3QuXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIG9uY29ubmVjdChpZCkge1xuICAgICAgICBkZWJ1ZyhcInNvY2tldCBjb25uZWN0ZWQgd2l0aCBpZCAlc1wiLCBpZCk7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5jb25uZWN0ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmRpc2Nvbm5lY3RlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmVtaXRCdWZmZXJlZCgpO1xuICAgICAgICB0aGlzLmVtaXRSZXNlcnZlZChcImNvbm5lY3RcIik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEVtaXQgYnVmZmVyZWQgZXZlbnRzIChyZWNlaXZlZCBhbmQgZW1pdHRlZCkuXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGVtaXRCdWZmZXJlZCgpIHtcbiAgICAgICAgdGhpcy5yZWNlaXZlQnVmZmVyLmZvckVhY2goKGFyZ3MpID0+IHRoaXMuZW1pdEV2ZW50KGFyZ3MpKTtcbiAgICAgICAgdGhpcy5yZWNlaXZlQnVmZmVyID0gW107XG4gICAgICAgIHRoaXMuc2VuZEJ1ZmZlci5mb3JFYWNoKChwYWNrZXQpID0+IHRoaXMucGFja2V0KHBhY2tldCkpO1xuICAgICAgICB0aGlzLnNlbmRCdWZmZXIgPSBbXTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHVwb24gc2VydmVyIGRpc2Nvbm5lY3QuXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIG9uZGlzY29ubmVjdCgpIHtcbiAgICAgICAgZGVidWcoXCJzZXJ2ZXIgZGlzY29ubmVjdCAoJXMpXCIsIHRoaXMubnNwKTtcbiAgICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMub25jbG9zZShcImlvIHNlcnZlciBkaXNjb25uZWN0XCIpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgdXBvbiBmb3JjZWQgY2xpZW50L3NlcnZlciBzaWRlIGRpc2Nvbm5lY3Rpb25zLFxuICAgICAqIHRoaXMgbWV0aG9kIGVuc3VyZXMgdGhlIG1hbmFnZXIgc3RvcHMgdHJhY2tpbmcgdXMgYW5kXG4gICAgICogdGhhdCByZWNvbm5lY3Rpb25zIGRvbid0IGdldCB0cmlnZ2VyZWQgZm9yIHRoaXMuXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh0aGlzLnN1YnMpIHtcbiAgICAgICAgICAgIC8vIGNsZWFuIHN1YnNjcmlwdGlvbnMgdG8gYXZvaWQgcmVjb25uZWN0aW9uc1xuICAgICAgICAgICAgdGhpcy5zdWJzLmZvckVhY2goKHN1YkRlc3Ryb3kpID0+IHN1YkRlc3Ryb3koKSk7XG4gICAgICAgICAgICB0aGlzLnN1YnMgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pb1tcIl9kZXN0cm95XCJdKHRoaXMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEaXNjb25uZWN0cyB0aGUgc29ja2V0IG1hbnVhbGx5LlxuICAgICAqXG4gICAgICogQHJldHVybiBzZWxmXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIGRpc2Nvbm5lY3QoKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbm5lY3RlZCkge1xuICAgICAgICAgICAgZGVidWcoXCJwZXJmb3JtaW5nIGRpc2Nvbm5lY3QgKCVzKVwiLCB0aGlzLm5zcCk7XG4gICAgICAgICAgICB0aGlzLnBhY2tldCh7IHR5cGU6IHNvY2tldF9pb19wYXJzZXJfMS5QYWNrZXRUeXBlLkRJU0NPTk5FQ1QgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gcmVtb3ZlIHNvY2tldCBmcm9tIHBvb2xcbiAgICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgICAgIGlmICh0aGlzLmNvbm5lY3RlZCkge1xuICAgICAgICAgICAgLy8gZmlyZSBldmVudHNcbiAgICAgICAgICAgIHRoaXMub25jbG9zZShcImlvIGNsaWVudCBkaXNjb25uZWN0XCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBbGlhcyBmb3IgZGlzY29ubmVjdCgpXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHNlbGZcbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgY2xvc2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRpc2Nvbm5lY3QoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgY29tcHJlc3MgZmxhZy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBjb21wcmVzcyAtIGlmIGB0cnVlYCwgY29tcHJlc3NlcyB0aGUgc2VuZGluZyBkYXRhXG4gICAgICogQHJldHVybiBzZWxmXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIGNvbXByZXNzKGNvbXByZXNzKSB7XG4gICAgICAgIHRoaXMuZmxhZ3MuY29tcHJlc3MgPSBjb21wcmVzcztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgYSBtb2RpZmllciBmb3IgYSBzdWJzZXF1ZW50IGV2ZW50IGVtaXNzaW9uIHRoYXQgdGhlIGV2ZW50IG1lc3NhZ2Ugd2lsbCBiZSBkcm9wcGVkIHdoZW4gdGhpcyBzb2NrZXQgaXMgbm90XG4gICAgICogcmVhZHkgdG8gc2VuZCBtZXNzYWdlcy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHNlbGZcbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgZ2V0IHZvbGF0aWxlKCkge1xuICAgICAgICB0aGlzLmZsYWdzLnZvbGF0aWxlID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFkZHMgYSBsaXN0ZW5lciB0aGF0IHdpbGwgYmUgZmlyZWQgd2hlbiBhbnkgZXZlbnQgaXMgZW1pdHRlZC4gVGhlIGV2ZW50IG5hbWUgaXMgcGFzc2VkIGFzIHRoZSBmaXJzdCBhcmd1bWVudCB0byB0aGVcbiAgICAgKiBjYWxsYmFjay5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBsaXN0ZW5lclxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBvbkFueShsaXN0ZW5lcikge1xuICAgICAgICB0aGlzLl9hbnlMaXN0ZW5lcnMgPSB0aGlzLl9hbnlMaXN0ZW5lcnMgfHwgW107XG4gICAgICAgIHRoaXMuX2FueUxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFkZHMgYSBsaXN0ZW5lciB0aGF0IHdpbGwgYmUgZmlyZWQgd2hlbiBhbnkgZXZlbnQgaXMgZW1pdHRlZC4gVGhlIGV2ZW50IG5hbWUgaXMgcGFzc2VkIGFzIHRoZSBmaXJzdCBhcmd1bWVudCB0byB0aGVcbiAgICAgKiBjYWxsYmFjay4gVGhlIGxpc3RlbmVyIGlzIGFkZGVkIHRvIHRoZSBiZWdpbm5pbmcgb2YgdGhlIGxpc3RlbmVycyBhcnJheS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBsaXN0ZW5lclxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBwcmVwZW5kQW55KGxpc3RlbmVyKSB7XG4gICAgICAgIHRoaXMuX2FueUxpc3RlbmVycyA9IHRoaXMuX2FueUxpc3RlbmVycyB8fCBbXTtcbiAgICAgICAgdGhpcy5fYW55TGlzdGVuZXJzLnVuc2hpZnQobGlzdGVuZXIpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyB0aGUgbGlzdGVuZXIgdGhhdCB3aWxsIGJlIGZpcmVkIHdoZW4gYW55IGV2ZW50IGlzIGVtaXR0ZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbGlzdGVuZXJcbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgb2ZmQW55KGxpc3RlbmVyKSB7XG4gICAgICAgIGlmICghdGhpcy5fYW55TGlzdGVuZXJzKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICBpZiAobGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IGxpc3RlbmVycyA9IHRoaXMuX2FueUxpc3RlbmVycztcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGxpc3RlbmVyID09PSBsaXN0ZW5lcnNbaV0pIHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fYW55TGlzdGVuZXJzID0gW107XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gYXJyYXkgb2YgbGlzdGVuZXJzIHRoYXQgYXJlIGxpc3RlbmluZyBmb3IgYW55IGV2ZW50IHRoYXQgaXMgc3BlY2lmaWVkLiBUaGlzIGFycmF5IGNhbiBiZSBtYW5pcHVsYXRlZCxcbiAgICAgKiBlLmcuIHRvIHJlbW92ZSBsaXN0ZW5lcnMuXG4gICAgICpcbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgbGlzdGVuZXJzQW55KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYW55TGlzdGVuZXJzIHx8IFtdO1xuICAgIH1cbn1cbmV4cG9ydHMuU29ja2V0ID0gU29ja2V0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlN0cmljdEV2ZW50RW1pdHRlciA9IHZvaWQgMDtcbmNvbnN0IEVtaXR0ZXIgPSByZXF1aXJlKFwiY29tcG9uZW50LWVtaXR0ZXJcIik7XG4vKipcbiAqIFN0cmljdGx5IHR5cGVkIHZlcnNpb24gb2YgYW4gYEV2ZW50RW1pdHRlcmAuIEEgYFR5cGVkRXZlbnRFbWl0dGVyYCB0YWtlcyB0eXBlXG4gKiBwYXJhbWV0ZXJzIGZvciBtYXBwaW5ncyBvZiBldmVudCBuYW1lcyB0byBldmVudCBkYXRhIHR5cGVzLCBhbmQgc3RyaWN0bHlcbiAqIHR5cGVzIG1ldGhvZCBjYWxscyB0byB0aGUgYEV2ZW50RW1pdHRlcmAgYWNjb3JkaW5nIHRvIHRoZXNlIGV2ZW50IG1hcHMuXG4gKlxuICogQHR5cGVQYXJhbSBMaXN0ZW5FdmVudHMgLSBgRXZlbnRzTWFwYCBvZiB1c2VyLWRlZmluZWQgZXZlbnRzIHRoYXQgY2FuIGJlXG4gKiBsaXN0ZW5lZCB0byB3aXRoIGBvbmAgb3IgYG9uY2VgXG4gKiBAdHlwZVBhcmFtIEVtaXRFdmVudHMgLSBgRXZlbnRzTWFwYCBvZiB1c2VyLWRlZmluZWQgZXZlbnRzIHRoYXQgY2FuIGJlXG4gKiBlbWl0dGVkIHdpdGggYGVtaXRgXG4gKiBAdHlwZVBhcmFtIFJlc2VydmVkRXZlbnRzIC0gYEV2ZW50c01hcGAgb2YgcmVzZXJ2ZWQgZXZlbnRzLCB0aGF0IGNhbiBiZVxuICogZW1pdHRlZCBieSBzb2NrZXQuaW8gd2l0aCBgZW1pdFJlc2VydmVkYCwgYW5kIGNhbiBiZSBsaXN0ZW5lZCB0byB3aXRoXG4gKiBgbGlzdGVuYC5cbiAqL1xuY2xhc3MgU3RyaWN0RXZlbnRFbWl0dGVyIGV4dGVuZHMgRW1pdHRlciB7XG4gICAgLyoqXG4gICAgICogQWRkcyB0aGUgYGxpc3RlbmVyYCBmdW5jdGlvbiBhcyBhbiBldmVudCBsaXN0ZW5lciBmb3IgYGV2YC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBldiBOYW1lIG9mIHRoZSBldmVudFxuICAgICAqIEBwYXJhbSBsaXN0ZW5lciBDYWxsYmFjayBmdW5jdGlvblxuICAgICAqL1xuICAgIG9uKGV2LCBsaXN0ZW5lcikge1xuICAgICAgICBzdXBlci5vbihldiwgbGlzdGVuZXIpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkcyBhIG9uZS10aW1lIGBsaXN0ZW5lcmAgZnVuY3Rpb24gYXMgYW4gZXZlbnQgbGlzdGVuZXIgZm9yIGBldmAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZXYgTmFtZSBvZiB0aGUgZXZlbnRcbiAgICAgKiBAcGFyYW0gbGlzdGVuZXIgQ2FsbGJhY2sgZnVuY3Rpb25cbiAgICAgKi9cbiAgICBvbmNlKGV2LCBsaXN0ZW5lcikge1xuICAgICAgICBzdXBlci5vbmNlKGV2LCBsaXN0ZW5lcik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBFbWl0cyBhbiBldmVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBldiBOYW1lIG9mIHRoZSBldmVudFxuICAgICAqIEBwYXJhbSBhcmdzIFZhbHVlcyB0byBzZW5kIHRvIGxpc3RlbmVycyBvZiB0aGlzIGV2ZW50XG4gICAgICovXG4gICAgZW1pdChldiwgLi4uYXJncykge1xuICAgICAgICBzdXBlci5lbWl0KGV2LCAuLi5hcmdzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEVtaXRzIGEgcmVzZXJ2ZWQgZXZlbnQuXG4gICAgICpcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBgcHJvdGVjdGVkYCwgc28gdGhhdCBvbmx5IGEgY2xhc3MgZXh0ZW5kaW5nXG4gICAgICogYFN0cmljdEV2ZW50RW1pdHRlcmAgY2FuIGVtaXQgaXRzIG93biByZXNlcnZlZCBldmVudHMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZXYgUmVzZXJ2ZWQgZXZlbnQgbmFtZVxuICAgICAqIEBwYXJhbSBhcmdzIEFyZ3VtZW50cyB0byBlbWl0IGFsb25nIHdpdGggdGhlIGV2ZW50XG4gICAgICovXG4gICAgZW1pdFJlc2VydmVkKGV2LCAuLi5hcmdzKSB7XG4gICAgICAgIHN1cGVyLmVtaXQoZXYsIC4uLmFyZ3MpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbGlzdGVuZXJzIGxpc3RlbmluZyB0byBhbiBldmVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBldmVudCBFdmVudCBuYW1lXG4gICAgICogQHJldHVybnMgQXJyYXkgb2YgbGlzdGVuZXJzIHN1YnNjcmliZWQgdG8gYGV2ZW50YFxuICAgICAqL1xuICAgIGxpc3RlbmVycyhldmVudCkge1xuICAgICAgICByZXR1cm4gc3VwZXIubGlzdGVuZXJzKGV2ZW50KTtcbiAgICB9XG59XG5leHBvcnRzLlN0cmljdEV2ZW50RW1pdHRlciA9IFN0cmljdEV2ZW50RW1pdHRlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy51cmwgPSB2b2lkIDA7XG5jb25zdCBwYXJzZXVyaSA9IHJlcXVpcmUoXCJwYXJzZXVyaVwiKTtcbmNvbnN0IGRlYnVnID0gcmVxdWlyZShcImRlYnVnXCIpKFwic29ja2V0LmlvLWNsaWVudDp1cmxcIik7XG4vKipcbiAqIFVSTCBwYXJzZXIuXG4gKlxuICogQHBhcmFtIHVyaSAtIHVybFxuICogQHBhcmFtIHBhdGggLSB0aGUgcmVxdWVzdCBwYXRoIG9mIHRoZSBjb25uZWN0aW9uXG4gKiBAcGFyYW0gbG9jIC0gQW4gb2JqZWN0IG1lYW50IHRvIG1pbWljIHdpbmRvdy5sb2NhdGlvbi5cbiAqICAgICAgICBEZWZhdWx0cyB0byB3aW5kb3cubG9jYXRpb24uXG4gKiBAcHVibGljXG4gKi9cbmZ1bmN0aW9uIHVybCh1cmksIHBhdGggPSBcIlwiLCBsb2MpIHtcbiAgICBsZXQgb2JqID0gdXJpO1xuICAgIC8vIGRlZmF1bHQgdG8gd2luZG93LmxvY2F0aW9uXG4gICAgbG9jID0gbG9jIHx8ICh0eXBlb2YgbG9jYXRpb24gIT09IFwidW5kZWZpbmVkXCIgJiYgbG9jYXRpb24pO1xuICAgIGlmIChudWxsID09IHVyaSlcbiAgICAgICAgdXJpID0gbG9jLnByb3RvY29sICsgXCIvL1wiICsgbG9jLmhvc3Q7XG4gICAgLy8gcmVsYXRpdmUgcGF0aCBzdXBwb3J0XG4gICAgaWYgKHR5cGVvZiB1cmkgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgaWYgKFwiL1wiID09PSB1cmkuY2hhckF0KDApKSB7XG4gICAgICAgICAgICBpZiAoXCIvXCIgPT09IHVyaS5jaGFyQXQoMSkpIHtcbiAgICAgICAgICAgICAgICB1cmkgPSBsb2MucHJvdG9jb2wgKyB1cmk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB1cmkgPSBsb2MuaG9zdCArIHVyaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIS9eKGh0dHBzP3x3c3M/KTpcXC9cXC8vLnRlc3QodXJpKSkge1xuICAgICAgICAgICAgZGVidWcoXCJwcm90b2NvbC1sZXNzIHVybCAlc1wiLCB1cmkpO1xuICAgICAgICAgICAgaWYgKFwidW5kZWZpbmVkXCIgIT09IHR5cGVvZiBsb2MpIHtcbiAgICAgICAgICAgICAgICB1cmkgPSBsb2MucHJvdG9jb2wgKyBcIi8vXCIgKyB1cmk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB1cmkgPSBcImh0dHBzOi8vXCIgKyB1cmk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gcGFyc2VcbiAgICAgICAgZGVidWcoXCJwYXJzZSAlc1wiLCB1cmkpO1xuICAgICAgICBvYmogPSBwYXJzZXVyaSh1cmkpO1xuICAgIH1cbiAgICAvLyBtYWtlIHN1cmUgd2UgdHJlYXQgYGxvY2FsaG9zdDo4MGAgYW5kIGBsb2NhbGhvc3RgIGVxdWFsbHlcbiAgICBpZiAoIW9iai5wb3J0KSB7XG4gICAgICAgIGlmICgvXihodHRwfHdzKSQvLnRlc3Qob2JqLnByb3RvY29sKSkge1xuICAgICAgICAgICAgb2JqLnBvcnQgPSBcIjgwXCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoL14oaHR0cHx3cylzJC8udGVzdChvYmoucHJvdG9jb2wpKSB7XG4gICAgICAgICAgICBvYmoucG9ydCA9IFwiNDQzXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgb2JqLnBhdGggPSBvYmoucGF0aCB8fCBcIi9cIjtcbiAgICBjb25zdCBpcHY2ID0gb2JqLmhvc3QuaW5kZXhPZihcIjpcIikgIT09IC0xO1xuICAgIGNvbnN0IGhvc3QgPSBpcHY2ID8gXCJbXCIgKyBvYmouaG9zdCArIFwiXVwiIDogb2JqLmhvc3Q7XG4gICAgLy8gZGVmaW5lIHVuaXF1ZSBpZFxuICAgIG9iai5pZCA9IG9iai5wcm90b2NvbCArIFwiOi8vXCIgKyBob3N0ICsgXCI6XCIgKyBvYmoucG9ydCArIHBhdGg7XG4gICAgLy8gZGVmaW5lIGhyZWZcbiAgICBvYmouaHJlZiA9XG4gICAgICAgIG9iai5wcm90b2NvbCArXG4gICAgICAgICAgICBcIjovL1wiICtcbiAgICAgICAgICAgIGhvc3QgK1xuICAgICAgICAgICAgKGxvYyAmJiBsb2MucG9ydCA9PT0gb2JqLnBvcnQgPyBcIlwiIDogXCI6XCIgKyBvYmoucG9ydCk7XG4gICAgcmV0dXJuIG9iajtcbn1cbmV4cG9ydHMudXJsID0gdXJsO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnJlY29uc3RydWN0UGFja2V0ID0gZXhwb3J0cy5kZWNvbnN0cnVjdFBhY2tldCA9IHZvaWQgMDtcbmNvbnN0IGlzX2JpbmFyeV8xID0gcmVxdWlyZShcIi4vaXMtYmluYXJ5XCIpO1xuLyoqXG4gKiBSZXBsYWNlcyBldmVyeSBCdWZmZXIgfCBBcnJheUJ1ZmZlciB8IEJsb2IgfCBGaWxlIGluIHBhY2tldCB3aXRoIGEgbnVtYmVyZWQgcGxhY2Vob2xkZXIuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHBhY2tldCAtIHNvY2tldC5pbyBldmVudCBwYWNrZXRcbiAqIEByZXR1cm4ge09iamVjdH0gd2l0aCBkZWNvbnN0cnVjdGVkIHBhY2tldCBhbmQgbGlzdCBvZiBidWZmZXJzXG4gKiBAcHVibGljXG4gKi9cbmZ1bmN0aW9uIGRlY29uc3RydWN0UGFja2V0KHBhY2tldCkge1xuICAgIGNvbnN0IGJ1ZmZlcnMgPSBbXTtcbiAgICBjb25zdCBwYWNrZXREYXRhID0gcGFja2V0LmRhdGE7XG4gICAgY29uc3QgcGFjayA9IHBhY2tldDtcbiAgICBwYWNrLmRhdGEgPSBfZGVjb25zdHJ1Y3RQYWNrZXQocGFja2V0RGF0YSwgYnVmZmVycyk7XG4gICAgcGFjay5hdHRhY2htZW50cyA9IGJ1ZmZlcnMubGVuZ3RoOyAvLyBudW1iZXIgb2YgYmluYXJ5ICdhdHRhY2htZW50cydcbiAgICByZXR1cm4geyBwYWNrZXQ6IHBhY2ssIGJ1ZmZlcnM6IGJ1ZmZlcnMgfTtcbn1cbmV4cG9ydHMuZGVjb25zdHJ1Y3RQYWNrZXQgPSBkZWNvbnN0cnVjdFBhY2tldDtcbmZ1bmN0aW9uIF9kZWNvbnN0cnVjdFBhY2tldChkYXRhLCBidWZmZXJzKSB7XG4gICAgaWYgKCFkYXRhKVxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICBpZiAoaXNfYmluYXJ5XzEuaXNCaW5hcnkoZGF0YSkpIHtcbiAgICAgICAgY29uc3QgcGxhY2Vob2xkZXIgPSB7IF9wbGFjZWhvbGRlcjogdHJ1ZSwgbnVtOiBidWZmZXJzLmxlbmd0aCB9O1xuICAgICAgICBidWZmZXJzLnB1c2goZGF0YSk7XG4gICAgICAgIHJldHVybiBwbGFjZWhvbGRlcjtcbiAgICB9XG4gICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgICAgICBjb25zdCBuZXdEYXRhID0gbmV3IEFycmF5KGRhdGEubGVuZ3RoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBuZXdEYXRhW2ldID0gX2RlY29uc3RydWN0UGFja2V0KGRhdGFbaV0sIGJ1ZmZlcnMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdEYXRhO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgZGF0YSA9PT0gXCJvYmplY3RcIiAmJiAhKGRhdGEgaW5zdGFuY2VvZiBEYXRlKSkge1xuICAgICAgICBjb25zdCBuZXdEYXRhID0ge307XG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIGRhdGEpIHtcbiAgICAgICAgICAgIGlmIChkYXRhLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBuZXdEYXRhW2tleV0gPSBfZGVjb25zdHJ1Y3RQYWNrZXQoZGF0YVtrZXldLCBidWZmZXJzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3RGF0YTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG59XG4vKipcbiAqIFJlY29uc3RydWN0cyBhIGJpbmFyeSBwYWNrZXQgZnJvbSBpdHMgcGxhY2Vob2xkZXIgcGFja2V0IGFuZCBidWZmZXJzXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHBhY2tldCAtIGV2ZW50IHBhY2tldCB3aXRoIHBsYWNlaG9sZGVyc1xuICogQHBhcmFtIHtBcnJheX0gYnVmZmVycyAtIGJpbmFyeSBidWZmZXJzIHRvIHB1dCBpbiBwbGFjZWhvbGRlciBwb3NpdGlvbnNcbiAqIEByZXR1cm4ge09iamVjdH0gcmVjb25zdHJ1Y3RlZCBwYWNrZXRcbiAqIEBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gcmVjb25zdHJ1Y3RQYWNrZXQocGFja2V0LCBidWZmZXJzKSB7XG4gICAgcGFja2V0LmRhdGEgPSBfcmVjb25zdHJ1Y3RQYWNrZXQocGFja2V0LmRhdGEsIGJ1ZmZlcnMpO1xuICAgIHBhY2tldC5hdHRhY2htZW50cyA9IHVuZGVmaW5lZDsgLy8gbm8gbG9uZ2VyIHVzZWZ1bFxuICAgIHJldHVybiBwYWNrZXQ7XG59XG5leHBvcnRzLnJlY29uc3RydWN0UGFja2V0ID0gcmVjb25zdHJ1Y3RQYWNrZXQ7XG5mdW5jdGlvbiBfcmVjb25zdHJ1Y3RQYWNrZXQoZGF0YSwgYnVmZmVycykge1xuICAgIGlmICghZGF0YSlcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgaWYgKGRhdGEgJiYgZGF0YS5fcGxhY2Vob2xkZXIpIHtcbiAgICAgICAgcmV0dXJuIGJ1ZmZlcnNbZGF0YS5udW1dOyAvLyBhcHByb3ByaWF0ZSBidWZmZXIgKHNob3VsZCBiZSBuYXR1cmFsIG9yZGVyIGFueXdheSlcbiAgICB9XG4gICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGRhdGFbaV0gPSBfcmVjb25zdHJ1Y3RQYWNrZXQoZGF0YVtpXSwgYnVmZmVycyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIGRhdGEgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gZGF0YSkge1xuICAgICAgICAgICAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIGRhdGFba2V5XSA9IF9yZWNvbnN0cnVjdFBhY2tldChkYXRhW2tleV0sIGJ1ZmZlcnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkRlY29kZXIgPSBleHBvcnRzLkVuY29kZXIgPSBleHBvcnRzLlBhY2tldFR5cGUgPSBleHBvcnRzLnByb3RvY29sID0gdm9pZCAwO1xuY29uc3QgRW1pdHRlciA9IHJlcXVpcmUoXCJjb21wb25lbnQtZW1pdHRlclwiKTtcbmNvbnN0IGJpbmFyeV8xID0gcmVxdWlyZShcIi4vYmluYXJ5XCIpO1xuY29uc3QgaXNfYmluYXJ5XzEgPSByZXF1aXJlKFwiLi9pcy1iaW5hcnlcIik7XG5jb25zdCBkZWJ1ZyA9IHJlcXVpcmUoXCJkZWJ1Z1wiKShcInNvY2tldC5pby1wYXJzZXJcIik7XG4vKipcbiAqIFByb3RvY29sIHZlcnNpb24uXG4gKlxuICogQHB1YmxpY1xuICovXG5leHBvcnRzLnByb3RvY29sID0gNTtcbnZhciBQYWNrZXRUeXBlO1xuKGZ1bmN0aW9uIChQYWNrZXRUeXBlKSB7XG4gICAgUGFja2V0VHlwZVtQYWNrZXRUeXBlW1wiQ09OTkVDVFwiXSA9IDBdID0gXCJDT05ORUNUXCI7XG4gICAgUGFja2V0VHlwZVtQYWNrZXRUeXBlW1wiRElTQ09OTkVDVFwiXSA9IDFdID0gXCJESVNDT05ORUNUXCI7XG4gICAgUGFja2V0VHlwZVtQYWNrZXRUeXBlW1wiRVZFTlRcIl0gPSAyXSA9IFwiRVZFTlRcIjtcbiAgICBQYWNrZXRUeXBlW1BhY2tldFR5cGVbXCJBQ0tcIl0gPSAzXSA9IFwiQUNLXCI7XG4gICAgUGFja2V0VHlwZVtQYWNrZXRUeXBlW1wiQ09OTkVDVF9FUlJPUlwiXSA9IDRdID0gXCJDT05ORUNUX0VSUk9SXCI7XG4gICAgUGFja2V0VHlwZVtQYWNrZXRUeXBlW1wiQklOQVJZX0VWRU5UXCJdID0gNV0gPSBcIkJJTkFSWV9FVkVOVFwiO1xuICAgIFBhY2tldFR5cGVbUGFja2V0VHlwZVtcIkJJTkFSWV9BQ0tcIl0gPSA2XSA9IFwiQklOQVJZX0FDS1wiO1xufSkoUGFja2V0VHlwZSA9IGV4cG9ydHMuUGFja2V0VHlwZSB8fCAoZXhwb3J0cy5QYWNrZXRUeXBlID0ge30pKTtcbi8qKlxuICogQSBzb2NrZXQuaW8gRW5jb2RlciBpbnN0YW5jZVxuICovXG5jbGFzcyBFbmNvZGVyIHtcbiAgICAvKipcbiAgICAgKiBFbmNvZGUgYSBwYWNrZXQgYXMgYSBzaW5nbGUgc3RyaW5nIGlmIG5vbi1iaW5hcnksIG9yIGFzIGFcbiAgICAgKiBidWZmZXIgc2VxdWVuY2UsIGRlcGVuZGluZyBvbiBwYWNrZXQgdHlwZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvYmogLSBwYWNrZXQgb2JqZWN0XG4gICAgICovXG4gICAgZW5jb2RlKG9iaikge1xuICAgICAgICBkZWJ1ZyhcImVuY29kaW5nIHBhY2tldCAlalwiLCBvYmopO1xuICAgICAgICBpZiAob2JqLnR5cGUgPT09IFBhY2tldFR5cGUuRVZFTlQgfHwgb2JqLnR5cGUgPT09IFBhY2tldFR5cGUuQUNLKSB7XG4gICAgICAgICAgICBpZiAoaXNfYmluYXJ5XzEuaGFzQmluYXJ5KG9iaikpIHtcbiAgICAgICAgICAgICAgICBvYmoudHlwZSA9XG4gICAgICAgICAgICAgICAgICAgIG9iai50eXBlID09PSBQYWNrZXRUeXBlLkVWRU5UXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFBhY2tldFR5cGUuQklOQVJZX0VWRU5UXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFBhY2tldFR5cGUuQklOQVJZX0FDSztcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5lbmNvZGVBc0JpbmFyeShvYmopO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbdGhpcy5lbmNvZGVBc1N0cmluZyhvYmopXTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRW5jb2RlIHBhY2tldCBhcyBzdHJpbmcuXG4gICAgICovXG4gICAgZW5jb2RlQXNTdHJpbmcob2JqKSB7XG4gICAgICAgIC8vIGZpcnN0IGlzIHR5cGVcbiAgICAgICAgbGV0IHN0ciA9IFwiXCIgKyBvYmoudHlwZTtcbiAgICAgICAgLy8gYXR0YWNobWVudHMgaWYgd2UgaGF2ZSB0aGVtXG4gICAgICAgIGlmIChvYmoudHlwZSA9PT0gUGFja2V0VHlwZS5CSU5BUllfRVZFTlQgfHxcbiAgICAgICAgICAgIG9iai50eXBlID09PSBQYWNrZXRUeXBlLkJJTkFSWV9BQ0spIHtcbiAgICAgICAgICAgIHN0ciArPSBvYmouYXR0YWNobWVudHMgKyBcIi1cIjtcbiAgICAgICAgfVxuICAgICAgICAvLyBpZiB3ZSBoYXZlIGEgbmFtZXNwYWNlIG90aGVyIHRoYW4gYC9gXG4gICAgICAgIC8vIHdlIGFwcGVuZCBpdCBmb2xsb3dlZCBieSBhIGNvbW1hIGAsYFxuICAgICAgICBpZiAob2JqLm5zcCAmJiBcIi9cIiAhPT0gb2JqLm5zcCkge1xuICAgICAgICAgICAgc3RyICs9IG9iai5uc3AgKyBcIixcIjtcbiAgICAgICAgfVxuICAgICAgICAvLyBpbW1lZGlhdGVseSBmb2xsb3dlZCBieSB0aGUgaWRcbiAgICAgICAgaWYgKG51bGwgIT0gb2JqLmlkKSB7XG4gICAgICAgICAgICBzdHIgKz0gb2JqLmlkO1xuICAgICAgICB9XG4gICAgICAgIC8vIGpzb24gZGF0YVxuICAgICAgICBpZiAobnVsbCAhPSBvYmouZGF0YSkge1xuICAgICAgICAgICAgc3RyICs9IEpTT04uc3RyaW5naWZ5KG9iai5kYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBkZWJ1ZyhcImVuY29kZWQgJWogYXMgJXNcIiwgb2JqLCBzdHIpO1xuICAgICAgICByZXR1cm4gc3RyO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBFbmNvZGUgcGFja2V0IGFzICdidWZmZXIgc2VxdWVuY2UnIGJ5IHJlbW92aW5nIGJsb2JzLCBhbmRcbiAgICAgKiBkZWNvbnN0cnVjdGluZyBwYWNrZXQgaW50byBvYmplY3Qgd2l0aCBwbGFjZWhvbGRlcnMgYW5kXG4gICAgICogYSBsaXN0IG9mIGJ1ZmZlcnMuXG4gICAgICovXG4gICAgZW5jb2RlQXNCaW5hcnkob2JqKSB7XG4gICAgICAgIGNvbnN0IGRlY29uc3RydWN0aW9uID0gYmluYXJ5XzEuZGVjb25zdHJ1Y3RQYWNrZXQob2JqKTtcbiAgICAgICAgY29uc3QgcGFjayA9IHRoaXMuZW5jb2RlQXNTdHJpbmcoZGVjb25zdHJ1Y3Rpb24ucGFja2V0KTtcbiAgICAgICAgY29uc3QgYnVmZmVycyA9IGRlY29uc3RydWN0aW9uLmJ1ZmZlcnM7XG4gICAgICAgIGJ1ZmZlcnMudW5zaGlmdChwYWNrKTsgLy8gYWRkIHBhY2tldCBpbmZvIHRvIGJlZ2lubmluZyBvZiBkYXRhIGxpc3RcbiAgICAgICAgcmV0dXJuIGJ1ZmZlcnM7IC8vIHdyaXRlIGFsbCB0aGUgYnVmZmVyc1xuICAgIH1cbn1cbmV4cG9ydHMuRW5jb2RlciA9IEVuY29kZXI7XG4vKipcbiAqIEEgc29ja2V0LmlvIERlY29kZXIgaW5zdGFuY2VcbiAqXG4gKiBAcmV0dXJuIHtPYmplY3R9IGRlY29kZXJcbiAqL1xuY2xhc3MgRGVjb2RlciBleHRlbmRzIEVtaXR0ZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEZWNvZGVzIGFuIGVuY29kZWQgcGFja2V0IHN0cmluZyBpbnRvIHBhY2tldCBKU09OLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9iaiAtIGVuY29kZWQgcGFja2V0XG4gICAgICovXG4gICAgYWRkKG9iaikge1xuICAgICAgICBsZXQgcGFja2V0O1xuICAgICAgICBpZiAodHlwZW9mIG9iaiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgcGFja2V0ID0gdGhpcy5kZWNvZGVTdHJpbmcob2JqKTtcbiAgICAgICAgICAgIGlmIChwYWNrZXQudHlwZSA9PT0gUGFja2V0VHlwZS5CSU5BUllfRVZFTlQgfHxcbiAgICAgICAgICAgICAgICBwYWNrZXQudHlwZSA9PT0gUGFja2V0VHlwZS5CSU5BUllfQUNLKSB7XG4gICAgICAgICAgICAgICAgLy8gYmluYXJ5IHBhY2tldCdzIGpzb25cbiAgICAgICAgICAgICAgICB0aGlzLnJlY29uc3RydWN0b3IgPSBuZXcgQmluYXJ5UmVjb25zdHJ1Y3RvcihwYWNrZXQpO1xuICAgICAgICAgICAgICAgIC8vIG5vIGF0dGFjaG1lbnRzLCBsYWJlbGVkIGJpbmFyeSBidXQgbm8gYmluYXJ5IGRhdGEgdG8gZm9sbG93XG4gICAgICAgICAgICAgICAgaWYgKHBhY2tldC5hdHRhY2htZW50cyA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBzdXBlci5lbWl0KFwiZGVjb2RlZFwiLCBwYWNrZXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIG5vbi1iaW5hcnkgZnVsbCBwYWNrZXRcbiAgICAgICAgICAgICAgICBzdXBlci5lbWl0KFwiZGVjb2RlZFwiLCBwYWNrZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzX2JpbmFyeV8xLmlzQmluYXJ5KG9iaikgfHwgb2JqLmJhc2U2NCkge1xuICAgICAgICAgICAgLy8gcmF3IGJpbmFyeSBkYXRhXG4gICAgICAgICAgICBpZiAoIXRoaXMucmVjb25zdHJ1Y3Rvcikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImdvdCBiaW5hcnkgZGF0YSB3aGVuIG5vdCByZWNvbnN0cnVjdGluZyBhIHBhY2tldFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhY2tldCA9IHRoaXMucmVjb25zdHJ1Y3Rvci50YWtlQmluYXJ5RGF0YShvYmopO1xuICAgICAgICAgICAgICAgIGlmIChwYWNrZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVjZWl2ZWQgZmluYWwgYnVmZmVyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVjb25zdHJ1Y3RvciA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHN1cGVyLmVtaXQoXCJkZWNvZGVkXCIsIHBhY2tldCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5rbm93biB0eXBlOiBcIiArIG9iaik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogRGVjb2RlIGEgcGFja2V0IFN0cmluZyAoSlNPTiBkYXRhKVxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICAgICAqIEByZXR1cm4ge09iamVjdH0gcGFja2V0XG4gICAgICovXG4gICAgZGVjb2RlU3RyaW5nKHN0cikge1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIC8vIGxvb2sgdXAgdHlwZVxuICAgICAgICBjb25zdCBwID0ge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyKHN0ci5jaGFyQXQoMCkpLFxuICAgICAgICB9O1xuICAgICAgICBpZiAoUGFja2V0VHlwZVtwLnR5cGVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInVua25vd24gcGFja2V0IHR5cGUgXCIgKyBwLnR5cGUpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGxvb2sgdXAgYXR0YWNobWVudHMgaWYgdHlwZSBiaW5hcnlcbiAgICAgICAgaWYgKHAudHlwZSA9PT0gUGFja2V0VHlwZS5CSU5BUllfRVZFTlQgfHxcbiAgICAgICAgICAgIHAudHlwZSA9PT0gUGFja2V0VHlwZS5CSU5BUllfQUNLKSB7XG4gICAgICAgICAgICBjb25zdCBzdGFydCA9IGkgKyAxO1xuICAgICAgICAgICAgd2hpbGUgKHN0ci5jaGFyQXQoKytpKSAhPT0gXCItXCIgJiYgaSAhPSBzdHIubGVuZ3RoKSB7IH1cbiAgICAgICAgICAgIGNvbnN0IGJ1ZiA9IHN0ci5zdWJzdHJpbmcoc3RhcnQsIGkpO1xuICAgICAgICAgICAgaWYgKGJ1ZiAhPSBOdW1iZXIoYnVmKSB8fCBzdHIuY2hhckF0KGkpICE9PSBcIi1cIikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIklsbGVnYWwgYXR0YWNobWVudHNcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwLmF0dGFjaG1lbnRzID0gTnVtYmVyKGJ1Zik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gbG9vayB1cCBuYW1lc3BhY2UgKGlmIGFueSlcbiAgICAgICAgaWYgKFwiL1wiID09PSBzdHIuY2hhckF0KGkgKyAxKSkge1xuICAgICAgICAgICAgY29uc3Qgc3RhcnQgPSBpICsgMTtcbiAgICAgICAgICAgIHdoaWxlICgrK2kpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjID0gc3RyLmNoYXJBdChpKTtcbiAgICAgICAgICAgICAgICBpZiAoXCIsXCIgPT09IGMpXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGlmIChpID09PSBzdHIubGVuZ3RoKVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHAubnNwID0gc3RyLnN1YnN0cmluZyhzdGFydCwgaSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwLm5zcCA9IFwiL1wiO1xuICAgICAgICB9XG4gICAgICAgIC8vIGxvb2sgdXAgaWRcbiAgICAgICAgY29uc3QgbmV4dCA9IHN0ci5jaGFyQXQoaSArIDEpO1xuICAgICAgICBpZiAoXCJcIiAhPT0gbmV4dCAmJiBOdW1iZXIobmV4dCkgPT0gbmV4dCkge1xuICAgICAgICAgICAgY29uc3Qgc3RhcnQgPSBpICsgMTtcbiAgICAgICAgICAgIHdoaWxlICgrK2kpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjID0gc3RyLmNoYXJBdChpKTtcbiAgICAgICAgICAgICAgICBpZiAobnVsbCA9PSBjIHx8IE51bWJlcihjKSAhPSBjKSB7XG4gICAgICAgICAgICAgICAgICAgIC0taTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChpID09PSBzdHIubGVuZ3RoKVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHAuaWQgPSBOdW1iZXIoc3RyLnN1YnN0cmluZyhzdGFydCwgaSArIDEpKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBsb29rIHVwIGpzb24gZGF0YVxuICAgICAgICBpZiAoc3RyLmNoYXJBdCgrK2kpKSB7XG4gICAgICAgICAgICBjb25zdCBwYXlsb2FkID0gdHJ5UGFyc2Uoc3RyLnN1YnN0cihpKSk7XG4gICAgICAgICAgICBpZiAoRGVjb2Rlci5pc1BheWxvYWRWYWxpZChwLnR5cGUsIHBheWxvYWQpKSB7XG4gICAgICAgICAgICAgICAgcC5kYXRhID0gcGF5bG9hZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImludmFsaWQgcGF5bG9hZFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBkZWJ1ZyhcImRlY29kZWQgJXMgYXMgJWpcIiwgc3RyLCBwKTtcbiAgICAgICAgcmV0dXJuIHA7XG4gICAgfVxuICAgIHN0YXRpYyBpc1BheWxvYWRWYWxpZCh0eXBlLCBwYXlsb2FkKSB7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSBQYWNrZXRUeXBlLkNPTk5FQ1Q6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiBwYXlsb2FkID09PSBcIm9iamVjdFwiO1xuICAgICAgICAgICAgY2FzZSBQYWNrZXRUeXBlLkRJU0NPTk5FQ1Q6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBheWxvYWQgPT09IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGNhc2UgUGFja2V0VHlwZS5DT05ORUNUX0VSUk9SOlxuICAgICAgICAgICAgICAgIHJldHVybiB0eXBlb2YgcGF5bG9hZCA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgcGF5bG9hZCA9PT0gXCJvYmplY3RcIjtcbiAgICAgICAgICAgIGNhc2UgUGFja2V0VHlwZS5FVkVOVDpcbiAgICAgICAgICAgIGNhc2UgUGFja2V0VHlwZS5CSU5BUllfRVZFTlQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkocGF5bG9hZCkgJiYgcGF5bG9hZC5sZW5ndGggPiAwO1xuICAgICAgICAgICAgY2FzZSBQYWNrZXRUeXBlLkFDSzpcbiAgICAgICAgICAgIGNhc2UgUGFja2V0VHlwZS5CSU5BUllfQUNLOlxuICAgICAgICAgICAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KHBheWxvYWQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERlYWxsb2NhdGVzIGEgcGFyc2VyJ3MgcmVzb3VyY2VzXG4gICAgICovXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMucmVjb25zdHJ1Y3Rvcikge1xuICAgICAgICAgICAgdGhpcy5yZWNvbnN0cnVjdG9yLmZpbmlzaGVkUmVjb25zdHJ1Y3Rpb24oKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuRGVjb2RlciA9IERlY29kZXI7XG5mdW5jdGlvbiB0cnlQYXJzZShzdHIpIHtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShzdHIpO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuLyoqXG4gKiBBIG1hbmFnZXIgb2YgYSBiaW5hcnkgZXZlbnQncyAnYnVmZmVyIHNlcXVlbmNlJy4gU2hvdWxkXG4gKiBiZSBjb25zdHJ1Y3RlZCB3aGVuZXZlciBhIHBhY2tldCBvZiB0eXBlIEJJTkFSWV9FVkVOVCBpc1xuICogZGVjb2RlZC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcGFja2V0XG4gKiBAcmV0dXJuIHtCaW5hcnlSZWNvbnN0cnVjdG9yfSBpbml0aWFsaXplZCByZWNvbnN0cnVjdG9yXG4gKi9cbmNsYXNzIEJpbmFyeVJlY29uc3RydWN0b3Ige1xuICAgIGNvbnN0cnVjdG9yKHBhY2tldCkge1xuICAgICAgICB0aGlzLnBhY2tldCA9IHBhY2tldDtcbiAgICAgICAgdGhpcy5idWZmZXJzID0gW107XG4gICAgICAgIHRoaXMucmVjb25QYWNrID0gcGFja2V0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBNZXRob2QgdG8gYmUgY2FsbGVkIHdoZW4gYmluYXJ5IGRhdGEgcmVjZWl2ZWQgZnJvbSBjb25uZWN0aW9uXG4gICAgICogYWZ0ZXIgYSBCSU5BUllfRVZFTlQgcGFja2V0LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtCdWZmZXIgfCBBcnJheUJ1ZmZlcn0gYmluRGF0YSAtIHRoZSByYXcgYmluYXJ5IGRhdGEgcmVjZWl2ZWRcbiAgICAgKiBAcmV0dXJuIHtudWxsIHwgT2JqZWN0fSByZXR1cm5zIG51bGwgaWYgbW9yZSBiaW5hcnkgZGF0YSBpcyBleHBlY3RlZCBvclxuICAgICAqICAgYSByZWNvbnN0cnVjdGVkIHBhY2tldCBvYmplY3QgaWYgYWxsIGJ1ZmZlcnMgaGF2ZSBiZWVuIHJlY2VpdmVkLlxuICAgICAqL1xuICAgIHRha2VCaW5hcnlEYXRhKGJpbkRhdGEpIHtcbiAgICAgICAgdGhpcy5idWZmZXJzLnB1c2goYmluRGF0YSk7XG4gICAgICAgIGlmICh0aGlzLmJ1ZmZlcnMubGVuZ3RoID09PSB0aGlzLnJlY29uUGFjay5hdHRhY2htZW50cykge1xuICAgICAgICAgICAgLy8gZG9uZSB3aXRoIGJ1ZmZlciBsaXN0XG4gICAgICAgICAgICBjb25zdCBwYWNrZXQgPSBiaW5hcnlfMS5yZWNvbnN0cnVjdFBhY2tldCh0aGlzLnJlY29uUGFjaywgdGhpcy5idWZmZXJzKTtcbiAgICAgICAgICAgIHRoaXMuZmluaXNoZWRSZWNvbnN0cnVjdGlvbigpO1xuICAgICAgICAgICAgcmV0dXJuIHBhY2tldDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2xlYW5zIHVwIGJpbmFyeSBwYWNrZXQgcmVjb25zdHJ1Y3Rpb24gdmFyaWFibGVzLlxuICAgICAqL1xuICAgIGZpbmlzaGVkUmVjb25zdHJ1Y3Rpb24oKSB7XG4gICAgICAgIHRoaXMucmVjb25QYWNrID0gbnVsbDtcbiAgICAgICAgdGhpcy5idWZmZXJzID0gW107XG4gICAgfVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmhhc0JpbmFyeSA9IGV4cG9ydHMuaXNCaW5hcnkgPSB2b2lkIDA7XG5jb25zdCB3aXRoTmF0aXZlQXJyYXlCdWZmZXIgPSB0eXBlb2YgQXJyYXlCdWZmZXIgPT09IFwiZnVuY3Rpb25cIjtcbmNvbnN0IGlzVmlldyA9IChvYmopID0+IHtcbiAgICByZXR1cm4gdHlwZW9mIEFycmF5QnVmZmVyLmlzVmlldyA9PT0gXCJmdW5jdGlvblwiXG4gICAgICAgID8gQXJyYXlCdWZmZXIuaXNWaWV3KG9iailcbiAgICAgICAgOiBvYmouYnVmZmVyIGluc3RhbmNlb2YgQXJyYXlCdWZmZXI7XG59O1xuY29uc3QgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuY29uc3Qgd2l0aE5hdGl2ZUJsb2IgPSB0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiIHx8XG4gICAgKHR5cGVvZiBCbG9iICE9PSBcInVuZGVmaW5lZFwiICYmXG4gICAgICAgIHRvU3RyaW5nLmNhbGwoQmxvYikgPT09IFwiW29iamVjdCBCbG9iQ29uc3RydWN0b3JdXCIpO1xuY29uc3Qgd2l0aE5hdGl2ZUZpbGUgPSB0eXBlb2YgRmlsZSA9PT0gXCJmdW5jdGlvblwiIHx8XG4gICAgKHR5cGVvZiBGaWxlICE9PSBcInVuZGVmaW5lZFwiICYmXG4gICAgICAgIHRvU3RyaW5nLmNhbGwoRmlsZSkgPT09IFwiW29iamVjdCBGaWxlQ29uc3RydWN0b3JdXCIpO1xuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgb2JqIGlzIGEgQnVmZmVyLCBhbiBBcnJheUJ1ZmZlciwgYSBCbG9iIG9yIGEgRmlsZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBpc0JpbmFyeShvYmopIHtcbiAgICByZXR1cm4gKCh3aXRoTmF0aXZlQXJyYXlCdWZmZXIgJiYgKG9iaiBpbnN0YW5jZW9mIEFycmF5QnVmZmVyIHx8IGlzVmlldyhvYmopKSkgfHxcbiAgICAgICAgKHdpdGhOYXRpdmVCbG9iICYmIG9iaiBpbnN0YW5jZW9mIEJsb2IpIHx8XG4gICAgICAgICh3aXRoTmF0aXZlRmlsZSAmJiBvYmogaW5zdGFuY2VvZiBGaWxlKSk7XG59XG5leHBvcnRzLmlzQmluYXJ5ID0gaXNCaW5hcnk7XG5mdW5jdGlvbiBoYXNCaW5hcnkob2JqLCB0b0pTT04pIHtcbiAgICBpZiAoIW9iaiB8fCB0eXBlb2Ygb2JqICE9PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKEFycmF5LmlzQXJyYXkob2JqKSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgbCA9IG9iai5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChoYXNCaW5hcnkob2JqW2ldKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKGlzQmluYXJ5KG9iaikpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmIChvYmoudG9KU09OICYmXG4gICAgICAgIHR5cGVvZiBvYmoudG9KU09OID09PSBcImZ1bmN0aW9uXCIgJiZcbiAgICAgICAgYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICByZXR1cm4gaGFzQmluYXJ5KG9iai50b0pTT04oKSwgdHJ1ZSk7XG4gICAgfVxuICAgIGZvciAoY29uc3Qga2V5IGluIG9iaikge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSAmJiBoYXNCaW5hcnkob2JqW2tleV0pKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5leHBvcnRzLmhhc0JpbmFyeSA9IGhhc0JpbmFyeTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGFscGhhYmV0ID0gJzAxMjM0NTY3ODlBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6LV8nLnNwbGl0KCcnKVxuICAsIGxlbmd0aCA9IDY0XG4gICwgbWFwID0ge31cbiAgLCBzZWVkID0gMFxuICAsIGkgPSAwXG4gICwgcHJldjtcblxuLyoqXG4gKiBSZXR1cm4gYSBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSBzcGVjaWZpZWQgbnVtYmVyLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBudW0gVGhlIG51bWJlciB0byBjb252ZXJ0LlxuICogQHJldHVybnMge1N0cmluZ30gVGhlIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgbnVtYmVyLlxuICogQGFwaSBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gZW5jb2RlKG51bSkge1xuICB2YXIgZW5jb2RlZCA9ICcnO1xuXG4gIGRvIHtcbiAgICBlbmNvZGVkID0gYWxwaGFiZXRbbnVtICUgbGVuZ3RoXSArIGVuY29kZWQ7XG4gICAgbnVtID0gTWF0aC5mbG9vcihudW0gLyBsZW5ndGgpO1xuICB9IHdoaWxlIChudW0gPiAwKTtcblxuICByZXR1cm4gZW5jb2RlZDtcbn1cblxuLyoqXG4gKiBSZXR1cm4gdGhlIGludGVnZXIgdmFsdWUgc3BlY2lmaWVkIGJ5IHRoZSBnaXZlbiBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0ciBUaGUgc3RyaW5nIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBUaGUgaW50ZWdlciB2YWx1ZSByZXByZXNlbnRlZCBieSB0aGUgc3RyaW5nLlxuICogQGFwaSBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gZGVjb2RlKHN0cikge1xuICB2YXIgZGVjb2RlZCA9IDA7XG5cbiAgZm9yIChpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgIGRlY29kZWQgPSBkZWNvZGVkICogbGVuZ3RoICsgbWFwW3N0ci5jaGFyQXQoaSldO1xuICB9XG5cbiAgcmV0dXJuIGRlY29kZWQ7XG59XG5cbi8qKlxuICogWWVhc3Q6IEEgdGlueSBncm93aW5nIGlkIGdlbmVyYXRvci5cbiAqXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBBIHVuaXF1ZSBpZC5cbiAqIEBhcGkgcHVibGljXG4gKi9cbmZ1bmN0aW9uIHllYXN0KCkge1xuICB2YXIgbm93ID0gZW5jb2RlKCtuZXcgRGF0ZSgpKTtcblxuICBpZiAobm93ICE9PSBwcmV2KSByZXR1cm4gc2VlZCA9IDAsIHByZXYgPSBub3c7XG4gIHJldHVybiBub3cgKycuJysgZW5jb2RlKHNlZWQrKyk7XG59XG5cbi8vXG4vLyBNYXAgZWFjaCBjaGFyYWN0ZXIgdG8gaXRzIGluZGV4LlxuLy9cbmZvciAoOyBpIDwgbGVuZ3RoOyBpKyspIG1hcFthbHBoYWJldFtpXV0gPSBpO1xuXG4vL1xuLy8gRXhwb3NlIHRoZSBgeWVhc3RgLCBgZW5jb2RlYCBhbmQgYGRlY29kZWAgZnVuY3Rpb25zLlxuLy9cbnllYXN0LmVuY29kZSA9IGVuY29kZTtcbnllYXN0LmRlY29kZSA9IGRlY29kZTtcbm1vZHVsZS5leHBvcnRzID0geWVhc3Q7XG4iLCJpbXBvcnQgeyAkIH0gZnJvbSAnLi9jb3JlL2xpYi9kb20nO1xuaW1wb3J0IHsgcGFyZW50cywgZmFkZU91dCB9IGZyb20gJy4vY29yZS9saWIvZG9tJztcbmltcG9ydCB7IHBsYXllclJlZiB9IGZyb20gJy4vZGF0YSdcblxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdFVJKHNvY2tldCkge1xuICAvLyBzdGF0dXNcbiAgbGV0IGdhbWVDcmVhdGVkLCBqb2luZWQsIG5hbWVDb25maXJtZWQsIGdhbWVTdGFydGVkO1xuICAvLyBxdWVyeSBFbGVtZW50c1xuICBsZXQgY3JlYXRlR2FtZUJ0biA9ICQoJyNjcmVhdGUtZ2FtZScpOyAgLy8gIGJpbmRFdmVudCA6IGdhbWVDcmVhdGVkXG4gIGxldCBzaG93Sm9pbkdhbWVQcm9tcHRCdG4gPSAkKCcjc2hvdy1qb2luLWdhbWUtcHJvbXB0Jyk7IC8vICBiaW5kRXZlbnRcbiAgbGV0IGNvbmZpcm1Kb2luR2FtZUJ0biA9ICQoJyNjb25maXJtLWpvaW4tZ2FtZScpOyAvLyAgYmluZEV2ZW50OiBqb2luZWRcbiAgbGV0IHJvb21Db2RlSW5wdXQgPSAkKCcjcm9vbS1jb2RlLWlucHV0Jyk7XG4gIGxldCByb29tQ29kZURpc3BsYXkgPSAkKCcjcm9vbS1jb2RlLWRpc3BsYXknKTtcbiAgbGV0IG5hbWVJbnB1dCA9ICQoJyNuYW1lLWlucHV0Jyk7XG4gIGxldCBuYW1lQ29uZmlybSA9ICQoJyNuYW1lLWNvbmZpcm0nKTsgLy8gIGJpbmRFdmVudCBuYW1lQ29uZmlybWVkXG4gIGxldCBsZWF2ZVdhaXRpbmdCdG4gPSAkKCcjbGVhdmUtd2FpdGluZycpOyAvLyAgYmluZEV2ZW50XG4gIGxldCBsZWF2ZUdhbWVTdGFydEFsZXJ0ID0gJCgnI2xlYXZlLWdhbWUtc3RhcnQtYWxlcnQnKTsgLy8gIGJpbmRFdmVudFxuICBsZXQgZ2FtZVN0YXJ0ID0gJCgnI2dhbWUtc3RhcnQnKTsgLy8gIGJpbmRFdmVudFxuXG4gIC8vIOW7uueriyBpbmlVSSBQcm9taXNlIFxuICBsZXQgaW5pdFRyaWdnZXI7XG4gIGxldCBpbml0VUlQcm9taXNlID0gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XG4gICAgaW5pdFRyaWdnZXIgPSByZXM7XG4gIH0pXG5cbiAgLy8uLi7mloflrZdcbiAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXJvbGU9XCIuLi5cIl0nKS5mb3JFYWNoKGVsZSA9PiB7XG4gICAgICBpZiAoZWxlLmlubmVySFRNTC5sZW5ndGggPCAzKSB7XG4gICAgICAgIGVsZS5pbm5lckhUTUwgKz0gJy4nXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgZWxlLmlubmVySFRNTCA9ICcnXG4gICAgICB9XG4gICAgfSlcbiAgfSwgNTAwKVxuXG4gIC8v57aB5a6a6Zec6ZaJcG9wb3V0XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tjbG9zZS10aGlzLXBvcG91dF0nKS5mb3JFYWNoKGVsZSA9PiB7XG4gICAgbGV0IHBhcmVudFBvcG91dHMgPSBwYXJlbnRzKGVsZSwgJy5wb3BvdXQnKTtcbiAgICBlbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0b2dnbGVQb3BvdXQocGFyZW50UG9wb3V0c1swXS5pZCwgZmFsc2UpO1xuICAgIH0pXG4gIH0pXG5cblxuICAvLyDlrqPlkYogZmxhZywg55uu55qE5piv55So5L6G5Yik5a6a5Yiw5bqVbmFtZVByb21wdCDmmK/lvp7lk6rkuIDlgIvnrqHpgZPljrtjYWxs5Ye65L6G55qEXG4gIGxldCBmbGFnO1xuXG5cbiAgLy/ntoHlrprnorroqo3pgIHlh7rmjInpiJXnmoTpu57mk4rkuovku7ZcbiAgbmFtZUNvbmZpcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYgKG5hbWVDb25maXJtZWQgfHwgZ2FtZUNyZWF0ZWQgfHwgam9pbmVkKSByZXR1cm47XG4gICAgbGV0IG5hbWUgPSBuYW1lSW5wdXQudmFsdWUgPyBuYW1lSW5wdXQudmFsdWUgOiBwbGF5ZXJSZWYubmFtZTtcbiAgICBjb25maXJtTmFtZShzb2NrZXQsIG5hbWUpO1xuICAgIGlmIChmbGFnID09PSAnb25Kb2luJykge1xuICAgICAgdG9nZ2xlUG9wb3V0KCdqb2luLWdhbWUtcHJvbXB0JywgdHJ1ZSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGZsYWcgPT09ICdvbkNyZWF0ZScpIHtcbiAgICAgIGlmICghZ2FtZUNyZWF0ZWQpIHtcbiAgICAgICAgbmV3R2FtZShzb2NrZXQpO1xuICAgICAgICBnYW1lQ3JlYXRlZCA9IHRydWU7XG4gICAgICAgIGpvaW5lZCA9IHRydWU7XG4gICAgICAgIG5hbWVDb25maXJtZWQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cbiAgfSlcblxuICAvL+e2geWumuaMiemIlem7nuaTiuW+jOmWi+WVn25hbWUtaW5wdXQtcHJvbXB0ID0+IGpvaW5HYW1lIHByb21wdFxuICBzaG93Sm9pbkdhbWVQcm9tcHRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZmxhZyA9ICdvbkpvaW4nO1xuICAgIHRvZ2dsZVBvcG91dCgnbmFtZS1pbnB1dC1wcm9tcHQnLCB0cnVlKTtcbiAgfSk7XG5cbiAgLy/ntoHlrprmjInpiJXpu57mk4rlvozpgIHlh7rmg7Plj4PliqDnmoTmiL/plpPnorznmoTkuovku7ZcbiAgY29uZmlybUpvaW5HYW1lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmICgham9pbmVkKSB7XG4gICAgICBsZXQgcm9vbUNvZGUgPSByb29tQ29kZUlucHV0LnZhbHVlO1xuICAgICAgY29uZmlybUpvaW5HYW1lKHNvY2tldCwgcm9vbUNvZGUpO1xuICAgICAgam9pbmVkID0gdHJ1ZTtcbiAgICAgIGdhbWVDcmVhdGVkID0gdHJ1ZTtcbiAgICAgIG5hbWVDb25maXJtZWQgPSB0cnVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH0pXG5cbiAgLy/ntoHlrprmjInpiJXpu57mk4rlvozplovllZ9uYW1lLWlucHV0LXByb21wdCA9PiBuZXdHYW1lIHByb21wdFxuICBjcmVhdGVHYW1lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGZsYWcgPSAnb25DcmVhdGUnO1xuICAgIHRvZ2dsZVBvcG91dCgnbmFtZS1pbnB1dC1wcm9tcHQnLCB0cnVlKTtcbiAgfSk7XG5cbiAgLy/ntoHlrprnrKzkuIDpm6LplovmjInpiJVcbiAgbGVhdmVXYWl0aW5nQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHNvY2tldC5lbWl0KCdsZWF2ZVdhaXRpbmcnKTtcbiAgICBnYW1lQ3JlYXRlZCA9IGZhbHNlO1xuICAgIGpvaW5lZCA9IGZhbHNlO1xuICAgIG5hbWVDb25maXJtZWQgPSBmYWxzZTtcbiAgICB0b2dnbGVQb3BvdXQoJ3Jvb20tY29kZS1kaXNwbGF5LXBvcG91dCcsIGZhbHNlKTtcbiAgfSlcbiAgLy/ntoHlrprnrKzkuozpm6LplovmjInpiJVcbiAgbGVhdmVHYW1lU3RhcnRBbGVydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBzb2NrZXQuZW1pdCgnbGVhdmVTdGFydGluZ0dhbWUnLCBwbGF5ZXJSZWYpO1xuICAgIHRvZ2dsZVBvcG91dCgnZ2FtZS1zdGFydC1hbGVydCcsIGZhbHNlKTtcbiAgfSlcblxuICBnYW1lU3RhcnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYgKCFnYW1lU3RhcnRlZCkge1xuICAgICAgc29ja2V0LmVtaXQoJ3N0YXJ0TWF0Y2gnKTtcbiAgICAgIGdhbWVTdGFydGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gIH0pXG5cbiAgLy/ntoHlrprnlbZzZXJ2ZXLlgrPkvoYnZ2VuUm9vbUNvZGUn6KiK6Jmf5b6M77yMdWkg5oeJ55Si55Sf55qE5bCN5oeJ6KGM54K6XG4gIHNvY2tldC5vbignZ2VuUm9vbUNvZGUnLCAoZGF0YSkgPT4ge1xuICAgIHJvb21Db2RlRGlzcGxheS5pbm5lckhUTUwgPSBkYXRhO1xuICB9KVxuXG4gIC8v57aB5a6a55W2c2VydmVy5YKz5L6GJ3BsYXllckpvaW5lZCfoqIromZ/lvozvvIx1aSDmh4nnlKLnlJ/nmoTlsI3mh4nooYzngrpcbiAgc29ja2V0Lm9uKCdwbGF5ZXJKb2luZWQnLCAoZGF0YSkgPT4ge1xuICAgIGlmIChkYXRhLnBsYXllck51bWJlciA9PT0gMikge1xuICAgICAgaWYgKHBsYXllclJlZi5udW1iZXIgPT0gMSkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1yb2xlPVwib3Bwb25lbnRcIl0nKS5mb3JFYWNoKGVsZSA9PiB7XG4gICAgICAgICAgZWxlLmlubmVySFRNTCA9IGBZT1VSIE9QUE9ORU5UICR7ZGF0YS5wbGF5ZXJOYW1lfSBTSE9XUyBVUCFgXG4gICAgICAgIH0pO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1yb2xlPVwicGxheWVyMlwiXScpLmZvckVhY2goZWxlID0+IHtcbiAgICAgICAgICBlbGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHBsYXllclJlZi5udW1iZXIgPT0gMikge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1yb2xlPVwib3Bwb25lbnRcIl0nKS5mb3JFYWNoKGVsZSA9PiB7XG4gICAgICAgICAgZWxlLmlubmVySFRNTCA9IGBXQUlUSU5HIEZPUiBUSEUgUk9PTSBIT1NUPGJyPjxicj4ke2RhdGEuaG9zdE5hbWV9PGJyPjxicj5UTyBBQ0NFUFQgWU9VUiBDSEFMTEVOR0U8c3BhbiBkYXRhLXJvbGU9XCIuLi5cIj48L3NwYW4+YFxuICAgICAgICB9KTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtcm9sZT1cInBsYXllcjFcIl0nKS5mb3JFYWNoKGVsZSA9PiB7XG4gICAgICAgICAgZWxlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICB0b2dnbGVQb3BvdXQoJ3Jvb20tY29kZS1kaXNwbGF5LXBvcG91dCcsIGZhbHNlKTtcbiAgICAgIHRvZ2dsZVBvcG91dCgnam9pbi1nYW1lLXByb21wdCcsIGZhbHNlKTtcbiAgICAgIHRvZ2dsZVBvcG91dCgnZ2FtZS1zdGFydC1hbGVydCcsIHRydWUpO1xuICAgIH1cbiAgfSlcblxuICBzb2NrZXQub24oJ2hvc3QtbGVhdmUnLCAoZGF0YSkgPT4ge1xuICAgIHRvZ2dsZVBvcG91dCgnZ2FtZS1zdGFydC1hbGVydCcsIGZhbHNlKTtcbiAgICB0b2dnbGVQb3BvdXQoJ2xlYXZlLWFsZXJ0JywgdHJ1ZSk7XG4gICAgZ2FtZVN0YXJ0ZWQgPSBmYWxzZTtcbiAgICBqb2luZWQgPSBmYWxzZTtcbiAgICBuYW1lQ29uZmlybWVkID0gZmFsc2U7XG4gICAgZ2FtZUNyZWF0ZWQgPSBmYWxzZTtcblxuICAgICQoJ1tkYXRhLXJvbGU9XCJsZWF2ZS1tc2dcIl0nKS5pbm5lckhUTUwgPSBgSE9TVCAke2RhdGEuaG9zdH0gTEVGVCBBTkQgU0hVVERPV04gVEhFIFJPT00uYFxuICB9KVxuXG4gIHNvY2tldC5vbignY2hhbGxlbmdlci1sZWF2ZScsIChkYXRhKSA9PiB7XG4gICAgdG9nZ2xlUG9wb3V0KCdnYW1lLXN0YXJ0LWFsZXJ0JywgZmFsc2UpO1xuICAgIHRvZ2dsZVBvcG91dCgnbGVhdmUtYWxlcnQnLCB0cnVlKTtcbiAgICB0b2dnbGVQb3BvdXQoJ3Jvb20tY29kZS1kaXNwbGF5LXBvcG91dCcsIHRydWUpO1xuICAgIGdhbWVTdGFydGVkID0gZmFsc2U7XG4gICAgam9pbmVkID0gZmFsc2U7XG4gICAgbmFtZUNvbmZpcm1lZCA9IGZhbHNlO1xuICAgIGdhbWVDcmVhdGVkID0gZmFsc2U7XG5cbiAgICAkKCdbZGF0YS1yb2xlPVwibGVhdmUtbXNnXCJdJykuaW5uZXJIVE1MID0gYENIQUxMRU5HRVIgJHtkYXRhLmNoYWxsZW5nZXJ9IExFRlQgVEhJUyBNQVRDSC5gXG4gIH0pXG5cbiAgc29ja2V0Lm9uKCdsZWF2ZScsICgpID0+IHtcbiAgICBnYW1lU3RhcnRlZCA9IGZhbHNlO1xuICAgIGpvaW5lZCA9IGZhbHNlO1xuICAgIG5hbWVDb25maXJtZWQgPSBmYWxzZTtcbiAgICBnYW1lQ3JlYXRlZCA9IGZhbHNlO1xuICB9KVxuXG4gIC8v57aB5a6a55W2c2VydmVy5YKz5L6GJ2dhbWVJbml0J+ioiuiZn+W+jO+8jHVpIOaHieeUoueUn+eahOWwjeaHieihjOeCulxuICBzb2NrZXQub24oJ2dhbWVJbml0JywgKCkgPT4ge1xuICAgIHRvZ2dsZVBvcG91dCgnZ2FtZS1zdGFydC1hbGVydCcsIGZhbHNlKTtcbiAgfSlcblxuXG4gIC8vIOinuOeZvCBwcm9taXNlIGZ1bGxmaWxs5qmf5Yi2XG4gIGluaXRUcmlnZ2VyKCk7XG5cbiAgLy8g5Zue5YKzIGZ1bGxmaWxs5b6M55qEcHJvbWlzZVxuICByZXR1cm4gaW5pdFVJUHJvbWlzZTtcbn1cblxuLyoqXG4gKiDplovllZ8gcG9wb3V0XG4gKlxuICogQHBhcmFtIHsqfSBpZFxuICogQHBhcmFtIHsqfSBzdGF0dXNcbiAqL1xuZnVuY3Rpb24gdG9nZ2xlUG9wb3V0KGlkLCBzdGF0dXMpIHtcbiAgbGV0IHBvcG91dCA9ICQoYC5wb3BvdXQjJHtpZH1gKTtcbiAgaWYgKHN0YXR1cykge1xuICAgIHBvcG91dC5jbGFzc0xpc3QuYWRkKCdwb3BvdXQtLXNob3cnKTtcbiAgfVxuICBlbHNlIHtcbiAgICBwb3BvdXQuY2xhc3NMaXN0LnJlbW92ZSgncG9wb3V0LS1zaG93Jyk7XG4gIH1cbn1cbi8qKlxuICog6Zqx6JeP6LW35aeL55Wr6Z2iXG4gKlxuICovXG5mdW5jdGlvbiBoaWRlSW5pdGlhbFNjcmVlbigpIHtcbiAgbGV0IGluaXRpYWxTY3JlZW4gPSAkKCcjaW5pdGlhbC1zY3JlZW4nKTtcbiAgaW5pdGlhbFNjcmVlbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufVxuLyoqXG4gKiAg6ZaL6Zec5YW35pyJaGlkZS1vbi1hY3Rpb27lsazmgKfnmoR1aSBlbGVtZW50LFxuICpcbiAqIEBwYXJhbSB7Kn0gc3RhdHVzXG4gKi9cbmZ1bmN0aW9uIHRvZ2dsZUhpZGVPbkFjdGlvbihzdGF0dXMpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2hpZGUtb24tYWN0aW9uXScpLmZvckVhY2goZWxlID0+IHtcbiAgICBlbGUuc2V0QXR0cmlidXRlKCdoaWRlLW9uLWFjdGlvbicsIHN0YXR1cyA/ICcnIDogJ2hpZGUnKTtcbiAgfSlcbn1cbi8qKlxuICog6ZaL6Zec5YW35pyJc2hvdy1vbi1mdWxs5bGs5oCn55qEdWkgZWxlbWVudCxcbiAqXG4gKiBAcGFyYW0geyp9IHN0YXR1c1xuICovXG5mdW5jdGlvbiB0b2dnbGVTaG93T25BY3Rpb24oc3RhdHVzKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tzaG93LW9uLWFjdGlvbl0nKS5mb3JFYWNoKGVsZSA9PiB7XG4gICAgZWxlLnNldEF0dHJpYnV0ZSgnc2hvdy1vbi1hY3Rpb24nLCBzdGF0dXMgPyAnJyA6ICdoaWRlJyk7XG4gIH0pXG59XG5cblxuLyoqXG4gKiDlu7rnq4vmlrDpgYrmiLJcbiAqXG4gKiBAcGFyYW0geyp9IHNvY2tldFxuICovXG5mdW5jdGlvbiBuZXdHYW1lKHNvY2tldCkge1xuICBwbGF5ZXJSZWYubnVtYmVyID0gMTtcbiAgdG9nZ2xlUG9wb3V0KCdyb29tLWNvZGUtZGlzcGxheS1wb3BvdXQnLCB0cnVlKTtcbiAgc29ja2V0LmVtaXQoJ25ld0dhbWUnKTtcbn1cbi8qKlxuICog5ZCRc2VydmVy55m85Ye656K66KqN5Y+D5Yqg6YGK5oiy55qE5L+h6JmfXG4gKlxuICogQHBhcmFtIHsqfSBzb2NrZXRcbiAqIEBwYXJhbSB7Kn0gcm9vbUNvZGVcbiAqL1xuZnVuY3Rpb24gY29uZmlybUpvaW5HYW1lKHNvY2tldCwgcm9vbUNvZGUpIHtcbiAgcGxheWVyUmVmLm51bWJlciA9IDI7XG4gIHNvY2tldC5lbWl0KCdqb2luR2FtZScsIHJvb21Db2RlKTtcbn1cbi8qKlxuICogXG4gKiDnorroqo3ovLjlhaXnmoTmmrHnqLHlvozvvIzmiorpgYrmiLLlhafmiYDmnIlkYXRhLXJvbGU9XCJuYW1lXCIg55qEIGVsZW1lbnQsIOWFp+WuuemDveaPm+aIkOi8uOWFpeeahG5hbWUsIOS4puWQjOaZguWQkXNlcnZlcueZvOmAgSduYW1lQ29uZmlybSfnmoToqIromZ9cbiAqIOacgOW+jOmXnOmWiW5hbWUtaW5wdXQtcHJvbXB0XG4gKiBAcGFyYW0geyp9IHNvY2tldFxuICogQHBhcmFtIHsqfSBuYW1lXG4gKiBAcGFyYW0geyp9IGNiXG4gKi9cbmZ1bmN0aW9uIGNvbmZpcm1OYW1lKHNvY2tldCwgbmFtZSwgY2IpIHtcbiAgcGxheWVyUmVmLm5hbWUgPSBuYW1lO1xuICBzb2NrZXQuZW1pdCgnbmFtZUNvbmZpcm0nLCBuYW1lKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgW2RhdGEtcm9sZT1cIm5hbWVcIl1gKS5mb3JFYWNoKChvLCBpKSA9PiB7XG4gICAgby5pbm5lckhUTUwgPSBuYW1lO1xuICB9KVxuICB0b2dnbGVQb3BvdXQoJ25hbWUtaW5wdXQtcHJvbXB0JywgZmFsc2UpO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBzdGFydENvdW50aW5nKGNiKSB7XG4gIGxldCBnYyA9ICQoJyNnYW1lLXN0YXJ0LWNvdW50aW5nJyk7XG4gIGdjLmNsYXNzTGlzdC5hZGQoJ2dhbWUtc3RhcnQtY291bnRpbmctLXNob3cnKTtcbiAgbGV0IG51bWJlciA9IGdjLnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLXN0YXJ0LWNvdW50aW5nX19udW1iZXInKTtcbiAgbnVtYmVyLmlubmVySFRNTCA9IDM7XG4gIGxldCB0aW1lSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgaWYgKHBhcnNlSW50KG51bWJlci5pbm5lckhUTUwpID4gMCkge1xuICAgICAgbnVtYmVyLmlubmVySFRNTCA9IHBhcnNlSW50KG51bWJlci5pbm5lckhUTUwpIC0gMTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBjbGVhckludGVydmFsKHRpbWVJbnRlcnZhbCk7XG4gICAgICBmYWRlT3V0KGdjLCAxMDAwLCAoKSA9PiB7XG4gICAgICAgIGdjLmNsYXNzTGlzdC5yZW1vdmUoJ2dhbWUtc3RhcnQtY291bnRpbmctLXNob3cnKTtcbiAgICAgIH0pXG4gICAgICBjYigpO1xuICAgIH1cbiAgfSwgMTAwMClcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBpbml0VUksIHN0YXJ0Q291bnRpbmcgfSBmcm9tICcuL3VpJztcbmltcG9ydCB7IGluaXRTcGxhc2ggfSBmcm9tICcuL2NvcmUvc3BsYXNoJztcbmltcG9ydCB7IGdhbWVCdWlsZGVyIH0gZnJvbSAnLi9jb3JlL2dhbWUnO1xuXG5cbmNvbnN0IHNvY2tldCA9IHJlcXVpcmUoJ3NvY2tldC5pby1jbGllbnQnKSgnaHR0cDovL2xvY2FsaG9zdDozMDAwJyk7XG5cbmluaXRTcGxhc2goKTtcblxubGV0IHVpSW5pdFByb21pc2UgPSBpbml0VUkoc29ja2V0KTtcbmxldCBnYW1lID0gZ2FtZUJ1aWxkZXIoKTtcbmxldCBnYW1lQ29udG9sbGVyO1xuXG51aUluaXRQcm9taXNlLnRoZW4oKCkgPT4ge1xuICBnYW1lLnRyaWdnZXIoKTtcbn0pXG5cbmdhbWUucHJvbWlzZS50aGVuKChpbnN0YW5jZSkgPT4ge1xuICBnYW1lQ29udG9sbGVyID0gaW5zdGFuY2U7XG4gIHdpbmRvdy5rayA9ICgpID0+IHtcbiAgICBnYW1lQ29udG9sbGVyLmN2cy5jbGFzc0xpc3QuYWRkKCdwcm9tb3RlZCcpO1xuICAgIGdhbWVDb250b2xsZXIuZHJhd0dhbWUoKTtcbiAgfVxuXG59KVxuXG5zb2NrZXQub24oJ2dhbWVJbml0JywgKCkgPT4ge1xuICBzdGFydENvdW50aW5nKCgpID0+IHtcbiAgICBnYW1lQ29udG9sbGVyLmN2cy5jbGFzc0xpc3QuYWRkKCdwcm9tb3RlZCcpO1xuICAgIGdhbWVDb250b2xsZXIuZHJhd0NvdXJ0KCk7XG4gIH0pXG59KVxuXG5zb2NrZXQub24oJ2hvc3QtbGVhdmUnLCAoKSA9PiB7XG4gIGdhbWVDb250b2xsZXIuY3ZzLmNsYXNzTGlzdC5yZW1vdmUoJ3Byb21vdGVkJyk7XG59KVxuXG5zb2NrZXQub24oJ2NoYWxsZW5nZXItbGVhdmUnLCAoKSA9PiB7XG4gIGdhbWVDb250b2xsZXIuY3ZzLmNsYXNzTGlzdC5yZW1vdmUoJ3Byb21vdGVkJyk7XG59KVxuXG5zb2NrZXQub24oJ2xlYXZlJywgKCkgPT4ge1xuICBnYW1lQ29udG9sbGVyLmN2cy5jbGFzc0xpc3QucmVtb3ZlKCdwcm9tb3RlZCcpO1xufSlcblxuc29ja2V0Lm9uKCd0b29NYW55UGxheWVycycsICgpID0+IHtcbiAgYWxlcnQoJ+ipsuaIv+S6uuaVuOW3sua7vycpO1xufSlcblxuc29ja2V0Lm9uKCd1bmtub3duQ29kZScsICgpID0+IHtcbiAgYWxlcnQoJ+eEoeaViOeahOaIv+mWk+eivCcpO1xufSlcblxuc29ja2V0Lm9uKCdob3N0Q2FudEJlR3Vlc3QnLCAoKSA9PiB7XG4gIGFsZXJ0KCfmiL/kuLvkuI3og73ph43opIfliqDlhaXoh6rlt7Hplovlpb3nmoTmiL/plpPllpQnKTtcbn0pXG5cblxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sInNvdXJjZVJvb3QiOiIifQ==