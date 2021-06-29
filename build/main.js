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
/* harmony import */ var _lib_function__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/function */ "./core/lib/function.js");
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

    _this.fps = 30;
    _this.courtOffset = 65;
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
      this.starSky = this.genStarSky();
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
    value: function responsivePainter(targetLayer, sourceCanvas, initialImage) {
      var offset = this.courtOffset;
      targetLayer.ctx.save(); //畫court 會有四種狀況, (canvas長寬>預設長寬比>1) | (1<=canvas長寬<預設長寬比) | (預設長寬比倒數<canvas長寬比<1) ｜ (canvas長寬比<預設長寬比倒數<1)

      if (this.getAspectRatio() >= 1) {
        // 這邊是前兩種狀況
        //先清除一次之後畫initialImage , 再畫court
        targetLayer.clear();
        var typeA = (targetLayer.cvs.height - 2 * offset) * this.config.courtAspectRatio < targetLayer.cvs.width - 2 * offset;
        var offsetV, offsetH, courtHeight, courtWidth;

        if (typeA) {
          // 先算出縮減過offset 的cvs 寬
          offsetV = offset;
          courtHeight = targetLayer.cvs.height - 2 * offset;
          courtWidth = courtHeight * this.config.courtAspectRatio;
          offsetH = (targetLayer.cvs.width - courtWidth) / 2;
        } else {
          // 非typeA的狀況, 也就是canvas寬高比低於config 設定的比例
          offsetH = offset;
          courtWidth = targetLayer.cvs.width - 2 * offset;
          courtHeight = courtWidth / this.config.courtAspectRatio;
          offsetV = (targetLayer.cvs.height - courtHeight) / 2;
        }

        if (initialImage) {
          targetLayer.ctx.drawImage(initialImage, 0, 0, initialImage.width, initialImage.height, 0, 0, targetLayer.cvs.width, targetLayer.cvs.height);
        } // 先旋轉畫布, 因為 virtualcanvas 是一張垂直的畫布


        targetLayer.ctx.translate(targetLayer.cvs.width / 2, targetLayer.cvs.height / 2);
        targetLayer.ctx.rotate(Math.PI / 2);
        targetLayer.ctx.translate(-targetLayer.cvs.height / 2, -targetLayer.cvs.width / 2); // 因為court 的大小會隨著canvas 的長寬比而變動
        // 這邊先 假設今天是canvas 寬比高超出很多的情況 , 也就是狀況"typeA"

        targetLayer.ctx.drawImage(sourceCanvas, 0, 0, sourceCanvas.width, sourceCanvas.height, offsetV, offsetH, courtHeight, courtWidth);
      } else {
        //這邊是後兩種狀況
        // 因為court 的大小會隨著canvas 的長寬比而變動
        // 這邊先 假設今天是canvas 高比寬比超出很多的情況 , 也就是狀況"typeA"
        var _typeA = (targetLayer.cvs.width - 2 * offset) * this.config.courtAspectRatio < targetLayer.cvs.height - 2 * offset;

        var _offsetV, _offsetH, _courtHeight, _courtWidth;

        if (_typeA) {
          // 先算出縮減過offset 的cvs 寬
          _offsetH = offset;
          _courtWidth = targetLayer.cvs.width - 2 * offset;
          _courtHeight = _courtWidth * this.config.courtAspectRatio;
          _offsetV = (targetLayer.cvs.height - _courtHeight) / 2;
        } else {
          // 非typeA的狀況, 也就是canvas寬高比低於config 設定的比例
          _offsetV = offset;
          _courtHeight = targetLayer.cvs.height - 2 * offset;
          _courtWidth = _courtHeight / this.config.courtAspectRatio;
          _offsetH = (targetLayer.cvs.width - _courtWidth) / 2;
        }

        if (initialImage) {
          targetLayer.ctx.drawImage(initialImage, 0, 0, initialImage.width, initialImage.height, 0, 0, targetLayer.cvs.width, targetLayer.cvs.height);
        }

        targetLayer.ctx.drawImage(sourceCanvas, 0, 0, sourceCanvas.width, sourceCanvas.height, _offsetH, _offsetV, _courtWidth, _courtHeight);
      }

      targetLayer.ctx.restore();
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
            _this4.responsivePainter(_this4, courtCanvasInstance.cvs, court.initialImage);
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
            _this4.responsivePainter(_this4, courtCanvasInstance.cvs, court.initialImage);

            res();
          });
        }
      };
      return court;
    }
  }, {
    key: "genStarSky",
    value: function genStarSky() {
      var starSkyCanvasInstance = this.starSkyCanvasInstance = this.addNewLayer();
      return new _lib_animation__WEBPACK_IMPORTED_MODULE_1__.StarSky(starSkyCanvasInstance.ctx);
    }
  }, {
    key: "genPlayers",
    value: function genPlayers() {
      var _this5 = this;

      var widthPram = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
      var gapRatio = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.05;
      var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'white';
      var thickness = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 20;
      var playersCanvasInstance = this.playersCanvasInstance = this.addNewLayer();
      var playersVirtualCanvasInstance = this.playersVirtualCanvasInstance = this.createVirtualCanvasBaseInstance();
      playersVirtualCanvasInstance.setCanvasSize(this.courtCanvasInstance.cvs.width, this.courtCanvasInstance.cvs.height);

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
          var interval = setInterval(function () {
            if (opacity >= 1) {
              clearInterval(interval);
              trigger();
            }

            for (var _i = 0; _i < _data__WEBPACK_IMPORTED_MODULE_3__.playersData.length; _i++) {
              (0,_lib_shape__WEBPACK_IMPORTED_MODULE_4__.drawRect)(playersVirtualCanvasInstance.ctx, _data__WEBPACK_IMPORTED_MODULE_3__.playersData[_i].position.x, _data__WEBPACK_IMPORTED_MODULE_3__.playersData[_i].position.y, _data__WEBPACK_IMPORTED_MODULE_3__.playersData[_i].width, thickness, color, opacity);
            }

            _this5.responsivePainter(playersCanvasInstance, playersVirtualCanvasInstance.cvs);

            opacity += 0.01;
          }, _this5.fps);
          return promise;
        },
        loopUpdate: function loopUpdate() {
          var interval = setInterval(function () {
            playersVirtualCanvasInstance.clear();

            for (var _i2 = 0; _i2 < _data__WEBPACK_IMPORTED_MODULE_3__.playersData.length; _i2++) {
              (0,_lib_shape__WEBPACK_IMPORTED_MODULE_4__.drawRect)(playersVirtualCanvasInstance.ctx, _data__WEBPACK_IMPORTED_MODULE_3__.playersData[_i2].position.x, _data__WEBPACK_IMPORTED_MODULE_3__.playersData[_i2].position.y, _data__WEBPACK_IMPORTED_MODULE_3__.playersData[_i2].width, thickness, color, 1);
            }

            _this5.responsivePainter(playersCanvasInstance, playersVirtualCanvasInstance.cvs);
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
      this.starSky.animate();
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
      var _this5 = this;

      var number = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;

      var _loop = function _loop(i) {
        var star = {
          x: (0,_function__WEBPACK_IMPORTED_MODULE_0__.randomWithinRange)(0, _this5.cvs.width),
          y: (0,_function__WEBPACK_IMPORTED_MODULE_0__.randomWithinRange)(0, _this5.cvs.height),
          color: "rgba(255,255,255,".concat((0,_function__WEBPACK_IMPORTED_MODULE_0__.randomWithinRange)(0.25, 1), ")"),
          size: (0,_function__WEBPACK_IMPORTED_MODULE_0__.randomWithinRange)(2, 5),
          twinkle: function twinkle() {
            star.color = "rgba(255,255,255,".concat((0,_function__WEBPACK_IMPORTED_MODULE_0__.randomWithinRange)(0.25, 1), ")");
          }
        };

        _this5.stars.push(star);
      };

      for (var i = 0; i < number; i++) {
        _loop(i);
      }
    }
  }, {
    key: "animate",
    value: function animate() {
      var _this6 = this;

      var draw = function draw() {
        _this6.ctx.clearRect(0, 0, _this6.cvs.width, _this6.cvs.height);

        for (var i = 0; i < _this6.stars.length; i++) {
          _this6.stars[i].twinkle();

          (0,_shape__WEBPACK_IMPORTED_MODULE_2__.drawCircle)(_this6.ctx, _this6.stars[i].x, _this6.stars[i].y, _this6.stars[i].size, _this6.stars[i].color);
        }
      };

      setInterval(draw, 500);
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
    this.layers = [];

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
        this.layersContainer = document.createElement('div');
        this.layersContainer.classList.add('layers-container');
        this.layersContainer.appendChild(cvs);
        this.ele.appendChild(this.layersContainer);
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
  }, {
    key: "addNewLayer",
    value: function addNewLayer() {
      var cvs = document.createElement('canvas');
      cvs.style.position = 'absolute';
      var parentPosition = window.getComputedStyle(this.cvs.parentNode).getPropertyValue('position');

      if (parentPosition === 'static') {
        this.cvs.parentNode.style.position = 'relative';
      }

      this.cvs.parentNode.insertBefore(cvs, this.cvs);
      var cvsInstance = new Canvas2DFxBase(cvs, {}, {}, this.ele);
      this.layers.push(cvsInstance);
      return cvsInstance;
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

  window.go = function () {
    gameContoller.layersContainer.classList.add('promoted');
    var gameReadyPromise = gameContoller.drawGame();
    gameReadyPromise.then(function () {
      splashSwitcher(false);
    });
  };
});
socket.on('gameInit', function () {
  (0,_ui__WEBPACK_IMPORTED_MODULE_0__.startCounting)(function () {
    gameContoller.layersContainer.classList.add('promoted');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vY29yZS9nYW1lLmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9jb3JlL2xpYi9hbmltYXRpb24uanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL2NvcmUvbGliL2Jhc2UuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL2NvcmUvbGliL2RvbS5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vY29yZS9saWIvZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL2NvcmUvbGliL3NoYXBlLmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9jb3JlL2xpYi91dGlsLmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9jb3JlL3NwbGFzaC5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vZGF0YS5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL2JhY2tvMi9pbmRleC5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL2Jhc2U2NC1hcnJheWJ1ZmZlci9saWIvYmFzZTY0LWFycmF5YnVmZmVyLmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvY29tcG9uZW50LWVtaXR0ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9kZWJ1Zy9ub2RlX21vZHVsZXMvbXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9kZWJ1Zy9zcmMvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL2RlYnVnL3NyYy9jb21tb24uanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2xpYi9nbG9iYWxUaGlzLmJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvbGliL3NvY2tldC5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvbGliL3RyYW5zcG9ydC5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvbGliL3RyYW5zcG9ydHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2xpYi90cmFuc3BvcnRzL3BvbGxpbmctanNvbnAuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2xpYi90cmFuc3BvcnRzL3BvbGxpbmcteGhyLmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9saWIvdHJhbnNwb3J0cy9wb2xsaW5nLmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9saWIvdHJhbnNwb3J0cy93ZWJzb2NrZXQtY29uc3RydWN0b3IuYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvbGliL3RyYW5zcG9ydHMvd2Vic29ja2V0LmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9saWIvdXRpbC5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvbGliL3htbGh0dHByZXF1ZXN0LmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLXBhcnNlci9saWIvY29tbW9ucy5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1wYXJzZXIvbGliL2RlY29kZVBhY2tldC5icm93c2VyLmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLXBhcnNlci9saWIvZW5jb2RlUGFja2V0LmJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tcGFyc2VyL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL2hhcy1jb3JzL2luZGV4LmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvbWVyc2VubmUtdHdpc3Rlci9zcmMvbWVyc2VubmUtdHdpc3Rlci5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL3BhcnNlcXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9wYXJzZXVyaS9pbmRleC5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4uL3NyYy9wYXJzZS1wYXRoLmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi4vc3JjL3BhdGgyZC1wb2x5ZmlsbC5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1jbGllbnQvYnVpbGQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tY2xpZW50L2J1aWxkL21hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tY2xpZW50L2J1aWxkL29uLmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLWNsaWVudC9idWlsZC9zb2NrZXQuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tY2xpZW50L2J1aWxkL3R5cGVkLWV2ZW50cy5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1jbGllbnQvYnVpbGQvdXJsLmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLXBhcnNlci9kaXN0L2JpbmFyeS5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1wYXJzZXIvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1wYXJzZXIvZGlzdC9pcy1iaW5hcnkuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy95ZWFzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vdWkuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9pbmRleC5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vc3JjL3Njc3MvbWFpbi5zY3NzIl0sIm5hbWVzIjpbIkRFRkFVTFQiLCJiZ0NvbG9yIiwiY291cnRDb2xvciIsImNvdXJ0QXNwZWN0UmF0aW8iLCJFbmdpbmUiLCJlbGUiLCJkZWZhdWx0Q29uZmlnIiwiY29uZmlnIiwicGl4ZWxCYXNlIiwiaW5pdCIsImZwcyIsImNvdXJ0T2Zmc2V0IiwiZ2FtZVN0YXR1cyIsInBhdXNlIiwiY3VydGFpbiIsImdlbkN1cnRhaW4iLCJjb3VydCIsImdlbkNvdXJ0Iiwic3RhclNreSIsImdlblN0YXJTa3kiLCJwbGF5ZXJzIiwiZ2VuUGxheWVycyIsInNjb3JlYm9hcmRzIiwiZ2VuU2NvcmVib2FyZHMiLCJiYWxsIiwiZ2VuQmFsbCIsImluaXRSZXNpemVkIiwicmVzaXplZENhbGxiYWNrIiwiZHJhd1N0YXRpYyIsInRoZW4iLCJiYWNrZ3JvdW5kIiwiYmFuZFdpZHRoIiwiY3VydGFpbkNhbnZhc0luc3RhbmNlIiwiY3JlYXRlVmlydHVhbENhbnZhc0Jhc2VJbnN0YW5jZSIsInNldENhbnZhc1NpemUiLCJjdnMiLCJ3aWR0aCIsImhlaWdodCIsImN1cnRhaW5BbmltYXRpb25JbnN0YW5jZSIsIlN3aXJsOEJpdCIsImN0eCIsImFuaW1hdGUiLCJpbml0aWFsSW1hZ2UiLCJnZXRDYWNoZUNhbnZhcyIsInByb21pc2UiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXIiLCJkcmF3SW1hZ2UiLCJQcm9taXNlIiwicmVzIiwic2V0VGltZW91dCIsImNsZWFySW50ZXJ2YWwiLCJ0cmlnZ2VyIiwicmVqIiwic3RhdGljSW1hZ2UiLCJ0YXJnZXRMYXllciIsInNvdXJjZUNhbnZhcyIsIm9mZnNldCIsInNhdmUiLCJnZXRBc3BlY3RSYXRpbyIsInR5cGVBIiwib2Zmc2V0ViIsIm9mZnNldEgiLCJjb3VydEhlaWdodCIsImNvdXJ0V2lkdGgiLCJ0cmFuc2xhdGUiLCJyb3RhdGUiLCJNYXRoIiwiUEkiLCJyZXN0b3JlIiwic3Ryb2tlV2lkdGgiLCJjb3VydENhbnZhc0luc3RhbmNlIiwiY291cnRDYW52YXNXaWR0aCIsImNvdXJ0Q2FudmFzSGVpZ2h0IiwidmVydGljZXMiLCJ4IiwieSIsInN0cm9rZUFuaW1hdGlvbkluc3RhbmNlIiwiU3Ryb2tlQW5pbWF0aW9uIiwicmVzcG9uc2l2ZVBhaW50ZXIiLCJzdGFyU2t5Q2FudmFzSW5zdGFuY2UiLCJhZGROZXdMYXllciIsIlN0YXJTa3kiLCJ3aWR0aFByYW0iLCJnYXBSYXRpbyIsImNvbG9yIiwidGhpY2tuZXNzIiwicGxheWVyc0NhbnZhc0luc3RhbmNlIiwicGxheWVyc1ZpcnR1YWxDYW52YXNJbnN0YW5jZSIsImkiLCJwbGF5ZXJzRGF0YSIsInBvc2l0aW9uIiwicmVhZHkiLCJvcGFjaXR5IiwiZHJhd1JlY3QiLCJsb29wVXBkYXRlIiwic2NvcmVib2FyZHNDYW52YXNJbnN0YW5jZSIsImJhbGxDYW52YXNJbnN0YW5jZSIsInBsYXllcnNSZWFkeSIsImFsbFJlYWR5UHJvbWlzZSIsImFsbCIsImdhbWVSZWFkeVByb21pc2UiLCJpbml0R2FtZURhdGFVcGRhdGVJbnRlcnZhbCIsIkNhbnZhczJERnhCYXNlIiwiZ2FtZUJ1aWxkZXIiLCJnYW1lIiwiYm9vdCIsImRvY3VtZW50IiwiYm9keSIsImNvdW50ZXJDbG9ja3dpc2VBcnIiLCJuYW1lIiwiY2xvY2t3aXNlQXJyIiwiY2FudmFzIiwiYW5pbWF0aW9uRW5kVHJpZ2dlciIsIm9yZGVyIiwicGF0aCIsIlBhdGgyRCIsImJhbmRXaWR0aFN0YWNrIiwiY2xvY2t3aXNlIiwidG90YWxXaWR0aCIsInRvdGFsSGVpZ2h0IiwiZGlyZWN0aW9uQXJyIiwibG9jYXRpb24iLCJhbmltYXRpb25Qcm9taXNlIiwiZHJhd1N3aXJsIiwiYWRkUGF0aCIsImRyYVdSYW5kb21BbmdsZWRCYW5kUGF0aCIsImdldFN0YXJ0TG9jYXRpb24iLCJmaWxsIiwicG9pbnQiLCJkcmF3QW5nbGVkQmFuZEZyb21UTCIsImRyYXdBbmdsZWRCYW5kRnJvbUJMIiwiZHJhd0FuZ2xlZEJhbmRGcm9tQlIiLCJkcmF3QW5nbGVkQmFuZEZyb21UUiIsIm1vdmVUbyIsInJhbmRvbUhlaWdodCIsInJhbmRvbVdpdGhpblJhbmdlIiwibGluZVRvIiwicmFuZG9tV2lkdGgiLCJ3YXlwb2ludHMiLCJjYWxjV2F5cG9pbnRzIiwiZmxpY2tlciIsImRhc2giLCJnbG93aW5nIiwiZ2xvd2luZ1NpemUiLCJsb29waW5nRHJhd1N0cm9rZSIsImNvdW50ZXIiLCIkdGhpcyIsImxpbmVDYXAiLCJsZW5ndGgiLCJzZXRMaW5lRGFzaCIsInN0cm9rZVN0eWxlIiwibGluZVdpZHRoIiwic2hhZG93Q29sb3IiLCJzaGFkb3dCbHVyIiwiZmxpY2tlclJhbmdlIiwiYmVnaW5QYXRoIiwiY2xlYXJSZWN0IiwiZ2xvYmFsQWxwaGEiLCJzdHJva2UiLCJjbG9zZVBhdGgiLCJzdGFycyIsImdlblN0YXJzIiwibnVtYmVyIiwic3RhciIsInNpemUiLCJ0d2lua2xlIiwicHVzaCIsImRyYXciLCJkcmF3Q2lyY2xlIiwidmlydHVhbFBhcmVudCIsImlzIiwiT2JqZWN0IiwiYXNzaWduIiwiZnJhbWVDb3VudCIsIm1vdXNlIiwiZnJhbWVJc1BhdXNlZCIsImlzQ2xpY2siLCJjYW52YXNTaXplZml4ZWQiLCJwcmV2aW91c0ZyYW1lVGltZSIsIkRhdGUiLCJnZXRUaW1lIiwiaXNSZXNpemluZyIsImxheWVycyIsImlzUmVzaXppbmdDYWxsYmFjayIsImluaXRCYXNlIiwidGFnTmFtZSIsImNyZWF0ZUVsZW1lbnQiLCJsYXllcnNDb250YWluZXIiLCJjbGFzc0xpc3QiLCJhZGQiLCJhcHBlbmRDaGlsZCIsImdldENvbnRleHQiLCJ0cmlnZ2VyUmVzaXppbmdNZWNoYW5pc20iLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZGVib3VuY2UiLCJ2aXNpYmlsaXR5U3RhdGUiLCJhZGRFdmVudEhhbmRsZXIiLCJyZWZyZXNoQmFzZUZyYW1lQ291bnRlciIsInRoaXNGcmFtZVRpbWUiLCJ0aW1lRWxhcHNlZCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNvbnRhaW5zIiwiY2FjaGVDdnMiLCJjYWNoZUN2c0NvbnRleHQiLCJjYW52YXNXaWR0aCIsImNhbnZhc0hlaWdodCIsInZpcnR1YWxQYXJlbnRWYWxpZGF0aW9uIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicGFyZW50RWxlbWVudCIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiZSIsInBvcyIsInBvaW50ZXJFdmVudFRvWFkiLCJ2Y3ZzIiwidmN2c0luc3RhbmNlIiwic3R5bGUiLCJwYXJlbnRQb3NpdGlvbiIsImdldENvbXB1dGVkU3R5bGUiLCJwYXJlbnROb2RlIiwiZ2V0UHJvcGVydHlWYWx1ZSIsImluc2VydEJlZm9yZSIsImN2c0luc3RhbmNlIiwiY3RvciIsInRhcmdldEVsZSIsImdldEVsZW1lbnRCeUlkIiwiYm9vdFByb21pc2UiLCJpbnN0YW5jZSIsImNvbnRyb2xsZXIiLCIkIiwic2VsZWN0b3IiLCJxdWVyeVNlbGVjdG9yIiwidG9nZ2xlIiwic3RhdHVzIiwic3R5bGVTdHIiLCJzZXRBdHRyaWJ1dGUiLCJ0b2dnbGVDbGFzcyIsImNsYXNzbmFtZSIsImFjdGlvbiIsImVtaXQiLCJldmVudE5hbWUiLCJzb21lRXZlbnQiLCJjcmVhdGVFdmVudCIsImluaXRFdmVudCIsImRpc3BhdGNoRXZlbnQiLCJwYXJlbnRzIiwibm9kZSIsImN1cnJlbnQiLCJsaXN0IiwiZG9jdW1lbnRFbGVtZW50IiwiZmlsdGVyIiwibyIsIm1hdGNoZXMiLCJmYWRlT3V0IiwiZHVyYXRpb24iLCJjYiIsImRpc3BsYXkiLCJmYWRlVGFyZ2V0IiwiZmFkZUVmZmVjdCIsIk1lcnNlbm5lVHdpc3RlciIsInJlcXVpcmUiLCJNVCIsImZ1bmMiLCJkZWxheSIsInRpbWVyIiwiY29udGV4dCIsImFyZ3MiLCJhcmd1bWVudHMiLCJjbGVhclRpbWVvdXQiLCJhcHBseSIsImFyciIsImEiLCJBcnJheSIsImlzQXJyYXkiLCJvYmoiLCJwcm90b3R5cGUiLCJ0b1N0cmluZyIsImNhbGwiLCJpbmRleE9mIiwicHRoIiwiaGFzT3duUHJvcGVydHkiLCJzdmciLCJTVkdFbGVtZW50IiwiaW5wIiwiSFRNTElucHV0RWxlbWVudCIsImRvbSIsIm5vZGVUeXBlIiwic3RyIiwiZm5jIiwidW5kIiwibmlsIiwiaGV4IiwidGVzdCIsInJnYmEiLCJyZ2IiLCJoc2wiLCJjb2wiLCJrZXkiLCJkZWZhdWx0SW5zdGFuY2VTZXR0aW5ncyIsImRlZmF1bHRUd2VlblNldHRpbmdzIiwibWluIiwibWF4Iiwic2VlZCIsInJhbmRvbSIsImdldERpc3RhbmNlIiwieDAiLCJ5MCIsIngxIiwieTEiLCJzcXJ0IiwiZGVncmVlVG9SYWRpYW4iLCJkZWdyZWUiLCJvdXQiLCJ0eXBlIiwidG91Y2giLCJvcmlnaW5hbEV2ZW50IiwidG91Y2hlcyIsImNoYW5nZWRUb3VjaGVzIiwicGFnZVgiLCJwYWdlWSIsInRhcmdldEhhc1Byb3AiLCJ0YXJnZXQiLCJwcm9wIiwiaXNFbXB0eSIsInZhbCIsImlzTmFOIiwicmdiVG9SZ2JhIiwicmdiVmFsdWUiLCJleGVjIiwiaGV4VG9SZ2JhIiwiaGV4VmFsdWUiLCJyZ3giLCJyZXBsYWNlIiwibSIsInIiLCJnIiwiYiIsInBhcnNlSW50IiwiaHNsVG9SZ2JhIiwiaHNsVmFsdWUiLCJoIiwicyIsImwiLCJodWUycmdiIiwicCIsInEiLCJ0IiwiY29sb3JUb1JnYmEiLCJnZXRDaGFubmVsVmFsdWVzRnJvbVJnYmEiLCJzcGxpdCIsIm1hcCIsImludGVycG9sYXRlIiwicHQwIiwicHQxIiwiZHgiLCJkeSIsImoiLCJkcmF3U3F1YXJlIiwiYWxwaGEiLCJhcmMiLCJkcmF3TGluZSIsInN0cm9rZUNvbG9yIiwiZHJhd1RleHQiLCJ0ZXh0Q29udGVudCIsImZvbnRTaXplIiwiZm9udCIsImZpbGxUZXh0IiwiZ2V0U2NyZWVuc2hvdEltYWdlIiwidGFyZ2V0Q3ZzIiwidXJsIiwidG9EYXRhVVJMIiwiaW1hZ2UiLCJJbWFnZSIsInNyYyIsInRhcmdldEN0eCIsImNhY2hlQ3R4Iiwic291cmNlV2lkdGgiLCJzb3VyY2VIZWlnaHQiLCJjYWNoZURhdGEiLCJnZXRJbWFnZURhdGEiLCJwdXRJbWFnZURhdGEiLCJCQUxMX0FOSU1BVElPTl9ERUZBVUxUIiwiYWZ0ZXJJbWFnZSIsInJhZGl1cyIsInNwZWVkWCIsInNwZWVkWSIsImFjY2VsZXJhdGlvblgiLCJhY2NlbGVyYXRpb25ZIiwiZnJpY3Rpb25YIiwiZnJpY3Rpb25ZIiwiU1BPVFNfQU5JTUFUSU9OX0RFRkFVTFQiLCJtaW5TaXplIiwibWF4U2l6ZSIsInBlcmlvZCIsInN0ZXAiLCJib3R0b21MYXllciIsInJvdyIsIkJhc2ljUmVmZWxlY3Rpb24iLCJzd2l0Y2hTdGF0dXMiLCJpbml0QmFsbCIsImFuaW1hdGVCYWxsIiwic3BlZWQiLCJhY2NlbGVyYXRpb24iLCJmcmljdGlvbiIsImRyYXdCYWxsIiwicmVmcmVzaExvY2F0aW9uIiwicmVmcmVzaFNwZWVkIiwiY2hlY2tCb3VuZGFyeSIsImJpbmQiLCJkdCIsIlNwb3RzQnVtcGluZyIsInNwb3RzU2l6ZSIsImV4cGFuZCIsImRyYXdTcG90cyIsImluaXRTcGxhc2giLCJpbml0aWFsU2NyZWVuIiwidmlydHVhbENhbnZhcyIsInN3aXRjaGVyIiwic3BvdEFuaW1hdGlvbiIsInNwbGFzaFByb21pc2UiLCJzcG90c0J1bXBpbmdJbnN0YW5jZSIsImJvb3RDb250cm9sbGVyIiwiYmFzaWNSZWZlbGVjdGlvbkluc3RhbmNlIiwic2NvcmUiLCJwbGF5ZXJSZWYiLCJtb2R1bGUiLCJleHBvcnRzIiwiQmFja29mZiIsIm9wdHMiLCJtcyIsImZhY3RvciIsImppdHRlciIsImF0dGVtcHRzIiwicG93IiwicmFuZCIsImRldmlhdGlvbiIsImZsb29yIiwicmVzZXQiLCJzZXRNaW4iLCJzZXRNYXgiLCJzZXRKaXR0ZXIiLCJjaGFycyIsImFycmF5YnVmZmVyIiwiYnl0ZXMiLCJVaW50OEFycmF5IiwibGVuIiwiYmFzZTY0Iiwic3Vic3RyaW5nIiwiYnVmZmVyTGVuZ3RoIiwiZW5jb2RlZDEiLCJlbmNvZGVkMiIsImVuY29kZWQzIiwiZW5jb2RlZDQiLCJBcnJheUJ1ZmZlciIsIkVtaXR0ZXIiLCJtaXhpbiIsIm9uIiwiZXZlbnQiLCJmbiIsIl9jYWxsYmFja3MiLCJvbmNlIiwib2ZmIiwicmVtb3ZlTGlzdGVuZXIiLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2FsbGJhY2tzIiwic3BsaWNlIiwic2xpY2UiLCJsaXN0ZW5lcnMiLCJoYXNMaXN0ZW5lcnMiLCJkIiwidyIsIm9wdGlvbnMiLCJwYXJzZSIsImlzRmluaXRlIiwibG9uZyIsImZtdExvbmciLCJmbXRTaG9ydCIsIkVycm9yIiwiSlNPTiIsInN0cmluZ2lmeSIsIlN0cmluZyIsIm1hdGNoIiwibiIsInBhcnNlRmxvYXQiLCJ0b0xvd2VyQ2FzZSIsInVuZGVmaW5lZCIsIm1zQWJzIiwiYWJzIiwicm91bmQiLCJwbHVyYWwiLCJpc1BsdXJhbCIsImZvcm1hdEFyZ3MiLCJsb2FkIiwidXNlQ29sb3JzIiwibG9jYWxzdG9yYWdlIiwid2FybmVkIiwiY29uc29sZSIsIndhcm4iLCJwcm9jZXNzIiwiX19ud2pzIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiV2Via2l0QXBwZWFyYW5jZSIsImZpcmVidWciLCJleGNlcHRpb24iLCJ0YWJsZSIsIlJlZ0V4cCIsIiQxIiwibmFtZXNwYWNlIiwiaHVtYW5pemUiLCJkaWZmIiwiYyIsImluZGV4IiwibGFzdEMiLCJkZWJ1ZyIsImxvZyIsIm5hbWVzcGFjZXMiLCJzdG9yYWdlIiwic2V0SXRlbSIsInJlbW92ZUl0ZW0iLCJlcnJvciIsImdldEl0ZW0iLCJlbnYiLCJERUJVRyIsImxvY2FsU3RvcmFnZSIsImZvcm1hdHRlcnMiLCJ2IiwibWVzc2FnZSIsInNldHVwIiwiY3JlYXRlRGVidWciLCJkZWZhdWx0IiwiY29lcmNlIiwiZGlzYWJsZSIsImVuYWJsZSIsImVuYWJsZWQiLCJkZXN0cm95Iiwia2V5cyIsImZvckVhY2giLCJuYW1lcyIsInNraXBzIiwic2VsZWN0Q29sb3IiLCJoYXNoIiwiY2hhckNvZGVBdCIsImNvbG9ycyIsInByZXZUaW1lIiwiZW5hYmxlT3ZlcnJpZGUiLCJzZWxmIiwiY3VyciIsIk51bWJlciIsInByZXYiLCJ1bnNoaWZ0IiwiZm9ybWF0IiwiZm9ybWF0dGVyIiwibG9nRm4iLCJleHRlbmQiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJnZXQiLCJzZXQiLCJkZWxpbWl0ZXIiLCJuZXdEZWJ1ZyIsInN1YnN0ciIsInRvTmFtZXNwYWNlIiwiam9pbiIsInJlZ2V4cCIsInN0YWNrIiwiRnVuY3Rpb24iLCJTb2NrZXQiLCJ1cmkiLCJwcm90b2NvbCIsInRyYW5zcG9ydHMiLCJwYXJzZXIiLCJwYXJzZXVyaSIsInBhcnNlcXMiLCJob3N0bmFtZSIsImhvc3QiLCJzZWN1cmUiLCJwb3J0IiwicXVlcnkiLCJyZWFkeVN0YXRlIiwid3JpdGVCdWZmZXIiLCJwcmV2QnVmZmVyTGVuIiwiYWdlbnQiLCJ3aXRoQ3JlZGVudGlhbHMiLCJ1cGdyYWRlIiwianNvbnAiLCJ0aW1lc3RhbXBQYXJhbSIsInJlbWVtYmVyVXBncmFkZSIsInJlamVjdFVuYXV0aG9yaXplZCIsInBlck1lc3NhZ2VEZWZsYXRlIiwidGhyZXNob2xkIiwidHJhbnNwb3J0T3B0aW9ucyIsImNsb3NlT25CZWZvcmV1bmxvYWQiLCJkZWNvZGUiLCJpZCIsInVwZ3JhZGVzIiwicGluZ0ludGVydmFsIiwicGluZ1RpbWVvdXQiLCJwaW5nVGltZW91dFRpbWVyIiwidHJhbnNwb3J0IiwiY2xvc2UiLCJvZmZsaW5lRXZlbnRMaXN0ZW5lciIsIm9uQ2xvc2UiLCJvcGVuIiwiY2xvbmUiLCJFSU8iLCJzaWQiLCJzb2NrZXQiLCJwcmlvcldlYnNvY2tldFN1Y2Nlc3MiLCJjcmVhdGVUcmFuc3BvcnQiLCJzaGlmdCIsInNldFRyYW5zcG9ydCIsIm9uRHJhaW4iLCJvblBhY2tldCIsIm9uRXJyb3IiLCJwcm9iZSIsImZhaWxlZCIsIm9uVHJhbnNwb3J0T3BlbiIsInNlbmQiLCJkYXRhIiwibXNnIiwidXBncmFkaW5nIiwiY2xlYW51cCIsImZsdXNoIiwiZXJyIiwiZnJlZXplVHJhbnNwb3J0Iiwib25lcnJvciIsIm9uVHJhbnNwb3J0Q2xvc2UiLCJvbmNsb3NlIiwib251cGdyYWRlIiwidG8iLCJwYWNrZXQiLCJvbkhhbmRzaGFrZSIsInJlc2V0UGluZ1RpbWVvdXQiLCJzZW5kUGFja2V0IiwiY29kZSIsImZpbHRlclVwZ3JhZGVzIiwib25PcGVuIiwiYXV0b1VucmVmIiwidW5yZWYiLCJ3cml0YWJsZSIsImNvbXByZXNzIiwiY2xlYW51cEFuZENsb3NlIiwid2FpdEZvclVwZ3JhZGUiLCJyZWFzb24iLCJkZXNjIiwicGluZ0ludGVydmFsVGltZXIiLCJmaWx0ZXJlZFVwZ3JhZGVzIiwiVHJhbnNwb3J0IiwiZGVzY3JpcHRpb24iLCJkb09wZW4iLCJkb0Nsb3NlIiwicGFja2V0cyIsIndyaXRlIiwiZGVjb2RlUGFja2V0IiwiYmluYXJ5VHlwZSIsIlhNTEh0dHBSZXF1ZXN0IiwiWEhSIiwiSlNPTlAiLCJ3ZWJzb2NrZXQiLCJwb2xsaW5nIiwieGhyIiwieGQiLCJ4cyIsImlzU1NMIiwieGRvbWFpbiIsInhzY2hlbWUiLCJmb3JjZUpTT05QIiwiUG9sbGluZyIsImdsb2JhbFRoaXMiLCJyTmV3bGluZSIsInJFc2NhcGVkTmV3bGluZSIsIkpTT05QUG9sbGluZyIsIl9fX2VpbyIsIm9uRGF0YSIsInNjcmlwdCIsInJlbW92ZUNoaWxkIiwiZm9ybSIsImlmcmFtZSIsImFzeW5jIiwiaW5zZXJ0QXQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImhlYWQiLCJpc1VBZ2Vja28iLCJhcmVhIiwiaWZyYW1lSWQiLCJjbGFzc05hbWUiLCJ0b3AiLCJsZWZ0IiwibWV0aG9kIiwiY29tcGxldGUiLCJpbml0SWZyYW1lIiwiaHRtbCIsInZhbHVlIiwic3VibWl0IiwiYXR0YWNoRXZlbnQiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJvbmxvYWQiLCJwaWNrIiwiZW1wdHkiLCJoYXNYSFIyIiwicmVzcG9uc2VUeXBlIiwiZm9yY2VCYXNlNjQiLCJzdXBwb3J0c0JpbmFyeSIsIlJlcXVlc3QiLCJyZXEiLCJyZXF1ZXN0IiwicG9sbFhociIsImNyZWF0ZSIsImV4dHJhSGVhZGVycyIsInNldERpc2FibGVIZWFkZXJDaGVjayIsInNldFJlcXVlc3RIZWFkZXIiLCJyZXF1ZXN0VGltZW91dCIsInRpbWVvdXQiLCJoYXNYRFIiLCJvbkxvYWQiLCJyZXNwb25zZVRleHQiLCJyZXF1ZXN0c0NvdW50IiwicmVxdWVzdHMiLCJvblN1Y2Nlc3MiLCJmcm9tRXJyb3IiLCJhYm9ydCIsIlhEb21haW5SZXF1ZXN0IiwiZW5hYmxlc1hEUiIsInVubG9hZEhhbmRsZXIiLCJ0ZXJtaW5hdGlvbkV2ZW50IiwieWVhc3QiLCJwb2xsIiwib25QYXVzZSIsInRvdGFsIiwiZG9Qb2xsIiwiY2FsbGJhY2siLCJkZWNvZGVQYXlsb2FkIiwiZW5jb2RlUGF5bG9hZCIsImRvV3JpdGUiLCJzY2hlbWEiLCJ0aW1lc3RhbXBSZXF1ZXN0cyIsImI2NCIsImVuY29kZSIsImlwdjYiLCJXZWJTb2NrZXQiLCJNb3pXZWJTb2NrZXQiLCJ1c2luZ0Jyb3dzZXJXZWJTb2NrZXQiLCJkZWZhdWx0QmluYXJ5VHlwZSIsImlzUmVhY3ROYXRpdmUiLCJwcm9kdWN0IiwiV1MiLCJjaGVjayIsInByb3RvY29scyIsImhlYWRlcnMiLCJ3cyIsImFkZEV2ZW50TGlzdGVuZXJzIiwib25vcGVuIiwiX3NvY2tldCIsIm9ubWVzc2FnZSIsImV2IiwibGFzdFBhY2tldCIsImVuY29kZVBhY2tldCIsIkJ1ZmZlciIsImJ5dGVMZW5ndGgiLCJhdHRyIiwicmVkdWNlIiwiYWNjIiwiayIsImhhc0NPUlMiLCJjb25jYXQiLCJQQUNLRVRfVFlQRVMiLCJQQUNLRVRfVFlQRVNfUkVWRVJTRSIsIkVSUk9SX1BBQ0tFVCIsIndpdGhOYXRpdmVBcnJheUJ1ZmZlciIsImJhc2U2NGRlY29kZXIiLCJlbmNvZGVkUGFja2V0IiwibWFwQmluYXJ5IiwiY2hhckF0IiwiZGVjb2RlQmFzZTY0UGFja2V0IiwicGFja2V0VHlwZSIsImRlY29kZWQiLCJCbG9iIiwid2l0aE5hdGl2ZUJsb2IiLCJpc1ZpZXciLCJidWZmZXIiLCJlbmNvZGVCbG9iQXNCYXNlNjQiLCJmaWxlUmVhZGVyIiwiRmlsZVJlYWRlciIsImNvbnRlbnQiLCJyZXN1bHQiLCJyZWFkQXNEYXRhVVJMIiwiU0VQQVJBVE9SIiwiZnJvbUNoYXJDb2RlIiwiZW5jb2RlZFBhY2tldHMiLCJjb3VudCIsImVuY29kZWRQYXlsb2FkIiwiZGVjb2RlZFBhY2tldCIsIk4iLCJNIiwiTUFUUklYX0EiLCJVUFBFUl9NQVNLIiwiTE9XRVJfTUFTSyIsIm10IiwibXRpIiwiY29uc3RydWN0b3IiLCJpbml0X2J5X2FycmF5IiwiaW5pdF9zZWVkIiwiaW5pdF9rZXkiLCJrZXlfbGVuZ3RoIiwicmFuZG9tX2ludCIsIm1hZzAxIiwia2siLCJyYW5kb21faW50MzEiLCJyYW5kb21faW5jbCIsInJhbmRvbV9leGNsIiwicmFuZG9tX2xvbmciLCJlbmNvZGVVUklDb21wb25lbnQiLCJxcyIsInFyeSIsInBhaXJzIiwicGFpciIsImRlY29kZVVSSUNvbXBvbmVudCIsInJlIiwicGFydHMiLCJzb3VyY2UiLCJhdXRob3JpdHkiLCJpcHY2dXJpIiwicGF0aE5hbWVzIiwicXVlcnlLZXkiLCJyZWd4IiwiJDAiLCIkMiIsIkFSR19MRU5HVEgiLCJ6IiwiU0VHTUVOVF9QQVRURVJOIiwiTlVNQkVSIiwibnVtYmVycyIsImNvbW1hbmQiLCJ0aGVBcmdzIiwicGFyc2VWYWx1ZXMiLCJ0aGVDb21tYW5kIiwiaW1nRGF0YSIsIm54IiwibnkiLCJzdXBwb3J0c1N2Z1BhdGhBcmd1bWVudCIsInBhcnNlUGF0aCIsInN0YXJ0UG9pbnQiLCJjdXJyZW50UG9pbnQiLCJzZWdtZW50cyIsInBhdGhUeXBlIiwiY3B4IiwiY3B5IiwicWNweCIsInFjcHkiLCJyeCIsInJ5IiwiYW5nbGUiLCJsYXJnZUFyY0ZsYWciLCJzd2VlcEZsYWciLCJlbmRQb2ludCIsIm1pZFBvaW50Iiwicm90YXRlUG9pbnQiLCJsYW1iZGEiLCJjZW50ZXJQb2ludCIsInQxIiwidDIiLCJzY2FsZVBvaW50Iiwic3RhcnRBbmdsZSIsImVuZEFuZ2xlIiwidHJhbnNsYXRlUG9pbnQiLCJjY3ciLCJjRmlsbCIsImNTdHJva2UiLCJmaWxsUnVsZSIsImJ1aWxkUGF0aCIsImNJc1BvaW50SW5QYXRoIiwicGF0aDJkUG9seWZpbGwiLCJ1cmxfMSIsIm1hbmFnZXJfMSIsImxvb2t1cCIsImNhY2hlIiwicGFyc2VkIiwic2FtZU5hbWVzcGFjZSIsIm5ld0Nvbm5lY3Rpb24iLCJmb3JjZU5ldyIsIm11bHRpcGxleCIsImlvIiwiTWFuYWdlciIsInNvY2tldF9pb19wYXJzZXJfMSIsIm1hbmFnZXJfMiIsInNvY2tldF8xIiwiZWlvIiwib25fMSIsInR5cGVkX2V2ZW50c18xIiwibnNwcyIsInN1YnMiLCJyZWNvbm5lY3Rpb24iLCJyZWNvbm5lY3Rpb25BdHRlbXB0cyIsIkluZmluaXR5IiwicmVjb25uZWN0aW9uRGVsYXkiLCJyZWNvbm5lY3Rpb25EZWxheU1heCIsInJhbmRvbWl6YXRpb25GYWN0b3IiLCJiYWNrb2ZmIiwiX3JlYWR5U3RhdGUiLCJfcGFyc2VyIiwiZW5jb2RlciIsIkVuY29kZXIiLCJkZWNvZGVyIiwiRGVjb2RlciIsIl9hdXRvQ29ubmVjdCIsImF1dG9Db25uZWN0IiwiX3JlY29ubmVjdGlvbiIsIl9yZWNvbm5lY3Rpb25BdHRlbXB0cyIsIl9hIiwiX3JlY29ubmVjdGlvbkRlbGF5IiwiX3JhbmRvbWl6YXRpb25GYWN0b3IiLCJfcmVjb25uZWN0aW9uRGVsYXlNYXgiLCJfdGltZW91dCIsIl9yZWNvbm5lY3RpbmciLCJyZWNvbm5lY3QiLCJlbmdpbmUiLCJza2lwUmVjb25uZWN0Iiwib3BlblN1YkRlc3Ryb3kiLCJlcnJvclN1YiIsImVtaXRSZXNlcnZlZCIsIm1heWJlUmVjb25uZWN0T25PcGVuIiwic3ViRGVzdHJveSIsIm9ucGluZyIsIm9uZGF0YSIsIm9uZGVjb2RlZCIsIm5zcCIsImFjdGl2ZSIsIl9jbG9zZSIsIm9ucmVjb25uZWN0IiwiYXR0ZW1wdCIsIlN0cmljdEV2ZW50RW1pdHRlciIsIlJFU0VSVkVEX0VWRU5UUyIsImZyZWV6ZSIsImNvbm5lY3QiLCJjb25uZWN0X2Vycm9yIiwiZGlzY29ubmVjdCIsImRpc2Nvbm5lY3RpbmciLCJuZXdMaXN0ZW5lciIsInJlY2VpdmVCdWZmZXIiLCJzZW5kQnVmZmVyIiwiaWRzIiwiYWNrcyIsImZsYWdzIiwiY29ubmVjdGVkIiwiZGlzY29ubmVjdGVkIiwiYXV0aCIsIm9ucGFja2V0Iiwic3ViRXZlbnRzIiwiUGFja2V0VHlwZSIsIkVWRU5UIiwicG9wIiwiaXNUcmFuc3BvcnRXcml0YWJsZSIsImRpc2NhcmRQYWNrZXQiLCJ2b2xhdGlsZSIsIl9wYWNrZXQiLCJDT05ORUNUIiwib25jb25uZWN0Iiwib25ldmVudCIsIkJJTkFSWV9FVkVOVCIsIkFDSyIsIm9uYWNrIiwiQklOQVJZX0FDSyIsIkRJU0NPTk5FQ1QiLCJvbmRpc2Nvbm5lY3QiLCJDT05ORUNUX0VSUk9SIiwiYWNrIiwiZW1pdEV2ZW50IiwiX2FueUxpc3RlbmVycyIsImxpc3RlbmVyIiwic2VudCIsImVtaXRCdWZmZXJlZCIsImxvYyIsImhyZWYiLCJpc19iaW5hcnlfMSIsImRlY29uc3RydWN0UGFja2V0IiwiYnVmZmVycyIsInBhY2tldERhdGEiLCJwYWNrIiwiX2RlY29uc3RydWN0UGFja2V0IiwiYXR0YWNobWVudHMiLCJpc0JpbmFyeSIsInBsYWNlaG9sZGVyIiwiX3BsYWNlaG9sZGVyIiwibnVtIiwibmV3RGF0YSIsInJlY29uc3RydWN0UGFja2V0IiwiX3JlY29uc3RydWN0UGFja2V0IiwiYmluYXJ5XzEiLCJoYXNCaW5hcnkiLCJlbmNvZGVBc0JpbmFyeSIsImVuY29kZUFzU3RyaW5nIiwiZGVjb25zdHJ1Y3Rpb24iLCJkZWNvZGVTdHJpbmciLCJyZWNvbnN0cnVjdG9yIiwiQmluYXJ5UmVjb25zdHJ1Y3RvciIsInRha2VCaW5hcnlEYXRhIiwic3RhcnQiLCJidWYiLCJuZXh0IiwicGF5bG9hZCIsInRyeVBhcnNlIiwiaXNQYXlsb2FkVmFsaWQiLCJmaW5pc2hlZFJlY29uc3RydWN0aW9uIiwicmVjb25QYWNrIiwiYmluRGF0YSIsIndpdGhOYXRpdmVGaWxlIiwiRmlsZSIsInRvSlNPTiIsImFscGhhYmV0IiwiZW5jb2RlZCIsIm5vdyIsImluaXRVSSIsImdhbWVDcmVhdGVkIiwiam9pbmVkIiwibmFtZUNvbmZpcm1lZCIsImdhbWVTdGFydGVkIiwiY3JlYXRlR2FtZUJ0biIsInNob3dKb2luR2FtZVByb21wdEJ0biIsImNvbmZpcm1Kb2luR2FtZUJ0biIsInJvb21Db2RlSW5wdXQiLCJyb29tQ29kZURpc3BsYXkiLCJuYW1lSW5wdXQiLCJuYW1lQ29uZmlybSIsImxlYXZlV2FpdGluZ0J0biIsImxlYXZlR2FtZVN0YXJ0QWxlcnQiLCJnYW1lU3RhcnQiLCJpbml0VHJpZ2dlciIsImluaXRVSVByb21pc2UiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaW5uZXJIVE1MIiwicGFyZW50UG9wb3V0cyIsInRvZ2dsZVBvcG91dCIsImZsYWciLCJjb25maXJtTmFtZSIsIm5ld0dhbWUiLCJyb29tQ29kZSIsImNvbmZpcm1Kb2luR2FtZSIsInBsYXllck51bWJlciIsInBsYXllck5hbWUiLCJob3N0TmFtZSIsImNoYWxsZW5nZXIiLCJwb3BvdXQiLCJyZW1vdmUiLCJoaWRlSW5pdGlhbFNjcmVlbiIsInRvZ2dsZUhpZGVPbkFjdGlvbiIsInRvZ2dsZVNob3dPbkFjdGlvbiIsInN0YXJ0Q291bnRpbmciLCJnYyIsInRpbWVJbnRlcnZhbCIsInNwbGFzaFN3aXRjaGVyIiwidWlJbml0UHJvbWlzZSIsImdhbWVDb250b2xsZXIiLCJnbyIs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UCxDQUFVLGtCQUFWLEVBQThCLFlBQU07QUFDbENzbEIsZUFBYSxDQUFDOS9CLEdBQWQsQ0FBa0IySixTQUFsQixDQUE0QjAxQixNQUE1QixDQUFtQyxVQUFuQztBQUNELENBRkQ7QUFJQXBiLE1BQU0sQ0FBQ3pKLEVBQVAsQ0FBVSxPQUFWLEVBQW1CLFlBQU07QUFDdkJzbEIsZUFBYSxDQUFDOS9CLEdBQWQsQ0FBa0IySixTQUFsQixDQUE0QjAxQixNQUE1QixDQUFtQyxVQUFuQztBQUNELENBRkQ7QUFJQXBiLE1BQU0sQ0FBQ3pKLEVBQVAsQ0FBVSxnQkFBVixFQUE0QixZQUFNO0FBQ2hDeWxCLE9BQUssQ0FBQyxrQkFBRCxDQUFMO0FBQ0QsQ0FGRDtBQUlBaGMsTUFBTSxDQUFDekosRUFBUCxDQUFVLGFBQVYsRUFBeUIsWUFBTTtBQUM3QnlsQixPQUFLLENBQUMscUJBQUQsQ0FBTDtBQUNELENBRkQ7QUFJQWhjLE1BQU0sQ0FBQ3pKLEVBQVAsQ0FBVSxpQkFBVixFQUE2QixZQUFNO0FBQ2pDeWxCLE9BQUssQ0FBQyx5Q0FBRCxDQUFMO0FBQ0QsQ0FGRCxFOzs7Ozs7Ozs7QUMvREEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhbnZhczJERnhCYXNlLCBib290IH0gZnJvbSAnLi9saWIvYmFzZSc7XG5pbXBvcnQgeyBTdHJva2VBbmltYXRpb24sIFN3aXJsOEJpdCwgU3RhclNreSB9IGZyb20gJy4vbGliL2FuaW1hdGlvbic7XG5pbXBvcnQgeyBnZXRDYWNoZUNhbnZhcyB9IGZyb20gJy4vbGliL3V0aWwnO1xuaW1wb3J0IHsgcGxheWVyc0RhdGEsIGJhbGwgfSBmcm9tICcuLi9kYXRhJztcbmltcG9ydCB7IGRyYXdSZWN0LCBkcmF3Q2lyY2xlIH0gZnJvbSAnLi9saWIvc2hhcGUnXG5pbXBvcnQgeyByYW5kb21XaXRoaW5SYW5nZSB9IGZyb20gJy4vbGliL2Z1bmN0aW9uJztcblxuY29uc3QgREVGQVVMVCA9IHtcbiAgYmdDb2xvcjogJ3JnYmEoMCwwLDAsMSknLFxuICBjb3VydENvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwxKScsXG4gIGNvdXJ0QXNwZWN0UmF0aW86IDUgLyAzXG59XG5cbmV4cG9ydCBjbGFzcyBFbmdpbmUgZXh0ZW5kcyBDYW52YXMyREZ4QmFzZSB7XG4gIGNvbnN0cnVjdG9yKGVsZSwgZGVmYXVsdENvbmZpZywgY29uZmlnKSB7XG4gICAgc3VwZXIoZWxlLCBkZWZhdWx0Q29uZmlnLCBjb25maWcpXG4gICAgdGhpcy5waXhlbEJhc2UgPSAxNDQwO1xuICAgIHRoaXMuaW5pdCgpO1xuICAgIHRoaXMuZnBzID0gMzA7XG4gICAgdGhpcy5jb3VydE9mZnNldCA9IDY1O1xuICAgIHRoaXMuZ2FtZVN0YXR1cyA9IDA7XG4gICAgdGhpcy5wYXVzZSA9IGZhbHNlO1xuICAgIC8vMDogbm90IHN0YXJ0IHlldFxuICAgIC8vMTogY3VydGFpbiBhbmltYXRpbmdcbiAgICAvLzI6IGNvdXJ0IGFuaW1hdGluZ1xuICAgIC8vMzogYW5pbWF0aW5nIHBsYXllcnMgYW5kIHNjcm9lYm9hcmRcbiAgICAvLzQ6IGdhbWUgaXMgcmVhZHlcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5jdXJ0YWluID0gdGhpcy5nZW5DdXJ0YWluKCk7XG4gICAgdGhpcy5jb3VydCA9IHRoaXMuZ2VuQ291cnQoKTtcbiAgICB0aGlzLnN0YXJTa3kgPSB0aGlzLmdlblN0YXJTa3koKTtcbiAgICB0aGlzLnBsYXllcnMgPSB0aGlzLmdlblBsYXllcnMoKTtcbiAgICB0aGlzLnNjb3JlYm9hcmRzID0gdGhpcy5nZW5TY29yZWJvYXJkcygpO1xuICAgIHRoaXMuYmFsbCA9IHRoaXMuZ2VuQmFsbCgpO1xuICAgIHRoaXMuaW5pdFJlc2l6ZWQoKTtcbiAgfVxuXG4gIGluaXRSZXNpemVkKCkge1xuICAgIHRoaXMucmVzaXplZENhbGxiYWNrID0gKCkgPT4ge1xuICAgICAgdGhpcy5jdXJ0YWluLmRyYXdTdGF0aWMoKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMuZ2FtZVN0YXR1cyA9PT0gMykge1xuICAgICAgICAgICAgdGhpcy5iYWNrZ3JvdW5kKCdibGFjaycpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmNvdXJ0LmRyYXdTdGF0aWMoKTtcbiAgICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBnZW5DdXJ0YWluKGJhbmRXaWR0aCA9IDMwKSB7XG4gICAgbGV0IGN1cnRhaW5DYW52YXNJbnN0YW5jZSA9IHRoaXMuY3VydGFpbkNhbnZhc0luc3RhbmNlID0gdGhpcy5jcmVhdGVWaXJ0dWFsQ2FudmFzQmFzZUluc3RhbmNlKCk7XG4gICAgY3VydGFpbkNhbnZhc0luc3RhbmNlLnNldENhbnZhc1NpemUodGhpcy5jdnMud2lkdGgsIHRoaXMuY3ZzLmhlaWdodCk7XG4gICAgbGV0IGN1cnRhaW5BbmltYXRpb25JbnN0YW5jZSA9IG5ldyBTd2lybDhCaXQoY3VydGFpbkNhbnZhc0luc3RhbmNlLmN0eCk7XG4gICAgbGV0IGN1cnRhaW4gPSB7XG4gICAgICBhbmltYXRlOiAoKSA9PiB7XG4gICAgICAgIGxldCBpbml0aWFsSW1hZ2UgPSBnZXRDYWNoZUNhbnZhcyh0aGlzLmN0eCk7XG4gICAgICAgIGxldCBwcm9taXNlID0gY3VydGFpbkFuaW1hdGlvbkluc3RhbmNlLmFuaW1hdGUoZmFsc2UsIGJhbmRXaWR0aCwgdGhpcy5jb25maWcuYmdDb2xvcik7XG4gICAgICAgIGxldCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKGluaXRpYWxJbWFnZSwgMCwgMCwgdGhpcy5jdnMud2lkdGgsIHRoaXMuY3ZzLmhlaWdodCwgMCwgMCwgdGhpcy5jdnMud2lkdGgsIHRoaXMuY3ZzLmhlaWdodCk7XG4gICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKGN1cnRhaW5DYW52YXNJbnN0YW5jZS5jdnMsIDAsIDAsIGN1cnRhaW5DYW52YXNJbnN0YW5jZS5jdnMud2lkdGgsIGN1cnRhaW5DYW52YXNJbnN0YW5jZS5jdnMuaGVpZ2h0LCAwLCAwLCB0aGlzLmN2cy53aWR0aCwgdGhpcy5jdnMuaGVpZ2h0KTtcbiAgICAgICAgfSwgdGhpcy5mcHMpO1xuICAgICAgICByZXR1cm4gcHJvbWlzZS50aGVuKCgpID0+IHtcbiAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlcykgPT4ge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgICAgICByZXMoKTtcbiAgICAgICAgICAgIH0sIDUwMClcbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIGRyYXdTdGF0aWM6ICgpID0+IHsgLy9cbiAgICAgICAgbGV0IHRyaWdnZXI7XG4gICAgICAgIGxldCBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XG4gICAgICAgICAgdHJpZ2dlciA9IHJlcztcbiAgICAgICAgfSlcbiAgICAgICAgbGV0IHN0YXRpY0ltYWdlID0gY3VydGFpbkNhbnZhc0luc3RhbmNlLmN2cztcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKFxuICAgICAgICAgIHN0YXRpY0ltYWdlLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICBzdGF0aWNJbWFnZS53aWR0aCxcbiAgICAgICAgICBzdGF0aWNJbWFnZS5oZWlnaHQsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIHRoaXMuY3ZzLndpZHRoLFxuICAgICAgICAgIHRoaXMuY3ZzLmhlaWdodFxuICAgICAgICApXG4gICAgICAgIHRyaWdnZXIoKTtcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gY3VydGFpbjtcbiAgfVxuXG4gIGdldEFzcGVjdFJhdGlvKCkge1xuICAgIHJldHVybiB0aGlzLmN2cy53aWR0aCAvIHRoaXMuY3ZzLmhlaWdodDtcbiAgfVxuXG4gIHJlc3BvbnNpdmVQYWludGVyKHRhcmdldExheWVyLCBzb3VyY2VDYW52YXMsIGluaXRpYWxJbWFnZSkge1xuICAgIGxldCBvZmZzZXQgPSB0aGlzLmNvdXJ0T2Zmc2V0O1xuICAgIHRhcmdldExheWVyLmN0eC5zYXZlKCk7XG4gICAgLy/nlatjb3VydCDmnIPmnInlm5vnqK7ni4Dms4EsIChjYW52YXPplbflr6w+6aCQ6Kit6ZW35a+s5q+UPjEpIHwgKDE8PWNhbnZhc+mVt+WvrDzpoJDoqK3plbflr6zmr5QpIHwgKOmgkOioremVt+WvrOavlOWAkuaVuDxjYW52YXPplbflr6zmr5Q8MSkg772cIChjYW52YXPplbflr6zmr5Q86aCQ6Kit6ZW35a+s5q+U5YCS5pW4PDEpXG4gICAgaWYgKHRoaXMuZ2V0QXNwZWN0UmF0aW8oKSA+PSAxKSB7XG4gICAgICAvLyDpgJnpgormmK/liY3lhannqK7ni4Dms4FcbiAgICAgIC8v5YWI5riF6Zmk5LiA5qyh5LmL5b6M55WraW5pdGlhbEltYWdlICwg5YaN55WrY291cnRcbiAgICAgIHRhcmdldExheWVyLmNsZWFyKCk7XG4gICAgICBsZXQgdHlwZUEgPSAodGFyZ2V0TGF5ZXIuY3ZzLmhlaWdodCAtIDIgKiBvZmZzZXQpICogdGhpcy5jb25maWcuY291cnRBc3BlY3RSYXRpbyA8IHRhcmdldExheWVyLmN2cy53aWR0aCAtIDIgKiBvZmZzZXQ7XG4gICAgICBsZXQgb2Zmc2V0Viwgb2Zmc2V0SCwgY291cnRIZWlnaHQsIGNvdXJ0V2lkdGg7XG4gICAgICBpZiAodHlwZUEpIHtcbiAgICAgICAgLy8g5YWI566X5Ye657iu5rib6YGOb2Zmc2V0IOeahGN2cyDlr6xcbiAgICAgICAgb2Zmc2V0ViA9IG9mZnNldDtcbiAgICAgICAgY291cnRIZWlnaHQgPSB0YXJnZXRMYXllci5jdnMuaGVpZ2h0IC0gMiAqIG9mZnNldDtcbiAgICAgICAgY291cnRXaWR0aCA9IGNvdXJ0SGVpZ2h0ICogdGhpcy5jb25maWcuY291cnRBc3BlY3RSYXRpbztcbiAgICAgICAgb2Zmc2V0SCA9ICh0YXJnZXRMYXllci5jdnMud2lkdGggLSBjb3VydFdpZHRoKSAvIDI7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgLy8g6Z2edHlwZUHnmoTni4Dms4EsIOS5n+WwseaYr2NhbnZhc+WvrOmrmOavlOS9juaWvGNvbmZpZyDoqK3lrprnmoTmr5TkvotcbiAgICAgICAgb2Zmc2V0SCA9IG9mZnNldDtcbiAgICAgICAgY291cnRXaWR0aCA9IHRhcmdldExheWVyLmN2cy53aWR0aCAtIDIgKiBvZmZzZXQ7XG4gICAgICAgIGNvdXJ0SGVpZ2h0ID0gY291cnRXaWR0aCAvIHRoaXMuY29uZmlnLmNvdXJ0QXNwZWN0UmF0aW87XG4gICAgICAgIG9mZnNldFYgPSAodGFyZ2V0TGF5ZXIuY3ZzLmhlaWdodCAtIGNvdXJ0SGVpZ2h0KSAvIDI7XG4gICAgICB9XG4gICAgICBpZiAoaW5pdGlhbEltYWdlKSB7XG4gICAgICAgIHRhcmdldExheWVyLmN0eC5kcmF3SW1hZ2UoXG4gICAgICAgICAgaW5pdGlhbEltYWdlLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICBpbml0aWFsSW1hZ2Uud2lkdGgsXG4gICAgICAgICAgaW5pdGlhbEltYWdlLmhlaWdodCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgdGFyZ2V0TGF5ZXIuY3ZzLndpZHRoLFxuICAgICAgICAgIHRhcmdldExheWVyLmN2cy5oZWlnaHRcbiAgICAgICAgKVxuXG4gICAgICB9XG4gICAgICAvLyDlhYjml4vovYnnlavluIMsIOWboOeCuiB2aXJ0dWFsY2FudmFzIOaYr+S4gOW8teWeguebtOeahOeVq+W4g1xuICAgICAgdGFyZ2V0TGF5ZXIuY3R4LnRyYW5zbGF0ZSh0YXJnZXRMYXllci5jdnMud2lkdGggLyAyLCB0YXJnZXRMYXllci5jdnMuaGVpZ2h0IC8gMik7XG4gICAgICB0YXJnZXRMYXllci5jdHgucm90YXRlKE1hdGguUEkgLyAyKTtcbiAgICAgIHRhcmdldExheWVyLmN0eC50cmFuc2xhdGUoLXRhcmdldExheWVyLmN2cy5oZWlnaHQgLyAyLCAtdGFyZ2V0TGF5ZXIuY3ZzLndpZHRoIC8gMik7XG4gICAgICAvLyDlm6Dngrpjb3VydCDnmoTlpKflsI/mnIPpmqjokZdjYW52YXMg55qE6ZW35a+s5q+U6ICM6K6K5YuVXG4gICAgICAvLyDpgJnpgorlhYgg5YGH6Kit5LuK5aSp5pivY2FudmFzIOWvrOavlOmrmOi2heWHuuW+iOWkmueahOaDheazgSAsIOS5n+WwseaYr+eLgOazgVwidHlwZUFcIlxuICAgICAgdGFyZ2V0TGF5ZXIuY3R4LmRyYXdJbWFnZShcbiAgICAgICAgc291cmNlQ2FudmFzLFxuICAgICAgICAwLFxuICAgICAgICAwLFxuICAgICAgICBzb3VyY2VDYW52YXMud2lkdGgsXG4gICAgICAgIHNvdXJjZUNhbnZhcy5oZWlnaHQsXG4gICAgICAgIG9mZnNldFYsXG4gICAgICAgIG9mZnNldEgsXG4gICAgICAgIGNvdXJ0SGVpZ2h0LFxuICAgICAgICBjb3VydFdpZHRoXG4gICAgICApXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgLy/pgJnpgormmK/lvozlhannqK7ni4Dms4FcbiAgICAgIC8vIOWboOeCumNvdXJ0IOeahOWkp+Wwj+acg+maqOiRl2NhbnZhcyDnmoTplbflr6zmr5TogIzororli5VcbiAgICAgIC8vIOmAmemCiuWFiCDlgYfoqK3ku4rlpKnmmK9jYW52YXMg6auY5q+U5a+s5q+U6LaF5Ye65b6I5aSa55qE5oOF5rOBICwg5Lmf5bCx5piv54uA5rOBXCJ0eXBlQVwiXG4gICAgICBsZXQgdHlwZUEgPSAodGFyZ2V0TGF5ZXIuY3ZzLndpZHRoIC0gMiAqIG9mZnNldCkgKiB0aGlzLmNvbmZpZy5jb3VydEFzcGVjdFJhdGlvIDwgdGFyZ2V0TGF5ZXIuY3ZzLmhlaWdodCAtIDIgKiBvZmZzZXQ7XG4gICAgICBsZXQgb2Zmc2V0Viwgb2Zmc2V0SCwgY291cnRIZWlnaHQsIGNvdXJ0V2lkdGg7XG4gICAgICBpZiAodHlwZUEpIHtcbiAgICAgICAgLy8g5YWI566X5Ye657iu5rib6YGOb2Zmc2V0IOeahGN2cyDlr6xcbiAgICAgICAgb2Zmc2V0SCA9IG9mZnNldDtcbiAgICAgICAgY291cnRXaWR0aCA9IHRhcmdldExheWVyLmN2cy53aWR0aCAtIDIgKiBvZmZzZXQ7XG4gICAgICAgIGNvdXJ0SGVpZ2h0ID0gY291cnRXaWR0aCAqIHRoaXMuY29uZmlnLmNvdXJ0QXNwZWN0UmF0aW87XG4gICAgICAgIG9mZnNldFYgPSAodGFyZ2V0TGF5ZXIuY3ZzLmhlaWdodCAtIGNvdXJ0SGVpZ2h0KSAvIDI7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgLy8g6Z2edHlwZUHnmoTni4Dms4EsIOS5n+WwseaYr2NhbnZhc+WvrOmrmOavlOS9juaWvGNvbmZpZyDoqK3lrprnmoTmr5TkvotcbiAgICAgICAgb2Zmc2V0ViA9IG9mZnNldDtcbiAgICAgICAgY291cnRIZWlnaHQgPSB0YXJnZXRMYXllci5jdnMuaGVpZ2h0IC0gMiAqIG9mZnNldDtcbiAgICAgICAgY291cnRXaWR0aCA9IGNvdXJ0SGVpZ2h0IC8gdGhpcy5jb25maWcuY291cnRBc3BlY3RSYXRpbztcbiAgICAgICAgb2Zmc2V0SCA9ICh0YXJnZXRMYXllci5jdnMud2lkdGggLSBjb3VydFdpZHRoKSAvIDI7XG4gICAgICB9XG4gICAgICBpZiAoaW5pdGlhbEltYWdlKSB7XG4gICAgICAgIHRhcmdldExheWVyLmN0eC5kcmF3SW1hZ2UoXG4gICAgICAgICAgaW5pdGlhbEltYWdlLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICBpbml0aWFsSW1hZ2Uud2lkdGgsXG4gICAgICAgICAgaW5pdGlhbEltYWdlLmhlaWdodCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgdGFyZ2V0TGF5ZXIuY3ZzLndpZHRoLFxuICAgICAgICAgIHRhcmdldExheWVyLmN2cy5oZWlnaHRcbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgdGFyZ2V0TGF5ZXIuY3R4LmRyYXdJbWFnZShcbiAgICAgICAgc291cmNlQ2FudmFzLFxuICAgICAgICAwLFxuICAgICAgICAwLFxuICAgICAgICBzb3VyY2VDYW52YXMud2lkdGgsXG4gICAgICAgIHNvdXJjZUNhbnZhcy5oZWlnaHQsXG4gICAgICAgIG9mZnNldEgsXG4gICAgICAgIG9mZnNldFYsXG4gICAgICAgIGNvdXJ0V2lkdGgsXG4gICAgICAgIGNvdXJ0SGVpZ2h0XG4gICAgICApXG4gICAgfVxuXG4gICAgdGFyZ2V0TGF5ZXIuY3R4LnJlc3RvcmUoKTtcbiAgfVxuXG4gIGdlbkNvdXJ0KHN0cm9rZVdpZHRoID0gMTAsIG9mZnNldCA9IDY1KSB7XG4gICAgbGV0IGNvdXJ0Q2FudmFzSW5zdGFuY2UgPSB0aGlzLmNvdXJ0Q2FudmFzSW5zdGFuY2UgPSB0aGlzLmNyZWF0ZVZpcnR1YWxDYW52YXNCYXNlSW5zdGFuY2UoKTtcbiAgICBsZXQgY291cnRDYW52YXNXaWR0aCA9IHRoaXMucGl4ZWxCYXNlIC8gdGhpcy5jb25maWcuY291cnRBc3BlY3RSYXRpbztcbiAgICBsZXQgY291cnRDYW52YXNIZWlnaHQgPSB0aGlzLnBpeGVsQmFzZTtcbiAgICBjb3VydENhbnZhc0luc3RhbmNlLnNldENhbnZhc1NpemUoY291cnRDYW52YXNXaWR0aCwgY291cnRDYW52YXNIZWlnaHQpO1xuICAgIGxldCB2ZXJ0aWNlcyA9IFtcbiAgICAgIHsgeDogMCwgeTogMCB9LFxuICAgICAgeyB4OiBjb3VydENhbnZhc0luc3RhbmNlLmN2cy53aWR0aCwgeTogMCB9LFxuICAgICAgeyB4OiBjb3VydENhbnZhc0luc3RhbmNlLmN2cy53aWR0aCwgeTogY291cnRDYW52YXNJbnN0YW5jZS5jdnMuaGVpZ2h0IH0sXG4gICAgICB7IHg6IDAsIHk6IGNvdXJ0Q2FudmFzSW5zdGFuY2UuY3ZzLmhlaWdodCB9LFxuICAgICAgeyB4OiAwLCB5OiAwIH1cbiAgICBdO1xuXG4gICAgbGV0IHN0cm9rZUFuaW1hdGlvbkluc3RhbmNlID0gbmV3IFN0cm9rZUFuaW1hdGlvbihjb3VydENhbnZhc0luc3RhbmNlLmN0eCwgdmVydGljZXMpO1xuXG4gICAgbGV0IGNvdXJ0ID0ge1xuICAgICAgYW5pbWF0ZTogKCkgPT4ge1xuICAgICAgICBjb3VydC5pbml0aWFsSW1hZ2UgPSBnZXRDYWNoZUNhbnZhcyh0aGlzLmN0eCk7XG4gICAgICAgIGxldCBwcm9taXNlID0gc3Ryb2tlQW5pbWF0aW9uSW5zdGFuY2UuYW5pbWF0ZShzdHJva2VXaWR0aCwgdGhpcy5jb25maWcuY291cnRDb2xvcikudGhlbigoKSA9PiB7XG4gICAgICAgICAgbGV0IHZlcnRpY2VzID0gW1xuICAgICAgICAgICAgeyB4OiAwLCB5OiBjb3VydENhbnZhc0luc3RhbmNlLmN2cy5oZWlnaHQgLyAyIH0sXG4gICAgICAgICAgICB7IHg6IGNvdXJ0Q2FudmFzSW5zdGFuY2UuY3ZzLndpZHRoLCB5OiBjb3VydENhbnZhc0luc3RhbmNlLmN2cy5oZWlnaHQgLyAyIH0sXG4gICAgICAgICAgXVxuICAgICAgICAgIHJldHVybiBuZXcgU3Ryb2tlQW5pbWF0aW9uKGNvdXJ0Q2FudmFzSW5zdGFuY2UuY3R4LCB2ZXJ0aWNlcykuYW5pbWF0ZShzdHJva2VXaWR0aCwgdGhpcy5jb25maWcuY291cnRDb2xvciwgZmFsc2UsIFsxMCwgMzBdLCAndHJhbnNwYXJlbnQnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGxldCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICB0aGlzLnJlc3BvbnNpdmVQYWludGVyKHRoaXMsIGNvdXJ0Q2FudmFzSW5zdGFuY2UuY3ZzLCBjb3VydC5pbml0aWFsSW1hZ2UpO1xuICAgICAgICB9LCB0aGlzLmZwcylcbiAgICAgICAgcmV0dXJuIHByb21pc2UudGhlbigoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMpID0+IHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgICAgcmVzKCk7XG4gICAgICAgICAgICB9LCA1MDApXG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgICAgfSxcbiAgICAgIGRyYXdTdGF0aWM6ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xuICAgICAgICAgIHRoaXMucmVzcG9uc2l2ZVBhaW50ZXIodGhpcywgY291cnRDYW52YXNJbnN0YW5jZS5jdnMsIGNvdXJ0LmluaXRpYWxJbWFnZSk7XG4gICAgICAgICAgcmVzKCk7XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBjb3VydDtcbiAgfVxuXG4gIGdlblN0YXJTa3koKSB7XG4gICAgbGV0IHN0YXJTa3lDYW52YXNJbnN0YW5jZSA9IHRoaXMuc3RhclNreUNhbnZhc0luc3RhbmNlID0gdGhpcy5hZGROZXdMYXllcigpO1xuICAgIHJldHVybiBuZXcgU3RhclNreShzdGFyU2t5Q2FudmFzSW5zdGFuY2UuY3R4KTtcbiAgfVxuXG5cbiAgZ2VuUGxheWVycyh3aWR0aFByYW0gPSAxMCwgZ2FwUmF0aW8gPSAwLjA1LCBjb2xvciA9ICd3aGl0ZScsIHRoaWNrbmVzcyA9IDIwKSB7XG4gICAgbGV0IHBsYXllcnNDYW52YXNJbnN0YW5jZSA9IHRoaXMucGxheWVyc0NhbnZhc0luc3RhbmNlID0gdGhpcy5hZGROZXdMYXllcigpO1xuICAgIGxldCBwbGF5ZXJzVmlydHVhbENhbnZhc0luc3RhbmNlID0gdGhpcy5wbGF5ZXJzVmlydHVhbENhbnZhc0luc3RhbmNlID0gdGhpcy5jcmVhdGVWaXJ0dWFsQ2FudmFzQmFzZUluc3RhbmNlKCk7XG4gICAgcGxheWVyc1ZpcnR1YWxDYW52YXNJbnN0YW5jZS5zZXRDYW52YXNTaXplKHRoaXMuY291cnRDYW52YXNJbnN0YW5jZS5jdnMud2lkdGgsIHRoaXMuY291cnRDYW52YXNJbnN0YW5jZS5jdnMuaGVpZ2h0KTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVyc0RhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIHBsYXllcnNEYXRhW2ldLndpZHRoID0gKHRoaXMucGl4ZWxCYXNlIC8gdGhpcy5jb25maWcuY291cnRBc3BlY3RSYXRpbykgLyB3aWR0aFByYW07XG4gICAgICBwbGF5ZXJzRGF0YVtpXS5wb3NpdGlvbi54ID0gdGhpcy5jb3VydENhbnZhc0luc3RhbmNlLmN2cy53aWR0aCAvIDI7XG4gICAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgICBwbGF5ZXJzRGF0YVtpXS5wb3NpdGlvbi55ID0gdGhpcy5jb3VydENhbnZhc0luc3RhbmNlLmN2cy5oZWlnaHQgKiAoMSAtIGdhcFJhdGlvKVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAoaSA9PT0gMSkge1xuICAgICAgICBwbGF5ZXJzRGF0YVtpXS5wb3NpdGlvbi55ID0gdGhpcy5jb3VydENhbnZhc0luc3RhbmNlLmN2cy5oZWlnaHQgKiBnYXBSYXRpb1xuICAgICAgfVxuICAgIH1cbiAgICBsZXQgcGxheWVycyA9IHtcbiAgICAgIHJlYWR5OiAoKSA9PiB7XG4gICAgICAgIGxldCB0cmlnZ2VyO1xuICAgICAgICBsZXQgcHJvbWlzZSA9IG5ldyBQcm9taXNlKHJlcyA9PiB7XG4gICAgICAgICAgdHJpZ2dlciA9IHJlcztcbiAgICAgICAgfSlcbiAgICAgICAgbGV0IG9wYWNpdHkgPSAwO1xuICAgICAgICBsZXQgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgaWYgKG9wYWNpdHkgPj0gMSkge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICAgICB0cmlnZ2VyKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVyc0RhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGRyYXdSZWN0KHBsYXllcnNWaXJ0dWFsQ2FudmFzSW5zdGFuY2UuY3R4LCBwbGF5ZXJzRGF0YVtpXS5wb3NpdGlvbi54LCBwbGF5ZXJzRGF0YVtpXS5wb3NpdGlvbi55LCBwbGF5ZXJzRGF0YVtpXS53aWR0aCwgdGhpY2tuZXNzLCBjb2xvciwgb3BhY2l0eSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMucmVzcG9uc2l2ZVBhaW50ZXIocGxheWVyc0NhbnZhc0luc3RhbmNlLCBwbGF5ZXJzVmlydHVhbENhbnZhc0luc3RhbmNlLmN2cyk7XG4gICAgICAgICAgb3BhY2l0eSArPSAwLjAxO1xuICAgICAgICB9LCB0aGlzLmZwcylcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgICB9LFxuXG4gICAgICBsb29wVXBkYXRlOiAoKSA9PiB7XG4gICAgICAgIGxldCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICBwbGF5ZXJzVmlydHVhbENhbnZhc0luc3RhbmNlLmNsZWFyKCk7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5ZXJzRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZHJhd1JlY3QocGxheWVyc1ZpcnR1YWxDYW52YXNJbnN0YW5jZS5jdHgsIHBsYXllcnNEYXRhW2ldLnBvc2l0aW9uLngsIHBsYXllcnNEYXRhW2ldLnBvc2l0aW9uLnksIHBsYXllcnNEYXRhW2ldLndpZHRoLCB0aGlja25lc3MsIGNvbG9yLCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5yZXNwb25zaXZlUGFpbnRlcihwbGF5ZXJzQ2FudmFzSW5zdGFuY2UsIHBsYXllcnNWaXJ0dWFsQ2FudmFzSW5zdGFuY2UuY3ZzKTtcbiAgICAgICAgfSwgdGhpcy5mcHMpXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHBsYXllcnM7XG4gIH1cblxuICBnZW5TY29yZWJvYXJkcygpIHtcbiAgICBsZXQgc2NvcmVib2FyZHNDYW52YXNJbnN0YW5jZSA9IHRoaXMuc2NvcmVib2FyZHNDYW52YXNJbnN0YW5jZSA9IHRoaXMuY3JlYXRlVmlydHVhbENhbnZhc0Jhc2VJbnN0YW5jZSgpO1xuICB9XG5cbiAgZ2VuQmFsbCgpIHtcbiAgICBsZXQgYmFsbENhbnZhc0luc3RhbmNlID0gdGhpcy5iYWxsQ2FudmFzSW5zdGFuY2UgPSB0aGlzLmNyZWF0ZVZpcnR1YWxDYW52YXNCYXNlSW5zdGFuY2UoKTtcbiAgICByZXR1cm4gYmFsbDtcbiAgfVxuXG4gIGRyYXdHYW1lKCkge1xuICAgIHRoaXMuZ2FtZVN0YXR1cyA9IDE7XG4gICAgdGhpcy5zdGFyU2t5LmFuaW1hdGUoKTtcbiAgICBsZXQgcHJvbWlzZSA9IHRoaXMuY3VydGFpbi5hbmltYXRlKCk7XG4gICAgcHJvbWlzZVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmdhbWVTdGF0dXMgPSAyO1xuICAgICAgICByZXR1cm4gdGhpcy5jb3VydC5hbmltYXRlKCk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmdhbWVTdGF0dXMgPSAzO1xuICAgICAgICBsZXQgcGxheWVyc1JlYWR5ID0gdGhpcy5wbGF5ZXJzLnJlYWR5KCk7XG4gICAgICAgIGxldCBhbGxSZWFkeVByb21pc2UgPSBQcm9taXNlLmFsbChbXG4gICAgICAgICAgcGxheWVyc1JlYWR5XG4gICAgICAgIF0pXG4gICAgICAgIHJldHVybiBhbGxSZWFkeVByb21pc2U7XG4gICAgICB9KVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmdhbWVTdGF0dXMgPSA0O1xuICAgICAgICBsZXQgZ2FtZVJlYWR5UHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xuICAgICAgICAgIHRoaXMuaW5pdEdhbWVEYXRhVXBkYXRlSW50ZXJ2YWwoKTtcbiAgICAgICAgICByZXMoKTtcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIGdhbWVSZWFkeVByb21pc2U7XG4gICAgICB9KVxuICAgIHJldHVybiBwcm9taXNlO1xuICB9XG5cbiAgaW5pdEdhbWVEYXRhVXBkYXRlSW50ZXJ2YWwoKSB7XG4gICAgdGhpcy5wbGF5ZXJzLmxvb3BVcGRhdGUoKTtcbiAgfVxuXG5cblxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2FtZUJ1aWxkZXIoKSB7XG4gIGxldCBnYW1lID0gYm9vdChFbmdpbmUsIERFRkFVTFQsIHt9LCBkb2N1bWVudC5ib2R5KTtcbiAgcmV0dXJuIGdhbWU7XG59XG4iLCJpbXBvcnQgeyByYW5kb21XaXRoaW5SYW5nZSwgY2FsY1dheXBvaW50cyB9IGZyb20gJy4vZnVuY3Rpb24nO1xuaW1wb3J0IHsgZ2V0Q2FjaGVDYW52YXMgfSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IHsgZHJhd0NpcmNsZSB9IGZyb20gJy4vc2hhcGUnO1xuaW1wb3J0ICdwYXRoMmQtcG9seWZpbGwnO1xuXG5leHBvcnQgY2xhc3MgU3dpcmw4Qml0IHtcbiAgY29uc3RydWN0b3IoY3R4KSB7XG4gICAgdGhpcy5jb3VudGVyQ2xvY2t3aXNlQXJyID0gW1xuICAgICAgeyBuYW1lOiAndGwnLCB4OiAwLCB5OiAwIH0sXG4gICAgICB7IG5hbWU6ICdibCcsIHg6IDAsIHk6IDEgfSxcbiAgICAgIHsgbmFtZTogJ2JyJywgeDogMSwgeTogMSB9LFxuICAgICAgeyBuYW1lOiAndHInLCB4OiAxLCB5OiAwIH1cbiAgICBdXG4gICAgdGhpcy5jbG9ja3dpc2VBcnIgPSBbXG4gICAgICB7IG5hbWU6ICd0cicsIHg6IDEsIHk6IDAgfSxcbiAgICAgIHsgbmFtZTogJ2JyJywgeDogMSwgeTogMSB9LFxuICAgICAgeyBuYW1lOiAnYmwnLCB4OiAwLCB5OiAxIH0sXG4gICAgICB7IG5hbWU6ICd0bCcsIHg6IDAsIHk6IDAgfVxuICAgIF1cbiAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICB0aGlzLmN2cyA9IGN0eC5jYW52YXM7XG4gICAgdGhpcy5hbmltYXRpb25FbmRUcmlnZ2VyO1xuICAgIHRoaXMub3JkZXIgPSAwO1xuICAgIHRoaXMucGF0aCA9IG5ldyBQYXRoMkQoKTtcbiAgICB0aGlzLmluaXRpYWxJbWFnZSA9IGdldENhY2hlQ2FudmFzKHRoaXMuY3R4KTtcbiAgICB0aGlzLmJhbmRXaWR0aFN0YWNrID0gMDtcbiAgfVxuICBnZXRTdGFydExvY2F0aW9uKGNsb2Nrd2lzZSwgb3JkZXIsIHRvdGFsV2lkdGgsIHRvdGFsSGVpZ2h0KSB7XG4gICAgbGV0IGRpcmVjdGlvbkFyciA9IGNsb2Nrd2lzZSA/IHRoaXMuY2xvY2t3aXNlQXJyIDogdGhpcy5jb3VudGVyQ2xvY2t3aXNlQXJyO1xuXG4gICAgbGV0IGxvY2F0aW9uID0ge1xuICAgICAgbmFtZTogZGlyZWN0aW9uQXJyW29yZGVyXS5uYW1lLFxuICAgICAgeDogZGlyZWN0aW9uQXJyW29yZGVyXS54ICogdG90YWxXaWR0aCArIHRoaXMuYmFuZFdpZHRoU3RhY2ssXG4gICAgICB5OiBkaXJlY3Rpb25BcnJbb3JkZXJdLnkgKiB0b3RhbEhlaWdodCArIHRoaXMuYmFuZFdpZHRoU3RhY2tcbiAgICB9XG4gICAgcmV0dXJuIGxvY2F0aW9uO1xuICB9XG4gIGFuaW1hdGUoY2xvY2t3aXNlID0gZmFsc2UsIGJhbmRXaWR0aCA9IDIwLCBjb2xvciA9ICdyZ2JhKDAsMCwwLDEpJykge1xuICAgIGxldCBhbmltYXRpb25Qcm9taXNlID0gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XG4gICAgICB0aGlzLmFuaW1hdGlvbkVuZFRyaWdnZXIgPSByZXM7XG4gICAgfSlcbiAgICB0aGlzLmRyYXdTd2lybChjbG9ja3dpc2UsIGJhbmRXaWR0aCwgY29sb3IpO1xuXG4gICAgcmV0dXJuIGFuaW1hdGlvblByb21pc2U7XG4gIH1cblxuICBkcmF3U3dpcmwoY2xvY2t3aXNlLCBiYW5kV2lkdGgsIGNvbG9yKSB7XG4gICAgbGV0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgdGhpcy5wYXRoLmFkZFBhdGgodGhpcy5kcmFXUmFuZG9tQW5nbGVkQmFuZFBhdGgoXG4gICAgICAgIGJhbmRXaWR0aCxcbiAgICAgICAgdGhpcy5jdnMud2lkdGggLSAyICogdGhpcy5iYW5kV2lkdGhTdGFjayxcbiAgICAgICAgdGhpcy5jdnMuaGVpZ2h0IC0gMiAqIHRoaXMuYmFuZFdpZHRoU3RhY2ssXG4gICAgICAgIHRoaXMuZ2V0U3RhcnRMb2NhdGlvbihjbG9ja3dpc2UsIHRoaXMub3JkZXIsIHRoaXMuY3ZzLndpZHRoIC0gMiAqIHRoaXMuYmFuZFdpZHRoU3RhY2ssIHRoaXMuY3ZzLmhlaWdodCAtIDIgKiB0aGlzLmJhbmRXaWR0aFN0YWNrKSxcbiAgICAgICAgY29sb3IsXG4gICAgICAgIGNsb2Nrd2lzZVxuICAgICAgKSlcbiAgICAgIHRoaXMuY3R4LmZpbGwodGhpcy5wYXRoKTtcbiAgICAgIGlmICh0aGlzLmN2cy53aWR0aCAtIDIgKiB0aGlzLmJhbmRXaWR0aFN0YWNrID4gMCAmJiB0aGlzLmN2cy5oZWlnaHQgLSAyICogdGhpcy5iYW5kV2lkdGhTdGFjayA+IDApIHtcblxuICAgICAgICBpZiAodGhpcy5vcmRlciA8IDMpIHtcbiAgICAgICAgICB0aGlzLm9yZGVyKytcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB0aGlzLm9yZGVyID0gMDtcbiAgICAgICAgICB0aGlzLmJhbmRXaWR0aFN0YWNrICs9IGJhbmRXaWR0aDtcblxuICAgICAgICB9XG5cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgdGhpcy5hbmltYXRpb25FbmRUcmlnZ2VyKCk7XG4gICAgICB9XG5cbiAgICB9LCAzMClcbiAgfVxuXG4gIGRyYVdSYW5kb21BbmdsZWRCYW5kUGF0aChiYW5kV2lkdGgsIHdpZHRoLCBoZWlnaHQsIHBvaW50LCBjb2xvciwgY2xvY2t3aXNlKSB7XG4gICAgbGV0IHBhdGggPSBuZXcgUGF0aDJEKCk7XG4gICAgaWYgKHBvaW50Lm5hbWUgPT09ICd0bCcpIHtcbiAgICAgIHRoaXMuZHJhd0FuZ2xlZEJhbmRGcm9tVEwocGF0aCwgYmFuZFdpZHRoLCB3aWR0aCwgaGVpZ2h0LCBwb2ludCwgY2xvY2t3aXNlKTtcbiAgICB9XG4gICAgZWxzZSBpZiAocG9pbnQubmFtZSA9PT0gJ2JsJykge1xuICAgICAgdGhpcy5kcmF3QW5nbGVkQmFuZEZyb21CTChwYXRoLCBiYW5kV2lkdGgsIHdpZHRoLCBoZWlnaHQsIHBvaW50LCBjbG9ja3dpc2UpO1xuICAgIH1cbiAgICBlbHNlIGlmIChwb2ludC5uYW1lID09PSAnYnInKSB7XG4gICAgICB0aGlzLmRyYXdBbmdsZWRCYW5kRnJvbUJSKHBhdGgsIGJhbmRXaWR0aCwgd2lkdGgsIGhlaWdodCwgcG9pbnQsIGNsb2Nrd2lzZSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHBvaW50Lm5hbWUgPT09ICd0cicpIHtcbiAgICAgIHRoaXMuZHJhd0FuZ2xlZEJhbmRGcm9tVFIocGF0aCwgYmFuZFdpZHRoLCB3aWR0aCwgaGVpZ2h0LCBwb2ludCwgY2xvY2t3aXNlKTtcbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG4gIH1cbiAgZHJhd0FuZ2xlZEJhbmRGcm9tVEwocGF0aCwgYmFuZFdpZHRoLCB3aWR0aCwgaGVpZ2h0LCBwb2ludCwgY2xvY2t3aXNlKSB7XG4gICAgcGF0aC5tb3ZlVG8ocG9pbnQueCwgcG9pbnQueSk7XG4gICAgaWYgKGNsb2Nrd2lzZSkge1xuICAgICAgbGV0IHJhbmRvbUhlaWdodCA9IHJhbmRvbVdpdGhpblJhbmdlKDAuNSAqIGhlaWdodCwgMC45ICogaGVpZ2h0KTtcbiAgICAgIHBhdGgubGluZVRvKHBvaW50LnggKyB3aWR0aCwgcG9pbnQueSk7XG4gICAgICBwYXRoLmxpbmVUbyhwb2ludC54ICsgd2lkdGgsIHBvaW50LnkgKyByYW5kb21IZWlnaHQpO1xuICAgICAgcGF0aC5saW5lVG8ocG9pbnQueCArIHdpZHRoIC0gYmFuZFdpZHRoLCBwb2ludC55ICsgcmFuZG9tSGVpZ2h0KTtcbiAgICAgIHBhdGgubGluZVRvKHBvaW50LnggKyB3aWR0aCAtIGJhbmRXaWR0aCwgcG9pbnQueSArIGJhbmRXaWR0aCk7XG4gICAgICBwYXRoLmxpbmVUbyhwb2ludC54LCBwb2ludC55ICsgYmFuZFdpZHRoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBsZXQgcmFuZG9tV2lkdGggPSByYW5kb21XaXRoaW5SYW5nZSgwLjUgKiB3aWR0aCwgMC45ICogd2lkdGgpO1xuICAgICAgcGF0aC5saW5lVG8ocG9pbnQueCArIGJhbmRXaWR0aCwgcG9pbnQueSk7XG4gICAgICBwYXRoLmxpbmVUbyhwb2ludC54ICsgYmFuZFdpZHRoLCBwb2ludC55ICsgaGVpZ2h0IC0gYmFuZFdpZHRoKTtcbiAgICAgIHBhdGgubGluZVRvKHBvaW50LnggKyByYW5kb21XaWR0aCwgcG9pbnQueSArIGhlaWdodCAtIGJhbmRXaWR0aCk7XG4gICAgICBwYXRoLmxpbmVUbyhwb2ludC54ICsgcmFuZG9tV2lkdGgsIHBvaW50LnkgKyBoZWlnaHQpO1xuICAgICAgcGF0aC5saW5lVG8ocG9pbnQueCwgcG9pbnQueSArIGhlaWdodCk7XG4gICAgfVxuICB9XG4gIGRyYXdBbmdsZWRCYW5kRnJvbUJMKHBhdGgsIGJhbmRXaWR0aCwgd2lkdGgsIGhlaWdodCwgcG9pbnQsIGNsb2Nrd2lzZSkge1xuICAgIHBhdGgubW92ZVRvKHBvaW50LngsIHBvaW50LnkpO1xuICAgIGlmIChjbG9ja3dpc2UpIHtcbiAgICAgIGxldCByYW5kb21XaWR0aCA9IHJhbmRvbVdpdGhpblJhbmdlKDAuNSAqIHdpZHRoLCAwLjkgKiB3aWR0aCk7XG4gICAgICBwYXRoLmxpbmVUbyhwb2ludC54ICsgYmFuZFdpZHRoLCBwb2ludC55KTtcbiAgICAgIHBhdGgubGluZVRvKHBvaW50LnggKyBiYW5kV2lkdGgsIHBvaW50LnkgLSBoZWlnaHQgKyBiYW5kV2lkdGgpO1xuICAgICAgcGF0aC5saW5lVG8ocG9pbnQueCArIHJhbmRvbVdpZHRoLCBwb2ludC55IC0gaGVpZ2h0ICsgYmFuZFdpZHRoKTtcbiAgICAgIHBhdGgubGluZVRvKHBvaW50LnggKyByYW5kb21XaWR0aCwgcG9pbnQueSAtIGhlaWdodCk7XG4gICAgICBwYXRoLmxpbmVUbyhwb2ludC54LCBwb2ludC55IC0gaGVpZ2h0KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBsZXQgcmFuZG9tSGVpZ2h0ID0gcmFuZG9tV2l0aGluUmFuZ2UoMC41ICogaGVpZ2h0LCAwLjkgKiBoZWlnaHQpO1xuICAgICAgcGF0aC5saW5lVG8ocG9pbnQueCwgcG9pbnQueSAtIGJhbmRXaWR0aCk7XG4gICAgICBwYXRoLmxpbmVUbyhwb2ludC54ICsgd2lkdGggLSBiYW5kV2lkdGgsIHBvaW50LnkgLSBiYW5kV2lkdGgpO1xuICAgICAgcGF0aC5saW5lVG8ocG9pbnQueCArIHdpZHRoIC0gYmFuZFdpZHRoLCBwb2ludC55IC0gcmFuZG9tSGVpZ2h0KTtcbiAgICAgIHBhdGgubGluZVRvKHBvaW50LnggKyB3aWR0aCwgcG9pbnQueSAtIHJhbmRvbUhlaWdodCk7XG4gICAgICBwYXRoLmxpbmVUbyhwb2ludC54ICsgd2lkdGgsIHBvaW50LnkpO1xuICAgIH1cbiAgfVxuICBkcmF3QW5nbGVkQmFuZEZyb21CUihwYXRoLCBiYW5kV2lkdGgsIHdpZHRoLCBoZWlnaHQsIHBvaW50LCBjbG9ja3dpc2UpIHtcbiAgICBwYXRoLm1vdmVUbyhwb2ludC54LCBwb2ludC55KTtcbiAgICBpZiAoY2xvY2t3aXNlKSB7XG4gICAgICBsZXQgcmFuZG9tSGVpZ2h0ID0gcmFuZG9tV2l0aGluUmFuZ2UoMC41ICogaGVpZ2h0LCAwLjkgKiBoZWlnaHQpO1xuICAgICAgcGF0aC5saW5lVG8ocG9pbnQueCwgcG9pbnQueSAtIGJhbmRXaWR0aCk7XG4gICAgICBwYXRoLmxpbmVUbyhwb2ludC54IC0gd2lkdGggKyBiYW5kV2lkdGgsIHBvaW50LnkgLSBiYW5kV2lkdGgpO1xuICAgICAgcGF0aC5saW5lVG8ocG9pbnQueCAtIHdpZHRoICsgYmFuZFdpZHRoLCBwb2ludC55IC0gcmFuZG9tSGVpZ2h0KTtcbiAgICAgIHBhdGgubGluZVRvKHBvaW50LnggLSB3aWR0aCwgcG9pbnQueSAtIHJhbmRvbUhlaWdodCk7XG4gICAgICBwYXRoLmxpbmVUbyhwb2ludC54IC0gd2lkdGgsIHBvaW50LnkpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGxldCByYW5kb21XaWR0aCA9IHJhbmRvbVdpdGhpblJhbmdlKDAuNSAqIHdpZHRoLCAwLjkgKiB3aWR0aCk7XG4gICAgICBwYXRoLmxpbmVUbyhwb2ludC54IC0gYmFuZFdpZHRoLCBwb2ludC55KTtcbiAgICAgIHBhdGgubGluZVRvKHBvaW50LnggLSBiYW5kV2lkdGgsIHBvaW50LnkgLSBoZWlnaHQgKyBiYW5kV2lkdGgpO1xuICAgICAgcGF0aC5saW5lVG8ocG9pbnQueCAtIHJhbmRvbVdpZHRoLCBwb2ludC55IC0gaGVpZ2h0ICsgYmFuZFdpZHRoKTtcbiAgICAgIHBhdGgubGluZVRvKHBvaW50LnggLSByYW5kb21XaWR0aCwgcG9pbnQueSAtIGhlaWdodCk7XG4gICAgICBwYXRoLmxpbmVUbyhwb2ludC54LCBwb2ludC55IC0gaGVpZ2h0KTtcbiAgICB9XG4gIH1cbiAgZHJhd0FuZ2xlZEJhbmRGcm9tVFIocGF0aCwgYmFuZFdpZHRoLCB3aWR0aCwgaGVpZ2h0LCBwb2ludCwgY2xvY2t3aXNlKSB7XG4gICAgcGF0aC5tb3ZlVG8ocG9pbnQueCwgcG9pbnQueSk7XG4gICAgaWYgKGNsb2Nrd2lzZSkge1xuICAgICAgbGV0IHJhbmRvbVdpZHRoID0gcmFuZG9tV2l0aGluUmFuZ2UoMC41ICogd2lkdGgsIDAuOSAqIHdpZHRoKTtcbiAgICAgIHBhdGgubGluZVRvKHBvaW50LnggLSBiYW5kV2lkdGgsIHBvaW50LnkpO1xuICAgICAgcGF0aC5saW5lVG8ocG9pbnQueCAtIGJhbmRXaWR0aCwgcG9pbnQueSArIGhlaWdodCAtIGJhbmRXaWR0aCk7XG4gICAgICBwYXRoLmxpbmVUbyhwb2ludC54IC0gcmFuZG9tV2lkdGgsIHBvaW50LnkgKyBoZWlnaHQgLSBiYW5kV2lkdGgpO1xuICAgICAgcGF0aC5saW5lVG8ocG9pbnQueCAtIHJhbmRvbVdpZHRoLCBwb2ludC55ICsgaGVpZ2h0KTtcbiAgICAgIHBhdGgubGluZVRvKHBvaW50LngsIHBvaW50LnkgKyBoZWlnaHQpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGxldCByYW5kb21IZWlnaHQgPSByYW5kb21XaXRoaW5SYW5nZSgwLjUgKiBoZWlnaHQsIDAuOSAqIGhlaWdodCk7XG4gICAgICBwYXRoLmxpbmVUbyhwb2ludC54LCBwb2ludC55ICsgYmFuZFdpZHRoKTtcbiAgICAgIHBhdGgubGluZVRvKHBvaW50LnggLSB3aWR0aCArIGJhbmRXaWR0aCwgcG9pbnQueSArIGJhbmRXaWR0aCk7XG4gICAgICBwYXRoLmxpbmVUbyhwb2ludC54IC0gd2lkdGggKyBiYW5kV2lkdGgsIHBvaW50LnkgKyByYW5kb21IZWlnaHQpO1xuICAgICAgcGF0aC5saW5lVG8ocG9pbnQueCAtIHdpZHRoLCBwb2ludC55ICsgcmFuZG9tSGVpZ2h0KTtcbiAgICAgIHBhdGgubGluZVRvKHBvaW50LnggLSB3aWR0aCwgcG9pbnQueSk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTdHJva2VBbmltYXRpb24ge1xuICBjb25zdHJ1Y3RvcihjdHgsIHZlcnRpY2VzKSB7XG4gICAgdGhpcy5jdHggPSBjdHg7XG4gICAgdGhpcy53YXlwb2ludHMgPSBjYWxjV2F5cG9pbnRzKHZlcnRpY2VzKTtcbiAgfVxuXG4gIGFuaW1hdGUoYmFuZFdpZHRoID0gMjAsIGNvbG9yID0gJ3JnYmEoMjU1LDI1NSwyNTUsMSknLCBmbGlja2VyID0gdHJ1ZSwgZGFzaCA9IFtdLCBnbG93aW5nID0gJ3doaXRlJywgZ2xvd2luZ1NpemUgPSA0MCkge1xuICAgIGxldCBhbmltYXRpb25Qcm9taXNlID0gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XG4gICAgICB0aGlzLmFuaW1hdGlvbkVuZFRyaWdnZXIgPSByZXM7XG4gICAgICB0aGlzLmxvb3BpbmdEcmF3U3Ryb2tlKGJhbmRXaWR0aCwgY29sb3IsIGZsaWNrZXIsIGRhc2gsIGdsb3dpbmcsIGdsb3dpbmdTaXplLCk7XG4gICAgfSlcblxuICAgIHJldHVybiBhbmltYXRpb25Qcm9taXNlO1xuICB9XG5cbiAgbG9vcGluZ0RyYXdTdHJva2UoYmFuZFdpZHRoLCBjb2xvciwgZmxpY2tlciwgZGFzaCwgZ2xvd2luZywgZ2xvd2luZ1NpemUsIGZwcyA9IDYwKSB7XG4gICAgbGV0IGNvdW50ZXIgPSAwO1xuICAgIGxldCAkdGhpcyA9IHRoaXM7XG4gICAgdGhpcy5jdHguc2F2ZSgpO1xuICAgIHRoaXMuY3R4LmxpbmVDYXAgPSAnc3F1YXJlJ1xuICAgIGlmIChkYXNoLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuY3R4LnNldExpbmVEYXNoKGRhc2gpO1xuICAgIH1cbiAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IGNvbG9yO1xuICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IGJhbmRXaWR0aDtcbiAgICB0aGlzLmN0eC5zaGFkb3dDb2xvciA9IGdsb3dpbmc7XG4gICAgdGhpcy5jdHguc2hhZG93Qmx1ciA9IGdsb3dpbmdTaXplO1xuICAgIGxldCBmbGlja2VyUmFuZ2UgPSAwO1xuXG4gICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgbGV0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgaWYgKGNvdW50ZXIgPCAkdGhpcy53YXlwb2ludHMubGVuZ3RoIC0gMSkge1xuICAgICAgICAkdGhpcy5jdHgubW92ZVRvKCR0aGlzLndheXBvaW50c1tjb3VudGVyXS54LCAkdGhpcy53YXlwb2ludHNbY291bnRlcl0ueSk7XG4gICAgICAgICR0aGlzLmN0eC5saW5lVG8oJHRoaXMud2F5cG9pbnRzW2NvdW50ZXIgKyAxXS54LCAkdGhpcy53YXlwb2ludHNbY291bnRlciArIDFdLnkpO1xuICAgICAgICBpZiAoZmxpY2tlcikge1xuICAgICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmN0eC5jYW52YXMud2lkdGgsIHRoaXMuY3R4LmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICAgIHRoaXMuY3R4Lmdsb2JhbEFscGhhID0gcmFuZG9tV2l0aGluUmFuZ2UoZmxpY2tlclJhbmdlLCAxKTtcbiAgICAgICAgICBmbGlja2VyUmFuZ2UgKz0gKGZwcyAvIDEwMDAwKTtcbiAgICAgICAgfVxuICAgICAgICAkdGhpcy5jdHguc3Ryb2tlKCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICR0aGlzLmN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgJHRoaXMuY3R4LnJlc3RvcmUoKTtcbiAgICAgICAgJHRoaXMuYW5pbWF0aW9uRW5kVHJpZ2dlcigpO1xuICAgICAgfVxuICAgICAgY291bnRlcisrO1xuICAgIH0sIDEwMDAgLyBmcHMpXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFN0YXJTa3kge1xuICBjb25zdHJ1Y3RvcihjdHgpIHtcbiAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICB0aGlzLmN2cyA9IGN0eC5jYW52YXM7XG4gICAgdGhpcy5zdGFycyA9IFtdO1xuICAgIHRoaXMuaW5pdCgpO1xuICB9XG4gIGluaXQoKSB7XG4gICAgdGhpcy5nZW5TdGFycygpO1xuXG4gIH1cbiAgZ2VuU3RhcnMobnVtYmVyID0gMTAwKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1iZXI7IGkrKykge1xuICAgICAgbGV0IHN0YXIgPSB7XG4gICAgICAgIHg6IHJhbmRvbVdpdGhpblJhbmdlKDAsIHRoaXMuY3ZzLndpZHRoKSxcbiAgICAgICAgeTogcmFuZG9tV2l0aGluUmFuZ2UoMCwgdGhpcy5jdnMuaGVpZ2h0KSxcbiAgICAgICAgY29sb3I6IGByZ2JhKDI1NSwyNTUsMjU1LCR7cmFuZG9tV2l0aGluUmFuZ2UoMC4yNSwgMSl9KWAsXG4gICAgICAgIHNpemU6IHJhbmRvbVdpdGhpblJhbmdlKDIsIDUpLFxuICAgICAgICB0d2lua2xlOiAoKSA9PiB7XG4gICAgICAgICAgc3Rhci5jb2xvciA9IGByZ2JhKDI1NSwyNTUsMjU1LCR7cmFuZG9tV2l0aGluUmFuZ2UoMC4yNSwgMSl9KWA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuc3RhcnMucHVzaChzdGFyKTtcbiAgICB9XG4gIH1cbiAgYW5pbWF0ZSgpIHtcbiAgICBsZXQgZHJhdyA9ICgpID0+IHtcbiAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmN2cy53aWR0aCwgdGhpcy5jdnMuaGVpZ2h0KTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zdGFycy5sZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLnN0YXJzW2ldLnR3aW5rbGUoKTtcbiAgICAgICAgZHJhd0NpcmNsZSh0aGlzLmN0eCwgdGhpcy5zdGFyc1tpXS54LCB0aGlzLnN0YXJzW2ldLnksIHRoaXMuc3RhcnNbaV0uc2l6ZSwgdGhpcy5zdGFyc1tpXS5jb2xvcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc2V0SW50ZXJ2YWwoZHJhdywgNTAwKTtcbiAgfVxufSIsImltcG9ydCB7IGRlYm91bmNlLCBpcywgcG9pbnRlckV2ZW50VG9YWSB9IGZyb20gJy4vZnVuY3Rpb24nO1xuXG5leHBvcnQgY2xhc3MgQ2FudmFzMkRGeEJhc2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBlbGUsIGNvbmZpZyA9IHt9LCBkZWZhdWx0Q29uZmlnID0ge30sIHZpcnR1YWxQYXJlbnRcbiAgKSB7XG4gICAgY29uZmlnID0gaXMub2JqKGNvbmZpZykgPyBjb25maWcgOiB7fTtcbiAgICBkZWZhdWx0Q29uZmlnID0gaXMub2JqKGRlZmF1bHRDb25maWcpID8gZGVmYXVsdENvbmZpZyA6IHt9O1xuICAgIHRoaXMuY29uZmlnID0gT2JqZWN0LmFzc2lnbihkZWZhdWx0Q29uZmlnLCBjb25maWcpO1xuICAgIHRoaXMuZWxlID0gZWxlO1xuICAgIHRoaXMuZnJhbWVDb3VudCA9IDA7XG4gICAgdGhpcy5tb3VzZSA9IHtcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwXG4gICAgfTtcbiAgICB0aGlzLnZpcnR1YWxQYXJlbnQgPSB2aXJ0dWFsUGFyZW50O1xuICAgIHRoaXMuY3R4ID0gbnVsbDtcbiAgICB0aGlzLmZyYW1lSXNQYXVzZWQgPSBmYWxzZTtcbiAgICB0aGlzLmlzQ2xpY2sgPSBmYWxzZTtcbiAgICB0aGlzLmNhbnZhc1NpemVmaXhlZCA9IGZhbHNlO1xuICAgIHRoaXMucHJldmlvdXNGcmFtZVRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICB0aGlzLmlzUmVzaXppbmcgPSBmYWxzZTtcbiAgICB0aGlzLmxheWVycyA9IFtdO1xuICAgIHRoaXMuaXNSZXNpemluZ0NhbGxiYWNrID0gKCkgPT4geyB9O1xuICAgIHRoaXMucmVzaXplZENhbGxiYWNrID0gKCkgPT4geyB9O1xuICAgIHRoaXMuaW5pdEJhc2UoKTtcbiAgfVxuICBpbml0QmFzZSgpIHtcblxuICAgIGlmICh0aGlzLmVsZS50YWdOYW1lICE9PSAnQ0FOVkFTJykge1xuICAgICAgY29uc3QgY3ZzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICB0aGlzLmxheWVyc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGhpcy5sYXllcnNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbGF5ZXJzLWNvbnRhaW5lcicpO1xuICAgICAgdGhpcy5sYXllcnNDb250YWluZXIuYXBwZW5kQ2hpbGQoY3ZzKTtcbiAgICAgIHRoaXMuZWxlLmFwcGVuZENoaWxkKHRoaXMubGF5ZXJzQ29udGFpbmVyKTtcblxuICAgICAgdGhpcy5jdnMgPSBjdnM7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5jdnMgPSB0aGlzLmVsZTtcbiAgICB9XG5cbiAgICB0aGlzLmN0eCA9IHRoaXMuY3ZzLmdldENvbnRleHQoJzJkJyk7XG4gICAgdGhpcy50cmlnZ2VyUmVzaXppbmdNZWNoYW5pc20oKTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gICAgICB0aGlzLmlzUmVzaXppbmcgPSB0cnVlO1xuICAgICAgdGhpcy5pc1Jlc2l6aW5nQ2FsbGJhY2soKTtcbiAgICB9KTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBkZWJvdW5jZSgoKSA9PiB7XG4gICAgICB0aGlzLmlzUmVzaXppbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMudHJpZ2dlclJlc2l6aW5nTWVjaGFuaXNtKCk7XG4gICAgICB0aGlzLnJlc2l6ZWRDYWxsYmFjaygpO1xuICAgIH0sIDUwMCkpO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Zpc2liaWxpdHljaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBpZiAoZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlICE9PSBcInZpc2libGVcIikge1xuICAgICAgICB0aGlzLmZyYW1lSXNQYXVzZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5hZGRFdmVudEhhbmRsZXIoKTtcblxuICAgIHRoaXMucmVmcmVzaEJhc2VGcmFtZUNvdW50ZXIoKTtcblxuICB9XG4gIHJlZnJlc2hCYXNlRnJhbWVDb3VudGVyKCkge1xuICAgIGxldCB0aGlzRnJhbWVUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgdGhpcy50aW1lRWxhcHNlZCA9ICh0aGlzRnJhbWVUaW1lIC0gdGhpcy5wcmV2aW91c0ZyYW1lVGltZSkgLyAxMDAwO1xuICAgIGlmICh0aGlzLmZyYW1lSXNQYXVzZWQpIHtcbiAgICAgIHRoaXMudGltZUVsYXBzZWQgPSAwO1xuICAgICAgdGhpcy5mcmFtZUlzUGF1c2VkID0gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMuZnJhbWVDb3VudCArPSAxO1xuICAgIHRoaXMucHJldmlvdXNGcmFtZVRpbWUgPSB0aGlzRnJhbWVUaW1lXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIHRoaXMucmVmcmVzaEJhc2VGcmFtZUNvdW50ZXIoKTtcbiAgICB9KVxuICB9XG5cbiAgdmlydHVhbFBhcmVudFZhbGlkYXRpb24oKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmJvZHkuY29udGFpbnModGhpcy52aXJ0dWFsUGFyZW50KSB8fCB0aGlzLnZpcnR1YWxQYXJlbnQgPT09IGRvY3VtZW50LmJvZHk7XG4gIH1cblxuICB0cmlnZ2VyUmVzaXppbmdNZWNoYW5pc20oKSB7XG4gICAgaWYgKHRoaXMuY2FudmFzU2l6ZWZpeGVkKSByZXR1cm47XG4gICAgbGV0IGNhY2hlQ3ZzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgbGV0IGNhY2hlQ3ZzQ29udGV4dCA9IGNhY2hlQ3ZzLmdldENvbnRleHQoJzJkJyk7XG4gICAgY2FjaGVDdnMud2lkdGggPSB0aGlzLmN2cy53aWR0aDtcbiAgICBjYWNoZUN2cy5oZWlnaHQgPSB0aGlzLmN2cy5oZWlnaHQ7XG5cblxuXG4gICAgaWYgKHRoaXMuZWxlLnRhZ05hbWUgIT09ICdDQU5WQVMnKSB7XG4gICAgICBsZXQgY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodDtcbiAgICAgIGlmICh0aGlzLnZpcnR1YWxQYXJlbnRWYWxpZGF0aW9uKCkpIHtcbiAgICAgICAgY2FudmFzV2lkdGggPSB0aGlzLnZpcnR1YWxQYXJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gICAgICAgIGNhbnZhc0hlaWdodCA9IHRoaXMudmlydHVhbFBhcmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgY2FudmFzV2lkdGggPSB0aGlzLmVsZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcbiAgICAgICAgY2FudmFzSGVpZ2h0ID0gdGhpcy5lbGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuICAgICAgfVxuXG4gICAgICB0aGlzLmN2cy53aWR0aCA9IGNhbnZhc1dpZHRoO1xuICAgICAgdGhpcy5jdnMuaGVpZ2h0ID0gY2FudmFzSGVpZ2h0O1xuXG5cblxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGxldCBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0O1xuICAgICAgaWYgKHRoaXMudmlydHVhbFBhcmVudFZhbGlkYXRpb24oKSkge1xuICAgICAgICBjYW52YXNXaWR0aCA9IHRoaXMudmlydHVhbFBhcmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcbiAgICAgICAgY2FudmFzSGVpZ2h0ID0gdGhpcy52aXJ0dWFsUGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjYW52YXNXaWR0aCA9IHRoaXMuY3ZzLnBhcmVudEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gICAgICAgIGNhbnZhc0hlaWdodCA9IHRoaXMuY3ZzLnBhcmVudEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuICAgICAgfVxuICAgICAgdGhpcy5jdnMud2lkdGggPSBjYW52YXNXaWR0aDtcbiAgICAgIHRoaXMuY3ZzLmhlaWdodCA9IGNhbnZhc0hlaWdodDtcblxuICAgIH1cblxuICB9XG5cbiAgc2V0Q2FudmFzU2l6ZSh3aWR0aCwgaGVpZ2h0KSB7XG4gICAgdGhpcy5jYW52YXNTaXplZml4ZWQgPSB0cnVlO1xuICAgIHRoaXMuY3ZzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5jdnMuaGVpZ2h0ID0gaGVpZ2h0O1xuICB9XG5cbiAgYmFja2dyb3VuZChjb2xvcikge1xuICAgIHRoaXMuY3R4LnNhdmUoKTtcbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICB0aGlzLmN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLmN2cy53aWR0aCwgdGhpcy5jdnMuaGVpZ2h0KTtcbiAgICB0aGlzLmN0eC5yZXN0b3JlKCk7XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jdnMud2lkdGgsIHRoaXMuY3ZzLmhlaWdodCk7XG4gIH1cblxuICBhZGRFdmVudEhhbmRsZXIoKSB7XG5cbiAgICB0aGlzLmN2cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMuaXNDbGljayA9IHRydWU7XG4gICAgfSlcbiAgICB0aGlzLmN2cy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgKCkgPT4ge1xuICAgICAgdGhpcy5pc0NsaWNrID0gdHJ1ZTtcblxuICAgIH0pXG5cbiAgICB0aGlzLmN2cy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZSkgPT4ge1xuICAgICAgbGV0IHBvcyA9IHBvaW50ZXJFdmVudFRvWFkoZSk7XG4gICAgICB0aGlzLm1vdXNlID0ge1xuICAgICAgICB4OiBwb3MueCxcbiAgICAgICAgeTogcG9zLnlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5jdnMuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgKGUpID0+IHtcbiAgICAgIGxldCBwb3MgPSBwb2ludGVyRXZlbnRUb1hZKGUpO1xuICAgICAgdGhpcy5tb3VzZSA9IHtcbiAgICAgICAgeDogcG9zLngsXG4gICAgICAgIHk6IHBvcy55XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGNyZWF0ZVZpcnR1YWxDYW52YXNCYXNlSW5zdGFuY2UoKSB7XG4gICAgbGV0IHZjdnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICBsZXQgdmN2c0luc3RhbmNlID0gbmV3IENhbnZhczJERnhCYXNlKHZjdnMsIHt9LCB7fSwgdGhpcy5lbGUpO1xuICAgIHJldHVybiB2Y3ZzSW5zdGFuY2U7XG4gIH1cblxuICBhZGROZXdMYXllcigpIHtcbiAgICBsZXQgY3ZzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgY3ZzLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICBsZXQgcGFyZW50UG9zaXRpb24gPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmN2cy5wYXJlbnROb2RlKS5nZXRQcm9wZXJ0eVZhbHVlKCdwb3NpdGlvbicpO1xuICAgIGlmIChwYXJlbnRQb3NpdGlvbiA9PT0gJ3N0YXRpYycpIHtcbiAgICAgIHRoaXMuY3ZzLnBhcmVudE5vZGUuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICAgIH1cbiAgICB0aGlzLmN2cy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShjdnMsIHRoaXMuY3ZzKTtcbiAgICBsZXQgY3ZzSW5zdGFuY2UgPSBuZXcgQ2FudmFzMkRGeEJhc2UoY3ZzLCB7fSwge30sIHRoaXMuZWxlKTtcbiAgICB0aGlzLmxheWVycy5wdXNoKGN2c0luc3RhbmNlKTtcbiAgICByZXR1cm4gY3ZzSW5zdGFuY2U7XG4gIH1cblxufVxuXG5leHBvcnQgZnVuY3Rpb24gYm9vdChjdG9yLCBkZWZhdWx0Q29uZmlnLCBjb25maWcsIHRhcmdldEVsZSwgdmlydHVhbFBhcmVudCkge1xuICBsZXQgY3ZzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpO1xuICBjdnMgPSBjdnMgPyBjdnMgOiBkb2N1bWVudC5ib2R5O1xuICBsZXQgZWxlID0gdGFyZ2V0RWxlID8gdGFyZ2V0RWxlIDogY3ZzO1xuICBsZXQgdHJpZ2dlcjtcbiAgbGV0IGJvb3RQcm9taXNlID0gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XG4gICAgdHJpZ2dlciA9ICgpID0+IHtcbiAgICAgIGxldCBpbnN0YW5jZSA9IG5ldyBjdG9yKGVsZSwgY29uZmlnLCBkZWZhdWx0Q29uZmlnLCB2aXJ0dWFsUGFyZW50KTtcbiAgICAgIHJlcyhpbnN0YW5jZSk7XG4gICAgfTtcbiAgfSk7XG5cbiAgbGV0IGNvbnRyb2xsZXIgPSB7XG4gICAgcHJvbWlzZTogYm9vdFByb21pc2UsXG4gICAgdHJpZ2dlcjogdHJpZ2dlcixcbiAgfVxuXG4gIHJldHVybiBjb250cm9sbGVyO1xufSIsImV4cG9ydCBmdW5jdGlvbiAkKHNlbGVjdG9yKSB7XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZShzZWxlY3Rvciwgc3RhdHVzKSB7XG4gIGxldCBzdHlsZVN0ciA9IHN0YXR1cyA/ICdibG9jaycgOiAnbm9uZSdcbiAgJChzZWxlY3Rvcikuc2V0QXR0cmlidXRlKCdzdHlsZScsIGBkaXNwbGF5OiR7c3R5bGVTdHJ9YCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVDbGFzcyhzZWxlY3RvciwgY2xhc3NuYW1lLCBzdGF0dXMpIHtcbiAgbGV0IGFjdGlvbiA9IHN0YXR1cyA/ICdhZGQnIDogJ3JlbW92ZSc7XG4gICQoc2VsZWN0b3IpLmNsYXNzTGlzdFthY3Rpb25dKGNsYXNzbmFtZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbWl0KGV2ZW50TmFtZSkge1xuICBsZXQgc29tZUV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0V2ZW50Jyk7XG4gIHNvbWVFdmVudC5pbml0RXZlbnQoZXZlbnROYW1lLCB0cnVlLCB0cnVlKTtcbiAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChzb21lRXZlbnQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyZW50cyhub2RlLCBzZWxlY3Rvcikge1xuICBsZXQgY3VycmVudCA9IG5vZGUsXG4gICAgbGlzdCA9IFtdO1xuICB3aGlsZSAoY3VycmVudC5wYXJlbnROb2RlICE9IG51bGwgJiYgY3VycmVudC5wYXJlbnROb2RlICE9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICAgIGxpc3QucHVzaChjdXJyZW50LnBhcmVudE5vZGUpO1xuICAgIGN1cnJlbnQgPSBjdXJyZW50LnBhcmVudE5vZGU7XG4gIH1cbiAgcmV0dXJuIGxpc3QuZmlsdGVyKChvLCBpKSA9PiB7XG4gICAgcmV0dXJuIG8ubWF0Y2hlcyhzZWxlY3RvcilcbiAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZhZGVPdXQoZWxlLCBkdXJhdGlvbiwgY2IgPSAoKSA9PiB7IGVsZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyB9KSB7XG4gIHZhciBmYWRlVGFyZ2V0ID0gZWxlO1xuICB2YXIgZmFkZUVmZmVjdCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICBpZiAoIWZhZGVUYXJnZXQuc3R5bGUub3BhY2l0eSkge1xuICAgICAgZmFkZVRhcmdldC5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICB9XG4gICAgaWYgKGZhZGVUYXJnZXQuc3R5bGUub3BhY2l0eSA+IDApIHtcbiAgICAgIGZhZGVUYXJnZXQuc3R5bGUub3BhY2l0eSAtPSAxIC8gZHVyYXRpb247XG4gICAgfSBlbHNlIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwoZmFkZUVmZmVjdCk7XG4gICAgICBjYigpXG4gICAgICBlbGUuc3R5bGUub3BhY2l0eSA9ICcnO1xuXG4gICAgfVxuICB9LCAxIC8gZHVyYXRpb24pO1xufSIsImNvbnN0IE1lcnNlbm5lVHdpc3RlciA9IHJlcXVpcmUoJ21lcnNlbm5lLXR3aXN0ZXInKTtcbmNvbnN0IE1UID0gbmV3IE1lcnNlbm5lVHdpc3RlcigpO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBkZWJvdW5jZShmdW5jLCBkZWxheSkge1xuICBsZXQgdGltZXIgPSBudWxsO1xuICBjb25zdCAkdGhpcyA9IHRoaXM7XG4gIHJldHVybiAoKSA9PiB7XG4gICAgY29uc3QgY29udGV4dCA9ICR0aGlzO1xuICAgIGNvbnN0IGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICB9LCBkZWxheSk7XG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBpcyA9IHtcbiAgYXJyOiBhID0+IEFycmF5LmlzQXJyYXkoYSksXG4gIG9iajogYSA9PiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYSkuaW5kZXhPZignT2JqZWN0JykgPiAtMSxcbiAgcHRoOiBhID0+IGlzLm9iaihhKSAmJiBhLmhhc093blByb3BlcnR5KCd0b3RhbExlbmd0aCcpLFxuICBzdmc6IGEgPT4gYSBpbnN0YW5jZW9mIFNWR0VsZW1lbnQsXG4gIGlucDogYSA9PiBhIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCxcbiAgZG9tOiBhID0+IGEubm9kZVR5cGUgfHwgaXMuc3ZnKGEpLFxuICBzdHI6IGEgPT4gdHlwZW9mIGEgPT09ICdzdHJpbmcnLFxuICBmbmM6IGEgPT4gdHlwZW9mIGEgPT09ICdmdW5jdGlvbicsXG4gIHVuZDogYSA9PiB0eXBlb2YgYSA9PT0gJ3VuZGVmaW5lZCcsXG4gIG5pbDogYSA9PiBpcy51bmQoYSkgfHwgYSA9PT0gbnVsbCxcbiAgaGV4OiBhID0+IC8oXiNbMC05QS1GXXs2fSQpfCheI1swLTlBLUZdezN9JCkvaS50ZXN0KGEpLFxuICByZ2JhOiBhID0+IC9ecmdiYS8udGVzdChhKSxcbiAgcmdiOiBhID0+IC9ecmdiLy50ZXN0KGEpLFxuICBoc2w6IGEgPT4gL15oc2wvLnRlc3QoYSksXG4gIGNvbDogYSA9PiAoaXMuaGV4KGEpIHx8IGlzLnJnYihhKSB8fCBpcy5oc2woYSkpLFxuICBrZXk6IGEgPT4gIWRlZmF1bHRJbnN0YW5jZVNldHRpbmdzLmhhc093blByb3BlcnR5KGEpICYmICFkZWZhdWx0VHdlZW5TZXR0aW5ncy5oYXNPd25Qcm9wZXJ0eShhKSAmJiBhICE9PSAndGFyZ2V0cycgJiYgYSAhPT0gJ2tleWZyYW1lcycsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByYW5kb21XaXRoaW5SYW5nZShtaW4sIG1heCwgc2VlZCkge1xuICByZXR1cm4gTVQucmFuZG9tKHNlZWQpICogKG1heCAtIG1pbikgKyBtaW47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXN0YW5jZSh4MCwgeTAsIHgxLCB5MSkge1xuICByZXR1cm4gTWF0aC5zcXJ0KCh4MSAtIHgwKSAqICh4MSAtIHgwKSArICh5MSAtIHkwKSAqICh5MSAtIHkwKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWdyZWVUb1JhZGlhbihkZWdyZWUpIHtcbiAgcmV0dXJuIChkZWdyZWUgLyAxODApICogTWF0aC5QSTtcbn1cblxuLyoqXG4gKiDntbHkuIAgdG91Y2hFdmVudC9tb3VzZUV2ZW50IOeahOS6i+S7tuinuOeZvOW6p+aomeWPluW+l+aWueW8j1xuICogQGV4cG9ydFxuICogQHBhcmFtIHtvYmplY3R9ICDlgrPlhaXnmoRldmVudCDnianku7ZcbiAqIEByZXR1cm5zIHtPYmplY3R9IOS4gOWAi+eJqeS7tiwg5YWn5ZCr5LqL5Lu26Ke455m85bqn5qiZ55qEWC9ZIOW6p+aomeWAvFxuICovXG5leHBvcnQgZnVuY3Rpb24gcG9pbnRlckV2ZW50VG9YWShlKSB7XG4gIHZhciBvdXQgPSB7IHg6IDAsIHk6IDAgfTtcbiAgaWYgKGUudHlwZSA9PT0gJ3RvdWNoc3RhcnQnIHx8IGUudHlwZSA9PT0gJ3RvdWNobW92ZScgfHwgZS50eXBlID09PSAndG91Y2hlbmQnIHx8IGUudHlwZSA9PT0gJ3RvdWNoY2FuY2VsJykge1xuICAgIHZhciB0b3VjaCA9IGUub3JpZ2luYWxFdmVudC50b3VjaGVzWzBdIHx8IGUub3JpZ2luYWxFdmVudC5jaGFuZ2VkVG91Y2hlc1swXTtcbiAgICBvdXQueCA9IHRvdWNoLnBhZ2VYO1xuICAgIG91dC55ID0gdG91Y2gucGFnZVk7XG4gIH0gZWxzZSBpZiAoZS50eXBlID09PSAnbW91c2Vkb3duJyB8fCBlLnR5cGUgPT09ICdtb3VzZXVwJyB8fCBlLnR5cGUgPT09ICdtb3VzZW1vdmUnIHx8IGUudHlwZSA9PT0gJ21vdXNlb3ZlcicgfHwgZS50eXBlID09PSAnbW91c2VvdXQnIHx8IGUudHlwZSA9PT0gJ21vdXNlZW50ZXInIHx8IGUudHlwZSA9PT0gJ21vdXNlbGVhdmUnKSB7XG4gICAgb3V0LnggPSBlLnBhZ2VYO1xuICAgIG91dC55ID0gZS5wYWdlWTtcbiAgfVxuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIOebtOaOpeWRvOWPq2hhc093blByb3BlcnR555qE5Y6f5Z6L5pa55rOVKOeUqOWcqGhhc093blByb3BlcnR56KKr5pS55YuV6YGO55qE54uA5rOBKVxuICpcbiAqIEBleHBvcnRcbiAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXQg55uu5qiZ54mp5Lu2XG4gKiBAcGFyYW0ge3N0cmluZ30gcHJvcCDnm67mqJlwcm9wXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0g5pivL+WQplxuICovXG5leHBvcnQgZnVuY3Rpb24gdGFyZ2V0SGFzUHJvcCh0YXJnZXQsIHByb3ApIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0YXJnZXQsIHByb3ApO1xufVxuXG4vKipcbiAqIOeiuuiqjeS4gOWAi+iuiuaVuC/lgLzmmK/lkKbngrrnqbooMOS4jeeul+epuuWAvClcbiAqIEBleHBvcnRcbiAqIEBwYXJhbSB7Kn0gdmFsXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0g5pivL+WQplxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNFbXB0eSh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdudW1iZXInID8gaXNOYU4odmFsKSA6ICF2YWw7XG59XG5cblxuZnVuY3Rpb24gcmdiVG9SZ2JhKHJnYlZhbHVlKSB7XG4gIGNvbnN0IHJnYiA9IC9yZ2JcXCgoXFxkKyxcXHMqW1xcZF0rLFxccypbXFxkXSspXFwpL2cuZXhlYyhyZ2JWYWx1ZSk7XG4gIHJldHVybiByZ2IgPyBgcmdiYSgke3JnYlsxXX0sMSlgIDogcmdiVmFsdWU7XG59XG5cbmZ1bmN0aW9uIGhleFRvUmdiYShoZXhWYWx1ZSkge1xuICBjb25zdCByZ3ggPSAvXiM/KFthLWZcXGRdKShbYS1mXFxkXSkoW2EtZlxcZF0pJC9pO1xuICBjb25zdCBoZXggPSBoZXhWYWx1ZS5yZXBsYWNlKHJneCwgKG0sIHIsIGcsIGIpID0+IHIgKyByICsgZyArIGcgKyBiICsgYik7XG4gIGNvbnN0IHJnYiA9IC9eIz8oW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkkL2kuZXhlYyhoZXgpO1xuICBjb25zdCByID0gcGFyc2VJbnQocmdiWzFdLCAxNik7XG4gIGNvbnN0IGcgPSBwYXJzZUludChyZ2JbMl0sIDE2KTtcbiAgY29uc3QgYiA9IHBhcnNlSW50KHJnYlszXSwgMTYpO1xuICByZXR1cm4gYHJnYmEoJHtyfSwke2d9LCR7Yn0sMSlgO1xufVxuXG5mdW5jdGlvbiBoc2xUb1JnYmEoaHNsVmFsdWUpIHtcbiAgY29uc3QgaHNsID0gL2hzbFxcKChcXGQrKSxcXHMqKFtcXGQuXSspJSxcXHMqKFtcXGQuXSspJVxcKS9nLmV4ZWMoaHNsVmFsdWUpIHx8IC9oc2xhXFwoKFxcZCspLFxccyooW1xcZC5dKyklLFxccyooW1xcZC5dKyklLFxccyooW1xcZC5dKylcXCkvZy5leGVjKGhzbFZhbHVlKTtcbiAgY29uc3QgaCA9IHBhcnNlSW50KGhzbFsxXSwgMTApIC8gMzYwO1xuICBjb25zdCBzID0gcGFyc2VJbnQoaHNsWzJdLCAxMCkgLyAxMDA7XG4gIGNvbnN0IGwgPSBwYXJzZUludChoc2xbM10sIDEwKSAvIDEwMDtcbiAgY29uc3QgYSA9IGhzbFs0XSB8fCAxO1xuICBmdW5jdGlvbiBodWUycmdiKHAsIHEsIHQpIHtcbiAgICBpZiAodCA8IDApIHQgKz0gMTtcbiAgICBpZiAodCA+IDEpIHQgLT0gMTtcbiAgICBpZiAodCA8IDEgLyA2KSByZXR1cm4gcCArIChxIC0gcCkgKiA2ICogdDtcbiAgICBpZiAodCA8IDEgLyAyKSByZXR1cm4gcTtcbiAgICBpZiAodCA8IDIgLyAzKSByZXR1cm4gcCArIChxIC0gcCkgKiAoMiAvIDMgLSB0KSAqIDY7XG4gICAgcmV0dXJuIHA7XG4gIH1cbiAgbGV0IHIsIGcsIGI7XG4gIGlmIChzID09IDApIHtcbiAgICByID0gZyA9IGIgPSBsO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHEgPSBsIDwgMC41ID8gbCAqICgxICsgcykgOiBsICsgcyAtIGwgKiBzO1xuICAgIGNvbnN0IHAgPSAyICogbCAtIHE7XG4gICAgciA9IGh1ZTJyZ2IocCwgcSwgaCArIDEgLyAzKTtcbiAgICBnID0gaHVlMnJnYihwLCBxLCBoKTtcbiAgICBiID0gaHVlMnJnYihwLCBxLCBoIC0gMSAvIDMpO1xuICB9XG4gIHJldHVybiBgcmdiYSgke3IgKiAyNTV9LCR7ZyAqIDI1NX0sJHtiICogMjU1fSwke2F9KWA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb2xvclRvUmdiYSh2YWwpIHtcbiAgaWYgKGlzLnJnYih2YWwpKSByZXR1cm4gcmdiVG9SZ2JhKHZhbCk7XG4gIGlmIChpcy5oZXgodmFsKSkgcmV0dXJuIGhleFRvUmdiYSh2YWwpO1xuICBpZiAoaXMuaHNsKHZhbCkpIHJldHVybiBoc2xUb1JnYmEodmFsKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENoYW5uZWxWYWx1ZXNGcm9tUmdiYShyZ2JhKSB7XG4gIHJldHVybiByZ2JhLnJlcGxhY2UoL14ocmdifHJnYmEpXFwoLywgJycpLnJlcGxhY2UoL1xcKSQvLCAnJykucmVwbGFjZSgvXFxzL2csICcnKS5zcGxpdCgnLCcpLm1hcCh4ID0+IHBhcnNlSW50KHgpKTtcbn1cblxuXG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjV2F5cG9pbnRzKHZlcnRpY2VzLCBpbnRlcnBvbGF0ZSA9IDMwKSB7XG4gIHZhciB3YXlwb2ludHMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCB2ZXJ0aWNlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBwdDAgPSB2ZXJ0aWNlc1tpIC0gMV07XG4gICAgdmFyIHB0MSA9IHZlcnRpY2VzW2ldO1xuICAgIHZhciBkeCA9IHB0MS54IC0gcHQwLng7XG4gICAgdmFyIGR5ID0gcHQxLnkgLSBwdDAueTtcbiAgICBmb3IgKHZhciBqID0gMDsgaiA8PSBpbnRlcnBvbGF0ZTsgaisrKSB7XG4gICAgICB2YXIgeCA9IHB0MC54ICsgZHggKiBqIC8gaW50ZXJwb2xhdGU7XG4gICAgICB2YXIgeSA9IHB0MC55ICsgZHkgKiBqIC8gaW50ZXJwb2xhdGU7XG4gICAgICB3YXlwb2ludHMucHVzaCh7XG4gICAgICAgIHg6IHgsXG4gICAgICAgIHk6IHlcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG5cbiAgcmV0dXJuICh3YXlwb2ludHMpO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGRyYXdTcXVhcmUoY3R4LCB4LCB5LCB3aWR0aCwgY29sb3IsIGFscGhhKSB7XG4gIGN0eC5zYXZlKCk7XG4gIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgY3R4Lmdsb2JhbEFscGhhID0gYWxwaGE7XG4gIGN0eC5maWxsUmVjdCh4IC0gd2lkdGggLyAyLCB5IC0gd2lkdGggLyAyLCB3aWR0aCwgd2lkdGgpO1xuICBjdHgucmVzdG9yZSgpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGRyYXdSZWN0KGN0eCwgeCwgeSwgd2lkdGgsIGhlaWdodCwgY29sb3IsIGFscGhhKSB7XG4gIGN0eC5zYXZlKCk7XG4gIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgY3R4Lmdsb2JhbEFscGhhID0gYWxwaGE7XG4gIGN0eC5maWxsUmVjdCh4IC0gd2lkdGggLyAyLCB5IC0gaGVpZ2h0IC8gMiwgd2lkdGgsIGhlaWdodCk7XG4gIGN0eC5yZXN0b3JlKCk7XG59XG5leHBvcnQgZnVuY3Rpb24gZHJhd0NpcmNsZShjdHgsIHgsIHksIHdpZHRoLCBjb2xvciwgYWxwaGEgPSAxKSB7XG4gIGN0eC5zYXZlKClcbiAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICBjdHguZ2xvYmFsQWxwaGEgPSBhbHBoYTtcbiAgY3R4LmJlZ2luUGF0aCgpO1xuICBjdHguYXJjKHgsIHksIHdpZHRoIC8gMiwgMCwgTWF0aC5QSSAqIDIsIHRydWUpO1xuICBjdHguY2xvc2VQYXRoKCk7XG4gIGN0eC5maWxsKCk7XG4gIGN0eC5yZXN0b3JlKCk7XG59XG5leHBvcnQgZnVuY3Rpb24gZHJhd0xpbmUoY3R4LCB4MCwgeTAsIHgxLCB5MSwgc3Ryb2tlQ29sb3IsIHN0cm9rZVdpZHRoKSB7XG4gIGN0eC5zYXZlKCk7XG4gIGN0eC5zdHJva2VTdHlsZSA9IHN0cm9rZUNvbG9yO1xuICBjdHgubGluZVdpZHRoID0gc3Ryb2tlV2lkdGg7XG4gIGN0eC5iZWdpblBhdGgoKTtcbiAgY3R4Lm1vdmVUbyh4MCwgeTApO1xuICBjdHgubGluZVRvKHgxLCB5MSk7XG4gIGN0eC5jbG9zZVBhdGgoKTtcbiAgY3R4LnN0cm9rZSgpO1xuICBjdHgucmVzdG9yZSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZHJhd1RleHQoY3R4LCB0ZXh0Q29udGVudCA9ICd0ZXh0JywgeCwgeSwgY29sb3IgPSAnIzAwMCcsIGZvbnRTaXplID0gMTIsIGZvbnQgPSAnQXJpYWwnKSB7XG4gIGN0eC5zYXZlKCk7XG4gIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgY3R4LmZvbnQgPSBgJHtmb250U2l6ZX1weCAke2ZvbnR9YDtcbiAgY3R4LmZpbGxUZXh0KHRleHRDb250ZW50LCB4LCB5KTtcbiAgY3R4LnJlc3RvcmUoKTtcbn1cblxuIiwiZXhwb3J0IGZ1bmN0aW9uIGdldFNjcmVlbnNob3RJbWFnZSh0YXJnZXRDdnMpIHtcbiAgbGV0IHVybCA9IHRhcmdldEN2cy50b0RhdGFVUkwoKTtcbiAgbGV0IGltYWdlID0gbmV3IEltYWdlKHRhcmdldEN2cy53aWR0aCwgdGFyZ2V0Q3ZzLmhlaWdodCk7XG4gIGltYWdlLnNyYyA9IHVybDtcbiAgcmV0dXJuIGltYWdlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2FjaGVDYW52YXModGFyZ2V0Q3R4KSB7XG4gIGxldCBjYWNoZUN2cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICBsZXQgY2FjaGVDdHggPSBjYWNoZUN2cy5nZXRDb250ZXh0KCcyZCcpO1xuICBsZXQgc291cmNlV2lkdGggPSB0YXJnZXRDdHguY2FudmFzLndpZHRoO1xuICBsZXQgc291cmNlSGVpZ2h0ID0gdGFyZ2V0Q3R4LmNhbnZhcy5oZWlnaHQ7XG4gIGNhY2hlQ3ZzLndpZHRoID0gc291cmNlV2lkdGg7XG4gIGNhY2hlQ3ZzLmhlaWdodCA9IHNvdXJjZUhlaWdodDtcblxuICBsZXQgY2FjaGVEYXRhID0gdGFyZ2V0Q3R4LmdldEltYWdlRGF0YSgwLCAwLCBzb3VyY2VXaWR0aCwgc291cmNlSGVpZ2h0KTtcbiAgY2FjaGVDdHgucHV0SW1hZ2VEYXRhKGNhY2hlRGF0YSwgMCwgMCk7XG4gIHJldHVybiBjYWNoZUN2cztcbn0iLCJpbXBvcnQgeyBDYW52YXMyREZ4QmFzZSwgYm9vdCB9IGZyb20gJy4vbGliL2Jhc2UnO1xuaW1wb3J0IHsgZHJhd0NpcmNsZSB9IGZyb20gJy4vbGliL3NoYXBlJztcbmltcG9ydCB7ICQgfSBmcm9tICcuL2xpYi9kb20nXG5pbXBvcnQgeyB0b2dnbGUgfSBmcm9tICcuL2xpYi9kb20nO1xuXG5jb25zdCBCQUxMX0FOSU1BVElPTl9ERUZBVUxUID0ge1xuICBhZnRlckltYWdlOiBmYWxzZSxcbiAgcmFkaXVzOiAyNSxcbiAgY29sb3I6ICdibHVlJyxcbiAgc3BlZWRYOiAxMDAwLFxuICBzcGVlZFk6IDEwMDAsXG4gIGFjY2VsZXJhdGlvblg6IDAsXG4gIGFjY2VsZXJhdGlvblk6IDAsXG4gIGZyaWN0aW9uWDogMSxcbiAgZnJpY3Rpb25ZOiAwLjk5OTdcbn1cblxuY29uc3QgU1BPVFNfQU5JTUFUSU9OX0RFRkFVTFQgPSB7XG4gIG1pblNpemU6IDEwLFxuICBtYXhTaXplOiAyMCxcbiAgcGVyaW9kOiAzMDAsXG4gIHN0ZXA6IDEwLFxuICBib3R0b21MYXllcjogbnVsbCxcbiAgY29sb3I6ICdyZ2JhKDAsMCwwLDAuMDMpJyxcbiAgY29sOiAxNSxcbiAgcm93OiAxNVxufVxuXG5jbGFzcyBCYXNpY1JlZmVsZWN0aW9uIGV4dGVuZHMgQ2FudmFzMkRGeEJhc2Uge1xuICBjb25zdHJ1Y3RvcihjYW52YXMsIGRlZmF1bHRDb25maWcsIGNvbmZpZywgdmlydHVhbFBhcmVudCkge1xuICAgIHN1cGVyKGNhbnZhcywgZGVmYXVsdENvbmZpZywgY29uZmlnLCB2aXJ0dWFsUGFyZW50KTtcbiAgICB0aGlzLnN3aXRjaFN0YXR1cyA9IGZhbHNlO1xuICAgIHRoaXMuaW5pdCgpO1xuICB9XG4gIGluaXQoKSB7XG4gICAgdGhpcy5zd2l0Y2hTdGF0dXMgPSB0cnVlO1xuICAgIHRoaXMuaW5pdEJhbGwoKTtcbiAgICB0aGlzLmFuaW1hdGVCYWxsKCk7XG4gIH1cblxuICBzd2l0Y2hlcihzdGF0dXMpIHtcbiAgICB0aGlzLnN3aXRjaFN0YXR1cyA9IHN0YXR1cztcbiAgfVxuXG4gIGluaXRCYWxsKCkge1xuICAgIGxldCAkdGhpcyA9IHRoaXM7XG4gICAgdGhpcy5iYWxsID0ge1xuICAgICAgYWZ0ZXJJbWFnZTogJHRoaXMuY29uZmlnLmFmdGVySW1hZ2UsXG4gICAgICBjb2xvcjogJHRoaXMuY29uZmlnLmNvbG9yLFxuICAgICAgcmFkaXVzOiAkdGhpcy5jb25maWcucmFkaXVzLFxuICAgICAgbG9jYXRpb246IHtcbiAgICAgICAgeDogJHRoaXMuY3ZzLndpZHRoIC8gMixcbiAgICAgICAgeTogJHRoaXMuY3ZzLmhlaWdodCAvIDIsXG4gICAgICB9LFxuICAgICAgc3BlZWQ6IHtcbiAgICAgICAgeDogJHRoaXMuY29uZmlnLnNwZWVkWCxcbiAgICAgICAgeTogJHRoaXMuY29uZmlnLnNwZWVkWVxuICAgICAgfSxcbiAgICAgIGFjY2VsZXJhdGlvbjoge1xuICAgICAgICB4OiAkdGhpcy5jb25maWcuYWNjZWxlcmF0aW9uWCxcbiAgICAgICAgeTogJHRoaXMuY29uZmlnLmFjY2VsZXJhdGlvbllcbiAgICAgIH0sXG4gICAgICBmcmljdGlvbjoge1xuICAgICAgICB4OiAkdGhpcy5jb25maWcuZnJpY3Rpb25YLFxuICAgICAgICB5OiAkdGhpcy5jb25maWcuZnJpY3Rpb25ZXG4gICAgICB9XG4gICAgfVxuICB9XG4gIGRyYXdCYWxsKCkge1xuICAgIGRyYXdDaXJjbGUodGhpcy5jdHgsIHRoaXMuYmFsbC5sb2NhdGlvbi54LCB0aGlzLmJhbGwubG9jYXRpb24ueSwgdGhpcy5iYWxsLnJhZGl1cyAqIDIsIHRoaXMuYmFsbC5jb2xvcik7XG4gIH1cbiAgYW5pbWF0ZUJhbGwoKSB7XG4gICAgaWYgKHRoaXMuc3dpdGNoU3RhdHVzID09IGZhbHNlKSByZXR1cm47XG4gICAgbGV0ICR0aGlzID0gdGhpcztcbiAgICBpZiAoJHRoaXMuYmFsbC5hZnRlckltYWdlID09PSB0cnVlKSB7XG4gICAgICAkdGhpcy5iYWNrZ3JvdW5kKCdyZ2IoMjU1LCAxNzcsIDQzLDAuMSknKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAkdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsICR0aGlzLmN2cy53aWR0aCwgJHRoaXMuY3ZzLmhlaWdodCk7XG4gICAgfVxuICAgICR0aGlzLmN0eC5kcmF3SW1hZ2UoJHRoaXMuY29uZmlnLmJvdHRvbUxheWVyLCAwLCAwKTtcbiAgICAkdGhpcy5kcmF3QmFsbCgpO1xuICAgICR0aGlzLnJlZnJlc2hMb2NhdGlvbigpO1xuICAgICR0aGlzLnJlZnJlc2hTcGVlZCgpO1xuICAgICR0aGlzLmNoZWNrQm91bmRhcnkoKTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoXG4gICAgICAkdGhpcy5hbmltYXRlQmFsbC5iaW5kKCR0aGlzKVxuICAgICk7XG4gIH1cblxuICByZWZyZXNoU3BlZWQoKSB7XG4gICAgbGV0IGR0ID0gdGhpcy50aW1lRWxhcHNlZDtcbiAgICB0aGlzLmJhbGwuc3BlZWQueCA9IHRoaXMuYmFsbC5zcGVlZC54ICogdGhpcy5iYWxsLmZyaWN0aW9uLnggKyB0aGlzLmJhbGwuYWNjZWxlcmF0aW9uLnggKiBkdDtcbiAgICB0aGlzLmJhbGwuc3BlZWQueSA9IHRoaXMuYmFsbC5zcGVlZC55ICogdGhpcy5iYWxsLmZyaWN0aW9uLnkgKyB0aGlzLmJhbGwuYWNjZWxlcmF0aW9uLnkgKiBkdDtcbiAgfVxuXG4gIHJlZnJlc2hMb2NhdGlvbigpIHtcbiAgICBsZXQgZHQgPSB0aGlzLnRpbWVFbGFwc2VkO1xuICAgIHRoaXMuYmFsbC5sb2NhdGlvbi54ICs9IHRoaXMuYmFsbC5zcGVlZC54ICogZHQ7XG4gICAgdGhpcy5iYWxsLmxvY2F0aW9uLnkgKz0gdGhpcy5iYWxsLnNwZWVkLnkgKiBkdDtcbiAgfVxuICBjaGVja0JvdW5kYXJ5KCkge1xuICAgIGxldCBiYWxsID0gdGhpcy5iYWxsO1xuICAgIGxldCBjYW52YXMgPSB0aGlzLmN2cztcbiAgICAvLyDnlbbnkIPmraPlnKjlupXnq69cbiAgICBpZiAoYmFsbC5sb2NhdGlvbi55ICsgYmFsbC5yYWRpdXMgPiBjYW52YXMuaGVpZ2h0KSB7XG4gICAgICAvLyDkuJTpgJ/luqbngrrmraPlgLzvvIjmnJ3kuIvvvIlcbiAgICAgIGlmIChiYWxsLnNwZWVkLnkgPiAwKSB7XG4gICAgICAgIGJhbGwuc3BlZWQueSA9IC1iYWxsLnNwZWVkLnk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIOeVtueQg+ato+WcqOmgguerr1xuICAgIGVsc2UgaWYgKGJhbGwubG9jYXRpb24ueSAtIGJhbGwucmFkaXVzIDwgMCkge1xuICAgICAgLy8g5LiU6YCf5bqm54K66LKg5YC877yI5pyd5LiK77yJXG4gICAgICBpZiAoYmFsbC5zcGVlZC55IDwgMCkge1xuICAgICAgICBiYWxsLnNwZWVkLnkgPSAtYmFsbC5zcGVlZC55O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIOeVtueQg+ato+WcqOWPs+err1xuICAgIGlmIChiYWxsLmxvY2F0aW9uLnggKyBiYWxsLnJhZGl1cyA+IGNhbnZhcy53aWR0aCkge1xuICAgICAgaWYgKGJhbGwuc3BlZWQueCA+IDApIHtcbiAgICAgICAgYmFsbC5zcGVlZC54ID0gLWJhbGwuc3BlZWQueDtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8g55W255CD5q2j5Zyo5bem56uvXG4gICAgZWxzZSBpZiAoYmFsbC5sb2NhdGlvbi54IC0gYmFsbC5yYWRpdXMgPCAwKSB7XG4gICAgICBpZiAoYmFsbC5zcGVlZC54IDwgMCkge1xuICAgICAgICBiYWxsLnNwZWVkLnggPSAtYmFsbC5zcGVlZC54O1xuICAgICAgfVxuICAgIH1cblxuICB9XG59XG5cbmNsYXNzIFNwb3RzQnVtcGluZyBleHRlbmRzIENhbnZhczJERnhCYXNlIHtcbiAgY29uc3RydWN0b3IoY2FudmFzLCBkZWZhdWx0Q29uZmlnLCBjb25maWcsIHZpcnR1YWxQYXJlbnQpIHtcbiAgICBzdXBlcihjYW52YXMsIGRlZmF1bHRDb25maWcsIGNvbmZpZywgdmlydHVhbFBhcmVudCk7XG4gICAgdGhpcy5zcG90c1NpemUgPSB0aGlzLmNvbmZpZy5taW5TaXplO1xuICAgIHRoaXMuZXhwYW5kID0gdHJ1ZTtcbiAgICB0aGlzLnN3aXRjaFN0YXR1cyA9IGZhbHNlO1xuICAgIHRoaXMuaW5pdCgpO1xuICB9XG4gIGluaXQoKSB7XG4gICAgdGhpcy5zd2l0Y2hTdGF0dXMgPSB0cnVlO1xuICAgIHRoaXMuYW5pbWF0ZSgpO1xuICB9XG5cbiAgc3dpdGNoZXIoc3RhdHVzKSB7XG4gICAgdGhpcy5zd2l0Y2hTdGF0dXMgPSBzdGF0dXM7XG4gIH1cblxuICBhbmltYXRlKCkge1xuICAgIGxldCAkdGhpcyA9IHRoaXM7XG4gICAgdGhpcy5pbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGlmICh0aGlzLnN3aXRjaFN0YXR1cykge1xuICAgICAgICAkdGhpcy5jbGVhcigpO1xuICAgICAgICAkdGhpcy5kcmF3U3BvdHMoKTtcbiAgICAgIH1cbiAgICB9LCB0aGlzLmNvbmZpZy5wZXJpb2QpXG4gIH1cblxuICBkcmF3U3BvdHMoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gdGhpcy5jb25maWcuY29sOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDw9IHRoaXMuY29uZmlnLmNvbDsgaisrKSB7XG4gICAgICAgIGRyYXdDaXJjbGUoXG4gICAgICAgICAgdGhpcy5jdHgsXG4gICAgICAgICAgaSAqIHRoaXMuY3ZzLndpZHRoIC8gdGhpcy5jb25maWcuY29sLFxuICAgICAgICAgIGogKiB0aGlzLmN2cy5oZWlnaHQgLyB0aGlzLmNvbmZpZy5yb3csXG4gICAgICAgICAgdGhpcy5zcG90c1NpemUsXG4gICAgICAgICAgdGhpcy5jb25maWcuY29sb3IsXG4gICAgICAgICAgMVxuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLnNwb3RzU2l6ZSAtIDEgPCB0aGlzLmNvbmZpZy5taW5TaXplKSB7XG4gICAgICB0aGlzLmV4cGFuZCA9IHRydWVcbiAgICB9XG4gICAgZWxzZSBpZiAodGhpcy5zcG90c1NpemUgKyAxID4gdGhpcy5jb25maWcubWF4U2l6ZSkge1xuICAgICAgdGhpcy5leHBhbmQgPSBmYWxzZVxuICAgIH1cbiAgICBpZiAodGhpcy5leHBhbmQpIHtcbiAgICAgIHRoaXMuc3BvdHNTaXplICs9IHRoaXMuY29uZmlnLnN0ZXA7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5zcG90c1NpemUgLT0gdGhpcy5jb25maWcuc3RlcDtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRTcGxhc2goKSB7XG4gIGxldCBpbml0aWFsU2NyZWVuID0gJCgnI2luaXRpYWwtc2NyZWVuJyk7XG4gIGxldCB2aXJ0dWFsQ2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gIGxldCBzd2l0Y2hlcjtcbiAgbGV0IHNwb3RBbmltYXRpb24gPSBib290KFNwb3RzQnVtcGluZywgU1BPVFNfQU5JTUFUSU9OX0RFRkFVTFQsIHt9LCB2aXJ0dWFsQ2FudmFzLCBpbml0aWFsU2NyZWVuKTtcbiAgbGV0IHNwbGFzaFByb21pc2UgPSBzcG90QW5pbWF0aW9uLnByb21pc2UudGhlbigoc3BvdHNCdW1waW5nSW5zdGFuY2UpID0+IHtcbiAgICBsZXQgYm9vdENvbnRyb2xsZXIgPSBib290KEJhc2ljUmVmZWxlY3Rpb24sIEJBTExfQU5JTUFUSU9OX0RFRkFVTFQsIHtcbiAgICAgIGFmdGVySW1hZ2U6IHRydWUsXG4gICAgICByYWRpdXM6IDQwLFxuICAgICAgY29sb3I6ICdyZ2JhKDAsIDAsIDAsMC43NSknLFxuICAgICAgc3BlZWRYOiAxMDAwLFxuICAgICAgYm90dG9tTGF5ZXI6IHNwb3RzQnVtcGluZ0luc3RhbmNlLmN2cyxcbiAgICAgIHNwZWVkWTogMTAwMCxcbiAgICAgIGFjY2VsZXJhdGlvblg6IDAsXG4gICAgICBhY2NlbGVyYXRpb25ZOiA5ODAsXG4gICAgICBmcmljdGlvblg6IDEsXG4gICAgfSwgaW5pdGlhbFNjcmVlbik7XG5cbiAgICBib290Q29udHJvbGxlci50cmlnZ2VyKCk7XG5cbiAgICByZXR1cm4gYm9vdENvbnRyb2xsZXIucHJvbWlzZS50aGVuKChiYXNpY1JlZmVsZWN0aW9uSW5zdGFuY2UpID0+IHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXMgPT4ge1xuICAgICAgICBzd2l0Y2hlciA9IChzdGF0dXMpID0+IHtcbiAgICAgICAgICBzcG90c0J1bXBpbmdJbnN0YW5jZS5zd2l0Y2hlcihzdGF0dXMpO1xuICAgICAgICAgIGJhc2ljUmVmZWxlY3Rpb25JbnN0YW5jZS5zd2l0Y2hlcihzdGF0dXMpO1xuICAgICAgICB9XG4gICAgICAgIHJlcyhzd2l0Y2hlcik7XG4gICAgICB9KVxuICAgIH0pXG4gIH0pXG4gIHNwb3RBbmltYXRpb24udHJpZ2dlcigpO1xuXG4gIHJldHVybiBzcGxhc2hQcm9taXNlO1xufVxuXG4iLCIvLyBleHBvcnQgY29uc3Qgc2NvcmVib2FyZHMgPSBbXG4vLyAgIHtcbi8vICAgICBwb3NpdGlvbjoge1xuLy8gICAgICAgeDogMCxcbi8vICAgICAgIHk6IDBcbi8vICAgICB9LFxuLy8gICAgIHNob3c6ICgpID0+IHsgfSxcbi8vICAgICB1cGRhdGU6ICgpID0+IHsgfVxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgcG9zaXRpb246IHtcbi8vICAgICAgIHg6IDAsXG4vLyAgICAgICB5OiAwXG4vLyAgICAgfSxcbi8vICAgICBzaG93OiAoKSA9PiB7IH0sXG4vLyAgICAgdXBkYXRlOiAoKSA9PiB7IH1cbi8vICAgfVxuLy8gXVxuXG5leHBvcnQgY29uc3QgcGxheWVyc0RhdGEgPSBbXG4gIHtcbiAgICBuYW1lOiAnPz8/JyxcbiAgICBzY29yZTogMCxcbiAgICB3aWR0aDogMCxcbiAgICBwb3NpdGlvbjoge1xuICAgICAgeDogMCxcbiAgICAgIHk6IDBcbiAgICB9XG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnPz8/JyxcbiAgICBzY29yZTogMCxcbiAgICB3aWR0aDogMCxcbiAgICBwb3NpdGlvbjoge1xuICAgICAgeDogMCxcbiAgICAgIHk6IDBcbiAgICB9XG4gIH1cbl07XG5cbmV4cG9ydCBjb25zdCBiYWxsID0ge1xuICBwb3NpdGlvbjoge1xuICAgIHg6IDAsXG4gICAgeTogMFxuICB9LFxuICBzcGVlZDoge1xuICAgIHg6IDAsXG4gICAgeTogMFxuICB9LFxuICBzaXplOiAwLFxuICBjb2xvcjogbnVsbFxufVxuXG5cblxuZXhwb3J0IGNvbnN0IHBsYXllclJlZiA9IHtcbiAgbmFtZTogJz8/PycsXG4gIG51bWJlcjogMFxufTsiLCJcbi8qKlxuICogRXhwb3NlIGBCYWNrb2ZmYC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJhY2tvZmY7XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBiYWNrb2ZmIHRpbWVyIHdpdGggYG9wdHNgLlxuICpcbiAqIC0gYG1pbmAgaW5pdGlhbCB0aW1lb3V0IGluIG1pbGxpc2Vjb25kcyBbMTAwXVxuICogLSBgbWF4YCBtYXggdGltZW91dCBbMTAwMDBdXG4gKiAtIGBqaXR0ZXJgIFswXVxuICogLSBgZmFjdG9yYCBbMl1cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0c1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBCYWNrb2ZmKG9wdHMpIHtcbiAgb3B0cyA9IG9wdHMgfHwge307XG4gIHRoaXMubXMgPSBvcHRzLm1pbiB8fCAxMDA7XG4gIHRoaXMubWF4ID0gb3B0cy5tYXggfHwgMTAwMDA7XG4gIHRoaXMuZmFjdG9yID0gb3B0cy5mYWN0b3IgfHwgMjtcbiAgdGhpcy5qaXR0ZXIgPSBvcHRzLmppdHRlciA+IDAgJiYgb3B0cy5qaXR0ZXIgPD0gMSA/IG9wdHMuaml0dGVyIDogMDtcbiAgdGhpcy5hdHRlbXB0cyA9IDA7XG59XG5cbi8qKlxuICogUmV0dXJuIHRoZSBiYWNrb2ZmIGR1cmF0aW9uLlxuICpcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuQmFja29mZi5wcm90b3R5cGUuZHVyYXRpb24gPSBmdW5jdGlvbigpe1xuICB2YXIgbXMgPSB0aGlzLm1zICogTWF0aC5wb3codGhpcy5mYWN0b3IsIHRoaXMuYXR0ZW1wdHMrKyk7XG4gIGlmICh0aGlzLmppdHRlcikge1xuICAgIHZhciByYW5kID0gIE1hdGgucmFuZG9tKCk7XG4gICAgdmFyIGRldmlhdGlvbiA9IE1hdGguZmxvb3IocmFuZCAqIHRoaXMuaml0dGVyICogbXMpO1xuICAgIG1zID0gKE1hdGguZmxvb3IocmFuZCAqIDEwKSAmIDEpID09IDAgID8gbXMgLSBkZXZpYXRpb24gOiBtcyArIGRldmlhdGlvbjtcbiAgfVxuICByZXR1cm4gTWF0aC5taW4obXMsIHRoaXMubWF4KSB8IDA7XG59O1xuXG4vKipcbiAqIFJlc2V0IHRoZSBudW1iZXIgb2YgYXR0ZW1wdHMuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5CYWNrb2ZmLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uKCl7XG4gIHRoaXMuYXR0ZW1wdHMgPSAwO1xufTtcblxuLyoqXG4gKiBTZXQgdGhlIG1pbmltdW0gZHVyYXRpb25cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkJhY2tvZmYucHJvdG90eXBlLnNldE1pbiA9IGZ1bmN0aW9uKG1pbil7XG4gIHRoaXMubXMgPSBtaW47XG59O1xuXG4vKipcbiAqIFNldCB0aGUgbWF4aW11bSBkdXJhdGlvblxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuQmFja29mZi5wcm90b3R5cGUuc2V0TWF4ID0gZnVuY3Rpb24obWF4KXtcbiAgdGhpcy5tYXggPSBtYXg7XG59O1xuXG4vKipcbiAqIFNldCB0aGUgaml0dGVyXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5CYWNrb2ZmLnByb3RvdHlwZS5zZXRKaXR0ZXIgPSBmdW5jdGlvbihqaXR0ZXIpe1xuICB0aGlzLmppdHRlciA9IGppdHRlcjtcbn07XG5cbiIsIi8qXG4gKiBiYXNlNjQtYXJyYXlidWZmZXJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9uaWtsYXN2aC9iYXNlNjQtYXJyYXlidWZmZXJcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTIgTmlrbGFzIHZvbiBIZXJ0emVuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKi9cbihmdW5jdGlvbihjaGFycyl7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIGV4cG9ydHMuZW5jb2RlID0gZnVuY3Rpb24oYXJyYXlidWZmZXIpIHtcbiAgICB2YXIgYnl0ZXMgPSBuZXcgVWludDhBcnJheShhcnJheWJ1ZmZlciksXG4gICAgaSwgbGVuID0gYnl0ZXMubGVuZ3RoLCBiYXNlNjQgPSBcIlwiO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSs9Mykge1xuICAgICAgYmFzZTY0ICs9IGNoYXJzW2J5dGVzW2ldID4+IDJdO1xuICAgICAgYmFzZTY0ICs9IGNoYXJzWygoYnl0ZXNbaV0gJiAzKSA8PCA0KSB8IChieXRlc1tpICsgMV0gPj4gNCldO1xuICAgICAgYmFzZTY0ICs9IGNoYXJzWygoYnl0ZXNbaSArIDFdICYgMTUpIDw8IDIpIHwgKGJ5dGVzW2kgKyAyXSA+PiA2KV07XG4gICAgICBiYXNlNjQgKz0gY2hhcnNbYnl0ZXNbaSArIDJdICYgNjNdO1xuICAgIH1cblxuICAgIGlmICgobGVuICUgMykgPT09IDIpIHtcbiAgICAgIGJhc2U2NCA9IGJhc2U2NC5zdWJzdHJpbmcoMCwgYmFzZTY0Lmxlbmd0aCAtIDEpICsgXCI9XCI7XG4gICAgfSBlbHNlIGlmIChsZW4gJSAzID09PSAxKSB7XG4gICAgICBiYXNlNjQgPSBiYXNlNjQuc3Vic3RyaW5nKDAsIGJhc2U2NC5sZW5ndGggLSAyKSArIFwiPT1cIjtcbiAgICB9XG5cbiAgICByZXR1cm4gYmFzZTY0O1xuICB9O1xuXG4gIGV4cG9ydHMuZGVjb2RlID0gIGZ1bmN0aW9uKGJhc2U2NCkge1xuICAgIHZhciBidWZmZXJMZW5ndGggPSBiYXNlNjQubGVuZ3RoICogMC43NSxcbiAgICBsZW4gPSBiYXNlNjQubGVuZ3RoLCBpLCBwID0gMCxcbiAgICBlbmNvZGVkMSwgZW5jb2RlZDIsIGVuY29kZWQzLCBlbmNvZGVkNDtcblxuICAgIGlmIChiYXNlNjRbYmFzZTY0Lmxlbmd0aCAtIDFdID09PSBcIj1cIikge1xuICAgICAgYnVmZmVyTGVuZ3RoLS07XG4gICAgICBpZiAoYmFzZTY0W2Jhc2U2NC5sZW5ndGggLSAyXSA9PT0gXCI9XCIpIHtcbiAgICAgICAgYnVmZmVyTGVuZ3RoLS07XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGFycmF5YnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKGJ1ZmZlckxlbmd0aCksXG4gICAgYnl0ZXMgPSBuZXcgVWludDhBcnJheShhcnJheWJ1ZmZlcik7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKz00KSB7XG4gICAgICBlbmNvZGVkMSA9IGNoYXJzLmluZGV4T2YoYmFzZTY0W2ldKTtcbiAgICAgIGVuY29kZWQyID0gY2hhcnMuaW5kZXhPZihiYXNlNjRbaSsxXSk7XG4gICAgICBlbmNvZGVkMyA9IGNoYXJzLmluZGV4T2YoYmFzZTY0W2krMl0pO1xuICAgICAgZW5jb2RlZDQgPSBjaGFycy5pbmRleE9mKGJhc2U2NFtpKzNdKTtcblxuICAgICAgYnl0ZXNbcCsrXSA9IChlbmNvZGVkMSA8PCAyKSB8IChlbmNvZGVkMiA+PiA0KTtcbiAgICAgIGJ5dGVzW3ArK10gPSAoKGVuY29kZWQyICYgMTUpIDw8IDQpIHwgKGVuY29kZWQzID4+IDIpO1xuICAgICAgYnl0ZXNbcCsrXSA9ICgoZW5jb2RlZDMgJiAzKSA8PCA2KSB8IChlbmNvZGVkNCAmIDYzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJyYXlidWZmZXI7XG4gIH07XG59KShcIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky9cIik7XG4iLCJcclxuLyoqXHJcbiAqIEV4cG9zZSBgRW1pdHRlcmAuXHJcbiAqL1xyXG5cclxuaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgbW9kdWxlLmV4cG9ydHMgPSBFbWl0dGVyO1xyXG59XHJcblxyXG4vKipcclxuICogSW5pdGlhbGl6ZSBhIG5ldyBgRW1pdHRlcmAuXHJcbiAqXHJcbiAqIEBhcGkgcHVibGljXHJcbiAqL1xyXG5cclxuZnVuY3Rpb24gRW1pdHRlcihvYmopIHtcclxuICBpZiAob2JqKSByZXR1cm4gbWl4aW4ob2JqKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBNaXhpbiB0aGUgZW1pdHRlciBwcm9wZXJ0aWVzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXHJcbiAqIEByZXR1cm4ge09iamVjdH1cclxuICogQGFwaSBwcml2YXRlXHJcbiAqL1xyXG5cclxuZnVuY3Rpb24gbWl4aW4ob2JqKSB7XHJcbiAgZm9yICh2YXIga2V5IGluIEVtaXR0ZXIucHJvdG90eXBlKSB7XHJcbiAgICBvYmpba2V5XSA9IEVtaXR0ZXIucHJvdG90eXBlW2tleV07XHJcbiAgfVxyXG4gIHJldHVybiBvYmo7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBMaXN0ZW4gb24gdGhlIGdpdmVuIGBldmVudGAgd2l0aCBgZm5gLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcclxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cclxuICogQHJldHVybiB7RW1pdHRlcn1cclxuICogQGFwaSBwdWJsaWNcclxuICovXHJcblxyXG5FbWl0dGVyLnByb3RvdHlwZS5vbiA9XHJcbkVtaXR0ZXIucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbihldmVudCwgZm4pe1xyXG4gIHRoaXMuX2NhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrcyB8fCB7fTtcclxuICAodGhpcy5fY2FsbGJhY2tzWyckJyArIGV2ZW50XSA9IHRoaXMuX2NhbGxiYWNrc1snJCcgKyBldmVudF0gfHwgW10pXHJcbiAgICAucHVzaChmbik7XHJcbiAgcmV0dXJuIHRoaXM7XHJcbn07XHJcblxyXG4vKipcclxuICogQWRkcyBhbiBgZXZlbnRgIGxpc3RlbmVyIHRoYXQgd2lsbCBiZSBpbnZva2VkIGEgc2luZ2xlXHJcbiAqIHRpbWUgdGhlbiBhdXRvbWF0aWNhbGx5IHJlbW92ZWQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxyXG4gKiBAcmV0dXJuIHtFbWl0dGVyfVxyXG4gKiBAYXBpIHB1YmxpY1xyXG4gKi9cclxuXHJcbkVtaXR0ZXIucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbihldmVudCwgZm4pe1xyXG4gIGZ1bmN0aW9uIG9uKCkge1xyXG4gICAgdGhpcy5vZmYoZXZlbnQsIG9uKTtcclxuICAgIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgfVxyXG5cclxuICBvbi5mbiA9IGZuO1xyXG4gIHRoaXMub24oZXZlbnQsIG9uKTtcclxuICByZXR1cm4gdGhpcztcclxufTtcclxuXHJcbi8qKlxyXG4gKiBSZW1vdmUgdGhlIGdpdmVuIGNhbGxiYWNrIGZvciBgZXZlbnRgIG9yIGFsbFxyXG4gKiByZWdpc3RlcmVkIGNhbGxiYWNrcy5cclxuICpcclxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXHJcbiAqIEByZXR1cm4ge0VtaXR0ZXJ9XHJcbiAqIEBhcGkgcHVibGljXHJcbiAqL1xyXG5cclxuRW1pdHRlci5wcm90b3R5cGUub2ZmID1cclxuRW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPVxyXG5FbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVBbGxMaXN0ZW5lcnMgPVxyXG5FbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24oZXZlbnQsIGZuKXtcclxuICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XHJcblxyXG4gIC8vIGFsbFxyXG4gIGlmICgwID09IGFyZ3VtZW50cy5sZW5ndGgpIHtcclxuICAgIHRoaXMuX2NhbGxiYWNrcyA9IHt9O1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvLyBzcGVjaWZpYyBldmVudFxyXG4gIHZhciBjYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3NbJyQnICsgZXZlbnRdO1xyXG4gIGlmICghY2FsbGJhY2tzKSByZXR1cm4gdGhpcztcclxuXHJcbiAgLy8gcmVtb3ZlIGFsbCBoYW5kbGVyc1xyXG4gIGlmICgxID09IGFyZ3VtZW50cy5sZW5ndGgpIHtcclxuICAgIGRlbGV0ZSB0aGlzLl9jYWxsYmFja3NbJyQnICsgZXZlbnRdO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvLyByZW1vdmUgc3BlY2lmaWMgaGFuZGxlclxyXG4gIHZhciBjYjtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IGNhbGxiYWNrcy5sZW5ndGg7IGkrKykge1xyXG4gICAgY2IgPSBjYWxsYmFja3NbaV07XHJcbiAgICBpZiAoY2IgPT09IGZuIHx8IGNiLmZuID09PSBmbikge1xyXG4gICAgICBjYWxsYmFja3Muc3BsaWNlKGksIDEpO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIFJlbW92ZSBldmVudCBzcGVjaWZpYyBhcnJheXMgZm9yIGV2ZW50IHR5cGVzIHRoYXQgbm9cclxuICAvLyBvbmUgaXMgc3Vic2NyaWJlZCBmb3IgdG8gYXZvaWQgbWVtb3J5IGxlYWsuXHJcbiAgaWYgKGNhbGxiYWNrcy5sZW5ndGggPT09IDApIHtcclxuICAgIGRlbGV0ZSB0aGlzLl9jYWxsYmFja3NbJyQnICsgZXZlbnRdO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHRoaXM7XHJcbn07XHJcblxyXG4vKipcclxuICogRW1pdCBgZXZlbnRgIHdpdGggdGhlIGdpdmVuIGFyZ3MuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxyXG4gKiBAcGFyYW0ge01peGVkfSAuLi5cclxuICogQHJldHVybiB7RW1pdHRlcn1cclxuICovXHJcblxyXG5FbWl0dGVyLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24oZXZlbnQpe1xyXG4gIHRoaXMuX2NhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrcyB8fCB7fTtcclxuXHJcbiAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpXHJcbiAgICAsIGNhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrc1snJCcgKyBldmVudF07XHJcblxyXG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcclxuICB9XHJcblxyXG4gIGlmIChjYWxsYmFja3MpIHtcclxuICAgIGNhbGxiYWNrcyA9IGNhbGxiYWNrcy5zbGljZSgwKTtcclxuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBjYWxsYmFja3MubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcclxuICAgICAgY2FsbGJhY2tzW2ldLmFwcGx5KHRoaXMsIGFyZ3MpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHRoaXM7XHJcbn07XHJcblxyXG4vKipcclxuICogUmV0dXJuIGFycmF5IG9mIGNhbGxiYWNrcyBmb3IgYGV2ZW50YC5cclxuICpcclxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XHJcbiAqIEByZXR1cm4ge0FycmF5fVxyXG4gKiBAYXBpIHB1YmxpY1xyXG4gKi9cclxuXHJcbkVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVycyA9IGZ1bmN0aW9uKGV2ZW50KXtcclxuICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XHJcbiAgcmV0dXJuIHRoaXMuX2NhbGxiYWNrc1snJCcgKyBldmVudF0gfHwgW107XHJcbn07XHJcblxyXG4vKipcclxuICogQ2hlY2sgaWYgdGhpcyBlbWl0dGVyIGhhcyBgZXZlbnRgIGhhbmRsZXJzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcclxuICogQHJldHVybiB7Qm9vbGVhbn1cclxuICogQGFwaSBwdWJsaWNcclxuICovXHJcblxyXG5FbWl0dGVyLnByb3RvdHlwZS5oYXNMaXN0ZW5lcnMgPSBmdW5jdGlvbihldmVudCl7XHJcbiAgcmV0dXJuICEhIHRoaXMubGlzdGVuZXJzKGV2ZW50KS5sZW5ndGg7XHJcbn07XHJcbiIsIi8qKlxuICogSGVscGVycy5cbiAqL1xuXG52YXIgcyA9IDEwMDA7XG52YXIgbSA9IHMgKiA2MDtcbnZhciBoID0gbSAqIDYwO1xudmFyIGQgPSBoICogMjQ7XG52YXIgdyA9IGQgKiA3O1xudmFyIHkgPSBkICogMzY1LjI1O1xuXG4vKipcbiAqIFBhcnNlIG9yIGZvcm1hdCB0aGUgZ2l2ZW4gYHZhbGAuXG4gKlxuICogT3B0aW9uczpcbiAqXG4gKiAgLSBgbG9uZ2AgdmVyYm9zZSBmb3JtYXR0aW5nIFtmYWxzZV1cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ3xOdW1iZXJ9IHZhbFxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQHRocm93cyB7RXJyb3J9IHRocm93IGFuIGVycm9yIGlmIHZhbCBpcyBub3QgYSBub24tZW1wdHkgc3RyaW5nIG9yIGEgbnVtYmVyXG4gKiBAcmV0dXJuIHtTdHJpbmd8TnVtYmVyfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHZhbCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsO1xuICBpZiAodHlwZSA9PT0gJ3N0cmluZycgJiYgdmFsLmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gcGFyc2UodmFsKTtcbiAgfSBlbHNlIGlmICh0eXBlID09PSAnbnVtYmVyJyAmJiBpc0Zpbml0ZSh2YWwpKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMubG9uZyA/IGZtdExvbmcodmFsKSA6IGZtdFNob3J0KHZhbCk7XG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKFxuICAgICd2YWwgaXMgbm90IGEgbm9uLWVtcHR5IHN0cmluZyBvciBhIHZhbGlkIG51bWJlci4gdmFsPScgK1xuICAgICAgSlNPTi5zdHJpbmdpZnkodmFsKVxuICApO1xufTtcblxuLyoqXG4gKiBQYXJzZSB0aGUgZ2l2ZW4gYHN0cmAgYW5kIHJldHVybiBtaWxsaXNlY29uZHMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7TnVtYmVyfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gcGFyc2Uoc3RyKSB7XG4gIHN0ciA9IFN0cmluZyhzdHIpO1xuICBpZiAoc3RyLmxlbmd0aCA+IDEwMCkge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgbWF0Y2ggPSAvXigtPyg/OlxcZCspP1xcLj9cXGQrKSAqKG1pbGxpc2Vjb25kcz98bXNlY3M/fG1zfHNlY29uZHM/fHNlY3M/fHN8bWludXRlcz98bWlucz98bXxob3Vycz98aHJzP3xofGRheXM/fGR8d2Vla3M/fHd8eWVhcnM/fHlycz98eSk/JC9pLmV4ZWMoXG4gICAgc3RyXG4gICk7XG4gIGlmICghbWF0Y2gpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIG4gPSBwYXJzZUZsb2F0KG1hdGNoWzFdKTtcbiAgdmFyIHR5cGUgPSAobWF0Y2hbMl0gfHwgJ21zJykudG9Mb3dlckNhc2UoKTtcbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSAneWVhcnMnOlxuICAgIGNhc2UgJ3llYXInOlxuICAgIGNhc2UgJ3lycyc6XG4gICAgY2FzZSAneXInOlxuICAgIGNhc2UgJ3knOlxuICAgICAgcmV0dXJuIG4gKiB5O1xuICAgIGNhc2UgJ3dlZWtzJzpcbiAgICBjYXNlICd3ZWVrJzpcbiAgICBjYXNlICd3JzpcbiAgICAgIHJldHVybiBuICogdztcbiAgICBjYXNlICdkYXlzJzpcbiAgICBjYXNlICdkYXknOlxuICAgIGNhc2UgJ2QnOlxuICAgICAgcmV0dXJuIG4gKiBkO1xuICAgIGNhc2UgJ2hvdXJzJzpcbiAgICBjYXNlICdob3VyJzpcbiAgICBjYXNlICdocnMnOlxuICAgIGNhc2UgJ2hyJzpcbiAgICBjYXNlICdoJzpcbiAgICAgIHJldHVybiBuICogaDtcbiAgICBjYXNlICdtaW51dGVzJzpcbiAgICBjYXNlICdtaW51dGUnOlxuICAgIGNhc2UgJ21pbnMnOlxuICAgIGNhc2UgJ21pbic6XG4gICAgY2FzZSAnbSc6XG4gICAgICByZXR1cm4gbiAqIG07XG4gICAgY2FzZSAnc2Vjb25kcyc6XG4gICAgY2FzZSAnc2Vjb25kJzpcbiAgICBjYXNlICdzZWNzJzpcbiAgICBjYXNlICdzZWMnOlxuICAgIGNhc2UgJ3MnOlxuICAgICAgcmV0dXJuIG4gKiBzO1xuICAgIGNhc2UgJ21pbGxpc2Vjb25kcyc6XG4gICAgY2FzZSAnbWlsbGlzZWNvbmQnOlxuICAgIGNhc2UgJ21zZWNzJzpcbiAgICBjYXNlICdtc2VjJzpcbiAgICBjYXNlICdtcyc6XG4gICAgICByZXR1cm4gbjtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxufVxuXG4vKipcbiAqIFNob3J0IGZvcm1hdCBmb3IgYG1zYC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gbXNcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGZtdFNob3J0KG1zKSB7XG4gIHZhciBtc0FicyA9IE1hdGguYWJzKG1zKTtcbiAgaWYgKG1zQWJzID49IGQpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIGQpICsgJ2QnO1xuICB9XG4gIGlmIChtc0FicyA+PSBoKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBoKSArICdoJztcbiAgfVxuICBpZiAobXNBYnMgPj0gbSkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gbSkgKyAnbSc7XG4gIH1cbiAgaWYgKG1zQWJzID49IHMpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIHMpICsgJ3MnO1xuICB9XG4gIHJldHVybiBtcyArICdtcyc7XG59XG5cbi8qKlxuICogTG9uZyBmb3JtYXQgZm9yIGBtc2AuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IG1zXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBmbXRMb25nKG1zKSB7XG4gIHZhciBtc0FicyA9IE1hdGguYWJzKG1zKTtcbiAgaWYgKG1zQWJzID49IGQpIHtcbiAgICByZXR1cm4gcGx1cmFsKG1zLCBtc0FicywgZCwgJ2RheScpO1xuICB9XG4gIGlmIChtc0FicyA+PSBoKSB7XG4gICAgcmV0dXJuIHBsdXJhbChtcywgbXNBYnMsIGgsICdob3VyJyk7XG4gIH1cbiAgaWYgKG1zQWJzID49IG0pIHtcbiAgICByZXR1cm4gcGx1cmFsKG1zLCBtc0FicywgbSwgJ21pbnV0ZScpO1xuICB9XG4gIGlmIChtc0FicyA+PSBzKSB7XG4gICAgcmV0dXJuIHBsdXJhbChtcywgbXNBYnMsIHMsICdzZWNvbmQnKTtcbiAgfVxuICByZXR1cm4gbXMgKyAnIG1zJztcbn1cblxuLyoqXG4gKiBQbHVyYWxpemF0aW9uIGhlbHBlci5cbiAqL1xuXG5mdW5jdGlvbiBwbHVyYWwobXMsIG1zQWJzLCBuLCBuYW1lKSB7XG4gIHZhciBpc1BsdXJhbCA9IG1zQWJzID49IG4gKiAxLjU7XG4gIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gbikgKyAnICcgKyBuYW1lICsgKGlzUGx1cmFsID8gJ3MnIDogJycpO1xufVxuIiwiLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbi8qKlxuICogVGhpcyBpcyB0aGUgd2ViIGJyb3dzZXIgaW1wbGVtZW50YXRpb24gb2YgYGRlYnVnKClgLlxuICovXG5cbmV4cG9ydHMuZm9ybWF0QXJncyA9IGZvcm1hdEFyZ3M7XG5leHBvcnRzLnNhdmUgPSBzYXZlO1xuZXhwb3J0cy5sb2FkID0gbG9hZDtcbmV4cG9ydHMudXNlQ29sb3JzID0gdXNlQ29sb3JzO1xuZXhwb3J0cy5zdG9yYWdlID0gbG9jYWxzdG9yYWdlKCk7XG5leHBvcnRzLmRlc3Ryb3kgPSAoKCkgPT4ge1xuXHRsZXQgd2FybmVkID0gZmFsc2U7XG5cblx0cmV0dXJuICgpID0+IHtcblx0XHRpZiAoIXdhcm5lZCkge1xuXHRcdFx0d2FybmVkID0gdHJ1ZTtcblx0XHRcdGNvbnNvbGUud2FybignSW5zdGFuY2UgbWV0aG9kIGBkZWJ1Zy5kZXN0cm95KClgIGlzIGRlcHJlY2F0ZWQgYW5kIG5vIGxvbmdlciBkb2VzIGFueXRoaW5nLiBJdCB3aWxsIGJlIHJlbW92ZWQgaW4gdGhlIG5leHQgbWFqb3IgdmVyc2lvbiBvZiBgZGVidWdgLicpO1xuXHRcdH1cblx0fTtcbn0pKCk7XG5cbi8qKlxuICogQ29sb3JzLlxuICovXG5cbmV4cG9ydHMuY29sb3JzID0gW1xuXHQnIzAwMDBDQycsXG5cdCcjMDAwMEZGJyxcblx0JyMwMDMzQ0MnLFxuXHQnIzAwMzNGRicsXG5cdCcjMDA2NkNDJyxcblx0JyMwMDY2RkYnLFxuXHQnIzAwOTlDQycsXG5cdCcjMDA5OUZGJyxcblx0JyMwMENDMDAnLFxuXHQnIzAwQ0MzMycsXG5cdCcjMDBDQzY2Jyxcblx0JyMwMENDOTknLFxuXHQnIzAwQ0NDQycsXG5cdCcjMDBDQ0ZGJyxcblx0JyMzMzAwQ0MnLFxuXHQnIzMzMDBGRicsXG5cdCcjMzMzM0NDJyxcblx0JyMzMzMzRkYnLFxuXHQnIzMzNjZDQycsXG5cdCcjMzM2NkZGJyxcblx0JyMzMzk5Q0MnLFxuXHQnIzMzOTlGRicsXG5cdCcjMzNDQzAwJyxcblx0JyMzM0NDMzMnLFxuXHQnIzMzQ0M2NicsXG5cdCcjMzNDQzk5Jyxcblx0JyMzM0NDQ0MnLFxuXHQnIzMzQ0NGRicsXG5cdCcjNjYwMENDJyxcblx0JyM2NjAwRkYnLFxuXHQnIzY2MzNDQycsXG5cdCcjNjYzM0ZGJyxcblx0JyM2NkNDMDAnLFxuXHQnIzY2Q0MzMycsXG5cdCcjOTkwMENDJyxcblx0JyM5OTAwRkYnLFxuXHQnIzk5MzNDQycsXG5cdCcjOTkzM0ZGJyxcblx0JyM5OUNDMDAnLFxuXHQnIzk5Q0MzMycsXG5cdCcjQ0MwMDAwJyxcblx0JyNDQzAwMzMnLFxuXHQnI0NDMDA2NicsXG5cdCcjQ0MwMDk5Jyxcblx0JyNDQzAwQ0MnLFxuXHQnI0NDMDBGRicsXG5cdCcjQ0MzMzAwJyxcblx0JyNDQzMzMzMnLFxuXHQnI0NDMzM2NicsXG5cdCcjQ0MzMzk5Jyxcblx0JyNDQzMzQ0MnLFxuXHQnI0NDMzNGRicsXG5cdCcjQ0M2NjAwJyxcblx0JyNDQzY2MzMnLFxuXHQnI0NDOTkwMCcsXG5cdCcjQ0M5OTMzJyxcblx0JyNDQ0NDMDAnLFxuXHQnI0NDQ0MzMycsXG5cdCcjRkYwMDAwJyxcblx0JyNGRjAwMzMnLFxuXHQnI0ZGMDA2NicsXG5cdCcjRkYwMDk5Jyxcblx0JyNGRjAwQ0MnLFxuXHQnI0ZGMDBGRicsXG5cdCcjRkYzMzAwJyxcblx0JyNGRjMzMzMnLFxuXHQnI0ZGMzM2NicsXG5cdCcjRkYzMzk5Jyxcblx0JyNGRjMzQ0MnLFxuXHQnI0ZGMzNGRicsXG5cdCcjRkY2NjAwJyxcblx0JyNGRjY2MzMnLFxuXHQnI0ZGOTkwMCcsXG5cdCcjRkY5OTMzJyxcblx0JyNGRkNDMDAnLFxuXHQnI0ZGQ0MzMydcbl07XG5cbi8qKlxuICogQ3VycmVudGx5IG9ubHkgV2ViS2l0LWJhc2VkIFdlYiBJbnNwZWN0b3JzLCBGaXJlZm94ID49IHYzMSxcbiAqIGFuZCB0aGUgRmlyZWJ1ZyBleHRlbnNpb24gKGFueSBGaXJlZm94IHZlcnNpb24pIGFyZSBrbm93blxuICogdG8gc3VwcG9ydCBcIiVjXCIgQ1NTIGN1c3RvbWl6YXRpb25zLlxuICpcbiAqIFRPRE86IGFkZCBhIGBsb2NhbFN0b3JhZ2VgIHZhcmlhYmxlIHRvIGV4cGxpY2l0bHkgZW5hYmxlL2Rpc2FibGUgY29sb3JzXG4gKi9cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbXBsZXhpdHlcbmZ1bmN0aW9uIHVzZUNvbG9ycygpIHtcblx0Ly8gTkI6IEluIGFuIEVsZWN0cm9uIHByZWxvYWQgc2NyaXB0LCBkb2N1bWVudCB3aWxsIGJlIGRlZmluZWQgYnV0IG5vdCBmdWxseVxuXHQvLyBpbml0aWFsaXplZC4gU2luY2Ugd2Uga25vdyB3ZSdyZSBpbiBDaHJvbWUsIHdlJ2xsIGp1c3QgZGV0ZWN0IHRoaXMgY2FzZVxuXHQvLyBleHBsaWNpdGx5XG5cdGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cucHJvY2VzcyAmJiAod2luZG93LnByb2Nlc3MudHlwZSA9PT0gJ3JlbmRlcmVyJyB8fCB3aW5kb3cucHJvY2Vzcy5fX253anMpKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHQvLyBJbnRlcm5ldCBFeHBsb3JlciBhbmQgRWRnZSBkbyBub3Qgc3VwcG9ydCBjb2xvcnMuXG5cdGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IudXNlckFnZW50ICYmIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5tYXRjaCgvKGVkZ2V8dHJpZGVudClcXC8oXFxkKykvKSkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdC8vIElzIHdlYmtpdD8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTY0NTk2MDYvMzc2NzczXG5cdC8vIGRvY3VtZW50IGlzIHVuZGVmaW5lZCBpbiByZWFjdC1uYXRpdmU6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC1uYXRpdmUvcHVsbC8xNjMyXG5cdHJldHVybiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5XZWJraXRBcHBlYXJhbmNlKSB8fFxuXHRcdC8vIElzIGZpcmVidWc/IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzM5ODEyMC8zNzY3NzNcblx0XHQodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmNvbnNvbGUgJiYgKHdpbmRvdy5jb25zb2xlLmZpcmVidWcgfHwgKHdpbmRvdy5jb25zb2xlLmV4Y2VwdGlvbiAmJiB3aW5kb3cuY29uc29sZS50YWJsZSkpKSB8fFxuXHRcdC8vIElzIGZpcmVmb3ggPj0gdjMxP1xuXHRcdC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvVG9vbHMvV2ViX0NvbnNvbGUjU3R5bGluZ19tZXNzYWdlc1xuXHRcdCh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IudXNlckFnZW50ICYmIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5tYXRjaCgvZmlyZWZveFxcLyhcXGQrKS8pICYmIHBhcnNlSW50KFJlZ0V4cC4kMSwgMTApID49IDMxKSB8fFxuXHRcdC8vIERvdWJsZSBjaGVjayB3ZWJraXQgaW4gdXNlckFnZW50IGp1c3QgaW4gY2FzZSB3ZSBhcmUgaW4gYSB3b3JrZXJcblx0XHQodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudCAmJiBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkubWF0Y2goL2FwcGxld2Via2l0XFwvKFxcZCspLykpO1xufVxuXG4vKipcbiAqIENvbG9yaXplIGxvZyBhcmd1bWVudHMgaWYgZW5hYmxlZC5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGZvcm1hdEFyZ3MoYXJncykge1xuXHRhcmdzWzBdID0gKHRoaXMudXNlQ29sb3JzID8gJyVjJyA6ICcnKSArXG5cdFx0dGhpcy5uYW1lc3BhY2UgK1xuXHRcdCh0aGlzLnVzZUNvbG9ycyA/ICcgJWMnIDogJyAnKSArXG5cdFx0YXJnc1swXSArXG5cdFx0KHRoaXMudXNlQ29sb3JzID8gJyVjICcgOiAnICcpICtcblx0XHQnKycgKyBtb2R1bGUuZXhwb3J0cy5odW1hbml6ZSh0aGlzLmRpZmYpO1xuXG5cdGlmICghdGhpcy51c2VDb2xvcnMpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBjID0gJ2NvbG9yOiAnICsgdGhpcy5jb2xvcjtcblx0YXJncy5zcGxpY2UoMSwgMCwgYywgJ2NvbG9yOiBpbmhlcml0Jyk7XG5cblx0Ly8gVGhlIGZpbmFsIFwiJWNcIiBpcyBzb21ld2hhdCB0cmlja3ksIGJlY2F1c2UgdGhlcmUgY291bGQgYmUgb3RoZXJcblx0Ly8gYXJndW1lbnRzIHBhc3NlZCBlaXRoZXIgYmVmb3JlIG9yIGFmdGVyIHRoZSAlYywgc28gd2UgbmVlZCB0b1xuXHQvLyBmaWd1cmUgb3V0IHRoZSBjb3JyZWN0IGluZGV4IHRvIGluc2VydCB0aGUgQ1NTIGludG9cblx0bGV0IGluZGV4ID0gMDtcblx0bGV0IGxhc3RDID0gMDtcblx0YXJnc1swXS5yZXBsYWNlKC8lW2EtekEtWiVdL2csIG1hdGNoID0+IHtcblx0XHRpZiAobWF0Y2ggPT09ICclJScpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aW5kZXgrKztcblx0XHRpZiAobWF0Y2ggPT09ICclYycpIHtcblx0XHRcdC8vIFdlIG9ubHkgYXJlIGludGVyZXN0ZWQgaW4gdGhlICpsYXN0KiAlY1xuXHRcdFx0Ly8gKHRoZSB1c2VyIG1heSBoYXZlIHByb3ZpZGVkIHRoZWlyIG93bilcblx0XHRcdGxhc3RDID0gaW5kZXg7XG5cdFx0fVxuXHR9KTtcblxuXHRhcmdzLnNwbGljZShsYXN0QywgMCwgYyk7XG59XG5cbi8qKlxuICogSW52b2tlcyBgY29uc29sZS5kZWJ1ZygpYCB3aGVuIGF2YWlsYWJsZS5cbiAqIE5vLW9wIHdoZW4gYGNvbnNvbGUuZGVidWdgIGlzIG5vdCBhIFwiZnVuY3Rpb25cIi5cbiAqIElmIGBjb25zb2xlLmRlYnVnYCBpcyBub3QgYXZhaWxhYmxlLCBmYWxscyBiYWNrXG4gKiB0byBgY29uc29sZS5sb2dgLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cbmV4cG9ydHMubG9nID0gY29uc29sZS5kZWJ1ZyB8fCBjb25zb2xlLmxvZyB8fCAoKCkgPT4ge30pO1xuXG4vKipcbiAqIFNhdmUgYG5hbWVzcGFjZXNgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2VzXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gc2F2ZShuYW1lc3BhY2VzKSB7XG5cdHRyeSB7XG5cdFx0aWYgKG5hbWVzcGFjZXMpIHtcblx0XHRcdGV4cG9ydHMuc3RvcmFnZS5zZXRJdGVtKCdkZWJ1ZycsIG5hbWVzcGFjZXMpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRleHBvcnRzLnN0b3JhZ2UucmVtb3ZlSXRlbSgnZGVidWcnKTtcblx0XHR9XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Ly8gU3dhbGxvd1xuXHRcdC8vIFhYWCAoQFFpeC0pIHNob3VsZCB3ZSBiZSBsb2dnaW5nIHRoZXNlP1xuXHR9XG59XG5cbi8qKlxuICogTG9hZCBgbmFtZXNwYWNlc2AuXG4gKlxuICogQHJldHVybiB7U3RyaW5nfSByZXR1cm5zIHRoZSBwcmV2aW91c2x5IHBlcnNpc3RlZCBkZWJ1ZyBtb2Rlc1xuICogQGFwaSBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGxvYWQoKSB7XG5cdGxldCByO1xuXHR0cnkge1xuXHRcdHIgPSBleHBvcnRzLnN0b3JhZ2UuZ2V0SXRlbSgnZGVidWcnKTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHQvLyBTd2FsbG93XG5cdFx0Ly8gWFhYIChAUWl4LSkgc2hvdWxkIHdlIGJlIGxvZ2dpbmcgdGhlc2U/XG5cdH1cblxuXHQvLyBJZiBkZWJ1ZyBpc24ndCBzZXQgaW4gTFMsIGFuZCB3ZSdyZSBpbiBFbGVjdHJvbiwgdHJ5IHRvIGxvYWQgJERFQlVHXG5cdGlmICghciAmJiB0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgJ2VudicgaW4gcHJvY2Vzcykge1xuXHRcdHIgPSBwcm9jZXNzLmVudi5ERUJVRztcblx0fVxuXG5cdHJldHVybiByO1xufVxuXG4vKipcbiAqIExvY2Fsc3RvcmFnZSBhdHRlbXB0cyB0byByZXR1cm4gdGhlIGxvY2Fsc3RvcmFnZS5cbiAqXG4gKiBUaGlzIGlzIG5lY2Vzc2FyeSBiZWNhdXNlIHNhZmFyaSB0aHJvd3NcbiAqIHdoZW4gYSB1c2VyIGRpc2FibGVzIGNvb2tpZXMvbG9jYWxzdG9yYWdlXG4gKiBhbmQgeW91IGF0dGVtcHQgdG8gYWNjZXNzIGl0LlxuICpcbiAqIEByZXR1cm4ge0xvY2FsU3RvcmFnZX1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGxvY2Fsc3RvcmFnZSgpIHtcblx0dHJ5IHtcblx0XHQvLyBUVk1MS2l0IChBcHBsZSBUViBKUyBSdW50aW1lKSBkb2VzIG5vdCBoYXZlIGEgd2luZG93IG9iamVjdCwganVzdCBsb2NhbFN0b3JhZ2UgaW4gdGhlIGdsb2JhbCBjb250ZXh0XG5cdFx0Ly8gVGhlIEJyb3dzZXIgYWxzbyBoYXMgbG9jYWxTdG9yYWdlIGluIHRoZSBnbG9iYWwgY29udGV4dC5cblx0XHRyZXR1cm4gbG9jYWxTdG9yYWdlO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdC8vIFN3YWxsb3dcblx0XHQvLyBYWFggKEBRaXgtKSBzaG91bGQgd2UgYmUgbG9nZ2luZyB0aGVzZT9cblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY29tbW9uJykoZXhwb3J0cyk7XG5cbmNvbnN0IHtmb3JtYXR0ZXJzfSA9IG1vZHVsZS5leHBvcnRzO1xuXG4vKipcbiAqIE1hcCAlaiB0byBgSlNPTi5zdHJpbmdpZnkoKWAsIHNpbmNlIG5vIFdlYiBJbnNwZWN0b3JzIGRvIHRoYXQgYnkgZGVmYXVsdC5cbiAqL1xuXG5mb3JtYXR0ZXJzLmogPSBmdW5jdGlvbiAodikge1xuXHR0cnkge1xuXHRcdHJldHVybiBKU09OLnN0cmluZ2lmeSh2KTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRyZXR1cm4gJ1tVbmV4cGVjdGVkSlNPTlBhcnNlRXJyb3JdOiAnICsgZXJyb3IubWVzc2FnZTtcblx0fVxufTtcbiIsIlxuLyoqXG4gKiBUaGlzIGlzIHRoZSBjb21tb24gbG9naWMgZm9yIGJvdGggdGhlIE5vZGUuanMgYW5kIHdlYiBicm93c2VyXG4gKiBpbXBsZW1lbnRhdGlvbnMgb2YgYGRlYnVnKClgLlxuICovXG5cbmZ1bmN0aW9uIHNldHVwKGVudikge1xuXHRjcmVhdGVEZWJ1Zy5kZWJ1ZyA9IGNyZWF0ZURlYnVnO1xuXHRjcmVhdGVEZWJ1Zy5kZWZhdWx0ID0gY3JlYXRlRGVidWc7XG5cdGNyZWF0ZURlYnVnLmNvZXJjZSA9IGNvZXJjZTtcblx0Y3JlYXRlRGVidWcuZGlzYWJsZSA9IGRpc2FibGU7XG5cdGNyZWF0ZURlYnVnLmVuYWJsZSA9IGVuYWJsZTtcblx0Y3JlYXRlRGVidWcuZW5hYmxlZCA9IGVuYWJsZWQ7XG5cdGNyZWF0ZURlYnVnLmh1bWFuaXplID0gcmVxdWlyZSgnbXMnKTtcblx0Y3JlYXRlRGVidWcuZGVzdHJveSA9IGRlc3Ryb3k7XG5cblx0T2JqZWN0LmtleXMoZW52KS5mb3JFYWNoKGtleSA9PiB7XG5cdFx0Y3JlYXRlRGVidWdba2V5XSA9IGVudltrZXldO1xuXHR9KTtcblxuXHQvKipcblx0KiBUaGUgY3VycmVudGx5IGFjdGl2ZSBkZWJ1ZyBtb2RlIG5hbWVzLCBhbmQgbmFtZXMgdG8gc2tpcC5cblx0Ki9cblxuXHRjcmVhdGVEZWJ1Zy5uYW1lcyA9IFtdO1xuXHRjcmVhdGVEZWJ1Zy5za2lwcyA9IFtdO1xuXG5cdC8qKlxuXHQqIE1hcCBvZiBzcGVjaWFsIFwiJW5cIiBoYW5kbGluZyBmdW5jdGlvbnMsIGZvciB0aGUgZGVidWcgXCJmb3JtYXRcIiBhcmd1bWVudC5cblx0KlxuXHQqIFZhbGlkIGtleSBuYW1lcyBhcmUgYSBzaW5nbGUsIGxvd2VyIG9yIHVwcGVyLWNhc2UgbGV0dGVyLCBpLmUuIFwiblwiIGFuZCBcIk5cIi5cblx0Ki9cblx0Y3JlYXRlRGVidWcuZm9ybWF0dGVycyA9IHt9O1xuXG5cdC8qKlxuXHQqIFNlbGVjdHMgYSBjb2xvciBmb3IgYSBkZWJ1ZyBuYW1lc3BhY2Vcblx0KiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlIFRoZSBuYW1lc3BhY2Ugc3RyaW5nIGZvciB0aGUgZm9yIHRoZSBkZWJ1ZyBpbnN0YW5jZSB0byBiZSBjb2xvcmVkXG5cdCogQHJldHVybiB7TnVtYmVyfFN0cmluZ30gQW4gQU5TSSBjb2xvciBjb2RlIGZvciB0aGUgZ2l2ZW4gbmFtZXNwYWNlXG5cdCogQGFwaSBwcml2YXRlXG5cdCovXG5cdGZ1bmN0aW9uIHNlbGVjdENvbG9yKG5hbWVzcGFjZSkge1xuXHRcdGxldCBoYXNoID0gMDtcblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbmFtZXNwYWNlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRoYXNoID0gKChoYXNoIDw8IDUpIC0gaGFzaCkgKyBuYW1lc3BhY2UuY2hhckNvZGVBdChpKTtcblx0XHRcdGhhc2ggfD0gMDsgLy8gQ29udmVydCB0byAzMmJpdCBpbnRlZ2VyXG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNyZWF0ZURlYnVnLmNvbG9yc1tNYXRoLmFicyhoYXNoKSAlIGNyZWF0ZURlYnVnLmNvbG9ycy5sZW5ndGhdO1xuXHR9XG5cdGNyZWF0ZURlYnVnLnNlbGVjdENvbG9yID0gc2VsZWN0Q29sb3I7XG5cblx0LyoqXG5cdCogQ3JlYXRlIGEgZGVidWdnZXIgd2l0aCB0aGUgZ2l2ZW4gYG5hbWVzcGFjZWAuXG5cdCpcblx0KiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlXG5cdCogQHJldHVybiB7RnVuY3Rpb259XG5cdCogQGFwaSBwdWJsaWNcblx0Ki9cblx0ZnVuY3Rpb24gY3JlYXRlRGVidWcobmFtZXNwYWNlKSB7XG5cdFx0bGV0IHByZXZUaW1lO1xuXHRcdGxldCBlbmFibGVPdmVycmlkZSA9IG51bGw7XG5cblx0XHRmdW5jdGlvbiBkZWJ1ZyguLi5hcmdzKSB7XG5cdFx0XHQvLyBEaXNhYmxlZD9cblx0XHRcdGlmICghZGVidWcuZW5hYmxlZCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHNlbGYgPSBkZWJ1ZztcblxuXHRcdFx0Ly8gU2V0IGBkaWZmYCB0aW1lc3RhbXBcblx0XHRcdGNvbnN0IGN1cnIgPSBOdW1iZXIobmV3IERhdGUoKSk7XG5cdFx0XHRjb25zdCBtcyA9IGN1cnIgLSAocHJldlRpbWUgfHwgY3Vycik7XG5cdFx0XHRzZWxmLmRpZmYgPSBtcztcblx0XHRcdHNlbGYucHJldiA9IHByZXZUaW1lO1xuXHRcdFx0c2VsZi5jdXJyID0gY3Vycjtcblx0XHRcdHByZXZUaW1lID0gY3VycjtcblxuXHRcdFx0YXJnc1swXSA9IGNyZWF0ZURlYnVnLmNvZXJjZShhcmdzWzBdKTtcblxuXHRcdFx0aWYgKHR5cGVvZiBhcmdzWzBdICE9PSAnc3RyaW5nJykge1xuXHRcdFx0XHQvLyBBbnl0aGluZyBlbHNlIGxldCdzIGluc3BlY3Qgd2l0aCAlT1xuXHRcdFx0XHRhcmdzLnVuc2hpZnQoJyVPJyk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEFwcGx5IGFueSBgZm9ybWF0dGVyc2AgdHJhbnNmb3JtYXRpb25zXG5cdFx0XHRsZXQgaW5kZXggPSAwO1xuXHRcdFx0YXJnc1swXSA9IGFyZ3NbMF0ucmVwbGFjZSgvJShbYS16QS1aJV0pL2csIChtYXRjaCwgZm9ybWF0KSA9PiB7XG5cdFx0XHRcdC8vIElmIHdlIGVuY291bnRlciBhbiBlc2NhcGVkICUgdGhlbiBkb24ndCBpbmNyZWFzZSB0aGUgYXJyYXkgaW5kZXhcblx0XHRcdFx0aWYgKG1hdGNoID09PSAnJSUnKSB7XG5cdFx0XHRcdFx0cmV0dXJuICclJztcblx0XHRcdFx0fVxuXHRcdFx0XHRpbmRleCsrO1xuXHRcdFx0XHRjb25zdCBmb3JtYXR0ZXIgPSBjcmVhdGVEZWJ1Zy5mb3JtYXR0ZXJzW2Zvcm1hdF07XG5cdFx0XHRcdGlmICh0eXBlb2YgZm9ybWF0dGVyID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdFx0Y29uc3QgdmFsID0gYXJnc1tpbmRleF07XG5cdFx0XHRcdFx0bWF0Y2ggPSBmb3JtYXR0ZXIuY2FsbChzZWxmLCB2YWwpO1xuXG5cdFx0XHRcdFx0Ly8gTm93IHdlIG5lZWQgdG8gcmVtb3ZlIGBhcmdzW2luZGV4XWAgc2luY2UgaXQncyBpbmxpbmVkIGluIHRoZSBgZm9ybWF0YFxuXHRcdFx0XHRcdGFyZ3Muc3BsaWNlKGluZGV4LCAxKTtcblx0XHRcdFx0XHRpbmRleC0tO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBtYXRjaDtcblx0XHRcdH0pO1xuXG5cdFx0XHQvLyBBcHBseSBlbnYtc3BlY2lmaWMgZm9ybWF0dGluZyAoY29sb3JzLCBldGMuKVxuXHRcdFx0Y3JlYXRlRGVidWcuZm9ybWF0QXJncy5jYWxsKHNlbGYsIGFyZ3MpO1xuXG5cdFx0XHRjb25zdCBsb2dGbiA9IHNlbGYubG9nIHx8IGNyZWF0ZURlYnVnLmxvZztcblx0XHRcdGxvZ0ZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXHRcdH1cblxuXHRcdGRlYnVnLm5hbWVzcGFjZSA9IG5hbWVzcGFjZTtcblx0XHRkZWJ1Zy51c2VDb2xvcnMgPSBjcmVhdGVEZWJ1Zy51c2VDb2xvcnMoKTtcblx0XHRkZWJ1Zy5jb2xvciA9IGNyZWF0ZURlYnVnLnNlbGVjdENvbG9yKG5hbWVzcGFjZSk7XG5cdFx0ZGVidWcuZXh0ZW5kID0gZXh0ZW5kO1xuXHRcdGRlYnVnLmRlc3Ryb3kgPSBjcmVhdGVEZWJ1Zy5kZXN0cm95OyAvLyBYWFggVGVtcG9yYXJ5LiBXaWxsIGJlIHJlbW92ZWQgaW4gdGhlIG5leHQgbWFqb3IgcmVsZWFzZS5cblxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkZWJ1ZywgJ2VuYWJsZWQnLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcblx0XHRcdGdldDogKCkgPT4gZW5hYmxlT3ZlcnJpZGUgPT09IG51bGwgPyBjcmVhdGVEZWJ1Zy5lbmFibGVkKG5hbWVzcGFjZSkgOiBlbmFibGVPdmVycmlkZSxcblx0XHRcdHNldDogdiA9PiB7XG5cdFx0XHRcdGVuYWJsZU92ZXJyaWRlID0gdjtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdC8vIEVudi1zcGVjaWZpYyBpbml0aWFsaXphdGlvbiBsb2dpYyBmb3IgZGVidWcgaW5zdGFuY2VzXG5cdFx0aWYgKHR5cGVvZiBjcmVhdGVEZWJ1Zy5pbml0ID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRjcmVhdGVEZWJ1Zy5pbml0KGRlYnVnKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZGVidWc7XG5cdH1cblxuXHRmdW5jdGlvbiBleHRlbmQobmFtZXNwYWNlLCBkZWxpbWl0ZXIpIHtcblx0XHRjb25zdCBuZXdEZWJ1ZyA9IGNyZWF0ZURlYnVnKHRoaXMubmFtZXNwYWNlICsgKHR5cGVvZiBkZWxpbWl0ZXIgPT09ICd1bmRlZmluZWQnID8gJzonIDogZGVsaW1pdGVyKSArIG5hbWVzcGFjZSk7XG5cdFx0bmV3RGVidWcubG9nID0gdGhpcy5sb2c7XG5cdFx0cmV0dXJuIG5ld0RlYnVnO1xuXHR9XG5cblx0LyoqXG5cdCogRW5hYmxlcyBhIGRlYnVnIG1vZGUgYnkgbmFtZXNwYWNlcy4gVGhpcyBjYW4gaW5jbHVkZSBtb2Rlc1xuXHQqIHNlcGFyYXRlZCBieSBhIGNvbG9uIGFuZCB3aWxkY2FyZHMuXG5cdCpcblx0KiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlc1xuXHQqIEBhcGkgcHVibGljXG5cdCovXG5cdGZ1bmN0aW9uIGVuYWJsZShuYW1lc3BhY2VzKSB7XG5cdFx0Y3JlYXRlRGVidWcuc2F2ZShuYW1lc3BhY2VzKTtcblxuXHRcdGNyZWF0ZURlYnVnLm5hbWVzID0gW107XG5cdFx0Y3JlYXRlRGVidWcuc2tpcHMgPSBbXTtcblxuXHRcdGxldCBpO1xuXHRcdGNvbnN0IHNwbGl0ID0gKHR5cGVvZiBuYW1lc3BhY2VzID09PSAnc3RyaW5nJyA/IG5hbWVzcGFjZXMgOiAnJykuc3BsaXQoL1tcXHMsXSsvKTtcblx0XHRjb25zdCBsZW4gPSBzcGxpdC5sZW5ndGg7XG5cblx0XHRmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdGlmICghc3BsaXRbaV0pIHtcblx0XHRcdFx0Ly8gaWdub3JlIGVtcHR5IHN0cmluZ3Ncblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdG5hbWVzcGFjZXMgPSBzcGxpdFtpXS5yZXBsYWNlKC9cXCovZywgJy4qPycpO1xuXG5cdFx0XHRpZiAobmFtZXNwYWNlc1swXSA9PT0gJy0nKSB7XG5cdFx0XHRcdGNyZWF0ZURlYnVnLnNraXBzLnB1c2gobmV3IFJlZ0V4cCgnXicgKyBuYW1lc3BhY2VzLnN1YnN0cigxKSArICckJykpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y3JlYXRlRGVidWcubmFtZXMucHVzaChuZXcgUmVnRXhwKCdeJyArIG5hbWVzcGFjZXMgKyAnJCcpKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvKipcblx0KiBEaXNhYmxlIGRlYnVnIG91dHB1dC5cblx0KlxuXHQqIEByZXR1cm4ge1N0cmluZ30gbmFtZXNwYWNlc1xuXHQqIEBhcGkgcHVibGljXG5cdCovXG5cdGZ1bmN0aW9uIGRpc2FibGUoKSB7XG5cdFx0Y29uc3QgbmFtZXNwYWNlcyA9IFtcblx0XHRcdC4uLmNyZWF0ZURlYnVnLm5hbWVzLm1hcCh0b05hbWVzcGFjZSksXG5cdFx0XHQuLi5jcmVhdGVEZWJ1Zy5za2lwcy5tYXAodG9OYW1lc3BhY2UpLm1hcChuYW1lc3BhY2UgPT4gJy0nICsgbmFtZXNwYWNlKVxuXHRcdF0uam9pbignLCcpO1xuXHRcdGNyZWF0ZURlYnVnLmVuYWJsZSgnJyk7XG5cdFx0cmV0dXJuIG5hbWVzcGFjZXM7XG5cdH1cblxuXHQvKipcblx0KiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIG1vZGUgbmFtZSBpcyBlbmFibGVkLCBmYWxzZSBvdGhlcndpc2UuXG5cdCpcblx0KiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuXHQqIEByZXR1cm4ge0Jvb2xlYW59XG5cdCogQGFwaSBwdWJsaWNcblx0Ki9cblx0ZnVuY3Rpb24gZW5hYmxlZChuYW1lKSB7XG5cdFx0aWYgKG5hbWVbbmFtZS5sZW5ndGggLSAxXSA9PT0gJyonKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRsZXQgaTtcblx0XHRsZXQgbGVuO1xuXG5cdFx0Zm9yIChpID0gMCwgbGVuID0gY3JlYXRlRGVidWcuc2tpcHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdGlmIChjcmVhdGVEZWJ1Zy5za2lwc1tpXS50ZXN0KG5hbWUpKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRmb3IgKGkgPSAwLCBsZW4gPSBjcmVhdGVEZWJ1Zy5uYW1lcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0aWYgKGNyZWF0ZURlYnVnLm5hbWVzW2ldLnRlc3QobmFtZSkpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0LyoqXG5cdCogQ29udmVydCByZWdleHAgdG8gbmFtZXNwYWNlXG5cdCpcblx0KiBAcGFyYW0ge1JlZ0V4cH0gcmVneGVwXG5cdCogQHJldHVybiB7U3RyaW5nfSBuYW1lc3BhY2Vcblx0KiBAYXBpIHByaXZhdGVcblx0Ki9cblx0ZnVuY3Rpb24gdG9OYW1lc3BhY2UocmVnZXhwKSB7XG5cdFx0cmV0dXJuIHJlZ2V4cC50b1N0cmluZygpXG5cdFx0XHQuc3Vic3RyaW5nKDIsIHJlZ2V4cC50b1N0cmluZygpLmxlbmd0aCAtIDIpXG5cdFx0XHQucmVwbGFjZSgvXFwuXFwqXFw/JC8sICcqJyk7XG5cdH1cblxuXHQvKipcblx0KiBDb2VyY2UgYHZhbGAuXG5cdCpcblx0KiBAcGFyYW0ge01peGVkfSB2YWxcblx0KiBAcmV0dXJuIHtNaXhlZH1cblx0KiBAYXBpIHByaXZhdGVcblx0Ki9cblx0ZnVuY3Rpb24gY29lcmNlKHZhbCkge1xuXHRcdGlmICh2YWwgaW5zdGFuY2VvZiBFcnJvcikge1xuXHRcdFx0cmV0dXJuIHZhbC5zdGFjayB8fCB2YWwubWVzc2FnZTtcblx0XHR9XG5cdFx0cmV0dXJuIHZhbDtcblx0fVxuXG5cdC8qKlxuXHQqIFhYWCBETyBOT1QgVVNFLiBUaGlzIGlzIGEgdGVtcG9yYXJ5IHN0dWIgZnVuY3Rpb24uXG5cdCogWFhYIEl0IFdJTEwgYmUgcmVtb3ZlZCBpbiB0aGUgbmV4dCBtYWpvciByZWxlYXNlLlxuXHQqL1xuXHRmdW5jdGlvbiBkZXN0cm95KCkge1xuXHRcdGNvbnNvbGUud2FybignSW5zdGFuY2UgbWV0aG9kIGBkZWJ1Zy5kZXN0cm95KClgIGlzIGRlcHJlY2F0ZWQgYW5kIG5vIGxvbmdlciBkb2VzIGFueXRoaW5nLiBJdCB3aWxsIGJlIHJlbW92ZWQgaW4gdGhlIG5leHQgbWFqb3IgdmVyc2lvbiBvZiBgZGVidWdgLicpO1xuXHR9XG5cblx0Y3JlYXRlRGVidWcuZW5hYmxlKGNyZWF0ZURlYnVnLmxvYWQoKSk7XG5cblx0cmV0dXJuIGNyZWF0ZURlYnVnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldHVwO1xuIiwibW9kdWxlLmV4cG9ydHMgPSAoKCkgPT4ge1xuICBpZiAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4gc2VsZjtcbiAgfSBlbHNlIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHdpbmRvdztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xuICB9XG59KSgpO1xuIiwiY29uc3QgU29ja2V0ID0gcmVxdWlyZShcIi4vc29ja2V0XCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICh1cmksIG9wdHMpID0+IG5ldyBTb2NrZXQodXJpLCBvcHRzKTtcblxuLyoqXG4gKiBFeHBvc2UgZGVwcyBmb3IgbGVnYWN5IGNvbXBhdGliaWxpdHlcbiAqIGFuZCBzdGFuZGFsb25lIGJyb3dzZXIgYWNjZXNzLlxuICovXG5cbm1vZHVsZS5leHBvcnRzLlNvY2tldCA9IFNvY2tldDtcbm1vZHVsZS5leHBvcnRzLnByb3RvY29sID0gU29ja2V0LnByb3RvY29sOyAvLyB0aGlzIGlzIGFuIGludFxubW9kdWxlLmV4cG9ydHMuVHJhbnNwb3J0ID0gcmVxdWlyZShcIi4vdHJhbnNwb3J0XCIpO1xubW9kdWxlLmV4cG9ydHMudHJhbnNwb3J0cyA9IHJlcXVpcmUoXCIuL3RyYW5zcG9ydHMvaW5kZXhcIik7XG5tb2R1bGUuZXhwb3J0cy5wYXJzZXIgPSByZXF1aXJlKFwiZW5naW5lLmlvLXBhcnNlclwiKTtcbiIsImNvbnN0IHRyYW5zcG9ydHMgPSByZXF1aXJlKFwiLi90cmFuc3BvcnRzL2luZGV4XCIpO1xuY29uc3QgRW1pdHRlciA9IHJlcXVpcmUoXCJjb21wb25lbnQtZW1pdHRlclwiKTtcbmNvbnN0IGRlYnVnID0gcmVxdWlyZShcImRlYnVnXCIpKFwiZW5naW5lLmlvLWNsaWVudDpzb2NrZXRcIik7XG5jb25zdCBwYXJzZXIgPSByZXF1aXJlKFwiZW5naW5lLmlvLXBhcnNlclwiKTtcbmNvbnN0IHBhcnNldXJpID0gcmVxdWlyZShcInBhcnNldXJpXCIpO1xuY29uc3QgcGFyc2VxcyA9IHJlcXVpcmUoXCJwYXJzZXFzXCIpO1xuXG5jbGFzcyBTb2NrZXQgZXh0ZW5kcyBFbWl0dGVyIHtcbiAgLyoqXG4gICAqIFNvY2tldCBjb25zdHJ1Y3Rvci5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd8T2JqZWN0fSB1cmkgb3Igb3B0aW9uc1xuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cbiAgY29uc3RydWN0b3IodXJpLCBvcHRzID0ge30pIHtcbiAgICBzdXBlcigpO1xuXG4gICAgaWYgKHVyaSAmJiBcIm9iamVjdFwiID09PSB0eXBlb2YgdXJpKSB7XG4gICAgICBvcHRzID0gdXJpO1xuICAgICAgdXJpID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAodXJpKSB7XG4gICAgICB1cmkgPSBwYXJzZXVyaSh1cmkpO1xuICAgICAgb3B0cy5ob3N0bmFtZSA9IHVyaS5ob3N0O1xuICAgICAgb3B0cy5zZWN1cmUgPSB1cmkucHJvdG9jb2wgPT09IFwiaHR0cHNcIiB8fCB1cmkucHJvdG9jb2wgPT09IFwid3NzXCI7XG4gICAgICBvcHRzLnBvcnQgPSB1cmkucG9ydDtcbiAgICAgIGlmICh1cmkucXVlcnkpIG9wdHMucXVlcnkgPSB1cmkucXVlcnk7XG4gICAgfSBlbHNlIGlmIChvcHRzLmhvc3QpIHtcbiAgICAgIG9wdHMuaG9zdG5hbWUgPSBwYXJzZXVyaShvcHRzLmhvc3QpLmhvc3Q7XG4gICAgfVxuXG4gICAgdGhpcy5zZWN1cmUgPVxuICAgICAgbnVsbCAhPSBvcHRzLnNlY3VyZVxuICAgICAgICA/IG9wdHMuc2VjdXJlXG4gICAgICAgIDogdHlwZW9mIGxvY2F0aW9uICE9PSBcInVuZGVmaW5lZFwiICYmIFwiaHR0cHM6XCIgPT09IGxvY2F0aW9uLnByb3RvY29sO1xuXG4gICAgaWYgKG9wdHMuaG9zdG5hbWUgJiYgIW9wdHMucG9ydCkge1xuICAgICAgLy8gaWYgbm8gcG9ydCBpcyBzcGVjaWZpZWQgbWFudWFsbHksIHVzZSB0aGUgcHJvdG9jb2wgZGVmYXVsdFxuICAgICAgb3B0cy5wb3J0ID0gdGhpcy5zZWN1cmUgPyBcIjQ0M1wiIDogXCI4MFwiO1xuICAgIH1cblxuICAgIHRoaXMuaG9zdG5hbWUgPVxuICAgICAgb3B0cy5ob3N0bmFtZSB8fFxuICAgICAgKHR5cGVvZiBsb2NhdGlvbiAhPT0gXCJ1bmRlZmluZWRcIiA/IGxvY2F0aW9uLmhvc3RuYW1lIDogXCJsb2NhbGhvc3RcIik7XG4gICAgdGhpcy5wb3J0ID1cbiAgICAgIG9wdHMucG9ydCB8fFxuICAgICAgKHR5cGVvZiBsb2NhdGlvbiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBsb2NhdGlvbi5wb3J0XG4gICAgICAgID8gbG9jYXRpb24ucG9ydFxuICAgICAgICA6IHRoaXMuc2VjdXJlXG4gICAgICAgID8gNDQzXG4gICAgICAgIDogODApO1xuXG4gICAgdGhpcy50cmFuc3BvcnRzID0gb3B0cy50cmFuc3BvcnRzIHx8IFtcInBvbGxpbmdcIiwgXCJ3ZWJzb2NrZXRcIl07XG4gICAgdGhpcy5yZWFkeVN0YXRlID0gXCJcIjtcbiAgICB0aGlzLndyaXRlQnVmZmVyID0gW107XG4gICAgdGhpcy5wcmV2QnVmZmVyTGVuID0gMDtcblxuICAgIHRoaXMub3B0cyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiL2VuZ2luZS5pb1wiLFxuICAgICAgICBhZ2VudDogZmFsc2UsXG4gICAgICAgIHdpdGhDcmVkZW50aWFsczogZmFsc2UsXG4gICAgICAgIHVwZ3JhZGU6IHRydWUsXG4gICAgICAgIGpzb25wOiB0cnVlLFxuICAgICAgICB0aW1lc3RhbXBQYXJhbTogXCJ0XCIsXG4gICAgICAgIHJlbWVtYmVyVXBncmFkZTogZmFsc2UsXG4gICAgICAgIHJlamVjdFVuYXV0aG9yaXplZDogdHJ1ZSxcbiAgICAgICAgcGVyTWVzc2FnZURlZmxhdGU6IHtcbiAgICAgICAgICB0aHJlc2hvbGQ6IDEwMjRcbiAgICAgICAgfSxcbiAgICAgICAgdHJhbnNwb3J0T3B0aW9uczoge30sXG4gICAgICAgIGNsb3NlT25CZWZvcmV1bmxvYWQ6IHRydWVcbiAgICAgIH0sXG4gICAgICBvcHRzXG4gICAgKTtcblxuICAgIHRoaXMub3B0cy5wYXRoID0gdGhpcy5vcHRzLnBhdGgucmVwbGFjZSgvXFwvJC8sIFwiXCIpICsgXCIvXCI7XG5cbiAgICBpZiAodHlwZW9mIHRoaXMub3B0cy5xdWVyeSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgdGhpcy5vcHRzLnF1ZXJ5ID0gcGFyc2Vxcy5kZWNvZGUodGhpcy5vcHRzLnF1ZXJ5KTtcbiAgICB9XG5cbiAgICAvLyBzZXQgb24gaGFuZHNoYWtlXG4gICAgdGhpcy5pZCA9IG51bGw7XG4gICAgdGhpcy51cGdyYWRlcyA9IG51bGw7XG4gICAgdGhpcy5waW5nSW50ZXJ2YWwgPSBudWxsO1xuICAgIHRoaXMucGluZ1RpbWVvdXQgPSBudWxsO1xuXG4gICAgLy8gc2V0IG9uIGhlYXJ0YmVhdFxuICAgIHRoaXMucGluZ1RpbWVvdXRUaW1lciA9IG51bGw7XG5cbiAgICBpZiAodHlwZW9mIGFkZEV2ZW50TGlzdGVuZXIgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgaWYgKHRoaXMub3B0cy5jbG9zZU9uQmVmb3JldW5sb2FkKSB7XG4gICAgICAgIC8vIEZpcmVmb3ggY2xvc2VzIHRoZSBjb25uZWN0aW9uIHdoZW4gdGhlIFwiYmVmb3JldW5sb2FkXCIgZXZlbnQgaXMgZW1pdHRlZCBidXQgbm90IENocm9tZS4gVGhpcyBldmVudCBsaXN0ZW5lclxuICAgICAgICAvLyBlbnN1cmVzIGV2ZXJ5IGJyb3dzZXIgYmVoYXZlcyB0aGUgc2FtZSAobm8gXCJkaXNjb25uZWN0XCIgZXZlbnQgYXQgdGhlIFNvY2tldC5JTyBsZXZlbCB3aGVuIHRoZSBwYWdlIGlzXG4gICAgICAgIC8vIGNsb3NlZC9yZWxvYWRlZClcbiAgICAgICAgYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICBcImJlZm9yZXVubG9hZFwiLFxuICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnRyYW5zcG9ydCkge1xuICAgICAgICAgICAgICAvLyBzaWxlbnRseSBjbG9zZSB0aGUgdHJhbnNwb3J0XG4gICAgICAgICAgICAgIHRoaXMudHJhbnNwb3J0LnJlbW92ZUFsbExpc3RlbmVycygpO1xuICAgICAgICAgICAgICB0aGlzLnRyYW5zcG9ydC5jbG9zZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZmFsc2VcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmhvc3RuYW1lICE9PSBcImxvY2FsaG9zdFwiKSB7XG4gICAgICAgIHRoaXMub2ZmbGluZUV2ZW50TGlzdGVuZXIgPSAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5vbkNsb3NlKFwidHJhbnNwb3J0IGNsb3NlXCIpO1xuICAgICAgICB9O1xuICAgICAgICBhZGRFdmVudExpc3RlbmVyKFwib2ZmbGluZVwiLCB0aGlzLm9mZmxpbmVFdmVudExpc3RlbmVyLCBmYWxzZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5vcGVuKCk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyB0cmFuc3BvcnQgb2YgdGhlIGdpdmVuIHR5cGUuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB0cmFuc3BvcnQgbmFtZVxuICAgKiBAcmV0dXJuIHtUcmFuc3BvcnR9XG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgY3JlYXRlVHJhbnNwb3J0KG5hbWUpIHtcbiAgICBkZWJ1ZygnY3JlYXRpbmcgdHJhbnNwb3J0IFwiJXNcIicsIG5hbWUpO1xuICAgIGNvbnN0IHF1ZXJ5ID0gY2xvbmUodGhpcy5vcHRzLnF1ZXJ5KTtcblxuICAgIC8vIGFwcGVuZCBlbmdpbmUuaW8gcHJvdG9jb2wgaWRlbnRpZmllclxuICAgIHF1ZXJ5LkVJTyA9IHBhcnNlci5wcm90b2NvbDtcblxuICAgIC8vIHRyYW5zcG9ydCBuYW1lXG4gICAgcXVlcnkudHJhbnNwb3J0ID0gbmFtZTtcblxuICAgIC8vIHNlc3Npb24gaWQgaWYgd2UgYWxyZWFkeSBoYXZlIG9uZVxuICAgIGlmICh0aGlzLmlkKSBxdWVyeS5zaWQgPSB0aGlzLmlkO1xuXG4gICAgY29uc3Qgb3B0cyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICB7fSxcbiAgICAgIHRoaXMub3B0cy50cmFuc3BvcnRPcHRpb25zW25hbWVdLFxuICAgICAgdGhpcy5vcHRzLFxuICAgICAge1xuICAgICAgICBxdWVyeSxcbiAgICAgICAgc29ja2V0OiB0aGlzLFxuICAgICAgICBob3N0bmFtZTogdGhpcy5ob3N0bmFtZSxcbiAgICAgICAgc2VjdXJlOiB0aGlzLnNlY3VyZSxcbiAgICAgICAgcG9ydDogdGhpcy5wb3J0XG4gICAgICB9XG4gICAgKTtcblxuICAgIGRlYnVnKFwib3B0aW9uczogJWpcIiwgb3B0cyk7XG5cbiAgICByZXR1cm4gbmV3IHRyYW5zcG9ydHNbbmFtZV0ob3B0cyk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgdHJhbnNwb3J0IHRvIHVzZSBhbmQgc3RhcnRzIHByb2JlLlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIG9wZW4oKSB7XG4gICAgbGV0IHRyYW5zcG9ydDtcbiAgICBpZiAoXG4gICAgICB0aGlzLm9wdHMucmVtZW1iZXJVcGdyYWRlICYmXG4gICAgICBTb2NrZXQucHJpb3JXZWJzb2NrZXRTdWNjZXNzICYmXG4gICAgICB0aGlzLnRyYW5zcG9ydHMuaW5kZXhPZihcIndlYnNvY2tldFwiKSAhPT0gLTFcbiAgICApIHtcbiAgICAgIHRyYW5zcG9ydCA9IFwid2Vic29ja2V0XCI7XG4gICAgfSBlbHNlIGlmICgwID09PSB0aGlzLnRyYW5zcG9ydHMubGVuZ3RoKSB7XG4gICAgICAvLyBFbWl0IGVycm9yIG9uIG5leHQgdGljayBzbyBpdCBjYW4gYmUgbGlzdGVuZWQgdG9cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmVtaXQoXCJlcnJvclwiLCBcIk5vIHRyYW5zcG9ydHMgYXZhaWxhYmxlXCIpO1xuICAgICAgfSwgMCk7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyYW5zcG9ydCA9IHRoaXMudHJhbnNwb3J0c1swXTtcbiAgICB9XG4gICAgdGhpcy5yZWFkeVN0YXRlID0gXCJvcGVuaW5nXCI7XG5cbiAgICAvLyBSZXRyeSB3aXRoIHRoZSBuZXh0IHRyYW5zcG9ydCBpZiB0aGUgdHJhbnNwb3J0IGlzIGRpc2FibGVkIChqc29ucDogZmFsc2UpXG4gICAgdHJ5IHtcbiAgICAgIHRyYW5zcG9ydCA9IHRoaXMuY3JlYXRlVHJhbnNwb3J0KHRyYW5zcG9ydCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgZGVidWcoXCJlcnJvciB3aGlsZSBjcmVhdGluZyB0cmFuc3BvcnQ6ICVzXCIsIGUpO1xuICAgICAgdGhpcy50cmFuc3BvcnRzLnNoaWZ0KCk7XG4gICAgICB0aGlzLm9wZW4oKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0cmFuc3BvcnQub3BlbigpO1xuICAgIHRoaXMuc2V0VHJhbnNwb3J0KHRyYW5zcG9ydCk7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgY3VycmVudCB0cmFuc3BvcnQuIERpc2FibGVzIHRoZSBleGlzdGluZyBvbmUgKGlmIGFueSkuXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgc2V0VHJhbnNwb3J0KHRyYW5zcG9ydCkge1xuICAgIGRlYnVnKFwic2V0dGluZyB0cmFuc3BvcnQgJXNcIiwgdHJhbnNwb3J0Lm5hbWUpO1xuXG4gICAgaWYgKHRoaXMudHJhbnNwb3J0KSB7XG4gICAgICBkZWJ1ZyhcImNsZWFyaW5nIGV4aXN0aW5nIHRyYW5zcG9ydCAlc1wiLCB0aGlzLnRyYW5zcG9ydC5uYW1lKTtcbiAgICAgIHRoaXMudHJhbnNwb3J0LnJlbW92ZUFsbExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIC8vIHNldCB1cCB0cmFuc3BvcnRcbiAgICB0aGlzLnRyYW5zcG9ydCA9IHRyYW5zcG9ydDtcblxuICAgIC8vIHNldCB1cCB0cmFuc3BvcnQgbGlzdGVuZXJzXG4gICAgdHJhbnNwb3J0XG4gICAgICAub24oXCJkcmFpblwiLCB0aGlzLm9uRHJhaW4uYmluZCh0aGlzKSlcbiAgICAgIC5vbihcInBhY2tldFwiLCB0aGlzLm9uUGFja2V0LmJpbmQodGhpcykpXG4gICAgICAub24oXCJlcnJvclwiLCB0aGlzLm9uRXJyb3IuYmluZCh0aGlzKSlcbiAgICAgIC5vbihcImNsb3NlXCIsICgpID0+IHtcbiAgICAgICAgdGhpcy5vbkNsb3NlKFwidHJhbnNwb3J0IGNsb3NlXCIpO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUHJvYmVzIGEgdHJhbnNwb3J0LlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gdHJhbnNwb3J0IG5hbWVcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBwcm9iZShuYW1lKSB7XG4gICAgZGVidWcoJ3Byb2JpbmcgdHJhbnNwb3J0IFwiJXNcIicsIG5hbWUpO1xuICAgIGxldCB0cmFuc3BvcnQgPSB0aGlzLmNyZWF0ZVRyYW5zcG9ydChuYW1lLCB7IHByb2JlOiAxIH0pO1xuICAgIGxldCBmYWlsZWQgPSBmYWxzZTtcblxuICAgIFNvY2tldC5wcmlvcldlYnNvY2tldFN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgIGNvbnN0IG9uVHJhbnNwb3J0T3BlbiA9ICgpID0+IHtcbiAgICAgIGlmIChmYWlsZWQpIHJldHVybjtcblxuICAgICAgZGVidWcoJ3Byb2JlIHRyYW5zcG9ydCBcIiVzXCIgb3BlbmVkJywgbmFtZSk7XG4gICAgICB0cmFuc3BvcnQuc2VuZChbeyB0eXBlOiBcInBpbmdcIiwgZGF0YTogXCJwcm9iZVwiIH1dKTtcbiAgICAgIHRyYW5zcG9ydC5vbmNlKFwicGFja2V0XCIsIG1zZyA9PiB7XG4gICAgICAgIGlmIChmYWlsZWQpIHJldHVybjtcbiAgICAgICAgaWYgKFwicG9uZ1wiID09PSBtc2cudHlwZSAmJiBcInByb2JlXCIgPT09IG1zZy5kYXRhKSB7XG4gICAgICAgICAgZGVidWcoJ3Byb2JlIHRyYW5zcG9ydCBcIiVzXCIgcG9uZycsIG5hbWUpO1xuICAgICAgICAgIHRoaXMudXBncmFkaW5nID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLmVtaXQoXCJ1cGdyYWRpbmdcIiwgdHJhbnNwb3J0KTtcbiAgICAgICAgICBpZiAoIXRyYW5zcG9ydCkgcmV0dXJuO1xuICAgICAgICAgIFNvY2tldC5wcmlvcldlYnNvY2tldFN1Y2Nlc3MgPSBcIndlYnNvY2tldFwiID09PSB0cmFuc3BvcnQubmFtZTtcblxuICAgICAgICAgIGRlYnVnKCdwYXVzaW5nIGN1cnJlbnQgdHJhbnNwb3J0IFwiJXNcIicsIHRoaXMudHJhbnNwb3J0Lm5hbWUpO1xuICAgICAgICAgIHRoaXMudHJhbnNwb3J0LnBhdXNlKCgpID0+IHtcbiAgICAgICAgICAgIGlmIChmYWlsZWQpIHJldHVybjtcbiAgICAgICAgICAgIGlmIChcImNsb3NlZFwiID09PSB0aGlzLnJlYWR5U3RhdGUpIHJldHVybjtcbiAgICAgICAgICAgIGRlYnVnKFwiY2hhbmdpbmcgdHJhbnNwb3J0IGFuZCBzZW5kaW5nIHVwZ3JhZGUgcGFja2V0XCIpO1xuXG4gICAgICAgICAgICBjbGVhbnVwKCk7XG5cbiAgICAgICAgICAgIHRoaXMuc2V0VHJhbnNwb3J0KHRyYW5zcG9ydCk7XG4gICAgICAgICAgICB0cmFuc3BvcnQuc2VuZChbeyB0eXBlOiBcInVwZ3JhZGVcIiB9XSk7XG4gICAgICAgICAgICB0aGlzLmVtaXQoXCJ1cGdyYWRlXCIsIHRyYW5zcG9ydCk7XG4gICAgICAgICAgICB0cmFuc3BvcnQgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy51cGdyYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuZmx1c2goKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkZWJ1ZygncHJvYmUgdHJhbnNwb3J0IFwiJXNcIiBmYWlsZWQnLCBuYW1lKTtcbiAgICAgICAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IoXCJwcm9iZSBlcnJvclwiKTtcbiAgICAgICAgICBlcnIudHJhbnNwb3J0ID0gdHJhbnNwb3J0Lm5hbWU7XG4gICAgICAgICAgdGhpcy5lbWl0KFwidXBncmFkZUVycm9yXCIsIGVycik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBmcmVlemVUcmFuc3BvcnQoKSB7XG4gICAgICBpZiAoZmFpbGVkKSByZXR1cm47XG5cbiAgICAgIC8vIEFueSBjYWxsYmFjayBjYWxsZWQgYnkgdHJhbnNwb3J0IHNob3VsZCBiZSBpZ25vcmVkIHNpbmNlIG5vd1xuICAgICAgZmFpbGVkID0gdHJ1ZTtcblxuICAgICAgY2xlYW51cCgpO1xuXG4gICAgICB0cmFuc3BvcnQuY2xvc2UoKTtcbiAgICAgIHRyYW5zcG9ydCA9IG51bGw7XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIGFueSBlcnJvciB0aGF0IGhhcHBlbnMgd2hpbGUgcHJvYmluZ1xuICAgIGNvbnN0IG9uZXJyb3IgPSBlcnIgPT4ge1xuICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoXCJwcm9iZSBlcnJvcjogXCIgKyBlcnIpO1xuICAgICAgZXJyb3IudHJhbnNwb3J0ID0gdHJhbnNwb3J0Lm5hbWU7XG5cbiAgICAgIGZyZWV6ZVRyYW5zcG9ydCgpO1xuXG4gICAgICBkZWJ1ZygncHJvYmUgdHJhbnNwb3J0IFwiJXNcIiBmYWlsZWQgYmVjYXVzZSBvZiBlcnJvcjogJXMnLCBuYW1lLCBlcnIpO1xuXG4gICAgICB0aGlzLmVtaXQoXCJ1cGdyYWRlRXJyb3JcIiwgZXJyb3IpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBvblRyYW5zcG9ydENsb3NlKCkge1xuICAgICAgb25lcnJvcihcInRyYW5zcG9ydCBjbG9zZWRcIik7XG4gICAgfVxuXG4gICAgLy8gV2hlbiB0aGUgc29ja2V0IGlzIGNsb3NlZCB3aGlsZSB3ZSdyZSBwcm9iaW5nXG4gICAgZnVuY3Rpb24gb25jbG9zZSgpIHtcbiAgICAgIG9uZXJyb3IoXCJzb2NrZXQgY2xvc2VkXCIpO1xuICAgIH1cblxuICAgIC8vIFdoZW4gdGhlIHNvY2tldCBpcyB1cGdyYWRlZCB3aGlsZSB3ZSdyZSBwcm9iaW5nXG4gICAgZnVuY3Rpb24gb251cGdyYWRlKHRvKSB7XG4gICAgICBpZiAodHJhbnNwb3J0ICYmIHRvLm5hbWUgIT09IHRyYW5zcG9ydC5uYW1lKSB7XG4gICAgICAgIGRlYnVnKCdcIiVzXCIgd29ya3MgLSBhYm9ydGluZyBcIiVzXCInLCB0by5uYW1lLCB0cmFuc3BvcnQubmFtZSk7XG4gICAgICAgIGZyZWV6ZVRyYW5zcG9ydCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJlbW92ZSBhbGwgbGlzdGVuZXJzIG9uIHRoZSB0cmFuc3BvcnQgYW5kIG9uIHNlbGZcbiAgICBjb25zdCBjbGVhbnVwID0gKCkgPT4ge1xuICAgICAgdHJhbnNwb3J0LnJlbW92ZUxpc3RlbmVyKFwib3BlblwiLCBvblRyYW5zcG9ydE9wZW4pO1xuICAgICAgdHJhbnNwb3J0LnJlbW92ZUxpc3RlbmVyKFwiZXJyb3JcIiwgb25lcnJvcik7XG4gICAgICB0cmFuc3BvcnQucmVtb3ZlTGlzdGVuZXIoXCJjbG9zZVwiLCBvblRyYW5zcG9ydENsb3NlKTtcbiAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIoXCJjbG9zZVwiLCBvbmNsb3NlKTtcbiAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIoXCJ1cGdyYWRpbmdcIiwgb251cGdyYWRlKTtcbiAgICB9O1xuXG4gICAgdHJhbnNwb3J0Lm9uY2UoXCJvcGVuXCIsIG9uVHJhbnNwb3J0T3Blbik7XG4gICAgdHJhbnNwb3J0Lm9uY2UoXCJlcnJvclwiLCBvbmVycm9yKTtcbiAgICB0cmFuc3BvcnQub25jZShcImNsb3NlXCIsIG9uVHJhbnNwb3J0Q2xvc2UpO1xuXG4gICAgdGhpcy5vbmNlKFwiY2xvc2VcIiwgb25jbG9zZSk7XG4gICAgdGhpcy5vbmNlKFwidXBncmFkaW5nXCIsIG9udXBncmFkZSk7XG5cbiAgICB0cmFuc3BvcnQub3BlbigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIGNvbm5lY3Rpb24gaXMgZGVlbWVkIG9wZW4uXG4gICAqXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuICBvbk9wZW4oKSB7XG4gICAgZGVidWcoXCJzb2NrZXQgb3BlblwiKTtcbiAgICB0aGlzLnJlYWR5U3RhdGUgPSBcIm9wZW5cIjtcbiAgICBTb2NrZXQucHJpb3JXZWJzb2NrZXRTdWNjZXNzID0gXCJ3ZWJzb2NrZXRcIiA9PT0gdGhpcy50cmFuc3BvcnQubmFtZTtcbiAgICB0aGlzLmVtaXQoXCJvcGVuXCIpO1xuICAgIHRoaXMuZmx1c2goKTtcblxuICAgIC8vIHdlIGNoZWNrIGZvciBgcmVhZHlTdGF0ZWAgaW4gY2FzZSBhbiBgb3BlbmBcbiAgICAvLyBsaXN0ZW5lciBhbHJlYWR5IGNsb3NlZCB0aGUgc29ja2V0XG4gICAgaWYgKFxuICAgICAgXCJvcGVuXCIgPT09IHRoaXMucmVhZHlTdGF0ZSAmJlxuICAgICAgdGhpcy5vcHRzLnVwZ3JhZGUgJiZcbiAgICAgIHRoaXMudHJhbnNwb3J0LnBhdXNlXG4gICAgKSB7XG4gICAgICBkZWJ1ZyhcInN0YXJ0aW5nIHVwZ3JhZGUgcHJvYmVzXCIpO1xuICAgICAgbGV0IGkgPSAwO1xuICAgICAgY29uc3QgbCA9IHRoaXMudXBncmFkZXMubGVuZ3RoO1xuICAgICAgZm9yICg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgdGhpcy5wcm9iZSh0aGlzLnVwZ3JhZGVzW2ldKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlcyBhIHBhY2tldC5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBvblBhY2tldChwYWNrZXQpIHtcbiAgICBpZiAoXG4gICAgICBcIm9wZW5pbmdcIiA9PT0gdGhpcy5yZWFkeVN0YXRlIHx8XG4gICAgICBcIm9wZW5cIiA9PT0gdGhpcy5yZWFkeVN0YXRlIHx8XG4gICAgICBcImNsb3NpbmdcIiA9PT0gdGhpcy5yZWFkeVN0YXRlXG4gICAgKSB7XG4gICAgICBkZWJ1Zygnc29ja2V0IHJlY2VpdmU6IHR5cGUgXCIlc1wiLCBkYXRhIFwiJXNcIicsIHBhY2tldC50eXBlLCBwYWNrZXQuZGF0YSk7XG5cbiAgICAgIHRoaXMuZW1pdChcInBhY2tldFwiLCBwYWNrZXQpO1xuXG4gICAgICAvLyBTb2NrZXQgaXMgbGl2ZSAtIGFueSBwYWNrZXQgY291bnRzXG4gICAgICB0aGlzLmVtaXQoXCJoZWFydGJlYXRcIik7XG5cbiAgICAgIHN3aXRjaCAocGFja2V0LnR5cGUpIHtcbiAgICAgICAgY2FzZSBcIm9wZW5cIjpcbiAgICAgICAgICB0aGlzLm9uSGFuZHNoYWtlKEpTT04ucGFyc2UocGFja2V0LmRhdGEpKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFwicGluZ1wiOlxuICAgICAgICAgIHRoaXMucmVzZXRQaW5nVGltZW91dCgpO1xuICAgICAgICAgIHRoaXMuc2VuZFBhY2tldChcInBvbmdcIik7XG4gICAgICAgICAgdGhpcy5lbWl0KFwicG9uZ1wiKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFwiZXJyb3JcIjpcbiAgICAgICAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IoXCJzZXJ2ZXIgZXJyb3JcIik7XG4gICAgICAgICAgZXJyLmNvZGUgPSBwYWNrZXQuZGF0YTtcbiAgICAgICAgICB0aGlzLm9uRXJyb3IoZXJyKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFwibWVzc2FnZVwiOlxuICAgICAgICAgIHRoaXMuZW1pdChcImRhdGFcIiwgcGFja2V0LmRhdGEpO1xuICAgICAgICAgIHRoaXMuZW1pdChcIm1lc3NhZ2VcIiwgcGFja2V0LmRhdGEpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBkZWJ1ZygncGFja2V0IHJlY2VpdmVkIHdpdGggc29ja2V0IHJlYWR5U3RhdGUgXCIlc1wiJywgdGhpcy5yZWFkeVN0YXRlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIHVwb24gaGFuZHNoYWtlIGNvbXBsZXRpb24uXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBoYW5kc2hha2Ugb2JqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgb25IYW5kc2hha2UoZGF0YSkge1xuICAgIHRoaXMuZW1pdChcImhhbmRzaGFrZVwiLCBkYXRhKTtcbiAgICB0aGlzLmlkID0gZGF0YS5zaWQ7XG4gICAgdGhpcy50cmFuc3BvcnQucXVlcnkuc2lkID0gZGF0YS5zaWQ7XG4gICAgdGhpcy51cGdyYWRlcyA9IHRoaXMuZmlsdGVyVXBncmFkZXMoZGF0YS51cGdyYWRlcyk7XG4gICAgdGhpcy5waW5nSW50ZXJ2YWwgPSBkYXRhLnBpbmdJbnRlcnZhbDtcbiAgICB0aGlzLnBpbmdUaW1lb3V0ID0gZGF0YS5waW5nVGltZW91dDtcbiAgICB0aGlzLm9uT3BlbigpO1xuICAgIC8vIEluIGNhc2Ugb3BlbiBoYW5kbGVyIGNsb3NlcyBzb2NrZXRcbiAgICBpZiAoXCJjbG9zZWRcIiA9PT0gdGhpcy5yZWFkeVN0YXRlKSByZXR1cm47XG4gICAgdGhpcy5yZXNldFBpbmdUaW1lb3V0KCk7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBhbmQgcmVzZXRzIHBpbmcgdGltZW91dCB0aW1lciBiYXNlZCBvbiBzZXJ2ZXIgcGluZ3MuXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgcmVzZXRQaW5nVGltZW91dCgpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5waW5nVGltZW91dFRpbWVyKTtcbiAgICB0aGlzLnBpbmdUaW1lb3V0VGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMub25DbG9zZShcInBpbmcgdGltZW91dFwiKTtcbiAgICB9LCB0aGlzLnBpbmdJbnRlcnZhbCArIHRoaXMucGluZ1RpbWVvdXQpO1xuICAgIGlmICh0aGlzLm9wdHMuYXV0b1VucmVmKSB7XG4gICAgICB0aGlzLnBpbmdUaW1lb3V0VGltZXIudW5yZWYoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIG9uIGBkcmFpbmAgZXZlbnRcbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBvbkRyYWluKCkge1xuICAgIHRoaXMud3JpdGVCdWZmZXIuc3BsaWNlKDAsIHRoaXMucHJldkJ1ZmZlckxlbik7XG5cbiAgICAvLyBzZXR0aW5nIHByZXZCdWZmZXJMZW4gPSAwIGlzIHZlcnkgaW1wb3J0YW50XG4gICAgLy8gZm9yIGV4YW1wbGUsIHdoZW4gdXBncmFkaW5nLCB1cGdyYWRlIHBhY2tldCBpcyBzZW50IG92ZXIsXG4gICAgLy8gYW5kIGEgbm9uemVybyBwcmV2QnVmZmVyTGVuIGNvdWxkIGNhdXNlIHByb2JsZW1zIG9uIGBkcmFpbmBcbiAgICB0aGlzLnByZXZCdWZmZXJMZW4gPSAwO1xuXG4gICAgaWYgKDAgPT09IHRoaXMud3JpdGVCdWZmZXIubGVuZ3RoKSB7XG4gICAgICB0aGlzLmVtaXQoXCJkcmFpblwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5mbHVzaCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBGbHVzaCB3cml0ZSBidWZmZXJzLlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIGZsdXNoKCkge1xuICAgIGlmIChcbiAgICAgIFwiY2xvc2VkXCIgIT09IHRoaXMucmVhZHlTdGF0ZSAmJlxuICAgICAgdGhpcy50cmFuc3BvcnQud3JpdGFibGUgJiZcbiAgICAgICF0aGlzLnVwZ3JhZGluZyAmJlxuICAgICAgdGhpcy53cml0ZUJ1ZmZlci5sZW5ndGhcbiAgICApIHtcbiAgICAgIGRlYnVnKFwiZmx1c2hpbmcgJWQgcGFja2V0cyBpbiBzb2NrZXRcIiwgdGhpcy53cml0ZUJ1ZmZlci5sZW5ndGgpO1xuICAgICAgdGhpcy50cmFuc3BvcnQuc2VuZCh0aGlzLndyaXRlQnVmZmVyKTtcbiAgICAgIC8vIGtlZXAgdHJhY2sgb2YgY3VycmVudCBsZW5ndGggb2Ygd3JpdGVCdWZmZXJcbiAgICAgIC8vIHNwbGljZSB3cml0ZUJ1ZmZlciBhbmQgY2FsbGJhY2tCdWZmZXIgb24gYGRyYWluYFxuICAgICAgdGhpcy5wcmV2QnVmZmVyTGVuID0gdGhpcy53cml0ZUJ1ZmZlci5sZW5ndGg7XG4gICAgICB0aGlzLmVtaXQoXCJmbHVzaFwiKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2VuZHMgYSBtZXNzYWdlLlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZS5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgZnVuY3Rpb24uXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zLlxuICAgKiBAcmV0dXJuIHtTb2NrZXR9IGZvciBjaGFpbmluZy5cbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG4gIHdyaXRlKG1zZywgb3B0aW9ucywgZm4pIHtcbiAgICB0aGlzLnNlbmRQYWNrZXQoXCJtZXNzYWdlXCIsIG1zZywgb3B0aW9ucywgZm4pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2VuZChtc2csIG9wdGlvbnMsIGZuKSB7XG4gICAgdGhpcy5zZW5kUGFja2V0KFwibWVzc2FnZVwiLCBtc2csIG9wdGlvbnMsIGZuKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kcyBhIHBhY2tldC5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IHBhY2tldCB0eXBlLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIGZ1bmN0aW9uLlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIHNlbmRQYWNrZXQodHlwZSwgZGF0YSwgb3B0aW9ucywgZm4pIHtcbiAgICBpZiAoXCJmdW5jdGlvblwiID09PSB0eXBlb2YgZGF0YSkge1xuICAgICAgZm4gPSBkYXRhO1xuICAgICAgZGF0YSA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBpZiAoXCJmdW5jdGlvblwiID09PSB0eXBlb2Ygb3B0aW9ucykge1xuICAgICAgZm4gPSBvcHRpb25zO1xuICAgICAgb3B0aW9ucyA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKFwiY2xvc2luZ1wiID09PSB0aGlzLnJlYWR5U3RhdGUgfHwgXCJjbG9zZWRcIiA9PT0gdGhpcy5yZWFkeVN0YXRlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgb3B0aW9ucy5jb21wcmVzcyA9IGZhbHNlICE9PSBvcHRpb25zLmNvbXByZXNzO1xuXG4gICAgY29uc3QgcGFja2V0ID0ge1xuICAgICAgdHlwZTogdHlwZSxcbiAgICAgIGRhdGE6IGRhdGEsXG4gICAgICBvcHRpb25zOiBvcHRpb25zXG4gICAgfTtcbiAgICB0aGlzLmVtaXQoXCJwYWNrZXRDcmVhdGVcIiwgcGFja2V0KTtcbiAgICB0aGlzLndyaXRlQnVmZmVyLnB1c2gocGFja2V0KTtcbiAgICBpZiAoZm4pIHRoaXMub25jZShcImZsdXNoXCIsIGZuKTtcbiAgICB0aGlzLmZsdXNoKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2xvc2VzIHRoZSBjb25uZWN0aW9uLlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIGNsb3NlKCkge1xuICAgIGNvbnN0IGNsb3NlID0gKCkgPT4ge1xuICAgICAgdGhpcy5vbkNsb3NlKFwiZm9yY2VkIGNsb3NlXCIpO1xuICAgICAgZGVidWcoXCJzb2NrZXQgY2xvc2luZyAtIHRlbGxpbmcgdHJhbnNwb3J0IHRvIGNsb3NlXCIpO1xuICAgICAgdGhpcy50cmFuc3BvcnQuY2xvc2UoKTtcbiAgICB9O1xuXG4gICAgY29uc3QgY2xlYW51cEFuZENsb3NlID0gKCkgPT4ge1xuICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcihcInVwZ3JhZGVcIiwgY2xlYW51cEFuZENsb3NlKTtcbiAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIoXCJ1cGdyYWRlRXJyb3JcIiwgY2xlYW51cEFuZENsb3NlKTtcbiAgICAgIGNsb3NlKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IHdhaXRGb3JVcGdyYWRlID0gKCkgPT4ge1xuICAgICAgLy8gd2FpdCBmb3IgdXBncmFkZSB0byBmaW5pc2ggc2luY2Ugd2UgY2FuJ3Qgc2VuZCBwYWNrZXRzIHdoaWxlIHBhdXNpbmcgYSB0cmFuc3BvcnRcbiAgICAgIHRoaXMub25jZShcInVwZ3JhZGVcIiwgY2xlYW51cEFuZENsb3NlKTtcbiAgICAgIHRoaXMub25jZShcInVwZ3JhZGVFcnJvclwiLCBjbGVhbnVwQW5kQ2xvc2UpO1xuICAgIH07XG5cbiAgICBpZiAoXCJvcGVuaW5nXCIgPT09IHRoaXMucmVhZHlTdGF0ZSB8fCBcIm9wZW5cIiA9PT0gdGhpcy5yZWFkeVN0YXRlKSB7XG4gICAgICB0aGlzLnJlYWR5U3RhdGUgPSBcImNsb3NpbmdcIjtcblxuICAgICAgaWYgKHRoaXMud3JpdGVCdWZmZXIubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMub25jZShcImRyYWluXCIsICgpID0+IHtcbiAgICAgICAgICBpZiAodGhpcy51cGdyYWRpbmcpIHtcbiAgICAgICAgICAgIHdhaXRGb3JVcGdyYWRlKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNsb3NlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy51cGdyYWRpbmcpIHtcbiAgICAgICAgd2FpdEZvclVwZ3JhZGUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNsb3NlKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIHVwb24gdHJhbnNwb3J0IGVycm9yXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgb25FcnJvcihlcnIpIHtcbiAgICBkZWJ1ZyhcInNvY2tldCBlcnJvciAlalwiLCBlcnIpO1xuICAgIFNvY2tldC5wcmlvcldlYnNvY2tldFN1Y2Nlc3MgPSBmYWxzZTtcbiAgICB0aGlzLmVtaXQoXCJlcnJvclwiLCBlcnIpO1xuICAgIHRoaXMub25DbG9zZShcInRyYW5zcG9ydCBlcnJvclwiLCBlcnIpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCB1cG9uIHRyYW5zcG9ydCBjbG9zZS5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBvbkNsb3NlKHJlYXNvbiwgZGVzYykge1xuICAgIGlmIChcbiAgICAgIFwib3BlbmluZ1wiID09PSB0aGlzLnJlYWR5U3RhdGUgfHxcbiAgICAgIFwib3BlblwiID09PSB0aGlzLnJlYWR5U3RhdGUgfHxcbiAgICAgIFwiY2xvc2luZ1wiID09PSB0aGlzLnJlYWR5U3RhdGVcbiAgICApIHtcbiAgICAgIGRlYnVnKCdzb2NrZXQgY2xvc2Ugd2l0aCByZWFzb246IFwiJXNcIicsIHJlYXNvbik7XG5cbiAgICAgIC8vIGNsZWFyIHRpbWVyc1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMucGluZ0ludGVydmFsVGltZXIpO1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMucGluZ1RpbWVvdXRUaW1lcik7XG5cbiAgICAgIC8vIHN0b3AgZXZlbnQgZnJvbSBmaXJpbmcgYWdhaW4gZm9yIHRyYW5zcG9ydFxuICAgICAgdGhpcy50cmFuc3BvcnQucmVtb3ZlQWxsTGlzdGVuZXJzKFwiY2xvc2VcIik7XG5cbiAgICAgIC8vIGVuc3VyZSB0cmFuc3BvcnQgd29uJ3Qgc3RheSBvcGVuXG4gICAgICB0aGlzLnRyYW5zcG9ydC5jbG9zZSgpO1xuXG4gICAgICAvLyBpZ25vcmUgZnVydGhlciB0cmFuc3BvcnQgY29tbXVuaWNhdGlvblxuICAgICAgdGhpcy50cmFuc3BvcnQucmVtb3ZlQWxsTGlzdGVuZXJzKCk7XG5cbiAgICAgIGlmICh0eXBlb2YgcmVtb3ZlRXZlbnRMaXN0ZW5lciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJlbW92ZUV2ZW50TGlzdGVuZXIoXCJvZmZsaW5lXCIsIHRoaXMub2ZmbGluZUV2ZW50TGlzdGVuZXIsIGZhbHNlKTtcbiAgICAgIH1cblxuICAgICAgLy8gc2V0IHJlYWR5IHN0YXRlXG4gICAgICB0aGlzLnJlYWR5U3RhdGUgPSBcImNsb3NlZFwiO1xuXG4gICAgICAvLyBjbGVhciBzZXNzaW9uIGlkXG4gICAgICB0aGlzLmlkID0gbnVsbDtcblxuICAgICAgLy8gZW1pdCBjbG9zZSBldmVudFxuICAgICAgdGhpcy5lbWl0KFwiY2xvc2VcIiwgcmVhc29uLCBkZXNjKTtcblxuICAgICAgLy8gY2xlYW4gYnVmZmVycyBhZnRlciwgc28gdXNlcnMgY2FuIHN0aWxsXG4gICAgICAvLyBncmFiIHRoZSBidWZmZXJzIG9uIGBjbG9zZWAgZXZlbnRcbiAgICAgIHRoaXMud3JpdGVCdWZmZXIgPSBbXTtcbiAgICAgIHRoaXMucHJldkJ1ZmZlckxlbiA9IDA7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEZpbHRlcnMgdXBncmFkZXMsIHJldHVybmluZyBvbmx5IHRob3NlIG1hdGNoaW5nIGNsaWVudCB0cmFuc3BvcnRzLlxuICAgKlxuICAgKiBAcGFyYW0ge0FycmF5fSBzZXJ2ZXIgdXBncmFkZXNcbiAgICogQGFwaSBwcml2YXRlXG4gICAqXG4gICAqL1xuICBmaWx0ZXJVcGdyYWRlcyh1cGdyYWRlcykge1xuICAgIGNvbnN0IGZpbHRlcmVkVXBncmFkZXMgPSBbXTtcbiAgICBsZXQgaSA9IDA7XG4gICAgY29uc3QgaiA9IHVwZ3JhZGVzLmxlbmd0aDtcbiAgICBmb3IgKDsgaSA8IGo7IGkrKykge1xuICAgICAgaWYgKH50aGlzLnRyYW5zcG9ydHMuaW5kZXhPZih1cGdyYWRlc1tpXSkpXG4gICAgICAgIGZpbHRlcmVkVXBncmFkZXMucHVzaCh1cGdyYWRlc1tpXSk7XG4gICAgfVxuICAgIHJldHVybiBmaWx0ZXJlZFVwZ3JhZGVzO1xuICB9XG59XG5cblNvY2tldC5wcmlvcldlYnNvY2tldFN1Y2Nlc3MgPSBmYWxzZTtcblxuLyoqXG4gKiBQcm90b2NvbCB2ZXJzaW9uLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuU29ja2V0LnByb3RvY29sID0gcGFyc2VyLnByb3RvY29sOyAvLyB0aGlzIGlzIGFuIGludFxuXG5mdW5jdGlvbiBjbG9uZShvYmopIHtcbiAgY29uc3QgbyA9IHt9O1xuICBmb3IgKGxldCBpIGluIG9iaikge1xuICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgIG9baV0gPSBvYmpbaV07XG4gICAgfVxuICB9XG4gIHJldHVybiBvO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNvY2tldDtcbiIsImNvbnN0IHBhcnNlciA9IHJlcXVpcmUoXCJlbmdpbmUuaW8tcGFyc2VyXCIpO1xuY29uc3QgRW1pdHRlciA9IHJlcXVpcmUoXCJjb21wb25lbnQtZW1pdHRlclwiKTtcbmNvbnN0IGRlYnVnID0gcmVxdWlyZShcImRlYnVnXCIpKFwiZW5naW5lLmlvLWNsaWVudDp0cmFuc3BvcnRcIik7XG5cbmNsYXNzIFRyYW5zcG9ydCBleHRlbmRzIEVtaXR0ZXIge1xuICAvKipcbiAgICogVHJhbnNwb3J0IGFic3RyYWN0IGNvbnN0cnVjdG9yLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucy5cbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBjb25zdHJ1Y3RvcihvcHRzKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMub3B0cyA9IG9wdHM7XG4gICAgdGhpcy5xdWVyeSA9IG9wdHMucXVlcnk7XG4gICAgdGhpcy5yZWFkeVN0YXRlID0gXCJcIjtcbiAgICB0aGlzLnNvY2tldCA9IG9wdHMuc29ja2V0O1xuICB9XG5cbiAgLyoqXG4gICAqIEVtaXRzIGFuIGVycm9yLlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gICAqIEByZXR1cm4ge1RyYW5zcG9ydH0gZm9yIGNoYWluaW5nXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuICBvbkVycm9yKG1zZywgZGVzYykge1xuICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcihtc2cpO1xuICAgIGVyci50eXBlID0gXCJUcmFuc3BvcnRFcnJvclwiO1xuICAgIGVyci5kZXNjcmlwdGlvbiA9IGRlc2M7XG4gICAgdGhpcy5lbWl0KFwiZXJyb3JcIiwgZXJyKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBPcGVucyB0aGUgdHJhbnNwb3J0LlxuICAgKlxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cbiAgb3BlbigpIHtcbiAgICBpZiAoXCJjbG9zZWRcIiA9PT0gdGhpcy5yZWFkeVN0YXRlIHx8IFwiXCIgPT09IHRoaXMucmVhZHlTdGF0ZSkge1xuICAgICAgdGhpcy5yZWFkeVN0YXRlID0gXCJvcGVuaW5nXCI7XG4gICAgICB0aGlzLmRvT3BlbigpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIENsb3NlcyB0aGUgdHJhbnNwb3J0LlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIGNsb3NlKCkge1xuICAgIGlmIChcIm9wZW5pbmdcIiA9PT0gdGhpcy5yZWFkeVN0YXRlIHx8IFwib3BlblwiID09PSB0aGlzLnJlYWR5U3RhdGUpIHtcbiAgICAgIHRoaXMuZG9DbG9zZSgpO1xuICAgICAgdGhpcy5vbkNsb3NlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogU2VuZHMgbXVsdGlwbGUgcGFja2V0cy5cbiAgICpcbiAgICogQHBhcmFtIHtBcnJheX0gcGFja2V0c1xuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIHNlbmQocGFja2V0cykge1xuICAgIGlmIChcIm9wZW5cIiA9PT0gdGhpcy5yZWFkeVN0YXRlKSB7XG4gICAgICB0aGlzLndyaXRlKHBhY2tldHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyB0aGlzIG1pZ2h0IGhhcHBlbiBpZiB0aGUgdHJhbnNwb3J0IHdhcyBzaWxlbnRseSBjbG9zZWQgaW4gdGhlIGJlZm9yZXVubG9hZCBldmVudCBoYW5kbGVyXG4gICAgICBkZWJ1ZyhcInRyYW5zcG9ydCBpcyBub3Qgb3BlbiwgZGlzY2FyZGluZyBwYWNrZXRzXCIpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgdXBvbiBvcGVuXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgb25PcGVuKCkge1xuICAgIHRoaXMucmVhZHlTdGF0ZSA9IFwib3BlblwiO1xuICAgIHRoaXMud3JpdGFibGUgPSB0cnVlO1xuICAgIHRoaXMuZW1pdChcIm9wZW5cIik7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIHdpdGggZGF0YS5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGFcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBvbkRhdGEoZGF0YSkge1xuICAgIGNvbnN0IHBhY2tldCA9IHBhcnNlci5kZWNvZGVQYWNrZXQoZGF0YSwgdGhpcy5zb2NrZXQuYmluYXJ5VHlwZSk7XG4gICAgdGhpcy5vblBhY2tldChwYWNrZXQpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aXRoIGEgZGVjb2RlZCBwYWNrZXQuXG4gICAqL1xuICBvblBhY2tldChwYWNrZXQpIHtcbiAgICB0aGlzLmVtaXQoXCJwYWNrZXRcIiwgcGFja2V0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgdXBvbiBjbG9zZS5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBvbkNsb3NlKCkge1xuICAgIHRoaXMucmVhZHlTdGF0ZSA9IFwiY2xvc2VkXCI7XG4gICAgdGhpcy5lbWl0KFwiY2xvc2VcIik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUcmFuc3BvcnQ7XG4iLCJjb25zdCBYTUxIdHRwUmVxdWVzdCA9IHJlcXVpcmUoXCIuLi8uLi9jb250cmliL3htbGh0dHByZXF1ZXN0LXNzbC9YTUxIdHRwUmVxdWVzdFwiKTtcbmNvbnN0IFhIUiA9IHJlcXVpcmUoXCIuL3BvbGxpbmcteGhyXCIpO1xuY29uc3QgSlNPTlAgPSByZXF1aXJlKFwiLi9wb2xsaW5nLWpzb25wXCIpO1xuY29uc3Qgd2Vic29ja2V0ID0gcmVxdWlyZShcIi4vd2Vic29ja2V0XCIpO1xuXG5leHBvcnRzLnBvbGxpbmcgPSBwb2xsaW5nO1xuZXhwb3J0cy53ZWJzb2NrZXQgPSB3ZWJzb2NrZXQ7XG5cbi8qKlxuICogUG9sbGluZyB0cmFuc3BvcnQgcG9seW1vcnBoaWMgY29uc3RydWN0b3IuXG4gKiBEZWNpZGVzIG9uIHhociB2cyBqc29ucCBiYXNlZCBvbiBmZWF0dXJlIGRldGVjdGlvbi5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBwb2xsaW5nKG9wdHMpIHtcbiAgbGV0IHhocjtcbiAgbGV0IHhkID0gZmFsc2U7XG4gIGxldCB4cyA9IGZhbHNlO1xuICBjb25zdCBqc29ucCA9IGZhbHNlICE9PSBvcHRzLmpzb25wO1xuXG4gIGlmICh0eXBlb2YgbG9jYXRpb24gIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjb25zdCBpc1NTTCA9IFwiaHR0cHM6XCIgPT09IGxvY2F0aW9uLnByb3RvY29sO1xuICAgIGxldCBwb3J0ID0gbG9jYXRpb24ucG9ydDtcblxuICAgIC8vIHNvbWUgdXNlciBhZ2VudHMgaGF2ZSBlbXB0eSBgbG9jYXRpb24ucG9ydGBcbiAgICBpZiAoIXBvcnQpIHtcbiAgICAgIHBvcnQgPSBpc1NTTCA/IDQ0MyA6IDgwO1xuICAgIH1cblxuICAgIHhkID0gb3B0cy5ob3N0bmFtZSAhPT0gbG9jYXRpb24uaG9zdG5hbWUgfHwgcG9ydCAhPT0gb3B0cy5wb3J0O1xuICAgIHhzID0gb3B0cy5zZWN1cmUgIT09IGlzU1NMO1xuICB9XG5cbiAgb3B0cy54ZG9tYWluID0geGQ7XG4gIG9wdHMueHNjaGVtZSA9IHhzO1xuICB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3Qob3B0cyk7XG5cbiAgaWYgKFwib3BlblwiIGluIHhociAmJiAhb3B0cy5mb3JjZUpTT05QKSB7XG4gICAgcmV0dXJuIG5ldyBYSFIob3B0cyk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCFqc29ucCkgdGhyb3cgbmV3IEVycm9yKFwiSlNPTlAgZGlzYWJsZWRcIik7XG4gICAgcmV0dXJuIG5ldyBKU09OUChvcHRzKTtcbiAgfVxufVxuIiwiY29uc3QgUG9sbGluZyA9IHJlcXVpcmUoXCIuL3BvbGxpbmdcIik7XG5jb25zdCBnbG9iYWxUaGlzID0gcmVxdWlyZShcIi4uL2dsb2JhbFRoaXNcIik7XG5cbmNvbnN0IHJOZXdsaW5lID0gL1xcbi9nO1xuY29uc3QgckVzY2FwZWROZXdsaW5lID0gL1xcXFxuL2c7XG5cbi8qKlxuICogR2xvYmFsIEpTT05QIGNhbGxiYWNrcy5cbiAqL1xuXG5sZXQgY2FsbGJhY2tzO1xuXG5jbGFzcyBKU09OUFBvbGxpbmcgZXh0ZW5kcyBQb2xsaW5nIHtcbiAgLyoqXG4gICAqIEpTT05QIFBvbGxpbmcgY29uc3RydWN0b3IuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzLlxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cbiAgY29uc3RydWN0b3Iob3B0cykge1xuICAgIHN1cGVyKG9wdHMpO1xuXG4gICAgdGhpcy5xdWVyeSA9IHRoaXMucXVlcnkgfHwge307XG5cbiAgICAvLyBkZWZpbmUgZ2xvYmFsIGNhbGxiYWNrcyBhcnJheSBpZiBub3QgcHJlc2VudFxuICAgIC8vIHdlIGRvIHRoaXMgaGVyZSAobGF6aWx5KSB0byBhdm9pZCB1bm5lZWRlZCBnbG9iYWwgcG9sbHV0aW9uXG4gICAgaWYgKCFjYWxsYmFja3MpIHtcbiAgICAgIC8vIHdlIG5lZWQgdG8gY29uc2lkZXIgbXVsdGlwbGUgZW5naW5lcyBpbiB0aGUgc2FtZSBwYWdlXG4gICAgICBjYWxsYmFja3MgPSBnbG9iYWxUaGlzLl9fX2VpbyA9IGdsb2JhbFRoaXMuX19fZWlvIHx8IFtdO1xuICAgIH1cblxuICAgIC8vIGNhbGxiYWNrIGlkZW50aWZpZXJcbiAgICB0aGlzLmluZGV4ID0gY2FsbGJhY2tzLmxlbmd0aDtcblxuICAgIC8vIGFkZCBjYWxsYmFjayB0byBqc29ucCBnbG9iYWxcbiAgICBjYWxsYmFja3MucHVzaCh0aGlzLm9uRGF0YS5iaW5kKHRoaXMpKTtcblxuICAgIC8vIGFwcGVuZCB0byBxdWVyeSBzdHJpbmdcbiAgICB0aGlzLnF1ZXJ5LmogPSB0aGlzLmluZGV4O1xuICB9XG5cbiAgLyoqXG4gICAqIEpTT05QIG9ubHkgc3VwcG9ydHMgYmluYXJ5IGFzIGJhc2U2NCBlbmNvZGVkIHN0cmluZ3NcbiAgICovXG4gIGdldCBzdXBwb3J0c0JpbmFyeSgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogQ2xvc2VzIHRoZSBzb2NrZXQuXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgZG9DbG9zZSgpIHtcbiAgICBpZiAodGhpcy5zY3JpcHQpIHtcbiAgICAgIC8vIHByZXZlbnQgc3B1cmlvdXMgZXJyb3JzIGZyb20gYmVpbmcgZW1pdHRlZCB3aGVuIHRoZSB3aW5kb3cgaXMgdW5sb2FkZWRcbiAgICAgIHRoaXMuc2NyaXB0Lm9uZXJyb3IgPSAoKSA9PiB7fTtcbiAgICAgIHRoaXMuc2NyaXB0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5zY3JpcHQpO1xuICAgICAgdGhpcy5zY3JpcHQgPSBudWxsO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmZvcm0pIHtcbiAgICAgIHRoaXMuZm9ybS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuZm9ybSk7XG4gICAgICB0aGlzLmZvcm0gPSBudWxsO1xuICAgICAgdGhpcy5pZnJhbWUgPSBudWxsO1xuICAgIH1cblxuICAgIHN1cGVyLmRvQ2xvc2UoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdGFydHMgYSBwb2xsIGN5Y2xlLlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIGRvUG9sbCgpIHtcbiAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuXG4gICAgaWYgKHRoaXMuc2NyaXB0KSB7XG4gICAgICB0aGlzLnNjcmlwdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuc2NyaXB0KTtcbiAgICAgIHRoaXMuc2NyaXB0ID0gbnVsbDtcbiAgICB9XG5cbiAgICBzY3JpcHQuYXN5bmMgPSB0cnVlO1xuICAgIHNjcmlwdC5zcmMgPSB0aGlzLnVyaSgpO1xuICAgIHNjcmlwdC5vbmVycm9yID0gZSA9PiB7XG4gICAgICB0aGlzLm9uRXJyb3IoXCJqc29ucCBwb2xsIGVycm9yXCIsIGUpO1xuICAgIH07XG5cbiAgICBjb25zdCBpbnNlcnRBdCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpWzBdO1xuICAgIGlmIChpbnNlcnRBdCkge1xuICAgICAgaW5zZXJ0QXQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoc2NyaXB0LCBpbnNlcnRBdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIChkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmJvZHkpLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgfVxuICAgIHRoaXMuc2NyaXB0ID0gc2NyaXB0O1xuXG4gICAgY29uc3QgaXNVQWdlY2tvID1cbiAgICAgIFwidW5kZWZpbmVkXCIgIT09IHR5cGVvZiBuYXZpZ2F0b3IgJiYgL2dlY2tvL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcblxuICAgIGlmIChpc1VBZ2Vja28pIHtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IGlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICAgICAgfSwgMTAwKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogV3JpdGVzIHdpdGggYSBoaWRkZW4gaWZyYW1lLlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YSB0byBzZW5kXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxlZCB1cG9uIGZsdXNoLlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIGRvV3JpdGUoZGF0YSwgZm4pIHtcbiAgICBsZXQgaWZyYW1lO1xuXG4gICAgaWYgKCF0aGlzLmZvcm0pIHtcbiAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICAgIGNvbnN0IGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gICAgICBjb25zdCBpZCA9ICh0aGlzLmlmcmFtZUlkID0gXCJlaW9faWZyYW1lX1wiICsgdGhpcy5pbmRleCk7XG5cbiAgICAgIGZvcm0uY2xhc3NOYW1lID0gXCJzb2NrZXRpb1wiO1xuICAgICAgZm9ybS5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICAgIGZvcm0uc3R5bGUudG9wID0gXCItMTAwMHB4XCI7XG4gICAgICBmb3JtLnN0eWxlLmxlZnQgPSBcIi0xMDAwcHhcIjtcbiAgICAgIGZvcm0udGFyZ2V0ID0gaWQ7XG4gICAgICBmb3JtLm1ldGhvZCA9IFwiUE9TVFwiO1xuICAgICAgZm9ybS5zZXRBdHRyaWJ1dGUoXCJhY2NlcHQtY2hhcnNldFwiLCBcInV0Zi04XCIpO1xuICAgICAgYXJlYS5uYW1lID0gXCJkXCI7XG4gICAgICBmb3JtLmFwcGVuZENoaWxkKGFyZWEpO1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmb3JtKTtcblxuICAgICAgdGhpcy5mb3JtID0gZm9ybTtcbiAgICAgIHRoaXMuYXJlYSA9IGFyZWE7XG4gICAgfVxuXG4gICAgdGhpcy5mb3JtLmFjdGlvbiA9IHRoaXMudXJpKCk7XG5cbiAgICBmdW5jdGlvbiBjb21wbGV0ZSgpIHtcbiAgICAgIGluaXRJZnJhbWUoKTtcbiAgICAgIGZuKCk7XG4gICAgfVxuXG4gICAgY29uc3QgaW5pdElmcmFtZSA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLmlmcmFtZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHRoaXMuZm9ybS5yZW1vdmVDaGlsZCh0aGlzLmlmcmFtZSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICB0aGlzLm9uRXJyb3IoXCJqc29ucCBwb2xsaW5nIGlmcmFtZSByZW1vdmFsIGVycm9yXCIsIGUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIGllNiBkeW5hbWljIGlmcmFtZXMgd2l0aCB0YXJnZXQ9XCJcIiBzdXBwb3J0ICh0aGFua3MgQ2hyaXMgTGFtYmFjaGVyKVxuICAgICAgICBjb25zdCBodG1sID0gJzxpZnJhbWUgc3JjPVwiamF2YXNjcmlwdDowXCIgbmFtZT1cIicgKyB0aGlzLmlmcmFtZUlkICsgJ1wiPic7XG4gICAgICAgIGlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaHRtbCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7XG4gICAgICAgIGlmcmFtZS5uYW1lID0gdGhpcy5pZnJhbWVJZDtcbiAgICAgICAgaWZyYW1lLnNyYyA9IFwiamF2YXNjcmlwdDowXCI7XG4gICAgICB9XG5cbiAgICAgIGlmcmFtZS5pZCA9IHRoaXMuaWZyYW1lSWQ7XG5cbiAgICAgIHRoaXMuZm9ybS5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICAgICAgdGhpcy5pZnJhbWUgPSBpZnJhbWU7XG4gICAgfTtcblxuICAgIGluaXRJZnJhbWUoKTtcblxuICAgIC8vIGVzY2FwZSBcXG4gdG8gcHJldmVudCBpdCBmcm9tIGJlaW5nIGNvbnZlcnRlZCBpbnRvIFxcclxcbiBieSBzb21lIFVBc1xuICAgIC8vIGRvdWJsZSBlc2NhcGluZyBpcyByZXF1aXJlZCBmb3IgZXNjYXBlZCBuZXcgbGluZXMgYmVjYXVzZSB1bmVzY2FwaW5nIG9mIG5ldyBsaW5lcyBjYW4gYmUgZG9uZSBzYWZlbHkgb24gc2VydmVyLXNpZGVcbiAgICBkYXRhID0gZGF0YS5yZXBsYWNlKHJFc2NhcGVkTmV3bGluZSwgXCJcXFxcXFxuXCIpO1xuICAgIHRoaXMuYXJlYS52YWx1ZSA9IGRhdGEucmVwbGFjZShyTmV3bGluZSwgXCJcXFxcblwiKTtcblxuICAgIHRyeSB7XG4gICAgICB0aGlzLmZvcm0uc3VibWl0KCk7XG4gICAgfSBjYXRjaCAoZSkge31cblxuICAgIGlmICh0aGlzLmlmcmFtZS5hdHRhY2hFdmVudCkge1xuICAgICAgdGhpcy5pZnJhbWUub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5pZnJhbWUucmVhZHlTdGF0ZSA9PT0gXCJjb21wbGV0ZVwiKSB7XG4gICAgICAgICAgY29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pZnJhbWUub25sb2FkID0gY29tcGxldGU7XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gSlNPTlBQb2xsaW5nO1xuIiwiLyogZ2xvYmFsIGF0dGFjaEV2ZW50ICovXG5cbmNvbnN0IFhNTEh0dHBSZXF1ZXN0ID0gcmVxdWlyZShcIi4uLy4uL2NvbnRyaWIveG1saHR0cHJlcXVlc3Qtc3NsL1hNTEh0dHBSZXF1ZXN0XCIpO1xuY29uc3QgUG9sbGluZyA9IHJlcXVpcmUoXCIuL3BvbGxpbmdcIik7XG5jb25zdCBFbWl0dGVyID0gcmVxdWlyZShcImNvbXBvbmVudC1lbWl0dGVyXCIpO1xuY29uc3QgeyBwaWNrIH0gPSByZXF1aXJlKFwiLi4vdXRpbFwiKTtcbmNvbnN0IGdsb2JhbFRoaXMgPSByZXF1aXJlKFwiLi4vZ2xvYmFsVGhpc1wiKTtcblxuY29uc3QgZGVidWcgPSByZXF1aXJlKFwiZGVidWdcIikoXCJlbmdpbmUuaW8tY2xpZW50OnBvbGxpbmcteGhyXCIpO1xuXG4vKipcbiAqIEVtcHR5IGZ1bmN0aW9uXG4gKi9cblxuZnVuY3Rpb24gZW1wdHkoKSB7fVxuXG5jb25zdCBoYXNYSFIyID0gKGZ1bmN0aW9uKCkge1xuICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoeyB4ZG9tYWluOiBmYWxzZSB9KTtcbiAgcmV0dXJuIG51bGwgIT0geGhyLnJlc3BvbnNlVHlwZTtcbn0pKCk7XG5cbmNsYXNzIFhIUiBleHRlbmRzIFBvbGxpbmcge1xuICAvKipcbiAgICogWEhSIFBvbGxpbmcgY29uc3RydWN0b3IuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuICBjb25zdHJ1Y3RvcihvcHRzKSB7XG4gICAgc3VwZXIob3B0cyk7XG5cbiAgICBpZiAodHlwZW9mIGxvY2F0aW9uICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICBjb25zdCBpc1NTTCA9IFwiaHR0cHM6XCIgPT09IGxvY2F0aW9uLnByb3RvY29sO1xuICAgICAgbGV0IHBvcnQgPSBsb2NhdGlvbi5wb3J0O1xuXG4gICAgICAvLyBzb21lIHVzZXIgYWdlbnRzIGhhdmUgZW1wdHkgYGxvY2F0aW9uLnBvcnRgXG4gICAgICBpZiAoIXBvcnQpIHtcbiAgICAgICAgcG9ydCA9IGlzU1NMID8gNDQzIDogODA7XG4gICAgICB9XG5cbiAgICAgIHRoaXMueGQgPVxuICAgICAgICAodHlwZW9mIGxvY2F0aW9uICE9PSBcInVuZGVmaW5lZFwiICYmXG4gICAgICAgICAgb3B0cy5ob3N0bmFtZSAhPT0gbG9jYXRpb24uaG9zdG5hbWUpIHx8XG4gICAgICAgIHBvcnQgIT09IG9wdHMucG9ydDtcbiAgICAgIHRoaXMueHMgPSBvcHRzLnNlY3VyZSAhPT0gaXNTU0w7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFhIUiBzdXBwb3J0cyBiaW5hcnlcbiAgICAgKi9cbiAgICBjb25zdCBmb3JjZUJhc2U2NCA9IG9wdHMgJiYgb3B0cy5mb3JjZUJhc2U2NDtcbiAgICB0aGlzLnN1cHBvcnRzQmluYXJ5ID0gaGFzWEhSMiAmJiAhZm9yY2VCYXNlNjQ7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIHJlcXVlc3QuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBtZXRob2RcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICByZXF1ZXN0KG9wdHMgPSB7fSkge1xuICAgIE9iamVjdC5hc3NpZ24ob3B0cywgeyB4ZDogdGhpcy54ZCwgeHM6IHRoaXMueHMgfSwgdGhpcy5vcHRzKTtcbiAgICByZXR1cm4gbmV3IFJlcXVlc3QodGhpcy51cmkoKSwgb3B0cyk7XG4gIH1cblxuICAvKipcbiAgICogU2VuZHMgZGF0YS5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGEgdG8gc2VuZC5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGVkIHVwb24gZmx1c2guXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgZG9Xcml0ZShkYXRhLCBmbikge1xuICAgIGNvbnN0IHJlcSA9IHRoaXMucmVxdWVzdCh7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgZGF0YTogZGF0YVxuICAgIH0pO1xuICAgIHJlcS5vbihcInN1Y2Nlc3NcIiwgZm4pO1xuICAgIHJlcS5vbihcImVycm9yXCIsIGVyciA9PiB7XG4gICAgICB0aGlzLm9uRXJyb3IoXCJ4aHIgcG9zdCBlcnJvclwiLCBlcnIpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0YXJ0cyBhIHBvbGwgY3ljbGUuXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgZG9Qb2xsKCkge1xuICAgIGRlYnVnKFwieGhyIHBvbGxcIik7XG4gICAgY29uc3QgcmVxID0gdGhpcy5yZXF1ZXN0KCk7XG4gICAgcmVxLm9uKFwiZGF0YVwiLCB0aGlzLm9uRGF0YS5iaW5kKHRoaXMpKTtcbiAgICByZXEub24oXCJlcnJvclwiLCBlcnIgPT4ge1xuICAgICAgdGhpcy5vbkVycm9yKFwieGhyIHBvbGwgZXJyb3JcIiwgZXJyKTtcbiAgICB9KTtcbiAgICB0aGlzLnBvbGxYaHIgPSByZXE7XG4gIH1cbn1cblxuY2xhc3MgUmVxdWVzdCBleHRlbmRzIEVtaXR0ZXIge1xuICAvKipcbiAgICogUmVxdWVzdCBjb25zdHJ1Y3RvclxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cbiAgY29uc3RydWN0b3IodXJpLCBvcHRzKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLm9wdHMgPSBvcHRzO1xuXG4gICAgdGhpcy5tZXRob2QgPSBvcHRzLm1ldGhvZCB8fCBcIkdFVFwiO1xuICAgIHRoaXMudXJpID0gdXJpO1xuICAgIHRoaXMuYXN5bmMgPSBmYWxzZSAhPT0gb3B0cy5hc3luYztcbiAgICB0aGlzLmRhdGEgPSB1bmRlZmluZWQgIT09IG9wdHMuZGF0YSA/IG9wdHMuZGF0YSA6IG51bGw7XG5cbiAgICB0aGlzLmNyZWF0ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgdGhlIFhIUiBvYmplY3QgYW5kIHNlbmRzIHRoZSByZXF1ZXN0LlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIGNyZWF0ZSgpIHtcbiAgICBjb25zdCBvcHRzID0gcGljayhcbiAgICAgIHRoaXMub3B0cyxcbiAgICAgIFwiYWdlbnRcIixcbiAgICAgIFwiZW5hYmxlc1hEUlwiLFxuICAgICAgXCJwZnhcIixcbiAgICAgIFwia2V5XCIsXG4gICAgICBcInBhc3NwaHJhc2VcIixcbiAgICAgIFwiY2VydFwiLFxuICAgICAgXCJjYVwiLFxuICAgICAgXCJjaXBoZXJzXCIsXG4gICAgICBcInJlamVjdFVuYXV0aG9yaXplZFwiLFxuICAgICAgXCJhdXRvVW5yZWZcIlxuICAgICk7XG4gICAgb3B0cy54ZG9tYWluID0gISF0aGlzLm9wdHMueGQ7XG4gICAgb3B0cy54c2NoZW1lID0gISF0aGlzLm9wdHMueHM7XG5cbiAgICBjb25zdCB4aHIgPSAodGhpcy54aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3Qob3B0cykpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGRlYnVnKFwieGhyIG9wZW4gJXM6ICVzXCIsIHRoaXMubWV0aG9kLCB0aGlzLnVyaSk7XG4gICAgICB4aHIub3Blbih0aGlzLm1ldGhvZCwgdGhpcy51cmksIHRoaXMuYXN5bmMpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKHRoaXMub3B0cy5leHRyYUhlYWRlcnMpIHtcbiAgICAgICAgICB4aHIuc2V0RGlzYWJsZUhlYWRlckNoZWNrICYmIHhoci5zZXREaXNhYmxlSGVhZGVyQ2hlY2sodHJ1ZSk7XG4gICAgICAgICAgZm9yIChsZXQgaSBpbiB0aGlzLm9wdHMuZXh0cmFIZWFkZXJzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRzLmV4dHJhSGVhZGVycy5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihpLCB0aGlzLm9wdHMuZXh0cmFIZWFkZXJzW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHt9XG5cbiAgICAgIGlmIChcIlBPU1RcIiA9PT0gdGhpcy5tZXRob2QpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtdHlwZVwiLCBcInRleHQvcGxhaW47Y2hhcnNldD1VVEYtOFwiKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgIH1cblxuICAgICAgdHJ5IHtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJBY2NlcHRcIiwgXCIqLypcIik7XG4gICAgICB9IGNhdGNoIChlKSB7fVxuXG4gICAgICAvLyBpZTYgY2hlY2tcbiAgICAgIGlmIChcIndpdGhDcmVkZW50aWFsc1wiIGluIHhocikge1xuICAgICAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gdGhpcy5vcHRzLndpdGhDcmVkZW50aWFscztcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMub3B0cy5yZXF1ZXN0VGltZW91dCkge1xuICAgICAgICB4aHIudGltZW91dCA9IHRoaXMub3B0cy5yZXF1ZXN0VGltZW91dDtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuaGFzWERSKCkpIHtcbiAgICAgICAgeGhyLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICB0aGlzLm9uTG9hZCgpO1xuICAgICAgICB9O1xuICAgICAgICB4aHIub25lcnJvciA9ICgpID0+IHtcbiAgICAgICAgICB0aGlzLm9uRXJyb3IoeGhyLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xuICAgICAgICAgIGlmICg0ICE9PSB4aHIucmVhZHlTdGF0ZSkgcmV0dXJuO1xuICAgICAgICAgIGlmICgyMDAgPT09IHhoci5zdGF0dXMgfHwgMTIyMyA9PT0geGhyLnN0YXR1cykge1xuICAgICAgICAgICAgdGhpcy5vbkxvYWQoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gbWFrZSBzdXJlIHRoZSBgZXJyb3JgIGV2ZW50IGhhbmRsZXIgdGhhdCdzIHVzZXItc2V0XG4gICAgICAgICAgICAvLyBkb2VzIG5vdCB0aHJvdyBpbiB0aGUgc2FtZSB0aWNrIGFuZCBnZXRzIGNhdWdodCBoZXJlXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5vbkVycm9yKHR5cGVvZiB4aHIuc3RhdHVzID09PSBcIm51bWJlclwiID8geGhyLnN0YXR1cyA6IDApO1xuICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBkZWJ1ZyhcInhociBkYXRhICVzXCIsIHRoaXMuZGF0YSk7XG4gICAgICB4aHIuc2VuZCh0aGlzLmRhdGEpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIE5lZWQgdG8gZGVmZXIgc2luY2UgLmNyZWF0ZSgpIGlzIGNhbGxlZCBkaXJlY3RseSBmcm9tIHRoZSBjb25zdHJ1Y3RvclxuICAgICAgLy8gYW5kIHRodXMgdGhlICdlcnJvcicgZXZlbnQgY2FuIG9ubHkgYmUgb25seSBib3VuZCAqYWZ0ZXIqIHRoaXMgZXhjZXB0aW9uXG4gICAgICAvLyBvY2N1cnMuICBUaGVyZWZvcmUsIGFsc28sIHdlIGNhbm5vdCB0aHJvdyBoZXJlIGF0IGFsbC5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLm9uRXJyb3IoZSk7XG4gICAgICB9LCAwKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICB0aGlzLmluZGV4ID0gUmVxdWVzdC5yZXF1ZXN0c0NvdW50Kys7XG4gICAgICBSZXF1ZXN0LnJlcXVlc3RzW3RoaXMuaW5kZXhdID0gdGhpcztcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIHVwb24gc3VjY2Vzc2Z1bCByZXNwb25zZS5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBvblN1Y2Nlc3MoKSB7XG4gICAgdGhpcy5lbWl0KFwic3VjY2Vzc1wiKTtcbiAgICB0aGlzLmNsZWFudXAoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgaWYgd2UgaGF2ZSBkYXRhLlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIG9uRGF0YShkYXRhKSB7XG4gICAgdGhpcy5lbWl0KFwiZGF0YVwiLCBkYXRhKTtcbiAgICB0aGlzLm9uU3VjY2VzcygpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCB1cG9uIGVycm9yLlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIG9uRXJyb3IoZXJyKSB7XG4gICAgdGhpcy5lbWl0KFwiZXJyb3JcIiwgZXJyKTtcbiAgICB0aGlzLmNsZWFudXAodHJ1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYW5zIHVwIGhvdXNlLlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIGNsZWFudXAoZnJvbUVycm9yKSB7XG4gICAgaWYgKFwidW5kZWZpbmVkXCIgPT09IHR5cGVvZiB0aGlzLnhociB8fCBudWxsID09PSB0aGlzLnhocikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyB4bWxodHRwcmVxdWVzdFxuICAgIGlmICh0aGlzLmhhc1hEUigpKSB7XG4gICAgICB0aGlzLnhoci5vbmxvYWQgPSB0aGlzLnhoci5vbmVycm9yID0gZW1wdHk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMueGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGVtcHR5O1xuICAgIH1cblxuICAgIGlmIChmcm9tRXJyb3IpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMueGhyLmFib3J0KCk7XG4gICAgICB9IGNhdGNoIChlKSB7fVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIGRlbGV0ZSBSZXF1ZXN0LnJlcXVlc3RzW3RoaXMuaW5kZXhdO1xuICAgIH1cblxuICAgIHRoaXMueGhyID0gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgdXBvbiBsb2FkLlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIG9uTG9hZCgpIHtcbiAgICBjb25zdCBkYXRhID0gdGhpcy54aHIucmVzcG9uc2VUZXh0O1xuICAgIGlmIChkYXRhICE9PSBudWxsKSB7XG4gICAgICB0aGlzLm9uRGF0YShkYXRhKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgaXQgaGFzIFhEb21haW5SZXF1ZXN0LlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIGhhc1hEUigpIHtcbiAgICByZXR1cm4gdHlwZW9mIFhEb21haW5SZXF1ZXN0ICE9PSBcInVuZGVmaW5lZFwiICYmICF0aGlzLnhzICYmIHRoaXMuZW5hYmxlc1hEUjtcbiAgfVxuXG4gIC8qKlxuICAgKiBBYm9ydHMgdGhlIHJlcXVlc3QuXG4gICAqXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuICBhYm9ydCgpIHtcbiAgICB0aGlzLmNsZWFudXAoKTtcbiAgfVxufVxuXG4vKipcbiAqIEFib3J0cyBwZW5kaW5nIHJlcXVlc3RzIHdoZW4gdW5sb2FkaW5nIHRoZSB3aW5kb3cuIFRoaXMgaXMgbmVlZGVkIHRvIHByZXZlbnRcbiAqIG1lbW9yeSBsZWFrcyAoZS5nLiB3aGVuIHVzaW5nIElFKSBhbmQgdG8gZW5zdXJlIHRoYXQgbm8gc3B1cmlvdXMgZXJyb3IgaXNcbiAqIGVtaXR0ZWQuXG4gKi9cblxuUmVxdWVzdC5yZXF1ZXN0c0NvdW50ID0gMDtcblJlcXVlc3QucmVxdWVzdHMgPSB7fTtcblxuaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICBpZiAodHlwZW9mIGF0dGFjaEV2ZW50ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBhdHRhY2hFdmVudChcIm9udW5sb2FkXCIsIHVubG9hZEhhbmRsZXIpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhZGRFdmVudExpc3RlbmVyID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBjb25zdCB0ZXJtaW5hdGlvbkV2ZW50ID0gXCJvbnBhZ2VoaWRlXCIgaW4gZ2xvYmFsVGhpcyA/IFwicGFnZWhpZGVcIiA6IFwidW5sb2FkXCI7XG4gICAgYWRkRXZlbnRMaXN0ZW5lcih0ZXJtaW5hdGlvbkV2ZW50LCB1bmxvYWRIYW5kbGVyLCBmYWxzZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdW5sb2FkSGFuZGxlcigpIHtcbiAgZm9yIChsZXQgaSBpbiBSZXF1ZXN0LnJlcXVlc3RzKSB7XG4gICAgaWYgKFJlcXVlc3QucmVxdWVzdHMuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgIFJlcXVlc3QucmVxdWVzdHNbaV0uYWJvcnQoKTtcbiAgICB9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBYSFI7XG5tb2R1bGUuZXhwb3J0cy5SZXF1ZXN0ID0gUmVxdWVzdDtcbiIsImNvbnN0IFRyYW5zcG9ydCA9IHJlcXVpcmUoXCIuLi90cmFuc3BvcnRcIik7XG5jb25zdCBwYXJzZXFzID0gcmVxdWlyZShcInBhcnNlcXNcIik7XG5jb25zdCBwYXJzZXIgPSByZXF1aXJlKFwiZW5naW5lLmlvLXBhcnNlclwiKTtcbmNvbnN0IHllYXN0ID0gcmVxdWlyZShcInllYXN0XCIpO1xuXG5jb25zdCBkZWJ1ZyA9IHJlcXVpcmUoXCJkZWJ1Z1wiKShcImVuZ2luZS5pby1jbGllbnQ6cG9sbGluZ1wiKTtcblxuY2xhc3MgUG9sbGluZyBleHRlbmRzIFRyYW5zcG9ydCB7XG4gIC8qKlxuICAgKiBUcmFuc3BvcnQgbmFtZS5cbiAgICovXG4gIGdldCBuYW1lKCkge1xuICAgIHJldHVybiBcInBvbGxpbmdcIjtcbiAgfVxuXG4gIC8qKlxuICAgKiBPcGVucyB0aGUgc29ja2V0ICh0cmlnZ2VycyBwb2xsaW5nKS4gV2Ugd3JpdGUgYSBQSU5HIG1lc3NhZ2UgdG8gZGV0ZXJtaW5lXG4gICAqIHdoZW4gdGhlIHRyYW5zcG9ydCBpcyBvcGVuLlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIGRvT3BlbigpIHtcbiAgICB0aGlzLnBvbGwoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXVzZXMgcG9sbGluZy5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgdXBvbiBidWZmZXJzIGFyZSBmbHVzaGVkIGFuZCB0cmFuc3BvcnQgaXMgcGF1c2VkXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgcGF1c2Uob25QYXVzZSkge1xuICAgIHRoaXMucmVhZHlTdGF0ZSA9IFwicGF1c2luZ1wiO1xuXG4gICAgY29uc3QgcGF1c2UgPSAoKSA9PiB7XG4gICAgICBkZWJ1ZyhcInBhdXNlZFwiKTtcbiAgICAgIHRoaXMucmVhZHlTdGF0ZSA9IFwicGF1c2VkXCI7XG4gICAgICBvblBhdXNlKCk7XG4gICAgfTtcblxuICAgIGlmICh0aGlzLnBvbGxpbmcgfHwgIXRoaXMud3JpdGFibGUpIHtcbiAgICAgIGxldCB0b3RhbCA9IDA7XG5cbiAgICAgIGlmICh0aGlzLnBvbGxpbmcpIHtcbiAgICAgICAgZGVidWcoXCJ3ZSBhcmUgY3VycmVudGx5IHBvbGxpbmcgLSB3YWl0aW5nIHRvIHBhdXNlXCIpO1xuICAgICAgICB0b3RhbCsrO1xuICAgICAgICB0aGlzLm9uY2UoXCJwb2xsQ29tcGxldGVcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgZGVidWcoXCJwcmUtcGF1c2UgcG9sbGluZyBjb21wbGV0ZVwiKTtcbiAgICAgICAgICAtLXRvdGFsIHx8IHBhdXNlKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMud3JpdGFibGUpIHtcbiAgICAgICAgZGVidWcoXCJ3ZSBhcmUgY3VycmVudGx5IHdyaXRpbmcgLSB3YWl0aW5nIHRvIHBhdXNlXCIpO1xuICAgICAgICB0b3RhbCsrO1xuICAgICAgICB0aGlzLm9uY2UoXCJkcmFpblwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICBkZWJ1ZyhcInByZS1wYXVzZSB3cml0aW5nIGNvbXBsZXRlXCIpO1xuICAgICAgICAgIC0tdG90YWwgfHwgcGF1c2UoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhdXNlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFN0YXJ0cyBwb2xsaW5nIGN5Y2xlLlxuICAgKlxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cbiAgcG9sbCgpIHtcbiAgICBkZWJ1ZyhcInBvbGxpbmdcIik7XG4gICAgdGhpcy5wb2xsaW5nID0gdHJ1ZTtcbiAgICB0aGlzLmRvUG9sbCgpO1xuICAgIHRoaXMuZW1pdChcInBvbGxcIik7XG4gIH1cblxuICAvKipcbiAgICogT3ZlcmxvYWRzIG9uRGF0YSB0byBkZXRlY3QgcGF5bG9hZHMuXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgb25EYXRhKGRhdGEpIHtcbiAgICBkZWJ1ZyhcInBvbGxpbmcgZ290IGRhdGEgJXNcIiwgZGF0YSk7XG4gICAgY29uc3QgY2FsbGJhY2sgPSBwYWNrZXQgPT4ge1xuICAgICAgLy8gaWYgaXRzIHRoZSBmaXJzdCBtZXNzYWdlIHdlIGNvbnNpZGVyIHRoZSB0cmFuc3BvcnQgb3BlblxuICAgICAgaWYgKFwib3BlbmluZ1wiID09PSB0aGlzLnJlYWR5U3RhdGUgJiYgcGFja2V0LnR5cGUgPT09IFwib3BlblwiKSB7XG4gICAgICAgIHRoaXMub25PcGVuKCk7XG4gICAgICB9XG5cbiAgICAgIC8vIGlmIGl0cyBhIGNsb3NlIHBhY2tldCwgd2UgY2xvc2UgdGhlIG9uZ29pbmcgcmVxdWVzdHNcbiAgICAgIGlmIChcImNsb3NlXCIgPT09IHBhY2tldC50eXBlKSB7XG4gICAgICAgIHRoaXMub25DbG9zZSgpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIC8vIG90aGVyd2lzZSBieXBhc3Mgb25EYXRhIGFuZCBoYW5kbGUgdGhlIG1lc3NhZ2VcbiAgICAgIHRoaXMub25QYWNrZXQocGFja2V0KTtcbiAgICB9O1xuXG4gICAgLy8gZGVjb2RlIHBheWxvYWRcbiAgICBwYXJzZXIuZGVjb2RlUGF5bG9hZChkYXRhLCB0aGlzLnNvY2tldC5iaW5hcnlUeXBlKS5mb3JFYWNoKGNhbGxiYWNrKTtcblxuICAgIC8vIGlmIGFuIGV2ZW50IGRpZCBub3QgdHJpZ2dlciBjbG9zaW5nXG4gICAgaWYgKFwiY2xvc2VkXCIgIT09IHRoaXMucmVhZHlTdGF0ZSkge1xuICAgICAgLy8gaWYgd2UgZ290IGRhdGEgd2UncmUgbm90IHBvbGxpbmdcbiAgICAgIHRoaXMucG9sbGluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5lbWl0KFwicG9sbENvbXBsZXRlXCIpO1xuXG4gICAgICBpZiAoXCJvcGVuXCIgPT09IHRoaXMucmVhZHlTdGF0ZSkge1xuICAgICAgICB0aGlzLnBvbGwoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlYnVnKCdpZ25vcmluZyBwb2xsIC0gdHJhbnNwb3J0IHN0YXRlIFwiJXNcIicsIHRoaXMucmVhZHlTdGF0ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEZvciBwb2xsaW5nLCBzZW5kIGEgY2xvc2UgcGFja2V0LlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIGRvQ2xvc2UoKSB7XG4gICAgY29uc3QgY2xvc2UgPSAoKSA9PiB7XG4gICAgICBkZWJ1ZyhcIndyaXRpbmcgY2xvc2UgcGFja2V0XCIpO1xuICAgICAgdGhpcy53cml0ZShbeyB0eXBlOiBcImNsb3NlXCIgfV0pO1xuICAgIH07XG5cbiAgICBpZiAoXCJvcGVuXCIgPT09IHRoaXMucmVhZHlTdGF0ZSkge1xuICAgICAgZGVidWcoXCJ0cmFuc3BvcnQgb3BlbiAtIGNsb3NpbmdcIik7XG4gICAgICBjbG9zZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpbiBjYXNlIHdlJ3JlIHRyeWluZyB0byBjbG9zZSB3aGlsZVxuICAgICAgLy8gaGFuZHNoYWtpbmcgaXMgaW4gcHJvZ3Jlc3MgKEdILTE2NClcbiAgICAgIGRlYnVnKFwidHJhbnNwb3J0IG5vdCBvcGVuIC0gZGVmZXJyaW5nIGNsb3NlXCIpO1xuICAgICAgdGhpcy5vbmNlKFwib3BlblwiLCBjbG9zZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFdyaXRlcyBhIHBhY2tldHMgcGF5bG9hZC5cbiAgICpcbiAgICogQHBhcmFtIHtBcnJheX0gZGF0YSBwYWNrZXRzXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGRyYWluIGNhbGxiYWNrXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgd3JpdGUocGFja2V0cykge1xuICAgIHRoaXMud3JpdGFibGUgPSBmYWxzZTtcblxuICAgIHBhcnNlci5lbmNvZGVQYXlsb2FkKHBhY2tldHMsIGRhdGEgPT4ge1xuICAgICAgdGhpcy5kb1dyaXRlKGRhdGEsICgpID0+IHtcbiAgICAgICAgdGhpcy53cml0YWJsZSA9IHRydWU7XG4gICAgICAgIHRoaXMuZW1pdChcImRyYWluXCIpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogR2VuZXJhdGVzIHVyaSBmb3IgY29ubmVjdGlvbi5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICB1cmkoKSB7XG4gICAgbGV0IHF1ZXJ5ID0gdGhpcy5xdWVyeSB8fCB7fTtcbiAgICBjb25zdCBzY2hlbWEgPSB0aGlzLm9wdHMuc2VjdXJlID8gXCJodHRwc1wiIDogXCJodHRwXCI7XG4gICAgbGV0IHBvcnQgPSBcIlwiO1xuXG4gICAgLy8gY2FjaGUgYnVzdGluZyBpcyBmb3JjZWRcbiAgICBpZiAoZmFsc2UgIT09IHRoaXMub3B0cy50aW1lc3RhbXBSZXF1ZXN0cykge1xuICAgICAgcXVlcnlbdGhpcy5vcHRzLnRpbWVzdGFtcFBhcmFtXSA9IHllYXN0KCk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLnN1cHBvcnRzQmluYXJ5ICYmICFxdWVyeS5zaWQpIHtcbiAgICAgIHF1ZXJ5LmI2NCA9IDE7XG4gICAgfVxuXG4gICAgcXVlcnkgPSBwYXJzZXFzLmVuY29kZShxdWVyeSk7XG5cbiAgICAvLyBhdm9pZCBwb3J0IGlmIGRlZmF1bHQgZm9yIHNjaGVtYVxuICAgIGlmIChcbiAgICAgIHRoaXMub3B0cy5wb3J0ICYmXG4gICAgICAoKFwiaHR0cHNcIiA9PT0gc2NoZW1hICYmIE51bWJlcih0aGlzLm9wdHMucG9ydCkgIT09IDQ0MykgfHxcbiAgICAgICAgKFwiaHR0cFwiID09PSBzY2hlbWEgJiYgTnVtYmVyKHRoaXMub3B0cy5wb3J0KSAhPT0gODApKVxuICAgICkge1xuICAgICAgcG9ydCA9IFwiOlwiICsgdGhpcy5vcHRzLnBvcnQ7XG4gICAgfVxuXG4gICAgLy8gcHJlcGVuZCA/IHRvIHF1ZXJ5XG4gICAgaWYgKHF1ZXJ5Lmxlbmd0aCkge1xuICAgICAgcXVlcnkgPSBcIj9cIiArIHF1ZXJ5O1xuICAgIH1cblxuICAgIGNvbnN0IGlwdjYgPSB0aGlzLm9wdHMuaG9zdG5hbWUuaW5kZXhPZihcIjpcIikgIT09IC0xO1xuICAgIHJldHVybiAoXG4gICAgICBzY2hlbWEgK1xuICAgICAgXCI6Ly9cIiArXG4gICAgICAoaXB2NiA/IFwiW1wiICsgdGhpcy5vcHRzLmhvc3RuYW1lICsgXCJdXCIgOiB0aGlzLm9wdHMuaG9zdG5hbWUpICtcbiAgICAgIHBvcnQgK1xuICAgICAgdGhpcy5vcHRzLnBhdGggK1xuICAgICAgcXVlcnlcbiAgICApO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUG9sbGluZztcbiIsImNvbnN0IGdsb2JhbFRoaXMgPSByZXF1aXJlKFwiLi4vZ2xvYmFsVGhpc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIFdlYlNvY2tldDogZ2xvYmFsVGhpcy5XZWJTb2NrZXQgfHwgZ2xvYmFsVGhpcy5Nb3pXZWJTb2NrZXQsXG4gIHVzaW5nQnJvd3NlcldlYlNvY2tldDogdHJ1ZSxcbiAgZGVmYXVsdEJpbmFyeVR5cGU6IFwiYXJyYXlidWZmZXJcIlxufTtcbiIsImNvbnN0IFRyYW5zcG9ydCA9IHJlcXVpcmUoXCIuLi90cmFuc3BvcnRcIik7XG5jb25zdCBwYXJzZXIgPSByZXF1aXJlKFwiZW5naW5lLmlvLXBhcnNlclwiKTtcbmNvbnN0IHBhcnNlcXMgPSByZXF1aXJlKFwicGFyc2Vxc1wiKTtcbmNvbnN0IHllYXN0ID0gcmVxdWlyZShcInllYXN0XCIpO1xuY29uc3QgeyBwaWNrIH0gPSByZXF1aXJlKFwiLi4vdXRpbFwiKTtcbmNvbnN0IHtcbiAgV2ViU29ja2V0LFxuICB1c2luZ0Jyb3dzZXJXZWJTb2NrZXQsXG4gIGRlZmF1bHRCaW5hcnlUeXBlXG59ID0gcmVxdWlyZShcIi4vd2Vic29ja2V0LWNvbnN0cnVjdG9yXCIpO1xuXG5jb25zdCBkZWJ1ZyA9IHJlcXVpcmUoXCJkZWJ1Z1wiKShcImVuZ2luZS5pby1jbGllbnQ6d2Vic29ja2V0XCIpO1xuXG4vLyBkZXRlY3QgUmVhY3ROYXRpdmUgZW52aXJvbm1lbnRcbmNvbnN0IGlzUmVhY3ROYXRpdmUgPVxuICB0eXBlb2YgbmF2aWdhdG9yICE9PSBcInVuZGVmaW5lZFwiICYmXG4gIHR5cGVvZiBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gXCJzdHJpbmdcIiAmJlxuICBuYXZpZ2F0b3IucHJvZHVjdC50b0xvd2VyQ2FzZSgpID09PSBcInJlYWN0bmF0aXZlXCI7XG5cbmNsYXNzIFdTIGV4dGVuZHMgVHJhbnNwb3J0IHtcbiAgLyoqXG4gICAqIFdlYlNvY2tldCB0cmFuc3BvcnQgY29uc3RydWN0b3IuXG4gICAqXG4gICAqIEBhcGkge09iamVjdH0gY29ubmVjdGlvbiBvcHRpb25zXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuICBjb25zdHJ1Y3RvcihvcHRzKSB7XG4gICAgc3VwZXIob3B0cyk7XG5cbiAgICB0aGlzLnN1cHBvcnRzQmluYXJ5ID0gIW9wdHMuZm9yY2VCYXNlNjQ7XG4gIH1cblxuICAvKipcbiAgICogVHJhbnNwb3J0IG5hbWUuXG4gICAqXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuICBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gXCJ3ZWJzb2NrZXRcIjtcbiAgfVxuXG4gIC8qKlxuICAgKiBPcGVucyBzb2NrZXQuXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgZG9PcGVuKCkge1xuICAgIGlmICghdGhpcy5jaGVjaygpKSB7XG4gICAgICAvLyBsZXQgcHJvYmUgdGltZW91dFxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHVyaSA9IHRoaXMudXJpKCk7XG4gICAgY29uc3QgcHJvdG9jb2xzID0gdGhpcy5vcHRzLnByb3RvY29scztcblxuICAgIC8vIFJlYWN0IE5hdGl2ZSBvbmx5IHN1cHBvcnRzIHRoZSAnaGVhZGVycycgb3B0aW9uLCBhbmQgd2lsbCBwcmludCBhIHdhcm5pbmcgaWYgYW55dGhpbmcgZWxzZSBpcyBwYXNzZWRcbiAgICBjb25zdCBvcHRzID0gaXNSZWFjdE5hdGl2ZVxuICAgICAgPyB7fVxuICAgICAgOiBwaWNrKFxuICAgICAgICAgIHRoaXMub3B0cyxcbiAgICAgICAgICBcImFnZW50XCIsXG4gICAgICAgICAgXCJwZXJNZXNzYWdlRGVmbGF0ZVwiLFxuICAgICAgICAgIFwicGZ4XCIsXG4gICAgICAgICAgXCJrZXlcIixcbiAgICAgICAgICBcInBhc3NwaHJhc2VcIixcbiAgICAgICAgICBcImNlcnRcIixcbiAgICAgICAgICBcImNhXCIsXG4gICAgICAgICAgXCJjaXBoZXJzXCIsXG4gICAgICAgICAgXCJyZWplY3RVbmF1dGhvcml6ZWRcIixcbiAgICAgICAgICBcImxvY2FsQWRkcmVzc1wiLFxuICAgICAgICAgIFwicHJvdG9jb2xWZXJzaW9uXCIsXG4gICAgICAgICAgXCJvcmlnaW5cIixcbiAgICAgICAgICBcIm1heFBheWxvYWRcIixcbiAgICAgICAgICBcImZhbWlseVwiLFxuICAgICAgICAgIFwiY2hlY2tTZXJ2ZXJJZGVudGl0eVwiXG4gICAgICAgICk7XG5cbiAgICBpZiAodGhpcy5vcHRzLmV4dHJhSGVhZGVycykge1xuICAgICAgb3B0cy5oZWFkZXJzID0gdGhpcy5vcHRzLmV4dHJhSGVhZGVycztcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgdGhpcy53cyA9XG4gICAgICAgIHVzaW5nQnJvd3NlcldlYlNvY2tldCAmJiAhaXNSZWFjdE5hdGl2ZVxuICAgICAgICAgID8gcHJvdG9jb2xzXG4gICAgICAgICAgICA/IG5ldyBXZWJTb2NrZXQodXJpLCBwcm90b2NvbHMpXG4gICAgICAgICAgICA6IG5ldyBXZWJTb2NrZXQodXJpKVxuICAgICAgICAgIDogbmV3IFdlYlNvY2tldCh1cmksIHByb3RvY29scywgb3B0cyk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5lbWl0KFwiZXJyb3JcIiwgZXJyKTtcbiAgICB9XG5cbiAgICB0aGlzLndzLmJpbmFyeVR5cGUgPSB0aGlzLnNvY2tldC5iaW5hcnlUeXBlIHx8IGRlZmF1bHRCaW5hcnlUeXBlO1xuXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgZXZlbnQgbGlzdGVuZXJzIHRvIHRoZSBzb2NrZXRcbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICB0aGlzLndzLm9ub3BlbiA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLm9wdHMuYXV0b1VucmVmKSB7XG4gICAgICAgIHRoaXMud3MuX3NvY2tldC51bnJlZigpO1xuICAgICAgfVxuICAgICAgdGhpcy5vbk9wZW4oKTtcbiAgICB9O1xuICAgIHRoaXMud3Mub25jbG9zZSA9IHRoaXMub25DbG9zZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMud3Mub25tZXNzYWdlID0gZXYgPT4gdGhpcy5vbkRhdGEoZXYuZGF0YSk7XG4gICAgdGhpcy53cy5vbmVycm9yID0gZSA9PiB0aGlzLm9uRXJyb3IoXCJ3ZWJzb2NrZXQgZXJyb3JcIiwgZSk7XG4gIH1cblxuICAvKipcbiAgICogV3JpdGVzIGRhdGEgdG8gc29ja2V0LlxuICAgKlxuICAgKiBAcGFyYW0ge0FycmF5fSBhcnJheSBvZiBwYWNrZXRzLlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIHdyaXRlKHBhY2tldHMpIHtcbiAgICB0aGlzLndyaXRhYmxlID0gZmFsc2U7XG5cbiAgICAvLyBlbmNvZGVQYWNrZXQgZWZmaWNpZW50IGFzIGl0IHVzZXMgV1MgZnJhbWluZ1xuICAgIC8vIG5vIG5lZWQgZm9yIGVuY29kZVBheWxvYWRcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhY2tldHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHBhY2tldCA9IHBhY2tldHNbaV07XG4gICAgICBjb25zdCBsYXN0UGFja2V0ID0gaSA9PT0gcGFja2V0cy5sZW5ndGggLSAxO1xuXG4gICAgICBwYXJzZXIuZW5jb2RlUGFja2V0KHBhY2tldCwgdGhpcy5zdXBwb3J0c0JpbmFyeSwgZGF0YSA9PiB7XG4gICAgICAgIC8vIGFsd2F5cyBjcmVhdGUgYSBuZXcgb2JqZWN0IChHSC00MzcpXG4gICAgICAgIGNvbnN0IG9wdHMgPSB7fTtcbiAgICAgICAgaWYgKCF1c2luZ0Jyb3dzZXJXZWJTb2NrZXQpIHtcbiAgICAgICAgICBpZiAocGFja2V0Lm9wdGlvbnMpIHtcbiAgICAgICAgICAgIG9wdHMuY29tcHJlc3MgPSBwYWNrZXQub3B0aW9ucy5jb21wcmVzcztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodGhpcy5vcHRzLnBlck1lc3NhZ2VEZWZsYXRlKSB7XG4gICAgICAgICAgICBjb25zdCBsZW4gPVxuICAgICAgICAgICAgICBcInN0cmluZ1wiID09PSB0eXBlb2YgZGF0YSA/IEJ1ZmZlci5ieXRlTGVuZ3RoKGRhdGEpIDogZGF0YS5sZW5ndGg7XG4gICAgICAgICAgICBpZiAobGVuIDwgdGhpcy5vcHRzLnBlck1lc3NhZ2VEZWZsYXRlLnRocmVzaG9sZCkge1xuICAgICAgICAgICAgICBvcHRzLmNvbXByZXNzID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gU29tZXRpbWVzIHRoZSB3ZWJzb2NrZXQgaGFzIGFscmVhZHkgYmVlbiBjbG9zZWQgYnV0IHRoZSBicm93c2VyIGRpZG4ndFxuICAgICAgICAvLyBoYXZlIGEgY2hhbmNlIG9mIGluZm9ybWluZyB1cyBhYm91dCBpdCB5ZXQsIGluIHRoYXQgY2FzZSBzZW5kIHdpbGxcbiAgICAgICAgLy8gdGhyb3cgYW4gZXJyb3JcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpZiAodXNpbmdCcm93c2VyV2ViU29ja2V0KSB7XG4gICAgICAgICAgICAvLyBUeXBlRXJyb3IgaXMgdGhyb3duIHdoZW4gcGFzc2luZyB0aGUgc2Vjb25kIGFyZ3VtZW50IG9uIFNhZmFyaVxuICAgICAgICAgICAgdGhpcy53cy5zZW5kKGRhdGEpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLndzLnNlbmQoZGF0YSwgb3B0cyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgZGVidWcoXCJ3ZWJzb2NrZXQgY2xvc2VkIGJlZm9yZSBvbmNsb3NlIGV2ZW50XCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGxhc3RQYWNrZXQpIHtcbiAgICAgICAgICAvLyBmYWtlIGRyYWluXG4gICAgICAgICAgLy8gZGVmZXIgdG8gbmV4dCB0aWNrIHRvIGFsbG93IFNvY2tldCB0byBjbGVhciB3cml0ZUJ1ZmZlclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy53cml0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmVtaXQoXCJkcmFpblwiKTtcbiAgICAgICAgICB9LCAwKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCB1cG9uIGNsb3NlXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgb25DbG9zZSgpIHtcbiAgICBUcmFuc3BvcnQucHJvdG90eXBlLm9uQ2xvc2UuY2FsbCh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbG9zZXMgc29ja2V0LlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIGRvQ2xvc2UoKSB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLndzICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICB0aGlzLndzLmNsb3NlKCk7XG4gICAgICB0aGlzLndzID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2VuZXJhdGVzIHVyaSBmb3IgY29ubmVjdGlvbi5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICB1cmkoKSB7XG4gICAgbGV0IHF1ZXJ5ID0gdGhpcy5xdWVyeSB8fCB7fTtcbiAgICBjb25zdCBzY2hlbWEgPSB0aGlzLm9wdHMuc2VjdXJlID8gXCJ3c3NcIiA6IFwid3NcIjtcbiAgICBsZXQgcG9ydCA9IFwiXCI7XG5cbiAgICAvLyBhdm9pZCBwb3J0IGlmIGRlZmF1bHQgZm9yIHNjaGVtYVxuICAgIGlmIChcbiAgICAgIHRoaXMub3B0cy5wb3J0ICYmXG4gICAgICAoKFwid3NzXCIgPT09IHNjaGVtYSAmJiBOdW1iZXIodGhpcy5vcHRzLnBvcnQpICE9PSA0NDMpIHx8XG4gICAgICAgIChcIndzXCIgPT09IHNjaGVtYSAmJiBOdW1iZXIodGhpcy5vcHRzLnBvcnQpICE9PSA4MCkpXG4gICAgKSB7XG4gICAgICBwb3J0ID0gXCI6XCIgKyB0aGlzLm9wdHMucG9ydDtcbiAgICB9XG5cbiAgICAvLyBhcHBlbmQgdGltZXN0YW1wIHRvIFVSSVxuICAgIGlmICh0aGlzLm9wdHMudGltZXN0YW1wUmVxdWVzdHMpIHtcbiAgICAgIHF1ZXJ5W3RoaXMub3B0cy50aW1lc3RhbXBQYXJhbV0gPSB5ZWFzdCgpO1xuICAgIH1cblxuICAgIC8vIGNvbW11bmljYXRlIGJpbmFyeSBzdXBwb3J0IGNhcGFiaWxpdGllc1xuICAgIGlmICghdGhpcy5zdXBwb3J0c0JpbmFyeSkge1xuICAgICAgcXVlcnkuYjY0ID0gMTtcbiAgICB9XG5cbiAgICBxdWVyeSA9IHBhcnNlcXMuZW5jb2RlKHF1ZXJ5KTtcblxuICAgIC8vIHByZXBlbmQgPyB0byBxdWVyeVxuICAgIGlmIChxdWVyeS5sZW5ndGgpIHtcbiAgICAgIHF1ZXJ5ID0gXCI/XCIgKyBxdWVyeTtcbiAgICB9XG5cbiAgICBjb25zdCBpcHY2ID0gdGhpcy5vcHRzLmhvc3RuYW1lLmluZGV4T2YoXCI6XCIpICE9PSAtMTtcbiAgICByZXR1cm4gKFxuICAgICAgc2NoZW1hICtcbiAgICAgIFwiOi8vXCIgK1xuICAgICAgKGlwdjYgPyBcIltcIiArIHRoaXMub3B0cy5ob3N0bmFtZSArIFwiXVwiIDogdGhpcy5vcHRzLmhvc3RuYW1lKSArXG4gICAgICBwb3J0ICtcbiAgICAgIHRoaXMub3B0cy5wYXRoICtcbiAgICAgIHF1ZXJ5XG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGZWF0dXJlIGRldGVjdGlvbiBmb3IgV2ViU29ja2V0LlxuICAgKlxuICAgKiBAcmV0dXJuIHtCb29sZWFufSB3aGV0aGVyIHRoaXMgdHJhbnNwb3J0IGlzIGF2YWlsYWJsZS5cbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG4gIGNoZWNrKCkge1xuICAgIHJldHVybiAoXG4gICAgICAhIVdlYlNvY2tldCAmJlxuICAgICAgIShcIl9faW5pdGlhbGl6ZVwiIGluIFdlYlNvY2tldCAmJiB0aGlzLm5hbWUgPT09IFdTLnByb3RvdHlwZS5uYW1lKVxuICAgICk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBXUztcbiIsIm1vZHVsZS5leHBvcnRzLnBpY2sgPSAob2JqLCAuLi5hdHRyKSA9PiB7XG4gIHJldHVybiBhdHRyLnJlZHVjZSgoYWNjLCBrKSA9PiB7XG4gICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgYWNjW2tdID0gb2JqW2tdO1xuICAgIH1cbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG59O1xuIiwiLy8gYnJvd3NlciBzaGltIGZvciB4bWxodHRwcmVxdWVzdCBtb2R1bGVcblxuY29uc3QgaGFzQ09SUyA9IHJlcXVpcmUoXCJoYXMtY29yc1wiKTtcbmNvbnN0IGdsb2JhbFRoaXMgPSByZXF1aXJlKFwiLi9nbG9iYWxUaGlzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9wdHMpIHtcbiAgY29uc3QgeGRvbWFpbiA9IG9wdHMueGRvbWFpbjtcblxuICAvLyBzY2hlbWUgbXVzdCBiZSBzYW1lIHdoZW4gdXNpZ24gWERvbWFpblJlcXVlc3RcbiAgLy8gaHR0cDovL2Jsb2dzLm1zZG4uY29tL2IvaWVpbnRlcm5hbHMvYXJjaGl2ZS8yMDEwLzA1LzEzL3hkb21haW5yZXF1ZXN0LXJlc3RyaWN0aW9ucy1saW1pdGF0aW9ucy1hbmQtd29ya2Fyb3VuZHMuYXNweFxuICBjb25zdCB4c2NoZW1lID0gb3B0cy54c2NoZW1lO1xuXG4gIC8vIFhEb21haW5SZXF1ZXN0IGhhcyBhIGZsb3cgb2Ygbm90IHNlbmRpbmcgY29va2llLCB0aGVyZWZvcmUgaXQgc2hvdWxkIGJlIGRpc2FibGVkIGFzIGEgZGVmYXVsdC5cbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL0F1dG9tYXR0aWMvZW5naW5lLmlvLWNsaWVudC9wdWxsLzIxN1xuICBjb25zdCBlbmFibGVzWERSID0gb3B0cy5lbmFibGVzWERSO1xuXG4gIC8vIFhNTEh0dHBSZXF1ZXN0IGNhbiBiZSBkaXNhYmxlZCBvbiBJRVxuICB0cnkge1xuICAgIGlmIChcInVuZGVmaW5lZFwiICE9PSB0eXBlb2YgWE1MSHR0cFJlcXVlc3QgJiYgKCF4ZG9tYWluIHx8IGhhc0NPUlMpKSB7XG4gICAgICByZXR1cm4gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgfVxuICB9IGNhdGNoIChlKSB7fVxuXG4gIC8vIFVzZSBYRG9tYWluUmVxdWVzdCBmb3IgSUU4IGlmIGVuYWJsZXNYRFIgaXMgdHJ1ZVxuICAvLyBiZWNhdXNlIGxvYWRpbmcgYmFyIGtlZXBzIGZsYXNoaW5nIHdoZW4gdXNpbmcganNvbnAtcG9sbGluZ1xuICAvLyBodHRwczovL2dpdGh1Yi5jb20veXVqaW9zYWthL3NvY2tlLmlvLWllOC1sb2FkaW5nLWV4YW1wbGVcbiAgdHJ5IHtcbiAgICBpZiAoXCJ1bmRlZmluZWRcIiAhPT0gdHlwZW9mIFhEb21haW5SZXF1ZXN0ICYmICF4c2NoZW1lICYmIGVuYWJsZXNYRFIpIHtcbiAgICAgIHJldHVybiBuZXcgWERvbWFpblJlcXVlc3QoKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHt9XG5cbiAgaWYgKCF4ZG9tYWluKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBuZXcgZ2xvYmFsVGhpc1tbXCJBY3RpdmVcIl0uY29uY2F0KFwiT2JqZWN0XCIpLmpvaW4oXCJYXCIpXShcbiAgICAgICAgXCJNaWNyb3NvZnQuWE1MSFRUUFwiXG4gICAgICApO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cbn07XG4iLCJjb25zdCBQQUNLRVRfVFlQRVMgPSBPYmplY3QuY3JlYXRlKG51bGwpOyAvLyBubyBNYXAgPSBubyBwb2x5ZmlsbFxuUEFDS0VUX1RZUEVTW1wib3BlblwiXSA9IFwiMFwiO1xuUEFDS0VUX1RZUEVTW1wiY2xvc2VcIl0gPSBcIjFcIjtcblBBQ0tFVF9UWVBFU1tcInBpbmdcIl0gPSBcIjJcIjtcblBBQ0tFVF9UWVBFU1tcInBvbmdcIl0gPSBcIjNcIjtcblBBQ0tFVF9UWVBFU1tcIm1lc3NhZ2VcIl0gPSBcIjRcIjtcblBBQ0tFVF9UWVBFU1tcInVwZ3JhZGVcIl0gPSBcIjVcIjtcblBBQ0tFVF9UWVBFU1tcIm5vb3BcIl0gPSBcIjZcIjtcblxuY29uc3QgUEFDS0VUX1RZUEVTX1JFVkVSU0UgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuT2JqZWN0LmtleXMoUEFDS0VUX1RZUEVTKS5mb3JFYWNoKGtleSA9PiB7XG4gIFBBQ0tFVF9UWVBFU19SRVZFUlNFW1BBQ0tFVF9UWVBFU1trZXldXSA9IGtleTtcbn0pO1xuXG5jb25zdCBFUlJPUl9QQUNLRVQgPSB7IHR5cGU6IFwiZXJyb3JcIiwgZGF0YTogXCJwYXJzZXIgZXJyb3JcIiB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgUEFDS0VUX1RZUEVTLFxuICBQQUNLRVRfVFlQRVNfUkVWRVJTRSxcbiAgRVJST1JfUEFDS0VUXG59O1xuIiwiY29uc3QgeyBQQUNLRVRfVFlQRVNfUkVWRVJTRSwgRVJST1JfUEFDS0VUIH0gPSByZXF1aXJlKFwiLi9jb21tb25zXCIpO1xuXG5jb25zdCB3aXRoTmF0aXZlQXJyYXlCdWZmZXIgPSB0eXBlb2YgQXJyYXlCdWZmZXIgPT09IFwiZnVuY3Rpb25cIjtcblxubGV0IGJhc2U2NGRlY29kZXI7XG5pZiAod2l0aE5hdGl2ZUFycmF5QnVmZmVyKSB7XG4gIGJhc2U2NGRlY29kZXIgPSByZXF1aXJlKFwiYmFzZTY0LWFycmF5YnVmZmVyXCIpO1xufVxuXG5jb25zdCBkZWNvZGVQYWNrZXQgPSAoZW5jb2RlZFBhY2tldCwgYmluYXJ5VHlwZSkgPT4ge1xuICBpZiAodHlwZW9mIGVuY29kZWRQYWNrZXQgIT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogXCJtZXNzYWdlXCIsXG4gICAgICBkYXRhOiBtYXBCaW5hcnkoZW5jb2RlZFBhY2tldCwgYmluYXJ5VHlwZSlcbiAgICB9O1xuICB9XG4gIGNvbnN0IHR5cGUgPSBlbmNvZGVkUGFja2V0LmNoYXJBdCgwKTtcbiAgaWYgKHR5cGUgPT09IFwiYlwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IFwibWVzc2FnZVwiLFxuICAgICAgZGF0YTogZGVjb2RlQmFzZTY0UGFja2V0KGVuY29kZWRQYWNrZXQuc3Vic3RyaW5nKDEpLCBiaW5hcnlUeXBlKVxuICAgIH07XG4gIH1cbiAgY29uc3QgcGFja2V0VHlwZSA9IFBBQ0tFVF9UWVBFU19SRVZFUlNFW3R5cGVdO1xuICBpZiAoIXBhY2tldFR5cGUpIHtcbiAgICByZXR1cm4gRVJST1JfUEFDS0VUO1xuICB9XG4gIHJldHVybiBlbmNvZGVkUGFja2V0Lmxlbmd0aCA+IDFcbiAgICA/IHtcbiAgICAgICAgdHlwZTogUEFDS0VUX1RZUEVTX1JFVkVSU0VbdHlwZV0sXG4gICAgICAgIGRhdGE6IGVuY29kZWRQYWNrZXQuc3Vic3RyaW5nKDEpXG4gICAgICB9XG4gICAgOiB7XG4gICAgICAgIHR5cGU6IFBBQ0tFVF9UWVBFU19SRVZFUlNFW3R5cGVdXG4gICAgICB9O1xufTtcblxuY29uc3QgZGVjb2RlQmFzZTY0UGFja2V0ID0gKGRhdGEsIGJpbmFyeVR5cGUpID0+IHtcbiAgaWYgKGJhc2U2NGRlY29kZXIpIHtcbiAgICBjb25zdCBkZWNvZGVkID0gYmFzZTY0ZGVjb2Rlci5kZWNvZGUoZGF0YSk7XG4gICAgcmV0dXJuIG1hcEJpbmFyeShkZWNvZGVkLCBiaW5hcnlUeXBlKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geyBiYXNlNjQ6IHRydWUsIGRhdGEgfTsgLy8gZmFsbGJhY2sgZm9yIG9sZCBicm93c2Vyc1xuICB9XG59O1xuXG5jb25zdCBtYXBCaW5hcnkgPSAoZGF0YSwgYmluYXJ5VHlwZSkgPT4ge1xuICBzd2l0Y2ggKGJpbmFyeVR5cGUpIHtcbiAgICBjYXNlIFwiYmxvYlwiOlxuICAgICAgcmV0dXJuIGRhdGEgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlciA/IG5ldyBCbG9iKFtkYXRhXSkgOiBkYXRhO1xuICAgIGNhc2UgXCJhcnJheWJ1ZmZlclwiOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZGF0YTsgLy8gYXNzdW1pbmcgdGhlIGRhdGEgaXMgYWxyZWFkeSBhbiBBcnJheUJ1ZmZlclxuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRlY29kZVBhY2tldDtcbiIsImNvbnN0IHsgUEFDS0VUX1RZUEVTIH0gPSByZXF1aXJlKFwiLi9jb21tb25zXCIpO1xuXG5jb25zdCB3aXRoTmF0aXZlQmxvYiA9XG4gIHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgfHxcbiAgKHR5cGVvZiBCbG9iICE9PSBcInVuZGVmaW5lZFwiICYmXG4gICAgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKEJsb2IpID09PSBcIltvYmplY3QgQmxvYkNvbnN0cnVjdG9yXVwiKTtcbmNvbnN0IHdpdGhOYXRpdmVBcnJheUJ1ZmZlciA9IHR5cGVvZiBBcnJheUJ1ZmZlciA9PT0gXCJmdW5jdGlvblwiO1xuXG4vLyBBcnJheUJ1ZmZlci5pc1ZpZXcgbWV0aG9kIGlzIG5vdCBkZWZpbmVkIGluIElFMTBcbmNvbnN0IGlzVmlldyA9IG9iaiA9PiB7XG4gIHJldHVybiB0eXBlb2YgQXJyYXlCdWZmZXIuaXNWaWV3ID09PSBcImZ1bmN0aW9uXCJcbiAgICA/IEFycmF5QnVmZmVyLmlzVmlldyhvYmopXG4gICAgOiBvYmogJiYgb2JqLmJ1ZmZlciBpbnN0YW5jZW9mIEFycmF5QnVmZmVyO1xufTtcblxuY29uc3QgZW5jb2RlUGFja2V0ID0gKHsgdHlwZSwgZGF0YSB9LCBzdXBwb3J0c0JpbmFyeSwgY2FsbGJhY2spID0+IHtcbiAgaWYgKHdpdGhOYXRpdmVCbG9iICYmIGRhdGEgaW5zdGFuY2VvZiBCbG9iKSB7XG4gICAgaWYgKHN1cHBvcnRzQmluYXJ5KSB7XG4gICAgICByZXR1cm4gY2FsbGJhY2soZGF0YSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBlbmNvZGVCbG9iQXNCYXNlNjQoZGF0YSwgY2FsbGJhY2spO1xuICAgIH1cbiAgfSBlbHNlIGlmIChcbiAgICB3aXRoTmF0aXZlQXJyYXlCdWZmZXIgJiZcbiAgICAoZGF0YSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyIHx8IGlzVmlldyhkYXRhKSlcbiAgKSB7XG4gICAgaWYgKHN1cHBvcnRzQmluYXJ5KSB7XG4gICAgICByZXR1cm4gY2FsbGJhY2soZGF0YSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyID8gZGF0YSA6IGRhdGEuYnVmZmVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGVuY29kZUJsb2JBc0Jhc2U2NChuZXcgQmxvYihbZGF0YV0pLCBjYWxsYmFjayk7XG4gICAgfVxuICB9XG4gIC8vIHBsYWluIHN0cmluZ1xuICByZXR1cm4gY2FsbGJhY2soUEFDS0VUX1RZUEVTW3R5cGVdICsgKGRhdGEgfHwgXCJcIikpO1xufTtcblxuY29uc3QgZW5jb2RlQmxvYkFzQmFzZTY0ID0gKGRhdGEsIGNhbGxiYWNrKSA9PiB7XG4gIGNvbnN0IGZpbGVSZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICBmaWxlUmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBmaWxlUmVhZGVyLnJlc3VsdC5zcGxpdChcIixcIilbMV07XG4gICAgY2FsbGJhY2soXCJiXCIgKyBjb250ZW50KTtcbiAgfTtcbiAgcmV0dXJuIGZpbGVSZWFkZXIucmVhZEFzRGF0YVVSTChkYXRhKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZW5jb2RlUGFja2V0O1xuIiwiY29uc3QgZW5jb2RlUGFja2V0ID0gcmVxdWlyZShcIi4vZW5jb2RlUGFja2V0XCIpO1xuY29uc3QgZGVjb2RlUGFja2V0ID0gcmVxdWlyZShcIi4vZGVjb2RlUGFja2V0XCIpO1xuXG5jb25zdCBTRVBBUkFUT1IgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDMwKTsgLy8gc2VlIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0RlbGltaXRlciNBU0NJSV9kZWxpbWl0ZWRfdGV4dFxuXG5jb25zdCBlbmNvZGVQYXlsb2FkID0gKHBhY2tldHMsIGNhbGxiYWNrKSA9PiB7XG4gIC8vIHNvbWUgcGFja2V0cyBtYXkgYmUgYWRkZWQgdG8gdGhlIGFycmF5IHdoaWxlIGVuY29kaW5nLCBzbyB0aGUgaW5pdGlhbCBsZW5ndGggbXVzdCBiZSBzYXZlZFxuICBjb25zdCBsZW5ndGggPSBwYWNrZXRzLmxlbmd0aDtcbiAgY29uc3QgZW5jb2RlZFBhY2tldHMgPSBuZXcgQXJyYXkobGVuZ3RoKTtcbiAgbGV0IGNvdW50ID0gMDtcblxuICBwYWNrZXRzLmZvckVhY2goKHBhY2tldCwgaSkgPT4ge1xuICAgIC8vIGZvcmNlIGJhc2U2NCBlbmNvZGluZyBmb3IgYmluYXJ5IHBhY2tldHNcbiAgICBlbmNvZGVQYWNrZXQocGFja2V0LCBmYWxzZSwgZW5jb2RlZFBhY2tldCA9PiB7XG4gICAgICBlbmNvZGVkUGFja2V0c1tpXSA9IGVuY29kZWRQYWNrZXQ7XG4gICAgICBpZiAoKytjb3VudCA9PT0gbGVuZ3RoKSB7XG4gICAgICAgIGNhbGxiYWNrKGVuY29kZWRQYWNrZXRzLmpvaW4oU0VQQVJBVE9SKSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufTtcblxuY29uc3QgZGVjb2RlUGF5bG9hZCA9IChlbmNvZGVkUGF5bG9hZCwgYmluYXJ5VHlwZSkgPT4ge1xuICBjb25zdCBlbmNvZGVkUGFja2V0cyA9IGVuY29kZWRQYXlsb2FkLnNwbGl0KFNFUEFSQVRPUik7XG4gIGNvbnN0IHBhY2tldHMgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbmNvZGVkUGFja2V0cy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGRlY29kZWRQYWNrZXQgPSBkZWNvZGVQYWNrZXQoZW5jb2RlZFBhY2tldHNbaV0sIGJpbmFyeVR5cGUpO1xuICAgIHBhY2tldHMucHVzaChkZWNvZGVkUGFja2V0KTtcbiAgICBpZiAoZGVjb2RlZFBhY2tldC50eXBlID09PSBcImVycm9yXCIpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcGFja2V0cztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBwcm90b2NvbDogNCxcbiAgZW5jb2RlUGFja2V0LFxuICBlbmNvZGVQYXlsb2FkLFxuICBkZWNvZGVQYWNrZXQsXG4gIGRlY29kZVBheWxvYWRcbn07XG4iLCJcbi8qKlxuICogTW9kdWxlIGV4cG9ydHMuXG4gKlxuICogTG9naWMgYm9ycm93ZWQgZnJvbSBNb2Rlcm5penI6XG4gKlxuICogICAtIGh0dHBzOi8vZ2l0aHViLmNvbS9Nb2Rlcm5penIvTW9kZXJuaXpyL2Jsb2IvbWFzdGVyL2ZlYXR1cmUtZGV0ZWN0cy9jb3JzLmpzXG4gKi9cblxudHJ5IHtcbiAgbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2YgWE1MSHR0cFJlcXVlc3QgIT09ICd1bmRlZmluZWQnICYmXG4gICAgJ3dpdGhDcmVkZW50aWFscycgaW4gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG59IGNhdGNoIChlcnIpIHtcbiAgLy8gaWYgWE1MSHR0cCBzdXBwb3J0IGlzIGRpc2FibGVkIGluIElFIHRoZW4gaXQgd2lsbCB0aHJvd1xuICAvLyB3aGVuIHRyeWluZyB0byBjcmVhdGVcbiAgbW9kdWxlLmV4cG9ydHMgPSBmYWxzZTtcbn1cbiIsIi8qXG4gIGh0dHBzOi8vZ2l0aHViLmNvbS9iYW5rc2VhbiB3cmFwcGVkIE1ha290byBNYXRzdW1vdG8gYW5kIFRha3VqaSBOaXNoaW11cmEncyBjb2RlIGluIGEgbmFtZXNwYWNlXG4gIHNvIGl0J3MgYmV0dGVyIGVuY2Fwc3VsYXRlZC4gTm93IHlvdSBjYW4gaGF2ZSBtdWx0aXBsZSByYW5kb20gbnVtYmVyIGdlbmVyYXRvcnNcbiAgYW5kIHRoZXkgd29uJ3Qgc3RvbXAgYWxsIG92ZXIgZWFjaG90aGVyJ3Mgc3RhdGUuXG5cbiAgSWYgeW91IHdhbnQgdG8gdXNlIHRoaXMgYXMgYSBzdWJzdGl0dXRlIGZvciBNYXRoLnJhbmRvbSgpLCB1c2UgdGhlIHJhbmRvbSgpXG4gIG1ldGhvZCBsaWtlIHNvOlxuXG4gIHZhciBtID0gbmV3IE1lcnNlbm5lVHdpc3RlcigpO1xuICB2YXIgcmFuZG9tTnVtYmVyID0gbS5yYW5kb20oKTtcblxuICBZb3UgY2FuIGFsc28gY2FsbCB0aGUgb3RoZXIgZ2VucmFuZF97Zm9vfSgpIG1ldGhvZHMgb24gdGhlIGluc3RhbmNlLlxuXG4gIElmIHlvdSB3YW50IHRvIHVzZSBhIHNwZWNpZmljIHNlZWQgaW4gb3JkZXIgdG8gZ2V0IGEgcmVwZWF0YWJsZSByYW5kb21cbiAgc2VxdWVuY2UsIHBhc3MgYW4gaW50ZWdlciBpbnRvIHRoZSBjb25zdHJ1Y3RvcjpcblxuICB2YXIgbSA9IG5ldyBNZXJzZW5uZVR3aXN0ZXIoMTIzKTtcblxuICBhbmQgdGhhdCB3aWxsIGFsd2F5cyBwcm9kdWNlIHRoZSBzYW1lIHJhbmRvbSBzZXF1ZW5jZS5cblxuICBTZWFuIE1jQ3VsbG91Z2ggKGJhbmtzZWFuQGdtYWlsLmNvbSlcbiovXG5cbi8qXG4gICBBIEMtcHJvZ3JhbSBmb3IgTVQxOTkzNywgd2l0aCBpbml0aWFsaXphdGlvbiBpbXByb3ZlZCAyMDAyLzEvMjYuXG4gICBDb2RlZCBieSBUYWt1amkgTmlzaGltdXJhIGFuZCBNYWtvdG8gTWF0c3Vtb3RvLlxuXG4gICBCZWZvcmUgdXNpbmcsIGluaXRpYWxpemUgdGhlIHN0YXRlIGJ5IHVzaW5nIGluaXRfc2VlZChzZWVkKVxuICAgb3IgaW5pdF9ieV9hcnJheShpbml0X2tleSwga2V5X2xlbmd0aCkuXG5cbiAgIENvcHlyaWdodCAoQykgMTk5NyAtIDIwMDIsIE1ha290byBNYXRzdW1vdG8gYW5kIFRha3VqaSBOaXNoaW11cmEsXG4gICBBbGwgcmlnaHRzIHJlc2VydmVkLlxuXG4gICBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXRcbiAgIG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uc1xuICAgYXJlIG1ldDpcblxuICAgICAxLiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodFxuICAgICAgICBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG5cbiAgICAgMi4gUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHRcbiAgICAgICAgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyIGluIHRoZVxuICAgICAgICBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGUgZGlzdHJpYnV0aW9uLlxuXG4gICAgIDMuIFRoZSBuYW1lcyBvZiBpdHMgY29udHJpYnV0b3JzIG1heSBub3QgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGVcbiAgICAgICAgcHJvZHVjdHMgZGVyaXZlZCBmcm9tIHRoaXMgc29mdHdhcmUgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuXG4gICAgICAgIHBlcm1pc3Npb24uXG5cbiAgIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlNcbiAgIFwiQVMgSVNcIiBBTkQgQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1RcbiAgIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUlxuICAgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFIERJU0NMQUlNRUQuICBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUIE9XTkVSIE9SXG4gICBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCxcbiAgIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTyxcbiAgIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLCBEQVRBLCBPUlxuICAgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZIFRIRU9SWSBPRlxuICAgTElBQklMSVRZLCBXSEVUSEVSIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUIChJTkNMVURJTkdcbiAgIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKSBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0UgT0YgVEhJU1xuICAgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEUgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG5cblxuICAgQW55IGZlZWRiYWNrIGlzIHZlcnkgd2VsY29tZS5cbiAgIGh0dHA6Ly93d3cubWF0aC5zY2kuaGlyb3NoaW1hLXUuYWMuanAvfm0tbWF0L01UL2VtdC5odG1sXG4gICBlbWFpbDogbS1tYXQgQCBtYXRoLnNjaS5oaXJvc2hpbWEtdS5hYy5qcCAocmVtb3ZlIHNwYWNlKVxuKi9cblxudmFyIE1lcnNlbm5lVHdpc3RlciA9IGZ1bmN0aW9uKHNlZWQpIHtcblx0aWYgKHNlZWQgPT0gdW5kZWZpbmVkKSB7XG5cdFx0c2VlZCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXHR9XG5cblx0LyogUGVyaW9kIHBhcmFtZXRlcnMgKi9cblx0dGhpcy5OID0gNjI0O1xuXHR0aGlzLk0gPSAzOTc7XG5cdHRoaXMuTUFUUklYX0EgPSAweDk5MDhiMGRmOyAgIC8qIGNvbnN0YW50IHZlY3RvciBhICovXG5cdHRoaXMuVVBQRVJfTUFTSyA9IDB4ODAwMDAwMDA7IC8qIG1vc3Qgc2lnbmlmaWNhbnQgdy1yIGJpdHMgKi9cblx0dGhpcy5MT1dFUl9NQVNLID0gMHg3ZmZmZmZmZjsgLyogbGVhc3Qgc2lnbmlmaWNhbnQgciBiaXRzICovXG5cblx0dGhpcy5tdCA9IG5ldyBBcnJheSh0aGlzLk4pOyAvKiB0aGUgYXJyYXkgZm9yIHRoZSBzdGF0ZSB2ZWN0b3IgKi9cblx0dGhpcy5tdGk9dGhpcy5OKzE7IC8qIG10aT09TisxIG1lYW5zIG10W05dIGlzIG5vdCBpbml0aWFsaXplZCAqL1xuXG5cdGlmIChzZWVkLmNvbnN0cnVjdG9yID09IEFycmF5KSB7XG5cdFx0dGhpcy5pbml0X2J5X2FycmF5KHNlZWQsIHNlZWQubGVuZ3RoKTtcblx0fVxuXHRlbHNlIHtcblx0XHR0aGlzLmluaXRfc2VlZChzZWVkKTtcblx0fVxufVxuXG4vKiBpbml0aWFsaXplcyBtdFtOXSB3aXRoIGEgc2VlZCAqL1xuLyogb3JpZ2luIG5hbWUgaW5pdF9nZW5yYW5kICovXG5NZXJzZW5uZVR3aXN0ZXIucHJvdG90eXBlLmluaXRfc2VlZCA9IGZ1bmN0aW9uKHMpIHtcblx0dGhpcy5tdFswXSA9IHMgPj4+IDA7XG5cdGZvciAodGhpcy5tdGk9MTsgdGhpcy5tdGk8dGhpcy5OOyB0aGlzLm10aSsrKSB7XG5cdFx0dmFyIHMgPSB0aGlzLm10W3RoaXMubXRpLTFdIF4gKHRoaXMubXRbdGhpcy5tdGktMV0gPj4+IDMwKTtcblx0XHR0aGlzLm10W3RoaXMubXRpXSA9ICgoKCgocyAmIDB4ZmZmZjAwMDApID4+PiAxNikgKiAxODEyNDMzMjUzKSA8PCAxNikgKyAocyAmIDB4MDAwMGZmZmYpICogMTgxMjQzMzI1Mylcblx0XHQrIHRoaXMubXRpO1xuXHRcdC8qIFNlZSBLbnV0aCBUQU9DUCBWb2wyLiAzcmQgRWQuIFAuMTA2IGZvciBtdWx0aXBsaWVyLiAqL1xuXHRcdC8qIEluIHRoZSBwcmV2aW91cyB2ZXJzaW9ucywgTVNCcyBvZiB0aGUgc2VlZCBhZmZlY3QgICAqL1xuXHRcdC8qIG9ubHkgTVNCcyBvZiB0aGUgYXJyYXkgbXRbXS4gICAgICAgICAgICAgICAgICAgICAgICAqL1xuXHRcdC8qIDIwMDIvMDEvMDkgbW9kaWZpZWQgYnkgTWFrb3RvIE1hdHN1bW90byAgICAgICAgICAgICAqL1xuXHRcdHRoaXMubXRbdGhpcy5tdGldID4+Pj0gMDtcblx0XHQvKiBmb3IgPjMyIGJpdCBtYWNoaW5lcyAqL1xuXHR9XG59XG5cbi8qIGluaXRpYWxpemUgYnkgYW4gYXJyYXkgd2l0aCBhcnJheS1sZW5ndGggKi9cbi8qIGluaXRfa2V5IGlzIHRoZSBhcnJheSBmb3IgaW5pdGlhbGl6aW5nIGtleXMgKi9cbi8qIGtleV9sZW5ndGggaXMgaXRzIGxlbmd0aCAqL1xuLyogc2xpZ2h0IGNoYW5nZSBmb3IgQysrLCAyMDA0LzIvMjYgKi9cbk1lcnNlbm5lVHdpc3Rlci5wcm90b3R5cGUuaW5pdF9ieV9hcnJheSA9IGZ1bmN0aW9uKGluaXRfa2V5LCBrZXlfbGVuZ3RoKSB7XG5cdHZhciBpLCBqLCBrO1xuXHR0aGlzLmluaXRfc2VlZCgxOTY1MDIxOCk7XG5cdGk9MTsgaj0wO1xuXHRrID0gKHRoaXMuTj5rZXlfbGVuZ3RoID8gdGhpcy5OIDoga2V5X2xlbmd0aCk7XG5cdGZvciAoOyBrOyBrLS0pIHtcblx0XHR2YXIgcyA9IHRoaXMubXRbaS0xXSBeICh0aGlzLm10W2ktMV0gPj4+IDMwKVxuXHRcdHRoaXMubXRbaV0gPSAodGhpcy5tdFtpXSBeICgoKCgocyAmIDB4ZmZmZjAwMDApID4+PiAxNikgKiAxNjY0NTI1KSA8PCAxNikgKyAoKHMgJiAweDAwMDBmZmZmKSAqIDE2NjQ1MjUpKSlcblx0XHQrIGluaXRfa2V5W2pdICsgajsgLyogbm9uIGxpbmVhciAqL1xuXHRcdHRoaXMubXRbaV0gPj4+PSAwOyAvKiBmb3IgV09SRFNJWkUgPiAzMiBtYWNoaW5lcyAqL1xuXHRcdGkrKzsgaisrO1xuXHRcdGlmIChpPj10aGlzLk4pIHsgdGhpcy5tdFswXSA9IHRoaXMubXRbdGhpcy5OLTFdOyBpPTE7IH1cblx0XHRpZiAoaj49a2V5X2xlbmd0aCkgaj0wO1xuXHR9XG5cdGZvciAoaz10aGlzLk4tMTsgazsgay0tKSB7XG5cdFx0dmFyIHMgPSB0aGlzLm10W2ktMV0gXiAodGhpcy5tdFtpLTFdID4+PiAzMCk7XG5cdFx0dGhpcy5tdFtpXSA9ICh0aGlzLm10W2ldIF4gKCgoKChzICYgMHhmZmZmMDAwMCkgPj4+IDE2KSAqIDE1NjYwODM5NDEpIDw8IDE2KSArIChzICYgMHgwMDAwZmZmZikgKiAxNTY2MDgzOTQxKSlcblx0XHQtIGk7IC8qIG5vbiBsaW5lYXIgKi9cblx0XHR0aGlzLm10W2ldID4+Pj0gMDsgLyogZm9yIFdPUkRTSVpFID4gMzIgbWFjaGluZXMgKi9cblx0XHRpKys7XG5cdFx0aWYgKGk+PXRoaXMuTikgeyB0aGlzLm10WzBdID0gdGhpcy5tdFt0aGlzLk4tMV07IGk9MTsgfVxuXHR9XG5cblx0dGhpcy5tdFswXSA9IDB4ODAwMDAwMDA7IC8qIE1TQiBpcyAxOyBhc3N1cmluZyBub24temVybyBpbml0aWFsIGFycmF5ICovXG59XG5cbi8qIGdlbmVyYXRlcyBhIHJhbmRvbSBudW1iZXIgb24gWzAsMHhmZmZmZmZmZl0taW50ZXJ2YWwgKi9cbi8qIG9yaWdpbiBuYW1lIGdlbnJhbmRfaW50MzIgKi9cbk1lcnNlbm5lVHdpc3Rlci5wcm90b3R5cGUucmFuZG9tX2ludCA9IGZ1bmN0aW9uKCkge1xuXHR2YXIgeTtcblx0dmFyIG1hZzAxID0gbmV3IEFycmF5KDB4MCwgdGhpcy5NQVRSSVhfQSk7XG5cdC8qIG1hZzAxW3hdID0geCAqIE1BVFJJWF9BICBmb3IgeD0wLDEgKi9cblxuXHRpZiAodGhpcy5tdGkgPj0gdGhpcy5OKSB7IC8qIGdlbmVyYXRlIE4gd29yZHMgYXQgb25lIHRpbWUgKi9cblx0XHR2YXIga2s7XG5cblx0XHRpZiAodGhpcy5tdGkgPT0gdGhpcy5OKzEpICAvKiBpZiBpbml0X3NlZWQoKSBoYXMgbm90IGJlZW4gY2FsbGVkLCAqL1xuXHRcdFx0dGhpcy5pbml0X3NlZWQoNTQ4OSk7ICAvKiBhIGRlZmF1bHQgaW5pdGlhbCBzZWVkIGlzIHVzZWQgKi9cblxuXHRcdGZvciAoa2s9MDtrazx0aGlzLk4tdGhpcy5NO2trKyspIHtcblx0XHRcdHkgPSAodGhpcy5tdFtra10mdGhpcy5VUFBFUl9NQVNLKXwodGhpcy5tdFtraysxXSZ0aGlzLkxPV0VSX01BU0spO1xuXHRcdFx0dGhpcy5tdFtra10gPSB0aGlzLm10W2trK3RoaXMuTV0gXiAoeSA+Pj4gMSkgXiBtYWcwMVt5ICYgMHgxXTtcblx0XHR9XG5cdFx0Zm9yICg7a2s8dGhpcy5OLTE7a2srKykge1xuXHRcdFx0eSA9ICh0aGlzLm10W2trXSZ0aGlzLlVQUEVSX01BU0spfCh0aGlzLm10W2trKzFdJnRoaXMuTE9XRVJfTUFTSyk7XG5cdFx0XHR0aGlzLm10W2trXSA9IHRoaXMubXRba2srKHRoaXMuTS10aGlzLk4pXSBeICh5ID4+PiAxKSBeIG1hZzAxW3kgJiAweDFdO1xuXHRcdH1cblx0XHR5ID0gKHRoaXMubXRbdGhpcy5OLTFdJnRoaXMuVVBQRVJfTUFTSyl8KHRoaXMubXRbMF0mdGhpcy5MT1dFUl9NQVNLKTtcblx0XHR0aGlzLm10W3RoaXMuTi0xXSA9IHRoaXMubXRbdGhpcy5NLTFdIF4gKHkgPj4+IDEpIF4gbWFnMDFbeSAmIDB4MV07XG5cblx0XHR0aGlzLm10aSA9IDA7XG5cdH1cblxuXHR5ID0gdGhpcy5tdFt0aGlzLm10aSsrXTtcblxuXHQvKiBUZW1wZXJpbmcgKi9cblx0eSBePSAoeSA+Pj4gMTEpO1xuXHR5IF49ICh5IDw8IDcpICYgMHg5ZDJjNTY4MDtcblx0eSBePSAoeSA8PCAxNSkgJiAweGVmYzYwMDAwO1xuXHR5IF49ICh5ID4+PiAxOCk7XG5cblx0cmV0dXJuIHkgPj4+IDA7XG59XG5cbi8qIGdlbmVyYXRlcyBhIHJhbmRvbSBudW1iZXIgb24gWzAsMHg3ZmZmZmZmZl0taW50ZXJ2YWwgKi9cbi8qIG9yaWdpbiBuYW1lIGdlbnJhbmRfaW50MzEgKi9cbk1lcnNlbm5lVHdpc3Rlci5wcm90b3R5cGUucmFuZG9tX2ludDMxID0gZnVuY3Rpb24oKSB7XG5cdHJldHVybiAodGhpcy5yYW5kb21faW50KCk+Pj4xKTtcbn1cblxuLyogZ2VuZXJhdGVzIGEgcmFuZG9tIG51bWJlciBvbiBbMCwxXS1yZWFsLWludGVydmFsICovXG4vKiBvcmlnaW4gbmFtZSBnZW5yYW5kX3JlYWwxICovXG5NZXJzZW5uZVR3aXN0ZXIucHJvdG90eXBlLnJhbmRvbV9pbmNsID0gZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzLnJhbmRvbV9pbnQoKSooMS4wLzQyOTQ5NjcyOTUuMCk7XG5cdC8qIGRpdmlkZWQgYnkgMl4zMi0xICovXG59XG5cbi8qIGdlbmVyYXRlcyBhIHJhbmRvbSBudW1iZXIgb24gWzAsMSktcmVhbC1pbnRlcnZhbCAqL1xuTWVyc2VubmVUd2lzdGVyLnByb3RvdHlwZS5yYW5kb20gPSBmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXMucmFuZG9tX2ludCgpKigxLjAvNDI5NDk2NzI5Ni4wKTtcblx0LyogZGl2aWRlZCBieSAyXjMyICovXG59XG5cbi8qIGdlbmVyYXRlcyBhIHJhbmRvbSBudW1iZXIgb24gKDAsMSktcmVhbC1pbnRlcnZhbCAqL1xuLyogb3JpZ2luIG5hbWUgZ2VucmFuZF9yZWFsMyAqL1xuTWVyc2VubmVUd2lzdGVyLnByb3RvdHlwZS5yYW5kb21fZXhjbCA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gKHRoaXMucmFuZG9tX2ludCgpICsgMC41KSooMS4wLzQyOTQ5NjcyOTYuMCk7XG5cdC8qIGRpdmlkZWQgYnkgMl4zMiAqL1xufVxuXG4vKiBnZW5lcmF0ZXMgYSByYW5kb20gbnVtYmVyIG9uIFswLDEpIHdpdGggNTMtYml0IHJlc29sdXRpb24qL1xuLyogb3JpZ2luIG5hbWUgZ2VucmFuZF9yZXM1MyAqL1xuTWVyc2VubmVUd2lzdGVyLnByb3RvdHlwZS5yYW5kb21fbG9uZyA9IGZ1bmN0aW9uKCkge1xuXHR2YXIgYT10aGlzLnJhbmRvbV9pbnQoKT4+PjUsIGI9dGhpcy5yYW5kb21faW50KCk+Pj42O1xuXHRyZXR1cm4oYSo2NzEwODg2NC4wK2IpKigxLjAvOTAwNzE5OTI1NDc0MDk5Mi4wKTtcbn1cblxuLyogVGhlc2UgcmVhbCB2ZXJzaW9ucyBhcmUgZHVlIHRvIElzYWt1IFdhZGEsIDIwMDIvMDEvMDkgYWRkZWQgKi9cblxubW9kdWxlLmV4cG9ydHMgPSBNZXJzZW5uZVR3aXN0ZXI7XG4iLCIvKipcbiAqIENvbXBpbGVzIGEgcXVlcnlzdHJpbmdcbiAqIFJldHVybnMgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmV4cG9ydHMuZW5jb2RlID0gZnVuY3Rpb24gKG9iaikge1xuICB2YXIgc3RyID0gJyc7XG5cbiAgZm9yICh2YXIgaSBpbiBvYmopIHtcbiAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICBpZiAoc3RyLmxlbmd0aCkgc3RyICs9ICcmJztcbiAgICAgIHN0ciArPSBlbmNvZGVVUklDb21wb25lbnQoaSkgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQob2JqW2ldKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RyO1xufTtcblxuLyoqXG4gKiBQYXJzZXMgYSBzaW1wbGUgcXVlcnlzdHJpbmcgaW50byBhbiBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gcXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmV4cG9ydHMuZGVjb2RlID0gZnVuY3Rpb24ocXMpe1xuICB2YXIgcXJ5ID0ge307XG4gIHZhciBwYWlycyA9IHFzLnNwbGl0KCcmJyk7XG4gIGZvciAodmFyIGkgPSAwLCBsID0gcGFpcnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgdmFyIHBhaXIgPSBwYWlyc1tpXS5zcGxpdCgnPScpO1xuICAgIHFyeVtkZWNvZGVVUklDb21wb25lbnQocGFpclswXSldID0gZGVjb2RlVVJJQ29tcG9uZW50KHBhaXJbMV0pO1xuICB9XG4gIHJldHVybiBxcnk7XG59O1xuIiwiLyoqXG4gKiBQYXJzZXMgYW4gVVJJXG4gKlxuICogQGF1dGhvciBTdGV2ZW4gTGV2aXRoYW4gPHN0ZXZlbmxldml0aGFuLmNvbT4gKE1JVCBsaWNlbnNlKVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxudmFyIHJlID0gL14oPzooPyFbXjpAXSs6W146QFxcL10qQCkoaHR0cHxodHRwc3x3c3x3c3MpOlxcL1xcLyk/KCg/OigoW146QF0qKSg/OjooW146QF0qKSk/KT9AKT8oKD86W2EtZjAtOV17MCw0fTopezIsN31bYS1mMC05XXswLDR9fFteOlxcLz8jXSopKD86OihcXGQqKSk/KSgoKFxcLyg/OltePyNdKD8hW14/I1xcL10qXFwuW14/I1xcLy5dKyg/Ols/I118JCkpKSpcXC8/KT8oW14/I1xcL10qKSkoPzpcXD8oW14jXSopKT8oPzojKC4qKSk/KS87XG5cbnZhciBwYXJ0cyA9IFtcbiAgICAnc291cmNlJywgJ3Byb3RvY29sJywgJ2F1dGhvcml0eScsICd1c2VySW5mbycsICd1c2VyJywgJ3Bhc3N3b3JkJywgJ2hvc3QnLCAncG9ydCcsICdyZWxhdGl2ZScsICdwYXRoJywgJ2RpcmVjdG9yeScsICdmaWxlJywgJ3F1ZXJ5JywgJ2FuY2hvcidcbl07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcGFyc2V1cmkoc3RyKSB7XG4gICAgdmFyIHNyYyA9IHN0cixcbiAgICAgICAgYiA9IHN0ci5pbmRleE9mKCdbJyksXG4gICAgICAgIGUgPSBzdHIuaW5kZXhPZignXScpO1xuXG4gICAgaWYgKGIgIT0gLTEgJiYgZSAhPSAtMSkge1xuICAgICAgICBzdHIgPSBzdHIuc3Vic3RyaW5nKDAsIGIpICsgc3RyLnN1YnN0cmluZyhiLCBlKS5yZXBsYWNlKC86L2csICc7JykgKyBzdHIuc3Vic3RyaW5nKGUsIHN0ci5sZW5ndGgpO1xuICAgIH1cblxuICAgIHZhciBtID0gcmUuZXhlYyhzdHIgfHwgJycpLFxuICAgICAgICB1cmkgPSB7fSxcbiAgICAgICAgaSA9IDE0O1xuXG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgICB1cmlbcGFydHNbaV1dID0gbVtpXSB8fCAnJztcbiAgICB9XG5cbiAgICBpZiAoYiAhPSAtMSAmJiBlICE9IC0xKSB7XG4gICAgICAgIHVyaS5zb3VyY2UgPSBzcmM7XG4gICAgICAgIHVyaS5ob3N0ID0gdXJpLmhvc3Quc3Vic3RyaW5nKDEsIHVyaS5ob3N0Lmxlbmd0aCAtIDEpLnJlcGxhY2UoLzsvZywgJzonKTtcbiAgICAgICAgdXJpLmF1dGhvcml0eSA9IHVyaS5hdXRob3JpdHkucmVwbGFjZSgnWycsICcnKS5yZXBsYWNlKCddJywgJycpLnJlcGxhY2UoLzsvZywgJzonKTtcbiAgICAgICAgdXJpLmlwdjZ1cmkgPSB0cnVlO1xuICAgIH1cblxuICAgIHVyaS5wYXRoTmFtZXMgPSBwYXRoTmFtZXModXJpLCB1cmlbJ3BhdGgnXSk7XG4gICAgdXJpLnF1ZXJ5S2V5ID0gcXVlcnlLZXkodXJpLCB1cmlbJ3F1ZXJ5J10pO1xuXG4gICAgcmV0dXJuIHVyaTtcbn07XG5cbmZ1bmN0aW9uIHBhdGhOYW1lcyhvYmosIHBhdGgpIHtcbiAgICB2YXIgcmVneCA9IC9cXC97Miw5fS9nLFxuICAgICAgICBuYW1lcyA9IHBhdGgucmVwbGFjZShyZWd4LCBcIi9cIikuc3BsaXQoXCIvXCIpO1xuXG4gICAgaWYgKHBhdGguc3Vic3RyKDAsIDEpID09ICcvJyB8fCBwYXRoLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBuYW1lcy5zcGxpY2UoMCwgMSk7XG4gICAgfVxuICAgIGlmIChwYXRoLnN1YnN0cihwYXRoLmxlbmd0aCAtIDEsIDEpID09ICcvJykge1xuICAgICAgICBuYW1lcy5zcGxpY2UobmFtZXMubGVuZ3RoIC0gMSwgMSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5hbWVzO1xufVxuXG5mdW5jdGlvbiBxdWVyeUtleSh1cmksIHF1ZXJ5KSB7XG4gICAgdmFyIGRhdGEgPSB7fTtcblxuICAgIHF1ZXJ5LnJlcGxhY2UoLyg/Ol58JikoW14mPV0qKT0/KFteJl0qKS9nLCBmdW5jdGlvbiAoJDAsICQxLCAkMikge1xuICAgICAgICBpZiAoJDEpIHtcbiAgICAgICAgICAgIGRhdGFbJDFdID0gJDI7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBkYXRhO1xufVxuIiwiY29uc3QgQVJHX0xFTkdUSCA9IHtcbiAgYTogNyxcbiAgYzogNixcbiAgaDogMSxcbiAgbDogMixcbiAgbTogMixcbiAgcTogNCxcbiAgczogNCxcbiAgdDogMixcbiAgdjogMSxcbiAgejogMCxcbn07XG5cbmNvbnN0IFNFR01FTlRfUEFUVEVSTiA9IC8oW2FzdHZ6cW1obGNdKShbXmFzdHZ6cW1obGNdKikvZ2k7XG5cbmNvbnN0IE5VTUJFUiA9IC8tP1swLTldKlxcLj9bMC05XSsoPzplWy0rXT9cXGQrKT8vZ2k7XG5cbmZ1bmN0aW9uIHBhcnNlVmFsdWVzKGFyZ3MpIHtcbiAgY29uc3QgbnVtYmVycyA9IGFyZ3MubWF0Y2goTlVNQkVSKTtcbiAgcmV0dXJuIG51bWJlcnMgPyBudW1iZXJzLm1hcChOdW1iZXIpIDogW107XG59XG5cbi8qKlxuICogcGFyc2UgYW4gc3ZnIHBhdGggZGF0YSBzdHJpbmcuIEdlbmVyYXRlcyBhbiBBcnJheVxuICogb2YgY29tbWFuZHMgd2hlcmUgZWFjaCBjb21tYW5kIGlzIGFuIEFycmF5IG9mIHRoZVxuICogZm9ybSBgW2NvbW1hbmQsIGFyZzEsIGFyZzIsIC4uLl1gXG4gKlxuICogaHR0cHM6Ly93d3cudzMub3JnL1RSL1NWRy9wYXRocy5odG1sI1BhdGhEYXRhR2VuZXJhbEluZm9ybWF0aW9uXG4gKiBAaWdub3JlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHBhdGhcbiAqIEByZXR1cm5zIHthcnJheX1cbiAqL1xuZnVuY3Rpb24gcGFyc2UocGF0aCkge1xuICBjb25zdCBkYXRhID0gW107XG4gIGNvbnN0IHAgPSBTdHJpbmcocGF0aCkudHJpbSgpO1xuXG4gIC8vIEEgcGF0aCBkYXRhIHNlZ21lbnQgKGlmIHRoZXJlIGlzIG9uZSkgbXVzdCBiZWdpbiB3aXRoIGEgXCJtb3ZldG9cIiBjb21tYW5kXG4gIGlmIChwWzBdICE9PSAnTScgJiYgcFswXSAhPT0gJ20nKSB7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBwLnJlcGxhY2UoU0VHTUVOVF9QQVRURVJOLCAoXywgY29tbWFuZCwgYXJncykgPT4ge1xuICAgIGxldCB0eXBlID0gY29tbWFuZC50b0xvd2VyQ2FzZSgpO1xuICAgIGxldCB0aGVBcmdzID0gcGFyc2VWYWx1ZXMoYXJncyk7XG4gICAgbGV0IHRoZUNvbW1hbmQgPSBjb21tYW5kO1xuICAgIC8vIG92ZXJsb2FkZWQgbW92ZVRvXG4gICAgaWYgKHR5cGUgPT09ICdtJyAmJiB0aGVBcmdzLmxlbmd0aCA+IDIpIHtcbiAgICAgIGRhdGEucHVzaChbdGhlQ29tbWFuZF0uY29uY2F0KHRoZUFyZ3Muc3BsaWNlKDAsIDIpKSk7XG4gICAgICB0eXBlID0gJ2wnO1xuICAgICAgdGhlQ29tbWFuZCA9IHRoZUNvbW1hbmQgPT09ICdtJyA/ICdsJyA6ICdMJztcbiAgICB9XG5cbiAgICAvLyBJZ25vcmUgaW52YWxpZCBjb21tYW5kc1xuICAgIGlmICh0aGVBcmdzLmxlbmd0aCA8IEFSR19MRU5HVEhbdHlwZV0pIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICBkYXRhLnB1c2goW3RoZUNvbW1hbmRdLmNvbmNhdCh0aGVBcmdzLnNwbGljZSgwLCBBUkdfTEVOR1RIW3R5cGVdKSkpO1xuXG4gICAgLy8gVGhlIGNvbW1hbmQgbGV0dGVyIGNhbiBiZSBlbGltaW5hdGVkIG9uIHN1YnNlcXVlbnQgY29tbWFuZHMgaWYgdGhlXG4gICAgLy8gc2FtZSBjb21tYW5kIGlzIHVzZWQgbXVsdGlwbGUgdGltZXMgaW4gYSByb3cgKGUuZy4sIHlvdSBjYW4gZHJvcCB0aGVcbiAgICAvLyBzZWNvbmQgXCJMXCIgaW4gXCJNIDEwMCAyMDAgTCAyMDAgMTAwIEwgLTEwMCAtMjAwXCIgYW5kIHVzZVxuICAgIC8vIFwiTSAxMDAgMjAwIEwgMjAwIDEwMCAtMTAwIC0yMDBcIiBpbnN0ZWFkKS5cbiAgICB3aGlsZSAoXG4gICAgICB0aGVBcmdzLmxlbmd0aCA+PSBBUkdfTEVOR1RIW3R5cGVdICYmXG4gICAgICB0aGVBcmdzLmxlbmd0aCAmJlxuICAgICAgQVJHX0xFTkdUSFt0eXBlXVxuICAgICkge1xuICAgICAgZGF0YS5wdXNoKFt0aGVDb21tYW5kXS5jb25jYXQodGhlQXJncy5zcGxpY2UoMCwgQVJHX0xFTkdUSFt0eXBlXSkpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gJyc7XG4gIH0pO1xuICByZXR1cm4gZGF0YTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBwYXJzZTtcbiIsImNvbnN0IHBhcnNlUGF0aCA9IHJlcXVpcmUoJy4vcGFyc2UtcGF0aCcpO1xuXG4vKipcbiAqIFdvcmsgYXJvdW5kIGZvciBodHRwczovL2RldmVsb3Blci5taWNyb3NvZnQuY29tL2VuLXVzL21pY3Jvc29mdC1lZGdlL3BsYXRmb3JtL2lzc3Vlcy84NDM4ODg0L1xuICogQGlnbm9yZVxuICovXG5mdW5jdGlvbiBzdXBwb3J0c1N2Z1BhdGhBcmd1bWVudCh3aW5kb3cpIHtcbiAgY29uc3QgY2FudmFzID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICBjb25zdCBnID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gIGNvbnN0IHAgPSBuZXcgd2luZG93LlBhdGgyRCgnTTAgMCBMMSAxJyk7XG4gIGcuc3Ryb2tlU3R5bGUgPSAncmVkJztcbiAgZy5saW5lV2lkdGggPSAxO1xuICBnLnN0cm9rZShwKTtcbiAgY29uc3QgaW1nRGF0YSA9IGcuZ2V0SW1hZ2VEYXRhKDAsIDAsIDEsIDEpO1xuICByZXR1cm4gaW1nRGF0YS5kYXRhWzBdID09PSAyNTU7IC8vIENoZWNrIGlmIHBpeGVsIGlzIHJlZFxufVxuXG5mdW5jdGlvbiByb3RhdGVQb2ludChwb2ludCwgYW5nbGUpIHtcbiAgY29uc3QgbnggPSBwb2ludC54ICogTWF0aC5jb3MoYW5nbGUpIC0gcG9pbnQueSAqIE1hdGguc2luKGFuZ2xlKTtcbiAgY29uc3QgbnkgPSBwb2ludC55ICogTWF0aC5jb3MoYW5nbGUpICsgcG9pbnQueCAqIE1hdGguc2luKGFuZ2xlKTtcbiAgcG9pbnQueCA9IG54O1xuICBwb2ludC55ID0gbnk7XG59XG5cbmZ1bmN0aW9uIHRyYW5zbGF0ZVBvaW50KHBvaW50LCBkeCwgZHkpIHtcbiAgcG9pbnQueCArPSBkeDtcbiAgcG9pbnQueSArPSBkeTtcbn1cblxuZnVuY3Rpb24gc2NhbGVQb2ludChwb2ludCwgcykge1xuICBwb2ludC54ICo9IHM7XG4gIHBvaW50LnkgKj0gcztcbn1cblxuZnVuY3Rpb24gcG9seUZpbGxQYXRoMkQod2luZG93KSB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCAhd2luZG93LkNhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAod2luZG93LlBhdGgyRCAmJiBzdXBwb3J0c1N2Z1BhdGhBcmd1bWVudCh3aW5kb3cpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENyYXRlcyBhIFBhdGgyRCBwb2x5ZmlsbCBvYmplY3RcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBpZ25vcmVcbiAgICogQHBhcmFtIHtTdHJpbmd9IHBhdGhcbiAgICovXG4gIGNsYXNzIFBhdGgyRCB7XG4gICAgY29uc3RydWN0b3IocGF0aCkge1xuICAgICAgdGhpcy5zZWdtZW50cyA9IFtdO1xuICAgICAgaWYgKHBhdGggJiYgcGF0aCBpbnN0YW5jZW9mIFBhdGgyRCkge1xuICAgICAgICB0aGlzLnNlZ21lbnRzLnB1c2goLi4ucGF0aC5zZWdtZW50cyk7XG4gICAgICB9IGVsc2UgaWYgKHBhdGgpIHtcbiAgICAgICAgdGhpcy5zZWdtZW50cyA9IHBhcnNlUGF0aChwYXRoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRQYXRoKHBhdGgpIHtcbiAgICAgIGlmIChwYXRoICYmIHBhdGggaW5zdGFuY2VvZiBQYXRoMkQpIHtcbiAgICAgICAgdGhpcy5zZWdtZW50cy5wdXNoKC4uLnBhdGguc2VnbWVudHMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1vdmVUbyh4LCB5KSB7XG4gICAgICB0aGlzLnNlZ21lbnRzLnB1c2goWydNJywgeCwgeV0pO1xuICAgIH1cblxuICAgIGxpbmVUbyh4LCB5KSB7XG4gICAgICB0aGlzLnNlZ21lbnRzLnB1c2goWydMJywgeCwgeV0pO1xuICAgIH1cblxuICAgIGFyYyh4LCB5LCByLCBzdGFydCwgZW5kLCBjY3cpIHtcbiAgICAgIHRoaXMuc2VnbWVudHMucHVzaChbJ0FDJywgeCwgeSwgciwgc3RhcnQsIGVuZCwgISFjY3ddKTtcbiAgICB9XG5cbiAgICBhcmNUbyh4MSwgeTEsIHgyLCB5Miwgcikge1xuICAgICAgdGhpcy5zZWdtZW50cy5wdXNoKFsnQVQnLCB4MSwgeTEsIHgyLCB5Miwgcl0pO1xuICAgIH1cblxuICAgIGVsbGlwc2UoeCwgeSwgcngsIHJ5LCBhbmdsZSwgc3RhcnQsIGVuZCwgY2N3KSB7XG4gICAgICB0aGlzLnNlZ21lbnRzLnB1c2goWydFJywgeCwgeSwgcngsIHJ5LCBhbmdsZSwgc3RhcnQsIGVuZCwgISFjY3ddKTtcbiAgICB9XG5cbiAgICBjbG9zZVBhdGgoKSB7XG4gICAgICB0aGlzLnNlZ21lbnRzLnB1c2goWydaJ10pO1xuICAgIH1cblxuICAgIGJlemllckN1cnZlVG8oY3AxeCwgY3AxeSwgY3AyeCwgY3AyeSwgeCwgeSkge1xuICAgICAgdGhpcy5zZWdtZW50cy5wdXNoKFsnQycsIGNwMXgsIGNwMXksIGNwMngsIGNwMnksIHgsIHldKTtcbiAgICB9XG5cbiAgICBxdWFkcmF0aWNDdXJ2ZVRvKGNweCwgY3B5LCB4LCB5KSB7XG4gICAgICB0aGlzLnNlZ21lbnRzLnB1c2goWydRJywgY3B4LCBjcHksIHgsIHldKTtcbiAgICB9XG5cbiAgICByZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgIHRoaXMuc2VnbWVudHMucHVzaChbJ1InLCB4LCB5LCB3aWR0aCwgaGVpZ2h0XSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gYnVpbGRQYXRoKGNhbnZhcywgc2VnbWVudHMpIHtcbiAgICBsZXQgZW5kQW5nbGU7XG4gICAgbGV0IHN0YXJ0QW5nbGU7XG4gICAgbGV0IGxhcmdlQXJjRmxhZztcbiAgICBsZXQgc3dlZXBGbGFnO1xuICAgIGxldCBlbmRQb2ludDtcbiAgICBsZXQgbWlkUG9pbnQ7XG4gICAgbGV0IGFuZ2xlO1xuICAgIGxldCBsYW1iZGE7XG4gICAgbGV0IHQxO1xuICAgIGxldCB0MjtcbiAgICBsZXQgeDtcbiAgICBsZXQgeDE7XG4gICAgbGV0IHk7XG4gICAgbGV0IHkxO1xuICAgIGxldCByO1xuICAgIGxldCByeDtcbiAgICBsZXQgcnk7XG4gICAgbGV0IHc7XG4gICAgbGV0IGg7XG4gICAgbGV0IHBhdGhUeXBlO1xuICAgIGxldCBjZW50ZXJQb2ludDtcbiAgICBsZXQgY3B4O1xuICAgIGxldCBjcHk7XG4gICAgbGV0IHFjcHg7XG4gICAgbGV0IHFjcHk7XG4gICAgbGV0IGNjdztcbiAgICBsZXQgc3RhcnRQb2ludCA9IHsgeDogMCwgeTogMCB9O1xuICAgIGNvbnN0IGN1cnJlbnRQb2ludCA9IHsgeDogMCwgeTogMCB9O1xuXG4gICAgY2FudmFzLmJlZ2luUGF0aCgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VnbWVudHMubGVuZ3RoOyArK2kpIHtcbiAgICAgIGNvbnN0IHMgPSBzZWdtZW50c1tpXTtcbiAgICAgIHBhdGhUeXBlID0gc1swXTtcblxuICAgICAgLy8gUmVzZXQgY29udHJvbCBwb2ludCBpZiBjb21tYW5kIGlzIG5vdCBjdWJpY1xuICAgICAgaWYgKFxuICAgICAgICBwYXRoVHlwZSAhPT0gJ1MnICYmXG4gICAgICAgIHBhdGhUeXBlICE9PSAncycgJiZcbiAgICAgICAgcGF0aFR5cGUgIT09ICdDJyAmJlxuICAgICAgICBwYXRoVHlwZSAhPT0gJ2MnXG4gICAgICApIHtcbiAgICAgICAgY3B4ID0gbnVsbDtcbiAgICAgICAgY3B5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICBwYXRoVHlwZSAhPT0gJ1QnICYmXG4gICAgICAgIHBhdGhUeXBlICE9PSAndCcgJiZcbiAgICAgICAgcGF0aFR5cGUgIT09ICdRJyAmJlxuICAgICAgICBwYXRoVHlwZSAhPT0gJ3EnXG4gICAgICApIHtcbiAgICAgICAgcWNweCA9IG51bGw7XG4gICAgICAgIHFjcHkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICBzd2l0Y2ggKHBhdGhUeXBlKSB7XG4gICAgICAgIGNhc2UgJ20nOlxuICAgICAgICBjYXNlICdNJzpcbiAgICAgICAgICBpZiAocGF0aFR5cGUgPT09ICdtJykge1xuICAgICAgICAgICAgeCArPSBzWzFdO1xuICAgICAgICAgICAgeSArPSBzWzJdO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB4ID0gc1sxXTtcbiAgICAgICAgICAgIHkgPSBzWzJdO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChwYXRoVHlwZSA9PT0gJ00nIHx8ICFzdGFydFBvaW50KSB7XG4gICAgICAgICAgICBzdGFydFBvaW50ID0geyB4LCB5IH07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY2FudmFzLm1vdmVUbyh4LCB5KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbCc6XG4gICAgICAgICAgeCArPSBzWzFdO1xuICAgICAgICAgIHkgKz0gc1syXTtcbiAgICAgICAgICBjYW52YXMubGluZVRvKHgsIHkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdMJzpcbiAgICAgICAgICB4ID0gc1sxXTtcbiAgICAgICAgICB5ID0gc1syXTtcbiAgICAgICAgICBjYW52YXMubGluZVRvKHgsIHkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdIJzpcbiAgICAgICAgICB4ID0gc1sxXTtcbiAgICAgICAgICBjYW52YXMubGluZVRvKHgsIHkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdoJzpcbiAgICAgICAgICB4ICs9IHNbMV07XG4gICAgICAgICAgY2FudmFzLmxpbmVUbyh4LCB5KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnVic6XG4gICAgICAgICAgeSA9IHNbMV07XG4gICAgICAgICAgY2FudmFzLmxpbmVUbyh4LCB5KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAndic6XG4gICAgICAgICAgeSArPSBzWzFdO1xuICAgICAgICAgIGNhbnZhcy5saW5lVG8oeCwgeSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2EnOlxuICAgICAgICBjYXNlICdBJzpcbiAgICAgICAgICBpZiAocGF0aFR5cGUgPT09ICdhJykge1xuICAgICAgICAgICAgeCArPSBzWzZdO1xuICAgICAgICAgICAgeSArPSBzWzddO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB4ID0gc1s2XTtcbiAgICAgICAgICAgIHkgPSBzWzddO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJ4ID0gc1sxXTsgLy8gcnhcbiAgICAgICAgICByeSA9IHNbMl07IC8vIHJ5XG4gICAgICAgICAgYW5nbGUgPSAoc1szXSAqIE1hdGguUEkpIC8gMTgwO1xuICAgICAgICAgIGxhcmdlQXJjRmxhZyA9ICEhc1s0XTtcbiAgICAgICAgICBzd2VlcEZsYWcgPSAhIXNbNV07XG4gICAgICAgICAgZW5kUG9pbnQgPSB7IHgsIHkgfTtcblxuICAgICAgICAgIC8vIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9TVkcvaW1wbG5vdGUuaHRtbCNBcmNJbXBsZW1lbnRhdGlvbk5vdGVzXG5cbiAgICAgICAgICBtaWRQb2ludCA9IHtcbiAgICAgICAgICAgIHg6IChjdXJyZW50UG9pbnQueCAtIGVuZFBvaW50LngpIC8gMixcbiAgICAgICAgICAgIHk6IChjdXJyZW50UG9pbnQueSAtIGVuZFBvaW50LnkpIC8gMixcbiAgICAgICAgICB9O1xuICAgICAgICAgIHJvdGF0ZVBvaW50KG1pZFBvaW50LCAtYW5nbGUpO1xuXG4gICAgICAgICAgLy8gcmFkaXVzIGNvcnJlY3Rpb25cbiAgICAgICAgICBsYW1iZGEgPVxuICAgICAgICAgICAgKG1pZFBvaW50LnggKiBtaWRQb2ludC54KSAvIChyeCAqIHJ4KSArXG4gICAgICAgICAgICAobWlkUG9pbnQueSAqIG1pZFBvaW50LnkpIC8gKHJ5ICogcnkpO1xuICAgICAgICAgIGlmIChsYW1iZGEgPiAxKSB7XG4gICAgICAgICAgICBsYW1iZGEgPSBNYXRoLnNxcnQobGFtYmRhKTtcbiAgICAgICAgICAgIHJ4ICo9IGxhbWJkYTtcbiAgICAgICAgICAgIHJ5ICo9IGxhbWJkYTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjZW50ZXJQb2ludCA9IHtcbiAgICAgICAgICAgIHg6IChyeCAqIG1pZFBvaW50LnkpIC8gcnksXG4gICAgICAgICAgICB5OiAtKHJ5ICogbWlkUG9pbnQueCkgLyByeCxcbiAgICAgICAgICB9O1xuICAgICAgICAgIHQxID0gcnggKiByeCAqIHJ5ICogcnk7XG4gICAgICAgICAgdDIgPVxuICAgICAgICAgICAgcnggKiByeCAqIG1pZFBvaW50LnkgKiBtaWRQb2ludC55ICtcbiAgICAgICAgICAgIHJ5ICogcnkgKiBtaWRQb2ludC54ICogbWlkUG9pbnQueDtcbiAgICAgICAgICBpZiAoc3dlZXBGbGFnICE9PSBsYXJnZUFyY0ZsYWcpIHtcbiAgICAgICAgICAgIHNjYWxlUG9pbnQoY2VudGVyUG9pbnQsIE1hdGguc3FydCgodDEgLSB0MikgLyB0MikgfHwgMCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNjYWxlUG9pbnQoY2VudGVyUG9pbnQsIC1NYXRoLnNxcnQoKHQxIC0gdDIpIC8gdDIpIHx8IDApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHN0YXJ0QW5nbGUgPSBNYXRoLmF0YW4yKFxuICAgICAgICAgICAgKG1pZFBvaW50LnkgLSBjZW50ZXJQb2ludC55KSAvIHJ5LFxuICAgICAgICAgICAgKG1pZFBvaW50LnggLSBjZW50ZXJQb2ludC54KSAvIHJ4XG4gICAgICAgICAgKTtcbiAgICAgICAgICBlbmRBbmdsZSA9IE1hdGguYXRhbjIoXG4gICAgICAgICAgICAtKG1pZFBvaW50LnkgKyBjZW50ZXJQb2ludC55KSAvIHJ5LFxuICAgICAgICAgICAgLShtaWRQb2ludC54ICsgY2VudGVyUG9pbnQueCkgLyByeFxuICAgICAgICAgICk7XG5cbiAgICAgICAgICByb3RhdGVQb2ludChjZW50ZXJQb2ludCwgYW5nbGUpO1xuICAgICAgICAgIHRyYW5zbGF0ZVBvaW50KFxuICAgICAgICAgICAgY2VudGVyUG9pbnQsXG4gICAgICAgICAgICAoZW5kUG9pbnQueCArIGN1cnJlbnRQb2ludC54KSAvIDIsXG4gICAgICAgICAgICAoZW5kUG9pbnQueSArIGN1cnJlbnRQb2ludC55KSAvIDJcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgY2FudmFzLnNhdmUoKTtcbiAgICAgICAgICBjYW52YXMudHJhbnNsYXRlKGNlbnRlclBvaW50LngsIGNlbnRlclBvaW50LnkpO1xuICAgICAgICAgIGNhbnZhcy5yb3RhdGUoYW5nbGUpO1xuICAgICAgICAgIGNhbnZhcy5zY2FsZShyeCwgcnkpO1xuICAgICAgICAgIGNhbnZhcy5hcmMoMCwgMCwgMSwgc3RhcnRBbmdsZSwgZW5kQW5nbGUsICFzd2VlcEZsYWcpO1xuICAgICAgICAgIGNhbnZhcy5yZXN0b3JlKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0MnOlxuICAgICAgICAgIGNweCA9IHNbM107IC8vIExhc3QgY29udHJvbCBwb2ludFxuICAgICAgICAgIGNweSA9IHNbNF07XG4gICAgICAgICAgeCA9IHNbNV07XG4gICAgICAgICAgeSA9IHNbNl07XG4gICAgICAgICAgY2FudmFzLmJlemllckN1cnZlVG8oc1sxXSwgc1syXSwgY3B4LCBjcHksIHgsIHkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdjJzpcbiAgICAgICAgICBjYW52YXMuYmV6aWVyQ3VydmVUbyhcbiAgICAgICAgICAgIHNbMV0gKyB4LFxuICAgICAgICAgICAgc1syXSArIHksXG4gICAgICAgICAgICBzWzNdICsgeCxcbiAgICAgICAgICAgIHNbNF0gKyB5LFxuICAgICAgICAgICAgc1s1XSArIHgsXG4gICAgICAgICAgICBzWzZdICsgeVxuICAgICAgICAgICk7XG4gICAgICAgICAgY3B4ID0gc1szXSArIHg7IC8vIExhc3QgY29udHJvbCBwb2ludFxuICAgICAgICAgIGNweSA9IHNbNF0gKyB5O1xuICAgICAgICAgIHggKz0gc1s1XTtcbiAgICAgICAgICB5ICs9IHNbNl07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ1MnOlxuICAgICAgICAgIGlmIChjcHggPT09IG51bGwgfHwgY3B4ID09PSBudWxsKSB7XG4gICAgICAgICAgICBjcHggPSB4O1xuICAgICAgICAgICAgY3B5ID0geTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjYW52YXMuYmV6aWVyQ3VydmVUbyhcbiAgICAgICAgICAgIDIgKiB4IC0gY3B4LFxuICAgICAgICAgICAgMiAqIHkgLSBjcHksXG4gICAgICAgICAgICBzWzFdLFxuICAgICAgICAgICAgc1syXSxcbiAgICAgICAgICAgIHNbM10sXG4gICAgICAgICAgICBzWzRdXG4gICAgICAgICAgKTtcbiAgICAgICAgICBjcHggPSBzWzFdOyAvLyBsYXN0IGNvbnRyb2wgcG9pbnRcbiAgICAgICAgICBjcHkgPSBzWzJdO1xuICAgICAgICAgIHggPSBzWzNdO1xuICAgICAgICAgIHkgPSBzWzRdO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdzJzpcbiAgICAgICAgICBpZiAoY3B4ID09PSBudWxsIHx8IGNweCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgY3B4ID0geDtcbiAgICAgICAgICAgIGNweSA9IHk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY2FudmFzLmJlemllckN1cnZlVG8oXG4gICAgICAgICAgICAyICogeCAtIGNweCxcbiAgICAgICAgICAgIDIgKiB5IC0gY3B5LFxuICAgICAgICAgICAgc1sxXSArIHgsXG4gICAgICAgICAgICBzWzJdICsgeSxcbiAgICAgICAgICAgIHNbM10gKyB4LFxuICAgICAgICAgICAgc1s0XSArIHlcbiAgICAgICAgICApO1xuICAgICAgICAgIGNweCA9IHNbMV0gKyB4OyAvLyBsYXN0IGNvbnRyb2wgcG9pbnRcbiAgICAgICAgICBjcHkgPSBzWzJdICsgeTtcbiAgICAgICAgICB4ICs9IHNbM107XG4gICAgICAgICAgeSArPSBzWzRdO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdRJzpcbiAgICAgICAgICBxY3B4ID0gc1sxXTsgLy8gbGFzdCBjb250cm9sIHBvaW50XG4gICAgICAgICAgcWNweSA9IHNbMl07XG4gICAgICAgICAgeCA9IHNbM107XG4gICAgICAgICAgeSA9IHNbNF07XG4gICAgICAgICAgY2FudmFzLnF1YWRyYXRpY0N1cnZlVG8ocWNweCwgcWNweSwgeCwgeSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3EnOlxuICAgICAgICAgIHFjcHggPSBzWzFdICsgeDsgLy8gbGFzdCBjb250cm9sIHBvaW50XG4gICAgICAgICAgcWNweSA9IHNbMl0gKyB5O1xuICAgICAgICAgIHggKz0gc1szXTtcbiAgICAgICAgICB5ICs9IHNbNF07XG4gICAgICAgICAgY2FudmFzLnF1YWRyYXRpY0N1cnZlVG8ocWNweCwgcWNweSwgeCwgeSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ1QnOlxuICAgICAgICAgIGlmIChxY3B4ID09PSBudWxsIHx8IHFjcHggPT09IG51bGwpIHtcbiAgICAgICAgICAgIHFjcHggPSB4O1xuICAgICAgICAgICAgcWNweSA9IHk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHFjcHggPSAyICogeCAtIHFjcHg7IC8vIGxhc3QgY29udHJvbCBwb2ludFxuICAgICAgICAgIHFjcHkgPSAyICogeSAtIHFjcHk7XG4gICAgICAgICAgeCA9IHNbMV07XG4gICAgICAgICAgeSA9IHNbMl07XG4gICAgICAgICAgY2FudmFzLnF1YWRyYXRpY0N1cnZlVG8ocWNweCwgcWNweSwgeCwgeSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3QnOlxuICAgICAgICAgIGlmIChxY3B4ID09PSBudWxsIHx8IHFjcHggPT09IG51bGwpIHtcbiAgICAgICAgICAgIHFjcHggPSB4O1xuICAgICAgICAgICAgcWNweSA9IHk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHFjcHggPSAyICogeCAtIHFjcHg7IC8vIGxhc3QgY29udHJvbCBwb2ludFxuICAgICAgICAgIHFjcHkgPSAyICogeSAtIHFjcHk7XG4gICAgICAgICAgeCArPSBzWzFdO1xuICAgICAgICAgIHkgKz0gc1syXTtcbiAgICAgICAgICBjYW52YXMucXVhZHJhdGljQ3VydmVUbyhxY3B4LCBxY3B5LCB4LCB5KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAneic6XG4gICAgICAgIGNhc2UgJ1onOlxuICAgICAgICAgIHggPSBzdGFydFBvaW50Lng7XG4gICAgICAgICAgeSA9IHN0YXJ0UG9pbnQueTtcbiAgICAgICAgICBzdGFydFBvaW50ID0gdW5kZWZpbmVkO1xuICAgICAgICAgIGNhbnZhcy5jbG9zZVBhdGgoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnQUMnOiAvLyBhcmNcbiAgICAgICAgICB4ID0gc1sxXTtcbiAgICAgICAgICB5ID0gc1syXTtcbiAgICAgICAgICByID0gc1szXTtcbiAgICAgICAgICBzdGFydEFuZ2xlID0gc1s0XTtcbiAgICAgICAgICBlbmRBbmdsZSA9IHNbNV07XG4gICAgICAgICAgY2N3ID0gc1s2XTtcbiAgICAgICAgICBjYW52YXMuYXJjKHgsIHksIHIsIHN0YXJ0QW5nbGUsIGVuZEFuZ2xlLCBjY3cpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdBVCc6IC8vIGFyY1RvXG4gICAgICAgICAgeDEgPSBzWzFdO1xuICAgICAgICAgIHkxID0gc1syXTtcbiAgICAgICAgICB4ID0gc1szXTtcbiAgICAgICAgICB5ID0gc1s0XTtcbiAgICAgICAgICByID0gc1s1XTtcbiAgICAgICAgICBjYW52YXMuYXJjVG8oeDEsIHkxLCB4LCB5LCByKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnRSc6IC8vIGVsbGlwc2VcbiAgICAgICAgICB4ID0gc1sxXTtcbiAgICAgICAgICB5ID0gc1syXTtcbiAgICAgICAgICByeCA9IHNbM107XG4gICAgICAgICAgcnkgPSBzWzRdO1xuICAgICAgICAgIGFuZ2xlID0gc1s1XTtcbiAgICAgICAgICBzdGFydEFuZ2xlID0gc1s2XTtcbiAgICAgICAgICBlbmRBbmdsZSA9IHNbN107XG4gICAgICAgICAgY2N3ID0gc1s4XTtcbiAgICAgICAgICBjYW52YXMuc2F2ZSgpO1xuICAgICAgICAgIGNhbnZhcy50cmFuc2xhdGUoeCwgeSk7XG4gICAgICAgICAgY2FudmFzLnJvdGF0ZShhbmdsZSk7XG4gICAgICAgICAgY2FudmFzLnNjYWxlKHJ4LCByeSk7XG4gICAgICAgICAgY2FudmFzLmFyYygwLCAwLCAxLCBzdGFydEFuZ2xlLCBlbmRBbmdsZSwgY2N3KTtcbiAgICAgICAgICBjYW52YXMucmVzdG9yZSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdSJzogLy8gcmVjdFxuICAgICAgICAgIHggPSBzWzFdO1xuICAgICAgICAgIHkgPSBzWzJdO1xuICAgICAgICAgIHcgPSBzWzNdO1xuICAgICAgICAgIGggPSBzWzRdO1xuICAgICAgICAgIHN0YXJ0UG9pbnQgPSB7IHgsIHkgfTtcbiAgICAgICAgICBjYW52YXMucmVjdCh4LCB5LCB3LCBoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKGAke3BhdGhUeXBlfSBpcyBub3QgaW1wbGVtZW50ZWRgKTsgP1xuICAgICAgfVxuXG4gICAgICBjdXJyZW50UG9pbnQueCA9IHg7XG4gICAgICBjdXJyZW50UG9pbnQueSA9IHk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgY0ZpbGwgPSB3aW5kb3cuQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELnByb3RvdHlwZS5maWxsO1xuICBjb25zdCBjU3Ryb2tlID0gd2luZG93LkNhbnZhc1JlbmRlcmluZ0NvbnRleHQyRC5wcm90b3R5cGUuc3Ryb2tlO1xuXG4gIHdpbmRvdy5DYW52YXNSZW5kZXJpbmdDb250ZXh0MkQucHJvdG90eXBlLmZpbGwgPSBmdW5jdGlvbiBmaWxsKC4uLmFyZ3MpIHtcbiAgICBsZXQgZmlsbFJ1bGUgPSAnbm9uemVybyc7XG4gICAgaWYgKFxuICAgICAgYXJncy5sZW5ndGggPT09IDAgfHxcbiAgICAgIChhcmdzLmxlbmd0aCA9PT0gMSAmJiB0eXBlb2YgYXJnc1swXSA9PT0gJ3N0cmluZycpXG4gICAgKSB7XG4gICAgICBjRmlsbC5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIHtcbiAgICAgIGZpbGxSdWxlID0gYXJnc1sxXTtcbiAgICB9XG4gICAgY29uc3QgcGF0aCA9IGFyZ3NbMF07XG4gICAgYnVpbGRQYXRoKHRoaXMsIHBhdGguc2VnbWVudHMpO1xuICAgIGNGaWxsLmNhbGwodGhpcywgZmlsbFJ1bGUpO1xuICB9O1xuXG4gIHdpbmRvdy5DYW52YXNSZW5kZXJpbmdDb250ZXh0MkQucHJvdG90eXBlLnN0cm9rZSA9IGZ1bmN0aW9uIHN0cm9rZShwYXRoKSB7XG4gICAgaWYgKCFwYXRoKSB7XG4gICAgICBjU3Ryb2tlLmNhbGwodGhpcyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGJ1aWxkUGF0aCh0aGlzLCBwYXRoLnNlZ21lbnRzKTtcbiAgICBjU3Ryb2tlLmNhbGwodGhpcyk7XG4gIH07XG5cbiAgY29uc3QgY0lzUG9pbnRJblBhdGggPVxuICAgIHdpbmRvdy5DYW52YXNSZW5kZXJpbmdDb250ZXh0MkQucHJvdG90eXBlLmlzUG9pbnRJblBhdGg7XG5cbiAgd2luZG93LkNhbnZhc1JlbmRlcmluZ0NvbnRleHQyRC5wcm90b3R5cGUuaXNQb2ludEluUGF0aCA9IGZ1bmN0aW9uIGlzUG9pbnRJblBhdGgoXG4gICAgLi4uYXJnc1xuICApIHtcbiAgICAvLyBsZXQgZmlsbFJ1bGUgPSAnbm9uemVybyc7XG4gICAgaWYgKGFyZ3NbMF0uY29uc3RydWN0b3IubmFtZSA9PT0gJ1BhdGgyRCcpIHtcbiAgICAgIC8vIGZpcnN0IGFyZ3VtZW50IGlzIGEgUGF0aDJEIG9iamVjdFxuICAgICAgY29uc3QgeCA9IGFyZ3NbMV07XG4gICAgICBjb25zdCB5ID0gYXJnc1syXTtcbiAgICAgIGNvbnN0IGZpbGxSdWxlID0gYXJnc1szXSB8fCAnbm9uemVybyc7XG4gICAgICBjb25zdCBwYXRoID0gYXJnc1swXTtcbiAgICAgIGJ1aWxkUGF0aCh0aGlzLCBwYXRoLnNlZ21lbnRzKTtcbiAgICAgIHJldHVybiBjSXNQb2ludEluUGF0aC5hcHBseSh0aGlzLCBbeCwgeSwgZmlsbFJ1bGVdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGNJc1BvaW50SW5QYXRoLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH1cbiAgfTtcblxuICB3aW5kb3cuUGF0aDJEID0gUGF0aDJEO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHBvbHlGaWxsUGF0aDJEO1xuIiwiY29uc3QgcGFyc2VQYXRoID0gcmVxdWlyZSgnLi9wYXJzZS1wYXRoJyk7XG5jb25zdCBwYXRoMmRQb2x5ZmlsbCA9IHJlcXVpcmUoJy4vcGF0aDJkLXBvbHlmaWxsJyk7XG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICBwYXRoMmRQb2x5ZmlsbCh3aW5kb3cpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcGF0aDJkUG9seWZpbGwsXG4gIHBhcnNlUGF0aCxcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuaW8gPSBleHBvcnRzLlNvY2tldCA9IGV4cG9ydHMuTWFuYWdlciA9IGV4cG9ydHMucHJvdG9jb2wgPSB2b2lkIDA7XG5jb25zdCB1cmxfMSA9IHJlcXVpcmUoXCIuL3VybFwiKTtcbmNvbnN0IG1hbmFnZXJfMSA9IHJlcXVpcmUoXCIuL21hbmFnZXJcIik7XG5jb25zdCBkZWJ1ZyA9IHJlcXVpcmUoXCJkZWJ1Z1wiKShcInNvY2tldC5pby1jbGllbnRcIik7XG4vKipcbiAqIE1vZHVsZSBleHBvcnRzLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBsb29rdXA7XG4vKipcbiAqIE1hbmFnZXJzIGNhY2hlLlxuICovXG5jb25zdCBjYWNoZSA9IChleHBvcnRzLm1hbmFnZXJzID0ge30pO1xuZnVuY3Rpb24gbG9va3VwKHVyaSwgb3B0cykge1xuICAgIGlmICh0eXBlb2YgdXJpID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIG9wdHMgPSB1cmk7XG4gICAgICAgIHVyaSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgb3B0cyA9IG9wdHMgfHwge307XG4gICAgY29uc3QgcGFyc2VkID0gdXJsXzEudXJsKHVyaSwgb3B0cy5wYXRoIHx8IFwiL3NvY2tldC5pb1wiKTtcbiAgICBjb25zdCBzb3VyY2UgPSBwYXJzZWQuc291cmNlO1xuICAgIGNvbnN0IGlkID0gcGFyc2VkLmlkO1xuICAgIGNvbnN0IHBhdGggPSBwYXJzZWQucGF0aDtcbiAgICBjb25zdCBzYW1lTmFtZXNwYWNlID0gY2FjaGVbaWRdICYmIHBhdGggaW4gY2FjaGVbaWRdW1wibnNwc1wiXTtcbiAgICBjb25zdCBuZXdDb25uZWN0aW9uID0gb3B0cy5mb3JjZU5ldyB8fFxuICAgICAgICBvcHRzW1wiZm9yY2UgbmV3IGNvbm5lY3Rpb25cIl0gfHxcbiAgICAgICAgZmFsc2UgPT09IG9wdHMubXVsdGlwbGV4IHx8XG4gICAgICAgIHNhbWVOYW1lc3BhY2U7XG4gICAgbGV0IGlvO1xuICAgIGlmIChuZXdDb25uZWN0aW9uKSB7XG4gICAgICAgIGRlYnVnKFwiaWdub3Jpbmcgc29ja2V0IGNhY2hlIGZvciAlc1wiLCBzb3VyY2UpO1xuICAgICAgICBpbyA9IG5ldyBtYW5hZ2VyXzEuTWFuYWdlcihzb3VyY2UsIG9wdHMpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKCFjYWNoZVtpZF0pIHtcbiAgICAgICAgICAgIGRlYnVnKFwibmV3IGlvIGluc3RhbmNlIGZvciAlc1wiLCBzb3VyY2UpO1xuICAgICAgICAgICAgY2FjaGVbaWRdID0gbmV3IG1hbmFnZXJfMS5NYW5hZ2VyKHNvdXJjZSwgb3B0cyk7XG4gICAgICAgIH1cbiAgICAgICAgaW8gPSBjYWNoZVtpZF07XG4gICAgfVxuICAgIGlmIChwYXJzZWQucXVlcnkgJiYgIW9wdHMucXVlcnkpIHtcbiAgICAgICAgb3B0cy5xdWVyeSA9IHBhcnNlZC5xdWVyeUtleTtcbiAgICB9XG4gICAgcmV0dXJuIGlvLnNvY2tldChwYXJzZWQucGF0aCwgb3B0cyk7XG59XG5leHBvcnRzLmlvID0gbG9va3VwO1xuLyoqXG4gKiBQcm90b2NvbCB2ZXJzaW9uLlxuICpcbiAqIEBwdWJsaWNcbiAqL1xudmFyIHNvY2tldF9pb19wYXJzZXJfMSA9IHJlcXVpcmUoXCJzb2NrZXQuaW8tcGFyc2VyXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwicHJvdG9jb2xcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNvY2tldF9pb19wYXJzZXJfMS5wcm90b2NvbDsgfSB9KTtcbi8qKlxuICogYGNvbm5lY3RgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmlcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0cy5jb25uZWN0ID0gbG9va3VwO1xuLyoqXG4gKiBFeHBvc2UgY29uc3RydWN0b3JzIGZvciBzdGFuZGFsb25lIGJ1aWxkLlxuICpcbiAqIEBwdWJsaWNcbiAqL1xudmFyIG1hbmFnZXJfMiA9IHJlcXVpcmUoXCIuL21hbmFnZXJcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJNYW5hZ2VyXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBtYW5hZ2VyXzIuTWFuYWdlcjsgfSB9KTtcbnZhciBzb2NrZXRfMSA9IHJlcXVpcmUoXCIuL3NvY2tldFwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlNvY2tldFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc29ja2V0XzEuU29ja2V0OyB9IH0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gbG9va3VwO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLk1hbmFnZXIgPSB2b2lkIDA7XG5jb25zdCBlaW8gPSByZXF1aXJlKFwiZW5naW5lLmlvLWNsaWVudFwiKTtcbmNvbnN0IHNvY2tldF8xID0gcmVxdWlyZShcIi4vc29ja2V0XCIpO1xuY29uc3QgcGFyc2VyID0gcmVxdWlyZShcInNvY2tldC5pby1wYXJzZXJcIik7XG5jb25zdCBvbl8xID0gcmVxdWlyZShcIi4vb25cIik7XG5jb25zdCBCYWNrb2ZmID0gcmVxdWlyZShcImJhY2tvMlwiKTtcbmNvbnN0IHR5cGVkX2V2ZW50c18xID0gcmVxdWlyZShcIi4vdHlwZWQtZXZlbnRzXCIpO1xuY29uc3QgZGVidWcgPSByZXF1aXJlKFwiZGVidWdcIikoXCJzb2NrZXQuaW8tY2xpZW50Om1hbmFnZXJcIik7XG5jbGFzcyBNYW5hZ2VyIGV4dGVuZHMgdHlwZWRfZXZlbnRzXzEuU3RyaWN0RXZlbnRFbWl0dGVyIHtcbiAgICBjb25zdHJ1Y3Rvcih1cmksIG9wdHMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5uc3BzID0ge307XG4gICAgICAgIHRoaXMuc3VicyA9IFtdO1xuICAgICAgICBpZiAodXJpICYmIFwib2JqZWN0XCIgPT09IHR5cGVvZiB1cmkpIHtcbiAgICAgICAgICAgIG9wdHMgPSB1cmk7XG4gICAgICAgICAgICB1cmkgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgb3B0cyA9IG9wdHMgfHwge307XG4gICAgICAgIG9wdHMucGF0aCA9IG9wdHMucGF0aCB8fCBcIi9zb2NrZXQuaW9cIjtcbiAgICAgICAgdGhpcy5vcHRzID0gb3B0cztcbiAgICAgICAgdGhpcy5yZWNvbm5lY3Rpb24ob3B0cy5yZWNvbm5lY3Rpb24gIT09IGZhbHNlKTtcbiAgICAgICAgdGhpcy5yZWNvbm5lY3Rpb25BdHRlbXB0cyhvcHRzLnJlY29ubmVjdGlvbkF0dGVtcHRzIHx8IEluZmluaXR5KTtcbiAgICAgICAgdGhpcy5yZWNvbm5lY3Rpb25EZWxheShvcHRzLnJlY29ubmVjdGlvbkRlbGF5IHx8IDEwMDApO1xuICAgICAgICB0aGlzLnJlY29ubmVjdGlvbkRlbGF5TWF4KG9wdHMucmVjb25uZWN0aW9uRGVsYXlNYXggfHwgNTAwMCk7XG4gICAgICAgIHRoaXMucmFuZG9taXphdGlvbkZhY3RvcihvcHRzLnJhbmRvbWl6YXRpb25GYWN0b3IgfHwgMC41KTtcbiAgICAgICAgdGhpcy5iYWNrb2ZmID0gbmV3IEJhY2tvZmYoe1xuICAgICAgICAgICAgbWluOiB0aGlzLnJlY29ubmVjdGlvbkRlbGF5KCksXG4gICAgICAgICAgICBtYXg6IHRoaXMucmVjb25uZWN0aW9uRGVsYXlNYXgoKSxcbiAgICAgICAgICAgIGppdHRlcjogdGhpcy5yYW5kb21pemF0aW9uRmFjdG9yKCksXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnRpbWVvdXQobnVsbCA9PSBvcHRzLnRpbWVvdXQgPyAyMDAwMCA6IG9wdHMudGltZW91dCk7XG4gICAgICAgIHRoaXMuX3JlYWR5U3RhdGUgPSBcImNsb3NlZFwiO1xuICAgICAgICB0aGlzLnVyaSA9IHVyaTtcbiAgICAgICAgY29uc3QgX3BhcnNlciA9IG9wdHMucGFyc2VyIHx8IHBhcnNlcjtcbiAgICAgICAgdGhpcy5lbmNvZGVyID0gbmV3IF9wYXJzZXIuRW5jb2RlcigpO1xuICAgICAgICB0aGlzLmRlY29kZXIgPSBuZXcgX3BhcnNlci5EZWNvZGVyKCk7XG4gICAgICAgIHRoaXMuX2F1dG9Db25uZWN0ID0gb3B0cy5hdXRvQ29ubmVjdCAhPT0gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLl9hdXRvQ29ubmVjdClcbiAgICAgICAgICAgIHRoaXMub3BlbigpO1xuICAgIH1cbiAgICByZWNvbm5lY3Rpb24odikge1xuICAgICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVjb25uZWN0aW9uO1xuICAgICAgICB0aGlzLl9yZWNvbm5lY3Rpb24gPSAhIXY7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICByZWNvbm5lY3Rpb25BdHRlbXB0cyh2KSB7XG4gICAgICAgIGlmICh2ID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVjb25uZWN0aW9uQXR0ZW1wdHM7XG4gICAgICAgIHRoaXMuX3JlY29ubmVjdGlvbkF0dGVtcHRzID0gdjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHJlY29ubmVjdGlvbkRlbGF5KHYpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBpZiAodiA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JlY29ubmVjdGlvbkRlbGF5O1xuICAgICAgICB0aGlzLl9yZWNvbm5lY3Rpb25EZWxheSA9IHY7XG4gICAgICAgIChfYSA9IHRoaXMuYmFja29mZikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnNldE1pbih2KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHJhbmRvbWl6YXRpb25GYWN0b3Iodikge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGlmICh2ID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmFuZG9taXphdGlvbkZhY3RvcjtcbiAgICAgICAgdGhpcy5fcmFuZG9taXphdGlvbkZhY3RvciA9IHY7XG4gICAgICAgIChfYSA9IHRoaXMuYmFja29mZikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnNldEppdHRlcih2KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHJlY29ubmVjdGlvbkRlbGF5TWF4KHYpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBpZiAodiA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JlY29ubmVjdGlvbkRlbGF5TWF4O1xuICAgICAgICB0aGlzLl9yZWNvbm5lY3Rpb25EZWxheU1heCA9IHY7XG4gICAgICAgIChfYSA9IHRoaXMuYmFja29mZikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnNldE1heCh2KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHRpbWVvdXQodikge1xuICAgICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdGltZW91dDtcbiAgICAgICAgdGhpcy5fdGltZW91dCA9IHY7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTdGFydHMgdHJ5aW5nIHRvIHJlY29ubmVjdCBpZiByZWNvbm5lY3Rpb24gaXMgZW5hYmxlZCBhbmQgd2UgaGF2ZSBub3RcbiAgICAgKiBzdGFydGVkIHJlY29ubmVjdGluZyB5ZXRcbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgbWF5YmVSZWNvbm5lY3RPbk9wZW4oKSB7XG4gICAgICAgIC8vIE9ubHkgdHJ5IHRvIHJlY29ubmVjdCBpZiBpdCdzIHRoZSBmaXJzdCB0aW1lIHdlJ3JlIGNvbm5lY3RpbmdcbiAgICAgICAgaWYgKCF0aGlzLl9yZWNvbm5lY3RpbmcgJiZcbiAgICAgICAgICAgIHRoaXMuX3JlY29ubmVjdGlvbiAmJlxuICAgICAgICAgICAgdGhpcy5iYWNrb2ZmLmF0dGVtcHRzID09PSAwKSB7XG4gICAgICAgICAgICAvLyBrZWVwcyByZWNvbm5lY3Rpb24gZnJvbSBmaXJpbmcgdHdpY2UgZm9yIHRoZSBzYW1lIHJlY29ubmVjdGlvbiBsb29wXG4gICAgICAgICAgICB0aGlzLnJlY29ubmVjdCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGN1cnJlbnQgdHJhbnNwb3J0IGBzb2NrZXRgLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gLSBvcHRpb25hbCwgY2FsbGJhY2tcbiAgICAgKiBAcmV0dXJuIHNlbGZcbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgb3Blbihmbikge1xuICAgICAgICBkZWJ1ZyhcInJlYWR5U3RhdGUgJXNcIiwgdGhpcy5fcmVhZHlTdGF0ZSk7XG4gICAgICAgIGlmICh+dGhpcy5fcmVhZHlTdGF0ZS5pbmRleE9mKFwib3BlblwiKSlcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICBkZWJ1ZyhcIm9wZW5pbmcgJXNcIiwgdGhpcy51cmkpO1xuICAgICAgICB0aGlzLmVuZ2luZSA9IGVpbyh0aGlzLnVyaSwgdGhpcy5vcHRzKTtcbiAgICAgICAgY29uc3Qgc29ja2V0ID0gdGhpcy5lbmdpbmU7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLl9yZWFkeVN0YXRlID0gXCJvcGVuaW5nXCI7XG4gICAgICAgIHRoaXMuc2tpcFJlY29ubmVjdCA9IGZhbHNlO1xuICAgICAgICAvLyBlbWl0IGBvcGVuYFxuICAgICAgICBjb25zdCBvcGVuU3ViRGVzdHJveSA9IG9uXzEub24oc29ja2V0LCBcIm9wZW5cIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2VsZi5vbm9wZW4oKTtcbiAgICAgICAgICAgIGZuICYmIGZuKCk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBlbWl0IGBlcnJvcmBcbiAgICAgICAgY29uc3QgZXJyb3JTdWIgPSBvbl8xLm9uKHNvY2tldCwgXCJlcnJvclwiLCAoZXJyKSA9PiB7XG4gICAgICAgICAgICBkZWJ1ZyhcImVycm9yXCIpO1xuICAgICAgICAgICAgc2VsZi5jbGVhbnVwKCk7XG4gICAgICAgICAgICBzZWxmLl9yZWFkeVN0YXRlID0gXCJjbG9zZWRcIjtcbiAgICAgICAgICAgIHRoaXMuZW1pdFJlc2VydmVkKFwiZXJyb3JcIiwgZXJyKTtcbiAgICAgICAgICAgIGlmIChmbikge1xuICAgICAgICAgICAgICAgIGZuKGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBPbmx5IGRvIHRoaXMgaWYgdGhlcmUgaXMgbm8gZm4gdG8gaGFuZGxlIHRoZSBlcnJvclxuICAgICAgICAgICAgICAgIHNlbGYubWF5YmVSZWNvbm5lY3RPbk9wZW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChmYWxzZSAhPT0gdGhpcy5fdGltZW91dCkge1xuICAgICAgICAgICAgY29uc3QgdGltZW91dCA9IHRoaXMuX3RpbWVvdXQ7XG4gICAgICAgICAgICBkZWJ1ZyhcImNvbm5lY3QgYXR0ZW1wdCB3aWxsIHRpbWVvdXQgYWZ0ZXIgJWRcIiwgdGltZW91dCk7XG4gICAgICAgICAgICBpZiAodGltZW91dCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIG9wZW5TdWJEZXN0cm95KCk7IC8vIHByZXZlbnRzIGEgcmFjZSBjb25kaXRpb24gd2l0aCB0aGUgJ29wZW4nIGV2ZW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBzZXQgdGltZXJcbiAgICAgICAgICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgZGVidWcoXCJjb25uZWN0IGF0dGVtcHQgdGltZWQgb3V0IGFmdGVyICVkXCIsIHRpbWVvdXQpO1xuICAgICAgICAgICAgICAgIG9wZW5TdWJEZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgc29ja2V0LmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgc29ja2V0LmVtaXQoXCJlcnJvclwiLCBuZXcgRXJyb3IoXCJ0aW1lb3V0XCIpKTtcbiAgICAgICAgICAgIH0sIHRpbWVvdXQpO1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0cy5hdXRvVW5yZWYpIHtcbiAgICAgICAgICAgICAgICB0aW1lci51bnJlZigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zdWJzLnB1c2goZnVuY3Rpb24gc3ViRGVzdHJveSgpIHtcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdWJzLnB1c2gob3BlblN1YkRlc3Ryb3kpO1xuICAgICAgICB0aGlzLnN1YnMucHVzaChlcnJvclN1Yik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBbGlhcyBmb3Igb3BlbigpXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHNlbGZcbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgY29ubmVjdChmbikge1xuICAgICAgICByZXR1cm4gdGhpcy5vcGVuKGZuKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHVwb24gdHJhbnNwb3J0IG9wZW4uXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIG9ub3BlbigpIHtcbiAgICAgICAgZGVidWcoXCJvcGVuXCIpO1xuICAgICAgICAvLyBjbGVhciBvbGQgc3Vic1xuICAgICAgICB0aGlzLmNsZWFudXAoKTtcbiAgICAgICAgLy8gbWFyayBhcyBvcGVuXG4gICAgICAgIHRoaXMuX3JlYWR5U3RhdGUgPSBcIm9wZW5cIjtcbiAgICAgICAgdGhpcy5lbWl0UmVzZXJ2ZWQoXCJvcGVuXCIpO1xuICAgICAgICAvLyBhZGQgbmV3IHN1YnNcbiAgICAgICAgY29uc3Qgc29ja2V0ID0gdGhpcy5lbmdpbmU7XG4gICAgICAgIHRoaXMuc3Vicy5wdXNoKG9uXzEub24oc29ja2V0LCBcInBpbmdcIiwgdGhpcy5vbnBpbmcuYmluZCh0aGlzKSksIG9uXzEub24oc29ja2V0LCBcImRhdGFcIiwgdGhpcy5vbmRhdGEuYmluZCh0aGlzKSksIG9uXzEub24oc29ja2V0LCBcImVycm9yXCIsIHRoaXMub25lcnJvci5iaW5kKHRoaXMpKSwgb25fMS5vbihzb2NrZXQsIFwiY2xvc2VcIiwgdGhpcy5vbmNsb3NlLmJpbmQodGhpcykpLCBvbl8xLm9uKHRoaXMuZGVjb2RlciwgXCJkZWNvZGVkXCIsIHRoaXMub25kZWNvZGVkLmJpbmQodGhpcykpKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHVwb24gYSBwaW5nLlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBvbnBpbmcoKSB7XG4gICAgICAgIHRoaXMuZW1pdFJlc2VydmVkKFwicGluZ1wiKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHdpdGggZGF0YS5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgb25kYXRhKGRhdGEpIHtcbiAgICAgICAgdGhpcy5kZWNvZGVyLmFkZChkYXRhKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHdoZW4gcGFyc2VyIGZ1bGx5IGRlY29kZXMgYSBwYWNrZXQuXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIG9uZGVjb2RlZChwYWNrZXQpIHtcbiAgICAgICAgdGhpcy5lbWl0UmVzZXJ2ZWQoXCJwYWNrZXRcIiwgcGFja2V0KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHVwb24gc29ja2V0IGVycm9yLlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBvbmVycm9yKGVycikge1xuICAgICAgICBkZWJ1ZyhcImVycm9yXCIsIGVycik7XG4gICAgICAgIHRoaXMuZW1pdFJlc2VydmVkKFwiZXJyb3JcIiwgZXJyKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyBzb2NrZXQgZm9yIHRoZSBnaXZlbiBgbnNwYC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1NvY2tldH1cbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgc29ja2V0KG5zcCwgb3B0cykge1xuICAgICAgICBsZXQgc29ja2V0ID0gdGhpcy5uc3BzW25zcF07XG4gICAgICAgIGlmICghc29ja2V0KSB7XG4gICAgICAgICAgICBzb2NrZXQgPSBuZXcgc29ja2V0XzEuU29ja2V0KHRoaXMsIG5zcCwgb3B0cyk7XG4gICAgICAgICAgICB0aGlzLm5zcHNbbnNwXSA9IHNvY2tldDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc29ja2V0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgdXBvbiBhIHNvY2tldCBjbG9zZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzb2NrZXRcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9kZXN0cm95KHNvY2tldCkge1xuICAgICAgICBjb25zdCBuc3BzID0gT2JqZWN0LmtleXModGhpcy5uc3BzKTtcbiAgICAgICAgZm9yIChjb25zdCBuc3Agb2YgbnNwcykge1xuICAgICAgICAgICAgY29uc3Qgc29ja2V0ID0gdGhpcy5uc3BzW25zcF07XG4gICAgICAgICAgICBpZiAoc29ja2V0LmFjdGl2ZSkge1xuICAgICAgICAgICAgICAgIGRlYnVnKFwic29ja2V0ICVzIGlzIHN0aWxsIGFjdGl2ZSwgc2tpcHBpbmcgY2xvc2VcIiwgbnNwKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fY2xvc2UoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogV3JpdGVzIGEgcGFja2V0LlxuICAgICAqXG4gICAgICogQHBhcmFtIHBhY2tldFxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX3BhY2tldChwYWNrZXQpIHtcbiAgICAgICAgZGVidWcoXCJ3cml0aW5nIHBhY2tldCAlalwiLCBwYWNrZXQpO1xuICAgICAgICBjb25zdCBlbmNvZGVkUGFja2V0cyA9IHRoaXMuZW5jb2Rlci5lbmNvZGUocGFja2V0KTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbmNvZGVkUGFja2V0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5lbmdpbmUud3JpdGUoZW5jb2RlZFBhY2tldHNbaV0sIHBhY2tldC5vcHRpb25zKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBDbGVhbiB1cCB0cmFuc3BvcnQgc3Vic2NyaXB0aW9ucyBhbmQgcGFja2V0IGJ1ZmZlci5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgY2xlYW51cCgpIHtcbiAgICAgICAgZGVidWcoXCJjbGVhbnVwXCIpO1xuICAgICAgICB0aGlzLnN1YnMuZm9yRWFjaCgoc3ViRGVzdHJveSkgPT4gc3ViRGVzdHJveSgpKTtcbiAgICAgICAgdGhpcy5zdWJzLmxlbmd0aCA9IDA7XG4gICAgICAgIHRoaXMuZGVjb2Rlci5kZXN0cm95KCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENsb3NlIHRoZSBjdXJyZW50IHNvY2tldC5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX2Nsb3NlKCkge1xuICAgICAgICBkZWJ1ZyhcImRpc2Nvbm5lY3RcIik7XG4gICAgICAgIHRoaXMuc2tpcFJlY29ubmVjdCA9IHRydWU7XG4gICAgICAgIHRoaXMuX3JlY29ubmVjdGluZyA9IGZhbHNlO1xuICAgICAgICBpZiAoXCJvcGVuaW5nXCIgPT09IHRoaXMuX3JlYWR5U3RhdGUpIHtcbiAgICAgICAgICAgIC8vIGBvbmNsb3NlYCB3aWxsIG5vdCBmaXJlIGJlY2F1c2VcbiAgICAgICAgICAgIC8vIGFuIG9wZW4gZXZlbnQgbmV2ZXIgaGFwcGVuZWRcbiAgICAgICAgICAgIHRoaXMuY2xlYW51cCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYmFja29mZi5yZXNldCgpO1xuICAgICAgICB0aGlzLl9yZWFkeVN0YXRlID0gXCJjbG9zZWRcIjtcbiAgICAgICAgaWYgKHRoaXMuZW5naW5lKVxuICAgICAgICAgICAgdGhpcy5lbmdpbmUuY2xvc2UoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWxpYXMgZm9yIGNsb3NlKClcbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgZGlzY29ubmVjdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Nsb3NlKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxlZCB1cG9uIGVuZ2luZSBjbG9zZS5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgb25jbG9zZShyZWFzb24pIHtcbiAgICAgICAgZGVidWcoXCJvbmNsb3NlXCIpO1xuICAgICAgICB0aGlzLmNsZWFudXAoKTtcbiAgICAgICAgdGhpcy5iYWNrb2ZmLnJlc2V0KCk7XG4gICAgICAgIHRoaXMuX3JlYWR5U3RhdGUgPSBcImNsb3NlZFwiO1xuICAgICAgICB0aGlzLmVtaXRSZXNlcnZlZChcImNsb3NlXCIsIHJlYXNvbik7XG4gICAgICAgIGlmICh0aGlzLl9yZWNvbm5lY3Rpb24gJiYgIXRoaXMuc2tpcFJlY29ubmVjdCkge1xuICAgICAgICAgICAgdGhpcy5yZWNvbm5lY3QoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBBdHRlbXB0IGEgcmVjb25uZWN0aW9uLlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICByZWNvbm5lY3QoKSB7XG4gICAgICAgIGlmICh0aGlzLl9yZWNvbm5lY3RpbmcgfHwgdGhpcy5za2lwUmVjb25uZWN0KVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBpZiAodGhpcy5iYWNrb2ZmLmF0dGVtcHRzID49IHRoaXMuX3JlY29ubmVjdGlvbkF0dGVtcHRzKSB7XG4gICAgICAgICAgICBkZWJ1ZyhcInJlY29ubmVjdCBmYWlsZWRcIik7XG4gICAgICAgICAgICB0aGlzLmJhY2tvZmYucmVzZXQoKTtcbiAgICAgICAgICAgIHRoaXMuZW1pdFJlc2VydmVkKFwicmVjb25uZWN0X2ZhaWxlZFwiKTtcbiAgICAgICAgICAgIHRoaXMuX3JlY29ubmVjdGluZyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgZGVsYXkgPSB0aGlzLmJhY2tvZmYuZHVyYXRpb24oKTtcbiAgICAgICAgICAgIGRlYnVnKFwid2lsbCB3YWl0ICVkbXMgYmVmb3JlIHJlY29ubmVjdCBhdHRlbXB0XCIsIGRlbGF5KTtcbiAgICAgICAgICAgIHRoaXMuX3JlY29ubmVjdGluZyA9IHRydWU7XG4gICAgICAgICAgICBjb25zdCB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChzZWxmLnNraXBSZWNvbm5lY3QpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICBkZWJ1ZyhcImF0dGVtcHRpbmcgcmVjb25uZWN0XCIpO1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdFJlc2VydmVkKFwicmVjb25uZWN0X2F0dGVtcHRcIiwgc2VsZi5iYWNrb2ZmLmF0dGVtcHRzKTtcbiAgICAgICAgICAgICAgICAvLyBjaGVjayBhZ2FpbiBmb3IgdGhlIGNhc2Ugc29ja2V0IGNsb3NlZCBpbiBhYm92ZSBldmVudHNcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5za2lwUmVjb25uZWN0KVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgc2VsZi5vcGVuKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVidWcoXCJyZWNvbm5lY3QgYXR0ZW1wdCBlcnJvclwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuX3JlY29ubmVjdGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5yZWNvbm5lY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdFJlc2VydmVkKFwicmVjb25uZWN0X2Vycm9yXCIsIGVycik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWJ1ZyhcInJlY29ubmVjdCBzdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5vbnJlY29ubmVjdCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LCBkZWxheSk7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRzLmF1dG9VbnJlZikge1xuICAgICAgICAgICAgICAgIHRpbWVyLnVucmVmKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnN1YnMucHVzaChmdW5jdGlvbiBzdWJEZXN0cm95KCkge1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgdXBvbiBzdWNjZXNzZnVsIHJlY29ubmVjdC5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgb25yZWNvbm5lY3QoKSB7XG4gICAgICAgIGNvbnN0IGF0dGVtcHQgPSB0aGlzLmJhY2tvZmYuYXR0ZW1wdHM7XG4gICAgICAgIHRoaXMuX3JlY29ubmVjdGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmJhY2tvZmYucmVzZXQoKTtcbiAgICAgICAgdGhpcy5lbWl0UmVzZXJ2ZWQoXCJyZWNvbm5lY3RcIiwgYXR0ZW1wdCk7XG4gICAgfVxufVxuZXhwb3J0cy5NYW5hZ2VyID0gTWFuYWdlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5vbiA9IHZvaWQgMDtcbmZ1bmN0aW9uIG9uKG9iaiwgZXYsIGZuKSB7XG4gICAgb2JqLm9uKGV2LCBmbik7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHN1YkRlc3Ryb3koKSB7XG4gICAgICAgIG9iai5vZmYoZXYsIGZuKTtcbiAgICB9O1xufVxuZXhwb3J0cy5vbiA9IG9uO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlNvY2tldCA9IHZvaWQgMDtcbmNvbnN0IHNvY2tldF9pb19wYXJzZXJfMSA9IHJlcXVpcmUoXCJzb2NrZXQuaW8tcGFyc2VyXCIpO1xuY29uc3Qgb25fMSA9IHJlcXVpcmUoXCIuL29uXCIpO1xuY29uc3QgdHlwZWRfZXZlbnRzXzEgPSByZXF1aXJlKFwiLi90eXBlZC1ldmVudHNcIik7XG5jb25zdCBkZWJ1ZyA9IHJlcXVpcmUoXCJkZWJ1Z1wiKShcInNvY2tldC5pby1jbGllbnQ6c29ja2V0XCIpO1xuLyoqXG4gKiBJbnRlcm5hbCBldmVudHMuXG4gKiBUaGVzZSBldmVudHMgY2FuJ3QgYmUgZW1pdHRlZCBieSB0aGUgdXNlci5cbiAqL1xuY29uc3QgUkVTRVJWRURfRVZFTlRTID0gT2JqZWN0LmZyZWV6ZSh7XG4gICAgY29ubmVjdDogMSxcbiAgICBjb25uZWN0X2Vycm9yOiAxLFxuICAgIGRpc2Nvbm5lY3Q6IDEsXG4gICAgZGlzY29ubmVjdGluZzogMSxcbiAgICAvLyBFdmVudEVtaXR0ZXIgcmVzZXJ2ZWQgZXZlbnRzOiBodHRwczovL25vZGVqcy5vcmcvYXBpL2V2ZW50cy5odG1sI2V2ZW50c19ldmVudF9uZXdsaXN0ZW5lclxuICAgIG5ld0xpc3RlbmVyOiAxLFxuICAgIHJlbW92ZUxpc3RlbmVyOiAxLFxufSk7XG5jbGFzcyBTb2NrZXQgZXh0ZW5kcyB0eXBlZF9ldmVudHNfMS5TdHJpY3RFdmVudEVtaXR0ZXIge1xuICAgIC8qKlxuICAgICAqIGBTb2NrZXRgIGNvbnN0cnVjdG9yLlxuICAgICAqXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGlvLCBuc3AsIG9wdHMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5yZWNlaXZlQnVmZmVyID0gW107XG4gICAgICAgIHRoaXMuc2VuZEJ1ZmZlciA9IFtdO1xuICAgICAgICB0aGlzLmlkcyA9IDA7XG4gICAgICAgIHRoaXMuYWNrcyA9IHt9O1xuICAgICAgICB0aGlzLmZsYWdzID0ge307XG4gICAgICAgIHRoaXMuaW8gPSBpbztcbiAgICAgICAgdGhpcy5uc3AgPSBuc3A7XG4gICAgICAgIHRoaXMuaWRzID0gMDtcbiAgICAgICAgdGhpcy5hY2tzID0ge307XG4gICAgICAgIHRoaXMucmVjZWl2ZUJ1ZmZlciA9IFtdO1xuICAgICAgICB0aGlzLnNlbmRCdWZmZXIgPSBbXTtcbiAgICAgICAgdGhpcy5jb25uZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kaXNjb25uZWN0ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmZsYWdzID0ge307XG4gICAgICAgIGlmIChvcHRzICYmIG9wdHMuYXV0aCkge1xuICAgICAgICAgICAgdGhpcy5hdXRoID0gb3B0cy5hdXRoO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmlvLl9hdXRvQ29ubmVjdClcbiAgICAgICAgICAgIHRoaXMub3BlbigpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTdWJzY3JpYmUgdG8gb3BlbiwgY2xvc2UgYW5kIHBhY2tldCBldmVudHNcbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgc3ViRXZlbnRzKCkge1xuICAgICAgICBpZiAodGhpcy5zdWJzKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBjb25zdCBpbyA9IHRoaXMuaW87XG4gICAgICAgIHRoaXMuc3VicyA9IFtcbiAgICAgICAgICAgIG9uXzEub24oaW8sIFwib3BlblwiLCB0aGlzLm9ub3Blbi5iaW5kKHRoaXMpKSxcbiAgICAgICAgICAgIG9uXzEub24oaW8sIFwicGFja2V0XCIsIHRoaXMub25wYWNrZXQuYmluZCh0aGlzKSksXG4gICAgICAgICAgICBvbl8xLm9uKGlvLCBcImVycm9yXCIsIHRoaXMub25lcnJvci5iaW5kKHRoaXMpKSxcbiAgICAgICAgICAgIG9uXzEub24oaW8sIFwiY2xvc2VcIiwgdGhpcy5vbmNsb3NlLmJpbmQodGhpcykpLFxuICAgICAgICBdO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIHRoZSBTb2NrZXQgd2lsbCB0cnkgdG8gcmVjb25uZWN0IHdoZW4gaXRzIE1hbmFnZXIgY29ubmVjdHMgb3IgcmVjb25uZWN0c1xuICAgICAqL1xuICAgIGdldCBhY3RpdmUoKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuc3VicztcbiAgICB9XG4gICAgLyoqXG4gICAgICogXCJPcGVuc1wiIHRoZSBzb2NrZXQuXG4gICAgICpcbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuY29ubmVjdGVkKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIHRoaXMuc3ViRXZlbnRzKCk7XG4gICAgICAgIGlmICghdGhpcy5pb1tcIl9yZWNvbm5lY3RpbmdcIl0pXG4gICAgICAgICAgICB0aGlzLmlvLm9wZW4oKTsgLy8gZW5zdXJlIG9wZW5cbiAgICAgICAgaWYgKFwib3BlblwiID09PSB0aGlzLmlvLl9yZWFkeVN0YXRlKVxuICAgICAgICAgICAgdGhpcy5vbm9wZW4oKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFsaWFzIGZvciBjb25uZWN0KClcbiAgICAgKi9cbiAgICBvcGVuKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb25uZWN0KCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNlbmRzIGEgYG1lc3NhZ2VgIGV2ZW50LlxuICAgICAqXG4gICAgICogQHJldHVybiBzZWxmXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIHNlbmQoLi4uYXJncykge1xuICAgICAgICBhcmdzLnVuc2hpZnQoXCJtZXNzYWdlXCIpO1xuICAgICAgICB0aGlzLmVtaXQuYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBPdmVycmlkZSBgZW1pdGAuXG4gICAgICogSWYgdGhlIGV2ZW50IGlzIGluIGBldmVudHNgLCBpdCdzIGVtaXR0ZWQgbm9ybWFsbHkuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHNlbGZcbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgZW1pdChldiwgLi4uYXJncykge1xuICAgICAgICBpZiAoUkVTRVJWRURfRVZFTlRTLmhhc093blByb3BlcnR5KGV2KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdcIicgKyBldiArICdcIiBpcyBhIHJlc2VydmVkIGV2ZW50IG5hbWUnKTtcbiAgICAgICAgfVxuICAgICAgICBhcmdzLnVuc2hpZnQoZXYpO1xuICAgICAgICBjb25zdCBwYWNrZXQgPSB7XG4gICAgICAgICAgICB0eXBlOiBzb2NrZXRfaW9fcGFyc2VyXzEuUGFja2V0VHlwZS5FVkVOVCxcbiAgICAgICAgICAgIGRhdGE6IGFyZ3MsXG4gICAgICAgIH07XG4gICAgICAgIHBhY2tldC5vcHRpb25zID0ge307XG4gICAgICAgIHBhY2tldC5vcHRpb25zLmNvbXByZXNzID0gdGhpcy5mbGFncy5jb21wcmVzcyAhPT0gZmFsc2U7XG4gICAgICAgIC8vIGV2ZW50IGFjayBjYWxsYmFja1xuICAgICAgICBpZiAoXCJmdW5jdGlvblwiID09PSB0eXBlb2YgYXJnc1thcmdzLmxlbmd0aCAtIDFdKSB7XG4gICAgICAgICAgICBkZWJ1ZyhcImVtaXR0aW5nIHBhY2tldCB3aXRoIGFjayBpZCAlZFwiLCB0aGlzLmlkcyk7XG4gICAgICAgICAgICB0aGlzLmFja3NbdGhpcy5pZHNdID0gYXJncy5wb3AoKTtcbiAgICAgICAgICAgIHBhY2tldC5pZCA9IHRoaXMuaWRzKys7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaXNUcmFuc3BvcnRXcml0YWJsZSA9IHRoaXMuaW8uZW5naW5lICYmXG4gICAgICAgICAgICB0aGlzLmlvLmVuZ2luZS50cmFuc3BvcnQgJiZcbiAgICAgICAgICAgIHRoaXMuaW8uZW5naW5lLnRyYW5zcG9ydC53cml0YWJsZTtcbiAgICAgICAgY29uc3QgZGlzY2FyZFBhY2tldCA9IHRoaXMuZmxhZ3Mudm9sYXRpbGUgJiYgKCFpc1RyYW5zcG9ydFdyaXRhYmxlIHx8ICF0aGlzLmNvbm5lY3RlZCk7XG4gICAgICAgIGlmIChkaXNjYXJkUGFja2V0KSB7XG4gICAgICAgICAgICBkZWJ1ZyhcImRpc2NhcmQgcGFja2V0IGFzIHRoZSB0cmFuc3BvcnQgaXMgbm90IGN1cnJlbnRseSB3cml0YWJsZVwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmNvbm5lY3RlZCkge1xuICAgICAgICAgICAgdGhpcy5wYWNrZXQocGFja2V0KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2VuZEJ1ZmZlci5wdXNoKHBhY2tldCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5mbGFncyA9IHt9O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2VuZHMgYSBwYWNrZXQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcGFja2V0XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBwYWNrZXQocGFja2V0KSB7XG4gICAgICAgIHBhY2tldC5uc3AgPSB0aGlzLm5zcDtcbiAgICAgICAgdGhpcy5pby5fcGFja2V0KHBhY2tldCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxlZCB1cG9uIGVuZ2luZSBgb3BlbmAuXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIG9ub3BlbigpIHtcbiAgICAgICAgZGVidWcoXCJ0cmFuc3BvcnQgaXMgb3BlbiAtIGNvbm5lY3RpbmdcIik7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5hdXRoID09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgdGhpcy5hdXRoKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYWNrZXQoeyB0eXBlOiBzb2NrZXRfaW9fcGFyc2VyXzEuUGFja2V0VHlwZS5DT05ORUNULCBkYXRhIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnBhY2tldCh7IHR5cGU6IHNvY2tldF9pb19wYXJzZXJfMS5QYWNrZXRUeXBlLkNPTk5FQ1QsIGRhdGE6IHRoaXMuYXV0aCB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgdXBvbiBlbmdpbmUgb3IgbWFuYWdlciBgZXJyb3JgLlxuICAgICAqXG4gICAgICogQHBhcmFtIGVyclxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgb25lcnJvcihlcnIpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNvbm5lY3RlZCkge1xuICAgICAgICAgICAgdGhpcy5lbWl0UmVzZXJ2ZWQoXCJjb25uZWN0X2Vycm9yXCIsIGVycik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHVwb24gZW5naW5lIGBjbG9zZWAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVhc29uXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBvbmNsb3NlKHJlYXNvbikge1xuICAgICAgICBkZWJ1ZyhcImNsb3NlICglcylcIiwgcmVhc29uKTtcbiAgICAgICAgdGhpcy5jb25uZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kaXNjb25uZWN0ZWQgPSB0cnVlO1xuICAgICAgICBkZWxldGUgdGhpcy5pZDtcbiAgICAgICAgdGhpcy5lbWl0UmVzZXJ2ZWQoXCJkaXNjb25uZWN0XCIsIHJlYXNvbik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxlZCB3aXRoIHNvY2tldCBwYWNrZXQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcGFja2V0XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBvbnBhY2tldChwYWNrZXQpIHtcbiAgICAgICAgY29uc3Qgc2FtZU5hbWVzcGFjZSA9IHBhY2tldC5uc3AgPT09IHRoaXMubnNwO1xuICAgICAgICBpZiAoIXNhbWVOYW1lc3BhY2UpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHN3aXRjaCAocGFja2V0LnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2Ugc29ja2V0X2lvX3BhcnNlcl8xLlBhY2tldFR5cGUuQ09OTkVDVDpcbiAgICAgICAgICAgICAgICBpZiAocGFja2V0LmRhdGEgJiYgcGFja2V0LmRhdGEuc2lkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlkID0gcGFja2V0LmRhdGEuc2lkO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uY29ubmVjdChpZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXRSZXNlcnZlZChcImNvbm5lY3RfZXJyb3JcIiwgbmV3IEVycm9yKFwiSXQgc2VlbXMgeW91IGFyZSB0cnlpbmcgdG8gcmVhY2ggYSBTb2NrZXQuSU8gc2VydmVyIGluIHYyLnggd2l0aCBhIHYzLnggY2xpZW50LCBidXQgdGhleSBhcmUgbm90IGNvbXBhdGlibGUgKG1vcmUgaW5mb3JtYXRpb24gaGVyZTogaHR0cHM6Ly9zb2NrZXQuaW8vZG9jcy92My9taWdyYXRpbmctZnJvbS0yLXgtdG8tMy0wLylcIikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2Ugc29ja2V0X2lvX3BhcnNlcl8xLlBhY2tldFR5cGUuRVZFTlQ6XG4gICAgICAgICAgICAgICAgdGhpcy5vbmV2ZW50KHBhY2tldCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHNvY2tldF9pb19wYXJzZXJfMS5QYWNrZXRUeXBlLkJJTkFSWV9FVkVOVDpcbiAgICAgICAgICAgICAgICB0aGlzLm9uZXZlbnQocGFja2V0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2Ugc29ja2V0X2lvX3BhcnNlcl8xLlBhY2tldFR5cGUuQUNLOlxuICAgICAgICAgICAgICAgIHRoaXMub25hY2socGFja2V0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2Ugc29ja2V0X2lvX3BhcnNlcl8xLlBhY2tldFR5cGUuQklOQVJZX0FDSzpcbiAgICAgICAgICAgICAgICB0aGlzLm9uYWNrKHBhY2tldCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHNvY2tldF9pb19wYXJzZXJfMS5QYWNrZXRUeXBlLkRJU0NPTk5FQ1Q6XG4gICAgICAgICAgICAgICAgdGhpcy5vbmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2Ugc29ja2V0X2lvX3BhcnNlcl8xLlBhY2tldFR5cGUuQ09OTkVDVF9FUlJPUjpcbiAgICAgICAgICAgICAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IocGFja2V0LmRhdGEubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgIGVyci5kYXRhID0gcGFja2V0LmRhdGEuZGF0YTtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXRSZXNlcnZlZChcImNvbm5lY3RfZXJyb3JcIiwgZXJyKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgdXBvbiBhIHNlcnZlciBldmVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBwYWNrZXRcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIG9uZXZlbnQocGFja2V0KSB7XG4gICAgICAgIGNvbnN0IGFyZ3MgPSBwYWNrZXQuZGF0YSB8fCBbXTtcbiAgICAgICAgZGVidWcoXCJlbWl0dGluZyBldmVudCAlalwiLCBhcmdzKTtcbiAgICAgICAgaWYgKG51bGwgIT0gcGFja2V0LmlkKSB7XG4gICAgICAgICAgICBkZWJ1ZyhcImF0dGFjaGluZyBhY2sgY2FsbGJhY2sgdG8gZXZlbnRcIik7XG4gICAgICAgICAgICBhcmdzLnB1c2godGhpcy5hY2socGFja2V0LmlkKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY29ubmVjdGVkKSB7XG4gICAgICAgICAgICB0aGlzLmVtaXRFdmVudChhcmdzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucmVjZWl2ZUJ1ZmZlci5wdXNoKE9iamVjdC5mcmVlemUoYXJncykpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVtaXRFdmVudChhcmdzKSB7XG4gICAgICAgIGlmICh0aGlzLl9hbnlMaXN0ZW5lcnMgJiYgdGhpcy5fYW55TGlzdGVuZXJzLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3QgbGlzdGVuZXJzID0gdGhpcy5fYW55TGlzdGVuZXJzLnNsaWNlKCk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGxpc3RlbmVyIG9mIGxpc3RlbmVycykge1xuICAgICAgICAgICAgICAgIGxpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHN1cGVyLmVtaXQuYXBwbHkodGhpcywgYXJncyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFByb2R1Y2VzIGFuIGFjayBjYWxsYmFjayB0byBlbWl0IHdpdGggYW4gZXZlbnQuXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGFjayhpZCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgbGV0IHNlbnQgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gICAgICAgICAgICAvLyBwcmV2ZW50IGRvdWJsZSBjYWxsYmFja3NcbiAgICAgICAgICAgIGlmIChzZW50KVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIHNlbnQgPSB0cnVlO1xuICAgICAgICAgICAgZGVidWcoXCJzZW5kaW5nIGFjayAlalwiLCBhcmdzKTtcbiAgICAgICAgICAgIHNlbGYucGFja2V0KHtcbiAgICAgICAgICAgICAgICB0eXBlOiBzb2NrZXRfaW9fcGFyc2VyXzEuUGFja2V0VHlwZS5BQ0ssXG4gICAgICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgICAgIGRhdGE6IGFyZ3MsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHVwb24gYSBzZXJ2ZXIgYWNrbm93bGVnZW1lbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcGFja2V0XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBvbmFjayhwYWNrZXQpIHtcbiAgICAgICAgY29uc3QgYWNrID0gdGhpcy5hY2tzW3BhY2tldC5pZF07XG4gICAgICAgIGlmIChcImZ1bmN0aW9uXCIgPT09IHR5cGVvZiBhY2spIHtcbiAgICAgICAgICAgIGRlYnVnKFwiY2FsbGluZyBhY2sgJXMgd2l0aCAlalwiLCBwYWNrZXQuaWQsIHBhY2tldC5kYXRhKTtcbiAgICAgICAgICAgIGFjay5hcHBseSh0aGlzLCBwYWNrZXQuZGF0YSk7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5hY2tzW3BhY2tldC5pZF07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkZWJ1ZyhcImJhZCBhY2sgJXNcIiwgcGFja2V0LmlkKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgdXBvbiBzZXJ2ZXIgY29ubmVjdC5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgb25jb25uZWN0KGlkKSB7XG4gICAgICAgIGRlYnVnKFwic29ja2V0IGNvbm5lY3RlZCB3aXRoIGlkICVzXCIsIGlkKTtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLmNvbm5lY3RlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuZGlzY29ubmVjdGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZW1pdEJ1ZmZlcmVkKCk7XG4gICAgICAgIHRoaXMuZW1pdFJlc2VydmVkKFwiY29ubmVjdFwiKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRW1pdCBidWZmZXJlZCBldmVudHMgKHJlY2VpdmVkIGFuZCBlbWl0dGVkKS5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgZW1pdEJ1ZmZlcmVkKCkge1xuICAgICAgICB0aGlzLnJlY2VpdmVCdWZmZXIuZm9yRWFjaCgoYXJncykgPT4gdGhpcy5lbWl0RXZlbnQoYXJncykpO1xuICAgICAgICB0aGlzLnJlY2VpdmVCdWZmZXIgPSBbXTtcbiAgICAgICAgdGhpcy5zZW5kQnVmZmVyLmZvckVhY2goKHBhY2tldCkgPT4gdGhpcy5wYWNrZXQocGFja2V0KSk7XG4gICAgICAgIHRoaXMuc2VuZEJ1ZmZlciA9IFtdO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgdXBvbiBzZXJ2ZXIgZGlzY29ubmVjdC5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgb25kaXNjb25uZWN0KCkge1xuICAgICAgICBkZWJ1ZyhcInNlcnZlciBkaXNjb25uZWN0ICglcylcIiwgdGhpcy5uc3ApO1xuICAgICAgICB0aGlzLmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy5vbmNsb3NlKFwiaW8gc2VydmVyIGRpc2Nvbm5lY3RcIik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxlZCB1cG9uIGZvcmNlZCBjbGllbnQvc2VydmVyIHNpZGUgZGlzY29ubmVjdGlvbnMsXG4gICAgICogdGhpcyBtZXRob2QgZW5zdXJlcyB0aGUgbWFuYWdlciBzdG9wcyB0cmFja2luZyB1cyBhbmRcbiAgICAgKiB0aGF0IHJlY29ubmVjdGlvbnMgZG9uJ3QgZ2V0IHRyaWdnZXJlZCBmb3IgdGhpcy5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3Vicykge1xuICAgICAgICAgICAgLy8gY2xlYW4gc3Vic2NyaXB0aW9ucyB0byBhdm9pZCByZWNvbm5lY3Rpb25zXG4gICAgICAgICAgICB0aGlzLnN1YnMuZm9yRWFjaCgoc3ViRGVzdHJveSkgPT4gc3ViRGVzdHJveSgpKTtcbiAgICAgICAgICAgIHRoaXMuc3VicyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlvW1wiX2Rlc3Ryb3lcIl0odGhpcyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERpc2Nvbm5lY3RzIHRoZSBzb2NrZXQgbWFudWFsbHkuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHNlbGZcbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgZGlzY29ubmVjdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuY29ubmVjdGVkKSB7XG4gICAgICAgICAgICBkZWJ1ZyhcInBlcmZvcm1pbmcgZGlzY29ubmVjdCAoJXMpXCIsIHRoaXMubnNwKTtcbiAgICAgICAgICAgIHRoaXMucGFja2V0KHsgdHlwZTogc29ja2V0X2lvX3BhcnNlcl8xLlBhY2tldFR5cGUuRElTQ09OTkVDVCB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyByZW1vdmUgc29ja2V0IGZyb20gcG9vbFxuICAgICAgICB0aGlzLmRlc3Ryb3koKTtcbiAgICAgICAgaWYgKHRoaXMuY29ubmVjdGVkKSB7XG4gICAgICAgICAgICAvLyBmaXJlIGV2ZW50c1xuICAgICAgICAgICAgdGhpcy5vbmNsb3NlKFwiaW8gY2xpZW50IGRpc2Nvbm5lY3RcIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFsaWFzIGZvciBkaXNjb25uZWN0KClcbiAgICAgKlxuICAgICAqIEByZXR1cm4gc2VsZlxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBjbG9zZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGlzY29ubmVjdCgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBjb21wcmVzcyBmbGFnLlxuICAgICAqXG4gICAgICogQHBhcmFtIGNvbXByZXNzIC0gaWYgYHRydWVgLCBjb21wcmVzc2VzIHRoZSBzZW5kaW5nIGRhdGFcbiAgICAgKiBAcmV0dXJuIHNlbGZcbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgY29tcHJlc3MoY29tcHJlc3MpIHtcbiAgICAgICAgdGhpcy5mbGFncy5jb21wcmVzcyA9IGNvbXByZXNzO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cyBhIG1vZGlmaWVyIGZvciBhIHN1YnNlcXVlbnQgZXZlbnQgZW1pc3Npb24gdGhhdCB0aGUgZXZlbnQgbWVzc2FnZSB3aWxsIGJlIGRyb3BwZWQgd2hlbiB0aGlzIHNvY2tldCBpcyBub3RcbiAgICAgKiByZWFkeSB0byBzZW5kIG1lc3NhZ2VzLlxuICAgICAqXG4gICAgICogQHJldHVybnMgc2VsZlxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBnZXQgdm9sYXRpbGUoKSB7XG4gICAgICAgIHRoaXMuZmxhZ3Mudm9sYXRpbGUgPSB0cnVlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkcyBhIGxpc3RlbmVyIHRoYXQgd2lsbCBiZSBmaXJlZCB3aGVuIGFueSBldmVudCBpcyBlbWl0dGVkLiBUaGUgZXZlbnQgbmFtZSBpcyBwYXNzZWQgYXMgdGhlIGZpcnN0IGFyZ3VtZW50IHRvIHRoZVxuICAgICAqIGNhbGxiYWNrLlxuICAgICAqXG4gICAgICogQHBhcmFtIGxpc3RlbmVyXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIG9uQW55KGxpc3RlbmVyKSB7XG4gICAgICAgIHRoaXMuX2FueUxpc3RlbmVycyA9IHRoaXMuX2FueUxpc3RlbmVycyB8fCBbXTtcbiAgICAgICAgdGhpcy5fYW55TGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkcyBhIGxpc3RlbmVyIHRoYXQgd2lsbCBiZSBmaXJlZCB3aGVuIGFueSBldmVudCBpcyBlbWl0dGVkLiBUaGUgZXZlbnQgbmFtZSBpcyBwYXNzZWQgYXMgdGhlIGZpcnN0IGFyZ3VtZW50IHRvIHRoZVxuICAgICAqIGNhbGxiYWNrLiBUaGUgbGlzdGVuZXIgaXMgYWRkZWQgdG8gdGhlIGJlZ2lubmluZyBvZiB0aGUgbGlzdGVuZXJzIGFycmF5LlxuICAgICAqXG4gICAgICogQHBhcmFtIGxpc3RlbmVyXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIHByZXBlbmRBbnkobGlzdGVuZXIpIHtcbiAgICAgICAgdGhpcy5fYW55TGlzdGVuZXJzID0gdGhpcy5fYW55TGlzdGVuZXJzIHx8IFtdO1xuICAgICAgICB0aGlzLl9hbnlMaXN0ZW5lcnMudW5zaGlmdChsaXN0ZW5lcik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIHRoZSBsaXN0ZW5lciB0aGF0IHdpbGwgYmUgZmlyZWQgd2hlbiBhbnkgZXZlbnQgaXMgZW1pdHRlZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBsaXN0ZW5lclxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBvZmZBbnkobGlzdGVuZXIpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9hbnlMaXN0ZW5lcnMpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsaXN0ZW5lcikge1xuICAgICAgICAgICAgY29uc3QgbGlzdGVuZXJzID0gdGhpcy5fYW55TGlzdGVuZXJzO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0ZW5lcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAobGlzdGVuZXIgPT09IGxpc3RlbmVyc1tpXSkge1xuICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lcnMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9hbnlMaXN0ZW5lcnMgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBhcnJheSBvZiBsaXN0ZW5lcnMgdGhhdCBhcmUgbGlzdGVuaW5nIGZvciBhbnkgZXZlbnQgdGhhdCBpcyBzcGVjaWZpZWQuIFRoaXMgYXJyYXkgY2FuIGJlIG1hbmlwdWxhdGVkLFxuICAgICAqIGUuZy4gdG8gcmVtb3ZlIGxpc3RlbmVycy5cbiAgICAgKlxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBsaXN0ZW5lcnNBbnkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hbnlMaXN0ZW5lcnMgfHwgW107XG4gICAgfVxufVxuZXhwb3J0cy5Tb2NrZXQgPSBTb2NrZXQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuU3RyaWN0RXZlbnRFbWl0dGVyID0gdm9pZCAwO1xuY29uc3QgRW1pdHRlciA9IHJlcXVpcmUoXCJjb21wb25lbnQtZW1pdHRlclwiKTtcbi8qKlxuICogU3RyaWN0bHkgdHlwZWQgdmVyc2lvbiBvZiBhbiBgRXZlbnRFbWl0dGVyYC4gQSBgVHlwZWRFdmVudEVtaXR0ZXJgIHRha2VzIHR5cGVcbiAqIHBhcmFtZXRlcnMgZm9yIG1hcHBpbmdzIG9mIGV2ZW50IG5hbWVzIHRvIGV2ZW50IGRhdGEgdHlwZXMsIGFuZCBzdHJpY3RseVxuICogdHlwZXMgbWV0aG9kIGNhbGxzIHRvIHRoZSBgRXZlbnRFbWl0dGVyYCBhY2NvcmRpbmcgdG8gdGhlc2UgZXZlbnQgbWFwcy5cbiAqXG4gKiBAdHlwZVBhcmFtIExpc3RlbkV2ZW50cyAtIGBFdmVudHNNYXBgIG9mIHVzZXItZGVmaW5lZCBldmVudHMgdGhhdCBjYW4gYmVcbiAqIGxpc3RlbmVkIHRvIHdpdGggYG9uYCBvciBgb25jZWBcbiAqIEB0eXBlUGFyYW0gRW1pdEV2ZW50cyAtIGBFdmVudHNNYXBgIG9mIHVzZXItZGVmaW5lZCBldmVudHMgdGhhdCBjYW4gYmVcbiAqIGVtaXR0ZWQgd2l0aCBgZW1pdGBcbiAqIEB0eXBlUGFyYW0gUmVzZXJ2ZWRFdmVudHMgLSBgRXZlbnRzTWFwYCBvZiByZXNlcnZlZCBldmVudHMsIHRoYXQgY2FuIGJlXG4gKiBlbWl0dGVkIGJ5IHNvY2tldC5pbyB3aXRoIGBlbWl0UmVzZXJ2ZWRgLCBhbmQgY2FuIGJlIGxpc3RlbmVkIHRvIHdpdGhcbiAqIGBsaXN0ZW5gLlxuICovXG5jbGFzcyBTdHJpY3RFdmVudEVtaXR0ZXIgZXh0ZW5kcyBFbWl0dGVyIHtcbiAgICAvKipcbiAgICAgKiBBZGRzIHRoZSBgbGlzdGVuZXJgIGZ1bmN0aW9uIGFzIGFuIGV2ZW50IGxpc3RlbmVyIGZvciBgZXZgLlxuICAgICAqXG4gICAgICogQHBhcmFtIGV2IE5hbWUgb2YgdGhlIGV2ZW50XG4gICAgICogQHBhcmFtIGxpc3RlbmVyIENhbGxiYWNrIGZ1bmN0aW9uXG4gICAgICovXG4gICAgb24oZXYsIGxpc3RlbmVyKSB7XG4gICAgICAgIHN1cGVyLm9uKGV2LCBsaXN0ZW5lcik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGRzIGEgb25lLXRpbWUgYGxpc3RlbmVyYCBmdW5jdGlvbiBhcyBhbiBldmVudCBsaXN0ZW5lciBmb3IgYGV2YC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBldiBOYW1lIG9mIHRoZSBldmVudFxuICAgICAqIEBwYXJhbSBsaXN0ZW5lciBDYWxsYmFjayBmdW5jdGlvblxuICAgICAqL1xuICAgIG9uY2UoZXYsIGxpc3RlbmVyKSB7XG4gICAgICAgIHN1cGVyLm9uY2UoZXYsIGxpc3RlbmVyKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEVtaXRzIGFuIGV2ZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIGV2IE5hbWUgb2YgdGhlIGV2ZW50XG4gICAgICogQHBhcmFtIGFyZ3MgVmFsdWVzIHRvIHNlbmQgdG8gbGlzdGVuZXJzIG9mIHRoaXMgZXZlbnRcbiAgICAgKi9cbiAgICBlbWl0KGV2LCAuLi5hcmdzKSB7XG4gICAgICAgIHN1cGVyLmVtaXQoZXYsIC4uLmFyZ3MpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogRW1pdHMgYSByZXNlcnZlZCBldmVudC5cbiAgICAgKlxuICAgICAqIFRoaXMgbWV0aG9kIGlzIGBwcm90ZWN0ZWRgLCBzbyB0aGF0IG9ubHkgYSBjbGFzcyBleHRlbmRpbmdcbiAgICAgKiBgU3RyaWN0RXZlbnRFbWl0dGVyYCBjYW4gZW1pdCBpdHMgb3duIHJlc2VydmVkIGV2ZW50cy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBldiBSZXNlcnZlZCBldmVudCBuYW1lXG4gICAgICogQHBhcmFtIGFyZ3MgQXJndW1lbnRzIHRvIGVtaXQgYWxvbmcgd2l0aCB0aGUgZXZlbnRcbiAgICAgKi9cbiAgICBlbWl0UmVzZXJ2ZWQoZXYsIC4uLmFyZ3MpIHtcbiAgICAgICAgc3VwZXIuZW1pdChldiwgLi4uYXJncyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBsaXN0ZW5lcnMgbGlzdGVuaW5nIHRvIGFuIGV2ZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIGV2ZW50IEV2ZW50IG5hbWVcbiAgICAgKiBAcmV0dXJucyBBcnJheSBvZiBsaXN0ZW5lcnMgc3Vic2NyaWJlZCB0byBgZXZlbnRgXG4gICAgICovXG4gICAgbGlzdGVuZXJzKGV2ZW50KSB7XG4gICAgICAgIHJldHVybiBzdXBlci5saXN0ZW5lcnMoZXZlbnQpO1xuICAgIH1cbn1cbmV4cG9ydHMuU3RyaWN0RXZlbnRFbWl0dGVyID0gU3RyaWN0RXZlbnRFbWl0dGVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnVybCA9IHZvaWQgMDtcbmNvbnN0IHBhcnNldXJpID0gcmVxdWlyZShcInBhcnNldXJpXCIpO1xuY29uc3QgZGVidWcgPSByZXF1aXJlKFwiZGVidWdcIikoXCJzb2NrZXQuaW8tY2xpZW50OnVybFwiKTtcbi8qKlxuICogVVJMIHBhcnNlci5cbiAqXG4gKiBAcGFyYW0gdXJpIC0gdXJsXG4gKiBAcGFyYW0gcGF0aCAtIHRoZSByZXF1ZXN0IHBhdGggb2YgdGhlIGNvbm5lY3Rpb25cbiAqIEBwYXJhbSBsb2MgLSBBbiBvYmplY3QgbWVhbnQgdG8gbWltaWMgd2luZG93LmxvY2F0aW9uLlxuICogICAgICAgIERlZmF1bHRzIHRvIHdpbmRvdy5sb2NhdGlvbi5cbiAqIEBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gdXJsKHVyaSwgcGF0aCA9IFwiXCIsIGxvYykge1xuICAgIGxldCBvYmogPSB1cmk7XG4gICAgLy8gZGVmYXVsdCB0byB3aW5kb3cubG9jYXRpb25cbiAgICBsb2MgPSBsb2MgfHwgKHR5cGVvZiBsb2NhdGlvbiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBsb2NhdGlvbik7XG4gICAgaWYgKG51bGwgPT0gdXJpKVxuICAgICAgICB1cmkgPSBsb2MucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2MuaG9zdDtcbiAgICAvLyByZWxhdGl2ZSBwYXRoIHN1cHBvcnRcbiAgICBpZiAodHlwZW9mIHVyaSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBpZiAoXCIvXCIgPT09IHVyaS5jaGFyQXQoMCkpIHtcbiAgICAgICAgICAgIGlmIChcIi9cIiA9PT0gdXJpLmNoYXJBdCgxKSkge1xuICAgICAgICAgICAgICAgIHVyaSA9IGxvYy5wcm90b2NvbCArIHVyaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHVyaSA9IGxvYy5ob3N0ICsgdXJpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghL14oaHR0cHM/fHdzcz8pOlxcL1xcLy8udGVzdCh1cmkpKSB7XG4gICAgICAgICAgICBkZWJ1ZyhcInByb3RvY29sLWxlc3MgdXJsICVzXCIsIHVyaSk7XG4gICAgICAgICAgICBpZiAoXCJ1bmRlZmluZWRcIiAhPT0gdHlwZW9mIGxvYykge1xuICAgICAgICAgICAgICAgIHVyaSA9IGxvYy5wcm90b2NvbCArIFwiLy9cIiArIHVyaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHVyaSA9IFwiaHR0cHM6Ly9cIiArIHVyaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBwYXJzZVxuICAgICAgICBkZWJ1ZyhcInBhcnNlICVzXCIsIHVyaSk7XG4gICAgICAgIG9iaiA9IHBhcnNldXJpKHVyaSk7XG4gICAgfVxuICAgIC8vIG1ha2Ugc3VyZSB3ZSB0cmVhdCBgbG9jYWxob3N0OjgwYCBhbmQgYGxvY2FsaG9zdGAgZXF1YWxseVxuICAgIGlmICghb2JqLnBvcnQpIHtcbiAgICAgICAgaWYgKC9eKGh0dHB8d3MpJC8udGVzdChvYmoucHJvdG9jb2wpKSB7XG4gICAgICAgICAgICBvYmoucG9ydCA9IFwiODBcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICgvXihodHRwfHdzKXMkLy50ZXN0KG9iai5wcm90b2NvbCkpIHtcbiAgICAgICAgICAgIG9iai5wb3J0ID0gXCI0NDNcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBvYmoucGF0aCA9IG9iai5wYXRoIHx8IFwiL1wiO1xuICAgIGNvbnN0IGlwdjYgPSBvYmouaG9zdC5pbmRleE9mKFwiOlwiKSAhPT0gLTE7XG4gICAgY29uc3QgaG9zdCA9IGlwdjYgPyBcIltcIiArIG9iai5ob3N0ICsgXCJdXCIgOiBvYmouaG9zdDtcbiAgICAvLyBkZWZpbmUgdW5pcXVlIGlkXG4gICAgb2JqLmlkID0gb2JqLnByb3RvY29sICsgXCI6Ly9cIiArIGhvc3QgKyBcIjpcIiArIG9iai5wb3J0ICsgcGF0aDtcbiAgICAvLyBkZWZpbmUgaHJlZlxuICAgIG9iai5ocmVmID1cbiAgICAgICAgb2JqLnByb3RvY29sICtcbiAgICAgICAgICAgIFwiOi8vXCIgK1xuICAgICAgICAgICAgaG9zdCArXG4gICAgICAgICAgICAobG9jICYmIGxvYy5wb3J0ID09PSBvYmoucG9ydCA/IFwiXCIgOiBcIjpcIiArIG9iai5wb3J0KTtcbiAgICByZXR1cm4gb2JqO1xufVxuZXhwb3J0cy51cmwgPSB1cmw7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMucmVjb25zdHJ1Y3RQYWNrZXQgPSBleHBvcnRzLmRlY29uc3RydWN0UGFja2V0ID0gdm9pZCAwO1xuY29uc3QgaXNfYmluYXJ5XzEgPSByZXF1aXJlKFwiLi9pcy1iaW5hcnlcIik7XG4vKipcbiAqIFJlcGxhY2VzIGV2ZXJ5IEJ1ZmZlciB8IEFycmF5QnVmZmVyIHwgQmxvYiB8IEZpbGUgaW4gcGFja2V0IHdpdGggYSBudW1iZXJlZCBwbGFjZWhvbGRlci5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcGFja2V0IC0gc29ja2V0LmlvIGV2ZW50IHBhY2tldFxuICogQHJldHVybiB7T2JqZWN0fSB3aXRoIGRlY29uc3RydWN0ZWQgcGFja2V0IGFuZCBsaXN0IG9mIGJ1ZmZlcnNcbiAqIEBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gZGVjb25zdHJ1Y3RQYWNrZXQocGFja2V0KSB7XG4gICAgY29uc3QgYnVmZmVycyA9IFtdO1xuICAgIGNvbnN0IHBhY2tldERhdGEgPSBwYWNrZXQuZGF0YTtcbiAgICBjb25zdCBwYWNrID0gcGFja2V0O1xuICAgIHBhY2suZGF0YSA9IF9kZWNvbnN0cnVjdFBhY2tldChwYWNrZXREYXRhLCBidWZmZXJzKTtcbiAgICBwYWNrLmF0dGFjaG1lbnRzID0gYnVmZmVycy5sZW5ndGg7IC8vIG51bWJlciBvZiBiaW5hcnkgJ2F0dGFjaG1lbnRzJ1xuICAgIHJldHVybiB7IHBhY2tldDogcGFjaywgYnVmZmVyczogYnVmZmVycyB9O1xufVxuZXhwb3J0cy5kZWNvbnN0cnVjdFBhY2tldCA9IGRlY29uc3RydWN0UGFja2V0O1xuZnVuY3Rpb24gX2RlY29uc3RydWN0UGFja2V0KGRhdGEsIGJ1ZmZlcnMpIHtcbiAgICBpZiAoIWRhdGEpXG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIGlmIChpc19iaW5hcnlfMS5pc0JpbmFyeShkYXRhKSkge1xuICAgICAgICBjb25zdCBwbGFjZWhvbGRlciA9IHsgX3BsYWNlaG9sZGVyOiB0cnVlLCBudW06IGJ1ZmZlcnMubGVuZ3RoIH07XG4gICAgICAgIGJ1ZmZlcnMucHVzaChkYXRhKTtcbiAgICAgICAgcmV0dXJuIHBsYWNlaG9sZGVyO1xuICAgIH1cbiAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICAgIGNvbnN0IG5ld0RhdGEgPSBuZXcgQXJyYXkoZGF0YS5sZW5ndGgpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIG5ld0RhdGFbaV0gPSBfZGVjb25zdHJ1Y3RQYWNrZXQoZGF0YVtpXSwgYnVmZmVycyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ld0RhdGE7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiBkYXRhID09PSBcIm9iamVjdFwiICYmICEoZGF0YSBpbnN0YW5jZW9mIERhdGUpKSB7XG4gICAgICAgIGNvbnN0IG5ld0RhdGEgPSB7fTtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gZGF0YSkge1xuICAgICAgICAgICAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIG5ld0RhdGFba2V5XSA9IF9kZWNvbnN0cnVjdFBhY2tldChkYXRhW2tleV0sIGJ1ZmZlcnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdEYXRhO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbn1cbi8qKlxuICogUmVjb25zdHJ1Y3RzIGEgYmluYXJ5IHBhY2tldCBmcm9tIGl0cyBwbGFjZWhvbGRlciBwYWNrZXQgYW5kIGJ1ZmZlcnNcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcGFja2V0IC0gZXZlbnQgcGFja2V0IHdpdGggcGxhY2Vob2xkZXJzXG4gKiBAcGFyYW0ge0FycmF5fSBidWZmZXJzIC0gYmluYXJ5IGJ1ZmZlcnMgdG8gcHV0IGluIHBsYWNlaG9sZGVyIHBvc2l0aW9uc1xuICogQHJldHVybiB7T2JqZWN0fSByZWNvbnN0cnVjdGVkIHBhY2tldFxuICogQHB1YmxpY1xuICovXG5mdW5jdGlvbiByZWNvbnN0cnVjdFBhY2tldChwYWNrZXQsIGJ1ZmZlcnMpIHtcbiAgICBwYWNrZXQuZGF0YSA9IF9yZWNvbnN0cnVjdFBhY2tldChwYWNrZXQuZGF0YSwgYnVmZmVycyk7XG4gICAgcGFja2V0LmF0dGFjaG1lbnRzID0gdW5kZWZpbmVkOyAvLyBubyBsb25nZXIgdXNlZnVsXG4gICAgcmV0dXJuIHBhY2tldDtcbn1cbmV4cG9ydHMucmVjb25zdHJ1Y3RQYWNrZXQgPSByZWNvbnN0cnVjdFBhY2tldDtcbmZ1bmN0aW9uIF9yZWNvbnN0cnVjdFBhY2tldChkYXRhLCBidWZmZXJzKSB7XG4gICAgaWYgKCFkYXRhKVxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICBpZiAoZGF0YSAmJiBkYXRhLl9wbGFjZWhvbGRlcikge1xuICAgICAgICByZXR1cm4gYnVmZmVyc1tkYXRhLm51bV07IC8vIGFwcHJvcHJpYXRlIGJ1ZmZlciAoc2hvdWxkIGJlIG5hdHVyYWwgb3JkZXIgYW55d2F5KVxuICAgIH1cbiAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZGF0YVtpXSA9IF9yZWNvbnN0cnVjdFBhY2tldChkYXRhW2ldLCBidWZmZXJzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgZGF0YSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBkYXRhKSB7XG4gICAgICAgICAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgZGF0YVtrZXldID0gX3JlY29uc3RydWN0UGFja2V0KGRhdGFba2V5XSwgYnVmZmVycyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuRGVjb2RlciA9IGV4cG9ydHMuRW5jb2RlciA9IGV4cG9ydHMuUGFja2V0VHlwZSA9IGV4cG9ydHMucHJvdG9jb2wgPSB2b2lkIDA7XG5jb25zdCBFbWl0dGVyID0gcmVxdWlyZShcImNvbXBvbmVudC1lbWl0dGVyXCIpO1xuY29uc3QgYmluYXJ5XzEgPSByZXF1aXJlKFwiLi9iaW5hcnlcIik7XG5jb25zdCBpc19iaW5hcnlfMSA9IHJlcXVpcmUoXCIuL2lzLWJpbmFyeVwiKTtcbmNvbnN0IGRlYnVnID0gcmVxdWlyZShcImRlYnVnXCIpKFwic29ja2V0LmlvLXBhcnNlclwiKTtcbi8qKlxuICogUHJvdG9jb2wgdmVyc2lvbi5cbiAqXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydHMucHJvdG9jb2wgPSA1O1xudmFyIFBhY2tldFR5cGU7XG4oZnVuY3Rpb24gKFBhY2tldFR5cGUpIHtcbiAgICBQYWNrZXRUeXBlW1BhY2tldFR5cGVbXCJDT05ORUNUXCJdID0gMF0gPSBcIkNPTk5FQ1RcIjtcbiAgICBQYWNrZXRUeXBlW1BhY2tldFR5cGVbXCJESVNDT05ORUNUXCJdID0gMV0gPSBcIkRJU0NPTk5FQ1RcIjtcbiAgICBQYWNrZXRUeXBlW1BhY2tldFR5cGVbXCJFVkVOVFwiXSA9IDJdID0gXCJFVkVOVFwiO1xuICAgIFBhY2tldFR5cGVbUGFja2V0VHlwZVtcIkFDS1wiXSA9IDNdID0gXCJBQ0tcIjtcbiAgICBQYWNrZXRUeXBlW1BhY2tldFR5cGVbXCJDT05ORUNUX0VSUk9SXCJdID0gNF0gPSBcIkNPTk5FQ1RfRVJST1JcIjtcbiAgICBQYWNrZXRUeXBlW1BhY2tldFR5cGVbXCJCSU5BUllfRVZFTlRcIl0gPSA1XSA9IFwiQklOQVJZX0VWRU5UXCI7XG4gICAgUGFja2V0VHlwZVtQYWNrZXRUeXBlW1wiQklOQVJZX0FDS1wiXSA9IDZdID0gXCJCSU5BUllfQUNLXCI7XG59KShQYWNrZXRUeXBlID0gZXhwb3J0cy5QYWNrZXRUeXBlIHx8IChleHBvcnRzLlBhY2tldFR5cGUgPSB7fSkpO1xuLyoqXG4gKiBBIHNvY2tldC5pbyBFbmNvZGVyIGluc3RhbmNlXG4gKi9cbmNsYXNzIEVuY29kZXIge1xuICAgIC8qKlxuICAgICAqIEVuY29kZSBhIHBhY2tldCBhcyBhIHNpbmdsZSBzdHJpbmcgaWYgbm9uLWJpbmFyeSwgb3IgYXMgYVxuICAgICAqIGJ1ZmZlciBzZXF1ZW5jZSwgZGVwZW5kaW5nIG9uIHBhY2tldCB0eXBlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9iaiAtIHBhY2tldCBvYmplY3RcbiAgICAgKi9cbiAgICBlbmNvZGUob2JqKSB7XG4gICAgICAgIGRlYnVnKFwiZW5jb2RpbmcgcGFja2V0ICVqXCIsIG9iaik7XG4gICAgICAgIGlmIChvYmoudHlwZSA9PT0gUGFja2V0VHlwZS5FVkVOVCB8fCBvYmoudHlwZSA9PT0gUGFja2V0VHlwZS5BQ0spIHtcbiAgICAgICAgICAgIGlmIChpc19iaW5hcnlfMS5oYXNCaW5hcnkob2JqKSkge1xuICAgICAgICAgICAgICAgIG9iai50eXBlID1cbiAgICAgICAgICAgICAgICAgICAgb2JqLnR5cGUgPT09IFBhY2tldFR5cGUuRVZFTlRcbiAgICAgICAgICAgICAgICAgICAgICAgID8gUGFja2V0VHlwZS5CSU5BUllfRVZFTlRcbiAgICAgICAgICAgICAgICAgICAgICAgIDogUGFja2V0VHlwZS5CSU5BUllfQUNLO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmVuY29kZUFzQmluYXJ5KG9iaik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFt0aGlzLmVuY29kZUFzU3RyaW5nKG9iaildO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBFbmNvZGUgcGFja2V0IGFzIHN0cmluZy5cbiAgICAgKi9cbiAgICBlbmNvZGVBc1N0cmluZyhvYmopIHtcbiAgICAgICAgLy8gZmlyc3QgaXMgdHlwZVxuICAgICAgICBsZXQgc3RyID0gXCJcIiArIG9iai50eXBlO1xuICAgICAgICAvLyBhdHRhY2htZW50cyBpZiB3ZSBoYXZlIHRoZW1cbiAgICAgICAgaWYgKG9iai50eXBlID09PSBQYWNrZXRUeXBlLkJJTkFSWV9FVkVOVCB8fFxuICAgICAgICAgICAgb2JqLnR5cGUgPT09IFBhY2tldFR5cGUuQklOQVJZX0FDSykge1xuICAgICAgICAgICAgc3RyICs9IG9iai5hdHRhY2htZW50cyArIFwiLVwiO1xuICAgICAgICB9XG4gICAgICAgIC8vIGlmIHdlIGhhdmUgYSBuYW1lc3BhY2Ugb3RoZXIgdGhhbiBgL2BcbiAgICAgICAgLy8gd2UgYXBwZW5kIGl0IGZvbGxvd2VkIGJ5IGEgY29tbWEgYCxgXG4gICAgICAgIGlmIChvYmoubnNwICYmIFwiL1wiICE9PSBvYmoubnNwKSB7XG4gICAgICAgICAgICBzdHIgKz0gb2JqLm5zcCArIFwiLFwiO1xuICAgICAgICB9XG4gICAgICAgIC8vIGltbWVkaWF0ZWx5IGZvbGxvd2VkIGJ5IHRoZSBpZFxuICAgICAgICBpZiAobnVsbCAhPSBvYmouaWQpIHtcbiAgICAgICAgICAgIHN0ciArPSBvYmouaWQ7XG4gICAgICAgIH1cbiAgICAgICAgLy8ganNvbiBkYXRhXG4gICAgICAgIGlmIChudWxsICE9IG9iai5kYXRhKSB7XG4gICAgICAgICAgICBzdHIgKz0gSlNPTi5zdHJpbmdpZnkob2JqLmRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGRlYnVnKFwiZW5jb2RlZCAlaiBhcyAlc1wiLCBvYmosIHN0cik7XG4gICAgICAgIHJldHVybiBzdHI7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEVuY29kZSBwYWNrZXQgYXMgJ2J1ZmZlciBzZXF1ZW5jZScgYnkgcmVtb3ZpbmcgYmxvYnMsIGFuZFxuICAgICAqIGRlY29uc3RydWN0aW5nIHBhY2tldCBpbnRvIG9iamVjdCB3aXRoIHBsYWNlaG9sZGVycyBhbmRcbiAgICAgKiBhIGxpc3Qgb2YgYnVmZmVycy5cbiAgICAgKi9cbiAgICBlbmNvZGVBc0JpbmFyeShvYmopIHtcbiAgICAgICAgY29uc3QgZGVjb25zdHJ1Y3Rpb24gPSBiaW5hcnlfMS5kZWNvbnN0cnVjdFBhY2tldChvYmopO1xuICAgICAgICBjb25zdCBwYWNrID0gdGhpcy5lbmNvZGVBc1N0cmluZyhkZWNvbnN0cnVjdGlvbi5wYWNrZXQpO1xuICAgICAgICBjb25zdCBidWZmZXJzID0gZGVjb25zdHJ1Y3Rpb24uYnVmZmVycztcbiAgICAgICAgYnVmZmVycy51bnNoaWZ0KHBhY2spOyAvLyBhZGQgcGFja2V0IGluZm8gdG8gYmVnaW5uaW5nIG9mIGRhdGEgbGlzdFxuICAgICAgICByZXR1cm4gYnVmZmVyczsgLy8gd3JpdGUgYWxsIHRoZSBidWZmZXJzXG4gICAgfVxufVxuZXhwb3J0cy5FbmNvZGVyID0gRW5jb2Rlcjtcbi8qKlxuICogQSBzb2NrZXQuaW8gRGVjb2RlciBpbnN0YW5jZVxuICpcbiAqIEByZXR1cm4ge09iamVjdH0gZGVjb2RlclxuICovXG5jbGFzcyBEZWNvZGVyIGV4dGVuZHMgRW1pdHRlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERlY29kZXMgYW4gZW5jb2RlZCBwYWNrZXQgc3RyaW5nIGludG8gcGFja2V0IEpTT04uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2JqIC0gZW5jb2RlZCBwYWNrZXRcbiAgICAgKi9cbiAgICBhZGQob2JqKSB7XG4gICAgICAgIGxldCBwYWNrZXQ7XG4gICAgICAgIGlmICh0eXBlb2Ygb2JqID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBwYWNrZXQgPSB0aGlzLmRlY29kZVN0cmluZyhvYmopO1xuICAgICAgICAgICAgaWYgKHBhY2tldC50eXBlID09PSBQYWNrZXRUeXBlLkJJTkFSWV9FVkVOVCB8fFxuICAgICAgICAgICAgICAgIHBhY2tldC50eXBlID09PSBQYWNrZXRUeXBlLkJJTkFSWV9BQ0spIHtcbiAgICAgICAgICAgICAgICAvLyBiaW5hcnkgcGFja2V0J3MganNvblxuICAgICAgICAgICAgICAgIHRoaXMucmVjb25zdHJ1Y3RvciA9IG5ldyBCaW5hcnlSZWNvbnN0cnVjdG9yKHBhY2tldCk7XG4gICAgICAgICAgICAgICAgLy8gbm8gYXR0YWNobWVudHMsIGxhYmVsZWQgYmluYXJ5IGJ1dCBubyBiaW5hcnkgZGF0YSB0byBmb2xsb3dcbiAgICAgICAgICAgICAgICBpZiAocGFja2V0LmF0dGFjaG1lbnRzID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1cGVyLmVtaXQoXCJkZWNvZGVkXCIsIHBhY2tldCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gbm9uLWJpbmFyeSBmdWxsIHBhY2tldFxuICAgICAgICAgICAgICAgIHN1cGVyLmVtaXQoXCJkZWNvZGVkXCIsIHBhY2tldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNfYmluYXJ5XzEuaXNCaW5hcnkob2JqKSB8fCBvYmouYmFzZTY0KSB7XG4gICAgICAgICAgICAvLyByYXcgYmluYXJ5IGRhdGFcbiAgICAgICAgICAgIGlmICghdGhpcy5yZWNvbnN0cnVjdG9yKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZ290IGJpbmFyeSBkYXRhIHdoZW4gbm90IHJlY29uc3RydWN0aW5nIGEgcGFja2V0XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFja2V0ID0gdGhpcy5yZWNvbnN0cnVjdG9yLnRha2VCaW5hcnlEYXRhKG9iaik7XG4gICAgICAgICAgICAgICAgaWYgKHBhY2tldCkge1xuICAgICAgICAgICAgICAgICAgICAvLyByZWNlaXZlZCBmaW5hbCBidWZmZXJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWNvbnN0cnVjdG9yID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgc3VwZXIuZW1pdChcImRlY29kZWRcIiwgcGFja2V0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmtub3duIHR5cGU6IFwiICsgb2JqKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBEZWNvZGUgYSBwYWNrZXQgU3RyaW5nIChKU09OIGRhdGEpXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gICAgICogQHJldHVybiB7T2JqZWN0fSBwYWNrZXRcbiAgICAgKi9cbiAgICBkZWNvZGVTdHJpbmcoc3RyKSB7XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgLy8gbG9vayB1cCB0eXBlXG4gICAgICAgIGNvbnN0IHAgPSB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIoc3RyLmNoYXJBdCgwKSksXG4gICAgICAgIH07XG4gICAgICAgIGlmIChQYWNrZXRUeXBlW3AudHlwZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidW5rbm93biBwYWNrZXQgdHlwZSBcIiArIHAudHlwZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gbG9vayB1cCBhdHRhY2htZW50cyBpZiB0eXBlIGJpbmFyeVxuICAgICAgICBpZiAocC50eXBlID09PSBQYWNrZXRUeXBlLkJJTkFSWV9FVkVOVCB8fFxuICAgICAgICAgICAgcC50eXBlID09PSBQYWNrZXRUeXBlLkJJTkFSWV9BQ0spIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gaSArIDE7XG4gICAgICAgICAgICB3aGlsZSAoc3RyLmNoYXJBdCgrK2kpICE9PSBcIi1cIiAmJiBpICE9IHN0ci5sZW5ndGgpIHsgfVxuICAgICAgICAgICAgY29uc3QgYnVmID0gc3RyLnN1YnN0cmluZyhzdGFydCwgaSk7XG4gICAgICAgICAgICBpZiAoYnVmICE9IE51bWJlcihidWYpIHx8IHN0ci5jaGFyQXQoaSkgIT09IFwiLVwiKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSWxsZWdhbCBhdHRhY2htZW50c1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHAuYXR0YWNobWVudHMgPSBOdW1iZXIoYnVmKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBsb29rIHVwIG5hbWVzcGFjZSAoaWYgYW55KVxuICAgICAgICBpZiAoXCIvXCIgPT09IHN0ci5jaGFyQXQoaSArIDEpKSB7XG4gICAgICAgICAgICBjb25zdCBzdGFydCA9IGkgKyAxO1xuICAgICAgICAgICAgd2hpbGUgKCsraSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGMgPSBzdHIuY2hhckF0KGkpO1xuICAgICAgICAgICAgICAgIGlmIChcIixcIiA9PT0gYylcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgaWYgKGkgPT09IHN0ci5sZW5ndGgpXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcC5uc3AgPSBzdHIuc3Vic3RyaW5nKHN0YXJ0LCBpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHAubnNwID0gXCIvXCI7XG4gICAgICAgIH1cbiAgICAgICAgLy8gbG9vayB1cCBpZFxuICAgICAgICBjb25zdCBuZXh0ID0gc3RyLmNoYXJBdChpICsgMSk7XG4gICAgICAgIGlmIChcIlwiICE9PSBuZXh0ICYmIE51bWJlcihuZXh0KSA9PSBuZXh0KSB7XG4gICAgICAgICAgICBjb25zdCBzdGFydCA9IGkgKyAxO1xuICAgICAgICAgICAgd2hpbGUgKCsraSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGMgPSBzdHIuY2hhckF0KGkpO1xuICAgICAgICAgICAgICAgIGlmIChudWxsID09IGMgfHwgTnVtYmVyKGMpICE9IGMpIHtcbiAgICAgICAgICAgICAgICAgICAgLS1pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGkgPT09IHN0ci5sZW5ndGgpXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcC5pZCA9IE51bWJlcihzdHIuc3Vic3RyaW5nKHN0YXJ0LCBpICsgMSkpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGxvb2sgdXAganNvbiBkYXRhXG4gICAgICAgIGlmIChzdHIuY2hhckF0KCsraSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHBheWxvYWQgPSB0cnlQYXJzZShzdHIuc3Vic3RyKGkpKTtcbiAgICAgICAgICAgIGlmIChEZWNvZGVyLmlzUGF5bG9hZFZhbGlkKHAudHlwZSwgcGF5bG9hZCkpIHtcbiAgICAgICAgICAgICAgICBwLmRhdGEgPSBwYXlsb2FkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaW52YWxpZCBwYXlsb2FkXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGRlYnVnKFwiZGVjb2RlZCAlcyBhcyAlalwiLCBzdHIsIHApO1xuICAgICAgICByZXR1cm4gcDtcbiAgICB9XG4gICAgc3RhdGljIGlzUGF5bG9hZFZhbGlkKHR5cGUsIHBheWxvYWQpIHtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlIFBhY2tldFR5cGUuQ09OTkVDVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gdHlwZW9mIHBheWxvYWQgPT09IFwib2JqZWN0XCI7XG4gICAgICAgICAgICBjYXNlIFBhY2tldFR5cGUuRElTQ09OTkVDVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gcGF5bG9hZCA9PT0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgY2FzZSBQYWNrZXRUeXBlLkNPTk5FQ1RfRVJST1I6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiBwYXlsb2FkID09PSBcInN0cmluZ1wiIHx8IHR5cGVvZiBwYXlsb2FkID09PSBcIm9iamVjdFwiO1xuICAgICAgICAgICAgY2FzZSBQYWNrZXRUeXBlLkVWRU5UOlxuICAgICAgICAgICAgY2FzZSBQYWNrZXRUeXBlLkJJTkFSWV9FVkVOVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gQXJyYXkuaXNBcnJheShwYXlsb2FkKSAmJiBwYXlsb2FkLmxlbmd0aCA+IDA7XG4gICAgICAgICAgICBjYXNlIFBhY2tldFR5cGUuQUNLOlxuICAgICAgICAgICAgY2FzZSBQYWNrZXRUeXBlLkJJTkFSWV9BQ0s6XG4gICAgICAgICAgICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkocGF5bG9hZCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogRGVhbGxvY2F0ZXMgYSBwYXJzZXIncyByZXNvdXJjZXNcbiAgICAgKi9cbiAgICBkZXN0cm95KCkge1xuICAgICAgICBpZiAodGhpcy5yZWNvbnN0cnVjdG9yKSB7XG4gICAgICAgICAgICB0aGlzLnJlY29uc3RydWN0b3IuZmluaXNoZWRSZWNvbnN0cnVjdGlvbigpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5EZWNvZGVyID0gRGVjb2RlcjtcbmZ1bmN0aW9uIHRyeVBhcnNlKHN0cikge1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKHN0cik7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG4vKipcbiAqIEEgbWFuYWdlciBvZiBhIGJpbmFyeSBldmVudCdzICdidWZmZXIgc2VxdWVuY2UnLiBTaG91bGRcbiAqIGJlIGNvbnN0cnVjdGVkIHdoZW5ldmVyIGEgcGFja2V0IG9mIHR5cGUgQklOQVJZX0VWRU5UIGlzXG4gKiBkZWNvZGVkLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYWNrZXRcbiAqIEByZXR1cm4ge0JpbmFyeVJlY29uc3RydWN0b3J9IGluaXRpYWxpemVkIHJlY29uc3RydWN0b3JcbiAqL1xuY2xhc3MgQmluYXJ5UmVjb25zdHJ1Y3RvciB7XG4gICAgY29uc3RydWN0b3IocGFja2V0KSB7XG4gICAgICAgIHRoaXMucGFja2V0ID0gcGFja2V0O1xuICAgICAgICB0aGlzLmJ1ZmZlcnMgPSBbXTtcbiAgICAgICAgdGhpcy5yZWNvblBhY2sgPSBwYWNrZXQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE1ldGhvZCB0byBiZSBjYWxsZWQgd2hlbiBiaW5hcnkgZGF0YSByZWNlaXZlZCBmcm9tIGNvbm5lY3Rpb25cbiAgICAgKiBhZnRlciBhIEJJTkFSWV9FVkVOVCBwYWNrZXQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0J1ZmZlciB8IEFycmF5QnVmZmVyfSBiaW5EYXRhIC0gdGhlIHJhdyBiaW5hcnkgZGF0YSByZWNlaXZlZFxuICAgICAqIEByZXR1cm4ge251bGwgfCBPYmplY3R9IHJldHVybnMgbnVsbCBpZiBtb3JlIGJpbmFyeSBkYXRhIGlzIGV4cGVjdGVkIG9yXG4gICAgICogICBhIHJlY29uc3RydWN0ZWQgcGFja2V0IG9iamVjdCBpZiBhbGwgYnVmZmVycyBoYXZlIGJlZW4gcmVjZWl2ZWQuXG4gICAgICovXG4gICAgdGFrZUJpbmFyeURhdGEoYmluRGF0YSkge1xuICAgICAgICB0aGlzLmJ1ZmZlcnMucHVzaChiaW5EYXRhKTtcbiAgICAgICAgaWYgKHRoaXMuYnVmZmVycy5sZW5ndGggPT09IHRoaXMucmVjb25QYWNrLmF0dGFjaG1lbnRzKSB7XG4gICAgICAgICAgICAvLyBkb25lIHdpdGggYnVmZmVyIGxpc3RcbiAgICAgICAgICAgIGNvbnN0IHBhY2tldCA9IGJpbmFyeV8xLnJlY29uc3RydWN0UGFja2V0KHRoaXMucmVjb25QYWNrLCB0aGlzLmJ1ZmZlcnMpO1xuICAgICAgICAgICAgdGhpcy5maW5pc2hlZFJlY29uc3RydWN0aW9uKCk7XG4gICAgICAgICAgICByZXR1cm4gcGFja2V0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDbGVhbnMgdXAgYmluYXJ5IHBhY2tldCByZWNvbnN0cnVjdGlvbiB2YXJpYWJsZXMuXG4gICAgICovXG4gICAgZmluaXNoZWRSZWNvbnN0cnVjdGlvbigpIHtcbiAgICAgICAgdGhpcy5yZWNvblBhY2sgPSBudWxsO1xuICAgICAgICB0aGlzLmJ1ZmZlcnMgPSBbXTtcbiAgICB9XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuaGFzQmluYXJ5ID0gZXhwb3J0cy5pc0JpbmFyeSA9IHZvaWQgMDtcbmNvbnN0IHdpdGhOYXRpdmVBcnJheUJ1ZmZlciA9IHR5cGVvZiBBcnJheUJ1ZmZlciA9PT0gXCJmdW5jdGlvblwiO1xuY29uc3QgaXNWaWV3ID0gKG9iaikgPT4ge1xuICAgIHJldHVybiB0eXBlb2YgQXJyYXlCdWZmZXIuaXNWaWV3ID09PSBcImZ1bmN0aW9uXCJcbiAgICAgICAgPyBBcnJheUJ1ZmZlci5pc1ZpZXcob2JqKVxuICAgICAgICA6IG9iai5idWZmZXIgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcjtcbn07XG5jb25zdCB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5jb25zdCB3aXRoTmF0aXZlQmxvYiA9IHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgfHxcbiAgICAodHlwZW9mIEJsb2IgIT09IFwidW5kZWZpbmVkXCIgJiZcbiAgICAgICAgdG9TdHJpbmcuY2FsbChCbG9iKSA9PT0gXCJbb2JqZWN0IEJsb2JDb25zdHJ1Y3Rvcl1cIik7XG5jb25zdCB3aXRoTmF0aXZlRmlsZSA9IHR5cGVvZiBGaWxlID09PSBcImZ1bmN0aW9uXCIgfHxcbiAgICAodHlwZW9mIEZpbGUgIT09IFwidW5kZWZpbmVkXCIgJiZcbiAgICAgICAgdG9TdHJpbmcuY2FsbChGaWxlKSA9PT0gXCJbb2JqZWN0IEZpbGVDb25zdHJ1Y3Rvcl1cIik7XG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiBvYmogaXMgYSBCdWZmZXIsIGFuIEFycmF5QnVmZmVyLCBhIEJsb2Igb3IgYSBGaWxlLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGlzQmluYXJ5KG9iaikge1xuICAgIHJldHVybiAoKHdpdGhOYXRpdmVBcnJheUJ1ZmZlciAmJiAob2JqIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIgfHwgaXNWaWV3KG9iaikpKSB8fFxuICAgICAgICAod2l0aE5hdGl2ZUJsb2IgJiYgb2JqIGluc3RhbmNlb2YgQmxvYikgfHxcbiAgICAgICAgKHdpdGhOYXRpdmVGaWxlICYmIG9iaiBpbnN0YW5jZW9mIEZpbGUpKTtcbn1cbmV4cG9ydHMuaXNCaW5hcnkgPSBpc0JpbmFyeTtcbmZ1bmN0aW9uIGhhc0JpbmFyeShvYmosIHRvSlNPTikge1xuICAgIGlmICghb2JqIHx8IHR5cGVvZiBvYmogIT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoQXJyYXkuaXNBcnJheShvYmopKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gb2JqLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgaWYgKGhhc0JpbmFyeShvYmpbaV0pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoaXNCaW5hcnkob2JqKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKG9iai50b0pTT04gJiZcbiAgICAgICAgdHlwZW9mIG9iai50b0pTT04gPT09IFwiZnVuY3Rpb25cIiAmJlxuICAgICAgICBhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHJldHVybiBoYXNCaW5hcnkob2JqLnRvSlNPTigpLCB0cnVlKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBrZXkgaW4gb2JqKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpICYmIGhhc0JpbmFyeShvYmpba2V5XSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbmV4cG9ydHMuaGFzQmluYXJ5ID0gaGFzQmluYXJ5O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYWxwaGFiZXQgPSAnMDEyMzQ1Njc4OUFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXotXycuc3BsaXQoJycpXG4gICwgbGVuZ3RoID0gNjRcbiAgLCBtYXAgPSB7fVxuICAsIHNlZWQgPSAwXG4gICwgaSA9IDBcbiAgLCBwcmV2O1xuXG4vKipcbiAqIFJldHVybiBhIHN0cmluZyByZXByZXNlbnRpbmcgdGhlIHNwZWNpZmllZCBudW1iZXIuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IG51bSBUaGUgbnVtYmVyIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBudW1iZXIuXG4gKiBAYXBpIHB1YmxpY1xuICovXG5mdW5jdGlvbiBlbmNvZGUobnVtKSB7XG4gIHZhciBlbmNvZGVkID0gJyc7XG5cbiAgZG8ge1xuICAgIGVuY29kZWQgPSBhbHBoYWJldFtudW0gJSBsZW5ndGhdICsgZW5jb2RlZDtcbiAgICBudW0gPSBNYXRoLmZsb29yKG51bSAvIGxlbmd0aCk7XG4gIH0gd2hpbGUgKG51bSA+IDApO1xuXG4gIHJldHVybiBlbmNvZGVkO1xufVxuXG4vKipcbiAqIFJldHVybiB0aGUgaW50ZWdlciB2YWx1ZSBzcGVjaWZpZWQgYnkgdGhlIGdpdmVuIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyIFRoZSBzdHJpbmcgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtOdW1iZXJ9IFRoZSBpbnRlZ2VyIHZhbHVlIHJlcHJlc2VudGVkIGJ5IHRoZSBzdHJpbmcuXG4gKiBAYXBpIHB1YmxpY1xuICovXG5mdW5jdGlvbiBkZWNvZGUoc3RyKSB7XG4gIHZhciBkZWNvZGVkID0gMDtcblxuICBmb3IgKGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgZGVjb2RlZCA9IGRlY29kZWQgKiBsZW5ndGggKyBtYXBbc3RyLmNoYXJBdChpKV07XG4gIH1cblxuICByZXR1cm4gZGVjb2RlZDtcbn1cblxuLyoqXG4gKiBZZWFzdDogQSB0aW55IGdyb3dpbmcgaWQgZ2VuZXJhdG9yLlxuICpcbiAqIEByZXR1cm5zIHtTdHJpbmd9IEEgdW5pcXVlIGlkLlxuICogQGFwaSBwdWJsaWNcbiAqL1xuZnVuY3Rpb24geWVhc3QoKSB7XG4gIHZhciBub3cgPSBlbmNvZGUoK25ldyBEYXRlKCkpO1xuXG4gIGlmIChub3cgIT09IHByZXYpIHJldHVybiBzZWVkID0gMCwgcHJldiA9IG5vdztcbiAgcmV0dXJuIG5vdyArJy4nKyBlbmNvZGUoc2VlZCsrKTtcbn1cblxuLy9cbi8vIE1hcCBlYWNoIGNoYXJhY3RlciB0byBpdHMgaW5kZXguXG4vL1xuZm9yICg7IGkgPCBsZW5ndGg7IGkrKykgbWFwW2FscGhhYmV0W2ldXSA9IGk7XG5cbi8vXG4vLyBFeHBvc2UgdGhlIGB5ZWFzdGAsIGBlbmNvZGVgIGFuZCBgZGVjb2RlYCBmdW5jdGlvbnMuXG4vL1xueWVhc3QuZW5jb2RlID0gZW5jb2RlO1xueWVhc3QuZGVjb2RlID0gZGVjb2RlO1xubW9kdWxlLmV4cG9ydHMgPSB5ZWFzdDtcbiIsImltcG9ydCB7ICQgfSBmcm9tICcuL2NvcmUvbGliL2RvbSc7XG5pbXBvcnQgeyBwYXJlbnRzLCBmYWRlT3V0IH0gZnJvbSAnLi9jb3JlL2xpYi9kb20nO1xuaW1wb3J0IHsgcGxheWVyUmVmIH0gZnJvbSAnLi9kYXRhJ1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0VUkoc29ja2V0KSB7XG4gIC8vIHN0YXR1c1xuICBsZXQgZ2FtZUNyZWF0ZWQsIGpvaW5lZCwgbmFtZUNvbmZpcm1lZCwgZ2FtZVN0YXJ0ZWQ7XG4gIC8vIHF1ZXJ5IEVsZW1lbnRzXG4gIGxldCBjcmVhdGVHYW1lQnRuID0gJCgnI2NyZWF0ZS1nYW1lJyk7ICAvLyAgYmluZEV2ZW50IDogZ2FtZUNyZWF0ZWRcbiAgbGV0IHNob3dKb2luR2FtZVByb21wdEJ0biA9ICQoJyNzaG93LWpvaW4tZ2FtZS1wcm9tcHQnKTsgLy8gIGJpbmRFdmVudFxuICBsZXQgY29uZmlybUpvaW5HYW1lQnRuID0gJCgnI2NvbmZpcm0tam9pbi1nYW1lJyk7IC8vICBiaW5kRXZlbnQ6IGpvaW5lZFxuICBsZXQgcm9vbUNvZGVJbnB1dCA9ICQoJyNyb29tLWNvZGUtaW5wdXQnKTtcbiAgbGV0IHJvb21Db2RlRGlzcGxheSA9ICQoJyNyb29tLWNvZGUtZGlzcGxheScpO1xuICBsZXQgbmFtZUlucHV0ID0gJCgnI25hbWUtaW5wdXQnKTtcbiAgbGV0IG5hbWVDb25maXJtID0gJCgnI25hbWUtY29uZmlybScpOyAvLyAgYmluZEV2ZW50IG5hbWVDb25maXJtZWRcbiAgbGV0IGxlYXZlV2FpdGluZ0J0biA9ICQoJyNsZWF2ZS13YWl0aW5nJyk7IC8vICBiaW5kRXZlbnRcbiAgbGV0IGxlYXZlR2FtZVN0YXJ0QWxlcnQgPSAkKCcjbGVhdmUtZ2FtZS1zdGFydC1hbGVydCcpOyAvLyAgYmluZEV2ZW50XG4gIGxldCBnYW1lU3RhcnQgPSAkKCcjZ2FtZS1zdGFydCcpOyAvLyAgYmluZEV2ZW50XG5cbiAgLy8g5bu656uLIGluaVVJIFByb21pc2UgXG4gIGxldCBpbml0VHJpZ2dlcjtcbiAgbGV0IGluaXRVSVByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcbiAgICBpbml0VHJpZ2dlciA9IHJlcztcbiAgfSlcblxuICAvLy4uLuaWh+Wtl1xuICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtcm9sZT1cIi4uLlwiXScpLmZvckVhY2goZWxlID0+IHtcbiAgICAgIGlmIChlbGUuaW5uZXJIVE1MLmxlbmd0aCA8IDMpIHtcbiAgICAgICAgZWxlLmlubmVySFRNTCArPSAnLidcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBlbGUuaW5uZXJIVE1MID0gJydcbiAgICAgIH1cbiAgICB9KVxuICB9LCA1MDApXG5cbiAgLy/ntoHlrprpl5zplolwb3BvdXRcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2Nsb3NlLXRoaXMtcG9wb3V0XScpLmZvckVhY2goZWxlID0+IHtcbiAgICBsZXQgcGFyZW50UG9wb3V0cyA9IHBhcmVudHMoZWxlLCAnLnBvcG91dCcpO1xuICAgIGVsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRvZ2dsZVBvcG91dChwYXJlbnRQb3BvdXRzWzBdLmlkLCBmYWxzZSk7XG4gICAgfSlcbiAgfSlcblxuXG4gIC8vIOWuo+WRiiBmbGFnLCDnm67nmoTmmK/nlKjkvobliKTlrprliLDlupVuYW1lUHJvbXB0IOaYr+W+nuWTquS4gOWAi+euoemBk+WOu2NhbGzlh7rkvobnmoRcbiAgbGV0IGZsYWc7XG5cblxuICAvL+e2geWumueiuuiqjemAgeWHuuaMiemIleeahOm7nuaTiuS6i+S7tlxuICBuYW1lQ29uZmlybS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAobmFtZUNvbmZpcm1lZCB8fCBnYW1lQ3JlYXRlZCB8fCBqb2luZWQpIHJldHVybjtcbiAgICBsZXQgbmFtZSA9IG5hbWVJbnB1dC52YWx1ZSA/IG5hbWVJbnB1dC52YWx1ZSA6IHBsYXllclJlZi5uYW1lO1xuICAgIGNvbmZpcm1OYW1lKHNvY2tldCwgbmFtZSk7XG4gICAgaWYgKGZsYWcgPT09ICdvbkpvaW4nKSB7XG4gICAgICB0b2dnbGVQb3BvdXQoJ2pvaW4tZ2FtZS1wcm9tcHQnLCB0cnVlKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZmxhZyA9PT0gJ29uQ3JlYXRlJykge1xuICAgICAgaWYgKCFnYW1lQ3JlYXRlZCkge1xuICAgICAgICBuZXdHYW1lKHNvY2tldCk7XG4gICAgICAgIGdhbWVDcmVhdGVkID0gdHJ1ZTtcbiAgICAgICAgam9pbmVkID0gdHJ1ZTtcbiAgICAgICAgbmFtZUNvbmZpcm1lZCA9IHRydWU7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuICB9KVxuXG4gIC8v57aB5a6a5oyJ6YiV6bue5pOK5b6M6ZaL5ZWfbmFtZS1pbnB1dC1wcm9tcHQgPT4gam9pbkdhbWUgcHJvbXB0XG4gIHNob3dKb2luR2FtZVByb21wdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBmbGFnID0gJ29uSm9pbic7XG4gICAgdG9nZ2xlUG9wb3V0KCduYW1lLWlucHV0LXByb21wdCcsIHRydWUpO1xuICB9KTtcblxuICAvL+e2geWumuaMiemIlem7nuaTiuW+jOmAgeWHuuaDs+WPg+WKoOeahOaIv+mWk+eivOeahOS6i+S7tlxuICBjb25maXJtSm9pbkdhbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYgKCFqb2luZWQpIHtcbiAgICAgIGxldCByb29tQ29kZSA9IHJvb21Db2RlSW5wdXQudmFsdWU7XG4gICAgICBjb25maXJtSm9pbkdhbWUoc29ja2V0LCByb29tQ29kZSk7XG4gICAgICBqb2luZWQgPSB0cnVlO1xuICAgICAgZ2FtZUNyZWF0ZWQgPSB0cnVlO1xuICAgICAgbmFtZUNvbmZpcm1lZCA9IHRydWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfSlcblxuICAvL+e2geWumuaMiemIlem7nuaTiuW+jOmWi+WVn25hbWUtaW5wdXQtcHJvbXB0ID0+IG5ld0dhbWUgcHJvbXB0XG4gIGNyZWF0ZUdhbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZmxhZyA9ICdvbkNyZWF0ZSc7XG4gICAgdG9nZ2xlUG9wb3V0KCduYW1lLWlucHV0LXByb21wdCcsIHRydWUpO1xuICB9KTtcblxuICAvL+e2geWumuesrOS4gOmboumWi+aMiemIlVxuICBsZWF2ZVdhaXRpbmdCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgc29ja2V0LmVtaXQoJ2xlYXZlV2FpdGluZycpO1xuICAgIGdhbWVDcmVhdGVkID0gZmFsc2U7XG4gICAgam9pbmVkID0gZmFsc2U7XG4gICAgbmFtZUNvbmZpcm1lZCA9IGZhbHNlO1xuICAgIHRvZ2dsZVBvcG91dCgncm9vbS1jb2RlLWRpc3BsYXktcG9wb3V0JywgZmFsc2UpO1xuICB9KVxuICAvL+e2geWumuesrOS6jOmboumWi+aMiemIlVxuICBsZWF2ZUdhbWVTdGFydEFsZXJ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHNvY2tldC5lbWl0KCdsZWF2ZVN0YXJ0aW5nR2FtZScsIHBsYXllclJlZik7XG4gICAgdG9nZ2xlUG9wb3V0KCdnYW1lLXN0YXJ0LWFsZXJ0JywgZmFsc2UpO1xuICB9KVxuXG4gIGdhbWVTdGFydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAoIWdhbWVTdGFydGVkKSB7XG4gICAgICBzb2NrZXQuZW1pdCgnc3RhcnRNYXRjaCcpO1xuICAgICAgZ2FtZVN0YXJ0ZWQgPSB0cnVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgfSlcblxuICAvL+e2geWumueVtnNlcnZlcuWCs+S+hidnZW5Sb29tQ29kZSfoqIromZ/lvozvvIx1aSDmh4nnlKLnlJ/nmoTlsI3mh4nooYzngrpcbiAgc29ja2V0Lm9uKCdnZW5Sb29tQ29kZScsIChkYXRhKSA9PiB7XG4gICAgcm9vbUNvZGVEaXNwbGF5LmlubmVySFRNTCA9IGRhdGE7XG4gIH0pXG5cbiAgLy/ntoHlrprnlbZzZXJ2ZXLlgrPkvoYncGxheWVySm9pbmVkJ+ioiuiZn+W+jO+8jHVpIOaHieeUoueUn+eahOWwjeaHieihjOeCulxuICBzb2NrZXQub24oJ3BsYXllckpvaW5lZCcsIChkYXRhKSA9PiB7XG4gICAgaWYgKGRhdGEucGxheWVyTnVtYmVyID09PSAyKSB7XG4gICAgICBpZiAocGxheWVyUmVmLm51bWJlciA9PSAxKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXJvbGU9XCJvcHBvbmVudFwiXScpLmZvckVhY2goZWxlID0+IHtcbiAgICAgICAgICBlbGUuaW5uZXJIVE1MID0gYFlPVVIgT1BQT05FTlQgJHtkYXRhLnBsYXllck5hbWV9IFNIT1dTIFVQIWBcbiAgICAgICAgfSk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXJvbGU9XCJwbGF5ZXIyXCJdJykuZm9yRWFjaChlbGUgPT4ge1xuICAgICAgICAgIGVsZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAocGxheWVyUmVmLm51bWJlciA9PSAyKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXJvbGU9XCJvcHBvbmVudFwiXScpLmZvckVhY2goZWxlID0+IHtcbiAgICAgICAgICBlbGUuaW5uZXJIVE1MID0gYFdBSVRJTkcgRk9SIFRIRSBST09NIEhPU1Q8YnI+PGJyPiR7ZGF0YS5ob3N0TmFtZX08YnI+PGJyPlRPIEFDQ0VQVCBZT1VSIENIQUxMRU5HRTxzcGFuIGRhdGEtcm9sZT1cIi4uLlwiPjwvc3Bhbj5gXG4gICAgICAgIH0pO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1yb2xlPVwicGxheWVyMVwiXScpLmZvckVhY2goZWxlID0+IHtcbiAgICAgICAgICBlbGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIHRvZ2dsZVBvcG91dCgncm9vbS1jb2RlLWRpc3BsYXktcG9wb3V0JywgZmFsc2UpO1xuICAgICAgdG9nZ2xlUG9wb3V0KCdqb2luLWdhbWUtcHJvbXB0JywgZmFsc2UpO1xuICAgICAgdG9nZ2xlUG9wb3V0KCdnYW1lLXN0YXJ0LWFsZXJ0JywgdHJ1ZSk7XG4gICAgfVxuICB9KVxuXG4gIHNvY2tldC5vbignaG9zdC1sZWF2ZScsIChkYXRhKSA9PiB7XG4gICAgdG9nZ2xlUG9wb3V0KCdnYW1lLXN0YXJ0LWFsZXJ0JywgZmFsc2UpO1xuICAgIHRvZ2dsZVBvcG91dCgnbGVhdmUtYWxlcnQnLCB0cnVlKTtcbiAgICBnYW1lU3RhcnRlZCA9IGZhbHNlO1xuICAgIGpvaW5lZCA9IGZhbHNlO1xuICAgIG5hbWVDb25maXJtZWQgPSBmYWxzZTtcbiAgICBnYW1lQ3JlYXRlZCA9IGZhbHNlO1xuXG4gICAgJCgnW2RhdGEtcm9sZT1cImxlYXZlLW1zZ1wiXScpLmlubmVySFRNTCA9IGBIT1NUICR7ZGF0YS5ob3N0fSBMRUZUIEFORCBTSFVURE9XTiBUSEUgUk9PTS5gXG4gIH0pXG5cbiAgc29ja2V0Lm9uKCdjaGFsbGVuZ2VyLWxlYXZlJywgKGRhdGEpID0+IHtcbiAgICB0b2dnbGVQb3BvdXQoJ2dhbWUtc3RhcnQtYWxlcnQnLCBmYWxzZSk7XG4gICAgdG9nZ2xlUG9wb3V0KCdsZWF2ZS1hbGVydCcsIHRydWUpO1xuICAgIHRvZ2dsZVBvcG91dCgncm9vbS1jb2RlLWRpc3BsYXktcG9wb3V0JywgdHJ1ZSk7XG4gICAgZ2FtZVN0YXJ0ZWQgPSBmYWxzZTtcbiAgICBqb2luZWQgPSBmYWxzZTtcbiAgICBuYW1lQ29uZmlybWVkID0gZmFsc2U7XG4gICAgZ2FtZUNyZWF0ZWQgPSBmYWxzZTtcblxuICAgICQoJ1tkYXRhLXJvbGU9XCJsZWF2ZS1tc2dcIl0nKS5pbm5lckhUTUwgPSBgQ0hBTExFTkdFUiAke2RhdGEuY2hhbGxlbmdlcn0gTEVGVCBUSElTIE1BVENILmBcbiAgfSlcblxuICBzb2NrZXQub24oJ2xlYXZlJywgKCkgPT4ge1xuICAgIGdhbWVTdGFydGVkID0gZmFsc2U7XG4gICAgam9pbmVkID0gZmFsc2U7XG4gICAgbmFtZUNvbmZpcm1lZCA9IGZhbHNlO1xuICAgIGdhbWVDcmVhdGVkID0gZmFsc2U7XG4gIH0pXG5cbiAgLy/ntoHlrprnlbZzZXJ2ZXLlgrPkvoYnZ2FtZUluaXQn6KiK6Jmf5b6M77yMdWkg5oeJ55Si55Sf55qE5bCN5oeJ6KGM54K6XG4gIHNvY2tldC5vbignZ2FtZUluaXQnLCAoKSA9PiB7XG4gICAgdG9nZ2xlUG9wb3V0KCdnYW1lLXN0YXJ0LWFsZXJ0JywgZmFsc2UpO1xuICB9KVxuXG5cbiAgLy8g6Ke455m8IHByb21pc2UgZnVsbGZpbGzmqZ/liLZcbiAgaW5pdFRyaWdnZXIoKTtcblxuICAvLyDlm57lgrMgZnVsbGZpbGzlvoznmoRwcm9taXNlXG4gIHJldHVybiBpbml0VUlQcm9taXNlO1xufVxuXG4vKipcbiAqIOmWi+WVnyBwb3BvdXRcbiAqXG4gKiBAcGFyYW0geyp9IGlkXG4gKiBAcGFyYW0geyp9IHN0YXR1c1xuICovXG5mdW5jdGlvbiB0b2dnbGVQb3BvdXQoaWQsIHN0YXR1cykge1xuICBsZXQgcG9wb3V0ID0gJChgLnBvcG91dCMke2lkfWApO1xuICBpZiAoc3RhdHVzKSB7XG4gICAgcG9wb3V0LmNsYXNzTGlzdC5hZGQoJ3BvcG91dC0tc2hvdycpO1xuICB9XG4gIGVsc2Uge1xuICAgIHBvcG91dC5jbGFzc0xpc3QucmVtb3ZlKCdwb3BvdXQtLXNob3cnKTtcbiAgfVxufVxuLyoqXG4gKiDpmrHol4/otbflp4vnlavpnaJcbiAqXG4gKi9cbmZ1bmN0aW9uIGhpZGVJbml0aWFsU2NyZWVuKCkge1xuICBsZXQgaW5pdGlhbFNjcmVlbiA9ICQoJyNpbml0aWFsLXNjcmVlbicpO1xuICBpbml0aWFsU2NyZWVuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59XG4vKipcbiAqICDplovpl5zlhbfmnIloaWRlLW9uLWFjdGlvbuWxrOaAp+eahHVpIGVsZW1lbnQsXG4gKlxuICogQHBhcmFtIHsqfSBzdGF0dXNcbiAqL1xuZnVuY3Rpb24gdG9nZ2xlSGlkZU9uQWN0aW9uKHN0YXR1cykge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbaGlkZS1vbi1hY3Rpb25dJykuZm9yRWFjaChlbGUgPT4ge1xuICAgIGVsZS5zZXRBdHRyaWJ1dGUoJ2hpZGUtb24tYWN0aW9uJywgc3RhdHVzID8gJycgOiAnaGlkZScpO1xuICB9KVxufVxuLyoqXG4gKiDplovpl5zlhbfmnIlzaG93LW9uLWZ1bGzlsazmgKfnmoR1aSBlbGVtZW50LFxuICpcbiAqIEBwYXJhbSB7Kn0gc3RhdHVzXG4gKi9cbmZ1bmN0aW9uIHRvZ2dsZVNob3dPbkFjdGlvbihzdGF0dXMpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW3Nob3ctb24tYWN0aW9uXScpLmZvckVhY2goZWxlID0+IHtcbiAgICBlbGUuc2V0QXR0cmlidXRlKCdzaG93LW9uLWFjdGlvbicsIHN0YXR1cyA/ICcnIDogJ2hpZGUnKTtcbiAgfSlcbn1cblxuXG4vKipcbiAqIOW7uueri+aWsOmBiuaIslxuICpcbiAqIEBwYXJhbSB7Kn0gc29ja2V0XG4gKi9cbmZ1bmN0aW9uIG5ld0dhbWUoc29ja2V0KSB7XG4gIHBsYXllclJlZi5udW1iZXIgPSAxO1xuICB0b2dnbGVQb3BvdXQoJ3Jvb20tY29kZS1kaXNwbGF5LXBvcG91dCcsIHRydWUpO1xuICBzb2NrZXQuZW1pdCgnbmV3R2FtZScpO1xufVxuLyoqXG4gKiDlkJFzZXJ2ZXLnmbzlh7rnorroqo3lj4PliqDpgYrmiLLnmoTkv6HomZ9cbiAqXG4gKiBAcGFyYW0geyp9IHNvY2tldFxuICogQHBhcmFtIHsqfSByb29tQ29kZVxuICovXG5mdW5jdGlvbiBjb25maXJtSm9pbkdhbWUoc29ja2V0LCByb29tQ29kZSkge1xuICBwbGF5ZXJSZWYubnVtYmVyID0gMjtcbiAgc29ja2V0LmVtaXQoJ2pvaW5HYW1lJywgcm9vbUNvZGUpO1xufVxuLyoqXG4gKiBcbiAqIOeiuuiqjei8uOWFpeeahOaaseeoseW+jO+8jOaKiumBiuaIsuWFp+aJgOaciWRhdGEtcm9sZT1cIm5hbWVcIiDnmoQgZWxlbWVudCwg5YWn5a656YO95o+b5oiQ6Ly45YWl55qEbmFtZSwg5Lim5ZCM5pmC5ZCRc2VydmVy55m86YCBJ25hbWVDb25maXJtJ+eahOioiuiZn1xuICog5pyA5b6M6Zec6ZaJbmFtZS1pbnB1dC1wcm9tcHRcbiAqIEBwYXJhbSB7Kn0gc29ja2V0XG4gKiBAcGFyYW0geyp9IG5hbWVcbiAqIEBwYXJhbSB7Kn0gY2JcbiAqL1xuZnVuY3Rpb24gY29uZmlybU5hbWUoc29ja2V0LCBuYW1lLCBjYikge1xuICBwbGF5ZXJSZWYubmFtZSA9IG5hbWU7XG4gIHNvY2tldC5lbWl0KCduYW1lQ29uZmlybScsIG5hbWUpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbZGF0YS1yb2xlPVwibmFtZVwiXWApLmZvckVhY2goKG8sIGkpID0+IHtcbiAgICBvLmlubmVySFRNTCA9IG5hbWU7XG4gIH0pXG4gIHRvZ2dsZVBvcG91dCgnbmFtZS1pbnB1dC1wcm9tcHQnLCBmYWxzZSk7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0Q291bnRpbmcoY2IpIHtcbiAgbGV0IGdjID0gJCgnI2dhbWUtc3RhcnQtY291bnRpbmcnKTtcbiAgZ2MuY2xhc3NMaXN0LmFkZCgnZ2FtZS1zdGFydC1jb3VudGluZy0tc2hvdycpO1xuICBsZXQgbnVtYmVyID0gZ2MucXVlcnlTZWxlY3RvcignLmdhbWUtc3RhcnQtY291bnRpbmdfX251bWJlcicpO1xuICBudW1iZXIuaW5uZXJIVE1MID0gMztcbiAgbGV0IHRpbWVJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICBpZiAocGFyc2VJbnQobnVtYmVyLmlubmVySFRNTCkgPiAwKSB7XG4gICAgICBudW1iZXIuaW5uZXJIVE1MID0gcGFyc2VJbnQobnVtYmVyLmlubmVySFRNTCkgLSAxO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGltZUludGVydmFsKTtcbiAgICAgIGZhZGVPdXQoZ2MsIDEwMDAsICgpID0+IHtcbiAgICAgICAgZ2MuY2xhc3NMaXN0LnJlbW92ZSgnZ2FtZS1zdGFydC1jb3VudGluZy0tc2hvdycpO1xuICAgICAgfSlcbiAgICAgIGNiKCk7XG4gICAgfVxuICB9LCAxMDAwKVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH0iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGluaXRVSSwgc3RhcnRDb3VudGluZyB9IGZyb20gJy4vdWknO1xuaW1wb3J0IHsgaW5pdFNwbGFzaCB9IGZyb20gJy4vY29yZS9zcGxhc2gnO1xuaW1wb3J0IHsgZ2FtZUJ1aWxkZXIgfSBmcm9tICcuL2NvcmUvZ2FtZSc7XG5cblxuY29uc3Qgc29ja2V0ID0gcmVxdWlyZSgnc29ja2V0LmlvLWNsaWVudCcpKCdodHRwOi8vbG9jYWxob3N0OjMwMDAnKTtcblxubGV0IHNwbGFzaFN3aXRjaGVyO1xubGV0IHNwbGFzaFByb21pc2UgPSBpbml0U3BsYXNoKCk7XG5zcGxhc2hQcm9taXNlLnRoZW4oKHN3aXRjaGVyKSA9PiB7XG4gIHNwbGFzaFN3aXRjaGVyID0gc3dpdGNoZXI7XG59KVxuXG5sZXQgdWlJbml0UHJvbWlzZSA9IGluaXRVSShzb2NrZXQpO1xubGV0IGdhbWUgPSBnYW1lQnVpbGRlcigpO1xubGV0IGdhbWVDb250b2xsZXI7XG5cbnVpSW5pdFByb21pc2UudGhlbigoKSA9PiB7XG4gIGdhbWUudHJpZ2dlcigpO1xufSlcblxuZ2FtZS5wcm9taXNlLnRoZW4oKGluc3RhbmNlKSA9PiB7XG4gIGdhbWVDb250b2xsZXIgPSBpbnN0YW5jZTtcbiAgd2luZG93LmdvID0gKCkgPT4ge1xuICAgIGdhbWVDb250b2xsZXIubGF5ZXJzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Byb21vdGVkJyk7XG4gICAgbGV0IGdhbWVSZWFkeVByb21pc2UgPSBnYW1lQ29udG9sbGVyLmRyYXdHYW1lKCk7XG4gICAgZ2FtZVJlYWR5UHJvbWlzZS50aGVuKCgpID0+IHtcbiAgICAgIHNwbGFzaFN3aXRjaGVyKGZhbHNlKTtcbiAgICB9KVxuICB9XG5cbn0pXG5cbnNvY2tldC5vbignZ2FtZUluaXQnLCAoKSA9PiB7XG4gIHN0YXJ0Q291bnRpbmcoKCkgPT4ge1xuICAgIGdhbWVDb250b2xsZXIubGF5ZXJzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Byb21vdGVkJyk7XG4gICAgbGV0IGdhbWVSZWFkeVByb21pc2UgPSBnYW1lQ29udG9sbGVyLmRyYXdHYW1lKCk7XG4gICAgZ2FtZVJlYWR5UHJvbWlzZS50aGVuKCgpID0+IHtcbiAgICAgIHNwbGFzaFN3aXRjaGVyKGZhbHNlKTtcbiAgICB9KVxuICB9KVxufSlcblxuc29ja2V0Lm9uKCdob3N0LWxlYXZlJywgKCkgPT4ge1xuICBnYW1lQ29udG9sbGVyLmN2cy5jbGFzc0xpc3QucmVtb3ZlKCdwcm9tb3RlZCcpO1xufSlcblxuc29ja2V0Lm9uKCdjaGFsbGVuZ2VyLWxlYXZlJywgKCkgPT4ge1xuICBnYW1lQ29udG9sbGVyLmN2cy5jbGFzc0xpc3QucmVtb3ZlKCdwcm9tb3RlZCcpO1xufSlcblxuc29ja2V0Lm9uKCdsZWF2ZScsICgpID0+IHtcbiAgZ2FtZUNvbnRvbGxlci5jdnMuY2xhc3NMaXN0LnJlbW92ZSgncHJvbW90ZWQnKTtcbn0pXG5cbnNvY2tldC5vbigndG9vTWFueVBsYXllcnMnLCAoKSA9PiB7XG4gIGFsZXJ0KCdSb29tIElzIEZ1bGwgTm93Jyk7XG59KVxuXG5zb2NrZXQub24oJ3Vua25vd25Db2RlJywgKCkgPT4ge1xuICBhbGVydCgnSW5jb3JyZWN0IFJvb20gQ29kZScpO1xufSlcblxuc29ja2V0Lm9uKCdob3N0Q2FudEJlR3Vlc3QnLCAoKSA9PiB7XG4gIGFsZXJ0KFwiWW91IENhbid0IEpvaW4gVGhlIEdhbWUgWW91IEFyZSBIb3N0aW5nXCIpO1xufSlcblxuXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwic291cmNlUm9vdCI6IiJ9