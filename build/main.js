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
/* harmony export */   "toggleClass": function() { return /* binding */ toggleClass; },
/* harmony export */   "emit": function() { return /* binding */ emit; },
/* harmony export */   "parents": function() { return /* binding */ parents; }
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
/* harmony export */   "initUI": function() { return /* binding */ initUI; }
/* harmony export */ });
/* harmony import */ var _core_lib_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/lib/dom */ "./core/lib/dom.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ "./data.js");



function initUI(socket) {
  // query Elements
  var createGameBtn = (0,_core_lib_dom__WEBPACK_IMPORTED_MODULE_0__.$)('#create-game');
  var showJoinGamePromptBtn = (0,_core_lib_dom__WEBPACK_IMPORTED_MODULE_0__.$)('#show-join-game-prompt');
  var confirmJoinGameBtn = (0,_core_lib_dom__WEBPACK_IMPORTED_MODULE_0__.$)('#confirm-join-game');
  var roomCodeInput = (0,_core_lib_dom__WEBPACK_IMPORTED_MODULE_0__.$)('#room-code-input');
  var roomCodeDisplay = (0,_core_lib_dom__WEBPACK_IMPORTED_MODULE_0__.$)('#room-code-display');
  var nameInput = (0,_core_lib_dom__WEBPACK_IMPORTED_MODULE_0__.$)('#name-input');
  var nameConfirm = (0,_core_lib_dom__WEBPACK_IMPORTED_MODULE_0__.$)('#name-confirm');
  var leaveWaitingBtn = (0,_core_lib_dom__WEBPACK_IMPORTED_MODULE_0__.$)('#leave-waiting');
  var leaveGameStartAlert = (0,_core_lib_dom__WEBPACK_IMPORTED_MODULE_0__.$)('#leave-game-start-alert'); // 建立 iniUI Promise 

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
    var name = nameInput.value ? nameInput.value : _data__WEBPACK_IMPORTED_MODULE_1__.playerRef.name;
    confirmName(socket, name);

    if (flag === 'onJoin') {
      togglePopout('join-game-prompt', true);
    } else if (flag === 'onCreate') {
      newGame(socket);
    }
  }); //綁定按鈕點擊後開啟name-input-prompt => joinGame prompt

  showJoinGamePromptBtn.addEventListener('click', function () {
    flag = 'onJoin';
    togglePopout('name-input-prompt', true);
  }); //綁定按鈕點擊後送出想參加的房間碼的事件

  confirmJoinGameBtn.addEventListener('click', function () {
    var roomCode = roomCodeInput.value;
    confirmJoinGame(socket, roomCode);
  }); //綁定按鈕點擊後開啟name-input-prompt => newGame prompt

  createGameBtn.addEventListener('click', function () {
    flag = 'onCreate';
    togglePopout('name-input-prompt', true);
  }); //綁定第一離開按鈕

  leaveWaitingBtn.addEventListener('click', function () {
    socket.emit('leaveWaiting');
    togglePopout('room-code-display-popout', false);
  }); //綁定第二離開按鈕

  leaveGameStartAlert.addEventListener('click', function () {
    socket.emit('leaveStartingGame', _data__WEBPACK_IMPORTED_MODULE_1__.playerRef);
    togglePopout('game-start-alert', false);
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
    (0,_core_lib_dom__WEBPACK_IMPORTED_MODULE_0__.$)('[data-role="leave-msg"]').innerHTML = "HOST ".concat(data.host, " LEFT AND SHUTDOWN THE ROOM.");
  });
  socket.on('challenger-leave', function (data) {
    togglePopout('game-start-alert', false);
    togglePopout('leave-alert', true);
    togglePopout('room-code-display-popout', true);
    (0,_core_lib_dom__WEBPACK_IMPORTED_MODULE_0__.$)('[data-role="leave-msg"]').innerHTML = "CHALLENGER ".concat(data.challenger, " LEFT THIS MATCH.");
  }); //綁定當server傳來'gameInit'訊號後，ui 應產生的對應行為

  socket.on('gameInit', function () {
    hideInitialScreen();
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
socket.on('gameInit', function () {
  gameContoller.drawCourt();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vY29yZS9nYW1lLmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9jb3JlL2xpYi9iYXNlLmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9jb3JlL2xpYi9kb20uanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL2NvcmUvbGliL2Z1bmN0aW9uLmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9jb3JlL2xpYi9zaGFwZS5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vY29yZS9zcGxhc2guanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL2RhdGEuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9iYWNrbzIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9iYXNlNjQtYXJyYXlidWZmZXIvbGliL2Jhc2U2NC1hcnJheWJ1ZmZlci5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL2NvbXBvbmVudC1lbWl0dGVyL2luZGV4LmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvZGVidWcvbm9kZV9tb2R1bGVzL21zL2luZGV4LmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvZGVidWcvc3JjL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9kZWJ1Zy9zcmMvY29tbW9uLmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9saWIvZ2xvYmFsVGhpcy5icm93c2VyLmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2xpYi9zb2NrZXQuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2xpYi90cmFuc3BvcnQuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2xpYi90cmFuc3BvcnRzL2luZGV4LmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9saWIvdHJhbnNwb3J0cy9wb2xsaW5nLWpzb25wLmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9saWIvdHJhbnNwb3J0cy9wb2xsaW5nLXhoci5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvbGliL3RyYW5zcG9ydHMvcG9sbGluZy5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvbGliL3RyYW5zcG9ydHMvd2Vic29ja2V0LWNvbnN0cnVjdG9yLmJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2xpYi90cmFuc3BvcnRzL3dlYnNvY2tldC5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvbGliL3V0aWwuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2xpYi94bWxodHRwcmVxdWVzdC5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1wYXJzZXIvbGliL2NvbW1vbnMuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tcGFyc2VyL2xpYi9kZWNvZGVQYWNrZXQuYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1wYXJzZXIvbGliL2VuY29kZVBhY2tldC5icm93c2VyLmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLXBhcnNlci9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9oYXMtY29ycy9pbmRleC5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL21lcnNlbm5lLXR3aXN0ZXIvc3JjL21lcnNlbm5lLXR3aXN0ZXIuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9wYXJzZXFzL2luZGV4LmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvcGFyc2V1cmkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tY2xpZW50L2J1aWxkL2luZGV4LmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLWNsaWVudC9idWlsZC9tYW5hZ2VyLmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLWNsaWVudC9idWlsZC9vbi5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1jbGllbnQvYnVpbGQvc29ja2V0LmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLWNsaWVudC9idWlsZC90eXBlZC1ldmVudHMuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tY2xpZW50L2J1aWxkL3VybC5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1wYXJzZXIvZGlzdC9iaW5hcnkuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tcGFyc2VyL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tcGFyc2VyL2Rpc3QvaXMtYmluYXJ5LmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMveWVhc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL3VpLmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL3NyYy9zY3NzL21haW4uc2NzcyJdLCJuYW1lcyI6WyJERUZBVUxUIiwiYmdDb2xvciIsImN1cnNvciIsImNvbG9yIiwicmFkaXVzIiwiRW5naW5lIiwiZWxlIiwiZGVmYXVsdENvbmZpZyIsImNvbmZpZyIsImluaXQiLCJiYWNrZ3JvdW5kIiwiZGF0YSIsImxvY2FsRGF0YSIsImkiLCJjbGllbnRzIiwibGVuZ3RoIiwiZHJhd0NpcmNsZSIsImN0eCIsIngiLCJ5IiwiZHJhd1RleHQiLCJDYW52YXMyREZ4QmFzZSIsImdhbWVCdWlsZGVyIiwiZ2FtZSIsImJvb3QiLCJkb2N1bWVudCIsImJvZHkiLCJ2aXJ0dWFsUGFyZW50IiwiaXMiLCJPYmplY3QiLCJhc3NpZ24iLCJmcmFtZUNvdW50IiwibW91c2UiLCJmcmFtZUlzUGF1c2VkIiwiaXNDbGljayIsImNhbnZhc1NpemVmaXhlZCIsInByZXZpb3VzRnJhbWVUaW1lIiwiRGF0ZSIsImdldFRpbWUiLCJpbml0QmFzZSIsInRhZ05hbWUiLCJjdnMiLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJnZXRDb250ZXh0IiwidHJpZ2dlclJlc2l6aW5nTWVjaGFuaXNtIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImRlYm91bmNlIiwidmlzaWJpbGl0eVN0YXRlIiwiYWRkRXZlbnRIYW5kbGVyIiwicmVmcmVzaEJhc2VGcmFtZUNvdW50ZXIiLCJ0aGlzRnJhbWVUaW1lIiwidGltZUVsYXBzZWQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjb250YWlucyIsImNhbnZhc1dpZHRoIiwiY2FudmFzSGVpZ2h0IiwidmlydHVhbFBhcmVudFZhbGlkYXRpb24iLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ3aWR0aCIsImhlaWdodCIsInBhcmVudEVsZW1lbnQiLCJzYXZlIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJyZXN0b3JlIiwiY2xlYXJSZWN0IiwiZSIsInBvcyIsInBvaW50ZXJFdmVudFRvWFkiLCJjdG9yIiwidGFyZ2V0RWxlIiwiZ2V0RWxlbWVudEJ5SWQiLCJ0cmlnZ2VyIiwiYm9vdFByb21pc2UiLCJQcm9taXNlIiwicmVzIiwicmVqIiwiaW5zdGFuY2UiLCJjb250cm9sbGVyIiwicHJvbWlzZSIsIiQiLCJzZWxlY3RvciIsInF1ZXJ5U2VsZWN0b3IiLCJ0b2dnbGUiLCJzdGF0dXMiLCJzdHlsZVN0ciIsInNldEF0dHJpYnV0ZSIsInRvZ2dsZUNsYXNzIiwiY2xhc3NuYW1lIiwiYWN0aW9uIiwiY2xhc3NMaXN0IiwiZW1pdCIsImV2ZW50TmFtZSIsInNvbWVFdmVudCIsImNyZWF0ZUV2ZW50IiwiaW5pdEV2ZW50IiwiZGlzcGF0Y2hFdmVudCIsInBhcmVudHMiLCJub2RlIiwiY3VycmVudCIsImxpc3QiLCJwYXJlbnROb2RlIiwiZG9jdW1lbnRFbGVtZW50IiwicHVzaCIsImZpbHRlciIsIm8iLCJtYXRjaGVzIiwiTWVyc2VubmVUd2lzdGVyIiwicmVxdWlyZSIsIk1UIiwiZnVuYyIsImRlbGF5IiwidGltZXIiLCIkdGhpcyIsImNvbnRleHQiLCJhcmdzIiwiYXJndW1lbnRzIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImFwcGx5IiwiYXJyIiwiYSIsIkFycmF5IiwiaXNBcnJheSIsIm9iaiIsInByb3RvdHlwZSIsInRvU3RyaW5nIiwiY2FsbCIsImluZGV4T2YiLCJwdGgiLCJoYXNPd25Qcm9wZXJ0eSIsInN2ZyIsIlNWR0VsZW1lbnQiLCJpbnAiLCJIVE1MSW5wdXRFbGVtZW50IiwiZG9tIiwibm9kZVR5cGUiLCJzdHIiLCJmbmMiLCJ1bmQiLCJuaWwiLCJoZXgiLCJ0ZXN0IiwicmdiYSIsInJnYiIsImhzbCIsImNvbCIsImtleSIsImRlZmF1bHRJbnN0YW5jZVNldHRpbmdzIiwiZGVmYXVsdFR3ZWVuU2V0dGluZ3MiLCJyYW5kb21XaXRoaW5SYW5nZSIsIm1pbiIsIm1heCIsInNlZWQiLCJyYW5kb20iLCJnZXREaXN0YW5jZSIsIngwIiwieTAiLCJ4MSIsInkxIiwiTWF0aCIsInNxcnQiLCJkZWdyZWVUb1JhZGlhbiIsImRlZ3JlZSIsIlBJIiwib3V0IiwidHlwZSIsInRvdWNoIiwib3JpZ2luYWxFdmVudCIsInRvdWNoZXMiLCJjaGFuZ2VkVG91Y2hlcyIsInBhZ2VYIiwicGFnZVkiLCJ0YXJnZXRIYXNQcm9wIiwidGFyZ2V0IiwicHJvcCIsImlzRW1wdHkiLCJ2YWwiLCJpc05hTiIsInJnYlRvUmdiYSIsInJnYlZhbHVlIiwiZXhlYyIsImhleFRvUmdiYSIsImhleFZhbHVlIiwicmd4IiwicmVwbGFjZSIsIm0iLCJyIiwiZyIsImIiLCJwYXJzZUludCIsImhzbFRvUmdiYSIsImhzbFZhbHVlIiwiaCIsInMiLCJsIiwiaHVlMnJnYiIsInAiLCJxIiwidCIsImNvbG9yVG9SZ2JhIiwiZ2V0Q2hhbm5lbFZhbHVlc0Zyb21SZ2JhIiwic3BsaXQiLCJtYXAiLCJkcmF3U3F1YXJlIiwiYWxwaGEiLCJnbG9iYWxBbHBoYSIsImJlZ2luUGF0aCIsImFyYyIsImNsb3NlUGF0aCIsImZpbGwiLCJkcmF3TGluZSIsInN0cm9rZUNvbG9yIiwic3Ryb2tlV2lkdGgiLCJzdHJva2VTdHlsZSIsImxpbmVXaWR0aCIsIm1vdmVUbyIsImxpbmVUbyIsInN0cm9rZSIsInRleHRDb250ZW50IiwiZm9udFNpemUiLCJmb250IiwiZmlsbFRleHQiLCJCQUxMX0FOSU1BVElPTl9ERUZBVUxUIiwiYWZ0ZXJJbWFnZSIsInNwZWVkWCIsInNwZWVkWSIsImFjY2VsZXJhdGlvblgiLCJhY2NlbGVyYXRpb25ZIiwiZnJpY3Rpb25YIiwiZnJpY3Rpb25ZIiwiU1BPVFNfQU5JTUFUSU9OX0RFRkFVTFQiLCJtaW5TaXplIiwibWF4U2l6ZSIsInBlcmlvZCIsInN0ZXAiLCJib3R0b21MYXllciIsInJvdyIsIkJhc2ljUmVmZWxlY3Rpb24iLCJjYW52YXMiLCJpbml0QmFsbCIsImFuaW1hdGVCYWxsIiwiYmFsbCIsImxvY2F0aW9uIiwic3BlZWQiLCJhY2NlbGVyYXRpb24iLCJmcmljdGlvbiIsImRyYXdJbWFnZSIsImRyYXdCYWxsIiwicmVmcmVzaExvY2F0aW9uIiwicmVmcmVzaFNwZWVkIiwiY2hlY2tCb3VuZGFyeSIsImJpbmQiLCJkdCIsIlNwb3RzQnVtcGluZyIsInNwb3RzU2l6ZSIsImV4cGFuZCIsImFuaW1hdGUiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXIiLCJkcmF3U3BvdHMiLCJqIiwiaW5pdFNwbGFzaCIsImluaXRpYWxTY3JlZW4iLCJ2aXJ0dWFsQ2FudmFzIiwic3BvdEFuaW1hdGlvbiIsInRoZW4iLCJkYXRhU3RvcmFnZSIsInBvc2l0aW9uIiwicGxheWVyUmVmIiwibmFtZSIsIm51bWJlciIsIm1vZHVsZSIsImV4cG9ydHMiLCJCYWNrb2ZmIiwib3B0cyIsIm1zIiwiZmFjdG9yIiwiaml0dGVyIiwiYXR0ZW1wdHMiLCJkdXJhdGlvbiIsInBvdyIsInJhbmQiLCJkZXZpYXRpb24iLCJmbG9vciIsInJlc2V0Iiwic2V0TWluIiwic2V0TWF4Iiwic2V0Sml0dGVyIiwiY2hhcnMiLCJhcnJheWJ1ZmZlciIsImJ5dGVzIiwiVWludDhBcnJheSIsImxlbiIsImJhc2U2NCIsInN1YnN0cmluZyIsImJ1ZmZlckxlbmd0aCIsImVuY29kZWQxIiwiZW5jb2RlZDIiLCJlbmNvZGVkMyIsImVuY29kZWQ0IiwiQXJyYXlCdWZmZXIiLCJFbWl0dGVyIiwibWl4aW4iLCJvbiIsImV2ZW50IiwiZm4iLCJfY2FsbGJhY2tzIiwib25jZSIsIm9mZiIsInJlbW92ZUxpc3RlbmVyIiwicmVtb3ZlQWxsTGlzdGVuZXJzIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNhbGxiYWNrcyIsImNiIiwic3BsaWNlIiwic2xpY2UiLCJsaXN0ZW5lcnMiLCJoYXNMaXN0ZW5lcnMiLCJkIiwidyIsIm9wdGlvbnMiLCJwYXJzZSIsImlzRmluaXRlIiwibG9uZyIsImZtdExvbmciLCJmbXRTaG9ydCIsIkVycm9yIiwiSlNPTiIsInN0cmluZ2lmeSIsIlN0cmluZyIsIm1hdGNoIiwibiIsInBhcnNlRmxvYXQiLCJ0b0xvd2VyQ2FzZSIsInVuZGVmaW5lZCIsIm1zQWJzIiwiYWJzIiwicm91bmQiLCJwbHVyYWwiLCJpc1BsdXJhbCIsImZvcm1hdEFyZ3MiLCJsb2FkIiwidXNlQ29sb3JzIiwibG9jYWxzdG9yYWdlIiwid2FybmVkIiwiY29uc29sZSIsIndhcm4iLCJwcm9jZXNzIiwiX19ud2pzIiwibmF2aWdhdG9yIiwidXNlckFnZW50Iiwic3R5bGUiLCJXZWJraXRBcHBlYXJhbmNlIiwiZmlyZWJ1ZyIsImV4Y2VwdGlvbiIsInRhYmxlIiwiUmVnRXhwIiwiJDEiLCJuYW1lc3BhY2UiLCJodW1hbml6ZSIsImRpZmYiLCJjIiwiaW5kZXgiLCJsYXN0QyIsImRlYnVnIiwibG9nIiwibmFtZXNwYWNlcyIsInN0b3JhZ2UiLCJzZXRJdGVtIiwicmVtb3ZlSXRlbSIsImVycm9yIiwiZ2V0SXRlbSIsImVudiIsIkRFQlVHIiwibG9jYWxTdG9yYWdlIiwiZm9ybWF0dGVycyIsInYiLCJtZXNzYWdlIiwic2V0dXAiLCJjcmVhdGVEZWJ1ZyIsImRlZmF1bHQiLCJjb2VyY2UiLCJkaXNhYmxlIiwiZW5hYmxlIiwiZW5hYmxlZCIsImRlc3Ryb3kiLCJrZXlzIiwiZm9yRWFjaCIsIm5hbWVzIiwic2tpcHMiLCJzZWxlY3RDb2xvciIsImhhc2giLCJjaGFyQ29kZUF0IiwiY29sb3JzIiwicHJldlRpbWUiLCJlbmFibGVPdmVycmlkZSIsInNlbGYiLCJjdXJyIiwiTnVtYmVyIiwicHJldiIsInVuc2hpZnQiLCJmb3JtYXQiLCJmb3JtYXR0ZXIiLCJsb2dGbiIsImV4dGVuZCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsImdldCIsInNldCIsImRlbGltaXRlciIsIm5ld0RlYnVnIiwic3Vic3RyIiwidG9OYW1lc3BhY2UiLCJqb2luIiwicmVnZXhwIiwic3RhY2siLCJGdW5jdGlvbiIsIlNvY2tldCIsInVyaSIsInByb3RvY29sIiwidHJhbnNwb3J0cyIsInBhcnNlciIsInBhcnNldXJpIiwicGFyc2VxcyIsImhvc3RuYW1lIiwiaG9zdCIsInNlY3VyZSIsInBvcnQiLCJxdWVyeSIsInJlYWR5U3RhdGUiLCJ3cml0ZUJ1ZmZlciIsInByZXZCdWZmZXJMZW4iLCJwYXRoIiwiYWdlbnQiLCJ3aXRoQ3JlZGVudGlhbHMiLCJ1cGdyYWRlIiwianNvbnAiLCJ0aW1lc3RhbXBQYXJhbSIsInJlbWVtYmVyVXBncmFkZSIsInJlamVjdFVuYXV0aG9yaXplZCIsInBlck1lc3NhZ2VEZWZsYXRlIiwidGhyZXNob2xkIiwidHJhbnNwb3J0T3B0aW9ucyIsImNsb3NlT25CZWZvcmV1bmxvYWQiLCJkZWNvZGUiLCJpZCIsInVwZ3JhZGVzIiwicGluZ0ludGVydmFsIiwicGluZ1RpbWVvdXQiLCJwaW5nVGltZW91dFRpbWVyIiwidHJhbnNwb3J0IiwiY2xvc2UiLCJvZmZsaW5lRXZlbnRMaXN0ZW5lciIsIm9uQ2xvc2UiLCJvcGVuIiwiY2xvbmUiLCJFSU8iLCJzaWQiLCJzb2NrZXQiLCJwcmlvcldlYnNvY2tldFN1Y2Nlc3MiLCJjcmVhdGVUcmFuc3BvcnQiLCJzaGlmdCIsInNldFRyYW5zcG9ydCIsIm9uRHJhaW4iLCJvblBhY2tldCIsIm9uRXJyb3IiLCJwcm9iZSIsImZhaWxlZCIsIm9uVHJhbnNwb3J0T3BlbiIsInNlbmQiLCJtc2ciLCJ1cGdyYWRpbmciLCJwYXVzZSIsImNsZWFudXAiLCJmbHVzaCIsImVyciIsImZyZWV6ZVRyYW5zcG9ydCIsIm9uZXJyb3IiLCJvblRyYW5zcG9ydENsb3NlIiwib25jbG9zZSIsIm9udXBncmFkZSIsInRvIiwicGFja2V0Iiwib25IYW5kc2hha2UiLCJyZXNldFBpbmdUaW1lb3V0Iiwic2VuZFBhY2tldCIsImNvZGUiLCJmaWx0ZXJVcGdyYWRlcyIsIm9uT3BlbiIsImF1dG9VbnJlZiIsInVucmVmIiwid3JpdGFibGUiLCJjb21wcmVzcyIsImNsZWFudXBBbmRDbG9zZSIsIndhaXRGb3JVcGdyYWRlIiwicmVhc29uIiwiZGVzYyIsInBpbmdJbnRlcnZhbFRpbWVyIiwiZmlsdGVyZWRVcGdyYWRlcyIsIlRyYW5zcG9ydCIsImRlc2NyaXB0aW9uIiwiZG9PcGVuIiwiZG9DbG9zZSIsInBhY2tldHMiLCJ3cml0ZSIsImRlY29kZVBhY2tldCIsImJpbmFyeVR5cGUiLCJYTUxIdHRwUmVxdWVzdCIsIlhIUiIsIkpTT05QIiwid2Vic29ja2V0IiwicG9sbGluZyIsInhociIsInhkIiwieHMiLCJpc1NTTCIsInhkb21haW4iLCJ4c2NoZW1lIiwiZm9yY2VKU09OUCIsIlBvbGxpbmciLCJnbG9iYWxUaGlzIiwick5ld2xpbmUiLCJyRXNjYXBlZE5ld2xpbmUiLCJKU09OUFBvbGxpbmciLCJfX19laW8iLCJvbkRhdGEiLCJzY3JpcHQiLCJyZW1vdmVDaGlsZCIsImZvcm0iLCJpZnJhbWUiLCJhc3luYyIsInNyYyIsImluc2VydEF0IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJpbnNlcnRCZWZvcmUiLCJoZWFkIiwiaXNVQWdlY2tvIiwiYXJlYSIsImlmcmFtZUlkIiwiY2xhc3NOYW1lIiwidG9wIiwibGVmdCIsIm1ldGhvZCIsImNvbXBsZXRlIiwiaW5pdElmcmFtZSIsImh0bWwiLCJ2YWx1ZSIsInN1Ym1pdCIsImF0dGFjaEV2ZW50Iiwib25yZWFkeXN0YXRlY2hhbmdlIiwib25sb2FkIiwicGljayIsImVtcHR5IiwiaGFzWEhSMiIsInJlc3BvbnNlVHlwZSIsImZvcmNlQmFzZTY0Iiwic3VwcG9ydHNCaW5hcnkiLCJSZXF1ZXN0IiwicmVxIiwicmVxdWVzdCIsInBvbGxYaHIiLCJjcmVhdGUiLCJleHRyYUhlYWRlcnMiLCJzZXREaXNhYmxlSGVhZGVyQ2hlY2siLCJzZXRSZXF1ZXN0SGVhZGVyIiwicmVxdWVzdFRpbWVvdXQiLCJ0aW1lb3V0IiwiaGFzWERSIiwib25Mb2FkIiwicmVzcG9uc2VUZXh0IiwicmVxdWVzdHNDb3VudCIsInJlcXVlc3RzIiwib25TdWNjZXNzIiwiZnJvbUVycm9yIiwiYWJvcnQiLCJYRG9tYWluUmVxdWVzdCIsImVuYWJsZXNYRFIiLCJ1bmxvYWRIYW5kbGVyIiwidGVybWluYXRpb25FdmVudCIsInllYXN0IiwicG9sbCIsIm9uUGF1c2UiLCJ0b3RhbCIsImRvUG9sbCIsImNhbGxiYWNrIiwiZGVjb2RlUGF5bG9hZCIsImVuY29kZVBheWxvYWQiLCJkb1dyaXRlIiwic2NoZW1hIiwidGltZXN0YW1wUmVxdWVzdHMiLCJiNjQiLCJlbmNvZGUiLCJpcHY2IiwiV2ViU29ja2V0IiwiTW96V2ViU29ja2V0IiwidXNpbmdCcm93c2VyV2ViU29ja2V0IiwiZGVmYXVsdEJpbmFyeVR5cGUiLCJpc1JlYWN0TmF0aXZlIiwicHJvZHVjdCIsIldTIiwiY2hlY2siLCJwcm90b2NvbHMiLCJoZWFkZXJzIiwid3MiLCJhZGRFdmVudExpc3RlbmVycyIsIm9ub3BlbiIsIl9zb2NrZXQiLCJvbm1lc3NhZ2UiLCJldiIsImxhc3RQYWNrZXQiLCJlbmNvZGVQYWNrZXQiLCJCdWZmZXIiLCJieXRlTGVuZ3RoIiwiYXR0ciIsInJlZHVjZSIsImFjYyIsImsiLCJoYXNDT1JTIiwiY29uY2F0IiwiUEFDS0VUX1RZUEVTIiwiUEFDS0VUX1RZUEVTX1JFVkVSU0UiLCJFUlJPUl9QQUNLRVQiLCJ3aXRoTmF0aXZlQXJyYXlCdWZmZXIiLCJiYXNlNjRkZWNvZGVyIiwiZW5jb2RlZFBhY2tldCIsIm1hcEJpbmFyeSIsImNoYXJBdCIsImRlY29kZUJhc2U2NFBhY2tldCIsInBhY2tldFR5cGUiLCJkZWNvZGVkIiwiQmxvYiIsIndpdGhOYXRpdmVCbG9iIiwiaXNWaWV3IiwiYnVmZmVyIiwiZW5jb2RlQmxvYkFzQmFzZTY0IiwiZmlsZVJlYWRlciIsIkZpbGVSZWFkZXIiLCJjb250ZW50IiwicmVzdWx0IiwicmVhZEFzRGF0YVVSTCIsIlNFUEFSQVRPUiIsImZyb21DaGFyQ29kZSIsImVuY29kZWRQYWNrZXRzIiwiY291bnQiLCJlbmNvZGVkUGF5bG9hZCIsImRlY29kZWRQYWNrZXQiLCJOIiwiTSIsIk1BVFJJWF9BIiwiVVBQRVJfTUFTSyIsIkxPV0VSX01BU0siLCJtdCIsIm10aSIsImNvbnN0cnVjdG9yIiwiaW5pdF9ieV9hcnJheSIsImluaXRfc2VlZCIsImluaXRfa2V5Iiwia2V5X2xlbmd0aCIsInJhbmRvbV9pbnQiLCJtYWcwMSIsImtrIiwicmFuZG9tX2ludDMxIiwicmFuZG9tX2luY2wiLCJyYW5kb21fZXhjbCIsInJhbmRvbV9sb25nIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicXMiLCJxcnkiLCJwYWlycyIsInBhaXIiLCJkZWNvZGVVUklDb21wb25lbnQiLCJyZSIsInBhcnRzIiwic291cmNlIiwiYXV0aG9yaXR5IiwiaXB2NnVyaSIsInBhdGhOYW1lcyIsInF1ZXJ5S2V5IiwicmVneCIsIiQwIiwiJDIiLCJ1cmxfMSIsIm1hbmFnZXJfMSIsImxvb2t1cCIsImNhY2hlIiwicGFyc2VkIiwidXJsIiwic2FtZU5hbWVzcGFjZSIsIm5ld0Nvbm5lY3Rpb24iLCJmb3JjZU5ldyIsIm11bHRpcGxleCIsImlvIiwiTWFuYWdlciIsInNvY2tldF9pb19wYXJzZXJfMSIsIm1hbmFnZXJfMiIsInNvY2tldF8xIiwiZWlvIiwib25fMSIsInR5cGVkX2V2ZW50c18xIiwibnNwcyIsInN1YnMiLCJyZWNvbm5lY3Rpb24iLCJyZWNvbm5lY3Rpb25BdHRlbXB0cyIsIkluZmluaXR5IiwicmVjb25uZWN0aW9uRGVsYXkiLCJyZWNvbm5lY3Rpb25EZWxheU1heCIsInJhbmRvbWl6YXRpb25GYWN0b3IiLCJiYWNrb2ZmIiwiX3JlYWR5U3RhdGUiLCJfcGFyc2VyIiwiZW5jb2RlciIsIkVuY29kZXIiLCJkZWNvZGVyIiwiRGVjb2RlciIsIl9hdXRvQ29ubmVjdCIsImF1dG9Db25uZWN0IiwiX3JlY29ubmVjdGlvbiIsIl9yZWNvbm5lY3Rpb25BdHRlbXB0cyIsIl9hIiwiX3JlY29ubmVjdGlvbkRlbGF5IiwiX3JhbmRvbWl6YXRpb25GYWN0b3IiLCJfcmVjb25uZWN0aW9uRGVsYXlNYXgiLCJfdGltZW91dCIsIl9yZWNvbm5lY3RpbmciLCJyZWNvbm5lY3QiLCJlbmdpbmUiLCJza2lwUmVjb25uZWN0Iiwib3BlblN1YkRlc3Ryb3kiLCJlcnJvclN1YiIsImVtaXRSZXNlcnZlZCIsIm1heWJlUmVjb25uZWN0T25PcGVuIiwic3ViRGVzdHJveSIsIm9ucGluZyIsIm9uZGF0YSIsIm9uZGVjb2RlZCIsImFkZCIsIm5zcCIsImFjdGl2ZSIsIl9jbG9zZSIsIm9ucmVjb25uZWN0IiwiYXR0ZW1wdCIsIlN0cmljdEV2ZW50RW1pdHRlciIsIlJFU0VSVkVEX0VWRU5UUyIsImZyZWV6ZSIsImNvbm5lY3QiLCJjb25uZWN0X2Vycm9yIiwiZGlzY29ubmVjdCIsImRpc2Nvbm5lY3RpbmciLCJuZXdMaXN0ZW5lciIsInJlY2VpdmVCdWZmZXIiLCJzZW5kQnVmZmVyIiwiaWRzIiwiYWNrcyIsImZsYWdzIiwiY29ubmVjdGVkIiwiZGlzY29ubmVjdGVkIiwiYXV0aCIsIm9ucGFja2V0Iiwic3ViRXZlbnRzIiwiUGFja2V0VHlwZSIsIkVWRU5UIiwicG9wIiwiaXNUcmFuc3BvcnRXcml0YWJsZSIsImRpc2NhcmRQYWNrZXQiLCJ2b2xhdGlsZSIsIl9wYWNrZXQiLCJDT05ORUNUIiwib25jb25uZWN0Iiwib25ldmVudCIsIkJJTkFSWV9FVkVOVCIsIkFDSyIsIm9uYWNrIiwiQklOQVJZX0FDSyIsIkRJU0NPTk5FQ1QiLCJvbmRpc2Nvbm5lY3QiLCJDT05ORUNUX0VSUk9SIiwiYWNrIiwiZW1pdEV2ZW50IiwiX2FueUxpc3RlbmVycyIsImxpc3RlbmVyIiwic2VudCIsImVtaXRCdWZmZXJlZCIsImxvYyIsImhyZWYiLCJpc19iaW5hcnlfMSIsImRlY29uc3RydWN0UGFja2V0IiwiYnVmZmVycyIsInBhY2tldERhdGEiLCJwYWNrIiwiX2RlY29uc3RydWN0UGFja2V0IiwiYXR0YWNobWVudHMiLCJpc0JpbmFyeSIsInBsYWNlaG9sZGVyIiwiX3BsYWNlaG9sZGVyIiwibnVtIiwibmV3RGF0YSIsInJlY29uc3RydWN0UGFja2V0IiwiX3JlY29uc3RydWN0UGFja2V0IiwiYmluYXJ5XzEiLCJoYXNCaW5hcnkiLCJlbmNvZGVBc0JpbmFyeSIsImVuY29kZUFzU3RyaW5nIiwiZGVjb25zdHJ1Y3Rpb24iLCJkZWNvZGVTdHJpbmciLCJyZWNvbnN0cnVjdG9yIiwiQmluYXJ5UmVjb25zdHJ1Y3RvciIsInRha2VCaW5hcnlEYXRhIiwic3RhcnQiLCJidWYiLCJuZXh0IiwicGF5bG9hZCIsInRyeVBhcnNlIiwiaXNQYXlsb2FkVmFsaWQiLCJmaW5pc2hlZFJlY29uc3RydWN0aW9uIiwicmVjb25QYWNrIiwiYmluRGF0YSIsIndpdGhOYXRpdmVGaWxlIiwiRmlsZSIsInRvSlNPTiIsImFscGhhYmV0IiwiZW5jb2RlZCIsIm5vdyIsImluaXRVSSIsImNyZWF0ZUdhbWVCdG4iLCJzaG93Sm9pbkdhbWVQcm9tcHRCdG4iLCJjb25maXJtSm9pbkdhbWVCdG4iLCJyb29tQ29kZUlucHV0Iiwicm9vbUNvZGVEaXNwbGF5IiwibmFtZUlucHV0IiwibmFtZUNvbmZpcm0iLCJsZWF2ZVdhaXRpbmdCdG4iLCJsZWF2ZUdhbWVTdGFydEFsZXJ0IiwiaW5pdFRyaWdnZXIiLCJpbml0VUlQcm9taXNlIiwicXVlcnlTZWxlY3RvckFsbCIsImlubmVySFRNTCIsInBhcmVudFBvcG91dHMiLCJ0b2dnbGVQb3BvdXQiLCJmbGFnIiwiY29uZmlybU5hbWUiLCJuZXdHYW1lIiwicm9vbUNvZGUiLCJjb25maXJtSm9pbkdhbWUiLCJwbGF5ZXJOdW1iZXIiLCJwbGF5ZXJOYW1lIiwiZGlzcGxheSIsImhvc3ROYW1lIiwiY2hhbGxlbmdlciIsImhpZGVJbml0aWFsU2NyZWVuIiwicG9wb3V0IiwicmVtb3ZlIiwidG9nZ2xlSGlkZU9uQWN0aW9uIiwidG9nZ2xlU2hvd09uQWN0aW9uIiwidWlJbml0UHJvbWlzZSIsImdhbWVDb250b2xsZXIiLCJkcmF3Q291cnQiLCJhbGVydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLE9BQU8sR0FBRztBQUNkQyxTQUFPLEVBQUUsaUJBREs7QUFFZEMsUUFBTSxFQUFFO0FBQ05DLFNBQUssRUFBRSxNQUREO0FBRU5DLFVBQU0sRUFBRTtBQUZGO0FBRk0sQ0FBaEI7QUFRTyxJQUFNQyxNQUFiO0FBQUE7O0FBQUE7O0FBQ0Usa0JBQVlDLEdBQVosRUFBaUJDLGFBQWpC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WUFBTTtBQUNoQzBpQixPQUFLLENBQUMsUUFBRCxDQUFMO0FBQ0QsQ0FGRDtBQUlBOVksTUFBTSxDQUFDNUosRUFBUCxDQUFVLGFBQVYsRUFBeUIsWUFBTTtBQUM3QjBpQixPQUFLLENBQUMsUUFBRCxDQUFMO0FBQ0QsQ0FGRDtBQUlBOVksTUFBTSxDQUFDNUosRUFBUCxDQUFVLGlCQUFWLEVBQTZCLFlBQU07QUFDakMwaUIsT0FBSyxDQUFDLGtCQUFELENBQUw7QUFDRCxDQUZELEU7Ozs7Ozs7OztBQ2xDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FudmFzMkRGeEJhc2UsIGJvb3QgfSBmcm9tICcuL2xpYi9iYXNlJztcbmltcG9ydCB7IGRyYXdDaXJjbGUsIGRyYXdUZXh0IH0gZnJvbSAnLi9saWIvc2hhcGUnO1xuXG5jb25zdCBERUZBVUxUID0ge1xuICBiZ0NvbG9yOiAncmdiYSgwLDAsMCwwLjMpJyxcbiAgY3Vyc29yOiB7XG4gICAgY29sb3I6ICcjZmZmJyxcbiAgICByYWRpdXM6IDUwXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEVuZ2luZSBleHRlbmRzIENhbnZhczJERnhCYXNlIHtcbiAgY29uc3RydWN0b3IoZWxlLCBkZWZhdWx0Q29uZmlnLCBjb25maWcpIHtcbiAgICBzdXBlcihlbGUsIGRlZmF1bHRDb25maWcsIGNvbmZpZylcbiAgICB0aGlzLmluaXQoKTtcbiAgICB0aGlzLnJhZGl1cyA9IDUwO1xuICB9XG4gIGluaXQoKSB7XG4gICAgdGhpcy5iYWNrZ3JvdW5kKHRoaXMuY29uZmlnLmJnQ29sb3IpO1xuICB9XG4gIGRyYXcoZGF0YSwgbG9jYWxEYXRhKSB7XG4gICAgdGhpcy5iYWNrZ3JvdW5kKHRoaXMuY29uZmlnLmJnQ29sb3IpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5jbGllbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBkcmF3Q2lyY2xlKFxuICAgICAgICB0aGlzLmN0eCxcbiAgICAgICAgZGF0YS5jbGllbnRzW2ldLmN1cnNvci54LFxuICAgICAgICBkYXRhLmNsaWVudHNbaV0uY3Vyc29yLnksXG4gICAgICAgIHRoaXMuY29uZmlnLmN1cnNvci5yYWRpdXMsXG4gICAgICAgIHRoaXMuY29uZmlnLmN1cnNvci5jb2xvclxuICAgICAgKVxuXG4gICAgICBkcmF3VGV4dChcbiAgICAgICAgdGhpcy5jdHgsIGBQbGF5ZXIke2l9YCxcbiAgICAgICAgZGF0YS5jbGllbnRzW2ldLmN1cnNvci54ICsgdGhpcy5jb25maWcuY3Vyc29yLnJhZGl1cyxcbiAgICAgICAgZGF0YS5jbGllbnRzW2ldLmN1cnNvci55ICsgdGhpcy5jb25maWcuY3Vyc29yLnJhZGl1cyAvIDIgLSAxMCxcbiAgICAgICAgJyNmZmYnLFxuICAgICAgICAxMixcbiAgICAgICAgJ0FyaWFsJ1xuICAgICAgKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2FtZUJ1aWxkZXIoKSB7XG4gIGxldCBnYW1lID0gYm9vdChFbmdpbmUsIERFRkFVTFQsIHt9LCBkb2N1bWVudC5ib2R5KTtcbiAgcmV0dXJuIGdhbWU7XG59XG4iLCJpbXBvcnQgeyBkZWJvdW5jZSwgaXMsIHBvaW50ZXJFdmVudFRvWFkgfSBmcm9tICcuL2Z1bmN0aW9uJztcblxuZXhwb3J0IGNsYXNzIENhbnZhczJERnhCYXNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgZWxlLCBjb25maWcsIGRlZmF1bHRDb25maWcsIHZpcnR1YWxQYXJlbnRcbiAgKSB7XG4gICAgY29uZmlnID0gaXMub2JqKGNvbmZpZykgPyBjb25maWcgOiB7fTtcbiAgICBkZWZhdWx0Q29uZmlnID0gaXMub2JqKGRlZmF1bHRDb25maWcpID8gZGVmYXVsdENvbmZpZyA6IHt9O1xuICAgIHRoaXMuY29uZmlnID0gT2JqZWN0LmFzc2lnbihkZWZhdWx0Q29uZmlnLCBjb25maWcpO1xuICAgIHRoaXMuZWxlID0gZWxlO1xuICAgIHRoaXMuZnJhbWVDb3VudCA9IDA7XG4gICAgdGhpcy5tb3VzZSA9IHtcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwXG4gICAgfTtcbiAgICB0aGlzLnZpcnR1YWxQYXJlbnQgPSB2aXJ0dWFsUGFyZW50O1xuICAgIHRoaXMuY3R4ID0gbnVsbDtcbiAgICB0aGlzLmZyYW1lSXNQYXVzZWQgPSBmYWxzZTtcbiAgICB0aGlzLmlzQ2xpY2sgPSBmYWxzZTtcbiAgICB0aGlzLmNhbnZhc1NpemVmaXhlZCA9IGZhbHNlO1xuICAgIHRoaXMucHJldmlvdXNGcmFtZVRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICB0aGlzLmluaXRCYXNlKCk7XG4gIH1cbiAgaW5pdEJhc2UoKSB7XG5cbiAgICBpZiAodGhpcy5lbGUudGFnTmFtZSAhPT0gJ0NBTlZBUycpIHtcbiAgICAgIGNvbnN0IGN2cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuXG4gICAgICB0aGlzLmVsZS5hcHBlbmRDaGlsZChjdnMpO1xuXG4gICAgICB0aGlzLmN2cyA9IGN2cztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmN2cyA9IHRoaXMuZWxlO1xuICAgIH1cblxuICAgIHRoaXMuY3R4ID0gdGhpcy5jdnMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICB0aGlzLnRyaWdnZXJSZXNpemluZ01lY2hhbmlzbSgpO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGRlYm91bmNlKCgpID0+IHtcbiAgICAgIHRoaXMudHJpZ2dlclJlc2l6aW5nTWVjaGFuaXNtKCk7XG4gICAgfSwgNTAwKSk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndmlzaWJpbGl0eWNoYW5nZScsICgpID0+IHtcbiAgICAgIGlmIChkb2N1bWVudC52aXNpYmlsaXR5U3RhdGUgIT09IFwidmlzaWJsZVwiKSB7XG4gICAgICAgIHRoaXMuZnJhbWVJc1BhdXNlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLmFkZEV2ZW50SGFuZGxlcigpO1xuXG4gICAgdGhpcy5yZWZyZXNoQmFzZUZyYW1lQ291bnRlcigpO1xuXG4gIH1cbiAgcmVmcmVzaEJhc2VGcmFtZUNvdW50ZXIoKSB7XG4gICAgbGV0IHRoaXNGcmFtZVRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICB0aGlzLnRpbWVFbGFwc2VkID0gKHRoaXNGcmFtZVRpbWUgLSB0aGlzLnByZXZpb3VzRnJhbWVUaW1lKSAvIDEwMDA7XG4gICAgaWYgKHRoaXMuZnJhbWVJc1BhdXNlZCkge1xuICAgICAgdGhpcy50aW1lRWxhcHNlZCA9IDA7XG4gICAgICB0aGlzLmZyYW1lSXNQYXVzZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5mcmFtZUNvdW50ICs9IDE7XG4gICAgdGhpcy5wcmV2aW91c0ZyYW1lVGltZSA9IHRoaXNGcmFtZVRpbWVcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgdGhpcy5yZWZyZXNoQmFzZUZyYW1lQ291bnRlcigpO1xuICAgIH0pXG4gIH1cblxuICB2aXJ0dWFsUGFyZW50VmFsaWRhdGlvbigpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuYm9keS5jb250YWlucyh0aGlzLnZpcnR1YWxQYXJlbnQpIHx8IHRoaXMudmlydHVhbFBhcmVudCA9PT0gZG9jdW1lbnQuYm9keTtcbiAgfVxuXG4gIHRyaWdnZXJSZXNpemluZ01lY2hhbmlzbSgpIHtcbiAgICBpZiAodGhpcy5jYW52YXNTaXplZml4ZWQpIHJldHVybjtcbiAgICBpZiAodGhpcy5lbGUudGFnTmFtZSAhPT0gJ0NBTlZBUycpIHtcbiAgICAgIGxldCBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0O1xuICAgICAgaWYgKHRoaXMudmlydHVhbFBhcmVudFZhbGlkYXRpb24oKSkge1xuICAgICAgICBjYW52YXNXaWR0aCA9IHRoaXMudmlydHVhbFBhcmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcbiAgICAgICAgY2FudmFzSGVpZ2h0ID0gdGhpcy52aXJ0dWFsUGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjYW52YXNXaWR0aCA9IHRoaXMuZWxlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICAgICAgICBjYW52YXNIZWlnaHQgPSB0aGlzLmVsZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG4gICAgICB9XG4gICAgICB0aGlzLmN2cy53aWR0aCA9IGNhbnZhc1dpZHRoO1xuICAgICAgdGhpcy5jdnMuaGVpZ2h0ID0gY2FudmFzSGVpZ2h0O1xuXG5cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBsZXQgY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodDtcbiAgICAgIGlmICh0aGlzLnZpcnR1YWxQYXJlbnRWYWxpZGF0aW9uKCkpIHtcbiAgICAgICAgY2FudmFzV2lkdGggPSB0aGlzLnZpcnR1YWxQYXJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gICAgICAgIGNhbnZhc0hlaWdodCA9IHRoaXMudmlydHVhbFBhcmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgY2FudmFzV2lkdGggPSB0aGlzLmN2cy5wYXJlbnRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICAgICAgICBjYW52YXNIZWlnaHQgPSB0aGlzLmN2cy5wYXJlbnRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcbiAgICAgIH1cbiAgICAgIHRoaXMuY3ZzLndpZHRoID0gY2FudmFzV2lkdGg7XG4gICAgICB0aGlzLmN2cy5oZWlnaHQgPSBjYW52YXNIZWlnaHQ7XG5cbiAgICB9XG4gIH1cblxuICBzZXRDYW52YXNTaXplKHdpZHRoLCBoZWlnaHQpIHtcbiAgICB0aGlzLmNhbnZhc1NpemVmaXhlZCA9IHRydWU7XG4gICAgdGhpcy5jdnMud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLmN2cy5oZWlnaHQgPSBoZWlnaHQ7XG4gIH1cblxuICBiYWNrZ3JvdW5kKGNvbG9yKSB7XG4gICAgdGhpcy5jdHguc2F2ZSgpO1xuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgIHRoaXMuY3R4LmZpbGxSZWN0KDAsIDAsIHRoaXMuY3ZzLndpZHRoLCB0aGlzLmN2cy5oZWlnaHQpO1xuICAgIHRoaXMuY3R4LnJlc3RvcmUoKTtcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmN2cy53aWR0aCwgdGhpcy5jdnMuaGVpZ2h0KTtcbiAgfVxuXG4gIGFkZEV2ZW50SGFuZGxlcigpIHtcblxuICAgIHRoaXMuY3ZzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5pc0NsaWNrID0gdHJ1ZTtcbiAgICB9KVxuICAgIHRoaXMuY3ZzLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCAoKSA9PiB7XG4gICAgICB0aGlzLmlzQ2xpY2sgPSB0cnVlO1xuXG4gICAgfSlcblxuICAgIHRoaXMuY3ZzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChlKSA9PiB7XG4gICAgICBsZXQgcG9zID0gcG9pbnRlckV2ZW50VG9YWShlKTtcbiAgICAgIHRoaXMubW91c2UgPSB7XG4gICAgICAgIHg6IHBvcy54LFxuICAgICAgICB5OiBwb3MueVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLmN2cy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCAoZSkgPT4ge1xuICAgICAgbGV0IHBvcyA9IHBvaW50ZXJFdmVudFRvWFkoZSk7XG4gICAgICB0aGlzLm1vdXNlID0ge1xuICAgICAgICB4OiBwb3MueCxcbiAgICAgICAgeTogcG9zLnlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvb3QoY3RvciwgZGVmYXVsdENvbmZpZywgY29uZmlnLCB0YXJnZXRFbGUsIHZpcnR1YWxQYXJlbnQpIHtcbiAgbGV0IGN2cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcbiAgY3ZzID0gY3ZzID8gY3ZzIDogZG9jdW1lbnQuYm9keTtcbiAgbGV0IGVsZSA9IHRhcmdldEVsZSA/IHRhcmdldEVsZSA6IGN2cztcbiAgbGV0IHRyaWdnZXI7XG4gIGxldCBib290UHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xuICAgIHRyaWdnZXIgPSAoKSA9PiB7XG4gICAgICBsZXQgaW5zdGFuY2UgPSBuZXcgY3RvcihlbGUsIGNvbmZpZywgZGVmYXVsdENvbmZpZywgdmlydHVhbFBhcmVudCk7XG4gICAgICByZXMoaW5zdGFuY2UpO1xuICAgIH07XG4gIH0pO1xuXG4gIGxldCBjb250cm9sbGVyID0ge1xuICAgIHByb21pc2U6IGJvb3RQcm9taXNlLFxuICAgIHRyaWdnZXI6IHRyaWdnZXJcbiAgfVxuXG4gIHJldHVybiBjb250cm9sbGVyO1xufSIsImV4cG9ydCBmdW5jdGlvbiAkKHNlbGVjdG9yKSB7XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZShzZWxlY3Rvciwgc3RhdHVzKSB7XG4gIGxldCBzdHlsZVN0ciA9IHN0YXR1cyA/ICdibG9jaycgOiAnbm9uZSdcbiAgJChzZWxlY3Rvcikuc2V0QXR0cmlidXRlKCdzdHlsZScsIGBkaXNwbGF5OiR7c3R5bGVTdHJ9YCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVDbGFzcyhzZWxlY3RvciwgY2xhc3NuYW1lLCBzdGF0dXMpIHtcbiAgbGV0IGFjdGlvbiA9IHN0YXR1cyA/ICdhZGQnIDogJ3JlbW92ZSc7XG4gICQoc2VsZWN0b3IpLmNsYXNzTGlzdFthY3Rpb25dKGNsYXNzbmFtZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbWl0KGV2ZW50TmFtZSkge1xuICBsZXQgc29tZUV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0V2ZW50Jyk7XG4gIHNvbWVFdmVudC5pbml0RXZlbnQoZXZlbnROYW1lLCB0cnVlLCB0cnVlKTtcbiAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChzb21lRXZlbnQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyZW50cyhub2RlLCBzZWxlY3Rvcikge1xuICBsZXQgY3VycmVudCA9IG5vZGUsXG4gICAgbGlzdCA9IFtdO1xuICB3aGlsZSAoY3VycmVudC5wYXJlbnROb2RlICE9IG51bGwgJiYgY3VycmVudC5wYXJlbnROb2RlICE9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICAgIGxpc3QucHVzaChjdXJyZW50LnBhcmVudE5vZGUpO1xuICAgIGN1cnJlbnQgPSBjdXJyZW50LnBhcmVudE5vZGU7XG4gIH1cbiAgcmV0dXJuIGxpc3QuZmlsdGVyKChvLCBpKSA9PiB7XG4gICAgcmV0dXJuIG8ubWF0Y2hlcyhzZWxlY3RvcilcbiAgfSlcbn0iLCJjb25zdCBNZXJzZW5uZVR3aXN0ZXIgPSByZXF1aXJlKCdtZXJzZW5uZS10d2lzdGVyJyk7XG5jb25zdCBNVCA9IG5ldyBNZXJzZW5uZVR3aXN0ZXIoKTtcblxuXG5leHBvcnQgZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgZGVsYXkpIHtcbiAgbGV0IHRpbWVyID0gbnVsbDtcbiAgY29uc3QgJHRoaXMgPSB0aGlzO1xuICByZXR1cm4gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRleHQgPSAkdGhpcztcbiAgICBjb25zdCBhcmdzID0gYXJndW1lbnRzO1xuICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgfSwgZGVsYXkpO1xuICB9O1xufVxuXG5leHBvcnQgY29uc3QgaXMgPSB7XG4gIGFycjogYSA9PiBBcnJheS5pc0FycmF5KGEpLFxuICBvYmo6IGEgPT4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGEpLmluZGV4T2YoJ09iamVjdCcpID4gLTEsXG4gIHB0aDogYSA9PiBpcy5vYmooYSkgJiYgYS5oYXNPd25Qcm9wZXJ0eSgndG90YWxMZW5ndGgnKSxcbiAgc3ZnOiBhID0+IGEgaW5zdGFuY2VvZiBTVkdFbGVtZW50LFxuICBpbnA6IGEgPT4gYSBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQsXG4gIGRvbTogYSA9PiBhLm5vZGVUeXBlIHx8IGlzLnN2ZyhhKSxcbiAgc3RyOiBhID0+IHR5cGVvZiBhID09PSAnc3RyaW5nJyxcbiAgZm5jOiBhID0+IHR5cGVvZiBhID09PSAnZnVuY3Rpb24nLFxuICB1bmQ6IGEgPT4gdHlwZW9mIGEgPT09ICd1bmRlZmluZWQnLFxuICBuaWw6IGEgPT4gaXMudW5kKGEpIHx8IGEgPT09IG51bGwsXG4gIGhleDogYSA9PiAvKF4jWzAtOUEtRl17Nn0kKXwoXiNbMC05QS1GXXszfSQpL2kudGVzdChhKSxcbiAgcmdiYTogYSA9PiAvXnJnYmEvLnRlc3QoYSksXG4gIHJnYjogYSA9PiAvXnJnYi8udGVzdChhKSxcbiAgaHNsOiBhID0+IC9eaHNsLy50ZXN0KGEpLFxuICBjb2w6IGEgPT4gKGlzLmhleChhKSB8fCBpcy5yZ2IoYSkgfHwgaXMuaHNsKGEpKSxcbiAga2V5OiBhID0+ICFkZWZhdWx0SW5zdGFuY2VTZXR0aW5ncy5oYXNPd25Qcm9wZXJ0eShhKSAmJiAhZGVmYXVsdFR3ZWVuU2V0dGluZ3MuaGFzT3duUHJvcGVydHkoYSkgJiYgYSAhPT0gJ3RhcmdldHMnICYmIGEgIT09ICdrZXlmcmFtZXMnLFxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tV2l0aGluUmFuZ2UobWluLCBtYXgsIHNlZWQpIHtcbiAgcmV0dXJuIE1ULnJhbmRvbShzZWVkKSAqIChtYXggLSBtaW4pICsgbWluO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzdGFuY2UoeDAsIHkwLCB4MSwgeTEpIHtcbiAgcmV0dXJuIE1hdGguc3FydCgoeDEgLSB4MCkgKiAoeDEgLSB4MCkgKyAoeTEgLSB5MCkgKiAoeTEgLSB5MCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVncmVlVG9SYWRpYW4oZGVncmVlKSB7XG4gIHJldHVybiAoZGVncmVlIC8gMTgwKSAqIE1hdGguUEk7XG59XG5cbi8qKlxuICog57Wx5LiAIHRvdWNoRXZlbnQvbW91c2VFdmVudCDnmoTkuovku7bop7jnmbzluqfmqJnlj5blvpfmlrnlvI9cbiAqIEBleHBvcnRcbiAqIEBwYXJhbSB7b2JqZWN0fSAg5YKz5YWl55qEZXZlbnQg54mp5Lu2XG4gKiBAcmV0dXJucyB7T2JqZWN0fSDkuIDlgIvnianku7YsIOWFp+WQq+S6i+S7tuinuOeZvOW6p+aomeeahFgvWSDluqfmqJnlgLxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBvaW50ZXJFdmVudFRvWFkoZSkge1xuICB2YXIgb3V0ID0geyB4OiAwLCB5OiAwIH07XG4gIGlmIChlLnR5cGUgPT09ICd0b3VjaHN0YXJ0JyB8fCBlLnR5cGUgPT09ICd0b3VjaG1vdmUnIHx8IGUudHlwZSA9PT0gJ3RvdWNoZW5kJyB8fCBlLnR5cGUgPT09ICd0b3VjaGNhbmNlbCcpIHtcbiAgICB2YXIgdG91Y2ggPSBlLm9yaWdpbmFsRXZlbnQudG91Y2hlc1swXSB8fCBlLm9yaWdpbmFsRXZlbnQuY2hhbmdlZFRvdWNoZXNbMF07XG4gICAgb3V0LnggPSB0b3VjaC5wYWdlWDtcbiAgICBvdXQueSA9IHRvdWNoLnBhZ2VZO1xuICB9IGVsc2UgaWYgKGUudHlwZSA9PT0gJ21vdXNlZG93bicgfHwgZS50eXBlID09PSAnbW91c2V1cCcgfHwgZS50eXBlID09PSAnbW91c2Vtb3ZlJyB8fCBlLnR5cGUgPT09ICdtb3VzZW92ZXInIHx8IGUudHlwZSA9PT0gJ21vdXNlb3V0JyB8fCBlLnR5cGUgPT09ICdtb3VzZWVudGVyJyB8fCBlLnR5cGUgPT09ICdtb3VzZWxlYXZlJykge1xuICAgIG91dC54ID0gZS5wYWdlWDtcbiAgICBvdXQueSA9IGUucGFnZVk7XG4gIH1cbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiDnm7TmjqXlkbzlj6toYXNPd25Qcm9wZXJ0eeeahOWOn+Wei+aWueazlSjnlKjlnKhoYXNPd25Qcm9wZXJ0eeiiq+aUueWLlemBjueahOeLgOazgSlcbiAqXG4gKiBAZXhwb3J0XG4gKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0IOebruaomeeJqeS7tlxuICogQHBhcmFtIHtzdHJpbmd9IHByb3Ag55uu5qiZcHJvcFxuICogQHJldHVybnMge2Jvb2xlYW59IOaYry/lkKZcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRhcmdldEhhc1Byb3AodGFyZ2V0LCBwcm9wKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodGFyZ2V0LCBwcm9wKTtcbn1cblxuLyoqXG4gKiDnorroqo3kuIDlgIvorormlbgv5YC85piv5ZCm54K656m6KDDkuI3nrpfnqbrlgLwpXG4gKiBAZXhwb3J0XG4gKiBAcGFyYW0geyp9IHZhbFxuICogQHJldHVybnMge2Jvb2xlYW59IOaYry/lkKZcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzRW1wdHkodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnbnVtYmVyJyA/IGlzTmFOKHZhbCkgOiAhdmFsO1xufVxuXG5cbmZ1bmN0aW9uIHJnYlRvUmdiYShyZ2JWYWx1ZSkge1xuICBjb25zdCByZ2IgPSAvcmdiXFwoKFxcZCssXFxzKltcXGRdKyxcXHMqW1xcZF0rKVxcKS9nLmV4ZWMocmdiVmFsdWUpO1xuICByZXR1cm4gcmdiID8gYHJnYmEoJHtyZ2JbMV19LDEpYCA6IHJnYlZhbHVlO1xufVxuXG5mdW5jdGlvbiBoZXhUb1JnYmEoaGV4VmFsdWUpIHtcbiAgY29uc3Qgcmd4ID0gL14jPyhbYS1mXFxkXSkoW2EtZlxcZF0pKFthLWZcXGRdKSQvaTtcbiAgY29uc3QgaGV4ID0gaGV4VmFsdWUucmVwbGFjZShyZ3gsIChtLCByLCBnLCBiKSA9PiByICsgciArIGcgKyBnICsgYiArIGIpO1xuICBjb25zdCByZ2IgPSAvXiM/KFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pJC9pLmV4ZWMoaGV4KTtcbiAgY29uc3QgciA9IHBhcnNlSW50KHJnYlsxXSwgMTYpO1xuICBjb25zdCBnID0gcGFyc2VJbnQocmdiWzJdLCAxNik7XG4gIGNvbnN0IGIgPSBwYXJzZUludChyZ2JbM10sIDE2KTtcbiAgcmV0dXJuIGByZ2JhKCR7cn0sJHtnfSwke2J9LDEpYDtcbn1cblxuZnVuY3Rpb24gaHNsVG9SZ2JhKGhzbFZhbHVlKSB7XG4gIGNvbnN0IGhzbCA9IC9oc2xcXCgoXFxkKyksXFxzKihbXFxkLl0rKSUsXFxzKihbXFxkLl0rKSVcXCkvZy5leGVjKGhzbFZhbHVlKSB8fCAvaHNsYVxcKChcXGQrKSxcXHMqKFtcXGQuXSspJSxcXHMqKFtcXGQuXSspJSxcXHMqKFtcXGQuXSspXFwpL2cuZXhlYyhoc2xWYWx1ZSk7XG4gIGNvbnN0IGggPSBwYXJzZUludChoc2xbMV0sIDEwKSAvIDM2MDtcbiAgY29uc3QgcyA9IHBhcnNlSW50KGhzbFsyXSwgMTApIC8gMTAwO1xuICBjb25zdCBsID0gcGFyc2VJbnQoaHNsWzNdLCAxMCkgLyAxMDA7XG4gIGNvbnN0IGEgPSBoc2xbNF0gfHwgMTtcbiAgZnVuY3Rpb24gaHVlMnJnYihwLCBxLCB0KSB7XG4gICAgaWYgKHQgPCAwKSB0ICs9IDE7XG4gICAgaWYgKHQgPiAxKSB0IC09IDE7XG4gICAgaWYgKHQgPCAxIC8gNikgcmV0dXJuIHAgKyAocSAtIHApICogNiAqIHQ7XG4gICAgaWYgKHQgPCAxIC8gMikgcmV0dXJuIHE7XG4gICAgaWYgKHQgPCAyIC8gMykgcmV0dXJuIHAgKyAocSAtIHApICogKDIgLyAzIC0gdCkgKiA2O1xuICAgIHJldHVybiBwO1xuICB9XG4gIGxldCByLCBnLCBiO1xuICBpZiAocyA9PSAwKSB7XG4gICAgciA9IGcgPSBiID0gbDtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBxID0gbCA8IDAuNSA/IGwgKiAoMSArIHMpIDogbCArIHMgLSBsICogcztcbiAgICBjb25zdCBwID0gMiAqIGwgLSBxO1xuICAgIHIgPSBodWUycmdiKHAsIHEsIGggKyAxIC8gMyk7XG4gICAgZyA9IGh1ZTJyZ2IocCwgcSwgaCk7XG4gICAgYiA9IGh1ZTJyZ2IocCwgcSwgaCAtIDEgLyAzKTtcbiAgfVxuICByZXR1cm4gYHJnYmEoJHtyICogMjU1fSwke2cgKiAyNTV9LCR7YiAqIDI1NX0sJHthfSlgO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29sb3JUb1JnYmEodmFsKSB7XG4gIGlmIChpcy5yZ2IodmFsKSkgcmV0dXJuIHJnYlRvUmdiYSh2YWwpO1xuICBpZiAoaXMuaGV4KHZhbCkpIHJldHVybiBoZXhUb1JnYmEodmFsKTtcbiAgaWYgKGlzLmhzbCh2YWwpKSByZXR1cm4gaHNsVG9SZ2JhKHZhbCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDaGFubmVsVmFsdWVzRnJvbVJnYmEocmdiYSkge1xuICByZXR1cm4gcmdiYS5yZXBsYWNlKC9eKHJnYnxyZ2JhKVxcKC8sICcnKS5yZXBsYWNlKC9cXCkkLywgJycpLnJlcGxhY2UoL1xccy9nLCAnJykuc3BsaXQoJywnKS5tYXAoeCA9PiBwYXJzZUludCh4KSk7XG59XG5cbiIsImV4cG9ydCBmdW5jdGlvbiBkcmF3U3F1YXJlKGN0eCwgeCwgeSwgd2lkdGgsIGNvbG9yLCBhbHBoYSkge1xuICBjdHguc2F2ZSgpO1xuICBjdHguZmlsbFN0eWxlID0gY29sb3I7XG4gIGN0eC5nbG9iYWxBbHBoYSA9IGFscGhhO1xuICBjdHguZmlsbFJlY3QoeCAtIHdpZHRoIC8gMiwgeSAtIHdpZHRoIC8gMiwgd2lkdGgsIHdpZHRoKTtcbiAgY3R4LnJlc3RvcmUoKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBkcmF3Q2lyY2xlKGN0eCwgeCwgeSwgd2lkdGgsIGNvbG9yLCBhbHBoYSkge1xuICBjdHguc2F2ZSgpXG4gIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgY3R4Lmdsb2JhbEFscGhhID0gYWxwaGE7XG4gIGN0eC5iZWdpblBhdGgoKTtcbiAgY3R4LmFyYyh4LCB5LCB3aWR0aCAvIDIsIDAsIE1hdGguUEkgKiAyLCB0cnVlKTtcbiAgY3R4LmNsb3NlUGF0aCgpO1xuICBjdHguZmlsbCgpO1xuICBjdHgucmVzdG9yZSgpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGRyYXdMaW5lKGN0eCwgeDAsIHkwLCB4MSwgeTEsIHN0cm9rZUNvbG9yLCBzdHJva2VXaWR0aCkge1xuICBjdHguc2F2ZSgpO1xuICBjdHguc3Ryb2tlU3R5bGUgPSBzdHJva2VDb2xvcjtcbiAgY3R4LmxpbmVXaWR0aCA9IHN0cm9rZVdpZHRoO1xuICBjdHguYmVnaW5QYXRoKCk7XG4gIGN0eC5tb3ZlVG8oeDAsIHkwKTtcbiAgY3R4LmxpbmVUbyh4MSwgeTEpO1xuICBjdHguY2xvc2VQYXRoKCk7XG4gIGN0eC5zdHJva2UoKTtcbiAgY3R4LnJlc3RvcmUoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRyYXdUZXh0KGN0eCwgdGV4dENvbnRlbnQgPSAndGV4dCcsIHgsIHksIGNvbG9yID0gJyMwMDAnLCBmb250U2l6ZSA9IDEyLCBmb250ID0gJ0FyaWFsJykge1xuICBjdHguc2F2ZSgpO1xuICBjdHguZmlsbFN0eWxlID0gY29sb3I7XG4gIGN0eC5mb250ID0gYCR7Zm9udFNpemV9cHggJHtmb250fWA7XG4gIGN0eC5maWxsVGV4dCh0ZXh0Q29udGVudCwgeCwgeSk7XG4gIGN0eC5yZXN0b3JlKCk7XG59IiwiaW1wb3J0IHsgQ2FudmFzMkRGeEJhc2UsIGJvb3QgfSBmcm9tICcuL2xpYi9iYXNlJztcbmltcG9ydCB7IGRyYXdDaXJjbGUgfSBmcm9tICcuL2xpYi9zaGFwZSc7XG5pbXBvcnQgeyAkIH0gZnJvbSAnLi9saWIvZG9tJ1xuXG5jb25zdCBCQUxMX0FOSU1BVElPTl9ERUZBVUxUID0ge1xuICBhZnRlckltYWdlOiBmYWxzZSxcbiAgcmFkaXVzOiAyNSxcbiAgY29sb3I6ICdibHVlJyxcbiAgc3BlZWRYOiAxMDAwLFxuICBzcGVlZFk6IDEwMDAsXG4gIGFjY2VsZXJhdGlvblg6IDAsXG4gIGFjY2VsZXJhdGlvblk6IDAsXG4gIGZyaWN0aW9uWDogMSxcbiAgZnJpY3Rpb25ZOiAwLjk5OTdcbn1cblxuY29uc3QgU1BPVFNfQU5JTUFUSU9OX0RFRkFVTFQgPSB7XG4gIG1pblNpemU6IDEwLFxuICBtYXhTaXplOiAyMCxcbiAgcGVyaW9kOiAzMDAsXG4gIHN0ZXA6IDEwLFxuICBib3R0b21MYXllcjogbnVsbCxcbiAgY29sb3I6ICdyZ2JhKDAsMCwwLDAuMDMpJyxcbiAgY29sOiAxNSxcbiAgcm93OiAxNVxufVxuXG5jbGFzcyBCYXNpY1JlZmVsZWN0aW9uIGV4dGVuZHMgQ2FudmFzMkRGeEJhc2Uge1xuICBjb25zdHJ1Y3RvcihjYW52YXMsIGRlZmF1bHRDb25maWcsIGNvbmZpZywgdmlydHVhbFBhcmVudCkge1xuICAgIHN1cGVyKGNhbnZhcywgZGVmYXVsdENvbmZpZywgY29uZmlnLCB2aXJ0dWFsUGFyZW50KTtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuICBpbml0KCkge1xuICAgIHRoaXMuaW5pdEJhbGwoKTtcbiAgICB0aGlzLmFuaW1hdGVCYWxsKCk7XG4gIH1cbiAgaW5pdEJhbGwoKSB7XG4gICAgbGV0ICR0aGlzID0gdGhpcztcbiAgICB0aGlzLmJhbGwgPSB7XG4gICAgICBhZnRlckltYWdlOiAkdGhpcy5jb25maWcuYWZ0ZXJJbWFnZSxcbiAgICAgIGNvbG9yOiAkdGhpcy5jb25maWcuY29sb3IsXG4gICAgICByYWRpdXM6ICR0aGlzLmNvbmZpZy5yYWRpdXMsXG4gICAgICBsb2NhdGlvbjoge1xuICAgICAgICB4OiAkdGhpcy5jdnMud2lkdGggLyAyLFxuICAgICAgICB5OiAkdGhpcy5jdnMuaGVpZ2h0IC8gMixcbiAgICAgIH0sXG4gICAgICBzcGVlZDoge1xuICAgICAgICB4OiAkdGhpcy5jb25maWcuc3BlZWRYLFxuICAgICAgICB5OiAkdGhpcy5jb25maWcuc3BlZWRZXG4gICAgICB9LFxuICAgICAgYWNjZWxlcmF0aW9uOiB7XG4gICAgICAgIHg6ICR0aGlzLmNvbmZpZy5hY2NlbGVyYXRpb25YLFxuICAgICAgICB5OiAkdGhpcy5jb25maWcuYWNjZWxlcmF0aW9uWVxuICAgICAgfSxcbiAgICAgIGZyaWN0aW9uOiB7XG4gICAgICAgIHg6ICR0aGlzLmNvbmZpZy5mcmljdGlvblgsXG4gICAgICAgIHk6ICR0aGlzLmNvbmZpZy5mcmljdGlvbllcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZHJhd0JhbGwoKSB7XG4gICAgZHJhd0NpcmNsZSh0aGlzLmN0eCwgdGhpcy5iYWxsLmxvY2F0aW9uLngsIHRoaXMuYmFsbC5sb2NhdGlvbi55LCB0aGlzLmJhbGwucmFkaXVzICogMiwgdGhpcy5iYWxsLmNvbG9yKTtcbiAgfVxuICBhbmltYXRlQmFsbCgpIHtcbiAgICBsZXQgJHRoaXMgPSB0aGlzO1xuICAgIGlmICgkdGhpcy5iYWxsLmFmdGVySW1hZ2UgPT09IHRydWUpIHtcbiAgICAgICR0aGlzLmJhY2tncm91bmQoJ3JnYmEoMjU1LDI1NSwyNTUsMC4xKScpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICR0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgJHRoaXMuY3ZzLndpZHRoLCAkdGhpcy5jdnMuaGVpZ2h0KTtcbiAgICB9XG4gICAgJHRoaXMuY3R4LmRyYXdJbWFnZSgkdGhpcy5jb25maWcuYm90dG9tTGF5ZXIsIDAsIDApO1xuICAgICR0aGlzLmRyYXdCYWxsKCk7XG4gICAgJHRoaXMucmVmcmVzaExvY2F0aW9uKCk7XG4gICAgJHRoaXMucmVmcmVzaFNwZWVkKCk7XG4gICAgJHRoaXMuY2hlY2tCb3VuZGFyeSgpO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgkdGhpcy5hbmltYXRlQmFsbC5iaW5kKCR0aGlzKSk7XG4gIH1cblxuICByZWZyZXNoU3BlZWQoKSB7XG4gICAgbGV0IGR0ID0gdGhpcy50aW1lRWxhcHNlZDtcbiAgICB0aGlzLmJhbGwuc3BlZWQueCA9IHRoaXMuYmFsbC5zcGVlZC54ICogdGhpcy5iYWxsLmZyaWN0aW9uLnggKyB0aGlzLmJhbGwuYWNjZWxlcmF0aW9uLnggKiBkdDtcbiAgICB0aGlzLmJhbGwuc3BlZWQueSA9IHRoaXMuYmFsbC5zcGVlZC55ICogdGhpcy5iYWxsLmZyaWN0aW9uLnkgKyB0aGlzLmJhbGwuYWNjZWxlcmF0aW9uLnkgKiBkdDtcbiAgfVxuXG4gIHJlZnJlc2hMb2NhdGlvbigpIHtcbiAgICBsZXQgZHQgPSB0aGlzLnRpbWVFbGFwc2VkO1xuICAgIHRoaXMuYmFsbC5sb2NhdGlvbi54ICs9IHRoaXMuYmFsbC5zcGVlZC54ICogZHQ7XG4gICAgdGhpcy5iYWxsLmxvY2F0aW9uLnkgKz0gdGhpcy5iYWxsLnNwZWVkLnkgKiBkdDtcbiAgfVxuICBjaGVja0JvdW5kYXJ5KCkge1xuICAgIGxldCBiYWxsID0gdGhpcy5iYWxsO1xuICAgIGxldCBjYW52YXMgPSB0aGlzLmN2cztcbiAgICAvLyDnlbbnkIPmraPlnKjlupXnq69cbiAgICBpZiAoYmFsbC5sb2NhdGlvbi55ICsgYmFsbC5yYWRpdXMgPiBjYW52YXMuaGVpZ2h0KSB7XG4gICAgICAvLyDkuJTpgJ/luqbngrrmraPlgLzvvIjmnJ3kuIvvvIlcbiAgICAgIGlmIChiYWxsLnNwZWVkLnkgPiAwKSB7XG4gICAgICAgIGJhbGwuc3BlZWQueSA9IC1iYWxsLnNwZWVkLnk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIOeVtueQg+ato+WcqOmgguerr1xuICAgIGVsc2UgaWYgKGJhbGwubG9jYXRpb24ueSAtIGJhbGwucmFkaXVzIDwgMCkge1xuICAgICAgLy8g5LiU6YCf5bqm54K66LKg5YC877yI5pyd5LiK77yJXG4gICAgICBpZiAoYmFsbC5zcGVlZC55IDwgMCkge1xuICAgICAgICBiYWxsLnNwZWVkLnkgPSAtYmFsbC5zcGVlZC55O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIOeVtueQg+ato+WcqOWPs+err1xuICAgIGlmIChiYWxsLmxvY2F0aW9uLnggKyBiYWxsLnJhZGl1cyA+IGNhbnZhcy53aWR0aCkge1xuICAgICAgaWYgKGJhbGwuc3BlZWQueCA+IDApIHtcbiAgICAgICAgYmFsbC5zcGVlZC54ID0gLWJhbGwuc3BlZWQueDtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8g55W255CD5q2j5Zyo5bem56uvXG4gICAgZWxzZSBpZiAoYmFsbC5sb2NhdGlvbi54IC0gYmFsbC5yYWRpdXMgPCAwKSB7XG4gICAgICBpZiAoYmFsbC5zcGVlZC54IDwgMCkge1xuICAgICAgICBiYWxsLnNwZWVkLnggPSAtYmFsbC5zcGVlZC54O1xuICAgICAgfVxuICAgIH1cblxuICB9XG59XG5cbmNsYXNzIFNwb3RzQnVtcGluZyBleHRlbmRzIENhbnZhczJERnhCYXNlIHtcbiAgY29uc3RydWN0b3IoY2FudmFzLCBkZWZhdWx0Q29uZmlnLCBjb25maWcsIHZpcnR1YWxQYXJlbnQpIHtcbiAgICBzdXBlcihjYW52YXMsIGRlZmF1bHRDb25maWcsIGNvbmZpZywgdmlydHVhbFBhcmVudCk7XG4gICAgdGhpcy5zcG90c1NpemUgPSB0aGlzLmNvbmZpZy5taW5TaXplO1xuICAgIHRoaXMuZXhwYW5kID0gdHJ1ZTtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuICBpbml0KCkge1xuICAgIHRoaXMuYW5pbWF0ZSgpO1xuICB9XG5cbiAgYW5pbWF0ZSgpIHtcbiAgICBsZXQgJHRoaXMgPSB0aGlzO1xuICAgIHRoaXMuaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAkdGhpcy5jbGVhcigpO1xuICAgICAgJHRoaXMuZHJhd1Nwb3RzKCk7XG4gICAgfSwgdGhpcy5jb25maWcucGVyaW9kKVxuICB9XG5cbiAgZHJhd1Nwb3RzKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IHRoaXMuY29uZmlnLmNvbDsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8PSB0aGlzLmNvbmZpZy5jb2w7IGorKykge1xuICAgICAgICBkcmF3Q2lyY2xlKFxuICAgICAgICAgIHRoaXMuY3R4LFxuICAgICAgICAgIGkgKiB0aGlzLmN2cy53aWR0aCAvIHRoaXMuY29uZmlnLmNvbCxcbiAgICAgICAgICBqICogdGhpcy5jdnMuaGVpZ2h0IC8gdGhpcy5jb25maWcucm93LFxuICAgICAgICAgIHRoaXMuc3BvdHNTaXplLFxuICAgICAgICAgIHRoaXMuY29uZmlnLmNvbG9yLFxuICAgICAgICAgIDFcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5zcG90c1NpemUgLSAxIDwgdGhpcy5jb25maWcubWluU2l6ZSkge1xuICAgICAgdGhpcy5leHBhbmQgPSB0cnVlXG4gICAgfVxuICAgIGVsc2UgaWYgKHRoaXMuc3BvdHNTaXplICsgMSA+IHRoaXMuY29uZmlnLm1heFNpemUpIHtcbiAgICAgIHRoaXMuZXhwYW5kID0gZmFsc2VcbiAgICB9XG4gICAgaWYgKHRoaXMuZXhwYW5kKSB7XG4gICAgICB0aGlzLnNwb3RzU2l6ZSArPSB0aGlzLmNvbmZpZy5zdGVwO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuc3BvdHNTaXplIC09IHRoaXMuY29uZmlnLnN0ZXA7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0U3BsYXNoKCkge1xuICBsZXQgaW5pdGlhbFNjcmVlbiA9ICQoJyNpbml0aWFsLXNjcmVlbicpO1xuICBsZXQgdmlydHVhbENhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuXG4gIGxldCBzcG90QW5pbWF0aW9uID0gYm9vdChTcG90c0J1bXBpbmcsIFNQT1RTX0FOSU1BVElPTl9ERUZBVUxULCB7fSwgdmlydHVhbENhbnZhcywgaW5pdGlhbFNjcmVlbik7XG4gIHNwb3RBbmltYXRpb24ucHJvbWlzZS50aGVuKChpbnN0YW5jZSkgPT4ge1xuICAgIGJvb3QoQmFzaWNSZWZlbGVjdGlvbiwgQkFMTF9BTklNQVRJT05fREVGQVVMVCwge1xuICAgICAgYWZ0ZXJJbWFnZTogdHJ1ZSxcbiAgICAgIHJhZGl1czogNDAsXG4gICAgICBjb2xvcjogJ2dyZXknLFxuICAgICAgc3BlZWRYOiAxMDAwLFxuICAgICAgYm90dG9tTGF5ZXI6IGluc3RhbmNlLmN2cyxcbiAgICAgIHNwZWVkWTogMTAwMCxcbiAgICAgIGFjY2VsZXJhdGlvblg6IDAsXG4gICAgICBhY2NlbGVyYXRpb25ZOiA5ODAsXG4gICAgICBmcmljdGlvblg6IDEsXG4gICAgfSwgaW5pdGlhbFNjcmVlbikudHJpZ2dlcigpO1xuICB9KTtcbiAgc3BvdEFuaW1hdGlvbi50cmlnZ2VyKCk7XG59XG5cbiIsImV4cG9ydCBjb25zdCBkYXRhU3RvcmFnZSA9IHtcbiAgYmFsbDoge1xuICAgIHNwZWVkOiB7XG4gICAgICB4OiAwLFxuICAgICAgeTogMFxuICAgIH0sXG4gICAgcG9zaXRpb246IHtcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwXG4gICAgfVxuICB9LFxuICBjbGllbnRzOiBbXG5cbiAgXVxufVxuXG5leHBvcnQgY29uc3QgcGxheWVyUmVmID0ge1xuICBuYW1lOiAnPz8/JyxcbiAgbnVtYmVyOiAwXG59OyIsIlxuLyoqXG4gKiBFeHBvc2UgYEJhY2tvZmZgLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gQmFja29mZjtcblxuLyoqXG4gKiBJbml0aWFsaXplIGJhY2tvZmYgdGltZXIgd2l0aCBgb3B0c2AuXG4gKlxuICogLSBgbWluYCBpbml0aWFsIHRpbWVvdXQgaW4gbWlsbGlzZWNvbmRzIFsxMDBdXG4gKiAtIGBtYXhgIG1heCB0aW1lb3V0IFsxMDAwMF1cbiAqIC0gYGppdHRlcmAgWzBdXG4gKiAtIGBmYWN0b3JgIFsyXVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIEJhY2tvZmYob3B0cykge1xuICBvcHRzID0gb3B0cyB8fCB7fTtcbiAgdGhpcy5tcyA9IG9wdHMubWluIHx8IDEwMDtcbiAgdGhpcy5tYXggPSBvcHRzLm1heCB8fCAxMDAwMDtcbiAgdGhpcy5mYWN0b3IgPSBvcHRzLmZhY3RvciB8fCAyO1xuICB0aGlzLmppdHRlciA9IG9wdHMuaml0dGVyID4gMCAmJiBvcHRzLmppdHRlciA8PSAxID8gb3B0cy5qaXR0ZXIgOiAwO1xuICB0aGlzLmF0dGVtcHRzID0gMDtcbn1cblxuLyoqXG4gKiBSZXR1cm4gdGhlIGJhY2tvZmYgZHVyYXRpb24uXG4gKlxuICogQHJldHVybiB7TnVtYmVyfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5CYWNrb2ZmLnByb3RvdHlwZS5kdXJhdGlvbiA9IGZ1bmN0aW9uKCl7XG4gIHZhciBtcyA9IHRoaXMubXMgKiBNYXRoLnBvdyh0aGlzLmZhY3RvciwgdGhpcy5hdHRlbXB0cysrKTtcbiAgaWYgKHRoaXMuaml0dGVyKSB7XG4gICAgdmFyIHJhbmQgPSAgTWF0aC5yYW5kb20oKTtcbiAgICB2YXIgZGV2aWF0aW9uID0gTWF0aC5mbG9vcihyYW5kICogdGhpcy5qaXR0ZXIgKiBtcyk7XG4gICAgbXMgPSAoTWF0aC5mbG9vcihyYW5kICogMTApICYgMSkgPT0gMCAgPyBtcyAtIGRldmlhdGlvbiA6IG1zICsgZGV2aWF0aW9uO1xuICB9XG4gIHJldHVybiBNYXRoLm1pbihtcywgdGhpcy5tYXgpIHwgMDtcbn07XG5cbi8qKlxuICogUmVzZXQgdGhlIG51bWJlciBvZiBhdHRlbXB0cy5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkJhY2tvZmYucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24oKXtcbiAgdGhpcy5hdHRlbXB0cyA9IDA7XG59O1xuXG4vKipcbiAqIFNldCB0aGUgbWluaW11bSBkdXJhdGlvblxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuQmFja29mZi5wcm90b3R5cGUuc2V0TWluID0gZnVuY3Rpb24obWluKXtcbiAgdGhpcy5tcyA9IG1pbjtcbn07XG5cbi8qKlxuICogU2V0IHRoZSBtYXhpbXVtIGR1cmF0aW9uXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5CYWNrb2ZmLnByb3RvdHlwZS5zZXRNYXggPSBmdW5jdGlvbihtYXgpe1xuICB0aGlzLm1heCA9IG1heDtcbn07XG5cbi8qKlxuICogU2V0IHRoZSBqaXR0ZXJcbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkJhY2tvZmYucHJvdG90eXBlLnNldEppdHRlciA9IGZ1bmN0aW9uKGppdHRlcil7XG4gIHRoaXMuaml0dGVyID0gaml0dGVyO1xufTtcblxuIiwiLypcbiAqIGJhc2U2NC1hcnJheWJ1ZmZlclxuICogaHR0cHM6Ly9naXRodWIuY29tL25pa2xhc3ZoL2Jhc2U2NC1hcnJheWJ1ZmZlclxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxMiBOaWtsYXMgdm9uIEhlcnR6ZW5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqL1xuKGZ1bmN0aW9uKGNoYXJzKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgZXhwb3J0cy5lbmNvZGUgPSBmdW5jdGlvbihhcnJheWJ1ZmZlcikge1xuICAgIHZhciBieXRlcyA9IG5ldyBVaW50OEFycmF5KGFycmF5YnVmZmVyKSxcbiAgICBpLCBsZW4gPSBieXRlcy5sZW5ndGgsIGJhc2U2NCA9IFwiXCI7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKz0zKSB7XG4gICAgICBiYXNlNjQgKz0gY2hhcnNbYnl0ZXNbaV0gPj4gMl07XG4gICAgICBiYXNlNjQgKz0gY2hhcnNbKChieXRlc1tpXSAmIDMpIDw8IDQpIHwgKGJ5dGVzW2kgKyAxXSA+PiA0KV07XG4gICAgICBiYXNlNjQgKz0gY2hhcnNbKChieXRlc1tpICsgMV0gJiAxNSkgPDwgMikgfCAoYnl0ZXNbaSArIDJdID4+IDYpXTtcbiAgICAgIGJhc2U2NCArPSBjaGFyc1tieXRlc1tpICsgMl0gJiA2M107XG4gICAgfVxuXG4gICAgaWYgKChsZW4gJSAzKSA9PT0gMikge1xuICAgICAgYmFzZTY0ID0gYmFzZTY0LnN1YnN0cmluZygwLCBiYXNlNjQubGVuZ3RoIC0gMSkgKyBcIj1cIjtcbiAgICB9IGVsc2UgaWYgKGxlbiAlIDMgPT09IDEpIHtcbiAgICAgIGJhc2U2NCA9IGJhc2U2NC5zdWJzdHJpbmcoMCwgYmFzZTY0Lmxlbmd0aCAtIDIpICsgXCI9PVwiO1xuICAgIH1cblxuICAgIHJldHVybiBiYXNlNjQ7XG4gIH07XG5cbiAgZXhwb3J0cy5kZWNvZGUgPSAgZnVuY3Rpb24oYmFzZTY0KSB7XG4gICAgdmFyIGJ1ZmZlckxlbmd0aCA9IGJhc2U2NC5sZW5ndGggKiAwLjc1LFxuICAgIGxlbiA9IGJhc2U2NC5sZW5ndGgsIGksIHAgPSAwLFxuICAgIGVuY29kZWQxLCBlbmNvZGVkMiwgZW5jb2RlZDMsIGVuY29kZWQ0O1xuXG4gICAgaWYgKGJhc2U2NFtiYXNlNjQubGVuZ3RoIC0gMV0gPT09IFwiPVwiKSB7XG4gICAgICBidWZmZXJMZW5ndGgtLTtcbiAgICAgIGlmIChiYXNlNjRbYmFzZTY0Lmxlbmd0aCAtIDJdID09PSBcIj1cIikge1xuICAgICAgICBidWZmZXJMZW5ndGgtLTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgYXJyYXlidWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIoYnVmZmVyTGVuZ3RoKSxcbiAgICBieXRlcyA9IG5ldyBVaW50OEFycmF5KGFycmF5YnVmZmVyKTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrPTQpIHtcbiAgICAgIGVuY29kZWQxID0gY2hhcnMuaW5kZXhPZihiYXNlNjRbaV0pO1xuICAgICAgZW5jb2RlZDIgPSBjaGFycy5pbmRleE9mKGJhc2U2NFtpKzFdKTtcbiAgICAgIGVuY29kZWQzID0gY2hhcnMuaW5kZXhPZihiYXNlNjRbaSsyXSk7XG4gICAgICBlbmNvZGVkNCA9IGNoYXJzLmluZGV4T2YoYmFzZTY0W2krM10pO1xuXG4gICAgICBieXRlc1twKytdID0gKGVuY29kZWQxIDw8IDIpIHwgKGVuY29kZWQyID4+IDQpO1xuICAgICAgYnl0ZXNbcCsrXSA9ICgoZW5jb2RlZDIgJiAxNSkgPDwgNCkgfCAoZW5jb2RlZDMgPj4gMik7XG4gICAgICBieXRlc1twKytdID0gKChlbmNvZGVkMyAmIDMpIDw8IDYpIHwgKGVuY29kZWQ0ICYgNjMpO1xuICAgIH1cblxuICAgIHJldHVybiBhcnJheWJ1ZmZlcjtcbiAgfTtcbn0pKFwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrL1wiKTtcbiIsIlxyXG4vKipcclxuICogRXhwb3NlIGBFbWl0dGVyYC5cclxuICovXHJcblxyXG5pZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICBtb2R1bGUuZXhwb3J0cyA9IEVtaXR0ZXI7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbml0aWFsaXplIGEgbmV3IGBFbWl0dGVyYC5cclxuICpcclxuICogQGFwaSBwdWJsaWNcclxuICovXHJcblxyXG5mdW5jdGlvbiBFbWl0dGVyKG9iaikge1xyXG4gIGlmIChvYmopIHJldHVybiBtaXhpbihvYmopO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIE1peGluIHRoZSBlbWl0dGVyIHByb3BlcnRpZXMuXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcclxuICogQHJldHVybiB7T2JqZWN0fVxyXG4gKiBAYXBpIHByaXZhdGVcclxuICovXHJcblxyXG5mdW5jdGlvbiBtaXhpbihvYmopIHtcclxuICBmb3IgKHZhciBrZXkgaW4gRW1pdHRlci5wcm90b3R5cGUpIHtcclxuICAgIG9ialtrZXldID0gRW1pdHRlci5wcm90b3R5cGVba2V5XTtcclxuICB9XHJcbiAgcmV0dXJuIG9iajtcclxufVxyXG5cclxuLyoqXHJcbiAqIExpc3RlbiBvbiB0aGUgZ2l2ZW4gYGV2ZW50YCB3aXRoIGBmbmAuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxyXG4gKiBAcmV0dXJuIHtFbWl0dGVyfVxyXG4gKiBAYXBpIHB1YmxpY1xyXG4gKi9cclxuXHJcbkVtaXR0ZXIucHJvdG90eXBlLm9uID1cclxuRW1pdHRlci5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKGV2ZW50LCBmbil7XHJcbiAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xyXG4gICh0aGlzLl9jYWxsYmFja3NbJyQnICsgZXZlbnRdID0gdGhpcy5fY2FsbGJhY2tzWyckJyArIGV2ZW50XSB8fCBbXSlcclxuICAgIC5wdXNoKGZuKTtcclxuICByZXR1cm4gdGhpcztcclxufTtcclxuXHJcbi8qKlxyXG4gKiBBZGRzIGFuIGBldmVudGAgbGlzdGVuZXIgdGhhdCB3aWxsIGJlIGludm9rZWQgYSBzaW5nbGVcclxuICogdGltZSB0aGVuIGF1dG9tYXRpY2FsbHkgcmVtb3ZlZC5cclxuICpcclxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXHJcbiAqIEByZXR1cm4ge0VtaXR0ZXJ9XHJcbiAqIEBhcGkgcHVibGljXHJcbiAqL1xyXG5cclxuRW1pdHRlci5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uKGV2ZW50LCBmbil7XHJcbiAgZnVuY3Rpb24gb24oKSB7XHJcbiAgICB0aGlzLm9mZihldmVudCwgb24pO1xyXG4gICAgZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuICB9XHJcblxyXG4gIG9uLmZuID0gZm47XHJcbiAgdGhpcy5vbihldmVudCwgb24pO1xyXG4gIHJldHVybiB0aGlzO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFJlbW92ZSB0aGUgZ2l2ZW4gY2FsbGJhY2sgZm9yIGBldmVudGAgb3IgYWxsXHJcbiAqIHJlZ2lzdGVyZWQgY2FsbGJhY2tzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcclxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cclxuICogQHJldHVybiB7RW1pdHRlcn1cclxuICogQGFwaSBwdWJsaWNcclxuICovXHJcblxyXG5FbWl0dGVyLnByb3RvdHlwZS5vZmYgPVxyXG5FbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9XHJcbkVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9XHJcbkVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbihldmVudCwgZm4pe1xyXG4gIHRoaXMuX2NhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrcyB8fCB7fTtcclxuXHJcbiAgLy8gYWxsXHJcbiAgaWYgKDAgPT0gYXJndW1lbnRzLmxlbmd0aCkge1xyXG4gICAgdGhpcy5fY2FsbGJhY2tzID0ge307XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8vIHNwZWNpZmljIGV2ZW50XHJcbiAgdmFyIGNhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrc1snJCcgKyBldmVudF07XHJcbiAgaWYgKCFjYWxsYmFja3MpIHJldHVybiB0aGlzO1xyXG5cclxuICAvLyByZW1vdmUgYWxsIGhhbmRsZXJzXHJcbiAgaWYgKDEgPT0gYXJndW1lbnRzLmxlbmd0aCkge1xyXG4gICAgZGVsZXRlIHRoaXMuX2NhbGxiYWNrc1snJCcgKyBldmVudF07XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8vIHJlbW92ZSBzcGVjaWZpYyBoYW5kbGVyXHJcbiAgdmFyIGNiO1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgY2FsbGJhY2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBjYiA9IGNhbGxiYWNrc1tpXTtcclxuICAgIGlmIChjYiA9PT0gZm4gfHwgY2IuZm4gPT09IGZuKSB7XHJcbiAgICAgIGNhbGxiYWNrcy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gUmVtb3ZlIGV2ZW50IHNwZWNpZmljIGFycmF5cyBmb3IgZXZlbnQgdHlwZXMgdGhhdCBub1xyXG4gIC8vIG9uZSBpcyBzdWJzY3JpYmVkIGZvciB0byBhdm9pZCBtZW1vcnkgbGVhay5cclxuICBpZiAoY2FsbGJhY2tzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgZGVsZXRlIHRoaXMuX2NhbGxiYWNrc1snJCcgKyBldmVudF07XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdGhpcztcclxufTtcclxuXHJcbi8qKlxyXG4gKiBFbWl0IGBldmVudGAgd2l0aCB0aGUgZ2l2ZW4gYXJncy5cclxuICpcclxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XHJcbiAqIEBwYXJhbSB7TWl4ZWR9IC4uLlxyXG4gKiBAcmV0dXJuIHtFbWl0dGVyfVxyXG4gKi9cclxuXHJcbkVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbihldmVudCl7XHJcbiAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xyXG5cclxuICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSlcclxuICAgICwgY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzWyckJyArIGV2ZW50XTtcclxuXHJcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xyXG4gIH1cclxuXHJcbiAgaWYgKGNhbGxiYWNrcykge1xyXG4gICAgY2FsbGJhY2tzID0gY2FsbGJhY2tzLnNsaWNlKDApO1xyXG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGNhbGxiYWNrcy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xyXG4gICAgICBjYWxsYmFja3NbaV0uYXBwbHkodGhpcywgYXJncyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdGhpcztcclxufTtcclxuXHJcbi8qKlxyXG4gKiBSZXR1cm4gYXJyYXkgb2YgY2FsbGJhY2tzIGZvciBgZXZlbnRgLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcclxuICogQHJldHVybiB7QXJyYXl9XHJcbiAqIEBhcGkgcHVibGljXHJcbiAqL1xyXG5cclxuRW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJzID0gZnVuY3Rpb24oZXZlbnQpe1xyXG4gIHRoaXMuX2NhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrcyB8fCB7fTtcclxuICByZXR1cm4gdGhpcy5fY2FsbGJhY2tzWyckJyArIGV2ZW50XSB8fCBbXTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBDaGVjayBpZiB0aGlzIGVtaXR0ZXIgaGFzIGBldmVudGAgaGFuZGxlcnMuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxyXG4gKiBAcmV0dXJuIHtCb29sZWFufVxyXG4gKiBAYXBpIHB1YmxpY1xyXG4gKi9cclxuXHJcbkVtaXR0ZXIucHJvdG90eXBlLmhhc0xpc3RlbmVycyA9IGZ1bmN0aW9uKGV2ZW50KXtcclxuICByZXR1cm4gISEgdGhpcy5saXN0ZW5lcnMoZXZlbnQpLmxlbmd0aDtcclxufTtcclxuIiwiLyoqXG4gKiBIZWxwZXJzLlxuICovXG5cbnZhciBzID0gMTAwMDtcbnZhciBtID0gcyAqIDYwO1xudmFyIGggPSBtICogNjA7XG52YXIgZCA9IGggKiAyNDtcbnZhciB3ID0gZCAqIDc7XG52YXIgeSA9IGQgKiAzNjUuMjU7XG5cbi8qKlxuICogUGFyc2Ugb3IgZm9ybWF0IHRoZSBnaXZlbiBgdmFsYC5cbiAqXG4gKiBPcHRpb25zOlxuICpcbiAqICAtIGBsb25nYCB2ZXJib3NlIGZvcm1hdHRpbmcgW2ZhbHNlXVxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfE51bWJlcn0gdmFsXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBAdGhyb3dzIHtFcnJvcn0gdGhyb3cgYW4gZXJyb3IgaWYgdmFsIGlzIG5vdCBhIG5vbi1lbXB0eSBzdHJpbmcgb3IgYSBudW1iZXJcbiAqIEByZXR1cm4ge1N0cmluZ3xOdW1iZXJ9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odmFsLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWw7XG4gIGlmICh0eXBlID09PSAnc3RyaW5nJyAmJiB2YWwubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiBwYXJzZSh2YWwpO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdudW1iZXInICYmIGlzRmluaXRlKHZhbCkpIHtcbiAgICByZXR1cm4gb3B0aW9ucy5sb25nID8gZm10TG9uZyh2YWwpIDogZm10U2hvcnQodmFsKTtcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgJ3ZhbCBpcyBub3QgYSBub24tZW1wdHkgc3RyaW5nIG9yIGEgdmFsaWQgbnVtYmVyLiB2YWw9JyArXG4gICAgICBKU09OLnN0cmluZ2lmeSh2YWwpXG4gICk7XG59O1xuXG4vKipcbiAqIFBhcnNlIHRoZSBnaXZlbiBgc3RyYCBhbmQgcmV0dXJuIG1pbGxpc2Vjb25kcy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBwYXJzZShzdHIpIHtcbiAgc3RyID0gU3RyaW5nKHN0cik7XG4gIGlmIChzdHIubGVuZ3RoID4gMTAwKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBtYXRjaCA9IC9eKC0/KD86XFxkKyk/XFwuP1xcZCspICoobWlsbGlzZWNvbmRzP3xtc2Vjcz98bXN8c2Vjb25kcz98c2Vjcz98c3xtaW51dGVzP3xtaW5zP3xtfGhvdXJzP3xocnM/fGh8ZGF5cz98ZHx3ZWVrcz98d3x5ZWFycz98eXJzP3x5KT8kL2kuZXhlYyhcbiAgICBzdHJcbiAgKTtcbiAgaWYgKCFtYXRjaCkge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgbiA9IHBhcnNlRmxvYXQobWF0Y2hbMV0pO1xuICB2YXIgdHlwZSA9IChtYXRjaFsyXSB8fCAnbXMnKS50b0xvd2VyQ2FzZSgpO1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlICd5ZWFycyc6XG4gICAgY2FzZSAneWVhcic6XG4gICAgY2FzZSAneXJzJzpcbiAgICBjYXNlICd5cic6XG4gICAgY2FzZSAneSc6XG4gICAgICByZXR1cm4gbiAqIHk7XG4gICAgY2FzZSAnd2Vla3MnOlxuICAgIGNhc2UgJ3dlZWsnOlxuICAgIGNhc2UgJ3cnOlxuICAgICAgcmV0dXJuIG4gKiB3O1xuICAgIGNhc2UgJ2RheXMnOlxuICAgIGNhc2UgJ2RheSc6XG4gICAgY2FzZSAnZCc6XG4gICAgICByZXR1cm4gbiAqIGQ7XG4gICAgY2FzZSAnaG91cnMnOlxuICAgIGNhc2UgJ2hvdXInOlxuICAgIGNhc2UgJ2hycyc6XG4gICAgY2FzZSAnaHInOlxuICAgIGNhc2UgJ2gnOlxuICAgICAgcmV0dXJuIG4gKiBoO1xuICAgIGNhc2UgJ21pbnV0ZXMnOlxuICAgIGNhc2UgJ21pbnV0ZSc6XG4gICAgY2FzZSAnbWlucyc6XG4gICAgY2FzZSAnbWluJzpcbiAgICBjYXNlICdtJzpcbiAgICAgIHJldHVybiBuICogbTtcbiAgICBjYXNlICdzZWNvbmRzJzpcbiAgICBjYXNlICdzZWNvbmQnOlxuICAgIGNhc2UgJ3NlY3MnOlxuICAgIGNhc2UgJ3NlYyc6XG4gICAgY2FzZSAncyc6XG4gICAgICByZXR1cm4gbiAqIHM7XG4gICAgY2FzZSAnbWlsbGlzZWNvbmRzJzpcbiAgICBjYXNlICdtaWxsaXNlY29uZCc6XG4gICAgY2FzZSAnbXNlY3MnOlxuICAgIGNhc2UgJ21zZWMnOlxuICAgIGNhc2UgJ21zJzpcbiAgICAgIHJldHVybiBuO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG59XG5cbi8qKlxuICogU2hvcnQgZm9ybWF0IGZvciBgbXNgLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBtc1xuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gZm10U2hvcnQobXMpIHtcbiAgdmFyIG1zQWJzID0gTWF0aC5hYnMobXMpO1xuICBpZiAobXNBYnMgPj0gZCkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gZCkgKyAnZCc7XG4gIH1cbiAgaWYgKG1zQWJzID49IGgpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIGgpICsgJ2gnO1xuICB9XG4gIGlmIChtc0FicyA+PSBtKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBtKSArICdtJztcbiAgfVxuICBpZiAobXNBYnMgPj0gcykge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gcykgKyAncyc7XG4gIH1cbiAgcmV0dXJuIG1zICsgJ21zJztcbn1cblxuLyoqXG4gKiBMb25nIGZvcm1hdCBmb3IgYG1zYC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gbXNcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGZtdExvbmcobXMpIHtcbiAgdmFyIG1zQWJzID0gTWF0aC5hYnMobXMpO1xuICBpZiAobXNBYnMgPj0gZCkge1xuICAgIHJldHVybiBwbHVyYWwobXMsIG1zQWJzLCBkLCAnZGF5Jyk7XG4gIH1cbiAgaWYgKG1zQWJzID49IGgpIHtcbiAgICByZXR1cm4gcGx1cmFsKG1zLCBtc0FicywgaCwgJ2hvdXInKTtcbiAgfVxuICBpZiAobXNBYnMgPj0gbSkge1xuICAgIHJldHVybiBwbHVyYWwobXMsIG1zQWJzLCBtLCAnbWludXRlJyk7XG4gIH1cbiAgaWYgKG1zQWJzID49IHMpIHtcbiAgICByZXR1cm4gcGx1cmFsKG1zLCBtc0FicywgcywgJ3NlY29uZCcpO1xuICB9XG4gIHJldHVybiBtcyArICcgbXMnO1xufVxuXG4vKipcbiAqIFBsdXJhbGl6YXRpb24gaGVscGVyLlxuICovXG5cbmZ1bmN0aW9uIHBsdXJhbChtcywgbXNBYnMsIG4sIG5hbWUpIHtcbiAgdmFyIGlzUGx1cmFsID0gbXNBYnMgPj0gbiAqIDEuNTtcbiAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBuKSArICcgJyArIG5hbWUgKyAoaXNQbHVyYWwgPyAncycgOiAnJyk7XG59XG4iLCIvKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuLyoqXG4gKiBUaGlzIGlzIHRoZSB3ZWIgYnJvd3NlciBpbXBsZW1lbnRhdGlvbiBvZiBgZGVidWcoKWAuXG4gKi9cblxuZXhwb3J0cy5mb3JtYXRBcmdzID0gZm9ybWF0QXJncztcbmV4cG9ydHMuc2F2ZSA9IHNhdmU7XG5leHBvcnRzLmxvYWQgPSBsb2FkO1xuZXhwb3J0cy51c2VDb2xvcnMgPSB1c2VDb2xvcnM7XG5leHBvcnRzLnN0b3JhZ2UgPSBsb2NhbHN0b3JhZ2UoKTtcbmV4cG9ydHMuZGVzdHJveSA9ICgoKSA9PiB7XG5cdGxldCB3YXJuZWQgPSBmYWxzZTtcblxuXHRyZXR1cm4gKCkgPT4ge1xuXHRcdGlmICghd2FybmVkKSB7XG5cdFx0XHR3YXJuZWQgPSB0cnVlO1xuXHRcdFx0Y29uc29sZS53YXJuKCdJbnN0YW5jZSBtZXRob2QgYGRlYnVnLmRlc3Ryb3koKWAgaXMgZGVwcmVjYXRlZCBhbmQgbm8gbG9uZ2VyIGRvZXMgYW55dGhpbmcuIEl0IHdpbGwgYmUgcmVtb3ZlZCBpbiB0aGUgbmV4dCBtYWpvciB2ZXJzaW9uIG9mIGBkZWJ1Z2AuJyk7XG5cdFx0fVxuXHR9O1xufSkoKTtcblxuLyoqXG4gKiBDb2xvcnMuXG4gKi9cblxuZXhwb3J0cy5jb2xvcnMgPSBbXG5cdCcjMDAwMENDJyxcblx0JyMwMDAwRkYnLFxuXHQnIzAwMzNDQycsXG5cdCcjMDAzM0ZGJyxcblx0JyMwMDY2Q0MnLFxuXHQnIzAwNjZGRicsXG5cdCcjMDA5OUNDJyxcblx0JyMwMDk5RkYnLFxuXHQnIzAwQ0MwMCcsXG5cdCcjMDBDQzMzJyxcblx0JyMwMENDNjYnLFxuXHQnIzAwQ0M5OScsXG5cdCcjMDBDQ0NDJyxcblx0JyMwMENDRkYnLFxuXHQnIzMzMDBDQycsXG5cdCcjMzMwMEZGJyxcblx0JyMzMzMzQ0MnLFxuXHQnIzMzMzNGRicsXG5cdCcjMzM2NkNDJyxcblx0JyMzMzY2RkYnLFxuXHQnIzMzOTlDQycsXG5cdCcjMzM5OUZGJyxcblx0JyMzM0NDMDAnLFxuXHQnIzMzQ0MzMycsXG5cdCcjMzNDQzY2Jyxcblx0JyMzM0NDOTknLFxuXHQnIzMzQ0NDQycsXG5cdCcjMzNDQ0ZGJyxcblx0JyM2NjAwQ0MnLFxuXHQnIzY2MDBGRicsXG5cdCcjNjYzM0NDJyxcblx0JyM2NjMzRkYnLFxuXHQnIzY2Q0MwMCcsXG5cdCcjNjZDQzMzJyxcblx0JyM5OTAwQ0MnLFxuXHQnIzk5MDBGRicsXG5cdCcjOTkzM0NDJyxcblx0JyM5OTMzRkYnLFxuXHQnIzk5Q0MwMCcsXG5cdCcjOTlDQzMzJyxcblx0JyNDQzAwMDAnLFxuXHQnI0NDMDAzMycsXG5cdCcjQ0MwMDY2Jyxcblx0JyNDQzAwOTknLFxuXHQnI0NDMDBDQycsXG5cdCcjQ0MwMEZGJyxcblx0JyNDQzMzMDAnLFxuXHQnI0NDMzMzMycsXG5cdCcjQ0MzMzY2Jyxcblx0JyNDQzMzOTknLFxuXHQnI0NDMzNDQycsXG5cdCcjQ0MzM0ZGJyxcblx0JyNDQzY2MDAnLFxuXHQnI0NDNjYzMycsXG5cdCcjQ0M5OTAwJyxcblx0JyNDQzk5MzMnLFxuXHQnI0NDQ0MwMCcsXG5cdCcjQ0NDQzMzJyxcblx0JyNGRjAwMDAnLFxuXHQnI0ZGMDAzMycsXG5cdCcjRkYwMDY2Jyxcblx0JyNGRjAwOTknLFxuXHQnI0ZGMDBDQycsXG5cdCcjRkYwMEZGJyxcblx0JyNGRjMzMDAnLFxuXHQnI0ZGMzMzMycsXG5cdCcjRkYzMzY2Jyxcblx0JyNGRjMzOTknLFxuXHQnI0ZGMzNDQycsXG5cdCcjRkYzM0ZGJyxcblx0JyNGRjY2MDAnLFxuXHQnI0ZGNjYzMycsXG5cdCcjRkY5OTAwJyxcblx0JyNGRjk5MzMnLFxuXHQnI0ZGQ0MwMCcsXG5cdCcjRkZDQzMzJ1xuXTtcblxuLyoqXG4gKiBDdXJyZW50bHkgb25seSBXZWJLaXQtYmFzZWQgV2ViIEluc3BlY3RvcnMsIEZpcmVmb3ggPj0gdjMxLFxuICogYW5kIHRoZSBGaXJlYnVnIGV4dGVuc2lvbiAoYW55IEZpcmVmb3ggdmVyc2lvbikgYXJlIGtub3duXG4gKiB0byBzdXBwb3J0IFwiJWNcIiBDU1MgY3VzdG9taXphdGlvbnMuXG4gKlxuICogVE9ETzogYWRkIGEgYGxvY2FsU3RvcmFnZWAgdmFyaWFibGUgdG8gZXhwbGljaXRseSBlbmFibGUvZGlzYWJsZSBjb2xvcnNcbiAqL1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29tcGxleGl0eVxuZnVuY3Rpb24gdXNlQ29sb3JzKCkge1xuXHQvLyBOQjogSW4gYW4gRWxlY3Ryb24gcHJlbG9hZCBzY3JpcHQsIGRvY3VtZW50IHdpbGwgYmUgZGVmaW5lZCBidXQgbm90IGZ1bGx5XG5cdC8vIGluaXRpYWxpemVkLiBTaW5jZSB3ZSBrbm93IHdlJ3JlIGluIENocm9tZSwgd2UnbGwganVzdCBkZXRlY3QgdGhpcyBjYXNlXG5cdC8vIGV4cGxpY2l0bHlcblx0aWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5wcm9jZXNzICYmICh3aW5kb3cucHJvY2Vzcy50eXBlID09PSAncmVuZGVyZXInIHx8IHdpbmRvdy5wcm9jZXNzLl9fbndqcykpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdC8vIEludGVybmV0IEV4cGxvcmVyIGFuZCBFZGdlIGRvIG5vdCBzdXBwb3J0IGNvbG9ycy5cblx0aWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci51c2VyQWdlbnQgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLm1hdGNoKC8oZWRnZXx0cmlkZW50KVxcLyhcXGQrKS8pKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0Ly8gSXMgd2Via2l0PyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xNjQ1OTYwNi8zNzY3NzNcblx0Ly8gZG9jdW1lbnQgaXMgdW5kZWZpbmVkIGluIHJlYWN0LW5hdGl2ZTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0LW5hdGl2ZS9wdWxsLzE2MzJcblx0cmV0dXJuICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLldlYmtpdEFwcGVhcmFuY2UpIHx8XG5cdFx0Ly8gSXMgZmlyZWJ1Zz8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMzk4MTIwLzM3Njc3M1xuXHRcdCh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuY29uc29sZSAmJiAod2luZG93LmNvbnNvbGUuZmlyZWJ1ZyB8fCAod2luZG93LmNvbnNvbGUuZXhjZXB0aW9uICYmIHdpbmRvdy5jb25zb2xlLnRhYmxlKSkpIHx8XG5cdFx0Ly8gSXMgZmlyZWZveCA+PSB2MzE/XG5cdFx0Ly8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9Ub29scy9XZWJfQ29uc29sZSNTdHlsaW5nX21lc3NhZ2VzXG5cdFx0KHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci51c2VyQWdlbnQgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLm1hdGNoKC9maXJlZm94XFwvKFxcZCspLykgJiYgcGFyc2VJbnQoUmVnRXhwLiQxLCAxMCkgPj0gMzEpIHx8XG5cdFx0Ly8gRG91YmxlIGNoZWNrIHdlYmtpdCBpbiB1c2VyQWdlbnQganVzdCBpbiBjYXNlIHdlIGFyZSBpbiBhIHdvcmtlclxuXHRcdCh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IudXNlckFnZW50ICYmIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5tYXRjaCgvYXBwbGV3ZWJraXRcXC8oXFxkKykvKSk7XG59XG5cbi8qKlxuICogQ29sb3JpemUgbG9nIGFyZ3VtZW50cyBpZiBlbmFibGVkLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gZm9ybWF0QXJncyhhcmdzKSB7XG5cdGFyZ3NbMF0gPSAodGhpcy51c2VDb2xvcnMgPyAnJWMnIDogJycpICtcblx0XHR0aGlzLm5hbWVzcGFjZSArXG5cdFx0KHRoaXMudXNlQ29sb3JzID8gJyAlYycgOiAnICcpICtcblx0XHRhcmdzWzBdICtcblx0XHQodGhpcy51c2VDb2xvcnMgPyAnJWMgJyA6ICcgJykgK1xuXHRcdCcrJyArIG1vZHVsZS5leHBvcnRzLmh1bWFuaXplKHRoaXMuZGlmZik7XG5cblx0aWYgKCF0aGlzLnVzZUNvbG9ycykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGMgPSAnY29sb3I6ICcgKyB0aGlzLmNvbG9yO1xuXHRhcmdzLnNwbGljZSgxLCAwLCBjLCAnY29sb3I6IGluaGVyaXQnKTtcblxuXHQvLyBUaGUgZmluYWwgXCIlY1wiIGlzIHNvbWV3aGF0IHRyaWNreSwgYmVjYXVzZSB0aGVyZSBjb3VsZCBiZSBvdGhlclxuXHQvLyBhcmd1bWVudHMgcGFzc2VkIGVpdGhlciBiZWZvcmUgb3IgYWZ0ZXIgdGhlICVjLCBzbyB3ZSBuZWVkIHRvXG5cdC8vIGZpZ3VyZSBvdXQgdGhlIGNvcnJlY3QgaW5kZXggdG8gaW5zZXJ0IHRoZSBDU1MgaW50b1xuXHRsZXQgaW5kZXggPSAwO1xuXHRsZXQgbGFzdEMgPSAwO1xuXHRhcmdzWzBdLnJlcGxhY2UoLyVbYS16QS1aJV0vZywgbWF0Y2ggPT4ge1xuXHRcdGlmIChtYXRjaCA9PT0gJyUlJykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpbmRleCsrO1xuXHRcdGlmIChtYXRjaCA9PT0gJyVjJykge1xuXHRcdFx0Ly8gV2Ugb25seSBhcmUgaW50ZXJlc3RlZCBpbiB0aGUgKmxhc3QqICVjXG5cdFx0XHQvLyAodGhlIHVzZXIgbWF5IGhhdmUgcHJvdmlkZWQgdGhlaXIgb3duKVxuXHRcdFx0bGFzdEMgPSBpbmRleDtcblx0XHR9XG5cdH0pO1xuXG5cdGFyZ3Muc3BsaWNlKGxhc3RDLCAwLCBjKTtcbn1cblxuLyoqXG4gKiBJbnZva2VzIGBjb25zb2xlLmRlYnVnKClgIHdoZW4gYXZhaWxhYmxlLlxuICogTm8tb3Agd2hlbiBgY29uc29sZS5kZWJ1Z2AgaXMgbm90IGEgXCJmdW5jdGlvblwiLlxuICogSWYgYGNvbnNvbGUuZGVidWdgIGlzIG5vdCBhdmFpbGFibGUsIGZhbGxzIGJhY2tcbiAqIHRvIGBjb25zb2xlLmxvZ2AuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuZXhwb3J0cy5sb2cgPSBjb25zb2xlLmRlYnVnIHx8IGNvbnNvbGUubG9nIHx8ICgoKSA9PiB7fSk7XG5cbi8qKlxuICogU2F2ZSBgbmFtZXNwYWNlc2AuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBzYXZlKG5hbWVzcGFjZXMpIHtcblx0dHJ5IHtcblx0XHRpZiAobmFtZXNwYWNlcykge1xuXHRcdFx0ZXhwb3J0cy5zdG9yYWdlLnNldEl0ZW0oJ2RlYnVnJywgbmFtZXNwYWNlcyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGV4cG9ydHMuc3RvcmFnZS5yZW1vdmVJdGVtKCdkZWJ1ZycpO1xuXHRcdH1cblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHQvLyBTd2FsbG93XG5cdFx0Ly8gWFhYIChAUWl4LSkgc2hvdWxkIHdlIGJlIGxvZ2dpbmcgdGhlc2U/XG5cdH1cbn1cblxuLyoqXG4gKiBMb2FkIGBuYW1lc3BhY2VzYC5cbiAqXG4gKiBAcmV0dXJuIHtTdHJpbmd9IHJldHVybnMgdGhlIHByZXZpb3VzbHkgcGVyc2lzdGVkIGRlYnVnIG1vZGVzXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gbG9hZCgpIHtcblx0bGV0IHI7XG5cdHRyeSB7XG5cdFx0ciA9IGV4cG9ydHMuc3RvcmFnZS5nZXRJdGVtKCdkZWJ1ZycpO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdC8vIFN3YWxsb3dcblx0XHQvLyBYWFggKEBRaXgtKSBzaG91bGQgd2UgYmUgbG9nZ2luZyB0aGVzZT9cblx0fVxuXG5cdC8vIElmIGRlYnVnIGlzbid0IHNldCBpbiBMUywgYW5kIHdlJ3JlIGluIEVsZWN0cm9uLCB0cnkgdG8gbG9hZCAkREVCVUdcblx0aWYgKCFyICYmIHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiAnZW52JyBpbiBwcm9jZXNzKSB7XG5cdFx0ciA9IHByb2Nlc3MuZW52LkRFQlVHO1xuXHR9XG5cblx0cmV0dXJuIHI7XG59XG5cbi8qKlxuICogTG9jYWxzdG9yYWdlIGF0dGVtcHRzIHRvIHJldHVybiB0aGUgbG9jYWxzdG9yYWdlLlxuICpcbiAqIFRoaXMgaXMgbmVjZXNzYXJ5IGJlY2F1c2Ugc2FmYXJpIHRocm93c1xuICogd2hlbiBhIHVzZXIgZGlzYWJsZXMgY29va2llcy9sb2NhbHN0b3JhZ2VcbiAqIGFuZCB5b3UgYXR0ZW1wdCB0byBhY2Nlc3MgaXQuXG4gKlxuICogQHJldHVybiB7TG9jYWxTdG9yYWdlfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gbG9jYWxzdG9yYWdlKCkge1xuXHR0cnkge1xuXHRcdC8vIFRWTUxLaXQgKEFwcGxlIFRWIEpTIFJ1bnRpbWUpIGRvZXMgbm90IGhhdmUgYSB3aW5kb3cgb2JqZWN0LCBqdXN0IGxvY2FsU3RvcmFnZSBpbiB0aGUgZ2xvYmFsIGNvbnRleHRcblx0XHQvLyBUaGUgQnJvd3NlciBhbHNvIGhhcyBsb2NhbFN0b3JhZ2UgaW4gdGhlIGdsb2JhbCBjb250ZXh0LlxuXHRcdHJldHVybiBsb2NhbFN0b3JhZ2U7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Ly8gU3dhbGxvd1xuXHRcdC8vIFhYWCAoQFFpeC0pIHNob3VsZCB3ZSBiZSBsb2dnaW5nIHRoZXNlP1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9jb21tb24nKShleHBvcnRzKTtcblxuY29uc3Qge2Zvcm1hdHRlcnN9ID0gbW9kdWxlLmV4cG9ydHM7XG5cbi8qKlxuICogTWFwICVqIHRvIGBKU09OLnN0cmluZ2lmeSgpYCwgc2luY2Ugbm8gV2ViIEluc3BlY3RvcnMgZG8gdGhhdCBieSBkZWZhdWx0LlxuICovXG5cbmZvcm1hdHRlcnMuaiA9IGZ1bmN0aW9uICh2KSB7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIEpTT04uc3RyaW5naWZ5KHYpO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdHJldHVybiAnW1VuZXhwZWN0ZWRKU09OUGFyc2VFcnJvcl06ICcgKyBlcnJvci5tZXNzYWdlO1xuXHR9XG59O1xuIiwiXG4vKipcbiAqIFRoaXMgaXMgdGhlIGNvbW1vbiBsb2dpYyBmb3IgYm90aCB0aGUgTm9kZS5qcyBhbmQgd2ViIGJyb3dzZXJcbiAqIGltcGxlbWVudGF0aW9ucyBvZiBgZGVidWcoKWAuXG4gKi9cblxuZnVuY3Rpb24gc2V0dXAoZW52KSB7XG5cdGNyZWF0ZURlYnVnLmRlYnVnID0gY3JlYXRlRGVidWc7XG5cdGNyZWF0ZURlYnVnLmRlZmF1bHQgPSBjcmVhdGVEZWJ1Zztcblx0Y3JlYXRlRGVidWcuY29lcmNlID0gY29lcmNlO1xuXHRjcmVhdGVEZWJ1Zy5kaXNhYmxlID0gZGlzYWJsZTtcblx0Y3JlYXRlRGVidWcuZW5hYmxlID0gZW5hYmxlO1xuXHRjcmVhdGVEZWJ1Zy5lbmFibGVkID0gZW5hYmxlZDtcblx0Y3JlYXRlRGVidWcuaHVtYW5pemUgPSByZXF1aXJlKCdtcycpO1xuXHRjcmVhdGVEZWJ1Zy5kZXN0cm95ID0gZGVzdHJveTtcblxuXHRPYmplY3Qua2V5cyhlbnYpLmZvckVhY2goa2V5ID0+IHtcblx0XHRjcmVhdGVEZWJ1Z1trZXldID0gZW52W2tleV07XG5cdH0pO1xuXG5cdC8qKlxuXHQqIFRoZSBjdXJyZW50bHkgYWN0aXZlIGRlYnVnIG1vZGUgbmFtZXMsIGFuZCBuYW1lcyB0byBza2lwLlxuXHQqL1xuXG5cdGNyZWF0ZURlYnVnLm5hbWVzID0gW107XG5cdGNyZWF0ZURlYnVnLnNraXBzID0gW107XG5cblx0LyoqXG5cdCogTWFwIG9mIHNwZWNpYWwgXCIlblwiIGhhbmRsaW5nIGZ1bmN0aW9ucywgZm9yIHRoZSBkZWJ1ZyBcImZvcm1hdFwiIGFyZ3VtZW50LlxuXHQqXG5cdCogVmFsaWQga2V5IG5hbWVzIGFyZSBhIHNpbmdsZSwgbG93ZXIgb3IgdXBwZXItY2FzZSBsZXR0ZXIsIGkuZS4gXCJuXCIgYW5kIFwiTlwiLlxuXHQqL1xuXHRjcmVhdGVEZWJ1Zy5mb3JtYXR0ZXJzID0ge307XG5cblx0LyoqXG5cdCogU2VsZWN0cyBhIGNvbG9yIGZvciBhIGRlYnVnIG5hbWVzcGFjZVxuXHQqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2UgVGhlIG5hbWVzcGFjZSBzdHJpbmcgZm9yIHRoZSBmb3IgdGhlIGRlYnVnIGluc3RhbmNlIHRvIGJlIGNvbG9yZWRcblx0KiBAcmV0dXJuIHtOdW1iZXJ8U3RyaW5nfSBBbiBBTlNJIGNvbG9yIGNvZGUgZm9yIHRoZSBnaXZlbiBuYW1lc3BhY2Vcblx0KiBAYXBpIHByaXZhdGVcblx0Ki9cblx0ZnVuY3Rpb24gc2VsZWN0Q29sb3IobmFtZXNwYWNlKSB7XG5cdFx0bGV0IGhhc2ggPSAwO1xuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBuYW1lc3BhY2UubGVuZ3RoOyBpKyspIHtcblx0XHRcdGhhc2ggPSAoKGhhc2ggPDwgNSkgLSBoYXNoKSArIG5hbWVzcGFjZS5jaGFyQ29kZUF0KGkpO1xuXHRcdFx0aGFzaCB8PSAwOyAvLyBDb252ZXJ0IHRvIDMyYml0IGludGVnZXJcblx0XHR9XG5cblx0XHRyZXR1cm4gY3JlYXRlRGVidWcuY29sb3JzW01hdGguYWJzKGhhc2gpICUgY3JlYXRlRGVidWcuY29sb3JzLmxlbmd0aF07XG5cdH1cblx0Y3JlYXRlRGVidWcuc2VsZWN0Q29sb3IgPSBzZWxlY3RDb2xvcjtcblxuXHQvKipcblx0KiBDcmVhdGUgYSBkZWJ1Z2dlciB3aXRoIHRoZSBnaXZlbiBgbmFtZXNwYWNlYC5cblx0KlxuXHQqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2Vcblx0KiBAcmV0dXJuIHtGdW5jdGlvbn1cblx0KiBAYXBpIHB1YmxpY1xuXHQqL1xuXHRmdW5jdGlvbiBjcmVhdGVEZWJ1ZyhuYW1lc3BhY2UpIHtcblx0XHRsZXQgcHJldlRpbWU7XG5cdFx0bGV0IGVuYWJsZU92ZXJyaWRlID0gbnVsbDtcblxuXHRcdGZ1bmN0aW9uIGRlYnVnKC4uLmFyZ3MpIHtcblx0XHRcdC8vIERpc2FibGVkP1xuXHRcdFx0aWYgKCFkZWJ1Zy5lbmFibGVkKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3Qgc2VsZiA9IGRlYnVnO1xuXG5cdFx0XHQvLyBTZXQgYGRpZmZgIHRpbWVzdGFtcFxuXHRcdFx0Y29uc3QgY3VyciA9IE51bWJlcihuZXcgRGF0ZSgpKTtcblx0XHRcdGNvbnN0IG1zID0gY3VyciAtIChwcmV2VGltZSB8fCBjdXJyKTtcblx0XHRcdHNlbGYuZGlmZiA9IG1zO1xuXHRcdFx0c2VsZi5wcmV2ID0gcHJldlRpbWU7XG5cdFx0XHRzZWxmLmN1cnIgPSBjdXJyO1xuXHRcdFx0cHJldlRpbWUgPSBjdXJyO1xuXG5cdFx0XHRhcmdzWzBdID0gY3JlYXRlRGVidWcuY29lcmNlKGFyZ3NbMF0pO1xuXG5cdFx0XHRpZiAodHlwZW9mIGFyZ3NbMF0gIT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdC8vIEFueXRoaW5nIGVsc2UgbGV0J3MgaW5zcGVjdCB3aXRoICVPXG5cdFx0XHRcdGFyZ3MudW5zaGlmdCgnJU8nKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gQXBwbHkgYW55IGBmb3JtYXR0ZXJzYCB0cmFuc2Zvcm1hdGlvbnNcblx0XHRcdGxldCBpbmRleCA9IDA7XG5cdFx0XHRhcmdzWzBdID0gYXJnc1swXS5yZXBsYWNlKC8lKFthLXpBLVolXSkvZywgKG1hdGNoLCBmb3JtYXQpID0+IHtcblx0XHRcdFx0Ly8gSWYgd2UgZW5jb3VudGVyIGFuIGVzY2FwZWQgJSB0aGVuIGRvbid0IGluY3JlYXNlIHRoZSBhcnJheSBpbmRleFxuXHRcdFx0XHRpZiAobWF0Y2ggPT09ICclJScpIHtcblx0XHRcdFx0XHRyZXR1cm4gJyUnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGluZGV4Kys7XG5cdFx0XHRcdGNvbnN0IGZvcm1hdHRlciA9IGNyZWF0ZURlYnVnLmZvcm1hdHRlcnNbZm9ybWF0XTtcblx0XHRcdFx0aWYgKHR5cGVvZiBmb3JtYXR0ZXIgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0XHRjb25zdCB2YWwgPSBhcmdzW2luZGV4XTtcblx0XHRcdFx0XHRtYXRjaCA9IGZvcm1hdHRlci5jYWxsKHNlbGYsIHZhbCk7XG5cblx0XHRcdFx0XHQvLyBOb3cgd2UgbmVlZCB0byByZW1vdmUgYGFyZ3NbaW5kZXhdYCBzaW5jZSBpdCdzIGlubGluZWQgaW4gdGhlIGBmb3JtYXRgXG5cdFx0XHRcdFx0YXJncy5zcGxpY2UoaW5kZXgsIDEpO1xuXHRcdFx0XHRcdGluZGV4LS07XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIG1hdGNoO1xuXHRcdFx0fSk7XG5cblx0XHRcdC8vIEFwcGx5IGVudi1zcGVjaWZpYyBmb3JtYXR0aW5nIChjb2xvcnMsIGV0Yy4pXG5cdFx0XHRjcmVhdGVEZWJ1Zy5mb3JtYXRBcmdzLmNhbGwoc2VsZiwgYXJncyk7XG5cblx0XHRcdGNvbnN0IGxvZ0ZuID0gc2VsZi5sb2cgfHwgY3JlYXRlRGVidWcubG9nO1xuXHRcdFx0bG9nRm4uYXBwbHkoc2VsZiwgYXJncyk7XG5cdFx0fVxuXG5cdFx0ZGVidWcubmFtZXNwYWNlID0gbmFtZXNwYWNlO1xuXHRcdGRlYnVnLnVzZUNvbG9ycyA9IGNyZWF0ZURlYnVnLnVzZUNvbG9ycygpO1xuXHRcdGRlYnVnLmNvbG9yID0gY3JlYXRlRGVidWcuc2VsZWN0Q29sb3IobmFtZXNwYWNlKTtcblx0XHRkZWJ1Zy5leHRlbmQgPSBleHRlbmQ7XG5cdFx0ZGVidWcuZGVzdHJveSA9IGNyZWF0ZURlYnVnLmRlc3Ryb3k7IC8vIFhYWCBUZW1wb3JhcnkuIFdpbGwgYmUgcmVtb3ZlZCBpbiB0aGUgbmV4dCBtYWpvciByZWxlYXNlLlxuXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGRlYnVnLCAnZW5hYmxlZCcsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuXHRcdFx0Z2V0OiAoKSA9PiBlbmFibGVPdmVycmlkZSA9PT0gbnVsbCA/IGNyZWF0ZURlYnVnLmVuYWJsZWQobmFtZXNwYWNlKSA6IGVuYWJsZU92ZXJyaWRlLFxuXHRcdFx0c2V0OiB2ID0+IHtcblx0XHRcdFx0ZW5hYmxlT3ZlcnJpZGUgPSB2O1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0Ly8gRW52LXNwZWNpZmljIGluaXRpYWxpemF0aW9uIGxvZ2ljIGZvciBkZWJ1ZyBpbnN0YW5jZXNcblx0XHRpZiAodHlwZW9mIGNyZWF0ZURlYnVnLmluaXQgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdGNyZWF0ZURlYnVnLmluaXQoZGVidWcpO1xuXHRcdH1cblxuXHRcdHJldHVybiBkZWJ1Zztcblx0fVxuXG5cdGZ1bmN0aW9uIGV4dGVuZChuYW1lc3BhY2UsIGRlbGltaXRlcikge1xuXHRcdGNvbnN0IG5ld0RlYnVnID0gY3JlYXRlRGVidWcodGhpcy5uYW1lc3BhY2UgKyAodHlwZW9mIGRlbGltaXRlciA9PT0gJ3VuZGVmaW5lZCcgPyAnOicgOiBkZWxpbWl0ZXIpICsgbmFtZXNwYWNlKTtcblx0XHRuZXdEZWJ1Zy5sb2cgPSB0aGlzLmxvZztcblx0XHRyZXR1cm4gbmV3RGVidWc7XG5cdH1cblxuXHQvKipcblx0KiBFbmFibGVzIGEgZGVidWcgbW9kZSBieSBuYW1lc3BhY2VzLiBUaGlzIGNhbiBpbmNsdWRlIG1vZGVzXG5cdCogc2VwYXJhdGVkIGJ5IGEgY29sb24gYW5kIHdpbGRjYXJkcy5cblx0KlxuXHQqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2VzXG5cdCogQGFwaSBwdWJsaWNcblx0Ki9cblx0ZnVuY3Rpb24gZW5hYmxlKG5hbWVzcGFjZXMpIHtcblx0XHRjcmVhdGVEZWJ1Zy5zYXZlKG5hbWVzcGFjZXMpO1xuXG5cdFx0Y3JlYXRlRGVidWcubmFtZXMgPSBbXTtcblx0XHRjcmVhdGVEZWJ1Zy5za2lwcyA9IFtdO1xuXG5cdFx0bGV0IGk7XG5cdFx0Y29uc3Qgc3BsaXQgPSAodHlwZW9mIG5hbWVzcGFjZXMgPT09ICdzdHJpbmcnID8gbmFtZXNwYWNlcyA6ICcnKS5zcGxpdCgvW1xccyxdKy8pO1xuXHRcdGNvbnN0IGxlbiA9IHNwbGl0Lmxlbmd0aDtcblxuXHRcdGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0aWYgKCFzcGxpdFtpXSkge1xuXHRcdFx0XHQvLyBpZ25vcmUgZW1wdHkgc3RyaW5nc1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0bmFtZXNwYWNlcyA9IHNwbGl0W2ldLnJlcGxhY2UoL1xcKi9nLCAnLio/Jyk7XG5cblx0XHRcdGlmIChuYW1lc3BhY2VzWzBdID09PSAnLScpIHtcblx0XHRcdFx0Y3JlYXRlRGVidWcuc2tpcHMucHVzaChuZXcgUmVnRXhwKCdeJyArIG5hbWVzcGFjZXMuc3Vic3RyKDEpICsgJyQnKSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjcmVhdGVEZWJ1Zy5uYW1lcy5wdXNoKG5ldyBSZWdFeHAoJ14nICsgbmFtZXNwYWNlcyArICckJykpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQqIERpc2FibGUgZGVidWcgb3V0cHV0LlxuXHQqXG5cdCogQHJldHVybiB7U3RyaW5nfSBuYW1lc3BhY2VzXG5cdCogQGFwaSBwdWJsaWNcblx0Ki9cblx0ZnVuY3Rpb24gZGlzYWJsZSgpIHtcblx0XHRjb25zdCBuYW1lc3BhY2VzID0gW1xuXHRcdFx0Li4uY3JlYXRlRGVidWcubmFtZXMubWFwKHRvTmFtZXNwYWNlKSxcblx0XHRcdC4uLmNyZWF0ZURlYnVnLnNraXBzLm1hcCh0b05hbWVzcGFjZSkubWFwKG5hbWVzcGFjZSA9PiAnLScgKyBuYW1lc3BhY2UpXG5cdFx0XS5qb2luKCcsJyk7XG5cdFx0Y3JlYXRlRGVidWcuZW5hYmxlKCcnKTtcblx0XHRyZXR1cm4gbmFtZXNwYWNlcztcblx0fVxuXG5cdC8qKlxuXHQqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gbW9kZSBuYW1lIGlzIGVuYWJsZWQsIGZhbHNlIG90aGVyd2lzZS5cblx0KlxuXHQqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG5cdCogQHJldHVybiB7Qm9vbGVhbn1cblx0KiBAYXBpIHB1YmxpY1xuXHQqL1xuXHRmdW5jdGlvbiBlbmFibGVkKG5hbWUpIHtcblx0XHRpZiAobmFtZVtuYW1lLmxlbmd0aCAtIDFdID09PSAnKicpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdGxldCBpO1xuXHRcdGxldCBsZW47XG5cblx0XHRmb3IgKGkgPSAwLCBsZW4gPSBjcmVhdGVEZWJ1Zy5za2lwcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0aWYgKGNyZWF0ZURlYnVnLnNraXBzW2ldLnRlc3QobmFtZSkpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGZvciAoaSA9IDAsIGxlbiA9IGNyZWF0ZURlYnVnLm5hbWVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHRpZiAoY3JlYXRlRGVidWcubmFtZXNbaV0udGVzdChuYW1lKSkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHQvKipcblx0KiBDb252ZXJ0IHJlZ2V4cCB0byBuYW1lc3BhY2Vcblx0KlxuXHQqIEBwYXJhbSB7UmVnRXhwfSByZWd4ZXBcblx0KiBAcmV0dXJuIHtTdHJpbmd9IG5hbWVzcGFjZVxuXHQqIEBhcGkgcHJpdmF0ZVxuXHQqL1xuXHRmdW5jdGlvbiB0b05hbWVzcGFjZShyZWdleHApIHtcblx0XHRyZXR1cm4gcmVnZXhwLnRvU3RyaW5nKClcblx0XHRcdC5zdWJzdHJpbmcoMiwgcmVnZXhwLnRvU3RyaW5nKCkubGVuZ3RoIC0gMilcblx0XHRcdC5yZXBsYWNlKC9cXC5cXCpcXD8kLywgJyonKTtcblx0fVxuXG5cdC8qKlxuXHQqIENvZXJjZSBgdmFsYC5cblx0KlxuXHQqIEBwYXJhbSB7TWl4ZWR9IHZhbFxuXHQqIEByZXR1cm4ge01peGVkfVxuXHQqIEBhcGkgcHJpdmF0ZVxuXHQqL1xuXHRmdW5jdGlvbiBjb2VyY2UodmFsKSB7XG5cdFx0aWYgKHZhbCBpbnN0YW5jZW9mIEVycm9yKSB7XG5cdFx0XHRyZXR1cm4gdmFsLnN0YWNrIHx8IHZhbC5tZXNzYWdlO1xuXHRcdH1cblx0XHRyZXR1cm4gdmFsO1xuXHR9XG5cblx0LyoqXG5cdCogWFhYIERPIE5PVCBVU0UuIFRoaXMgaXMgYSB0ZW1wb3Jhcnkgc3R1YiBmdW5jdGlvbi5cblx0KiBYWFggSXQgV0lMTCBiZSByZW1vdmVkIGluIHRoZSBuZXh0IG1ham9yIHJlbGVhc2UuXG5cdCovXG5cdGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG5cdFx0Y29uc29sZS53YXJuKCdJbnN0YW5jZSBtZXRob2QgYGRlYnVnLmRlc3Ryb3koKWAgaXMgZGVwcmVjYXRlZCBhbmQgbm8gbG9uZ2VyIGRvZXMgYW55dGhpbmcuIEl0IHdpbGwgYmUgcmVtb3ZlZCBpbiB0aGUgbmV4dCBtYWpvciB2ZXJzaW9uIG9mIGBkZWJ1Z2AuJyk7XG5cdH1cblxuXHRjcmVhdGVEZWJ1Zy5lbmFibGUoY3JlYXRlRGVidWcubG9hZCgpKTtcblxuXHRyZXR1cm4gY3JlYXRlRGVidWc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0dXA7XG4iLCJtb2R1bGUuZXhwb3J0cyA9ICgoKSA9PiB7XG4gIGlmICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiBzZWxmO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4gd2luZG93O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG4gIH1cbn0pKCk7XG4iLCJjb25zdCBTb2NrZXQgPSByZXF1aXJlKFwiLi9zb2NrZXRcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gKHVyaSwgb3B0cykgPT4gbmV3IFNvY2tldCh1cmksIG9wdHMpO1xuXG4vKipcbiAqIEV4cG9zZSBkZXBzIGZvciBsZWdhY3kgY29tcGF0aWJpbGl0eVxuICogYW5kIHN0YW5kYWxvbmUgYnJvd3NlciBhY2Nlc3MuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMuU29ja2V0ID0gU29ja2V0O1xubW9kdWxlLmV4cG9ydHMucHJvdG9jb2wgPSBTb2NrZXQucHJvdG9jb2w7IC8vIHRoaXMgaXMgYW4gaW50XG5tb2R1bGUuZXhwb3J0cy5UcmFuc3BvcnQgPSByZXF1aXJlKFwiLi90cmFuc3BvcnRcIik7XG5tb2R1bGUuZXhwb3J0cy50cmFuc3BvcnRzID0gcmVxdWlyZShcIi4vdHJhbnNwb3J0cy9pbmRleFwiKTtcbm1vZHVsZS5leHBvcnRzLnBhcnNlciA9IHJlcXVpcmUoXCJlbmdpbmUuaW8tcGFyc2VyXCIpO1xuIiwiY29uc3QgdHJhbnNwb3J0cyA9IHJlcXVpcmUoXCIuL3RyYW5zcG9ydHMvaW5kZXhcIik7XG5jb25zdCBFbWl0dGVyID0gcmVxdWlyZShcImNvbXBvbmVudC1lbWl0dGVyXCIpO1xuY29uc3QgZGVidWcgPSByZXF1aXJlKFwiZGVidWdcIikoXCJlbmdpbmUuaW8tY2xpZW50OnNvY2tldFwiKTtcbmNvbnN0IHBhcnNlciA9IHJlcXVpcmUoXCJlbmdpbmUuaW8tcGFyc2VyXCIpO1xuY29uc3QgcGFyc2V1cmkgPSByZXF1aXJlKFwicGFyc2V1cmlcIik7XG5jb25zdCBwYXJzZXFzID0gcmVxdWlyZShcInBhcnNlcXNcIik7XG5cbmNsYXNzIFNvY2tldCBleHRlbmRzIEVtaXR0ZXIge1xuICAvKipcbiAgICogU29ja2V0IGNvbnN0cnVjdG9yLlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ3xPYmplY3R9IHVyaSBvciBvcHRpb25zXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih1cmksIG9wdHMgPSB7fSkge1xuICAgIHN1cGVyKCk7XG5cbiAgICBpZiAodXJpICYmIFwib2JqZWN0XCIgPT09IHR5cGVvZiB1cmkpIHtcbiAgICAgIG9wdHMgPSB1cmk7XG4gICAgICB1cmkgPSBudWxsO1xuICAgIH1cblxuICAgIGlmICh1cmkpIHtcbiAgICAgIHVyaSA9IHBhcnNldXJpKHVyaSk7XG4gICAgICBvcHRzLmhvc3RuYW1lID0gdXJpLmhvc3Q7XG4gICAgICBvcHRzLnNlY3VyZSA9IHVyaS5wcm90b2NvbCA9PT0gXCJodHRwc1wiIHx8IHVyaS5wcm90b2NvbCA9PT0gXCJ3c3NcIjtcbiAgICAgIG9wdHMucG9ydCA9IHVyaS5wb3J0O1xuICAgICAgaWYgKHVyaS5xdWVyeSkgb3B0cy5xdWVyeSA9IHVyaS5xdWVyeTtcbiAgICB9IGVsc2UgaWYgKG9wdHMuaG9zdCkge1xuICAgICAgb3B0cy5ob3N0bmFtZSA9IHBhcnNldXJpKG9wdHMuaG9zdCkuaG9zdDtcbiAgICB9XG5cbiAgICB0aGlzLnNlY3VyZSA9XG4gICAgICBudWxsICE9IG9wdHMuc2VjdXJlXG4gICAgICAgID8gb3B0cy5zZWN1cmVcbiAgICAgICAgOiB0eXBlb2YgbG9jYXRpb24gIT09IFwidW5kZWZpbmVkXCIgJiYgXCJodHRwczpcIiA9PT0gbG9jYXRpb24ucHJvdG9jb2w7XG5cbiAgICBpZiAob3B0cy5ob3N0bmFtZSAmJiAhb3B0cy5wb3J0KSB7XG4gICAgICAvLyBpZiBubyBwb3J0IGlzIHNwZWNpZmllZCBtYW51YWxseSwgdXNlIHRoZSBwcm90b2NvbCBkZWZhdWx0XG4gICAgICBvcHRzLnBvcnQgPSB0aGlzLnNlY3VyZSA/IFwiNDQzXCIgOiBcIjgwXCI7XG4gICAgfVxuXG4gICAgdGhpcy5ob3N0bmFtZSA9XG4gICAgICBvcHRzLmhvc3RuYW1lIHx8XG4gICAgICAodHlwZW9mIGxvY2F0aW9uICE9PSBcInVuZGVmaW5lZFwiID8gbG9jYXRpb24uaG9zdG5hbWUgOiBcImxvY2FsaG9zdFwiKTtcbiAgICB0aGlzLnBvcnQgPVxuICAgICAgb3B0cy5wb3J0IHx8XG4gICAgICAodHlwZW9mIGxvY2F0aW9uICE9PSBcInVuZGVmaW5lZFwiICYmIGxvY2F0aW9uLnBvcnRcbiAgICAgICAgPyBsb2NhdGlvbi5wb3J0XG4gICAgICAgIDogdGhpcy5zZWN1cmVcbiAgICAgICAgPyA0NDNcbiAgICAgICAgOiA4MCk7XG5cbiAgICB0aGlzLnRyYW5zcG9ydHMgPSBvcHRzLnRyYW5zcG9ydHMgfHwgW1wicG9sbGluZ1wiLCBcIndlYnNvY2tldFwiXTtcbiAgICB0aGlzLnJlYWR5U3RhdGUgPSBcIlwiO1xuICAgIHRoaXMud3JpdGVCdWZmZXIgPSBbXTtcbiAgICB0aGlzLnByZXZCdWZmZXJMZW4gPSAwO1xuXG4gICAgdGhpcy5vcHRzID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIHtcbiAgICAgICAgcGF0aDogXCIvZW5naW5lLmlvXCIsXG4gICAgICAgIGFnZW50OiBmYWxzZSxcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzOiBmYWxzZSxcbiAgICAgICAgdXBncmFkZTogdHJ1ZSxcbiAgICAgICAganNvbnA6IHRydWUsXG4gICAgICAgIHRpbWVzdGFtcFBhcmFtOiBcInRcIixcbiAgICAgICAgcmVtZW1iZXJVcGdyYWRlOiBmYWxzZSxcbiAgICAgICAgcmVqZWN0VW5hdXRob3JpemVkOiB0cnVlLFxuICAgICAgICBwZXJNZXNzYWdlRGVmbGF0ZToge1xuICAgICAgICAgIHRocmVzaG9sZDogMTAyNFxuICAgICAgICB9LFxuICAgICAgICB0cmFuc3BvcnRPcHRpb25zOiB7fSxcbiAgICAgICAgY2xvc2VPbkJlZm9yZXVubG9hZDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIG9wdHNcbiAgICApO1xuXG4gICAgdGhpcy5vcHRzLnBhdGggPSB0aGlzLm9wdHMucGF0aC5yZXBsYWNlKC9cXC8kLywgXCJcIikgKyBcIi9cIjtcblxuICAgIGlmICh0eXBlb2YgdGhpcy5vcHRzLnF1ZXJ5ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICB0aGlzLm9wdHMucXVlcnkgPSBwYXJzZXFzLmRlY29kZSh0aGlzLm9wdHMucXVlcnkpO1xuICAgIH1cblxuICAgIC8vIHNldCBvbiBoYW5kc2hha2VcbiAgICB0aGlzLmlkID0gbnVsbDtcbiAgICB0aGlzLnVwZ3JhZGVzID0gbnVsbDtcbiAgICB0aGlzLnBpbmdJbnRlcnZhbCA9IG51bGw7XG4gICAgdGhpcy5waW5nVGltZW91dCA9IG51bGw7XG5cbiAgICAvLyBzZXQgb24gaGVhcnRiZWF0XG4gICAgdGhpcy5waW5nVGltZW91dFRpbWVyID0gbnVsbDtcblxuICAgIGlmICh0eXBlb2YgYWRkRXZlbnRMaXN0ZW5lciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICBpZiAodGhpcy5vcHRzLmNsb3NlT25CZWZvcmV1bmxvYWQpIHtcbiAgICAgICAgLy8gRmlyZWZveCBjbG9zZXMgdGhlIGNvbm5lY3Rpb24gd2hlbiB0aGUgXCJiZWZvcmV1bmxvYWRcIiBldmVudCBpcyBlbWl0dGVkIGJ1dCBub3QgQ2hyb21lLiBUaGlzIGV2ZW50IGxpc3RlbmVyXG4gICAgICAgIC8vIGVuc3VyZXMgZXZlcnkgYnJvd3NlciBiZWhhdmVzIHRoZSBzYW1lIChubyBcImRpc2Nvbm5lY3RcIiBldmVudCBhdCB0aGUgU29ja2V0LklPIGxldmVsIHdoZW4gdGhlIHBhZ2UgaXNcbiAgICAgICAgLy8gY2xvc2VkL3JlbG9hZGVkKVxuICAgICAgICBhZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgIFwiYmVmb3JldW5sb2FkXCIsXG4gICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMudHJhbnNwb3J0KSB7XG4gICAgICAgICAgICAgIC8vIHNpbGVudGx5IGNsb3NlIHRoZSB0cmFuc3BvcnRcbiAgICAgICAgICAgICAgdGhpcy50cmFuc3BvcnQucmVtb3ZlQWxsTGlzdGVuZXJzKCk7XG4gICAgICAgICAgICAgIHRoaXMudHJhbnNwb3J0LmNsb3NlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBmYWxzZVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuaG9zdG5hbWUgIT09IFwibG9jYWxob3N0XCIpIHtcbiAgICAgICAgdGhpcy5vZmZsaW5lRXZlbnRMaXN0ZW5lciA9ICgpID0+IHtcbiAgICAgICAgICB0aGlzLm9uQ2xvc2UoXCJ0cmFuc3BvcnQgY2xvc2VcIik7XG4gICAgICAgIH07XG4gICAgICAgIGFkZEV2ZW50TGlzdGVuZXIoXCJvZmZsaW5lXCIsIHRoaXMub2ZmbGluZUV2ZW50TGlzdGVuZXIsIGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLm9wZW4oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIHRyYW5zcG9ydCBvZiB0aGUgZ2l2ZW4gdHlwZS5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IHRyYW5zcG9ydCBuYW1lXG4gICAqIEByZXR1cm4ge1RyYW5zcG9ydH1cbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBjcmVhdGVUcmFuc3BvcnQobmFtZSkge1xuICAgIGRlYnVnKCdjcmVhdGluZyB0cmFuc3BvcnQgXCIlc1wiJywgbmFtZSk7XG4gICAgY29uc3QgcXVlcnkgPSBjbG9uZSh0aGlzLm9wdHMucXVlcnkpO1xuXG4gICAgLy8gYXBwZW5kIGVuZ2luZS5pbyBwcm90b2NvbCBpZGVudGlmaWVyXG4gICAgcXVlcnkuRUlPID0gcGFyc2VyLnByb3RvY29sO1xuXG4gICAgLy8gdHJhbnNwb3J0IG5hbWVcbiAgICBxdWVyeS50cmFuc3BvcnQgPSBuYW1lO1xuXG4gICAgLy8gc2Vzc2lvbiBpZCBpZiB3ZSBhbHJlYWR5IGhhdmUgb25lXG4gICAgaWYgKHRoaXMuaWQpIHF1ZXJ5LnNpZCA9IHRoaXMuaWQ7XG5cbiAgICBjb25zdCBvcHRzID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIHt9LFxuICAgICAgdGhpcy5vcHRzLnRyYW5zcG9ydE9wdGlvbnNbbmFtZV0sXG4gICAgICB0aGlzLm9wdHMsXG4gICAgICB7XG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBzb2NrZXQ6IHRoaXMsXG4gICAgICAgIGhvc3RuYW1lOiB0aGlzLmhvc3RuYW1lLFxuICAgICAgICBzZWN1cmU6IHRoaXMuc2VjdXJlLFxuICAgICAgICBwb3J0OiB0aGlzLnBvcnRcbiAgICAgIH1cbiAgICApO1xuXG4gICAgZGVidWcoXCJvcHRpb25zOiAlalwiLCBvcHRzKTtcblxuICAgIHJldHVybiBuZXcgdHJhbnNwb3J0c1tuYW1lXShvcHRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyB0cmFuc3BvcnQgdG8gdXNlIGFuZCBzdGFydHMgcHJvYmUuXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgb3BlbigpIHtcbiAgICBsZXQgdHJhbnNwb3J0O1xuICAgIGlmIChcbiAgICAgIHRoaXMub3B0cy5yZW1lbWJlclVwZ3JhZGUgJiZcbiAgICAgIFNvY2tldC5wcmlvcldlYnNvY2tldFN1Y2Nlc3MgJiZcbiAgICAgIHRoaXMudHJhbnNwb3J0cy5pbmRleE9mKFwid2Vic29ja2V0XCIpICE9PSAtMVxuICAgICkge1xuICAgICAgdHJhbnNwb3J0ID0gXCJ3ZWJzb2NrZXRcIjtcbiAgICB9IGVsc2UgaWYgKDAgPT09IHRoaXMudHJhbnNwb3J0cy5sZW5ndGgpIHtcbiAgICAgIC8vIEVtaXQgZXJyb3Igb24gbmV4dCB0aWNrIHNvIGl0IGNhbiBiZSBsaXN0ZW5lZCB0b1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZW1pdChcImVycm9yXCIsIFwiTm8gdHJhbnNwb3J0cyBhdmFpbGFibGVcIik7XG4gICAgICB9LCAwKTtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgdHJhbnNwb3J0ID0gdGhpcy50cmFuc3BvcnRzWzBdO1xuICAgIH1cbiAgICB0aGlzLnJlYWR5U3RhdGUgPSBcIm9wZW5pbmdcIjtcblxuICAgIC8vIFJldHJ5IHdpdGggdGhlIG5leHQgdHJhbnNwb3J0IGlmIHRoZSB0cmFuc3BvcnQgaXMgZGlzYWJsZWQgKGpzb25wOiBmYWxzZSlcbiAgICB0cnkge1xuICAgICAgdHJhbnNwb3J0ID0gdGhpcy5jcmVhdGVUcmFuc3BvcnQodHJhbnNwb3J0KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBkZWJ1ZyhcImVycm9yIHdoaWxlIGNyZWF0aW5nIHRyYW5zcG9ydDogJXNcIiwgZSk7XG4gICAgICB0aGlzLnRyYW5zcG9ydHMuc2hpZnQoKTtcbiAgICAgIHRoaXMub3BlbigpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRyYW5zcG9ydC5vcGVuKCk7XG4gICAgdGhpcy5zZXRUcmFuc3BvcnQodHJhbnNwb3J0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBjdXJyZW50IHRyYW5zcG9ydC4gRGlzYWJsZXMgdGhlIGV4aXN0aW5nIG9uZSAoaWYgYW55KS5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBzZXRUcmFuc3BvcnQodHJhbnNwb3J0KSB7XG4gICAgZGVidWcoXCJzZXR0aW5nIHRyYW5zcG9ydCAlc1wiLCB0cmFuc3BvcnQubmFtZSk7XG5cbiAgICBpZiAodGhpcy50cmFuc3BvcnQpIHtcbiAgICAgIGRlYnVnKFwiY2xlYXJpbmcgZXhpc3RpbmcgdHJhbnNwb3J0ICVzXCIsIHRoaXMudHJhbnNwb3J0Lm5hbWUpO1xuICAgICAgdGhpcy50cmFuc3BvcnQucmVtb3ZlQWxsTGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgLy8gc2V0IHVwIHRyYW5zcG9ydFxuICAgIHRoaXMudHJhbnNwb3J0ID0gdHJhbnNwb3J0O1xuXG4gICAgLy8gc2V0IHVwIHRyYW5zcG9ydCBsaXN0ZW5lcnNcbiAgICB0cmFuc3BvcnRcbiAgICAgIC5vbihcImRyYWluXCIsIHRoaXMub25EcmFpbi5iaW5kKHRoaXMpKVxuICAgICAgLm9uKFwicGFja2V0XCIsIHRoaXMub25QYWNrZXQuYmluZCh0aGlzKSlcbiAgICAgIC5vbihcImVycm9yXCIsIHRoaXMub25FcnJvci5iaW5kKHRoaXMpKVxuICAgICAgLm9uKFwiY2xvc2VcIiwgKCkgPT4ge1xuICAgICAgICB0aGlzLm9uQ2xvc2UoXCJ0cmFuc3BvcnQgY2xvc2VcIik7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm9iZXMgYSB0cmFuc3BvcnQuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB0cmFuc3BvcnQgbmFtZVxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIHByb2JlKG5hbWUpIHtcbiAgICBkZWJ1ZygncHJvYmluZyB0cmFuc3BvcnQgXCIlc1wiJywgbmFtZSk7XG4gICAgbGV0IHRyYW5zcG9ydCA9IHRoaXMuY3JlYXRlVHJhbnNwb3J0KG5hbWUsIHsgcHJvYmU6IDEgfSk7XG4gICAgbGV0IGZhaWxlZCA9IGZhbHNlO1xuXG4gICAgU29ja2V0LnByaW9yV2Vic29ja2V0U3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgb25UcmFuc3BvcnRPcGVuID0gKCkgPT4ge1xuICAgICAgaWYgKGZhaWxlZCkgcmV0dXJuO1xuXG4gICAgICBkZWJ1ZygncHJvYmUgdHJhbnNwb3J0IFwiJXNcIiBvcGVuZWQnLCBuYW1lKTtcbiAgICAgIHRyYW5zcG9ydC5zZW5kKFt7IHR5cGU6IFwicGluZ1wiLCBkYXRhOiBcInByb2JlXCIgfV0pO1xuICAgICAgdHJhbnNwb3J0Lm9uY2UoXCJwYWNrZXRcIiwgbXNnID0+IHtcbiAgICAgICAgaWYgKGZhaWxlZCkgcmV0dXJuO1xuICAgICAgICBpZiAoXCJwb25nXCIgPT09IG1zZy50eXBlICYmIFwicHJvYmVcIiA9PT0gbXNnLmRhdGEpIHtcbiAgICAgICAgICBkZWJ1ZygncHJvYmUgdHJhbnNwb3J0IFwiJXNcIiBwb25nJywgbmFtZSk7XG4gICAgICAgICAgdGhpcy51cGdyYWRpbmcgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuZW1pdChcInVwZ3JhZGluZ1wiLCB0cmFuc3BvcnQpO1xuICAgICAgICAgIGlmICghdHJhbnNwb3J0KSByZXR1cm47XG4gICAgICAgICAgU29ja2V0LnByaW9yV2Vic29ja2V0U3VjY2VzcyA9IFwid2Vic29ja2V0XCIgPT09IHRyYW5zcG9ydC5uYW1lO1xuXG4gICAgICAgICAgZGVidWcoJ3BhdXNpbmcgY3VycmVudCB0cmFuc3BvcnQgXCIlc1wiJywgdGhpcy50cmFuc3BvcnQubmFtZSk7XG4gICAgICAgICAgdGhpcy50cmFuc3BvcnQucGF1c2UoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGZhaWxlZCkgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKFwiY2xvc2VkXCIgPT09IHRoaXMucmVhZHlTdGF0ZSkgcmV0dXJuO1xuICAgICAgICAgICAgZGVidWcoXCJjaGFuZ2luZyB0cmFuc3BvcnQgYW5kIHNlbmRpbmcgdXBncmFkZSBwYWNrZXRcIik7XG5cbiAgICAgICAgICAgIGNsZWFudXAoKTtcblxuICAgICAgICAgICAgdGhpcy5zZXRUcmFuc3BvcnQodHJhbnNwb3J0KTtcbiAgICAgICAgICAgIHRyYW5zcG9ydC5zZW5kKFt7IHR5cGU6IFwidXBncmFkZVwiIH1dKTtcbiAgICAgICAgICAgIHRoaXMuZW1pdChcInVwZ3JhZGVcIiwgdHJhbnNwb3J0KTtcbiAgICAgICAgICAgIHRyYW5zcG9ydCA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLnVwZ3JhZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5mbHVzaCgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRlYnVnKCdwcm9iZSB0cmFuc3BvcnQgXCIlc1wiIGZhaWxlZCcsIG5hbWUpO1xuICAgICAgICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcihcInByb2JlIGVycm9yXCIpO1xuICAgICAgICAgIGVyci50cmFuc3BvcnQgPSB0cmFuc3BvcnQubmFtZTtcbiAgICAgICAgICB0aGlzLmVtaXQoXCJ1cGdyYWRlRXJyb3JcIiwgZXJyKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGZyZWV6ZVRyYW5zcG9ydCgpIHtcbiAgICAgIGlmIChmYWlsZWQpIHJldHVybjtcblxuICAgICAgLy8gQW55IGNhbGxiYWNrIGNhbGxlZCBieSB0cmFuc3BvcnQgc2hvdWxkIGJlIGlnbm9yZWQgc2luY2Ugbm93XG4gICAgICBmYWlsZWQgPSB0cnVlO1xuXG4gICAgICBjbGVhbnVwKCk7XG5cbiAgICAgIHRyYW5zcG9ydC5jbG9zZSgpO1xuICAgICAgdHJhbnNwb3J0ID0gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgYW55IGVycm9yIHRoYXQgaGFwcGVucyB3aGlsZSBwcm9iaW5nXG4gICAgY29uc3Qgb25lcnJvciA9IGVyciA9PiB7XG4gICAgICBjb25zdCBlcnJvciA9IG5ldyBFcnJvcihcInByb2JlIGVycm9yOiBcIiArIGVycik7XG4gICAgICBlcnJvci50cmFuc3BvcnQgPSB0cmFuc3BvcnQubmFtZTtcblxuICAgICAgZnJlZXplVHJhbnNwb3J0KCk7XG5cbiAgICAgIGRlYnVnKCdwcm9iZSB0cmFuc3BvcnQgXCIlc1wiIGZhaWxlZCBiZWNhdXNlIG9mIGVycm9yOiAlcycsIG5hbWUsIGVycik7XG5cbiAgICAgIHRoaXMuZW1pdChcInVwZ3JhZGVFcnJvclwiLCBlcnJvcik7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIG9uVHJhbnNwb3J0Q2xvc2UoKSB7XG4gICAgICBvbmVycm9yKFwidHJhbnNwb3J0IGNsb3NlZFwiKTtcbiAgICB9XG5cbiAgICAvLyBXaGVuIHRoZSBzb2NrZXQgaXMgY2xvc2VkIHdoaWxlIHdlJ3JlIHByb2JpbmdcbiAgICBmdW5jdGlvbiBvbmNsb3NlKCkge1xuICAgICAgb25lcnJvcihcInNvY2tldCBjbG9zZWRcIik7XG4gICAgfVxuXG4gICAgLy8gV2hlbiB0aGUgc29ja2V0IGlzIHVwZ3JhZGVkIHdoaWxlIHdlJ3JlIHByb2JpbmdcbiAgICBmdW5jdGlvbiBvbnVwZ3JhZGUodG8pIHtcbiAgICAgIGlmICh0cmFuc3BvcnQgJiYgdG8ubmFtZSAhPT0gdHJhbnNwb3J0Lm5hbWUpIHtcbiAgICAgICAgZGVidWcoJ1wiJXNcIiB3b3JrcyAtIGFib3J0aW5nIFwiJXNcIicsIHRvLm5hbWUsIHRyYW5zcG9ydC5uYW1lKTtcbiAgICAgICAgZnJlZXplVHJhbnNwb3J0KCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmVtb3ZlIGFsbCBsaXN0ZW5lcnMgb24gdGhlIHRyYW5zcG9ydCBhbmQgb24gc2VsZlxuICAgIGNvbnN0IGNsZWFudXAgPSAoKSA9PiB7XG4gICAgICB0cmFuc3BvcnQucmVtb3ZlTGlzdGVuZXIoXCJvcGVuXCIsIG9uVHJhbnNwb3J0T3Blbik7XG4gICAgICB0cmFuc3BvcnQucmVtb3ZlTGlzdGVuZXIoXCJlcnJvclwiLCBvbmVycm9yKTtcbiAgICAgIHRyYW5zcG9ydC5yZW1vdmVMaXN0ZW5lcihcImNsb3NlXCIsIG9uVHJhbnNwb3J0Q2xvc2UpO1xuICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcihcImNsb3NlXCIsIG9uY2xvc2UpO1xuICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcihcInVwZ3JhZGluZ1wiLCBvbnVwZ3JhZGUpO1xuICAgIH07XG5cbiAgICB0cmFuc3BvcnQub25jZShcIm9wZW5cIiwgb25UcmFuc3BvcnRPcGVuKTtcbiAgICB0cmFuc3BvcnQub25jZShcImVycm9yXCIsIG9uZXJyb3IpO1xuICAgIHRyYW5zcG9ydC5vbmNlKFwiY2xvc2VcIiwgb25UcmFuc3BvcnRDbG9zZSk7XG5cbiAgICB0aGlzLm9uY2UoXCJjbG9zZVwiLCBvbmNsb3NlKTtcbiAgICB0aGlzLm9uY2UoXCJ1cGdyYWRpbmdcIiwgb251cGdyYWRlKTtcblxuICAgIHRyYW5zcG9ydC5vcGVuKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gY29ubmVjdGlvbiBpcyBkZWVtZWQgb3Blbi5cbiAgICpcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG4gIG9uT3BlbigpIHtcbiAgICBkZWJ1ZyhcInNvY2tldCBvcGVuXCIpO1xuICAgIHRoaXMucmVhZHlTdGF0ZSA9IFwib3BlblwiO1xuICAgIFNvY2tldC5wcmlvcldlYnNvY2tldFN1Y2Nlc3MgPSBcIndlYnNvY2tldFwiID09PSB0aGlzLnRyYW5zcG9ydC5uYW1lO1xuICAgIHRoaXMuZW1pdChcIm9wZW5cIik7XG4gICAgdGhpcy5mbHVzaCgpO1xuXG4gICAgLy8gd2UgY2hlY2sgZm9yIGByZWFkeVN0YXRlYCBpbiBjYXNlIGFuIGBvcGVuYFxuICAgIC8vIGxpc3RlbmVyIGFscmVhZHkgY2xvc2VkIHRoZSBzb2NrZXRcbiAgICBpZiAoXG4gICAgICBcIm9wZW5cIiA9PT0gdGhpcy5yZWFkeVN0YXRlICYmXG4gICAgICB0aGlzLm9wdHMudXBncmFkZSAmJlxuICAgICAgdGhpcy50cmFuc3BvcnQucGF1c2VcbiAgICApIHtcbiAgICAgIGRlYnVnKFwic3RhcnRpbmcgdXBncmFkZSBwcm9iZXNcIik7XG4gICAgICBsZXQgaSA9IDA7XG4gICAgICBjb25zdCBsID0gdGhpcy51cGdyYWRlcy5sZW5ndGg7XG4gICAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xuICAgICAgICB0aGlzLnByb2JlKHRoaXMudXBncmFkZXNbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGVzIGEgcGFja2V0LlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIG9uUGFja2V0KHBhY2tldCkge1xuICAgIGlmIChcbiAgICAgIFwib3BlbmluZ1wiID09PSB0aGlzLnJlYWR5U3RhdGUgfHxcbiAgICAgIFwib3BlblwiID09PSB0aGlzLnJlYWR5U3RhdGUgfHxcbiAgICAgIFwiY2xvc2luZ1wiID09PSB0aGlzLnJlYWR5U3RhdGVcbiAgICApIHtcbiAgICAgIGRlYnVnKCdzb2NrZXQgcmVjZWl2ZTogdHlwZSBcIiVzXCIsIGRhdGEgXCIlc1wiJywgcGFja2V0LnR5cGUsIHBhY2tldC5kYXRhKTtcblxuICAgICAgdGhpcy5lbWl0KFwicGFja2V0XCIsIHBhY2tldCk7XG5cbiAgICAgIC8vIFNvY2tldCBpcyBsaXZlIC0gYW55IHBhY2tldCBjb3VudHNcbiAgICAgIHRoaXMuZW1pdChcImhlYXJ0YmVhdFwiKTtcblxuICAgICAgc3dpdGNoIChwYWNrZXQudHlwZSkge1xuICAgICAgICBjYXNlIFwib3BlblwiOlxuICAgICAgICAgIHRoaXMub25IYW5kc2hha2UoSlNPTi5wYXJzZShwYWNrZXQuZGF0YSkpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgXCJwaW5nXCI6XG4gICAgICAgICAgdGhpcy5yZXNldFBpbmdUaW1lb3V0KCk7XG4gICAgICAgICAgdGhpcy5zZW5kUGFja2V0KFwicG9uZ1wiKTtcbiAgICAgICAgICB0aGlzLmVtaXQoXCJwb25nXCIpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgXCJlcnJvclwiOlxuICAgICAgICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcihcInNlcnZlciBlcnJvclwiKTtcbiAgICAgICAgICBlcnIuY29kZSA9IHBhY2tldC5kYXRhO1xuICAgICAgICAgIHRoaXMub25FcnJvcihlcnIpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgXCJtZXNzYWdlXCI6XG4gICAgICAgICAgdGhpcy5lbWl0KFwiZGF0YVwiLCBwYWNrZXQuZGF0YSk7XG4gICAgICAgICAgdGhpcy5lbWl0KFwibWVzc2FnZVwiLCBwYWNrZXQuZGF0YSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlYnVnKCdwYWNrZXQgcmVjZWl2ZWQgd2l0aCBzb2NrZXQgcmVhZHlTdGF0ZSBcIiVzXCInLCB0aGlzLnJlYWR5U3RhdGUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgdXBvbiBoYW5kc2hha2UgY29tcGxldGlvbi5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IGhhbmRzaGFrZSBvYmpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBvbkhhbmRzaGFrZShkYXRhKSB7XG4gICAgdGhpcy5lbWl0KFwiaGFuZHNoYWtlXCIsIGRhdGEpO1xuICAgIHRoaXMuaWQgPSBkYXRhLnNpZDtcbiAgICB0aGlzLnRyYW5zcG9ydC5xdWVyeS5zaWQgPSBkYXRhLnNpZDtcbiAgICB0aGlzLnVwZ3JhZGVzID0gdGhpcy5maWx0ZXJVcGdyYWRlcyhkYXRhLnVwZ3JhZGVzKTtcbiAgICB0aGlzLnBpbmdJbnRlcnZhbCA9IGRhdGEucGluZ0ludGVydmFsO1xuICAgIHRoaXMucGluZ1RpbWVvdXQgPSBkYXRhLnBpbmdUaW1lb3V0O1xuICAgIHRoaXMub25PcGVuKCk7XG4gICAgLy8gSW4gY2FzZSBvcGVuIGhhbmRsZXIgY2xvc2VzIHNvY2tldFxuICAgIGlmIChcImNsb3NlZFwiID09PSB0aGlzLnJlYWR5U3RhdGUpIHJldHVybjtcbiAgICB0aGlzLnJlc2V0UGluZ1RpbWVvdXQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIGFuZCByZXNldHMgcGluZyB0aW1lb3V0IHRpbWVyIGJhc2VkIG9uIHNlcnZlciBwaW5ncy5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICByZXNldFBpbmdUaW1lb3V0KCkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLnBpbmdUaW1lb3V0VGltZXIpO1xuICAgIHRoaXMucGluZ1RpbWVvdXRUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5vbkNsb3NlKFwicGluZyB0aW1lb3V0XCIpO1xuICAgIH0sIHRoaXMucGluZ0ludGVydmFsICsgdGhpcy5waW5nVGltZW91dCk7XG4gICAgaWYgKHRoaXMub3B0cy5hdXRvVW5yZWYpIHtcbiAgICAgIHRoaXMucGluZ1RpbWVvdXRUaW1lci51bnJlZigpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgb24gYGRyYWluYCBldmVudFxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIG9uRHJhaW4oKSB7XG4gICAgdGhpcy53cml0ZUJ1ZmZlci5zcGxpY2UoMCwgdGhpcy5wcmV2QnVmZmVyTGVuKTtcblxuICAgIC8vIHNldHRpbmcgcHJldkJ1ZmZlckxlbiA9IDAgaXMgdmVyeSBpbXBvcnRhbnRcbiAgICAvLyBmb3IgZXhhbXBsZSwgd2hlbiB1cGdyYWRpbmcsIHVwZ3JhZGUgcGFja2V0IGlzIHNlbnQgb3ZlcixcbiAgICAvLyBhbmQgYSBub256ZXJvIHByZXZCdWZmZXJMZW4gY291bGQgY2F1c2UgcHJvYmxlbXMgb24gYGRyYWluYFxuICAgIHRoaXMucHJldkJ1ZmZlckxlbiA9IDA7XG5cbiAgICBpZiAoMCA9PT0gdGhpcy53cml0ZUJ1ZmZlci5sZW5ndGgpIHtcbiAgICAgIHRoaXMuZW1pdChcImRyYWluXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZsdXNoKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEZsdXNoIHdyaXRlIGJ1ZmZlcnMuXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgZmx1c2goKSB7XG4gICAgaWYgKFxuICAgICAgXCJjbG9zZWRcIiAhPT0gdGhpcy5yZWFkeVN0YXRlICYmXG4gICAgICB0aGlzLnRyYW5zcG9ydC53cml0YWJsZSAmJlxuICAgICAgIXRoaXMudXBncmFkaW5nICYmXG4gICAgICB0aGlzLndyaXRlQnVmZmVyLmxlbmd0aFxuICAgICkge1xuICAgICAgZGVidWcoXCJmbHVzaGluZyAlZCBwYWNrZXRzIGluIHNvY2tldFwiLCB0aGlzLndyaXRlQnVmZmVyLmxlbmd0aCk7XG4gICAgICB0aGlzLnRyYW5zcG9ydC5zZW5kKHRoaXMud3JpdGVCdWZmZXIpO1xuICAgICAgLy8ga2VlcCB0cmFjayBvZiBjdXJyZW50IGxlbmd0aCBvZiB3cml0ZUJ1ZmZlclxuICAgICAgLy8gc3BsaWNlIHdyaXRlQnVmZmVyIGFuZCBjYWxsYmFja0J1ZmZlciBvbiBgZHJhaW5gXG4gICAgICB0aGlzLnByZXZCdWZmZXJMZW4gPSB0aGlzLndyaXRlQnVmZmVyLmxlbmd0aDtcbiAgICAgIHRoaXMuZW1pdChcImZsdXNoXCIpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kcyBhIG1lc3NhZ2UuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBmdW5jdGlvbi5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMuXG4gICAqIEByZXR1cm4ge1NvY2tldH0gZm9yIGNoYWluaW5nLlxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cbiAgd3JpdGUobXNnLCBvcHRpb25zLCBmbikge1xuICAgIHRoaXMuc2VuZFBhY2tldChcIm1lc3NhZ2VcIiwgbXNnLCBvcHRpb25zLCBmbik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzZW5kKG1zZywgb3B0aW9ucywgZm4pIHtcbiAgICB0aGlzLnNlbmRQYWNrZXQoXCJtZXNzYWdlXCIsIG1zZywgb3B0aW9ucywgZm4pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbmRzIGEgcGFja2V0LlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gcGFja2V0IHR5cGUuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucy5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgZnVuY3Rpb24uXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgc2VuZFBhY2tldCh0eXBlLCBkYXRhLCBvcHRpb25zLCBmbikge1xuICAgIGlmIChcImZ1bmN0aW9uXCIgPT09IHR5cGVvZiBkYXRhKSB7XG4gICAgICBmbiA9IGRhdGE7XG4gICAgICBkYXRhID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGlmIChcImZ1bmN0aW9uXCIgPT09IHR5cGVvZiBvcHRpb25zKSB7XG4gICAgICBmbiA9IG9wdGlvbnM7XG4gICAgICBvcHRpb25zID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoXCJjbG9zaW5nXCIgPT09IHRoaXMucmVhZHlTdGF0ZSB8fCBcImNsb3NlZFwiID09PSB0aGlzLnJlYWR5U3RhdGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICBvcHRpb25zLmNvbXByZXNzID0gZmFsc2UgIT09IG9wdGlvbnMuY29tcHJlc3M7XG5cbiAgICBjb25zdCBwYWNrZXQgPSB7XG4gICAgICB0eXBlOiB0eXBlLFxuICAgICAgZGF0YTogZGF0YSxcbiAgICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgICB9O1xuICAgIHRoaXMuZW1pdChcInBhY2tldENyZWF0ZVwiLCBwYWNrZXQpO1xuICAgIHRoaXMud3JpdGVCdWZmZXIucHVzaChwYWNrZXQpO1xuICAgIGlmIChmbikgdGhpcy5vbmNlKFwiZmx1c2hcIiwgZm4pO1xuICAgIHRoaXMuZmx1c2goKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbG9zZXMgdGhlIGNvbm5lY3Rpb24uXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgY2xvc2UoKSB7XG4gICAgY29uc3QgY2xvc2UgPSAoKSA9PiB7XG4gICAgICB0aGlzLm9uQ2xvc2UoXCJmb3JjZWQgY2xvc2VcIik7XG4gICAgICBkZWJ1ZyhcInNvY2tldCBjbG9zaW5nIC0gdGVsbGluZyB0cmFuc3BvcnQgdG8gY2xvc2VcIik7XG4gICAgICB0aGlzLnRyYW5zcG9ydC5jbG9zZSgpO1xuICAgIH07XG5cbiAgICBjb25zdCBjbGVhbnVwQW5kQ2xvc2UgPSAoKSA9PiB7XG4gICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKFwidXBncmFkZVwiLCBjbGVhbnVwQW5kQ2xvc2UpO1xuICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcihcInVwZ3JhZGVFcnJvclwiLCBjbGVhbnVwQW5kQ2xvc2UpO1xuICAgICAgY2xvc2UoKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgd2FpdEZvclVwZ3JhZGUgPSAoKSA9PiB7XG4gICAgICAvLyB3YWl0IGZvciB1cGdyYWRlIHRvIGZpbmlzaCBzaW5jZSB3ZSBjYW4ndCBzZW5kIHBhY2tldHMgd2hpbGUgcGF1c2luZyBhIHRyYW5zcG9ydFxuICAgICAgdGhpcy5vbmNlKFwidXBncmFkZVwiLCBjbGVhbnVwQW5kQ2xvc2UpO1xuICAgICAgdGhpcy5vbmNlKFwidXBncmFkZUVycm9yXCIsIGNsZWFudXBBbmRDbG9zZSk7XG4gICAgfTtcblxuICAgIGlmIChcIm9wZW5pbmdcIiA9PT0gdGhpcy5yZWFkeVN0YXRlIHx8IFwib3BlblwiID09PSB0aGlzLnJlYWR5U3RhdGUpIHtcbiAgICAgIHRoaXMucmVhZHlTdGF0ZSA9IFwiY2xvc2luZ1wiO1xuXG4gICAgICBpZiAodGhpcy53cml0ZUJ1ZmZlci5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5vbmNlKFwiZHJhaW5cIiwgKCkgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLnVwZ3JhZGluZykge1xuICAgICAgICAgICAgd2FpdEZvclVwZ3JhZGUoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2xvc2UoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnVwZ3JhZGluZykge1xuICAgICAgICB3YWl0Rm9yVXBncmFkZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2xvc2UoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgdXBvbiB0cmFuc3BvcnQgZXJyb3JcbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBvbkVycm9yKGVycikge1xuICAgIGRlYnVnKFwic29ja2V0IGVycm9yICVqXCIsIGVycik7XG4gICAgU29ja2V0LnByaW9yV2Vic29ja2V0U3VjY2VzcyA9IGZhbHNlO1xuICAgIHRoaXMuZW1pdChcImVycm9yXCIsIGVycik7XG4gICAgdGhpcy5vbkNsb3NlKFwidHJhbnNwb3J0IGVycm9yXCIsIGVycik7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIHVwb24gdHJhbnNwb3J0IGNsb3NlLlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIG9uQ2xvc2UocmVhc29uLCBkZXNjKSB7XG4gICAgaWYgKFxuICAgICAgXCJvcGVuaW5nXCIgPT09IHRoaXMucmVhZHlTdGF0ZSB8fFxuICAgICAgXCJvcGVuXCIgPT09IHRoaXMucmVhZHlTdGF0ZSB8fFxuICAgICAgXCJjbG9zaW5nXCIgPT09IHRoaXMucmVhZHlTdGF0ZVxuICAgICkge1xuICAgICAgZGVidWcoJ3NvY2tldCBjbG9zZSB3aXRoIHJlYXNvbjogXCIlc1wiJywgcmVhc29uKTtcblxuICAgICAgLy8gY2xlYXIgdGltZXJzXG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5waW5nSW50ZXJ2YWxUaW1lcik7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5waW5nVGltZW91dFRpbWVyKTtcblxuICAgICAgLy8gc3RvcCBldmVudCBmcm9tIGZpcmluZyBhZ2FpbiBmb3IgdHJhbnNwb3J0XG4gICAgICB0aGlzLnRyYW5zcG9ydC5yZW1vdmVBbGxMaXN0ZW5lcnMoXCJjbG9zZVwiKTtcblxuICAgICAgLy8gZW5zdXJlIHRyYW5zcG9ydCB3b24ndCBzdGF5IG9wZW5cbiAgICAgIHRoaXMudHJhbnNwb3J0LmNsb3NlKCk7XG5cbiAgICAgIC8vIGlnbm9yZSBmdXJ0aGVyIHRyYW5zcG9ydCBjb21tdW5pY2F0aW9uXG4gICAgICB0aGlzLnRyYW5zcG9ydC5yZW1vdmVBbGxMaXN0ZW5lcnMoKTtcblxuICAgICAgaWYgKHR5cGVvZiByZW1vdmVFdmVudExpc3RlbmVyID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm9mZmxpbmVcIiwgdGhpcy5vZmZsaW5lRXZlbnRMaXN0ZW5lciwgZmFsc2UpO1xuICAgICAgfVxuXG4gICAgICAvLyBzZXQgcmVhZHkgc3RhdGVcbiAgICAgIHRoaXMucmVhZHlTdGF0ZSA9IFwiY2xvc2VkXCI7XG5cbiAgICAgIC8vIGNsZWFyIHNlc3Npb24gaWRcbiAgICAgIHRoaXMuaWQgPSBudWxsO1xuXG4gICAgICAvLyBlbWl0IGNsb3NlIGV2ZW50XG4gICAgICB0aGlzLmVtaXQoXCJjbG9zZVwiLCByZWFzb24sIGRlc2MpO1xuXG4gICAgICAvLyBjbGVhbiBidWZmZXJzIGFmdGVyLCBzbyB1c2VycyBjYW4gc3RpbGxcbiAgICAgIC8vIGdyYWIgdGhlIGJ1ZmZlcnMgb24gYGNsb3NlYCBldmVudFxuICAgICAgdGhpcy53cml0ZUJ1ZmZlciA9IFtdO1xuICAgICAgdGhpcy5wcmV2QnVmZmVyTGVuID0gMDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRmlsdGVycyB1cGdyYWRlcywgcmV0dXJuaW5nIG9ubHkgdGhvc2UgbWF0Y2hpbmcgY2xpZW50IHRyYW5zcG9ydHMuXG4gICAqXG4gICAqIEBwYXJhbSB7QXJyYXl9IHNlcnZlciB1cGdyYWRlc1xuICAgKiBAYXBpIHByaXZhdGVcbiAgICpcbiAgICovXG4gIGZpbHRlclVwZ3JhZGVzKHVwZ3JhZGVzKSB7XG4gICAgY29uc3QgZmlsdGVyZWRVcGdyYWRlcyA9IFtdO1xuICAgIGxldCBpID0gMDtcbiAgICBjb25zdCBqID0gdXBncmFkZXMubGVuZ3RoO1xuICAgIGZvciAoOyBpIDwgajsgaSsrKSB7XG4gICAgICBpZiAofnRoaXMudHJhbnNwb3J0cy5pbmRleE9mKHVwZ3JhZGVzW2ldKSlcbiAgICAgICAgZmlsdGVyZWRVcGdyYWRlcy5wdXNoKHVwZ3JhZGVzW2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIGZpbHRlcmVkVXBncmFkZXM7XG4gIH1cbn1cblxuU29ja2V0LnByaW9yV2Vic29ja2V0U3VjY2VzcyA9IGZhbHNlO1xuXG4vKipcbiAqIFByb3RvY29sIHZlcnNpb24uXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5Tb2NrZXQucHJvdG9jb2wgPSBwYXJzZXIucHJvdG9jb2w7IC8vIHRoaXMgaXMgYW4gaW50XG5cbmZ1bmN0aW9uIGNsb25lKG9iaikge1xuICBjb25zdCBvID0ge307XG4gIGZvciAobGV0IGkgaW4gb2JqKSB7XG4gICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgb1tpXSA9IG9ialtpXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG87XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU29ja2V0O1xuIiwiY29uc3QgcGFyc2VyID0gcmVxdWlyZShcImVuZ2luZS5pby1wYXJzZXJcIik7XG5jb25zdCBFbWl0dGVyID0gcmVxdWlyZShcImNvbXBvbmVudC1lbWl0dGVyXCIpO1xuY29uc3QgZGVidWcgPSByZXF1aXJlKFwiZGVidWdcIikoXCJlbmdpbmUuaW8tY2xpZW50OnRyYW5zcG9ydFwiKTtcblxuY2xhc3MgVHJhbnNwb3J0IGV4dGVuZHMgRW1pdHRlciB7XG4gIC8qKlxuICAgKiBUcmFuc3BvcnQgYWJzdHJhY3QgY29uc3RydWN0b3IuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zLlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIGNvbnN0cnVjdG9yKG9wdHMpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5vcHRzID0gb3B0cztcbiAgICB0aGlzLnF1ZXJ5ID0gb3B0cy5xdWVyeTtcbiAgICB0aGlzLnJlYWR5U3RhdGUgPSBcIlwiO1xuICAgIHRoaXMuc29ja2V0ID0gb3B0cy5zb2NrZXQ7XG4gIH1cblxuICAvKipcbiAgICogRW1pdHMgYW4gZXJyb3IuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAgICogQHJldHVybiB7VHJhbnNwb3J0fSBmb3IgY2hhaW5pbmdcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG4gIG9uRXJyb3IobXNnLCBkZXNjKSB7XG4gICAgY29uc3QgZXJyID0gbmV3IEVycm9yKG1zZyk7XG4gICAgZXJyLnR5cGUgPSBcIlRyYW5zcG9ydEVycm9yXCI7XG4gICAgZXJyLmRlc2NyaXB0aW9uID0gZGVzYztcbiAgICB0aGlzLmVtaXQoXCJlcnJvclwiLCBlcnIpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIE9wZW5zIHRoZSB0cmFuc3BvcnQuXG4gICAqXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuICBvcGVuKCkge1xuICAgIGlmIChcImNsb3NlZFwiID09PSB0aGlzLnJlYWR5U3RhdGUgfHwgXCJcIiA9PT0gdGhpcy5yZWFkeVN0YXRlKSB7XG4gICAgICB0aGlzLnJlYWR5U3RhdGUgPSBcIm9wZW5pbmdcIjtcbiAgICAgIHRoaXMuZG9PcGVuKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogQ2xvc2VzIHRoZSB0cmFuc3BvcnQuXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgY2xvc2UoKSB7XG4gICAgaWYgKFwib3BlbmluZ1wiID09PSB0aGlzLnJlYWR5U3RhdGUgfHwgXCJvcGVuXCIgPT09IHRoaXMucmVhZHlTdGF0ZSkge1xuICAgICAgdGhpcy5kb0Nsb3NlKCk7XG4gICAgICB0aGlzLm9uQ2xvc2UoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kcyBtdWx0aXBsZSBwYWNrZXRzLlxuICAgKlxuICAgKiBAcGFyYW0ge0FycmF5fSBwYWNrZXRzXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgc2VuZChwYWNrZXRzKSB7XG4gICAgaWYgKFwib3BlblwiID09PSB0aGlzLnJlYWR5U3RhdGUpIHtcbiAgICAgIHRoaXMud3JpdGUocGFja2V0cyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHRoaXMgbWlnaHQgaGFwcGVuIGlmIHRoZSB0cmFuc3BvcnQgd2FzIHNpbGVudGx5IGNsb3NlZCBpbiB0aGUgYmVmb3JldW5sb2FkIGV2ZW50IGhhbmRsZXJcbiAgICAgIGRlYnVnKFwidHJhbnNwb3J0IGlzIG5vdCBvcGVuLCBkaXNjYXJkaW5nIHBhY2tldHNcIik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCB1cG9uIG9wZW5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBvbk9wZW4oKSB7XG4gICAgdGhpcy5yZWFkeVN0YXRlID0gXCJvcGVuXCI7XG4gICAgdGhpcy53cml0YWJsZSA9IHRydWU7XG4gICAgdGhpcy5lbWl0KFwib3BlblwiKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2l0aCBkYXRhLlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YVxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIG9uRGF0YShkYXRhKSB7XG4gICAgY29uc3QgcGFja2V0ID0gcGFyc2VyLmRlY29kZVBhY2tldChkYXRhLCB0aGlzLnNvY2tldC5iaW5hcnlUeXBlKTtcbiAgICB0aGlzLm9uUGFja2V0KHBhY2tldCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIHdpdGggYSBkZWNvZGVkIHBhY2tldC5cbiAgICovXG4gIG9uUGFja2V0KHBhY2tldCkge1xuICAgIHRoaXMuZW1pdChcInBhY2tldFwiLCBwYWNrZXQpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCB1cG9uIGNsb3NlLlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIG9uQ2xvc2UoKSB7XG4gICAgdGhpcy5yZWFkeVN0YXRlID0gXCJjbG9zZWRcIjtcbiAgICB0aGlzLmVtaXQoXCJjbG9zZVwiKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRyYW5zcG9ydDtcbiIsImNvbnN0IFhNTEh0dHBSZXF1ZXN0ID0gcmVxdWlyZShcIi4uLy4uL2NvbnRyaWIveG1saHR0cHJlcXVlc3Qtc3NsL1hNTEh0dHBSZXF1ZXN0XCIpO1xuY29uc3QgWEhSID0gcmVxdWlyZShcIi4vcG9sbGluZy14aHJcIik7XG5jb25zdCBKU09OUCA9IHJlcXVpcmUoXCIuL3BvbGxpbmctanNvbnBcIik7XG5jb25zdCB3ZWJzb2NrZXQgPSByZXF1aXJlKFwiLi93ZWJzb2NrZXRcIik7XG5cbmV4cG9ydHMucG9sbGluZyA9IHBvbGxpbmc7XG5leHBvcnRzLndlYnNvY2tldCA9IHdlYnNvY2tldDtcblxuLyoqXG4gKiBQb2xsaW5nIHRyYW5zcG9ydCBwb2x5bW9ycGhpYyBjb25zdHJ1Y3Rvci5cbiAqIERlY2lkZXMgb24geGhyIHZzIGpzb25wIGJhc2VkIG9uIGZlYXR1cmUgZGV0ZWN0aW9uLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHBvbGxpbmcob3B0cykge1xuICBsZXQgeGhyO1xuICBsZXQgeGQgPSBmYWxzZTtcbiAgbGV0IHhzID0gZmFsc2U7XG4gIGNvbnN0IGpzb25wID0gZmFsc2UgIT09IG9wdHMuanNvbnA7XG5cbiAgaWYgKHR5cGVvZiBsb2NhdGlvbiAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNvbnN0IGlzU1NMID0gXCJodHRwczpcIiA9PT0gbG9jYXRpb24ucHJvdG9jb2w7XG4gICAgbGV0IHBvcnQgPSBsb2NhdGlvbi5wb3J0O1xuXG4gICAgLy8gc29tZSB1c2VyIGFnZW50cyBoYXZlIGVtcHR5IGBsb2NhdGlvbi5wb3J0YFxuICAgIGlmICghcG9ydCkge1xuICAgICAgcG9ydCA9IGlzU1NMID8gNDQzIDogODA7XG4gICAgfVxuXG4gICAgeGQgPSBvcHRzLmhvc3RuYW1lICE9PSBsb2NhdGlvbi5ob3N0bmFtZSB8fCBwb3J0ICE9PSBvcHRzLnBvcnQ7XG4gICAgeHMgPSBvcHRzLnNlY3VyZSAhPT0gaXNTU0w7XG4gIH1cblxuICBvcHRzLnhkb21haW4gPSB4ZDtcbiAgb3B0cy54c2NoZW1lID0geHM7XG4gIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdChvcHRzKTtcblxuICBpZiAoXCJvcGVuXCIgaW4geGhyICYmICFvcHRzLmZvcmNlSlNPTlApIHtcbiAgICByZXR1cm4gbmV3IFhIUihvcHRzKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoIWpzb25wKSB0aHJvdyBuZXcgRXJyb3IoXCJKU09OUCBkaXNhYmxlZFwiKTtcbiAgICByZXR1cm4gbmV3IEpTT05QKG9wdHMpO1xuICB9XG59XG4iLCJjb25zdCBQb2xsaW5nID0gcmVxdWlyZShcIi4vcG9sbGluZ1wiKTtcbmNvbnN0IGdsb2JhbFRoaXMgPSByZXF1aXJlKFwiLi4vZ2xvYmFsVGhpc1wiKTtcblxuY29uc3Qgck5ld2xpbmUgPSAvXFxuL2c7XG5jb25zdCByRXNjYXBlZE5ld2xpbmUgPSAvXFxcXG4vZztcblxuLyoqXG4gKiBHbG9iYWwgSlNPTlAgY2FsbGJhY2tzLlxuICovXG5cbmxldCBjYWxsYmFja3M7XG5cbmNsYXNzIEpTT05QUG9sbGluZyBleHRlbmRzIFBvbGxpbmcge1xuICAvKipcbiAgICogSlNPTlAgUG9sbGluZyBjb25zdHJ1Y3Rvci5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMuXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuICBjb25zdHJ1Y3RvcihvcHRzKSB7XG4gICAgc3VwZXIob3B0cyk7XG5cbiAgICB0aGlzLnF1ZXJ5ID0gdGhpcy5xdWVyeSB8fCB7fTtcblxuICAgIC8vIGRlZmluZSBnbG9iYWwgY2FsbGJhY2tzIGFycmF5IGlmIG5vdCBwcmVzZW50XG4gICAgLy8gd2UgZG8gdGhpcyBoZXJlIChsYXppbHkpIHRvIGF2b2lkIHVubmVlZGVkIGdsb2JhbCBwb2xsdXRpb25cbiAgICBpZiAoIWNhbGxiYWNrcykge1xuICAgICAgLy8gd2UgbmVlZCB0byBjb25zaWRlciBtdWx0aXBsZSBlbmdpbmVzIGluIHRoZSBzYW1lIHBhZ2VcbiAgICAgIGNhbGxiYWNrcyA9IGdsb2JhbFRoaXMuX19fZWlvID0gZ2xvYmFsVGhpcy5fX19laW8gfHwgW107XG4gICAgfVxuXG4gICAgLy8gY2FsbGJhY2sgaWRlbnRpZmllclxuICAgIHRoaXMuaW5kZXggPSBjYWxsYmFja3MubGVuZ3RoO1xuXG4gICAgLy8gYWRkIGNhbGxiYWNrIHRvIGpzb25wIGdsb2JhbFxuICAgIGNhbGxiYWNrcy5wdXNoKHRoaXMub25EYXRhLmJpbmQodGhpcykpO1xuXG4gICAgLy8gYXBwZW5kIHRvIHF1ZXJ5IHN0cmluZ1xuICAgIHRoaXMucXVlcnkuaiA9IHRoaXMuaW5kZXg7XG4gIH1cblxuICAvKipcbiAgICogSlNPTlAgb25seSBzdXBwb3J0cyBiaW5hcnkgYXMgYmFzZTY0IGVuY29kZWQgc3RyaW5nc1xuICAgKi9cbiAgZ2V0IHN1cHBvcnRzQmluYXJ5KCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbG9zZXMgdGhlIHNvY2tldC5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBkb0Nsb3NlKCkge1xuICAgIGlmICh0aGlzLnNjcmlwdCkge1xuICAgICAgLy8gcHJldmVudCBzcHVyaW91cyBlcnJvcnMgZnJvbSBiZWluZyBlbWl0dGVkIHdoZW4gdGhlIHdpbmRvdyBpcyB1bmxvYWRlZFxuICAgICAgdGhpcy5zY3JpcHQub25lcnJvciA9ICgpID0+IHt9O1xuICAgICAgdGhpcy5zY3JpcHQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLnNjcmlwdCk7XG4gICAgICB0aGlzLnNjcmlwdCA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZm9ybSkge1xuICAgICAgdGhpcy5mb3JtLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5mb3JtKTtcbiAgICAgIHRoaXMuZm9ybSA9IG51bGw7XG4gICAgICB0aGlzLmlmcmFtZSA9IG51bGw7XG4gICAgfVxuXG4gICAgc3VwZXIuZG9DbG9zZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0YXJ0cyBhIHBvbGwgY3ljbGUuXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgZG9Qb2xsKCkge1xuICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG5cbiAgICBpZiAodGhpcy5zY3JpcHQpIHtcbiAgICAgIHRoaXMuc2NyaXB0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5zY3JpcHQpO1xuICAgICAgdGhpcy5zY3JpcHQgPSBudWxsO1xuICAgIH1cblxuICAgIHNjcmlwdC5hc3luYyA9IHRydWU7XG4gICAgc2NyaXB0LnNyYyA9IHRoaXMudXJpKCk7XG4gICAgc2NyaXB0Lm9uZXJyb3IgPSBlID0+IHtcbiAgICAgIHRoaXMub25FcnJvcihcImpzb25wIHBvbGwgZXJyb3JcIiwgZSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGluc2VydEF0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIilbMF07XG4gICAgaWYgKGluc2VydEF0KSB7XG4gICAgICBpbnNlcnRBdC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShzY3JpcHQsIGluc2VydEF0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgKGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuYm9keSkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICB9XG4gICAgdGhpcy5zY3JpcHQgPSBzY3JpcHQ7XG5cbiAgICBjb25zdCBpc1VBZ2Vja28gPVxuICAgICAgXCJ1bmRlZmluZWRcIiAhPT0gdHlwZW9mIG5hdmlnYXRvciAmJiAvZ2Vja28vaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuXG4gICAgaWYgKGlzVUFnZWNrbykge1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgaWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGlmcmFtZSk7XG4gICAgICB9LCAxMDApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBXcml0ZXMgd2l0aCBhIGhpZGRlbiBpZnJhbWUuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhIHRvIHNlbmRcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGVkIHVwb24gZmx1c2guXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgZG9Xcml0ZShkYXRhLCBmbikge1xuICAgIGxldCBpZnJhbWU7XG5cbiAgICBpZiAoIXRoaXMuZm9ybSkge1xuICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgICAgY29uc3QgYXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgICAgIGNvbnN0IGlkID0gKHRoaXMuaWZyYW1lSWQgPSBcImVpb19pZnJhbWVfXCIgKyB0aGlzLmluZGV4KTtcblxuICAgICAgZm9ybS5jbGFzc05hbWUgPSBcInNvY2tldGlvXCI7XG4gICAgICBmb3JtLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgICAgZm9ybS5zdHlsZS50b3AgPSBcIi0xMDAwcHhcIjtcbiAgICAgIGZvcm0uc3R5bGUubGVmdCA9IFwiLTEwMDBweFwiO1xuICAgICAgZm9ybS50YXJnZXQgPSBpZDtcbiAgICAgIGZvcm0ubWV0aG9kID0gXCJQT1NUXCI7XG4gICAgICBmb3JtLnNldEF0dHJpYnV0ZShcImFjY2VwdC1jaGFyc2V0XCIsIFwidXRmLThcIik7XG4gICAgICBhcmVhLm5hbWUgPSBcImRcIjtcbiAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoYXJlYSk7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gICAgICB0aGlzLmZvcm0gPSBmb3JtO1xuICAgICAgdGhpcy5hcmVhID0gYXJlYTtcbiAgICB9XG5cbiAgICB0aGlzLmZvcm0uYWN0aW9uID0gdGhpcy51cmkoKTtcblxuICAgIGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuICAgICAgaW5pdElmcmFtZSgpO1xuICAgICAgZm4oKTtcbiAgICB9XG5cbiAgICBjb25zdCBpbml0SWZyYW1lID0gKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuaWZyYW1lKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhpcy5mb3JtLnJlbW92ZUNoaWxkKHRoaXMuaWZyYW1lKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHRoaXMub25FcnJvcihcImpzb25wIHBvbGxpbmcgaWZyYW1lIHJlbW92YWwgZXJyb3JcIiwgZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gaWU2IGR5bmFtaWMgaWZyYW1lcyB3aXRoIHRhcmdldD1cIlwiIHN1cHBvcnQgKHRoYW5rcyBDaHJpcyBMYW1iYWNoZXIpXG4gICAgICAgIGNvbnN0IGh0bWwgPSAnPGlmcmFtZSBzcmM9XCJqYXZhc2NyaXB0OjBcIiBuYW1lPVwiJyArIHRoaXMuaWZyYW1lSWQgKyAnXCI+JztcbiAgICAgICAgaWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChodG1sKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKTtcbiAgICAgICAgaWZyYW1lLm5hbWUgPSB0aGlzLmlmcmFtZUlkO1xuICAgICAgICBpZnJhbWUuc3JjID0gXCJqYXZhc2NyaXB0OjBcIjtcbiAgICAgIH1cblxuICAgICAgaWZyYW1lLmlkID0gdGhpcy5pZnJhbWVJZDtcblxuICAgICAgdGhpcy5mb3JtLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gICAgICB0aGlzLmlmcmFtZSA9IGlmcmFtZTtcbiAgICB9O1xuXG4gICAgaW5pdElmcmFtZSgpO1xuXG4gICAgLy8gZXNjYXBlIFxcbiB0byBwcmV2ZW50IGl0IGZyb20gYmVpbmcgY29udmVydGVkIGludG8gXFxyXFxuIGJ5IHNvbWUgVUFzXG4gICAgLy8gZG91YmxlIGVzY2FwaW5nIGlzIHJlcXVpcmVkIGZvciBlc2NhcGVkIG5ldyBsaW5lcyBiZWNhdXNlIHVuZXNjYXBpbmcgb2YgbmV3IGxpbmVzIGNhbiBiZSBkb25lIHNhZmVseSBvbiBzZXJ2ZXItc2lkZVxuICAgIGRhdGEgPSBkYXRhLnJlcGxhY2UockVzY2FwZWROZXdsaW5lLCBcIlxcXFxcXG5cIik7XG4gICAgdGhpcy5hcmVhLnZhbHVlID0gZGF0YS5yZXBsYWNlKHJOZXdsaW5lLCBcIlxcXFxuXCIpO1xuXG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuZm9ybS5zdWJtaXQoKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuXG4gICAgaWYgKHRoaXMuaWZyYW1lLmF0dGFjaEV2ZW50KSB7XG4gICAgICB0aGlzLmlmcmFtZS5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmlmcmFtZS5yZWFkeVN0YXRlID09PSBcImNvbXBsZXRlXCIpIHtcbiAgICAgICAgICBjb21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlmcmFtZS5vbmxvYWQgPSBjb21wbGV0ZTtcbiAgICB9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBKU09OUFBvbGxpbmc7XG4iLCIvKiBnbG9iYWwgYXR0YWNoRXZlbnQgKi9cblxuY29uc3QgWE1MSHR0cFJlcXVlc3QgPSByZXF1aXJlKFwiLi4vLi4vY29udHJpYi94bWxodHRwcmVxdWVzdC1zc2wvWE1MSHR0cFJlcXVlc3RcIik7XG5jb25zdCBQb2xsaW5nID0gcmVxdWlyZShcIi4vcG9sbGluZ1wiKTtcbmNvbnN0IEVtaXR0ZXIgPSByZXF1aXJlKFwiY29tcG9uZW50LWVtaXR0ZXJcIik7XG5jb25zdCB7IHBpY2sgfSA9IHJlcXVpcmUoXCIuLi91dGlsXCIpO1xuY29uc3QgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoXCIuLi9nbG9iYWxUaGlzXCIpO1xuXG5jb25zdCBkZWJ1ZyA9IHJlcXVpcmUoXCJkZWJ1Z1wiKShcImVuZ2luZS5pby1jbGllbnQ6cG9sbGluZy14aHJcIik7XG5cbi8qKlxuICogRW1wdHkgZnVuY3Rpb25cbiAqL1xuXG5mdW5jdGlvbiBlbXB0eSgpIHt9XG5cbmNvbnN0IGhhc1hIUjIgPSAoZnVuY3Rpb24oKSB7XG4gIGNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCh7IHhkb21haW46IGZhbHNlIH0pO1xuICByZXR1cm4gbnVsbCAhPSB4aHIucmVzcG9uc2VUeXBlO1xufSkoKTtcblxuY2xhc3MgWEhSIGV4dGVuZHMgUG9sbGluZyB7XG4gIC8qKlxuICAgKiBYSFIgUG9sbGluZyBjb25zdHJ1Y3Rvci5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHNcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG4gIGNvbnN0cnVjdG9yKG9wdHMpIHtcbiAgICBzdXBlcihvcHRzKTtcblxuICAgIGlmICh0eXBlb2YgbG9jYXRpb24gIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIGNvbnN0IGlzU1NMID0gXCJodHRwczpcIiA9PT0gbG9jYXRpb24ucHJvdG9jb2w7XG4gICAgICBsZXQgcG9ydCA9IGxvY2F0aW9uLnBvcnQ7XG5cbiAgICAgIC8vIHNvbWUgdXNlciBhZ2VudHMgaGF2ZSBlbXB0eSBgbG9jYXRpb24ucG9ydGBcbiAgICAgIGlmICghcG9ydCkge1xuICAgICAgICBwb3J0ID0gaXNTU0wgPyA0NDMgOiA4MDtcbiAgICAgIH1cblxuICAgICAgdGhpcy54ZCA9XG4gICAgICAgICh0eXBlb2YgbG9jYXRpb24gIT09IFwidW5kZWZpbmVkXCIgJiZcbiAgICAgICAgICBvcHRzLmhvc3RuYW1lICE9PSBsb2NhdGlvbi5ob3N0bmFtZSkgfHxcbiAgICAgICAgcG9ydCAhPT0gb3B0cy5wb3J0O1xuICAgICAgdGhpcy54cyA9IG9wdHMuc2VjdXJlICE9PSBpc1NTTDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogWEhSIHN1cHBvcnRzIGJpbmFyeVxuICAgICAqL1xuICAgIGNvbnN0IGZvcmNlQmFzZTY0ID0gb3B0cyAmJiBvcHRzLmZvcmNlQmFzZTY0O1xuICAgIHRoaXMuc3VwcG9ydHNCaW5hcnkgPSBoYXNYSFIyICYmICFmb3JjZUJhc2U2NDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgcmVxdWVzdC5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZFxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIHJlcXVlc3Qob3B0cyA9IHt9KSB7XG4gICAgT2JqZWN0LmFzc2lnbihvcHRzLCB7IHhkOiB0aGlzLnhkLCB4czogdGhpcy54cyB9LCB0aGlzLm9wdHMpO1xuICAgIHJldHVybiBuZXcgUmVxdWVzdCh0aGlzLnVyaSgpLCBvcHRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kcyBkYXRhLlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YSB0byBzZW5kLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsZWQgdXBvbiBmbHVzaC5cbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBkb1dyaXRlKGRhdGEsIGZuKSB7XG4gICAgY29uc3QgcmVxID0gdGhpcy5yZXF1ZXN0KHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBkYXRhOiBkYXRhXG4gICAgfSk7XG4gICAgcmVxLm9uKFwic3VjY2Vzc1wiLCBmbik7XG4gICAgcmVxLm9uKFwiZXJyb3JcIiwgZXJyID0+IHtcbiAgICAgIHRoaXMub25FcnJvcihcInhociBwb3N0IGVycm9yXCIsIGVycik7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU3RhcnRzIGEgcG9sbCBjeWNsZS5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBkb1BvbGwoKSB7XG4gICAgZGVidWcoXCJ4aHIgcG9sbFwiKTtcbiAgICBjb25zdCByZXEgPSB0aGlzLnJlcXVlc3QoKTtcbiAgICByZXEub24oXCJkYXRhXCIsIHRoaXMub25EYXRhLmJpbmQodGhpcykpO1xuICAgIHJlcS5vbihcImVycm9yXCIsIGVyciA9PiB7XG4gICAgICB0aGlzLm9uRXJyb3IoXCJ4aHIgcG9sbCBlcnJvclwiLCBlcnIpO1xuICAgIH0pO1xuICAgIHRoaXMucG9sbFhociA9IHJlcTtcbiAgfVxufVxuXG5jbGFzcyBSZXF1ZXN0IGV4dGVuZHMgRW1pdHRlciB7XG4gIC8qKlxuICAgKiBSZXF1ZXN0IGNvbnN0cnVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih1cmksIG9wdHMpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMub3B0cyA9IG9wdHM7XG5cbiAgICB0aGlzLm1ldGhvZCA9IG9wdHMubWV0aG9kIHx8IFwiR0VUXCI7XG4gICAgdGhpcy51cmkgPSB1cmk7XG4gICAgdGhpcy5hc3luYyA9IGZhbHNlICE9PSBvcHRzLmFzeW5jO1xuICAgIHRoaXMuZGF0YSA9IHVuZGVmaW5lZCAhPT0gb3B0cy5kYXRhID8gb3B0cy5kYXRhIDogbnVsbDtcblxuICAgIHRoaXMuY3JlYXRlKCk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyB0aGUgWEhSIG9iamVjdCBhbmQgc2VuZHMgdGhlIHJlcXVlc3QuXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgY3JlYXRlKCkge1xuICAgIGNvbnN0IG9wdHMgPSBwaWNrKFxuICAgICAgdGhpcy5vcHRzLFxuICAgICAgXCJhZ2VudFwiLFxuICAgICAgXCJlbmFibGVzWERSXCIsXG4gICAgICBcInBmeFwiLFxuICAgICAgXCJrZXlcIixcbiAgICAgIFwicGFzc3BocmFzZVwiLFxuICAgICAgXCJjZXJ0XCIsXG4gICAgICBcImNhXCIsXG4gICAgICBcImNpcGhlcnNcIixcbiAgICAgIFwicmVqZWN0VW5hdXRob3JpemVkXCIsXG4gICAgICBcImF1dG9VbnJlZlwiXG4gICAgKTtcbiAgICBvcHRzLnhkb21haW4gPSAhIXRoaXMub3B0cy54ZDtcbiAgICBvcHRzLnhzY2hlbWUgPSAhIXRoaXMub3B0cy54cztcblxuICAgIGNvbnN0IHhociA9ICh0aGlzLnhociA9IG5ldyBYTUxIdHRwUmVxdWVzdChvcHRzKSk7XG5cbiAgICB0cnkge1xuICAgICAgZGVidWcoXCJ4aHIgb3BlbiAlczogJXNcIiwgdGhpcy5tZXRob2QsIHRoaXMudXJpKTtcbiAgICAgIHhoci5vcGVuKHRoaXMubWV0aG9kLCB0aGlzLnVyaSwgdGhpcy5hc3luYyk7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAodGhpcy5vcHRzLmV4dHJhSGVhZGVycykge1xuICAgICAgICAgIHhoci5zZXREaXNhYmxlSGVhZGVyQ2hlY2sgJiYgeGhyLnNldERpc2FibGVIZWFkZXJDaGVjayh0cnVlKTtcbiAgICAgICAgICBmb3IgKGxldCBpIGluIHRoaXMub3B0cy5leHRyYUhlYWRlcnMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdHMuZXh0cmFIZWFkZXJzLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKGksIHRoaXMub3B0cy5leHRyYUhlYWRlcnNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge31cblxuICAgICAgaWYgKFwiUE9TVFwiID09PSB0aGlzLm1ldGhvZCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC10eXBlXCIsIFwidGV4dC9wbGFpbjtjaGFyc2V0PVVURi04XCIpO1xuICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgfVxuXG4gICAgICB0cnkge1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkFjY2VwdFwiLCBcIiovKlwiKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHt9XG5cbiAgICAgIC8vIGllNiBjaGVja1xuICAgICAgaWYgKFwid2l0aENyZWRlbnRpYWxzXCIgaW4geGhyKSB7XG4gICAgICAgIHhoci53aXRoQ3JlZGVudGlhbHMgPSB0aGlzLm9wdHMud2l0aENyZWRlbnRpYWxzO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5vcHRzLnJlcXVlc3RUaW1lb3V0KSB7XG4gICAgICAgIHhoci50aW1lb3V0ID0gdGhpcy5vcHRzLnJlcXVlc3RUaW1lb3V0O1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5oYXNYRFIoKSkge1xuICAgICAgICB4aHIub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgIHRoaXMub25Mb2FkKCk7XG4gICAgICAgIH07XG4gICAgICAgIHhoci5vbmVycm9yID0gKCkgPT4ge1xuICAgICAgICAgIHRoaXMub25FcnJvcih4aHIucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XG4gICAgICAgICAgaWYgKDQgIT09IHhoci5yZWFkeVN0YXRlKSByZXR1cm47XG4gICAgICAgICAgaWYgKDIwMCA9PT0geGhyLnN0YXR1cyB8fCAxMjIzID09PSB4aHIuc3RhdHVzKSB7XG4gICAgICAgICAgICB0aGlzLm9uTG9hZCgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBtYWtlIHN1cmUgdGhlIGBlcnJvcmAgZXZlbnQgaGFuZGxlciB0aGF0J3MgdXNlci1zZXRcbiAgICAgICAgICAgIC8vIGRvZXMgbm90IHRocm93IGluIHRoZSBzYW1lIHRpY2sgYW5kIGdldHMgY2F1Z2h0IGhlcmVcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLm9uRXJyb3IodHlwZW9mIHhoci5zdGF0dXMgPT09IFwibnVtYmVyXCIgPyB4aHIuc3RhdHVzIDogMCk7XG4gICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIGRlYnVnKFwieGhyIGRhdGEgJXNcIiwgdGhpcy5kYXRhKTtcbiAgICAgIHhoci5zZW5kKHRoaXMuZGF0YSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy8gTmVlZCB0byBkZWZlciBzaW5jZSAuY3JlYXRlKCkgaXMgY2FsbGVkIGRpcmVjdGx5IGZyb20gdGhlIGNvbnN0cnVjdG9yXG4gICAgICAvLyBhbmQgdGh1cyB0aGUgJ2Vycm9yJyBldmVudCBjYW4gb25seSBiZSBvbmx5IGJvdW5kICphZnRlciogdGhpcyBleGNlcHRpb25cbiAgICAgIC8vIG9jY3Vycy4gIFRoZXJlZm9yZSwgYWxzbywgd2UgY2Fubm90IHRocm93IGhlcmUgYXQgYWxsLlxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMub25FcnJvcihlKTtcbiAgICAgIH0sIDApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIHRoaXMuaW5kZXggPSBSZXF1ZXN0LnJlcXVlc3RzQ291bnQrKztcbiAgICAgIFJlcXVlc3QucmVxdWVzdHNbdGhpcy5pbmRleF0gPSB0aGlzO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgdXBvbiBzdWNjZXNzZnVsIHJlc3BvbnNlLlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIG9uU3VjY2VzcygpIHtcbiAgICB0aGlzLmVtaXQoXCJzdWNjZXNzXCIpO1xuICAgIHRoaXMuY2xlYW51cCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCBpZiB3ZSBoYXZlIGRhdGEuXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgb25EYXRhKGRhdGEpIHtcbiAgICB0aGlzLmVtaXQoXCJkYXRhXCIsIGRhdGEpO1xuICAgIHRoaXMub25TdWNjZXNzKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIHVwb24gZXJyb3IuXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgb25FcnJvcihlcnIpIHtcbiAgICB0aGlzLmVtaXQoXCJlcnJvclwiLCBlcnIpO1xuICAgIHRoaXMuY2xlYW51cCh0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhbnMgdXAgaG91c2UuXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgY2xlYW51cChmcm9tRXJyb3IpIHtcbiAgICBpZiAoXCJ1bmRlZmluZWRcIiA9PT0gdHlwZW9mIHRoaXMueGhyIHx8IG51bGwgPT09IHRoaXMueGhyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIHhtbGh0dHByZXF1ZXN0XG4gICAgaWYgKHRoaXMuaGFzWERSKCkpIHtcbiAgICAgIHRoaXMueGhyLm9ubG9hZCA9IHRoaXMueGhyLm9uZXJyb3IgPSBlbXB0eTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy54aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZW1wdHk7XG4gICAgfVxuXG4gICAgaWYgKGZyb21FcnJvcikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhpcy54aHIuYWJvcnQoKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgZGVsZXRlIFJlcXVlc3QucmVxdWVzdHNbdGhpcy5pbmRleF07XG4gICAgfVxuXG4gICAgdGhpcy54aHIgPSBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCB1cG9uIGxvYWQuXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgb25Mb2FkKCkge1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLnhoci5yZXNwb25zZVRleHQ7XG4gICAgaWYgKGRhdGEgIT09IG51bGwpIHtcbiAgICAgIHRoaXMub25EYXRhKGRhdGEpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBpdCBoYXMgWERvbWFpblJlcXVlc3QuXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgaGFzWERSKCkge1xuICAgIHJldHVybiB0eXBlb2YgWERvbWFpblJlcXVlc3QgIT09IFwidW5kZWZpbmVkXCIgJiYgIXRoaXMueHMgJiYgdGhpcy5lbmFibGVzWERSO1xuICB9XG5cbiAgLyoqXG4gICAqIEFib3J0cyB0aGUgcmVxdWVzdC5cbiAgICpcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG4gIGFib3J0KCkge1xuICAgIHRoaXMuY2xlYW51cCgpO1xuICB9XG59XG5cbi8qKlxuICogQWJvcnRzIHBlbmRpbmcgcmVxdWVzdHMgd2hlbiB1bmxvYWRpbmcgdGhlIHdpbmRvdy4gVGhpcyBpcyBuZWVkZWQgdG8gcHJldmVudFxuICogbWVtb3J5IGxlYWtzIChlLmcuIHdoZW4gdXNpbmcgSUUpIGFuZCB0byBlbnN1cmUgdGhhdCBubyBzcHVyaW91cyBlcnJvciBpc1xuICogZW1pdHRlZC5cbiAqL1xuXG5SZXF1ZXN0LnJlcXVlc3RzQ291bnQgPSAwO1xuUmVxdWVzdC5yZXF1ZXN0cyA9IHt9O1xuXG5pZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gIGlmICh0eXBlb2YgYXR0YWNoRXZlbnQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGF0dGFjaEV2ZW50KFwib251bmxvYWRcIiwgdW5sb2FkSGFuZGxlcik7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFkZEV2ZW50TGlzdGVuZXIgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGNvbnN0IHRlcm1pbmF0aW9uRXZlbnQgPSBcIm9ucGFnZWhpZGVcIiBpbiBnbG9iYWxUaGlzID8gXCJwYWdlaGlkZVwiIDogXCJ1bmxvYWRcIjtcbiAgICBhZGRFdmVudExpc3RlbmVyKHRlcm1pbmF0aW9uRXZlbnQsIHVubG9hZEhhbmRsZXIsIGZhbHNlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB1bmxvYWRIYW5kbGVyKCkge1xuICBmb3IgKGxldCBpIGluIFJlcXVlc3QucmVxdWVzdHMpIHtcbiAgICBpZiAoUmVxdWVzdC5yZXF1ZXN0cy5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgUmVxdWVzdC5yZXF1ZXN0c1tpXS5hYm9ydCgpO1xuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFhIUjtcbm1vZHVsZS5leHBvcnRzLlJlcXVlc3QgPSBSZXF1ZXN0O1xuIiwiY29uc3QgVHJhbnNwb3J0ID0gcmVxdWlyZShcIi4uL3RyYW5zcG9ydFwiKTtcbmNvbnN0IHBhcnNlcXMgPSByZXF1aXJlKFwicGFyc2Vxc1wiKTtcbmNvbnN0IHBhcnNlciA9IHJlcXVpcmUoXCJlbmdpbmUuaW8tcGFyc2VyXCIpO1xuY29uc3QgeWVhc3QgPSByZXF1aXJlKFwieWVhc3RcIik7XG5cbmNvbnN0IGRlYnVnID0gcmVxdWlyZShcImRlYnVnXCIpKFwiZW5naW5lLmlvLWNsaWVudDpwb2xsaW5nXCIpO1xuXG5jbGFzcyBQb2xsaW5nIGV4dGVuZHMgVHJhbnNwb3J0IHtcbiAgLyoqXG4gICAqIFRyYW5zcG9ydCBuYW1lLlxuICAgKi9cbiAgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIFwicG9sbGluZ1wiO1xuICB9XG5cbiAgLyoqXG4gICAqIE9wZW5zIHRoZSBzb2NrZXQgKHRyaWdnZXJzIHBvbGxpbmcpLiBXZSB3cml0ZSBhIFBJTkcgbWVzc2FnZSB0byBkZXRlcm1pbmVcbiAgICogd2hlbiB0aGUgdHJhbnNwb3J0IGlzIG9wZW4uXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgZG9PcGVuKCkge1xuICAgIHRoaXMucG9sbCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhdXNlcyBwb2xsaW5nLlxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayB1cG9uIGJ1ZmZlcnMgYXJlIGZsdXNoZWQgYW5kIHRyYW5zcG9ydCBpcyBwYXVzZWRcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBwYXVzZShvblBhdXNlKSB7XG4gICAgdGhpcy5yZWFkeVN0YXRlID0gXCJwYXVzaW5nXCI7XG5cbiAgICBjb25zdCBwYXVzZSA9ICgpID0+IHtcbiAgICAgIGRlYnVnKFwicGF1c2VkXCIpO1xuICAgICAgdGhpcy5yZWFkeVN0YXRlID0gXCJwYXVzZWRcIjtcbiAgICAgIG9uUGF1c2UoKTtcbiAgICB9O1xuXG4gICAgaWYgKHRoaXMucG9sbGluZyB8fCAhdGhpcy53cml0YWJsZSkge1xuICAgICAgbGV0IHRvdGFsID0gMDtcblxuICAgICAgaWYgKHRoaXMucG9sbGluZykge1xuICAgICAgICBkZWJ1ZyhcIndlIGFyZSBjdXJyZW50bHkgcG9sbGluZyAtIHdhaXRpbmcgdG8gcGF1c2VcIik7XG4gICAgICAgIHRvdGFsKys7XG4gICAgICAgIHRoaXMub25jZShcInBvbGxDb21wbGV0ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICBkZWJ1ZyhcInByZS1wYXVzZSBwb2xsaW5nIGNvbXBsZXRlXCIpO1xuICAgICAgICAgIC0tdG90YWwgfHwgcGF1c2UoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy53cml0YWJsZSkge1xuICAgICAgICBkZWJ1ZyhcIndlIGFyZSBjdXJyZW50bHkgd3JpdGluZyAtIHdhaXRpbmcgdG8gcGF1c2VcIik7XG4gICAgICAgIHRvdGFsKys7XG4gICAgICAgIHRoaXMub25jZShcImRyYWluXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGRlYnVnKFwicHJlLXBhdXNlIHdyaXRpbmcgY29tcGxldGVcIik7XG4gICAgICAgICAgLS10b3RhbCB8fCBwYXVzZSgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcGF1c2UoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU3RhcnRzIHBvbGxpbmcgY3ljbGUuXG4gICAqXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuICBwb2xsKCkge1xuICAgIGRlYnVnKFwicG9sbGluZ1wiKTtcbiAgICB0aGlzLnBvbGxpbmcgPSB0cnVlO1xuICAgIHRoaXMuZG9Qb2xsKCk7XG4gICAgdGhpcy5lbWl0KFwicG9sbFwiKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPdmVybG9hZHMgb25EYXRhIHRvIGRldGVjdCBwYXlsb2Fkcy5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBvbkRhdGEoZGF0YSkge1xuICAgIGRlYnVnKFwicG9sbGluZyBnb3QgZGF0YSAlc1wiLCBkYXRhKTtcbiAgICBjb25zdCBjYWxsYmFjayA9IHBhY2tldCA9PiB7XG4gICAgICAvLyBpZiBpdHMgdGhlIGZpcnN0IG1lc3NhZ2Ugd2UgY29uc2lkZXIgdGhlIHRyYW5zcG9ydCBvcGVuXG4gICAgICBpZiAoXCJvcGVuaW5nXCIgPT09IHRoaXMucmVhZHlTdGF0ZSAmJiBwYWNrZXQudHlwZSA9PT0gXCJvcGVuXCIpIHtcbiAgICAgICAgdGhpcy5vbk9wZW4oKTtcbiAgICAgIH1cblxuICAgICAgLy8gaWYgaXRzIGEgY2xvc2UgcGFja2V0LCB3ZSBjbG9zZSB0aGUgb25nb2luZyByZXF1ZXN0c1xuICAgICAgaWYgKFwiY2xvc2VcIiA9PT0gcGFja2V0LnR5cGUpIHtcbiAgICAgICAgdGhpcy5vbkNsb3NlKCk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgLy8gb3RoZXJ3aXNlIGJ5cGFzcyBvbkRhdGEgYW5kIGhhbmRsZSB0aGUgbWVzc2FnZVxuICAgICAgdGhpcy5vblBhY2tldChwYWNrZXQpO1xuICAgIH07XG5cbiAgICAvLyBkZWNvZGUgcGF5bG9hZFxuICAgIHBhcnNlci5kZWNvZGVQYXlsb2FkKGRhdGEsIHRoaXMuc29ja2V0LmJpbmFyeVR5cGUpLmZvckVhY2goY2FsbGJhY2spO1xuXG4gICAgLy8gaWYgYW4gZXZlbnQgZGlkIG5vdCB0cmlnZ2VyIGNsb3NpbmdcbiAgICBpZiAoXCJjbG9zZWRcIiAhPT0gdGhpcy5yZWFkeVN0YXRlKSB7XG4gICAgICAvLyBpZiB3ZSBnb3QgZGF0YSB3ZSdyZSBub3QgcG9sbGluZ1xuICAgICAgdGhpcy5wb2xsaW5nID0gZmFsc2U7XG4gICAgICB0aGlzLmVtaXQoXCJwb2xsQ29tcGxldGVcIik7XG5cbiAgICAgIGlmIChcIm9wZW5cIiA9PT0gdGhpcy5yZWFkeVN0YXRlKSB7XG4gICAgICAgIHRoaXMucG9sbCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGVidWcoJ2lnbm9yaW5nIHBvbGwgLSB0cmFuc3BvcnQgc3RhdGUgXCIlc1wiJywgdGhpcy5yZWFkeVN0YXRlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRm9yIHBvbGxpbmcsIHNlbmQgYSBjbG9zZSBwYWNrZXQuXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgZG9DbG9zZSgpIHtcbiAgICBjb25zdCBjbG9zZSA9ICgpID0+IHtcbiAgICAgIGRlYnVnKFwid3JpdGluZyBjbG9zZSBwYWNrZXRcIik7XG4gICAgICB0aGlzLndyaXRlKFt7IHR5cGU6IFwiY2xvc2VcIiB9XSk7XG4gICAgfTtcblxuICAgIGlmIChcIm9wZW5cIiA9PT0gdGhpcy5yZWFkeVN0YXRlKSB7XG4gICAgICBkZWJ1ZyhcInRyYW5zcG9ydCBvcGVuIC0gY2xvc2luZ1wiKTtcbiAgICAgIGNsb3NlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGluIGNhc2Ugd2UncmUgdHJ5aW5nIHRvIGNsb3NlIHdoaWxlXG4gICAgICAvLyBoYW5kc2hha2luZyBpcyBpbiBwcm9ncmVzcyAoR0gtMTY0KVxuICAgICAgZGVidWcoXCJ0cmFuc3BvcnQgbm90IG9wZW4gLSBkZWZlcnJpbmcgY2xvc2VcIik7XG4gICAgICB0aGlzLm9uY2UoXCJvcGVuXCIsIGNsb3NlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogV3JpdGVzIGEgcGFja2V0cyBwYXlsb2FkLlxuICAgKlxuICAgKiBAcGFyYW0ge0FycmF5fSBkYXRhIHBhY2tldHNcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZHJhaW4gY2FsbGJhY2tcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICB3cml0ZShwYWNrZXRzKSB7XG4gICAgdGhpcy53cml0YWJsZSA9IGZhbHNlO1xuXG4gICAgcGFyc2VyLmVuY29kZVBheWxvYWQocGFja2V0cywgZGF0YSA9PiB7XG4gICAgICB0aGlzLmRvV3JpdGUoZGF0YSwgKCkgPT4ge1xuICAgICAgICB0aGlzLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5lbWl0KFwiZHJhaW5cIik7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZW5lcmF0ZXMgdXJpIGZvciBjb25uZWN0aW9uLlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIHVyaSgpIHtcbiAgICBsZXQgcXVlcnkgPSB0aGlzLnF1ZXJ5IHx8IHt9O1xuICAgIGNvbnN0IHNjaGVtYSA9IHRoaXMub3B0cy5zZWN1cmUgPyBcImh0dHBzXCIgOiBcImh0dHBcIjtcbiAgICBsZXQgcG9ydCA9IFwiXCI7XG5cbiAgICAvLyBjYWNoZSBidXN0aW5nIGlzIGZvcmNlZFxuICAgIGlmIChmYWxzZSAhPT0gdGhpcy5vcHRzLnRpbWVzdGFtcFJlcXVlc3RzKSB7XG4gICAgICBxdWVyeVt0aGlzLm9wdHMudGltZXN0YW1wUGFyYW1dID0geWVhc3QoKTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuc3VwcG9ydHNCaW5hcnkgJiYgIXF1ZXJ5LnNpZCkge1xuICAgICAgcXVlcnkuYjY0ID0gMTtcbiAgICB9XG5cbiAgICBxdWVyeSA9IHBhcnNlcXMuZW5jb2RlKHF1ZXJ5KTtcblxuICAgIC8vIGF2b2lkIHBvcnQgaWYgZGVmYXVsdCBmb3Igc2NoZW1hXG4gICAgaWYgKFxuICAgICAgdGhpcy5vcHRzLnBvcnQgJiZcbiAgICAgICgoXCJodHRwc1wiID09PSBzY2hlbWEgJiYgTnVtYmVyKHRoaXMub3B0cy5wb3J0KSAhPT0gNDQzKSB8fFxuICAgICAgICAoXCJodHRwXCIgPT09IHNjaGVtYSAmJiBOdW1iZXIodGhpcy5vcHRzLnBvcnQpICE9PSA4MCkpXG4gICAgKSB7XG4gICAgICBwb3J0ID0gXCI6XCIgKyB0aGlzLm9wdHMucG9ydDtcbiAgICB9XG5cbiAgICAvLyBwcmVwZW5kID8gdG8gcXVlcnlcbiAgICBpZiAocXVlcnkubGVuZ3RoKSB7XG4gICAgICBxdWVyeSA9IFwiP1wiICsgcXVlcnk7XG4gICAgfVxuXG4gICAgY29uc3QgaXB2NiA9IHRoaXMub3B0cy5ob3N0bmFtZS5pbmRleE9mKFwiOlwiKSAhPT0gLTE7XG4gICAgcmV0dXJuIChcbiAgICAgIHNjaGVtYSArXG4gICAgICBcIjovL1wiICtcbiAgICAgIChpcHY2ID8gXCJbXCIgKyB0aGlzLm9wdHMuaG9zdG5hbWUgKyBcIl1cIiA6IHRoaXMub3B0cy5ob3N0bmFtZSkgK1xuICAgICAgcG9ydCArXG4gICAgICB0aGlzLm9wdHMucGF0aCArXG4gICAgICBxdWVyeVxuICAgICk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQb2xsaW5nO1xuIiwiY29uc3QgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoXCIuLi9nbG9iYWxUaGlzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgV2ViU29ja2V0OiBnbG9iYWxUaGlzLldlYlNvY2tldCB8fCBnbG9iYWxUaGlzLk1veldlYlNvY2tldCxcbiAgdXNpbmdCcm93c2VyV2ViU29ja2V0OiB0cnVlLFxuICBkZWZhdWx0QmluYXJ5VHlwZTogXCJhcnJheWJ1ZmZlclwiXG59O1xuIiwiY29uc3QgVHJhbnNwb3J0ID0gcmVxdWlyZShcIi4uL3RyYW5zcG9ydFwiKTtcbmNvbnN0IHBhcnNlciA9IHJlcXVpcmUoXCJlbmdpbmUuaW8tcGFyc2VyXCIpO1xuY29uc3QgcGFyc2VxcyA9IHJlcXVpcmUoXCJwYXJzZXFzXCIpO1xuY29uc3QgeWVhc3QgPSByZXF1aXJlKFwieWVhc3RcIik7XG5jb25zdCB7IHBpY2sgfSA9IHJlcXVpcmUoXCIuLi91dGlsXCIpO1xuY29uc3Qge1xuICBXZWJTb2NrZXQsXG4gIHVzaW5nQnJvd3NlcldlYlNvY2tldCxcbiAgZGVmYXVsdEJpbmFyeVR5cGVcbn0gPSByZXF1aXJlKFwiLi93ZWJzb2NrZXQtY29uc3RydWN0b3JcIik7XG5cbmNvbnN0IGRlYnVnID0gcmVxdWlyZShcImRlYnVnXCIpKFwiZW5naW5lLmlvLWNsaWVudDp3ZWJzb2NrZXRcIik7XG5cbi8vIGRldGVjdCBSZWFjdE5hdGl2ZSBlbnZpcm9ubWVudFxuY29uc3QgaXNSZWFjdE5hdGl2ZSA9XG4gIHR5cGVvZiBuYXZpZ2F0b3IgIT09IFwidW5kZWZpbmVkXCIgJiZcbiAgdHlwZW9mIG5hdmlnYXRvci5wcm9kdWN0ID09PSBcInN0cmluZ1wiICYmXG4gIG5hdmlnYXRvci5wcm9kdWN0LnRvTG93ZXJDYXNlKCkgPT09IFwicmVhY3RuYXRpdmVcIjtcblxuY2xhc3MgV1MgZXh0ZW5kcyBUcmFuc3BvcnQge1xuICAvKipcbiAgICogV2ViU29ja2V0IHRyYW5zcG9ydCBjb25zdHJ1Y3Rvci5cbiAgICpcbiAgICogQGFwaSB7T2JqZWN0fSBjb25uZWN0aW9uIG9wdGlvbnNcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG4gIGNvbnN0cnVjdG9yKG9wdHMpIHtcbiAgICBzdXBlcihvcHRzKTtcblxuICAgIHRoaXMuc3VwcG9ydHNCaW5hcnkgPSAhb3B0cy5mb3JjZUJhc2U2NDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmFuc3BvcnQgbmFtZS5cbiAgICpcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG4gIGdldCBuYW1lKCkge1xuICAgIHJldHVybiBcIndlYnNvY2tldFwiO1xuICB9XG5cbiAgLyoqXG4gICAqIE9wZW5zIHNvY2tldC5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBkb09wZW4oKSB7XG4gICAgaWYgKCF0aGlzLmNoZWNrKCkpIHtcbiAgICAgIC8vIGxldCBwcm9iZSB0aW1lb3V0XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdXJpID0gdGhpcy51cmkoKTtcbiAgICBjb25zdCBwcm90b2NvbHMgPSB0aGlzLm9wdHMucHJvdG9jb2xzO1xuXG4gICAgLy8gUmVhY3QgTmF0aXZlIG9ubHkgc3VwcG9ydHMgdGhlICdoZWFkZXJzJyBvcHRpb24sIGFuZCB3aWxsIHByaW50IGEgd2FybmluZyBpZiBhbnl0aGluZyBlbHNlIGlzIHBhc3NlZFxuICAgIGNvbnN0IG9wdHMgPSBpc1JlYWN0TmF0aXZlXG4gICAgICA/IHt9XG4gICAgICA6IHBpY2soXG4gICAgICAgICAgdGhpcy5vcHRzLFxuICAgICAgICAgIFwiYWdlbnRcIixcbiAgICAgICAgICBcInBlck1lc3NhZ2VEZWZsYXRlXCIsXG4gICAgICAgICAgXCJwZnhcIixcbiAgICAgICAgICBcImtleVwiLFxuICAgICAgICAgIFwicGFzc3BocmFzZVwiLFxuICAgICAgICAgIFwiY2VydFwiLFxuICAgICAgICAgIFwiY2FcIixcbiAgICAgICAgICBcImNpcGhlcnNcIixcbiAgICAgICAgICBcInJlamVjdFVuYXV0aG9yaXplZFwiLFxuICAgICAgICAgIFwibG9jYWxBZGRyZXNzXCIsXG4gICAgICAgICAgXCJwcm90b2NvbFZlcnNpb25cIixcbiAgICAgICAgICBcIm9yaWdpblwiLFxuICAgICAgICAgIFwibWF4UGF5bG9hZFwiLFxuICAgICAgICAgIFwiZmFtaWx5XCIsXG4gICAgICAgICAgXCJjaGVja1NlcnZlcklkZW50aXR5XCJcbiAgICAgICAgKTtcblxuICAgIGlmICh0aGlzLm9wdHMuZXh0cmFIZWFkZXJzKSB7XG4gICAgICBvcHRzLmhlYWRlcnMgPSB0aGlzLm9wdHMuZXh0cmFIZWFkZXJzO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICB0aGlzLndzID1cbiAgICAgICAgdXNpbmdCcm93c2VyV2ViU29ja2V0ICYmICFpc1JlYWN0TmF0aXZlXG4gICAgICAgICAgPyBwcm90b2NvbHNcbiAgICAgICAgICAgID8gbmV3IFdlYlNvY2tldCh1cmksIHByb3RvY29scylcbiAgICAgICAgICAgIDogbmV3IFdlYlNvY2tldCh1cmkpXG4gICAgICAgICAgOiBuZXcgV2ViU29ja2V0KHVyaSwgcHJvdG9jb2xzLCBvcHRzKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmVtaXQoXCJlcnJvclwiLCBlcnIpO1xuICAgIH1cblxuICAgIHRoaXMud3MuYmluYXJ5VHlwZSA9IHRoaXMuc29ja2V0LmJpbmFyeVR5cGUgfHwgZGVmYXVsdEJpbmFyeVR5cGU7XG5cbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBldmVudCBsaXN0ZW5lcnMgdG8gdGhlIHNvY2tldFxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHRoaXMud3Mub25vcGVuID0gKCkgPT4ge1xuICAgICAgaWYgKHRoaXMub3B0cy5hdXRvVW5yZWYpIHtcbiAgICAgICAgdGhpcy53cy5fc29ja2V0LnVucmVmKCk7XG4gICAgICB9XG4gICAgICB0aGlzLm9uT3BlbigpO1xuICAgIH07XG4gICAgdGhpcy53cy5vbmNsb3NlID0gdGhpcy5vbkNsb3NlLmJpbmQodGhpcyk7XG4gICAgdGhpcy53cy5vbm1lc3NhZ2UgPSBldiA9PiB0aGlzLm9uRGF0YShldi5kYXRhKTtcbiAgICB0aGlzLndzLm9uZXJyb3IgPSBlID0+IHRoaXMub25FcnJvcihcIndlYnNvY2tldCBlcnJvclwiLCBlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXcml0ZXMgZGF0YSB0byBzb2NrZXQuXG4gICAqXG4gICAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IG9mIHBhY2tldHMuXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgd3JpdGUocGFja2V0cykge1xuICAgIHRoaXMud3JpdGFibGUgPSBmYWxzZTtcblxuICAgIC8vIGVuY29kZVBhY2tldCBlZmZpY2llbnQgYXMgaXQgdXNlcyBXUyBmcmFtaW5nXG4gICAgLy8gbm8gbmVlZCBmb3IgZW5jb2RlUGF5bG9hZFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFja2V0cy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgcGFja2V0ID0gcGFja2V0c1tpXTtcbiAgICAgIGNvbnN0IGxhc3RQYWNrZXQgPSBpID09PSBwYWNrZXRzLmxlbmd0aCAtIDE7XG5cbiAgICAgIHBhcnNlci5lbmNvZGVQYWNrZXQocGFja2V0LCB0aGlzLnN1cHBvcnRzQmluYXJ5LCBkYXRhID0+IHtcbiAgICAgICAgLy8gYWx3YXlzIGNyZWF0ZSBhIG5ldyBvYmplY3QgKEdILTQzNylcbiAgICAgICAgY29uc3Qgb3B0cyA9IHt9O1xuICAgICAgICBpZiAoIXVzaW5nQnJvd3NlcldlYlNvY2tldCkge1xuICAgICAgICAgIGlmIChwYWNrZXQub3B0aW9ucykge1xuICAgICAgICAgICAgb3B0cy5jb21wcmVzcyA9IHBhY2tldC5vcHRpb25zLmNvbXByZXNzO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0aGlzLm9wdHMucGVyTWVzc2FnZURlZmxhdGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGxlbiA9XG4gICAgICAgICAgICAgIFwic3RyaW5nXCIgPT09IHR5cGVvZiBkYXRhID8gQnVmZmVyLmJ5dGVMZW5ndGgoZGF0YSkgOiBkYXRhLmxlbmd0aDtcbiAgICAgICAgICAgIGlmIChsZW4gPCB0aGlzLm9wdHMucGVyTWVzc2FnZURlZmxhdGUudGhyZXNob2xkKSB7XG4gICAgICAgICAgICAgIG9wdHMuY29tcHJlc3MgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTb21ldGltZXMgdGhlIHdlYnNvY2tldCBoYXMgYWxyZWFkeSBiZWVuIGNsb3NlZCBidXQgdGhlIGJyb3dzZXIgZGlkbid0XG4gICAgICAgIC8vIGhhdmUgYSBjaGFuY2Ugb2YgaW5mb3JtaW5nIHVzIGFib3V0IGl0IHlldCwgaW4gdGhhdCBjYXNlIHNlbmQgd2lsbFxuICAgICAgICAvLyB0aHJvdyBhbiBlcnJvclxuICAgICAgICB0cnkge1xuICAgICAgICAgIGlmICh1c2luZ0Jyb3dzZXJXZWJTb2NrZXQpIHtcbiAgICAgICAgICAgIC8vIFR5cGVFcnJvciBpcyB0aHJvd24gd2hlbiBwYXNzaW5nIHRoZSBzZWNvbmQgYXJndW1lbnQgb24gU2FmYXJpXG4gICAgICAgICAgICB0aGlzLndzLnNlbmQoZGF0YSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMud3Muc2VuZChkYXRhLCBvcHRzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBkZWJ1ZyhcIndlYnNvY2tldCBjbG9zZWQgYmVmb3JlIG9uY2xvc2UgZXZlbnRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobGFzdFBhY2tldCkge1xuICAgICAgICAgIC8vIGZha2UgZHJhaW5cbiAgICAgICAgICAvLyBkZWZlciB0byBuZXh0IHRpY2sgdG8gYWxsb3cgU29ja2V0IHRvIGNsZWFyIHdyaXRlQnVmZmVyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuZW1pdChcImRyYWluXCIpO1xuICAgICAgICAgIH0sIDApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIHVwb24gY2xvc2VcbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBvbkNsb3NlKCkge1xuICAgIFRyYW5zcG9ydC5wcm90b3R5cGUub25DbG9zZS5jYWxsKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsb3NlcyBzb2NrZXQuXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgZG9DbG9zZSgpIHtcbiAgICBpZiAodHlwZW9mIHRoaXMud3MgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIHRoaXMud3MuY2xvc2UoKTtcbiAgICAgIHRoaXMud3MgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZW5lcmF0ZXMgdXJpIGZvciBjb25uZWN0aW9uLlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIHVyaSgpIHtcbiAgICBsZXQgcXVlcnkgPSB0aGlzLnF1ZXJ5IHx8IHt9O1xuICAgIGNvbnN0IHNjaGVtYSA9IHRoaXMub3B0cy5zZWN1cmUgPyBcIndzc1wiIDogXCJ3c1wiO1xuICAgIGxldCBwb3J0ID0gXCJcIjtcblxuICAgIC8vIGF2b2lkIHBvcnQgaWYgZGVmYXVsdCBmb3Igc2NoZW1hXG4gICAgaWYgKFxuICAgICAgdGhpcy5vcHRzLnBvcnQgJiZcbiAgICAgICgoXCJ3c3NcIiA9PT0gc2NoZW1hICYmIE51bWJlcih0aGlzLm9wdHMucG9ydCkgIT09IDQ0MykgfHxcbiAgICAgICAgKFwid3NcIiA9PT0gc2NoZW1hICYmIE51bWJlcih0aGlzLm9wdHMucG9ydCkgIT09IDgwKSlcbiAgICApIHtcbiAgICAgIHBvcnQgPSBcIjpcIiArIHRoaXMub3B0cy5wb3J0O1xuICAgIH1cblxuICAgIC8vIGFwcGVuZCB0aW1lc3RhbXAgdG8gVVJJXG4gICAgaWYgKHRoaXMub3B0cy50aW1lc3RhbXBSZXF1ZXN0cykge1xuICAgICAgcXVlcnlbdGhpcy5vcHRzLnRpbWVzdGFtcFBhcmFtXSA9IHllYXN0KCk7XG4gICAgfVxuXG4gICAgLy8gY29tbXVuaWNhdGUgYmluYXJ5IHN1cHBvcnQgY2FwYWJpbGl0aWVzXG4gICAgaWYgKCF0aGlzLnN1cHBvcnRzQmluYXJ5KSB7XG4gICAgICBxdWVyeS5iNjQgPSAxO1xuICAgIH1cblxuICAgIHF1ZXJ5ID0gcGFyc2Vxcy5lbmNvZGUocXVlcnkpO1xuXG4gICAgLy8gcHJlcGVuZCA/IHRvIHF1ZXJ5XG4gICAgaWYgKHF1ZXJ5Lmxlbmd0aCkge1xuICAgICAgcXVlcnkgPSBcIj9cIiArIHF1ZXJ5O1xuICAgIH1cblxuICAgIGNvbnN0IGlwdjYgPSB0aGlzLm9wdHMuaG9zdG5hbWUuaW5kZXhPZihcIjpcIikgIT09IC0xO1xuICAgIHJldHVybiAoXG4gICAgICBzY2hlbWEgK1xuICAgICAgXCI6Ly9cIiArXG4gICAgICAoaXB2NiA/IFwiW1wiICsgdGhpcy5vcHRzLmhvc3RuYW1lICsgXCJdXCIgOiB0aGlzLm9wdHMuaG9zdG5hbWUpICtcbiAgICAgIHBvcnQgK1xuICAgICAgdGhpcy5vcHRzLnBhdGggK1xuICAgICAgcXVlcnlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEZlYXR1cmUgZGV0ZWN0aW9uIGZvciBXZWJTb2NrZXQuXG4gICAqXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59IHdoZXRoZXIgdGhpcyB0cmFuc3BvcnQgaXMgYXZhaWxhYmxlLlxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cbiAgY2hlY2soKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICEhV2ViU29ja2V0ICYmXG4gICAgICAhKFwiX19pbml0aWFsaXplXCIgaW4gV2ViU29ja2V0ICYmIHRoaXMubmFtZSA9PT0gV1MucHJvdG90eXBlLm5hbWUpXG4gICAgKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFdTO1xuIiwibW9kdWxlLmV4cG9ydHMucGljayA9IChvYmosIC4uLmF0dHIpID0+IHtcbiAgcmV0dXJuIGF0dHIucmVkdWNlKChhY2MsIGspID0+IHtcbiAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICBhY2Nba10gPSBvYmpba107XG4gICAgfVxuICAgIHJldHVybiBhY2M7XG4gIH0sIHt9KTtcbn07XG4iLCIvLyBicm93c2VyIHNoaW0gZm9yIHhtbGh0dHByZXF1ZXN0IG1vZHVsZVxuXG5jb25zdCBoYXNDT1JTID0gcmVxdWlyZShcImhhcy1jb3JzXCIpO1xuY29uc3QgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoXCIuL2dsb2JhbFRoaXNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3B0cykge1xuICBjb25zdCB4ZG9tYWluID0gb3B0cy54ZG9tYWluO1xuXG4gIC8vIHNjaGVtZSBtdXN0IGJlIHNhbWUgd2hlbiB1c2lnbiBYRG9tYWluUmVxdWVzdFxuICAvLyBodHRwOi8vYmxvZ3MubXNkbi5jb20vYi9pZWludGVybmFscy9hcmNoaXZlLzIwMTAvMDUvMTMveGRvbWFpbnJlcXVlc3QtcmVzdHJpY3Rpb25zLWxpbWl0YXRpb25zLWFuZC13b3JrYXJvdW5kcy5hc3B4XG4gIGNvbnN0IHhzY2hlbWUgPSBvcHRzLnhzY2hlbWU7XG5cbiAgLy8gWERvbWFpblJlcXVlc3QgaGFzIGEgZmxvdyBvZiBub3Qgc2VuZGluZyBjb29raWUsIHRoZXJlZm9yZSBpdCBzaG91bGQgYmUgZGlzYWJsZWQgYXMgYSBkZWZhdWx0LlxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vQXV0b21hdHRpYy9lbmdpbmUuaW8tY2xpZW50L3B1bGwvMjE3XG4gIGNvbnN0IGVuYWJsZXNYRFIgPSBvcHRzLmVuYWJsZXNYRFI7XG5cbiAgLy8gWE1MSHR0cFJlcXVlc3QgY2FuIGJlIGRpc2FibGVkIG9uIElFXG4gIHRyeSB7XG4gICAgaWYgKFwidW5kZWZpbmVkXCIgIT09IHR5cGVvZiBYTUxIdHRwUmVxdWVzdCAmJiAoIXhkb21haW4gfHwgaGFzQ09SUykpIHtcbiAgICAgIHJldHVybiBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHt9XG5cbiAgLy8gVXNlIFhEb21haW5SZXF1ZXN0IGZvciBJRTggaWYgZW5hYmxlc1hEUiBpcyB0cnVlXG4gIC8vIGJlY2F1c2UgbG9hZGluZyBiYXIga2VlcHMgZmxhc2hpbmcgd2hlbiB1c2luZyBqc29ucC1wb2xsaW5nXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS95dWppb3Nha2Evc29ja2UuaW8taWU4LWxvYWRpbmctZXhhbXBsZVxuICB0cnkge1xuICAgIGlmIChcInVuZGVmaW5lZFwiICE9PSB0eXBlb2YgWERvbWFpblJlcXVlc3QgJiYgIXhzY2hlbWUgJiYgZW5hYmxlc1hEUikge1xuICAgICAgcmV0dXJuIG5ldyBYRG9tYWluUmVxdWVzdCgpO1xuICAgIH1cbiAgfSBjYXRjaCAoZSkge31cblxuICBpZiAoIXhkb21haW4pIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIG5ldyBnbG9iYWxUaGlzW1tcIkFjdGl2ZVwiXS5jb25jYXQoXCJPYmplY3RcIikuam9pbihcIlhcIildKFxuICAgICAgICBcIk1pY3Jvc29mdC5YTUxIVFRQXCJcbiAgICAgICk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxufTtcbiIsImNvbnN0IFBBQ0tFVF9UWVBFUyA9IE9iamVjdC5jcmVhdGUobnVsbCk7IC8vIG5vIE1hcCA9IG5vIHBvbHlmaWxsXG5QQUNLRVRfVFlQRVNbXCJvcGVuXCJdID0gXCIwXCI7XG5QQUNLRVRfVFlQRVNbXCJjbG9zZVwiXSA9IFwiMVwiO1xuUEFDS0VUX1RZUEVTW1wicGluZ1wiXSA9IFwiMlwiO1xuUEFDS0VUX1RZUEVTW1wicG9uZ1wiXSA9IFwiM1wiO1xuUEFDS0VUX1RZUEVTW1wibWVzc2FnZVwiXSA9IFwiNFwiO1xuUEFDS0VUX1RZUEVTW1widXBncmFkZVwiXSA9IFwiNVwiO1xuUEFDS0VUX1RZUEVTW1wibm9vcFwiXSA9IFwiNlwiO1xuXG5jb25zdCBQQUNLRVRfVFlQRVNfUkVWRVJTRSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5PYmplY3Qua2V5cyhQQUNLRVRfVFlQRVMpLmZvckVhY2goa2V5ID0+IHtcbiAgUEFDS0VUX1RZUEVTX1JFVkVSU0VbUEFDS0VUX1RZUEVTW2tleV1dID0ga2V5O1xufSk7XG5cbmNvbnN0IEVSUk9SX1BBQ0tFVCA9IHsgdHlwZTogXCJlcnJvclwiLCBkYXRhOiBcInBhcnNlciBlcnJvclwiIH07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBQQUNLRVRfVFlQRVMsXG4gIFBBQ0tFVF9UWVBFU19SRVZFUlNFLFxuICBFUlJPUl9QQUNLRVRcbn07XG4iLCJjb25zdCB7IFBBQ0tFVF9UWVBFU19SRVZFUlNFLCBFUlJPUl9QQUNLRVQgfSA9IHJlcXVpcmUoXCIuL2NvbW1vbnNcIik7XG5cbmNvbnN0IHdpdGhOYXRpdmVBcnJheUJ1ZmZlciA9IHR5cGVvZiBBcnJheUJ1ZmZlciA9PT0gXCJmdW5jdGlvblwiO1xuXG5sZXQgYmFzZTY0ZGVjb2RlcjtcbmlmICh3aXRoTmF0aXZlQXJyYXlCdWZmZXIpIHtcbiAgYmFzZTY0ZGVjb2RlciA9IHJlcXVpcmUoXCJiYXNlNjQtYXJyYXlidWZmZXJcIik7XG59XG5cbmNvbnN0IGRlY29kZVBhY2tldCA9IChlbmNvZGVkUGFja2V0LCBiaW5hcnlUeXBlKSA9PiB7XG4gIGlmICh0eXBlb2YgZW5jb2RlZFBhY2tldCAhPT0gXCJzdHJpbmdcIikge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBcIm1lc3NhZ2VcIixcbiAgICAgIGRhdGE6IG1hcEJpbmFyeShlbmNvZGVkUGFja2V0LCBiaW5hcnlUeXBlKVxuICAgIH07XG4gIH1cbiAgY29uc3QgdHlwZSA9IGVuY29kZWRQYWNrZXQuY2hhckF0KDApO1xuICBpZiAodHlwZSA9PT0gXCJiXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogXCJtZXNzYWdlXCIsXG4gICAgICBkYXRhOiBkZWNvZGVCYXNlNjRQYWNrZXQoZW5jb2RlZFBhY2tldC5zdWJzdHJpbmcoMSksIGJpbmFyeVR5cGUpXG4gICAgfTtcbiAgfVxuICBjb25zdCBwYWNrZXRUeXBlID0gUEFDS0VUX1RZUEVTX1JFVkVSU0VbdHlwZV07XG4gIGlmICghcGFja2V0VHlwZSkge1xuICAgIHJldHVybiBFUlJPUl9QQUNLRVQ7XG4gIH1cbiAgcmV0dXJuIGVuY29kZWRQYWNrZXQubGVuZ3RoID4gMVxuICAgID8ge1xuICAgICAgICB0eXBlOiBQQUNLRVRfVFlQRVNfUkVWRVJTRVt0eXBlXSxcbiAgICAgICAgZGF0YTogZW5jb2RlZFBhY2tldC5zdWJzdHJpbmcoMSlcbiAgICAgIH1cbiAgICA6IHtcbiAgICAgICAgdHlwZTogUEFDS0VUX1RZUEVTX1JFVkVSU0VbdHlwZV1cbiAgICAgIH07XG59O1xuXG5jb25zdCBkZWNvZGVCYXNlNjRQYWNrZXQgPSAoZGF0YSwgYmluYXJ5VHlwZSkgPT4ge1xuICBpZiAoYmFzZTY0ZGVjb2Rlcikge1xuICAgIGNvbnN0IGRlY29kZWQgPSBiYXNlNjRkZWNvZGVyLmRlY29kZShkYXRhKTtcbiAgICByZXR1cm4gbWFwQmluYXJ5KGRlY29kZWQsIGJpbmFyeVR5cGUpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB7IGJhc2U2NDogdHJ1ZSwgZGF0YSB9OyAvLyBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzXG4gIH1cbn07XG5cbmNvbnN0IG1hcEJpbmFyeSA9IChkYXRhLCBiaW5hcnlUeXBlKSA9PiB7XG4gIHN3aXRjaCAoYmluYXJ5VHlwZSkge1xuICAgIGNhc2UgXCJibG9iXCI6XG4gICAgICByZXR1cm4gZGF0YSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyID8gbmV3IEJsb2IoW2RhdGFdKSA6IGRhdGE7XG4gICAgY2FzZSBcImFycmF5YnVmZmVyXCI6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBkYXRhOyAvLyBhc3N1bWluZyB0aGUgZGF0YSBpcyBhbHJlYWR5IGFuIEFycmF5QnVmZmVyXG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZGVjb2RlUGFja2V0O1xuIiwiY29uc3QgeyBQQUNLRVRfVFlQRVMgfSA9IHJlcXVpcmUoXCIuL2NvbW1vbnNcIik7XG5cbmNvbnN0IHdpdGhOYXRpdmVCbG9iID1cbiAgdHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiB8fFxuICAodHlwZW9mIEJsb2IgIT09IFwidW5kZWZpbmVkXCIgJiZcbiAgICBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoQmxvYikgPT09IFwiW29iamVjdCBCbG9iQ29uc3RydWN0b3JdXCIpO1xuY29uc3Qgd2l0aE5hdGl2ZUFycmF5QnVmZmVyID0gdHlwZW9mIEFycmF5QnVmZmVyID09PSBcImZ1bmN0aW9uXCI7XG5cbi8vIEFycmF5QnVmZmVyLmlzVmlldyBtZXRob2QgaXMgbm90IGRlZmluZWQgaW4gSUUxMFxuY29uc3QgaXNWaWV3ID0gb2JqID0+IHtcbiAgcmV0dXJuIHR5cGVvZiBBcnJheUJ1ZmZlci5pc1ZpZXcgPT09IFwiZnVuY3Rpb25cIlxuICAgID8gQXJyYXlCdWZmZXIuaXNWaWV3KG9iailcbiAgICA6IG9iaiAmJiBvYmouYnVmZmVyIGluc3RhbmNlb2YgQXJyYXlCdWZmZXI7XG59O1xuXG5jb25zdCBlbmNvZGVQYWNrZXQgPSAoeyB0eXBlLCBkYXRhIH0sIHN1cHBvcnRzQmluYXJ5LCBjYWxsYmFjaykgPT4ge1xuICBpZiAod2l0aE5hdGl2ZUJsb2IgJiYgZGF0YSBpbnN0YW5jZW9mIEJsb2IpIHtcbiAgICBpZiAoc3VwcG9ydHNCaW5hcnkpIHtcbiAgICAgIHJldHVybiBjYWxsYmFjayhkYXRhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGVuY29kZUJsb2JBc0Jhc2U2NChkYXRhLCBjYWxsYmFjayk7XG4gICAgfVxuICB9IGVsc2UgaWYgKFxuICAgIHdpdGhOYXRpdmVBcnJheUJ1ZmZlciAmJlxuICAgIChkYXRhIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIgfHwgaXNWaWV3KGRhdGEpKVxuICApIHtcbiAgICBpZiAoc3VwcG9ydHNCaW5hcnkpIHtcbiAgICAgIHJldHVybiBjYWxsYmFjayhkYXRhIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIgPyBkYXRhIDogZGF0YS5idWZmZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZW5jb2RlQmxvYkFzQmFzZTY0KG5ldyBCbG9iKFtkYXRhXSksIGNhbGxiYWNrKTtcbiAgICB9XG4gIH1cbiAgLy8gcGxhaW4gc3RyaW5nXG4gIHJldHVybiBjYWxsYmFjayhQQUNLRVRfVFlQRVNbdHlwZV0gKyAoZGF0YSB8fCBcIlwiKSk7XG59O1xuXG5jb25zdCBlbmNvZGVCbG9iQXNCYXNlNjQgPSAoZGF0YSwgY2FsbGJhY2spID0+IHtcbiAgY29uc3QgZmlsZVJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gIGZpbGVSZWFkZXIub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgY29udGVudCA9IGZpbGVSZWFkZXIucmVzdWx0LnNwbGl0KFwiLFwiKVsxXTtcbiAgICBjYWxsYmFjayhcImJcIiArIGNvbnRlbnQpO1xuICB9O1xuICByZXR1cm4gZmlsZVJlYWRlci5yZWFkQXNEYXRhVVJMKGRhdGEpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBlbmNvZGVQYWNrZXQ7XG4iLCJjb25zdCBlbmNvZGVQYWNrZXQgPSByZXF1aXJlKFwiLi9lbmNvZGVQYWNrZXRcIik7XG5jb25zdCBkZWNvZGVQYWNrZXQgPSByZXF1aXJlKFwiLi9kZWNvZGVQYWNrZXRcIik7XG5cbmNvbnN0IFNFUEFSQVRPUiA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMzApOyAvLyBzZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvRGVsaW1pdGVyI0FTQ0lJX2RlbGltaXRlZF90ZXh0XG5cbmNvbnN0IGVuY29kZVBheWxvYWQgPSAocGFja2V0cywgY2FsbGJhY2spID0+IHtcbiAgLy8gc29tZSBwYWNrZXRzIG1heSBiZSBhZGRlZCB0byB0aGUgYXJyYXkgd2hpbGUgZW5jb2RpbmcsIHNvIHRoZSBpbml0aWFsIGxlbmd0aCBtdXN0IGJlIHNhdmVkXG4gIGNvbnN0IGxlbmd0aCA9IHBhY2tldHMubGVuZ3RoO1xuICBjb25zdCBlbmNvZGVkUGFja2V0cyA9IG5ldyBBcnJheShsZW5ndGgpO1xuICBsZXQgY291bnQgPSAwO1xuXG4gIHBhY2tldHMuZm9yRWFjaCgocGFja2V0LCBpKSA9PiB7XG4gICAgLy8gZm9yY2UgYmFzZTY0IGVuY29kaW5nIGZvciBiaW5hcnkgcGFja2V0c1xuICAgIGVuY29kZVBhY2tldChwYWNrZXQsIGZhbHNlLCBlbmNvZGVkUGFja2V0ID0+IHtcbiAgICAgIGVuY29kZWRQYWNrZXRzW2ldID0gZW5jb2RlZFBhY2tldDtcbiAgICAgIGlmICgrK2NvdW50ID09PSBsZW5ndGgpIHtcbiAgICAgICAgY2FsbGJhY2soZW5jb2RlZFBhY2tldHMuam9pbihTRVBBUkFUT1IpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59O1xuXG5jb25zdCBkZWNvZGVQYXlsb2FkID0gKGVuY29kZWRQYXlsb2FkLCBiaW5hcnlUeXBlKSA9PiB7XG4gIGNvbnN0IGVuY29kZWRQYWNrZXRzID0gZW5jb2RlZFBheWxvYWQuc3BsaXQoU0VQQVJBVE9SKTtcbiAgY29uc3QgcGFja2V0cyA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGVuY29kZWRQYWNrZXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgZGVjb2RlZFBhY2tldCA9IGRlY29kZVBhY2tldChlbmNvZGVkUGFja2V0c1tpXSwgYmluYXJ5VHlwZSk7XG4gICAgcGFja2V0cy5wdXNoKGRlY29kZWRQYWNrZXQpO1xuICAgIGlmIChkZWNvZGVkUGFja2V0LnR5cGUgPT09IFwiZXJyb3JcIikge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiBwYWNrZXRzO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHByb3RvY29sOiA0LFxuICBlbmNvZGVQYWNrZXQsXG4gIGVuY29kZVBheWxvYWQsXG4gIGRlY29kZVBhY2tldCxcbiAgZGVjb2RlUGF5bG9hZFxufTtcbiIsIlxuLyoqXG4gKiBNb2R1bGUgZXhwb3J0cy5cbiAqXG4gKiBMb2dpYyBib3Jyb3dlZCBmcm9tIE1vZGVybml6cjpcbiAqXG4gKiAgIC0gaHR0cHM6Ly9naXRodWIuY29tL01vZGVybml6ci9Nb2Rlcm5penIvYmxvYi9tYXN0ZXIvZmVhdHVyZS1kZXRlY3RzL2NvcnMuanNcbiAqL1xuXG50cnkge1xuICBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiBYTUxIdHRwUmVxdWVzdCAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAnd2l0aENyZWRlbnRpYWxzJyBpbiBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbn0gY2F0Y2ggKGVycikge1xuICAvLyBpZiBYTUxIdHRwIHN1cHBvcnQgaXMgZGlzYWJsZWQgaW4gSUUgdGhlbiBpdCB3aWxsIHRocm93XG4gIC8vIHdoZW4gdHJ5aW5nIHRvIGNyZWF0ZVxuICBtb2R1bGUuZXhwb3J0cyA9IGZhbHNlO1xufVxuIiwiLypcbiAgaHR0cHM6Ly9naXRodWIuY29tL2JhbmtzZWFuIHdyYXBwZWQgTWFrb3RvIE1hdHN1bW90byBhbmQgVGFrdWppIE5pc2hpbXVyYSdzIGNvZGUgaW4gYSBuYW1lc3BhY2VcbiAgc28gaXQncyBiZXR0ZXIgZW5jYXBzdWxhdGVkLiBOb3cgeW91IGNhbiBoYXZlIG11bHRpcGxlIHJhbmRvbSBudW1iZXIgZ2VuZXJhdG9yc1xuICBhbmQgdGhleSB3b24ndCBzdG9tcCBhbGwgb3ZlciBlYWNob3RoZXIncyBzdGF0ZS5cblxuICBJZiB5b3Ugd2FudCB0byB1c2UgdGhpcyBhcyBhIHN1YnN0aXR1dGUgZm9yIE1hdGgucmFuZG9tKCksIHVzZSB0aGUgcmFuZG9tKClcbiAgbWV0aG9kIGxpa2Ugc286XG5cbiAgdmFyIG0gPSBuZXcgTWVyc2VubmVUd2lzdGVyKCk7XG4gIHZhciByYW5kb21OdW1iZXIgPSBtLnJhbmRvbSgpO1xuXG4gIFlvdSBjYW4gYWxzbyBjYWxsIHRoZSBvdGhlciBnZW5yYW5kX3tmb299KCkgbWV0aG9kcyBvbiB0aGUgaW5zdGFuY2UuXG5cbiAgSWYgeW91IHdhbnQgdG8gdXNlIGEgc3BlY2lmaWMgc2VlZCBpbiBvcmRlciB0byBnZXQgYSByZXBlYXRhYmxlIHJhbmRvbVxuICBzZXF1ZW5jZSwgcGFzcyBhbiBpbnRlZ2VyIGludG8gdGhlIGNvbnN0cnVjdG9yOlxuXG4gIHZhciBtID0gbmV3IE1lcnNlbm5lVHdpc3RlcigxMjMpO1xuXG4gIGFuZCB0aGF0IHdpbGwgYWx3YXlzIHByb2R1Y2UgdGhlIHNhbWUgcmFuZG9tIHNlcXVlbmNlLlxuXG4gIFNlYW4gTWNDdWxsb3VnaCAoYmFua3NlYW5AZ21haWwuY29tKVxuKi9cblxuLypcbiAgIEEgQy1wcm9ncmFtIGZvciBNVDE5OTM3LCB3aXRoIGluaXRpYWxpemF0aW9uIGltcHJvdmVkIDIwMDIvMS8yNi5cbiAgIENvZGVkIGJ5IFRha3VqaSBOaXNoaW11cmEgYW5kIE1ha290byBNYXRzdW1vdG8uXG5cbiAgIEJlZm9yZSB1c2luZywgaW5pdGlhbGl6ZSB0aGUgc3RhdGUgYnkgdXNpbmcgaW5pdF9zZWVkKHNlZWQpXG4gICBvciBpbml0X2J5X2FycmF5KGluaXRfa2V5LCBrZXlfbGVuZ3RoKS5cblxuICAgQ29weXJpZ2h0IChDKSAxOTk3IC0gMjAwMiwgTWFrb3RvIE1hdHN1bW90byBhbmQgVGFrdWppIE5pc2hpbXVyYSxcbiAgIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5cbiAgIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dFxuICAgbW9kaWZpY2F0aW9uLCBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zXG4gICBhcmUgbWV0OlxuXG4gICAgIDEuIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0XG4gICAgICAgIG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cblxuICAgICAyLiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodFxuICAgICAgICBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIgaW4gdGhlXG4gICAgICAgIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZSBkaXN0cmlidXRpb24uXG5cbiAgICAgMy4gVGhlIG5hbWVzIG9mIGl0cyBjb250cmlidXRvcnMgbWF5IG5vdCBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZVxuICAgICAgICBwcm9kdWN0cyBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZSB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW5cbiAgICAgICAgcGVybWlzc2lvbi5cblxuICAgVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SU1xuICAgXCJBUyBJU1wiIEFORCBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVFxuICAgTElNSVRFRCBUTywgVEhFIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SXG4gICBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC4gIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFQgT1dORVIgT1JcbiAgIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLFxuICAgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLFxuICAgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsIERBVEEsIE9SXG4gICBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZIE9GXG4gICBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElOR1xuICAgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRSBPRiBUSElTXG4gICBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRSBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cblxuXG4gICBBbnkgZmVlZGJhY2sgaXMgdmVyeSB3ZWxjb21lLlxuICAgaHR0cDovL3d3dy5tYXRoLnNjaS5oaXJvc2hpbWEtdS5hYy5qcC9+bS1tYXQvTVQvZW10Lmh0bWxcbiAgIGVtYWlsOiBtLW1hdCBAIG1hdGguc2NpLmhpcm9zaGltYS11LmFjLmpwIChyZW1vdmUgc3BhY2UpXG4qL1xuXG52YXIgTWVyc2VubmVUd2lzdGVyID0gZnVuY3Rpb24oc2VlZCkge1xuXHRpZiAoc2VlZCA9PSB1bmRlZmluZWQpIHtcblx0XHRzZWVkID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cdH1cblxuXHQvKiBQZXJpb2QgcGFyYW1ldGVycyAqL1xuXHR0aGlzLk4gPSA2MjQ7XG5cdHRoaXMuTSA9IDM5Nztcblx0dGhpcy5NQVRSSVhfQSA9IDB4OTkwOGIwZGY7ICAgLyogY29uc3RhbnQgdmVjdG9yIGEgKi9cblx0dGhpcy5VUFBFUl9NQVNLID0gMHg4MDAwMDAwMDsgLyogbW9zdCBzaWduaWZpY2FudCB3LXIgYml0cyAqL1xuXHR0aGlzLkxPV0VSX01BU0sgPSAweDdmZmZmZmZmOyAvKiBsZWFzdCBzaWduaWZpY2FudCByIGJpdHMgKi9cblxuXHR0aGlzLm10ID0gbmV3IEFycmF5KHRoaXMuTik7IC8qIHRoZSBhcnJheSBmb3IgdGhlIHN0YXRlIHZlY3RvciAqL1xuXHR0aGlzLm10aT10aGlzLk4rMTsgLyogbXRpPT1OKzEgbWVhbnMgbXRbTl0gaXMgbm90IGluaXRpYWxpemVkICovXG5cblx0aWYgKHNlZWQuY29uc3RydWN0b3IgPT0gQXJyYXkpIHtcblx0XHR0aGlzLmluaXRfYnlfYXJyYXkoc2VlZCwgc2VlZC5sZW5ndGgpO1xuXHR9XG5cdGVsc2Uge1xuXHRcdHRoaXMuaW5pdF9zZWVkKHNlZWQpO1xuXHR9XG59XG5cbi8qIGluaXRpYWxpemVzIG10W05dIHdpdGggYSBzZWVkICovXG4vKiBvcmlnaW4gbmFtZSBpbml0X2dlbnJhbmQgKi9cbk1lcnNlbm5lVHdpc3Rlci5wcm90b3R5cGUuaW5pdF9zZWVkID0gZnVuY3Rpb24ocykge1xuXHR0aGlzLm10WzBdID0gcyA+Pj4gMDtcblx0Zm9yICh0aGlzLm10aT0xOyB0aGlzLm10aTx0aGlzLk47IHRoaXMubXRpKyspIHtcblx0XHR2YXIgcyA9IHRoaXMubXRbdGhpcy5tdGktMV0gXiAodGhpcy5tdFt0aGlzLm10aS0xXSA+Pj4gMzApO1xuXHRcdHRoaXMubXRbdGhpcy5tdGldID0gKCgoKChzICYgMHhmZmZmMDAwMCkgPj4+IDE2KSAqIDE4MTI0MzMyNTMpIDw8IDE2KSArIChzICYgMHgwMDAwZmZmZikgKiAxODEyNDMzMjUzKVxuXHRcdCsgdGhpcy5tdGk7XG5cdFx0LyogU2VlIEtudXRoIFRBT0NQIFZvbDIuIDNyZCBFZC4gUC4xMDYgZm9yIG11bHRpcGxpZXIuICovXG5cdFx0LyogSW4gdGhlIHByZXZpb3VzIHZlcnNpb25zLCBNU0JzIG9mIHRoZSBzZWVkIGFmZmVjdCAgICovXG5cdFx0Lyogb25seSBNU0JzIG9mIHRoZSBhcnJheSBtdFtdLiAgICAgICAgICAgICAgICAgICAgICAgICovXG5cdFx0LyogMjAwMi8wMS8wOSBtb2RpZmllZCBieSBNYWtvdG8gTWF0c3Vtb3RvICAgICAgICAgICAgICovXG5cdFx0dGhpcy5tdFt0aGlzLm10aV0gPj4+PSAwO1xuXHRcdC8qIGZvciA+MzIgYml0IG1hY2hpbmVzICovXG5cdH1cbn1cblxuLyogaW5pdGlhbGl6ZSBieSBhbiBhcnJheSB3aXRoIGFycmF5LWxlbmd0aCAqL1xuLyogaW5pdF9rZXkgaXMgdGhlIGFycmF5IGZvciBpbml0aWFsaXppbmcga2V5cyAqL1xuLyoga2V5X2xlbmd0aCBpcyBpdHMgbGVuZ3RoICovXG4vKiBzbGlnaHQgY2hhbmdlIGZvciBDKyssIDIwMDQvMi8yNiAqL1xuTWVyc2VubmVUd2lzdGVyLnByb3RvdHlwZS5pbml0X2J5X2FycmF5ID0gZnVuY3Rpb24oaW5pdF9rZXksIGtleV9sZW5ndGgpIHtcblx0dmFyIGksIGosIGs7XG5cdHRoaXMuaW5pdF9zZWVkKDE5NjUwMjE4KTtcblx0aT0xOyBqPTA7XG5cdGsgPSAodGhpcy5OPmtleV9sZW5ndGggPyB0aGlzLk4gOiBrZXlfbGVuZ3RoKTtcblx0Zm9yICg7IGs7IGstLSkge1xuXHRcdHZhciBzID0gdGhpcy5tdFtpLTFdIF4gKHRoaXMubXRbaS0xXSA+Pj4gMzApXG5cdFx0dGhpcy5tdFtpXSA9ICh0aGlzLm10W2ldIF4gKCgoKChzICYgMHhmZmZmMDAwMCkgPj4+IDE2KSAqIDE2NjQ1MjUpIDw8IDE2KSArICgocyAmIDB4MDAwMGZmZmYpICogMTY2NDUyNSkpKVxuXHRcdCsgaW5pdF9rZXlbal0gKyBqOyAvKiBub24gbGluZWFyICovXG5cdFx0dGhpcy5tdFtpXSA+Pj49IDA7IC8qIGZvciBXT1JEU0laRSA+IDMyIG1hY2hpbmVzICovXG5cdFx0aSsrOyBqKys7XG5cdFx0aWYgKGk+PXRoaXMuTikgeyB0aGlzLm10WzBdID0gdGhpcy5tdFt0aGlzLk4tMV07IGk9MTsgfVxuXHRcdGlmIChqPj1rZXlfbGVuZ3RoKSBqPTA7XG5cdH1cblx0Zm9yIChrPXRoaXMuTi0xOyBrOyBrLS0pIHtcblx0XHR2YXIgcyA9IHRoaXMubXRbaS0xXSBeICh0aGlzLm10W2ktMV0gPj4+IDMwKTtcblx0XHR0aGlzLm10W2ldID0gKHRoaXMubXRbaV0gXiAoKCgoKHMgJiAweGZmZmYwMDAwKSA+Pj4gMTYpICogMTU2NjA4Mzk0MSkgPDwgMTYpICsgKHMgJiAweDAwMDBmZmZmKSAqIDE1NjYwODM5NDEpKVxuXHRcdC0gaTsgLyogbm9uIGxpbmVhciAqL1xuXHRcdHRoaXMubXRbaV0gPj4+PSAwOyAvKiBmb3IgV09SRFNJWkUgPiAzMiBtYWNoaW5lcyAqL1xuXHRcdGkrKztcblx0XHRpZiAoaT49dGhpcy5OKSB7IHRoaXMubXRbMF0gPSB0aGlzLm10W3RoaXMuTi0xXTsgaT0xOyB9XG5cdH1cblxuXHR0aGlzLm10WzBdID0gMHg4MDAwMDAwMDsgLyogTVNCIGlzIDE7IGFzc3VyaW5nIG5vbi16ZXJvIGluaXRpYWwgYXJyYXkgKi9cbn1cblxuLyogZ2VuZXJhdGVzIGEgcmFuZG9tIG51bWJlciBvbiBbMCwweGZmZmZmZmZmXS1pbnRlcnZhbCAqL1xuLyogb3JpZ2luIG5hbWUgZ2VucmFuZF9pbnQzMiAqL1xuTWVyc2VubmVUd2lzdGVyLnByb3RvdHlwZS5yYW5kb21faW50ID0gZnVuY3Rpb24oKSB7XG5cdHZhciB5O1xuXHR2YXIgbWFnMDEgPSBuZXcgQXJyYXkoMHgwLCB0aGlzLk1BVFJJWF9BKTtcblx0LyogbWFnMDFbeF0gPSB4ICogTUFUUklYX0EgIGZvciB4PTAsMSAqL1xuXG5cdGlmICh0aGlzLm10aSA+PSB0aGlzLk4pIHsgLyogZ2VuZXJhdGUgTiB3b3JkcyBhdCBvbmUgdGltZSAqL1xuXHRcdHZhciBraztcblxuXHRcdGlmICh0aGlzLm10aSA9PSB0aGlzLk4rMSkgIC8qIGlmIGluaXRfc2VlZCgpIGhhcyBub3QgYmVlbiBjYWxsZWQsICovXG5cdFx0XHR0aGlzLmluaXRfc2VlZCg1NDg5KTsgIC8qIGEgZGVmYXVsdCBpbml0aWFsIHNlZWQgaXMgdXNlZCAqL1xuXG5cdFx0Zm9yIChraz0wO2trPHRoaXMuTi10aGlzLk07a2srKykge1xuXHRcdFx0eSA9ICh0aGlzLm10W2trXSZ0aGlzLlVQUEVSX01BU0spfCh0aGlzLm10W2trKzFdJnRoaXMuTE9XRVJfTUFTSyk7XG5cdFx0XHR0aGlzLm10W2trXSA9IHRoaXMubXRba2srdGhpcy5NXSBeICh5ID4+PiAxKSBeIG1hZzAxW3kgJiAweDFdO1xuXHRcdH1cblx0XHRmb3IgKDtrazx0aGlzLk4tMTtraysrKSB7XG5cdFx0XHR5ID0gKHRoaXMubXRba2tdJnRoaXMuVVBQRVJfTUFTSyl8KHRoaXMubXRba2srMV0mdGhpcy5MT1dFUl9NQVNLKTtcblx0XHRcdHRoaXMubXRba2tdID0gdGhpcy5tdFtraysodGhpcy5NLXRoaXMuTildIF4gKHkgPj4+IDEpIF4gbWFnMDFbeSAmIDB4MV07XG5cdFx0fVxuXHRcdHkgPSAodGhpcy5tdFt0aGlzLk4tMV0mdGhpcy5VUFBFUl9NQVNLKXwodGhpcy5tdFswXSZ0aGlzLkxPV0VSX01BU0spO1xuXHRcdHRoaXMubXRbdGhpcy5OLTFdID0gdGhpcy5tdFt0aGlzLk0tMV0gXiAoeSA+Pj4gMSkgXiBtYWcwMVt5ICYgMHgxXTtcblxuXHRcdHRoaXMubXRpID0gMDtcblx0fVxuXG5cdHkgPSB0aGlzLm10W3RoaXMubXRpKytdO1xuXG5cdC8qIFRlbXBlcmluZyAqL1xuXHR5IF49ICh5ID4+PiAxMSk7XG5cdHkgXj0gKHkgPDwgNykgJiAweDlkMmM1NjgwO1xuXHR5IF49ICh5IDw8IDE1KSAmIDB4ZWZjNjAwMDA7XG5cdHkgXj0gKHkgPj4+IDE4KTtcblxuXHRyZXR1cm4geSA+Pj4gMDtcbn1cblxuLyogZ2VuZXJhdGVzIGEgcmFuZG9tIG51bWJlciBvbiBbMCwweDdmZmZmZmZmXS1pbnRlcnZhbCAqL1xuLyogb3JpZ2luIG5hbWUgZ2VucmFuZF9pbnQzMSAqL1xuTWVyc2VubmVUd2lzdGVyLnByb3RvdHlwZS5yYW5kb21faW50MzEgPSBmdW5jdGlvbigpIHtcblx0cmV0dXJuICh0aGlzLnJhbmRvbV9pbnQoKT4+PjEpO1xufVxuXG4vKiBnZW5lcmF0ZXMgYSByYW5kb20gbnVtYmVyIG9uIFswLDFdLXJlYWwtaW50ZXJ2YWwgKi9cbi8qIG9yaWdpbiBuYW1lIGdlbnJhbmRfcmVhbDEgKi9cbk1lcnNlbm5lVHdpc3Rlci5wcm90b3R5cGUucmFuZG9tX2luY2wgPSBmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXMucmFuZG9tX2ludCgpKigxLjAvNDI5NDk2NzI5NS4wKTtcblx0LyogZGl2aWRlZCBieSAyXjMyLTEgKi9cbn1cblxuLyogZ2VuZXJhdGVzIGEgcmFuZG9tIG51bWJlciBvbiBbMCwxKS1yZWFsLWludGVydmFsICovXG5NZXJzZW5uZVR3aXN0ZXIucHJvdG90eXBlLnJhbmRvbSA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcy5yYW5kb21faW50KCkqKDEuMC80Mjk0OTY3Mjk2LjApO1xuXHQvKiBkaXZpZGVkIGJ5IDJeMzIgKi9cbn1cblxuLyogZ2VuZXJhdGVzIGEgcmFuZG9tIG51bWJlciBvbiAoMCwxKS1yZWFsLWludGVydmFsICovXG4vKiBvcmlnaW4gbmFtZSBnZW5yYW5kX3JlYWwzICovXG5NZXJzZW5uZVR3aXN0ZXIucHJvdG90eXBlLnJhbmRvbV9leGNsID0gZnVuY3Rpb24oKSB7XG5cdHJldHVybiAodGhpcy5yYW5kb21faW50KCkgKyAwLjUpKigxLjAvNDI5NDk2NzI5Ni4wKTtcblx0LyogZGl2aWRlZCBieSAyXjMyICovXG59XG5cbi8qIGdlbmVyYXRlcyBhIHJhbmRvbSBudW1iZXIgb24gWzAsMSkgd2l0aCA1My1iaXQgcmVzb2x1dGlvbiovXG4vKiBvcmlnaW4gbmFtZSBnZW5yYW5kX3JlczUzICovXG5NZXJzZW5uZVR3aXN0ZXIucHJvdG90eXBlLnJhbmRvbV9sb25nID0gZnVuY3Rpb24oKSB7XG5cdHZhciBhPXRoaXMucmFuZG9tX2ludCgpPj4+NSwgYj10aGlzLnJhbmRvbV9pbnQoKT4+PjY7XG5cdHJldHVybihhKjY3MTA4ODY0LjArYikqKDEuMC85MDA3MTk5MjU0NzQwOTkyLjApO1xufVxuXG4vKiBUaGVzZSByZWFsIHZlcnNpb25zIGFyZSBkdWUgdG8gSXNha3UgV2FkYSwgMjAwMi8wMS8wOSBhZGRlZCAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1lcnNlbm5lVHdpc3RlcjtcbiIsIi8qKlxuICogQ29tcGlsZXMgYSBxdWVyeXN0cmluZ1xuICogUmV0dXJucyBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIG9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZXhwb3J0cy5lbmNvZGUgPSBmdW5jdGlvbiAob2JqKSB7XG4gIHZhciBzdHIgPSAnJztcblxuICBmb3IgKHZhciBpIGluIG9iaikge1xuICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgIGlmIChzdHIubGVuZ3RoKSBzdHIgKz0gJyYnO1xuICAgICAgc3RyICs9IGVuY29kZVVSSUNvbXBvbmVudChpKSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudChvYmpbaV0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdHI7XG59O1xuXG4vKipcbiAqIFBhcnNlcyBhIHNpbXBsZSBxdWVyeXN0cmluZyBpbnRvIGFuIG9iamVjdFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBxc1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZXhwb3J0cy5kZWNvZGUgPSBmdW5jdGlvbihxcyl7XG4gIHZhciBxcnkgPSB7fTtcbiAgdmFyIHBhaXJzID0gcXMuc3BsaXQoJyYnKTtcbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBwYWlycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICB2YXIgcGFpciA9IHBhaXJzW2ldLnNwbGl0KCc9Jyk7XG4gICAgcXJ5W2RlY29kZVVSSUNvbXBvbmVudChwYWlyWzBdKV0gPSBkZWNvZGVVUklDb21wb25lbnQocGFpclsxXSk7XG4gIH1cbiAgcmV0dXJuIHFyeTtcbn07XG4iLCIvKipcbiAqIFBhcnNlcyBhbiBVUklcbiAqXG4gKiBAYXV0aG9yIFN0ZXZlbiBMZXZpdGhhbiA8c3RldmVubGV2aXRoYW4uY29tPiAoTUlUIGxpY2Vuc2UpXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG52YXIgcmUgPSAvXig/Oig/IVteOkBdKzpbXjpAXFwvXSpAKShodHRwfGh0dHBzfHdzfHdzcyk6XFwvXFwvKT8oKD86KChbXjpAXSopKD86OihbXjpAXSopKT8pP0ApPygoPzpbYS1mMC05XXswLDR9Oil7Miw3fVthLWYwLTldezAsNH18W146XFwvPyNdKikoPzo6KFxcZCopKT8pKCgoXFwvKD86W14/I10oPyFbXj8jXFwvXSpcXC5bXj8jXFwvLl0rKD86Wz8jXXwkKSkpKlxcLz8pPyhbXj8jXFwvXSopKSg/OlxcPyhbXiNdKikpPyg/OiMoLiopKT8pLztcblxudmFyIHBhcnRzID0gW1xuICAgICdzb3VyY2UnLCAncHJvdG9jb2wnLCAnYXV0aG9yaXR5JywgJ3VzZXJJbmZvJywgJ3VzZXInLCAncGFzc3dvcmQnLCAnaG9zdCcsICdwb3J0JywgJ3JlbGF0aXZlJywgJ3BhdGgnLCAnZGlyZWN0b3J5JywgJ2ZpbGUnLCAncXVlcnknLCAnYW5jaG9yJ1xuXTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBwYXJzZXVyaShzdHIpIHtcbiAgICB2YXIgc3JjID0gc3RyLFxuICAgICAgICBiID0gc3RyLmluZGV4T2YoJ1snKSxcbiAgICAgICAgZSA9IHN0ci5pbmRleE9mKCddJyk7XG5cbiAgICBpZiAoYiAhPSAtMSAmJiBlICE9IC0xKSB7XG4gICAgICAgIHN0ciA9IHN0ci5zdWJzdHJpbmcoMCwgYikgKyBzdHIuc3Vic3RyaW5nKGIsIGUpLnJlcGxhY2UoLzovZywgJzsnKSArIHN0ci5zdWJzdHJpbmcoZSwgc3RyLmxlbmd0aCk7XG4gICAgfVxuXG4gICAgdmFyIG0gPSByZS5leGVjKHN0ciB8fCAnJyksXG4gICAgICAgIHVyaSA9IHt9LFxuICAgICAgICBpID0gMTQ7XG5cbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgIHVyaVtwYXJ0c1tpXV0gPSBtW2ldIHx8ICcnO1xuICAgIH1cblxuICAgIGlmIChiICE9IC0xICYmIGUgIT0gLTEpIHtcbiAgICAgICAgdXJpLnNvdXJjZSA9IHNyYztcbiAgICAgICAgdXJpLmhvc3QgPSB1cmkuaG9zdC5zdWJzdHJpbmcoMSwgdXJpLmhvc3QubGVuZ3RoIC0gMSkucmVwbGFjZSgvOy9nLCAnOicpO1xuICAgICAgICB1cmkuYXV0aG9yaXR5ID0gdXJpLmF1dGhvcml0eS5yZXBsYWNlKCdbJywgJycpLnJlcGxhY2UoJ10nLCAnJykucmVwbGFjZSgvOy9nLCAnOicpO1xuICAgICAgICB1cmkuaXB2NnVyaSA9IHRydWU7XG4gICAgfVxuXG4gICAgdXJpLnBhdGhOYW1lcyA9IHBhdGhOYW1lcyh1cmksIHVyaVsncGF0aCddKTtcbiAgICB1cmkucXVlcnlLZXkgPSBxdWVyeUtleSh1cmksIHVyaVsncXVlcnknXSk7XG5cbiAgICByZXR1cm4gdXJpO1xufTtcblxuZnVuY3Rpb24gcGF0aE5hbWVzKG9iaiwgcGF0aCkge1xuICAgIHZhciByZWd4ID0gL1xcL3syLDl9L2csXG4gICAgICAgIG5hbWVzID0gcGF0aC5yZXBsYWNlKHJlZ3gsIFwiL1wiKS5zcGxpdChcIi9cIik7XG5cbiAgICBpZiAocGF0aC5zdWJzdHIoMCwgMSkgPT0gJy8nIHx8IHBhdGgubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIG5hbWVzLnNwbGljZSgwLCAxKTtcbiAgICB9XG4gICAgaWYgKHBhdGguc3Vic3RyKHBhdGgubGVuZ3RoIC0gMSwgMSkgPT0gJy8nKSB7XG4gICAgICAgIG5hbWVzLnNwbGljZShuYW1lcy5sZW5ndGggLSAxLCAxKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmFtZXM7XG59XG5cbmZ1bmN0aW9uIHF1ZXJ5S2V5KHVyaSwgcXVlcnkpIHtcbiAgICB2YXIgZGF0YSA9IHt9O1xuXG4gICAgcXVlcnkucmVwbGFjZSgvKD86XnwmKShbXiY9XSopPT8oW14mXSopL2csIGZ1bmN0aW9uICgkMCwgJDEsICQyKSB7XG4gICAgICAgIGlmICgkMSkge1xuICAgICAgICAgICAgZGF0YVskMV0gPSAkMjtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGRhdGE7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuaW8gPSBleHBvcnRzLlNvY2tldCA9IGV4cG9ydHMuTWFuYWdlciA9IGV4cG9ydHMucHJvdG9jb2wgPSB2b2lkIDA7XG5jb25zdCB1cmxfMSA9IHJlcXVpcmUoXCIuL3VybFwiKTtcbmNvbnN0IG1hbmFnZXJfMSA9IHJlcXVpcmUoXCIuL21hbmFnZXJcIik7XG5jb25zdCBkZWJ1ZyA9IHJlcXVpcmUoXCJkZWJ1Z1wiKShcInNvY2tldC5pby1jbGllbnRcIik7XG4vKipcbiAqIE1vZHVsZSBleHBvcnRzLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBsb29rdXA7XG4vKipcbiAqIE1hbmFnZXJzIGNhY2hlLlxuICovXG5jb25zdCBjYWNoZSA9IChleHBvcnRzLm1hbmFnZXJzID0ge30pO1xuZnVuY3Rpb24gbG9va3VwKHVyaSwgb3B0cykge1xuICAgIGlmICh0eXBlb2YgdXJpID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIG9wdHMgPSB1cmk7XG4gICAgICAgIHVyaSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgb3B0cyA9IG9wdHMgfHwge307XG4gICAgY29uc3QgcGFyc2VkID0gdXJsXzEudXJsKHVyaSwgb3B0cy5wYXRoIHx8IFwiL3NvY2tldC5pb1wiKTtcbiAgICBjb25zdCBzb3VyY2UgPSBwYXJzZWQuc291cmNlO1xuICAgIGNvbnN0IGlkID0gcGFyc2VkLmlkO1xuICAgIGNvbnN0IHBhdGggPSBwYXJzZWQucGF0aDtcbiAgICBjb25zdCBzYW1lTmFtZXNwYWNlID0gY2FjaGVbaWRdICYmIHBhdGggaW4gY2FjaGVbaWRdW1wibnNwc1wiXTtcbiAgICBjb25zdCBuZXdDb25uZWN0aW9uID0gb3B0cy5mb3JjZU5ldyB8fFxuICAgICAgICBvcHRzW1wiZm9yY2UgbmV3IGNvbm5lY3Rpb25cIl0gfHxcbiAgICAgICAgZmFsc2UgPT09IG9wdHMubXVsdGlwbGV4IHx8XG4gICAgICAgIHNhbWVOYW1lc3BhY2U7XG4gICAgbGV0IGlvO1xuICAgIGlmIChuZXdDb25uZWN0aW9uKSB7XG4gICAgICAgIGRlYnVnKFwiaWdub3Jpbmcgc29ja2V0IGNhY2hlIGZvciAlc1wiLCBzb3VyY2UpO1xuICAgICAgICBpbyA9IG5ldyBtYW5hZ2VyXzEuTWFuYWdlcihzb3VyY2UsIG9wdHMpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKCFjYWNoZVtpZF0pIHtcbiAgICAgICAgICAgIGRlYnVnKFwibmV3IGlvIGluc3RhbmNlIGZvciAlc1wiLCBzb3VyY2UpO1xuICAgICAgICAgICAgY2FjaGVbaWRdID0gbmV3IG1hbmFnZXJfMS5NYW5hZ2VyKHNvdXJjZSwgb3B0cyk7XG4gICAgICAgIH1cbiAgICAgICAgaW8gPSBjYWNoZVtpZF07XG4gICAgfVxuICAgIGlmIChwYXJzZWQucXVlcnkgJiYgIW9wdHMucXVlcnkpIHtcbiAgICAgICAgb3B0cy5xdWVyeSA9IHBhcnNlZC5xdWVyeUtleTtcbiAgICB9XG4gICAgcmV0dXJuIGlvLnNvY2tldChwYXJzZWQucGF0aCwgb3B0cyk7XG59XG5leHBvcnRzLmlvID0gbG9va3VwO1xuLyoqXG4gKiBQcm90b2NvbCB2ZXJzaW9uLlxuICpcbiAqIEBwdWJsaWNcbiAqL1xudmFyIHNvY2tldF9pb19wYXJzZXJfMSA9IHJlcXVpcmUoXCJzb2NrZXQuaW8tcGFyc2VyXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwicHJvdG9jb2xcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNvY2tldF9pb19wYXJzZXJfMS5wcm90b2NvbDsgfSB9KTtcbi8qKlxuICogYGNvbm5lY3RgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmlcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0cy5jb25uZWN0ID0gbG9va3VwO1xuLyoqXG4gKiBFeHBvc2UgY29uc3RydWN0b3JzIGZvciBzdGFuZGFsb25lIGJ1aWxkLlxuICpcbiAqIEBwdWJsaWNcbiAqL1xudmFyIG1hbmFnZXJfMiA9IHJlcXVpcmUoXCIuL21hbmFnZXJcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJNYW5hZ2VyXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBtYW5hZ2VyXzIuTWFuYWdlcjsgfSB9KTtcbnZhciBzb2NrZXRfMSA9IHJlcXVpcmUoXCIuL3NvY2tldFwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlNvY2tldFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc29ja2V0XzEuU29ja2V0OyB9IH0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gbG9va3VwO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLk1hbmFnZXIgPSB2b2lkIDA7XG5jb25zdCBlaW8gPSByZXF1aXJlKFwiZW5naW5lLmlvLWNsaWVudFwiKTtcbmNvbnN0IHNvY2tldF8xID0gcmVxdWlyZShcIi4vc29ja2V0XCIpO1xuY29uc3QgcGFyc2VyID0gcmVxdWlyZShcInNvY2tldC5pby1wYXJzZXJcIik7XG5jb25zdCBvbl8xID0gcmVxdWlyZShcIi4vb25cIik7XG5jb25zdCBCYWNrb2ZmID0gcmVxdWlyZShcImJhY2tvMlwiKTtcbmNvbnN0IHR5cGVkX2V2ZW50c18xID0gcmVxdWlyZShcIi4vdHlwZWQtZXZlbnRzXCIpO1xuY29uc3QgZGVidWcgPSByZXF1aXJlKFwiZGVidWdcIikoXCJzb2NrZXQuaW8tY2xpZW50Om1hbmFnZXJcIik7XG5jbGFzcyBNYW5hZ2VyIGV4dGVuZHMgdHlwZWRfZXZlbnRzXzEuU3RyaWN0RXZlbnRFbWl0dGVyIHtcbiAgICBjb25zdHJ1Y3Rvcih1cmksIG9wdHMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5uc3BzID0ge307XG4gICAgICAgIHRoaXMuc3VicyA9IFtdO1xuICAgICAgICBpZiAodXJpICYmIFwib2JqZWN0XCIgPT09IHR5cGVvZiB1cmkpIHtcbiAgICAgICAgICAgIG9wdHMgPSB1cmk7XG4gICAgICAgICAgICB1cmkgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgb3B0cyA9IG9wdHMgfHwge307XG4gICAgICAgIG9wdHMucGF0aCA9IG9wdHMucGF0aCB8fCBcIi9zb2NrZXQuaW9cIjtcbiAgICAgICAgdGhpcy5vcHRzID0gb3B0cztcbiAgICAgICAgdGhpcy5yZWNvbm5lY3Rpb24ob3B0cy5yZWNvbm5lY3Rpb24gIT09IGZhbHNlKTtcbiAgICAgICAgdGhpcy5yZWNvbm5lY3Rpb25BdHRlbXB0cyhvcHRzLnJlY29ubmVjdGlvbkF0dGVtcHRzIHx8IEluZmluaXR5KTtcbiAgICAgICAgdGhpcy5yZWNvbm5lY3Rpb25EZWxheShvcHRzLnJlY29ubmVjdGlvbkRlbGF5IHx8IDEwMDApO1xuICAgICAgICB0aGlzLnJlY29ubmVjdGlvbkRlbGF5TWF4KG9wdHMucmVjb25uZWN0aW9uRGVsYXlNYXggfHwgNTAwMCk7XG4gICAgICAgIHRoaXMucmFuZG9taXphdGlvbkZhY3RvcihvcHRzLnJhbmRvbWl6YXRpb25GYWN0b3IgfHwgMC41KTtcbiAgICAgICAgdGhpcy5iYWNrb2ZmID0gbmV3IEJhY2tvZmYoe1xuICAgICAgICAgICAgbWluOiB0aGlzLnJlY29ubmVjdGlvbkRlbGF5KCksXG4gICAgICAgICAgICBtYXg6IHRoaXMucmVjb25uZWN0aW9uRGVsYXlNYXgoKSxcbiAgICAgICAgICAgIGppdHRlcjogdGhpcy5yYW5kb21pemF0aW9uRmFjdG9yKCksXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnRpbWVvdXQobnVsbCA9PSBvcHRzLnRpbWVvdXQgPyAyMDAwMCA6IG9wdHMudGltZW91dCk7XG4gICAgICAgIHRoaXMuX3JlYWR5U3RhdGUgPSBcImNsb3NlZFwiO1xuICAgICAgICB0aGlzLnVyaSA9IHVyaTtcbiAgICAgICAgY29uc3QgX3BhcnNlciA9IG9wdHMucGFyc2VyIHx8IHBhcnNlcjtcbiAgICAgICAgdGhpcy5lbmNvZGVyID0gbmV3IF9wYXJzZXIuRW5jb2RlcigpO1xuICAgICAgICB0aGlzLmRlY29kZXIgPSBuZXcgX3BhcnNlci5EZWNvZGVyKCk7XG4gICAgICAgIHRoaXMuX2F1dG9Db25uZWN0ID0gb3B0cy5hdXRvQ29ubmVjdCAhPT0gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLl9hdXRvQ29ubmVjdClcbiAgICAgICAgICAgIHRoaXMub3BlbigpO1xuICAgIH1cbiAgICByZWNvbm5lY3Rpb24odikge1xuICAgICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVjb25uZWN0aW9uO1xuICAgICAgICB0aGlzLl9yZWNvbm5lY3Rpb24gPSAhIXY7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICByZWNvbm5lY3Rpb25BdHRlbXB0cyh2KSB7XG4gICAgICAgIGlmICh2ID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVjb25uZWN0aW9uQXR0ZW1wdHM7XG4gICAgICAgIHRoaXMuX3JlY29ubmVjdGlvbkF0dGVtcHRzID0gdjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHJlY29ubmVjdGlvbkRlbGF5KHYpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBpZiAodiA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JlY29ubmVjdGlvbkRlbGF5O1xuICAgICAgICB0aGlzLl9yZWNvbm5lY3Rpb25EZWxheSA9IHY7XG4gICAgICAgIChfYSA9IHRoaXMuYmFja29mZikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnNldE1pbih2KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHJhbmRvbWl6YXRpb25GYWN0b3Iodikge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGlmICh2ID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmFuZG9taXphdGlvbkZhY3RvcjtcbiAgICAgICAgdGhpcy5fcmFuZG9taXphdGlvbkZhY3RvciA9IHY7XG4gICAgICAgIChfYSA9IHRoaXMuYmFja29mZikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnNldEppdHRlcih2KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHJlY29ubmVjdGlvbkRlbGF5TWF4KHYpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBpZiAodiA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JlY29ubmVjdGlvbkRlbGF5TWF4O1xuICAgICAgICB0aGlzLl9yZWNvbm5lY3Rpb25EZWxheU1heCA9IHY7XG4gICAgICAgIChfYSA9IHRoaXMuYmFja29mZikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnNldE1heCh2KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHRpbWVvdXQodikge1xuICAgICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdGltZW91dDtcbiAgICAgICAgdGhpcy5fdGltZW91dCA9IHY7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTdGFydHMgdHJ5aW5nIHRvIHJlY29ubmVjdCBpZiByZWNvbm5lY3Rpb24gaXMgZW5hYmxlZCBhbmQgd2UgaGF2ZSBub3RcbiAgICAgKiBzdGFydGVkIHJlY29ubmVjdGluZyB5ZXRcbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgbWF5YmVSZWNvbm5lY3RPbk9wZW4oKSB7XG4gICAgICAgIC8vIE9ubHkgdHJ5IHRvIHJlY29ubmVjdCBpZiBpdCdzIHRoZSBmaXJzdCB0aW1lIHdlJ3JlIGNvbm5lY3RpbmdcbiAgICAgICAgaWYgKCF0aGlzLl9yZWNvbm5lY3RpbmcgJiZcbiAgICAgICAgICAgIHRoaXMuX3JlY29ubmVjdGlvbiAmJlxuICAgICAgICAgICAgdGhpcy5iYWNrb2ZmLmF0dGVtcHRzID09PSAwKSB7XG4gICAgICAgICAgICAvLyBrZWVwcyByZWNvbm5lY3Rpb24gZnJvbSBmaXJpbmcgdHdpY2UgZm9yIHRoZSBzYW1lIHJlY29ubmVjdGlvbiBsb29wXG4gICAgICAgICAgICB0aGlzLnJlY29ubmVjdCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGN1cnJlbnQgdHJhbnNwb3J0IGBzb2NrZXRgLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gLSBvcHRpb25hbCwgY2FsbGJhY2tcbiAgICAgKiBAcmV0dXJuIHNlbGZcbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgb3Blbihmbikge1xuICAgICAgICBkZWJ1ZyhcInJlYWR5U3RhdGUgJXNcIiwgdGhpcy5fcmVhZHlTdGF0ZSk7XG4gICAgICAgIGlmICh+dGhpcy5fcmVhZHlTdGF0ZS5pbmRleE9mKFwib3BlblwiKSlcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICBkZWJ1ZyhcIm9wZW5pbmcgJXNcIiwgdGhpcy51cmkpO1xuICAgICAgICB0aGlzLmVuZ2luZSA9IGVpbyh0aGlzLnVyaSwgdGhpcy5vcHRzKTtcbiAgICAgICAgY29uc3Qgc29ja2V0ID0gdGhpcy5lbmdpbmU7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLl9yZWFkeVN0YXRlID0gXCJvcGVuaW5nXCI7XG4gICAgICAgIHRoaXMuc2tpcFJlY29ubmVjdCA9IGZhbHNlO1xuICAgICAgICAvLyBlbWl0IGBvcGVuYFxuICAgICAgICBjb25zdCBvcGVuU3ViRGVzdHJveSA9IG9uXzEub24oc29ja2V0LCBcIm9wZW5cIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2VsZi5vbm9wZW4oKTtcbiAgICAgICAgICAgIGZuICYmIGZuKCk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBlbWl0IGBlcnJvcmBcbiAgICAgICAgY29uc3QgZXJyb3JTdWIgPSBvbl8xLm9uKHNvY2tldCwgXCJlcnJvclwiLCAoZXJyKSA9PiB7XG4gICAgICAgICAgICBkZWJ1ZyhcImVycm9yXCIpO1xuICAgICAgICAgICAgc2VsZi5jbGVhbnVwKCk7XG4gICAgICAgICAgICBzZWxmLl9yZWFkeVN0YXRlID0gXCJjbG9zZWRcIjtcbiAgICAgICAgICAgIHRoaXMuZW1pdFJlc2VydmVkKFwiZXJyb3JcIiwgZXJyKTtcbiAgICAgICAgICAgIGlmIChmbikge1xuICAgICAgICAgICAgICAgIGZuKGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBPbmx5IGRvIHRoaXMgaWYgdGhlcmUgaXMgbm8gZm4gdG8gaGFuZGxlIHRoZSBlcnJvclxuICAgICAgICAgICAgICAgIHNlbGYubWF5YmVSZWNvbm5lY3RPbk9wZW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChmYWxzZSAhPT0gdGhpcy5fdGltZW91dCkge1xuICAgICAgICAgICAgY29uc3QgdGltZW91dCA9IHRoaXMuX3RpbWVvdXQ7XG4gICAgICAgICAgICBkZWJ1ZyhcImNvbm5lY3QgYXR0ZW1wdCB3aWxsIHRpbWVvdXQgYWZ0ZXIgJWRcIiwgdGltZW91dCk7XG4gICAgICAgICAgICBpZiAodGltZW91dCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIG9wZW5TdWJEZXN0cm95KCk7IC8vIHByZXZlbnRzIGEgcmFjZSBjb25kaXRpb24gd2l0aCB0aGUgJ29wZW4nIGV2ZW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBzZXQgdGltZXJcbiAgICAgICAgICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgZGVidWcoXCJjb25uZWN0IGF0dGVtcHQgdGltZWQgb3V0IGFmdGVyICVkXCIsIHRpbWVvdXQpO1xuICAgICAgICAgICAgICAgIG9wZW5TdWJEZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgc29ja2V0LmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgc29ja2V0LmVtaXQoXCJlcnJvclwiLCBuZXcgRXJyb3IoXCJ0aW1lb3V0XCIpKTtcbiAgICAgICAgICAgIH0sIHRpbWVvdXQpO1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0cy5hdXRvVW5yZWYpIHtcbiAgICAgICAgICAgICAgICB0aW1lci51bnJlZigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zdWJzLnB1c2goZnVuY3Rpb24gc3ViRGVzdHJveSgpIHtcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdWJzLnB1c2gob3BlblN1YkRlc3Ryb3kpO1xuICAgICAgICB0aGlzLnN1YnMucHVzaChlcnJvclN1Yik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBbGlhcyBmb3Igb3BlbigpXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHNlbGZcbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgY29ubmVjdChmbikge1xuICAgICAgICByZXR1cm4gdGhpcy5vcGVuKGZuKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHVwb24gdHJhbnNwb3J0IG9wZW4uXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIG9ub3BlbigpIHtcbiAgICAgICAgZGVidWcoXCJvcGVuXCIpO1xuICAgICAgICAvLyBjbGVhciBvbGQgc3Vic1xuICAgICAgICB0aGlzLmNsZWFudXAoKTtcbiAgICAgICAgLy8gbWFyayBhcyBvcGVuXG4gICAgICAgIHRoaXMuX3JlYWR5U3RhdGUgPSBcIm9wZW5cIjtcbiAgICAgICAgdGhpcy5lbWl0UmVzZXJ2ZWQoXCJvcGVuXCIpO1xuICAgICAgICAvLyBhZGQgbmV3IHN1YnNcbiAgICAgICAgY29uc3Qgc29ja2V0ID0gdGhpcy5lbmdpbmU7XG4gICAgICAgIHRoaXMuc3Vicy5wdXNoKG9uXzEub24oc29ja2V0LCBcInBpbmdcIiwgdGhpcy5vbnBpbmcuYmluZCh0aGlzKSksIG9uXzEub24oc29ja2V0LCBcImRhdGFcIiwgdGhpcy5vbmRhdGEuYmluZCh0aGlzKSksIG9uXzEub24oc29ja2V0LCBcImVycm9yXCIsIHRoaXMub25lcnJvci5iaW5kKHRoaXMpKSwgb25fMS5vbihzb2NrZXQsIFwiY2xvc2VcIiwgdGhpcy5vbmNsb3NlLmJpbmQodGhpcykpLCBvbl8xLm9uKHRoaXMuZGVjb2RlciwgXCJkZWNvZGVkXCIsIHRoaXMub25kZWNvZGVkLmJpbmQodGhpcykpKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHVwb24gYSBwaW5nLlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBvbnBpbmcoKSB7XG4gICAgICAgIHRoaXMuZW1pdFJlc2VydmVkKFwicGluZ1wiKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHdpdGggZGF0YS5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgb25kYXRhKGRhdGEpIHtcbiAgICAgICAgdGhpcy5kZWNvZGVyLmFkZChkYXRhKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHdoZW4gcGFyc2VyIGZ1bGx5IGRlY29kZXMgYSBwYWNrZXQuXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIG9uZGVjb2RlZChwYWNrZXQpIHtcbiAgICAgICAgdGhpcy5lbWl0UmVzZXJ2ZWQoXCJwYWNrZXRcIiwgcGFja2V0KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHVwb24gc29ja2V0IGVycm9yLlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBvbmVycm9yKGVycikge1xuICAgICAgICBkZWJ1ZyhcImVycm9yXCIsIGVycik7XG4gICAgICAgIHRoaXMuZW1pdFJlc2VydmVkKFwiZXJyb3JcIiwgZXJyKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyBzb2NrZXQgZm9yIHRoZSBnaXZlbiBgbnNwYC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1NvY2tldH1cbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgc29ja2V0KG5zcCwgb3B0cykge1xuICAgICAgICBsZXQgc29ja2V0ID0gdGhpcy5uc3BzW25zcF07XG4gICAgICAgIGlmICghc29ja2V0KSB7XG4gICAgICAgICAgICBzb2NrZXQgPSBuZXcgc29ja2V0XzEuU29ja2V0KHRoaXMsIG5zcCwgb3B0cyk7XG4gICAgICAgICAgICB0aGlzLm5zcHNbbnNwXSA9IHNvY2tldDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc29ja2V0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgdXBvbiBhIHNvY2tldCBjbG9zZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzb2NrZXRcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9kZXN0cm95KHNvY2tldCkge1xuICAgICAgICBjb25zdCBuc3BzID0gT2JqZWN0LmtleXModGhpcy5uc3BzKTtcbiAgICAgICAgZm9yIChjb25zdCBuc3Agb2YgbnNwcykge1xuICAgICAgICAgICAgY29uc3Qgc29ja2V0ID0gdGhpcy5uc3BzW25zcF07XG4gICAgICAgICAgICBpZiAoc29ja2V0LmFjdGl2ZSkge1xuICAgICAgICAgICAgICAgIGRlYnVnKFwic29ja2V0ICVzIGlzIHN0aWxsIGFjdGl2ZSwgc2tpcHBpbmcgY2xvc2VcIiwgbnNwKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fY2xvc2UoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogV3JpdGVzIGEgcGFja2V0LlxuICAgICAqXG4gICAgICogQHBhcmFtIHBhY2tldFxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX3BhY2tldChwYWNrZXQpIHtcbiAgICAgICAgZGVidWcoXCJ3cml0aW5nIHBhY2tldCAlalwiLCBwYWNrZXQpO1xuICAgICAgICBjb25zdCBlbmNvZGVkUGFja2V0cyA9IHRoaXMuZW5jb2Rlci5lbmNvZGUocGFja2V0KTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbmNvZGVkUGFja2V0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5lbmdpbmUud3JpdGUoZW5jb2RlZFBhY2tldHNbaV0sIHBhY2tldC5vcHRpb25zKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBDbGVhbiB1cCB0cmFuc3BvcnQgc3Vic2NyaXB0aW9ucyBhbmQgcGFja2V0IGJ1ZmZlci5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgY2xlYW51cCgpIHtcbiAgICAgICAgZGVidWcoXCJjbGVhbnVwXCIpO1xuICAgICAgICB0aGlzLnN1YnMuZm9yRWFjaCgoc3ViRGVzdHJveSkgPT4gc3ViRGVzdHJveSgpKTtcbiAgICAgICAgdGhpcy5zdWJzLmxlbmd0aCA9IDA7XG4gICAgICAgIHRoaXMuZGVjb2Rlci5kZXN0cm95KCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENsb3NlIHRoZSBjdXJyZW50IHNvY2tldC5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX2Nsb3NlKCkge1xuICAgICAgICBkZWJ1ZyhcImRpc2Nvbm5lY3RcIik7XG4gICAgICAgIHRoaXMuc2tpcFJlY29ubmVjdCA9IHRydWU7XG4gICAgICAgIHRoaXMuX3JlY29ubmVjdGluZyA9IGZhbHNlO1xuICAgICAgICBpZiAoXCJvcGVuaW5nXCIgPT09IHRoaXMuX3JlYWR5U3RhdGUpIHtcbiAgICAgICAgICAgIC8vIGBvbmNsb3NlYCB3aWxsIG5vdCBmaXJlIGJlY2F1c2VcbiAgICAgICAgICAgIC8vIGFuIG9wZW4gZXZlbnQgbmV2ZXIgaGFwcGVuZWRcbiAgICAgICAgICAgIHRoaXMuY2xlYW51cCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYmFja29mZi5yZXNldCgpO1xuICAgICAgICB0aGlzLl9yZWFkeVN0YXRlID0gXCJjbG9zZWRcIjtcbiAgICAgICAgaWYgKHRoaXMuZW5naW5lKVxuICAgICAgICAgICAgdGhpcy5lbmdpbmUuY2xvc2UoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWxpYXMgZm9yIGNsb3NlKClcbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgZGlzY29ubmVjdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Nsb3NlKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxlZCB1cG9uIGVuZ2luZSBjbG9zZS5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgb25jbG9zZShyZWFzb24pIHtcbiAgICAgICAgZGVidWcoXCJvbmNsb3NlXCIpO1xuICAgICAgICB0aGlzLmNsZWFudXAoKTtcbiAgICAgICAgdGhpcy5iYWNrb2ZmLnJlc2V0KCk7XG4gICAgICAgIHRoaXMuX3JlYWR5U3RhdGUgPSBcImNsb3NlZFwiO1xuICAgICAgICB0aGlzLmVtaXRSZXNlcnZlZChcImNsb3NlXCIsIHJlYXNvbik7XG4gICAgICAgIGlmICh0aGlzLl9yZWNvbm5lY3Rpb24gJiYgIXRoaXMuc2tpcFJlY29ubmVjdCkge1xuICAgICAgICAgICAgdGhpcy5yZWNvbm5lY3QoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBBdHRlbXB0IGEgcmVjb25uZWN0aW9uLlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICByZWNvbm5lY3QoKSB7XG4gICAgICAgIGlmICh0aGlzLl9yZWNvbm5lY3RpbmcgfHwgdGhpcy5za2lwUmVjb25uZWN0KVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBpZiAodGhpcy5iYWNrb2ZmLmF0dGVtcHRzID49IHRoaXMuX3JlY29ubmVjdGlvbkF0dGVtcHRzKSB7XG4gICAgICAgICAgICBkZWJ1ZyhcInJlY29ubmVjdCBmYWlsZWRcIik7XG4gICAgICAgICAgICB0aGlzLmJhY2tvZmYucmVzZXQoKTtcbiAgICAgICAgICAgIHRoaXMuZW1pdFJlc2VydmVkKFwicmVjb25uZWN0X2ZhaWxlZFwiKTtcbiAgICAgICAgICAgIHRoaXMuX3JlY29ubmVjdGluZyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgZGVsYXkgPSB0aGlzLmJhY2tvZmYuZHVyYXRpb24oKTtcbiAgICAgICAgICAgIGRlYnVnKFwid2lsbCB3YWl0ICVkbXMgYmVmb3JlIHJlY29ubmVjdCBhdHRlbXB0XCIsIGRlbGF5KTtcbiAgICAgICAgICAgIHRoaXMuX3JlY29ubmVjdGluZyA9IHRydWU7XG4gICAgICAgICAgICBjb25zdCB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChzZWxmLnNraXBSZWNvbm5lY3QpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICBkZWJ1ZyhcImF0dGVtcHRpbmcgcmVjb25uZWN0XCIpO1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdFJlc2VydmVkKFwicmVjb25uZWN0X2F0dGVtcHRcIiwgc2VsZi5iYWNrb2ZmLmF0dGVtcHRzKTtcbiAgICAgICAgICAgICAgICAvLyBjaGVjayBhZ2FpbiBmb3IgdGhlIGNhc2Ugc29ja2V0IGNsb3NlZCBpbiBhYm92ZSBldmVudHNcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5za2lwUmVjb25uZWN0KVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgc2VsZi5vcGVuKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVidWcoXCJyZWNvbm5lY3QgYXR0ZW1wdCBlcnJvclwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuX3JlY29ubmVjdGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5yZWNvbm5lY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdFJlc2VydmVkKFwicmVjb25uZWN0X2Vycm9yXCIsIGVycik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWJ1ZyhcInJlY29ubmVjdCBzdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5vbnJlY29ubmVjdCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LCBkZWxheSk7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRzLmF1dG9VbnJlZikge1xuICAgICAgICAgICAgICAgIHRpbWVyLnVucmVmKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnN1YnMucHVzaChmdW5jdGlvbiBzdWJEZXN0cm95KCkge1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgdXBvbiBzdWNjZXNzZnVsIHJlY29ubmVjdC5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgb25yZWNvbm5lY3QoKSB7XG4gICAgICAgIGNvbnN0IGF0dGVtcHQgPSB0aGlzLmJhY2tvZmYuYXR0ZW1wdHM7XG4gICAgICAgIHRoaXMuX3JlY29ubmVjdGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmJhY2tvZmYucmVzZXQoKTtcbiAgICAgICAgdGhpcy5lbWl0UmVzZXJ2ZWQoXCJyZWNvbm5lY3RcIiwgYXR0ZW1wdCk7XG4gICAgfVxufVxuZXhwb3J0cy5NYW5hZ2VyID0gTWFuYWdlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5vbiA9IHZvaWQgMDtcbmZ1bmN0aW9uIG9uKG9iaiwgZXYsIGZuKSB7XG4gICAgb2JqLm9uKGV2LCBmbik7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHN1YkRlc3Ryb3koKSB7XG4gICAgICAgIG9iai5vZmYoZXYsIGZuKTtcbiAgICB9O1xufVxuZXhwb3J0cy5vbiA9IG9uO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlNvY2tldCA9IHZvaWQgMDtcbmNvbnN0IHNvY2tldF9pb19wYXJzZXJfMSA9IHJlcXVpcmUoXCJzb2NrZXQuaW8tcGFyc2VyXCIpO1xuY29uc3Qgb25fMSA9IHJlcXVpcmUoXCIuL29uXCIpO1xuY29uc3QgdHlwZWRfZXZlbnRzXzEgPSByZXF1aXJlKFwiLi90eXBlZC1ldmVudHNcIik7XG5jb25zdCBkZWJ1ZyA9IHJlcXVpcmUoXCJkZWJ1Z1wiKShcInNvY2tldC5pby1jbGllbnQ6c29ja2V0XCIpO1xuLyoqXG4gKiBJbnRlcm5hbCBldmVudHMuXG4gKiBUaGVzZSBldmVudHMgY2FuJ3QgYmUgZW1pdHRlZCBieSB0aGUgdXNlci5cbiAqL1xuY29uc3QgUkVTRVJWRURfRVZFTlRTID0gT2JqZWN0LmZyZWV6ZSh7XG4gICAgY29ubmVjdDogMSxcbiAgICBjb25uZWN0X2Vycm9yOiAxLFxuICAgIGRpc2Nvbm5lY3Q6IDEsXG4gICAgZGlzY29ubmVjdGluZzogMSxcbiAgICAvLyBFdmVudEVtaXR0ZXIgcmVzZXJ2ZWQgZXZlbnRzOiBodHRwczovL25vZGVqcy5vcmcvYXBpL2V2ZW50cy5odG1sI2V2ZW50c19ldmVudF9uZXdsaXN0ZW5lclxuICAgIG5ld0xpc3RlbmVyOiAxLFxuICAgIHJlbW92ZUxpc3RlbmVyOiAxLFxufSk7XG5jbGFzcyBTb2NrZXQgZXh0ZW5kcyB0eXBlZF9ldmVudHNfMS5TdHJpY3RFdmVudEVtaXR0ZXIge1xuICAgIC8qKlxuICAgICAqIGBTb2NrZXRgIGNvbnN0cnVjdG9yLlxuICAgICAqXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGlvLCBuc3AsIG9wdHMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5yZWNlaXZlQnVmZmVyID0gW107XG4gICAgICAgIHRoaXMuc2VuZEJ1ZmZlciA9IFtdO1xuICAgICAgICB0aGlzLmlkcyA9IDA7XG4gICAgICAgIHRoaXMuYWNrcyA9IHt9O1xuICAgICAgICB0aGlzLmZsYWdzID0ge307XG4gICAgICAgIHRoaXMuaW8gPSBpbztcbiAgICAgICAgdGhpcy5uc3AgPSBuc3A7XG4gICAgICAgIHRoaXMuaWRzID0gMDtcbiAgICAgICAgdGhpcy5hY2tzID0ge307XG4gICAgICAgIHRoaXMucmVjZWl2ZUJ1ZmZlciA9IFtdO1xuICAgICAgICB0aGlzLnNlbmRCdWZmZXIgPSBbXTtcbiAgICAgICAgdGhpcy5jb25uZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kaXNjb25uZWN0ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmZsYWdzID0ge307XG4gICAgICAgIGlmIChvcHRzICYmIG9wdHMuYXV0aCkge1xuICAgICAgICAgICAgdGhpcy5hdXRoID0gb3B0cy5hdXRoO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmlvLl9hdXRvQ29ubmVjdClcbiAgICAgICAgICAgIHRoaXMub3BlbigpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTdWJzY3JpYmUgdG8gb3BlbiwgY2xvc2UgYW5kIHBhY2tldCBldmVudHNcbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgc3ViRXZlbnRzKCkge1xuICAgICAgICBpZiAodGhpcy5zdWJzKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBjb25zdCBpbyA9IHRoaXMuaW87XG4gICAgICAgIHRoaXMuc3VicyA9IFtcbiAgICAgICAgICAgIG9uXzEub24oaW8sIFwib3BlblwiLCB0aGlzLm9ub3Blbi5iaW5kKHRoaXMpKSxcbiAgICAgICAgICAgIG9uXzEub24oaW8sIFwicGFja2V0XCIsIHRoaXMub25wYWNrZXQuYmluZCh0aGlzKSksXG4gICAgICAgICAgICBvbl8xLm9uKGlvLCBcImVycm9yXCIsIHRoaXMub25lcnJvci5iaW5kKHRoaXMpKSxcbiAgICAgICAgICAgIG9uXzEub24oaW8sIFwiY2xvc2VcIiwgdGhpcy5vbmNsb3NlLmJpbmQodGhpcykpLFxuICAgICAgICBdO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIHRoZSBTb2NrZXQgd2lsbCB0cnkgdG8gcmVjb25uZWN0IHdoZW4gaXRzIE1hbmFnZXIgY29ubmVjdHMgb3IgcmVjb25uZWN0c1xuICAgICAqL1xuICAgIGdldCBhY3RpdmUoKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuc3VicztcbiAgICB9XG4gICAgLyoqXG4gICAgICogXCJPcGVuc1wiIHRoZSBzb2NrZXQuXG4gICAgICpcbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuY29ubmVjdGVkKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIHRoaXMuc3ViRXZlbnRzKCk7XG4gICAgICAgIGlmICghdGhpcy5pb1tcIl9yZWNvbm5lY3RpbmdcIl0pXG4gICAgICAgICAgICB0aGlzLmlvLm9wZW4oKTsgLy8gZW5zdXJlIG9wZW5cbiAgICAgICAgaWYgKFwib3BlblwiID09PSB0aGlzLmlvLl9yZWFkeVN0YXRlKVxuICAgICAgICAgICAgdGhpcy5vbm9wZW4oKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFsaWFzIGZvciBjb25uZWN0KClcbiAgICAgKi9cbiAgICBvcGVuKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb25uZWN0KCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNlbmRzIGEgYG1lc3NhZ2VgIGV2ZW50LlxuICAgICAqXG4gICAgICogQHJldHVybiBzZWxmXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIHNlbmQoLi4uYXJncykge1xuICAgICAgICBhcmdzLnVuc2hpZnQoXCJtZXNzYWdlXCIpO1xuICAgICAgICB0aGlzLmVtaXQuYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBPdmVycmlkZSBgZW1pdGAuXG4gICAgICogSWYgdGhlIGV2ZW50IGlzIGluIGBldmVudHNgLCBpdCdzIGVtaXR0ZWQgbm9ybWFsbHkuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHNlbGZcbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgZW1pdChldiwgLi4uYXJncykge1xuICAgICAgICBpZiAoUkVTRVJWRURfRVZFTlRTLmhhc093blByb3BlcnR5KGV2KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdcIicgKyBldiArICdcIiBpcyBhIHJlc2VydmVkIGV2ZW50IG5hbWUnKTtcbiAgICAgICAgfVxuICAgICAgICBhcmdzLnVuc2hpZnQoZXYpO1xuICAgICAgICBjb25zdCBwYWNrZXQgPSB7XG4gICAgICAgICAgICB0eXBlOiBzb2NrZXRfaW9fcGFyc2VyXzEuUGFja2V0VHlwZS5FVkVOVCxcbiAgICAgICAgICAgIGRhdGE6IGFyZ3MsXG4gICAgICAgIH07XG4gICAgICAgIHBhY2tldC5vcHRpb25zID0ge307XG4gICAgICAgIHBhY2tldC5vcHRpb25zLmNvbXByZXNzID0gdGhpcy5mbGFncy5jb21wcmVzcyAhPT0gZmFsc2U7XG4gICAgICAgIC8vIGV2ZW50IGFjayBjYWxsYmFja1xuICAgICAgICBpZiAoXCJmdW5jdGlvblwiID09PSB0eXBlb2YgYXJnc1thcmdzLmxlbmd0aCAtIDFdKSB7XG4gICAgICAgICAgICBkZWJ1ZyhcImVtaXR0aW5nIHBhY2tldCB3aXRoIGFjayBpZCAlZFwiLCB0aGlzLmlkcyk7XG4gICAgICAgICAgICB0aGlzLmFja3NbdGhpcy5pZHNdID0gYXJncy5wb3AoKTtcbiAgICAgICAgICAgIHBhY2tldC5pZCA9IHRoaXMuaWRzKys7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaXNUcmFuc3BvcnRXcml0YWJsZSA9IHRoaXMuaW8uZW5naW5lICYmXG4gICAgICAgICAgICB0aGlzLmlvLmVuZ2luZS50cmFuc3BvcnQgJiZcbiAgICAgICAgICAgIHRoaXMuaW8uZW5naW5lLnRyYW5zcG9ydC53cml0YWJsZTtcbiAgICAgICAgY29uc3QgZGlzY2FyZFBhY2tldCA9IHRoaXMuZmxhZ3Mudm9sYXRpbGUgJiYgKCFpc1RyYW5zcG9ydFdyaXRhYmxlIHx8ICF0aGlzLmNvbm5lY3RlZCk7XG4gICAgICAgIGlmIChkaXNjYXJkUGFja2V0KSB7XG4gICAgICAgICAgICBkZWJ1ZyhcImRpc2NhcmQgcGFja2V0IGFzIHRoZSB0cmFuc3BvcnQgaXMgbm90IGN1cnJlbnRseSB3cml0YWJsZVwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmNvbm5lY3RlZCkge1xuICAgICAgICAgICAgdGhpcy5wYWNrZXQocGFja2V0KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2VuZEJ1ZmZlci5wdXNoKHBhY2tldCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5mbGFncyA9IHt9O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2VuZHMgYSBwYWNrZXQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcGFja2V0XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBwYWNrZXQocGFja2V0KSB7XG4gICAgICAgIHBhY2tldC5uc3AgPSB0aGlzLm5zcDtcbiAgICAgICAgdGhpcy5pby5fcGFja2V0KHBhY2tldCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxlZCB1cG9uIGVuZ2luZSBgb3BlbmAuXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIG9ub3BlbigpIHtcbiAgICAgICAgZGVidWcoXCJ0cmFuc3BvcnQgaXMgb3BlbiAtIGNvbm5lY3RpbmdcIik7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5hdXRoID09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgdGhpcy5hdXRoKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYWNrZXQoeyB0eXBlOiBzb2NrZXRfaW9fcGFyc2VyXzEuUGFja2V0VHlwZS5DT05ORUNULCBkYXRhIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnBhY2tldCh7IHR5cGU6IHNvY2tldF9pb19wYXJzZXJfMS5QYWNrZXRUeXBlLkNPTk5FQ1QsIGRhdGE6IHRoaXMuYXV0aCB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgdXBvbiBlbmdpbmUgb3IgbWFuYWdlciBgZXJyb3JgLlxuICAgICAqXG4gICAgICogQHBhcmFtIGVyclxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgb25lcnJvcihlcnIpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNvbm5lY3RlZCkge1xuICAgICAgICAgICAgdGhpcy5lbWl0UmVzZXJ2ZWQoXCJjb25uZWN0X2Vycm9yXCIsIGVycik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHVwb24gZW5naW5lIGBjbG9zZWAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVhc29uXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBvbmNsb3NlKHJlYXNvbikge1xuICAgICAgICBkZWJ1ZyhcImNsb3NlICglcylcIiwgcmVhc29uKTtcbiAgICAgICAgdGhpcy5jb25uZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kaXNjb25uZWN0ZWQgPSB0cnVlO1xuICAgICAgICBkZWxldGUgdGhpcy5pZDtcbiAgICAgICAgdGhpcy5lbWl0UmVzZXJ2ZWQoXCJkaXNjb25uZWN0XCIsIHJlYXNvbik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxlZCB3aXRoIHNvY2tldCBwYWNrZXQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcGFja2V0XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBvbnBhY2tldChwYWNrZXQpIHtcbiAgICAgICAgY29uc3Qgc2FtZU5hbWVzcGFjZSA9IHBhY2tldC5uc3AgPT09IHRoaXMubnNwO1xuICAgICAgICBpZiAoIXNhbWVOYW1lc3BhY2UpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHN3aXRjaCAocGFja2V0LnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2Ugc29ja2V0X2lvX3BhcnNlcl8xLlBhY2tldFR5cGUuQ09OTkVDVDpcbiAgICAgICAgICAgICAgICBpZiAocGFja2V0LmRhdGEgJiYgcGFja2V0LmRhdGEuc2lkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlkID0gcGFja2V0LmRhdGEuc2lkO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uY29ubmVjdChpZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXRSZXNlcnZlZChcImNvbm5lY3RfZXJyb3JcIiwgbmV3IEVycm9yKFwiSXQgc2VlbXMgeW91IGFyZSB0cnlpbmcgdG8gcmVhY2ggYSBTb2NrZXQuSU8gc2VydmVyIGluIHYyLnggd2l0aCBhIHYzLnggY2xpZW50LCBidXQgdGhleSBhcmUgbm90IGNvbXBhdGlibGUgKG1vcmUgaW5mb3JtYXRpb24gaGVyZTogaHR0cHM6Ly9zb2NrZXQuaW8vZG9jcy92My9taWdyYXRpbmctZnJvbS0yLXgtdG8tMy0wLylcIikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2Ugc29ja2V0X2lvX3BhcnNlcl8xLlBhY2tldFR5cGUuRVZFTlQ6XG4gICAgICAgICAgICAgICAgdGhpcy5vbmV2ZW50KHBhY2tldCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHNvY2tldF9pb19wYXJzZXJfMS5QYWNrZXRUeXBlLkJJTkFSWV9FVkVOVDpcbiAgICAgICAgICAgICAgICB0aGlzLm9uZXZlbnQocGFja2V0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2Ugc29ja2V0X2lvX3BhcnNlcl8xLlBhY2tldFR5cGUuQUNLOlxuICAgICAgICAgICAgICAgIHRoaXMub25hY2socGFja2V0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2Ugc29ja2V0X2lvX3BhcnNlcl8xLlBhY2tldFR5cGUuQklOQVJZX0FDSzpcbiAgICAgICAgICAgICAgICB0aGlzLm9uYWNrKHBhY2tldCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHNvY2tldF9pb19wYXJzZXJfMS5QYWNrZXRUeXBlLkRJU0NPTk5FQ1Q6XG4gICAgICAgICAgICAgICAgdGhpcy5vbmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2Ugc29ja2V0X2lvX3BhcnNlcl8xLlBhY2tldFR5cGUuQ09OTkVDVF9FUlJPUjpcbiAgICAgICAgICAgICAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IocGFja2V0LmRhdGEubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgIGVyci5kYXRhID0gcGFja2V0LmRhdGEuZGF0YTtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXRSZXNlcnZlZChcImNvbm5lY3RfZXJyb3JcIiwgZXJyKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgdXBvbiBhIHNlcnZlciBldmVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBwYWNrZXRcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIG9uZXZlbnQocGFja2V0KSB7XG4gICAgICAgIGNvbnN0IGFyZ3MgPSBwYWNrZXQuZGF0YSB8fCBbXTtcbiAgICAgICAgZGVidWcoXCJlbWl0dGluZyBldmVudCAlalwiLCBhcmdzKTtcbiAgICAgICAgaWYgKG51bGwgIT0gcGFja2V0LmlkKSB7XG4gICAgICAgICAgICBkZWJ1ZyhcImF0dGFjaGluZyBhY2sgY2FsbGJhY2sgdG8gZXZlbnRcIik7XG4gICAgICAgICAgICBhcmdzLnB1c2godGhpcy5hY2socGFja2V0LmlkKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY29ubmVjdGVkKSB7XG4gICAgICAgICAgICB0aGlzLmVtaXRFdmVudChhcmdzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucmVjZWl2ZUJ1ZmZlci5wdXNoKE9iamVjdC5mcmVlemUoYXJncykpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVtaXRFdmVudChhcmdzKSB7XG4gICAgICAgIGlmICh0aGlzLl9hbnlMaXN0ZW5lcnMgJiYgdGhpcy5fYW55TGlzdGVuZXJzLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3QgbGlzdGVuZXJzID0gdGhpcy5fYW55TGlzdGVuZXJzLnNsaWNlKCk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGxpc3RlbmVyIG9mIGxpc3RlbmVycykge1xuICAgICAgICAgICAgICAgIGxpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHN1cGVyLmVtaXQuYXBwbHkodGhpcywgYXJncyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFByb2R1Y2VzIGFuIGFjayBjYWxsYmFjayB0byBlbWl0IHdpdGggYW4gZXZlbnQuXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGFjayhpZCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgbGV0IHNlbnQgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gICAgICAgICAgICAvLyBwcmV2ZW50IGRvdWJsZSBjYWxsYmFja3NcbiAgICAgICAgICAgIGlmIChzZW50KVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIHNlbnQgPSB0cnVlO1xuICAgICAgICAgICAgZGVidWcoXCJzZW5kaW5nIGFjayAlalwiLCBhcmdzKTtcbiAgICAgICAgICAgIHNlbGYucGFja2V0KHtcbiAgICAgICAgICAgICAgICB0eXBlOiBzb2NrZXRfaW9fcGFyc2VyXzEuUGFja2V0VHlwZS5BQ0ssXG4gICAgICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgICAgIGRhdGE6IGFyZ3MsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHVwb24gYSBzZXJ2ZXIgYWNrbm93bGVnZW1lbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcGFja2V0XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBvbmFjayhwYWNrZXQpIHtcbiAgICAgICAgY29uc3QgYWNrID0gdGhpcy5hY2tzW3BhY2tldC5pZF07XG4gICAgICAgIGlmIChcImZ1bmN0aW9uXCIgPT09IHR5cGVvZiBhY2spIHtcbiAgICAgICAgICAgIGRlYnVnKFwiY2FsbGluZyBhY2sgJXMgd2l0aCAlalwiLCBwYWNrZXQuaWQsIHBhY2tldC5kYXRhKTtcbiAgICAgICAgICAgIGFjay5hcHBseSh0aGlzLCBwYWNrZXQuZGF0YSk7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5hY2tzW3BhY2tldC5pZF07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkZWJ1ZyhcImJhZCBhY2sgJXNcIiwgcGFja2V0LmlkKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgdXBvbiBzZXJ2ZXIgY29ubmVjdC5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgb25jb25uZWN0KGlkKSB7XG4gICAgICAgIGRlYnVnKFwic29ja2V0IGNvbm5lY3RlZCB3aXRoIGlkICVzXCIsIGlkKTtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLmNvbm5lY3RlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuZGlzY29ubmVjdGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZW1pdEJ1ZmZlcmVkKCk7XG4gICAgICAgIHRoaXMuZW1pdFJlc2VydmVkKFwiY29ubmVjdFwiKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRW1pdCBidWZmZXJlZCBldmVudHMgKHJlY2VpdmVkIGFuZCBlbWl0dGVkKS5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgZW1pdEJ1ZmZlcmVkKCkge1xuICAgICAgICB0aGlzLnJlY2VpdmVCdWZmZXIuZm9yRWFjaCgoYXJncykgPT4gdGhpcy5lbWl0RXZlbnQoYXJncykpO1xuICAgICAgICB0aGlzLnJlY2VpdmVCdWZmZXIgPSBbXTtcbiAgICAgICAgdGhpcy5zZW5kQnVmZmVyLmZvckVhY2goKHBhY2tldCkgPT4gdGhpcy5wYWNrZXQocGFja2V0KSk7XG4gICAgICAgIHRoaXMuc2VuZEJ1ZmZlciA9IFtdO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgdXBvbiBzZXJ2ZXIgZGlzY29ubmVjdC5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgb25kaXNjb25uZWN0KCkge1xuICAgICAgICBkZWJ1ZyhcInNlcnZlciBkaXNjb25uZWN0ICglcylcIiwgdGhpcy5uc3ApO1xuICAgICAgICB0aGlzLmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy5vbmNsb3NlKFwiaW8gc2VydmVyIGRpc2Nvbm5lY3RcIik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxlZCB1cG9uIGZvcmNlZCBjbGllbnQvc2VydmVyIHNpZGUgZGlzY29ubmVjdGlvbnMsXG4gICAgICogdGhpcyBtZXRob2QgZW5zdXJlcyB0aGUgbWFuYWdlciBzdG9wcyB0cmFja2luZyB1cyBhbmRcbiAgICAgKiB0aGF0IHJlY29ubmVjdGlvbnMgZG9uJ3QgZ2V0IHRyaWdnZXJlZCBmb3IgdGhpcy5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3Vicykge1xuICAgICAgICAgICAgLy8gY2xlYW4gc3Vic2NyaXB0aW9ucyB0byBhdm9pZCByZWNvbm5lY3Rpb25zXG4gICAgICAgICAgICB0aGlzLnN1YnMuZm9yRWFjaCgoc3ViRGVzdHJveSkgPT4gc3ViRGVzdHJveSgpKTtcbiAgICAgICAgICAgIHRoaXMuc3VicyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlvW1wiX2Rlc3Ryb3lcIl0odGhpcyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERpc2Nvbm5lY3RzIHRoZSBzb2NrZXQgbWFudWFsbHkuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHNlbGZcbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgZGlzY29ubmVjdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuY29ubmVjdGVkKSB7XG4gICAgICAgICAgICBkZWJ1ZyhcInBlcmZvcm1pbmcgZGlzY29ubmVjdCAoJXMpXCIsIHRoaXMubnNwKTtcbiAgICAgICAgICAgIHRoaXMucGFja2V0KHsgdHlwZTogc29ja2V0X2lvX3BhcnNlcl8xLlBhY2tldFR5cGUuRElTQ09OTkVDVCB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyByZW1vdmUgc29ja2V0IGZyb20gcG9vbFxuICAgICAgICB0aGlzLmRlc3Ryb3koKTtcbiAgICAgICAgaWYgKHRoaXMuY29ubmVjdGVkKSB7XG4gICAgICAgICAgICAvLyBmaXJlIGV2ZW50c1xuICAgICAgICAgICAgdGhpcy5vbmNsb3NlKFwiaW8gY2xpZW50IGRpc2Nvbm5lY3RcIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFsaWFzIGZvciBkaXNjb25uZWN0KClcbiAgICAgKlxuICAgICAqIEByZXR1cm4gc2VsZlxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBjbG9zZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGlzY29ubmVjdCgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBjb21wcmVzcyBmbGFnLlxuICAgICAqXG4gICAgICogQHBhcmFtIGNvbXByZXNzIC0gaWYgYHRydWVgLCBjb21wcmVzc2VzIHRoZSBzZW5kaW5nIGRhdGFcbiAgICAgKiBAcmV0dXJuIHNlbGZcbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgY29tcHJlc3MoY29tcHJlc3MpIHtcbiAgICAgICAgdGhpcy5mbGFncy5jb21wcmVzcyA9IGNvbXByZXNzO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cyBhIG1vZGlmaWVyIGZvciBhIHN1YnNlcXVlbnQgZXZlbnQgZW1pc3Npb24gdGhhdCB0aGUgZXZlbnQgbWVzc2FnZSB3aWxsIGJlIGRyb3BwZWQgd2hlbiB0aGlzIHNvY2tldCBpcyBub3RcbiAgICAgKiByZWFkeSB0byBzZW5kIG1lc3NhZ2VzLlxuICAgICAqXG4gICAgICogQHJldHVybnMgc2VsZlxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBnZXQgdm9sYXRpbGUoKSB7XG4gICAgICAgIHRoaXMuZmxhZ3Mudm9sYXRpbGUgPSB0cnVlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkcyBhIGxpc3RlbmVyIHRoYXQgd2lsbCBiZSBmaXJlZCB3aGVuIGFueSBldmVudCBpcyBlbWl0dGVkLiBUaGUgZXZlbnQgbmFtZSBpcyBwYXNzZWQgYXMgdGhlIGZpcnN0IGFyZ3VtZW50IHRvIHRoZVxuICAgICAqIGNhbGxiYWNrLlxuICAgICAqXG4gICAgICogQHBhcmFtIGxpc3RlbmVyXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIG9uQW55KGxpc3RlbmVyKSB7XG4gICAgICAgIHRoaXMuX2FueUxpc3RlbmVycyA9IHRoaXMuX2FueUxpc3RlbmVycyB8fCBbXTtcbiAgICAgICAgdGhpcy5fYW55TGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkcyBhIGxpc3RlbmVyIHRoYXQgd2lsbCBiZSBmaXJlZCB3aGVuIGFueSBldmVudCBpcyBlbWl0dGVkLiBUaGUgZXZlbnQgbmFtZSBpcyBwYXNzZWQgYXMgdGhlIGZpcnN0IGFyZ3VtZW50IHRvIHRoZVxuICAgICAqIGNhbGxiYWNrLiBUaGUgbGlzdGVuZXIgaXMgYWRkZWQgdG8gdGhlIGJlZ2lubmluZyBvZiB0aGUgbGlzdGVuZXJzIGFycmF5LlxuICAgICAqXG4gICAgICogQHBhcmFtIGxpc3RlbmVyXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIHByZXBlbmRBbnkobGlzdGVuZXIpIHtcbiAgICAgICAgdGhpcy5fYW55TGlzdGVuZXJzID0gdGhpcy5fYW55TGlzdGVuZXJzIHx8IFtdO1xuICAgICAgICB0aGlzLl9hbnlMaXN0ZW5lcnMudW5zaGlmdChsaXN0ZW5lcik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIHRoZSBsaXN0ZW5lciB0aGF0IHdpbGwgYmUgZmlyZWQgd2hlbiBhbnkgZXZlbnQgaXMgZW1pdHRlZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBsaXN0ZW5lclxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBvZmZBbnkobGlzdGVuZXIpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9hbnlMaXN0ZW5lcnMpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsaXN0ZW5lcikge1xuICAgICAgICAgICAgY29uc3QgbGlzdGVuZXJzID0gdGhpcy5fYW55TGlzdGVuZXJzO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0ZW5lcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAobGlzdGVuZXIgPT09IGxpc3RlbmVyc1tpXSkge1xuICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lcnMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9hbnlMaXN0ZW5lcnMgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBhcnJheSBvZiBsaXN0ZW5lcnMgdGhhdCBhcmUgbGlzdGVuaW5nIGZvciBhbnkgZXZlbnQgdGhhdCBpcyBzcGVjaWZpZWQuIFRoaXMgYXJyYXkgY2FuIGJlIG1hbmlwdWxhdGVkLFxuICAgICAqIGUuZy4gdG8gcmVtb3ZlIGxpc3RlbmVycy5cbiAgICAgKlxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBsaXN0ZW5lcnNBbnkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hbnlMaXN0ZW5lcnMgfHwgW107XG4gICAgfVxufVxuZXhwb3J0cy5Tb2NrZXQgPSBTb2NrZXQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuU3RyaWN0RXZlbnRFbWl0dGVyID0gdm9pZCAwO1xuY29uc3QgRW1pdHRlciA9IHJlcXVpcmUoXCJjb21wb25lbnQtZW1pdHRlclwiKTtcbi8qKlxuICogU3RyaWN0bHkgdHlwZWQgdmVyc2lvbiBvZiBhbiBgRXZlbnRFbWl0dGVyYC4gQSBgVHlwZWRFdmVudEVtaXR0ZXJgIHRha2VzIHR5cGVcbiAqIHBhcmFtZXRlcnMgZm9yIG1hcHBpbmdzIG9mIGV2ZW50IG5hbWVzIHRvIGV2ZW50IGRhdGEgdHlwZXMsIGFuZCBzdHJpY3RseVxuICogdHlwZXMgbWV0aG9kIGNhbGxzIHRvIHRoZSBgRXZlbnRFbWl0dGVyYCBhY2NvcmRpbmcgdG8gdGhlc2UgZXZlbnQgbWFwcy5cbiAqXG4gKiBAdHlwZVBhcmFtIExpc3RlbkV2ZW50cyAtIGBFdmVudHNNYXBgIG9mIHVzZXItZGVmaW5lZCBldmVudHMgdGhhdCBjYW4gYmVcbiAqIGxpc3RlbmVkIHRvIHdpdGggYG9uYCBvciBgb25jZWBcbiAqIEB0eXBlUGFyYW0gRW1pdEV2ZW50cyAtIGBFdmVudHNNYXBgIG9mIHVzZXItZGVmaW5lZCBldmVudHMgdGhhdCBjYW4gYmVcbiAqIGVtaXR0ZWQgd2l0aCBgZW1pdGBcbiAqIEB0eXBlUGFyYW0gUmVzZXJ2ZWRFdmVudHMgLSBgRXZlbnRzTWFwYCBvZiByZXNlcnZlZCBldmVudHMsIHRoYXQgY2FuIGJlXG4gKiBlbWl0dGVkIGJ5IHNvY2tldC5pbyB3aXRoIGBlbWl0UmVzZXJ2ZWRgLCBhbmQgY2FuIGJlIGxpc3RlbmVkIHRvIHdpdGhcbiAqIGBsaXN0ZW5gLlxuICovXG5jbGFzcyBTdHJpY3RFdmVudEVtaXR0ZXIgZXh0ZW5kcyBFbWl0dGVyIHtcbiAgICAvKipcbiAgICAgKiBBZGRzIHRoZSBgbGlzdGVuZXJgIGZ1bmN0aW9uIGFzIGFuIGV2ZW50IGxpc3RlbmVyIGZvciBgZXZgLlxuICAgICAqXG4gICAgICogQHBhcmFtIGV2IE5hbWUgb2YgdGhlIGV2ZW50XG4gICAgICogQHBhcmFtIGxpc3RlbmVyIENhbGxiYWNrIGZ1bmN0aW9uXG4gICAgICovXG4gICAgb24oZXYsIGxpc3RlbmVyKSB7XG4gICAgICAgIHN1cGVyLm9uKGV2LCBsaXN0ZW5lcik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGRzIGEgb25lLXRpbWUgYGxpc3RlbmVyYCBmdW5jdGlvbiBhcyBhbiBldmVudCBsaXN0ZW5lciBmb3IgYGV2YC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBldiBOYW1lIG9mIHRoZSBldmVudFxuICAgICAqIEBwYXJhbSBsaXN0ZW5lciBDYWxsYmFjayBmdW5jdGlvblxuICAgICAqL1xuICAgIG9uY2UoZXYsIGxpc3RlbmVyKSB7XG4gICAgICAgIHN1cGVyLm9uY2UoZXYsIGxpc3RlbmVyKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEVtaXRzIGFuIGV2ZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIGV2IE5hbWUgb2YgdGhlIGV2ZW50XG4gICAgICogQHBhcmFtIGFyZ3MgVmFsdWVzIHRvIHNlbmQgdG8gbGlzdGVuZXJzIG9mIHRoaXMgZXZlbnRcbiAgICAgKi9cbiAgICBlbWl0KGV2LCAuLi5hcmdzKSB7XG4gICAgICAgIHN1cGVyLmVtaXQoZXYsIC4uLmFyZ3MpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogRW1pdHMgYSByZXNlcnZlZCBldmVudC5cbiAgICAgKlxuICAgICAqIFRoaXMgbWV0aG9kIGlzIGBwcm90ZWN0ZWRgLCBzbyB0aGF0IG9ubHkgYSBjbGFzcyBleHRlbmRpbmdcbiAgICAgKiBgU3RyaWN0RXZlbnRFbWl0dGVyYCBjYW4gZW1pdCBpdHMgb3duIHJlc2VydmVkIGV2ZW50cy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBldiBSZXNlcnZlZCBldmVudCBuYW1lXG4gICAgICogQHBhcmFtIGFyZ3MgQXJndW1lbnRzIHRvIGVtaXQgYWxvbmcgd2l0aCB0aGUgZXZlbnRcbiAgICAgKi9cbiAgICBlbWl0UmVzZXJ2ZWQoZXYsIC4uLmFyZ3MpIHtcbiAgICAgICAgc3VwZXIuZW1pdChldiwgLi4uYXJncyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBsaXN0ZW5lcnMgbGlzdGVuaW5nIHRvIGFuIGV2ZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIGV2ZW50IEV2ZW50IG5hbWVcbiAgICAgKiBAcmV0dXJucyBBcnJheSBvZiBsaXN0ZW5lcnMgc3Vic2NyaWJlZCB0byBgZXZlbnRgXG4gICAgICovXG4gICAgbGlzdGVuZXJzKGV2ZW50KSB7XG4gICAgICAgIHJldHVybiBzdXBlci5saXN0ZW5lcnMoZXZlbnQpO1xuICAgIH1cbn1cbmV4cG9ydHMuU3RyaWN0RXZlbnRFbWl0dGVyID0gU3RyaWN0RXZlbnRFbWl0dGVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnVybCA9IHZvaWQgMDtcbmNvbnN0IHBhcnNldXJpID0gcmVxdWlyZShcInBhcnNldXJpXCIpO1xuY29uc3QgZGVidWcgPSByZXF1aXJlKFwiZGVidWdcIikoXCJzb2NrZXQuaW8tY2xpZW50OnVybFwiKTtcbi8qKlxuICogVVJMIHBhcnNlci5cbiAqXG4gKiBAcGFyYW0gdXJpIC0gdXJsXG4gKiBAcGFyYW0gcGF0aCAtIHRoZSByZXF1ZXN0IHBhdGggb2YgdGhlIGNvbm5lY3Rpb25cbiAqIEBwYXJhbSBsb2MgLSBBbiBvYmplY3QgbWVhbnQgdG8gbWltaWMgd2luZG93LmxvY2F0aW9uLlxuICogICAgICAgIERlZmF1bHRzIHRvIHdpbmRvdy5sb2NhdGlvbi5cbiAqIEBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gdXJsKHVyaSwgcGF0aCA9IFwiXCIsIGxvYykge1xuICAgIGxldCBvYmogPSB1cmk7XG4gICAgLy8gZGVmYXVsdCB0byB3aW5kb3cubG9jYXRpb25cbiAgICBsb2MgPSBsb2MgfHwgKHR5cGVvZiBsb2NhdGlvbiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBsb2NhdGlvbik7XG4gICAgaWYgKG51bGwgPT0gdXJpKVxuICAgICAgICB1cmkgPSBsb2MucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2MuaG9zdDtcbiAgICAvLyByZWxhdGl2ZSBwYXRoIHN1cHBvcnRcbiAgICBpZiAodHlwZW9mIHVyaSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBpZiAoXCIvXCIgPT09IHVyaS5jaGFyQXQoMCkpIHtcbiAgICAgICAgICAgIGlmIChcIi9cIiA9PT0gdXJpLmNoYXJBdCgxKSkge1xuICAgICAgICAgICAgICAgIHVyaSA9IGxvYy5wcm90b2NvbCArIHVyaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHVyaSA9IGxvYy5ob3N0ICsgdXJpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghL14oaHR0cHM/fHdzcz8pOlxcL1xcLy8udGVzdCh1cmkpKSB7XG4gICAgICAgICAgICBkZWJ1ZyhcInByb3RvY29sLWxlc3MgdXJsICVzXCIsIHVyaSk7XG4gICAgICAgICAgICBpZiAoXCJ1bmRlZmluZWRcIiAhPT0gdHlwZW9mIGxvYykge1xuICAgICAgICAgICAgICAgIHVyaSA9IGxvYy5wcm90b2NvbCArIFwiLy9cIiArIHVyaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHVyaSA9IFwiaHR0cHM6Ly9cIiArIHVyaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBwYXJzZVxuICAgICAgICBkZWJ1ZyhcInBhcnNlICVzXCIsIHVyaSk7XG4gICAgICAgIG9iaiA9IHBhcnNldXJpKHVyaSk7XG4gICAgfVxuICAgIC8vIG1ha2Ugc3VyZSB3ZSB0cmVhdCBgbG9jYWxob3N0OjgwYCBhbmQgYGxvY2FsaG9zdGAgZXF1YWxseVxuICAgIGlmICghb2JqLnBvcnQpIHtcbiAgICAgICAgaWYgKC9eKGh0dHB8d3MpJC8udGVzdChvYmoucHJvdG9jb2wpKSB7XG4gICAgICAgICAgICBvYmoucG9ydCA9IFwiODBcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICgvXihodHRwfHdzKXMkLy50ZXN0KG9iai5wcm90b2NvbCkpIHtcbiAgICAgICAgICAgIG9iai5wb3J0ID0gXCI0NDNcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBvYmoucGF0aCA9IG9iai5wYXRoIHx8IFwiL1wiO1xuICAgIGNvbnN0IGlwdjYgPSBvYmouaG9zdC5pbmRleE9mKFwiOlwiKSAhPT0gLTE7XG4gICAgY29uc3QgaG9zdCA9IGlwdjYgPyBcIltcIiArIG9iai5ob3N0ICsgXCJdXCIgOiBvYmouaG9zdDtcbiAgICAvLyBkZWZpbmUgdW5pcXVlIGlkXG4gICAgb2JqLmlkID0gb2JqLnByb3RvY29sICsgXCI6Ly9cIiArIGhvc3QgKyBcIjpcIiArIG9iai5wb3J0ICsgcGF0aDtcbiAgICAvLyBkZWZpbmUgaHJlZlxuICAgIG9iai5ocmVmID1cbiAgICAgICAgb2JqLnByb3RvY29sICtcbiAgICAgICAgICAgIFwiOi8vXCIgK1xuICAgICAgICAgICAgaG9zdCArXG4gICAgICAgICAgICAobG9jICYmIGxvYy5wb3J0ID09PSBvYmoucG9ydCA/IFwiXCIgOiBcIjpcIiArIG9iai5wb3J0KTtcbiAgICByZXR1cm4gb2JqO1xufVxuZXhwb3J0cy51cmwgPSB1cmw7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMucmVjb25zdHJ1Y3RQYWNrZXQgPSBleHBvcnRzLmRlY29uc3RydWN0UGFja2V0ID0gdm9pZCAwO1xuY29uc3QgaXNfYmluYXJ5XzEgPSByZXF1aXJlKFwiLi9pcy1iaW5hcnlcIik7XG4vKipcbiAqIFJlcGxhY2VzIGV2ZXJ5IEJ1ZmZlciB8IEFycmF5QnVmZmVyIHwgQmxvYiB8IEZpbGUgaW4gcGFja2V0IHdpdGggYSBudW1iZXJlZCBwbGFjZWhvbGRlci5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcGFja2V0IC0gc29ja2V0LmlvIGV2ZW50IHBhY2tldFxuICogQHJldHVybiB7T2JqZWN0fSB3aXRoIGRlY29uc3RydWN0ZWQgcGFja2V0IGFuZCBsaXN0IG9mIGJ1ZmZlcnNcbiAqIEBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gZGVjb25zdHJ1Y3RQYWNrZXQocGFja2V0KSB7XG4gICAgY29uc3QgYnVmZmVycyA9IFtdO1xuICAgIGNvbnN0IHBhY2tldERhdGEgPSBwYWNrZXQuZGF0YTtcbiAgICBjb25zdCBwYWNrID0gcGFja2V0O1xuICAgIHBhY2suZGF0YSA9IF9kZWNvbnN0cnVjdFBhY2tldChwYWNrZXREYXRhLCBidWZmZXJzKTtcbiAgICBwYWNrLmF0dGFjaG1lbnRzID0gYnVmZmVycy5sZW5ndGg7IC8vIG51bWJlciBvZiBiaW5hcnkgJ2F0dGFjaG1lbnRzJ1xuICAgIHJldHVybiB7IHBhY2tldDogcGFjaywgYnVmZmVyczogYnVmZmVycyB9O1xufVxuZXhwb3J0cy5kZWNvbnN0cnVjdFBhY2tldCA9IGRlY29uc3RydWN0UGFja2V0O1xuZnVuY3Rpb24gX2RlY29uc3RydWN0UGFja2V0KGRhdGEsIGJ1ZmZlcnMpIHtcbiAgICBpZiAoIWRhdGEpXG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIGlmIChpc19iaW5hcnlfMS5pc0JpbmFyeShkYXRhKSkge1xuICAgICAgICBjb25zdCBwbGFjZWhvbGRlciA9IHsgX3BsYWNlaG9sZGVyOiB0cnVlLCBudW06IGJ1ZmZlcnMubGVuZ3RoIH07XG4gICAgICAgIGJ1ZmZlcnMucHVzaChkYXRhKTtcbiAgICAgICAgcmV0dXJuIHBsYWNlaG9sZGVyO1xuICAgIH1cbiAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICAgIGNvbnN0IG5ld0RhdGEgPSBuZXcgQXJyYXkoZGF0YS5sZW5ndGgpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIG5ld0RhdGFbaV0gPSBfZGVjb25zdHJ1Y3RQYWNrZXQoZGF0YVtpXSwgYnVmZmVycyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ld0RhdGE7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiBkYXRhID09PSBcIm9iamVjdFwiICYmICEoZGF0YSBpbnN0YW5jZW9mIERhdGUpKSB7XG4gICAgICAgIGNvbnN0IG5ld0RhdGEgPSB7fTtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gZGF0YSkge1xuICAgICAgICAgICAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIG5ld0RhdGFba2V5XSA9IF9kZWNvbnN0cnVjdFBhY2tldChkYXRhW2tleV0sIGJ1ZmZlcnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdEYXRhO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbn1cbi8qKlxuICogUmVjb25zdHJ1Y3RzIGEgYmluYXJ5IHBhY2tldCBmcm9tIGl0cyBwbGFjZWhvbGRlciBwYWNrZXQgYW5kIGJ1ZmZlcnNcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcGFja2V0IC0gZXZlbnQgcGFja2V0IHdpdGggcGxhY2Vob2xkZXJzXG4gKiBAcGFyYW0ge0FycmF5fSBidWZmZXJzIC0gYmluYXJ5IGJ1ZmZlcnMgdG8gcHV0IGluIHBsYWNlaG9sZGVyIHBvc2l0aW9uc1xuICogQHJldHVybiB7T2JqZWN0fSByZWNvbnN0cnVjdGVkIHBhY2tldFxuICogQHB1YmxpY1xuICovXG5mdW5jdGlvbiByZWNvbnN0cnVjdFBhY2tldChwYWNrZXQsIGJ1ZmZlcnMpIHtcbiAgICBwYWNrZXQuZGF0YSA9IF9yZWNvbnN0cnVjdFBhY2tldChwYWNrZXQuZGF0YSwgYnVmZmVycyk7XG4gICAgcGFja2V0LmF0dGFjaG1lbnRzID0gdW5kZWZpbmVkOyAvLyBubyBsb25nZXIgdXNlZnVsXG4gICAgcmV0dXJuIHBhY2tldDtcbn1cbmV4cG9ydHMucmVjb25zdHJ1Y3RQYWNrZXQgPSByZWNvbnN0cnVjdFBhY2tldDtcbmZ1bmN0aW9uIF9yZWNvbnN0cnVjdFBhY2tldChkYXRhLCBidWZmZXJzKSB7XG4gICAgaWYgKCFkYXRhKVxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICBpZiAoZGF0YSAmJiBkYXRhLl9wbGFjZWhvbGRlcikge1xuICAgICAgICByZXR1cm4gYnVmZmVyc1tkYXRhLm51bV07IC8vIGFwcHJvcHJpYXRlIGJ1ZmZlciAoc2hvdWxkIGJlIG5hdHVyYWwgb3JkZXIgYW55d2F5KVxuICAgIH1cbiAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZGF0YVtpXSA9IF9yZWNvbnN0cnVjdFBhY2tldChkYXRhW2ldLCBidWZmZXJzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgZGF0YSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBkYXRhKSB7XG4gICAgICAgICAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgZGF0YVtrZXldID0gX3JlY29uc3RydWN0UGFja2V0KGRhdGFba2V5XSwgYnVmZmVycyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuRGVjb2RlciA9IGV4cG9ydHMuRW5jb2RlciA9IGV4cG9ydHMuUGFja2V0VHlwZSA9IGV4cG9ydHMucHJvdG9jb2wgPSB2b2lkIDA7XG5jb25zdCBFbWl0dGVyID0gcmVxdWlyZShcImNvbXBvbmVudC1lbWl0dGVyXCIpO1xuY29uc3QgYmluYXJ5XzEgPSByZXF1aXJlKFwiLi9iaW5hcnlcIik7XG5jb25zdCBpc19iaW5hcnlfMSA9IHJlcXVpcmUoXCIuL2lzLWJpbmFyeVwiKTtcbmNvbnN0IGRlYnVnID0gcmVxdWlyZShcImRlYnVnXCIpKFwic29ja2V0LmlvLXBhcnNlclwiKTtcbi8qKlxuICogUHJvdG9jb2wgdmVyc2lvbi5cbiAqXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydHMucHJvdG9jb2wgPSA1O1xudmFyIFBhY2tldFR5cGU7XG4oZnVuY3Rpb24gKFBhY2tldFR5cGUpIHtcbiAgICBQYWNrZXRUeXBlW1BhY2tldFR5cGVbXCJDT05ORUNUXCJdID0gMF0gPSBcIkNPTk5FQ1RcIjtcbiAgICBQYWNrZXRUeXBlW1BhY2tldFR5cGVbXCJESVNDT05ORUNUXCJdID0gMV0gPSBcIkRJU0NPTk5FQ1RcIjtcbiAgICBQYWNrZXRUeXBlW1BhY2tldFR5cGVbXCJFVkVOVFwiXSA9IDJdID0gXCJFVkVOVFwiO1xuICAgIFBhY2tldFR5cGVbUGFja2V0VHlwZVtcIkFDS1wiXSA9IDNdID0gXCJBQ0tcIjtcbiAgICBQYWNrZXRUeXBlW1BhY2tldFR5cGVbXCJDT05ORUNUX0VSUk9SXCJdID0gNF0gPSBcIkNPTk5FQ1RfRVJST1JcIjtcbiAgICBQYWNrZXRUeXBlW1BhY2tldFR5cGVbXCJCSU5BUllfRVZFTlRcIl0gPSA1XSA9IFwiQklOQVJZX0VWRU5UXCI7XG4gICAgUGFja2V0VHlwZVtQYWNrZXRUeXBlW1wiQklOQVJZX0FDS1wiXSA9IDZdID0gXCJCSU5BUllfQUNLXCI7XG59KShQYWNrZXRUeXBlID0gZXhwb3J0cy5QYWNrZXRUeXBlIHx8IChleHBvcnRzLlBhY2tldFR5cGUgPSB7fSkpO1xuLyoqXG4gKiBBIHNvY2tldC5pbyBFbmNvZGVyIGluc3RhbmNlXG4gKi9cbmNsYXNzIEVuY29kZXIge1xuICAgIC8qKlxuICAgICAqIEVuY29kZSBhIHBhY2tldCBhcyBhIHNpbmdsZSBzdHJpbmcgaWYgbm9uLWJpbmFyeSwgb3IgYXMgYVxuICAgICAqIGJ1ZmZlciBzZXF1ZW5jZSwgZGVwZW5kaW5nIG9uIHBhY2tldCB0eXBlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9iaiAtIHBhY2tldCBvYmplY3RcbiAgICAgKi9cbiAgICBlbmNvZGUob2JqKSB7XG4gICAgICAgIGRlYnVnKFwiZW5jb2RpbmcgcGFja2V0ICVqXCIsIG9iaik7XG4gICAgICAgIGlmIChvYmoudHlwZSA9PT0gUGFja2V0VHlwZS5FVkVOVCB8fCBvYmoudHlwZSA9PT0gUGFja2V0VHlwZS5BQ0spIHtcbiAgICAgICAgICAgIGlmIChpc19iaW5hcnlfMS5oYXNCaW5hcnkob2JqKSkge1xuICAgICAgICAgICAgICAgIG9iai50eXBlID1cbiAgICAgICAgICAgICAgICAgICAgb2JqLnR5cGUgPT09IFBhY2tldFR5cGUuRVZFTlRcbiAgICAgICAgICAgICAgICAgICAgICAgID8gUGFja2V0VHlwZS5CSU5BUllfRVZFTlRcbiAgICAgICAgICAgICAgICAgICAgICAgIDogUGFja2V0VHlwZS5CSU5BUllfQUNLO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmVuY29kZUFzQmluYXJ5KG9iaik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFt0aGlzLmVuY29kZUFzU3RyaW5nKG9iaildO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBFbmNvZGUgcGFja2V0IGFzIHN0cmluZy5cbiAgICAgKi9cbiAgICBlbmNvZGVBc1N0cmluZyhvYmopIHtcbiAgICAgICAgLy8gZmlyc3QgaXMgdHlwZVxuICAgICAgICBsZXQgc3RyID0gXCJcIiArIG9iai50eXBlO1xuICAgICAgICAvLyBhdHRhY2htZW50cyBpZiB3ZSBoYXZlIHRoZW1cbiAgICAgICAgaWYgKG9iai50eXBlID09PSBQYWNrZXRUeXBlLkJJTkFSWV9FVkVOVCB8fFxuICAgICAgICAgICAgb2JqLnR5cGUgPT09IFBhY2tldFR5cGUuQklOQVJZX0FDSykge1xuICAgICAgICAgICAgc3RyICs9IG9iai5hdHRhY2htZW50cyArIFwiLVwiO1xuICAgICAgICB9XG4gICAgICAgIC8vIGlmIHdlIGhhdmUgYSBuYW1lc3BhY2Ugb3RoZXIgdGhhbiBgL2BcbiAgICAgICAgLy8gd2UgYXBwZW5kIGl0IGZvbGxvd2VkIGJ5IGEgY29tbWEgYCxgXG4gICAgICAgIGlmIChvYmoubnNwICYmIFwiL1wiICE9PSBvYmoubnNwKSB7XG4gICAgICAgICAgICBzdHIgKz0gb2JqLm5zcCArIFwiLFwiO1xuICAgICAgICB9XG4gICAgICAgIC8vIGltbWVkaWF0ZWx5IGZvbGxvd2VkIGJ5IHRoZSBpZFxuICAgICAgICBpZiAobnVsbCAhPSBvYmouaWQpIHtcbiAgICAgICAgICAgIHN0ciArPSBvYmouaWQ7XG4gICAgICAgIH1cbiAgICAgICAgLy8ganNvbiBkYXRhXG4gICAgICAgIGlmIChudWxsICE9IG9iai5kYXRhKSB7XG4gICAgICAgICAgICBzdHIgKz0gSlNPTi5zdHJpbmdpZnkob2JqLmRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGRlYnVnKFwiZW5jb2RlZCAlaiBhcyAlc1wiLCBvYmosIHN0cik7XG4gICAgICAgIHJldHVybiBzdHI7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEVuY29kZSBwYWNrZXQgYXMgJ2J1ZmZlciBzZXF1ZW5jZScgYnkgcmVtb3ZpbmcgYmxvYnMsIGFuZFxuICAgICAqIGRlY29uc3RydWN0aW5nIHBhY2tldCBpbnRvIG9iamVjdCB3aXRoIHBsYWNlaG9sZGVycyBhbmRcbiAgICAgKiBhIGxpc3Qgb2YgYnVmZmVycy5cbiAgICAgKi9cbiAgICBlbmNvZGVBc0JpbmFyeShvYmopIHtcbiAgICAgICAgY29uc3QgZGVjb25zdHJ1Y3Rpb24gPSBiaW5hcnlfMS5kZWNvbnN0cnVjdFBhY2tldChvYmopO1xuICAgICAgICBjb25zdCBwYWNrID0gdGhpcy5lbmNvZGVBc1N0cmluZyhkZWNvbnN0cnVjdGlvbi5wYWNrZXQpO1xuICAgICAgICBjb25zdCBidWZmZXJzID0gZGVjb25zdHJ1Y3Rpb24uYnVmZmVycztcbiAgICAgICAgYnVmZmVycy51bnNoaWZ0KHBhY2spOyAvLyBhZGQgcGFja2V0IGluZm8gdG8gYmVnaW5uaW5nIG9mIGRhdGEgbGlzdFxuICAgICAgICByZXR1cm4gYnVmZmVyczsgLy8gd3JpdGUgYWxsIHRoZSBidWZmZXJzXG4gICAgfVxufVxuZXhwb3J0cy5FbmNvZGVyID0gRW5jb2Rlcjtcbi8qKlxuICogQSBzb2NrZXQuaW8gRGVjb2RlciBpbnN0YW5jZVxuICpcbiAqIEByZXR1cm4ge09iamVjdH0gZGVjb2RlclxuICovXG5jbGFzcyBEZWNvZGVyIGV4dGVuZHMgRW1pdHRlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERlY29kZXMgYW4gZW5jb2RlZCBwYWNrZXQgc3RyaW5nIGludG8gcGFja2V0IEpTT04uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2JqIC0gZW5jb2RlZCBwYWNrZXRcbiAgICAgKi9cbiAgICBhZGQob2JqKSB7XG4gICAgICAgIGxldCBwYWNrZXQ7XG4gICAgICAgIGlmICh0eXBlb2Ygb2JqID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBwYWNrZXQgPSB0aGlzLmRlY29kZVN0cmluZyhvYmopO1xuICAgICAgICAgICAgaWYgKHBhY2tldC50eXBlID09PSBQYWNrZXRUeXBlLkJJTkFSWV9FVkVOVCB8fFxuICAgICAgICAgICAgICAgIHBhY2tldC50eXBlID09PSBQYWNrZXRUeXBlLkJJTkFSWV9BQ0spIHtcbiAgICAgICAgICAgICAgICAvLyBiaW5hcnkgcGFja2V0J3MganNvblxuICAgICAgICAgICAgICAgIHRoaXMucmVjb25zdHJ1Y3RvciA9IG5ldyBCaW5hcnlSZWNvbnN0cnVjdG9yKHBhY2tldCk7XG4gICAgICAgICAgICAgICAgLy8gbm8gYXR0YWNobWVudHMsIGxhYmVsZWQgYmluYXJ5IGJ1dCBubyBiaW5hcnkgZGF0YSB0byBmb2xsb3dcbiAgICAgICAgICAgICAgICBpZiAocGFja2V0LmF0dGFjaG1lbnRzID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1cGVyLmVtaXQoXCJkZWNvZGVkXCIsIHBhY2tldCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gbm9uLWJpbmFyeSBmdWxsIHBhY2tldFxuICAgICAgICAgICAgICAgIHN1cGVyLmVtaXQoXCJkZWNvZGVkXCIsIHBhY2tldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNfYmluYXJ5XzEuaXNCaW5hcnkob2JqKSB8fCBvYmouYmFzZTY0KSB7XG4gICAgICAgICAgICAvLyByYXcgYmluYXJ5IGRhdGFcbiAgICAgICAgICAgIGlmICghdGhpcy5yZWNvbnN0cnVjdG9yKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZ290IGJpbmFyeSBkYXRhIHdoZW4gbm90IHJlY29uc3RydWN0aW5nIGEgcGFja2V0XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFja2V0ID0gdGhpcy5yZWNvbnN0cnVjdG9yLnRha2VCaW5hcnlEYXRhKG9iaik7XG4gICAgICAgICAgICAgICAgaWYgKHBhY2tldCkge1xuICAgICAgICAgICAgICAgICAgICAvLyByZWNlaXZlZCBmaW5hbCBidWZmZXJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWNvbnN0cnVjdG9yID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgc3VwZXIuZW1pdChcImRlY29kZWRcIiwgcGFja2V0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmtub3duIHR5cGU6IFwiICsgb2JqKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBEZWNvZGUgYSBwYWNrZXQgU3RyaW5nIChKU09OIGRhdGEpXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gICAgICogQHJldHVybiB7T2JqZWN0fSBwYWNrZXRcbiAgICAgKi9cbiAgICBkZWNvZGVTdHJpbmcoc3RyKSB7XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgLy8gbG9vayB1cCB0eXBlXG4gICAgICAgIGNvbnN0IHAgPSB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIoc3RyLmNoYXJBdCgwKSksXG4gICAgICAgIH07XG4gICAgICAgIGlmIChQYWNrZXRUeXBlW3AudHlwZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidW5rbm93biBwYWNrZXQgdHlwZSBcIiArIHAudHlwZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gbG9vayB1cCBhdHRhY2htZW50cyBpZiB0eXBlIGJpbmFyeVxuICAgICAgICBpZiAocC50eXBlID09PSBQYWNrZXRUeXBlLkJJTkFSWV9FVkVOVCB8fFxuICAgICAgICAgICAgcC50eXBlID09PSBQYWNrZXRUeXBlLkJJTkFSWV9BQ0spIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gaSArIDE7XG4gICAgICAgICAgICB3aGlsZSAoc3RyLmNoYXJBdCgrK2kpICE9PSBcIi1cIiAmJiBpICE9IHN0ci5sZW5ndGgpIHsgfVxuICAgICAgICAgICAgY29uc3QgYnVmID0gc3RyLnN1YnN0cmluZyhzdGFydCwgaSk7XG4gICAgICAgICAgICBpZiAoYnVmICE9IE51bWJlcihidWYpIHx8IHN0ci5jaGFyQXQoaSkgIT09IFwiLVwiKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSWxsZWdhbCBhdHRhY2htZW50c1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHAuYXR0YWNobWVudHMgPSBOdW1iZXIoYnVmKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBsb29rIHVwIG5hbWVzcGFjZSAoaWYgYW55KVxuICAgICAgICBpZiAoXCIvXCIgPT09IHN0ci5jaGFyQXQoaSArIDEpKSB7XG4gICAgICAgICAgICBjb25zdCBzdGFydCA9IGkgKyAxO1xuICAgICAgICAgICAgd2hpbGUgKCsraSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGMgPSBzdHIuY2hhckF0KGkpO1xuICAgICAgICAgICAgICAgIGlmIChcIixcIiA9PT0gYylcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgaWYgKGkgPT09IHN0ci5sZW5ndGgpXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcC5uc3AgPSBzdHIuc3Vic3RyaW5nKHN0YXJ0LCBpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHAubnNwID0gXCIvXCI7XG4gICAgICAgIH1cbiAgICAgICAgLy8gbG9vayB1cCBpZFxuICAgICAgICBjb25zdCBuZXh0ID0gc3RyLmNoYXJBdChpICsgMSk7XG4gICAgICAgIGlmIChcIlwiICE9PSBuZXh0ICYmIE51bWJlcihuZXh0KSA9PSBuZXh0KSB7XG4gICAgICAgICAgICBjb25zdCBzdGFydCA9IGkgKyAxO1xuICAgICAgICAgICAgd2hpbGUgKCsraSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGMgPSBzdHIuY2hhckF0KGkpO1xuICAgICAgICAgICAgICAgIGlmIChudWxsID09IGMgfHwgTnVtYmVyKGMpICE9IGMpIHtcbiAgICAgICAgICAgICAgICAgICAgLS1pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGkgPT09IHN0ci5sZW5ndGgpXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcC5pZCA9IE51bWJlcihzdHIuc3Vic3RyaW5nKHN0YXJ0LCBpICsgMSkpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGxvb2sgdXAganNvbiBkYXRhXG4gICAgICAgIGlmIChzdHIuY2hhckF0KCsraSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHBheWxvYWQgPSB0cnlQYXJzZShzdHIuc3Vic3RyKGkpKTtcbiAgICAgICAgICAgIGlmIChEZWNvZGVyLmlzUGF5bG9hZFZhbGlkKHAudHlwZSwgcGF5bG9hZCkpIHtcbiAgICAgICAgICAgICAgICBwLmRhdGEgPSBwYXlsb2FkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaW52YWxpZCBwYXlsb2FkXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGRlYnVnKFwiZGVjb2RlZCAlcyBhcyAlalwiLCBzdHIsIHApO1xuICAgICAgICByZXR1cm4gcDtcbiAgICB9XG4gICAgc3RhdGljIGlzUGF5bG9hZFZhbGlkKHR5cGUsIHBheWxvYWQpIHtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlIFBhY2tldFR5cGUuQ09OTkVDVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gdHlwZW9mIHBheWxvYWQgPT09IFwib2JqZWN0XCI7XG4gICAgICAgICAgICBjYXNlIFBhY2tldFR5cGUuRElTQ09OTkVDVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gcGF5bG9hZCA9PT0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgY2FzZSBQYWNrZXRUeXBlLkNPTk5FQ1RfRVJST1I6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiBwYXlsb2FkID09PSBcInN0cmluZ1wiIHx8IHR5cGVvZiBwYXlsb2FkID09PSBcIm9iamVjdFwiO1xuICAgICAgICAgICAgY2FzZSBQYWNrZXRUeXBlLkVWRU5UOlxuICAgICAgICAgICAgY2FzZSBQYWNrZXRUeXBlLkJJTkFSWV9FVkVOVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gQXJyYXkuaXNBcnJheShwYXlsb2FkKSAmJiBwYXlsb2FkLmxlbmd0aCA+IDA7XG4gICAgICAgICAgICBjYXNlIFBhY2tldFR5cGUuQUNLOlxuICAgICAgICAgICAgY2FzZSBQYWNrZXRUeXBlLkJJTkFSWV9BQ0s6XG4gICAgICAgICAgICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkocGF5bG9hZCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogRGVhbGxvY2F0ZXMgYSBwYXJzZXIncyByZXNvdXJjZXNcbiAgICAgKi9cbiAgICBkZXN0cm95KCkge1xuICAgICAgICBpZiAodGhpcy5yZWNvbnN0cnVjdG9yKSB7XG4gICAgICAgICAgICB0aGlzLnJlY29uc3RydWN0b3IuZmluaXNoZWRSZWNvbnN0cnVjdGlvbigpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5EZWNvZGVyID0gRGVjb2RlcjtcbmZ1bmN0aW9uIHRyeVBhcnNlKHN0cikge1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKHN0cik7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG4vKipcbiAqIEEgbWFuYWdlciBvZiBhIGJpbmFyeSBldmVudCdzICdidWZmZXIgc2VxdWVuY2UnLiBTaG91bGRcbiAqIGJlIGNvbnN0cnVjdGVkIHdoZW5ldmVyIGEgcGFja2V0IG9mIHR5cGUgQklOQVJZX0VWRU5UIGlzXG4gKiBkZWNvZGVkLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYWNrZXRcbiAqIEByZXR1cm4ge0JpbmFyeVJlY29uc3RydWN0b3J9IGluaXRpYWxpemVkIHJlY29uc3RydWN0b3JcbiAqL1xuY2xhc3MgQmluYXJ5UmVjb25zdHJ1Y3RvciB7XG4gICAgY29uc3RydWN0b3IocGFja2V0KSB7XG4gICAgICAgIHRoaXMucGFja2V0ID0gcGFja2V0O1xuICAgICAgICB0aGlzLmJ1ZmZlcnMgPSBbXTtcbiAgICAgICAgdGhpcy5yZWNvblBhY2sgPSBwYWNrZXQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE1ldGhvZCB0byBiZSBjYWxsZWQgd2hlbiBiaW5hcnkgZGF0YSByZWNlaXZlZCBmcm9tIGNvbm5lY3Rpb25cbiAgICAgKiBhZnRlciBhIEJJTkFSWV9FVkVOVCBwYWNrZXQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0J1ZmZlciB8IEFycmF5QnVmZmVyfSBiaW5EYXRhIC0gdGhlIHJhdyBiaW5hcnkgZGF0YSByZWNlaXZlZFxuICAgICAqIEByZXR1cm4ge251bGwgfCBPYmplY3R9IHJldHVybnMgbnVsbCBpZiBtb3JlIGJpbmFyeSBkYXRhIGlzIGV4cGVjdGVkIG9yXG4gICAgICogICBhIHJlY29uc3RydWN0ZWQgcGFja2V0IG9iamVjdCBpZiBhbGwgYnVmZmVycyBoYXZlIGJlZW4gcmVjZWl2ZWQuXG4gICAgICovXG4gICAgdGFrZUJpbmFyeURhdGEoYmluRGF0YSkge1xuICAgICAgICB0aGlzLmJ1ZmZlcnMucHVzaChiaW5EYXRhKTtcbiAgICAgICAgaWYgKHRoaXMuYnVmZmVycy5sZW5ndGggPT09IHRoaXMucmVjb25QYWNrLmF0dGFjaG1lbnRzKSB7XG4gICAgICAgICAgICAvLyBkb25lIHdpdGggYnVmZmVyIGxpc3RcbiAgICAgICAgICAgIGNvbnN0IHBhY2tldCA9IGJpbmFyeV8xLnJlY29uc3RydWN0UGFja2V0KHRoaXMucmVjb25QYWNrLCB0aGlzLmJ1ZmZlcnMpO1xuICAgICAgICAgICAgdGhpcy5maW5pc2hlZFJlY29uc3RydWN0aW9uKCk7XG4gICAgICAgICAgICByZXR1cm4gcGFja2V0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDbGVhbnMgdXAgYmluYXJ5IHBhY2tldCByZWNvbnN0cnVjdGlvbiB2YXJpYWJsZXMuXG4gICAgICovXG4gICAgZmluaXNoZWRSZWNvbnN0cnVjdGlvbigpIHtcbiAgICAgICAgdGhpcy5yZWNvblBhY2sgPSBudWxsO1xuICAgICAgICB0aGlzLmJ1ZmZlcnMgPSBbXTtcbiAgICB9XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuaGFzQmluYXJ5ID0gZXhwb3J0cy5pc0JpbmFyeSA9IHZvaWQgMDtcbmNvbnN0IHdpdGhOYXRpdmVBcnJheUJ1ZmZlciA9IHR5cGVvZiBBcnJheUJ1ZmZlciA9PT0gXCJmdW5jdGlvblwiO1xuY29uc3QgaXNWaWV3ID0gKG9iaikgPT4ge1xuICAgIHJldHVybiB0eXBlb2YgQXJyYXlCdWZmZXIuaXNWaWV3ID09PSBcImZ1bmN0aW9uXCJcbiAgICAgICAgPyBBcnJheUJ1ZmZlci5pc1ZpZXcob2JqKVxuICAgICAgICA6IG9iai5idWZmZXIgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcjtcbn07XG5jb25zdCB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5jb25zdCB3aXRoTmF0aXZlQmxvYiA9IHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgfHxcbiAgICAodHlwZW9mIEJsb2IgIT09IFwidW5kZWZpbmVkXCIgJiZcbiAgICAgICAgdG9TdHJpbmcuY2FsbChCbG9iKSA9PT0gXCJbb2JqZWN0IEJsb2JDb25zdHJ1Y3Rvcl1cIik7XG5jb25zdCB3aXRoTmF0aXZlRmlsZSA9IHR5cGVvZiBGaWxlID09PSBcImZ1bmN0aW9uXCIgfHxcbiAgICAodHlwZW9mIEZpbGUgIT09IFwidW5kZWZpbmVkXCIgJiZcbiAgICAgICAgdG9TdHJpbmcuY2FsbChGaWxlKSA9PT0gXCJbb2JqZWN0IEZpbGVDb25zdHJ1Y3Rvcl1cIik7XG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiBvYmogaXMgYSBCdWZmZXIsIGFuIEFycmF5QnVmZmVyLCBhIEJsb2Igb3IgYSBGaWxlLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGlzQmluYXJ5KG9iaikge1xuICAgIHJldHVybiAoKHdpdGhOYXRpdmVBcnJheUJ1ZmZlciAmJiAob2JqIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIgfHwgaXNWaWV3KG9iaikpKSB8fFxuICAgICAgICAod2l0aE5hdGl2ZUJsb2IgJiYgb2JqIGluc3RhbmNlb2YgQmxvYikgfHxcbiAgICAgICAgKHdpdGhOYXRpdmVGaWxlICYmIG9iaiBpbnN0YW5jZW9mIEZpbGUpKTtcbn1cbmV4cG9ydHMuaXNCaW5hcnkgPSBpc0JpbmFyeTtcbmZ1bmN0aW9uIGhhc0JpbmFyeShvYmosIHRvSlNPTikge1xuICAgIGlmICghb2JqIHx8IHR5cGVvZiBvYmogIT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoQXJyYXkuaXNBcnJheShvYmopKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gb2JqLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgaWYgKGhhc0JpbmFyeShvYmpbaV0pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoaXNCaW5hcnkob2JqKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKG9iai50b0pTT04gJiZcbiAgICAgICAgdHlwZW9mIG9iai50b0pTT04gPT09IFwiZnVuY3Rpb25cIiAmJlxuICAgICAgICBhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHJldHVybiBoYXNCaW5hcnkob2JqLnRvSlNPTigpLCB0cnVlKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBrZXkgaW4gb2JqKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpICYmIGhhc0JpbmFyeShvYmpba2V5XSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbmV4cG9ydHMuaGFzQmluYXJ5ID0gaGFzQmluYXJ5O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYWxwaGFiZXQgPSAnMDEyMzQ1Njc4OUFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXotXycuc3BsaXQoJycpXG4gICwgbGVuZ3RoID0gNjRcbiAgLCBtYXAgPSB7fVxuICAsIHNlZWQgPSAwXG4gICwgaSA9IDBcbiAgLCBwcmV2O1xuXG4vKipcbiAqIFJldHVybiBhIHN0cmluZyByZXByZXNlbnRpbmcgdGhlIHNwZWNpZmllZCBudW1iZXIuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IG51bSBUaGUgbnVtYmVyIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBudW1iZXIuXG4gKiBAYXBpIHB1YmxpY1xuICovXG5mdW5jdGlvbiBlbmNvZGUobnVtKSB7XG4gIHZhciBlbmNvZGVkID0gJyc7XG5cbiAgZG8ge1xuICAgIGVuY29kZWQgPSBhbHBoYWJldFtudW0gJSBsZW5ndGhdICsgZW5jb2RlZDtcbiAgICBudW0gPSBNYXRoLmZsb29yKG51bSAvIGxlbmd0aCk7XG4gIH0gd2hpbGUgKG51bSA+IDApO1xuXG4gIHJldHVybiBlbmNvZGVkO1xufVxuXG4vKipcbiAqIFJldHVybiB0aGUgaW50ZWdlciB2YWx1ZSBzcGVjaWZpZWQgYnkgdGhlIGdpdmVuIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyIFRoZSBzdHJpbmcgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtOdW1iZXJ9IFRoZSBpbnRlZ2VyIHZhbHVlIHJlcHJlc2VudGVkIGJ5IHRoZSBzdHJpbmcuXG4gKiBAYXBpIHB1YmxpY1xuICovXG5mdW5jdGlvbiBkZWNvZGUoc3RyKSB7XG4gIHZhciBkZWNvZGVkID0gMDtcblxuICBmb3IgKGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgZGVjb2RlZCA9IGRlY29kZWQgKiBsZW5ndGggKyBtYXBbc3RyLmNoYXJBdChpKV07XG4gIH1cblxuICByZXR1cm4gZGVjb2RlZDtcbn1cblxuLyoqXG4gKiBZZWFzdDogQSB0aW55IGdyb3dpbmcgaWQgZ2VuZXJhdG9yLlxuICpcbiAqIEByZXR1cm5zIHtTdHJpbmd9IEEgdW5pcXVlIGlkLlxuICogQGFwaSBwdWJsaWNcbiAqL1xuZnVuY3Rpb24geWVhc3QoKSB7XG4gIHZhciBub3cgPSBlbmNvZGUoK25ldyBEYXRlKCkpO1xuXG4gIGlmIChub3cgIT09IHByZXYpIHJldHVybiBzZWVkID0gMCwgcHJldiA9IG5vdztcbiAgcmV0dXJuIG5vdyArJy4nKyBlbmNvZGUoc2VlZCsrKTtcbn1cblxuLy9cbi8vIE1hcCBlYWNoIGNoYXJhY3RlciB0byBpdHMgaW5kZXguXG4vL1xuZm9yICg7IGkgPCBsZW5ndGg7IGkrKykgbWFwW2FscGhhYmV0W2ldXSA9IGk7XG5cbi8vXG4vLyBFeHBvc2UgdGhlIGB5ZWFzdGAsIGBlbmNvZGVgIGFuZCBgZGVjb2RlYCBmdW5jdGlvbnMuXG4vL1xueWVhc3QuZW5jb2RlID0gZW5jb2RlO1xueWVhc3QuZGVjb2RlID0gZGVjb2RlO1xubW9kdWxlLmV4cG9ydHMgPSB5ZWFzdDtcbiIsImltcG9ydCB7ICQgfSBmcm9tICcuL2NvcmUvbGliL2RvbSc7XG5pbXBvcnQgeyBwYXJlbnRzIH0gZnJvbSAnLi9jb3JlL2xpYi9kb20nO1xuaW1wb3J0IHsgcGxheWVyUmVmIH0gZnJvbSAnLi9kYXRhJ1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0VUkoc29ja2V0KSB7XG4gIC8vIHF1ZXJ5IEVsZW1lbnRzXG4gIGxldCBjcmVhdGVHYW1lQnRuID0gJCgnI2NyZWF0ZS1nYW1lJyk7XG4gIGxldCBzaG93Sm9pbkdhbWVQcm9tcHRCdG4gPSAkKCcjc2hvdy1qb2luLWdhbWUtcHJvbXB0Jyk7XG4gIGxldCBjb25maXJtSm9pbkdhbWVCdG4gPSAkKCcjY29uZmlybS1qb2luLWdhbWUnKTtcbiAgbGV0IHJvb21Db2RlSW5wdXQgPSAkKCcjcm9vbS1jb2RlLWlucHV0Jyk7XG4gIGxldCByb29tQ29kZURpc3BsYXkgPSAkKCcjcm9vbS1jb2RlLWRpc3BsYXknKTtcbiAgbGV0IG5hbWVJbnB1dCA9ICQoJyNuYW1lLWlucHV0Jyk7XG4gIGxldCBuYW1lQ29uZmlybSA9ICQoJyNuYW1lLWNvbmZpcm0nKTtcbiAgbGV0IGxlYXZlV2FpdGluZ0J0biA9ICQoJyNsZWF2ZS13YWl0aW5nJyk7XG4gIGxldCBsZWF2ZUdhbWVTdGFydEFsZXJ0ID0gJCgnI2xlYXZlLWdhbWUtc3RhcnQtYWxlcnQnKTtcblxuICAvLyDlu7rnq4sgaW5pVUkgUHJvbWlzZSBcbiAgbGV0IGluaXRUcmlnZ2VyO1xuICBsZXQgaW5pdFVJUHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xuICAgIGluaXRUcmlnZ2VyID0gcmVzO1xuICB9KVxuXG4gIC8vLi4u5paH5a2XXG4gIHNldEludGVydmFsKCgpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1yb2xlPVwiLi4uXCJdJykuZm9yRWFjaChlbGUgPT4ge1xuICAgICAgaWYgKGVsZS5pbm5lckhUTUwubGVuZ3RoIDwgMykge1xuICAgICAgICBlbGUuaW5uZXJIVE1MICs9ICcuJ1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGVsZS5pbm5lckhUTUwgPSAnJ1xuICAgICAgfVxuICAgIH0pXG4gIH0sIDUwMClcblxuICAvL+e2geWumumXnOmWiXBvcG91dFxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbY2xvc2UtdGhpcy1wb3BvdXRdJykuZm9yRWFjaChlbGUgPT4ge1xuICAgIGxldCBwYXJlbnRQb3BvdXRzID0gcGFyZW50cyhlbGUsICcucG9wb3V0Jyk7XG4gICAgZWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdG9nZ2xlUG9wb3V0KHBhcmVudFBvcG91dHNbMF0uaWQsIGZhbHNlKTtcbiAgICB9KVxuXG4gIH0pXG5cblxuICAvLyDlrqPlkYogZmxhZywg55uu55qE5piv55So5L6G5Yik5a6a5Yiw5bqVbmFtZVByb21wdCDmmK/lvp7lk6rkuIDlgIvnrqHpgZPljrtjYWxs5Ye65L6G55qEXG4gIGxldCBmbGFnO1xuXG5cbiAgLy/ntoHlrprnorroqo3pgIHlh7rmjInpiJXnmoTpu57mk4rkuovku7ZcbiAgbmFtZUNvbmZpcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbGV0IG5hbWUgPSBuYW1lSW5wdXQudmFsdWUgPyBuYW1lSW5wdXQudmFsdWUgOiBwbGF5ZXJSZWYubmFtZTtcbiAgICBjb25maXJtTmFtZShzb2NrZXQsIG5hbWUpO1xuICAgIGlmIChmbGFnID09PSAnb25Kb2luJykge1xuICAgICAgdG9nZ2xlUG9wb3V0KCdqb2luLWdhbWUtcHJvbXB0JywgdHJ1ZSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGZsYWcgPT09ICdvbkNyZWF0ZScpIHtcbiAgICAgIG5ld0dhbWUoc29ja2V0KTtcbiAgICB9XG4gIH0pXG5cbiAgLy/ntoHlrprmjInpiJXpu57mk4rlvozplovllZ9uYW1lLWlucHV0LXByb21wdCA9PiBqb2luR2FtZSBwcm9tcHRcbiAgc2hvd0pvaW5HYW1lUHJvbXB0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGZsYWcgPSAnb25Kb2luJztcbiAgICB0b2dnbGVQb3BvdXQoJ25hbWUtaW5wdXQtcHJvbXB0JywgdHJ1ZSk7XG4gIH0pO1xuXG4gIC8v57aB5a6a5oyJ6YiV6bue5pOK5b6M6YCB5Ye65oOz5Y+D5Yqg55qE5oi/6ZaT56K855qE5LqL5Lu2XG4gIGNvbmZpcm1Kb2luR2FtZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBsZXQgcm9vbUNvZGUgPSByb29tQ29kZUlucHV0LnZhbHVlO1xuICAgIGNvbmZpcm1Kb2luR2FtZShzb2NrZXQsIHJvb21Db2RlKTtcbiAgfSlcblxuICAvL+e2geWumuaMiemIlem7nuaTiuW+jOmWi+WVn25hbWUtaW5wdXQtcHJvbXB0ID0+IG5ld0dhbWUgcHJvbXB0XG4gIGNyZWF0ZUdhbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZmxhZyA9ICdvbkNyZWF0ZSc7XG4gICAgdG9nZ2xlUG9wb3V0KCduYW1lLWlucHV0LXByb21wdCcsIHRydWUpO1xuICB9KTtcblxuICAvL+e2geWumuesrOS4gOmboumWi+aMiemIlVxuICBsZWF2ZVdhaXRpbmdCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgc29ja2V0LmVtaXQoJ2xlYXZlV2FpdGluZycpO1xuICAgIHRvZ2dsZVBvcG91dCgncm9vbS1jb2RlLWRpc3BsYXktcG9wb3V0JywgZmFsc2UpO1xuICB9KVxuICAvL+e2geWumuesrOS6jOmboumWi+aMiemIlVxuICBsZWF2ZUdhbWVTdGFydEFsZXJ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHNvY2tldC5lbWl0KCdsZWF2ZVN0YXJ0aW5nR2FtZScsIHBsYXllclJlZik7XG4gICAgdG9nZ2xlUG9wb3V0KCdnYW1lLXN0YXJ0LWFsZXJ0JywgZmFsc2UpO1xuICB9KVxuXG4gIC8v57aB5a6a55W2c2VydmVy5YKz5L6GJ2dlblJvb21Db2RlJ+ioiuiZn+W+jO+8jHVpIOaHieeUoueUn+eahOWwjeaHieihjOeCulxuICBzb2NrZXQub24oJ2dlblJvb21Db2RlJywgKGRhdGEpID0+IHtcbiAgICByb29tQ29kZURpc3BsYXkuaW5uZXJIVE1MID0gZGF0YTtcbiAgfSlcblxuICAvL+e2geWumueVtnNlcnZlcuWCs+S+hidwbGF5ZXJKb2luZWQn6KiK6Jmf5b6M77yMdWkg5oeJ55Si55Sf55qE5bCN5oeJ6KGM54K6XG4gIHNvY2tldC5vbigncGxheWVySm9pbmVkJywgKGRhdGEpID0+IHtcbiAgICBpZiAoZGF0YS5wbGF5ZXJOdW1iZXIgPT09IDIpIHtcbiAgICAgIGlmIChwbGF5ZXJSZWYubnVtYmVyID09IDEpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtcm9sZT1cIm9wcG9uZW50XCJdJykuZm9yRWFjaChlbGUgPT4ge1xuICAgICAgICAgIGVsZS5pbm5lckhUTUwgPSBgWU9VUiBPUFBPTkVOVCAke2RhdGEucGxheWVyTmFtZX0gU0hPV1MgVVAhYFxuICAgICAgICB9KTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtcm9sZT1cInBsYXllcjJcIl0nKS5mb3JFYWNoKGVsZSA9PiB7XG4gICAgICAgICAgZWxlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICBlbHNlIGlmIChwbGF5ZXJSZWYubnVtYmVyID09IDIpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtcm9sZT1cIm9wcG9uZW50XCJdJykuZm9yRWFjaChlbGUgPT4ge1xuICAgICAgICAgIGVsZS5pbm5lckhUTUwgPSBgV0FJVElORyBGT1IgVEhFIFJPT00gSE9TVDxicj48YnI+JHtkYXRhLmhvc3ROYW1lfTxicj48YnI+VE8gQUNDRVBUIFlPVVIgQ0hBTExFTkdFPHNwYW4gZGF0YS1yb2xlPVwiLi4uXCI+PC9zcGFuPmBcbiAgICAgICAgfSk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXJvbGU9XCJwbGF5ZXIxXCJdJykuZm9yRWFjaChlbGUgPT4ge1xuICAgICAgICAgIGVsZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgdG9nZ2xlUG9wb3V0KCdyb29tLWNvZGUtZGlzcGxheS1wb3BvdXQnLCBmYWxzZSk7XG4gICAgICB0b2dnbGVQb3BvdXQoJ2pvaW4tZ2FtZS1wcm9tcHQnLCBmYWxzZSk7XG4gICAgICB0b2dnbGVQb3BvdXQoJ2dhbWUtc3RhcnQtYWxlcnQnLCB0cnVlKTtcbiAgICB9XG4gIH0pXG5cbiAgc29ja2V0Lm9uKCdob3N0LWxlYXZlJywgKGRhdGEpID0+IHtcbiAgICB0b2dnbGVQb3BvdXQoJ2dhbWUtc3RhcnQtYWxlcnQnLCBmYWxzZSk7XG4gICAgdG9nZ2xlUG9wb3V0KCdsZWF2ZS1hbGVydCcsIHRydWUpO1xuICAgICQoJ1tkYXRhLXJvbGU9XCJsZWF2ZS1tc2dcIl0nKS5pbm5lckhUTUwgPSBgSE9TVCAke2RhdGEuaG9zdH0gTEVGVCBBTkQgU0hVVERPV04gVEhFIFJPT00uYFxuICB9KVxuXG4gIHNvY2tldC5vbignY2hhbGxlbmdlci1sZWF2ZScsIChkYXRhKSA9PiB7XG4gICAgdG9nZ2xlUG9wb3V0KCdnYW1lLXN0YXJ0LWFsZXJ0JywgZmFsc2UpO1xuICAgIHRvZ2dsZVBvcG91dCgnbGVhdmUtYWxlcnQnLCB0cnVlKTtcbiAgICB0b2dnbGVQb3BvdXQoJ3Jvb20tY29kZS1kaXNwbGF5LXBvcG91dCcsIHRydWUpO1xuICAgICQoJ1tkYXRhLXJvbGU9XCJsZWF2ZS1tc2dcIl0nKS5pbm5lckhUTUwgPSBgQ0hBTExFTkdFUiAke2RhdGEuY2hhbGxlbmdlcn0gTEVGVCBUSElTIE1BVENILmBcbiAgfSlcblxuXG4gIC8v57aB5a6a55W2c2VydmVy5YKz5L6GJ2dhbWVJbml0J+ioiuiZn+W+jO+8jHVpIOaHieeUoueUn+eahOWwjeaHieihjOeCulxuICBzb2NrZXQub24oJ2dhbWVJbml0JywgKCkgPT4ge1xuICAgIGhpZGVJbml0aWFsU2NyZWVuKCk7XG4gIH0pXG5cblxuICAvLyDop7jnmbwgcHJvbWlzZSBmdWxsZmlsbOapn+WItlxuICBpbml0VHJpZ2dlcigpO1xuXG4gIC8vIOWbnuWCsyBmdWxsZmlsbOW+jOeahHByb21pc2VcbiAgcmV0dXJuIGluaXRVSVByb21pc2U7XG59XG5cbi8qKlxuICog6ZaL5ZWfIHBvcG91dFxuICpcbiAqIEBwYXJhbSB7Kn0gaWRcbiAqIEBwYXJhbSB7Kn0gc3RhdHVzXG4gKi9cbmZ1bmN0aW9uIHRvZ2dsZVBvcG91dChpZCwgc3RhdHVzKSB7XG4gIGxldCBwb3BvdXQgPSAkKGAucG9wb3V0IyR7aWR9YCk7XG4gIGlmIChzdGF0dXMpIHtcbiAgICBwb3BvdXQuY2xhc3NMaXN0LmFkZCgncG9wb3V0LS1zaG93Jyk7XG4gIH1cbiAgZWxzZSB7XG4gICAgcG9wb3V0LmNsYXNzTGlzdC5yZW1vdmUoJ3BvcG91dC0tc2hvdycpO1xuICB9XG59XG4vKipcbiAqIOmaseiXj+i1t+Wni+eVq+mdolxuICpcbiAqL1xuZnVuY3Rpb24gaGlkZUluaXRpYWxTY3JlZW4oKSB7XG4gIGxldCBpbml0aWFsU2NyZWVuID0gJCgnI2luaXRpYWwtc2NyZWVuJyk7XG4gIGluaXRpYWxTY3JlZW4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn1cbi8qKlxuICogIOmWi+mXnOWFt+aciWhpZGUtb24tYWN0aW9u5bGs5oCn55qEdWkgZWxlbWVudCxcbiAqXG4gKiBAcGFyYW0geyp9IHN0YXR1c1xuICovXG5mdW5jdGlvbiB0b2dnbGVIaWRlT25BY3Rpb24oc3RhdHVzKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1toaWRlLW9uLWFjdGlvbl0nKS5mb3JFYWNoKGVsZSA9PiB7XG4gICAgZWxlLnNldEF0dHJpYnV0ZSgnaGlkZS1vbi1hY3Rpb24nLCBzdGF0dXMgPyAnJyA6ICdoaWRlJyk7XG4gIH0pXG59XG4vKipcbiAqIOmWi+mXnOWFt+aciXNob3ctb24tZnVsbOWxrOaAp+eahHVpIGVsZW1lbnQsXG4gKlxuICogQHBhcmFtIHsqfSBzdGF0dXNcbiAqL1xuZnVuY3Rpb24gdG9nZ2xlU2hvd09uQWN0aW9uKHN0YXR1cykge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbc2hvdy1vbi1hY3Rpb25dJykuZm9yRWFjaChlbGUgPT4ge1xuICAgIGVsZS5zZXRBdHRyaWJ1dGUoJ3Nob3ctb24tYWN0aW9uJywgc3RhdHVzID8gJycgOiAnaGlkZScpO1xuICB9KVxufVxuXG5cbi8qKlxuICog5bu656uL5paw6YGK5oiyXG4gKlxuICogQHBhcmFtIHsqfSBzb2NrZXRcbiAqL1xuZnVuY3Rpb24gbmV3R2FtZShzb2NrZXQpIHtcbiAgcGxheWVyUmVmLm51bWJlciA9IDE7XG4gIHRvZ2dsZVBvcG91dCgncm9vbS1jb2RlLWRpc3BsYXktcG9wb3V0JywgdHJ1ZSk7XG4gIHNvY2tldC5lbWl0KCduZXdHYW1lJyk7XG59XG4vKipcbiAqIOWQkXNlcnZlcueZvOWHuueiuuiqjeWPg+WKoOmBiuaIsueahOS/oeiZn1xuICpcbiAqIEBwYXJhbSB7Kn0gc29ja2V0XG4gKiBAcGFyYW0geyp9IHJvb21Db2RlXG4gKi9cbmZ1bmN0aW9uIGNvbmZpcm1Kb2luR2FtZShzb2NrZXQsIHJvb21Db2RlKSB7XG4gIHBsYXllclJlZi5udW1iZXIgPSAyO1xuICBzb2NrZXQuZW1pdCgnam9pbkdhbWUnLCByb29tQ29kZSk7XG59XG4vKipcbiAqIFxuICog56K66KqN6Ly45YWl55qE5pqx56ix5b6M77yM5oqK6YGK5oiy5YWn5omA5pyJZGF0YS1yb2xlPVwibmFtZVwiIOeahCBlbGVtZW50LCDlhaflrrnpg73mj5vmiJDovLjlhaXnmoRuYW1lLCDkuKblkIzmmYLlkJFzZXJ2ZXLnmbzpgIEnbmFtZUNvbmZpcm0n55qE6KiK6JmfXG4gKiDmnIDlvozpl5zploluYW1lLWlucHV0LXByb21wdFxuICogQHBhcmFtIHsqfSBzb2NrZXRcbiAqIEBwYXJhbSB7Kn0gbmFtZVxuICogQHBhcmFtIHsqfSBjYlxuICovXG5mdW5jdGlvbiBjb25maXJtTmFtZShzb2NrZXQsIG5hbWUsIGNiKSB7XG4gIHBsYXllclJlZi5uYW1lID0gbmFtZTtcbiAgc29ja2V0LmVtaXQoJ25hbWVDb25maXJtJywgbmFtZSk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLXJvbGU9XCJuYW1lXCJdYCkuZm9yRWFjaCgobywgaSkgPT4ge1xuICAgIG8uaW5uZXJIVE1MID0gbmFtZTtcbiAgfSlcbiAgdG9nZ2xlUG9wb3V0KCduYW1lLWlucHV0LXByb21wdCcsIGZhbHNlKTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH0iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGluaXRVSSwgaGlkZUluaXRpYWxTY3JlZW4gfSBmcm9tICcuL3VpJztcbmltcG9ydCB7IGluaXRTcGxhc2ggfSBmcm9tICcuL2NvcmUvc3BsYXNoJztcbmltcG9ydCB7IGdhbWVCdWlsZGVyIH0gZnJvbSAnLi9jb3JlL2dhbWUnO1xuXG5cbmNvbnN0IHNvY2tldCA9IHJlcXVpcmUoJ3NvY2tldC5pby1jbGllbnQnKSgnaHR0cDovL2xvY2FsaG9zdDozMDAwJyk7XG5cbmluaXRTcGxhc2goKTtcblxubGV0IHVpSW5pdFByb21pc2UgPSBpbml0VUkoc29ja2V0KTtcbmxldCBnYW1lID0gZ2FtZUJ1aWxkZXIoKTtcbmxldCBnYW1lQ29udG9sbGVyO1xuXG51aUluaXRQcm9taXNlLnRoZW4oKCkgPT4ge1xuICBnYW1lLnRyaWdnZXIoKTtcbn0pXG5cbmdhbWUucHJvbWlzZS50aGVuKChpbnN0YW5jZSkgPT4ge1xuICBnYW1lQ29udG9sbGVyID0gaW5zdGFuY2U7XG59KVxuXG5cbnNvY2tldC5vbignZ2FtZUluaXQnLCAoKSA9PiB7XG4gIGdhbWVDb250b2xsZXIuZHJhd0NvdXJ0KCk7XG59KVxuXG5zb2NrZXQub24oJ3Rvb01hbnlQbGF5ZXJzJywgKCkgPT4ge1xuICBhbGVydCgn6Kmy5oi/5Lq65pW45bey5ru/Jyk7XG59KVxuXG5zb2NrZXQub24oJ3Vua25vd25Db2RlJywgKCkgPT4ge1xuICBhbGVydCgn54Sh5pWI55qE5oi/6ZaT56K8Jyk7XG59KVxuXG5zb2NrZXQub24oJ2hvc3RDYW50QmVHdWVzdCcsICgpID0+IHtcbiAgYWxlcnQoJ+aIv+S4u+S4jeiDvemHjeikh+WKoOWFpeiHquW3semWi+WlveeahOaIv+mWk+WWlCcpO1xufSlcblxuXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwic291cmNlUm9vdCI6IiJ9