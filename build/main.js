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
/* harmony import */ var _lib_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/util */ "./core/lib/util.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data */ "./data.js");
/* harmony import */ var _lib_shape__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/shape */ "./core/lib/shape.js");
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
  bgColor: 'rgba(0,0,0,1)',
  courtColor: 'rgba(255,255,255,1)',
  courtAspectRatio: 5 / 3
};
var Engine = /*#__PURE__*/function (_Canvas2DFxBase) {
  _inherits(Engine, _Canvas2DFxBase);

  var _super = _createSuper(Engine);

  function Engine(ele, defaultConfig, config) {
    var _this;

    _classCallCheck(this, Engine);

    _this = _super.call(this, ele, defaultConfig, config);
    _this.pixelBase = 1440;

    _this.init();

    _this.fps = 30, _this.courtOffset = 65;
    _this.gameStatus = 0;
    _this.pause = false; //0: not start yet
    //1: curtain animating
    //2: court animating
    //3: animating players and scroeboard
    //4: game is ready

    return _this;
  }

  _createClass(Engine, [{
    key: "init",
    value: function init() {
      this.curtain = this.genCurtain();
      this.court = this.genCourt();
      this.starSky = new _lib_animation__WEBPACK_IMPORTED_MODULE_1__.StarSky(this.ctx);
      this.players = this.genPlayers();
      this.scoreboards = this.genScoreboards();
      this.ball = this.genBall();
      this.initResized();
    }
  }, {
    key: "initResized",
    value: function initResized() {
      var _this2 = this;

      this.resizedCallback = function () {
        _this2.curtain.drawStatic().then(function () {
          if (_this2.gameStatus === 3) {
            _this2.background('black');
          }

          _this2.starSky.draw();

          _this2.court.drawStatic();
        });
      };
    }
  }, {
    key: "genCurtain",
    value: function genCurtain() {
      var _this3 = this;

      var bandWidth = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 30;
      var curtainCanvasInstance = this.curtainCanvasInstance = this.createVirtualCanvasBaseInstance();
      curtainCanvasInstance.setCanvasSize(this.cvs.width, this.cvs.height);
      var curtainAnimationInstance = new _lib_animation__WEBPACK_IMPORTED_MODULE_1__.Swirl8Bit(curtainCanvasInstance.ctx);
      var curtain = {
        animate: function animate() {
          var initialImage = (0,_lib_util__WEBPACK_IMPORTED_MODULE_2__.getCacheCanvas)(_this3.ctx);
          var promise = curtainAnimationInstance.animate(false, bandWidth, _this3.config.bgColor);
          var interval = setInterval(function () {
            _this3.clear();

            _this3.ctx.drawImage(initialImage, 0, 0, _this3.cvs.width, _this3.cvs.height, 0, 0, _this3.cvs.width, _this3.cvs.height);

            _this3.ctx.drawImage(curtainCanvasInstance.cvs, 0, 0, curtainCanvasInstance.cvs.width, curtainCanvasInstance.cvs.height, 0, 0, _this3.cvs.width, _this3.cvs.height);

            _this3.starSky.draw();
          }, _this3.fps);
          return promise.then(function () {
            return new Promise(function (res) {
              setTimeout(function () {
                clearInterval(interval);
                res();
              }, 500);
            });
          });
        },
        drawStatic: function drawStatic() {
          //
          var trigger;
          var promise = new Promise(function (res, rej) {
            trigger = res;
          });
          var staticImage = curtainCanvasInstance.cvs;

          _this3.ctx.drawImage(staticImage, 0, 0, staticImage.width, staticImage.height, 0, 0, _this3.cvs.width, _this3.cvs.height);

          trigger();
          return promise;
        }
      };
      return curtain;
    }
  }, {
    key: "getAspectRatio",
    value: function getAspectRatio() {
      return this.cvs.width / this.cvs.height;
    }
  }, {
    key: "responsivePainter",
    value: function responsivePainter(targetCvs, initialImage) {
      var offset = this.courtOffset;
      this.ctx.save(); //畫court 會有四種狀況, (canvas長寬>預設長寬比>1) | (1<=canvas長寬<預設長寬比) | (預設長寬比倒數<canvas長寬比<1) ｜ (canvas長寬比<預設長寬比倒數<1)

      if (this.getAspectRatio() >= 1) {
        // 這邊是前兩種狀況
        //先清除一次之後畫initialImage , 再畫court
        this.clear();
        var typeA = (this.cvs.height - 2 * offset) * this.config.courtAspectRatio < this.cvs.width - 2 * offset;
        var offsetV, offsetH, courtHeight, courtWidth;

        if (typeA) {
          // 先算出縮減過offset 的cvs 寬
          offsetV = offset;
          courtHeight = this.cvs.height - 2 * offset;
          courtWidth = courtHeight * this.config.courtAspectRatio;
          offsetH = (this.cvs.width - courtWidth) / 2;
        } else {
          // 非typeA的狀況, 也就是canvas寬高比低於config 設定的比例
          offsetH = offset;
          courtWidth = this.cvs.width - 2 * offset;
          courtHeight = courtWidth / this.config.courtAspectRatio;
          offsetV = (this.cvs.height - courtHeight) / 2;
        }

        if (initialImage) {
          this.ctx.drawImage(initialImage, 0, 0, initialImage.width, initialImage.height, 0, 0, this.cvs.width, this.cvs.height);
        } // 先旋轉畫布, 因為 virtualcanvas 是一張垂直的畫布


        this.ctx.translate(this.cvs.width / 2, this.cvs.height / 2);
        this.ctx.rotate(Math.PI / 2);
        this.ctx.translate(-this.cvs.height / 2, -this.cvs.width / 2); // 因為court 的大小會隨著canvas 的長寬比而變動
        // 這邊先 假設今天是canvas 寬比高超出很多的情況 , 也就是狀況"typeA"

        this.ctx.drawImage(targetCvs, 0, 0, targetCvs.width, targetCvs.height, offsetV, offsetH, courtHeight, courtWidth);
      } else {
        //這邊是後兩種狀況
        // 因為court 的大小會隨著canvas 的長寬比而變動
        // 這邊先 假設今天是canvas 高比寬比超出很多的情況 , 也就是狀況"typeA"
        var _typeA = (this.cvs.width - 2 * offset) * this.config.courtAspectRatio < this.cvs.height - 2 * offset;

        var _offsetV, _offsetH, _courtHeight, _courtWidth;

        if (_typeA) {
          // 先算出縮減過offset 的cvs 寬
          _offsetH = offset;
          _courtWidth = this.cvs.width - 2 * offset;
          _courtHeight = _courtWidth * this.config.courtAspectRatio;
          _offsetV = (this.cvs.height - _courtHeight) / 2;
        } else {
          // 非typeA的狀況, 也就是canvas寬高比低於config 設定的比例
          _offsetV = offset;
          _courtHeight = this.cvs.height - 2 * offset;
          _courtWidth = _courtHeight / this.config.courtAspectRatio;
          _offsetH = (this.cvs.width - _courtWidth) / 2;
        }

        if (initialImage) {
          this.ctx.drawImage(initialImage, 0, 0, initialImage.width, initialImage.height, 0, 0, this.cvs.width, this.cvs.height);
        }

        this.ctx.drawImage(targetCvs, 0, 0, targetCvs.width, targetCvs.height, _offsetH, _offsetV, _courtWidth, _courtHeight);
      }

      this.ctx.restore();
    }
  }, {
    key: "genCourt",
    value: function genCourt() {
      var _this4 = this;

      var strokeWidth = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
      var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 65;
      var courtCanvasInstance = this.courtCanvasInstance = this.createVirtualCanvasBaseInstance();
      var courtCanvasWidth = this.pixelBase / this.config.courtAspectRatio;
      var courtCanvasHeight = this.pixelBase;
      courtCanvasInstance.setCanvasSize(courtCanvasWidth, courtCanvasHeight);
      var vertices = [{
        x: 0,
        y: 0
      }, {
        x: courtCanvasInstance.cvs.width,
        y: 0
      }, {
        x: courtCanvasInstance.cvs.width,
        y: courtCanvasInstance.cvs.height
      }, {
        x: 0,
        y: courtCanvasInstance.cvs.height
      }, {
        x: 0,
        y: 0
      }];
      var strokeAnimationInstance = new _lib_animation__WEBPACK_IMPORTED_MODULE_1__.StrokeAnimation(courtCanvasInstance.ctx, vertices);
      var court = {
        animate: function animate() {
          court.initialImage = (0,_lib_util__WEBPACK_IMPORTED_MODULE_2__.getCacheCanvas)(_this4.ctx);
          var promise = strokeAnimationInstance.animate(strokeWidth, _this4.config.courtColor).then(function () {
            var vertices = [{
              x: 0,
              y: courtCanvasInstance.cvs.height / 2
            }, {
              x: courtCanvasInstance.cvs.width,
              y: courtCanvasInstance.cvs.height / 2
            }];
            return new _lib_animation__WEBPACK_IMPORTED_MODULE_1__.StrokeAnimation(courtCanvasInstance.ctx, vertices).animate(strokeWidth, _this4.config.courtColor, false, [10, 30], 'transparent');
          });
          var interval = setInterval(function () {
            _this4.responsivePainter(courtCanvasInstance.cvs, court.initialImage);
          }, _this4.fps);
          return promise.then(function () {
            return new Promise(function (res) {
              setTimeout(function () {
                clearInterval(interval);
                res();
              }, 500);
            });
          });
        },
        drawStatic: function drawStatic() {
          return new Promise(function (res, rej) {
            _this4.responsivePainter(courtCanvasInstance.cvs, court.initialImage);

            res();
          });
        }
      };
      return court;
    }
  }, {
    key: "genPlayers",
    value: function genPlayers() {
      var _this5 = this;

      var widthPram = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
      var gapRatio = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.05;
      var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'white';
      var thickness = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 20;
      var playersCanvasInstance = this.playersCanvasInstance = this.createVirtualCanvasBaseInstance();
      playersCanvasInstance.setCanvasSize(this.courtCanvasInstance.cvs.width, this.courtCanvasInstance.cvs.height);

      for (var i = 0; i < _data__WEBPACK_IMPORTED_MODULE_3__.playersData.length; i++) {
        _data__WEBPACK_IMPORTED_MODULE_3__.playersData[i].width = this.pixelBase / this.config.courtAspectRatio / widthPram;
        _data__WEBPACK_IMPORTED_MODULE_3__.playersData[i].position.x = this.courtCanvasInstance.cvs.width / 2;

        if (i === 0) {
          _data__WEBPACK_IMPORTED_MODULE_3__.playersData[i].position.y = this.courtCanvasInstance.cvs.height * (1 - gapRatio);
        } else if (i === 1) {
          _data__WEBPACK_IMPORTED_MODULE_3__.playersData[i].position.y = this.courtCanvasInstance.cvs.height * gapRatio;
        }
      }

      var players = {
        ready: function ready() {
          var trigger;
          var promise = new Promise(function (res) {
            trigger = res;
          });
          var opacity = 0;
          var initialImage = (0,_lib_util__WEBPACK_IMPORTED_MODULE_2__.getCacheCanvas)(_this5.ctx);
          var interval = setInterval(function () {
            if (opacity >= 1) {
              clearInterval(interval);
              trigger();
            }

            for (var _i = 0; _i < _data__WEBPACK_IMPORTED_MODULE_3__.playersData.length; _i++) {
              (0,_lib_shape__WEBPACK_IMPORTED_MODULE_4__.drawRect)(playersCanvasInstance.ctx, _data__WEBPACK_IMPORTED_MODULE_3__.playersData[_i].position.x, _data__WEBPACK_IMPORTED_MODULE_3__.playersData[_i].position.y, _data__WEBPACK_IMPORTED_MODULE_3__.playersData[_i].width, thickness, color, opacity);
            }

            _this5.responsivePainter(playersCanvasInstance.cvs, initialImage);

            opacity += 0.01;
          }, _this5.fps);
          return promise;
        },
        loopUpdate: function loopUpdate() {
          var initialImage = (0,_lib_util__WEBPACK_IMPORTED_MODULE_2__.getCacheCanvas)(_this5.ctx);
          var interval = setInterval(function () {
            for (var _i2 = 0; _i2 < _data__WEBPACK_IMPORTED_MODULE_3__.playersData.length; _i2++) {
              playersCanvasInstance.clear();
              (0,_lib_shape__WEBPACK_IMPORTED_MODULE_4__.drawRect)(playersCanvasInstance.ctx, _data__WEBPACK_IMPORTED_MODULE_3__.playersData[_i2].position.x, _data__WEBPACK_IMPORTED_MODULE_3__.playersData[_i2].position.y, _data__WEBPACK_IMPORTED_MODULE_3__.playersData[_i2].width, thickness, color, 1);
            }

            _this5.responsivePainter(playersCanvasInstance.cvs, initialImage);
          }, _this5.fps);
        }
      };
      return players;
    }
  }, {
    key: "genScoreboards",
    value: function genScoreboards() {
      var scoreboardsCanvasInstance = this.scoreboardsCanvasInstance = this.createVirtualCanvasBaseInstance();
    }
  }, {
    key: "genBall",
    value: function genBall() {
      var ballCanvasInstance = this.ballCanvasInstance = this.createVirtualCanvasBaseInstance();
      return _data__WEBPACK_IMPORTED_MODULE_3__.ball;
    }
  }, {
    key: "drawGame",
    value: function drawGame() {
      var _this6 = this;

      this.gameStatus = 1;
      var promise = this.curtain.animate();
      promise.then(function () {
        _this6.gameStatus = 2;
        return _this6.court.animate();
      }).then(function () {
        _this6.gameStatus = 3;

        var playersReady = _this6.players.ready();

        var allReadyPromise = Promise.all([playersReady]);
        return allReadyPromise;
      }).then(function () {
        _this6.gameStatus = 4;
        var gameReadyPromise = new Promise(function (res, rej) {
          _this6.initGameDataUpdateInterval();

          res();
        });
        return gameReadyPromise;
      });
      return promise;
    }
  }, {
    key: "initGameDataUpdateInterval",
    value: function initGameDataUpdateInterval() {
      this.players.loopUpdate();
    }
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
/* harmony export */   "Swirl8Bit": function() { return /* binding */ Swirl8Bit; },
/* harmony export */   "StrokeAnimation": function() { return /* binding */ StrokeAnimation; },
/* harmony export */   "StarSky": function() { return /* binding */ StarSky; }
/* harmony export */ });
/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./function */ "./core/lib/function.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./core/lib/util.js");
/* harmony import */ var _shape__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shape */ "./core/lib/shape.js");
/* harmony import */ var path2d_polyfill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! path2d-polyfill */ "./node_modules/path2d-polyfill/dist/index.esm.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var Swirl8Bit = /*#__PURE__*/function () {
  function Swirl8Bit(ctx) {
    _classCallCheck(this, Swirl8Bit);

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
    this.cvs = ctx.canvas;
    this.animationEndTrigger;
    this.order = 0;
    this.path = new Path2D();
    this.initialImage = (0,_util__WEBPACK_IMPORTED_MODULE_1__.getCacheCanvas)(this.ctx);
    this.bandWidthStack = 0;
  }

  _createClass(Swirl8Bit, [{
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
      var animationPromise = new Promise(function (res, rej) {
        _this.animationEndTrigger = res;
      });
      this.drawSwirl(clockwise, bandWidth, color);
      return animationPromise;
    }
  }, {
    key: "drawSwirl",
    value: function drawSwirl(clockwise, bandWidth, color) {
      var _this2 = this;

      var interval = setInterval(function () {
        _this2.path.addPath(_this2.draWRandomAngledBandPath(bandWidth, _this2.cvs.width - 2 * _this2.bandWidthStack, _this2.cvs.height - 2 * _this2.bandWidthStack, _this2.getStartLocation(clockwise, _this2.order, _this2.cvs.width - 2 * _this2.bandWidthStack, _this2.cvs.height - 2 * _this2.bandWidthStack), color, clockwise));

        _this2.ctx.fill(_this2.path);

        if (_this2.cvs.width - 2 * _this2.bandWidthStack > 0 && _this2.cvs.height - 2 * _this2.bandWidthStack > 0) {
          if (_this2.order < 3) {
            _this2.order++;
          } else {
            _this2.order = 0;
            _this2.bandWidthStack += bandWidth;
          }
        } else {
          clearInterval(interval);

          _this2.animationEndTrigger();
        }
      }, 30);
    }
  }, {
    key: "draWRandomAngledBandPath",
    value: function draWRandomAngledBandPath(bandWidth, width, height, point, color, clockwise) {
      var path = new Path2D();

      if (point.name === 'tl') {
        this.drawAngledBandFromTL(path, bandWidth, width, height, point, clockwise);
      } else if (point.name === 'bl') {
        this.drawAngledBandFromBL(path, bandWidth, width, height, point, clockwise);
      } else if (point.name === 'br') {
        this.drawAngledBandFromBR(path, bandWidth, width, height, point, clockwise);
      } else if (point.name === 'tr') {
        this.drawAngledBandFromTR(path, bandWidth, width, height, point, clockwise);
      }

      return path;
    }
  }, {
    key: "drawAngledBandFromTL",
    value: function drawAngledBandFromTL(path, bandWidth, width, height, point, clockwise) {
      path.moveTo(point.x, point.y);

      if (clockwise) {
        var randomHeight = (0,_function__WEBPACK_IMPORTED_MODULE_0__.randomWithinRange)(0.5 * height, 0.9 * height);
        path.lineTo(point.x + width, point.y);
        path.lineTo(point.x + width, point.y + randomHeight);
        path.lineTo(point.x + width - bandWidth, point.y + randomHeight);
        path.lineTo(point.x + width - bandWidth, point.y + bandWidth);
        path.lineTo(point.x, point.y + bandWidth);
      } else {
        var randomWidth = (0,_function__WEBPACK_IMPORTED_MODULE_0__.randomWithinRange)(0.5 * width, 0.9 * width);
        path.lineTo(point.x + bandWidth, point.y);
        path.lineTo(point.x + bandWidth, point.y + height - bandWidth);
        path.lineTo(point.x + randomWidth, point.y + height - bandWidth);
        path.lineTo(point.x + randomWidth, point.y + height);
        path.lineTo(point.x, point.y + height);
      }
    }
  }, {
    key: "drawAngledBandFromBL",
    value: function drawAngledBandFromBL(path, bandWidth, width, height, point, clockwise) {
      path.moveTo(point.x, point.y);

      if (clockwise) {
        var randomWidth = (0,_function__WEBPACK_IMPORTED_MODULE_0__.randomWithinRange)(0.5 * width, 0.9 * width);
        path.lineTo(point.x + bandWidth, point.y);
        path.lineTo(point.x + bandWidth, point.y - height + bandWidth);
        path.lineTo(point.x + randomWidth, point.y - height + bandWidth);
        path.lineTo(point.x + randomWidth, point.y - height);
        path.lineTo(point.x, point.y - height);
      } else {
        var randomHeight = (0,_function__WEBPACK_IMPORTED_MODULE_0__.randomWithinRange)(0.5 * height, 0.9 * height);
        path.lineTo(point.x, point.y - bandWidth);
        path.lineTo(point.x + width - bandWidth, point.y - bandWidth);
        path.lineTo(point.x + width - bandWidth, point.y - randomHeight);
        path.lineTo(point.x + width, point.y - randomHeight);
        path.lineTo(point.x + width, point.y);
      }
    }
  }, {
    key: "drawAngledBandFromBR",
    value: function drawAngledBandFromBR(path, bandWidth, width, height, point, clockwise) {
      path.moveTo(point.x, point.y);

      if (clockwise) {
        var randomHeight = (0,_function__WEBPACK_IMPORTED_MODULE_0__.randomWithinRange)(0.5 * height, 0.9 * height);
        path.lineTo(point.x, point.y - bandWidth);
        path.lineTo(point.x - width + bandWidth, point.y - bandWidth);
        path.lineTo(point.x - width + bandWidth, point.y - randomHeight);
        path.lineTo(point.x - width, point.y - randomHeight);
        path.lineTo(point.x - width, point.y);
      } else {
        var randomWidth = (0,_function__WEBPACK_IMPORTED_MODULE_0__.randomWithinRange)(0.5 * width, 0.9 * width);
        path.lineTo(point.x - bandWidth, point.y);
        path.lineTo(point.x - bandWidth, point.y - height + bandWidth);
        path.lineTo(point.x - randomWidth, point.y - height + bandWidth);
        path.lineTo(point.x - randomWidth, point.y - height);
        path.lineTo(point.x, point.y - height);
      }
    }
  }, {
    key: "drawAngledBandFromTR",
    value: function drawAngledBandFromTR(path, bandWidth, width, height, point, clockwise) {
      path.moveTo(point.x, point.y);

      if (clockwise) {
        var randomWidth = (0,_function__WEBPACK_IMPORTED_MODULE_0__.randomWithinRange)(0.5 * width, 0.9 * width);
        path.lineTo(point.x - bandWidth, point.y);
        path.lineTo(point.x - bandWidth, point.y + height - bandWidth);
        path.lineTo(point.x - randomWidth, point.y + height - bandWidth);
        path.lineTo(point.x - randomWidth, point.y + height);
        path.lineTo(point.x, point.y + height);
      } else {
        var randomHeight = (0,_function__WEBPACK_IMPORTED_MODULE_0__.randomWithinRange)(0.5 * height, 0.9 * height);
        path.lineTo(point.x, point.y + bandWidth);
        path.lineTo(point.x - width + bandWidth, point.y + bandWidth);
        path.lineTo(point.x - width + bandWidth, point.y + randomHeight);
        path.lineTo(point.x - width, point.y + randomHeight);
        path.lineTo(point.x - width, point.y);
      }
    }
  }]);

  return Swirl8Bit;
}();
var StrokeAnimation = /*#__PURE__*/function () {
  function StrokeAnimation(ctx, vertices) {
    _classCallCheck(this, StrokeAnimation);

    this.ctx = ctx;
    this.waypoints = (0,_function__WEBPACK_IMPORTED_MODULE_0__.calcWaypoints)(vertices);
  }

  _createClass(StrokeAnimation, [{
    key: "animate",
    value: function animate() {
      var _this3 = this;

      var bandWidth = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 20;
      var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'rgba(255,255,255,1)';
      var flicker = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var dash = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
      var glowing = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'white';
      var glowingSize = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 40;
      var animationPromise = new Promise(function (res, rej) {
        _this3.animationEndTrigger = res;

        _this3.loopingDrawStroke(bandWidth, color, flicker, dash, glowing, glowingSize);
      });
      return animationPromise;
    }
  }, {
    key: "loopingDrawStroke",
    value: function loopingDrawStroke(bandWidth, color, flicker, dash, glowing, glowingSize) {
      var _this4 = this;

      var fps = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 60;
      var counter = 0;
      var $this = this;
      this.ctx.save();
      this.ctx.lineCap = 'square';

      if (dash.length > 0) {
        this.ctx.setLineDash(dash);
      }

      this.ctx.strokeStyle = color;
      this.ctx.lineWidth = bandWidth;
      this.ctx.shadowColor = glowing;
      this.ctx.shadowBlur = glowingSize;
      var flickerRange = 0;
      this.ctx.beginPath();
      var interval = setInterval(function () {
        if (counter < $this.waypoints.length - 1) {
          $this.ctx.moveTo($this.waypoints[counter].x, $this.waypoints[counter].y);
          $this.ctx.lineTo($this.waypoints[counter + 1].x, $this.waypoints[counter + 1].y);

          if (flicker) {
            _this4.ctx.clearRect(0, 0, _this4.ctx.canvas.width, _this4.ctx.canvas.height);

            _this4.ctx.globalAlpha = (0,_function__WEBPACK_IMPORTED_MODULE_0__.randomWithinRange)(flickerRange, 1);
            flickerRange += fps / 10000;
          }

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

  return StrokeAnimation;
}();
var StarSky = /*#__PURE__*/function () {
  function StarSky(ctx) {
    _classCallCheck(this, StarSky);

    this.ctx = ctx;
    this.cvs = ctx.canvas;
    this.stars = [];
    this.init();
  }

  _createClass(StarSky, [{
    key: "init",
    value: function init() {
      this.genStars();
    }
  }, {
    key: "genStars",
    value: function genStars() {
      var number = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;

      for (var i = 0; i < number; i++) {
        var star = {
          x: (0,_function__WEBPACK_IMPORTED_MODULE_0__.randomWithinRange)(0, this.cvs.width),
          y: (0,_function__WEBPACK_IMPORTED_MODULE_0__.randomWithinRange)(0, this.cvs.height),
          color: "rgba(255,255,255,".concat((0,_function__WEBPACK_IMPORTED_MODULE_0__.randomWithinRange)(0.25, 1), ")"),
          size: (0,_function__WEBPACK_IMPORTED_MODULE_0__.randomWithinRange)(2, 5)
        };
        this.stars.push(star);
      }
    }
  }, {
    key: "draw",
    value: function draw() {
      for (var i = 0; i < this.stars.length; i++) {
        (0,_shape__WEBPACK_IMPORTED_MODULE_2__.drawCircle)(this.ctx, this.stars[i].x, this.stars[i].y, this.stars[i].size, this.stars[i].color);
      }
    }
  }]);

  return StarSky;
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
  }, {
    key: "createVirtualCanvasBaseInstance",
    value: function createVirtualCanvasBaseInstance() {
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
/* harmony export */   "drawRect": function() { return /* binding */ drawRect; },
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
function drawRect(ctx, x, y, width, height, color, alpha) {
  ctx.save();
  ctx.fillStyle = color;
  ctx.globalAlpha = alpha;
  ctx.fillRect(x - width / 2, y - height / 2, width, height);
  ctx.restore();
}
function drawCircle(ctx, x, y, width, color) {
  var alpha = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;
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

/***/ "./core/lib/util.js":
/*!**************************!*\
  !*** ./core/lib/util.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getScreenshotImage": function() { return /* binding */ getScreenshotImage; },
/* harmony export */   "getCacheCanvas": function() { return /* binding */ getCacheCanvas; }
/* harmony export */ });
function getScreenshotImage(targetCvs) {
  var url = targetCvs.toDataURL();
  var image = new Image(targetCvs.width, targetCvs.height);
  image.src = url;
  return image;
}
function getCacheCanvas(targetCtx) {
  var cacheCvs = document.createElement('canvas');
  var cacheCtx = cacheCvs.getContext('2d');
  var sourceWidth = targetCtx.canvas.width;
  var sourceHeight = targetCtx.canvas.height;
  cacheCvs.width = sourceWidth;
  cacheCvs.height = sourceHeight;
  var cacheData = targetCtx.getImageData(0, 0, sourceWidth, sourceHeight);
  cacheCtx.putImageData(cacheData, 0, 0);
  return cacheCvs;
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
    _this.switchStatus = false;

    _this.init();

    return _this;
  }

  _createClass(BasicRefelection, [{
    key: "init",
    value: function init() {
      this.switchStatus = true;
      this.initBall();
      this.animateBall();
    }
  }, {
    key: "switcher",
    value: function switcher(status) {
      this.switchStatus = status;
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
      if (this.switchStatus == false) return;
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
    _this2.switchStatus = false;

    _this2.init();

    return _this2;
  }

  _createClass(SpotsBumping, [{
    key: "init",
    value: function init() {
      this.switchStatus = true;
      this.animate();
    }
  }, {
    key: "switcher",
    value: function switcher(status) {
      this.switchStatus = status;
    }
  }, {
    key: "animate",
    value: function animate() {
      var _this3 = this;

      var $this = this;
      this.interval = setInterval(function () {
        if (_this3.switchStatus) {
          $this.clear();
          $this.drawSpots();
        }
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
  var switcher;
  var spotAnimation = (0,_lib_base__WEBPACK_IMPORTED_MODULE_0__.boot)(SpotsBumping, SPOTS_ANIMATION_DEFAULT, {}, virtualCanvas, initialScreen);
  var splashPromise = spotAnimation.promise.then(function (spotsBumpingInstance) {
    var bootController = (0,_lib_base__WEBPACK_IMPORTED_MODULE_0__.boot)(BasicRefelection, BALL_ANIMATION_DEFAULT, {
      afterImage: true,
      radius: 40,
      color: 'rgba(0, 0, 0,0.75)',
      speedX: 1000,
      bottomLayer: spotsBumpingInstance.cvs,
      speedY: 1000,
      accelerationX: 0,
      accelerationY: 980,
      frictionX: 1
    }, initialScreen);
    bootController.trigger();
    return bootController.promise.then(function (basicRefelectionInstance) {
      return new Promise(function (res) {
        switcher = function switcher(status) {
          spotsBumpingInstance.switcher(status);
          basicRefelectionInstance.switcher(status);
        };

        res(switcher);
      });
    });
  });
  spotAnimation.trigger();
  return splashPromise;
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
/* harmony export */   "playersData": function() { return /* binding */ playersData; },
/* harmony export */   "ball": function() { return /* binding */ ball; },
/* harmony export */   "playerRef": function() { return /* binding */ playerRef; }
/* harmony export */ });
// export const scoreboards = [
//   {
//     position: {
//       x: 0,
//       y: 0
//     },
//     show: () => { },
//     update: () => { }
//   },
//   {
//     position: {
//       x: 0,
//       y: 0
//     },
//     show: () => { },
//     update: () => { }
//   }
// ]
var playersData = [{
  name: '???',
  score: 0,
  width: 0,
  position: {
    x: 0,
    y: 0
  }
}, {
  name: '???',
  score: 0,
  width: 0,
  position: {
    x: 0,
    y: 0
  }
}];
var ball = {
  position: {
    x: 0,
    y: 0
  },
  speed: {
    x: 0,
    y: 0
  },
  size: 0,
  color: null
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

var splashSwitcher;
var splashPromise = (0,_core_splash__WEBPACK_IMPORTED_MODULE_1__.initSplash)();
splashPromise.then(function (switcher) {
  splashSwitcher = switcher;
});
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
    var gameReadyPromise = gameContoller.drawGame();
    gameReadyPromise.then(function () {
      splashSwitcher(false);
    });
  };
});
socket.on('gameInit', function () {
  (0,_ui__WEBPACK_IMPORTED_MODULE_0__.startCounting)(function () {
    gameContoller.cvs.classList.add('promoted');
    var gameReadyPromise = gameContoller.drawGame();
    gameReadyPromise.then(function () {
      splashSwitcher(false);
    });
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
  alert('Room Is Full Now');
});
socket.on('unknownCode', function () {
  alert('Incorrect Room Code');
});
socket.on('hostCantBeGuest', function () {
  alert("You Can't Join The Game You Are Hosting");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vY29yZS9nYW1lLmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9jb3JlL2xpYi9hbmltYXRpb24uanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL2NvcmUvbGliL2Jhc2UuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL2NvcmUvbGliL2RvbS5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vY29yZS9saWIvZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL2NvcmUvbGliL3NoYXBlLmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9jb3JlL2xpYi91dGlsLmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9jb3JlL3NwbGFzaC5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vZGF0YS5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL2JhY2tvMi9pbmRleC5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL2Jhc2U2NC1hcnJheWJ1ZmZlci9saWIvYmFzZTY0LWFycmF5YnVmZmVyLmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvY29tcG9uZW50LWVtaXR0ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9kZWJ1Zy9ub2RlX21vZHVsZXMvbXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9kZWJ1Zy9zcmMvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL2RlYnVnL3NyYy9jb21tb24uanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2xpYi9nbG9iYWxUaGlzLmJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvbGliL3NvY2tldC5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvbGliL3RyYW5zcG9ydC5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvbGliL3RyYW5zcG9ydHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2xpYi90cmFuc3BvcnRzL3BvbGxpbmctanNvbnAuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2xpYi90cmFuc3BvcnRzL3BvbGxpbmcteGhyLmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9saWIvdHJhbnNwb3J0cy9wb2xsaW5nLmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9saWIvdHJhbnNwb3J0cy93ZWJzb2NrZXQtY29uc3RydWN0b3IuYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvbGliL3RyYW5zcG9ydHMvd2Vic29ja2V0LmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9saWIvdXRpbC5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvbGliL3htbGh0dHByZXF1ZXN0LmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLXBhcnNlci9saWIvY29tbW9ucy5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1wYXJzZXIvbGliL2RlY29kZVBhY2tldC5icm93c2VyLmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLXBhcnNlci9saWIvZW5jb2RlUGFja2V0LmJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tcGFyc2VyL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL2hhcy1jb3JzL2luZGV4LmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvbWVyc2VubmUtdHdpc3Rlci9zcmMvbWVyc2VubmUtdHdpc3Rlci5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL3BhcnNlcXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9wYXJzZXVyaS9pbmRleC5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4uL3NyYy9wYXJzZS1wYXRoLmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi4vc3JjL3BhdGgyZC1wb2x5ZmlsbC5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1jbGllbnQvYnVpbGQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tY2xpZW50L2J1aWxkL21hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tY2xpZW50L2J1aWxkL29uLmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLWNsaWVudC9idWlsZC9zb2NrZXQuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tY2xpZW50L2J1aWxkL3R5cGVkLWV2ZW50cy5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1jbGllbnQvYnVpbGQvdXJsLmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLXBhcnNlci9kaXN0L2JpbmFyeS5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1wYXJzZXIvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1wYXJzZXIvZGlzdC9pcy1iaW5hcnkuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy95ZWFzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vdWkuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9pbmRleC5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vc3JjL3Njc3MvbWFpbi5zY3NzIl0sIm5hbWVzIjpbIkRFRkFVTFQiLCJiZ0NvbG9yIiwiY291cnRDb2xvciIsImNvdXJ0QXNwZWN0UmF0aW8iLCJFbmdpbmUiLCJlbGUiLCJkZWZhdWx0Q29uZmlnIiwiY29uZmlnIiwicGl4ZWxCYXNlIiwiaW5pdCIsImZwcyIsImNvdXJ0T2Zmc2V0IiwiZ2FtZVN0YXR1cyIsInBhdXNlIiwiY3VydGFpbiIsImdlbkN1cnRhaW4iLCJjb3VydCIsImdlbkNvdXJ0Iiwic3RhclNreSIsIlN0YXJTa3kiLCJjdHgiLCJwbGF5ZXJzIiwiZ2VuUGxheWVycyIsInNjb3JlYm9hcmRzIiwiZ2VuU2NvcmVib2FyZHMiLCJiYWxsIiwiZ2VuQmFsbCIsImluaXRSZXNpemVkIiwicmVzaXplZENhbGxiYWNrIiwiZHJhd1N0YXRpYyIsInRoZW4iLCJiYWNrZ3JvdW5kIiwiZHJhdyIsImJhbmRXaWR0aCIsImN1cnRhaW5DYW52YXNJbnN0YW5jZSIsImNyZWF0ZVZpcnR1YWxDYW52YXNCYXNlSW5zdGFuY2UiLCJzZXRDYW52YXNTaXplIiwiY3ZzIiwid2lkdGgiLCJoZWlnaHQiLCJjdXJ0YWluQW5pbWF0aW9uSW5zdGFuY2UiLCJTd2lybDhCaXQiLCJhbmltYXRlIiwiaW5pdGlhbEltYWdlIiwiZ2V0Q2FjaGVDYW52YXMiLCJwcm9taXNlIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsZWFyIiwiZHJhd0ltYWdlIiwiUHJvbWlzZSIsInJlcyIsInNldFRpbWVvdXQiLCJjbGVhckludGVydmFsIiwidHJpZ2dlciIsInJlaiIsInN0YXRpY0ltYWdlIiwidGFyZ2V0Q3ZzIiwib2Zmc2V0Iiwic2F2ZSIsImdldEFzcGVjdFJhdGlvIiwidHlwZUEiLCJvZmZzZXRWIiwib2Zmc2V0SCIsImNvdXJ0SGVpZ2h0IiwiY291cnRXaWR0aCIsInRyYW5zbGF0ZSIsInJvdGF0ZSIsIk1hdGgiLCJQSSIsInJlc3RvcmUiLCJzdHJva2VXaWR0aCIsImNvdXJ0Q2FudmFzSW5zdGFuY2UiLCJjb3VydENhbnZhc1dpZHRoIiwiY291cnRDYW52YXNIZWlnaHQiLCJ2ZXJ0aWNlcyIsIngiLCJ5Iiwic3Ryb2tlQW5pbWF0aW9uSW5zdGFuY2UiLCJTdHJva2VBbmltYXRpb24iLCJyZXNwb25zaXZlUGFpbnRlciIsIndpZHRoUHJhbSIsImdhcFJhdGlvIiwiY29sb3IiLCJ0aGlja25lc3MiLCJwbGF5ZXJzQ2FudmFzSW5zdGFuY2UiLCJpIiwicGxheWVyc0RhdGEiLCJwb3NpdGlvbiIsInJlYWR5Iiwib3BhY2l0eSIsImRyYXdSZWN0IiwibG9vcFVwZGF0ZSIsInNjb3JlYm9hcmRzQ2FudmFzSW5zdGFuY2UiLCJiYWxsQ2FudmFzSW5zdGFuY2UiLCJwbGF5ZXJzUmVhZHkiLCJhbGxSZWFkeVByb21pc2UiLCJhbGwiLCJnYW1lUmVhZHlQcm9taXNlIiwiaW5pdEdhbWVEYXRhVXBkYXRlSW50ZXJ2YWwiLCJDYW52YXMyREZ4QmFzZSIsImdhbWVCdWlsZGVyIiwiZ2FtZSIsImJvb3QiLCJkb2N1bWVudCIsImJvZHkiLCJjb3VudGVyQ2xvY2t3aXNlQXJyIiwibmFtZSIsImNsb2Nrd2lzZUFyciIsImNhbnZhcyIsImFuaW1hdGlvbkVuZFRyaWdnZXIiLCJvcmRlciIsInBhdGgiLCJQYXRoMkQiLCJiYW5kV2lkdGhTdGFjayIsImNsb2Nrd2lzZSIsInRvdGFsV2lkdGgiLCJ0b3RhbEhlaWdodCIsImRpcmVjdGlvbkFyciIsImxvY2F0aW9uIiwiYW5pbWF0aW9uUHJvbWlzZSIsImRyYXdTd2lybCIsImFkZFBhdGgiLCJkcmFXUmFuZG9tQW5nbGVkQmFuZFBhdGgiLCJnZXRTdGFydExvY2F0aW9uIiwiZmlsbCIsInBvaW50IiwiZHJhd0FuZ2xlZEJhbmRGcm9tVEwiLCJkcmF3QW5nbGVkQmFuZEZyb21CTCIsImRyYXdBbmdsZWRCYW5kRnJvbUJSIiwiZHJhd0FuZ2xlZEJhbmRGcm9tVFIiLCJtb3ZlVG8iLCJyYW5kb21IZWlnaHQiLCJyYW5kb21XaXRoaW5SYW5nZSIsImxpbmVUbyIsInJhbmRvbVdpZHRoIiwid2F5cG9pbnRzIiwiY2FsY1dheXBvaW50cyIsImZsaWNrZXIiLCJkYXNoIiwiZ2xvd2luZyIsImdsb3dpbmdTaXplIiwibG9vcGluZ0RyYXdTdHJva2UiLCJjb3VudGVyIiwiJHRoaXMiLCJsaW5lQ2FwIiwibGVuZ3RoIiwic2V0TGluZURhc2giLCJzdHJva2VTdHlsZSIsImxpbmVXaWR0aCIsInNoYWRvd0NvbG9yIiwic2hhZG93Qmx1ciIsImZsaWNrZXJSYW5nZSIsImJlZ2luUGF0aCIsImNsZWFyUmVjdCIsImdsb2JhbEFscGhhIiwic3Ryb2tlIiwiY2xvc2VQYXRoIiwic3RhcnMiLCJnZW5TdGFycyIsIm51bWJlciIsInN0YXIiLCJzaXplIiwicHVzaCIsImRyYXdDaXJjbGUiLCJ2aXJ0dWFsUGFyZW50IiwiaXMiLCJPYmplY3QiLCJhc3NpZ24iLCJmcmFtZUNvdW50IiwibW91c2UiLCJmcmFtZUlzUGF1c2VkIiwiaXNDbGljayIsImNhbnZhc1NpemVmaXhlZCIsInByZXZpb3VzRnJhbWVUaW1lIiwiRGF0ZSIsImdldFRpbWUiLCJpc1Jlc2l6aW5nIiwiaXNSZXNpemluZ0NhbGxiYWNrIiwiaW5pdEJhc2UiLCJ0YWdOYW1lIiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZENoaWxkIiwiZ2V0Q29udGV4dCIsInRyaWdnZXJSZXNpemluZ01lY2hhbmlzbSIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJkZWJvdW5jZSIsInZpc2liaWxpdHlTdGF0ZSIsImFkZEV2ZW50SGFuZGxlciIsInJlZnJlc2hCYXNlRnJhbWVDb3VudGVyIiwidGhpc0ZyYW1lVGltZSIsInRpbWVFbGFwc2VkIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY29udGFpbnMiLCJjYWNoZUN2cyIsImNhY2hlQ3ZzQ29udGV4dCIsImNhbnZhc1dpZHRoIiwiY2FudmFzSGVpZ2h0IiwidmlydHVhbFBhcmVudFZhbGlkYXRpb24iLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJwYXJlbnRFbGVtZW50IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJlIiwicG9zIiwicG9pbnRlckV2ZW50VG9YWSIsInZjdnMiLCJ2Y3ZzSW5zdGFuY2UiLCJjdG9yIiwidGFyZ2V0RWxlIiwiZ2V0RWxlbWVudEJ5SWQiLCJib290UHJvbWlzZSIsImluc3RhbmNlIiwiY29udHJvbGxlciIsIiQiLCJzZWxlY3RvciIsInF1ZXJ5U2VsZWN0b3IiLCJ0b2dnbGUiLCJzdGF0dXMiLCJzdHlsZVN0ciIsInNldEF0dHJpYnV0ZSIsInRvZ2dsZUNsYXNzIiwiY2xhc3NuYW1lIiwiYWN0aW9uIiwiY2xhc3NMaXN0IiwiZW1pdCIsImV2ZW50TmFtZSIsInNvbWVFdmVudCIsImNyZWF0ZUV2ZW50IiwiaW5pdEV2ZW50IiwiZGlzcGF0Y2hFdmVudCIsInBhcmVudHMiLCJub2RlIiwiY3VycmVudCIsImxpc3QiLCJwYXJlbnROb2RlIiwiZG9jdW1lbnRFbGVtZW50IiwiZmlsdGVyIiwibyIsIm1hdGNoZXMiLCJmYWRlT3V0IiwiZHVyYXRpb24iLCJjYiIsInN0eWxlIiwiZGlzcGxheSIsImZhZGVUYXJnZXQiLCJmYWRlRWZmZWN0IiwiTWVyc2VubmVUd2lzdGVyIiwicmVxdWlyZSIsIk1UIiwiZnVuYyIsImRlbGF5IiwidGltZXIiLCJjb250ZXh0IiwiYXJncyIsImFyZ3VtZW50cyIsImNsZWFyVGltZW91dCIsImFwcGx5IiwiYXJyIiwiYSIsIkFycmF5IiwiaXNBcnJheSIsIm9iaiIsInByb3RvdHlwZSIsInRvU3RyaW5nIiwiY2FsbCIsImluZGV4T2YiLCJwdGgiLCJoYXNPd25Qcm9wZXJ0eSIsInN2ZyIsIlNWR0VsZW1lbnQiLCJpbnAiLCJIVE1MSW5wdXRFbGVtZW50IiwiZG9tIiwibm9kZVR5cGUiLCJzdHIiLCJmbmMiLCJ1bmQiLCJuaWwiLCJoZXgiLCJ0ZXN0IiwicmdiYSIsInJnYiIsImhzbCIsImNvbCIsImtleSIsImRlZmF1bHRJbnN0YW5jZVNldHRpbmdzIiwiZGVmYXVsdFR3ZWVuU2V0dGluZ3MiLCJtaW4iLCJtYXgiLCJzZWVkIiwicmFuZG9tIiwiZ2V0RGlzdGFuY2UiLCJ4MCIsInkwIiwieDEiLCJ5MSIsInNxcnQiLCJkZWdyZWVUb1JhZGlhbiIsImRlZ3JlZSIsIm91dCIsInR5cGUiLCJ0b3VjaCIsIm9yaWdpbmFsRXZlbnQiLCJ0b3VjaGVzIiwiY2hhbmdlZFRvdWNoZXMiLCJwYWdlWCIsInBhZ2VZIiwidGFyZ2V0SGFzUHJvcCIsInRhcmdldCIsInByb3AiLCJpc0VtcHR5IiwidmFsIiwiaXNOYU4iLCJyZ2JUb1JnYmEiLCJyZ2JWYWx1ZSIsImV4ZWMiLCJoZXhUb1JnYmEiLCJoZXhWYWx1ZSIsInJneCIsInJlcGxhY2UiLCJtIiwiciIsImciLCJiIiwicGFyc2VJbnQiLCJoc2xUb1JnYmEiLCJoc2xWYWx1ZSIsImgiLCJzIiwibCIsImh1ZTJyZ2IiLCJwIiwicSIsInQiLCJjb2xvclRvUmdiYSIsImdldENoYW5uZWxWYWx1ZXNGcm9tUmdiYSIsInNwbGl0IiwibWFwIiwiaW50ZXJwb2xhdGUiLCJwdDAiLCJwdDEiLCJkeCIsImR5IiwiaiIsImRyYXdTcXVhcmUiLCJhbHBoYSIsImFyYyIsImRyYXdMaW5lIiwic3Ryb2tlQ29sb3IiLCJkcmF3VGV4dCIsInRleHRDb250ZW50IiwiZm9udFNpemUiLCJmb250IiwiZmlsbFRleHQiLCJnZXRTY3JlZW5zaG90SW1hZ2UiLCJ1cmwiLCJ0b0RhdGFVUkwiLCJpbWFnZSIsIkltYWdlIiwic3JjIiwidGFyZ2V0Q3R4IiwiY2FjaGVDdHgiLCJzb3VyY2VXaWR0aCIsInNvdXJjZUhlaWdodCIsImNhY2hlRGF0YSIsImdldEltYWdlRGF0YSIsInB1dEltYWdlRGF0YSIsIkJBTExfQU5JTUFUSU9OX0RFRkFVTFQiLCJhZnRlckltYWdlIiwicmFkaXVzIiwic3BlZWRYIiwic3BlZWRZIiwiYWNjZWxlcmF0aW9uWCIsImFjY2VsZXJhdGlvblkiLCJmcmljdGlvblgiLCJmcmljdGlvblkiLCJTUE9UU19BTklNQVRJT05fREVGQVVMVCIsIm1pblNpemUiLCJtYXhTaXplIiwicGVyaW9kIiwic3RlcCIsImJvdHRvbUxheWVyIiwicm93IiwiQmFzaWNSZWZlbGVjdGlvbiIsInN3aXRjaFN0YXR1cyIsImluaXRCYWxsIiwiYW5pbWF0ZUJhbGwiLCJzcGVlZCIsImFjY2VsZXJhdGlvbiIsImZyaWN0aW9uIiwiZHJhd0JhbGwiLCJyZWZyZXNoTG9jYXRpb24iLCJyZWZyZXNoU3BlZWQiLCJjaGVja0JvdW5kYXJ5IiwiYmluZCIsImR0IiwiU3BvdHNCdW1waW5nIiwic3BvdHNTaXplIiwiZXhwYW5kIiwiZHJhd1Nwb3RzIiwiaW5pdFNwbGFzaCIsImluaXRpYWxTY3JlZW4iLCJ2aXJ0dWFsQ2FudmFzIiwic3dpdGNoZXIiLCJzcG90QW5pbWF0aW9uIiwic3BsYXNoUHJvbWlzZSIsInNwb3RzQnVtcGluZ0luc3RhbmNlIiwiYm9vdENvbnRyb2xsZXIiLCJiYXNpY1JlZmVsZWN0aW9uSW5zdGFuY2UiLCJzY29yZSIsInBsYXllclJlZiIsIm1vZHVsZSIsImV4cG9ydHMiLCJCYWNrb2ZmIiwib3B0cyIsIm1zIiwiZmFjdG9yIiwiaml0dGVyIiwiYXR0ZW1wdHMiLCJwb3ciLCJyYW5kIiwiZGV2aWF0aW9uIiwiZmxvb3IiLCJyZXNldCIsInNldE1pbiIsInNldE1heCIsInNldEppdHRlciIsImNoYXJzIiwiYXJyYXlidWZmZXIiLCJieXRlcyIsIlVpbnQ4QXJyYXkiLCJsZW4iLCJiYXNlNjQiLCJzdWJzdHJpbmciLCJidWZmZXJMZW5ndGgiLCJlbmNvZGVkMSIsImVuY29kZWQyIiwiZW5jb2RlZDMiLCJlbmNvZGVkNCIsIkFycmF5QnVmZmVyIiwiRW1pdHRlciIsIm1peGluIiwib24iLCJldmVudCIsImZuIiwiX2NhbGxiYWNrcyIsIm9uY2UiLCJvZmYiLCJyZW1vdmVMaXN0ZW5lciIsInJlbW92ZUFsbExpc3RlbmVycyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjYWxsYmFja3MiLCJzcGxpY2UiLCJzbGljZSIsImxpc3RlbmVycyIsImhhc0xpc3RlbmVycyIsImQiLCJ3Iiwib3B0aW9ucyIsInBhcnNlIiwiaXNGaW5pdGUiLCJsb25nIiwiZm10TG9uZyIsImZtdFNob3J0IiwiRXJyb3IiLCJKU09OIiwic3RyaW5naWZ5IiwiU3RyaW5nIiwibWF0Y2giLCJuIiwicGFyc2VGbG9hdCIsInRvTG93ZXJDYXNlIiwidW5kZWZpbmVkIiwibXNBYnMiLCJhYnMiLCJyb3VuZCIsInBsdXJhbCIsImlzUGx1cmFsIiwiZm9ybWF0QXJncyIsImxvYWQiLCJ1c2VDb2xvcnMiLCJsb2NhbHN0b3JhZ2UiLCJ3YXJuZWQiLCJjb25zb2xlIiwid2FybiIsInByb2Nlc3MiLCJfX253anMiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJXZWJraXRBcHBlYXJhbmNlIiwiZmlyZWJ1ZyIsImV4Y2VwdGlvbiIsInRhYmxlIiwiUmVnRXhwIiwiJDEiLCJuYW1lc3BhY2UiLCJodW1hbml6ZSIsImRpZmYiLCJjIiwiaW5kZXgiLCJsYXN0QyIsImRlYnVnIiwibG9nIiwibmFtZXNwYWNlcyIsInN0b3JhZ2UiLCJzZXRJdGVtIiwicmVtb3ZlSXRlbSIsImVycm9yIiwiZ2V0SXRlbSIsImVudiIsIkRFQlVHIiwibG9jYWxTdG9yYWdlIiwiZm9ybWF0dGVycyIsInYiLCJtZXNzYWdlIiwic2V0dXAiLCJjcmVhdGVEZWJ1ZyIsImRlZmF1bHQiLCJjb2VyY2UiLCJkaXNhYmxlIiwiZW5hYmxlIiwiZW5hYmxlZCIsImRlc3Ryb3kiLCJrZXlzIiwiZm9yRWFjaCIsIm5hbWVzIiwic2tpcHMiLCJzZWxlY3RDb2xvciIsImhhc2giLCJjaGFyQ29kZUF0IiwiY29sb3JzIiwicHJldlRpbWUiLCJlbmFibGVPdmVycmlkZSIsInNlbGYiLCJjdXJyIiwiTnVtYmVyIiwicHJldiIsInVuc2hpZnQiLCJmb3JtYXQiLCJmb3JtYXR0ZXIiLCJsb2dGbiIsImV4dGVuZCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsImdldCIsInNldCIsImRlbGltaXRlciIsIm5ld0RlYnVnIiwic3Vic3RyIiwidG9OYW1lc3BhY2UiLCJqb2luIiwicmVnZXhwIiwic3RhY2siLCJGdW5jdGlvbiIsIlNvY2tldCIsInVyaSIsInByb3RvY29sIiwidHJhbnNwb3J0cyIsInBhcnNlciIsInBhcnNldXJpIiwicGFyc2VxcyIsImhvc3RuYW1lIiwiaG9zdCIsInNlY3VyZSIsInBvcnQiLCJxdWVyeSIsInJlYWR5U3RhdGUiLCJ3cml0ZUJ1ZmZlciIsInByZXZCdWZmZXJMZW4iLCJhZ2VudCIsIndpdGhDcmVkZW50aWFscyIsInVwZ3JhZGUiLCJqc29ucCIsInRpbWVzdGFtcFBhcmFtIiwicmVtZW1iZXJVcGdyYWRlIiwicmVqZWN0VW5hdXRob3JpemVkIiwicGVyTWVzc2FnZURlZmxhdGUiLCJ0aHJlc2hvbGQiLCJ0cmFuc3BvcnRPcHRpb25zIiwiY2xvc2VPbkJlZm9yZXVubG9hZCIsImRlY29kZSIsImlkIiwidXBncmFkZXMiLCJwaW5nSW50ZXJ2YWwiLCJwaW5nVGltZW91dCIsInBpbmdUaW1lb3V0VGltZXIiLCJ0cmFuc3BvcnQiLCJjbG9zZSIsIm9mZmxpbmVFdmVudExpc3RlbmVyIiwib25DbG9zZSIsIm9wZW4iLCJjbG9uZSIsIkVJTyIsInNpZCIsInNvY2tldCIsInByaW9yV2Vic29ja2V0U3VjY2VzcyIsImNyZWF0ZVRyYW5zcG9ydCIsInNoaWZ0Iiwic2V0VHJhbnNwb3J0Iiwib25EcmFpbiIsIm9uUGFja2V0Iiwib25FcnJvciIsInByb2JlIiwiZmFpbGVkIiwib25UcmFuc3BvcnRPcGVuIiwic2VuZCIsImRhdGEiLCJtc2ciLCJ1cGdyYWRpbmciLCJjbGVhbnVwIiwiZmx1c2giLCJlcnIiLCJmcmVlemVUcmFuc3BvcnQiLCJvbmVycm9yIiwib25UcmFuc3BvcnRDbG9zZSIsIm9uY2xvc2UiLCJvbnVwZ3JhZGUiLCJ0byIsInBhY2tldCIsIm9uSGFuZHNoYWtlIiwicmVzZXRQaW5nVGltZW91dCIsInNlbmRQYWNrZXQiLCJjb2RlIiwiZmlsdGVyVXBncmFkZXMiLCJvbk9wZW4iLCJhdXRvVW5yZWYiLCJ1bnJlZiIsIndyaXRhYmxlIiwiY29tcHJlc3MiLCJjbGVhbnVwQW5kQ2xvc2UiLCJ3YWl0Rm9yVXBncmFkZSIsInJlYXNvbiIsImRlc2MiLCJwaW5nSW50ZXJ2YWxUaW1lciIsImZpbHRlcmVkVXBncmFkZXMiLCJUcmFuc3BvcnQiLCJkZXNjcmlwdGlvbiIsImRvT3BlbiIsImRvQ2xvc2UiLCJwYWNrZXRzIiwid3JpdGUiLCJkZWNvZGVQYWNrZXQiLCJiaW5hcnlUeXBlIiwiWE1MSHR0cFJlcXVlc3QiLCJYSFIiLCJKU09OUCIsIndlYnNvY2tldCIsInBvbGxpbmciLCJ4aHIiLCJ4ZCIsInhzIiwiaXNTU0wiLCJ4ZG9tYWluIiwieHNjaGVtZSIsImZvcmNlSlNPTlAiLCJQb2xsaW5nIiwiZ2xvYmFsVGhpcyIsInJOZXdsaW5lIiwickVzY2FwZWROZXdsaW5lIiwiSlNPTlBQb2xsaW5nIiwiX19fZWlvIiwib25EYXRhIiwic2NyaXB0IiwicmVtb3ZlQ2hpbGQiLCJmb3JtIiwiaWZyYW1lIiwiYXN5bmMiLCJpbnNlcnRBdCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiaW5zZXJ0QmVmb3JlIiwiaGVhZCIsImlzVUFnZWNrbyIsImFyZWEiLCJpZnJhbWVJZCIsImNsYXNzTmFtZSIsInRvcCIsImxlZnQiLCJtZXRob2QiLCJjb21wbGV0ZSIsImluaXRJZnJhbWUiLCJodG1sIiwidmFsdWUiLCJzdWJtaXQiLCJhdHRhY2hFdmVudCIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsIm9ubG9hZCIsInBpY2siLCJlbXB0eSIsImhhc1hIUjIiLCJyZXNwb25zZVR5cGUiLCJmb3JjZUJhc2U2NCIsInN1cHBvcnRzQmluYXJ5IiwiUmVxdWVzdCIsInJlcSIsInJlcXVlc3QiLCJwb2xsWGhyIiwiY3JlYXRlIiwiZXh0cmFIZWFkZXJzIiwic2V0RGlzYWJsZUhlYWRlckNoZWNrIiwic2V0UmVxdWVzdEhlYWRlciIsInJlcXVlc3RUaW1lb3V0IiwidGltZW91dCIsImhhc1hEUiIsIm9uTG9hZCIsInJlc3BvbnNlVGV4dCIsInJlcXVlc3RzQ291bnQiLCJyZXF1ZXN0cyIsIm9uU3VjY2VzcyIsImZyb21FcnJvciIsImFib3J0IiwiWERvbWFpblJlcXVlc3QiLCJlbmFibGVzWERSIiwidW5sb2FkSGFuZGxlciIsInRlcm1pbmF0aW9uRXZlbnQiLCJ5ZWFzdCIsInBvbGwiLCJvblBhdXNlIiwidG90YWwiLCJkb1BvbGwiLCJjYWxsYmFjayIsImRlY29kZVBheWxvYWQiLCJlbmNvZGVQYXlsb2FkIiwiZG9Xcml0ZSIsInNjaGVtYSIsInRpbWVzdGFtcFJlcXVlc3RzIiwiYjY0IiwiZW5jb2RlIiwiaXB2NiIsIldlYlNvY2tldCIsIk1veldlYlNvY2tldCIsInVzaW5nQnJvd3NlcldlYlNvY2tldCIsImRlZmF1bHRCaW5hcnlUeXBlIiwiaXNSZWFjdE5hdGl2ZSIsInByb2R1Y3QiLCJXUyIsImNoZWNrIiwicHJvdG9jb2xzIiwiaGVhZGVycyIsIndzIiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJvbm9wZW4iLCJfc29ja2V0Iiwib25tZXNzYWdlIiwiZXYiLCJsYXN0UGFja2V0IiwiZW5jb2RlUGFja2V0IiwiQnVmZmVyIiwiYnl0ZUxlbmd0aCIsImF0dHIiLCJyZWR1Y2UiLCJhY2MiLCJrIiwiaGFzQ09SUyIsImNvbmNhdCIsIlBBQ0tFVF9UWVBFUyIsIlBBQ0tFVF9UWVBFU19SRVZFUlNFIiwiRVJST1JfUEFDS0VUIiwid2l0aE5hdGl2ZUFycmF5QnVmZmVyIiwiYmFzZTY0ZGVjb2RlciIsImVuY29kZWRQYWNrZXQiLCJtYXBCaW5hcnkiLCJjaGFyQXQiLCJkZWNvZGVCYXNlNjRQYWNrZXQiLCJwYWNrZXRUeXBlIiwiZGVjb2RlZCIsIkJsb2IiLCJ3aXRoTmF0aXZlQmxvYiIsImlzVmlldyIsImJ1ZmZlciIsImVuY29kZUJsb2JBc0Jhc2U2NCIsImZpbGVSZWFkZXIiLCJGaWxlUmVhZGVyIiwiY29udGVudCIsInJlc3VsdCIsInJlYWRBc0RhdGFVUkwiLCJTRVBBUkFUT1IiLCJmcm9tQ2hhckNvZGUiLCJlbmNvZGVkUGFja2V0cyIsImNvdW50IiwiZW5jb2RlZFBheWxvYWQiLCJkZWNvZGVkUGFja2V0IiwiTiIsIk0iLCJNQVRSSVhfQSIsIlVQUEVSX01BU0siLCJMT1dFUl9NQVNLIiwibXQiLCJtdGkiLCJjb25zdHJ1Y3RvciIsImluaXRfYnlfYXJyYXkiLCJpbml0X3NlZWQiLCJpbml0X2tleSIsImtleV9sZW5ndGgiLCJyYW5kb21faW50IiwibWFnMDEiLCJrayIsInJhbmRvbV9pbnQzMSIsInJhbmRvbV9pbmNsIiwicmFuZG9tX2V4Y2wiLCJyYW5kb21fbG9uZyIsImVuY29kZVVSSUNvbXBvbmVudCIsInFzIiwicXJ5IiwicGFpcnMiLCJwYWlyIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwicmUiLCJwYXJ0cyIsInNvdXJjZSIsImF1dGhvcml0eSIsImlwdjZ1cmkiLCJwYXRoTmFtZXMiLCJxdWVyeUtleSIsInJlZ3giLCIkMCIsIiQyIiwiQVJHX0xFTkdUSCIsInoiLCJTRUdNRU5UX1BBVFRFUk4iLCJOVU1CRVIiLCJudW1iZXJzIiwiY29tbWFuZCIsInRoZUFyZ3MiLCJwYXJzZVZhbHVlcyIsInRoZUNvbW1hbmQiLCJpbWdEYXRhIiwibngiLCJueSIsInN1cHBvcnRzU3ZnUGF0aEFyZ3VtZW50IiwicGFyc2VQYXRoIiwic3RhcnRQb2ludCIsImN1cnJlbnRQb2ludCIsInNlZ21lbnRzIiwicGF0aFR5cGUiLCJjcHgiLCJjcHkiLCJxY3B4IiwicWNweSIsInJ4IiwicnkiLCJhbmdsZSIsImxhcmdlQXJjRmxhZyIsInN3ZWVwRmxhZyIsImVuZFBvaW50IiwibWlkUG9pbnQiLCJyb3RhdGVQb2ludCIsImxhbWJkYSIsImNlbnRlclBvaW50IiwidDEiLCJ0MiIsInNjYWxlUG9pbnQiLCJzdGFydEFuZ2xlIiwiZW5kQW5nbGUiLCJ0cmFuc2xhdGVQb2ludCIsImNjdyIsImNGaWxsIiwiY1N0cm9rZSIsImZpbGxSdWxlIiwiYnVpbGRQYXRoIiwiY0lzUG9pbnRJblBhdGgiLCJwYXRoMmRQb2x5ZmlsbCIsInVybF8xIiwibWFuYWdlcl8xIiwibG9va3VwIiwiY2FjaGUiLCJwYXJzZWQiLCJzYW1lTmFtZXNwYWNlIiwibmV3Q29ubmVjdGlvbiIsImZvcmNlTmV3IiwibXVsdGlwbGV4IiwiaW8iLCJNYW5hZ2VyIiwic29ja2V0X2lvX3BhcnNlcl8xIiwibWFuYWdlcl8yIiwic29ja2V0XzEiLCJlaW8iLCJvbl8xIiwidHlwZWRfZXZlbnRzXzEiLCJuc3BzIiwic3VicyIsInJlY29ubmVjdGlvbiIsInJlY29ubmVjdGlvbkF0dGVtcHRzIiwiSW5maW5pdHkiLCJyZWNvbm5lY3Rpb25EZWxheSIsInJlY29ubmVjdGlvbkRlbGF5TWF4IiwicmFuZG9taXphdGlvbkZhY3RvciIsImJhY2tvZmYiLCJfcmVhZHlTdGF0ZSIsIl9wYXJzZXIiLCJlbmNvZGVyIiwiRW5jb2RlciIsImRlY29kZXIiLCJEZWNvZGVyIiwiX2F1dG9Db25uZWN0IiwiYXV0b0Nvbm5lY3QiLCJfcmVjb25uZWN0aW9uIiwiX3JlY29ubmVjdGlvbkF0dGVtcHRzIiwiX2EiLCJfcmVjb25uZWN0aW9uRGVsYXkiLCJfcmFuZG9taXphdGlvbkZhY3RvciIsIl9yZWNvbm5lY3Rpb25EZWxheU1heCIsIl90aW1lb3V0IiwiX3JlY29ubmVjdGluZyIsInJlY29ubmVjdCIsImVuZ2luZSIsInNraXBSZWNvbm5lY3QiLCJvcGVuU3ViRGVzdHJveSIsImVycm9yU3ViIiwiZW1pdFJlc2VydmVkIiwibWF5YmVSZWNvbm5lY3RPbk9wZW4iLCJzdWJEZXN0cm95Iiwib25waW5nIiwib25kYXRhIiwib25kZWNvZGVkIiwiYWRkIiwibnNwIiwiYWN0aXZlIiwiX2Nsb3NlIiwib25yZWNvbm5lY3QiLCJhdHRlbXB0IiwiU3RyaWN0RXZlbnRFbWl0dGVyIiwiUkVTRVJWRURfRVZFTlRTIiwiZnJlZXplIiwiY29ubmVjdCIsImNvbm5lY3RfZXJyb3IiLCJkaXNjb25uZWN0IiwiZGlzY29ubmVjdGluZyIsIm5ld0xpc3RlbmVyIiwicmVjZWl2ZUJ1ZmZlciIsInNlbmRCdWZmZXIiLCJpZHMiLCJhY2tzIiwiZmxhZ3MiLCJjb25uZWN0ZWQiLCJkaXNjb25uZWN0ZWQiLCJhdXRoIiwib25wYWNrZXQiLCJzdWJFdmVudHMiLCJQYWNrZXRUeXBlIiwiRVZFTlQiLCJwb3AiLCJpc1RyYW5zcG9ydFdyaXRhYmxlIiwiZGlzY2FyZFBhY2tldCIsInZvbGF0aWxlIiwiX3BhY2tldCIsIkNPTk5FQ1QiLCJvbmNvbm5lY3QiLCJvbmV2ZW50IiwiQklOQVJZX0VWRU5UIiwiQUNLIiwib25hY2siLCJCSU5BUllfQUNLIiwiRElTQ09OTkVDVCIsIm9uZGlzY29ubmVjdCIsIkNPTk5FQ1RfRVJST1IiLCJhY2siLCJlbWl0RXZlbnQiLCJfYW55TGlzdGVuZXJzIiwibGlzdGVuZXIiLCJzZW50IiwiZW1pdEJ1ZmZlcmVkIiwibG9jIiwiaHJlZiIsImlzX2JpbmFyeV8xIiwiZGVjb25zdHJ1Y3RQYWNrZXQiLCJidWZmZXJzIiwicGFja2V0RGF0YSIsInBhY2siLCJfZGVjb25zdHJ1Y3RQYWNrZXQiLCJhdHRhY2htZW50cyIsImlzQmluYXJ5IiwicGxhY2Vob2xkZXIiLCJfcGxhY2Vob2xkZXIiLCJudW0iLCJuZXdEYXRhIiwicmVjb25zdHJ1Y3RQYWNrZXQiLCJfcmVjb25zdHJ1Y3RQYWNrZXQiLCJiaW5hcnlfMSIsImhhc0JpbmFyeSIsImVuY29kZUFzQmluYXJ5IiwiZW5jb2RlQXNTdHJpbmciLCJkZWNvbnN0cnVjdGlvbiIsImRlY29kZVN0cmluZyIsInJlY29uc3RydWN0b3IiLCJCaW5hcnlSZWNvbnN0cnVjdG9yIiwidGFrZUJpbmFyeURhdGEiLCJzdGFydCIsImJ1ZiIsIm5leHQiLCJwYXlsb2FkIiwidHJ5UGFyc2UiLCJpc1BheWxvYWRWYWxpZCIsImZpbmlzaGVkUmVjb25zdHJ1Y3Rpb24iLCJyZWNvblBhY2siLCJiaW5EYXRhIiwid2l0aE5hdGl2ZUZpbGUiLCJGaWxlIiwidG9KU09OIiwiYWxwaGFiZXQiLCJlbmNvZGVkIiwibm93IiwiaW5pdFVJIiwiZ2FtZUNyZWF0ZWQiLCJqb2luZWQiLCJuYW1lQ29uZmlybWVkIiwiZ2FtZVN0YXJ0ZWQiLCJjcmVhdGVHYW1lQnRuIiwic2hvd0pvaW5HYW1lUHJvbXB0QnRuIiwiY29uZmlybUpvaW5HYW1lQnRuIiwicm9vbUNvZGVJbnB1dCIsInJvb21Db2RlRGlzcGxheSIsIm5hbWVJbnB1dCIsIm5hbWVDb25maXJtIiwibGVhdmVXYWl0aW5nQnRuIiwibGVhdmVHYW1lU3RhcnRBbGVydCIsImdhbWVTdGFydCIsImluaXRUcmlnZ2VyIiwiaW5pdFVJUHJvbWlzZSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpbm5lckhUTUwiLCJwYXJlbnRQb3BvdXRzIiwidG9nZ2xlUG9wb3V0IiwiZmxhZyIsImNvbmZpcm1OYW1lIiwibmV3R2FtZSIsInJvb21Db2RlIiwiY29uZmlybUpvaW5HYW1lIiwicGxheWVyTnVtYmVyIiwicGxheWVyTmFtZSIsImhvc3ROYW1lIiwiY2hhbGxlbmdlciIsInBvcG91dCIsInJlbW92ZSIsImhpZGVJbml0aWFsU2NyZWVuIiwidG9nZ2xlSGlkZU9uQWN0aW9uIiwidG9nZ2xlU2hvd09uQWN0aW9uIiwic3RhcnRDb3VudGluZyIsImdjIiwidGltZUludGVydmFsIiwic3BsYXNoU3dpdGNoZXIiLCJ1aUluaXRQcm9taXNlIiwiZ2FtZUNvbnRvbGxlciIsImRyYXdHYW1lIiwiYWxlcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxPQUFPLEdBQUc7QUFDZEMsU0FBTyxFQUFFLGVBREs7QUFFZEMsWUFBVSxFQUFFLHFCQUZFO0FBR2RDLGtCQUFnQixFQUFFLElBQUk7QUFIUixDQUFoQjtBQU1PLElBQU1DLE1BQWI7QUFBQTs7QUFB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QVUsa0JBQVYsRUFBOEIsWUFBTTtBQUNsQ3dsQixlQUFhLENBQUMvK0IsR0FBZCxDQUFrQjRMLFNBQWxCLENBQTRCMHlCLE1BQTVCLENBQW1DLFVBQW5DO0FBQ0QsQ0FGRDtBQUlBdGIsTUFBTSxDQUFDekosRUFBUCxDQUFVLE9BQVYsRUFBbUIsWUFBTTtBQUN2QndsQixlQUFhLENBQUMvK0IsR0FBZCxDQUFrQjRMLFNBQWxCLENBQTRCMHlCLE1BQTVCLENBQW1DLFVBQW5DO0FBQ0QsQ0FGRDtBQUlBdGIsTUFBTSxDQUFDekosRUFBUCxDQUFVLGdCQUFWLEVBQTRCLFlBQU07QUFDaEMwbEIsT0FBSyxDQUFDLGtCQUFELENBQUw7QUFDRCxDQUZEO0FBSUFqYyxNQUFNLENBQUN6SixFQUFQLENBQVUsYUFBVixFQUF5QixZQUFNO0FBQzdCMGxCLE9BQUssQ0FBQyxxQkFBRCxDQUFMO0FBQ0QsQ0FGRDtBQUlBamMsTUFBTSxDQUFDekosRUFBUCxDQUFVLGlCQUFWLEVBQTZCLFlBQU07QUFDakMwbEIsT0FBSyxDQUFDLHlDQUFELENBQUw7QUFDRCxDQUZELEU7Ozs7Ozs7OztBQy9EQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FudmFzMkRGeEJhc2UsIGJvb3QgfSBmcm9tICcuL2xpYi9iYXNlJztcbmltcG9ydCB7IFN0cm9rZUFuaW1hdGlvbiwgU3dpcmw4Qml0LCBTdGFyU2t5IH0gZnJvbSAnLi9saWIvYW5pbWF0aW9uJztcbmltcG9ydCB7IGdldENhY2hlQ2FudmFzIH0gZnJvbSAnLi9saWIvdXRpbCc7XG5pbXBvcnQgeyBwbGF5ZXJzRGF0YSwgYmFsbCB9IGZyb20gJy4uL2RhdGEnO1xuaW1wb3J0IHsgZHJhd1JlY3QsIGRyYXdDaXJjbGUgfSBmcm9tICcuL2xpYi9zaGFwZSdcblxuY29uc3QgREVGQVVMVCA9IHtcbiAgYmdDb2xvcjogJ3JnYmEoMCwwLDAsMSknLFxuICBjb3VydENvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwxKScsXG4gIGNvdXJ0QXNwZWN0UmF0aW86IDUgLyAzXG59XG5cbmV4cG9ydCBjbGFzcyBFbmdpbmUgZXh0ZW5kcyBDYW52YXMyREZ4QmFzZSB7XG4gIGNvbnN0cnVjdG9yKGVsZSwgZGVmYXVsdENvbmZpZywgY29uZmlnKSB7XG4gICAgc3VwZXIoZWxlLCBkZWZhdWx0Q29uZmlnLCBjb25maWcpXG4gICAgdGhpcy5waXhlbEJhc2UgPSAxNDQwO1xuICAgIHRoaXMuaW5pdCgpO1xuICAgIHRoaXMuZnBzID0gMzAsXG4gICAgICB0aGlzLmNvdXJ0T2Zmc2V0ID0gNjU7XG4gICAgdGhpcy5nYW1lU3RhdHVzID0gMDtcbiAgICB0aGlzLnBhdXNlID0gZmFsc2U7XG4gICAgLy8wOiBub3Qgc3RhcnQgeWV0XG4gICAgLy8xOiBjdXJ0YWluIGFuaW1hdGluZ1xuICAgIC8vMjogY291cnQgYW5pbWF0aW5nXG4gICAgLy8zOiBhbmltYXRpbmcgcGxheWVycyBhbmQgc2Nyb2Vib2FyZFxuICAgIC8vNDogZ2FtZSBpcyByZWFkeVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLmN1cnRhaW4gPSB0aGlzLmdlbkN1cnRhaW4oKTtcbiAgICB0aGlzLmNvdXJ0ID0gdGhpcy5nZW5Db3VydCgpO1xuICAgIHRoaXMuc3RhclNreSA9IG5ldyBTdGFyU2t5KHRoaXMuY3R4KTtcbiAgICB0aGlzLnBsYXllcnMgPSB0aGlzLmdlblBsYXllcnMoKTtcbiAgICB0aGlzLnNjb3JlYm9hcmRzID0gdGhpcy5nZW5TY29yZWJvYXJkcygpO1xuICAgIHRoaXMuYmFsbCA9IHRoaXMuZ2VuQmFsbCgpO1xuICAgIHRoaXMuaW5pdFJlc2l6ZWQoKTtcbiAgfVxuXG4gIGluaXRSZXNpemVkKCkge1xuICAgIHRoaXMucmVzaXplZENhbGxiYWNrID0gKCkgPT4ge1xuICAgICAgdGhpcy5jdXJ0YWluLmRyYXdTdGF0aWMoKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMuZ2FtZVN0YXR1cyA9PT0gMykge1xuICAgICAgICAgICAgdGhpcy5iYWNrZ3JvdW5kKCdibGFjaycpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnN0YXJTa3kuZHJhdygpO1xuICAgICAgICAgIHRoaXMuY291cnQuZHJhd1N0YXRpYygpO1xuICAgICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGdlbkN1cnRhaW4oYmFuZFdpZHRoID0gMzApIHtcbiAgICBsZXQgY3VydGFpbkNhbnZhc0luc3RhbmNlID0gdGhpcy5jdXJ0YWluQ2FudmFzSW5zdGFuY2UgPSB0aGlzLmNyZWF0ZVZpcnR1YWxDYW52YXNCYXNlSW5zdGFuY2UoKTtcbiAgICBjdXJ0YWluQ2FudmFzSW5zdGFuY2Uuc2V0Q2FudmFzU2l6ZSh0aGlzLmN2cy53aWR0aCwgdGhpcy5jdnMuaGVpZ2h0KTtcbiAgICBsZXQgY3VydGFpbkFuaW1hdGlvbkluc3RhbmNlID0gbmV3IFN3aXJsOEJpdChjdXJ0YWluQ2FudmFzSW5zdGFuY2UuY3R4KTtcbiAgICBsZXQgY3VydGFpbiA9IHtcbiAgICAgIGFuaW1hdGU6ICgpID0+IHtcbiAgICAgICAgbGV0IGluaXRpYWxJbWFnZSA9IGdldENhY2hlQ2FudmFzKHRoaXMuY3R4KTtcbiAgICAgICAgbGV0IHByb21pc2UgPSBjdXJ0YWluQW5pbWF0aW9uSW5zdGFuY2UuYW5pbWF0ZShmYWxzZSwgYmFuZFdpZHRoLCB0aGlzLmNvbmZpZy5iZ0NvbG9yKTtcbiAgICAgICAgbGV0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoaW5pdGlhbEltYWdlLCAwLCAwLCB0aGlzLmN2cy53aWR0aCwgdGhpcy5jdnMuaGVpZ2h0LCAwLCAwLCB0aGlzLmN2cy53aWR0aCwgdGhpcy5jdnMuaGVpZ2h0KTtcbiAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoY3VydGFpbkNhbnZhc0luc3RhbmNlLmN2cywgMCwgMCwgY3VydGFpbkNhbnZhc0luc3RhbmNlLmN2cy53aWR0aCwgY3VydGFpbkNhbnZhc0luc3RhbmNlLmN2cy5oZWlnaHQsIDAsIDAsIHRoaXMuY3ZzLndpZHRoLCB0aGlzLmN2cy5oZWlnaHQpO1xuICAgICAgICAgIHRoaXMuc3RhclNreS5kcmF3KCk7XG4gICAgICAgIH0sIHRoaXMuZnBzKTtcbiAgICAgICAgcmV0dXJuIHByb21pc2UudGhlbigoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMpID0+IHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgICAgcmVzKCk7XG4gICAgICAgICAgICB9LCA1MDApXG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBkcmF3U3RhdGljOiAoKSA9PiB7IC8vXG4gICAgICAgIGxldCB0cmlnZ2VyO1xuICAgICAgICBsZXQgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xuICAgICAgICAgIHRyaWdnZXIgPSByZXM7XG4gICAgICAgIH0pXG4gICAgICAgIGxldCBzdGF0aWNJbWFnZSA9IGN1cnRhaW5DYW52YXNJbnN0YW5jZS5jdnM7XG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcbiAgICAgICAgICBzdGF0aWNJbWFnZSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgc3RhdGljSW1hZ2Uud2lkdGgsXG4gICAgICAgICAgc3RhdGljSW1hZ2UuaGVpZ2h0LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICB0aGlzLmN2cy53aWR0aCxcbiAgICAgICAgICB0aGlzLmN2cy5oZWlnaHRcbiAgICAgICAgKVxuICAgICAgICB0cmlnZ2VyKCk7XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIGN1cnRhaW47XG4gIH1cblxuICBnZXRBc3BlY3RSYXRpbygpIHtcbiAgICByZXR1cm4gdGhpcy5jdnMud2lkdGggLyB0aGlzLmN2cy5oZWlnaHQ7XG4gIH1cblxuICByZXNwb25zaXZlUGFpbnRlcih0YXJnZXRDdnMsIGluaXRpYWxJbWFnZSkge1xuICAgIGxldCBvZmZzZXQgPSB0aGlzLmNvdXJ0T2Zmc2V0O1xuICAgIHRoaXMuY3R4LnNhdmUoKTtcbiAgICAvL+eVq2NvdXJ0IOacg+acieWbm+eorueLgOazgSwgKGNhbnZhc+mVt+WvrD7poJDoqK3plbflr6zmr5Q+MSkgfCAoMTw9Y2FudmFz6ZW35a+sPOmgkOioremVt+WvrOavlCkgfCAo6aCQ6Kit6ZW35a+s5q+U5YCS5pW4PGNhbnZhc+mVt+WvrOavlDwxKSDvvZwgKGNhbnZhc+mVt+WvrOavlDzpoJDoqK3plbflr6zmr5TlgJLmlbg8MSlcbiAgICBpZiAodGhpcy5nZXRBc3BlY3RSYXRpbygpID49IDEpIHtcbiAgICAgIC8vIOmAmemCiuaYr+WJjeWFqeeorueLgOazgVxuICAgICAgLy/lhYjmuIXpmaTkuIDmrKHkuYvlvoznlatpbml0aWFsSW1hZ2UgLCDlho3nlatjb3VydFxuICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgbGV0IHR5cGVBID0gKHRoaXMuY3ZzLmhlaWdodCAtIDIgKiBvZmZzZXQpICogdGhpcy5jb25maWcuY291cnRBc3BlY3RSYXRpbyA8IHRoaXMuY3ZzLndpZHRoIC0gMiAqIG9mZnNldDtcbiAgICAgIGxldCBvZmZzZXRWLCBvZmZzZXRILCBjb3VydEhlaWdodCwgY291cnRXaWR0aDtcbiAgICAgIGlmICh0eXBlQSkge1xuICAgICAgICAvLyDlhYjnrpflh7rnuK7muJvpgY5vZmZzZXQg55qEY3ZzIOWvrFxuICAgICAgICBvZmZzZXRWID0gb2Zmc2V0O1xuICAgICAgICBjb3VydEhlaWdodCA9IHRoaXMuY3ZzLmhlaWdodCAtIDIgKiBvZmZzZXQ7XG4gICAgICAgIGNvdXJ0V2lkdGggPSBjb3VydEhlaWdodCAqIHRoaXMuY29uZmlnLmNvdXJ0QXNwZWN0UmF0aW87XG4gICAgICAgIG9mZnNldEggPSAodGhpcy5jdnMud2lkdGggLSBjb3VydFdpZHRoKSAvIDI7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgLy8g6Z2edHlwZUHnmoTni4Dms4EsIOS5n+WwseaYr2NhbnZhc+WvrOmrmOavlOS9juaWvGNvbmZpZyDoqK3lrprnmoTmr5TkvotcbiAgICAgICAgb2Zmc2V0SCA9IG9mZnNldDtcbiAgICAgICAgY291cnRXaWR0aCA9IHRoaXMuY3ZzLndpZHRoIC0gMiAqIG9mZnNldDtcbiAgICAgICAgY291cnRIZWlnaHQgPSBjb3VydFdpZHRoIC8gdGhpcy5jb25maWcuY291cnRBc3BlY3RSYXRpbztcbiAgICAgICAgb2Zmc2V0ViA9ICh0aGlzLmN2cy5oZWlnaHQgLSBjb3VydEhlaWdodCkgLyAyO1xuICAgICAgfVxuICAgICAgaWYgKGluaXRpYWxJbWFnZSkge1xuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXG4gICAgICAgICAgaW5pdGlhbEltYWdlLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICBpbml0aWFsSW1hZ2Uud2lkdGgsXG4gICAgICAgICAgaW5pdGlhbEltYWdlLmhlaWdodCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgdGhpcy5jdnMud2lkdGgsXG4gICAgICAgICAgdGhpcy5jdnMuaGVpZ2h0XG4gICAgICAgIClcblxuICAgICAgfVxuICAgICAgLy8g5YWI5peL6L2J55Wr5biDLCDlm6DngrogdmlydHVhbGNhbnZhcyDmmK/kuIDlvLXlnoLnm7TnmoTnlavluINcbiAgICAgIHRoaXMuY3R4LnRyYW5zbGF0ZSh0aGlzLmN2cy53aWR0aCAvIDIsIHRoaXMuY3ZzLmhlaWdodCAvIDIpO1xuICAgICAgdGhpcy5jdHgucm90YXRlKE1hdGguUEkgLyAyKTtcbiAgICAgIHRoaXMuY3R4LnRyYW5zbGF0ZSgtdGhpcy5jdnMuaGVpZ2h0IC8gMiwgLXRoaXMuY3ZzLndpZHRoIC8gMik7XG4gICAgICAvLyDlm6Dngrpjb3VydCDnmoTlpKflsI/mnIPpmqjokZdjYW52YXMg55qE6ZW35a+s5q+U6ICM6K6K5YuVXG4gICAgICAvLyDpgJnpgorlhYgg5YGH6Kit5LuK5aSp5pivY2FudmFzIOWvrOavlOmrmOi2heWHuuW+iOWkmueahOaDheazgSAsIOS5n+WwseaYr+eLgOazgVwidHlwZUFcIlxuICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKFxuICAgICAgICB0YXJnZXRDdnMsXG4gICAgICAgIDAsXG4gICAgICAgIDAsXG4gICAgICAgIHRhcmdldEN2cy53aWR0aCxcbiAgICAgICAgdGFyZ2V0Q3ZzLmhlaWdodCxcbiAgICAgICAgb2Zmc2V0VixcbiAgICAgICAgb2Zmc2V0SCxcbiAgICAgICAgY291cnRIZWlnaHQsXG4gICAgICAgIGNvdXJ0V2lkdGhcbiAgICAgIClcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAvL+mAmemCiuaYr+W+jOWFqeeorueLgOazgVxuICAgICAgLy8g5Zug54K6Y291cnQg55qE5aSn5bCP5pyD6Zqo6JGXY2FudmFzIOeahOmVt+WvrOavlOiAjOiuiuWLlVxuICAgICAgLy8g6YCZ6YKK5YWIIOWBh+ioreS7iuWkqeaYr2NhbnZhcyDpq5jmr5Tlr6zmr5TotoXlh7rlvojlpJrnmoTmg4Xms4EgLCDkuZ/lsLHmmK/ni4Dms4FcInR5cGVBXCJcbiAgICAgIGxldCB0eXBlQSA9ICh0aGlzLmN2cy53aWR0aCAtIDIgKiBvZmZzZXQpICogdGhpcy5jb25maWcuY291cnRBc3BlY3RSYXRpbyA8IHRoaXMuY3ZzLmhlaWdodCAtIDIgKiBvZmZzZXQ7XG4gICAgICBsZXQgb2Zmc2V0Viwgb2Zmc2V0SCwgY291cnRIZWlnaHQsIGNvdXJ0V2lkdGg7XG4gICAgICBpZiAodHlwZUEpIHtcbiAgICAgICAgLy8g5YWI566X5Ye657iu5rib6YGOb2Zmc2V0IOeahGN2cyDlr6xcbiAgICAgICAgb2Zmc2V0SCA9IG9mZnNldDtcbiAgICAgICAgY291cnRXaWR0aCA9IHRoaXMuY3ZzLndpZHRoIC0gMiAqIG9mZnNldDtcbiAgICAgICAgY291cnRIZWlnaHQgPSBjb3VydFdpZHRoICogdGhpcy5jb25maWcuY291cnRBc3BlY3RSYXRpbztcbiAgICAgICAgb2Zmc2V0ViA9ICh0aGlzLmN2cy5oZWlnaHQgLSBjb3VydEhlaWdodCkgLyAyO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIC8vIOmdnnR5cGVB55qE54uA5rOBLCDkuZ/lsLHmmK9jYW52YXPlr6zpq5jmr5TkvY7mlrxjb25maWcg6Kit5a6a55qE5q+U5L6LXG4gICAgICAgIG9mZnNldFYgPSBvZmZzZXQ7XG4gICAgICAgIGNvdXJ0SGVpZ2h0ID0gdGhpcy5jdnMuaGVpZ2h0IC0gMiAqIG9mZnNldDtcbiAgICAgICAgY291cnRXaWR0aCA9IGNvdXJ0SGVpZ2h0IC8gdGhpcy5jb25maWcuY291cnRBc3BlY3RSYXRpbztcbiAgICAgICAgb2Zmc2V0SCA9ICh0aGlzLmN2cy53aWR0aCAtIGNvdXJ0V2lkdGgpIC8gMjtcbiAgICAgIH1cbiAgICAgIGlmIChpbml0aWFsSW1hZ2UpIHtcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKFxuICAgICAgICAgIGluaXRpYWxJbWFnZSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgaW5pdGlhbEltYWdlLndpZHRoLFxuICAgICAgICAgIGluaXRpYWxJbWFnZS5oZWlnaHQsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIHRoaXMuY3ZzLndpZHRoLFxuICAgICAgICAgIHRoaXMuY3ZzLmhlaWdodFxuICAgICAgICApXG4gICAgICB9XG4gICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXG4gICAgICAgIHRhcmdldEN2cyxcbiAgICAgICAgMCxcbiAgICAgICAgMCxcbiAgICAgICAgdGFyZ2V0Q3ZzLndpZHRoLFxuICAgICAgICB0YXJnZXRDdnMuaGVpZ2h0LFxuICAgICAgICBvZmZzZXRILFxuICAgICAgICBvZmZzZXRWLFxuICAgICAgICBjb3VydFdpZHRoLFxuICAgICAgICBjb3VydEhlaWdodFxuICAgICAgKVxuICAgIH1cblxuICAgIHRoaXMuY3R4LnJlc3RvcmUoKTtcbiAgfVxuXG4gIGdlbkNvdXJ0KHN0cm9rZVdpZHRoID0gMTAsIG9mZnNldCA9IDY1KSB7XG4gICAgbGV0IGNvdXJ0Q2FudmFzSW5zdGFuY2UgPSB0aGlzLmNvdXJ0Q2FudmFzSW5zdGFuY2UgPSB0aGlzLmNyZWF0ZVZpcnR1YWxDYW52YXNCYXNlSW5zdGFuY2UoKTtcbiAgICBsZXQgY291cnRDYW52YXNXaWR0aCA9IHRoaXMucGl4ZWxCYXNlIC8gdGhpcy5jb25maWcuY291cnRBc3BlY3RSYXRpbztcbiAgICBsZXQgY291cnRDYW52YXNIZWlnaHQgPSB0aGlzLnBpeGVsQmFzZTtcbiAgICBjb3VydENhbnZhc0luc3RhbmNlLnNldENhbnZhc1NpemUoY291cnRDYW52YXNXaWR0aCwgY291cnRDYW52YXNIZWlnaHQpO1xuICAgIGxldCB2ZXJ0aWNlcyA9IFtcbiAgICAgIHsgeDogMCwgeTogMCB9LFxuICAgICAgeyB4OiBjb3VydENhbnZhc0luc3RhbmNlLmN2cy53aWR0aCwgeTogMCB9LFxuICAgICAgeyB4OiBjb3VydENhbnZhc0luc3RhbmNlLmN2cy53aWR0aCwgeTogY291cnRDYW52YXNJbnN0YW5jZS5jdnMuaGVpZ2h0IH0sXG4gICAgICB7IHg6IDAsIHk6IGNvdXJ0Q2FudmFzSW5zdGFuY2UuY3ZzLmhlaWdodCB9LFxuICAgICAgeyB4OiAwLCB5OiAwIH1cbiAgICBdO1xuXG4gICAgbGV0IHN0cm9rZUFuaW1hdGlvbkluc3RhbmNlID0gbmV3IFN0cm9rZUFuaW1hdGlvbihjb3VydENhbnZhc0luc3RhbmNlLmN0eCwgdmVydGljZXMpO1xuXG4gICAgbGV0IGNvdXJ0ID0ge1xuICAgICAgYW5pbWF0ZTogKCkgPT4ge1xuICAgICAgICBjb3VydC5pbml0aWFsSW1hZ2UgPSBnZXRDYWNoZUNhbnZhcyh0aGlzLmN0eCk7XG4gICAgICAgIGxldCBwcm9taXNlID0gc3Ryb2tlQW5pbWF0aW9uSW5zdGFuY2UuYW5pbWF0ZShzdHJva2VXaWR0aCwgdGhpcy5jb25maWcuY291cnRDb2xvcikudGhlbigoKSA9PiB7XG4gICAgICAgICAgbGV0IHZlcnRpY2VzID0gW1xuICAgICAgICAgICAgeyB4OiAwLCB5OiBjb3VydENhbnZhc0luc3RhbmNlLmN2cy5oZWlnaHQgLyAyIH0sXG4gICAgICAgICAgICB7IHg6IGNvdXJ0Q2FudmFzSW5zdGFuY2UuY3ZzLndpZHRoLCB5OiBjb3VydENhbnZhc0luc3RhbmNlLmN2cy5oZWlnaHQgLyAyIH0sXG4gICAgICAgICAgXVxuICAgICAgICAgIHJldHVybiBuZXcgU3Ryb2tlQW5pbWF0aW9uKGNvdXJ0Q2FudmFzSW5zdGFuY2UuY3R4LCB2ZXJ0aWNlcykuYW5pbWF0ZShzdHJva2VXaWR0aCwgdGhpcy5jb25maWcuY291cnRDb2xvciwgZmFsc2UsIFsxMCwgMzBdLCAndHJhbnNwYXJlbnQnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGxldCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICB0aGlzLnJlc3BvbnNpdmVQYWludGVyKGNvdXJ0Q2FudmFzSW5zdGFuY2UuY3ZzLCBjb3VydC5pbml0aWFsSW1hZ2UpO1xuICAgICAgICB9LCB0aGlzLmZwcylcbiAgICAgICAgcmV0dXJuIHByb21pc2UudGhlbigoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMpID0+IHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgICAgcmVzKCk7XG4gICAgICAgICAgICB9LCA1MDApXG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgICAgfSxcbiAgICAgIGRyYXdTdGF0aWM6ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xuICAgICAgICAgIHRoaXMucmVzcG9uc2l2ZVBhaW50ZXIoY291cnRDYW52YXNJbnN0YW5jZS5jdnMsIGNvdXJ0LmluaXRpYWxJbWFnZSk7XG4gICAgICAgICAgcmVzKCk7XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBjb3VydDtcbiAgfVxuXG4gIGdlblBsYXllcnMod2lkdGhQcmFtID0gMTAsIGdhcFJhdGlvID0gMC4wNSwgY29sb3IgPSAnd2hpdGUnLCB0aGlja25lc3MgPSAyMCkge1xuICAgIGxldCBwbGF5ZXJzQ2FudmFzSW5zdGFuY2UgPSB0aGlzLnBsYXllcnNDYW52YXNJbnN0YW5jZSA9IHRoaXMuY3JlYXRlVmlydHVhbENhbnZhc0Jhc2VJbnN0YW5jZSgpO1xuICAgIHBsYXllcnNDYW52YXNJbnN0YW5jZS5zZXRDYW52YXNTaXplKHRoaXMuY291cnRDYW52YXNJbnN0YW5jZS5jdnMud2lkdGgsIHRoaXMuY291cnRDYW52YXNJbnN0YW5jZS5jdnMuaGVpZ2h0KTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVyc0RhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIHBsYXllcnNEYXRhW2ldLndpZHRoID0gKHRoaXMucGl4ZWxCYXNlIC8gdGhpcy5jb25maWcuY291cnRBc3BlY3RSYXRpbykgLyB3aWR0aFByYW07XG4gICAgICBwbGF5ZXJzRGF0YVtpXS5wb3NpdGlvbi54ID0gdGhpcy5jb3VydENhbnZhc0luc3RhbmNlLmN2cy53aWR0aCAvIDI7XG4gICAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgICBwbGF5ZXJzRGF0YVtpXS5wb3NpdGlvbi55ID0gdGhpcy5jb3VydENhbnZhc0luc3RhbmNlLmN2cy5oZWlnaHQgKiAoMSAtIGdhcFJhdGlvKVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAoaSA9PT0gMSkge1xuICAgICAgICBwbGF5ZXJzRGF0YVtpXS5wb3NpdGlvbi55ID0gdGhpcy5jb3VydENhbnZhc0luc3RhbmNlLmN2cy5oZWlnaHQgKiBnYXBSYXRpb1xuICAgICAgfVxuICAgIH1cbiAgICBsZXQgcGxheWVycyA9IHtcbiAgICAgIHJlYWR5OiAoKSA9PiB7XG4gICAgICAgIGxldCB0cmlnZ2VyO1xuICAgICAgICBsZXQgcHJvbWlzZSA9IG5ldyBQcm9taXNlKHJlcyA9PiB7XG4gICAgICAgICAgdHJpZ2dlciA9IHJlcztcbiAgICAgICAgfSlcbiAgICAgICAgbGV0IG9wYWNpdHkgPSAwO1xuICAgICAgICBsZXQgaW5pdGlhbEltYWdlID0gZ2V0Q2FjaGVDYW52YXModGhpcy5jdHgpO1xuICAgICAgICBsZXQgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgaWYgKG9wYWNpdHkgPj0gMSkge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICAgICB0cmlnZ2VyKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVyc0RhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGRyYXdSZWN0KHBsYXllcnNDYW52YXNJbnN0YW5jZS5jdHgsIHBsYXllcnNEYXRhW2ldLnBvc2l0aW9uLngsIHBsYXllcnNEYXRhW2ldLnBvc2l0aW9uLnksIHBsYXllcnNEYXRhW2ldLndpZHRoLCB0aGlja25lc3MsIGNvbG9yLCBvcGFjaXR5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5yZXNwb25zaXZlUGFpbnRlcihwbGF5ZXJzQ2FudmFzSW5zdGFuY2UuY3ZzLCBpbml0aWFsSW1hZ2UpO1xuICAgICAgICAgIG9wYWNpdHkgKz0gMC4wMTtcbiAgICAgICAgfSwgdGhpcy5mcHMpXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgICAgfSxcblxuICAgICAgbG9vcFVwZGF0ZTogKCkgPT4ge1xuICAgICAgICBsZXQgaW5pdGlhbEltYWdlID0gZ2V0Q2FjaGVDYW52YXModGhpcy5jdHgpO1xuICAgICAgICBsZXQgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5ZXJzRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcGxheWVyc0NhbnZhc0luc3RhbmNlLmNsZWFyKCk7XG4gICAgICAgICAgICBkcmF3UmVjdChwbGF5ZXJzQ2FudmFzSW5zdGFuY2UuY3R4LCBwbGF5ZXJzRGF0YVtpXS5wb3NpdGlvbi54LCBwbGF5ZXJzRGF0YVtpXS5wb3NpdGlvbi55LCBwbGF5ZXJzRGF0YVtpXS53aWR0aCwgdGhpY2tuZXNzLCBjb2xvciwgMSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMucmVzcG9uc2l2ZVBhaW50ZXIocGxheWVyc0NhbnZhc0luc3RhbmNlLmN2cywgaW5pdGlhbEltYWdlKTtcbiAgICAgICAgfSwgdGhpcy5mcHMpXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHBsYXllcnM7XG4gIH1cblxuICBnZW5TY29yZWJvYXJkcygpIHtcbiAgICBsZXQgc2NvcmVib2FyZHNDYW52YXNJbnN0YW5jZSA9IHRoaXMuc2NvcmVib2FyZHNDYW52YXNJbnN0YW5jZSA9IHRoaXMuY3JlYXRlVmlydHVhbENhbnZhc0Jhc2VJbnN0YW5jZSgpO1xuICB9XG5cbiAgZ2VuQmFsbCgpIHtcbiAgICBsZXQgYmFsbENhbnZhc0luc3RhbmNlID0gdGhpcy5iYWxsQ2FudmFzSW5zdGFuY2UgPSB0aGlzLmNyZWF0ZVZpcnR1YWxDYW52YXNCYXNlSW5zdGFuY2UoKTtcbiAgICByZXR1cm4gYmFsbDtcbiAgfVxuXG4gIGRyYXdHYW1lKCkge1xuICAgIHRoaXMuZ2FtZVN0YXR1cyA9IDE7XG4gICAgbGV0IHByb21pc2UgPSB0aGlzLmN1cnRhaW4uYW5pbWF0ZSgpO1xuICAgIHByb21pc2VcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5nYW1lU3RhdHVzID0gMjtcbiAgICAgICAgcmV0dXJuIHRoaXMuY291cnQuYW5pbWF0ZSgpO1xuICAgICAgfSlcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5nYW1lU3RhdHVzID0gMztcbiAgICAgICAgbGV0IHBsYXllcnNSZWFkeSA9IHRoaXMucGxheWVycy5yZWFkeSgpO1xuICAgICAgICBsZXQgYWxsUmVhZHlQcm9taXNlID0gUHJvbWlzZS5hbGwoW1xuICAgICAgICAgIHBsYXllcnNSZWFkeVxuICAgICAgICBdKVxuICAgICAgICByZXR1cm4gYWxsUmVhZHlQcm9taXNlO1xuICAgICAgfSlcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5nYW1lU3RhdHVzID0gNDtcbiAgICAgICAgbGV0IGdhbWVSZWFkeVByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcbiAgICAgICAgICB0aGlzLmluaXRHYW1lRGF0YVVwZGF0ZUludGVydmFsKCk7XG4gICAgICAgICAgcmVzKCk7XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBnYW1lUmVhZHlQcm9taXNlO1xuICAgICAgfSlcbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfVxuXG4gIGluaXRHYW1lRGF0YVVwZGF0ZUludGVydmFsKCkge1xuICAgIHRoaXMucGxheWVycy5sb29wVXBkYXRlKCk7XG4gIH1cblxuXG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdhbWVCdWlsZGVyKCkge1xuICBsZXQgZ2FtZSA9IGJvb3QoRW5naW5lLCBERUZBVUxULCB7fSwgZG9jdW1lbnQuYm9keSk7XG4gIHJldHVybiBnYW1lO1xufVxuIiwiaW1wb3J0IHsgcmFuZG9tV2l0aGluUmFuZ2UsIGNhbGNXYXlwb2ludHMgfSBmcm9tICcuL2Z1bmN0aW9uJztcbmltcG9ydCB7IGdldENhY2hlQ2FudmFzIH0gZnJvbSAnLi91dGlsJztcbmltcG9ydCB7IGRyYXdDaXJjbGUgfSBmcm9tICcuL3NoYXBlJztcbmltcG9ydCAncGF0aDJkLXBvbHlmaWxsJztcblxuZXhwb3J0IGNsYXNzIFN3aXJsOEJpdCB7XG4gIGNvbnN0cnVjdG9yKGN0eCkge1xuICAgIHRoaXMuY291bnRlckNsb2Nrd2lzZUFyciA9IFtcbiAgICAgIHsgbmFtZTogJ3RsJywgeDogMCwgeTogMCB9LFxuICAgICAgeyBuYW1lOiAnYmwnLCB4OiAwLCB5OiAxIH0sXG4gICAgICB7IG5hbWU6ICdicicsIHg6IDEsIHk6IDEgfSxcbiAgICAgIHsgbmFtZTogJ3RyJywgeDogMSwgeTogMCB9XG4gICAgXVxuICAgIHRoaXMuY2xvY2t3aXNlQXJyID0gW1xuICAgICAgeyBuYW1lOiAndHInLCB4OiAxLCB5OiAwIH0sXG4gICAgICB7IG5hbWU6ICdicicsIHg6IDEsIHk6IDEgfSxcbiAgICAgIHsgbmFtZTogJ2JsJywgeDogMCwgeTogMSB9LFxuICAgICAgeyBuYW1lOiAndGwnLCB4OiAwLCB5OiAwIH1cbiAgICBdXG4gICAgdGhpcy5jdHggPSBjdHg7XG4gICAgdGhpcy5jdnMgPSBjdHguY2FudmFzO1xuICAgIHRoaXMuYW5pbWF0aW9uRW5kVHJpZ2dlcjtcbiAgICB0aGlzLm9yZGVyID0gMDtcbiAgICB0aGlzLnBhdGggPSBuZXcgUGF0aDJEKCk7XG4gICAgdGhpcy5pbml0aWFsSW1hZ2UgPSBnZXRDYWNoZUNhbnZhcyh0aGlzLmN0eCk7XG4gICAgdGhpcy5iYW5kV2lkdGhTdGFjayA9IDA7XG4gIH1cbiAgZ2V0U3RhcnRMb2NhdGlvbihjbG9ja3dpc2UsIG9yZGVyLCB0b3RhbFdpZHRoLCB0b3RhbEhlaWdodCkge1xuICAgIGxldCBkaXJlY3Rpb25BcnIgPSBjbG9ja3dpc2UgPyB0aGlzLmNsb2Nrd2lzZUFyciA6IHRoaXMuY291bnRlckNsb2Nrd2lzZUFycjtcblxuICAgIGxldCBsb2NhdGlvbiA9IHtcbiAgICAgIG5hbWU6IGRpcmVjdGlvbkFycltvcmRlcl0ubmFtZSxcbiAgICAgIHg6IGRpcmVjdGlvbkFycltvcmRlcl0ueCAqIHRvdGFsV2lkdGggKyB0aGlzLmJhbmRXaWR0aFN0YWNrLFxuICAgICAgeTogZGlyZWN0aW9uQXJyW29yZGVyXS55ICogdG90YWxIZWlnaHQgKyB0aGlzLmJhbmRXaWR0aFN0YWNrXG4gICAgfVxuICAgIHJldHVybiBsb2NhdGlvbjtcbiAgfVxuICBhbmltYXRlKGNsb2Nrd2lzZSA9IGZhbHNlLCBiYW5kV2lkdGggPSAyMCwgY29sb3IgPSAncmdiYSgwLDAsMCwxKScpIHtcbiAgICBsZXQgYW5pbWF0aW9uUHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xuICAgICAgdGhpcy5hbmltYXRpb25FbmRUcmlnZ2VyID0gcmVzO1xuICAgIH0pXG4gICAgdGhpcy5kcmF3U3dpcmwoY2xvY2t3aXNlLCBiYW5kV2lkdGgsIGNvbG9yKTtcblxuICAgIHJldHVybiBhbmltYXRpb25Qcm9taXNlO1xuICB9XG5cbiAgZHJhd1N3aXJsKGNsb2Nrd2lzZSwgYmFuZFdpZHRoLCBjb2xvcikge1xuICAgIGxldCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHRoaXMucGF0aC5hZGRQYXRoKHRoaXMuZHJhV1JhbmRvbUFuZ2xlZEJhbmRQYXRoKFxuICAgICAgICBiYW5kV2lkdGgsXG4gICAgICAgIHRoaXMuY3ZzLndpZHRoIC0gMiAqIHRoaXMuYmFuZFdpZHRoU3RhY2ssXG4gICAgICAgIHRoaXMuY3ZzLmhlaWdodCAtIDIgKiB0aGlzLmJhbmRXaWR0aFN0YWNrLFxuICAgICAgICB0aGlzLmdldFN0YXJ0TG9jYXRpb24oY2xvY2t3aXNlLCB0aGlzLm9yZGVyLCB0aGlzLmN2cy53aWR0aCAtIDIgKiB0aGlzLmJhbmRXaWR0aFN0YWNrLCB0aGlzLmN2cy5oZWlnaHQgLSAyICogdGhpcy5iYW5kV2lkdGhTdGFjayksXG4gICAgICAgIGNvbG9yLFxuICAgICAgICBjbG9ja3dpc2VcbiAgICAgICkpXG4gICAgICB0aGlzLmN0eC5maWxsKHRoaXMucGF0aCk7XG4gICAgICBpZiAodGhpcy5jdnMud2lkdGggLSAyICogdGhpcy5iYW5kV2lkdGhTdGFjayA+IDAgJiYgdGhpcy5jdnMuaGVpZ2h0IC0gMiAqIHRoaXMuYmFuZFdpZHRoU3RhY2sgPiAwKSB7XG5cbiAgICAgICAgaWYgKHRoaXMub3JkZXIgPCAzKSB7XG4gICAgICAgICAgdGhpcy5vcmRlcisrXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdGhpcy5vcmRlciA9IDA7XG4gICAgICAgICAgdGhpcy5iYW5kV2lkdGhTdGFjayArPSBiYW5kV2lkdGg7XG5cbiAgICAgICAgfVxuXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uRW5kVHJpZ2dlcigpO1xuICAgICAgfVxuXG4gICAgfSwgMzApXG4gIH1cblxuICBkcmFXUmFuZG9tQW5nbGVkQmFuZFBhdGgoYmFuZFdpZHRoLCB3aWR0aCwgaGVpZ2h0LCBwb2ludCwgY29sb3IsIGNsb2Nrd2lzZSkge1xuICAgIGxldCBwYXRoID0gbmV3IFBhdGgyRCgpO1xuICAgIGlmIChwb2ludC5uYW1lID09PSAndGwnKSB7XG4gICAgICB0aGlzLmRyYXdBbmdsZWRCYW5kRnJvbVRMKHBhdGgsIGJhbmRXaWR0aCwgd2lkdGgsIGhlaWdodCwgcG9pbnQsIGNsb2Nrd2lzZSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHBvaW50Lm5hbWUgPT09ICdibCcpIHtcbiAgICAgIHRoaXMuZHJhd0FuZ2xlZEJhbmRGcm9tQkwocGF0aCwgYmFuZFdpZHRoLCB3aWR0aCwgaGVpZ2h0LCBwb2ludCwgY2xvY2t3aXNlKTtcbiAgICB9XG4gICAgZWxzZSBpZiAocG9pbnQubmFtZSA9PT0gJ2JyJykge1xuICAgICAgdGhpcy5kcmF3QW5nbGVkQmFuZEZyb21CUihwYXRoLCBiYW5kV2lkdGgsIHdpZHRoLCBoZWlnaHQsIHBvaW50LCBjbG9ja3dpc2UpO1xuICAgIH1cbiAgICBlbHNlIGlmIChwb2ludC5uYW1lID09PSAndHInKSB7XG4gICAgICB0aGlzLmRyYXdBbmdsZWRCYW5kRnJvbVRSKHBhdGgsIGJhbmRXaWR0aCwgd2lkdGgsIGhlaWdodCwgcG9pbnQsIGNsb2Nrd2lzZSk7XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xuICB9XG4gIGRyYXdBbmdsZWRCYW5kRnJvbVRMKHBhdGgsIGJhbmRXaWR0aCwgd2lkdGgsIGhlaWdodCwgcG9pbnQsIGNsb2Nrd2lzZSkge1xuICAgIHBhdGgubW92ZVRvKHBvaW50LngsIHBvaW50LnkpO1xuICAgIGlmIChjbG9ja3dpc2UpIHtcbiAgICAgIGxldCByYW5kb21IZWlnaHQgPSByYW5kb21XaXRoaW5SYW5nZSgwLjUgKiBoZWlnaHQsIDAuOSAqIGhlaWdodCk7XG4gICAgICBwYXRoLmxpbmVUbyhwb2ludC54ICsgd2lkdGgsIHBvaW50LnkpO1xuICAgICAgcGF0aC5saW5lVG8ocG9pbnQueCArIHdpZHRoLCBwb2ludC55ICsgcmFuZG9tSGVpZ2h0KTtcbiAgICAgIHBhdGgubGluZVRvKHBvaW50LnggKyB3aWR0aCAtIGJhbmRXaWR0aCwgcG9pbnQueSArIHJhbmRvbUhlaWdodCk7XG4gICAgICBwYXRoLmxpbmVUbyhwb2ludC54ICsgd2lkdGggLSBiYW5kV2lkdGgsIHBvaW50LnkgKyBiYW5kV2lkdGgpO1xuICAgICAgcGF0aC5saW5lVG8ocG9pbnQueCwgcG9pbnQueSArIGJhbmRXaWR0aCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgbGV0IHJhbmRvbVdpZHRoID0gcmFuZG9tV2l0aGluUmFuZ2UoMC41ICogd2lkdGgsIDAuOSAqIHdpZHRoKTtcbiAgICAgIHBhdGgubGluZVRvKHBvaW50LnggKyBiYW5kV2lkdGgsIHBvaW50LnkpO1xuICAgICAgcGF0aC5saW5lVG8ocG9pbnQueCArIGJhbmRXaWR0aCwgcG9pbnQueSArIGhlaWdodCAtIGJhbmRXaWR0aCk7XG4gICAgICBwYXRoLmxpbmVUbyhwb2ludC54ICsgcmFuZG9tV2lkdGgsIHBvaW50LnkgKyBoZWlnaHQgLSBiYW5kV2lkdGgpO1xuICAgICAgcGF0aC5saW5lVG8ocG9pbnQueCArIHJhbmRvbVdpZHRoLCBwb2ludC55ICsgaGVpZ2h0KTtcbiAgICAgIHBhdGgubGluZVRvKHBvaW50LngsIHBvaW50LnkgKyBoZWlnaHQpO1xuICAgIH1cbiAgfVxuICBkcmF3QW5nbGVkQmFuZEZyb21CTChwYXRoLCBiYW5kV2lkdGgsIHdpZHRoLCBoZWlnaHQsIHBvaW50LCBjbG9ja3dpc2UpIHtcbiAgICBwYXRoLm1vdmVUbyhwb2ludC54LCBwb2ludC55KTtcbiAgICBpZiAoY2xvY2t3aXNlKSB7XG4gICAgICBsZXQgcmFuZG9tV2lkdGggPSByYW5kb21XaXRoaW5SYW5nZSgwLjUgKiB3aWR0aCwgMC45ICogd2lkdGgpO1xuICAgICAgcGF0aC5saW5lVG8ocG9pbnQueCArIGJhbmRXaWR0aCwgcG9pbnQueSk7XG4gICAgICBwYXRoLmxpbmVUbyhwb2ludC54ICsgYmFuZFdpZHRoLCBwb2ludC55IC0gaGVpZ2h0ICsgYmFuZFdpZHRoKTtcbiAgICAgIHBhdGgubGluZVRvKHBvaW50LnggKyByYW5kb21XaWR0aCwgcG9pbnQueSAtIGhlaWdodCArIGJhbmRXaWR0aCk7XG4gICAgICBwYXRoLmxpbmVUbyhwb2ludC54ICsgcmFuZG9tV2lkdGgsIHBvaW50LnkgLSBoZWlnaHQpO1xuICAgICAgcGF0aC5saW5lVG8ocG9pbnQueCwgcG9pbnQueSAtIGhlaWdodCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgbGV0IHJhbmRvbUhlaWdodCA9IHJhbmRvbVdpdGhpblJhbmdlKDAuNSAqIGhlaWdodCwgMC45ICogaGVpZ2h0KTtcbiAgICAgIHBhdGgubGluZVRvKHBvaW50LngsIHBvaW50LnkgLSBiYW5kV2lkdGgpO1xuICAgICAgcGF0aC5saW5lVG8ocG9pbnQueCArIHdpZHRoIC0gYmFuZFdpZHRoLCBwb2ludC55IC0gYmFuZFdpZHRoKTtcbiAgICAgIHBhdGgubGluZVRvKHBvaW50LnggKyB3aWR0aCAtIGJhbmRXaWR0aCwgcG9pbnQueSAtIHJhbmRvbUhlaWdodCk7XG4gICAgICBwYXRoLmxpbmVUbyhwb2ludC54ICsgd2lkdGgsIHBvaW50LnkgLSByYW5kb21IZWlnaHQpO1xuICAgICAgcGF0aC5saW5lVG8ocG9pbnQueCArIHdpZHRoLCBwb2ludC55KTtcbiAgICB9XG4gIH1cbiAgZHJhd0FuZ2xlZEJhbmRGcm9tQlIocGF0aCwgYmFuZFdpZHRoLCB3aWR0aCwgaGVpZ2h0LCBwb2ludCwgY2xvY2t3aXNlKSB7XG4gICAgcGF0aC5tb3ZlVG8ocG9pbnQueCwgcG9pbnQueSk7XG4gICAgaWYgKGNsb2Nrd2lzZSkge1xuICAgICAgbGV0IHJhbmRvbUhlaWdodCA9IHJhbmRvbVdpdGhpblJhbmdlKDAuNSAqIGhlaWdodCwgMC45ICogaGVpZ2h0KTtcbiAgICAgIHBhdGgubGluZVRvKHBvaW50LngsIHBvaW50LnkgLSBiYW5kV2lkdGgpO1xuICAgICAgcGF0aC5saW5lVG8ocG9pbnQueCAtIHdpZHRoICsgYmFuZFdpZHRoLCBwb2ludC55IC0gYmFuZFdpZHRoKTtcbiAgICAgIHBhdGgubGluZVRvKHBvaW50LnggLSB3aWR0aCArIGJhbmRXaWR0aCwgcG9pbnQueSAtIHJhbmRvbUhlaWdodCk7XG4gICAgICBwYXRoLmxpbmVUbyhwb2ludC54IC0gd2lkdGgsIHBvaW50LnkgLSByYW5kb21IZWlnaHQpO1xuICAgICAgcGF0aC5saW5lVG8ocG9pbnQueCAtIHdpZHRoLCBwb2ludC55KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBsZXQgcmFuZG9tV2lkdGggPSByYW5kb21XaXRoaW5SYW5nZSgwLjUgKiB3aWR0aCwgMC45ICogd2lkdGgpO1xuICAgICAgcGF0aC5saW5lVG8ocG9pbnQueCAtIGJhbmRXaWR0aCwgcG9pbnQueSk7XG4gICAgICBwYXRoLmxpbmVUbyhwb2ludC54IC0gYmFuZFdpZHRoLCBwb2ludC55IC0gaGVpZ2h0ICsgYmFuZFdpZHRoKTtcbiAgICAgIHBhdGgubGluZVRvKHBvaW50LnggLSByYW5kb21XaWR0aCwgcG9pbnQueSAtIGhlaWdodCArIGJhbmRXaWR0aCk7XG4gICAgICBwYXRoLmxpbmVUbyhwb2ludC54IC0gcmFuZG9tV2lkdGgsIHBvaW50LnkgLSBoZWlnaHQpO1xuICAgICAgcGF0aC5saW5lVG8ocG9pbnQueCwgcG9pbnQueSAtIGhlaWdodCk7XG4gICAgfVxuICB9XG4gIGRyYXdBbmdsZWRCYW5kRnJvbVRSKHBhdGgsIGJhbmRXaWR0aCwgd2lkdGgsIGhlaWdodCwgcG9pbnQsIGNsb2Nrd2lzZSkge1xuICAgIHBhdGgubW92ZVRvKHBvaW50LngsIHBvaW50LnkpO1xuICAgIGlmIChjbG9ja3dpc2UpIHtcbiAgICAgIGxldCByYW5kb21XaWR0aCA9IHJhbmRvbVdpdGhpblJhbmdlKDAuNSAqIHdpZHRoLCAwLjkgKiB3aWR0aCk7XG4gICAgICBwYXRoLmxpbmVUbyhwb2ludC54IC0gYmFuZFdpZHRoLCBwb2ludC55KTtcbiAgICAgIHBhdGgubGluZVRvKHBvaW50LnggLSBiYW5kV2lkdGgsIHBvaW50LnkgKyBoZWlnaHQgLSBiYW5kV2lkdGgpO1xuICAgICAgcGF0aC5saW5lVG8ocG9pbnQueCAtIHJhbmRvbVdpZHRoLCBwb2ludC55ICsgaGVpZ2h0IC0gYmFuZFdpZHRoKTtcbiAgICAgIHBhdGgubGluZVRvKHBvaW50LnggLSByYW5kb21XaWR0aCwgcG9pbnQueSArIGhlaWdodCk7XG4gICAgICBwYXRoLmxpbmVUbyhwb2ludC54LCBwb2ludC55ICsgaGVpZ2h0KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBsZXQgcmFuZG9tSGVpZ2h0ID0gcmFuZG9tV2l0aGluUmFuZ2UoMC41ICogaGVpZ2h0LCAwLjkgKiBoZWlnaHQpO1xuICAgICAgcGF0aC5saW5lVG8ocG9pbnQueCwgcG9pbnQueSArIGJhbmRXaWR0aCk7XG4gICAgICBwYXRoLmxpbmVUbyhwb2ludC54IC0gd2lkdGggKyBiYW5kV2lkdGgsIHBvaW50LnkgKyBiYW5kV2lkdGgpO1xuICAgICAgcGF0aC5saW5lVG8ocG9pbnQueCAtIHdpZHRoICsgYmFuZFdpZHRoLCBwb2ludC55ICsgcmFuZG9tSGVpZ2h0KTtcbiAgICAgIHBhdGgubGluZVRvKHBvaW50LnggLSB3aWR0aCwgcG9pbnQueSArIHJhbmRvbUhlaWdodCk7XG4gICAgICBwYXRoLmxpbmVUbyhwb2ludC54IC0gd2lkdGgsIHBvaW50LnkpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU3Ryb2tlQW5pbWF0aW9uIHtcbiAgY29uc3RydWN0b3IoY3R4LCB2ZXJ0aWNlcykge1xuICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgIHRoaXMud2F5cG9pbnRzID0gY2FsY1dheXBvaW50cyh2ZXJ0aWNlcyk7XG4gIH1cblxuICBhbmltYXRlKGJhbmRXaWR0aCA9IDIwLCBjb2xvciA9ICdyZ2JhKDI1NSwyNTUsMjU1LDEpJywgZmxpY2tlciA9IHRydWUsIGRhc2ggPSBbXSwgZ2xvd2luZyA9ICd3aGl0ZScsIGdsb3dpbmdTaXplID0gNDApIHtcbiAgICBsZXQgYW5pbWF0aW9uUHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xuICAgICAgdGhpcy5hbmltYXRpb25FbmRUcmlnZ2VyID0gcmVzO1xuICAgICAgdGhpcy5sb29waW5nRHJhd1N0cm9rZShiYW5kV2lkdGgsIGNvbG9yLCBmbGlja2VyLCBkYXNoLCBnbG93aW5nLCBnbG93aW5nU2l6ZSwpO1xuICAgIH0pXG5cbiAgICByZXR1cm4gYW5pbWF0aW9uUHJvbWlzZTtcbiAgfVxuXG4gIGxvb3BpbmdEcmF3U3Ryb2tlKGJhbmRXaWR0aCwgY29sb3IsIGZsaWNrZXIsIGRhc2gsIGdsb3dpbmcsIGdsb3dpbmdTaXplLCBmcHMgPSA2MCkge1xuICAgIGxldCBjb3VudGVyID0gMDtcbiAgICBsZXQgJHRoaXMgPSB0aGlzO1xuICAgIHRoaXMuY3R4LnNhdmUoKTtcbiAgICB0aGlzLmN0eC5saW5lQ2FwID0gJ3NxdWFyZSdcbiAgICBpZiAoZGFzaC5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmN0eC5zZXRMaW5lRGFzaChkYXNoKTtcbiAgICB9XG4gICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSBjb2xvcjtcbiAgICB0aGlzLmN0eC5saW5lV2lkdGggPSBiYW5kV2lkdGg7XG4gICAgdGhpcy5jdHguc2hhZG93Q29sb3IgPSBnbG93aW5nO1xuICAgIHRoaXMuY3R4LnNoYWRvd0JsdXIgPSBnbG93aW5nU2l6ZTtcbiAgICBsZXQgZmxpY2tlclJhbmdlID0gMDtcblxuICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgIGxldCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGlmIChjb3VudGVyIDwgJHRoaXMud2F5cG9pbnRzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgJHRoaXMuY3R4Lm1vdmVUbygkdGhpcy53YXlwb2ludHNbY291bnRlcl0ueCwgJHRoaXMud2F5cG9pbnRzW2NvdW50ZXJdLnkpO1xuICAgICAgICAkdGhpcy5jdHgubGluZVRvKCR0aGlzLndheXBvaW50c1tjb3VudGVyICsgMV0ueCwgJHRoaXMud2F5cG9pbnRzW2NvdW50ZXIgKyAxXS55KTtcbiAgICAgICAgaWYgKGZsaWNrZXIpIHtcbiAgICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jdHguY2FudmFzLndpZHRoLCB0aGlzLmN0eC5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICB0aGlzLmN0eC5nbG9iYWxBbHBoYSA9IHJhbmRvbVdpdGhpblJhbmdlKGZsaWNrZXJSYW5nZSwgMSk7XG4gICAgICAgICAgZmxpY2tlclJhbmdlICs9IChmcHMgLyAxMDAwMCk7XG4gICAgICAgIH1cbiAgICAgICAgJHRoaXMuY3R4LnN0cm9rZSgpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAkdGhpcy5jdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICR0aGlzLmN0eC5yZXN0b3JlKCk7XG4gICAgICAgICR0aGlzLmFuaW1hdGlvbkVuZFRyaWdnZXIoKTtcbiAgICAgIH1cbiAgICAgIGNvdW50ZXIrKztcbiAgICB9LCAxMDAwIC8gZnBzKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTdGFyU2t5IHtcbiAgY29uc3RydWN0b3IoY3R4KSB7XG4gICAgdGhpcy5jdHggPSBjdHg7XG4gICAgdGhpcy5jdnMgPSBjdHguY2FudmFzO1xuICAgIHRoaXMuc3RhcnMgPSBbXTtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuICBpbml0KCkge1xuICAgIHRoaXMuZ2VuU3RhcnMoKTtcblxuICB9XG4gIGdlblN0YXJzKG51bWJlciA9IDEwMCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtYmVyOyBpKyspIHtcbiAgICAgIGxldCBzdGFyID0ge1xuICAgICAgICB4OiByYW5kb21XaXRoaW5SYW5nZSgwLCB0aGlzLmN2cy53aWR0aCksXG4gICAgICAgIHk6IHJhbmRvbVdpdGhpblJhbmdlKDAsIHRoaXMuY3ZzLmhlaWdodCksXG4gICAgICAgIGNvbG9yOiBgcmdiYSgyNTUsMjU1LDI1NSwke3JhbmRvbVdpdGhpblJhbmdlKDAuMjUsIDEpfSlgLFxuICAgICAgICBzaXplOiByYW5kb21XaXRoaW5SYW5nZSgyLCA1KSxcbiAgICAgIH1cbiAgICAgIHRoaXMuc3RhcnMucHVzaChzdGFyKTtcbiAgICB9XG4gIH1cbiAgZHJhdygpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3RhcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRyYXdDaXJjbGUodGhpcy5jdHgsIHRoaXMuc3RhcnNbaV0ueCwgdGhpcy5zdGFyc1tpXS55LCB0aGlzLnN0YXJzW2ldLnNpemUsIHRoaXMuc3RhcnNbaV0uY29sb3IpO1xuICAgIH1cbiAgfVxufSIsImltcG9ydCB7IGRlYm91bmNlLCBpcywgcG9pbnRlckV2ZW50VG9YWSB9IGZyb20gJy4vZnVuY3Rpb24nO1xuXG5leHBvcnQgY2xhc3MgQ2FudmFzMkRGeEJhc2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBlbGUsIGNvbmZpZyA9IHt9LCBkZWZhdWx0Q29uZmlnID0ge30sIHZpcnR1YWxQYXJlbnRcbiAgKSB7XG4gICAgY29uZmlnID0gaXMub2JqKGNvbmZpZykgPyBjb25maWcgOiB7fTtcbiAgICBkZWZhdWx0Q29uZmlnID0gaXMub2JqKGRlZmF1bHRDb25maWcpID8gZGVmYXVsdENvbmZpZyA6IHt9O1xuICAgIHRoaXMuY29uZmlnID0gT2JqZWN0LmFzc2lnbihkZWZhdWx0Q29uZmlnLCBjb25maWcpO1xuICAgIHRoaXMuZWxlID0gZWxlO1xuICAgIHRoaXMuZnJhbWVDb3VudCA9IDA7XG4gICAgdGhpcy5tb3VzZSA9IHtcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwXG4gICAgfTtcbiAgICB0aGlzLnZpcnR1YWxQYXJlbnQgPSB2aXJ0dWFsUGFyZW50O1xuICAgIHRoaXMuY3R4ID0gbnVsbDtcbiAgICB0aGlzLmZyYW1lSXNQYXVzZWQgPSBmYWxzZTtcbiAgICB0aGlzLmlzQ2xpY2sgPSBmYWxzZTtcbiAgICB0aGlzLmNhbnZhc1NpemVmaXhlZCA9IGZhbHNlO1xuICAgIHRoaXMucHJldmlvdXNGcmFtZVRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICB0aGlzLmlzUmVzaXppbmcgPSBmYWxzZTtcbiAgICB0aGlzLmlzUmVzaXppbmdDYWxsYmFjayA9ICgpID0+IHsgfTtcbiAgICB0aGlzLnJlc2l6ZWRDYWxsYmFjayA9ICgpID0+IHsgfTtcbiAgICB0aGlzLmluaXRCYXNlKCk7XG4gIH1cbiAgaW5pdEJhc2UoKSB7XG5cbiAgICBpZiAodGhpcy5lbGUudGFnTmFtZSAhPT0gJ0NBTlZBUycpIHtcbiAgICAgIGNvbnN0IGN2cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuXG4gICAgICB0aGlzLmVsZS5hcHBlbmRDaGlsZChjdnMpO1xuXG4gICAgICB0aGlzLmN2cyA9IGN2cztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmN2cyA9IHRoaXMuZWxlO1xuICAgIH1cblxuICAgIHRoaXMuY3R4ID0gdGhpcy5jdnMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICB0aGlzLnRyaWdnZXJSZXNpemluZ01lY2hhbmlzbSgpO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgICAgIHRoaXMuaXNSZXNpemluZyA9IHRydWU7XG4gICAgICB0aGlzLmlzUmVzaXppbmdDYWxsYmFjaygpO1xuICAgIH0pO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGRlYm91bmNlKCgpID0+IHtcbiAgICAgIHRoaXMuaXNSZXNpemluZyA9IGZhbHNlO1xuICAgICAgdGhpcy50cmlnZ2VyUmVzaXppbmdNZWNoYW5pc20oKTtcbiAgICAgIHRoaXMucmVzaXplZENhbGxiYWNrKCk7XG4gICAgfSwgNTAwKSk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndmlzaWJpbGl0eWNoYW5nZScsICgpID0+IHtcbiAgICAgIGlmIChkb2N1bWVudC52aXNpYmlsaXR5U3RhdGUgIT09IFwidmlzaWJsZVwiKSB7XG4gICAgICAgIHRoaXMuZnJhbWVJc1BhdXNlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLmFkZEV2ZW50SGFuZGxlcigpO1xuXG4gICAgdGhpcy5yZWZyZXNoQmFzZUZyYW1lQ291bnRlcigpO1xuXG4gIH1cbiAgcmVmcmVzaEJhc2VGcmFtZUNvdW50ZXIoKSB7XG4gICAgbGV0IHRoaXNGcmFtZVRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICB0aGlzLnRpbWVFbGFwc2VkID0gKHRoaXNGcmFtZVRpbWUgLSB0aGlzLnByZXZpb3VzRnJhbWVUaW1lKSAvIDEwMDA7XG4gICAgaWYgKHRoaXMuZnJhbWVJc1BhdXNlZCkge1xuICAgICAgdGhpcy50aW1lRWxhcHNlZCA9IDA7XG4gICAgICB0aGlzLmZyYW1lSXNQYXVzZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5mcmFtZUNvdW50ICs9IDE7XG4gICAgdGhpcy5wcmV2aW91c0ZyYW1lVGltZSA9IHRoaXNGcmFtZVRpbWVcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgdGhpcy5yZWZyZXNoQmFzZUZyYW1lQ291bnRlcigpO1xuICAgIH0pXG4gIH1cblxuICB2aXJ0dWFsUGFyZW50VmFsaWRhdGlvbigpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuYm9keS5jb250YWlucyh0aGlzLnZpcnR1YWxQYXJlbnQpIHx8IHRoaXMudmlydHVhbFBhcmVudCA9PT0gZG9jdW1lbnQuYm9keTtcbiAgfVxuXG4gIHRyaWdnZXJSZXNpemluZ01lY2hhbmlzbSgpIHtcbiAgICBpZiAodGhpcy5jYW52YXNTaXplZml4ZWQpIHJldHVybjtcbiAgICBsZXQgY2FjaGVDdnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICBsZXQgY2FjaGVDdnNDb250ZXh0ID0gY2FjaGVDdnMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjYWNoZUN2cy53aWR0aCA9IHRoaXMuY3ZzLndpZHRoO1xuICAgIGNhY2hlQ3ZzLmhlaWdodCA9IHRoaXMuY3ZzLmhlaWdodDtcblxuXG5cbiAgICBpZiAodGhpcy5lbGUudGFnTmFtZSAhPT0gJ0NBTlZBUycpIHtcbiAgICAgIGxldCBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0O1xuICAgICAgaWYgKHRoaXMudmlydHVhbFBhcmVudFZhbGlkYXRpb24oKSkge1xuICAgICAgICBjYW52YXNXaWR0aCA9IHRoaXMudmlydHVhbFBhcmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcbiAgICAgICAgY2FudmFzSGVpZ2h0ID0gdGhpcy52aXJ0dWFsUGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjYW52YXNXaWR0aCA9IHRoaXMuZWxlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICAgICAgICBjYW52YXNIZWlnaHQgPSB0aGlzLmVsZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY3ZzLndpZHRoID0gY2FudmFzV2lkdGg7XG4gICAgICB0aGlzLmN2cy5oZWlnaHQgPSBjYW52YXNIZWlnaHQ7XG5cblxuXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgbGV0IGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQ7XG4gICAgICBpZiAodGhpcy52aXJ0dWFsUGFyZW50VmFsaWRhdGlvbigpKSB7XG4gICAgICAgIGNhbnZhc1dpZHRoID0gdGhpcy52aXJ0dWFsUGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICAgICAgICBjYW52YXNIZWlnaHQgPSB0aGlzLnZpcnR1YWxQYXJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNhbnZhc1dpZHRoID0gdGhpcy5jdnMucGFyZW50RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcbiAgICAgICAgY2FudmFzSGVpZ2h0ID0gdGhpcy5jdnMucGFyZW50RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG4gICAgICB9XG4gICAgICB0aGlzLmN2cy53aWR0aCA9IGNhbnZhc1dpZHRoO1xuICAgICAgdGhpcy5jdnMuaGVpZ2h0ID0gY2FudmFzSGVpZ2h0O1xuXG4gICAgfVxuXG4gIH1cblxuICBzZXRDYW52YXNTaXplKHdpZHRoLCBoZWlnaHQpIHtcbiAgICB0aGlzLmNhbnZhc1NpemVmaXhlZCA9IHRydWU7XG4gICAgdGhpcy5jdnMud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLmN2cy5oZWlnaHQgPSBoZWlnaHQ7XG4gIH1cblxuICBiYWNrZ3JvdW5kKGNvbG9yKSB7XG4gICAgdGhpcy5jdHguc2F2ZSgpO1xuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgIHRoaXMuY3R4LmZpbGxSZWN0KDAsIDAsIHRoaXMuY3ZzLndpZHRoLCB0aGlzLmN2cy5oZWlnaHQpO1xuICAgIHRoaXMuY3R4LnJlc3RvcmUoKTtcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmN2cy53aWR0aCwgdGhpcy5jdnMuaGVpZ2h0KTtcbiAgfVxuXG4gIGFkZEV2ZW50SGFuZGxlcigpIHtcblxuICAgIHRoaXMuY3ZzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5pc0NsaWNrID0gdHJ1ZTtcbiAgICB9KVxuICAgIHRoaXMuY3ZzLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCAoKSA9PiB7XG4gICAgICB0aGlzLmlzQ2xpY2sgPSB0cnVlO1xuXG4gICAgfSlcblxuICAgIHRoaXMuY3ZzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChlKSA9PiB7XG4gICAgICBsZXQgcG9zID0gcG9pbnRlckV2ZW50VG9YWShlKTtcbiAgICAgIHRoaXMubW91c2UgPSB7XG4gICAgICAgIHg6IHBvcy54LFxuICAgICAgICB5OiBwb3MueVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLmN2cy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCAoZSkgPT4ge1xuICAgICAgbGV0IHBvcyA9IHBvaW50ZXJFdmVudFRvWFkoZSk7XG4gICAgICB0aGlzLm1vdXNlID0ge1xuICAgICAgICB4OiBwb3MueCxcbiAgICAgICAgeTogcG9zLnlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgY3JlYXRlVmlydHVhbENhbnZhc0Jhc2VJbnN0YW5jZSgpIHtcbiAgICBsZXQgdmN2cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIGxldCB2Y3ZzSW5zdGFuY2UgPSBuZXcgQ2FudmFzMkRGeEJhc2UodmN2cywge30sIHt9LCB0aGlzLmVsZSk7XG4gICAgcmV0dXJuIHZjdnNJbnN0YW5jZTtcbiAgfVxuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib290KGN0b3IsIGRlZmF1bHRDb25maWcsIGNvbmZpZywgdGFyZ2V0RWxlLCB2aXJ0dWFsUGFyZW50KSB7XG4gIGxldCBjdnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyk7XG4gIGN2cyA9IGN2cyA/IGN2cyA6IGRvY3VtZW50LmJvZHk7XG4gIGxldCBlbGUgPSB0YXJnZXRFbGUgPyB0YXJnZXRFbGUgOiBjdnM7XG4gIGxldCB0cmlnZ2VyO1xuICBsZXQgYm9vdFByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcbiAgICB0cmlnZ2VyID0gKCkgPT4ge1xuICAgICAgbGV0IGluc3RhbmNlID0gbmV3IGN0b3IoZWxlLCBjb25maWcsIGRlZmF1bHRDb25maWcsIHZpcnR1YWxQYXJlbnQpO1xuICAgICAgcmVzKGluc3RhbmNlKTtcbiAgICB9O1xuICB9KTtcblxuICBsZXQgY29udHJvbGxlciA9IHtcbiAgICBwcm9taXNlOiBib290UHJvbWlzZSxcbiAgICB0cmlnZ2VyOiB0cmlnZ2VyLFxuICB9XG5cbiAgcmV0dXJuIGNvbnRyb2xsZXI7XG59IiwiZXhwb3J0IGZ1bmN0aW9uICQoc2VsZWN0b3IpIHtcbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlKHNlbGVjdG9yLCBzdGF0dXMpIHtcbiAgbGV0IHN0eWxlU3RyID0gc3RhdHVzID8gJ2Jsb2NrJyA6ICdub25lJ1xuICAkKHNlbGVjdG9yKS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgYGRpc3BsYXk6JHtzdHlsZVN0cn1gKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZUNsYXNzKHNlbGVjdG9yLCBjbGFzc25hbWUsIHN0YXR1cykge1xuICBsZXQgYWN0aW9uID0gc3RhdHVzID8gJ2FkZCcgOiAncmVtb3ZlJztcbiAgJChzZWxlY3RvcikuY2xhc3NMaXN0W2FjdGlvbl0oY2xhc3NuYW1lKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVtaXQoZXZlbnROYW1lKSB7XG4gIGxldCBzb21lRXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKTtcbiAgc29tZUV2ZW50LmluaXRFdmVudChldmVudE5hbWUsIHRydWUsIHRydWUpO1xuICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KHNvbWVFdmVudCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJlbnRzKG5vZGUsIHNlbGVjdG9yKSB7XG4gIGxldCBjdXJyZW50ID0gbm9kZSxcbiAgICBsaXN0ID0gW107XG4gIHdoaWxlIChjdXJyZW50LnBhcmVudE5vZGUgIT0gbnVsbCAmJiBjdXJyZW50LnBhcmVudE5vZGUgIT0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgbGlzdC5wdXNoKGN1cnJlbnQucGFyZW50Tm9kZSk7XG4gICAgY3VycmVudCA9IGN1cnJlbnQucGFyZW50Tm9kZTtcbiAgfVxuICByZXR1cm4gbGlzdC5maWx0ZXIoKG8sIGkpID0+IHtcbiAgICByZXR1cm4gby5tYXRjaGVzKHNlbGVjdG9yKVxuICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmFkZU91dChlbGUsIGR1cmF0aW9uLCBjYiA9ICgpID0+IHsgZWxlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7IH0pIHtcbiAgdmFyIGZhZGVUYXJnZXQgPSBlbGU7XG4gIHZhciBmYWRlRWZmZWN0ID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgIGlmICghZmFkZVRhcmdldC5zdHlsZS5vcGFjaXR5KSB7XG4gICAgICBmYWRlVGFyZ2V0LnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgIH1cbiAgICBpZiAoZmFkZVRhcmdldC5zdHlsZS5vcGFjaXR5ID4gMCkge1xuICAgICAgZmFkZVRhcmdldC5zdHlsZS5vcGFjaXR5IC09IDEgLyBkdXJhdGlvbjtcbiAgICB9IGVsc2Uge1xuICAgICAgY2xlYXJJbnRlcnZhbChmYWRlRWZmZWN0KTtcbiAgICAgIGNiKClcbiAgICAgIGVsZS5zdHlsZS5vcGFjaXR5ID0gJyc7XG5cbiAgICB9XG4gIH0sIDEgLyBkdXJhdGlvbik7XG59IiwiY29uc3QgTWVyc2VubmVUd2lzdGVyID0gcmVxdWlyZSgnbWVyc2VubmUtdHdpc3RlcicpO1xuY29uc3QgTVQgPSBuZXcgTWVyc2VubmVUd2lzdGVyKCk7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMsIGRlbGF5KSB7XG4gIGxldCB0aW1lciA9IG51bGw7XG4gIGNvbnN0ICR0aGlzID0gdGhpcztcbiAgcmV0dXJuICgpID0+IHtcbiAgICBjb25zdCBjb250ZXh0ID0gJHRoaXM7XG4gICAgY29uc3QgYXJncyA9IGFyZ3VtZW50cztcbiAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgIHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgIH0sIGRlbGF5KTtcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IGlzID0ge1xuICBhcnI6IGEgPT4gQXJyYXkuaXNBcnJheShhKSxcbiAgb2JqOiBhID0+IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhKS5pbmRleE9mKCdPYmplY3QnKSA+IC0xLFxuICBwdGg6IGEgPT4gaXMub2JqKGEpICYmIGEuaGFzT3duUHJvcGVydHkoJ3RvdGFsTGVuZ3RoJyksXG4gIHN2ZzogYSA9PiBhIGluc3RhbmNlb2YgU1ZHRWxlbWVudCxcbiAgaW5wOiBhID0+IGEgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50LFxuICBkb206IGEgPT4gYS5ub2RlVHlwZSB8fCBpcy5zdmcoYSksXG4gIHN0cjogYSA9PiB0eXBlb2YgYSA9PT0gJ3N0cmluZycsXG4gIGZuYzogYSA9PiB0eXBlb2YgYSA9PT0gJ2Z1bmN0aW9uJyxcbiAgdW5kOiBhID0+IHR5cGVvZiBhID09PSAndW5kZWZpbmVkJyxcbiAgbmlsOiBhID0+IGlzLnVuZChhKSB8fCBhID09PSBudWxsLFxuICBoZXg6IGEgPT4gLyheI1swLTlBLUZdezZ9JCl8KF4jWzAtOUEtRl17M30kKS9pLnRlc3QoYSksXG4gIHJnYmE6IGEgPT4gL15yZ2JhLy50ZXN0KGEpLFxuICByZ2I6IGEgPT4gL15yZ2IvLnRlc3QoYSksXG4gIGhzbDogYSA9PiAvXmhzbC8udGVzdChhKSxcbiAgY29sOiBhID0+IChpcy5oZXgoYSkgfHwgaXMucmdiKGEpIHx8IGlzLmhzbChhKSksXG4gIGtleTogYSA9PiAhZGVmYXVsdEluc3RhbmNlU2V0dGluZ3MuaGFzT3duUHJvcGVydHkoYSkgJiYgIWRlZmF1bHRUd2VlblNldHRpbmdzLmhhc093blByb3BlcnR5KGEpICYmIGEgIT09ICd0YXJnZXRzJyAmJiBhICE9PSAna2V5ZnJhbWVzJyxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbVdpdGhpblJhbmdlKG1pbiwgbWF4LCBzZWVkKSB7XG4gIHJldHVybiBNVC5yYW5kb20oc2VlZCkgKiAobWF4IC0gbWluKSArIG1pbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3RhbmNlKHgwLCB5MCwgeDEsIHkxKSB7XG4gIHJldHVybiBNYXRoLnNxcnQoKHgxIC0geDApICogKHgxIC0geDApICsgKHkxIC0geTApICogKHkxIC0geTApKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZ3JlZVRvUmFkaWFuKGRlZ3JlZSkge1xuICByZXR1cm4gKGRlZ3JlZSAvIDE4MCkgKiBNYXRoLlBJO1xufVxuXG4vKipcbiAqIOe1seS4gCB0b3VjaEV2ZW50L21vdXNlRXZlbnQg55qE5LqL5Lu26Ke455m85bqn5qiZ5Y+W5b6X5pa55byPXG4gKiBAZXhwb3J0XG4gKiBAcGFyYW0ge29iamVjdH0gIOWCs+WFpeeahGV2ZW50IOeJqeS7tlxuICogQHJldHVybnMge09iamVjdH0g5LiA5YCL54mp5Lu2LCDlhaflkKvkuovku7bop7jnmbzluqfmqJnnmoRYL1kg5bqn5qiZ5YC8XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwb2ludGVyRXZlbnRUb1hZKGUpIHtcbiAgdmFyIG91dCA9IHsgeDogMCwgeTogMCB9O1xuICBpZiAoZS50eXBlID09PSAndG91Y2hzdGFydCcgfHwgZS50eXBlID09PSAndG91Y2htb3ZlJyB8fCBlLnR5cGUgPT09ICd0b3VjaGVuZCcgfHwgZS50eXBlID09PSAndG91Y2hjYW5jZWwnKSB7XG4gICAgdmFyIHRvdWNoID0gZS5vcmlnaW5hbEV2ZW50LnRvdWNoZXNbMF0gfHwgZS5vcmlnaW5hbEV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdO1xuICAgIG91dC54ID0gdG91Y2gucGFnZVg7XG4gICAgb3V0LnkgPSB0b3VjaC5wYWdlWTtcbiAgfSBlbHNlIGlmIChlLnR5cGUgPT09ICdtb3VzZWRvd24nIHx8IGUudHlwZSA9PT0gJ21vdXNldXAnIHx8IGUudHlwZSA9PT0gJ21vdXNlbW92ZScgfHwgZS50eXBlID09PSAnbW91c2VvdmVyJyB8fCBlLnR5cGUgPT09ICdtb3VzZW91dCcgfHwgZS50eXBlID09PSAnbW91c2VlbnRlcicgfHwgZS50eXBlID09PSAnbW91c2VsZWF2ZScpIHtcbiAgICBvdXQueCA9IGUucGFnZVg7XG4gICAgb3V0LnkgPSBlLnBhZ2VZO1xuICB9XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICog55u05o6l5ZG85Y+raGFzT3duUHJvcGVydHnnmoTljp/lnovmlrnms5Uo55So5ZyoaGFzT3duUHJvcGVydHnooqvmlLnli5XpgY7nmoTni4Dms4EpXG4gKlxuICogQGV4cG9ydFxuICogQHBhcmFtIHtvYmplY3R9IHRhcmdldCDnm67mqJnnianku7ZcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wIOebruaomXByb3BcbiAqIEByZXR1cm5zIHtib29sZWFufSDmmK8v5ZCmXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0YXJnZXRIYXNQcm9wKHRhcmdldCwgcHJvcCkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRhcmdldCwgcHJvcCk7XG59XG5cbi8qKlxuICog56K66KqN5LiA5YCL6K6K5pW4L+WAvOaYr+WQpueCuuepuigw5LiN566X56m65YC8KVxuICogQGV4cG9ydFxuICogQHBhcmFtIHsqfSB2YWxcbiAqIEByZXR1cm5zIHtib29sZWFufSDmmK8v5ZCmXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0VtcHR5KHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ251bWJlcicgPyBpc05hTih2YWwpIDogIXZhbDtcbn1cblxuXG5mdW5jdGlvbiByZ2JUb1JnYmEocmdiVmFsdWUpIHtcbiAgY29uc3QgcmdiID0gL3JnYlxcKChcXGQrLFxccypbXFxkXSssXFxzKltcXGRdKylcXCkvZy5leGVjKHJnYlZhbHVlKTtcbiAgcmV0dXJuIHJnYiA/IGByZ2JhKCR7cmdiWzFdfSwxKWAgOiByZ2JWYWx1ZTtcbn1cblxuZnVuY3Rpb24gaGV4VG9SZ2JhKGhleFZhbHVlKSB7XG4gIGNvbnN0IHJneCA9IC9eIz8oW2EtZlxcZF0pKFthLWZcXGRdKShbYS1mXFxkXSkkL2k7XG4gIGNvbnN0IGhleCA9IGhleFZhbHVlLnJlcGxhY2Uocmd4LCAobSwgciwgZywgYikgPT4gciArIHIgKyBnICsgZyArIGIgKyBiKTtcbiAgY29uc3QgcmdiID0gL14jPyhbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KSQvaS5leGVjKGhleCk7XG4gIGNvbnN0IHIgPSBwYXJzZUludChyZ2JbMV0sIDE2KTtcbiAgY29uc3QgZyA9IHBhcnNlSW50KHJnYlsyXSwgMTYpO1xuICBjb25zdCBiID0gcGFyc2VJbnQocmdiWzNdLCAxNik7XG4gIHJldHVybiBgcmdiYSgke3J9LCR7Z30sJHtifSwxKWA7XG59XG5cbmZ1bmN0aW9uIGhzbFRvUmdiYShoc2xWYWx1ZSkge1xuICBjb25zdCBoc2wgPSAvaHNsXFwoKFxcZCspLFxccyooW1xcZC5dKyklLFxccyooW1xcZC5dKyklXFwpL2cuZXhlYyhoc2xWYWx1ZSkgfHwgL2hzbGFcXCgoXFxkKyksXFxzKihbXFxkLl0rKSUsXFxzKihbXFxkLl0rKSUsXFxzKihbXFxkLl0rKVxcKS9nLmV4ZWMoaHNsVmFsdWUpO1xuICBjb25zdCBoID0gcGFyc2VJbnQoaHNsWzFdLCAxMCkgLyAzNjA7XG4gIGNvbnN0IHMgPSBwYXJzZUludChoc2xbMl0sIDEwKSAvIDEwMDtcbiAgY29uc3QgbCA9IHBhcnNlSW50KGhzbFszXSwgMTApIC8gMTAwO1xuICBjb25zdCBhID0gaHNsWzRdIHx8IDE7XG4gIGZ1bmN0aW9uIGh1ZTJyZ2IocCwgcSwgdCkge1xuICAgIGlmICh0IDwgMCkgdCArPSAxO1xuICAgIGlmICh0ID4gMSkgdCAtPSAxO1xuICAgIGlmICh0IDwgMSAvIDYpIHJldHVybiBwICsgKHEgLSBwKSAqIDYgKiB0O1xuICAgIGlmICh0IDwgMSAvIDIpIHJldHVybiBxO1xuICAgIGlmICh0IDwgMiAvIDMpIHJldHVybiBwICsgKHEgLSBwKSAqICgyIC8gMyAtIHQpICogNjtcbiAgICByZXR1cm4gcDtcbiAgfVxuICBsZXQgciwgZywgYjtcbiAgaWYgKHMgPT0gMCkge1xuICAgIHIgPSBnID0gYiA9IGw7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgcSA9IGwgPCAwLjUgPyBsICogKDEgKyBzKSA6IGwgKyBzIC0gbCAqIHM7XG4gICAgY29uc3QgcCA9IDIgKiBsIC0gcTtcbiAgICByID0gaHVlMnJnYihwLCBxLCBoICsgMSAvIDMpO1xuICAgIGcgPSBodWUycmdiKHAsIHEsIGgpO1xuICAgIGIgPSBodWUycmdiKHAsIHEsIGggLSAxIC8gMyk7XG4gIH1cbiAgcmV0dXJuIGByZ2JhKCR7ciAqIDI1NX0sJHtnICogMjU1fSwke2IgKiAyNTV9LCR7YX0pYDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbG9yVG9SZ2JhKHZhbCkge1xuICBpZiAoaXMucmdiKHZhbCkpIHJldHVybiByZ2JUb1JnYmEodmFsKTtcbiAgaWYgKGlzLmhleCh2YWwpKSByZXR1cm4gaGV4VG9SZ2JhKHZhbCk7XG4gIGlmIChpcy5oc2wodmFsKSkgcmV0dXJuIGhzbFRvUmdiYSh2YWwpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2hhbm5lbFZhbHVlc0Zyb21SZ2JhKHJnYmEpIHtcbiAgcmV0dXJuIHJnYmEucmVwbGFjZSgvXihyZ2J8cmdiYSlcXCgvLCAnJykucmVwbGFjZSgvXFwpJC8sICcnKS5yZXBsYWNlKC9cXHMvZywgJycpLnNwbGl0KCcsJykubWFwKHggPT4gcGFyc2VJbnQoeCkpO1xufVxuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGNXYXlwb2ludHModmVydGljZXMsIGludGVycG9sYXRlID0gMzApIHtcbiAgdmFyIHdheXBvaW50cyA9IFtdO1xuICBmb3IgKHZhciBpID0gMTsgaSA8IHZlcnRpY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHB0MCA9IHZlcnRpY2VzW2kgLSAxXTtcbiAgICB2YXIgcHQxID0gdmVydGljZXNbaV07XG4gICAgdmFyIGR4ID0gcHQxLnggLSBwdDAueDtcbiAgICB2YXIgZHkgPSBwdDEueSAtIHB0MC55O1xuICAgIGZvciAodmFyIGogPSAwOyBqIDw9IGludGVycG9sYXRlOyBqKyspIHtcbiAgICAgIHZhciB4ID0gcHQwLnggKyBkeCAqIGogLyBpbnRlcnBvbGF0ZTtcbiAgICAgIHZhciB5ID0gcHQwLnkgKyBkeSAqIGogLyBpbnRlcnBvbGF0ZTtcbiAgICAgIHdheXBvaW50cy5wdXNoKHtcbiAgICAgICAgeDogeCxcbiAgICAgICAgeTogeVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cblxuICByZXR1cm4gKHdheXBvaW50cyk7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZHJhd1NxdWFyZShjdHgsIHgsIHksIHdpZHRoLCBjb2xvciwgYWxwaGEpIHtcbiAgY3R4LnNhdmUoKTtcbiAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICBjdHguZ2xvYmFsQWxwaGEgPSBhbHBoYTtcbiAgY3R4LmZpbGxSZWN0KHggLSB3aWR0aCAvIDIsIHkgLSB3aWR0aCAvIDIsIHdpZHRoLCB3aWR0aCk7XG4gIGN0eC5yZXN0b3JlKCk7XG59XG5leHBvcnQgZnVuY3Rpb24gZHJhd1JlY3QoY3R4LCB4LCB5LCB3aWR0aCwgaGVpZ2h0LCBjb2xvciwgYWxwaGEpIHtcbiAgY3R4LnNhdmUoKTtcbiAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICBjdHguZ2xvYmFsQWxwaGEgPSBhbHBoYTtcbiAgY3R4LmZpbGxSZWN0KHggLSB3aWR0aCAvIDIsIHkgLSBoZWlnaHQgLyAyLCB3aWR0aCwgaGVpZ2h0KTtcbiAgY3R4LnJlc3RvcmUoKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBkcmF3Q2lyY2xlKGN0eCwgeCwgeSwgd2lkdGgsIGNvbG9yLCBhbHBoYSA9IDEpIHtcbiAgY3R4LnNhdmUoKVxuICBjdHguZmlsbFN0eWxlID0gY29sb3I7XG4gIGN0eC5nbG9iYWxBbHBoYSA9IGFscGhhO1xuICBjdHguYmVnaW5QYXRoKCk7XG4gIGN0eC5hcmMoeCwgeSwgd2lkdGggLyAyLCAwLCBNYXRoLlBJICogMiwgdHJ1ZSk7XG4gIGN0eC5jbG9zZVBhdGgoKTtcbiAgY3R4LmZpbGwoKTtcbiAgY3R4LnJlc3RvcmUoKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBkcmF3TGluZShjdHgsIHgwLCB5MCwgeDEsIHkxLCBzdHJva2VDb2xvciwgc3Ryb2tlV2lkdGgpIHtcbiAgY3R4LnNhdmUoKTtcbiAgY3R4LnN0cm9rZVN0eWxlID0gc3Ryb2tlQ29sb3I7XG4gIGN0eC5saW5lV2lkdGggPSBzdHJva2VXaWR0aDtcbiAgY3R4LmJlZ2luUGF0aCgpO1xuICBjdHgubW92ZVRvKHgwLCB5MCk7XG4gIGN0eC5saW5lVG8oeDEsIHkxKTtcbiAgY3R4LmNsb3NlUGF0aCgpO1xuICBjdHguc3Ryb2tlKCk7XG4gIGN0eC5yZXN0b3JlKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkcmF3VGV4dChjdHgsIHRleHRDb250ZW50ID0gJ3RleHQnLCB4LCB5LCBjb2xvciA9ICcjMDAwJywgZm9udFNpemUgPSAxMiwgZm9udCA9ICdBcmlhbCcpIHtcbiAgY3R4LnNhdmUoKTtcbiAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICBjdHguZm9udCA9IGAke2ZvbnRTaXplfXB4ICR7Zm9udH1gO1xuICBjdHguZmlsbFRleHQodGV4dENvbnRlbnQsIHgsIHkpO1xuICBjdHgucmVzdG9yZSgpO1xufVxuXG4iLCJleHBvcnQgZnVuY3Rpb24gZ2V0U2NyZWVuc2hvdEltYWdlKHRhcmdldEN2cykge1xuICBsZXQgdXJsID0gdGFyZ2V0Q3ZzLnRvRGF0YVVSTCgpO1xuICBsZXQgaW1hZ2UgPSBuZXcgSW1hZ2UodGFyZ2V0Q3ZzLndpZHRoLCB0YXJnZXRDdnMuaGVpZ2h0KTtcbiAgaW1hZ2Uuc3JjID0gdXJsO1xuICByZXR1cm4gaW1hZ2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDYWNoZUNhbnZhcyh0YXJnZXRDdHgpIHtcbiAgbGV0IGNhY2hlQ3ZzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gIGxldCBjYWNoZUN0eCA9IGNhY2hlQ3ZzLmdldENvbnRleHQoJzJkJyk7XG4gIGxldCBzb3VyY2VXaWR0aCA9IHRhcmdldEN0eC5jYW52YXMud2lkdGg7XG4gIGxldCBzb3VyY2VIZWlnaHQgPSB0YXJnZXRDdHguY2FudmFzLmhlaWdodDtcbiAgY2FjaGVDdnMud2lkdGggPSBzb3VyY2VXaWR0aDtcbiAgY2FjaGVDdnMuaGVpZ2h0ID0gc291cmNlSGVpZ2h0O1xuXG4gIGxldCBjYWNoZURhdGEgPSB0YXJnZXRDdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIHNvdXJjZVdpZHRoLCBzb3VyY2VIZWlnaHQpO1xuICBjYWNoZUN0eC5wdXRJbWFnZURhdGEoY2FjaGVEYXRhLCAwLCAwKTtcbiAgcmV0dXJuIGNhY2hlQ3ZzO1xufSIsImltcG9ydCB7IENhbnZhczJERnhCYXNlLCBib290IH0gZnJvbSAnLi9saWIvYmFzZSc7XG5pbXBvcnQgeyBkcmF3Q2lyY2xlIH0gZnJvbSAnLi9saWIvc2hhcGUnO1xuaW1wb3J0IHsgJCB9IGZyb20gJy4vbGliL2RvbSdcbmltcG9ydCB7IHRvZ2dsZSB9IGZyb20gJy4vbGliL2RvbSc7XG5cbmNvbnN0IEJBTExfQU5JTUFUSU9OX0RFRkFVTFQgPSB7XG4gIGFmdGVySW1hZ2U6IGZhbHNlLFxuICByYWRpdXM6IDI1LFxuICBjb2xvcjogJ2JsdWUnLFxuICBzcGVlZFg6IDEwMDAsXG4gIHNwZWVkWTogMTAwMCxcbiAgYWNjZWxlcmF0aW9uWDogMCxcbiAgYWNjZWxlcmF0aW9uWTogMCxcbiAgZnJpY3Rpb25YOiAxLFxuICBmcmljdGlvblk6IDAuOTk5N1xufVxuXG5jb25zdCBTUE9UU19BTklNQVRJT05fREVGQVVMVCA9IHtcbiAgbWluU2l6ZTogMTAsXG4gIG1heFNpemU6IDIwLFxuICBwZXJpb2Q6IDMwMCxcbiAgc3RlcDogMTAsXG4gIGJvdHRvbUxheWVyOiBudWxsLFxuICBjb2xvcjogJ3JnYmEoMCwwLDAsMC4wMyknLFxuICBjb2w6IDE1LFxuICByb3c6IDE1XG59XG5cbmNsYXNzIEJhc2ljUmVmZWxlY3Rpb24gZXh0ZW5kcyBDYW52YXMyREZ4QmFzZSB7XG4gIGNvbnN0cnVjdG9yKGNhbnZhcywgZGVmYXVsdENvbmZpZywgY29uZmlnLCB2aXJ0dWFsUGFyZW50KSB7XG4gICAgc3VwZXIoY2FudmFzLCBkZWZhdWx0Q29uZmlnLCBjb25maWcsIHZpcnR1YWxQYXJlbnQpO1xuICAgIHRoaXMuc3dpdGNoU3RhdHVzID0gZmFsc2U7XG4gICAgdGhpcy5pbml0KCk7XG4gIH1cbiAgaW5pdCgpIHtcbiAgICB0aGlzLnN3aXRjaFN0YXR1cyA9IHRydWU7XG4gICAgdGhpcy5pbml0QmFsbCgpO1xuICAgIHRoaXMuYW5pbWF0ZUJhbGwoKTtcbiAgfVxuXG4gIHN3aXRjaGVyKHN0YXR1cykge1xuICAgIHRoaXMuc3dpdGNoU3RhdHVzID0gc3RhdHVzO1xuICB9XG5cbiAgaW5pdEJhbGwoKSB7XG4gICAgbGV0ICR0aGlzID0gdGhpcztcbiAgICB0aGlzLmJhbGwgPSB7XG4gICAgICBhZnRlckltYWdlOiAkdGhpcy5jb25maWcuYWZ0ZXJJbWFnZSxcbiAgICAgIGNvbG9yOiAkdGhpcy5jb25maWcuY29sb3IsXG4gICAgICByYWRpdXM6ICR0aGlzLmNvbmZpZy5yYWRpdXMsXG4gICAgICBsb2NhdGlvbjoge1xuICAgICAgICB4OiAkdGhpcy5jdnMud2lkdGggLyAyLFxuICAgICAgICB5OiAkdGhpcy5jdnMuaGVpZ2h0IC8gMixcbiAgICAgIH0sXG4gICAgICBzcGVlZDoge1xuICAgICAgICB4OiAkdGhpcy5jb25maWcuc3BlZWRYLFxuICAgICAgICB5OiAkdGhpcy5jb25maWcuc3BlZWRZXG4gICAgICB9LFxuICAgICAgYWNjZWxlcmF0aW9uOiB7XG4gICAgICAgIHg6ICR0aGlzLmNvbmZpZy5hY2NlbGVyYXRpb25YLFxuICAgICAgICB5OiAkdGhpcy5jb25maWcuYWNjZWxlcmF0aW9uWVxuICAgICAgfSxcbiAgICAgIGZyaWN0aW9uOiB7XG4gICAgICAgIHg6ICR0aGlzLmNvbmZpZy5mcmljdGlvblgsXG4gICAgICAgIHk6ICR0aGlzLmNvbmZpZy5mcmljdGlvbllcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZHJhd0JhbGwoKSB7XG4gICAgZHJhd0NpcmNsZSh0aGlzLmN0eCwgdGhpcy5iYWxsLmxvY2F0aW9uLngsIHRoaXMuYmFsbC5sb2NhdGlvbi55LCB0aGlzLmJhbGwucmFkaXVzICogMiwgdGhpcy5iYWxsLmNvbG9yKTtcbiAgfVxuICBhbmltYXRlQmFsbCgpIHtcbiAgICBpZiAodGhpcy5zd2l0Y2hTdGF0dXMgPT0gZmFsc2UpIHJldHVybjtcbiAgICBsZXQgJHRoaXMgPSB0aGlzO1xuICAgIGlmICgkdGhpcy5iYWxsLmFmdGVySW1hZ2UgPT09IHRydWUpIHtcbiAgICAgICR0aGlzLmJhY2tncm91bmQoJ3JnYigyNTUsIDE3NywgNDMsMC4xKScpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICR0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgJHRoaXMuY3ZzLndpZHRoLCAkdGhpcy5jdnMuaGVpZ2h0KTtcbiAgICB9XG4gICAgJHRoaXMuY3R4LmRyYXdJbWFnZSgkdGhpcy5jb25maWcuYm90dG9tTGF5ZXIsIDAsIDApO1xuICAgICR0aGlzLmRyYXdCYWxsKCk7XG4gICAgJHRoaXMucmVmcmVzaExvY2F0aW9uKCk7XG4gICAgJHRoaXMucmVmcmVzaFNwZWVkKCk7XG4gICAgJHRoaXMuY2hlY2tCb3VuZGFyeSgpO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShcbiAgICAgICR0aGlzLmFuaW1hdGVCYWxsLmJpbmQoJHRoaXMpXG4gICAgKTtcbiAgfVxuXG4gIHJlZnJlc2hTcGVlZCgpIHtcbiAgICBsZXQgZHQgPSB0aGlzLnRpbWVFbGFwc2VkO1xuICAgIHRoaXMuYmFsbC5zcGVlZC54ID0gdGhpcy5iYWxsLnNwZWVkLnggKiB0aGlzLmJhbGwuZnJpY3Rpb24ueCArIHRoaXMuYmFsbC5hY2NlbGVyYXRpb24ueCAqIGR0O1xuICAgIHRoaXMuYmFsbC5zcGVlZC55ID0gdGhpcy5iYWxsLnNwZWVkLnkgKiB0aGlzLmJhbGwuZnJpY3Rpb24ueSArIHRoaXMuYmFsbC5hY2NlbGVyYXRpb24ueSAqIGR0O1xuICB9XG5cbiAgcmVmcmVzaExvY2F0aW9uKCkge1xuICAgIGxldCBkdCA9IHRoaXMudGltZUVsYXBzZWQ7XG4gICAgdGhpcy5iYWxsLmxvY2F0aW9uLnggKz0gdGhpcy5iYWxsLnNwZWVkLnggKiBkdDtcbiAgICB0aGlzLmJhbGwubG9jYXRpb24ueSArPSB0aGlzLmJhbGwuc3BlZWQueSAqIGR0O1xuICB9XG4gIGNoZWNrQm91bmRhcnkoKSB7XG4gICAgbGV0IGJhbGwgPSB0aGlzLmJhbGw7XG4gICAgbGV0IGNhbnZhcyA9IHRoaXMuY3ZzO1xuICAgIC8vIOeVtueQg+ato+WcqOW6leerr1xuICAgIGlmIChiYWxsLmxvY2F0aW9uLnkgKyBiYWxsLnJhZGl1cyA+IGNhbnZhcy5oZWlnaHQpIHtcbiAgICAgIC8vIOS4lOmAn+W6pueCuuato+WAvO+8iOacneS4i++8iVxuICAgICAgaWYgKGJhbGwuc3BlZWQueSA+IDApIHtcbiAgICAgICAgYmFsbC5zcGVlZC55ID0gLWJhbGwuc3BlZWQueTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8g55W255CD5q2j5Zyo6aCC56uvXG4gICAgZWxzZSBpZiAoYmFsbC5sb2NhdGlvbi55IC0gYmFsbC5yYWRpdXMgPCAwKSB7XG4gICAgICAvLyDkuJTpgJ/luqbngrrosqDlgLzvvIjmnJ3kuIrvvIlcbiAgICAgIGlmIChiYWxsLnNwZWVkLnkgPCAwKSB7XG4gICAgICAgIGJhbGwuc3BlZWQueSA9IC1iYWxsLnNwZWVkLnk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8g55W255CD5q2j5Zyo5Y+z56uvXG4gICAgaWYgKGJhbGwubG9jYXRpb24ueCArIGJhbGwucmFkaXVzID4gY2FudmFzLndpZHRoKSB7XG4gICAgICBpZiAoYmFsbC5zcGVlZC54ID4gMCkge1xuICAgICAgICBiYWxsLnNwZWVkLnggPSAtYmFsbC5zcGVlZC54O1xuICAgICAgfVxuICAgIH1cbiAgICAvLyDnlbbnkIPmraPlnKjlt6bnq69cbiAgICBlbHNlIGlmIChiYWxsLmxvY2F0aW9uLnggLSBiYWxsLnJhZGl1cyA8IDApIHtcbiAgICAgIGlmIChiYWxsLnNwZWVkLnggPCAwKSB7XG4gICAgICAgIGJhbGwuc3BlZWQueCA9IC1iYWxsLnNwZWVkLng7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cbn1cblxuY2xhc3MgU3BvdHNCdW1waW5nIGV4dGVuZHMgQ2FudmFzMkRGeEJhc2Uge1xuICBjb25zdHJ1Y3RvcihjYW52YXMsIGRlZmF1bHRDb25maWcsIGNvbmZpZywgdmlydHVhbFBhcmVudCkge1xuICAgIHN1cGVyKGNhbnZhcywgZGVmYXVsdENvbmZpZywgY29uZmlnLCB2aXJ0dWFsUGFyZW50KTtcbiAgICB0aGlzLnNwb3RzU2l6ZSA9IHRoaXMuY29uZmlnLm1pblNpemU7XG4gICAgdGhpcy5leHBhbmQgPSB0cnVlO1xuICAgIHRoaXMuc3dpdGNoU3RhdHVzID0gZmFsc2U7XG4gICAgdGhpcy5pbml0KCk7XG4gIH1cbiAgaW5pdCgpIHtcbiAgICB0aGlzLnN3aXRjaFN0YXR1cyA9IHRydWU7XG4gICAgdGhpcy5hbmltYXRlKCk7XG4gIH1cblxuICBzd2l0Y2hlcihzdGF0dXMpIHtcbiAgICB0aGlzLnN3aXRjaFN0YXR1cyA9IHN0YXR1cztcbiAgfVxuXG4gIGFuaW1hdGUoKSB7XG4gICAgbGV0ICR0aGlzID0gdGhpcztcbiAgICB0aGlzLmludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuc3dpdGNoU3RhdHVzKSB7XG4gICAgICAgICR0aGlzLmNsZWFyKCk7XG4gICAgICAgICR0aGlzLmRyYXdTcG90cygpO1xuICAgICAgfVxuICAgIH0sIHRoaXMuY29uZmlnLnBlcmlvZClcbiAgfVxuXG4gIGRyYXdTcG90cygpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSB0aGlzLmNvbmZpZy5jb2w7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPD0gdGhpcy5jb25maWcuY29sOyBqKyspIHtcbiAgICAgICAgZHJhd0NpcmNsZShcbiAgICAgICAgICB0aGlzLmN0eCxcbiAgICAgICAgICBpICogdGhpcy5jdnMud2lkdGggLyB0aGlzLmNvbmZpZy5jb2wsXG4gICAgICAgICAgaiAqIHRoaXMuY3ZzLmhlaWdodCAvIHRoaXMuY29uZmlnLnJvdyxcbiAgICAgICAgICB0aGlzLnNwb3RzU2l6ZSxcbiAgICAgICAgICB0aGlzLmNvbmZpZy5jb2xvcixcbiAgICAgICAgICAxXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMuc3BvdHNTaXplIC0gMSA8IHRoaXMuY29uZmlnLm1pblNpemUpIHtcbiAgICAgIHRoaXMuZXhwYW5kID0gdHJ1ZVxuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLnNwb3RzU2l6ZSArIDEgPiB0aGlzLmNvbmZpZy5tYXhTaXplKSB7XG4gICAgICB0aGlzLmV4cGFuZCA9IGZhbHNlXG4gICAgfVxuICAgIGlmICh0aGlzLmV4cGFuZCkge1xuICAgICAgdGhpcy5zcG90c1NpemUgKz0gdGhpcy5jb25maWcuc3RlcDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLnNwb3RzU2l6ZSAtPSB0aGlzLmNvbmZpZy5zdGVwO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdFNwbGFzaCgpIHtcbiAgbGV0IGluaXRpYWxTY3JlZW4gPSAkKCcjaW5pdGlhbC1zY3JlZW4nKTtcbiAgbGV0IHZpcnR1YWxDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgbGV0IHN3aXRjaGVyO1xuICBsZXQgc3BvdEFuaW1hdGlvbiA9IGJvb3QoU3BvdHNCdW1waW5nLCBTUE9UU19BTklNQVRJT05fREVGQVVMVCwge30sIHZpcnR1YWxDYW52YXMsIGluaXRpYWxTY3JlZW4pO1xuICBsZXQgc3BsYXNoUHJvbWlzZSA9IHNwb3RBbmltYXRpb24ucHJvbWlzZS50aGVuKChzcG90c0J1bXBpbmdJbnN0YW5jZSkgPT4ge1xuICAgIGxldCBib290Q29udHJvbGxlciA9IGJvb3QoQmFzaWNSZWZlbGVjdGlvbiwgQkFMTF9BTklNQVRJT05fREVGQVVMVCwge1xuICAgICAgYWZ0ZXJJbWFnZTogdHJ1ZSxcbiAgICAgIHJhZGl1czogNDAsXG4gICAgICBjb2xvcjogJ3JnYmEoMCwgMCwgMCwwLjc1KScsXG4gICAgICBzcGVlZFg6IDEwMDAsXG4gICAgICBib3R0b21MYXllcjogc3BvdHNCdW1waW5nSW5zdGFuY2UuY3ZzLFxuICAgICAgc3BlZWRZOiAxMDAwLFxuICAgICAgYWNjZWxlcmF0aW9uWDogMCxcbiAgICAgIGFjY2VsZXJhdGlvblk6IDk4MCxcbiAgICAgIGZyaWN0aW9uWDogMSxcbiAgICB9LCBpbml0aWFsU2NyZWVuKTtcblxuICAgIGJvb3RDb250cm9sbGVyLnRyaWdnZXIoKTtcblxuICAgIHJldHVybiBib290Q29udHJvbGxlci5wcm9taXNlLnRoZW4oKGJhc2ljUmVmZWxlY3Rpb25JbnN0YW5jZSkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlcyA9PiB7XG4gICAgICAgIHN3aXRjaGVyID0gKHN0YXR1cykgPT4ge1xuICAgICAgICAgIHNwb3RzQnVtcGluZ0luc3RhbmNlLnN3aXRjaGVyKHN0YXR1cyk7XG4gICAgICAgICAgYmFzaWNSZWZlbGVjdGlvbkluc3RhbmNlLnN3aXRjaGVyKHN0YXR1cyk7XG4gICAgICAgIH1cbiAgICAgICAgcmVzKHN3aXRjaGVyKTtcbiAgICAgIH0pXG4gICAgfSlcbiAgfSlcbiAgc3BvdEFuaW1hdGlvbi50cmlnZ2VyKCk7XG5cbiAgcmV0dXJuIHNwbGFzaFByb21pc2U7XG59XG5cbiIsIi8vIGV4cG9ydCBjb25zdCBzY29yZWJvYXJkcyA9IFtcbi8vICAge1xuLy8gICAgIHBvc2l0aW9uOiB7XG4vLyAgICAgICB4OiAwLFxuLy8gICAgICAgeTogMFxuLy8gICAgIH0sXG4vLyAgICAgc2hvdzogKCkgPT4geyB9LFxuLy8gICAgIHVwZGF0ZTogKCkgPT4geyB9XG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBwb3NpdGlvbjoge1xuLy8gICAgICAgeDogMCxcbi8vICAgICAgIHk6IDBcbi8vICAgICB9LFxuLy8gICAgIHNob3c6ICgpID0+IHsgfSxcbi8vICAgICB1cGRhdGU6ICgpID0+IHsgfVxuLy8gICB9XG4vLyBdXG5cbmV4cG9ydCBjb25zdCBwbGF5ZXJzRGF0YSA9IFtcbiAge1xuICAgIG5hbWU6ICc/Pz8nLFxuICAgIHNjb3JlOiAwLFxuICAgIHdpZHRoOiAwLFxuICAgIHBvc2l0aW9uOiB7XG4gICAgICB4OiAwLFxuICAgICAgeTogMFxuICAgIH1cbiAgfSxcbiAge1xuICAgIG5hbWU6ICc/Pz8nLFxuICAgIHNjb3JlOiAwLFxuICAgIHdpZHRoOiAwLFxuICAgIHBvc2l0aW9uOiB7XG4gICAgICB4OiAwLFxuICAgICAgeTogMFxuICAgIH1cbiAgfVxuXTtcblxuZXhwb3J0IGNvbnN0IGJhbGwgPSB7XG4gIHBvc2l0aW9uOiB7XG4gICAgeDogMCxcbiAgICB5OiAwXG4gIH0sXG4gIHNwZWVkOiB7XG4gICAgeDogMCxcbiAgICB5OiAwXG4gIH0sXG4gIHNpemU6IDAsXG4gIGNvbG9yOiBudWxsXG59XG5cblxuXG5leHBvcnQgY29uc3QgcGxheWVyUmVmID0ge1xuICBuYW1lOiAnPz8/JyxcbiAgbnVtYmVyOiAwXG59OyIsIlxuLyoqXG4gKiBFeHBvc2UgYEJhY2tvZmZgLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gQmFja29mZjtcblxuLyoqXG4gKiBJbml0aWFsaXplIGJhY2tvZmYgdGltZXIgd2l0aCBgb3B0c2AuXG4gKlxuICogLSBgbWluYCBpbml0aWFsIHRpbWVvdXQgaW4gbWlsbGlzZWNvbmRzIFsxMDBdXG4gKiAtIGBtYXhgIG1heCB0aW1lb3V0IFsxMDAwMF1cbiAqIC0gYGppdHRlcmAgWzBdXG4gKiAtIGBmYWN0b3JgIFsyXVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIEJhY2tvZmYob3B0cykge1xuICBvcHRzID0gb3B0cyB8fCB7fTtcbiAgdGhpcy5tcyA9IG9wdHMubWluIHx8IDEwMDtcbiAgdGhpcy5tYXggPSBvcHRzLm1heCB8fCAxMDAwMDtcbiAgdGhpcy5mYWN0b3IgPSBvcHRzLmZhY3RvciB8fCAyO1xuICB0aGlzLmppdHRlciA9IG9wdHMuaml0dGVyID4gMCAmJiBvcHRzLmppdHRlciA8PSAxID8gb3B0cy5qaXR0ZXIgOiAwO1xuICB0aGlzLmF0dGVtcHRzID0gMDtcbn1cblxuLyoqXG4gKiBSZXR1cm4gdGhlIGJhY2tvZmYgZHVyYXRpb24uXG4gKlxuICogQHJldHVybiB7TnVtYmVyfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5CYWNrb2ZmLnByb3RvdHlwZS5kdXJhdGlvbiA9IGZ1bmN0aW9uKCl7XG4gIHZhciBtcyA9IHRoaXMubXMgKiBNYXRoLnBvdyh0aGlzLmZhY3RvciwgdGhpcy5hdHRlbXB0cysrKTtcbiAgaWYgKHRoaXMuaml0dGVyKSB7XG4gICAgdmFyIHJhbmQgPSAgTWF0aC5yYW5kb20oKTtcbiAgICB2YXIgZGV2aWF0aW9uID0gTWF0aC5mbG9vcihyYW5kICogdGhpcy5qaXR0ZXIgKiBtcyk7XG4gICAgbXMgPSAoTWF0aC5mbG9vcihyYW5kICogMTApICYgMSkgPT0gMCAgPyBtcyAtIGRldmlhdGlvbiA6IG1zICsgZGV2aWF0aW9uO1xuICB9XG4gIHJldHVybiBNYXRoLm1pbihtcywgdGhpcy5tYXgpIHwgMDtcbn07XG5cbi8qKlxuICogUmVzZXQgdGhlIG51bWJlciBvZiBhdHRlbXB0cy5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkJhY2tvZmYucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24oKXtcbiAgdGhpcy5hdHRlbXB0cyA9IDA7XG59O1xuXG4vKipcbiAqIFNldCB0aGUgbWluaW11bSBkdXJhdGlvblxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuQmFja29mZi5wcm90b3R5cGUuc2V0TWluID0gZnVuY3Rpb24obWluKXtcbiAgdGhpcy5tcyA9IG1pbjtcbn07XG5cbi8qKlxuICogU2V0IHRoZSBtYXhpbXVtIGR1cmF0aW9uXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5CYWNrb2ZmLnByb3RvdHlwZS5zZXRNYXggPSBmdW5jdGlvbihtYXgpe1xuICB0aGlzLm1heCA9IG1heDtcbn07XG5cbi8qKlxuICogU2V0IHRoZSBqaXR0ZXJcbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkJhY2tvZmYucHJvdG90eXBlLnNldEppdHRlciA9IGZ1bmN0aW9uKGppdHRlcil7XG4gIHRoaXMuaml0dGVyID0gaml0dGVyO1xufTtcblxuIiwiLypcbiAqIGJhc2U2NC1hcnJheWJ1ZmZlclxuICogaHR0cHM6Ly9naXRodWIuY29tL25pa2xhc3ZoL2Jhc2U2NC1hcnJheWJ1ZmZlclxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxMiBOaWtsYXMgdm9uIEhlcnR6ZW5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqL1xuKGZ1bmN0aW9uKGNoYXJzKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgZXhwb3J0cy5lbmNvZGUgPSBmdW5jdGlvbihhcnJheWJ1ZmZlcikge1xuICAgIHZhciBieXRlcyA9IG5ldyBVaW50OEFycmF5KGFycmF5YnVmZmVyKSxcbiAgICBpLCBsZW4gPSBieXRlcy5sZW5ndGgsIGJhc2U2NCA9IFwiXCI7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKz0zKSB7XG4gICAgICBiYXNlNjQgKz0gY2hhcnNbYnl0ZXNbaV0gPj4gMl07XG4gICAgICBiYXNlNjQgKz0gY2hhcnNbKChieXRlc1tpXSAmIDMpIDw8IDQpIHwgKGJ5dGVzW2kgKyAxXSA+PiA0KV07XG4gICAgICBiYXNlNjQgKz0gY2hhcnNbKChieXRlc1tpICsgMV0gJiAxNSkgPDwgMikgfCAoYnl0ZXNbaSArIDJdID4+IDYpXTtcbiAgICAgIGJhc2U2NCArPSBjaGFyc1tieXRlc1tpICsgMl0gJiA2M107XG4gICAgfVxuXG4gICAgaWYgKChsZW4gJSAzKSA9PT0gMikge1xuICAgICAgYmFzZTY0ID0gYmFzZTY0LnN1YnN0cmluZygwLCBiYXNlNjQubGVuZ3RoIC0gMSkgKyBcIj1cIjtcbiAgICB9IGVsc2UgaWYgKGxlbiAlIDMgPT09IDEpIHtcbiAgICAgIGJhc2U2NCA9IGJhc2U2NC5zdWJzdHJpbmcoMCwgYmFzZTY0Lmxlbmd0aCAtIDIpICsgXCI9PVwiO1xuICAgIH1cblxuICAgIHJldHVybiBiYXNlNjQ7XG4gIH07XG5cbiAgZXhwb3J0cy5kZWNvZGUgPSAgZnVuY3Rpb24oYmFzZTY0KSB7XG4gICAgdmFyIGJ1ZmZlckxlbmd0aCA9IGJhc2U2NC5sZW5ndGggKiAwLjc1LFxuICAgIGxlbiA9IGJhc2U2NC5sZW5ndGgsIGksIHAgPSAwLFxuICAgIGVuY29kZWQxLCBlbmNvZGVkMiwgZW5jb2RlZDMsIGVuY29kZWQ0O1xuXG4gICAgaWYgKGJhc2U2NFtiYXNlNjQubGVuZ3RoIC0gMV0gPT09IFwiPVwiKSB7XG4gICAgICBidWZmZXJMZW5ndGgtLTtcbiAgICAgIGlmIChiYXNlNjRbYmFzZTY0Lmxlbmd0aCAtIDJdID09PSBcIj1cIikge1xuICAgICAgICBidWZmZXJMZW5ndGgtLTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgYXJyYXlidWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIoYnVmZmVyTGVuZ3RoKSxcbiAgICBieXRlcyA9IG5ldyBVaW50OEFycmF5KGFycmF5YnVmZmVyKTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrPTQpIHtcbiAgICAgIGVuY29kZWQxID0gY2hhcnMuaW5kZXhPZihiYXNlNjRbaV0pO1xuICAgICAgZW5jb2RlZDIgPSBjaGFycy5pbmRleE9mKGJhc2U2NFtpKzFdKTtcbiAgICAgIGVuY29kZWQzID0gY2hhcnMuaW5kZXhPZihiYXNlNjRbaSsyXSk7XG4gICAgICBlbmNvZGVkNCA9IGNoYXJzLmluZGV4T2YoYmFzZTY0W2krM10pO1xuXG4gICAgICBieXRlc1twKytdID0gKGVuY29kZWQxIDw8IDIpIHwgKGVuY29kZWQyID4+IDQpO1xuICAgICAgYnl0ZXNbcCsrXSA9ICgoZW5jb2RlZDIgJiAxNSkgPDwgNCkgfCAoZW5jb2RlZDMgPj4gMik7XG4gICAgICBieXRlc1twKytdID0gKChlbmNvZGVkMyAmIDMpIDw8IDYpIHwgKGVuY29kZWQ0ICYgNjMpO1xuICAgIH1cblxuICAgIHJldHVybiBhcnJheWJ1ZmZlcjtcbiAgfTtcbn0pKFwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrL1wiKTtcbiIsIlxyXG4vKipcclxuICogRXhwb3NlIGBFbWl0dGVyYC5cclxuICovXHJcblxyXG5pZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICBtb2R1bGUuZXhwb3J0cyA9IEVtaXR0ZXI7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbml0aWFsaXplIGEgbmV3IGBFbWl0dGVyYC5cclxuICpcclxuICogQGFwaSBwdWJsaWNcclxuICovXHJcblxyXG5mdW5jdGlvbiBFbWl0dGVyKG9iaikge1xyXG4gIGlmIChvYmopIHJldHVybiBtaXhpbihvYmopO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIE1peGluIHRoZSBlbWl0dGVyIHByb3BlcnRpZXMuXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcclxuICogQHJldHVybiB7T2JqZWN0fVxyXG4gKiBAYXBpIHByaXZhdGVcclxuICovXHJcblxyXG5mdW5jdGlvbiBtaXhpbihvYmopIHtcclxuICBmb3IgKHZhciBrZXkgaW4gRW1pdHRlci5wcm90b3R5cGUpIHtcclxuICAgIG9ialtrZXldID0gRW1pdHRlci5wcm90b3R5cGVba2V5XTtcclxuICB9XHJcbiAgcmV0dXJuIG9iajtcclxufVxyXG5cclxuLyoqXHJcbiAqIExpc3RlbiBvbiB0aGUgZ2l2ZW4gYGV2ZW50YCB3aXRoIGBmbmAuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxyXG4gKiBAcmV0dXJuIHtFbWl0dGVyfVxyXG4gKiBAYXBpIHB1YmxpY1xyXG4gKi9cclxuXHJcbkVtaXR0ZXIucHJvdG90eXBlLm9uID1cclxuRW1pdHRlci5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKGV2ZW50LCBmbil7XHJcbiAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xyXG4gICh0aGlzLl9jYWxsYmFja3NbJyQnICsgZXZlbnRdID0gdGhpcy5fY2FsbGJhY2tzWyckJyArIGV2ZW50XSB8fCBbXSlcclxuICAgIC5wdXNoKGZuKTtcclxuICByZXR1cm4gdGhpcztcclxufTtcclxuXHJcbi8qKlxyXG4gKiBBZGRzIGFuIGBldmVudGAgbGlzdGVuZXIgdGhhdCB3aWxsIGJlIGludm9rZWQgYSBzaW5nbGVcclxuICogdGltZSB0aGVuIGF1dG9tYXRpY2FsbHkgcmVtb3ZlZC5cclxuICpcclxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXHJcbiAqIEByZXR1cm4ge0VtaXR0ZXJ9XHJcbiAqIEBhcGkgcHVibGljXHJcbiAqL1xyXG5cclxuRW1pdHRlci5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uKGV2ZW50LCBmbil7XHJcbiAgZnVuY3Rpb24gb24oKSB7XHJcbiAgICB0aGlzLm9mZihldmVudCwgb24pO1xyXG4gICAgZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuICB9XHJcblxyXG4gIG9uLmZuID0gZm47XHJcbiAgdGhpcy5vbihldmVudCwgb24pO1xyXG4gIHJldHVybiB0aGlzO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFJlbW92ZSB0aGUgZ2l2ZW4gY2FsbGJhY2sgZm9yIGBldmVudGAgb3IgYWxsXHJcbiAqIHJlZ2lzdGVyZWQgY2FsbGJhY2tzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcclxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cclxuICogQHJldHVybiB7RW1pdHRlcn1cclxuICogQGFwaSBwdWJsaWNcclxuICovXHJcblxyXG5FbWl0dGVyLnByb3RvdHlwZS5vZmYgPVxyXG5FbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9XHJcbkVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9XHJcbkVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbihldmVudCwgZm4pe1xyXG4gIHRoaXMuX2NhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrcyB8fCB7fTtcclxuXHJcbiAgLy8gYWxsXHJcbiAgaWYgKDAgPT0gYXJndW1lbnRzLmxlbmd0aCkge1xyXG4gICAgdGhpcy5fY2FsbGJhY2tzID0ge307XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8vIHNwZWNpZmljIGV2ZW50XHJcbiAgdmFyIGNhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrc1snJCcgKyBldmVudF07XHJcbiAgaWYgKCFjYWxsYmFja3MpIHJldHVybiB0aGlzO1xyXG5cclxuICAvLyByZW1vdmUgYWxsIGhhbmRsZXJzXHJcbiAgaWYgKDEgPT0gYXJndW1lbnRzLmxlbmd0aCkge1xyXG4gICAgZGVsZXRlIHRoaXMuX2NhbGxiYWNrc1snJCcgKyBldmVudF07XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8vIHJlbW92ZSBzcGVjaWZpYyBoYW5kbGVyXHJcbiAgdmFyIGNiO1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgY2FsbGJhY2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBjYiA9IGNhbGxiYWNrc1tpXTtcclxuICAgIGlmIChjYiA9PT0gZm4gfHwgY2IuZm4gPT09IGZuKSB7XHJcbiAgICAgIGNhbGxiYWNrcy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gUmVtb3ZlIGV2ZW50IHNwZWNpZmljIGFycmF5cyBmb3IgZXZlbnQgdHlwZXMgdGhhdCBub1xyXG4gIC8vIG9uZSBpcyBzdWJzY3JpYmVkIGZvciB0byBhdm9pZCBtZW1vcnkgbGVhay5cclxuICBpZiAoY2FsbGJhY2tzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgZGVsZXRlIHRoaXMuX2NhbGxiYWNrc1snJCcgKyBldmVudF07XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdGhpcztcclxufTtcclxuXHJcbi8qKlxyXG4gKiBFbWl0IGBldmVudGAgd2l0aCB0aGUgZ2l2ZW4gYXJncy5cclxuICpcclxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XHJcbiAqIEBwYXJhbSB7TWl4ZWR9IC4uLlxyXG4gKiBAcmV0dXJuIHtFbWl0dGVyfVxyXG4gKi9cclxuXHJcbkVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbihldmVudCl7XHJcbiAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xyXG5cclxuICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSlcclxuICAgICwgY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzWyckJyArIGV2ZW50XTtcclxuXHJcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xyXG4gIH1cclxuXHJcbiAgaWYgKGNhbGxiYWNrcykge1xyXG4gICAgY2FsbGJhY2tzID0gY2FsbGJhY2tzLnNsaWNlKDApO1xyXG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGNhbGxiYWNrcy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xyXG4gICAgICBjYWxsYmFja3NbaV0uYXBwbHkodGhpcywgYXJncyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdGhpcztcclxufTtcclxuXHJcbi8qKlxyXG4gKiBSZXR1cm4gYXJyYXkgb2YgY2FsbGJhY2tzIGZvciBgZXZlbnRgLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcclxuICogQHJldHVybiB7QXJyYXl9XHJcbiAqIEBhcGkgcHVibGljXHJcbiAqL1xyXG5cclxuRW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJzID0gZnVuY3Rpb24oZXZlbnQpe1xyXG4gIHRoaXMuX2NhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrcyB8fCB7fTtcclxuICByZXR1cm4gdGhpcy5fY2FsbGJhY2tzWyckJyArIGV2ZW50XSB8fCBbXTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBDaGVjayBpZiB0aGlzIGVtaXR0ZXIgaGFzIGBldmVudGAgaGFuZGxlcnMuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxyXG4gKiBAcmV0dXJuIHtCb29sZWFufVxyXG4gKiBAYXBpIHB1YmxpY1xyXG4gKi9cclxuXHJcbkVtaXR0ZXIucHJvdG90eXBlLmhhc0xpc3RlbmVycyA9IGZ1bmN0aW9uKGV2ZW50KXtcclxuICByZXR1cm4gISEgdGhpcy5saXN0ZW5lcnMoZXZlbnQpLmxlbmd0aDtcclxufTtcclxuIiwiLyoqXG4gKiBIZWxwZXJzLlxuICovXG5cbnZhciBzID0gMTAwMDtcbnZhciBtID0gcyAqIDYwO1xudmFyIGggPSBtICogNjA7XG52YXIgZCA9IGggKiAyNDtcbnZhciB3ID0gZCAqIDc7XG52YXIgeSA9IGQgKiAzNjUuMjU7XG5cbi8qKlxuICogUGFyc2Ugb3IgZm9ybWF0IHRoZSBnaXZlbiBgdmFsYC5cbiAqXG4gKiBPcHRpb25zOlxuICpcbiAqICAtIGBsb25nYCB2ZXJib3NlIGZvcm1hdHRpbmcgW2ZhbHNlXVxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfE51bWJlcn0gdmFsXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBAdGhyb3dzIHtFcnJvcn0gdGhyb3cgYW4gZXJyb3IgaWYgdmFsIGlzIG5vdCBhIG5vbi1lbXB0eSBzdHJpbmcgb3IgYSBudW1iZXJcbiAqIEByZXR1cm4ge1N0cmluZ3xOdW1iZXJ9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odmFsLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWw7XG4gIGlmICh0eXBlID09PSAnc3RyaW5nJyAmJiB2YWwubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiBwYXJzZSh2YWwpO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdudW1iZXInICYmIGlzRmluaXRlKHZhbCkpIHtcbiAgICByZXR1cm4gb3B0aW9ucy5sb25nID8gZm10TG9uZyh2YWwpIDogZm10U2hvcnQodmFsKTtcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgJ3ZhbCBpcyBub3QgYSBub24tZW1wdHkgc3RyaW5nIG9yIGEgdmFsaWQgbnVtYmVyLiB2YWw9JyArXG4gICAgICBKU09OLnN0cmluZ2lmeSh2YWwpXG4gICk7XG59O1xuXG4vKipcbiAqIFBhcnNlIHRoZSBnaXZlbiBgc3RyYCBhbmQgcmV0dXJuIG1pbGxpc2Vjb25kcy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBwYXJzZShzdHIpIHtcbiAgc3RyID0gU3RyaW5nKHN0cik7XG4gIGlmIChzdHIubGVuZ3RoID4gMTAwKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBtYXRjaCA9IC9eKC0/KD86XFxkKyk/XFwuP1xcZCspICoobWlsbGlzZWNvbmRzP3xtc2Vjcz98bXN8c2Vjb25kcz98c2Vjcz98c3xtaW51dGVzP3xtaW5zP3xtfGhvdXJzP3xocnM/fGh8ZGF5cz98ZHx3ZWVrcz98d3x5ZWFycz98eXJzP3x5KT8kL2kuZXhlYyhcbiAgICBzdHJcbiAgKTtcbiAgaWYgKCFtYXRjaCkge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgbiA9IHBhcnNlRmxvYXQobWF0Y2hbMV0pO1xuICB2YXIgdHlwZSA9IChtYXRjaFsyXSB8fCAnbXMnKS50b0xvd2VyQ2FzZSgpO1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlICd5ZWFycyc6XG4gICAgY2FzZSAneWVhcic6XG4gICAgY2FzZSAneXJzJzpcbiAgICBjYXNlICd5cic6XG4gICAgY2FzZSAneSc6XG4gICAgICByZXR1cm4gbiAqIHk7XG4gICAgY2FzZSAnd2Vla3MnOlxuICAgIGNhc2UgJ3dlZWsnOlxuICAgIGNhc2UgJ3cnOlxuICAgICAgcmV0dXJuIG4gKiB3O1xuICAgIGNhc2UgJ2RheXMnOlxuICAgIGNhc2UgJ2RheSc6XG4gICAgY2FzZSAnZCc6XG4gICAgICByZXR1cm4gbiAqIGQ7XG4gICAgY2FzZSAnaG91cnMnOlxuICAgIGNhc2UgJ2hvdXInOlxuICAgIGNhc2UgJ2hycyc6XG4gICAgY2FzZSAnaHInOlxuICAgIGNhc2UgJ2gnOlxuICAgICAgcmV0dXJuIG4gKiBoO1xuICAgIGNhc2UgJ21pbnV0ZXMnOlxuICAgIGNhc2UgJ21pbnV0ZSc6XG4gICAgY2FzZSAnbWlucyc6XG4gICAgY2FzZSAnbWluJzpcbiAgICBjYXNlICdtJzpcbiAgICAgIHJldHVybiBuICogbTtcbiAgICBjYXNlICdzZWNvbmRzJzpcbiAgICBjYXNlICdzZWNvbmQnOlxuICAgIGNhc2UgJ3NlY3MnOlxuICAgIGNhc2UgJ3NlYyc6XG4gICAgY2FzZSAncyc6XG4gICAgICByZXR1cm4gbiAqIHM7XG4gICAgY2FzZSAnbWlsbGlzZWNvbmRzJzpcbiAgICBjYXNlICdtaWxsaXNlY29uZCc6XG4gICAgY2FzZSAnbXNlY3MnOlxuICAgIGNhc2UgJ21zZWMnOlxuICAgIGNhc2UgJ21zJzpcbiAgICAgIHJldHVybiBuO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG59XG5cbi8qKlxuICogU2hvcnQgZm9ybWF0IGZvciBgbXNgLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBtc1xuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gZm10U2hvcnQobXMpIHtcbiAgdmFyIG1zQWJzID0gTWF0aC5hYnMobXMpO1xuICBpZiAobXNBYnMgPj0gZCkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gZCkgKyAnZCc7XG4gIH1cbiAgaWYgKG1zQWJzID49IGgpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIGgpICsgJ2gnO1xuICB9XG4gIGlmIChtc0FicyA+PSBtKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBtKSArICdtJztcbiAgfVxuICBpZiAobXNBYnMgPj0gcykge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gcykgKyAncyc7XG4gIH1cbiAgcmV0dXJuIG1zICsgJ21zJztcbn1cblxuLyoqXG4gKiBMb25nIGZvcm1hdCBmb3IgYG1zYC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gbXNcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGZtdExvbmcobXMpIHtcbiAgdmFyIG1zQWJzID0gTWF0aC5hYnMobXMpO1xuICBpZiAobXNBYnMgPj0gZCkge1xuICAgIHJldHVybiBwbHVyYWwobXMsIG1zQWJzLCBkLCAnZGF5Jyk7XG4gIH1cbiAgaWYgKG1zQWJzID49IGgpIHtcbiAgICByZXR1cm4gcGx1cmFsKG1zLCBtc0FicywgaCwgJ2hvdXInKTtcbiAgfVxuICBpZiAobXNBYnMgPj0gbSkge1xuICAgIHJldHVybiBwbHVyYWwobXMsIG1zQWJzLCBtLCAnbWludXRlJyk7XG4gIH1cbiAgaWYgKG1zQWJzID49IHMpIHtcbiAgICByZXR1cm4gcGx1cmFsKG1zLCBtc0FicywgcywgJ3NlY29uZCcpO1xuICB9XG4gIHJldHVybiBtcyArICcgbXMnO1xufVxuXG4vKipcbiAqIFBsdXJhbGl6YXRpb24gaGVscGVyLlxuICovXG5cbmZ1bmN0aW9uIHBsdXJhbChtcywgbXNBYnMsIG4sIG5hbWUpIHtcbiAgdmFyIGlzUGx1cmFsID0gbXNBYnMgPj0gbiAqIDEuNTtcbiAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBuKSArICcgJyArIG5hbWUgKyAoaXNQbHVyYWwgPyAncycgOiAnJyk7XG59XG4iLCIvKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuLyoqXG4gKiBUaGlzIGlzIHRoZSB3ZWIgYnJvd3NlciBpbXBsZW1lbnRhdGlvbiBvZiBgZGVidWcoKWAuXG4gKi9cblxuZXhwb3J0cy5mb3JtYXRBcmdzID0gZm9ybWF0QXJncztcbmV4cG9ydHMuc2F2ZSA9IHNhdmU7XG5leHBvcnRzLmxvYWQgPSBsb2FkO1xuZXhwb3J0cy51c2VDb2xvcnMgPSB1c2VDb2xvcnM7XG5leHBvcnRzLnN0b3JhZ2UgPSBsb2NhbHN0b3JhZ2UoKTtcbmV4cG9ydHMuZGVzdHJveSA9ICgoKSA9PiB7XG5cdGxldCB3YXJuZWQgPSBmYWxzZTtcblxuXHRyZXR1cm4gKCkgPT4ge1xuXHRcdGlmICghd2FybmVkKSB7XG5cdFx0XHR3YXJuZWQgPSB0cnVlO1xuXHRcdFx0Y29uc29sZS53YXJuKCdJbnN0YW5jZSBtZXRob2QgYGRlYnVnLmRlc3Ryb3koKWAgaXMgZGVwcmVjYXRlZCBhbmQgbm8gbG9uZ2VyIGRvZXMgYW55dGhpbmcuIEl0IHdpbGwgYmUgcmVtb3ZlZCBpbiB0aGUgbmV4dCBtYWpvciB2ZXJzaW9uIG9mIGBkZWJ1Z2AuJyk7XG5cdFx0fVxuXHR9O1xufSkoKTtcblxuLyoqXG4gKiBDb2xvcnMuXG4gKi9cblxuZXhwb3J0cy5jb2xvcnMgPSBbXG5cdCcjMDAwMENDJyxcblx0JyMwMDAwRkYnLFxuXHQnIzAwMzNDQycsXG5cdCcjMDAzM0ZGJyxcblx0JyMwMDY2Q0MnLFxuXHQnIzAwNjZGRicsXG5cdCcjMDA5OUNDJyxcblx0JyMwMDk5RkYnLFxuXHQnIzAwQ0MwMCcsXG5cdCcjMDBDQzMzJyxcblx0JyMwMENDNjYnLFxuXHQnIzAwQ0M5OScsXG5cdCcjMDBDQ0NDJyxcblx0JyMwMENDRkYnLFxuXHQnIzMzMDBDQycsXG5cdCcjMzMwMEZGJyxcblx0JyMzMzMzQ0MnLFxuXHQnIzMzMzNGRicsXG5cdCcjMzM2NkNDJyxcblx0JyMzMzY2RkYnLFxuXHQnIzMzOTlDQycsXG5cdCcjMzM5OUZGJyxcblx0JyMzM0NDMDAnLFxuXHQnIzMzQ0MzMycsXG5cdCcjMzNDQzY2Jyxcblx0JyMzM0NDOTknLFxuXHQnIzMzQ0NDQycsXG5cdCcjMzNDQ0ZGJyxcblx0JyM2NjAwQ0MnLFxuXHQnIzY2MDBGRicsXG5cdCcjNjYzM0NDJyxcblx0JyM2NjMzRkYnLFxuXHQnIzY2Q0MwMCcsXG5cdCcjNjZDQzMzJyxcblx0JyM5OTAwQ0MnLFxuXHQnIzk5MDBGRicsXG5cdCcjOTkzM0NDJyxcblx0JyM5OTMzRkYnLFxuXHQnIzk5Q0MwMCcsXG5cdCcjOTlDQzMzJyxcblx0JyNDQzAwMDAnLFxuXHQnI0NDMDAzMycsXG5cdCcjQ0MwMDY2Jyxcblx0JyNDQzAwOTknLFxuXHQnI0NDMDBDQycsXG5cdCcjQ0MwMEZGJyxcblx0JyNDQzMzMDAnLFxuXHQnI0NDMzMzMycsXG5cdCcjQ0MzMzY2Jyxcblx0JyNDQzMzOTknLFxuXHQnI0NDMzNDQycsXG5cdCcjQ0MzM0ZGJyxcblx0JyNDQzY2MDAnLFxuXHQnI0NDNjYzMycsXG5cdCcjQ0M5OTAwJyxcblx0JyNDQzk5MzMnLFxuXHQnI0NDQ0MwMCcsXG5cdCcjQ0NDQzMzJyxcblx0JyNGRjAwMDAnLFxuXHQnI0ZGMDAzMycsXG5cdCcjRkYwMDY2Jyxcblx0JyNGRjAwOTknLFxuXHQnI0ZGMDBDQycsXG5cdCcjRkYwMEZGJyxcblx0JyNGRjMzMDAnLFxuXHQnI0ZGMzMzMycsXG5cdCcjRkYzMzY2Jyxcblx0JyNGRjMzOTknLFxuXHQnI0ZGMzNDQycsXG5cdCcjRkYzM0ZGJyxcblx0JyNGRjY2MDAnLFxuXHQnI0ZGNjYzMycsXG5cdCcjRkY5OTAwJyxcblx0JyNGRjk5MzMnLFxuXHQnI0ZGQ0MwMCcsXG5cdCcjRkZDQzMzJ1xuXTtcblxuLyoqXG4gKiBDdXJyZW50bHkgb25seSBXZWJLaXQtYmFzZWQgV2ViIEluc3BlY3RvcnMsIEZpcmVmb3ggPj0gdjMxLFxuICogYW5kIHRoZSBGaXJlYnVnIGV4dGVuc2lvbiAoYW55IEZpcmVmb3ggdmVyc2lvbikgYXJlIGtub3duXG4gKiB0byBzdXBwb3J0IFwiJWNcIiBDU1MgY3VzdG9taXphdGlvbnMuXG4gKlxuICogVE9ETzogYWRkIGEgYGxvY2FsU3RvcmFnZWAgdmFyaWFibGUgdG8gZXhwbGljaXRseSBlbmFibGUvZGlzYWJsZSBjb2xvcnNcbiAqL1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29tcGxleGl0eVxuZnVuY3Rpb24gdXNlQ29sb3JzKCkge1xuXHQvLyBOQjogSW4gYW4gRWxlY3Ryb24gcHJlbG9hZCBzY3JpcHQsIGRvY3VtZW50IHdpbGwgYmUgZGVmaW5lZCBidXQgbm90IGZ1bGx5XG5cdC8vIGluaXRpYWxpemVkLiBTaW5jZSB3ZSBrbm93IHdlJ3JlIGluIENocm9tZSwgd2UnbGwganVzdCBkZXRlY3QgdGhpcyBjYXNlXG5cdC8vIGV4cGxpY2l0bHlcblx0aWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5wcm9jZXNzICYmICh3aW5kb3cucHJvY2Vzcy50eXBlID09PSAncmVuZGVyZXInIHx8IHdpbmRvdy5wcm9jZXNzLl9fbndqcykpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdC8vIEludGVybmV0IEV4cGxvcmVyIGFuZCBFZGdlIGRvIG5vdCBzdXBwb3J0IGNvbG9ycy5cblx0aWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci51c2VyQWdlbnQgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLm1hdGNoKC8oZWRnZXx0cmlkZW50KVxcLyhcXGQrKS8pKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0Ly8gSXMgd2Via2l0PyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xNjQ1OTYwNi8zNzY3NzNcblx0Ly8gZG9jdW1lbnQgaXMgdW5kZWZpbmVkIGluIHJlYWN0LW5hdGl2ZTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0LW5hdGl2ZS9wdWxsLzE2MzJcblx0cmV0dXJuICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLldlYmtpdEFwcGVhcmFuY2UpIHx8XG5cdFx0Ly8gSXMgZmlyZWJ1Zz8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMzk4MTIwLzM3Njc3M1xuXHRcdCh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuY29uc29sZSAmJiAod2luZG93LmNvbnNvbGUuZmlyZWJ1ZyB8fCAod2luZG93LmNvbnNvbGUuZXhjZXB0aW9uICYmIHdpbmRvdy5jb25zb2xlLnRhYmxlKSkpIHx8XG5cdFx0Ly8gSXMgZmlyZWZveCA+PSB2MzE/XG5cdFx0Ly8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9Ub29scy9XZWJfQ29uc29sZSNTdHlsaW5nX21lc3NhZ2VzXG5cdFx0KHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci51c2VyQWdlbnQgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLm1hdGNoKC9maXJlZm94XFwvKFxcZCspLykgJiYgcGFyc2VJbnQoUmVnRXhwLiQxLCAxMCkgPj0gMzEpIHx8XG5cdFx0Ly8gRG91YmxlIGNoZWNrIHdlYmtpdCBpbiB1c2VyQWdlbnQganVzdCBpbiBjYXNlIHdlIGFyZSBpbiBhIHdvcmtlclxuXHRcdCh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IudXNlckFnZW50ICYmIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5tYXRjaCgvYXBwbGV3ZWJraXRcXC8oXFxkKykvKSk7XG59XG5cbi8qKlxuICogQ29sb3JpemUgbG9nIGFyZ3VtZW50cyBpZiBlbmFibGVkLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gZm9ybWF0QXJncyhhcmdzKSB7XG5cdGFyZ3NbMF0gPSAodGhpcy51c2VDb2xvcnMgPyAnJWMnIDogJycpICtcblx0XHR0aGlzLm5hbWVzcGFjZSArXG5cdFx0KHRoaXMudXNlQ29sb3JzID8gJyAlYycgOiAnICcpICtcblx0XHRhcmdzWzBdICtcblx0XHQodGhpcy51c2VDb2xvcnMgPyAnJWMgJyA6ICcgJykgK1xuXHRcdCcrJyArIG1vZHVsZS5leHBvcnRzLmh1bWFuaXplKHRoaXMuZGlmZik7XG5cblx0aWYgKCF0aGlzLnVzZUNvbG9ycykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGMgPSAnY29sb3I6ICcgKyB0aGlzLmNvbG9yO1xuXHRhcmdzLnNwbGljZSgxLCAwLCBjLCAnY29sb3I6IGluaGVyaXQnKTtcblxuXHQvLyBUaGUgZmluYWwgXCIlY1wiIGlzIHNvbWV3aGF0IHRyaWNreSwgYmVjYXVzZSB0aGVyZSBjb3VsZCBiZSBvdGhlclxuXHQvLyBhcmd1bWVudHMgcGFzc2VkIGVpdGhlciBiZWZvcmUgb3IgYWZ0ZXIgdGhlICVjLCBzbyB3ZSBuZWVkIHRvXG5cdC8vIGZpZ3VyZSBvdXQgdGhlIGNvcnJlY3QgaW5kZXggdG8gaW5zZXJ0IHRoZSBDU1MgaW50b1xuXHRsZXQgaW5kZXggPSAwO1xuXHRsZXQgbGFzdEMgPSAwO1xuXHRhcmdzWzBdLnJlcGxhY2UoLyVbYS16QS1aJV0vZywgbWF0Y2ggPT4ge1xuXHRcdGlmIChtYXRjaCA9PT0gJyUlJykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpbmRleCsrO1xuXHRcdGlmIChtYXRjaCA9PT0gJyVjJykge1xuXHRcdFx0Ly8gV2Ugb25seSBhcmUgaW50ZXJlc3RlZCBpbiB0aGUgKmxhc3QqICVjXG5cdFx0XHQvLyAodGhlIHVzZXIgbWF5IGhhdmUgcHJvdmlkZWQgdGhlaXIgb3duKVxuXHRcdFx0bGFzdEMgPSBpbmRleDtcblx0XHR9XG5cdH0pO1xuXG5cdGFyZ3Muc3BsaWNlKGxhc3RDLCAwLCBjKTtcbn1cblxuLyoqXG4gKiBJbnZva2VzIGBjb25zb2xlLmRlYnVnKClgIHdoZW4gYXZhaWxhYmxlLlxuICogTm8tb3Agd2hlbiBgY29uc29sZS5kZWJ1Z2AgaXMgbm90IGEgXCJmdW5jdGlvblwiLlxuICogSWYgYGNvbnNvbGUuZGVidWdgIGlzIG5vdCBhdmFpbGFibGUsIGZhbGxzIGJhY2tcbiAqIHRvIGBjb25zb2xlLmxvZ2AuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuZXhwb3J0cy5sb2cgPSBjb25zb2xlLmRlYnVnIHx8IGNvbnNvbGUubG9nIHx8ICgoKSA9PiB7fSk7XG5cbi8qKlxuICogU2F2ZSBgbmFtZXNwYWNlc2AuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBzYXZlKG5hbWVzcGFjZXMpIHtcblx0dHJ5IHtcblx0XHRpZiAobmFtZXNwYWNlcykge1xuXHRcdFx0ZXhwb3J0cy5zdG9yYWdlLnNldEl0ZW0oJ2RlYnVnJywgbmFtZXNwYWNlcyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGV4cG9ydHMuc3RvcmFnZS5yZW1vdmVJdGVtKCdkZWJ1ZycpO1xuXHRcdH1cblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHQvLyBTd2FsbG93XG5cdFx0Ly8gWFhYIChAUWl4LSkgc2hvdWxkIHdlIGJlIGxvZ2dpbmcgdGhlc2U/XG5cdH1cbn1cblxuLyoqXG4gKiBMb2FkIGBuYW1lc3BhY2VzYC5cbiAqXG4gKiBAcmV0dXJuIHtTdHJpbmd9IHJldHVybnMgdGhlIHByZXZpb3VzbHkgcGVyc2lzdGVkIGRlYnVnIG1vZGVzXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gbG9hZCgpIHtcblx0bGV0IHI7XG5cdHRyeSB7XG5cdFx0ciA9IGV4cG9ydHMuc3RvcmFnZS5nZXRJdGVtKCdkZWJ1ZycpO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdC8vIFN3YWxsb3dcblx0XHQvLyBYWFggKEBRaXgtKSBzaG91bGQgd2UgYmUgbG9nZ2luZyB0aGVzZT9cblx0fVxuXG5cdC8vIElmIGRlYnVnIGlzbid0IHNldCBpbiBMUywgYW5kIHdlJ3JlIGluIEVsZWN0cm9uLCB0cnkgdG8gbG9hZCAkREVCVUdcblx0aWYgKCFyICYmIHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiAnZW52JyBpbiBwcm9jZXNzKSB7XG5cdFx0ciA9IHByb2Nlc3MuZW52LkRFQlVHO1xuXHR9XG5cblx0cmV0dXJuIHI7XG59XG5cbi8qKlxuICogTG9jYWxzdG9yYWdlIGF0dGVtcHRzIHRvIHJldHVybiB0aGUgbG9jYWxzdG9yYWdlLlxuICpcbiAqIFRoaXMgaXMgbmVjZXNzYXJ5IGJlY2F1c2Ugc2FmYXJpIHRocm93c1xuICogd2hlbiBhIHVzZXIgZGlzYWJsZXMgY29va2llcy9sb2NhbHN0b3JhZ2VcbiAqIGFuZCB5b3UgYXR0ZW1wdCB0byBhY2Nlc3MgaXQuXG4gKlxuICogQHJldHVybiB7TG9jYWxTdG9yYWdlfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gbG9jYWxzdG9yYWdlKCkge1xuXHR0cnkge1xuXHRcdC8vIFRWTUxLaXQgKEFwcGxlIFRWIEpTIFJ1bnRpbWUpIGRvZXMgbm90IGhhdmUgYSB3aW5kb3cgb2JqZWN0LCBqdXN0IGxvY2FsU3RvcmFnZSBpbiB0aGUgZ2xvYmFsIGNvbnRleHRcblx0XHQvLyBUaGUgQnJvd3NlciBhbHNvIGhhcyBsb2NhbFN0b3JhZ2UgaW4gdGhlIGdsb2JhbCBjb250ZXh0LlxuXHRcdHJldHVybiBsb2NhbFN0b3JhZ2U7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Ly8gU3dhbGxvd1xuXHRcdC8vIFhYWCAoQFFpeC0pIHNob3VsZCB3ZSBiZSBsb2dnaW5nIHRoZXNlP1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9jb21tb24nKShleHBvcnRzKTtcblxuY29uc3Qge2Zvcm1hdHRlcnN9ID0gbW9kdWxlLmV4cG9ydHM7XG5cbi8qKlxuICogTWFwICVqIHRvIGBKU09OLnN0cmluZ2lmeSgpYCwgc2luY2Ugbm8gV2ViIEluc3BlY3RvcnMgZG8gdGhhdCBieSBkZWZhdWx0LlxuICovXG5cbmZvcm1hdHRlcnMuaiA9IGZ1bmN0aW9uICh2KSB7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIEpTT04uc3RyaW5naWZ5KHYpO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdHJldHVybiAnW1VuZXhwZWN0ZWRKU09OUGFyc2VFcnJvcl06ICcgKyBlcnJvci5tZXNzYWdlO1xuXHR9XG59O1xuIiwiXG4vKipcbiAqIFRoaXMgaXMgdGhlIGNvbW1vbiBsb2dpYyBmb3IgYm90aCB0aGUgTm9kZS5qcyBhbmQgd2ViIGJyb3dzZXJcbiAqIGltcGxlbWVudGF0aW9ucyBvZiBgZGVidWcoKWAuXG4gKi9cblxuZnVuY3Rpb24gc2V0dXAoZW52KSB7XG5cdGNyZWF0ZURlYnVnLmRlYnVnID0gY3JlYXRlRGVidWc7XG5cdGNyZWF0ZURlYnVnLmRlZmF1bHQgPSBjcmVhdGVEZWJ1Zztcblx0Y3JlYXRlRGVidWcuY29lcmNlID0gY29lcmNlO1xuXHRjcmVhdGVEZWJ1Zy5kaXNhYmxlID0gZGlzYWJsZTtcblx0Y3JlYXRlRGVidWcuZW5hYmxlID0gZW5hYmxlO1xuXHRjcmVhdGVEZWJ1Zy5lbmFibGVkID0gZW5hYmxlZDtcblx0Y3JlYXRlRGVidWcuaHVtYW5pemUgPSByZXF1aXJlKCdtcycpO1xuXHRjcmVhdGVEZWJ1Zy5kZXN0cm95ID0gZGVzdHJveTtcblxuXHRPYmplY3Qua2V5cyhlbnYpLmZvckVhY2goa2V5ID0+IHtcblx0XHRjcmVhdGVEZWJ1Z1trZXldID0gZW52W2tleV07XG5cdH0pO1xuXG5cdC8qKlxuXHQqIFRoZSBjdXJyZW50bHkgYWN0aXZlIGRlYnVnIG1vZGUgbmFtZXMsIGFuZCBuYW1lcyB0byBza2lwLlxuXHQqL1xuXG5cdGNyZWF0ZURlYnVnLm5hbWVzID0gW107XG5cdGNyZWF0ZURlYnVnLnNraXBzID0gW107XG5cblx0LyoqXG5cdCogTWFwIG9mIHNwZWNpYWwgXCIlblwiIGhhbmRsaW5nIGZ1bmN0aW9ucywgZm9yIHRoZSBkZWJ1ZyBcImZvcm1hdFwiIGFyZ3VtZW50LlxuXHQqXG5cdCogVmFsaWQga2V5IG5hbWVzIGFyZSBhIHNpbmdsZSwgbG93ZXIgb3IgdXBwZXItY2FzZSBsZXR0ZXIsIGkuZS4gXCJuXCIgYW5kIFwiTlwiLlxuXHQqL1xuXHRjcmVhdGVEZWJ1Zy5mb3JtYXR0ZXJzID0ge307XG5cblx0LyoqXG5cdCogU2VsZWN0cyBhIGNvbG9yIGZvciBhIGRlYnVnIG5hbWVzcGFjZVxuXHQqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2UgVGhlIG5hbWVzcGFjZSBzdHJpbmcgZm9yIHRoZSBmb3IgdGhlIGRlYnVnIGluc3RhbmNlIHRvIGJlIGNvbG9yZWRcblx0KiBAcmV0dXJuIHtOdW1iZXJ8U3RyaW5nfSBBbiBBTlNJIGNvbG9yIGNvZGUgZm9yIHRoZSBnaXZlbiBuYW1lc3BhY2Vcblx0KiBAYXBpIHByaXZhdGVcblx0Ki9cblx0ZnVuY3Rpb24gc2VsZWN0Q29sb3IobmFtZXNwYWNlKSB7XG5cdFx0bGV0IGhhc2ggPSAwO1xuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBuYW1lc3BhY2UubGVuZ3RoOyBpKyspIHtcblx0XHRcdGhhc2ggPSAoKGhhc2ggPDwgNSkgLSBoYXNoKSArIG5hbWVzcGFjZS5jaGFyQ29kZUF0KGkpO1xuXHRcdFx0aGFzaCB8PSAwOyAvLyBDb252ZXJ0IHRvIDMyYml0IGludGVnZXJcblx0XHR9XG5cblx0XHRyZXR1cm4gY3JlYXRlRGVidWcuY29sb3JzW01hdGguYWJzKGhhc2gpICUgY3JlYXRlRGVidWcuY29sb3JzLmxlbmd0aF07XG5cdH1cblx0Y3JlYXRlRGVidWcuc2VsZWN0Q29sb3IgPSBzZWxlY3RDb2xvcjtcblxuXHQvKipcblx0KiBDcmVhdGUgYSBkZWJ1Z2dlciB3aXRoIHRoZSBnaXZlbiBgbmFtZXNwYWNlYC5cblx0KlxuXHQqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2Vcblx0KiBAcmV0dXJuIHtGdW5jdGlvbn1cblx0KiBAYXBpIHB1YmxpY1xuXHQqL1xuXHRmdW5jdGlvbiBjcmVhdGVEZWJ1ZyhuYW1lc3BhY2UpIHtcblx0XHRsZXQgcHJldlRpbWU7XG5cdFx0bGV0IGVuYWJsZU92ZXJyaWRlID0gbnVsbDtcblxuXHRcdGZ1bmN0aW9uIGRlYnVnKC4uLmFyZ3MpIHtcblx0XHRcdC8vIERpc2FibGVkP1xuXHRcdFx0aWYgKCFkZWJ1Zy5lbmFibGVkKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3Qgc2VsZiA9IGRlYnVnO1xuXG5cdFx0XHQvLyBTZXQgYGRpZmZgIHRpbWVzdGFtcFxuXHRcdFx0Y29uc3QgY3VyciA9IE51bWJlcihuZXcgRGF0ZSgpKTtcblx0XHRcdGNvbnN0IG1zID0gY3VyciAtIChwcmV2VGltZSB8fCBjdXJyKTtcblx0XHRcdHNlbGYuZGlmZiA9IG1zO1xuXHRcdFx0c2VsZi5wcmV2ID0gcHJldlRpbWU7XG5cdFx0XHRzZWxmLmN1cnIgPSBjdXJyO1xuXHRcdFx0cHJldlRpbWUgPSBjdXJyO1xuXG5cdFx0XHRhcmdzWzBdID0gY3JlYXRlRGVidWcuY29lcmNlKGFyZ3NbMF0pO1xuXG5cdFx0XHRpZiAodHlwZW9mIGFyZ3NbMF0gIT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdC8vIEFueXRoaW5nIGVsc2UgbGV0J3MgaW5zcGVjdCB3aXRoICVPXG5cdFx0XHRcdGFyZ3MudW5zaGlmdCgnJU8nKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gQXBwbHkgYW55IGBmb3JtYXR0ZXJzYCB0cmFuc2Zvcm1hdGlvbnNcblx0XHRcdGxldCBpbmRleCA9IDA7XG5cdFx0XHRhcmdzWzBdID0gYXJnc1swXS5yZXBsYWNlKC8lKFthLXpBLVolXSkvZywgKG1hdGNoLCBmb3JtYXQpID0+IHtcblx0XHRcdFx0Ly8gSWYgd2UgZW5jb3VudGVyIGFuIGVzY2FwZWQgJSB0aGVuIGRvbid0IGluY3JlYXNlIHRoZSBhcnJheSBpbmRleFxuXHRcdFx0XHRpZiAobWF0Y2ggPT09ICclJScpIHtcblx0XHRcdFx0XHRyZXR1cm4gJyUnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGluZGV4Kys7XG5cdFx0XHRcdGNvbnN0IGZvcm1hdHRlciA9IGNyZWF0ZURlYnVnLmZvcm1hdHRlcnNbZm9ybWF0XTtcblx0XHRcdFx0aWYgKHR5cGVvZiBmb3JtYXR0ZXIgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0XHRjb25zdCB2YWwgPSBhcmdzW2luZGV4XTtcblx0XHRcdFx0XHRtYXRjaCA9IGZvcm1hdHRlci5jYWxsKHNlbGYsIHZhbCk7XG5cblx0XHRcdFx0XHQvLyBOb3cgd2UgbmVlZCB0byByZW1vdmUgYGFyZ3NbaW5kZXhdYCBzaW5jZSBpdCdzIGlubGluZWQgaW4gdGhlIGBmb3JtYXRgXG5cdFx0XHRcdFx0YXJncy5zcGxpY2UoaW5kZXgsIDEpO1xuXHRcdFx0XHRcdGluZGV4LS07XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIG1hdGNoO1xuXHRcdFx0fSk7XG5cblx0XHRcdC8vIEFwcGx5IGVudi1zcGVjaWZpYyBmb3JtYXR0aW5nIChjb2xvcnMsIGV0Yy4pXG5cdFx0XHRjcmVhdGVEZWJ1Zy5mb3JtYXRBcmdzLmNhbGwoc2VsZiwgYXJncyk7XG5cblx0XHRcdGNvbnN0IGxvZ0ZuID0gc2VsZi5sb2cgfHwgY3JlYXRlRGVidWcubG9nO1xuXHRcdFx0bG9nRm4uYXBwbHkoc2VsZiwgYXJncyk7XG5cdFx0fVxuXG5cdFx0ZGVidWcubmFtZXNwYWNlID0gbmFtZXNwYWNlO1xuXHRcdGRlYnVnLnVzZUNvbG9ycyA9IGNyZWF0ZURlYnVnLnVzZUNvbG9ycygpO1xuXHRcdGRlYnVnLmNvbG9yID0gY3JlYXRlRGVidWcuc2VsZWN0Q29sb3IobmFtZXNwYWNlKTtcblx0XHRkZWJ1Zy5leHRlbmQgPSBleHRlbmQ7XG5cdFx0ZGVidWcuZGVzdHJveSA9IGNyZWF0ZURlYnVnLmRlc3Ryb3k7IC8vIFhYWCBUZW1wb3JhcnkuIFdpbGwgYmUgcmVtb3ZlZCBpbiB0aGUgbmV4dCBtYWpvciByZWxlYXNlLlxuXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGRlYnVnLCAnZW5hYmxlZCcsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuXHRcdFx0Z2V0OiAoKSA9PiBlbmFibGVPdmVycmlkZSA9PT0gbnVsbCA/IGNyZWF0ZURlYnVnLmVuYWJsZWQobmFtZXNwYWNlKSA6IGVuYWJsZU92ZXJyaWRlLFxuXHRcdFx0c2V0OiB2ID0+IHtcblx0XHRcdFx0ZW5hYmxlT3ZlcnJpZGUgPSB2O1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0Ly8gRW52LXNwZWNpZmljIGluaXRpYWxpemF0aW9uIGxvZ2ljIGZvciBkZWJ1ZyBpbnN0YW5jZXNcblx0XHRpZiAodHlwZW9mIGNyZWF0ZURlYnVnLmluaXQgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdGNyZWF0ZURlYnVnLmluaXQoZGVidWcpO1xuXHRcdH1cblxuXHRcdHJldHVybiBkZWJ1Zztcblx0fVxuXG5cdGZ1bmN0aW9uIGV4dGVuZChuYW1lc3BhY2UsIGRlbGltaXRlcikge1xuXHRcdGNvbnN0IG5ld0RlYnVnID0gY3JlYXRlRGVidWcodGhpcy5uYW1lc3BhY2UgKyAodHlwZW9mIGRlbGltaXRlciA9PT0gJ3VuZGVmaW5lZCcgPyAnOicgOiBkZWxpbWl0ZXIpICsgbmFtZXNwYWNlKTtcblx0XHRuZXdEZWJ1Zy5sb2cgPSB0aGlzLmxvZztcblx0XHRyZXR1cm4gbmV3RGVidWc7XG5cdH1cblxuXHQvKipcblx0KiBFbmFibGVzIGEgZGVidWcgbW9kZSBieSBuYW1lc3BhY2VzLiBUaGlzIGNhbiBpbmNsdWRlIG1vZGVzXG5cdCogc2VwYXJhdGVkIGJ5IGEgY29sb24gYW5kIHdpbGRjYXJkcy5cblx0KlxuXHQqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2VzXG5cdCogQGFwaSBwdWJsaWNcblx0Ki9cblx0ZnVuY3Rpb24gZW5hYmxlKG5hbWVzcGFjZXMpIHtcblx0XHRjcmVhdGVEZWJ1Zy5zYXZlKG5hbWVzcGFjZXMpO1xuXG5cdFx0Y3JlYXRlRGVidWcubmFtZXMgPSBbXTtcblx0XHRjcmVhdGVEZWJ1Zy5za2lwcyA9IFtdO1xuXG5cdFx0bGV0IGk7XG5cdFx0Y29uc3Qgc3BsaXQgPSAodHlwZW9mIG5hbWVzcGFjZXMgPT09ICdzdHJpbmcnID8gbmFtZXNwYWNlcyA6ICcnKS5zcGxpdCgvW1xccyxdKy8pO1xuXHRcdGNvbnN0IGxlbiA9IHNwbGl0Lmxlbmd0aDtcblxuXHRcdGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0aWYgKCFzcGxpdFtpXSkge1xuXHRcdFx0XHQvLyBpZ25vcmUgZW1wdHkgc3RyaW5nc1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0bmFtZXNwYWNlcyA9IHNwbGl0W2ldLnJlcGxhY2UoL1xcKi9nLCAnLio/Jyk7XG5cblx0XHRcdGlmIChuYW1lc3BhY2VzWzBdID09PSAnLScpIHtcblx0XHRcdFx0Y3JlYXRlRGVidWcuc2tpcHMucHVzaChuZXcgUmVnRXhwKCdeJyArIG5hbWVzcGFjZXMuc3Vic3RyKDEpICsgJyQnKSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjcmVhdGVEZWJ1Zy5uYW1lcy5wdXNoKG5ldyBSZWdFeHAoJ14nICsgbmFtZXNwYWNlcyArICckJykpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQqIERpc2FibGUgZGVidWcgb3V0cHV0LlxuXHQqXG5cdCogQHJldHVybiB7U3RyaW5nfSBuYW1lc3BhY2VzXG5cdCogQGFwaSBwdWJsaWNcblx0Ki9cblx0ZnVuY3Rpb24gZGlzYWJsZSgpIHtcblx0XHRjb25zdCBuYW1lc3BhY2VzID0gW1xuXHRcdFx0Li4uY3JlYXRlRGVidWcubmFtZXMubWFwKHRvTmFtZXNwYWNlKSxcblx0XHRcdC4uLmNyZWF0ZURlYnVnLnNraXBzLm1hcCh0b05hbWVzcGFjZSkubWFwKG5hbWVzcGFjZSA9PiAnLScgKyBuYW1lc3BhY2UpXG5cdFx0XS5qb2luKCcsJyk7XG5cdFx0Y3JlYXRlRGVidWcuZW5hYmxlKCcnKTtcblx0XHRyZXR1cm4gbmFtZXNwYWNlcztcblx0fVxuXG5cdC8qKlxuXHQqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gbW9kZSBuYW1lIGlzIGVuYWJsZWQsIGZhbHNlIG90aGVyd2lzZS5cblx0KlxuXHQqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG5cdCogQHJldHVybiB7Qm9vbGVhbn1cblx0KiBAYXBpIHB1YmxpY1xuXHQqL1xuXHRmdW5jdGlvbiBlbmFibGVkKG5hbWUpIHtcblx0XHRpZiAobmFtZVtuYW1lLmxlbmd0aCAtIDFdID09PSAnKicpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdGxldCBpO1xuXHRcdGxldCBsZW47XG5cblx0XHRmb3IgKGkgPSAwLCBsZW4gPSBjcmVhdGVEZWJ1Zy5za2lwcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0aWYgKGNyZWF0ZURlYnVnLnNraXBzW2ldLnRlc3QobmFtZSkpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGZvciAoaSA9IDAsIGxlbiA9IGNyZWF0ZURlYnVnLm5hbWVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHRpZiAoY3JlYXRlRGVidWcubmFtZXNbaV0udGVzdChuYW1lKSkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHQvKipcblx0KiBDb252ZXJ0IHJlZ2V4cCB0byBuYW1lc3BhY2Vcblx0KlxuXHQqIEBwYXJhbSB7UmVnRXhwfSByZWd4ZXBcblx0KiBAcmV0dXJuIHtTdHJpbmd9IG5hbWVzcGFjZVxuXHQqIEBhcGkgcHJpdmF0ZVxuXHQqL1xuXHRmdW5jdGlvbiB0b05hbWVzcGFjZShyZWdleHApIHtcblx0XHRyZXR1cm4gcmVnZXhwLnRvU3RyaW5nKClcblx0XHRcdC5zdWJzdHJpbmcoMiwgcmVnZXhwLnRvU3RyaW5nKCkubGVuZ3RoIC0gMilcblx0XHRcdC5yZXBsYWNlKC9cXC5cXCpcXD8kLywgJyonKTtcblx0fVxuXG5cdC8qKlxuXHQqIENvZXJjZSBgdmFsYC5cblx0KlxuXHQqIEBwYXJhbSB7TWl4ZWR9IHZhbFxuXHQqIEByZXR1cm4ge01peGVkfVxuXHQqIEBhcGkgcHJpdmF0ZVxuXHQqL1xuXHRmdW5jdGlvbiBjb2VyY2UodmFsKSB7XG5cdFx0aWYgKHZhbCBpbnN0YW5jZW9mIEVycm9yKSB7XG5cdFx0XHRyZXR1cm4gdmFsLnN0YWNrIHx8IHZhbC5tZXNzYWdlO1xuXHRcdH1cblx0XHRyZXR1cm4gdmFsO1xuXHR9XG5cblx0LyoqXG5cdCogWFhYIERPIE5PVCBVU0UuIFRoaXMgaXMgYSB0ZW1wb3Jhcnkgc3R1YiBmdW5jdGlvbi5cblx0KiBYWFggSXQgV0lMTCBiZSByZW1vdmVkIGluIHRoZSBuZXh0IG1ham9yIHJlbGVhc2UuXG5cdCovXG5cdGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG5cdFx0Y29uc29sZS53YXJuKCdJbnN0YW5jZSBtZXRob2QgYGRlYnVnLmRlc3Ryb3koKWAgaXMgZGVwcmVjYXRlZCBhbmQgbm8gbG9uZ2VyIGRvZXMgYW55dGhpbmcuIEl0IHdpbGwgYmUgcmVtb3ZlZCBpbiB0aGUgbmV4dCBtYWpvciB2ZXJzaW9uIG9mIGBkZWJ1Z2AuJyk7XG5cdH1cblxuXHRjcmVhdGVEZWJ1Zy5lbmFibGUoY3JlYXRlRGVidWcubG9hZCgpKTtcblxuXHRyZXR1cm4gY3JlYXRlRGVidWc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0dXA7XG4iLCJtb2R1bGUuZXhwb3J0cyA9ICgoKSA9PiB7XG4gIGlmICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiBzZWxmO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4gd2luZG93O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG4gIH1cbn0pKCk7XG4iLCJjb25zdCBTb2NrZXQgPSByZXF1aXJlKFwiLi9zb2NrZXRcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gKHVyaSwgb3B0cykgPT4gbmV3IFNvY2tldCh1cmksIG9wdHMpO1xuXG4vKipcbiAqIEV4cG9zZSBkZXBzIGZvciBsZWdhY3kgY29tcGF0aWJpbGl0eVxuICogYW5kIHN0YW5kYWxvbmUgYnJvd3NlciBhY2Nlc3MuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMuU29ja2V0ID0gU29ja2V0O1xubW9kdWxlLmV4cG9ydHMucHJvdG9jb2wgPSBTb2NrZXQucHJvdG9jb2w7IC8vIHRoaXMgaXMgYW4gaW50XG5tb2R1bGUuZXhwb3J0cy5UcmFuc3BvcnQgPSByZXF1aXJlKFwiLi90cmFuc3BvcnRcIik7XG5tb2R1bGUuZXhwb3J0cy50cmFuc3BvcnRzID0gcmVxdWlyZShcIi4vdHJhbnNwb3J0cy9pbmRleFwiKTtcbm1vZHVsZS5leHBvcnRzLnBhcnNlciA9IHJlcXVpcmUoXCJlbmdpbmUuaW8tcGFyc2VyXCIpO1xuIiwiY29uc3QgdHJhbnNwb3J0cyA9IHJlcXVpcmUoXCIuL3RyYW5zcG9ydHMvaW5kZXhcIik7XG5jb25zdCBFbWl0dGVyID0gcmVxdWlyZShcImNvbXBvbmVudC1lbWl0dGVyXCIpO1xuY29uc3QgZGVidWcgPSByZXF1aXJlKFwiZGVidWdcIikoXCJlbmdpbmUuaW8tY2xpZW50OnNvY2tldFwiKTtcbmNvbnN0IHBhcnNlciA9IHJlcXVpcmUoXCJlbmdpbmUuaW8tcGFyc2VyXCIpO1xuY29uc3QgcGFyc2V1cmkgPSByZXF1aXJlKFwicGFyc2V1cmlcIik7XG5jb25zdCBwYXJzZXFzID0gcmVxdWlyZShcInBhcnNlcXNcIik7XG5cbmNsYXNzIFNvY2tldCBleHRlbmRzIEVtaXR0ZXIge1xuICAvKipcbiAgICogU29ja2V0IGNvbnN0cnVjdG9yLlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ3xPYmplY3R9IHVyaSBvciBvcHRpb25zXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih1cmksIG9wdHMgPSB7fSkge1xuICAgIHN1cGVyKCk7XG5cbiAgICBpZiAodXJpICYmIFwib2JqZWN0XCIgPT09IHR5cGVvZiB1cmkpIHtcbiAgICAgIG9wdHMgPSB1cmk7XG4gICAgICB1cmkgPSBudWxsO1xuICAgIH1cblxuICAgIGlmICh1cmkpIHtcbiAgICAgIHVyaSA9IHBhcnNldXJpKHVyaSk7XG4gICAgICBvcHRzLmhvc3RuYW1lID0gdXJpLmhvc3Q7XG4gICAgICBvcHRzLnNlY3VyZSA9IHVyaS5wcm90b2NvbCA9PT0gXCJodHRwc1wiIHx8IHVyaS5wcm90b2NvbCA9PT0gXCJ3c3NcIjtcbiAgICAgIG9wdHMucG9ydCA9IHVyaS5wb3J0O1xuICAgICAgaWYgKHVyaS5xdWVyeSkgb3B0cy5xdWVyeSA9IHVyaS5xdWVyeTtcbiAgICB9IGVsc2UgaWYgKG9wdHMuaG9zdCkge1xuICAgICAgb3B0cy5ob3N0bmFtZSA9IHBhcnNldXJpKG9wdHMuaG9zdCkuaG9zdDtcbiAgICB9XG5cbiAgICB0aGlzLnNlY3VyZSA9XG4gICAgICBudWxsICE9IG9wdHMuc2VjdXJlXG4gICAgICAgID8gb3B0cy5zZWN1cmVcbiAgICAgICAgOiB0eXBlb2YgbG9jYXRpb24gIT09IFwidW5kZWZpbmVkXCIgJiYgXCJodHRwczpcIiA9PT0gbG9jYXRpb24ucHJvdG9jb2w7XG5cbiAgICBpZiAob3B0cy5ob3N0bmFtZSAmJiAhb3B0cy5wb3J0KSB7XG4gICAgICAvLyBpZiBubyBwb3J0IGlzIHNwZWNpZmllZCBtYW51YWxseSwgdXNlIHRoZSBwcm90b2NvbCBkZWZhdWx0XG4gICAgICBvcHRzLnBvcnQgPSB0aGlzLnNlY3VyZSA/IFwiNDQzXCIgOiBcIjgwXCI7XG4gICAgfVxuXG4gICAgdGhpcy5ob3N0bmFtZSA9XG4gICAgICBvcHRzLmhvc3RuYW1lIHx8XG4gICAgICAodHlwZW9mIGxvY2F0aW9uICE9PSBcInVuZGVmaW5lZFwiID8gbG9jYXRpb24uaG9zdG5hbWUgOiBcImxvY2FsaG9zdFwiKTtcbiAgICB0aGlzLnBvcnQgPVxuICAgICAgb3B0cy5wb3J0IHx8XG4gICAgICAodHlwZW9mIGxvY2F0aW9uICE9PSBcInVuZGVmaW5lZFwiICYmIGxvY2F0aW9uLnBvcnRcbiAgICAgICAgPyBsb2NhdGlvbi5wb3J0XG4gICAgICAgIDogdGhpcy5zZWN1cmVcbiAgICAgICAgPyA0NDNcbiAgICAgICAgOiA4MCk7XG5cbiAgICB0aGlzLnRyYW5zcG9ydHMgPSBvcHRzLnRyYW5zcG9ydHMgfHwgW1wicG9sbGluZ1wiLCBcIndlYnNvY2tldFwiXTtcbiAgICB0aGlzLnJlYWR5U3RhdGUgPSBcIlwiO1xuICAgIHRoaXMud3JpdGVCdWZmZXIgPSBbXTtcbiAgICB0aGlzLnByZXZCdWZmZXJMZW4gPSAwO1xuXG4gICAgdGhpcy5vcHRzID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIHtcbiAgICAgICAgcGF0aDogXCIvZW5naW5lLmlvXCIsXG4gICAgICAgIGFnZW50OiBmYWxzZSxcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzOiBmYWxzZSxcbiAgICAgICAgdXBncmFkZTogdHJ1ZSxcbiAgICAgICAganNvbnA6IHRydWUsXG4gICAgICAgIHRpbWVzdGFtcFBhcmFtOiBcInRcIixcbiAgICAgICAgcmVtZW1iZXJVcGdyYWRlOiBmYWxzZSxcbiAgICAgICAgcmVqZWN0VW5hdXRob3JpemVkOiB0cnVlLFxuICAgICAgICBwZXJNZXNzYWdlRGVmbGF0ZToge1xuICAgICAgICAgIHRocmVzaG9sZDogMTAyNFxuICAgICAgICB9LFxuICAgICAgICB0cmFuc3BvcnRPcHRpb25zOiB7fSxcbiAgICAgICAgY2xvc2VPbkJlZm9yZXVubG9hZDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIG9wdHNcbiAgICApO1xuXG4gICAgdGhpcy5vcHRzLnBhdGggPSB0aGlzLm9wdHMucGF0aC5yZXBsYWNlKC9cXC8kLywgXCJcIikgKyBcIi9cIjtcblxuICAgIGlmICh0eXBlb2YgdGhpcy5vcHRzLnF1ZXJ5ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICB0aGlzLm9wdHMucXVlcnkgPSBwYXJzZXFzLmRlY29kZSh0aGlzLm9wdHMucXVlcnkpO1xuICAgIH1cblxuICAgIC8vIHNldCBvbiBoYW5kc2hha2VcbiAgICB0aGlzLmlkID0gbnVsbDtcbiAgICB0aGlzLnVwZ3JhZGVzID0gbnVsbDtcbiAgICB0aGlzLnBpbmdJbnRlcnZhbCA9IG51bGw7XG4gICAgdGhpcy5waW5nVGltZW91dCA9IG51bGw7XG5cbiAgICAvLyBzZXQgb24gaGVhcnRiZWF0XG4gICAgdGhpcy5waW5nVGltZW91dFRpbWVyID0gbnVsbDtcblxuICAgIGlmICh0eXBlb2YgYWRkRXZlbnRMaXN0ZW5lciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICBpZiAodGhpcy5vcHRzLmNsb3NlT25CZWZvcmV1bmxvYWQpIHtcbiAgICAgICAgLy8gRmlyZWZveCBjbG9zZXMgdGhlIGNvbm5lY3Rpb24gd2hlbiB0aGUgXCJiZWZvcmV1bmxvYWRcIiBldmVudCBpcyBlbWl0dGVkIGJ1dCBub3QgQ2hyb21lLiBUaGlzIGV2ZW50IGxpc3RlbmVyXG4gICAgICAgIC8vIGVuc3VyZXMgZXZlcnkgYnJvd3NlciBiZWhhdmVzIHRoZSBzYW1lIChubyBcImRpc2Nvbm5lY3RcIiBldmVudCBhdCB0aGUgU29ja2V0LklPIGxldmVsIHdoZW4gdGhlIHBhZ2UgaXNcbiAgICAgICAgLy8gY2xvc2VkL3JlbG9hZGVkKVxuICAgICAgICBhZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgIFwiYmVmb3JldW5sb2FkXCIsXG4gICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMudHJhbnNwb3J0KSB7XG4gICAgICAgICAgICAgIC8vIHNpbGVudGx5IGNsb3NlIHRoZSB0cmFuc3BvcnRcbiAgICAgICAgICAgICAgdGhpcy50cmFuc3BvcnQucmVtb3ZlQWxsTGlzdGVuZXJzKCk7XG4gICAgICAgICAgICAgIHRoaXMudHJhbnNwb3J0LmNsb3NlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBmYWxzZVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuaG9zdG5hbWUgIT09IFwibG9jYWxob3N0XCIpIHtcbiAgICAgICAgdGhpcy5vZmZsaW5lRXZlbnRMaXN0ZW5lciA9ICgpID0+IHtcbiAgICAgICAgICB0aGlzLm9uQ2xvc2UoXCJ0cmFuc3BvcnQgY2xvc2VcIik7XG4gICAgICAgIH07XG4gICAgICAgIGFkZEV2ZW50TGlzdGVuZXIoXCJvZmZsaW5lXCIsIHRoaXMub2ZmbGluZUV2ZW50TGlzdGVuZXIsIGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLm9wZW4oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIHRyYW5zcG9ydCBvZiB0aGUgZ2l2ZW4gdHlwZS5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IHRyYW5zcG9ydCBuYW1lXG4gICAqIEByZXR1cm4ge1RyYW5zcG9ydH1cbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBjcmVhdGVUcmFuc3BvcnQobmFtZSkge1xuICAgIGRlYnVnKCdjcmVhdGluZyB0cmFuc3BvcnQgXCIlc1wiJywgbmFtZSk7XG4gICAgY29uc3QgcXVlcnkgPSBjbG9uZSh0aGlzLm9wdHMucXVlcnkpO1xuXG4gICAgLy8gYXBwZW5kIGVuZ2luZS5pbyBwcm90b2NvbCBpZGVudGlmaWVyXG4gICAgcXVlcnkuRUlPID0gcGFyc2VyLnByb3RvY29sO1xuXG4gICAgLy8gdHJhbnNwb3J0IG5hbWVcbiAgICBxdWVyeS50cmFuc3BvcnQgPSBuYW1lO1xuXG4gICAgLy8gc2Vzc2lvbiBpZCBpZiB3ZSBhbHJlYWR5IGhhdmUgb25lXG4gICAgaWYgKHRoaXMuaWQpIHF1ZXJ5LnNpZCA9IHRoaXMuaWQ7XG5cbiAgICBjb25zdCBvcHRzID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIHt9LFxuICAgICAgdGhpcy5vcHRzLnRyYW5zcG9ydE9wdGlvbnNbbmFtZV0sXG4gICAgICB0aGlzLm9wdHMsXG4gICAgICB7XG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBzb2NrZXQ6IHRoaXMsXG4gICAgICAgIGhvc3RuYW1lOiB0aGlzLmhvc3RuYW1lLFxuICAgICAgICBzZWN1cmU6IHRoaXMuc2VjdXJlLFxuICAgICAgICBwb3J0OiB0aGlzLnBvcnRcbiAgICAgIH1cbiAgICApO1xuXG4gICAgZGVidWcoXCJvcHRpb25zOiAlalwiLCBvcHRzKTtcblxuICAgIHJldHVybiBuZXcgdHJhbnNwb3J0c1tuYW1lXShvcHRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyB0cmFuc3BvcnQgdG8gdXNlIGFuZCBzdGFydHMgcHJvYmUuXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgb3BlbigpIHtcbiAgICBsZXQgdHJhbnNwb3J0O1xuICAgIGlmIChcbiAgICAgIHRoaXMub3B0cy5yZW1lbWJlclVwZ3JhZGUgJiZcbiAgICAgIFNvY2tldC5wcmlvcldlYnNvY2tldFN1Y2Nlc3MgJiZcbiAgICAgIHRoaXMudHJhbnNwb3J0cy5pbmRleE9mKFwid2Vic29ja2V0XCIpICE9PSAtMVxuICAgICkge1xuICAgICAgdHJhbnNwb3J0ID0gXCJ3ZWJzb2NrZXRcIjtcbiAgICB9IGVsc2UgaWYgKDAgPT09IHRoaXMudHJhbnNwb3J0cy5sZW5ndGgpIHtcbiAgICAgIC8vIEVtaXQgZXJyb3Igb24gbmV4dCB0aWNrIHNvIGl0IGNhbiBiZSBsaXN0ZW5lZCB0b1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZW1pdChcImVycm9yXCIsIFwiTm8gdHJhbnNwb3J0cyBhdmFpbGFibGVcIik7XG4gICAgICB9LCAwKTtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgdHJhbnNwb3J0ID0gdGhpcy50cmFuc3BvcnRzWzBdO1xuICAgIH1cbiAgICB0aGlzLnJlYWR5U3RhdGUgPSBcIm9wZW5pbmdcIjtcblxuICAgIC8vIFJldHJ5IHdpdGggdGhlIG5leHQgdHJhbnNwb3J0IGlmIHRoZSB0cmFuc3BvcnQgaXMgZGlzYWJsZWQgKGpzb25wOiBmYWxzZSlcbiAgICB0cnkge1xuICAgICAgdHJhbnNwb3J0ID0gdGhpcy5jcmVhdGVUcmFuc3BvcnQodHJhbnNwb3J0KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBkZWJ1ZyhcImVycm9yIHdoaWxlIGNyZWF0aW5nIHRyYW5zcG9ydDogJXNcIiwgZSk7XG4gICAgICB0aGlzLnRyYW5zcG9ydHMuc2hpZnQoKTtcbiAgICAgIHRoaXMub3BlbigpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRyYW5zcG9ydC5vcGVuKCk7XG4gICAgdGhpcy5zZXRUcmFuc3BvcnQodHJhbnNwb3J0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBjdXJyZW50IHRyYW5zcG9ydC4gRGlzYWJsZXMgdGhlIGV4aXN0aW5nIG9uZSAoaWYgYW55KS5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBzZXRUcmFuc3BvcnQodHJhbnNwb3J0KSB7XG4gICAgZGVidWcoXCJzZXR0aW5nIHRyYW5zcG9ydCAlc1wiLCB0cmFuc3BvcnQubmFtZSk7XG5cbiAgICBpZiAodGhpcy50cmFuc3BvcnQpIHtcbiAgICAgIGRlYnVnKFwiY2xlYXJpbmcgZXhpc3RpbmcgdHJhbnNwb3J0ICVzXCIsIHRoaXMudHJhbnNwb3J0Lm5hbWUpO1xuICAgICAgdGhpcy50cmFuc3BvcnQucmVtb3ZlQWxsTGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgLy8gc2V0IHVwIHRyYW5zcG9ydFxuICAgIHRoaXMudHJhbnNwb3J0ID0gdHJhbnNwb3J0O1xuXG4gICAgLy8gc2V0IHVwIHRyYW5zcG9ydCBsaXN0ZW5lcnNcbiAgICB0cmFuc3BvcnRcbiAgICAgIC5vbihcImRyYWluXCIsIHRoaXMub25EcmFpbi5iaW5kKHRoaXMpKVxuICAgICAgLm9uKFwicGFja2V0XCIsIHRoaXMub25QYWNrZXQuYmluZCh0aGlzKSlcbiAgICAgIC5vbihcImVycm9yXCIsIHRoaXMub25FcnJvci5iaW5kKHRoaXMpKVxuICAgICAgLm9uKFwiY2xvc2VcIiwgKCkgPT4ge1xuICAgICAgICB0aGlzLm9uQ2xvc2UoXCJ0cmFuc3BvcnQgY2xvc2VcIik7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm9iZXMgYSB0cmFuc3BvcnQuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB0cmFuc3BvcnQgbmFtZVxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIHByb2JlKG5hbWUpIHtcbiAgICBkZWJ1ZygncHJvYmluZyB0cmFuc3BvcnQgXCIlc1wiJywgbmFtZSk7XG4gICAgbGV0IHRyYW5zcG9ydCA9IHRoaXMuY3JlYXRlVHJhbnNwb3J0KG5hbWUsIHsgcHJvYmU6IDEgfSk7XG4gICAgbGV0IGZhaWxlZCA9IGZhbHNlO1xuXG4gICAgU29ja2V0LnByaW9yV2Vic29ja2V0U3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgb25UcmFuc3BvcnRPcGVuID0gKCkgPT4ge1xuICAgICAgaWYgKGZhaWxlZCkgcmV0dXJuO1xuXG4gICAgICBkZWJ1ZygncHJvYmUgdHJhbnNwb3J0IFwiJXNcIiBvcGVuZWQnLCBuYW1lKTtcbiAgICAgIHRyYW5zcG9ydC5zZW5kKFt7IHR5cGU6IFwicGluZ1wiLCBkYXRhOiBcInByb2JlXCIgfV0pO1xuICAgICAgdHJhbnNwb3J0Lm9uY2UoXCJwYWNrZXRcIiwgbXNnID0+IHtcbiAgICAgICAgaWYgKGZhaWxlZCkgcmV0dXJuO1xuICAgICAgICBpZiAoXCJwb25nXCIgPT09IG1zZy50eXBlICYmIFwicHJvYmVcIiA9PT0gbXNnLmRhdGEpIHtcbiAgICAgICAgICBkZWJ1ZygncHJvYmUgdHJhbnNwb3J0IFwiJXNcIiBwb25nJywgbmFtZSk7XG4gICAgICAgICAgdGhpcy51cGdyYWRpbmcgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuZW1pdChcInVwZ3JhZGluZ1wiLCB0cmFuc3BvcnQpO1xuICAgICAgICAgIGlmICghdHJhbnNwb3J0KSByZXR1cm47XG4gICAgICAgICAgU29ja2V0LnByaW9yV2Vic29ja2V0U3VjY2VzcyA9IFwid2Vic29ja2V0XCIgPT09IHRyYW5zcG9ydC5uYW1lO1xuXG4gICAgICAgICAgZGVidWcoJ3BhdXNpbmcgY3VycmVudCB0cmFuc3BvcnQgXCIlc1wiJywgdGhpcy50cmFuc3BvcnQubmFtZSk7XG4gICAgICAgICAgdGhpcy50cmFuc3BvcnQucGF1c2UoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGZhaWxlZCkgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKFwiY2xvc2VkXCIgPT09IHRoaXMucmVhZHlTdGF0ZSkgcmV0dXJuO1xuICAgICAgICAgICAgZGVidWcoXCJjaGFuZ2luZyB0cmFuc3BvcnQgYW5kIHNlbmRpbmcgdXBncmFkZSBwYWNrZXRcIik7XG5cbiAgICAgICAgICAgIGNsZWFudXAoKTtcblxuICAgICAgICAgICAgdGhpcy5zZXRUcmFuc3BvcnQodHJhbnNwb3J0KTtcbiAgICAgICAgICAgIHRyYW5zcG9ydC5zZW5kKFt7IHR5cGU6IFwidXBncmFkZVwiIH1dKTtcbiAgICAgICAgICAgIHRoaXMuZW1pdChcInVwZ3JhZGVcIiwgdHJhbnNwb3J0KTtcbiAgICAgICAgICAgIHRyYW5zcG9ydCA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLnVwZ3JhZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5mbHVzaCgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRlYnVnKCdwcm9iZSB0cmFuc3BvcnQgXCIlc1wiIGZhaWxlZCcsIG5hbWUpO1xuICAgICAgICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcihcInByb2JlIGVycm9yXCIpO1xuICAgICAgICAgIGVyci50cmFuc3BvcnQgPSB0cmFuc3BvcnQubmFtZTtcbiAgICAgICAgICB0aGlzLmVtaXQoXCJ1cGdyYWRlRXJyb3JcIiwgZXJyKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGZyZWV6ZVRyYW5zcG9ydCgpIHtcbiAgICAgIGlmIChmYWlsZWQpIHJldHVybjtcblxuICAgICAgLy8gQW55IGNhbGxiYWNrIGNhbGxlZCBieSB0cmFuc3BvcnQgc2hvdWxkIGJlIGlnbm9yZWQgc2luY2Ugbm93XG4gICAgICBmYWlsZWQgPSB0cnVlO1xuXG4gICAgICBjbGVhbnVwKCk7XG5cbiAgICAgIHRyYW5zcG9ydC5jbG9zZSgpO1xuICAgICAgdHJhbnNwb3J0ID0gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgYW55IGVycm9yIHRoYXQgaGFwcGVucyB3aGlsZSBwcm9iaW5nXG4gICAgY29uc3Qgb25lcnJvciA9IGVyciA9PiB7XG4gICAgICBjb25zdCBlcnJvciA9IG5ldyBFcnJvcihcInByb2JlIGVycm9yOiBcIiArIGVycik7XG4gICAgICBlcnJvci50cmFuc3BvcnQgPSB0cmFuc3BvcnQubmFtZTtcblxuICAgICAgZnJlZXplVHJhbnNwb3J0KCk7XG5cbiAgICAgIGRlYnVnKCdwcm9iZSB0cmFuc3BvcnQgXCIlc1wiIGZhaWxlZCBiZWNhdXNlIG9mIGVycm9yOiAlcycsIG5hbWUsIGVycik7XG5cbiAgICAgIHRoaXMuZW1pdChcInVwZ3JhZGVFcnJvclwiLCBlcnJvcik7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIG9uVHJhbnNwb3J0Q2xvc2UoKSB7XG4gICAgICBvbmVycm9yKFwidHJhbnNwb3J0IGNsb3NlZFwiKTtcbiAgICB9XG5cbiAgICAvLyBXaGVuIHRoZSBzb2NrZXQgaXMgY2xvc2VkIHdoaWxlIHdlJ3JlIHByb2JpbmdcbiAgICBmdW5jdGlvbiBvbmNsb3NlKCkge1xuICAgICAgb25lcnJvcihcInNvY2tldCBjbG9zZWRcIik7XG4gICAgfVxuXG4gICAgLy8gV2hlbiB0aGUgc29ja2V0IGlzIHVwZ3JhZGVkIHdoaWxlIHdlJ3JlIHByb2JpbmdcbiAgICBmdW5jdGlvbiBvbnVwZ3JhZGUodG8pIHtcbiAgICAgIGlmICh0cmFuc3BvcnQgJiYgdG8ubmFtZSAhPT0gdHJhbnNwb3J0Lm5hbWUpIHtcbiAgICAgICAgZGVidWcoJ1wiJXNcIiB3b3JrcyAtIGFib3J0aW5nIFwiJXNcIicsIHRvLm5hbWUsIHRyYW5zcG9ydC5uYW1lKTtcbiAgICAgICAgZnJlZXplVHJhbnNwb3J0KCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmVtb3ZlIGFsbCBsaXN0ZW5lcnMgb24gdGhlIHRyYW5zcG9ydCBhbmQgb24gc2VsZlxuICAgIGNvbnN0IGNsZWFudXAgPSAoKSA9PiB7XG4gICAgICB0cmFuc3BvcnQucmVtb3ZlTGlzdGVuZXIoXCJvcGVuXCIsIG9uVHJhbnNwb3J0T3Blbik7XG4gICAgICB0cmFuc3BvcnQucmVtb3ZlTGlzdGVuZXIoXCJlcnJvclwiLCBvbmVycm9yKTtcbiAgICAgIHRyYW5zcG9ydC5yZW1vdmVMaXN0ZW5lcihcImNsb3NlXCIsIG9uVHJhbnNwb3J0Q2xvc2UpO1xuICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcihcImNsb3NlXCIsIG9uY2xvc2UpO1xuICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcihcInVwZ3JhZGluZ1wiLCBvbnVwZ3JhZGUpO1xuICAgIH07XG5cbiAgICB0cmFuc3BvcnQub25jZShcIm9wZW5cIiwgb25UcmFuc3BvcnRPcGVuKTtcbiAgICB0cmFuc3BvcnQub25jZShcImVycm9yXCIsIG9uZXJyb3IpO1xuICAgIHRyYW5zcG9ydC5vbmNlKFwiY2xvc2VcIiwgb25UcmFuc3BvcnRDbG9zZSk7XG5cbiAgICB0aGlzLm9uY2UoXCJjbG9zZVwiLCBvbmNsb3NlKTtcbiAgICB0aGlzLm9uY2UoXCJ1cGdyYWRpbmdcIiwgb251cGdyYWRlKTtcblxuICAgIHRyYW5zcG9ydC5vcGVuKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gY29ubmVjdGlvbiBpcyBkZWVtZWQgb3Blbi5cbiAgICpcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG4gIG9uT3BlbigpIHtcbiAgICBkZWJ1ZyhcInNvY2tldCBvcGVuXCIpO1xuICAgIHRoaXMucmVhZHlTdGF0ZSA9IFwib3BlblwiO1xuICAgIFNvY2tldC5wcmlvcldlYnNvY2tldFN1Y2Nlc3MgPSBcIndlYnNvY2tldFwiID09PSB0aGlzLnRyYW5zcG9ydC5uYW1lO1xuICAgIHRoaXMuZW1pdChcIm9wZW5cIik7XG4gICAgdGhpcy5mbHVzaCgpO1xuXG4gICAgLy8gd2UgY2hlY2sgZm9yIGByZWFkeVN0YXRlYCBpbiBjYXNlIGFuIGBvcGVuYFxuICAgIC8vIGxpc3RlbmVyIGFscmVhZHkgY2xvc2VkIHRoZSBzb2NrZXRcbiAgICBpZiAoXG4gICAgICBcIm9wZW5cIiA9PT0gdGhpcy5yZWFkeVN0YXRlICYmXG4gICAgICB0aGlzLm9wdHMudXBncmFkZSAmJlxuICAgICAgdGhpcy50cmFuc3BvcnQucGF1c2VcbiAgICApIHtcbiAgICAgIGRlYnVnKFwic3RhcnRpbmcgdXBncmFkZSBwcm9iZXNcIik7XG4gICAgICBsZXQgaSA9IDA7XG4gICAgICBjb25zdCBsID0gdGhpcy51cGdyYWRlcy5sZW5ndGg7XG4gICAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xuICAgICAgICB0aGlzLnByb2JlKHRoaXMudXBncmFkZXNbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGVzIGEgcGFja2V0LlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIG9uUGFja2V0KHBhY2tldCkge1xuICAgIGlmIChcbiAgICAgIFwib3BlbmluZ1wiID09PSB0aGlzLnJlYWR5U3RhdGUgfHxcbiAgICAgIFwib3BlblwiID09PSB0aGlzLnJlYWR5U3RhdGUgfHxcbiAgICAgIFwiY2xvc2luZ1wiID09PSB0aGlzLnJlYWR5U3RhdGVcbiAgICApIHtcbiAgICAgIGRlYnVnKCdzb2NrZXQgcmVjZWl2ZTogdHlwZSBcIiVzXCIsIGRhdGEgXCIlc1wiJywgcGFja2V0LnR5cGUsIHBhY2tldC5kYXRhKTtcblxuICAgICAgdGhpcy5lbWl0KFwicGFja2V0XCIsIHBhY2tldCk7XG5cbiAgICAgIC8vIFNvY2tldCBpcyBsaXZlIC0gYW55IHBhY2tldCBjb3VudHNcbiAgICAgIHRoaXMuZW1pdChcImhlYXJ0YmVhdFwiKTtcblxuICAgICAgc3dpdGNoIChwYWNrZXQudHlwZSkge1xuICAgICAgICBjYXNlIFwib3BlblwiOlxuICAgICAgICAgIHRoaXMub25IYW5kc2hha2UoSlNPTi5wYXJzZShwYWNrZXQuZGF0YSkpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgXCJwaW5nXCI6XG4gICAgICAgICAgdGhpcy5yZXNldFBpbmdUaW1lb3V0KCk7XG4gICAgICAgICAgdGhpcy5zZW5kUGFja2V0KFwicG9uZ1wiKTtcbiAgICAgICAgICB0aGlzLmVtaXQoXCJwb25nXCIpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgXCJlcnJvclwiOlxuICAgICAgICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcihcInNlcnZlciBlcnJvclwiKTtcbiAgICAgICAgICBlcnIuY29kZSA9IHBhY2tldC5kYXRhO1xuICAgICAgICAgIHRoaXMub25FcnJvcihlcnIpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgXCJtZXNzYWdlXCI6XG4gICAgICAgICAgdGhpcy5lbWl0KFwiZGF0YVwiLCBwYWNrZXQuZGF0YSk7XG4gICAgICAgICAgdGhpcy5lbWl0KFwibWVzc2FnZVwiLCBwYWNrZXQuZGF0YSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlYnVnKCdwYWNrZXQgcmVjZWl2ZWQgd2l0aCBzb2NrZXQgcmVhZHlTdGF0ZSBcIiVzXCInLCB0aGlzLnJlYWR5U3RhdGUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgdXBvbiBoYW5kc2hha2UgY29tcGxldGlvbi5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IGhhbmRzaGFrZSBvYmpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBvbkhhbmRzaGFrZShkYXRhKSB7XG4gICAgdGhpcy5lbWl0KFwiaGFuZHNoYWtlXCIsIGRhdGEpO1xuICAgIHRoaXMuaWQgPSBkYXRhLnNpZDtcbiAgICB0aGlzLnRyYW5zcG9ydC5xdWVyeS5zaWQgPSBkYXRhLnNpZDtcbiAgICB0aGlzLnVwZ3JhZGVzID0gdGhpcy5maWx0ZXJVcGdyYWRlcyhkYXRhLnVwZ3JhZGVzKTtcbiAgICB0aGlzLnBpbmdJbnRlcnZhbCA9IGRhdGEucGluZ0ludGVydmFsO1xuICAgIHRoaXMucGluZ1RpbWVvdXQgPSBkYXRhLnBpbmdUaW1lb3V0O1xuICAgIHRoaXMub25PcGVuKCk7XG4gICAgLy8gSW4gY2FzZSBvcGVuIGhhbmRsZXIgY2xvc2VzIHNvY2tldFxuICAgIGlmIChcImNsb3NlZFwiID09PSB0aGlzLnJlYWR5U3RhdGUpIHJldHVybjtcbiAgICB0aGlzLnJlc2V0UGluZ1RpbWVvdXQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIGFuZCByZXNldHMgcGluZyB0aW1lb3V0IHRpbWVyIGJhc2VkIG9uIHNlcnZlciBwaW5ncy5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICByZXNldFBpbmdUaW1lb3V0KCkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLnBpbmdUaW1lb3V0VGltZXIpO1xuICAgIHRoaXMucGluZ1RpbWVvdXRUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5vbkNsb3NlKFwicGluZyB0aW1lb3V0XCIpO1xuICAgIH0sIHRoaXMucGluZ0ludGVydmFsICsgdGhpcy5waW5nVGltZW91dCk7XG4gICAgaWYgKHRoaXMub3B0cy5hdXRvVW5yZWYpIHtcbiAgICAgIHRoaXMucGluZ1RpbWVvdXRUaW1lci51bnJlZigpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgb24gYGRyYWluYCBldmVudFxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIG9uRHJhaW4oKSB7XG4gICAgdGhpcy53cml0ZUJ1ZmZlci5zcGxpY2UoMCwgdGhpcy5wcmV2QnVmZmVyTGVuKTtcblxuICAgIC8vIHNldHRpbmcgcHJldkJ1ZmZlckxlbiA9IDAgaXMgdmVyeSBpbXBvcnRhbnRcbiAgICAvLyBmb3IgZXhhbXBsZSwgd2hlbiB1cGdyYWRpbmcsIHVwZ3JhZGUgcGFja2V0IGlzIHNlbnQgb3ZlcixcbiAgICAvLyBhbmQgYSBub256ZXJvIHByZXZCdWZmZXJMZW4gY291bGQgY2F1c2UgcHJvYmxlbXMgb24gYGRyYWluYFxuICAgIHRoaXMucHJldkJ1ZmZlckxlbiA9IDA7XG5cbiAgICBpZiAoMCA9PT0gdGhpcy53cml0ZUJ1ZmZlci5sZW5ndGgpIHtcbiAgICAgIHRoaXMuZW1pdChcImRyYWluXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZsdXNoKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEZsdXNoIHdyaXRlIGJ1ZmZlcnMuXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgZmx1c2goKSB7XG4gICAgaWYgKFxuICAgICAgXCJjbG9zZWRcIiAhPT0gdGhpcy5yZWFkeVN0YXRlICYmXG4gICAgICB0aGlzLnRyYW5zcG9ydC53cml0YWJsZSAmJlxuICAgICAgIXRoaXMudXBncmFkaW5nICYmXG4gICAgICB0aGlzLndyaXRlQnVmZmVyLmxlbmd0aFxuICAgICkge1xuICAgICAgZGVidWcoXCJmbHVzaGluZyAlZCBwYWNrZXRzIGluIHNvY2tldFwiLCB0aGlzLndyaXRlQnVmZmVyLmxlbmd0aCk7XG4gICAgICB0aGlzLnRyYW5zcG9ydC5zZW5kKHRoaXMud3JpdGVCdWZmZXIpO1xuICAgICAgLy8ga2VlcCB0cmFjayBvZiBjdXJyZW50IGxlbmd0aCBvZiB3cml0ZUJ1ZmZlclxuICAgICAgLy8gc3BsaWNlIHdyaXRlQnVmZmVyIGFuZCBjYWxsYmFja0J1ZmZlciBvbiBgZHJhaW5gXG4gICAgICB0aGlzLnByZXZCdWZmZXJMZW4gPSB0aGlzLndyaXRlQnVmZmVyLmxlbmd0aDtcbiAgICAgIHRoaXMuZW1pdChcImZsdXNoXCIpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kcyBhIG1lc3NhZ2UuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBmdW5jdGlvbi5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMuXG4gICAqIEByZXR1cm4ge1NvY2tldH0gZm9yIGNoYWluaW5nLlxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cbiAgd3JpdGUobXNnLCBvcHRpb25zLCBmbikge1xuICAgIHRoaXMuc2VuZFBhY2tldChcIm1lc3NhZ2VcIiwgbXNnLCBvcHRpb25zLCBmbik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzZW5kKG1zZywgb3B0aW9ucywgZm4pIHtcbiAgICB0aGlzLnNlbmRQYWNrZXQoXCJtZXNzYWdlXCIsIG1zZywgb3B0aW9ucywgZm4pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbmRzIGEgcGFja2V0LlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gcGFja2V0IHR5cGUuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucy5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgZnVuY3Rpb24uXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgc2VuZFBhY2tldCh0eXBlLCBkYXRhLCBvcHRpb25zLCBmbikge1xuICAgIGlmIChcImZ1bmN0aW9uXCIgPT09IHR5cGVvZiBkYXRhKSB7XG4gICAgICBmbiA9IGRhdGE7XG4gICAgICBkYXRhID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGlmIChcImZ1bmN0aW9uXCIgPT09IHR5cGVvZiBvcHRpb25zKSB7XG4gICAgICBmbiA9IG9wdGlvbnM7XG4gICAgICBvcHRpb25zID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoXCJjbG9zaW5nXCIgPT09IHRoaXMucmVhZHlTdGF0ZSB8fCBcImNsb3NlZFwiID09PSB0aGlzLnJlYWR5U3RhdGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICBvcHRpb25zLmNvbXByZXNzID0gZmFsc2UgIT09IG9wdGlvbnMuY29tcHJlc3M7XG5cbiAgICBjb25zdCBwYWNrZXQgPSB7XG4gICAgICB0eXBlOiB0eXBlLFxuICAgICAgZGF0YTogZGF0YSxcbiAgICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgICB9O1xuICAgIHRoaXMuZW1pdChcInBhY2tldENyZWF0ZVwiLCBwYWNrZXQpO1xuICAgIHRoaXMud3JpdGVCdWZmZXIucHVzaChwYWNrZXQpO1xuICAgIGlmIChmbikgdGhpcy5vbmNlKFwiZmx1c2hcIiwgZm4pO1xuICAgIHRoaXMuZmx1c2goKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbG9zZXMgdGhlIGNvbm5lY3Rpb24uXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgY2xvc2UoKSB7XG4gICAgY29uc3QgY2xvc2UgPSAoKSA9PiB7XG4gICAgICB0aGlzLm9uQ2xvc2UoXCJmb3JjZWQgY2xvc2VcIik7XG4gICAgICBkZWJ1ZyhcInNvY2tldCBjbG9zaW5nIC0gdGVsbGluZyB0cmFuc3BvcnQgdG8gY2xvc2VcIik7XG4gICAgICB0aGlzLnRyYW5zcG9ydC5jbG9zZSgpO1xuICAgIH07XG5cbiAgICBjb25zdCBjbGVhbnVwQW5kQ2xvc2UgPSAoKSA9PiB7XG4gICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKFwidXBncmFkZVwiLCBjbGVhbnVwQW5kQ2xvc2UpO1xuICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcihcInVwZ3JhZGVFcnJvclwiLCBjbGVhbnVwQW5kQ2xvc2UpO1xuICAgICAgY2xvc2UoKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgd2FpdEZvclVwZ3JhZGUgPSAoKSA9PiB7XG4gICAgICAvLyB3YWl0IGZvciB1cGdyYWRlIHRvIGZpbmlzaCBzaW5jZSB3ZSBjYW4ndCBzZW5kIHBhY2tldHMgd2hpbGUgcGF1c2luZyBhIHRyYW5zcG9ydFxuICAgICAgdGhpcy5vbmNlKFwidXBncmFkZVwiLCBjbGVhbnVwQW5kQ2xvc2UpO1xuICAgICAgdGhpcy5vbmNlKFwidXBncmFkZUVycm9yXCIsIGNsZWFudXBBbmRDbG9zZSk7XG4gICAgfTtcblxuICAgIGlmIChcIm9wZW5pbmdcIiA9PT0gdGhpcy5yZWFkeVN0YXRlIHx8IFwib3BlblwiID09PSB0aGlzLnJlYWR5U3RhdGUpIHtcbiAgICAgIHRoaXMucmVhZHlTdGF0ZSA9IFwiY2xvc2luZ1wiO1xuXG4gICAgICBpZiAodGhpcy53cml0ZUJ1ZmZlci5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5vbmNlKFwiZHJhaW5cIiwgKCkgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLnVwZ3JhZGluZykge1xuICAgICAgICAgICAgd2FpdEZvclVwZ3JhZGUoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2xvc2UoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnVwZ3JhZGluZykge1xuICAgICAgICB3YWl0Rm9yVXBncmFkZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2xvc2UoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgdXBvbiB0cmFuc3BvcnQgZXJyb3JcbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBvbkVycm9yKGVycikge1xuICAgIGRlYnVnKFwic29ja2V0IGVycm9yICVqXCIsIGVycik7XG4gICAgU29ja2V0LnByaW9yV2Vic29ja2V0U3VjY2VzcyA9IGZhbHNlO1xuICAgIHRoaXMuZW1pdChcImVycm9yXCIsIGVycik7XG4gICAgdGhpcy5vbkNsb3NlKFwidHJhbnNwb3J0IGVycm9yXCIsIGVycik7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIHVwb24gdHJhbnNwb3J0IGNsb3NlLlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIG9uQ2xvc2UocmVhc29uLCBkZXNjKSB7XG4gICAgaWYgKFxuICAgICAgXCJvcGVuaW5nXCIgPT09IHRoaXMucmVhZHlTdGF0ZSB8fFxuICAgICAgXCJvcGVuXCIgPT09IHRoaXMucmVhZHlTdGF0ZSB8fFxuICAgICAgXCJjbG9zaW5nXCIgPT09IHRoaXMucmVhZHlTdGF0ZVxuICAgICkge1xuICAgICAgZGVidWcoJ3NvY2tldCBjbG9zZSB3aXRoIHJlYXNvbjogXCIlc1wiJywgcmVhc29uKTtcblxuICAgICAgLy8gY2xlYXIgdGltZXJzXG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5waW5nSW50ZXJ2YWxUaW1lcik7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5waW5nVGltZW91dFRpbWVyKTtcblxuICAgICAgLy8gc3RvcCBldmVudCBmcm9tIGZpcmluZyBhZ2FpbiBmb3IgdHJhbnNwb3J0XG4gICAgICB0aGlzLnRyYW5zcG9ydC5yZW1vdmVBbGxMaXN0ZW5lcnMoXCJjbG9zZVwiKTtcblxuICAgICAgLy8gZW5zdXJlIHRyYW5zcG9ydCB3b24ndCBzdGF5IG9wZW5cbiAgICAgIHRoaXMudHJhbnNwb3J0LmNsb3NlKCk7XG5cbiAgICAgIC8vIGlnbm9yZSBmdXJ0aGVyIHRyYW5zcG9ydCBjb21tdW5pY2F0aW9uXG4gICAgICB0aGlzLnRyYW5zcG9ydC5yZW1vdmVBbGxMaXN0ZW5lcnMoKTtcblxuICAgICAgaWYgKHR5cGVvZiByZW1vdmVFdmVudExpc3RlbmVyID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm9mZmxpbmVcIiwgdGhpcy5vZmZsaW5lRXZlbnRMaXN0ZW5lciwgZmFsc2UpO1xuICAgICAgfVxuXG4gICAgICAvLyBzZXQgcmVhZHkgc3RhdGVcbiAgICAgIHRoaXMucmVhZHlTdGF0ZSA9IFwiY2xvc2VkXCI7XG5cbiAgICAgIC8vIGNsZWFyIHNlc3Npb24gaWRcbiAgICAgIHRoaXMuaWQgPSBudWxsO1xuXG4gICAgICAvLyBlbWl0IGNsb3NlIGV2ZW50XG4gICAgICB0aGlzLmVtaXQoXCJjbG9zZVwiLCByZWFzb24sIGRlc2MpO1xuXG4gICAgICAvLyBjbGVhbiBidWZmZXJzIGFmdGVyLCBzbyB1c2VycyBjYW4gc3RpbGxcbiAgICAgIC8vIGdyYWIgdGhlIGJ1ZmZlcnMgb24gYGNsb3NlYCBldmVudFxuICAgICAgdGhpcy53cml0ZUJ1ZmZlciA9IFtdO1xuICAgICAgdGhpcy5wcmV2QnVmZmVyTGVuID0gMDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRmlsdGVycyB1cGdyYWRlcywgcmV0dXJuaW5nIG9ubHkgdGhvc2UgbWF0Y2hpbmcgY2xpZW50IHRyYW5zcG9ydHMuXG4gICAqXG4gICAqIEBwYXJhbSB7QXJyYXl9IHNlcnZlciB1cGdyYWRlc1xuICAgKiBAYXBpIHByaXZhdGVcbiAgICpcbiAgICovXG4gIGZpbHRlclVwZ3JhZGVzKHVwZ3JhZGVzKSB7XG4gICAgY29uc3QgZmlsdGVyZWRVcGdyYWRlcyA9IFtdO1xuICAgIGxldCBpID0gMDtcbiAgICBjb25zdCBqID0gdXBncmFkZXMubGVuZ3RoO1xuICAgIGZvciAoOyBpIDwgajsgaSsrKSB7XG4gICAgICBpZiAofnRoaXMudHJhbnNwb3J0cy5pbmRleE9mKHVwZ3JhZGVzW2ldKSlcbiAgICAgICAgZmlsdGVyZWRVcGdyYWRlcy5wdXNoKHVwZ3JhZGVzW2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIGZpbHRlcmVkVXBncmFkZXM7XG4gIH1cbn1cblxuU29ja2V0LnByaW9yV2Vic29ja2V0U3VjY2VzcyA9IGZhbHNlO1xuXG4vKipcbiAqIFByb3RvY29sIHZlcnNpb24uXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5Tb2NrZXQucHJvdG9jb2wgPSBwYXJzZXIucHJvdG9jb2w7IC8vIHRoaXMgaXMgYW4gaW50XG5cbmZ1bmN0aW9uIGNsb25lKG9iaikge1xuICBjb25zdCBvID0ge307XG4gIGZvciAobGV0IGkgaW4gb2JqKSB7XG4gICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgb1tpXSA9IG9ialtpXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG87XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU29ja2V0O1xuIiwiY29uc3QgcGFyc2VyID0gcmVxdWlyZShcImVuZ2luZS5pby1wYXJzZXJcIik7XG5jb25zdCBFbWl0dGVyID0gcmVxdWlyZShcImNvbXBvbmVudC1lbWl0dGVyXCIpO1xuY29uc3QgZGVidWcgPSByZXF1aXJlKFwiZGVidWdcIikoXCJlbmdpbmUuaW8tY2xpZW50OnRyYW5zcG9ydFwiKTtcblxuY2xhc3MgVHJhbnNwb3J0IGV4dGVuZHMgRW1pdHRlciB7XG4gIC8qKlxuICAgKiBUcmFuc3BvcnQgYWJzdHJhY3QgY29uc3RydWN0b3IuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zLlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIGNvbnN0cnVjdG9yKG9wdHMpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5vcHRzID0gb3B0cztcbiAgICB0aGlzLnF1ZXJ5ID0gb3B0cy5xdWVyeTtcbiAgICB0aGlzLnJlYWR5U3RhdGUgPSBcIlwiO1xuICAgIHRoaXMuc29ja2V0ID0gb3B0cy5zb2NrZXQ7XG4gIH1cblxuICAvKipcbiAgICogRW1pdHMgYW4gZXJyb3IuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAgICogQHJldHVybiB7VHJhbnNwb3J0fSBmb3IgY2hhaW5pbmdcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG4gIG9uRXJyb3IobXNnLCBkZXNjKSB7XG4gICAgY29uc3QgZXJyID0gbmV3IEVycm9yKG1zZyk7XG4gICAgZXJyLnR5cGUgPSBcIlRyYW5zcG9ydEVycm9yXCI7XG4gICAgZXJyLmRlc2NyaXB0aW9uID0gZGVzYztcbiAgICB0aGlzLmVtaXQoXCJlcnJvclwiLCBlcnIpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIE9wZW5zIHRoZSB0cmFuc3BvcnQuXG4gICAqXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuICBvcGVuKCkge1xuICAgIGlmIChcImNsb3NlZFwiID09PSB0aGlzLnJlYWR5U3RhdGUgfHwgXCJcIiA9PT0gdGhpcy5yZWFkeVN0YXRlKSB7XG4gICAgICB0aGlzLnJlYWR5U3RhdGUgPSBcIm9wZW5pbmdcIjtcbiAgICAgIHRoaXMuZG9PcGVuKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogQ2xvc2VzIHRoZSB0cmFuc3BvcnQuXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgY2xvc2UoKSB7XG4gICAgaWYgKFwib3BlbmluZ1wiID09PSB0aGlzLnJlYWR5U3RhdGUgfHwgXCJvcGVuXCIgPT09IHRoaXMucmVhZHlTdGF0ZSkge1xuICAgICAgdGhpcy5kb0Nsb3NlKCk7XG4gICAgICB0aGlzLm9uQ2xvc2UoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kcyBtdWx0aXBsZSBwYWNrZXRzLlxuICAgKlxuICAgKiBAcGFyYW0ge0FycmF5fSBwYWNrZXRzXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgc2VuZChwYWNrZXRzKSB7XG4gICAgaWYgKFwib3BlblwiID09PSB0aGlzLnJlYWR5U3RhdGUpIHtcbiAgICAgIHRoaXMud3JpdGUocGFja2V0cyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHRoaXMgbWlnaHQgaGFwcGVuIGlmIHRoZSB0cmFuc3BvcnQgd2FzIHNpbGVudGx5IGNsb3NlZCBpbiB0aGUgYmVmb3JldW5sb2FkIGV2ZW50IGhhbmRsZXJcbiAgICAgIGRlYnVnKFwidHJhbnNwb3J0IGlzIG5vdCBvcGVuLCBkaXNjYXJkaW5nIHBhY2tldHNcIik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCB1cG9uIG9wZW5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBvbk9wZW4oKSB7XG4gICAgdGhpcy5yZWFkeVN0YXRlID0gXCJvcGVuXCI7XG4gICAgdGhpcy53cml0YWJsZSA9IHRydWU7XG4gICAgdGhpcy5lbWl0KFwib3BlblwiKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2l0aCBkYXRhLlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YVxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIG9uRGF0YShkYXRhKSB7XG4gICAgY29uc3QgcGFja2V0ID0gcGFyc2VyLmRlY29kZVBhY2tldChkYXRhLCB0aGlzLnNvY2tldC5iaW5hcnlUeXBlKTtcbiAgICB0aGlzLm9uUGFja2V0KHBhY2tldCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIHdpdGggYSBkZWNvZGVkIHBhY2tldC5cbiAgICovXG4gIG9uUGFja2V0KHBhY2tldCkge1xuICAgIHRoaXMuZW1pdChcInBhY2tldFwiLCBwYWNrZXQpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCB1cG9uIGNsb3NlLlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIG9uQ2xvc2UoKSB7XG4gICAgdGhpcy5yZWFkeVN0YXRlID0gXCJjbG9zZWRcIjtcbiAgICB0aGlzLmVtaXQoXCJjbG9zZVwiKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRyYW5zcG9ydDtcbiIsImNvbnN0IFhNTEh0dHBSZXF1ZXN0ID0gcmVxdWlyZShcIi4uLy4uL2NvbnRyaWIveG1saHR0cHJlcXVlc3Qtc3NsL1hNTEh0dHBSZXF1ZXN0XCIpO1xuY29uc3QgWEhSID0gcmVxdWlyZShcIi4vcG9sbGluZy14aHJcIik7XG5jb25zdCBKU09OUCA9IHJlcXVpcmUoXCIuL3BvbGxpbmctanNvbnBcIik7XG5jb25zdCB3ZWJzb2NrZXQgPSByZXF1aXJlKFwiLi93ZWJzb2NrZXRcIik7XG5cbmV4cG9ydHMucG9sbGluZyA9IHBvbGxpbmc7XG5leHBvcnRzLndlYnNvY2tldCA9IHdlYnNvY2tldDtcblxuLyoqXG4gKiBQb2xsaW5nIHRyYW5zcG9ydCBwb2x5bW9ycGhpYyBjb25zdHJ1Y3Rvci5cbiAqIERlY2lkZXMgb24geGhyIHZzIGpzb25wIGJhc2VkIG9uIGZlYXR1cmUgZGV0ZWN0aW9uLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHBvbGxpbmcob3B0cykge1xuICBsZXQgeGhyO1xuICBsZXQgeGQgPSBmYWxzZTtcbiAgbGV0IHhzID0gZmFsc2U7XG4gIGNvbnN0IGpzb25wID0gZmFsc2UgIT09IG9wdHMuanNvbnA7XG5cbiAgaWYgKHR5cGVvZiBsb2NhdGlvbiAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNvbnN0IGlzU1NMID0gXCJodHRwczpcIiA9PT0gbG9jYXRpb24ucHJvdG9jb2w7XG4gICAgbGV0IHBvcnQgPSBsb2NhdGlvbi5wb3J0O1xuXG4gICAgLy8gc29tZSB1c2VyIGFnZW50cyBoYXZlIGVtcHR5IGBsb2NhdGlvbi5wb3J0YFxuICAgIGlmICghcG9ydCkge1xuICAgICAgcG9ydCA9IGlzU1NMID8gNDQzIDogODA7XG4gICAgfVxuXG4gICAgeGQgPSBvcHRzLmhvc3RuYW1lICE9PSBsb2NhdGlvbi5ob3N0bmFtZSB8fCBwb3J0ICE9PSBvcHRzLnBvcnQ7XG4gICAgeHMgPSBvcHRzLnNlY3VyZSAhPT0gaXNTU0w7XG4gIH1cblxuICBvcHRzLnhkb21haW4gPSB4ZDtcbiAgb3B0cy54c2NoZW1lID0geHM7XG4gIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdChvcHRzKTtcblxuICBpZiAoXCJvcGVuXCIgaW4geGhyICYmICFvcHRzLmZvcmNlSlNPTlApIHtcbiAgICByZXR1cm4gbmV3IFhIUihvcHRzKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoIWpzb25wKSB0aHJvdyBuZXcgRXJyb3IoXCJKU09OUCBkaXNhYmxlZFwiKTtcbiAgICByZXR1cm4gbmV3IEpTT05QKG9wdHMpO1xuICB9XG59XG4iLCJjb25zdCBQb2xsaW5nID0gcmVxdWlyZShcIi4vcG9sbGluZ1wiKTtcbmNvbnN0IGdsb2JhbFRoaXMgPSByZXF1aXJlKFwiLi4vZ2xvYmFsVGhpc1wiKTtcblxuY29uc3Qgck5ld2xpbmUgPSAvXFxuL2c7XG5jb25zdCByRXNjYXBlZE5ld2xpbmUgPSAvXFxcXG4vZztcblxuLyoqXG4gKiBHbG9iYWwgSlNPTlAgY2FsbGJhY2tzLlxuICovXG5cbmxldCBjYWxsYmFja3M7XG5cbmNsYXNzIEpTT05QUG9sbGluZyBleHRlbmRzIFBvbGxpbmcge1xuICAvKipcbiAgICogSlNPTlAgUG9sbGluZyBjb25zdHJ1Y3Rvci5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMuXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuICBjb25zdHJ1Y3RvcihvcHRzKSB7XG4gICAgc3VwZXIob3B0cyk7XG5cbiAgICB0aGlzLnF1ZXJ5ID0gdGhpcy5xdWVyeSB8fCB7fTtcblxuICAgIC8vIGRlZmluZSBnbG9iYWwgY2FsbGJhY2tzIGFycmF5IGlmIG5vdCBwcmVzZW50XG4gICAgLy8gd2UgZG8gdGhpcyBoZXJlIChsYXppbHkpIHRvIGF2b2lkIHVubmVlZGVkIGdsb2JhbCBwb2xsdXRpb25cbiAgICBpZiAoIWNhbGxiYWNrcykge1xuICAgICAgLy8gd2UgbmVlZCB0byBjb25zaWRlciBtdWx0aXBsZSBlbmdpbmVzIGluIHRoZSBzYW1lIHBhZ2VcbiAgICAgIGNhbGxiYWNrcyA9IGdsb2JhbFRoaXMuX19fZWlvID0gZ2xvYmFsVGhpcy5fX19laW8gfHwgW107XG4gICAgfVxuXG4gICAgLy8gY2FsbGJhY2sgaWRlbnRpZmllclxuICAgIHRoaXMuaW5kZXggPSBjYWxsYmFja3MubGVuZ3RoO1xuXG4gICAgLy8gYWRkIGNhbGxiYWNrIHRvIGpzb25wIGdsb2JhbFxuICAgIGNhbGxiYWNrcy5wdXNoKHRoaXMub25EYXRhLmJpbmQodGhpcykpO1xuXG4gICAgLy8gYXBwZW5kIHRvIHF1ZXJ5IHN0cmluZ1xuICAgIHRoaXMucXVlcnkuaiA9IHRoaXMuaW5kZXg7XG4gIH1cblxuICAvKipcbiAgICogSlNPTlAgb25seSBzdXBwb3J0cyBiaW5hcnkgYXMgYmFzZTY0IGVuY29kZWQgc3RyaW5nc1xuICAgKi9cbiAgZ2V0IHN1cHBvcnRzQmluYXJ5KCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbG9zZXMgdGhlIHNvY2tldC5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBkb0Nsb3NlKCkge1xuICAgIGlmICh0aGlzLnNjcmlwdCkge1xuICAgICAgLy8gcHJldmVudCBzcHVyaW91cyBlcnJvcnMgZnJvbSBiZWluZyBlbWl0dGVkIHdoZW4gdGhlIHdpbmRvdyBpcyB1bmxvYWRlZFxuICAgICAgdGhpcy5zY3JpcHQub25lcnJvciA9ICgpID0+IHt9O1xuICAgICAgdGhpcy5zY3JpcHQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLnNjcmlwdCk7XG4gICAgICB0aGlzLnNjcmlwdCA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZm9ybSkge1xuICAgICAgdGhpcy5mb3JtLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5mb3JtKTtcbiAgICAgIHRoaXMuZm9ybSA9IG51bGw7XG4gICAgICB0aGlzLmlmcmFtZSA9IG51bGw7XG4gICAgfVxuXG4gICAgc3VwZXIuZG9DbG9zZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0YXJ0cyBhIHBvbGwgY3ljbGUuXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgZG9Qb2xsKCkge1xuICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG5cbiAgICBpZiAodGhpcy5zY3JpcHQpIHtcbiAgICAgIHRoaXMuc2NyaXB0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5zY3JpcHQpO1xuICAgICAgdGhpcy5zY3JpcHQgPSBudWxsO1xuICAgIH1cblxuICAgIHNjcmlwdC5hc3luYyA9IHRydWU7XG4gICAgc2NyaXB0LnNyYyA9IHRoaXMudXJpKCk7XG4gICAgc2NyaXB0Lm9uZXJyb3IgPSBlID0+IHtcbiAgICAgIHRoaXMub25FcnJvcihcImpzb25wIHBvbGwgZXJyb3JcIiwgZSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGluc2VydEF0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIilbMF07XG4gICAgaWYgKGluc2VydEF0KSB7XG4gICAgICBpbnNlcnRBdC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShzY3JpcHQsIGluc2VydEF0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgKGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuYm9keSkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICB9XG4gICAgdGhpcy5zY3JpcHQgPSBzY3JpcHQ7XG5cbiAgICBjb25zdCBpc1VBZ2Vja28gPVxuICAgICAgXCJ1bmRlZmluZWRcIiAhPT0gdHlwZW9mIG5hdmlnYXRvciAmJiAvZ2Vja28vaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuXG4gICAgaWYgKGlzVUFnZWNrbykge1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgaWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGlmcmFtZSk7XG4gICAgICB9LCAxMDApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBXcml0ZXMgd2l0aCBhIGhpZGRlbiBpZnJhbWUuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhIHRvIHNlbmRcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGVkIHVwb24gZmx1c2guXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgZG9Xcml0ZShkYXRhLCBmbikge1xuICAgIGxldCBpZnJhbWU7XG5cbiAgICBpZiAoIXRoaXMuZm9ybSkge1xuICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgICAgY29uc3QgYXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgICAgIGNvbnN0IGlkID0gKHRoaXMuaWZyYW1lSWQgPSBcImVpb19pZnJhbWVfXCIgKyB0aGlzLmluZGV4KTtcblxuICAgICAgZm9ybS5jbGFzc05hbWUgPSBcInNvY2tldGlvXCI7XG4gICAgICBmb3JtLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgICAgZm9ybS5zdHlsZS50b3AgPSBcIi0xMDAwcHhcIjtcbiAgICAgIGZvcm0uc3R5bGUubGVmdCA9IFwiLTEwMDBweFwiO1xuICAgICAgZm9ybS50YXJnZXQgPSBpZDtcbiAgICAgIGZvcm0ubWV0aG9kID0gXCJQT1NUXCI7XG4gICAgICBmb3JtLnNldEF0dHJpYnV0ZShcImFjY2VwdC1jaGFyc2V0XCIsIFwidXRmLThcIik7XG4gICAgICBhcmVhLm5hbWUgPSBcImRcIjtcbiAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoYXJlYSk7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gICAgICB0aGlzLmZvcm0gPSBmb3JtO1xuICAgICAgdGhpcy5hcmVhID0gYXJlYTtcbiAgICB9XG5cbiAgICB0aGlzLmZvcm0uYWN0aW9uID0gdGhpcy51cmkoKTtcblxuICAgIGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuICAgICAgaW5pdElmcmFtZSgpO1xuICAgICAgZm4oKTtcbiAgICB9XG5cbiAgICBjb25zdCBpbml0SWZyYW1lID0gKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuaWZyYW1lKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhpcy5mb3JtLnJlbW92ZUNoaWxkKHRoaXMuaWZyYW1lKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHRoaXMub25FcnJvcihcImpzb25wIHBvbGxpbmcgaWZyYW1lIHJlbW92YWwgZXJyb3JcIiwgZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gaWU2IGR5bmFtaWMgaWZyYW1lcyB3aXRoIHRhcmdldD1cIlwiIHN1cHBvcnQgKHRoYW5rcyBDaHJpcyBMYW1iYWNoZXIpXG4gICAgICAgIGNvbnN0IGh0bWwgPSAnPGlmcmFtZSBzcmM9XCJqYXZhc2NyaXB0OjBcIiBuYW1lPVwiJyArIHRoaXMuaWZyYW1lSWQgKyAnXCI+JztcbiAgICAgICAgaWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChodG1sKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKTtcbiAgICAgICAgaWZyYW1lLm5hbWUgPSB0aGlzLmlmcmFtZUlkO1xuICAgICAgICBpZnJhbWUuc3JjID0gXCJqYXZhc2NyaXB0OjBcIjtcbiAgICAgIH1cblxuICAgICAgaWZyYW1lLmlkID0gdGhpcy5pZnJhbWVJZDtcblxuICAgICAgdGhpcy5mb3JtLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gICAgICB0aGlzLmlmcmFtZSA9IGlmcmFtZTtcbiAgICB9O1xuXG4gICAgaW5pdElmcmFtZSgpO1xuXG4gICAgLy8gZXNjYXBlIFxcbiB0byBwcmV2ZW50IGl0IGZyb20gYmVpbmcgY29udmVydGVkIGludG8gXFxyXFxuIGJ5IHNvbWUgVUFzXG4gICAgLy8gZG91YmxlIGVzY2FwaW5nIGlzIHJlcXVpcmVkIGZvciBlc2NhcGVkIG5ldyBsaW5lcyBiZWNhdXNlIHVuZXNjYXBpbmcgb2YgbmV3IGxpbmVzIGNhbiBiZSBkb25lIHNhZmVseSBvbiBzZXJ2ZXItc2lkZVxuICAgIGRhdGEgPSBkYXRhLnJlcGxhY2UockVzY2FwZWROZXdsaW5lLCBcIlxcXFxcXG5cIik7XG4gICAgdGhpcy5hcmVhLnZhbHVlID0gZGF0YS5yZXBsYWNlKHJOZXdsaW5lLCBcIlxcXFxuXCIpO1xuXG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuZm9ybS5zdWJtaXQoKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuXG4gICAgaWYgKHRoaXMuaWZyYW1lLmF0dGFjaEV2ZW50KSB7XG4gICAgICB0aGlzLmlmcmFtZS5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmlmcmFtZS5yZWFkeVN0YXRlID09PSBcImNvbXBsZXRlXCIpIHtcbiAgICAgICAgICBjb21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlmcmFtZS5vbmxvYWQgPSBjb21wbGV0ZTtcbiAgICB9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBKU09OUFBvbGxpbmc7XG4iLCIvKiBnbG9iYWwgYXR0YWNoRXZlbnQgKi9cblxuY29uc3QgWE1MSHR0cFJlcXVlc3QgPSByZXF1aXJlKFwiLi4vLi4vY29udHJpYi94bWxodHRwcmVxdWVzdC1zc2wvWE1MSHR0cFJlcXVlc3RcIik7XG5jb25zdCBQb2xsaW5nID0gcmVxdWlyZShcIi4vcG9sbGluZ1wiKTtcbmNvbnN0IEVtaXR0ZXIgPSByZXF1aXJlKFwiY29tcG9uZW50LWVtaXR0ZXJcIik7XG5jb25zdCB7IHBpY2sgfSA9IHJlcXVpcmUoXCIuLi91dGlsXCIpO1xuY29uc3QgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoXCIuLi9nbG9iYWxUaGlzXCIpO1xuXG5jb25zdCBkZWJ1ZyA9IHJlcXVpcmUoXCJkZWJ1Z1wiKShcImVuZ2luZS5pby1jbGllbnQ6cG9sbGluZy14aHJcIik7XG5cbi8qKlxuICogRW1wdHkgZnVuY3Rpb25cbiAqL1xuXG5mdW5jdGlvbiBlbXB0eSgpIHt9XG5cbmNvbnN0IGhhc1hIUjIgPSAoZnVuY3Rpb24oKSB7XG4gIGNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCh7IHhkb21haW46IGZhbHNlIH0pO1xuICByZXR1cm4gbnVsbCAhPSB4aHIucmVzcG9uc2VUeXBlO1xufSkoKTtcblxuY2xhc3MgWEhSIGV4dGVuZHMgUG9sbGluZyB7XG4gIC8qKlxuICAgKiBYSFIgUG9sbGluZyBjb25zdHJ1Y3Rvci5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHNcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG4gIGNvbnN0cnVjdG9yKG9wdHMpIHtcbiAgICBzdXBlcihvcHRzKTtcblxuICAgIGlmICh0eXBlb2YgbG9jYXRpb24gIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIGNvbnN0IGlzU1NMID0gXCJodHRwczpcIiA9PT0gbG9jYXRpb24ucHJvdG9jb2w7XG4gICAgICBsZXQgcG9ydCA9IGxvY2F0aW9uLnBvcnQ7XG5cbiAgICAgIC8vIHNvbWUgdXNlciBhZ2VudHMgaGF2ZSBlbXB0eSBgbG9jYXRpb24ucG9ydGBcbiAgICAgIGlmICghcG9ydCkge1xuICAgICAgICBwb3J0ID0gaXNTU0wgPyA0NDMgOiA4MDtcbiAgICAgIH1cblxuICAgICAgdGhpcy54ZCA9XG4gICAgICAgICh0eXBlb2YgbG9jYXRpb24gIT09IFwidW5kZWZpbmVkXCIgJiZcbiAgICAgICAgICBvcHRzLmhvc3RuYW1lICE9PSBsb2NhdGlvbi5ob3N0bmFtZSkgfHxcbiAgICAgICAgcG9ydCAhPT0gb3B0cy5wb3J0O1xuICAgICAgdGhpcy54cyA9IG9wdHMuc2VjdXJlICE9PSBpc1NTTDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogWEhSIHN1cHBvcnRzIGJpbmFyeVxuICAgICAqL1xuICAgIGNvbnN0IGZvcmNlQmFzZTY0ID0gb3B0cyAmJiBvcHRzLmZvcmNlQmFzZTY0O1xuICAgIHRoaXMuc3VwcG9ydHNCaW5hcnkgPSBoYXNYSFIyICYmICFmb3JjZUJhc2U2NDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgcmVxdWVzdC5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZFxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIHJlcXVlc3Qob3B0cyA9IHt9KSB7XG4gICAgT2JqZWN0LmFzc2lnbihvcHRzLCB7IHhkOiB0aGlzLnhkLCB4czogdGhpcy54cyB9LCB0aGlzLm9wdHMpO1xuICAgIHJldHVybiBuZXcgUmVxdWVzdCh0aGlzLnVyaSgpLCBvcHRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kcyBkYXRhLlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YSB0byBzZW5kLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsZWQgdXBvbiBmbHVzaC5cbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBkb1dyaXRlKGRhdGEsIGZuKSB7XG4gICAgY29uc3QgcmVxID0gdGhpcy5yZXF1ZXN0KHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBkYXRhOiBkYXRhXG4gICAgfSk7XG4gICAgcmVxLm9uKFwic3VjY2Vzc1wiLCBmbik7XG4gICAgcmVxLm9uKFwiZXJyb3JcIiwgZXJyID0+IHtcbiAgICAgIHRoaXMub25FcnJvcihcInhociBwb3N0IGVycm9yXCIsIGVycik7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU3RhcnRzIGEgcG9sbCBjeWNsZS5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBkb1BvbGwoKSB7XG4gICAgZGVidWcoXCJ4aHIgcG9sbFwiKTtcbiAgICBjb25zdCByZXEgPSB0aGlzLnJlcXVlc3QoKTtcbiAgICByZXEub24oXCJkYXRhXCIsIHRoaXMub25EYXRhLmJpbmQodGhpcykpO1xuICAgIHJlcS5vbihcImVycm9yXCIsIGVyciA9PiB7XG4gICAgICB0aGlzLm9uRXJyb3IoXCJ4aHIgcG9sbCBlcnJvclwiLCBlcnIpO1xuICAgIH0pO1xuICAgIHRoaXMucG9sbFhociA9IHJlcTtcbiAgfVxufVxuXG5jbGFzcyBSZXF1ZXN0IGV4dGVuZHMgRW1pdHRlciB7XG4gIC8qKlxuICAgKiBSZXF1ZXN0IGNvbnN0cnVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih1cmksIG9wdHMpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMub3B0cyA9IG9wdHM7XG5cbiAgICB0aGlzLm1ldGhvZCA9IG9wdHMubWV0aG9kIHx8IFwiR0VUXCI7XG4gICAgdGhpcy51cmkgPSB1cmk7XG4gICAgdGhpcy5hc3luYyA9IGZhbHNlICE9PSBvcHRzLmFzeW5jO1xuICAgIHRoaXMuZGF0YSA9IHVuZGVmaW5lZCAhPT0gb3B0cy5kYXRhID8gb3B0cy5kYXRhIDogbnVsbDtcblxuICAgIHRoaXMuY3JlYXRlKCk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyB0aGUgWEhSIG9iamVjdCBhbmQgc2VuZHMgdGhlIHJlcXVlc3QuXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgY3JlYXRlKCkge1xuICAgIGNvbnN0IG9wdHMgPSBwaWNrKFxuICAgICAgdGhpcy5vcHRzLFxuICAgICAgXCJhZ2VudFwiLFxuICAgICAgXCJlbmFibGVzWERSXCIsXG4gICAgICBcInBmeFwiLFxuICAgICAgXCJrZXlcIixcbiAgICAgIFwicGFzc3BocmFzZVwiLFxuICAgICAgXCJjZXJ0XCIsXG4gICAgICBcImNhXCIsXG4gICAgICBcImNpcGhlcnNcIixcbiAgICAgIFwicmVqZWN0VW5hdXRob3JpemVkXCIsXG4gICAgICBcImF1dG9VbnJlZlwiXG4gICAgKTtcbiAgICBvcHRzLnhkb21haW4gPSAhIXRoaXMub3B0cy54ZDtcbiAgICBvcHRzLnhzY2hlbWUgPSAhIXRoaXMub3B0cy54cztcblxuICAgIGNvbnN0IHhociA9ICh0aGlzLnhociA9IG5ldyBYTUxIdHRwUmVxdWVzdChvcHRzKSk7XG5cbiAgICB0cnkge1xuICAgICAgZGVidWcoXCJ4aHIgb3BlbiAlczogJXNcIiwgdGhpcy5tZXRob2QsIHRoaXMudXJpKTtcbiAgICAgIHhoci5vcGVuKHRoaXMubWV0aG9kLCB0aGlzLnVyaSwgdGhpcy5hc3luYyk7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAodGhpcy5vcHRzLmV4dHJhSGVhZGVycykge1xuICAgICAgICAgIHhoci5zZXREaXNhYmxlSGVhZGVyQ2hlY2sgJiYgeGhyLnNldERpc2FibGVIZWFkZXJDaGVjayh0cnVlKTtcbiAgICAgICAgICBmb3IgKGxldCBpIGluIHRoaXMub3B0cy5leHRyYUhlYWRlcnMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdHMuZXh0cmFIZWFkZXJzLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKGksIHRoaXMub3B0cy5leHRyYUhlYWRlcnNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge31cblxuICAgICAgaWYgKFwiUE9TVFwiID09PSB0aGlzLm1ldGhvZCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC10eXBlXCIsIFwidGV4dC9wbGFpbjtjaGFyc2V0PVVURi04XCIpO1xuICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgfVxuXG4gICAgICB0cnkge1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkFjY2VwdFwiLCBcIiovKlwiKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHt9XG5cbiAgICAgIC8vIGllNiBjaGVja1xuICAgICAgaWYgKFwid2l0aENyZWRlbnRpYWxzXCIgaW4geGhyKSB7XG4gICAgICAgIHhoci53aXRoQ3JlZGVudGlhbHMgPSB0aGlzLm9wdHMud2l0aENyZWRlbnRpYWxzO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5vcHRzLnJlcXVlc3RUaW1lb3V0KSB7XG4gICAgICAgIHhoci50aW1lb3V0ID0gdGhpcy5vcHRzLnJlcXVlc3RUaW1lb3V0O1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5oYXNYRFIoKSkge1xuICAgICAgICB4aHIub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgIHRoaXMub25Mb2FkKCk7XG4gICAgICAgIH07XG4gICAgICAgIHhoci5vbmVycm9yID0gKCkgPT4ge1xuICAgICAgICAgIHRoaXMub25FcnJvcih4aHIucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XG4gICAgICAgICAgaWYgKDQgIT09IHhoci5yZWFkeVN0YXRlKSByZXR1cm47XG4gICAgICAgICAgaWYgKDIwMCA9PT0geGhyLnN0YXR1cyB8fCAxMjIzID09PSB4aHIuc3RhdHVzKSB7XG4gICAgICAgICAgICB0aGlzLm9uTG9hZCgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBtYWtlIHN1cmUgdGhlIGBlcnJvcmAgZXZlbnQgaGFuZGxlciB0aGF0J3MgdXNlci1zZXRcbiAgICAgICAgICAgIC8vIGRvZXMgbm90IHRocm93IGluIHRoZSBzYW1lIHRpY2sgYW5kIGdldHMgY2F1Z2h0IGhlcmVcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLm9uRXJyb3IodHlwZW9mIHhoci5zdGF0dXMgPT09IFwibnVtYmVyXCIgPyB4aHIuc3RhdHVzIDogMCk7XG4gICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIGRlYnVnKFwieGhyIGRhdGEgJXNcIiwgdGhpcy5kYXRhKTtcbiAgICAgIHhoci5zZW5kKHRoaXMuZGF0YSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy8gTmVlZCB0byBkZWZlciBzaW5jZSAuY3JlYXRlKCkgaXMgY2FsbGVkIGRpcmVjdGx5IGZyb20gdGhlIGNvbnN0cnVjdG9yXG4gICAgICAvLyBhbmQgdGh1cyB0aGUgJ2Vycm9yJyBldmVudCBjYW4gb25seSBiZSBvbmx5IGJvdW5kICphZnRlciogdGhpcyBleGNlcHRpb25cbiAgICAgIC8vIG9jY3Vycy4gIFRoZXJlZm9yZSwgYWxzbywgd2UgY2Fubm90IHRocm93IGhlcmUgYXQgYWxsLlxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMub25FcnJvcihlKTtcbiAgICAgIH0sIDApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIHRoaXMuaW5kZXggPSBSZXF1ZXN0LnJlcXVlc3RzQ291bnQrKztcbiAgICAgIFJlcXVlc3QucmVxdWVzdHNbdGhpcy5pbmRleF0gPSB0aGlzO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgdXBvbiBzdWNjZXNzZnVsIHJlc3BvbnNlLlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIG9uU3VjY2VzcygpIHtcbiAgICB0aGlzLmVtaXQoXCJzdWNjZXNzXCIpO1xuICAgIHRoaXMuY2xlYW51cCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCBpZiB3ZSBoYXZlIGRhdGEuXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgb25EYXRhKGRhdGEpIHtcbiAgICB0aGlzLmVtaXQoXCJkYXRhXCIsIGRhdGEpO1xuICAgIHRoaXMub25TdWNjZXNzKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIHVwb24gZXJyb3IuXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgb25FcnJvcihlcnIpIHtcbiAgICB0aGlzLmVtaXQoXCJlcnJvclwiLCBlcnIpO1xuICAgIHRoaXMuY2xlYW51cCh0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhbnMgdXAgaG91c2UuXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgY2xlYW51cChmcm9tRXJyb3IpIHtcbiAgICBpZiAoXCJ1bmRlZmluZWRcIiA9PT0gdHlwZW9mIHRoaXMueGhyIHx8IG51bGwgPT09IHRoaXMueGhyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIHhtbGh0dHByZXF1ZXN0XG4gICAgaWYgKHRoaXMuaGFzWERSKCkpIHtcbiAgICAgIHRoaXMueGhyLm9ubG9hZCA9IHRoaXMueGhyLm9uZXJyb3IgPSBlbXB0eTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy54aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZW1wdHk7XG4gICAgfVxuXG4gICAgaWYgKGZyb21FcnJvcikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhpcy54aHIuYWJvcnQoKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgZGVsZXRlIFJlcXVlc3QucmVxdWVzdHNbdGhpcy5pbmRleF07XG4gICAgfVxuXG4gICAgdGhpcy54aHIgPSBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCB1cG9uIGxvYWQuXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgb25Mb2FkKCkge1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLnhoci5yZXNwb25zZVRleHQ7XG4gICAgaWYgKGRhdGEgIT09IG51bGwpIHtcbiAgICAgIHRoaXMub25EYXRhKGRhdGEpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBpdCBoYXMgWERvbWFpblJlcXVlc3QuXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgaGFzWERSKCkge1xuICAgIHJldHVybiB0eXBlb2YgWERvbWFpblJlcXVlc3QgIT09IFwidW5kZWZpbmVkXCIgJiYgIXRoaXMueHMgJiYgdGhpcy5lbmFibGVzWERSO1xuICB9XG5cbiAgLyoqXG4gICAqIEFib3J0cyB0aGUgcmVxdWVzdC5cbiAgICpcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG4gIGFib3J0KCkge1xuICAgIHRoaXMuY2xlYW51cCgpO1xuICB9XG59XG5cbi8qKlxuICogQWJvcnRzIHBlbmRpbmcgcmVxdWVzdHMgd2hlbiB1bmxvYWRpbmcgdGhlIHdpbmRvdy4gVGhpcyBpcyBuZWVkZWQgdG8gcHJldmVudFxuICogbWVtb3J5IGxlYWtzIChlLmcuIHdoZW4gdXNpbmcgSUUpIGFuZCB0byBlbnN1cmUgdGhhdCBubyBzcHVyaW91cyBlcnJvciBpc1xuICogZW1pdHRlZC5cbiAqL1xuXG5SZXF1ZXN0LnJlcXVlc3RzQ291bnQgPSAwO1xuUmVxdWVzdC5yZXF1ZXN0cyA9IHt9O1xuXG5pZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gIGlmICh0eXBlb2YgYXR0YWNoRXZlbnQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGF0dGFjaEV2ZW50KFwib251bmxvYWRcIiwgdW5sb2FkSGFuZGxlcik7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFkZEV2ZW50TGlzdGVuZXIgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGNvbnN0IHRlcm1pbmF0aW9uRXZlbnQgPSBcIm9ucGFnZWhpZGVcIiBpbiBnbG9iYWxUaGlzID8gXCJwYWdlaGlkZVwiIDogXCJ1bmxvYWRcIjtcbiAgICBhZGRFdmVudExpc3RlbmVyKHRlcm1pbmF0aW9uRXZlbnQsIHVubG9hZEhhbmRsZXIsIGZhbHNlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB1bmxvYWRIYW5kbGVyKCkge1xuICBmb3IgKGxldCBpIGluIFJlcXVlc3QucmVxdWVzdHMpIHtcbiAgICBpZiAoUmVxdWVzdC5yZXF1ZXN0cy5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgUmVxdWVzdC5yZXF1ZXN0c1tpXS5hYm9ydCgpO1xuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFhIUjtcbm1vZHVsZS5leHBvcnRzLlJlcXVlc3QgPSBSZXF1ZXN0O1xuIiwiY29uc3QgVHJhbnNwb3J0ID0gcmVxdWlyZShcIi4uL3RyYW5zcG9ydFwiKTtcbmNvbnN0IHBhcnNlcXMgPSByZXF1aXJlKFwicGFyc2Vxc1wiKTtcbmNvbnN0IHBhcnNlciA9IHJlcXVpcmUoXCJlbmdpbmUuaW8tcGFyc2VyXCIpO1xuY29uc3QgeWVhc3QgPSByZXF1aXJlKFwieWVhc3RcIik7XG5cbmNvbnN0IGRlYnVnID0gcmVxdWlyZShcImRlYnVnXCIpKFwiZW5naW5lLmlvLWNsaWVudDpwb2xsaW5nXCIpO1xuXG5jbGFzcyBQb2xsaW5nIGV4dGVuZHMgVHJhbnNwb3J0IHtcbiAgLyoqXG4gICAqIFRyYW5zcG9ydCBuYW1lLlxuICAgKi9cbiAgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIFwicG9sbGluZ1wiO1xuICB9XG5cbiAgLyoqXG4gICAqIE9wZW5zIHRoZSBzb2NrZXQgKHRyaWdnZXJzIHBvbGxpbmcpLiBXZSB3cml0ZSBhIFBJTkcgbWVzc2FnZSB0byBkZXRlcm1pbmVcbiAgICogd2hlbiB0aGUgdHJhbnNwb3J0IGlzIG9wZW4uXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgZG9PcGVuKCkge1xuICAgIHRoaXMucG9sbCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhdXNlcyBwb2xsaW5nLlxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayB1cG9uIGJ1ZmZlcnMgYXJlIGZsdXNoZWQgYW5kIHRyYW5zcG9ydCBpcyBwYXVzZWRcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBwYXVzZShvblBhdXNlKSB7XG4gICAgdGhpcy5yZWFkeVN0YXRlID0gXCJwYXVzaW5nXCI7XG5cbiAgICBjb25zdCBwYXVzZSA9ICgpID0+IHtcbiAgICAgIGRlYnVnKFwicGF1c2VkXCIpO1xuICAgICAgdGhpcy5yZWFkeVN0YXRlID0gXCJwYXVzZWRcIjtcbiAgICAgIG9uUGF1c2UoKTtcbiAgICB9O1xuXG4gICAgaWYgKHRoaXMucG9sbGluZyB8fCAhdGhpcy53cml0YWJsZSkge1xuICAgICAgbGV0IHRvdGFsID0gMDtcblxuICAgICAgaWYgKHRoaXMucG9sbGluZykge1xuICAgICAgICBkZWJ1ZyhcIndlIGFyZSBjdXJyZW50bHkgcG9sbGluZyAtIHdhaXRpbmcgdG8gcGF1c2VcIik7XG4gICAgICAgIHRvdGFsKys7XG4gICAgICAgIHRoaXMub25jZShcInBvbGxDb21wbGV0ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICBkZWJ1ZyhcInByZS1wYXVzZSBwb2xsaW5nIGNvbXBsZXRlXCIpO1xuICAgICAgICAgIC0tdG90YWwgfHwgcGF1c2UoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy53cml0YWJsZSkge1xuICAgICAgICBkZWJ1ZyhcIndlIGFyZSBjdXJyZW50bHkgd3JpdGluZyAtIHdhaXRpbmcgdG8gcGF1c2VcIik7XG4gICAgICAgIHRvdGFsKys7XG4gICAgICAgIHRoaXMub25jZShcImRyYWluXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGRlYnVnKFwicHJlLXBhdXNlIHdyaXRpbmcgY29tcGxldGVcIik7XG4gICAgICAgICAgLS10b3RhbCB8fCBwYXVzZSgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcGF1c2UoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU3RhcnRzIHBvbGxpbmcgY3ljbGUuXG4gICAqXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuICBwb2xsKCkge1xuICAgIGRlYnVnKFwicG9sbGluZ1wiKTtcbiAgICB0aGlzLnBvbGxpbmcgPSB0cnVlO1xuICAgIHRoaXMuZG9Qb2xsKCk7XG4gICAgdGhpcy5lbWl0KFwicG9sbFwiKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPdmVybG9hZHMgb25EYXRhIHRvIGRldGVjdCBwYXlsb2Fkcy5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBvbkRhdGEoZGF0YSkge1xuICAgIGRlYnVnKFwicG9sbGluZyBnb3QgZGF0YSAlc1wiLCBkYXRhKTtcbiAgICBjb25zdCBjYWxsYmFjayA9IHBhY2tldCA9PiB7XG4gICAgICAvLyBpZiBpdHMgdGhlIGZpcnN0IG1lc3NhZ2Ugd2UgY29uc2lkZXIgdGhlIHRyYW5zcG9ydCBvcGVuXG4gICAgICBpZiAoXCJvcGVuaW5nXCIgPT09IHRoaXMucmVhZHlTdGF0ZSAmJiBwYWNrZXQudHlwZSA9PT0gXCJvcGVuXCIpIHtcbiAgICAgICAgdGhpcy5vbk9wZW4oKTtcbiAgICAgIH1cblxuICAgICAgLy8gaWYgaXRzIGEgY2xvc2UgcGFja2V0LCB3ZSBjbG9zZSB0aGUgb25nb2luZyByZXF1ZXN0c1xuICAgICAgaWYgKFwiY2xvc2VcIiA9PT0gcGFja2V0LnR5cGUpIHtcbiAgICAgICAgdGhpcy5vbkNsb3NlKCk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgLy8gb3RoZXJ3aXNlIGJ5cGFzcyBvbkRhdGEgYW5kIGhhbmRsZSB0aGUgbWVzc2FnZVxuICAgICAgdGhpcy5vblBhY2tldChwYWNrZXQpO1xuICAgIH07XG5cbiAgICAvLyBkZWNvZGUgcGF5bG9hZFxuICAgIHBhcnNlci5kZWNvZGVQYXlsb2FkKGRhdGEsIHRoaXMuc29ja2V0LmJpbmFyeVR5cGUpLmZvckVhY2goY2FsbGJhY2spO1xuXG4gICAgLy8gaWYgYW4gZXZlbnQgZGlkIG5vdCB0cmlnZ2VyIGNsb3NpbmdcbiAgICBpZiAoXCJjbG9zZWRcIiAhPT0gdGhpcy5yZWFkeVN0YXRlKSB7XG4gICAgICAvLyBpZiB3ZSBnb3QgZGF0YSB3ZSdyZSBub3QgcG9sbGluZ1xuICAgICAgdGhpcy5wb2xsaW5nID0gZmFsc2U7XG4gICAgICB0aGlzLmVtaXQoXCJwb2xsQ29tcGxldGVcIik7XG5cbiAgICAgIGlmIChcIm9wZW5cIiA9PT0gdGhpcy5yZWFkeVN0YXRlKSB7XG4gICAgICAgIHRoaXMucG9sbCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGVidWcoJ2lnbm9yaW5nIHBvbGwgLSB0cmFuc3BvcnQgc3RhdGUgXCIlc1wiJywgdGhpcy5yZWFkeVN0YXRlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRm9yIHBvbGxpbmcsIHNlbmQgYSBjbG9zZSBwYWNrZXQuXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgZG9DbG9zZSgpIHtcbiAgICBjb25zdCBjbG9zZSA9ICgpID0+IHtcbiAgICAgIGRlYnVnKFwid3JpdGluZyBjbG9zZSBwYWNrZXRcIik7XG4gICAgICB0aGlzLndyaXRlKFt7IHR5cGU6IFwiY2xvc2VcIiB9XSk7XG4gICAgfTtcblxuICAgIGlmIChcIm9wZW5cIiA9PT0gdGhpcy5yZWFkeVN0YXRlKSB7XG4gICAgICBkZWJ1ZyhcInRyYW5zcG9ydCBvcGVuIC0gY2xvc2luZ1wiKTtcbiAgICAgIGNsb3NlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGluIGNhc2Ugd2UncmUgdHJ5aW5nIHRvIGNsb3NlIHdoaWxlXG4gICAgICAvLyBoYW5kc2hha2luZyBpcyBpbiBwcm9ncmVzcyAoR0gtMTY0KVxuICAgICAgZGVidWcoXCJ0cmFuc3BvcnQgbm90IG9wZW4gLSBkZWZlcnJpbmcgY2xvc2VcIik7XG4gICAgICB0aGlzLm9uY2UoXCJvcGVuXCIsIGNsb3NlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogV3JpdGVzIGEgcGFja2V0cyBwYXlsb2FkLlxuICAgKlxuICAgKiBAcGFyYW0ge0FycmF5fSBkYXRhIHBhY2tldHNcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZHJhaW4gY2FsbGJhY2tcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICB3cml0ZShwYWNrZXRzKSB7XG4gICAgdGhpcy53cml0YWJsZSA9IGZhbHNlO1xuXG4gICAgcGFyc2VyLmVuY29kZVBheWxvYWQocGFja2V0cywgZGF0YSA9PiB7XG4gICAgICB0aGlzLmRvV3JpdGUoZGF0YSwgKCkgPT4ge1xuICAgICAgICB0aGlzLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5lbWl0KFwiZHJhaW5cIik7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZW5lcmF0ZXMgdXJpIGZvciBjb25uZWN0aW9uLlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIHVyaSgpIHtcbiAgICBsZXQgcXVlcnkgPSB0aGlzLnF1ZXJ5IHx8IHt9O1xuICAgIGNvbnN0IHNjaGVtYSA9IHRoaXMub3B0cy5zZWN1cmUgPyBcImh0dHBzXCIgOiBcImh0dHBcIjtcbiAgICBsZXQgcG9ydCA9IFwiXCI7XG5cbiAgICAvLyBjYWNoZSBidXN0aW5nIGlzIGZvcmNlZFxuICAgIGlmIChmYWxzZSAhPT0gdGhpcy5vcHRzLnRpbWVzdGFtcFJlcXVlc3RzKSB7XG4gICAgICBxdWVyeVt0aGlzLm9wdHMudGltZXN0YW1wUGFyYW1dID0geWVhc3QoKTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuc3VwcG9ydHNCaW5hcnkgJiYgIXF1ZXJ5LnNpZCkge1xuICAgICAgcXVlcnkuYjY0ID0gMTtcbiAgICB9XG5cbiAgICBxdWVyeSA9IHBhcnNlcXMuZW5jb2RlKHF1ZXJ5KTtcblxuICAgIC8vIGF2b2lkIHBvcnQgaWYgZGVmYXVsdCBmb3Igc2NoZW1hXG4gICAgaWYgKFxuICAgICAgdGhpcy5vcHRzLnBvcnQgJiZcbiAgICAgICgoXCJodHRwc1wiID09PSBzY2hlbWEgJiYgTnVtYmVyKHRoaXMub3B0cy5wb3J0KSAhPT0gNDQzKSB8fFxuICAgICAgICAoXCJodHRwXCIgPT09IHNjaGVtYSAmJiBOdW1iZXIodGhpcy5vcHRzLnBvcnQpICE9PSA4MCkpXG4gICAgKSB7XG4gICAgICBwb3J0ID0gXCI6XCIgKyB0aGlzLm9wdHMucG9ydDtcbiAgICB9XG5cbiAgICAvLyBwcmVwZW5kID8gdG8gcXVlcnlcbiAgICBpZiAocXVlcnkubGVuZ3RoKSB7XG4gICAgICBxdWVyeSA9IFwiP1wiICsgcXVlcnk7XG4gICAgfVxuXG4gICAgY29uc3QgaXB2NiA9IHRoaXMub3B0cy5ob3N0bmFtZS5pbmRleE9mKFwiOlwiKSAhPT0gLTE7XG4gICAgcmV0dXJuIChcbiAgICAgIHNjaGVtYSArXG4gICAgICBcIjovL1wiICtcbiAgICAgIChpcHY2ID8gXCJbXCIgKyB0aGlzLm9wdHMuaG9zdG5hbWUgKyBcIl1cIiA6IHRoaXMub3B0cy5ob3N0bmFtZSkgK1xuICAgICAgcG9ydCArXG4gICAgICB0aGlzLm9wdHMucGF0aCArXG4gICAgICBxdWVyeVxuICAgICk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQb2xsaW5nO1xuIiwiY29uc3QgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoXCIuLi9nbG9iYWxUaGlzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgV2ViU29ja2V0OiBnbG9iYWxUaGlzLldlYlNvY2tldCB8fCBnbG9iYWxUaGlzLk1veldlYlNvY2tldCxcbiAgdXNpbmdCcm93c2VyV2ViU29ja2V0OiB0cnVlLFxuICBkZWZhdWx0QmluYXJ5VHlwZTogXCJhcnJheWJ1ZmZlclwiXG59O1xuIiwiY29uc3QgVHJhbnNwb3J0ID0gcmVxdWlyZShcIi4uL3RyYW5zcG9ydFwiKTtcbmNvbnN0IHBhcnNlciA9IHJlcXVpcmUoXCJlbmdpbmUuaW8tcGFyc2VyXCIpO1xuY29uc3QgcGFyc2VxcyA9IHJlcXVpcmUoXCJwYXJzZXFzXCIpO1xuY29uc3QgeWVhc3QgPSByZXF1aXJlKFwieWVhc3RcIik7XG5jb25zdCB7IHBpY2sgfSA9IHJlcXVpcmUoXCIuLi91dGlsXCIpO1xuY29uc3Qge1xuICBXZWJTb2NrZXQsXG4gIHVzaW5nQnJvd3NlcldlYlNvY2tldCxcbiAgZGVmYXVsdEJpbmFyeVR5cGVcbn0gPSByZXF1aXJlKFwiLi93ZWJzb2NrZXQtY29uc3RydWN0b3JcIik7XG5cbmNvbnN0IGRlYnVnID0gcmVxdWlyZShcImRlYnVnXCIpKFwiZW5naW5lLmlvLWNsaWVudDp3ZWJzb2NrZXRcIik7XG5cbi8vIGRldGVjdCBSZWFjdE5hdGl2ZSBlbnZpcm9ubWVudFxuY29uc3QgaXNSZWFjdE5hdGl2ZSA9XG4gIHR5cGVvZiBuYXZpZ2F0b3IgIT09IFwidW5kZWZpbmVkXCIgJiZcbiAgdHlwZW9mIG5hdmlnYXRvci5wcm9kdWN0ID09PSBcInN0cmluZ1wiICYmXG4gIG5hdmlnYXRvci5wcm9kdWN0LnRvTG93ZXJDYXNlKCkgPT09IFwicmVhY3RuYXRpdmVcIjtcblxuY2xhc3MgV1MgZXh0ZW5kcyBUcmFuc3BvcnQge1xuICAvKipcbiAgICogV2ViU29ja2V0IHRyYW5zcG9ydCBjb25zdHJ1Y3Rvci5cbiAgICpcbiAgICogQGFwaSB7T2JqZWN0fSBjb25uZWN0aW9uIG9wdGlvbnNcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG4gIGNvbnN0cnVjdG9yKG9wdHMpIHtcbiAgICBzdXBlcihvcHRzKTtcblxuICAgIHRoaXMuc3VwcG9ydHNCaW5hcnkgPSAhb3B0cy5mb3JjZUJhc2U2NDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmFuc3BvcnQgbmFtZS5cbiAgICpcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG4gIGdldCBuYW1lKCkge1xuICAgIHJldHVybiBcIndlYnNvY2tldFwiO1xuICB9XG5cbiAgLyoqXG4gICAqIE9wZW5zIHNvY2tldC5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBkb09wZW4oKSB7XG4gICAgaWYgKCF0aGlzLmNoZWNrKCkpIHtcbiAgICAgIC8vIGxldCBwcm9iZSB0aW1lb3V0XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdXJpID0gdGhpcy51cmkoKTtcbiAgICBjb25zdCBwcm90b2NvbHMgPSB0aGlzLm9wdHMucHJvdG9jb2xzO1xuXG4gICAgLy8gUmVhY3QgTmF0aXZlIG9ubHkgc3VwcG9ydHMgdGhlICdoZWFkZXJzJyBvcHRpb24sIGFuZCB3aWxsIHByaW50IGEgd2FybmluZyBpZiBhbnl0aGluZyBlbHNlIGlzIHBhc3NlZFxuICAgIGNvbnN0IG9wdHMgPSBpc1JlYWN0TmF0aXZlXG4gICAgICA/IHt9XG4gICAgICA6IHBpY2soXG4gICAgICAgICAgdGhpcy5vcHRzLFxuICAgICAgICAgIFwiYWdlbnRcIixcbiAgICAgICAgICBcInBlck1lc3NhZ2VEZWZsYXRlXCIsXG4gICAgICAgICAgXCJwZnhcIixcbiAgICAgICAgICBcImtleVwiLFxuICAgICAgICAgIFwicGFzc3BocmFzZVwiLFxuICAgICAgICAgIFwiY2VydFwiLFxuICAgICAgICAgIFwiY2FcIixcbiAgICAgICAgICBcImNpcGhlcnNcIixcbiAgICAgICAgICBcInJlamVjdFVuYXV0aG9yaXplZFwiLFxuICAgICAgICAgIFwibG9jYWxBZGRyZXNzXCIsXG4gICAgICAgICAgXCJwcm90b2NvbFZlcnNpb25cIixcbiAgICAgICAgICBcIm9yaWdpblwiLFxuICAgICAgICAgIFwibWF4UGF5bG9hZFwiLFxuICAgICAgICAgIFwiZmFtaWx5XCIsXG4gICAgICAgICAgXCJjaGVja1NlcnZlcklkZW50aXR5XCJcbiAgICAgICAgKTtcblxuICAgIGlmICh0aGlzLm9wdHMuZXh0cmFIZWFkZXJzKSB7XG4gICAgICBvcHRzLmhlYWRlcnMgPSB0aGlzLm9wdHMuZXh0cmFIZWFkZXJzO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICB0aGlzLndzID1cbiAgICAgICAgdXNpbmdCcm93c2VyV2ViU29ja2V0ICYmICFpc1JlYWN0TmF0aXZlXG4gICAgICAgICAgPyBwcm90b2NvbHNcbiAgICAgICAgICAgID8gbmV3IFdlYlNvY2tldCh1cmksIHByb3RvY29scylcbiAgICAgICAgICAgIDogbmV3IFdlYlNvY2tldCh1cmkpXG4gICAgICAgICAgOiBuZXcgV2ViU29ja2V0KHVyaSwgcHJvdG9jb2xzLCBvcHRzKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmVtaXQoXCJlcnJvclwiLCBlcnIpO1xuICAgIH1cblxuICAgIHRoaXMud3MuYmluYXJ5VHlwZSA9IHRoaXMuc29ja2V0LmJpbmFyeVR5cGUgfHwgZGVmYXVsdEJpbmFyeVR5cGU7XG5cbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBldmVudCBsaXN0ZW5lcnMgdG8gdGhlIHNvY2tldFxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHRoaXMud3Mub25vcGVuID0gKCkgPT4ge1xuICAgICAgaWYgKHRoaXMub3B0cy5hdXRvVW5yZWYpIHtcbiAgICAgICAgdGhpcy53cy5fc29ja2V0LnVucmVmKCk7XG4gICAgICB9XG4gICAgICB0aGlzLm9uT3BlbigpO1xuICAgIH07XG4gICAgdGhpcy53cy5vbmNsb3NlID0gdGhpcy5vbkNsb3NlLmJpbmQodGhpcyk7XG4gICAgdGhpcy53cy5vbm1lc3NhZ2UgPSBldiA9PiB0aGlzLm9uRGF0YShldi5kYXRhKTtcbiAgICB0aGlzLndzLm9uZXJyb3IgPSBlID0+IHRoaXMub25FcnJvcihcIndlYnNvY2tldCBlcnJvclwiLCBlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXcml0ZXMgZGF0YSB0byBzb2NrZXQuXG4gICAqXG4gICAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IG9mIHBhY2tldHMuXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgd3JpdGUocGFja2V0cykge1xuICAgIHRoaXMud3JpdGFibGUgPSBmYWxzZTtcblxuICAgIC8vIGVuY29kZVBhY2tldCBlZmZpY2llbnQgYXMgaXQgdXNlcyBXUyBmcmFtaW5nXG4gICAgLy8gbm8gbmVlZCBmb3IgZW5jb2RlUGF5bG9hZFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFja2V0cy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgcGFja2V0ID0gcGFja2V0c1tpXTtcbiAgICAgIGNvbnN0IGxhc3RQYWNrZXQgPSBpID09PSBwYWNrZXRzLmxlbmd0aCAtIDE7XG5cbiAgICAgIHBhcnNlci5lbmNvZGVQYWNrZXQocGFja2V0LCB0aGlzLnN1cHBvcnRzQmluYXJ5LCBkYXRhID0+IHtcbiAgICAgICAgLy8gYWx3YXlzIGNyZWF0ZSBhIG5ldyBvYmplY3QgKEdILTQzNylcbiAgICAgICAgY29uc3Qgb3B0cyA9IHt9O1xuICAgICAgICBpZiAoIXVzaW5nQnJvd3NlcldlYlNvY2tldCkge1xuICAgICAgICAgIGlmIChwYWNrZXQub3B0aW9ucykge1xuICAgICAgICAgICAgb3B0cy5jb21wcmVzcyA9IHBhY2tldC5vcHRpb25zLmNvbXByZXNzO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0aGlzLm9wdHMucGVyTWVzc2FnZURlZmxhdGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGxlbiA9XG4gICAgICAgICAgICAgIFwic3RyaW5nXCIgPT09IHR5cGVvZiBkYXRhID8gQnVmZmVyLmJ5dGVMZW5ndGgoZGF0YSkgOiBkYXRhLmxlbmd0aDtcbiAgICAgICAgICAgIGlmIChsZW4gPCB0aGlzLm9wdHMucGVyTWVzc2FnZURlZmxhdGUudGhyZXNob2xkKSB7XG4gICAgICAgICAgICAgIG9wdHMuY29tcHJlc3MgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTb21ldGltZXMgdGhlIHdlYnNvY2tldCBoYXMgYWxyZWFkeSBiZWVuIGNsb3NlZCBidXQgdGhlIGJyb3dzZXIgZGlkbid0XG4gICAgICAgIC8vIGhhdmUgYSBjaGFuY2Ugb2YgaW5mb3JtaW5nIHVzIGFib3V0IGl0IHlldCwgaW4gdGhhdCBjYXNlIHNlbmQgd2lsbFxuICAgICAgICAvLyB0aHJvdyBhbiBlcnJvclxuICAgICAgICB0cnkge1xuICAgICAgICAgIGlmICh1c2luZ0Jyb3dzZXJXZWJTb2NrZXQpIHtcbiAgICAgICAgICAgIC8vIFR5cGVFcnJvciBpcyB0aHJvd24gd2hlbiBwYXNzaW5nIHRoZSBzZWNvbmQgYXJndW1lbnQgb24gU2FmYXJpXG4gICAgICAgICAgICB0aGlzLndzLnNlbmQoZGF0YSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMud3Muc2VuZChkYXRhLCBvcHRzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBkZWJ1ZyhcIndlYnNvY2tldCBjbG9zZWQgYmVmb3JlIG9uY2xvc2UgZXZlbnRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobGFzdFBhY2tldCkge1xuICAgICAgICAgIC8vIGZha2UgZHJhaW5cbiAgICAgICAgICAvLyBkZWZlciB0byBuZXh0IHRpY2sgdG8gYWxsb3cgU29ja2V0IHRvIGNsZWFyIHdyaXRlQnVmZmVyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuZW1pdChcImRyYWluXCIpO1xuICAgICAgICAgIH0sIDApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIHVwb24gY2xvc2VcbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBvbkNsb3NlKCkge1xuICAgIFRyYW5zcG9ydC5wcm90b3R5cGUub25DbG9zZS5jYWxsKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsb3NlcyBzb2NrZXQuXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgZG9DbG9zZSgpIHtcbiAgICBpZiAodHlwZW9mIHRoaXMud3MgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIHRoaXMud3MuY2xvc2UoKTtcbiAgICAgIHRoaXMud3MgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZW5lcmF0ZXMgdXJpIGZvciBjb25uZWN0aW9uLlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIHVyaSgpIHtcbiAgICBsZXQgcXVlcnkgPSB0aGlzLnF1ZXJ5IHx8IHt9O1xuICAgIGNvbnN0IHNjaGVtYSA9IHRoaXMub3B0cy5zZWN1cmUgPyBcIndzc1wiIDogXCJ3c1wiO1xuICAgIGxldCBwb3J0ID0gXCJcIjtcblxuICAgIC8vIGF2b2lkIHBvcnQgaWYgZGVmYXVsdCBmb3Igc2NoZW1hXG4gICAgaWYgKFxuICAgICAgdGhpcy5vcHRzLnBvcnQgJiZcbiAgICAgICgoXCJ3c3NcIiA9PT0gc2NoZW1hICYmIE51bWJlcih0aGlzLm9wdHMucG9ydCkgIT09IDQ0MykgfHxcbiAgICAgICAgKFwid3NcIiA9PT0gc2NoZW1hICYmIE51bWJlcih0aGlzLm9wdHMucG9ydCkgIT09IDgwKSlcbiAgICApIHtcbiAgICAgIHBvcnQgPSBcIjpcIiArIHRoaXMub3B0cy5wb3J0O1xuICAgIH1cblxuICAgIC8vIGFwcGVuZCB0aW1lc3RhbXAgdG8gVVJJXG4gICAgaWYgKHRoaXMub3B0cy50aW1lc3RhbXBSZXF1ZXN0cykge1xuICAgICAgcXVlcnlbdGhpcy5vcHRzLnRpbWVzdGFtcFBhcmFtXSA9IHllYXN0KCk7XG4gICAgfVxuXG4gICAgLy8gY29tbXVuaWNhdGUgYmluYXJ5IHN1cHBvcnQgY2FwYWJpbGl0aWVzXG4gICAgaWYgKCF0aGlzLnN1cHBvcnRzQmluYXJ5KSB7XG4gICAgICBxdWVyeS5iNjQgPSAxO1xuICAgIH1cblxuICAgIHF1ZXJ5ID0gcGFyc2Vxcy5lbmNvZGUocXVlcnkpO1xuXG4gICAgLy8gcHJlcGVuZCA/IHRvIHF1ZXJ5XG4gICAgaWYgKHF1ZXJ5Lmxlbmd0aCkge1xuICAgICAgcXVlcnkgPSBcIj9cIiArIHF1ZXJ5O1xuICAgIH1cblxuICAgIGNvbnN0IGlwdjYgPSB0aGlzLm9wdHMuaG9zdG5hbWUuaW5kZXhPZihcIjpcIikgIT09IC0xO1xuICAgIHJldHVybiAoXG4gICAgICBzY2hlbWEgK1xuICAgICAgXCI6Ly9cIiArXG4gICAgICAoaXB2NiA/IFwiW1wiICsgdGhpcy5vcHRzLmhvc3RuYW1lICsgXCJdXCIgOiB0aGlzLm9wdHMuaG9zdG5hbWUpICtcbiAgICAgIHBvcnQgK1xuICAgICAgdGhpcy5vcHRzLnBhdGggK1xuICAgICAgcXVlcnlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEZlYXR1cmUgZGV0ZWN0aW9uIGZvciBXZWJTb2NrZXQuXG4gICAqXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59IHdoZXRoZXIgdGhpcyB0cmFuc3BvcnQgaXMgYXZhaWxhYmxlLlxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cbiAgY2hlY2soKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICEhV2ViU29ja2V0ICYmXG4gICAgICAhKFwiX19pbml0aWFsaXplXCIgaW4gV2ViU29ja2V0ICYmIHRoaXMubmFtZSA9PT0gV1MucHJvdG90eXBlLm5hbWUpXG4gICAgKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFdTO1xuIiwibW9kdWxlLmV4cG9ydHMucGljayA9IChvYmosIC4uLmF0dHIpID0+IHtcbiAgcmV0dXJuIGF0dHIucmVkdWNlKChhY2MsIGspID0+IHtcbiAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICBhY2Nba10gPSBvYmpba107XG4gICAgfVxuICAgIHJldHVybiBhY2M7XG4gIH0sIHt9KTtcbn07XG4iLCIvLyBicm93c2VyIHNoaW0gZm9yIHhtbGh0dHByZXF1ZXN0IG1vZHVsZVxuXG5jb25zdCBoYXNDT1JTID0gcmVxdWlyZShcImhhcy1jb3JzXCIpO1xuY29uc3QgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoXCIuL2dsb2JhbFRoaXNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3B0cykge1xuICBjb25zdCB4ZG9tYWluID0gb3B0cy54ZG9tYWluO1xuXG4gIC8vIHNjaGVtZSBtdXN0IGJlIHNhbWUgd2hlbiB1c2lnbiBYRG9tYWluUmVxdWVzdFxuICAvLyBodHRwOi8vYmxvZ3MubXNkbi5jb20vYi9pZWludGVybmFscy9hcmNoaXZlLzIwMTAvMDUvMTMveGRvbWFpbnJlcXVlc3QtcmVzdHJpY3Rpb25zLWxpbWl0YXRpb25zLWFuZC13b3JrYXJvdW5kcy5hc3B4XG4gIGNvbnN0IHhzY2hlbWUgPSBvcHRzLnhzY2hlbWU7XG5cbiAgLy8gWERvbWFpblJlcXVlc3QgaGFzIGEgZmxvdyBvZiBub3Qgc2VuZGluZyBjb29raWUsIHRoZXJlZm9yZSBpdCBzaG91bGQgYmUgZGlzYWJsZWQgYXMgYSBkZWZhdWx0LlxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vQXV0b21hdHRpYy9lbmdpbmUuaW8tY2xpZW50L3B1bGwvMjE3XG4gIGNvbnN0IGVuYWJsZXNYRFIgPSBvcHRzLmVuYWJsZXNYRFI7XG5cbiAgLy8gWE1MSHR0cFJlcXVlc3QgY2FuIGJlIGRpc2FibGVkIG9uIElFXG4gIHRyeSB7XG4gICAgaWYgKFwidW5kZWZpbmVkXCIgIT09IHR5cGVvZiBYTUxIdHRwUmVxdWVzdCAmJiAoIXhkb21haW4gfHwgaGFzQ09SUykpIHtcbiAgICAgIHJldHVybiBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHt9XG5cbiAgLy8gVXNlIFhEb21haW5SZXF1ZXN0IGZvciBJRTggaWYgZW5hYmxlc1hEUiBpcyB0cnVlXG4gIC8vIGJlY2F1c2UgbG9hZGluZyBiYXIga2VlcHMgZmxhc2hpbmcgd2hlbiB1c2luZyBqc29ucC1wb2xsaW5nXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS95dWppb3Nha2Evc29ja2UuaW8taWU4LWxvYWRpbmctZXhhbXBsZVxuICB0cnkge1xuICAgIGlmIChcInVuZGVmaW5lZFwiICE9PSB0eXBlb2YgWERvbWFpblJlcXVlc3QgJiYgIXhzY2hlbWUgJiYgZW5hYmxlc1hEUikge1xuICAgICAgcmV0dXJuIG5ldyBYRG9tYWluUmVxdWVzdCgpO1xuICAgIH1cbiAgfSBjYXRjaCAoZSkge31cblxuICBpZiAoIXhkb21haW4pIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIG5ldyBnbG9iYWxUaGlzW1tcIkFjdGl2ZVwiXS5jb25jYXQoXCJPYmplY3RcIikuam9pbihcIlhcIildKFxuICAgICAgICBcIk1pY3Jvc29mdC5YTUxIVFRQXCJcbiAgICAgICk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxufTtcbiIsImNvbnN0IFBBQ0tFVF9UWVBFUyA9IE9iamVjdC5jcmVhdGUobnVsbCk7IC8vIG5vIE1hcCA9IG5vIHBvbHlmaWxsXG5QQUNLRVRfVFlQRVNbXCJvcGVuXCJdID0gXCIwXCI7XG5QQUNLRVRfVFlQRVNbXCJjbG9zZVwiXSA9IFwiMVwiO1xuUEFDS0VUX1RZUEVTW1wicGluZ1wiXSA9IFwiMlwiO1xuUEFDS0VUX1RZUEVTW1wicG9uZ1wiXSA9IFwiM1wiO1xuUEFDS0VUX1RZUEVTW1wibWVzc2FnZVwiXSA9IFwiNFwiO1xuUEFDS0VUX1RZUEVTW1widXBncmFkZVwiXSA9IFwiNVwiO1xuUEFDS0VUX1RZUEVTW1wibm9vcFwiXSA9IFwiNlwiO1xuXG5jb25zdCBQQUNLRVRfVFlQRVNfUkVWRVJTRSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5PYmplY3Qua2V5cyhQQUNLRVRfVFlQRVMpLmZvckVhY2goa2V5ID0+IHtcbiAgUEFDS0VUX1RZUEVTX1JFVkVSU0VbUEFDS0VUX1RZUEVTW2tleV1dID0ga2V5O1xufSk7XG5cbmNvbnN0IEVSUk9SX1BBQ0tFVCA9IHsgdHlwZTogXCJlcnJvclwiLCBkYXRhOiBcInBhcnNlciBlcnJvclwiIH07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBQQUNLRVRfVFlQRVMsXG4gIFBBQ0tFVF9UWVBFU19SRVZFUlNFLFxuICBFUlJPUl9QQUNLRVRcbn07XG4iLCJjb25zdCB7IFBBQ0tFVF9UWVBFU19SRVZFUlNFLCBFUlJPUl9QQUNLRVQgfSA9IHJlcXVpcmUoXCIuL2NvbW1vbnNcIik7XG5cbmNvbnN0IHdpdGhOYXRpdmVBcnJheUJ1ZmZlciA9IHR5cGVvZiBBcnJheUJ1ZmZlciA9PT0gXCJmdW5jdGlvblwiO1xuXG5sZXQgYmFzZTY0ZGVjb2RlcjtcbmlmICh3aXRoTmF0aXZlQXJyYXlCdWZmZXIpIHtcbiAgYmFzZTY0ZGVjb2RlciA9IHJlcXVpcmUoXCJiYXNlNjQtYXJyYXlidWZmZXJcIik7XG59XG5cbmNvbnN0IGRlY29kZVBhY2tldCA9IChlbmNvZGVkUGFja2V0LCBiaW5hcnlUeXBlKSA9PiB7XG4gIGlmICh0eXBlb2YgZW5jb2RlZFBhY2tldCAhPT0gXCJzdHJpbmdcIikge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBcIm1lc3NhZ2VcIixcbiAgICAgIGRhdGE6IG1hcEJpbmFyeShlbmNvZGVkUGFja2V0LCBiaW5hcnlUeXBlKVxuICAgIH07XG4gIH1cbiAgY29uc3QgdHlwZSA9IGVuY29kZWRQYWNrZXQuY2hhckF0KDApO1xuICBpZiAodHlwZSA9PT0gXCJiXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogXCJtZXNzYWdlXCIsXG4gICAgICBkYXRhOiBkZWNvZGVCYXNlNjRQYWNrZXQoZW5jb2RlZFBhY2tldC5zdWJzdHJpbmcoMSksIGJpbmFyeVR5cGUpXG4gICAgfTtcbiAgfVxuICBjb25zdCBwYWNrZXRUeXBlID0gUEFDS0VUX1RZUEVTX1JFVkVSU0VbdHlwZV07XG4gIGlmICghcGFja2V0VHlwZSkge1xuICAgIHJldHVybiBFUlJPUl9QQUNLRVQ7XG4gIH1cbiAgcmV0dXJuIGVuY29kZWRQYWNrZXQubGVuZ3RoID4gMVxuICAgID8ge1xuICAgICAgICB0eXBlOiBQQUNLRVRfVFlQRVNfUkVWRVJTRVt0eXBlXSxcbiAgICAgICAgZGF0YTogZW5jb2RlZFBhY2tldC5zdWJzdHJpbmcoMSlcbiAgICAgIH1cbiAgICA6IHtcbiAgICAgICAgdHlwZTogUEFDS0VUX1RZUEVTX1JFVkVSU0VbdHlwZV1cbiAgICAgIH07XG59O1xuXG5jb25zdCBkZWNvZGVCYXNlNjRQYWNrZXQgPSAoZGF0YSwgYmluYXJ5VHlwZSkgPT4ge1xuICBpZiAoYmFzZTY0ZGVjb2Rlcikge1xuICAgIGNvbnN0IGRlY29kZWQgPSBiYXNlNjRkZWNvZGVyLmRlY29kZShkYXRhKTtcbiAgICByZXR1cm4gbWFwQmluYXJ5KGRlY29kZWQsIGJpbmFyeVR5cGUpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB7IGJhc2U2NDogdHJ1ZSwgZGF0YSB9OyAvLyBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzXG4gIH1cbn07XG5cbmNvbnN0IG1hcEJpbmFyeSA9IChkYXRhLCBiaW5hcnlUeXBlKSA9PiB7XG4gIHN3aXRjaCAoYmluYXJ5VHlwZSkge1xuICAgIGNhc2UgXCJibG9iXCI6XG4gICAgICByZXR1cm4gZGF0YSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyID8gbmV3IEJsb2IoW2RhdGFdKSA6IGRhdGE7XG4gICAgY2FzZSBcImFycmF5YnVmZmVyXCI6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBkYXRhOyAvLyBhc3N1bWluZyB0aGUgZGF0YSBpcyBhbHJlYWR5IGFuIEFycmF5QnVmZmVyXG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZGVjb2RlUGFja2V0O1xuIiwiY29uc3QgeyBQQUNLRVRfVFlQRVMgfSA9IHJlcXVpcmUoXCIuL2NvbW1vbnNcIik7XG5cbmNvbnN0IHdpdGhOYXRpdmVCbG9iID1cbiAgdHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiB8fFxuICAodHlwZW9mIEJsb2IgIT09IFwidW5kZWZpbmVkXCIgJiZcbiAgICBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoQmxvYikgPT09IFwiW29iamVjdCBCbG9iQ29uc3RydWN0b3JdXCIpO1xuY29uc3Qgd2l0aE5hdGl2ZUFycmF5QnVmZmVyID0gdHlwZW9mIEFycmF5QnVmZmVyID09PSBcImZ1bmN0aW9uXCI7XG5cbi8vIEFycmF5QnVmZmVyLmlzVmlldyBtZXRob2QgaXMgbm90IGRlZmluZWQgaW4gSUUxMFxuY29uc3QgaXNWaWV3ID0gb2JqID0+IHtcbiAgcmV0dXJuIHR5cGVvZiBBcnJheUJ1ZmZlci5pc1ZpZXcgPT09IFwiZnVuY3Rpb25cIlxuICAgID8gQXJyYXlCdWZmZXIuaXNWaWV3KG9iailcbiAgICA6IG9iaiAmJiBvYmouYnVmZmVyIGluc3RhbmNlb2YgQXJyYXlCdWZmZXI7XG59O1xuXG5jb25zdCBlbmNvZGVQYWNrZXQgPSAoeyB0eXBlLCBkYXRhIH0sIHN1cHBvcnRzQmluYXJ5LCBjYWxsYmFjaykgPT4ge1xuICBpZiAod2l0aE5hdGl2ZUJsb2IgJiYgZGF0YSBpbnN0YW5jZW9mIEJsb2IpIHtcbiAgICBpZiAoc3VwcG9ydHNCaW5hcnkpIHtcbiAgICAgIHJldHVybiBjYWxsYmFjayhkYXRhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGVuY29kZUJsb2JBc0Jhc2U2NChkYXRhLCBjYWxsYmFjayk7XG4gICAgfVxuICB9IGVsc2UgaWYgKFxuICAgIHdpdGhOYXRpdmVBcnJheUJ1ZmZlciAmJlxuICAgIChkYXRhIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIgfHwgaXNWaWV3KGRhdGEpKVxuICApIHtcbiAgICBpZiAoc3VwcG9ydHNCaW5hcnkpIHtcbiAgICAgIHJldHVybiBjYWxsYmFjayhkYXRhIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIgPyBkYXRhIDogZGF0YS5idWZmZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZW5jb2RlQmxvYkFzQmFzZTY0KG5ldyBCbG9iKFtkYXRhXSksIGNhbGxiYWNrKTtcbiAgICB9XG4gIH1cbiAgLy8gcGxhaW4gc3RyaW5nXG4gIHJldHVybiBjYWxsYmFjayhQQUNLRVRfVFlQRVNbdHlwZV0gKyAoZGF0YSB8fCBcIlwiKSk7XG59O1xuXG5jb25zdCBlbmNvZGVCbG9iQXNCYXNlNjQgPSAoZGF0YSwgY2FsbGJhY2spID0+IHtcbiAgY29uc3QgZmlsZVJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gIGZpbGVSZWFkZXIub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgY29udGVudCA9IGZpbGVSZWFkZXIucmVzdWx0LnNwbGl0KFwiLFwiKVsxXTtcbiAgICBjYWxsYmFjayhcImJcIiArIGNvbnRlbnQpO1xuICB9O1xuICByZXR1cm4gZmlsZVJlYWRlci5yZWFkQXNEYXRhVVJMKGRhdGEpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBlbmNvZGVQYWNrZXQ7XG4iLCJjb25zdCBlbmNvZGVQYWNrZXQgPSByZXF1aXJlKFwiLi9lbmNvZGVQYWNrZXRcIik7XG5jb25zdCBkZWNvZGVQYWNrZXQgPSByZXF1aXJlKFwiLi9kZWNvZGVQYWNrZXRcIik7XG5cbmNvbnN0IFNFUEFSQVRPUiA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMzApOyAvLyBzZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvRGVsaW1pdGVyI0FTQ0lJX2RlbGltaXRlZF90ZXh0XG5cbmNvbnN0IGVuY29kZVBheWxvYWQgPSAocGFja2V0cywgY2FsbGJhY2spID0+IHtcbiAgLy8gc29tZSBwYWNrZXRzIG1heSBiZSBhZGRlZCB0byB0aGUgYXJyYXkgd2hpbGUgZW5jb2RpbmcsIHNvIHRoZSBpbml0aWFsIGxlbmd0aCBtdXN0IGJlIHNhdmVkXG4gIGNvbnN0IGxlbmd0aCA9IHBhY2tldHMubGVuZ3RoO1xuICBjb25zdCBlbmNvZGVkUGFja2V0cyA9IG5ldyBBcnJheShsZW5ndGgpO1xuICBsZXQgY291bnQgPSAwO1xuXG4gIHBhY2tldHMuZm9yRWFjaCgocGFja2V0LCBpKSA9PiB7XG4gICAgLy8gZm9yY2UgYmFzZTY0IGVuY29kaW5nIGZvciBiaW5hcnkgcGFja2V0c1xuICAgIGVuY29kZVBhY2tldChwYWNrZXQsIGZhbHNlLCBlbmNvZGVkUGFja2V0ID0+IHtcbiAgICAgIGVuY29kZWRQYWNrZXRzW2ldID0gZW5jb2RlZFBhY2tldDtcbiAgICAgIGlmICgrK2NvdW50ID09PSBsZW5ndGgpIHtcbiAgICAgICAgY2FsbGJhY2soZW5jb2RlZFBhY2tldHMuam9pbihTRVBBUkFUT1IpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59O1xuXG5jb25zdCBkZWNvZGVQYXlsb2FkID0gKGVuY29kZWRQYXlsb2FkLCBiaW5hcnlUeXBlKSA9PiB7XG4gIGNvbnN0IGVuY29kZWRQYWNrZXRzID0gZW5jb2RlZFBheWxvYWQuc3BsaXQoU0VQQVJBVE9SKTtcbiAgY29uc3QgcGFja2V0cyA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGVuY29kZWRQYWNrZXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgZGVjb2RlZFBhY2tldCA9IGRlY29kZVBhY2tldChlbmNvZGVkUGFja2V0c1tpXSwgYmluYXJ5VHlwZSk7XG4gICAgcGFja2V0cy5wdXNoKGRlY29kZWRQYWNrZXQpO1xuICAgIGlmIChkZWNvZGVkUGFja2V0LnR5cGUgPT09IFwiZXJyb3JcIikge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiBwYWNrZXRzO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHByb3RvY29sOiA0LFxuICBlbmNvZGVQYWNrZXQsXG4gIGVuY29kZVBheWxvYWQsXG4gIGRlY29kZVBhY2tldCxcbiAgZGVjb2RlUGF5bG9hZFxufTtcbiIsIlxuLyoqXG4gKiBNb2R1bGUgZXhwb3J0cy5cbiAqXG4gKiBMb2dpYyBib3Jyb3dlZCBmcm9tIE1vZGVybml6cjpcbiAqXG4gKiAgIC0gaHR0cHM6Ly9naXRodWIuY29tL01vZGVybml6ci9Nb2Rlcm5penIvYmxvYi9tYXN0ZXIvZmVhdHVyZS1kZXRlY3RzL2NvcnMuanNcbiAqL1xuXG50cnkge1xuICBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiBYTUxIdHRwUmVxdWVzdCAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAnd2l0aENyZWRlbnRpYWxzJyBpbiBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbn0gY2F0Y2ggKGVycikge1xuICAvLyBpZiBYTUxIdHRwIHN1cHBvcnQgaXMgZGlzYWJsZWQgaW4gSUUgdGhlbiBpdCB3aWxsIHRocm93XG4gIC8vIHdoZW4gdHJ5aW5nIHRvIGNyZWF0ZVxuICBtb2R1bGUuZXhwb3J0cyA9IGZhbHNlO1xufVxuIiwiLypcbiAgaHR0cHM6Ly9naXRodWIuY29tL2JhbmtzZWFuIHdyYXBwZWQgTWFrb3RvIE1hdHN1bW90byBhbmQgVGFrdWppIE5pc2hpbXVyYSdzIGNvZGUgaW4gYSBuYW1lc3BhY2VcbiAgc28gaXQncyBiZXR0ZXIgZW5jYXBzdWxhdGVkLiBOb3cgeW91IGNhbiBoYXZlIG11bHRpcGxlIHJhbmRvbSBudW1iZXIgZ2VuZXJhdG9yc1xuICBhbmQgdGhleSB3b24ndCBzdG9tcCBhbGwgb3ZlciBlYWNob3RoZXIncyBzdGF0ZS5cblxuICBJZiB5b3Ugd2FudCB0byB1c2UgdGhpcyBhcyBhIHN1YnN0aXR1dGUgZm9yIE1hdGgucmFuZG9tKCksIHVzZSB0aGUgcmFuZG9tKClcbiAgbWV0aG9kIGxpa2Ugc286XG5cbiAgdmFyIG0gPSBuZXcgTWVyc2VubmVUd2lzdGVyKCk7XG4gIHZhciByYW5kb21OdW1iZXIgPSBtLnJhbmRvbSgpO1xuXG4gIFlvdSBjYW4gYWxzbyBjYWxsIHRoZSBvdGhlciBnZW5yYW5kX3tmb299KCkgbWV0aG9kcyBvbiB0aGUgaW5zdGFuY2UuXG5cbiAgSWYgeW91IHdhbnQgdG8gdXNlIGEgc3BlY2lmaWMgc2VlZCBpbiBvcmRlciB0byBnZXQgYSByZXBlYXRhYmxlIHJhbmRvbVxuICBzZXF1ZW5jZSwgcGFzcyBhbiBpbnRlZ2VyIGludG8gdGhlIGNvbnN0cnVjdG9yOlxuXG4gIHZhciBtID0gbmV3IE1lcnNlbm5lVHdpc3RlcigxMjMpO1xuXG4gIGFuZCB0aGF0IHdpbGwgYWx3YXlzIHByb2R1Y2UgdGhlIHNhbWUgcmFuZG9tIHNlcXVlbmNlLlxuXG4gIFNlYW4gTWNDdWxsb3VnaCAoYmFua3NlYW5AZ21haWwuY29tKVxuKi9cblxuLypcbiAgIEEgQy1wcm9ncmFtIGZvciBNVDE5OTM3LCB3aXRoIGluaXRpYWxpemF0aW9uIGltcHJvdmVkIDIwMDIvMS8yNi5cbiAgIENvZGVkIGJ5IFRha3VqaSBOaXNoaW11cmEgYW5kIE1ha290byBNYXRzdW1vdG8uXG5cbiAgIEJlZm9yZSB1c2luZywgaW5pdGlhbGl6ZSB0aGUgc3RhdGUgYnkgdXNpbmcgaW5pdF9zZWVkKHNlZWQpXG4gICBvciBpbml0X2J5X2FycmF5KGluaXRfa2V5LCBrZXlfbGVuZ3RoKS5cblxuICAgQ29weXJpZ2h0IChDKSAxOTk3IC0gMjAwMiwgTWFrb3RvIE1hdHN1bW90byBhbmQgVGFrdWppIE5pc2hpbXVyYSxcbiAgIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5cbiAgIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dFxuICAgbW9kaWZpY2F0aW9uLCBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zXG4gICBhcmUgbWV0OlxuXG4gICAgIDEuIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0XG4gICAgICAgIG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cblxuICAgICAyLiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodFxuICAgICAgICBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIgaW4gdGhlXG4gICAgICAgIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZSBkaXN0cmlidXRpb24uXG5cbiAgICAgMy4gVGhlIG5hbWVzIG9mIGl0cyBjb250cmlidXRvcnMgbWF5IG5vdCBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZVxuICAgICAgICBwcm9kdWN0cyBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZSB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW5cbiAgICAgICAgcGVybWlzc2lvbi5cblxuICAgVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SU1xuICAgXCJBUyBJU1wiIEFORCBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVFxuICAgTElNSVRFRCBUTywgVEhFIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SXG4gICBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC4gIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFQgT1dORVIgT1JcbiAgIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLFxuICAgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLFxuICAgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsIERBVEEsIE9SXG4gICBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZIE9GXG4gICBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElOR1xuICAgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRSBPRiBUSElTXG4gICBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRSBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cblxuXG4gICBBbnkgZmVlZGJhY2sgaXMgdmVyeSB3ZWxjb21lLlxuICAgaHR0cDovL3d3dy5tYXRoLnNjaS5oaXJvc2hpbWEtdS5hYy5qcC9+bS1tYXQvTVQvZW10Lmh0bWxcbiAgIGVtYWlsOiBtLW1hdCBAIG1hdGguc2NpLmhpcm9zaGltYS11LmFjLmpwIChyZW1vdmUgc3BhY2UpXG4qL1xuXG52YXIgTWVyc2VubmVUd2lzdGVyID0gZnVuY3Rpb24oc2VlZCkge1xuXHRpZiAoc2VlZCA9PSB1bmRlZmluZWQpIHtcblx0XHRzZWVkID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cdH1cblxuXHQvKiBQZXJpb2QgcGFyYW1ldGVycyAqL1xuXHR0aGlzLk4gPSA2MjQ7XG5cdHRoaXMuTSA9IDM5Nztcblx0dGhpcy5NQVRSSVhfQSA9IDB4OTkwOGIwZGY7ICAgLyogY29uc3RhbnQgdmVjdG9yIGEgKi9cblx0dGhpcy5VUFBFUl9NQVNLID0gMHg4MDAwMDAwMDsgLyogbW9zdCBzaWduaWZpY2FudCB3LXIgYml0cyAqL1xuXHR0aGlzLkxPV0VSX01BU0sgPSAweDdmZmZmZmZmOyAvKiBsZWFzdCBzaWduaWZpY2FudCByIGJpdHMgKi9cblxuXHR0aGlzLm10ID0gbmV3IEFycmF5KHRoaXMuTik7IC8qIHRoZSBhcnJheSBmb3IgdGhlIHN0YXRlIHZlY3RvciAqL1xuXHR0aGlzLm10aT10aGlzLk4rMTsgLyogbXRpPT1OKzEgbWVhbnMgbXRbTl0gaXMgbm90IGluaXRpYWxpemVkICovXG5cblx0aWYgKHNlZWQuY29uc3RydWN0b3IgPT0gQXJyYXkpIHtcblx0XHR0aGlzLmluaXRfYnlfYXJyYXkoc2VlZCwgc2VlZC5sZW5ndGgpO1xuXHR9XG5cdGVsc2Uge1xuXHRcdHRoaXMuaW5pdF9zZWVkKHNlZWQpO1xuXHR9XG59XG5cbi8qIGluaXRpYWxpemVzIG10W05dIHdpdGggYSBzZWVkICovXG4vKiBvcmlnaW4gbmFtZSBpbml0X2dlbnJhbmQgKi9cbk1lcnNlbm5lVHdpc3Rlci5wcm90b3R5cGUuaW5pdF9zZWVkID0gZnVuY3Rpb24ocykge1xuXHR0aGlzLm10WzBdID0gcyA+Pj4gMDtcblx0Zm9yICh0aGlzLm10aT0xOyB0aGlzLm10aTx0aGlzLk47IHRoaXMubXRpKyspIHtcblx0XHR2YXIgcyA9IHRoaXMubXRbdGhpcy5tdGktMV0gXiAodGhpcy5tdFt0aGlzLm10aS0xXSA+Pj4gMzApO1xuXHRcdHRoaXMubXRbdGhpcy5tdGldID0gKCgoKChzICYgMHhmZmZmMDAwMCkgPj4+IDE2KSAqIDE4MTI0MzMyNTMpIDw8IDE2KSArIChzICYgMHgwMDAwZmZmZikgKiAxODEyNDMzMjUzKVxuXHRcdCsgdGhpcy5tdGk7XG5cdFx0LyogU2VlIEtudXRoIFRBT0NQIFZvbDIuIDNyZCBFZC4gUC4xMDYgZm9yIG11bHRpcGxpZXIuICovXG5cdFx0LyogSW4gdGhlIHByZXZpb3VzIHZlcnNpb25zLCBNU0JzIG9mIHRoZSBzZWVkIGFmZmVjdCAgICovXG5cdFx0Lyogb25seSBNU0JzIG9mIHRoZSBhcnJheSBtdFtdLiAgICAgICAgICAgICAgICAgICAgICAgICovXG5cdFx0LyogMjAwMi8wMS8wOSBtb2RpZmllZCBieSBNYWtvdG8gTWF0c3Vtb3RvICAgICAgICAgICAgICovXG5cdFx0dGhpcy5tdFt0aGlzLm10aV0gPj4+PSAwO1xuXHRcdC8qIGZvciA+MzIgYml0IG1hY2hpbmVzICovXG5cdH1cbn1cblxuLyogaW5pdGlhbGl6ZSBieSBhbiBhcnJheSB3aXRoIGFycmF5LWxlbmd0aCAqL1xuLyogaW5pdF9rZXkgaXMgdGhlIGFycmF5IGZvciBpbml0aWFsaXppbmcga2V5cyAqL1xuLyoga2V5X2xlbmd0aCBpcyBpdHMgbGVuZ3RoICovXG4vKiBzbGlnaHQgY2hhbmdlIGZvciBDKyssIDIwMDQvMi8yNiAqL1xuTWVyc2VubmVUd2lzdGVyLnByb3RvdHlwZS5pbml0X2J5X2FycmF5ID0gZnVuY3Rpb24oaW5pdF9rZXksIGtleV9sZW5ndGgpIHtcblx0dmFyIGksIGosIGs7XG5cdHRoaXMuaW5pdF9zZWVkKDE5NjUwMjE4KTtcblx0aT0xOyBqPTA7XG5cdGsgPSAodGhpcy5OPmtleV9sZW5ndGggPyB0aGlzLk4gOiBrZXlfbGVuZ3RoKTtcblx0Zm9yICg7IGs7IGstLSkge1xuXHRcdHZhciBzID0gdGhpcy5tdFtpLTFdIF4gKHRoaXMubXRbaS0xXSA+Pj4gMzApXG5cdFx0dGhpcy5tdFtpXSA9ICh0aGlzLm10W2ldIF4gKCgoKChzICYgMHhmZmZmMDAwMCkgPj4+IDE2KSAqIDE2NjQ1MjUpIDw8IDE2KSArICgocyAmIDB4MDAwMGZmZmYpICogMTY2NDUyNSkpKVxuXHRcdCsgaW5pdF9rZXlbal0gKyBqOyAvKiBub24gbGluZWFyICovXG5cdFx0dGhpcy5tdFtpXSA+Pj49IDA7IC8qIGZvciBXT1JEU0laRSA+IDMyIG1hY2hpbmVzICovXG5cdFx0aSsrOyBqKys7XG5cdFx0aWYgKGk+PXRoaXMuTikgeyB0aGlzLm10WzBdID0gdGhpcy5tdFt0aGlzLk4tMV07IGk9MTsgfVxuXHRcdGlmIChqPj1rZXlfbGVuZ3RoKSBqPTA7XG5cdH1cblx0Zm9yIChrPXRoaXMuTi0xOyBrOyBrLS0pIHtcblx0XHR2YXIgcyA9IHRoaXMubXRbaS0xXSBeICh0aGlzLm10W2ktMV0gPj4+IDMwKTtcblx0XHR0aGlzLm10W2ldID0gKHRoaXMubXRbaV0gXiAoKCgoKHMgJiAweGZmZmYwMDAwKSA+Pj4gMTYpICogMTU2NjA4Mzk0MSkgPDwgMTYpICsgKHMgJiAweDAwMDBmZmZmKSAqIDE1NjYwODM5NDEpKVxuXHRcdC0gaTsgLyogbm9uIGxpbmVhciAqL1xuXHRcdHRoaXMubXRbaV0gPj4+PSAwOyAvKiBmb3IgV09SRFNJWkUgPiAzMiBtYWNoaW5lcyAqL1xuXHRcdGkrKztcblx0XHRpZiAoaT49dGhpcy5OKSB7IHRoaXMubXRbMF0gPSB0aGlzLm10W3RoaXMuTi0xXTsgaT0xOyB9XG5cdH1cblxuXHR0aGlzLm10WzBdID0gMHg4MDAwMDAwMDsgLyogTVNCIGlzIDE7IGFzc3VyaW5nIG5vbi16ZXJvIGluaXRpYWwgYXJyYXkgKi9cbn1cblxuLyogZ2VuZXJhdGVzIGEgcmFuZG9tIG51bWJlciBvbiBbMCwweGZmZmZmZmZmXS1pbnRlcnZhbCAqL1xuLyogb3JpZ2luIG5hbWUgZ2VucmFuZF9pbnQzMiAqL1xuTWVyc2VubmVUd2lzdGVyLnByb3RvdHlwZS5yYW5kb21faW50ID0gZnVuY3Rpb24oKSB7XG5cdHZhciB5O1xuXHR2YXIgbWFnMDEgPSBuZXcgQXJyYXkoMHgwLCB0aGlzLk1BVFJJWF9BKTtcblx0LyogbWFnMDFbeF0gPSB4ICogTUFUUklYX0EgIGZvciB4PTAsMSAqL1xuXG5cdGlmICh0aGlzLm10aSA+PSB0aGlzLk4pIHsgLyogZ2VuZXJhdGUgTiB3b3JkcyBhdCBvbmUgdGltZSAqL1xuXHRcdHZhciBraztcblxuXHRcdGlmICh0aGlzLm10aSA9PSB0aGlzLk4rMSkgIC8qIGlmIGluaXRfc2VlZCgpIGhhcyBub3QgYmVlbiBjYWxsZWQsICovXG5cdFx0XHR0aGlzLmluaXRfc2VlZCg1NDg5KTsgIC8qIGEgZGVmYXVsdCBpbml0aWFsIHNlZWQgaXMgdXNlZCAqL1xuXG5cdFx0Zm9yIChraz0wO2trPHRoaXMuTi10aGlzLk07a2srKykge1xuXHRcdFx0eSA9ICh0aGlzLm10W2trXSZ0aGlzLlVQUEVSX01BU0spfCh0aGlzLm10W2trKzFdJnRoaXMuTE9XRVJfTUFTSyk7XG5cdFx0XHR0aGlzLm10W2trXSA9IHRoaXMubXRba2srdGhpcy5NXSBeICh5ID4+PiAxKSBeIG1hZzAxW3kgJiAweDFdO1xuXHRcdH1cblx0XHRmb3IgKDtrazx0aGlzLk4tMTtraysrKSB7XG5cdFx0XHR5ID0gKHRoaXMubXRba2tdJnRoaXMuVVBQRVJfTUFTSyl8KHRoaXMubXRba2srMV0mdGhpcy5MT1dFUl9NQVNLKTtcblx0XHRcdHRoaXMubXRba2tdID0gdGhpcy5tdFtraysodGhpcy5NLXRoaXMuTildIF4gKHkgPj4+IDEpIF4gbWFnMDFbeSAmIDB4MV07XG5cdFx0fVxuXHRcdHkgPSAodGhpcy5tdFt0aGlzLk4tMV0mdGhpcy5VUFBFUl9NQVNLKXwodGhpcy5tdFswXSZ0aGlzLkxPV0VSX01BU0spO1xuXHRcdHRoaXMubXRbdGhpcy5OLTFdID0gdGhpcy5tdFt0aGlzLk0tMV0gXiAoeSA+Pj4gMSkgXiBtYWcwMVt5ICYgMHgxXTtcblxuXHRcdHRoaXMubXRpID0gMDtcblx0fVxuXG5cdHkgPSB0aGlzLm10W3RoaXMubXRpKytdO1xuXG5cdC8qIFRlbXBlcmluZyAqL1xuXHR5IF49ICh5ID4+PiAxMSk7XG5cdHkgXj0gKHkgPDwgNykgJiAweDlkMmM1NjgwO1xuXHR5IF49ICh5IDw8IDE1KSAmIDB4ZWZjNjAwMDA7XG5cdHkgXj0gKHkgPj4+IDE4KTtcblxuXHRyZXR1cm4geSA+Pj4gMDtcbn1cblxuLyogZ2VuZXJhdGVzIGEgcmFuZG9tIG51bWJlciBvbiBbMCwweDdmZmZmZmZmXS1pbnRlcnZhbCAqL1xuLyogb3JpZ2luIG5hbWUgZ2VucmFuZF9pbnQzMSAqL1xuTWVyc2VubmVUd2lzdGVyLnByb3RvdHlwZS5yYW5kb21faW50MzEgPSBmdW5jdGlvbigpIHtcblx0cmV0dXJuICh0aGlzLnJhbmRvbV9pbnQoKT4+PjEpO1xufVxuXG4vKiBnZW5lcmF0ZXMgYSByYW5kb20gbnVtYmVyIG9uIFswLDFdLXJlYWwtaW50ZXJ2YWwgKi9cbi8qIG9yaWdpbiBuYW1lIGdlbnJhbmRfcmVhbDEgKi9cbk1lcnNlbm5lVHdpc3Rlci5wcm90b3R5cGUucmFuZG9tX2luY2wgPSBmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXMucmFuZG9tX2ludCgpKigxLjAvNDI5NDk2NzI5NS4wKTtcblx0LyogZGl2aWRlZCBieSAyXjMyLTEgKi9cbn1cblxuLyogZ2VuZXJhdGVzIGEgcmFuZG9tIG51bWJlciBvbiBbMCwxKS1yZWFsLWludGVydmFsICovXG5NZXJzZW5uZVR3aXN0ZXIucHJvdG90eXBlLnJhbmRvbSA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcy5yYW5kb21faW50KCkqKDEuMC80Mjk0OTY3Mjk2LjApO1xuXHQvKiBkaXZpZGVkIGJ5IDJeMzIgKi9cbn1cblxuLyogZ2VuZXJhdGVzIGEgcmFuZG9tIG51bWJlciBvbiAoMCwxKS1yZWFsLWludGVydmFsICovXG4vKiBvcmlnaW4gbmFtZSBnZW5yYW5kX3JlYWwzICovXG5NZXJzZW5uZVR3aXN0ZXIucHJvdG90eXBlLnJhbmRvbV9leGNsID0gZnVuY3Rpb24oKSB7XG5cdHJldHVybiAodGhpcy5yYW5kb21faW50KCkgKyAwLjUpKigxLjAvNDI5NDk2NzI5Ni4wKTtcblx0LyogZGl2aWRlZCBieSAyXjMyICovXG59XG5cbi8qIGdlbmVyYXRlcyBhIHJhbmRvbSBudW1iZXIgb24gWzAsMSkgd2l0aCA1My1iaXQgcmVzb2x1dGlvbiovXG4vKiBvcmlnaW4gbmFtZSBnZW5yYW5kX3JlczUzICovXG5NZXJzZW5uZVR3aXN0ZXIucHJvdG90eXBlLnJhbmRvbV9sb25nID0gZnVuY3Rpb24oKSB7XG5cdHZhciBhPXRoaXMucmFuZG9tX2ludCgpPj4+NSwgYj10aGlzLnJhbmRvbV9pbnQoKT4+PjY7XG5cdHJldHVybihhKjY3MTA4ODY0LjArYikqKDEuMC85MDA3MTk5MjU0NzQwOTkyLjApO1xufVxuXG4vKiBUaGVzZSByZWFsIHZlcnNpb25zIGFyZSBkdWUgdG8gSXNha3UgV2FkYSwgMjAwMi8wMS8wOSBhZGRlZCAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1lcnNlbm5lVHdpc3RlcjtcbiIsIi8qKlxuICogQ29tcGlsZXMgYSBxdWVyeXN0cmluZ1xuICogUmV0dXJucyBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIG9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZXhwb3J0cy5lbmNvZGUgPSBmdW5jdGlvbiAob2JqKSB7XG4gIHZhciBzdHIgPSAnJztcblxuICBmb3IgKHZhciBpIGluIG9iaikge1xuICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgIGlmIChzdHIubGVuZ3RoKSBzdHIgKz0gJyYnO1xuICAgICAgc3RyICs9IGVuY29kZVVSSUNvbXBvbmVudChpKSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudChvYmpbaV0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdHI7XG59O1xuXG4vKipcbiAqIFBhcnNlcyBhIHNpbXBsZSBxdWVyeXN0cmluZyBpbnRvIGFuIG9iamVjdFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBxc1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZXhwb3J0cy5kZWNvZGUgPSBmdW5jdGlvbihxcyl7XG4gIHZhciBxcnkgPSB7fTtcbiAgdmFyIHBhaXJzID0gcXMuc3BsaXQoJyYnKTtcbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBwYWlycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICB2YXIgcGFpciA9IHBhaXJzW2ldLnNwbGl0KCc9Jyk7XG4gICAgcXJ5W2RlY29kZVVSSUNvbXBvbmVudChwYWlyWzBdKV0gPSBkZWNvZGVVUklDb21wb25lbnQocGFpclsxXSk7XG4gIH1cbiAgcmV0dXJuIHFyeTtcbn07XG4iLCIvKipcbiAqIFBhcnNlcyBhbiBVUklcbiAqXG4gKiBAYXV0aG9yIFN0ZXZlbiBMZXZpdGhhbiA8c3RldmVubGV2aXRoYW4uY29tPiAoTUlUIGxpY2Vuc2UpXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG52YXIgcmUgPSAvXig/Oig/IVteOkBdKzpbXjpAXFwvXSpAKShodHRwfGh0dHBzfHdzfHdzcyk6XFwvXFwvKT8oKD86KChbXjpAXSopKD86OihbXjpAXSopKT8pP0ApPygoPzpbYS1mMC05XXswLDR9Oil7Miw3fVthLWYwLTldezAsNH18W146XFwvPyNdKikoPzo6KFxcZCopKT8pKCgoXFwvKD86W14/I10oPyFbXj8jXFwvXSpcXC5bXj8jXFwvLl0rKD86Wz8jXXwkKSkpKlxcLz8pPyhbXj8jXFwvXSopKSg/OlxcPyhbXiNdKikpPyg/OiMoLiopKT8pLztcblxudmFyIHBhcnRzID0gW1xuICAgICdzb3VyY2UnLCAncHJvdG9jb2wnLCAnYXV0aG9yaXR5JywgJ3VzZXJJbmZvJywgJ3VzZXInLCAncGFzc3dvcmQnLCAnaG9zdCcsICdwb3J0JywgJ3JlbGF0aXZlJywgJ3BhdGgnLCAnZGlyZWN0b3J5JywgJ2ZpbGUnLCAncXVlcnknLCAnYW5jaG9yJ1xuXTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBwYXJzZXVyaShzdHIpIHtcbiAgICB2YXIgc3JjID0gc3RyLFxuICAgICAgICBiID0gc3RyLmluZGV4T2YoJ1snKSxcbiAgICAgICAgZSA9IHN0ci5pbmRleE9mKCddJyk7XG5cbiAgICBpZiAoYiAhPSAtMSAmJiBlICE9IC0xKSB7XG4gICAgICAgIHN0ciA9IHN0ci5zdWJzdHJpbmcoMCwgYikgKyBzdHIuc3Vic3RyaW5nKGIsIGUpLnJlcGxhY2UoLzovZywgJzsnKSArIHN0ci5zdWJzdHJpbmcoZSwgc3RyLmxlbmd0aCk7XG4gICAgfVxuXG4gICAgdmFyIG0gPSByZS5leGVjKHN0ciB8fCAnJyksXG4gICAgICAgIHVyaSA9IHt9LFxuICAgICAgICBpID0gMTQ7XG5cbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgIHVyaVtwYXJ0c1tpXV0gPSBtW2ldIHx8ICcnO1xuICAgIH1cblxuICAgIGlmIChiICE9IC0xICYmIGUgIT0gLTEpIHtcbiAgICAgICAgdXJpLnNvdXJjZSA9IHNyYztcbiAgICAgICAgdXJpLmhvc3QgPSB1cmkuaG9zdC5zdWJzdHJpbmcoMSwgdXJpLmhvc3QubGVuZ3RoIC0gMSkucmVwbGFjZSgvOy9nLCAnOicpO1xuICAgICAgICB1cmkuYXV0aG9yaXR5ID0gdXJpLmF1dGhvcml0eS5yZXBsYWNlKCdbJywgJycpLnJlcGxhY2UoJ10nLCAnJykucmVwbGFjZSgvOy9nLCAnOicpO1xuICAgICAgICB1cmkuaXB2NnVyaSA9IHRydWU7XG4gICAgfVxuXG4gICAgdXJpLnBhdGhOYW1lcyA9IHBhdGhOYW1lcyh1cmksIHVyaVsncGF0aCddKTtcbiAgICB1cmkucXVlcnlLZXkgPSBxdWVyeUtleSh1cmksIHVyaVsncXVlcnknXSk7XG5cbiAgICByZXR1cm4gdXJpO1xufTtcblxuZnVuY3Rpb24gcGF0aE5hbWVzKG9iaiwgcGF0aCkge1xuICAgIHZhciByZWd4ID0gL1xcL3syLDl9L2csXG4gICAgICAgIG5hbWVzID0gcGF0aC5yZXBsYWNlKHJlZ3gsIFwiL1wiKS5zcGxpdChcIi9cIik7XG5cbiAgICBpZiAocGF0aC5zdWJzdHIoMCwgMSkgPT0gJy8nIHx8IHBhdGgubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIG5hbWVzLnNwbGljZSgwLCAxKTtcbiAgICB9XG4gICAgaWYgKHBhdGguc3Vic3RyKHBhdGgubGVuZ3RoIC0gMSwgMSkgPT0gJy8nKSB7XG4gICAgICAgIG5hbWVzLnNwbGljZShuYW1lcy5sZW5ndGggLSAxLCAxKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmFtZXM7XG59XG5cbmZ1bmN0aW9uIHF1ZXJ5S2V5KHVyaSwgcXVlcnkpIHtcbiAgICB2YXIgZGF0YSA9IHt9O1xuXG4gICAgcXVlcnkucmVwbGFjZSgvKD86XnwmKShbXiY9XSopPT8oW14mXSopL2csIGZ1bmN0aW9uICgkMCwgJDEsICQyKSB7XG4gICAgICAgIGlmICgkMSkge1xuICAgICAgICAgICAgZGF0YVskMV0gPSAkMjtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGRhdGE7XG59XG4iLCJjb25zdCBBUkdfTEVOR1RIID0ge1xuICBhOiA3LFxuICBjOiA2LFxuICBoOiAxLFxuICBsOiAyLFxuICBtOiAyLFxuICBxOiA0LFxuICBzOiA0LFxuICB0OiAyLFxuICB2OiAxLFxuICB6OiAwLFxufTtcblxuY29uc3QgU0VHTUVOVF9QQVRURVJOID0gLyhbYXN0dnpxbWhsY10pKFteYXN0dnpxbWhsY10qKS9naTtcblxuY29uc3QgTlVNQkVSID0gLy0/WzAtOV0qXFwuP1swLTldKyg/OmVbLStdP1xcZCspPy9naTtcblxuZnVuY3Rpb24gcGFyc2VWYWx1ZXMoYXJncykge1xuICBjb25zdCBudW1iZXJzID0gYXJncy5tYXRjaChOVU1CRVIpO1xuICByZXR1cm4gbnVtYmVycyA/IG51bWJlcnMubWFwKE51bWJlcikgOiBbXTtcbn1cblxuLyoqXG4gKiBwYXJzZSBhbiBzdmcgcGF0aCBkYXRhIHN0cmluZy4gR2VuZXJhdGVzIGFuIEFycmF5XG4gKiBvZiBjb21tYW5kcyB3aGVyZSBlYWNoIGNvbW1hbmQgaXMgYW4gQXJyYXkgb2YgdGhlXG4gKiBmb3JtIGBbY29tbWFuZCwgYXJnMSwgYXJnMiwgLi4uXWBcbiAqXG4gKiBodHRwczovL3d3dy53My5vcmcvVFIvU1ZHL3BhdGhzLmh0bWwjUGF0aERhdGFHZW5lcmFsSW5mb3JtYXRpb25cbiAqIEBpZ25vcmVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aFxuICogQHJldHVybnMge2FycmF5fVxuICovXG5mdW5jdGlvbiBwYXJzZShwYXRoKSB7XG4gIGNvbnN0IGRhdGEgPSBbXTtcbiAgY29uc3QgcCA9IFN0cmluZyhwYXRoKS50cmltKCk7XG5cbiAgLy8gQSBwYXRoIGRhdGEgc2VnbWVudCAoaWYgdGhlcmUgaXMgb25lKSBtdXN0IGJlZ2luIHdpdGggYSBcIm1vdmV0b1wiIGNvbW1hbmRcbiAgaWYgKHBbMF0gIT09ICdNJyAmJiBwWzBdICE9PSAnbScpIHtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIHAucmVwbGFjZShTRUdNRU5UX1BBVFRFUk4sIChfLCBjb21tYW5kLCBhcmdzKSA9PiB7XG4gICAgbGV0IHR5cGUgPSBjb21tYW5kLnRvTG93ZXJDYXNlKCk7XG4gICAgbGV0IHRoZUFyZ3MgPSBwYXJzZVZhbHVlcyhhcmdzKTtcbiAgICBsZXQgdGhlQ29tbWFuZCA9IGNvbW1hbmQ7XG4gICAgLy8gb3ZlcmxvYWRlZCBtb3ZlVG9cbiAgICBpZiAodHlwZSA9PT0gJ20nICYmIHRoZUFyZ3MubGVuZ3RoID4gMikge1xuICAgICAgZGF0YS5wdXNoKFt0aGVDb21tYW5kXS5jb25jYXQodGhlQXJncy5zcGxpY2UoMCwgMikpKTtcbiAgICAgIHR5cGUgPSAnbCc7XG4gICAgICB0aGVDb21tYW5kID0gdGhlQ29tbWFuZCA9PT0gJ20nID8gJ2wnIDogJ0wnO1xuICAgIH1cblxuICAgIC8vIElnbm9yZSBpbnZhbGlkIGNvbW1hbmRzXG4gICAgaWYgKHRoZUFyZ3MubGVuZ3RoIDwgQVJHX0xFTkdUSFt0eXBlXSkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIGRhdGEucHVzaChbdGhlQ29tbWFuZF0uY29uY2F0KHRoZUFyZ3Muc3BsaWNlKDAsIEFSR19MRU5HVEhbdHlwZV0pKSk7XG5cbiAgICAvLyBUaGUgY29tbWFuZCBsZXR0ZXIgY2FuIGJlIGVsaW1pbmF0ZWQgb24gc3Vic2VxdWVudCBjb21tYW5kcyBpZiB0aGVcbiAgICAvLyBzYW1lIGNvbW1hbmQgaXMgdXNlZCBtdWx0aXBsZSB0aW1lcyBpbiBhIHJvdyAoZS5nLiwgeW91IGNhbiBkcm9wIHRoZVxuICAgIC8vIHNlY29uZCBcIkxcIiBpbiBcIk0gMTAwIDIwMCBMIDIwMCAxMDAgTCAtMTAwIC0yMDBcIiBhbmQgdXNlXG4gICAgLy8gXCJNIDEwMCAyMDAgTCAyMDAgMTAwIC0xMDAgLTIwMFwiIGluc3RlYWQpLlxuICAgIHdoaWxlIChcbiAgICAgIHRoZUFyZ3MubGVuZ3RoID49IEFSR19MRU5HVEhbdHlwZV0gJiZcbiAgICAgIHRoZUFyZ3MubGVuZ3RoICYmXG4gICAgICBBUkdfTEVOR1RIW3R5cGVdXG4gICAgKSB7XG4gICAgICBkYXRhLnB1c2goW3RoZUNvbW1hbmRdLmNvbmNhdCh0aGVBcmdzLnNwbGljZSgwLCBBUkdfTEVOR1RIW3R5cGVdKSkpO1xuICAgIH1cblxuICAgIHJldHVybiAnJztcbiAgfSk7XG4gIHJldHVybiBkYXRhO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHBhcnNlO1xuIiwiY29uc3QgcGFyc2VQYXRoID0gcmVxdWlyZSgnLi9wYXJzZS1wYXRoJyk7XG5cbi8qKlxuICogV29yayBhcm91bmQgZm9yIGh0dHBzOi8vZGV2ZWxvcGVyLm1pY3Jvc29mdC5jb20vZW4tdXMvbWljcm9zb2Z0LWVkZ2UvcGxhdGZvcm0vaXNzdWVzLzg0Mzg4ODQvXG4gKiBAaWdub3JlXG4gKi9cbmZ1bmN0aW9uIHN1cHBvcnRzU3ZnUGF0aEFyZ3VtZW50KHdpbmRvdykge1xuICBjb25zdCBjYW52YXMgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gIGNvbnN0IGcgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgY29uc3QgcCA9IG5ldyB3aW5kb3cuUGF0aDJEKCdNMCAwIEwxIDEnKTtcbiAgZy5zdHJva2VTdHlsZSA9ICdyZWQnO1xuICBnLmxpbmVXaWR0aCA9IDE7XG4gIGcuc3Ryb2tlKHApO1xuICBjb25zdCBpbWdEYXRhID0gZy5nZXRJbWFnZURhdGEoMCwgMCwgMSwgMSk7XG4gIHJldHVybiBpbWdEYXRhLmRhdGFbMF0gPT09IDI1NTsgLy8gQ2hlY2sgaWYgcGl4ZWwgaXMgcmVkXG59XG5cbmZ1bmN0aW9uIHJvdGF0ZVBvaW50KHBvaW50LCBhbmdsZSkge1xuICBjb25zdCBueCA9IHBvaW50LnggKiBNYXRoLmNvcyhhbmdsZSkgLSBwb2ludC55ICogTWF0aC5zaW4oYW5nbGUpO1xuICBjb25zdCBueSA9IHBvaW50LnkgKiBNYXRoLmNvcyhhbmdsZSkgKyBwb2ludC54ICogTWF0aC5zaW4oYW5nbGUpO1xuICBwb2ludC54ID0gbng7XG4gIHBvaW50LnkgPSBueTtcbn1cblxuZnVuY3Rpb24gdHJhbnNsYXRlUG9pbnQocG9pbnQsIGR4LCBkeSkge1xuICBwb2ludC54ICs9IGR4O1xuICBwb2ludC55ICs9IGR5O1xufVxuXG5mdW5jdGlvbiBzY2FsZVBvaW50KHBvaW50LCBzKSB7XG4gIHBvaW50LnggKj0gcztcbiAgcG9pbnQueSAqPSBzO1xufVxuXG5mdW5jdGlvbiBwb2x5RmlsbFBhdGgyRCh3aW5kb3cpIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8ICF3aW5kb3cuQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmICh3aW5kb3cuUGF0aDJEICYmIHN1cHBvcnRzU3ZnUGF0aEFyZ3VtZW50KHdpbmRvdykpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ3JhdGVzIGEgUGF0aDJEIHBvbHlmaWxsIG9iamVjdFxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQGlnbm9yZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gcGF0aFxuICAgKi9cbiAgY2xhc3MgUGF0aDJEIHtcbiAgICBjb25zdHJ1Y3RvcihwYXRoKSB7XG4gICAgICB0aGlzLnNlZ21lbnRzID0gW107XG4gICAgICBpZiAocGF0aCAmJiBwYXRoIGluc3RhbmNlb2YgUGF0aDJEKSB7XG4gICAgICAgIHRoaXMuc2VnbWVudHMucHVzaCguLi5wYXRoLnNlZ21lbnRzKTtcbiAgICAgIH0gZWxzZSBpZiAocGF0aCkge1xuICAgICAgICB0aGlzLnNlZ21lbnRzID0gcGFyc2VQYXRoKHBhdGgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGFkZFBhdGgocGF0aCkge1xuICAgICAgaWYgKHBhdGggJiYgcGF0aCBpbnN0YW5jZW9mIFBhdGgyRCkge1xuICAgICAgICB0aGlzLnNlZ21lbnRzLnB1c2goLi4ucGF0aC5zZWdtZW50cyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbW92ZVRvKHgsIHkpIHtcbiAgICAgIHRoaXMuc2VnbWVudHMucHVzaChbJ00nLCB4LCB5XSk7XG4gICAgfVxuXG4gICAgbGluZVRvKHgsIHkpIHtcbiAgICAgIHRoaXMuc2VnbWVudHMucHVzaChbJ0wnLCB4LCB5XSk7XG4gICAgfVxuXG4gICAgYXJjKHgsIHksIHIsIHN0YXJ0LCBlbmQsIGNjdykge1xuICAgICAgdGhpcy5zZWdtZW50cy5wdXNoKFsnQUMnLCB4LCB5LCByLCBzdGFydCwgZW5kLCAhIWNjd10pO1xuICAgIH1cblxuICAgIGFyY1RvKHgxLCB5MSwgeDIsIHkyLCByKSB7XG4gICAgICB0aGlzLnNlZ21lbnRzLnB1c2goWydBVCcsIHgxLCB5MSwgeDIsIHkyLCByXSk7XG4gICAgfVxuXG4gICAgZWxsaXBzZSh4LCB5LCByeCwgcnksIGFuZ2xlLCBzdGFydCwgZW5kLCBjY3cpIHtcbiAgICAgIHRoaXMuc2VnbWVudHMucHVzaChbJ0UnLCB4LCB5LCByeCwgcnksIGFuZ2xlLCBzdGFydCwgZW5kLCAhIWNjd10pO1xuICAgIH1cblxuICAgIGNsb3NlUGF0aCgpIHtcbiAgICAgIHRoaXMuc2VnbWVudHMucHVzaChbJ1onXSk7XG4gICAgfVxuXG4gICAgYmV6aWVyQ3VydmVUbyhjcDF4LCBjcDF5LCBjcDJ4LCBjcDJ5LCB4LCB5KSB7XG4gICAgICB0aGlzLnNlZ21lbnRzLnB1c2goWydDJywgY3AxeCwgY3AxeSwgY3AyeCwgY3AyeSwgeCwgeV0pO1xuICAgIH1cblxuICAgIHF1YWRyYXRpY0N1cnZlVG8oY3B4LCBjcHksIHgsIHkpIHtcbiAgICAgIHRoaXMuc2VnbWVudHMucHVzaChbJ1EnLCBjcHgsIGNweSwgeCwgeV0pO1xuICAgIH1cblxuICAgIHJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuICAgICAgdGhpcy5zZWdtZW50cy5wdXNoKFsnUicsIHgsIHksIHdpZHRoLCBoZWlnaHRdKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBidWlsZFBhdGgoY2FudmFzLCBzZWdtZW50cykge1xuICAgIGxldCBlbmRBbmdsZTtcbiAgICBsZXQgc3RhcnRBbmdsZTtcbiAgICBsZXQgbGFyZ2VBcmNGbGFnO1xuICAgIGxldCBzd2VlcEZsYWc7XG4gICAgbGV0IGVuZFBvaW50O1xuICAgIGxldCBtaWRQb2ludDtcbiAgICBsZXQgYW5nbGU7XG4gICAgbGV0IGxhbWJkYTtcbiAgICBsZXQgdDE7XG4gICAgbGV0IHQyO1xuICAgIGxldCB4O1xuICAgIGxldCB4MTtcbiAgICBsZXQgeTtcbiAgICBsZXQgeTE7XG4gICAgbGV0IHI7XG4gICAgbGV0IHJ4O1xuICAgIGxldCByeTtcbiAgICBsZXQgdztcbiAgICBsZXQgaDtcbiAgICBsZXQgcGF0aFR5cGU7XG4gICAgbGV0IGNlbnRlclBvaW50O1xuICAgIGxldCBjcHg7XG4gICAgbGV0IGNweTtcbiAgICBsZXQgcWNweDtcbiAgICBsZXQgcWNweTtcbiAgICBsZXQgY2N3O1xuICAgIGxldCBzdGFydFBvaW50ID0geyB4OiAwLCB5OiAwIH07XG4gICAgY29uc3QgY3VycmVudFBvaW50ID0geyB4OiAwLCB5OiAwIH07XG5cbiAgICBjYW52YXMuYmVnaW5QYXRoKCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWdtZW50cy5sZW5ndGg7ICsraSkge1xuICAgICAgY29uc3QgcyA9IHNlZ21lbnRzW2ldO1xuICAgICAgcGF0aFR5cGUgPSBzWzBdO1xuXG4gICAgICAvLyBSZXNldCBjb250cm9sIHBvaW50IGlmIGNvbW1hbmQgaXMgbm90IGN1YmljXG4gICAgICBpZiAoXG4gICAgICAgIHBhdGhUeXBlICE9PSAnUycgJiZcbiAgICAgICAgcGF0aFR5cGUgIT09ICdzJyAmJlxuICAgICAgICBwYXRoVHlwZSAhPT0gJ0MnICYmXG4gICAgICAgIHBhdGhUeXBlICE9PSAnYydcbiAgICAgICkge1xuICAgICAgICBjcHggPSBudWxsO1xuICAgICAgICBjcHkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgIHBhdGhUeXBlICE9PSAnVCcgJiZcbiAgICAgICAgcGF0aFR5cGUgIT09ICd0JyAmJlxuICAgICAgICBwYXRoVHlwZSAhPT0gJ1EnICYmXG4gICAgICAgIHBhdGhUeXBlICE9PSAncSdcbiAgICAgICkge1xuICAgICAgICBxY3B4ID0gbnVsbDtcbiAgICAgICAgcWNweSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHN3aXRjaCAocGF0aFR5cGUpIHtcbiAgICAgICAgY2FzZSAnbSc6XG4gICAgICAgIGNhc2UgJ00nOlxuICAgICAgICAgIGlmIChwYXRoVHlwZSA9PT0gJ20nKSB7XG4gICAgICAgICAgICB4ICs9IHNbMV07XG4gICAgICAgICAgICB5ICs9IHNbMl07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHggPSBzWzFdO1xuICAgICAgICAgICAgeSA9IHNbMl07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHBhdGhUeXBlID09PSAnTScgfHwgIXN0YXJ0UG9pbnQpIHtcbiAgICAgICAgICAgIHN0YXJ0UG9pbnQgPSB7IHgsIHkgfTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjYW52YXMubW92ZVRvKHgsIHkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdsJzpcbiAgICAgICAgICB4ICs9IHNbMV07XG4gICAgICAgICAgeSArPSBzWzJdO1xuICAgICAgICAgIGNhbnZhcy5saW5lVG8oeCwgeSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0wnOlxuICAgICAgICAgIHggPSBzWzFdO1xuICAgICAgICAgIHkgPSBzWzJdO1xuICAgICAgICAgIGNhbnZhcy5saW5lVG8oeCwgeSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0gnOlxuICAgICAgICAgIHggPSBzWzFdO1xuICAgICAgICAgIGNhbnZhcy5saW5lVG8oeCwgeSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2gnOlxuICAgICAgICAgIHggKz0gc1sxXTtcbiAgICAgICAgICBjYW52YXMubGluZVRvKHgsIHkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdWJzpcbiAgICAgICAgICB5ID0gc1sxXTtcbiAgICAgICAgICBjYW52YXMubGluZVRvKHgsIHkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICd2JzpcbiAgICAgICAgICB5ICs9IHNbMV07XG4gICAgICAgICAgY2FudmFzLmxpbmVUbyh4LCB5KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYSc6XG4gICAgICAgIGNhc2UgJ0EnOlxuICAgICAgICAgIGlmIChwYXRoVHlwZSA9PT0gJ2EnKSB7XG4gICAgICAgICAgICB4ICs9IHNbNl07XG4gICAgICAgICAgICB5ICs9IHNbN107XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHggPSBzWzZdO1xuICAgICAgICAgICAgeSA9IHNbN107XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcnggPSBzWzFdOyAvLyByeFxuICAgICAgICAgIHJ5ID0gc1syXTsgLy8gcnlcbiAgICAgICAgICBhbmdsZSA9IChzWzNdICogTWF0aC5QSSkgLyAxODA7XG4gICAgICAgICAgbGFyZ2VBcmNGbGFnID0gISFzWzRdO1xuICAgICAgICAgIHN3ZWVwRmxhZyA9ICEhc1s1XTtcbiAgICAgICAgICBlbmRQb2ludCA9IHsgeCwgeSB9O1xuXG4gICAgICAgICAgLy8gaHR0cHM6Ly93d3cudzMub3JnL1RSL1NWRy9pbXBsbm90ZS5odG1sI0FyY0ltcGxlbWVudGF0aW9uTm90ZXNcblxuICAgICAgICAgIG1pZFBvaW50ID0ge1xuICAgICAgICAgICAgeDogKGN1cnJlbnRQb2ludC54IC0gZW5kUG9pbnQueCkgLyAyLFxuICAgICAgICAgICAgeTogKGN1cnJlbnRQb2ludC55IC0gZW5kUG9pbnQueSkgLyAyLFxuICAgICAgICAgIH07XG4gICAgICAgICAgcm90YXRlUG9pbnQobWlkUG9pbnQsIC1hbmdsZSk7XG5cbiAgICAgICAgICAvLyByYWRpdXMgY29ycmVjdGlvblxuICAgICAgICAgIGxhbWJkYSA9XG4gICAgICAgICAgICAobWlkUG9pbnQueCAqIG1pZFBvaW50LngpIC8gKHJ4ICogcngpICtcbiAgICAgICAgICAgIChtaWRQb2ludC55ICogbWlkUG9pbnQueSkgLyAocnkgKiByeSk7XG4gICAgICAgICAgaWYgKGxhbWJkYSA+IDEpIHtcbiAgICAgICAgICAgIGxhbWJkYSA9IE1hdGguc3FydChsYW1iZGEpO1xuICAgICAgICAgICAgcnggKj0gbGFtYmRhO1xuICAgICAgICAgICAgcnkgKj0gbGFtYmRhO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNlbnRlclBvaW50ID0ge1xuICAgICAgICAgICAgeDogKHJ4ICogbWlkUG9pbnQueSkgLyByeSxcbiAgICAgICAgICAgIHk6IC0ocnkgKiBtaWRQb2ludC54KSAvIHJ4LFxuICAgICAgICAgIH07XG4gICAgICAgICAgdDEgPSByeCAqIHJ4ICogcnkgKiByeTtcbiAgICAgICAgICB0MiA9XG4gICAgICAgICAgICByeCAqIHJ4ICogbWlkUG9pbnQueSAqIG1pZFBvaW50LnkgK1xuICAgICAgICAgICAgcnkgKiByeSAqIG1pZFBvaW50LnggKiBtaWRQb2ludC54O1xuICAgICAgICAgIGlmIChzd2VlcEZsYWcgIT09IGxhcmdlQXJjRmxhZykge1xuICAgICAgICAgICAgc2NhbGVQb2ludChjZW50ZXJQb2ludCwgTWF0aC5zcXJ0KCh0MSAtIHQyKSAvIHQyKSB8fCAwKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2NhbGVQb2ludChjZW50ZXJQb2ludCwgLU1hdGguc3FydCgodDEgLSB0MikgLyB0MikgfHwgMCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc3RhcnRBbmdsZSA9IE1hdGguYXRhbjIoXG4gICAgICAgICAgICAobWlkUG9pbnQueSAtIGNlbnRlclBvaW50LnkpIC8gcnksXG4gICAgICAgICAgICAobWlkUG9pbnQueCAtIGNlbnRlclBvaW50LngpIC8gcnhcbiAgICAgICAgICApO1xuICAgICAgICAgIGVuZEFuZ2xlID0gTWF0aC5hdGFuMihcbiAgICAgICAgICAgIC0obWlkUG9pbnQueSArIGNlbnRlclBvaW50LnkpIC8gcnksXG4gICAgICAgICAgICAtKG1pZFBvaW50LnggKyBjZW50ZXJQb2ludC54KSAvIHJ4XG4gICAgICAgICAgKTtcblxuICAgICAgICAgIHJvdGF0ZVBvaW50KGNlbnRlclBvaW50LCBhbmdsZSk7XG4gICAgICAgICAgdHJhbnNsYXRlUG9pbnQoXG4gICAgICAgICAgICBjZW50ZXJQb2ludCxcbiAgICAgICAgICAgIChlbmRQb2ludC54ICsgY3VycmVudFBvaW50LngpIC8gMixcbiAgICAgICAgICAgIChlbmRQb2ludC55ICsgY3VycmVudFBvaW50LnkpIC8gMlxuICAgICAgICAgICk7XG5cbiAgICAgICAgICBjYW52YXMuc2F2ZSgpO1xuICAgICAgICAgIGNhbnZhcy50cmFuc2xhdGUoY2VudGVyUG9pbnQueCwgY2VudGVyUG9pbnQueSk7XG4gICAgICAgICAgY2FudmFzLnJvdGF0ZShhbmdsZSk7XG4gICAgICAgICAgY2FudmFzLnNjYWxlKHJ4LCByeSk7XG4gICAgICAgICAgY2FudmFzLmFyYygwLCAwLCAxLCBzdGFydEFuZ2xlLCBlbmRBbmdsZSwgIXN3ZWVwRmxhZyk7XG4gICAgICAgICAgY2FudmFzLnJlc3RvcmUoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnQyc6XG4gICAgICAgICAgY3B4ID0gc1szXTsgLy8gTGFzdCBjb250cm9sIHBvaW50XG4gICAgICAgICAgY3B5ID0gc1s0XTtcbiAgICAgICAgICB4ID0gc1s1XTtcbiAgICAgICAgICB5ID0gc1s2XTtcbiAgICAgICAgICBjYW52YXMuYmV6aWVyQ3VydmVUbyhzWzFdLCBzWzJdLCBjcHgsIGNweSwgeCwgeSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2MnOlxuICAgICAgICAgIGNhbnZhcy5iZXppZXJDdXJ2ZVRvKFxuICAgICAgICAgICAgc1sxXSArIHgsXG4gICAgICAgICAgICBzWzJdICsgeSxcbiAgICAgICAgICAgIHNbM10gKyB4LFxuICAgICAgICAgICAgc1s0XSArIHksXG4gICAgICAgICAgICBzWzVdICsgeCxcbiAgICAgICAgICAgIHNbNl0gKyB5XG4gICAgICAgICAgKTtcbiAgICAgICAgICBjcHggPSBzWzNdICsgeDsgLy8gTGFzdCBjb250cm9sIHBvaW50XG4gICAgICAgICAgY3B5ID0gc1s0XSArIHk7XG4gICAgICAgICAgeCArPSBzWzVdO1xuICAgICAgICAgIHkgKz0gc1s2XTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnUyc6XG4gICAgICAgICAgaWYgKGNweCA9PT0gbnVsbCB8fCBjcHggPT09IG51bGwpIHtcbiAgICAgICAgICAgIGNweCA9IHg7XG4gICAgICAgICAgICBjcHkgPSB5O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNhbnZhcy5iZXppZXJDdXJ2ZVRvKFxuICAgICAgICAgICAgMiAqIHggLSBjcHgsXG4gICAgICAgICAgICAyICogeSAtIGNweSxcbiAgICAgICAgICAgIHNbMV0sXG4gICAgICAgICAgICBzWzJdLFxuICAgICAgICAgICAgc1szXSxcbiAgICAgICAgICAgIHNbNF1cbiAgICAgICAgICApO1xuICAgICAgICAgIGNweCA9IHNbMV07IC8vIGxhc3QgY29udHJvbCBwb2ludFxuICAgICAgICAgIGNweSA9IHNbMl07XG4gICAgICAgICAgeCA9IHNbM107XG4gICAgICAgICAgeSA9IHNbNF07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3MnOlxuICAgICAgICAgIGlmIChjcHggPT09IG51bGwgfHwgY3B4ID09PSBudWxsKSB7XG4gICAgICAgICAgICBjcHggPSB4O1xuICAgICAgICAgICAgY3B5ID0geTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjYW52YXMuYmV6aWVyQ3VydmVUbyhcbiAgICAgICAgICAgIDIgKiB4IC0gY3B4LFxuICAgICAgICAgICAgMiAqIHkgLSBjcHksXG4gICAgICAgICAgICBzWzFdICsgeCxcbiAgICAgICAgICAgIHNbMl0gKyB5LFxuICAgICAgICAgICAgc1szXSArIHgsXG4gICAgICAgICAgICBzWzRdICsgeVxuICAgICAgICAgICk7XG4gICAgICAgICAgY3B4ID0gc1sxXSArIHg7IC8vIGxhc3QgY29udHJvbCBwb2ludFxuICAgICAgICAgIGNweSA9IHNbMl0gKyB5O1xuICAgICAgICAgIHggKz0gc1szXTtcbiAgICAgICAgICB5ICs9IHNbNF07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ1EnOlxuICAgICAgICAgIHFjcHggPSBzWzFdOyAvLyBsYXN0IGNvbnRyb2wgcG9pbnRcbiAgICAgICAgICBxY3B5ID0gc1syXTtcbiAgICAgICAgICB4ID0gc1szXTtcbiAgICAgICAgICB5ID0gc1s0XTtcbiAgICAgICAgICBjYW52YXMucXVhZHJhdGljQ3VydmVUbyhxY3B4LCBxY3B5LCB4LCB5KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncSc6XG4gICAgICAgICAgcWNweCA9IHNbMV0gKyB4OyAvLyBsYXN0IGNvbnRyb2wgcG9pbnRcbiAgICAgICAgICBxY3B5ID0gc1syXSArIHk7XG4gICAgICAgICAgeCArPSBzWzNdO1xuICAgICAgICAgIHkgKz0gc1s0XTtcbiAgICAgICAgICBjYW52YXMucXVhZHJhdGljQ3VydmVUbyhxY3B4LCBxY3B5LCB4LCB5KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnVCc6XG4gICAgICAgICAgaWYgKHFjcHggPT09IG51bGwgfHwgcWNweCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcWNweCA9IHg7XG4gICAgICAgICAgICBxY3B5ID0geTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcWNweCA9IDIgKiB4IC0gcWNweDsgLy8gbGFzdCBjb250cm9sIHBvaW50XG4gICAgICAgICAgcWNweSA9IDIgKiB5IC0gcWNweTtcbiAgICAgICAgICB4ID0gc1sxXTtcbiAgICAgICAgICB5ID0gc1syXTtcbiAgICAgICAgICBjYW52YXMucXVhZHJhdGljQ3VydmVUbyhxY3B4LCBxY3B5LCB4LCB5KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAndCc6XG4gICAgICAgICAgaWYgKHFjcHggPT09IG51bGwgfHwgcWNweCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcWNweCA9IHg7XG4gICAgICAgICAgICBxY3B5ID0geTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcWNweCA9IDIgKiB4IC0gcWNweDsgLy8gbGFzdCBjb250cm9sIHBvaW50XG4gICAgICAgICAgcWNweSA9IDIgKiB5IC0gcWNweTtcbiAgICAgICAgICB4ICs9IHNbMV07XG4gICAgICAgICAgeSArPSBzWzJdO1xuICAgICAgICAgIGNhbnZhcy5xdWFkcmF0aWNDdXJ2ZVRvKHFjcHgsIHFjcHksIHgsIHkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICd6JzpcbiAgICAgICAgY2FzZSAnWic6XG4gICAgICAgICAgeCA9IHN0YXJ0UG9pbnQueDtcbiAgICAgICAgICB5ID0gc3RhcnRQb2ludC55O1xuICAgICAgICAgIHN0YXJ0UG9pbnQgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgY2FudmFzLmNsb3NlUGF0aCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdBQyc6IC8vIGFyY1xuICAgICAgICAgIHggPSBzWzFdO1xuICAgICAgICAgIHkgPSBzWzJdO1xuICAgICAgICAgIHIgPSBzWzNdO1xuICAgICAgICAgIHN0YXJ0QW5nbGUgPSBzWzRdO1xuICAgICAgICAgIGVuZEFuZ2xlID0gc1s1XTtcbiAgICAgICAgICBjY3cgPSBzWzZdO1xuICAgICAgICAgIGNhbnZhcy5hcmMoeCwgeSwgciwgc3RhcnRBbmdsZSwgZW5kQW5nbGUsIGNjdyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0FUJzogLy8gYXJjVG9cbiAgICAgICAgICB4MSA9IHNbMV07XG4gICAgICAgICAgeTEgPSBzWzJdO1xuICAgICAgICAgIHggPSBzWzNdO1xuICAgICAgICAgIHkgPSBzWzRdO1xuICAgICAgICAgIHIgPSBzWzVdO1xuICAgICAgICAgIGNhbnZhcy5hcmNUbyh4MSwgeTEsIHgsIHksIHIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdFJzogLy8gZWxsaXBzZVxuICAgICAgICAgIHggPSBzWzFdO1xuICAgICAgICAgIHkgPSBzWzJdO1xuICAgICAgICAgIHJ4ID0gc1szXTtcbiAgICAgICAgICByeSA9IHNbNF07XG4gICAgICAgICAgYW5nbGUgPSBzWzVdO1xuICAgICAgICAgIHN0YXJ0QW5nbGUgPSBzWzZdO1xuICAgICAgICAgIGVuZEFuZ2xlID0gc1s3XTtcbiAgICAgICAgICBjY3cgPSBzWzhdO1xuICAgICAgICAgIGNhbnZhcy5zYXZlKCk7XG4gICAgICAgICAgY2FudmFzLnRyYW5zbGF0ZSh4LCB5KTtcbiAgICAgICAgICBjYW52YXMucm90YXRlKGFuZ2xlKTtcbiAgICAgICAgICBjYW52YXMuc2NhbGUocngsIHJ5KTtcbiAgICAgICAgICBjYW52YXMuYXJjKDAsIDAsIDEsIHN0YXJ0QW5nbGUsIGVuZEFuZ2xlLCBjY3cpO1xuICAgICAgICAgIGNhbnZhcy5yZXN0b3JlKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ1InOiAvLyByZWN0XG4gICAgICAgICAgeCA9IHNbMV07XG4gICAgICAgICAgeSA9IHNbMl07XG4gICAgICAgICAgdyA9IHNbM107XG4gICAgICAgICAgaCA9IHNbNF07XG4gICAgICAgICAgc3RhcnRQb2ludCA9IHsgeCwgeSB9O1xuICAgICAgICAgIGNhbnZhcy5yZWN0KHgsIHksIHcsIGgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAvLyB0aHJvdyBuZXcgRXJyb3IoYCR7cGF0aFR5cGV9IGlzIG5vdCBpbXBsZW1lbnRlZGApOyA/XG4gICAgICB9XG5cbiAgICAgIGN1cnJlbnRQb2ludC54ID0geDtcbiAgICAgIGN1cnJlbnRQb2ludC55ID0geTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBjRmlsbCA9IHdpbmRvdy5DYW52YXNSZW5kZXJpbmdDb250ZXh0MkQucHJvdG90eXBlLmZpbGw7XG4gIGNvbnN0IGNTdHJva2UgPSB3aW5kb3cuQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELnByb3RvdHlwZS5zdHJva2U7XG5cbiAgd2luZG93LkNhbnZhc1JlbmRlcmluZ0NvbnRleHQyRC5wcm90b3R5cGUuZmlsbCA9IGZ1bmN0aW9uIGZpbGwoLi4uYXJncykge1xuICAgIGxldCBmaWxsUnVsZSA9ICdub256ZXJvJztcbiAgICBpZiAoXG4gICAgICBhcmdzLmxlbmd0aCA9PT0gMCB8fFxuICAgICAgKGFyZ3MubGVuZ3RoID09PSAxICYmIHR5cGVvZiBhcmdzWzBdID09PSAnc3RyaW5nJylcbiAgICApIHtcbiAgICAgIGNGaWxsLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMikge1xuICAgICAgZmlsbFJ1bGUgPSBhcmdzWzFdO1xuICAgIH1cbiAgICBjb25zdCBwYXRoID0gYXJnc1swXTtcbiAgICBidWlsZFBhdGgodGhpcywgcGF0aC5zZWdtZW50cyk7XG4gICAgY0ZpbGwuY2FsbCh0aGlzLCBmaWxsUnVsZSk7XG4gIH07XG5cbiAgd2luZG93LkNhbnZhc1JlbmRlcmluZ0NvbnRleHQyRC5wcm90b3R5cGUuc3Ryb2tlID0gZnVuY3Rpb24gc3Ryb2tlKHBhdGgpIHtcbiAgICBpZiAoIXBhdGgpIHtcbiAgICAgIGNTdHJva2UuY2FsbCh0aGlzKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYnVpbGRQYXRoKHRoaXMsIHBhdGguc2VnbWVudHMpO1xuICAgIGNTdHJva2UuY2FsbCh0aGlzKTtcbiAgfTtcblxuICBjb25zdCBjSXNQb2ludEluUGF0aCA9XG4gICAgd2luZG93LkNhbnZhc1JlbmRlcmluZ0NvbnRleHQyRC5wcm90b3R5cGUuaXNQb2ludEluUGF0aDtcblxuICB3aW5kb3cuQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELnByb3RvdHlwZS5pc1BvaW50SW5QYXRoID0gZnVuY3Rpb24gaXNQb2ludEluUGF0aChcbiAgICAuLi5hcmdzXG4gICkge1xuICAgIC8vIGxldCBmaWxsUnVsZSA9ICdub256ZXJvJztcbiAgICBpZiAoYXJnc1swXS5jb25zdHJ1Y3Rvci5uYW1lID09PSAnUGF0aDJEJykge1xuICAgICAgLy8gZmlyc3QgYXJndW1lbnQgaXMgYSBQYXRoMkQgb2JqZWN0XG4gICAgICBjb25zdCB4ID0gYXJnc1sxXTtcbiAgICAgIGNvbnN0IHkgPSBhcmdzWzJdO1xuICAgICAgY29uc3QgZmlsbFJ1bGUgPSBhcmdzWzNdIHx8ICdub256ZXJvJztcbiAgICAgIGNvbnN0IHBhdGggPSBhcmdzWzBdO1xuICAgICAgYnVpbGRQYXRoKHRoaXMsIHBhdGguc2VnbWVudHMpO1xuICAgICAgcmV0dXJuIGNJc1BvaW50SW5QYXRoLmFwcGx5KHRoaXMsIFt4LCB5LCBmaWxsUnVsZV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gY0lzUG9pbnRJblBhdGguYXBwbHkodGhpcywgYXJncyk7XG4gICAgfVxuICB9O1xuXG4gIHdpbmRvdy5QYXRoMkQgPSBQYXRoMkQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcG9seUZpbGxQYXRoMkQ7XG4iLCJjb25zdCBwYXJzZVBhdGggPSByZXF1aXJlKCcuL3BhcnNlLXBhdGgnKTtcbmNvbnN0IHBhdGgyZFBvbHlmaWxsID0gcmVxdWlyZSgnLi9wYXRoMmQtcG9seWZpbGwnKTtcblxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gIHBhdGgyZFBvbHlmaWxsKHdpbmRvdyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBwYXRoMmRQb2x5ZmlsbCxcbiAgcGFyc2VQYXRoLFxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5pbyA9IGV4cG9ydHMuU29ja2V0ID0gZXhwb3J0cy5NYW5hZ2VyID0gZXhwb3J0cy5wcm90b2NvbCA9IHZvaWQgMDtcbmNvbnN0IHVybF8xID0gcmVxdWlyZShcIi4vdXJsXCIpO1xuY29uc3QgbWFuYWdlcl8xID0gcmVxdWlyZShcIi4vbWFuYWdlclwiKTtcbmNvbnN0IGRlYnVnID0gcmVxdWlyZShcImRlYnVnXCIpKFwic29ja2V0LmlvLWNsaWVudFwiKTtcbi8qKlxuICogTW9kdWxlIGV4cG9ydHMuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGxvb2t1cDtcbi8qKlxuICogTWFuYWdlcnMgY2FjaGUuXG4gKi9cbmNvbnN0IGNhY2hlID0gKGV4cG9ydHMubWFuYWdlcnMgPSB7fSk7XG5mdW5jdGlvbiBsb29rdXAodXJpLCBvcHRzKSB7XG4gICAgaWYgKHR5cGVvZiB1cmkgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgb3B0cyA9IHVyaTtcbiAgICAgICAgdXJpID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBvcHRzID0gb3B0cyB8fCB7fTtcbiAgICBjb25zdCBwYXJzZWQgPSB1cmxfMS51cmwodXJpLCBvcHRzLnBhdGggfHwgXCIvc29ja2V0LmlvXCIpO1xuICAgIGNvbnN0IHNvdXJjZSA9IHBhcnNlZC5zb3VyY2U7XG4gICAgY29uc3QgaWQgPSBwYXJzZWQuaWQ7XG4gICAgY29uc3QgcGF0aCA9IHBhcnNlZC5wYXRoO1xuICAgIGNvbnN0IHNhbWVOYW1lc3BhY2UgPSBjYWNoZVtpZF0gJiYgcGF0aCBpbiBjYWNoZVtpZF1bXCJuc3BzXCJdO1xuICAgIGNvbnN0IG5ld0Nvbm5lY3Rpb24gPSBvcHRzLmZvcmNlTmV3IHx8XG4gICAgICAgIG9wdHNbXCJmb3JjZSBuZXcgY29ubmVjdGlvblwiXSB8fFxuICAgICAgICBmYWxzZSA9PT0gb3B0cy5tdWx0aXBsZXggfHxcbiAgICAgICAgc2FtZU5hbWVzcGFjZTtcbiAgICBsZXQgaW87XG4gICAgaWYgKG5ld0Nvbm5lY3Rpb24pIHtcbiAgICAgICAgZGVidWcoXCJpZ25vcmluZyBzb2NrZXQgY2FjaGUgZm9yICVzXCIsIHNvdXJjZSk7XG4gICAgICAgIGlvID0gbmV3IG1hbmFnZXJfMS5NYW5hZ2VyKHNvdXJjZSwgb3B0cyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZiAoIWNhY2hlW2lkXSkge1xuICAgICAgICAgICAgZGVidWcoXCJuZXcgaW8gaW5zdGFuY2UgZm9yICVzXCIsIHNvdXJjZSk7XG4gICAgICAgICAgICBjYWNoZVtpZF0gPSBuZXcgbWFuYWdlcl8xLk1hbmFnZXIoc291cmNlLCBvcHRzKTtcbiAgICAgICAgfVxuICAgICAgICBpbyA9IGNhY2hlW2lkXTtcbiAgICB9XG4gICAgaWYgKHBhcnNlZC5xdWVyeSAmJiAhb3B0cy5xdWVyeSkge1xuICAgICAgICBvcHRzLnF1ZXJ5ID0gcGFyc2VkLnF1ZXJ5S2V5O1xuICAgIH1cbiAgICByZXR1cm4gaW8uc29ja2V0KHBhcnNlZC5wYXRoLCBvcHRzKTtcbn1cbmV4cG9ydHMuaW8gPSBsb29rdXA7XG4vKipcbiAqIFByb3RvY29sIHZlcnNpb24uXG4gKlxuICogQHB1YmxpY1xuICovXG52YXIgc29ja2V0X2lvX3BhcnNlcl8xID0gcmVxdWlyZShcInNvY2tldC5pby1wYXJzZXJcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJwcm90b2NvbFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc29ja2V0X2lvX3BhcnNlcl8xLnByb3RvY29sOyB9IH0pO1xuLyoqXG4gKiBgY29ubmVjdGAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHVyaVxuICogQHB1YmxpY1xuICovXG5leHBvcnRzLmNvbm5lY3QgPSBsb29rdXA7XG4vKipcbiAqIEV4cG9zZSBjb25zdHJ1Y3RvcnMgZm9yIHN0YW5kYWxvbmUgYnVpbGQuXG4gKlxuICogQHB1YmxpY1xuICovXG52YXIgbWFuYWdlcl8yID0gcmVxdWlyZShcIi4vbWFuYWdlclwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIk1hbmFnZXJcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG1hbmFnZXJfMi5NYW5hZ2VyOyB9IH0pO1xudmFyIHNvY2tldF8xID0gcmVxdWlyZShcIi4vc29ja2V0XCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiU29ja2V0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzb2NrZXRfMS5Tb2NrZXQ7IH0gfSk7XG5leHBvcnRzLmRlZmF1bHQgPSBsb29rdXA7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuTWFuYWdlciA9IHZvaWQgMDtcbmNvbnN0IGVpbyA9IHJlcXVpcmUoXCJlbmdpbmUuaW8tY2xpZW50XCIpO1xuY29uc3Qgc29ja2V0XzEgPSByZXF1aXJlKFwiLi9zb2NrZXRcIik7XG5jb25zdCBwYXJzZXIgPSByZXF1aXJlKFwic29ja2V0LmlvLXBhcnNlclwiKTtcbmNvbnN0IG9uXzEgPSByZXF1aXJlKFwiLi9vblwiKTtcbmNvbnN0IEJhY2tvZmYgPSByZXF1aXJlKFwiYmFja28yXCIpO1xuY29uc3QgdHlwZWRfZXZlbnRzXzEgPSByZXF1aXJlKFwiLi90eXBlZC1ldmVudHNcIik7XG5jb25zdCBkZWJ1ZyA9IHJlcXVpcmUoXCJkZWJ1Z1wiKShcInNvY2tldC5pby1jbGllbnQ6bWFuYWdlclwiKTtcbmNsYXNzIE1hbmFnZXIgZXh0ZW5kcyB0eXBlZF9ldmVudHNfMS5TdHJpY3RFdmVudEVtaXR0ZXIge1xuICAgIGNvbnN0cnVjdG9yKHVyaSwgb3B0cykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm5zcHMgPSB7fTtcbiAgICAgICAgdGhpcy5zdWJzID0gW107XG4gICAgICAgIGlmICh1cmkgJiYgXCJvYmplY3RcIiA9PT0gdHlwZW9mIHVyaSkge1xuICAgICAgICAgICAgb3B0cyA9IHVyaTtcbiAgICAgICAgICAgIHVyaSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBvcHRzID0gb3B0cyB8fCB7fTtcbiAgICAgICAgb3B0cy5wYXRoID0gb3B0cy5wYXRoIHx8IFwiL3NvY2tldC5pb1wiO1xuICAgICAgICB0aGlzLm9wdHMgPSBvcHRzO1xuICAgICAgICB0aGlzLnJlY29ubmVjdGlvbihvcHRzLnJlY29ubmVjdGlvbiAhPT0gZmFsc2UpO1xuICAgICAgICB0aGlzLnJlY29ubmVjdGlvbkF0dGVtcHRzKG9wdHMucmVjb25uZWN0aW9uQXR0ZW1wdHMgfHwgSW5maW5pdHkpO1xuICAgICAgICB0aGlzLnJlY29ubmVjdGlvbkRlbGF5KG9wdHMucmVjb25uZWN0aW9uRGVsYXkgfHwgMTAwMCk7XG4gICAgICAgIHRoaXMucmVjb25uZWN0aW9uRGVsYXlNYXgob3B0cy5yZWNvbm5lY3Rpb25EZWxheU1heCB8fCA1MDAwKTtcbiAgICAgICAgdGhpcy5yYW5kb21pemF0aW9uRmFjdG9yKG9wdHMucmFuZG9taXphdGlvbkZhY3RvciB8fCAwLjUpO1xuICAgICAgICB0aGlzLmJhY2tvZmYgPSBuZXcgQmFja29mZih7XG4gICAgICAgICAgICBtaW46IHRoaXMucmVjb25uZWN0aW9uRGVsYXkoKSxcbiAgICAgICAgICAgIG1heDogdGhpcy5yZWNvbm5lY3Rpb25EZWxheU1heCgpLFxuICAgICAgICAgICAgaml0dGVyOiB0aGlzLnJhbmRvbWl6YXRpb25GYWN0b3IoKSxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudGltZW91dChudWxsID09IG9wdHMudGltZW91dCA/IDIwMDAwIDogb3B0cy50aW1lb3V0KTtcbiAgICAgICAgdGhpcy5fcmVhZHlTdGF0ZSA9IFwiY2xvc2VkXCI7XG4gICAgICAgIHRoaXMudXJpID0gdXJpO1xuICAgICAgICBjb25zdCBfcGFyc2VyID0gb3B0cy5wYXJzZXIgfHwgcGFyc2VyO1xuICAgICAgICB0aGlzLmVuY29kZXIgPSBuZXcgX3BhcnNlci5FbmNvZGVyKCk7XG4gICAgICAgIHRoaXMuZGVjb2RlciA9IG5ldyBfcGFyc2VyLkRlY29kZXIoKTtcbiAgICAgICAgdGhpcy5fYXV0b0Nvbm5lY3QgPSBvcHRzLmF1dG9Db25uZWN0ICE9PSBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMuX2F1dG9Db25uZWN0KVxuICAgICAgICAgICAgdGhpcy5vcGVuKCk7XG4gICAgfVxuICAgIHJlY29ubmVjdGlvbih2KSB7XG4gICAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aClcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZWNvbm5lY3Rpb247XG4gICAgICAgIHRoaXMuX3JlY29ubmVjdGlvbiA9ICEhdjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHJlY29ubmVjdGlvbkF0dGVtcHRzKHYpIHtcbiAgICAgICAgaWYgKHYgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZWNvbm5lY3Rpb25BdHRlbXB0cztcbiAgICAgICAgdGhpcy5fcmVjb25uZWN0aW9uQXR0ZW1wdHMgPSB2O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgcmVjb25uZWN0aW9uRGVsYXkodikge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGlmICh2ID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVjb25uZWN0aW9uRGVsYXk7XG4gICAgICAgIHRoaXMuX3JlY29ubmVjdGlvbkRlbGF5ID0gdjtcbiAgICAgICAgKF9hID0gdGhpcy5iYWNrb2ZmKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc2V0TWluKHYpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgcmFuZG9taXphdGlvbkZhY3Rvcih2KSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgaWYgKHYgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yYW5kb21pemF0aW9uRmFjdG9yO1xuICAgICAgICB0aGlzLl9yYW5kb21pemF0aW9uRmFjdG9yID0gdjtcbiAgICAgICAgKF9hID0gdGhpcy5iYWNrb2ZmKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc2V0Sml0dGVyKHYpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgcmVjb25uZWN0aW9uRGVsYXlNYXgodikge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGlmICh2ID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVjb25uZWN0aW9uRGVsYXlNYXg7XG4gICAgICAgIHRoaXMuX3JlY29ubmVjdGlvbkRlbGF5TWF4ID0gdjtcbiAgICAgICAgKF9hID0gdGhpcy5iYWNrb2ZmKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc2V0TWF4KHYpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgdGltZW91dCh2KSB7XG4gICAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aClcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl90aW1lb3V0O1xuICAgICAgICB0aGlzLl90aW1lb3V0ID0gdjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFN0YXJ0cyB0cnlpbmcgdG8gcmVjb25uZWN0IGlmIHJlY29ubmVjdGlvbiBpcyBlbmFibGVkIGFuZCB3ZSBoYXZlIG5vdFxuICAgICAqIHN0YXJ0ZWQgcmVjb25uZWN0aW5nIHlldFxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBtYXliZVJlY29ubmVjdE9uT3BlbigpIHtcbiAgICAgICAgLy8gT25seSB0cnkgdG8gcmVjb25uZWN0IGlmIGl0J3MgdGhlIGZpcnN0IHRpbWUgd2UncmUgY29ubmVjdGluZ1xuICAgICAgICBpZiAoIXRoaXMuX3JlY29ubmVjdGluZyAmJlxuICAgICAgICAgICAgdGhpcy5fcmVjb25uZWN0aW9uICYmXG4gICAgICAgICAgICB0aGlzLmJhY2tvZmYuYXR0ZW1wdHMgPT09IDApIHtcbiAgICAgICAgICAgIC8vIGtlZXBzIHJlY29ubmVjdGlvbiBmcm9tIGZpcmluZyB0d2ljZSBmb3IgdGhlIHNhbWUgcmVjb25uZWN0aW9uIGxvb3BcbiAgICAgICAgICAgIHRoaXMucmVjb25uZWN0KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgY3VycmVudCB0cmFuc3BvcnQgYHNvY2tldGAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiAtIG9wdGlvbmFsLCBjYWxsYmFja1xuICAgICAqIEByZXR1cm4gc2VsZlxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBvcGVuKGZuKSB7XG4gICAgICAgIGRlYnVnKFwicmVhZHlTdGF0ZSAlc1wiLCB0aGlzLl9yZWFkeVN0YXRlKTtcbiAgICAgICAgaWYgKH50aGlzLl9yZWFkeVN0YXRlLmluZGV4T2YoXCJvcGVuXCIpKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIGRlYnVnKFwib3BlbmluZyAlc1wiLCB0aGlzLnVyaSk7XG4gICAgICAgIHRoaXMuZW5naW5lID0gZWlvKHRoaXMudXJpLCB0aGlzLm9wdHMpO1xuICAgICAgICBjb25zdCBzb2NrZXQgPSB0aGlzLmVuZ2luZTtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuX3JlYWR5U3RhdGUgPSBcIm9wZW5pbmdcIjtcbiAgICAgICAgdGhpcy5za2lwUmVjb25uZWN0ID0gZmFsc2U7XG4gICAgICAgIC8vIGVtaXQgYG9wZW5gXG4gICAgICAgIGNvbnN0IG9wZW5TdWJEZXN0cm95ID0gb25fMS5vbihzb2NrZXQsIFwib3BlblwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZWxmLm9ub3BlbigpO1xuICAgICAgICAgICAgZm4gJiYgZm4oKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIGVtaXQgYGVycm9yYFxuICAgICAgICBjb25zdCBlcnJvclN1YiA9IG9uXzEub24oc29ja2V0LCBcImVycm9yXCIsIChlcnIpID0+IHtcbiAgICAgICAgICAgIGRlYnVnKFwiZXJyb3JcIik7XG4gICAgICAgICAgICBzZWxmLmNsZWFudXAoKTtcbiAgICAgICAgICAgIHNlbGYuX3JlYWR5U3RhdGUgPSBcImNsb3NlZFwiO1xuICAgICAgICAgICAgdGhpcy5lbWl0UmVzZXJ2ZWQoXCJlcnJvclwiLCBlcnIpO1xuICAgICAgICAgICAgaWYgKGZuKSB7XG4gICAgICAgICAgICAgICAgZm4oZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIE9ubHkgZG8gdGhpcyBpZiB0aGVyZSBpcyBubyBmbiB0byBoYW5kbGUgdGhlIGVycm9yXG4gICAgICAgICAgICAgICAgc2VsZi5tYXliZVJlY29ubmVjdE9uT3BlbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGZhbHNlICE9PSB0aGlzLl90aW1lb3V0KSB7XG4gICAgICAgICAgICBjb25zdCB0aW1lb3V0ID0gdGhpcy5fdGltZW91dDtcbiAgICAgICAgICAgIGRlYnVnKFwiY29ubmVjdCBhdHRlbXB0IHdpbGwgdGltZW91dCBhZnRlciAlZFwiLCB0aW1lb3V0KTtcbiAgICAgICAgICAgIGlmICh0aW1lb3V0ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgb3BlblN1YkRlc3Ryb3koKTsgLy8gcHJldmVudHMgYSByYWNlIGNvbmRpdGlvbiB3aXRoIHRoZSAnb3BlbicgZXZlbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHNldCB0aW1lclxuICAgICAgICAgICAgY29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBkZWJ1ZyhcImNvbm5lY3QgYXR0ZW1wdCB0aW1lZCBvdXQgYWZ0ZXIgJWRcIiwgdGltZW91dCk7XG4gICAgICAgICAgICAgICAgb3BlblN1YkRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICBzb2NrZXQuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICBzb2NrZXQuZW1pdChcImVycm9yXCIsIG5ldyBFcnJvcihcInRpbWVvdXRcIikpO1xuICAgICAgICAgICAgfSwgdGltZW91dCk7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRzLmF1dG9VbnJlZikge1xuICAgICAgICAgICAgICAgIHRpbWVyLnVucmVmKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnN1YnMucHVzaChmdW5jdGlvbiBzdWJEZXN0cm95KCkge1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN1YnMucHVzaChvcGVuU3ViRGVzdHJveSk7XG4gICAgICAgIHRoaXMuc3Vicy5wdXNoKGVycm9yU3ViKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFsaWFzIGZvciBvcGVuKClcbiAgICAgKlxuICAgICAqIEByZXR1cm4gc2VsZlxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBjb25uZWN0KGZuKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wZW4oZm4pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgdXBvbiB0cmFuc3BvcnQgb3Blbi5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgb25vcGVuKCkge1xuICAgICAgICBkZWJ1ZyhcIm9wZW5cIik7XG4gICAgICAgIC8vIGNsZWFyIG9sZCBzdWJzXG4gICAgICAgIHRoaXMuY2xlYW51cCgpO1xuICAgICAgICAvLyBtYXJrIGFzIG9wZW5cbiAgICAgICAgdGhpcy5fcmVhZHlTdGF0ZSA9IFwib3BlblwiO1xuICAgICAgICB0aGlzLmVtaXRSZXNlcnZlZChcIm9wZW5cIik7XG4gICAgICAgIC8vIGFkZCBuZXcgc3Vic1xuICAgICAgICBjb25zdCBzb2NrZXQgPSB0aGlzLmVuZ2luZTtcbiAgICAgICAgdGhpcy5zdWJzLnB1c2gob25fMS5vbihzb2NrZXQsIFwicGluZ1wiLCB0aGlzLm9ucGluZy5iaW5kKHRoaXMpKSwgb25fMS5vbihzb2NrZXQsIFwiZGF0YVwiLCB0aGlzLm9uZGF0YS5iaW5kKHRoaXMpKSwgb25fMS5vbihzb2NrZXQsIFwiZXJyb3JcIiwgdGhpcy5vbmVycm9yLmJpbmQodGhpcykpLCBvbl8xLm9uKHNvY2tldCwgXCJjbG9zZVwiLCB0aGlzLm9uY2xvc2UuYmluZCh0aGlzKSksIG9uXzEub24odGhpcy5kZWNvZGVyLCBcImRlY29kZWRcIiwgdGhpcy5vbmRlY29kZWQuYmluZCh0aGlzKSkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgdXBvbiBhIHBpbmcuXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIG9ucGluZygpIHtcbiAgICAgICAgdGhpcy5lbWl0UmVzZXJ2ZWQoXCJwaW5nXCIpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgd2l0aCBkYXRhLlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBvbmRhdGEoZGF0YSkge1xuICAgICAgICB0aGlzLmRlY29kZXIuYWRkKGRhdGEpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgd2hlbiBwYXJzZXIgZnVsbHkgZGVjb2RlcyBhIHBhY2tldC5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgb25kZWNvZGVkKHBhY2tldCkge1xuICAgICAgICB0aGlzLmVtaXRSZXNlcnZlZChcInBhY2tldFwiLCBwYWNrZXQpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgdXBvbiBzb2NrZXQgZXJyb3IuXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIG9uZXJyb3IoZXJyKSB7XG4gICAgICAgIGRlYnVnKFwiZXJyb3JcIiwgZXJyKTtcbiAgICAgICAgdGhpcy5lbWl0UmVzZXJ2ZWQoXCJlcnJvclwiLCBlcnIpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IHNvY2tldCBmb3IgdGhlIGdpdmVuIGBuc3BgLlxuICAgICAqXG4gICAgICogQHJldHVybiB7U29ja2V0fVxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBzb2NrZXQobnNwLCBvcHRzKSB7XG4gICAgICAgIGxldCBzb2NrZXQgPSB0aGlzLm5zcHNbbnNwXTtcbiAgICAgICAgaWYgKCFzb2NrZXQpIHtcbiAgICAgICAgICAgIHNvY2tldCA9IG5ldyBzb2NrZXRfMS5Tb2NrZXQodGhpcywgbnNwLCBvcHRzKTtcbiAgICAgICAgICAgIHRoaXMubnNwc1tuc3BdID0gc29ja2V0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzb2NrZXQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxlZCB1cG9uIGEgc29ja2V0IGNsb3NlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHNvY2tldFxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX2Rlc3Ryb3koc29ja2V0KSB7XG4gICAgICAgIGNvbnN0IG5zcHMgPSBPYmplY3Qua2V5cyh0aGlzLm5zcHMpO1xuICAgICAgICBmb3IgKGNvbnN0IG5zcCBvZiBuc3BzKSB7XG4gICAgICAgICAgICBjb25zdCBzb2NrZXQgPSB0aGlzLm5zcHNbbnNwXTtcbiAgICAgICAgICAgIGlmIChzb2NrZXQuYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgZGVidWcoXCJzb2NrZXQgJXMgaXMgc3RpbGwgYWN0aXZlLCBza2lwcGluZyBjbG9zZVwiLCBuc3ApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9jbG9zZSgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBXcml0ZXMgYSBwYWNrZXQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcGFja2V0XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfcGFja2V0KHBhY2tldCkge1xuICAgICAgICBkZWJ1ZyhcIndyaXRpbmcgcGFja2V0ICVqXCIsIHBhY2tldCk7XG4gICAgICAgIGNvbnN0IGVuY29kZWRQYWNrZXRzID0gdGhpcy5lbmNvZGVyLmVuY29kZShwYWNrZXQpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVuY29kZWRQYWNrZXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmVuZ2luZS53cml0ZShlbmNvZGVkUGFja2V0c1tpXSwgcGFja2V0Lm9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENsZWFuIHVwIHRyYW5zcG9ydCBzdWJzY3JpcHRpb25zIGFuZCBwYWNrZXQgYnVmZmVyLlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBjbGVhbnVwKCkge1xuICAgICAgICBkZWJ1ZyhcImNsZWFudXBcIik7XG4gICAgICAgIHRoaXMuc3Vicy5mb3JFYWNoKChzdWJEZXN0cm95KSA9PiBzdWJEZXN0cm95KCkpO1xuICAgICAgICB0aGlzLnN1YnMubGVuZ3RoID0gMDtcbiAgICAgICAgdGhpcy5kZWNvZGVyLmRlc3Ryb3koKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2xvc2UgdGhlIGN1cnJlbnQgc29ja2V0LlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfY2xvc2UoKSB7XG4gICAgICAgIGRlYnVnKFwiZGlzY29ubmVjdFwiKTtcbiAgICAgICAgdGhpcy5za2lwUmVjb25uZWN0ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fcmVjb25uZWN0aW5nID0gZmFsc2U7XG4gICAgICAgIGlmIChcIm9wZW5pbmdcIiA9PT0gdGhpcy5fcmVhZHlTdGF0ZSkge1xuICAgICAgICAgICAgLy8gYG9uY2xvc2VgIHdpbGwgbm90IGZpcmUgYmVjYXVzZVxuICAgICAgICAgICAgLy8gYW4gb3BlbiBldmVudCBuZXZlciBoYXBwZW5lZFxuICAgICAgICAgICAgdGhpcy5jbGVhbnVwKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5iYWNrb2ZmLnJlc2V0KCk7XG4gICAgICAgIHRoaXMuX3JlYWR5U3RhdGUgPSBcImNsb3NlZFwiO1xuICAgICAgICBpZiAodGhpcy5lbmdpbmUpXG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5jbG9zZSgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBbGlhcyBmb3IgY2xvc2UoKVxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBkaXNjb25uZWN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2xvc2UoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHVwb24gZW5naW5lIGNsb3NlLlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBvbmNsb3NlKHJlYXNvbikge1xuICAgICAgICBkZWJ1ZyhcIm9uY2xvc2VcIik7XG4gICAgICAgIHRoaXMuY2xlYW51cCgpO1xuICAgICAgICB0aGlzLmJhY2tvZmYucmVzZXQoKTtcbiAgICAgICAgdGhpcy5fcmVhZHlTdGF0ZSA9IFwiY2xvc2VkXCI7XG4gICAgICAgIHRoaXMuZW1pdFJlc2VydmVkKFwiY2xvc2VcIiwgcmVhc29uKTtcbiAgICAgICAgaWYgKHRoaXMuX3JlY29ubmVjdGlvbiAmJiAhdGhpcy5za2lwUmVjb25uZWN0KSB7XG4gICAgICAgICAgICB0aGlzLnJlY29ubmVjdCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEF0dGVtcHQgYSByZWNvbm5lY3Rpb24uXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHJlY29ubmVjdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuX3JlY29ubmVjdGluZyB8fCB0aGlzLnNraXBSZWNvbm5lY3QpXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLmJhY2tvZmYuYXR0ZW1wdHMgPj0gdGhpcy5fcmVjb25uZWN0aW9uQXR0ZW1wdHMpIHtcbiAgICAgICAgICAgIGRlYnVnKFwicmVjb25uZWN0IGZhaWxlZFwiKTtcbiAgICAgICAgICAgIHRoaXMuYmFja29mZi5yZXNldCgpO1xuICAgICAgICAgICAgdGhpcy5lbWl0UmVzZXJ2ZWQoXCJyZWNvbm5lY3RfZmFpbGVkXCIpO1xuICAgICAgICAgICAgdGhpcy5fcmVjb25uZWN0aW5nID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBkZWxheSA9IHRoaXMuYmFja29mZi5kdXJhdGlvbigpO1xuICAgICAgICAgICAgZGVidWcoXCJ3aWxsIHdhaXQgJWRtcyBiZWZvcmUgcmVjb25uZWN0IGF0dGVtcHRcIiwgZGVsYXkpO1xuICAgICAgICAgICAgdGhpcy5fcmVjb25uZWN0aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGYuc2tpcFJlY29ubmVjdClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGRlYnVnKFwiYXR0ZW1wdGluZyByZWNvbm5lY3RcIik7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0UmVzZXJ2ZWQoXCJyZWNvbm5lY3RfYXR0ZW1wdFwiLCBzZWxmLmJhY2tvZmYuYXR0ZW1wdHMpO1xuICAgICAgICAgICAgICAgIC8vIGNoZWNrIGFnYWluIGZvciB0aGUgY2FzZSBzb2NrZXQgY2xvc2VkIGluIGFib3ZlIGV2ZW50c1xuICAgICAgICAgICAgICAgIGlmIChzZWxmLnNraXBSZWNvbm5lY3QpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICBzZWxmLm9wZW4oKGVycikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWJ1ZyhcInJlY29ubmVjdCBhdHRlbXB0IGVycm9yXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5fcmVjb25uZWN0aW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnJlY29ubmVjdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0UmVzZXJ2ZWQoXCJyZWNvbm5lY3RfZXJyb3JcIiwgZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlYnVnKFwicmVjb25uZWN0IHN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLm9ucmVjb25uZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sIGRlbGF5KTtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdHMuYXV0b1VucmVmKSB7XG4gICAgICAgICAgICAgICAgdGltZXIudW5yZWYoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc3Vicy5wdXNoKGZ1bmN0aW9uIHN1YkRlc3Ryb3koKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxlZCB1cG9uIHN1Y2Nlc3NmdWwgcmVjb25uZWN0LlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBvbnJlY29ubmVjdCgpIHtcbiAgICAgICAgY29uc3QgYXR0ZW1wdCA9IHRoaXMuYmFja29mZi5hdHRlbXB0cztcbiAgICAgICAgdGhpcy5fcmVjb25uZWN0aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYmFja29mZi5yZXNldCgpO1xuICAgICAgICB0aGlzLmVtaXRSZXNlcnZlZChcInJlY29ubmVjdFwiLCBhdHRlbXB0KTtcbiAgICB9XG59XG5leHBvcnRzLk1hbmFnZXIgPSBNYW5hZ2VyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLm9uID0gdm9pZCAwO1xuZnVuY3Rpb24gb24ob2JqLCBldiwgZm4pIHtcbiAgICBvYmoub24oZXYsIGZuKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gc3ViRGVzdHJveSgpIHtcbiAgICAgICAgb2JqLm9mZihldiwgZm4pO1xuICAgIH07XG59XG5leHBvcnRzLm9uID0gb247XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuU29ja2V0ID0gdm9pZCAwO1xuY29uc3Qgc29ja2V0X2lvX3BhcnNlcl8xID0gcmVxdWlyZShcInNvY2tldC5pby1wYXJzZXJcIik7XG5jb25zdCBvbl8xID0gcmVxdWlyZShcIi4vb25cIik7XG5jb25zdCB0eXBlZF9ldmVudHNfMSA9IHJlcXVpcmUoXCIuL3R5cGVkLWV2ZW50c1wiKTtcbmNvbnN0IGRlYnVnID0gcmVxdWlyZShcImRlYnVnXCIpKFwic29ja2V0LmlvLWNsaWVudDpzb2NrZXRcIik7XG4vKipcbiAqIEludGVybmFsIGV2ZW50cy5cbiAqIFRoZXNlIGV2ZW50cyBjYW4ndCBiZSBlbWl0dGVkIGJ5IHRoZSB1c2VyLlxuICovXG5jb25zdCBSRVNFUlZFRF9FVkVOVFMgPSBPYmplY3QuZnJlZXplKHtcbiAgICBjb25uZWN0OiAxLFxuICAgIGNvbm5lY3RfZXJyb3I6IDEsXG4gICAgZGlzY29ubmVjdDogMSxcbiAgICBkaXNjb25uZWN0aW5nOiAxLFxuICAgIC8vIEV2ZW50RW1pdHRlciByZXNlcnZlZCBldmVudHM6IGh0dHBzOi8vbm9kZWpzLm9yZy9hcGkvZXZlbnRzLmh0bWwjZXZlbnRzX2V2ZW50X25ld2xpc3RlbmVyXG4gICAgbmV3TGlzdGVuZXI6IDEsXG4gICAgcmVtb3ZlTGlzdGVuZXI6IDEsXG59KTtcbmNsYXNzIFNvY2tldCBleHRlbmRzIHR5cGVkX2V2ZW50c18xLlN0cmljdEV2ZW50RW1pdHRlciB7XG4gICAgLyoqXG4gICAgICogYFNvY2tldGAgY29uc3RydWN0b3IuXG4gICAgICpcbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoaW8sIG5zcCwgb3B0cykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnJlY2VpdmVCdWZmZXIgPSBbXTtcbiAgICAgICAgdGhpcy5zZW5kQnVmZmVyID0gW107XG4gICAgICAgIHRoaXMuaWRzID0gMDtcbiAgICAgICAgdGhpcy5hY2tzID0ge307XG4gICAgICAgIHRoaXMuZmxhZ3MgPSB7fTtcbiAgICAgICAgdGhpcy5pbyA9IGlvO1xuICAgICAgICB0aGlzLm5zcCA9IG5zcDtcbiAgICAgICAgdGhpcy5pZHMgPSAwO1xuICAgICAgICB0aGlzLmFja3MgPSB7fTtcbiAgICAgICAgdGhpcy5yZWNlaXZlQnVmZmVyID0gW107XG4gICAgICAgIHRoaXMuc2VuZEJ1ZmZlciA9IFtdO1xuICAgICAgICB0aGlzLmNvbm5lY3RlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmRpc2Nvbm5lY3RlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuZmxhZ3MgPSB7fTtcbiAgICAgICAgaWYgKG9wdHMgJiYgb3B0cy5hdXRoKSB7XG4gICAgICAgICAgICB0aGlzLmF1dGggPSBvcHRzLmF1dGg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaW8uX2F1dG9Db25uZWN0KVxuICAgICAgICAgICAgdGhpcy5vcGVuKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFN1YnNjcmliZSB0byBvcGVuLCBjbG9zZSBhbmQgcGFja2V0IGV2ZW50c1xuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBzdWJFdmVudHMoKSB7XG4gICAgICAgIGlmICh0aGlzLnN1YnMpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGNvbnN0IGlvID0gdGhpcy5pbztcbiAgICAgICAgdGhpcy5zdWJzID0gW1xuICAgICAgICAgICAgb25fMS5vbihpbywgXCJvcGVuXCIsIHRoaXMub25vcGVuLmJpbmQodGhpcykpLFxuICAgICAgICAgICAgb25fMS5vbihpbywgXCJwYWNrZXRcIiwgdGhpcy5vbnBhY2tldC5iaW5kKHRoaXMpKSxcbiAgICAgICAgICAgIG9uXzEub24oaW8sIFwiZXJyb3JcIiwgdGhpcy5vbmVycm9yLmJpbmQodGhpcykpLFxuICAgICAgICAgICAgb25fMS5vbihpbywgXCJjbG9zZVwiLCB0aGlzLm9uY2xvc2UuYmluZCh0aGlzKSksXG4gICAgICAgIF07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdGhlIFNvY2tldCB3aWxsIHRyeSB0byByZWNvbm5lY3Qgd2hlbiBpdHMgTWFuYWdlciBjb25uZWN0cyBvciByZWNvbm5lY3RzXG4gICAgICovXG4gICAgZ2V0IGFjdGl2ZSgpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5zdWJzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBcIk9wZW5zXCIgdGhlIHNvY2tldC5cbiAgICAgKlxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBjb25uZWN0KCkge1xuICAgICAgICBpZiAodGhpcy5jb25uZWN0ZWQpXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgdGhpcy5zdWJFdmVudHMoKTtcbiAgICAgICAgaWYgKCF0aGlzLmlvW1wiX3JlY29ubmVjdGluZ1wiXSlcbiAgICAgICAgICAgIHRoaXMuaW8ub3BlbigpOyAvLyBlbnN1cmUgb3BlblxuICAgICAgICBpZiAoXCJvcGVuXCIgPT09IHRoaXMuaW8uX3JlYWR5U3RhdGUpXG4gICAgICAgICAgICB0aGlzLm9ub3BlbigpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWxpYXMgZm9yIGNvbm5lY3QoKVxuICAgICAqL1xuICAgIG9wZW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbm5lY3QoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2VuZHMgYSBgbWVzc2FnZWAgZXZlbnQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHNlbGZcbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgc2VuZCguLi5hcmdzKSB7XG4gICAgICAgIGFyZ3MudW5zaGlmdChcIm1lc3NhZ2VcIik7XG4gICAgICAgIHRoaXMuZW1pdC5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRlIGBlbWl0YC5cbiAgICAgKiBJZiB0aGUgZXZlbnQgaXMgaW4gYGV2ZW50c2AsIGl0J3MgZW1pdHRlZCBub3JtYWxseS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4gc2VsZlxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBlbWl0KGV2LCAuLi5hcmdzKSB7XG4gICAgICAgIGlmIChSRVNFUlZFRF9FVkVOVFMuaGFzT3duUHJvcGVydHkoZXYpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1wiJyArIGV2ICsgJ1wiIGlzIGEgcmVzZXJ2ZWQgZXZlbnQgbmFtZScpO1xuICAgICAgICB9XG4gICAgICAgIGFyZ3MudW5zaGlmdChldik7XG4gICAgICAgIGNvbnN0IHBhY2tldCA9IHtcbiAgICAgICAgICAgIHR5cGU6IHNvY2tldF9pb19wYXJzZXJfMS5QYWNrZXRUeXBlLkVWRU5ULFxuICAgICAgICAgICAgZGF0YTogYXJncyxcbiAgICAgICAgfTtcbiAgICAgICAgcGFja2V0Lm9wdGlvbnMgPSB7fTtcbiAgICAgICAgcGFja2V0Lm9wdGlvbnMuY29tcHJlc3MgPSB0aGlzLmZsYWdzLmNvbXByZXNzICE9PSBmYWxzZTtcbiAgICAgICAgLy8gZXZlbnQgYWNrIGNhbGxiYWNrXG4gICAgICAgIGlmIChcImZ1bmN0aW9uXCIgPT09IHR5cGVvZiBhcmdzW2FyZ3MubGVuZ3RoIC0gMV0pIHtcbiAgICAgICAgICAgIGRlYnVnKFwiZW1pdHRpbmcgcGFja2V0IHdpdGggYWNrIGlkICVkXCIsIHRoaXMuaWRzKTtcbiAgICAgICAgICAgIHRoaXMuYWNrc1t0aGlzLmlkc10gPSBhcmdzLnBvcCgpO1xuICAgICAgICAgICAgcGFja2V0LmlkID0gdGhpcy5pZHMrKztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpc1RyYW5zcG9ydFdyaXRhYmxlID0gdGhpcy5pby5lbmdpbmUgJiZcbiAgICAgICAgICAgIHRoaXMuaW8uZW5naW5lLnRyYW5zcG9ydCAmJlxuICAgICAgICAgICAgdGhpcy5pby5lbmdpbmUudHJhbnNwb3J0LndyaXRhYmxlO1xuICAgICAgICBjb25zdCBkaXNjYXJkUGFja2V0ID0gdGhpcy5mbGFncy52b2xhdGlsZSAmJiAoIWlzVHJhbnNwb3J0V3JpdGFibGUgfHwgIXRoaXMuY29ubmVjdGVkKTtcbiAgICAgICAgaWYgKGRpc2NhcmRQYWNrZXQpIHtcbiAgICAgICAgICAgIGRlYnVnKFwiZGlzY2FyZCBwYWNrZXQgYXMgdGhlIHRyYW5zcG9ydCBpcyBub3QgY3VycmVudGx5IHdyaXRhYmxlXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuY29ubmVjdGVkKSB7XG4gICAgICAgICAgICB0aGlzLnBhY2tldChwYWNrZXQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZW5kQnVmZmVyLnB1c2gocGFja2V0KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZsYWdzID0ge307XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZW5kcyBhIHBhY2tldC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBwYWNrZXRcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHBhY2tldChwYWNrZXQpIHtcbiAgICAgICAgcGFja2V0Lm5zcCA9IHRoaXMubnNwO1xuICAgICAgICB0aGlzLmlvLl9wYWNrZXQocGFja2V0KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHVwb24gZW5naW5lIGBvcGVuYC5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgb25vcGVuKCkge1xuICAgICAgICBkZWJ1ZyhcInRyYW5zcG9ydCBpcyBvcGVuIC0gY29ubmVjdGluZ1wiKTtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmF1dGggPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICB0aGlzLmF1dGgoKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhY2tldCh7IHR5cGU6IHNvY2tldF9pb19wYXJzZXJfMS5QYWNrZXRUeXBlLkNPTk5FQ1QsIGRhdGEgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucGFja2V0KHsgdHlwZTogc29ja2V0X2lvX3BhcnNlcl8xLlBhY2tldFR5cGUuQ09OTkVDVCwgZGF0YTogdGhpcy5hdXRoIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxlZCB1cG9uIGVuZ2luZSBvciBtYW5hZ2VyIGBlcnJvcmAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZXJyXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBvbmVycm9yKGVycikge1xuICAgICAgICBpZiAoIXRoaXMuY29ubmVjdGVkKSB7XG4gICAgICAgICAgICB0aGlzLmVtaXRSZXNlcnZlZChcImNvbm5lY3RfZXJyb3JcIiwgZXJyKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgdXBvbiBlbmdpbmUgYGNsb3NlYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSByZWFzb25cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIG9uY2xvc2UocmVhc29uKSB7XG4gICAgICAgIGRlYnVnKFwiY2xvc2UgKCVzKVwiLCByZWFzb24pO1xuICAgICAgICB0aGlzLmNvbm5lY3RlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmRpc2Nvbm5lY3RlZCA9IHRydWU7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmlkO1xuICAgICAgICB0aGlzLmVtaXRSZXNlcnZlZChcImRpc2Nvbm5lY3RcIiwgcmVhc29uKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHdpdGggc29ja2V0IHBhY2tldC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBwYWNrZXRcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIG9ucGFja2V0KHBhY2tldCkge1xuICAgICAgICBjb25zdCBzYW1lTmFtZXNwYWNlID0gcGFja2V0Lm5zcCA9PT0gdGhpcy5uc3A7XG4gICAgICAgIGlmICghc2FtZU5hbWVzcGFjZSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgc3dpdGNoIChwYWNrZXQudHlwZSkge1xuICAgICAgICAgICAgY2FzZSBzb2NrZXRfaW9fcGFyc2VyXzEuUGFja2V0VHlwZS5DT05ORUNUOlxuICAgICAgICAgICAgICAgIGlmIChwYWNrZXQuZGF0YSAmJiBwYWNrZXQuZGF0YS5zaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaWQgPSBwYWNrZXQuZGF0YS5zaWQ7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25jb25uZWN0KGlkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdFJlc2VydmVkKFwiY29ubmVjdF9lcnJvclwiLCBuZXcgRXJyb3IoXCJJdCBzZWVtcyB5b3UgYXJlIHRyeWluZyB0byByZWFjaCBhIFNvY2tldC5JTyBzZXJ2ZXIgaW4gdjIueCB3aXRoIGEgdjMueCBjbGllbnQsIGJ1dCB0aGV5IGFyZSBub3QgY29tcGF0aWJsZSAobW9yZSBpbmZvcm1hdGlvbiBoZXJlOiBodHRwczovL3NvY2tldC5pby9kb2NzL3YzL21pZ3JhdGluZy1mcm9tLTIteC10by0zLTAvKVwiKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBzb2NrZXRfaW9fcGFyc2VyXzEuUGFja2V0VHlwZS5FVkVOVDpcbiAgICAgICAgICAgICAgICB0aGlzLm9uZXZlbnQocGFja2V0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2Ugc29ja2V0X2lvX3BhcnNlcl8xLlBhY2tldFR5cGUuQklOQVJZX0VWRU5UOlxuICAgICAgICAgICAgICAgIHRoaXMub25ldmVudChwYWNrZXQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBzb2NrZXRfaW9fcGFyc2VyXzEuUGFja2V0VHlwZS5BQ0s6XG4gICAgICAgICAgICAgICAgdGhpcy5vbmFjayhwYWNrZXQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBzb2NrZXRfaW9fcGFyc2VyXzEuUGFja2V0VHlwZS5CSU5BUllfQUNLOlxuICAgICAgICAgICAgICAgIHRoaXMub25hY2socGFja2V0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2Ugc29ja2V0X2lvX3BhcnNlcl8xLlBhY2tldFR5cGUuRElTQ09OTkVDVDpcbiAgICAgICAgICAgICAgICB0aGlzLm9uZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBzb2NrZXRfaW9fcGFyc2VyXzEuUGFja2V0VHlwZS5DT05ORUNUX0VSUk9SOlxuICAgICAgICAgICAgICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcihwYWNrZXQuZGF0YS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgZXJyLmRhdGEgPSBwYWNrZXQuZGF0YS5kYXRhO1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdFJlc2VydmVkKFwiY29ubmVjdF9lcnJvclwiLCBlcnIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxlZCB1cG9uIGEgc2VydmVyIGV2ZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIHBhY2tldFxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgb25ldmVudChwYWNrZXQpIHtcbiAgICAgICAgY29uc3QgYXJncyA9IHBhY2tldC5kYXRhIHx8IFtdO1xuICAgICAgICBkZWJ1ZyhcImVtaXR0aW5nIGV2ZW50ICVqXCIsIGFyZ3MpO1xuICAgICAgICBpZiAobnVsbCAhPSBwYWNrZXQuaWQpIHtcbiAgICAgICAgICAgIGRlYnVnKFwiYXR0YWNoaW5nIGFjayBjYWxsYmFjayB0byBldmVudFwiKTtcbiAgICAgICAgICAgIGFyZ3MucHVzaCh0aGlzLmFjayhwYWNrZXQuaWQpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jb25uZWN0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZW1pdEV2ZW50KGFyZ3MpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yZWNlaXZlQnVmZmVyLnB1c2goT2JqZWN0LmZyZWV6ZShhcmdzKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZW1pdEV2ZW50KGFyZ3MpIHtcbiAgICAgICAgaWYgKHRoaXMuX2FueUxpc3RlbmVycyAmJiB0aGlzLl9hbnlMaXN0ZW5lcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBsaXN0ZW5lcnMgPSB0aGlzLl9hbnlMaXN0ZW5lcnMuc2xpY2UoKTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgbGlzdGVuZXIgb2YgbGlzdGVuZXJzKSB7XG4gICAgICAgICAgICAgICAgbGlzdGVuZXIuYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc3VwZXIuZW1pdC5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUHJvZHVjZXMgYW4gYWNrIGNhbGxiYWNrIHRvIGVtaXQgd2l0aCBhbiBldmVudC5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgYWNrKGlkKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBsZXQgc2VudCA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICAgICAgICAgIC8vIHByZXZlbnQgZG91YmxlIGNhbGxiYWNrc1xuICAgICAgICAgICAgaWYgKHNlbnQpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgc2VudCA9IHRydWU7XG4gICAgICAgICAgICBkZWJ1ZyhcInNlbmRpbmcgYWNrICVqXCIsIGFyZ3MpO1xuICAgICAgICAgICAgc2VsZi5wYWNrZXQoe1xuICAgICAgICAgICAgICAgIHR5cGU6IHNvY2tldF9pb19wYXJzZXJfMS5QYWNrZXRUeXBlLkFDSyxcbiAgICAgICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICAgICAgZGF0YTogYXJncyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgdXBvbiBhIHNlcnZlciBhY2tub3dsZWdlbWVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBwYWNrZXRcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIG9uYWNrKHBhY2tldCkge1xuICAgICAgICBjb25zdCBhY2sgPSB0aGlzLmFja3NbcGFja2V0LmlkXTtcbiAgICAgICAgaWYgKFwiZnVuY3Rpb25cIiA9PT0gdHlwZW9mIGFjaykge1xuICAgICAgICAgICAgZGVidWcoXCJjYWxsaW5nIGFjayAlcyB3aXRoICVqXCIsIHBhY2tldC5pZCwgcGFja2V0LmRhdGEpO1xuICAgICAgICAgICAgYWNrLmFwcGx5KHRoaXMsIHBhY2tldC5kYXRhKTtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmFja3NbcGFja2V0LmlkXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRlYnVnKFwiYmFkIGFjayAlc1wiLCBwYWNrZXQuaWQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxlZCB1cG9uIHNlcnZlciBjb25uZWN0LlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBvbmNvbm5lY3QoaWQpIHtcbiAgICAgICAgZGVidWcoXCJzb2NrZXQgY29ubmVjdGVkIHdpdGggaWQgJXNcIiwgaWQpO1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMuY29ubmVjdGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5kaXNjb25uZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5lbWl0QnVmZmVyZWQoKTtcbiAgICAgICAgdGhpcy5lbWl0UmVzZXJ2ZWQoXCJjb25uZWN0XCIpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBFbWl0IGJ1ZmZlcmVkIGV2ZW50cyAocmVjZWl2ZWQgYW5kIGVtaXR0ZWQpLlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBlbWl0QnVmZmVyZWQoKSB7XG4gICAgICAgIHRoaXMucmVjZWl2ZUJ1ZmZlci5mb3JFYWNoKChhcmdzKSA9PiB0aGlzLmVtaXRFdmVudChhcmdzKSk7XG4gICAgICAgIHRoaXMucmVjZWl2ZUJ1ZmZlciA9IFtdO1xuICAgICAgICB0aGlzLnNlbmRCdWZmZXIuZm9yRWFjaCgocGFja2V0KSA9PiB0aGlzLnBhY2tldChwYWNrZXQpKTtcbiAgICAgICAgdGhpcy5zZW5kQnVmZmVyID0gW107XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxlZCB1cG9uIHNlcnZlciBkaXNjb25uZWN0LlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBvbmRpc2Nvbm5lY3QoKSB7XG4gICAgICAgIGRlYnVnKFwic2VydmVyIGRpc2Nvbm5lY3QgKCVzKVwiLCB0aGlzLm5zcCk7XG4gICAgICAgIHRoaXMuZGVzdHJveSgpO1xuICAgICAgICB0aGlzLm9uY2xvc2UoXCJpbyBzZXJ2ZXIgZGlzY29ubmVjdFwiKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHVwb24gZm9yY2VkIGNsaWVudC9zZXJ2ZXIgc2lkZSBkaXNjb25uZWN0aW9ucyxcbiAgICAgKiB0aGlzIG1ldGhvZCBlbnN1cmVzIHRoZSBtYW5hZ2VyIHN0b3BzIHRyYWNraW5nIHVzIGFuZFxuICAgICAqIHRoYXQgcmVjb25uZWN0aW9ucyBkb24ndCBnZXQgdHJpZ2dlcmVkIGZvciB0aGlzLlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBkZXN0cm95KCkge1xuICAgICAgICBpZiAodGhpcy5zdWJzKSB7XG4gICAgICAgICAgICAvLyBjbGVhbiBzdWJzY3JpcHRpb25zIHRvIGF2b2lkIHJlY29ubmVjdGlvbnNcbiAgICAgICAgICAgIHRoaXMuc3Vicy5mb3JFYWNoKChzdWJEZXN0cm95KSA9PiBzdWJEZXN0cm95KCkpO1xuICAgICAgICAgICAgdGhpcy5zdWJzID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW9bXCJfZGVzdHJveVwiXSh0aGlzKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRGlzY29ubmVjdHMgdGhlIHNvY2tldCBtYW51YWxseS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4gc2VsZlxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBkaXNjb25uZWN0KCkge1xuICAgICAgICBpZiAodGhpcy5jb25uZWN0ZWQpIHtcbiAgICAgICAgICAgIGRlYnVnKFwicGVyZm9ybWluZyBkaXNjb25uZWN0ICglcylcIiwgdGhpcy5uc3ApO1xuICAgICAgICAgICAgdGhpcy5wYWNrZXQoeyB0eXBlOiBzb2NrZXRfaW9fcGFyc2VyXzEuUGFja2V0VHlwZS5ESVNDT05ORUNUIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIHJlbW92ZSBzb2NrZXQgZnJvbSBwb29sXG4gICAgICAgIHRoaXMuZGVzdHJveSgpO1xuICAgICAgICBpZiAodGhpcy5jb25uZWN0ZWQpIHtcbiAgICAgICAgICAgIC8vIGZpcmUgZXZlbnRzXG4gICAgICAgICAgICB0aGlzLm9uY2xvc2UoXCJpbyBjbGllbnQgZGlzY29ubmVjdFwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWxpYXMgZm9yIGRpc2Nvbm5lY3QoKVxuICAgICAqXG4gICAgICogQHJldHVybiBzZWxmXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIGNsb3NlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kaXNjb25uZWN0KCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGNvbXByZXNzIGZsYWcuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY29tcHJlc3MgLSBpZiBgdHJ1ZWAsIGNvbXByZXNzZXMgdGhlIHNlbmRpbmcgZGF0YVxuICAgICAqIEByZXR1cm4gc2VsZlxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBjb21wcmVzcyhjb21wcmVzcykge1xuICAgICAgICB0aGlzLmZsYWdzLmNvbXByZXNzID0gY29tcHJlc3M7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIGEgbW9kaWZpZXIgZm9yIGEgc3Vic2VxdWVudCBldmVudCBlbWlzc2lvbiB0aGF0IHRoZSBldmVudCBtZXNzYWdlIHdpbGwgYmUgZHJvcHBlZCB3aGVuIHRoaXMgc29ja2V0IGlzIG5vdFxuICAgICAqIHJlYWR5IHRvIHNlbmQgbWVzc2FnZXMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBzZWxmXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIGdldCB2b2xhdGlsZSgpIHtcbiAgICAgICAgdGhpcy5mbGFncy52b2xhdGlsZSA9IHRydWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGRzIGEgbGlzdGVuZXIgdGhhdCB3aWxsIGJlIGZpcmVkIHdoZW4gYW55IGV2ZW50IGlzIGVtaXR0ZWQuIFRoZSBldmVudCBuYW1lIGlzIHBhc3NlZCBhcyB0aGUgZmlyc3QgYXJndW1lbnQgdG8gdGhlXG4gICAgICogY2FsbGJhY2suXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbGlzdGVuZXJcbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgb25BbnkobGlzdGVuZXIpIHtcbiAgICAgICAgdGhpcy5fYW55TGlzdGVuZXJzID0gdGhpcy5fYW55TGlzdGVuZXJzIHx8IFtdO1xuICAgICAgICB0aGlzLl9hbnlMaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGRzIGEgbGlzdGVuZXIgdGhhdCB3aWxsIGJlIGZpcmVkIHdoZW4gYW55IGV2ZW50IGlzIGVtaXR0ZWQuIFRoZSBldmVudCBuYW1lIGlzIHBhc3NlZCBhcyB0aGUgZmlyc3QgYXJndW1lbnQgdG8gdGhlXG4gICAgICogY2FsbGJhY2suIFRoZSBsaXN0ZW5lciBpcyBhZGRlZCB0byB0aGUgYmVnaW5uaW5nIG9mIHRoZSBsaXN0ZW5lcnMgYXJyYXkuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbGlzdGVuZXJcbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgcHJlcGVuZEFueShsaXN0ZW5lcikge1xuICAgICAgICB0aGlzLl9hbnlMaXN0ZW5lcnMgPSB0aGlzLl9hbnlMaXN0ZW5lcnMgfHwgW107XG4gICAgICAgIHRoaXMuX2FueUxpc3RlbmVycy51bnNoaWZ0KGxpc3RlbmVyKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgdGhlIGxpc3RlbmVyIHRoYXQgd2lsbCBiZSBmaXJlZCB3aGVuIGFueSBldmVudCBpcyBlbWl0dGVkLlxuICAgICAqXG4gICAgICogQHBhcmFtIGxpc3RlbmVyXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIG9mZkFueShsaXN0ZW5lcikge1xuICAgICAgICBpZiAoIXRoaXMuX2FueUxpc3RlbmVycykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxpc3RlbmVyKSB7XG4gICAgICAgICAgICBjb25zdCBsaXN0ZW5lcnMgPSB0aGlzLl9hbnlMaXN0ZW5lcnM7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChsaXN0ZW5lciA9PT0gbGlzdGVuZXJzW2ldKSB7XG4gICAgICAgICAgICAgICAgICAgIGxpc3RlbmVycy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2FueUxpc3RlbmVycyA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIGxpc3RlbmVycyB0aGF0IGFyZSBsaXN0ZW5pbmcgZm9yIGFueSBldmVudCB0aGF0IGlzIHNwZWNpZmllZC4gVGhpcyBhcnJheSBjYW4gYmUgbWFuaXB1bGF0ZWQsXG4gICAgICogZS5nLiB0byByZW1vdmUgbGlzdGVuZXJzLlxuICAgICAqXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIGxpc3RlbmVyc0FueSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FueUxpc3RlbmVycyB8fCBbXTtcbiAgICB9XG59XG5leHBvcnRzLlNvY2tldCA9IFNvY2tldDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5TdHJpY3RFdmVudEVtaXR0ZXIgPSB2b2lkIDA7XG5jb25zdCBFbWl0dGVyID0gcmVxdWlyZShcImNvbXBvbmVudC1lbWl0dGVyXCIpO1xuLyoqXG4gKiBTdHJpY3RseSB0eXBlZCB2ZXJzaW9uIG9mIGFuIGBFdmVudEVtaXR0ZXJgLiBBIGBUeXBlZEV2ZW50RW1pdHRlcmAgdGFrZXMgdHlwZVxuICogcGFyYW1ldGVycyBmb3IgbWFwcGluZ3Mgb2YgZXZlbnQgbmFtZXMgdG8gZXZlbnQgZGF0YSB0eXBlcywgYW5kIHN0cmljdGx5XG4gKiB0eXBlcyBtZXRob2QgY2FsbHMgdG8gdGhlIGBFdmVudEVtaXR0ZXJgIGFjY29yZGluZyB0byB0aGVzZSBldmVudCBtYXBzLlxuICpcbiAqIEB0eXBlUGFyYW0gTGlzdGVuRXZlbnRzIC0gYEV2ZW50c01hcGAgb2YgdXNlci1kZWZpbmVkIGV2ZW50cyB0aGF0IGNhbiBiZVxuICogbGlzdGVuZWQgdG8gd2l0aCBgb25gIG9yIGBvbmNlYFxuICogQHR5cGVQYXJhbSBFbWl0RXZlbnRzIC0gYEV2ZW50c01hcGAgb2YgdXNlci1kZWZpbmVkIGV2ZW50cyB0aGF0IGNhbiBiZVxuICogZW1pdHRlZCB3aXRoIGBlbWl0YFxuICogQHR5cGVQYXJhbSBSZXNlcnZlZEV2ZW50cyAtIGBFdmVudHNNYXBgIG9mIHJlc2VydmVkIGV2ZW50cywgdGhhdCBjYW4gYmVcbiAqIGVtaXR0ZWQgYnkgc29ja2V0LmlvIHdpdGggYGVtaXRSZXNlcnZlZGAsIGFuZCBjYW4gYmUgbGlzdGVuZWQgdG8gd2l0aFxuICogYGxpc3RlbmAuXG4gKi9cbmNsYXNzIFN0cmljdEV2ZW50RW1pdHRlciBleHRlbmRzIEVtaXR0ZXIge1xuICAgIC8qKlxuICAgICAqIEFkZHMgdGhlIGBsaXN0ZW5lcmAgZnVuY3Rpb24gYXMgYW4gZXZlbnQgbGlzdGVuZXIgZm9yIGBldmAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZXYgTmFtZSBvZiB0aGUgZXZlbnRcbiAgICAgKiBAcGFyYW0gbGlzdGVuZXIgQ2FsbGJhY2sgZnVuY3Rpb25cbiAgICAgKi9cbiAgICBvbihldiwgbGlzdGVuZXIpIHtcbiAgICAgICAgc3VwZXIub24oZXYsIGxpc3RlbmVyKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFkZHMgYSBvbmUtdGltZSBgbGlzdGVuZXJgIGZ1bmN0aW9uIGFzIGFuIGV2ZW50IGxpc3RlbmVyIGZvciBgZXZgLlxuICAgICAqXG4gICAgICogQHBhcmFtIGV2IE5hbWUgb2YgdGhlIGV2ZW50XG4gICAgICogQHBhcmFtIGxpc3RlbmVyIENhbGxiYWNrIGZ1bmN0aW9uXG4gICAgICovXG4gICAgb25jZShldiwgbGlzdGVuZXIpIHtcbiAgICAgICAgc3VwZXIub25jZShldiwgbGlzdGVuZXIpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogRW1pdHMgYW4gZXZlbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZXYgTmFtZSBvZiB0aGUgZXZlbnRcbiAgICAgKiBAcGFyYW0gYXJncyBWYWx1ZXMgdG8gc2VuZCB0byBsaXN0ZW5lcnMgb2YgdGhpcyBldmVudFxuICAgICAqL1xuICAgIGVtaXQoZXYsIC4uLmFyZ3MpIHtcbiAgICAgICAgc3VwZXIuZW1pdChldiwgLi4uYXJncyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBFbWl0cyBhIHJlc2VydmVkIGV2ZW50LlxuICAgICAqXG4gICAgICogVGhpcyBtZXRob2QgaXMgYHByb3RlY3RlZGAsIHNvIHRoYXQgb25seSBhIGNsYXNzIGV4dGVuZGluZ1xuICAgICAqIGBTdHJpY3RFdmVudEVtaXR0ZXJgIGNhbiBlbWl0IGl0cyBvd24gcmVzZXJ2ZWQgZXZlbnRzLlxuICAgICAqXG4gICAgICogQHBhcmFtIGV2IFJlc2VydmVkIGV2ZW50IG5hbWVcbiAgICAgKiBAcGFyYW0gYXJncyBBcmd1bWVudHMgdG8gZW1pdCBhbG9uZyB3aXRoIHRoZSBldmVudFxuICAgICAqL1xuICAgIGVtaXRSZXNlcnZlZChldiwgLi4uYXJncykge1xuICAgICAgICBzdXBlci5lbWl0KGV2LCAuLi5hcmdzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGxpc3RlbmVycyBsaXN0ZW5pbmcgdG8gYW4gZXZlbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZXZlbnQgRXZlbnQgbmFtZVxuICAgICAqIEByZXR1cm5zIEFycmF5IG9mIGxpc3RlbmVycyBzdWJzY3JpYmVkIHRvIGBldmVudGBcbiAgICAgKi9cbiAgICBsaXN0ZW5lcnMoZXZlbnQpIHtcbiAgICAgICAgcmV0dXJuIHN1cGVyLmxpc3RlbmVycyhldmVudCk7XG4gICAgfVxufVxuZXhwb3J0cy5TdHJpY3RFdmVudEVtaXR0ZXIgPSBTdHJpY3RFdmVudEVtaXR0ZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMudXJsID0gdm9pZCAwO1xuY29uc3QgcGFyc2V1cmkgPSByZXF1aXJlKFwicGFyc2V1cmlcIik7XG5jb25zdCBkZWJ1ZyA9IHJlcXVpcmUoXCJkZWJ1Z1wiKShcInNvY2tldC5pby1jbGllbnQ6dXJsXCIpO1xuLyoqXG4gKiBVUkwgcGFyc2VyLlxuICpcbiAqIEBwYXJhbSB1cmkgLSB1cmxcbiAqIEBwYXJhbSBwYXRoIC0gdGhlIHJlcXVlc3QgcGF0aCBvZiB0aGUgY29ubmVjdGlvblxuICogQHBhcmFtIGxvYyAtIEFuIG9iamVjdCBtZWFudCB0byBtaW1pYyB3aW5kb3cubG9jYXRpb24uXG4gKiAgICAgICAgRGVmYXVsdHMgdG8gd2luZG93LmxvY2F0aW9uLlxuICogQHB1YmxpY1xuICovXG5mdW5jdGlvbiB1cmwodXJpLCBwYXRoID0gXCJcIiwgbG9jKSB7XG4gICAgbGV0IG9iaiA9IHVyaTtcbiAgICAvLyBkZWZhdWx0IHRvIHdpbmRvdy5sb2NhdGlvblxuICAgIGxvYyA9IGxvYyB8fCAodHlwZW9mIGxvY2F0aW9uICE9PSBcInVuZGVmaW5lZFwiICYmIGxvY2F0aW9uKTtcbiAgICBpZiAobnVsbCA9PSB1cmkpXG4gICAgICAgIHVyaSA9IGxvYy5wcm90b2NvbCArIFwiLy9cIiArIGxvYy5ob3N0O1xuICAgIC8vIHJlbGF0aXZlIHBhdGggc3VwcG9ydFxuICAgIGlmICh0eXBlb2YgdXJpID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIGlmIChcIi9cIiA9PT0gdXJpLmNoYXJBdCgwKSkge1xuICAgICAgICAgICAgaWYgKFwiL1wiID09PSB1cmkuY2hhckF0KDEpKSB7XG4gICAgICAgICAgICAgICAgdXJpID0gbG9jLnByb3RvY29sICsgdXJpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdXJpID0gbG9jLmhvc3QgKyB1cmk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCEvXihodHRwcz98d3NzPyk6XFwvXFwvLy50ZXN0KHVyaSkpIHtcbiAgICAgICAgICAgIGRlYnVnKFwicHJvdG9jb2wtbGVzcyB1cmwgJXNcIiwgdXJpKTtcbiAgICAgICAgICAgIGlmIChcInVuZGVmaW5lZFwiICE9PSB0eXBlb2YgbG9jKSB7XG4gICAgICAgICAgICAgICAgdXJpID0gbG9jLnByb3RvY29sICsgXCIvL1wiICsgdXJpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdXJpID0gXCJodHRwczovL1wiICsgdXJpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIHBhcnNlXG4gICAgICAgIGRlYnVnKFwicGFyc2UgJXNcIiwgdXJpKTtcbiAgICAgICAgb2JqID0gcGFyc2V1cmkodXJpKTtcbiAgICB9XG4gICAgLy8gbWFrZSBzdXJlIHdlIHRyZWF0IGBsb2NhbGhvc3Q6ODBgIGFuZCBgbG9jYWxob3N0YCBlcXVhbGx5XG4gICAgaWYgKCFvYmoucG9ydCkge1xuICAgICAgICBpZiAoL14oaHR0cHx3cykkLy50ZXN0KG9iai5wcm90b2NvbCkpIHtcbiAgICAgICAgICAgIG9iai5wb3J0ID0gXCI4MFwiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKC9eKGh0dHB8d3MpcyQvLnRlc3Qob2JqLnByb3RvY29sKSkge1xuICAgICAgICAgICAgb2JqLnBvcnQgPSBcIjQ0M1wiO1xuICAgICAgICB9XG4gICAgfVxuICAgIG9iai5wYXRoID0gb2JqLnBhdGggfHwgXCIvXCI7XG4gICAgY29uc3QgaXB2NiA9IG9iai5ob3N0LmluZGV4T2YoXCI6XCIpICE9PSAtMTtcbiAgICBjb25zdCBob3N0ID0gaXB2NiA/IFwiW1wiICsgb2JqLmhvc3QgKyBcIl1cIiA6IG9iai5ob3N0O1xuICAgIC8vIGRlZmluZSB1bmlxdWUgaWRcbiAgICBvYmouaWQgPSBvYmoucHJvdG9jb2wgKyBcIjovL1wiICsgaG9zdCArIFwiOlwiICsgb2JqLnBvcnQgKyBwYXRoO1xuICAgIC8vIGRlZmluZSBocmVmXG4gICAgb2JqLmhyZWYgPVxuICAgICAgICBvYmoucHJvdG9jb2wgK1xuICAgICAgICAgICAgXCI6Ly9cIiArXG4gICAgICAgICAgICBob3N0ICtcbiAgICAgICAgICAgIChsb2MgJiYgbG9jLnBvcnQgPT09IG9iai5wb3J0ID8gXCJcIiA6IFwiOlwiICsgb2JqLnBvcnQpO1xuICAgIHJldHVybiBvYmo7XG59XG5leHBvcnRzLnVybCA9IHVybDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5yZWNvbnN0cnVjdFBhY2tldCA9IGV4cG9ydHMuZGVjb25zdHJ1Y3RQYWNrZXQgPSB2b2lkIDA7XG5jb25zdCBpc19iaW5hcnlfMSA9IHJlcXVpcmUoXCIuL2lzLWJpbmFyeVwiKTtcbi8qKlxuICogUmVwbGFjZXMgZXZlcnkgQnVmZmVyIHwgQXJyYXlCdWZmZXIgfCBCbG9iIHwgRmlsZSBpbiBwYWNrZXQgd2l0aCBhIG51bWJlcmVkIHBsYWNlaG9sZGVyLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYWNrZXQgLSBzb2NrZXQuaW8gZXZlbnQgcGFja2V0XG4gKiBAcmV0dXJuIHtPYmplY3R9IHdpdGggZGVjb25zdHJ1Y3RlZCBwYWNrZXQgYW5kIGxpc3Qgb2YgYnVmZmVyc1xuICogQHB1YmxpY1xuICovXG5mdW5jdGlvbiBkZWNvbnN0cnVjdFBhY2tldChwYWNrZXQpIHtcbiAgICBjb25zdCBidWZmZXJzID0gW107XG4gICAgY29uc3QgcGFja2V0RGF0YSA9IHBhY2tldC5kYXRhO1xuICAgIGNvbnN0IHBhY2sgPSBwYWNrZXQ7XG4gICAgcGFjay5kYXRhID0gX2RlY29uc3RydWN0UGFja2V0KHBhY2tldERhdGEsIGJ1ZmZlcnMpO1xuICAgIHBhY2suYXR0YWNobWVudHMgPSBidWZmZXJzLmxlbmd0aDsgLy8gbnVtYmVyIG9mIGJpbmFyeSAnYXR0YWNobWVudHMnXG4gICAgcmV0dXJuIHsgcGFja2V0OiBwYWNrLCBidWZmZXJzOiBidWZmZXJzIH07XG59XG5leHBvcnRzLmRlY29uc3RydWN0UGFja2V0ID0gZGVjb25zdHJ1Y3RQYWNrZXQ7XG5mdW5jdGlvbiBfZGVjb25zdHJ1Y3RQYWNrZXQoZGF0YSwgYnVmZmVycykge1xuICAgIGlmICghZGF0YSlcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgaWYgKGlzX2JpbmFyeV8xLmlzQmluYXJ5KGRhdGEpKSB7XG4gICAgICAgIGNvbnN0IHBsYWNlaG9sZGVyID0geyBfcGxhY2Vob2xkZXI6IHRydWUsIG51bTogYnVmZmVycy5sZW5ndGggfTtcbiAgICAgICAgYnVmZmVycy5wdXNoKGRhdGEpO1xuICAgICAgICByZXR1cm4gcGxhY2Vob2xkZXI7XG4gICAgfVxuICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgICAgY29uc3QgbmV3RGF0YSA9IG5ldyBBcnJheShkYXRhLmxlbmd0aCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbmV3RGF0YVtpXSA9IF9kZWNvbnN0cnVjdFBhY2tldChkYXRhW2ldLCBidWZmZXJzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3RGF0YTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIGRhdGEgPT09IFwib2JqZWN0XCIgJiYgIShkYXRhIGluc3RhbmNlb2YgRGF0ZSkpIHtcbiAgICAgICAgY29uc3QgbmV3RGF0YSA9IHt9O1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBkYXRhKSB7XG4gICAgICAgICAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgbmV3RGF0YVtrZXldID0gX2RlY29uc3RydWN0UGFja2V0KGRhdGFba2V5XSwgYnVmZmVycyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ld0RhdGE7XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xufVxuLyoqXG4gKiBSZWNvbnN0cnVjdHMgYSBiaW5hcnkgcGFja2V0IGZyb20gaXRzIHBsYWNlaG9sZGVyIHBhY2tldCBhbmQgYnVmZmVyc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYWNrZXQgLSBldmVudCBwYWNrZXQgd2l0aCBwbGFjZWhvbGRlcnNcbiAqIEBwYXJhbSB7QXJyYXl9IGJ1ZmZlcnMgLSBiaW5hcnkgYnVmZmVycyB0byBwdXQgaW4gcGxhY2Vob2xkZXIgcG9zaXRpb25zXG4gKiBAcmV0dXJuIHtPYmplY3R9IHJlY29uc3RydWN0ZWQgcGFja2V0XG4gKiBAcHVibGljXG4gKi9cbmZ1bmN0aW9uIHJlY29uc3RydWN0UGFja2V0KHBhY2tldCwgYnVmZmVycykge1xuICAgIHBhY2tldC5kYXRhID0gX3JlY29uc3RydWN0UGFja2V0KHBhY2tldC5kYXRhLCBidWZmZXJzKTtcbiAgICBwYWNrZXQuYXR0YWNobWVudHMgPSB1bmRlZmluZWQ7IC8vIG5vIGxvbmdlciB1c2VmdWxcbiAgICByZXR1cm4gcGFja2V0O1xufVxuZXhwb3J0cy5yZWNvbnN0cnVjdFBhY2tldCA9IHJlY29uc3RydWN0UGFja2V0O1xuZnVuY3Rpb24gX3JlY29uc3RydWN0UGFja2V0KGRhdGEsIGJ1ZmZlcnMpIHtcbiAgICBpZiAoIWRhdGEpXG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIGlmIChkYXRhICYmIGRhdGEuX3BsYWNlaG9sZGVyKSB7XG4gICAgICAgIHJldHVybiBidWZmZXJzW2RhdGEubnVtXTsgLy8gYXBwcm9wcmlhdGUgYnVmZmVyIChzaG91bGQgYmUgbmF0dXJhbCBvcmRlciBhbnl3YXkpXG4gICAgfVxuICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBkYXRhW2ldID0gX3JlY29uc3RydWN0UGFja2V0KGRhdGFbaV0sIGJ1ZmZlcnMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiBkYXRhID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIGRhdGEpIHtcbiAgICAgICAgICAgIGlmIChkYXRhLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBkYXRhW2tleV0gPSBfcmVjb25zdHJ1Y3RQYWNrZXQoZGF0YVtrZXldLCBidWZmZXJzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5EZWNvZGVyID0gZXhwb3J0cy5FbmNvZGVyID0gZXhwb3J0cy5QYWNrZXRUeXBlID0gZXhwb3J0cy5wcm90b2NvbCA9IHZvaWQgMDtcbmNvbnN0IEVtaXR0ZXIgPSByZXF1aXJlKFwiY29tcG9uZW50LWVtaXR0ZXJcIik7XG5jb25zdCBiaW5hcnlfMSA9IHJlcXVpcmUoXCIuL2JpbmFyeVwiKTtcbmNvbnN0IGlzX2JpbmFyeV8xID0gcmVxdWlyZShcIi4vaXMtYmluYXJ5XCIpO1xuY29uc3QgZGVidWcgPSByZXF1aXJlKFwiZGVidWdcIikoXCJzb2NrZXQuaW8tcGFyc2VyXCIpO1xuLyoqXG4gKiBQcm90b2NvbCB2ZXJzaW9uLlxuICpcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0cy5wcm90b2NvbCA9IDU7XG52YXIgUGFja2V0VHlwZTtcbihmdW5jdGlvbiAoUGFja2V0VHlwZSkge1xuICAgIFBhY2tldFR5cGVbUGFja2V0VHlwZVtcIkNPTk5FQ1RcIl0gPSAwXSA9IFwiQ09OTkVDVFwiO1xuICAgIFBhY2tldFR5cGVbUGFja2V0VHlwZVtcIkRJU0NPTk5FQ1RcIl0gPSAxXSA9IFwiRElTQ09OTkVDVFwiO1xuICAgIFBhY2tldFR5cGVbUGFja2V0VHlwZVtcIkVWRU5UXCJdID0gMl0gPSBcIkVWRU5UXCI7XG4gICAgUGFja2V0VHlwZVtQYWNrZXRUeXBlW1wiQUNLXCJdID0gM10gPSBcIkFDS1wiO1xuICAgIFBhY2tldFR5cGVbUGFja2V0VHlwZVtcIkNPTk5FQ1RfRVJST1JcIl0gPSA0XSA9IFwiQ09OTkVDVF9FUlJPUlwiO1xuICAgIFBhY2tldFR5cGVbUGFja2V0VHlwZVtcIkJJTkFSWV9FVkVOVFwiXSA9IDVdID0gXCJCSU5BUllfRVZFTlRcIjtcbiAgICBQYWNrZXRUeXBlW1BhY2tldFR5cGVbXCJCSU5BUllfQUNLXCJdID0gNl0gPSBcIkJJTkFSWV9BQ0tcIjtcbn0pKFBhY2tldFR5cGUgPSBleHBvcnRzLlBhY2tldFR5cGUgfHwgKGV4cG9ydHMuUGFja2V0VHlwZSA9IHt9KSk7XG4vKipcbiAqIEEgc29ja2V0LmlvIEVuY29kZXIgaW5zdGFuY2VcbiAqL1xuY2xhc3MgRW5jb2RlciB7XG4gICAgLyoqXG4gICAgICogRW5jb2RlIGEgcGFja2V0IGFzIGEgc2luZ2xlIHN0cmluZyBpZiBub24tYmluYXJ5LCBvciBhcyBhXG4gICAgICogYnVmZmVyIHNlcXVlbmNlLCBkZXBlbmRpbmcgb24gcGFja2V0IHR5cGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb2JqIC0gcGFja2V0IG9iamVjdFxuICAgICAqL1xuICAgIGVuY29kZShvYmopIHtcbiAgICAgICAgZGVidWcoXCJlbmNvZGluZyBwYWNrZXQgJWpcIiwgb2JqKTtcbiAgICAgICAgaWYgKG9iai50eXBlID09PSBQYWNrZXRUeXBlLkVWRU5UIHx8IG9iai50eXBlID09PSBQYWNrZXRUeXBlLkFDSykge1xuICAgICAgICAgICAgaWYgKGlzX2JpbmFyeV8xLmhhc0JpbmFyeShvYmopKSB7XG4gICAgICAgICAgICAgICAgb2JqLnR5cGUgPVxuICAgICAgICAgICAgICAgICAgICBvYmoudHlwZSA9PT0gUGFja2V0VHlwZS5FVkVOVFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBQYWNrZXRUeXBlLkJJTkFSWV9FVkVOVFxuICAgICAgICAgICAgICAgICAgICAgICAgOiBQYWNrZXRUeXBlLkJJTkFSWV9BQ0s7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZW5jb2RlQXNCaW5hcnkob2JqKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW3RoaXMuZW5jb2RlQXNTdHJpbmcob2JqKV07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEVuY29kZSBwYWNrZXQgYXMgc3RyaW5nLlxuICAgICAqL1xuICAgIGVuY29kZUFzU3RyaW5nKG9iaikge1xuICAgICAgICAvLyBmaXJzdCBpcyB0eXBlXG4gICAgICAgIGxldCBzdHIgPSBcIlwiICsgb2JqLnR5cGU7XG4gICAgICAgIC8vIGF0dGFjaG1lbnRzIGlmIHdlIGhhdmUgdGhlbVxuICAgICAgICBpZiAob2JqLnR5cGUgPT09IFBhY2tldFR5cGUuQklOQVJZX0VWRU5UIHx8XG4gICAgICAgICAgICBvYmoudHlwZSA9PT0gUGFja2V0VHlwZS5CSU5BUllfQUNLKSB7XG4gICAgICAgICAgICBzdHIgKz0gb2JqLmF0dGFjaG1lbnRzICsgXCItXCI7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgd2UgaGF2ZSBhIG5hbWVzcGFjZSBvdGhlciB0aGFuIGAvYFxuICAgICAgICAvLyB3ZSBhcHBlbmQgaXQgZm9sbG93ZWQgYnkgYSBjb21tYSBgLGBcbiAgICAgICAgaWYgKG9iai5uc3AgJiYgXCIvXCIgIT09IG9iai5uc3ApIHtcbiAgICAgICAgICAgIHN0ciArPSBvYmoubnNwICsgXCIsXCI7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaW1tZWRpYXRlbHkgZm9sbG93ZWQgYnkgdGhlIGlkXG4gICAgICAgIGlmIChudWxsICE9IG9iai5pZCkge1xuICAgICAgICAgICAgc3RyICs9IG9iai5pZDtcbiAgICAgICAgfVxuICAgICAgICAvLyBqc29uIGRhdGFcbiAgICAgICAgaWYgKG51bGwgIT0gb2JqLmRhdGEpIHtcbiAgICAgICAgICAgIHN0ciArPSBKU09OLnN0cmluZ2lmeShvYmouZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgZGVidWcoXCJlbmNvZGVkICVqIGFzICVzXCIsIG9iaiwgc3RyKTtcbiAgICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRW5jb2RlIHBhY2tldCBhcyAnYnVmZmVyIHNlcXVlbmNlJyBieSByZW1vdmluZyBibG9icywgYW5kXG4gICAgICogZGVjb25zdHJ1Y3RpbmcgcGFja2V0IGludG8gb2JqZWN0IHdpdGggcGxhY2Vob2xkZXJzIGFuZFxuICAgICAqIGEgbGlzdCBvZiBidWZmZXJzLlxuICAgICAqL1xuICAgIGVuY29kZUFzQmluYXJ5KG9iaikge1xuICAgICAgICBjb25zdCBkZWNvbnN0cnVjdGlvbiA9IGJpbmFyeV8xLmRlY29uc3RydWN0UGFja2V0KG9iaik7XG4gICAgICAgIGNvbnN0IHBhY2sgPSB0aGlzLmVuY29kZUFzU3RyaW5nKGRlY29uc3RydWN0aW9uLnBhY2tldCk7XG4gICAgICAgIGNvbnN0IGJ1ZmZlcnMgPSBkZWNvbnN0cnVjdGlvbi5idWZmZXJzO1xuICAgICAgICBidWZmZXJzLnVuc2hpZnQocGFjayk7IC8vIGFkZCBwYWNrZXQgaW5mbyB0byBiZWdpbm5pbmcgb2YgZGF0YSBsaXN0XG4gICAgICAgIHJldHVybiBidWZmZXJzOyAvLyB3cml0ZSBhbGwgdGhlIGJ1ZmZlcnNcbiAgICB9XG59XG5leHBvcnRzLkVuY29kZXIgPSBFbmNvZGVyO1xuLyoqXG4gKiBBIHNvY2tldC5pbyBEZWNvZGVyIGluc3RhbmNlXG4gKlxuICogQHJldHVybiB7T2JqZWN0fSBkZWNvZGVyXG4gKi9cbmNsYXNzIERlY29kZXIgZXh0ZW5kcyBFbWl0dGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRGVjb2RlcyBhbiBlbmNvZGVkIHBhY2tldCBzdHJpbmcgaW50byBwYWNrZXQgSlNPTi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvYmogLSBlbmNvZGVkIHBhY2tldFxuICAgICAqL1xuICAgIGFkZChvYmopIHtcbiAgICAgICAgbGV0IHBhY2tldDtcbiAgICAgICAgaWYgKHR5cGVvZiBvYmogPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHBhY2tldCA9IHRoaXMuZGVjb2RlU3RyaW5nKG9iaik7XG4gICAgICAgICAgICBpZiAocGFja2V0LnR5cGUgPT09IFBhY2tldFR5cGUuQklOQVJZX0VWRU5UIHx8XG4gICAgICAgICAgICAgICAgcGFja2V0LnR5cGUgPT09IFBhY2tldFR5cGUuQklOQVJZX0FDSykge1xuICAgICAgICAgICAgICAgIC8vIGJpbmFyeSBwYWNrZXQncyBqc29uXG4gICAgICAgICAgICAgICAgdGhpcy5yZWNvbnN0cnVjdG9yID0gbmV3IEJpbmFyeVJlY29uc3RydWN0b3IocGFja2V0KTtcbiAgICAgICAgICAgICAgICAvLyBubyBhdHRhY2htZW50cywgbGFiZWxlZCBiaW5hcnkgYnV0IG5vIGJpbmFyeSBkYXRhIHRvIGZvbGxvd1xuICAgICAgICAgICAgICAgIGlmIChwYWNrZXQuYXR0YWNobWVudHMgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgc3VwZXIuZW1pdChcImRlY29kZWRcIiwgcGFja2V0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBub24tYmluYXJ5IGZ1bGwgcGFja2V0XG4gICAgICAgICAgICAgICAgc3VwZXIuZW1pdChcImRlY29kZWRcIiwgcGFja2V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc19iaW5hcnlfMS5pc0JpbmFyeShvYmopIHx8IG9iai5iYXNlNjQpIHtcbiAgICAgICAgICAgIC8vIHJhdyBiaW5hcnkgZGF0YVxuICAgICAgICAgICAgaWYgKCF0aGlzLnJlY29uc3RydWN0b3IpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJnb3QgYmluYXJ5IGRhdGEgd2hlbiBub3QgcmVjb25zdHJ1Y3RpbmcgYSBwYWNrZXRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYWNrZXQgPSB0aGlzLnJlY29uc3RydWN0b3IudGFrZUJpbmFyeURhdGEob2JqKTtcbiAgICAgICAgICAgICAgICBpZiAocGFja2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHJlY2VpdmVkIGZpbmFsIGJ1ZmZlclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlY29uc3RydWN0b3IgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBzdXBlci5lbWl0KFwiZGVjb2RlZFwiLCBwYWNrZXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVua25vd24gdHlwZTogXCIgKyBvYmopO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERlY29kZSBhIHBhY2tldCBTdHJpbmcgKEpTT04gZGF0YSlcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9IHBhY2tldFxuICAgICAqL1xuICAgIGRlY29kZVN0cmluZyhzdHIpIHtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICAvLyBsb29rIHVwIHR5cGVcbiAgICAgICAgY29uc3QgcCA9IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcihzdHIuY2hhckF0KDApKSxcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKFBhY2tldFR5cGVbcC50eXBlXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1bmtub3duIHBhY2tldCB0eXBlIFwiICsgcC50eXBlKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBsb29rIHVwIGF0dGFjaG1lbnRzIGlmIHR5cGUgYmluYXJ5XG4gICAgICAgIGlmIChwLnR5cGUgPT09IFBhY2tldFR5cGUuQklOQVJZX0VWRU5UIHx8XG4gICAgICAgICAgICBwLnR5cGUgPT09IFBhY2tldFR5cGUuQklOQVJZX0FDSykge1xuICAgICAgICAgICAgY29uc3Qgc3RhcnQgPSBpICsgMTtcbiAgICAgICAgICAgIHdoaWxlIChzdHIuY2hhckF0KCsraSkgIT09IFwiLVwiICYmIGkgIT0gc3RyLmxlbmd0aCkgeyB9XG4gICAgICAgICAgICBjb25zdCBidWYgPSBzdHIuc3Vic3RyaW5nKHN0YXJ0LCBpKTtcbiAgICAgICAgICAgIGlmIChidWYgIT0gTnVtYmVyKGJ1ZikgfHwgc3RyLmNoYXJBdChpKSAhPT0gXCItXCIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbGxlZ2FsIGF0dGFjaG1lbnRzXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcC5hdHRhY2htZW50cyA9IE51bWJlcihidWYpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGxvb2sgdXAgbmFtZXNwYWNlIChpZiBhbnkpXG4gICAgICAgIGlmIChcIi9cIiA9PT0gc3RyLmNoYXJBdChpICsgMSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gaSArIDE7XG4gICAgICAgICAgICB3aGlsZSAoKytpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYyA9IHN0ci5jaGFyQXQoaSk7XG4gICAgICAgICAgICAgICAgaWYgKFwiLFwiID09PSBjKVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBpZiAoaSA9PT0gc3RyLmxlbmd0aClcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwLm5zcCA9IHN0ci5zdWJzdHJpbmcoc3RhcnQsIGkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcC5uc3AgPSBcIi9cIjtcbiAgICAgICAgfVxuICAgICAgICAvLyBsb29rIHVwIGlkXG4gICAgICAgIGNvbnN0IG5leHQgPSBzdHIuY2hhckF0KGkgKyAxKTtcbiAgICAgICAgaWYgKFwiXCIgIT09IG5leHQgJiYgTnVtYmVyKG5leHQpID09IG5leHQpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gaSArIDE7XG4gICAgICAgICAgICB3aGlsZSAoKytpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYyA9IHN0ci5jaGFyQXQoaSk7XG4gICAgICAgICAgICAgICAgaWYgKG51bGwgPT0gYyB8fCBOdW1iZXIoYykgIT0gYykge1xuICAgICAgICAgICAgICAgICAgICAtLWk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoaSA9PT0gc3RyLmxlbmd0aClcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwLmlkID0gTnVtYmVyKHN0ci5zdWJzdHJpbmcoc3RhcnQsIGkgKyAxKSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gbG9vayB1cCBqc29uIGRhdGFcbiAgICAgICAgaWYgKHN0ci5jaGFyQXQoKytpKSkge1xuICAgICAgICAgICAgY29uc3QgcGF5bG9hZCA9IHRyeVBhcnNlKHN0ci5zdWJzdHIoaSkpO1xuICAgICAgICAgICAgaWYgKERlY29kZXIuaXNQYXlsb2FkVmFsaWQocC50eXBlLCBwYXlsb2FkKSkge1xuICAgICAgICAgICAgICAgIHAuZGF0YSA9IHBheWxvYWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbnZhbGlkIHBheWxvYWRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZGVidWcoXCJkZWNvZGVkICVzIGFzICVqXCIsIHN0ciwgcCk7XG4gICAgICAgIHJldHVybiBwO1xuICAgIH1cbiAgICBzdGF0aWMgaXNQYXlsb2FkVmFsaWQodHlwZSwgcGF5bG9hZCkge1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgUGFja2V0VHlwZS5DT05ORUNUOlxuICAgICAgICAgICAgICAgIHJldHVybiB0eXBlb2YgcGF5bG9hZCA9PT0gXCJvYmplY3RcIjtcbiAgICAgICAgICAgIGNhc2UgUGFja2V0VHlwZS5ESVNDT05ORUNUOlxuICAgICAgICAgICAgICAgIHJldHVybiBwYXlsb2FkID09PSB1bmRlZmluZWQ7XG4gICAgICAgICAgICBjYXNlIFBhY2tldFR5cGUuQ09OTkVDVF9FUlJPUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdHlwZW9mIHBheWxvYWQgPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIHBheWxvYWQgPT09IFwib2JqZWN0XCI7XG4gICAgICAgICAgICBjYXNlIFBhY2tldFR5cGUuRVZFTlQ6XG4gICAgICAgICAgICBjYXNlIFBhY2tldFR5cGUuQklOQVJZX0VWRU5UOlxuICAgICAgICAgICAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KHBheWxvYWQpICYmIHBheWxvYWQubGVuZ3RoID4gMDtcbiAgICAgICAgICAgIGNhc2UgUGFja2V0VHlwZS5BQ0s6XG4gICAgICAgICAgICBjYXNlIFBhY2tldFR5cGUuQklOQVJZX0FDSzpcbiAgICAgICAgICAgICAgICByZXR1cm4gQXJyYXkuaXNBcnJheShwYXlsb2FkKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBEZWFsbG9jYXRlcyBhIHBhcnNlcidzIHJlc291cmNlc1xuICAgICAqL1xuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh0aGlzLnJlY29uc3RydWN0b3IpIHtcbiAgICAgICAgICAgIHRoaXMucmVjb25zdHJ1Y3Rvci5maW5pc2hlZFJlY29uc3RydWN0aW9uKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLkRlY29kZXIgPSBEZWNvZGVyO1xuZnVuY3Rpb24gdHJ5UGFyc2Uoc3RyKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2Uoc3RyKTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbi8qKlxuICogQSBtYW5hZ2VyIG9mIGEgYmluYXJ5IGV2ZW50J3MgJ2J1ZmZlciBzZXF1ZW5jZScuIFNob3VsZFxuICogYmUgY29uc3RydWN0ZWQgd2hlbmV2ZXIgYSBwYWNrZXQgb2YgdHlwZSBCSU5BUllfRVZFTlQgaXNcbiAqIGRlY29kZWQuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHBhY2tldFxuICogQHJldHVybiB7QmluYXJ5UmVjb25zdHJ1Y3Rvcn0gaW5pdGlhbGl6ZWQgcmVjb25zdHJ1Y3RvclxuICovXG5jbGFzcyBCaW5hcnlSZWNvbnN0cnVjdG9yIHtcbiAgICBjb25zdHJ1Y3RvcihwYWNrZXQpIHtcbiAgICAgICAgdGhpcy5wYWNrZXQgPSBwYWNrZXQ7XG4gICAgICAgIHRoaXMuYnVmZmVycyA9IFtdO1xuICAgICAgICB0aGlzLnJlY29uUGFjayA9IHBhY2tldDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogTWV0aG9kIHRvIGJlIGNhbGxlZCB3aGVuIGJpbmFyeSBkYXRhIHJlY2VpdmVkIGZyb20gY29ubmVjdGlvblxuICAgICAqIGFmdGVyIGEgQklOQVJZX0VWRU5UIHBhY2tldC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7QnVmZmVyIHwgQXJyYXlCdWZmZXJ9IGJpbkRhdGEgLSB0aGUgcmF3IGJpbmFyeSBkYXRhIHJlY2VpdmVkXG4gICAgICogQHJldHVybiB7bnVsbCB8IE9iamVjdH0gcmV0dXJucyBudWxsIGlmIG1vcmUgYmluYXJ5IGRhdGEgaXMgZXhwZWN0ZWQgb3JcbiAgICAgKiAgIGEgcmVjb25zdHJ1Y3RlZCBwYWNrZXQgb2JqZWN0IGlmIGFsbCBidWZmZXJzIGhhdmUgYmVlbiByZWNlaXZlZC5cbiAgICAgKi9cbiAgICB0YWtlQmluYXJ5RGF0YShiaW5EYXRhKSB7XG4gICAgICAgIHRoaXMuYnVmZmVycy5wdXNoKGJpbkRhdGEpO1xuICAgICAgICBpZiAodGhpcy5idWZmZXJzLmxlbmd0aCA9PT0gdGhpcy5yZWNvblBhY2suYXR0YWNobWVudHMpIHtcbiAgICAgICAgICAgIC8vIGRvbmUgd2l0aCBidWZmZXIgbGlzdFxuICAgICAgICAgICAgY29uc3QgcGFja2V0ID0gYmluYXJ5XzEucmVjb25zdHJ1Y3RQYWNrZXQodGhpcy5yZWNvblBhY2ssIHRoaXMuYnVmZmVycyk7XG4gICAgICAgICAgICB0aGlzLmZpbmlzaGVkUmVjb25zdHJ1Y3Rpb24oKTtcbiAgICAgICAgICAgIHJldHVybiBwYWNrZXQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENsZWFucyB1cCBiaW5hcnkgcGFja2V0IHJlY29uc3RydWN0aW9uIHZhcmlhYmxlcy5cbiAgICAgKi9cbiAgICBmaW5pc2hlZFJlY29uc3RydWN0aW9uKCkge1xuICAgICAgICB0aGlzLnJlY29uUGFjayA9IG51bGw7XG4gICAgICAgIHRoaXMuYnVmZmVycyA9IFtdO1xuICAgIH1cbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5oYXNCaW5hcnkgPSBleHBvcnRzLmlzQmluYXJ5ID0gdm9pZCAwO1xuY29uc3Qgd2l0aE5hdGl2ZUFycmF5QnVmZmVyID0gdHlwZW9mIEFycmF5QnVmZmVyID09PSBcImZ1bmN0aW9uXCI7XG5jb25zdCBpc1ZpZXcgPSAob2JqKSA9PiB7XG4gICAgcmV0dXJuIHR5cGVvZiBBcnJheUJ1ZmZlci5pc1ZpZXcgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgICA/IEFycmF5QnVmZmVyLmlzVmlldyhvYmopXG4gICAgICAgIDogb2JqLmJ1ZmZlciBpbnN0YW5jZW9mIEFycmF5QnVmZmVyO1xufTtcbmNvbnN0IHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbmNvbnN0IHdpdGhOYXRpdmVCbG9iID0gdHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiB8fFxuICAgICh0eXBlb2YgQmxvYiAhPT0gXCJ1bmRlZmluZWRcIiAmJlxuICAgICAgICB0b1N0cmluZy5jYWxsKEJsb2IpID09PSBcIltvYmplY3QgQmxvYkNvbnN0cnVjdG9yXVwiKTtcbmNvbnN0IHdpdGhOYXRpdmVGaWxlID0gdHlwZW9mIEZpbGUgPT09IFwiZnVuY3Rpb25cIiB8fFxuICAgICh0eXBlb2YgRmlsZSAhPT0gXCJ1bmRlZmluZWRcIiAmJlxuICAgICAgICB0b1N0cmluZy5jYWxsKEZpbGUpID09PSBcIltvYmplY3QgRmlsZUNvbnN0cnVjdG9yXVwiKTtcbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIG9iaiBpcyBhIEJ1ZmZlciwgYW4gQXJyYXlCdWZmZXIsIGEgQmxvYiBvciBhIEZpbGUuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gaXNCaW5hcnkob2JqKSB7XG4gICAgcmV0dXJuICgod2l0aE5hdGl2ZUFycmF5QnVmZmVyICYmIChvYmogaW5zdGFuY2VvZiBBcnJheUJ1ZmZlciB8fCBpc1ZpZXcob2JqKSkpIHx8XG4gICAgICAgICh3aXRoTmF0aXZlQmxvYiAmJiBvYmogaW5zdGFuY2VvZiBCbG9iKSB8fFxuICAgICAgICAod2l0aE5hdGl2ZUZpbGUgJiYgb2JqIGluc3RhbmNlb2YgRmlsZSkpO1xufVxuZXhwb3J0cy5pc0JpbmFyeSA9IGlzQmluYXJ5O1xuZnVuY3Rpb24gaGFzQmluYXJ5KG9iaiwgdG9KU09OKSB7XG4gICAgaWYgKCFvYmogfHwgdHlwZW9mIG9iaiAhPT0gXCJvYmplY3RcIikge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChBcnJheS5pc0FycmF5KG9iaikpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBvYmoubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaGFzQmluYXJ5KG9ialtpXSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChpc0JpbmFyeShvYmopKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAob2JqLnRvSlNPTiAmJlxuICAgICAgICB0eXBlb2Ygb2JqLnRvSlNPTiA9PT0gXCJmdW5jdGlvblwiICYmXG4gICAgICAgIGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgcmV0dXJuIGhhc0JpbmFyeShvYmoudG9KU09OKCksIHRydWUpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IGtleSBpbiBvYmopIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkgJiYgaGFzQmluYXJ5KG9ialtrZXldKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuZXhwb3J0cy5oYXNCaW5hcnkgPSBoYXNCaW5hcnk7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBhbHBoYWJldCA9ICcwMTIzNDU2Nzg5QUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ei1fJy5zcGxpdCgnJylcbiAgLCBsZW5ndGggPSA2NFxuICAsIG1hcCA9IHt9XG4gICwgc2VlZCA9IDBcbiAgLCBpID0gMFxuICAsIHByZXY7XG5cbi8qKlxuICogUmV0dXJuIGEgc3RyaW5nIHJlcHJlc2VudGluZyB0aGUgc3BlY2lmaWVkIG51bWJlci5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gbnVtIFRoZSBudW1iZXIgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIG51bWJlci5cbiAqIEBhcGkgcHVibGljXG4gKi9cbmZ1bmN0aW9uIGVuY29kZShudW0pIHtcbiAgdmFyIGVuY29kZWQgPSAnJztcblxuICBkbyB7XG4gICAgZW5jb2RlZCA9IGFscGhhYmV0W251bSAlIGxlbmd0aF0gKyBlbmNvZGVkO1xuICAgIG51bSA9IE1hdGguZmxvb3IobnVtIC8gbGVuZ3RoKTtcbiAgfSB3aGlsZSAobnVtID4gMCk7XG5cbiAgcmV0dXJuIGVuY29kZWQ7XG59XG5cbi8qKlxuICogUmV0dXJuIHRoZSBpbnRlZ2VyIHZhbHVlIHNwZWNpZmllZCBieSB0aGUgZ2l2ZW4gc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgVGhlIHN0cmluZyB0byBjb252ZXJ0LlxuICogQHJldHVybnMge051bWJlcn0gVGhlIGludGVnZXIgdmFsdWUgcmVwcmVzZW50ZWQgYnkgdGhlIHN0cmluZy5cbiAqIEBhcGkgcHVibGljXG4gKi9cbmZ1bmN0aW9uIGRlY29kZShzdHIpIHtcbiAgdmFyIGRlY29kZWQgPSAwO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICBkZWNvZGVkID0gZGVjb2RlZCAqIGxlbmd0aCArIG1hcFtzdHIuY2hhckF0KGkpXTtcbiAgfVxuXG4gIHJldHVybiBkZWNvZGVkO1xufVxuXG4vKipcbiAqIFllYXN0OiBBIHRpbnkgZ3Jvd2luZyBpZCBnZW5lcmF0b3IuXG4gKlxuICogQHJldHVybnMge1N0cmluZ30gQSB1bmlxdWUgaWQuXG4gKiBAYXBpIHB1YmxpY1xuICovXG5mdW5jdGlvbiB5ZWFzdCgpIHtcbiAgdmFyIG5vdyA9IGVuY29kZSgrbmV3IERhdGUoKSk7XG5cbiAgaWYgKG5vdyAhPT0gcHJldikgcmV0dXJuIHNlZWQgPSAwLCBwcmV2ID0gbm93O1xuICByZXR1cm4gbm93ICsnLicrIGVuY29kZShzZWVkKyspO1xufVxuXG4vL1xuLy8gTWFwIGVhY2ggY2hhcmFjdGVyIHRvIGl0cyBpbmRleC5cbi8vXG5mb3IgKDsgaSA8IGxlbmd0aDsgaSsrKSBtYXBbYWxwaGFiZXRbaV1dID0gaTtcblxuLy9cbi8vIEV4cG9zZSB0aGUgYHllYXN0YCwgYGVuY29kZWAgYW5kIGBkZWNvZGVgIGZ1bmN0aW9ucy5cbi8vXG55ZWFzdC5lbmNvZGUgPSBlbmNvZGU7XG55ZWFzdC5kZWNvZGUgPSBkZWNvZGU7XG5tb2R1bGUuZXhwb3J0cyA9IHllYXN0O1xuIiwiaW1wb3J0IHsgJCB9IGZyb20gJy4vY29yZS9saWIvZG9tJztcbmltcG9ydCB7IHBhcmVudHMsIGZhZGVPdXQgfSBmcm9tICcuL2NvcmUvbGliL2RvbSc7XG5pbXBvcnQgeyBwbGF5ZXJSZWYgfSBmcm9tICcuL2RhdGEnXG5cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRVSShzb2NrZXQpIHtcbiAgLy8gc3RhdHVzXG4gIGxldCBnYW1lQ3JlYXRlZCwgam9pbmVkLCBuYW1lQ29uZmlybWVkLCBnYW1lU3RhcnRlZDtcbiAgLy8gcXVlcnkgRWxlbWVudHNcbiAgbGV0IGNyZWF0ZUdhbWVCdG4gPSAkKCcjY3JlYXRlLWdhbWUnKTsgIC8vICBiaW5kRXZlbnQgOiBnYW1lQ3JlYXRlZFxuICBsZXQgc2hvd0pvaW5HYW1lUHJvbXB0QnRuID0gJCgnI3Nob3ctam9pbi1nYW1lLXByb21wdCcpOyAvLyAgYmluZEV2ZW50XG4gIGxldCBjb25maXJtSm9pbkdhbWVCdG4gPSAkKCcjY29uZmlybS1qb2luLWdhbWUnKTsgLy8gIGJpbmRFdmVudDogam9pbmVkXG4gIGxldCByb29tQ29kZUlucHV0ID0gJCgnI3Jvb20tY29kZS1pbnB1dCcpO1xuICBsZXQgcm9vbUNvZGVEaXNwbGF5ID0gJCgnI3Jvb20tY29kZS1kaXNwbGF5Jyk7XG4gIGxldCBuYW1lSW5wdXQgPSAkKCcjbmFtZS1pbnB1dCcpO1xuICBsZXQgbmFtZUNvbmZpcm0gPSAkKCcjbmFtZS1jb25maXJtJyk7IC8vICBiaW5kRXZlbnQgbmFtZUNvbmZpcm1lZFxuICBsZXQgbGVhdmVXYWl0aW5nQnRuID0gJCgnI2xlYXZlLXdhaXRpbmcnKTsgLy8gIGJpbmRFdmVudFxuICBsZXQgbGVhdmVHYW1lU3RhcnRBbGVydCA9ICQoJyNsZWF2ZS1nYW1lLXN0YXJ0LWFsZXJ0Jyk7IC8vICBiaW5kRXZlbnRcbiAgbGV0IGdhbWVTdGFydCA9ICQoJyNnYW1lLXN0YXJ0Jyk7IC8vICBiaW5kRXZlbnRcblxuICAvLyDlu7rnq4sgaW5pVUkgUHJvbWlzZSBcbiAgbGV0IGluaXRUcmlnZ2VyO1xuICBsZXQgaW5pdFVJUHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xuICAgIGluaXRUcmlnZ2VyID0gcmVzO1xuICB9KVxuXG4gIC8vLi4u5paH5a2XXG4gIHNldEludGVydmFsKCgpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1yb2xlPVwiLi4uXCJdJykuZm9yRWFjaChlbGUgPT4ge1xuICAgICAgaWYgKGVsZS5pbm5lckhUTUwubGVuZ3RoIDwgMykge1xuICAgICAgICBlbGUuaW5uZXJIVE1MICs9ICcuJ1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGVsZS5pbm5lckhUTUwgPSAnJ1xuICAgICAgfVxuICAgIH0pXG4gIH0sIDUwMClcblxuICAvL+e2geWumumXnOmWiXBvcG91dFxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbY2xvc2UtdGhpcy1wb3BvdXRdJykuZm9yRWFjaChlbGUgPT4ge1xuICAgIGxldCBwYXJlbnRQb3BvdXRzID0gcGFyZW50cyhlbGUsICcucG9wb3V0Jyk7XG4gICAgZWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdG9nZ2xlUG9wb3V0KHBhcmVudFBvcG91dHNbMF0uaWQsIGZhbHNlKTtcbiAgICB9KVxuICB9KVxuXG5cbiAgLy8g5a6j5ZGKIGZsYWcsIOebrueahOaYr+eUqOS+huWIpOWumuWIsOW6lW5hbWVQcm9tcHQg5piv5b6e5ZOq5LiA5YCL566h6YGT5Y67Y2FsbOWHuuS+hueahFxuICBsZXQgZmxhZztcblxuXG4gIC8v57aB5a6a56K66KqN6YCB5Ye65oyJ6YiV55qE6bue5pOK5LqL5Lu2XG4gIG5hbWVDb25maXJtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmIChuYW1lQ29uZmlybWVkIHx8IGdhbWVDcmVhdGVkIHx8IGpvaW5lZCkgcmV0dXJuO1xuICAgIGxldCBuYW1lID0gbmFtZUlucHV0LnZhbHVlID8gbmFtZUlucHV0LnZhbHVlIDogcGxheWVyUmVmLm5hbWU7XG4gICAgY29uZmlybU5hbWUoc29ja2V0LCBuYW1lKTtcbiAgICBpZiAoZmxhZyA9PT0gJ29uSm9pbicpIHtcbiAgICAgIHRvZ2dsZVBvcG91dCgnam9pbi1nYW1lLXByb21wdCcsIHRydWUpO1xuICAgIH1cbiAgICBlbHNlIGlmIChmbGFnID09PSAnb25DcmVhdGUnKSB7XG4gICAgICBpZiAoIWdhbWVDcmVhdGVkKSB7XG4gICAgICAgIG5ld0dhbWUoc29ja2V0KTtcbiAgICAgICAgZ2FtZUNyZWF0ZWQgPSB0cnVlO1xuICAgICAgICBqb2luZWQgPSB0cnVlO1xuICAgICAgICBuYW1lQ29uZmlybWVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG4gIH0pXG5cbiAgLy/ntoHlrprmjInpiJXpu57mk4rlvozplovllZ9uYW1lLWlucHV0LXByb21wdCA9PiBqb2luR2FtZSBwcm9tcHRcbiAgc2hvd0pvaW5HYW1lUHJvbXB0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGZsYWcgPSAnb25Kb2luJztcbiAgICB0b2dnbGVQb3BvdXQoJ25hbWUtaW5wdXQtcHJvbXB0JywgdHJ1ZSk7XG4gIH0pO1xuXG4gIC8v57aB5a6a5oyJ6YiV6bue5pOK5b6M6YCB5Ye65oOz5Y+D5Yqg55qE5oi/6ZaT56K855qE5LqL5Lu2XG4gIGNvbmZpcm1Kb2luR2FtZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAoIWpvaW5lZCkge1xuICAgICAgbGV0IHJvb21Db2RlID0gcm9vbUNvZGVJbnB1dC52YWx1ZTtcbiAgICAgIGNvbmZpcm1Kb2luR2FtZShzb2NrZXQsIHJvb21Db2RlKTtcbiAgICAgIGpvaW5lZCA9IHRydWU7XG4gICAgICBnYW1lQ3JlYXRlZCA9IHRydWU7XG4gICAgICBuYW1lQ29uZmlybWVkID0gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9KVxuXG4gIC8v57aB5a6a5oyJ6YiV6bue5pOK5b6M6ZaL5ZWfbmFtZS1pbnB1dC1wcm9tcHQgPT4gbmV3R2FtZSBwcm9tcHRcbiAgY3JlYXRlR2FtZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBmbGFnID0gJ29uQ3JlYXRlJztcbiAgICB0b2dnbGVQb3BvdXQoJ25hbWUtaW5wdXQtcHJvbXB0JywgdHJ1ZSk7XG4gIH0pO1xuXG4gIC8v57aB5a6a56ys5LiA6Zui6ZaL5oyJ6YiVXG4gIGxlYXZlV2FpdGluZ0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBzb2NrZXQuZW1pdCgnbGVhdmVXYWl0aW5nJyk7XG4gICAgZ2FtZUNyZWF0ZWQgPSBmYWxzZTtcbiAgICBqb2luZWQgPSBmYWxzZTtcbiAgICBuYW1lQ29uZmlybWVkID0gZmFsc2U7XG4gICAgdG9nZ2xlUG9wb3V0KCdyb29tLWNvZGUtZGlzcGxheS1wb3BvdXQnLCBmYWxzZSk7XG4gIH0pXG4gIC8v57aB5a6a56ys5LqM6Zui6ZaL5oyJ6YiVXG4gIGxlYXZlR2FtZVN0YXJ0QWxlcnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgc29ja2V0LmVtaXQoJ2xlYXZlU3RhcnRpbmdHYW1lJywgcGxheWVyUmVmKTtcbiAgICB0b2dnbGVQb3BvdXQoJ2dhbWUtc3RhcnQtYWxlcnQnLCBmYWxzZSk7XG4gIH0pXG5cbiAgZ2FtZVN0YXJ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmICghZ2FtZVN0YXJ0ZWQpIHtcbiAgICAgIHNvY2tldC5lbWl0KCdzdGFydE1hdGNoJyk7XG4gICAgICBnYW1lU3RhcnRlZCA9IHRydWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICB9KVxuXG4gIC8v57aB5a6a55W2c2VydmVy5YKz5L6GJ2dlblJvb21Db2RlJ+ioiuiZn+W+jO+8jHVpIOaHieeUoueUn+eahOWwjeaHieihjOeCulxuICBzb2NrZXQub24oJ2dlblJvb21Db2RlJywgKGRhdGEpID0+IHtcbiAgICByb29tQ29kZURpc3BsYXkuaW5uZXJIVE1MID0gZGF0YTtcbiAgfSlcblxuICAvL+e2geWumueVtnNlcnZlcuWCs+S+hidwbGF5ZXJKb2luZWQn6KiK6Jmf5b6M77yMdWkg5oeJ55Si55Sf55qE5bCN5oeJ6KGM54K6XG4gIHNvY2tldC5vbigncGxheWVySm9pbmVkJywgKGRhdGEpID0+IHtcbiAgICBpZiAoZGF0YS5wbGF5ZXJOdW1iZXIgPT09IDIpIHtcbiAgICAgIGlmIChwbGF5ZXJSZWYubnVtYmVyID09IDEpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtcm9sZT1cIm9wcG9uZW50XCJdJykuZm9yRWFjaChlbGUgPT4ge1xuICAgICAgICAgIGVsZS5pbm5lckhUTUwgPSBgWU9VUiBPUFBPTkVOVCAke2RhdGEucGxheWVyTmFtZX0gU0hPV1MgVVAhYFxuICAgICAgICB9KTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtcm9sZT1cInBsYXllcjJcIl0nKS5mb3JFYWNoKGVsZSA9PiB7XG4gICAgICAgICAgZWxlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICBlbHNlIGlmIChwbGF5ZXJSZWYubnVtYmVyID09IDIpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtcm9sZT1cIm9wcG9uZW50XCJdJykuZm9yRWFjaChlbGUgPT4ge1xuICAgICAgICAgIGVsZS5pbm5lckhUTUwgPSBgV0FJVElORyBGT1IgVEhFIFJPT00gSE9TVDxicj48YnI+JHtkYXRhLmhvc3ROYW1lfTxicj48YnI+VE8gQUNDRVBUIFlPVVIgQ0hBTExFTkdFPHNwYW4gZGF0YS1yb2xlPVwiLi4uXCI+PC9zcGFuPmBcbiAgICAgICAgfSk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXJvbGU9XCJwbGF5ZXIxXCJdJykuZm9yRWFjaChlbGUgPT4ge1xuICAgICAgICAgIGVsZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgdG9nZ2xlUG9wb3V0KCdyb29tLWNvZGUtZGlzcGxheS1wb3BvdXQnLCBmYWxzZSk7XG4gICAgICB0b2dnbGVQb3BvdXQoJ2pvaW4tZ2FtZS1wcm9tcHQnLCBmYWxzZSk7XG4gICAgICB0b2dnbGVQb3BvdXQoJ2dhbWUtc3RhcnQtYWxlcnQnLCB0cnVlKTtcbiAgICB9XG4gIH0pXG5cbiAgc29ja2V0Lm9uKCdob3N0LWxlYXZlJywgKGRhdGEpID0+IHtcbiAgICB0b2dnbGVQb3BvdXQoJ2dhbWUtc3RhcnQtYWxlcnQnLCBmYWxzZSk7XG4gICAgdG9nZ2xlUG9wb3V0KCdsZWF2ZS1hbGVydCcsIHRydWUpO1xuICAgIGdhbWVTdGFydGVkID0gZmFsc2U7XG4gICAgam9pbmVkID0gZmFsc2U7XG4gICAgbmFtZUNvbmZpcm1lZCA9IGZhbHNlO1xuICAgIGdhbWVDcmVhdGVkID0gZmFsc2U7XG5cbiAgICAkKCdbZGF0YS1yb2xlPVwibGVhdmUtbXNnXCJdJykuaW5uZXJIVE1MID0gYEhPU1QgJHtkYXRhLmhvc3R9IExFRlQgQU5EIFNIVVRET1dOIFRIRSBST09NLmBcbiAgfSlcblxuICBzb2NrZXQub24oJ2NoYWxsZW5nZXItbGVhdmUnLCAoZGF0YSkgPT4ge1xuICAgIHRvZ2dsZVBvcG91dCgnZ2FtZS1zdGFydC1hbGVydCcsIGZhbHNlKTtcbiAgICB0b2dnbGVQb3BvdXQoJ2xlYXZlLWFsZXJ0JywgdHJ1ZSk7XG4gICAgdG9nZ2xlUG9wb3V0KCdyb29tLWNvZGUtZGlzcGxheS1wb3BvdXQnLCB0cnVlKTtcbiAgICBnYW1lU3RhcnRlZCA9IGZhbHNlO1xuICAgIGpvaW5lZCA9IGZhbHNlO1xuICAgIG5hbWVDb25maXJtZWQgPSBmYWxzZTtcbiAgICBnYW1lQ3JlYXRlZCA9IGZhbHNlO1xuXG4gICAgJCgnW2RhdGEtcm9sZT1cImxlYXZlLW1zZ1wiXScpLmlubmVySFRNTCA9IGBDSEFMTEVOR0VSICR7ZGF0YS5jaGFsbGVuZ2VyfSBMRUZUIFRISVMgTUFUQ0guYFxuICB9KVxuXG4gIHNvY2tldC5vbignbGVhdmUnLCAoKSA9PiB7XG4gICAgZ2FtZVN0YXJ0ZWQgPSBmYWxzZTtcbiAgICBqb2luZWQgPSBmYWxzZTtcbiAgICBuYW1lQ29uZmlybWVkID0gZmFsc2U7XG4gICAgZ2FtZUNyZWF0ZWQgPSBmYWxzZTtcbiAgfSlcblxuICAvL+e2geWumueVtnNlcnZlcuWCs+S+hidnYW1lSW5pdCfoqIromZ/lvozvvIx1aSDmh4nnlKLnlJ/nmoTlsI3mh4nooYzngrpcbiAgc29ja2V0Lm9uKCdnYW1lSW5pdCcsICgpID0+IHtcbiAgICB0b2dnbGVQb3BvdXQoJ2dhbWUtc3RhcnQtYWxlcnQnLCBmYWxzZSk7XG4gIH0pXG5cblxuICAvLyDop7jnmbwgcHJvbWlzZSBmdWxsZmlsbOapn+WItlxuICBpbml0VHJpZ2dlcigpO1xuXG4gIC8vIOWbnuWCsyBmdWxsZmlsbOW+jOeahHByb21pc2VcbiAgcmV0dXJuIGluaXRVSVByb21pc2U7XG59XG5cbi8qKlxuICog6ZaL5ZWfIHBvcG91dFxuICpcbiAqIEBwYXJhbSB7Kn0gaWRcbiAqIEBwYXJhbSB7Kn0gc3RhdHVzXG4gKi9cbmZ1bmN0aW9uIHRvZ2dsZVBvcG91dChpZCwgc3RhdHVzKSB7XG4gIGxldCBwb3BvdXQgPSAkKGAucG9wb3V0IyR7aWR9YCk7XG4gIGlmIChzdGF0dXMpIHtcbiAgICBwb3BvdXQuY2xhc3NMaXN0LmFkZCgncG9wb3V0LS1zaG93Jyk7XG4gIH1cbiAgZWxzZSB7XG4gICAgcG9wb3V0LmNsYXNzTGlzdC5yZW1vdmUoJ3BvcG91dC0tc2hvdycpO1xuICB9XG59XG4vKipcbiAqIOmaseiXj+i1t+Wni+eVq+mdolxuICpcbiAqL1xuZnVuY3Rpb24gaGlkZUluaXRpYWxTY3JlZW4oKSB7XG4gIGxldCBpbml0aWFsU2NyZWVuID0gJCgnI2luaXRpYWwtc2NyZWVuJyk7XG4gIGluaXRpYWxTY3JlZW4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn1cbi8qKlxuICogIOmWi+mXnOWFt+aciWhpZGUtb24tYWN0aW9u5bGs5oCn55qEdWkgZWxlbWVudCxcbiAqXG4gKiBAcGFyYW0geyp9IHN0YXR1c1xuICovXG5mdW5jdGlvbiB0b2dnbGVIaWRlT25BY3Rpb24oc3RhdHVzKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1toaWRlLW9uLWFjdGlvbl0nKS5mb3JFYWNoKGVsZSA9PiB7XG4gICAgZWxlLnNldEF0dHJpYnV0ZSgnaGlkZS1vbi1hY3Rpb24nLCBzdGF0dXMgPyAnJyA6ICdoaWRlJyk7XG4gIH0pXG59XG4vKipcbiAqIOmWi+mXnOWFt+aciXNob3ctb24tZnVsbOWxrOaAp+eahHVpIGVsZW1lbnQsXG4gKlxuICogQHBhcmFtIHsqfSBzdGF0dXNcbiAqL1xuZnVuY3Rpb24gdG9nZ2xlU2hvd09uQWN0aW9uKHN0YXR1cykge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbc2hvdy1vbi1hY3Rpb25dJykuZm9yRWFjaChlbGUgPT4ge1xuICAgIGVsZS5zZXRBdHRyaWJ1dGUoJ3Nob3ctb24tYWN0aW9uJywgc3RhdHVzID8gJycgOiAnaGlkZScpO1xuICB9KVxufVxuXG5cbi8qKlxuICog5bu656uL5paw6YGK5oiyXG4gKlxuICogQHBhcmFtIHsqfSBzb2NrZXRcbiAqL1xuZnVuY3Rpb24gbmV3R2FtZShzb2NrZXQpIHtcbiAgcGxheWVyUmVmLm51bWJlciA9IDE7XG4gIHRvZ2dsZVBvcG91dCgncm9vbS1jb2RlLWRpc3BsYXktcG9wb3V0JywgdHJ1ZSk7XG4gIHNvY2tldC5lbWl0KCduZXdHYW1lJyk7XG59XG4vKipcbiAqIOWQkXNlcnZlcueZvOWHuueiuuiqjeWPg+WKoOmBiuaIsueahOS/oeiZn1xuICpcbiAqIEBwYXJhbSB7Kn0gc29ja2V0XG4gKiBAcGFyYW0geyp9IHJvb21Db2RlXG4gKi9cbmZ1bmN0aW9uIGNvbmZpcm1Kb2luR2FtZShzb2NrZXQsIHJvb21Db2RlKSB7XG4gIHBsYXllclJlZi5udW1iZXIgPSAyO1xuICBzb2NrZXQuZW1pdCgnam9pbkdhbWUnLCByb29tQ29kZSk7XG59XG4vKipcbiAqIFxuICog56K66KqN6Ly45YWl55qE5pqx56ix5b6M77yM5oqK6YGK5oiy5YWn5omA5pyJZGF0YS1yb2xlPVwibmFtZVwiIOeahCBlbGVtZW50LCDlhaflrrnpg73mj5vmiJDovLjlhaXnmoRuYW1lLCDkuKblkIzmmYLlkJFzZXJ2ZXLnmbzpgIEnbmFtZUNvbmZpcm0n55qE6KiK6JmfXG4gKiDmnIDlvozpl5zploluYW1lLWlucHV0LXByb21wdFxuICogQHBhcmFtIHsqfSBzb2NrZXRcbiAqIEBwYXJhbSB7Kn0gbmFtZVxuICogQHBhcmFtIHsqfSBjYlxuICovXG5mdW5jdGlvbiBjb25maXJtTmFtZShzb2NrZXQsIG5hbWUsIGNiKSB7XG4gIHBsYXllclJlZi5uYW1lID0gbmFtZTtcbiAgc29ja2V0LmVtaXQoJ25hbWVDb25maXJtJywgbmFtZSk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLXJvbGU9XCJuYW1lXCJdYCkuZm9yRWFjaCgobywgaSkgPT4ge1xuICAgIG8uaW5uZXJIVE1MID0gbmFtZTtcbiAgfSlcbiAgdG9nZ2xlUG9wb3V0KCduYW1lLWlucHV0LXByb21wdCcsIGZhbHNlKTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRDb3VudGluZyhjYikge1xuICBsZXQgZ2MgPSAkKCcjZ2FtZS1zdGFydC1jb3VudGluZycpO1xuICBnYy5jbGFzc0xpc3QuYWRkKCdnYW1lLXN0YXJ0LWNvdW50aW5nLS1zaG93Jyk7XG4gIGxldCBudW1iZXIgPSBnYy5xdWVyeVNlbGVjdG9yKCcuZ2FtZS1zdGFydC1jb3VudGluZ19fbnVtYmVyJyk7XG4gIG51bWJlci5pbm5lckhUTUwgPSAzO1xuICBsZXQgdGltZUludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgIGlmIChwYXJzZUludChudW1iZXIuaW5uZXJIVE1MKSA+IDApIHtcbiAgICAgIG51bWJlci5pbm5lckhUTUwgPSBwYXJzZUludChudW1iZXIuaW5uZXJIVE1MKSAtIDE7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lSW50ZXJ2YWwpO1xuICAgICAgZmFkZU91dChnYywgMTAwMCwgKCkgPT4ge1xuICAgICAgICBnYy5jbGFzc0xpc3QucmVtb3ZlKCdnYW1lLXN0YXJ0LWNvdW50aW5nLS1zaG93Jyk7XG4gICAgICB9KVxuICAgICAgY2IoKTtcbiAgICB9XG4gIH0sIDEwMDApXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgaW5pdFVJLCBzdGFydENvdW50aW5nIH0gZnJvbSAnLi91aSc7XG5pbXBvcnQgeyBpbml0U3BsYXNoIH0gZnJvbSAnLi9jb3JlL3NwbGFzaCc7XG5pbXBvcnQgeyBnYW1lQnVpbGRlciB9IGZyb20gJy4vY29yZS9nYW1lJztcblxuXG5jb25zdCBzb2NrZXQgPSByZXF1aXJlKCdzb2NrZXQuaW8tY2xpZW50JykoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCcpO1xuXG5sZXQgc3BsYXNoU3dpdGNoZXI7XG5sZXQgc3BsYXNoUHJvbWlzZSA9IGluaXRTcGxhc2goKTtcbnNwbGFzaFByb21pc2UudGhlbigoc3dpdGNoZXIpID0+IHtcbiAgc3BsYXNoU3dpdGNoZXIgPSBzd2l0Y2hlcjtcbn0pXG5cbmxldCB1aUluaXRQcm9taXNlID0gaW5pdFVJKHNvY2tldCk7XG5sZXQgZ2FtZSA9IGdhbWVCdWlsZGVyKCk7XG5sZXQgZ2FtZUNvbnRvbGxlcjtcblxudWlJbml0UHJvbWlzZS50aGVuKCgpID0+IHtcbiAgZ2FtZS50cmlnZ2VyKCk7XG59KVxuXG5nYW1lLnByb21pc2UudGhlbigoaW5zdGFuY2UpID0+IHtcbiAgZ2FtZUNvbnRvbGxlciA9IGluc3RhbmNlO1xuICB3aW5kb3cua2sgPSAoKSA9PiB7XG4gICAgZ2FtZUNvbnRvbGxlci5jdnMuY2xhc3NMaXN0LmFkZCgncHJvbW90ZWQnKTtcbiAgICBsZXQgZ2FtZVJlYWR5UHJvbWlzZSA9IGdhbWVDb250b2xsZXIuZHJhd0dhbWUoKTtcbiAgICBnYW1lUmVhZHlQcm9taXNlLnRoZW4oKCkgPT4ge1xuICAgICAgc3BsYXNoU3dpdGNoZXIoZmFsc2UpO1xuICAgIH0pXG4gIH1cblxufSlcblxuc29ja2V0Lm9uKCdnYW1lSW5pdCcsICgpID0+IHtcbiAgc3RhcnRDb3VudGluZygoKSA9PiB7XG4gICAgZ2FtZUNvbnRvbGxlci5jdnMuY2xhc3NMaXN0LmFkZCgncHJvbW90ZWQnKTtcbiAgICBsZXQgZ2FtZVJlYWR5UHJvbWlzZSA9IGdhbWVDb250b2xsZXIuZHJhd0dhbWUoKTtcbiAgICBnYW1lUmVhZHlQcm9taXNlLnRoZW4oKCkgPT4ge1xuICAgICAgc3BsYXNoU3dpdGNoZXIoZmFsc2UpO1xuICAgIH0pXG4gIH0pXG59KVxuXG5zb2NrZXQub24oJ2hvc3QtbGVhdmUnLCAoKSA9PiB7XG4gIGdhbWVDb250b2xsZXIuY3ZzLmNsYXNzTGlzdC5yZW1vdmUoJ3Byb21vdGVkJyk7XG59KVxuXG5zb2NrZXQub24oJ2NoYWxsZW5nZXItbGVhdmUnLCAoKSA9PiB7XG4gIGdhbWVDb250b2xsZXIuY3ZzLmNsYXNzTGlzdC5yZW1vdmUoJ3Byb21vdGVkJyk7XG59KVxuXG5zb2NrZXQub24oJ2xlYXZlJywgKCkgPT4ge1xuICBnYW1lQ29udG9sbGVyLmN2cy5jbGFzc0xpc3QucmVtb3ZlKCdwcm9tb3RlZCcpO1xufSlcblxuc29ja2V0Lm9uKCd0b29NYW55UGxheWVycycsICgpID0+IHtcbiAgYWxlcnQoJ1Jvb20gSXMgRnVsbCBOb3cnKTtcbn0pXG5cbnNvY2tldC5vbigndW5rbm93bkNvZGUnLCAoKSA9PiB7XG4gIGFsZXJ0KCdJbmNvcnJlY3QgUm9vbSBDb2RlJyk7XG59KVxuXG5zb2NrZXQub24oJ2hvc3RDYW50QmVHdWVzdCcsICgpID0+IHtcbiAgYWxlcnQoXCJZb3UgQ2FuJ3QgSm9pbiBUaGUgR2FtZSBZb3UgQXJlIEhvc3RpbmdcIik7XG59KVxuXG5cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=