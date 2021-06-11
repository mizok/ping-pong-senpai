/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./core/engine.js":
/*!************************!*\
  !*** ./core/engine.js ***!
  \************************/
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
        (0,_lib_shape__WEBPACK_IMPORTED_MODULE_1__.drawText)(this.ctx, "Player".concat(i), data.clients[i].cursor.x + this.config.cursor.radius, data.clients[i].cursor.y + this.config.cursor.radius / 2 - 10, '#fff', '12px Arial');
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
/* harmony import */ var _core_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/engine */ "./core/engine.js");

var HOST = location.origin.replace(/^http/, 'ws');
var ws = new WebSocket(HOST);
var id = new Date().getTime();
var gameController;
var localData = {
  login: false,
  id: id,
  cursor: {
    x: 0,
    y: 0
  }
};
var game = (0,_core_engine__WEBPACK_IMPORTED_MODULE_0__.gameBuilder)();
game.promise.then(function (instance) {
  localData.login = true;
  document.body.addEventListener('mousemove', function (event) {
    localData.cursor.x = event.pageX;
    localData.cursor.y = event.pageY;
  });
  gameController = instance;
});

ws.onmessage = function (event) {
  // 取回整體遊戲當前狀況資料
  var dataFromServer = JSON.parse(event.data);

  if (dataFromServer.connected === true) {
    ws.send(JSON.stringify(localData));
    game.start();
  } else {
    // 渲染遊戲畫面
    gameController.draw(dataFromServer); // 把當前玩家操作狀況送給server
    // 注意送出前都要先轉字串

    ws.send(JSON.stringify(localData));
  }
};

