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
/* harmony import */ var _lib_shape__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/shape */ "./core/lib/shape.js");
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
  bgColor: 'rgba(0,0,0,0.3)',
  cursor: {
    color: '#fff',
    radius: 50
  }
};
var Engine = /*#__PURE__*/function (_Canvas2DFxBase) {
  _inherits(Engine, _Canvas2DFxBase);

  var _super = _createSuper(Engine);

  function Engine(ele, defaultConfig, config) {
    var _this;

    _classCallCheck(this, Engine);

    _this = _super.call(this, ele, defaultConfig, config);

    _this.init();

    _this.radius = 50;
    return _this;
  }

  _createClass(Engine, [{
    key: "init",
    value: function init() {
      this.background(this.config.bgColor);
    }
  }, {
    key: "draw",
    value: function draw(data, localData) {
      this.background(this.config.bgColor);

      for (var i = 0; i < data.clients.length; i++) {
        (0,_lib_shape__WEBPACK_IMPORTED_MODULE_1__.drawCircle)(this.ctx, data.clients[i].cursor.x, data.clients[i].cursor.y, this.config.cursor.radius, this.config.cursor.color);
        (0,_lib_shape__WEBPACK_IMPORTED_MODULE_1__.drawText)(this.ctx, "Player".concat(i), data.clients[i].cursor.x + this.config.cursor.radius, data.clients[i].cursor.y + this.config.cursor.radius / 2 - 10, '#fff', 12, 'Arial');
      }
    }
  }]);

  return Engine;
}(_lib_base__WEBPACK_IMPORTED_MODULE_0__.Canvas2DFxBase);
function gameBuilder() {
  var game = (0,_lib_base__WEBPACK_IMPORTED_MODULE_0__.boot)(Engine, DEFAULT, {}, false);
  return game;
}

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
  function Canvas2DFxBase(ele, config, defaultConfig) {
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
    this.ctx = null;
    this.frameIsPaused = false;
    this.isClick = false;
    this.canvasSizefixed = false;
    this.previousFrameTime = new Date().getTime();
    this.initBase();
  }

  _createClass(Canvas2DFxBase, [{
    key: "initBase",
    value: function initBase() {
      var _this = this;

      if (this.ele.tagName !== 'CANVAS') {
        var cvs = document.createElement('canvas');
        this.ele.appendChild(cvs);
        this.cvs = this.ele.querySelectorAll('canvas')[0];
        this.canvasWidth = this.ele.getBoundingClientRect().width;
        this.canvasHeight = this.ele.getBoundingClientRect().height;
      } else {
        this.cvs = this.ele;
        this.canvasWidth = this.ele.parentElement.getBoundingClientRect().width;
        this.canvasHeight = this.ele.parentElement.getBoundingClientRect().height;
      }

      this.ctx = this.cvs.getContext('2d');
      this.triggerResizingMechanism();
      window.addEventListener('resize', (0,_function__WEBPACK_IMPORTED_MODULE_0__.debounce)(function () {
        _this.triggerResizingMechanism();
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
    key: "triggerResizingMechanism",
    value: function triggerResizingMechanism() {
      if (this.canvasSizefixed) return;

      if (this.ele.tagName !== 'CANVAS') {
        var canvasWidth = this.ele.getBoundingClientRect().width;
        var canvasHeight = this.ele.getBoundingClientRect().height;
        this.cvs.width = canvasWidth;
        this.cvs.height = canvasHeight;
      } else {
        var _canvasWidth = this.cvs.parentElement.getBoundingClientRect().width;
        var _canvasHeight = this.cvs.parentElement.getBoundingClientRect().height;
        this.cvs.width = _canvasWidth;
        this.cvs.height = _canvasHeight;
      }
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
  }]);

  return Canvas2DFxBase;
}();
function boot(ctor, defaultConfig, config, triggerOnDomContentLoaded) {
  var canvas = document.getElementById('canvas');
  canvas = canvas ? canvas : document.body;
  var bootromise, trigger;

  if (triggerOnDomContentLoaded) {
    bootromise = new Promise(function (res, rej) {
      document.addEventListener('DOMContentLoaded', function () {
        var instance = new ctor(canvas, config, defaultConfig);
        res(instance);
      });
    });
  } else {
    bootromise = new Promise(function (res, rej) {
      trigger = function trigger() {
        var instance = new ctor(canvas, config, defaultConfig);
        res(instance);
      };
    });
  }

  return {
    promise: bootromise,
    start: trigger
  };
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
/* harmony export */   "getChannelValuesFromRgba": function() { return /* binding */ getChannelValuesFromRgba; }
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

/***/ "./data.js":
/*!*****************!*\
  !*** ./data.js ***!
  \*****************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dataStorage": function() { return /* binding */ dataStorage; },
/* harmony export */   "playerNumber": function() { return /* binding */ playerNumber; }
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
var playerNumber = 0;

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
/* harmony export */   "hideInitialScreen": function() { return /* binding */ hideInitialScreen; }
/* harmony export */ });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./data.js");

function initUI(socket) {
  var createGameBtn = document.querySelector('#create-game');
  var showJoinGamePromptBtn = document.querySelector('#show-join-game-prompt');
  var confirmJoinGameBtn = document.querySelector('#confirm-join-game');
  var roomCodeInput = document.querySelector('#room-code-input');
  var initTrigger;
  var initUIPromise = new Promise(function (res, rej) {
    initTrigger = res;
  }); //bind events

  showJoinGamePromptBtn.addEventListener('click', function () {
    showJoinGamePrompt();
  });
  createGameBtn.addEventListener('click', function () {
    newGame(socket);
  });
  confirmJoinGameBtn.addEventListener('click', function () {
    var roomCode = roomCodeInput.value;
    confirmJoinGame(socket, roomCode);
  });
  initTrigger();
  return initUIPromise;
}
function hideInitialScreen() {
  var initialScreen = document.querySelector('#initial-screen');
  initialScreen.style.display = 'none';
}

function showJoinGamePrompt() {}

function newGame(socket) {
  socket.emit('newGame');
  initGame(socket);
}

function confirmJoinGame(socket, roomCode) {
  socket.emit('joinGame', roomCode);
  initGame(socket);
}

function initGame(socket) {
  socket.emit('playerJoined', playerJoinedHandler);
}

function playerJoinedHandler(number) {
  _data__WEBPACK_IMPORTED_MODULE_0__.playerNumber = number;
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
/* harmony import */ var _core_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/game */ "./core/game.js");



var socket = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/build/index.js")('http://localhost:3000');

var uiInitPromise = (0,_ui__WEBPACK_IMPORTED_MODULE_0__.initUI)(socket);
var game = (0,_core_game__WEBPACK_IMPORTED_MODULE_1__.gameBuilder)();
var gameContoller;
uiInitPromise.then(function () {
  game.start();
});
game.promise.then(function (instance) {
  gameContoller = instance;
});
socket.on('greeting', greetingHandler);
socket.on('gameInit', function (playerNumber) {
  (0,_ui__WEBPACK_IMPORTED_MODULE_0__.hideInitialScreen)();
  gameContoller.drawCourt();
});

function greetingHandler() {}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vY29yZS9nYW1lLmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9jb3JlL2xpYi9iYXNlLmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9jb3JlL2xpYi9mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vY29yZS9saWIvc2hhcGUuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL2RhdGEuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9iYWNrbzIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9iYXNlNjQtYXJyYXlidWZmZXIvbGliL2Jhc2U2NC1hcnJheWJ1ZmZlci5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL2NvbXBvbmVudC1lbWl0dGVyL2luZGV4LmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvZGVidWcvbm9kZV9tb2R1bGVzL21zL2luZGV4LmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvZGVidWcvc3JjL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9kZWJ1Zy9zcmMvY29tbW9uLmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9saWIvZ2xvYmFsVGhpcy5icm93c2VyLmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2xpYi9zb2NrZXQuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2xpYi90cmFuc3BvcnQuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2xpYi90cmFuc3BvcnRzL2luZGV4LmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9saWIvdHJhbnNwb3J0cy9wb2xsaW5nLWpzb25wLmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9saWIvdHJhbnNwb3J0cy9wb2xsaW5nLXhoci5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvbGliL3RyYW5zcG9ydHMvcG9sbGluZy5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvbGliL3RyYW5zcG9ydHMvd2Vic29ja2V0LWNvbnN0cnVjdG9yLmJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2xpYi90cmFuc3BvcnRzL3dlYnNvY2tldC5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvbGliL3V0aWwuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2xpYi94bWxodHRwcmVxdWVzdC5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1wYXJzZXIvbGliL2NvbW1vbnMuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tcGFyc2VyL2xpYi9kZWNvZGVQYWNrZXQuYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1wYXJzZXIvbGliL2VuY29kZVBhY2tldC5icm93c2VyLmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLXBhcnNlci9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9oYXMtY29ycy9pbmRleC5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL21lcnNlbm5lLXR3aXN0ZXIvc3JjL21lcnNlbm5lLXR3aXN0ZXIuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9wYXJzZXFzL2luZGV4LmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvcGFyc2V1cmkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tY2xpZW50L2J1aWxkL2luZGV4LmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLWNsaWVudC9idWlsZC9tYW5hZ2VyLmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLWNsaWVudC9idWlsZC9vbi5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1jbGllbnQvYnVpbGQvc29ja2V0LmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLWNsaWVudC9idWlsZC90eXBlZC1ldmVudHMuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tY2xpZW50L2J1aWxkL3VybC5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1wYXJzZXIvZGlzdC9iaW5hcnkuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tcGFyc2VyL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tcGFyc2VyL2Rpc3QvaXMtYmluYXJ5LmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMveWVhc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL3VpLmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL3NyYy9zY3NzL21haW4uc2NzcyJdLCJuYW1lcyI6WyJERUZBVUxUIiwiYmdDb2xvciIsImN1cnNvciIsImNvbG9yIiwicmFkaXVzIiwiRW5naW5lIiwiZWxlIiwiZGVmYXVsdENvbmZpZyIsImNvbmZpZyIsImluaXQiLCJiYWNrZ3JvdW5kIiwiZGF0YSIsImxvY2FsRGF0YSIsImkiLCJjbGllbnRzIiwibGVuZ3RoIiwiZHJhd0NpcmNsZSIsImN0eCIsIngiLCJ5IiwiZHJhd1RleHQiLCJDYW52YXMyREZ4QmFzZSIsImdhbWVCdWlsZGVyIiwiZ2FtZSIsImJvb3QiLCJpcyIsIk9iamVjdCIsImFzc2lnbiIsImZyYW1lQ291bnQiLCJtb3VzZSIsImZyYW1lSXNQYXVzZWQiLCJpc0NsaWNrIiwiY2FudmFzU2l6ZWZpeGVkIiwicHJldmlvdXNGcmFtZVRpbWUiLCJEYXRlIiwiZ2V0VGltZSIsImluaXRCYXNlIiwidGFnTmFtZSIsImN2cyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZENoaWxkIiwicXVlcnlTZWxlY3RvckFsbCIsImNhbnZhc1dpZHRoIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2lkdGgiLCJjYW52YXNIZWlnaHQiLCJoZWlnaHQiLCJwYXJlbnRFbGVtZW50IiwiZ2V0Q29udGV4dCIsInRyaWdnZXJSZXNpemluZ01lY2hhbmlzbSIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJkZWJvdW5jZSIsInZpc2liaWxpdHlTdGF0ZSIsImFkZEV2ZW50SGFuZGxlciIsInJlZnJlc2hCYXNlRnJhbWVDb3VudGVyIiwidGhpc0ZyYW1lVGltZSIsInRpbWVFbGFwc2VkIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwic2F2ZSIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwicmVzdG9yZSIsImNsZWFyUmVjdCIsImUiLCJwb3MiLCJwb2ludGVyRXZlbnRUb1hZIiwiY3RvciIsInRyaWdnZXJPbkRvbUNvbnRlbnRMb2FkZWQiLCJjYW52YXMiLCJnZXRFbGVtZW50QnlJZCIsImJvZHkiLCJib290cm9taXNlIiwidHJpZ2dlciIsIlByb21pc2UiLCJyZXMiLCJyZWoiLCJpbnN0YW5jZSIsInByb21pc2UiLCJzdGFydCIsIk1lcnNlbm5lVHdpc3RlciIsInJlcXVpcmUiLCJNVCIsImZ1bmMiLCJkZWxheSIsInRpbWVyIiwiJHRoaXMiLCJjb250ZXh0IiwiYXJncyIsImFyZ3VtZW50cyIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJhcHBseSIsImFyciIsImEiLCJBcnJheSIsImlzQXJyYXkiLCJvYmoiLCJwcm90b3R5cGUiLCJ0b1N0cmluZyIsImNhbGwiLCJpbmRleE9mIiwicHRoIiwiaGFzT3duUHJvcGVydHkiLCJzdmciLCJTVkdFbGVtZW50IiwiaW5wIiwiSFRNTElucHV0RWxlbWVudCIsImRvbSIsIm5vZGVUeXBlIiwic3RyIiwiZm5jIiwidW5kIiwibmlsIiwiaGV4IiwidGVzdCIsInJnYmEiLCJyZ2IiLCJoc2wiLCJjb2wiLCJrZXkiLCJkZWZhdWx0SW5zdGFuY2VTZXR0aW5ncyIsImRlZmF1bHRUd2VlblNldHRpbmdzIiwicmFuZG9tV2l0aGluUmFuZ2UiLCJtaW4iLCJtYXgiLCJzZWVkIiwicmFuZG9tIiwiZ2V0RGlzdGFuY2UiLCJ4MCIsInkwIiwieDEiLCJ5MSIsIk1hdGgiLCJzcXJ0IiwiZGVncmVlVG9SYWRpYW4iLCJkZWdyZWUiLCJQSSIsIm91dCIsInR5cGUiLCJ0b3VjaCIsIm9yaWdpbmFsRXZlbnQiLCJ0b3VjaGVzIiwiY2hhbmdlZFRvdWNoZXMiLCJwYWdlWCIsInBhZ2VZIiwidGFyZ2V0SGFzUHJvcCIsInRhcmdldCIsInByb3AiLCJpc0VtcHR5IiwidmFsIiwiaXNOYU4iLCJyZ2JUb1JnYmEiLCJyZ2JWYWx1ZSIsImV4ZWMiLCJoZXhUb1JnYmEiLCJoZXhWYWx1ZSIsInJneCIsInJlcGxhY2UiLCJtIiwiciIsImciLCJiIiwicGFyc2VJbnQiLCJoc2xUb1JnYmEiLCJoc2xWYWx1ZSIsImgiLCJzIiwibCIsImh1ZTJyZ2IiLCJwIiwicSIsInQiLCJjb2xvclRvUmdiYSIsImdldENoYW5uZWxWYWx1ZXNGcm9tUmdiYSIsInNwbGl0IiwibWFwIiwiZHJhd1NxdWFyZSIsImFscGhhIiwiZ2xvYmFsQWxwaGEiLCJiZWdpblBhdGgiLCJhcmMiLCJjbG9zZVBhdGgiLCJmaWxsIiwiZHJhd0xpbmUiLCJzdHJva2VDb2xvciIsInN0cm9rZVdpZHRoIiwic3Ryb2tlU3R5bGUiLCJsaW5lV2lkdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJzdHJva2UiLCJ0ZXh0Q29udGVudCIsImZvbnRTaXplIiwiZm9udCIsImZpbGxUZXh0IiwiZGF0YVN0b3JhZ2UiLCJiYWxsIiwic3BlZWQiLCJwb3NpdGlvbiIsInBsYXllck51bWJlciIsIm1vZHVsZSIsImV4cG9ydHMiLCJCYWNrb2ZmIiwib3B0cyIsIm1zIiwiZmFjdG9yIiwiaml0dGVyIiwiYXR0ZW1wdHMiLCJkdXJhdGlvbiIsInBvdyIsInJhbmQiLCJkZXZpYXRpb24iLCJmbG9vciIsInJlc2V0Iiwic2V0TWluIiwic2V0TWF4Iiwic2V0Sml0dGVyIiwiY2hhcnMiLCJhcnJheWJ1ZmZlciIsImJ5dGVzIiwiVWludDhBcnJheSIsImxlbiIsImJhc2U2NCIsInN1YnN0cmluZyIsImJ1ZmZlckxlbmd0aCIsImVuY29kZWQxIiwiZW5jb2RlZDIiLCJlbmNvZGVkMyIsImVuY29kZWQ0IiwiQXJyYXlCdWZmZXIiLCJFbWl0dGVyIiwibWl4aW4iLCJvbiIsImV2ZW50IiwiZm4iLCJfY2FsbGJhY2tzIiwicHVzaCIsIm9uY2UiLCJvZmYiLCJyZW1vdmVMaXN0ZW5lciIsInJlbW92ZUFsbExpc3RlbmVycyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjYWxsYmFja3MiLCJjYiIsInNwbGljZSIsImVtaXQiLCJzbGljZSIsImxpc3RlbmVycyIsImhhc0xpc3RlbmVycyIsImQiLCJ3Iiwib3B0aW9ucyIsInBhcnNlIiwiaXNGaW5pdGUiLCJsb25nIiwiZm10TG9uZyIsImZtdFNob3J0IiwiRXJyb3IiLCJKU09OIiwic3RyaW5naWZ5IiwiU3RyaW5nIiwibWF0Y2giLCJuIiwicGFyc2VGbG9hdCIsInRvTG93ZXJDYXNlIiwidW5kZWZpbmVkIiwibXNBYnMiLCJhYnMiLCJyb3VuZCIsInBsdXJhbCIsIm5hbWUiLCJpc1BsdXJhbCIsImZvcm1hdEFyZ3MiLCJsb2FkIiwidXNlQ29sb3JzIiwibG9jYWxzdG9yYWdlIiwid2FybmVkIiwiY29uc29sZSIsIndhcm4iLCJwcm9jZXNzIiwiX19ud2pzIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiZG9jdW1lbnRFbGVtZW50Iiwic3R5bGUiLCJXZWJraXRBcHBlYXJhbmNlIiwiZmlyZWJ1ZyIsImV4Y2VwdGlvbiIsInRhYmxlIiwiUmVnRXhwIiwiJDEiLCJuYW1lc3BhY2UiLCJodW1hbml6ZSIsImRpZmYiLCJjIiwiaW5kZXgiLCJsYXN0QyIsImRlYnVnIiwibG9nIiwibmFtZXNwYWNlcyIsInN0b3JhZ2UiLCJzZXRJdGVtIiwicmVtb3ZlSXRlbSIsImVycm9yIiwiZ2V0SXRlbSIsImVudiIsIkRFQlVHIiwibG9jYWxTdG9yYWdlIiwiZm9ybWF0dGVycyIsImoiLCJ2IiwibWVzc2FnZSIsInNldHVwIiwiY3JlYXRlRGVidWciLCJkZWZhdWx0IiwiY29lcmNlIiwiZGlzYWJsZSIsImVuYWJsZSIsImVuYWJsZWQiLCJkZXN0cm95Iiwia2V5cyIsImZvckVhY2giLCJuYW1lcyIsInNraXBzIiwic2VsZWN0Q29sb3IiLCJoYXNoIiwiY2hhckNvZGVBdCIsImNvbG9ycyIsInByZXZUaW1lIiwiZW5hYmxlT3ZlcnJpZGUiLCJzZWxmIiwiY3VyciIsIk51bWJlciIsInByZXYiLCJ1bnNoaWZ0IiwiZm9ybWF0IiwiZm9ybWF0dGVyIiwibG9nRm4iLCJleHRlbmQiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJnZXQiLCJzZXQiLCJkZWxpbWl0ZXIiLCJuZXdEZWJ1ZyIsInN1YnN0ciIsInRvTmFtZXNwYWNlIiwiam9pbiIsInJlZ2V4cCIsInN0YWNrIiwiRnVuY3Rpb24iLCJTb2NrZXQiLCJ1cmkiLCJwcm90b2NvbCIsInRyYW5zcG9ydHMiLCJwYXJzZXIiLCJwYXJzZXVyaSIsInBhcnNlcXMiLCJob3N0bmFtZSIsImhvc3QiLCJzZWN1cmUiLCJwb3J0IiwicXVlcnkiLCJsb2NhdGlvbiIsInJlYWR5U3RhdGUiLCJ3cml0ZUJ1ZmZlciIsInByZXZCdWZmZXJMZW4iLCJwYXRoIiwiYWdlbnQiLCJ3aXRoQ3JlZGVudGlhbHMiLCJ1cGdyYWRlIiwianNvbnAiLCJ0aW1lc3RhbXBQYXJhbSIsInJlbWVtYmVyVXBncmFkZSIsInJlamVjdFVuYXV0aG9yaXplZCIsInBlck1lc3NhZ2VEZWZsYXRlIiwidGhyZXNob2xkIiwidHJhbnNwb3J0T3B0aW9ucyIsImNsb3NlT25CZWZvcmV1bmxvYWQiLCJkZWNvZGUiLCJpZCIsInVwZ3JhZGVzIiwicGluZ0ludGVydmFsIiwicGluZ1RpbWVvdXQiLCJwaW5nVGltZW91dFRpbWVyIiwidHJhbnNwb3J0IiwiY2xvc2UiLCJvZmZsaW5lRXZlbnRMaXN0ZW5lciIsIm9uQ2xvc2UiLCJvcGVuIiwiY2xvbmUiLCJFSU8iLCJzaWQiLCJzb2NrZXQiLCJwcmlvcldlYnNvY2tldFN1Y2Nlc3MiLCJjcmVhdGVUcmFuc3BvcnQiLCJzaGlmdCIsInNldFRyYW5zcG9ydCIsIm9uRHJhaW4iLCJiaW5kIiwib25QYWNrZXQiLCJvbkVycm9yIiwicHJvYmUiLCJmYWlsZWQiLCJvblRyYW5zcG9ydE9wZW4iLCJzZW5kIiwibXNnIiwidXBncmFkaW5nIiwicGF1c2UiLCJjbGVhbnVwIiwiZmx1c2giLCJlcnIiLCJmcmVlemVUcmFuc3BvcnQiLCJvbmVycm9yIiwib25UcmFuc3BvcnRDbG9zZSIsIm9uY2xvc2UiLCJvbnVwZ3JhZGUiLCJ0byIsInBhY2tldCIsIm9uSGFuZHNoYWtlIiwicmVzZXRQaW5nVGltZW91dCIsInNlbmRQYWNrZXQiLCJjb2RlIiwiZmlsdGVyVXBncmFkZXMiLCJvbk9wZW4iLCJhdXRvVW5yZWYiLCJ1bnJlZiIsIndyaXRhYmxlIiwiY29tcHJlc3MiLCJjbGVhbnVwQW5kQ2xvc2UiLCJ3YWl0Rm9yVXBncmFkZSIsInJlYXNvbiIsImRlc2MiLCJwaW5nSW50ZXJ2YWxUaW1lciIsImZpbHRlcmVkVXBncmFkZXMiLCJvIiwiVHJhbnNwb3J0IiwiZGVzY3JpcHRpb24iLCJkb09wZW4iLCJkb0Nsb3NlIiwicGFja2V0cyIsIndyaXRlIiwiZGVjb2RlUGFja2V0IiwiYmluYXJ5VHlwZSIsIlhNTEh0dHBSZXF1ZXN0IiwiWEhSIiwiSlNPTlAiLCJ3ZWJzb2NrZXQiLCJwb2xsaW5nIiwieGhyIiwieGQiLCJ4cyIsImlzU1NMIiwieGRvbWFpbiIsInhzY2hlbWUiLCJmb3JjZUpTT05QIiwiUG9sbGluZyIsImdsb2JhbFRoaXMiLCJyTmV3bGluZSIsInJFc2NhcGVkTmV3bGluZSIsIkpTT05QUG9sbGluZyIsIl9fX2VpbyIsIm9uRGF0YSIsInNjcmlwdCIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsImZvcm0iLCJpZnJhbWUiLCJhc3luYyIsInNyYyIsImluc2VydEF0IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJpbnNlcnRCZWZvcmUiLCJoZWFkIiwiaXNVQWdlY2tvIiwiYXJlYSIsImlmcmFtZUlkIiwiY2xhc3NOYW1lIiwidG9wIiwibGVmdCIsIm1ldGhvZCIsInNldEF0dHJpYnV0ZSIsImFjdGlvbiIsImNvbXBsZXRlIiwiaW5pdElmcmFtZSIsImh0bWwiLCJ2YWx1ZSIsInN1Ym1pdCIsImF0dGFjaEV2ZW50Iiwib25yZWFkeXN0YXRlY2hhbmdlIiwib25sb2FkIiwicGljayIsImVtcHR5IiwiaGFzWEhSMiIsInJlc3BvbnNlVHlwZSIsImZvcmNlQmFzZTY0Iiwic3VwcG9ydHNCaW5hcnkiLCJSZXF1ZXN0IiwicmVxIiwicmVxdWVzdCIsInBvbGxYaHIiLCJjcmVhdGUiLCJleHRyYUhlYWRlcnMiLCJzZXREaXNhYmxlSGVhZGVyQ2hlY2siLCJzZXRSZXF1ZXN0SGVhZGVyIiwicmVxdWVzdFRpbWVvdXQiLCJ0aW1lb3V0IiwiaGFzWERSIiwib25Mb2FkIiwicmVzcG9uc2VUZXh0Iiwic3RhdHVzIiwicmVxdWVzdHNDb3VudCIsInJlcXVlc3RzIiwib25TdWNjZXNzIiwiZnJvbUVycm9yIiwiYWJvcnQiLCJYRG9tYWluUmVxdWVzdCIsImVuYWJsZXNYRFIiLCJ1bmxvYWRIYW5kbGVyIiwidGVybWluYXRpb25FdmVudCIsInllYXN0IiwicG9sbCIsIm9uUGF1c2UiLCJ0b3RhbCIsImRvUG9sbCIsImNhbGxiYWNrIiwiZGVjb2RlUGF5bG9hZCIsImVuY29kZVBheWxvYWQiLCJkb1dyaXRlIiwic2NoZW1hIiwidGltZXN0YW1wUmVxdWVzdHMiLCJiNjQiLCJlbmNvZGUiLCJpcHY2IiwiV2ViU29ja2V0IiwiTW96V2ViU29ja2V0IiwidXNpbmdCcm93c2VyV2ViU29ja2V0IiwiZGVmYXVsdEJpbmFyeVR5cGUiLCJpc1JlYWN0TmF0aXZlIiwicHJvZHVjdCIsIldTIiwiY2hlY2siLCJwcm90b2NvbHMiLCJoZWFkZXJzIiwid3MiLCJhZGRFdmVudExpc3RlbmVycyIsIm9ub3BlbiIsIl9zb2NrZXQiLCJvbm1lc3NhZ2UiLCJldiIsImxhc3RQYWNrZXQiLCJlbmNvZGVQYWNrZXQiLCJCdWZmZXIiLCJieXRlTGVuZ3RoIiwiYXR0ciIsInJlZHVjZSIsImFjYyIsImsiLCJoYXNDT1JTIiwiY29uY2F0IiwiUEFDS0VUX1RZUEVTIiwiUEFDS0VUX1RZUEVTX1JFVkVSU0UiLCJFUlJPUl9QQUNLRVQiLCJ3aXRoTmF0aXZlQXJyYXlCdWZmZXIiLCJiYXNlNjRkZWNvZGVyIiwiZW5jb2RlZFBhY2tldCIsIm1hcEJpbmFyeSIsImNoYXJBdCIsImRlY29kZUJhc2U2NFBhY2tldCIsInBhY2tldFR5cGUiLCJkZWNvZGVkIiwiQmxvYiIsIndpdGhOYXRpdmVCbG9iIiwiaXNWaWV3IiwiYnVmZmVyIiwiZW5jb2RlQmxvYkFzQmFzZTY0IiwiZmlsZVJlYWRlciIsIkZpbGVSZWFkZXIiLCJjb250ZW50IiwicmVzdWx0IiwicmVhZEFzRGF0YVVSTCIsIlNFUEFSQVRPUiIsImZyb21DaGFyQ29kZSIsImVuY29kZWRQYWNrZXRzIiwiY291bnQiLCJlbmNvZGVkUGF5bG9hZCIsImRlY29kZWRQYWNrZXQiLCJOIiwiTSIsIk1BVFJJWF9BIiwiVVBQRVJfTUFTSyIsIkxPV0VSX01BU0siLCJtdCIsIm10aSIsImNvbnN0cnVjdG9yIiwiaW5pdF9ieV9hcnJheSIsImluaXRfc2VlZCIsImluaXRfa2V5Iiwia2V5X2xlbmd0aCIsInJhbmRvbV9pbnQiLCJtYWcwMSIsImtrIiwicmFuZG9tX2ludDMxIiwicmFuZG9tX2luY2wiLCJyYW5kb21fZXhjbCIsInJhbmRvbV9sb25nIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicXMiLCJxcnkiLCJwYWlycyIsInBhaXIiLCJkZWNvZGVVUklDb21wb25lbnQiLCJyZSIsInBhcnRzIiwic291cmNlIiwiYXV0aG9yaXR5IiwiaXB2NnVyaSIsInBhdGhOYW1lcyIsInF1ZXJ5S2V5IiwicmVneCIsIiQwIiwiJDIiLCJ1cmxfMSIsIm1hbmFnZXJfMSIsImxvb2t1cCIsImNhY2hlIiwicGFyc2VkIiwidXJsIiwic2FtZU5hbWVzcGFjZSIsIm5ld0Nvbm5lY3Rpb24iLCJmb3JjZU5ldyIsIm11bHRpcGxleCIsImlvIiwiTWFuYWdlciIsInNvY2tldF9pb19wYXJzZXJfMSIsIm1hbmFnZXJfMiIsInNvY2tldF8xIiwiZWlvIiwib25fMSIsInR5cGVkX2V2ZW50c18xIiwibnNwcyIsInN1YnMiLCJyZWNvbm5lY3Rpb24iLCJyZWNvbm5lY3Rpb25BdHRlbXB0cyIsIkluZmluaXR5IiwicmVjb25uZWN0aW9uRGVsYXkiLCJyZWNvbm5lY3Rpb25EZWxheU1heCIsInJhbmRvbWl6YXRpb25GYWN0b3IiLCJiYWNrb2ZmIiwiX3JlYWR5U3RhdGUiLCJfcGFyc2VyIiwiZW5jb2RlciIsIkVuY29kZXIiLCJkZWNvZGVyIiwiRGVjb2RlciIsIl9hdXRvQ29ubmVjdCIsImF1dG9Db25uZWN0IiwiX3JlY29ubmVjdGlvbiIsIl9yZWNvbm5lY3Rpb25BdHRlbXB0cyIsIl9hIiwiX3JlY29ubmVjdGlvbkRlbGF5IiwiX3JhbmRvbWl6YXRpb25GYWN0b3IiLCJfcmVjb25uZWN0aW9uRGVsYXlNYXgiLCJfdGltZW91dCIsIl9yZWNvbm5lY3RpbmciLCJyZWNvbm5lY3QiLCJlbmdpbmUiLCJza2lwUmVjb25uZWN0Iiwib3BlblN1YkRlc3Ryb3kiLCJlcnJvclN1YiIsImVtaXRSZXNlcnZlZCIsIm1heWJlUmVjb25uZWN0T25PcGVuIiwic3ViRGVzdHJveSIsIm9ucGluZyIsIm9uZGF0YSIsIm9uZGVjb2RlZCIsImFkZCIsIm5zcCIsImFjdGl2ZSIsIl9jbG9zZSIsIm9ucmVjb25uZWN0IiwiYXR0ZW1wdCIsIlN0cmljdEV2ZW50RW1pdHRlciIsIlJFU0VSVkVEX0VWRU5UUyIsImZyZWV6ZSIsImNvbm5lY3QiLCJjb25uZWN0X2Vycm9yIiwiZGlzY29ubmVjdCIsImRpc2Nvbm5lY3RpbmciLCJuZXdMaXN0ZW5lciIsInJlY2VpdmVCdWZmZXIiLCJzZW5kQnVmZmVyIiwiaWRzIiwiYWNrcyIsImZsYWdzIiwiY29ubmVjdGVkIiwiZGlzY29ubmVjdGVkIiwiYXV0aCIsIm9ucGFja2V0Iiwic3ViRXZlbnRzIiwiUGFja2V0VHlwZSIsIkVWRU5UIiwicG9wIiwiaXNUcmFuc3BvcnRXcml0YWJsZSIsImRpc2NhcmRQYWNrZXQiLCJ2b2xhdGlsZSIsIl9wYWNrZXQiLCJDT05ORUNUIiwib25jb25uZWN0Iiwib25ldmVudCIsIkJJTkFSWV9FVkVOVCIsIkFDSyIsIm9uYWNrIiwiQklOQVJZX0FDSyIsIkRJU0NPTk5FQ1QiLCJvbmRpc2Nvbm5lY3QiLCJDT05ORUNUX0VSUk9SIiwiYWNrIiwiZW1pdEV2ZW50IiwiX2FueUxpc3RlbmVycyIsImxpc3RlbmVyIiwic2VudCIsImVtaXRCdWZmZXJlZCIsImxvYyIsImhyZWYiLCJpc19iaW5hcnlfMSIsImRlY29uc3RydWN0UGFja2V0IiwiYnVmZmVycyIsInBhY2tldERhdGEiLCJwYWNrIiwiX2RlY29uc3RydWN0UGFja2V0IiwiYXR0YWNobWVudHMiLCJpc0JpbmFyeSIsInBsYWNlaG9sZGVyIiwiX3BsYWNlaG9sZGVyIiwibnVtIiwibmV3RGF0YSIsInJlY29uc3RydWN0UGFja2V0IiwiX3JlY29uc3RydWN0UGFja2V0IiwiYmluYXJ5XzEiLCJoYXNCaW5hcnkiLCJlbmNvZGVBc0JpbmFyeSIsImVuY29kZUFzU3RyaW5nIiwiZGVjb25zdHJ1Y3Rpb24iLCJkZWNvZGVTdHJpbmciLCJyZWNvbnN0cnVjdG9yIiwiQmluYXJ5UmVjb25zdHJ1Y3RvciIsInRha2VCaW5hcnlEYXRhIiwiYnVmIiwibmV4dCIsInBheWxvYWQiLCJ0cnlQYXJzZSIsImlzUGF5bG9hZFZhbGlkIiwiZmluaXNoZWRSZWNvbnN0cnVjdGlvbiIsInJlY29uUGFjayIsImJpbkRhdGEiLCJ3aXRoTmF0aXZlRmlsZSIsIkZpbGUiLCJ0b0pTT04iLCJhbHBoYWJldCIsImVuY29kZWQiLCJub3ciLCJpbml0VUkiLCJjcmVhdGVHYW1lQnRuIiwicXVlcnlTZWxlY3RvciIsInNob3dKb2luR2FtZVByb21wdEJ0biIsImNvbmZpcm1Kb2luR2FtZUJ0biIsInJvb21Db2RlSW5wdXQiLCJpbml0VHJpZ2dlciIsImluaXRVSVByb21pc2UiLCJzaG93Sm9pbkdhbWVQcm9tcHQiLCJuZXdHYW1lIiwicm9vbUNvZGUiLCJjb25maXJtSm9pbkdhbWUiLCJoaWRlSW5pdGlhbFNjcmVlbiIsImluaXRpYWxTY3JlZW4iLCJkaXNwbGF5IiwiaW5pdEdhbWUiLCJwbGF5ZXJKb2luZWRIYW5kbGVyIiwibnVtYmVyIiwidWlJbml0UHJvbWlzZSIsImdhbWVDb250b2xsZXIiLCJ0aGVuIiwiZ3JlZXRpbmdIYW5kbGVyIiwiZHJhd0NvdXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsT0FBTyxHQUFHO0FBQ2RDLFNBQU8sRUFBRSxpQkFESztBQUVkQyxRQUFNLEVBQUU7QUFDTkMsU0FBSyxFQUFFLE1BREQ7QUFFTkMsVUFBTSxFQUFFO0FBRkY7QUFGTSxDQUFoQjtBQVFPLElBQU1DLE1BQWI7QUFBQTs7QUFBQTs7QUFDRSxrQkFBWUMsR0FBWixFQUFpQkMsYUFBakIsRUFBZ0NDLE1BQWhDLEVBQXdDO0FBQUE7O0FBQUE7O0FBQ3RDLDhCQUFNRixHQUFOLEVBQVdDLGFBQVgsRUFBMEJDLE1BQTFCOztBQUNBLFVBQUtDLElBQUw7O0FBQ0EsVUFBS0wsTUFB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QUFhLENBQUNHLFNBQWQ7QUFDRCxDQUhEOztBQUtBLFNBQVNELGVBQVQsR0FBMkIsQ0FFMUIsQzs7Ozs7Ozs7O0FDdkJEIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYW52YXMyREZ4QmFzZSwgYm9vdCB9IGZyb20gJy4vbGliL2Jhc2UnO1xuaW1wb3J0IHsgZHJhd0NpcmNsZSwgZHJhd1RleHQgfSBmcm9tICcuL2xpYi9zaGFwZSc7XG5cbmNvbnN0IERFRkFVTFQgPSB7XG4gIGJnQ29sb3I6ICdyZ2JhKDAsMCwwLDAuMyknLFxuICBjdXJzb3I6IHtcbiAgICBjb2xvcjogJyNmZmYnLFxuICAgIHJhZGl1czogNTBcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRW5naW5lIGV4dGVuZHMgQ2FudmFzMkRGeEJhc2Uge1xuICBjb25zdHJ1Y3RvcihlbGUsIGRlZmF1bHRDb25maWcsIGNvbmZpZykge1xuICAgIHN1cGVyKGVsZSwgZGVmYXVsdENvbmZpZywgY29uZmlnKVxuICAgIHRoaXMuaW5pdCgpO1xuICAgIHRoaXMucmFkaXVzID0gNTA7XG4gIH1cbiAgaW5pdCgpIHtcbiAgICB0aGlzLmJhY2tncm91bmQodGhpcy5jb25maWcuYmdDb2xvcik7XG4gIH1cbiAgZHJhdyhkYXRhLCBsb2NhbERhdGEpIHtcbiAgICB0aGlzLmJhY2tncm91bmQodGhpcy5jb25maWcuYmdDb2xvcik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmNsaWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRyYXdDaXJjbGUoXG4gICAgICAgIHRoaXMuY3R4LFxuICAgICAgICBkYXRhLmNsaWVudHNbaV0uY3Vyc29yLngsXG4gICAgICAgIGRhdGEuY2xpZW50c1tpXS5jdXJzb3IueSxcbiAgICAgICAgdGhpcy5jb25maWcuY3Vyc29yLnJhZGl1cyxcbiAgICAgICAgdGhpcy5jb25maWcuY3Vyc29yLmNvbG9yXG4gICAgICApXG5cbiAgICAgIGRyYXdUZXh0KFxuICAgICAgICB0aGlzLmN0eCwgYFBsYXllciR7aX1gLFxuICAgICAgICBkYXRhLmNsaWVudHNbaV0uY3Vyc29yLnggKyB0aGlzLmNvbmZpZy5jdXJzb3IucmFkaXVzLFxuICAgICAgICBkYXRhLmNsaWVudHNbaV0uY3Vyc29yLnkgKyB0aGlzLmNvbmZpZy5jdXJzb3IucmFkaXVzIC8gMiAtIDEwLFxuICAgICAgICAnI2ZmZicsXG4gICAgICAgIDEyLFxuICAgICAgICAnQXJpYWwnXG4gICAgICApXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnYW1lQnVpbGRlcigpIHtcbiAgbGV0IGdhbWUgPSBib290KEVuZ2luZSwgREVGQVVMVCwge30sIGZhbHNlKTtcbiAgcmV0dXJuIGdhbWU7XG59XG4iLCJpbXBvcnQgeyBkZWJvdW5jZSwgaXMsIHBvaW50ZXJFdmVudFRvWFkgfSBmcm9tICcuL2Z1bmN0aW9uJztcblxuZXhwb3J0IGNsYXNzIENhbnZhczJERnhCYXNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgZWxlLCBjb25maWcsIGRlZmF1bHRDb25maWdcbiAgKSB7XG4gICAgY29uZmlnID0gaXMub2JqKGNvbmZpZykgPyBjb25maWcgOiB7fTtcbiAgICBkZWZhdWx0Q29uZmlnID0gaXMub2JqKGRlZmF1bHRDb25maWcpID8gZGVmYXVsdENvbmZpZyA6IHt9O1xuICAgIHRoaXMuY29uZmlnID0gT2JqZWN0LmFzc2lnbihkZWZhdWx0Q29uZmlnLCBjb25maWcpO1xuICAgIHRoaXMuZWxlID0gZWxlO1xuICAgIHRoaXMuZnJhbWVDb3VudCA9IDA7XG4gICAgdGhpcy5tb3VzZSA9IHtcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwXG4gICAgfTtcbiAgICB0aGlzLmN0eCA9IG51bGw7XG4gICAgdGhpcy5mcmFtZUlzUGF1c2VkID0gZmFsc2U7XG4gICAgdGhpcy5pc0NsaWNrID0gZmFsc2U7XG4gICAgdGhpcy5jYW52YXNTaXplZml4ZWQgPSBmYWxzZTtcbiAgICB0aGlzLnByZXZpb3VzRnJhbWVUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgdGhpcy5pbml0QmFzZSgpO1xuICB9XG4gIGluaXRCYXNlKCkge1xuICAgIGlmICh0aGlzLmVsZS50YWdOYW1lICE9PSAnQ0FOVkFTJykge1xuICAgICAgY29uc3QgY3ZzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICB0aGlzLmVsZS5hcHBlbmRDaGlsZChjdnMpO1xuICAgICAgdGhpcy5jdnMgPSB0aGlzLmVsZS5xdWVyeVNlbGVjdG9yQWxsKCdjYW52YXMnKVswXTtcbiAgICAgIHRoaXMuY2FudmFzV2lkdGggPSB0aGlzLmVsZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcbiAgICAgIHRoaXMuY2FudmFzSGVpZ2h0ID0gdGhpcy5lbGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuY3ZzID0gdGhpcy5lbGU7XG4gICAgICB0aGlzLmNhbnZhc1dpZHRoID0gdGhpcy5lbGUucGFyZW50RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcbiAgICAgIHRoaXMuY2FudmFzSGVpZ2h0ID0gdGhpcy5lbGUucGFyZW50RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG4gICAgfVxuXG4gICAgdGhpcy5jdHggPSB0aGlzLmN2cy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIHRoaXMudHJpZ2dlclJlc2l6aW5nTWVjaGFuaXNtKCk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZGVib3VuY2UoKCkgPT4ge1xuICAgICAgdGhpcy50cmlnZ2VyUmVzaXppbmdNZWNoYW5pc20oKTtcbiAgICB9LCA1MDApKTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd2aXNpYmlsaXR5Y2hhbmdlJywgKCkgPT4ge1xuICAgICAgaWYgKGRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZSAhPT0gXCJ2aXNpYmxlXCIpIHtcbiAgICAgICAgdGhpcy5mcmFtZUlzUGF1c2VkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuYWRkRXZlbnRIYW5kbGVyKCk7XG5cbiAgICB0aGlzLnJlZnJlc2hCYXNlRnJhbWVDb3VudGVyKCk7XG5cbiAgfVxuICByZWZyZXNoQmFzZUZyYW1lQ291bnRlcigpIHtcbiAgICBsZXQgdGhpc0ZyYW1lVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIHRoaXMudGltZUVsYXBzZWQgPSAodGhpc0ZyYW1lVGltZSAtIHRoaXMucHJldmlvdXNGcmFtZVRpbWUpIC8gMTAwMDtcbiAgICBpZiAodGhpcy5mcmFtZUlzUGF1c2VkKSB7XG4gICAgICB0aGlzLnRpbWVFbGFwc2VkID0gMDtcbiAgICAgIHRoaXMuZnJhbWVJc1BhdXNlZCA9IGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLmZyYW1lQ291bnQgKz0gMTtcbiAgICB0aGlzLnByZXZpb3VzRnJhbWVUaW1lID0gdGhpc0ZyYW1lVGltZVxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICB0aGlzLnJlZnJlc2hCYXNlRnJhbWVDb3VudGVyKCk7XG4gICAgfSlcbiAgfVxuICB0cmlnZ2VyUmVzaXppbmdNZWNoYW5pc20oKSB7XG4gICAgaWYgKHRoaXMuY2FudmFzU2l6ZWZpeGVkKSByZXR1cm47XG4gICAgaWYgKHRoaXMuZWxlLnRhZ05hbWUgIT09ICdDQU5WQVMnKSB7XG4gICAgICBsZXQgY2FudmFzV2lkdGggPSB0aGlzLmVsZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcbiAgICAgIGxldCBjYW52YXNIZWlnaHQgPSB0aGlzLmVsZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG4gICAgICB0aGlzLmN2cy53aWR0aCA9IGNhbnZhc1dpZHRoO1xuICAgICAgdGhpcy5jdnMuaGVpZ2h0ID0gY2FudmFzSGVpZ2h0O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGxldCBjYW52YXNXaWR0aCA9IHRoaXMuY3ZzLnBhcmVudEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gICAgICBsZXQgY2FudmFzSGVpZ2h0ID0gdGhpcy5jdnMucGFyZW50RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG4gICAgICB0aGlzLmN2cy53aWR0aCA9IGNhbnZhc1dpZHRoO1xuICAgICAgdGhpcy5jdnMuaGVpZ2h0ID0gY2FudmFzSGVpZ2h0O1xuICAgIH1cbiAgfVxuXG5cbiAgc2V0Q2FudmFzU2l6ZSh3aWR0aCwgaGVpZ2h0KSB7XG4gICAgdGhpcy5jYW52YXNTaXplZml4ZWQgPSB0cnVlO1xuICAgIHRoaXMuY3ZzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5jdnMuaGVpZ2h0ID0gaGVpZ2h0O1xuICB9XG5cbiAgYmFja2dyb3VuZChjb2xvcikge1xuICAgIHRoaXMuY3R4LnNhdmUoKTtcbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICB0aGlzLmN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLmN2cy53aWR0aCwgdGhpcy5jdnMuaGVpZ2h0KTtcbiAgICB0aGlzLmN0eC5yZXN0b3JlKCk7XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jdnMud2lkdGgsIHRoaXMuY3ZzLmhlaWdodCk7XG4gIH1cblxuICBhZGRFdmVudEhhbmRsZXIoKSB7XG4gICAgdGhpcy5jdnMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLmlzQ2xpY2sgPSB0cnVlO1xuICAgIH0pXG4gICAgdGhpcy5jdnMuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsICgpID0+IHtcbiAgICAgIHRoaXMuaXNDbGljayA9IHRydWU7XG5cbiAgICB9KVxuXG4gICAgdGhpcy5jdnMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKGUpID0+IHtcbiAgICAgIGxldCBwb3MgPSBwb2ludGVyRXZlbnRUb1hZKGUpO1xuICAgICAgdGhpcy5tb3VzZSA9IHtcbiAgICAgICAgeDogcG9zLngsXG4gICAgICAgIHk6IHBvcy55XG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuY3ZzLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIChlKSA9PiB7XG4gICAgICBsZXQgcG9zID0gcG9pbnRlckV2ZW50VG9YWShlKTtcbiAgICAgIHRoaXMubW91c2UgPSB7XG4gICAgICAgIHg6IHBvcy54LFxuICAgICAgICB5OiBwb3MueVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxufVxuXG5leHBvcnQgZnVuY3Rpb24gYm9vdChjdG9yLCBkZWZhdWx0Q29uZmlnLCBjb25maWcsIHRyaWdnZXJPbkRvbUNvbnRlbnRMb2FkZWQpIHtcbiAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcbiAgY2FudmFzID0gY2FudmFzID8gY2FudmFzIDogZG9jdW1lbnQuYm9keTtcbiAgbGV0IGJvb3Ryb21pc2UsIHRyaWdnZXI7XG4gIGlmICh0cmlnZ2VyT25Eb21Db250ZW50TG9hZGVkKSB7XG4gICAgYm9vdHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICAgICAgbGV0IGluc3RhbmNlID0gbmV3IGN0b3IoY2FudmFzLCBjb25maWcsIGRlZmF1bHRDb25maWcpO1xuICAgICAgICByZXMoaW5zdGFuY2UpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgZWxzZSB7XG4gICAgYm9vdHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xuICAgICAgdHJpZ2dlciA9ICgpID0+IHtcbiAgICAgICAgbGV0IGluc3RhbmNlID0gbmV3IGN0b3IoY2FudmFzLCBjb25maWcsIGRlZmF1bHRDb25maWcpO1xuICAgICAgICByZXMoaW5zdGFuY2UpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcHJvbWlzZTogYm9vdHJvbWlzZSxcbiAgICBzdGFydDogdHJpZ2dlclxuICB9XG59IiwiY29uc3QgTWVyc2VubmVUd2lzdGVyID0gcmVxdWlyZSgnbWVyc2VubmUtdHdpc3RlcicpO1xuY29uc3QgTVQgPSBuZXcgTWVyc2VubmVUd2lzdGVyKCk7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMsIGRlbGF5KSB7XG4gIGxldCB0aW1lciA9IG51bGw7XG4gIGNvbnN0ICR0aGlzID0gdGhpcztcbiAgcmV0dXJuICgpID0+IHtcbiAgICBjb25zdCBjb250ZXh0ID0gJHRoaXM7XG4gICAgY29uc3QgYXJncyA9IGFyZ3VtZW50cztcbiAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgIHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgIH0sIGRlbGF5KTtcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IGlzID0ge1xuICBhcnI6IGEgPT4gQXJyYXkuaXNBcnJheShhKSxcbiAgb2JqOiBhID0+IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhKS5pbmRleE9mKCdPYmplY3QnKSA+IC0xLFxuICBwdGg6IGEgPT4gaXMub2JqKGEpICYmIGEuaGFzT3duUHJvcGVydHkoJ3RvdGFsTGVuZ3RoJyksXG4gIHN2ZzogYSA9PiBhIGluc3RhbmNlb2YgU1ZHRWxlbWVudCxcbiAgaW5wOiBhID0+IGEgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50LFxuICBkb206IGEgPT4gYS5ub2RlVHlwZSB8fCBpcy5zdmcoYSksXG4gIHN0cjogYSA9PiB0eXBlb2YgYSA9PT0gJ3N0cmluZycsXG4gIGZuYzogYSA9PiB0eXBlb2YgYSA9PT0gJ2Z1bmN0aW9uJyxcbiAgdW5kOiBhID0+IHR5cGVvZiBhID09PSAndW5kZWZpbmVkJyxcbiAgbmlsOiBhID0+IGlzLnVuZChhKSB8fCBhID09PSBudWxsLFxuICBoZXg6IGEgPT4gLyheI1swLTlBLUZdezZ9JCl8KF4jWzAtOUEtRl17M30kKS9pLnRlc3QoYSksXG4gIHJnYmE6IGEgPT4gL15yZ2JhLy50ZXN0KGEpLFxuICByZ2I6IGEgPT4gL15yZ2IvLnRlc3QoYSksXG4gIGhzbDogYSA9PiAvXmhzbC8udGVzdChhKSxcbiAgY29sOiBhID0+IChpcy5oZXgoYSkgfHwgaXMucmdiKGEpIHx8IGlzLmhzbChhKSksXG4gIGtleTogYSA9PiAhZGVmYXVsdEluc3RhbmNlU2V0dGluZ3MuaGFzT3duUHJvcGVydHkoYSkgJiYgIWRlZmF1bHRUd2VlblNldHRpbmdzLmhhc093blByb3BlcnR5KGEpICYmIGEgIT09ICd0YXJnZXRzJyAmJiBhICE9PSAna2V5ZnJhbWVzJyxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbVdpdGhpblJhbmdlKG1pbiwgbWF4LCBzZWVkKSB7XG4gIHJldHVybiBNVC5yYW5kb20oc2VlZCkgKiAobWF4IC0gbWluKSArIG1pbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3RhbmNlKHgwLCB5MCwgeDEsIHkxKSB7XG4gIHJldHVybiBNYXRoLnNxcnQoKHgxIC0geDApICogKHgxIC0geDApICsgKHkxIC0geTApICogKHkxIC0geTApKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZ3JlZVRvUmFkaWFuKGRlZ3JlZSkge1xuICByZXR1cm4gKGRlZ3JlZSAvIDE4MCkgKiBNYXRoLlBJO1xufVxuXG4vKipcbiAqIOe1seS4gCB0b3VjaEV2ZW50L21vdXNlRXZlbnQg55qE5LqL5Lu26Ke455m85bqn5qiZ5Y+W5b6X5pa55byPXG4gKiBAZXhwb3J0XG4gKiBAcGFyYW0ge29iamVjdH0gIOWCs+WFpeeahGV2ZW50IOeJqeS7tlxuICogQHJldHVybnMge09iamVjdH0g5LiA5YCL54mp5Lu2LCDlhaflkKvkuovku7bop7jnmbzluqfmqJnnmoRYL1kg5bqn5qiZ5YC8XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwb2ludGVyRXZlbnRUb1hZKGUpIHtcbiAgdmFyIG91dCA9IHsgeDogMCwgeTogMCB9O1xuICBpZiAoZS50eXBlID09PSAndG91Y2hzdGFydCcgfHwgZS50eXBlID09PSAndG91Y2htb3ZlJyB8fCBlLnR5cGUgPT09ICd0b3VjaGVuZCcgfHwgZS50eXBlID09PSAndG91Y2hjYW5jZWwnKSB7XG4gICAgdmFyIHRvdWNoID0gZS5vcmlnaW5hbEV2ZW50LnRvdWNoZXNbMF0gfHwgZS5vcmlnaW5hbEV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdO1xuICAgIG91dC54ID0gdG91Y2gucGFnZVg7XG4gICAgb3V0LnkgPSB0b3VjaC5wYWdlWTtcbiAgfSBlbHNlIGlmIChlLnR5cGUgPT09ICdtb3VzZWRvd24nIHx8IGUudHlwZSA9PT0gJ21vdXNldXAnIHx8IGUudHlwZSA9PT0gJ21vdXNlbW92ZScgfHwgZS50eXBlID09PSAnbW91c2VvdmVyJyB8fCBlLnR5cGUgPT09ICdtb3VzZW91dCcgfHwgZS50eXBlID09PSAnbW91c2VlbnRlcicgfHwgZS50eXBlID09PSAnbW91c2VsZWF2ZScpIHtcbiAgICBvdXQueCA9IGUucGFnZVg7XG4gICAgb3V0LnkgPSBlLnBhZ2VZO1xuICB9XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICog55u05o6l5ZG85Y+raGFzT3duUHJvcGVydHnnmoTljp/lnovmlrnms5Uo55So5ZyoaGFzT3duUHJvcGVydHnooqvmlLnli5XpgY7nmoTni4Dms4EpXG4gKlxuICogQGV4cG9ydFxuICogQHBhcmFtIHtvYmplY3R9IHRhcmdldCDnm67mqJnnianku7ZcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wIOebruaomXByb3BcbiAqIEByZXR1cm5zIHtib29sZWFufSDmmK8v5ZCmXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0YXJnZXRIYXNQcm9wKHRhcmdldCwgcHJvcCkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRhcmdldCwgcHJvcCk7XG59XG5cbi8qKlxuICog56K66KqN5LiA5YCL6K6K5pW4L+WAvOaYr+WQpueCuuepuigw5LiN566X56m65YC8KVxuICogQGV4cG9ydFxuICogQHBhcmFtIHsqfSB2YWxcbiAqIEByZXR1cm5zIHtib29sZWFufSDmmK8v5ZCmXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0VtcHR5KHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ251bWJlcicgPyBpc05hTih2YWwpIDogIXZhbDtcbn1cblxuXG5mdW5jdGlvbiByZ2JUb1JnYmEocmdiVmFsdWUpIHtcbiAgY29uc3QgcmdiID0gL3JnYlxcKChcXGQrLFxccypbXFxkXSssXFxzKltcXGRdKylcXCkvZy5leGVjKHJnYlZhbHVlKTtcbiAgcmV0dXJuIHJnYiA/IGByZ2JhKCR7cmdiWzFdfSwxKWAgOiByZ2JWYWx1ZTtcbn1cblxuZnVuY3Rpb24gaGV4VG9SZ2JhKGhleFZhbHVlKSB7XG4gIGNvbnN0IHJneCA9IC9eIz8oW2EtZlxcZF0pKFthLWZcXGRdKShbYS1mXFxkXSkkL2k7XG4gIGNvbnN0IGhleCA9IGhleFZhbHVlLnJlcGxhY2Uocmd4LCAobSwgciwgZywgYikgPT4gciArIHIgKyBnICsgZyArIGIgKyBiKTtcbiAgY29uc3QgcmdiID0gL14jPyhbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KSQvaS5leGVjKGhleCk7XG4gIGNvbnN0IHIgPSBwYXJzZUludChyZ2JbMV0sIDE2KTtcbiAgY29uc3QgZyA9IHBhcnNlSW50KHJnYlsyXSwgMTYpO1xuICBjb25zdCBiID0gcGFyc2VJbnQocmdiWzNdLCAxNik7XG4gIHJldHVybiBgcmdiYSgke3J9LCR7Z30sJHtifSwxKWA7XG59XG5cbmZ1bmN0aW9uIGhzbFRvUmdiYShoc2xWYWx1ZSkge1xuICBjb25zdCBoc2wgPSAvaHNsXFwoKFxcZCspLFxccyooW1xcZC5dKyklLFxccyooW1xcZC5dKyklXFwpL2cuZXhlYyhoc2xWYWx1ZSkgfHwgL2hzbGFcXCgoXFxkKyksXFxzKihbXFxkLl0rKSUsXFxzKihbXFxkLl0rKSUsXFxzKihbXFxkLl0rKVxcKS9nLmV4ZWMoaHNsVmFsdWUpO1xuICBjb25zdCBoID0gcGFyc2VJbnQoaHNsWzFdLCAxMCkgLyAzNjA7XG4gIGNvbnN0IHMgPSBwYXJzZUludChoc2xbMl0sIDEwKSAvIDEwMDtcbiAgY29uc3QgbCA9IHBhcnNlSW50KGhzbFszXSwgMTApIC8gMTAwO1xuICBjb25zdCBhID0gaHNsWzRdIHx8IDE7XG4gIGZ1bmN0aW9uIGh1ZTJyZ2IocCwgcSwgdCkge1xuICAgIGlmICh0IDwgMCkgdCArPSAxO1xuICAgIGlmICh0ID4gMSkgdCAtPSAxO1xuICAgIGlmICh0IDwgMSAvIDYpIHJldHVybiBwICsgKHEgLSBwKSAqIDYgKiB0O1xuICAgIGlmICh0IDwgMSAvIDIpIHJldHVybiBxO1xuICAgIGlmICh0IDwgMiAvIDMpIHJldHVybiBwICsgKHEgLSBwKSAqICgyIC8gMyAtIHQpICogNjtcbiAgICByZXR1cm4gcDtcbiAgfVxuICBsZXQgciwgZywgYjtcbiAgaWYgKHMgPT0gMCkge1xuICAgIHIgPSBnID0gYiA9IGw7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgcSA9IGwgPCAwLjUgPyBsICogKDEgKyBzKSA6IGwgKyBzIC0gbCAqIHM7XG4gICAgY29uc3QgcCA9IDIgKiBsIC0gcTtcbiAgICByID0gaHVlMnJnYihwLCBxLCBoICsgMSAvIDMpO1xuICAgIGcgPSBodWUycmdiKHAsIHEsIGgpO1xuICAgIGIgPSBodWUycmdiKHAsIHEsIGggLSAxIC8gMyk7XG4gIH1cbiAgcmV0dXJuIGByZ2JhKCR7ciAqIDI1NX0sJHtnICogMjU1fSwke2IgKiAyNTV9LCR7YX0pYDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbG9yVG9SZ2JhKHZhbCkge1xuICBpZiAoaXMucmdiKHZhbCkpIHJldHVybiByZ2JUb1JnYmEodmFsKTtcbiAgaWYgKGlzLmhleCh2YWwpKSByZXR1cm4gaGV4VG9SZ2JhKHZhbCk7XG4gIGlmIChpcy5oc2wodmFsKSkgcmV0dXJuIGhzbFRvUmdiYSh2YWwpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2hhbm5lbFZhbHVlc0Zyb21SZ2JhKHJnYmEpIHtcbiAgcmV0dXJuIHJnYmEucmVwbGFjZSgvXihyZ2J8cmdiYSlcXCgvLCAnJykucmVwbGFjZSgvXFwpJC8sICcnKS5yZXBsYWNlKC9cXHMvZywgJycpLnNwbGl0KCcsJykubWFwKHggPT4gcGFyc2VJbnQoeCkpO1xufVxuXG5cbiIsImV4cG9ydCBmdW5jdGlvbiBkcmF3U3F1YXJlKGN0eCwgeCwgeSwgd2lkdGgsIGNvbG9yLCBhbHBoYSkge1xuICBjdHguc2F2ZSgpO1xuICBjdHguZmlsbFN0eWxlID0gY29sb3I7XG4gIGN0eC5nbG9iYWxBbHBoYSA9IGFscGhhO1xuICBjdHguZmlsbFJlY3QoeCAtIHdpZHRoIC8gMiwgeSAtIHdpZHRoIC8gMiwgd2lkdGgsIHdpZHRoKTtcbiAgY3R4LnJlc3RvcmUoKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBkcmF3Q2lyY2xlKGN0eCwgeCwgeSwgd2lkdGgsIGNvbG9yLCBhbHBoYSkge1xuICBjdHguc2F2ZSgpXG4gIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgY3R4Lmdsb2JhbEFscGhhID0gYWxwaGE7XG4gIGN0eC5iZWdpblBhdGgoKTtcbiAgY3R4LmFyYyh4LCB5LCB3aWR0aCAvIDIsIDAsIE1hdGguUEkgKiAyLCB0cnVlKTtcbiAgY3R4LmNsb3NlUGF0aCgpO1xuICBjdHguZmlsbCgpO1xuICBjdHgucmVzdG9yZSgpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGRyYXdMaW5lKGN0eCwgeDAsIHkwLCB4MSwgeTEsIHN0cm9rZUNvbG9yLCBzdHJva2VXaWR0aCkge1xuICBjdHguc2F2ZSgpO1xuICBjdHguc3Ryb2tlU3R5bGUgPSBzdHJva2VDb2xvcjtcbiAgY3R4LmxpbmVXaWR0aCA9IHN0cm9rZVdpZHRoO1xuICBjdHguYmVnaW5QYXRoKCk7XG4gIGN0eC5tb3ZlVG8oeDAsIHkwKTtcbiAgY3R4LmxpbmVUbyh4MSwgeTEpO1xuICBjdHguY2xvc2VQYXRoKCk7XG4gIGN0eC5zdHJva2UoKTtcbiAgY3R4LnJlc3RvcmUoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRyYXdUZXh0KGN0eCwgdGV4dENvbnRlbnQgPSAndGV4dCcsIHgsIHksIGNvbG9yID0gJyMwMDAnLCBmb250U2l6ZSA9IDEyLCBmb250ID0gJ0FyaWFsJykge1xuICBjdHguc2F2ZSgpO1xuICBjdHguZmlsbFN0eWxlID0gY29sb3I7XG4gIGN0eC5mb250ID0gYCR7Zm9udFNpemV9cHggJHtmb250fWA7XG4gIGN0eC5maWxsVGV4dCh0ZXh0Q29udGVudCwgeCwgeSk7XG4gIGN0eC5yZXN0b3JlKCk7XG59IiwiZXhwb3J0IGNvbnN0IGRhdGFTdG9yYWdlID0ge1xuICBiYWxsOiB7XG4gICAgc3BlZWQ6IHtcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwXG4gICAgfSxcbiAgICBwb3NpdGlvbjoge1xuICAgICAgeDogMCxcbiAgICAgIHk6IDBcbiAgICB9XG4gIH0sXG4gIGNsaWVudHM6IFtcblxuICBdXG59XG5cbmV4cG9ydCBsZXQgcGxheWVyTnVtYmVyID0gMDsiLCJcbi8qKlxuICogRXhwb3NlIGBCYWNrb2ZmYC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJhY2tvZmY7XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBiYWNrb2ZmIHRpbWVyIHdpdGggYG9wdHNgLlxuICpcbiAqIC0gYG1pbmAgaW5pdGlhbCB0aW1lb3V0IGluIG1pbGxpc2Vjb25kcyBbMTAwXVxuICogLSBgbWF4YCBtYXggdGltZW91dCBbMTAwMDBdXG4gKiAtIGBqaXR0ZXJgIFswXVxuICogLSBgZmFjdG9yYCBbMl1cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0c1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBCYWNrb2ZmKG9wdHMpIHtcbiAgb3B0cyA9IG9wdHMgfHwge307XG4gIHRoaXMubXMgPSBvcHRzLm1pbiB8fCAxMDA7XG4gIHRoaXMubWF4ID0gb3B0cy5tYXggfHwgMTAwMDA7XG4gIHRoaXMuZmFjdG9yID0gb3B0cy5mYWN0b3IgfHwgMjtcbiAgdGhpcy5qaXR0ZXIgPSBvcHRzLmppdHRlciA+IDAgJiYgb3B0cy5qaXR0ZXIgPD0gMSA/IG9wdHMuaml0dGVyIDogMDtcbiAgdGhpcy5hdHRlbXB0cyA9IDA7XG59XG5cbi8qKlxuICogUmV0dXJuIHRoZSBiYWNrb2ZmIGR1cmF0aW9uLlxuICpcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuQmFja29mZi5wcm90b3R5cGUuZHVyYXRpb24gPSBmdW5jdGlvbigpe1xuICB2YXIgbXMgPSB0aGlzLm1zICogTWF0aC5wb3codGhpcy5mYWN0b3IsIHRoaXMuYXR0ZW1wdHMrKyk7XG4gIGlmICh0aGlzLmppdHRlcikge1xuICAgIHZhciByYW5kID0gIE1hdGgucmFuZG9tKCk7XG4gICAgdmFyIGRldmlhdGlvbiA9IE1hdGguZmxvb3IocmFuZCAqIHRoaXMuaml0dGVyICogbXMpO1xuICAgIG1zID0gKE1hdGguZmxvb3IocmFuZCAqIDEwKSAmIDEpID09IDAgID8gbXMgLSBkZXZpYXRpb24gOiBtcyArIGRldmlhdGlvbjtcbiAgfVxuICByZXR1cm4gTWF0aC5taW4obXMsIHRoaXMubWF4KSB8IDA7XG59O1xuXG4vKipcbiAqIFJlc2V0IHRoZSBudW1iZXIgb2YgYXR0ZW1wdHMuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5CYWNrb2ZmLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uKCl7XG4gIHRoaXMuYXR0ZW1wdHMgPSAwO1xufTtcblxuLyoqXG4gKiBTZXQgdGhlIG1pbmltdW0gZHVyYXRpb25cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkJhY2tvZmYucHJvdG90eXBlLnNldE1pbiA9IGZ1bmN0aW9uKG1pbil7XG4gIHRoaXMubXMgPSBtaW47XG59O1xuXG4vKipcbiAqIFNldCB0aGUgbWF4aW11bSBkdXJhdGlvblxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuQmFja29mZi5wcm90b3R5cGUuc2V0TWF4ID0gZnVuY3Rpb24obWF4KXtcbiAgdGhpcy5tYXggPSBtYXg7XG59O1xuXG4vKipcbiAqIFNldCB0aGUgaml0dGVyXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5CYWNrb2ZmLnByb3RvdHlwZS5zZXRKaXR0ZXIgPSBmdW5jdGlvbihqaXR0ZXIpe1xuICB0aGlzLmppdHRlciA9IGppdHRlcjtcbn07XG5cbiIsIi8qXG4gKiBiYXNlNjQtYXJyYXlidWZmZXJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9uaWtsYXN2aC9iYXNlNjQtYXJyYXlidWZmZXJcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTIgTmlrbGFzIHZvbiBIZXJ0emVuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKi9cbihmdW5jdGlvbihjaGFycyl7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIGV4cG9ydHMuZW5jb2RlID0gZnVuY3Rpb24oYXJyYXlidWZmZXIpIHtcbiAgICB2YXIgYnl0ZXMgPSBuZXcgVWludDhBcnJheShhcnJheWJ1ZmZlciksXG4gICAgaSwgbGVuID0gYnl0ZXMubGVuZ3RoLCBiYXNlNjQgPSBcIlwiO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSs9Mykge1xuICAgICAgYmFzZTY0ICs9IGNoYXJzW2J5dGVzW2ldID4+IDJdO1xuICAgICAgYmFzZTY0ICs9IGNoYXJzWygoYnl0ZXNbaV0gJiAzKSA8PCA0KSB8IChieXRlc1tpICsgMV0gPj4gNCldO1xuICAgICAgYmFzZTY0ICs9IGNoYXJzWygoYnl0ZXNbaSArIDFdICYgMTUpIDw8IDIpIHwgKGJ5dGVzW2kgKyAyXSA+PiA2KV07XG4gICAgICBiYXNlNjQgKz0gY2hhcnNbYnl0ZXNbaSArIDJdICYgNjNdO1xuICAgIH1cblxuICAgIGlmICgobGVuICUgMykgPT09IDIpIHtcbiAgICAgIGJhc2U2NCA9IGJhc2U2NC5zdWJzdHJpbmcoMCwgYmFzZTY0Lmxlbmd0aCAtIDEpICsgXCI9XCI7XG4gICAgfSBlbHNlIGlmIChsZW4gJSAzID09PSAxKSB7XG4gICAgICBiYXNlNjQgPSBiYXNlNjQuc3Vic3RyaW5nKDAsIGJhc2U2NC5sZW5ndGggLSAyKSArIFwiPT1cIjtcbiAgICB9XG5cbiAgICByZXR1cm4gYmFzZTY0O1xuICB9O1xuXG4gIGV4cG9ydHMuZGVjb2RlID0gIGZ1bmN0aW9uKGJhc2U2NCkge1xuICAgIHZhciBidWZmZXJMZW5ndGggPSBiYXNlNjQubGVuZ3RoICogMC43NSxcbiAgICBsZW4gPSBiYXNlNjQubGVuZ3RoLCBpLCBwID0gMCxcbiAgICBlbmNvZGVkMSwgZW5jb2RlZDIsIGVuY29kZWQzLCBlbmNvZGVkNDtcblxuICAgIGlmIChiYXNlNjRbYmFzZTY0Lmxlbmd0aCAtIDFdID09PSBcIj1cIikge1xuICAgICAgYnVmZmVyTGVuZ3RoLS07XG4gICAgICBpZiAoYmFzZTY0W2Jhc2U2NC5sZW5ndGggLSAyXSA9PT0gXCI9XCIpIHtcbiAgICAgICAgYnVmZmVyTGVuZ3RoLS07XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGFycmF5YnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKGJ1ZmZlckxlbmd0aCksXG4gICAgYnl0ZXMgPSBuZXcgVWludDhBcnJheShhcnJheWJ1ZmZlcik7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKz00KSB7XG4gICAgICBlbmNvZGVkMSA9IGNoYXJzLmluZGV4T2YoYmFzZTY0W2ldKTtcbiAgICAgIGVuY29kZWQyID0gY2hhcnMuaW5kZXhPZihiYXNlNjRbaSsxXSk7XG4gICAgICBlbmNvZGVkMyA9IGNoYXJzLmluZGV4T2YoYmFzZTY0W2krMl0pO1xuICAgICAgZW5jb2RlZDQgPSBjaGFycy5pbmRleE9mKGJhc2U2NFtpKzNdKTtcblxuICAgICAgYnl0ZXNbcCsrXSA9IChlbmNvZGVkMSA8PCAyKSB8IChlbmNvZGVkMiA+PiA0KTtcbiAgICAgIGJ5dGVzW3ArK10gPSAoKGVuY29kZWQyICYgMTUpIDw8IDQpIHwgKGVuY29kZWQzID4+IDIpO1xuICAgICAgYnl0ZXNbcCsrXSA9ICgoZW5jb2RlZDMgJiAzKSA8PCA2KSB8IChlbmNvZGVkNCAmIDYzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJyYXlidWZmZXI7XG4gIH07XG59KShcIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky9cIik7XG4iLCJcclxuLyoqXHJcbiAqIEV4cG9zZSBgRW1pdHRlcmAuXHJcbiAqL1xyXG5cclxuaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgbW9kdWxlLmV4cG9ydHMgPSBFbWl0dGVyO1xyXG59XHJcblxyXG4vKipcclxuICogSW5pdGlhbGl6ZSBhIG5ldyBgRW1pdHRlcmAuXHJcbiAqXHJcbiAqIEBhcGkgcHVibGljXHJcbiAqL1xyXG5cclxuZnVuY3Rpb24gRW1pdHRlcihvYmopIHtcclxuICBpZiAob2JqKSByZXR1cm4gbWl4aW4ob2JqKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBNaXhpbiB0aGUgZW1pdHRlciBwcm9wZXJ0aWVzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXHJcbiAqIEByZXR1cm4ge09iamVjdH1cclxuICogQGFwaSBwcml2YXRlXHJcbiAqL1xyXG5cclxuZnVuY3Rpb24gbWl4aW4ob2JqKSB7XHJcbiAgZm9yICh2YXIga2V5IGluIEVtaXR0ZXIucHJvdG90eXBlKSB7XHJcbiAgICBvYmpba2V5XSA9IEVtaXR0ZXIucHJvdG90eXBlW2tleV07XHJcbiAgfVxyXG4gIHJldHVybiBvYmo7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBMaXN0ZW4gb24gdGhlIGdpdmVuIGBldmVudGAgd2l0aCBgZm5gLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcclxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cclxuICogQHJldHVybiB7RW1pdHRlcn1cclxuICogQGFwaSBwdWJsaWNcclxuICovXHJcblxyXG5FbWl0dGVyLnByb3RvdHlwZS5vbiA9XHJcbkVtaXR0ZXIucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbihldmVudCwgZm4pe1xyXG4gIHRoaXMuX2NhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrcyB8fCB7fTtcclxuICAodGhpcy5fY2FsbGJhY2tzWyckJyArIGV2ZW50XSA9IHRoaXMuX2NhbGxiYWNrc1snJCcgKyBldmVudF0gfHwgW10pXHJcbiAgICAucHVzaChmbik7XHJcbiAgcmV0dXJuIHRoaXM7XHJcbn07XHJcblxyXG4vKipcclxuICogQWRkcyBhbiBgZXZlbnRgIGxpc3RlbmVyIHRoYXQgd2lsbCBiZSBpbnZva2VkIGEgc2luZ2xlXHJcbiAqIHRpbWUgdGhlbiBhdXRvbWF0aWNhbGx5IHJlbW92ZWQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxyXG4gKiBAcmV0dXJuIHtFbWl0dGVyfVxyXG4gKiBAYXBpIHB1YmxpY1xyXG4gKi9cclxuXHJcbkVtaXR0ZXIucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbihldmVudCwgZm4pe1xyXG4gIGZ1bmN0aW9uIG9uKCkge1xyXG4gICAgdGhpcy5vZmYoZXZlbnQsIG9uKTtcclxuICAgIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgfVxyXG5cclxuICBvbi5mbiA9IGZuO1xyXG4gIHRoaXMub24oZXZlbnQsIG9uKTtcclxuICByZXR1cm4gdGhpcztcclxufTtcclxuXHJcbi8qKlxyXG4gKiBSZW1vdmUgdGhlIGdpdmVuIGNhbGxiYWNrIGZvciBgZXZlbnRgIG9yIGFsbFxyXG4gKiByZWdpc3RlcmVkIGNhbGxiYWNrcy5cclxuICpcclxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXHJcbiAqIEByZXR1cm4ge0VtaXR0ZXJ9XHJcbiAqIEBhcGkgcHVibGljXHJcbiAqL1xyXG5cclxuRW1pdHRlci5wcm90b3R5cGUub2ZmID1cclxuRW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPVxyXG5FbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVBbGxMaXN0ZW5lcnMgPVxyXG5FbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24oZXZlbnQsIGZuKXtcclxuICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XHJcblxyXG4gIC8vIGFsbFxyXG4gIGlmICgwID09IGFyZ3VtZW50cy5sZW5ndGgpIHtcclxuICAgIHRoaXMuX2NhbGxiYWNrcyA9IHt9O1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvLyBzcGVjaWZpYyBldmVudFxyXG4gIHZhciBjYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3NbJyQnICsgZXZlbnRdO1xyXG4gIGlmICghY2FsbGJhY2tzKSByZXR1cm4gdGhpcztcclxuXHJcbiAgLy8gcmVtb3ZlIGFsbCBoYW5kbGVyc1xyXG4gIGlmICgxID09IGFyZ3VtZW50cy5sZW5ndGgpIHtcclxuICAgIGRlbGV0ZSB0aGlzLl9jYWxsYmFja3NbJyQnICsgZXZlbnRdO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvLyByZW1vdmUgc3BlY2lmaWMgaGFuZGxlclxyXG4gIHZhciBjYjtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IGNhbGxiYWNrcy5sZW5ndGg7IGkrKykge1xyXG4gICAgY2IgPSBjYWxsYmFja3NbaV07XHJcbiAgICBpZiAoY2IgPT09IGZuIHx8IGNiLmZuID09PSBmbikge1xyXG4gICAgICBjYWxsYmFja3Muc3BsaWNlKGksIDEpO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIFJlbW92ZSBldmVudCBzcGVjaWZpYyBhcnJheXMgZm9yIGV2ZW50IHR5cGVzIHRoYXQgbm9cclxuICAvLyBvbmUgaXMgc3Vic2NyaWJlZCBmb3IgdG8gYXZvaWQgbWVtb3J5IGxlYWsuXHJcbiAgaWYgKGNhbGxiYWNrcy5sZW5ndGggPT09IDApIHtcclxuICAgIGRlbGV0ZSB0aGlzLl9jYWxsYmFja3NbJyQnICsgZXZlbnRdO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHRoaXM7XHJcbn07XHJcblxyXG4vKipcclxuICogRW1pdCBgZXZlbnRgIHdpdGggdGhlIGdpdmVuIGFyZ3MuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxyXG4gKiBAcGFyYW0ge01peGVkfSAuLi5cclxuICogQHJldHVybiB7RW1pdHRlcn1cclxuICovXHJcblxyXG5FbWl0dGVyLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24oZXZlbnQpe1xyXG4gIHRoaXMuX2NhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrcyB8fCB7fTtcclxuXHJcbiAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpXHJcbiAgICAsIGNhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrc1snJCcgKyBldmVudF07XHJcblxyXG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcclxuICB9XHJcblxyXG4gIGlmIChjYWxsYmFja3MpIHtcclxuICAgIGNhbGxiYWNrcyA9IGNhbGxiYWNrcy5zbGljZSgwKTtcclxuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBjYWxsYmFja3MubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcclxuICAgICAgY2FsbGJhY2tzW2ldLmFwcGx5KHRoaXMsIGFyZ3MpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHRoaXM7XHJcbn07XHJcblxyXG4vKipcclxuICogUmV0dXJuIGFycmF5IG9mIGNhbGxiYWNrcyBmb3IgYGV2ZW50YC5cclxuICpcclxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XHJcbiAqIEByZXR1cm4ge0FycmF5fVxyXG4gKiBAYXBpIHB1YmxpY1xyXG4gKi9cclxuXHJcbkVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVycyA9IGZ1bmN0aW9uKGV2ZW50KXtcclxuICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XHJcbiAgcmV0dXJuIHRoaXMuX2NhbGxiYWNrc1snJCcgKyBldmVudF0gfHwgW107XHJcbn07XHJcblxyXG4vKipcclxuICogQ2hlY2sgaWYgdGhpcyBlbWl0dGVyIGhhcyBgZXZlbnRgIGhhbmRsZXJzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcclxuICogQHJldHVybiB7Qm9vbGVhbn1cclxuICogQGFwaSBwdWJsaWNcclxuICovXHJcblxyXG5FbWl0dGVyLnByb3RvdHlwZS5oYXNMaXN0ZW5lcnMgPSBmdW5jdGlvbihldmVudCl7XHJcbiAgcmV0dXJuICEhIHRoaXMubGlzdGVuZXJzKGV2ZW50KS5sZW5ndGg7XHJcbn07XHJcbiIsIi8qKlxuICogSGVscGVycy5cbiAqL1xuXG52YXIgcyA9IDEwMDA7XG52YXIgbSA9IHMgKiA2MDtcbnZhciBoID0gbSAqIDYwO1xudmFyIGQgPSBoICogMjQ7XG52YXIgdyA9IGQgKiA3O1xudmFyIHkgPSBkICogMzY1LjI1O1xuXG4vKipcbiAqIFBhcnNlIG9yIGZvcm1hdCB0aGUgZ2l2ZW4gYHZhbGAuXG4gKlxuICogT3B0aW9uczpcbiAqXG4gKiAgLSBgbG9uZ2AgdmVyYm9zZSBmb3JtYXR0aW5nIFtmYWxzZV1cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ3xOdW1iZXJ9IHZhbFxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQHRocm93cyB7RXJyb3J9IHRocm93IGFuIGVycm9yIGlmIHZhbCBpcyBub3QgYSBub24tZW1wdHkgc3RyaW5nIG9yIGEgbnVtYmVyXG4gKiBAcmV0dXJuIHtTdHJpbmd8TnVtYmVyfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHZhbCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsO1xuICBpZiAodHlwZSA9PT0gJ3N0cmluZycgJiYgdmFsLmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gcGFyc2UodmFsKTtcbiAgfSBlbHNlIGlmICh0eXBlID09PSAnbnVtYmVyJyAmJiBpc0Zpbml0ZSh2YWwpKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMubG9uZyA/IGZtdExvbmcodmFsKSA6IGZtdFNob3J0KHZhbCk7XG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKFxuICAgICd2YWwgaXMgbm90IGEgbm9uLWVtcHR5IHN0cmluZyBvciBhIHZhbGlkIG51bWJlci4gdmFsPScgK1xuICAgICAgSlNPTi5zdHJpbmdpZnkodmFsKVxuICApO1xufTtcblxuLyoqXG4gKiBQYXJzZSB0aGUgZ2l2ZW4gYHN0cmAgYW5kIHJldHVybiBtaWxsaXNlY29uZHMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7TnVtYmVyfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gcGFyc2Uoc3RyKSB7XG4gIHN0ciA9IFN0cmluZyhzdHIpO1xuICBpZiAoc3RyLmxlbmd0aCA+IDEwMCkge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgbWF0Y2ggPSAvXigtPyg/OlxcZCspP1xcLj9cXGQrKSAqKG1pbGxpc2Vjb25kcz98bXNlY3M/fG1zfHNlY29uZHM/fHNlY3M/fHN8bWludXRlcz98bWlucz98bXxob3Vycz98aHJzP3xofGRheXM/fGR8d2Vla3M/fHd8eWVhcnM/fHlycz98eSk/JC9pLmV4ZWMoXG4gICAgc3RyXG4gICk7XG4gIGlmICghbWF0Y2gpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIG4gPSBwYXJzZUZsb2F0KG1hdGNoWzFdKTtcbiAgdmFyIHR5cGUgPSAobWF0Y2hbMl0gfHwgJ21zJykudG9Mb3dlckNhc2UoKTtcbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSAneWVhcnMnOlxuICAgIGNhc2UgJ3llYXInOlxuICAgIGNhc2UgJ3lycyc6XG4gICAgY2FzZSAneXInOlxuICAgIGNhc2UgJ3knOlxuICAgICAgcmV0dXJuIG4gKiB5O1xuICAgIGNhc2UgJ3dlZWtzJzpcbiAgICBjYXNlICd3ZWVrJzpcbiAgICBjYXNlICd3JzpcbiAgICAgIHJldHVybiBuICogdztcbiAgICBjYXNlICdkYXlzJzpcbiAgICBjYXNlICdkYXknOlxuICAgIGNhc2UgJ2QnOlxuICAgICAgcmV0dXJuIG4gKiBkO1xuICAgIGNhc2UgJ2hvdXJzJzpcbiAgICBjYXNlICdob3VyJzpcbiAgICBjYXNlICdocnMnOlxuICAgIGNhc2UgJ2hyJzpcbiAgICBjYXNlICdoJzpcbiAgICAgIHJldHVybiBuICogaDtcbiAgICBjYXNlICdtaW51dGVzJzpcbiAgICBjYXNlICdtaW51dGUnOlxuICAgIGNhc2UgJ21pbnMnOlxuICAgIGNhc2UgJ21pbic6XG4gICAgY2FzZSAnbSc6XG4gICAgICByZXR1cm4gbiAqIG07XG4gICAgY2FzZSAnc2Vjb25kcyc6XG4gICAgY2FzZSAnc2Vjb25kJzpcbiAgICBjYXNlICdzZWNzJzpcbiAgICBjYXNlICdzZWMnOlxuICAgIGNhc2UgJ3MnOlxuICAgICAgcmV0dXJuIG4gKiBzO1xuICAgIGNhc2UgJ21pbGxpc2Vjb25kcyc6XG4gICAgY2FzZSAnbWlsbGlzZWNvbmQnOlxuICAgIGNhc2UgJ21zZWNzJzpcbiAgICBjYXNlICdtc2VjJzpcbiAgICBjYXNlICdtcyc6XG4gICAgICByZXR1cm4gbjtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxufVxuXG4vKipcbiAqIFNob3J0IGZvcm1hdCBmb3IgYG1zYC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gbXNcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGZtdFNob3J0KG1zKSB7XG4gIHZhciBtc0FicyA9IE1hdGguYWJzKG1zKTtcbiAgaWYgKG1zQWJzID49IGQpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIGQpICsgJ2QnO1xuICB9XG4gIGlmIChtc0FicyA+PSBoKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBoKSArICdoJztcbiAgfVxuICBpZiAobXNBYnMgPj0gbSkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gbSkgKyAnbSc7XG4gIH1cbiAgaWYgKG1zQWJzID49IHMpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIHMpICsgJ3MnO1xuICB9XG4gIHJldHVybiBtcyArICdtcyc7XG59XG5cbi8qKlxuICogTG9uZyBmb3JtYXQgZm9yIGBtc2AuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IG1zXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBmbXRMb25nKG1zKSB7XG4gIHZhciBtc0FicyA9IE1hdGguYWJzKG1zKTtcbiAgaWYgKG1zQWJzID49IGQpIHtcbiAgICByZXR1cm4gcGx1cmFsKG1zLCBtc0FicywgZCwgJ2RheScpO1xuICB9XG4gIGlmIChtc0FicyA+PSBoKSB7XG4gICAgcmV0dXJuIHBsdXJhbChtcywgbXNBYnMsIGgsICdob3VyJyk7XG4gIH1cbiAgaWYgKG1zQWJzID49IG0pIHtcbiAgICByZXR1cm4gcGx1cmFsKG1zLCBtc0FicywgbSwgJ21pbnV0ZScpO1xuICB9XG4gIGlmIChtc0FicyA+PSBzKSB7XG4gICAgcmV0dXJuIHBsdXJhbChtcywgbXNBYnMsIHMsICdzZWNvbmQnKTtcbiAgfVxuICByZXR1cm4gbXMgKyAnIG1zJztcbn1cblxuLyoqXG4gKiBQbHVyYWxpemF0aW9uIGhlbHBlci5cbiAqL1xuXG5mdW5jdGlvbiBwbHVyYWwobXMsIG1zQWJzLCBuLCBuYW1lKSB7XG4gIHZhciBpc1BsdXJhbCA9IG1zQWJzID49IG4gKiAxLjU7XG4gIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gbikgKyAnICcgKyBuYW1lICsgKGlzUGx1cmFsID8gJ3MnIDogJycpO1xufVxuIiwiLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbi8qKlxuICogVGhpcyBpcyB0aGUgd2ViIGJyb3dzZXIgaW1wbGVtZW50YXRpb24gb2YgYGRlYnVnKClgLlxuICovXG5cbmV4cG9ydHMuZm9ybWF0QXJncyA9IGZvcm1hdEFyZ3M7XG5leHBvcnRzLnNhdmUgPSBzYXZlO1xuZXhwb3J0cy5sb2FkID0gbG9hZDtcbmV4cG9ydHMudXNlQ29sb3JzID0gdXNlQ29sb3JzO1xuZXhwb3J0cy5zdG9yYWdlID0gbG9jYWxzdG9yYWdlKCk7XG5leHBvcnRzLmRlc3Ryb3kgPSAoKCkgPT4ge1xuXHRsZXQgd2FybmVkID0gZmFsc2U7XG5cblx0cmV0dXJuICgpID0+IHtcblx0XHRpZiAoIXdhcm5lZCkge1xuXHRcdFx0d2FybmVkID0gdHJ1ZTtcblx0XHRcdGNvbnNvbGUud2FybignSW5zdGFuY2UgbWV0aG9kIGBkZWJ1Zy5kZXN0cm95KClgIGlzIGRlcHJlY2F0ZWQgYW5kIG5vIGxvbmdlciBkb2VzIGFueXRoaW5nLiBJdCB3aWxsIGJlIHJlbW92ZWQgaW4gdGhlIG5leHQgbWFqb3IgdmVyc2lvbiBvZiBgZGVidWdgLicpO1xuXHRcdH1cblx0fTtcbn0pKCk7XG5cbi8qKlxuICogQ29sb3JzLlxuICovXG5cbmV4cG9ydHMuY29sb3JzID0gW1xuXHQnIzAwMDBDQycsXG5cdCcjMDAwMEZGJyxcblx0JyMwMDMzQ0MnLFxuXHQnIzAwMzNGRicsXG5cdCcjMDA2NkNDJyxcblx0JyMwMDY2RkYnLFxuXHQnIzAwOTlDQycsXG5cdCcjMDA5OUZGJyxcblx0JyMwMENDMDAnLFxuXHQnIzAwQ0MzMycsXG5cdCcjMDBDQzY2Jyxcblx0JyMwMENDOTknLFxuXHQnIzAwQ0NDQycsXG5cdCcjMDBDQ0ZGJyxcblx0JyMzMzAwQ0MnLFxuXHQnIzMzMDBGRicsXG5cdCcjMzMzM0NDJyxcblx0JyMzMzMzRkYnLFxuXHQnIzMzNjZDQycsXG5cdCcjMzM2NkZGJyxcblx0JyMzMzk5Q0MnLFxuXHQnIzMzOTlGRicsXG5cdCcjMzNDQzAwJyxcblx0JyMzM0NDMzMnLFxuXHQnIzMzQ0M2NicsXG5cdCcjMzNDQzk5Jyxcblx0JyMzM0NDQ0MnLFxuXHQnIzMzQ0NGRicsXG5cdCcjNjYwMENDJyxcblx0JyM2NjAwRkYnLFxuXHQnIzY2MzNDQycsXG5cdCcjNjYzM0ZGJyxcblx0JyM2NkNDMDAnLFxuXHQnIzY2Q0MzMycsXG5cdCcjOTkwMENDJyxcblx0JyM5OTAwRkYnLFxuXHQnIzk5MzNDQycsXG5cdCcjOTkzM0ZGJyxcblx0JyM5OUNDMDAnLFxuXHQnIzk5Q0MzMycsXG5cdCcjQ0MwMDAwJyxcblx0JyNDQzAwMzMnLFxuXHQnI0NDMDA2NicsXG5cdCcjQ0MwMDk5Jyxcblx0JyNDQzAwQ0MnLFxuXHQnI0NDMDBGRicsXG5cdCcjQ0MzMzAwJyxcblx0JyNDQzMzMzMnLFxuXHQnI0NDMzM2NicsXG5cdCcjQ0MzMzk5Jyxcblx0JyNDQzMzQ0MnLFxuXHQnI0NDMzNGRicsXG5cdCcjQ0M2NjAwJyxcblx0JyNDQzY2MzMnLFxuXHQnI0NDOTkwMCcsXG5cdCcjQ0M5OTMzJyxcblx0JyNDQ0NDMDAnLFxuXHQnI0NDQ0MzMycsXG5cdCcjRkYwMDAwJyxcblx0JyNGRjAwMzMnLFxuXHQnI0ZGMDA2NicsXG5cdCcjRkYwMDk5Jyxcblx0JyNGRjAwQ0MnLFxuXHQnI0ZGMDBGRicsXG5cdCcjRkYzMzAwJyxcblx0JyNGRjMzMzMnLFxuXHQnI0ZGMzM2NicsXG5cdCcjRkYzMzk5Jyxcblx0JyNGRjMzQ0MnLFxuXHQnI0ZGMzNGRicsXG5cdCcjRkY2NjAwJyxcblx0JyNGRjY2MzMnLFxuXHQnI0ZGOTkwMCcsXG5cdCcjRkY5OTMzJyxcblx0JyNGRkNDMDAnLFxuXHQnI0ZGQ0MzMydcbl07XG5cbi8qKlxuICogQ3VycmVudGx5IG9ubHkgV2ViS2l0LWJhc2VkIFdlYiBJbnNwZWN0b3JzLCBGaXJlZm94ID49IHYzMSxcbiAqIGFuZCB0aGUgRmlyZWJ1ZyBleHRlbnNpb24gKGFueSBGaXJlZm94IHZlcnNpb24pIGFyZSBrbm93blxuICogdG8gc3VwcG9ydCBcIiVjXCIgQ1NTIGN1c3RvbWl6YXRpb25zLlxuICpcbiAqIFRPRE86IGFkZCBhIGBsb2NhbFN0b3JhZ2VgIHZhcmlhYmxlIHRvIGV4cGxpY2l0bHkgZW5hYmxlL2Rpc2FibGUgY29sb3JzXG4gKi9cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbXBsZXhpdHlcbmZ1bmN0aW9uIHVzZUNvbG9ycygpIHtcblx0Ly8gTkI6IEluIGFuIEVsZWN0cm9uIHByZWxvYWQgc2NyaXB0LCBkb2N1bWVudCB3aWxsIGJlIGRlZmluZWQgYnV0IG5vdCBmdWxseVxuXHQvLyBpbml0aWFsaXplZC4gU2luY2Ugd2Uga25vdyB3ZSdyZSBpbiBDaHJvbWUsIHdlJ2xsIGp1c3QgZGV0ZWN0IHRoaXMgY2FzZVxuXHQvLyBleHBsaWNpdGx5XG5cdGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cucHJvY2VzcyAmJiAod2luZG93LnByb2Nlc3MudHlwZSA9PT0gJ3JlbmRlcmVyJyB8fCB3aW5kb3cucHJvY2Vzcy5fX253anMpKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHQvLyBJbnRlcm5ldCBFeHBsb3JlciBhbmQgRWRnZSBkbyBub3Qgc3VwcG9ydCBjb2xvcnMuXG5cdGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IudXNlckFnZW50ICYmIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5tYXRjaCgvKGVkZ2V8dHJpZGVudClcXC8oXFxkKykvKSkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdC8vIElzIHdlYmtpdD8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTY0NTk2MDYvMzc2NzczXG5cdC8vIGRvY3VtZW50IGlzIHVuZGVmaW5lZCBpbiByZWFjdC1uYXRpdmU6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC1uYXRpdmUvcHVsbC8xNjMyXG5cdHJldHVybiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5XZWJraXRBcHBlYXJhbmNlKSB8fFxuXHRcdC8vIElzIGZpcmVidWc/IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzM5ODEyMC8zNzY3NzNcblx0XHQodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmNvbnNvbGUgJiYgKHdpbmRvdy5jb25zb2xlLmZpcmVidWcgfHwgKHdpbmRvdy5jb25zb2xlLmV4Y2VwdGlvbiAmJiB3aW5kb3cuY29uc29sZS50YWJsZSkpKSB8fFxuXHRcdC8vIElzIGZpcmVmb3ggPj0gdjMxP1xuXHRcdC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvVG9vbHMvV2ViX0NvbnNvbGUjU3R5bGluZ19tZXNzYWdlc1xuXHRcdCh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IudXNlckFnZW50ICYmIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5tYXRjaCgvZmlyZWZveFxcLyhcXGQrKS8pICYmIHBhcnNlSW50KFJlZ0V4cC4kMSwgMTApID49IDMxKSB8fFxuXHRcdC8vIERvdWJsZSBjaGVjayB3ZWJraXQgaW4gdXNlckFnZW50IGp1c3QgaW4gY2FzZSB3ZSBhcmUgaW4gYSB3b3JrZXJcblx0XHQodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudCAmJiBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkubWF0Y2goL2FwcGxld2Via2l0XFwvKFxcZCspLykpO1xufVxuXG4vKipcbiAqIENvbG9yaXplIGxvZyBhcmd1bWVudHMgaWYgZW5hYmxlZC5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGZvcm1hdEFyZ3MoYXJncykge1xuXHRhcmdzWzBdID0gKHRoaXMudXNlQ29sb3JzID8gJyVjJyA6ICcnKSArXG5cdFx0dGhpcy5uYW1lc3BhY2UgK1xuXHRcdCh0aGlzLnVzZUNvbG9ycyA/ICcgJWMnIDogJyAnKSArXG5cdFx0YXJnc1swXSArXG5cdFx0KHRoaXMudXNlQ29sb3JzID8gJyVjICcgOiAnICcpICtcblx0XHQnKycgKyBtb2R1bGUuZXhwb3J0cy5odW1hbml6ZSh0aGlzLmRpZmYpO1xuXG5cdGlmICghdGhpcy51c2VDb2xvcnMpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBjID0gJ2NvbG9yOiAnICsgdGhpcy5jb2xvcjtcblx0YXJncy5zcGxpY2UoMSwgMCwgYywgJ2NvbG9yOiBpbmhlcml0Jyk7XG5cblx0Ly8gVGhlIGZpbmFsIFwiJWNcIiBpcyBzb21ld2hhdCB0cmlja3ksIGJlY2F1c2UgdGhlcmUgY291bGQgYmUgb3RoZXJcblx0Ly8gYXJndW1lbnRzIHBhc3NlZCBlaXRoZXIgYmVmb3JlIG9yIGFmdGVyIHRoZSAlYywgc28gd2UgbmVlZCB0b1xuXHQvLyBmaWd1cmUgb3V0IHRoZSBjb3JyZWN0IGluZGV4IHRvIGluc2VydCB0aGUgQ1NTIGludG9cblx0bGV0IGluZGV4ID0gMDtcblx0bGV0IGxhc3RDID0gMDtcblx0YXJnc1swXS5yZXBsYWNlKC8lW2EtekEtWiVdL2csIG1hdGNoID0+IHtcblx0XHRpZiAobWF0Y2ggPT09ICclJScpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aW5kZXgrKztcblx0XHRpZiAobWF0Y2ggPT09ICclYycpIHtcblx0XHRcdC8vIFdlIG9ubHkgYXJlIGludGVyZXN0ZWQgaW4gdGhlICpsYXN0KiAlY1xuXHRcdFx0Ly8gKHRoZSB1c2VyIG1heSBoYXZlIHByb3ZpZGVkIHRoZWlyIG93bilcblx0XHRcdGxhc3RDID0gaW5kZXg7XG5cdFx0fVxuXHR9KTtcblxuXHRhcmdzLnNwbGljZShsYXN0QywgMCwgYyk7XG59XG5cbi8qKlxuICogSW52b2tlcyBgY29uc29sZS5kZWJ1ZygpYCB3aGVuIGF2YWlsYWJsZS5cbiAqIE5vLW9wIHdoZW4gYGNvbnNvbGUuZGVidWdgIGlzIG5vdCBhIFwiZnVuY3Rpb25cIi5cbiAqIElmIGBjb25zb2xlLmRlYnVnYCBpcyBub3QgYXZhaWxhYmxlLCBmYWxscyBiYWNrXG4gKiB0byBgY29uc29sZS5sb2dgLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cbmV4cG9ydHMubG9nID0gY29uc29sZS5kZWJ1ZyB8fCBjb25zb2xlLmxvZyB8fCAoKCkgPT4ge30pO1xuXG4vKipcbiAqIFNhdmUgYG5hbWVzcGFjZXNgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2VzXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gc2F2ZShuYW1lc3BhY2VzKSB7XG5cdHRyeSB7XG5cdFx0aWYgKG5hbWVzcGFjZXMpIHtcblx0XHRcdGV4cG9ydHMuc3RvcmFnZS5zZXRJdGVtKCdkZWJ1ZycsIG5hbWVzcGFjZXMpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRleHBvcnRzLnN0b3JhZ2UucmVtb3ZlSXRlbSgnZGVidWcnKTtcblx0XHR9XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Ly8gU3dhbGxvd1xuXHRcdC8vIFhYWCAoQFFpeC0pIHNob3VsZCB3ZSBiZSBsb2dnaW5nIHRoZXNlP1xuXHR9XG59XG5cbi8qKlxuICogTG9hZCBgbmFtZXNwYWNlc2AuXG4gKlxuICogQHJldHVybiB7U3RyaW5nfSByZXR1cm5zIHRoZSBwcmV2aW91c2x5IHBlcnNpc3RlZCBkZWJ1ZyBtb2Rlc1xuICogQGFwaSBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGxvYWQoKSB7XG5cdGxldCByO1xuXHR0cnkge1xuXHRcdHIgPSBleHBvcnRzLnN0b3JhZ2UuZ2V0SXRlbSgnZGVidWcnKTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHQvLyBTd2FsbG93XG5cdFx0Ly8gWFhYIChAUWl4LSkgc2hvdWxkIHdlIGJlIGxvZ2dpbmcgdGhlc2U/XG5cdH1cblxuXHQvLyBJZiBkZWJ1ZyBpc24ndCBzZXQgaW4gTFMsIGFuZCB3ZSdyZSBpbiBFbGVjdHJvbiwgdHJ5IHRvIGxvYWQgJERFQlVHXG5cdGlmICghciAmJiB0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgJ2VudicgaW4gcHJvY2Vzcykge1xuXHRcdHIgPSBwcm9jZXNzLmVudi5ERUJVRztcblx0fVxuXG5cdHJldHVybiByO1xufVxuXG4vKipcbiAqIExvY2Fsc3RvcmFnZSBhdHRlbXB0cyB0byByZXR1cm4gdGhlIGxvY2Fsc3RvcmFnZS5cbiAqXG4gKiBUaGlzIGlzIG5lY2Vzc2FyeSBiZWNhdXNlIHNhZmFyaSB0aHJvd3NcbiAqIHdoZW4gYSB1c2VyIGRpc2FibGVzIGNvb2tpZXMvbG9jYWxzdG9yYWdlXG4gKiBhbmQgeW91IGF0dGVtcHQgdG8gYWNjZXNzIGl0LlxuICpcbiAqIEByZXR1cm4ge0xvY2FsU3RvcmFnZX1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGxvY2Fsc3RvcmFnZSgpIHtcblx0dHJ5IHtcblx0XHQvLyBUVk1MS2l0IChBcHBsZSBUViBKUyBSdW50aW1lKSBkb2VzIG5vdCBoYXZlIGEgd2luZG93IG9iamVjdCwganVzdCBsb2NhbFN0b3JhZ2UgaW4gdGhlIGdsb2JhbCBjb250ZXh0XG5cdFx0Ly8gVGhlIEJyb3dzZXIgYWxzbyBoYXMgbG9jYWxTdG9yYWdlIGluIHRoZSBnbG9iYWwgY29udGV4dC5cblx0XHRyZXR1cm4gbG9jYWxTdG9yYWdlO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdC8vIFN3YWxsb3dcblx0XHQvLyBYWFggKEBRaXgtKSBzaG91bGQgd2UgYmUgbG9nZ2luZyB0aGVzZT9cblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY29tbW9uJykoZXhwb3J0cyk7XG5cbmNvbnN0IHtmb3JtYXR0ZXJzfSA9IG1vZHVsZS5leHBvcnRzO1xuXG4vKipcbiAqIE1hcCAlaiB0byBgSlNPTi5zdHJpbmdpZnkoKWAsIHNpbmNlIG5vIFdlYiBJbnNwZWN0b3JzIGRvIHRoYXQgYnkgZGVmYXVsdC5cbiAqL1xuXG5mb3JtYXR0ZXJzLmogPSBmdW5jdGlvbiAodikge1xuXHR0cnkge1xuXHRcdHJldHVybiBKU09OLnN0cmluZ2lmeSh2KTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRyZXR1cm4gJ1tVbmV4cGVjdGVkSlNPTlBhcnNlRXJyb3JdOiAnICsgZXJyb3IubWVzc2FnZTtcblx0fVxufTtcbiIsIlxuLyoqXG4gKiBUaGlzIGlzIHRoZSBjb21tb24gbG9naWMgZm9yIGJvdGggdGhlIE5vZGUuanMgYW5kIHdlYiBicm93c2VyXG4gKiBpbXBsZW1lbnRhdGlvbnMgb2YgYGRlYnVnKClgLlxuICovXG5cbmZ1bmN0aW9uIHNldHVwKGVudikge1xuXHRjcmVhdGVEZWJ1Zy5kZWJ1ZyA9IGNyZWF0ZURlYnVnO1xuXHRjcmVhdGVEZWJ1Zy5kZWZhdWx0ID0gY3JlYXRlRGVidWc7XG5cdGNyZWF0ZURlYnVnLmNvZXJjZSA9IGNvZXJjZTtcblx0Y3JlYXRlRGVidWcuZGlzYWJsZSA9IGRpc2FibGU7XG5cdGNyZWF0ZURlYnVnLmVuYWJsZSA9IGVuYWJsZTtcblx0Y3JlYXRlRGVidWcuZW5hYmxlZCA9IGVuYWJsZWQ7XG5cdGNyZWF0ZURlYnVnLmh1bWFuaXplID0gcmVxdWlyZSgnbXMnKTtcblx0Y3JlYXRlRGVidWcuZGVzdHJveSA9IGRlc3Ryb3k7XG5cblx0T2JqZWN0LmtleXMoZW52KS5mb3JFYWNoKGtleSA9PiB7XG5cdFx0Y3JlYXRlRGVidWdba2V5XSA9IGVudltrZXldO1xuXHR9KTtcblxuXHQvKipcblx0KiBUaGUgY3VycmVudGx5IGFjdGl2ZSBkZWJ1ZyBtb2RlIG5hbWVzLCBhbmQgbmFtZXMgdG8gc2tpcC5cblx0Ki9cblxuXHRjcmVhdGVEZWJ1Zy5uYW1lcyA9IFtdO1xuXHRjcmVhdGVEZWJ1Zy5za2lwcyA9IFtdO1xuXG5cdC8qKlxuXHQqIE1hcCBvZiBzcGVjaWFsIFwiJW5cIiBoYW5kbGluZyBmdW5jdGlvbnMsIGZvciB0aGUgZGVidWcgXCJmb3JtYXRcIiBhcmd1bWVudC5cblx0KlxuXHQqIFZhbGlkIGtleSBuYW1lcyBhcmUgYSBzaW5nbGUsIGxvd2VyIG9yIHVwcGVyLWNhc2UgbGV0dGVyLCBpLmUuIFwiblwiIGFuZCBcIk5cIi5cblx0Ki9cblx0Y3JlYXRlRGVidWcuZm9ybWF0dGVycyA9IHt9O1xuXG5cdC8qKlxuXHQqIFNlbGVjdHMgYSBjb2xvciBmb3IgYSBkZWJ1ZyBuYW1lc3BhY2Vcblx0KiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlIFRoZSBuYW1lc3BhY2Ugc3RyaW5nIGZvciB0aGUgZm9yIHRoZSBkZWJ1ZyBpbnN0YW5jZSB0byBiZSBjb2xvcmVkXG5cdCogQHJldHVybiB7TnVtYmVyfFN0cmluZ30gQW4gQU5TSSBjb2xvciBjb2RlIGZvciB0aGUgZ2l2ZW4gbmFtZXNwYWNlXG5cdCogQGFwaSBwcml2YXRlXG5cdCovXG5cdGZ1bmN0aW9uIHNlbGVjdENvbG9yKG5hbWVzcGFjZSkge1xuXHRcdGxldCBoYXNoID0gMDtcblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbmFtZXNwYWNlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRoYXNoID0gKChoYXNoIDw8IDUpIC0gaGFzaCkgKyBuYW1lc3BhY2UuY2hhckNvZGVBdChpKTtcblx0XHRcdGhhc2ggfD0gMDsgLy8gQ29udmVydCB0byAzMmJpdCBpbnRlZ2VyXG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNyZWF0ZURlYnVnLmNvbG9yc1tNYXRoLmFicyhoYXNoKSAlIGNyZWF0ZURlYnVnLmNvbG9ycy5sZW5ndGhdO1xuXHR9XG5cdGNyZWF0ZURlYnVnLnNlbGVjdENvbG9yID0gc2VsZWN0Q29sb3I7XG5cblx0LyoqXG5cdCogQ3JlYXRlIGEgZGVidWdnZXIgd2l0aCB0aGUgZ2l2ZW4gYG5hbWVzcGFjZWAuXG5cdCpcblx0KiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlXG5cdCogQHJldHVybiB7RnVuY3Rpb259XG5cdCogQGFwaSBwdWJsaWNcblx0Ki9cblx0ZnVuY3Rpb24gY3JlYXRlRGVidWcobmFtZXNwYWNlKSB7XG5cdFx0bGV0IHByZXZUaW1lO1xuXHRcdGxldCBlbmFibGVPdmVycmlkZSA9IG51bGw7XG5cblx0XHRmdW5jdGlvbiBkZWJ1ZyguLi5hcmdzKSB7XG5cdFx0XHQvLyBEaXNhYmxlZD9cblx0XHRcdGlmICghZGVidWcuZW5hYmxlZCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHNlbGYgPSBkZWJ1ZztcblxuXHRcdFx0Ly8gU2V0IGBkaWZmYCB0aW1lc3RhbXBcblx0XHRcdGNvbnN0IGN1cnIgPSBOdW1iZXIobmV3IERhdGUoKSk7XG5cdFx0XHRjb25zdCBtcyA9IGN1cnIgLSAocHJldlRpbWUgfHwgY3Vycik7XG5cdFx0XHRzZWxmLmRpZmYgPSBtcztcblx0XHRcdHNlbGYucHJldiA9IHByZXZUaW1lO1xuXHRcdFx0c2VsZi5jdXJyID0gY3Vycjtcblx0XHRcdHByZXZUaW1lID0gY3VycjtcblxuXHRcdFx0YXJnc1swXSA9IGNyZWF0ZURlYnVnLmNvZXJjZShhcmdzWzBdKTtcblxuXHRcdFx0aWYgKHR5cGVvZiBhcmdzWzBdICE9PSAnc3RyaW5nJykge1xuXHRcdFx0XHQvLyBBbnl0aGluZyBlbHNlIGxldCdzIGluc3BlY3Qgd2l0aCAlT1xuXHRcdFx0XHRhcmdzLnVuc2hpZnQoJyVPJyk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEFwcGx5IGFueSBgZm9ybWF0dGVyc2AgdHJhbnNmb3JtYXRpb25zXG5cdFx0XHRsZXQgaW5kZXggPSAwO1xuXHRcdFx0YXJnc1swXSA9IGFyZ3NbMF0ucmVwbGFjZSgvJShbYS16QS1aJV0pL2csIChtYXRjaCwgZm9ybWF0KSA9PiB7XG5cdFx0XHRcdC8vIElmIHdlIGVuY291bnRlciBhbiBlc2NhcGVkICUgdGhlbiBkb24ndCBpbmNyZWFzZSB0aGUgYXJyYXkgaW5kZXhcblx0XHRcdFx0aWYgKG1hdGNoID09PSAnJSUnKSB7XG5cdFx0XHRcdFx0cmV0dXJuICclJztcblx0XHRcdFx0fVxuXHRcdFx0XHRpbmRleCsrO1xuXHRcdFx0XHRjb25zdCBmb3JtYXR0ZXIgPSBjcmVhdGVEZWJ1Zy5mb3JtYXR0ZXJzW2Zvcm1hdF07XG5cdFx0XHRcdGlmICh0eXBlb2YgZm9ybWF0dGVyID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdFx0Y29uc3QgdmFsID0gYXJnc1tpbmRleF07XG5cdFx0XHRcdFx0bWF0Y2ggPSBmb3JtYXR0ZXIuY2FsbChzZWxmLCB2YWwpO1xuXG5cdFx0XHRcdFx0Ly8gTm93IHdlIG5lZWQgdG8gcmVtb3ZlIGBhcmdzW2luZGV4XWAgc2luY2UgaXQncyBpbmxpbmVkIGluIHRoZSBgZm9ybWF0YFxuXHRcdFx0XHRcdGFyZ3Muc3BsaWNlKGluZGV4LCAxKTtcblx0XHRcdFx0XHRpbmRleC0tO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBtYXRjaDtcblx0XHRcdH0pO1xuXG5cdFx0XHQvLyBBcHBseSBlbnYtc3BlY2lmaWMgZm9ybWF0dGluZyAoY29sb3JzLCBldGMuKVxuXHRcdFx0Y3JlYXRlRGVidWcuZm9ybWF0QXJncy5jYWxsKHNlbGYsIGFyZ3MpO1xuXG5cdFx0XHRjb25zdCBsb2dGbiA9IHNlbGYubG9nIHx8IGNyZWF0ZURlYnVnLmxvZztcblx0XHRcdGxvZ0ZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXHRcdH1cblxuXHRcdGRlYnVnLm5hbWVzcGFjZSA9IG5hbWVzcGFjZTtcblx0XHRkZWJ1Zy51c2VDb2xvcnMgPSBjcmVhdGVEZWJ1Zy51c2VDb2xvcnMoKTtcblx0XHRkZWJ1Zy5jb2xvciA9IGNyZWF0ZURlYnVnLnNlbGVjdENvbG9yKG5hbWVzcGFjZSk7XG5cdFx0ZGVidWcuZXh0ZW5kID0gZXh0ZW5kO1xuXHRcdGRlYnVnLmRlc3Ryb3kgPSBjcmVhdGVEZWJ1Zy5kZXN0cm95OyAvLyBYWFggVGVtcG9yYXJ5LiBXaWxsIGJlIHJlbW92ZWQgaW4gdGhlIG5leHQgbWFqb3IgcmVsZWFzZS5cblxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkZWJ1ZywgJ2VuYWJsZWQnLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcblx0XHRcdGdldDogKCkgPT4gZW5hYmxlT3ZlcnJpZGUgPT09IG51bGwgPyBjcmVhdGVEZWJ1Zy5lbmFibGVkKG5hbWVzcGFjZSkgOiBlbmFibGVPdmVycmlkZSxcblx0XHRcdHNldDogdiA9PiB7XG5cdFx0XHRcdGVuYWJsZU92ZXJyaWRlID0gdjtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdC8vIEVudi1zcGVjaWZpYyBpbml0aWFsaXphdGlvbiBsb2dpYyBmb3IgZGVidWcgaW5zdGFuY2VzXG5cdFx0aWYgKHR5cGVvZiBjcmVhdGVEZWJ1Zy5pbml0ID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRjcmVhdGVEZWJ1Zy5pbml0KGRlYnVnKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZGVidWc7XG5cdH1cblxuXHRmdW5jdGlvbiBleHRlbmQobmFtZXNwYWNlLCBkZWxpbWl0ZXIpIHtcblx0XHRjb25zdCBuZXdEZWJ1ZyA9IGNyZWF0ZURlYnVnKHRoaXMubmFtZXNwYWNlICsgKHR5cGVvZiBkZWxpbWl0ZXIgPT09ICd1bmRlZmluZWQnID8gJzonIDogZGVsaW1pdGVyKSArIG5hbWVzcGFjZSk7XG5cdFx0bmV3RGVidWcubG9nID0gdGhpcy5sb2c7XG5cdFx0cmV0dXJuIG5ld0RlYnVnO1xuXHR9XG5cblx0LyoqXG5cdCogRW5hYmxlcyBhIGRlYnVnIG1vZGUgYnkgbmFtZXNwYWNlcy4gVGhpcyBjYW4gaW5jbHVkZSBtb2Rlc1xuXHQqIHNlcGFyYXRlZCBieSBhIGNvbG9uIGFuZCB3aWxkY2FyZHMuXG5cdCpcblx0KiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlc1xuXHQqIEBhcGkgcHVibGljXG5cdCovXG5cdGZ1bmN0aW9uIGVuYWJsZShuYW1lc3BhY2VzKSB7XG5cdFx0Y3JlYXRlRGVidWcuc2F2ZShuYW1lc3BhY2VzKTtcblxuXHRcdGNyZWF0ZURlYnVnLm5hbWVzID0gW107XG5cdFx0Y3JlYXRlRGVidWcuc2tpcHMgPSBbXTtcblxuXHRcdGxldCBpO1xuXHRcdGNvbnN0IHNwbGl0ID0gKHR5cGVvZiBuYW1lc3BhY2VzID09PSAnc3RyaW5nJyA/IG5hbWVzcGFjZXMgOiAnJykuc3BsaXQoL1tcXHMsXSsvKTtcblx0XHRjb25zdCBsZW4gPSBzcGxpdC5sZW5ndGg7XG5cblx0XHRmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdGlmICghc3BsaXRbaV0pIHtcblx0XHRcdFx0Ly8gaWdub3JlIGVtcHR5IHN0cmluZ3Ncblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdG5hbWVzcGFjZXMgPSBzcGxpdFtpXS5yZXBsYWNlKC9cXCovZywgJy4qPycpO1xuXG5cdFx0XHRpZiAobmFtZXNwYWNlc1swXSA9PT0gJy0nKSB7XG5cdFx0XHRcdGNyZWF0ZURlYnVnLnNraXBzLnB1c2gobmV3IFJlZ0V4cCgnXicgKyBuYW1lc3BhY2VzLnN1YnN0cigxKSArICckJykpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y3JlYXRlRGVidWcubmFtZXMucHVzaChuZXcgUmVnRXhwKCdeJyArIG5hbWVzcGFjZXMgKyAnJCcpKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvKipcblx0KiBEaXNhYmxlIGRlYnVnIG91dHB1dC5cblx0KlxuXHQqIEByZXR1cm4ge1N0cmluZ30gbmFtZXNwYWNlc1xuXHQqIEBhcGkgcHVibGljXG5cdCovXG5cdGZ1bmN0aW9uIGRpc2FibGUoKSB7XG5cdFx0Y29uc3QgbmFtZXNwYWNlcyA9IFtcblx0XHRcdC4uLmNyZWF0ZURlYnVnLm5hbWVzLm1hcCh0b05hbWVzcGFjZSksXG5cdFx0XHQuLi5jcmVhdGVEZWJ1Zy5za2lwcy5tYXAodG9OYW1lc3BhY2UpLm1hcChuYW1lc3BhY2UgPT4gJy0nICsgbmFtZXNwYWNlKVxuXHRcdF0uam9pbignLCcpO1xuXHRcdGNyZWF0ZURlYnVnLmVuYWJsZSgnJyk7XG5cdFx0cmV0dXJuIG5hbWVzcGFjZXM7XG5cdH1cblxuXHQvKipcblx0KiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIG1vZGUgbmFtZSBpcyBlbmFibGVkLCBmYWxzZSBvdGhlcndpc2UuXG5cdCpcblx0KiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuXHQqIEByZXR1cm4ge0Jvb2xlYW59XG5cdCogQGFwaSBwdWJsaWNcblx0Ki9cblx0ZnVuY3Rpb24gZW5hYmxlZChuYW1lKSB7XG5cdFx0aWYgKG5hbWVbbmFtZS5sZW5ndGggLSAxXSA9PT0gJyonKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRsZXQgaTtcblx0XHRsZXQgbGVuO1xuXG5cdFx0Zm9yIChpID0gMCwgbGVuID0gY3JlYXRlRGVidWcuc2tpcHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdGlmIChjcmVhdGVEZWJ1Zy5za2lwc1tpXS50ZXN0KG5hbWUpKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRmb3IgKGkgPSAwLCBsZW4gPSBjcmVhdGVEZWJ1Zy5uYW1lcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0aWYgKGNyZWF0ZURlYnVnLm5hbWVzW2ldLnRlc3QobmFtZSkpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0LyoqXG5cdCogQ29udmVydCByZWdleHAgdG8gbmFtZXNwYWNlXG5cdCpcblx0KiBAcGFyYW0ge1JlZ0V4cH0gcmVneGVwXG5cdCogQHJldHVybiB7U3RyaW5nfSBuYW1lc3BhY2Vcblx0KiBAYXBpIHByaXZhdGVcblx0Ki9cblx0ZnVuY3Rpb24gdG9OYW1lc3BhY2UocmVnZXhwKSB7XG5cdFx0cmV0dXJuIHJlZ2V4cC50b1N0cmluZygpXG5cdFx0XHQuc3Vic3RyaW5nKDIsIHJlZ2V4cC50b1N0cmluZygpLmxlbmd0aCAtIDIpXG5cdFx0XHQucmVwbGFjZSgvXFwuXFwqXFw/JC8sICcqJyk7XG5cdH1cblxuXHQvKipcblx0KiBDb2VyY2UgYHZhbGAuXG5cdCpcblx0KiBAcGFyYW0ge01peGVkfSB2YWxcblx0KiBAcmV0dXJuIHtNaXhlZH1cblx0KiBAYXBpIHByaXZhdGVcblx0Ki9cblx0ZnVuY3Rpb24gY29lcmNlKHZhbCkge1xuXHRcdGlmICh2YWwgaW5zdGFuY2VvZiBFcnJvcikge1xuXHRcdFx0cmV0dXJuIHZhbC5zdGFjayB8fCB2YWwubWVzc2FnZTtcblx0XHR9XG5cdFx0cmV0dXJuIHZhbDtcblx0fVxuXG5cdC8qKlxuXHQqIFhYWCBETyBOT1QgVVNFLiBUaGlzIGlzIGEgdGVtcG9yYXJ5IHN0dWIgZnVuY3Rpb24uXG5cdCogWFhYIEl0IFdJTEwgYmUgcmVtb3ZlZCBpbiB0aGUgbmV4dCBtYWpvciByZWxlYXNlLlxuXHQqL1xuXHRmdW5jdGlvbiBkZXN0cm95KCkge1xuXHRcdGNvbnNvbGUud2FybignSW5zdGFuY2UgbWV0aG9kIGBkZWJ1Zy5kZXN0cm95KClgIGlzIGRlcHJlY2F0ZWQgYW5kIG5vIGxvbmdlciBkb2VzIGFueXRoaW5nLiBJdCB3aWxsIGJlIHJlbW92ZWQgaW4gdGhlIG5leHQgbWFqb3IgdmVyc2lvbiBvZiBgZGVidWdgLicpO1xuXHR9XG5cblx0Y3JlYXRlRGVidWcuZW5hYmxlKGNyZWF0ZURlYnVnLmxvYWQoKSk7XG5cblx0cmV0dXJuIGNyZWF0ZURlYnVnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldHVwO1xuIiwibW9kdWxlLmV4cG9ydHMgPSAoKCkgPT4ge1xuICBpZiAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4gc2VsZjtcbiAgfSBlbHNlIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHdpbmRvdztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xuICB9XG59KSgpO1xuIiwiY29uc3QgU29ja2V0ID0gcmVxdWlyZShcIi4vc29ja2V0XCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICh1cmksIG9wdHMpID0+IG5ldyBTb2NrZXQodXJpLCBvcHRzKTtcblxuLyoqXG4gKiBFeHBvc2UgZGVwcyBmb3IgbGVnYWN5IGNvbXBhdGliaWxpdHlcbiAqIGFuZCBzdGFuZGFsb25lIGJyb3dzZXIgYWNjZXNzLlxuICovXG5cbm1vZHVsZS5leHBvcnRzLlNvY2tldCA9IFNvY2tldDtcbm1vZHVsZS5leHBvcnRzLnByb3RvY29sID0gU29ja2V0LnByb3RvY29sOyAvLyB0aGlzIGlzIGFuIGludFxubW9kdWxlLmV4cG9ydHMuVHJhbnNwb3J0ID0gcmVxdWlyZShcIi4vdHJhbnNwb3J0XCIpO1xubW9kdWxlLmV4cG9ydHMudHJhbnNwb3J0cyA9IHJlcXVpcmUoXCIuL3RyYW5zcG9ydHMvaW5kZXhcIik7XG5tb2R1bGUuZXhwb3J0cy5wYXJzZXIgPSByZXF1aXJlKFwiZW5naW5lLmlvLXBhcnNlclwiKTtcbiIsImNvbnN0IHRyYW5zcG9ydHMgPSByZXF1aXJlKFwiLi90cmFuc3BvcnRzL2luZGV4XCIpO1xuY29uc3QgRW1pdHRlciA9IHJlcXVpcmUoXCJjb21wb25lbnQtZW1pdHRlclwiKTtcbmNvbnN0IGRlYnVnID0gcmVxdWlyZShcImRlYnVnXCIpKFwiZW5naW5lLmlvLWNsaWVudDpzb2NrZXRcIik7XG5jb25zdCBwYXJzZXIgPSByZXF1aXJlKFwiZW5naW5lLmlvLXBhcnNlclwiKTtcbmNvbnN0IHBhcnNldXJpID0gcmVxdWlyZShcInBhcnNldXJpXCIpO1xuY29uc3QgcGFyc2VxcyA9IHJlcXVpcmUoXCJwYXJzZXFzXCIpO1xuXG5jbGFzcyBTb2NrZXQgZXh0ZW5kcyBFbWl0dGVyIHtcbiAgLyoqXG4gICAqIFNvY2tldCBjb25zdHJ1Y3Rvci5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd8T2JqZWN0fSB1cmkgb3Igb3B0aW9uc1xuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cbiAgY29uc3RydWN0b3IodXJpLCBvcHRzID0ge30pIHtcbiAgICBzdXBlcigpO1xuXG4gICAgaWYgKHVyaSAmJiBcIm9iamVjdFwiID09PSB0eXBlb2YgdXJpKSB7XG4gICAgICBvcHRzID0gdXJpO1xuICAgICAgdXJpID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAodXJpKSB7XG4gICAgICB1cmkgPSBwYXJzZXVyaSh1cmkpO1xuICAgICAgb3B0cy5ob3N0bmFtZSA9IHVyaS5ob3N0O1xuICAgICAgb3B0cy5zZWN1cmUgPSB1cmkucHJvdG9jb2wgPT09IFwiaHR0cHNcIiB8fCB1cmkucHJvdG9jb2wgPT09IFwid3NzXCI7XG4gICAgICBvcHRzLnBvcnQgPSB1cmkucG9ydDtcbiAgICAgIGlmICh1cmkucXVlcnkpIG9wdHMucXVlcnkgPSB1cmkucXVlcnk7XG4gICAgfSBlbHNlIGlmIChvcHRzLmhvc3QpIHtcbiAgICAgIG9wdHMuaG9zdG5hbWUgPSBwYXJzZXVyaShvcHRzLmhvc3QpLmhvc3Q7XG4gICAgfVxuXG4gICAgdGhpcy5zZWN1cmUgPVxuICAgICAgbnVsbCAhPSBvcHRzLnNlY3VyZVxuICAgICAgICA/IG9wdHMuc2VjdXJlXG4gICAgICAgIDogdHlwZW9mIGxvY2F0aW9uICE9PSBcInVuZGVmaW5lZFwiICYmIFwiaHR0cHM6XCIgPT09IGxvY2F0aW9uLnByb3RvY29sO1xuXG4gICAgaWYgKG9wdHMuaG9zdG5hbWUgJiYgIW9wdHMucG9ydCkge1xuICAgICAgLy8gaWYgbm8gcG9ydCBpcyBzcGVjaWZpZWQgbWFudWFsbHksIHVzZSB0aGUgcHJvdG9jb2wgZGVmYXVsdFxuICAgICAgb3B0cy5wb3J0ID0gdGhpcy5zZWN1cmUgPyBcIjQ0M1wiIDogXCI4MFwiO1xuICAgIH1cblxuICAgIHRoaXMuaG9zdG5hbWUgPVxuICAgICAgb3B0cy5ob3N0bmFtZSB8fFxuICAgICAgKHR5cGVvZiBsb2NhdGlvbiAhPT0gXCJ1bmRlZmluZWRcIiA/IGxvY2F0aW9uLmhvc3RuYW1lIDogXCJsb2NhbGhvc3RcIik7XG4gICAgdGhpcy5wb3J0ID1cbiAgICAgIG9wdHMucG9ydCB8fFxuICAgICAgKHR5cGVvZiBsb2NhdGlvbiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBsb2NhdGlvbi5wb3J0XG4gICAgICAgID8gbG9jYXRpb24ucG9ydFxuICAgICAgICA6IHRoaXMuc2VjdXJlXG4gICAgICAgID8gNDQzXG4gICAgICAgIDogODApO1xuXG4gICAgdGhpcy50cmFuc3BvcnRzID0gb3B0cy50cmFuc3BvcnRzIHx8IFtcInBvbGxpbmdcIiwgXCJ3ZWJzb2NrZXRcIl07XG4gICAgdGhpcy5yZWFkeVN0YXRlID0gXCJcIjtcbiAgICB0aGlzLndyaXRlQnVmZmVyID0gW107XG4gICAgdGhpcy5wcmV2QnVmZmVyTGVuID0gMDtcblxuICAgIHRoaXMub3B0cyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiL2VuZ2luZS5pb1wiLFxuICAgICAgICBhZ2VudDogZmFsc2UsXG4gICAgICAgIHdpdGhDcmVkZW50aWFsczogZmFsc2UsXG4gICAgICAgIHVwZ3JhZGU6IHRydWUsXG4gICAgICAgIGpzb25wOiB0cnVlLFxuICAgICAgICB0aW1lc3RhbXBQYXJhbTogXCJ0XCIsXG4gICAgICAgIHJlbWVtYmVyVXBncmFkZTogZmFsc2UsXG4gICAgICAgIHJlamVjdFVuYXV0aG9yaXplZDogdHJ1ZSxcbiAgICAgICAgcGVyTWVzc2FnZURlZmxhdGU6IHtcbiAgICAgICAgICB0aHJlc2hvbGQ6IDEwMjRcbiAgICAgICAgfSxcbiAgICAgICAgdHJhbnNwb3J0T3B0aW9uczoge30sXG4gICAgICAgIGNsb3NlT25CZWZvcmV1bmxvYWQ6IHRydWVcbiAgICAgIH0sXG4gICAgICBvcHRzXG4gICAgKTtcblxuICAgIHRoaXMub3B0cy5wYXRoID0gdGhpcy5vcHRzLnBhdGgucmVwbGFjZSgvXFwvJC8sIFwiXCIpICsgXCIvXCI7XG5cbiAgICBpZiAodHlwZW9mIHRoaXMub3B0cy5xdWVyeSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgdGhpcy5vcHRzLnF1ZXJ5ID0gcGFyc2Vxcy5kZWNvZGUodGhpcy5vcHRzLnF1ZXJ5KTtcbiAgICB9XG5cbiAgICAvLyBzZXQgb24gaGFuZHNoYWtlXG4gICAgdGhpcy5pZCA9IG51bGw7XG4gICAgdGhpcy51cGdyYWRlcyA9IG51bGw7XG4gICAgdGhpcy5waW5nSW50ZXJ2YWwgPSBudWxsO1xuICAgIHRoaXMucGluZ1RpbWVvdXQgPSBudWxsO1xuXG4gICAgLy8gc2V0IG9uIGhlYXJ0YmVhdFxuICAgIHRoaXMucGluZ1RpbWVvdXRUaW1lciA9IG51bGw7XG5cbiAgICBpZiAodHlwZW9mIGFkZEV2ZW50TGlzdGVuZXIgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgaWYgKHRoaXMub3B0cy5jbG9zZU9uQmVmb3JldW5sb2FkKSB7XG4gICAgICAgIC8vIEZpcmVmb3ggY2xvc2VzIHRoZSBjb25uZWN0aW9uIHdoZW4gdGhlIFwiYmVmb3JldW5sb2FkXCIgZXZlbnQgaXMgZW1pdHRlZCBidXQgbm90IENocm9tZS4gVGhpcyBldmVudCBsaXN0ZW5lclxuICAgICAgICAvLyBlbnN1cmVzIGV2ZXJ5IGJyb3dzZXIgYmVoYXZlcyB0aGUgc2FtZSAobm8gXCJkaXNjb25uZWN0XCIgZXZlbnQgYXQgdGhlIFNvY2tldC5JTyBsZXZlbCB3aGVuIHRoZSBwYWdlIGlzXG4gICAgICAgIC8vIGNsb3NlZC9yZWxvYWRlZClcbiAgICAgICAgYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICBcImJlZm9yZXVubG9hZFwiLFxuICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnRyYW5zcG9ydCkge1xuICAgICAgICAgICAgICAvLyBzaWxlbnRseSBjbG9zZSB0aGUgdHJhbnNwb3J0XG4gICAgICAgICAgICAgIHRoaXMudHJhbnNwb3J0LnJlbW92ZUFsbExpc3RlbmVycygpO1xuICAgICAgICAgICAgICB0aGlzLnRyYW5zcG9ydC5jbG9zZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZmFsc2VcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmhvc3RuYW1lICE9PSBcImxvY2FsaG9zdFwiKSB7XG4gICAgICAgIHRoaXMub2ZmbGluZUV2ZW50TGlzdGVuZXIgPSAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5vbkNsb3NlKFwidHJhbnNwb3J0IGNsb3NlXCIpO1xuICAgICAgICB9O1xuICAgICAgICBhZGRFdmVudExpc3RlbmVyKFwib2ZmbGluZVwiLCB0aGlzLm9mZmxpbmVFdmVudExpc3RlbmVyLCBmYWxzZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5vcGVuKCk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyB0cmFuc3BvcnQgb2YgdGhlIGdpdmVuIHR5cGUuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB0cmFuc3BvcnQgbmFtZVxuICAgKiBAcmV0dXJuIHtUcmFuc3BvcnR9XG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgY3JlYXRlVHJhbnNwb3J0KG5hbWUpIHtcbiAgICBkZWJ1ZygnY3JlYXRpbmcgdHJhbnNwb3J0IFwiJXNcIicsIG5hbWUpO1xuICAgIGNvbnN0IHF1ZXJ5ID0gY2xvbmUodGhpcy5vcHRzLnF1ZXJ5KTtcblxuICAgIC8vIGFwcGVuZCBlbmdpbmUuaW8gcHJvdG9jb2wgaWRlbnRpZmllclxuICAgIHF1ZXJ5LkVJTyA9IHBhcnNlci5wcm90b2NvbDtcblxuICAgIC8vIHRyYW5zcG9ydCBuYW1lXG4gICAgcXVlcnkudHJhbnNwb3J0ID0gbmFtZTtcblxuICAgIC8vIHNlc3Npb24gaWQgaWYgd2UgYWxyZWFkeSBoYXZlIG9uZVxuICAgIGlmICh0aGlzLmlkKSBxdWVyeS5zaWQgPSB0aGlzLmlkO1xuXG4gICAgY29uc3Qgb3B0cyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICB7fSxcbiAgICAgIHRoaXMub3B0cy50cmFuc3BvcnRPcHRpb25zW25hbWVdLFxuICAgICAgdGhpcy5vcHRzLFxuICAgICAge1xuICAgICAgICBxdWVyeSxcbiAgICAgICAgc29ja2V0OiB0aGlzLFxuICAgICAgICBob3N0bmFtZTogdGhpcy5ob3N0bmFtZSxcbiAgICAgICAgc2VjdXJlOiB0aGlzLnNlY3VyZSxcbiAgICAgICAgcG9ydDogdGhpcy5wb3J0XG4gICAgICB9XG4gICAgKTtcblxuICAgIGRlYnVnKFwib3B0aW9uczogJWpcIiwgb3B0cyk7XG5cbiAgICByZXR1cm4gbmV3IHRyYW5zcG9ydHNbbmFtZV0ob3B0cyk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgdHJhbnNwb3J0IHRvIHVzZSBhbmQgc3RhcnRzIHByb2JlLlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIG9wZW4oKSB7XG4gICAgbGV0IHRyYW5zcG9ydDtcbiAgICBpZiAoXG4gICAgICB0aGlzLm9wdHMucmVtZW1iZXJVcGdyYWRlICYmXG4gICAgICBTb2NrZXQucHJpb3JXZWJzb2NrZXRTdWNjZXNzICYmXG4gICAgICB0aGlzLnRyYW5zcG9ydHMuaW5kZXhPZihcIndlYnNvY2tldFwiKSAhPT0gLTFcbiAgICApIHtcbiAgICAgIHRyYW5zcG9ydCA9IFwid2Vic29ja2V0XCI7XG4gICAgfSBlbHNlIGlmICgwID09PSB0aGlzLnRyYW5zcG9ydHMubGVuZ3RoKSB7XG4gICAgICAvLyBFbWl0IGVycm9yIG9uIG5leHQgdGljayBzbyBpdCBjYW4gYmUgbGlzdGVuZWQgdG9cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmVtaXQoXCJlcnJvclwiLCBcIk5vIHRyYW5zcG9ydHMgYXZhaWxhYmxlXCIpO1xuICAgICAgfSwgMCk7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyYW5zcG9ydCA9IHRoaXMudHJhbnNwb3J0c1swXTtcbiAgICB9XG4gICAgdGhpcy5yZWFkeVN0YXRlID0gXCJvcGVuaW5nXCI7XG5cbiAgICAvLyBSZXRyeSB3aXRoIHRoZSBuZXh0IHRyYW5zcG9ydCBpZiB0aGUgdHJhbnNwb3J0IGlzIGRpc2FibGVkIChqc29ucDogZmFsc2UpXG4gICAgdHJ5IHtcbiAgICAgIHRyYW5zcG9ydCA9IHRoaXMuY3JlYXRlVHJhbnNwb3J0KHRyYW5zcG9ydCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgZGVidWcoXCJlcnJvciB3aGlsZSBjcmVhdGluZyB0cmFuc3BvcnQ6ICVzXCIsIGUpO1xuICAgICAgdGhpcy50cmFuc3BvcnRzLnNoaWZ0KCk7XG4gICAgICB0aGlzLm9wZW4oKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0cmFuc3BvcnQub3BlbigpO1xuICAgIHRoaXMuc2V0VHJhbnNwb3J0KHRyYW5zcG9ydCk7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgY3VycmVudCB0cmFuc3BvcnQuIERpc2FibGVzIHRoZSBleGlzdGluZyBvbmUgKGlmIGFueSkuXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgc2V0VHJhbnNwb3J0KHRyYW5zcG9ydCkge1xuICAgIGRlYnVnKFwic2V0dGluZyB0cmFuc3BvcnQgJXNcIiwgdHJhbnNwb3J0Lm5hbWUpO1xuXG4gICAgaWYgKHRoaXMudHJhbnNwb3J0KSB7XG4gICAgICBkZWJ1ZyhcImNsZWFyaW5nIGV4aXN0aW5nIHRyYW5zcG9ydCAlc1wiLCB0aGlzLnRyYW5zcG9ydC5uYW1lKTtcbiAgICAgIHRoaXMudHJhbnNwb3J0LnJlbW92ZUFsbExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIC8vIHNldCB1cCB0cmFuc3BvcnRcbiAgICB0aGlzLnRyYW5zcG9ydCA9IHRyYW5zcG9ydDtcblxuICAgIC8vIHNldCB1cCB0cmFuc3BvcnQgbGlzdGVuZXJzXG4gICAgdHJhbnNwb3J0XG4gICAgICAub24oXCJkcmFpblwiLCB0aGlzLm9uRHJhaW4uYmluZCh0aGlzKSlcbiAgICAgIC5vbihcInBhY2tldFwiLCB0aGlzLm9uUGFja2V0LmJpbmQodGhpcykpXG4gICAgICAub24oXCJlcnJvclwiLCB0aGlzLm9uRXJyb3IuYmluZCh0aGlzKSlcbiAgICAgIC5vbihcImNsb3NlXCIsICgpID0+IHtcbiAgICAgICAgdGhpcy5vbkNsb3NlKFwidHJhbnNwb3J0IGNsb3NlXCIpO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUHJvYmVzIGEgdHJhbnNwb3J0LlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gdHJhbnNwb3J0IG5hbWVcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBwcm9iZShuYW1lKSB7XG4gICAgZGVidWcoJ3Byb2JpbmcgdHJhbnNwb3J0IFwiJXNcIicsIG5hbWUpO1xuICAgIGxldCB0cmFuc3BvcnQgPSB0aGlzLmNyZWF0ZVRyYW5zcG9ydChuYW1lLCB7IHByb2JlOiAxIH0pO1xuICAgIGxldCBmYWlsZWQgPSBmYWxzZTtcblxuICAgIFNvY2tldC5wcmlvcldlYnNvY2tldFN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgIGNvbnN0IG9uVHJhbnNwb3J0T3BlbiA9ICgpID0+IHtcbiAgICAgIGlmIChmYWlsZWQpIHJldHVybjtcblxuICAgICAgZGVidWcoJ3Byb2JlIHRyYW5zcG9ydCBcIiVzXCIgb3BlbmVkJywgbmFtZSk7XG4gICAgICB0cmFuc3BvcnQuc2VuZChbeyB0eXBlOiBcInBpbmdcIiwgZGF0YTogXCJwcm9iZVwiIH1dKTtcbiAgICAgIHRyYW5zcG9ydC5vbmNlKFwicGFja2V0XCIsIG1zZyA9PiB7XG4gICAgICAgIGlmIChmYWlsZWQpIHJldHVybjtcbiAgICAgICAgaWYgKFwicG9uZ1wiID09PSBtc2cudHlwZSAmJiBcInByb2JlXCIgPT09IG1zZy5kYXRhKSB7XG4gICAgICAgICAgZGVidWcoJ3Byb2JlIHRyYW5zcG9ydCBcIiVzXCIgcG9uZycsIG5hbWUpO1xuICAgICAgICAgIHRoaXMudXBncmFkaW5nID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLmVtaXQoXCJ1cGdyYWRpbmdcIiwgdHJhbnNwb3J0KTtcbiAgICAgICAgICBpZiAoIXRyYW5zcG9ydCkgcmV0dXJuO1xuICAgICAgICAgIFNvY2tldC5wcmlvcldlYnNvY2tldFN1Y2Nlc3MgPSBcIndlYnNvY2tldFwiID09PSB0cmFuc3BvcnQubmFtZTtcblxuICAgICAgICAgIGRlYnVnKCdwYXVzaW5nIGN1cnJlbnQgdHJhbnNwb3J0IFwiJXNcIicsIHRoaXMudHJhbnNwb3J0Lm5hbWUpO1xuICAgICAgICAgIHRoaXMudHJhbnNwb3J0LnBhdXNlKCgpID0+IHtcbiAgICAgICAgICAgIGlmIChmYWlsZWQpIHJldHVybjtcbiAgICAgICAgICAgIGlmIChcImNsb3NlZFwiID09PSB0aGlzLnJlYWR5U3RhdGUpIHJldHVybjtcbiAgICAgICAgICAgIGRlYnVnKFwiY2hhbmdpbmcgdHJhbnNwb3J0IGFuZCBzZW5kaW5nIHVwZ3JhZGUgcGFja2V0XCIpO1xuXG4gICAgICAgICAgICBjbGVhbnVwKCk7XG5cbiAgICAgICAgICAgIHRoaXMuc2V0VHJhbnNwb3J0KHRyYW5zcG9ydCk7XG4gICAgICAgICAgICB0cmFuc3BvcnQuc2VuZChbeyB0eXBlOiBcInVwZ3JhZGVcIiB9XSk7XG4gICAgICAgICAgICB0aGlzLmVtaXQoXCJ1cGdyYWRlXCIsIHRyYW5zcG9ydCk7XG4gICAgICAgICAgICB0cmFuc3BvcnQgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy51cGdyYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuZmx1c2goKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkZWJ1ZygncHJvYmUgdHJhbnNwb3J0IFwiJXNcIiBmYWlsZWQnLCBuYW1lKTtcbiAgICAgICAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IoXCJwcm9iZSBlcnJvclwiKTtcbiAgICAgICAgICBlcnIudHJhbnNwb3J0ID0gdHJhbnNwb3J0Lm5hbWU7XG4gICAgICAgICAgdGhpcy5lbWl0KFwidXBncmFkZUVycm9yXCIsIGVycik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBmcmVlemVUcmFuc3BvcnQoKSB7XG4gICAgICBpZiAoZmFpbGVkKSByZXR1cm47XG5cbiAgICAgIC8vIEFueSBjYWxsYmFjayBjYWxsZWQgYnkgdHJhbnNwb3J0IHNob3VsZCBiZSBpZ25vcmVkIHNpbmNlIG5vd1xuICAgICAgZmFpbGVkID0gdHJ1ZTtcblxuICAgICAgY2xlYW51cCgpO1xuXG4gICAgICB0cmFuc3BvcnQuY2xvc2UoKTtcbiAgICAgIHRyYW5zcG9ydCA9IG51bGw7XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIGFueSBlcnJvciB0aGF0IGhhcHBlbnMgd2hpbGUgcHJvYmluZ1xuICAgIGNvbnN0IG9uZXJyb3IgPSBlcnIgPT4ge1xuICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoXCJwcm9iZSBlcnJvcjogXCIgKyBlcnIpO1xuICAgICAgZXJyb3IudHJhbnNwb3J0ID0gdHJhbnNwb3J0Lm5hbWU7XG5cbiAgICAgIGZyZWV6ZVRyYW5zcG9ydCgpO1xuXG4gICAgICBkZWJ1ZygncHJvYmUgdHJhbnNwb3J0IFwiJXNcIiBmYWlsZWQgYmVjYXVzZSBvZiBlcnJvcjogJXMnLCBuYW1lLCBlcnIpO1xuXG4gICAgICB0aGlzLmVtaXQoXCJ1cGdyYWRlRXJyb3JcIiwgZXJyb3IpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBvblRyYW5zcG9ydENsb3NlKCkge1xuICAgICAgb25lcnJvcihcInRyYW5zcG9ydCBjbG9zZWRcIik7XG4gICAgfVxuXG4gICAgLy8gV2hlbiB0aGUgc29ja2V0IGlzIGNsb3NlZCB3aGlsZSB3ZSdyZSBwcm9iaW5nXG4gICAgZnVuY3Rpb24gb25jbG9zZSgpIHtcbiAgICAgIG9uZXJyb3IoXCJzb2NrZXQgY2xvc2VkXCIpO1xuICAgIH1cblxuICAgIC8vIFdoZW4gdGhlIHNvY2tldCBpcyB1cGdyYWRlZCB3aGlsZSB3ZSdyZSBwcm9iaW5nXG4gICAgZnVuY3Rpb24gb251cGdyYWRlKHRvKSB7XG4gICAgICBpZiAodHJhbnNwb3J0ICYmIHRvLm5hbWUgIT09IHRyYW5zcG9ydC5uYW1lKSB7XG4gICAgICAgIGRlYnVnKCdcIiVzXCIgd29ya3MgLSBhYm9ydGluZyBcIiVzXCInLCB0by5uYW1lLCB0cmFuc3BvcnQubmFtZSk7XG4gICAgICAgIGZyZWV6ZVRyYW5zcG9ydCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJlbW92ZSBhbGwgbGlzdGVuZXJzIG9uIHRoZSB0cmFuc3BvcnQgYW5kIG9uIHNlbGZcbiAgICBjb25zdCBjbGVhbnVwID0gKCkgPT4ge1xuICAgICAgdHJhbnNwb3J0LnJlbW92ZUxpc3RlbmVyKFwib3BlblwiLCBvblRyYW5zcG9ydE9wZW4pO1xuICAgICAgdHJhbnNwb3J0LnJlbW92ZUxpc3RlbmVyKFwiZXJyb3JcIiwgb25lcnJvcik7XG4gICAgICB0cmFuc3BvcnQucmVtb3ZlTGlzdGVuZXIoXCJjbG9zZVwiLCBvblRyYW5zcG9ydENsb3NlKTtcbiAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIoXCJjbG9zZVwiLCBvbmNsb3NlKTtcbiAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIoXCJ1cGdyYWRpbmdcIiwgb251cGdyYWRlKTtcbiAgICB9O1xuXG4gICAgdHJhbnNwb3J0Lm9uY2UoXCJvcGVuXCIsIG9uVHJhbnNwb3J0T3Blbik7XG4gICAgdHJhbnNwb3J0Lm9uY2UoXCJlcnJvclwiLCBvbmVycm9yKTtcbiAgICB0cmFuc3BvcnQub25jZShcImNsb3NlXCIsIG9uVHJhbnNwb3J0Q2xvc2UpO1xuXG4gICAgdGhpcy5vbmNlKFwiY2xvc2VcIiwgb25jbG9zZSk7XG4gICAgdGhpcy5vbmNlKFwidXBncmFkaW5nXCIsIG9udXBncmFkZSk7XG5cbiAgICB0cmFuc3BvcnQub3BlbigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIGNvbm5lY3Rpb24gaXMgZGVlbWVkIG9wZW4uXG4gICAqXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuICBvbk9wZW4oKSB7XG4gICAgZGVidWcoXCJzb2NrZXQgb3BlblwiKTtcbiAgICB0aGlzLnJlYWR5U3RhdGUgPSBcIm9wZW5cIjtcbiAgICBTb2NrZXQucHJpb3JXZWJzb2NrZXRTdWNjZXNzID0gXCJ3ZWJzb2NrZXRcIiA9PT0gdGhpcy50cmFuc3BvcnQubmFtZTtcbiAgICB0aGlzLmVtaXQoXCJvcGVuXCIpO1xuICAgIHRoaXMuZmx1c2goKTtcblxuICAgIC8vIHdlIGNoZWNrIGZvciBgcmVhZHlTdGF0ZWAgaW4gY2FzZSBhbiBgb3BlbmBcbiAgICAvLyBsaXN0ZW5lciBhbHJlYWR5IGNsb3NlZCB0aGUgc29ja2V0XG4gICAgaWYgKFxuICAgICAgXCJvcGVuXCIgPT09IHRoaXMucmVhZHlTdGF0ZSAmJlxuICAgICAgdGhpcy5vcHRzLnVwZ3JhZGUgJiZcbiAgICAgIHRoaXMudHJhbnNwb3J0LnBhdXNlXG4gICAgKSB7XG4gICAgICBkZWJ1ZyhcInN0YXJ0aW5nIHVwZ3JhZGUgcHJvYmVzXCIpO1xuICAgICAgbGV0IGkgPSAwO1xuICAgICAgY29uc3QgbCA9IHRoaXMudXBncmFkZXMubGVuZ3RoO1xuICAgICAgZm9yICg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgdGhpcy5wcm9iZSh0aGlzLnVwZ3JhZGVzW2ldKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlcyBhIHBhY2tldC5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBvblBhY2tldChwYWNrZXQpIHtcbiAgICBpZiAoXG4gICAgICBcIm9wZW5pbmdcIiA9PT0gdGhpcy5yZWFkeVN0YXRlIHx8XG4gICAgICBcIm9wZW5cIiA9PT0gdGhpcy5yZWFkeVN0YXRlIHx8XG4gICAgICBcImNsb3NpbmdcIiA9PT0gdGhpcy5yZWFkeVN0YXRlXG4gICAgKSB7XG4gICAgICBkZWJ1Zygnc29ja2V0IHJlY2VpdmU6IHR5cGUgXCIlc1wiLCBkYXRhIFwiJXNcIicsIHBhY2tldC50eXBlLCBwYWNrZXQuZGF0YSk7XG5cbiAgICAgIHRoaXMuZW1pdChcInBhY2tldFwiLCBwYWNrZXQpO1xuXG4gICAgICAvLyBTb2NrZXQgaXMgbGl2ZSAtIGFueSBwYWNrZXQgY291bnRzXG4gICAgICB0aGlzLmVtaXQoXCJoZWFydGJlYXRcIik7XG5cbiAgICAgIHN3aXRjaCAocGFja2V0LnR5cGUpIHtcbiAgICAgICAgY2FzZSBcIm9wZW5cIjpcbiAgICAgICAgICB0aGlzLm9uSGFuZHNoYWtlKEpTT04ucGFyc2UocGFja2V0LmRhdGEpKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFwicGluZ1wiOlxuICAgICAgICAgIHRoaXMucmVzZXRQaW5nVGltZW91dCgpO1xuICAgICAgICAgIHRoaXMuc2VuZFBhY2tldChcInBvbmdcIik7XG4gICAgICAgICAgdGhpcy5lbWl0KFwicG9uZ1wiKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFwiZXJyb3JcIjpcbiAgICAgICAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IoXCJzZXJ2ZXIgZXJyb3JcIik7XG4gICAgICAgICAgZXJyLmNvZGUgPSBwYWNrZXQuZGF0YTtcbiAgICAgICAgICB0aGlzLm9uRXJyb3IoZXJyKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFwibWVzc2FnZVwiOlxuICAgICAgICAgIHRoaXMuZW1pdChcImRhdGFcIiwgcGFja2V0LmRhdGEpO1xuICAgICAgICAgIHRoaXMuZW1pdChcIm1lc3NhZ2VcIiwgcGFja2V0LmRhdGEpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBkZWJ1ZygncGFja2V0IHJlY2VpdmVkIHdpdGggc29ja2V0IHJlYWR5U3RhdGUgXCIlc1wiJywgdGhpcy5yZWFkeVN0YXRlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIHVwb24gaGFuZHNoYWtlIGNvbXBsZXRpb24uXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBoYW5kc2hha2Ugb2JqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgb25IYW5kc2hha2UoZGF0YSkge1xuICAgIHRoaXMuZW1pdChcImhhbmRzaGFrZVwiLCBkYXRhKTtcbiAgICB0aGlzLmlkID0gZGF0YS5zaWQ7XG4gICAgdGhpcy50cmFuc3BvcnQucXVlcnkuc2lkID0gZGF0YS5zaWQ7XG4gICAgdGhpcy51cGdyYWRlcyA9IHRoaXMuZmlsdGVyVXBncmFkZXMoZGF0YS51cGdyYWRlcyk7XG4gICAgdGhpcy5waW5nSW50ZXJ2YWwgPSBkYXRhLnBpbmdJbnRlcnZhbDtcbiAgICB0aGlzLnBpbmdUaW1lb3V0ID0gZGF0YS5waW5nVGltZW91dDtcbiAgICB0aGlzLm9uT3BlbigpO1xuICAgIC8vIEluIGNhc2Ugb3BlbiBoYW5kbGVyIGNsb3NlcyBzb2NrZXRcbiAgICBpZiAoXCJjbG9zZWRcIiA9PT0gdGhpcy5yZWFkeVN0YXRlKSByZXR1cm47XG4gICAgdGhpcy5yZXNldFBpbmdUaW1lb3V0KCk7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBhbmQgcmVzZXRzIHBpbmcgdGltZW91dCB0aW1lciBiYXNlZCBvbiBzZXJ2ZXIgcGluZ3MuXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgcmVzZXRQaW5nVGltZW91dCgpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5waW5nVGltZW91dFRpbWVyKTtcbiAgICB0aGlzLnBpbmdUaW1lb3V0VGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMub25DbG9zZShcInBpbmcgdGltZW91dFwiKTtcbiAgICB9LCB0aGlzLnBpbmdJbnRlcnZhbCArIHRoaXMucGluZ1RpbWVvdXQpO1xuICAgIGlmICh0aGlzLm9wdHMuYXV0b1VucmVmKSB7XG4gICAgICB0aGlzLnBpbmdUaW1lb3V0VGltZXIudW5yZWYoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIG9uIGBkcmFpbmAgZXZlbnRcbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBvbkRyYWluKCkge1xuICAgIHRoaXMud3JpdGVCdWZmZXIuc3BsaWNlKDAsIHRoaXMucHJldkJ1ZmZlckxlbik7XG5cbiAgICAvLyBzZXR0aW5nIHByZXZCdWZmZXJMZW4gPSAwIGlzIHZlcnkgaW1wb3J0YW50XG4gICAgLy8gZm9yIGV4YW1wbGUsIHdoZW4gdXBncmFkaW5nLCB1cGdyYWRlIHBhY2tldCBpcyBzZW50IG92ZXIsXG4gICAgLy8gYW5kIGEgbm9uemVybyBwcmV2QnVmZmVyTGVuIGNvdWxkIGNhdXNlIHByb2JsZW1zIG9uIGBkcmFpbmBcbiAgICB0aGlzLnByZXZCdWZmZXJMZW4gPSAwO1xuXG4gICAgaWYgKDAgPT09IHRoaXMud3JpdGVCdWZmZXIubGVuZ3RoKSB7XG4gICAgICB0aGlzLmVtaXQoXCJkcmFpblwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5mbHVzaCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBGbHVzaCB3cml0ZSBidWZmZXJzLlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIGZsdXNoKCkge1xuICAgIGlmIChcbiAgICAgIFwiY2xvc2VkXCIgIT09IHRoaXMucmVhZHlTdGF0ZSAmJlxuICAgICAgdGhpcy50cmFuc3BvcnQud3JpdGFibGUgJiZcbiAgICAgICF0aGlzLnVwZ3JhZGluZyAmJlxuICAgICAgdGhpcy53cml0ZUJ1ZmZlci5sZW5ndGhcbiAgICApIHtcbiAgICAgIGRlYnVnKFwiZmx1c2hpbmcgJWQgcGFja2V0cyBpbiBzb2NrZXRcIiwgdGhpcy53cml0ZUJ1ZmZlci5sZW5ndGgpO1xuICAgICAgdGhpcy50cmFuc3BvcnQuc2VuZCh0aGlzLndyaXRlQnVmZmVyKTtcbiAgICAgIC8vIGtlZXAgdHJhY2sgb2YgY3VycmVudCBsZW5ndGggb2Ygd3JpdGVCdWZmZXJcbiAgICAgIC8vIHNwbGljZSB3cml0ZUJ1ZmZlciBhbmQgY2FsbGJhY2tCdWZmZXIgb24gYGRyYWluYFxuICAgICAgdGhpcy5wcmV2QnVmZmVyTGVuID0gdGhpcy53cml0ZUJ1ZmZlci5sZW5ndGg7XG4gICAgICB0aGlzLmVtaXQoXCJmbHVzaFwiKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2VuZHMgYSBtZXNzYWdlLlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZS5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgZnVuY3Rpb24uXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zLlxuICAgKiBAcmV0dXJuIHtTb2NrZXR9IGZvciBjaGFpbmluZy5cbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG4gIHdyaXRlKG1zZywgb3B0aW9ucywgZm4pIHtcbiAgICB0aGlzLnNlbmRQYWNrZXQoXCJtZXNzYWdlXCIsIG1zZywgb3B0aW9ucywgZm4pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2VuZChtc2csIG9wdGlvbnMsIGZuKSB7XG4gICAgdGhpcy5zZW5kUGFja2V0KFwibWVzc2FnZVwiLCBtc2csIG9wdGlvbnMsIGZuKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kcyBhIHBhY2tldC5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IHBhY2tldCB0eXBlLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIGZ1bmN0aW9uLlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIHNlbmRQYWNrZXQodHlwZSwgZGF0YSwgb3B0aW9ucywgZm4pIHtcbiAgICBpZiAoXCJmdW5jdGlvblwiID09PSB0eXBlb2YgZGF0YSkge1xuICAgICAgZm4gPSBkYXRhO1xuICAgICAgZGF0YSA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBpZiAoXCJmdW5jdGlvblwiID09PSB0eXBlb2Ygb3B0aW9ucykge1xuICAgICAgZm4gPSBvcHRpb25zO1xuICAgICAgb3B0aW9ucyA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKFwiY2xvc2luZ1wiID09PSB0aGlzLnJlYWR5U3RhdGUgfHwgXCJjbG9zZWRcIiA9PT0gdGhpcy5yZWFkeVN0YXRlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgb3B0aW9ucy5jb21wcmVzcyA9IGZhbHNlICE9PSBvcHRpb25zLmNvbXByZXNzO1xuXG4gICAgY29uc3QgcGFja2V0ID0ge1xuICAgICAgdHlwZTogdHlwZSxcbiAgICAgIGRhdGE6IGRhdGEsXG4gICAgICBvcHRpb25zOiBvcHRpb25zXG4gICAgfTtcbiAgICB0aGlzLmVtaXQoXCJwYWNrZXRDcmVhdGVcIiwgcGFja2V0KTtcbiAgICB0aGlzLndyaXRlQnVmZmVyLnB1c2gocGFja2V0KTtcbiAgICBpZiAoZm4pIHRoaXMub25jZShcImZsdXNoXCIsIGZuKTtcbiAgICB0aGlzLmZsdXNoKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2xvc2VzIHRoZSBjb25uZWN0aW9uLlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIGNsb3NlKCkge1xuICAgIGNvbnN0IGNsb3NlID0gKCkgPT4ge1xuICAgICAgdGhpcy5vbkNsb3NlKFwiZm9yY2VkIGNsb3NlXCIpO1xuICAgICAgZGVidWcoXCJzb2NrZXQgY2xvc2luZyAtIHRlbGxpbmcgdHJhbnNwb3J0IHRvIGNsb3NlXCIpO1xuICAgICAgdGhpcy50cmFuc3BvcnQuY2xvc2UoKTtcbiAgICB9O1xuXG4gICAgY29uc3QgY2xlYW51cEFuZENsb3NlID0gKCkgPT4ge1xuICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcihcInVwZ3JhZGVcIiwgY2xlYW51cEFuZENsb3NlKTtcbiAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIoXCJ1cGdyYWRlRXJyb3JcIiwgY2xlYW51cEFuZENsb3NlKTtcbiAgICAgIGNsb3NlKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IHdhaXRGb3JVcGdyYWRlID0gKCkgPT4ge1xuICAgICAgLy8gd2FpdCBmb3IgdXBncmFkZSB0byBmaW5pc2ggc2luY2Ugd2UgY2FuJ3Qgc2VuZCBwYWNrZXRzIHdoaWxlIHBhdXNpbmcgYSB0cmFuc3BvcnRcbiAgICAgIHRoaXMub25jZShcInVwZ3JhZGVcIiwgY2xlYW51cEFuZENsb3NlKTtcbiAgICAgIHRoaXMub25jZShcInVwZ3JhZGVFcnJvclwiLCBjbGVhbnVwQW5kQ2xvc2UpO1xuICAgIH07XG5cbiAgICBpZiAoXCJvcGVuaW5nXCIgPT09IHRoaXMucmVhZHlTdGF0ZSB8fCBcIm9wZW5cIiA9PT0gdGhpcy5yZWFkeVN0YXRlKSB7XG4gICAgICB0aGlzLnJlYWR5U3RhdGUgPSBcImNsb3NpbmdcIjtcblxuICAgICAgaWYgKHRoaXMud3JpdGVCdWZmZXIubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMub25jZShcImRyYWluXCIsICgpID0+IHtcbiAgICAgICAgICBpZiAodGhpcy51cGdyYWRpbmcpIHtcbiAgICAgICAgICAgIHdhaXRGb3JVcGdyYWRlKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNsb3NlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy51cGdyYWRpbmcpIHtcbiAgICAgICAgd2FpdEZvclVwZ3JhZGUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNsb3NlKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIHVwb24gdHJhbnNwb3J0IGVycm9yXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgb25FcnJvcihlcnIpIHtcbiAgICBkZWJ1ZyhcInNvY2tldCBlcnJvciAlalwiLCBlcnIpO1xuICAgIFNvY2tldC5wcmlvcldlYnNvY2tldFN1Y2Nlc3MgPSBmYWxzZTtcbiAgICB0aGlzLmVtaXQoXCJlcnJvclwiLCBlcnIpO1xuICAgIHRoaXMub25DbG9zZShcInRyYW5zcG9ydCBlcnJvclwiLCBlcnIpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCB1cG9uIHRyYW5zcG9ydCBjbG9zZS5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBvbkNsb3NlKHJlYXNvbiwgZGVzYykge1xuICAgIGlmIChcbiAgICAgIFwib3BlbmluZ1wiID09PSB0aGlzLnJlYWR5U3RhdGUgfHxcbiAgICAgIFwib3BlblwiID09PSB0aGlzLnJlYWR5U3RhdGUgfHxcbiAgICAgIFwiY2xvc2luZ1wiID09PSB0aGlzLnJlYWR5U3RhdGVcbiAgICApIHtcbiAgICAgIGRlYnVnKCdzb2NrZXQgY2xvc2Ugd2l0aCByZWFzb246IFwiJXNcIicsIHJlYXNvbik7XG5cbiAgICAgIC8vIGNsZWFyIHRpbWVyc1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMucGluZ0ludGVydmFsVGltZXIpO1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMucGluZ1RpbWVvdXRUaW1lcik7XG5cbiAgICAgIC8vIHN0b3AgZXZlbnQgZnJvbSBmaXJpbmcgYWdhaW4gZm9yIHRyYW5zcG9ydFxuICAgICAgdGhpcy50cmFuc3BvcnQucmVtb3ZlQWxsTGlzdGVuZXJzKFwiY2xvc2VcIik7XG5cbiAgICAgIC8vIGVuc3VyZSB0cmFuc3BvcnQgd29uJ3Qgc3RheSBvcGVuXG4gICAgICB0aGlzLnRyYW5zcG9ydC5jbG9zZSgpO1xuXG4gICAgICAvLyBpZ25vcmUgZnVydGhlciB0cmFuc3BvcnQgY29tbXVuaWNhdGlvblxuICAgICAgdGhpcy50cmFuc3BvcnQucmVtb3ZlQWxsTGlzdGVuZXJzKCk7XG5cbiAgICAgIGlmICh0eXBlb2YgcmVtb3ZlRXZlbnRMaXN0ZW5lciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJlbW92ZUV2ZW50TGlzdGVuZXIoXCJvZmZsaW5lXCIsIHRoaXMub2ZmbGluZUV2ZW50TGlzdGVuZXIsIGZhbHNlKTtcbiAgICAgIH1cblxuICAgICAgLy8gc2V0IHJlYWR5IHN0YXRlXG4gICAgICB0aGlzLnJlYWR5U3RhdGUgPSBcImNsb3NlZFwiO1xuXG4gICAgICAvLyBjbGVhciBzZXNzaW9uIGlkXG4gICAgICB0aGlzLmlkID0gbnVsbDtcblxuICAgICAgLy8gZW1pdCBjbG9zZSBldmVudFxuICAgICAgdGhpcy5lbWl0KFwiY2xvc2VcIiwgcmVhc29uLCBkZXNjKTtcblxuICAgICAgLy8gY2xlYW4gYnVmZmVycyBhZnRlciwgc28gdXNlcnMgY2FuIHN0aWxsXG4gICAgICAvLyBncmFiIHRoZSBidWZmZXJzIG9uIGBjbG9zZWAgZXZlbnRcbiAgICAgIHRoaXMud3JpdGVCdWZmZXIgPSBbXTtcbiAgICAgIHRoaXMucHJldkJ1ZmZlckxlbiA9IDA7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEZpbHRlcnMgdXBncmFkZXMsIHJldHVybmluZyBvbmx5IHRob3NlIG1hdGNoaW5nIGNsaWVudCB0cmFuc3BvcnRzLlxuICAgKlxuICAgKiBAcGFyYW0ge0FycmF5fSBzZXJ2ZXIgdXBncmFkZXNcbiAgICogQGFwaSBwcml2YXRlXG4gICAqXG4gICAqL1xuICBmaWx0ZXJVcGdyYWRlcyh1cGdyYWRlcykge1xuICAgIGNvbnN0IGZpbHRlcmVkVXBncmFkZXMgPSBbXTtcbiAgICBsZXQgaSA9IDA7XG4gICAgY29uc3QgaiA9IHVwZ3JhZGVzLmxlbmd0aDtcbiAgICBmb3IgKDsgaSA8IGo7IGkrKykge1xuICAgICAgaWYgKH50aGlzLnRyYW5zcG9ydHMuaW5kZXhPZih1cGdyYWRlc1tpXSkpXG4gICAgICAgIGZpbHRlcmVkVXBncmFkZXMucHVzaCh1cGdyYWRlc1tpXSk7XG4gICAgfVxuICAgIHJldHVybiBmaWx0ZXJlZFVwZ3JhZGVzO1xuICB9XG59XG5cblNvY2tldC5wcmlvcldlYnNvY2tldFN1Y2Nlc3MgPSBmYWxzZTtcblxuLyoqXG4gKiBQcm90b2NvbCB2ZXJzaW9uLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuU29ja2V0LnByb3RvY29sID0gcGFyc2VyLnByb3RvY29sOyAvLyB0aGlzIGlzIGFuIGludFxuXG5mdW5jdGlvbiBjbG9uZShvYmopIHtcbiAgY29uc3QgbyA9IHt9O1xuICBmb3IgKGxldCBpIGluIG9iaikge1xuICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgIG9baV0gPSBvYmpbaV07XG4gICAgfVxuICB9XG4gIHJldHVybiBvO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNvY2tldDtcbiIsImNvbnN0IHBhcnNlciA9IHJlcXVpcmUoXCJlbmdpbmUuaW8tcGFyc2VyXCIpO1xuY29uc3QgRW1pdHRlciA9IHJlcXVpcmUoXCJjb21wb25lbnQtZW1pdHRlclwiKTtcbmNvbnN0IGRlYnVnID0gcmVxdWlyZShcImRlYnVnXCIpKFwiZW5naW5lLmlvLWNsaWVudDp0cmFuc3BvcnRcIik7XG5cbmNsYXNzIFRyYW5zcG9ydCBleHRlbmRzIEVtaXR0ZXIge1xuICAvKipcbiAgICogVHJhbnNwb3J0IGFic3RyYWN0IGNvbnN0cnVjdG9yLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucy5cbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBjb25zdHJ1Y3RvcihvcHRzKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMub3B0cyA9IG9wdHM7XG4gICAgdGhpcy5xdWVyeSA9IG9wdHMucXVlcnk7XG4gICAgdGhpcy5yZWFkeVN0YXRlID0gXCJcIjtcbiAgICB0aGlzLnNvY2tldCA9IG9wdHMuc29ja2V0O1xuICB9XG5cbiAgLyoqXG4gICAqIEVtaXRzIGFuIGVycm9yLlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gICAqIEByZXR1cm4ge1RyYW5zcG9ydH0gZm9yIGNoYWluaW5nXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuICBvbkVycm9yKG1zZywgZGVzYykge1xuICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcihtc2cpO1xuICAgIGVyci50eXBlID0gXCJUcmFuc3BvcnRFcnJvclwiO1xuICAgIGVyci5kZXNjcmlwdGlvbiA9IGRlc2M7XG4gICAgdGhpcy5lbWl0KFwiZXJyb3JcIiwgZXJyKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBPcGVucyB0aGUgdHJhbnNwb3J0LlxuICAgKlxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cbiAgb3BlbigpIHtcbiAgICBpZiAoXCJjbG9zZWRcIiA9PT0gdGhpcy5yZWFkeVN0YXRlIHx8IFwiXCIgPT09IHRoaXMucmVhZHlTdGF0ZSkge1xuICAgICAgdGhpcy5yZWFkeVN0YXRlID0gXCJvcGVuaW5nXCI7XG4gICAgICB0aGlzLmRvT3BlbigpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIENsb3NlcyB0aGUgdHJhbnNwb3J0LlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIGNsb3NlKCkge1xuICAgIGlmIChcIm9wZW5pbmdcIiA9PT0gdGhpcy5yZWFkeVN0YXRlIHx8IFwib3BlblwiID09PSB0aGlzLnJlYWR5U3RhdGUpIHtcbiAgICAgIHRoaXMuZG9DbG9zZSgpO1xuICAgICAgdGhpcy5vbkNsb3NlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogU2VuZHMgbXVsdGlwbGUgcGFja2V0cy5cbiAgICpcbiAgICogQHBhcmFtIHtBcnJheX0gcGFja2V0c1xuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIHNlbmQocGFja2V0cykge1xuICAgIGlmIChcIm9wZW5cIiA9PT0gdGhpcy5yZWFkeVN0YXRlKSB7XG4gICAgICB0aGlzLndyaXRlKHBhY2tldHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyB0aGlzIG1pZ2h0IGhhcHBlbiBpZiB0aGUgdHJhbnNwb3J0IHdhcyBzaWxlbnRseSBjbG9zZWQgaW4gdGhlIGJlZm9yZXVubG9hZCBldmVudCBoYW5kbGVyXG4gICAgICBkZWJ1ZyhcInRyYW5zcG9ydCBpcyBub3Qgb3BlbiwgZGlzY2FyZGluZyBwYWNrZXRzXCIpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgdXBvbiBvcGVuXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgb25PcGVuKCkge1xuICAgIHRoaXMucmVhZHlTdGF0ZSA9IFwib3BlblwiO1xuICAgIHRoaXMud3JpdGFibGUgPSB0cnVlO1xuICAgIHRoaXMuZW1pdChcIm9wZW5cIik7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIHdpdGggZGF0YS5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGFcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBvbkRhdGEoZGF0YSkge1xuICAgIGNvbnN0IHBhY2tldCA9IHBhcnNlci5kZWNvZGVQYWNrZXQoZGF0YSwgdGhpcy5zb2NrZXQuYmluYXJ5VHlwZSk7XG4gICAgdGhpcy5vblBhY2tldChwYWNrZXQpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aXRoIGEgZGVjb2RlZCBwYWNrZXQuXG4gICAqL1xuICBvblBhY2tldChwYWNrZXQpIHtcbiAgICB0aGlzLmVtaXQoXCJwYWNrZXRcIiwgcGFja2V0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgdXBvbiBjbG9zZS5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBvbkNsb3NlKCkge1xuICAgIHRoaXMucmVhZHlTdGF0ZSA9IFwiY2xvc2VkXCI7XG4gICAgdGhpcy5lbWl0KFwiY2xvc2VcIik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUcmFuc3BvcnQ7XG4iLCJjb25zdCBYTUxIdHRwUmVxdWVzdCA9IHJlcXVpcmUoXCIuLi8uLi9jb250cmliL3htbGh0dHByZXF1ZXN0LXNzbC9YTUxIdHRwUmVxdWVzdFwiKTtcbmNvbnN0IFhIUiA9IHJlcXVpcmUoXCIuL3BvbGxpbmcteGhyXCIpO1xuY29uc3QgSlNPTlAgPSByZXF1aXJlKFwiLi9wb2xsaW5nLWpzb25wXCIpO1xuY29uc3Qgd2Vic29ja2V0ID0gcmVxdWlyZShcIi4vd2Vic29ja2V0XCIpO1xuXG5leHBvcnRzLnBvbGxpbmcgPSBwb2xsaW5nO1xuZXhwb3J0cy53ZWJzb2NrZXQgPSB3ZWJzb2NrZXQ7XG5cbi8qKlxuICogUG9sbGluZyB0cmFuc3BvcnQgcG9seW1vcnBoaWMgY29uc3RydWN0b3IuXG4gKiBEZWNpZGVzIG9uIHhociB2cyBqc29ucCBiYXNlZCBvbiBmZWF0dXJlIGRldGVjdGlvbi5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBwb2xsaW5nKG9wdHMpIHtcbiAgbGV0IHhocjtcbiAgbGV0IHhkID0gZmFsc2U7XG4gIGxldCB4cyA9IGZhbHNlO1xuICBjb25zdCBqc29ucCA9IGZhbHNlICE9PSBvcHRzLmpzb25wO1xuXG4gIGlmICh0eXBlb2YgbG9jYXRpb24gIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjb25zdCBpc1NTTCA9IFwiaHR0cHM6XCIgPT09IGxvY2F0aW9uLnByb3RvY29sO1xuICAgIGxldCBwb3J0ID0gbG9jYXRpb24ucG9ydDtcblxuICAgIC8vIHNvbWUgdXNlciBhZ2VudHMgaGF2ZSBlbXB0eSBgbG9jYXRpb24ucG9ydGBcbiAgICBpZiAoIXBvcnQpIHtcbiAgICAgIHBvcnQgPSBpc1NTTCA/IDQ0MyA6IDgwO1xuICAgIH1cblxuICAgIHhkID0gb3B0cy5ob3N0bmFtZSAhPT0gbG9jYXRpb24uaG9zdG5hbWUgfHwgcG9ydCAhPT0gb3B0cy5wb3J0O1xuICAgIHhzID0gb3B0cy5zZWN1cmUgIT09IGlzU1NMO1xuICB9XG5cbiAgb3B0cy54ZG9tYWluID0geGQ7XG4gIG9wdHMueHNjaGVtZSA9IHhzO1xuICB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3Qob3B0cyk7XG5cbiAgaWYgKFwib3BlblwiIGluIHhociAmJiAhb3B0cy5mb3JjZUpTT05QKSB7XG4gICAgcmV0dXJuIG5ldyBYSFIob3B0cyk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCFqc29ucCkgdGhyb3cgbmV3IEVycm9yKFwiSlNPTlAgZGlzYWJsZWRcIik7XG4gICAgcmV0dXJuIG5ldyBKU09OUChvcHRzKTtcbiAgfVxufVxuIiwiY29uc3QgUG9sbGluZyA9IHJlcXVpcmUoXCIuL3BvbGxpbmdcIik7XG5jb25zdCBnbG9iYWxUaGlzID0gcmVxdWlyZShcIi4uL2dsb2JhbFRoaXNcIik7XG5cbmNvbnN0IHJOZXdsaW5lID0gL1xcbi9nO1xuY29uc3QgckVzY2FwZWROZXdsaW5lID0gL1xcXFxuL2c7XG5cbi8qKlxuICogR2xvYmFsIEpTT05QIGNhbGxiYWNrcy5cbiAqL1xuXG5sZXQgY2FsbGJhY2tzO1xuXG5jbGFzcyBKU09OUFBvbGxpbmcgZXh0ZW5kcyBQb2xsaW5nIHtcbiAgLyoqXG4gICAqIEpTT05QIFBvbGxpbmcgY29uc3RydWN0b3IuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzLlxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cbiAgY29uc3RydWN0b3Iob3B0cykge1xuICAgIHN1cGVyKG9wdHMpO1xuXG4gICAgdGhpcy5xdWVyeSA9IHRoaXMucXVlcnkgfHwge307XG5cbiAgICAvLyBkZWZpbmUgZ2xvYmFsIGNhbGxiYWNrcyBhcnJheSBpZiBub3QgcHJlc2VudFxuICAgIC8vIHdlIGRvIHRoaXMgaGVyZSAobGF6aWx5KSB0byBhdm9pZCB1bm5lZWRlZCBnbG9iYWwgcG9sbHV0aW9uXG4gICAgaWYgKCFjYWxsYmFja3MpIHtcbiAgICAgIC8vIHdlIG5lZWQgdG8gY29uc2lkZXIgbXVsdGlwbGUgZW5naW5lcyBpbiB0aGUgc2FtZSBwYWdlXG4gICAgICBjYWxsYmFja3MgPSBnbG9iYWxUaGlzLl9fX2VpbyA9IGdsb2JhbFRoaXMuX19fZWlvIHx8IFtdO1xuICAgIH1cblxuICAgIC8vIGNhbGxiYWNrIGlkZW50aWZpZXJcbiAgICB0aGlzLmluZGV4ID0gY2FsbGJhY2tzLmxlbmd0aDtcblxuICAgIC8vIGFkZCBjYWxsYmFjayB0byBqc29ucCBnbG9iYWxcbiAgICBjYWxsYmFja3MucHVzaCh0aGlzLm9uRGF0YS5iaW5kKHRoaXMpKTtcblxuICAgIC8vIGFwcGVuZCB0byBxdWVyeSBzdHJpbmdcbiAgICB0aGlzLnF1ZXJ5LmogPSB0aGlzLmluZGV4O1xuICB9XG5cbiAgLyoqXG4gICAqIEpTT05QIG9ubHkgc3VwcG9ydHMgYmluYXJ5IGFzIGJhc2U2NCBlbmNvZGVkIHN0cmluZ3NcbiAgICovXG4gIGdldCBzdXBwb3J0c0JpbmFyeSgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogQ2xvc2VzIHRoZSBzb2NrZXQuXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgZG9DbG9zZSgpIHtcbiAgICBpZiAodGhpcy5zY3JpcHQpIHtcbiAgICAgIC8vIHByZXZlbnQgc3B1cmlvdXMgZXJyb3JzIGZyb20gYmVpbmcgZW1pdHRlZCB3aGVuIHRoZSB3aW5kb3cgaXMgdW5sb2FkZWRcbiAgICAgIHRoaXMuc2NyaXB0Lm9uZXJyb3IgPSAoKSA9PiB7fTtcbiAgICAgIHRoaXMuc2NyaXB0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5zY3JpcHQpO1xuICAgICAgdGhpcy5zY3JpcHQgPSBudWxsO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmZvcm0pIHtcbiAgICAgIHRoaXMuZm9ybS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuZm9ybSk7XG4gICAgICB0aGlzLmZvcm0gPSBudWxsO1xuICAgICAgdGhpcy5pZnJhbWUgPSBudWxsO1xuICAgIH1cblxuICAgIHN1cGVyLmRvQ2xvc2UoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdGFydHMgYSBwb2xsIGN5Y2xlLlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIGRvUG9sbCgpIHtcbiAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuXG4gICAgaWYgKHRoaXMuc2NyaXB0KSB7XG4gICAgICB0aGlzLnNjcmlwdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuc2NyaXB0KTtcbiAgICAgIHRoaXMuc2NyaXB0ID0gbnVsbDtcbiAgICB9XG5cbiAgICBzY3JpcHQuYXN5bmMgPSB0cnVlO1xuICAgIHNjcmlwdC5zcmMgPSB0aGlzLnVyaSgpO1xuICAgIHNjcmlwdC5vbmVycm9yID0gZSA9PiB7XG4gICAgICB0aGlzLm9uRXJyb3IoXCJqc29ucCBwb2xsIGVycm9yXCIsIGUpO1xuICAgIH07XG5cbiAgICBjb25zdCBpbnNlcnRBdCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpWzBdO1xuICAgIGlmIChpbnNlcnRBdCkge1xuICAgICAgaW5zZXJ0QXQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoc2NyaXB0LCBpbnNlcnRBdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIChkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmJvZHkpLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgfVxuICAgIHRoaXMuc2NyaXB0ID0gc2NyaXB0O1xuXG4gICAgY29uc3QgaXNVQWdlY2tvID1cbiAgICAgIFwidW5kZWZpbmVkXCIgIT09IHR5cGVvZiBuYXZpZ2F0b3IgJiYgL2dlY2tvL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcblxuICAgIGlmIChpc1VBZ2Vja28pIHtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IGlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICAgICAgfSwgMTAwKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogV3JpdGVzIHdpdGggYSBoaWRkZW4gaWZyYW1lLlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YSB0byBzZW5kXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxlZCB1cG9uIGZsdXNoLlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIGRvV3JpdGUoZGF0YSwgZm4pIHtcbiAgICBsZXQgaWZyYW1lO1xuXG4gICAgaWYgKCF0aGlzLmZvcm0pIHtcbiAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICAgIGNvbnN0IGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gICAgICBjb25zdCBpZCA9ICh0aGlzLmlmcmFtZUlkID0gXCJlaW9faWZyYW1lX1wiICsgdGhpcy5pbmRleCk7XG5cbiAgICAgIGZvcm0uY2xhc3NOYW1lID0gXCJzb2NrZXRpb1wiO1xuICAgICAgZm9ybS5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICAgIGZvcm0uc3R5bGUudG9wID0gXCItMTAwMHB4XCI7XG4gICAgICBmb3JtLnN0eWxlLmxlZnQgPSBcIi0xMDAwcHhcIjtcbiAgICAgIGZvcm0udGFyZ2V0ID0gaWQ7XG4gICAgICBmb3JtLm1ldGhvZCA9IFwiUE9TVFwiO1xuICAgICAgZm9ybS5zZXRBdHRyaWJ1dGUoXCJhY2NlcHQtY2hhcnNldFwiLCBcInV0Zi04XCIpO1xuICAgICAgYXJlYS5uYW1lID0gXCJkXCI7XG4gICAgICBmb3JtLmFwcGVuZENoaWxkKGFyZWEpO1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmb3JtKTtcblxuICAgICAgdGhpcy5mb3JtID0gZm9ybTtcbiAgICAgIHRoaXMuYXJlYSA9IGFyZWE7XG4gICAgfVxuXG4gICAgdGhpcy5mb3JtLmFjdGlvbiA9IHRoaXMudXJpKCk7XG5cbiAgICBmdW5jdGlvbiBjb21wbGV0ZSgpIHtcbiAgICAgIGluaXRJZnJhbWUoKTtcbiAgICAgIGZuKCk7XG4gICAgfVxuXG4gICAgY29uc3QgaW5pdElmcmFtZSA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLmlmcmFtZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHRoaXMuZm9ybS5yZW1vdmVDaGlsZCh0aGlzLmlmcmFtZSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICB0aGlzLm9uRXJyb3IoXCJqc29ucCBwb2xsaW5nIGlmcmFtZSByZW1vdmFsIGVycm9yXCIsIGUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIGllNiBkeW5hbWljIGlmcmFtZXMgd2l0aCB0YXJnZXQ9XCJcIiBzdXBwb3J0ICh0aGFua3MgQ2hyaXMgTGFtYmFjaGVyKVxuICAgICAgICBjb25zdCBodG1sID0gJzxpZnJhbWUgc3JjPVwiamF2YXNjcmlwdDowXCIgbmFtZT1cIicgKyB0aGlzLmlmcmFtZUlkICsgJ1wiPic7XG4gICAgICAgIGlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaHRtbCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7XG4gICAgICAgIGlmcmFtZS5uYW1lID0gdGhpcy5pZnJhbWVJZDtcbiAgICAgICAgaWZyYW1lLnNyYyA9IFwiamF2YXNjcmlwdDowXCI7XG4gICAgICB9XG5cbiAgICAgIGlmcmFtZS5pZCA9IHRoaXMuaWZyYW1lSWQ7XG5cbiAgICAgIHRoaXMuZm9ybS5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICAgICAgdGhpcy5pZnJhbWUgPSBpZnJhbWU7XG4gICAgfTtcblxuICAgIGluaXRJZnJhbWUoKTtcblxuICAgIC8vIGVzY2FwZSBcXG4gdG8gcHJldmVudCBpdCBmcm9tIGJlaW5nIGNvbnZlcnRlZCBpbnRvIFxcclxcbiBieSBzb21lIFVBc1xuICAgIC8vIGRvdWJsZSBlc2NhcGluZyBpcyByZXF1aXJlZCBmb3IgZXNjYXBlZCBuZXcgbGluZXMgYmVjYXVzZSB1bmVzY2FwaW5nIG9mIG5ldyBsaW5lcyBjYW4gYmUgZG9uZSBzYWZlbHkgb24gc2VydmVyLXNpZGVcbiAgICBkYXRhID0gZGF0YS5yZXBsYWNlKHJFc2NhcGVkTmV3bGluZSwgXCJcXFxcXFxuXCIpO1xuICAgIHRoaXMuYXJlYS52YWx1ZSA9IGRhdGEucmVwbGFjZShyTmV3bGluZSwgXCJcXFxcblwiKTtcblxuICAgIHRyeSB7XG4gICAgICB0aGlzLmZvcm0uc3VibWl0KCk7XG4gICAgfSBjYXRjaCAoZSkge31cblxuICAgIGlmICh0aGlzLmlmcmFtZS5hdHRhY2hFdmVudCkge1xuICAgICAgdGhpcy5pZnJhbWUub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5pZnJhbWUucmVhZHlTdGF0ZSA9PT0gXCJjb21wbGV0ZVwiKSB7XG4gICAgICAgICAgY29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pZnJhbWUub25sb2FkID0gY29tcGxldGU7XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gSlNPTlBQb2xsaW5nO1xuIiwiLyogZ2xvYmFsIGF0dGFjaEV2ZW50ICovXG5cbmNvbnN0IFhNTEh0dHBSZXF1ZXN0ID0gcmVxdWlyZShcIi4uLy4uL2NvbnRyaWIveG1saHR0cHJlcXVlc3Qtc3NsL1hNTEh0dHBSZXF1ZXN0XCIpO1xuY29uc3QgUG9sbGluZyA9IHJlcXVpcmUoXCIuL3BvbGxpbmdcIik7XG5jb25zdCBFbWl0dGVyID0gcmVxdWlyZShcImNvbXBvbmVudC1lbWl0dGVyXCIpO1xuY29uc3QgeyBwaWNrIH0gPSByZXF1aXJlKFwiLi4vdXRpbFwiKTtcbmNvbnN0IGdsb2JhbFRoaXMgPSByZXF1aXJlKFwiLi4vZ2xvYmFsVGhpc1wiKTtcblxuY29uc3QgZGVidWcgPSByZXF1aXJlKFwiZGVidWdcIikoXCJlbmdpbmUuaW8tY2xpZW50OnBvbGxpbmcteGhyXCIpO1xuXG4vKipcbiAqIEVtcHR5IGZ1bmN0aW9uXG4gKi9cblxuZnVuY3Rpb24gZW1wdHkoKSB7fVxuXG5jb25zdCBoYXNYSFIyID0gKGZ1bmN0aW9uKCkge1xuICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoeyB4ZG9tYWluOiBmYWxzZSB9KTtcbiAgcmV0dXJuIG51bGwgIT0geGhyLnJlc3BvbnNlVHlwZTtcbn0pKCk7XG5cbmNsYXNzIFhIUiBleHRlbmRzIFBvbGxpbmcge1xuICAvKipcbiAgICogWEhSIFBvbGxpbmcgY29uc3RydWN0b3IuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuICBjb25zdHJ1Y3RvcihvcHRzKSB7XG4gICAgc3VwZXIob3B0cyk7XG5cbiAgICBpZiAodHlwZW9mIGxvY2F0aW9uICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICBjb25zdCBpc1NTTCA9IFwiaHR0cHM6XCIgPT09IGxvY2F0aW9uLnByb3RvY29sO1xuICAgICAgbGV0IHBvcnQgPSBsb2NhdGlvbi5wb3J0O1xuXG4gICAgICAvLyBzb21lIHVzZXIgYWdlbnRzIGhhdmUgZW1wdHkgYGxvY2F0aW9uLnBvcnRgXG4gICAgICBpZiAoIXBvcnQpIHtcbiAgICAgICAgcG9ydCA9IGlzU1NMID8gNDQzIDogODA7XG4gICAgICB9XG5cbiAgICAgIHRoaXMueGQgPVxuICAgICAgICAodHlwZW9mIGxvY2F0aW9uICE9PSBcInVuZGVmaW5lZFwiICYmXG4gICAgICAgICAgb3B0cy5ob3N0bmFtZSAhPT0gbG9jYXRpb24uaG9zdG5hbWUpIHx8XG4gICAgICAgIHBvcnQgIT09IG9wdHMucG9ydDtcbiAgICAgIHRoaXMueHMgPSBvcHRzLnNlY3VyZSAhPT0gaXNTU0w7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFhIUiBzdXBwb3J0cyBiaW5hcnlcbiAgICAgKi9cbiAgICBjb25zdCBmb3JjZUJhc2U2NCA9IG9wdHMgJiYgb3B0cy5mb3JjZUJhc2U2NDtcbiAgICB0aGlzLnN1cHBvcnRzQmluYXJ5ID0gaGFzWEhSMiAmJiAhZm9yY2VCYXNlNjQ7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIHJlcXVlc3QuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBtZXRob2RcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICByZXF1ZXN0KG9wdHMgPSB7fSkge1xuICAgIE9iamVjdC5hc3NpZ24ob3B0cywgeyB4ZDogdGhpcy54ZCwgeHM6IHRoaXMueHMgfSwgdGhpcy5vcHRzKTtcbiAgICByZXR1cm4gbmV3IFJlcXVlc3QodGhpcy51cmkoKSwgb3B0cyk7XG4gIH1cblxuICAvKipcbiAgICogU2VuZHMgZGF0YS5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGEgdG8gc2VuZC5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGVkIHVwb24gZmx1c2guXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgZG9Xcml0ZShkYXRhLCBmbikge1xuICAgIGNvbnN0IHJlcSA9IHRoaXMucmVxdWVzdCh7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgZGF0YTogZGF0YVxuICAgIH0pO1xuICAgIHJlcS5vbihcInN1Y2Nlc3NcIiwgZm4pO1xuICAgIHJlcS5vbihcImVycm9yXCIsIGVyciA9PiB7XG4gICAgICB0aGlzLm9uRXJyb3IoXCJ4aHIgcG9zdCBlcnJvclwiLCBlcnIpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0YXJ0cyBhIHBvbGwgY3ljbGUuXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgZG9Qb2xsKCkge1xuICAgIGRlYnVnKFwieGhyIHBvbGxcIik7XG4gICAgY29uc3QgcmVxID0gdGhpcy5yZXF1ZXN0KCk7XG4gICAgcmVxLm9uKFwiZGF0YVwiLCB0aGlzLm9uRGF0YS5iaW5kKHRoaXMpKTtcbiAgICByZXEub24oXCJlcnJvclwiLCBlcnIgPT4ge1xuICAgICAgdGhpcy5vbkVycm9yKFwieGhyIHBvbGwgZXJyb3JcIiwgZXJyKTtcbiAgICB9KTtcbiAgICB0aGlzLnBvbGxYaHIgPSByZXE7XG4gIH1cbn1cblxuY2xhc3MgUmVxdWVzdCBleHRlbmRzIEVtaXR0ZXIge1xuICAvKipcbiAgICogUmVxdWVzdCBjb25zdHJ1Y3RvclxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cbiAgY29uc3RydWN0b3IodXJpLCBvcHRzKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLm9wdHMgPSBvcHRzO1xuXG4gICAgdGhpcy5tZXRob2QgPSBvcHRzLm1ldGhvZCB8fCBcIkdFVFwiO1xuICAgIHRoaXMudXJpID0gdXJpO1xuICAgIHRoaXMuYXN5bmMgPSBmYWxzZSAhPT0gb3B0cy5hc3luYztcbiAgICB0aGlzLmRhdGEgPSB1bmRlZmluZWQgIT09IG9wdHMuZGF0YSA/IG9wdHMuZGF0YSA6IG51bGw7XG5cbiAgICB0aGlzLmNyZWF0ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgdGhlIFhIUiBvYmplY3QgYW5kIHNlbmRzIHRoZSByZXF1ZXN0LlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIGNyZWF0ZSgpIHtcbiAgICBjb25zdCBvcHRzID0gcGljayhcbiAgICAgIHRoaXMub3B0cyxcbiAgICAgIFwiYWdlbnRcIixcbiAgICAgIFwiZW5hYmxlc1hEUlwiLFxuICAgICAgXCJwZnhcIixcbiAgICAgIFwia2V5XCIsXG4gICAgICBcInBhc3NwaHJhc2VcIixcbiAgICAgIFwiY2VydFwiLFxuICAgICAgXCJjYVwiLFxuICAgICAgXCJjaXBoZXJzXCIsXG4gICAgICBcInJlamVjdFVuYXV0aG9yaXplZFwiLFxuICAgICAgXCJhdXRvVW5yZWZcIlxuICAgICk7XG4gICAgb3B0cy54ZG9tYWluID0gISF0aGlzLm9wdHMueGQ7XG4gICAgb3B0cy54c2NoZW1lID0gISF0aGlzLm9wdHMueHM7XG5cbiAgICBjb25zdCB4aHIgPSAodGhpcy54aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3Qob3B0cykpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGRlYnVnKFwieGhyIG9wZW4gJXM6ICVzXCIsIHRoaXMubWV0aG9kLCB0aGlzLnVyaSk7XG4gICAgICB4aHIub3Blbih0aGlzLm1ldGhvZCwgdGhpcy51cmksIHRoaXMuYXN5bmMpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKHRoaXMub3B0cy5leHRyYUhlYWRlcnMpIHtcbiAgICAgICAgICB4aHIuc2V0RGlzYWJsZUhlYWRlckNoZWNrICYmIHhoci5zZXREaXNhYmxlSGVhZGVyQ2hlY2sodHJ1ZSk7XG4gICAgICAgICAgZm9yIChsZXQgaSBpbiB0aGlzLm9wdHMuZXh0cmFIZWFkZXJzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRzLmV4dHJhSGVhZGVycy5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihpLCB0aGlzLm9wdHMuZXh0cmFIZWFkZXJzW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHt9XG5cbiAgICAgIGlmIChcIlBPU1RcIiA9PT0gdGhpcy5tZXRob2QpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtdHlwZVwiLCBcInRleHQvcGxhaW47Y2hhcnNldD1VVEYtOFwiKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgIH1cblxuICAgICAgdHJ5IHtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJBY2NlcHRcIiwgXCIqLypcIik7XG4gICAgICB9IGNhdGNoIChlKSB7fVxuXG4gICAgICAvLyBpZTYgY2hlY2tcbiAgICAgIGlmIChcIndpdGhDcmVkZW50aWFsc1wiIGluIHhocikge1xuICAgICAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gdGhpcy5vcHRzLndpdGhDcmVkZW50aWFscztcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMub3B0cy5yZXF1ZXN0VGltZW91dCkge1xuICAgICAgICB4aHIudGltZW91dCA9IHRoaXMub3B0cy5yZXF1ZXN0VGltZW91dDtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuaGFzWERSKCkpIHtcbiAgICAgICAgeGhyLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICB0aGlzLm9uTG9hZCgpO1xuICAgICAgICB9O1xuICAgICAgICB4aHIub25lcnJvciA9ICgpID0+IHtcbiAgICAgICAgICB0aGlzLm9uRXJyb3IoeGhyLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xuICAgICAgICAgIGlmICg0ICE9PSB4aHIucmVhZHlTdGF0ZSkgcmV0dXJuO1xuICAgICAgICAgIGlmICgyMDAgPT09IHhoci5zdGF0dXMgfHwgMTIyMyA9PT0geGhyLnN0YXR1cykge1xuICAgICAgICAgICAgdGhpcy5vbkxvYWQoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gbWFrZSBzdXJlIHRoZSBgZXJyb3JgIGV2ZW50IGhhbmRsZXIgdGhhdCdzIHVzZXItc2V0XG4gICAgICAgICAgICAvLyBkb2VzIG5vdCB0aHJvdyBpbiB0aGUgc2FtZSB0aWNrIGFuZCBnZXRzIGNhdWdodCBoZXJlXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5vbkVycm9yKHR5cGVvZiB4aHIuc3RhdHVzID09PSBcIm51bWJlclwiID8geGhyLnN0YXR1cyA6IDApO1xuICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBkZWJ1ZyhcInhociBkYXRhICVzXCIsIHRoaXMuZGF0YSk7XG4gICAgICB4aHIuc2VuZCh0aGlzLmRhdGEpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIE5lZWQgdG8gZGVmZXIgc2luY2UgLmNyZWF0ZSgpIGlzIGNhbGxlZCBkaXJlY3RseSBmcm9tIHRoZSBjb25zdHJ1Y3RvclxuICAgICAgLy8gYW5kIHRodXMgdGhlICdlcnJvcicgZXZlbnQgY2FuIG9ubHkgYmUgb25seSBib3VuZCAqYWZ0ZXIqIHRoaXMgZXhjZXB0aW9uXG4gICAgICAvLyBvY2N1cnMuICBUaGVyZWZvcmUsIGFsc28sIHdlIGNhbm5vdCB0aHJvdyBoZXJlIGF0IGFsbC5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLm9uRXJyb3IoZSk7XG4gICAgICB9LCAwKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICB0aGlzLmluZGV4ID0gUmVxdWVzdC5yZXF1ZXN0c0NvdW50Kys7XG4gICAgICBSZXF1ZXN0LnJlcXVlc3RzW3RoaXMuaW5kZXhdID0gdGhpcztcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIHVwb24gc3VjY2Vzc2Z1bCByZXNwb25zZS5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBvblN1Y2Nlc3MoKSB7XG4gICAgdGhpcy5lbWl0KFwic3VjY2Vzc1wiKTtcbiAgICB0aGlzLmNsZWFudXAoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgaWYgd2UgaGF2ZSBkYXRhLlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIG9uRGF0YShkYXRhKSB7XG4gICAgdGhpcy5lbWl0KFwiZGF0YVwiLCBkYXRhKTtcbiAgICB0aGlzLm9uU3VjY2VzcygpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCB1cG9uIGVycm9yLlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIG9uRXJyb3IoZXJyKSB7XG4gICAgdGhpcy5lbWl0KFwiZXJyb3JcIiwgZXJyKTtcbiAgICB0aGlzLmNsZWFudXAodHJ1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYW5zIHVwIGhvdXNlLlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIGNsZWFudXAoZnJvbUVycm9yKSB7XG4gICAgaWYgKFwidW5kZWZpbmVkXCIgPT09IHR5cGVvZiB0aGlzLnhociB8fCBudWxsID09PSB0aGlzLnhocikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyB4bWxodHRwcmVxdWVzdFxuICAgIGlmICh0aGlzLmhhc1hEUigpKSB7XG4gICAgICB0aGlzLnhoci5vbmxvYWQgPSB0aGlzLnhoci5vbmVycm9yID0gZW1wdHk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMueGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGVtcHR5O1xuICAgIH1cblxuICAgIGlmIChmcm9tRXJyb3IpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMueGhyLmFib3J0KCk7XG4gICAgICB9IGNhdGNoIChlKSB7fVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIGRlbGV0ZSBSZXF1ZXN0LnJlcXVlc3RzW3RoaXMuaW5kZXhdO1xuICAgIH1cblxuICAgIHRoaXMueGhyID0gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgdXBvbiBsb2FkLlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIG9uTG9hZCgpIHtcbiAgICBjb25zdCBkYXRhID0gdGhpcy54aHIucmVzcG9uc2VUZXh0O1xuICAgIGlmIChkYXRhICE9PSBudWxsKSB7XG4gICAgICB0aGlzLm9uRGF0YShkYXRhKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgaXQgaGFzIFhEb21haW5SZXF1ZXN0LlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIGhhc1hEUigpIHtcbiAgICByZXR1cm4gdHlwZW9mIFhEb21haW5SZXF1ZXN0ICE9PSBcInVuZGVmaW5lZFwiICYmICF0aGlzLnhzICYmIHRoaXMuZW5hYmxlc1hEUjtcbiAgfVxuXG4gIC8qKlxuICAgKiBBYm9ydHMgdGhlIHJlcXVlc3QuXG4gICAqXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuICBhYm9ydCgpIHtcbiAgICB0aGlzLmNsZWFudXAoKTtcbiAgfVxufVxuXG4vKipcbiAqIEFib3J0cyBwZW5kaW5nIHJlcXVlc3RzIHdoZW4gdW5sb2FkaW5nIHRoZSB3aW5kb3cuIFRoaXMgaXMgbmVlZGVkIHRvIHByZXZlbnRcbiAqIG1lbW9yeSBsZWFrcyAoZS5nLiB3aGVuIHVzaW5nIElFKSBhbmQgdG8gZW5zdXJlIHRoYXQgbm8gc3B1cmlvdXMgZXJyb3IgaXNcbiAqIGVtaXR0ZWQuXG4gKi9cblxuUmVxdWVzdC5yZXF1ZXN0c0NvdW50ID0gMDtcblJlcXVlc3QucmVxdWVzdHMgPSB7fTtcblxuaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICBpZiAodHlwZW9mIGF0dGFjaEV2ZW50ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBhdHRhY2hFdmVudChcIm9udW5sb2FkXCIsIHVubG9hZEhhbmRsZXIpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhZGRFdmVudExpc3RlbmVyID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBjb25zdCB0ZXJtaW5hdGlvbkV2ZW50ID0gXCJvbnBhZ2VoaWRlXCIgaW4gZ2xvYmFsVGhpcyA/IFwicGFnZWhpZGVcIiA6IFwidW5sb2FkXCI7XG4gICAgYWRkRXZlbnRMaXN0ZW5lcih0ZXJtaW5hdGlvbkV2ZW50LCB1bmxvYWRIYW5kbGVyLCBmYWxzZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdW5sb2FkSGFuZGxlcigpIHtcbiAgZm9yIChsZXQgaSBpbiBSZXF1ZXN0LnJlcXVlc3RzKSB7XG4gICAgaWYgKFJlcXVlc3QucmVxdWVzdHMuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgIFJlcXVlc3QucmVxdWVzdHNbaV0uYWJvcnQoKTtcbiAgICB9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBYSFI7XG5tb2R1bGUuZXhwb3J0cy5SZXF1ZXN0ID0gUmVxdWVzdDtcbiIsImNvbnN0IFRyYW5zcG9ydCA9IHJlcXVpcmUoXCIuLi90cmFuc3BvcnRcIik7XG5jb25zdCBwYXJzZXFzID0gcmVxdWlyZShcInBhcnNlcXNcIik7XG5jb25zdCBwYXJzZXIgPSByZXF1aXJlKFwiZW5naW5lLmlvLXBhcnNlclwiKTtcbmNvbnN0IHllYXN0ID0gcmVxdWlyZShcInllYXN0XCIpO1xuXG5jb25zdCBkZWJ1ZyA9IHJlcXVpcmUoXCJkZWJ1Z1wiKShcImVuZ2luZS5pby1jbGllbnQ6cG9sbGluZ1wiKTtcblxuY2xhc3MgUG9sbGluZyBleHRlbmRzIFRyYW5zcG9ydCB7XG4gIC8qKlxuICAgKiBUcmFuc3BvcnQgbmFtZS5cbiAgICovXG4gIGdldCBuYW1lKCkge1xuICAgIHJldHVybiBcInBvbGxpbmdcIjtcbiAgfVxuXG4gIC8qKlxuICAgKiBPcGVucyB0aGUgc29ja2V0ICh0cmlnZ2VycyBwb2xsaW5nKS4gV2Ugd3JpdGUgYSBQSU5HIG1lc3NhZ2UgdG8gZGV0ZXJtaW5lXG4gICAqIHdoZW4gdGhlIHRyYW5zcG9ydCBpcyBvcGVuLlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIGRvT3BlbigpIHtcbiAgICB0aGlzLnBvbGwoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXVzZXMgcG9sbGluZy5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgdXBvbiBidWZmZXJzIGFyZSBmbHVzaGVkIGFuZCB0cmFuc3BvcnQgaXMgcGF1c2VkXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgcGF1c2Uob25QYXVzZSkge1xuICAgIHRoaXMucmVhZHlTdGF0ZSA9IFwicGF1c2luZ1wiO1xuXG4gICAgY29uc3QgcGF1c2UgPSAoKSA9PiB7XG4gICAgICBkZWJ1ZyhcInBhdXNlZFwiKTtcbiAgICAgIHRoaXMucmVhZHlTdGF0ZSA9IFwicGF1c2VkXCI7XG4gICAgICBvblBhdXNlKCk7XG4gICAgfTtcblxuICAgIGlmICh0aGlzLnBvbGxpbmcgfHwgIXRoaXMud3JpdGFibGUpIHtcbiAgICAgIGxldCB0b3RhbCA9IDA7XG5cbiAgICAgIGlmICh0aGlzLnBvbGxpbmcpIHtcbiAgICAgICAgZGVidWcoXCJ3ZSBhcmUgY3VycmVudGx5IHBvbGxpbmcgLSB3YWl0aW5nIHRvIHBhdXNlXCIpO1xuICAgICAgICB0b3RhbCsrO1xuICAgICAgICB0aGlzLm9uY2UoXCJwb2xsQ29tcGxldGVcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgZGVidWcoXCJwcmUtcGF1c2UgcG9sbGluZyBjb21wbGV0ZVwiKTtcbiAgICAgICAgICAtLXRvdGFsIHx8IHBhdXNlKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMud3JpdGFibGUpIHtcbiAgICAgICAgZGVidWcoXCJ3ZSBhcmUgY3VycmVudGx5IHdyaXRpbmcgLSB3YWl0aW5nIHRvIHBhdXNlXCIpO1xuICAgICAgICB0b3RhbCsrO1xuICAgICAgICB0aGlzLm9uY2UoXCJkcmFpblwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICBkZWJ1ZyhcInByZS1wYXVzZSB3cml0aW5nIGNvbXBsZXRlXCIpO1xuICAgICAgICAgIC0tdG90YWwgfHwgcGF1c2UoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhdXNlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFN0YXJ0cyBwb2xsaW5nIGN5Y2xlLlxuICAgKlxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cbiAgcG9sbCgpIHtcbiAgICBkZWJ1ZyhcInBvbGxpbmdcIik7XG4gICAgdGhpcy5wb2xsaW5nID0gdHJ1ZTtcbiAgICB0aGlzLmRvUG9sbCgpO1xuICAgIHRoaXMuZW1pdChcInBvbGxcIik7XG4gIH1cblxuICAvKipcbiAgICogT3ZlcmxvYWRzIG9uRGF0YSB0byBkZXRlY3QgcGF5bG9hZHMuXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgb25EYXRhKGRhdGEpIHtcbiAgICBkZWJ1ZyhcInBvbGxpbmcgZ290IGRhdGEgJXNcIiwgZGF0YSk7XG4gICAgY29uc3QgY2FsbGJhY2sgPSBwYWNrZXQgPT4ge1xuICAgICAgLy8gaWYgaXRzIHRoZSBmaXJzdCBtZXNzYWdlIHdlIGNvbnNpZGVyIHRoZSB0cmFuc3BvcnQgb3BlblxuICAgICAgaWYgKFwib3BlbmluZ1wiID09PSB0aGlzLnJlYWR5U3RhdGUgJiYgcGFja2V0LnR5cGUgPT09IFwib3BlblwiKSB7XG4gICAgICAgIHRoaXMub25PcGVuKCk7XG4gICAgICB9XG5cbiAgICAgIC8vIGlmIGl0cyBhIGNsb3NlIHBhY2tldCwgd2UgY2xvc2UgdGhlIG9uZ29pbmcgcmVxdWVzdHNcbiAgICAgIGlmIChcImNsb3NlXCIgPT09IHBhY2tldC50eXBlKSB7XG4gICAgICAgIHRoaXMub25DbG9zZSgpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIC8vIG90aGVyd2lzZSBieXBhc3Mgb25EYXRhIGFuZCBoYW5kbGUgdGhlIG1lc3NhZ2VcbiAgICAgIHRoaXMub25QYWNrZXQocGFja2V0KTtcbiAgICB9O1xuXG4gICAgLy8gZGVjb2RlIHBheWxvYWRcbiAgICBwYXJzZXIuZGVjb2RlUGF5bG9hZChkYXRhLCB0aGlzLnNvY2tldC5iaW5hcnlUeXBlKS5mb3JFYWNoKGNhbGxiYWNrKTtcblxuICAgIC8vIGlmIGFuIGV2ZW50IGRpZCBub3QgdHJpZ2dlciBjbG9zaW5nXG4gICAgaWYgKFwiY2xvc2VkXCIgIT09IHRoaXMucmVhZHlTdGF0ZSkge1xuICAgICAgLy8gaWYgd2UgZ290IGRhdGEgd2UncmUgbm90IHBvbGxpbmdcbiAgICAgIHRoaXMucG9sbGluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5lbWl0KFwicG9sbENvbXBsZXRlXCIpO1xuXG4gICAgICBpZiAoXCJvcGVuXCIgPT09IHRoaXMucmVhZHlTdGF0ZSkge1xuICAgICAgICB0aGlzLnBvbGwoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlYnVnKCdpZ25vcmluZyBwb2xsIC0gdHJhbnNwb3J0IHN0YXRlIFwiJXNcIicsIHRoaXMucmVhZHlTdGF0ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEZvciBwb2xsaW5nLCBzZW5kIGEgY2xvc2UgcGFja2V0LlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIGRvQ2xvc2UoKSB7XG4gICAgY29uc3QgY2xvc2UgPSAoKSA9PiB7XG4gICAgICBkZWJ1ZyhcIndyaXRpbmcgY2xvc2UgcGFja2V0XCIpO1xuICAgICAgdGhpcy53cml0ZShbeyB0eXBlOiBcImNsb3NlXCIgfV0pO1xuICAgIH07XG5cbiAgICBpZiAoXCJvcGVuXCIgPT09IHRoaXMucmVhZHlTdGF0ZSkge1xuICAgICAgZGVidWcoXCJ0cmFuc3BvcnQgb3BlbiAtIGNsb3NpbmdcIik7XG4gICAgICBjbG9zZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpbiBjYXNlIHdlJ3JlIHRyeWluZyB0byBjbG9zZSB3aGlsZVxuICAgICAgLy8gaGFuZHNoYWtpbmcgaXMgaW4gcHJvZ3Jlc3MgKEdILTE2NClcbiAgICAgIGRlYnVnKFwidHJhbnNwb3J0IG5vdCBvcGVuIC0gZGVmZXJyaW5nIGNsb3NlXCIpO1xuICAgICAgdGhpcy5vbmNlKFwib3BlblwiLCBjbG9zZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFdyaXRlcyBhIHBhY2tldHMgcGF5bG9hZC5cbiAgICpcbiAgICogQHBhcmFtIHtBcnJheX0gZGF0YSBwYWNrZXRzXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGRyYWluIGNhbGxiYWNrXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgd3JpdGUocGFja2V0cykge1xuICAgIHRoaXMud3JpdGFibGUgPSBmYWxzZTtcblxuICAgIHBhcnNlci5lbmNvZGVQYXlsb2FkKHBhY2tldHMsIGRhdGEgPT4ge1xuICAgICAgdGhpcy5kb1dyaXRlKGRhdGEsICgpID0+IHtcbiAgICAgICAgdGhpcy53cml0YWJsZSA9IHRydWU7XG4gICAgICAgIHRoaXMuZW1pdChcImRyYWluXCIpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogR2VuZXJhdGVzIHVyaSBmb3IgY29ubmVjdGlvbi5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICB1cmkoKSB7XG4gICAgbGV0IHF1ZXJ5ID0gdGhpcy5xdWVyeSB8fCB7fTtcbiAgICBjb25zdCBzY2hlbWEgPSB0aGlzLm9wdHMuc2VjdXJlID8gXCJodHRwc1wiIDogXCJodHRwXCI7XG4gICAgbGV0IHBvcnQgPSBcIlwiO1xuXG4gICAgLy8gY2FjaGUgYnVzdGluZyBpcyBmb3JjZWRcbiAgICBpZiAoZmFsc2UgIT09IHRoaXMub3B0cy50aW1lc3RhbXBSZXF1ZXN0cykge1xuICAgICAgcXVlcnlbdGhpcy5vcHRzLnRpbWVzdGFtcFBhcmFtXSA9IHllYXN0KCk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLnN1cHBvcnRzQmluYXJ5ICYmICFxdWVyeS5zaWQpIHtcbiAgICAgIHF1ZXJ5LmI2NCA9IDE7XG4gICAgfVxuXG4gICAgcXVlcnkgPSBwYXJzZXFzLmVuY29kZShxdWVyeSk7XG5cbiAgICAvLyBhdm9pZCBwb3J0IGlmIGRlZmF1bHQgZm9yIHNjaGVtYVxuICAgIGlmIChcbiAgICAgIHRoaXMub3B0cy5wb3J0ICYmXG4gICAgICAoKFwiaHR0cHNcIiA9PT0gc2NoZW1hICYmIE51bWJlcih0aGlzLm9wdHMucG9ydCkgIT09IDQ0MykgfHxcbiAgICAgICAgKFwiaHR0cFwiID09PSBzY2hlbWEgJiYgTnVtYmVyKHRoaXMub3B0cy5wb3J0KSAhPT0gODApKVxuICAgICkge1xuICAgICAgcG9ydCA9IFwiOlwiICsgdGhpcy5vcHRzLnBvcnQ7XG4gICAgfVxuXG4gICAgLy8gcHJlcGVuZCA/IHRvIHF1ZXJ5XG4gICAgaWYgKHF1ZXJ5Lmxlbmd0aCkge1xuICAgICAgcXVlcnkgPSBcIj9cIiArIHF1ZXJ5O1xuICAgIH1cblxuICAgIGNvbnN0IGlwdjYgPSB0aGlzLm9wdHMuaG9zdG5hbWUuaW5kZXhPZihcIjpcIikgIT09IC0xO1xuICAgIHJldHVybiAoXG4gICAgICBzY2hlbWEgK1xuICAgICAgXCI6Ly9cIiArXG4gICAgICAoaXB2NiA/IFwiW1wiICsgdGhpcy5vcHRzLmhvc3RuYW1lICsgXCJdXCIgOiB0aGlzLm9wdHMuaG9zdG5hbWUpICtcbiAgICAgIHBvcnQgK1xuICAgICAgdGhpcy5vcHRzLnBhdGggK1xuICAgICAgcXVlcnlcbiAgICApO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUG9sbGluZztcbiIsImNvbnN0IGdsb2JhbFRoaXMgPSByZXF1aXJlKFwiLi4vZ2xvYmFsVGhpc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIFdlYlNvY2tldDogZ2xvYmFsVGhpcy5XZWJTb2NrZXQgfHwgZ2xvYmFsVGhpcy5Nb3pXZWJTb2NrZXQsXG4gIHVzaW5nQnJvd3NlcldlYlNvY2tldDogdHJ1ZSxcbiAgZGVmYXVsdEJpbmFyeVR5cGU6IFwiYXJyYXlidWZmZXJcIlxufTtcbiIsImNvbnN0IFRyYW5zcG9ydCA9IHJlcXVpcmUoXCIuLi90cmFuc3BvcnRcIik7XG5jb25zdCBwYXJzZXIgPSByZXF1aXJlKFwiZW5naW5lLmlvLXBhcnNlclwiKTtcbmNvbnN0IHBhcnNlcXMgPSByZXF1aXJlKFwicGFyc2Vxc1wiKTtcbmNvbnN0IHllYXN0ID0gcmVxdWlyZShcInllYXN0XCIpO1xuY29uc3QgeyBwaWNrIH0gPSByZXF1aXJlKFwiLi4vdXRpbFwiKTtcbmNvbnN0IHtcbiAgV2ViU29ja2V0LFxuICB1c2luZ0Jyb3dzZXJXZWJTb2NrZXQsXG4gIGRlZmF1bHRCaW5hcnlUeXBlXG59ID0gcmVxdWlyZShcIi4vd2Vic29ja2V0LWNvbnN0cnVjdG9yXCIpO1xuXG5jb25zdCBkZWJ1ZyA9IHJlcXVpcmUoXCJkZWJ1Z1wiKShcImVuZ2luZS5pby1jbGllbnQ6d2Vic29ja2V0XCIpO1xuXG4vLyBkZXRlY3QgUmVhY3ROYXRpdmUgZW52aXJvbm1lbnRcbmNvbnN0IGlzUmVhY3ROYXRpdmUgPVxuICB0eXBlb2YgbmF2aWdhdG9yICE9PSBcInVuZGVmaW5lZFwiICYmXG4gIHR5cGVvZiBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gXCJzdHJpbmdcIiAmJlxuICBuYXZpZ2F0b3IucHJvZHVjdC50b0xvd2VyQ2FzZSgpID09PSBcInJlYWN0bmF0aXZlXCI7XG5cbmNsYXNzIFdTIGV4dGVuZHMgVHJhbnNwb3J0IHtcbiAgLyoqXG4gICAqIFdlYlNvY2tldCB0cmFuc3BvcnQgY29uc3RydWN0b3IuXG4gICAqXG4gICAqIEBhcGkge09iamVjdH0gY29ubmVjdGlvbiBvcHRpb25zXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuICBjb25zdHJ1Y3RvcihvcHRzKSB7XG4gICAgc3VwZXIob3B0cyk7XG5cbiAgICB0aGlzLnN1cHBvcnRzQmluYXJ5ID0gIW9wdHMuZm9yY2VCYXNlNjQ7XG4gIH1cblxuICAvKipcbiAgICogVHJhbnNwb3J0IG5hbWUuXG4gICAqXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuICBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gXCJ3ZWJzb2NrZXRcIjtcbiAgfVxuXG4gIC8qKlxuICAgKiBPcGVucyBzb2NrZXQuXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgZG9PcGVuKCkge1xuICAgIGlmICghdGhpcy5jaGVjaygpKSB7XG4gICAgICAvLyBsZXQgcHJvYmUgdGltZW91dFxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHVyaSA9IHRoaXMudXJpKCk7XG4gICAgY29uc3QgcHJvdG9jb2xzID0gdGhpcy5vcHRzLnByb3RvY29scztcblxuICAgIC8vIFJlYWN0IE5hdGl2ZSBvbmx5IHN1cHBvcnRzIHRoZSAnaGVhZGVycycgb3B0aW9uLCBhbmQgd2lsbCBwcmludCBhIHdhcm5pbmcgaWYgYW55dGhpbmcgZWxzZSBpcyBwYXNzZWRcbiAgICBjb25zdCBvcHRzID0gaXNSZWFjdE5hdGl2ZVxuICAgICAgPyB7fVxuICAgICAgOiBwaWNrKFxuICAgICAgICAgIHRoaXMub3B0cyxcbiAgICAgICAgICBcImFnZW50XCIsXG4gICAgICAgICAgXCJwZXJNZXNzYWdlRGVmbGF0ZVwiLFxuICAgICAgICAgIFwicGZ4XCIsXG4gICAgICAgICAgXCJrZXlcIixcbiAgICAgICAgICBcInBhc3NwaHJhc2VcIixcbiAgICAgICAgICBcImNlcnRcIixcbiAgICAgICAgICBcImNhXCIsXG4gICAgICAgICAgXCJjaXBoZXJzXCIsXG4gICAgICAgICAgXCJyZWplY3RVbmF1dGhvcml6ZWRcIixcbiAgICAgICAgICBcImxvY2FsQWRkcmVzc1wiLFxuICAgICAgICAgIFwicHJvdG9jb2xWZXJzaW9uXCIsXG4gICAgICAgICAgXCJvcmlnaW5cIixcbiAgICAgICAgICBcIm1heFBheWxvYWRcIixcbiAgICAgICAgICBcImZhbWlseVwiLFxuICAgICAgICAgIFwiY2hlY2tTZXJ2ZXJJZGVudGl0eVwiXG4gICAgICAgICk7XG5cbiAgICBpZiAodGhpcy5vcHRzLmV4dHJhSGVhZGVycykge1xuICAgICAgb3B0cy5oZWFkZXJzID0gdGhpcy5vcHRzLmV4dHJhSGVhZGVycztcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgdGhpcy53cyA9XG4gICAgICAgIHVzaW5nQnJvd3NlcldlYlNvY2tldCAmJiAhaXNSZWFjdE5hdGl2ZVxuICAgICAgICAgID8gcHJvdG9jb2xzXG4gICAgICAgICAgICA/IG5ldyBXZWJTb2NrZXQodXJpLCBwcm90b2NvbHMpXG4gICAgICAgICAgICA6IG5ldyBXZWJTb2NrZXQodXJpKVxuICAgICAgICAgIDogbmV3IFdlYlNvY2tldCh1cmksIHByb3RvY29scywgb3B0cyk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5lbWl0KFwiZXJyb3JcIiwgZXJyKTtcbiAgICB9XG5cbiAgICB0aGlzLndzLmJpbmFyeVR5cGUgPSB0aGlzLnNvY2tldC5iaW5hcnlUeXBlIHx8IGRlZmF1bHRCaW5hcnlUeXBlO1xuXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgZXZlbnQgbGlzdGVuZXJzIHRvIHRoZSBzb2NrZXRcbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICB0aGlzLndzLm9ub3BlbiA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLm9wdHMuYXV0b1VucmVmKSB7XG4gICAgICAgIHRoaXMud3MuX3NvY2tldC51bnJlZigpO1xuICAgICAgfVxuICAgICAgdGhpcy5vbk9wZW4oKTtcbiAgICB9O1xuICAgIHRoaXMud3Mub25jbG9zZSA9IHRoaXMub25DbG9zZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMud3Mub25tZXNzYWdlID0gZXYgPT4gdGhpcy5vbkRhdGEoZXYuZGF0YSk7XG4gICAgdGhpcy53cy5vbmVycm9yID0gZSA9PiB0aGlzLm9uRXJyb3IoXCJ3ZWJzb2NrZXQgZXJyb3JcIiwgZSk7XG4gIH1cblxuICAvKipcbiAgICogV3JpdGVzIGRhdGEgdG8gc29ja2V0LlxuICAgKlxuICAgKiBAcGFyYW0ge0FycmF5fSBhcnJheSBvZiBwYWNrZXRzLlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIHdyaXRlKHBhY2tldHMpIHtcbiAgICB0aGlzLndyaXRhYmxlID0gZmFsc2U7XG5cbiAgICAvLyBlbmNvZGVQYWNrZXQgZWZmaWNpZW50IGFzIGl0IHVzZXMgV1MgZnJhbWluZ1xuICAgIC8vIG5vIG5lZWQgZm9yIGVuY29kZVBheWxvYWRcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhY2tldHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHBhY2tldCA9IHBhY2tldHNbaV07XG4gICAgICBjb25zdCBsYXN0UGFja2V0ID0gaSA9PT0gcGFja2V0cy5sZW5ndGggLSAxO1xuXG4gICAgICBwYXJzZXIuZW5jb2RlUGFja2V0KHBhY2tldCwgdGhpcy5zdXBwb3J0c0JpbmFyeSwgZGF0YSA9PiB7XG4gICAgICAgIC8vIGFsd2F5cyBjcmVhdGUgYSBuZXcgb2JqZWN0IChHSC00MzcpXG4gICAgICAgIGNvbnN0IG9wdHMgPSB7fTtcbiAgICAgICAgaWYgKCF1c2luZ0Jyb3dzZXJXZWJTb2NrZXQpIHtcbiAgICAgICAgICBpZiAocGFja2V0Lm9wdGlvbnMpIHtcbiAgICAgICAgICAgIG9wdHMuY29tcHJlc3MgPSBwYWNrZXQub3B0aW9ucy5jb21wcmVzcztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodGhpcy5vcHRzLnBlck1lc3NhZ2VEZWZsYXRlKSB7XG4gICAgICAgICAgICBjb25zdCBsZW4gPVxuICAgICAgICAgICAgICBcInN0cmluZ1wiID09PSB0eXBlb2YgZGF0YSA/IEJ1ZmZlci5ieXRlTGVuZ3RoKGRhdGEpIDogZGF0YS5sZW5ndGg7XG4gICAgICAgICAgICBpZiAobGVuIDwgdGhpcy5vcHRzLnBlck1lc3NhZ2VEZWZsYXRlLnRocmVzaG9sZCkge1xuICAgICAgICAgICAgICBvcHRzLmNvbXByZXNzID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gU29tZXRpbWVzIHRoZSB3ZWJzb2NrZXQgaGFzIGFscmVhZHkgYmVlbiBjbG9zZWQgYnV0IHRoZSBicm93c2VyIGRpZG4ndFxuICAgICAgICAvLyBoYXZlIGEgY2hhbmNlIG9mIGluZm9ybWluZyB1cyBhYm91dCBpdCB5ZXQsIGluIHRoYXQgY2FzZSBzZW5kIHdpbGxcbiAgICAgICAgLy8gdGhyb3cgYW4gZXJyb3JcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpZiAodXNpbmdCcm93c2VyV2ViU29ja2V0KSB7XG4gICAgICAgICAgICAvLyBUeXBlRXJyb3IgaXMgdGhyb3duIHdoZW4gcGFzc2luZyB0aGUgc2Vjb25kIGFyZ3VtZW50IG9uIFNhZmFyaVxuICAgICAgICAgICAgdGhpcy53cy5zZW5kKGRhdGEpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLndzLnNlbmQoZGF0YSwgb3B0cyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgZGVidWcoXCJ3ZWJzb2NrZXQgY2xvc2VkIGJlZm9yZSBvbmNsb3NlIGV2ZW50XCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGxhc3RQYWNrZXQpIHtcbiAgICAgICAgICAvLyBmYWtlIGRyYWluXG4gICAgICAgICAgLy8gZGVmZXIgdG8gbmV4dCB0aWNrIHRvIGFsbG93IFNvY2tldCB0byBjbGVhciB3cml0ZUJ1ZmZlclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy53cml0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmVtaXQoXCJkcmFpblwiKTtcbiAgICAgICAgICB9LCAwKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCB1cG9uIGNsb3NlXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgb25DbG9zZSgpIHtcbiAgICBUcmFuc3BvcnQucHJvdG90eXBlLm9uQ2xvc2UuY2FsbCh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbG9zZXMgc29ja2V0LlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIGRvQ2xvc2UoKSB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLndzICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICB0aGlzLndzLmNsb3NlKCk7XG4gICAgICB0aGlzLndzID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2VuZXJhdGVzIHVyaSBmb3IgY29ubmVjdGlvbi5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICB1cmkoKSB7XG4gICAgbGV0IHF1ZXJ5ID0gdGhpcy5xdWVyeSB8fCB7fTtcbiAgICBjb25zdCBzY2hlbWEgPSB0aGlzLm9wdHMuc2VjdXJlID8gXCJ3c3NcIiA6IFwid3NcIjtcbiAgICBsZXQgcG9ydCA9IFwiXCI7XG5cbiAgICAvLyBhdm9pZCBwb3J0IGlmIGRlZmF1bHQgZm9yIHNjaGVtYVxuICAgIGlmIChcbiAgICAgIHRoaXMub3B0cy5wb3J0ICYmXG4gICAgICAoKFwid3NzXCIgPT09IHNjaGVtYSAmJiBOdW1iZXIodGhpcy5vcHRzLnBvcnQpICE9PSA0NDMpIHx8XG4gICAgICAgIChcIndzXCIgPT09IHNjaGVtYSAmJiBOdW1iZXIodGhpcy5vcHRzLnBvcnQpICE9PSA4MCkpXG4gICAgKSB7XG4gICAgICBwb3J0ID0gXCI6XCIgKyB0aGlzLm9wdHMucG9ydDtcbiAgICB9XG5cbiAgICAvLyBhcHBlbmQgdGltZXN0YW1wIHRvIFVSSVxuICAgIGlmICh0aGlzLm9wdHMudGltZXN0YW1wUmVxdWVzdHMpIHtcbiAgICAgIHF1ZXJ5W3RoaXMub3B0cy50aW1lc3RhbXBQYXJhbV0gPSB5ZWFzdCgpO1xuICAgIH1cblxuICAgIC8vIGNvbW11bmljYXRlIGJpbmFyeSBzdXBwb3J0IGNhcGFiaWxpdGllc1xuICAgIGlmICghdGhpcy5zdXBwb3J0c0JpbmFyeSkge1xuICAgICAgcXVlcnkuYjY0ID0gMTtcbiAgICB9XG5cbiAgICBxdWVyeSA9IHBhcnNlcXMuZW5jb2RlKHF1ZXJ5KTtcblxuICAgIC8vIHByZXBlbmQgPyB0byBxdWVyeVxuICAgIGlmIChxdWVyeS5sZW5ndGgpIHtcbiAgICAgIHF1ZXJ5ID0gXCI/XCIgKyBxdWVyeTtcbiAgICB9XG5cbiAgICBjb25zdCBpcHY2ID0gdGhpcy5vcHRzLmhvc3RuYW1lLmluZGV4T2YoXCI6XCIpICE9PSAtMTtcbiAgICByZXR1cm4gKFxuICAgICAgc2NoZW1hICtcbiAgICAgIFwiOi8vXCIgK1xuICAgICAgKGlwdjYgPyBcIltcIiArIHRoaXMub3B0cy5ob3N0bmFtZSArIFwiXVwiIDogdGhpcy5vcHRzLmhvc3RuYW1lKSArXG4gICAgICBwb3J0ICtcbiAgICAgIHRoaXMub3B0cy5wYXRoICtcbiAgICAgIHF1ZXJ5XG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGZWF0dXJlIGRldGVjdGlvbiBmb3IgV2ViU29ja2V0LlxuICAgKlxuICAgKiBAcmV0dXJuIHtCb29sZWFufSB3aGV0aGVyIHRoaXMgdHJhbnNwb3J0IGlzIGF2YWlsYWJsZS5cbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG4gIGNoZWNrKCkge1xuICAgIHJldHVybiAoXG4gICAgICAhIVdlYlNvY2tldCAmJlxuICAgICAgIShcIl9faW5pdGlhbGl6ZVwiIGluIFdlYlNvY2tldCAmJiB0aGlzLm5hbWUgPT09IFdTLnByb3RvdHlwZS5uYW1lKVxuICAgICk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBXUztcbiIsIm1vZHVsZS5leHBvcnRzLnBpY2sgPSAob2JqLCAuLi5hdHRyKSA9PiB7XG4gIHJldHVybiBhdHRyLnJlZHVjZSgoYWNjLCBrKSA9PiB7XG4gICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgYWNjW2tdID0gb2JqW2tdO1xuICAgIH1cbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG59O1xuIiwiLy8gYnJvd3NlciBzaGltIGZvciB4bWxodHRwcmVxdWVzdCBtb2R1bGVcblxuY29uc3QgaGFzQ09SUyA9IHJlcXVpcmUoXCJoYXMtY29yc1wiKTtcbmNvbnN0IGdsb2JhbFRoaXMgPSByZXF1aXJlKFwiLi9nbG9iYWxUaGlzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9wdHMpIHtcbiAgY29uc3QgeGRvbWFpbiA9IG9wdHMueGRvbWFpbjtcblxuICAvLyBzY2hlbWUgbXVzdCBiZSBzYW1lIHdoZW4gdXNpZ24gWERvbWFpblJlcXVlc3RcbiAgLy8gaHR0cDovL2Jsb2dzLm1zZG4uY29tL2IvaWVpbnRlcm5hbHMvYXJjaGl2ZS8yMDEwLzA1LzEzL3hkb21haW5yZXF1ZXN0LXJlc3RyaWN0aW9ucy1saW1pdGF0aW9ucy1hbmQtd29ya2Fyb3VuZHMuYXNweFxuICBjb25zdCB4c2NoZW1lID0gb3B0cy54c2NoZW1lO1xuXG4gIC8vIFhEb21haW5SZXF1ZXN0IGhhcyBhIGZsb3cgb2Ygbm90IHNlbmRpbmcgY29va2llLCB0aGVyZWZvcmUgaXQgc2hvdWxkIGJlIGRpc2FibGVkIGFzIGEgZGVmYXVsdC5cbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL0F1dG9tYXR0aWMvZW5naW5lLmlvLWNsaWVudC9wdWxsLzIxN1xuICBjb25zdCBlbmFibGVzWERSID0gb3B0cy5lbmFibGVzWERSO1xuXG4gIC8vIFhNTEh0dHBSZXF1ZXN0IGNhbiBiZSBkaXNhYmxlZCBvbiBJRVxuICB0cnkge1xuICAgIGlmIChcInVuZGVmaW5lZFwiICE9PSB0eXBlb2YgWE1MSHR0cFJlcXVlc3QgJiYgKCF4ZG9tYWluIHx8IGhhc0NPUlMpKSB7XG4gICAgICByZXR1cm4gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgfVxuICB9IGNhdGNoIChlKSB7fVxuXG4gIC8vIFVzZSBYRG9tYWluUmVxdWVzdCBmb3IgSUU4IGlmIGVuYWJsZXNYRFIgaXMgdHJ1ZVxuICAvLyBiZWNhdXNlIGxvYWRpbmcgYmFyIGtlZXBzIGZsYXNoaW5nIHdoZW4gdXNpbmcganNvbnAtcG9sbGluZ1xuICAvLyBodHRwczovL2dpdGh1Yi5jb20veXVqaW9zYWthL3NvY2tlLmlvLWllOC1sb2FkaW5nLWV4YW1wbGVcbiAgdHJ5IHtcbiAgICBpZiAoXCJ1bmRlZmluZWRcIiAhPT0gdHlwZW9mIFhEb21haW5SZXF1ZXN0ICYmICF4c2NoZW1lICYmIGVuYWJsZXNYRFIpIHtcbiAgICAgIHJldHVybiBuZXcgWERvbWFpblJlcXVlc3QoKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHt9XG5cbiAgaWYgKCF4ZG9tYWluKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBuZXcgZ2xvYmFsVGhpc1tbXCJBY3RpdmVcIl0uY29uY2F0KFwiT2JqZWN0XCIpLmpvaW4oXCJYXCIpXShcbiAgICAgICAgXCJNaWNyb3NvZnQuWE1MSFRUUFwiXG4gICAgICApO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cbn07XG4iLCJjb25zdCBQQUNLRVRfVFlQRVMgPSBPYmplY3QuY3JlYXRlKG51bGwpOyAvLyBubyBNYXAgPSBubyBwb2x5ZmlsbFxuUEFDS0VUX1RZUEVTW1wib3BlblwiXSA9IFwiMFwiO1xuUEFDS0VUX1RZUEVTW1wiY2xvc2VcIl0gPSBcIjFcIjtcblBBQ0tFVF9UWVBFU1tcInBpbmdcIl0gPSBcIjJcIjtcblBBQ0tFVF9UWVBFU1tcInBvbmdcIl0gPSBcIjNcIjtcblBBQ0tFVF9UWVBFU1tcIm1lc3NhZ2VcIl0gPSBcIjRcIjtcblBBQ0tFVF9UWVBFU1tcInVwZ3JhZGVcIl0gPSBcIjVcIjtcblBBQ0tFVF9UWVBFU1tcIm5vb3BcIl0gPSBcIjZcIjtcblxuY29uc3QgUEFDS0VUX1RZUEVTX1JFVkVSU0UgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuT2JqZWN0LmtleXMoUEFDS0VUX1RZUEVTKS5mb3JFYWNoKGtleSA9PiB7XG4gIFBBQ0tFVF9UWVBFU19SRVZFUlNFW1BBQ0tFVF9UWVBFU1trZXldXSA9IGtleTtcbn0pO1xuXG5jb25zdCBFUlJPUl9QQUNLRVQgPSB7IHR5cGU6IFwiZXJyb3JcIiwgZGF0YTogXCJwYXJzZXIgZXJyb3JcIiB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgUEFDS0VUX1RZUEVTLFxuICBQQUNLRVRfVFlQRVNfUkVWRVJTRSxcbiAgRVJST1JfUEFDS0VUXG59O1xuIiwiY29uc3QgeyBQQUNLRVRfVFlQRVNfUkVWRVJTRSwgRVJST1JfUEFDS0VUIH0gPSByZXF1aXJlKFwiLi9jb21tb25zXCIpO1xuXG5jb25zdCB3aXRoTmF0aXZlQXJyYXlCdWZmZXIgPSB0eXBlb2YgQXJyYXlCdWZmZXIgPT09IFwiZnVuY3Rpb25cIjtcblxubGV0IGJhc2U2NGRlY29kZXI7XG5pZiAod2l0aE5hdGl2ZUFycmF5QnVmZmVyKSB7XG4gIGJhc2U2NGRlY29kZXIgPSByZXF1aXJlKFwiYmFzZTY0LWFycmF5YnVmZmVyXCIpO1xufVxuXG5jb25zdCBkZWNvZGVQYWNrZXQgPSAoZW5jb2RlZFBhY2tldCwgYmluYXJ5VHlwZSkgPT4ge1xuICBpZiAodHlwZW9mIGVuY29kZWRQYWNrZXQgIT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogXCJtZXNzYWdlXCIsXG4gICAgICBkYXRhOiBtYXBCaW5hcnkoZW5jb2RlZFBhY2tldCwgYmluYXJ5VHlwZSlcbiAgICB9O1xuICB9XG4gIGNvbnN0IHR5cGUgPSBlbmNvZGVkUGFja2V0LmNoYXJBdCgwKTtcbiAgaWYgKHR5cGUgPT09IFwiYlwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IFwibWVzc2FnZVwiLFxuICAgICAgZGF0YTogZGVjb2RlQmFzZTY0UGFja2V0KGVuY29kZWRQYWNrZXQuc3Vic3RyaW5nKDEpLCBiaW5hcnlUeXBlKVxuICAgIH07XG4gIH1cbiAgY29uc3QgcGFja2V0VHlwZSA9IFBBQ0tFVF9UWVBFU19SRVZFUlNFW3R5cGVdO1xuICBpZiAoIXBhY2tldFR5cGUpIHtcbiAgICByZXR1cm4gRVJST1JfUEFDS0VUO1xuICB9XG4gIHJldHVybiBlbmNvZGVkUGFja2V0Lmxlbmd0aCA+IDFcbiAgICA/IHtcbiAgICAgICAgdHlwZTogUEFDS0VUX1RZUEVTX1JFVkVSU0VbdHlwZV0sXG4gICAgICAgIGRhdGE6IGVuY29kZWRQYWNrZXQuc3Vic3RyaW5nKDEpXG4gICAgICB9XG4gICAgOiB7XG4gICAgICAgIHR5cGU6IFBBQ0tFVF9UWVBFU19SRVZFUlNFW3R5cGVdXG4gICAgICB9O1xufTtcblxuY29uc3QgZGVjb2RlQmFzZTY0UGFja2V0ID0gKGRhdGEsIGJpbmFyeVR5cGUpID0+IHtcbiAgaWYgKGJhc2U2NGRlY29kZXIpIHtcbiAgICBjb25zdCBkZWNvZGVkID0gYmFzZTY0ZGVjb2Rlci5kZWNvZGUoZGF0YSk7XG4gICAgcmV0dXJuIG1hcEJpbmFyeShkZWNvZGVkLCBiaW5hcnlUeXBlKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geyBiYXNlNjQ6IHRydWUsIGRhdGEgfTsgLy8gZmFsbGJhY2sgZm9yIG9sZCBicm93c2Vyc1xuICB9XG59O1xuXG5jb25zdCBtYXBCaW5hcnkgPSAoZGF0YSwgYmluYXJ5VHlwZSkgPT4ge1xuICBzd2l0Y2ggKGJpbmFyeVR5cGUpIHtcbiAgICBjYXNlIFwiYmxvYlwiOlxuICAgICAgcmV0dXJuIGRhdGEgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlciA/IG5ldyBCbG9iKFtkYXRhXSkgOiBkYXRhO1xuICAgIGNhc2UgXCJhcnJheWJ1ZmZlclwiOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZGF0YTsgLy8gYXNzdW1pbmcgdGhlIGRhdGEgaXMgYWxyZWFkeSBhbiBBcnJheUJ1ZmZlclxuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRlY29kZVBhY2tldDtcbiIsImNvbnN0IHsgUEFDS0VUX1RZUEVTIH0gPSByZXF1aXJlKFwiLi9jb21tb25zXCIpO1xuXG5jb25zdCB3aXRoTmF0aXZlQmxvYiA9XG4gIHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgfHxcbiAgKHR5cGVvZiBCbG9iICE9PSBcInVuZGVmaW5lZFwiICYmXG4gICAgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKEJsb2IpID09PSBcIltvYmplY3QgQmxvYkNvbnN0cnVjdG9yXVwiKTtcbmNvbnN0IHdpdGhOYXRpdmVBcnJheUJ1ZmZlciA9IHR5cGVvZiBBcnJheUJ1ZmZlciA9PT0gXCJmdW5jdGlvblwiO1xuXG4vLyBBcnJheUJ1ZmZlci5pc1ZpZXcgbWV0aG9kIGlzIG5vdCBkZWZpbmVkIGluIElFMTBcbmNvbnN0IGlzVmlldyA9IG9iaiA9PiB7XG4gIHJldHVybiB0eXBlb2YgQXJyYXlCdWZmZXIuaXNWaWV3ID09PSBcImZ1bmN0aW9uXCJcbiAgICA/IEFycmF5QnVmZmVyLmlzVmlldyhvYmopXG4gICAgOiBvYmogJiYgb2JqLmJ1ZmZlciBpbnN0YW5jZW9mIEFycmF5QnVmZmVyO1xufTtcblxuY29uc3QgZW5jb2RlUGFja2V0ID0gKHsgdHlwZSwgZGF0YSB9LCBzdXBwb3J0c0JpbmFyeSwgY2FsbGJhY2spID0+IHtcbiAgaWYgKHdpdGhOYXRpdmVCbG9iICYmIGRhdGEgaW5zdGFuY2VvZiBCbG9iKSB7XG4gICAgaWYgKHN1cHBvcnRzQmluYXJ5KSB7XG4gICAgICByZXR1cm4gY2FsbGJhY2soZGF0YSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBlbmNvZGVCbG9iQXNCYXNlNjQoZGF0YSwgY2FsbGJhY2spO1xuICAgIH1cbiAgfSBlbHNlIGlmIChcbiAgICB3aXRoTmF0aXZlQXJyYXlCdWZmZXIgJiZcbiAgICAoZGF0YSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyIHx8IGlzVmlldyhkYXRhKSlcbiAgKSB7XG4gICAgaWYgKHN1cHBvcnRzQmluYXJ5KSB7XG4gICAgICByZXR1cm4gY2FsbGJhY2soZGF0YSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyID8gZGF0YSA6IGRhdGEuYnVmZmVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGVuY29kZUJsb2JBc0Jhc2U2NChuZXcgQmxvYihbZGF0YV0pLCBjYWxsYmFjayk7XG4gICAgfVxuICB9XG4gIC8vIHBsYWluIHN0cmluZ1xuICByZXR1cm4gY2FsbGJhY2soUEFDS0VUX1RZUEVTW3R5cGVdICsgKGRhdGEgfHwgXCJcIikpO1xufTtcblxuY29uc3QgZW5jb2RlQmxvYkFzQmFzZTY0ID0gKGRhdGEsIGNhbGxiYWNrKSA9PiB7XG4gIGNvbnN0IGZpbGVSZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICBmaWxlUmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBmaWxlUmVhZGVyLnJlc3VsdC5zcGxpdChcIixcIilbMV07XG4gICAgY2FsbGJhY2soXCJiXCIgKyBjb250ZW50KTtcbiAgfTtcbiAgcmV0dXJuIGZpbGVSZWFkZXIucmVhZEFzRGF0YVVSTChkYXRhKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZW5jb2RlUGFja2V0O1xuIiwiY29uc3QgZW5jb2RlUGFja2V0ID0gcmVxdWlyZShcIi4vZW5jb2RlUGFja2V0XCIpO1xuY29uc3QgZGVjb2RlUGFja2V0ID0gcmVxdWlyZShcIi4vZGVjb2RlUGFja2V0XCIpO1xuXG5jb25zdCBTRVBBUkFUT1IgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDMwKTsgLy8gc2VlIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0RlbGltaXRlciNBU0NJSV9kZWxpbWl0ZWRfdGV4dFxuXG5jb25zdCBlbmNvZGVQYXlsb2FkID0gKHBhY2tldHMsIGNhbGxiYWNrKSA9PiB7XG4gIC8vIHNvbWUgcGFja2V0cyBtYXkgYmUgYWRkZWQgdG8gdGhlIGFycmF5IHdoaWxlIGVuY29kaW5nLCBzbyB0aGUgaW5pdGlhbCBsZW5ndGggbXVzdCBiZSBzYXZlZFxuICBjb25zdCBsZW5ndGggPSBwYWNrZXRzLmxlbmd0aDtcbiAgY29uc3QgZW5jb2RlZFBhY2tldHMgPSBuZXcgQXJyYXkobGVuZ3RoKTtcbiAgbGV0IGNvdW50ID0gMDtcblxuICBwYWNrZXRzLmZvckVhY2goKHBhY2tldCwgaSkgPT4ge1xuICAgIC8vIGZvcmNlIGJhc2U2NCBlbmNvZGluZyBmb3IgYmluYXJ5IHBhY2tldHNcbiAgICBlbmNvZGVQYWNrZXQocGFja2V0LCBmYWxzZSwgZW5jb2RlZFBhY2tldCA9PiB7XG4gICAgICBlbmNvZGVkUGFja2V0c1tpXSA9IGVuY29kZWRQYWNrZXQ7XG4gICAgICBpZiAoKytjb3VudCA9PT0gbGVuZ3RoKSB7XG4gICAgICAgIGNhbGxiYWNrKGVuY29kZWRQYWNrZXRzLmpvaW4oU0VQQVJBVE9SKSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufTtcblxuY29uc3QgZGVjb2RlUGF5bG9hZCA9IChlbmNvZGVkUGF5bG9hZCwgYmluYXJ5VHlwZSkgPT4ge1xuICBjb25zdCBlbmNvZGVkUGFja2V0cyA9IGVuY29kZWRQYXlsb2FkLnNwbGl0KFNFUEFSQVRPUik7XG4gIGNvbnN0IHBhY2tldHMgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbmNvZGVkUGFja2V0cy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGRlY29kZWRQYWNrZXQgPSBkZWNvZGVQYWNrZXQoZW5jb2RlZFBhY2tldHNbaV0sIGJpbmFyeVR5cGUpO1xuICAgIHBhY2tldHMucHVzaChkZWNvZGVkUGFja2V0KTtcbiAgICBpZiAoZGVjb2RlZFBhY2tldC50eXBlID09PSBcImVycm9yXCIpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcGFja2V0cztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBwcm90b2NvbDogNCxcbiAgZW5jb2RlUGFja2V0LFxuICBlbmNvZGVQYXlsb2FkLFxuICBkZWNvZGVQYWNrZXQsXG4gIGRlY29kZVBheWxvYWRcbn07XG4iLCJcbi8qKlxuICogTW9kdWxlIGV4cG9ydHMuXG4gKlxuICogTG9naWMgYm9ycm93ZWQgZnJvbSBNb2Rlcm5penI6XG4gKlxuICogICAtIGh0dHBzOi8vZ2l0aHViLmNvbS9Nb2Rlcm5penIvTW9kZXJuaXpyL2Jsb2IvbWFzdGVyL2ZlYXR1cmUtZGV0ZWN0cy9jb3JzLmpzXG4gKi9cblxudHJ5IHtcbiAgbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2YgWE1MSHR0cFJlcXVlc3QgIT09ICd1bmRlZmluZWQnICYmXG4gICAgJ3dpdGhDcmVkZW50aWFscycgaW4gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG59IGNhdGNoIChlcnIpIHtcbiAgLy8gaWYgWE1MSHR0cCBzdXBwb3J0IGlzIGRpc2FibGVkIGluIElFIHRoZW4gaXQgd2lsbCB0aHJvd1xuICAvLyB3aGVuIHRyeWluZyB0byBjcmVhdGVcbiAgbW9kdWxlLmV4cG9ydHMgPSBmYWxzZTtcbn1cbiIsIi8qXG4gIGh0dHBzOi8vZ2l0aHViLmNvbS9iYW5rc2VhbiB3cmFwcGVkIE1ha290byBNYXRzdW1vdG8gYW5kIFRha3VqaSBOaXNoaW11cmEncyBjb2RlIGluIGEgbmFtZXNwYWNlXG4gIHNvIGl0J3MgYmV0dGVyIGVuY2Fwc3VsYXRlZC4gTm93IHlvdSBjYW4gaGF2ZSBtdWx0aXBsZSByYW5kb20gbnVtYmVyIGdlbmVyYXRvcnNcbiAgYW5kIHRoZXkgd29uJ3Qgc3RvbXAgYWxsIG92ZXIgZWFjaG90aGVyJ3Mgc3RhdGUuXG5cbiAgSWYgeW91IHdhbnQgdG8gdXNlIHRoaXMgYXMgYSBzdWJzdGl0dXRlIGZvciBNYXRoLnJhbmRvbSgpLCB1c2UgdGhlIHJhbmRvbSgpXG4gIG1ldGhvZCBsaWtlIHNvOlxuXG4gIHZhciBtID0gbmV3IE1lcnNlbm5lVHdpc3RlcigpO1xuICB2YXIgcmFuZG9tTnVtYmVyID0gbS5yYW5kb20oKTtcblxuICBZb3UgY2FuIGFsc28gY2FsbCB0aGUgb3RoZXIgZ2VucmFuZF97Zm9vfSgpIG1ldGhvZHMgb24gdGhlIGluc3RhbmNlLlxuXG4gIElmIHlvdSB3YW50IHRvIHVzZSBhIHNwZWNpZmljIHNlZWQgaW4gb3JkZXIgdG8gZ2V0IGEgcmVwZWF0YWJsZSByYW5kb21cbiAgc2VxdWVuY2UsIHBhc3MgYW4gaW50ZWdlciBpbnRvIHRoZSBjb25zdHJ1Y3RvcjpcblxuICB2YXIgbSA9IG5ldyBNZXJzZW5uZVR3aXN0ZXIoMTIzKTtcblxuICBhbmQgdGhhdCB3aWxsIGFsd2F5cyBwcm9kdWNlIHRoZSBzYW1lIHJhbmRvbSBzZXF1ZW5jZS5cblxuICBTZWFuIE1jQ3VsbG91Z2ggKGJhbmtzZWFuQGdtYWlsLmNvbSlcbiovXG5cbi8qXG4gICBBIEMtcHJvZ3JhbSBmb3IgTVQxOTkzNywgd2l0aCBpbml0aWFsaXphdGlvbiBpbXByb3ZlZCAyMDAyLzEvMjYuXG4gICBDb2RlZCBieSBUYWt1amkgTmlzaGltdXJhIGFuZCBNYWtvdG8gTWF0c3Vtb3RvLlxuXG4gICBCZWZvcmUgdXNpbmcsIGluaXRpYWxpemUgdGhlIHN0YXRlIGJ5IHVzaW5nIGluaXRfc2VlZChzZWVkKVxuICAgb3IgaW5pdF9ieV9hcnJheShpbml0X2tleSwga2V5X2xlbmd0aCkuXG5cbiAgIENvcHlyaWdodCAoQykgMTk5NyAtIDIwMDIsIE1ha290byBNYXRzdW1vdG8gYW5kIFRha3VqaSBOaXNoaW11cmEsXG4gICBBbGwgcmlnaHRzIHJlc2VydmVkLlxuXG4gICBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXRcbiAgIG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uc1xuICAgYXJlIG1ldDpcblxuICAgICAxLiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodFxuICAgICAgICBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG5cbiAgICAgMi4gUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHRcbiAgICAgICAgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyIGluIHRoZVxuICAgICAgICBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGUgZGlzdHJpYnV0aW9uLlxuXG4gICAgIDMuIFRoZSBuYW1lcyBvZiBpdHMgY29udHJpYnV0b3JzIG1heSBub3QgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGVcbiAgICAgICAgcHJvZHVjdHMgZGVyaXZlZCBmcm9tIHRoaXMgc29mdHdhcmUgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuXG4gICAgICAgIHBlcm1pc3Npb24uXG5cbiAgIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlNcbiAgIFwiQVMgSVNcIiBBTkQgQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1RcbiAgIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUlxuICAgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFIERJU0NMQUlNRUQuICBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUIE9XTkVSIE9SXG4gICBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCxcbiAgIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTyxcbiAgIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLCBEQVRBLCBPUlxuICAgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZIFRIRU9SWSBPRlxuICAgTElBQklMSVRZLCBXSEVUSEVSIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUIChJTkNMVURJTkdcbiAgIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKSBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0UgT0YgVEhJU1xuICAgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEUgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG5cblxuICAgQW55IGZlZWRiYWNrIGlzIHZlcnkgd2VsY29tZS5cbiAgIGh0dHA6Ly93d3cubWF0aC5zY2kuaGlyb3NoaW1hLXUuYWMuanAvfm0tbWF0L01UL2VtdC5odG1sXG4gICBlbWFpbDogbS1tYXQgQCBtYXRoLnNjaS5oaXJvc2hpbWEtdS5hYy5qcCAocmVtb3ZlIHNwYWNlKVxuKi9cblxudmFyIE1lcnNlbm5lVHdpc3RlciA9IGZ1bmN0aW9uKHNlZWQpIHtcblx0aWYgKHNlZWQgPT0gdW5kZWZpbmVkKSB7XG5cdFx0c2VlZCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXHR9XG5cblx0LyogUGVyaW9kIHBhcmFtZXRlcnMgKi9cblx0dGhpcy5OID0gNjI0O1xuXHR0aGlzLk0gPSAzOTc7XG5cdHRoaXMuTUFUUklYX0EgPSAweDk5MDhiMGRmOyAgIC8qIGNvbnN0YW50IHZlY3RvciBhICovXG5cdHRoaXMuVVBQRVJfTUFTSyA9IDB4ODAwMDAwMDA7IC8qIG1vc3Qgc2lnbmlmaWNhbnQgdy1yIGJpdHMgKi9cblx0dGhpcy5MT1dFUl9NQVNLID0gMHg3ZmZmZmZmZjsgLyogbGVhc3Qgc2lnbmlmaWNhbnQgciBiaXRzICovXG5cblx0dGhpcy5tdCA9IG5ldyBBcnJheSh0aGlzLk4pOyAvKiB0aGUgYXJyYXkgZm9yIHRoZSBzdGF0ZSB2ZWN0b3IgKi9cblx0dGhpcy5tdGk9dGhpcy5OKzE7IC8qIG10aT09TisxIG1lYW5zIG10W05dIGlzIG5vdCBpbml0aWFsaXplZCAqL1xuXG5cdGlmIChzZWVkLmNvbnN0cnVjdG9yID09IEFycmF5KSB7XG5cdFx0dGhpcy5pbml0X2J5X2FycmF5KHNlZWQsIHNlZWQubGVuZ3RoKTtcblx0fVxuXHRlbHNlIHtcblx0XHR0aGlzLmluaXRfc2VlZChzZWVkKTtcblx0fVxufVxuXG4vKiBpbml0aWFsaXplcyBtdFtOXSB3aXRoIGEgc2VlZCAqL1xuLyogb3JpZ2luIG5hbWUgaW5pdF9nZW5yYW5kICovXG5NZXJzZW5uZVR3aXN0ZXIucHJvdG90eXBlLmluaXRfc2VlZCA9IGZ1bmN0aW9uKHMpIHtcblx0dGhpcy5tdFswXSA9IHMgPj4+IDA7XG5cdGZvciAodGhpcy5tdGk9MTsgdGhpcy5tdGk8dGhpcy5OOyB0aGlzLm10aSsrKSB7XG5cdFx0dmFyIHMgPSB0aGlzLm10W3RoaXMubXRpLTFdIF4gKHRoaXMubXRbdGhpcy5tdGktMV0gPj4+IDMwKTtcblx0XHR0aGlzLm10W3RoaXMubXRpXSA9ICgoKCgocyAmIDB4ZmZmZjAwMDApID4+PiAxNikgKiAxODEyNDMzMjUzKSA8PCAxNikgKyAocyAmIDB4MDAwMGZmZmYpICogMTgxMjQzMzI1Mylcblx0XHQrIHRoaXMubXRpO1xuXHRcdC8qIFNlZSBLbnV0aCBUQU9DUCBWb2wyLiAzcmQgRWQuIFAuMTA2IGZvciBtdWx0aXBsaWVyLiAqL1xuXHRcdC8qIEluIHRoZSBwcmV2aW91cyB2ZXJzaW9ucywgTVNCcyBvZiB0aGUgc2VlZCBhZmZlY3QgICAqL1xuXHRcdC8qIG9ubHkgTVNCcyBvZiB0aGUgYXJyYXkgbXRbXS4gICAgICAgICAgICAgICAgICAgICAgICAqL1xuXHRcdC8qIDIwMDIvMDEvMDkgbW9kaWZpZWQgYnkgTWFrb3RvIE1hdHN1bW90byAgICAgICAgICAgICAqL1xuXHRcdHRoaXMubXRbdGhpcy5tdGldID4+Pj0gMDtcblx0XHQvKiBmb3IgPjMyIGJpdCBtYWNoaW5lcyAqL1xuXHR9XG59XG5cbi8qIGluaXRpYWxpemUgYnkgYW4gYXJyYXkgd2l0aCBhcnJheS1sZW5ndGggKi9cbi8qIGluaXRfa2V5IGlzIHRoZSBhcnJheSBmb3IgaW5pdGlhbGl6aW5nIGtleXMgKi9cbi8qIGtleV9sZW5ndGggaXMgaXRzIGxlbmd0aCAqL1xuLyogc2xpZ2h0IGNoYW5nZSBmb3IgQysrLCAyMDA0LzIvMjYgKi9cbk1lcnNlbm5lVHdpc3Rlci5wcm90b3R5cGUuaW5pdF9ieV9hcnJheSA9IGZ1bmN0aW9uKGluaXRfa2V5LCBrZXlfbGVuZ3RoKSB7XG5cdHZhciBpLCBqLCBrO1xuXHR0aGlzLmluaXRfc2VlZCgxOTY1MDIxOCk7XG5cdGk9MTsgaj0wO1xuXHRrID0gKHRoaXMuTj5rZXlfbGVuZ3RoID8gdGhpcy5OIDoga2V5X2xlbmd0aCk7XG5cdGZvciAoOyBrOyBrLS0pIHtcblx0XHR2YXIgcyA9IHRoaXMubXRbaS0xXSBeICh0aGlzLm10W2ktMV0gPj4+IDMwKVxuXHRcdHRoaXMubXRbaV0gPSAodGhpcy5tdFtpXSBeICgoKCgocyAmIDB4ZmZmZjAwMDApID4+PiAxNikgKiAxNjY0NTI1KSA8PCAxNikgKyAoKHMgJiAweDAwMDBmZmZmKSAqIDE2NjQ1MjUpKSlcblx0XHQrIGluaXRfa2V5W2pdICsgajsgLyogbm9uIGxpbmVhciAqL1xuXHRcdHRoaXMubXRbaV0gPj4+PSAwOyAvKiBmb3IgV09SRFNJWkUgPiAzMiBtYWNoaW5lcyAqL1xuXHRcdGkrKzsgaisrO1xuXHRcdGlmIChpPj10aGlzLk4pIHsgdGhpcy5tdFswXSA9IHRoaXMubXRbdGhpcy5OLTFdOyBpPTE7IH1cblx0XHRpZiAoaj49a2V5X2xlbmd0aCkgaj0wO1xuXHR9XG5cdGZvciAoaz10aGlzLk4tMTsgazsgay0tKSB7XG5cdFx0dmFyIHMgPSB0aGlzLm10W2ktMV0gXiAodGhpcy5tdFtpLTFdID4+PiAzMCk7XG5cdFx0dGhpcy5tdFtpXSA9ICh0aGlzLm10W2ldIF4gKCgoKChzICYgMHhmZmZmMDAwMCkgPj4+IDE2KSAqIDE1NjYwODM5NDEpIDw8IDE2KSArIChzICYgMHgwMDAwZmZmZikgKiAxNTY2MDgzOTQxKSlcblx0XHQtIGk7IC8qIG5vbiBsaW5lYXIgKi9cblx0XHR0aGlzLm10W2ldID4+Pj0gMDsgLyogZm9yIFdPUkRTSVpFID4gMzIgbWFjaGluZXMgKi9cblx0XHRpKys7XG5cdFx0aWYgKGk+PXRoaXMuTikgeyB0aGlzLm10WzBdID0gdGhpcy5tdFt0aGlzLk4tMV07IGk9MTsgfVxuXHR9XG5cblx0dGhpcy5tdFswXSA9IDB4ODAwMDAwMDA7IC8qIE1TQiBpcyAxOyBhc3N1cmluZyBub24temVybyBpbml0aWFsIGFycmF5ICovXG59XG5cbi8qIGdlbmVyYXRlcyBhIHJhbmRvbSBudW1iZXIgb24gWzAsMHhmZmZmZmZmZl0taW50ZXJ2YWwgKi9cbi8qIG9yaWdpbiBuYW1lIGdlbnJhbmRfaW50MzIgKi9cbk1lcnNlbm5lVHdpc3Rlci5wcm90b3R5cGUucmFuZG9tX2ludCA9IGZ1bmN0aW9uKCkge1xuXHR2YXIgeTtcblx0dmFyIG1hZzAxID0gbmV3IEFycmF5KDB4MCwgdGhpcy5NQVRSSVhfQSk7XG5cdC8qIG1hZzAxW3hdID0geCAqIE1BVFJJWF9BICBmb3IgeD0wLDEgKi9cblxuXHRpZiAodGhpcy5tdGkgPj0gdGhpcy5OKSB7IC8qIGdlbmVyYXRlIE4gd29yZHMgYXQgb25lIHRpbWUgKi9cblx0XHR2YXIga2s7XG5cblx0XHRpZiAodGhpcy5tdGkgPT0gdGhpcy5OKzEpICAvKiBpZiBpbml0X3NlZWQoKSBoYXMgbm90IGJlZW4gY2FsbGVkLCAqL1xuXHRcdFx0dGhpcy5pbml0X3NlZWQoNTQ4OSk7ICAvKiBhIGRlZmF1bHQgaW5pdGlhbCBzZWVkIGlzIHVzZWQgKi9cblxuXHRcdGZvciAoa2s9MDtrazx0aGlzLk4tdGhpcy5NO2trKyspIHtcblx0XHRcdHkgPSAodGhpcy5tdFtra10mdGhpcy5VUFBFUl9NQVNLKXwodGhpcy5tdFtraysxXSZ0aGlzLkxPV0VSX01BU0spO1xuXHRcdFx0dGhpcy5tdFtra10gPSB0aGlzLm10W2trK3RoaXMuTV0gXiAoeSA+Pj4gMSkgXiBtYWcwMVt5ICYgMHgxXTtcblx0XHR9XG5cdFx0Zm9yICg7a2s8dGhpcy5OLTE7a2srKykge1xuXHRcdFx0eSA9ICh0aGlzLm10W2trXSZ0aGlzLlVQUEVSX01BU0spfCh0aGlzLm10W2trKzFdJnRoaXMuTE9XRVJfTUFTSyk7XG5cdFx0XHR0aGlzLm10W2trXSA9IHRoaXMubXRba2srKHRoaXMuTS10aGlzLk4pXSBeICh5ID4+PiAxKSBeIG1hZzAxW3kgJiAweDFdO1xuXHRcdH1cblx0XHR5ID0gKHRoaXMubXRbdGhpcy5OLTFdJnRoaXMuVVBQRVJfTUFTSyl8KHRoaXMubXRbMF0mdGhpcy5MT1dFUl9NQVNLKTtcblx0XHR0aGlzLm10W3RoaXMuTi0xXSA9IHRoaXMubXRbdGhpcy5NLTFdIF4gKHkgPj4+IDEpIF4gbWFnMDFbeSAmIDB4MV07XG5cblx0XHR0aGlzLm10aSA9IDA7XG5cdH1cblxuXHR5ID0gdGhpcy5tdFt0aGlzLm10aSsrXTtcblxuXHQvKiBUZW1wZXJpbmcgKi9cblx0eSBePSAoeSA+Pj4gMTEpO1xuXHR5IF49ICh5IDw8IDcpICYgMHg5ZDJjNTY4MDtcblx0eSBePSAoeSA8PCAxNSkgJiAweGVmYzYwMDAwO1xuXHR5IF49ICh5ID4+PiAxOCk7XG5cblx0cmV0dXJuIHkgPj4+IDA7XG59XG5cbi8qIGdlbmVyYXRlcyBhIHJhbmRvbSBudW1iZXIgb24gWzAsMHg3ZmZmZmZmZl0taW50ZXJ2YWwgKi9cbi8qIG9yaWdpbiBuYW1lIGdlbnJhbmRfaW50MzEgKi9cbk1lcnNlbm5lVHdpc3Rlci5wcm90b3R5cGUucmFuZG9tX2ludDMxID0gZnVuY3Rpb24oKSB7XG5cdHJldHVybiAodGhpcy5yYW5kb21faW50KCk+Pj4xKTtcbn1cblxuLyogZ2VuZXJhdGVzIGEgcmFuZG9tIG51bWJlciBvbiBbMCwxXS1yZWFsLWludGVydmFsICovXG4vKiBvcmlnaW4gbmFtZSBnZW5yYW5kX3JlYWwxICovXG5NZXJzZW5uZVR3aXN0ZXIucHJvdG90eXBlLnJhbmRvbV9pbmNsID0gZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzLnJhbmRvbV9pbnQoKSooMS4wLzQyOTQ5NjcyOTUuMCk7XG5cdC8qIGRpdmlkZWQgYnkgMl4zMi0xICovXG59XG5cbi8qIGdlbmVyYXRlcyBhIHJhbmRvbSBudW1iZXIgb24gWzAsMSktcmVhbC1pbnRlcnZhbCAqL1xuTWVyc2VubmVUd2lzdGVyLnByb3RvdHlwZS5yYW5kb20gPSBmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXMucmFuZG9tX2ludCgpKigxLjAvNDI5NDk2NzI5Ni4wKTtcblx0LyogZGl2aWRlZCBieSAyXjMyICovXG59XG5cbi8qIGdlbmVyYXRlcyBhIHJhbmRvbSBudW1iZXIgb24gKDAsMSktcmVhbC1pbnRlcnZhbCAqL1xuLyogb3JpZ2luIG5hbWUgZ2VucmFuZF9yZWFsMyAqL1xuTWVyc2VubmVUd2lzdGVyLnByb3RvdHlwZS5yYW5kb21fZXhjbCA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gKHRoaXMucmFuZG9tX2ludCgpICsgMC41KSooMS4wLzQyOTQ5NjcyOTYuMCk7XG5cdC8qIGRpdmlkZWQgYnkgMl4zMiAqL1xufVxuXG4vKiBnZW5lcmF0ZXMgYSByYW5kb20gbnVtYmVyIG9uIFswLDEpIHdpdGggNTMtYml0IHJlc29sdXRpb24qL1xuLyogb3JpZ2luIG5hbWUgZ2VucmFuZF9yZXM1MyAqL1xuTWVyc2VubmVUd2lzdGVyLnByb3RvdHlwZS5yYW5kb21fbG9uZyA9IGZ1bmN0aW9uKCkge1xuXHR2YXIgYT10aGlzLnJhbmRvbV9pbnQoKT4+PjUsIGI9dGhpcy5yYW5kb21faW50KCk+Pj42O1xuXHRyZXR1cm4oYSo2NzEwODg2NC4wK2IpKigxLjAvOTAwNzE5OTI1NDc0MDk5Mi4wKTtcbn1cblxuLyogVGhlc2UgcmVhbCB2ZXJzaW9ucyBhcmUgZHVlIHRvIElzYWt1IFdhZGEsIDIwMDIvMDEvMDkgYWRkZWQgKi9cblxubW9kdWxlLmV4cG9ydHMgPSBNZXJzZW5uZVR3aXN0ZXI7XG4iLCIvKipcbiAqIENvbXBpbGVzIGEgcXVlcnlzdHJpbmdcbiAqIFJldHVybnMgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmV4cG9ydHMuZW5jb2RlID0gZnVuY3Rpb24gKG9iaikge1xuICB2YXIgc3RyID0gJyc7XG5cbiAgZm9yICh2YXIgaSBpbiBvYmopIHtcbiAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICBpZiAoc3RyLmxlbmd0aCkgc3RyICs9ICcmJztcbiAgICAgIHN0ciArPSBlbmNvZGVVUklDb21wb25lbnQoaSkgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQob2JqW2ldKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RyO1xufTtcblxuLyoqXG4gKiBQYXJzZXMgYSBzaW1wbGUgcXVlcnlzdHJpbmcgaW50byBhbiBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gcXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmV4cG9ydHMuZGVjb2RlID0gZnVuY3Rpb24ocXMpe1xuICB2YXIgcXJ5ID0ge307XG4gIHZhciBwYWlycyA9IHFzLnNwbGl0KCcmJyk7XG4gIGZvciAodmFyIGkgPSAwLCBsID0gcGFpcnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgdmFyIHBhaXIgPSBwYWlyc1tpXS5zcGxpdCgnPScpO1xuICAgIHFyeVtkZWNvZGVVUklDb21wb25lbnQocGFpclswXSldID0gZGVjb2RlVVJJQ29tcG9uZW50KHBhaXJbMV0pO1xuICB9XG4gIHJldHVybiBxcnk7XG59O1xuIiwiLyoqXG4gKiBQYXJzZXMgYW4gVVJJXG4gKlxuICogQGF1dGhvciBTdGV2ZW4gTGV2aXRoYW4gPHN0ZXZlbmxldml0aGFuLmNvbT4gKE1JVCBsaWNlbnNlKVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxudmFyIHJlID0gL14oPzooPyFbXjpAXSs6W146QFxcL10qQCkoaHR0cHxodHRwc3x3c3x3c3MpOlxcL1xcLyk/KCg/OigoW146QF0qKSg/OjooW146QF0qKSk/KT9AKT8oKD86W2EtZjAtOV17MCw0fTopezIsN31bYS1mMC05XXswLDR9fFteOlxcLz8jXSopKD86OihcXGQqKSk/KSgoKFxcLyg/OltePyNdKD8hW14/I1xcL10qXFwuW14/I1xcLy5dKyg/Ols/I118JCkpKSpcXC8/KT8oW14/I1xcL10qKSkoPzpcXD8oW14jXSopKT8oPzojKC4qKSk/KS87XG5cbnZhciBwYXJ0cyA9IFtcbiAgICAnc291cmNlJywgJ3Byb3RvY29sJywgJ2F1dGhvcml0eScsICd1c2VySW5mbycsICd1c2VyJywgJ3Bhc3N3b3JkJywgJ2hvc3QnLCAncG9ydCcsICdyZWxhdGl2ZScsICdwYXRoJywgJ2RpcmVjdG9yeScsICdmaWxlJywgJ3F1ZXJ5JywgJ2FuY2hvcidcbl07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcGFyc2V1cmkoc3RyKSB7XG4gICAgdmFyIHNyYyA9IHN0cixcbiAgICAgICAgYiA9IHN0ci5pbmRleE9mKCdbJyksXG4gICAgICAgIGUgPSBzdHIuaW5kZXhPZignXScpO1xuXG4gICAgaWYgKGIgIT0gLTEgJiYgZSAhPSAtMSkge1xuICAgICAgICBzdHIgPSBzdHIuc3Vic3RyaW5nKDAsIGIpICsgc3RyLnN1YnN0cmluZyhiLCBlKS5yZXBsYWNlKC86L2csICc7JykgKyBzdHIuc3Vic3RyaW5nKGUsIHN0ci5sZW5ndGgpO1xuICAgIH1cblxuICAgIHZhciBtID0gcmUuZXhlYyhzdHIgfHwgJycpLFxuICAgICAgICB1cmkgPSB7fSxcbiAgICAgICAgaSA9IDE0O1xuXG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgICB1cmlbcGFydHNbaV1dID0gbVtpXSB8fCAnJztcbiAgICB9XG5cbiAgICBpZiAoYiAhPSAtMSAmJiBlICE9IC0xKSB7XG4gICAgICAgIHVyaS5zb3VyY2UgPSBzcmM7XG4gICAgICAgIHVyaS5ob3N0ID0gdXJpLmhvc3Quc3Vic3RyaW5nKDEsIHVyaS5ob3N0Lmxlbmd0aCAtIDEpLnJlcGxhY2UoLzsvZywgJzonKTtcbiAgICAgICAgdXJpLmF1dGhvcml0eSA9IHVyaS5hdXRob3JpdHkucmVwbGFjZSgnWycsICcnKS5yZXBsYWNlKCddJywgJycpLnJlcGxhY2UoLzsvZywgJzonKTtcbiAgICAgICAgdXJpLmlwdjZ1cmkgPSB0cnVlO1xuICAgIH1cblxuICAgIHVyaS5wYXRoTmFtZXMgPSBwYXRoTmFtZXModXJpLCB1cmlbJ3BhdGgnXSk7XG4gICAgdXJpLnF1ZXJ5S2V5ID0gcXVlcnlLZXkodXJpLCB1cmlbJ3F1ZXJ5J10pO1xuXG4gICAgcmV0dXJuIHVyaTtcbn07XG5cbmZ1bmN0aW9uIHBhdGhOYW1lcyhvYmosIHBhdGgpIHtcbiAgICB2YXIgcmVneCA9IC9cXC97Miw5fS9nLFxuICAgICAgICBuYW1lcyA9IHBhdGgucmVwbGFjZShyZWd4LCBcIi9cIikuc3BsaXQoXCIvXCIpO1xuXG4gICAgaWYgKHBhdGguc3Vic3RyKDAsIDEpID09ICcvJyB8fCBwYXRoLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBuYW1lcy5zcGxpY2UoMCwgMSk7XG4gICAgfVxuICAgIGlmIChwYXRoLnN1YnN0cihwYXRoLmxlbmd0aCAtIDEsIDEpID09ICcvJykge1xuICAgICAgICBuYW1lcy5zcGxpY2UobmFtZXMubGVuZ3RoIC0gMSwgMSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5hbWVzO1xufVxuXG5mdW5jdGlvbiBxdWVyeUtleSh1cmksIHF1ZXJ5KSB7XG4gICAgdmFyIGRhdGEgPSB7fTtcblxuICAgIHF1ZXJ5LnJlcGxhY2UoLyg/Ol58JikoW14mPV0qKT0/KFteJl0qKS9nLCBmdW5jdGlvbiAoJDAsICQxLCAkMikge1xuICAgICAgICBpZiAoJDEpIHtcbiAgICAgICAgICAgIGRhdGFbJDFdID0gJDI7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBkYXRhO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmlvID0gZXhwb3J0cy5Tb2NrZXQgPSBleHBvcnRzLk1hbmFnZXIgPSBleHBvcnRzLnByb3RvY29sID0gdm9pZCAwO1xuY29uc3QgdXJsXzEgPSByZXF1aXJlKFwiLi91cmxcIik7XG5jb25zdCBtYW5hZ2VyXzEgPSByZXF1aXJlKFwiLi9tYW5hZ2VyXCIpO1xuY29uc3QgZGVidWcgPSByZXF1aXJlKFwiZGVidWdcIikoXCJzb2NrZXQuaW8tY2xpZW50XCIpO1xuLyoqXG4gKiBNb2R1bGUgZXhwb3J0cy5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gbG9va3VwO1xuLyoqXG4gKiBNYW5hZ2VycyBjYWNoZS5cbiAqL1xuY29uc3QgY2FjaGUgPSAoZXhwb3J0cy5tYW5hZ2VycyA9IHt9KTtcbmZ1bmN0aW9uIGxvb2t1cCh1cmksIG9wdHMpIHtcbiAgICBpZiAodHlwZW9mIHVyaSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICBvcHRzID0gdXJpO1xuICAgICAgICB1cmkgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIG9wdHMgPSBvcHRzIHx8IHt9O1xuICAgIGNvbnN0IHBhcnNlZCA9IHVybF8xLnVybCh1cmksIG9wdHMucGF0aCB8fCBcIi9zb2NrZXQuaW9cIik7XG4gICAgY29uc3Qgc291cmNlID0gcGFyc2VkLnNvdXJjZTtcbiAgICBjb25zdCBpZCA9IHBhcnNlZC5pZDtcbiAgICBjb25zdCBwYXRoID0gcGFyc2VkLnBhdGg7XG4gICAgY29uc3Qgc2FtZU5hbWVzcGFjZSA9IGNhY2hlW2lkXSAmJiBwYXRoIGluIGNhY2hlW2lkXVtcIm5zcHNcIl07XG4gICAgY29uc3QgbmV3Q29ubmVjdGlvbiA9IG9wdHMuZm9yY2VOZXcgfHxcbiAgICAgICAgb3B0c1tcImZvcmNlIG5ldyBjb25uZWN0aW9uXCJdIHx8XG4gICAgICAgIGZhbHNlID09PSBvcHRzLm11bHRpcGxleCB8fFxuICAgICAgICBzYW1lTmFtZXNwYWNlO1xuICAgIGxldCBpbztcbiAgICBpZiAobmV3Q29ubmVjdGlvbikge1xuICAgICAgICBkZWJ1ZyhcImlnbm9yaW5nIHNvY2tldCBjYWNoZSBmb3IgJXNcIiwgc291cmNlKTtcbiAgICAgICAgaW8gPSBuZXcgbWFuYWdlcl8xLk1hbmFnZXIoc291cmNlLCBvcHRzKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmICghY2FjaGVbaWRdKSB7XG4gICAgICAgICAgICBkZWJ1ZyhcIm5ldyBpbyBpbnN0YW5jZSBmb3IgJXNcIiwgc291cmNlKTtcbiAgICAgICAgICAgIGNhY2hlW2lkXSA9IG5ldyBtYW5hZ2VyXzEuTWFuYWdlcihzb3VyY2UsIG9wdHMpO1xuICAgICAgICB9XG4gICAgICAgIGlvID0gY2FjaGVbaWRdO1xuICAgIH1cbiAgICBpZiAocGFyc2VkLnF1ZXJ5ICYmICFvcHRzLnF1ZXJ5KSB7XG4gICAgICAgIG9wdHMucXVlcnkgPSBwYXJzZWQucXVlcnlLZXk7XG4gICAgfVxuICAgIHJldHVybiBpby5zb2NrZXQocGFyc2VkLnBhdGgsIG9wdHMpO1xufVxuZXhwb3J0cy5pbyA9IGxvb2t1cDtcbi8qKlxuICogUHJvdG9jb2wgdmVyc2lvbi5cbiAqXG4gKiBAcHVibGljXG4gKi9cbnZhciBzb2NrZXRfaW9fcGFyc2VyXzEgPSByZXF1aXJlKFwic29ja2V0LmlvLXBhcnNlclwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInByb3RvY29sXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzb2NrZXRfaW9fcGFyc2VyXzEucHJvdG9jb2w7IH0gfSk7XG4vKipcbiAqIGBjb25uZWN0YC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJpXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydHMuY29ubmVjdCA9IGxvb2t1cDtcbi8qKlxuICogRXhwb3NlIGNvbnN0cnVjdG9ycyBmb3Igc3RhbmRhbG9uZSBidWlsZC5cbiAqXG4gKiBAcHVibGljXG4gKi9cbnZhciBtYW5hZ2VyXzIgPSByZXF1aXJlKFwiLi9tYW5hZ2VyXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiTWFuYWdlclwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbWFuYWdlcl8yLk1hbmFnZXI7IH0gfSk7XG52YXIgc29ja2V0XzEgPSByZXF1aXJlKFwiLi9zb2NrZXRcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJTb2NrZXRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNvY2tldF8xLlNvY2tldDsgfSB9KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGxvb2t1cDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5NYW5hZ2VyID0gdm9pZCAwO1xuY29uc3QgZWlvID0gcmVxdWlyZShcImVuZ2luZS5pby1jbGllbnRcIik7XG5jb25zdCBzb2NrZXRfMSA9IHJlcXVpcmUoXCIuL3NvY2tldFwiKTtcbmNvbnN0IHBhcnNlciA9IHJlcXVpcmUoXCJzb2NrZXQuaW8tcGFyc2VyXCIpO1xuY29uc3Qgb25fMSA9IHJlcXVpcmUoXCIuL29uXCIpO1xuY29uc3QgQmFja29mZiA9IHJlcXVpcmUoXCJiYWNrbzJcIik7XG5jb25zdCB0eXBlZF9ldmVudHNfMSA9IHJlcXVpcmUoXCIuL3R5cGVkLWV2ZW50c1wiKTtcbmNvbnN0IGRlYnVnID0gcmVxdWlyZShcImRlYnVnXCIpKFwic29ja2V0LmlvLWNsaWVudDptYW5hZ2VyXCIpO1xuY2xhc3MgTWFuYWdlciBleHRlbmRzIHR5cGVkX2V2ZW50c18xLlN0cmljdEV2ZW50RW1pdHRlciB7XG4gICAgY29uc3RydWN0b3IodXJpLCBvcHRzKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubnNwcyA9IHt9O1xuICAgICAgICB0aGlzLnN1YnMgPSBbXTtcbiAgICAgICAgaWYgKHVyaSAmJiBcIm9iamVjdFwiID09PSB0eXBlb2YgdXJpKSB7XG4gICAgICAgICAgICBvcHRzID0gdXJpO1xuICAgICAgICAgICAgdXJpID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIG9wdHMgPSBvcHRzIHx8IHt9O1xuICAgICAgICBvcHRzLnBhdGggPSBvcHRzLnBhdGggfHwgXCIvc29ja2V0LmlvXCI7XG4gICAgICAgIHRoaXMub3B0cyA9IG9wdHM7XG4gICAgICAgIHRoaXMucmVjb25uZWN0aW9uKG9wdHMucmVjb25uZWN0aW9uICE9PSBmYWxzZSk7XG4gICAgICAgIHRoaXMucmVjb25uZWN0aW9uQXR0ZW1wdHMob3B0cy5yZWNvbm5lY3Rpb25BdHRlbXB0cyB8fCBJbmZpbml0eSk7XG4gICAgICAgIHRoaXMucmVjb25uZWN0aW9uRGVsYXkob3B0cy5yZWNvbm5lY3Rpb25EZWxheSB8fCAxMDAwKTtcbiAgICAgICAgdGhpcy5yZWNvbm5lY3Rpb25EZWxheU1heChvcHRzLnJlY29ubmVjdGlvbkRlbGF5TWF4IHx8IDUwMDApO1xuICAgICAgICB0aGlzLnJhbmRvbWl6YXRpb25GYWN0b3Iob3B0cy5yYW5kb21pemF0aW9uRmFjdG9yIHx8IDAuNSk7XG4gICAgICAgIHRoaXMuYmFja29mZiA9IG5ldyBCYWNrb2ZmKHtcbiAgICAgICAgICAgIG1pbjogdGhpcy5yZWNvbm5lY3Rpb25EZWxheSgpLFxuICAgICAgICAgICAgbWF4OiB0aGlzLnJlY29ubmVjdGlvbkRlbGF5TWF4KCksXG4gICAgICAgICAgICBqaXR0ZXI6IHRoaXMucmFuZG9taXphdGlvbkZhY3RvcigpLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy50aW1lb3V0KG51bGwgPT0gb3B0cy50aW1lb3V0ID8gMjAwMDAgOiBvcHRzLnRpbWVvdXQpO1xuICAgICAgICB0aGlzLl9yZWFkeVN0YXRlID0gXCJjbG9zZWRcIjtcbiAgICAgICAgdGhpcy51cmkgPSB1cmk7XG4gICAgICAgIGNvbnN0IF9wYXJzZXIgPSBvcHRzLnBhcnNlciB8fCBwYXJzZXI7XG4gICAgICAgIHRoaXMuZW5jb2RlciA9IG5ldyBfcGFyc2VyLkVuY29kZXIoKTtcbiAgICAgICAgdGhpcy5kZWNvZGVyID0gbmV3IF9wYXJzZXIuRGVjb2RlcigpO1xuICAgICAgICB0aGlzLl9hdXRvQ29ubmVjdCA9IG9wdHMuYXV0b0Nvbm5lY3QgIT09IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5fYXV0b0Nvbm5lY3QpXG4gICAgICAgICAgICB0aGlzLm9wZW4oKTtcbiAgICB9XG4gICAgcmVjb25uZWN0aW9uKHYpIHtcbiAgICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JlY29ubmVjdGlvbjtcbiAgICAgICAgdGhpcy5fcmVjb25uZWN0aW9uID0gISF2O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgcmVjb25uZWN0aW9uQXR0ZW1wdHModikge1xuICAgICAgICBpZiAodiA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JlY29ubmVjdGlvbkF0dGVtcHRzO1xuICAgICAgICB0aGlzLl9yZWNvbm5lY3Rpb25BdHRlbXB0cyA9IHY7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICByZWNvbm5lY3Rpb25EZWxheSh2KSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgaWYgKHYgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZWNvbm5lY3Rpb25EZWxheTtcbiAgICAgICAgdGhpcy5fcmVjb25uZWN0aW9uRGVsYXkgPSB2O1xuICAgICAgICAoX2EgPSB0aGlzLmJhY2tvZmYpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5zZXRNaW4odik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICByYW5kb21pemF0aW9uRmFjdG9yKHYpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBpZiAodiA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JhbmRvbWl6YXRpb25GYWN0b3I7XG4gICAgICAgIHRoaXMuX3JhbmRvbWl6YXRpb25GYWN0b3IgPSB2O1xuICAgICAgICAoX2EgPSB0aGlzLmJhY2tvZmYpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5zZXRKaXR0ZXIodik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICByZWNvbm5lY3Rpb25EZWxheU1heCh2KSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgaWYgKHYgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZWNvbm5lY3Rpb25EZWxheU1heDtcbiAgICAgICAgdGhpcy5fcmVjb25uZWN0aW9uRGVsYXlNYXggPSB2O1xuICAgICAgICAoX2EgPSB0aGlzLmJhY2tvZmYpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5zZXRNYXgodik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICB0aW1lb3V0KHYpIHtcbiAgICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RpbWVvdXQ7XG4gICAgICAgIHRoaXMuX3RpbWVvdXQgPSB2O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogU3RhcnRzIHRyeWluZyB0byByZWNvbm5lY3QgaWYgcmVjb25uZWN0aW9uIGlzIGVuYWJsZWQgYW5kIHdlIGhhdmUgbm90XG4gICAgICogc3RhcnRlZCByZWNvbm5lY3RpbmcgeWV0XG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIG1heWJlUmVjb25uZWN0T25PcGVuKCkge1xuICAgICAgICAvLyBPbmx5IHRyeSB0byByZWNvbm5lY3QgaWYgaXQncyB0aGUgZmlyc3QgdGltZSB3ZSdyZSBjb25uZWN0aW5nXG4gICAgICAgIGlmICghdGhpcy5fcmVjb25uZWN0aW5nICYmXG4gICAgICAgICAgICB0aGlzLl9yZWNvbm5lY3Rpb24gJiZcbiAgICAgICAgICAgIHRoaXMuYmFja29mZi5hdHRlbXB0cyA9PT0gMCkge1xuICAgICAgICAgICAgLy8ga2VlcHMgcmVjb25uZWN0aW9uIGZyb20gZmlyaW5nIHR3aWNlIGZvciB0aGUgc2FtZSByZWNvbm5lY3Rpb24gbG9vcFxuICAgICAgICAgICAgdGhpcy5yZWNvbm5lY3QoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBjdXJyZW50IHRyYW5zcG9ydCBgc29ja2V0YC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIC0gb3B0aW9uYWwsIGNhbGxiYWNrXG4gICAgICogQHJldHVybiBzZWxmXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIG9wZW4oZm4pIHtcbiAgICAgICAgZGVidWcoXCJyZWFkeVN0YXRlICVzXCIsIHRoaXMuX3JlYWR5U3RhdGUpO1xuICAgICAgICBpZiAofnRoaXMuX3JlYWR5U3RhdGUuaW5kZXhPZihcIm9wZW5cIikpXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgZGVidWcoXCJvcGVuaW5nICVzXCIsIHRoaXMudXJpKTtcbiAgICAgICAgdGhpcy5lbmdpbmUgPSBlaW8odGhpcy51cmksIHRoaXMub3B0cyk7XG4gICAgICAgIGNvbnN0IHNvY2tldCA9IHRoaXMuZW5naW5lO1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5fcmVhZHlTdGF0ZSA9IFwib3BlbmluZ1wiO1xuICAgICAgICB0aGlzLnNraXBSZWNvbm5lY3QgPSBmYWxzZTtcbiAgICAgICAgLy8gZW1pdCBgb3BlbmBcbiAgICAgICAgY29uc3Qgb3BlblN1YkRlc3Ryb3kgPSBvbl8xLm9uKHNvY2tldCwgXCJvcGVuXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNlbGYub25vcGVuKCk7XG4gICAgICAgICAgICBmbiAmJiBmbigpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gZW1pdCBgZXJyb3JgXG4gICAgICAgIGNvbnN0IGVycm9yU3ViID0gb25fMS5vbihzb2NrZXQsIFwiZXJyb3JcIiwgKGVycikgPT4ge1xuICAgICAgICAgICAgZGVidWcoXCJlcnJvclwiKTtcbiAgICAgICAgICAgIHNlbGYuY2xlYW51cCgpO1xuICAgICAgICAgICAgc2VsZi5fcmVhZHlTdGF0ZSA9IFwiY2xvc2VkXCI7XG4gICAgICAgICAgICB0aGlzLmVtaXRSZXNlcnZlZChcImVycm9yXCIsIGVycik7XG4gICAgICAgICAgICBpZiAoZm4pIHtcbiAgICAgICAgICAgICAgICBmbihlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gT25seSBkbyB0aGlzIGlmIHRoZXJlIGlzIG5vIGZuIHRvIGhhbmRsZSB0aGUgZXJyb3JcbiAgICAgICAgICAgICAgICBzZWxmLm1heWJlUmVjb25uZWN0T25PcGVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoZmFsc2UgIT09IHRoaXMuX3RpbWVvdXQpIHtcbiAgICAgICAgICAgIGNvbnN0IHRpbWVvdXQgPSB0aGlzLl90aW1lb3V0O1xuICAgICAgICAgICAgZGVidWcoXCJjb25uZWN0IGF0dGVtcHQgd2lsbCB0aW1lb3V0IGFmdGVyICVkXCIsIHRpbWVvdXQpO1xuICAgICAgICAgICAgaWYgKHRpbWVvdXQgPT09IDApIHtcbiAgICAgICAgICAgICAgICBvcGVuU3ViRGVzdHJveSgpOyAvLyBwcmV2ZW50cyBhIHJhY2UgY29uZGl0aW9uIHdpdGggdGhlICdvcGVuJyBldmVudFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gc2V0IHRpbWVyXG4gICAgICAgICAgICBjb25zdCB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGRlYnVnKFwiY29ubmVjdCBhdHRlbXB0IHRpbWVkIG91dCBhZnRlciAlZFwiLCB0aW1lb3V0KTtcbiAgICAgICAgICAgICAgICBvcGVuU3ViRGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIHNvY2tldC5jbG9zZSgpO1xuICAgICAgICAgICAgICAgIHNvY2tldC5lbWl0KFwiZXJyb3JcIiwgbmV3IEVycm9yKFwidGltZW91dFwiKSk7XG4gICAgICAgICAgICB9LCB0aW1lb3V0KTtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdHMuYXV0b1VucmVmKSB7XG4gICAgICAgICAgICAgICAgdGltZXIudW5yZWYoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc3Vicy5wdXNoKGZ1bmN0aW9uIHN1YkRlc3Ryb3koKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3Vicy5wdXNoKG9wZW5TdWJEZXN0cm95KTtcbiAgICAgICAgdGhpcy5zdWJzLnB1c2goZXJyb3JTdWIpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWxpYXMgZm9yIG9wZW4oKVxuICAgICAqXG4gICAgICogQHJldHVybiBzZWxmXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIGNvbm5lY3QoZm4pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3Blbihmbik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxlZCB1cG9uIHRyYW5zcG9ydCBvcGVuLlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBvbm9wZW4oKSB7XG4gICAgICAgIGRlYnVnKFwib3BlblwiKTtcbiAgICAgICAgLy8gY2xlYXIgb2xkIHN1YnNcbiAgICAgICAgdGhpcy5jbGVhbnVwKCk7XG4gICAgICAgIC8vIG1hcmsgYXMgb3BlblxuICAgICAgICB0aGlzLl9yZWFkeVN0YXRlID0gXCJvcGVuXCI7XG4gICAgICAgIHRoaXMuZW1pdFJlc2VydmVkKFwib3BlblwiKTtcbiAgICAgICAgLy8gYWRkIG5ldyBzdWJzXG4gICAgICAgIGNvbnN0IHNvY2tldCA9IHRoaXMuZW5naW5lO1xuICAgICAgICB0aGlzLnN1YnMucHVzaChvbl8xLm9uKHNvY2tldCwgXCJwaW5nXCIsIHRoaXMub25waW5nLmJpbmQodGhpcykpLCBvbl8xLm9uKHNvY2tldCwgXCJkYXRhXCIsIHRoaXMub25kYXRhLmJpbmQodGhpcykpLCBvbl8xLm9uKHNvY2tldCwgXCJlcnJvclwiLCB0aGlzLm9uZXJyb3IuYmluZCh0aGlzKSksIG9uXzEub24oc29ja2V0LCBcImNsb3NlXCIsIHRoaXMub25jbG9zZS5iaW5kKHRoaXMpKSwgb25fMS5vbih0aGlzLmRlY29kZXIsIFwiZGVjb2RlZFwiLCB0aGlzLm9uZGVjb2RlZC5iaW5kKHRoaXMpKSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxlZCB1cG9uIGEgcGluZy5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgb25waW5nKCkge1xuICAgICAgICB0aGlzLmVtaXRSZXNlcnZlZChcInBpbmdcIik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxlZCB3aXRoIGRhdGEuXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIG9uZGF0YShkYXRhKSB7XG4gICAgICAgIHRoaXMuZGVjb2Rlci5hZGQoZGF0YSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxlZCB3aGVuIHBhcnNlciBmdWxseSBkZWNvZGVzIGEgcGFja2V0LlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBvbmRlY29kZWQocGFja2V0KSB7XG4gICAgICAgIHRoaXMuZW1pdFJlc2VydmVkKFwicGFja2V0XCIsIHBhY2tldCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxlZCB1cG9uIHNvY2tldCBlcnJvci5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgb25lcnJvcihlcnIpIHtcbiAgICAgICAgZGVidWcoXCJlcnJvclwiLCBlcnIpO1xuICAgICAgICB0aGlzLmVtaXRSZXNlcnZlZChcImVycm9yXCIsIGVycik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgc29ja2V0IGZvciB0aGUgZ2l2ZW4gYG5zcGAuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtTb2NrZXR9XG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIHNvY2tldChuc3AsIG9wdHMpIHtcbiAgICAgICAgbGV0IHNvY2tldCA9IHRoaXMubnNwc1tuc3BdO1xuICAgICAgICBpZiAoIXNvY2tldCkge1xuICAgICAgICAgICAgc29ja2V0ID0gbmV3IHNvY2tldF8xLlNvY2tldCh0aGlzLCBuc3AsIG9wdHMpO1xuICAgICAgICAgICAgdGhpcy5uc3BzW25zcF0gPSBzb2NrZXQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNvY2tldDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHVwb24gYSBzb2NrZXQgY2xvc2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc29ja2V0XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfZGVzdHJveShzb2NrZXQpIHtcbiAgICAgICAgY29uc3QgbnNwcyA9IE9iamVjdC5rZXlzKHRoaXMubnNwcyk7XG4gICAgICAgIGZvciAoY29uc3QgbnNwIG9mIG5zcHMpIHtcbiAgICAgICAgICAgIGNvbnN0IHNvY2tldCA9IHRoaXMubnNwc1tuc3BdO1xuICAgICAgICAgICAgaWYgKHNvY2tldC5hY3RpdmUpIHtcbiAgICAgICAgICAgICAgICBkZWJ1ZyhcInNvY2tldCAlcyBpcyBzdGlsbCBhY3RpdmUsIHNraXBwaW5nIGNsb3NlXCIsIG5zcCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2Nsb3NlKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFdyaXRlcyBhIHBhY2tldC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBwYWNrZXRcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9wYWNrZXQocGFja2V0KSB7XG4gICAgICAgIGRlYnVnKFwid3JpdGluZyBwYWNrZXQgJWpcIiwgcGFja2V0KTtcbiAgICAgICAgY29uc3QgZW5jb2RlZFBhY2tldHMgPSB0aGlzLmVuY29kZXIuZW5jb2RlKHBhY2tldCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZW5jb2RlZFBhY2tldHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLndyaXRlKGVuY29kZWRQYWNrZXRzW2ldLCBwYWNrZXQub3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2xlYW4gdXAgdHJhbnNwb3J0IHN1YnNjcmlwdGlvbnMgYW5kIHBhY2tldCBidWZmZXIuXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGNsZWFudXAoKSB7XG4gICAgICAgIGRlYnVnKFwiY2xlYW51cFwiKTtcbiAgICAgICAgdGhpcy5zdWJzLmZvckVhY2goKHN1YkRlc3Ryb3kpID0+IHN1YkRlc3Ryb3koKSk7XG4gICAgICAgIHRoaXMuc3Vicy5sZW5ndGggPSAwO1xuICAgICAgICB0aGlzLmRlY29kZXIuZGVzdHJveSgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDbG9zZSB0aGUgY3VycmVudCBzb2NrZXQuXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9jbG9zZSgpIHtcbiAgICAgICAgZGVidWcoXCJkaXNjb25uZWN0XCIpO1xuICAgICAgICB0aGlzLnNraXBSZWNvbm5lY3QgPSB0cnVlO1xuICAgICAgICB0aGlzLl9yZWNvbm5lY3RpbmcgPSBmYWxzZTtcbiAgICAgICAgaWYgKFwib3BlbmluZ1wiID09PSB0aGlzLl9yZWFkeVN0YXRlKSB7XG4gICAgICAgICAgICAvLyBgb25jbG9zZWAgd2lsbCBub3QgZmlyZSBiZWNhdXNlXG4gICAgICAgICAgICAvLyBhbiBvcGVuIGV2ZW50IG5ldmVyIGhhcHBlbmVkXG4gICAgICAgICAgICB0aGlzLmNsZWFudXAoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJhY2tvZmYucmVzZXQoKTtcbiAgICAgICAgdGhpcy5fcmVhZHlTdGF0ZSA9IFwiY2xvc2VkXCI7XG4gICAgICAgIGlmICh0aGlzLmVuZ2luZSlcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLmNsb3NlKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFsaWFzIGZvciBjbG9zZSgpXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGRpc2Nvbm5lY3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jbG9zZSgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgdXBvbiBlbmdpbmUgY2xvc2UuXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIG9uY2xvc2UocmVhc29uKSB7XG4gICAgICAgIGRlYnVnKFwib25jbG9zZVwiKTtcbiAgICAgICAgdGhpcy5jbGVhbnVwKCk7XG4gICAgICAgIHRoaXMuYmFja29mZi5yZXNldCgpO1xuICAgICAgICB0aGlzLl9yZWFkeVN0YXRlID0gXCJjbG9zZWRcIjtcbiAgICAgICAgdGhpcy5lbWl0UmVzZXJ2ZWQoXCJjbG9zZVwiLCByZWFzb24pO1xuICAgICAgICBpZiAodGhpcy5fcmVjb25uZWN0aW9uICYmICF0aGlzLnNraXBSZWNvbm5lY3QpIHtcbiAgICAgICAgICAgIHRoaXMucmVjb25uZWN0KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQXR0ZW1wdCBhIHJlY29ubmVjdGlvbi5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgcmVjb25uZWN0KCkge1xuICAgICAgICBpZiAodGhpcy5fcmVjb25uZWN0aW5nIHx8IHRoaXMuc2tpcFJlY29ubmVjdClcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMuYmFja29mZi5hdHRlbXB0cyA+PSB0aGlzLl9yZWNvbm5lY3Rpb25BdHRlbXB0cykge1xuICAgICAgICAgICAgZGVidWcoXCJyZWNvbm5lY3QgZmFpbGVkXCIpO1xuICAgICAgICAgICAgdGhpcy5iYWNrb2ZmLnJlc2V0KCk7XG4gICAgICAgICAgICB0aGlzLmVtaXRSZXNlcnZlZChcInJlY29ubmVjdF9mYWlsZWRcIik7XG4gICAgICAgICAgICB0aGlzLl9yZWNvbm5lY3RpbmcgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGRlbGF5ID0gdGhpcy5iYWNrb2ZmLmR1cmF0aW9uKCk7XG4gICAgICAgICAgICBkZWJ1ZyhcIndpbGwgd2FpdCAlZG1zIGJlZm9yZSByZWNvbm5lY3QgYXR0ZW1wdFwiLCBkZWxheSk7XG4gICAgICAgICAgICB0aGlzLl9yZWNvbm5lY3RpbmcgPSB0cnVlO1xuICAgICAgICAgICAgY29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5za2lwUmVjb25uZWN0KVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgZGVidWcoXCJhdHRlbXB0aW5nIHJlY29ubmVjdFwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXRSZXNlcnZlZChcInJlY29ubmVjdF9hdHRlbXB0XCIsIHNlbGYuYmFja29mZi5hdHRlbXB0cyk7XG4gICAgICAgICAgICAgICAgLy8gY2hlY2sgYWdhaW4gZm9yIHRoZSBjYXNlIHNvY2tldCBjbG9zZWQgaW4gYWJvdmUgZXZlbnRzXG4gICAgICAgICAgICAgICAgaWYgKHNlbGYuc2tpcFJlY29ubmVjdClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIHNlbGYub3BlbigoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlYnVnKFwicmVjb25uZWN0IGF0dGVtcHQgZXJyb3JcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLl9yZWNvbm5lY3RpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucmVjb25uZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXRSZXNlcnZlZChcInJlY29ubmVjdF9lcnJvclwiLCBlcnIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVidWcoXCJyZWNvbm5lY3Qgc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYub25yZWNvbm5lY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSwgZGVsYXkpO1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0cy5hdXRvVW5yZWYpIHtcbiAgICAgICAgICAgICAgICB0aW1lci51bnJlZigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zdWJzLnB1c2goZnVuY3Rpb24gc3ViRGVzdHJveSgpIHtcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHVwb24gc3VjY2Vzc2Z1bCByZWNvbm5lY3QuXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIG9ucmVjb25uZWN0KCkge1xuICAgICAgICBjb25zdCBhdHRlbXB0ID0gdGhpcy5iYWNrb2ZmLmF0dGVtcHRzO1xuICAgICAgICB0aGlzLl9yZWNvbm5lY3RpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5iYWNrb2ZmLnJlc2V0KCk7XG4gICAgICAgIHRoaXMuZW1pdFJlc2VydmVkKFwicmVjb25uZWN0XCIsIGF0dGVtcHQpO1xuICAgIH1cbn1cbmV4cG9ydHMuTWFuYWdlciA9IE1hbmFnZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMub24gPSB2b2lkIDA7XG5mdW5jdGlvbiBvbihvYmosIGV2LCBmbikge1xuICAgIG9iai5vbihldiwgZm4pO1xuICAgIHJldHVybiBmdW5jdGlvbiBzdWJEZXN0cm95KCkge1xuICAgICAgICBvYmoub2ZmKGV2LCBmbik7XG4gICAgfTtcbn1cbmV4cG9ydHMub24gPSBvbjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Tb2NrZXQgPSB2b2lkIDA7XG5jb25zdCBzb2NrZXRfaW9fcGFyc2VyXzEgPSByZXF1aXJlKFwic29ja2V0LmlvLXBhcnNlclwiKTtcbmNvbnN0IG9uXzEgPSByZXF1aXJlKFwiLi9vblwiKTtcbmNvbnN0IHR5cGVkX2V2ZW50c18xID0gcmVxdWlyZShcIi4vdHlwZWQtZXZlbnRzXCIpO1xuY29uc3QgZGVidWcgPSByZXF1aXJlKFwiZGVidWdcIikoXCJzb2NrZXQuaW8tY2xpZW50OnNvY2tldFwiKTtcbi8qKlxuICogSW50ZXJuYWwgZXZlbnRzLlxuICogVGhlc2UgZXZlbnRzIGNhbid0IGJlIGVtaXR0ZWQgYnkgdGhlIHVzZXIuXG4gKi9cbmNvbnN0IFJFU0VSVkVEX0VWRU5UUyA9IE9iamVjdC5mcmVlemUoe1xuICAgIGNvbm5lY3Q6IDEsXG4gICAgY29ubmVjdF9lcnJvcjogMSxcbiAgICBkaXNjb25uZWN0OiAxLFxuICAgIGRpc2Nvbm5lY3Rpbmc6IDEsXG4gICAgLy8gRXZlbnRFbWl0dGVyIHJlc2VydmVkIGV2ZW50czogaHR0cHM6Ly9ub2RlanMub3JnL2FwaS9ldmVudHMuaHRtbCNldmVudHNfZXZlbnRfbmV3bGlzdGVuZXJcbiAgICBuZXdMaXN0ZW5lcjogMSxcbiAgICByZW1vdmVMaXN0ZW5lcjogMSxcbn0pO1xuY2xhc3MgU29ja2V0IGV4dGVuZHMgdHlwZWRfZXZlbnRzXzEuU3RyaWN0RXZlbnRFbWl0dGVyIHtcbiAgICAvKipcbiAgICAgKiBgU29ja2V0YCBjb25zdHJ1Y3Rvci5cbiAgICAgKlxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihpbywgbnNwLCBvcHRzKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMucmVjZWl2ZUJ1ZmZlciA9IFtdO1xuICAgICAgICB0aGlzLnNlbmRCdWZmZXIgPSBbXTtcbiAgICAgICAgdGhpcy5pZHMgPSAwO1xuICAgICAgICB0aGlzLmFja3MgPSB7fTtcbiAgICAgICAgdGhpcy5mbGFncyA9IHt9O1xuICAgICAgICB0aGlzLmlvID0gaW87XG4gICAgICAgIHRoaXMubnNwID0gbnNwO1xuICAgICAgICB0aGlzLmlkcyA9IDA7XG4gICAgICAgIHRoaXMuYWNrcyA9IHt9O1xuICAgICAgICB0aGlzLnJlY2VpdmVCdWZmZXIgPSBbXTtcbiAgICAgICAgdGhpcy5zZW5kQnVmZmVyID0gW107XG4gICAgICAgIHRoaXMuY29ubmVjdGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZGlzY29ubmVjdGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5mbGFncyA9IHt9O1xuICAgICAgICBpZiAob3B0cyAmJiBvcHRzLmF1dGgpIHtcbiAgICAgICAgICAgIHRoaXMuYXV0aCA9IG9wdHMuYXV0aDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pby5fYXV0b0Nvbm5lY3QpXG4gICAgICAgICAgICB0aGlzLm9wZW4oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU3Vic2NyaWJlIHRvIG9wZW4sIGNsb3NlIGFuZCBwYWNrZXQgZXZlbnRzXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHN1YkV2ZW50cygpIHtcbiAgICAgICAgaWYgKHRoaXMuc3VicylcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgY29uc3QgaW8gPSB0aGlzLmlvO1xuICAgICAgICB0aGlzLnN1YnMgPSBbXG4gICAgICAgICAgICBvbl8xLm9uKGlvLCBcIm9wZW5cIiwgdGhpcy5vbm9wZW4uYmluZCh0aGlzKSksXG4gICAgICAgICAgICBvbl8xLm9uKGlvLCBcInBhY2tldFwiLCB0aGlzLm9ucGFja2V0LmJpbmQodGhpcykpLFxuICAgICAgICAgICAgb25fMS5vbihpbywgXCJlcnJvclwiLCB0aGlzLm9uZXJyb3IuYmluZCh0aGlzKSksXG4gICAgICAgICAgICBvbl8xLm9uKGlvLCBcImNsb3NlXCIsIHRoaXMub25jbG9zZS5iaW5kKHRoaXMpKSxcbiAgICAgICAgXTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogV2hldGhlciB0aGUgU29ja2V0IHdpbGwgdHJ5IHRvIHJlY29ubmVjdCB3aGVuIGl0cyBNYW5hZ2VyIGNvbm5lY3RzIG9yIHJlY29ubmVjdHNcbiAgICAgKi9cbiAgICBnZXQgYWN0aXZlKCkge1xuICAgICAgICByZXR1cm4gISF0aGlzLnN1YnM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFwiT3BlbnNcIiB0aGUgc29ja2V0LlxuICAgICAqXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbm5lY3RlZClcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB0aGlzLnN1YkV2ZW50cygpO1xuICAgICAgICBpZiAoIXRoaXMuaW9bXCJfcmVjb25uZWN0aW5nXCJdKVxuICAgICAgICAgICAgdGhpcy5pby5vcGVuKCk7IC8vIGVuc3VyZSBvcGVuXG4gICAgICAgIGlmIChcIm9wZW5cIiA9PT0gdGhpcy5pby5fcmVhZHlTdGF0ZSlcbiAgICAgICAgICAgIHRoaXMub25vcGVuKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBbGlhcyBmb3IgY29ubmVjdCgpXG4gICAgICovXG4gICAgb3BlbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29ubmVjdCgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZW5kcyBhIGBtZXNzYWdlYCBldmVudC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4gc2VsZlxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBzZW5kKC4uLmFyZ3MpIHtcbiAgICAgICAgYXJncy51bnNoaWZ0KFwibWVzc2FnZVwiKTtcbiAgICAgICAgdGhpcy5lbWl0LmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogT3ZlcnJpZGUgYGVtaXRgLlxuICAgICAqIElmIHRoZSBldmVudCBpcyBpbiBgZXZlbnRzYCwgaXQncyBlbWl0dGVkIG5vcm1hbGx5LlxuICAgICAqXG4gICAgICogQHJldHVybiBzZWxmXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIGVtaXQoZXYsIC4uLmFyZ3MpIHtcbiAgICAgICAgaWYgKFJFU0VSVkVEX0VWRU5UUy5oYXNPd25Qcm9wZXJ0eShldikpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignXCInICsgZXYgKyAnXCIgaXMgYSByZXNlcnZlZCBldmVudCBuYW1lJyk7XG4gICAgICAgIH1cbiAgICAgICAgYXJncy51bnNoaWZ0KGV2KTtcbiAgICAgICAgY29uc3QgcGFja2V0ID0ge1xuICAgICAgICAgICAgdHlwZTogc29ja2V0X2lvX3BhcnNlcl8xLlBhY2tldFR5cGUuRVZFTlQsXG4gICAgICAgICAgICBkYXRhOiBhcmdzLFxuICAgICAgICB9O1xuICAgICAgICBwYWNrZXQub3B0aW9ucyA9IHt9O1xuICAgICAgICBwYWNrZXQub3B0aW9ucy5jb21wcmVzcyA9IHRoaXMuZmxhZ3MuY29tcHJlc3MgIT09IGZhbHNlO1xuICAgICAgICAvLyBldmVudCBhY2sgY2FsbGJhY2tcbiAgICAgICAgaWYgKFwiZnVuY3Rpb25cIiA9PT0gdHlwZW9mIGFyZ3NbYXJncy5sZW5ndGggLSAxXSkge1xuICAgICAgICAgICAgZGVidWcoXCJlbWl0dGluZyBwYWNrZXQgd2l0aCBhY2sgaWQgJWRcIiwgdGhpcy5pZHMpO1xuICAgICAgICAgICAgdGhpcy5hY2tzW3RoaXMuaWRzXSA9IGFyZ3MucG9wKCk7XG4gICAgICAgICAgICBwYWNrZXQuaWQgPSB0aGlzLmlkcysrO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGlzVHJhbnNwb3J0V3JpdGFibGUgPSB0aGlzLmlvLmVuZ2luZSAmJlxuICAgICAgICAgICAgdGhpcy5pby5lbmdpbmUudHJhbnNwb3J0ICYmXG4gICAgICAgICAgICB0aGlzLmlvLmVuZ2luZS50cmFuc3BvcnQud3JpdGFibGU7XG4gICAgICAgIGNvbnN0IGRpc2NhcmRQYWNrZXQgPSB0aGlzLmZsYWdzLnZvbGF0aWxlICYmICghaXNUcmFuc3BvcnRXcml0YWJsZSB8fCAhdGhpcy5jb25uZWN0ZWQpO1xuICAgICAgICBpZiAoZGlzY2FyZFBhY2tldCkge1xuICAgICAgICAgICAgZGVidWcoXCJkaXNjYXJkIHBhY2tldCBhcyB0aGUgdHJhbnNwb3J0IGlzIG5vdCBjdXJyZW50bHkgd3JpdGFibGVcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5jb25uZWN0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMucGFja2V0KHBhY2tldCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNlbmRCdWZmZXIucHVzaChwYWNrZXQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZmxhZ3MgPSB7fTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNlbmRzIGEgcGFja2V0LlxuICAgICAqXG4gICAgICogQHBhcmFtIHBhY2tldFxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgcGFja2V0KHBhY2tldCkge1xuICAgICAgICBwYWNrZXQubnNwID0gdGhpcy5uc3A7XG4gICAgICAgIHRoaXMuaW8uX3BhY2tldChwYWNrZXQpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgdXBvbiBlbmdpbmUgYG9wZW5gLlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBvbm9wZW4oKSB7XG4gICAgICAgIGRlYnVnKFwidHJhbnNwb3J0IGlzIG9wZW4gLSBjb25uZWN0aW5nXCIpO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuYXV0aCA9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHRoaXMuYXV0aCgoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucGFja2V0KHsgdHlwZTogc29ja2V0X2lvX3BhcnNlcl8xLlBhY2tldFR5cGUuQ09OTkVDVCwgZGF0YSB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wYWNrZXQoeyB0eXBlOiBzb2NrZXRfaW9fcGFyc2VyXzEuUGFja2V0VHlwZS5DT05ORUNULCBkYXRhOiB0aGlzLmF1dGggfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHVwb24gZW5naW5lIG9yIG1hbmFnZXIgYGVycm9yYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBlcnJcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIG9uZXJyb3IoZXJyKSB7XG4gICAgICAgIGlmICghdGhpcy5jb25uZWN0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZW1pdFJlc2VydmVkKFwiY29ubmVjdF9lcnJvclwiLCBlcnIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxlZCB1cG9uIGVuZ2luZSBgY2xvc2VgLlxuICAgICAqXG4gICAgICogQHBhcmFtIHJlYXNvblxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgb25jbG9zZShyZWFzb24pIHtcbiAgICAgICAgZGVidWcoXCJjbG9zZSAoJXMpXCIsIHJlYXNvbik7XG4gICAgICAgIHRoaXMuY29ubmVjdGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZGlzY29ubmVjdGVkID0gdHJ1ZTtcbiAgICAgICAgZGVsZXRlIHRoaXMuaWQ7XG4gICAgICAgIHRoaXMuZW1pdFJlc2VydmVkKFwiZGlzY29ubmVjdFwiLCByZWFzb24pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgd2l0aCBzb2NrZXQgcGFja2V0LlxuICAgICAqXG4gICAgICogQHBhcmFtIHBhY2tldFxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgb25wYWNrZXQocGFja2V0KSB7XG4gICAgICAgIGNvbnN0IHNhbWVOYW1lc3BhY2UgPSBwYWNrZXQubnNwID09PSB0aGlzLm5zcDtcbiAgICAgICAgaWYgKCFzYW1lTmFtZXNwYWNlKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBzd2l0Y2ggKHBhY2tldC50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIHNvY2tldF9pb19wYXJzZXJfMS5QYWNrZXRUeXBlLkNPTk5FQ1Q6XG4gICAgICAgICAgICAgICAgaWYgKHBhY2tldC5kYXRhICYmIHBhY2tldC5kYXRhLnNpZCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpZCA9IHBhY2tldC5kYXRhLnNpZDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbmNvbm5lY3QoaWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0UmVzZXJ2ZWQoXCJjb25uZWN0X2Vycm9yXCIsIG5ldyBFcnJvcihcIkl0IHNlZW1zIHlvdSBhcmUgdHJ5aW5nIHRvIHJlYWNoIGEgU29ja2V0LklPIHNlcnZlciBpbiB2Mi54IHdpdGggYSB2My54IGNsaWVudCwgYnV0IHRoZXkgYXJlIG5vdCBjb21wYXRpYmxlIChtb3JlIGluZm9ybWF0aW9uIGhlcmU6IGh0dHBzOi8vc29ja2V0LmlvL2RvY3MvdjMvbWlncmF0aW5nLWZyb20tMi14LXRvLTMtMC8pXCIpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHNvY2tldF9pb19wYXJzZXJfMS5QYWNrZXRUeXBlLkVWRU5UOlxuICAgICAgICAgICAgICAgIHRoaXMub25ldmVudChwYWNrZXQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBzb2NrZXRfaW9fcGFyc2VyXzEuUGFja2V0VHlwZS5CSU5BUllfRVZFTlQ6XG4gICAgICAgICAgICAgICAgdGhpcy5vbmV2ZW50KHBhY2tldCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHNvY2tldF9pb19wYXJzZXJfMS5QYWNrZXRUeXBlLkFDSzpcbiAgICAgICAgICAgICAgICB0aGlzLm9uYWNrKHBhY2tldCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHNvY2tldF9pb19wYXJzZXJfMS5QYWNrZXRUeXBlLkJJTkFSWV9BQ0s6XG4gICAgICAgICAgICAgICAgdGhpcy5vbmFjayhwYWNrZXQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBzb2NrZXRfaW9fcGFyc2VyXzEuUGFja2V0VHlwZS5ESVNDT05ORUNUOlxuICAgICAgICAgICAgICAgIHRoaXMub25kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHNvY2tldF9pb19wYXJzZXJfMS5QYWNrZXRUeXBlLkNPTk5FQ1RfRVJST1I6XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyID0gbmV3IEVycm9yKHBhY2tldC5kYXRhLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICBlcnIuZGF0YSA9IHBhY2tldC5kYXRhLmRhdGE7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0UmVzZXJ2ZWQoXCJjb25uZWN0X2Vycm9yXCIsIGVycik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHVwb24gYSBzZXJ2ZXIgZXZlbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcGFja2V0XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBvbmV2ZW50KHBhY2tldCkge1xuICAgICAgICBjb25zdCBhcmdzID0gcGFja2V0LmRhdGEgfHwgW107XG4gICAgICAgIGRlYnVnKFwiZW1pdHRpbmcgZXZlbnQgJWpcIiwgYXJncyk7XG4gICAgICAgIGlmIChudWxsICE9IHBhY2tldC5pZCkge1xuICAgICAgICAgICAgZGVidWcoXCJhdHRhY2hpbmcgYWNrIGNhbGxiYWNrIHRvIGV2ZW50XCIpO1xuICAgICAgICAgICAgYXJncy5wdXNoKHRoaXMuYWNrKHBhY2tldC5pZCkpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmNvbm5lY3RlZCkge1xuICAgICAgICAgICAgdGhpcy5lbWl0RXZlbnQoYXJncyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJlY2VpdmVCdWZmZXIucHVzaChPYmplY3QuZnJlZXplKGFyZ3MpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbWl0RXZlbnQoYXJncykge1xuICAgICAgICBpZiAodGhpcy5fYW55TGlzdGVuZXJzICYmIHRoaXMuX2FueUxpc3RlbmVycy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IGxpc3RlbmVycyA9IHRoaXMuX2FueUxpc3RlbmVycy5zbGljZSgpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBsaXN0ZW5lciBvZiBsaXN0ZW5lcnMpIHtcbiAgICAgICAgICAgICAgICBsaXN0ZW5lci5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzdXBlci5lbWl0LmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQcm9kdWNlcyBhbiBhY2sgY2FsbGJhY2sgdG8gZW1pdCB3aXRoIGFuIGV2ZW50LlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBhY2soaWQpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGxldCBzZW50ID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgICAgICAgICAgLy8gcHJldmVudCBkb3VibGUgY2FsbGJhY2tzXG4gICAgICAgICAgICBpZiAoc2VudClcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBzZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgIGRlYnVnKFwic2VuZGluZyBhY2sgJWpcIiwgYXJncyk7XG4gICAgICAgICAgICBzZWxmLnBhY2tldCh7XG4gICAgICAgICAgICAgICAgdHlwZTogc29ja2V0X2lvX3BhcnNlcl8xLlBhY2tldFR5cGUuQUNLLFxuICAgICAgICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICAgICAgICBkYXRhOiBhcmdzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxlZCB1cG9uIGEgc2VydmVyIGFja25vd2xlZ2VtZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIHBhY2tldFxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgb25hY2socGFja2V0KSB7XG4gICAgICAgIGNvbnN0IGFjayA9IHRoaXMuYWNrc1twYWNrZXQuaWRdO1xuICAgICAgICBpZiAoXCJmdW5jdGlvblwiID09PSB0eXBlb2YgYWNrKSB7XG4gICAgICAgICAgICBkZWJ1ZyhcImNhbGxpbmcgYWNrICVzIHdpdGggJWpcIiwgcGFja2V0LmlkLCBwYWNrZXQuZGF0YSk7XG4gICAgICAgICAgICBhY2suYXBwbHkodGhpcywgcGFja2V0LmRhdGEpO1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuYWNrc1twYWNrZXQuaWRdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZGVidWcoXCJiYWQgYWNrICVzXCIsIHBhY2tldC5pZCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHVwb24gc2VydmVyIGNvbm5lY3QuXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIG9uY29ubmVjdChpZCkge1xuICAgICAgICBkZWJ1ZyhcInNvY2tldCBjb25uZWN0ZWQgd2l0aCBpZCAlc1wiLCBpZCk7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5jb25uZWN0ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmRpc2Nvbm5lY3RlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmVtaXRCdWZmZXJlZCgpO1xuICAgICAgICB0aGlzLmVtaXRSZXNlcnZlZChcImNvbm5lY3RcIik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEVtaXQgYnVmZmVyZWQgZXZlbnRzIChyZWNlaXZlZCBhbmQgZW1pdHRlZCkuXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGVtaXRCdWZmZXJlZCgpIHtcbiAgICAgICAgdGhpcy5yZWNlaXZlQnVmZmVyLmZvckVhY2goKGFyZ3MpID0+IHRoaXMuZW1pdEV2ZW50KGFyZ3MpKTtcbiAgICAgICAgdGhpcy5yZWNlaXZlQnVmZmVyID0gW107XG4gICAgICAgIHRoaXMuc2VuZEJ1ZmZlci5mb3JFYWNoKChwYWNrZXQpID0+IHRoaXMucGFja2V0KHBhY2tldCkpO1xuICAgICAgICB0aGlzLnNlbmRCdWZmZXIgPSBbXTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHVwb24gc2VydmVyIGRpc2Nvbm5lY3QuXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIG9uZGlzY29ubmVjdCgpIHtcbiAgICAgICAgZGVidWcoXCJzZXJ2ZXIgZGlzY29ubmVjdCAoJXMpXCIsIHRoaXMubnNwKTtcbiAgICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMub25jbG9zZShcImlvIHNlcnZlciBkaXNjb25uZWN0XCIpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgdXBvbiBmb3JjZWQgY2xpZW50L3NlcnZlciBzaWRlIGRpc2Nvbm5lY3Rpb25zLFxuICAgICAqIHRoaXMgbWV0aG9kIGVuc3VyZXMgdGhlIG1hbmFnZXIgc3RvcHMgdHJhY2tpbmcgdXMgYW5kXG4gICAgICogdGhhdCByZWNvbm5lY3Rpb25zIGRvbid0IGdldCB0cmlnZ2VyZWQgZm9yIHRoaXMuXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh0aGlzLnN1YnMpIHtcbiAgICAgICAgICAgIC8vIGNsZWFuIHN1YnNjcmlwdGlvbnMgdG8gYXZvaWQgcmVjb25uZWN0aW9uc1xuICAgICAgICAgICAgdGhpcy5zdWJzLmZvckVhY2goKHN1YkRlc3Ryb3kpID0+IHN1YkRlc3Ryb3koKSk7XG4gICAgICAgICAgICB0aGlzLnN1YnMgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pb1tcIl9kZXN0cm95XCJdKHRoaXMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEaXNjb25uZWN0cyB0aGUgc29ja2V0IG1hbnVhbGx5LlxuICAgICAqXG4gICAgICogQHJldHVybiBzZWxmXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIGRpc2Nvbm5lY3QoKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbm5lY3RlZCkge1xuICAgICAgICAgICAgZGVidWcoXCJwZXJmb3JtaW5nIGRpc2Nvbm5lY3QgKCVzKVwiLCB0aGlzLm5zcCk7XG4gICAgICAgICAgICB0aGlzLnBhY2tldCh7IHR5cGU6IHNvY2tldF9pb19wYXJzZXJfMS5QYWNrZXRUeXBlLkRJU0NPTk5FQ1QgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gcmVtb3ZlIHNvY2tldCBmcm9tIHBvb2xcbiAgICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgICAgIGlmICh0aGlzLmNvbm5lY3RlZCkge1xuICAgICAgICAgICAgLy8gZmlyZSBldmVudHNcbiAgICAgICAgICAgIHRoaXMub25jbG9zZShcImlvIGNsaWVudCBkaXNjb25uZWN0XCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBbGlhcyBmb3IgZGlzY29ubmVjdCgpXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHNlbGZcbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgY2xvc2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRpc2Nvbm5lY3QoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgY29tcHJlc3MgZmxhZy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBjb21wcmVzcyAtIGlmIGB0cnVlYCwgY29tcHJlc3NlcyB0aGUgc2VuZGluZyBkYXRhXG4gICAgICogQHJldHVybiBzZWxmXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIGNvbXByZXNzKGNvbXByZXNzKSB7XG4gICAgICAgIHRoaXMuZmxhZ3MuY29tcHJlc3MgPSBjb21wcmVzcztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgYSBtb2RpZmllciBmb3IgYSBzdWJzZXF1ZW50IGV2ZW50IGVtaXNzaW9uIHRoYXQgdGhlIGV2ZW50IG1lc3NhZ2Ugd2lsbCBiZSBkcm9wcGVkIHdoZW4gdGhpcyBzb2NrZXQgaXMgbm90XG4gICAgICogcmVhZHkgdG8gc2VuZCBtZXNzYWdlcy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHNlbGZcbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgZ2V0IHZvbGF0aWxlKCkge1xuICAgICAgICB0aGlzLmZsYWdzLnZvbGF0aWxlID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFkZHMgYSBsaXN0ZW5lciB0aGF0IHdpbGwgYmUgZmlyZWQgd2hlbiBhbnkgZXZlbnQgaXMgZW1pdHRlZC4gVGhlIGV2ZW50IG5hbWUgaXMgcGFzc2VkIGFzIHRoZSBmaXJzdCBhcmd1bWVudCB0byB0aGVcbiAgICAgKiBjYWxsYmFjay5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBsaXN0ZW5lclxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBvbkFueShsaXN0ZW5lcikge1xuICAgICAgICB0aGlzLl9hbnlMaXN0ZW5lcnMgPSB0aGlzLl9hbnlMaXN0ZW5lcnMgfHwgW107XG4gICAgICAgIHRoaXMuX2FueUxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFkZHMgYSBsaXN0ZW5lciB0aGF0IHdpbGwgYmUgZmlyZWQgd2hlbiBhbnkgZXZlbnQgaXMgZW1pdHRlZC4gVGhlIGV2ZW50IG5hbWUgaXMgcGFzc2VkIGFzIHRoZSBmaXJzdCBhcmd1bWVudCB0byB0aGVcbiAgICAgKiBjYWxsYmFjay4gVGhlIGxpc3RlbmVyIGlzIGFkZGVkIHRvIHRoZSBiZWdpbm5pbmcgb2YgdGhlIGxpc3RlbmVycyBhcnJheS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBsaXN0ZW5lclxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBwcmVwZW5kQW55KGxpc3RlbmVyKSB7XG4gICAgICAgIHRoaXMuX2FueUxpc3RlbmVycyA9IHRoaXMuX2FueUxpc3RlbmVycyB8fCBbXTtcbiAgICAgICAgdGhpcy5fYW55TGlzdGVuZXJzLnVuc2hpZnQobGlzdGVuZXIpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyB0aGUgbGlzdGVuZXIgdGhhdCB3aWxsIGJlIGZpcmVkIHdoZW4gYW55IGV2ZW50IGlzIGVtaXR0ZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbGlzdGVuZXJcbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgb2ZmQW55KGxpc3RlbmVyKSB7XG4gICAgICAgIGlmICghdGhpcy5fYW55TGlzdGVuZXJzKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICBpZiAobGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IGxpc3RlbmVycyA9IHRoaXMuX2FueUxpc3RlbmVycztcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGxpc3RlbmVyID09PSBsaXN0ZW5lcnNbaV0pIHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fYW55TGlzdGVuZXJzID0gW107XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gYXJyYXkgb2YgbGlzdGVuZXJzIHRoYXQgYXJlIGxpc3RlbmluZyBmb3IgYW55IGV2ZW50IHRoYXQgaXMgc3BlY2lmaWVkLiBUaGlzIGFycmF5IGNhbiBiZSBtYW5pcHVsYXRlZCxcbiAgICAgKiBlLmcuIHRvIHJlbW92ZSBsaXN0ZW5lcnMuXG4gICAgICpcbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgbGlzdGVuZXJzQW55KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYW55TGlzdGVuZXJzIHx8IFtdO1xuICAgIH1cbn1cbmV4cG9ydHMuU29ja2V0ID0gU29ja2V0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlN0cmljdEV2ZW50RW1pdHRlciA9IHZvaWQgMDtcbmNvbnN0IEVtaXR0ZXIgPSByZXF1aXJlKFwiY29tcG9uZW50LWVtaXR0ZXJcIik7XG4vKipcbiAqIFN0cmljdGx5IHR5cGVkIHZlcnNpb24gb2YgYW4gYEV2ZW50RW1pdHRlcmAuIEEgYFR5cGVkRXZlbnRFbWl0dGVyYCB0YWtlcyB0eXBlXG4gKiBwYXJhbWV0ZXJzIGZvciBtYXBwaW5ncyBvZiBldmVudCBuYW1lcyB0byBldmVudCBkYXRhIHR5cGVzLCBhbmQgc3RyaWN0bHlcbiAqIHR5cGVzIG1ldGhvZCBjYWxscyB0byB0aGUgYEV2ZW50RW1pdHRlcmAgYWNjb3JkaW5nIHRvIHRoZXNlIGV2ZW50IG1hcHMuXG4gKlxuICogQHR5cGVQYXJhbSBMaXN0ZW5FdmVudHMgLSBgRXZlbnRzTWFwYCBvZiB1c2VyLWRlZmluZWQgZXZlbnRzIHRoYXQgY2FuIGJlXG4gKiBsaXN0ZW5lZCB0byB3aXRoIGBvbmAgb3IgYG9uY2VgXG4gKiBAdHlwZVBhcmFtIEVtaXRFdmVudHMgLSBgRXZlbnRzTWFwYCBvZiB1c2VyLWRlZmluZWQgZXZlbnRzIHRoYXQgY2FuIGJlXG4gKiBlbWl0dGVkIHdpdGggYGVtaXRgXG4gKiBAdHlwZVBhcmFtIFJlc2VydmVkRXZlbnRzIC0gYEV2ZW50c01hcGAgb2YgcmVzZXJ2ZWQgZXZlbnRzLCB0aGF0IGNhbiBiZVxuICogZW1pdHRlZCBieSBzb2NrZXQuaW8gd2l0aCBgZW1pdFJlc2VydmVkYCwgYW5kIGNhbiBiZSBsaXN0ZW5lZCB0byB3aXRoXG4gKiBgbGlzdGVuYC5cbiAqL1xuY2xhc3MgU3RyaWN0RXZlbnRFbWl0dGVyIGV4dGVuZHMgRW1pdHRlciB7XG4gICAgLyoqXG4gICAgICogQWRkcyB0aGUgYGxpc3RlbmVyYCBmdW5jdGlvbiBhcyBhbiBldmVudCBsaXN0ZW5lciBmb3IgYGV2YC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBldiBOYW1lIG9mIHRoZSBldmVudFxuICAgICAqIEBwYXJhbSBsaXN0ZW5lciBDYWxsYmFjayBmdW5jdGlvblxuICAgICAqL1xuICAgIG9uKGV2LCBsaXN0ZW5lcikge1xuICAgICAgICBzdXBlci5vbihldiwgbGlzdGVuZXIpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkcyBhIG9uZS10aW1lIGBsaXN0ZW5lcmAgZnVuY3Rpb24gYXMgYW4gZXZlbnQgbGlzdGVuZXIgZm9yIGBldmAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZXYgTmFtZSBvZiB0aGUgZXZlbnRcbiAgICAgKiBAcGFyYW0gbGlzdGVuZXIgQ2FsbGJhY2sgZnVuY3Rpb25cbiAgICAgKi9cbiAgICBvbmNlKGV2LCBsaXN0ZW5lcikge1xuICAgICAgICBzdXBlci5vbmNlKGV2LCBsaXN0ZW5lcik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBFbWl0cyBhbiBldmVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBldiBOYW1lIG9mIHRoZSBldmVudFxuICAgICAqIEBwYXJhbSBhcmdzIFZhbHVlcyB0byBzZW5kIHRvIGxpc3RlbmVycyBvZiB0aGlzIGV2ZW50XG4gICAgICovXG4gICAgZW1pdChldiwgLi4uYXJncykge1xuICAgICAgICBzdXBlci5lbWl0KGV2LCAuLi5hcmdzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEVtaXRzIGEgcmVzZXJ2ZWQgZXZlbnQuXG4gICAgICpcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBgcHJvdGVjdGVkYCwgc28gdGhhdCBvbmx5IGEgY2xhc3MgZXh0ZW5kaW5nXG4gICAgICogYFN0cmljdEV2ZW50RW1pdHRlcmAgY2FuIGVtaXQgaXRzIG93biByZXNlcnZlZCBldmVudHMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZXYgUmVzZXJ2ZWQgZXZlbnQgbmFtZVxuICAgICAqIEBwYXJhbSBhcmdzIEFyZ3VtZW50cyB0byBlbWl0IGFsb25nIHdpdGggdGhlIGV2ZW50XG4gICAgICovXG4gICAgZW1pdFJlc2VydmVkKGV2LCAuLi5hcmdzKSB7XG4gICAgICAgIHN1cGVyLmVtaXQoZXYsIC4uLmFyZ3MpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbGlzdGVuZXJzIGxpc3RlbmluZyB0byBhbiBldmVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBldmVudCBFdmVudCBuYW1lXG4gICAgICogQHJldHVybnMgQXJyYXkgb2YgbGlzdGVuZXJzIHN1YnNjcmliZWQgdG8gYGV2ZW50YFxuICAgICAqL1xuICAgIGxpc3RlbmVycyhldmVudCkge1xuICAgICAgICByZXR1cm4gc3VwZXIubGlzdGVuZXJzKGV2ZW50KTtcbiAgICB9XG59XG5leHBvcnRzLlN0cmljdEV2ZW50RW1pdHRlciA9IFN0cmljdEV2ZW50RW1pdHRlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy51cmwgPSB2b2lkIDA7XG5jb25zdCBwYXJzZXVyaSA9IHJlcXVpcmUoXCJwYXJzZXVyaVwiKTtcbmNvbnN0IGRlYnVnID0gcmVxdWlyZShcImRlYnVnXCIpKFwic29ja2V0LmlvLWNsaWVudDp1cmxcIik7XG4vKipcbiAqIFVSTCBwYXJzZXIuXG4gKlxuICogQHBhcmFtIHVyaSAtIHVybFxuICogQHBhcmFtIHBhdGggLSB0aGUgcmVxdWVzdCBwYXRoIG9mIHRoZSBjb25uZWN0aW9uXG4gKiBAcGFyYW0gbG9jIC0gQW4gb2JqZWN0IG1lYW50IHRvIG1pbWljIHdpbmRvdy5sb2NhdGlvbi5cbiAqICAgICAgICBEZWZhdWx0cyB0byB3aW5kb3cubG9jYXRpb24uXG4gKiBAcHVibGljXG4gKi9cbmZ1bmN0aW9uIHVybCh1cmksIHBhdGggPSBcIlwiLCBsb2MpIHtcbiAgICBsZXQgb2JqID0gdXJpO1xuICAgIC8vIGRlZmF1bHQgdG8gd2luZG93LmxvY2F0aW9uXG4gICAgbG9jID0gbG9jIHx8ICh0eXBlb2YgbG9jYXRpb24gIT09IFwidW5kZWZpbmVkXCIgJiYgbG9jYXRpb24pO1xuICAgIGlmIChudWxsID09IHVyaSlcbiAgICAgICAgdXJpID0gbG9jLnByb3RvY29sICsgXCIvL1wiICsgbG9jLmhvc3Q7XG4gICAgLy8gcmVsYXRpdmUgcGF0aCBzdXBwb3J0XG4gICAgaWYgKHR5cGVvZiB1cmkgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgaWYgKFwiL1wiID09PSB1cmkuY2hhckF0KDApKSB7XG4gICAgICAgICAgICBpZiAoXCIvXCIgPT09IHVyaS5jaGFyQXQoMSkpIHtcbiAgICAgICAgICAgICAgICB1cmkgPSBsb2MucHJvdG9jb2wgKyB1cmk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB1cmkgPSBsb2MuaG9zdCArIHVyaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIS9eKGh0dHBzP3x3c3M/KTpcXC9cXC8vLnRlc3QodXJpKSkge1xuICAgICAgICAgICAgZGVidWcoXCJwcm90b2NvbC1sZXNzIHVybCAlc1wiLCB1cmkpO1xuICAgICAgICAgICAgaWYgKFwidW5kZWZpbmVkXCIgIT09IHR5cGVvZiBsb2MpIHtcbiAgICAgICAgICAgICAgICB1cmkgPSBsb2MucHJvdG9jb2wgKyBcIi8vXCIgKyB1cmk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB1cmkgPSBcImh0dHBzOi8vXCIgKyB1cmk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gcGFyc2VcbiAgICAgICAgZGVidWcoXCJwYXJzZSAlc1wiLCB1cmkpO1xuICAgICAgICBvYmogPSBwYXJzZXVyaSh1cmkpO1xuICAgIH1cbiAgICAvLyBtYWtlIHN1cmUgd2UgdHJlYXQgYGxvY2FsaG9zdDo4MGAgYW5kIGBsb2NhbGhvc3RgIGVxdWFsbHlcbiAgICBpZiAoIW9iai5wb3J0KSB7XG4gICAgICAgIGlmICgvXihodHRwfHdzKSQvLnRlc3Qob2JqLnByb3RvY29sKSkge1xuICAgICAgICAgICAgb2JqLnBvcnQgPSBcIjgwXCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoL14oaHR0cHx3cylzJC8udGVzdChvYmoucHJvdG9jb2wpKSB7XG4gICAgICAgICAgICBvYmoucG9ydCA9IFwiNDQzXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgb2JqLnBhdGggPSBvYmoucGF0aCB8fCBcIi9cIjtcbiAgICBjb25zdCBpcHY2ID0gb2JqLmhvc3QuaW5kZXhPZihcIjpcIikgIT09IC0xO1xuICAgIGNvbnN0IGhvc3QgPSBpcHY2ID8gXCJbXCIgKyBvYmouaG9zdCArIFwiXVwiIDogb2JqLmhvc3Q7XG4gICAgLy8gZGVmaW5lIHVuaXF1ZSBpZFxuICAgIG9iai5pZCA9IG9iai5wcm90b2NvbCArIFwiOi8vXCIgKyBob3N0ICsgXCI6XCIgKyBvYmoucG9ydCArIHBhdGg7XG4gICAgLy8gZGVmaW5lIGhyZWZcbiAgICBvYmouaHJlZiA9XG4gICAgICAgIG9iai5wcm90b2NvbCArXG4gICAgICAgICAgICBcIjovL1wiICtcbiAgICAgICAgICAgIGhvc3QgK1xuICAgICAgICAgICAgKGxvYyAmJiBsb2MucG9ydCA9PT0gb2JqLnBvcnQgPyBcIlwiIDogXCI6XCIgKyBvYmoucG9ydCk7XG4gICAgcmV0dXJuIG9iajtcbn1cbmV4cG9ydHMudXJsID0gdXJsO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnJlY29uc3RydWN0UGFja2V0ID0gZXhwb3J0cy5kZWNvbnN0cnVjdFBhY2tldCA9IHZvaWQgMDtcbmNvbnN0IGlzX2JpbmFyeV8xID0gcmVxdWlyZShcIi4vaXMtYmluYXJ5XCIpO1xuLyoqXG4gKiBSZXBsYWNlcyBldmVyeSBCdWZmZXIgfCBBcnJheUJ1ZmZlciB8IEJsb2IgfCBGaWxlIGluIHBhY2tldCB3aXRoIGEgbnVtYmVyZWQgcGxhY2Vob2xkZXIuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHBhY2tldCAtIHNvY2tldC5pbyBldmVudCBwYWNrZXRcbiAqIEByZXR1cm4ge09iamVjdH0gd2l0aCBkZWNvbnN0cnVjdGVkIHBhY2tldCBhbmQgbGlzdCBvZiBidWZmZXJzXG4gKiBAcHVibGljXG4gKi9cbmZ1bmN0aW9uIGRlY29uc3RydWN0UGFja2V0KHBhY2tldCkge1xuICAgIGNvbnN0IGJ1ZmZlcnMgPSBbXTtcbiAgICBjb25zdCBwYWNrZXREYXRhID0gcGFja2V0LmRhdGE7XG4gICAgY29uc3QgcGFjayA9IHBhY2tldDtcbiAgICBwYWNrLmRhdGEgPSBfZGVjb25zdHJ1Y3RQYWNrZXQocGFja2V0RGF0YSwgYnVmZmVycyk7XG4gICAgcGFjay5hdHRhY2htZW50cyA9IGJ1ZmZlcnMubGVuZ3RoOyAvLyBudW1iZXIgb2YgYmluYXJ5ICdhdHRhY2htZW50cydcbiAgICByZXR1cm4geyBwYWNrZXQ6IHBhY2ssIGJ1ZmZlcnM6IGJ1ZmZlcnMgfTtcbn1cbmV4cG9ydHMuZGVjb25zdHJ1Y3RQYWNrZXQgPSBkZWNvbnN0cnVjdFBhY2tldDtcbmZ1bmN0aW9uIF9kZWNvbnN0cnVjdFBhY2tldChkYXRhLCBidWZmZXJzKSB7XG4gICAgaWYgKCFkYXRhKVxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICBpZiAoaXNfYmluYXJ5XzEuaXNCaW5hcnkoZGF0YSkpIHtcbiAgICAgICAgY29uc3QgcGxhY2Vob2xkZXIgPSB7IF9wbGFjZWhvbGRlcjogdHJ1ZSwgbnVtOiBidWZmZXJzLmxlbmd0aCB9O1xuICAgICAgICBidWZmZXJzLnB1c2goZGF0YSk7XG4gICAgICAgIHJldHVybiBwbGFjZWhvbGRlcjtcbiAgICB9XG4gICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgICAgICBjb25zdCBuZXdEYXRhID0gbmV3IEFycmF5KGRhdGEubGVuZ3RoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBuZXdEYXRhW2ldID0gX2RlY29uc3RydWN0UGFja2V0KGRhdGFbaV0sIGJ1ZmZlcnMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdEYXRhO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgZGF0YSA9PT0gXCJvYmplY3RcIiAmJiAhKGRhdGEgaW5zdGFuY2VvZiBEYXRlKSkge1xuICAgICAgICBjb25zdCBuZXdEYXRhID0ge307XG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIGRhdGEpIHtcbiAgICAgICAgICAgIGlmIChkYXRhLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBuZXdEYXRhW2tleV0gPSBfZGVjb25zdHJ1Y3RQYWNrZXQoZGF0YVtrZXldLCBidWZmZXJzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3RGF0YTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG59XG4vKipcbiAqIFJlY29uc3RydWN0cyBhIGJpbmFyeSBwYWNrZXQgZnJvbSBpdHMgcGxhY2Vob2xkZXIgcGFja2V0IGFuZCBidWZmZXJzXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHBhY2tldCAtIGV2ZW50IHBhY2tldCB3aXRoIHBsYWNlaG9sZGVyc1xuICogQHBhcmFtIHtBcnJheX0gYnVmZmVycyAtIGJpbmFyeSBidWZmZXJzIHRvIHB1dCBpbiBwbGFjZWhvbGRlciBwb3NpdGlvbnNcbiAqIEByZXR1cm4ge09iamVjdH0gcmVjb25zdHJ1Y3RlZCBwYWNrZXRcbiAqIEBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gcmVjb25zdHJ1Y3RQYWNrZXQocGFja2V0LCBidWZmZXJzKSB7XG4gICAgcGFja2V0LmRhdGEgPSBfcmVjb25zdHJ1Y3RQYWNrZXQocGFja2V0LmRhdGEsIGJ1ZmZlcnMpO1xuICAgIHBhY2tldC5hdHRhY2htZW50cyA9IHVuZGVmaW5lZDsgLy8gbm8gbG9uZ2VyIHVzZWZ1bFxuICAgIHJldHVybiBwYWNrZXQ7XG59XG5leHBvcnRzLnJlY29uc3RydWN0UGFja2V0ID0gcmVjb25zdHJ1Y3RQYWNrZXQ7XG5mdW5jdGlvbiBfcmVjb25zdHJ1Y3RQYWNrZXQoZGF0YSwgYnVmZmVycykge1xuICAgIGlmICghZGF0YSlcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgaWYgKGRhdGEgJiYgZGF0YS5fcGxhY2Vob2xkZXIpIHtcbiAgICAgICAgcmV0dXJuIGJ1ZmZlcnNbZGF0YS5udW1dOyAvLyBhcHByb3ByaWF0ZSBidWZmZXIgKHNob3VsZCBiZSBuYXR1cmFsIG9yZGVyIGFueXdheSlcbiAgICB9XG4gICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGRhdGFbaV0gPSBfcmVjb25zdHJ1Y3RQYWNrZXQoZGF0YVtpXSwgYnVmZmVycyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIGRhdGEgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gZGF0YSkge1xuICAgICAgICAgICAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIGRhdGFba2V5XSA9IF9yZWNvbnN0cnVjdFBhY2tldChkYXRhW2tleV0sIGJ1ZmZlcnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkRlY29kZXIgPSBleHBvcnRzLkVuY29kZXIgPSBleHBvcnRzLlBhY2tldFR5cGUgPSBleHBvcnRzLnByb3RvY29sID0gdm9pZCAwO1xuY29uc3QgRW1pdHRlciA9IHJlcXVpcmUoXCJjb21wb25lbnQtZW1pdHRlclwiKTtcbmNvbnN0IGJpbmFyeV8xID0gcmVxdWlyZShcIi4vYmluYXJ5XCIpO1xuY29uc3QgaXNfYmluYXJ5XzEgPSByZXF1aXJlKFwiLi9pcy1iaW5hcnlcIik7XG5jb25zdCBkZWJ1ZyA9IHJlcXVpcmUoXCJkZWJ1Z1wiKShcInNvY2tldC5pby1wYXJzZXJcIik7XG4vKipcbiAqIFByb3RvY29sIHZlcnNpb24uXG4gKlxuICogQHB1YmxpY1xuICovXG5leHBvcnRzLnByb3RvY29sID0gNTtcbnZhciBQYWNrZXRUeXBlO1xuKGZ1bmN0aW9uIChQYWNrZXRUeXBlKSB7XG4gICAgUGFja2V0VHlwZVtQYWNrZXRUeXBlW1wiQ09OTkVDVFwiXSA9IDBdID0gXCJDT05ORUNUXCI7XG4gICAgUGFja2V0VHlwZVtQYWNrZXRUeXBlW1wiRElTQ09OTkVDVFwiXSA9IDFdID0gXCJESVNDT05ORUNUXCI7XG4gICAgUGFja2V0VHlwZVtQYWNrZXRUeXBlW1wiRVZFTlRcIl0gPSAyXSA9IFwiRVZFTlRcIjtcbiAgICBQYWNrZXRUeXBlW1BhY2tldFR5cGVbXCJBQ0tcIl0gPSAzXSA9IFwiQUNLXCI7XG4gICAgUGFja2V0VHlwZVtQYWNrZXRUeXBlW1wiQ09OTkVDVF9FUlJPUlwiXSA9IDRdID0gXCJDT05ORUNUX0VSUk9SXCI7XG4gICAgUGFja2V0VHlwZVtQYWNrZXRUeXBlW1wiQklOQVJZX0VWRU5UXCJdID0gNV0gPSBcIkJJTkFSWV9FVkVOVFwiO1xuICAgIFBhY2tldFR5cGVbUGFja2V0VHlwZVtcIkJJTkFSWV9BQ0tcIl0gPSA2XSA9IFwiQklOQVJZX0FDS1wiO1xufSkoUGFja2V0VHlwZSA9IGV4cG9ydHMuUGFja2V0VHlwZSB8fCAoZXhwb3J0cy5QYWNrZXRUeXBlID0ge30pKTtcbi8qKlxuICogQSBzb2NrZXQuaW8gRW5jb2RlciBpbnN0YW5jZVxuICovXG5jbGFzcyBFbmNvZGVyIHtcbiAgICAvKipcbiAgICAgKiBFbmNvZGUgYSBwYWNrZXQgYXMgYSBzaW5nbGUgc3RyaW5nIGlmIG5vbi1iaW5hcnksIG9yIGFzIGFcbiAgICAgKiBidWZmZXIgc2VxdWVuY2UsIGRlcGVuZGluZyBvbiBwYWNrZXQgdHlwZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvYmogLSBwYWNrZXQgb2JqZWN0XG4gICAgICovXG4gICAgZW5jb2RlKG9iaikge1xuICAgICAgICBkZWJ1ZyhcImVuY29kaW5nIHBhY2tldCAlalwiLCBvYmopO1xuICAgICAgICBpZiAob2JqLnR5cGUgPT09IFBhY2tldFR5cGUuRVZFTlQgfHwgb2JqLnR5cGUgPT09IFBhY2tldFR5cGUuQUNLKSB7XG4gICAgICAgICAgICBpZiAoaXNfYmluYXJ5XzEuaGFzQmluYXJ5KG9iaikpIHtcbiAgICAgICAgICAgICAgICBvYmoudHlwZSA9XG4gICAgICAgICAgICAgICAgICAgIG9iai50eXBlID09PSBQYWNrZXRUeXBlLkVWRU5UXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFBhY2tldFR5cGUuQklOQVJZX0VWRU5UXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFBhY2tldFR5cGUuQklOQVJZX0FDSztcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5lbmNvZGVBc0JpbmFyeShvYmopO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbdGhpcy5lbmNvZGVBc1N0cmluZyhvYmopXTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRW5jb2RlIHBhY2tldCBhcyBzdHJpbmcuXG4gICAgICovXG4gICAgZW5jb2RlQXNTdHJpbmcob2JqKSB7XG4gICAgICAgIC8vIGZpcnN0IGlzIHR5cGVcbiAgICAgICAgbGV0IHN0ciA9IFwiXCIgKyBvYmoudHlwZTtcbiAgICAgICAgLy8gYXR0YWNobWVudHMgaWYgd2UgaGF2ZSB0aGVtXG4gICAgICAgIGlmIChvYmoudHlwZSA9PT0gUGFja2V0VHlwZS5CSU5BUllfRVZFTlQgfHxcbiAgICAgICAgICAgIG9iai50eXBlID09PSBQYWNrZXRUeXBlLkJJTkFSWV9BQ0spIHtcbiAgICAgICAgICAgIHN0ciArPSBvYmouYXR0YWNobWVudHMgKyBcIi1cIjtcbiAgICAgICAgfVxuICAgICAgICAvLyBpZiB3ZSBoYXZlIGEgbmFtZXNwYWNlIG90aGVyIHRoYW4gYC9gXG4gICAgICAgIC8vIHdlIGFwcGVuZCBpdCBmb2xsb3dlZCBieSBhIGNvbW1hIGAsYFxuICAgICAgICBpZiAob2JqLm5zcCAmJiBcIi9cIiAhPT0gb2JqLm5zcCkge1xuICAgICAgICAgICAgc3RyICs9IG9iai5uc3AgKyBcIixcIjtcbiAgICAgICAgfVxuICAgICAgICAvLyBpbW1lZGlhdGVseSBmb2xsb3dlZCBieSB0aGUgaWRcbiAgICAgICAgaWYgKG51bGwgIT0gb2JqLmlkKSB7XG4gICAgICAgICAgICBzdHIgKz0gb2JqLmlkO1xuICAgICAgICB9XG4gICAgICAgIC8vIGpzb24gZGF0YVxuICAgICAgICBpZiAobnVsbCAhPSBvYmouZGF0YSkge1xuICAgICAgICAgICAgc3RyICs9IEpTT04uc3RyaW5naWZ5KG9iai5kYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBkZWJ1ZyhcImVuY29kZWQgJWogYXMgJXNcIiwgb2JqLCBzdHIpO1xuICAgICAgICByZXR1cm4gc3RyO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBFbmNvZGUgcGFja2V0IGFzICdidWZmZXIgc2VxdWVuY2UnIGJ5IHJlbW92aW5nIGJsb2JzLCBhbmRcbiAgICAgKiBkZWNvbnN0cnVjdGluZyBwYWNrZXQgaW50byBvYmplY3Qgd2l0aCBwbGFjZWhvbGRlcnMgYW5kXG4gICAgICogYSBsaXN0IG9mIGJ1ZmZlcnMuXG4gICAgICovXG4gICAgZW5jb2RlQXNCaW5hcnkob2JqKSB7XG4gICAgICAgIGNvbnN0IGRlY29uc3RydWN0aW9uID0gYmluYXJ5XzEuZGVjb25zdHJ1Y3RQYWNrZXQob2JqKTtcbiAgICAgICAgY29uc3QgcGFjayA9IHRoaXMuZW5jb2RlQXNTdHJpbmcoZGVjb25zdHJ1Y3Rpb24ucGFja2V0KTtcbiAgICAgICAgY29uc3QgYnVmZmVycyA9IGRlY29uc3RydWN0aW9uLmJ1ZmZlcnM7XG4gICAgICAgIGJ1ZmZlcnMudW5zaGlmdChwYWNrKTsgLy8gYWRkIHBhY2tldCBpbmZvIHRvIGJlZ2lubmluZyBvZiBkYXRhIGxpc3RcbiAgICAgICAgcmV0dXJuIGJ1ZmZlcnM7IC8vIHdyaXRlIGFsbCB0aGUgYnVmZmVyc1xuICAgIH1cbn1cbmV4cG9ydHMuRW5jb2RlciA9IEVuY29kZXI7XG4vKipcbiAqIEEgc29ja2V0LmlvIERlY29kZXIgaW5zdGFuY2VcbiAqXG4gKiBAcmV0dXJuIHtPYmplY3R9IGRlY29kZXJcbiAqL1xuY2xhc3MgRGVjb2RlciBleHRlbmRzIEVtaXR0ZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEZWNvZGVzIGFuIGVuY29kZWQgcGFja2V0IHN0cmluZyBpbnRvIHBhY2tldCBKU09OLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9iaiAtIGVuY29kZWQgcGFja2V0XG4gICAgICovXG4gICAgYWRkKG9iaikge1xuICAgICAgICBsZXQgcGFja2V0O1xuICAgICAgICBpZiAodHlwZW9mIG9iaiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgcGFja2V0ID0gdGhpcy5kZWNvZGVTdHJpbmcob2JqKTtcbiAgICAgICAgICAgIGlmIChwYWNrZXQudHlwZSA9PT0gUGFja2V0VHlwZS5CSU5BUllfRVZFTlQgfHxcbiAgICAgICAgICAgICAgICBwYWNrZXQudHlwZSA9PT0gUGFja2V0VHlwZS5CSU5BUllfQUNLKSB7XG4gICAgICAgICAgICAgICAgLy8gYmluYXJ5IHBhY2tldCdzIGpzb25cbiAgICAgICAgICAgICAgICB0aGlzLnJlY29uc3RydWN0b3IgPSBuZXcgQmluYXJ5UmVjb25zdHJ1Y3RvcihwYWNrZXQpO1xuICAgICAgICAgICAgICAgIC8vIG5vIGF0dGFjaG1lbnRzLCBsYWJlbGVkIGJpbmFyeSBidXQgbm8gYmluYXJ5IGRhdGEgdG8gZm9sbG93XG4gICAgICAgICAgICAgICAgaWYgKHBhY2tldC5hdHRhY2htZW50cyA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBzdXBlci5lbWl0KFwiZGVjb2RlZFwiLCBwYWNrZXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIG5vbi1iaW5hcnkgZnVsbCBwYWNrZXRcbiAgICAgICAgICAgICAgICBzdXBlci5lbWl0KFwiZGVjb2RlZFwiLCBwYWNrZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzX2JpbmFyeV8xLmlzQmluYXJ5KG9iaikgfHwgb2JqLmJhc2U2NCkge1xuICAgICAgICAgICAgLy8gcmF3IGJpbmFyeSBkYXRhXG4gICAgICAgICAgICBpZiAoIXRoaXMucmVjb25zdHJ1Y3Rvcikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImdvdCBiaW5hcnkgZGF0YSB3aGVuIG5vdCByZWNvbnN0cnVjdGluZyBhIHBhY2tldFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhY2tldCA9IHRoaXMucmVjb25zdHJ1Y3Rvci50YWtlQmluYXJ5RGF0YShvYmopO1xuICAgICAgICAgICAgICAgIGlmIChwYWNrZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVjZWl2ZWQgZmluYWwgYnVmZmVyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVjb25zdHJ1Y3RvciA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHN1cGVyLmVtaXQoXCJkZWNvZGVkXCIsIHBhY2tldCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5rbm93biB0eXBlOiBcIiArIG9iaik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogRGVjb2RlIGEgcGFja2V0IFN0cmluZyAoSlNPTiBkYXRhKVxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICAgICAqIEByZXR1cm4ge09iamVjdH0gcGFja2V0XG4gICAgICovXG4gICAgZGVjb2RlU3RyaW5nKHN0cikge1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIC8vIGxvb2sgdXAgdHlwZVxuICAgICAgICBjb25zdCBwID0ge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyKHN0ci5jaGFyQXQoMCkpLFxuICAgICAgICB9O1xuICAgICAgICBpZiAoUGFja2V0VHlwZVtwLnR5cGVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInVua25vd24gcGFja2V0IHR5cGUgXCIgKyBwLnR5cGUpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGxvb2sgdXAgYXR0YWNobWVudHMgaWYgdHlwZSBiaW5hcnlcbiAgICAgICAgaWYgKHAudHlwZSA9PT0gUGFja2V0VHlwZS5CSU5BUllfRVZFTlQgfHxcbiAgICAgICAgICAgIHAudHlwZSA9PT0gUGFja2V0VHlwZS5CSU5BUllfQUNLKSB7XG4gICAgICAgICAgICBjb25zdCBzdGFydCA9IGkgKyAxO1xuICAgICAgICAgICAgd2hpbGUgKHN0ci5jaGFyQXQoKytpKSAhPT0gXCItXCIgJiYgaSAhPSBzdHIubGVuZ3RoKSB7IH1cbiAgICAgICAgICAgIGNvbnN0IGJ1ZiA9IHN0ci5zdWJzdHJpbmcoc3RhcnQsIGkpO1xuICAgICAgICAgICAgaWYgKGJ1ZiAhPSBOdW1iZXIoYnVmKSB8fCBzdHIuY2hhckF0KGkpICE9PSBcIi1cIikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIklsbGVnYWwgYXR0YWNobWVudHNcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwLmF0dGFjaG1lbnRzID0gTnVtYmVyKGJ1Zik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gbG9vayB1cCBuYW1lc3BhY2UgKGlmIGFueSlcbiAgICAgICAgaWYgKFwiL1wiID09PSBzdHIuY2hhckF0KGkgKyAxKSkge1xuICAgICAgICAgICAgY29uc3Qgc3RhcnQgPSBpICsgMTtcbiAgICAgICAgICAgIHdoaWxlICgrK2kpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjID0gc3RyLmNoYXJBdChpKTtcbiAgICAgICAgICAgICAgICBpZiAoXCIsXCIgPT09IGMpXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGlmIChpID09PSBzdHIubGVuZ3RoKVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHAubnNwID0gc3RyLnN1YnN0cmluZyhzdGFydCwgaSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwLm5zcCA9IFwiL1wiO1xuICAgICAgICB9XG4gICAgICAgIC8vIGxvb2sgdXAgaWRcbiAgICAgICAgY29uc3QgbmV4dCA9IHN0ci5jaGFyQXQoaSArIDEpO1xuICAgICAgICBpZiAoXCJcIiAhPT0gbmV4dCAmJiBOdW1iZXIobmV4dCkgPT0gbmV4dCkge1xuICAgICAgICAgICAgY29uc3Qgc3RhcnQgPSBpICsgMTtcbiAgICAgICAgICAgIHdoaWxlICgrK2kpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjID0gc3RyLmNoYXJBdChpKTtcbiAgICAgICAgICAgICAgICBpZiAobnVsbCA9PSBjIHx8IE51bWJlcihjKSAhPSBjKSB7XG4gICAgICAgICAgICAgICAgICAgIC0taTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChpID09PSBzdHIubGVuZ3RoKVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHAuaWQgPSBOdW1iZXIoc3RyLnN1YnN0cmluZyhzdGFydCwgaSArIDEpKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBsb29rIHVwIGpzb24gZGF0YVxuICAgICAgICBpZiAoc3RyLmNoYXJBdCgrK2kpKSB7XG4gICAgICAgICAgICBjb25zdCBwYXlsb2FkID0gdHJ5UGFyc2Uoc3RyLnN1YnN0cihpKSk7XG4gICAgICAgICAgICBpZiAoRGVjb2Rlci5pc1BheWxvYWRWYWxpZChwLnR5cGUsIHBheWxvYWQpKSB7XG4gICAgICAgICAgICAgICAgcC5kYXRhID0gcGF5bG9hZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImludmFsaWQgcGF5bG9hZFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBkZWJ1ZyhcImRlY29kZWQgJXMgYXMgJWpcIiwgc3RyLCBwKTtcbiAgICAgICAgcmV0dXJuIHA7XG4gICAgfVxuICAgIHN0YXRpYyBpc1BheWxvYWRWYWxpZCh0eXBlLCBwYXlsb2FkKSB7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSBQYWNrZXRUeXBlLkNPTk5FQ1Q6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiBwYXlsb2FkID09PSBcIm9iamVjdFwiO1xuICAgICAgICAgICAgY2FzZSBQYWNrZXRUeXBlLkRJU0NPTk5FQ1Q6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBheWxvYWQgPT09IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGNhc2UgUGFja2V0VHlwZS5DT05ORUNUX0VSUk9SOlxuICAgICAgICAgICAgICAgIHJldHVybiB0eXBlb2YgcGF5bG9hZCA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgcGF5bG9hZCA9PT0gXCJvYmplY3RcIjtcbiAgICAgICAgICAgIGNhc2UgUGFja2V0VHlwZS5FVkVOVDpcbiAgICAgICAgICAgIGNhc2UgUGFja2V0VHlwZS5CSU5BUllfRVZFTlQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkocGF5bG9hZCkgJiYgcGF5bG9hZC5sZW5ndGggPiAwO1xuICAgICAgICAgICAgY2FzZSBQYWNrZXRUeXBlLkFDSzpcbiAgICAgICAgICAgIGNhc2UgUGFja2V0VHlwZS5CSU5BUllfQUNLOlxuICAgICAgICAgICAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KHBheWxvYWQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERlYWxsb2NhdGVzIGEgcGFyc2VyJ3MgcmVzb3VyY2VzXG4gICAgICovXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMucmVjb25zdHJ1Y3Rvcikge1xuICAgICAgICAgICAgdGhpcy5yZWNvbnN0cnVjdG9yLmZpbmlzaGVkUmVjb25zdHJ1Y3Rpb24oKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuRGVjb2RlciA9IERlY29kZXI7XG5mdW5jdGlvbiB0cnlQYXJzZShzdHIpIHtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShzdHIpO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuLyoqXG4gKiBBIG1hbmFnZXIgb2YgYSBiaW5hcnkgZXZlbnQncyAnYnVmZmVyIHNlcXVlbmNlJy4gU2hvdWxkXG4gKiBiZSBjb25zdHJ1Y3RlZCB3aGVuZXZlciBhIHBhY2tldCBvZiB0eXBlIEJJTkFSWV9FVkVOVCBpc1xuICogZGVjb2RlZC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcGFja2V0XG4gKiBAcmV0dXJuIHtCaW5hcnlSZWNvbnN0cnVjdG9yfSBpbml0aWFsaXplZCByZWNvbnN0cnVjdG9yXG4gKi9cbmNsYXNzIEJpbmFyeVJlY29uc3RydWN0b3Ige1xuICAgIGNvbnN0cnVjdG9yKHBhY2tldCkge1xuICAgICAgICB0aGlzLnBhY2tldCA9IHBhY2tldDtcbiAgICAgICAgdGhpcy5idWZmZXJzID0gW107XG4gICAgICAgIHRoaXMucmVjb25QYWNrID0gcGFja2V0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBNZXRob2QgdG8gYmUgY2FsbGVkIHdoZW4gYmluYXJ5IGRhdGEgcmVjZWl2ZWQgZnJvbSBjb25uZWN0aW9uXG4gICAgICogYWZ0ZXIgYSBCSU5BUllfRVZFTlQgcGFja2V0LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtCdWZmZXIgfCBBcnJheUJ1ZmZlcn0gYmluRGF0YSAtIHRoZSByYXcgYmluYXJ5IGRhdGEgcmVjZWl2ZWRcbiAgICAgKiBAcmV0dXJuIHtudWxsIHwgT2JqZWN0fSByZXR1cm5zIG51bGwgaWYgbW9yZSBiaW5hcnkgZGF0YSBpcyBleHBlY3RlZCBvclxuICAgICAqICAgYSByZWNvbnN0cnVjdGVkIHBhY2tldCBvYmplY3QgaWYgYWxsIGJ1ZmZlcnMgaGF2ZSBiZWVuIHJlY2VpdmVkLlxuICAgICAqL1xuICAgIHRha2VCaW5hcnlEYXRhKGJpbkRhdGEpIHtcbiAgICAgICAgdGhpcy5idWZmZXJzLnB1c2goYmluRGF0YSk7XG4gICAgICAgIGlmICh0aGlzLmJ1ZmZlcnMubGVuZ3RoID09PSB0aGlzLnJlY29uUGFjay5hdHRhY2htZW50cykge1xuICAgICAgICAgICAgLy8gZG9uZSB3aXRoIGJ1ZmZlciBsaXN0XG4gICAgICAgICAgICBjb25zdCBwYWNrZXQgPSBiaW5hcnlfMS5yZWNvbnN0cnVjdFBhY2tldCh0aGlzLnJlY29uUGFjaywgdGhpcy5idWZmZXJzKTtcbiAgICAgICAgICAgIHRoaXMuZmluaXNoZWRSZWNvbnN0cnVjdGlvbigpO1xuICAgICAgICAgICAgcmV0dXJuIHBhY2tldDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2xlYW5zIHVwIGJpbmFyeSBwYWNrZXQgcmVjb25zdHJ1Y3Rpb24gdmFyaWFibGVzLlxuICAgICAqL1xuICAgIGZpbmlzaGVkUmVjb25zdHJ1Y3Rpb24oKSB7XG4gICAgICAgIHRoaXMucmVjb25QYWNrID0gbnVsbDtcbiAgICAgICAgdGhpcy5idWZmZXJzID0gW107XG4gICAgfVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmhhc0JpbmFyeSA9IGV4cG9ydHMuaXNCaW5hcnkgPSB2b2lkIDA7XG5jb25zdCB3aXRoTmF0aXZlQXJyYXlCdWZmZXIgPSB0eXBlb2YgQXJyYXlCdWZmZXIgPT09IFwiZnVuY3Rpb25cIjtcbmNvbnN0IGlzVmlldyA9IChvYmopID0+IHtcbiAgICByZXR1cm4gdHlwZW9mIEFycmF5QnVmZmVyLmlzVmlldyA9PT0gXCJmdW5jdGlvblwiXG4gICAgICAgID8gQXJyYXlCdWZmZXIuaXNWaWV3KG9iailcbiAgICAgICAgOiBvYmouYnVmZmVyIGluc3RhbmNlb2YgQXJyYXlCdWZmZXI7XG59O1xuY29uc3QgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuY29uc3Qgd2l0aE5hdGl2ZUJsb2IgPSB0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiIHx8XG4gICAgKHR5cGVvZiBCbG9iICE9PSBcInVuZGVmaW5lZFwiICYmXG4gICAgICAgIHRvU3RyaW5nLmNhbGwoQmxvYikgPT09IFwiW29iamVjdCBCbG9iQ29uc3RydWN0b3JdXCIpO1xuY29uc3Qgd2l0aE5hdGl2ZUZpbGUgPSB0eXBlb2YgRmlsZSA9PT0gXCJmdW5jdGlvblwiIHx8XG4gICAgKHR5cGVvZiBGaWxlICE9PSBcInVuZGVmaW5lZFwiICYmXG4gICAgICAgIHRvU3RyaW5nLmNhbGwoRmlsZSkgPT09IFwiW29iamVjdCBGaWxlQ29uc3RydWN0b3JdXCIpO1xuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgb2JqIGlzIGEgQnVmZmVyLCBhbiBBcnJheUJ1ZmZlciwgYSBCbG9iIG9yIGEgRmlsZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBpc0JpbmFyeShvYmopIHtcbiAgICByZXR1cm4gKCh3aXRoTmF0aXZlQXJyYXlCdWZmZXIgJiYgKG9iaiBpbnN0YW5jZW9mIEFycmF5QnVmZmVyIHx8IGlzVmlldyhvYmopKSkgfHxcbiAgICAgICAgKHdpdGhOYXRpdmVCbG9iICYmIG9iaiBpbnN0YW5jZW9mIEJsb2IpIHx8XG4gICAgICAgICh3aXRoTmF0aXZlRmlsZSAmJiBvYmogaW5zdGFuY2VvZiBGaWxlKSk7XG59XG5leHBvcnRzLmlzQmluYXJ5ID0gaXNCaW5hcnk7XG5mdW5jdGlvbiBoYXNCaW5hcnkob2JqLCB0b0pTT04pIHtcbiAgICBpZiAoIW9iaiB8fCB0eXBlb2Ygb2JqICE9PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKEFycmF5LmlzQXJyYXkob2JqKSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgbCA9IG9iai5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChoYXNCaW5hcnkob2JqW2ldKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKGlzQmluYXJ5KG9iaikpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmIChvYmoudG9KU09OICYmXG4gICAgICAgIHR5cGVvZiBvYmoudG9KU09OID09PSBcImZ1bmN0aW9uXCIgJiZcbiAgICAgICAgYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICByZXR1cm4gaGFzQmluYXJ5KG9iai50b0pTT04oKSwgdHJ1ZSk7XG4gICAgfVxuICAgIGZvciAoY29uc3Qga2V5IGluIG9iaikge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSAmJiBoYXNCaW5hcnkob2JqW2tleV0pKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5leHBvcnRzLmhhc0JpbmFyeSA9IGhhc0JpbmFyeTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGFscGhhYmV0ID0gJzAxMjM0NTY3ODlBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6LV8nLnNwbGl0KCcnKVxuICAsIGxlbmd0aCA9IDY0XG4gICwgbWFwID0ge31cbiAgLCBzZWVkID0gMFxuICAsIGkgPSAwXG4gICwgcHJldjtcblxuLyoqXG4gKiBSZXR1cm4gYSBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSBzcGVjaWZpZWQgbnVtYmVyLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBudW0gVGhlIG51bWJlciB0byBjb252ZXJ0LlxuICogQHJldHVybnMge1N0cmluZ30gVGhlIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgbnVtYmVyLlxuICogQGFwaSBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gZW5jb2RlKG51bSkge1xuICB2YXIgZW5jb2RlZCA9ICcnO1xuXG4gIGRvIHtcbiAgICBlbmNvZGVkID0gYWxwaGFiZXRbbnVtICUgbGVuZ3RoXSArIGVuY29kZWQ7XG4gICAgbnVtID0gTWF0aC5mbG9vcihudW0gLyBsZW5ndGgpO1xuICB9IHdoaWxlIChudW0gPiAwKTtcblxuICByZXR1cm4gZW5jb2RlZDtcbn1cblxuLyoqXG4gKiBSZXR1cm4gdGhlIGludGVnZXIgdmFsdWUgc3BlY2lmaWVkIGJ5IHRoZSBnaXZlbiBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0ciBUaGUgc3RyaW5nIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBUaGUgaW50ZWdlciB2YWx1ZSByZXByZXNlbnRlZCBieSB0aGUgc3RyaW5nLlxuICogQGFwaSBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gZGVjb2RlKHN0cikge1xuICB2YXIgZGVjb2RlZCA9IDA7XG5cbiAgZm9yIChpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgIGRlY29kZWQgPSBkZWNvZGVkICogbGVuZ3RoICsgbWFwW3N0ci5jaGFyQXQoaSldO1xuICB9XG5cbiAgcmV0dXJuIGRlY29kZWQ7XG59XG5cbi8qKlxuICogWWVhc3Q6IEEgdGlueSBncm93aW5nIGlkIGdlbmVyYXRvci5cbiAqXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBBIHVuaXF1ZSBpZC5cbiAqIEBhcGkgcHVibGljXG4gKi9cbmZ1bmN0aW9uIHllYXN0KCkge1xuICB2YXIgbm93ID0gZW5jb2RlKCtuZXcgRGF0ZSgpKTtcblxuICBpZiAobm93ICE9PSBwcmV2KSByZXR1cm4gc2VlZCA9IDAsIHByZXYgPSBub3c7XG4gIHJldHVybiBub3cgKycuJysgZW5jb2RlKHNlZWQrKyk7XG59XG5cbi8vXG4vLyBNYXAgZWFjaCBjaGFyYWN0ZXIgdG8gaXRzIGluZGV4LlxuLy9cbmZvciAoOyBpIDwgbGVuZ3RoOyBpKyspIG1hcFthbHBoYWJldFtpXV0gPSBpO1xuXG4vL1xuLy8gRXhwb3NlIHRoZSBgeWVhc3RgLCBgZW5jb2RlYCBhbmQgYGRlY29kZWAgZnVuY3Rpb25zLlxuLy9cbnllYXN0LmVuY29kZSA9IGVuY29kZTtcbnllYXN0LmRlY29kZSA9IGRlY29kZTtcbm1vZHVsZS5leHBvcnRzID0geWVhc3Q7XG4iLCJpbXBvcnQgeyBwbGF5ZXJOdW1iZXIgfSBmcm9tICcuL2RhdGEnO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdFVJKHNvY2tldCkge1xuICBsZXQgY3JlYXRlR2FtZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjcmVhdGUtZ2FtZScpO1xuICBsZXQgc2hvd0pvaW5HYW1lUHJvbXB0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Nob3ctam9pbi1nYW1lLXByb21wdCcpO1xuICBsZXQgY29uZmlybUpvaW5HYW1lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbmZpcm0tam9pbi1nYW1lJyk7XG4gIGxldCByb29tQ29kZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jvb20tY29kZS1pbnB1dCcpO1xuICBsZXQgaW5pdFRyaWdnZXI7XG4gIGxldCBpbml0VUlQcm9taXNlID0gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XG4gICAgaW5pdFRyaWdnZXIgPSByZXM7XG4gIH0pXG5cbiAgLy9iaW5kIGV2ZW50c1xuICBzaG93Sm9pbkdhbWVQcm9tcHRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgc2hvd0pvaW5HYW1lUHJvbXB0KCk7XG4gIH0pO1xuXG4gIGNyZWF0ZUdhbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbmV3R2FtZShzb2NrZXQpO1xuICB9KTtcblxuICBjb25maXJtSm9pbkdhbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbGV0IHJvb21Db2RlID0gcm9vbUNvZGVJbnB1dC52YWx1ZTtcbiAgICBjb25maXJtSm9pbkdhbWUoc29ja2V0LCByb29tQ29kZSk7XG4gIH0pXG5cbiAgaW5pdFRyaWdnZXIoKTtcblxuICByZXR1cm4gaW5pdFVJUHJvbWlzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhpZGVJbml0aWFsU2NyZWVuKCkge1xuICBsZXQgaW5pdGlhbFNjcmVlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbml0aWFsLXNjcmVlbicpO1xuICBpbml0aWFsU2NyZWVuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59XG5cblxuZnVuY3Rpb24gc2hvd0pvaW5HYW1lUHJvbXB0KCkge1xuXG59XG5cbmZ1bmN0aW9uIG5ld0dhbWUoc29ja2V0KSB7XG4gIHNvY2tldC5lbWl0KCduZXdHYW1lJyk7XG4gIGluaXRHYW1lKHNvY2tldCk7XG59XG5cbmZ1bmN0aW9uIGNvbmZpcm1Kb2luR2FtZShzb2NrZXQsIHJvb21Db2RlKSB7XG4gIHNvY2tldC5lbWl0KCdqb2luR2FtZScsIHJvb21Db2RlKTtcbiAgaW5pdEdhbWUoc29ja2V0KTtcbn1cblxuZnVuY3Rpb24gaW5pdEdhbWUoc29ja2V0KSB7XG4gIHNvY2tldC5lbWl0KCdwbGF5ZXJKb2luZWQnLCBwbGF5ZXJKb2luZWRIYW5kbGVyKTtcbn1cblxuXG5mdW5jdGlvbiBwbGF5ZXJKb2luZWRIYW5kbGVyKG51bWJlcikge1xuICBwbGF5ZXJOdW1iZXIgPSBudW1iZXI7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgaW5pdFVJLCBoaWRlSW5pdGlhbFNjcmVlbiB9IGZyb20gJy4vdWknO1xuaW1wb3J0IHsgZ2FtZUJ1aWxkZXIgfSBmcm9tICcuL2NvcmUvZ2FtZSdcbmNvbnN0IHNvY2tldCA9IHJlcXVpcmUoJ3NvY2tldC5pby1jbGllbnQnKSgnaHR0cDovL2xvY2FsaG9zdDozMDAwJyk7XG5sZXQgdWlJbml0UHJvbWlzZSA9IGluaXRVSShzb2NrZXQpO1xubGV0IGdhbWUgPSBnYW1lQnVpbGRlcigpO1xubGV0IGdhbWVDb250b2xsZXI7XG5cbnVpSW5pdFByb21pc2UudGhlbigoKSA9PiB7XG4gIGdhbWUuc3RhcnQoKTtcbn0pXG5nYW1lLnByb21pc2UudGhlbigoaW5zdGFuY2UpID0+IHtcbiAgZ2FtZUNvbnRvbGxlciA9IGluc3RhbmNlO1xufSlcblxuc29ja2V0Lm9uKCdncmVldGluZycsIGdyZWV0aW5nSGFuZGxlcik7XG5cbnNvY2tldC5vbignZ2FtZUluaXQnLCAocGxheWVyTnVtYmVyKSA9PiB7XG4gIGhpZGVJbml0aWFsU2NyZWVuKCk7XG4gIGdhbWVDb250b2xsZXIuZHJhd0NvdXJ0KCk7XG59KVxuXG5mdW5jdGlvbiBncmVldGluZ0hhbmRsZXIoKSB7XG5cbn1cblxuXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwic291cmNlUm9vdCI6IiJ9