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
/* harmony export */   "toggle": function() { return /* binding */ toggle; },
/* harmony export */   "toggleClass": function() { return /* binding */ toggleClass; }
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
/* harmony export */   "togglePopout": function() { return /* binding */ togglePopout; },
/* harmony export */   "hideInitialScreen": function() { return /* binding */ hideInitialScreen; },
/* harmony export */   "toggleWaitingOpponent": function() { return /* binding */ toggleWaitingOpponent; }
/* harmony export */ });
/* harmony import */ var _core_lib_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/lib/dom */ "./core/lib/dom.js");


function initUI(socket) {
  var createGameBtn = (0,_core_lib_dom__WEBPACK_IMPORTED_MODULE_0__.$)('#create-game');
  var showJoinGamePromptBtn = (0,_core_lib_dom__WEBPACK_IMPORTED_MODULE_0__.$)('#show-join-game-prompt');
  var confirmJoinGameBtn = (0,_core_lib_dom__WEBPACK_IMPORTED_MODULE_0__.$)('#confirm-join-game');
  var roomCodeInput = (0,_core_lib_dom__WEBPACK_IMPORTED_MODULE_0__.$)('#room-code-input');
  var roomCodeDisplay = (0,_core_lib_dom__WEBPACK_IMPORTED_MODULE_0__.$)('#room-code-display');
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
  var popout = (0,_core_lib_dom__WEBPACK_IMPORTED_MODULE_0__.$)(".popout#".concat(id));

  if (status) {
    popout.classList.add('popout--show');
  } else {
    popout.classList.remove('popout--show');
  }
}
function hideInitialScreen() {
  var initialScreen = (0,_core_lib_dom__WEBPACK_IMPORTED_MODULE_0__.$)('#initial-screen');
  initialScreen.style.display = 'none';
}
function toggleWaitingOpponent(status) {
  (0,_core_lib_dom__WEBPACK_IMPORTED_MODULE_0__.toggleClass)('#game-start', 'button--hidden', !status);
  (0,_core_lib_dom__WEBPACK_IMPORTED_MODULE_0__.toggle)('#waiting-opponent-msg', !status);
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
});
socket.on('greeting', greetingHandler);
socket.on('gameInit', function () {
  (0,_ui__WEBPACK_IMPORTED_MODULE_0__.hideInitialScreen)();
  gameContoller.drawCourt();
});
socket.on('playerJoined', function (playerNumber) {
  if (playerNumber === 2) {
    (0,_ui__WEBPACK_IMPORTED_MODULE_0__.toggleWaitingOpponent)(true);
    (0,_ui__WEBPACK_IMPORTED_MODULE_0__.togglePopout)('join-game-prompt', false);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vY29yZS9nYW1lLmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9jb3JlL2xpYi9iYXNlLmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9jb3JlL2xpYi9kb20uanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL2NvcmUvbGliL2Z1bmN0aW9uLmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9jb3JlL2xpYi9zaGFwZS5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vY29yZS9zcGxhc2guanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9iYWNrbzIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9iYXNlNjQtYXJyYXlidWZmZXIvbGliL2Jhc2U2NC1hcnJheWJ1ZmZlci5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL2NvbXBvbmVudC1lbWl0dGVyL2luZGV4LmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvZGVidWcvbm9kZV9tb2R1bGVzL21zL2luZGV4LmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvZGVidWcvc3JjL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9kZWJ1Zy9zcmMvY29tbW9uLmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9saWIvZ2xvYmFsVGhpcy5icm93c2VyLmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2xpYi9zb2NrZXQuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2xpYi90cmFuc3BvcnQuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2xpYi90cmFuc3BvcnRzL2luZGV4LmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9saWIvdHJhbnNwb3J0cy9wb2xsaW5nLWpzb25wLmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9saWIvdHJhbnNwb3J0cy9wb2xsaW5nLXhoci5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvbGliL3RyYW5zcG9ydHMvcG9sbGluZy5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvbGliL3RyYW5zcG9ydHMvd2Vic29ja2V0LWNvbnN0cnVjdG9yLmJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2xpYi90cmFuc3BvcnRzL3dlYnNvY2tldC5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvbGliL3V0aWwuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2xpYi94bWxodHRwcmVxdWVzdC5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1wYXJzZXIvbGliL2NvbW1vbnMuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tcGFyc2VyL2xpYi9kZWNvZGVQYWNrZXQuYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1wYXJzZXIvbGliL2VuY29kZVBhY2tldC5icm93c2VyLmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLXBhcnNlci9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9oYXMtY29ycy9pbmRleC5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL21lcnNlbm5lLXR3aXN0ZXIvc3JjL21lcnNlbm5lLXR3aXN0ZXIuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9wYXJzZXFzL2luZGV4LmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvcGFyc2V1cmkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tY2xpZW50L2J1aWxkL2luZGV4LmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLWNsaWVudC9idWlsZC9tYW5hZ2VyLmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLWNsaWVudC9idWlsZC9vbi5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1jbGllbnQvYnVpbGQvc29ja2V0LmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLWNsaWVudC9idWlsZC90eXBlZC1ldmVudHMuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tY2xpZW50L2J1aWxkL3VybC5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1wYXJzZXIvZGlzdC9iaW5hcnkuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tcGFyc2VyL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tcGFyc2VyL2Rpc3QvaXMtYmluYXJ5LmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMveWVhc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL3VpLmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL3NyYy9zY3NzL21haW4uc2NzcyJdLCJuYW1lcyI6WyJERUZBVUxUIiwiYmdDb2xvciIsImN1cnNvciIsImNvbG9yIiwicmFkaXVzIiwiRW5naW5lIiwiZWxlIiwiZGVmYXVsdENvbmZpZyIsImNvbmZpZyIsImluaXQiLCJiYWNrZ3JvdW5kIiwiZGF0YSIsImxvY2FsRGF0YSIsImkiLCJjbGllbnRzIiwibGVuZ3RoIiwiZHJhd0NpcmNsZSIsImN0eCIsIngiLCJ5IiwiZHJhd1RleHQiLCJDYW52YXMyREZ4QmFzZSIsImdhbWVCdWlsZGVyIiwiZ2FtZSIsImJvb3QiLCJkb2N1bWVudCIsImJvZHkiLCJ2aXJ0dWFsUGFyZW50IiwiaXMiLCJPYmplY3QiLCJhc3NpZ24iLCJmcmFtZUNvdW50IiwibW91c2UiLCJmcmFtZUlzUGF1c2VkIiwiaXNDbGljayIsImNhbnZhc1NpemVmaXhlZCIsInByZXZpb3VzRnJhbWVUaW1lIiwiRGF0ZSIsImdldFRpbWUiLCJpbml0QmFzZSIsInRhZ05hbWUiLCJjdnMiLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJnZXRDb250ZXh0IiwidHJpZ2dlclJlc2l6aW5nTWVjaGFuaXNtIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImRlYm91bmNlIiwidmlzaWJpbGl0eVN0YXRlIiwiYWRkRXZlbnRIYW5kbGVyIiwicmVmcmVzaEJhc2VGcmFtZUNvdW50ZXIiLCJ0aGlzRnJhbWVUaW1lIiwidGltZUVsYXBzZWQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjb250YWlucyIsImNhbnZhc1dpZHRoIiwiY2FudmFzSGVpZ2h0IiwidmlydHVhbFBhcmVudFZhbGlkYXRpb24iLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ3aWR0aCIsImhlaWdodCIsInBhcmVudEVsZW1lbnQiLCJzYXZlIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJyZXN0b3JlIiwiY2xlYXJSZWN0IiwiZSIsInBvcyIsInBvaW50ZXJFdmVudFRvWFkiLCJjdG9yIiwidGFyZ2V0RWxlIiwiZ2V0RWxlbWVudEJ5SWQiLCJ0cmlnZ2VyIiwiYm9vdFByb21pc2UiLCJQcm9taXNlIiwicmVzIiwicmVqIiwiaW5zdGFuY2UiLCJjb250cm9sbGVyIiwicHJvbWlzZSIsIiQiLCJzZWxlY3RvciIsInF1ZXJ5U2VsZWN0b3IiLCJ0b2dnbGUiLCJzdGF0dXMiLCJzdHlsZVN0ciIsInNldEF0dHJpYnV0ZSIsInRvZ2dsZUNsYXNzIiwiY2xhc3NuYW1lIiwiYWN0aW9uIiwiY2xhc3NMaXN0IiwiTWVyc2VubmVUd2lzdGVyIiwicmVxdWlyZSIsIk1UIiwiZnVuYyIsImRlbGF5IiwidGltZXIiLCIkdGhpcyIsImNvbnRleHQiLCJhcmdzIiwiYXJndW1lbnRzIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImFwcGx5IiwiYXJyIiwiYSIsIkFycmF5IiwiaXNBcnJheSIsIm9iaiIsInByb3RvdHlwZSIsInRvU3RyaW5nIiwiY2FsbCIsImluZGV4T2YiLCJwdGgiLCJoYXNPd25Qcm9wZXJ0eSIsInN2ZyIsIlNWR0VsZW1lbnQiLCJpbnAiLCJIVE1MSW5wdXRFbGVtZW50IiwiZG9tIiwibm9kZVR5cGUiLCJzdHIiLCJmbmMiLCJ1bmQiLCJuaWwiLCJoZXgiLCJ0ZXN0IiwicmdiYSIsInJnYiIsImhzbCIsImNvbCIsImtleSIsImRlZmF1bHRJbnN0YW5jZVNldHRpbmdzIiwiZGVmYXVsdFR3ZWVuU2V0dGluZ3MiLCJyYW5kb21XaXRoaW5SYW5nZSIsIm1pbiIsIm1heCIsInNlZWQiLCJyYW5kb20iLCJnZXREaXN0YW5jZSIsIngwIiwieTAiLCJ4MSIsInkxIiwiTWF0aCIsInNxcnQiLCJkZWdyZWVUb1JhZGlhbiIsImRlZ3JlZSIsIlBJIiwib3V0IiwidHlwZSIsInRvdWNoIiwib3JpZ2luYWxFdmVudCIsInRvdWNoZXMiLCJjaGFuZ2VkVG91Y2hlcyIsInBhZ2VYIiwicGFnZVkiLCJ0YXJnZXRIYXNQcm9wIiwidGFyZ2V0IiwicHJvcCIsImlzRW1wdHkiLCJ2YWwiLCJpc05hTiIsInJnYlRvUmdiYSIsInJnYlZhbHVlIiwiZXhlYyIsImhleFRvUmdiYSIsImhleFZhbHVlIiwicmd4IiwicmVwbGFjZSIsIm0iLCJyIiwiZyIsImIiLCJwYXJzZUludCIsImhzbFRvUmdiYSIsImhzbFZhbHVlIiwiaCIsInMiLCJsIiwiaHVlMnJnYiIsInAiLCJxIiwidCIsImNvbG9yVG9SZ2JhIiwiZ2V0Q2hhbm5lbFZhbHVlc0Zyb21SZ2JhIiwic3BsaXQiLCJtYXAiLCJkcmF3U3F1YXJlIiwiYWxwaGEiLCJnbG9iYWxBbHBoYSIsImJlZ2luUGF0aCIsImFyYyIsImNsb3NlUGF0aCIsImZpbGwiLCJkcmF3TGluZSIsInN0cm9rZUNvbG9yIiwic3Ryb2tlV2lkdGgiLCJzdHJva2VTdHlsZSIsImxpbmVXaWR0aCIsIm1vdmVUbyIsImxpbmVUbyIsInN0cm9rZSIsInRleHRDb250ZW50IiwiZm9udFNpemUiLCJmb250IiwiZmlsbFRleHQiLCJCQUxMX0FOSU1BVElPTl9ERUZBVUxUIiwiYWZ0ZXJJbWFnZSIsInNwZWVkWCIsInNwZWVkWSIsImFjY2VsZXJhdGlvblgiLCJhY2NlbGVyYXRpb25ZIiwiZnJpY3Rpb25YIiwiZnJpY3Rpb25ZIiwiU1BPVFNfQU5JTUFUSU9OX0RFRkFVTFQiLCJtaW5TaXplIiwibWF4U2l6ZSIsInBlcmlvZCIsInN0ZXAiLCJib3R0b21MYXllciIsInJvdyIsIkJhc2ljUmVmZWxlY3Rpb24iLCJjYW52YXMiLCJpbml0QmFsbCIsImFuaW1hdGVCYWxsIiwiYmFsbCIsImxvY2F0aW9uIiwic3BlZWQiLCJhY2NlbGVyYXRpb24iLCJmcmljdGlvbiIsImRyYXdJbWFnZSIsImRyYXdCYWxsIiwicmVmcmVzaExvY2F0aW9uIiwicmVmcmVzaFNwZWVkIiwiY2hlY2tCb3VuZGFyeSIsImJpbmQiLCJkdCIsIlNwb3RzQnVtcGluZyIsInNwb3RzU2l6ZSIsImV4cGFuZCIsImFuaW1hdGUiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXIiLCJkcmF3U3BvdHMiLCJqIiwiaW5pdFNwbGFzaCIsImluaXRpYWxTY3JlZW4iLCJ2aXJ0dWFsQ2FudmFzIiwic3BvdEFuaW1hdGlvbiIsInRoZW4iLCJtb2R1bGUiLCJleHBvcnRzIiwiQmFja29mZiIsIm9wdHMiLCJtcyIsImZhY3RvciIsImppdHRlciIsImF0dGVtcHRzIiwiZHVyYXRpb24iLCJwb3ciLCJyYW5kIiwiZGV2aWF0aW9uIiwiZmxvb3IiLCJyZXNldCIsInNldE1pbiIsInNldE1heCIsInNldEppdHRlciIsImNoYXJzIiwiYXJyYXlidWZmZXIiLCJieXRlcyIsIlVpbnQ4QXJyYXkiLCJsZW4iLCJiYXNlNjQiLCJzdWJzdHJpbmciLCJidWZmZXJMZW5ndGgiLCJlbmNvZGVkMSIsImVuY29kZWQyIiwiZW5jb2RlZDMiLCJlbmNvZGVkNCIsIkFycmF5QnVmZmVyIiwiRW1pdHRlciIsIm1peGluIiwib24iLCJldmVudCIsImZuIiwiX2NhbGxiYWNrcyIsInB1c2giLCJvbmNlIiwib2ZmIiwicmVtb3ZlTGlzdGVuZXIiLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2FsbGJhY2tzIiwiY2IiLCJzcGxpY2UiLCJlbWl0Iiwic2xpY2UiLCJsaXN0ZW5lcnMiLCJoYXNMaXN0ZW5lcnMiLCJkIiwidyIsIm9wdGlvbnMiLCJwYXJzZSIsImlzRmluaXRlIiwibG9uZyIsImZtdExvbmciLCJmbXRTaG9ydCIsIkVycm9yIiwiSlNPTiIsInN0cmluZ2lmeSIsIlN0cmluZyIsIm1hdGNoIiwibiIsInBhcnNlRmxvYXQiLCJ0b0xvd2VyQ2FzZSIsInVuZGVmaW5lZCIsIm1zQWJzIiwiYWJzIiwicm91bmQiLCJwbHVyYWwiLCJuYW1lIiwiaXNQbHVyYWwiLCJmb3JtYXRBcmdzIiwibG9hZCIsInVzZUNvbG9ycyIsImxvY2Fsc3RvcmFnZSIsIndhcm5lZCIsImNvbnNvbGUiLCJ3YXJuIiwicHJvY2VzcyIsIl9fbndqcyIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImRvY3VtZW50RWxlbWVudCIsInN0eWxlIiwiV2Via2l0QXBwZWFyYW5jZSIsImZpcmVidWciLCJleGNlcHRpb24iLCJ0YWJsZSIsIlJlZ0V4cCIsIiQxIiwibmFtZXNwYWNlIiwiaHVtYW5pemUiLCJkaWZmIiwiYyIsImluZGV4IiwibGFzdEMiLCJkZWJ1ZyIsImxvZyIsIm5hbWVzcGFjZXMiLCJzdG9yYWdlIiwic2V0SXRlbSIsInJlbW92ZUl0ZW0iLCJlcnJvciIsImdldEl0ZW0iLCJlbnYiLCJERUJVRyIsImxvY2FsU3RvcmFnZSIsImZvcm1hdHRlcnMiLCJ2IiwibWVzc2FnZSIsInNldHVwIiwiY3JlYXRlRGVidWciLCJkZWZhdWx0IiwiY29lcmNlIiwiZGlzYWJsZSIsImVuYWJsZSIsImVuYWJsZWQiLCJkZXN0cm95Iiwia2V5cyIsImZvckVhY2giLCJuYW1lcyIsInNraXBzIiwic2VsZWN0Q29sb3IiLCJoYXNoIiwiY2hhckNvZGVBdCIsImNvbG9ycyIsInByZXZUaW1lIiwiZW5hYmxlT3ZlcnJpZGUiLCJzZWxmIiwiY3VyciIsIk51bWJlciIsInByZXYiLCJ1bnNoaWZ0IiwiZm9ybWF0IiwiZm9ybWF0dGVyIiwibG9nRm4iLCJleHRlbmQiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJnZXQiLCJzZXQiLCJkZWxpbWl0ZXIiLCJuZXdEZWJ1ZyIsInN1YnN0ciIsInRvTmFtZXNwYWNlIiwiam9pbiIsInJlZ2V4cCIsInN0YWNrIiwiRnVuY3Rpb24iLCJTb2NrZXQiLCJ1cmkiLCJwcm90b2NvbCIsInRyYW5zcG9ydHMiLCJwYXJzZXIiLCJwYXJzZXVyaSIsInBhcnNlcXMiLCJob3N0bmFtZSIsImhvc3QiLCJzZWN1cmUiLCJwb3J0IiwicXVlcnkiLCJyZWFkeVN0YXRlIiwid3JpdGVCdWZmZXIiLCJwcmV2QnVmZmVyTGVuIiwicGF0aCIsImFnZW50Iiwid2l0aENyZWRlbnRpYWxzIiwidXBncmFkZSIsImpzb25wIiwidGltZXN0YW1wUGFyYW0iLCJyZW1lbWJlclVwZ3JhZGUiLCJyZWplY3RVbmF1dGhvcml6ZWQiLCJwZXJNZXNzYWdlRGVmbGF0ZSIsInRocmVzaG9sZCIsInRyYW5zcG9ydE9wdGlvbnMiLCJjbG9zZU9uQmVmb3JldW5sb2FkIiwiZGVjb2RlIiwiaWQiLCJ1cGdyYWRlcyIsInBpbmdJbnRlcnZhbCIsInBpbmdUaW1lb3V0IiwicGluZ1RpbWVvdXRUaW1lciIsInRyYW5zcG9ydCIsImNsb3NlIiwib2ZmbGluZUV2ZW50TGlzdGVuZXIiLCJvbkNsb3NlIiwib3BlbiIsImNsb25lIiwiRUlPIiwic2lkIiwic29ja2V0IiwicHJpb3JXZWJzb2NrZXRTdWNjZXNzIiwiY3JlYXRlVHJhbnNwb3J0Iiwic2hpZnQiLCJzZXRUcmFuc3BvcnQiLCJvbkRyYWluIiwib25QYWNrZXQiLCJvbkVycm9yIiwicHJvYmUiLCJmYWlsZWQiLCJvblRyYW5zcG9ydE9wZW4iLCJzZW5kIiwibXNnIiwidXBncmFkaW5nIiwicGF1c2UiLCJjbGVhbnVwIiwiZmx1c2giLCJlcnIiLCJmcmVlemVUcmFuc3BvcnQiLCJvbmVycm9yIiwib25UcmFuc3BvcnRDbG9zZSIsIm9uY2xvc2UiLCJvbnVwZ3JhZGUiLCJ0byIsInBhY2tldCIsIm9uSGFuZHNoYWtlIiwicmVzZXRQaW5nVGltZW91dCIsInNlbmRQYWNrZXQiLCJjb2RlIiwiZmlsdGVyVXBncmFkZXMiLCJvbk9wZW4iLCJhdXRvVW5yZWYiLCJ1bnJlZiIsIndyaXRhYmxlIiwiY29tcHJlc3MiLCJjbGVhbnVwQW5kQ2xvc2UiLCJ3YWl0Rm9yVXBncmFkZSIsInJlYXNvbiIsImRlc2MiLCJwaW5nSW50ZXJ2YWxUaW1lciIsImZpbHRlcmVkVXBncmFkZXMiLCJvIiwiVHJhbnNwb3J0IiwiZGVzY3JpcHRpb24iLCJkb09wZW4iLCJkb0Nsb3NlIiwicGFja2V0cyIsIndyaXRlIiwiZGVjb2RlUGFja2V0IiwiYmluYXJ5VHlwZSIsIlhNTEh0dHBSZXF1ZXN0IiwiWEhSIiwiSlNPTlAiLCJ3ZWJzb2NrZXQiLCJwb2xsaW5nIiwieGhyIiwieGQiLCJ4cyIsImlzU1NMIiwieGRvbWFpbiIsInhzY2hlbWUiLCJmb3JjZUpTT05QIiwiUG9sbGluZyIsImdsb2JhbFRoaXMiLCJyTmV3bGluZSIsInJFc2NhcGVkTmV3bGluZSIsIkpTT05QUG9sbGluZyIsIl9fX2VpbyIsIm9uRGF0YSIsInNjcmlwdCIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsImZvcm0iLCJpZnJhbWUiLCJhc3luYyIsInNyYyIsImluc2VydEF0IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJpbnNlcnRCZWZvcmUiLCJoZWFkIiwiaXNVQWdlY2tvIiwiYXJlYSIsImlmcmFtZUlkIiwiY2xhc3NOYW1lIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwibWV0aG9kIiwiY29tcGxldGUiLCJpbml0SWZyYW1lIiwiaHRtbCIsInZhbHVlIiwic3VibWl0IiwiYXR0YWNoRXZlbnQiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJvbmxvYWQiLCJwaWNrIiwiZW1wdHkiLCJoYXNYSFIyIiwicmVzcG9uc2VUeXBlIiwiZm9yY2VCYXNlNjQiLCJzdXBwb3J0c0JpbmFyeSIsIlJlcXVlc3QiLCJyZXEiLCJyZXF1ZXN0IiwicG9sbFhociIsImNyZWF0ZSIsImV4dHJhSGVhZGVycyIsInNldERpc2FibGVIZWFkZXJDaGVjayIsInNldFJlcXVlc3RIZWFkZXIiLCJyZXF1ZXN0VGltZW91dCIsInRpbWVvdXQiLCJoYXNYRFIiLCJvbkxvYWQiLCJyZXNwb25zZVRleHQiLCJyZXF1ZXN0c0NvdW50IiwicmVxdWVzdHMiLCJvblN1Y2Nlc3MiLCJmcm9tRXJyb3IiLCJhYm9ydCIsIlhEb21haW5SZXF1ZXN0IiwiZW5hYmxlc1hEUiIsInVubG9hZEhhbmRsZXIiLCJ0ZXJtaW5hdGlvbkV2ZW50IiwieWVhc3QiLCJwb2xsIiwib25QYXVzZSIsInRvdGFsIiwiZG9Qb2xsIiwiY2FsbGJhY2siLCJkZWNvZGVQYXlsb2FkIiwiZW5jb2RlUGF5bG9hZCIsImRvV3JpdGUiLCJzY2hlbWEiLCJ0aW1lc3RhbXBSZXF1ZXN0cyIsImI2NCIsImVuY29kZSIsImlwdjYiLCJXZWJTb2NrZXQiLCJNb3pXZWJTb2NrZXQiLCJ1c2luZ0Jyb3dzZXJXZWJTb2NrZXQiLCJkZWZhdWx0QmluYXJ5VHlwZSIsImlzUmVhY3ROYXRpdmUiLCJwcm9kdWN0IiwiV1MiLCJjaGVjayIsInByb3RvY29scyIsImhlYWRlcnMiLCJ3cyIsImFkZEV2ZW50TGlzdGVuZXJzIiwib25vcGVuIiwiX3NvY2tldCIsIm9ubWVzc2FnZSIsImV2IiwibGFzdFBhY2tldCIsImVuY29kZVBhY2tldCIsIkJ1ZmZlciIsImJ5dGVMZW5ndGgiLCJhdHRyIiwicmVkdWNlIiwiYWNjIiwiayIsImhhc0NPUlMiLCJjb25jYXQiLCJQQUNLRVRfVFlQRVMiLCJQQUNLRVRfVFlQRVNfUkVWRVJTRSIsIkVSUk9SX1BBQ0tFVCIsIndpdGhOYXRpdmVBcnJheUJ1ZmZlciIsImJhc2U2NGRlY29kZXIiLCJlbmNvZGVkUGFja2V0IiwibWFwQmluYXJ5IiwiY2hhckF0IiwiZGVjb2RlQmFzZTY0UGFja2V0IiwicGFja2V0VHlwZSIsImRlY29kZWQiLCJCbG9iIiwid2l0aE5hdGl2ZUJsb2IiLCJpc1ZpZXciLCJidWZmZXIiLCJlbmNvZGVCbG9iQXNCYXNlNjQiLCJmaWxlUmVhZGVyIiwiRmlsZVJlYWRlciIsImNvbnRlbnQiLCJyZXN1bHQiLCJyZWFkQXNEYXRhVVJMIiwiU0VQQVJBVE9SIiwiZnJvbUNoYXJDb2RlIiwiZW5jb2RlZFBhY2tldHMiLCJjb3VudCIsImVuY29kZWRQYXlsb2FkIiwiZGVjb2RlZFBhY2tldCIsIk4iLCJNIiwiTUFUUklYX0EiLCJVUFBFUl9NQVNLIiwiTE9XRVJfTUFTSyIsIm10IiwibXRpIiwiY29uc3RydWN0b3IiLCJpbml0X2J5X2FycmF5IiwiaW5pdF9zZWVkIiwiaW5pdF9rZXkiLCJrZXlfbGVuZ3RoIiwicmFuZG9tX2ludCIsIm1hZzAxIiwia2siLCJyYW5kb21faW50MzEiLCJyYW5kb21faW5jbCIsInJhbmRvbV9leGNsIiwicmFuZG9tX2xvbmciLCJlbmNvZGVVUklDb21wb25lbnQiLCJxcyIsInFyeSIsInBhaXJzIiwicGFpciIsImRlY29kZVVSSUNvbXBvbmVudCIsInJlIiwicGFydHMiLCJzb3VyY2UiLCJhdXRob3JpdHkiLCJpcHY2dXJpIiwicGF0aE5hbWVzIiwicXVlcnlLZXkiLCJyZWd4IiwiJDAiLCIkMiIsInVybF8xIiwibWFuYWdlcl8xIiwibG9va3VwIiwiY2FjaGUiLCJwYXJzZWQiLCJ1cmwiLCJzYW1lTmFtZXNwYWNlIiwibmV3Q29ubmVjdGlvbiIsImZvcmNlTmV3IiwibXVsdGlwbGV4IiwiaW8iLCJNYW5hZ2VyIiwic29ja2V0X2lvX3BhcnNlcl8xIiwibWFuYWdlcl8yIiwic29ja2V0XzEiLCJlaW8iLCJvbl8xIiwidHlwZWRfZXZlbnRzXzEiLCJuc3BzIiwic3VicyIsInJlY29ubmVjdGlvbiIsInJlY29ubmVjdGlvbkF0dGVtcHRzIiwiSW5maW5pdHkiLCJyZWNvbm5lY3Rpb25EZWxheSIsInJlY29ubmVjdGlvbkRlbGF5TWF4IiwicmFuZG9taXphdGlvbkZhY3RvciIsImJhY2tvZmYiLCJfcmVhZHlTdGF0ZSIsIl9wYXJzZXIiLCJlbmNvZGVyIiwiRW5jb2RlciIsImRlY29kZXIiLCJEZWNvZGVyIiwiX2F1dG9Db25uZWN0IiwiYXV0b0Nvbm5lY3QiLCJfcmVjb25uZWN0aW9uIiwiX3JlY29ubmVjdGlvbkF0dGVtcHRzIiwiX2EiLCJfcmVjb25uZWN0aW9uRGVsYXkiLCJfcmFuZG9taXphdGlvbkZhY3RvciIsIl9yZWNvbm5lY3Rpb25EZWxheU1heCIsIl90aW1lb3V0IiwiX3JlY29ubmVjdGluZyIsInJlY29ubmVjdCIsImVuZ2luZSIsInNraXBSZWNvbm5lY3QiLCJvcGVuU3ViRGVzdHJveSIsImVycm9yU3ViIiwiZW1pdFJlc2VydmVkIiwibWF5YmVSZWNvbm5lY3RPbk9wZW4iLCJzdWJEZXN0cm95Iiwib25waW5nIiwib25kYXRhIiwib25kZWNvZGVkIiwiYWRkIiwibnNwIiwiYWN0aXZlIiwiX2Nsb3NlIiwib25yZWNvbm5lY3QiLCJhdHRlbXB0IiwiU3RyaWN0RXZlbnRFbWl0dGVyIiwiUkVTRVJWRURfRVZFTlRTIiwiZnJlZXplIiwiY29ubmVjdCIsImNvbm5lY3RfZXJyb3IiLCJkaXNjb25uZWN0IiwiZGlzY29ubmVjdGluZyIsIm5ld0xpc3RlbmVyIiwicmVjZWl2ZUJ1ZmZlciIsInNlbmRCdWZmZXIiLCJpZHMiLCJhY2tzIiwiZmxhZ3MiLCJjb25uZWN0ZWQiLCJkaXNjb25uZWN0ZWQiLCJhdXRoIiwib25wYWNrZXQiLCJzdWJFdmVudHMiLCJQYWNrZXRUeXBlIiwiRVZFTlQiLCJwb3AiLCJpc1RyYW5zcG9ydFdyaXRhYmxlIiwiZGlzY2FyZFBhY2tldCIsInZvbGF0aWxlIiwiX3BhY2tldCIsIkNPTk5FQ1QiLCJvbmNvbm5lY3QiLCJvbmV2ZW50IiwiQklOQVJZX0VWRU5UIiwiQUNLIiwib25hY2siLCJCSU5BUllfQUNLIiwiRElTQ09OTkVDVCIsIm9uZGlzY29ubmVjdCIsIkNPTk5FQ1RfRVJST1IiLCJhY2siLCJlbWl0RXZlbnQiLCJfYW55TGlzdGVuZXJzIiwibGlzdGVuZXIiLCJzZW50IiwiZW1pdEJ1ZmZlcmVkIiwibG9jIiwiaHJlZiIsImlzX2JpbmFyeV8xIiwiZGVjb25zdHJ1Y3RQYWNrZXQiLCJidWZmZXJzIiwicGFja2V0RGF0YSIsInBhY2siLCJfZGVjb25zdHJ1Y3RQYWNrZXQiLCJhdHRhY2htZW50cyIsImlzQmluYXJ5IiwicGxhY2Vob2xkZXIiLCJfcGxhY2Vob2xkZXIiLCJudW0iLCJuZXdEYXRhIiwicmVjb25zdHJ1Y3RQYWNrZXQiLCJfcmVjb25zdHJ1Y3RQYWNrZXQiLCJiaW5hcnlfMSIsImhhc0JpbmFyeSIsImVuY29kZUFzQmluYXJ5IiwiZW5jb2RlQXNTdHJpbmciLCJkZWNvbnN0cnVjdGlvbiIsImRlY29kZVN0cmluZyIsInJlY29uc3RydWN0b3IiLCJCaW5hcnlSZWNvbnN0cnVjdG9yIiwidGFrZUJpbmFyeURhdGEiLCJzdGFydCIsImJ1ZiIsIm5leHQiLCJwYXlsb2FkIiwidHJ5UGFyc2UiLCJpc1BheWxvYWRWYWxpZCIsImZpbmlzaGVkUmVjb25zdHJ1Y3Rpb24iLCJyZWNvblBhY2siLCJiaW5EYXRhIiwid2l0aE5hdGl2ZUZpbGUiLCJGaWxlIiwidG9KU09OIiwiYWxwaGFiZXQiLCJlbmNvZGVkIiwibm93IiwiaW5pdFVJIiwiY3JlYXRlR2FtZUJ0biIsInNob3dKb2luR2FtZVByb21wdEJ0biIsImNvbmZpcm1Kb2luR2FtZUJ0biIsInJvb21Db2RlSW5wdXQiLCJyb29tQ29kZURpc3BsYXkiLCJpbml0VHJpZ2dlciIsImluaXRVSVByb21pc2UiLCJ0b2dnbGVQb3BvdXQiLCJuZXdHYW1lIiwicm9vbUNvZGUiLCJjb25maXJtSm9pbkdhbWUiLCJpbm5lckhUTUwiLCJwb3BvdXQiLCJyZW1vdmUiLCJoaWRlSW5pdGlhbFNjcmVlbiIsImRpc3BsYXkiLCJ0b2dnbGVXYWl0aW5nT3Bwb25lbnQiLCJ1aUluaXRQcm9taXNlIiwiZ2FtZUNvbnRvbGxlciIsImdyZWV0aW5nSGFuZGxlciIsImRyYXdDb3VydCIsInBsYXllck51bWJlciIsImFsZXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsT0FBTyxHQUFHO0FBQ2RDLFNBQU8sRUFBRSxpQkFESztBQUVkQyxRQUFNLEVBQUU7QUFDTkMsU0FBSyxFQUFFLE1BREQ7QUFFTkMsVUFBTSxFQUFFO0FBRkY7QUFGTSxDQUFoQjtBQVFPLElBQU1DLE1BQWI7QUFBQTs7QUFBQTs7QUFDRSxrQkFBWUMsR0FBWixFQUFpQkMsYUFBakIsRUFBZ0NDLE1BQWhDLEVBQXdDO0FBQUE7O0FBQUE7O0FBQ3RDLDhCQUFNRixHQUFOLEVBQVdDLGFBQVgsRUFBMEJDLE1BQTFCOztBQUNBLFVBQUtDLElBQUw7O0FBQ0EsVUFBS0wsTUFBTCxHQUFjLEVBQWQ7QUFIc0M7QUFJdkM7O0FBTEg7QUFBQTtBQUFBLFdBTUUsZ0JBQU87QUFDTCxXQUFLTSxVQUFMLENBQWdCLEtBQUtGLE1BQUwsQ0FBWVAsT0FBNUI7QUFDRDtBQVJIO0FBQUE7QUFBQSxXQVNFLGNBQUtVLElBQUwsRUFBV0MsU0FBWCxFQUFzQjtBQUNwQixXQUFLRixVQUFMLENBQWdCLEtBQUtGLE1BQUwsQ0FBWVAsT0FBNUI7O0FBQ0EsV0FBSyxJQUFJWSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRixJ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O0FBQzlCaXZCLGVBQWEsR0FBR2p2QixRQUFoQjtBQUNELENBRkQ7QUFJQStXLE1BQU0sQ0FBQ2hLLEVBQVAsQ0FBVSxVQUFWLEVBQXNCbWlCLGVBQXRCO0FBRUFuWSxNQUFNLENBQUNoSyxFQUFQLENBQVUsVUFBVixFQUFzQixZQUFNO0FBQzFCOGhCLHdEQUFpQjtBQUNqQkksZUFBYSxDQUFDRSxTQUFkO0FBQ0QsQ0FIRDtBQUtBcFksTUFBTSxDQUFDaEssRUFBUCxDQUFVLGNBQVYsRUFBMEIsVUFBQ3FpQixZQUFELEVBQWtCO0FBQzFDLE1BQUlBLFlBQVksS0FBSyxDQUFyQixFQUF3QjtBQUN0QkwsOERBQXFCLENBQUMsSUFBRCxDQUFyQjtBQUNBVCxxREFBWSxDQUFDLGtCQUFELEVBQXFCLEtBQXJCLENBQVo7QUFDRDtBQUNGLENBTEQ7QUFPQXZYLE1BQU0sQ0FBQ2hLLEVBQVAsQ0FBVSxnQkFBVixFQUE0QixZQUFNO0FBQ2hDc2lCLE9BQUssQ0FBQyxRQUFELENBQUw7QUFDRCxDQUZEO0FBSUF0WSxNQUFNLENBQUNoSyxFQUFQLENBQVUsYUFBVixFQUF5QixZQUFNO0FBQzdCc2lCLE9BQUssQ0FBQyxRQUFELENBQUw7QUFDRCxDQUZEO0FBSUF0WSxNQUFNLENBQUNoSyxFQUFQLENBQVUsaUJBQVYsRUFBNkIsWUFBTTtBQUNqQ3NpQixPQUFLLENBQUMsa0JBQUQsQ0FBTDtBQUNELENBRkQ7O0FBSUEsU0FBU0gsZUFBVCxHQUEyQixDQUUxQixDOzs7Ozs7Ozs7QUNuREQiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhbnZhczJERnhCYXNlLCBib290IH0gZnJvbSAnLi9saWIvYmFzZSc7XG5pbXBvcnQgeyBkcmF3Q2lyY2xlLCBkcmF3VGV4dCB9IGZyb20gJy4vbGliL3NoYXBlJztcblxuY29uc3QgREVGQVVMVCA9IHtcbiAgYmdDb2xvcjogJ3JnYmEoMCwwLDAsMC4zKScsXG4gIGN1cnNvcjoge1xuICAgIGNvbG9yOiAnI2ZmZicsXG4gICAgcmFkaXVzOiA1MFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBFbmdpbmUgZXh0ZW5kcyBDYW52YXMyREZ4QmFzZSB7XG4gIGNvbnN0cnVjdG9yKGVsZSwgZGVmYXVsdENvbmZpZywgY29uZmlnKSB7XG4gICAgc3VwZXIoZWxlLCBkZWZhdWx0Q29uZmlnLCBjb25maWcpXG4gICAgdGhpcy5pbml0KCk7XG4gICAgdGhpcy5yYWRpdXMgPSA1MDtcbiAgfVxuICBpbml0KCkge1xuICAgIHRoaXMuYmFja2dyb3VuZCh0aGlzLmNvbmZpZy5iZ0NvbG9yKTtcbiAgfVxuICBkcmF3KGRhdGEsIGxvY2FsRGF0YSkge1xuICAgIHRoaXMuYmFja2dyb3VuZCh0aGlzLmNvbmZpZy5iZ0NvbG9yKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEuY2xpZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgZHJhd0NpcmNsZShcbiAgICAgICAgdGhpcy5jdHgsXG4gICAgICAgIGRhdGEuY2xpZW50c1tpXS5jdXJzb3IueCxcbiAgICAgICAgZGF0YS5jbGllbnRzW2ldLmN1cnNvci55LFxuICAgICAgICB0aGlzLmNvbmZpZy5jdXJzb3IucmFkaXVzLFxuICAgICAgICB0aGlzLmNvbmZpZy5jdXJzb3IuY29sb3JcbiAgICAgIClcblxuICAgICAgZHJhd1RleHQoXG4gICAgICAgIHRoaXMuY3R4LCBgUGxheWVyJHtpfWAsXG4gICAgICAgIGRhdGEuY2xpZW50c1tpXS5jdXJzb3IueCArIHRoaXMuY29uZmlnLmN1cnNvci5yYWRpdXMsXG4gICAgICAgIGRhdGEuY2xpZW50c1tpXS5jdXJzb3IueSArIHRoaXMuY29uZmlnLmN1cnNvci5yYWRpdXMgLyAyIC0gMTAsXG4gICAgICAgICcjZmZmJyxcbiAgICAgICAgMTIsXG4gICAgICAgICdBcmlhbCdcbiAgICAgIClcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdhbWVCdWlsZGVyKCkge1xuICBsZXQgZ2FtZSA9IGJvb3QoRW5naW5lLCBERUZBVUxULCB7fSwgZG9jdW1lbnQuYm9keSk7XG4gIHJldHVybiBnYW1lO1xufVxuIiwiaW1wb3J0IHsgZGVib3VuY2UsIGlzLCBwb2ludGVyRXZlbnRUb1hZIH0gZnJvbSAnLi9mdW5jdGlvbic7XG5cbmV4cG9ydCBjbGFzcyBDYW52YXMyREZ4QmFzZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIGVsZSwgY29uZmlnLCBkZWZhdWx0Q29uZmlnLCB2aXJ0dWFsUGFyZW50XG4gICkge1xuICAgIGNvbmZpZyA9IGlzLm9iaihjb25maWcpID8gY29uZmlnIDoge307XG4gICAgZGVmYXVsdENvbmZpZyA9IGlzLm9iaihkZWZhdWx0Q29uZmlnKSA/IGRlZmF1bHRDb25maWcgOiB7fTtcbiAgICB0aGlzLmNvbmZpZyA9IE9iamVjdC5hc3NpZ24oZGVmYXVsdENvbmZpZywgY29uZmlnKTtcbiAgICB0aGlzLmVsZSA9IGVsZTtcbiAgICB0aGlzLmZyYW1lQ291bnQgPSAwO1xuICAgIHRoaXMubW91c2UgPSB7XG4gICAgICB4OiAwLFxuICAgICAgeTogMFxuICAgIH07XG4gICAgdGhpcy52aXJ0dWFsUGFyZW50ID0gdmlydHVhbFBhcmVudDtcbiAgICB0aGlzLmN0eCA9IG51bGw7XG4gICAgdGhpcy5mcmFtZUlzUGF1c2VkID0gZmFsc2U7XG4gICAgdGhpcy5pc0NsaWNrID0gZmFsc2U7XG4gICAgdGhpcy5jYW52YXNTaXplZml4ZWQgPSBmYWxzZTtcbiAgICB0aGlzLnByZXZpb3VzRnJhbWVUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgdGhpcy5pbml0QmFzZSgpO1xuICB9XG4gIGluaXRCYXNlKCkge1xuXG4gICAgaWYgKHRoaXMuZWxlLnRhZ05hbWUgIT09ICdDQU5WQVMnKSB7XG4gICAgICBjb25zdCBjdnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcblxuICAgICAgdGhpcy5lbGUuYXBwZW5kQ2hpbGQoY3ZzKTtcblxuICAgICAgdGhpcy5jdnMgPSBjdnM7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5jdnMgPSB0aGlzLmVsZTtcbiAgICB9XG5cbiAgICB0aGlzLmN0eCA9IHRoaXMuY3ZzLmdldENvbnRleHQoJzJkJyk7XG4gICAgdGhpcy50cmlnZ2VyUmVzaXppbmdNZWNoYW5pc20oKTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBkZWJvdW5jZSgoKSA9PiB7XG4gICAgICB0aGlzLnRyaWdnZXJSZXNpemluZ01lY2hhbmlzbSgpO1xuICAgIH0sIDUwMCkpO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Zpc2liaWxpdHljaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBpZiAoZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlICE9PSBcInZpc2libGVcIikge1xuICAgICAgICB0aGlzLmZyYW1lSXNQYXVzZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5hZGRFdmVudEhhbmRsZXIoKTtcblxuICAgIHRoaXMucmVmcmVzaEJhc2VGcmFtZUNvdW50ZXIoKTtcblxuICB9XG4gIHJlZnJlc2hCYXNlRnJhbWVDb3VudGVyKCkge1xuICAgIGxldCB0aGlzRnJhbWVUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgdGhpcy50aW1lRWxhcHNlZCA9ICh0aGlzRnJhbWVUaW1lIC0gdGhpcy5wcmV2aW91c0ZyYW1lVGltZSkgLyAxMDAwO1xuICAgIGlmICh0aGlzLmZyYW1lSXNQYXVzZWQpIHtcbiAgICAgIHRoaXMudGltZUVsYXBzZWQgPSAwO1xuICAgICAgdGhpcy5mcmFtZUlzUGF1c2VkID0gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMuZnJhbWVDb3VudCArPSAxO1xuICAgIHRoaXMucHJldmlvdXNGcmFtZVRpbWUgPSB0aGlzRnJhbWVUaW1lXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIHRoaXMucmVmcmVzaEJhc2VGcmFtZUNvdW50ZXIoKTtcbiAgICB9KVxuICB9XG5cbiAgdmlydHVhbFBhcmVudFZhbGlkYXRpb24oKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmJvZHkuY29udGFpbnModGhpcy52aXJ0dWFsUGFyZW50KSB8fCB0aGlzLnZpcnR1YWxQYXJlbnQgPT09IGRvY3VtZW50LmJvZHk7XG4gIH1cblxuICB0cmlnZ2VyUmVzaXppbmdNZWNoYW5pc20oKSB7XG4gICAgaWYgKHRoaXMuY2FudmFzU2l6ZWZpeGVkKSByZXR1cm47XG4gICAgaWYgKHRoaXMuZWxlLnRhZ05hbWUgIT09ICdDQU5WQVMnKSB7XG4gICAgICBsZXQgY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodDtcbiAgICAgIGlmICh0aGlzLnZpcnR1YWxQYXJlbnRWYWxpZGF0aW9uKCkpIHtcbiAgICAgICAgY2FudmFzV2lkdGggPSB0aGlzLnZpcnR1YWxQYXJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gICAgICAgIGNhbnZhc0hlaWdodCA9IHRoaXMudmlydHVhbFBhcmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgY2FudmFzV2lkdGggPSB0aGlzLmVsZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcbiAgICAgICAgY2FudmFzSGVpZ2h0ID0gdGhpcy5lbGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuICAgICAgfVxuICAgICAgdGhpcy5jdnMud2lkdGggPSBjYW52YXNXaWR0aDtcbiAgICAgIHRoaXMuY3ZzLmhlaWdodCA9IGNhbnZhc0hlaWdodDtcblxuXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgbGV0IGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQ7XG4gICAgICBpZiAodGhpcy52aXJ0dWFsUGFyZW50VmFsaWRhdGlvbigpKSB7XG4gICAgICAgIGNhbnZhc1dpZHRoID0gdGhpcy52aXJ0dWFsUGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICAgICAgICBjYW52YXNIZWlnaHQgPSB0aGlzLnZpcnR1YWxQYXJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNhbnZhc1dpZHRoID0gdGhpcy5jdnMucGFyZW50RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcbiAgICAgICAgY2FudmFzSGVpZ2h0ID0gdGhpcy5jdnMucGFyZW50RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG4gICAgICB9XG4gICAgICB0aGlzLmN2cy53aWR0aCA9IGNhbnZhc1dpZHRoO1xuICAgICAgdGhpcy5jdnMuaGVpZ2h0ID0gY2FudmFzSGVpZ2h0O1xuXG4gICAgfVxuICB9XG5cbiAgc2V0Q2FudmFzU2l6ZSh3aWR0aCwgaGVpZ2h0KSB7XG4gICAgdGhpcy5jYW52YXNTaXplZml4ZWQgPSB0cnVlO1xuICAgIHRoaXMuY3ZzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5jdnMuaGVpZ2h0ID0gaGVpZ2h0O1xuICB9XG5cbiAgYmFja2dyb3VuZChjb2xvcikge1xuICAgIHRoaXMuY3R4LnNhdmUoKTtcbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICB0aGlzLmN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLmN2cy53aWR0aCwgdGhpcy5jdnMuaGVpZ2h0KTtcbiAgICB0aGlzLmN0eC5yZXN0b3JlKCk7XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jdnMud2lkdGgsIHRoaXMuY3ZzLmhlaWdodCk7XG4gIH1cblxuICBhZGRFdmVudEhhbmRsZXIoKSB7XG5cbiAgICB0aGlzLmN2cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMuaXNDbGljayA9IHRydWU7XG4gICAgfSlcbiAgICB0aGlzLmN2cy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgKCkgPT4ge1xuICAgICAgdGhpcy5pc0NsaWNrID0gdHJ1ZTtcblxuICAgIH0pXG5cbiAgICB0aGlzLmN2cy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZSkgPT4ge1xuICAgICAgbGV0IHBvcyA9IHBvaW50ZXJFdmVudFRvWFkoZSk7XG4gICAgICB0aGlzLm1vdXNlID0ge1xuICAgICAgICB4OiBwb3MueCxcbiAgICAgICAgeTogcG9zLnlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5jdnMuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgKGUpID0+IHtcbiAgICAgIGxldCBwb3MgPSBwb2ludGVyRXZlbnRUb1hZKGUpO1xuICAgICAgdGhpcy5tb3VzZSA9IHtcbiAgICAgICAgeDogcG9zLngsXG4gICAgICAgIHk6IHBvcy55XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib290KGN0b3IsIGRlZmF1bHRDb25maWcsIGNvbmZpZywgdGFyZ2V0RWxlLCB2aXJ0dWFsUGFyZW50KSB7XG4gIGxldCBjdnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyk7XG4gIGN2cyA9IGN2cyA/IGN2cyA6IGRvY3VtZW50LmJvZHk7XG4gIGxldCBlbGUgPSB0YXJnZXRFbGUgPyB0YXJnZXRFbGUgOiBjdnM7XG4gIGxldCB0cmlnZ2VyO1xuICBsZXQgYm9vdFByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcbiAgICB0cmlnZ2VyID0gKCkgPT4ge1xuICAgICAgbGV0IGluc3RhbmNlID0gbmV3IGN0b3IoZWxlLCBjb25maWcsIGRlZmF1bHRDb25maWcsIHZpcnR1YWxQYXJlbnQpO1xuICAgICAgcmVzKGluc3RhbmNlKTtcbiAgICB9O1xuICB9KTtcblxuICBsZXQgY29udHJvbGxlciA9IHtcbiAgICBwcm9taXNlOiBib290UHJvbWlzZSxcbiAgICB0cmlnZ2VyOiB0cmlnZ2VyXG4gIH1cblxuICByZXR1cm4gY29udHJvbGxlcjtcbn0iLCJleHBvcnQgZnVuY3Rpb24gJChzZWxlY3Rvcikge1xuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGUoc2VsZWN0b3IsIHN0YXR1cykge1xuICBsZXQgc3R5bGVTdHIgPSBzdGF0dXMgPyAnYmxvY2snIDogJ25vbmUnXG4gICQoc2VsZWN0b3IpLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBgZGlzcGxheToke3N0eWxlU3RyfWApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlQ2xhc3Moc2VsZWN0b3IsIGNsYXNzbmFtZSwgc3RhdHVzKSB7XG4gIGxldCBhY3Rpb24gPSBzdGF0dXMgPyAnYWRkJyA6ICdyZW1vdmUnO1xuICAkKHNlbGVjdG9yKS5jbGFzc0xpc3RbYWN0aW9uXShjbGFzc25hbWUpO1xufSIsImNvbnN0IE1lcnNlbm5lVHdpc3RlciA9IHJlcXVpcmUoJ21lcnNlbm5lLXR3aXN0ZXInKTtcbmNvbnN0IE1UID0gbmV3IE1lcnNlbm5lVHdpc3RlcigpO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBkZWJvdW5jZShmdW5jLCBkZWxheSkge1xuICBsZXQgdGltZXIgPSBudWxsO1xuICBjb25zdCAkdGhpcyA9IHRoaXM7XG4gIHJldHVybiAoKSA9PiB7XG4gICAgY29uc3QgY29udGV4dCA9ICR0aGlzO1xuICAgIGNvbnN0IGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICB9LCBkZWxheSk7XG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBpcyA9IHtcbiAgYXJyOiBhID0+IEFycmF5LmlzQXJyYXkoYSksXG4gIG9iajogYSA9PiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYSkuaW5kZXhPZignT2JqZWN0JykgPiAtMSxcbiAgcHRoOiBhID0+IGlzLm9iaihhKSAmJiBhLmhhc093blByb3BlcnR5KCd0b3RhbExlbmd0aCcpLFxuICBzdmc6IGEgPT4gYSBpbnN0YW5jZW9mIFNWR0VsZW1lbnQsXG4gIGlucDogYSA9PiBhIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCxcbiAgZG9tOiBhID0+IGEubm9kZVR5cGUgfHwgaXMuc3ZnKGEpLFxuICBzdHI6IGEgPT4gdHlwZW9mIGEgPT09ICdzdHJpbmcnLFxuICBmbmM6IGEgPT4gdHlwZW9mIGEgPT09ICdmdW5jdGlvbicsXG4gIHVuZDogYSA9PiB0eXBlb2YgYSA9PT0gJ3VuZGVmaW5lZCcsXG4gIG5pbDogYSA9PiBpcy51bmQoYSkgfHwgYSA9PT0gbnVsbCxcbiAgaGV4OiBhID0+IC8oXiNbMC05QS1GXXs2fSQpfCheI1swLTlBLUZdezN9JCkvaS50ZXN0KGEpLFxuICByZ2JhOiBhID0+IC9ecmdiYS8udGVzdChhKSxcbiAgcmdiOiBhID0+IC9ecmdiLy50ZXN0KGEpLFxuICBoc2w6IGEgPT4gL15oc2wvLnRlc3QoYSksXG4gIGNvbDogYSA9PiAoaXMuaGV4KGEpIHx8IGlzLnJnYihhKSB8fCBpcy5oc2woYSkpLFxuICBrZXk6IGEgPT4gIWRlZmF1bHRJbnN0YW5jZVNldHRpbmdzLmhhc093blByb3BlcnR5KGEpICYmICFkZWZhdWx0VHdlZW5TZXR0aW5ncy5oYXNPd25Qcm9wZXJ0eShhKSAmJiBhICE9PSAndGFyZ2V0cycgJiYgYSAhPT0gJ2tleWZyYW1lcycsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByYW5kb21XaXRoaW5SYW5nZShtaW4sIG1heCwgc2VlZCkge1xuICByZXR1cm4gTVQucmFuZG9tKHNlZWQpICogKG1heCAtIG1pbikgKyBtaW47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXN0YW5jZSh4MCwgeTAsIHgxLCB5MSkge1xuICByZXR1cm4gTWF0aC5zcXJ0KCh4MSAtIHgwKSAqICh4MSAtIHgwKSArICh5MSAtIHkwKSAqICh5MSAtIHkwKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWdyZWVUb1JhZGlhbihkZWdyZWUpIHtcbiAgcmV0dXJuIChkZWdyZWUgLyAxODApICogTWF0aC5QSTtcbn1cblxuLyoqXG4gKiDntbHkuIAgdG91Y2hFdmVudC9tb3VzZUV2ZW50IOeahOS6i+S7tuinuOeZvOW6p+aomeWPluW+l+aWueW8j1xuICogQGV4cG9ydFxuICogQHBhcmFtIHtvYmplY3R9ICDlgrPlhaXnmoRldmVudCDnianku7ZcbiAqIEByZXR1cm5zIHtPYmplY3R9IOS4gOWAi+eJqeS7tiwg5YWn5ZCr5LqL5Lu26Ke455m85bqn5qiZ55qEWC9ZIOW6p+aomeWAvFxuICovXG5leHBvcnQgZnVuY3Rpb24gcG9pbnRlckV2ZW50VG9YWShlKSB7XG4gIHZhciBvdXQgPSB7IHg6IDAsIHk6IDAgfTtcbiAgaWYgKGUudHlwZSA9PT0gJ3RvdWNoc3RhcnQnIHx8IGUudHlwZSA9PT0gJ3RvdWNobW92ZScgfHwgZS50eXBlID09PSAndG91Y2hlbmQnIHx8IGUudHlwZSA9PT0gJ3RvdWNoY2FuY2VsJykge1xuICAgIHZhciB0b3VjaCA9IGUub3JpZ2luYWxFdmVudC50b3VjaGVzWzBdIHx8IGUub3JpZ2luYWxFdmVudC5jaGFuZ2VkVG91Y2hlc1swXTtcbiAgICBvdXQueCA9IHRvdWNoLnBhZ2VYO1xuICAgIG91dC55ID0gdG91Y2gucGFnZVk7XG4gIH0gZWxzZSBpZiAoZS50eXBlID09PSAnbW91c2Vkb3duJyB8fCBlLnR5cGUgPT09ICdtb3VzZXVwJyB8fCBlLnR5cGUgPT09ICdtb3VzZW1vdmUnIHx8IGUudHlwZSA9PT0gJ21vdXNlb3ZlcicgfHwgZS50eXBlID09PSAnbW91c2VvdXQnIHx8IGUudHlwZSA9PT0gJ21vdXNlZW50ZXInIHx8IGUudHlwZSA9PT0gJ21vdXNlbGVhdmUnKSB7XG4gICAgb3V0LnggPSBlLnBhZ2VYO1xuICAgIG91dC55ID0gZS5wYWdlWTtcbiAgfVxuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIOebtOaOpeWRvOWPq2hhc093blByb3BlcnR555qE5Y6f5Z6L5pa55rOVKOeUqOWcqGhhc093blByb3BlcnR56KKr5pS55YuV6YGO55qE54uA5rOBKVxuICpcbiAqIEBleHBvcnRcbiAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXQg55uu5qiZ54mp5Lu2XG4gKiBAcGFyYW0ge3N0cmluZ30gcHJvcCDnm67mqJlwcm9wXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0g5pivL+WQplxuICovXG5leHBvcnQgZnVuY3Rpb24gdGFyZ2V0SGFzUHJvcCh0YXJnZXQsIHByb3ApIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0YXJnZXQsIHByb3ApO1xufVxuXG4vKipcbiAqIOeiuuiqjeS4gOWAi+iuiuaVuC/lgLzmmK/lkKbngrrnqbooMOS4jeeul+epuuWAvClcbiAqIEBleHBvcnRcbiAqIEBwYXJhbSB7Kn0gdmFsXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0g5pivL+WQplxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNFbXB0eSh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdudW1iZXInID8gaXNOYU4odmFsKSA6ICF2YWw7XG59XG5cblxuZnVuY3Rpb24gcmdiVG9SZ2JhKHJnYlZhbHVlKSB7XG4gIGNvbnN0IHJnYiA9IC9yZ2JcXCgoXFxkKyxcXHMqW1xcZF0rLFxccypbXFxkXSspXFwpL2cuZXhlYyhyZ2JWYWx1ZSk7XG4gIHJldHVybiByZ2IgPyBgcmdiYSgke3JnYlsxXX0sMSlgIDogcmdiVmFsdWU7XG59XG5cbmZ1bmN0aW9uIGhleFRvUmdiYShoZXhWYWx1ZSkge1xuICBjb25zdCByZ3ggPSAvXiM/KFthLWZcXGRdKShbYS1mXFxkXSkoW2EtZlxcZF0pJC9pO1xuICBjb25zdCBoZXggPSBoZXhWYWx1ZS5yZXBsYWNlKHJneCwgKG0sIHIsIGcsIGIpID0+IHIgKyByICsgZyArIGcgKyBiICsgYik7XG4gIGNvbnN0IHJnYiA9IC9eIz8oW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkkL2kuZXhlYyhoZXgpO1xuICBjb25zdCByID0gcGFyc2VJbnQocmdiWzFdLCAxNik7XG4gIGNvbnN0IGcgPSBwYXJzZUludChyZ2JbMl0sIDE2KTtcbiAgY29uc3QgYiA9IHBhcnNlSW50KHJnYlszXSwgMTYpO1xuICByZXR1cm4gYHJnYmEoJHtyfSwke2d9LCR7Yn0sMSlgO1xufVxuXG5mdW5jdGlvbiBoc2xUb1JnYmEoaHNsVmFsdWUpIHtcbiAgY29uc3QgaHNsID0gL2hzbFxcKChcXGQrKSxcXHMqKFtcXGQuXSspJSxcXHMqKFtcXGQuXSspJVxcKS9nLmV4ZWMoaHNsVmFsdWUpIHx8IC9oc2xhXFwoKFxcZCspLFxccyooW1xcZC5dKyklLFxccyooW1xcZC5dKyklLFxccyooW1xcZC5dKylcXCkvZy5leGVjKGhzbFZhbHVlKTtcbiAgY29uc3QgaCA9IHBhcnNlSW50KGhzbFsxXSwgMTApIC8gMzYwO1xuICBjb25zdCBzID0gcGFyc2VJbnQoaHNsWzJdLCAxMCkgLyAxMDA7XG4gIGNvbnN0IGwgPSBwYXJzZUludChoc2xbM10sIDEwKSAvIDEwMDtcbiAgY29uc3QgYSA9IGhzbFs0XSB8fCAxO1xuICBmdW5jdGlvbiBodWUycmdiKHAsIHEsIHQpIHtcbiAgICBpZiAodCA8IDApIHQgKz0gMTtcbiAgICBpZiAodCA+IDEpIHQgLT0gMTtcbiAgICBpZiAodCA8IDEgLyA2KSByZXR1cm4gcCArIChxIC0gcCkgKiA2ICogdDtcbiAgICBpZiAodCA8IDEgLyAyKSByZXR1cm4gcTtcbiAgICBpZiAodCA8IDIgLyAzKSByZXR1cm4gcCArIChxIC0gcCkgKiAoMiAvIDMgLSB0KSAqIDY7XG4gICAgcmV0dXJuIHA7XG4gIH1cbiAgbGV0IHIsIGcsIGI7XG4gIGlmIChzID09IDApIHtcbiAgICByID0gZyA9IGIgPSBsO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHEgPSBsIDwgMC41ID8gbCAqICgxICsgcykgOiBsICsgcyAtIGwgKiBzO1xuICAgIGNvbnN0IHAgPSAyICogbCAtIHE7XG4gICAgciA9IGh1ZTJyZ2IocCwgcSwgaCArIDEgLyAzKTtcbiAgICBnID0gaHVlMnJnYihwLCBxLCBoKTtcbiAgICBiID0gaHVlMnJnYihwLCBxLCBoIC0gMSAvIDMpO1xuICB9XG4gIHJldHVybiBgcmdiYSgke3IgKiAyNTV9LCR7ZyAqIDI1NX0sJHtiICogMjU1fSwke2F9KWA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb2xvclRvUmdiYSh2YWwpIHtcbiAgaWYgKGlzLnJnYih2YWwpKSByZXR1cm4gcmdiVG9SZ2JhKHZhbCk7XG4gIGlmIChpcy5oZXgodmFsKSkgcmV0dXJuIGhleFRvUmdiYSh2YWwpO1xuICBpZiAoaXMuaHNsKHZhbCkpIHJldHVybiBoc2xUb1JnYmEodmFsKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENoYW5uZWxWYWx1ZXNGcm9tUmdiYShyZ2JhKSB7XG4gIHJldHVybiByZ2JhLnJlcGxhY2UoL14ocmdifHJnYmEpXFwoLywgJycpLnJlcGxhY2UoL1xcKSQvLCAnJykucmVwbGFjZSgvXFxzL2csICcnKS5zcGxpdCgnLCcpLm1hcCh4ID0+IHBhcnNlSW50KHgpKTtcbn1cblxuXG4iLCJleHBvcnQgZnVuY3Rpb24gZHJhd1NxdWFyZShjdHgsIHgsIHksIHdpZHRoLCBjb2xvciwgYWxwaGEpIHtcbiAgY3R4LnNhdmUoKTtcbiAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICBjdHguZ2xvYmFsQWxwaGEgPSBhbHBoYTtcbiAgY3R4LmZpbGxSZWN0KHggLSB3aWR0aCAvIDIsIHkgLSB3aWR0aCAvIDIsIHdpZHRoLCB3aWR0aCk7XG4gIGN0eC5yZXN0b3JlKCk7XG59XG5leHBvcnQgZnVuY3Rpb24gZHJhd0NpcmNsZShjdHgsIHgsIHksIHdpZHRoLCBjb2xvciwgYWxwaGEpIHtcbiAgY3R4LnNhdmUoKVxuICBjdHguZmlsbFN0eWxlID0gY29sb3I7XG4gIGN0eC5nbG9iYWxBbHBoYSA9IGFscGhhO1xuICBjdHguYmVnaW5QYXRoKCk7XG4gIGN0eC5hcmMoeCwgeSwgd2lkdGggLyAyLCAwLCBNYXRoLlBJICogMiwgdHJ1ZSk7XG4gIGN0eC5jbG9zZVBhdGgoKTtcbiAgY3R4LmZpbGwoKTtcbiAgY3R4LnJlc3RvcmUoKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBkcmF3TGluZShjdHgsIHgwLCB5MCwgeDEsIHkxLCBzdHJva2VDb2xvciwgc3Ryb2tlV2lkdGgpIHtcbiAgY3R4LnNhdmUoKTtcbiAgY3R4LnN0cm9rZVN0eWxlID0gc3Ryb2tlQ29sb3I7XG4gIGN0eC5saW5lV2lkdGggPSBzdHJva2VXaWR0aDtcbiAgY3R4LmJlZ2luUGF0aCgpO1xuICBjdHgubW92ZVRvKHgwLCB5MCk7XG4gIGN0eC5saW5lVG8oeDEsIHkxKTtcbiAgY3R4LmNsb3NlUGF0aCgpO1xuICBjdHguc3Ryb2tlKCk7XG4gIGN0eC5yZXN0b3JlKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkcmF3VGV4dChjdHgsIHRleHRDb250ZW50ID0gJ3RleHQnLCB4LCB5LCBjb2xvciA9ICcjMDAwJywgZm9udFNpemUgPSAxMiwgZm9udCA9ICdBcmlhbCcpIHtcbiAgY3R4LnNhdmUoKTtcbiAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICBjdHguZm9udCA9IGAke2ZvbnRTaXplfXB4ICR7Zm9udH1gO1xuICBjdHguZmlsbFRleHQodGV4dENvbnRlbnQsIHgsIHkpO1xuICBjdHgucmVzdG9yZSgpO1xufSIsImltcG9ydCB7IENhbnZhczJERnhCYXNlLCBib290IH0gZnJvbSAnLi9saWIvYmFzZSc7XG5pbXBvcnQgeyBkcmF3Q2lyY2xlIH0gZnJvbSAnLi9saWIvc2hhcGUnO1xuaW1wb3J0IHsgJCB9IGZyb20gJy4vbGliL2RvbSdcblxuY29uc3QgQkFMTF9BTklNQVRJT05fREVGQVVMVCA9IHtcbiAgYWZ0ZXJJbWFnZTogZmFsc2UsXG4gIHJhZGl1czogMjUsXG4gIGNvbG9yOiAnYmx1ZScsXG4gIHNwZWVkWDogMTAwMCxcbiAgc3BlZWRZOiAxMDAwLFxuICBhY2NlbGVyYXRpb25YOiAwLFxuICBhY2NlbGVyYXRpb25ZOiAwLFxuICBmcmljdGlvblg6IDEsXG4gIGZyaWN0aW9uWTogMC45OTk3XG59XG5cbmNvbnN0IFNQT1RTX0FOSU1BVElPTl9ERUZBVUxUID0ge1xuICBtaW5TaXplOiAxMCxcbiAgbWF4U2l6ZTogMjAsXG4gIHBlcmlvZDogMzAwLFxuICBzdGVwOiAxMCxcbiAgYm90dG9tTGF5ZXI6IG51bGwsXG4gIGNvbG9yOiAncmdiYSgwLDAsMCwwLjAzKScsXG4gIGNvbDogMTUsXG4gIHJvdzogMTVcbn1cblxuY2xhc3MgQmFzaWNSZWZlbGVjdGlvbiBleHRlbmRzIENhbnZhczJERnhCYXNlIHtcbiAgY29uc3RydWN0b3IoY2FudmFzLCBkZWZhdWx0Q29uZmlnLCBjb25maWcsIHZpcnR1YWxQYXJlbnQpIHtcbiAgICBzdXBlcihjYW52YXMsIGRlZmF1bHRDb25maWcsIGNvbmZpZywgdmlydHVhbFBhcmVudCk7XG4gICAgdGhpcy5pbml0KCk7XG4gIH1cbiAgaW5pdCgpIHtcbiAgICB0aGlzLmluaXRCYWxsKCk7XG4gICAgdGhpcy5hbmltYXRlQmFsbCgpO1xuICB9XG4gIGluaXRCYWxsKCkge1xuICAgIGxldCAkdGhpcyA9IHRoaXM7XG4gICAgdGhpcy5iYWxsID0ge1xuICAgICAgYWZ0ZXJJbWFnZTogJHRoaXMuY29uZmlnLmFmdGVySW1hZ2UsXG4gICAgICBjb2xvcjogJHRoaXMuY29uZmlnLmNvbG9yLFxuICAgICAgcmFkaXVzOiAkdGhpcy5jb25maWcucmFkaXVzLFxuICAgICAgbG9jYXRpb246IHtcbiAgICAgICAgeDogJHRoaXMuY3ZzLndpZHRoIC8gMixcbiAgICAgICAgeTogJHRoaXMuY3ZzLmhlaWdodCAvIDIsXG4gICAgICB9LFxuICAgICAgc3BlZWQ6IHtcbiAgICAgICAgeDogJHRoaXMuY29uZmlnLnNwZWVkWCxcbiAgICAgICAgeTogJHRoaXMuY29uZmlnLnNwZWVkWVxuICAgICAgfSxcbiAgICAgIGFjY2VsZXJhdGlvbjoge1xuICAgICAgICB4OiAkdGhpcy5jb25maWcuYWNjZWxlcmF0aW9uWCxcbiAgICAgICAgeTogJHRoaXMuY29uZmlnLmFjY2VsZXJhdGlvbllcbiAgICAgIH0sXG4gICAgICBmcmljdGlvbjoge1xuICAgICAgICB4OiAkdGhpcy5jb25maWcuZnJpY3Rpb25YLFxuICAgICAgICB5OiAkdGhpcy5jb25maWcuZnJpY3Rpb25ZXG4gICAgICB9XG4gICAgfVxuICB9XG4gIGRyYXdCYWxsKCkge1xuICAgIGRyYXdDaXJjbGUodGhpcy5jdHgsIHRoaXMuYmFsbC5sb2NhdGlvbi54LCB0aGlzLmJhbGwubG9jYXRpb24ueSwgdGhpcy5iYWxsLnJhZGl1cyAqIDIsIHRoaXMuYmFsbC5jb2xvcik7XG4gIH1cbiAgYW5pbWF0ZUJhbGwoKSB7XG4gICAgbGV0ICR0aGlzID0gdGhpcztcbiAgICBpZiAoJHRoaXMuYmFsbC5hZnRlckltYWdlID09PSB0cnVlKSB7XG4gICAgICAkdGhpcy5iYWNrZ3JvdW5kKCdyZ2JhKDI1NSwyNTUsMjU1LDAuMSknKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAkdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsICR0aGlzLmN2cy53aWR0aCwgJHRoaXMuY3ZzLmhlaWdodCk7XG4gICAgfVxuICAgICR0aGlzLmN0eC5kcmF3SW1hZ2UoJHRoaXMuY29uZmlnLmJvdHRvbUxheWVyLCAwLCAwKTtcbiAgICAkdGhpcy5kcmF3QmFsbCgpO1xuICAgICR0aGlzLnJlZnJlc2hMb2NhdGlvbigpO1xuICAgICR0aGlzLnJlZnJlc2hTcGVlZCgpO1xuICAgICR0aGlzLmNoZWNrQm91bmRhcnkoKTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoJHRoaXMuYW5pbWF0ZUJhbGwuYmluZCgkdGhpcykpO1xuICB9XG5cbiAgcmVmcmVzaFNwZWVkKCkge1xuICAgIGxldCBkdCA9IHRoaXMudGltZUVsYXBzZWQ7XG4gICAgdGhpcy5iYWxsLnNwZWVkLnggPSB0aGlzLmJhbGwuc3BlZWQueCAqIHRoaXMuYmFsbC5mcmljdGlvbi54ICsgdGhpcy5iYWxsLmFjY2VsZXJhdGlvbi54ICogZHQ7XG4gICAgdGhpcy5iYWxsLnNwZWVkLnkgPSB0aGlzLmJhbGwuc3BlZWQueSAqIHRoaXMuYmFsbC5mcmljdGlvbi55ICsgdGhpcy5iYWxsLmFjY2VsZXJhdGlvbi55ICogZHQ7XG4gIH1cblxuICByZWZyZXNoTG9jYXRpb24oKSB7XG4gICAgbGV0IGR0ID0gdGhpcy50aW1lRWxhcHNlZDtcbiAgICB0aGlzLmJhbGwubG9jYXRpb24ueCArPSB0aGlzLmJhbGwuc3BlZWQueCAqIGR0O1xuICAgIHRoaXMuYmFsbC5sb2NhdGlvbi55ICs9IHRoaXMuYmFsbC5zcGVlZC55ICogZHQ7XG4gIH1cbiAgY2hlY2tCb3VuZGFyeSgpIHtcbiAgICBsZXQgYmFsbCA9IHRoaXMuYmFsbDtcbiAgICBsZXQgY2FudmFzID0gdGhpcy5jdnM7XG4gICAgLy8g55W255CD5q2j5Zyo5bqV56uvXG4gICAgaWYgKGJhbGwubG9jYXRpb24ueSArIGJhbGwucmFkaXVzID4gY2FudmFzLmhlaWdodCkge1xuICAgICAgLy8g5LiU6YCf5bqm54K65q2j5YC877yI5pyd5LiL77yJXG4gICAgICBpZiAoYmFsbC5zcGVlZC55ID4gMCkge1xuICAgICAgICBiYWxsLnNwZWVkLnkgPSAtYmFsbC5zcGVlZC55O1xuICAgICAgfVxuICAgIH1cbiAgICAvLyDnlbbnkIPmraPlnKjpoILnq69cbiAgICBlbHNlIGlmIChiYWxsLmxvY2F0aW9uLnkgLSBiYWxsLnJhZGl1cyA8IDApIHtcbiAgICAgIC8vIOS4lOmAn+W6pueCuuiyoOWAvO+8iOacneS4iu+8iVxuICAgICAgaWYgKGJhbGwuc3BlZWQueSA8IDApIHtcbiAgICAgICAgYmFsbC5zcGVlZC55ID0gLWJhbGwuc3BlZWQueTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyDnlbbnkIPmraPlnKjlj7Pnq69cbiAgICBpZiAoYmFsbC5sb2NhdGlvbi54ICsgYmFsbC5yYWRpdXMgPiBjYW52YXMud2lkdGgpIHtcbiAgICAgIGlmIChiYWxsLnNwZWVkLnggPiAwKSB7XG4gICAgICAgIGJhbGwuc3BlZWQueCA9IC1iYWxsLnNwZWVkLng7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIOeVtueQg+ato+WcqOW3puerr1xuICAgIGVsc2UgaWYgKGJhbGwubG9jYXRpb24ueCAtIGJhbGwucmFkaXVzIDwgMCkge1xuICAgICAgaWYgKGJhbGwuc3BlZWQueCA8IDApIHtcbiAgICAgICAgYmFsbC5zcGVlZC54ID0gLWJhbGwuc3BlZWQueDtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxufVxuXG5jbGFzcyBTcG90c0J1bXBpbmcgZXh0ZW5kcyBDYW52YXMyREZ4QmFzZSB7XG4gIGNvbnN0cnVjdG9yKGNhbnZhcywgZGVmYXVsdENvbmZpZywgY29uZmlnLCB2aXJ0dWFsUGFyZW50KSB7XG4gICAgc3VwZXIoY2FudmFzLCBkZWZhdWx0Q29uZmlnLCBjb25maWcsIHZpcnR1YWxQYXJlbnQpO1xuICAgIHRoaXMuc3BvdHNTaXplID0gdGhpcy5jb25maWcubWluU2l6ZTtcbiAgICB0aGlzLmV4cGFuZCA9IHRydWU7XG4gICAgdGhpcy5pbml0KCk7XG4gIH1cbiAgaW5pdCgpIHtcbiAgICB0aGlzLmFuaW1hdGUoKTtcbiAgfVxuXG4gIGFuaW1hdGUoKSB7XG4gICAgbGV0ICR0aGlzID0gdGhpcztcbiAgICB0aGlzLmludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgJHRoaXMuY2xlYXIoKTtcbiAgICAgICR0aGlzLmRyYXdTcG90cygpO1xuICAgIH0sIHRoaXMuY29uZmlnLnBlcmlvZClcbiAgfVxuXG4gIGRyYXdTcG90cygpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSB0aGlzLmNvbmZpZy5jb2w7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPD0gdGhpcy5jb25maWcuY29sOyBqKyspIHtcbiAgICAgICAgZHJhd0NpcmNsZShcbiAgICAgICAgICB0aGlzLmN0eCxcbiAgICAgICAgICBpICogdGhpcy5jdnMud2lkdGggLyB0aGlzLmNvbmZpZy5jb2wsXG4gICAgICAgICAgaiAqIHRoaXMuY3ZzLmhlaWdodCAvIHRoaXMuY29uZmlnLnJvdyxcbiAgICAgICAgICB0aGlzLnNwb3RzU2l6ZSxcbiAgICAgICAgICB0aGlzLmNvbmZpZy5jb2xvcixcbiAgICAgICAgICAxXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMuc3BvdHNTaXplIC0gMSA8IHRoaXMuY29uZmlnLm1pblNpemUpIHtcbiAgICAgIHRoaXMuZXhwYW5kID0gdHJ1ZVxuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLnNwb3RzU2l6ZSArIDEgPiB0aGlzLmNvbmZpZy5tYXhTaXplKSB7XG4gICAgICB0aGlzLmV4cGFuZCA9IGZhbHNlXG4gICAgfVxuICAgIGlmICh0aGlzLmV4cGFuZCkge1xuICAgICAgdGhpcy5zcG90c1NpemUgKz0gdGhpcy5jb25maWcuc3RlcDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLnNwb3RzU2l6ZSAtPSB0aGlzLmNvbmZpZy5zdGVwO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdFNwbGFzaCgpIHtcbiAgbGV0IGluaXRpYWxTY3JlZW4gPSAkKCcjaW5pdGlhbC1zY3JlZW4nKTtcbiAgbGV0IHZpcnR1YWxDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcblxuICBsZXQgc3BvdEFuaW1hdGlvbiA9IGJvb3QoU3BvdHNCdW1waW5nLCBTUE9UU19BTklNQVRJT05fREVGQVVMVCwge30sIHZpcnR1YWxDYW52YXMsIGluaXRpYWxTY3JlZW4pO1xuICBzcG90QW5pbWF0aW9uLnByb21pc2UudGhlbigoaW5zdGFuY2UpID0+IHtcbiAgICBib290KEJhc2ljUmVmZWxlY3Rpb24sIEJBTExfQU5JTUFUSU9OX0RFRkFVTFQsIHtcbiAgICAgIGFmdGVySW1hZ2U6IHRydWUsXG4gICAgICByYWRpdXM6IDQwLFxuICAgICAgY29sb3I6ICdncmV5JyxcbiAgICAgIHNwZWVkWDogMTAwMCxcbiAgICAgIGJvdHRvbUxheWVyOiBpbnN0YW5jZS5jdnMsXG4gICAgICBzcGVlZFk6IDEwMDAsXG4gICAgICBhY2NlbGVyYXRpb25YOiAwLFxuICAgICAgYWNjZWxlcmF0aW9uWTogOTgwLFxuICAgICAgZnJpY3Rpb25YOiAxLFxuICAgIH0sIGluaXRpYWxTY3JlZW4pLnRyaWdnZXIoKTtcbiAgfSk7XG4gIHNwb3RBbmltYXRpb24udHJpZ2dlcigpO1xufVxuXG4iLCJcbi8qKlxuICogRXhwb3NlIGBCYWNrb2ZmYC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJhY2tvZmY7XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBiYWNrb2ZmIHRpbWVyIHdpdGggYG9wdHNgLlxuICpcbiAqIC0gYG1pbmAgaW5pdGlhbCB0aW1lb3V0IGluIG1pbGxpc2Vjb25kcyBbMTAwXVxuICogLSBgbWF4YCBtYXggdGltZW91dCBbMTAwMDBdXG4gKiAtIGBqaXR0ZXJgIFswXVxuICogLSBgZmFjdG9yYCBbMl1cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0c1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBCYWNrb2ZmKG9wdHMpIHtcbiAgb3B0cyA9IG9wdHMgfHwge307XG4gIHRoaXMubXMgPSBvcHRzLm1pbiB8fCAxMDA7XG4gIHRoaXMubWF4ID0gb3B0cy5tYXggfHwgMTAwMDA7XG4gIHRoaXMuZmFjdG9yID0gb3B0cy5mYWN0b3IgfHwgMjtcbiAgdGhpcy5qaXR0ZXIgPSBvcHRzLmppdHRlciA+IDAgJiYgb3B0cy5qaXR0ZXIgPD0gMSA/IG9wdHMuaml0dGVyIDogMDtcbiAgdGhpcy5hdHRlbXB0cyA9IDA7XG59XG5cbi8qKlxuICogUmV0dXJuIHRoZSBiYWNrb2ZmIGR1cmF0aW9uLlxuICpcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuQmFja29mZi5wcm90b3R5cGUuZHVyYXRpb24gPSBmdW5jdGlvbigpe1xuICB2YXIgbXMgPSB0aGlzLm1zICogTWF0aC5wb3codGhpcy5mYWN0b3IsIHRoaXMuYXR0ZW1wdHMrKyk7XG4gIGlmICh0aGlzLmppdHRlcikge1xuICAgIHZhciByYW5kID0gIE1hdGgucmFuZG9tKCk7XG4gICAgdmFyIGRldmlhdGlvbiA9IE1hdGguZmxvb3IocmFuZCAqIHRoaXMuaml0dGVyICogbXMpO1xuICAgIG1zID0gKE1hdGguZmxvb3IocmFuZCAqIDEwKSAmIDEpID09IDAgID8gbXMgLSBkZXZpYXRpb24gOiBtcyArIGRldmlhdGlvbjtcbiAgfVxuICByZXR1cm4gTWF0aC5taW4obXMsIHRoaXMubWF4KSB8IDA7XG59O1xuXG4vKipcbiAqIFJlc2V0IHRoZSBudW1iZXIgb2YgYXR0ZW1wdHMuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5CYWNrb2ZmLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uKCl7XG4gIHRoaXMuYXR0ZW1wdHMgPSAwO1xufTtcblxuLyoqXG4gKiBTZXQgdGhlIG1pbmltdW0gZHVyYXRpb25cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkJhY2tvZmYucHJvdG90eXBlLnNldE1pbiA9IGZ1bmN0aW9uKG1pbil7XG4gIHRoaXMubXMgPSBtaW47XG59O1xuXG4vKipcbiAqIFNldCB0aGUgbWF4aW11bSBkdXJhdGlvblxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuQmFja29mZi5wcm90b3R5cGUuc2V0TWF4ID0gZnVuY3Rpb24obWF4KXtcbiAgdGhpcy5tYXggPSBtYXg7XG59O1xuXG4vKipcbiAqIFNldCB0aGUgaml0dGVyXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5CYWNrb2ZmLnByb3RvdHlwZS5zZXRKaXR0ZXIgPSBmdW5jdGlvbihqaXR0ZXIpe1xuICB0aGlzLmppdHRlciA9IGppdHRlcjtcbn07XG5cbiIsIi8qXG4gKiBiYXNlNjQtYXJyYXlidWZmZXJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9uaWtsYXN2aC9iYXNlNjQtYXJyYXlidWZmZXJcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTIgTmlrbGFzIHZvbiBIZXJ0emVuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKi9cbihmdW5jdGlvbihjaGFycyl7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIGV4cG9ydHMuZW5jb2RlID0gZnVuY3Rpb24oYXJyYXlidWZmZXIpIHtcbiAgICB2YXIgYnl0ZXMgPSBuZXcgVWludDhBcnJheShhcnJheWJ1ZmZlciksXG4gICAgaSwgbGVuID0gYnl0ZXMubGVuZ3RoLCBiYXNlNjQgPSBcIlwiO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSs9Mykge1xuICAgICAgYmFzZTY0ICs9IGNoYXJzW2J5dGVzW2ldID4+IDJdO1xuICAgICAgYmFzZTY0ICs9IGNoYXJzWygoYnl0ZXNbaV0gJiAzKSA8PCA0KSB8IChieXRlc1tpICsgMV0gPj4gNCldO1xuICAgICAgYmFzZTY0ICs9IGNoYXJzWygoYnl0ZXNbaSArIDFdICYgMTUpIDw8IDIpIHwgKGJ5dGVzW2kgKyAyXSA+PiA2KV07XG4gICAgICBiYXNlNjQgKz0gY2hhcnNbYnl0ZXNbaSArIDJdICYgNjNdO1xuICAgIH1cblxuICAgIGlmICgobGVuICUgMykgPT09IDIpIHtcbiAgICAgIGJhc2U2NCA9IGJhc2U2NC5zdWJzdHJpbmcoMCwgYmFzZTY0Lmxlbmd0aCAtIDEpICsgXCI9XCI7XG4gICAgfSBlbHNlIGlmIChsZW4gJSAzID09PSAxKSB7XG4gICAgICBiYXNlNjQgPSBiYXNlNjQuc3Vic3RyaW5nKDAsIGJhc2U2NC5sZW5ndGggLSAyKSArIFwiPT1cIjtcbiAgICB9XG5cbiAgICByZXR1cm4gYmFzZTY0O1xuICB9O1xuXG4gIGV4cG9ydHMuZGVjb2RlID0gIGZ1bmN0aW9uKGJhc2U2NCkge1xuICAgIHZhciBidWZmZXJMZW5ndGggPSBiYXNlNjQubGVuZ3RoICogMC43NSxcbiAgICBsZW4gPSBiYXNlNjQubGVuZ3RoLCBpLCBwID0gMCxcbiAgICBlbmNvZGVkMSwgZW5jb2RlZDIsIGVuY29kZWQzLCBlbmNvZGVkNDtcblxuICAgIGlmIChiYXNlNjRbYmFzZTY0Lmxlbmd0aCAtIDFdID09PSBcIj1cIikge1xuICAgICAgYnVmZmVyTGVuZ3RoLS07XG4gICAgICBpZiAoYmFzZTY0W2Jhc2U2NC5sZW5ndGggLSAyXSA9PT0gXCI9XCIpIHtcbiAgICAgICAgYnVmZmVyTGVuZ3RoLS07XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGFycmF5YnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKGJ1ZmZlckxlbmd0aCksXG4gICAgYnl0ZXMgPSBuZXcgVWludDhBcnJheShhcnJheWJ1ZmZlcik7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKz00KSB7XG4gICAgICBlbmNvZGVkMSA9IGNoYXJzLmluZGV4T2YoYmFzZTY0W2ldKTtcbiAgICAgIGVuY29kZWQyID0gY2hhcnMuaW5kZXhPZihiYXNlNjRbaSsxXSk7XG4gICAgICBlbmNvZGVkMyA9IGNoYXJzLmluZGV4T2YoYmFzZTY0W2krMl0pO1xuICAgICAgZW5jb2RlZDQgPSBjaGFycy5pbmRleE9mKGJhc2U2NFtpKzNdKTtcblxuICAgICAgYnl0ZXNbcCsrXSA9IChlbmNvZGVkMSA8PCAyKSB8IChlbmNvZGVkMiA+PiA0KTtcbiAgICAgIGJ5dGVzW3ArK10gPSAoKGVuY29kZWQyICYgMTUpIDw8IDQpIHwgKGVuY29kZWQzID4+IDIpO1xuICAgICAgYnl0ZXNbcCsrXSA9ICgoZW5jb2RlZDMgJiAzKSA8PCA2KSB8IChlbmNvZGVkNCAmIDYzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJyYXlidWZmZXI7XG4gIH07XG59KShcIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky9cIik7XG4iLCJcclxuLyoqXHJcbiAqIEV4cG9zZSBgRW1pdHRlcmAuXHJcbiAqL1xyXG5cclxuaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgbW9kdWxlLmV4cG9ydHMgPSBFbWl0dGVyO1xyXG59XHJcblxyXG4vKipcclxuICogSW5pdGlhbGl6ZSBhIG5ldyBgRW1pdHRlcmAuXHJcbiAqXHJcbiAqIEBhcGkgcHVibGljXHJcbiAqL1xyXG5cclxuZnVuY3Rpb24gRW1pdHRlcihvYmopIHtcclxuICBpZiAob2JqKSByZXR1cm4gbWl4aW4ob2JqKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBNaXhpbiB0aGUgZW1pdHRlciBwcm9wZXJ0aWVzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXHJcbiAqIEByZXR1cm4ge09iamVjdH1cclxuICogQGFwaSBwcml2YXRlXHJcbiAqL1xyXG5cclxuZnVuY3Rpb24gbWl4aW4ob2JqKSB7XHJcbiAgZm9yICh2YXIga2V5IGluIEVtaXR0ZXIucHJvdG90eXBlKSB7XHJcbiAgICBvYmpba2V5XSA9IEVtaXR0ZXIucHJvdG90eXBlW2tleV07XHJcbiAgfVxyXG4gIHJldHVybiBvYmo7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBMaXN0ZW4gb24gdGhlIGdpdmVuIGBldmVudGAgd2l0aCBgZm5gLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcclxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cclxuICogQHJldHVybiB7RW1pdHRlcn1cclxuICogQGFwaSBwdWJsaWNcclxuICovXHJcblxyXG5FbWl0dGVyLnByb3RvdHlwZS5vbiA9XHJcbkVtaXR0ZXIucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbihldmVudCwgZm4pe1xyXG4gIHRoaXMuX2NhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrcyB8fCB7fTtcclxuICAodGhpcy5fY2FsbGJhY2tzWyckJyArIGV2ZW50XSA9IHRoaXMuX2NhbGxiYWNrc1snJCcgKyBldmVudF0gfHwgW10pXHJcbiAgICAucHVzaChmbik7XHJcbiAgcmV0dXJuIHRoaXM7XHJcbn07XHJcblxyXG4vKipcclxuICogQWRkcyBhbiBgZXZlbnRgIGxpc3RlbmVyIHRoYXQgd2lsbCBiZSBpbnZva2VkIGEgc2luZ2xlXHJcbiAqIHRpbWUgdGhlbiBhdXRvbWF0aWNhbGx5IHJlbW92ZWQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxyXG4gKiBAcmV0dXJuIHtFbWl0dGVyfVxyXG4gKiBAYXBpIHB1YmxpY1xyXG4gKi9cclxuXHJcbkVtaXR0ZXIucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbihldmVudCwgZm4pe1xyXG4gIGZ1bmN0aW9uIG9uKCkge1xyXG4gICAgdGhpcy5vZmYoZXZlbnQsIG9uKTtcclxuICAgIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgfVxyXG5cclxuICBvbi5mbiA9IGZuO1xyXG4gIHRoaXMub24oZXZlbnQsIG9uKTtcclxuICByZXR1cm4gdGhpcztcclxufTtcclxuXHJcbi8qKlxyXG4gKiBSZW1vdmUgdGhlIGdpdmVuIGNhbGxiYWNrIGZvciBgZXZlbnRgIG9yIGFsbFxyXG4gKiByZWdpc3RlcmVkIGNhbGxiYWNrcy5cclxuICpcclxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXHJcbiAqIEByZXR1cm4ge0VtaXR0ZXJ9XHJcbiAqIEBhcGkgcHVibGljXHJcbiAqL1xyXG5cclxuRW1pdHRlci5wcm90b3R5cGUub2ZmID1cclxuRW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPVxyXG5FbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVBbGxMaXN0ZW5lcnMgPVxyXG5FbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24oZXZlbnQsIGZuKXtcclxuICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XHJcblxyXG4gIC8vIGFsbFxyXG4gIGlmICgwID09IGFyZ3VtZW50cy5sZW5ndGgpIHtcclxuICAgIHRoaXMuX2NhbGxiYWNrcyA9IHt9O1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvLyBzcGVjaWZpYyBldmVudFxyXG4gIHZhciBjYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3NbJyQnICsgZXZlbnRdO1xyXG4gIGlmICghY2FsbGJhY2tzKSByZXR1cm4gdGhpcztcclxuXHJcbiAgLy8gcmVtb3ZlIGFsbCBoYW5kbGVyc1xyXG4gIGlmICgxID09IGFyZ3VtZW50cy5sZW5ndGgpIHtcclxuICAgIGRlbGV0ZSB0aGlzLl9jYWxsYmFja3NbJyQnICsgZXZlbnRdO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvLyByZW1vdmUgc3BlY2lmaWMgaGFuZGxlclxyXG4gIHZhciBjYjtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IGNhbGxiYWNrcy5sZW5ndGg7IGkrKykge1xyXG4gICAgY2IgPSBjYWxsYmFja3NbaV07XHJcbiAgICBpZiAoY2IgPT09IGZuIHx8IGNiLmZuID09PSBmbikge1xyXG4gICAgICBjYWxsYmFja3Muc3BsaWNlKGksIDEpO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIFJlbW92ZSBldmVudCBzcGVjaWZpYyBhcnJheXMgZm9yIGV2ZW50IHR5cGVzIHRoYXQgbm9cclxuICAvLyBvbmUgaXMgc3Vic2NyaWJlZCBmb3IgdG8gYXZvaWQgbWVtb3J5IGxlYWsuXHJcbiAgaWYgKGNhbGxiYWNrcy5sZW5ndGggPT09IDApIHtcclxuICAgIGRlbGV0ZSB0aGlzLl9jYWxsYmFja3NbJyQnICsgZXZlbnRdO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHRoaXM7XHJcbn07XHJcblxyXG4vKipcclxuICogRW1pdCBgZXZlbnRgIHdpdGggdGhlIGdpdmVuIGFyZ3MuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxyXG4gKiBAcGFyYW0ge01peGVkfSAuLi5cclxuICogQHJldHVybiB7RW1pdHRlcn1cclxuICovXHJcblxyXG5FbWl0dGVyLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24oZXZlbnQpe1xyXG4gIHRoaXMuX2NhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrcyB8fCB7fTtcclxuXHJcbiAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpXHJcbiAgICAsIGNhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrc1snJCcgKyBldmVudF07XHJcblxyXG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcclxuICB9XHJcblxyXG4gIGlmIChjYWxsYmFja3MpIHtcclxuICAgIGNhbGxiYWNrcyA9IGNhbGxiYWNrcy5zbGljZSgwKTtcclxuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBjYWxsYmFja3MubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcclxuICAgICAgY2FsbGJhY2tzW2ldLmFwcGx5KHRoaXMsIGFyZ3MpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHRoaXM7XHJcbn07XHJcblxyXG4vKipcclxuICogUmV0dXJuIGFycmF5IG9mIGNhbGxiYWNrcyBmb3IgYGV2ZW50YC5cclxuICpcclxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XHJcbiAqIEByZXR1cm4ge0FycmF5fVxyXG4gKiBAYXBpIHB1YmxpY1xyXG4gKi9cclxuXHJcbkVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVycyA9IGZ1bmN0aW9uKGV2ZW50KXtcclxuICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XHJcbiAgcmV0dXJuIHRoaXMuX2NhbGxiYWNrc1snJCcgKyBldmVudF0gfHwgW107XHJcbn07XHJcblxyXG4vKipcclxuICogQ2hlY2sgaWYgdGhpcyBlbWl0dGVyIGhhcyBgZXZlbnRgIGhhbmRsZXJzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcclxuICogQHJldHVybiB7Qm9vbGVhbn1cclxuICogQGFwaSBwdWJsaWNcclxuICovXHJcblxyXG5FbWl0dGVyLnByb3RvdHlwZS5oYXNMaXN0ZW5lcnMgPSBmdW5jdGlvbihldmVudCl7XHJcbiAgcmV0dXJuICEhIHRoaXMubGlzdGVuZXJzKGV2ZW50KS5sZW5ndGg7XHJcbn07XHJcbiIsIi8qKlxuICogSGVscGVycy5cbiAqL1xuXG52YXIgcyA9IDEwMDA7XG52YXIgbSA9IHMgKiA2MDtcbnZhciBoID0gbSAqIDYwO1xudmFyIGQgPSBoICogMjQ7XG52YXIgdyA9IGQgKiA3O1xudmFyIHkgPSBkICogMzY1LjI1O1xuXG4vKipcbiAqIFBhcnNlIG9yIGZvcm1hdCB0aGUgZ2l2ZW4gYHZhbGAuXG4gKlxuICogT3B0aW9uczpcbiAqXG4gKiAgLSBgbG9uZ2AgdmVyYm9zZSBmb3JtYXR0aW5nIFtmYWxzZV1cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ3xOdW1iZXJ9IHZhbFxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQHRocm93cyB7RXJyb3J9IHRocm93IGFuIGVycm9yIGlmIHZhbCBpcyBub3QgYSBub24tZW1wdHkgc3RyaW5nIG9yIGEgbnVtYmVyXG4gKiBAcmV0dXJuIHtTdHJpbmd8TnVtYmVyfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHZhbCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsO1xuICBpZiAodHlwZSA9PT0gJ3N0cmluZycgJiYgdmFsLmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gcGFyc2UodmFsKTtcbiAgfSBlbHNlIGlmICh0eXBlID09PSAnbnVtYmVyJyAmJiBpc0Zpbml0ZSh2YWwpKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMubG9uZyA/IGZtdExvbmcodmFsKSA6IGZtdFNob3J0KHZhbCk7XG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKFxuICAgICd2YWwgaXMgbm90IGEgbm9uLWVtcHR5IHN0cmluZyBvciBhIHZhbGlkIG51bWJlci4gdmFsPScgK1xuICAgICAgSlNPTi5zdHJpbmdpZnkodmFsKVxuICApO1xufTtcblxuLyoqXG4gKiBQYXJzZSB0aGUgZ2l2ZW4gYHN0cmAgYW5kIHJldHVybiBtaWxsaXNlY29uZHMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7TnVtYmVyfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gcGFyc2Uoc3RyKSB7XG4gIHN0ciA9IFN0cmluZyhzdHIpO1xuICBpZiAoc3RyLmxlbmd0aCA+IDEwMCkge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgbWF0Y2ggPSAvXigtPyg/OlxcZCspP1xcLj9cXGQrKSAqKG1pbGxpc2Vjb25kcz98bXNlY3M/fG1zfHNlY29uZHM/fHNlY3M/fHN8bWludXRlcz98bWlucz98bXxob3Vycz98aHJzP3xofGRheXM/fGR8d2Vla3M/fHd8eWVhcnM/fHlycz98eSk/JC9pLmV4ZWMoXG4gICAgc3RyXG4gICk7XG4gIGlmICghbWF0Y2gpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIG4gPSBwYXJzZUZsb2F0KG1hdGNoWzFdKTtcbiAgdmFyIHR5cGUgPSAobWF0Y2hbMl0gfHwgJ21zJykudG9Mb3dlckNhc2UoKTtcbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSAneWVhcnMnOlxuICAgIGNhc2UgJ3llYXInOlxuICAgIGNhc2UgJ3lycyc6XG4gICAgY2FzZSAneXInOlxuICAgIGNhc2UgJ3knOlxuICAgICAgcmV0dXJuIG4gKiB5O1xuICAgIGNhc2UgJ3dlZWtzJzpcbiAgICBjYXNlICd3ZWVrJzpcbiAgICBjYXNlICd3JzpcbiAgICAgIHJldHVybiBuICogdztcbiAgICBjYXNlICdkYXlzJzpcbiAgICBjYXNlICdkYXknOlxuICAgIGNhc2UgJ2QnOlxuICAgICAgcmV0dXJuIG4gKiBkO1xuICAgIGNhc2UgJ2hvdXJzJzpcbiAgICBjYXNlICdob3VyJzpcbiAgICBjYXNlICdocnMnOlxuICAgIGNhc2UgJ2hyJzpcbiAgICBjYXNlICdoJzpcbiAgICAgIHJldHVybiBuICogaDtcbiAgICBjYXNlICdtaW51dGVzJzpcbiAgICBjYXNlICdtaW51dGUnOlxuICAgIGNhc2UgJ21pbnMnOlxuICAgIGNhc2UgJ21pbic6XG4gICAgY2FzZSAnbSc6XG4gICAgICByZXR1cm4gbiAqIG07XG4gICAgY2FzZSAnc2Vjb25kcyc6XG4gICAgY2FzZSAnc2Vjb25kJzpcbiAgICBjYXNlICdzZWNzJzpcbiAgICBjYXNlICdzZWMnOlxuICAgIGNhc2UgJ3MnOlxuICAgICAgcmV0dXJuIG4gKiBzO1xuICAgIGNhc2UgJ21pbGxpc2Vjb25kcyc6XG4gICAgY2FzZSAnbWlsbGlzZWNvbmQnOlxuICAgIGNhc2UgJ21zZWNzJzpcbiAgICBjYXNlICdtc2VjJzpcbiAgICBjYXNlICdtcyc6XG4gICAgICByZXR1cm4gbjtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxufVxuXG4vKipcbiAqIFNob3J0IGZvcm1hdCBmb3IgYG1zYC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gbXNcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGZtdFNob3J0KG1zKSB7XG4gIHZhciBtc0FicyA9IE1hdGguYWJzKG1zKTtcbiAgaWYgKG1zQWJzID49IGQpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIGQpICsgJ2QnO1xuICB9XG4gIGlmIChtc0FicyA+PSBoKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBoKSArICdoJztcbiAgfVxuICBpZiAobXNBYnMgPj0gbSkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gbSkgKyAnbSc7XG4gIH1cbiAgaWYgKG1zQWJzID49IHMpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIHMpICsgJ3MnO1xuICB9XG4gIHJldHVybiBtcyArICdtcyc7XG59XG5cbi8qKlxuICogTG9uZyBmb3JtYXQgZm9yIGBtc2AuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IG1zXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBmbXRMb25nKG1zKSB7XG4gIHZhciBtc0FicyA9IE1hdGguYWJzKG1zKTtcbiAgaWYgKG1zQWJzID49IGQpIHtcbiAgICByZXR1cm4gcGx1cmFsKG1zLCBtc0FicywgZCwgJ2RheScpO1xuICB9XG4gIGlmIChtc0FicyA+PSBoKSB7XG4gICAgcmV0dXJuIHBsdXJhbChtcywgbXNBYnMsIGgsICdob3VyJyk7XG4gIH1cbiAgaWYgKG1zQWJzID49IG0pIHtcbiAgICByZXR1cm4gcGx1cmFsKG1zLCBtc0FicywgbSwgJ21pbnV0ZScpO1xuICB9XG4gIGlmIChtc0FicyA+PSBzKSB7XG4gICAgcmV0dXJuIHBsdXJhbChtcywgbXNBYnMsIHMsICdzZWNvbmQnKTtcbiAgfVxuICByZXR1cm4gbXMgKyAnIG1zJztcbn1cblxuLyoqXG4gKiBQbHVyYWxpemF0aW9uIGhlbHBlci5cbiAqL1xuXG5mdW5jdGlvbiBwbHVyYWwobXMsIG1zQWJzLCBuLCBuYW1lKSB7XG4gIHZhciBpc1BsdXJhbCA9IG1zQWJzID49IG4gKiAxLjU7XG4gIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gbikgKyAnICcgKyBuYW1lICsgKGlzUGx1cmFsID8gJ3MnIDogJycpO1xufVxuIiwiLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbi8qKlxuICogVGhpcyBpcyB0aGUgd2ViIGJyb3dzZXIgaW1wbGVtZW50YXRpb24gb2YgYGRlYnVnKClgLlxuICovXG5cbmV4cG9ydHMuZm9ybWF0QXJncyA9IGZvcm1hdEFyZ3M7XG5leHBvcnRzLnNhdmUgPSBzYXZlO1xuZXhwb3J0cy5sb2FkID0gbG9hZDtcbmV4cG9ydHMudXNlQ29sb3JzID0gdXNlQ29sb3JzO1xuZXhwb3J0cy5zdG9yYWdlID0gbG9jYWxzdG9yYWdlKCk7XG5leHBvcnRzLmRlc3Ryb3kgPSAoKCkgPT4ge1xuXHRsZXQgd2FybmVkID0gZmFsc2U7XG5cblx0cmV0dXJuICgpID0+IHtcblx0XHRpZiAoIXdhcm5lZCkge1xuXHRcdFx0d2FybmVkID0gdHJ1ZTtcblx0XHRcdGNvbnNvbGUud2FybignSW5zdGFuY2UgbWV0aG9kIGBkZWJ1Zy5kZXN0cm95KClgIGlzIGRlcHJlY2F0ZWQgYW5kIG5vIGxvbmdlciBkb2VzIGFueXRoaW5nLiBJdCB3aWxsIGJlIHJlbW92ZWQgaW4gdGhlIG5leHQgbWFqb3IgdmVyc2lvbiBvZiBgZGVidWdgLicpO1xuXHRcdH1cblx0fTtcbn0pKCk7XG5cbi8qKlxuICogQ29sb3JzLlxuICovXG5cbmV4cG9ydHMuY29sb3JzID0gW1xuXHQnIzAwMDBDQycsXG5cdCcjMDAwMEZGJyxcblx0JyMwMDMzQ0MnLFxuXHQnIzAwMzNGRicsXG5cdCcjMDA2NkNDJyxcblx0JyMwMDY2RkYnLFxuXHQnIzAwOTlDQycsXG5cdCcjMDA5OUZGJyxcblx0JyMwMENDMDAnLFxuXHQnIzAwQ0MzMycsXG5cdCcjMDBDQzY2Jyxcblx0JyMwMENDOTknLFxuXHQnIzAwQ0NDQycsXG5cdCcjMDBDQ0ZGJyxcblx0JyMzMzAwQ0MnLFxuXHQnIzMzMDBGRicsXG5cdCcjMzMzM0NDJyxcblx0JyMzMzMzRkYnLFxuXHQnIzMzNjZDQycsXG5cdCcjMzM2NkZGJyxcblx0JyMzMzk5Q0MnLFxuXHQnIzMzOTlGRicsXG5cdCcjMzNDQzAwJyxcblx0JyMzM0NDMzMnLFxuXHQnIzMzQ0M2NicsXG5cdCcjMzNDQzk5Jyxcblx0JyMzM0NDQ0MnLFxuXHQnIzMzQ0NGRicsXG5cdCcjNjYwMENDJyxcblx0JyM2NjAwRkYnLFxuXHQnIzY2MzNDQycsXG5cdCcjNjYzM0ZGJyxcblx0JyM2NkNDMDAnLFxuXHQnIzY2Q0MzMycsXG5cdCcjOTkwMENDJyxcblx0JyM5OTAwRkYnLFxuXHQnIzk5MzNDQycsXG5cdCcjOTkzM0ZGJyxcblx0JyM5OUNDMDAnLFxuXHQnIzk5Q0MzMycsXG5cdCcjQ0MwMDAwJyxcblx0JyNDQzAwMzMnLFxuXHQnI0NDMDA2NicsXG5cdCcjQ0MwMDk5Jyxcblx0JyNDQzAwQ0MnLFxuXHQnI0NDMDBGRicsXG5cdCcjQ0MzMzAwJyxcblx0JyNDQzMzMzMnLFxuXHQnI0NDMzM2NicsXG5cdCcjQ0MzMzk5Jyxcblx0JyNDQzMzQ0MnLFxuXHQnI0NDMzNGRicsXG5cdCcjQ0M2NjAwJyxcblx0JyNDQzY2MzMnLFxuXHQnI0NDOTkwMCcsXG5cdCcjQ0M5OTMzJyxcblx0JyNDQ0NDMDAnLFxuXHQnI0NDQ0MzMycsXG5cdCcjRkYwMDAwJyxcblx0JyNGRjAwMzMnLFxuXHQnI0ZGMDA2NicsXG5cdCcjRkYwMDk5Jyxcblx0JyNGRjAwQ0MnLFxuXHQnI0ZGMDBGRicsXG5cdCcjRkYzMzAwJyxcblx0JyNGRjMzMzMnLFxuXHQnI0ZGMzM2NicsXG5cdCcjRkYzMzk5Jyxcblx0JyNGRjMzQ0MnLFxuXHQnI0ZGMzNGRicsXG5cdCcjRkY2NjAwJyxcblx0JyNGRjY2MzMnLFxuXHQnI0ZGOTkwMCcsXG5cdCcjRkY5OTMzJyxcblx0JyNGRkNDMDAnLFxuXHQnI0ZGQ0MzMydcbl07XG5cbi8qKlxuICogQ3VycmVudGx5IG9ubHkgV2ViS2l0LWJhc2VkIFdlYiBJbnNwZWN0b3JzLCBGaXJlZm94ID49IHYzMSxcbiAqIGFuZCB0aGUgRmlyZWJ1ZyBleHRlbnNpb24gKGFueSBGaXJlZm94IHZlcnNpb24pIGFyZSBrbm93blxuICogdG8gc3VwcG9ydCBcIiVjXCIgQ1NTIGN1c3RvbWl6YXRpb25zLlxuICpcbiAqIFRPRE86IGFkZCBhIGBsb2NhbFN0b3JhZ2VgIHZhcmlhYmxlIHRvIGV4cGxpY2l0bHkgZW5hYmxlL2Rpc2FibGUgY29sb3JzXG4gKi9cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbXBsZXhpdHlcbmZ1bmN0aW9uIHVzZUNvbG9ycygpIHtcblx0Ly8gTkI6IEluIGFuIEVsZWN0cm9uIHByZWxvYWQgc2NyaXB0LCBkb2N1bWVudCB3aWxsIGJlIGRlZmluZWQgYnV0IG5vdCBmdWxseVxuXHQvLyBpbml0aWFsaXplZC4gU2luY2Ugd2Uga25vdyB3ZSdyZSBpbiBDaHJvbWUsIHdlJ2xsIGp1c3QgZGV0ZWN0IHRoaXMgY2FzZVxuXHQvLyBleHBsaWNpdGx5XG5cdGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cucHJvY2VzcyAmJiAod2luZG93LnByb2Nlc3MudHlwZSA9PT0gJ3JlbmRlcmVyJyB8fCB3aW5kb3cucHJvY2Vzcy5fX253anMpKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHQvLyBJbnRlcm5ldCBFeHBsb3JlciBhbmQgRWRnZSBkbyBub3Qgc3VwcG9ydCBjb2xvcnMuXG5cdGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IudXNlckFnZW50ICYmIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5tYXRjaCgvKGVkZ2V8dHJpZGVudClcXC8oXFxkKykvKSkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdC8vIElzIHdlYmtpdD8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTY0NTk2MDYvMzc2NzczXG5cdC8vIGRvY3VtZW50IGlzIHVuZGVmaW5lZCBpbiByZWFjdC1uYXRpdmU6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC1uYXRpdmUvcHVsbC8xNjMyXG5cdHJldHVybiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5XZWJraXRBcHBlYXJhbmNlKSB8fFxuXHRcdC8vIElzIGZpcmVidWc/IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzM5ODEyMC8zNzY3NzNcblx0XHQodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmNvbnNvbGUgJiYgKHdpbmRvdy5jb25zb2xlLmZpcmVidWcgfHwgKHdpbmRvdy5jb25zb2xlLmV4Y2VwdGlvbiAmJiB3aW5kb3cuY29uc29sZS50YWJsZSkpKSB8fFxuXHRcdC8vIElzIGZpcmVmb3ggPj0gdjMxP1xuXHRcdC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvVG9vbHMvV2ViX0NvbnNvbGUjU3R5bGluZ19tZXNzYWdlc1xuXHRcdCh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IudXNlckFnZW50ICYmIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5tYXRjaCgvZmlyZWZveFxcLyhcXGQrKS8pICYmIHBhcnNlSW50KFJlZ0V4cC4kMSwgMTApID49IDMxKSB8fFxuXHRcdC8vIERvdWJsZSBjaGVjayB3ZWJraXQgaW4gdXNlckFnZW50IGp1c3QgaW4gY2FzZSB3ZSBhcmUgaW4gYSB3b3JrZXJcblx0XHQodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudCAmJiBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkubWF0Y2goL2FwcGxld2Via2l0XFwvKFxcZCspLykpO1xufVxuXG4vKipcbiAqIENvbG9yaXplIGxvZyBhcmd1bWVudHMgaWYgZW5hYmxlZC5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGZvcm1hdEFyZ3MoYXJncykge1xuXHRhcmdzWzBdID0gKHRoaXMudXNlQ29sb3JzID8gJyVjJyA6ICcnKSArXG5cdFx0dGhpcy5uYW1lc3BhY2UgK1xuXHRcdCh0aGlzLnVzZUNvbG9ycyA/ICcgJWMnIDogJyAnKSArXG5cdFx0YXJnc1swXSArXG5cdFx0KHRoaXMudXNlQ29sb3JzID8gJyVjICcgOiAnICcpICtcblx0XHQnKycgKyBtb2R1bGUuZXhwb3J0cy5odW1hbml6ZSh0aGlzLmRpZmYpO1xuXG5cdGlmICghdGhpcy51c2VDb2xvcnMpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBjID0gJ2NvbG9yOiAnICsgdGhpcy5jb2xvcjtcblx0YXJncy5zcGxpY2UoMSwgMCwgYywgJ2NvbG9yOiBpbmhlcml0Jyk7XG5cblx0Ly8gVGhlIGZpbmFsIFwiJWNcIiBpcyBzb21ld2hhdCB0cmlja3ksIGJlY2F1c2UgdGhlcmUgY291bGQgYmUgb3RoZXJcblx0Ly8gYXJndW1lbnRzIHBhc3NlZCBlaXRoZXIgYmVmb3JlIG9yIGFmdGVyIHRoZSAlYywgc28gd2UgbmVlZCB0b1xuXHQvLyBmaWd1cmUgb3V0IHRoZSBjb3JyZWN0IGluZGV4IHRvIGluc2VydCB0aGUgQ1NTIGludG9cblx0bGV0IGluZGV4ID0gMDtcblx0bGV0IGxhc3RDID0gMDtcblx0YXJnc1swXS5yZXBsYWNlKC8lW2EtekEtWiVdL2csIG1hdGNoID0+IHtcblx0XHRpZiAobWF0Y2ggPT09ICclJScpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aW5kZXgrKztcblx0XHRpZiAobWF0Y2ggPT09ICclYycpIHtcblx0XHRcdC8vIFdlIG9ubHkgYXJlIGludGVyZXN0ZWQgaW4gdGhlICpsYXN0KiAlY1xuXHRcdFx0Ly8gKHRoZSB1c2VyIG1heSBoYXZlIHByb3ZpZGVkIHRoZWlyIG93bilcblx0XHRcdGxhc3RDID0gaW5kZXg7XG5cdFx0fVxuXHR9KTtcblxuXHRhcmdzLnNwbGljZShsYXN0QywgMCwgYyk7XG59XG5cbi8qKlxuICogSW52b2tlcyBgY29uc29sZS5kZWJ1ZygpYCB3aGVuIGF2YWlsYWJsZS5cbiAqIE5vLW9wIHdoZW4gYGNvbnNvbGUuZGVidWdgIGlzIG5vdCBhIFwiZnVuY3Rpb25cIi5cbiAqIElmIGBjb25zb2xlLmRlYnVnYCBpcyBub3QgYXZhaWxhYmxlLCBmYWxscyBiYWNrXG4gKiB0byBgY29uc29sZS5sb2dgLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cbmV4cG9ydHMubG9nID0gY29uc29sZS5kZWJ1ZyB8fCBjb25zb2xlLmxvZyB8fCAoKCkgPT4ge30pO1xuXG4vKipcbiAqIFNhdmUgYG5hbWVzcGFjZXNgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2VzXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gc2F2ZShuYW1lc3BhY2VzKSB7XG5cdHRyeSB7XG5cdFx0aWYgKG5hbWVzcGFjZXMpIHtcblx0XHRcdGV4cG9ydHMuc3RvcmFnZS5zZXRJdGVtKCdkZWJ1ZycsIG5hbWVzcGFjZXMpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRleHBvcnRzLnN0b3JhZ2UucmVtb3ZlSXRlbSgnZGVidWcnKTtcblx0XHR9XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Ly8gU3dhbGxvd1xuXHRcdC8vIFhYWCAoQFFpeC0pIHNob3VsZCB3ZSBiZSBsb2dnaW5nIHRoZXNlP1xuXHR9XG59XG5cbi8qKlxuICogTG9hZCBgbmFtZXNwYWNlc2AuXG4gKlxuICogQHJldHVybiB7U3RyaW5nfSByZXR1cm5zIHRoZSBwcmV2aW91c2x5IHBlcnNpc3RlZCBkZWJ1ZyBtb2Rlc1xuICogQGFwaSBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGxvYWQoKSB7XG5cdGxldCByO1xuXHR0cnkge1xuXHRcdHIgPSBleHBvcnRzLnN0b3JhZ2UuZ2V0SXRlbSgnZGVidWcnKTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHQvLyBTd2FsbG93XG5cdFx0Ly8gWFhYIChAUWl4LSkgc2hvdWxkIHdlIGJlIGxvZ2dpbmcgdGhlc2U/XG5cdH1cblxuXHQvLyBJZiBkZWJ1ZyBpc24ndCBzZXQgaW4gTFMsIGFuZCB3ZSdyZSBpbiBFbGVjdHJvbiwgdHJ5IHRvIGxvYWQgJERFQlVHXG5cdGlmICghciAmJiB0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgJ2VudicgaW4gcHJvY2Vzcykge1xuXHRcdHIgPSBwcm9jZXNzLmVudi5ERUJVRztcblx0fVxuXG5cdHJldHVybiByO1xufVxuXG4vKipcbiAqIExvY2Fsc3RvcmFnZSBhdHRlbXB0cyB0byByZXR1cm4gdGhlIGxvY2Fsc3RvcmFnZS5cbiAqXG4gKiBUaGlzIGlzIG5lY2Vzc2FyeSBiZWNhdXNlIHNhZmFyaSB0aHJvd3NcbiAqIHdoZW4gYSB1c2VyIGRpc2FibGVzIGNvb2tpZXMvbG9jYWxzdG9yYWdlXG4gKiBhbmQgeW91IGF0dGVtcHQgdG8gYWNjZXNzIGl0LlxuICpcbiAqIEByZXR1cm4ge0xvY2FsU3RvcmFnZX1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGxvY2Fsc3RvcmFnZSgpIHtcblx0dHJ5IHtcblx0XHQvLyBUVk1MS2l0IChBcHBsZSBUViBKUyBSdW50aW1lKSBkb2VzIG5vdCBoYXZlIGEgd2luZG93IG9iamVjdCwganVzdCBsb2NhbFN0b3JhZ2UgaW4gdGhlIGdsb2JhbCBjb250ZXh0XG5cdFx0Ly8gVGhlIEJyb3dzZXIgYWxzbyBoYXMgbG9jYWxTdG9yYWdlIGluIHRoZSBnbG9iYWwgY29udGV4dC5cblx0XHRyZXR1cm4gbG9jYWxTdG9yYWdlO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdC8vIFN3YWxsb3dcblx0XHQvLyBYWFggKEBRaXgtKSBzaG91bGQgd2UgYmUgbG9nZ2luZyB0aGVzZT9cblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY29tbW9uJykoZXhwb3J0cyk7XG5cbmNvbnN0IHtmb3JtYXR0ZXJzfSA9IG1vZHVsZS5leHBvcnRzO1xuXG4vKipcbiAqIE1hcCAlaiB0byBgSlNPTi5zdHJpbmdpZnkoKWAsIHNpbmNlIG5vIFdlYiBJbnNwZWN0b3JzIGRvIHRoYXQgYnkgZGVmYXVsdC5cbiAqL1xuXG5mb3JtYXR0ZXJzLmogPSBmdW5jdGlvbiAodikge1xuXHR0cnkge1xuXHRcdHJldHVybiBKU09OLnN0cmluZ2lmeSh2KTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRyZXR1cm4gJ1tVbmV4cGVjdGVkSlNPTlBhcnNlRXJyb3JdOiAnICsgZXJyb3IubWVzc2FnZTtcblx0fVxufTtcbiIsIlxuLyoqXG4gKiBUaGlzIGlzIHRoZSBjb21tb24gbG9naWMgZm9yIGJvdGggdGhlIE5vZGUuanMgYW5kIHdlYiBicm93c2VyXG4gKiBpbXBsZW1lbnRhdGlvbnMgb2YgYGRlYnVnKClgLlxuICovXG5cbmZ1bmN0aW9uIHNldHVwKGVudikge1xuXHRjcmVhdGVEZWJ1Zy5kZWJ1ZyA9IGNyZWF0ZURlYnVnO1xuXHRjcmVhdGVEZWJ1Zy5kZWZhdWx0ID0gY3JlYXRlRGVidWc7XG5cdGNyZWF0ZURlYnVnLmNvZXJjZSA9IGNvZXJjZTtcblx0Y3JlYXRlRGVidWcuZGlzYWJsZSA9IGRpc2FibGU7XG5cdGNyZWF0ZURlYnVnLmVuYWJsZSA9IGVuYWJsZTtcblx0Y3JlYXRlRGVidWcuZW5hYmxlZCA9IGVuYWJsZWQ7XG5cdGNyZWF0ZURlYnVnLmh1bWFuaXplID0gcmVxdWlyZSgnbXMnKTtcblx0Y3JlYXRlRGVidWcuZGVzdHJveSA9IGRlc3Ryb3k7XG5cblx0T2JqZWN0LmtleXMoZW52KS5mb3JFYWNoKGtleSA9PiB7XG5cdFx0Y3JlYXRlRGVidWdba2V5XSA9IGVudltrZXldO1xuXHR9KTtcblxuXHQvKipcblx0KiBUaGUgY3VycmVudGx5IGFjdGl2ZSBkZWJ1ZyBtb2RlIG5hbWVzLCBhbmQgbmFtZXMgdG8gc2tpcC5cblx0Ki9cblxuXHRjcmVhdGVEZWJ1Zy5uYW1lcyA9IFtdO1xuXHRjcmVhdGVEZWJ1Zy5za2lwcyA9IFtdO1xuXG5cdC8qKlxuXHQqIE1hcCBvZiBzcGVjaWFsIFwiJW5cIiBoYW5kbGluZyBmdW5jdGlvbnMsIGZvciB0aGUgZGVidWcgXCJmb3JtYXRcIiBhcmd1bWVudC5cblx0KlxuXHQqIFZhbGlkIGtleSBuYW1lcyBhcmUgYSBzaW5nbGUsIGxvd2VyIG9yIHVwcGVyLWNhc2UgbGV0dGVyLCBpLmUuIFwiblwiIGFuZCBcIk5cIi5cblx0Ki9cblx0Y3JlYXRlRGVidWcuZm9ybWF0dGVycyA9IHt9O1xuXG5cdC8qKlxuXHQqIFNlbGVjdHMgYSBjb2xvciBmb3IgYSBkZWJ1ZyBuYW1lc3BhY2Vcblx0KiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlIFRoZSBuYW1lc3BhY2Ugc3RyaW5nIGZvciB0aGUgZm9yIHRoZSBkZWJ1ZyBpbnN0YW5jZSB0byBiZSBjb2xvcmVkXG5cdCogQHJldHVybiB7TnVtYmVyfFN0cmluZ30gQW4gQU5TSSBjb2xvciBjb2RlIGZvciB0aGUgZ2l2ZW4gbmFtZXNwYWNlXG5cdCogQGFwaSBwcml2YXRlXG5cdCovXG5cdGZ1bmN0aW9uIHNlbGVjdENvbG9yKG5hbWVzcGFjZSkge1xuXHRcdGxldCBoYXNoID0gMDtcblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbmFtZXNwYWNlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRoYXNoID0gKChoYXNoIDw8IDUpIC0gaGFzaCkgKyBuYW1lc3BhY2UuY2hhckNvZGVBdChpKTtcblx0XHRcdGhhc2ggfD0gMDsgLy8gQ29udmVydCB0byAzMmJpdCBpbnRlZ2VyXG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNyZWF0ZURlYnVnLmNvbG9yc1tNYXRoLmFicyhoYXNoKSAlIGNyZWF0ZURlYnVnLmNvbG9ycy5sZW5ndGhdO1xuXHR9XG5cdGNyZWF0ZURlYnVnLnNlbGVjdENvbG9yID0gc2VsZWN0Q29sb3I7XG5cblx0LyoqXG5cdCogQ3JlYXRlIGEgZGVidWdnZXIgd2l0aCB0aGUgZ2l2ZW4gYG5hbWVzcGFjZWAuXG5cdCpcblx0KiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlXG5cdCogQHJldHVybiB7RnVuY3Rpb259XG5cdCogQGFwaSBwdWJsaWNcblx0Ki9cblx0ZnVuY3Rpb24gY3JlYXRlRGVidWcobmFtZXNwYWNlKSB7XG5cdFx0bGV0IHByZXZUaW1lO1xuXHRcdGxldCBlbmFibGVPdmVycmlkZSA9IG51bGw7XG5cblx0XHRmdW5jdGlvbiBkZWJ1ZyguLi5hcmdzKSB7XG5cdFx0XHQvLyBEaXNhYmxlZD9cblx0XHRcdGlmICghZGVidWcuZW5hYmxlZCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHNlbGYgPSBkZWJ1ZztcblxuXHRcdFx0Ly8gU2V0IGBkaWZmYCB0aW1lc3RhbXBcblx0XHRcdGNvbnN0IGN1cnIgPSBOdW1iZXIobmV3IERhdGUoKSk7XG5cdFx0XHRjb25zdCBtcyA9IGN1cnIgLSAocHJldlRpbWUgfHwgY3Vycik7XG5cdFx0XHRzZWxmLmRpZmYgPSBtcztcblx0XHRcdHNlbGYucHJldiA9IHByZXZUaW1lO1xuXHRcdFx0c2VsZi5jdXJyID0gY3Vycjtcblx0XHRcdHByZXZUaW1lID0gY3VycjtcblxuXHRcdFx0YXJnc1swXSA9IGNyZWF0ZURlYnVnLmNvZXJjZShhcmdzWzBdKTtcblxuXHRcdFx0aWYgKHR5cGVvZiBhcmdzWzBdICE9PSAnc3RyaW5nJykge1xuXHRcdFx0XHQvLyBBbnl0aGluZyBlbHNlIGxldCdzIGluc3BlY3Qgd2l0aCAlT1xuXHRcdFx0XHRhcmdzLnVuc2hpZnQoJyVPJyk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEFwcGx5IGFueSBgZm9ybWF0dGVyc2AgdHJhbnNmb3JtYXRpb25zXG5cdFx0XHRsZXQgaW5kZXggPSAwO1xuXHRcdFx0YXJnc1swXSA9IGFyZ3NbMF0ucmVwbGFjZSgvJShbYS16QS1aJV0pL2csIChtYXRjaCwgZm9ybWF0KSA9PiB7XG5cdFx0XHRcdC8vIElmIHdlIGVuY291bnRlciBhbiBlc2NhcGVkICUgdGhlbiBkb24ndCBpbmNyZWFzZSB0aGUgYXJyYXkgaW5kZXhcblx0XHRcdFx0aWYgKG1hdGNoID09PSAnJSUnKSB7XG5cdFx0XHRcdFx0cmV0dXJuICclJztcblx0XHRcdFx0fVxuXHRcdFx0XHRpbmRleCsrO1xuXHRcdFx0XHRjb25zdCBmb3JtYXR0ZXIgPSBjcmVhdGVEZWJ1Zy5mb3JtYXR0ZXJzW2Zvcm1hdF07XG5cdFx0XHRcdGlmICh0eXBlb2YgZm9ybWF0dGVyID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdFx0Y29uc3QgdmFsID0gYXJnc1tpbmRleF07XG5cdFx0XHRcdFx0bWF0Y2ggPSBmb3JtYXR0ZXIuY2FsbChzZWxmLCB2YWwpO1xuXG5cdFx0XHRcdFx0Ly8gTm93IHdlIG5lZWQgdG8gcmVtb3ZlIGBhcmdzW2luZGV4XWAgc2luY2UgaXQncyBpbmxpbmVkIGluIHRoZSBgZm9ybWF0YFxuXHRcdFx0XHRcdGFyZ3Muc3BsaWNlKGluZGV4LCAxKTtcblx0XHRcdFx0XHRpbmRleC0tO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBtYXRjaDtcblx0XHRcdH0pO1xuXG5cdFx0XHQvLyBBcHBseSBlbnYtc3BlY2lmaWMgZm9ybWF0dGluZyAoY29sb3JzLCBldGMuKVxuXHRcdFx0Y3JlYXRlRGVidWcuZm9ybWF0QXJncy5jYWxsKHNlbGYsIGFyZ3MpO1xuXG5cdFx0XHRjb25zdCBsb2dGbiA9IHNlbGYubG9nIHx8IGNyZWF0ZURlYnVnLmxvZztcblx0XHRcdGxvZ0ZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXHRcdH1cblxuXHRcdGRlYnVnLm5hbWVzcGFjZSA9IG5hbWVzcGFjZTtcblx0XHRkZWJ1Zy51c2VDb2xvcnMgPSBjcmVhdGVEZWJ1Zy51c2VDb2xvcnMoKTtcblx0XHRkZWJ1Zy5jb2xvciA9IGNyZWF0ZURlYnVnLnNlbGVjdENvbG9yKG5hbWVzcGFjZSk7XG5cdFx0ZGVidWcuZXh0ZW5kID0gZXh0ZW5kO1xuXHRcdGRlYnVnLmRlc3Ryb3kgPSBjcmVhdGVEZWJ1Zy5kZXN0cm95OyAvLyBYWFggVGVtcG9yYXJ5LiBXaWxsIGJlIHJlbW92ZWQgaW4gdGhlIG5leHQgbWFqb3IgcmVsZWFzZS5cblxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkZWJ1ZywgJ2VuYWJsZWQnLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcblx0XHRcdGdldDogKCkgPT4gZW5hYmxlT3ZlcnJpZGUgPT09IG51bGwgPyBjcmVhdGVEZWJ1Zy5lbmFibGVkKG5hbWVzcGFjZSkgOiBlbmFibGVPdmVycmlkZSxcblx0XHRcdHNldDogdiA9PiB7XG5cdFx0XHRcdGVuYWJsZU92ZXJyaWRlID0gdjtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdC8vIEVudi1zcGVjaWZpYyBpbml0aWFsaXphdGlvbiBsb2dpYyBmb3IgZGVidWcgaW5zdGFuY2VzXG5cdFx0aWYgKHR5cGVvZiBjcmVhdGVEZWJ1Zy5pbml0ID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRjcmVhdGVEZWJ1Zy5pbml0KGRlYnVnKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZGVidWc7XG5cdH1cblxuXHRmdW5jdGlvbiBleHRlbmQobmFtZXNwYWNlLCBkZWxpbWl0ZXIpIHtcblx0XHRjb25zdCBuZXdEZWJ1ZyA9IGNyZWF0ZURlYnVnKHRoaXMubmFtZXNwYWNlICsgKHR5cGVvZiBkZWxpbWl0ZXIgPT09ICd1bmRlZmluZWQnID8gJzonIDogZGVsaW1pdGVyKSArIG5hbWVzcGFjZSk7XG5cdFx0bmV3RGVidWcubG9nID0gdGhpcy5sb2c7XG5cdFx0cmV0dXJuIG5ld0RlYnVnO1xuXHR9XG5cblx0LyoqXG5cdCogRW5hYmxlcyBhIGRlYnVnIG1vZGUgYnkgbmFtZXNwYWNlcy4gVGhpcyBjYW4gaW5jbHVkZSBtb2Rlc1xuXHQqIHNlcGFyYXRlZCBieSBhIGNvbG9uIGFuZCB3aWxkY2FyZHMuXG5cdCpcblx0KiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlc1xuXHQqIEBhcGkgcHVibGljXG5cdCovXG5cdGZ1bmN0aW9uIGVuYWJsZShuYW1lc3BhY2VzKSB7XG5cdFx0Y3JlYXRlRGVidWcuc2F2ZShuYW1lc3BhY2VzKTtcblxuXHRcdGNyZWF0ZURlYnVnLm5hbWVzID0gW107XG5cdFx0Y3JlYXRlRGVidWcuc2tpcHMgPSBbXTtcblxuXHRcdGxldCBpO1xuXHRcdGNvbnN0IHNwbGl0ID0gKHR5cGVvZiBuYW1lc3BhY2VzID09PSAnc3RyaW5nJyA/IG5hbWVzcGFjZXMgOiAnJykuc3BsaXQoL1tcXHMsXSsvKTtcblx0XHRjb25zdCBsZW4gPSBzcGxpdC5sZW5ndGg7XG5cblx0XHRmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdGlmICghc3BsaXRbaV0pIHtcblx0XHRcdFx0Ly8gaWdub3JlIGVtcHR5IHN0cmluZ3Ncblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdG5hbWVzcGFjZXMgPSBzcGxpdFtpXS5yZXBsYWNlKC9cXCovZywgJy4qPycpO1xuXG5cdFx0XHRpZiAobmFtZXNwYWNlc1swXSA9PT0gJy0nKSB7XG5cdFx0XHRcdGNyZWF0ZURlYnVnLnNraXBzLnB1c2gobmV3IFJlZ0V4cCgnXicgKyBuYW1lc3BhY2VzLnN1YnN0cigxKSArICckJykpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y3JlYXRlRGVidWcubmFtZXMucHVzaChuZXcgUmVnRXhwKCdeJyArIG5hbWVzcGFjZXMgKyAnJCcpKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvKipcblx0KiBEaXNhYmxlIGRlYnVnIG91dHB1dC5cblx0KlxuXHQqIEByZXR1cm4ge1N0cmluZ30gbmFtZXNwYWNlc1xuXHQqIEBhcGkgcHVibGljXG5cdCovXG5cdGZ1bmN0aW9uIGRpc2FibGUoKSB7XG5cdFx0Y29uc3QgbmFtZXNwYWNlcyA9IFtcblx0XHRcdC4uLmNyZWF0ZURlYnVnLm5hbWVzLm1hcCh0b05hbWVzcGFjZSksXG5cdFx0XHQuLi5jcmVhdGVEZWJ1Zy5za2lwcy5tYXAodG9OYW1lc3BhY2UpLm1hcChuYW1lc3BhY2UgPT4gJy0nICsgbmFtZXNwYWNlKVxuXHRcdF0uam9pbignLCcpO1xuXHRcdGNyZWF0ZURlYnVnLmVuYWJsZSgnJyk7XG5cdFx0cmV0dXJuIG5hbWVzcGFjZXM7XG5cdH1cblxuXHQvKipcblx0KiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIG1vZGUgbmFtZSBpcyBlbmFibGVkLCBmYWxzZSBvdGhlcndpc2UuXG5cdCpcblx0KiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuXHQqIEByZXR1cm4ge0Jvb2xlYW59XG5cdCogQGFwaSBwdWJsaWNcblx0Ki9cblx0ZnVuY3Rpb24gZW5hYmxlZChuYW1lKSB7XG5cdFx0aWYgKG5hbWVbbmFtZS5sZW5ndGggLSAxXSA9PT0gJyonKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRsZXQgaTtcblx0XHRsZXQgbGVuO1xuXG5cdFx0Zm9yIChpID0gMCwgbGVuID0gY3JlYXRlRGVidWcuc2tpcHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdGlmIChjcmVhdGVEZWJ1Zy5za2lwc1tpXS50ZXN0KG5hbWUpKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRmb3IgKGkgPSAwLCBsZW4gPSBjcmVhdGVEZWJ1Zy5uYW1lcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0aWYgKGNyZWF0ZURlYnVnLm5hbWVzW2ldLnRlc3QobmFtZSkpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0LyoqXG5cdCogQ29udmVydCByZWdleHAgdG8gbmFtZXNwYWNlXG5cdCpcblx0KiBAcGFyYW0ge1JlZ0V4cH0gcmVneGVwXG5cdCogQHJldHVybiB7U3RyaW5nfSBuYW1lc3BhY2Vcblx0KiBAYXBpIHByaXZhdGVcblx0Ki9cblx0ZnVuY3Rpb24gdG9OYW1lc3BhY2UocmVnZXhwKSB7XG5cdFx0cmV0dXJuIHJlZ2V4cC50b1N0cmluZygpXG5cdFx0XHQuc3Vic3RyaW5nKDIsIHJlZ2V4cC50b1N0cmluZygpLmxlbmd0aCAtIDIpXG5cdFx0XHQucmVwbGFjZSgvXFwuXFwqXFw/JC8sICcqJyk7XG5cdH1cblxuXHQvKipcblx0KiBDb2VyY2UgYHZhbGAuXG5cdCpcblx0KiBAcGFyYW0ge01peGVkfSB2YWxcblx0KiBAcmV0dXJuIHtNaXhlZH1cblx0KiBAYXBpIHByaXZhdGVcblx0Ki9cblx0ZnVuY3Rpb24gY29lcmNlKHZhbCkge1xuXHRcdGlmICh2YWwgaW5zdGFuY2VvZiBFcnJvcikge1xuXHRcdFx0cmV0dXJuIHZhbC5zdGFjayB8fCB2YWwubWVzc2FnZTtcblx0XHR9XG5cdFx0cmV0dXJuIHZhbDtcblx0fVxuXG5cdC8qKlxuXHQqIFhYWCBETyBOT1QgVVNFLiBUaGlzIGlzIGEgdGVtcG9yYXJ5IHN0dWIgZnVuY3Rpb24uXG5cdCogWFhYIEl0IFdJTEwgYmUgcmVtb3ZlZCBpbiB0aGUgbmV4dCBtYWpvciByZWxlYXNlLlxuXHQqL1xuXHRmdW5jdGlvbiBkZXN0cm95KCkge1xuXHRcdGNvbnNvbGUud2FybignSW5zdGFuY2UgbWV0aG9kIGBkZWJ1Zy5kZXN0cm95KClgIGlzIGRlcHJlY2F0ZWQgYW5kIG5vIGxvbmdlciBkb2VzIGFueXRoaW5nLiBJdCB3aWxsIGJlIHJlbW92ZWQgaW4gdGhlIG5leHQgbWFqb3IgdmVyc2lvbiBvZiBgZGVidWdgLicpO1xuXHR9XG5cblx0Y3JlYXRlRGVidWcuZW5hYmxlKGNyZWF0ZURlYnVnLmxvYWQoKSk7XG5cblx0cmV0dXJuIGNyZWF0ZURlYnVnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldHVwO1xuIiwibW9kdWxlLmV4cG9ydHMgPSAoKCkgPT4ge1xuICBpZiAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4gc2VsZjtcbiAgfSBlbHNlIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHdpbmRvdztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xuICB9XG59KSgpO1xuIiwiY29uc3QgU29ja2V0ID0gcmVxdWlyZShcIi4vc29ja2V0XCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICh1cmksIG9wdHMpID0+IG5ldyBTb2NrZXQodXJpLCBvcHRzKTtcblxuLyoqXG4gKiBFeHBvc2UgZGVwcyBmb3IgbGVnYWN5IGNvbXBhdGliaWxpdHlcbiAqIGFuZCBzdGFuZGFsb25lIGJyb3dzZXIgYWNjZXNzLlxuICovXG5cbm1vZHVsZS5leHBvcnRzLlNvY2tldCA9IFNvY2tldDtcbm1vZHVsZS5leHBvcnRzLnByb3RvY29sID0gU29ja2V0LnByb3RvY29sOyAvLyB0aGlzIGlzIGFuIGludFxubW9kdWxlLmV4cG9ydHMuVHJhbnNwb3J0ID0gcmVxdWlyZShcIi4vdHJhbnNwb3J0XCIpO1xubW9kdWxlLmV4cG9ydHMudHJhbnNwb3J0cyA9IHJlcXVpcmUoXCIuL3RyYW5zcG9ydHMvaW5kZXhcIik7XG5tb2R1bGUuZXhwb3J0cy5wYXJzZXIgPSByZXF1aXJlKFwiZW5naW5lLmlvLXBhcnNlclwiKTtcbiIsImNvbnN0IHRyYW5zcG9ydHMgPSByZXF1aXJlKFwiLi90cmFuc3BvcnRzL2luZGV4XCIpO1xuY29uc3QgRW1pdHRlciA9IHJlcXVpcmUoXCJjb21wb25lbnQtZW1pdHRlclwiKTtcbmNvbnN0IGRlYnVnID0gcmVxdWlyZShcImRlYnVnXCIpKFwiZW5naW5lLmlvLWNsaWVudDpzb2NrZXRcIik7XG5jb25zdCBwYXJzZXIgPSByZXF1aXJlKFwiZW5naW5lLmlvLXBhcnNlclwiKTtcbmNvbnN0IHBhcnNldXJpID0gcmVxdWlyZShcInBhcnNldXJpXCIpO1xuY29uc3QgcGFyc2VxcyA9IHJlcXVpcmUoXCJwYXJzZXFzXCIpO1xuXG5jbGFzcyBTb2NrZXQgZXh0ZW5kcyBFbWl0dGVyIHtcbiAgLyoqXG4gICAqIFNvY2tldCBjb25zdHJ1Y3Rvci5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd8T2JqZWN0fSB1cmkgb3Igb3B0aW9uc1xuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cbiAgY29uc3RydWN0b3IodXJpLCBvcHRzID0ge30pIHtcbiAgICBzdXBlcigpO1xuXG4gICAgaWYgKHVyaSAmJiBcIm9iamVjdFwiID09PSB0eXBlb2YgdXJpKSB7XG4gICAgICBvcHRzID0gdXJpO1xuICAgICAgdXJpID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAodXJpKSB7XG4gICAgICB1cmkgPSBwYXJzZXVyaSh1cmkpO1xuICAgICAgb3B0cy5ob3N0bmFtZSA9IHVyaS5ob3N0O1xuICAgICAgb3B0cy5zZWN1cmUgPSB1cmkucHJvdG9jb2wgPT09IFwiaHR0cHNcIiB8fCB1cmkucHJvdG9jb2wgPT09IFwid3NzXCI7XG4gICAgICBvcHRzLnBvcnQgPSB1cmkucG9ydDtcbiAgICAgIGlmICh1cmkucXVlcnkpIG9wdHMucXVlcnkgPSB1cmkucXVlcnk7XG4gICAgfSBlbHNlIGlmIChvcHRzLmhvc3QpIHtcbiAgICAgIG9wdHMuaG9zdG5hbWUgPSBwYXJzZXVyaShvcHRzLmhvc3QpLmhvc3Q7XG4gICAgfVxuXG4gICAgdGhpcy5zZWN1cmUgPVxuICAgICAgbnVsbCAhPSBvcHRzLnNlY3VyZVxuICAgICAgICA/IG9wdHMuc2VjdXJlXG4gICAgICAgIDogdHlwZW9mIGxvY2F0aW9uICE9PSBcInVuZGVmaW5lZFwiICYmIFwiaHR0cHM6XCIgPT09IGxvY2F0aW9uLnByb3RvY29sO1xuXG4gICAgaWYgKG9wdHMuaG9zdG5hbWUgJiYgIW9wdHMucG9ydCkge1xuICAgICAgLy8gaWYgbm8gcG9ydCBpcyBzcGVjaWZpZWQgbWFudWFsbHksIHVzZSB0aGUgcHJvdG9jb2wgZGVmYXVsdFxuICAgICAgb3B0cy5wb3J0ID0gdGhpcy5zZWN1cmUgPyBcIjQ0M1wiIDogXCI4MFwiO1xuICAgIH1cblxuICAgIHRoaXMuaG9zdG5hbWUgPVxuICAgICAgb3B0cy5ob3N0bmFtZSB8fFxuICAgICAgKHR5cGVvZiBsb2NhdGlvbiAhPT0gXCJ1bmRlZmluZWRcIiA/IGxvY2F0aW9uLmhvc3RuYW1lIDogXCJsb2NhbGhvc3RcIik7XG4gICAgdGhpcy5wb3J0ID1cbiAgICAgIG9wdHMucG9ydCB8fFxuICAgICAgKHR5cGVvZiBsb2NhdGlvbiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBsb2NhdGlvbi5wb3J0XG4gICAgICAgID8gbG9jYXRpb24ucG9ydFxuICAgICAgICA6IHRoaXMuc2VjdXJlXG4gICAgICAgID8gNDQzXG4gICAgICAgIDogODApO1xuXG4gICAgdGhpcy50cmFuc3BvcnRzID0gb3B0cy50cmFuc3BvcnRzIHx8IFtcInBvbGxpbmdcIiwgXCJ3ZWJzb2NrZXRcIl07XG4gICAgdGhpcy5yZWFkeVN0YXRlID0gXCJcIjtcbiAgICB0aGlzLndyaXRlQnVmZmVyID0gW107XG4gICAgdGhpcy5wcmV2QnVmZmVyTGVuID0gMDtcblxuICAgIHRoaXMub3B0cyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiL2VuZ2luZS5pb1wiLFxuICAgICAgICBhZ2VudDogZmFsc2UsXG4gICAgICAgIHdpdGhDcmVkZW50aWFsczogZmFsc2UsXG4gICAgICAgIHVwZ3JhZGU6IHRydWUsXG4gICAgICAgIGpzb25wOiB0cnVlLFxuICAgICAgICB0aW1lc3RhbXBQYXJhbTogXCJ0XCIsXG4gICAgICAgIHJlbWVtYmVyVXBncmFkZTogZmFsc2UsXG4gICAgICAgIHJlamVjdFVuYXV0aG9yaXplZDogdHJ1ZSxcbiAgICAgICAgcGVyTWVzc2FnZURlZmxhdGU6IHtcbiAgICAgICAgICB0aHJlc2hvbGQ6IDEwMjRcbiAgICAgICAgfSxcbiAgICAgICAgdHJhbnNwb3J0T3B0aW9uczoge30sXG4gICAgICAgIGNsb3NlT25CZWZvcmV1bmxvYWQ6IHRydWVcbiAgICAgIH0sXG4gICAgICBvcHRzXG4gICAgKTtcblxuICAgIHRoaXMub3B0cy5wYXRoID0gdGhpcy5vcHRzLnBhdGgucmVwbGFjZSgvXFwvJC8sIFwiXCIpICsgXCIvXCI7XG5cbiAgICBpZiAodHlwZW9mIHRoaXMub3B0cy5xdWVyeSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgdGhpcy5vcHRzLnF1ZXJ5ID0gcGFyc2Vxcy5kZWNvZGUodGhpcy5vcHRzLnF1ZXJ5KTtcbiAgICB9XG5cbiAgICAvLyBzZXQgb24gaGFuZHNoYWtlXG4gICAgdGhpcy5pZCA9IG51bGw7XG4gICAgdGhpcy51cGdyYWRlcyA9IG51bGw7XG4gICAgdGhpcy5waW5nSW50ZXJ2YWwgPSBudWxsO1xuICAgIHRoaXMucGluZ1RpbWVvdXQgPSBudWxsO1xuXG4gICAgLy8gc2V0IG9uIGhlYXJ0YmVhdFxuICAgIHRoaXMucGluZ1RpbWVvdXRUaW1lciA9IG51bGw7XG5cbiAgICBpZiAodHlwZW9mIGFkZEV2ZW50TGlzdGVuZXIgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgaWYgKHRoaXMub3B0cy5jbG9zZU9uQmVmb3JldW5sb2FkKSB7XG4gICAgICAgIC8vIEZpcmVmb3ggY2xvc2VzIHRoZSBjb25uZWN0aW9uIHdoZW4gdGhlIFwiYmVmb3JldW5sb2FkXCIgZXZlbnQgaXMgZW1pdHRlZCBidXQgbm90IENocm9tZS4gVGhpcyBldmVudCBsaXN0ZW5lclxuICAgICAgICAvLyBlbnN1cmVzIGV2ZXJ5IGJyb3dzZXIgYmVoYXZlcyB0aGUgc2FtZSAobm8gXCJkaXNjb25uZWN0XCIgZXZlbnQgYXQgdGhlIFNvY2tldC5JTyBsZXZlbCB3aGVuIHRoZSBwYWdlIGlzXG4gICAgICAgIC8vIGNsb3NlZC9yZWxvYWRlZClcbiAgICAgICAgYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICBcImJlZm9yZXVubG9hZFwiLFxuICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnRyYW5zcG9ydCkge1xuICAgICAgICAgICAgICAvLyBzaWxlbnRseSBjbG9zZSB0aGUgdHJhbnNwb3J0XG4gICAgICAgICAgICAgIHRoaXMudHJhbnNwb3J0LnJlbW92ZUFsbExpc3RlbmVycygpO1xuICAgICAgICAgICAgICB0aGlzLnRyYW5zcG9ydC5jbG9zZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZmFsc2VcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmhvc3RuYW1lICE9PSBcImxvY2FsaG9zdFwiKSB7XG4gICAgICAgIHRoaXMub2ZmbGluZUV2ZW50TGlzdGVuZXIgPSAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5vbkNsb3NlKFwidHJhbnNwb3J0IGNsb3NlXCIpO1xuICAgICAgICB9O1xuICAgICAgICBhZGRFdmVudExpc3RlbmVyKFwib2ZmbGluZVwiLCB0aGlzLm9mZmxpbmVFdmVudExpc3RlbmVyLCBmYWxzZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5vcGVuKCk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyB0cmFuc3BvcnQgb2YgdGhlIGdpdmVuIHR5cGUuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB0cmFuc3BvcnQgbmFtZVxuICAgKiBAcmV0dXJuIHtUcmFuc3BvcnR9XG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgY3JlYXRlVHJhbnNwb3J0KG5hbWUpIHtcbiAgICBkZWJ1ZygnY3JlYXRpbmcgdHJhbnNwb3J0IFwiJXNcIicsIG5hbWUpO1xuICAgIGNvbnN0IHF1ZXJ5ID0gY2xvbmUodGhpcy5vcHRzLnF1ZXJ5KTtcblxuICAgIC8vIGFwcGVuZCBlbmdpbmUuaW8gcHJvdG9jb2wgaWRlbnRpZmllclxuICAgIHF1ZXJ5LkVJTyA9IHBhcnNlci5wcm90b2NvbDtcblxuICAgIC8vIHRyYW5zcG9ydCBuYW1lXG4gICAgcXVlcnkudHJhbnNwb3J0ID0gbmFtZTtcblxuICAgIC8vIHNlc3Npb24gaWQgaWYgd2UgYWxyZWFkeSBoYXZlIG9uZVxuICAgIGlmICh0aGlzLmlkKSBxdWVyeS5zaWQgPSB0aGlzLmlkO1xuXG4gICAgY29uc3Qgb3B0cyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICB7fSxcbiAgICAgIHRoaXMub3B0cy50cmFuc3BvcnRPcHRpb25zW25hbWVdLFxuICAgICAgdGhpcy5vcHRzLFxuICAgICAge1xuICAgICAgICBxdWVyeSxcbiAgICAgICAgc29ja2V0OiB0aGlzLFxuICAgICAgICBob3N0bmFtZTogdGhpcy5ob3N0bmFtZSxcbiAgICAgICAgc2VjdXJlOiB0aGlzLnNlY3VyZSxcbiAgICAgICAgcG9ydDogdGhpcy5wb3J0XG4gICAgICB9XG4gICAgKTtcblxuICAgIGRlYnVnKFwib3B0aW9uczogJWpcIiwgb3B0cyk7XG5cbiAgICByZXR1cm4gbmV3IHRyYW5zcG9ydHNbbmFtZV0ob3B0cyk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgdHJhbnNwb3J0IHRvIHVzZSBhbmQgc3RhcnRzIHByb2JlLlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIG9wZW4oKSB7XG4gICAgbGV0IHRyYW5zcG9ydDtcbiAgICBpZiAoXG4gICAgICB0aGlzLm9wdHMucmVtZW1iZXJVcGdyYWRlICYmXG4gICAgICBTb2NrZXQucHJpb3JXZWJzb2NrZXRTdWNjZXNzICYmXG4gICAgICB0aGlzLnRyYW5zcG9ydHMuaW5kZXhPZihcIndlYnNvY2tldFwiKSAhPT0gLTFcbiAgICApIHtcbiAgICAgIHRyYW5zcG9ydCA9IFwid2Vic29ja2V0XCI7XG4gICAgfSBlbHNlIGlmICgwID09PSB0aGlzLnRyYW5zcG9ydHMubGVuZ3RoKSB7XG4gICAgICAvLyBFbWl0IGVycm9yIG9uIG5leHQgdGljayBzbyBpdCBjYW4gYmUgbGlzdGVuZWQgdG9cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmVtaXQoXCJlcnJvclwiLCBcIk5vIHRyYW5zcG9ydHMgYXZhaWxhYmxlXCIpO1xuICAgICAgfSwgMCk7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyYW5zcG9ydCA9IHRoaXMudHJhbnNwb3J0c1swXTtcbiAgICB9XG4gICAgdGhpcy5yZWFkeVN0YXRlID0gXCJvcGVuaW5nXCI7XG5cbiAgICAvLyBSZXRyeSB3aXRoIHRoZSBuZXh0IHRyYW5zcG9ydCBpZiB0aGUgdHJhbnNwb3J0IGlzIGRpc2FibGVkIChqc29ucDogZmFsc2UpXG4gICAgdHJ5IHtcbiAgICAgIHRyYW5zcG9ydCA9IHRoaXMuY3JlYXRlVHJhbnNwb3J0KHRyYW5zcG9ydCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgZGVidWcoXCJlcnJvciB3aGlsZSBjcmVhdGluZyB0cmFuc3BvcnQ6ICVzXCIsIGUpO1xuICAgICAgdGhpcy50cmFuc3BvcnRzLnNoaWZ0KCk7XG4gICAgICB0aGlzLm9wZW4oKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0cmFuc3BvcnQub3BlbigpO1xuICAgIHRoaXMuc2V0VHJhbnNwb3J0KHRyYW5zcG9ydCk7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgY3VycmVudCB0cmFuc3BvcnQuIERpc2FibGVzIHRoZSBleGlzdGluZyBvbmUgKGlmIGFueSkuXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgc2V0VHJhbnNwb3J0KHRyYW5zcG9ydCkge1xuICAgIGRlYnVnKFwic2V0dGluZyB0cmFuc3BvcnQgJXNcIiwgdHJhbnNwb3J0Lm5hbWUpO1xuXG4gICAgaWYgKHRoaXMudHJhbnNwb3J0KSB7XG4gICAgICBkZWJ1ZyhcImNsZWFyaW5nIGV4aXN0aW5nIHRyYW5zcG9ydCAlc1wiLCB0aGlzLnRyYW5zcG9ydC5uYW1lKTtcbiAgICAgIHRoaXMudHJhbnNwb3J0LnJlbW92ZUFsbExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIC8vIHNldCB1cCB0cmFuc3BvcnRcbiAgICB0aGlzLnRyYW5zcG9ydCA9IHRyYW5zcG9ydDtcblxuICAgIC8vIHNldCB1cCB0cmFuc3BvcnQgbGlzdGVuZXJzXG4gICAgdHJhbnNwb3J0XG4gICAgICAub24oXCJkcmFpblwiLCB0aGlzLm9uRHJhaW4uYmluZCh0aGlzKSlcbiAgICAgIC5vbihcInBhY2tldFwiLCB0aGlzLm9uUGFja2V0LmJpbmQodGhpcykpXG4gICAgICAub24oXCJlcnJvclwiLCB0aGlzLm9uRXJyb3IuYmluZCh0aGlzKSlcbiAgICAgIC5vbihcImNsb3NlXCIsICgpID0+IHtcbiAgICAgICAgdGhpcy5vbkNsb3NlKFwidHJhbnNwb3J0IGNsb3NlXCIpO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUHJvYmVzIGEgdHJhbnNwb3J0LlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gdHJhbnNwb3J0IG5hbWVcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBwcm9iZShuYW1lKSB7XG4gICAgZGVidWcoJ3Byb2JpbmcgdHJhbnNwb3J0IFwiJXNcIicsIG5hbWUpO1xuICAgIGxldCB0cmFuc3BvcnQgPSB0aGlzLmNyZWF0ZVRyYW5zcG9ydChuYW1lLCB7IHByb2JlOiAxIH0pO1xuICAgIGxldCBmYWlsZWQgPSBmYWxzZTtcblxuICAgIFNvY2tldC5wcmlvcldlYnNvY2tldFN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgIGNvbnN0IG9uVHJhbnNwb3J0T3BlbiA9ICgpID0+IHtcbiAgICAgIGlmIChmYWlsZWQpIHJldHVybjtcblxuICAgICAgZGVidWcoJ3Byb2JlIHRyYW5zcG9ydCBcIiVzXCIgb3BlbmVkJywgbmFtZSk7XG4gICAgICB0cmFuc3BvcnQuc2VuZChbeyB0eXBlOiBcInBpbmdcIiwgZGF0YTogXCJwcm9iZVwiIH1dKTtcbiAgICAgIHRyYW5zcG9ydC5vbmNlKFwicGFja2V0XCIsIG1zZyA9PiB7XG4gICAgICAgIGlmIChmYWlsZWQpIHJldHVybjtcbiAgICAgICAgaWYgKFwicG9uZ1wiID09PSBtc2cudHlwZSAmJiBcInByb2JlXCIgPT09IG1zZy5kYXRhKSB7XG4gICAgICAgICAgZGVidWcoJ3Byb2JlIHRyYW5zcG9ydCBcIiVzXCIgcG9uZycsIG5hbWUpO1xuICAgICAgICAgIHRoaXMudXBncmFkaW5nID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLmVtaXQoXCJ1cGdyYWRpbmdcIiwgdHJhbnNwb3J0KTtcbiAgICAgICAgICBpZiAoIXRyYW5zcG9ydCkgcmV0dXJuO1xuICAgICAgICAgIFNvY2tldC5wcmlvcldlYnNvY2tldFN1Y2Nlc3MgPSBcIndlYnNvY2tldFwiID09PSB0cmFuc3BvcnQubmFtZTtcblxuICAgICAgICAgIGRlYnVnKCdwYXVzaW5nIGN1cnJlbnQgdHJhbnNwb3J0IFwiJXNcIicsIHRoaXMudHJhbnNwb3J0Lm5hbWUpO1xuICAgICAgICAgIHRoaXMudHJhbnNwb3J0LnBhdXNlKCgpID0+IHtcbiAgICAgICAgICAgIGlmIChmYWlsZWQpIHJldHVybjtcbiAgICAgICAgICAgIGlmIChcImNsb3NlZFwiID09PSB0aGlzLnJlYWR5U3RhdGUpIHJldHVybjtcbiAgICAgICAgICAgIGRlYnVnKFwiY2hhbmdpbmcgdHJhbnNwb3J0IGFuZCBzZW5kaW5nIHVwZ3JhZGUgcGFja2V0XCIpO1xuXG4gICAgICAgICAgICBjbGVhbnVwKCk7XG5cbiAgICAgICAgICAgIHRoaXMuc2V0VHJhbnNwb3J0KHRyYW5zcG9ydCk7XG4gICAgICAgICAgICB0cmFuc3BvcnQuc2VuZChbeyB0eXBlOiBcInVwZ3JhZGVcIiB9XSk7XG4gICAgICAgICAgICB0aGlzLmVtaXQoXCJ1cGdyYWRlXCIsIHRyYW5zcG9ydCk7XG4gICAgICAgICAgICB0cmFuc3BvcnQgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy51cGdyYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuZmx1c2goKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkZWJ1ZygncHJvYmUgdHJhbnNwb3J0IFwiJXNcIiBmYWlsZWQnLCBuYW1lKTtcbiAgICAgICAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IoXCJwcm9iZSBlcnJvclwiKTtcbiAgICAgICAgICBlcnIudHJhbnNwb3J0ID0gdHJhbnNwb3J0Lm5hbWU7XG4gICAgICAgICAgdGhpcy5lbWl0KFwidXBncmFkZUVycm9yXCIsIGVycik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBmcmVlemVUcmFuc3BvcnQoKSB7XG4gICAgICBpZiAoZmFpbGVkKSByZXR1cm47XG5cbiAgICAgIC8vIEFueSBjYWxsYmFjayBjYWxsZWQgYnkgdHJhbnNwb3J0IHNob3VsZCBiZSBpZ25vcmVkIHNpbmNlIG5vd1xuICAgICAgZmFpbGVkID0gdHJ1ZTtcblxuICAgICAgY2xlYW51cCgpO1xuXG4gICAgICB0cmFuc3BvcnQuY2xvc2UoKTtcbiAgICAgIHRyYW5zcG9ydCA9IG51bGw7XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIGFueSBlcnJvciB0aGF0IGhhcHBlbnMgd2hpbGUgcHJvYmluZ1xuICAgIGNvbnN0IG9uZXJyb3IgPSBlcnIgPT4ge1xuICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoXCJwcm9iZSBlcnJvcjogXCIgKyBlcnIpO1xuICAgICAgZXJyb3IudHJhbnNwb3J0ID0gdHJhbnNwb3J0Lm5hbWU7XG5cbiAgICAgIGZyZWV6ZVRyYW5zcG9ydCgpO1xuXG4gICAgICBkZWJ1ZygncHJvYmUgdHJhbnNwb3J0IFwiJXNcIiBmYWlsZWQgYmVjYXVzZSBvZiBlcnJvcjogJXMnLCBuYW1lLCBlcnIpO1xuXG4gICAgICB0aGlzLmVtaXQoXCJ1cGdyYWRlRXJyb3JcIiwgZXJyb3IpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBvblRyYW5zcG9ydENsb3NlKCkge1xuICAgICAgb25lcnJvcihcInRyYW5zcG9ydCBjbG9zZWRcIik7XG4gICAgfVxuXG4gICAgLy8gV2hlbiB0aGUgc29ja2V0IGlzIGNsb3NlZCB3aGlsZSB3ZSdyZSBwcm9iaW5nXG4gICAgZnVuY3Rpb24gb25jbG9zZSgpIHtcbiAgICAgIG9uZXJyb3IoXCJzb2NrZXQgY2xvc2VkXCIpO1xuICAgIH1cblxuICAgIC8vIFdoZW4gdGhlIHNvY2tldCBpcyB1cGdyYWRlZCB3aGlsZSB3ZSdyZSBwcm9iaW5nXG4gICAgZnVuY3Rpb24gb251cGdyYWRlKHRvKSB7XG4gICAgICBpZiAodHJhbnNwb3J0ICYmIHRvLm5hbWUgIT09IHRyYW5zcG9ydC5uYW1lKSB7XG4gICAgICAgIGRlYnVnKCdcIiVzXCIgd29ya3MgLSBhYm9ydGluZyBcIiVzXCInLCB0by5uYW1lLCB0cmFuc3BvcnQubmFtZSk7XG4gICAgICAgIGZyZWV6ZVRyYW5zcG9ydCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJlbW92ZSBhbGwgbGlzdGVuZXJzIG9uIHRoZSB0cmFuc3BvcnQgYW5kIG9uIHNlbGZcbiAgICBjb25zdCBjbGVhbnVwID0gKCkgPT4ge1xuICAgICAgdHJhbnNwb3J0LnJlbW92ZUxpc3RlbmVyKFwib3BlblwiLCBvblRyYW5zcG9ydE9wZW4pO1xuICAgICAgdHJhbnNwb3J0LnJlbW92ZUxpc3RlbmVyKFwiZXJyb3JcIiwgb25lcnJvcik7XG4gICAgICB0cmFuc3BvcnQucmVtb3ZlTGlzdGVuZXIoXCJjbG9zZVwiLCBvblRyYW5zcG9ydENsb3NlKTtcbiAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIoXCJjbG9zZVwiLCBvbmNsb3NlKTtcbiAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIoXCJ1cGdyYWRpbmdcIiwgb251cGdyYWRlKTtcbiAgICB9O1xuXG4gICAgdHJhbnNwb3J0Lm9uY2UoXCJvcGVuXCIsIG9uVHJhbnNwb3J0T3Blbik7XG4gICAgdHJhbnNwb3J0Lm9uY2UoXCJlcnJvclwiLCBvbmVycm9yKTtcbiAgICB0cmFuc3BvcnQub25jZShcImNsb3NlXCIsIG9uVHJhbnNwb3J0Q2xvc2UpO1xuXG4gICAgdGhpcy5vbmNlKFwiY2xvc2VcIiwgb25jbG9zZSk7XG4gICAgdGhpcy5vbmNlKFwidXBncmFkaW5nXCIsIG9udXBncmFkZSk7XG5cbiAgICB0cmFuc3BvcnQub3BlbigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIGNvbm5lY3Rpb24gaXMgZGVlbWVkIG9wZW4uXG4gICAqXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuICBvbk9wZW4oKSB7XG4gICAgZGVidWcoXCJzb2NrZXQgb3BlblwiKTtcbiAgICB0aGlzLnJlYWR5U3RhdGUgPSBcIm9wZW5cIjtcbiAgICBTb2NrZXQucHJpb3JXZWJzb2NrZXRTdWNjZXNzID0gXCJ3ZWJzb2NrZXRcIiA9PT0gdGhpcy50cmFuc3BvcnQubmFtZTtcbiAgICB0aGlzLmVtaXQoXCJvcGVuXCIpO1xuICAgIHRoaXMuZmx1c2goKTtcblxuICAgIC8vIHdlIGNoZWNrIGZvciBgcmVhZHlTdGF0ZWAgaW4gY2FzZSBhbiBgb3BlbmBcbiAgICAvLyBsaXN0ZW5lciBhbHJlYWR5IGNsb3NlZCB0aGUgc29ja2V0XG4gICAgaWYgKFxuICAgICAgXCJvcGVuXCIgPT09IHRoaXMucmVhZHlTdGF0ZSAmJlxuICAgICAgdGhpcy5vcHRzLnVwZ3JhZGUgJiZcbiAgICAgIHRoaXMudHJhbnNwb3J0LnBhdXNlXG4gICAgKSB7XG4gICAgICBkZWJ1ZyhcInN0YXJ0aW5nIHVwZ3JhZGUgcHJvYmVzXCIpO1xuICAgICAgbGV0IGkgPSAwO1xuICAgICAgY29uc3QgbCA9IHRoaXMudXBncmFkZXMubGVuZ3RoO1xuICAgICAgZm9yICg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgdGhpcy5wcm9iZSh0aGlzLnVwZ3JhZGVzW2ldKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlcyBhIHBhY2tldC5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBvblBhY2tldChwYWNrZXQpIHtcbiAgICBpZiAoXG4gICAgICBcIm9wZW5pbmdcIiA9PT0gdGhpcy5yZWFkeVN0YXRlIHx8XG4gICAgICBcIm9wZW5cIiA9PT0gdGhpcy5yZWFkeVN0YXRlIHx8XG4gICAgICBcImNsb3NpbmdcIiA9PT0gdGhpcy5yZWFkeVN0YXRlXG4gICAgKSB7XG4gICAgICBkZWJ1Zygnc29ja2V0IHJlY2VpdmU6IHR5cGUgXCIlc1wiLCBkYXRhIFwiJXNcIicsIHBhY2tldC50eXBlLCBwYWNrZXQuZGF0YSk7XG5cbiAgICAgIHRoaXMuZW1pdChcInBhY2tldFwiLCBwYWNrZXQpO1xuXG4gICAgICAvLyBTb2NrZXQgaXMgbGl2ZSAtIGFueSBwYWNrZXQgY291bnRzXG4gICAgICB0aGlzLmVtaXQoXCJoZWFydGJlYXRcIik7XG5cbiAgICAgIHN3aXRjaCAocGFja2V0LnR5cGUpIHtcbiAgICAgICAgY2FzZSBcIm9wZW5cIjpcbiAgICAgICAgICB0aGlzLm9uSGFuZHNoYWtlKEpTT04ucGFyc2UocGFja2V0LmRhdGEpKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFwicGluZ1wiOlxuICAgICAgICAgIHRoaXMucmVzZXRQaW5nVGltZW91dCgpO1xuICAgICAgICAgIHRoaXMuc2VuZFBhY2tldChcInBvbmdcIik7XG4gICAgICAgICAgdGhpcy5lbWl0KFwicG9uZ1wiKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFwiZXJyb3JcIjpcbiAgICAgICAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IoXCJzZXJ2ZXIgZXJyb3JcIik7XG4gICAgICAgICAgZXJyLmNvZGUgPSBwYWNrZXQuZGF0YTtcbiAgICAgICAgICB0aGlzLm9uRXJyb3IoZXJyKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFwibWVzc2FnZVwiOlxuICAgICAgICAgIHRoaXMuZW1pdChcImRhdGFcIiwgcGFja2V0LmRhdGEpO1xuICAgICAgICAgIHRoaXMuZW1pdChcIm1lc3NhZ2VcIiwgcGFja2V0LmRhdGEpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBkZWJ1ZygncGFja2V0IHJlY2VpdmVkIHdpdGggc29ja2V0IHJlYWR5U3RhdGUgXCIlc1wiJywgdGhpcy5yZWFkeVN0YXRlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIHVwb24gaGFuZHNoYWtlIGNvbXBsZXRpb24uXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBoYW5kc2hha2Ugb2JqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgb25IYW5kc2hha2UoZGF0YSkge1xuICAgIHRoaXMuZW1pdChcImhhbmRzaGFrZVwiLCBkYXRhKTtcbiAgICB0aGlzLmlkID0gZGF0YS5zaWQ7XG4gICAgdGhpcy50cmFuc3BvcnQucXVlcnkuc2lkID0gZGF0YS5zaWQ7XG4gICAgdGhpcy51cGdyYWRlcyA9IHRoaXMuZmlsdGVyVXBncmFkZXMoZGF0YS51cGdyYWRlcyk7XG4gICAgdGhpcy5waW5nSW50ZXJ2YWwgPSBkYXRhLnBpbmdJbnRlcnZhbDtcbiAgICB0aGlzLnBpbmdUaW1lb3V0ID0gZGF0YS5waW5nVGltZW91dDtcbiAgICB0aGlzLm9uT3BlbigpO1xuICAgIC8vIEluIGNhc2Ugb3BlbiBoYW5kbGVyIGNsb3NlcyBzb2NrZXRcbiAgICBpZiAoXCJjbG9zZWRcIiA9PT0gdGhpcy5yZWFkeVN0YXRlKSByZXR1cm47XG4gICAgdGhpcy5yZXNldFBpbmdUaW1lb3V0KCk7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBhbmQgcmVzZXRzIHBpbmcgdGltZW91dCB0aW1lciBiYXNlZCBvbiBzZXJ2ZXIgcGluZ3MuXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgcmVzZXRQaW5nVGltZW91dCgpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5waW5nVGltZW91dFRpbWVyKTtcbiAgICB0aGlzLnBpbmdUaW1lb3V0VGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMub25DbG9zZShcInBpbmcgdGltZW91dFwiKTtcbiAgICB9LCB0aGlzLnBpbmdJbnRlcnZhbCArIHRoaXMucGluZ1RpbWVvdXQpO1xuICAgIGlmICh0aGlzLm9wdHMuYXV0b1VucmVmKSB7XG4gICAgICB0aGlzLnBpbmdUaW1lb3V0VGltZXIudW5yZWYoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIG9uIGBkcmFpbmAgZXZlbnRcbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBvbkRyYWluKCkge1xuICAgIHRoaXMud3JpdGVCdWZmZXIuc3BsaWNlKDAsIHRoaXMucHJldkJ1ZmZlckxlbik7XG5cbiAgICAvLyBzZXR0aW5nIHByZXZCdWZmZXJMZW4gPSAwIGlzIHZlcnkgaW1wb3J0YW50XG4gICAgLy8gZm9yIGV4YW1wbGUsIHdoZW4gdXBncmFkaW5nLCB1cGdyYWRlIHBhY2tldCBpcyBzZW50IG92ZXIsXG4gICAgLy8gYW5kIGEgbm9uemVybyBwcmV2QnVmZmVyTGVuIGNvdWxkIGNhdXNlIHByb2JsZW1zIG9uIGBkcmFpbmBcbiAgICB0aGlzLnByZXZCdWZmZXJMZW4gPSAwO1xuXG4gICAgaWYgKDAgPT09IHRoaXMud3JpdGVCdWZmZXIubGVuZ3RoKSB7XG4gICAgICB0aGlzLmVtaXQoXCJkcmFpblwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5mbHVzaCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBGbHVzaCB3cml0ZSBidWZmZXJzLlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIGZsdXNoKCkge1xuICAgIGlmIChcbiAgICAgIFwiY2xvc2VkXCIgIT09IHRoaXMucmVhZHlTdGF0ZSAmJlxuICAgICAgdGhpcy50cmFuc3BvcnQud3JpdGFibGUgJiZcbiAgICAgICF0aGlzLnVwZ3JhZGluZyAmJlxuICAgICAgdGhpcy53cml0ZUJ1ZmZlci5sZW5ndGhcbiAgICApIHtcbiAgICAgIGRlYnVnKFwiZmx1c2hpbmcgJWQgcGFja2V0cyBpbiBzb2NrZXRcIiwgdGhpcy53cml0ZUJ1ZmZlci5sZW5ndGgpO1xuICAgICAgdGhpcy50cmFuc3BvcnQuc2VuZCh0aGlzLndyaXRlQnVmZmVyKTtcbiAgICAgIC8vIGtlZXAgdHJhY2sgb2YgY3VycmVudCBsZW5ndGggb2Ygd3JpdGVCdWZmZXJcbiAgICAgIC8vIHNwbGljZSB3cml0ZUJ1ZmZlciBhbmQgY2FsbGJhY2tCdWZmZXIgb24gYGRyYWluYFxuICAgICAgdGhpcy5wcmV2QnVmZmVyTGVuID0gdGhpcy53cml0ZUJ1ZmZlci5sZW5ndGg7XG4gICAgICB0aGlzLmVtaXQoXCJmbHVzaFwiKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2VuZHMgYSBtZXNzYWdlLlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZS5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgZnVuY3Rpb24uXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zLlxuICAgKiBAcmV0dXJuIHtTb2NrZXR9IGZvciBjaGFpbmluZy5cbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG4gIHdyaXRlKG1zZywgb3B0aW9ucywgZm4pIHtcbiAgICB0aGlzLnNlbmRQYWNrZXQoXCJtZXNzYWdlXCIsIG1zZywgb3B0aW9ucywgZm4pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2VuZChtc2csIG9wdGlvbnMsIGZuKSB7XG4gICAgdGhpcy5zZW5kUGFja2V0KFwibWVzc2FnZVwiLCBtc2csIG9wdGlvbnMsIGZuKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kcyBhIHBhY2tldC5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IHBhY2tldCB0eXBlLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIGZ1bmN0aW9uLlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIHNlbmRQYWNrZXQodHlwZSwgZGF0YSwgb3B0aW9ucywgZm4pIHtcbiAgICBpZiAoXCJmdW5jdGlvblwiID09PSB0eXBlb2YgZGF0YSkge1xuICAgICAgZm4gPSBkYXRhO1xuICAgICAgZGF0YSA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBpZiAoXCJmdW5jdGlvblwiID09PSB0eXBlb2Ygb3B0aW9ucykge1xuICAgICAgZm4gPSBvcHRpb25zO1xuICAgICAgb3B0aW9ucyA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKFwiY2xvc2luZ1wiID09PSB0aGlzLnJlYWR5U3RhdGUgfHwgXCJjbG9zZWRcIiA9PT0gdGhpcy5yZWFkeVN0YXRlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgb3B0aW9ucy5jb21wcmVzcyA9IGZhbHNlICE9PSBvcHRpb25zLmNvbXByZXNzO1xuXG4gICAgY29uc3QgcGFja2V0ID0ge1xuICAgICAgdHlwZTogdHlwZSxcbiAgICAgIGRhdGE6IGRhdGEsXG4gICAgICBvcHRpb25zOiBvcHRpb25zXG4gICAgfTtcbiAgICB0aGlzLmVtaXQoXCJwYWNrZXRDcmVhdGVcIiwgcGFja2V0KTtcbiAgICB0aGlzLndyaXRlQnVmZmVyLnB1c2gocGFja2V0KTtcbiAgICBpZiAoZm4pIHRoaXMub25jZShcImZsdXNoXCIsIGZuKTtcbiAgICB0aGlzLmZsdXNoKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2xvc2VzIHRoZSBjb25uZWN0aW9uLlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIGNsb3NlKCkge1xuICAgIGNvbnN0IGNsb3NlID0gKCkgPT4ge1xuICAgICAgdGhpcy5vbkNsb3NlKFwiZm9yY2VkIGNsb3NlXCIpO1xuICAgICAgZGVidWcoXCJzb2NrZXQgY2xvc2luZyAtIHRlbGxpbmcgdHJhbnNwb3J0IHRvIGNsb3NlXCIpO1xuICAgICAgdGhpcy50cmFuc3BvcnQuY2xvc2UoKTtcbiAgICB9O1xuXG4gICAgY29uc3QgY2xlYW51cEFuZENsb3NlID0gKCkgPT4ge1xuICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcihcInVwZ3JhZGVcIiwgY2xlYW51cEFuZENsb3NlKTtcbiAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIoXCJ1cGdyYWRlRXJyb3JcIiwgY2xlYW51cEFuZENsb3NlKTtcbiAgICAgIGNsb3NlKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IHdhaXRGb3JVcGdyYWRlID0gKCkgPT4ge1xuICAgICAgLy8gd2FpdCBmb3IgdXBncmFkZSB0byBmaW5pc2ggc2luY2Ugd2UgY2FuJ3Qgc2VuZCBwYWNrZXRzIHdoaWxlIHBhdXNpbmcgYSB0cmFuc3BvcnRcbiAgICAgIHRoaXMub25jZShcInVwZ3JhZGVcIiwgY2xlYW51cEFuZENsb3NlKTtcbiAgICAgIHRoaXMub25jZShcInVwZ3JhZGVFcnJvclwiLCBjbGVhbnVwQW5kQ2xvc2UpO1xuICAgIH07XG5cbiAgICBpZiAoXCJvcGVuaW5nXCIgPT09IHRoaXMucmVhZHlTdGF0ZSB8fCBcIm9wZW5cIiA9PT0gdGhpcy5yZWFkeVN0YXRlKSB7XG4gICAgICB0aGlzLnJlYWR5U3RhdGUgPSBcImNsb3NpbmdcIjtcblxuICAgICAgaWYgKHRoaXMud3JpdGVCdWZmZXIubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMub25jZShcImRyYWluXCIsICgpID0+IHtcbiAgICAgICAgICBpZiAodGhpcy51cGdyYWRpbmcpIHtcbiAgICAgICAgICAgIHdhaXRGb3JVcGdyYWRlKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNsb3NlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy51cGdyYWRpbmcpIHtcbiAgICAgICAgd2FpdEZvclVwZ3JhZGUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNsb3NlKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIHVwb24gdHJhbnNwb3J0IGVycm9yXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgb25FcnJvcihlcnIpIHtcbiAgICBkZWJ1ZyhcInNvY2tldCBlcnJvciAlalwiLCBlcnIpO1xuICAgIFNvY2tldC5wcmlvcldlYnNvY2tldFN1Y2Nlc3MgPSBmYWxzZTtcbiAgICB0aGlzLmVtaXQoXCJlcnJvclwiLCBlcnIpO1xuICAgIHRoaXMub25DbG9zZShcInRyYW5zcG9ydCBlcnJvclwiLCBlcnIpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCB1cG9uIHRyYW5zcG9ydCBjbG9zZS5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBvbkNsb3NlKHJlYXNvbiwgZGVzYykge1xuICAgIGlmIChcbiAgICAgIFwib3BlbmluZ1wiID09PSB0aGlzLnJlYWR5U3RhdGUgfHxcbiAgICAgIFwib3BlblwiID09PSB0aGlzLnJlYWR5U3RhdGUgfHxcbiAgICAgIFwiY2xvc2luZ1wiID09PSB0aGlzLnJlYWR5U3RhdGVcbiAgICApIHtcbiAgICAgIGRlYnVnKCdzb2NrZXQgY2xvc2Ugd2l0aCByZWFzb246IFwiJXNcIicsIHJlYXNvbik7XG5cbiAgICAgIC8vIGNsZWFyIHRpbWVyc1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMucGluZ0ludGVydmFsVGltZXIpO1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMucGluZ1RpbWVvdXRUaW1lcik7XG5cbiAgICAgIC8vIHN0b3AgZXZlbnQgZnJvbSBmaXJpbmcgYWdhaW4gZm9yIHRyYW5zcG9ydFxuICAgICAgdGhpcy50cmFuc3BvcnQucmVtb3ZlQWxsTGlzdGVuZXJzKFwiY2xvc2VcIik7XG5cbiAgICAgIC8vIGVuc3VyZSB0cmFuc3BvcnQgd29uJ3Qgc3RheSBvcGVuXG4gICAgICB0aGlzLnRyYW5zcG9ydC5jbG9zZSgpO1xuXG4gICAgICAvLyBpZ25vcmUgZnVydGhlciB0cmFuc3BvcnQgY29tbXVuaWNhdGlvblxuICAgICAgdGhpcy50cmFuc3BvcnQucmVtb3ZlQWxsTGlzdGVuZXJzKCk7XG5cbiAgICAgIGlmICh0eXBlb2YgcmVtb3ZlRXZlbnRMaXN0ZW5lciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJlbW92ZUV2ZW50TGlzdGVuZXIoXCJvZmZsaW5lXCIsIHRoaXMub2ZmbGluZUV2ZW50TGlzdGVuZXIsIGZhbHNlKTtcbiAgICAgIH1cblxuICAgICAgLy8gc2V0IHJlYWR5IHN0YXRlXG4gICAgICB0aGlzLnJlYWR5U3RhdGUgPSBcImNsb3NlZFwiO1xuXG4gICAgICAvLyBjbGVhciBzZXNzaW9uIGlkXG4gICAgICB0aGlzLmlkID0gbnVsbDtcblxuICAgICAgLy8gZW1pdCBjbG9zZSBldmVudFxuICAgICAgdGhpcy5lbWl0KFwiY2xvc2VcIiwgcmVhc29uLCBkZXNjKTtcblxuICAgICAgLy8gY2xlYW4gYnVmZmVycyBhZnRlciwgc28gdXNlcnMgY2FuIHN0aWxsXG4gICAgICAvLyBncmFiIHRoZSBidWZmZXJzIG9uIGBjbG9zZWAgZXZlbnRcbiAgICAgIHRoaXMud3JpdGVCdWZmZXIgPSBbXTtcbiAgICAgIHRoaXMucHJldkJ1ZmZlckxlbiA9IDA7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEZpbHRlcnMgdXBncmFkZXMsIHJldHVybmluZyBvbmx5IHRob3NlIG1hdGNoaW5nIGNsaWVudCB0cmFuc3BvcnRzLlxuICAgKlxuICAgKiBAcGFyYW0ge0FycmF5fSBzZXJ2ZXIgdXBncmFkZXNcbiAgICogQGFwaSBwcml2YXRlXG4gICAqXG4gICAqL1xuICBmaWx0ZXJVcGdyYWRlcyh1cGdyYWRlcykge1xuICAgIGNvbnN0IGZpbHRlcmVkVXBncmFkZXMgPSBbXTtcbiAgICBsZXQgaSA9IDA7XG4gICAgY29uc3QgaiA9IHVwZ3JhZGVzLmxlbmd0aDtcbiAgICBmb3IgKDsgaSA8IGo7IGkrKykge1xuICAgICAgaWYgKH50aGlzLnRyYW5zcG9ydHMuaW5kZXhPZih1cGdyYWRlc1tpXSkpXG4gICAgICAgIGZpbHRlcmVkVXBncmFkZXMucHVzaCh1cGdyYWRlc1tpXSk7XG4gICAgfVxuICAgIHJldHVybiBmaWx0ZXJlZFVwZ3JhZGVzO1xuICB9XG59XG5cblNvY2tldC5wcmlvcldlYnNvY2tldFN1Y2Nlc3MgPSBmYWxzZTtcblxuLyoqXG4gKiBQcm90b2NvbCB2ZXJzaW9uLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuU29ja2V0LnByb3RvY29sID0gcGFyc2VyLnByb3RvY29sOyAvLyB0aGlzIGlzIGFuIGludFxuXG5mdW5jdGlvbiBjbG9uZShvYmopIHtcbiAgY29uc3QgbyA9IHt9O1xuICBmb3IgKGxldCBpIGluIG9iaikge1xuICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgIG9baV0gPSBvYmpbaV07XG4gICAgfVxuICB9XG4gIHJldHVybiBvO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNvY2tldDtcbiIsImNvbnN0IHBhcnNlciA9IHJlcXVpcmUoXCJlbmdpbmUuaW8tcGFyc2VyXCIpO1xuY29uc3QgRW1pdHRlciA9IHJlcXVpcmUoXCJjb21wb25lbnQtZW1pdHRlclwiKTtcbmNvbnN0IGRlYnVnID0gcmVxdWlyZShcImRlYnVnXCIpKFwiZW5naW5lLmlvLWNsaWVudDp0cmFuc3BvcnRcIik7XG5cbmNsYXNzIFRyYW5zcG9ydCBleHRlbmRzIEVtaXR0ZXIge1xuICAvKipcbiAgICogVHJhbnNwb3J0IGFic3RyYWN0IGNvbnN0cnVjdG9yLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucy5cbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBjb25zdHJ1Y3RvcihvcHRzKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMub3B0cyA9IG9wdHM7XG4gICAgdGhpcy5xdWVyeSA9IG9wdHMucXVlcnk7XG4gICAgdGhpcy5yZWFkeVN0YXRlID0gXCJcIjtcbiAgICB0aGlzLnNvY2tldCA9IG9wdHMuc29ja2V0O1xuICB9XG5cbiAgLyoqXG4gICAqIEVtaXRzIGFuIGVycm9yLlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gICAqIEByZXR1cm4ge1RyYW5zcG9ydH0gZm9yIGNoYWluaW5nXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuICBvbkVycm9yKG1zZywgZGVzYykge1xuICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcihtc2cpO1xuICAgIGVyci50eXBlID0gXCJUcmFuc3BvcnRFcnJvclwiO1xuICAgIGVyci5kZXNjcmlwdGlvbiA9IGRlc2M7XG4gICAgdGhpcy5lbWl0KFwiZXJyb3JcIiwgZXJyKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBPcGVucyB0aGUgdHJhbnNwb3J0LlxuICAgKlxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cbiAgb3BlbigpIHtcbiAgICBpZiAoXCJjbG9zZWRcIiA9PT0gdGhpcy5yZWFkeVN0YXRlIHx8IFwiXCIgPT09IHRoaXMucmVhZHlTdGF0ZSkge1xuICAgICAgdGhpcy5yZWFkeVN0YXRlID0gXCJvcGVuaW5nXCI7XG4gICAgICB0aGlzLmRvT3BlbigpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIENsb3NlcyB0aGUgdHJhbnNwb3J0LlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIGNsb3NlKCkge1xuICAgIGlmIChcIm9wZW5pbmdcIiA9PT0gdGhpcy5yZWFkeVN0YXRlIHx8IFwib3BlblwiID09PSB0aGlzLnJlYWR5U3RhdGUpIHtcbiAgICAgIHRoaXMuZG9DbG9zZSgpO1xuICAgICAgdGhpcy5vbkNsb3NlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogU2VuZHMgbXVsdGlwbGUgcGFja2V0cy5cbiAgICpcbiAgICogQHBhcmFtIHtBcnJheX0gcGFja2V0c1xuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIHNlbmQocGFja2V0cykge1xuICAgIGlmIChcIm9wZW5cIiA9PT0gdGhpcy5yZWFkeVN0YXRlKSB7XG4gICAgICB0aGlzLndyaXRlKHBhY2tldHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyB0aGlzIG1pZ2h0IGhhcHBlbiBpZiB0aGUgdHJhbnNwb3J0IHdhcyBzaWxlbnRseSBjbG9zZWQgaW4gdGhlIGJlZm9yZXVubG9hZCBldmVudCBoYW5kbGVyXG4gICAgICBkZWJ1ZyhcInRyYW5zcG9ydCBpcyBub3Qgb3BlbiwgZGlzY2FyZGluZyBwYWNrZXRzXCIpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgdXBvbiBvcGVuXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgb25PcGVuKCkge1xuICAgIHRoaXMucmVhZHlTdGF0ZSA9IFwib3BlblwiO1xuICAgIHRoaXMud3JpdGFibGUgPSB0cnVlO1xuICAgIHRoaXMuZW1pdChcIm9wZW5cIik7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIHdpdGggZGF0YS5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGFcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBvbkRhdGEoZGF0YSkge1xuICAgIGNvbnN0IHBhY2tldCA9IHBhcnNlci5kZWNvZGVQYWNrZXQoZGF0YSwgdGhpcy5zb2NrZXQuYmluYXJ5VHlwZSk7XG4gICAgdGhpcy5vblBhY2tldChwYWNrZXQpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aXRoIGEgZGVjb2RlZCBwYWNrZXQuXG4gICAqL1xuICBvblBhY2tldChwYWNrZXQpIHtcbiAgICB0aGlzLmVtaXQoXCJwYWNrZXRcIiwgcGFja2V0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgdXBvbiBjbG9zZS5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBvbkNsb3NlKCkge1xuICAgIHRoaXMucmVhZHlTdGF0ZSA9IFwiY2xvc2VkXCI7XG4gICAgdGhpcy5lbWl0KFwiY2xvc2VcIik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUcmFuc3BvcnQ7XG4iLCJjb25zdCBYTUxIdHRwUmVxdWVzdCA9IHJlcXVpcmUoXCIuLi8uLi9jb250cmliL3htbGh0dHByZXF1ZXN0LXNzbC9YTUxIdHRwUmVxdWVzdFwiKTtcbmNvbnN0IFhIUiA9IHJlcXVpcmUoXCIuL3BvbGxpbmcteGhyXCIpO1xuY29uc3QgSlNPTlAgPSByZXF1aXJlKFwiLi9wb2xsaW5nLWpzb25wXCIpO1xuY29uc3Qgd2Vic29ja2V0ID0gcmVxdWlyZShcIi4vd2Vic29ja2V0XCIpO1xuXG5leHBvcnRzLnBvbGxpbmcgPSBwb2xsaW5nO1xuZXhwb3J0cy53ZWJzb2NrZXQgPSB3ZWJzb2NrZXQ7XG5cbi8qKlxuICogUG9sbGluZyB0cmFuc3BvcnQgcG9seW1vcnBoaWMgY29uc3RydWN0b3IuXG4gKiBEZWNpZGVzIG9uIHhociB2cyBqc29ucCBiYXNlZCBvbiBmZWF0dXJlIGRldGVjdGlvbi5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBwb2xsaW5nKG9wdHMpIHtcbiAgbGV0IHhocjtcbiAgbGV0IHhkID0gZmFsc2U7XG4gIGxldCB4cyA9IGZhbHNlO1xuICBjb25zdCBqc29ucCA9IGZhbHNlICE9PSBvcHRzLmpzb25wO1xuXG4gIGlmICh0eXBlb2YgbG9jYXRpb24gIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjb25zdCBpc1NTTCA9IFwiaHR0cHM6XCIgPT09IGxvY2F0aW9uLnByb3RvY29sO1xuICAgIGxldCBwb3J0ID0gbG9jYXRpb24ucG9ydDtcblxuICAgIC8vIHNvbWUgdXNlciBhZ2VudHMgaGF2ZSBlbXB0eSBgbG9jYXRpb24ucG9ydGBcbiAgICBpZiAoIXBvcnQpIHtcbiAgICAgIHBvcnQgPSBpc1NTTCA/IDQ0MyA6IDgwO1xuICAgIH1cblxuICAgIHhkID0gb3B0cy5ob3N0bmFtZSAhPT0gbG9jYXRpb24uaG9zdG5hbWUgfHwgcG9ydCAhPT0gb3B0cy5wb3J0O1xuICAgIHhzID0gb3B0cy5zZWN1cmUgIT09IGlzU1NMO1xuICB9XG5cbiAgb3B0cy54ZG9tYWluID0geGQ7XG4gIG9wdHMueHNjaGVtZSA9IHhzO1xuICB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3Qob3B0cyk7XG5cbiAgaWYgKFwib3BlblwiIGluIHhociAmJiAhb3B0cy5mb3JjZUpTT05QKSB7XG4gICAgcmV0dXJuIG5ldyBYSFIob3B0cyk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCFqc29ucCkgdGhyb3cgbmV3IEVycm9yKFwiSlNPTlAgZGlzYWJsZWRcIik7XG4gICAgcmV0dXJuIG5ldyBKU09OUChvcHRzKTtcbiAgfVxufVxuIiwiY29uc3QgUG9sbGluZyA9IHJlcXVpcmUoXCIuL3BvbGxpbmdcIik7XG5jb25zdCBnbG9iYWxUaGlzID0gcmVxdWlyZShcIi4uL2dsb2JhbFRoaXNcIik7XG5cbmNvbnN0IHJOZXdsaW5lID0gL1xcbi9nO1xuY29uc3QgckVzY2FwZWROZXdsaW5lID0gL1xcXFxuL2c7XG5cbi8qKlxuICogR2xvYmFsIEpTT05QIGNhbGxiYWNrcy5cbiAqL1xuXG5sZXQgY2FsbGJhY2tzO1xuXG5jbGFzcyBKU09OUFBvbGxpbmcgZXh0ZW5kcyBQb2xsaW5nIHtcbiAgLyoqXG4gICAqIEpTT05QIFBvbGxpbmcgY29uc3RydWN0b3IuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzLlxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cbiAgY29uc3RydWN0b3Iob3B0cykge1xuICAgIHN1cGVyKG9wdHMpO1xuXG4gICAgdGhpcy5xdWVyeSA9IHRoaXMucXVlcnkgfHwge307XG5cbiAgICAvLyBkZWZpbmUgZ2xvYmFsIGNhbGxiYWNrcyBhcnJheSBpZiBub3QgcHJlc2VudFxuICAgIC8vIHdlIGRvIHRoaXMgaGVyZSAobGF6aWx5KSB0byBhdm9pZCB1bm5lZWRlZCBnbG9iYWwgcG9sbHV0aW9uXG4gICAgaWYgKCFjYWxsYmFja3MpIHtcbiAgICAgIC8vIHdlIG5lZWQgdG8gY29uc2lkZXIgbXVsdGlwbGUgZW5naW5lcyBpbiB0aGUgc2FtZSBwYWdlXG4gICAgICBjYWxsYmFja3MgPSBnbG9iYWxUaGlzLl9fX2VpbyA9IGdsb2JhbFRoaXMuX19fZWlvIHx8IFtdO1xuICAgIH1cblxuICAgIC8vIGNhbGxiYWNrIGlkZW50aWZpZXJcbiAgICB0aGlzLmluZGV4ID0gY2FsbGJhY2tzLmxlbmd0aDtcblxuICAgIC8vIGFkZCBjYWxsYmFjayB0byBqc29ucCBnbG9iYWxcbiAgICBjYWxsYmFja3MucHVzaCh0aGlzLm9uRGF0YS5iaW5kKHRoaXMpKTtcblxuICAgIC8vIGFwcGVuZCB0byBxdWVyeSBzdHJpbmdcbiAgICB0aGlzLnF1ZXJ5LmogPSB0aGlzLmluZGV4O1xuICB9XG5cbiAgLyoqXG4gICAqIEpTT05QIG9ubHkgc3VwcG9ydHMgYmluYXJ5IGFzIGJhc2U2NCBlbmNvZGVkIHN0cmluZ3NcbiAgICovXG4gIGdldCBzdXBwb3J0c0JpbmFyeSgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogQ2xvc2VzIHRoZSBzb2NrZXQuXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgZG9DbG9zZSgpIHtcbiAgICBpZiAodGhpcy5zY3JpcHQpIHtcbiAgICAgIC8vIHByZXZlbnQgc3B1cmlvdXMgZXJyb3JzIGZyb20gYmVpbmcgZW1pdHRlZCB3aGVuIHRoZSB3aW5kb3cgaXMgdW5sb2FkZWRcbiAgICAgIHRoaXMuc2NyaXB0Lm9uZXJyb3IgPSAoKSA9PiB7fTtcbiAgICAgIHRoaXMuc2NyaXB0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5zY3JpcHQpO1xuICAgICAgdGhpcy5zY3JpcHQgPSBudWxsO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmZvcm0pIHtcbiAgICAgIHRoaXMuZm9ybS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuZm9ybSk7XG4gICAgICB0aGlzLmZvcm0gPSBudWxsO1xuICAgICAgdGhpcy5pZnJhbWUgPSBudWxsO1xuICAgIH1cblxuICAgIHN1cGVyLmRvQ2xvc2UoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdGFydHMgYSBwb2xsIGN5Y2xlLlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIGRvUG9sbCgpIHtcbiAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuXG4gICAgaWYgKHRoaXMuc2NyaXB0KSB7XG4gICAgICB0aGlzLnNjcmlwdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuc2NyaXB0KTtcbiAgICAgIHRoaXMuc2NyaXB0ID0gbnVsbDtcbiAgICB9XG5cbiAgICBzY3JpcHQuYXN5bmMgPSB0cnVlO1xuICAgIHNjcmlwdC5zcmMgPSB0aGlzLnVyaSgpO1xuICAgIHNjcmlwdC5vbmVycm9yID0gZSA9PiB7XG4gICAgICB0aGlzLm9uRXJyb3IoXCJqc29ucCBwb2xsIGVycm9yXCIsIGUpO1xuICAgIH07XG5cbiAgICBjb25zdCBpbnNlcnRBdCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpWzBdO1xuICAgIGlmIChpbnNlcnRBdCkge1xuICAgICAgaW5zZXJ0QXQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoc2NyaXB0LCBpbnNlcnRBdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIChkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmJvZHkpLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgfVxuICAgIHRoaXMuc2NyaXB0ID0gc2NyaXB0O1xuXG4gICAgY29uc3QgaXNVQWdlY2tvID1cbiAgICAgIFwidW5kZWZpbmVkXCIgIT09IHR5cGVvZiBuYXZpZ2F0b3IgJiYgL2dlY2tvL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcblxuICAgIGlmIChpc1VBZ2Vja28pIHtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IGlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICAgICAgfSwgMTAwKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogV3JpdGVzIHdpdGggYSBoaWRkZW4gaWZyYW1lLlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YSB0byBzZW5kXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxlZCB1cG9uIGZsdXNoLlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIGRvV3JpdGUoZGF0YSwgZm4pIHtcbiAgICBsZXQgaWZyYW1lO1xuXG4gICAgaWYgKCF0aGlzLmZvcm0pIHtcbiAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICAgIGNvbnN0IGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gICAgICBjb25zdCBpZCA9ICh0aGlzLmlmcmFtZUlkID0gXCJlaW9faWZyYW1lX1wiICsgdGhpcy5pbmRleCk7XG5cbiAgICAgIGZvcm0uY2xhc3NOYW1lID0gXCJzb2NrZXRpb1wiO1xuICAgICAgZm9ybS5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICAgIGZvcm0uc3R5bGUudG9wID0gXCItMTAwMHB4XCI7XG4gICAgICBmb3JtLnN0eWxlLmxlZnQgPSBcIi0xMDAwcHhcIjtcbiAgICAgIGZvcm0udGFyZ2V0ID0gaWQ7XG4gICAgICBmb3JtLm1ldGhvZCA9IFwiUE9TVFwiO1xuICAgICAgZm9ybS5zZXRBdHRyaWJ1dGUoXCJhY2NlcHQtY2hhcnNldFwiLCBcInV0Zi04XCIpO1xuICAgICAgYXJlYS5uYW1lID0gXCJkXCI7XG4gICAgICBmb3JtLmFwcGVuZENoaWxkKGFyZWEpO1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmb3JtKTtcblxuICAgICAgdGhpcy5mb3JtID0gZm9ybTtcbiAgICAgIHRoaXMuYXJlYSA9IGFyZWE7XG4gICAgfVxuXG4gICAgdGhpcy5mb3JtLmFjdGlvbiA9IHRoaXMudXJpKCk7XG5cbiAgICBmdW5jdGlvbiBjb21wbGV0ZSgpIHtcbiAgICAgIGluaXRJZnJhbWUoKTtcbiAgICAgIGZuKCk7XG4gICAgfVxuXG4gICAgY29uc3QgaW5pdElmcmFtZSA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLmlmcmFtZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHRoaXMuZm9ybS5yZW1vdmVDaGlsZCh0aGlzLmlmcmFtZSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICB0aGlzLm9uRXJyb3IoXCJqc29ucCBwb2xsaW5nIGlmcmFtZSByZW1vdmFsIGVycm9yXCIsIGUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIGllNiBkeW5hbWljIGlmcmFtZXMgd2l0aCB0YXJnZXQ9XCJcIiBzdXBwb3J0ICh0aGFua3MgQ2hyaXMgTGFtYmFjaGVyKVxuICAgICAgICBjb25zdCBodG1sID0gJzxpZnJhbWUgc3JjPVwiamF2YXNjcmlwdDowXCIgbmFtZT1cIicgKyB0aGlzLmlmcmFtZUlkICsgJ1wiPic7XG4gICAgICAgIGlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaHRtbCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7XG4gICAgICAgIGlmcmFtZS5uYW1lID0gdGhpcy5pZnJhbWVJZDtcbiAgICAgICAgaWZyYW1lLnNyYyA9IFwiamF2YXNjcmlwdDowXCI7XG4gICAgICB9XG5cbiAgICAgIGlmcmFtZS5pZCA9IHRoaXMuaWZyYW1lSWQ7XG5cbiAgICAgIHRoaXMuZm9ybS5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICAgICAgdGhpcy5pZnJhbWUgPSBpZnJhbWU7XG4gICAgfTtcblxuICAgIGluaXRJZnJhbWUoKTtcblxuICAgIC8vIGVzY2FwZSBcXG4gdG8gcHJldmVudCBpdCBmcm9tIGJlaW5nIGNvbnZlcnRlZCBpbnRvIFxcclxcbiBieSBzb21lIFVBc1xuICAgIC8vIGRvdWJsZSBlc2NhcGluZyBpcyByZXF1aXJlZCBmb3IgZXNjYXBlZCBuZXcgbGluZXMgYmVjYXVzZSB1bmVzY2FwaW5nIG9mIG5ldyBsaW5lcyBjYW4gYmUgZG9uZSBzYWZlbHkgb24gc2VydmVyLXNpZGVcbiAgICBkYXRhID0gZGF0YS5yZXBsYWNlKHJFc2NhcGVkTmV3bGluZSwgXCJcXFxcXFxuXCIpO1xuICAgIHRoaXMuYXJlYS52YWx1ZSA9IGRhdGEucmVwbGFjZShyTmV3bGluZSwgXCJcXFxcblwiKTtcblxuICAgIHRyeSB7XG4gICAgICB0aGlzLmZvcm0uc3VibWl0KCk7XG4gICAgfSBjYXRjaCAoZSkge31cblxuICAgIGlmICh0aGlzLmlmcmFtZS5hdHRhY2hFdmVudCkge1xuICAgICAgdGhpcy5pZnJhbWUub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5pZnJhbWUucmVhZHlTdGF0ZSA9PT0gXCJjb21wbGV0ZVwiKSB7XG4gICAgICAgICAgY29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pZnJhbWUub25sb2FkID0gY29tcGxldGU7XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gSlNPTlBQb2xsaW5nO1xuIiwiLyogZ2xvYmFsIGF0dGFjaEV2ZW50ICovXG5cbmNvbnN0IFhNTEh0dHBSZXF1ZXN0ID0gcmVxdWlyZShcIi4uLy4uL2NvbnRyaWIveG1saHR0cHJlcXVlc3Qtc3NsL1hNTEh0dHBSZXF1ZXN0XCIpO1xuY29uc3QgUG9sbGluZyA9IHJlcXVpcmUoXCIuL3BvbGxpbmdcIik7XG5jb25zdCBFbWl0dGVyID0gcmVxdWlyZShcImNvbXBvbmVudC1lbWl0dGVyXCIpO1xuY29uc3QgeyBwaWNrIH0gPSByZXF1aXJlKFwiLi4vdXRpbFwiKTtcbmNvbnN0IGdsb2JhbFRoaXMgPSByZXF1aXJlKFwiLi4vZ2xvYmFsVGhpc1wiKTtcblxuY29uc3QgZGVidWcgPSByZXF1aXJlKFwiZGVidWdcIikoXCJlbmdpbmUuaW8tY2xpZW50OnBvbGxpbmcteGhyXCIpO1xuXG4vKipcbiAqIEVtcHR5IGZ1bmN0aW9uXG4gKi9cblxuZnVuY3Rpb24gZW1wdHkoKSB7fVxuXG5jb25zdCBoYXNYSFIyID0gKGZ1bmN0aW9uKCkge1xuICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoeyB4ZG9tYWluOiBmYWxzZSB9KTtcbiAgcmV0dXJuIG51bGwgIT0geGhyLnJlc3BvbnNlVHlwZTtcbn0pKCk7XG5cbmNsYXNzIFhIUiBleHRlbmRzIFBvbGxpbmcge1xuICAvKipcbiAgICogWEhSIFBvbGxpbmcgY29uc3RydWN0b3IuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuICBjb25zdHJ1Y3RvcihvcHRzKSB7XG4gICAgc3VwZXIob3B0cyk7XG5cbiAgICBpZiAodHlwZW9mIGxvY2F0aW9uICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICBjb25zdCBpc1NTTCA9IFwiaHR0cHM6XCIgPT09IGxvY2F0aW9uLnByb3RvY29sO1xuICAgICAgbGV0IHBvcnQgPSBsb2NhdGlvbi5wb3J0O1xuXG4gICAgICAvLyBzb21lIHVzZXIgYWdlbnRzIGhhdmUgZW1wdHkgYGxvY2F0aW9uLnBvcnRgXG4gICAgICBpZiAoIXBvcnQpIHtcbiAgICAgICAgcG9ydCA9IGlzU1NMID8gNDQzIDogODA7XG4gICAgICB9XG5cbiAgICAgIHRoaXMueGQgPVxuICAgICAgICAodHlwZW9mIGxvY2F0aW9uICE9PSBcInVuZGVmaW5lZFwiICYmXG4gICAgICAgICAgb3B0cy5ob3N0bmFtZSAhPT0gbG9jYXRpb24uaG9zdG5hbWUpIHx8XG4gICAgICAgIHBvcnQgIT09IG9wdHMucG9ydDtcbiAgICAgIHRoaXMueHMgPSBvcHRzLnNlY3VyZSAhPT0gaXNTU0w7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFhIUiBzdXBwb3J0cyBiaW5hcnlcbiAgICAgKi9cbiAgICBjb25zdCBmb3JjZUJhc2U2NCA9IG9wdHMgJiYgb3B0cy5mb3JjZUJhc2U2NDtcbiAgICB0aGlzLnN1cHBvcnRzQmluYXJ5ID0gaGFzWEhSMiAmJiAhZm9yY2VCYXNlNjQ7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIHJlcXVlc3QuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBtZXRob2RcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICByZXF1ZXN0KG9wdHMgPSB7fSkge1xuICAgIE9iamVjdC5hc3NpZ24ob3B0cywgeyB4ZDogdGhpcy54ZCwgeHM6IHRoaXMueHMgfSwgdGhpcy5vcHRzKTtcbiAgICByZXR1cm4gbmV3IFJlcXVlc3QodGhpcy51cmkoKSwgb3B0cyk7XG4gIH1cblxuICAvKipcbiAgICogU2VuZHMgZGF0YS5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGEgdG8gc2VuZC5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGVkIHVwb24gZmx1c2guXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgZG9Xcml0ZShkYXRhLCBmbikge1xuICAgIGNvbnN0IHJlcSA9IHRoaXMucmVxdWVzdCh7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgZGF0YTogZGF0YVxuICAgIH0pO1xuICAgIHJlcS5vbihcInN1Y2Nlc3NcIiwgZm4pO1xuICAgIHJlcS5vbihcImVycm9yXCIsIGVyciA9PiB7XG4gICAgICB0aGlzLm9uRXJyb3IoXCJ4aHIgcG9zdCBlcnJvclwiLCBlcnIpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0YXJ0cyBhIHBvbGwgY3ljbGUuXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgZG9Qb2xsKCkge1xuICAgIGRlYnVnKFwieGhyIHBvbGxcIik7XG4gICAgY29uc3QgcmVxID0gdGhpcy5yZXF1ZXN0KCk7XG4gICAgcmVxLm9uKFwiZGF0YVwiLCB0aGlzLm9uRGF0YS5iaW5kKHRoaXMpKTtcbiAgICByZXEub24oXCJlcnJvclwiLCBlcnIgPT4ge1xuICAgICAgdGhpcy5vbkVycm9yKFwieGhyIHBvbGwgZXJyb3JcIiwgZXJyKTtcbiAgICB9KTtcbiAgICB0aGlzLnBvbGxYaHIgPSByZXE7XG4gIH1cbn1cblxuY2xhc3MgUmVxdWVzdCBleHRlbmRzIEVtaXR0ZXIge1xuICAvKipcbiAgICogUmVxdWVzdCBjb25zdHJ1Y3RvclxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cbiAgY29uc3RydWN0b3IodXJpLCBvcHRzKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLm9wdHMgPSBvcHRzO1xuXG4gICAgdGhpcy5tZXRob2QgPSBvcHRzLm1ldGhvZCB8fCBcIkdFVFwiO1xuICAgIHRoaXMudXJpID0gdXJpO1xuICAgIHRoaXMuYXN5bmMgPSBmYWxzZSAhPT0gb3B0cy5hc3luYztcbiAgICB0aGlzLmRhdGEgPSB1bmRlZmluZWQgIT09IG9wdHMuZGF0YSA/IG9wdHMuZGF0YSA6IG51bGw7XG5cbiAgICB0aGlzLmNyZWF0ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgdGhlIFhIUiBvYmplY3QgYW5kIHNlbmRzIHRoZSByZXF1ZXN0LlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIGNyZWF0ZSgpIHtcbiAgICBjb25zdCBvcHRzID0gcGljayhcbiAgICAgIHRoaXMub3B0cyxcbiAgICAgIFwiYWdlbnRcIixcbiAgICAgIFwiZW5hYmxlc1hEUlwiLFxuICAgICAgXCJwZnhcIixcbiAgICAgIFwia2V5XCIsXG4gICAgICBcInBhc3NwaHJhc2VcIixcbiAgICAgIFwiY2VydFwiLFxuICAgICAgXCJjYVwiLFxuICAgICAgXCJjaXBoZXJzXCIsXG4gICAgICBcInJlamVjdFVuYXV0aG9yaXplZFwiLFxuICAgICAgXCJhdXRvVW5yZWZcIlxuICAgICk7XG4gICAgb3B0cy54ZG9tYWluID0gISF0aGlzLm9wdHMueGQ7XG4gICAgb3B0cy54c2NoZW1lID0gISF0aGlzLm9wdHMueHM7XG5cbiAgICBjb25zdCB4aHIgPSAodGhpcy54aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3Qob3B0cykpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGRlYnVnKFwieGhyIG9wZW4gJXM6ICVzXCIsIHRoaXMubWV0aG9kLCB0aGlzLnVyaSk7XG4gICAgICB4aHIub3Blbih0aGlzLm1ldGhvZCwgdGhpcy51cmksIHRoaXMuYXN5bmMpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKHRoaXMub3B0cy5leHRyYUhlYWRlcnMpIHtcbiAgICAgICAgICB4aHIuc2V0RGlzYWJsZUhlYWRlckNoZWNrICYmIHhoci5zZXREaXNhYmxlSGVhZGVyQ2hlY2sodHJ1ZSk7XG4gICAgICAgICAgZm9yIChsZXQgaSBpbiB0aGlzLm9wdHMuZXh0cmFIZWFkZXJzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRzLmV4dHJhSGVhZGVycy5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihpLCB0aGlzLm9wdHMuZXh0cmFIZWFkZXJzW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHt9XG5cbiAgICAgIGlmIChcIlBPU1RcIiA9PT0gdGhpcy5tZXRob2QpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtdHlwZVwiLCBcInRleHQvcGxhaW47Y2hhcnNldD1VVEYtOFwiKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgIH1cblxuICAgICAgdHJ5IHtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJBY2NlcHRcIiwgXCIqLypcIik7XG4gICAgICB9IGNhdGNoIChlKSB7fVxuXG4gICAgICAvLyBpZTYgY2hlY2tcbiAgICAgIGlmIChcIndpdGhDcmVkZW50aWFsc1wiIGluIHhocikge1xuICAgICAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gdGhpcy5vcHRzLndpdGhDcmVkZW50aWFscztcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMub3B0cy5yZXF1ZXN0VGltZW91dCkge1xuICAgICAgICB4aHIudGltZW91dCA9IHRoaXMub3B0cy5yZXF1ZXN0VGltZW91dDtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuaGFzWERSKCkpIHtcbiAgICAgICAgeGhyLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICB0aGlzLm9uTG9hZCgpO1xuICAgICAgICB9O1xuICAgICAgICB4aHIub25lcnJvciA9ICgpID0+IHtcbiAgICAgICAgICB0aGlzLm9uRXJyb3IoeGhyLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xuICAgICAgICAgIGlmICg0ICE9PSB4aHIucmVhZHlTdGF0ZSkgcmV0dXJuO1xuICAgICAgICAgIGlmICgyMDAgPT09IHhoci5zdGF0dXMgfHwgMTIyMyA9PT0geGhyLnN0YXR1cykge1xuICAgICAgICAgICAgdGhpcy5vbkxvYWQoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gbWFrZSBzdXJlIHRoZSBgZXJyb3JgIGV2ZW50IGhhbmRsZXIgdGhhdCdzIHVzZXItc2V0XG4gICAgICAgICAgICAvLyBkb2VzIG5vdCB0aHJvdyBpbiB0aGUgc2FtZSB0aWNrIGFuZCBnZXRzIGNhdWdodCBoZXJlXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5vbkVycm9yKHR5cGVvZiB4aHIuc3RhdHVzID09PSBcIm51bWJlclwiID8geGhyLnN0YXR1cyA6IDApO1xuICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBkZWJ1ZyhcInhociBkYXRhICVzXCIsIHRoaXMuZGF0YSk7XG4gICAgICB4aHIuc2VuZCh0aGlzLmRhdGEpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIE5lZWQgdG8gZGVmZXIgc2luY2UgLmNyZWF0ZSgpIGlzIGNhbGxlZCBkaXJlY3RseSBmcm9tIHRoZSBjb25zdHJ1Y3RvclxuICAgICAgLy8gYW5kIHRodXMgdGhlICdlcnJvcicgZXZlbnQgY2FuIG9ubHkgYmUgb25seSBib3VuZCAqYWZ0ZXIqIHRoaXMgZXhjZXB0aW9uXG4gICAgICAvLyBvY2N1cnMuICBUaGVyZWZvcmUsIGFsc28sIHdlIGNhbm5vdCB0aHJvdyBoZXJlIGF0IGFsbC5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLm9uRXJyb3IoZSk7XG4gICAgICB9LCAwKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICB0aGlzLmluZGV4ID0gUmVxdWVzdC5yZXF1ZXN0c0NvdW50Kys7XG4gICAgICBSZXF1ZXN0LnJlcXVlc3RzW3RoaXMuaW5kZXhdID0gdGhpcztcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIHVwb24gc3VjY2Vzc2Z1bCByZXNwb25zZS5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBvblN1Y2Nlc3MoKSB7XG4gICAgdGhpcy5lbWl0KFwic3VjY2Vzc1wiKTtcbiAgICB0aGlzLmNsZWFudXAoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgaWYgd2UgaGF2ZSBkYXRhLlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIG9uRGF0YShkYXRhKSB7XG4gICAgdGhpcy5lbWl0KFwiZGF0YVwiLCBkYXRhKTtcbiAgICB0aGlzLm9uU3VjY2VzcygpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCB1cG9uIGVycm9yLlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIG9uRXJyb3IoZXJyKSB7XG4gICAgdGhpcy5lbWl0KFwiZXJyb3JcIiwgZXJyKTtcbiAgICB0aGlzLmNsZWFudXAodHJ1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYW5zIHVwIGhvdXNlLlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIGNsZWFudXAoZnJvbUVycm9yKSB7XG4gICAgaWYgKFwidW5kZWZpbmVkXCIgPT09IHR5cGVvZiB0aGlzLnhociB8fCBudWxsID09PSB0aGlzLnhocikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyB4bWxodHRwcmVxdWVzdFxuICAgIGlmICh0aGlzLmhhc1hEUigpKSB7XG4gICAgICB0aGlzLnhoci5vbmxvYWQgPSB0aGlzLnhoci5vbmVycm9yID0gZW1wdHk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMueGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGVtcHR5O1xuICAgIH1cblxuICAgIGlmIChmcm9tRXJyb3IpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMueGhyLmFib3J0KCk7XG4gICAgICB9IGNhdGNoIChlKSB7fVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIGRlbGV0ZSBSZXF1ZXN0LnJlcXVlc3RzW3RoaXMuaW5kZXhdO1xuICAgIH1cblxuICAgIHRoaXMueGhyID0gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgdXBvbiBsb2FkLlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIG9uTG9hZCgpIHtcbiAgICBjb25zdCBkYXRhID0gdGhpcy54aHIucmVzcG9uc2VUZXh0O1xuICAgIGlmIChkYXRhICE9PSBudWxsKSB7XG4gICAgICB0aGlzLm9uRGF0YShkYXRhKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgaXQgaGFzIFhEb21haW5SZXF1ZXN0LlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIGhhc1hEUigpIHtcbiAgICByZXR1cm4gdHlwZW9mIFhEb21haW5SZXF1ZXN0ICE9PSBcInVuZGVmaW5lZFwiICYmICF0aGlzLnhzICYmIHRoaXMuZW5hYmxlc1hEUjtcbiAgfVxuXG4gIC8qKlxuICAgKiBBYm9ydHMgdGhlIHJlcXVlc3QuXG4gICAqXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuICBhYm9ydCgpIHtcbiAgICB0aGlzLmNsZWFudXAoKTtcbiAgfVxufVxuXG4vKipcbiAqIEFib3J0cyBwZW5kaW5nIHJlcXVlc3RzIHdoZW4gdW5sb2FkaW5nIHRoZSB3aW5kb3cuIFRoaXMgaXMgbmVlZGVkIHRvIHByZXZlbnRcbiAqIG1lbW9yeSBsZWFrcyAoZS5nLiB3aGVuIHVzaW5nIElFKSBhbmQgdG8gZW5zdXJlIHRoYXQgbm8gc3B1cmlvdXMgZXJyb3IgaXNcbiAqIGVtaXR0ZWQuXG4gKi9cblxuUmVxdWVzdC5yZXF1ZXN0c0NvdW50ID0gMDtcblJlcXVlc3QucmVxdWVzdHMgPSB7fTtcblxuaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICBpZiAodHlwZW9mIGF0dGFjaEV2ZW50ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBhdHRhY2hFdmVudChcIm9udW5sb2FkXCIsIHVubG9hZEhhbmRsZXIpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhZGRFdmVudExpc3RlbmVyID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBjb25zdCB0ZXJtaW5hdGlvbkV2ZW50ID0gXCJvbnBhZ2VoaWRlXCIgaW4gZ2xvYmFsVGhpcyA/IFwicGFnZWhpZGVcIiA6IFwidW5sb2FkXCI7XG4gICAgYWRkRXZlbnRMaXN0ZW5lcih0ZXJtaW5hdGlvbkV2ZW50LCB1bmxvYWRIYW5kbGVyLCBmYWxzZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdW5sb2FkSGFuZGxlcigpIHtcbiAgZm9yIChsZXQgaSBpbiBSZXF1ZXN0LnJlcXVlc3RzKSB7XG4gICAgaWYgKFJlcXVlc3QucmVxdWVzdHMuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgIFJlcXVlc3QucmVxdWVzdHNbaV0uYWJvcnQoKTtcbiAgICB9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBYSFI7XG5tb2R1bGUuZXhwb3J0cy5SZXF1ZXN0ID0gUmVxdWVzdDtcbiIsImNvbnN0IFRyYW5zcG9ydCA9IHJlcXVpcmUoXCIuLi90cmFuc3BvcnRcIik7XG5jb25zdCBwYXJzZXFzID0gcmVxdWlyZShcInBhcnNlcXNcIik7XG5jb25zdCBwYXJzZXIgPSByZXF1aXJlKFwiZW5naW5lLmlvLXBhcnNlclwiKTtcbmNvbnN0IHllYXN0ID0gcmVxdWlyZShcInllYXN0XCIpO1xuXG5jb25zdCBkZWJ1ZyA9IHJlcXVpcmUoXCJkZWJ1Z1wiKShcImVuZ2luZS5pby1jbGllbnQ6cG9sbGluZ1wiKTtcblxuY2xhc3MgUG9sbGluZyBleHRlbmRzIFRyYW5zcG9ydCB7XG4gIC8qKlxuICAgKiBUcmFuc3BvcnQgbmFtZS5cbiAgICovXG4gIGdldCBuYW1lKCkge1xuICAgIHJldHVybiBcInBvbGxpbmdcIjtcbiAgfVxuXG4gIC8qKlxuICAgKiBPcGVucyB0aGUgc29ja2V0ICh0cmlnZ2VycyBwb2xsaW5nKS4gV2Ugd3JpdGUgYSBQSU5HIG1lc3NhZ2UgdG8gZGV0ZXJtaW5lXG4gICAqIHdoZW4gdGhlIHRyYW5zcG9ydCBpcyBvcGVuLlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIGRvT3BlbigpIHtcbiAgICB0aGlzLnBvbGwoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXVzZXMgcG9sbGluZy5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgdXBvbiBidWZmZXJzIGFyZSBmbHVzaGVkIGFuZCB0cmFuc3BvcnQgaXMgcGF1c2VkXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgcGF1c2Uob25QYXVzZSkge1xuICAgIHRoaXMucmVhZHlTdGF0ZSA9IFwicGF1c2luZ1wiO1xuXG4gICAgY29uc3QgcGF1c2UgPSAoKSA9PiB7XG4gICAgICBkZWJ1ZyhcInBhdXNlZFwiKTtcbiAgICAgIHRoaXMucmVhZHlTdGF0ZSA9IFwicGF1c2VkXCI7XG4gICAgICBvblBhdXNlKCk7XG4gICAgfTtcblxuICAgIGlmICh0aGlzLnBvbGxpbmcgfHwgIXRoaXMud3JpdGFibGUpIHtcbiAgICAgIGxldCB0b3RhbCA9IDA7XG5cbiAgICAgIGlmICh0aGlzLnBvbGxpbmcpIHtcbiAgICAgICAgZGVidWcoXCJ3ZSBhcmUgY3VycmVudGx5IHBvbGxpbmcgLSB3YWl0aW5nIHRvIHBhdXNlXCIpO1xuICAgICAgICB0b3RhbCsrO1xuICAgICAgICB0aGlzLm9uY2UoXCJwb2xsQ29tcGxldGVcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgZGVidWcoXCJwcmUtcGF1c2UgcG9sbGluZyBjb21wbGV0ZVwiKTtcbiAgICAgICAgICAtLXRvdGFsIHx8IHBhdXNlKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMud3JpdGFibGUpIHtcbiAgICAgICAgZGVidWcoXCJ3ZSBhcmUgY3VycmVudGx5IHdyaXRpbmcgLSB3YWl0aW5nIHRvIHBhdXNlXCIpO1xuICAgICAgICB0b3RhbCsrO1xuICAgICAgICB0aGlzLm9uY2UoXCJkcmFpblwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICBkZWJ1ZyhcInByZS1wYXVzZSB3cml0aW5nIGNvbXBsZXRlXCIpO1xuICAgICAgICAgIC0tdG90YWwgfHwgcGF1c2UoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhdXNlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFN0YXJ0cyBwb2xsaW5nIGN5Y2xlLlxuICAgKlxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cbiAgcG9sbCgpIHtcbiAgICBkZWJ1ZyhcInBvbGxpbmdcIik7XG4gICAgdGhpcy5wb2xsaW5nID0gdHJ1ZTtcbiAgICB0aGlzLmRvUG9sbCgpO1xuICAgIHRoaXMuZW1pdChcInBvbGxcIik7XG4gIH1cblxuICAvKipcbiAgICogT3ZlcmxvYWRzIG9uRGF0YSB0byBkZXRlY3QgcGF5bG9hZHMuXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgb25EYXRhKGRhdGEpIHtcbiAgICBkZWJ1ZyhcInBvbGxpbmcgZ290IGRhdGEgJXNcIiwgZGF0YSk7XG4gICAgY29uc3QgY2FsbGJhY2sgPSBwYWNrZXQgPT4ge1xuICAgICAgLy8gaWYgaXRzIHRoZSBmaXJzdCBtZXNzYWdlIHdlIGNvbnNpZGVyIHRoZSB0cmFuc3BvcnQgb3BlblxuICAgICAgaWYgKFwib3BlbmluZ1wiID09PSB0aGlzLnJlYWR5U3RhdGUgJiYgcGFja2V0LnR5cGUgPT09IFwib3BlblwiKSB7XG4gICAgICAgIHRoaXMub25PcGVuKCk7XG4gICAgICB9XG5cbiAgICAgIC8vIGlmIGl0cyBhIGNsb3NlIHBhY2tldCwgd2UgY2xvc2UgdGhlIG9uZ29pbmcgcmVxdWVzdHNcbiAgICAgIGlmIChcImNsb3NlXCIgPT09IHBhY2tldC50eXBlKSB7XG4gICAgICAgIHRoaXMub25DbG9zZSgpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIC8vIG90aGVyd2lzZSBieXBhc3Mgb25EYXRhIGFuZCBoYW5kbGUgdGhlIG1lc3NhZ2VcbiAgICAgIHRoaXMub25QYWNrZXQocGFja2V0KTtcbiAgICB9O1xuXG4gICAgLy8gZGVjb2RlIHBheWxvYWRcbiAgICBwYXJzZXIuZGVjb2RlUGF5bG9hZChkYXRhLCB0aGlzLnNvY2tldC5iaW5hcnlUeXBlKS5mb3JFYWNoKGNhbGxiYWNrKTtcblxuICAgIC8vIGlmIGFuIGV2ZW50IGRpZCBub3QgdHJpZ2dlciBjbG9zaW5nXG4gICAgaWYgKFwiY2xvc2VkXCIgIT09IHRoaXMucmVhZHlTdGF0ZSkge1xuICAgICAgLy8gaWYgd2UgZ290IGRhdGEgd2UncmUgbm90IHBvbGxpbmdcbiAgICAgIHRoaXMucG9sbGluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5lbWl0KFwicG9sbENvbXBsZXRlXCIpO1xuXG4gICAgICBpZiAoXCJvcGVuXCIgPT09IHRoaXMucmVhZHlTdGF0ZSkge1xuICAgICAgICB0aGlzLnBvbGwoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlYnVnKCdpZ25vcmluZyBwb2xsIC0gdHJhbnNwb3J0IHN0YXRlIFwiJXNcIicsIHRoaXMucmVhZHlTdGF0ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEZvciBwb2xsaW5nLCBzZW5kIGEgY2xvc2UgcGFja2V0LlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIGRvQ2xvc2UoKSB7XG4gICAgY29uc3QgY2xvc2UgPSAoKSA9PiB7XG4gICAgICBkZWJ1ZyhcIndyaXRpbmcgY2xvc2UgcGFja2V0XCIpO1xuICAgICAgdGhpcy53cml0ZShbeyB0eXBlOiBcImNsb3NlXCIgfV0pO1xuICAgIH07XG5cbiAgICBpZiAoXCJvcGVuXCIgPT09IHRoaXMucmVhZHlTdGF0ZSkge1xuICAgICAgZGVidWcoXCJ0cmFuc3BvcnQgb3BlbiAtIGNsb3NpbmdcIik7XG4gICAgICBjbG9zZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpbiBjYXNlIHdlJ3JlIHRyeWluZyB0byBjbG9zZSB3aGlsZVxuICAgICAgLy8gaGFuZHNoYWtpbmcgaXMgaW4gcHJvZ3Jlc3MgKEdILTE2NClcbiAgICAgIGRlYnVnKFwidHJhbnNwb3J0IG5vdCBvcGVuIC0gZGVmZXJyaW5nIGNsb3NlXCIpO1xuICAgICAgdGhpcy5vbmNlKFwib3BlblwiLCBjbG9zZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFdyaXRlcyBhIHBhY2tldHMgcGF5bG9hZC5cbiAgICpcbiAgICogQHBhcmFtIHtBcnJheX0gZGF0YSBwYWNrZXRzXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGRyYWluIGNhbGxiYWNrXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgd3JpdGUocGFja2V0cykge1xuICAgIHRoaXMud3JpdGFibGUgPSBmYWxzZTtcblxuICAgIHBhcnNlci5lbmNvZGVQYXlsb2FkKHBhY2tldHMsIGRhdGEgPT4ge1xuICAgICAgdGhpcy5kb1dyaXRlKGRhdGEsICgpID0+IHtcbiAgICAgICAgdGhpcy53cml0YWJsZSA9IHRydWU7XG4gICAgICAgIHRoaXMuZW1pdChcImRyYWluXCIpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogR2VuZXJhdGVzIHVyaSBmb3IgY29ubmVjdGlvbi5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICB1cmkoKSB7XG4gICAgbGV0IHF1ZXJ5ID0gdGhpcy5xdWVyeSB8fCB7fTtcbiAgICBjb25zdCBzY2hlbWEgPSB0aGlzLm9wdHMuc2VjdXJlID8gXCJodHRwc1wiIDogXCJodHRwXCI7XG4gICAgbGV0IHBvcnQgPSBcIlwiO1xuXG4gICAgLy8gY2FjaGUgYnVzdGluZyBpcyBmb3JjZWRcbiAgICBpZiAoZmFsc2UgIT09IHRoaXMub3B0cy50aW1lc3RhbXBSZXF1ZXN0cykge1xuICAgICAgcXVlcnlbdGhpcy5vcHRzLnRpbWVzdGFtcFBhcmFtXSA9IHllYXN0KCk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLnN1cHBvcnRzQmluYXJ5ICYmICFxdWVyeS5zaWQpIHtcbiAgICAgIHF1ZXJ5LmI2NCA9IDE7XG4gICAgfVxuXG4gICAgcXVlcnkgPSBwYXJzZXFzLmVuY29kZShxdWVyeSk7XG5cbiAgICAvLyBhdm9pZCBwb3J0IGlmIGRlZmF1bHQgZm9yIHNjaGVtYVxuICAgIGlmIChcbiAgICAgIHRoaXMub3B0cy5wb3J0ICYmXG4gICAgICAoKFwiaHR0cHNcIiA9PT0gc2NoZW1hICYmIE51bWJlcih0aGlzLm9wdHMucG9ydCkgIT09IDQ0MykgfHxcbiAgICAgICAgKFwiaHR0cFwiID09PSBzY2hlbWEgJiYgTnVtYmVyKHRoaXMub3B0cy5wb3J0KSAhPT0gODApKVxuICAgICkge1xuICAgICAgcG9ydCA9IFwiOlwiICsgdGhpcy5vcHRzLnBvcnQ7XG4gICAgfVxuXG4gICAgLy8gcHJlcGVuZCA/IHRvIHF1ZXJ5XG4gICAgaWYgKHF1ZXJ5Lmxlbmd0aCkge1xuICAgICAgcXVlcnkgPSBcIj9cIiArIHF1ZXJ5O1xuICAgIH1cblxuICAgIGNvbnN0IGlwdjYgPSB0aGlzLm9wdHMuaG9zdG5hbWUuaW5kZXhPZihcIjpcIikgIT09IC0xO1xuICAgIHJldHVybiAoXG4gICAgICBzY2hlbWEgK1xuICAgICAgXCI6Ly9cIiArXG4gICAgICAoaXB2NiA/IFwiW1wiICsgdGhpcy5vcHRzLmhvc3RuYW1lICsgXCJdXCIgOiB0aGlzLm9wdHMuaG9zdG5hbWUpICtcbiAgICAgIHBvcnQgK1xuICAgICAgdGhpcy5vcHRzLnBhdGggK1xuICAgICAgcXVlcnlcbiAgICApO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUG9sbGluZztcbiIsImNvbnN0IGdsb2JhbFRoaXMgPSByZXF1aXJlKFwiLi4vZ2xvYmFsVGhpc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIFdlYlNvY2tldDogZ2xvYmFsVGhpcy5XZWJTb2NrZXQgfHwgZ2xvYmFsVGhpcy5Nb3pXZWJTb2NrZXQsXG4gIHVzaW5nQnJvd3NlcldlYlNvY2tldDogdHJ1ZSxcbiAgZGVmYXVsdEJpbmFyeVR5cGU6IFwiYXJyYXlidWZmZXJcIlxufTtcbiIsImNvbnN0IFRyYW5zcG9ydCA9IHJlcXVpcmUoXCIuLi90cmFuc3BvcnRcIik7XG5jb25zdCBwYXJzZXIgPSByZXF1aXJlKFwiZW5naW5lLmlvLXBhcnNlclwiKTtcbmNvbnN0IHBhcnNlcXMgPSByZXF1aXJlKFwicGFyc2Vxc1wiKTtcbmNvbnN0IHllYXN0ID0gcmVxdWlyZShcInllYXN0XCIpO1xuY29uc3QgeyBwaWNrIH0gPSByZXF1aXJlKFwiLi4vdXRpbFwiKTtcbmNvbnN0IHtcbiAgV2ViU29ja2V0LFxuICB1c2luZ0Jyb3dzZXJXZWJTb2NrZXQsXG4gIGRlZmF1bHRCaW5hcnlUeXBlXG59ID0gcmVxdWlyZShcIi4vd2Vic29ja2V0LWNvbnN0cnVjdG9yXCIpO1xuXG5jb25zdCBkZWJ1ZyA9IHJlcXVpcmUoXCJkZWJ1Z1wiKShcImVuZ2luZS5pby1jbGllbnQ6d2Vic29ja2V0XCIpO1xuXG4vLyBkZXRlY3QgUmVhY3ROYXRpdmUgZW52aXJvbm1lbnRcbmNvbnN0IGlzUmVhY3ROYXRpdmUgPVxuICB0eXBlb2YgbmF2aWdhdG9yICE9PSBcInVuZGVmaW5lZFwiICYmXG4gIHR5cGVvZiBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gXCJzdHJpbmdcIiAmJlxuICBuYXZpZ2F0b3IucHJvZHVjdC50b0xvd2VyQ2FzZSgpID09PSBcInJlYWN0bmF0aXZlXCI7XG5cbmNsYXNzIFdTIGV4dGVuZHMgVHJhbnNwb3J0IHtcbiAgLyoqXG4gICAqIFdlYlNvY2tldCB0cmFuc3BvcnQgY29uc3RydWN0b3IuXG4gICAqXG4gICAqIEBhcGkge09iamVjdH0gY29ubmVjdGlvbiBvcHRpb25zXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuICBjb25zdHJ1Y3RvcihvcHRzKSB7XG4gICAgc3VwZXIob3B0cyk7XG5cbiAgICB0aGlzLnN1cHBvcnRzQmluYXJ5ID0gIW9wdHMuZm9yY2VCYXNlNjQ7XG4gIH1cblxuICAvKipcbiAgICogVHJhbnNwb3J0IG5hbWUuXG4gICAqXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuICBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gXCJ3ZWJzb2NrZXRcIjtcbiAgfVxuXG4gIC8qKlxuICAgKiBPcGVucyBzb2NrZXQuXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgZG9PcGVuKCkge1xuICAgIGlmICghdGhpcy5jaGVjaygpKSB7XG4gICAgICAvLyBsZXQgcHJvYmUgdGltZW91dFxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHVyaSA9IHRoaXMudXJpKCk7XG4gICAgY29uc3QgcHJvdG9jb2xzID0gdGhpcy5vcHRzLnByb3RvY29scztcblxuICAgIC8vIFJlYWN0IE5hdGl2ZSBvbmx5IHN1cHBvcnRzIHRoZSAnaGVhZGVycycgb3B0aW9uLCBhbmQgd2lsbCBwcmludCBhIHdhcm5pbmcgaWYgYW55dGhpbmcgZWxzZSBpcyBwYXNzZWRcbiAgICBjb25zdCBvcHRzID0gaXNSZWFjdE5hdGl2ZVxuICAgICAgPyB7fVxuICAgICAgOiBwaWNrKFxuICAgICAgICAgIHRoaXMub3B0cyxcbiAgICAgICAgICBcImFnZW50XCIsXG4gICAgICAgICAgXCJwZXJNZXNzYWdlRGVmbGF0ZVwiLFxuICAgICAgICAgIFwicGZ4XCIsXG4gICAgICAgICAgXCJrZXlcIixcbiAgICAgICAgICBcInBhc3NwaHJhc2VcIixcbiAgICAgICAgICBcImNlcnRcIixcbiAgICAgICAgICBcImNhXCIsXG4gICAgICAgICAgXCJjaXBoZXJzXCIsXG4gICAgICAgICAgXCJyZWplY3RVbmF1dGhvcml6ZWRcIixcbiAgICAgICAgICBcImxvY2FsQWRkcmVzc1wiLFxuICAgICAgICAgIFwicHJvdG9jb2xWZXJzaW9uXCIsXG4gICAgICAgICAgXCJvcmlnaW5cIixcbiAgICAgICAgICBcIm1heFBheWxvYWRcIixcbiAgICAgICAgICBcImZhbWlseVwiLFxuICAgICAgICAgIFwiY2hlY2tTZXJ2ZXJJZGVudGl0eVwiXG4gICAgICAgICk7XG5cbiAgICBpZiAodGhpcy5vcHRzLmV4dHJhSGVhZGVycykge1xuICAgICAgb3B0cy5oZWFkZXJzID0gdGhpcy5vcHRzLmV4dHJhSGVhZGVycztcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgdGhpcy53cyA9XG4gICAgICAgIHVzaW5nQnJvd3NlcldlYlNvY2tldCAmJiAhaXNSZWFjdE5hdGl2ZVxuICAgICAgICAgID8gcHJvdG9jb2xzXG4gICAgICAgICAgICA/IG5ldyBXZWJTb2NrZXQodXJpLCBwcm90b2NvbHMpXG4gICAgICAgICAgICA6IG5ldyBXZWJTb2NrZXQodXJpKVxuICAgICAgICAgIDogbmV3IFdlYlNvY2tldCh1cmksIHByb3RvY29scywgb3B0cyk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5lbWl0KFwiZXJyb3JcIiwgZXJyKTtcbiAgICB9XG5cbiAgICB0aGlzLndzLmJpbmFyeVR5cGUgPSB0aGlzLnNvY2tldC5iaW5hcnlUeXBlIHx8IGRlZmF1bHRCaW5hcnlUeXBlO1xuXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgZXZlbnQgbGlzdGVuZXJzIHRvIHRoZSBzb2NrZXRcbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICB0aGlzLndzLm9ub3BlbiA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLm9wdHMuYXV0b1VucmVmKSB7XG4gICAgICAgIHRoaXMud3MuX3NvY2tldC51bnJlZigpO1xuICAgICAgfVxuICAgICAgdGhpcy5vbk9wZW4oKTtcbiAgICB9O1xuICAgIHRoaXMud3Mub25jbG9zZSA9IHRoaXMub25DbG9zZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMud3Mub25tZXNzYWdlID0gZXYgPT4gdGhpcy5vbkRhdGEoZXYuZGF0YSk7XG4gICAgdGhpcy53cy5vbmVycm9yID0gZSA9PiB0aGlzLm9uRXJyb3IoXCJ3ZWJzb2NrZXQgZXJyb3JcIiwgZSk7XG4gIH1cblxuICAvKipcbiAgICogV3JpdGVzIGRhdGEgdG8gc29ja2V0LlxuICAgKlxuICAgKiBAcGFyYW0ge0FycmF5fSBhcnJheSBvZiBwYWNrZXRzLlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIHdyaXRlKHBhY2tldHMpIHtcbiAgICB0aGlzLndyaXRhYmxlID0gZmFsc2U7XG5cbiAgICAvLyBlbmNvZGVQYWNrZXQgZWZmaWNpZW50IGFzIGl0IHVzZXMgV1MgZnJhbWluZ1xuICAgIC8vIG5vIG5lZWQgZm9yIGVuY29kZVBheWxvYWRcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhY2tldHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHBhY2tldCA9IHBhY2tldHNbaV07XG4gICAgICBjb25zdCBsYXN0UGFja2V0ID0gaSA9PT0gcGFja2V0cy5sZW5ndGggLSAxO1xuXG4gICAgICBwYXJzZXIuZW5jb2RlUGFja2V0KHBhY2tldCwgdGhpcy5zdXBwb3J0c0JpbmFyeSwgZGF0YSA9PiB7XG4gICAgICAgIC8vIGFsd2F5cyBjcmVhdGUgYSBuZXcgb2JqZWN0IChHSC00MzcpXG4gICAgICAgIGNvbnN0IG9wdHMgPSB7fTtcbiAgICAgICAgaWYgKCF1c2luZ0Jyb3dzZXJXZWJTb2NrZXQpIHtcbiAgICAgICAgICBpZiAocGFja2V0Lm9wdGlvbnMpIHtcbiAgICAgICAgICAgIG9wdHMuY29tcHJlc3MgPSBwYWNrZXQub3B0aW9ucy5jb21wcmVzcztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodGhpcy5vcHRzLnBlck1lc3NhZ2VEZWZsYXRlKSB7XG4gICAgICAgICAgICBjb25zdCBsZW4gPVxuICAgICAgICAgICAgICBcInN0cmluZ1wiID09PSB0eXBlb2YgZGF0YSA/IEJ1ZmZlci5ieXRlTGVuZ3RoKGRhdGEpIDogZGF0YS5sZW5ndGg7XG4gICAgICAgICAgICBpZiAobGVuIDwgdGhpcy5vcHRzLnBlck1lc3NhZ2VEZWZsYXRlLnRocmVzaG9sZCkge1xuICAgICAgICAgICAgICBvcHRzLmNvbXByZXNzID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gU29tZXRpbWVzIHRoZSB3ZWJzb2NrZXQgaGFzIGFscmVhZHkgYmVlbiBjbG9zZWQgYnV0IHRoZSBicm93c2VyIGRpZG4ndFxuICAgICAgICAvLyBoYXZlIGEgY2hhbmNlIG9mIGluZm9ybWluZyB1cyBhYm91dCBpdCB5ZXQsIGluIHRoYXQgY2FzZSBzZW5kIHdpbGxcbiAgICAgICAgLy8gdGhyb3cgYW4gZXJyb3JcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpZiAodXNpbmdCcm93c2VyV2ViU29ja2V0KSB7XG4gICAgICAgICAgICAvLyBUeXBlRXJyb3IgaXMgdGhyb3duIHdoZW4gcGFzc2luZyB0aGUgc2Vjb25kIGFyZ3VtZW50IG9uIFNhZmFyaVxuICAgICAgICAgICAgdGhpcy53cy5zZW5kKGRhdGEpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLndzLnNlbmQoZGF0YSwgb3B0cyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgZGVidWcoXCJ3ZWJzb2NrZXQgY2xvc2VkIGJlZm9yZSBvbmNsb3NlIGV2ZW50XCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGxhc3RQYWNrZXQpIHtcbiAgICAgICAgICAvLyBmYWtlIGRyYWluXG4gICAgICAgICAgLy8gZGVmZXIgdG8gbmV4dCB0aWNrIHRvIGFsbG93IFNvY2tldCB0byBjbGVhciB3cml0ZUJ1ZmZlclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy53cml0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmVtaXQoXCJkcmFpblwiKTtcbiAgICAgICAgICB9LCAwKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCB1cG9uIGNsb3NlXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgb25DbG9zZSgpIHtcbiAgICBUcmFuc3BvcnQucHJvdG90eXBlLm9uQ2xvc2UuY2FsbCh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbG9zZXMgc29ja2V0LlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIGRvQ2xvc2UoKSB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLndzICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICB0aGlzLndzLmNsb3NlKCk7XG4gICAgICB0aGlzLndzID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2VuZXJhdGVzIHVyaSBmb3IgY29ubmVjdGlvbi5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICB1cmkoKSB7XG4gICAgbGV0IHF1ZXJ5ID0gdGhpcy5xdWVyeSB8fCB7fTtcbiAgICBjb25zdCBzY2hlbWEgPSB0aGlzLm9wdHMuc2VjdXJlID8gXCJ3c3NcIiA6IFwid3NcIjtcbiAgICBsZXQgcG9ydCA9IFwiXCI7XG5cbiAgICAvLyBhdm9pZCBwb3J0IGlmIGRlZmF1bHQgZm9yIHNjaGVtYVxuICAgIGlmIChcbiAgICAgIHRoaXMub3B0cy5wb3J0ICYmXG4gICAgICAoKFwid3NzXCIgPT09IHNjaGVtYSAmJiBOdW1iZXIodGhpcy5vcHRzLnBvcnQpICE9PSA0NDMpIHx8XG4gICAgICAgIChcIndzXCIgPT09IHNjaGVtYSAmJiBOdW1iZXIodGhpcy5vcHRzLnBvcnQpICE9PSA4MCkpXG4gICAgKSB7XG4gICAgICBwb3J0ID0gXCI6XCIgKyB0aGlzLm9wdHMucG9ydDtcbiAgICB9XG5cbiAgICAvLyBhcHBlbmQgdGltZXN0YW1wIHRvIFVSSVxuICAgIGlmICh0aGlzLm9wdHMudGltZXN0YW1wUmVxdWVzdHMpIHtcbiAgICAgIHF1ZXJ5W3RoaXMub3B0cy50aW1lc3RhbXBQYXJhbV0gPSB5ZWFzdCgpO1xuICAgIH1cblxuICAgIC8vIGNvbW11bmljYXRlIGJpbmFyeSBzdXBwb3J0IGNhcGFiaWxpdGllc1xuICAgIGlmICghdGhpcy5zdXBwb3J0c0JpbmFyeSkge1xuICAgICAgcXVlcnkuYjY0ID0gMTtcbiAgICB9XG5cbiAgICBxdWVyeSA9IHBhcnNlcXMuZW5jb2RlKHF1ZXJ5KTtcblxuICAgIC8vIHByZXBlbmQgPyB0byBxdWVyeVxuICAgIGlmIChxdWVyeS5sZW5ndGgpIHtcbiAgICAgIHF1ZXJ5ID0gXCI/XCIgKyBxdWVyeTtcbiAgICB9XG5cbiAgICBjb25zdCBpcHY2ID0gdGhpcy5vcHRzLmhvc3RuYW1lLmluZGV4T2YoXCI6XCIpICE9PSAtMTtcbiAgICByZXR1cm4gKFxuICAgICAgc2NoZW1hICtcbiAgICAgIFwiOi8vXCIgK1xuICAgICAgKGlwdjYgPyBcIltcIiArIHRoaXMub3B0cy5ob3N0bmFtZSArIFwiXVwiIDogdGhpcy5vcHRzLmhvc3RuYW1lKSArXG4gICAgICBwb3J0ICtcbiAgICAgIHRoaXMub3B0cy5wYXRoICtcbiAgICAgIHF1ZXJ5XG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGZWF0dXJlIGRldGVjdGlvbiBmb3IgV2ViU29ja2V0LlxuICAgKlxuICAgKiBAcmV0dXJuIHtCb29sZWFufSB3aGV0aGVyIHRoaXMgdHJhbnNwb3J0IGlzIGF2YWlsYWJsZS5cbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG4gIGNoZWNrKCkge1xuICAgIHJldHVybiAoXG4gICAgICAhIVdlYlNvY2tldCAmJlxuICAgICAgIShcIl9faW5pdGlhbGl6ZVwiIGluIFdlYlNvY2tldCAmJiB0aGlzLm5hbWUgPT09IFdTLnByb3RvdHlwZS5uYW1lKVxuICAgICk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBXUztcbiIsIm1vZHVsZS5leHBvcnRzLnBpY2sgPSAob2JqLCAuLi5hdHRyKSA9PiB7XG4gIHJldHVybiBhdHRyLnJlZHVjZSgoYWNjLCBrKSA9PiB7XG4gICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgYWNjW2tdID0gb2JqW2tdO1xuICAgIH1cbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG59O1xuIiwiLy8gYnJvd3NlciBzaGltIGZvciB4bWxodHRwcmVxdWVzdCBtb2R1bGVcblxuY29uc3QgaGFzQ09SUyA9IHJlcXVpcmUoXCJoYXMtY29yc1wiKTtcbmNvbnN0IGdsb2JhbFRoaXMgPSByZXF1aXJlKFwiLi9nbG9iYWxUaGlzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9wdHMpIHtcbiAgY29uc3QgeGRvbWFpbiA9IG9wdHMueGRvbWFpbjtcblxuICAvLyBzY2hlbWUgbXVzdCBiZSBzYW1lIHdoZW4gdXNpZ24gWERvbWFpblJlcXVlc3RcbiAgLy8gaHR0cDovL2Jsb2dzLm1zZG4uY29tL2IvaWVpbnRlcm5hbHMvYXJjaGl2ZS8yMDEwLzA1LzEzL3hkb21haW5yZXF1ZXN0LXJlc3RyaWN0aW9ucy1saW1pdGF0aW9ucy1hbmQtd29ya2Fyb3VuZHMuYXNweFxuICBjb25zdCB4c2NoZW1lID0gb3B0cy54c2NoZW1lO1xuXG4gIC8vIFhEb21haW5SZXF1ZXN0IGhhcyBhIGZsb3cgb2Ygbm90IHNlbmRpbmcgY29va2llLCB0aGVyZWZvcmUgaXQgc2hvdWxkIGJlIGRpc2FibGVkIGFzIGEgZGVmYXVsdC5cbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL0F1dG9tYXR0aWMvZW5naW5lLmlvLWNsaWVudC9wdWxsLzIxN1xuICBjb25zdCBlbmFibGVzWERSID0gb3B0cy5lbmFibGVzWERSO1xuXG4gIC8vIFhNTEh0dHBSZXF1ZXN0IGNhbiBiZSBkaXNhYmxlZCBvbiBJRVxuICB0cnkge1xuICAgIGlmIChcInVuZGVmaW5lZFwiICE9PSB0eXBlb2YgWE1MSHR0cFJlcXVlc3QgJiYgKCF4ZG9tYWluIHx8IGhhc0NPUlMpKSB7XG4gICAgICByZXR1cm4gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgfVxuICB9IGNhdGNoIChlKSB7fVxuXG4gIC8vIFVzZSBYRG9tYWluUmVxdWVzdCBmb3IgSUU4IGlmIGVuYWJsZXNYRFIgaXMgdHJ1ZVxuICAvLyBiZWNhdXNlIGxvYWRpbmcgYmFyIGtlZXBzIGZsYXNoaW5nIHdoZW4gdXNpbmcganNvbnAtcG9sbGluZ1xuICAvLyBodHRwczovL2dpdGh1Yi5jb20veXVqaW9zYWthL3NvY2tlLmlvLWllOC1sb2FkaW5nLWV4YW1wbGVcbiAgdHJ5IHtcbiAgICBpZiAoXCJ1bmRlZmluZWRcIiAhPT0gdHlwZW9mIFhEb21haW5SZXF1ZXN0ICYmICF4c2NoZW1lICYmIGVuYWJsZXNYRFIpIHtcbiAgICAgIHJldHVybiBuZXcgWERvbWFpblJlcXVlc3QoKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHt9XG5cbiAgaWYgKCF4ZG9tYWluKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBuZXcgZ2xvYmFsVGhpc1tbXCJBY3RpdmVcIl0uY29uY2F0KFwiT2JqZWN0XCIpLmpvaW4oXCJYXCIpXShcbiAgICAgICAgXCJNaWNyb3NvZnQuWE1MSFRUUFwiXG4gICAgICApO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cbn07XG4iLCJjb25zdCBQQUNLRVRfVFlQRVMgPSBPYmplY3QuY3JlYXRlKG51bGwpOyAvLyBubyBNYXAgPSBubyBwb2x5ZmlsbFxuUEFDS0VUX1RZUEVTW1wib3BlblwiXSA9IFwiMFwiO1xuUEFDS0VUX1RZUEVTW1wiY2xvc2VcIl0gPSBcIjFcIjtcblBBQ0tFVF9UWVBFU1tcInBpbmdcIl0gPSBcIjJcIjtcblBBQ0tFVF9UWVBFU1tcInBvbmdcIl0gPSBcIjNcIjtcblBBQ0tFVF9UWVBFU1tcIm1lc3NhZ2VcIl0gPSBcIjRcIjtcblBBQ0tFVF9UWVBFU1tcInVwZ3JhZGVcIl0gPSBcIjVcIjtcblBBQ0tFVF9UWVBFU1tcIm5vb3BcIl0gPSBcIjZcIjtcblxuY29uc3QgUEFDS0VUX1RZUEVTX1JFVkVSU0UgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuT2JqZWN0LmtleXMoUEFDS0VUX1RZUEVTKS5mb3JFYWNoKGtleSA9PiB7XG4gIFBBQ0tFVF9UWVBFU19SRVZFUlNFW1BBQ0tFVF9UWVBFU1trZXldXSA9IGtleTtcbn0pO1xuXG5jb25zdCBFUlJPUl9QQUNLRVQgPSB7IHR5cGU6IFwiZXJyb3JcIiwgZGF0YTogXCJwYXJzZXIgZXJyb3JcIiB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgUEFDS0VUX1RZUEVTLFxuICBQQUNLRVRfVFlQRVNfUkVWRVJTRSxcbiAgRVJST1JfUEFDS0VUXG59O1xuIiwiY29uc3QgeyBQQUNLRVRfVFlQRVNfUkVWRVJTRSwgRVJST1JfUEFDS0VUIH0gPSByZXF1aXJlKFwiLi9jb21tb25zXCIpO1xuXG5jb25zdCB3aXRoTmF0aXZlQXJyYXlCdWZmZXIgPSB0eXBlb2YgQXJyYXlCdWZmZXIgPT09IFwiZnVuY3Rpb25cIjtcblxubGV0IGJhc2U2NGRlY29kZXI7XG5pZiAod2l0aE5hdGl2ZUFycmF5QnVmZmVyKSB7XG4gIGJhc2U2NGRlY29kZXIgPSByZXF1aXJlKFwiYmFzZTY0LWFycmF5YnVmZmVyXCIpO1xufVxuXG5jb25zdCBkZWNvZGVQYWNrZXQgPSAoZW5jb2RlZFBhY2tldCwgYmluYXJ5VHlwZSkgPT4ge1xuICBpZiAodHlwZW9mIGVuY29kZWRQYWNrZXQgIT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogXCJtZXNzYWdlXCIsXG4gICAgICBkYXRhOiBtYXBCaW5hcnkoZW5jb2RlZFBhY2tldCwgYmluYXJ5VHlwZSlcbiAgICB9O1xuICB9XG4gIGNvbnN0IHR5cGUgPSBlbmNvZGVkUGFja2V0LmNoYXJBdCgwKTtcbiAgaWYgKHR5cGUgPT09IFwiYlwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IFwibWVzc2FnZVwiLFxuICAgICAgZGF0YTogZGVjb2RlQmFzZTY0UGFja2V0KGVuY29kZWRQYWNrZXQuc3Vic3RyaW5nKDEpLCBiaW5hcnlUeXBlKVxuICAgIH07XG4gIH1cbiAgY29uc3QgcGFja2V0VHlwZSA9IFBBQ0tFVF9UWVBFU19SRVZFUlNFW3R5cGVdO1xuICBpZiAoIXBhY2tldFR5cGUpIHtcbiAgICByZXR1cm4gRVJST1JfUEFDS0VUO1xuICB9XG4gIHJldHVybiBlbmNvZGVkUGFja2V0Lmxlbmd0aCA+IDFcbiAgICA/IHtcbiAgICAgICAgdHlwZTogUEFDS0VUX1RZUEVTX1JFVkVSU0VbdHlwZV0sXG4gICAgICAgIGRhdGE6IGVuY29kZWRQYWNrZXQuc3Vic3RyaW5nKDEpXG4gICAgICB9XG4gICAgOiB7XG4gICAgICAgIHR5cGU6IFBBQ0tFVF9UWVBFU19SRVZFUlNFW3R5cGVdXG4gICAgICB9O1xufTtcblxuY29uc3QgZGVjb2RlQmFzZTY0UGFja2V0ID0gKGRhdGEsIGJpbmFyeVR5cGUpID0+IHtcbiAgaWYgKGJhc2U2NGRlY29kZXIpIHtcbiAgICBjb25zdCBkZWNvZGVkID0gYmFzZTY0ZGVjb2Rlci5kZWNvZGUoZGF0YSk7XG4gICAgcmV0dXJuIG1hcEJpbmFyeShkZWNvZGVkLCBiaW5hcnlUeXBlKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geyBiYXNlNjQ6IHRydWUsIGRhdGEgfTsgLy8gZmFsbGJhY2sgZm9yIG9sZCBicm93c2Vyc1xuICB9XG59O1xuXG5jb25zdCBtYXBCaW5hcnkgPSAoZGF0YSwgYmluYXJ5VHlwZSkgPT4ge1xuICBzd2l0Y2ggKGJpbmFyeVR5cGUpIHtcbiAgICBjYXNlIFwiYmxvYlwiOlxuICAgICAgcmV0dXJuIGRhdGEgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlciA/IG5ldyBCbG9iKFtkYXRhXSkgOiBkYXRhO1xuICAgIGNhc2UgXCJhcnJheWJ1ZmZlclwiOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZGF0YTsgLy8gYXNzdW1pbmcgdGhlIGRhdGEgaXMgYWxyZWFkeSBhbiBBcnJheUJ1ZmZlclxuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRlY29kZVBhY2tldDtcbiIsImNvbnN0IHsgUEFDS0VUX1RZUEVTIH0gPSByZXF1aXJlKFwiLi9jb21tb25zXCIpO1xuXG5jb25zdCB3aXRoTmF0aXZlQmxvYiA9XG4gIHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgfHxcbiAgKHR5cGVvZiBCbG9iICE9PSBcInVuZGVmaW5lZFwiICYmXG4gICAgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKEJsb2IpID09PSBcIltvYmplY3QgQmxvYkNvbnN0cnVjdG9yXVwiKTtcbmNvbnN0IHdpdGhOYXRpdmVBcnJheUJ1ZmZlciA9IHR5cGVvZiBBcnJheUJ1ZmZlciA9PT0gXCJmdW5jdGlvblwiO1xuXG4vLyBBcnJheUJ1ZmZlci5pc1ZpZXcgbWV0aG9kIGlzIG5vdCBkZWZpbmVkIGluIElFMTBcbmNvbnN0IGlzVmlldyA9IG9iaiA9PiB7XG4gIHJldHVybiB0eXBlb2YgQXJyYXlCdWZmZXIuaXNWaWV3ID09PSBcImZ1bmN0aW9uXCJcbiAgICA/IEFycmF5QnVmZmVyLmlzVmlldyhvYmopXG4gICAgOiBvYmogJiYgb2JqLmJ1ZmZlciBpbnN0YW5jZW9mIEFycmF5QnVmZmVyO1xufTtcblxuY29uc3QgZW5jb2RlUGFja2V0ID0gKHsgdHlwZSwgZGF0YSB9LCBzdXBwb3J0c0JpbmFyeSwgY2FsbGJhY2spID0+IHtcbiAgaWYgKHdpdGhOYXRpdmVCbG9iICYmIGRhdGEgaW5zdGFuY2VvZiBCbG9iKSB7XG4gICAgaWYgKHN1cHBvcnRzQmluYXJ5KSB7XG4gICAgICByZXR1cm4gY2FsbGJhY2soZGF0YSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBlbmNvZGVCbG9iQXNCYXNlNjQoZGF0YSwgY2FsbGJhY2spO1xuICAgIH1cbiAgfSBlbHNlIGlmIChcbiAgICB3aXRoTmF0aXZlQXJyYXlCdWZmZXIgJiZcbiAgICAoZGF0YSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyIHx8IGlzVmlldyhkYXRhKSlcbiAgKSB7XG4gICAgaWYgKHN1cHBvcnRzQmluYXJ5KSB7XG4gICAgICByZXR1cm4gY2FsbGJhY2soZGF0YSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyID8gZGF0YSA6IGRhdGEuYnVmZmVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGVuY29kZUJsb2JBc0Jhc2U2NChuZXcgQmxvYihbZGF0YV0pLCBjYWxsYmFjayk7XG4gICAgfVxuICB9XG4gIC8vIHBsYWluIHN0cmluZ1xuICByZXR1cm4gY2FsbGJhY2soUEFDS0VUX1RZUEVTW3R5cGVdICsgKGRhdGEgfHwgXCJcIikpO1xufTtcblxuY29uc3QgZW5jb2RlQmxvYkFzQmFzZTY0ID0gKGRhdGEsIGNhbGxiYWNrKSA9PiB7XG4gIGNvbnN0IGZpbGVSZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICBmaWxlUmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBmaWxlUmVhZGVyLnJlc3VsdC5zcGxpdChcIixcIilbMV07XG4gICAgY2FsbGJhY2soXCJiXCIgKyBjb250ZW50KTtcbiAgfTtcbiAgcmV0dXJuIGZpbGVSZWFkZXIucmVhZEFzRGF0YVVSTChkYXRhKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZW5jb2RlUGFja2V0O1xuIiwiY29uc3QgZW5jb2RlUGFja2V0ID0gcmVxdWlyZShcIi4vZW5jb2RlUGFja2V0XCIpO1xuY29uc3QgZGVjb2RlUGFja2V0ID0gcmVxdWlyZShcIi4vZGVjb2RlUGFja2V0XCIpO1xuXG5jb25zdCBTRVBBUkFUT1IgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDMwKTsgLy8gc2VlIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0RlbGltaXRlciNBU0NJSV9kZWxpbWl0ZWRfdGV4dFxuXG5jb25zdCBlbmNvZGVQYXlsb2FkID0gKHBhY2tldHMsIGNhbGxiYWNrKSA9PiB7XG4gIC8vIHNvbWUgcGFja2V0cyBtYXkgYmUgYWRkZWQgdG8gdGhlIGFycmF5IHdoaWxlIGVuY29kaW5nLCBzbyB0aGUgaW5pdGlhbCBsZW5ndGggbXVzdCBiZSBzYXZlZFxuICBjb25zdCBsZW5ndGggPSBwYWNrZXRzLmxlbmd0aDtcbiAgY29uc3QgZW5jb2RlZFBhY2tldHMgPSBuZXcgQXJyYXkobGVuZ3RoKTtcbiAgbGV0IGNvdW50ID0gMDtcblxuICBwYWNrZXRzLmZvckVhY2goKHBhY2tldCwgaSkgPT4ge1xuICAgIC8vIGZvcmNlIGJhc2U2NCBlbmNvZGluZyBmb3IgYmluYXJ5IHBhY2tldHNcbiAgICBlbmNvZGVQYWNrZXQocGFja2V0LCBmYWxzZSwgZW5jb2RlZFBhY2tldCA9PiB7XG4gICAgICBlbmNvZGVkUGFja2V0c1tpXSA9IGVuY29kZWRQYWNrZXQ7XG4gICAgICBpZiAoKytjb3VudCA9PT0gbGVuZ3RoKSB7XG4gICAgICAgIGNhbGxiYWNrKGVuY29kZWRQYWNrZXRzLmpvaW4oU0VQQVJBVE9SKSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufTtcblxuY29uc3QgZGVjb2RlUGF5bG9hZCA9IChlbmNvZGVkUGF5bG9hZCwgYmluYXJ5VHlwZSkgPT4ge1xuICBjb25zdCBlbmNvZGVkUGFja2V0cyA9IGVuY29kZWRQYXlsb2FkLnNwbGl0KFNFUEFSQVRPUik7XG4gIGNvbnN0IHBhY2tldHMgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbmNvZGVkUGFja2V0cy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGRlY29kZWRQYWNrZXQgPSBkZWNvZGVQYWNrZXQoZW5jb2RlZFBhY2tldHNbaV0sIGJpbmFyeVR5cGUpO1xuICAgIHBhY2tldHMucHVzaChkZWNvZGVkUGFja2V0KTtcbiAgICBpZiAoZGVjb2RlZFBhY2tldC50eXBlID09PSBcImVycm9yXCIpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcGFja2V0cztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBwcm90b2NvbDogNCxcbiAgZW5jb2RlUGFja2V0LFxuICBlbmNvZGVQYXlsb2FkLFxuICBkZWNvZGVQYWNrZXQsXG4gIGRlY29kZVBheWxvYWRcbn07XG4iLCJcbi8qKlxuICogTW9kdWxlIGV4cG9ydHMuXG4gKlxuICogTG9naWMgYm9ycm93ZWQgZnJvbSBNb2Rlcm5penI6XG4gKlxuICogICAtIGh0dHBzOi8vZ2l0aHViLmNvbS9Nb2Rlcm5penIvTW9kZXJuaXpyL2Jsb2IvbWFzdGVyL2ZlYXR1cmUtZGV0ZWN0cy9jb3JzLmpzXG4gKi9cblxudHJ5IHtcbiAgbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2YgWE1MSHR0cFJlcXVlc3QgIT09ICd1bmRlZmluZWQnICYmXG4gICAgJ3dpdGhDcmVkZW50aWFscycgaW4gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG59IGNhdGNoIChlcnIpIHtcbiAgLy8gaWYgWE1MSHR0cCBzdXBwb3J0IGlzIGRpc2FibGVkIGluIElFIHRoZW4gaXQgd2lsbCB0aHJvd1xuICAvLyB3aGVuIHRyeWluZyB0byBjcmVhdGVcbiAgbW9kdWxlLmV4cG9ydHMgPSBmYWxzZTtcbn1cbiIsIi8qXG4gIGh0dHBzOi8vZ2l0aHViLmNvbS9iYW5rc2VhbiB3cmFwcGVkIE1ha290byBNYXRzdW1vdG8gYW5kIFRha3VqaSBOaXNoaW11cmEncyBjb2RlIGluIGEgbmFtZXNwYWNlXG4gIHNvIGl0J3MgYmV0dGVyIGVuY2Fwc3VsYXRlZC4gTm93IHlvdSBjYW4gaGF2ZSBtdWx0aXBsZSByYW5kb20gbnVtYmVyIGdlbmVyYXRvcnNcbiAgYW5kIHRoZXkgd29uJ3Qgc3RvbXAgYWxsIG92ZXIgZWFjaG90aGVyJ3Mgc3RhdGUuXG5cbiAgSWYgeW91IHdhbnQgdG8gdXNlIHRoaXMgYXMgYSBzdWJzdGl0dXRlIGZvciBNYXRoLnJhbmRvbSgpLCB1c2UgdGhlIHJhbmRvbSgpXG4gIG1ldGhvZCBsaWtlIHNvOlxuXG4gIHZhciBtID0gbmV3IE1lcnNlbm5lVHdpc3RlcigpO1xuICB2YXIgcmFuZG9tTnVtYmVyID0gbS5yYW5kb20oKTtcblxuICBZb3UgY2FuIGFsc28gY2FsbCB0aGUgb3RoZXIgZ2VucmFuZF97Zm9vfSgpIG1ldGhvZHMgb24gdGhlIGluc3RhbmNlLlxuXG4gIElmIHlvdSB3YW50IHRvIHVzZSBhIHNwZWNpZmljIHNlZWQgaW4gb3JkZXIgdG8gZ2V0IGEgcmVwZWF0YWJsZSByYW5kb21cbiAgc2VxdWVuY2UsIHBhc3MgYW4gaW50ZWdlciBpbnRvIHRoZSBjb25zdHJ1Y3RvcjpcblxuICB2YXIgbSA9IG5ldyBNZXJzZW5uZVR3aXN0ZXIoMTIzKTtcblxuICBhbmQgdGhhdCB3aWxsIGFsd2F5cyBwcm9kdWNlIHRoZSBzYW1lIHJhbmRvbSBzZXF1ZW5jZS5cblxuICBTZWFuIE1jQ3VsbG91Z2ggKGJhbmtzZWFuQGdtYWlsLmNvbSlcbiovXG5cbi8qXG4gICBBIEMtcHJvZ3JhbSBmb3IgTVQxOTkzNywgd2l0aCBpbml0aWFsaXphdGlvbiBpbXByb3ZlZCAyMDAyLzEvMjYuXG4gICBDb2RlZCBieSBUYWt1amkgTmlzaGltdXJhIGFuZCBNYWtvdG8gTWF0c3Vtb3RvLlxuXG4gICBCZWZvcmUgdXNpbmcsIGluaXRpYWxpemUgdGhlIHN0YXRlIGJ5IHVzaW5nIGluaXRfc2VlZChzZWVkKVxuICAgb3IgaW5pdF9ieV9hcnJheShpbml0X2tleSwga2V5X2xlbmd0aCkuXG5cbiAgIENvcHlyaWdodCAoQykgMTk5NyAtIDIwMDIsIE1ha290byBNYXRzdW1vdG8gYW5kIFRha3VqaSBOaXNoaW11cmEsXG4gICBBbGwgcmlnaHRzIHJlc2VydmVkLlxuXG4gICBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXRcbiAgIG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uc1xuICAgYXJlIG1ldDpcblxuICAgICAxLiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodFxuICAgICAgICBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG5cbiAgICAgMi4gUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHRcbiAgICAgICAgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyIGluIHRoZVxuICAgICAgICBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGUgZGlzdHJpYnV0aW9uLlxuXG4gICAgIDMuIFRoZSBuYW1lcyBvZiBpdHMgY29udHJpYnV0b3JzIG1heSBub3QgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGVcbiAgICAgICAgcHJvZHVjdHMgZGVyaXZlZCBmcm9tIHRoaXMgc29mdHdhcmUgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuXG4gICAgICAgIHBlcm1pc3Npb24uXG5cbiAgIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlNcbiAgIFwiQVMgSVNcIiBBTkQgQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1RcbiAgIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUlxuICAgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFIERJU0NMQUlNRUQuICBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUIE9XTkVSIE9SXG4gICBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCxcbiAgIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTyxcbiAgIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLCBEQVRBLCBPUlxuICAgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZIFRIRU9SWSBPRlxuICAgTElBQklMSVRZLCBXSEVUSEVSIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUIChJTkNMVURJTkdcbiAgIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKSBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0UgT0YgVEhJU1xuICAgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEUgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG5cblxuICAgQW55IGZlZWRiYWNrIGlzIHZlcnkgd2VsY29tZS5cbiAgIGh0dHA6Ly93d3cubWF0aC5zY2kuaGlyb3NoaW1hLXUuYWMuanAvfm0tbWF0L01UL2VtdC5odG1sXG4gICBlbWFpbDogbS1tYXQgQCBtYXRoLnNjaS5oaXJvc2hpbWEtdS5hYy5qcCAocmVtb3ZlIHNwYWNlKVxuKi9cblxudmFyIE1lcnNlbm5lVHdpc3RlciA9IGZ1bmN0aW9uKHNlZWQpIHtcblx0aWYgKHNlZWQgPT0gdW5kZWZpbmVkKSB7XG5cdFx0c2VlZCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXHR9XG5cblx0LyogUGVyaW9kIHBhcmFtZXRlcnMgKi9cblx0dGhpcy5OID0gNjI0O1xuXHR0aGlzLk0gPSAzOTc7XG5cdHRoaXMuTUFUUklYX0EgPSAweDk5MDhiMGRmOyAgIC8qIGNvbnN0YW50IHZlY3RvciBhICovXG5cdHRoaXMuVVBQRVJfTUFTSyA9IDB4ODAwMDAwMDA7IC8qIG1vc3Qgc2lnbmlmaWNhbnQgdy1yIGJpdHMgKi9cblx0dGhpcy5MT1dFUl9NQVNLID0gMHg3ZmZmZmZmZjsgLyogbGVhc3Qgc2lnbmlmaWNhbnQgciBiaXRzICovXG5cblx0dGhpcy5tdCA9IG5ldyBBcnJheSh0aGlzLk4pOyAvKiB0aGUgYXJyYXkgZm9yIHRoZSBzdGF0ZSB2ZWN0b3IgKi9cblx0dGhpcy5tdGk9dGhpcy5OKzE7IC8qIG10aT09TisxIG1lYW5zIG10W05dIGlzIG5vdCBpbml0aWFsaXplZCAqL1xuXG5cdGlmIChzZWVkLmNvbnN0cnVjdG9yID09IEFycmF5KSB7XG5cdFx0dGhpcy5pbml0X2J5X2FycmF5KHNlZWQsIHNlZWQubGVuZ3RoKTtcblx0fVxuXHRlbHNlIHtcblx0XHR0aGlzLmluaXRfc2VlZChzZWVkKTtcblx0fVxufVxuXG4vKiBpbml0aWFsaXplcyBtdFtOXSB3aXRoIGEgc2VlZCAqL1xuLyogb3JpZ2luIG5hbWUgaW5pdF9nZW5yYW5kICovXG5NZXJzZW5uZVR3aXN0ZXIucHJvdG90eXBlLmluaXRfc2VlZCA9IGZ1bmN0aW9uKHMpIHtcblx0dGhpcy5tdFswXSA9IHMgPj4+IDA7XG5cdGZvciAodGhpcy5tdGk9MTsgdGhpcy5tdGk8dGhpcy5OOyB0aGlzLm10aSsrKSB7XG5cdFx0dmFyIHMgPSB0aGlzLm10W3RoaXMubXRpLTFdIF4gKHRoaXMubXRbdGhpcy5tdGktMV0gPj4+IDMwKTtcblx0XHR0aGlzLm10W3RoaXMubXRpXSA9ICgoKCgocyAmIDB4ZmZmZjAwMDApID4+PiAxNikgKiAxODEyNDMzMjUzKSA8PCAxNikgKyAocyAmIDB4MDAwMGZmZmYpICogMTgxMjQzMzI1Mylcblx0XHQrIHRoaXMubXRpO1xuXHRcdC8qIFNlZSBLbnV0aCBUQU9DUCBWb2wyLiAzcmQgRWQuIFAuMTA2IGZvciBtdWx0aXBsaWVyLiAqL1xuXHRcdC8qIEluIHRoZSBwcmV2aW91cyB2ZXJzaW9ucywgTVNCcyBvZiB0aGUgc2VlZCBhZmZlY3QgICAqL1xuXHRcdC8qIG9ubHkgTVNCcyBvZiB0aGUgYXJyYXkgbXRbXS4gICAgICAgICAgICAgICAgICAgICAgICAqL1xuXHRcdC8qIDIwMDIvMDEvMDkgbW9kaWZpZWQgYnkgTWFrb3RvIE1hdHN1bW90byAgICAgICAgICAgICAqL1xuXHRcdHRoaXMubXRbdGhpcy5tdGldID4+Pj0gMDtcblx0XHQvKiBmb3IgPjMyIGJpdCBtYWNoaW5lcyAqL1xuXHR9XG59XG5cbi8qIGluaXRpYWxpemUgYnkgYW4gYXJyYXkgd2l0aCBhcnJheS1sZW5ndGggKi9cbi8qIGluaXRfa2V5IGlzIHRoZSBhcnJheSBmb3IgaW5pdGlhbGl6aW5nIGtleXMgKi9cbi8qIGtleV9sZW5ndGggaXMgaXRzIGxlbmd0aCAqL1xuLyogc2xpZ2h0IGNoYW5nZSBmb3IgQysrLCAyMDA0LzIvMjYgKi9cbk1lcnNlbm5lVHdpc3Rlci5wcm90b3R5cGUuaW5pdF9ieV9hcnJheSA9IGZ1bmN0aW9uKGluaXRfa2V5LCBrZXlfbGVuZ3RoKSB7XG5cdHZhciBpLCBqLCBrO1xuXHR0aGlzLmluaXRfc2VlZCgxOTY1MDIxOCk7XG5cdGk9MTsgaj0wO1xuXHRrID0gKHRoaXMuTj5rZXlfbGVuZ3RoID8gdGhpcy5OIDoga2V5X2xlbmd0aCk7XG5cdGZvciAoOyBrOyBrLS0pIHtcblx0XHR2YXIgcyA9IHRoaXMubXRbaS0xXSBeICh0aGlzLm10W2ktMV0gPj4+IDMwKVxuXHRcdHRoaXMubXRbaV0gPSAodGhpcy5tdFtpXSBeICgoKCgocyAmIDB4ZmZmZjAwMDApID4+PiAxNikgKiAxNjY0NTI1KSA8PCAxNikgKyAoKHMgJiAweDAwMDBmZmZmKSAqIDE2NjQ1MjUpKSlcblx0XHQrIGluaXRfa2V5W2pdICsgajsgLyogbm9uIGxpbmVhciAqL1xuXHRcdHRoaXMubXRbaV0gPj4+PSAwOyAvKiBmb3IgV09SRFNJWkUgPiAzMiBtYWNoaW5lcyAqL1xuXHRcdGkrKzsgaisrO1xuXHRcdGlmIChpPj10aGlzLk4pIHsgdGhpcy5tdFswXSA9IHRoaXMubXRbdGhpcy5OLTFdOyBpPTE7IH1cblx0XHRpZiAoaj49a2V5X2xlbmd0aCkgaj0wO1xuXHR9XG5cdGZvciAoaz10aGlzLk4tMTsgazsgay0tKSB7XG5cdFx0dmFyIHMgPSB0aGlzLm10W2ktMV0gXiAodGhpcy5tdFtpLTFdID4+PiAzMCk7XG5cdFx0dGhpcy5tdFtpXSA9ICh0aGlzLm10W2ldIF4gKCgoKChzICYgMHhmZmZmMDAwMCkgPj4+IDE2KSAqIDE1NjYwODM5NDEpIDw8IDE2KSArIChzICYgMHgwMDAwZmZmZikgKiAxNTY2MDgzOTQxKSlcblx0XHQtIGk7IC8qIG5vbiBsaW5lYXIgKi9cblx0XHR0aGlzLm10W2ldID4+Pj0gMDsgLyogZm9yIFdPUkRTSVpFID4gMzIgbWFjaGluZXMgKi9cblx0XHRpKys7XG5cdFx0aWYgKGk+PXRoaXMuTikgeyB0aGlzLm10WzBdID0gdGhpcy5tdFt0aGlzLk4tMV07IGk9MTsgfVxuXHR9XG5cblx0dGhpcy5tdFswXSA9IDB4ODAwMDAwMDA7IC8qIE1TQiBpcyAxOyBhc3N1cmluZyBub24temVybyBpbml0aWFsIGFycmF5ICovXG59XG5cbi8qIGdlbmVyYXRlcyBhIHJhbmRvbSBudW1iZXIgb24gWzAsMHhmZmZmZmZmZl0taW50ZXJ2YWwgKi9cbi8qIG9yaWdpbiBuYW1lIGdlbnJhbmRfaW50MzIgKi9cbk1lcnNlbm5lVHdpc3Rlci5wcm90b3R5cGUucmFuZG9tX2ludCA9IGZ1bmN0aW9uKCkge1xuXHR2YXIgeTtcblx0dmFyIG1hZzAxID0gbmV3IEFycmF5KDB4MCwgdGhpcy5NQVRSSVhfQSk7XG5cdC8qIG1hZzAxW3hdID0geCAqIE1BVFJJWF9BICBmb3IgeD0wLDEgKi9cblxuXHRpZiAodGhpcy5tdGkgPj0gdGhpcy5OKSB7IC8qIGdlbmVyYXRlIE4gd29yZHMgYXQgb25lIHRpbWUgKi9cblx0XHR2YXIga2s7XG5cblx0XHRpZiAodGhpcy5tdGkgPT0gdGhpcy5OKzEpICAvKiBpZiBpbml0X3NlZWQoKSBoYXMgbm90IGJlZW4gY2FsbGVkLCAqL1xuXHRcdFx0dGhpcy5pbml0X3NlZWQoNTQ4OSk7ICAvKiBhIGRlZmF1bHQgaW5pdGlhbCBzZWVkIGlzIHVzZWQgKi9cblxuXHRcdGZvciAoa2s9MDtrazx0aGlzLk4tdGhpcy5NO2trKyspIHtcblx0XHRcdHkgPSAodGhpcy5tdFtra10mdGhpcy5VUFBFUl9NQVNLKXwodGhpcy5tdFtraysxXSZ0aGlzLkxPV0VSX01BU0spO1xuXHRcdFx0dGhpcy5tdFtra10gPSB0aGlzLm10W2trK3RoaXMuTV0gXiAoeSA+Pj4gMSkgXiBtYWcwMVt5ICYgMHgxXTtcblx0XHR9XG5cdFx0Zm9yICg7a2s8dGhpcy5OLTE7a2srKykge1xuXHRcdFx0eSA9ICh0aGlzLm10W2trXSZ0aGlzLlVQUEVSX01BU0spfCh0aGlzLm10W2trKzFdJnRoaXMuTE9XRVJfTUFTSyk7XG5cdFx0XHR0aGlzLm10W2trXSA9IHRoaXMubXRba2srKHRoaXMuTS10aGlzLk4pXSBeICh5ID4+PiAxKSBeIG1hZzAxW3kgJiAweDFdO1xuXHRcdH1cblx0XHR5ID0gKHRoaXMubXRbdGhpcy5OLTFdJnRoaXMuVVBQRVJfTUFTSyl8KHRoaXMubXRbMF0mdGhpcy5MT1dFUl9NQVNLKTtcblx0XHR0aGlzLm10W3RoaXMuTi0xXSA9IHRoaXMubXRbdGhpcy5NLTFdIF4gKHkgPj4+IDEpIF4gbWFnMDFbeSAmIDB4MV07XG5cblx0XHR0aGlzLm10aSA9IDA7XG5cdH1cblxuXHR5ID0gdGhpcy5tdFt0aGlzLm10aSsrXTtcblxuXHQvKiBUZW1wZXJpbmcgKi9cblx0eSBePSAoeSA+Pj4gMTEpO1xuXHR5IF49ICh5IDw8IDcpICYgMHg5ZDJjNTY4MDtcblx0eSBePSAoeSA8PCAxNSkgJiAweGVmYzYwMDAwO1xuXHR5IF49ICh5ID4+PiAxOCk7XG5cblx0cmV0dXJuIHkgPj4+IDA7XG59XG5cbi8qIGdlbmVyYXRlcyBhIHJhbmRvbSBudW1iZXIgb24gWzAsMHg3ZmZmZmZmZl0taW50ZXJ2YWwgKi9cbi8qIG9yaWdpbiBuYW1lIGdlbnJhbmRfaW50MzEgKi9cbk1lcnNlbm5lVHdpc3Rlci5wcm90b3R5cGUucmFuZG9tX2ludDMxID0gZnVuY3Rpb24oKSB7XG5cdHJldHVybiAodGhpcy5yYW5kb21faW50KCk+Pj4xKTtcbn1cblxuLyogZ2VuZXJhdGVzIGEgcmFuZG9tIG51bWJlciBvbiBbMCwxXS1yZWFsLWludGVydmFsICovXG4vKiBvcmlnaW4gbmFtZSBnZW5yYW5kX3JlYWwxICovXG5NZXJzZW5uZVR3aXN0ZXIucHJvdG90eXBlLnJhbmRvbV9pbmNsID0gZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzLnJhbmRvbV9pbnQoKSooMS4wLzQyOTQ5NjcyOTUuMCk7XG5cdC8qIGRpdmlkZWQgYnkgMl4zMi0xICovXG59XG5cbi8qIGdlbmVyYXRlcyBhIHJhbmRvbSBudW1iZXIgb24gWzAsMSktcmVhbC1pbnRlcnZhbCAqL1xuTWVyc2VubmVUd2lzdGVyLnByb3RvdHlwZS5yYW5kb20gPSBmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXMucmFuZG9tX2ludCgpKigxLjAvNDI5NDk2NzI5Ni4wKTtcblx0LyogZGl2aWRlZCBieSAyXjMyICovXG59XG5cbi8qIGdlbmVyYXRlcyBhIHJhbmRvbSBudW1iZXIgb24gKDAsMSktcmVhbC1pbnRlcnZhbCAqL1xuLyogb3JpZ2luIG5hbWUgZ2VucmFuZF9yZWFsMyAqL1xuTWVyc2VubmVUd2lzdGVyLnByb3RvdHlwZS5yYW5kb21fZXhjbCA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gKHRoaXMucmFuZG9tX2ludCgpICsgMC41KSooMS4wLzQyOTQ5NjcyOTYuMCk7XG5cdC8qIGRpdmlkZWQgYnkgMl4zMiAqL1xufVxuXG4vKiBnZW5lcmF0ZXMgYSByYW5kb20gbnVtYmVyIG9uIFswLDEpIHdpdGggNTMtYml0IHJlc29sdXRpb24qL1xuLyogb3JpZ2luIG5hbWUgZ2VucmFuZF9yZXM1MyAqL1xuTWVyc2VubmVUd2lzdGVyLnByb3RvdHlwZS5yYW5kb21fbG9uZyA9IGZ1bmN0aW9uKCkge1xuXHR2YXIgYT10aGlzLnJhbmRvbV9pbnQoKT4+PjUsIGI9dGhpcy5yYW5kb21faW50KCk+Pj42O1xuXHRyZXR1cm4oYSo2NzEwODg2NC4wK2IpKigxLjAvOTAwNzE5OTI1NDc0MDk5Mi4wKTtcbn1cblxuLyogVGhlc2UgcmVhbCB2ZXJzaW9ucyBhcmUgZHVlIHRvIElzYWt1IFdhZGEsIDIwMDIvMDEvMDkgYWRkZWQgKi9cblxubW9kdWxlLmV4cG9ydHMgPSBNZXJzZW5uZVR3aXN0ZXI7XG4iLCIvKipcbiAqIENvbXBpbGVzIGEgcXVlcnlzdHJpbmdcbiAqIFJldHVybnMgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmV4cG9ydHMuZW5jb2RlID0gZnVuY3Rpb24gKG9iaikge1xuICB2YXIgc3RyID0gJyc7XG5cbiAgZm9yICh2YXIgaSBpbiBvYmopIHtcbiAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICBpZiAoc3RyLmxlbmd0aCkgc3RyICs9ICcmJztcbiAgICAgIHN0ciArPSBlbmNvZGVVUklDb21wb25lbnQoaSkgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQob2JqW2ldKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RyO1xufTtcblxuLyoqXG4gKiBQYXJzZXMgYSBzaW1wbGUgcXVlcnlzdHJpbmcgaW50byBhbiBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gcXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmV4cG9ydHMuZGVjb2RlID0gZnVuY3Rpb24ocXMpe1xuICB2YXIgcXJ5ID0ge307XG4gIHZhciBwYWlycyA9IHFzLnNwbGl0KCcmJyk7XG4gIGZvciAodmFyIGkgPSAwLCBsID0gcGFpcnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgdmFyIHBhaXIgPSBwYWlyc1tpXS5zcGxpdCgnPScpO1xuICAgIHFyeVtkZWNvZGVVUklDb21wb25lbnQocGFpclswXSldID0gZGVjb2RlVVJJQ29tcG9uZW50KHBhaXJbMV0pO1xuICB9XG4gIHJldHVybiBxcnk7XG59O1xuIiwiLyoqXG4gKiBQYXJzZXMgYW4gVVJJXG4gKlxuICogQGF1dGhvciBTdGV2ZW4gTGV2aXRoYW4gPHN0ZXZlbmxldml0aGFuLmNvbT4gKE1JVCBsaWNlbnNlKVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxudmFyIHJlID0gL14oPzooPyFbXjpAXSs6W146QFxcL10qQCkoaHR0cHxodHRwc3x3c3x3c3MpOlxcL1xcLyk/KCg/OigoW146QF0qKSg/OjooW146QF0qKSk/KT9AKT8oKD86W2EtZjAtOV17MCw0fTopezIsN31bYS1mMC05XXswLDR9fFteOlxcLz8jXSopKD86OihcXGQqKSk/KSgoKFxcLyg/OltePyNdKD8hW14/I1xcL10qXFwuW14/I1xcLy5dKyg/Ols/I118JCkpKSpcXC8/KT8oW14/I1xcL10qKSkoPzpcXD8oW14jXSopKT8oPzojKC4qKSk/KS87XG5cbnZhciBwYXJ0cyA9IFtcbiAgICAnc291cmNlJywgJ3Byb3RvY29sJywgJ2F1dGhvcml0eScsICd1c2VySW5mbycsICd1c2VyJywgJ3Bhc3N3b3JkJywgJ2hvc3QnLCAncG9ydCcsICdyZWxhdGl2ZScsICdwYXRoJywgJ2RpcmVjdG9yeScsICdmaWxlJywgJ3F1ZXJ5JywgJ2FuY2hvcidcbl07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcGFyc2V1cmkoc3RyKSB7XG4gICAgdmFyIHNyYyA9IHN0cixcbiAgICAgICAgYiA9IHN0ci5pbmRleE9mKCdbJyksXG4gICAgICAgIGUgPSBzdHIuaW5kZXhPZignXScpO1xuXG4gICAgaWYgKGIgIT0gLTEgJiYgZSAhPSAtMSkge1xuICAgICAgICBzdHIgPSBzdHIuc3Vic3RyaW5nKDAsIGIpICsgc3RyLnN1YnN0cmluZyhiLCBlKS5yZXBsYWNlKC86L2csICc7JykgKyBzdHIuc3Vic3RyaW5nKGUsIHN0ci5sZW5ndGgpO1xuICAgIH1cblxuICAgIHZhciBtID0gcmUuZXhlYyhzdHIgfHwgJycpLFxuICAgICAgICB1cmkgPSB7fSxcbiAgICAgICAgaSA9IDE0O1xuXG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgICB1cmlbcGFydHNbaV1dID0gbVtpXSB8fCAnJztcbiAgICB9XG5cbiAgICBpZiAoYiAhPSAtMSAmJiBlICE9IC0xKSB7XG4gICAgICAgIHVyaS5zb3VyY2UgPSBzcmM7XG4gICAgICAgIHVyaS5ob3N0ID0gdXJpLmhvc3Quc3Vic3RyaW5nKDEsIHVyaS5ob3N0Lmxlbmd0aCAtIDEpLnJlcGxhY2UoLzsvZywgJzonKTtcbiAgICAgICAgdXJpLmF1dGhvcml0eSA9IHVyaS5hdXRob3JpdHkucmVwbGFjZSgnWycsICcnKS5yZXBsYWNlKCddJywgJycpLnJlcGxhY2UoLzsvZywgJzonKTtcbiAgICAgICAgdXJpLmlwdjZ1cmkgPSB0cnVlO1xuICAgIH1cblxuICAgIHVyaS5wYXRoTmFtZXMgPSBwYXRoTmFtZXModXJpLCB1cmlbJ3BhdGgnXSk7XG4gICAgdXJpLnF1ZXJ5S2V5ID0gcXVlcnlLZXkodXJpLCB1cmlbJ3F1ZXJ5J10pO1xuXG4gICAgcmV0dXJuIHVyaTtcbn07XG5cbmZ1bmN0aW9uIHBhdGhOYW1lcyhvYmosIHBhdGgpIHtcbiAgICB2YXIgcmVneCA9IC9cXC97Miw5fS9nLFxuICAgICAgICBuYW1lcyA9IHBhdGgucmVwbGFjZShyZWd4LCBcIi9cIikuc3BsaXQoXCIvXCIpO1xuXG4gICAgaWYgKHBhdGguc3Vic3RyKDAsIDEpID09ICcvJyB8fCBwYXRoLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBuYW1lcy5zcGxpY2UoMCwgMSk7XG4gICAgfVxuICAgIGlmIChwYXRoLnN1YnN0cihwYXRoLmxlbmd0aCAtIDEsIDEpID09ICcvJykge1xuICAgICAgICBuYW1lcy5zcGxpY2UobmFtZXMubGVuZ3RoIC0gMSwgMSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5hbWVzO1xufVxuXG5mdW5jdGlvbiBxdWVyeUtleSh1cmksIHF1ZXJ5KSB7XG4gICAgdmFyIGRhdGEgPSB7fTtcblxuICAgIHF1ZXJ5LnJlcGxhY2UoLyg/Ol58JikoW14mPV0qKT0/KFteJl0qKS9nLCBmdW5jdGlvbiAoJDAsICQxLCAkMikge1xuICAgICAgICBpZiAoJDEpIHtcbiAgICAgICAgICAgIGRhdGFbJDFdID0gJDI7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBkYXRhO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmlvID0gZXhwb3J0cy5Tb2NrZXQgPSBleHBvcnRzLk1hbmFnZXIgPSBleHBvcnRzLnByb3RvY29sID0gdm9pZCAwO1xuY29uc3QgdXJsXzEgPSByZXF1aXJlKFwiLi91cmxcIik7XG5jb25zdCBtYW5hZ2VyXzEgPSByZXF1aXJlKFwiLi9tYW5hZ2VyXCIpO1xuY29uc3QgZGVidWcgPSByZXF1aXJlKFwiZGVidWdcIikoXCJzb2NrZXQuaW8tY2xpZW50XCIpO1xuLyoqXG4gKiBNb2R1bGUgZXhwb3J0cy5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gbG9va3VwO1xuLyoqXG4gKiBNYW5hZ2VycyBjYWNoZS5cbiAqL1xuY29uc3QgY2FjaGUgPSAoZXhwb3J0cy5tYW5hZ2VycyA9IHt9KTtcbmZ1bmN0aW9uIGxvb2t1cCh1cmksIG9wdHMpIHtcbiAgICBpZiAodHlwZW9mIHVyaSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICBvcHRzID0gdXJpO1xuICAgICAgICB1cmkgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIG9wdHMgPSBvcHRzIHx8IHt9O1xuICAgIGNvbnN0IHBhcnNlZCA9IHVybF8xLnVybCh1cmksIG9wdHMucGF0aCB8fCBcIi9zb2NrZXQuaW9cIik7XG4gICAgY29uc3Qgc291cmNlID0gcGFyc2VkLnNvdXJjZTtcbiAgICBjb25zdCBpZCA9IHBhcnNlZC5pZDtcbiAgICBjb25zdCBwYXRoID0gcGFyc2VkLnBhdGg7XG4gICAgY29uc3Qgc2FtZU5hbWVzcGFjZSA9IGNhY2hlW2lkXSAmJiBwYXRoIGluIGNhY2hlW2lkXVtcIm5zcHNcIl07XG4gICAgY29uc3QgbmV3Q29ubmVjdGlvbiA9IG9wdHMuZm9yY2VOZXcgfHxcbiAgICAgICAgb3B0c1tcImZvcmNlIG5ldyBjb25uZWN0aW9uXCJdIHx8XG4gICAgICAgIGZhbHNlID09PSBvcHRzLm11bHRpcGxleCB8fFxuICAgICAgICBzYW1lTmFtZXNwYWNlO1xuICAgIGxldCBpbztcbiAgICBpZiAobmV3Q29ubmVjdGlvbikge1xuICAgICAgICBkZWJ1ZyhcImlnbm9yaW5nIHNvY2tldCBjYWNoZSBmb3IgJXNcIiwgc291cmNlKTtcbiAgICAgICAgaW8gPSBuZXcgbWFuYWdlcl8xLk1hbmFnZXIoc291cmNlLCBvcHRzKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmICghY2FjaGVbaWRdKSB7XG4gICAgICAgICAgICBkZWJ1ZyhcIm5ldyBpbyBpbnN0YW5jZSBmb3IgJXNcIiwgc291cmNlKTtcbiAgICAgICAgICAgIGNhY2hlW2lkXSA9IG5ldyBtYW5hZ2VyXzEuTWFuYWdlcihzb3VyY2UsIG9wdHMpO1xuICAgICAgICB9XG4gICAgICAgIGlvID0gY2FjaGVbaWRdO1xuICAgIH1cbiAgICBpZiAocGFyc2VkLnF1ZXJ5ICYmICFvcHRzLnF1ZXJ5KSB7XG4gICAgICAgIG9wdHMucXVlcnkgPSBwYXJzZWQucXVlcnlLZXk7XG4gICAgfVxuICAgIHJldHVybiBpby5zb2NrZXQocGFyc2VkLnBhdGgsIG9wdHMpO1xufVxuZXhwb3J0cy5pbyA9IGxvb2t1cDtcbi8qKlxuICogUHJvdG9jb2wgdmVyc2lvbi5cbiAqXG4gKiBAcHVibGljXG4gKi9cbnZhciBzb2NrZXRfaW9fcGFyc2VyXzEgPSByZXF1aXJlKFwic29ja2V0LmlvLXBhcnNlclwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInByb3RvY29sXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzb2NrZXRfaW9fcGFyc2VyXzEucHJvdG9jb2w7IH0gfSk7XG4vKipcbiAqIGBjb25uZWN0YC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJpXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydHMuY29ubmVjdCA9IGxvb2t1cDtcbi8qKlxuICogRXhwb3NlIGNvbnN0cnVjdG9ycyBmb3Igc3RhbmRhbG9uZSBidWlsZC5cbiAqXG4gKiBAcHVibGljXG4gKi9cbnZhciBtYW5hZ2VyXzIgPSByZXF1aXJlKFwiLi9tYW5hZ2VyXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiTWFuYWdlclwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbWFuYWdlcl8yLk1hbmFnZXI7IH0gfSk7XG52YXIgc29ja2V0XzEgPSByZXF1aXJlKFwiLi9zb2NrZXRcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJTb2NrZXRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNvY2tldF8xLlNvY2tldDsgfSB9KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGxvb2t1cDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5NYW5hZ2VyID0gdm9pZCAwO1xuY29uc3QgZWlvID0gcmVxdWlyZShcImVuZ2luZS5pby1jbGllbnRcIik7XG5jb25zdCBzb2NrZXRfMSA9IHJlcXVpcmUoXCIuL3NvY2tldFwiKTtcbmNvbnN0IHBhcnNlciA9IHJlcXVpcmUoXCJzb2NrZXQuaW8tcGFyc2VyXCIpO1xuY29uc3Qgb25fMSA9IHJlcXVpcmUoXCIuL29uXCIpO1xuY29uc3QgQmFja29mZiA9IHJlcXVpcmUoXCJiYWNrbzJcIik7XG5jb25zdCB0eXBlZF9ldmVudHNfMSA9IHJlcXVpcmUoXCIuL3R5cGVkLWV2ZW50c1wiKTtcbmNvbnN0IGRlYnVnID0gcmVxdWlyZShcImRlYnVnXCIpKFwic29ja2V0LmlvLWNsaWVudDptYW5hZ2VyXCIpO1xuY2xhc3MgTWFuYWdlciBleHRlbmRzIHR5cGVkX2V2ZW50c18xLlN0cmljdEV2ZW50RW1pdHRlciB7XG4gICAgY29uc3RydWN0b3IodXJpLCBvcHRzKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubnNwcyA9IHt9O1xuICAgICAgICB0aGlzLnN1YnMgPSBbXTtcbiAgICAgICAgaWYgKHVyaSAmJiBcIm9iamVjdFwiID09PSB0eXBlb2YgdXJpKSB7XG4gICAgICAgICAgICBvcHRzID0gdXJpO1xuICAgICAgICAgICAgdXJpID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIG9wdHMgPSBvcHRzIHx8IHt9O1xuICAgICAgICBvcHRzLnBhdGggPSBvcHRzLnBhdGggfHwgXCIvc29ja2V0LmlvXCI7XG4gICAgICAgIHRoaXMub3B0cyA9IG9wdHM7XG4gICAgICAgIHRoaXMucmVjb25uZWN0aW9uKG9wdHMucmVjb25uZWN0aW9uICE9PSBmYWxzZSk7XG4gICAgICAgIHRoaXMucmVjb25uZWN0aW9uQXR0ZW1wdHMob3B0cy5yZWNvbm5lY3Rpb25BdHRlbXB0cyB8fCBJbmZpbml0eSk7XG4gICAgICAgIHRoaXMucmVjb25uZWN0aW9uRGVsYXkob3B0cy5yZWNvbm5lY3Rpb25EZWxheSB8fCAxMDAwKTtcbiAgICAgICAgdGhpcy5yZWNvbm5lY3Rpb25EZWxheU1heChvcHRzLnJlY29ubmVjdGlvbkRlbGF5TWF4IHx8IDUwMDApO1xuICAgICAgICB0aGlzLnJhbmRvbWl6YXRpb25GYWN0b3Iob3B0cy5yYW5kb21pemF0aW9uRmFjdG9yIHx8IDAuNSk7XG4gICAgICAgIHRoaXMuYmFja29mZiA9IG5ldyBCYWNrb2ZmKHtcbiAgICAgICAgICAgIG1pbjogdGhpcy5yZWNvbm5lY3Rpb25EZWxheSgpLFxuICAgICAgICAgICAgbWF4OiB0aGlzLnJlY29ubmVjdGlvbkRlbGF5TWF4KCksXG4gICAgICAgICAgICBqaXR0ZXI6IHRoaXMucmFuZG9taXphdGlvbkZhY3RvcigpLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy50aW1lb3V0KG51bGwgPT0gb3B0cy50aW1lb3V0ID8gMjAwMDAgOiBvcHRzLnRpbWVvdXQpO1xuICAgICAgICB0aGlzLl9yZWFkeVN0YXRlID0gXCJjbG9zZWRcIjtcbiAgICAgICAgdGhpcy51cmkgPSB1cmk7XG4gICAgICAgIGNvbnN0IF9wYXJzZXIgPSBvcHRzLnBhcnNlciB8fCBwYXJzZXI7XG4gICAgICAgIHRoaXMuZW5jb2RlciA9IG5ldyBfcGFyc2VyLkVuY29kZXIoKTtcbiAgICAgICAgdGhpcy5kZWNvZGVyID0gbmV3IF9wYXJzZXIuRGVjb2RlcigpO1xuICAgICAgICB0aGlzLl9hdXRvQ29ubmVjdCA9IG9wdHMuYXV0b0Nvbm5lY3QgIT09IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5fYXV0b0Nvbm5lY3QpXG4gICAgICAgICAgICB0aGlzLm9wZW4oKTtcbiAgICB9XG4gICAgcmVjb25uZWN0aW9uKHYpIHtcbiAgICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JlY29ubmVjdGlvbjtcbiAgICAgICAgdGhpcy5fcmVjb25uZWN0aW9uID0gISF2O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgcmVjb25uZWN0aW9uQXR0ZW1wdHModikge1xuICAgICAgICBpZiAodiA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JlY29ubmVjdGlvbkF0dGVtcHRzO1xuICAgICAgICB0aGlzLl9yZWNvbm5lY3Rpb25BdHRlbXB0cyA9IHY7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICByZWNvbm5lY3Rpb25EZWxheSh2KSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgaWYgKHYgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZWNvbm5lY3Rpb25EZWxheTtcbiAgICAgICAgdGhpcy5fcmVjb25uZWN0aW9uRGVsYXkgPSB2O1xuICAgICAgICAoX2EgPSB0aGlzLmJhY2tvZmYpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5zZXRNaW4odik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICByYW5kb21pemF0aW9uRmFjdG9yKHYpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBpZiAodiA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JhbmRvbWl6YXRpb25GYWN0b3I7XG4gICAgICAgIHRoaXMuX3JhbmRvbWl6YXRpb25GYWN0b3IgPSB2O1xuICAgICAgICAoX2EgPSB0aGlzLmJhY2tvZmYpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5zZXRKaXR0ZXIodik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICByZWNvbm5lY3Rpb25EZWxheU1heCh2KSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgaWYgKHYgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZWNvbm5lY3Rpb25EZWxheU1heDtcbiAgICAgICAgdGhpcy5fcmVjb25uZWN0aW9uRGVsYXlNYXggPSB2O1xuICAgICAgICAoX2EgPSB0aGlzLmJhY2tvZmYpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5zZXRNYXgodik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICB0aW1lb3V0KHYpIHtcbiAgICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RpbWVvdXQ7XG4gICAgICAgIHRoaXMuX3RpbWVvdXQgPSB2O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogU3RhcnRzIHRyeWluZyB0byByZWNvbm5lY3QgaWYgcmVjb25uZWN0aW9uIGlzIGVuYWJsZWQgYW5kIHdlIGhhdmUgbm90XG4gICAgICogc3RhcnRlZCByZWNvbm5lY3RpbmcgeWV0XG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIG1heWJlUmVjb25uZWN0T25PcGVuKCkge1xuICAgICAgICAvLyBPbmx5IHRyeSB0byByZWNvbm5lY3QgaWYgaXQncyB0aGUgZmlyc3QgdGltZSB3ZSdyZSBjb25uZWN0aW5nXG4gICAgICAgIGlmICghdGhpcy5fcmVjb25uZWN0aW5nICYmXG4gICAgICAgICAgICB0aGlzLl9yZWNvbm5lY3Rpb24gJiZcbiAgICAgICAgICAgIHRoaXMuYmFja29mZi5hdHRlbXB0cyA9PT0gMCkge1xuICAgICAgICAgICAgLy8ga2VlcHMgcmVjb25uZWN0aW9uIGZyb20gZmlyaW5nIHR3aWNlIGZvciB0aGUgc2FtZSByZWNvbm5lY3Rpb24gbG9vcFxuICAgICAgICAgICAgdGhpcy5yZWNvbm5lY3QoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBjdXJyZW50IHRyYW5zcG9ydCBgc29ja2V0YC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIC0gb3B0aW9uYWwsIGNhbGxiYWNrXG4gICAgICogQHJldHVybiBzZWxmXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIG9wZW4oZm4pIHtcbiAgICAgICAgZGVidWcoXCJyZWFkeVN0YXRlICVzXCIsIHRoaXMuX3JlYWR5U3RhdGUpO1xuICAgICAgICBpZiAofnRoaXMuX3JlYWR5U3RhdGUuaW5kZXhPZihcIm9wZW5cIikpXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgZGVidWcoXCJvcGVuaW5nICVzXCIsIHRoaXMudXJpKTtcbiAgICAgICAgdGhpcy5lbmdpbmUgPSBlaW8odGhpcy51cmksIHRoaXMub3B0cyk7XG4gICAgICAgIGNvbnN0IHNvY2tldCA9IHRoaXMuZW5naW5lO1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5fcmVhZHlTdGF0ZSA9IFwib3BlbmluZ1wiO1xuICAgICAgICB0aGlzLnNraXBSZWNvbm5lY3QgPSBmYWxzZTtcbiAgICAgICAgLy8gZW1pdCBgb3BlbmBcbiAgICAgICAgY29uc3Qgb3BlblN1YkRlc3Ryb3kgPSBvbl8xLm9uKHNvY2tldCwgXCJvcGVuXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNlbGYub25vcGVuKCk7XG4gICAgICAgICAgICBmbiAmJiBmbigpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gZW1pdCBgZXJyb3JgXG4gICAgICAgIGNvbnN0IGVycm9yU3ViID0gb25fMS5vbihzb2NrZXQsIFwiZXJyb3JcIiwgKGVycikgPT4ge1xuICAgICAgICAgICAgZGVidWcoXCJlcnJvclwiKTtcbiAgICAgICAgICAgIHNlbGYuY2xlYW51cCgpO1xuICAgICAgICAgICAgc2VsZi5fcmVhZHlTdGF0ZSA9IFwiY2xvc2VkXCI7XG4gICAgICAgICAgICB0aGlzLmVtaXRSZXNlcnZlZChcImVycm9yXCIsIGVycik7XG4gICAgICAgICAgICBpZiAoZm4pIHtcbiAgICAgICAgICAgICAgICBmbihlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gT25seSBkbyB0aGlzIGlmIHRoZXJlIGlzIG5vIGZuIHRvIGhhbmRsZSB0aGUgZXJyb3JcbiAgICAgICAgICAgICAgICBzZWxmLm1heWJlUmVjb25uZWN0T25PcGVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoZmFsc2UgIT09IHRoaXMuX3RpbWVvdXQpIHtcbiAgICAgICAgICAgIGNvbnN0IHRpbWVvdXQgPSB0aGlzLl90aW1lb3V0O1xuICAgICAgICAgICAgZGVidWcoXCJjb25uZWN0IGF0dGVtcHQgd2lsbCB0aW1lb3V0IGFmdGVyICVkXCIsIHRpbWVvdXQpO1xuICAgICAgICAgICAgaWYgKHRpbWVvdXQgPT09IDApIHtcbiAgICAgICAgICAgICAgICBvcGVuU3ViRGVzdHJveSgpOyAvLyBwcmV2ZW50cyBhIHJhY2UgY29uZGl0aW9uIHdpdGggdGhlICdvcGVuJyBldmVudFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gc2V0IHRpbWVyXG4gICAgICAgICAgICBjb25zdCB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGRlYnVnKFwiY29ubmVjdCBhdHRlbXB0IHRpbWVkIG91dCBhZnRlciAlZFwiLCB0aW1lb3V0KTtcbiAgICAgICAgICAgICAgICBvcGVuU3ViRGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIHNvY2tldC5jbG9zZSgpO1xuICAgICAgICAgICAgICAgIHNvY2tldC5lbWl0KFwiZXJyb3JcIiwgbmV3IEVycm9yKFwidGltZW91dFwiKSk7XG4gICAgICAgICAgICB9LCB0aW1lb3V0KTtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdHMuYXV0b1VucmVmKSB7XG4gICAgICAgICAgICAgICAgdGltZXIudW5yZWYoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc3Vicy5wdXNoKGZ1bmN0aW9uIHN1YkRlc3Ryb3koKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3Vicy5wdXNoKG9wZW5TdWJEZXN0cm95KTtcbiAgICAgICAgdGhpcy5zdWJzLnB1c2goZXJyb3JTdWIpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWxpYXMgZm9yIG9wZW4oKVxuICAgICAqXG4gICAgICogQHJldHVybiBzZWxmXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIGNvbm5lY3QoZm4pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3Blbihmbik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxlZCB1cG9uIHRyYW5zcG9ydCBvcGVuLlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBvbm9wZW4oKSB7XG4gICAgICAgIGRlYnVnKFwib3BlblwiKTtcbiAgICAgICAgLy8gY2xlYXIgb2xkIHN1YnNcbiAgICAgICAgdGhpcy5jbGVhbnVwKCk7XG4gICAgICAgIC8vIG1hcmsgYXMgb3BlblxuICAgICAgICB0aGlzLl9yZWFkeVN0YXRlID0gXCJvcGVuXCI7XG4gICAgICAgIHRoaXMuZW1pdFJlc2VydmVkKFwib3BlblwiKTtcbiAgICAgICAgLy8gYWRkIG5ldyBzdWJzXG4gICAgICAgIGNvbnN0IHNvY2tldCA9IHRoaXMuZW5naW5lO1xuICAgICAgICB0aGlzLnN1YnMucHVzaChvbl8xLm9uKHNvY2tldCwgXCJwaW5nXCIsIHRoaXMub25waW5nLmJpbmQodGhpcykpLCBvbl8xLm9uKHNvY2tldCwgXCJkYXRhXCIsIHRoaXMub25kYXRhLmJpbmQodGhpcykpLCBvbl8xLm9uKHNvY2tldCwgXCJlcnJvclwiLCB0aGlzLm9uZXJyb3IuYmluZCh0aGlzKSksIG9uXzEub24oc29ja2V0LCBcImNsb3NlXCIsIHRoaXMub25jbG9zZS5iaW5kKHRoaXMpKSwgb25fMS5vbih0aGlzLmRlY29kZXIsIFwiZGVjb2RlZFwiLCB0aGlzLm9uZGVjb2RlZC5iaW5kKHRoaXMpKSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxlZCB1cG9uIGEgcGluZy5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgb25waW5nKCkge1xuICAgICAgICB0aGlzLmVtaXRSZXNlcnZlZChcInBpbmdcIik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxlZCB3aXRoIGRhdGEuXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIG9uZGF0YShkYXRhKSB7XG4gICAgICAgIHRoaXMuZGVjb2Rlci5hZGQoZGF0YSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxlZCB3aGVuIHBhcnNlciBmdWxseSBkZWNvZGVzIGEgcGFja2V0LlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBvbmRlY29kZWQocGFja2V0KSB7XG4gICAgICAgIHRoaXMuZW1pdFJlc2VydmVkKFwicGFja2V0XCIsIHBhY2tldCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxlZCB1cG9uIHNvY2tldCBlcnJvci5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgb25lcnJvcihlcnIpIHtcbiAgICAgICAgZGVidWcoXCJlcnJvclwiLCBlcnIpO1xuICAgICAgICB0aGlzLmVtaXRSZXNlcnZlZChcImVycm9yXCIsIGVycik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgc29ja2V0IGZvciB0aGUgZ2l2ZW4gYG5zcGAuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtTb2NrZXR9XG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIHNvY2tldChuc3AsIG9wdHMpIHtcbiAgICAgICAgbGV0IHNvY2tldCA9IHRoaXMubnNwc1tuc3BdO1xuICAgICAgICBpZiAoIXNvY2tldCkge1xuICAgICAgICAgICAgc29ja2V0ID0gbmV3IHNvY2tldF8xLlNvY2tldCh0aGlzLCBuc3AsIG9wdHMpO1xuICAgICAgICAgICAgdGhpcy5uc3BzW25zcF0gPSBzb2NrZXQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNvY2tldDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHVwb24gYSBzb2NrZXQgY2xvc2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc29ja2V0XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfZGVzdHJveShzb2NrZXQpIHtcbiAgICAgICAgY29uc3QgbnNwcyA9IE9iamVjdC5rZXlzKHRoaXMubnNwcyk7XG4gICAgICAgIGZvciAoY29uc3QgbnNwIG9mIG5zcHMpIHtcbiAgICAgICAgICAgIGNvbnN0IHNvY2tldCA9IHRoaXMubnNwc1tuc3BdO1xuICAgICAgICAgICAgaWYgKHNvY2tldC5hY3RpdmUpIHtcbiAgICAgICAgICAgICAgICBkZWJ1ZyhcInNvY2tldCAlcyBpcyBzdGlsbCBhY3RpdmUsIHNraXBwaW5nIGNsb3NlXCIsIG5zcCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2Nsb3NlKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFdyaXRlcyBhIHBhY2tldC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBwYWNrZXRcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9wYWNrZXQocGFja2V0KSB7XG4gICAgICAgIGRlYnVnKFwid3JpdGluZyBwYWNrZXQgJWpcIiwgcGFja2V0KTtcbiAgICAgICAgY29uc3QgZW5jb2RlZFBhY2tldHMgPSB0aGlzLmVuY29kZXIuZW5jb2RlKHBhY2tldCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZW5jb2RlZFBhY2tldHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLndyaXRlKGVuY29kZWRQYWNrZXRzW2ldLCBwYWNrZXQub3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2xlYW4gdXAgdHJhbnNwb3J0IHN1YnNjcmlwdGlvbnMgYW5kIHBhY2tldCBidWZmZXIuXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGNsZWFudXAoKSB7XG4gICAgICAgIGRlYnVnKFwiY2xlYW51cFwiKTtcbiAgICAgICAgdGhpcy5zdWJzLmZvckVhY2goKHN1YkRlc3Ryb3kpID0+IHN1YkRlc3Ryb3koKSk7XG4gICAgICAgIHRoaXMuc3Vicy5sZW5ndGggPSAwO1xuICAgICAgICB0aGlzLmRlY29kZXIuZGVzdHJveSgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDbG9zZSB0aGUgY3VycmVudCBzb2NrZXQuXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9jbG9zZSgpIHtcbiAgICAgICAgZGVidWcoXCJkaXNjb25uZWN0XCIpO1xuICAgICAgICB0aGlzLnNraXBSZWNvbm5lY3QgPSB0cnVlO1xuICAgICAgICB0aGlzLl9yZWNvbm5lY3RpbmcgPSBmYWxzZTtcbiAgICAgICAgaWYgKFwib3BlbmluZ1wiID09PSB0aGlzLl9yZWFkeVN0YXRlKSB7XG4gICAgICAgICAgICAvLyBgb25jbG9zZWAgd2lsbCBub3QgZmlyZSBiZWNhdXNlXG4gICAgICAgICAgICAvLyBhbiBvcGVuIGV2ZW50IG5ldmVyIGhhcHBlbmVkXG4gICAgICAgICAgICB0aGlzLmNsZWFudXAoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJhY2tvZmYucmVzZXQoKTtcbiAgICAgICAgdGhpcy5fcmVhZHlTdGF0ZSA9IFwiY2xvc2VkXCI7XG4gICAgICAgIGlmICh0aGlzLmVuZ2luZSlcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLmNsb3NlKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFsaWFzIGZvciBjbG9zZSgpXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGRpc2Nvbm5lY3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jbG9zZSgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgdXBvbiBlbmdpbmUgY2xvc2UuXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIG9uY2xvc2UocmVhc29uKSB7XG4gICAgICAgIGRlYnVnKFwib25jbG9zZVwiKTtcbiAgICAgICAgdGhpcy5jbGVhbnVwKCk7XG4gICAgICAgIHRoaXMuYmFja29mZi5yZXNldCgpO1xuICAgICAgICB0aGlzLl9yZWFkeVN0YXRlID0gXCJjbG9zZWRcIjtcbiAgICAgICAgdGhpcy5lbWl0UmVzZXJ2ZWQoXCJjbG9zZVwiLCByZWFzb24pO1xuICAgICAgICBpZiAodGhpcy5fcmVjb25uZWN0aW9uICYmICF0aGlzLnNraXBSZWNvbm5lY3QpIHtcbiAgICAgICAgICAgIHRoaXMucmVjb25uZWN0KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQXR0ZW1wdCBhIHJlY29ubmVjdGlvbi5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgcmVjb25uZWN0KCkge1xuICAgICAgICBpZiAodGhpcy5fcmVjb25uZWN0aW5nIHx8IHRoaXMuc2tpcFJlY29ubmVjdClcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMuYmFja29mZi5hdHRlbXB0cyA+PSB0aGlzLl9yZWNvbm5lY3Rpb25BdHRlbXB0cykge1xuICAgICAgICAgICAgZGVidWcoXCJyZWNvbm5lY3QgZmFpbGVkXCIpO1xuICAgICAgICAgICAgdGhpcy5iYWNrb2ZmLnJlc2V0KCk7XG4gICAgICAgICAgICB0aGlzLmVtaXRSZXNlcnZlZChcInJlY29ubmVjdF9mYWlsZWRcIik7XG4gICAgICAgICAgICB0aGlzLl9yZWNvbm5lY3RpbmcgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGRlbGF5ID0gdGhpcy5iYWNrb2ZmLmR1cmF0aW9uKCk7XG4gICAgICAgICAgICBkZWJ1ZyhcIndpbGwgd2FpdCAlZG1zIGJlZm9yZSByZWNvbm5lY3QgYXR0ZW1wdFwiLCBkZWxheSk7XG4gICAgICAgICAgICB0aGlzLl9yZWNvbm5lY3RpbmcgPSB0cnVlO1xuICAgICAgICAgICAgY29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5za2lwUmVjb25uZWN0KVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgZGVidWcoXCJhdHRlbXB0aW5nIHJlY29ubmVjdFwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXRSZXNlcnZlZChcInJlY29ubmVjdF9hdHRlbXB0XCIsIHNlbGYuYmFja29mZi5hdHRlbXB0cyk7XG4gICAgICAgICAgICAgICAgLy8gY2hlY2sgYWdhaW4gZm9yIHRoZSBjYXNlIHNvY2tldCBjbG9zZWQgaW4gYWJvdmUgZXZlbnRzXG4gICAgICAgICAgICAgICAgaWYgKHNlbGYuc2tpcFJlY29ubmVjdClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIHNlbGYub3BlbigoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlYnVnKFwicmVjb25uZWN0IGF0dGVtcHQgZXJyb3JcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLl9yZWNvbm5lY3RpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucmVjb25uZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXRSZXNlcnZlZChcInJlY29ubmVjdF9lcnJvclwiLCBlcnIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVidWcoXCJyZWNvbm5lY3Qgc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYub25yZWNvbm5lY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSwgZGVsYXkpO1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0cy5hdXRvVW5yZWYpIHtcbiAgICAgICAgICAgICAgICB0aW1lci51bnJlZigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zdWJzLnB1c2goZnVuY3Rpb24gc3ViRGVzdHJveSgpIHtcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHVwb24gc3VjY2Vzc2Z1bCByZWNvbm5lY3QuXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIG9ucmVjb25uZWN0KCkge1xuICAgICAgICBjb25zdCBhdHRlbXB0ID0gdGhpcy5iYWNrb2ZmLmF0dGVtcHRzO1xuICAgICAgICB0aGlzLl9yZWNvbm5lY3RpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5iYWNrb2ZmLnJlc2V0KCk7XG4gICAgICAgIHRoaXMuZW1pdFJlc2VydmVkKFwicmVjb25uZWN0XCIsIGF0dGVtcHQpO1xuICAgIH1cbn1cbmV4cG9ydHMuTWFuYWdlciA9IE1hbmFnZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMub24gPSB2b2lkIDA7XG5mdW5jdGlvbiBvbihvYmosIGV2LCBmbikge1xuICAgIG9iai5vbihldiwgZm4pO1xuICAgIHJldHVybiBmdW5jdGlvbiBzdWJEZXN0cm95KCkge1xuICAgICAgICBvYmoub2ZmKGV2LCBmbik7XG4gICAgfTtcbn1cbmV4cG9ydHMub24gPSBvbjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Tb2NrZXQgPSB2b2lkIDA7XG5jb25zdCBzb2NrZXRfaW9fcGFyc2VyXzEgPSByZXF1aXJlKFwic29ja2V0LmlvLXBhcnNlclwiKTtcbmNvbnN0IG9uXzEgPSByZXF1aXJlKFwiLi9vblwiKTtcbmNvbnN0IHR5cGVkX2V2ZW50c18xID0gcmVxdWlyZShcIi4vdHlwZWQtZXZlbnRzXCIpO1xuY29uc3QgZGVidWcgPSByZXF1aXJlKFwiZGVidWdcIikoXCJzb2NrZXQuaW8tY2xpZW50OnNvY2tldFwiKTtcbi8qKlxuICogSW50ZXJuYWwgZXZlbnRzLlxuICogVGhlc2UgZXZlbnRzIGNhbid0IGJlIGVtaXR0ZWQgYnkgdGhlIHVzZXIuXG4gKi9cbmNvbnN0IFJFU0VSVkVEX0VWRU5UUyA9IE9iamVjdC5mcmVlemUoe1xuICAgIGNvbm5lY3Q6IDEsXG4gICAgY29ubmVjdF9lcnJvcjogMSxcbiAgICBkaXNjb25uZWN0OiAxLFxuICAgIGRpc2Nvbm5lY3Rpbmc6IDEsXG4gICAgLy8gRXZlbnRFbWl0dGVyIHJlc2VydmVkIGV2ZW50czogaHR0cHM6Ly9ub2RlanMub3JnL2FwaS9ldmVudHMuaHRtbCNldmVudHNfZXZlbnRfbmV3bGlzdGVuZXJcbiAgICBuZXdMaXN0ZW5lcjogMSxcbiAgICByZW1vdmVMaXN0ZW5lcjogMSxcbn0pO1xuY2xhc3MgU29ja2V0IGV4dGVuZHMgdHlwZWRfZXZlbnRzXzEuU3RyaWN0RXZlbnRFbWl0dGVyIHtcbiAgICAvKipcbiAgICAgKiBgU29ja2V0YCBjb25zdHJ1Y3Rvci5cbiAgICAgKlxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihpbywgbnNwLCBvcHRzKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMucmVjZWl2ZUJ1ZmZlciA9IFtdO1xuICAgICAgICB0aGlzLnNlbmRCdWZmZXIgPSBbXTtcbiAgICAgICAgdGhpcy5pZHMgPSAwO1xuICAgICAgICB0aGlzLmFja3MgPSB7fTtcbiAgICAgICAgdGhpcy5mbGFncyA9IHt9O1xuICAgICAgICB0aGlzLmlvID0gaW87XG4gICAgICAgIHRoaXMubnNwID0gbnNwO1xuICAgICAgICB0aGlzLmlkcyA9IDA7XG4gICAgICAgIHRoaXMuYWNrcyA9IHt9O1xuICAgICAgICB0aGlzLnJlY2VpdmVCdWZmZXIgPSBbXTtcbiAgICAgICAgdGhpcy5zZW5kQnVmZmVyID0gW107XG4gICAgICAgIHRoaXMuY29ubmVjdGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZGlzY29ubmVjdGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5mbGFncyA9IHt9O1xuICAgICAgICBpZiAob3B0cyAmJiBvcHRzLmF1dGgpIHtcbiAgICAgICAgICAgIHRoaXMuYXV0aCA9IG9wdHMuYXV0aDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pby5fYXV0b0Nvbm5lY3QpXG4gICAgICAgICAgICB0aGlzLm9wZW4oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU3Vic2NyaWJlIHRvIG9wZW4sIGNsb3NlIGFuZCBwYWNrZXQgZXZlbnRzXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHN1YkV2ZW50cygpIHtcbiAgICAgICAgaWYgKHRoaXMuc3VicylcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgY29uc3QgaW8gPSB0aGlzLmlvO1xuICAgICAgICB0aGlzLnN1YnMgPSBbXG4gICAgICAgICAgICBvbl8xLm9uKGlvLCBcIm9wZW5cIiwgdGhpcy5vbm9wZW4uYmluZCh0aGlzKSksXG4gICAgICAgICAgICBvbl8xLm9uKGlvLCBcInBhY2tldFwiLCB0aGlzLm9ucGFja2V0LmJpbmQodGhpcykpLFxuICAgICAgICAgICAgb25fMS5vbihpbywgXCJlcnJvclwiLCB0aGlzLm9uZXJyb3IuYmluZCh0aGlzKSksXG4gICAgICAgICAgICBvbl8xLm9uKGlvLCBcImNsb3NlXCIsIHRoaXMub25jbG9zZS5iaW5kKHRoaXMpKSxcbiAgICAgICAgXTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogV2hldGhlciB0aGUgU29ja2V0IHdpbGwgdHJ5IHRvIHJlY29ubmVjdCB3aGVuIGl0cyBNYW5hZ2VyIGNvbm5lY3RzIG9yIHJlY29ubmVjdHNcbiAgICAgKi9cbiAgICBnZXQgYWN0aXZlKCkge1xuICAgICAgICByZXR1cm4gISF0aGlzLnN1YnM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFwiT3BlbnNcIiB0aGUgc29ja2V0LlxuICAgICAqXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbm5lY3RlZClcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB0aGlzLnN1YkV2ZW50cygpO1xuICAgICAgICBpZiAoIXRoaXMuaW9bXCJfcmVjb25uZWN0aW5nXCJdKVxuICAgICAgICAgICAgdGhpcy5pby5vcGVuKCk7IC8vIGVuc3VyZSBvcGVuXG4gICAgICAgIGlmIChcIm9wZW5cIiA9PT0gdGhpcy5pby5fcmVhZHlTdGF0ZSlcbiAgICAgICAgICAgIHRoaXMub25vcGVuKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBbGlhcyBmb3IgY29ubmVjdCgpXG4gICAgICovXG4gICAgb3BlbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29ubmVjdCgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZW5kcyBhIGBtZXNzYWdlYCBldmVudC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4gc2VsZlxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBzZW5kKC4uLmFyZ3MpIHtcbiAgICAgICAgYXJncy51bnNoaWZ0KFwibWVzc2FnZVwiKTtcbiAgICAgICAgdGhpcy5lbWl0LmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogT3ZlcnJpZGUgYGVtaXRgLlxuICAgICAqIElmIHRoZSBldmVudCBpcyBpbiBgZXZlbnRzYCwgaXQncyBlbWl0dGVkIG5vcm1hbGx5LlxuICAgICAqXG4gICAgICogQHJldHVybiBzZWxmXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIGVtaXQoZXYsIC4uLmFyZ3MpIHtcbiAgICAgICAgaWYgKFJFU0VSVkVEX0VWRU5UUy5oYXNPd25Qcm9wZXJ0eShldikpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignXCInICsgZXYgKyAnXCIgaXMgYSByZXNlcnZlZCBldmVudCBuYW1lJyk7XG4gICAgICAgIH1cbiAgICAgICAgYXJncy51bnNoaWZ0KGV2KTtcbiAgICAgICAgY29uc3QgcGFja2V0ID0ge1xuICAgICAgICAgICAgdHlwZTogc29ja2V0X2lvX3BhcnNlcl8xLlBhY2tldFR5cGUuRVZFTlQsXG4gICAgICAgICAgICBkYXRhOiBhcmdzLFxuICAgICAgICB9O1xuICAgICAgICBwYWNrZXQub3B0aW9ucyA9IHt9O1xuICAgICAgICBwYWNrZXQub3B0aW9ucy5jb21wcmVzcyA9IHRoaXMuZmxhZ3MuY29tcHJlc3MgIT09IGZhbHNlO1xuICAgICAgICAvLyBldmVudCBhY2sgY2FsbGJhY2tcbiAgICAgICAgaWYgKFwiZnVuY3Rpb25cIiA9PT0gdHlwZW9mIGFyZ3NbYXJncy5sZW5ndGggLSAxXSkge1xuICAgICAgICAgICAgZGVidWcoXCJlbWl0dGluZyBwYWNrZXQgd2l0aCBhY2sgaWQgJWRcIiwgdGhpcy5pZHMpO1xuICAgICAgICAgICAgdGhpcy5hY2tzW3RoaXMuaWRzXSA9IGFyZ3MucG9wKCk7XG4gICAgICAgICAgICBwYWNrZXQuaWQgPSB0aGlzLmlkcysrO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGlzVHJhbnNwb3J0V3JpdGFibGUgPSB0aGlzLmlvLmVuZ2luZSAmJlxuICAgICAgICAgICAgdGhpcy5pby5lbmdpbmUudHJhbnNwb3J0ICYmXG4gICAgICAgICAgICB0aGlzLmlvLmVuZ2luZS50cmFuc3BvcnQud3JpdGFibGU7XG4gICAgICAgIGNvbnN0IGRpc2NhcmRQYWNrZXQgPSB0aGlzLmZsYWdzLnZvbGF0aWxlICYmICghaXNUcmFuc3BvcnRXcml0YWJsZSB8fCAhdGhpcy5jb25uZWN0ZWQpO1xuICAgICAgICBpZiAoZGlzY2FyZFBhY2tldCkge1xuICAgICAgICAgICAgZGVidWcoXCJkaXNjYXJkIHBhY2tldCBhcyB0aGUgdHJhbnNwb3J0IGlzIG5vdCBjdXJyZW50bHkgd3JpdGFibGVcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5jb25uZWN0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMucGFja2V0KHBhY2tldCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNlbmRCdWZmZXIucHVzaChwYWNrZXQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZmxhZ3MgPSB7fTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNlbmRzIGEgcGFja2V0LlxuICAgICAqXG4gICAgICogQHBhcmFtIHBhY2tldFxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgcGFja2V0KHBhY2tldCkge1xuICAgICAgICBwYWNrZXQubnNwID0gdGhpcy5uc3A7XG4gICAgICAgIHRoaXMuaW8uX3BhY2tldChwYWNrZXQpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgdXBvbiBlbmdpbmUgYG9wZW5gLlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBvbm9wZW4oKSB7XG4gICAgICAgIGRlYnVnKFwidHJhbnNwb3J0IGlzIG9wZW4gLSBjb25uZWN0aW5nXCIpO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuYXV0aCA9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHRoaXMuYXV0aCgoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucGFja2V0KHsgdHlwZTogc29ja2V0X2lvX3BhcnNlcl8xLlBhY2tldFR5cGUuQ09OTkVDVCwgZGF0YSB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wYWNrZXQoeyB0eXBlOiBzb2NrZXRfaW9fcGFyc2VyXzEuUGFja2V0VHlwZS5DT05ORUNULCBkYXRhOiB0aGlzLmF1dGggfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHVwb24gZW5naW5lIG9yIG1hbmFnZXIgYGVycm9yYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBlcnJcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIG9uZXJyb3IoZXJyKSB7XG4gICAgICAgIGlmICghdGhpcy5jb25uZWN0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZW1pdFJlc2VydmVkKFwiY29ubmVjdF9lcnJvclwiLCBlcnIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxlZCB1cG9uIGVuZ2luZSBgY2xvc2VgLlxuICAgICAqXG4gICAgICogQHBhcmFtIHJlYXNvblxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgb25jbG9zZShyZWFzb24pIHtcbiAgICAgICAgZGVidWcoXCJjbG9zZSAoJXMpXCIsIHJlYXNvbik7XG4gICAgICAgIHRoaXMuY29ubmVjdGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZGlzY29ubmVjdGVkID0gdHJ1ZTtcbiAgICAgICAgZGVsZXRlIHRoaXMuaWQ7XG4gICAgICAgIHRoaXMuZW1pdFJlc2VydmVkKFwiZGlzY29ubmVjdFwiLCByZWFzb24pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgd2l0aCBzb2NrZXQgcGFja2V0LlxuICAgICAqXG4gICAgICogQHBhcmFtIHBhY2tldFxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgb25wYWNrZXQocGFja2V0KSB7XG4gICAgICAgIGNvbnN0IHNhbWVOYW1lc3BhY2UgPSBwYWNrZXQubnNwID09PSB0aGlzLm5zcDtcbiAgICAgICAgaWYgKCFzYW1lTmFtZXNwYWNlKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBzd2l0Y2ggKHBhY2tldC50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIHNvY2tldF9pb19wYXJzZXJfMS5QYWNrZXRUeXBlLkNPTk5FQ1Q6XG4gICAgICAgICAgICAgICAgaWYgKHBhY2tldC5kYXRhICYmIHBhY2tldC5kYXRhLnNpZCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpZCA9IHBhY2tldC5kYXRhLnNpZDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbmNvbm5lY3QoaWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0UmVzZXJ2ZWQoXCJjb25uZWN0X2Vycm9yXCIsIG5ldyBFcnJvcihcIkl0IHNlZW1zIHlvdSBhcmUgdHJ5aW5nIHRvIHJlYWNoIGEgU29ja2V0LklPIHNlcnZlciBpbiB2Mi54IHdpdGggYSB2My54IGNsaWVudCwgYnV0IHRoZXkgYXJlIG5vdCBjb21wYXRpYmxlIChtb3JlIGluZm9ybWF0aW9uIGhlcmU6IGh0dHBzOi8vc29ja2V0LmlvL2RvY3MvdjMvbWlncmF0aW5nLWZyb20tMi14LXRvLTMtMC8pXCIpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHNvY2tldF9pb19wYXJzZXJfMS5QYWNrZXRUeXBlLkVWRU5UOlxuICAgICAgICAgICAgICAgIHRoaXMub25ldmVudChwYWNrZXQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBzb2NrZXRfaW9fcGFyc2VyXzEuUGFja2V0VHlwZS5CSU5BUllfRVZFTlQ6XG4gICAgICAgICAgICAgICAgdGhpcy5vbmV2ZW50KHBhY2tldCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHNvY2tldF9pb19wYXJzZXJfMS5QYWNrZXRUeXBlLkFDSzpcbiAgICAgICAgICAgICAgICB0aGlzLm9uYWNrKHBhY2tldCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHNvY2tldF9pb19wYXJzZXJfMS5QYWNrZXRUeXBlLkJJTkFSWV9BQ0s6XG4gICAgICAgICAgICAgICAgdGhpcy5vbmFjayhwYWNrZXQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBzb2NrZXRfaW9fcGFyc2VyXzEuUGFja2V0VHlwZS5ESVNDT05ORUNUOlxuICAgICAgICAgICAgICAgIHRoaXMub25kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHNvY2tldF9pb19wYXJzZXJfMS5QYWNrZXRUeXBlLkNPTk5FQ1RfRVJST1I6XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyID0gbmV3IEVycm9yKHBhY2tldC5kYXRhLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICBlcnIuZGF0YSA9IHBhY2tldC5kYXRhLmRhdGE7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0UmVzZXJ2ZWQoXCJjb25uZWN0X2Vycm9yXCIsIGVycik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHVwb24gYSBzZXJ2ZXIgZXZlbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcGFja2V0XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBvbmV2ZW50KHBhY2tldCkge1xuICAgICAgICBjb25zdCBhcmdzID0gcGFja2V0LmRhdGEgfHwgW107XG4gICAgICAgIGRlYnVnKFwiZW1pdHRpbmcgZXZlbnQgJWpcIiwgYXJncyk7XG4gICAgICAgIGlmIChudWxsICE9IHBhY2tldC5pZCkge1xuICAgICAgICAgICAgZGVidWcoXCJhdHRhY2hpbmcgYWNrIGNhbGxiYWNrIHRvIGV2ZW50XCIpO1xuICAgICAgICAgICAgYXJncy5wdXNoKHRoaXMuYWNrKHBhY2tldC5pZCkpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmNvbm5lY3RlZCkge1xuICAgICAgICAgICAgdGhpcy5lbWl0RXZlbnQoYXJncyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJlY2VpdmVCdWZmZXIucHVzaChPYmplY3QuZnJlZXplKGFyZ3MpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbWl0RXZlbnQoYXJncykge1xuICAgICAgICBpZiAodGhpcy5fYW55TGlzdGVuZXJzICYmIHRoaXMuX2FueUxpc3RlbmVycy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IGxpc3RlbmVycyA9IHRoaXMuX2FueUxpc3RlbmVycy5zbGljZSgpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBsaXN0ZW5lciBvZiBsaXN0ZW5lcnMpIHtcbiAgICAgICAgICAgICAgICBsaXN0ZW5lci5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzdXBlci5lbWl0LmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQcm9kdWNlcyBhbiBhY2sgY2FsbGJhY2sgdG8gZW1pdCB3aXRoIGFuIGV2ZW50LlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBhY2soaWQpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGxldCBzZW50ID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgICAgICAgICAgLy8gcHJldmVudCBkb3VibGUgY2FsbGJhY2tzXG4gICAgICAgICAgICBpZiAoc2VudClcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBzZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgIGRlYnVnKFwic2VuZGluZyBhY2sgJWpcIiwgYXJncyk7XG4gICAgICAgICAgICBzZWxmLnBhY2tldCh7XG4gICAgICAgICAgICAgICAgdHlwZTogc29ja2V0X2lvX3BhcnNlcl8xLlBhY2tldFR5cGUuQUNLLFxuICAgICAgICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICAgICAgICBkYXRhOiBhcmdzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxlZCB1cG9uIGEgc2VydmVyIGFja25vd2xlZ2VtZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIHBhY2tldFxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgb25hY2socGFja2V0KSB7XG4gICAgICAgIGNvbnN0IGFjayA9IHRoaXMuYWNrc1twYWNrZXQuaWRdO1xuICAgICAgICBpZiAoXCJmdW5jdGlvblwiID09PSB0eXBlb2YgYWNrKSB7XG4gICAgICAgICAgICBkZWJ1ZyhcImNhbGxpbmcgYWNrICVzIHdpdGggJWpcIiwgcGFja2V0LmlkLCBwYWNrZXQuZGF0YSk7XG4gICAgICAgICAgICBhY2suYXBwbHkodGhpcywgcGFja2V0LmRhdGEpO1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuYWNrc1twYWNrZXQuaWRdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZGVidWcoXCJiYWQgYWNrICVzXCIsIHBhY2tldC5pZCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHVwb24gc2VydmVyIGNvbm5lY3QuXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIG9uY29ubmVjdChpZCkge1xuICAgICAgICBkZWJ1ZyhcInNvY2tldCBjb25uZWN0ZWQgd2l0aCBpZCAlc1wiLCBpZCk7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5jb25uZWN0ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmRpc2Nvbm5lY3RlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmVtaXRCdWZmZXJlZCgpO1xuICAgICAgICB0aGlzLmVtaXRSZXNlcnZlZChcImNvbm5lY3RcIik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEVtaXQgYnVmZmVyZWQgZXZlbnRzIChyZWNlaXZlZCBhbmQgZW1pdHRlZCkuXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGVtaXRCdWZmZXJlZCgpIHtcbiAgICAgICAgdGhpcy5yZWNlaXZlQnVmZmVyLmZvckVhY2goKGFyZ3MpID0+IHRoaXMuZW1pdEV2ZW50KGFyZ3MpKTtcbiAgICAgICAgdGhpcy5yZWNlaXZlQnVmZmVyID0gW107XG4gICAgICAgIHRoaXMuc2VuZEJ1ZmZlci5mb3JFYWNoKChwYWNrZXQpID0+IHRoaXMucGFja2V0KHBhY2tldCkpO1xuICAgICAgICB0aGlzLnNlbmRCdWZmZXIgPSBbXTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHVwb24gc2VydmVyIGRpc2Nvbm5lY3QuXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIG9uZGlzY29ubmVjdCgpIHtcbiAgICAgICAgZGVidWcoXCJzZXJ2ZXIgZGlzY29ubmVjdCAoJXMpXCIsIHRoaXMubnNwKTtcbiAgICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMub25jbG9zZShcImlvIHNlcnZlciBkaXNjb25uZWN0XCIpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgdXBvbiBmb3JjZWQgY2xpZW50L3NlcnZlciBzaWRlIGRpc2Nvbm5lY3Rpb25zLFxuICAgICAqIHRoaXMgbWV0aG9kIGVuc3VyZXMgdGhlIG1hbmFnZXIgc3RvcHMgdHJhY2tpbmcgdXMgYW5kXG4gICAgICogdGhhdCByZWNvbm5lY3Rpb25zIGRvbid0IGdldCB0cmlnZ2VyZWQgZm9yIHRoaXMuXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh0aGlzLnN1YnMpIHtcbiAgICAgICAgICAgIC8vIGNsZWFuIHN1YnNjcmlwdGlvbnMgdG8gYXZvaWQgcmVjb25uZWN0aW9uc1xuICAgICAgICAgICAgdGhpcy5zdWJzLmZvckVhY2goKHN1YkRlc3Ryb3kpID0+IHN1YkRlc3Ryb3koKSk7XG4gICAgICAgICAgICB0aGlzLnN1YnMgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pb1tcIl9kZXN0cm95XCJdKHRoaXMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEaXNjb25uZWN0cyB0aGUgc29ja2V0IG1hbnVhbGx5LlxuICAgICAqXG4gICAgICogQHJldHVybiBzZWxmXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIGRpc2Nvbm5lY3QoKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbm5lY3RlZCkge1xuICAgICAgICAgICAgZGVidWcoXCJwZXJmb3JtaW5nIGRpc2Nvbm5lY3QgKCVzKVwiLCB0aGlzLm5zcCk7XG4gICAgICAgICAgICB0aGlzLnBhY2tldCh7IHR5cGU6IHNvY2tldF9pb19wYXJzZXJfMS5QYWNrZXRUeXBlLkRJU0NPTk5FQ1QgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gcmVtb3ZlIHNvY2tldCBmcm9tIHBvb2xcbiAgICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgICAgIGlmICh0aGlzLmNvbm5lY3RlZCkge1xuICAgICAgICAgICAgLy8gZmlyZSBldmVudHNcbiAgICAgICAgICAgIHRoaXMub25jbG9zZShcImlvIGNsaWVudCBkaXNjb25uZWN0XCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBbGlhcyBmb3IgZGlzY29ubmVjdCgpXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHNlbGZcbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgY2xvc2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRpc2Nvbm5lY3QoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgY29tcHJlc3MgZmxhZy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBjb21wcmVzcyAtIGlmIGB0cnVlYCwgY29tcHJlc3NlcyB0aGUgc2VuZGluZyBkYXRhXG4gICAgICogQHJldHVybiBzZWxmXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIGNvbXByZXNzKGNvbXByZXNzKSB7XG4gICAgICAgIHRoaXMuZmxhZ3MuY29tcHJlc3MgPSBjb21wcmVzcztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgYSBtb2RpZmllciBmb3IgYSBzdWJzZXF1ZW50IGV2ZW50IGVtaXNzaW9uIHRoYXQgdGhlIGV2ZW50IG1lc3NhZ2Ugd2lsbCBiZSBkcm9wcGVkIHdoZW4gdGhpcyBzb2NrZXQgaXMgbm90XG4gICAgICogcmVhZHkgdG8gc2VuZCBtZXNzYWdlcy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHNlbGZcbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgZ2V0IHZvbGF0aWxlKCkge1xuICAgICAgICB0aGlzLmZsYWdzLnZvbGF0aWxlID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFkZHMgYSBsaXN0ZW5lciB0aGF0IHdpbGwgYmUgZmlyZWQgd2hlbiBhbnkgZXZlbnQgaXMgZW1pdHRlZC4gVGhlIGV2ZW50IG5hbWUgaXMgcGFzc2VkIGFzIHRoZSBmaXJzdCBhcmd1bWVudCB0byB0aGVcbiAgICAgKiBjYWxsYmFjay5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBsaXN0ZW5lclxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBvbkFueShsaXN0ZW5lcikge1xuICAgICAgICB0aGlzLl9hbnlMaXN0ZW5lcnMgPSB0aGlzLl9hbnlMaXN0ZW5lcnMgfHwgW107XG4gICAgICAgIHRoaXMuX2FueUxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFkZHMgYSBsaXN0ZW5lciB0aGF0IHdpbGwgYmUgZmlyZWQgd2hlbiBhbnkgZXZlbnQgaXMgZW1pdHRlZC4gVGhlIGV2ZW50IG5hbWUgaXMgcGFzc2VkIGFzIHRoZSBmaXJzdCBhcmd1bWVudCB0byB0aGVcbiAgICAgKiBjYWxsYmFjay4gVGhlIGxpc3RlbmVyIGlzIGFkZGVkIHRvIHRoZSBiZWdpbm5pbmcgb2YgdGhlIGxpc3RlbmVycyBhcnJheS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBsaXN0ZW5lclxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBwcmVwZW5kQW55KGxpc3RlbmVyKSB7XG4gICAgICAgIHRoaXMuX2FueUxpc3RlbmVycyA9IHRoaXMuX2FueUxpc3RlbmVycyB8fCBbXTtcbiAgICAgICAgdGhpcy5fYW55TGlzdGVuZXJzLnVuc2hpZnQobGlzdGVuZXIpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyB0aGUgbGlzdGVuZXIgdGhhdCB3aWxsIGJlIGZpcmVkIHdoZW4gYW55IGV2ZW50IGlzIGVtaXR0ZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbGlzdGVuZXJcbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgb2ZmQW55KGxpc3RlbmVyKSB7XG4gICAgICAgIGlmICghdGhpcy5fYW55TGlzdGVuZXJzKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICBpZiAobGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IGxpc3RlbmVycyA9IHRoaXMuX2FueUxpc3RlbmVycztcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGxpc3RlbmVyID09PSBsaXN0ZW5lcnNbaV0pIHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fYW55TGlzdGVuZXJzID0gW107XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gYXJyYXkgb2YgbGlzdGVuZXJzIHRoYXQgYXJlIGxpc3RlbmluZyBmb3IgYW55IGV2ZW50IHRoYXQgaXMgc3BlY2lmaWVkLiBUaGlzIGFycmF5IGNhbiBiZSBtYW5pcHVsYXRlZCxcbiAgICAgKiBlLmcuIHRvIHJlbW92ZSBsaXN0ZW5lcnMuXG4gICAgICpcbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgbGlzdGVuZXJzQW55KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYW55TGlzdGVuZXJzIHx8IFtdO1xuICAgIH1cbn1cbmV4cG9ydHMuU29ja2V0ID0gU29ja2V0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlN0cmljdEV2ZW50RW1pdHRlciA9IHZvaWQgMDtcbmNvbnN0IEVtaXR0ZXIgPSByZXF1aXJlKFwiY29tcG9uZW50LWVtaXR0ZXJcIik7XG4vKipcbiAqIFN0cmljdGx5IHR5cGVkIHZlcnNpb24gb2YgYW4gYEV2ZW50RW1pdHRlcmAuIEEgYFR5cGVkRXZlbnRFbWl0dGVyYCB0YWtlcyB0eXBlXG4gKiBwYXJhbWV0ZXJzIGZvciBtYXBwaW5ncyBvZiBldmVudCBuYW1lcyB0byBldmVudCBkYXRhIHR5cGVzLCBhbmQgc3RyaWN0bHlcbiAqIHR5cGVzIG1ldGhvZCBjYWxscyB0byB0aGUgYEV2ZW50RW1pdHRlcmAgYWNjb3JkaW5nIHRvIHRoZXNlIGV2ZW50IG1hcHMuXG4gKlxuICogQHR5cGVQYXJhbSBMaXN0ZW5FdmVudHMgLSBgRXZlbnRzTWFwYCBvZiB1c2VyLWRlZmluZWQgZXZlbnRzIHRoYXQgY2FuIGJlXG4gKiBsaXN0ZW5lZCB0byB3aXRoIGBvbmAgb3IgYG9uY2VgXG4gKiBAdHlwZVBhcmFtIEVtaXRFdmVudHMgLSBgRXZlbnRzTWFwYCBvZiB1c2VyLWRlZmluZWQgZXZlbnRzIHRoYXQgY2FuIGJlXG4gKiBlbWl0dGVkIHdpdGggYGVtaXRgXG4gKiBAdHlwZVBhcmFtIFJlc2VydmVkRXZlbnRzIC0gYEV2ZW50c01hcGAgb2YgcmVzZXJ2ZWQgZXZlbnRzLCB0aGF0IGNhbiBiZVxuICogZW1pdHRlZCBieSBzb2NrZXQuaW8gd2l0aCBgZW1pdFJlc2VydmVkYCwgYW5kIGNhbiBiZSBsaXN0ZW5lZCB0byB3aXRoXG4gKiBgbGlzdGVuYC5cbiAqL1xuY2xhc3MgU3RyaWN0RXZlbnRFbWl0dGVyIGV4dGVuZHMgRW1pdHRlciB7XG4gICAgLyoqXG4gICAgICogQWRkcyB0aGUgYGxpc3RlbmVyYCBmdW5jdGlvbiBhcyBhbiBldmVudCBsaXN0ZW5lciBmb3IgYGV2YC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBldiBOYW1lIG9mIHRoZSBldmVudFxuICAgICAqIEBwYXJhbSBsaXN0ZW5lciBDYWxsYmFjayBmdW5jdGlvblxuICAgICAqL1xuICAgIG9uKGV2LCBsaXN0ZW5lcikge1xuICAgICAgICBzdXBlci5vbihldiwgbGlzdGVuZXIpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkcyBhIG9uZS10aW1lIGBsaXN0ZW5lcmAgZnVuY3Rpb24gYXMgYW4gZXZlbnQgbGlzdGVuZXIgZm9yIGBldmAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZXYgTmFtZSBvZiB0aGUgZXZlbnRcbiAgICAgKiBAcGFyYW0gbGlzdGVuZXIgQ2FsbGJhY2sgZnVuY3Rpb25cbiAgICAgKi9cbiAgICBvbmNlKGV2LCBsaXN0ZW5lcikge1xuICAgICAgICBzdXBlci5vbmNlKGV2LCBsaXN0ZW5lcik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBFbWl0cyBhbiBldmVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBldiBOYW1lIG9mIHRoZSBldmVudFxuICAgICAqIEBwYXJhbSBhcmdzIFZhbHVlcyB0byBzZW5kIHRvIGxpc3RlbmVycyBvZiB0aGlzIGV2ZW50XG4gICAgICovXG4gICAgZW1pdChldiwgLi4uYXJncykge1xuICAgICAgICBzdXBlci5lbWl0KGV2LCAuLi5hcmdzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEVtaXRzIGEgcmVzZXJ2ZWQgZXZlbnQuXG4gICAgICpcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBgcHJvdGVjdGVkYCwgc28gdGhhdCBvbmx5IGEgY2xhc3MgZXh0ZW5kaW5nXG4gICAgICogYFN0cmljdEV2ZW50RW1pdHRlcmAgY2FuIGVtaXQgaXRzIG93biByZXNlcnZlZCBldmVudHMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZXYgUmVzZXJ2ZWQgZXZlbnQgbmFtZVxuICAgICAqIEBwYXJhbSBhcmdzIEFyZ3VtZW50cyB0byBlbWl0IGFsb25nIHdpdGggdGhlIGV2ZW50XG4gICAgICovXG4gICAgZW1pdFJlc2VydmVkKGV2LCAuLi5hcmdzKSB7XG4gICAgICAgIHN1cGVyLmVtaXQoZXYsIC4uLmFyZ3MpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbGlzdGVuZXJzIGxpc3RlbmluZyB0byBhbiBldmVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBldmVudCBFdmVudCBuYW1lXG4gICAgICogQHJldHVybnMgQXJyYXkgb2YgbGlzdGVuZXJzIHN1YnNjcmliZWQgdG8gYGV2ZW50YFxuICAgICAqL1xuICAgIGxpc3RlbmVycyhldmVudCkge1xuICAgICAgICByZXR1cm4gc3VwZXIubGlzdGVuZXJzKGV2ZW50KTtcbiAgICB9XG59XG5leHBvcnRzLlN0cmljdEV2ZW50RW1pdHRlciA9IFN0cmljdEV2ZW50RW1pdHRlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy51cmwgPSB2b2lkIDA7XG5jb25zdCBwYXJzZXVyaSA9IHJlcXVpcmUoXCJwYXJzZXVyaVwiKTtcbmNvbnN0IGRlYnVnID0gcmVxdWlyZShcImRlYnVnXCIpKFwic29ja2V0LmlvLWNsaWVudDp1cmxcIik7XG4vKipcbiAqIFVSTCBwYXJzZXIuXG4gKlxuICogQHBhcmFtIHVyaSAtIHVybFxuICogQHBhcmFtIHBhdGggLSB0aGUgcmVxdWVzdCBwYXRoIG9mIHRoZSBjb25uZWN0aW9uXG4gKiBAcGFyYW0gbG9jIC0gQW4gb2JqZWN0IG1lYW50IHRvIG1pbWljIHdpbmRvdy5sb2NhdGlvbi5cbiAqICAgICAgICBEZWZhdWx0cyB0byB3aW5kb3cubG9jYXRpb24uXG4gKiBAcHVibGljXG4gKi9cbmZ1bmN0aW9uIHVybCh1cmksIHBhdGggPSBcIlwiLCBsb2MpIHtcbiAgICBsZXQgb2JqID0gdXJpO1xuICAgIC8vIGRlZmF1bHQgdG8gd2luZG93LmxvY2F0aW9uXG4gICAgbG9jID0gbG9jIHx8ICh0eXBlb2YgbG9jYXRpb24gIT09IFwidW5kZWZpbmVkXCIgJiYgbG9jYXRpb24pO1xuICAgIGlmIChudWxsID09IHVyaSlcbiAgICAgICAgdXJpID0gbG9jLnByb3RvY29sICsgXCIvL1wiICsgbG9jLmhvc3Q7XG4gICAgLy8gcmVsYXRpdmUgcGF0aCBzdXBwb3J0XG4gICAgaWYgKHR5cGVvZiB1cmkgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgaWYgKFwiL1wiID09PSB1cmkuY2hhckF0KDApKSB7XG4gICAgICAgICAgICBpZiAoXCIvXCIgPT09IHVyaS5jaGFyQXQoMSkpIHtcbiAgICAgICAgICAgICAgICB1cmkgPSBsb2MucHJvdG9jb2wgKyB1cmk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB1cmkgPSBsb2MuaG9zdCArIHVyaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIS9eKGh0dHBzP3x3c3M/KTpcXC9cXC8vLnRlc3QodXJpKSkge1xuICAgICAgICAgICAgZGVidWcoXCJwcm90b2NvbC1sZXNzIHVybCAlc1wiLCB1cmkpO1xuICAgICAgICAgICAgaWYgKFwidW5kZWZpbmVkXCIgIT09IHR5cGVvZiBsb2MpIHtcbiAgICAgICAgICAgICAgICB1cmkgPSBsb2MucHJvdG9jb2wgKyBcIi8vXCIgKyB1cmk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB1cmkgPSBcImh0dHBzOi8vXCIgKyB1cmk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gcGFyc2VcbiAgICAgICAgZGVidWcoXCJwYXJzZSAlc1wiLCB1cmkpO1xuICAgICAgICBvYmogPSBwYXJzZXVyaSh1cmkpO1xuICAgIH1cbiAgICAvLyBtYWtlIHN1cmUgd2UgdHJlYXQgYGxvY2FsaG9zdDo4MGAgYW5kIGBsb2NhbGhvc3RgIGVxdWFsbHlcbiAgICBpZiAoIW9iai5wb3J0KSB7XG4gICAgICAgIGlmICgvXihodHRwfHdzKSQvLnRlc3Qob2JqLnByb3RvY29sKSkge1xuICAgICAgICAgICAgb2JqLnBvcnQgPSBcIjgwXCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoL14oaHR0cHx3cylzJC8udGVzdChvYmoucHJvdG9jb2wpKSB7XG4gICAgICAgICAgICBvYmoucG9ydCA9IFwiNDQzXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgb2JqLnBhdGggPSBvYmoucGF0aCB8fCBcIi9cIjtcbiAgICBjb25zdCBpcHY2ID0gb2JqLmhvc3QuaW5kZXhPZihcIjpcIikgIT09IC0xO1xuICAgIGNvbnN0IGhvc3QgPSBpcHY2ID8gXCJbXCIgKyBvYmouaG9zdCArIFwiXVwiIDogb2JqLmhvc3Q7XG4gICAgLy8gZGVmaW5lIHVuaXF1ZSBpZFxuICAgIG9iai5pZCA9IG9iai5wcm90b2NvbCArIFwiOi8vXCIgKyBob3N0ICsgXCI6XCIgKyBvYmoucG9ydCArIHBhdGg7XG4gICAgLy8gZGVmaW5lIGhyZWZcbiAgICBvYmouaHJlZiA9XG4gICAgICAgIG9iai5wcm90b2NvbCArXG4gICAgICAgICAgICBcIjovL1wiICtcbiAgICAgICAgICAgIGhvc3QgK1xuICAgICAgICAgICAgKGxvYyAmJiBsb2MucG9ydCA9PT0gb2JqLnBvcnQgPyBcIlwiIDogXCI6XCIgKyBvYmoucG9ydCk7XG4gICAgcmV0dXJuIG9iajtcbn1cbmV4cG9ydHMudXJsID0gdXJsO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnJlY29uc3RydWN0UGFja2V0ID0gZXhwb3J0cy5kZWNvbnN0cnVjdFBhY2tldCA9IHZvaWQgMDtcbmNvbnN0IGlzX2JpbmFyeV8xID0gcmVxdWlyZShcIi4vaXMtYmluYXJ5XCIpO1xuLyoqXG4gKiBSZXBsYWNlcyBldmVyeSBCdWZmZXIgfCBBcnJheUJ1ZmZlciB8IEJsb2IgfCBGaWxlIGluIHBhY2tldCB3aXRoIGEgbnVtYmVyZWQgcGxhY2Vob2xkZXIuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHBhY2tldCAtIHNvY2tldC5pbyBldmVudCBwYWNrZXRcbiAqIEByZXR1cm4ge09iamVjdH0gd2l0aCBkZWNvbnN0cnVjdGVkIHBhY2tldCBhbmQgbGlzdCBvZiBidWZmZXJzXG4gKiBAcHVibGljXG4gKi9cbmZ1bmN0aW9uIGRlY29uc3RydWN0UGFja2V0KHBhY2tldCkge1xuICAgIGNvbnN0IGJ1ZmZlcnMgPSBbXTtcbiAgICBjb25zdCBwYWNrZXREYXRhID0gcGFja2V0LmRhdGE7XG4gICAgY29uc3QgcGFjayA9IHBhY2tldDtcbiAgICBwYWNrLmRhdGEgPSBfZGVjb25zdHJ1Y3RQYWNrZXQocGFja2V0RGF0YSwgYnVmZmVycyk7XG4gICAgcGFjay5hdHRhY2htZW50cyA9IGJ1ZmZlcnMubGVuZ3RoOyAvLyBudW1iZXIgb2YgYmluYXJ5ICdhdHRhY2htZW50cydcbiAgICByZXR1cm4geyBwYWNrZXQ6IHBhY2ssIGJ1ZmZlcnM6IGJ1ZmZlcnMgfTtcbn1cbmV4cG9ydHMuZGVjb25zdHJ1Y3RQYWNrZXQgPSBkZWNvbnN0cnVjdFBhY2tldDtcbmZ1bmN0aW9uIF9kZWNvbnN0cnVjdFBhY2tldChkYXRhLCBidWZmZXJzKSB7XG4gICAgaWYgKCFkYXRhKVxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICBpZiAoaXNfYmluYXJ5XzEuaXNCaW5hcnkoZGF0YSkpIHtcbiAgICAgICAgY29uc3QgcGxhY2Vob2xkZXIgPSB7IF9wbGFjZWhvbGRlcjogdHJ1ZSwgbnVtOiBidWZmZXJzLmxlbmd0aCB9O1xuICAgICAgICBidWZmZXJzLnB1c2goZGF0YSk7XG4gICAgICAgIHJldHVybiBwbGFjZWhvbGRlcjtcbiAgICB9XG4gICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgICAgICBjb25zdCBuZXdEYXRhID0gbmV3IEFycmF5KGRhdGEubGVuZ3RoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBuZXdEYXRhW2ldID0gX2RlY29uc3RydWN0UGFja2V0KGRhdGFbaV0sIGJ1ZmZlcnMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdEYXRhO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgZGF0YSA9PT0gXCJvYmplY3RcIiAmJiAhKGRhdGEgaW5zdGFuY2VvZiBEYXRlKSkge1xuICAgICAgICBjb25zdCBuZXdEYXRhID0ge307XG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIGRhdGEpIHtcbiAgICAgICAgICAgIGlmIChkYXRhLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBuZXdEYXRhW2tleV0gPSBfZGVjb25zdHJ1Y3RQYWNrZXQoZGF0YVtrZXldLCBidWZmZXJzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3RGF0YTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG59XG4vKipcbiAqIFJlY29uc3RydWN0cyBhIGJpbmFyeSBwYWNrZXQgZnJvbSBpdHMgcGxhY2Vob2xkZXIgcGFja2V0IGFuZCBidWZmZXJzXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHBhY2tldCAtIGV2ZW50IHBhY2tldCB3aXRoIHBsYWNlaG9sZGVyc1xuICogQHBhcmFtIHtBcnJheX0gYnVmZmVycyAtIGJpbmFyeSBidWZmZXJzIHRvIHB1dCBpbiBwbGFjZWhvbGRlciBwb3NpdGlvbnNcbiAqIEByZXR1cm4ge09iamVjdH0gcmVjb25zdHJ1Y3RlZCBwYWNrZXRcbiAqIEBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gcmVjb25zdHJ1Y3RQYWNrZXQocGFja2V0LCBidWZmZXJzKSB7XG4gICAgcGFja2V0LmRhdGEgPSBfcmVjb25zdHJ1Y3RQYWNrZXQocGFja2V0LmRhdGEsIGJ1ZmZlcnMpO1xuICAgIHBhY2tldC5hdHRhY2htZW50cyA9IHVuZGVmaW5lZDsgLy8gbm8gbG9uZ2VyIHVzZWZ1bFxuICAgIHJldHVybiBwYWNrZXQ7XG59XG5leHBvcnRzLnJlY29uc3RydWN0UGFja2V0ID0gcmVjb25zdHJ1Y3RQYWNrZXQ7XG5mdW5jdGlvbiBfcmVjb25zdHJ1Y3RQYWNrZXQoZGF0YSwgYnVmZmVycykge1xuICAgIGlmICghZGF0YSlcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgaWYgKGRhdGEgJiYgZGF0YS5fcGxhY2Vob2xkZXIpIHtcbiAgICAgICAgcmV0dXJuIGJ1ZmZlcnNbZGF0YS5udW1dOyAvLyBhcHByb3ByaWF0ZSBidWZmZXIgKHNob3VsZCBiZSBuYXR1cmFsIG9yZGVyIGFueXdheSlcbiAgICB9XG4gICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGRhdGFbaV0gPSBfcmVjb25zdHJ1Y3RQYWNrZXQoZGF0YVtpXSwgYnVmZmVycyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIGRhdGEgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gZGF0YSkge1xuICAgICAgICAgICAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIGRhdGFba2V5XSA9IF9yZWNvbnN0cnVjdFBhY2tldChkYXRhW2tleV0sIGJ1ZmZlcnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkRlY29kZXIgPSBleHBvcnRzLkVuY29kZXIgPSBleHBvcnRzLlBhY2tldFR5cGUgPSBleHBvcnRzLnByb3RvY29sID0gdm9pZCAwO1xuY29uc3QgRW1pdHRlciA9IHJlcXVpcmUoXCJjb21wb25lbnQtZW1pdHRlclwiKTtcbmNvbnN0IGJpbmFyeV8xID0gcmVxdWlyZShcIi4vYmluYXJ5XCIpO1xuY29uc3QgaXNfYmluYXJ5XzEgPSByZXF1aXJlKFwiLi9pcy1iaW5hcnlcIik7XG5jb25zdCBkZWJ1ZyA9IHJlcXVpcmUoXCJkZWJ1Z1wiKShcInNvY2tldC5pby1wYXJzZXJcIik7XG4vKipcbiAqIFByb3RvY29sIHZlcnNpb24uXG4gKlxuICogQHB1YmxpY1xuICovXG5leHBvcnRzLnByb3RvY29sID0gNTtcbnZhciBQYWNrZXRUeXBlO1xuKGZ1bmN0aW9uIChQYWNrZXRUeXBlKSB7XG4gICAgUGFja2V0VHlwZVtQYWNrZXRUeXBlW1wiQ09OTkVDVFwiXSA9IDBdID0gXCJDT05ORUNUXCI7XG4gICAgUGFja2V0VHlwZVtQYWNrZXRUeXBlW1wiRElTQ09OTkVDVFwiXSA9IDFdID0gXCJESVNDT05ORUNUXCI7XG4gICAgUGFja2V0VHlwZVtQYWNrZXRUeXBlW1wiRVZFTlRcIl0gPSAyXSA9IFwiRVZFTlRcIjtcbiAgICBQYWNrZXRUeXBlW1BhY2tldFR5cGVbXCJBQ0tcIl0gPSAzXSA9IFwiQUNLXCI7XG4gICAgUGFja2V0VHlwZVtQYWNrZXRUeXBlW1wiQ09OTkVDVF9FUlJPUlwiXSA9IDRdID0gXCJDT05ORUNUX0VSUk9SXCI7XG4gICAgUGFja2V0VHlwZVtQYWNrZXRUeXBlW1wiQklOQVJZX0VWRU5UXCJdID0gNV0gPSBcIkJJTkFSWV9FVkVOVFwiO1xuICAgIFBhY2tldFR5cGVbUGFja2V0VHlwZVtcIkJJTkFSWV9BQ0tcIl0gPSA2XSA9IFwiQklOQVJZX0FDS1wiO1xufSkoUGFja2V0VHlwZSA9IGV4cG9ydHMuUGFja2V0VHlwZSB8fCAoZXhwb3J0cy5QYWNrZXRUeXBlID0ge30pKTtcbi8qKlxuICogQSBzb2NrZXQuaW8gRW5jb2RlciBpbnN0YW5jZVxuICovXG5jbGFzcyBFbmNvZGVyIHtcbiAgICAvKipcbiAgICAgKiBFbmNvZGUgYSBwYWNrZXQgYXMgYSBzaW5nbGUgc3RyaW5nIGlmIG5vbi1iaW5hcnksIG9yIGFzIGFcbiAgICAgKiBidWZmZXIgc2VxdWVuY2UsIGRlcGVuZGluZyBvbiBwYWNrZXQgdHlwZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvYmogLSBwYWNrZXQgb2JqZWN0XG4gICAgICovXG4gICAgZW5jb2RlKG9iaikge1xuICAgICAgICBkZWJ1ZyhcImVuY29kaW5nIHBhY2tldCAlalwiLCBvYmopO1xuICAgICAgICBpZiAob2JqLnR5cGUgPT09IFBhY2tldFR5cGUuRVZFTlQgfHwgb2JqLnR5cGUgPT09IFBhY2tldFR5cGUuQUNLKSB7XG4gICAgICAgICAgICBpZiAoaXNfYmluYXJ5XzEuaGFzQmluYXJ5KG9iaikpIHtcbiAgICAgICAgICAgICAgICBvYmoudHlwZSA9XG4gICAgICAgICAgICAgICAgICAgIG9iai50eXBlID09PSBQYWNrZXRUeXBlLkVWRU5UXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFBhY2tldFR5cGUuQklOQVJZX0VWRU5UXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFBhY2tldFR5cGUuQklOQVJZX0FDSztcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5lbmNvZGVBc0JpbmFyeShvYmopO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbdGhpcy5lbmNvZGVBc1N0cmluZyhvYmopXTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRW5jb2RlIHBhY2tldCBhcyBzdHJpbmcuXG4gICAgICovXG4gICAgZW5jb2RlQXNTdHJpbmcob2JqKSB7XG4gICAgICAgIC8vIGZpcnN0IGlzIHR5cGVcbiAgICAgICAgbGV0IHN0ciA9IFwiXCIgKyBvYmoudHlwZTtcbiAgICAgICAgLy8gYXR0YWNobWVudHMgaWYgd2UgaGF2ZSB0aGVtXG4gICAgICAgIGlmIChvYmoudHlwZSA9PT0gUGFja2V0VHlwZS5CSU5BUllfRVZFTlQgfHxcbiAgICAgICAgICAgIG9iai50eXBlID09PSBQYWNrZXRUeXBlLkJJTkFSWV9BQ0spIHtcbiAgICAgICAgICAgIHN0ciArPSBvYmouYXR0YWNobWVudHMgKyBcIi1cIjtcbiAgICAgICAgfVxuICAgICAgICAvLyBpZiB3ZSBoYXZlIGEgbmFtZXNwYWNlIG90aGVyIHRoYW4gYC9gXG4gICAgICAgIC8vIHdlIGFwcGVuZCBpdCBmb2xsb3dlZCBieSBhIGNvbW1hIGAsYFxuICAgICAgICBpZiAob2JqLm5zcCAmJiBcIi9cIiAhPT0gb2JqLm5zcCkge1xuICAgICAgICAgICAgc3RyICs9IG9iai5uc3AgKyBcIixcIjtcbiAgICAgICAgfVxuICAgICAgICAvLyBpbW1lZGlhdGVseSBmb2xsb3dlZCBieSB0aGUgaWRcbiAgICAgICAgaWYgKG51bGwgIT0gb2JqLmlkKSB7XG4gICAgICAgICAgICBzdHIgKz0gb2JqLmlkO1xuICAgICAgICB9XG4gICAgICAgIC8vIGpzb24gZGF0YVxuICAgICAgICBpZiAobnVsbCAhPSBvYmouZGF0YSkge1xuICAgICAgICAgICAgc3RyICs9IEpTT04uc3RyaW5naWZ5KG9iai5kYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBkZWJ1ZyhcImVuY29kZWQgJWogYXMgJXNcIiwgb2JqLCBzdHIpO1xuICAgICAgICByZXR1cm4gc3RyO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBFbmNvZGUgcGFja2V0IGFzICdidWZmZXIgc2VxdWVuY2UnIGJ5IHJlbW92aW5nIGJsb2JzLCBhbmRcbiAgICAgKiBkZWNvbnN0cnVjdGluZyBwYWNrZXQgaW50byBvYmplY3Qgd2l0aCBwbGFjZWhvbGRlcnMgYW5kXG4gICAgICogYSBsaXN0IG9mIGJ1ZmZlcnMuXG4gICAgICovXG4gICAgZW5jb2RlQXNCaW5hcnkob2JqKSB7XG4gICAgICAgIGNvbnN0IGRlY29uc3RydWN0aW9uID0gYmluYXJ5XzEuZGVjb25zdHJ1Y3RQYWNrZXQob2JqKTtcbiAgICAgICAgY29uc3QgcGFjayA9IHRoaXMuZW5jb2RlQXNTdHJpbmcoZGVjb25zdHJ1Y3Rpb24ucGFja2V0KTtcbiAgICAgICAgY29uc3QgYnVmZmVycyA9IGRlY29uc3RydWN0aW9uLmJ1ZmZlcnM7XG4gICAgICAgIGJ1ZmZlcnMudW5zaGlmdChwYWNrKTsgLy8gYWRkIHBhY2tldCBpbmZvIHRvIGJlZ2lubmluZyBvZiBkYXRhIGxpc3RcbiAgICAgICAgcmV0dXJuIGJ1ZmZlcnM7IC8vIHdyaXRlIGFsbCB0aGUgYnVmZmVyc1xuICAgIH1cbn1cbmV4cG9ydHMuRW5jb2RlciA9IEVuY29kZXI7XG4vKipcbiAqIEEgc29ja2V0LmlvIERlY29kZXIgaW5zdGFuY2VcbiAqXG4gKiBAcmV0dXJuIHtPYmplY3R9IGRlY29kZXJcbiAqL1xuY2xhc3MgRGVjb2RlciBleHRlbmRzIEVtaXR0ZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEZWNvZGVzIGFuIGVuY29kZWQgcGFja2V0IHN0cmluZyBpbnRvIHBhY2tldCBKU09OLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9iaiAtIGVuY29kZWQgcGFja2V0XG4gICAgICovXG4gICAgYWRkKG9iaikge1xuICAgICAgICBsZXQgcGFja2V0O1xuICAgICAgICBpZiAodHlwZW9mIG9iaiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgcGFja2V0ID0gdGhpcy5kZWNvZGVTdHJpbmcob2JqKTtcbiAgICAgICAgICAgIGlmIChwYWNrZXQudHlwZSA9PT0gUGFja2V0VHlwZS5CSU5BUllfRVZFTlQgfHxcbiAgICAgICAgICAgICAgICBwYWNrZXQudHlwZSA9PT0gUGFja2V0VHlwZS5CSU5BUllfQUNLKSB7XG4gICAgICAgICAgICAgICAgLy8gYmluYXJ5IHBhY2tldCdzIGpzb25cbiAgICAgICAgICAgICAgICB0aGlzLnJlY29uc3RydWN0b3IgPSBuZXcgQmluYXJ5UmVjb25zdHJ1Y3RvcihwYWNrZXQpO1xuICAgICAgICAgICAgICAgIC8vIG5vIGF0dGFjaG1lbnRzLCBsYWJlbGVkIGJpbmFyeSBidXQgbm8gYmluYXJ5IGRhdGEgdG8gZm9sbG93XG4gICAgICAgICAgICAgICAgaWYgKHBhY2tldC5hdHRhY2htZW50cyA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBzdXBlci5lbWl0KFwiZGVjb2RlZFwiLCBwYWNrZXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIG5vbi1iaW5hcnkgZnVsbCBwYWNrZXRcbiAgICAgICAgICAgICAgICBzdXBlci5lbWl0KFwiZGVjb2RlZFwiLCBwYWNrZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzX2JpbmFyeV8xLmlzQmluYXJ5KG9iaikgfHwgb2JqLmJhc2U2NCkge1xuICAgICAgICAgICAgLy8gcmF3IGJpbmFyeSBkYXRhXG4gICAgICAgICAgICBpZiAoIXRoaXMucmVjb25zdHJ1Y3Rvcikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImdvdCBiaW5hcnkgZGF0YSB3aGVuIG5vdCByZWNvbnN0cnVjdGluZyBhIHBhY2tldFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhY2tldCA9IHRoaXMucmVjb25zdHJ1Y3Rvci50YWtlQmluYXJ5RGF0YShvYmopO1xuICAgICAgICAgICAgICAgIGlmIChwYWNrZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVjZWl2ZWQgZmluYWwgYnVmZmVyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVjb25zdHJ1Y3RvciA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHN1cGVyLmVtaXQoXCJkZWNvZGVkXCIsIHBhY2tldCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5rbm93biB0eXBlOiBcIiArIG9iaik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogRGVjb2RlIGEgcGFja2V0IFN0cmluZyAoSlNPTiBkYXRhKVxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICAgICAqIEByZXR1cm4ge09iamVjdH0gcGFja2V0XG4gICAgICovXG4gICAgZGVjb2RlU3RyaW5nKHN0cikge1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIC8vIGxvb2sgdXAgdHlwZVxuICAgICAgICBjb25zdCBwID0ge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyKHN0ci5jaGFyQXQoMCkpLFxuICAgICAgICB9O1xuICAgICAgICBpZiAoUGFja2V0VHlwZVtwLnR5cGVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInVua25vd24gcGFja2V0IHR5cGUgXCIgKyBwLnR5cGUpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGxvb2sgdXAgYXR0YWNobWVudHMgaWYgdHlwZSBiaW5hcnlcbiAgICAgICAgaWYgKHAudHlwZSA9PT0gUGFja2V0VHlwZS5CSU5BUllfRVZFTlQgfHxcbiAgICAgICAgICAgIHAudHlwZSA9PT0gUGFja2V0VHlwZS5CSU5BUllfQUNLKSB7XG4gICAgICAgICAgICBjb25zdCBzdGFydCA9IGkgKyAxO1xuICAgICAgICAgICAgd2hpbGUgKHN0ci5jaGFyQXQoKytpKSAhPT0gXCItXCIgJiYgaSAhPSBzdHIubGVuZ3RoKSB7IH1cbiAgICAgICAgICAgIGNvbnN0IGJ1ZiA9IHN0ci5zdWJzdHJpbmcoc3RhcnQsIGkpO1xuICAgICAgICAgICAgaWYgKGJ1ZiAhPSBOdW1iZXIoYnVmKSB8fCBzdHIuY2hhckF0KGkpICE9PSBcIi1cIikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIklsbGVnYWwgYXR0YWNobWVudHNcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwLmF0dGFjaG1lbnRzID0gTnVtYmVyKGJ1Zik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gbG9vayB1cCBuYW1lc3BhY2UgKGlmIGFueSlcbiAgICAgICAgaWYgKFwiL1wiID09PSBzdHIuY2hhckF0KGkgKyAxKSkge1xuICAgICAgICAgICAgY29uc3Qgc3RhcnQgPSBpICsgMTtcbiAgICAgICAgICAgIHdoaWxlICgrK2kpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjID0gc3RyLmNoYXJBdChpKTtcbiAgICAgICAgICAgICAgICBpZiAoXCIsXCIgPT09IGMpXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGlmIChpID09PSBzdHIubGVuZ3RoKVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHAubnNwID0gc3RyLnN1YnN0cmluZyhzdGFydCwgaSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwLm5zcCA9IFwiL1wiO1xuICAgICAgICB9XG4gICAgICAgIC8vIGxvb2sgdXAgaWRcbiAgICAgICAgY29uc3QgbmV4dCA9IHN0ci5jaGFyQXQoaSArIDEpO1xuICAgICAgICBpZiAoXCJcIiAhPT0gbmV4dCAmJiBOdW1iZXIobmV4dCkgPT0gbmV4dCkge1xuICAgICAgICAgICAgY29uc3Qgc3RhcnQgPSBpICsgMTtcbiAgICAgICAgICAgIHdoaWxlICgrK2kpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjID0gc3RyLmNoYXJBdChpKTtcbiAgICAgICAgICAgICAgICBpZiAobnVsbCA9PSBjIHx8IE51bWJlcihjKSAhPSBjKSB7XG4gICAgICAgICAgICAgICAgICAgIC0taTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChpID09PSBzdHIubGVuZ3RoKVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHAuaWQgPSBOdW1iZXIoc3RyLnN1YnN0cmluZyhzdGFydCwgaSArIDEpKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBsb29rIHVwIGpzb24gZGF0YVxuICAgICAgICBpZiAoc3RyLmNoYXJBdCgrK2kpKSB7XG4gICAgICAgICAgICBjb25zdCBwYXlsb2FkID0gdHJ5UGFyc2Uoc3RyLnN1YnN0cihpKSk7XG4gICAgICAgICAgICBpZiAoRGVjb2Rlci5pc1BheWxvYWRWYWxpZChwLnR5cGUsIHBheWxvYWQpKSB7XG4gICAgICAgICAgICAgICAgcC5kYXRhID0gcGF5bG9hZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImludmFsaWQgcGF5bG9hZFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBkZWJ1ZyhcImRlY29kZWQgJXMgYXMgJWpcIiwgc3RyLCBwKTtcbiAgICAgICAgcmV0dXJuIHA7XG4gICAgfVxuICAgIHN0YXRpYyBpc1BheWxvYWRWYWxpZCh0eXBlLCBwYXlsb2FkKSB7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSBQYWNrZXRUeXBlLkNPTk5FQ1Q6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiBwYXlsb2FkID09PSBcIm9iamVjdFwiO1xuICAgICAgICAgICAgY2FzZSBQYWNrZXRUeXBlLkRJU0NPTk5FQ1Q6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBheWxvYWQgPT09IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGNhc2UgUGFja2V0VHlwZS5DT05ORUNUX0VSUk9SOlxuICAgICAgICAgICAgICAgIHJldHVybiB0eXBlb2YgcGF5bG9hZCA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgcGF5bG9hZCA9PT0gXCJvYmplY3RcIjtcbiAgICAgICAgICAgIGNhc2UgUGFja2V0VHlwZS5FVkVOVDpcbiAgICAgICAgICAgIGNhc2UgUGFja2V0VHlwZS5CSU5BUllfRVZFTlQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkocGF5bG9hZCkgJiYgcGF5bG9hZC5sZW5ndGggPiAwO1xuICAgICAgICAgICAgY2FzZSBQYWNrZXRUeXBlLkFDSzpcbiAgICAgICAgICAgIGNhc2UgUGFja2V0VHlwZS5CSU5BUllfQUNLOlxuICAgICAgICAgICAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KHBheWxvYWQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERlYWxsb2NhdGVzIGEgcGFyc2VyJ3MgcmVzb3VyY2VzXG4gICAgICovXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMucmVjb25zdHJ1Y3Rvcikge1xuICAgICAgICAgICAgdGhpcy5yZWNvbnN0cnVjdG9yLmZpbmlzaGVkUmVjb25zdHJ1Y3Rpb24oKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuRGVjb2RlciA9IERlY29kZXI7XG5mdW5jdGlvbiB0cnlQYXJzZShzdHIpIHtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShzdHIpO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuLyoqXG4gKiBBIG1hbmFnZXIgb2YgYSBiaW5hcnkgZXZlbnQncyAnYnVmZmVyIHNlcXVlbmNlJy4gU2hvdWxkXG4gKiBiZSBjb25zdHJ1Y3RlZCB3aGVuZXZlciBhIHBhY2tldCBvZiB0eXBlIEJJTkFSWV9FVkVOVCBpc1xuICogZGVjb2RlZC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcGFja2V0XG4gKiBAcmV0dXJuIHtCaW5hcnlSZWNvbnN0cnVjdG9yfSBpbml0aWFsaXplZCByZWNvbnN0cnVjdG9yXG4gKi9cbmNsYXNzIEJpbmFyeVJlY29uc3RydWN0b3Ige1xuICAgIGNvbnN0cnVjdG9yKHBhY2tldCkge1xuICAgICAgICB0aGlzLnBhY2tldCA9IHBhY2tldDtcbiAgICAgICAgdGhpcy5idWZmZXJzID0gW107XG4gICAgICAgIHRoaXMucmVjb25QYWNrID0gcGFja2V0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBNZXRob2QgdG8gYmUgY2FsbGVkIHdoZW4gYmluYXJ5IGRhdGEgcmVjZWl2ZWQgZnJvbSBjb25uZWN0aW9uXG4gICAgICogYWZ0ZXIgYSBCSU5BUllfRVZFTlQgcGFja2V0LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtCdWZmZXIgfCBBcnJheUJ1ZmZlcn0gYmluRGF0YSAtIHRoZSByYXcgYmluYXJ5IGRhdGEgcmVjZWl2ZWRcbiAgICAgKiBAcmV0dXJuIHtudWxsIHwgT2JqZWN0fSByZXR1cm5zIG51bGwgaWYgbW9yZSBiaW5hcnkgZGF0YSBpcyBleHBlY3RlZCBvclxuICAgICAqICAgYSByZWNvbnN0cnVjdGVkIHBhY2tldCBvYmplY3QgaWYgYWxsIGJ1ZmZlcnMgaGF2ZSBiZWVuIHJlY2VpdmVkLlxuICAgICAqL1xuICAgIHRha2VCaW5hcnlEYXRhKGJpbkRhdGEpIHtcbiAgICAgICAgdGhpcy5idWZmZXJzLnB1c2goYmluRGF0YSk7XG4gICAgICAgIGlmICh0aGlzLmJ1ZmZlcnMubGVuZ3RoID09PSB0aGlzLnJlY29uUGFjay5hdHRhY2htZW50cykge1xuICAgICAgICAgICAgLy8gZG9uZSB3aXRoIGJ1ZmZlciBsaXN0XG4gICAgICAgICAgICBjb25zdCBwYWNrZXQgPSBiaW5hcnlfMS5yZWNvbnN0cnVjdFBhY2tldCh0aGlzLnJlY29uUGFjaywgdGhpcy5idWZmZXJzKTtcbiAgICAgICAgICAgIHRoaXMuZmluaXNoZWRSZWNvbnN0cnVjdGlvbigpO1xuICAgICAgICAgICAgcmV0dXJuIHBhY2tldDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2xlYW5zIHVwIGJpbmFyeSBwYWNrZXQgcmVjb25zdHJ1Y3Rpb24gdmFyaWFibGVzLlxuICAgICAqL1xuICAgIGZpbmlzaGVkUmVjb25zdHJ1Y3Rpb24oKSB7XG4gICAgICAgIHRoaXMucmVjb25QYWNrID0gbnVsbDtcbiAgICAgICAgdGhpcy5idWZmZXJzID0gW107XG4gICAgfVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmhhc0JpbmFyeSA9IGV4cG9ydHMuaXNCaW5hcnkgPSB2b2lkIDA7XG5jb25zdCB3aXRoTmF0aXZlQXJyYXlCdWZmZXIgPSB0eXBlb2YgQXJyYXlCdWZmZXIgPT09IFwiZnVuY3Rpb25cIjtcbmNvbnN0IGlzVmlldyA9IChvYmopID0+IHtcbiAgICByZXR1cm4gdHlwZW9mIEFycmF5QnVmZmVyLmlzVmlldyA9PT0gXCJmdW5jdGlvblwiXG4gICAgICAgID8gQXJyYXlCdWZmZXIuaXNWaWV3KG9iailcbiAgICAgICAgOiBvYmouYnVmZmVyIGluc3RhbmNlb2YgQXJyYXlCdWZmZXI7XG59O1xuY29uc3QgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuY29uc3Qgd2l0aE5hdGl2ZUJsb2IgPSB0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiIHx8XG4gICAgKHR5cGVvZiBCbG9iICE9PSBcInVuZGVmaW5lZFwiICYmXG4gICAgICAgIHRvU3RyaW5nLmNhbGwoQmxvYikgPT09IFwiW29iamVjdCBCbG9iQ29uc3RydWN0b3JdXCIpO1xuY29uc3Qgd2l0aE5hdGl2ZUZpbGUgPSB0eXBlb2YgRmlsZSA9PT0gXCJmdW5jdGlvblwiIHx8XG4gICAgKHR5cGVvZiBGaWxlICE9PSBcInVuZGVmaW5lZFwiICYmXG4gICAgICAgIHRvU3RyaW5nLmNhbGwoRmlsZSkgPT09IFwiW29iamVjdCBGaWxlQ29uc3RydWN0b3JdXCIpO1xuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgb2JqIGlzIGEgQnVmZmVyLCBhbiBBcnJheUJ1ZmZlciwgYSBCbG9iIG9yIGEgRmlsZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBpc0JpbmFyeShvYmopIHtcbiAgICByZXR1cm4gKCh3aXRoTmF0aXZlQXJyYXlCdWZmZXIgJiYgKG9iaiBpbnN0YW5jZW9mIEFycmF5QnVmZmVyIHx8IGlzVmlldyhvYmopKSkgfHxcbiAgICAgICAgKHdpdGhOYXRpdmVCbG9iICYmIG9iaiBpbnN0YW5jZW9mIEJsb2IpIHx8XG4gICAgICAgICh3aXRoTmF0aXZlRmlsZSAmJiBvYmogaW5zdGFuY2VvZiBGaWxlKSk7XG59XG5leHBvcnRzLmlzQmluYXJ5ID0gaXNCaW5hcnk7XG5mdW5jdGlvbiBoYXNCaW5hcnkob2JqLCB0b0pTT04pIHtcbiAgICBpZiAoIW9iaiB8fCB0eXBlb2Ygb2JqICE9PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKEFycmF5LmlzQXJyYXkob2JqKSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgbCA9IG9iai5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChoYXNCaW5hcnkob2JqW2ldKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKGlzQmluYXJ5KG9iaikpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmIChvYmoudG9KU09OICYmXG4gICAgICAgIHR5cGVvZiBvYmoudG9KU09OID09PSBcImZ1bmN0aW9uXCIgJiZcbiAgICAgICAgYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICByZXR1cm4gaGFzQmluYXJ5KG9iai50b0pTT04oKSwgdHJ1ZSk7XG4gICAgfVxuICAgIGZvciAoY29uc3Qga2V5IGluIG9iaikge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSAmJiBoYXNCaW5hcnkob2JqW2tleV0pKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5leHBvcnRzLmhhc0JpbmFyeSA9IGhhc0JpbmFyeTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGFscGhhYmV0ID0gJzAxMjM0NTY3ODlBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6LV8nLnNwbGl0KCcnKVxuICAsIGxlbmd0aCA9IDY0XG4gICwgbWFwID0ge31cbiAgLCBzZWVkID0gMFxuICAsIGkgPSAwXG4gICwgcHJldjtcblxuLyoqXG4gKiBSZXR1cm4gYSBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSBzcGVjaWZpZWQgbnVtYmVyLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBudW0gVGhlIG51bWJlciB0byBjb252ZXJ0LlxuICogQHJldHVybnMge1N0cmluZ30gVGhlIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgbnVtYmVyLlxuICogQGFwaSBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gZW5jb2RlKG51bSkge1xuICB2YXIgZW5jb2RlZCA9ICcnO1xuXG4gIGRvIHtcbiAgICBlbmNvZGVkID0gYWxwaGFiZXRbbnVtICUgbGVuZ3RoXSArIGVuY29kZWQ7XG4gICAgbnVtID0gTWF0aC5mbG9vcihudW0gLyBsZW5ndGgpO1xuICB9IHdoaWxlIChudW0gPiAwKTtcblxuICByZXR1cm4gZW5jb2RlZDtcbn1cblxuLyoqXG4gKiBSZXR1cm4gdGhlIGludGVnZXIgdmFsdWUgc3BlY2lmaWVkIGJ5IHRoZSBnaXZlbiBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0ciBUaGUgc3RyaW5nIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBUaGUgaW50ZWdlciB2YWx1ZSByZXByZXNlbnRlZCBieSB0aGUgc3RyaW5nLlxuICogQGFwaSBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gZGVjb2RlKHN0cikge1xuICB2YXIgZGVjb2RlZCA9IDA7XG5cbiAgZm9yIChpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgIGRlY29kZWQgPSBkZWNvZGVkICogbGVuZ3RoICsgbWFwW3N0ci5jaGFyQXQoaSldO1xuICB9XG5cbiAgcmV0dXJuIGRlY29kZWQ7XG59XG5cbi8qKlxuICogWWVhc3Q6IEEgdGlueSBncm93aW5nIGlkIGdlbmVyYXRvci5cbiAqXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBBIHVuaXF1ZSBpZC5cbiAqIEBhcGkgcHVibGljXG4gKi9cbmZ1bmN0aW9uIHllYXN0KCkge1xuICB2YXIgbm93ID0gZW5jb2RlKCtuZXcgRGF0ZSgpKTtcblxuICBpZiAobm93ICE9PSBwcmV2KSByZXR1cm4gc2VlZCA9IDAsIHByZXYgPSBub3c7XG4gIHJldHVybiBub3cgKycuJysgZW5jb2RlKHNlZWQrKyk7XG59XG5cbi8vXG4vLyBNYXAgZWFjaCBjaGFyYWN0ZXIgdG8gaXRzIGluZGV4LlxuLy9cbmZvciAoOyBpIDwgbGVuZ3RoOyBpKyspIG1hcFthbHBoYWJldFtpXV0gPSBpO1xuXG4vL1xuLy8gRXhwb3NlIHRoZSBgeWVhc3RgLCBgZW5jb2RlYCBhbmQgYGRlY29kZWAgZnVuY3Rpb25zLlxuLy9cbnllYXN0LmVuY29kZSA9IGVuY29kZTtcbnllYXN0LmRlY29kZSA9IGRlY29kZTtcbm1vZHVsZS5leHBvcnRzID0geWVhc3Q7XG4iLCJpbXBvcnQgeyAkIH0gZnJvbSAnLi9jb3JlL2xpYi9kb20nO1xuaW1wb3J0IHsgdG9nZ2xlLCB0b2dnbGVDbGFzcyB9IGZyb20gJy4vY29yZS9saWIvZG9tJztcblxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdFVJKHNvY2tldCkge1xuICBsZXQgY3JlYXRlR2FtZUJ0biA9ICQoJyNjcmVhdGUtZ2FtZScpO1xuICBsZXQgc2hvd0pvaW5HYW1lUHJvbXB0QnRuID0gJCgnI3Nob3ctam9pbi1nYW1lLXByb21wdCcpO1xuICBsZXQgY29uZmlybUpvaW5HYW1lQnRuID0gJCgnI2NvbmZpcm0tam9pbi1nYW1lJyk7XG4gIGxldCByb29tQ29kZUlucHV0ID0gJCgnI3Jvb20tY29kZS1pbnB1dCcpO1xuICBsZXQgcm9vbUNvZGVEaXNwbGF5ID0gJCgnI3Jvb20tY29kZS1kaXNwbGF5Jyk7XG4gIGxldCBpbml0VHJpZ2dlcjtcbiAgbGV0IGluaXRVSVByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcbiAgICBpbml0VHJpZ2dlciA9IHJlcztcbiAgfSlcblxuICAvL2JpbmQgZXZlbnRzXG4gIHNob3dKb2luR2FtZVByb21wdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB0b2dnbGVQb3BvdXQoJ2pvaW4tZ2FtZS1wcm9tcHQnLCB0cnVlKTtcbiAgfSk7XG5cbiAgY3JlYXRlR2FtZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBuZXdHYW1lKHNvY2tldCk7XG4gIH0pO1xuXG4gIGNvbmZpcm1Kb2luR2FtZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBsZXQgcm9vbUNvZGUgPSByb29tQ29kZUlucHV0LnZhbHVlO1xuICAgIGNvbmZpcm1Kb2luR2FtZShzb2NrZXQsIHJvb21Db2RlKTtcbiAgfSlcblxuICBzb2NrZXQub24oJ2dlblJvb21Db2RlJywgKGRhdGEpID0+IHtcbiAgICByb29tQ29kZURpc3BsYXkuaW5uZXJIVE1MID0gZGF0YTtcbiAgfSlcblxuICBpbml0VHJpZ2dlcigpO1xuXG4gIHJldHVybiBpbml0VUlQcm9taXNlO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVQb3BvdXQoaWQsIHN0YXR1cykge1xuICBsZXQgcG9wb3V0ID0gJChgLnBvcG91dCMke2lkfWApO1xuICBpZiAoc3RhdHVzKSB7XG4gICAgcG9wb3V0LmNsYXNzTGlzdC5hZGQoJ3BvcG91dC0tc2hvdycpO1xuICB9XG4gIGVsc2Uge1xuICAgIHBvcG91dC5jbGFzc0xpc3QucmVtb3ZlKCdwb3BvdXQtLXNob3cnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGlkZUluaXRpYWxTY3JlZW4oKSB7XG4gIGxldCBpbml0aWFsU2NyZWVuID0gJCgnI2luaXRpYWwtc2NyZWVuJyk7XG4gIGluaXRpYWxTY3JlZW4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZVdhaXRpbmdPcHBvbmVudChzdGF0dXMpIHtcbiAgdG9nZ2xlQ2xhc3MoJyNnYW1lLXN0YXJ0JywgJ2J1dHRvbi0taGlkZGVuJywgIXN0YXR1cyk7XG4gIHRvZ2dsZSgnI3dhaXRpbmctb3Bwb25lbnQtbXNnJywgIXN0YXR1cyk7XG59XG5cbmZ1bmN0aW9uIG5ld0dhbWUoc29ja2V0KSB7XG4gIHRvZ2dsZVBvcG91dCgncm9vbS1jb2RlLWRpc3BsYXktcG9wb3V0JywgdHJ1ZSk7XG4gIHNvY2tldC5lbWl0KCduZXdHYW1lJyk7XG59XG5cbmZ1bmN0aW9uIGNvbmZpcm1Kb2luR2FtZShzb2NrZXQsIHJvb21Db2RlKSB7XG4gIHNvY2tldC5lbWl0KCdqb2luR2FtZScsIHJvb21Db2RlKTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH0iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGluaXRVSSwgaGlkZUluaXRpYWxTY3JlZW4sIHRvZ2dsZVdhaXRpbmdPcHBvbmVudCwgdG9nZ2xlUG9wb3V0IH0gZnJvbSAnLi91aSc7XG5pbXBvcnQgeyBpbml0U3BsYXNoIH0gZnJvbSAnLi9jb3JlL3NwbGFzaCc7XG5pbXBvcnQgeyBnYW1lQnVpbGRlciB9IGZyb20gJy4vY29yZS9nYW1lJztcblxuXG5jb25zdCBzb2NrZXQgPSByZXF1aXJlKCdzb2NrZXQuaW8tY2xpZW50JykoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCcpO1xuXG5pbml0U3BsYXNoKCk7XG5cbmxldCB1aUluaXRQcm9taXNlID0gaW5pdFVJKHNvY2tldCk7XG5sZXQgZ2FtZSA9IGdhbWVCdWlsZGVyKCk7XG5sZXQgZ2FtZUNvbnRvbGxlcjtcblxuXG5cbnVpSW5pdFByb21pc2UudGhlbigoKSA9PiB7XG4gIGdhbWUudHJpZ2dlcigpO1xufSlcblxuZ2FtZS5wcm9taXNlLnRoZW4oKGluc3RhbmNlKSA9PiB7XG4gIGdhbWVDb250b2xsZXIgPSBpbnN0YW5jZTtcbn0pXG5cbnNvY2tldC5vbignZ3JlZXRpbmcnLCBncmVldGluZ0hhbmRsZXIpO1xuXG5zb2NrZXQub24oJ2dhbWVJbml0JywgKCkgPT4ge1xuICBoaWRlSW5pdGlhbFNjcmVlbigpO1xuICBnYW1lQ29udG9sbGVyLmRyYXdDb3VydCgpO1xufSlcblxuc29ja2V0Lm9uKCdwbGF5ZXJKb2luZWQnLCAocGxheWVyTnVtYmVyKSA9PiB7XG4gIGlmIChwbGF5ZXJOdW1iZXIgPT09IDIpIHtcbiAgICB0b2dnbGVXYWl0aW5nT3Bwb25lbnQodHJ1ZSk7XG4gICAgdG9nZ2xlUG9wb3V0KCdqb2luLWdhbWUtcHJvbXB0JywgZmFsc2UpO1xuICB9XG59KVxuXG5zb2NrZXQub24oJ3Rvb01hbnlQbGF5ZXJzJywgKCkgPT4ge1xuICBhbGVydCgn6Kmy5oi/5Lq65pW45bey5ru/Jyk7XG59KVxuXG5zb2NrZXQub24oJ3Vua25vd25Db2RlJywgKCkgPT4ge1xuICBhbGVydCgn54Sh5pWI55qE5oi/6ZaT56K8Jyk7XG59KVxuXG5zb2NrZXQub24oJ2hvc3RDYW50QmVHdWVzdCcsICgpID0+IHtcbiAgYWxlcnQoJ+aIv+S4u+S4jeiDvemHjeikh+WKoOWFpeiHquW3semWi+WlveeahOaIv+mWk+WWlCcpO1xufSlcblxuZnVuY3Rpb24gZ3JlZXRpbmdIYW5kbGVyKCkge1xuXG59XG5cblxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sInNvdXJjZVJvb3QiOiIifQ==