ws.onclose = function (event) {
  ws.send(JSON.stringify(localData));
};
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vY29yZS9lbmdpbmUuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL2NvcmUvbGliL2Jhc2UuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL2NvcmUvbGliL2Z1bmN0aW9uLmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9jb3JlL2xpYi9zaGFwZS5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL21lcnNlbm5lLXR3aXN0ZXIvc3JjL21lcnNlbm5lLXR3aXN0ZXIuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9pbmRleC5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vc3JjL3Njc3MvbWFpbi5zY3NzIl0sIm5hbWVzIjpbIkRFRkFVTFQiLCJiZ0NvbG9yIiwiY3Vyc29yIiwiY29sb3IiLCJyYWRpdXMiLCJFbmdpbmUiLCJlbGUiLCJkZWZhdWx0Q29uZmlnIiwiY29uZmlnIiwiaW5pdCIsImJhY2tncm91bmQiLCJkYXRhIiwibG9jYWxEYXRhIiwiaSIsImNsaWVudHMiLCJsZW5ndGgiLCJkcmF3Q2lyY2xlIiwiY3R4IiwieCIsInkiLCJkcmF3VGV4dCIsIkNhbnZhczJERnhCYXNlIiwiZ2FtZUJ1aWxkZXIiLCJnYW1lIiwiYm9vdCIsImlzIiwiT2JqZWN0IiwiYXNzaWduIiwiZnJhbWVDb3VudCIsIm1vdXNlIiwiZnJhbWVJc1BhdXNlZCIsImlzQ2xpY2siLCJjYW52YXNTaXplZml4ZWQiLCJwcmV2aW91c0ZyYW1lVGltZSIsIkRhdGUiLCJnZXRUaW1lIiwiaW5pdEJhc2UiLCJ0YWdOYW1lIiwiY3ZzIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY2FudmFzV2lkdGgiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ3aWR0aCIsImNhbnZhc0hlaWdodCIsImhlaWdodCIsInBhcmVudEVsZW1lbnQiLCJnZXRDb250ZXh0IiwidHJpZ2dlclJlc2l6aW5nTWVjaGFuaXNtIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImRlYm91bmNlIiwidmlzaWJpbGl0eVN0YXRlIiwiYWRkRXZlbnRIYW5kbGVyIiwicmVmcmVzaEJhc2VGcmFtZUNvdW50ZXIiLCJ0aGlzRnJhbWVUaW1lIiwidGltZUVsYXBzZWQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJzYXZlIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJyZXN0b3JlIiwiY2xlYXJSZWN0IiwiZSIsInBvcyIsInBvaW50ZXJFdmVudFRvWFkiLCJjdG9yIiwidHJpZ2dlck9uRG9tQ29udGVudExvYWRlZCIsImNhbnZhcyIsImdldEVsZW1lbnRCeUlkIiwiYm9keSIsImJvb3Ryb21pc2UiLCJ0cmlnZ2VyIiwiUHJvbWlzZSIsInJlcyIsInJlaiIsImluc3RhbmNlIiwicHJvbWlzZSIsInN0YXJ0IiwiTWVyc2VubmVUd2lzdGVyIiwicmVxdWlyZSIsIk1UIiwiZnVuYyIsImRlbGF5IiwidGltZXIiLCIkdGhpcyIsImNvbnRleHQiLCJhcmdzIiwiYXJndW1lbnRzIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImFwcGx5IiwiYXJyIiwiYSIsIkFycmF5IiwiaXNBcnJheSIsIm9iaiIsInByb3RvdHlwZSIsInRvU3RyaW5nIiwiY2FsbCIsImluZGV4T2YiLCJwdGgiLCJoYXNPd25Qcm9wZXJ0eSIsInN2ZyIsIlNWR0VsZW1lbnQiLCJpbnAiLCJIVE1MSW5wdXRFbGVtZW50IiwiZG9tIiwibm9kZVR5cGUiLCJzdHIiLCJmbmMiLCJ1bmQiLCJuaWwiLCJoZXgiLCJ0ZXN0IiwicmdiYSIsInJnYiIsImhzbCIsImNvbCIsImtleSIsImRlZmF1bHRJbnN0YW5jZVNldHRpbmdzIiwiZGVmYXVsdFR3ZWVuU2V0dGluZ3MiLCJyYW5kb21XaXRoaW5SYW5nZSIsIm1pbiIsIm1heCIsInNlZWQiLCJyYW5kb20iLCJnZXREaXN0YW5jZSIsIngwIiwieTAiLCJ4MSIsInkxIiwiTWF0aCIsInNxcnQiLCJkZWdyZWVUb1JhZGlhbiIsImRlZ3JlZSIsIlBJIiwib3V0IiwidHlwZSIsInRvdWNoIiwib3JpZ2luYWxFdmVudCIsInRvdWNoZXMiLCJjaGFuZ2VkVG91Y2hlcyIsInBhZ2VYIiwicGFnZVkiLCJ0YXJnZXRIYXNQcm9wIiwidGFyZ2V0IiwicHJvcCIsImlzRW1wdHkiLCJ2YWwiLCJpc05hTiIsInJnYlRvUmdiYSIsInJnYlZhbHVlIiwiZXhlYyIsImhleFRvUmdiYSIsImhleFZhbHVlIiwicmd4IiwicmVwbGFjZSIsIm0iLCJyIiwiZyIsImIiLCJwYXJzZUludCIsImhzbFRvUmdiYSIsImhzbFZhbHVlIiwiaCIsInMiLCJsIiwiaHVlMnJnYiIsInAiLCJxIiwidCIsImNvbG9yVG9SZ2JhIiwiZ2V0Q2hhbm5lbFZhbHVlc0Zyb21SZ2JhIiwic3BsaXQiLCJtYXAiLCJkcmF3U3F1YXJlIiwiYWxwaGEiLCJnbG9iYWxBbHBoYSIsImJlZ2luUGF0aCIsImFyYyIsImNsb3NlUGF0aCIsImZpbGwiLCJkcmF3TGluZSIsInN0cm9rZUNvbG9yIiwic3Ryb2tlV2lkdGgiLCJzdHJva2VTdHlsZSIsImxpbmVXaWR0aCIsIm1vdmVUbyIsImxpbmVUbyIsInN0cm9rZSIsInRleHRDb250ZW50IiwiZm9udFNpemUiLCJmb250IiwiZmlsbFRleHQiLCJ1bmRlZmluZWQiLCJOIiwiTSIsIk1BVFJJWF9BIiwiVVBQRVJfTUFTSyIsIkxPV0VSX01BU0siLCJtdCIsIm10aSIsImNvbnN0cnVjdG9yIiwiaW5pdF9ieV9hcnJheSIsImluaXRfc2VlZCIsImluaXRfa2V5Iiwia2V5X2xlbmd0aCIsImoiLCJrIiwicmFuZG9tX2ludCIsIm1hZzAxIiwia2siLCJyYW5kb21faW50MzEiLCJyYW5kb21faW5jbCIsInJhbmRvbV9leGNsIiwicmFuZG9tX2xvbmciLCJtb2R1bGUiLCJleHBvcnRzIiwiSE9TVCIsImxvY2F0aW9uIiwib3JpZ2luIiwid3MiLCJXZWJTb2NrZXQiLCJpZCIsImdhbWVDb250cm9sbGVyIiwibG9naW4iLCJ0aGVuIiwiZXZlbnQiLCJvbm1lc3NhZ2UiLCJkYXRhRnJvbVNlcnZlciIsIkpTT04iLCJwYXJzZSIsImNvbm5lY3RlZCIsInNlbmQiLCJzdHJpbmdpZnkiLCJkcmF3Iiwib25jbG9zZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLE9BQU8sR0FBRztBQUNkQyxTQUFPLEVBQUUsaUJBREs7QUFFZEMsUUFBTSxFQUFFO0FBQ05DLFNBQUssRUFBRSxNQUREO0FBRU5DLFVBQU0sRUFBRTtBQUZGO0FBRk0sQ0FBaEI7QUFRTyxJQUFNQyxNQUFiO0FBQUE7O0FBQUE7O0FBQ0Usa0JBQVlDLEdBQVosRUFBaUJDLGFBQWpCLEVBQWdDQyxNQUFoQyxFQUF3QztBQUFBOztBQUFBOztBQUN0Qyw4QkFBTUYsR0FBTixFQUFXQyxhQUFYLEVBQTBCQyxNQUExQjs7QUFDQSxVQUFLQyxJQUFMOztBQUNBLFVBQUtMLE1BQUwsR0FBYyxFQUFkO0FBSHNDO0FBSXZDOztBQUxIO0FBQUE7QUFBQSxXQU1FLGdCQUFPO0FBQ0wsV0FBS00sVUFBTCxDQUFnQixLQUFLRixNQUFMLENBQVlQLE9BQTVCO0FBQ0Q7QUFSSDtBQUFBO0FBQUEsV0FTRSxjQUFLVSxJQUFMLEVBQVdDLFNBQVgsRUFBc0I7QUFD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LEdBSEQ7QUFJQWlGLGdCQUFjLEdBQUdySixRQUFqQjtBQUNELENBUEQ7O0FBU0FrSixFQUFFLENBQUNPLFNBQUgsR0FBZSxVQUFDRCxLQUFELEVBQVc7QUFDeEI7QUFDQSxNQUFJRSxjQUFjLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXSixLQUFLLENBQUMzTixJQUFqQixDQUFyQjs7QUFFQSxNQUFJNk4sY0FBYyxDQUFDRyxTQUFmLEtBQTZCLElBQWpDLEVBQXVDO0FBQ3JDWCxNQUFFLENBQUNZLElBQUgsQ0FBUUgsSUFBSSxDQUFDSSxTQUFMLENBQWVqTyxTQUFmLENBQVI7QUFFQVcsUUFBSSxDQUFDeUQsS0FBTDtBQUNELEdBSkQsTUFLSztBQUNIO0FBQ0FtSixrQkFBYyxDQUFDVyxJQUFmLENBQW9CTixjQUFwQixFQUZHLENBR0g7QUFDQTs7QUFDQVIsTUFBRSxDQUFDWSxJQUFILENBQVFILElBQUksQ0FBQ0ksU0FBTCxDQUFlak8sU0FBZixDQUFSO0FBQ0Q7QUFFRixDQWpCRDs7QUFtQkFvTixFQUFFLENBQUNlLE9BQUgsR0FBYSxVQUFDVCxLQUFELEVBQVc7QUFDdEJOLElBQUUsQ0FBQ1ksSUFBSCxDQUFRSCxJQUFJLENBQUNJLFNBQUwsQ0FBZWpPLFNBQWYsQ0FBUjtBQUNELENBRkQsQzs7Ozs7Ozs7O0FDNUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYW52YXMyREZ4QmFzZSwgYm9vdCB9IGZyb20gJy4vbGliL2Jhc2UnO1xuaW1wb3J0IHsgZHJhd0NpcmNsZSwgZHJhd1RleHQgfSBmcm9tICcuL2xpYi9zaGFwZSc7XG5cbmNvbnN0IERFRkFVTFQgPSB7XG4gIGJnQ29sb3I6ICdyZ2JhKDAsMCwwLDAuMyknLFxuICBjdXJzb3I6IHtcbiAgICBjb2xvcjogJyNmZmYnLFxuICAgIHJhZGl1czogNTBcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRW5naW5lIGV4dGVuZHMgQ2FudmFzMkRGeEJhc2Uge1xuICBjb25zdHJ1Y3RvcihlbGUsIGRlZmF1bHRDb25maWcsIGNvbmZpZykge1xuICAgIHN1cGVyKGVsZSwgZGVmYXVsdENvbmZpZywgY29uZmlnKVxuICAgIHRoaXMuaW5pdCgpO1xuICAgIHRoaXMucmFkaXVzID0gNTA7XG4gIH1cbiAgaW5pdCgpIHtcbiAgICB0aGlzLmJhY2tncm91bmQodGhpcy5jb25maWcuYmdDb2xvcik7XG4gIH1cbiAgZHJhdyhkYXRhLCBsb2NhbERhdGEpIHtcbiAgICB0aGlzLmJhY2tncm91bmQodGhpcy5jb25maWcuYmdDb2xvcik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmNsaWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRyYXdDaXJjbGUoXG4gICAgICAgIHRoaXMuY3R4LFxuICAgICAgICBkYXRhLmNsaWVudHNbaV0uY3Vyc29yLngsXG4gICAgICAgIGRhdGEuY2xpZW50c1tpXS5jdXJzb3IueSxcbiAgICAgICAgdGhpcy5jb25maWcuY3Vyc29yLnJhZGl1cyxcbiAgICAgICAgdGhpcy5jb25maWcuY3Vyc29yLmNvbG9yXG4gICAgICApXG5cbiAgICAgIGRyYXdUZXh0KFxuICAgICAgICB0aGlzLmN0eCwgYFBsYXllciR7aX1gLFxuICAgICAgICBkYXRhLmNsaWVudHNbaV0uY3Vyc29yLnggKyB0aGlzLmNvbmZpZy5jdXJzb3IucmFkaXVzLFxuICAgICAgICBkYXRhLmNsaWVudHNbaV0uY3Vyc29yLnkgKyB0aGlzLmNvbmZpZy5jdXJzb3IucmFkaXVzIC8gMiAtIDEwLFxuICAgICAgICAnI2ZmZicsXG4gICAgICAgICcxMnB4IEFyaWFsJ1xuICAgICAgKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2FtZUJ1aWxkZXIoKSB7XG4gIGxldCBnYW1lID0gYm9vdChFbmdpbmUsIERFRkFVTFQsIHt9LCBmYWxzZSk7XG4gIHJldHVybiBnYW1lO1xufVxuIiwiaW1wb3J0IHsgZGVib3VuY2UsIGlzLCBwb2ludGVyRXZlbnRUb1hZIH0gZnJvbSAnLi9mdW5jdGlvbic7XG5cbmV4cG9ydCBjbGFzcyBDYW52YXMyREZ4QmFzZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIGVsZSwgY29uZmlnLCBkZWZhdWx0Q29uZmlnXG4gICkge1xuICAgIGNvbmZpZyA9IGlzLm9iaihjb25maWcpID8gY29uZmlnIDoge307XG4gICAgZGVmYXVsdENvbmZpZyA9IGlzLm9iaihkZWZhdWx0Q29uZmlnKSA/IGRlZmF1bHRDb25maWcgOiB7fTtcbiAgICB0aGlzLmNvbmZpZyA9IE9iamVjdC5hc3NpZ24oZGVmYXVsdENvbmZpZywgY29uZmlnKTtcbiAgICB0aGlzLmVsZSA9IGVsZTtcbiAgICB0aGlzLmZyYW1lQ291bnQgPSAwO1xuICAgIHRoaXMubW91c2UgPSB7XG4gICAgICB4OiAwLFxuICAgICAgeTogMFxuICAgIH07XG4gICAgdGhpcy5jdHggPSBudWxsO1xuICAgIHRoaXMuZnJhbWVJc1BhdXNlZCA9IGZhbHNlO1xuICAgIHRoaXMuaXNDbGljayA9IGZhbHNlO1xuICAgIHRoaXMuY2FudmFzU2l6ZWZpeGVkID0gZmFsc2U7XG4gICAgdGhpcy5wcmV2aW91c0ZyYW1lVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIHRoaXMuaW5pdEJhc2UoKTtcbiAgfVxuICBpbml0QmFzZSgpIHtcbiAgICBpZiAodGhpcy5lbGUudGFnTmFtZSAhPT0gJ0NBTlZBUycpIHtcbiAgICAgIGNvbnN0IGN2cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgdGhpcy5lbGUuYXBwZW5kQ2hpbGQoY3ZzKTtcbiAgICAgIHRoaXMuY3ZzID0gdGhpcy5lbGUucXVlcnlTZWxlY3RvckFsbCgnY2FudmFzJylbMF07XG4gICAgICB0aGlzLmNhbnZhc1dpZHRoID0gdGhpcy5lbGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gICAgICB0aGlzLmNhbnZhc0hlaWdodCA9IHRoaXMuZWxlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmN2cyA9IHRoaXMuZWxlO1xuICAgICAgdGhpcy5jYW52YXNXaWR0aCA9IHRoaXMuZWxlLnBhcmVudEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gICAgICB0aGlzLmNhbnZhc0hlaWdodCA9IHRoaXMuZWxlLnBhcmVudEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuICAgIH1cblxuICAgIHRoaXMuY3R4ID0gdGhpcy5jdnMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICB0aGlzLnRyaWdnZXJSZXNpemluZ01lY2hhbmlzbSgpO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGRlYm91bmNlKCgpID0+IHtcbiAgICAgIHRoaXMudHJpZ2dlclJlc2l6aW5nTWVjaGFuaXNtKCk7XG4gICAgfSwgNTAwKSk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndmlzaWJpbGl0eWNoYW5nZScsICgpID0+IHtcbiAgICAgIGlmIChkb2N1bWVudC52aXNpYmlsaXR5U3RhdGUgIT09IFwidmlzaWJsZVwiKSB7XG4gICAgICAgIHRoaXMuZnJhbWVJc1BhdXNlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLmFkZEV2ZW50SGFuZGxlcigpO1xuXG4gICAgdGhpcy5yZWZyZXNoQmFzZUZyYW1lQ291bnRlcigpO1xuXG4gIH1cbiAgcmVmcmVzaEJhc2VGcmFtZUNvdW50ZXIoKSB7XG4gICAgbGV0IHRoaXNGcmFtZVRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICB0aGlzLnRpbWVFbGFwc2VkID0gKHRoaXNGcmFtZVRpbWUgLSB0aGlzLnByZXZpb3VzRnJhbWVUaW1lKSAvIDEwMDA7XG4gICAgaWYgKHRoaXMuZnJhbWVJc1BhdXNlZCkge1xuICAgICAgdGhpcy50aW1lRWxhcHNlZCA9IDA7XG4gICAgICB0aGlzLmZyYW1lSXNQYXVzZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5mcmFtZUNvdW50ICs9IDE7XG4gICAgdGhpcy5wcmV2aW91c0ZyYW1lVGltZSA9IHRoaXNGcmFtZVRpbWVcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgdGhpcy5yZWZyZXNoQmFzZUZyYW1lQ291bnRlcigpO1xuICAgIH0pXG4gIH1cbiAgdHJpZ2dlclJlc2l6aW5nTWVjaGFuaXNtKCkge1xuICAgIGlmICh0aGlzLmNhbnZhc1NpemVmaXhlZCkgcmV0dXJuO1xuICAgIGlmICh0aGlzLmVsZS50YWdOYW1lICE9PSAnQ0FOVkFTJykge1xuICAgICAgbGV0IGNhbnZhc1dpZHRoID0gdGhpcy5lbGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gICAgICBsZXQgY2FudmFzSGVpZ2h0ID0gdGhpcy5lbGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuICAgICAgdGhpcy5jdnMud2lkdGggPSBjYW52YXNXaWR0aDtcbiAgICAgIHRoaXMuY3ZzLmhlaWdodCA9IGNhbnZhc0hlaWdodDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBsZXQgY2FudmFzV2lkdGggPSB0aGlzLmN2cy5wYXJlbnRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICAgICAgbGV0IGNhbnZhc0hlaWdodCA9IHRoaXMuY3ZzLnBhcmVudEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuICAgICAgdGhpcy5jdnMud2lkdGggPSBjYW52YXNXaWR0aDtcbiAgICAgIHRoaXMuY3ZzLmhlaWdodCA9IGNhbnZhc0hlaWdodDtcbiAgICB9XG4gIH1cblxuXG4gIHNldENhbnZhc1NpemUod2lkdGgsIGhlaWdodCkge1xuICAgIHRoaXMuY2FudmFzU2l6ZWZpeGVkID0gdHJ1ZTtcbiAgICB0aGlzLmN2cy53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuY3ZzLmhlaWdodCA9IGhlaWdodDtcbiAgfVxuXG4gIGJhY2tncm91bmQoY29sb3IpIHtcbiAgICB0aGlzLmN0eC5zYXZlKCk7XG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gY29sb3I7XG4gICAgdGhpcy5jdHguZmlsbFJlY3QoMCwgMCwgdGhpcy5jdnMud2lkdGgsIHRoaXMuY3ZzLmhlaWdodCk7XG4gICAgdGhpcy5jdHgucmVzdG9yZSgpO1xuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY3ZzLndpZHRoLCB0aGlzLmN2cy5oZWlnaHQpO1xuICB9XG5cblxuXG4gIGFkZEV2ZW50SGFuZGxlcigpIHtcbiAgICB0aGlzLmN2cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMuaXNDbGljayA9IHRydWU7XG4gICAgfSlcbiAgICB0aGlzLmN2cy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgKCkgPT4ge1xuICAgICAgdGhpcy5pc0NsaWNrID0gdHJ1ZTtcblxuICAgIH0pXG5cbiAgICB0aGlzLmN2cy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZSkgPT4ge1xuICAgICAgbGV0IHBvcyA9IHBvaW50ZXJFdmVudFRvWFkoZSk7XG4gICAgICB0aGlzLm1vdXNlID0ge1xuICAgICAgICB4OiBwb3MueCxcbiAgICAgICAgeTogcG9zLnlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5jdnMuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgKGUpID0+IHtcbiAgICAgIGxldCBwb3MgPSBwb2ludGVyRXZlbnRUb1hZKGUpO1xuICAgICAgdGhpcy5tb3VzZSA9IHtcbiAgICAgICAgeDogcG9zLngsXG4gICAgICAgIHk6IHBvcy55XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib290KGN0b3IsIGRlZmF1bHRDb25maWcsIGNvbmZpZywgdHJpZ2dlck9uRG9tQ29udGVudExvYWRlZCkge1xuICBsZXQgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpO1xuICBjYW52YXMgPSBjYW52YXMgPyBjYW52YXMgOiBkb2N1bWVudC5ib2R5O1xuICBsZXQgYm9vdHJvbWlzZSwgdHJpZ2dlcjtcbiAgaWYgKHRyaWdnZXJPbkRvbUNvbnRlbnRMb2FkZWQpIHtcbiAgICBib290cm9taXNlID0gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgICAgICBsZXQgaW5zdGFuY2UgPSBuZXcgY3RvcihjYW52YXMsIGNvbmZpZywgZGVmYXVsdENvbmZpZyk7XG4gICAgICAgIHJlcyhpbnN0YW5jZSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBlbHNlIHtcbiAgICBib290cm9taXNlID0gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XG4gICAgICB0cmlnZ2VyID0gKCkgPT4ge1xuICAgICAgICBsZXQgaW5zdGFuY2UgPSBuZXcgY3RvcihjYW52YXMsIGNvbmZpZywgZGVmYXVsdENvbmZpZyk7XG4gICAgICAgIHJlcyhpbnN0YW5jZSk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9taXNlOiBib290cm9taXNlLFxuICAgIHN0YXJ0OiB0cmlnZ2VyXG4gIH1cbn0iLCJjb25zdCBNZXJzZW5uZVR3aXN0ZXIgPSByZXF1aXJlKCdtZXJzZW5uZS10d2lzdGVyJyk7XG5jb25zdCBNVCA9IG5ldyBNZXJzZW5uZVR3aXN0ZXIoKTtcblxuXG5leHBvcnQgZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgZGVsYXkpIHtcbiAgbGV0IHRpbWVyID0gbnVsbDtcbiAgY29uc3QgJHRoaXMgPSB0aGlzO1xuICByZXR1cm4gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRleHQgPSAkdGhpcztcbiAgICBjb25zdCBhcmdzID0gYXJndW1lbnRzO1xuICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgfSwgZGVsYXkpO1xuICB9O1xufVxuXG5leHBvcnQgY29uc3QgaXMgPSB7XG4gIGFycjogYSA9PiBBcnJheS5pc0FycmF5KGEpLFxuICBvYmo6IGEgPT4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGEpLmluZGV4T2YoJ09iamVjdCcpID4gLTEsXG4gIHB0aDogYSA9PiBpcy5vYmooYSkgJiYgYS5oYXNPd25Qcm9wZXJ0eSgndG90YWxMZW5ndGgnKSxcbiAgc3ZnOiBhID0+IGEgaW5zdGFuY2VvZiBTVkdFbGVtZW50LFxuICBpbnA6IGEgPT4gYSBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQsXG4gIGRvbTogYSA9PiBhLm5vZGVUeXBlIHx8IGlzLnN2ZyhhKSxcbiAgc3RyOiBhID0+IHR5cGVvZiBhID09PSAnc3RyaW5nJyxcbiAgZm5jOiBhID0+IHR5cGVvZiBhID09PSAnZnVuY3Rpb24nLFxuICB1bmQ6IGEgPT4gdHlwZW9mIGEgPT09ICd1bmRlZmluZWQnLFxuICBuaWw6IGEgPT4gaXMudW5kKGEpIHx8IGEgPT09IG51bGwsXG4gIGhleDogYSA9PiAvKF4jWzAtOUEtRl17Nn0kKXwoXiNbMC05QS1GXXszfSQpL2kudGVzdChhKSxcbiAgcmdiYTogYSA9PiAvXnJnYmEvLnRlc3QoYSksXG4gIHJnYjogYSA9PiAvXnJnYi8udGVzdChhKSxcbiAgaHNsOiBhID0+IC9eaHNsLy50ZXN0KGEpLFxuICBjb2w6IGEgPT4gKGlzLmhleChhKSB8fCBpcy5yZ2IoYSkgfHwgaXMuaHNsKGEpKSxcbiAga2V5OiBhID0+ICFkZWZhdWx0SW5zdGFuY2VTZXR0aW5ncy5oYXNPd25Qcm9wZXJ0eShhKSAmJiAhZGVmYXVsdFR3ZWVuU2V0dGluZ3MuaGFzT3duUHJvcGVydHkoYSkgJiYgYSAhPT0gJ3RhcmdldHMnICYmIGEgIT09ICdrZXlmcmFtZXMnLFxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tV2l0aGluUmFuZ2UobWluLCBtYXgsIHNlZWQpIHtcbiAgcmV0dXJuIE1ULnJhbmRvbShzZWVkKSAqIChtYXggLSBtaW4pICsgbWluO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzdGFuY2UoeDAsIHkwLCB4MSwgeTEpIHtcbiAgcmV0dXJuIE1hdGguc3FydCgoeDEgLSB4MCkgKiAoeDEgLSB4MCkgKyAoeTEgLSB5MCkgKiAoeTEgLSB5MCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVncmVlVG9SYWRpYW4oZGVncmVlKSB7XG4gIHJldHVybiAoZGVncmVlIC8gMTgwKSAqIE1hdGguUEk7XG59XG5cbi8qKlxuICog57Wx5LiAIHRvdWNoRXZlbnQvbW91c2VFdmVudCDnmoTkuovku7bop7jnmbzluqfmqJnlj5blvpfmlrnlvI9cbiAqIEBleHBvcnRcbiAqIEBwYXJhbSB7b2JqZWN0fSAg5YKz5YWl55qEZXZlbnQg54mp5Lu2XG4gKiBAcmV0dXJucyB7T2JqZWN0fSDkuIDlgIvnianku7YsIOWFp+WQq+S6i+S7tuinuOeZvOW6p+aomeeahFgvWSDluqfmqJnlgLxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBvaW50ZXJFdmVudFRvWFkoZSkge1xuICB2YXIgb3V0ID0geyB4OiAwLCB5OiAwIH07XG4gIGlmIChlLnR5cGUgPT09ICd0b3VjaHN0YXJ0JyB8fCBlLnR5cGUgPT09ICd0b3VjaG1vdmUnIHx8IGUudHlwZSA9PT0gJ3RvdWNoZW5kJyB8fCBlLnR5cGUgPT09ICd0b3VjaGNhbmNlbCcpIHtcbiAgICB2YXIgdG91Y2ggPSBlLm9yaWdpbmFsRXZlbnQudG91Y2hlc1swXSB8fCBlLm9yaWdpbmFsRXZlbnQuY2hhbmdlZFRvdWNoZXNbMF07XG4gICAgb3V0LnggPSB0b3VjaC5wYWdlWDtcbiAgICBvdXQueSA9IHRvdWNoLnBhZ2VZO1xuICB9IGVsc2UgaWYgKGUudHlwZSA9PT0gJ21vdXNlZG93bicgfHwgZS50eXBlID09PSAnbW91c2V1cCcgfHwgZS50eXBlID09PSAnbW91c2Vtb3ZlJyB8fCBlLnR5cGUgPT09ICdtb3VzZW92ZXInIHx8IGUudHlwZSA9PT0gJ21vdXNlb3V0JyB8fCBlLnR5cGUgPT09ICdtb3VzZWVudGVyJyB8fCBlLnR5cGUgPT09ICdtb3VzZWxlYXZlJykge1xuICAgIG91dC54ID0gZS5wYWdlWDtcbiAgICBvdXQueSA9IGUucGFnZVk7XG4gIH1cbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiDnm7TmjqXlkbzlj6toYXNPd25Qcm9wZXJ0eeeahOWOn+Wei+aWueazlSjnlKjlnKhoYXNPd25Qcm9wZXJ0eeiiq+aUueWLlemBjueahOeLgOazgSlcbiAqXG4gKiBAZXhwb3J0XG4gKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0IOebruaomeeJqeS7tlxuICogQHBhcmFtIHtzdHJpbmd9IHByb3Ag55uu5qiZcHJvcFxuICogQHJldHVybnMge2Jvb2xlYW59IOaYry/lkKZcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRhcmdldEhhc1Byb3AodGFyZ2V0LCBwcm9wKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodGFyZ2V0LCBwcm9wKTtcbn1cblxuLyoqXG4gKiDnorroqo3kuIDlgIvorormlbgv5YC85piv5ZCm54K656m6KDDkuI3nrpfnqbrlgLwpXG4gKiBAZXhwb3J0XG4gKiBAcGFyYW0geyp9IHZhbFxuICogQHJldHVybnMge2Jvb2xlYW59IOaYry/lkKZcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzRW1wdHkodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnbnVtYmVyJyA/IGlzTmFOKHZhbCkgOiAhdmFsO1xufVxuXG5cbmZ1bmN0aW9uIHJnYlRvUmdiYShyZ2JWYWx1ZSkge1xuICBjb25zdCByZ2IgPSAvcmdiXFwoKFxcZCssXFxzKltcXGRdKyxcXHMqW1xcZF0rKVxcKS9nLmV4ZWMocmdiVmFsdWUpO1xuICByZXR1cm4gcmdiID8gYHJnYmEoJHtyZ2JbMV19LDEpYCA6IHJnYlZhbHVlO1xufVxuXG5mdW5jdGlvbiBoZXhUb1JnYmEoaGV4VmFsdWUpIHtcbiAgY29uc3Qgcmd4ID0gL14jPyhbYS1mXFxkXSkoW2EtZlxcZF0pKFthLWZcXGRdKSQvaTtcbiAgY29uc3QgaGV4ID0gaGV4VmFsdWUucmVwbGFjZShyZ3gsIChtLCByLCBnLCBiKSA9PiByICsgciArIGcgKyBnICsgYiArIGIpO1xuICBjb25zdCByZ2IgPSAvXiM/KFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pJC9pLmV4ZWMoaGV4KTtcbiAgY29uc3QgciA9IHBhcnNlSW50KHJnYlsxXSwgMTYpO1xuICBjb25zdCBnID0gcGFyc2VJbnQocmdiWzJdLCAxNik7XG4gIGNvbnN0IGIgPSBwYXJzZUludChyZ2JbM10sIDE2KTtcbiAgcmV0dXJuIGByZ2JhKCR7cn0sJHtnfSwke2J9LDEpYDtcbn1cblxuZnVuY3Rpb24gaHNsVG9SZ2JhKGhzbFZhbHVlKSB7XG4gIGNvbnN0IGhzbCA9IC9oc2xcXCgoXFxkKyksXFxzKihbXFxkLl0rKSUsXFxzKihbXFxkLl0rKSVcXCkvZy5leGVjKGhzbFZhbHVlKSB8fCAvaHNsYVxcKChcXGQrKSxcXHMqKFtcXGQuXSspJSxcXHMqKFtcXGQuXSspJSxcXHMqKFtcXGQuXSspXFwpL2cuZXhlYyhoc2xWYWx1ZSk7XG4gIGNvbnN0IGggPSBwYXJzZUludChoc2xbMV0sIDEwKSAvIDM2MDtcbiAgY29uc3QgcyA9IHBhcnNlSW50KGhzbFsyXSwgMTApIC8gMTAwO1xuICBjb25zdCBsID0gcGFyc2VJbnQoaHNsWzNdLCAxMCkgLyAxMDA7XG4gIGNvbnN0IGEgPSBoc2xbNF0gfHwgMTtcbiAgZnVuY3Rpb24gaHVlMnJnYihwLCBxLCB0KSB7XG4gICAgaWYgKHQgPCAwKSB0ICs9IDE7XG4gICAgaWYgKHQgPiAxKSB0IC09IDE7XG4gICAgaWYgKHQgPCAxIC8gNikgcmV0dXJuIHAgKyAocSAtIHApICogNiAqIHQ7XG4gICAgaWYgKHQgPCAxIC8gMikgcmV0dXJuIHE7XG4gICAgaWYgKHQgPCAyIC8gMykgcmV0dXJuIHAgKyAocSAtIHApICogKDIgLyAzIC0gdCkgKiA2O1xuICAgIHJldHVybiBwO1xuICB9XG4gIGxldCByLCBnLCBiO1xuICBpZiAocyA9PSAwKSB7XG4gICAgciA9IGcgPSBiID0gbDtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBxID0gbCA8IDAuNSA/IGwgKiAoMSArIHMpIDogbCArIHMgLSBsICogcztcbiAgICBjb25zdCBwID0gMiAqIGwgLSBxO1xuICAgIHIgPSBodWUycmdiKHAsIHEsIGggKyAxIC8gMyk7XG4gICAgZyA9IGh1ZTJyZ2IocCwgcSwgaCk7XG4gICAgYiA9IGh1ZTJyZ2IocCwgcSwgaCAtIDEgLyAzKTtcbiAgfVxuICByZXR1cm4gYHJnYmEoJHtyICogMjU1fSwke2cgKiAyNTV9LCR7YiAqIDI1NX0sJHthfSlgO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29sb3JUb1JnYmEodmFsKSB7XG4gIGlmIChpcy5yZ2IodmFsKSkgcmV0dXJuIHJnYlRvUmdiYSh2YWwpO1xuICBpZiAoaXMuaGV4KHZhbCkpIHJldHVybiBoZXhUb1JnYmEodmFsKTtcbiAgaWYgKGlzLmhzbCh2YWwpKSByZXR1cm4gaHNsVG9SZ2JhKHZhbCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDaGFubmVsVmFsdWVzRnJvbVJnYmEocmdiYSkge1xuICByZXR1cm4gcmdiYS5yZXBsYWNlKC9eKHJnYnxyZ2JhKVxcKC8sICcnKS5yZXBsYWNlKC9cXCkkLywgJycpLnJlcGxhY2UoL1xccy9nLCAnJykuc3BsaXQoJywnKS5tYXAoeCA9PiBwYXJzZUludCh4KSk7XG59XG5cblxuIiwiZXhwb3J0IGZ1bmN0aW9uIGRyYXdTcXVhcmUoY3R4LCB4LCB5LCB3aWR0aCwgY29sb3IsIGFscGhhKSB7XG4gIGN0eC5zYXZlKCk7XG4gIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgY3R4Lmdsb2JhbEFscGhhID0gYWxwaGE7XG4gIGN0eC5maWxsUmVjdCh4IC0gd2lkdGggLyAyLCB5IC0gd2lkdGggLyAyLCB3aWR0aCwgd2lkdGgpO1xuICBjdHgucmVzdG9yZSgpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGRyYXdDaXJjbGUoY3R4LCB4LCB5LCB3aWR0aCwgY29sb3IsIGFscGhhKSB7XG4gIGN0eC5zYXZlKClcbiAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICBjdHguZ2xvYmFsQWxwaGEgPSBhbHBoYTtcbiAgY3R4LmJlZ2luUGF0aCgpO1xuICBjdHguYXJjKHgsIHksIHdpZHRoIC8gMiwgMCwgTWF0aC5QSSAqIDIsIHRydWUpO1xuICBjdHguY2xvc2VQYXRoKCk7XG4gIGN0eC5maWxsKCk7XG4gIGN0eC5yZXN0b3JlKCk7XG59XG5leHBvcnQgZnVuY3Rpb24gZHJhd0xpbmUoY3R4LCB4MCwgeTAsIHgxLCB5MSwgc3Ryb2tlQ29sb3IsIHN0cm9rZVdpZHRoKSB7XG4gIGN0eC5zYXZlKCk7XG4gIGN0eC5zdHJva2VTdHlsZSA9IHN0cm9rZUNvbG9yO1xuICBjdHgubGluZVdpZHRoID0gc3Ryb2tlV2lkdGg7XG4gIGN0eC5iZWdpblBhdGgoKTtcbiAgY3R4Lm1vdmVUbyh4MCwgeTApO1xuICBjdHgubGluZVRvKHgxLCB5MSk7XG4gIGN0eC5jbG9zZVBhdGgoKTtcbiAgY3R4LnN0cm9rZSgpO1xuICBjdHgucmVzdG9yZSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZHJhd1RleHQoY3R4LCB0ZXh0Q29udGVudCA9ICd0ZXh0JywgeCwgeSwgY29sb3IgPSAnIzAwMCcsIGZvbnRTaXplID0gMTIsIGZvbnQgPSAnQXJpYWwnKSB7XG4gIGN0eC5zYXZlKCk7XG4gIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgY3R4LmZvbnQgPSBgJHtmb250U2l6ZX1weCAke2ZvbnR9YDtcbiAgY3R4LmZpbGxUZXh0KHRleHRDb250ZW50LCB4LCB5KTtcbiAgY3R4LnJlc3RvcmUoKTtcbn0iLCIvKlxuICBodHRwczovL2dpdGh1Yi5jb20vYmFua3NlYW4gd3JhcHBlZCBNYWtvdG8gTWF0c3Vtb3RvIGFuZCBUYWt1amkgTmlzaGltdXJhJ3MgY29kZSBpbiBhIG5hbWVzcGFjZVxuICBzbyBpdCdzIGJldHRlciBlbmNhcHN1bGF0ZWQuIE5vdyB5b3UgY2FuIGhhdmUgbXVsdGlwbGUgcmFuZG9tIG51bWJlciBnZW5lcmF0b3JzXG4gIGFuZCB0aGV5IHdvbid0IHN0b21wIGFsbCBvdmVyIGVhY2hvdGhlcidzIHN0YXRlLlxuXG4gIElmIHlvdSB3YW50IHRvIHVzZSB0aGlzIGFzIGEgc3Vic3RpdHV0ZSBmb3IgTWF0aC5yYW5kb20oKSwgdXNlIHRoZSByYW5kb20oKVxuICBtZXRob2QgbGlrZSBzbzpcblxuICB2YXIgbSA9IG5ldyBNZXJzZW5uZVR3aXN0ZXIoKTtcbiAgdmFyIHJhbmRvbU51bWJlciA9IG0ucmFuZG9tKCk7XG5cbiAgWW91IGNhbiBhbHNvIGNhbGwgdGhlIG90aGVyIGdlbnJhbmRfe2Zvb30oKSBtZXRob2RzIG9uIHRoZSBpbnN0YW5jZS5cblxuICBJZiB5b3Ugd2FudCB0byB1c2UgYSBzcGVjaWZpYyBzZWVkIGluIG9yZGVyIHRvIGdldCBhIHJlcGVhdGFibGUgcmFuZG9tXG4gIHNlcXVlbmNlLCBwYXNzIGFuIGludGVnZXIgaW50byB0aGUgY29uc3RydWN0b3I6XG5cbiAgdmFyIG0gPSBuZXcgTWVyc2VubmVUd2lzdGVyKDEyMyk7XG5cbiAgYW5kIHRoYXQgd2lsbCBhbHdheXMgcHJvZHVjZSB0aGUgc2FtZSByYW5kb20gc2VxdWVuY2UuXG5cbiAgU2VhbiBNY0N1bGxvdWdoIChiYW5rc2VhbkBnbWFpbC5jb20pXG4qL1xuXG4vKlxuICAgQSBDLXByb2dyYW0gZm9yIE1UMTk5MzcsIHdpdGggaW5pdGlhbGl6YXRpb24gaW1wcm92ZWQgMjAwMi8xLzI2LlxuICAgQ29kZWQgYnkgVGFrdWppIE5pc2hpbXVyYSBhbmQgTWFrb3RvIE1hdHN1bW90by5cblxuICAgQmVmb3JlIHVzaW5nLCBpbml0aWFsaXplIHRoZSBzdGF0ZSBieSB1c2luZyBpbml0X3NlZWQoc2VlZClcbiAgIG9yIGluaXRfYnlfYXJyYXkoaW5pdF9rZXksIGtleV9sZW5ndGgpLlxuXG4gICBDb3B5cmlnaHQgKEMpIDE5OTcgLSAyMDAyLCBNYWtvdG8gTWF0c3Vtb3RvIGFuZCBUYWt1amkgTmlzaGltdXJhLFxuICAgQWxsIHJpZ2h0cyByZXNlcnZlZC5cblxuICAgUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0XG4gICBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnNcbiAgIGFyZSBtZXQ6XG5cbiAgICAgMS4gUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHRcbiAgICAgICAgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuXG4gICAgIDIuIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0XG4gICAgICAgIG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lciBpbiB0aGVcbiAgICAgICAgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlIGRpc3RyaWJ1dGlvbi5cblxuICAgICAzLiBUaGUgbmFtZXMgb2YgaXRzIGNvbnRyaWJ1dG9ycyBtYXkgbm90IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlXG4gICAgICAgIHByb2R1Y3RzIGRlcml2ZWQgZnJvbSB0aGlzIHNvZnR3YXJlIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlblxuICAgICAgICBwZXJtaXNzaW9uLlxuXG4gICBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTXG4gICBcIkFTIElTXCIgQU5EIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UXG4gICBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1JcbiAgIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELiAgSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVCBPV05FUiBPUlxuICAgQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsXG4gICBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sXG4gICBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSwgREFUQSwgT1JcbiAgIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWSBUSEVPUlkgT0ZcbiAgIExJQUJJTElUWSwgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HXG4gICBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GIFRISVNcbiAgIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuXG5cbiAgIEFueSBmZWVkYmFjayBpcyB2ZXJ5IHdlbGNvbWUuXG4gICBodHRwOi8vd3d3Lm1hdGguc2NpLmhpcm9zaGltYS11LmFjLmpwL35tLW1hdC9NVC9lbXQuaHRtbFxuICAgZW1haWw6IG0tbWF0IEAgbWF0aC5zY2kuaGlyb3NoaW1hLXUuYWMuanAgKHJlbW92ZSBzcGFjZSlcbiovXG5cbnZhciBNZXJzZW5uZVR3aXN0ZXIgPSBmdW5jdGlvbihzZWVkKSB7XG5cdGlmIChzZWVkID09IHVuZGVmaW5lZCkge1xuXHRcdHNlZWQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblx0fVxuXG5cdC8qIFBlcmlvZCBwYXJhbWV0ZXJzICovXG5cdHRoaXMuTiA9IDYyNDtcblx0dGhpcy5NID0gMzk3O1xuXHR0aGlzLk1BVFJJWF9BID0gMHg5OTA4YjBkZjsgICAvKiBjb25zdGFudCB2ZWN0b3IgYSAqL1xuXHR0aGlzLlVQUEVSX01BU0sgPSAweDgwMDAwMDAwOyAvKiBtb3N0IHNpZ25pZmljYW50IHctciBiaXRzICovXG5cdHRoaXMuTE9XRVJfTUFTSyA9IDB4N2ZmZmZmZmY7IC8qIGxlYXN0IHNpZ25pZmljYW50IHIgYml0cyAqL1xuXG5cdHRoaXMubXQgPSBuZXcgQXJyYXkodGhpcy5OKTsgLyogdGhlIGFycmF5IGZvciB0aGUgc3RhdGUgdmVjdG9yICovXG5cdHRoaXMubXRpPXRoaXMuTisxOyAvKiBtdGk9PU4rMSBtZWFucyBtdFtOXSBpcyBub3QgaW5pdGlhbGl6ZWQgKi9cblxuXHRpZiAoc2VlZC5jb25zdHJ1Y3RvciA9PSBBcnJheSkge1xuXHRcdHRoaXMuaW5pdF9ieV9hcnJheShzZWVkLCBzZWVkLmxlbmd0aCk7XG5cdH1cblx0ZWxzZSB7XG5cdFx0dGhpcy5pbml0X3NlZWQoc2VlZCk7XG5cdH1cbn1cblxuLyogaW5pdGlhbGl6ZXMgbXRbTl0gd2l0aCBhIHNlZWQgKi9cbi8qIG9yaWdpbiBuYW1lIGluaXRfZ2VucmFuZCAqL1xuTWVyc2VubmVUd2lzdGVyLnByb3RvdHlwZS5pbml0X3NlZWQgPSBmdW5jdGlvbihzKSB7XG5cdHRoaXMubXRbMF0gPSBzID4+PiAwO1xuXHRmb3IgKHRoaXMubXRpPTE7IHRoaXMubXRpPHRoaXMuTjsgdGhpcy5tdGkrKykge1xuXHRcdHZhciBzID0gdGhpcy5tdFt0aGlzLm10aS0xXSBeICh0aGlzLm10W3RoaXMubXRpLTFdID4+PiAzMCk7XG5cdFx0dGhpcy5tdFt0aGlzLm10aV0gPSAoKCgoKHMgJiAweGZmZmYwMDAwKSA+Pj4gMTYpICogMTgxMjQzMzI1MykgPDwgMTYpICsgKHMgJiAweDAwMDBmZmZmKSAqIDE4MTI0MzMyNTMpXG5cdFx0KyB0aGlzLm10aTtcblx0XHQvKiBTZWUgS251dGggVEFPQ1AgVm9sMi4gM3JkIEVkLiBQLjEwNiBmb3IgbXVsdGlwbGllci4gKi9cblx0XHQvKiBJbiB0aGUgcHJldmlvdXMgdmVyc2lvbnMsIE1TQnMgb2YgdGhlIHNlZWQgYWZmZWN0ICAgKi9cblx0XHQvKiBvbmx5IE1TQnMgb2YgdGhlIGFycmF5IG10W10uICAgICAgICAgICAgICAgICAgICAgICAgKi9cblx0XHQvKiAyMDAyLzAxLzA5IG1vZGlmaWVkIGJ5IE1ha290byBNYXRzdW1vdG8gICAgICAgICAgICAgKi9cblx0XHR0aGlzLm10W3RoaXMubXRpXSA+Pj49IDA7XG5cdFx0LyogZm9yID4zMiBiaXQgbWFjaGluZXMgKi9cblx0fVxufVxuXG4vKiBpbml0aWFsaXplIGJ5IGFuIGFycmF5IHdpdGggYXJyYXktbGVuZ3RoICovXG4vKiBpbml0X2tleSBpcyB0aGUgYXJyYXkgZm9yIGluaXRpYWxpemluZyBrZXlzICovXG4vKiBrZXlfbGVuZ3RoIGlzIGl0cyBsZW5ndGggKi9cbi8qIHNsaWdodCBjaGFuZ2UgZm9yIEMrKywgMjAwNC8yLzI2ICovXG5NZXJzZW5uZVR3aXN0ZXIucHJvdG90eXBlLmluaXRfYnlfYXJyYXkgPSBmdW5jdGlvbihpbml0X2tleSwga2V5X2xlbmd0aCkge1xuXHR2YXIgaSwgaiwgaztcblx0dGhpcy5pbml0X3NlZWQoMTk2NTAyMTgpO1xuXHRpPTE7IGo9MDtcblx0ayA9ICh0aGlzLk4+a2V5X2xlbmd0aCA/IHRoaXMuTiA6IGtleV9sZW5ndGgpO1xuXHRmb3IgKDsgazsgay0tKSB7XG5cdFx0dmFyIHMgPSB0aGlzLm10W2ktMV0gXiAodGhpcy5tdFtpLTFdID4+PiAzMClcblx0XHR0aGlzLm10W2ldID0gKHRoaXMubXRbaV0gXiAoKCgoKHMgJiAweGZmZmYwMDAwKSA+Pj4gMTYpICogMTY2NDUyNSkgPDwgMTYpICsgKChzICYgMHgwMDAwZmZmZikgKiAxNjY0NTI1KSkpXG5cdFx0KyBpbml0X2tleVtqXSArIGo7IC8qIG5vbiBsaW5lYXIgKi9cblx0XHR0aGlzLm10W2ldID4+Pj0gMDsgLyogZm9yIFdPUkRTSVpFID4gMzIgbWFjaGluZXMgKi9cblx0XHRpKys7IGorKztcblx0XHRpZiAoaT49dGhpcy5OKSB7IHRoaXMubXRbMF0gPSB0aGlzLm10W3RoaXMuTi0xXTsgaT0xOyB9XG5cdFx0aWYgKGo+PWtleV9sZW5ndGgpIGo9MDtcblx0fVxuXHRmb3IgKGs9dGhpcy5OLTE7IGs7IGstLSkge1xuXHRcdHZhciBzID0gdGhpcy5tdFtpLTFdIF4gKHRoaXMubXRbaS0xXSA+Pj4gMzApO1xuXHRcdHRoaXMubXRbaV0gPSAodGhpcy5tdFtpXSBeICgoKCgocyAmIDB4ZmZmZjAwMDApID4+PiAxNikgKiAxNTY2MDgzOTQxKSA8PCAxNikgKyAocyAmIDB4MDAwMGZmZmYpICogMTU2NjA4Mzk0MSkpXG5cdFx0LSBpOyAvKiBub24gbGluZWFyICovXG5cdFx0dGhpcy5tdFtpXSA+Pj49IDA7IC8qIGZvciBXT1JEU0laRSA+IDMyIG1hY2hpbmVzICovXG5cdFx0aSsrO1xuXHRcdGlmIChpPj10aGlzLk4pIHsgdGhpcy5tdFswXSA9IHRoaXMubXRbdGhpcy5OLTFdOyBpPTE7IH1cblx0fVxuXG5cdHRoaXMubXRbMF0gPSAweDgwMDAwMDAwOyAvKiBNU0IgaXMgMTsgYXNzdXJpbmcgbm9uLXplcm8gaW5pdGlhbCBhcnJheSAqL1xufVxuXG4vKiBnZW5lcmF0ZXMgYSByYW5kb20gbnVtYmVyIG9uIFswLDB4ZmZmZmZmZmZdLWludGVydmFsICovXG4vKiBvcmlnaW4gbmFtZSBnZW5yYW5kX2ludDMyICovXG5NZXJzZW5uZVR3aXN0ZXIucHJvdG90eXBlLnJhbmRvbV9pbnQgPSBmdW5jdGlvbigpIHtcblx0dmFyIHk7XG5cdHZhciBtYWcwMSA9IG5ldyBBcnJheSgweDAsIHRoaXMuTUFUUklYX0EpO1xuXHQvKiBtYWcwMVt4XSA9IHggKiBNQVRSSVhfQSAgZm9yIHg9MCwxICovXG5cblx0aWYgKHRoaXMubXRpID49IHRoaXMuTikgeyAvKiBnZW5lcmF0ZSBOIHdvcmRzIGF0IG9uZSB0aW1lICovXG5cdFx0dmFyIGtrO1xuXG5cdFx0aWYgKHRoaXMubXRpID09IHRoaXMuTisxKSAgLyogaWYgaW5pdF9zZWVkKCkgaGFzIG5vdCBiZWVuIGNhbGxlZCwgKi9cblx0XHRcdHRoaXMuaW5pdF9zZWVkKDU0ODkpOyAgLyogYSBkZWZhdWx0IGluaXRpYWwgc2VlZCBpcyB1c2VkICovXG5cblx0XHRmb3IgKGtrPTA7a2s8dGhpcy5OLXRoaXMuTTtraysrKSB7XG5cdFx0XHR5ID0gKHRoaXMubXRba2tdJnRoaXMuVVBQRVJfTUFTSyl8KHRoaXMubXRba2srMV0mdGhpcy5MT1dFUl9NQVNLKTtcblx0XHRcdHRoaXMubXRba2tdID0gdGhpcy5tdFtrayt0aGlzLk1dIF4gKHkgPj4+IDEpIF4gbWFnMDFbeSAmIDB4MV07XG5cdFx0fVxuXHRcdGZvciAoO2trPHRoaXMuTi0xO2trKyspIHtcblx0XHRcdHkgPSAodGhpcy5tdFtra10mdGhpcy5VUFBFUl9NQVNLKXwodGhpcy5tdFtraysxXSZ0aGlzLkxPV0VSX01BU0spO1xuXHRcdFx0dGhpcy5tdFtra10gPSB0aGlzLm10W2trKyh0aGlzLk0tdGhpcy5OKV0gXiAoeSA+Pj4gMSkgXiBtYWcwMVt5ICYgMHgxXTtcblx0XHR9XG5cdFx0eSA9ICh0aGlzLm10W3RoaXMuTi0xXSZ0aGlzLlVQUEVSX01BU0spfCh0aGlzLm10WzBdJnRoaXMuTE9XRVJfTUFTSyk7XG5cdFx0dGhpcy5tdFt0aGlzLk4tMV0gPSB0aGlzLm10W3RoaXMuTS0xXSBeICh5ID4+PiAxKSBeIG1hZzAxW3kgJiAweDFdO1xuXG5cdFx0dGhpcy5tdGkgPSAwO1xuXHR9XG5cblx0eSA9IHRoaXMubXRbdGhpcy5tdGkrK107XG5cblx0LyogVGVtcGVyaW5nICovXG5cdHkgXj0gKHkgPj4+IDExKTtcblx0eSBePSAoeSA8PCA3KSAmIDB4OWQyYzU2ODA7XG5cdHkgXj0gKHkgPDwgMTUpICYgMHhlZmM2MDAwMDtcblx0eSBePSAoeSA+Pj4gMTgpO1xuXG5cdHJldHVybiB5ID4+PiAwO1xufVxuXG4vKiBnZW5lcmF0ZXMgYSByYW5kb20gbnVtYmVyIG9uIFswLDB4N2ZmZmZmZmZdLWludGVydmFsICovXG4vKiBvcmlnaW4gbmFtZSBnZW5yYW5kX2ludDMxICovXG5NZXJzZW5uZVR3aXN0ZXIucHJvdG90eXBlLnJhbmRvbV9pbnQzMSA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gKHRoaXMucmFuZG9tX2ludCgpPj4+MSk7XG59XG5cbi8qIGdlbmVyYXRlcyBhIHJhbmRvbSBudW1iZXIgb24gWzAsMV0tcmVhbC1pbnRlcnZhbCAqL1xuLyogb3JpZ2luIG5hbWUgZ2VucmFuZF9yZWFsMSAqL1xuTWVyc2VubmVUd2lzdGVyLnByb3RvdHlwZS5yYW5kb21faW5jbCA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcy5yYW5kb21faW50KCkqKDEuMC80Mjk0OTY3Mjk1LjApO1xuXHQvKiBkaXZpZGVkIGJ5IDJeMzItMSAqL1xufVxuXG4vKiBnZW5lcmF0ZXMgYSByYW5kb20gbnVtYmVyIG9uIFswLDEpLXJlYWwtaW50ZXJ2YWwgKi9cbk1lcnNlbm5lVHdpc3Rlci5wcm90b3R5cGUucmFuZG9tID0gZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzLnJhbmRvbV9pbnQoKSooMS4wLzQyOTQ5NjcyOTYuMCk7XG5cdC8qIGRpdmlkZWQgYnkgMl4zMiAqL1xufVxuXG4vKiBnZW5lcmF0ZXMgYSByYW5kb20gbnVtYmVyIG9uICgwLDEpLXJlYWwtaW50ZXJ2YWwgKi9cbi8qIG9yaWdpbiBuYW1lIGdlbnJhbmRfcmVhbDMgKi9cbk1lcnNlbm5lVHdpc3Rlci5wcm90b3R5cGUucmFuZG9tX2V4Y2wgPSBmdW5jdGlvbigpIHtcblx0cmV0dXJuICh0aGlzLnJhbmRvbV9pbnQoKSArIDAuNSkqKDEuMC80Mjk0OTY3Mjk2LjApO1xuXHQvKiBkaXZpZGVkIGJ5IDJeMzIgKi9cbn1cblxuLyogZ2VuZXJhdGVzIGEgcmFuZG9tIG51bWJlciBvbiBbMCwxKSB3aXRoIDUzLWJpdCByZXNvbHV0aW9uKi9cbi8qIG9yaWdpbiBuYW1lIGdlbnJhbmRfcmVzNTMgKi9cbk1lcnNlbm5lVHdpc3Rlci5wcm90b3R5cGUucmFuZG9tX2xvbmcgPSBmdW5jdGlvbigpIHtcblx0dmFyIGE9dGhpcy5yYW5kb21faW50KCk+Pj41LCBiPXRoaXMucmFuZG9tX2ludCgpPj4+Njtcblx0cmV0dXJuKGEqNjcxMDg4NjQuMCtiKSooMS4wLzkwMDcxOTkyNTQ3NDA5OTIuMCk7XG59XG5cbi8qIFRoZXNlIHJlYWwgdmVyc2lvbnMgYXJlIGR1ZSB0byBJc2FrdSBXYWRhLCAyMDAyLzAxLzA5IGFkZGVkICovXG5cbm1vZHVsZS5leHBvcnRzID0gTWVyc2VubmVUd2lzdGVyO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgZ2FtZUJ1aWxkZXIgfSBmcm9tICcuL2NvcmUvZW5naW5lJztcblxubGV0IEhPU1QgPSBsb2NhdGlvbi5vcmlnaW4ucmVwbGFjZSgvXmh0dHAvLCAnd3MnKVxubGV0IHdzID0gbmV3IFdlYlNvY2tldChIT1NUKTtcbmxldCBpZCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xubGV0IGdhbWVDb250cm9sbGVyO1xubGV0IGxvY2FsRGF0YSA9IHtcbiAgbG9naW46IGZhbHNlLFxuICBpZDogaWQsXG4gIGN1cnNvcjoge1xuICAgIHg6IDAsXG4gICAgeTogMFxuICB9XG59XG5cbmxldCBnYW1lID0gZ2FtZUJ1aWxkZXIoKTtcbmdhbWUucHJvbWlzZS50aGVuKChpbnN0YW5jZSkgPT4ge1xuICBsb2NhbERhdGEubG9naW4gPSB0cnVlO1xuICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChldmVudCkgPT4ge1xuICAgIGxvY2FsRGF0YS5jdXJzb3IueCA9IGV2ZW50LnBhZ2VYO1xuICAgIGxvY2FsRGF0YS5jdXJzb3IueSA9IGV2ZW50LnBhZ2VZO1xuICB9KVxuICBnYW1lQ29udHJvbGxlciA9IGluc3RhbmNlO1xufSlcblxud3Mub25tZXNzYWdlID0gKGV2ZW50KSA9PiB7XG4gIC8vIOWPluWbnuaVtOmrlOmBiuaIsueVtuWJjeeLgOazgeizh+aWmVxuICBsZXQgZGF0YUZyb21TZXJ2ZXIgPSBKU09OLnBhcnNlKGV2ZW50LmRhdGEpO1xuXG4gIGlmIChkYXRhRnJvbVNlcnZlci5jb25uZWN0ZWQgPT09IHRydWUpIHtcbiAgICB3cy5zZW5kKEpTT04uc3RyaW5naWZ5KGxvY2FsRGF0YSkpO1xuXG4gICAgZ2FtZS5zdGFydCgpO1xuICB9XG4gIGVsc2Uge1xuICAgIC8vIOa4suafk+mBiuaIsueVq+mdolxuICAgIGdhbWVDb250cm9sbGVyLmRyYXcoZGF0YUZyb21TZXJ2ZXIpO1xuICAgIC8vIOaKiueVtuWJjeeOqeWutuaTjeS9nOeLgOazgemAgee1pnNlcnZlclxuICAgIC8vIOazqOaEj+mAgeWHuuWJjemDveimgeWFiOi9ieWtl+S4slxuICAgIHdzLnNlbmQoSlNPTi5zdHJpbmdpZnkobG9jYWxEYXRhKSk7XG4gIH1cblxufTtcblxud3Mub25jbG9zZSA9IChldmVudCkgPT4ge1xuICB3cy5zZW5kKEpTT04uc3RyaW5naWZ5KGxvY2FsRGF0YSkpO1xufVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sInNvdXJjZVJvb3QiOiIifQ==