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
  var game = (0,_lib_base__WEBPACK_IMPORTED_MODULE_0__.boot)(Engine, DEFAULT, {}, document.body);
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
  function Canvas2DFxBase(ele, config, defaultConfig, virtualParent) {
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
    key: "virtualParentValidation",
    value: function virtualParentValidation() {
      return document.body.contains(this.virtualParent) || this.virtualParent === document.body;
    }
  }, {
    key: "triggerResizingMechanism",
    value: function triggerResizingMechanism() {
      if (this.canvasSizefixed) return;

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
/* harmony export */   "toggle": function() { return /* binding */ toggle; }
/* harmony export */ });
function $(selector) {
  return document.querySelector(selector);
}
function toggle(selector, status) {
  $(selector).setAttribute(style, status ? 'block' : 'none');
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
  period: 200,
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
        $this.background('rgba(255,255,255,0.1)');
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
      console.log(this.cvs);
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
        this.spotsSize += 1;
      } else {
        this.spotsSize -= 1;
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
      color: 'grey',
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
/* harmony import */ var _core_lib_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/lib/dom */ "./core/lib/dom.js");


function initUI(socket) {
  var createGameBtn = (0,_core_lib_dom__WEBPACK_IMPORTED_MODULE_1__.$)('#create-game');
  var showJoinGamePromptBtn = (0,_core_lib_dom__WEBPACK_IMPORTED_MODULE_1__.$)('#show-join-game-prompt');
  var confirmJoinGameBtn = (0,_core_lib_dom__WEBPACK_IMPORTED_MODULE_1__.$)('#confirm-join-game');
  var roomCodeInput = (0,_core_lib_dom__WEBPACK_IMPORTED_MODULE_1__.$)('#room-code-input');
  var roomCodeDisplay = (0,_core_lib_dom__WEBPACK_IMPORTED_MODULE_1__.$)('#room-code-display');
  var initTrigger;
  var initUIPromise = new Promise(function (res, rej) {
    initTrigger = res;
  }); //bind events

  showJoinGamePromptBtn.addEventListener('click', function () {
    togglePopout('join-game-prompt', true);
  });
  createGameBtn.addEventListener('click', function () {
    newGame(socket);
  });
  confirmJoinGameBtn.addEventListener('click', function () {
    var roomCode = roomCodeInput.value;
    confirmJoinGame(socket, roomCode);
  });
  socket.on('genRoomCode', function (data) {
    roomCodeDisplay.innerHTML = data;
  });
  initTrigger();
  return initUIPromise;
}

function togglePopout(id, status) {
  var popout = (0,_core_lib_dom__WEBPACK_IMPORTED_MODULE_1__.$)(".popout#".concat(id));

  if (status) {
    popout.classList.add('popout--show');
  } else {
    popout.classList.remove('popout--show');
  }
}

function hideInitialScreen() {
  var initialScreen = (0,_core_lib_dom__WEBPACK_IMPORTED_MODULE_1__.$)('#initial-screen');
  initialScreen.style.display = 'none';
}

function newGame(socket) {
  togglePopout('room-code-display-popout', true);
  socket.emit('newGame');
}

function confirmJoinGame(socket, roomCode) {
  socket.emit('joinGame', roomCode);
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
/* harmony import */ var _core_lib_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/lib/dom */ "./core/lib/dom.js");





var socket = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/build/index.js")('http://localhost:3000');

(0,_core_splash__WEBPACK_IMPORTED_MODULE_1__.initSplash)();
var uiInitPromise = (0,_ui__WEBPACK_IMPORTED_MODULE_0__.initUI)(socket);
var game = (0,_core_game__WEBPACK_IMPORTED_MODULE_2__.gameBuilder)();
var gameContoller;

var toggleWaitingOpponent = function toggleWaitingOpponent(status) {
  (0,_core_lib_dom__WEBPACK_IMPORTED_MODULE_3__.toggle)('#game-start', status);
  (0,_core_lib_dom__WEBPACK_IMPORTED_MODULE_3__.toggle)('#wait-opponent-msg', !status);
};

uiInitPromise.then(function () {
  game.trigger();
});
game.promise.then(function (instance) {
  gameContoller = instance;
});
socket.on('greeting', greetingHandler);
socket.on('gameInit', function () {
  (0,_ui__WEBPACK_IMPORTED_MODULE_0__.hideInitialScreen)();
  gameContoller.drawCourt();
});
socket.on('playerJoined', function (playerNumber) {
  if (playerNumber === 2) {
    toggleWaitingOpponent(true);
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vY29yZS9nYW1lLmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9jb3JlL2xpYi9iYXNlLmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9jb3JlL2xpYi9kb20uanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL2NvcmUvbGliL2Z1bmN0aW9uLmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9jb3JlL2xpYi9zaGFwZS5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vY29yZS9zcGxhc2guanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL2RhdGEuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9iYWNrbzIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9iYXNlNjQtYXJyYXlidWZmZXIvbGliL2Jhc2U2NC1hcnJheWJ1ZmZlci5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL2NvbXBvbmVudC1lbWl0dGVyL2luZGV4LmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvZGVidWcvbm9kZV9tb2R1bGVzL21zL2luZGV4LmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvZGVidWcvc3JjL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9kZWJ1Zy9zcmMvY29tbW9uLmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9saWIvZ2xvYmFsVGhpcy5icm93c2VyLmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2xpYi9zb2NrZXQuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2xpYi90cmFuc3BvcnQuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2xpYi90cmFuc3BvcnRzL2luZGV4LmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9saWIvdHJhbnNwb3J0cy9wb2xsaW5nLWpzb25wLmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9saWIvdHJhbnNwb3J0cy9wb2xsaW5nLXhoci5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvbGliL3RyYW5zcG9ydHMvcG9sbGluZy5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvbGliL3RyYW5zcG9ydHMvd2Vic29ja2V0LWNvbnN0cnVjdG9yLmJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2xpYi90cmFuc3BvcnRzL3dlYnNvY2tldC5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvbGliL3V0aWwuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2xpYi94bWxodHRwcmVxdWVzdC5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1wYXJzZXIvbGliL2NvbW1vbnMuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tcGFyc2VyL2xpYi9kZWNvZGVQYWNrZXQuYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1wYXJzZXIvbGliL2VuY29kZVBhY2tldC5icm93c2VyLmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLXBhcnNlci9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9oYXMtY29ycy9pbmRleC5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL21lcnNlbm5lLXR3aXN0ZXIvc3JjL21lcnNlbm5lLXR3aXN0ZXIuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9wYXJzZXFzL2luZGV4LmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvcGFyc2V1cmkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tY2xpZW50L2J1aWxkL2luZGV4LmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLWNsaWVudC9idWlsZC9tYW5hZ2VyLmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLWNsaWVudC9idWlsZC9vbi5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1jbGllbnQvYnVpbGQvc29ja2V0LmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLWNsaWVudC9idWlsZC90eXBlZC1ldmVudHMuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tY2xpZW50L2J1aWxkL3VybC5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1wYXJzZXIvZGlzdC9iaW5hcnkuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tcGFyc2VyL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tcGFyc2VyL2Rpc3QvaXMtYmluYXJ5LmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMveWVhc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL3VpLmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL3NyYy9zY3NzL21haW4uc2NzcyJdLCJuYW1lcyI6WyJERUZBVUxUIiwiYmdDb2xvciIsImN1cnNvciIsImNvbG9yIiwicmFkaXVzIiwiRW5naW5lIiwiZWxlIiwiZGVmYXVsdENvbmZpZyIsImNvbmZpZyIsImluaXQiLCJiYWNrZ3JvdW5kIiwiZGF0YSIsImxvY2FsRGF0YSIsImkiLCJjbGllbnRzIiwibGVuZ3RoIiwiZHJhd0NpcmNsZSIsImN0eCIsIngiLCJ5IiwiZHJhd1RleHQiLCJDYW52YXMyREZ4QmFzZSIsImdhbWVCdWlsZGVyIiwiZ2FtZSIsImJvb3QiLCJkb2N1bWVudCIsImJvZHkiLCJ2aXJ0dWFsUGFyZW50IiwiaXMiLCJPYmplY3QiLCJhc3NpZ24iLCJmcmFtZUNvdW50IiwibW91c2UiLCJmcmFtZUlzUGF1c2VkIiwiaXNDbGljayIsImNhbnZhc1NpemVmaXhlZCIsInByZXZpb3VzRnJhbWVUaW1lIiwiRGF0ZSIsImdldFRpbWUiLCJpbml0QmFzZSIsInRhZ05hbWUiLCJjdnMiLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJnZXRDb250ZXh0IiwidHJpZ2dlclJlc2l6aW5nTWVjaGFuaXNtIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImRlYm91bmNlIiwidmlzaWJpbGl0eVN0YXRlIiwiYWRkRXZlbnRIYW5kbGVyIiwicmVmcmVzaEJhc2VGcmFtZUNvdW50ZXIiLCJ0aGlzRnJhbWVUaW1lIiwidGltZUVsYXBzZWQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjb250YWlucyIsImNhbnZhc1dpZHRoIiwiY2FudmFzSGVpZ2h0IiwidmlydHVhbFBhcmVudFZhbGlkYXRpb24iLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ3aWR0aCIsImhlaWdodCIsInBhcmVudEVsZW1lbnQiLCJzYXZlIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJyZXN0b3JlIiwiY2xlYXJSZWN0IiwiZSIsInBvcyIsInBvaW50ZXJFdmVudFRvWFkiLCJjdG9yIiwidGFyZ2V0RWxlIiwiZ2V0RWxlbWVudEJ5SWQiLCJ0cmlnZ2VyIiwiYm9vdFByb21pc2UiLCJQcm9taXNlIiwicmVzIiwicmVqIiwiaW5zdGFuY2UiLCJjb250cm9sbGVyIiwicHJvbWlzZSIsIiQiLCJzZWxlY3RvciIsInF1ZXJ5U2VsZWN0b3IiLCJ0b2dnbGUiLCJzdGF0dXMiLCJzZXRBdHRyaWJ1dGUiLCJzdHlsZSIsIk1lcnNlbm5lVHdpc3RlciIsInJlcXVpcmUiLCJNVCIsImZ1bmMiLCJkZWxheSIsInRpbWVyIiwiJHRoaXMiLCJjb250ZXh0IiwiYXJncyIsImFyZ3VtZW50cyIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJhcHBseSIsImFyciIsImEiLCJBcnJheSIsImlzQXJyYXkiLCJvYmoiLCJwcm90b3R5cGUiLCJ0b1N0cmluZyIsImNhbGwiLCJpbmRleE9mIiwicHRoIiwiaGFzT3duUHJvcGVydHkiLCJzdmciLCJTVkdFbGVtZW50IiwiaW5wIiwiSFRNTElucHV0RWxlbWVudCIsImRvbSIsIm5vZGVUeXBlIiwic3RyIiwiZm5jIiwidW5kIiwibmlsIiwiaGV4IiwidGVzdCIsInJnYmEiLCJyZ2IiLCJoc2wiLCJjb2wiLCJrZXkiLCJkZWZhdWx0SW5zdGFuY2VTZXR0aW5ncyIsImRlZmF1bHRUd2VlblNldHRpbmdzIiwicmFuZG9tV2l0aGluUmFuZ2UiLCJtaW4iLCJtYXgiLCJzZWVkIiwicmFuZG9tIiwiZ2V0RGlzdGFuY2UiLCJ4MCIsInkwIiwieDEiLCJ5MSIsIk1hdGgiLCJzcXJ0IiwiZGVncmVlVG9SYWRpYW4iLCJkZWdyZWUiLCJQSSIsIm91dCIsInR5cGUiLCJ0b3VjaCIsIm9yaWdpbmFsRXZlbnQiLCJ0b3VjaGVzIiwiY2hhbmdlZFRvdWNoZXMiLCJwYWdlWCIsInBhZ2VZIiwidGFyZ2V0SGFzUHJvcCIsInRhcmdldCIsInByb3AiLCJpc0VtcHR5IiwidmFsIiwiaXNOYU4iLCJyZ2JUb1JnYmEiLCJyZ2JWYWx1ZSIsImV4ZWMiLCJoZXhUb1JnYmEiLCJoZXhWYWx1ZSIsInJneCIsInJlcGxhY2UiLCJtIiwiciIsImciLCJiIiwicGFyc2VJbnQiLCJoc2xUb1JnYmEiLCJoc2xWYWx1ZSIsImgiLCJzIiwibCIsImh1ZTJyZ2IiLCJwIiwicSIsInQiLCJjb2xvclRvUmdiYSIsImdldENoYW5uZWxWYWx1ZXNGcm9tUmdiYSIsInNwbGl0IiwibWFwIiwiZHJhd1NxdWFyZSIsImFscGhhIiwiZ2xvYmFsQWxwaGEiLCJiZWdpblBhdGgiLCJhcmMiLCJjbG9zZVBhdGgiLCJmaWxsIiwiZHJhd0xpbmUiLCJzdHJva2VDb2xvciIsInN0cm9rZVdpZHRoIiwic3Ryb2tlU3R5bGUiLCJsaW5lV2lkdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJzdHJva2UiLCJ0ZXh0Q29udGVudCIsImZvbnRTaXplIiwiZm9udCIsImZpbGxUZXh0IiwiQkFMTF9BTklNQVRJT05fREVGQVVMVCIsImFmdGVySW1hZ2UiLCJzcGVlZFgiLCJzcGVlZFkiLCJhY2NlbGVyYXRpb25YIiwiYWNjZWxlcmF0aW9uWSIsImZyaWN0aW9uWCIsImZyaWN0aW9uWSIsIlNQT1RTX0FOSU1BVElPTl9ERUZBVUxUIiwibWluU2l6ZSIsIm1heFNpemUiLCJwZXJpb2QiLCJib3R0b21MYXllciIsInJvdyIsIkJhc2ljUmVmZWxlY3Rpb24iLCJjYW52YXMiLCJpbml0QmFsbCIsImFuaW1hdGVCYWxsIiwiYmFsbCIsImxvY2F0aW9uIiwic3BlZWQiLCJhY2NlbGVyYXRpb24iLCJmcmljdGlvbiIsImRyYXdJbWFnZSIsImRyYXdCYWxsIiwicmVmcmVzaExvY2F0aW9uIiwicmVmcmVzaFNwZWVkIiwiY2hlY2tCb3VuZGFyeSIsImJpbmQiLCJkdCIsIlNwb3RzQnVtcGluZyIsInNwb3RzU2l6ZSIsImV4cGFuZCIsImFuaW1hdGUiLCJjb25zb2xlIiwibG9nIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsZWFyIiwiZHJhd1Nwb3RzIiwiaiIsImluaXRTcGxhc2giLCJpbml0aWFsU2NyZWVuIiwidmlydHVhbENhbnZhcyIsInNwb3RBbmltYXRpb24iLCJ0aGVuIiwiZGF0YVN0b3JhZ2UiLCJwb3NpdGlvbiIsInBsYXllck51bWJlciIsIm1vZHVsZSIsImV4cG9ydHMiLCJCYWNrb2ZmIiwib3B0cyIsIm1zIiwiZmFjdG9yIiwiaml0dGVyIiwiYXR0ZW1wdHMiLCJkdXJhdGlvbiIsInBvdyIsInJhbmQiLCJkZXZpYXRpb24iLCJmbG9vciIsInJlc2V0Iiwic2V0TWluIiwic2V0TWF4Iiwic2V0Sml0dGVyIiwiY2hhcnMiLCJhcnJheWJ1ZmZlciIsImJ5dGVzIiwiVWludDhBcnJheSIsImxlbiIsImJhc2U2NCIsInN1YnN0cmluZyIsImJ1ZmZlckxlbmd0aCIsImVuY29kZWQxIiwiZW5jb2RlZDIiLCJlbmNvZGVkMyIsImVuY29kZWQ0IiwiQXJyYXlCdWZmZXIiLCJFbWl0dGVyIiwibWl4aW4iLCJvbiIsImV2ZW50IiwiZm4iLCJfY2FsbGJhY2tzIiwicHVzaCIsIm9uY2UiLCJvZmYiLCJyZW1vdmVMaXN0ZW5lciIsInJlbW92ZUFsbExpc3RlbmVycyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjYWxsYmFja3MiLCJjYiIsInNwbGljZSIsImVtaXQiLCJzbGljZSIsImxpc3RlbmVycyIsImhhc0xpc3RlbmVycyIsImQiLCJ3Iiwib3B0aW9ucyIsInBhcnNlIiwiaXNGaW5pdGUiLCJsb25nIiwiZm10TG9uZyIsImZtdFNob3J0IiwiRXJyb3IiLCJKU09OIiwic3RyaW5naWZ5IiwiU3RyaW5nIiwibWF0Y2giLCJuIiwicGFyc2VGbG9hdCIsInRvTG93ZXJDYXNlIiwidW5kZWZpbmVkIiwibXNBYnMiLCJhYnMiLCJyb3VuZCIsInBsdXJhbCIsIm5hbWUiLCJpc1BsdXJhbCIsImZvcm1hdEFyZ3MiLCJsb2FkIiwidXNlQ29sb3JzIiwibG9jYWxzdG9yYWdlIiwid2FybmVkIiwid2FybiIsInByb2Nlc3MiLCJfX253anMiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJXZWJraXRBcHBlYXJhbmNlIiwiZmlyZWJ1ZyIsImV4Y2VwdGlvbiIsInRhYmxlIiwiUmVnRXhwIiwiJDEiLCJuYW1lc3BhY2UiLCJodW1hbml6ZSIsImRpZmYiLCJjIiwiaW5kZXgiLCJsYXN0QyIsImRlYnVnIiwibmFtZXNwYWNlcyIsInN0b3JhZ2UiLCJzZXRJdGVtIiwicmVtb3ZlSXRlbSIsImVycm9yIiwiZ2V0SXRlbSIsImVudiIsIkRFQlVHIiwibG9jYWxTdG9yYWdlIiwiZm9ybWF0dGVycyIsInYiLCJtZXNzYWdlIiwic2V0dXAiLCJjcmVhdGVEZWJ1ZyIsImRlZmF1bHQiLCJjb2VyY2UiLCJkaXNhYmxlIiwiZW5hYmxlIiwiZW5hYmxlZCIsImRlc3Ryb3kiLCJrZXlzIiwiZm9yRWFjaCIsIm5hbWVzIiwic2tpcHMiLCJzZWxlY3RDb2xvciIsImhhc2giLCJjaGFyQ29kZUF0IiwiY29sb3JzIiwicHJldlRpbWUiLCJlbmFibGVPdmVycmlkZSIsInNlbGYiLCJjdXJyIiwiTnVtYmVyIiwicHJldiIsInVuc2hpZnQiLCJmb3JtYXQiLCJmb3JtYXR0ZXIiLCJsb2dGbiIsImV4dGVuZCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsImdldCIsInNldCIsImRlbGltaXRlciIsIm5ld0RlYnVnIiwic3Vic3RyIiwidG9OYW1lc3BhY2UiLCJqb2luIiwicmVnZXhwIiwic3RhY2siLCJGdW5jdGlvbiIsIlNvY2tldCIsInVyaSIsInByb3RvY29sIiwidHJhbnNwb3J0cyIsInBhcnNlciIsInBhcnNldXJpIiwicGFyc2VxcyIsImhvc3RuYW1lIiwiaG9zdCIsInNlY3VyZSIsInBvcnQiLCJxdWVyeSIsInJlYWR5U3RhdGUiLCJ3cml0ZUJ1ZmZlciIsInByZXZCdWZmZXJMZW4iLCJwYXRoIiwiYWdlbnQiLCJ3aXRoQ3JlZGVudGlhbHMiLCJ1cGdyYWRlIiwianNvbnAiLCJ0aW1lc3RhbXBQYXJhbSIsInJlbWVtYmVyVXBncmFkZSIsInJlamVjdFVuYXV0aG9yaXplZCIsInBlck1lc3NhZ2VEZWZsYXRlIiwidGhyZXNob2xkIiwidHJhbnNwb3J0T3B0aW9ucyIsImNsb3NlT25CZWZvcmV1bmxvYWQiLCJkZWNvZGUiLCJpZCIsInVwZ3JhZGVzIiwicGluZ0ludGVydmFsIiwicGluZ1RpbWVvdXQiLCJwaW5nVGltZW91dFRpbWVyIiwidHJhbnNwb3J0IiwiY2xvc2UiLCJvZmZsaW5lRXZlbnRMaXN0ZW5lciIsIm9uQ2xvc2UiLCJvcGVuIiwiY2xvbmUiLCJFSU8iLCJzaWQiLCJzb2NrZXQiLCJwcmlvcldlYnNvY2tldFN1Y2Nlc3MiLCJjcmVhdGVUcmFuc3BvcnQiLCJzaGlmdCIsInNldFRyYW5zcG9ydCIsIm9uRHJhaW4iLCJvblBhY2tldCIsIm9uRXJyb3IiLCJwcm9iZSIsImZhaWxlZCIsIm9uVHJhbnNwb3J0T3BlbiIsInNlbmQiLCJtc2ciLCJ1cGdyYWRpbmciLCJwYXVzZSIsImNsZWFudXAiLCJmbHVzaCIsImVyciIsImZyZWV6ZVRyYW5zcG9ydCIsIm9uZXJyb3IiLCJvblRyYW5zcG9ydENsb3NlIiwib25jbG9zZSIsIm9udXBncmFkZSIsInRvIiwicGFja2V0Iiwib25IYW5kc2hha2UiLCJyZXNldFBpbmdUaW1lb3V0Iiwic2VuZFBhY2tldCIsImNvZGUiLCJmaWx0ZXJVcGdyYWRlcyIsIm9uT3BlbiIsImF1dG9VbnJlZiIsInVucmVmIiwid3JpdGFibGUiLCJjb21wcmVzcyIsImNsZWFudXBBbmRDbG9zZSIsIndhaXRGb3JVcGdyYWRlIiwicmVhc29uIiwiZGVzYyIsInBpbmdJbnRlcnZhbFRpbWVyIiwiZmlsdGVyZWRVcGdyYWRlcyIsIm8iLCJUcmFuc3BvcnQiLCJkZXNjcmlwdGlvbiIsImRvT3BlbiIsImRvQ2xvc2UiLCJwYWNrZXRzIiwid3JpdGUiLCJkZWNvZGVQYWNrZXQiLCJiaW5hcnlUeXBlIiwiWE1MSHR0cFJlcXVlc3QiLCJYSFIiLCJKU09OUCIsIndlYnNvY2tldCIsInBvbGxpbmciLCJ4aHIiLCJ4ZCIsInhzIiwiaXNTU0wiLCJ4ZG9tYWluIiwieHNjaGVtZSIsImZvcmNlSlNPTlAiLCJQb2xsaW5nIiwiZ2xvYmFsVGhpcyIsInJOZXdsaW5lIiwickVzY2FwZWROZXdsaW5lIiwiSlNPTlBQb2xsaW5nIiwiX19fZWlvIiwib25EYXRhIiwic2NyaXB0IiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiZm9ybSIsImlmcmFtZSIsImFzeW5jIiwic3JjIiwiaW5zZXJ0QXQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImluc2VydEJlZm9yZSIsImhlYWQiLCJpc1VBZ2Vja28iLCJhcmVhIiwiaWZyYW1lSWQiLCJjbGFzc05hbWUiLCJ0b3AiLCJsZWZ0IiwibWV0aG9kIiwiYWN0aW9uIiwiY29tcGxldGUiLCJpbml0SWZyYW1lIiwiaHRtbCIsInZhbHVlIiwic3VibWl0IiwiYXR0YWNoRXZlbnQiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJvbmxvYWQiLCJwaWNrIiwiZW1wdHkiLCJoYXNYSFIyIiwicmVzcG9uc2VUeXBlIiwiZm9yY2VCYXNlNjQiLCJzdXBwb3J0c0JpbmFyeSIsIlJlcXVlc3QiLCJyZXEiLCJyZXF1ZXN0IiwicG9sbFhociIsImNyZWF0ZSIsImV4dHJhSGVhZGVycyIsInNldERpc2FibGVIZWFkZXJDaGVjayIsInNldFJlcXVlc3RIZWFkZXIiLCJyZXF1ZXN0VGltZW91dCIsInRpbWVvdXQiLCJoYXNYRFIiLCJvbkxvYWQiLCJyZXNwb25zZVRleHQiLCJyZXF1ZXN0c0NvdW50IiwicmVxdWVzdHMiLCJvblN1Y2Nlc3MiLCJmcm9tRXJyb3IiLCJhYm9ydCIsIlhEb21haW5SZXF1ZXN0IiwiZW5hYmxlc1hEUiIsInVubG9hZEhhbmRsZXIiLCJ0ZXJtaW5hdGlvbkV2ZW50IiwieWVhc3QiLCJwb2xsIiwib25QYXVzZSIsInRvdGFsIiwiZG9Qb2xsIiwiY2FsbGJhY2siLCJkZWNvZGVQYXlsb2FkIiwiZW5jb2RlUGF5bG9hZCIsImRvV3JpdGUiLCJzY2hlbWEiLCJ0aW1lc3RhbXBSZXF1ZXN0cyIsImI2NCIsImVuY29kZSIsImlwdjYiLCJXZWJTb2NrZXQiLCJNb3pXZWJTb2NrZXQiLCJ1c2luZ0Jyb3dzZXJXZWJTb2NrZXQiLCJkZWZhdWx0QmluYXJ5VHlwZSIsImlzUmVhY3ROYXRpdmUiLCJwcm9kdWN0IiwiV1MiLCJjaGVjayIsInByb3RvY29scyIsImhlYWRlcnMiLCJ3cyIsImFkZEV2ZW50TGlzdGVuZXJzIiwib25vcGVuIiwiX3NvY2tldCIsIm9ubWVzc2FnZSIsImV2IiwibGFzdFBhY2tldCIsImVuY29kZVBhY2tldCIsIkJ1ZmZlciIsImJ5dGVMZW5ndGgiLCJhdHRyIiwicmVkdWNlIiwiYWNjIiwiayIsImhhc0NPUlMiLCJjb25jYXQiLCJQQUNLRVRfVFlQRVMiLCJQQUNLRVRfVFlQRVNfUkVWRVJTRSIsIkVSUk9SX1BBQ0tFVCIsIndpdGhOYXRpdmVBcnJheUJ1ZmZlciIsImJhc2U2NGRlY29kZXIiLCJlbmNvZGVkUGFja2V0IiwibWFwQmluYXJ5IiwiY2hhckF0IiwiZGVjb2RlQmFzZTY0UGFja2V0IiwicGFja2V0VHlwZSIsImRlY29kZWQiLCJCbG9iIiwid2l0aE5hdGl2ZUJsb2IiLCJpc1ZpZXciLCJidWZmZXIiLCJlbmNvZGVCbG9iQXNCYXNlNjQiLCJmaWxlUmVhZGVyIiwiRmlsZVJlYWRlciIsImNvbnRlbnQiLCJyZXN1bHQiLCJyZWFkQXNEYXRhVVJMIiwiU0VQQVJBVE9SIiwiZnJvbUNoYXJDb2RlIiwiZW5jb2RlZFBhY2tldHMiLCJjb3VudCIsImVuY29kZWRQYXlsb2FkIiwiZGVjb2RlZFBhY2tldCIsIk4iLCJNIiwiTUFUUklYX0EiLCJVUFBFUl9NQVNLIiwiTE9XRVJfTUFTSyIsIm10IiwibXRpIiwiY29uc3RydWN0b3IiLCJpbml0X2J5X2FycmF5IiwiaW5pdF9zZWVkIiwiaW5pdF9rZXkiLCJrZXlfbGVuZ3RoIiwicmFuZG9tX2ludCIsIm1hZzAxIiwia2siLCJyYW5kb21faW50MzEiLCJyYW5kb21faW5jbCIsInJhbmRvbV9leGNsIiwicmFuZG9tX2xvbmciLCJlbmNvZGVVUklDb21wb25lbnQiLCJxcyIsInFyeSIsInBhaXJzIiwicGFpciIsImRlY29kZVVSSUNvbXBvbmVudCIsInJlIiwicGFydHMiLCJzb3VyY2UiLCJhdXRob3JpdHkiLCJpcHY2dXJpIiwicGF0aE5hbWVzIiwicXVlcnlLZXkiLCJyZWd4IiwiJDAiLCIkMiIsInVybF8xIiwibWFuYWdlcl8xIiwibG9va3VwIiwiY2FjaGUiLCJwYXJzZWQiLCJ1cmwiLCJzYW1lTmFtZXNwYWNlIiwibmV3Q29ubmVjdGlvbiIsImZvcmNlTmV3IiwibXVsdGlwbGV4IiwiaW8iLCJNYW5hZ2VyIiwic29ja2V0X2lvX3BhcnNlcl8xIiwibWFuYWdlcl8yIiwic29ja2V0XzEiLCJlaW8iLCJvbl8xIiwidHlwZWRfZXZlbnRzXzEiLCJuc3BzIiwic3VicyIsInJlY29ubmVjdGlvbiIsInJlY29ubmVjdGlvbkF0dGVtcHRzIiwiSW5maW5pdHkiLCJyZWNvbm5lY3Rpb25EZWxheSIsInJlY29ubmVjdGlvbkRlbGF5TWF4IiwicmFuZG9taXphdGlvbkZhY3RvciIsImJhY2tvZmYiLCJfcmVhZHlTdGF0ZSIsIl9wYXJzZXIiLCJlbmNvZGVyIiwiRW5jb2RlciIsImRlY29kZXIiLCJEZWNvZGVyIiwiX2F1dG9Db25uZWN0IiwiYXV0b0Nvbm5lY3QiLCJfcmVjb25uZWN0aW9uIiwiX3JlY29ubmVjdGlvbkF0dGVtcHRzIiwiX2EiLCJfcmVjb25uZWN0aW9uRGVsYXkiLCJfcmFuZG9taXphdGlvbkZhY3RvciIsIl9yZWNvbm5lY3Rpb25EZWxheU1heCIsIl90aW1lb3V0IiwiX3JlY29ubmVjdGluZyIsInJlY29ubmVjdCIsImVuZ2luZSIsInNraXBSZWNvbm5lY3QiLCJvcGVuU3ViRGVzdHJveSIsImVycm9yU3ViIiwiZW1pdFJlc2VydmVkIiwibWF5YmVSZWNvbm5lY3RPbk9wZW4iLCJzdWJEZXN0cm95Iiwib25waW5nIiwib25kYXRhIiwib25kZWNvZGVkIiwiYWRkIiwibnNwIiwiYWN0aXZlIiwiX2Nsb3NlIiwib25yZWNvbm5lY3QiLCJhdHRlbXB0IiwiU3RyaWN0RXZlbnRFbWl0dGVyIiwiUkVTRVJWRURfRVZFTlRTIiwiZnJlZXplIiwiY29ubmVjdCIsImNvbm5lY3RfZXJyb3IiLCJkaXNjb25uZWN0IiwiZGlzY29ubmVjdGluZyIsIm5ld0xpc3RlbmVyIiwicmVjZWl2ZUJ1ZmZlciIsInNlbmRCdWZmZXIiLCJpZHMiLCJhY2tzIiwiZmxhZ3MiLCJjb25uZWN0ZWQiLCJkaXNjb25uZWN0ZWQiLCJhdXRoIiwib25wYWNrZXQiLCJzdWJFdmVudHMiLCJQYWNrZXRUeXBlIiwiRVZFTlQiLCJwb3AiLCJpc1RyYW5zcG9ydFdyaXRhYmxlIiwiZGlzY2FyZFBhY2tldCIsInZvbGF0aWxlIiwiX3BhY2tldCIsIkNPTk5FQ1QiLCJvbmNvbm5lY3QiLCJvbmV2ZW50IiwiQklOQVJZX0VWRU5UIiwiQUNLIiwib25hY2siLCJCSU5BUllfQUNLIiwiRElTQ09OTkVDVCIsIm9uZGlzY29ubmVjdCIsIkNPTk5FQ1RfRVJST1IiLCJhY2siLCJlbWl0RXZlbnQiLCJfYW55TGlzdGVuZXJzIiwibGlzdGVuZXIiLCJzZW50IiwiZW1pdEJ1ZmZlcmVkIiwibG9jIiwiaHJlZiIsImlzX2JpbmFyeV8xIiwiZGVjb25zdHJ1Y3RQYWNrZXQiLCJidWZmZXJzIiwicGFja2V0RGF0YSIsInBhY2siLCJfZGVjb25zdHJ1Y3RQYWNrZXQiLCJhdHRhY2htZW50cyIsImlzQmluYXJ5IiwicGxhY2Vob2xkZXIiLCJfcGxhY2Vob2xkZXIiLCJudW0iLCJuZXdEYXRhIiwicmVjb25zdHJ1Y3RQYWNrZXQiLCJfcmVjb25zdHJ1Y3RQYWNrZXQiLCJiaW5hcnlfMSIsImhhc0JpbmFyeSIsImVuY29kZUFzQmluYXJ5IiwiZW5jb2RlQXNTdHJpbmciLCJkZWNvbnN0cnVjdGlvbiIsImRlY29kZVN0cmluZyIsInJlY29uc3RydWN0b3IiLCJCaW5hcnlSZWNvbnN0cnVjdG9yIiwidGFrZUJpbmFyeURhdGEiLCJzdGFydCIsImJ1ZiIsIm5leHQiLCJwYXlsb2FkIiwidHJ5UGFyc2UiLCJpc1BheWxvYWRWYWxpZCIsImZpbmlzaGVkUmVjb25zdHJ1Y3Rpb24iLCJyZWNvblBhY2siLCJiaW5EYXRhIiwid2l0aE5hdGl2ZUZpbGUiLCJGaWxlIiwidG9KU09OIiwiYWxwaGFiZXQiLCJlbmNvZGVkIiwibm93IiwiaW5pdFVJIiwiY3JlYXRlR2FtZUJ0biIsInNob3dKb2luR2FtZVByb21wdEJ0biIsImNvbmZpcm1Kb2luR2FtZUJ0biIsInJvb21Db2RlSW5wdXQiLCJyb29tQ29kZURpc3BsYXkiLCJpbml0VHJpZ2dlciIsImluaXRVSVByb21pc2UiLCJ0b2dnbGVQb3BvdXQiLCJuZXdHYW1lIiwicm9vbUNvZGUiLCJjb25maXJtSm9pbkdhbWUiLCJpbm5lckhUTUwiLCJwb3BvdXQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJoaWRlSW5pdGlhbFNjcmVlbiIsImRpc3BsYXkiLCJ1aUluaXRQcm9taXNlIiwiZ2FtZUNvbnRvbGxlciIsInRvZ2dsZVdhaXRpbmdPcHBvbmVudCIsImdyZWV0aW5nSGFuZGxlciIsImRyYXdDb3VydCIsImFsZXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsT0FBTyxHQUFHO0FBQ2RDLFNBQU8sRUFBRSxpQkFESztBQUVkQyxRQUFNLEVBQUU7QUFDTkMsU0FBSyxFQUFFLE1BREQ7QUFFTkMsVUFBTSxFQUFFO0FBRkY7QUFGTSxDQUFoQjtBQVFPLElBQU1DLE1BQWI7QUFBQTs7QUFBQTs7QUFDRSxrQkFBWUMsR0FBWixFQUFpQkMsYUFBakIsRUFBZ0NDLE1BQWhDLEVBQXdDO0FBQUE7O0FBQUE7O0FBQ3RDLDhCQUFNRixHQUFOLEVBQVdDLGFBQVgsRUFBMEJDLE1BQTFCOztBQUNBLFVBQUtDLElBQUw7O0FBQ0EsVUFBS0wsTUFBTCxHQUFjLEVBQWQ7QUFIc0M7QUFJdkM7O0FBTEg7QUFBQTtBQUFBLFdBTUUsZ0JBQU87QUFDTCxXQUFLTSxVQUFMLENBQWdCLEtBQUtGLE1BQUwsQ0FBWVAsT0FBNUI7QUFDRDtBQVJIO0FBQUE7QUFBQSxXQVNFLGNBQUtVLElBQUwsRUFBV0MsU0FBWCxFQUFzQjtBQUNwQixXQUFLRixVQUFMLENBQWdCLEtBQUtGLE1BQUwsQ0FBWVAsT0FBNUI7O0FBQ0EsV0FBSyxJQUFJWSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FB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QUMwRCxPQUFMLENBQWF5SyxJQUFiLENBQWtCLFVBQUMzSyxRQUFELEVBQWM7QUFDOUI4dUIsZUFBYSxHQUFHOXVCLFFBQWhCO0FBQ0QsQ0FGRDtBQUlBNFcsTUFBTSxDQUFDN0osRUFBUCxDQUFVLFVBQVYsRUFBc0JpaUIsZUFBdEI7QUFFQXBZLE1BQU0sQ0FBQzdKLEVBQVAsQ0FBVSxVQUFWLEVBQXNCLFlBQU07QUFDMUI0aEIsd0RBQWlCO0FBQ2pCRyxlQUFhLENBQUNHLFNBQWQ7QUFDRCxDQUhEO0FBS0FyWSxNQUFNLENBQUM3SixFQUFQLENBQVUsY0FBVixFQUEwQixVQUFDakMsWUFBRCxFQUFrQjtBQUMxQyxNQUFJQSxZQUFZLEtBQUssQ0FBckIsRUFBd0I7QUFDdEJpa0IseUJBQXFCLENBQUMsSUFBRCxDQUFyQjtBQUNEO0FBQ0YsQ0FKRDtBQU1BblksTUFBTSxDQUFDN0osRUFBUCxDQUFVLGdCQUFWLEVBQTRCLFlBQU07QUFDaENtaUIsT0FBSyxDQUFDLFFBQUQsQ0FBTDtBQUNELENBRkQ7QUFJQXRZLE1BQU0sQ0FBQzdKLEVBQVAsQ0FBVSxhQUFWLEVBQXlCLFlBQU07QUFDN0JtaUIsT0FBSyxDQUFDLFFBQUQsQ0FBTDtBQUNELENBRkQ7QUFJQXRZLE1BQU0sQ0FBQzdKLEVBQVAsQ0FBVSxpQkFBVixFQUE2QixZQUFNO0FBQ2pDbWlCLE9BQUssQ0FBQyxrQkFBRCxDQUFMO0FBQ0QsQ0FGRDs7QUFJQSxTQUFTRixlQUFULEdBQTJCLENBRTFCLEM7Ozs7Ozs7OztBQ3JERCIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FudmFzMkRGeEJhc2UsIGJvb3QgfSBmcm9tICcuL2xpYi9iYXNlJztcbmltcG9ydCB7IGRyYXdDaXJjbGUsIGRyYXdUZXh0IH0gZnJvbSAnLi9saWIvc2hhcGUnO1xuXG5jb25zdCBERUZBVUxUID0ge1xuICBiZ0NvbG9yOiAncmdiYSgwLDAsMCwwLjMpJyxcbiAgY3Vyc29yOiB7XG4gICAgY29sb3I6ICcjZmZmJyxcbiAgICByYWRpdXM6IDUwXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEVuZ2luZSBleHRlbmRzIENhbnZhczJERnhCYXNlIHtcbiAgY29uc3RydWN0b3IoZWxlLCBkZWZhdWx0Q29uZmlnLCBjb25maWcpIHtcbiAgICBzdXBlcihlbGUsIGRlZmF1bHRDb25maWcsIGNvbmZpZylcbiAgICB0aGlzLmluaXQoKTtcbiAgICB0aGlzLnJhZGl1cyA9IDUwO1xuICB9XG4gIGluaXQoKSB7XG4gICAgdGhpcy5iYWNrZ3JvdW5kKHRoaXMuY29uZmlnLmJnQ29sb3IpO1xuICB9XG4gIGRyYXcoZGF0YSwgbG9jYWxEYXRhKSB7XG4gICAgdGhpcy5iYWNrZ3JvdW5kKHRoaXMuY29uZmlnLmJnQ29sb3IpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5jbGllbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBkcmF3Q2lyY2xlKFxuICAgICAgICB0aGlzLmN0eCxcbiAgICAgICAgZGF0YS5jbGllbnRzW2ldLmN1cnNvci54LFxuICAgICAgICBkYXRhLmNsaWVudHNbaV0uY3Vyc29yLnksXG4gICAgICAgIHRoaXMuY29uZmlnLmN1cnNvci5yYWRpdXMsXG4gICAgICAgIHRoaXMuY29uZmlnLmN1cnNvci5jb2xvclxuICAgICAgKVxuXG4gICAgICBkcmF3VGV4dChcbiAgICAgICAgdGhpcy5jdHgsIGBQbGF5ZXIke2l9YCxcbiAgICAgICAgZGF0YS5jbGllbnRzW2ldLmN1cnNvci54ICsgdGhpcy5jb25maWcuY3Vyc29yLnJhZGl1cyxcbiAgICAgICAgZGF0YS5jbGllbnRzW2ldLmN1cnNvci55ICsgdGhpcy5jb25maWcuY3Vyc29yLnJhZGl1cyAvIDIgLSAxMCxcbiAgICAgICAgJyNmZmYnLFxuICAgICAgICAxMixcbiAgICAgICAgJ0FyaWFsJ1xuICAgICAgKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2FtZUJ1aWxkZXIoKSB7XG4gIGxldCBnYW1lID0gYm9vdChFbmdpbmUsIERFRkFVTFQsIHt9LCBkb2N1bWVudC5ib2R5KTtcbiAgcmV0dXJuIGdhbWU7XG59XG4iLCJpbXBvcnQgeyBkZWJvdW5jZSwgaXMsIHBvaW50ZXJFdmVudFRvWFkgfSBmcm9tICcuL2Z1bmN0aW9uJztcblxuZXhwb3J0IGNsYXNzIENhbnZhczJERnhCYXNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgZWxlLCBjb25maWcsIGRlZmF1bHRDb25maWcsIHZpcnR1YWxQYXJlbnRcbiAgKSB7XG4gICAgY29uZmlnID0gaXMub2JqKGNvbmZpZykgPyBjb25maWcgOiB7fTtcbiAgICBkZWZhdWx0Q29uZmlnID0gaXMub2JqKGRlZmF1bHRDb25maWcpID8gZGVmYXVsdENvbmZpZyA6IHt9O1xuICAgIHRoaXMuY29uZmlnID0gT2JqZWN0LmFzc2lnbihkZWZhdWx0Q29uZmlnLCBjb25maWcpO1xuICAgIHRoaXMuZWxlID0gZWxlO1xuICAgIHRoaXMuZnJhbWVDb3VudCA9IDA7XG4gICAgdGhpcy5tb3VzZSA9IHtcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwXG4gICAgfTtcbiAgICB0aGlzLnZpcnR1YWxQYXJlbnQgPSB2aXJ0dWFsUGFyZW50O1xuICAgIHRoaXMuY3R4ID0gbnVsbDtcbiAgICB0aGlzLmZyYW1lSXNQYXVzZWQgPSBmYWxzZTtcbiAgICB0aGlzLmlzQ2xpY2sgPSBmYWxzZTtcbiAgICB0aGlzLmNhbnZhc1NpemVmaXhlZCA9IGZhbHNlO1xuICAgIHRoaXMucHJldmlvdXNGcmFtZVRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICB0aGlzLmluaXRCYXNlKCk7XG4gIH1cbiAgaW5pdEJhc2UoKSB7XG5cbiAgICBpZiAodGhpcy5lbGUudGFnTmFtZSAhPT0gJ0NBTlZBUycpIHtcbiAgICAgIGNvbnN0IGN2cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuXG4gICAgICB0aGlzLmVsZS5hcHBlbmRDaGlsZChjdnMpO1xuXG4gICAgICB0aGlzLmN2cyA9IGN2cztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmN2cyA9IHRoaXMuZWxlO1xuICAgIH1cblxuICAgIHRoaXMuY3R4ID0gdGhpcy5jdnMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICB0aGlzLnRyaWdnZXJSZXNpemluZ01lY2hhbmlzbSgpO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGRlYm91bmNlKCgpID0+IHtcbiAgICAgIHRoaXMudHJpZ2dlclJlc2l6aW5nTWVjaGFuaXNtKCk7XG4gICAgfSwgNTAwKSk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndmlzaWJpbGl0eWNoYW5nZScsICgpID0+IHtcbiAgICAgIGlmIChkb2N1bWVudC52aXNpYmlsaXR5U3RhdGUgIT09IFwidmlzaWJsZVwiKSB7XG4gICAgICAgIHRoaXMuZnJhbWVJc1BhdXNlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLmFkZEV2ZW50SGFuZGxlcigpO1xuXG4gICAgdGhpcy5yZWZyZXNoQmFzZUZyYW1lQ291bnRlcigpO1xuXG4gIH1cbiAgcmVmcmVzaEJhc2VGcmFtZUNvdW50ZXIoKSB7XG4gICAgbGV0IHRoaXNGcmFtZVRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICB0aGlzLnRpbWVFbGFwc2VkID0gKHRoaXNGcmFtZVRpbWUgLSB0aGlzLnByZXZpb3VzRnJhbWVUaW1lKSAvIDEwMDA7XG4gICAgaWYgKHRoaXMuZnJhbWVJc1BhdXNlZCkge1xuICAgICAgdGhpcy50aW1lRWxhcHNlZCA9IDA7XG4gICAgICB0aGlzLmZyYW1lSXNQYXVzZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5mcmFtZUNvdW50ICs9IDE7XG4gICAgdGhpcy5wcmV2aW91c0ZyYW1lVGltZSA9IHRoaXNGcmFtZVRpbWVcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgdGhpcy5yZWZyZXNoQmFzZUZyYW1lQ291bnRlcigpO1xuICAgIH0pXG4gIH1cblxuICB2aXJ0dWFsUGFyZW50VmFsaWRhdGlvbigpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuYm9keS5jb250YWlucyh0aGlzLnZpcnR1YWxQYXJlbnQpIHx8IHRoaXMudmlydHVhbFBhcmVudCA9PT0gZG9jdW1lbnQuYm9keTtcbiAgfVxuXG4gIHRyaWdnZXJSZXNpemluZ01lY2hhbmlzbSgpIHtcbiAgICBpZiAodGhpcy5jYW52YXNTaXplZml4ZWQpIHJldHVybjtcbiAgICBpZiAodGhpcy5lbGUudGFnTmFtZSAhPT0gJ0NBTlZBUycpIHtcbiAgICAgIGxldCBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0O1xuICAgICAgaWYgKHRoaXMudmlydHVhbFBhcmVudFZhbGlkYXRpb24oKSkge1xuICAgICAgICBjYW52YXNXaWR0aCA9IHRoaXMudmlydHVhbFBhcmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcbiAgICAgICAgY2FudmFzSGVpZ2h0ID0gdGhpcy52aXJ0dWFsUGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjYW52YXNXaWR0aCA9IHRoaXMuZWxlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICAgICAgICBjYW52YXNIZWlnaHQgPSB0aGlzLmVsZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG4gICAgICB9XG4gICAgICB0aGlzLmN2cy53aWR0aCA9IGNhbnZhc1dpZHRoO1xuICAgICAgdGhpcy5jdnMuaGVpZ2h0ID0gY2FudmFzSGVpZ2h0O1xuXG5cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBsZXQgY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodDtcbiAgICAgIGlmICh0aGlzLnZpcnR1YWxQYXJlbnRWYWxpZGF0aW9uKCkpIHtcbiAgICAgICAgY2FudmFzV2lkdGggPSB0aGlzLnZpcnR1YWxQYXJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gICAgICAgIGNhbnZhc0hlaWdodCA9IHRoaXMudmlydHVhbFBhcmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgY2FudmFzV2lkdGggPSB0aGlzLmN2cy5wYXJlbnRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICAgICAgICBjYW52YXNIZWlnaHQgPSB0aGlzLmN2cy5wYXJlbnRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcbiAgICAgIH1cbiAgICAgIHRoaXMuY3ZzLndpZHRoID0gY2FudmFzV2lkdGg7XG4gICAgICB0aGlzLmN2cy5oZWlnaHQgPSBjYW52YXNIZWlnaHQ7XG5cbiAgICB9XG4gIH1cblxuICBzZXRDYW52YXNTaXplKHdpZHRoLCBoZWlnaHQpIHtcbiAgICB0aGlzLmNhbnZhc1NpemVmaXhlZCA9IHRydWU7XG4gICAgdGhpcy5jdnMud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLmN2cy5oZWlnaHQgPSBoZWlnaHQ7XG4gIH1cblxuICBiYWNrZ3JvdW5kKGNvbG9yKSB7XG4gICAgdGhpcy5jdHguc2F2ZSgpO1xuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgIHRoaXMuY3R4LmZpbGxSZWN0KDAsIDAsIHRoaXMuY3ZzLndpZHRoLCB0aGlzLmN2cy5oZWlnaHQpO1xuICAgIHRoaXMuY3R4LnJlc3RvcmUoKTtcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmN2cy53aWR0aCwgdGhpcy5jdnMuaGVpZ2h0KTtcbiAgfVxuXG4gIGFkZEV2ZW50SGFuZGxlcigpIHtcblxuICAgIHRoaXMuY3ZzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5pc0NsaWNrID0gdHJ1ZTtcbiAgICB9KVxuICAgIHRoaXMuY3ZzLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCAoKSA9PiB7XG4gICAgICB0aGlzLmlzQ2xpY2sgPSB0cnVlO1xuXG4gICAgfSlcblxuICAgIHRoaXMuY3ZzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChlKSA9PiB7XG4gICAgICBsZXQgcG9zID0gcG9pbnRlckV2ZW50VG9YWShlKTtcbiAgICAgIHRoaXMubW91c2UgPSB7XG4gICAgICAgIHg6IHBvcy54LFxuICAgICAgICB5OiBwb3MueVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLmN2cy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCAoZSkgPT4ge1xuICAgICAgbGV0IHBvcyA9IHBvaW50ZXJFdmVudFRvWFkoZSk7XG4gICAgICB0aGlzLm1vdXNlID0ge1xuICAgICAgICB4OiBwb3MueCxcbiAgICAgICAgeTogcG9zLnlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvb3QoY3RvciwgZGVmYXVsdENvbmZpZywgY29uZmlnLCB0YXJnZXRFbGUsIHZpcnR1YWxQYXJlbnQpIHtcbiAgbGV0IGN2cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcbiAgY3ZzID0gY3ZzID8gY3ZzIDogZG9jdW1lbnQuYm9keTtcbiAgbGV0IGVsZSA9IHRhcmdldEVsZSA/IHRhcmdldEVsZSA6IGN2cztcbiAgbGV0IHRyaWdnZXI7XG4gIGxldCBib290UHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xuICAgIHRyaWdnZXIgPSAoKSA9PiB7XG4gICAgICBsZXQgaW5zdGFuY2UgPSBuZXcgY3RvcihlbGUsIGNvbmZpZywgZGVmYXVsdENvbmZpZywgdmlydHVhbFBhcmVudCk7XG4gICAgICByZXMoaW5zdGFuY2UpO1xuICAgIH07XG4gIH0pO1xuXG4gIGxldCBjb250cm9sbGVyID0ge1xuICAgIHByb21pc2U6IGJvb3RQcm9taXNlLFxuICAgIHRyaWdnZXI6IHRyaWdnZXJcbiAgfVxuXG4gIHJldHVybiBjb250cm9sbGVyO1xufSIsImV4cG9ydCBmdW5jdGlvbiAkKHNlbGVjdG9yKSB7XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZShzZWxlY3Rvciwgc3RhdHVzKSB7XG4gICQoc2VsZWN0b3IpLnNldEF0dHJpYnV0ZShzdHlsZSwgc3RhdHVzID8gJ2Jsb2NrJyA6ICdub25lJyk7XG59IiwiY29uc3QgTWVyc2VubmVUd2lzdGVyID0gcmVxdWlyZSgnbWVyc2VubmUtdHdpc3RlcicpO1xuY29uc3QgTVQgPSBuZXcgTWVyc2VubmVUd2lzdGVyKCk7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMsIGRlbGF5KSB7XG4gIGxldCB0aW1lciA9IG51bGw7XG4gIGNvbnN0ICR0aGlzID0gdGhpcztcbiAgcmV0dXJuICgpID0+IHtcbiAgICBjb25zdCBjb250ZXh0ID0gJHRoaXM7XG4gICAgY29uc3QgYXJncyA9IGFyZ3VtZW50cztcbiAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgIHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgIH0sIGRlbGF5KTtcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IGlzID0ge1xuICBhcnI6IGEgPT4gQXJyYXkuaXNBcnJheShhKSxcbiAgb2JqOiBhID0+IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhKS5pbmRleE9mKCdPYmplY3QnKSA+IC0xLFxuICBwdGg6IGEgPT4gaXMub2JqKGEpICYmIGEuaGFzT3duUHJvcGVydHkoJ3RvdGFsTGVuZ3RoJyksXG4gIHN2ZzogYSA9PiBhIGluc3RhbmNlb2YgU1ZHRWxlbWVudCxcbiAgaW5wOiBhID0+IGEgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50LFxuICBkb206IGEgPT4gYS5ub2RlVHlwZSB8fCBpcy5zdmcoYSksXG4gIHN0cjogYSA9PiB0eXBlb2YgYSA9PT0gJ3N0cmluZycsXG4gIGZuYzogYSA9PiB0eXBlb2YgYSA9PT0gJ2Z1bmN0aW9uJyxcbiAgdW5kOiBhID0+IHR5cGVvZiBhID09PSAndW5kZWZpbmVkJyxcbiAgbmlsOiBhID0+IGlzLnVuZChhKSB8fCBhID09PSBudWxsLFxuICBoZXg6IGEgPT4gLyheI1swLTlBLUZdezZ9JCl8KF4jWzAtOUEtRl17M30kKS9pLnRlc3QoYSksXG4gIHJnYmE6IGEgPT4gL15yZ2JhLy50ZXN0KGEpLFxuICByZ2I6IGEgPT4gL15yZ2IvLnRlc3QoYSksXG4gIGhzbDogYSA9PiAvXmhzbC8udGVzdChhKSxcbiAgY29sOiBhID0+IChpcy5oZXgoYSkgfHwgaXMucmdiKGEpIHx8IGlzLmhzbChhKSksXG4gIGtleTogYSA9PiAhZGVmYXVsdEluc3RhbmNlU2V0dGluZ3MuaGFzT3duUHJvcGVydHkoYSkgJiYgIWRlZmF1bHRUd2VlblNldHRpbmdzLmhhc093blByb3BlcnR5KGEpICYmIGEgIT09ICd0YXJnZXRzJyAmJiBhICE9PSAna2V5ZnJhbWVzJyxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbVdpdGhpblJhbmdlKG1pbiwgbWF4LCBzZWVkKSB7XG4gIHJldHVybiBNVC5yYW5kb20oc2VlZCkgKiAobWF4IC0gbWluKSArIG1pbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3RhbmNlKHgwLCB5MCwgeDEsIHkxKSB7XG4gIHJldHVybiBNYXRoLnNxcnQoKHgxIC0geDApICogKHgxIC0geDApICsgKHkxIC0geTApICogKHkxIC0geTApKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZ3JlZVRvUmFkaWFuKGRlZ3JlZSkge1xuICByZXR1cm4gKGRlZ3JlZSAvIDE4MCkgKiBNYXRoLlBJO1xufVxuXG4vKipcbiAqIOe1seS4gCB0b3VjaEV2ZW50L21vdXNlRXZlbnQg55qE5LqL5Lu26Ke455m85bqn5qiZ5Y+W5b6X5pa55byPXG4gKiBAZXhwb3J0XG4gKiBAcGFyYW0ge29iamVjdH0gIOWCs+WFpeeahGV2ZW50IOeJqeS7tlxuICogQHJldHVybnMge09iamVjdH0g5LiA5YCL54mp5Lu2LCDlhaflkKvkuovku7bop7jnmbzluqfmqJnnmoRYL1kg5bqn5qiZ5YC8XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwb2ludGVyRXZlbnRUb1hZKGUpIHtcbiAgdmFyIG91dCA9IHsgeDogMCwgeTogMCB9O1xuICBpZiAoZS50eXBlID09PSAndG91Y2hzdGFydCcgfHwgZS50eXBlID09PSAndG91Y2htb3ZlJyB8fCBlLnR5cGUgPT09ICd0b3VjaGVuZCcgfHwgZS50eXBlID09PSAndG91Y2hjYW5jZWwnKSB7XG4gICAgdmFyIHRvdWNoID0gZS5vcmlnaW5hbEV2ZW50LnRvdWNoZXNbMF0gfHwgZS5vcmlnaW5hbEV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdO1xuICAgIG91dC54ID0gdG91Y2gucGFnZVg7XG4gICAgb3V0LnkgPSB0b3VjaC5wYWdlWTtcbiAgfSBlbHNlIGlmIChlLnR5cGUgPT09ICdtb3VzZWRvd24nIHx8IGUudHlwZSA9PT0gJ21vdXNldXAnIHx8IGUudHlwZSA9PT0gJ21vdXNlbW92ZScgfHwgZS50eXBlID09PSAnbW91c2VvdmVyJyB8fCBlLnR5cGUgPT09ICdtb3VzZW91dCcgfHwgZS50eXBlID09PSAnbW91c2VlbnRlcicgfHwgZS50eXBlID09PSAnbW91c2VsZWF2ZScpIHtcbiAgICBvdXQueCA9IGUucGFnZVg7XG4gICAgb3V0LnkgPSBlLnBhZ2VZO1xuICB9XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICog55u05o6l5ZG85Y+raGFzT3duUHJvcGVydHnnmoTljp/lnovmlrnms5Uo55So5ZyoaGFzT3duUHJvcGVydHnooqvmlLnli5XpgY7nmoTni4Dms4EpXG4gKlxuICogQGV4cG9ydFxuICogQHBhcmFtIHtvYmplY3R9IHRhcmdldCDnm67mqJnnianku7ZcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wIOebruaomXByb3BcbiAqIEByZXR1cm5zIHtib29sZWFufSDmmK8v5ZCmXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0YXJnZXRIYXNQcm9wKHRhcmdldCwgcHJvcCkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRhcmdldCwgcHJvcCk7XG59XG5cbi8qKlxuICog56K66KqN5LiA5YCL6K6K5pW4L+WAvOaYr+WQpueCuuepuigw5LiN566X56m65YC8KVxuICogQGV4cG9ydFxuICogQHBhcmFtIHsqfSB2YWxcbiAqIEByZXR1cm5zIHtib29sZWFufSDmmK8v5ZCmXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0VtcHR5KHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ251bWJlcicgPyBpc05hTih2YWwpIDogIXZhbDtcbn1cblxuXG5mdW5jdGlvbiByZ2JUb1JnYmEocmdiVmFsdWUpIHtcbiAgY29uc3QgcmdiID0gL3JnYlxcKChcXGQrLFxccypbXFxkXSssXFxzKltcXGRdKylcXCkvZy5leGVjKHJnYlZhbHVlKTtcbiAgcmV0dXJuIHJnYiA/IGByZ2JhKCR7cmdiWzFdfSwxKWAgOiByZ2JWYWx1ZTtcbn1cblxuZnVuY3Rpb24gaGV4VG9SZ2JhKGhleFZhbHVlKSB7XG4gIGNvbnN0IHJneCA9IC9eIz8oW2EtZlxcZF0pKFthLWZcXGRdKShbYS1mXFxkXSkkL2k7XG4gIGNvbnN0IGhleCA9IGhleFZhbHVlLnJlcGxhY2Uocmd4LCAobSwgciwgZywgYikgPT4gciArIHIgKyBnICsgZyArIGIgKyBiKTtcbiAgY29uc3QgcmdiID0gL14jPyhbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KSQvaS5leGVjKGhleCk7XG4gIGNvbnN0IHIgPSBwYXJzZUludChyZ2JbMV0sIDE2KTtcbiAgY29uc3QgZyA9IHBhcnNlSW50KHJnYlsyXSwgMTYpO1xuICBjb25zdCBiID0gcGFyc2VJbnQocmdiWzNdLCAxNik7XG4gIHJldHVybiBgcmdiYSgke3J9LCR7Z30sJHtifSwxKWA7XG59XG5cbmZ1bmN0aW9uIGhzbFRvUmdiYShoc2xWYWx1ZSkge1xuICBjb25zdCBoc2wgPSAvaHNsXFwoKFxcZCspLFxccyooW1xcZC5dKyklLFxccyooW1xcZC5dKyklXFwpL2cuZXhlYyhoc2xWYWx1ZSkgfHwgL2hzbGFcXCgoXFxkKyksXFxzKihbXFxkLl0rKSUsXFxzKihbXFxkLl0rKSUsXFxzKihbXFxkLl0rKVxcKS9nLmV4ZWMoaHNsVmFsdWUpO1xuICBjb25zdCBoID0gcGFyc2VJbnQoaHNsWzFdLCAxMCkgLyAzNjA7XG4gIGNvbnN0IHMgPSBwYXJzZUludChoc2xbMl0sIDEwKSAvIDEwMDtcbiAgY29uc3QgbCA9IHBhcnNlSW50KGhzbFszXSwgMTApIC8gMTAwO1xuICBjb25zdCBhID0gaHNsWzRdIHx8IDE7XG4gIGZ1bmN0aW9uIGh1ZTJyZ2IocCwgcSwgdCkge1xuICAgIGlmICh0IDwgMCkgdCArPSAxO1xuICAgIGlmICh0ID4gMSkgdCAtPSAxO1xuICAgIGlmICh0IDwgMSAvIDYpIHJldHVybiBwICsgKHEgLSBwKSAqIDYgKiB0O1xuICAgIGlmICh0IDwgMSAvIDIpIHJldHVybiBxO1xuICAgIGlmICh0IDwgMiAvIDMpIHJldHVybiBwICsgKHEgLSBwKSAqICgyIC8gMyAtIHQpICogNjtcbiAgICByZXR1cm4gcDtcbiAgfVxuICBsZXQgciwgZywgYjtcbiAgaWYgKHMgPT0gMCkge1xuICAgIHIgPSBnID0gYiA9IGw7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgcSA9IGwgPCAwLjUgPyBsICogKDEgKyBzKSA6IGwgKyBzIC0gbCAqIHM7XG4gICAgY29uc3QgcCA9IDIgKiBsIC0gcTtcbiAgICByID0gaHVlMnJnYihwLCBxLCBoICsgMSAvIDMpO1xuICAgIGcgPSBodWUycmdiKHAsIHEsIGgpO1xuICAgIGIgPSBodWUycmdiKHAsIHEsIGggLSAxIC8gMyk7XG4gIH1cbiAgcmV0dXJuIGByZ2JhKCR7ciAqIDI1NX0sJHtnICogMjU1fSwke2IgKiAyNTV9LCR7YX0pYDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbG9yVG9SZ2JhKHZhbCkge1xuICBpZiAoaXMucmdiKHZhbCkpIHJldHVybiByZ2JUb1JnYmEodmFsKTtcbiAgaWYgKGlzLmhleCh2YWwpKSByZXR1cm4gaGV4VG9SZ2JhKHZhbCk7XG4gIGlmIChpcy5oc2wodmFsKSkgcmV0dXJuIGhzbFRvUmdiYSh2YWwpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2hhbm5lbFZhbHVlc0Zyb21SZ2JhKHJnYmEpIHtcbiAgcmV0dXJuIHJnYmEucmVwbGFjZSgvXihyZ2J8cmdiYSlcXCgvLCAnJykucmVwbGFjZSgvXFwpJC8sICcnKS5yZXBsYWNlKC9cXHMvZywgJycpLnNwbGl0KCcsJykubWFwKHggPT4gcGFyc2VJbnQoeCkpO1xufVxuXG5cbiIsImV4cG9ydCBmdW5jdGlvbiBkcmF3U3F1YXJlKGN0eCwgeCwgeSwgd2lkdGgsIGNvbG9yLCBhbHBoYSkge1xuICBjdHguc2F2ZSgpO1xuICBjdHguZmlsbFN0eWxlID0gY29sb3I7XG4gIGN0eC5nbG9iYWxBbHBoYSA9IGFscGhhO1xuICBjdHguZmlsbFJlY3QoeCAtIHdpZHRoIC8gMiwgeSAtIHdpZHRoIC8gMiwgd2lkdGgsIHdpZHRoKTtcbiAgY3R4LnJlc3RvcmUoKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBkcmF3Q2lyY2xlKGN0eCwgeCwgeSwgd2lkdGgsIGNvbG9yLCBhbHBoYSkge1xuICBjdHguc2F2ZSgpXG4gIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgY3R4Lmdsb2JhbEFscGhhID0gYWxwaGE7XG4gIGN0eC5iZWdpblBhdGgoKTtcbiAgY3R4LmFyYyh4LCB5LCB3aWR0aCAvIDIsIDAsIE1hdGguUEkgKiAyLCB0cnVlKTtcbiAgY3R4LmNsb3NlUGF0aCgpO1xuICBjdHguZmlsbCgpO1xuICBjdHgucmVzdG9yZSgpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGRyYXdMaW5lKGN0eCwgeDAsIHkwLCB4MSwgeTEsIHN0cm9rZUNvbG9yLCBzdHJva2VXaWR0aCkge1xuICBjdHguc2F2ZSgpO1xuICBjdHguc3Ryb2tlU3R5bGUgPSBzdHJva2VDb2xvcjtcbiAgY3R4LmxpbmVXaWR0aCA9IHN0cm9rZVdpZHRoO1xuICBjdHguYmVnaW5QYXRoKCk7XG4gIGN0eC5tb3ZlVG8oeDAsIHkwKTtcbiAgY3R4LmxpbmVUbyh4MSwgeTEpO1xuICBjdHguY2xvc2VQYXRoKCk7XG4gIGN0eC5zdHJva2UoKTtcbiAgY3R4LnJlc3RvcmUoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRyYXdUZXh0KGN0eCwgdGV4dENvbnRlbnQgPSAndGV4dCcsIHgsIHksIGNvbG9yID0gJyMwMDAnLCBmb250U2l6ZSA9IDEyLCBmb250ID0gJ0FyaWFsJykge1xuICBjdHguc2F2ZSgpO1xuICBjdHguZmlsbFN0eWxlID0gY29sb3I7XG4gIGN0eC5mb250ID0gYCR7Zm9udFNpemV9cHggJHtmb250fWA7XG4gIGN0eC5maWxsVGV4dCh0ZXh0Q29udGVudCwgeCwgeSk7XG4gIGN0eC5yZXN0b3JlKCk7XG59IiwiaW1wb3J0IHsgQ2FudmFzMkRGeEJhc2UsIGJvb3QgfSBmcm9tICcuL2xpYi9iYXNlJztcbmltcG9ydCB7IGRyYXdDaXJjbGUgfSBmcm9tICcuL2xpYi9zaGFwZSc7XG5pbXBvcnQgeyAkIH0gZnJvbSAnLi9saWIvZG9tJ1xuXG5jb25zdCBCQUxMX0FOSU1BVElPTl9ERUZBVUxUID0ge1xuICBhZnRlckltYWdlOiBmYWxzZSxcbiAgcmFkaXVzOiAyNSxcbiAgY29sb3I6ICdibHVlJyxcbiAgc3BlZWRYOiAxMDAwLFxuICBzcGVlZFk6IDEwMDAsXG4gIGFjY2VsZXJhdGlvblg6IDAsXG4gIGFjY2VsZXJhdGlvblk6IDAsXG4gIGZyaWN0aW9uWDogMSxcbiAgZnJpY3Rpb25ZOiAwLjk5OTdcbn1cblxuY29uc3QgU1BPVFNfQU5JTUFUSU9OX0RFRkFVTFQgPSB7XG4gIG1pblNpemU6IDEwLFxuICBtYXhTaXplOiAyMCxcbiAgcGVyaW9kOiAyMDAsXG4gIGJvdHRvbUxheWVyOiBudWxsLFxuICBjb2xvcjogJ3JnYmEoMCwwLDAsMC4wMyknLFxuICBjb2w6IDE1LFxuICByb3c6IDE1XG59XG5cbmNsYXNzIEJhc2ljUmVmZWxlY3Rpb24gZXh0ZW5kcyBDYW52YXMyREZ4QmFzZSB7XG4gIGNvbnN0cnVjdG9yKGNhbnZhcywgZGVmYXVsdENvbmZpZywgY29uZmlnLCB2aXJ0dWFsUGFyZW50KSB7XG4gICAgc3VwZXIoY2FudmFzLCBkZWZhdWx0Q29uZmlnLCBjb25maWcsIHZpcnR1YWxQYXJlbnQpO1xuICAgIHRoaXMuaW5pdCgpO1xuICB9XG4gIGluaXQoKSB7XG4gICAgdGhpcy5pbml0QmFsbCgpO1xuICAgIHRoaXMuYW5pbWF0ZUJhbGwoKTtcbiAgfVxuICBpbml0QmFsbCgpIHtcbiAgICBsZXQgJHRoaXMgPSB0aGlzO1xuICAgIHRoaXMuYmFsbCA9IHtcbiAgICAgIGFmdGVySW1hZ2U6ICR0aGlzLmNvbmZpZy5hZnRlckltYWdlLFxuICAgICAgY29sb3I6ICR0aGlzLmNvbmZpZy5jb2xvcixcbiAgICAgIHJhZGl1czogJHRoaXMuY29uZmlnLnJhZGl1cyxcbiAgICAgIGxvY2F0aW9uOiB7XG4gICAgICAgIHg6ICR0aGlzLmN2cy53aWR0aCAvIDIsXG4gICAgICAgIHk6ICR0aGlzLmN2cy5oZWlnaHQgLyAyLFxuICAgICAgfSxcbiAgICAgIHNwZWVkOiB7XG4gICAgICAgIHg6ICR0aGlzLmNvbmZpZy5zcGVlZFgsXG4gICAgICAgIHk6ICR0aGlzLmNvbmZpZy5zcGVlZFlcbiAgICAgIH0sXG4gICAgICBhY2NlbGVyYXRpb246IHtcbiAgICAgICAgeDogJHRoaXMuY29uZmlnLmFjY2VsZXJhdGlvblgsXG4gICAgICAgIHk6ICR0aGlzLmNvbmZpZy5hY2NlbGVyYXRpb25ZXG4gICAgICB9LFxuICAgICAgZnJpY3Rpb246IHtcbiAgICAgICAgeDogJHRoaXMuY29uZmlnLmZyaWN0aW9uWCxcbiAgICAgICAgeTogJHRoaXMuY29uZmlnLmZyaWN0aW9uWVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBkcmF3QmFsbCgpIHtcbiAgICBkcmF3Q2lyY2xlKHRoaXMuY3R4LCB0aGlzLmJhbGwubG9jYXRpb24ueCwgdGhpcy5iYWxsLmxvY2F0aW9uLnksIHRoaXMuYmFsbC5yYWRpdXMgKiAyLCB0aGlzLmJhbGwuY29sb3IpO1xuICB9XG4gIGFuaW1hdGVCYWxsKCkge1xuICAgIGxldCAkdGhpcyA9IHRoaXM7XG4gICAgaWYgKCR0aGlzLmJhbGwuYWZ0ZXJJbWFnZSA9PT0gdHJ1ZSkge1xuICAgICAgJHRoaXMuYmFja2dyb3VuZCgncmdiYSgyNTUsMjU1LDI1NSwwLjEpJyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgJHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCAkdGhpcy5jdnMud2lkdGgsICR0aGlzLmN2cy5oZWlnaHQpO1xuICAgIH1cbiAgICAkdGhpcy5jdHguZHJhd0ltYWdlKCR0aGlzLmNvbmZpZy5ib3R0b21MYXllciwgMCwgMCk7XG4gICAgJHRoaXMuZHJhd0JhbGwoKTtcbiAgICAkdGhpcy5yZWZyZXNoTG9jYXRpb24oKTtcbiAgICAkdGhpcy5yZWZyZXNoU3BlZWQoKTtcbiAgICAkdGhpcy5jaGVja0JvdW5kYXJ5KCk7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCR0aGlzLmFuaW1hdGVCYWxsLmJpbmQoJHRoaXMpKTtcbiAgfVxuXG4gIHJlZnJlc2hTcGVlZCgpIHtcbiAgICBsZXQgZHQgPSB0aGlzLnRpbWVFbGFwc2VkO1xuICAgIHRoaXMuYmFsbC5zcGVlZC54ID0gdGhpcy5iYWxsLnNwZWVkLnggKiB0aGlzLmJhbGwuZnJpY3Rpb24ueCArIHRoaXMuYmFsbC5hY2NlbGVyYXRpb24ueCAqIGR0O1xuICAgIHRoaXMuYmFsbC5zcGVlZC55ID0gdGhpcy5iYWxsLnNwZWVkLnkgKiB0aGlzLmJhbGwuZnJpY3Rpb24ueSArIHRoaXMuYmFsbC5hY2NlbGVyYXRpb24ueSAqIGR0O1xuICB9XG5cbiAgcmVmcmVzaExvY2F0aW9uKCkge1xuICAgIGxldCBkdCA9IHRoaXMudGltZUVsYXBzZWQ7XG4gICAgdGhpcy5iYWxsLmxvY2F0aW9uLnggKz0gdGhpcy5iYWxsLnNwZWVkLnggKiBkdDtcbiAgICB0aGlzLmJhbGwubG9jYXRpb24ueSArPSB0aGlzLmJhbGwuc3BlZWQueSAqIGR0O1xuICB9XG4gIGNoZWNrQm91bmRhcnkoKSB7XG4gICAgbGV0IGJhbGwgPSB0aGlzLmJhbGw7XG4gICAgbGV0IGNhbnZhcyA9IHRoaXMuY3ZzO1xuICAgIC8vIOeVtueQg+ato+WcqOW6leerr1xuICAgIGlmIChiYWxsLmxvY2F0aW9uLnkgKyBiYWxsLnJhZGl1cyA+IGNhbnZhcy5oZWlnaHQpIHtcbiAgICAgIC8vIOS4lOmAn+W6pueCuuato+WAvO+8iOacneS4i++8iVxuICAgICAgaWYgKGJhbGwuc3BlZWQueSA+IDApIHtcbiAgICAgICAgYmFsbC5zcGVlZC55ID0gLWJhbGwuc3BlZWQueTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8g55W255CD5q2j5Zyo6aCC56uvXG4gICAgZWxzZSBpZiAoYmFsbC5sb2NhdGlvbi55IC0gYmFsbC5yYWRpdXMgPCAwKSB7XG4gICAgICAvLyDkuJTpgJ/luqbngrrosqDlgLzvvIjmnJ3kuIrvvIlcbiAgICAgIGlmIChiYWxsLnNwZWVkLnkgPCAwKSB7XG4gICAgICAgIGJhbGwuc3BlZWQueSA9IC1iYWxsLnNwZWVkLnk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8g55W255CD5q2j5Zyo5Y+z56uvXG4gICAgaWYgKGJhbGwubG9jYXRpb24ueCArIGJhbGwucmFkaXVzID4gY2FudmFzLndpZHRoKSB7XG4gICAgICBpZiAoYmFsbC5zcGVlZC54ID4gMCkge1xuICAgICAgICBiYWxsLnNwZWVkLnggPSAtYmFsbC5zcGVlZC54O1xuICAgICAgfVxuICAgIH1cbiAgICAvLyDnlbbnkIPmraPlnKjlt6bnq69cbiAgICBlbHNlIGlmIChiYWxsLmxvY2F0aW9uLnggLSBiYWxsLnJhZGl1cyA8IDApIHtcbiAgICAgIGlmIChiYWxsLnNwZWVkLnggPCAwKSB7XG4gICAgICAgIGJhbGwuc3BlZWQueCA9IC1iYWxsLnNwZWVkLng7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cbn1cblxuY2xhc3MgU3BvdHNCdW1waW5nIGV4dGVuZHMgQ2FudmFzMkRGeEJhc2Uge1xuICBjb25zdHJ1Y3RvcihjYW52YXMsIGRlZmF1bHRDb25maWcsIGNvbmZpZywgdmlydHVhbFBhcmVudCkge1xuICAgIHN1cGVyKGNhbnZhcywgZGVmYXVsdENvbmZpZywgY29uZmlnLCB2aXJ0dWFsUGFyZW50KTtcbiAgICB0aGlzLnNwb3RzU2l6ZSA9IHRoaXMuY29uZmlnLm1pblNpemU7XG4gICAgdGhpcy5leHBhbmQgPSB0cnVlO1xuICAgIHRoaXMuaW5pdCgpO1xuICB9XG4gIGluaXQoKSB7XG4gICAgdGhpcy5hbmltYXRlKCk7XG4gICAgY29uc29sZS5sb2codGhpcy5jdnMpO1xuICB9XG5cbiAgYW5pbWF0ZSgpIHtcbiAgICBsZXQgJHRoaXMgPSB0aGlzO1xuICAgIHRoaXMuaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAkdGhpcy5jbGVhcigpO1xuICAgICAgJHRoaXMuZHJhd1Nwb3RzKCk7XG4gICAgfSwgdGhpcy5jb25maWcucGVyaW9kKVxuICB9XG5cbiAgZHJhd1Nwb3RzKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IHRoaXMuY29uZmlnLmNvbDsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8PSB0aGlzLmNvbmZpZy5jb2w7IGorKykge1xuICAgICAgICBkcmF3Q2lyY2xlKFxuICAgICAgICAgIHRoaXMuY3R4LFxuICAgICAgICAgIGkgKiB0aGlzLmN2cy53aWR0aCAvIHRoaXMuY29uZmlnLmNvbCxcbiAgICAgICAgICBqICogdGhpcy5jdnMuaGVpZ2h0IC8gdGhpcy5jb25maWcucm93LFxuICAgICAgICAgIHRoaXMuc3BvdHNTaXplLFxuICAgICAgICAgIHRoaXMuY29uZmlnLmNvbG9yLFxuICAgICAgICAgIDFcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5zcG90c1NpemUgLSAxIDwgdGhpcy5jb25maWcubWluU2l6ZSkge1xuICAgICAgdGhpcy5leHBhbmQgPSB0cnVlXG4gICAgfVxuICAgIGVsc2UgaWYgKHRoaXMuc3BvdHNTaXplICsgMSA+IHRoaXMuY29uZmlnLm1heFNpemUpIHtcbiAgICAgIHRoaXMuZXhwYW5kID0gZmFsc2VcbiAgICB9XG4gICAgaWYgKHRoaXMuZXhwYW5kKSB7XG4gICAgICB0aGlzLnNwb3RzU2l6ZSArPSAxO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuc3BvdHNTaXplIC09IDE7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0U3BsYXNoKCkge1xuICBsZXQgaW5pdGlhbFNjcmVlbiA9ICQoJyNpbml0aWFsLXNjcmVlbicpO1xuICBsZXQgdmlydHVhbENhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuXG4gIGxldCBzcG90QW5pbWF0aW9uID0gYm9vdChTcG90c0J1bXBpbmcsIFNQT1RTX0FOSU1BVElPTl9ERUZBVUxULCB7fSwgdmlydHVhbENhbnZhcywgaW5pdGlhbFNjcmVlbik7XG4gIHNwb3RBbmltYXRpb24ucHJvbWlzZS50aGVuKChpbnN0YW5jZSkgPT4ge1xuICAgIGJvb3QoQmFzaWNSZWZlbGVjdGlvbiwgQkFMTF9BTklNQVRJT05fREVGQVVMVCwge1xuICAgICAgYWZ0ZXJJbWFnZTogdHJ1ZSxcbiAgICAgIHJhZGl1czogNDAsXG4gICAgICBjb2xvcjogJ2dyZXknLFxuICAgICAgc3BlZWRYOiAxMDAwLFxuICAgICAgYm90dG9tTGF5ZXI6IGluc3RhbmNlLmN2cyxcbiAgICAgIHNwZWVkWTogMTAwMCxcbiAgICAgIGFjY2VsZXJhdGlvblg6IDAsXG4gICAgICBhY2NlbGVyYXRpb25ZOiA5ODAsXG4gICAgICBmcmljdGlvblg6IDEsXG4gICAgfSwgaW5pdGlhbFNjcmVlbikudHJpZ2dlcigpO1xuICB9KTtcbiAgc3BvdEFuaW1hdGlvbi50cmlnZ2VyKCk7XG59XG5cbiIsImV4cG9ydCBjb25zdCBkYXRhU3RvcmFnZSA9IHtcbiAgYmFsbDoge1xuICAgIHNwZWVkOiB7XG4gICAgICB4OiAwLFxuICAgICAgeTogMFxuICAgIH0sXG4gICAgcG9zaXRpb246IHtcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwXG4gICAgfVxuICB9LFxuICBjbGllbnRzOiBbXG5cbiAgXVxufVxuXG5leHBvcnQgbGV0IHBsYXllck51bWJlciA9IDA7IiwiXG4vKipcbiAqIEV4cG9zZSBgQmFja29mZmAuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBCYWNrb2ZmO1xuXG4vKipcbiAqIEluaXRpYWxpemUgYmFja29mZiB0aW1lciB3aXRoIGBvcHRzYC5cbiAqXG4gKiAtIGBtaW5gIGluaXRpYWwgdGltZW91dCBpbiBtaWxsaXNlY29uZHMgWzEwMF1cbiAqIC0gYG1heGAgbWF4IHRpbWVvdXQgWzEwMDAwXVxuICogLSBgaml0dGVyYCBbMF1cbiAqIC0gYGZhY3RvcmAgWzJdXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9wdHNcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gQmFja29mZihvcHRzKSB7XG4gIG9wdHMgPSBvcHRzIHx8IHt9O1xuICB0aGlzLm1zID0gb3B0cy5taW4gfHwgMTAwO1xuICB0aGlzLm1heCA9IG9wdHMubWF4IHx8IDEwMDAwO1xuICB0aGlzLmZhY3RvciA9IG9wdHMuZmFjdG9yIHx8IDI7XG4gIHRoaXMuaml0dGVyID0gb3B0cy5qaXR0ZXIgPiAwICYmIG9wdHMuaml0dGVyIDw9IDEgPyBvcHRzLmppdHRlciA6IDA7XG4gIHRoaXMuYXR0ZW1wdHMgPSAwO1xufVxuXG4vKipcbiAqIFJldHVybiB0aGUgYmFja29mZiBkdXJhdGlvbi5cbiAqXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkJhY2tvZmYucHJvdG90eXBlLmR1cmF0aW9uID0gZnVuY3Rpb24oKXtcbiAgdmFyIG1zID0gdGhpcy5tcyAqIE1hdGgucG93KHRoaXMuZmFjdG9yLCB0aGlzLmF0dGVtcHRzKyspO1xuICBpZiAodGhpcy5qaXR0ZXIpIHtcbiAgICB2YXIgcmFuZCA9ICBNYXRoLnJhbmRvbSgpO1xuICAgIHZhciBkZXZpYXRpb24gPSBNYXRoLmZsb29yKHJhbmQgKiB0aGlzLmppdHRlciAqIG1zKTtcbiAgICBtcyA9IChNYXRoLmZsb29yKHJhbmQgKiAxMCkgJiAxKSA9PSAwICA/IG1zIC0gZGV2aWF0aW9uIDogbXMgKyBkZXZpYXRpb247XG4gIH1cbiAgcmV0dXJuIE1hdGgubWluKG1zLCB0aGlzLm1heCkgfCAwO1xufTtcblxuLyoqXG4gKiBSZXNldCB0aGUgbnVtYmVyIG9mIGF0dGVtcHRzLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuQmFja29mZi5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbigpe1xuICB0aGlzLmF0dGVtcHRzID0gMDtcbn07XG5cbi8qKlxuICogU2V0IHRoZSBtaW5pbXVtIGR1cmF0aW9uXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5CYWNrb2ZmLnByb3RvdHlwZS5zZXRNaW4gPSBmdW5jdGlvbihtaW4pe1xuICB0aGlzLm1zID0gbWluO1xufTtcblxuLyoqXG4gKiBTZXQgdGhlIG1heGltdW0gZHVyYXRpb25cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkJhY2tvZmYucHJvdG90eXBlLnNldE1heCA9IGZ1bmN0aW9uKG1heCl7XG4gIHRoaXMubWF4ID0gbWF4O1xufTtcblxuLyoqXG4gKiBTZXQgdGhlIGppdHRlclxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuQmFja29mZi5wcm90b3R5cGUuc2V0Sml0dGVyID0gZnVuY3Rpb24oaml0dGVyKXtcbiAgdGhpcy5qaXR0ZXIgPSBqaXR0ZXI7XG59O1xuXG4iLCIvKlxuICogYmFzZTY0LWFycmF5YnVmZmVyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbmlrbGFzdmgvYmFzZTY0LWFycmF5YnVmZmVyXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDEyIE5pa2xhcyB2b24gSGVydHplblxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICovXG4oZnVuY3Rpb24oY2hhcnMpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICBleHBvcnRzLmVuY29kZSA9IGZ1bmN0aW9uKGFycmF5YnVmZmVyKSB7XG4gICAgdmFyIGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXlidWZmZXIpLFxuICAgIGksIGxlbiA9IGJ5dGVzLmxlbmd0aCwgYmFzZTY0ID0gXCJcIjtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrPTMpIHtcbiAgICAgIGJhc2U2NCArPSBjaGFyc1tieXRlc1tpXSA+PiAyXTtcbiAgICAgIGJhc2U2NCArPSBjaGFyc1soKGJ5dGVzW2ldICYgMykgPDwgNCkgfCAoYnl0ZXNbaSArIDFdID4+IDQpXTtcbiAgICAgIGJhc2U2NCArPSBjaGFyc1soKGJ5dGVzW2kgKyAxXSAmIDE1KSA8PCAyKSB8IChieXRlc1tpICsgMl0gPj4gNildO1xuICAgICAgYmFzZTY0ICs9IGNoYXJzW2J5dGVzW2kgKyAyXSAmIDYzXTtcbiAgICB9XG5cbiAgICBpZiAoKGxlbiAlIDMpID09PSAyKSB7XG4gICAgICBiYXNlNjQgPSBiYXNlNjQuc3Vic3RyaW5nKDAsIGJhc2U2NC5sZW5ndGggLSAxKSArIFwiPVwiO1xuICAgIH0gZWxzZSBpZiAobGVuICUgMyA9PT0gMSkge1xuICAgICAgYmFzZTY0ID0gYmFzZTY0LnN1YnN0cmluZygwLCBiYXNlNjQubGVuZ3RoIC0gMikgKyBcIj09XCI7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJhc2U2NDtcbiAgfTtcblxuICBleHBvcnRzLmRlY29kZSA9ICBmdW5jdGlvbihiYXNlNjQpIHtcbiAgICB2YXIgYnVmZmVyTGVuZ3RoID0gYmFzZTY0Lmxlbmd0aCAqIDAuNzUsXG4gICAgbGVuID0gYmFzZTY0Lmxlbmd0aCwgaSwgcCA9IDAsXG4gICAgZW5jb2RlZDEsIGVuY29kZWQyLCBlbmNvZGVkMywgZW5jb2RlZDQ7XG5cbiAgICBpZiAoYmFzZTY0W2Jhc2U2NC5sZW5ndGggLSAxXSA9PT0gXCI9XCIpIHtcbiAgICAgIGJ1ZmZlckxlbmd0aC0tO1xuICAgICAgaWYgKGJhc2U2NFtiYXNlNjQubGVuZ3RoIC0gMl0gPT09IFwiPVwiKSB7XG4gICAgICAgIGJ1ZmZlckxlbmd0aC0tO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBhcnJheWJ1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcihidWZmZXJMZW5ndGgpLFxuICAgIGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXlidWZmZXIpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSs9NCkge1xuICAgICAgZW5jb2RlZDEgPSBjaGFycy5pbmRleE9mKGJhc2U2NFtpXSk7XG4gICAgICBlbmNvZGVkMiA9IGNoYXJzLmluZGV4T2YoYmFzZTY0W2krMV0pO1xuICAgICAgZW5jb2RlZDMgPSBjaGFycy5pbmRleE9mKGJhc2U2NFtpKzJdKTtcbiAgICAgIGVuY29kZWQ0ID0gY2hhcnMuaW5kZXhPZihiYXNlNjRbaSszXSk7XG5cbiAgICAgIGJ5dGVzW3ArK10gPSAoZW5jb2RlZDEgPDwgMikgfCAoZW5jb2RlZDIgPj4gNCk7XG4gICAgICBieXRlc1twKytdID0gKChlbmNvZGVkMiAmIDE1KSA8PCA0KSB8IChlbmNvZGVkMyA+PiAyKTtcbiAgICAgIGJ5dGVzW3ArK10gPSAoKGVuY29kZWQzICYgMykgPDwgNikgfCAoZW5jb2RlZDQgJiA2Myk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycmF5YnVmZmVyO1xuICB9O1xufSkoXCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvXCIpO1xuIiwiXHJcbi8qKlxyXG4gKiBFeHBvc2UgYEVtaXR0ZXJgLlxyXG4gKi9cclxuXHJcbmlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJykge1xyXG4gIG1vZHVsZS5leHBvcnRzID0gRW1pdHRlcjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEluaXRpYWxpemUgYSBuZXcgYEVtaXR0ZXJgLlxyXG4gKlxyXG4gKiBAYXBpIHB1YmxpY1xyXG4gKi9cclxuXHJcbmZ1bmN0aW9uIEVtaXR0ZXIob2JqKSB7XHJcbiAgaWYgKG9iaikgcmV0dXJuIG1peGluKG9iaik7XHJcbn07XHJcblxyXG4vKipcclxuICogTWl4aW4gdGhlIGVtaXR0ZXIgcHJvcGVydGllcy5cclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IG9ialxyXG4gKiBAcmV0dXJuIHtPYmplY3R9XHJcbiAqIEBhcGkgcHJpdmF0ZVxyXG4gKi9cclxuXHJcbmZ1bmN0aW9uIG1peGluKG9iaikge1xyXG4gIGZvciAodmFyIGtleSBpbiBFbWl0dGVyLnByb3RvdHlwZSkge1xyXG4gICAgb2JqW2tleV0gPSBFbWl0dGVyLnByb3RvdHlwZVtrZXldO1xyXG4gIH1cclxuICByZXR1cm4gb2JqO1xyXG59XHJcblxyXG4vKipcclxuICogTGlzdGVuIG9uIHRoZSBnaXZlbiBgZXZlbnRgIHdpdGggYGZuYC5cclxuICpcclxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXHJcbiAqIEByZXR1cm4ge0VtaXR0ZXJ9XHJcbiAqIEBhcGkgcHVibGljXHJcbiAqL1xyXG5cclxuRW1pdHRlci5wcm90b3R5cGUub24gPVxyXG5FbWl0dGVyLnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24oZXZlbnQsIGZuKXtcclxuICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XHJcbiAgKHRoaXMuX2NhbGxiYWNrc1snJCcgKyBldmVudF0gPSB0aGlzLl9jYWxsYmFja3NbJyQnICsgZXZlbnRdIHx8IFtdKVxyXG4gICAgLnB1c2goZm4pO1xyXG4gIHJldHVybiB0aGlzO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEFkZHMgYW4gYGV2ZW50YCBsaXN0ZW5lciB0aGF0IHdpbGwgYmUgaW52b2tlZCBhIHNpbmdsZVxyXG4gKiB0aW1lIHRoZW4gYXV0b21hdGljYWxseSByZW1vdmVkLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcclxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cclxuICogQHJldHVybiB7RW1pdHRlcn1cclxuICogQGFwaSBwdWJsaWNcclxuICovXHJcblxyXG5FbWl0dGVyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24oZXZlbnQsIGZuKXtcclxuICBmdW5jdGlvbiBvbigpIHtcclxuICAgIHRoaXMub2ZmKGV2ZW50LCBvbik7XHJcbiAgICBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG4gIH1cclxuXHJcbiAgb24uZm4gPSBmbjtcclxuICB0aGlzLm9uKGV2ZW50LCBvbik7XHJcbiAgcmV0dXJuIHRoaXM7XHJcbn07XHJcblxyXG4vKipcclxuICogUmVtb3ZlIHRoZSBnaXZlbiBjYWxsYmFjayBmb3IgYGV2ZW50YCBvciBhbGxcclxuICogcmVnaXN0ZXJlZCBjYWxsYmFja3MuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxyXG4gKiBAcmV0dXJuIHtFbWl0dGVyfVxyXG4gKiBAYXBpIHB1YmxpY1xyXG4gKi9cclxuXHJcbkVtaXR0ZXIucHJvdG90eXBlLm9mZiA9XHJcbkVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyID1cclxuRW1pdHRlci5wcm90b3R5cGUucmVtb3ZlQWxsTGlzdGVuZXJzID1cclxuRW1pdHRlci5wcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKGV2ZW50LCBmbil7XHJcbiAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xyXG5cclxuICAvLyBhbGxcclxuICBpZiAoMCA9PSBhcmd1bWVudHMubGVuZ3RoKSB7XHJcbiAgICB0aGlzLl9jYWxsYmFja3MgPSB7fTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLy8gc3BlY2lmaWMgZXZlbnRcclxuICB2YXIgY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzWyckJyArIGV2ZW50XTtcclxuICBpZiAoIWNhbGxiYWNrcykgcmV0dXJuIHRoaXM7XHJcblxyXG4gIC8vIHJlbW92ZSBhbGwgaGFuZGxlcnNcclxuICBpZiAoMSA9PSBhcmd1bWVudHMubGVuZ3RoKSB7XHJcbiAgICBkZWxldGUgdGhpcy5fY2FsbGJhY2tzWyckJyArIGV2ZW50XTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLy8gcmVtb3ZlIHNwZWNpZmljIGhhbmRsZXJcclxuICB2YXIgY2I7XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjYWxsYmFja3MubGVuZ3RoOyBpKyspIHtcclxuICAgIGNiID0gY2FsbGJhY2tzW2ldO1xyXG4gICAgaWYgKGNiID09PSBmbiB8fCBjYi5mbiA9PT0gZm4pIHtcclxuICAgICAgY2FsbGJhY2tzLnNwbGljZShpLCAxKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBSZW1vdmUgZXZlbnQgc3BlY2lmaWMgYXJyYXlzIGZvciBldmVudCB0eXBlcyB0aGF0IG5vXHJcbiAgLy8gb25lIGlzIHN1YnNjcmliZWQgZm9yIHRvIGF2b2lkIG1lbW9yeSBsZWFrLlxyXG4gIGlmIChjYWxsYmFja3MubGVuZ3RoID09PSAwKSB7XHJcbiAgICBkZWxldGUgdGhpcy5fY2FsbGJhY2tzWyckJyArIGV2ZW50XTtcclxuICB9XHJcblxyXG4gIHJldHVybiB0aGlzO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEVtaXQgYGV2ZW50YCB3aXRoIHRoZSBnaXZlbiBhcmdzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcclxuICogQHBhcmFtIHtNaXhlZH0gLi4uXHJcbiAqIEByZXR1cm4ge0VtaXR0ZXJ9XHJcbiAqL1xyXG5cclxuRW1pdHRlci5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uKGV2ZW50KXtcclxuICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XHJcblxyXG4gIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKVxyXG4gICAgLCBjYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3NbJyQnICsgZXZlbnRdO1xyXG5cclxuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XHJcbiAgfVxyXG5cclxuICBpZiAoY2FsbGJhY2tzKSB7XHJcbiAgICBjYWxsYmFja3MgPSBjYWxsYmFja3Muc2xpY2UoMCk7XHJcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XHJcbiAgICAgIGNhbGxiYWNrc1tpXS5hcHBseSh0aGlzLCBhcmdzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiB0aGlzO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFJldHVybiBhcnJheSBvZiBjYWxsYmFja3MgZm9yIGBldmVudGAuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxyXG4gKiBAcmV0dXJuIHtBcnJheX1cclxuICogQGFwaSBwdWJsaWNcclxuICovXHJcblxyXG5FbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lcnMgPSBmdW5jdGlvbihldmVudCl7XHJcbiAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xyXG4gIHJldHVybiB0aGlzLl9jYWxsYmFja3NbJyQnICsgZXZlbnRdIHx8IFtdO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIENoZWNrIGlmIHRoaXMgZW1pdHRlciBoYXMgYGV2ZW50YCBoYW5kbGVycy5cclxuICpcclxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XHJcbiAqIEByZXR1cm4ge0Jvb2xlYW59XHJcbiAqIEBhcGkgcHVibGljXHJcbiAqL1xyXG5cclxuRW1pdHRlci5wcm90b3R5cGUuaGFzTGlzdGVuZXJzID0gZnVuY3Rpb24oZXZlbnQpe1xyXG4gIHJldHVybiAhISB0aGlzLmxpc3RlbmVycyhldmVudCkubGVuZ3RoO1xyXG59O1xyXG4iLCIvKipcbiAqIEhlbHBlcnMuXG4gKi9cblxudmFyIHMgPSAxMDAwO1xudmFyIG0gPSBzICogNjA7XG52YXIgaCA9IG0gKiA2MDtcbnZhciBkID0gaCAqIDI0O1xudmFyIHcgPSBkICogNztcbnZhciB5ID0gZCAqIDM2NS4yNTtcblxuLyoqXG4gKiBQYXJzZSBvciBmb3JtYXQgdGhlIGdpdmVuIGB2YWxgLlxuICpcbiAqIE9wdGlvbnM6XG4gKlxuICogIC0gYGxvbmdgIHZlcmJvc2UgZm9ybWF0dGluZyBbZmFsc2VdXG4gKlxuICogQHBhcmFtIHtTdHJpbmd8TnVtYmVyfSB2YWxcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEB0aHJvd3Mge0Vycm9yfSB0aHJvdyBhbiBlcnJvciBpZiB2YWwgaXMgbm90IGEgbm9uLWVtcHR5IHN0cmluZyBvciBhIG51bWJlclxuICogQHJldHVybiB7U3RyaW5nfE51bWJlcn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih2YWwsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbDtcbiAgaWYgKHR5cGUgPT09ICdzdHJpbmcnICYmIHZhbC5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIHBhcnNlKHZhbCk7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ251bWJlcicgJiYgaXNGaW5pdGUodmFsKSkge1xuICAgIHJldHVybiBvcHRpb25zLmxvbmcgPyBmbXRMb25nKHZhbCkgOiBmbXRTaG9ydCh2YWwpO1xuICB9XG4gIHRocm93IG5ldyBFcnJvcihcbiAgICAndmFsIGlzIG5vdCBhIG5vbi1lbXB0eSBzdHJpbmcgb3IgYSB2YWxpZCBudW1iZXIuIHZhbD0nICtcbiAgICAgIEpTT04uc3RyaW5naWZ5KHZhbClcbiAgKTtcbn07XG5cbi8qKlxuICogUGFyc2UgdGhlIGdpdmVuIGBzdHJgIGFuZCByZXR1cm4gbWlsbGlzZWNvbmRzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHBhcnNlKHN0cikge1xuICBzdHIgPSBTdHJpbmcoc3RyKTtcbiAgaWYgKHN0ci5sZW5ndGggPiAxMDApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIG1hdGNoID0gL14oLT8oPzpcXGQrKT9cXC4/XFxkKykgKihtaWxsaXNlY29uZHM/fG1zZWNzP3xtc3xzZWNvbmRzP3xzZWNzP3xzfG1pbnV0ZXM/fG1pbnM/fG18aG91cnM/fGhycz98aHxkYXlzP3xkfHdlZWtzP3x3fHllYXJzP3x5cnM/fHkpPyQvaS5leGVjKFxuICAgIHN0clxuICApO1xuICBpZiAoIW1hdGNoKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBuID0gcGFyc2VGbG9hdChtYXRjaFsxXSk7XG4gIHZhciB0eXBlID0gKG1hdGNoWzJdIHx8ICdtcycpLnRvTG93ZXJDYXNlKCk7XG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgJ3llYXJzJzpcbiAgICBjYXNlICd5ZWFyJzpcbiAgICBjYXNlICd5cnMnOlxuICAgIGNhc2UgJ3lyJzpcbiAgICBjYXNlICd5JzpcbiAgICAgIHJldHVybiBuICogeTtcbiAgICBjYXNlICd3ZWVrcyc6XG4gICAgY2FzZSAnd2Vlayc6XG4gICAgY2FzZSAndyc6XG4gICAgICByZXR1cm4gbiAqIHc7XG4gICAgY2FzZSAnZGF5cyc6XG4gICAgY2FzZSAnZGF5JzpcbiAgICBjYXNlICdkJzpcbiAgICAgIHJldHVybiBuICogZDtcbiAgICBjYXNlICdob3Vycyc6XG4gICAgY2FzZSAnaG91cic6XG4gICAgY2FzZSAnaHJzJzpcbiAgICBjYXNlICdocic6XG4gICAgY2FzZSAnaCc6XG4gICAgICByZXR1cm4gbiAqIGg7XG4gICAgY2FzZSAnbWludXRlcyc6XG4gICAgY2FzZSAnbWludXRlJzpcbiAgICBjYXNlICdtaW5zJzpcbiAgICBjYXNlICdtaW4nOlxuICAgIGNhc2UgJ20nOlxuICAgICAgcmV0dXJuIG4gKiBtO1xuICAgIGNhc2UgJ3NlY29uZHMnOlxuICAgIGNhc2UgJ3NlY29uZCc6XG4gICAgY2FzZSAnc2Vjcyc6XG4gICAgY2FzZSAnc2VjJzpcbiAgICBjYXNlICdzJzpcbiAgICAgIHJldHVybiBuICogcztcbiAgICBjYXNlICdtaWxsaXNlY29uZHMnOlxuICAgIGNhc2UgJ21pbGxpc2Vjb25kJzpcbiAgICBjYXNlICdtc2Vjcyc6XG4gICAgY2FzZSAnbXNlYyc6XG4gICAgY2FzZSAnbXMnOlxuICAgICAgcmV0dXJuIG47XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbn1cblxuLyoqXG4gKiBTaG9ydCBmb3JtYXQgZm9yIGBtc2AuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IG1zXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBmbXRTaG9ydChtcykge1xuICB2YXIgbXNBYnMgPSBNYXRoLmFicyhtcyk7XG4gIGlmIChtc0FicyA+PSBkKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBkKSArICdkJztcbiAgfVxuICBpZiAobXNBYnMgPj0gaCkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gaCkgKyAnaCc7XG4gIH1cbiAgaWYgKG1zQWJzID49IG0pIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIG0pICsgJ20nO1xuICB9XG4gIGlmIChtc0FicyA+PSBzKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBzKSArICdzJztcbiAgfVxuICByZXR1cm4gbXMgKyAnbXMnO1xufVxuXG4vKipcbiAqIExvbmcgZm9ybWF0IGZvciBgbXNgLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBtc1xuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gZm10TG9uZyhtcykge1xuICB2YXIgbXNBYnMgPSBNYXRoLmFicyhtcyk7XG4gIGlmIChtc0FicyA+PSBkKSB7XG4gICAgcmV0dXJuIHBsdXJhbChtcywgbXNBYnMsIGQsICdkYXknKTtcbiAgfVxuICBpZiAobXNBYnMgPj0gaCkge1xuICAgIHJldHVybiBwbHVyYWwobXMsIG1zQWJzLCBoLCAnaG91cicpO1xuICB9XG4gIGlmIChtc0FicyA+PSBtKSB7XG4gICAgcmV0dXJuIHBsdXJhbChtcywgbXNBYnMsIG0sICdtaW51dGUnKTtcbiAgfVxuICBpZiAobXNBYnMgPj0gcykge1xuICAgIHJldHVybiBwbHVyYWwobXMsIG1zQWJzLCBzLCAnc2Vjb25kJyk7XG4gIH1cbiAgcmV0dXJuIG1zICsgJyBtcyc7XG59XG5cbi8qKlxuICogUGx1cmFsaXphdGlvbiBoZWxwZXIuXG4gKi9cblxuZnVuY3Rpb24gcGx1cmFsKG1zLCBtc0FicywgbiwgbmFtZSkge1xuICB2YXIgaXNQbHVyYWwgPSBtc0FicyA+PSBuICogMS41O1xuICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIG4pICsgJyAnICsgbmFtZSArIChpc1BsdXJhbCA/ICdzJyA6ICcnKTtcbn1cbiIsIi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG4vKipcbiAqIFRoaXMgaXMgdGhlIHdlYiBicm93c2VyIGltcGxlbWVudGF0aW9uIG9mIGBkZWJ1ZygpYC5cbiAqL1xuXG5leHBvcnRzLmZvcm1hdEFyZ3MgPSBmb3JtYXRBcmdzO1xuZXhwb3J0cy5zYXZlID0gc2F2ZTtcbmV4cG9ydHMubG9hZCA9IGxvYWQ7XG5leHBvcnRzLnVzZUNvbG9ycyA9IHVzZUNvbG9ycztcbmV4cG9ydHMuc3RvcmFnZSA9IGxvY2Fsc3RvcmFnZSgpO1xuZXhwb3J0cy5kZXN0cm95ID0gKCgpID0+IHtcblx0bGV0IHdhcm5lZCA9IGZhbHNlO1xuXG5cdHJldHVybiAoKSA9PiB7XG5cdFx0aWYgKCF3YXJuZWQpIHtcblx0XHRcdHdhcm5lZCA9IHRydWU7XG5cdFx0XHRjb25zb2xlLndhcm4oJ0luc3RhbmNlIG1ldGhvZCBgZGVidWcuZGVzdHJveSgpYCBpcyBkZXByZWNhdGVkIGFuZCBubyBsb25nZXIgZG9lcyBhbnl0aGluZy4gSXQgd2lsbCBiZSByZW1vdmVkIGluIHRoZSBuZXh0IG1ham9yIHZlcnNpb24gb2YgYGRlYnVnYC4nKTtcblx0XHR9XG5cdH07XG59KSgpO1xuXG4vKipcbiAqIENvbG9ycy5cbiAqL1xuXG5leHBvcnRzLmNvbG9ycyA9IFtcblx0JyMwMDAwQ0MnLFxuXHQnIzAwMDBGRicsXG5cdCcjMDAzM0NDJyxcblx0JyMwMDMzRkYnLFxuXHQnIzAwNjZDQycsXG5cdCcjMDA2NkZGJyxcblx0JyMwMDk5Q0MnLFxuXHQnIzAwOTlGRicsXG5cdCcjMDBDQzAwJyxcblx0JyMwMENDMzMnLFxuXHQnIzAwQ0M2NicsXG5cdCcjMDBDQzk5Jyxcblx0JyMwMENDQ0MnLFxuXHQnIzAwQ0NGRicsXG5cdCcjMzMwMENDJyxcblx0JyMzMzAwRkYnLFxuXHQnIzMzMzNDQycsXG5cdCcjMzMzM0ZGJyxcblx0JyMzMzY2Q0MnLFxuXHQnIzMzNjZGRicsXG5cdCcjMzM5OUNDJyxcblx0JyMzMzk5RkYnLFxuXHQnIzMzQ0MwMCcsXG5cdCcjMzNDQzMzJyxcblx0JyMzM0NDNjYnLFxuXHQnIzMzQ0M5OScsXG5cdCcjMzNDQ0NDJyxcblx0JyMzM0NDRkYnLFxuXHQnIzY2MDBDQycsXG5cdCcjNjYwMEZGJyxcblx0JyM2NjMzQ0MnLFxuXHQnIzY2MzNGRicsXG5cdCcjNjZDQzAwJyxcblx0JyM2NkNDMzMnLFxuXHQnIzk5MDBDQycsXG5cdCcjOTkwMEZGJyxcblx0JyM5OTMzQ0MnLFxuXHQnIzk5MzNGRicsXG5cdCcjOTlDQzAwJyxcblx0JyM5OUNDMzMnLFxuXHQnI0NDMDAwMCcsXG5cdCcjQ0MwMDMzJyxcblx0JyNDQzAwNjYnLFxuXHQnI0NDMDA5OScsXG5cdCcjQ0MwMENDJyxcblx0JyNDQzAwRkYnLFxuXHQnI0NDMzMwMCcsXG5cdCcjQ0MzMzMzJyxcblx0JyNDQzMzNjYnLFxuXHQnI0NDMzM5OScsXG5cdCcjQ0MzM0NDJyxcblx0JyNDQzMzRkYnLFxuXHQnI0NDNjYwMCcsXG5cdCcjQ0M2NjMzJyxcblx0JyNDQzk5MDAnLFxuXHQnI0NDOTkzMycsXG5cdCcjQ0NDQzAwJyxcblx0JyNDQ0NDMzMnLFxuXHQnI0ZGMDAwMCcsXG5cdCcjRkYwMDMzJyxcblx0JyNGRjAwNjYnLFxuXHQnI0ZGMDA5OScsXG5cdCcjRkYwMENDJyxcblx0JyNGRjAwRkYnLFxuXHQnI0ZGMzMwMCcsXG5cdCcjRkYzMzMzJyxcblx0JyNGRjMzNjYnLFxuXHQnI0ZGMzM5OScsXG5cdCcjRkYzM0NDJyxcblx0JyNGRjMzRkYnLFxuXHQnI0ZGNjYwMCcsXG5cdCcjRkY2NjMzJyxcblx0JyNGRjk5MDAnLFxuXHQnI0ZGOTkzMycsXG5cdCcjRkZDQzAwJyxcblx0JyNGRkNDMzMnXG5dO1xuXG4vKipcbiAqIEN1cnJlbnRseSBvbmx5IFdlYktpdC1iYXNlZCBXZWIgSW5zcGVjdG9ycywgRmlyZWZveCA+PSB2MzEsXG4gKiBhbmQgdGhlIEZpcmVidWcgZXh0ZW5zaW9uIChhbnkgRmlyZWZveCB2ZXJzaW9uKSBhcmUga25vd25cbiAqIHRvIHN1cHBvcnQgXCIlY1wiIENTUyBjdXN0b21pemF0aW9ucy5cbiAqXG4gKiBUT0RPOiBhZGQgYSBgbG9jYWxTdG9yYWdlYCB2YXJpYWJsZSB0byBleHBsaWNpdGx5IGVuYWJsZS9kaXNhYmxlIGNvbG9yc1xuICovXG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb21wbGV4aXR5XG5mdW5jdGlvbiB1c2VDb2xvcnMoKSB7XG5cdC8vIE5COiBJbiBhbiBFbGVjdHJvbiBwcmVsb2FkIHNjcmlwdCwgZG9jdW1lbnQgd2lsbCBiZSBkZWZpbmVkIGJ1dCBub3QgZnVsbHlcblx0Ly8gaW5pdGlhbGl6ZWQuIFNpbmNlIHdlIGtub3cgd2UncmUgaW4gQ2hyb21lLCB3ZSdsbCBqdXN0IGRldGVjdCB0aGlzIGNhc2Vcblx0Ly8gZXhwbGljaXRseVxuXHRpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LnByb2Nlc3MgJiYgKHdpbmRvdy5wcm9jZXNzLnR5cGUgPT09ICdyZW5kZXJlcicgfHwgd2luZG93LnByb2Nlc3MuX19ud2pzKSkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0Ly8gSW50ZXJuZXQgRXhwbG9yZXIgYW5kIEVkZ2UgZG8gbm90IHN1cHBvcnQgY29sb3JzLlxuXHRpZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudCAmJiBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkubWF0Y2goLyhlZGdlfHRyaWRlbnQpXFwvKFxcZCspLykpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHQvLyBJcyB3ZWJraXQ/IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzE2NDU5NjA2LzM3Njc3M1xuXHQvLyBkb2N1bWVudCBpcyB1bmRlZmluZWQgaW4gcmVhY3QtbmF0aXZlOiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QtbmF0aXZlL3B1bGwvMTYzMlxuXHRyZXR1cm4gKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZSAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuV2Via2l0QXBwZWFyYW5jZSkgfHxcblx0XHQvLyBJcyBmaXJlYnVnPyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8zOTgxMjAvMzc2NzczXG5cdFx0KHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5jb25zb2xlICYmICh3aW5kb3cuY29uc29sZS5maXJlYnVnIHx8ICh3aW5kb3cuY29uc29sZS5leGNlcHRpb24gJiYgd2luZG93LmNvbnNvbGUudGFibGUpKSkgfHxcblx0XHQvLyBJcyBmaXJlZm94ID49IHYzMT9cblx0XHQvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1Rvb2xzL1dlYl9Db25zb2xlI1N0eWxpbmdfbWVzc2FnZXNcblx0XHQodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudCAmJiBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkubWF0Y2goL2ZpcmVmb3hcXC8oXFxkKykvKSAmJiBwYXJzZUludChSZWdFeHAuJDEsIDEwKSA+PSAzMSkgfHxcblx0XHQvLyBEb3VibGUgY2hlY2sgd2Via2l0IGluIHVzZXJBZ2VudCBqdXN0IGluIGNhc2Ugd2UgYXJlIGluIGEgd29ya2VyXG5cdFx0KHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci51c2VyQWdlbnQgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLm1hdGNoKC9hcHBsZXdlYmtpdFxcLyhcXGQrKS8pKTtcbn1cblxuLyoqXG4gKiBDb2xvcml6ZSBsb2cgYXJndW1lbnRzIGlmIGVuYWJsZWQuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBmb3JtYXRBcmdzKGFyZ3MpIHtcblx0YXJnc1swXSA9ICh0aGlzLnVzZUNvbG9ycyA/ICclYycgOiAnJykgK1xuXHRcdHRoaXMubmFtZXNwYWNlICtcblx0XHQodGhpcy51c2VDb2xvcnMgPyAnICVjJyA6ICcgJykgK1xuXHRcdGFyZ3NbMF0gK1xuXHRcdCh0aGlzLnVzZUNvbG9ycyA/ICclYyAnIDogJyAnKSArXG5cdFx0JysnICsgbW9kdWxlLmV4cG9ydHMuaHVtYW5pemUodGhpcy5kaWZmKTtcblxuXHRpZiAoIXRoaXMudXNlQ29sb3JzKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgYyA9ICdjb2xvcjogJyArIHRoaXMuY29sb3I7XG5cdGFyZ3Muc3BsaWNlKDEsIDAsIGMsICdjb2xvcjogaW5oZXJpdCcpO1xuXG5cdC8vIFRoZSBmaW5hbCBcIiVjXCIgaXMgc29tZXdoYXQgdHJpY2t5LCBiZWNhdXNlIHRoZXJlIGNvdWxkIGJlIG90aGVyXG5cdC8vIGFyZ3VtZW50cyBwYXNzZWQgZWl0aGVyIGJlZm9yZSBvciBhZnRlciB0aGUgJWMsIHNvIHdlIG5lZWQgdG9cblx0Ly8gZmlndXJlIG91dCB0aGUgY29ycmVjdCBpbmRleCB0byBpbnNlcnQgdGhlIENTUyBpbnRvXG5cdGxldCBpbmRleCA9IDA7XG5cdGxldCBsYXN0QyA9IDA7XG5cdGFyZ3NbMF0ucmVwbGFjZSgvJVthLXpBLVolXS9nLCBtYXRjaCA9PiB7XG5cdFx0aWYgKG1hdGNoID09PSAnJSUnKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGluZGV4Kys7XG5cdFx0aWYgKG1hdGNoID09PSAnJWMnKSB7XG5cdFx0XHQvLyBXZSBvbmx5IGFyZSBpbnRlcmVzdGVkIGluIHRoZSAqbGFzdCogJWNcblx0XHRcdC8vICh0aGUgdXNlciBtYXkgaGF2ZSBwcm92aWRlZCB0aGVpciBvd24pXG5cdFx0XHRsYXN0QyA9IGluZGV4O1xuXHRcdH1cblx0fSk7XG5cblx0YXJncy5zcGxpY2UobGFzdEMsIDAsIGMpO1xufVxuXG4vKipcbiAqIEludm9rZXMgYGNvbnNvbGUuZGVidWcoKWAgd2hlbiBhdmFpbGFibGUuXG4gKiBOby1vcCB3aGVuIGBjb25zb2xlLmRlYnVnYCBpcyBub3QgYSBcImZ1bmN0aW9uXCIuXG4gKiBJZiBgY29uc29sZS5kZWJ1Z2AgaXMgbm90IGF2YWlsYWJsZSwgZmFsbHMgYmFja1xuICogdG8gYGNvbnNvbGUubG9nYC5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5leHBvcnRzLmxvZyA9IGNvbnNvbGUuZGVidWcgfHwgY29uc29sZS5sb2cgfHwgKCgpID0+IHt9KTtcblxuLyoqXG4gKiBTYXZlIGBuYW1lc3BhY2VzYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlc1xuICogQGFwaSBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHNhdmUobmFtZXNwYWNlcykge1xuXHR0cnkge1xuXHRcdGlmIChuYW1lc3BhY2VzKSB7XG5cdFx0XHRleHBvcnRzLnN0b3JhZ2Uuc2V0SXRlbSgnZGVidWcnLCBuYW1lc3BhY2VzKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZXhwb3J0cy5zdG9yYWdlLnJlbW92ZUl0ZW0oJ2RlYnVnJyk7XG5cdFx0fVxuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdC8vIFN3YWxsb3dcblx0XHQvLyBYWFggKEBRaXgtKSBzaG91bGQgd2UgYmUgbG9nZ2luZyB0aGVzZT9cblx0fVxufVxuXG4vKipcbiAqIExvYWQgYG5hbWVzcGFjZXNgLlxuICpcbiAqIEByZXR1cm4ge1N0cmluZ30gcmV0dXJucyB0aGUgcHJldmlvdXNseSBwZXJzaXN0ZWQgZGVidWcgbW9kZXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBsb2FkKCkge1xuXHRsZXQgcjtcblx0dHJ5IHtcblx0XHRyID0gZXhwb3J0cy5zdG9yYWdlLmdldEl0ZW0oJ2RlYnVnJyk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Ly8gU3dhbGxvd1xuXHRcdC8vIFhYWCAoQFFpeC0pIHNob3VsZCB3ZSBiZSBsb2dnaW5nIHRoZXNlP1xuXHR9XG5cblx0Ly8gSWYgZGVidWcgaXNuJ3Qgc2V0IGluIExTLCBhbmQgd2UncmUgaW4gRWxlY3Ryb24sIHRyeSB0byBsb2FkICRERUJVR1xuXHRpZiAoIXIgJiYgdHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmICdlbnYnIGluIHByb2Nlc3MpIHtcblx0XHRyID0gcHJvY2Vzcy5lbnYuREVCVUc7XG5cdH1cblxuXHRyZXR1cm4gcjtcbn1cblxuLyoqXG4gKiBMb2NhbHN0b3JhZ2UgYXR0ZW1wdHMgdG8gcmV0dXJuIHRoZSBsb2NhbHN0b3JhZ2UuXG4gKlxuICogVGhpcyBpcyBuZWNlc3NhcnkgYmVjYXVzZSBzYWZhcmkgdGhyb3dzXG4gKiB3aGVuIGEgdXNlciBkaXNhYmxlcyBjb29raWVzL2xvY2Fsc3RvcmFnZVxuICogYW5kIHlvdSBhdHRlbXB0IHRvIGFjY2VzcyBpdC5cbiAqXG4gKiBAcmV0dXJuIHtMb2NhbFN0b3JhZ2V9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBsb2NhbHN0b3JhZ2UoKSB7XG5cdHRyeSB7XG5cdFx0Ly8gVFZNTEtpdCAoQXBwbGUgVFYgSlMgUnVudGltZSkgZG9lcyBub3QgaGF2ZSBhIHdpbmRvdyBvYmplY3QsIGp1c3QgbG9jYWxTdG9yYWdlIGluIHRoZSBnbG9iYWwgY29udGV4dFxuXHRcdC8vIFRoZSBCcm93c2VyIGFsc28gaGFzIGxvY2FsU3RvcmFnZSBpbiB0aGUgZ2xvYmFsIGNvbnRleHQuXG5cdFx0cmV0dXJuIGxvY2FsU3RvcmFnZTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHQvLyBTd2FsbG93XG5cdFx0Ly8gWFhYIChAUWl4LSkgc2hvdWxkIHdlIGJlIGxvZ2dpbmcgdGhlc2U/XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2NvbW1vbicpKGV4cG9ydHMpO1xuXG5jb25zdCB7Zm9ybWF0dGVyc30gPSBtb2R1bGUuZXhwb3J0cztcblxuLyoqXG4gKiBNYXAgJWogdG8gYEpTT04uc3RyaW5naWZ5KClgLCBzaW5jZSBubyBXZWIgSW5zcGVjdG9ycyBkbyB0aGF0IGJ5IGRlZmF1bHQuXG4gKi9cblxuZm9ybWF0dGVycy5qID0gZnVuY3Rpb24gKHYpIHtcblx0dHJ5IHtcblx0XHRyZXR1cm4gSlNPTi5zdHJpbmdpZnkodik7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0cmV0dXJuICdbVW5leHBlY3RlZEpTT05QYXJzZUVycm9yXTogJyArIGVycm9yLm1lc3NhZ2U7XG5cdH1cbn07XG4iLCJcbi8qKlxuICogVGhpcyBpcyB0aGUgY29tbW9uIGxvZ2ljIGZvciBib3RoIHRoZSBOb2RlLmpzIGFuZCB3ZWIgYnJvd3NlclxuICogaW1wbGVtZW50YXRpb25zIG9mIGBkZWJ1ZygpYC5cbiAqL1xuXG5mdW5jdGlvbiBzZXR1cChlbnYpIHtcblx0Y3JlYXRlRGVidWcuZGVidWcgPSBjcmVhdGVEZWJ1Zztcblx0Y3JlYXRlRGVidWcuZGVmYXVsdCA9IGNyZWF0ZURlYnVnO1xuXHRjcmVhdGVEZWJ1Zy5jb2VyY2UgPSBjb2VyY2U7XG5cdGNyZWF0ZURlYnVnLmRpc2FibGUgPSBkaXNhYmxlO1xuXHRjcmVhdGVEZWJ1Zy5lbmFibGUgPSBlbmFibGU7XG5cdGNyZWF0ZURlYnVnLmVuYWJsZWQgPSBlbmFibGVkO1xuXHRjcmVhdGVEZWJ1Zy5odW1hbml6ZSA9IHJlcXVpcmUoJ21zJyk7XG5cdGNyZWF0ZURlYnVnLmRlc3Ryb3kgPSBkZXN0cm95O1xuXG5cdE9iamVjdC5rZXlzKGVudikuZm9yRWFjaChrZXkgPT4ge1xuXHRcdGNyZWF0ZURlYnVnW2tleV0gPSBlbnZba2V5XTtcblx0fSk7XG5cblx0LyoqXG5cdCogVGhlIGN1cnJlbnRseSBhY3RpdmUgZGVidWcgbW9kZSBuYW1lcywgYW5kIG5hbWVzIHRvIHNraXAuXG5cdCovXG5cblx0Y3JlYXRlRGVidWcubmFtZXMgPSBbXTtcblx0Y3JlYXRlRGVidWcuc2tpcHMgPSBbXTtcblxuXHQvKipcblx0KiBNYXAgb2Ygc3BlY2lhbCBcIiVuXCIgaGFuZGxpbmcgZnVuY3Rpb25zLCBmb3IgdGhlIGRlYnVnIFwiZm9ybWF0XCIgYXJndW1lbnQuXG5cdCpcblx0KiBWYWxpZCBrZXkgbmFtZXMgYXJlIGEgc2luZ2xlLCBsb3dlciBvciB1cHBlci1jYXNlIGxldHRlciwgaS5lLiBcIm5cIiBhbmQgXCJOXCIuXG5cdCovXG5cdGNyZWF0ZURlYnVnLmZvcm1hdHRlcnMgPSB7fTtcblxuXHQvKipcblx0KiBTZWxlY3RzIGEgY29sb3IgZm9yIGEgZGVidWcgbmFtZXNwYWNlXG5cdCogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZSBUaGUgbmFtZXNwYWNlIHN0cmluZyBmb3IgdGhlIGZvciB0aGUgZGVidWcgaW5zdGFuY2UgdG8gYmUgY29sb3JlZFxuXHQqIEByZXR1cm4ge051bWJlcnxTdHJpbmd9IEFuIEFOU0kgY29sb3IgY29kZSBmb3IgdGhlIGdpdmVuIG5hbWVzcGFjZVxuXHQqIEBhcGkgcHJpdmF0ZVxuXHQqL1xuXHRmdW5jdGlvbiBzZWxlY3RDb2xvcihuYW1lc3BhY2UpIHtcblx0XHRsZXQgaGFzaCA9IDA7XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IG5hbWVzcGFjZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0aGFzaCA9ICgoaGFzaCA8PCA1KSAtIGhhc2gpICsgbmFtZXNwYWNlLmNoYXJDb2RlQXQoaSk7XG5cdFx0XHRoYXNoIHw9IDA7IC8vIENvbnZlcnQgdG8gMzJiaXQgaW50ZWdlclxuXHRcdH1cblxuXHRcdHJldHVybiBjcmVhdGVEZWJ1Zy5jb2xvcnNbTWF0aC5hYnMoaGFzaCkgJSBjcmVhdGVEZWJ1Zy5jb2xvcnMubGVuZ3RoXTtcblx0fVxuXHRjcmVhdGVEZWJ1Zy5zZWxlY3RDb2xvciA9IHNlbGVjdENvbG9yO1xuXG5cdC8qKlxuXHQqIENyZWF0ZSBhIGRlYnVnZ2VyIHdpdGggdGhlIGdpdmVuIGBuYW1lc3BhY2VgLlxuXHQqXG5cdCogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZVxuXHQqIEByZXR1cm4ge0Z1bmN0aW9ufVxuXHQqIEBhcGkgcHVibGljXG5cdCovXG5cdGZ1bmN0aW9uIGNyZWF0ZURlYnVnKG5hbWVzcGFjZSkge1xuXHRcdGxldCBwcmV2VGltZTtcblx0XHRsZXQgZW5hYmxlT3ZlcnJpZGUgPSBudWxsO1xuXG5cdFx0ZnVuY3Rpb24gZGVidWcoLi4uYXJncykge1xuXHRcdFx0Ly8gRGlzYWJsZWQ/XG5cdFx0XHRpZiAoIWRlYnVnLmVuYWJsZWQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBzZWxmID0gZGVidWc7XG5cblx0XHRcdC8vIFNldCBgZGlmZmAgdGltZXN0YW1wXG5cdFx0XHRjb25zdCBjdXJyID0gTnVtYmVyKG5ldyBEYXRlKCkpO1xuXHRcdFx0Y29uc3QgbXMgPSBjdXJyIC0gKHByZXZUaW1lIHx8IGN1cnIpO1xuXHRcdFx0c2VsZi5kaWZmID0gbXM7XG5cdFx0XHRzZWxmLnByZXYgPSBwcmV2VGltZTtcblx0XHRcdHNlbGYuY3VyciA9IGN1cnI7XG5cdFx0XHRwcmV2VGltZSA9IGN1cnI7XG5cblx0XHRcdGFyZ3NbMF0gPSBjcmVhdGVEZWJ1Zy5jb2VyY2UoYXJnc1swXSk7XG5cblx0XHRcdGlmICh0eXBlb2YgYXJnc1swXSAhPT0gJ3N0cmluZycpIHtcblx0XHRcdFx0Ly8gQW55dGhpbmcgZWxzZSBsZXQncyBpbnNwZWN0IHdpdGggJU9cblx0XHRcdFx0YXJncy51bnNoaWZ0KCclTycpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBBcHBseSBhbnkgYGZvcm1hdHRlcnNgIHRyYW5zZm9ybWF0aW9uc1xuXHRcdFx0bGV0IGluZGV4ID0gMDtcblx0XHRcdGFyZ3NbMF0gPSBhcmdzWzBdLnJlcGxhY2UoLyUoW2EtekEtWiVdKS9nLCAobWF0Y2gsIGZvcm1hdCkgPT4ge1xuXHRcdFx0XHQvLyBJZiB3ZSBlbmNvdW50ZXIgYW4gZXNjYXBlZCAlIHRoZW4gZG9uJ3QgaW5jcmVhc2UgdGhlIGFycmF5IGluZGV4XG5cdFx0XHRcdGlmIChtYXRjaCA9PT0gJyUlJykge1xuXHRcdFx0XHRcdHJldHVybiAnJSc7XG5cdFx0XHRcdH1cblx0XHRcdFx0aW5kZXgrKztcblx0XHRcdFx0Y29uc3QgZm9ybWF0dGVyID0gY3JlYXRlRGVidWcuZm9ybWF0dGVyc1tmb3JtYXRdO1xuXHRcdFx0XHRpZiAodHlwZW9mIGZvcm1hdHRlciA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRcdGNvbnN0IHZhbCA9IGFyZ3NbaW5kZXhdO1xuXHRcdFx0XHRcdG1hdGNoID0gZm9ybWF0dGVyLmNhbGwoc2VsZiwgdmFsKTtcblxuXHRcdFx0XHRcdC8vIE5vdyB3ZSBuZWVkIHRvIHJlbW92ZSBgYXJnc1tpbmRleF1gIHNpbmNlIGl0J3MgaW5saW5lZCBpbiB0aGUgYGZvcm1hdGBcblx0XHRcdFx0XHRhcmdzLnNwbGljZShpbmRleCwgMSk7XG5cdFx0XHRcdFx0aW5kZXgtLTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gbWF0Y2g7XG5cdFx0XHR9KTtcblxuXHRcdFx0Ly8gQXBwbHkgZW52LXNwZWNpZmljIGZvcm1hdHRpbmcgKGNvbG9ycywgZXRjLilcblx0XHRcdGNyZWF0ZURlYnVnLmZvcm1hdEFyZ3MuY2FsbChzZWxmLCBhcmdzKTtcblxuXHRcdFx0Y29uc3QgbG9nRm4gPSBzZWxmLmxvZyB8fCBjcmVhdGVEZWJ1Zy5sb2c7XG5cdFx0XHRsb2dGbi5hcHBseShzZWxmLCBhcmdzKTtcblx0XHR9XG5cblx0XHRkZWJ1Zy5uYW1lc3BhY2UgPSBuYW1lc3BhY2U7XG5cdFx0ZGVidWcudXNlQ29sb3JzID0gY3JlYXRlRGVidWcudXNlQ29sb3JzKCk7XG5cdFx0ZGVidWcuY29sb3IgPSBjcmVhdGVEZWJ1Zy5zZWxlY3RDb2xvcihuYW1lc3BhY2UpO1xuXHRcdGRlYnVnLmV4dGVuZCA9IGV4dGVuZDtcblx0XHRkZWJ1Zy5kZXN0cm95ID0gY3JlYXRlRGVidWcuZGVzdHJveTsgLy8gWFhYIFRlbXBvcmFyeS4gV2lsbCBiZSByZW1vdmVkIGluIHRoZSBuZXh0IG1ham9yIHJlbGVhc2UuXG5cblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZGVidWcsICdlbmFibGVkJywge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG5cdFx0XHRnZXQ6ICgpID0+IGVuYWJsZU92ZXJyaWRlID09PSBudWxsID8gY3JlYXRlRGVidWcuZW5hYmxlZChuYW1lc3BhY2UpIDogZW5hYmxlT3ZlcnJpZGUsXG5cdFx0XHRzZXQ6IHYgPT4ge1xuXHRcdFx0XHRlbmFibGVPdmVycmlkZSA9IHY7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHQvLyBFbnYtc3BlY2lmaWMgaW5pdGlhbGl6YXRpb24gbG9naWMgZm9yIGRlYnVnIGluc3RhbmNlc1xuXHRcdGlmICh0eXBlb2YgY3JlYXRlRGVidWcuaW5pdCA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0Y3JlYXRlRGVidWcuaW5pdChkZWJ1Zyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGRlYnVnO1xuXHR9XG5cblx0ZnVuY3Rpb24gZXh0ZW5kKG5hbWVzcGFjZSwgZGVsaW1pdGVyKSB7XG5cdFx0Y29uc3QgbmV3RGVidWcgPSBjcmVhdGVEZWJ1Zyh0aGlzLm5hbWVzcGFjZSArICh0eXBlb2YgZGVsaW1pdGVyID09PSAndW5kZWZpbmVkJyA/ICc6JyA6IGRlbGltaXRlcikgKyBuYW1lc3BhY2UpO1xuXHRcdG5ld0RlYnVnLmxvZyA9IHRoaXMubG9nO1xuXHRcdHJldHVybiBuZXdEZWJ1Zztcblx0fVxuXG5cdC8qKlxuXHQqIEVuYWJsZXMgYSBkZWJ1ZyBtb2RlIGJ5IG5hbWVzcGFjZXMuIFRoaXMgY2FuIGluY2x1ZGUgbW9kZXNcblx0KiBzZXBhcmF0ZWQgYnkgYSBjb2xvbiBhbmQgd2lsZGNhcmRzLlxuXHQqXG5cdCogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZXNcblx0KiBAYXBpIHB1YmxpY1xuXHQqL1xuXHRmdW5jdGlvbiBlbmFibGUobmFtZXNwYWNlcykge1xuXHRcdGNyZWF0ZURlYnVnLnNhdmUobmFtZXNwYWNlcyk7XG5cblx0XHRjcmVhdGVEZWJ1Zy5uYW1lcyA9IFtdO1xuXHRcdGNyZWF0ZURlYnVnLnNraXBzID0gW107XG5cblx0XHRsZXQgaTtcblx0XHRjb25zdCBzcGxpdCA9ICh0eXBlb2YgbmFtZXNwYWNlcyA9PT0gJ3N0cmluZycgPyBuYW1lc3BhY2VzIDogJycpLnNwbGl0KC9bXFxzLF0rLyk7XG5cdFx0Y29uc3QgbGVuID0gc3BsaXQubGVuZ3RoO1xuXG5cdFx0Zm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHRpZiAoIXNwbGl0W2ldKSB7XG5cdFx0XHRcdC8vIGlnbm9yZSBlbXB0eSBzdHJpbmdzXG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRuYW1lc3BhY2VzID0gc3BsaXRbaV0ucmVwbGFjZSgvXFwqL2csICcuKj8nKTtcblxuXHRcdFx0aWYgKG5hbWVzcGFjZXNbMF0gPT09ICctJykge1xuXHRcdFx0XHRjcmVhdGVEZWJ1Zy5za2lwcy5wdXNoKG5ldyBSZWdFeHAoJ14nICsgbmFtZXNwYWNlcy5zdWJzdHIoMSkgKyAnJCcpKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNyZWF0ZURlYnVnLm5hbWVzLnB1c2gobmV3IFJlZ0V4cCgnXicgKyBuYW1lc3BhY2VzICsgJyQnKSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCogRGlzYWJsZSBkZWJ1ZyBvdXRwdXQuXG5cdCpcblx0KiBAcmV0dXJuIHtTdHJpbmd9IG5hbWVzcGFjZXNcblx0KiBAYXBpIHB1YmxpY1xuXHQqL1xuXHRmdW5jdGlvbiBkaXNhYmxlKCkge1xuXHRcdGNvbnN0IG5hbWVzcGFjZXMgPSBbXG5cdFx0XHQuLi5jcmVhdGVEZWJ1Zy5uYW1lcy5tYXAodG9OYW1lc3BhY2UpLFxuXHRcdFx0Li4uY3JlYXRlRGVidWcuc2tpcHMubWFwKHRvTmFtZXNwYWNlKS5tYXAobmFtZXNwYWNlID0+ICctJyArIG5hbWVzcGFjZSlcblx0XHRdLmpvaW4oJywnKTtcblx0XHRjcmVhdGVEZWJ1Zy5lbmFibGUoJycpO1xuXHRcdHJldHVybiBuYW1lc3BhY2VzO1xuXHR9XG5cblx0LyoqXG5cdCogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiBtb2RlIG5hbWUgaXMgZW5hYmxlZCwgZmFsc2Ugb3RoZXJ3aXNlLlxuXHQqXG5cdCogQHBhcmFtIHtTdHJpbmd9IG5hbWVcblx0KiBAcmV0dXJuIHtCb29sZWFufVxuXHQqIEBhcGkgcHVibGljXG5cdCovXG5cdGZ1bmN0aW9uIGVuYWJsZWQobmFtZSkge1xuXHRcdGlmIChuYW1lW25hbWUubGVuZ3RoIC0gMV0gPT09ICcqJykge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0bGV0IGk7XG5cdFx0bGV0IGxlbjtcblxuXHRcdGZvciAoaSA9IDAsIGxlbiA9IGNyZWF0ZURlYnVnLnNraXBzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHRpZiAoY3JlYXRlRGVidWcuc2tpcHNbaV0udGVzdChuYW1lKSkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Zm9yIChpID0gMCwgbGVuID0gY3JlYXRlRGVidWcubmFtZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdGlmIChjcmVhdGVEZWJ1Zy5uYW1lc1tpXS50ZXN0KG5hbWUpKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdC8qKlxuXHQqIENvbnZlcnQgcmVnZXhwIHRvIG5hbWVzcGFjZVxuXHQqXG5cdCogQHBhcmFtIHtSZWdFeHB9IHJlZ3hlcFxuXHQqIEByZXR1cm4ge1N0cmluZ30gbmFtZXNwYWNlXG5cdCogQGFwaSBwcml2YXRlXG5cdCovXG5cdGZ1bmN0aW9uIHRvTmFtZXNwYWNlKHJlZ2V4cCkge1xuXHRcdHJldHVybiByZWdleHAudG9TdHJpbmcoKVxuXHRcdFx0LnN1YnN0cmluZygyLCByZWdleHAudG9TdHJpbmcoKS5sZW5ndGggLSAyKVxuXHRcdFx0LnJlcGxhY2UoL1xcLlxcKlxcPyQvLCAnKicpO1xuXHR9XG5cblx0LyoqXG5cdCogQ29lcmNlIGB2YWxgLlxuXHQqXG5cdCogQHBhcmFtIHtNaXhlZH0gdmFsXG5cdCogQHJldHVybiB7TWl4ZWR9XG5cdCogQGFwaSBwcml2YXRlXG5cdCovXG5cdGZ1bmN0aW9uIGNvZXJjZSh2YWwpIHtcblx0XHRpZiAodmFsIGluc3RhbmNlb2YgRXJyb3IpIHtcblx0XHRcdHJldHVybiB2YWwuc3RhY2sgfHwgdmFsLm1lc3NhZ2U7XG5cdFx0fVxuXHRcdHJldHVybiB2YWw7XG5cdH1cblxuXHQvKipcblx0KiBYWFggRE8gTk9UIFVTRS4gVGhpcyBpcyBhIHRlbXBvcmFyeSBzdHViIGZ1bmN0aW9uLlxuXHQqIFhYWCBJdCBXSUxMIGJlIHJlbW92ZWQgaW4gdGhlIG5leHQgbWFqb3IgcmVsZWFzZS5cblx0Ki9cblx0ZnVuY3Rpb24gZGVzdHJveSgpIHtcblx0XHRjb25zb2xlLndhcm4oJ0luc3RhbmNlIG1ldGhvZCBgZGVidWcuZGVzdHJveSgpYCBpcyBkZXByZWNhdGVkIGFuZCBubyBsb25nZXIgZG9lcyBhbnl0aGluZy4gSXQgd2lsbCBiZSByZW1vdmVkIGluIHRoZSBuZXh0IG1ham9yIHZlcnNpb24gb2YgYGRlYnVnYC4nKTtcblx0fVxuXG5cdGNyZWF0ZURlYnVnLmVuYWJsZShjcmVhdGVEZWJ1Zy5sb2FkKCkpO1xuXG5cdHJldHVybiBjcmVhdGVEZWJ1Zztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXR1cDtcbiIsIm1vZHVsZS5leHBvcnRzID0gKCgpID0+IHtcbiAgaWYgKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHNlbGY7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB3aW5kb3c7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbiAgfVxufSkoKTtcbiIsImNvbnN0IFNvY2tldCA9IHJlcXVpcmUoXCIuL3NvY2tldFwiKTtcblxubW9kdWxlLmV4cG9ydHMgPSAodXJpLCBvcHRzKSA9PiBuZXcgU29ja2V0KHVyaSwgb3B0cyk7XG5cbi8qKlxuICogRXhwb3NlIGRlcHMgZm9yIGxlZ2FjeSBjb21wYXRpYmlsaXR5XG4gKiBhbmQgc3RhbmRhbG9uZSBicm93c2VyIGFjY2Vzcy5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cy5Tb2NrZXQgPSBTb2NrZXQ7XG5tb2R1bGUuZXhwb3J0cy5wcm90b2NvbCA9IFNvY2tldC5wcm90b2NvbDsgLy8gdGhpcyBpcyBhbiBpbnRcbm1vZHVsZS5leHBvcnRzLlRyYW5zcG9ydCA9IHJlcXVpcmUoXCIuL3RyYW5zcG9ydFwiKTtcbm1vZHVsZS5leHBvcnRzLnRyYW5zcG9ydHMgPSByZXF1aXJlKFwiLi90cmFuc3BvcnRzL2luZGV4XCIpO1xubW9kdWxlLmV4cG9ydHMucGFyc2VyID0gcmVxdWlyZShcImVuZ2luZS5pby1wYXJzZXJcIik7XG4iLCJjb25zdCB0cmFuc3BvcnRzID0gcmVxdWlyZShcIi4vdHJhbnNwb3J0cy9pbmRleFwiKTtcbmNvbnN0IEVtaXR0ZXIgPSByZXF1aXJlKFwiY29tcG9uZW50LWVtaXR0ZXJcIik7XG5jb25zdCBkZWJ1ZyA9IHJlcXVpcmUoXCJkZWJ1Z1wiKShcImVuZ2luZS5pby1jbGllbnQ6c29ja2V0XCIpO1xuY29uc3QgcGFyc2VyID0gcmVxdWlyZShcImVuZ2luZS5pby1wYXJzZXJcIik7XG5jb25zdCBwYXJzZXVyaSA9IHJlcXVpcmUoXCJwYXJzZXVyaVwiKTtcbmNvbnN0IHBhcnNlcXMgPSByZXF1aXJlKFwicGFyc2Vxc1wiKTtcblxuY2xhc3MgU29ja2V0IGV4dGVuZHMgRW1pdHRlciB7XG4gIC8qKlxuICAgKiBTb2NrZXQgY29uc3RydWN0b3IuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfE9iamVjdH0gdXJpIG9yIG9wdGlvbnNcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG4gIGNvbnN0cnVjdG9yKHVyaSwgb3B0cyA9IHt9KSB7XG4gICAgc3VwZXIoKTtcblxuICAgIGlmICh1cmkgJiYgXCJvYmplY3RcIiA9PT0gdHlwZW9mIHVyaSkge1xuICAgICAgb3B0cyA9IHVyaTtcbiAgICAgIHVyaSA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHVyaSkge1xuICAgICAgdXJpID0gcGFyc2V1cmkodXJpKTtcbiAgICAgIG9wdHMuaG9zdG5hbWUgPSB1cmkuaG9zdDtcbiAgICAgIG9wdHMuc2VjdXJlID0gdXJpLnByb3RvY29sID09PSBcImh0dHBzXCIgfHwgdXJpLnByb3RvY29sID09PSBcIndzc1wiO1xuICAgICAgb3B0cy5wb3J0ID0gdXJpLnBvcnQ7XG4gICAgICBpZiAodXJpLnF1ZXJ5KSBvcHRzLnF1ZXJ5ID0gdXJpLnF1ZXJ5O1xuICAgIH0gZWxzZSBpZiAob3B0cy5ob3N0KSB7XG4gICAgICBvcHRzLmhvc3RuYW1lID0gcGFyc2V1cmkob3B0cy5ob3N0KS5ob3N0O1xuICAgIH1cblxuICAgIHRoaXMuc2VjdXJlID1cbiAgICAgIG51bGwgIT0gb3B0cy5zZWN1cmVcbiAgICAgICAgPyBvcHRzLnNlY3VyZVxuICAgICAgICA6IHR5cGVvZiBsb2NhdGlvbiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBcImh0dHBzOlwiID09PSBsb2NhdGlvbi5wcm90b2NvbDtcblxuICAgIGlmIChvcHRzLmhvc3RuYW1lICYmICFvcHRzLnBvcnQpIHtcbiAgICAgIC8vIGlmIG5vIHBvcnQgaXMgc3BlY2lmaWVkIG1hbnVhbGx5LCB1c2UgdGhlIHByb3RvY29sIGRlZmF1bHRcbiAgICAgIG9wdHMucG9ydCA9IHRoaXMuc2VjdXJlID8gXCI0NDNcIiA6IFwiODBcIjtcbiAgICB9XG5cbiAgICB0aGlzLmhvc3RuYW1lID1cbiAgICAgIG9wdHMuaG9zdG5hbWUgfHxcbiAgICAgICh0eXBlb2YgbG9jYXRpb24gIT09IFwidW5kZWZpbmVkXCIgPyBsb2NhdGlvbi5ob3N0bmFtZSA6IFwibG9jYWxob3N0XCIpO1xuICAgIHRoaXMucG9ydCA9XG4gICAgICBvcHRzLnBvcnQgfHxcbiAgICAgICh0eXBlb2YgbG9jYXRpb24gIT09IFwidW5kZWZpbmVkXCIgJiYgbG9jYXRpb24ucG9ydFxuICAgICAgICA/IGxvY2F0aW9uLnBvcnRcbiAgICAgICAgOiB0aGlzLnNlY3VyZVxuICAgICAgICA/IDQ0M1xuICAgICAgICA6IDgwKTtcblxuICAgIHRoaXMudHJhbnNwb3J0cyA9IG9wdHMudHJhbnNwb3J0cyB8fCBbXCJwb2xsaW5nXCIsIFwid2Vic29ja2V0XCJdO1xuICAgIHRoaXMucmVhZHlTdGF0ZSA9IFwiXCI7XG4gICAgdGhpcy53cml0ZUJ1ZmZlciA9IFtdO1xuICAgIHRoaXMucHJldkJ1ZmZlckxlbiA9IDA7XG5cbiAgICB0aGlzLm9wdHMgPSBPYmplY3QuYXNzaWduKFxuICAgICAge1xuICAgICAgICBwYXRoOiBcIi9lbmdpbmUuaW9cIixcbiAgICAgICAgYWdlbnQ6IGZhbHNlLFxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IGZhbHNlLFxuICAgICAgICB1cGdyYWRlOiB0cnVlLFxuICAgICAgICBqc29ucDogdHJ1ZSxcbiAgICAgICAgdGltZXN0YW1wUGFyYW06IFwidFwiLFxuICAgICAgICByZW1lbWJlclVwZ3JhZGU6IGZhbHNlLFxuICAgICAgICByZWplY3RVbmF1dGhvcml6ZWQ6IHRydWUsXG4gICAgICAgIHBlck1lc3NhZ2VEZWZsYXRlOiB7XG4gICAgICAgICAgdGhyZXNob2xkOiAxMDI0XG4gICAgICAgIH0sXG4gICAgICAgIHRyYW5zcG9ydE9wdGlvbnM6IHt9LFxuICAgICAgICBjbG9zZU9uQmVmb3JldW5sb2FkOiB0cnVlXG4gICAgICB9LFxuICAgICAgb3B0c1xuICAgICk7XG5cbiAgICB0aGlzLm9wdHMucGF0aCA9IHRoaXMub3B0cy5wYXRoLnJlcGxhY2UoL1xcLyQvLCBcIlwiKSArIFwiL1wiO1xuXG4gICAgaWYgKHR5cGVvZiB0aGlzLm9wdHMucXVlcnkgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIHRoaXMub3B0cy5xdWVyeSA9IHBhcnNlcXMuZGVjb2RlKHRoaXMub3B0cy5xdWVyeSk7XG4gICAgfVxuXG4gICAgLy8gc2V0IG9uIGhhbmRzaGFrZVxuICAgIHRoaXMuaWQgPSBudWxsO1xuICAgIHRoaXMudXBncmFkZXMgPSBudWxsO1xuICAgIHRoaXMucGluZ0ludGVydmFsID0gbnVsbDtcbiAgICB0aGlzLnBpbmdUaW1lb3V0ID0gbnVsbDtcblxuICAgIC8vIHNldCBvbiBoZWFydGJlYXRcbiAgICB0aGlzLnBpbmdUaW1lb3V0VGltZXIgPSBudWxsO1xuXG4gICAgaWYgKHR5cGVvZiBhZGRFdmVudExpc3RlbmVyID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIGlmICh0aGlzLm9wdHMuY2xvc2VPbkJlZm9yZXVubG9hZCkge1xuICAgICAgICAvLyBGaXJlZm94IGNsb3NlcyB0aGUgY29ubmVjdGlvbiB3aGVuIHRoZSBcImJlZm9yZXVubG9hZFwiIGV2ZW50IGlzIGVtaXR0ZWQgYnV0IG5vdCBDaHJvbWUuIFRoaXMgZXZlbnQgbGlzdGVuZXJcbiAgICAgICAgLy8gZW5zdXJlcyBldmVyeSBicm93c2VyIGJlaGF2ZXMgdGhlIHNhbWUgKG5vIFwiZGlzY29ubmVjdFwiIGV2ZW50IGF0IHRoZSBTb2NrZXQuSU8gbGV2ZWwgd2hlbiB0aGUgcGFnZSBpc1xuICAgICAgICAvLyBjbG9zZWQvcmVsb2FkZWQpXG4gICAgICAgIGFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgXCJiZWZvcmV1bmxvYWRcIixcbiAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy50cmFuc3BvcnQpIHtcbiAgICAgICAgICAgICAgLy8gc2lsZW50bHkgY2xvc2UgdGhlIHRyYW5zcG9ydFxuICAgICAgICAgICAgICB0aGlzLnRyYW5zcG9ydC5yZW1vdmVBbGxMaXN0ZW5lcnMoKTtcbiAgICAgICAgICAgICAgdGhpcy50cmFuc3BvcnQuY2xvc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGZhbHNlXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5ob3N0bmFtZSAhPT0gXCJsb2NhbGhvc3RcIikge1xuICAgICAgICB0aGlzLm9mZmxpbmVFdmVudExpc3RlbmVyID0gKCkgPT4ge1xuICAgICAgICAgIHRoaXMub25DbG9zZShcInRyYW5zcG9ydCBjbG9zZVwiKTtcbiAgICAgICAgfTtcbiAgICAgICAgYWRkRXZlbnRMaXN0ZW5lcihcIm9mZmxpbmVcIiwgdGhpcy5vZmZsaW5lRXZlbnRMaXN0ZW5lciwgZmFsc2UpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMub3BlbigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgdHJhbnNwb3J0IG9mIHRoZSBnaXZlbiB0eXBlLlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gdHJhbnNwb3J0IG5hbWVcbiAgICogQHJldHVybiB7VHJhbnNwb3J0fVxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIGNyZWF0ZVRyYW5zcG9ydChuYW1lKSB7XG4gICAgZGVidWcoJ2NyZWF0aW5nIHRyYW5zcG9ydCBcIiVzXCInLCBuYW1lKTtcbiAgICBjb25zdCBxdWVyeSA9IGNsb25lKHRoaXMub3B0cy5xdWVyeSk7XG5cbiAgICAvLyBhcHBlbmQgZW5naW5lLmlvIHByb3RvY29sIGlkZW50aWZpZXJcbiAgICBxdWVyeS5FSU8gPSBwYXJzZXIucHJvdG9jb2w7XG5cbiAgICAvLyB0cmFuc3BvcnQgbmFtZVxuICAgIHF1ZXJ5LnRyYW5zcG9ydCA9IG5hbWU7XG5cbiAgICAvLyBzZXNzaW9uIGlkIGlmIHdlIGFscmVhZHkgaGF2ZSBvbmVcbiAgICBpZiAodGhpcy5pZCkgcXVlcnkuc2lkID0gdGhpcy5pZDtcblxuICAgIGNvbnN0IG9wdHMgPSBPYmplY3QuYXNzaWduKFxuICAgICAge30sXG4gICAgICB0aGlzLm9wdHMudHJhbnNwb3J0T3B0aW9uc1tuYW1lXSxcbiAgICAgIHRoaXMub3B0cyxcbiAgICAgIHtcbiAgICAgICAgcXVlcnksXG4gICAgICAgIHNvY2tldDogdGhpcyxcbiAgICAgICAgaG9zdG5hbWU6IHRoaXMuaG9zdG5hbWUsXG4gICAgICAgIHNlY3VyZTogdGhpcy5zZWN1cmUsXG4gICAgICAgIHBvcnQ6IHRoaXMucG9ydFxuICAgICAgfVxuICAgICk7XG5cbiAgICBkZWJ1ZyhcIm9wdGlvbnM6ICVqXCIsIG9wdHMpO1xuXG4gICAgcmV0dXJuIG5ldyB0cmFuc3BvcnRzW25hbWVdKG9wdHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIHRyYW5zcG9ydCB0byB1c2UgYW5kIHN0YXJ0cyBwcm9iZS5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBvcGVuKCkge1xuICAgIGxldCB0cmFuc3BvcnQ7XG4gICAgaWYgKFxuICAgICAgdGhpcy5vcHRzLnJlbWVtYmVyVXBncmFkZSAmJlxuICAgICAgU29ja2V0LnByaW9yV2Vic29ja2V0U3VjY2VzcyAmJlxuICAgICAgdGhpcy50cmFuc3BvcnRzLmluZGV4T2YoXCJ3ZWJzb2NrZXRcIikgIT09IC0xXG4gICAgKSB7XG4gICAgICB0cmFuc3BvcnQgPSBcIndlYnNvY2tldFwiO1xuICAgIH0gZWxzZSBpZiAoMCA9PT0gdGhpcy50cmFuc3BvcnRzLmxlbmd0aCkge1xuICAgICAgLy8gRW1pdCBlcnJvciBvbiBuZXh0IHRpY2sgc28gaXQgY2FuIGJlIGxpc3RlbmVkIHRvXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5lbWl0KFwiZXJyb3JcIiwgXCJObyB0cmFuc3BvcnRzIGF2YWlsYWJsZVwiKTtcbiAgICAgIH0sIDApO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICB0cmFuc3BvcnQgPSB0aGlzLnRyYW5zcG9ydHNbMF07XG4gICAgfVxuICAgIHRoaXMucmVhZHlTdGF0ZSA9IFwib3BlbmluZ1wiO1xuXG4gICAgLy8gUmV0cnkgd2l0aCB0aGUgbmV4dCB0cmFuc3BvcnQgaWYgdGhlIHRyYW5zcG9ydCBpcyBkaXNhYmxlZCAoanNvbnA6IGZhbHNlKVxuICAgIHRyeSB7XG4gICAgICB0cmFuc3BvcnQgPSB0aGlzLmNyZWF0ZVRyYW5zcG9ydCh0cmFuc3BvcnQpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGRlYnVnKFwiZXJyb3Igd2hpbGUgY3JlYXRpbmcgdHJhbnNwb3J0OiAlc1wiLCBlKTtcbiAgICAgIHRoaXMudHJhbnNwb3J0cy5zaGlmdCgpO1xuICAgICAgdGhpcy5vcGVuKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdHJhbnNwb3J0Lm9wZW4oKTtcbiAgICB0aGlzLnNldFRyYW5zcG9ydCh0cmFuc3BvcnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGN1cnJlbnQgdHJhbnNwb3J0LiBEaXNhYmxlcyB0aGUgZXhpc3Rpbmcgb25lIChpZiBhbnkpLlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIHNldFRyYW5zcG9ydCh0cmFuc3BvcnQpIHtcbiAgICBkZWJ1ZyhcInNldHRpbmcgdHJhbnNwb3J0ICVzXCIsIHRyYW5zcG9ydC5uYW1lKTtcblxuICAgIGlmICh0aGlzLnRyYW5zcG9ydCkge1xuICAgICAgZGVidWcoXCJjbGVhcmluZyBleGlzdGluZyB0cmFuc3BvcnQgJXNcIiwgdGhpcy50cmFuc3BvcnQubmFtZSk7XG4gICAgICB0aGlzLnRyYW5zcG9ydC5yZW1vdmVBbGxMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICAvLyBzZXQgdXAgdHJhbnNwb3J0XG4gICAgdGhpcy50cmFuc3BvcnQgPSB0cmFuc3BvcnQ7XG5cbiAgICAvLyBzZXQgdXAgdHJhbnNwb3J0IGxpc3RlbmVyc1xuICAgIHRyYW5zcG9ydFxuICAgICAgLm9uKFwiZHJhaW5cIiwgdGhpcy5vbkRyYWluLmJpbmQodGhpcykpXG4gICAgICAub24oXCJwYWNrZXRcIiwgdGhpcy5vblBhY2tldC5iaW5kKHRoaXMpKVxuICAgICAgLm9uKFwiZXJyb3JcIiwgdGhpcy5vbkVycm9yLmJpbmQodGhpcykpXG4gICAgICAub24oXCJjbG9zZVwiLCAoKSA9PiB7XG4gICAgICAgIHRoaXMub25DbG9zZShcInRyYW5zcG9ydCBjbG9zZVwiKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb2JlcyBhIHRyYW5zcG9ydC5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IHRyYW5zcG9ydCBuYW1lXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgcHJvYmUobmFtZSkge1xuICAgIGRlYnVnKCdwcm9iaW5nIHRyYW5zcG9ydCBcIiVzXCInLCBuYW1lKTtcbiAgICBsZXQgdHJhbnNwb3J0ID0gdGhpcy5jcmVhdGVUcmFuc3BvcnQobmFtZSwgeyBwcm9iZTogMSB9KTtcbiAgICBsZXQgZmFpbGVkID0gZmFsc2U7XG5cbiAgICBTb2NrZXQucHJpb3JXZWJzb2NrZXRTdWNjZXNzID0gZmFsc2U7XG5cbiAgICBjb25zdCBvblRyYW5zcG9ydE9wZW4gPSAoKSA9PiB7XG4gICAgICBpZiAoZmFpbGVkKSByZXR1cm47XG5cbiAgICAgIGRlYnVnKCdwcm9iZSB0cmFuc3BvcnQgXCIlc1wiIG9wZW5lZCcsIG5hbWUpO1xuICAgICAgdHJhbnNwb3J0LnNlbmQoW3sgdHlwZTogXCJwaW5nXCIsIGRhdGE6IFwicHJvYmVcIiB9XSk7XG4gICAgICB0cmFuc3BvcnQub25jZShcInBhY2tldFwiLCBtc2cgPT4ge1xuICAgICAgICBpZiAoZmFpbGVkKSByZXR1cm47XG4gICAgICAgIGlmIChcInBvbmdcIiA9PT0gbXNnLnR5cGUgJiYgXCJwcm9iZVwiID09PSBtc2cuZGF0YSkge1xuICAgICAgICAgIGRlYnVnKCdwcm9iZSB0cmFuc3BvcnQgXCIlc1wiIHBvbmcnLCBuYW1lKTtcbiAgICAgICAgICB0aGlzLnVwZ3JhZGluZyA9IHRydWU7XG4gICAgICAgICAgdGhpcy5lbWl0KFwidXBncmFkaW5nXCIsIHRyYW5zcG9ydCk7XG4gICAgICAgICAgaWYgKCF0cmFuc3BvcnQpIHJldHVybjtcbiAgICAgICAgICBTb2NrZXQucHJpb3JXZWJzb2NrZXRTdWNjZXNzID0gXCJ3ZWJzb2NrZXRcIiA9PT0gdHJhbnNwb3J0Lm5hbWU7XG5cbiAgICAgICAgICBkZWJ1ZygncGF1c2luZyBjdXJyZW50IHRyYW5zcG9ydCBcIiVzXCInLCB0aGlzLnRyYW5zcG9ydC5uYW1lKTtcbiAgICAgICAgICB0aGlzLnRyYW5zcG9ydC5wYXVzZSgoKSA9PiB7XG4gICAgICAgICAgICBpZiAoZmFpbGVkKSByZXR1cm47XG4gICAgICAgICAgICBpZiAoXCJjbG9zZWRcIiA9PT0gdGhpcy5yZWFkeVN0YXRlKSByZXR1cm47XG4gICAgICAgICAgICBkZWJ1ZyhcImNoYW5naW5nIHRyYW5zcG9ydCBhbmQgc2VuZGluZyB1cGdyYWRlIHBhY2tldFwiKTtcblxuICAgICAgICAgICAgY2xlYW51cCgpO1xuXG4gICAgICAgICAgICB0aGlzLnNldFRyYW5zcG9ydCh0cmFuc3BvcnQpO1xuICAgICAgICAgICAgdHJhbnNwb3J0LnNlbmQoW3sgdHlwZTogXCJ1cGdyYWRlXCIgfV0pO1xuICAgICAgICAgICAgdGhpcy5lbWl0KFwidXBncmFkZVwiLCB0cmFuc3BvcnQpO1xuICAgICAgICAgICAgdHJhbnNwb3J0ID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMudXBncmFkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmZsdXNoKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGVidWcoJ3Byb2JlIHRyYW5zcG9ydCBcIiVzXCIgZmFpbGVkJywgbmFtZSk7XG4gICAgICAgICAgY29uc3QgZXJyID0gbmV3IEVycm9yKFwicHJvYmUgZXJyb3JcIik7XG4gICAgICAgICAgZXJyLnRyYW5zcG9ydCA9IHRyYW5zcG9ydC5uYW1lO1xuICAgICAgICAgIHRoaXMuZW1pdChcInVwZ3JhZGVFcnJvclwiLCBlcnIpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gZnJlZXplVHJhbnNwb3J0KCkge1xuICAgICAgaWYgKGZhaWxlZCkgcmV0dXJuO1xuXG4gICAgICAvLyBBbnkgY2FsbGJhY2sgY2FsbGVkIGJ5IHRyYW5zcG9ydCBzaG91bGQgYmUgaWdub3JlZCBzaW5jZSBub3dcbiAgICAgIGZhaWxlZCA9IHRydWU7XG5cbiAgICAgIGNsZWFudXAoKTtcblxuICAgICAgdHJhbnNwb3J0LmNsb3NlKCk7XG4gICAgICB0cmFuc3BvcnQgPSBudWxsO1xuICAgIH1cblxuICAgIC8vIEhhbmRsZSBhbnkgZXJyb3IgdGhhdCBoYXBwZW5zIHdoaWxlIHByb2JpbmdcbiAgICBjb25zdCBvbmVycm9yID0gZXJyID0+IHtcbiAgICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKFwicHJvYmUgZXJyb3I6IFwiICsgZXJyKTtcbiAgICAgIGVycm9yLnRyYW5zcG9ydCA9IHRyYW5zcG9ydC5uYW1lO1xuXG4gICAgICBmcmVlemVUcmFuc3BvcnQoKTtcblxuICAgICAgZGVidWcoJ3Byb2JlIHRyYW5zcG9ydCBcIiVzXCIgZmFpbGVkIGJlY2F1c2Ugb2YgZXJyb3I6ICVzJywgbmFtZSwgZXJyKTtcblxuICAgICAgdGhpcy5lbWl0KFwidXBncmFkZUVycm9yXCIsIGVycm9yKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gb25UcmFuc3BvcnRDbG9zZSgpIHtcbiAgICAgIG9uZXJyb3IoXCJ0cmFuc3BvcnQgY2xvc2VkXCIpO1xuICAgIH1cblxuICAgIC8vIFdoZW4gdGhlIHNvY2tldCBpcyBjbG9zZWQgd2hpbGUgd2UncmUgcHJvYmluZ1xuICAgIGZ1bmN0aW9uIG9uY2xvc2UoKSB7XG4gICAgICBvbmVycm9yKFwic29ja2V0IGNsb3NlZFwiKTtcbiAgICB9XG5cbiAgICAvLyBXaGVuIHRoZSBzb2NrZXQgaXMgdXBncmFkZWQgd2hpbGUgd2UncmUgcHJvYmluZ1xuICAgIGZ1bmN0aW9uIG9udXBncmFkZSh0bykge1xuICAgICAgaWYgKHRyYW5zcG9ydCAmJiB0by5uYW1lICE9PSB0cmFuc3BvcnQubmFtZSkge1xuICAgICAgICBkZWJ1ZygnXCIlc1wiIHdvcmtzIC0gYWJvcnRpbmcgXCIlc1wiJywgdG8ubmFtZSwgdHJhbnNwb3J0Lm5hbWUpO1xuICAgICAgICBmcmVlemVUcmFuc3BvcnQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZW1vdmUgYWxsIGxpc3RlbmVycyBvbiB0aGUgdHJhbnNwb3J0IGFuZCBvbiBzZWxmXG4gICAgY29uc3QgY2xlYW51cCA9ICgpID0+IHtcbiAgICAgIHRyYW5zcG9ydC5yZW1vdmVMaXN0ZW5lcihcIm9wZW5cIiwgb25UcmFuc3BvcnRPcGVuKTtcbiAgICAgIHRyYW5zcG9ydC5yZW1vdmVMaXN0ZW5lcihcImVycm9yXCIsIG9uZXJyb3IpO1xuICAgICAgdHJhbnNwb3J0LnJlbW92ZUxpc3RlbmVyKFwiY2xvc2VcIiwgb25UcmFuc3BvcnRDbG9zZSk7XG4gICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKFwiY2xvc2VcIiwgb25jbG9zZSk7XG4gICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKFwidXBncmFkaW5nXCIsIG9udXBncmFkZSk7XG4gICAgfTtcblxuICAgIHRyYW5zcG9ydC5vbmNlKFwib3BlblwiLCBvblRyYW5zcG9ydE9wZW4pO1xuICAgIHRyYW5zcG9ydC5vbmNlKFwiZXJyb3JcIiwgb25lcnJvcik7XG4gICAgdHJhbnNwb3J0Lm9uY2UoXCJjbG9zZVwiLCBvblRyYW5zcG9ydENsb3NlKTtcblxuICAgIHRoaXMub25jZShcImNsb3NlXCIsIG9uY2xvc2UpO1xuICAgIHRoaXMub25jZShcInVwZ3JhZGluZ1wiLCBvbnVwZ3JhZGUpO1xuXG4gICAgdHJhbnNwb3J0Lm9wZW4oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiBjb25uZWN0aW9uIGlzIGRlZW1lZCBvcGVuLlxuICAgKlxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cbiAgb25PcGVuKCkge1xuICAgIGRlYnVnKFwic29ja2V0IG9wZW5cIik7XG4gICAgdGhpcy5yZWFkeVN0YXRlID0gXCJvcGVuXCI7XG4gICAgU29ja2V0LnByaW9yV2Vic29ja2V0U3VjY2VzcyA9IFwid2Vic29ja2V0XCIgPT09IHRoaXMudHJhbnNwb3J0Lm5hbWU7XG4gICAgdGhpcy5lbWl0KFwib3BlblwiKTtcbiAgICB0aGlzLmZsdXNoKCk7XG5cbiAgICAvLyB3ZSBjaGVjayBmb3IgYHJlYWR5U3RhdGVgIGluIGNhc2UgYW4gYG9wZW5gXG4gICAgLy8gbGlzdGVuZXIgYWxyZWFkeSBjbG9zZWQgdGhlIHNvY2tldFxuICAgIGlmIChcbiAgICAgIFwib3BlblwiID09PSB0aGlzLnJlYWR5U3RhdGUgJiZcbiAgICAgIHRoaXMub3B0cy51cGdyYWRlICYmXG4gICAgICB0aGlzLnRyYW5zcG9ydC5wYXVzZVxuICAgICkge1xuICAgICAgZGVidWcoXCJzdGFydGluZyB1cGdyYWRlIHByb2Jlc1wiKTtcbiAgICAgIGxldCBpID0gMDtcbiAgICAgIGNvbnN0IGwgPSB0aGlzLnVwZ3JhZGVzLmxlbmd0aDtcbiAgICAgIGZvciAoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIHRoaXMucHJvYmUodGhpcy51cGdyYWRlc1tpXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgYSBwYWNrZXQuXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgb25QYWNrZXQocGFja2V0KSB7XG4gICAgaWYgKFxuICAgICAgXCJvcGVuaW5nXCIgPT09IHRoaXMucmVhZHlTdGF0ZSB8fFxuICAgICAgXCJvcGVuXCIgPT09IHRoaXMucmVhZHlTdGF0ZSB8fFxuICAgICAgXCJjbG9zaW5nXCIgPT09IHRoaXMucmVhZHlTdGF0ZVxuICAgICkge1xuICAgICAgZGVidWcoJ3NvY2tldCByZWNlaXZlOiB0eXBlIFwiJXNcIiwgZGF0YSBcIiVzXCInLCBwYWNrZXQudHlwZSwgcGFja2V0LmRhdGEpO1xuXG4gICAgICB0aGlzLmVtaXQoXCJwYWNrZXRcIiwgcGFja2V0KTtcblxuICAgICAgLy8gU29ja2V0IGlzIGxpdmUgLSBhbnkgcGFja2V0IGNvdW50c1xuICAgICAgdGhpcy5lbWl0KFwiaGVhcnRiZWF0XCIpO1xuXG4gICAgICBzd2l0Y2ggKHBhY2tldC50eXBlKSB7XG4gICAgICAgIGNhc2UgXCJvcGVuXCI6XG4gICAgICAgICAgdGhpcy5vbkhhbmRzaGFrZShKU09OLnBhcnNlKHBhY2tldC5kYXRhKSk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcInBpbmdcIjpcbiAgICAgICAgICB0aGlzLnJlc2V0UGluZ1RpbWVvdXQoKTtcbiAgICAgICAgICB0aGlzLnNlbmRQYWNrZXQoXCJwb25nXCIpO1xuICAgICAgICAgIHRoaXMuZW1pdChcInBvbmdcIik7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcImVycm9yXCI6XG4gICAgICAgICAgY29uc3QgZXJyID0gbmV3IEVycm9yKFwic2VydmVyIGVycm9yXCIpO1xuICAgICAgICAgIGVyci5jb2RlID0gcGFja2V0LmRhdGE7XG4gICAgICAgICAgdGhpcy5vbkVycm9yKGVycik7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcIm1lc3NhZ2VcIjpcbiAgICAgICAgICB0aGlzLmVtaXQoXCJkYXRhXCIsIHBhY2tldC5kYXRhKTtcbiAgICAgICAgICB0aGlzLmVtaXQoXCJtZXNzYWdlXCIsIHBhY2tldC5kYXRhKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZGVidWcoJ3BhY2tldCByZWNlaXZlZCB3aXRoIHNvY2tldCByZWFkeVN0YXRlIFwiJXNcIicsIHRoaXMucmVhZHlTdGF0ZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCB1cG9uIGhhbmRzaGFrZSBjb21wbGV0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gaGFuZHNoYWtlIG9ialxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIG9uSGFuZHNoYWtlKGRhdGEpIHtcbiAgICB0aGlzLmVtaXQoXCJoYW5kc2hha2VcIiwgZGF0YSk7XG4gICAgdGhpcy5pZCA9IGRhdGEuc2lkO1xuICAgIHRoaXMudHJhbnNwb3J0LnF1ZXJ5LnNpZCA9IGRhdGEuc2lkO1xuICAgIHRoaXMudXBncmFkZXMgPSB0aGlzLmZpbHRlclVwZ3JhZGVzKGRhdGEudXBncmFkZXMpO1xuICAgIHRoaXMucGluZ0ludGVydmFsID0gZGF0YS5waW5nSW50ZXJ2YWw7XG4gICAgdGhpcy5waW5nVGltZW91dCA9IGRhdGEucGluZ1RpbWVvdXQ7XG4gICAgdGhpcy5vbk9wZW4oKTtcbiAgICAvLyBJbiBjYXNlIG9wZW4gaGFuZGxlciBjbG9zZXMgc29ja2V0XG4gICAgaWYgKFwiY2xvc2VkXCIgPT09IHRoaXMucmVhZHlTdGF0ZSkgcmV0dXJuO1xuICAgIHRoaXMucmVzZXRQaW5nVGltZW91dCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgYW5kIHJlc2V0cyBwaW5nIHRpbWVvdXQgdGltZXIgYmFzZWQgb24gc2VydmVyIHBpbmdzLlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIHJlc2V0UGluZ1RpbWVvdXQoKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMucGluZ1RpbWVvdXRUaW1lcik7XG4gICAgdGhpcy5waW5nVGltZW91dFRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLm9uQ2xvc2UoXCJwaW5nIHRpbWVvdXRcIik7XG4gICAgfSwgdGhpcy5waW5nSW50ZXJ2YWwgKyB0aGlzLnBpbmdUaW1lb3V0KTtcbiAgICBpZiAodGhpcy5vcHRzLmF1dG9VbnJlZikge1xuICAgICAgdGhpcy5waW5nVGltZW91dFRpbWVyLnVucmVmKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCBvbiBgZHJhaW5gIGV2ZW50XG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgb25EcmFpbigpIHtcbiAgICB0aGlzLndyaXRlQnVmZmVyLnNwbGljZSgwLCB0aGlzLnByZXZCdWZmZXJMZW4pO1xuXG4gICAgLy8gc2V0dGluZyBwcmV2QnVmZmVyTGVuID0gMCBpcyB2ZXJ5IGltcG9ydGFudFxuICAgIC8vIGZvciBleGFtcGxlLCB3aGVuIHVwZ3JhZGluZywgdXBncmFkZSBwYWNrZXQgaXMgc2VudCBvdmVyLFxuICAgIC8vIGFuZCBhIG5vbnplcm8gcHJldkJ1ZmZlckxlbiBjb3VsZCBjYXVzZSBwcm9ibGVtcyBvbiBgZHJhaW5gXG4gICAgdGhpcy5wcmV2QnVmZmVyTGVuID0gMDtcblxuICAgIGlmICgwID09PSB0aGlzLndyaXRlQnVmZmVyLmxlbmd0aCkge1xuICAgICAgdGhpcy5lbWl0KFwiZHJhaW5cIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZmx1c2goKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRmx1c2ggd3JpdGUgYnVmZmVycy5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBmbHVzaCgpIHtcbiAgICBpZiAoXG4gICAgICBcImNsb3NlZFwiICE9PSB0aGlzLnJlYWR5U3RhdGUgJiZcbiAgICAgIHRoaXMudHJhbnNwb3J0LndyaXRhYmxlICYmXG4gICAgICAhdGhpcy51cGdyYWRpbmcgJiZcbiAgICAgIHRoaXMud3JpdGVCdWZmZXIubGVuZ3RoXG4gICAgKSB7XG4gICAgICBkZWJ1ZyhcImZsdXNoaW5nICVkIHBhY2tldHMgaW4gc29ja2V0XCIsIHRoaXMud3JpdGVCdWZmZXIubGVuZ3RoKTtcbiAgICAgIHRoaXMudHJhbnNwb3J0LnNlbmQodGhpcy53cml0ZUJ1ZmZlcik7XG4gICAgICAvLyBrZWVwIHRyYWNrIG9mIGN1cnJlbnQgbGVuZ3RoIG9mIHdyaXRlQnVmZmVyXG4gICAgICAvLyBzcGxpY2Ugd3JpdGVCdWZmZXIgYW5kIGNhbGxiYWNrQnVmZmVyIG9uIGBkcmFpbmBcbiAgICAgIHRoaXMucHJldkJ1ZmZlckxlbiA9IHRoaXMud3JpdGVCdWZmZXIubGVuZ3RoO1xuICAgICAgdGhpcy5lbWl0KFwiZmx1c2hcIik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNlbmRzIGEgbWVzc2FnZS5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2UuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIGZ1bmN0aW9uLlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucy5cbiAgICogQHJldHVybiB7U29ja2V0fSBmb3IgY2hhaW5pbmcuXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuICB3cml0ZShtc2csIG9wdGlvbnMsIGZuKSB7XG4gICAgdGhpcy5zZW5kUGFja2V0KFwibWVzc2FnZVwiLCBtc2csIG9wdGlvbnMsIGZuKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNlbmQobXNnLCBvcHRpb25zLCBmbikge1xuICAgIHRoaXMuc2VuZFBhY2tldChcIm1lc3NhZ2VcIiwgbXNnLCBvcHRpb25zLCBmbik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogU2VuZHMgYSBwYWNrZXQuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwYWNrZXQgdHlwZS5cbiAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGEuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBmdW5jdGlvbi5cbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBzZW5kUGFja2V0KHR5cGUsIGRhdGEsIG9wdGlvbnMsIGZuKSB7XG4gICAgaWYgKFwiZnVuY3Rpb25cIiA9PT0gdHlwZW9mIGRhdGEpIHtcbiAgICAgIGZuID0gZGF0YTtcbiAgICAgIGRhdGEgPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgaWYgKFwiZnVuY3Rpb25cIiA9PT0gdHlwZW9mIG9wdGlvbnMpIHtcbiAgICAgIGZuID0gb3B0aW9ucztcbiAgICAgIG9wdGlvbnMgPSBudWxsO1xuICAgIH1cblxuICAgIGlmIChcImNsb3NpbmdcIiA9PT0gdGhpcy5yZWFkeVN0YXRlIHx8IFwiY2xvc2VkXCIgPT09IHRoaXMucmVhZHlTdGF0ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIG9wdGlvbnMuY29tcHJlc3MgPSBmYWxzZSAhPT0gb3B0aW9ucy5jb21wcmVzcztcblxuICAgIGNvbnN0IHBhY2tldCA9IHtcbiAgICAgIHR5cGU6IHR5cGUsXG4gICAgICBkYXRhOiBkYXRhLFxuICAgICAgb3B0aW9uczogb3B0aW9uc1xuICAgIH07XG4gICAgdGhpcy5lbWl0KFwicGFja2V0Q3JlYXRlXCIsIHBhY2tldCk7XG4gICAgdGhpcy53cml0ZUJ1ZmZlci5wdXNoKHBhY2tldCk7XG4gICAgaWYgKGZuKSB0aGlzLm9uY2UoXCJmbHVzaFwiLCBmbik7XG4gICAgdGhpcy5mbHVzaCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsb3NlcyB0aGUgY29ubmVjdGlvbi5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBjbG9zZSgpIHtcbiAgICBjb25zdCBjbG9zZSA9ICgpID0+IHtcbiAgICAgIHRoaXMub25DbG9zZShcImZvcmNlZCBjbG9zZVwiKTtcbiAgICAgIGRlYnVnKFwic29ja2V0IGNsb3NpbmcgLSB0ZWxsaW5nIHRyYW5zcG9ydCB0byBjbG9zZVwiKTtcbiAgICAgIHRoaXMudHJhbnNwb3J0LmNsb3NlKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGNsZWFudXBBbmRDbG9zZSA9ICgpID0+IHtcbiAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIoXCJ1cGdyYWRlXCIsIGNsZWFudXBBbmRDbG9zZSk7XG4gICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKFwidXBncmFkZUVycm9yXCIsIGNsZWFudXBBbmRDbG9zZSk7XG4gICAgICBjbG9zZSgpO1xuICAgIH07XG5cbiAgICBjb25zdCB3YWl0Rm9yVXBncmFkZSA9ICgpID0+IHtcbiAgICAgIC8vIHdhaXQgZm9yIHVwZ3JhZGUgdG8gZmluaXNoIHNpbmNlIHdlIGNhbid0IHNlbmQgcGFja2V0cyB3aGlsZSBwYXVzaW5nIGEgdHJhbnNwb3J0XG4gICAgICB0aGlzLm9uY2UoXCJ1cGdyYWRlXCIsIGNsZWFudXBBbmRDbG9zZSk7XG4gICAgICB0aGlzLm9uY2UoXCJ1cGdyYWRlRXJyb3JcIiwgY2xlYW51cEFuZENsb3NlKTtcbiAgICB9O1xuXG4gICAgaWYgKFwib3BlbmluZ1wiID09PSB0aGlzLnJlYWR5U3RhdGUgfHwgXCJvcGVuXCIgPT09IHRoaXMucmVhZHlTdGF0ZSkge1xuICAgICAgdGhpcy5yZWFkeVN0YXRlID0gXCJjbG9zaW5nXCI7XG5cbiAgICAgIGlmICh0aGlzLndyaXRlQnVmZmVyLmxlbmd0aCkge1xuICAgICAgICB0aGlzLm9uY2UoXCJkcmFpblwiLCAoKSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMudXBncmFkaW5nKSB7XG4gICAgICAgICAgICB3YWl0Rm9yVXBncmFkZSgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjbG9zZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMudXBncmFkaW5nKSB7XG4gICAgICAgIHdhaXRGb3JVcGdyYWRlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjbG9zZSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCB1cG9uIHRyYW5zcG9ydCBlcnJvclxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIG9uRXJyb3IoZXJyKSB7XG4gICAgZGVidWcoXCJzb2NrZXQgZXJyb3IgJWpcIiwgZXJyKTtcbiAgICBTb2NrZXQucHJpb3JXZWJzb2NrZXRTdWNjZXNzID0gZmFsc2U7XG4gICAgdGhpcy5lbWl0KFwiZXJyb3JcIiwgZXJyKTtcbiAgICB0aGlzLm9uQ2xvc2UoXCJ0cmFuc3BvcnQgZXJyb3JcIiwgZXJyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgdXBvbiB0cmFuc3BvcnQgY2xvc2UuXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgb25DbG9zZShyZWFzb24sIGRlc2MpIHtcbiAgICBpZiAoXG4gICAgICBcIm9wZW5pbmdcIiA9PT0gdGhpcy5yZWFkeVN0YXRlIHx8XG4gICAgICBcIm9wZW5cIiA9PT0gdGhpcy5yZWFkeVN0YXRlIHx8XG4gICAgICBcImNsb3NpbmdcIiA9PT0gdGhpcy5yZWFkeVN0YXRlXG4gICAgKSB7XG4gICAgICBkZWJ1Zygnc29ja2V0IGNsb3NlIHdpdGggcmVhc29uOiBcIiVzXCInLCByZWFzb24pO1xuXG4gICAgICAvLyBjbGVhciB0aW1lcnNcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLnBpbmdJbnRlcnZhbFRpbWVyKTtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLnBpbmdUaW1lb3V0VGltZXIpO1xuXG4gICAgICAvLyBzdG9wIGV2ZW50IGZyb20gZmlyaW5nIGFnYWluIGZvciB0cmFuc3BvcnRcbiAgICAgIHRoaXMudHJhbnNwb3J0LnJlbW92ZUFsbExpc3RlbmVycyhcImNsb3NlXCIpO1xuXG4gICAgICAvLyBlbnN1cmUgdHJhbnNwb3J0IHdvbid0IHN0YXkgb3BlblxuICAgICAgdGhpcy50cmFuc3BvcnQuY2xvc2UoKTtcblxuICAgICAgLy8gaWdub3JlIGZ1cnRoZXIgdHJhbnNwb3J0IGNvbW11bmljYXRpb25cbiAgICAgIHRoaXMudHJhbnNwb3J0LnJlbW92ZUFsbExpc3RlbmVycygpO1xuXG4gICAgICBpZiAodHlwZW9mIHJlbW92ZUV2ZW50TGlzdGVuZXIgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZW1vdmVFdmVudExpc3RlbmVyKFwib2ZmbGluZVwiLCB0aGlzLm9mZmxpbmVFdmVudExpc3RlbmVyLCBmYWxzZSk7XG4gICAgICB9XG5cbiAgICAgIC8vIHNldCByZWFkeSBzdGF0ZVxuICAgICAgdGhpcy5yZWFkeVN0YXRlID0gXCJjbG9zZWRcIjtcblxuICAgICAgLy8gY2xlYXIgc2Vzc2lvbiBpZFxuICAgICAgdGhpcy5pZCA9IG51bGw7XG5cbiAgICAgIC8vIGVtaXQgY2xvc2UgZXZlbnRcbiAgICAgIHRoaXMuZW1pdChcImNsb3NlXCIsIHJlYXNvbiwgZGVzYyk7XG5cbiAgICAgIC8vIGNsZWFuIGJ1ZmZlcnMgYWZ0ZXIsIHNvIHVzZXJzIGNhbiBzdGlsbFxuICAgICAgLy8gZ3JhYiB0aGUgYnVmZmVycyBvbiBgY2xvc2VgIGV2ZW50XG4gICAgICB0aGlzLndyaXRlQnVmZmVyID0gW107XG4gICAgICB0aGlzLnByZXZCdWZmZXJMZW4gPSAwO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBGaWx0ZXJzIHVwZ3JhZGVzLCByZXR1cm5pbmcgb25seSB0aG9zZSBtYXRjaGluZyBjbGllbnQgdHJhbnNwb3J0cy5cbiAgICpcbiAgICogQHBhcmFtIHtBcnJheX0gc2VydmVyIHVwZ3JhZGVzXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKlxuICAgKi9cbiAgZmlsdGVyVXBncmFkZXModXBncmFkZXMpIHtcbiAgICBjb25zdCBmaWx0ZXJlZFVwZ3JhZGVzID0gW107XG4gICAgbGV0IGkgPSAwO1xuICAgIGNvbnN0IGogPSB1cGdyYWRlcy5sZW5ndGg7XG4gICAgZm9yICg7IGkgPCBqOyBpKyspIHtcbiAgICAgIGlmICh+dGhpcy50cmFuc3BvcnRzLmluZGV4T2YodXBncmFkZXNbaV0pKVxuICAgICAgICBmaWx0ZXJlZFVwZ3JhZGVzLnB1c2godXBncmFkZXNbaV0pO1xuICAgIH1cbiAgICByZXR1cm4gZmlsdGVyZWRVcGdyYWRlcztcbiAgfVxufVxuXG5Tb2NrZXQucHJpb3JXZWJzb2NrZXRTdWNjZXNzID0gZmFsc2U7XG5cbi8qKlxuICogUHJvdG9jb2wgdmVyc2lvbi5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblNvY2tldC5wcm90b2NvbCA9IHBhcnNlci5wcm90b2NvbDsgLy8gdGhpcyBpcyBhbiBpbnRcblxuZnVuY3Rpb24gY2xvbmUob2JqKSB7XG4gIGNvbnN0IG8gPSB7fTtcbiAgZm9yIChsZXQgaSBpbiBvYmopIHtcbiAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICBvW2ldID0gb2JqW2ldO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTb2NrZXQ7XG4iLCJjb25zdCBwYXJzZXIgPSByZXF1aXJlKFwiZW5naW5lLmlvLXBhcnNlclwiKTtcbmNvbnN0IEVtaXR0ZXIgPSByZXF1aXJlKFwiY29tcG9uZW50LWVtaXR0ZXJcIik7XG5jb25zdCBkZWJ1ZyA9IHJlcXVpcmUoXCJkZWJ1Z1wiKShcImVuZ2luZS5pby1jbGllbnQ6dHJhbnNwb3J0XCIpO1xuXG5jbGFzcyBUcmFuc3BvcnQgZXh0ZW5kcyBFbWl0dGVyIHtcbiAgLyoqXG4gICAqIFRyYW5zcG9ydCBhYnN0cmFjdCBjb25zdHJ1Y3Rvci5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMuXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgY29uc3RydWN0b3Iob3B0cykge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLm9wdHMgPSBvcHRzO1xuICAgIHRoaXMucXVlcnkgPSBvcHRzLnF1ZXJ5O1xuICAgIHRoaXMucmVhZHlTdGF0ZSA9IFwiXCI7XG4gICAgdGhpcy5zb2NrZXQgPSBvcHRzLnNvY2tldDtcbiAgfVxuXG4gIC8qKlxuICAgKiBFbWl0cyBhbiBlcnJvci5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICAgKiBAcmV0dXJuIHtUcmFuc3BvcnR9IGZvciBjaGFpbmluZ1xuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cbiAgb25FcnJvcihtc2csIGRlc2MpIHtcbiAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IobXNnKTtcbiAgICBlcnIudHlwZSA9IFwiVHJhbnNwb3J0RXJyb3JcIjtcbiAgICBlcnIuZGVzY3JpcHRpb24gPSBkZXNjO1xuICAgIHRoaXMuZW1pdChcImVycm9yXCIsIGVycik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogT3BlbnMgdGhlIHRyYW5zcG9ydC5cbiAgICpcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG4gIG9wZW4oKSB7XG4gICAgaWYgKFwiY2xvc2VkXCIgPT09IHRoaXMucmVhZHlTdGF0ZSB8fCBcIlwiID09PSB0aGlzLnJlYWR5U3RhdGUpIHtcbiAgICAgIHRoaXMucmVhZHlTdGF0ZSA9IFwib3BlbmluZ1wiO1xuICAgICAgdGhpcy5kb09wZW4oKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBDbG9zZXMgdGhlIHRyYW5zcG9ydC5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBjbG9zZSgpIHtcbiAgICBpZiAoXCJvcGVuaW5nXCIgPT09IHRoaXMucmVhZHlTdGF0ZSB8fCBcIm9wZW5cIiA9PT0gdGhpcy5yZWFkeVN0YXRlKSB7XG4gICAgICB0aGlzLmRvQ2xvc2UoKTtcbiAgICAgIHRoaXMub25DbG9zZSgpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbmRzIG11bHRpcGxlIHBhY2tldHMuXG4gICAqXG4gICAqIEBwYXJhbSB7QXJyYXl9IHBhY2tldHNcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBzZW5kKHBhY2tldHMpIHtcbiAgICBpZiAoXCJvcGVuXCIgPT09IHRoaXMucmVhZHlTdGF0ZSkge1xuICAgICAgdGhpcy53cml0ZShwYWNrZXRzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gdGhpcyBtaWdodCBoYXBwZW4gaWYgdGhlIHRyYW5zcG9ydCB3YXMgc2lsZW50bHkgY2xvc2VkIGluIHRoZSBiZWZvcmV1bmxvYWQgZXZlbnQgaGFuZGxlclxuICAgICAgZGVidWcoXCJ0cmFuc3BvcnQgaXMgbm90IG9wZW4sIGRpc2NhcmRpbmcgcGFja2V0c1wiKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIHVwb24gb3BlblxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIG9uT3BlbigpIHtcbiAgICB0aGlzLnJlYWR5U3RhdGUgPSBcIm9wZW5cIjtcbiAgICB0aGlzLndyaXRhYmxlID0gdHJ1ZTtcbiAgICB0aGlzLmVtaXQoXCJvcGVuXCIpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aXRoIGRhdGEuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgb25EYXRhKGRhdGEpIHtcbiAgICBjb25zdCBwYWNrZXQgPSBwYXJzZXIuZGVjb2RlUGFja2V0KGRhdGEsIHRoaXMuc29ja2V0LmJpbmFyeVR5cGUpO1xuICAgIHRoaXMub25QYWNrZXQocGFja2V0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2l0aCBhIGRlY29kZWQgcGFja2V0LlxuICAgKi9cbiAgb25QYWNrZXQocGFja2V0KSB7XG4gICAgdGhpcy5lbWl0KFwicGFja2V0XCIsIHBhY2tldCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIHVwb24gY2xvc2UuXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgb25DbG9zZSgpIHtcbiAgICB0aGlzLnJlYWR5U3RhdGUgPSBcImNsb3NlZFwiO1xuICAgIHRoaXMuZW1pdChcImNsb3NlXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVHJhbnNwb3J0O1xuIiwiY29uc3QgWE1MSHR0cFJlcXVlc3QgPSByZXF1aXJlKFwiLi4vLi4vY29udHJpYi94bWxodHRwcmVxdWVzdC1zc2wvWE1MSHR0cFJlcXVlc3RcIik7XG5jb25zdCBYSFIgPSByZXF1aXJlKFwiLi9wb2xsaW5nLXhoclwiKTtcbmNvbnN0IEpTT05QID0gcmVxdWlyZShcIi4vcG9sbGluZy1qc29ucFwiKTtcbmNvbnN0IHdlYnNvY2tldCA9IHJlcXVpcmUoXCIuL3dlYnNvY2tldFwiKTtcblxuZXhwb3J0cy5wb2xsaW5nID0gcG9sbGluZztcbmV4cG9ydHMud2Vic29ja2V0ID0gd2Vic29ja2V0O1xuXG4vKipcbiAqIFBvbGxpbmcgdHJhbnNwb3J0IHBvbHltb3JwaGljIGNvbnN0cnVjdG9yLlxuICogRGVjaWRlcyBvbiB4aHIgdnMganNvbnAgYmFzZWQgb24gZmVhdHVyZSBkZXRlY3Rpb24uXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gcG9sbGluZyhvcHRzKSB7XG4gIGxldCB4aHI7XG4gIGxldCB4ZCA9IGZhbHNlO1xuICBsZXQgeHMgPSBmYWxzZTtcbiAgY29uc3QganNvbnAgPSBmYWxzZSAhPT0gb3B0cy5qc29ucDtcblxuICBpZiAodHlwZW9mIGxvY2F0aW9uICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY29uc3QgaXNTU0wgPSBcImh0dHBzOlwiID09PSBsb2NhdGlvbi5wcm90b2NvbDtcbiAgICBsZXQgcG9ydCA9IGxvY2F0aW9uLnBvcnQ7XG5cbiAgICAvLyBzb21lIHVzZXIgYWdlbnRzIGhhdmUgZW1wdHkgYGxvY2F0aW9uLnBvcnRgXG4gICAgaWYgKCFwb3J0KSB7XG4gICAgICBwb3J0ID0gaXNTU0wgPyA0NDMgOiA4MDtcbiAgICB9XG5cbiAgICB4ZCA9IG9wdHMuaG9zdG5hbWUgIT09IGxvY2F0aW9uLmhvc3RuYW1lIHx8IHBvcnQgIT09IG9wdHMucG9ydDtcbiAgICB4cyA9IG9wdHMuc2VjdXJlICE9PSBpc1NTTDtcbiAgfVxuXG4gIG9wdHMueGRvbWFpbiA9IHhkO1xuICBvcHRzLnhzY2hlbWUgPSB4cztcbiAgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KG9wdHMpO1xuXG4gIGlmIChcIm9wZW5cIiBpbiB4aHIgJiYgIW9wdHMuZm9yY2VKU09OUCkge1xuICAgIHJldHVybiBuZXcgWEhSKG9wdHMpO1xuICB9IGVsc2Uge1xuICAgIGlmICghanNvbnApIHRocm93IG5ldyBFcnJvcihcIkpTT05QIGRpc2FibGVkXCIpO1xuICAgIHJldHVybiBuZXcgSlNPTlAob3B0cyk7XG4gIH1cbn1cbiIsImNvbnN0IFBvbGxpbmcgPSByZXF1aXJlKFwiLi9wb2xsaW5nXCIpO1xuY29uc3QgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoXCIuLi9nbG9iYWxUaGlzXCIpO1xuXG5jb25zdCByTmV3bGluZSA9IC9cXG4vZztcbmNvbnN0IHJFc2NhcGVkTmV3bGluZSA9IC9cXFxcbi9nO1xuXG4vKipcbiAqIEdsb2JhbCBKU09OUCBjYWxsYmFja3MuXG4gKi9cblxubGV0IGNhbGxiYWNrcztcblxuY2xhc3MgSlNPTlBQb2xsaW5nIGV4dGVuZHMgUG9sbGluZyB7XG4gIC8qKlxuICAgKiBKU09OUCBQb2xsaW5nIGNvbnN0cnVjdG9yLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cy5cbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG4gIGNvbnN0cnVjdG9yKG9wdHMpIHtcbiAgICBzdXBlcihvcHRzKTtcblxuICAgIHRoaXMucXVlcnkgPSB0aGlzLnF1ZXJ5IHx8IHt9O1xuXG4gICAgLy8gZGVmaW5lIGdsb2JhbCBjYWxsYmFja3MgYXJyYXkgaWYgbm90IHByZXNlbnRcbiAgICAvLyB3ZSBkbyB0aGlzIGhlcmUgKGxhemlseSkgdG8gYXZvaWQgdW5uZWVkZWQgZ2xvYmFsIHBvbGx1dGlvblxuICAgIGlmICghY2FsbGJhY2tzKSB7XG4gICAgICAvLyB3ZSBuZWVkIHRvIGNvbnNpZGVyIG11bHRpcGxlIGVuZ2luZXMgaW4gdGhlIHNhbWUgcGFnZVxuICAgICAgY2FsbGJhY2tzID0gZ2xvYmFsVGhpcy5fX19laW8gPSBnbG9iYWxUaGlzLl9fX2VpbyB8fCBbXTtcbiAgICB9XG5cbiAgICAvLyBjYWxsYmFjayBpZGVudGlmaWVyXG4gICAgdGhpcy5pbmRleCA9IGNhbGxiYWNrcy5sZW5ndGg7XG5cbiAgICAvLyBhZGQgY2FsbGJhY2sgdG8ganNvbnAgZ2xvYmFsXG4gICAgY2FsbGJhY2tzLnB1c2godGhpcy5vbkRhdGEuYmluZCh0aGlzKSk7XG5cbiAgICAvLyBhcHBlbmQgdG8gcXVlcnkgc3RyaW5nXG4gICAgdGhpcy5xdWVyeS5qID0gdGhpcy5pbmRleDtcbiAgfVxuXG4gIC8qKlxuICAgKiBKU09OUCBvbmx5IHN1cHBvcnRzIGJpbmFyeSBhcyBiYXNlNjQgZW5jb2RlZCBzdHJpbmdzXG4gICAqL1xuICBnZXQgc3VwcG9ydHNCaW5hcnkoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENsb3NlcyB0aGUgc29ja2V0LlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIGRvQ2xvc2UoKSB7XG4gICAgaWYgKHRoaXMuc2NyaXB0KSB7XG4gICAgICAvLyBwcmV2ZW50IHNwdXJpb3VzIGVycm9ycyBmcm9tIGJlaW5nIGVtaXR0ZWQgd2hlbiB0aGUgd2luZG93IGlzIHVubG9hZGVkXG4gICAgICB0aGlzLnNjcmlwdC5vbmVycm9yID0gKCkgPT4ge307XG4gICAgICB0aGlzLnNjcmlwdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuc2NyaXB0KTtcbiAgICAgIHRoaXMuc2NyaXB0ID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5mb3JtKSB7XG4gICAgICB0aGlzLmZvcm0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmZvcm0pO1xuICAgICAgdGhpcy5mb3JtID0gbnVsbDtcbiAgICAgIHRoaXMuaWZyYW1lID0gbnVsbDtcbiAgICB9XG5cbiAgICBzdXBlci5kb0Nsb3NlKCk7XG4gIH1cblxuICAvKipcbiAgICogU3RhcnRzIGEgcG9sbCBjeWNsZS5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBkb1BvbGwoKSB7XG4gICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcblxuICAgIGlmICh0aGlzLnNjcmlwdCkge1xuICAgICAgdGhpcy5zY3JpcHQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLnNjcmlwdCk7XG4gICAgICB0aGlzLnNjcmlwdCA9IG51bGw7XG4gICAgfVxuXG4gICAgc2NyaXB0LmFzeW5jID0gdHJ1ZTtcbiAgICBzY3JpcHQuc3JjID0gdGhpcy51cmkoKTtcbiAgICBzY3JpcHQub25lcnJvciA9IGUgPT4ge1xuICAgICAgdGhpcy5vbkVycm9yKFwianNvbnAgcG9sbCBlcnJvclwiLCBlKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaW5zZXJ0QXQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKVswXTtcbiAgICBpZiAoaW5zZXJ0QXQpIHtcbiAgICAgIGluc2VydEF0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHNjcmlwdCwgaW5zZXJ0QXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAoZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5ib2R5KS5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgIH1cbiAgICB0aGlzLnNjcmlwdCA9IHNjcmlwdDtcblxuICAgIGNvbnN0IGlzVUFnZWNrbyA9XG4gICAgICBcInVuZGVmaW5lZFwiICE9PSB0eXBlb2YgbmF2aWdhdG9yICYmIC9nZWNrby9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG5cbiAgICBpZiAoaXNVQWdlY2tvKSB7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBpZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoaWZyYW1lKTtcbiAgICAgIH0sIDEwMCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFdyaXRlcyB3aXRoIGEgaGlkZGVuIGlmcmFtZS5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGEgdG8gc2VuZFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsZWQgdXBvbiBmbHVzaC5cbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBkb1dyaXRlKGRhdGEsIGZuKSB7XG4gICAgbGV0IGlmcmFtZTtcblxuICAgIGlmICghdGhpcy5mb3JtKSB7XG4gICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgICBjb25zdCBhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICAgICAgY29uc3QgaWQgPSAodGhpcy5pZnJhbWVJZCA9IFwiZWlvX2lmcmFtZV9cIiArIHRoaXMuaW5kZXgpO1xuXG4gICAgICBmb3JtLmNsYXNzTmFtZSA9IFwic29ja2V0aW9cIjtcbiAgICAgIGZvcm0uc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgICBmb3JtLnN0eWxlLnRvcCA9IFwiLTEwMDBweFwiO1xuICAgICAgZm9ybS5zdHlsZS5sZWZ0ID0gXCItMTAwMHB4XCI7XG4gICAgICBmb3JtLnRhcmdldCA9IGlkO1xuICAgICAgZm9ybS5tZXRob2QgPSBcIlBPU1RcIjtcbiAgICAgIGZvcm0uc2V0QXR0cmlidXRlKFwiYWNjZXB0LWNoYXJzZXRcIiwgXCJ1dGYtOFwiKTtcbiAgICAgIGFyZWEubmFtZSA9IFwiZFwiO1xuICAgICAgZm9ybS5hcHBlbmRDaGlsZChhcmVhKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgICAgIHRoaXMuZm9ybSA9IGZvcm07XG4gICAgICB0aGlzLmFyZWEgPSBhcmVhO1xuICAgIH1cblxuICAgIHRoaXMuZm9ybS5hY3Rpb24gPSB0aGlzLnVyaSgpO1xuXG4gICAgZnVuY3Rpb24gY29tcGxldGUoKSB7XG4gICAgICBpbml0SWZyYW1lKCk7XG4gICAgICBmbigpO1xuICAgIH1cblxuICAgIGNvbnN0IGluaXRJZnJhbWUgPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5pZnJhbWUpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB0aGlzLmZvcm0ucmVtb3ZlQ2hpbGQodGhpcy5pZnJhbWUpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgdGhpcy5vbkVycm9yKFwianNvbnAgcG9sbGluZyBpZnJhbWUgcmVtb3ZhbCBlcnJvclwiLCBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0cnkge1xuICAgICAgICAvLyBpZTYgZHluYW1pYyBpZnJhbWVzIHdpdGggdGFyZ2V0PVwiXCIgc3VwcG9ydCAodGhhbmtzIENocmlzIExhbWJhY2hlcilcbiAgICAgICAgY29uc3QgaHRtbCA9ICc8aWZyYW1lIHNyYz1cImphdmFzY3JpcHQ6MFwiIG5hbWU9XCInICsgdGhpcy5pZnJhbWVJZCArICdcIj4nO1xuICAgICAgICBpZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGh0bWwpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIpO1xuICAgICAgICBpZnJhbWUubmFtZSA9IHRoaXMuaWZyYW1lSWQ7XG4gICAgICAgIGlmcmFtZS5zcmMgPSBcImphdmFzY3JpcHQ6MFwiO1xuICAgICAgfVxuXG4gICAgICBpZnJhbWUuaWQgPSB0aGlzLmlmcmFtZUlkO1xuXG4gICAgICB0aGlzLmZvcm0uYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgICAgIHRoaXMuaWZyYW1lID0gaWZyYW1lO1xuICAgIH07XG5cbiAgICBpbml0SWZyYW1lKCk7XG5cbiAgICAvLyBlc2NhcGUgXFxuIHRvIHByZXZlbnQgaXQgZnJvbSBiZWluZyBjb252ZXJ0ZWQgaW50byBcXHJcXG4gYnkgc29tZSBVQXNcbiAgICAvLyBkb3VibGUgZXNjYXBpbmcgaXMgcmVxdWlyZWQgZm9yIGVzY2FwZWQgbmV3IGxpbmVzIGJlY2F1c2UgdW5lc2NhcGluZyBvZiBuZXcgbGluZXMgY2FuIGJlIGRvbmUgc2FmZWx5IG9uIHNlcnZlci1zaWRlXG4gICAgZGF0YSA9IGRhdGEucmVwbGFjZShyRXNjYXBlZE5ld2xpbmUsIFwiXFxcXFxcblwiKTtcbiAgICB0aGlzLmFyZWEudmFsdWUgPSBkYXRhLnJlcGxhY2Uock5ld2xpbmUsIFwiXFxcXG5cIik7XG5cbiAgICB0cnkge1xuICAgICAgdGhpcy5mb3JtLnN1Ym1pdCgpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG5cbiAgICBpZiAodGhpcy5pZnJhbWUuYXR0YWNoRXZlbnQpIHtcbiAgICAgIHRoaXMuaWZyYW1lLm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuaWZyYW1lLnJlYWR5U3RhdGUgPT09IFwiY29tcGxldGVcIikge1xuICAgICAgICAgIGNvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaWZyYW1lLm9ubG9hZCA9IGNvbXBsZXRlO1xuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEpTT05QUG9sbGluZztcbiIsIi8qIGdsb2JhbCBhdHRhY2hFdmVudCAqL1xuXG5jb25zdCBYTUxIdHRwUmVxdWVzdCA9IHJlcXVpcmUoXCIuLi8uLi9jb250cmliL3htbGh0dHByZXF1ZXN0LXNzbC9YTUxIdHRwUmVxdWVzdFwiKTtcbmNvbnN0IFBvbGxpbmcgPSByZXF1aXJlKFwiLi9wb2xsaW5nXCIpO1xuY29uc3QgRW1pdHRlciA9IHJlcXVpcmUoXCJjb21wb25lbnQtZW1pdHRlclwiKTtcbmNvbnN0IHsgcGljayB9ID0gcmVxdWlyZShcIi4uL3V0aWxcIik7XG5jb25zdCBnbG9iYWxUaGlzID0gcmVxdWlyZShcIi4uL2dsb2JhbFRoaXNcIik7XG5cbmNvbnN0IGRlYnVnID0gcmVxdWlyZShcImRlYnVnXCIpKFwiZW5naW5lLmlvLWNsaWVudDpwb2xsaW5nLXhoclwiKTtcblxuLyoqXG4gKiBFbXB0eSBmdW5jdGlvblxuICovXG5cbmZ1bmN0aW9uIGVtcHR5KCkge31cblxuY29uc3QgaGFzWEhSMiA9IChmdW5jdGlvbigpIHtcbiAgY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KHsgeGRvbWFpbjogZmFsc2UgfSk7XG4gIHJldHVybiBudWxsICE9IHhoci5yZXNwb25zZVR5cGU7XG59KSgpO1xuXG5jbGFzcyBYSFIgZXh0ZW5kcyBQb2xsaW5nIHtcbiAgLyoqXG4gICAqIFhIUiBQb2xsaW5nIGNvbnN0cnVjdG9yLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0c1xuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cbiAgY29uc3RydWN0b3Iob3B0cykge1xuICAgIHN1cGVyKG9wdHMpO1xuXG4gICAgaWYgKHR5cGVvZiBsb2NhdGlvbiAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgY29uc3QgaXNTU0wgPSBcImh0dHBzOlwiID09PSBsb2NhdGlvbi5wcm90b2NvbDtcbiAgICAgIGxldCBwb3J0ID0gbG9jYXRpb24ucG9ydDtcblxuICAgICAgLy8gc29tZSB1c2VyIGFnZW50cyBoYXZlIGVtcHR5IGBsb2NhdGlvbi5wb3J0YFxuICAgICAgaWYgKCFwb3J0KSB7XG4gICAgICAgIHBvcnQgPSBpc1NTTCA/IDQ0MyA6IDgwO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnhkID1cbiAgICAgICAgKHR5cGVvZiBsb2NhdGlvbiAhPT0gXCJ1bmRlZmluZWRcIiAmJlxuICAgICAgICAgIG9wdHMuaG9zdG5hbWUgIT09IGxvY2F0aW9uLmhvc3RuYW1lKSB8fFxuICAgICAgICBwb3J0ICE9PSBvcHRzLnBvcnQ7XG4gICAgICB0aGlzLnhzID0gb3B0cy5zZWN1cmUgIT09IGlzU1NMO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBYSFIgc3VwcG9ydHMgYmluYXJ5XG4gICAgICovXG4gICAgY29uc3QgZm9yY2VCYXNlNjQgPSBvcHRzICYmIG9wdHMuZm9yY2VCYXNlNjQ7XG4gICAgdGhpcy5zdXBwb3J0c0JpbmFyeSA9IGhhc1hIUjIgJiYgIWZvcmNlQmFzZTY0O1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSByZXF1ZXN0LlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgcmVxdWVzdChvcHRzID0ge30pIHtcbiAgICBPYmplY3QuYXNzaWduKG9wdHMsIHsgeGQ6IHRoaXMueGQsIHhzOiB0aGlzLnhzIH0sIHRoaXMub3B0cyk7XG4gICAgcmV0dXJuIG5ldyBSZXF1ZXN0KHRoaXMudXJpKCksIG9wdHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbmRzIGRhdGEuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhIHRvIHNlbmQuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxlZCB1cG9uIGZsdXNoLlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIGRvV3JpdGUoZGF0YSwgZm4pIHtcbiAgICBjb25zdCByZXEgPSB0aGlzLnJlcXVlc3Qoe1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGRhdGE6IGRhdGFcbiAgICB9KTtcbiAgICByZXEub24oXCJzdWNjZXNzXCIsIGZuKTtcbiAgICByZXEub24oXCJlcnJvclwiLCBlcnIgPT4ge1xuICAgICAgdGhpcy5vbkVycm9yKFwieGhyIHBvc3QgZXJyb3JcIiwgZXJyKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdGFydHMgYSBwb2xsIGN5Y2xlLlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIGRvUG9sbCgpIHtcbiAgICBkZWJ1ZyhcInhociBwb2xsXCIpO1xuICAgIGNvbnN0IHJlcSA9IHRoaXMucmVxdWVzdCgpO1xuICAgIHJlcS5vbihcImRhdGFcIiwgdGhpcy5vbkRhdGEuYmluZCh0aGlzKSk7XG4gICAgcmVxLm9uKFwiZXJyb3JcIiwgZXJyID0+IHtcbiAgICAgIHRoaXMub25FcnJvcihcInhociBwb2xsIGVycm9yXCIsIGVycik7XG4gICAgfSk7XG4gICAgdGhpcy5wb2xsWGhyID0gcmVxO1xuICB9XG59XG5cbmNsYXNzIFJlcXVlc3QgZXh0ZW5kcyBFbWl0dGVyIHtcbiAgLyoqXG4gICAqIFJlcXVlc3QgY29uc3RydWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG4gIGNvbnN0cnVjdG9yKHVyaSwgb3B0cykge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5vcHRzID0gb3B0cztcblxuICAgIHRoaXMubWV0aG9kID0gb3B0cy5tZXRob2QgfHwgXCJHRVRcIjtcbiAgICB0aGlzLnVyaSA9IHVyaTtcbiAgICB0aGlzLmFzeW5jID0gZmFsc2UgIT09IG9wdHMuYXN5bmM7XG4gICAgdGhpcy5kYXRhID0gdW5kZWZpbmVkICE9PSBvcHRzLmRhdGEgPyBvcHRzLmRhdGEgOiBudWxsO1xuXG4gICAgdGhpcy5jcmVhdGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIHRoZSBYSFIgb2JqZWN0IGFuZCBzZW5kcyB0aGUgcmVxdWVzdC5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBjcmVhdGUoKSB7XG4gICAgY29uc3Qgb3B0cyA9IHBpY2soXG4gICAgICB0aGlzLm9wdHMsXG4gICAgICBcImFnZW50XCIsXG4gICAgICBcImVuYWJsZXNYRFJcIixcbiAgICAgIFwicGZ4XCIsXG4gICAgICBcImtleVwiLFxuICAgICAgXCJwYXNzcGhyYXNlXCIsXG4gICAgICBcImNlcnRcIixcbiAgICAgIFwiY2FcIixcbiAgICAgIFwiY2lwaGVyc1wiLFxuICAgICAgXCJyZWplY3RVbmF1dGhvcml6ZWRcIixcbiAgICAgIFwiYXV0b1VucmVmXCJcbiAgICApO1xuICAgIG9wdHMueGRvbWFpbiA9ICEhdGhpcy5vcHRzLnhkO1xuICAgIG9wdHMueHNjaGVtZSA9ICEhdGhpcy5vcHRzLnhzO1xuXG4gICAgY29uc3QgeGhyID0gKHRoaXMueGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KG9wdHMpKTtcblxuICAgIHRyeSB7XG4gICAgICBkZWJ1ZyhcInhociBvcGVuICVzOiAlc1wiLCB0aGlzLm1ldGhvZCwgdGhpcy51cmkpO1xuICAgICAgeGhyLm9wZW4odGhpcy5tZXRob2QsIHRoaXMudXJpLCB0aGlzLmFzeW5jKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICh0aGlzLm9wdHMuZXh0cmFIZWFkZXJzKSB7XG4gICAgICAgICAgeGhyLnNldERpc2FibGVIZWFkZXJDaGVjayAmJiB4aHIuc2V0RGlzYWJsZUhlYWRlckNoZWNrKHRydWUpO1xuICAgICAgICAgIGZvciAobGV0IGkgaW4gdGhpcy5vcHRzLmV4dHJhSGVhZGVycykge1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0cy5leHRyYUhlYWRlcnMuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoaSwgdGhpcy5vcHRzLmV4dHJhSGVhZGVyc1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7fVxuXG4gICAgICBpZiAoXCJQT1NUXCIgPT09IHRoaXMubWV0aG9kKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LXR5cGVcIiwgXCJ0ZXh0L3BsYWluO2NoYXJzZXQ9VVRGLThcIik7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICB9XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQWNjZXB0XCIsIFwiKi8qXCIpO1xuICAgICAgfSBjYXRjaCAoZSkge31cblxuICAgICAgLy8gaWU2IGNoZWNrXG4gICAgICBpZiAoXCJ3aXRoQ3JlZGVudGlhbHNcIiBpbiB4aHIpIHtcbiAgICAgICAgeGhyLndpdGhDcmVkZW50aWFscyA9IHRoaXMub3B0cy53aXRoQ3JlZGVudGlhbHM7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLm9wdHMucmVxdWVzdFRpbWVvdXQpIHtcbiAgICAgICAgeGhyLnRpbWVvdXQgPSB0aGlzLm9wdHMucmVxdWVzdFRpbWVvdXQ7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmhhc1hEUigpKSB7XG4gICAgICAgIHhoci5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5vbkxvYWQoKTtcbiAgICAgICAgfTtcbiAgICAgICAgeGhyLm9uZXJyb3IgPSAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5vbkVycm9yKHhoci5yZXNwb25zZVRleHQpO1xuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcbiAgICAgICAgICBpZiAoNCAhPT0geGhyLnJlYWR5U3RhdGUpIHJldHVybjtcbiAgICAgICAgICBpZiAoMjAwID09PSB4aHIuc3RhdHVzIHx8IDEyMjMgPT09IHhoci5zdGF0dXMpIHtcbiAgICAgICAgICAgIHRoaXMub25Mb2FkKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSB0aGUgYGVycm9yYCBldmVudCBoYW5kbGVyIHRoYXQncyB1c2VyLXNldFxuICAgICAgICAgICAgLy8gZG9lcyBub3QgdGhyb3cgaW4gdGhlIHNhbWUgdGljayBhbmQgZ2V0cyBjYXVnaHQgaGVyZVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMub25FcnJvcih0eXBlb2YgeGhyLnN0YXR1cyA9PT0gXCJudW1iZXJcIiA/IHhoci5zdGF0dXMgOiAwKTtcbiAgICAgICAgICAgIH0sIDApO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgZGVidWcoXCJ4aHIgZGF0YSAlc1wiLCB0aGlzLmRhdGEpO1xuICAgICAgeGhyLnNlbmQodGhpcy5kYXRhKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBOZWVkIHRvIGRlZmVyIHNpbmNlIC5jcmVhdGUoKSBpcyBjYWxsZWQgZGlyZWN0bHkgZnJvbSB0aGUgY29uc3RydWN0b3JcbiAgICAgIC8vIGFuZCB0aHVzIHRoZSAnZXJyb3InIGV2ZW50IGNhbiBvbmx5IGJlIG9ubHkgYm91bmQgKmFmdGVyKiB0aGlzIGV4Y2VwdGlvblxuICAgICAgLy8gb2NjdXJzLiAgVGhlcmVmb3JlLCBhbHNvLCB3ZSBjYW5ub3QgdGhyb3cgaGVyZSBhdCBhbGwuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5vbkVycm9yKGUpO1xuICAgICAgfSwgMCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgdGhpcy5pbmRleCA9IFJlcXVlc3QucmVxdWVzdHNDb3VudCsrO1xuICAgICAgUmVxdWVzdC5yZXF1ZXN0c1t0aGlzLmluZGV4XSA9IHRoaXM7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCB1cG9uIHN1Y2Nlc3NmdWwgcmVzcG9uc2UuXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgb25TdWNjZXNzKCkge1xuICAgIHRoaXMuZW1pdChcInN1Y2Nlc3NcIik7XG4gICAgdGhpcy5jbGVhbnVwKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIGlmIHdlIGhhdmUgZGF0YS5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBvbkRhdGEoZGF0YSkge1xuICAgIHRoaXMuZW1pdChcImRhdGFcIiwgZGF0YSk7XG4gICAgdGhpcy5vblN1Y2Nlc3MoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgdXBvbiBlcnJvci5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBvbkVycm9yKGVycikge1xuICAgIHRoaXMuZW1pdChcImVycm9yXCIsIGVycik7XG4gICAgdGhpcy5jbGVhbnVwKHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFucyB1cCBob3VzZS5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBjbGVhbnVwKGZyb21FcnJvcikge1xuICAgIGlmIChcInVuZGVmaW5lZFwiID09PSB0eXBlb2YgdGhpcy54aHIgfHwgbnVsbCA9PT0gdGhpcy54aHIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8geG1saHR0cHJlcXVlc3RcbiAgICBpZiAodGhpcy5oYXNYRFIoKSkge1xuICAgICAgdGhpcy54aHIub25sb2FkID0gdGhpcy54aHIub25lcnJvciA9IGVtcHR5O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBlbXB0eTtcbiAgICB9XG5cbiAgICBpZiAoZnJvbUVycm9yKSB7XG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLnhoci5hYm9ydCgpO1xuICAgICAgfSBjYXRjaCAoZSkge31cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICBkZWxldGUgUmVxdWVzdC5yZXF1ZXN0c1t0aGlzLmluZGV4XTtcbiAgICB9XG5cbiAgICB0aGlzLnhociA9IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIHVwb24gbG9hZC5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBvbkxvYWQoKSB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMueGhyLnJlc3BvbnNlVGV4dDtcbiAgICBpZiAoZGF0YSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5vbkRhdGEoZGF0YSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGl0IGhhcyBYRG9tYWluUmVxdWVzdC5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBoYXNYRFIoKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBYRG9tYWluUmVxdWVzdCAhPT0gXCJ1bmRlZmluZWRcIiAmJiAhdGhpcy54cyAmJiB0aGlzLmVuYWJsZXNYRFI7XG4gIH1cblxuICAvKipcbiAgICogQWJvcnRzIHRoZSByZXF1ZXN0LlxuICAgKlxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cbiAgYWJvcnQoKSB7XG4gICAgdGhpcy5jbGVhbnVwKCk7XG4gIH1cbn1cblxuLyoqXG4gKiBBYm9ydHMgcGVuZGluZyByZXF1ZXN0cyB3aGVuIHVubG9hZGluZyB0aGUgd2luZG93LiBUaGlzIGlzIG5lZWRlZCB0byBwcmV2ZW50XG4gKiBtZW1vcnkgbGVha3MgKGUuZy4gd2hlbiB1c2luZyBJRSkgYW5kIHRvIGVuc3VyZSB0aGF0IG5vIHNwdXJpb3VzIGVycm9yIGlzXG4gKiBlbWl0dGVkLlxuICovXG5cblJlcXVlc3QucmVxdWVzdHNDb3VudCA9IDA7XG5SZXF1ZXN0LnJlcXVlc3RzID0ge307XG5cbmlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgaWYgKHR5cGVvZiBhdHRhY2hFdmVudCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgYXR0YWNoRXZlbnQoXCJvbnVubG9hZFwiLCB1bmxvYWRIYW5kbGVyKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYWRkRXZlbnRMaXN0ZW5lciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgY29uc3QgdGVybWluYXRpb25FdmVudCA9IFwib25wYWdlaGlkZVwiIGluIGdsb2JhbFRoaXMgPyBcInBhZ2VoaWRlXCIgOiBcInVubG9hZFwiO1xuICAgIGFkZEV2ZW50TGlzdGVuZXIodGVybWluYXRpb25FdmVudCwgdW5sb2FkSGFuZGxlciwgZmFsc2UpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVubG9hZEhhbmRsZXIoKSB7XG4gIGZvciAobGV0IGkgaW4gUmVxdWVzdC5yZXF1ZXN0cykge1xuICAgIGlmIChSZXF1ZXN0LnJlcXVlc3RzLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICBSZXF1ZXN0LnJlcXVlc3RzW2ldLmFib3J0KCk7XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gWEhSO1xubW9kdWxlLmV4cG9ydHMuUmVxdWVzdCA9IFJlcXVlc3Q7XG4iLCJjb25zdCBUcmFuc3BvcnQgPSByZXF1aXJlKFwiLi4vdHJhbnNwb3J0XCIpO1xuY29uc3QgcGFyc2VxcyA9IHJlcXVpcmUoXCJwYXJzZXFzXCIpO1xuY29uc3QgcGFyc2VyID0gcmVxdWlyZShcImVuZ2luZS5pby1wYXJzZXJcIik7XG5jb25zdCB5ZWFzdCA9IHJlcXVpcmUoXCJ5ZWFzdFwiKTtcblxuY29uc3QgZGVidWcgPSByZXF1aXJlKFwiZGVidWdcIikoXCJlbmdpbmUuaW8tY2xpZW50OnBvbGxpbmdcIik7XG5cbmNsYXNzIFBvbGxpbmcgZXh0ZW5kcyBUcmFuc3BvcnQge1xuICAvKipcbiAgICogVHJhbnNwb3J0IG5hbWUuXG4gICAqL1xuICBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gXCJwb2xsaW5nXCI7XG4gIH1cblxuICAvKipcbiAgICogT3BlbnMgdGhlIHNvY2tldCAodHJpZ2dlcnMgcG9sbGluZykuIFdlIHdyaXRlIGEgUElORyBtZXNzYWdlIHRvIGRldGVybWluZVxuICAgKiB3aGVuIHRoZSB0cmFuc3BvcnQgaXMgb3Blbi5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBkb09wZW4oKSB7XG4gICAgdGhpcy5wb2xsKCk7XG4gIH1cblxuICAvKipcbiAgICogUGF1c2VzIHBvbGxpbmcuXG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIHVwb24gYnVmZmVycyBhcmUgZmx1c2hlZCBhbmQgdHJhbnNwb3J0IGlzIHBhdXNlZFxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIHBhdXNlKG9uUGF1c2UpIHtcbiAgICB0aGlzLnJlYWR5U3RhdGUgPSBcInBhdXNpbmdcIjtcblxuICAgIGNvbnN0IHBhdXNlID0gKCkgPT4ge1xuICAgICAgZGVidWcoXCJwYXVzZWRcIik7XG4gICAgICB0aGlzLnJlYWR5U3RhdGUgPSBcInBhdXNlZFwiO1xuICAgICAgb25QYXVzZSgpO1xuICAgIH07XG5cbiAgICBpZiAodGhpcy5wb2xsaW5nIHx8ICF0aGlzLndyaXRhYmxlKSB7XG4gICAgICBsZXQgdG90YWwgPSAwO1xuXG4gICAgICBpZiAodGhpcy5wb2xsaW5nKSB7XG4gICAgICAgIGRlYnVnKFwid2UgYXJlIGN1cnJlbnRseSBwb2xsaW5nIC0gd2FpdGluZyB0byBwYXVzZVwiKTtcbiAgICAgICAgdG90YWwrKztcbiAgICAgICAgdGhpcy5vbmNlKFwicG9sbENvbXBsZXRlXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGRlYnVnKFwicHJlLXBhdXNlIHBvbGxpbmcgY29tcGxldGVcIik7XG4gICAgICAgICAgLS10b3RhbCB8fCBwYXVzZSgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLndyaXRhYmxlKSB7XG4gICAgICAgIGRlYnVnKFwid2UgYXJlIGN1cnJlbnRseSB3cml0aW5nIC0gd2FpdGluZyB0byBwYXVzZVwiKTtcbiAgICAgICAgdG90YWwrKztcbiAgICAgICAgdGhpcy5vbmNlKFwiZHJhaW5cIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgZGVidWcoXCJwcmUtcGF1c2Ugd3JpdGluZyBjb21wbGV0ZVwiKTtcbiAgICAgICAgICAtLXRvdGFsIHx8IHBhdXNlKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwYXVzZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTdGFydHMgcG9sbGluZyBjeWNsZS5cbiAgICpcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG4gIHBvbGwoKSB7XG4gICAgZGVidWcoXCJwb2xsaW5nXCIpO1xuICAgIHRoaXMucG9sbGluZyA9IHRydWU7XG4gICAgdGhpcy5kb1BvbGwoKTtcbiAgICB0aGlzLmVtaXQoXCJwb2xsXCIpO1xuICB9XG5cbiAgLyoqXG4gICAqIE92ZXJsb2FkcyBvbkRhdGEgdG8gZGV0ZWN0IHBheWxvYWRzLlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIG9uRGF0YShkYXRhKSB7XG4gICAgZGVidWcoXCJwb2xsaW5nIGdvdCBkYXRhICVzXCIsIGRhdGEpO1xuICAgIGNvbnN0IGNhbGxiYWNrID0gcGFja2V0ID0+IHtcbiAgICAgIC8vIGlmIGl0cyB0aGUgZmlyc3QgbWVzc2FnZSB3ZSBjb25zaWRlciB0aGUgdHJhbnNwb3J0IG9wZW5cbiAgICAgIGlmIChcIm9wZW5pbmdcIiA9PT0gdGhpcy5yZWFkeVN0YXRlICYmIHBhY2tldC50eXBlID09PSBcIm9wZW5cIikge1xuICAgICAgICB0aGlzLm9uT3BlbigpO1xuICAgICAgfVxuXG4gICAgICAvLyBpZiBpdHMgYSBjbG9zZSBwYWNrZXQsIHdlIGNsb3NlIHRoZSBvbmdvaW5nIHJlcXVlc3RzXG4gICAgICBpZiAoXCJjbG9zZVwiID09PSBwYWNrZXQudHlwZSkge1xuICAgICAgICB0aGlzLm9uQ2xvc2UoKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICAvLyBvdGhlcndpc2UgYnlwYXNzIG9uRGF0YSBhbmQgaGFuZGxlIHRoZSBtZXNzYWdlXG4gICAgICB0aGlzLm9uUGFja2V0KHBhY2tldCk7XG4gICAgfTtcblxuICAgIC8vIGRlY29kZSBwYXlsb2FkXG4gICAgcGFyc2VyLmRlY29kZVBheWxvYWQoZGF0YSwgdGhpcy5zb2NrZXQuYmluYXJ5VHlwZSkuZm9yRWFjaChjYWxsYmFjayk7XG5cbiAgICAvLyBpZiBhbiBldmVudCBkaWQgbm90IHRyaWdnZXIgY2xvc2luZ1xuICAgIGlmIChcImNsb3NlZFwiICE9PSB0aGlzLnJlYWR5U3RhdGUpIHtcbiAgICAgIC8vIGlmIHdlIGdvdCBkYXRhIHdlJ3JlIG5vdCBwb2xsaW5nXG4gICAgICB0aGlzLnBvbGxpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMuZW1pdChcInBvbGxDb21wbGV0ZVwiKTtcblxuICAgICAgaWYgKFwib3BlblwiID09PSB0aGlzLnJlYWR5U3RhdGUpIHtcbiAgICAgICAgdGhpcy5wb2xsKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZWJ1ZygnaWdub3JpbmcgcG9sbCAtIHRyYW5zcG9ydCBzdGF0ZSBcIiVzXCInLCB0aGlzLnJlYWR5U3RhdGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBGb3IgcG9sbGluZywgc2VuZCBhIGNsb3NlIHBhY2tldC5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBkb0Nsb3NlKCkge1xuICAgIGNvbnN0IGNsb3NlID0gKCkgPT4ge1xuICAgICAgZGVidWcoXCJ3cml0aW5nIGNsb3NlIHBhY2tldFwiKTtcbiAgICAgIHRoaXMud3JpdGUoW3sgdHlwZTogXCJjbG9zZVwiIH1dKTtcbiAgICB9O1xuXG4gICAgaWYgKFwib3BlblwiID09PSB0aGlzLnJlYWR5U3RhdGUpIHtcbiAgICAgIGRlYnVnKFwidHJhbnNwb3J0IG9wZW4gLSBjbG9zaW5nXCIpO1xuICAgICAgY2xvc2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaW4gY2FzZSB3ZSdyZSB0cnlpbmcgdG8gY2xvc2Ugd2hpbGVcbiAgICAgIC8vIGhhbmRzaGFraW5nIGlzIGluIHByb2dyZXNzIChHSC0xNjQpXG4gICAgICBkZWJ1ZyhcInRyYW5zcG9ydCBub3Qgb3BlbiAtIGRlZmVycmluZyBjbG9zZVwiKTtcbiAgICAgIHRoaXMub25jZShcIm9wZW5cIiwgY2xvc2UpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBXcml0ZXMgYSBwYWNrZXRzIHBheWxvYWQuXG4gICAqXG4gICAqIEBwYXJhbSB7QXJyYXl9IGRhdGEgcGFja2V0c1xuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBkcmFpbiBjYWxsYmFja1xuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIHdyaXRlKHBhY2tldHMpIHtcbiAgICB0aGlzLndyaXRhYmxlID0gZmFsc2U7XG5cbiAgICBwYXJzZXIuZW5jb2RlUGF5bG9hZChwYWNrZXRzLCBkYXRhID0+IHtcbiAgICAgIHRoaXMuZG9Xcml0ZShkYXRhLCAoKSA9PiB7XG4gICAgICAgIHRoaXMud3JpdGFibGUgPSB0cnVlO1xuICAgICAgICB0aGlzLmVtaXQoXCJkcmFpblwiKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdlbmVyYXRlcyB1cmkgZm9yIGNvbm5lY3Rpb24uXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgdXJpKCkge1xuICAgIGxldCBxdWVyeSA9IHRoaXMucXVlcnkgfHwge307XG4gICAgY29uc3Qgc2NoZW1hID0gdGhpcy5vcHRzLnNlY3VyZSA/IFwiaHR0cHNcIiA6IFwiaHR0cFwiO1xuICAgIGxldCBwb3J0ID0gXCJcIjtcblxuICAgIC8vIGNhY2hlIGJ1c3RpbmcgaXMgZm9yY2VkXG4gICAgaWYgKGZhbHNlICE9PSB0aGlzLm9wdHMudGltZXN0YW1wUmVxdWVzdHMpIHtcbiAgICAgIHF1ZXJ5W3RoaXMub3B0cy50aW1lc3RhbXBQYXJhbV0gPSB5ZWFzdCgpO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5zdXBwb3J0c0JpbmFyeSAmJiAhcXVlcnkuc2lkKSB7XG4gICAgICBxdWVyeS5iNjQgPSAxO1xuICAgIH1cblxuICAgIHF1ZXJ5ID0gcGFyc2Vxcy5lbmNvZGUocXVlcnkpO1xuXG4gICAgLy8gYXZvaWQgcG9ydCBpZiBkZWZhdWx0IGZvciBzY2hlbWFcbiAgICBpZiAoXG4gICAgICB0aGlzLm9wdHMucG9ydCAmJlxuICAgICAgKChcImh0dHBzXCIgPT09IHNjaGVtYSAmJiBOdW1iZXIodGhpcy5vcHRzLnBvcnQpICE9PSA0NDMpIHx8XG4gICAgICAgIChcImh0dHBcIiA9PT0gc2NoZW1hICYmIE51bWJlcih0aGlzLm9wdHMucG9ydCkgIT09IDgwKSlcbiAgICApIHtcbiAgICAgIHBvcnQgPSBcIjpcIiArIHRoaXMub3B0cy5wb3J0O1xuICAgIH1cblxuICAgIC8vIHByZXBlbmQgPyB0byBxdWVyeVxuICAgIGlmIChxdWVyeS5sZW5ndGgpIHtcbiAgICAgIHF1ZXJ5ID0gXCI/XCIgKyBxdWVyeTtcbiAgICB9XG5cbiAgICBjb25zdCBpcHY2ID0gdGhpcy5vcHRzLmhvc3RuYW1lLmluZGV4T2YoXCI6XCIpICE9PSAtMTtcbiAgICByZXR1cm4gKFxuICAgICAgc2NoZW1hICtcbiAgICAgIFwiOi8vXCIgK1xuICAgICAgKGlwdjYgPyBcIltcIiArIHRoaXMub3B0cy5ob3N0bmFtZSArIFwiXVwiIDogdGhpcy5vcHRzLmhvc3RuYW1lKSArXG4gICAgICBwb3J0ICtcbiAgICAgIHRoaXMub3B0cy5wYXRoICtcbiAgICAgIHF1ZXJ5XG4gICAgKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBvbGxpbmc7XG4iLCJjb25zdCBnbG9iYWxUaGlzID0gcmVxdWlyZShcIi4uL2dsb2JhbFRoaXNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBXZWJTb2NrZXQ6IGdsb2JhbFRoaXMuV2ViU29ja2V0IHx8IGdsb2JhbFRoaXMuTW96V2ViU29ja2V0LFxuICB1c2luZ0Jyb3dzZXJXZWJTb2NrZXQ6IHRydWUsXG4gIGRlZmF1bHRCaW5hcnlUeXBlOiBcImFycmF5YnVmZmVyXCJcbn07XG4iLCJjb25zdCBUcmFuc3BvcnQgPSByZXF1aXJlKFwiLi4vdHJhbnNwb3J0XCIpO1xuY29uc3QgcGFyc2VyID0gcmVxdWlyZShcImVuZ2luZS5pby1wYXJzZXJcIik7XG5jb25zdCBwYXJzZXFzID0gcmVxdWlyZShcInBhcnNlcXNcIik7XG5jb25zdCB5ZWFzdCA9IHJlcXVpcmUoXCJ5ZWFzdFwiKTtcbmNvbnN0IHsgcGljayB9ID0gcmVxdWlyZShcIi4uL3V0aWxcIik7XG5jb25zdCB7XG4gIFdlYlNvY2tldCxcbiAgdXNpbmdCcm93c2VyV2ViU29ja2V0LFxuICBkZWZhdWx0QmluYXJ5VHlwZVxufSA9IHJlcXVpcmUoXCIuL3dlYnNvY2tldC1jb25zdHJ1Y3RvclwiKTtcblxuY29uc3QgZGVidWcgPSByZXF1aXJlKFwiZGVidWdcIikoXCJlbmdpbmUuaW8tY2xpZW50OndlYnNvY2tldFwiKTtcblxuLy8gZGV0ZWN0IFJlYWN0TmF0aXZlIGVudmlyb25tZW50XG5jb25zdCBpc1JlYWN0TmF0aXZlID1cbiAgdHlwZW9mIG5hdmlnYXRvciAhPT0gXCJ1bmRlZmluZWRcIiAmJlxuICB0eXBlb2YgbmF2aWdhdG9yLnByb2R1Y3QgPT09IFwic3RyaW5nXCIgJiZcbiAgbmF2aWdhdG9yLnByb2R1Y3QudG9Mb3dlckNhc2UoKSA9PT0gXCJyZWFjdG5hdGl2ZVwiO1xuXG5jbGFzcyBXUyBleHRlbmRzIFRyYW5zcG9ydCB7XG4gIC8qKlxuICAgKiBXZWJTb2NrZXQgdHJhbnNwb3J0IGNvbnN0cnVjdG9yLlxuICAgKlxuICAgKiBAYXBpIHtPYmplY3R9IGNvbm5lY3Rpb24gb3B0aW9uc1xuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cbiAgY29uc3RydWN0b3Iob3B0cykge1xuICAgIHN1cGVyKG9wdHMpO1xuXG4gICAgdGhpcy5zdXBwb3J0c0JpbmFyeSA9ICFvcHRzLmZvcmNlQmFzZTY0O1xuICB9XG5cbiAgLyoqXG4gICAqIFRyYW5zcG9ydCBuYW1lLlxuICAgKlxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cbiAgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIFwid2Vic29ja2V0XCI7XG4gIH1cblxuICAvKipcbiAgICogT3BlbnMgc29ja2V0LlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIGRvT3BlbigpIHtcbiAgICBpZiAoIXRoaXMuY2hlY2soKSkge1xuICAgICAgLy8gbGV0IHByb2JlIHRpbWVvdXRcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB1cmkgPSB0aGlzLnVyaSgpO1xuICAgIGNvbnN0IHByb3RvY29scyA9IHRoaXMub3B0cy5wcm90b2NvbHM7XG5cbiAgICAvLyBSZWFjdCBOYXRpdmUgb25seSBzdXBwb3J0cyB0aGUgJ2hlYWRlcnMnIG9wdGlvbiwgYW5kIHdpbGwgcHJpbnQgYSB3YXJuaW5nIGlmIGFueXRoaW5nIGVsc2UgaXMgcGFzc2VkXG4gICAgY29uc3Qgb3B0cyA9IGlzUmVhY3ROYXRpdmVcbiAgICAgID8ge31cbiAgICAgIDogcGljayhcbiAgICAgICAgICB0aGlzLm9wdHMsXG4gICAgICAgICAgXCJhZ2VudFwiLFxuICAgICAgICAgIFwicGVyTWVzc2FnZURlZmxhdGVcIixcbiAgICAgICAgICBcInBmeFwiLFxuICAgICAgICAgIFwia2V5XCIsXG4gICAgICAgICAgXCJwYXNzcGhyYXNlXCIsXG4gICAgICAgICAgXCJjZXJ0XCIsXG4gICAgICAgICAgXCJjYVwiLFxuICAgICAgICAgIFwiY2lwaGVyc1wiLFxuICAgICAgICAgIFwicmVqZWN0VW5hdXRob3JpemVkXCIsXG4gICAgICAgICAgXCJsb2NhbEFkZHJlc3NcIixcbiAgICAgICAgICBcInByb3RvY29sVmVyc2lvblwiLFxuICAgICAgICAgIFwib3JpZ2luXCIsXG4gICAgICAgICAgXCJtYXhQYXlsb2FkXCIsXG4gICAgICAgICAgXCJmYW1pbHlcIixcbiAgICAgICAgICBcImNoZWNrU2VydmVySWRlbnRpdHlcIlxuICAgICAgICApO1xuXG4gICAgaWYgKHRoaXMub3B0cy5leHRyYUhlYWRlcnMpIHtcbiAgICAgIG9wdHMuaGVhZGVycyA9IHRoaXMub3B0cy5leHRyYUhlYWRlcnM7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIHRoaXMud3MgPVxuICAgICAgICB1c2luZ0Jyb3dzZXJXZWJTb2NrZXQgJiYgIWlzUmVhY3ROYXRpdmVcbiAgICAgICAgICA/IHByb3RvY29sc1xuICAgICAgICAgICAgPyBuZXcgV2ViU29ja2V0KHVyaSwgcHJvdG9jb2xzKVxuICAgICAgICAgICAgOiBuZXcgV2ViU29ja2V0KHVyaSlcbiAgICAgICAgICA6IG5ldyBXZWJTb2NrZXQodXJpLCBwcm90b2NvbHMsIG9wdHMpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHRoaXMuZW1pdChcImVycm9yXCIsIGVycik7XG4gICAgfVxuXG4gICAgdGhpcy53cy5iaW5hcnlUeXBlID0gdGhpcy5zb2NrZXQuYmluYXJ5VHlwZSB8fCBkZWZhdWx0QmluYXJ5VHlwZTtcblxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGV2ZW50IGxpc3RlbmVycyB0byB0aGUgc29ja2V0XG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgdGhpcy53cy5vbm9wZW4gPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5vcHRzLmF1dG9VbnJlZikge1xuICAgICAgICB0aGlzLndzLl9zb2NrZXQudW5yZWYoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMub25PcGVuKCk7XG4gICAgfTtcbiAgICB0aGlzLndzLm9uY2xvc2UgPSB0aGlzLm9uQ2xvc2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLndzLm9ubWVzc2FnZSA9IGV2ID0+IHRoaXMub25EYXRhKGV2LmRhdGEpO1xuICAgIHRoaXMud3Mub25lcnJvciA9IGUgPT4gdGhpcy5vbkVycm9yKFwid2Vic29ja2V0IGVycm9yXCIsIGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFdyaXRlcyBkYXRhIHRvIHNvY2tldC5cbiAgICpcbiAgICogQHBhcmFtIHtBcnJheX0gYXJyYXkgb2YgcGFja2V0cy5cbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICB3cml0ZShwYWNrZXRzKSB7XG4gICAgdGhpcy53cml0YWJsZSA9IGZhbHNlO1xuXG4gICAgLy8gZW5jb2RlUGFja2V0IGVmZmljaWVudCBhcyBpdCB1c2VzIFdTIGZyYW1pbmdcbiAgICAvLyBubyBuZWVkIGZvciBlbmNvZGVQYXlsb2FkXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYWNrZXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBwYWNrZXQgPSBwYWNrZXRzW2ldO1xuICAgICAgY29uc3QgbGFzdFBhY2tldCA9IGkgPT09IHBhY2tldHMubGVuZ3RoIC0gMTtcblxuICAgICAgcGFyc2VyLmVuY29kZVBhY2tldChwYWNrZXQsIHRoaXMuc3VwcG9ydHNCaW5hcnksIGRhdGEgPT4ge1xuICAgICAgICAvLyBhbHdheXMgY3JlYXRlIGEgbmV3IG9iamVjdCAoR0gtNDM3KVxuICAgICAgICBjb25zdCBvcHRzID0ge307XG4gICAgICAgIGlmICghdXNpbmdCcm93c2VyV2ViU29ja2V0KSB7XG4gICAgICAgICAgaWYgKHBhY2tldC5vcHRpb25zKSB7XG4gICAgICAgICAgICBvcHRzLmNvbXByZXNzID0gcGFja2V0Lm9wdGlvbnMuY29tcHJlc3M7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHRoaXMub3B0cy5wZXJNZXNzYWdlRGVmbGF0ZSkge1xuICAgICAgICAgICAgY29uc3QgbGVuID1cbiAgICAgICAgICAgICAgXCJzdHJpbmdcIiA9PT0gdHlwZW9mIGRhdGEgPyBCdWZmZXIuYnl0ZUxlbmd0aChkYXRhKSA6IGRhdGEubGVuZ3RoO1xuICAgICAgICAgICAgaWYgKGxlbiA8IHRoaXMub3B0cy5wZXJNZXNzYWdlRGVmbGF0ZS50aHJlc2hvbGQpIHtcbiAgICAgICAgICAgICAgb3B0cy5jb21wcmVzcyA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNvbWV0aW1lcyB0aGUgd2Vic29ja2V0IGhhcyBhbHJlYWR5IGJlZW4gY2xvc2VkIGJ1dCB0aGUgYnJvd3NlciBkaWRuJ3RcbiAgICAgICAgLy8gaGF2ZSBhIGNoYW5jZSBvZiBpbmZvcm1pbmcgdXMgYWJvdXQgaXQgeWV0LCBpbiB0aGF0IGNhc2Ugc2VuZCB3aWxsXG4gICAgICAgIC8vIHRocm93IGFuIGVycm9yXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgaWYgKHVzaW5nQnJvd3NlcldlYlNvY2tldCkge1xuICAgICAgICAgICAgLy8gVHlwZUVycm9yIGlzIHRocm93biB3aGVuIHBhc3NpbmcgdGhlIHNlY29uZCBhcmd1bWVudCBvbiBTYWZhcmlcbiAgICAgICAgICAgIHRoaXMud3Muc2VuZChkYXRhKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy53cy5zZW5kKGRhdGEsIG9wdHMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGRlYnVnKFwid2Vic29ja2V0IGNsb3NlZCBiZWZvcmUgb25jbG9zZSBldmVudFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChsYXN0UGFja2V0KSB7XG4gICAgICAgICAgLy8gZmFrZSBkcmFpblxuICAgICAgICAgIC8vIGRlZmVyIHRvIG5leHQgdGljayB0byBhbGxvdyBTb2NrZXQgdG8gY2xlYXIgd3JpdGVCdWZmZXJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMud3JpdGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5lbWl0KFwiZHJhaW5cIik7XG4gICAgICAgICAgfSwgMCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgdXBvbiBjbG9zZVxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIG9uQ2xvc2UoKSB7XG4gICAgVHJhbnNwb3J0LnByb3RvdHlwZS5vbkNsb3NlLmNhbGwodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogQ2xvc2VzIHNvY2tldC5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBkb0Nsb3NlKCkge1xuICAgIGlmICh0eXBlb2YgdGhpcy53cyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgdGhpcy53cy5jbG9zZSgpO1xuICAgICAgdGhpcy53cyA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdlbmVyYXRlcyB1cmkgZm9yIGNvbm5lY3Rpb24uXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgdXJpKCkge1xuICAgIGxldCBxdWVyeSA9IHRoaXMucXVlcnkgfHwge307XG4gICAgY29uc3Qgc2NoZW1hID0gdGhpcy5vcHRzLnNlY3VyZSA/IFwid3NzXCIgOiBcIndzXCI7XG4gICAgbGV0IHBvcnQgPSBcIlwiO1xuXG4gICAgLy8gYXZvaWQgcG9ydCBpZiBkZWZhdWx0IGZvciBzY2hlbWFcbiAgICBpZiAoXG4gICAgICB0aGlzLm9wdHMucG9ydCAmJlxuICAgICAgKChcIndzc1wiID09PSBzY2hlbWEgJiYgTnVtYmVyKHRoaXMub3B0cy5wb3J0KSAhPT0gNDQzKSB8fFxuICAgICAgICAoXCJ3c1wiID09PSBzY2hlbWEgJiYgTnVtYmVyKHRoaXMub3B0cy5wb3J0KSAhPT0gODApKVxuICAgICkge1xuICAgICAgcG9ydCA9IFwiOlwiICsgdGhpcy5vcHRzLnBvcnQ7XG4gICAgfVxuXG4gICAgLy8gYXBwZW5kIHRpbWVzdGFtcCB0byBVUklcbiAgICBpZiAodGhpcy5vcHRzLnRpbWVzdGFtcFJlcXVlc3RzKSB7XG4gICAgICBxdWVyeVt0aGlzLm9wdHMudGltZXN0YW1wUGFyYW1dID0geWVhc3QoKTtcbiAgICB9XG5cbiAgICAvLyBjb21tdW5pY2F0ZSBiaW5hcnkgc3VwcG9ydCBjYXBhYmlsaXRpZXNcbiAgICBpZiAoIXRoaXMuc3VwcG9ydHNCaW5hcnkpIHtcbiAgICAgIHF1ZXJ5LmI2NCA9IDE7XG4gICAgfVxuXG4gICAgcXVlcnkgPSBwYXJzZXFzLmVuY29kZShxdWVyeSk7XG5cbiAgICAvLyBwcmVwZW5kID8gdG8gcXVlcnlcbiAgICBpZiAocXVlcnkubGVuZ3RoKSB7XG4gICAgICBxdWVyeSA9IFwiP1wiICsgcXVlcnk7XG4gICAgfVxuXG4gICAgY29uc3QgaXB2NiA9IHRoaXMub3B0cy5ob3N0bmFtZS5pbmRleE9mKFwiOlwiKSAhPT0gLTE7XG4gICAgcmV0dXJuIChcbiAgICAgIHNjaGVtYSArXG4gICAgICBcIjovL1wiICtcbiAgICAgIChpcHY2ID8gXCJbXCIgKyB0aGlzLm9wdHMuaG9zdG5hbWUgKyBcIl1cIiA6IHRoaXMub3B0cy5ob3N0bmFtZSkgK1xuICAgICAgcG9ydCArXG4gICAgICB0aGlzLm9wdHMucGF0aCArXG4gICAgICBxdWVyeVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogRmVhdHVyZSBkZXRlY3Rpb24gZm9yIFdlYlNvY2tldC5cbiAgICpcbiAgICogQHJldHVybiB7Qm9vbGVhbn0gd2hldGhlciB0aGlzIHRyYW5zcG9ydCBpcyBhdmFpbGFibGUuXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuICBjaGVjaygpIHtcbiAgICByZXR1cm4gKFxuICAgICAgISFXZWJTb2NrZXQgJiZcbiAgICAgICEoXCJfX2luaXRpYWxpemVcIiBpbiBXZWJTb2NrZXQgJiYgdGhpcy5uYW1lID09PSBXUy5wcm90b3R5cGUubmFtZSlcbiAgICApO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gV1M7XG4iLCJtb2R1bGUuZXhwb3J0cy5waWNrID0gKG9iaiwgLi4uYXR0cikgPT4ge1xuICByZXR1cm4gYXR0ci5yZWR1Y2UoKGFjYywgaykgPT4ge1xuICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgIGFjY1trXSA9IG9ialtrXTtcbiAgICB9XG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xufTtcbiIsIi8vIGJyb3dzZXIgc2hpbSBmb3IgeG1saHR0cHJlcXVlc3QgbW9kdWxlXG5cbmNvbnN0IGhhc0NPUlMgPSByZXF1aXJlKFwiaGFzLWNvcnNcIik7XG5jb25zdCBnbG9iYWxUaGlzID0gcmVxdWlyZShcIi4vZ2xvYmFsVGhpc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcHRzKSB7XG4gIGNvbnN0IHhkb21haW4gPSBvcHRzLnhkb21haW47XG5cbiAgLy8gc2NoZW1lIG11c3QgYmUgc2FtZSB3aGVuIHVzaWduIFhEb21haW5SZXF1ZXN0XG4gIC8vIGh0dHA6Ly9ibG9ncy5tc2RuLmNvbS9iL2llaW50ZXJuYWxzL2FyY2hpdmUvMjAxMC8wNS8xMy94ZG9tYWlucmVxdWVzdC1yZXN0cmljdGlvbnMtbGltaXRhdGlvbnMtYW5kLXdvcmthcm91bmRzLmFzcHhcbiAgY29uc3QgeHNjaGVtZSA9IG9wdHMueHNjaGVtZTtcblxuICAvLyBYRG9tYWluUmVxdWVzdCBoYXMgYSBmbG93IG9mIG5vdCBzZW5kaW5nIGNvb2tpZSwgdGhlcmVmb3JlIGl0IHNob3VsZCBiZSBkaXNhYmxlZCBhcyBhIGRlZmF1bHQuXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9BdXRvbWF0dGljL2VuZ2luZS5pby1jbGllbnQvcHVsbC8yMTdcbiAgY29uc3QgZW5hYmxlc1hEUiA9IG9wdHMuZW5hYmxlc1hEUjtcblxuICAvLyBYTUxIdHRwUmVxdWVzdCBjYW4gYmUgZGlzYWJsZWQgb24gSUVcbiAgdHJ5IHtcbiAgICBpZiAoXCJ1bmRlZmluZWRcIiAhPT0gdHlwZW9mIFhNTEh0dHBSZXF1ZXN0ICYmICgheGRvbWFpbiB8fCBoYXNDT1JTKSkge1xuICAgICAgcmV0dXJuIG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIH1cbiAgfSBjYXRjaCAoZSkge31cblxuICAvLyBVc2UgWERvbWFpblJlcXVlc3QgZm9yIElFOCBpZiBlbmFibGVzWERSIGlzIHRydWVcbiAgLy8gYmVjYXVzZSBsb2FkaW5nIGJhciBrZWVwcyBmbGFzaGluZyB3aGVuIHVzaW5nIGpzb25wLXBvbGxpbmdcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3l1amlvc2FrYS9zb2NrZS5pby1pZTgtbG9hZGluZy1leGFtcGxlXG4gIHRyeSB7XG4gICAgaWYgKFwidW5kZWZpbmVkXCIgIT09IHR5cGVvZiBYRG9tYWluUmVxdWVzdCAmJiAheHNjaGVtZSAmJiBlbmFibGVzWERSKSB7XG4gICAgICByZXR1cm4gbmV3IFhEb21haW5SZXF1ZXN0KCk7XG4gICAgfVxuICB9IGNhdGNoIChlKSB7fVxuXG4gIGlmICgheGRvbWFpbikge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gbmV3IGdsb2JhbFRoaXNbW1wiQWN0aXZlXCJdLmNvbmNhdChcIk9iamVjdFwiKS5qb2luKFwiWFwiKV0oXG4gICAgICAgIFwiTWljcm9zb2Z0LlhNTEhUVFBcIlxuICAgICAgKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICB9XG59O1xuIiwiY29uc3QgUEFDS0VUX1RZUEVTID0gT2JqZWN0LmNyZWF0ZShudWxsKTsgLy8gbm8gTWFwID0gbm8gcG9seWZpbGxcblBBQ0tFVF9UWVBFU1tcIm9wZW5cIl0gPSBcIjBcIjtcblBBQ0tFVF9UWVBFU1tcImNsb3NlXCJdID0gXCIxXCI7XG5QQUNLRVRfVFlQRVNbXCJwaW5nXCJdID0gXCIyXCI7XG5QQUNLRVRfVFlQRVNbXCJwb25nXCJdID0gXCIzXCI7XG5QQUNLRVRfVFlQRVNbXCJtZXNzYWdlXCJdID0gXCI0XCI7XG5QQUNLRVRfVFlQRVNbXCJ1cGdyYWRlXCJdID0gXCI1XCI7XG5QQUNLRVRfVFlQRVNbXCJub29wXCJdID0gXCI2XCI7XG5cbmNvbnN0IFBBQ0tFVF9UWVBFU19SRVZFUlNFID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbk9iamVjdC5rZXlzKFBBQ0tFVF9UWVBFUykuZm9yRWFjaChrZXkgPT4ge1xuICBQQUNLRVRfVFlQRVNfUkVWRVJTRVtQQUNLRVRfVFlQRVNba2V5XV0gPSBrZXk7XG59KTtcblxuY29uc3QgRVJST1JfUEFDS0VUID0geyB0eXBlOiBcImVycm9yXCIsIGRhdGE6IFwicGFyc2VyIGVycm9yXCIgfTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIFBBQ0tFVF9UWVBFUyxcbiAgUEFDS0VUX1RZUEVTX1JFVkVSU0UsXG4gIEVSUk9SX1BBQ0tFVFxufTtcbiIsImNvbnN0IHsgUEFDS0VUX1RZUEVTX1JFVkVSU0UsIEVSUk9SX1BBQ0tFVCB9ID0gcmVxdWlyZShcIi4vY29tbW9uc1wiKTtcblxuY29uc3Qgd2l0aE5hdGl2ZUFycmF5QnVmZmVyID0gdHlwZW9mIEFycmF5QnVmZmVyID09PSBcImZ1bmN0aW9uXCI7XG5cbmxldCBiYXNlNjRkZWNvZGVyO1xuaWYgKHdpdGhOYXRpdmVBcnJheUJ1ZmZlcikge1xuICBiYXNlNjRkZWNvZGVyID0gcmVxdWlyZShcImJhc2U2NC1hcnJheWJ1ZmZlclwiKTtcbn1cblxuY29uc3QgZGVjb2RlUGFja2V0ID0gKGVuY29kZWRQYWNrZXQsIGJpbmFyeVR5cGUpID0+IHtcbiAgaWYgKHR5cGVvZiBlbmNvZGVkUGFja2V0ICE9PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IFwibWVzc2FnZVwiLFxuICAgICAgZGF0YTogbWFwQmluYXJ5KGVuY29kZWRQYWNrZXQsIGJpbmFyeVR5cGUpXG4gICAgfTtcbiAgfVxuICBjb25zdCB0eXBlID0gZW5jb2RlZFBhY2tldC5jaGFyQXQoMCk7XG4gIGlmICh0eXBlID09PSBcImJcIikge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBcIm1lc3NhZ2VcIixcbiAgICAgIGRhdGE6IGRlY29kZUJhc2U2NFBhY2tldChlbmNvZGVkUGFja2V0LnN1YnN0cmluZygxKSwgYmluYXJ5VHlwZSlcbiAgICB9O1xuICB9XG4gIGNvbnN0IHBhY2tldFR5cGUgPSBQQUNLRVRfVFlQRVNfUkVWRVJTRVt0eXBlXTtcbiAgaWYgKCFwYWNrZXRUeXBlKSB7XG4gICAgcmV0dXJuIEVSUk9SX1BBQ0tFVDtcbiAgfVxuICByZXR1cm4gZW5jb2RlZFBhY2tldC5sZW5ndGggPiAxXG4gICAgPyB7XG4gICAgICAgIHR5cGU6IFBBQ0tFVF9UWVBFU19SRVZFUlNFW3R5cGVdLFxuICAgICAgICBkYXRhOiBlbmNvZGVkUGFja2V0LnN1YnN0cmluZygxKVxuICAgICAgfVxuICAgIDoge1xuICAgICAgICB0eXBlOiBQQUNLRVRfVFlQRVNfUkVWRVJTRVt0eXBlXVxuICAgICAgfTtcbn07XG5cbmNvbnN0IGRlY29kZUJhc2U2NFBhY2tldCA9IChkYXRhLCBiaW5hcnlUeXBlKSA9PiB7XG4gIGlmIChiYXNlNjRkZWNvZGVyKSB7XG4gICAgY29uc3QgZGVjb2RlZCA9IGJhc2U2NGRlY29kZXIuZGVjb2RlKGRhdGEpO1xuICAgIHJldHVybiBtYXBCaW5hcnkoZGVjb2RlZCwgYmluYXJ5VHlwZSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHsgYmFzZTY0OiB0cnVlLCBkYXRhIH07IC8vIGZhbGxiYWNrIGZvciBvbGQgYnJvd3NlcnNcbiAgfVxufTtcblxuY29uc3QgbWFwQmluYXJ5ID0gKGRhdGEsIGJpbmFyeVR5cGUpID0+IHtcbiAgc3dpdGNoIChiaW5hcnlUeXBlKSB7XG4gICAgY2FzZSBcImJsb2JcIjpcbiAgICAgIHJldHVybiBkYXRhIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIgPyBuZXcgQmxvYihbZGF0YV0pIDogZGF0YTtcbiAgICBjYXNlIFwiYXJyYXlidWZmZXJcIjpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGRhdGE7IC8vIGFzc3VtaW5nIHRoZSBkYXRhIGlzIGFscmVhZHkgYW4gQXJyYXlCdWZmZXJcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBkZWNvZGVQYWNrZXQ7XG4iLCJjb25zdCB7IFBBQ0tFVF9UWVBFUyB9ID0gcmVxdWlyZShcIi4vY29tbW9uc1wiKTtcblxuY29uc3Qgd2l0aE5hdGl2ZUJsb2IgPVxuICB0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiIHx8XG4gICh0eXBlb2YgQmxvYiAhPT0gXCJ1bmRlZmluZWRcIiAmJlxuICAgIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChCbG9iKSA9PT0gXCJbb2JqZWN0IEJsb2JDb25zdHJ1Y3Rvcl1cIik7XG5jb25zdCB3aXRoTmF0aXZlQXJyYXlCdWZmZXIgPSB0eXBlb2YgQXJyYXlCdWZmZXIgPT09IFwiZnVuY3Rpb25cIjtcblxuLy8gQXJyYXlCdWZmZXIuaXNWaWV3IG1ldGhvZCBpcyBub3QgZGVmaW5lZCBpbiBJRTEwXG5jb25zdCBpc1ZpZXcgPSBvYmogPT4ge1xuICByZXR1cm4gdHlwZW9mIEFycmF5QnVmZmVyLmlzVmlldyA9PT0gXCJmdW5jdGlvblwiXG4gICAgPyBBcnJheUJ1ZmZlci5pc1ZpZXcob2JqKVxuICAgIDogb2JqICYmIG9iai5idWZmZXIgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcjtcbn07XG5cbmNvbnN0IGVuY29kZVBhY2tldCA9ICh7IHR5cGUsIGRhdGEgfSwgc3VwcG9ydHNCaW5hcnksIGNhbGxiYWNrKSA9PiB7XG4gIGlmICh3aXRoTmF0aXZlQmxvYiAmJiBkYXRhIGluc3RhbmNlb2YgQmxvYikge1xuICAgIGlmIChzdXBwb3J0c0JpbmFyeSkge1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKGRhdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZW5jb2RlQmxvYkFzQmFzZTY0KGRhdGEsIGNhbGxiYWNrKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoXG4gICAgd2l0aE5hdGl2ZUFycmF5QnVmZmVyICYmXG4gICAgKGRhdGEgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlciB8fCBpc1ZpZXcoZGF0YSkpXG4gICkge1xuICAgIGlmIChzdXBwb3J0c0JpbmFyeSkge1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKGRhdGEgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlciA/IGRhdGEgOiBkYXRhLmJ1ZmZlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBlbmNvZGVCbG9iQXNCYXNlNjQobmV3IEJsb2IoW2RhdGFdKSwgY2FsbGJhY2spO1xuICAgIH1cbiAgfVxuICAvLyBwbGFpbiBzdHJpbmdcbiAgcmV0dXJuIGNhbGxiYWNrKFBBQ0tFVF9UWVBFU1t0eXBlXSArIChkYXRhIHx8IFwiXCIpKTtcbn07XG5cbmNvbnN0IGVuY29kZUJsb2JBc0Jhc2U2NCA9IChkYXRhLCBjYWxsYmFjaykgPT4ge1xuICBjb25zdCBmaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgZmlsZVJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZmlsZVJlYWRlci5yZXN1bHQuc3BsaXQoXCIsXCIpWzFdO1xuICAgIGNhbGxiYWNrKFwiYlwiICsgY29udGVudCk7XG4gIH07XG4gIHJldHVybiBmaWxlUmVhZGVyLnJlYWRBc0RhdGFVUkwoZGF0YSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGVuY29kZVBhY2tldDtcbiIsImNvbnN0IGVuY29kZVBhY2tldCA9IHJlcXVpcmUoXCIuL2VuY29kZVBhY2tldFwiKTtcbmNvbnN0IGRlY29kZVBhY2tldCA9IHJlcXVpcmUoXCIuL2RlY29kZVBhY2tldFwiKTtcblxuY29uc3QgU0VQQVJBVE9SID0gU3RyaW5nLmZyb21DaGFyQ29kZSgzMCk7IC8vIHNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9EZWxpbWl0ZXIjQVNDSUlfZGVsaW1pdGVkX3RleHRcblxuY29uc3QgZW5jb2RlUGF5bG9hZCA9IChwYWNrZXRzLCBjYWxsYmFjaykgPT4ge1xuICAvLyBzb21lIHBhY2tldHMgbWF5IGJlIGFkZGVkIHRvIHRoZSBhcnJheSB3aGlsZSBlbmNvZGluZywgc28gdGhlIGluaXRpYWwgbGVuZ3RoIG11c3QgYmUgc2F2ZWRcbiAgY29uc3QgbGVuZ3RoID0gcGFja2V0cy5sZW5ndGg7XG4gIGNvbnN0IGVuY29kZWRQYWNrZXRzID0gbmV3IEFycmF5KGxlbmd0aCk7XG4gIGxldCBjb3VudCA9IDA7XG5cbiAgcGFja2V0cy5mb3JFYWNoKChwYWNrZXQsIGkpID0+IHtcbiAgICAvLyBmb3JjZSBiYXNlNjQgZW5jb2RpbmcgZm9yIGJpbmFyeSBwYWNrZXRzXG4gICAgZW5jb2RlUGFja2V0KHBhY2tldCwgZmFsc2UsIGVuY29kZWRQYWNrZXQgPT4ge1xuICAgICAgZW5jb2RlZFBhY2tldHNbaV0gPSBlbmNvZGVkUGFja2V0O1xuICAgICAgaWYgKCsrY291bnQgPT09IGxlbmd0aCkge1xuICAgICAgICBjYWxsYmFjayhlbmNvZGVkUGFja2V0cy5qb2luKFNFUEFSQVRPUikpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn07XG5cbmNvbnN0IGRlY29kZVBheWxvYWQgPSAoZW5jb2RlZFBheWxvYWQsIGJpbmFyeVR5cGUpID0+IHtcbiAgY29uc3QgZW5jb2RlZFBhY2tldHMgPSBlbmNvZGVkUGF5bG9hZC5zcGxpdChTRVBBUkFUT1IpO1xuICBjb25zdCBwYWNrZXRzID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZW5jb2RlZFBhY2tldHMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBkZWNvZGVkUGFja2V0ID0gZGVjb2RlUGFja2V0KGVuY29kZWRQYWNrZXRzW2ldLCBiaW5hcnlUeXBlKTtcbiAgICBwYWNrZXRzLnB1c2goZGVjb2RlZFBhY2tldCk7XG4gICAgaWYgKGRlY29kZWRQYWNrZXQudHlwZSA9PT0gXCJlcnJvclwiKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHBhY2tldHM7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcHJvdG9jb2w6IDQsXG4gIGVuY29kZVBhY2tldCxcbiAgZW5jb2RlUGF5bG9hZCxcbiAgZGVjb2RlUGFja2V0LFxuICBkZWNvZGVQYXlsb2FkXG59O1xuIiwiXG4vKipcbiAqIE1vZHVsZSBleHBvcnRzLlxuICpcbiAqIExvZ2ljIGJvcnJvd2VkIGZyb20gTW9kZXJuaXpyOlxuICpcbiAqICAgLSBodHRwczovL2dpdGh1Yi5jb20vTW9kZXJuaXpyL01vZGVybml6ci9ibG9iL21hc3Rlci9mZWF0dXJlLWRldGVjdHMvY29ycy5qc1xuICovXG5cbnRyeSB7XG4gIG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIFhNTEh0dHBSZXF1ZXN0ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICd3aXRoQ3JlZGVudGlhbHMnIGluIG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xufSBjYXRjaCAoZXJyKSB7XG4gIC8vIGlmIFhNTEh0dHAgc3VwcG9ydCBpcyBkaXNhYmxlZCBpbiBJRSB0aGVuIGl0IHdpbGwgdGhyb3dcbiAgLy8gd2hlbiB0cnlpbmcgdG8gY3JlYXRlXG4gIG1vZHVsZS5leHBvcnRzID0gZmFsc2U7XG59XG4iLCIvKlxuICBodHRwczovL2dpdGh1Yi5jb20vYmFua3NlYW4gd3JhcHBlZCBNYWtvdG8gTWF0c3Vtb3RvIGFuZCBUYWt1amkgTmlzaGltdXJhJ3MgY29kZSBpbiBhIG5hbWVzcGFjZVxuICBzbyBpdCdzIGJldHRlciBlbmNhcHN1bGF0ZWQuIE5vdyB5b3UgY2FuIGhhdmUgbXVsdGlwbGUgcmFuZG9tIG51bWJlciBnZW5lcmF0b3JzXG4gIGFuZCB0aGV5IHdvbid0IHN0b21wIGFsbCBvdmVyIGVhY2hvdGhlcidzIHN0YXRlLlxuXG4gIElmIHlvdSB3YW50IHRvIHVzZSB0aGlzIGFzIGEgc3Vic3RpdHV0ZSBmb3IgTWF0aC5yYW5kb20oKSwgdXNlIHRoZSByYW5kb20oKVxuICBtZXRob2QgbGlrZSBzbzpcblxuICB2YXIgbSA9IG5ldyBNZXJzZW5uZVR3aXN0ZXIoKTtcbiAgdmFyIHJhbmRvbU51bWJlciA9IG0ucmFuZG9tKCk7XG5cbiAgWW91IGNhbiBhbHNvIGNhbGwgdGhlIG90aGVyIGdlbnJhbmRfe2Zvb30oKSBtZXRob2RzIG9uIHRoZSBpbnN0YW5jZS5cblxuICBJZiB5b3Ugd2FudCB0byB1c2UgYSBzcGVjaWZpYyBzZWVkIGluIG9yZGVyIHRvIGdldCBhIHJlcGVhdGFibGUgcmFuZG9tXG4gIHNlcXVlbmNlLCBwYXNzIGFuIGludGVnZXIgaW50byB0aGUgY29uc3RydWN0b3I6XG5cbiAgdmFyIG0gPSBuZXcgTWVyc2VubmVUd2lzdGVyKDEyMyk7XG5cbiAgYW5kIHRoYXQgd2lsbCBhbHdheXMgcHJvZHVjZSB0aGUgc2FtZSByYW5kb20gc2VxdWVuY2UuXG5cbiAgU2VhbiBNY0N1bGxvdWdoIChiYW5rc2VhbkBnbWFpbC5jb20pXG4qL1xuXG4vKlxuICAgQSBDLXByb2dyYW0gZm9yIE1UMTk5MzcsIHdpdGggaW5pdGlhbGl6YXRpb24gaW1wcm92ZWQgMjAwMi8xLzI2LlxuICAgQ29kZWQgYnkgVGFrdWppIE5pc2hpbXVyYSBhbmQgTWFrb3RvIE1hdHN1bW90by5cblxuICAgQmVmb3JlIHVzaW5nLCBpbml0aWFsaXplIHRoZSBzdGF0ZSBieSB1c2luZyBpbml0X3NlZWQoc2VlZClcbiAgIG9yIGluaXRfYnlfYXJyYXkoaW5pdF9rZXksIGtleV9sZW5ndGgpLlxuXG4gICBDb3B5cmlnaHQgKEMpIDE5OTcgLSAyMDAyLCBNYWtvdG8gTWF0c3Vtb3RvIGFuZCBUYWt1amkgTmlzaGltdXJhLFxuICAgQWxsIHJpZ2h0cyByZXNlcnZlZC5cblxuICAgUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0XG4gICBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnNcbiAgIGFyZSBtZXQ6XG5cbiAgICAgMS4gUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHRcbiAgICAgICAgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuXG4gICAgIDIuIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0XG4gICAgICAgIG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lciBpbiB0aGVcbiAgICAgICAgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlIGRpc3RyaWJ1dGlvbi5cblxuICAgICAzLiBUaGUgbmFtZXMgb2YgaXRzIGNvbnRyaWJ1dG9ycyBtYXkgbm90IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlXG4gICAgICAgIHByb2R1Y3RzIGRlcml2ZWQgZnJvbSB0aGlzIHNvZnR3YXJlIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlblxuICAgICAgICBwZXJtaXNzaW9uLlxuXG4gICBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTXG4gICBcIkFTIElTXCIgQU5EIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UXG4gICBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1JcbiAgIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELiAgSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVCBPV05FUiBPUlxuICAgQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsXG4gICBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sXG4gICBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSwgREFUQSwgT1JcbiAgIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWSBUSEVPUlkgT0ZcbiAgIExJQUJJTElUWSwgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HXG4gICBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GIFRISVNcbiAgIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuXG5cbiAgIEFueSBmZWVkYmFjayBpcyB2ZXJ5IHdlbGNvbWUuXG4gICBodHRwOi8vd3d3Lm1hdGguc2NpLmhpcm9zaGltYS11LmFjLmpwL35tLW1hdC9NVC9lbXQuaHRtbFxuICAgZW1haWw6IG0tbWF0IEAgbWF0aC5zY2kuaGlyb3NoaW1hLXUuYWMuanAgKHJlbW92ZSBzcGFjZSlcbiovXG5cbnZhciBNZXJzZW5uZVR3aXN0ZXIgPSBmdW5jdGlvbihzZWVkKSB7XG5cdGlmIChzZWVkID09IHVuZGVmaW5lZCkge1xuXHRcdHNlZWQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblx0fVxuXG5cdC8qIFBlcmlvZCBwYXJhbWV0ZXJzICovXG5cdHRoaXMuTiA9IDYyNDtcblx0dGhpcy5NID0gMzk3O1xuXHR0aGlzLk1BVFJJWF9BID0gMHg5OTA4YjBkZjsgICAvKiBjb25zdGFudCB2ZWN0b3IgYSAqL1xuXHR0aGlzLlVQUEVSX01BU0sgPSAweDgwMDAwMDAwOyAvKiBtb3N0IHNpZ25pZmljYW50IHctciBiaXRzICovXG5cdHRoaXMuTE9XRVJfTUFTSyA9IDB4N2ZmZmZmZmY7IC8qIGxlYXN0IHNpZ25pZmljYW50IHIgYml0cyAqL1xuXG5cdHRoaXMubXQgPSBuZXcgQXJyYXkodGhpcy5OKTsgLyogdGhlIGFycmF5IGZvciB0aGUgc3RhdGUgdmVjdG9yICovXG5cdHRoaXMubXRpPXRoaXMuTisxOyAvKiBtdGk9PU4rMSBtZWFucyBtdFtOXSBpcyBub3QgaW5pdGlhbGl6ZWQgKi9cblxuXHRpZiAoc2VlZC5jb25zdHJ1Y3RvciA9PSBBcnJheSkge1xuXHRcdHRoaXMuaW5pdF9ieV9hcnJheShzZWVkLCBzZWVkLmxlbmd0aCk7XG5cdH1cblx0ZWxzZSB7XG5cdFx0dGhpcy5pbml0X3NlZWQoc2VlZCk7XG5cdH1cbn1cblxuLyogaW5pdGlhbGl6ZXMgbXRbTl0gd2l0aCBhIHNlZWQgKi9cbi8qIG9yaWdpbiBuYW1lIGluaXRfZ2VucmFuZCAqL1xuTWVyc2VubmVUd2lzdGVyLnByb3RvdHlwZS5pbml0X3NlZWQgPSBmdW5jdGlvbihzKSB7XG5cdHRoaXMubXRbMF0gPSBzID4+PiAwO1xuXHRmb3IgKHRoaXMubXRpPTE7IHRoaXMubXRpPHRoaXMuTjsgdGhpcy5tdGkrKykge1xuXHRcdHZhciBzID0gdGhpcy5tdFt0aGlzLm10aS0xXSBeICh0aGlzLm10W3RoaXMubXRpLTFdID4+PiAzMCk7XG5cdFx0dGhpcy5tdFt0aGlzLm10aV0gPSAoKCgoKHMgJiAweGZmZmYwMDAwKSA+Pj4gMTYpICogMTgxMjQzMzI1MykgPDwgMTYpICsgKHMgJiAweDAwMDBmZmZmKSAqIDE4MTI0MzMyNTMpXG5cdFx0KyB0aGlzLm10aTtcblx0XHQvKiBTZWUgS251dGggVEFPQ1AgVm9sMi4gM3JkIEVkLiBQLjEwNiBmb3IgbXVsdGlwbGllci4gKi9cblx0XHQvKiBJbiB0aGUgcHJldmlvdXMgdmVyc2lvbnMsIE1TQnMgb2YgdGhlIHNlZWQgYWZmZWN0ICAgKi9cblx0XHQvKiBvbmx5IE1TQnMgb2YgdGhlIGFycmF5IG10W10uICAgICAgICAgICAgICAgICAgICAgICAgKi9cblx0XHQvKiAyMDAyLzAxLzA5IG1vZGlmaWVkIGJ5IE1ha290byBNYXRzdW1vdG8gICAgICAgICAgICAgKi9cblx0XHR0aGlzLm10W3RoaXMubXRpXSA+Pj49IDA7XG5cdFx0LyogZm9yID4zMiBiaXQgbWFjaGluZXMgKi9cblx0fVxufVxuXG4vKiBpbml0aWFsaXplIGJ5IGFuIGFycmF5IHdpdGggYXJyYXktbGVuZ3RoICovXG4vKiBpbml0X2tleSBpcyB0aGUgYXJyYXkgZm9yIGluaXRpYWxpemluZyBrZXlzICovXG4vKiBrZXlfbGVuZ3RoIGlzIGl0cyBsZW5ndGggKi9cbi8qIHNsaWdodCBjaGFuZ2UgZm9yIEMrKywgMjAwNC8yLzI2ICovXG5NZXJzZW5uZVR3aXN0ZXIucHJvdG90eXBlLmluaXRfYnlfYXJyYXkgPSBmdW5jdGlvbihpbml0X2tleSwga2V5X2xlbmd0aCkge1xuXHR2YXIgaSwgaiwgaztcblx0dGhpcy5pbml0X3NlZWQoMTk2NTAyMTgpO1xuXHRpPTE7IGo9MDtcblx0ayA9ICh0aGlzLk4+a2V5X2xlbmd0aCA/IHRoaXMuTiA6IGtleV9sZW5ndGgpO1xuXHRmb3IgKDsgazsgay0tKSB7XG5cdFx0dmFyIHMgPSB0aGlzLm10W2ktMV0gXiAodGhpcy5tdFtpLTFdID4+PiAzMClcblx0XHR0aGlzLm10W2ldID0gKHRoaXMubXRbaV0gXiAoKCgoKHMgJiAweGZmZmYwMDAwKSA+Pj4gMTYpICogMTY2NDUyNSkgPDwgMTYpICsgKChzICYgMHgwMDAwZmZmZikgKiAxNjY0NTI1KSkpXG5cdFx0KyBpbml0X2tleVtqXSArIGo7IC8qIG5vbiBsaW5lYXIgKi9cblx0XHR0aGlzLm10W2ldID4+Pj0gMDsgLyogZm9yIFdPUkRTSVpFID4gMzIgbWFjaGluZXMgKi9cblx0XHRpKys7IGorKztcblx0XHRpZiAoaT49dGhpcy5OKSB7IHRoaXMubXRbMF0gPSB0aGlzLm10W3RoaXMuTi0xXTsgaT0xOyB9XG5cdFx0aWYgKGo+PWtleV9sZW5ndGgpIGo9MDtcblx0fVxuXHRmb3IgKGs9dGhpcy5OLTE7IGs7IGstLSkge1xuXHRcdHZhciBzID0gdGhpcy5tdFtpLTFdIF4gKHRoaXMubXRbaS0xXSA+Pj4gMzApO1xuXHRcdHRoaXMubXRbaV0gPSAodGhpcy5tdFtpXSBeICgoKCgocyAmIDB4ZmZmZjAwMDApID4+PiAxNikgKiAxNTY2MDgzOTQxKSA8PCAxNikgKyAocyAmIDB4MDAwMGZmZmYpICogMTU2NjA4Mzk0MSkpXG5cdFx0LSBpOyAvKiBub24gbGluZWFyICovXG5cdFx0dGhpcy5tdFtpXSA+Pj49IDA7IC8qIGZvciBXT1JEU0laRSA+IDMyIG1hY2hpbmVzICovXG5cdFx0aSsrO1xuXHRcdGlmIChpPj10aGlzLk4pIHsgdGhpcy5tdFswXSA9IHRoaXMubXRbdGhpcy5OLTFdOyBpPTE7IH1cblx0fVxuXG5cdHRoaXMubXRbMF0gPSAweDgwMDAwMDAwOyAvKiBNU0IgaXMgMTsgYXNzdXJpbmcgbm9uLXplcm8gaW5pdGlhbCBhcnJheSAqL1xufVxuXG4vKiBnZW5lcmF0ZXMgYSByYW5kb20gbnVtYmVyIG9uIFswLDB4ZmZmZmZmZmZdLWludGVydmFsICovXG4vKiBvcmlnaW4gbmFtZSBnZW5yYW5kX2ludDMyICovXG5NZXJzZW5uZVR3aXN0ZXIucHJvdG90eXBlLnJhbmRvbV9pbnQgPSBmdW5jdGlvbigpIHtcblx0dmFyIHk7XG5cdHZhciBtYWcwMSA9IG5ldyBBcnJheSgweDAsIHRoaXMuTUFUUklYX0EpO1xuXHQvKiBtYWcwMVt4XSA9IHggKiBNQVRSSVhfQSAgZm9yIHg9MCwxICovXG5cblx0aWYgKHRoaXMubXRpID49IHRoaXMuTikgeyAvKiBnZW5lcmF0ZSBOIHdvcmRzIGF0IG9uZSB0aW1lICovXG5cdFx0dmFyIGtrO1xuXG5cdFx0aWYgKHRoaXMubXRpID09IHRoaXMuTisxKSAgLyogaWYgaW5pdF9zZWVkKCkgaGFzIG5vdCBiZWVuIGNhbGxlZCwgKi9cblx0XHRcdHRoaXMuaW5pdF9zZWVkKDU0ODkpOyAgLyogYSBkZWZhdWx0IGluaXRpYWwgc2VlZCBpcyB1c2VkICovXG5cblx0XHRmb3IgKGtrPTA7a2s8dGhpcy5OLXRoaXMuTTtraysrKSB7XG5cdFx0XHR5ID0gKHRoaXMubXRba2tdJnRoaXMuVVBQRVJfTUFTSyl8KHRoaXMubXRba2srMV0mdGhpcy5MT1dFUl9NQVNLKTtcblx0XHRcdHRoaXMubXRba2tdID0gdGhpcy5tdFtrayt0aGlzLk1dIF4gKHkgPj4+IDEpIF4gbWFnMDFbeSAmIDB4MV07XG5cdFx0fVxuXHRcdGZvciAoO2trPHRoaXMuTi0xO2trKyspIHtcblx0XHRcdHkgPSAodGhpcy5tdFtra10mdGhpcy5VUFBFUl9NQVNLKXwodGhpcy5tdFtraysxXSZ0aGlzLkxPV0VSX01BU0spO1xuXHRcdFx0dGhpcy5tdFtra10gPSB0aGlzLm10W2trKyh0aGlzLk0tdGhpcy5OKV0gXiAoeSA+Pj4gMSkgXiBtYWcwMVt5ICYgMHgxXTtcblx0XHR9XG5cdFx0eSA9ICh0aGlzLm10W3RoaXMuTi0xXSZ0aGlzLlVQUEVSX01BU0spfCh0aGlzLm10WzBdJnRoaXMuTE9XRVJfTUFTSyk7XG5cdFx0dGhpcy5tdFt0aGlzLk4tMV0gPSB0aGlzLm10W3RoaXMuTS0xXSBeICh5ID4+PiAxKSBeIG1hZzAxW3kgJiAweDFdO1xuXG5cdFx0dGhpcy5tdGkgPSAwO1xuXHR9XG5cblx0eSA9IHRoaXMubXRbdGhpcy5tdGkrK107XG5cblx0LyogVGVtcGVyaW5nICovXG5cdHkgXj0gKHkgPj4+IDExKTtcblx0eSBePSAoeSA8PCA3KSAmIDB4OWQyYzU2ODA7XG5cdHkgXj0gKHkgPDwgMTUpICYgMHhlZmM2MDAwMDtcblx0eSBePSAoeSA+Pj4gMTgpO1xuXG5cdHJldHVybiB5ID4+PiAwO1xufVxuXG4vKiBnZW5lcmF0ZXMgYSByYW5kb20gbnVtYmVyIG9uIFswLDB4N2ZmZmZmZmZdLWludGVydmFsICovXG4vKiBvcmlnaW4gbmFtZSBnZW5yYW5kX2ludDMxICovXG5NZXJzZW5uZVR3aXN0ZXIucHJvdG90eXBlLnJhbmRvbV9pbnQzMSA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gKHRoaXMucmFuZG9tX2ludCgpPj4+MSk7XG59XG5cbi8qIGdlbmVyYXRlcyBhIHJhbmRvbSBudW1iZXIgb24gWzAsMV0tcmVhbC1pbnRlcnZhbCAqL1xuLyogb3JpZ2luIG5hbWUgZ2VucmFuZF9yZWFsMSAqL1xuTWVyc2VubmVUd2lzdGVyLnByb3RvdHlwZS5yYW5kb21faW5jbCA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcy5yYW5kb21faW50KCkqKDEuMC80Mjk0OTY3Mjk1LjApO1xuXHQvKiBkaXZpZGVkIGJ5IDJeMzItMSAqL1xufVxuXG4vKiBnZW5lcmF0ZXMgYSByYW5kb20gbnVtYmVyIG9uIFswLDEpLXJlYWwtaW50ZXJ2YWwgKi9cbk1lcnNlbm5lVHdpc3Rlci5wcm90b3R5cGUucmFuZG9tID0gZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzLnJhbmRvbV9pbnQoKSooMS4wLzQyOTQ5NjcyOTYuMCk7XG5cdC8qIGRpdmlkZWQgYnkgMl4zMiAqL1xufVxuXG4vKiBnZW5lcmF0ZXMgYSByYW5kb20gbnVtYmVyIG9uICgwLDEpLXJlYWwtaW50ZXJ2YWwgKi9cbi8qIG9yaWdpbiBuYW1lIGdlbnJhbmRfcmVhbDMgKi9cbk1lcnNlbm5lVHdpc3Rlci5wcm90b3R5cGUucmFuZG9tX2V4Y2wgPSBmdW5jdGlvbigpIHtcblx0cmV0dXJuICh0aGlzLnJhbmRvbV9pbnQoKSArIDAuNSkqKDEuMC80Mjk0OTY3Mjk2LjApO1xuXHQvKiBkaXZpZGVkIGJ5IDJeMzIgKi9cbn1cblxuLyogZ2VuZXJhdGVzIGEgcmFuZG9tIG51bWJlciBvbiBbMCwxKSB3aXRoIDUzLWJpdCByZXNvbHV0aW9uKi9cbi8qIG9yaWdpbiBuYW1lIGdlbnJhbmRfcmVzNTMgKi9cbk1lcnNlbm5lVHdpc3Rlci5wcm90b3R5cGUucmFuZG9tX2xvbmcgPSBmdW5jdGlvbigpIHtcblx0dmFyIGE9dGhpcy5yYW5kb21faW50KCk+Pj41LCBiPXRoaXMucmFuZG9tX2ludCgpPj4+Njtcblx0cmV0dXJuKGEqNjcxMDg4NjQuMCtiKSooMS4wLzkwMDcxOTkyNTQ3NDA5OTIuMCk7XG59XG5cbi8qIFRoZXNlIHJlYWwgdmVyc2lvbnMgYXJlIGR1ZSB0byBJc2FrdSBXYWRhLCAyMDAyLzAxLzA5IGFkZGVkICovXG5cbm1vZHVsZS5leHBvcnRzID0gTWVyc2VubmVUd2lzdGVyO1xuIiwiLyoqXG4gKiBDb21waWxlcyBhIHF1ZXJ5c3RyaW5nXG4gKiBSZXR1cm5zIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgb2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5leHBvcnRzLmVuY29kZSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgdmFyIHN0ciA9ICcnO1xuXG4gIGZvciAodmFyIGkgaW4gb2JqKSB7XG4gICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgaWYgKHN0ci5sZW5ndGgpIHN0ciArPSAnJic7XG4gICAgICBzdHIgKz0gZW5jb2RlVVJJQ29tcG9uZW50KGkpICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG9ialtpXSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0cjtcbn07XG5cbi8qKlxuICogUGFyc2VzIGEgc2ltcGxlIHF1ZXJ5c3RyaW5nIGludG8gYW4gb2JqZWN0XG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHFzXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5leHBvcnRzLmRlY29kZSA9IGZ1bmN0aW9uKHFzKXtcbiAgdmFyIHFyeSA9IHt9O1xuICB2YXIgcGFpcnMgPSBxcy5zcGxpdCgnJicpO1xuICBmb3IgKHZhciBpID0gMCwgbCA9IHBhaXJzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIHZhciBwYWlyID0gcGFpcnNbaV0uc3BsaXQoJz0nKTtcbiAgICBxcnlbZGVjb2RlVVJJQ29tcG9uZW50KHBhaXJbMF0pXSA9IGRlY29kZVVSSUNvbXBvbmVudChwYWlyWzFdKTtcbiAgfVxuICByZXR1cm4gcXJ5O1xufTtcbiIsIi8qKlxuICogUGFyc2VzIGFuIFVSSVxuICpcbiAqIEBhdXRob3IgU3RldmVuIExldml0aGFuIDxzdGV2ZW5sZXZpdGhhbi5jb20+IChNSVQgbGljZW5zZSlcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbnZhciByZSA9IC9eKD86KD8hW146QF0rOlteOkBcXC9dKkApKGh0dHB8aHR0cHN8d3N8d3NzKTpcXC9cXC8pPygoPzooKFteOkBdKikoPzo6KFteOkBdKikpPyk/QCk/KCg/OlthLWYwLTldezAsNH06KXsyLDd9W2EtZjAtOV17MCw0fXxbXjpcXC8/I10qKSg/OjooXFxkKikpPykoKChcXC8oPzpbXj8jXSg/IVtePyNcXC9dKlxcLltePyNcXC8uXSsoPzpbPyNdfCQpKSkqXFwvPyk/KFtePyNcXC9dKikpKD86XFw/KFteI10qKSk/KD86IyguKikpPykvO1xuXG52YXIgcGFydHMgPSBbXG4gICAgJ3NvdXJjZScsICdwcm90b2NvbCcsICdhdXRob3JpdHknLCAndXNlckluZm8nLCAndXNlcicsICdwYXNzd29yZCcsICdob3N0JywgJ3BvcnQnLCAncmVsYXRpdmUnLCAncGF0aCcsICdkaXJlY3RvcnknLCAnZmlsZScsICdxdWVyeScsICdhbmNob3InXG5dO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHBhcnNldXJpKHN0cikge1xuICAgIHZhciBzcmMgPSBzdHIsXG4gICAgICAgIGIgPSBzdHIuaW5kZXhPZignWycpLFxuICAgICAgICBlID0gc3RyLmluZGV4T2YoJ10nKTtcblxuICAgIGlmIChiICE9IC0xICYmIGUgIT0gLTEpIHtcbiAgICAgICAgc3RyID0gc3RyLnN1YnN0cmluZygwLCBiKSArIHN0ci5zdWJzdHJpbmcoYiwgZSkucmVwbGFjZSgvOi9nLCAnOycpICsgc3RyLnN1YnN0cmluZyhlLCBzdHIubGVuZ3RoKTtcbiAgICB9XG5cbiAgICB2YXIgbSA9IHJlLmV4ZWMoc3RyIHx8ICcnKSxcbiAgICAgICAgdXJpID0ge30sXG4gICAgICAgIGkgPSAxNDtcblxuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgdXJpW3BhcnRzW2ldXSA9IG1baV0gfHwgJyc7XG4gICAgfVxuXG4gICAgaWYgKGIgIT0gLTEgJiYgZSAhPSAtMSkge1xuICAgICAgICB1cmkuc291cmNlID0gc3JjO1xuICAgICAgICB1cmkuaG9zdCA9IHVyaS5ob3N0LnN1YnN0cmluZygxLCB1cmkuaG9zdC5sZW5ndGggLSAxKS5yZXBsYWNlKC87L2csICc6Jyk7XG4gICAgICAgIHVyaS5hdXRob3JpdHkgPSB1cmkuYXV0aG9yaXR5LnJlcGxhY2UoJ1snLCAnJykucmVwbGFjZSgnXScsICcnKS5yZXBsYWNlKC87L2csICc6Jyk7XG4gICAgICAgIHVyaS5pcHY2dXJpID0gdHJ1ZTtcbiAgICB9XG5cbiAgICB1cmkucGF0aE5hbWVzID0gcGF0aE5hbWVzKHVyaSwgdXJpWydwYXRoJ10pO1xuICAgIHVyaS5xdWVyeUtleSA9IHF1ZXJ5S2V5KHVyaSwgdXJpWydxdWVyeSddKTtcblxuICAgIHJldHVybiB1cmk7XG59O1xuXG5mdW5jdGlvbiBwYXRoTmFtZXMob2JqLCBwYXRoKSB7XG4gICAgdmFyIHJlZ3ggPSAvXFwvezIsOX0vZyxcbiAgICAgICAgbmFtZXMgPSBwYXRoLnJlcGxhY2UocmVneCwgXCIvXCIpLnNwbGl0KFwiL1wiKTtcblxuICAgIGlmIChwYXRoLnN1YnN0cigwLCAxKSA9PSAnLycgfHwgcGF0aC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgbmFtZXMuc3BsaWNlKDAsIDEpO1xuICAgIH1cbiAgICBpZiAocGF0aC5zdWJzdHIocGF0aC5sZW5ndGggLSAxLCAxKSA9PSAnLycpIHtcbiAgICAgICAgbmFtZXMuc3BsaWNlKG5hbWVzLmxlbmd0aCAtIDEsIDEpO1xuICAgIH1cblxuICAgIHJldHVybiBuYW1lcztcbn1cblxuZnVuY3Rpb24gcXVlcnlLZXkodXJpLCBxdWVyeSkge1xuICAgIHZhciBkYXRhID0ge307XG5cbiAgICBxdWVyeS5yZXBsYWNlKC8oPzpefCYpKFteJj1dKik9PyhbXiZdKikvZywgZnVuY3Rpb24gKCQwLCAkMSwgJDIpIHtcbiAgICAgICAgaWYgKCQxKSB7XG4gICAgICAgICAgICBkYXRhWyQxXSA9ICQyO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZGF0YTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5pbyA9IGV4cG9ydHMuU29ja2V0ID0gZXhwb3J0cy5NYW5hZ2VyID0gZXhwb3J0cy5wcm90b2NvbCA9IHZvaWQgMDtcbmNvbnN0IHVybF8xID0gcmVxdWlyZShcIi4vdXJsXCIpO1xuY29uc3QgbWFuYWdlcl8xID0gcmVxdWlyZShcIi4vbWFuYWdlclwiKTtcbmNvbnN0IGRlYnVnID0gcmVxdWlyZShcImRlYnVnXCIpKFwic29ja2V0LmlvLWNsaWVudFwiKTtcbi8qKlxuICogTW9kdWxlIGV4cG9ydHMuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGxvb2t1cDtcbi8qKlxuICogTWFuYWdlcnMgY2FjaGUuXG4gKi9cbmNvbnN0IGNhY2hlID0gKGV4cG9ydHMubWFuYWdlcnMgPSB7fSk7XG5mdW5jdGlvbiBsb29rdXAodXJpLCBvcHRzKSB7XG4gICAgaWYgKHR5cGVvZiB1cmkgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgb3B0cyA9IHVyaTtcbiAgICAgICAgdXJpID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBvcHRzID0gb3B0cyB8fCB7fTtcbiAgICBjb25zdCBwYXJzZWQgPSB1cmxfMS51cmwodXJpLCBvcHRzLnBhdGggfHwgXCIvc29ja2V0LmlvXCIpO1xuICAgIGNvbnN0IHNvdXJjZSA9IHBhcnNlZC5zb3VyY2U7XG4gICAgY29uc3QgaWQgPSBwYXJzZWQuaWQ7XG4gICAgY29uc3QgcGF0aCA9IHBhcnNlZC5wYXRoO1xuICAgIGNvbnN0IHNhbWVOYW1lc3BhY2UgPSBjYWNoZVtpZF0gJiYgcGF0aCBpbiBjYWNoZVtpZF1bXCJuc3BzXCJdO1xuICAgIGNvbnN0IG5ld0Nvbm5lY3Rpb24gPSBvcHRzLmZvcmNlTmV3IHx8XG4gICAgICAgIG9wdHNbXCJmb3JjZSBuZXcgY29ubmVjdGlvblwiXSB8fFxuICAgICAgICBmYWxzZSA9PT0gb3B0cy5tdWx0aXBsZXggfHxcbiAgICAgICAgc2FtZU5hbWVzcGFjZTtcbiAgICBsZXQgaW87XG4gICAgaWYgKG5ld0Nvbm5lY3Rpb24pIHtcbiAgICAgICAgZGVidWcoXCJpZ25vcmluZyBzb2NrZXQgY2FjaGUgZm9yICVzXCIsIHNvdXJjZSk7XG4gICAgICAgIGlvID0gbmV3IG1hbmFnZXJfMS5NYW5hZ2VyKHNvdXJjZSwgb3B0cyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZiAoIWNhY2hlW2lkXSkge1xuICAgICAgICAgICAgZGVidWcoXCJuZXcgaW8gaW5zdGFuY2UgZm9yICVzXCIsIHNvdXJjZSk7XG4gICAgICAgICAgICBjYWNoZVtpZF0gPSBuZXcgbWFuYWdlcl8xLk1hbmFnZXIoc291cmNlLCBvcHRzKTtcbiAgICAgICAgfVxuICAgICAgICBpbyA9IGNhY2hlW2lkXTtcbiAgICB9XG4gICAgaWYgKHBhcnNlZC5xdWVyeSAmJiAhb3B0cy5xdWVyeSkge1xuICAgICAgICBvcHRzLnF1ZXJ5ID0gcGFyc2VkLnF1ZXJ5S2V5O1xuICAgIH1cbiAgICByZXR1cm4gaW8uc29ja2V0KHBhcnNlZC5wYXRoLCBvcHRzKTtcbn1cbmV4cG9ydHMuaW8gPSBsb29rdXA7XG4vKipcbiAqIFByb3RvY29sIHZlcnNpb24uXG4gKlxuICogQHB1YmxpY1xuICovXG52YXIgc29ja2V0X2lvX3BhcnNlcl8xID0gcmVxdWlyZShcInNvY2tldC5pby1wYXJzZXJcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJwcm90b2NvbFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc29ja2V0X2lvX3BhcnNlcl8xLnByb3RvY29sOyB9IH0pO1xuLyoqXG4gKiBgY29ubmVjdGAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHVyaVxuICogQHB1YmxpY1xuICovXG5leHBvcnRzLmNvbm5lY3QgPSBsb29rdXA7XG4vKipcbiAqIEV4cG9zZSBjb25zdHJ1Y3RvcnMgZm9yIHN0YW5kYWxvbmUgYnVpbGQuXG4gKlxuICogQHB1YmxpY1xuICovXG52YXIgbWFuYWdlcl8yID0gcmVxdWlyZShcIi4vbWFuYWdlclwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIk1hbmFnZXJcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG1hbmFnZXJfMi5NYW5hZ2VyOyB9IH0pO1xudmFyIHNvY2tldF8xID0gcmVxdWlyZShcIi4vc29ja2V0XCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiU29ja2V0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzb2NrZXRfMS5Tb2NrZXQ7IH0gfSk7XG5leHBvcnRzLmRlZmF1bHQgPSBsb29rdXA7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuTWFuYWdlciA9IHZvaWQgMDtcbmNvbnN0IGVpbyA9IHJlcXVpcmUoXCJlbmdpbmUuaW8tY2xpZW50XCIpO1xuY29uc3Qgc29ja2V0XzEgPSByZXF1aXJlKFwiLi9zb2NrZXRcIik7XG5jb25zdCBwYXJzZXIgPSByZXF1aXJlKFwic29ja2V0LmlvLXBhcnNlclwiKTtcbmNvbnN0IG9uXzEgPSByZXF1aXJlKFwiLi9vblwiKTtcbmNvbnN0IEJhY2tvZmYgPSByZXF1aXJlKFwiYmFja28yXCIpO1xuY29uc3QgdHlwZWRfZXZlbnRzXzEgPSByZXF1aXJlKFwiLi90eXBlZC1ldmVudHNcIik7XG5jb25zdCBkZWJ1ZyA9IHJlcXVpcmUoXCJkZWJ1Z1wiKShcInNvY2tldC5pby1jbGllbnQ6bWFuYWdlclwiKTtcbmNsYXNzIE1hbmFnZXIgZXh0ZW5kcyB0eXBlZF9ldmVudHNfMS5TdHJpY3RFdmVudEVtaXR0ZXIge1xuICAgIGNvbnN0cnVjdG9yKHVyaSwgb3B0cykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm5zcHMgPSB7fTtcbiAgICAgICAgdGhpcy5zdWJzID0gW107XG4gICAgICAgIGlmICh1cmkgJiYgXCJvYmplY3RcIiA9PT0gdHlwZW9mIHVyaSkge1xuICAgICAgICAgICAgb3B0cyA9IHVyaTtcbiAgICAgICAgICAgIHVyaSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBvcHRzID0gb3B0cyB8fCB7fTtcbiAgICAgICAgb3B0cy5wYXRoID0gb3B0cy5wYXRoIHx8IFwiL3NvY2tldC5pb1wiO1xuICAgICAgICB0aGlzLm9wdHMgPSBvcHRzO1xuICAgICAgICB0aGlzLnJlY29ubmVjdGlvbihvcHRzLnJlY29ubmVjdGlvbiAhPT0gZmFsc2UpO1xuICAgICAgICB0aGlzLnJlY29ubmVjdGlvbkF0dGVtcHRzKG9wdHMucmVjb25uZWN0aW9uQXR0ZW1wdHMgfHwgSW5maW5pdHkpO1xuICAgICAgICB0aGlzLnJlY29ubmVjdGlvbkRlbGF5KG9wdHMucmVjb25uZWN0aW9uRGVsYXkgfHwgMTAwMCk7XG4gICAgICAgIHRoaXMucmVjb25uZWN0aW9uRGVsYXlNYXgob3B0cy5yZWNvbm5lY3Rpb25EZWxheU1heCB8fCA1MDAwKTtcbiAgICAgICAgdGhpcy5yYW5kb21pemF0aW9uRmFjdG9yKG9wdHMucmFuZG9taXphdGlvbkZhY3RvciB8fCAwLjUpO1xuICAgICAgICB0aGlzLmJhY2tvZmYgPSBuZXcgQmFja29mZih7XG4gICAgICAgICAgICBtaW46IHRoaXMucmVjb25uZWN0aW9uRGVsYXkoKSxcbiAgICAgICAgICAgIG1heDogdGhpcy5yZWNvbm5lY3Rpb25EZWxheU1heCgpLFxuICAgICAgICAgICAgaml0dGVyOiB0aGlzLnJhbmRvbWl6YXRpb25GYWN0b3IoKSxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudGltZW91dChudWxsID09IG9wdHMudGltZW91dCA/IDIwMDAwIDogb3B0cy50aW1lb3V0KTtcbiAgICAgICAgdGhpcy5fcmVhZHlTdGF0ZSA9IFwiY2xvc2VkXCI7XG4gICAgICAgIHRoaXMudXJpID0gdXJpO1xuICAgICAgICBjb25zdCBfcGFyc2VyID0gb3B0cy5wYXJzZXIgfHwgcGFyc2VyO1xuICAgICAgICB0aGlzLmVuY29kZXIgPSBuZXcgX3BhcnNlci5FbmNvZGVyKCk7XG4gICAgICAgIHRoaXMuZGVjb2RlciA9IG5ldyBfcGFyc2VyLkRlY29kZXIoKTtcbiAgICAgICAgdGhpcy5fYXV0b0Nvbm5lY3QgPSBvcHRzLmF1dG9Db25uZWN0ICE9PSBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMuX2F1dG9Db25uZWN0KVxuICAgICAgICAgICAgdGhpcy5vcGVuKCk7XG4gICAgfVxuICAgIHJlY29ubmVjdGlvbih2KSB7XG4gICAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aClcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZWNvbm5lY3Rpb247XG4gICAgICAgIHRoaXMuX3JlY29ubmVjdGlvbiA9ICEhdjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHJlY29ubmVjdGlvbkF0dGVtcHRzKHYpIHtcbiAgICAgICAgaWYgKHYgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZWNvbm5lY3Rpb25BdHRlbXB0cztcbiAgICAgICAgdGhpcy5fcmVjb25uZWN0aW9uQXR0ZW1wdHMgPSB2O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgcmVjb25uZWN0aW9uRGVsYXkodikge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGlmICh2ID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVjb25uZWN0aW9uRGVsYXk7XG4gICAgICAgIHRoaXMuX3JlY29ubmVjdGlvbkRlbGF5ID0gdjtcbiAgICAgICAgKF9hID0gdGhpcy5iYWNrb2ZmKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc2V0TWluKHYpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgcmFuZG9taXphdGlvbkZhY3Rvcih2KSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgaWYgKHYgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yYW5kb21pemF0aW9uRmFjdG9yO1xuICAgICAgICB0aGlzLl9yYW5kb21pemF0aW9uRmFjdG9yID0gdjtcbiAgICAgICAgKF9hID0gdGhpcy5iYWNrb2ZmKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc2V0Sml0dGVyKHYpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgcmVjb25uZWN0aW9uRGVsYXlNYXgodikge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGlmICh2ID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVjb25uZWN0aW9uRGVsYXlNYXg7XG4gICAgICAgIHRoaXMuX3JlY29ubmVjdGlvbkRlbGF5TWF4ID0gdjtcbiAgICAgICAgKF9hID0gdGhpcy5iYWNrb2ZmKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc2V0TWF4KHYpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgdGltZW91dCh2KSB7XG4gICAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aClcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl90aW1lb3V0O1xuICAgICAgICB0aGlzLl90aW1lb3V0ID0gdjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFN0YXJ0cyB0cnlpbmcgdG8gcmVjb25uZWN0IGlmIHJlY29ubmVjdGlvbiBpcyBlbmFibGVkIGFuZCB3ZSBoYXZlIG5vdFxuICAgICAqIHN0YXJ0ZWQgcmVjb25uZWN0aW5nIHlldFxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBtYXliZVJlY29ubmVjdE9uT3BlbigpIHtcbiAgICAgICAgLy8gT25seSB0cnkgdG8gcmVjb25uZWN0IGlmIGl0J3MgdGhlIGZpcnN0IHRpbWUgd2UncmUgY29ubmVjdGluZ1xuICAgICAgICBpZiAoIXRoaXMuX3JlY29ubmVjdGluZyAmJlxuICAgICAgICAgICAgdGhpcy5fcmVjb25uZWN0aW9uICYmXG4gICAgICAgICAgICB0aGlzLmJhY2tvZmYuYXR0ZW1wdHMgPT09IDApIHtcbiAgICAgICAgICAgIC8vIGtlZXBzIHJlY29ubmVjdGlvbiBmcm9tIGZpcmluZyB0d2ljZSBmb3IgdGhlIHNhbWUgcmVjb25uZWN0aW9uIGxvb3BcbiAgICAgICAgICAgIHRoaXMucmVjb25uZWN0KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgY3VycmVudCB0cmFuc3BvcnQgYHNvY2tldGAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiAtIG9wdGlvbmFsLCBjYWxsYmFja1xuICAgICAqIEByZXR1cm4gc2VsZlxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBvcGVuKGZuKSB7XG4gICAgICAgIGRlYnVnKFwicmVhZHlTdGF0ZSAlc1wiLCB0aGlzLl9yZWFkeVN0YXRlKTtcbiAgICAgICAgaWYgKH50aGlzLl9yZWFkeVN0YXRlLmluZGV4T2YoXCJvcGVuXCIpKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIGRlYnVnKFwib3BlbmluZyAlc1wiLCB0aGlzLnVyaSk7XG4gICAgICAgIHRoaXMuZW5naW5lID0gZWlvKHRoaXMudXJpLCB0aGlzLm9wdHMpO1xuICAgICAgICBjb25zdCBzb2NrZXQgPSB0aGlzLmVuZ2luZTtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuX3JlYWR5U3RhdGUgPSBcIm9wZW5pbmdcIjtcbiAgICAgICAgdGhpcy5za2lwUmVjb25uZWN0ID0gZmFsc2U7XG4gICAgICAgIC8vIGVtaXQgYG9wZW5gXG4gICAgICAgIGNvbnN0IG9wZW5TdWJEZXN0cm95ID0gb25fMS5vbihzb2NrZXQsIFwib3BlblwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZWxmLm9ub3BlbigpO1xuICAgICAgICAgICAgZm4gJiYgZm4oKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIGVtaXQgYGVycm9yYFxuICAgICAgICBjb25zdCBlcnJvclN1YiA9IG9uXzEub24oc29ja2V0LCBcImVycm9yXCIsIChlcnIpID0+IHtcbiAgICAgICAgICAgIGRlYnVnKFwiZXJyb3JcIik7XG4gICAgICAgICAgICBzZWxmLmNsZWFudXAoKTtcbiAgICAgICAgICAgIHNlbGYuX3JlYWR5U3RhdGUgPSBcImNsb3NlZFwiO1xuICAgICAgICAgICAgdGhpcy5lbWl0UmVzZXJ2ZWQoXCJlcnJvclwiLCBlcnIpO1xuICAgICAgICAgICAgaWYgKGZuKSB7XG4gICAgICAgICAgICAgICAgZm4oZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIE9ubHkgZG8gdGhpcyBpZiB0aGVyZSBpcyBubyBmbiB0byBoYW5kbGUgdGhlIGVycm9yXG4gICAgICAgICAgICAgICAgc2VsZi5tYXliZVJlY29ubmVjdE9uT3BlbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGZhbHNlICE9PSB0aGlzLl90aW1lb3V0KSB7XG4gICAgICAgICAgICBjb25zdCB0aW1lb3V0ID0gdGhpcy5fdGltZW91dDtcbiAgICAgICAgICAgIGRlYnVnKFwiY29ubmVjdCBhdHRlbXB0IHdpbGwgdGltZW91dCBhZnRlciAlZFwiLCB0aW1lb3V0KTtcbiAgICAgICAgICAgIGlmICh0aW1lb3V0ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgb3BlblN1YkRlc3Ryb3koKTsgLy8gcHJldmVudHMgYSByYWNlIGNvbmRpdGlvbiB3aXRoIHRoZSAnb3BlbicgZXZlbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHNldCB0aW1lclxuICAgICAgICAgICAgY29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBkZWJ1ZyhcImNvbm5lY3QgYXR0ZW1wdCB0aW1lZCBvdXQgYWZ0ZXIgJWRcIiwgdGltZW91dCk7XG4gICAgICAgICAgICAgICAgb3BlblN1YkRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICBzb2NrZXQuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICBzb2NrZXQuZW1pdChcImVycm9yXCIsIG5ldyBFcnJvcihcInRpbWVvdXRcIikpO1xuICAgICAgICAgICAgfSwgdGltZW91dCk7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRzLmF1dG9VbnJlZikge1xuICAgICAgICAgICAgICAgIHRpbWVyLnVucmVmKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnN1YnMucHVzaChmdW5jdGlvbiBzdWJEZXN0cm95KCkge1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN1YnMucHVzaChvcGVuU3ViRGVzdHJveSk7XG4gICAgICAgIHRoaXMuc3Vicy5wdXNoKGVycm9yU3ViKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFsaWFzIGZvciBvcGVuKClcbiAgICAgKlxuICAgICAqIEByZXR1cm4gc2VsZlxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBjb25uZWN0KGZuKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wZW4oZm4pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgdXBvbiB0cmFuc3BvcnQgb3Blbi5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgb25vcGVuKCkge1xuICAgICAgICBkZWJ1ZyhcIm9wZW5cIik7XG4gICAgICAgIC8vIGNsZWFyIG9sZCBzdWJzXG4gICAgICAgIHRoaXMuY2xlYW51cCgpO1xuICAgICAgICAvLyBtYXJrIGFzIG9wZW5cbiAgICAgICAgdGhpcy5fcmVhZHlTdGF0ZSA9IFwib3BlblwiO1xuICAgICAgICB0aGlzLmVtaXRSZXNlcnZlZChcIm9wZW5cIik7XG4gICAgICAgIC8vIGFkZCBuZXcgc3Vic1xuICAgICAgICBjb25zdCBzb2NrZXQgPSB0aGlzLmVuZ2luZTtcbiAgICAgICAgdGhpcy5zdWJzLnB1c2gob25fMS5vbihzb2NrZXQsIFwicGluZ1wiLCB0aGlzLm9ucGluZy5iaW5kKHRoaXMpKSwgb25fMS5vbihzb2NrZXQsIFwiZGF0YVwiLCB0aGlzLm9uZGF0YS5iaW5kKHRoaXMpKSwgb25fMS5vbihzb2NrZXQsIFwiZXJyb3JcIiwgdGhpcy5vbmVycm9yLmJpbmQodGhpcykpLCBvbl8xLm9uKHNvY2tldCwgXCJjbG9zZVwiLCB0aGlzLm9uY2xvc2UuYmluZCh0aGlzKSksIG9uXzEub24odGhpcy5kZWNvZGVyLCBcImRlY29kZWRcIiwgdGhpcy5vbmRlY29kZWQuYmluZCh0aGlzKSkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgdXBvbiBhIHBpbmcuXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIG9ucGluZygpIHtcbiAgICAgICAgdGhpcy5lbWl0UmVzZXJ2ZWQoXCJwaW5nXCIpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgd2l0aCBkYXRhLlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBvbmRhdGEoZGF0YSkge1xuICAgICAgICB0aGlzLmRlY29kZXIuYWRkKGRhdGEpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgd2hlbiBwYXJzZXIgZnVsbHkgZGVjb2RlcyBhIHBhY2tldC5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgb25kZWNvZGVkKHBhY2tldCkge1xuICAgICAgICB0aGlzLmVtaXRSZXNlcnZlZChcInBhY2tldFwiLCBwYWNrZXQpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgdXBvbiBzb2NrZXQgZXJyb3IuXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIG9uZXJyb3IoZXJyKSB7XG4gICAgICAgIGRlYnVnKFwiZXJyb3JcIiwgZXJyKTtcbiAgICAgICAgdGhpcy5lbWl0UmVzZXJ2ZWQoXCJlcnJvclwiLCBlcnIpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IHNvY2tldCBmb3IgdGhlIGdpdmVuIGBuc3BgLlxuICAgICAqXG4gICAgICogQHJldHVybiB7U29ja2V0fVxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBzb2NrZXQobnNwLCBvcHRzKSB7XG4gICAgICAgIGxldCBzb2NrZXQgPSB0aGlzLm5zcHNbbnNwXTtcbiAgICAgICAgaWYgKCFzb2NrZXQpIHtcbiAgICAgICAgICAgIHNvY2tldCA9IG5ldyBzb2NrZXRfMS5Tb2NrZXQodGhpcywgbnNwLCBvcHRzKTtcbiAgICAgICAgICAgIHRoaXMubnNwc1tuc3BdID0gc29ja2V0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzb2NrZXQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxlZCB1cG9uIGEgc29ja2V0IGNsb3NlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHNvY2tldFxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX2Rlc3Ryb3koc29ja2V0KSB7XG4gICAgICAgIGNvbnN0IG5zcHMgPSBPYmplY3Qua2V5cyh0aGlzLm5zcHMpO1xuICAgICAgICBmb3IgKGNvbnN0IG5zcCBvZiBuc3BzKSB7XG4gICAgICAgICAgICBjb25zdCBzb2NrZXQgPSB0aGlzLm5zcHNbbnNwXTtcbiAgICAgICAgICAgIGlmIChzb2NrZXQuYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgZGVidWcoXCJzb2NrZXQgJXMgaXMgc3RpbGwgYWN0aXZlLCBza2lwcGluZyBjbG9zZVwiLCBuc3ApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9jbG9zZSgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBXcml0ZXMgYSBwYWNrZXQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcGFja2V0XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfcGFja2V0KHBhY2tldCkge1xuICAgICAgICBkZWJ1ZyhcIndyaXRpbmcgcGFja2V0ICVqXCIsIHBhY2tldCk7XG4gICAgICAgIGNvbnN0IGVuY29kZWRQYWNrZXRzID0gdGhpcy5lbmNvZGVyLmVuY29kZShwYWNrZXQpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVuY29kZWRQYWNrZXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmVuZ2luZS53cml0ZShlbmNvZGVkUGFja2V0c1tpXSwgcGFja2V0Lm9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENsZWFuIHVwIHRyYW5zcG9ydCBzdWJzY3JpcHRpb25zIGFuZCBwYWNrZXQgYnVmZmVyLlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBjbGVhbnVwKCkge1xuICAgICAgICBkZWJ1ZyhcImNsZWFudXBcIik7XG4gICAgICAgIHRoaXMuc3Vicy5mb3JFYWNoKChzdWJEZXN0cm95KSA9PiBzdWJEZXN0cm95KCkpO1xuICAgICAgICB0aGlzLnN1YnMubGVuZ3RoID0gMDtcbiAgICAgICAgdGhpcy5kZWNvZGVyLmRlc3Ryb3koKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2xvc2UgdGhlIGN1cnJlbnQgc29ja2V0LlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfY2xvc2UoKSB7XG4gICAgICAgIGRlYnVnKFwiZGlzY29ubmVjdFwiKTtcbiAgICAgICAgdGhpcy5za2lwUmVjb25uZWN0ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fcmVjb25uZWN0aW5nID0gZmFsc2U7XG4gICAgICAgIGlmIChcIm9wZW5pbmdcIiA9PT0gdGhpcy5fcmVhZHlTdGF0ZSkge1xuICAgICAgICAgICAgLy8gYG9uY2xvc2VgIHdpbGwgbm90IGZpcmUgYmVjYXVzZVxuICAgICAgICAgICAgLy8gYW4gb3BlbiBldmVudCBuZXZlciBoYXBwZW5lZFxuICAgICAgICAgICAgdGhpcy5jbGVhbnVwKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5iYWNrb2ZmLnJlc2V0KCk7XG4gICAgICAgIHRoaXMuX3JlYWR5U3RhdGUgPSBcImNsb3NlZFwiO1xuICAgICAgICBpZiAodGhpcy5lbmdpbmUpXG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5jbG9zZSgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBbGlhcyBmb3IgY2xvc2UoKVxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBkaXNjb25uZWN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2xvc2UoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHVwb24gZW5naW5lIGNsb3NlLlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBvbmNsb3NlKHJlYXNvbikge1xuICAgICAgICBkZWJ1ZyhcIm9uY2xvc2VcIik7XG4gICAgICAgIHRoaXMuY2xlYW51cCgpO1xuICAgICAgICB0aGlzLmJhY2tvZmYucmVzZXQoKTtcbiAgICAgICAgdGhpcy5fcmVhZHlTdGF0ZSA9IFwiY2xvc2VkXCI7XG4gICAgICAgIHRoaXMuZW1pdFJlc2VydmVkKFwiY2xvc2VcIiwgcmVhc29uKTtcbiAgICAgICAgaWYgKHRoaXMuX3JlY29ubmVjdGlvbiAmJiAhdGhpcy5za2lwUmVjb25uZWN0KSB7XG4gICAgICAgICAgICB0aGlzLnJlY29ubmVjdCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEF0dGVtcHQgYSByZWNvbm5lY3Rpb24uXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHJlY29ubmVjdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuX3JlY29ubmVjdGluZyB8fCB0aGlzLnNraXBSZWNvbm5lY3QpXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLmJhY2tvZmYuYXR0ZW1wdHMgPj0gdGhpcy5fcmVjb25uZWN0aW9uQXR0ZW1wdHMpIHtcbiAgICAgICAgICAgIGRlYnVnKFwicmVjb25uZWN0IGZhaWxlZFwiKTtcbiAgICAgICAgICAgIHRoaXMuYmFja29mZi5yZXNldCgpO1xuICAgICAgICAgICAgdGhpcy5lbWl0UmVzZXJ2ZWQoXCJyZWNvbm5lY3RfZmFpbGVkXCIpO1xuICAgICAgICAgICAgdGhpcy5fcmVjb25uZWN0aW5nID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBkZWxheSA9IHRoaXMuYmFja29mZi5kdXJhdGlvbigpO1xuICAgICAgICAgICAgZGVidWcoXCJ3aWxsIHdhaXQgJWRtcyBiZWZvcmUgcmVjb25uZWN0IGF0dGVtcHRcIiwgZGVsYXkpO1xuICAgICAgICAgICAgdGhpcy5fcmVjb25uZWN0aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGYuc2tpcFJlY29ubmVjdClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGRlYnVnKFwiYXR0ZW1wdGluZyByZWNvbm5lY3RcIik7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0UmVzZXJ2ZWQoXCJyZWNvbm5lY3RfYXR0ZW1wdFwiLCBzZWxmLmJhY2tvZmYuYXR0ZW1wdHMpO1xuICAgICAgICAgICAgICAgIC8vIGNoZWNrIGFnYWluIGZvciB0aGUgY2FzZSBzb2NrZXQgY2xvc2VkIGluIGFib3ZlIGV2ZW50c1xuICAgICAgICAgICAgICAgIGlmIChzZWxmLnNraXBSZWNvbm5lY3QpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICBzZWxmLm9wZW4oKGVycikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWJ1ZyhcInJlY29ubmVjdCBhdHRlbXB0IGVycm9yXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5fcmVjb25uZWN0aW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnJlY29ubmVjdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0UmVzZXJ2ZWQoXCJyZWNvbm5lY3RfZXJyb3JcIiwgZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlYnVnKFwicmVjb25uZWN0IHN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLm9ucmVjb25uZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sIGRlbGF5KTtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdHMuYXV0b1VucmVmKSB7XG4gICAgICAgICAgICAgICAgdGltZXIudW5yZWYoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc3Vicy5wdXNoKGZ1bmN0aW9uIHN1YkRlc3Ryb3koKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxlZCB1cG9uIHN1Y2Nlc3NmdWwgcmVjb25uZWN0LlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBvbnJlY29ubmVjdCgpIHtcbiAgICAgICAgY29uc3QgYXR0ZW1wdCA9IHRoaXMuYmFja29mZi5hdHRlbXB0cztcbiAgICAgICAgdGhpcy5fcmVjb25uZWN0aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYmFja29mZi5yZXNldCgpO1xuICAgICAgICB0aGlzLmVtaXRSZXNlcnZlZChcInJlY29ubmVjdFwiLCBhdHRlbXB0KTtcbiAgICB9XG59XG5leHBvcnRzLk1hbmFnZXIgPSBNYW5hZ2VyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLm9uID0gdm9pZCAwO1xuZnVuY3Rpb24gb24ob2JqLCBldiwgZm4pIHtcbiAgICBvYmoub24oZXYsIGZuKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gc3ViRGVzdHJveSgpIHtcbiAgICAgICAgb2JqLm9mZihldiwgZm4pO1xuICAgIH07XG59XG5leHBvcnRzLm9uID0gb247XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuU29ja2V0ID0gdm9pZCAwO1xuY29uc3Qgc29ja2V0X2lvX3BhcnNlcl8xID0gcmVxdWlyZShcInNvY2tldC5pby1wYXJzZXJcIik7XG5jb25zdCBvbl8xID0gcmVxdWlyZShcIi4vb25cIik7XG5jb25zdCB0eXBlZF9ldmVudHNfMSA9IHJlcXVpcmUoXCIuL3R5cGVkLWV2ZW50c1wiKTtcbmNvbnN0IGRlYnVnID0gcmVxdWlyZShcImRlYnVnXCIpKFwic29ja2V0LmlvLWNsaWVudDpzb2NrZXRcIik7XG4vKipcbiAqIEludGVybmFsIGV2ZW50cy5cbiAqIFRoZXNlIGV2ZW50cyBjYW4ndCBiZSBlbWl0dGVkIGJ5IHRoZSB1c2VyLlxuICovXG5jb25zdCBSRVNFUlZFRF9FVkVOVFMgPSBPYmplY3QuZnJlZXplKHtcbiAgICBjb25uZWN0OiAxLFxuICAgIGNvbm5lY3RfZXJyb3I6IDEsXG4gICAgZGlzY29ubmVjdDogMSxcbiAgICBkaXNjb25uZWN0aW5nOiAxLFxuICAgIC8vIEV2ZW50RW1pdHRlciByZXNlcnZlZCBldmVudHM6IGh0dHBzOi8vbm9kZWpzLm9yZy9hcGkvZXZlbnRzLmh0bWwjZXZlbnRzX2V2ZW50X25ld2xpc3RlbmVyXG4gICAgbmV3TGlzdGVuZXI6IDEsXG4gICAgcmVtb3ZlTGlzdGVuZXI6IDEsXG59KTtcbmNsYXNzIFNvY2tldCBleHRlbmRzIHR5cGVkX2V2ZW50c18xLlN0cmljdEV2ZW50RW1pdHRlciB7XG4gICAgLyoqXG4gICAgICogYFNvY2tldGAgY29uc3RydWN0b3IuXG4gICAgICpcbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoaW8sIG5zcCwgb3B0cykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnJlY2VpdmVCdWZmZXIgPSBbXTtcbiAgICAgICAgdGhpcy5zZW5kQnVmZmVyID0gW107XG4gICAgICAgIHRoaXMuaWRzID0gMDtcbiAgICAgICAgdGhpcy5hY2tzID0ge307XG4gICAgICAgIHRoaXMuZmxhZ3MgPSB7fTtcbiAgICAgICAgdGhpcy5pbyA9IGlvO1xuICAgICAgICB0aGlzLm5zcCA9IG5zcDtcbiAgICAgICAgdGhpcy5pZHMgPSAwO1xuICAgICAgICB0aGlzLmFja3MgPSB7fTtcbiAgICAgICAgdGhpcy5yZWNlaXZlQnVmZmVyID0gW107XG4gICAgICAgIHRoaXMuc2VuZEJ1ZmZlciA9IFtdO1xuICAgICAgICB0aGlzLmNvbm5lY3RlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmRpc2Nvbm5lY3RlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuZmxhZ3MgPSB7fTtcbiAgICAgICAgaWYgKG9wdHMgJiYgb3B0cy5hdXRoKSB7XG4gICAgICAgICAgICB0aGlzLmF1dGggPSBvcHRzLmF1dGg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaW8uX2F1dG9Db25uZWN0KVxuICAgICAgICAgICAgdGhpcy5vcGVuKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFN1YnNjcmliZSB0byBvcGVuLCBjbG9zZSBhbmQgcGFja2V0IGV2ZW50c1xuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBzdWJFdmVudHMoKSB7XG4gICAgICAgIGlmICh0aGlzLnN1YnMpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGNvbnN0IGlvID0gdGhpcy5pbztcbiAgICAgICAgdGhpcy5zdWJzID0gW1xuICAgICAgICAgICAgb25fMS5vbihpbywgXCJvcGVuXCIsIHRoaXMub25vcGVuLmJpbmQodGhpcykpLFxuICAgICAgICAgICAgb25fMS5vbihpbywgXCJwYWNrZXRcIiwgdGhpcy5vbnBhY2tldC5iaW5kKHRoaXMpKSxcbiAgICAgICAgICAgIG9uXzEub24oaW8sIFwiZXJyb3JcIiwgdGhpcy5vbmVycm9yLmJpbmQodGhpcykpLFxuICAgICAgICAgICAgb25fMS5vbihpbywgXCJjbG9zZVwiLCB0aGlzLm9uY2xvc2UuYmluZCh0aGlzKSksXG4gICAgICAgIF07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdGhlIFNvY2tldCB3aWxsIHRyeSB0byByZWNvbm5lY3Qgd2hlbiBpdHMgTWFuYWdlciBjb25uZWN0cyBvciByZWNvbm5lY3RzXG4gICAgICovXG4gICAgZ2V0IGFjdGl2ZSgpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5zdWJzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBcIk9wZW5zXCIgdGhlIHNvY2tldC5cbiAgICAgKlxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBjb25uZWN0KCkge1xuICAgICAgICBpZiAodGhpcy5jb25uZWN0ZWQpXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgdGhpcy5zdWJFdmVudHMoKTtcbiAgICAgICAgaWYgKCF0aGlzLmlvW1wiX3JlY29ubmVjdGluZ1wiXSlcbiAgICAgICAgICAgIHRoaXMuaW8ub3BlbigpOyAvLyBlbnN1cmUgb3BlblxuICAgICAgICBpZiAoXCJvcGVuXCIgPT09IHRoaXMuaW8uX3JlYWR5U3RhdGUpXG4gICAgICAgICAgICB0aGlzLm9ub3BlbigpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWxpYXMgZm9yIGNvbm5lY3QoKVxuICAgICAqL1xuICAgIG9wZW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbm5lY3QoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2VuZHMgYSBgbWVzc2FnZWAgZXZlbnQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHNlbGZcbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgc2VuZCguLi5hcmdzKSB7XG4gICAgICAgIGFyZ3MudW5zaGlmdChcIm1lc3NhZ2VcIik7XG4gICAgICAgIHRoaXMuZW1pdC5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRlIGBlbWl0YC5cbiAgICAgKiBJZiB0aGUgZXZlbnQgaXMgaW4gYGV2ZW50c2AsIGl0J3MgZW1pdHRlZCBub3JtYWxseS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4gc2VsZlxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBlbWl0KGV2LCAuLi5hcmdzKSB7XG4gICAgICAgIGlmIChSRVNFUlZFRF9FVkVOVFMuaGFzT3duUHJvcGVydHkoZXYpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1wiJyArIGV2ICsgJ1wiIGlzIGEgcmVzZXJ2ZWQgZXZlbnQgbmFtZScpO1xuICAgICAgICB9XG4gICAgICAgIGFyZ3MudW5zaGlmdChldik7XG4gICAgICAgIGNvbnN0IHBhY2tldCA9IHtcbiAgICAgICAgICAgIHR5cGU6IHNvY2tldF9pb19wYXJzZXJfMS5QYWNrZXRUeXBlLkVWRU5ULFxuICAgICAgICAgICAgZGF0YTogYXJncyxcbiAgICAgICAgfTtcbiAgICAgICAgcGFja2V0Lm9wdGlvbnMgPSB7fTtcbiAgICAgICAgcGFja2V0Lm9wdGlvbnMuY29tcHJlc3MgPSB0aGlzLmZsYWdzLmNvbXByZXNzICE9PSBmYWxzZTtcbiAgICAgICAgLy8gZXZlbnQgYWNrIGNhbGxiYWNrXG4gICAgICAgIGlmIChcImZ1bmN0aW9uXCIgPT09IHR5cGVvZiBhcmdzW2FyZ3MubGVuZ3RoIC0gMV0pIHtcbiAgICAgICAgICAgIGRlYnVnKFwiZW1pdHRpbmcgcGFja2V0IHdpdGggYWNrIGlkICVkXCIsIHRoaXMuaWRzKTtcbiAgICAgICAgICAgIHRoaXMuYWNrc1t0aGlzLmlkc10gPSBhcmdzLnBvcCgpO1xuICAgICAgICAgICAgcGFja2V0LmlkID0gdGhpcy5pZHMrKztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpc1RyYW5zcG9ydFdyaXRhYmxlID0gdGhpcy5pby5lbmdpbmUgJiZcbiAgICAgICAgICAgIHRoaXMuaW8uZW5naW5lLnRyYW5zcG9ydCAmJlxuICAgICAgICAgICAgdGhpcy5pby5lbmdpbmUudHJhbnNwb3J0LndyaXRhYmxlO1xuICAgICAgICBjb25zdCBkaXNjYXJkUGFja2V0ID0gdGhpcy5mbGFncy52b2xhdGlsZSAmJiAoIWlzVHJhbnNwb3J0V3JpdGFibGUgfHwgIXRoaXMuY29ubmVjdGVkKTtcbiAgICAgICAgaWYgKGRpc2NhcmRQYWNrZXQpIHtcbiAgICAgICAgICAgIGRlYnVnKFwiZGlzY2FyZCBwYWNrZXQgYXMgdGhlIHRyYW5zcG9ydCBpcyBub3QgY3VycmVudGx5IHdyaXRhYmxlXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuY29ubmVjdGVkKSB7XG4gICAgICAgICAgICB0aGlzLnBhY2tldChwYWNrZXQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZW5kQnVmZmVyLnB1c2gocGFja2V0KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZsYWdzID0ge307XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZW5kcyBhIHBhY2tldC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBwYWNrZXRcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHBhY2tldChwYWNrZXQpIHtcbiAgICAgICAgcGFja2V0Lm5zcCA9IHRoaXMubnNwO1xuICAgICAgICB0aGlzLmlvLl9wYWNrZXQocGFja2V0KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHVwb24gZW5naW5lIGBvcGVuYC5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgb25vcGVuKCkge1xuICAgICAgICBkZWJ1ZyhcInRyYW5zcG9ydCBpcyBvcGVuIC0gY29ubmVjdGluZ1wiKTtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmF1dGggPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICB0aGlzLmF1dGgoKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhY2tldCh7IHR5cGU6IHNvY2tldF9pb19wYXJzZXJfMS5QYWNrZXRUeXBlLkNPTk5FQ1QsIGRhdGEgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucGFja2V0KHsgdHlwZTogc29ja2V0X2lvX3BhcnNlcl8xLlBhY2tldFR5cGUuQ09OTkVDVCwgZGF0YTogdGhpcy5hdXRoIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxlZCB1cG9uIGVuZ2luZSBvciBtYW5hZ2VyIGBlcnJvcmAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZXJyXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBvbmVycm9yKGVycikge1xuICAgICAgICBpZiAoIXRoaXMuY29ubmVjdGVkKSB7XG4gICAgICAgICAgICB0aGlzLmVtaXRSZXNlcnZlZChcImNvbm5lY3RfZXJyb3JcIiwgZXJyKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgdXBvbiBlbmdpbmUgYGNsb3NlYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSByZWFzb25cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIG9uY2xvc2UocmVhc29uKSB7XG4gICAgICAgIGRlYnVnKFwiY2xvc2UgKCVzKVwiLCByZWFzb24pO1xuICAgICAgICB0aGlzLmNvbm5lY3RlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmRpc2Nvbm5lY3RlZCA9IHRydWU7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmlkO1xuICAgICAgICB0aGlzLmVtaXRSZXNlcnZlZChcImRpc2Nvbm5lY3RcIiwgcmVhc29uKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHdpdGggc29ja2V0IHBhY2tldC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBwYWNrZXRcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIG9ucGFja2V0KHBhY2tldCkge1xuICAgICAgICBjb25zdCBzYW1lTmFtZXNwYWNlID0gcGFja2V0Lm5zcCA9PT0gdGhpcy5uc3A7XG4gICAgICAgIGlmICghc2FtZU5hbWVzcGFjZSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgc3dpdGNoIChwYWNrZXQudHlwZSkge1xuICAgICAgICAgICAgY2FzZSBzb2NrZXRfaW9fcGFyc2VyXzEuUGFja2V0VHlwZS5DT05ORUNUOlxuICAgICAgICAgICAgICAgIGlmIChwYWNrZXQuZGF0YSAmJiBwYWNrZXQuZGF0YS5zaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaWQgPSBwYWNrZXQuZGF0YS5zaWQ7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25jb25uZWN0KGlkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdFJlc2VydmVkKFwiY29ubmVjdF9lcnJvclwiLCBuZXcgRXJyb3IoXCJJdCBzZWVtcyB5b3UgYXJlIHRyeWluZyB0byByZWFjaCBhIFNvY2tldC5JTyBzZXJ2ZXIgaW4gdjIueCB3aXRoIGEgdjMueCBjbGllbnQsIGJ1dCB0aGV5IGFyZSBub3QgY29tcGF0aWJsZSAobW9yZSBpbmZvcm1hdGlvbiBoZXJlOiBodHRwczovL3NvY2tldC5pby9kb2NzL3YzL21pZ3JhdGluZy1mcm9tLTIteC10by0zLTAvKVwiKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBzb2NrZXRfaW9fcGFyc2VyXzEuUGFja2V0VHlwZS5FVkVOVDpcbiAgICAgICAgICAgICAgICB0aGlzLm9uZXZlbnQocGFja2V0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2Ugc29ja2V0X2lvX3BhcnNlcl8xLlBhY2tldFR5cGUuQklOQVJZX0VWRU5UOlxuICAgICAgICAgICAgICAgIHRoaXMub25ldmVudChwYWNrZXQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBzb2NrZXRfaW9fcGFyc2VyXzEuUGFja2V0VHlwZS5BQ0s6XG4gICAgICAgICAgICAgICAgdGhpcy5vbmFjayhwYWNrZXQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBzb2NrZXRfaW9fcGFyc2VyXzEuUGFja2V0VHlwZS5CSU5BUllfQUNLOlxuICAgICAgICAgICAgICAgIHRoaXMub25hY2socGFja2V0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2Ugc29ja2V0X2lvX3BhcnNlcl8xLlBhY2tldFR5cGUuRElTQ09OTkVDVDpcbiAgICAgICAgICAgICAgICB0aGlzLm9uZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBzb2NrZXRfaW9fcGFyc2VyXzEuUGFja2V0VHlwZS5DT05ORUNUX0VSUk9SOlxuICAgICAgICAgICAgICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcihwYWNrZXQuZGF0YS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgZXJyLmRhdGEgPSBwYWNrZXQuZGF0YS5kYXRhO1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdFJlc2VydmVkKFwiY29ubmVjdF9lcnJvclwiLCBlcnIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxlZCB1cG9uIGEgc2VydmVyIGV2ZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIHBhY2tldFxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgb25ldmVudChwYWNrZXQpIHtcbiAgICAgICAgY29uc3QgYXJncyA9IHBhY2tldC5kYXRhIHx8IFtdO1xuICAgICAgICBkZWJ1ZyhcImVtaXR0aW5nIGV2ZW50ICVqXCIsIGFyZ3MpO1xuICAgICAgICBpZiAobnVsbCAhPSBwYWNrZXQuaWQpIHtcbiAgICAgICAgICAgIGRlYnVnKFwiYXR0YWNoaW5nIGFjayBjYWxsYmFjayB0byBldmVudFwiKTtcbiAgICAgICAgICAgIGFyZ3MucHVzaCh0aGlzLmFjayhwYWNrZXQuaWQpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jb25uZWN0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZW1pdEV2ZW50KGFyZ3MpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yZWNlaXZlQnVmZmVyLnB1c2goT2JqZWN0LmZyZWV6ZShhcmdzKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZW1pdEV2ZW50KGFyZ3MpIHtcbiAgICAgICAgaWYgKHRoaXMuX2FueUxpc3RlbmVycyAmJiB0aGlzLl9hbnlMaXN0ZW5lcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBsaXN0ZW5lcnMgPSB0aGlzLl9hbnlMaXN0ZW5lcnMuc2xpY2UoKTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgbGlzdGVuZXIgb2YgbGlzdGVuZXJzKSB7XG4gICAgICAgICAgICAgICAgbGlzdGVuZXIuYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc3VwZXIuZW1pdC5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUHJvZHVjZXMgYW4gYWNrIGNhbGxiYWNrIHRvIGVtaXQgd2l0aCBhbiBldmVudC5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgYWNrKGlkKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBsZXQgc2VudCA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICAgICAgICAgIC8vIHByZXZlbnQgZG91YmxlIGNhbGxiYWNrc1xuICAgICAgICAgICAgaWYgKHNlbnQpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgc2VudCA9IHRydWU7XG4gICAgICAgICAgICBkZWJ1ZyhcInNlbmRpbmcgYWNrICVqXCIsIGFyZ3MpO1xuICAgICAgICAgICAgc2VsZi5wYWNrZXQoe1xuICAgICAgICAgICAgICAgIHR5cGU6IHNvY2tldF9pb19wYXJzZXJfMS5QYWNrZXRUeXBlLkFDSyxcbiAgICAgICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICAgICAgZGF0YTogYXJncyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgdXBvbiBhIHNlcnZlciBhY2tub3dsZWdlbWVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBwYWNrZXRcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIG9uYWNrKHBhY2tldCkge1xuICAgICAgICBjb25zdCBhY2sgPSB0aGlzLmFja3NbcGFja2V0LmlkXTtcbiAgICAgICAgaWYgKFwiZnVuY3Rpb25cIiA9PT0gdHlwZW9mIGFjaykge1xuICAgICAgICAgICAgZGVidWcoXCJjYWxsaW5nIGFjayAlcyB3aXRoICVqXCIsIHBhY2tldC5pZCwgcGFja2V0LmRhdGEpO1xuICAgICAgICAgICAgYWNrLmFwcGx5KHRoaXMsIHBhY2tldC5kYXRhKTtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmFja3NbcGFja2V0LmlkXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRlYnVnKFwiYmFkIGFjayAlc1wiLCBwYWNrZXQuaWQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxlZCB1cG9uIHNlcnZlciBjb25uZWN0LlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBvbmNvbm5lY3QoaWQpIHtcbiAgICAgICAgZGVidWcoXCJzb2NrZXQgY29ubmVjdGVkIHdpdGggaWQgJXNcIiwgaWQpO1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMuY29ubmVjdGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5kaXNjb25uZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5lbWl0QnVmZmVyZWQoKTtcbiAgICAgICAgdGhpcy5lbWl0UmVzZXJ2ZWQoXCJjb25uZWN0XCIpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBFbWl0IGJ1ZmZlcmVkIGV2ZW50cyAocmVjZWl2ZWQgYW5kIGVtaXR0ZWQpLlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBlbWl0QnVmZmVyZWQoKSB7XG4gICAgICAgIHRoaXMucmVjZWl2ZUJ1ZmZlci5mb3JFYWNoKChhcmdzKSA9PiB0aGlzLmVtaXRFdmVudChhcmdzKSk7XG4gICAgICAgIHRoaXMucmVjZWl2ZUJ1ZmZlciA9IFtdO1xuICAgICAgICB0aGlzLnNlbmRCdWZmZXIuZm9yRWFjaCgocGFja2V0KSA9PiB0aGlzLnBhY2tldChwYWNrZXQpKTtcbiAgICAgICAgdGhpcy5zZW5kQnVmZmVyID0gW107XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxlZCB1cG9uIHNlcnZlciBkaXNjb25uZWN0LlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBvbmRpc2Nvbm5lY3QoKSB7XG4gICAgICAgIGRlYnVnKFwic2VydmVyIGRpc2Nvbm5lY3QgKCVzKVwiLCB0aGlzLm5zcCk7XG4gICAgICAgIHRoaXMuZGVzdHJveSgpO1xuICAgICAgICB0aGlzLm9uY2xvc2UoXCJpbyBzZXJ2ZXIgZGlzY29ubmVjdFwiKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHVwb24gZm9yY2VkIGNsaWVudC9zZXJ2ZXIgc2lkZSBkaXNjb25uZWN0aW9ucyxcbiAgICAgKiB0aGlzIG1ldGhvZCBlbnN1cmVzIHRoZSBtYW5hZ2VyIHN0b3BzIHRyYWNraW5nIHVzIGFuZFxuICAgICAqIHRoYXQgcmVjb25uZWN0aW9ucyBkb24ndCBnZXQgdHJpZ2dlcmVkIGZvciB0aGlzLlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBkZXN0cm95KCkge1xuICAgICAgICBpZiAodGhpcy5zdWJzKSB7XG4gICAgICAgICAgICAvLyBjbGVhbiBzdWJzY3JpcHRpb25zIHRvIGF2b2lkIHJlY29ubmVjdGlvbnNcbiAgICAgICAgICAgIHRoaXMuc3Vicy5mb3JFYWNoKChzdWJEZXN0cm95KSA9PiBzdWJEZXN0cm95KCkpO1xuICAgICAgICAgICAgdGhpcy5zdWJzID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW9bXCJfZGVzdHJveVwiXSh0aGlzKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRGlzY29ubmVjdHMgdGhlIHNvY2tldCBtYW51YWxseS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4gc2VsZlxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBkaXNjb25uZWN0KCkge1xuICAgICAgICBpZiAodGhpcy5jb25uZWN0ZWQpIHtcbiAgICAgICAgICAgIGRlYnVnKFwicGVyZm9ybWluZyBkaXNjb25uZWN0ICglcylcIiwgdGhpcy5uc3ApO1xuICAgICAgICAgICAgdGhpcy5wYWNrZXQoeyB0eXBlOiBzb2NrZXRfaW9fcGFyc2VyXzEuUGFja2V0VHlwZS5ESVNDT05ORUNUIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIHJlbW92ZSBzb2NrZXQgZnJvbSBwb29sXG4gICAgICAgIHRoaXMuZGVzdHJveSgpO1xuICAgICAgICBpZiAodGhpcy5jb25uZWN0ZWQpIHtcbiAgICAgICAgICAgIC8vIGZpcmUgZXZlbnRzXG4gICAgICAgICAgICB0aGlzLm9uY2xvc2UoXCJpbyBjbGllbnQgZGlzY29ubmVjdFwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWxpYXMgZm9yIGRpc2Nvbm5lY3QoKVxuICAgICAqXG4gICAgICogQHJldHVybiBzZWxmXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIGNsb3NlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kaXNjb25uZWN0KCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGNvbXByZXNzIGZsYWcuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY29tcHJlc3MgLSBpZiBgdHJ1ZWAsIGNvbXByZXNzZXMgdGhlIHNlbmRpbmcgZGF0YVxuICAgICAqIEByZXR1cm4gc2VsZlxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBjb21wcmVzcyhjb21wcmVzcykge1xuICAgICAgICB0aGlzLmZsYWdzLmNvbXByZXNzID0gY29tcHJlc3M7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIGEgbW9kaWZpZXIgZm9yIGEgc3Vic2VxdWVudCBldmVudCBlbWlzc2lvbiB0aGF0IHRoZSBldmVudCBtZXNzYWdlIHdpbGwgYmUgZHJvcHBlZCB3aGVuIHRoaXMgc29ja2V0IGlzIG5vdFxuICAgICAqIHJlYWR5IHRvIHNlbmQgbWVzc2FnZXMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBzZWxmXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIGdldCB2b2xhdGlsZSgpIHtcbiAgICAgICAgdGhpcy5mbGFncy52b2xhdGlsZSA9IHRydWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGRzIGEgbGlzdGVuZXIgdGhhdCB3aWxsIGJlIGZpcmVkIHdoZW4gYW55IGV2ZW50IGlzIGVtaXR0ZWQuIFRoZSBldmVudCBuYW1lIGlzIHBhc3NlZCBhcyB0aGUgZmlyc3QgYXJndW1lbnQgdG8gdGhlXG4gICAgICogY2FsbGJhY2suXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbGlzdGVuZXJcbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgb25BbnkobGlzdGVuZXIpIHtcbiAgICAgICAgdGhpcy5fYW55TGlzdGVuZXJzID0gdGhpcy5fYW55TGlzdGVuZXJzIHx8IFtdO1xuICAgICAgICB0aGlzLl9hbnlMaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGRzIGEgbGlzdGVuZXIgdGhhdCB3aWxsIGJlIGZpcmVkIHdoZW4gYW55IGV2ZW50IGlzIGVtaXR0ZWQuIFRoZSBldmVudCBuYW1lIGlzIHBhc3NlZCBhcyB0aGUgZmlyc3QgYXJndW1lbnQgdG8gdGhlXG4gICAgICogY2FsbGJhY2suIFRoZSBsaXN0ZW5lciBpcyBhZGRlZCB0byB0aGUgYmVnaW5uaW5nIG9mIHRoZSBsaXN0ZW5lcnMgYXJyYXkuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbGlzdGVuZXJcbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgcHJlcGVuZEFueShsaXN0ZW5lcikge1xuICAgICAgICB0aGlzLl9hbnlMaXN0ZW5lcnMgPSB0aGlzLl9hbnlMaXN0ZW5lcnMgfHwgW107XG4gICAgICAgIHRoaXMuX2FueUxpc3RlbmVycy51bnNoaWZ0KGxpc3RlbmVyKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgdGhlIGxpc3RlbmVyIHRoYXQgd2lsbCBiZSBmaXJlZCB3aGVuIGFueSBldmVudCBpcyBlbWl0dGVkLlxuICAgICAqXG4gICAgICogQHBhcmFtIGxpc3RlbmVyXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIG9mZkFueShsaXN0ZW5lcikge1xuICAgICAgICBpZiAoIXRoaXMuX2FueUxpc3RlbmVycykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxpc3RlbmVyKSB7XG4gICAgICAgICAgICBjb25zdCBsaXN0ZW5lcnMgPSB0aGlzLl9hbnlMaXN0ZW5lcnM7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChsaXN0ZW5lciA9PT0gbGlzdGVuZXJzW2ldKSB7XG4gICAgICAgICAgICAgICAgICAgIGxpc3RlbmVycy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2FueUxpc3RlbmVycyA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIGxpc3RlbmVycyB0aGF0IGFyZSBsaXN0ZW5pbmcgZm9yIGFueSBldmVudCB0aGF0IGlzIHNwZWNpZmllZC4gVGhpcyBhcnJheSBjYW4gYmUgbWFuaXB1bGF0ZWQsXG4gICAgICogZS5nLiB0byByZW1vdmUgbGlzdGVuZXJzLlxuICAgICAqXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIGxpc3RlbmVyc0FueSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FueUxpc3RlbmVycyB8fCBbXTtcbiAgICB9XG59XG5leHBvcnRzLlNvY2tldCA9IFNvY2tldDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5TdHJpY3RFdmVudEVtaXR0ZXIgPSB2b2lkIDA7XG5jb25zdCBFbWl0dGVyID0gcmVxdWlyZShcImNvbXBvbmVudC1lbWl0dGVyXCIpO1xuLyoqXG4gKiBTdHJpY3RseSB0eXBlZCB2ZXJzaW9uIG9mIGFuIGBFdmVudEVtaXR0ZXJgLiBBIGBUeXBlZEV2ZW50RW1pdHRlcmAgdGFrZXMgdHlwZVxuICogcGFyYW1ldGVycyBmb3IgbWFwcGluZ3Mgb2YgZXZlbnQgbmFtZXMgdG8gZXZlbnQgZGF0YSB0eXBlcywgYW5kIHN0cmljdGx5XG4gKiB0eXBlcyBtZXRob2QgY2FsbHMgdG8gdGhlIGBFdmVudEVtaXR0ZXJgIGFjY29yZGluZyB0byB0aGVzZSBldmVudCBtYXBzLlxuICpcbiAqIEB0eXBlUGFyYW0gTGlzdGVuRXZlbnRzIC0gYEV2ZW50c01hcGAgb2YgdXNlci1kZWZpbmVkIGV2ZW50cyB0aGF0IGNhbiBiZVxuICogbGlzdGVuZWQgdG8gd2l0aCBgb25gIG9yIGBvbmNlYFxuICogQHR5cGVQYXJhbSBFbWl0RXZlbnRzIC0gYEV2ZW50c01hcGAgb2YgdXNlci1kZWZpbmVkIGV2ZW50cyB0aGF0IGNhbiBiZVxuICogZW1pdHRlZCB3aXRoIGBlbWl0YFxuICogQHR5cGVQYXJhbSBSZXNlcnZlZEV2ZW50cyAtIGBFdmVudHNNYXBgIG9mIHJlc2VydmVkIGV2ZW50cywgdGhhdCBjYW4gYmVcbiAqIGVtaXR0ZWQgYnkgc29ja2V0LmlvIHdpdGggYGVtaXRSZXNlcnZlZGAsIGFuZCBjYW4gYmUgbGlzdGVuZWQgdG8gd2l0aFxuICogYGxpc3RlbmAuXG4gKi9cbmNsYXNzIFN0cmljdEV2ZW50RW1pdHRlciBleHRlbmRzIEVtaXR0ZXIge1xuICAgIC8qKlxuICAgICAqIEFkZHMgdGhlIGBsaXN0ZW5lcmAgZnVuY3Rpb24gYXMgYW4gZXZlbnQgbGlzdGVuZXIgZm9yIGBldmAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZXYgTmFtZSBvZiB0aGUgZXZlbnRcbiAgICAgKiBAcGFyYW0gbGlzdGVuZXIgQ2FsbGJhY2sgZnVuY3Rpb25cbiAgICAgKi9cbiAgICBvbihldiwgbGlzdGVuZXIpIHtcbiAgICAgICAgc3VwZXIub24oZXYsIGxpc3RlbmVyKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFkZHMgYSBvbmUtdGltZSBgbGlzdGVuZXJgIGZ1bmN0aW9uIGFzIGFuIGV2ZW50IGxpc3RlbmVyIGZvciBgZXZgLlxuICAgICAqXG4gICAgICogQHBhcmFtIGV2IE5hbWUgb2YgdGhlIGV2ZW50XG4gICAgICogQHBhcmFtIGxpc3RlbmVyIENhbGxiYWNrIGZ1bmN0aW9uXG4gICAgICovXG4gICAgb25jZShldiwgbGlzdGVuZXIpIHtcbiAgICAgICAgc3VwZXIub25jZShldiwgbGlzdGVuZXIpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogRW1pdHMgYW4gZXZlbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZXYgTmFtZSBvZiB0aGUgZXZlbnRcbiAgICAgKiBAcGFyYW0gYXJncyBWYWx1ZXMgdG8gc2VuZCB0byBsaXN0ZW5lcnMgb2YgdGhpcyBldmVudFxuICAgICAqL1xuICAgIGVtaXQoZXYsIC4uLmFyZ3MpIHtcbiAgICAgICAgc3VwZXIuZW1pdChldiwgLi4uYXJncyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBFbWl0cyBhIHJlc2VydmVkIGV2ZW50LlxuICAgICAqXG4gICAgICogVGhpcyBtZXRob2QgaXMgYHByb3RlY3RlZGAsIHNvIHRoYXQgb25seSBhIGNsYXNzIGV4dGVuZGluZ1xuICAgICAqIGBTdHJpY3RFdmVudEVtaXR0ZXJgIGNhbiBlbWl0IGl0cyBvd24gcmVzZXJ2ZWQgZXZlbnRzLlxuICAgICAqXG4gICAgICogQHBhcmFtIGV2IFJlc2VydmVkIGV2ZW50IG5hbWVcbiAgICAgKiBAcGFyYW0gYXJncyBBcmd1bWVudHMgdG8gZW1pdCBhbG9uZyB3aXRoIHRoZSBldmVudFxuICAgICAqL1xuICAgIGVtaXRSZXNlcnZlZChldiwgLi4uYXJncykge1xuICAgICAgICBzdXBlci5lbWl0KGV2LCAuLi5hcmdzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGxpc3RlbmVycyBsaXN0ZW5pbmcgdG8gYW4gZXZlbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZXZlbnQgRXZlbnQgbmFtZVxuICAgICAqIEByZXR1cm5zIEFycmF5IG9mIGxpc3RlbmVycyBzdWJzY3JpYmVkIHRvIGBldmVudGBcbiAgICAgKi9cbiAgICBsaXN0ZW5lcnMoZXZlbnQpIHtcbiAgICAgICAgcmV0dXJuIHN1cGVyLmxpc3RlbmVycyhldmVudCk7XG4gICAgfVxufVxuZXhwb3J0cy5TdHJpY3RFdmVudEVtaXR0ZXIgPSBTdHJpY3RFdmVudEVtaXR0ZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMudXJsID0gdm9pZCAwO1xuY29uc3QgcGFyc2V1cmkgPSByZXF1aXJlKFwicGFyc2V1cmlcIik7XG5jb25zdCBkZWJ1ZyA9IHJlcXVpcmUoXCJkZWJ1Z1wiKShcInNvY2tldC5pby1jbGllbnQ6dXJsXCIpO1xuLyoqXG4gKiBVUkwgcGFyc2VyLlxuICpcbiAqIEBwYXJhbSB1cmkgLSB1cmxcbiAqIEBwYXJhbSBwYXRoIC0gdGhlIHJlcXVlc3QgcGF0aCBvZiB0aGUgY29ubmVjdGlvblxuICogQHBhcmFtIGxvYyAtIEFuIG9iamVjdCBtZWFudCB0byBtaW1pYyB3aW5kb3cubG9jYXRpb24uXG4gKiAgICAgICAgRGVmYXVsdHMgdG8gd2luZG93LmxvY2F0aW9uLlxuICogQHB1YmxpY1xuICovXG5mdW5jdGlvbiB1cmwodXJpLCBwYXRoID0gXCJcIiwgbG9jKSB7XG4gICAgbGV0IG9iaiA9IHVyaTtcbiAgICAvLyBkZWZhdWx0IHRvIHdpbmRvdy5sb2NhdGlvblxuICAgIGxvYyA9IGxvYyB8fCAodHlwZW9mIGxvY2F0aW9uICE9PSBcInVuZGVmaW5lZFwiICYmIGxvY2F0aW9uKTtcbiAgICBpZiAobnVsbCA9PSB1cmkpXG4gICAgICAgIHVyaSA9IGxvYy5wcm90b2NvbCArIFwiLy9cIiArIGxvYy5ob3N0O1xuICAgIC8vIHJlbGF0aXZlIHBhdGggc3VwcG9ydFxuICAgIGlmICh0eXBlb2YgdXJpID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIGlmIChcIi9cIiA9PT0gdXJpLmNoYXJBdCgwKSkge1xuICAgICAgICAgICAgaWYgKFwiL1wiID09PSB1cmkuY2hhckF0KDEpKSB7XG4gICAgICAgICAgICAgICAgdXJpID0gbG9jLnByb3RvY29sICsgdXJpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdXJpID0gbG9jLmhvc3QgKyB1cmk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCEvXihodHRwcz98d3NzPyk6XFwvXFwvLy50ZXN0KHVyaSkpIHtcbiAgICAgICAgICAgIGRlYnVnKFwicHJvdG9jb2wtbGVzcyB1cmwgJXNcIiwgdXJpKTtcbiAgICAgICAgICAgIGlmIChcInVuZGVmaW5lZFwiICE9PSB0eXBlb2YgbG9jKSB7XG4gICAgICAgICAgICAgICAgdXJpID0gbG9jLnByb3RvY29sICsgXCIvL1wiICsgdXJpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdXJpID0gXCJodHRwczovL1wiICsgdXJpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIHBhcnNlXG4gICAgICAgIGRlYnVnKFwicGFyc2UgJXNcIiwgdXJpKTtcbiAgICAgICAgb2JqID0gcGFyc2V1cmkodXJpKTtcbiAgICB9XG4gICAgLy8gbWFrZSBzdXJlIHdlIHRyZWF0IGBsb2NhbGhvc3Q6ODBgIGFuZCBgbG9jYWxob3N0YCBlcXVhbGx5XG4gICAgaWYgKCFvYmoucG9ydCkge1xuICAgICAgICBpZiAoL14oaHR0cHx3cykkLy50ZXN0KG9iai5wcm90b2NvbCkpIHtcbiAgICAgICAgICAgIG9iai5wb3J0ID0gXCI4MFwiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKC9eKGh0dHB8d3MpcyQvLnRlc3Qob2JqLnByb3RvY29sKSkge1xuICAgICAgICAgICAgb2JqLnBvcnQgPSBcIjQ0M1wiO1xuICAgICAgICB9XG4gICAgfVxuICAgIG9iai5wYXRoID0gb2JqLnBhdGggfHwgXCIvXCI7XG4gICAgY29uc3QgaXB2NiA9IG9iai5ob3N0LmluZGV4T2YoXCI6XCIpICE9PSAtMTtcbiAgICBjb25zdCBob3N0ID0gaXB2NiA/IFwiW1wiICsgb2JqLmhvc3QgKyBcIl1cIiA6IG9iai5ob3N0O1xuICAgIC8vIGRlZmluZSB1bmlxdWUgaWRcbiAgICBvYmouaWQgPSBvYmoucHJvdG9jb2wgKyBcIjovL1wiICsgaG9zdCArIFwiOlwiICsgb2JqLnBvcnQgKyBwYXRoO1xuICAgIC8vIGRlZmluZSBocmVmXG4gICAgb2JqLmhyZWYgPVxuICAgICAgICBvYmoucHJvdG9jb2wgK1xuICAgICAgICAgICAgXCI6Ly9cIiArXG4gICAgICAgICAgICBob3N0ICtcbiAgICAgICAgICAgIChsb2MgJiYgbG9jLnBvcnQgPT09IG9iai5wb3J0ID8gXCJcIiA6IFwiOlwiICsgb2JqLnBvcnQpO1xuICAgIHJldHVybiBvYmo7XG59XG5leHBvcnRzLnVybCA9IHVybDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5yZWNvbnN0cnVjdFBhY2tldCA9IGV4cG9ydHMuZGVjb25zdHJ1Y3RQYWNrZXQgPSB2b2lkIDA7XG5jb25zdCBpc19iaW5hcnlfMSA9IHJlcXVpcmUoXCIuL2lzLWJpbmFyeVwiKTtcbi8qKlxuICogUmVwbGFjZXMgZXZlcnkgQnVmZmVyIHwgQXJyYXlCdWZmZXIgfCBCbG9iIHwgRmlsZSBpbiBwYWNrZXQgd2l0aCBhIG51bWJlcmVkIHBsYWNlaG9sZGVyLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYWNrZXQgLSBzb2NrZXQuaW8gZXZlbnQgcGFja2V0XG4gKiBAcmV0dXJuIHtPYmplY3R9IHdpdGggZGVjb25zdHJ1Y3RlZCBwYWNrZXQgYW5kIGxpc3Qgb2YgYnVmZmVyc1xuICogQHB1YmxpY1xuICovXG5mdW5jdGlvbiBkZWNvbnN0cnVjdFBhY2tldChwYWNrZXQpIHtcbiAgICBjb25zdCBidWZmZXJzID0gW107XG4gICAgY29uc3QgcGFja2V0RGF0YSA9IHBhY2tldC5kYXRhO1xuICAgIGNvbnN0IHBhY2sgPSBwYWNrZXQ7XG4gICAgcGFjay5kYXRhID0gX2RlY29uc3RydWN0UGFja2V0KHBhY2tldERhdGEsIGJ1ZmZlcnMpO1xuICAgIHBhY2suYXR0YWNobWVudHMgPSBidWZmZXJzLmxlbmd0aDsgLy8gbnVtYmVyIG9mIGJpbmFyeSAnYXR0YWNobWVudHMnXG4gICAgcmV0dXJuIHsgcGFja2V0OiBwYWNrLCBidWZmZXJzOiBidWZmZXJzIH07XG59XG5leHBvcnRzLmRlY29uc3RydWN0UGFja2V0ID0gZGVjb25zdHJ1Y3RQYWNrZXQ7XG5mdW5jdGlvbiBfZGVjb25zdHJ1Y3RQYWNrZXQoZGF0YSwgYnVmZmVycykge1xuICAgIGlmICghZGF0YSlcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgaWYgKGlzX2JpbmFyeV8xLmlzQmluYXJ5KGRhdGEpKSB7XG4gICAgICAgIGNvbnN0IHBsYWNlaG9sZGVyID0geyBfcGxhY2Vob2xkZXI6IHRydWUsIG51bTogYnVmZmVycy5sZW5ndGggfTtcbiAgICAgICAgYnVmZmVycy5wdXNoKGRhdGEpO1xuICAgICAgICByZXR1cm4gcGxhY2Vob2xkZXI7XG4gICAgfVxuICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgICAgY29uc3QgbmV3RGF0YSA9IG5ldyBBcnJheShkYXRhLmxlbmd0aCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbmV3RGF0YVtpXSA9IF9kZWNvbnN0cnVjdFBhY2tldChkYXRhW2ldLCBidWZmZXJzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3RGF0YTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIGRhdGEgPT09IFwib2JqZWN0XCIgJiYgIShkYXRhIGluc3RhbmNlb2YgRGF0ZSkpIHtcbiAgICAgICAgY29uc3QgbmV3RGF0YSA9IHt9O1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBkYXRhKSB7XG4gICAgICAgICAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgbmV3RGF0YVtrZXldID0gX2RlY29uc3RydWN0UGFja2V0KGRhdGFba2V5XSwgYnVmZmVycyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ld0RhdGE7XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xufVxuLyoqXG4gKiBSZWNvbnN0cnVjdHMgYSBiaW5hcnkgcGFja2V0IGZyb20gaXRzIHBsYWNlaG9sZGVyIHBhY2tldCBhbmQgYnVmZmVyc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYWNrZXQgLSBldmVudCBwYWNrZXQgd2l0aCBwbGFjZWhvbGRlcnNcbiAqIEBwYXJhbSB7QXJyYXl9IGJ1ZmZlcnMgLSBiaW5hcnkgYnVmZmVycyB0byBwdXQgaW4gcGxhY2Vob2xkZXIgcG9zaXRpb25zXG4gKiBAcmV0dXJuIHtPYmplY3R9IHJlY29uc3RydWN0ZWQgcGFja2V0XG4gKiBAcHVibGljXG4gKi9cbmZ1bmN0aW9uIHJlY29uc3RydWN0UGFja2V0KHBhY2tldCwgYnVmZmVycykge1xuICAgIHBhY2tldC5kYXRhID0gX3JlY29uc3RydWN0UGFja2V0KHBhY2tldC5kYXRhLCBidWZmZXJzKTtcbiAgICBwYWNrZXQuYXR0YWNobWVudHMgPSB1bmRlZmluZWQ7IC8vIG5vIGxvbmdlciB1c2VmdWxcbiAgICByZXR1cm4gcGFja2V0O1xufVxuZXhwb3J0cy5yZWNvbnN0cnVjdFBhY2tldCA9IHJlY29uc3RydWN0UGFja2V0O1xuZnVuY3Rpb24gX3JlY29uc3RydWN0UGFja2V0KGRhdGEsIGJ1ZmZlcnMpIHtcbiAgICBpZiAoIWRhdGEpXG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIGlmIChkYXRhICYmIGRhdGEuX3BsYWNlaG9sZGVyKSB7XG4gICAgICAgIHJldHVybiBidWZmZXJzW2RhdGEubnVtXTsgLy8gYXBwcm9wcmlhdGUgYnVmZmVyIChzaG91bGQgYmUgbmF0dXJhbCBvcmRlciBhbnl3YXkpXG4gICAgfVxuICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBkYXRhW2ldID0gX3JlY29uc3RydWN0UGFja2V0KGRhdGFbaV0sIGJ1ZmZlcnMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiBkYXRhID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIGRhdGEpIHtcbiAgICAgICAgICAgIGlmIChkYXRhLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBkYXRhW2tleV0gPSBfcmVjb25zdHJ1Y3RQYWNrZXQoZGF0YVtrZXldLCBidWZmZXJzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5EZWNvZGVyID0gZXhwb3J0cy5FbmNvZGVyID0gZXhwb3J0cy5QYWNrZXRUeXBlID0gZXhwb3J0cy5wcm90b2NvbCA9IHZvaWQgMDtcbmNvbnN0IEVtaXR0ZXIgPSByZXF1aXJlKFwiY29tcG9uZW50LWVtaXR0ZXJcIik7XG5jb25zdCBiaW5hcnlfMSA9IHJlcXVpcmUoXCIuL2JpbmFyeVwiKTtcbmNvbnN0IGlzX2JpbmFyeV8xID0gcmVxdWlyZShcIi4vaXMtYmluYXJ5XCIpO1xuY29uc3QgZGVidWcgPSByZXF1aXJlKFwiZGVidWdcIikoXCJzb2NrZXQuaW8tcGFyc2VyXCIpO1xuLyoqXG4gKiBQcm90b2NvbCB2ZXJzaW9uLlxuICpcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0cy5wcm90b2NvbCA9IDU7XG52YXIgUGFja2V0VHlwZTtcbihmdW5jdGlvbiAoUGFja2V0VHlwZSkge1xuICAgIFBhY2tldFR5cGVbUGFja2V0VHlwZVtcIkNPTk5FQ1RcIl0gPSAwXSA9IFwiQ09OTkVDVFwiO1xuICAgIFBhY2tldFR5cGVbUGFja2V0VHlwZVtcIkRJU0NPTk5FQ1RcIl0gPSAxXSA9IFwiRElTQ09OTkVDVFwiO1xuICAgIFBhY2tldFR5cGVbUGFja2V0VHlwZVtcIkVWRU5UXCJdID0gMl0gPSBcIkVWRU5UXCI7XG4gICAgUGFja2V0VHlwZVtQYWNrZXRUeXBlW1wiQUNLXCJdID0gM10gPSBcIkFDS1wiO1xuICAgIFBhY2tldFR5cGVbUGFja2V0VHlwZVtcIkNPTk5FQ1RfRVJST1JcIl0gPSA0XSA9IFwiQ09OTkVDVF9FUlJPUlwiO1xuICAgIFBhY2tldFR5cGVbUGFja2V0VHlwZVtcIkJJTkFSWV9FVkVOVFwiXSA9IDVdID0gXCJCSU5BUllfRVZFTlRcIjtcbiAgICBQYWNrZXRUeXBlW1BhY2tldFR5cGVbXCJCSU5BUllfQUNLXCJdID0gNl0gPSBcIkJJTkFSWV9BQ0tcIjtcbn0pKFBhY2tldFR5cGUgPSBleHBvcnRzLlBhY2tldFR5cGUgfHwgKGV4cG9ydHMuUGFja2V0VHlwZSA9IHt9KSk7XG4vKipcbiAqIEEgc29ja2V0LmlvIEVuY29kZXIgaW5zdGFuY2VcbiAqL1xuY2xhc3MgRW5jb2RlciB7XG4gICAgLyoqXG4gICAgICogRW5jb2RlIGEgcGFja2V0IGFzIGEgc2luZ2xlIHN0cmluZyBpZiBub24tYmluYXJ5LCBvciBhcyBhXG4gICAgICogYnVmZmVyIHNlcXVlbmNlLCBkZXBlbmRpbmcgb24gcGFja2V0IHR5cGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb2JqIC0gcGFja2V0IG9iamVjdFxuICAgICAqL1xuICAgIGVuY29kZShvYmopIHtcbiAgICAgICAgZGVidWcoXCJlbmNvZGluZyBwYWNrZXQgJWpcIiwgb2JqKTtcbiAgICAgICAgaWYgKG9iai50eXBlID09PSBQYWNrZXRUeXBlLkVWRU5UIHx8IG9iai50eXBlID09PSBQYWNrZXRUeXBlLkFDSykge1xuICAgICAgICAgICAgaWYgKGlzX2JpbmFyeV8xLmhhc0JpbmFyeShvYmopKSB7XG4gICAgICAgICAgICAgICAgb2JqLnR5cGUgPVxuICAgICAgICAgICAgICAgICAgICBvYmoudHlwZSA9PT0gUGFja2V0VHlwZS5FVkVOVFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBQYWNrZXRUeXBlLkJJTkFSWV9FVkVOVFxuICAgICAgICAgICAgICAgICAgICAgICAgOiBQYWNrZXRUeXBlLkJJTkFSWV9BQ0s7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZW5jb2RlQXNCaW5hcnkob2JqKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW3RoaXMuZW5jb2RlQXNTdHJpbmcob2JqKV07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEVuY29kZSBwYWNrZXQgYXMgc3RyaW5nLlxuICAgICAqL1xuICAgIGVuY29kZUFzU3RyaW5nKG9iaikge1xuICAgICAgICAvLyBmaXJzdCBpcyB0eXBlXG4gICAgICAgIGxldCBzdHIgPSBcIlwiICsgb2JqLnR5cGU7XG4gICAgICAgIC8vIGF0dGFjaG1lbnRzIGlmIHdlIGhhdmUgdGhlbVxuICAgICAgICBpZiAob2JqLnR5cGUgPT09IFBhY2tldFR5cGUuQklOQVJZX0VWRU5UIHx8XG4gICAgICAgICAgICBvYmoudHlwZSA9PT0gUGFja2V0VHlwZS5CSU5BUllfQUNLKSB7XG4gICAgICAgICAgICBzdHIgKz0gb2JqLmF0dGFjaG1lbnRzICsgXCItXCI7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgd2UgaGF2ZSBhIG5hbWVzcGFjZSBvdGhlciB0aGFuIGAvYFxuICAgICAgICAvLyB3ZSBhcHBlbmQgaXQgZm9sbG93ZWQgYnkgYSBjb21tYSBgLGBcbiAgICAgICAgaWYgKG9iai5uc3AgJiYgXCIvXCIgIT09IG9iai5uc3ApIHtcbiAgICAgICAgICAgIHN0ciArPSBvYmoubnNwICsgXCIsXCI7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaW1tZWRpYXRlbHkgZm9sbG93ZWQgYnkgdGhlIGlkXG4gICAgICAgIGlmIChudWxsICE9IG9iai5pZCkge1xuICAgICAgICAgICAgc3RyICs9IG9iai5pZDtcbiAgICAgICAgfVxuICAgICAgICAvLyBqc29uIGRhdGFcbiAgICAgICAgaWYgKG51bGwgIT0gb2JqLmRhdGEpIHtcbiAgICAgICAgICAgIHN0ciArPSBKU09OLnN0cmluZ2lmeShvYmouZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgZGVidWcoXCJlbmNvZGVkICVqIGFzICVzXCIsIG9iaiwgc3RyKTtcbiAgICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRW5jb2RlIHBhY2tldCBhcyAnYnVmZmVyIHNlcXVlbmNlJyBieSByZW1vdmluZyBibG9icywgYW5kXG4gICAgICogZGVjb25zdHJ1Y3RpbmcgcGFja2V0IGludG8gb2JqZWN0IHdpdGggcGxhY2Vob2xkZXJzIGFuZFxuICAgICAqIGEgbGlzdCBvZiBidWZmZXJzLlxuICAgICAqL1xuICAgIGVuY29kZUFzQmluYXJ5KG9iaikge1xuICAgICAgICBjb25zdCBkZWNvbnN0cnVjdGlvbiA9IGJpbmFyeV8xLmRlY29uc3RydWN0UGFja2V0KG9iaik7XG4gICAgICAgIGNvbnN0IHBhY2sgPSB0aGlzLmVuY29kZUFzU3RyaW5nKGRlY29uc3RydWN0aW9uLnBhY2tldCk7XG4gICAgICAgIGNvbnN0IGJ1ZmZlcnMgPSBkZWNvbnN0cnVjdGlvbi5idWZmZXJzO1xuICAgICAgICBidWZmZXJzLnVuc2hpZnQocGFjayk7IC8vIGFkZCBwYWNrZXQgaW5mbyB0byBiZWdpbm5pbmcgb2YgZGF0YSBsaXN0XG4gICAgICAgIHJldHVybiBidWZmZXJzOyAvLyB3cml0ZSBhbGwgdGhlIGJ1ZmZlcnNcbiAgICB9XG59XG5leHBvcnRzLkVuY29kZXIgPSBFbmNvZGVyO1xuLyoqXG4gKiBBIHNvY2tldC5pbyBEZWNvZGVyIGluc3RhbmNlXG4gKlxuICogQHJldHVybiB7T2JqZWN0fSBkZWNvZGVyXG4gKi9cbmNsYXNzIERlY29kZXIgZXh0ZW5kcyBFbWl0dGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRGVjb2RlcyBhbiBlbmNvZGVkIHBhY2tldCBzdHJpbmcgaW50byBwYWNrZXQgSlNPTi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvYmogLSBlbmNvZGVkIHBhY2tldFxuICAgICAqL1xuICAgIGFkZChvYmopIHtcbiAgICAgICAgbGV0IHBhY2tldDtcbiAgICAgICAgaWYgKHR5cGVvZiBvYmogPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHBhY2tldCA9IHRoaXMuZGVjb2RlU3RyaW5nKG9iaik7XG4gICAgICAgICAgICBpZiAocGFja2V0LnR5cGUgPT09IFBhY2tldFR5cGUuQklOQVJZX0VWRU5UIHx8XG4gICAgICAgICAgICAgICAgcGFja2V0LnR5cGUgPT09IFBhY2tldFR5cGUuQklOQVJZX0FDSykge1xuICAgICAgICAgICAgICAgIC8vIGJpbmFyeSBwYWNrZXQncyBqc29uXG4gICAgICAgICAgICAgICAgdGhpcy5yZWNvbnN0cnVjdG9yID0gbmV3IEJpbmFyeVJlY29uc3RydWN0b3IocGFja2V0KTtcbiAgICAgICAgICAgICAgICAvLyBubyBhdHRhY2htZW50cywgbGFiZWxlZCBiaW5hcnkgYnV0IG5vIGJpbmFyeSBkYXRhIHRvIGZvbGxvd1xuICAgICAgICAgICAgICAgIGlmIChwYWNrZXQuYXR0YWNobWVudHMgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgc3VwZXIuZW1pdChcImRlY29kZWRcIiwgcGFja2V0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBub24tYmluYXJ5IGZ1bGwgcGFja2V0XG4gICAgICAgICAgICAgICAgc3VwZXIuZW1pdChcImRlY29kZWRcIiwgcGFja2V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc19iaW5hcnlfMS5pc0JpbmFyeShvYmopIHx8IG9iai5iYXNlNjQpIHtcbiAgICAgICAgICAgIC8vIHJhdyBiaW5hcnkgZGF0YVxuICAgICAgICAgICAgaWYgKCF0aGlzLnJlY29uc3RydWN0b3IpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJnb3QgYmluYXJ5IGRhdGEgd2hlbiBub3QgcmVjb25zdHJ1Y3RpbmcgYSBwYWNrZXRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYWNrZXQgPSB0aGlzLnJlY29uc3RydWN0b3IudGFrZUJpbmFyeURhdGEob2JqKTtcbiAgICAgICAgICAgICAgICBpZiAocGFja2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHJlY2VpdmVkIGZpbmFsIGJ1ZmZlclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlY29uc3RydWN0b3IgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBzdXBlci5lbWl0KFwiZGVjb2RlZFwiLCBwYWNrZXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVua25vd24gdHlwZTogXCIgKyBvYmopO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERlY29kZSBhIHBhY2tldCBTdHJpbmcgKEpTT04gZGF0YSlcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9IHBhY2tldFxuICAgICAqL1xuICAgIGRlY29kZVN0cmluZyhzdHIpIHtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICAvLyBsb29rIHVwIHR5cGVcbiAgICAgICAgY29uc3QgcCA9IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcihzdHIuY2hhckF0KDApKSxcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKFBhY2tldFR5cGVbcC50eXBlXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1bmtub3duIHBhY2tldCB0eXBlIFwiICsgcC50eXBlKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBsb29rIHVwIGF0dGFjaG1lbnRzIGlmIHR5cGUgYmluYXJ5XG4gICAgICAgIGlmIChwLnR5cGUgPT09IFBhY2tldFR5cGUuQklOQVJZX0VWRU5UIHx8XG4gICAgICAgICAgICBwLnR5cGUgPT09IFBhY2tldFR5cGUuQklOQVJZX0FDSykge1xuICAgICAgICAgICAgY29uc3Qgc3RhcnQgPSBpICsgMTtcbiAgICAgICAgICAgIHdoaWxlIChzdHIuY2hhckF0KCsraSkgIT09IFwiLVwiICYmIGkgIT0gc3RyLmxlbmd0aCkgeyB9XG4gICAgICAgICAgICBjb25zdCBidWYgPSBzdHIuc3Vic3RyaW5nKHN0YXJ0LCBpKTtcbiAgICAgICAgICAgIGlmIChidWYgIT0gTnVtYmVyKGJ1ZikgfHwgc3RyLmNoYXJBdChpKSAhPT0gXCItXCIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbGxlZ2FsIGF0dGFjaG1lbnRzXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcC5hdHRhY2htZW50cyA9IE51bWJlcihidWYpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGxvb2sgdXAgbmFtZXNwYWNlIChpZiBhbnkpXG4gICAgICAgIGlmIChcIi9cIiA9PT0gc3RyLmNoYXJBdChpICsgMSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gaSArIDE7XG4gICAgICAgICAgICB3aGlsZSAoKytpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYyA9IHN0ci5jaGFyQXQoaSk7XG4gICAgICAgICAgICAgICAgaWYgKFwiLFwiID09PSBjKVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBpZiAoaSA9PT0gc3RyLmxlbmd0aClcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwLm5zcCA9IHN0ci5zdWJzdHJpbmcoc3RhcnQsIGkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcC5uc3AgPSBcIi9cIjtcbiAgICAgICAgfVxuICAgICAgICAvLyBsb29rIHVwIGlkXG4gICAgICAgIGNvbnN0IG5leHQgPSBzdHIuY2hhckF0KGkgKyAxKTtcbiAgICAgICAgaWYgKFwiXCIgIT09IG5leHQgJiYgTnVtYmVyKG5leHQpID09IG5leHQpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gaSArIDE7XG4gICAgICAgICAgICB3aGlsZSAoKytpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYyA9IHN0ci5jaGFyQXQoaSk7XG4gICAgICAgICAgICAgICAgaWYgKG51bGwgPT0gYyB8fCBOdW1iZXIoYykgIT0gYykge1xuICAgICAgICAgICAgICAgICAgICAtLWk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoaSA9PT0gc3RyLmxlbmd0aClcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwLmlkID0gTnVtYmVyKHN0ci5zdWJzdHJpbmcoc3RhcnQsIGkgKyAxKSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gbG9vayB1cCBqc29uIGRhdGFcbiAgICAgICAgaWYgKHN0ci5jaGFyQXQoKytpKSkge1xuICAgICAgICAgICAgY29uc3QgcGF5bG9hZCA9IHRyeVBhcnNlKHN0ci5zdWJzdHIoaSkpO1xuICAgICAgICAgICAgaWYgKERlY29kZXIuaXNQYXlsb2FkVmFsaWQocC50eXBlLCBwYXlsb2FkKSkge1xuICAgICAgICAgICAgICAgIHAuZGF0YSA9IHBheWxvYWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbnZhbGlkIHBheWxvYWRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZGVidWcoXCJkZWNvZGVkICVzIGFzICVqXCIsIHN0ciwgcCk7XG4gICAgICAgIHJldHVybiBwO1xuICAgIH1cbiAgICBzdGF0aWMgaXNQYXlsb2FkVmFsaWQodHlwZSwgcGF5bG9hZCkge1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgUGFja2V0VHlwZS5DT05ORUNUOlxuICAgICAgICAgICAgICAgIHJldHVybiB0eXBlb2YgcGF5bG9hZCA9PT0gXCJvYmplY3RcIjtcbiAgICAgICAgICAgIGNhc2UgUGFja2V0VHlwZS5ESVNDT05ORUNUOlxuICAgICAgICAgICAgICAgIHJldHVybiBwYXlsb2FkID09PSB1bmRlZmluZWQ7XG4gICAgICAgICAgICBjYXNlIFBhY2tldFR5cGUuQ09OTkVDVF9FUlJPUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdHlwZW9mIHBheWxvYWQgPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIHBheWxvYWQgPT09IFwib2JqZWN0XCI7XG4gICAgICAgICAgICBjYXNlIFBhY2tldFR5cGUuRVZFTlQ6XG4gICAgICAgICAgICBjYXNlIFBhY2tldFR5cGUuQklOQVJZX0VWRU5UOlxuICAgICAgICAgICAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KHBheWxvYWQpICYmIHBheWxvYWQubGVuZ3RoID4gMDtcbiAgICAgICAgICAgIGNhc2UgUGFja2V0VHlwZS5BQ0s6XG4gICAgICAgICAgICBjYXNlIFBhY2tldFR5cGUuQklOQVJZX0FDSzpcbiAgICAgICAgICAgICAgICByZXR1cm4gQXJyYXkuaXNBcnJheShwYXlsb2FkKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBEZWFsbG9jYXRlcyBhIHBhcnNlcidzIHJlc291cmNlc1xuICAgICAqL1xuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh0aGlzLnJlY29uc3RydWN0b3IpIHtcbiAgICAgICAgICAgIHRoaXMucmVjb25zdHJ1Y3Rvci5maW5pc2hlZFJlY29uc3RydWN0aW9uKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLkRlY29kZXIgPSBEZWNvZGVyO1xuZnVuY3Rpb24gdHJ5UGFyc2Uoc3RyKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2Uoc3RyKTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbi8qKlxuICogQSBtYW5hZ2VyIG9mIGEgYmluYXJ5IGV2ZW50J3MgJ2J1ZmZlciBzZXF1ZW5jZScuIFNob3VsZFxuICogYmUgY29uc3RydWN0ZWQgd2hlbmV2ZXIgYSBwYWNrZXQgb2YgdHlwZSBCSU5BUllfRVZFTlQgaXNcbiAqIGRlY29kZWQuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHBhY2tldFxuICogQHJldHVybiB7QmluYXJ5UmVjb25zdHJ1Y3Rvcn0gaW5pdGlhbGl6ZWQgcmVjb25zdHJ1Y3RvclxuICovXG5jbGFzcyBCaW5hcnlSZWNvbnN0cnVjdG9yIHtcbiAgICBjb25zdHJ1Y3RvcihwYWNrZXQpIHtcbiAgICAgICAgdGhpcy5wYWNrZXQgPSBwYWNrZXQ7XG4gICAgICAgIHRoaXMuYnVmZmVycyA9IFtdO1xuICAgICAgICB0aGlzLnJlY29uUGFjayA9IHBhY2tldDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogTWV0aG9kIHRvIGJlIGNhbGxlZCB3aGVuIGJpbmFyeSBkYXRhIHJlY2VpdmVkIGZyb20gY29ubmVjdGlvblxuICAgICAqIGFmdGVyIGEgQklOQVJZX0VWRU5UIHBhY2tldC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7QnVmZmVyIHwgQXJyYXlCdWZmZXJ9IGJpbkRhdGEgLSB0aGUgcmF3IGJpbmFyeSBkYXRhIHJlY2VpdmVkXG4gICAgICogQHJldHVybiB7bnVsbCB8IE9iamVjdH0gcmV0dXJucyBudWxsIGlmIG1vcmUgYmluYXJ5IGRhdGEgaXMgZXhwZWN0ZWQgb3JcbiAgICAgKiAgIGEgcmVjb25zdHJ1Y3RlZCBwYWNrZXQgb2JqZWN0IGlmIGFsbCBidWZmZXJzIGhhdmUgYmVlbiByZWNlaXZlZC5cbiAgICAgKi9cbiAgICB0YWtlQmluYXJ5RGF0YShiaW5EYXRhKSB7XG4gICAgICAgIHRoaXMuYnVmZmVycy5wdXNoKGJpbkRhdGEpO1xuICAgICAgICBpZiAodGhpcy5idWZmZXJzLmxlbmd0aCA9PT0gdGhpcy5yZWNvblBhY2suYXR0YWNobWVudHMpIHtcbiAgICAgICAgICAgIC8vIGRvbmUgd2l0aCBidWZmZXIgbGlzdFxuICAgICAgICAgICAgY29uc3QgcGFja2V0ID0gYmluYXJ5XzEucmVjb25zdHJ1Y3RQYWNrZXQodGhpcy5yZWNvblBhY2ssIHRoaXMuYnVmZmVycyk7XG4gICAgICAgICAgICB0aGlzLmZpbmlzaGVkUmVjb25zdHJ1Y3Rpb24oKTtcbiAgICAgICAgICAgIHJldHVybiBwYWNrZXQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENsZWFucyB1cCBiaW5hcnkgcGFja2V0IHJlY29uc3RydWN0aW9uIHZhcmlhYmxlcy5cbiAgICAgKi9cbiAgICBmaW5pc2hlZFJlY29uc3RydWN0aW9uKCkge1xuICAgICAgICB0aGlzLnJlY29uUGFjayA9IG51bGw7XG4gICAgICAgIHRoaXMuYnVmZmVycyA9IFtdO1xuICAgIH1cbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5oYXNCaW5hcnkgPSBleHBvcnRzLmlzQmluYXJ5ID0gdm9pZCAwO1xuY29uc3Qgd2l0aE5hdGl2ZUFycmF5QnVmZmVyID0gdHlwZW9mIEFycmF5QnVmZmVyID09PSBcImZ1bmN0aW9uXCI7XG5jb25zdCBpc1ZpZXcgPSAob2JqKSA9PiB7XG4gICAgcmV0dXJuIHR5cGVvZiBBcnJheUJ1ZmZlci5pc1ZpZXcgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgICA/IEFycmF5QnVmZmVyLmlzVmlldyhvYmopXG4gICAgICAgIDogb2JqLmJ1ZmZlciBpbnN0YW5jZW9mIEFycmF5QnVmZmVyO1xufTtcbmNvbnN0IHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbmNvbnN0IHdpdGhOYXRpdmVCbG9iID0gdHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiB8fFxuICAgICh0eXBlb2YgQmxvYiAhPT0gXCJ1bmRlZmluZWRcIiAmJlxuICAgICAgICB0b1N0cmluZy5jYWxsKEJsb2IpID09PSBcIltvYmplY3QgQmxvYkNvbnN0cnVjdG9yXVwiKTtcbmNvbnN0IHdpdGhOYXRpdmVGaWxlID0gdHlwZW9mIEZpbGUgPT09IFwiZnVuY3Rpb25cIiB8fFxuICAgICh0eXBlb2YgRmlsZSAhPT0gXCJ1bmRlZmluZWRcIiAmJlxuICAgICAgICB0b1N0cmluZy5jYWxsKEZpbGUpID09PSBcIltvYmplY3QgRmlsZUNvbnN0cnVjdG9yXVwiKTtcbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIG9iaiBpcyBhIEJ1ZmZlciwgYW4gQXJyYXlCdWZmZXIsIGEgQmxvYiBvciBhIEZpbGUuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gaXNCaW5hcnkob2JqKSB7XG4gICAgcmV0dXJuICgod2l0aE5hdGl2ZUFycmF5QnVmZmVyICYmIChvYmogaW5zdGFuY2VvZiBBcnJheUJ1ZmZlciB8fCBpc1ZpZXcob2JqKSkpIHx8XG4gICAgICAgICh3aXRoTmF0aXZlQmxvYiAmJiBvYmogaW5zdGFuY2VvZiBCbG9iKSB8fFxuICAgICAgICAod2l0aE5hdGl2ZUZpbGUgJiYgb2JqIGluc3RhbmNlb2YgRmlsZSkpO1xufVxuZXhwb3J0cy5pc0JpbmFyeSA9IGlzQmluYXJ5O1xuZnVuY3Rpb24gaGFzQmluYXJ5KG9iaiwgdG9KU09OKSB7XG4gICAgaWYgKCFvYmogfHwgdHlwZW9mIG9iaiAhPT0gXCJvYmplY3RcIikge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChBcnJheS5pc0FycmF5KG9iaikpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBvYmoubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaGFzQmluYXJ5KG9ialtpXSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChpc0JpbmFyeShvYmopKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAob2JqLnRvSlNPTiAmJlxuICAgICAgICB0eXBlb2Ygb2JqLnRvSlNPTiA9PT0gXCJmdW5jdGlvblwiICYmXG4gICAgICAgIGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgcmV0dXJuIGhhc0JpbmFyeShvYmoudG9KU09OKCksIHRydWUpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IGtleSBpbiBvYmopIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkgJiYgaGFzQmluYXJ5KG9ialtrZXldKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuZXhwb3J0cy5oYXNCaW5hcnkgPSBoYXNCaW5hcnk7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBhbHBoYWJldCA9ICcwMTIzNDU2Nzg5QUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ei1fJy5zcGxpdCgnJylcbiAgLCBsZW5ndGggPSA2NFxuICAsIG1hcCA9IHt9XG4gICwgc2VlZCA9IDBcbiAgLCBpID0gMFxuICAsIHByZXY7XG5cbi8qKlxuICogUmV0dXJuIGEgc3RyaW5nIHJlcHJlc2VudGluZyB0aGUgc3BlY2lmaWVkIG51bWJlci5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gbnVtIFRoZSBudW1iZXIgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIG51bWJlci5cbiAqIEBhcGkgcHVibGljXG4gKi9cbmZ1bmN0aW9uIGVuY29kZShudW0pIHtcbiAgdmFyIGVuY29kZWQgPSAnJztcblxuICBkbyB7XG4gICAgZW5jb2RlZCA9IGFscGhhYmV0W251bSAlIGxlbmd0aF0gKyBlbmNvZGVkO1xuICAgIG51bSA9IE1hdGguZmxvb3IobnVtIC8gbGVuZ3RoKTtcbiAgfSB3aGlsZSAobnVtID4gMCk7XG5cbiAgcmV0dXJuIGVuY29kZWQ7XG59XG5cbi8qKlxuICogUmV0dXJuIHRoZSBpbnRlZ2VyIHZhbHVlIHNwZWNpZmllZCBieSB0aGUgZ2l2ZW4gc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgVGhlIHN0cmluZyB0byBjb252ZXJ0LlxuICogQHJldHVybnMge051bWJlcn0gVGhlIGludGVnZXIgdmFsdWUgcmVwcmVzZW50ZWQgYnkgdGhlIHN0cmluZy5cbiAqIEBhcGkgcHVibGljXG4gKi9cbmZ1bmN0aW9uIGRlY29kZShzdHIpIHtcbiAgdmFyIGRlY29kZWQgPSAwO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICBkZWNvZGVkID0gZGVjb2RlZCAqIGxlbmd0aCArIG1hcFtzdHIuY2hhckF0KGkpXTtcbiAgfVxuXG4gIHJldHVybiBkZWNvZGVkO1xufVxuXG4vKipcbiAqIFllYXN0OiBBIHRpbnkgZ3Jvd2luZyBpZCBnZW5lcmF0b3IuXG4gKlxuICogQHJldHVybnMge1N0cmluZ30gQSB1bmlxdWUgaWQuXG4gKiBAYXBpIHB1YmxpY1xuICovXG5mdW5jdGlvbiB5ZWFzdCgpIHtcbiAgdmFyIG5vdyA9IGVuY29kZSgrbmV3IERhdGUoKSk7XG5cbiAgaWYgKG5vdyAhPT0gcHJldikgcmV0dXJuIHNlZWQgPSAwLCBwcmV2ID0gbm93O1xuICByZXR1cm4gbm93ICsnLicrIGVuY29kZShzZWVkKyspO1xufVxuXG4vL1xuLy8gTWFwIGVhY2ggY2hhcmFjdGVyIHRvIGl0cyBpbmRleC5cbi8vXG5mb3IgKDsgaSA8IGxlbmd0aDsgaSsrKSBtYXBbYWxwaGFiZXRbaV1dID0gaTtcblxuLy9cbi8vIEV4cG9zZSB0aGUgYHllYXN0YCwgYGVuY29kZWAgYW5kIGBkZWNvZGVgIGZ1bmN0aW9ucy5cbi8vXG55ZWFzdC5lbmNvZGUgPSBlbmNvZGU7XG55ZWFzdC5kZWNvZGUgPSBkZWNvZGU7XG5tb2R1bGUuZXhwb3J0cyA9IHllYXN0O1xuIiwiaW1wb3J0IHsgcGxheWVyTnVtYmVyIH0gZnJvbSAnLi9kYXRhJztcbmltcG9ydCB7ICQgfSBmcm9tICcuL2NvcmUvbGliL2RvbSdcblxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdFVJKHNvY2tldCkge1xuICBsZXQgY3JlYXRlR2FtZUJ0biA9ICQoJyNjcmVhdGUtZ2FtZScpO1xuICBsZXQgc2hvd0pvaW5HYW1lUHJvbXB0QnRuID0gJCgnI3Nob3ctam9pbi1nYW1lLXByb21wdCcpO1xuICBsZXQgY29uZmlybUpvaW5HYW1lQnRuID0gJCgnI2NvbmZpcm0tam9pbi1nYW1lJyk7XG4gIGxldCByb29tQ29kZUlucHV0ID0gJCgnI3Jvb20tY29kZS1pbnB1dCcpO1xuICBsZXQgcm9vbUNvZGVEaXNwbGF5ID0gJCgnI3Jvb20tY29kZS1kaXNwbGF5Jyk7XG4gIGxldCBpbml0VHJpZ2dlcjtcbiAgbGV0IGluaXRVSVByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcbiAgICBpbml0VHJpZ2dlciA9IHJlcztcbiAgfSlcblxuICAvL2JpbmQgZXZlbnRzXG4gIHNob3dKb2luR2FtZVByb21wdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB0b2dnbGVQb3BvdXQoJ2pvaW4tZ2FtZS1wcm9tcHQnLCB0cnVlKTtcbiAgfSk7XG5cbiAgY3JlYXRlR2FtZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBuZXdHYW1lKHNvY2tldCk7XG4gIH0pO1xuXG4gIGNvbmZpcm1Kb2luR2FtZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBsZXQgcm9vbUNvZGUgPSByb29tQ29kZUlucHV0LnZhbHVlO1xuICAgIGNvbmZpcm1Kb2luR2FtZShzb2NrZXQsIHJvb21Db2RlKTtcbiAgfSlcblxuICBzb2NrZXQub24oJ2dlblJvb21Db2RlJywgKGRhdGEpID0+IHtcbiAgICByb29tQ29kZURpc3BsYXkuaW5uZXJIVE1MID0gZGF0YTtcbiAgfSlcblxuICBpbml0VHJpZ2dlcigpO1xuXG4gIHJldHVybiBpbml0VUlQcm9taXNlO1xufVxuXG5cbmZ1bmN0aW9uIHRvZ2dsZVBvcG91dChpZCwgc3RhdHVzKSB7XG4gIGxldCBwb3BvdXQgPSAkKGAucG9wb3V0IyR7aWR9YCk7XG4gIGlmIChzdGF0dXMpIHtcbiAgICBwb3BvdXQuY2xhc3NMaXN0LmFkZCgncG9wb3V0LS1zaG93Jyk7XG4gIH1cbiAgZWxzZSB7XG4gICAgcG9wb3V0LmNsYXNzTGlzdC5yZW1vdmUoJ3BvcG91dC0tc2hvdycpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoaWRlSW5pdGlhbFNjcmVlbigpIHtcbiAgbGV0IGluaXRpYWxTY3JlZW4gPSAkKCcjaW5pdGlhbC1zY3JlZW4nKTtcbiAgaW5pdGlhbFNjcmVlbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufVxuXG5mdW5jdGlvbiBuZXdHYW1lKHNvY2tldCkge1xuICB0b2dnbGVQb3BvdXQoJ3Jvb20tY29kZS1kaXNwbGF5LXBvcG91dCcsIHRydWUpO1xuICBzb2NrZXQuZW1pdCgnbmV3R2FtZScpO1xufVxuXG5mdW5jdGlvbiBjb25maXJtSm9pbkdhbWUoc29ja2V0LCByb29tQ29kZSkge1xuICBzb2NrZXQuZW1pdCgnam9pbkdhbWUnLCByb29tQ29kZSk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBpbml0VUksIGhpZGVJbml0aWFsU2NyZWVuIH0gZnJvbSAnLi91aSc7XG5pbXBvcnQgeyBpbml0U3BsYXNoIH0gZnJvbSAnLi9jb3JlL3NwbGFzaCc7XG5pbXBvcnQgeyBnYW1lQnVpbGRlciB9IGZyb20gJy4vY29yZS9nYW1lJztcbmltcG9ydCB7ICQsIHRvZ2dsZSB9IGZyb20gJy4vY29yZS9saWIvZG9tJztcblxuY29uc3Qgc29ja2V0ID0gcmVxdWlyZSgnc29ja2V0LmlvLWNsaWVudCcpKCdodHRwOi8vbG9jYWxob3N0OjMwMDAnKTtcblxuaW5pdFNwbGFzaCgpO1xuXG5sZXQgdWlJbml0UHJvbWlzZSA9IGluaXRVSShzb2NrZXQpO1xubGV0IGdhbWUgPSBnYW1lQnVpbGRlcigpO1xubGV0IGdhbWVDb250b2xsZXI7XG5sZXQgdG9nZ2xlV2FpdGluZ09wcG9uZW50ID0gKHN0YXR1cykgPT4ge1xuICB0b2dnbGUoJyNnYW1lLXN0YXJ0Jywgc3RhdHVzKTtcbiAgdG9nZ2xlKCcjd2FpdC1vcHBvbmVudC1tc2cnLCAhc3RhdHVzKTtcbn1cblxuXG51aUluaXRQcm9taXNlLnRoZW4oKCkgPT4ge1xuICBnYW1lLnRyaWdnZXIoKTtcbn0pXG5cbmdhbWUucHJvbWlzZS50aGVuKChpbnN0YW5jZSkgPT4ge1xuICBnYW1lQ29udG9sbGVyID0gaW5zdGFuY2U7XG59KVxuXG5zb2NrZXQub24oJ2dyZWV0aW5nJywgZ3JlZXRpbmdIYW5kbGVyKTtcblxuc29ja2V0Lm9uKCdnYW1lSW5pdCcsICgpID0+IHtcbiAgaGlkZUluaXRpYWxTY3JlZW4oKTtcbiAgZ2FtZUNvbnRvbGxlci5kcmF3Q291cnQoKTtcbn0pXG5cbnNvY2tldC5vbigncGxheWVySm9pbmVkJywgKHBsYXllck51bWJlcikgPT4ge1xuICBpZiAocGxheWVyTnVtYmVyID09PSAyKSB7XG4gICAgdG9nZ2xlV2FpdGluZ09wcG9uZW50KHRydWUpO1xuICB9XG59KVxuXG5zb2NrZXQub24oJ3Rvb01hbnlQbGF5ZXJzJywgKCkgPT4ge1xuICBhbGVydCgn6Kmy5oi/5Lq65pW45bey5ru/Jyk7XG59KVxuXG5zb2NrZXQub24oJ3Vua25vd25Db2RlJywgKCkgPT4ge1xuICBhbGVydCgn54Sh5pWI55qE5oi/6ZaT56K8Jyk7XG59KVxuXG5zb2NrZXQub24oJ2hvc3RDYW50QmVHdWVzdCcsICgpID0+IHtcbiAgYWxlcnQoJ+aIv+S4u+S4jeiDvemHjeikh+WKoOWFpeiHquW3semWi+WlveeahOaIv+mWk+WWlCcpO1xufSlcblxuZnVuY3Rpb24gZ3JlZXRpbmdIYW5kbGVyKCkge1xuXG59XG5cblxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sInNvdXJjZVJvb3QiOiIifQ==