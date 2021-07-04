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
    _this.courtOffset = 75;
    _this.courtOffsetMobile = 25;
    _this.gameStatus = 0;
    _this.pause = false;
    _this.playersThickness = 20; //0: not start yet
    //1: curtain animating
    //2: court animating
    //3: animating players and scroeboard
    //4: game is ready

    return _this;
  }

  _createClass(Engine, [{
    key: "init",
    value: function init() {
      this.curtain = this.genCurtain(); // 最底層canvas

      this.court = this.genCourt(); //最底層canvas

      this.starSky = this.genStarSky(); //倒數第二層canvas

      this.players = this.genPlayers(); //倒數第三層canvas

      this.ball = this.genBall(); //倒數第四層canvas

      this.scoreboards = this.genScoreboards(); //最表層canvas

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
      var offsetMobile = this.courtOffsetMobile;
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
        targetLayer.ctx.rotate(-Math.PI / 2);
        targetLayer.ctx.translate(-targetLayer.cvs.height / 2, -targetLayer.cvs.width / 2); // 因為court 的大小會隨著canvas 的長寬比而變動
        // 這邊先 假設今天是canvas 寬比高超出很多的情況 , 也就是狀況"typeA"

        targetLayer.ctx.drawImage(sourceCanvas, 0, 0, sourceCanvas.width, sourceCanvas.height, offsetV, offsetH, courtHeight, courtWidth);
      } else {
        //這邊是後兩種狀況
        // 因為court 的大小會隨著canvas 的長寬比而變動
        // 這邊先 假設今天是canvas 高比寬比超出很多的情況 , 也就是狀況"typeA"
        var _typeA = (targetLayer.cvs.width - 2 * offsetMobile) * this.config.courtAspectRatio < targetLayer.cvs.height - 2 * offset;

        var _offsetV, _offsetH, _courtHeight, _courtWidth;

        if (_typeA) {
          // 先算出縮減過offset 的cvs 寬
          _offsetH = offsetMobile;
          _courtWidth = targetLayer.cvs.width - 2 * offsetMobile;
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
      var starSkyAnimationInstance = new _lib_animation__WEBPACK_IMPORTED_MODULE_1__.StarSky(starSkyCanvasInstance.ctx);
      starSkyCanvasInstance.resizedCallback = starSkyAnimationInstance.refreshStars.bind(starSkyAnimationInstance);
      return starSkyAnimationInstance;
    }
  }, {
    key: "genPlayers",
    value: function genPlayers() {
      var _this5 = this;

      var widthPram = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
      var gapRatio = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.05;
      var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'white';
      var thickness = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 20;
      this.playersThickness = thickness;
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
      var scoreboardsLayer = this.addDivLayer('scoreboards', 'scoreboards');
      var topBar = document.createElement('div');
      var botBar = document.createElement('div');
      topBar.classList.add('scoreboards__top-bar');
      botBar.classList.add('scoreboards__bot-bar');
      scoreboardsLayer.append(topBar, botBar);

      var genPlayerShowcase = function genPlayerShowcase(playerName, playerId, scoreMax) {
        var playerShowCase = document.createElement('div');
        playerShowCase.classList.add('player-showcase');
        playerShowCase.id = playerId;
        var innerHTML = "\n        <div class=\"player-showcase__name\">".concat(playerName, "</div>\n        <div class=\"player-showcase__score\">\n          0000   \n        </div>\n      ");
        playerShowCase.innerHTML = innerHTML;
        return playerShowCase;
      };

      for (var i = 0; i < _data__WEBPACK_IMPORTED_MODULE_3__.playersData.length; i++) {
        topBar.append(genPlayerShowcase(_data__WEBPACK_IMPORTED_MODULE_3__.playersData[i].name, _data__WEBPACK_IMPORTED_MODULE_3__.playersData[i].id, 5));
      }

      var scoreboards = {
        updateScore: function updateScore(playerId, score) {},
        ready: function ready() {
          scoreboardsLayer.classList.add('scoreboards--ready');
        },
        loopUpdate: function loopUpdate() {}
      };
      return scoreboards;
    }
  }, {
    key: "genBall",
    value: function genBall() {
      var _this6 = this;

      var speed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;
      var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 30;
      var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'white';
      var ballCanvasInstance = this.ballCanvasInstance = this.addNewLayer();
      var ballVirtualCanvasInstance = this.ballVirtualCanvasInstance = this.createVirtualCanvasBaseInstance();
      ballVirtualCanvasInstance.setCanvasSize(this.courtCanvasInstance.cvs.width, this.courtCanvasInstance.cvs.height); //init ballData

      _data__WEBPACK_IMPORTED_MODULE_3__.ballData.speed = {
        x: (0,_lib_function__WEBPACK_IMPORTED_MODULE_5__.randomWithinRange)(0, speed),
        y: (0,_lib_function__WEBPACK_IMPORTED_MODULE_5__.randomWithinRange)(0, speed)
      };
      _data__WEBPACK_IMPORTED_MODULE_3__.ballData.size = size;
      _data__WEBPACK_IMPORTED_MODULE_3__.ballData.color = color;
      _data__WEBPACK_IMPORTED_MODULE_3__.ballData.position = {
        x: _data__WEBPACK_IMPORTED_MODULE_3__.playersData[0].position.x,
        //房主先持球
        y: _data__WEBPACK_IMPORTED_MODULE_3__.playersData[0].position.y - this.playersThickness - 10
      };
      var ball = {
        ready: function ready() {
          var trigger;
          var promise = new Promise(function (res) {
            trigger = res;
          });
          var opacity = 0;
          setTimeout(function () {
            var interval = setInterval(function () {
              if (opacity >= 1) {
                clearInterval(interval);
                trigger();
              }

              (0,_lib_shape__WEBPACK_IMPORTED_MODULE_4__.drawCircle)(ballVirtualCanvasInstance.ctx, _data__WEBPACK_IMPORTED_MODULE_3__.ballData.position.x, _data__WEBPACK_IMPORTED_MODULE_3__.ballData.position.y, _data__WEBPACK_IMPORTED_MODULE_3__.ballData.size, _data__WEBPACK_IMPORTED_MODULE_3__.ballData.color, opacity);

              _this6.responsivePainter(ballCanvasInstance, ballVirtualCanvasInstance.cvs);

              opacity += 0.01;
            }, _this6.fps);
          }, 500);
          return promise;
        },
        loopUpdate: function loopUpdate() {
          var interval = setInterval(function () {
            ballVirtualCanvasInstance.clear();
            (0,_lib_shape__WEBPACK_IMPORTED_MODULE_4__.drawCircle)(ballVirtualCanvasInstance.ctx, _data__WEBPACK_IMPORTED_MODULE_3__.ballData.position.x, _data__WEBPACK_IMPORTED_MODULE_3__.ballData.position.y, _data__WEBPACK_IMPORTED_MODULE_3__.ballData.size, _data__WEBPACK_IMPORTED_MODULE_3__.ballData.color);

            _this6.responsivePainter(ballCanvasInstance, ballVirtualCanvasInstance.cvs);
          }, _this6.fps);
        }
      };
      return ball;
    }
  }, {
    key: "drawGame",
    value: function drawGame() {
      var _this7 = this;

      this.gameStatus = 1;
      this.starSky.animate();
      var promise = this.curtain.animate();
      promise.then(function () {
        _this7.gameStatus = 2;
        return _this7.court.animate();
      }).then(function () {
        _this7.gameStatus = 3;

        var playersReady = _this7.players.ready();

        var ballReady = _this7.ball.ready();

        var scoreboardsReady = _this7.scoreboards.ready();

        var allReadyPromise = Promise.all([playersReady, ballReady, scoreboardsReady]);
        return allReadyPromise;
      }).then(function () {
        _this7.gameStatus = 4;
        var gameReadyPromise = new Promise(function (res, rej) {
          _this7.initGameDataUpdateInterval();

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
      this.ball.loopUpdate();
      this.scoreboards.loopUpdate();
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
    key: "refreshStars",
    value: function refreshStars() {
      this.stars.length = 0;
      this.genStars();
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
    this.layersContainer = undefined;
    this.divLayersContainer = undefined;
    this.canvasSizefixed = false;
    this.previousFrameTime = new Date().getTime();
    this.isResizing = false;
    this.layers = [];
    this.divLayers = [];

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
        this.cvs = cvs;
        this.layersContainer = document.createElement('div');
        this.layersContainer.classList.add('layers-container');
        this.layersContainer.style.fontSize = 0;
        this.layersContainer.style.position = 'absolute';
        this.layersContainer.style.width = '100%';
        this.layersContainer.style.height = '100%';
        this.layersContainer.appendChild(cvs);
        this.divLayerContainer = document.createElement('div');
        this.divLayerContainer.classList.add('div-layers-container');
        this.divLayerContainer.style.position = 'absolute';
        this.divLayerContainer.style.width = '100%';
        this.divLayerContainer.style.height = '100%';
        this.surrounding = document.createElement('div');
        this.surrounding.style.position = 'absolute';
        this.surrounding.style.width = '100%';
        this.surrounding.style.height = '100%';
        this.surrounding.classList.add('render-env__surrounding');
        this.surrounding.appendChild(this.layersContainer);
        this.surrounding.insertBefore(this.divLayerContainer, this.layersContainer);
        this.ele.append(this.surrounding);
        this.ele.classList.add('render-env');
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
    key: "updatePositionOptionSetting",
    value: function updatePositionOptionSetting() {}
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
      if (this.ele.tagName === 'CANVAS') return new TypeError("\u65B0\u589E\u5716\u5C64\u65B9\u6CD5\u53EA\u652F\u63F4\u4EE5\u7A7Adiv\u5BB9\u5668\u521D\u59CB\u5316\u7684\u6E32\u67D3\u74B0\u5883");
      var cvs = document.createElement('canvas');
      cvs.style.position = 'absolute';
      this.layersContainer.prepend(cvs);
      var cvsInstance = new Canvas2DFxBase(cvs, {}, {}, this.ele);
      this.layers.push(cvsInstance);
      return cvsInstance;
    }
  }, {
    key: "addDivLayer",
    value: function addDivLayer(id, className) {
      if (this.ele.tagName === 'CANVAS') return new TypeError("\u65B0\u589E\u5716\u5C64\u65B9\u6CD5\u53EA\u652F\u63F4\u4EE5\u7A7Adiv\u5BB9\u5668\u521D\u59CB\u5316\u7684\u6E32\u67D3\u74B0\u5883");
      var divLayer = document.createElement('div');

      if (!!className) {
        divLayer.classList.add(className);
      }

      if (!!id) {
        divLayer.id = id;
      }

      divLayer.style.position = 'absolute';
      divLayer.style.width = '100%';
      divLayer.style.height = '100%';
      this.divLayerContainer.prepend(divLayer);
      this.divLayers.push(divLayer);
      return divLayer;
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
/* harmony export */   "ballData": function() { return /* binding */ ballData; },
/* harmony export */   "playerRef": function() { return /* binding */ playerRef; }
/* harmony export */ });
var playersData = [{
  id: 0,
  name: '???',
  score: 0,
  width: 0,
  position: {
    x: 0,
    y: 0
  }
}, {
  id: 1,
  name: '???',
  score: 0,
  width: 0,
  position: {
    x: 0,
    y: 0
  }
}];
var ballData = {
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
    gameContoller.surrounding.classList.add('promoted');
    var gameReadyPromise = gameContoller.drawGame();
    gameReadyPromise.then(function () {
      splashSwitcher(false);
    });
  };
});
socket.on('gameInit', function () {
  (0,_ui__WEBPACK_IMPORTED_MODULE_0__.startCounting)(function () {
    gameContoller.surrounding.classList.add('promoted');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vY29yZS9nYW1lLmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9jb3JlL2xpYi9hbmltYXRpb24uanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL2NvcmUvbGliL2Jhc2UuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL2NvcmUvbGliL2RvbS5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vY29yZS9saWIvZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL2NvcmUvbGliL3NoYXBlLmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9jb3JlL2xpYi91dGlsLmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9jb3JlL3NwbGFzaC5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vZGF0YS5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL2JhY2tvMi9pbmRleC5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL2Jhc2U2NC1hcnJheWJ1ZmZlci9saWIvYmFzZTY0LWFycmF5YnVmZmVyLmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvY29tcG9uZW50LWVtaXR0ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9kZWJ1Zy9ub2RlX21vZHVsZXMvbXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9kZWJ1Zy9zcmMvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL2RlYnVnL3NyYy9jb21tb24uanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2xpYi9nbG9iYWxUaGlzLmJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvbGliL3NvY2tldC5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvbGliL3RyYW5zcG9ydC5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvbGliL3RyYW5zcG9ydHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2xpYi90cmFuc3BvcnRzL3BvbGxpbmctanNvbnAuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2xpYi90cmFuc3BvcnRzL3BvbGxpbmcteGhyLmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9saWIvdHJhbnNwb3J0cy9wb2xsaW5nLmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9saWIvdHJhbnNwb3J0cy93ZWJzb2NrZXQtY29uc3RydWN0b3IuYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvbGliL3RyYW5zcG9ydHMvd2Vic29ja2V0LmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9saWIvdXRpbC5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvbGliL3htbGh0dHByZXF1ZXN0LmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLXBhcnNlci9saWIvY29tbW9ucy5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1wYXJzZXIvbGliL2RlY29kZVBhY2tldC5icm93c2VyLmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLXBhcnNlci9saWIvZW5jb2RlUGFja2V0LmJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tcGFyc2VyL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL2hhcy1jb3JzL2luZGV4LmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvbWVyc2VubmUtdHdpc3Rlci9zcmMvbWVyc2VubmUtdHdpc3Rlci5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL3BhcnNlcXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9wYXJzZXVyaS9pbmRleC5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4uL3NyYy9wYXJzZS1wYXRoLmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi4vc3JjL3BhdGgyZC1wb2x5ZmlsbC5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1jbGllbnQvYnVpbGQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tY2xpZW50L2J1aWxkL21hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tY2xpZW50L2J1aWxkL29uLmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLWNsaWVudC9idWlsZC9zb2NrZXQuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tY2xpZW50L2J1aWxkL3R5cGVkLWV2ZW50cy5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1jbGllbnQvYnVpbGQvdXJsLmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLXBhcnNlci9kaXN0L2JpbmFyeS5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1wYXJzZXIvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1wYXJzZXIvZGlzdC9pcy1iaW5hcnkuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy95ZWFzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vdWkuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9pbmRleC5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vc3JjL3Njc3MvbWFpbi5zY3NzIl0sIm5hbWVzIjpbIkRFRkFVTFQiLCJiZ0NvbG9yIiwiY291cnRDb2xvciIsImNvdXJ0QXNwZWN0UmF0aW8iLCJFbmdpbmUiLCJlbGUiLCJkZWZhdWx0Q29uZmlnIiwiY29uZmlnIiwicGl4ZWxCYXNlIiwiaW5pdCIsImZwcyIsImNvdXJ0T2Zmc2V0IiwiY291cnRPZmZzZXRNb2JpbGUiLCJnYW1lU3RhdHVzIiwicGF1c2UiLCJwbGF5ZXJzVGhpY2tuZXNzIiwiY3VydGFpbiIsImdlbkN1cnRhaW4iLCJjb3VydCIsImdlbkNvdXJ0Iiwic3RhclNreSIsImdlblN0YXJTa3kiLCJwbGF5ZXJzIiwiZ2VuUGxheWVycyIsImJhbGwiLCJnZW5CYWxsIiwic2NvcmVib2FyZHMiLCJnZW5TY29yZWJvYXJkcyIsImluaXRSZXNpemVkIiwicmVzaXplZENhbGxiYWNrIiwiZHJhd1N0YXRpYyIsInRoZW4iLCJiYWNrZ3JvdW5kIiwiYmFuZFdpZHRoIiwiY3VydGFpbkNhbnZhc0luc3RhbmNlIiwiY3JlYXRlVmlydHVhbENhbnZhc0Jhc2VJbnN0YW5jZSIsInNldENhbnZhc1NpemUiLCJjdnMiLCJ3aWR0aCIsImhlaWdodCIsImN1cnRhaW5BbmltYXRpb25JbnN0YW5jZSIsIlN3aXJsOEJpdCIsImN0eCIsImFuaW1hdGUiLCJpbml0aWFsSW1hZ2UiLCJnZXRDYWNoZUNhbnZhcyIsInByb21pc2UiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXIiLCJkcmF3SW1hZ2UiLCJQcm9taXNlIiwicmVzIiwic2V0VGltZW91dCIsImNsZWFySW50ZXJ2YWwiLCJ0cmlnZ2VyIiwicmVqIiwic3RhdGljSW1hZ2UiLCJ0YXJnZXRMYXllciIsInNvdXJjZUNhbnZhcyIsIm9mZnNldCIsIm9mZnNldE1vYmlsZSIsInNhdmUiLCJnZXRBc3BlY3RSYXRpbyIsInR5cGVBIiwib2Zmc2V0ViIsIm9mZnNldEgiLCJjb3VydEhlaWdodCIsImNvdXJ0V2lkdGgiLCJ0cmFuc2xhdGUiLCJyb3RhdGUiLCJNYXRoIiwiUEkiLCJyZXN0b3JlIiwic3Ryb2tlV2lkdGgiLCJjb3VydENhbnZhc0luc3RhbmNlIiwiY291cnRDYW52YXNXaWR0aCIsImNvdXJ0Q2FudmFzSGVpZ2h0IiwidmVydGljZXMiLCJ4IiwieSIsInN0cm9rZUFuaW1hdGlvbkluc3RhbmNlIiwiU3Ryb2tlQW5pbWF0aW9uIiwicmVzcG9uc2l2ZVBhaW50ZXIiLCJzdGFyU2t5Q2FudmFzSW5zdGFuY2UiLCJhZGROZXdMYXllciIsInN0YXJTa3lBbmltYXRpb25JbnN0YW5jZSIsIlN0YXJTa3kiLCJyZWZyZXNoU3RhcnMiLCJiaW5kIiwid2lkdGhQcmFtIiwiZ2FwUmF0aW8iLCJjb2xvciIsInRoaWNrbmVzcyIsInBsYXllcnNDYW52YXNJbnN0YW5jZSIsInBsYXllcnNWaXJ0dWFsQ2FudmFzSW5zdGFuY2UiLCJpIiwicGxheWVyc0RhdGEiLCJwb3NpdGlvbiIsInJlYWR5Iiwib3BhY2l0eSIsImRyYXdSZWN0IiwibG9vcFVwZGF0ZSIsInNjb3JlYm9hcmRzTGF5ZXIiLCJhZGREaXZMYXllciIsInRvcEJhciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImJvdEJhciIsImNsYXNzTGlzdCIsImFkZCIsImFwcGVuZCIsImdlblBsYXllclNob3djYXNlIiwicGxheWVyTmFtZSIsInBsYXllcklkIiwic2NvcmVNYXgiLCJwbGF5ZXJTaG93Q2FzZSIsImlkIiwiaW5uZXJIVE1MIiwibmFtZSIsInVwZGF0ZVNjb3JlIiwic2NvcmUiLCJzcGVlZCIsInNpemUiLCJiYWxsQ2FudmFzSW5zdGFuY2UiLCJiYWxsVmlydHVhbENhbnZhc0luc3RhbmNlIiwiYmFsbERhdGEiLCJyYW5kb21XaXRoaW5SYW5nZSIsImRyYXdDaXJjbGUiLCJwbGF5ZXJzUmVhZHkiLCJiYWxsUmVhZHkiLCJzY29yZWJvYXJkc1JlYWR5IiwiYWxsUmVhZHlQcm9taXNlIiwiYWxsIiwiZ2FtZVJlYWR5UHJvbWlzZSIsImluaXRHYW1lRGF0YVVwZGF0ZUludGVydmFsIiwiQ2FudmFzMkRGeEJhc2UiLCJnYW1lQnVpbGRlciIsImdhbWUiLCJib290IiwiYm9keSIsImNvdW50ZXJDbG9ja3dpc2VBcnIiLCJjbG9ja3dpc2VBcnIiLCJjYW52YXMiLCJhbmltYXRpb25FbmRUcmlnZ2VyIiwib3JkZXIiLCJwYXRoIiwiUGF0aDJEIiwiYmFuZFdpZHRoU3RhY2siLCJjbG9ja3dpc2UiLCJ0b3RhbFdpZHRoIiwidG90YWxIZWlnaHQiLCJkaXJlY3Rpb25BcnIiLCJsb2NhdGlvbiIsImFuaW1hdGlvblByb21pc2UiLCJkcmF3U3dpcmwiLCJhZGRQYXRoIiwiZHJhV1JhbmRvbUFuZ2xlZEJhbmRQYXRoIiwiZ2V0U3RhcnRMb2NhdGlvbiIsImZpbGwiLCJwb2ludCIsImRyYXdBbmdsZWRCYW5kRnJvbVRMIiwiZHJhd0FuZ2xlZEJhbmRGcm9tQkwiLCJkcmF3QW5nbGVkQmFuZEZyb21CUiIsImRyYXdBbmdsZWRCYW5kRnJvbVRSIiwibW92ZVRvIiwicmFuZG9tSGVpZ2h0IiwibGluZVRvIiwicmFuZG9tV2lkdGgiLCJ3YXlwb2ludHMiLCJjYWxjV2F5cG9pbnRzIiwiZmxpY2tlciIsImRhc2giLCJnbG93aW5nIiwiZ2xvd2luZ1NpemUiLCJsb29waW5nRHJhd1N0cm9rZSIsImNvdW50ZXIiLCIkdGhpcyIsImxpbmVDYXAiLCJsZW5ndGgiLCJzZXRMaW5lRGFzaCIsInN0cm9rZVN0eWxlIiwibGluZVdpZHRoIiwic2hhZG93Q29sb3IiLCJzaGFkb3dCbHVyIiwiZmxpY2tlclJhbmdlIiwiYmVnaW5QYXRoIiwiY2xlYXJSZWN0IiwiZ2xvYmFsQWxwaGEiLCJzdHJva2UiLCJjbG9zZVBhdGgiLCJzdGFycyIsImdlblN0YXJzIiwibnVtYmVyIiwic3RhciIsInR3aW5rbGUiLCJwdXNoIiwiZHJhdyIsInZpcnR1YWxQYXJlbnQiLCJpcyIsIk9iamVjdCIsImFzc2lnbiIsImZyYW1lQ291bnQiLCJtb3VzZSIsImZyYW1lSXNQYXVzZWQiLCJpc0NsaWNrIiwibGF5ZXJzQ29udGFpbmVyIiwidW5kZWZpbmVkIiwiZGl2TGF5ZXJzQ29udGFpbmVyIiwiY2FudmFzU2l6ZWZpeGVkIiwicHJldmlvdXNGcmFtZVRpbWUiLCJEYXRlIiwiZ2V0VGltZSIsImlzUmVzaXppbmciLCJsYXllcnMiLCJkaXZMYXllcnMiLCJpc1Jlc2l6aW5nQ2FsbGJhY2siLCJpbml0QmFzZSIsInRhZ05hbWUiLCJzdHlsZSIsImZvbnRTaXplIiwiYXBwZW5kQ2hpbGQiLCJkaXZMYXllckNvbnRhaW5lciIsInN1cnJvdW5kaW5nIiwiaW5zZXJ0QmVmb3JlIiwiZ2V0Q29udGV4dCIsInRyaWdnZXJSZXNpemluZ01lY2hhbmlzbSIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJkZWJvdW5jZSIsInZpc2liaWxpdHlTdGF0ZSIsImFkZEV2ZW50SGFuZGxlciIsInJlZnJlc2hCYXNlRnJhbWVDb3VudGVyIiwidGhpc0ZyYW1lVGltZSIsInRpbWVFbGFwc2VkIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY29udGFpbnMiLCJjYW52YXNXaWR0aCIsImNhbnZhc0hlaWdodCIsInZpcnR1YWxQYXJlbnRWYWxpZGF0aW9uIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicGFyZW50RWxlbWVudCIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiZSIsInBvcyIsInBvaW50ZXJFdmVudFRvWFkiLCJ2Y3ZzIiwidmN2c0luc3RhbmNlIiwiVHlwZUVycm9yIiwicHJlcGVuZCIsImN2c0luc3RhbmNlIiwiY2xhc3NOYW1lIiwiZGl2TGF5ZXIiLCJjdG9yIiwidGFyZ2V0RWxlIiwiZ2V0RWxlbWVudEJ5SWQiLCJib290UHJvbWlzZSIsImluc3RhbmNlIiwiY29udHJvbGxlciIsIiQiLCJzZWxlY3RvciIsInF1ZXJ5U2VsZWN0b3IiLCJ0b2dnbGUiLCJzdGF0dXMiLCJzdHlsZVN0ciIsInNldEF0dHJpYnV0ZSIsInRvZ2dsZUNsYXNzIiwiY2xhc3NuYW1lIiwiYWN0aW9uIiwiZW1pdCIsImV2ZW50TmFtZSIsInNvbWVFdmVudCIsImNyZWF0ZUV2ZW50IiwiaW5pdEV2ZW50IiwiZGlzcGF0Y2hFdmVudCIsInBhcmVudHMiLCJub2RlIiwiY3VycmVudCIsImxpc3QiLCJwYXJlbnROb2RlIiwiZG9jdW1lbnRFbGVtZW50IiwiZmlsdGVyIiwibyIsIm1hdGNoZXMiLCJmYWRlT3V0IiwiZHVyYXRpb24iLCJjYiIsImRpc3BsYXkiLCJmYWRlVGFyZ2V0IiwiZmFkZUVmZmVjdCIsIk1lcnNlbm5lVHdpc3RlciIsInJlcXVpcmUiLCJNVCIsImZ1bmMiLCJkZWxheSIsInRpbWVyIiwiY29udGV4dCIsImFyZ3MiLCJhcmd1bWVudHMiLCJjbGVhclRpbWVvdXQiLCJhcHBseSIsImFyciIsImEiLCJBcnJheSIsImlzQXJyYXkiLCJvYmoiLCJwcm90b3R5cGUiLCJ0b1N0cmluZyIsImNhbGwiLCJpbmRleE9mIiwicHRoIiwiaGFzT3duUHJvcGVydHkiLCJzdmciLCJTVkdFbGVtZW50IiwiaW5wIiwiSFRNTElucHV0RWxlbWVudCIsImRvbSIsIm5vZGVUeXBlIiwic3RyIiwiZm5jIiwidW5kIiwibmlsIiwiaGV4IiwidGVzdCIsInJnYmEiLCJyZ2IiLCJoc2wiLCJjb2wiLCJrZXkiLCJkZWZhdWx0SW5zdGFuY2VTZXR0aW5ncyIsImRlZmF1bHRUd2VlblNldHRpbmdzIiwibWluIiwibWF4Iiwic2VlZCIsInJhbmRvbSIsImdldERpc3RhbmNlIiwieDAiLCJ5MCIsIngxIiwieTEiLCJzcXJ0IiwiZGVncmVlVG9SYWRpYW4iLCJkZWdyZWUiLCJvdXQiLCJ0eXBlIiwidG91Y2giLCJvcmlnaW5hbEV2ZW50IiwidG91Y2hlcyIsImNoYW5nZWRUb3VjaGVzIiwicGFnZVgiLCJwYWdlWSIsInRhcmdldEhhc1Byb3AiLCJ0YXJnZXQiLCJwcm9wIiwiaXNFbXB0eSIsInZhbCIsImlzTmFOIiwicmdiVG9SZ2JhIiwicmdiVmFsdWUiLCJleGVjIiwiaGV4VG9SZ2JhIiwiaGV4VmFsdWUiLCJyZ3giLCJyZXBsYWNlIiwibSIsInIiLCJnIiwiYiIsInBhcnNlSW50IiwiaHNsVG9SZ2JhIiwiaHNsVmFsdWUiLCJoIiwicyIsImwiLCJodWUycmdiIiwicCIsInEiLCJ0IiwiY29sb3JUb1JnYmEiLCJnZXRDaGFubmVsVmFsdWVzRnJvbVJnYmEiLCJzcGxpdCIsIm1hcCIsImludGVycG9sYXRlIiwicHQwIiwicHQxIiwiZHgiLCJkeSIsImoiLCJkcmF3U3F1YXJlIiwiYWxwaGEiLCJhcmMiLCJkcmF3TGluZSIsInN0cm9rZUNvbG9yIiwiZHJhd1RleHQiLCJ0ZXh0Q29udGVudCIsImZvbnQiLCJmaWxsVGV4dCIsImdldFNjcmVlbnNob3RJbWFnZSIsInRhcmdldEN2cyIsInVybCIsInRvRGF0YVVSTCIsImltYWdlIiwiSW1hZ2UiLCJzcmMiLCJ0YXJnZXRDdHgiLCJjYWNoZUN2cyIsImNhY2hlQ3R4Iiwic291cmNlV2lkdGgiLCJzb3VyY2VIZWlnaHQiLCJjYWNoZURhdGEiLCJnZXRJbWFnZURhdGEiLCJwdXRJbWFnZURhdGEiLCJCQUxMX0FOSU1BVElPTl9ERUZBVUxUIiwiYWZ0ZXJJbWFnZSIsInJhZGl1cyIsInNwZWVkWCIsInNwZWVkWSIsImFjY2VsZXJhdGlvblgiLCJhY2NlbGVyYXRpb25ZIiwiZnJpY3Rpb25YIiwiZnJpY3Rpb25ZIiwiU1BPVFNfQU5JTUFUSU9OX0RFRkFVTFQiLCJtaW5TaXplIiwibWF4U2l6ZSIsInBlcmlvZCIsInN0ZXAiLCJib3R0b21MYXllciIsInJvdyIsIkJhc2ljUmVmZWxlY3Rpb24iLCJzd2l0Y2hTdGF0dXMiLCJpbml0QmFsbCIsImFuaW1hdGVCYWxsIiwiYWNjZWxlcmF0aW9uIiwiZnJpY3Rpb24iLCJkcmF3QmFsbCIsInJlZnJlc2hMb2NhdGlvbiIsInJlZnJlc2hTcGVlZCIsImNoZWNrQm91bmRhcnkiLCJkdCIsIlNwb3RzQnVtcGluZyIsInNwb3RzU2l6ZSIsImV4cGFuZCIsImRyYXdTcG90cyIsImluaXRTcGxhc2giLCJpbml0aWFsU2NyZWVuIiwidmlydHVhbENhbnZhcyIsInN3aXRjaGVyIiwic3BvdEFuaW1hdGlvbiIsInNwbGFzaFByb21pc2UiLCJzcG90c0J1bXBpbmdJbnN0YW5jZSIsImJvb3RDb250cm9sbGVyIiwiYmFzaWNSZWZlbGVjdGlvbkluc3RhbmNlIiwicGxheWVyUmVmIiwibW9kdWxlIiwiZXhwb3J0cyIsIkJhY2tvZmYiLCJvcHRzIiwibXMiLCJmYWN0b3IiLCJqaXR0ZXIiLCJhdHRlbXB0cyIsInBvdyIsInJhbmQiLCJkZXZpYXRpb24iLCJmbG9vciIsInJlc2V0Iiwic2V0TWluIiwic2V0TWF4Iiwic2V0Sml0dGVyIiwiY2hhcnMiLCJhcnJheWJ1ZmZlciIsImJ5dGVzIiwiVWludDhBcnJheSIsImxlbiIsImJhc2U2NCIsInN1YnN0cmluZyIsImJ1ZmZlckxlbmd0aCIsImVuY29kZWQxIiwiZW5jb2RlZDIiLCJlbmNvZGVkMyIsImVuY29kZWQ0IiwiQXJyYXlCdWZmZXIiLCJFbWl0dGVyIiwibWl4aW4iLCJvbiIsImV2ZW50IiwiZm4iLCJfY2FsbGJhY2tzIiwib25jZSIsIm9mZiIsInJlbW92ZUxpc3RlbmVyIiwicmVtb3ZlQWxsTGlzdGVuZXJzIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNhbGxiYWNrcyIsInNwbGljZSIsInNsaWNlIiwibGlzdGVuZXJzIiwiaGFzTGlzdGVuZXJzIiwiZCIsInciLCJvcHRpb25zIiwicGFyc2UiLCJpc0Zpbml0ZSIsImxvbmciLCJmbXRMb25nIiwiZm10U2hvcnQiLCJFcnJvciIsIkpTT04iLCJzdHJpbmdpZnkiLCJTdHJpbmciLCJtYXRjaCIsIm4iLCJwYXJzZUZsb2F0IiwidG9Mb3dlckNhc2UiLCJtc0FicyIsImFicyIsInJvdW5kIiwicGx1cmFsIiwiaXNQbHVyYWwiLCJmb3JtYXRBcmdzIiwibG9hZCIsInVzZUNvbG9ycyIsImxvY2Fsc3RvcmFnZSIsIndhcm5lZCIsImNvbnNvbGUiLCJ3YXJuIiwicHJvY2VzcyIsIl9fbndqcyIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsIldlYmtpdEFwcGVhcmFuY2UiLCJmaXJlYnVnIiwiZXhjZXB0aW9uIiwidGFibGUiLCJSZWdFeHAiLCIkMSIsIm5hbWVzcGFjZSIsImh1bWFuaXplIiwiZGlmZiIsImMiLCJpbmRleCIsImxhc3RDIiwiZGVidWciLCJsb2ciLCJuYW1lc3BhY2VzIiwic3RvcmFnZSIsInNldEl0ZW0iLCJyZW1vdmVJdGVtIiwiZXJyb3IiLCJnZXRJdGVtIiwiZW52IiwiREVCVUciLCJsb2NhbFN0b3JhZ2UiLCJmb3JtYXR0ZXJzIiwidiIsIm1lc3NhZ2UiLCJzZXR1cCIsImNyZWF0ZURlYnVnIiwiZGVmYXVsdCIsImNvZXJjZSIsImRpc2FibGUiLCJlbmFibGUiLCJlbmFibGVkIiwiZGVzdHJveSIsImtleXMiLCJmb3JFYWNoIiwibmFtZXMiLCJza2lwcyIsInNlbGVjdENvbG9yIiwiaGFzaCIsImNoYXJDb2RlQXQiLCJjb2xvcnMiLCJwcmV2VGltZSIsImVuYWJsZU92ZXJyaWRlIiwic2VsZiIsImN1cnIiLCJOdW1iZXIiLCJwcmV2IiwidW5zaGlmdCIsImZvcm1hdCIsImZvcm1hdHRlciIsImxvZ0ZuIiwiZXh0ZW5kIiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwiZ2V0Iiwic2V0IiwiZGVsaW1pdGVyIiwibmV3RGVidWciLCJzdWJzdHIiLCJ0b05hbWVzcGFjZSIsImpvaW4iLCJyZWdleHAiLCJzdGFjayIsIkZ1bmN0aW9uIiwiU29ja2V0IiwidXJpIiwicHJvdG9jb2wiLCJ0cmFuc3BvcnRzIiwicGFyc2VyIiwicGFyc2V1cmkiLCJwYXJzZXFzIiwiaG9zdG5hbWUiLCJob3N0Iiwic2VjdXJlIiwicG9ydCIsInF1ZXJ5IiwicmVhZHlTdGF0ZSIsIndyaXRlQnVmZmVyIiwicHJldkJ1ZmZlckxlbiIsImFnZW50Iiwid2l0aENyZWRlbnRpYWxzIiwidXBncmFkZSIsImpzb25wIiwidGltZXN0YW1wUGFyYW0iLCJyZW1lbWJlclVwZ3JhZGUiLCJyZWplY3RVbmF1dGhvcml6ZWQiLCJwZXJNZXNzYWdlRGVmbGF0ZSIsInRocmVzaG9sZCIsInRyYW5zcG9ydE9wdGlvbnMiLCJjbG9zZU9uQmVmb3JldW5sb2FkIiwiZGVjb2RlIiwidXBncmFkZXMiLCJwaW5nSW50ZXJ2YWwiLCJwaW5nVGltZW91dCIsInBpbmdUaW1lb3V0VGltZXIiLCJ0cmFuc3BvcnQiLCJjbG9zZSIsIm9mZmxpbmVFdmVudExpc3RlbmVyIiwib25DbG9zZSIsIm9wZW4iLCJjbG9uZSIsIkVJTyIsInNpZCIsInNvY2tldCIsInByaW9yV2Vic29ja2V0U3VjY2VzcyIsImNyZWF0ZVRyYW5zcG9ydCIsInNoaWZ0Iiwic2V0VHJhbnNwb3J0Iiwib25EcmFpbiIsIm9uUGFja2V0Iiwib25FcnJvciIsInByb2JlIiwiZmFpbGVkIiwib25UcmFuc3BvcnRPcGVuIiwic2VuZCIsImRhdGEiLCJtc2ciLCJ1cGdyYWRpbmciLCJjbGVhbnVwIiwiZmx1c2giLCJlcnIiLCJmcmVlemVUcmFuc3BvcnQiLCJvbmVycm9yIiwib25UcmFuc3BvcnRDbG9zZSIsIm9uY2xvc2UiLCJvbnVwZ3JhZGUiLCJ0byIsInBhY2tldCIsIm9uSGFuZHNoYWtlIiwicmVzZXRQaW5nVGltZW91dCIsInNlbmRQYWNrZXQiLCJjb2RlIiwiZmlsdGVyVXBncmFkZXMiLCJvbk9wZW4iLCJhdXRvVW5yZWYiLCJ1bnJlZiIsIndyaXRhYmxlIiwiY29tcHJlc3MiLCJjbGVhbnVwQW5kQ2xvc2UiLCJ3YWl0Rm9yVXBncmFkZSIsInJlYXNvbiIsImRlc2MiLCJwaW5nSW50ZXJ2YWxUaW1lciIsImZpbHRlcmVkVXBncmFkZXMiLCJUcmFuc3BvcnQiLCJkZXNjcmlwdGlvbiIsImRvT3BlbiIsImRvQ2xvc2UiLCJwYWNrZXRzIiwid3JpdGUiLCJkZWNvZGVQYWNrZXQiLCJiaW5hcnlUeXBlIiwiWE1MSHR0cFJlcXVlc3QiLCJYSFIiLCJKU09OUCIsIndlYnNvY2tldCIsInBvbGxpbmciLCJ4aHIiLCJ4ZCIsInhzIiwiaXNTU0wiLCJ4ZG9tYWluIiwieHNjaGVtZSIsImZvcmNlSlNPTlAiLCJQb2xsaW5nIiwiZ2xvYmFsVGhpcyIsInJOZXdsaW5lIiwickVzY2FwZWROZXdsaW5lIiwiSlNPTlBQb2xsaW5nIiwiX19fZWlvIiwib25EYXRhIiwic2NyaXB0IiwicmVtb3ZlQ2hpbGQiLCJmb3JtIiwiaWZyYW1lIiwiYXN5bmMiLCJpbnNlcnRBdCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiaGVhZCIsImlzVUFnZWNrbyIsImFyZWEiLCJpZnJhbWVJZCIsInRvcCIsImxlZnQiLCJtZXRob2QiLCJjb21wbGV0ZSIsImluaXRJZnJhbWUiLCJodG1sIiwidmFsdWUiLCJzdWJtaXQiLCJhdHRhY2hFdmVudCIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsIm9ubG9hZCIsInBpY2siLCJlbXB0eSIsImhhc1hIUjIiLCJyZXNwb25zZVR5cGUiLCJmb3JjZUJhc2U2NCIsInN1cHBvcnRzQmluYXJ5IiwiUmVxdWVzdCIsInJlcSIsInJlcXVlc3QiLCJwb2xsWGhyIiwiY3JlYXRlIiwiZXh0cmFIZWFkZXJzIiwic2V0RGlzYWJsZUhlYWRlckNoZWNrIiwic2V0UmVxdWVzdEhlYWRlciIsInJlcXVlc3RUaW1lb3V0IiwidGltZW91dCIsImhhc1hEUiIsIm9uTG9hZCIsInJlc3BvbnNlVGV4dCIsInJlcXVlc3RzQ291bnQiLCJyZXF1ZXN0cyIsIm9uU3VjY2VzcyIsImZyb21FcnJvciIsImFib3J0IiwiWERvbWFpblJlcXVlc3QiLCJlbmFibGVzWERSIiwidW5sb2FkSGFuZGxlciIsInRlcm1pbmF0aW9uRXZlbnQiLCJ5ZWFzdCIsInBvbGwiLCJvblBhdXNlIiwidG90YWwiLCJkb1BvbGwiLCJjYWxsYmFjayIsImRlY29kZVBheWxvYWQiLCJlbmNvZGVQYXlsb2FkIiwiZG9Xcml0ZSIsInNjaGVtYSIsInRpbWVzdGFtcFJlcXVlc3RzIiwiYjY0IiwiZW5jb2RlIiwiaXB2NiIsIldlYlNvY2tldCIsIk1veldlYlNvY2tldCIsInVzaW5nQnJvd3NlcldlYlNvY2tldCIsImRlZmF1bHRCaW5hcnlUeXBlIiwiaXNSZWFjdE5hdGl2ZSIsInByb2R1Y3QiLCJXUyIsImNoZWNrIiwicHJvdG9jb2xzIiwiaGVhZGVycyIsIndzIiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJvbm9wZW4iLCJfc29ja2V0Iiwib25tZXNzYWdlIiwiZXYiLCJsYXN0UGFja2V0IiwiZW5jb2RlUGFja2V0IiwiQnVmZmVyIiwiYnl0ZUxlbmd0aCIsImF0dHIiLCJyZWR1Y2UiLCJhY2MiLCJrIiwiaGFzQ09SUyIsImNvbmNhdCIsIlBBQ0tFVF9UWVBFUyIsIlBBQ0tFVF9UWVBFU19SRVZFUlNFIiwiRVJST1JfUEFDS0VUIiwid2l0aE5hdGl2ZUFycmF5QnVmZmVyIiwiYmFzZTY0ZGVjb2RlciIsImVuY29kZWRQYWNrZXQiLCJtYXBCaW5hcnkiLCJjaGFyQXQiLCJkZWNvZGVCYXNlNjRQYWNrZXQiLCJwYWNrZXRUeXBlIiwiZGVjb2RlZCIsIkJsb2IiLCJ3aXRoTmF0aXZlQmxvYiIsImlzVmlldyIsImJ1ZmZlciIsImVuY29kZUJsb2JBc0Jhc2U2NCIsImZpbGVSZWFkZXIiLCJGaWxlUmVhZGVyIiwiY29udGVudCIsInJlc3VsdCIsInJlYWRBc0RhdGFVUkwiLCJTRVBBUkFUT1IiLCJmcm9tQ2hhckNvZGUiLCJlbmNvZGVkUGFja2V0cyIsImNvdW50IiwiZW5jb2RlZFBheWxvYWQiLCJkZWNvZGVkUGFja2V0IiwiTiIsIk0iLCJNQVRSSVhfQSIsIlVQUEVSX01BU0siLCJMT1dFUl9NQVNLIiwibXQiLCJtdGkiLCJjb25zdHJ1Y3RvciIsImluaXRfYnlfYXJyYXkiLCJpbml0X3NlZWQiLCJpbml0X2tleSIsImtleV9sZW5ndGgiLCJyYW5kb21faW50IiwibWFnMDEiLCJrayIsInJhbmRvbV9pbnQzMSIsInJhbmRvbV9pbmNsIiwicmFuZG9tX2V4Y2wiLCJyYW5kb21fbG9uZyIsImVuY29kZVVSSUNvbXBvbmVudCIsInFzIiwicXJ5IiwicGFpcnMiLCJwYWlyIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwicmUiLCJwYXJ0cyIsInNvdXJjZSIsImF1dGhvcml0eSIsImlwdjZ1cmkiLCJwYXRoTmFtZXMiLCJxdWVyeUtleSIsInJlZ3giLCIkMCIsIiQyIiwiQVJHX0xFTkdUSCIsInoiLCJTRUdNRU5UX1BBVFRFUk4iLCJOVU1CRVIiLCJudW1iZXJzIiwiY29tbWFuZCIsInRoZUFyZ3MiLCJwYXJzZVZhbHVlcyIsInRoZUNvbW1hbmQiLCJpbWdEYXRhIiwibngiLCJueSIsInN1cHBvcnRzU3ZnUGF0aEFyZ3VtZW50IiwicGFyc2VQYXRoIiwic3RhcnRQb2ludCIsImN1cnJlbnRQb2ludCIsInNlZ21lbnRzIiwicGF0aFR5cGUiLCJjcHgiLCJjcHkiLCJxY3B4IiwicWNweSIsInJ4IiwicnkiLCJhbmdsZSIsImxhcmdlQXJjRmxhZyIsInN3ZWVwRmxhZyIsImVuZFBvaW50IiwibWlkUG9pbnQiLCJyb3RhdGVQb2ludCIsImxhbWJkYSIsImNlbnRlclBvaW50IiwidDEiLCJ0MiIsInNjYWxlUG9pbnQiLCJzdGFydEFuZ2xlIiwiZW5kQW5nbGUiLCJ0cmFuc2xhdGVQb2ludCIsImNjdyIsImNGaWxsIiwiY1N0cm9rZSIsImZpbGxSdWxlIiwiYnVpbGRQYXRoIiwiY0lzUG9pbnRJblBhdGgiLCJwYXRoMmRQb2x5ZmlsbCIsInVybF8xIiwibWFuYWdlcl8xIiwibG9va3VwIiwiY2FjaGUiLCJwYXJzZWQiLCJzYW1lTmFtZXNwYWNlIiwibmV3Q29ubmVjdGlvbiIsImZvcmNlTmV3IiwibXVsdGlwbGV4IiwiaW8iLCJNYW5hZ2VyIiwic29ja2V0X2lvX3BhcnNlcl8xIiwibWFuYWdlcl8yIiwic29ja2V0XzEiLCJlaW8iLCJvbl8xIiwidHlwZWRfZXZlbnRzXzEiLCJuc3BzIiwic3VicyIsInJlY29ubmVjdGlvbiIsInJlY29ubmVjdGlvbkF0dGVtcHRzIiwiSW5maW5pdHkiLCJyZWNvbm5lY3Rpb25EZWxheSIsInJlY29ubmVjdGlvbkRlbGF5TWF4IiwicmFuZG9taXphdGlvbkZhY3RvciIsImJhY2tvZmYiLCJfcmVhZHlTdGF0ZSIsIl9wYXJzZXIiLCJlbmNvZGVyIiwiRW5jb2RlciIsImRlY29kZXIiLCJEZWNvZGVyIiwiX2F1dG9Db25uZWN0IiwiYXV0b0Nvbm5lY3QiLCJfcmVjb25uZWN0aW9uIiwiX3JlY29ubmVjdGlvbkF0dGVtcHRzIiwiX2EiLCJfcmVjb25uZWN0aW9uRGVsYXkiLCJfcmFuZG9taXphdGlvbkZhY3RvciIsIl9yZWNvbm5lY3Rpb25EZWxheU1heCIsIl90aW1lb3V0IiwiX3JlY29ubmVjdGluZyIsInJlY29ubmVjdCIsImVuZ2luZSIsInNraXBSZWNvbm5lY3QiLCJvcGVuU3ViRGVzdHJveSIsImVycm9yU3ViIiwiZW1pdFJlc2VydmVkIiwibWF5YmVSZWNvbm5lY3RPbk9wZW4iLCJzdWJEZXN0cm95Iiwib25waW5nIiwib25kYXRhIiwib25kZWNvZGVkIiwibnNwIiwiYWN0aXZlIiwiX2Nsb3NlIiwib25yZWNvbm5lY3QiLCJhdHRlbXB0IiwiU3RyaWN0RXZlbnRFbWl0dGVyIiwiUkVTRVJWRURfRVZFTlRTIiwiZnJlZXplIiwiY29ubmVjdCIsImNvbm5lY3RfZXJyb3IiLCJkaXNjb25uZWN0IiwiZGlzY29ubmVjdGluZyIsIm5ld0xpc3RlbmVyIiwicmVjZWl2ZUJ1ZmZlciIsInNlbmRCdWZmZXIiLCJpZHMiLCJhY2tzIiwiZmxhZ3MiLCJjb25uZWN0ZWQiLCJkaXNjb25uZWN0ZWQiLCJhdXRoIiwib25wYWNrZXQiLCJzdWJFdmVudHMiLCJQYWNrZXRUeXBlIiwiRVZFTlQiLCJwb3AiLCJpc1RyYW5zcG9ydFdyaXRhYmxlIiwiZGlzY2FyZFBhY2tldCIsInZvbGF0aWxlIiwiX3BhY2tldCIsIkNPTk5FQ1QiLCJvbmNvbm5lY3QiLCJvbmV2ZW50IiwiQklOQVJZX0VWRU5UIiwiQUNLIiwib25hY2siLCJCSU5BUllfQUNLIiwiRElTQ09OTkVDVCIsIm9uZGlzY29ubmVjdCIsIkNPTk5FQ1RfRVJST1IiLCJhY2siLCJlbWl0RXZlbnQiLCJfYW55TGlzdGVuZXJzIiwibGlzdGVuZXIiLCJzZW50IiwiZW1pdEJ1ZmZlcmVkIiwibG9jIiwiaHJlZiIsImlzX2JpbmFyeV8xIiwiZGVjb25zdHJ1Y3RQYWNrZXQiLCJidWZmZXJzIiwicGFja2V0RGF0YSIsInBhY2siLCJfZGVjb25zdHJ1Y3RQYWNrZXQiLCJhdHRhY2htZW50cyIsImlzQmluYXJ5IiwicGxhY2Vob2xkZXIiLCJfcGxhY2Vob2xkZXIiLCJudW0iLCJuZXdEYXRhIiwicmVjb25zdHJ1Y3RQYWNrZXQiLCJfcmVjb25zdHJ1Y3RQYWNrZXQiLCJiaW5hcnlfMSIsImhhc0JpbmFyeSIsImVuY29kZUFzQmluYXJ5IiwiZW5jb2RlQXNTdHJpbmciLCJkZWNvbnN0cnVjdGlvbiIsImRlY29kZVN0cmluZyIsInJlY29uc3RydWN0b3IiLCJCaW5hcnlSZWNvbnN0cnVjdG9yIiwidGFrZUJpbmFyeURhdGEiLCJzdGFydCIsImJ1ZiIsIm5leHQiLCJwYXlsb2FkIiwidHJ5UGFyc2UiLCJpc1BheWxvYWRWYWxpZCIsImZpbmlzaGVkUmVjb25zdHJ1Y3Rpb24iLCJyZWNvblBhY2siLCJiaW5EYXRhIiwid2l0aE5hdGl2ZUZpbGUiLCJGaWxlIiwidG9KU09OIiwiYWxwaGFiZXQiLCJlbmNvZGVkIiwibm93IiwiaW5pdFVJIiwiZ2FtZUNyZWF0ZWQiLCJqb2luZWQiLCJuYW1lQ29uZmlybWVkIiwiZ2FtZVN0YXJ0ZWQiLCJjcmVhdGVHYW1lQnRuIiwic2hvd0pvaW5HYW1lUHJvbXB0QnRuIiwiY29uZmlybUpvaW5HYW1lQnRuIiwicm9vbUNvZGVJbnB1dCIsInJvb21Db2RlRGlzcGxheSIsIm5hbWVJbnB1dCIsIm5hbWVDb25maXJtIiwibGVhdmVXYWl0aW5nQnRuIiwibGVhdmVHYW1lU3RhcnRBbGVydCIsImdhbWVTdGFydCIsImluaXRUcmlnZ2VyIiwiaW5pdFVJUHJvbWlzZSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJwYXJlbnRQb3BvdXRzIiwidG9nZ2xlUG9wb3V0IiwiZmxhZyIsImNvbmZpcm1OYW1lIiwibmV3R2FtZSIsInJvb21Db2RlIiwiY29uZmlybUpvaW5HYW1lIiwicGxheWVyTnVtYmVyIiwiaG9zdE5hbWUiLCJjaGFsbGVuZ2VyIiwicG9wb3V0IiwicmVtb3ZlIiwiaGlkZUluaXRpYWxTY3JlZW4iLCJ0b2dnbGVIaWRlT25BY3Rpb24iLCJ0b2dnbGVTaG93T25BY3Rpb24iLCJzdGFydENvdW50aW5nIiwiZ2MiLCJ0aW1lSW50ZXJ2YWwiLCJzcGxhc2hTd2l0Y2hlciIsInVpSW5pdFByb21pc2UiLCJnYW1lQ29udG9sbGVyIiwiZ28iLCJkcmF3R2FtZSIsImFsZXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsT0FBTyxHQUFHO0FBQ2RDLFNBQU8sRUFBRSxlQURLO0FBRWRDLFlBQVUsRUFBRSxxQkFGRTtBQUdkQyxrQkFBZ0IsRUFBRSxJQUFJO0FBSFIsQ0FBaEI7QUFNTyxJQUFNQyxNQUFiO0FBQUE7O0FBQUE7O0FBQ0Usa0JBQVlDLEdBQVosRUFBaUJDLGFBQWpCLEVBQWdDQyxNQUFoQyxFQUF3QztBQUFBOztBQUFBOztBQUN0Qyw4QkFBTUYsR0FBTixFQUFXQyxhQUFYLEVBQTBCQyxNQUExQjtBQUNBLFVBQUtDLFNBQUwsR0FBaUIsSUFBakI7O0FBQ0EsVUFBS0MsSUFBTDs7QUFDQSxVQUFLQyxHQUFMLEdBQVcsRUFBWDtBQUNBLFVBQUtDLFdBQUwsR0FBbUIsRUFBbkI7QUFDQSxVQUFLQyxpQkFBTCxHQUF5QixFQUF6QjtBQUNBLFVBQUtDLFVBQUwsR0FBa0IsQ0FBbEI7QUFDQSxVQUFLQyxLQUFMLEdBQWEsS0FBYjtBQUNBLFVBQUtDLGdCQUFMLEdBQXdCLEVBQXhCLENBVHNDLENBVXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBZHNDO0FBZXZDOztBQWhCSDtBQUFBO0FBQUEsV0FrQkUsZ0JBQU87QUFDTCxXQUFLQyxPQUFMLEdBQWUsS0FBS0MsVUFBTCxFQUFmLENBREssQ0FDNEI7O0FBQ2pDLFdBQUtDLEtBQUwsR0FBYSxLQUFLQyxRQUFMLEVBQWIsQ0FGSyxDQUV3Qjs7QUFDN0IsV0FBS0MsT0FBTCxHQUFlLEtBQUtDLFVBQUwsRUFBZixDQUhLLENBRzRCOztBQUNqQyxXQUFLQyxPQUFMLEdBQWUsS0FBS0MsVUFBTCxFQUFmLENBSkssQ0FJNEI7O0FBQ2pDLFdBQUtDLElBQUwsR0FBWSxLQUFLQyxPQUFMLEVBQVosQ0FMSyxDQUtzQjs7QUFDM0IsV0FBS0MsV0FBTCxHQUFtQixLQUFLQyxjQUFMLEVBQW5CLENBTkssQ0FNb0M7O0FBQ3pDLFdBQUtDLFdBQUw7QUFDRDtBQTFCSDtBQUFBO0FBQUEsV0E0QkUsdUJBQWM7QUFBQTs7QUFDWixXQUFLQyxlQUFMLEdBQXVCLFlBQU07QUFDM0IsY0FBSSxDQUFDYixPQUFMLENBQWFjLFVBQWIsR0FDR0MsSUFESCxDQUNRLFlBQU07QUFDVixjQUFJLE1BQUksQ0FBQ2xCLFVBQUwsS0FBb0IsQ0FBeEIsRUFBMkI7QUFDekIsa0JBQUksQ0FBQ21CLFVBQUwsQ0FBZ0IsT0FBaEI7QUFDRDs7QUFDRCxnQkFBSSxDQUFDZCxLQUFMLENBQVdZLFVBQVg7QUFDRCxTQU5IO0FBT0QsT0FSRDtBQVNEO0FBdENIO0FBQUE7QUFBQSxXQXdDRSxzQkFBMkI7QUFBQTs7QUFBQSxVQUFoQkcsU0FBZ0IsdUVBQUosRUFBSTtBQUN6QixVQUFJQyxxQkFBcUIsR0FBRyxLQUFLQSxxQkFBTCxHQUE2QixLQUFLQywrQkFBTCxFQUF6RDtBQUNBRCwyQkFBcUIsQ0FBQ0UsYUFBdEIsQ0FBb0MsS0FBS0MsR0FBTCxDQUFTQyxLQUE3QyxFQUFvRCxLQUFLRCxHQUFMLENBQVNFLE1BQTdEO0FBQ0EsVUFBSUMsd0JBQXdCLEdBQUcsSUFBSUMscURBQUosQ0FBY1AscUJBQXFCLENBQUNRLEdBQXBDLENBQS9CO0FBQ0EsVUFBSTFCLE9BQU8sR0FBRztBQUNaMkIsZUFBTyxFQUFFLG1CQUFNO0FBQ2IsY0FBSUMsWUFBWSxHQUFHQyx5REFBYyxDQUFDLE1BQUksQ0FBQ0gsR0FBTixDQUFqQztBQUNBLGNBQUlJLE9BQU8sR0FBR04sd0JBQXdCLENBQUNHLE9BQXpCLENBQWlDLEtBQWpDLEVBQXdDVixTQUF4QyxFQUFtRCxNQUFJLENBQUMxQixNQUFMLENBQVlOLE9BQS9ELENBQWQ7QUFDQSxjQUFJOEMsUUFBUSxHQUFHQyxXQUFXLENBQUMsWUFBTTtBQUMvQixrQkFBSSxDQUFDQyxLQUFMOztBQUNBLGtCQUFJLENBQUNQLEdBQUwsQ0FBU1EsU0FBVCxDQUFtQk4sWUFBbkIsRUFBaUMsQ0FBakMsRUFBb0MsQ0FBcEMsRUFBdUMsTUFBSSxDQUFDUCxHQUFMLENBQVNDLEtBQWhELEVBQXVELE1BQUksQ0FBQ0QsR0FBTCxDQUFTRSxNQUFoRSxFQUF3RSxDQUF4RSxFQUEyRSxDQUEzRSxFQUE4RSxNQUFJLENBQUNGLEdBQUwsQ0FBU0MsS0FBdkYsRUFBOEYsTUFBSSxDQUFDRCxHQUFMLENBQVNFLE1BQXZHOztBQUNBLGtCQUFJLENBQUNHLEdBQUwsQ0FBU1EsU0FBVCxDQUFtQmhCLHFCQUFxQixDQUFDRyxHQUF6QyxFQUE4QyxDQUE5QyxFQUFpRCxDQUFqRCxFQUFvREgscUJBQXFCLENBQUNHLEdBQXRCLENBQTBCQyxLQUE5RSxFQUFxRkoscUJBQXFCLENBQUNHLEdBQXRCLENBQTBCRSxNQUEvRyxFQUF1SCxDQUF2SCxFQUEwSCxDQUExSCxFQUE2SCxNQUFJLENBQUNGLEdBQUwsQ0FBU0MsS0FBdEksRUFBNkksTUFBSSxDQUFDRCxHQUFMLENBQVNFLE1BQXRKO0FBQ0QsV0FKeUIsRUFJdkIsTUFBSSxDQUFDN0IsR0FKa0IsQ0FBMUI7QUFLQSxpQkFBT29DLE9BQU8sQ0FBQ2YsSUFBUixDQUFhLFlBQU07QUFDeEIsbUJBQU8sSUFBSW9CLE9BQUosQ0FBWSxVQUFDQyxHQUFELEVBQVM7QUFDMUJDLHdCQUFVLENBQUMsWUFBTTtBQUNmQyw2QkFBYSxDQUFDUCxRQUFELENBQWI7QUFDQUssbUJBQUc7QUFDSixlQUhTLEVBR1AsR0FITyxDQUFWO0FBSUQsYUFMTSxDQUFQO0FBTUQsV0FQTSxDQUFQO0FBUUQsU0FqQlc7QUFrQlp0QixrQkFBVSxFQUFFLHNCQUFNO0FBQUU7QUFDbEIsY0FBSXlCLE9BQUo7QUFDQSxjQUFJVCxPQUFPLEdBQUcsSUFBSUssT0FBSixDQUFZLFVBQUNDLEdBQUQsRUFBTUksR0FBTixFQUFjO0FBQ3RDRCxtQkFBTyxHQUFHSCxHQUFWO0FBQ0QsV0FGYSxDQUFkO0FBR0EsY0FBSUssV0FBVyxHQUFHdkIscUJBQXFCLENBQUNHLEdBQXhDOztBQUNBLGdCQUFJLENBQUNLLEdBQUwsQ0FBU1EsU0FBVCxDQUNFTyxXQURGLEVBRUUsQ0FGRixFQUdFLENBSEYsRUFJRUEsV0FBVyxDQUFDbkIsS0FKZCxFQUtFbUIsV0FBVyxDQUFDbEIsTUFMZCxFQU1FLENBTkYsRUFPRSxDQVBGLEVBUUUsTUFBSSxDQUFDRixHQUFMLENBQVNDLEtBUlgsRUFTRSxNQUFJLENBQUNELEdBQUwsQ0FBU0UsTUFUWDs7QUFXQWdCLGlCQUFPO0FBQ1AsaUJBQU9ULE9BQVA7QUFDRDtBQXJDVyxPQUFkO0FBdUNBLGFBQU85QixPQUFQO0FBQ0Q7QUFwRkg7QUFBQTtBQUFBLFdBc0ZFLDBCQUFpQjtBQUNmLGFBQU8sS0FBS3FCLEdBQUwsQ0FBU0MsS0FBVCxHQUFpQixLQUFLRCxHQUFMLENBQVNFLE1BQWpDO0FBQ0Q7QUF4Rkg7QUFBQTtBQUFBLFdBMEZFLDJCQUFrQm1CLFdBQWxCLEVBQStCQyxZQUEvQixFQUE2Q2YsWUFBN0MsRUFBMkQ7QUFDekQsVUFBSWdCLE1BQU0sR0FBRyxLQUFLakQsV0FBbEI7QUFDQSxVQUFJa0QsWUFBWSxHQUFHLEtBQUtqRCxpQkFBeEI7QUFDQThDLGlCQUFXLENBQUNoQixHQUFaLENBQWdCb0IsSUFBaEIsR0FIeUQsQ0FJekQ7O0FBQ0EsVUFBSSxLQUFLQyxjQUFMLE1BQXlCLENBQTdCLEVBQWdDO0FBQzlCO0FBQ0E7QUFDQUwsbUJBQVcsQ0FBQ1QsS0FBWjtBQUNBLFlBQUllLEtBQUssR0FBRyxDQUFDTixXQUFXLENBQUNyQixHQUFaLENBQWdCRSxNQUFoQixHQUF5QixJQUFJcUIsTUFBOUIsSUFBd0MsS0FBS3JELE1BQUwsQ0FBWUosZ0JBQXBELEdBQXVFdUQsV0FBVyxDQUFDckIsR0FBWixDQUFnQkMsS0FBaEIsR0FBd0IsSUFBSXNCLE1BQS9HO0FBQ0EsWUFBSUssT0FBSixFQUFhQyxPQUFiLEVBQXNCQyxXQUF0QixFQUFtQ0MsVUFBbkM7O0FBQ0EsWUFBSUosS0FBSixFQUFXO0FBQ1Q7QUFDQUMsaUJBQU8sR0FBR0wsTUFBVjtBQUNBTyxxQkFBVyxHQUFHVCxXQUFXLENBQUNyQixHQUFaLENBQWdCRSxNQUFoQixHQUF5QixJQUFJcUIsTUFBM0M7QUFDQVEsb0JBQVUsR0FBR0QsV0FBVyxHQUFHLEtBQUs1RCxNQUFMLENBQVlKLGdCQUF2QztBQUNBK0QsaUJBQU8sR0FBRyxDQUFDUixXQUFXLENBQUNyQixHQUFaLENBQWdCQyxLQUFoQixHQUF3QjhCLFVBQXpCLElBQXVDLENBQWpEO0FBQ0QsU0FORCxNQU9LO0FBQ0g7QUFDQUYsaUJBQU8sR0FBR04sTUFBVjtBQUNBUSxvQkFBVSxHQUFHVixXQUFXLENBQUNyQixHQUFaLENBQWdCQyxLQUFoQixHQUF3QixJQUFJc0IsTUFBekM7QUFDQU8scUJBQVcsR0FBR0MsVUFBVSxHQUFHLEtBQUs3RCxNQUFMLENBQVlKLGdCQUF2QztBQUNBOEQsaUJBQU8sR0FBRyxDQUFDUCxXQUFXLENBQUNyQixHQUFaLENBQWdCRSxNQUFoQixHQUF5QjRCLFdBQTFCLElBQXlDLENBQW5EO0FBQ0Q7O0FBQ0QsWUFBSXZCLFlBQUosRUFBa0I7QUFDaEJjLHFCQUFXLENBQUNoQixHQUFaLENBQWdCUSxTQUFoQixDQUNFTixZQURGLEVBRUUsQ0FGRixFQUdFLENBSEYsRUFJRUEsWUFBWSxDQUFDTixLQUpmLEVBS0VNLFlBQVksQ0FBQ0wsTUFMZixFQU1FLENBTkYsRUFPRSxDQVBGLEVBUUVtQixXQUFXLENBQUNyQixHQUFaLENBQWdCQyxLQVJsQixFQVNFb0IsV0FBVyxDQUFDckIsR0FBWixDQUFnQkUsTUFUbEI7QUFZRCxTQWpDNkIsQ0FrQzlCOzs7QUFDQW1CLG1CQUFXLENBQUNoQixHQUFaLENBQWdCMkIsU0FBaEIsQ0FBMEJYLFdBQVcsQ0FBQ3JCLEdBQVosQ0FBZ0JDLEtBQWhCLEdBQXdCLENBQWxELEVBQXFEb0IsV0FBVyxDQUFDckIsR0FBWixDQUFnQkUsTUFBaEIsR0FBeUIsQ0FBOUU7QUFDQW1CLG1CQUFXLENBQUNoQixHQUFaLENBQWdCNEIsTUFBaEIsQ0FBdUIsQ0FBQ0MsSUFBSSxDQUFDQyxFQUFOLEdBQVcsQ0FBbEM7QUFDQWQsbUJBQVcsQ0FBQ2hCLEdBQVosQ0FBZ0IyQixTQUFoQixDQUEwQixDQUFDWCxXQUFXLENBQUNyQixHQUFaLENBQWdCRSxNQUFqQixHQUEwQixDQUFwRCxFQUF1RCxDQUFDbUIsV0FBVyxDQUFDckIsR0FBWixDQUFnQkMsS0FBakIsR0FBeUIsQ0FBaEYsRUFyQzhCLENBc0M5QjtBQUNBOztBQUNBb0IsbUJBQVcsQ0FBQ2hCLEdBQVosQ0FBZ0JRLFNBQWhCLENBQ0VTLFlBREYsRUFFRSxDQUZGLEVBR0UsQ0FIRixFQUlFQSxZQUFZLENBQUNyQixLQUpmLEVBS0VxQixZQUFZLENBQUNwQixNQUxmLEVBTUUwQixPQU5GLEVBT0VDLE9BUEYsRUFRRUMsV0FSRixFQVNFQyxVQVRGO0FBV0QsT0FuREQsTUFvREs7QUFDSDtBQUNBO0FBQ0E7QUFDQSxZQUFJSixNQUFLLEdBQUcsQ0FBQ04sV0FBVyxDQUFDckIsR0FBWixDQUFnQkMsS0FBaEIsR0FBd0IsSUFBSXVCLFlBQTdCLElBQTZDLEtBQUt0RCxNQUFMLENBQVlKLGdCQUF6RCxHQUE0RXVELFdBQVcsQ0FBQ3JCLEdBQVosQ0FBZ0JFLE1BQWhCLEdBQXlCLElBQUlxQixNQUFySDs7QUFDQSxZQUFJSyxRQUFKLEVBQWFDLFFBQWIsRUFBc0JDLFlBQXRCLEVBQW1DQyxXQUFuQzs7QUFDQSxZQUFJSixNQUFKLEVBQVc7QUFDVDtBQUNBRSxrQkFBTyxHQUFHTCxZQUFWO0FBQ0FPLHFCQUFVLEdBQUdWLFdBQVcsQ0FBQ3JCLEdBQVosQ0FBZ0JDLEtBQWhCLEdBQXdCLElBQUl1QixZQUF6QztBQUNBTSxzQkFBVyxHQUFHQyxXQUFVLEdBQUcsS0FBSzdELE1BQUwsQ0FBWUosZ0JBQXZDO0FBQ0E4RCxrQkFBTyxHQUFHLENBQUNQLFdBQVcsQ0FBQ3JCLEdBQVosQ0FBZ0JFLE1BQWhCLEdBQXlCNEIsWUFBMUIsSUFBeUMsQ0FBbkQ7QUFDRCxTQU5ELE1BT0s7QUFDSDtBQUNBRixrQkFBTyxHQUFHTCxNQUFWO0FBQ0FPLHNCQUFXLEdBQUdULFdBQVcsQ0FBQ3JCLEdBQVosQ0FBZ0JFLE1BQWhCLEdBQXlCLElBQUlxQixNQUEzQztBQUNBUSxxQkFBVSxHQUFHRCxZQUFXLEdBQUcsS0FBSzVELE1BQUwsQ0FBWUosZ0JBQXZDO0FBQ0ErRCxrQkFBTyxHQUFHLENBQUNSLFdBQVcsQ0FBQ3JCLEdBQVosQ0FBZ0JDLEtBQWhCLEdBQXdCOEIsV0FBekIsSUFBdUMsQ0FBakQ7QUFDRDs7QUFDRCxZQUFJeEIsWUFBSixFQUFrQjtBQUNoQmMscUJBQVcsQ0FBQ2hCLEdBQVosQ0FBZ0JRLFNBQWhCLENBQ0VOLFlBREYsRUFFRSxDQUZGLEVBR0UsQ0FIRixFQUlFQSxZQUFZLENBQUNOLEtBSmYsRUFLRU0sWUFBWSxDQUFDTCxNQUxmLEVBTUUsQ0FORixFQU9FLENBUEYsRUFRRW1CLFdBQVcsQ0FBQ3JCLEdBQVosQ0FBZ0JDLEtBUmxCLEVBU0VvQixXQUFXLENBQUNyQixHQUFaLENBQWdCRSxNQVRsQjtBQVdEOztBQUNEbUIsbUJBQVcsQ0FBQ2hCLEdBQVosQ0FBZ0JRLFNBQWhCLENBQ0VTLFlBREYsRUFFRSxDQUZGLEVBR0UsQ0FIRixFQUlFQSxZQUFZLENBQUNyQixLQUpmLEVBS0VxQixZQUFZLENBQUNwQixNQUxmLEVBTUUyQixRQU5GLEVBT0VELFFBUEYsRUFRRUcsV0FSRixFQVNFRCxZQVRGO0FBV0Q7O0FBRURULGlCQUFXLENBQUNoQixHQUFaLENBQWdCK0IsT0FBaEI7QUFDRDtBQWxNSDtBQUFBO0FBQUEsV0FvTUUsb0JBQTJCO0FBQUE7O0FBQUEsVUFBbEJDLFdBQWtCLHVFQUFKLEVBQUk7QUFDekIsVUFBSUMsbUJBQW1CLEdBQUcsS0FBS0EsbUJBQUwsR0FBMkIsS0FBS3hDLCtCQUFMLEVBQXJEO0FBQ0EsVUFBSXlDLGdCQUFnQixHQUFHLEtBQUtwRSxTQUFMLEdBQWlCLEtBQUtELE1BQUwsQ0FBWUosZ0JBQXBEO0FBQ0EsVUFBSTBFLGlCQUFpQixHQUFHLEtBQUtyRSxTQUE3QjtBQUNBbUUseUJBQW1CLENBQUN2QyxhQUFwQixDQUFrQ3dDLGdCQUFsQyxFQUFvREMsaUJBQXBEO0FBQ0EsVUFBSUMsUUFBUSxHQUFHLENBQ2I7QUFBRUMsU0FBQyxFQUFFLENBQUw7QUFBUUMsU0FBQyxFQUFFO0FBQVgsT0FEYSxFQUViO0FBQUVELFNBQUMsRUFBRUosbUJBQW1CLENBQUN0QyxHQUFwQixDQUF3QkMsS0FBN0I7QUFBb0MwQyxTQUFDLEVBQUU7QUFBdkMsT0FGYSxFQUdiO0FBQUVELFNBQUMsRUFBRUosbUJBQW1CLENBQUN0QyxHQUFwQixDQUF3QkMsS0FBN0I7QUFBb0MwQyxTQUFDLEVBQUVMLG1CQUFtQixDQUFDdEMsR0FBcEIsQ0FBd0JFO0FBQS9ELE9BSGEsRUFJYjtBQUFFd0MsU0FBQyxFQUFFLENBQUw7QUFBUUMsU0FBQyxFQUFFTCxtQkFBbUIsQ0FBQ3RDLEdBQXBCLENBQXdCRTtBQUFuQyxPQUphLEVBS2I7QUFBRXdDLFNBQUMsRUFBRSxDQUFMO0FBQVFDLFNBQUMsRUFBRTtBQUFYLE9BTGEsQ0FBZjtBQVFBLFVBQUlDLHVCQUF1QixHQUFHLElBQUlDLDJEQUFKLENBQW9CUCxtQkFBbUIsQ0FBQ2pDLEdBQXhDLEVBQTZDb0MsUUFBN0MsQ0FBOUI7QUFFQSxVQUFJNUQsS0FBSyxHQUFHO0FBQ1Z5QixlQUFPLEVBQUUsbUJBQU07QUFDYnpCLGVBQUssQ0FBQzBCLFlBQU4sR0FBcUJDLHlEQUFjLENBQUMsTUFBSSxDQUFDSCxHQUFOLENBQW5DO0FBQ0EsY0FBSUksT0FBTyxHQUFHbUMsdUJBQXVCLENBQUN0QyxPQUF4QixDQUFnQytCLFdBQWhDLEVBQTZDLE1BQUksQ0FBQ25FLE1BQUwsQ0FBWUwsVUFBekQsRUFBcUU2QixJQUFyRSxDQUEwRSxZQUFNO0FBQzVGLGdCQUFJK0MsUUFBUSxHQUFHLENBQ2I7QUFBRUMsZUFBQyxFQUFFLENBQUw7QUFBUUMsZUFBQyxFQUFFTCxtQkFBbUIsQ0FBQ3RDLEdBQXBCLENBQXdCRSxNQUF4QixHQUFpQztBQUE1QyxhQURhLEVBRWI7QUFBRXdDLGVBQUMsRUFBRUosbUJBQW1CLENBQUN0QyxHQUFwQixDQUF3QkMsS0FBN0I7QUFBb0MwQyxlQUFDLEVBQUVMLG1CQUFtQixDQUFDdEMsR0FBcEIsQ0FBd0JFLE1BQXhCLEdBQWlDO0FBQXhFLGFBRmEsQ0FBZjtBQUlBLG1CQUFPLElBQUkyQywyREFBSixDQUFvQlAsbUJBQW1CLENBQUNqQyxHQUF4QyxFQUE2Q29DLFFBQTdDLEVBQXVEbkMsT0FBdkQsQ0FBK0QrQixXQUEvRCxFQUE0RSxNQUFJLENBQUNuRSxNQUFMLENBQVlMLFVBQXhGLEVBQW9HLEtBQXBHLEVBQTJHLENBQUMsRUFBRCxFQUFLLEVBQUwsQ0FBM0csRUFBcUgsYUFBckgsQ0FBUDtBQUNELFdBTmEsQ0FBZDtBQU9BLGNBQUk2QyxRQUFRLEdBQUdDLFdBQVcsQ0FBQyxZQUFNO0FBQy9CLGtCQUFJLENBQUNtQyxpQkFBTCxDQUF1QixNQUF2QixFQUE2QlIsbUJBQW1CLENBQUN0QyxHQUFqRCxFQUFzRG5CLEtBQUssQ0FBQzBCLFlBQTVEO0FBQ0QsV0FGeUIsRUFFdkIsTUFBSSxDQUFDbEMsR0FGa0IsQ0FBMUI7QUFHQSxpQkFBT29DLE9BQU8sQ0FBQ2YsSUFBUixDQUFhLFlBQU07QUFDeEIsbUJBQU8sSUFBSW9CLE9BQUosQ0FBWSxVQUFDQyxHQUFELEVBQVM7QUFDMUJDLHdCQUFVLENBQUMsWUFBTTtBQUNmQyw2QkFBYSxDQUFDUCxRQUFELENBQWI7QUFDQUssbUJBQUc7QUFDSixlQUhTLEVBR1AsR0FITyxDQUFWO0FBSUQsYUFMTSxDQUFQO0FBTUQsV0FQTSxDQUFQO0FBU0QsU0F0QlM7QUF1QlZ0QixrQkFBVSxFQUFFLHNCQUFNO0FBQ2hCLGlCQUFPLElBQUlxQixPQUFKLENBQVksVUFBQ0MsR0FBRCxFQUFNSSxHQUFOLEVBQWM7QUFDL0Isa0JBQUksQ0FBQzJCLGlCQUFMLENBQXVCLE1BQXZCLEVBQTZCUixtQkFBbUIsQ0FBQ3RDLEdBQWpELEVBQXNEbkIsS0FBSyxDQUFDMEIsWUFBNUQ7O0FBQ0FRLGVBQUc7QUFDSixXQUhNLENBQVA7QUFJRDtBQTVCUyxPQUFaO0FBK0JBLGFBQU9sQyxLQUFQO0FBQ0Q7QUFuUEg7QUFBQTtBQUFBLFdBcVBFLHNCQUFhO0FBQ1gsVUFBSWtFLHFCQUFxQixHQUFHLEtBQUtBLHFCQUFMLEdBQTZCLEtBQUtDLFdBQUwsRUFBekQ7QUFDQSxVQUFJQyx3QkFBd0IsR0FBRyxJQUFJQyxtREFBSixDQUFZSCxxQkFBcUIsQ0FBQzFDLEdBQWxDLENBQS9CO0FBQ0EwQywyQkFBcUIsQ0FBQ3ZELGVBQXRCLEdBQXdDeUQsd0JBQXdCLENBQUNFLFlBQXpCLENBQXNDQyxJQUF0QyxDQUEyQ0gsd0JBQTNDLENBQXhDO0FBQ0EsYUFBT0Esd0JBQVA7QUFDRDtBQTFQSDtBQUFBO0FBQUEsV0E2UEUsc0JBQTZFO0FBQUE7O0FBQUEsVUFBbEVJLFNBQWtFLHVFQUF0RCxFQUFzRDtBQUFBLFVBQWxEQyxRQUFrRCx1RUFBdkMsSUFBdUM7QUFBQSxVQUFqQ0MsS0FBaUMsdUVBQXpCLE9BQXlCO0FBQUEsVUFBaEJDLFNBQWdCLHVFQUFKLEVBQUk7QUFDM0UsV0FBSzlFLGdCQUFMLEdBQXdCOEUsU0FBeEI7QUFDQSxVQUFJQyxxQkFBcUIsR0FBRyxLQUFLQSxxQkFBTCxHQUE2QixLQUFLVCxXQUFMLEVBQXpEO0FBQ0EsVUFBSVUsNEJBQTRCLEdBQUcsS0FBS0EsNEJBQUwsR0FBb0MsS0FBSzVELCtCQUFMLEVBQXZFO0FBQ0E0RCxrQ0FBNEIsQ0FBQzNELGFBQTdCLENBQTJDLEtBQUt1QyxtQkFBTCxDQUF5QnRDLEdBQXpCLENBQTZCQyxLQUF4RSxFQUErRSxLQUFLcUMsbUJBQUwsQ0FBeUJ0QyxHQUF6QixDQUE2QkUsTUFBNUc7O0FBRUEsV0FBSyxJQUFJeUQsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0MscURBQXBCLEVBQXdDRCxDQUFDLEVBQXpDLEVBQTZDO0FBQzNDQyxzREFBVyxDQUFDRCxDQUFELENBQVgsQ0FBZTFELEtBQWYsR0FBd0IsS0FBSzlCLFNBQUwsR0FBaUIsS0FBS0QsTUFBTCxDQUFZSixnQkFBOUIsR0FBa0R1RixTQUF6RTtBQUNBTyxzREFBVyxDQUFDRCxDQUFELENBQVgsQ0FBZUUsUUFBZixDQUF3Qm5CLENBQXhCLEdBQTRCLEtBQUtKLG1CQUFMLENBQXlCdEMsR0FBekIsQ0FBNkJDLEtBQTdCLEdBQXFDLENBQWpFOztBQUNBLFlBQUkwRCxDQUFDLEtBQUssQ0FBVixFQUFhO0FBQ1hDLHdEQUFXLENBQUNELENBQUQsQ0FBWCxDQUFlRSxRQUFmLENBQXdCbEIsQ0FBeEIsR0FBNEIsS0FBS0wsbUJBQUwsQ0FBeUJ0QyxHQUF6QixDQUE2QkUsTUFBN0IsSUFBdUMsSUFBSW9ELFFBQTNDLENBQTVCO0FBQ0QsU0FGRCxNQUdLLElBQUlLLENBQUMsS0FBSyxDQUFWLEVBQWE7QUFDaEJDLHdEQUFXLENBQUNELENBQUQsQ0FBWCxDQUFlRSxRQUFmLENBQXdCbEIsQ0FBeEIsR0FBNEIsS0FBS0wsbUJBQUwsQ0FBeUJ0QyxHQUF6QixDQUE2QkUsTUFBN0IsR0FBc0NvRCxRQUFsRTtBQUNEO0FBQ0Y7O0FBQ0QsVUFBSXJFLE9BQU8sR0FBRztBQUNaNkUsYUFBSyxFQUFFLGlCQUFNO0FBQ1gsY0FBSTVDLE9BQUo7QUFDQSxjQUFJVCxPQUFPLEdBQUcsSUFBSUssT0FBSixDQUFZLFVBQUFDLEdBQUcsRUFBSTtBQUMvQkcsbUJBQU8sR0FBR0gsR0FBVjtBQUNELFdBRmEsQ0FBZDtBQUdBLGNBQUlnRCxPQUFPLEdBQUcsQ0FBZDtBQUNBLGNBQUlyRCxRQUFRLEdBQUdDLFdBQVcsQ0FBQyxZQUFNO0FBQy9CLGdCQUFJb0QsT0FBTyxJQUFJLENBQWYsRUFBa0I7QUFDaEI5QywyQkFBYSxDQUFDUCxRQUFELENBQWI7QUFDQVEscUJBQU87QUFDUjs7QUFDRCxpQkFBSyxJQUFJeUMsRUFBQyxHQUFHLENBQWIsRUFBZ0JBLEVBQUMsR0FBR0MscURBQXBCLEVBQXdDRCxFQUFDLEVBQXpDLEVBQTZDO0FBQzNDSyxrRUFBUSxDQUFDTiw0QkFBNEIsQ0FBQ3JELEdBQTlCLEVBQW1DdUQsOENBQVcsQ0FBQ0QsRUFBRCxDQUFYLENBQWVFLFFBQWYsQ0FBd0JuQixDQUEzRCxFQUE4RGtCLDhDQUFXLENBQUNELEVBQUQsQ0FBWCxDQUFlRSxRQUFmLENBQXdCbEIsQ0FBdEYsRUFBeUZpQiw4Q0FBVyxDQUFDRCxFQUFELENBQVgsQ0FBZTFELEtBQXhHLEVBQStHdUQsU0FBL0csRUFBMEhELEtBQTFILEVBQWlJUSxPQUFqSSxDQUFSO0FBQ0Q7O0FBQ0Qsa0JBQUksQ0FBQ2pCLGlCQUFMLENBQXVCVyxxQkFBdkIsRUFBOENDLDRCQUE0QixDQUFDMUQsR0FBM0U7O0FBQ0ErRCxtQkFBTyxJQUFJLElBQVg7QUFDRCxXQVZ5QixFQVV2QixNQUFJLENBQUMxRixHQVZrQixDQUExQjtBQVdBLGlCQUFPb0MsT0FBUDtBQUNELFNBbkJXO0FBcUJad0Qsa0JBQVUsRUFBRSxzQkFBTTtBQUNoQixjQUFJdkQsUUFBUSxHQUFHQyxXQUFXLENBQUMsWUFBTTtBQUMvQitDLHdDQUE0QixDQUFDOUMsS0FBN0I7O0FBQ0EsaUJBQUssSUFBSStDLEdBQUMsR0FBRyxDQUFiLEVBQWdCQSxHQUFDLEdBQUdDLHFEQUFwQixFQUF3Q0QsR0FBQyxFQUF6QyxFQUE2QztBQUMzQ0ssa0VBQVEsQ0FBQ04sNEJBQTRCLENBQUNyRCxHQUE5QixFQUFtQ3VELDhDQUFXLENBQUNELEdBQUQsQ0FBWCxDQUFlRSxRQUFmLENBQXdCbkIsQ0FBM0QsRUFBOERrQiw4Q0FBVyxDQUFDRCxHQUFELENBQVgsQ0FBZUUsUUFBZixDQUF3QmxCLENBQXRGLEVBQXlGaUIsOENBQVcsQ0FBQ0QsR0FBRCxDQUFYLENBQWUxRCxLQUF4RyxFQUErR3VELFNBQS9HLEVBQTBIRCxLQUExSCxFQUFpSSxDQUFqSSxDQUFSO0FBQ0Q7O0FBQ0Qsa0JBQUksQ0FBQ1QsaUJBQUwsQ0FBdUJXLHFCQUF2QixFQUE4Q0MsNEJBQTRCLENBQUMxRCxHQUEzRTtBQUNELFdBTnlCLEVBTXZCLE1BQUksQ0FBQzNCLEdBTmtCLENBQTFCO0FBT0Q7QUE3QlcsT0FBZDtBQWdDQSxhQUFPWSxPQUFQO0FBQ0Q7QUE5U0g7QUFBQTtBQUFBLFdBZ1RFLDBCQUFpQjtBQUNmLFVBQUlpRixnQkFBZ0IsR0FBRyxLQUFLQyxXQUFMLENBQWlCLGFBQWpCLEVBQWdDLGFBQWhDLENBQXZCO0FBQ0EsVUFBSUMsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBYjtBQUNBLFVBQUlDLE1BQU0sR0FBR0YsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQWI7QUFDQUYsWUFBTSxDQUFDSSxTQUFQLENBQWlCQyxHQUFqQixDQUFxQixzQkFBckI7QUFDQUYsWUFBTSxDQUFDQyxTQUFQLENBQWlCQyxHQUFqQixDQUFxQixzQkFBckI7QUFDQVAsc0JBQWdCLENBQUNRLE1BQWpCLENBQXdCTixNQUF4QixFQUFnQ0csTUFBaEM7O0FBQ0EsVUFBSUksaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDQyxVQUFELEVBQWFDLFFBQWIsRUFBdUJDLFFBQXZCLEVBQW9DO0FBRTFELFlBQUlDLGNBQWMsR0FBR1YsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQXJCO0FBQ0FTLHNCQUFjLENBQUNQLFNBQWYsQ0FBeUJDLEdBQXpCLENBQTZCLGlCQUE3QjtBQUNBTSxzQkFBYyxDQUFDQyxFQUFmLEdBQW9CSCxRQUFwQjtBQUNBLFlBQUlJLFNBQVMsNERBQzBCTCxVQUQxQixzR0FBYjtBQU1BRyxzQkFBYyxDQUFDRSxTQUFmLEdBQTJCQSxTQUEzQjtBQUNBLGVBQU9GLGNBQVA7QUFDRCxPQWJEOztBQWNBLFdBQUssSUFBSXBCLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdDLHFEQUFwQixFQUF3Q0QsQ0FBQyxFQUF6QyxFQUE2QztBQUMzQ1MsY0FBTSxDQUFDTSxNQUFQLENBQWNDLGlCQUFpQixDQUFDZiw4Q0FBVyxDQUFDRCxDQUFELENBQVgsQ0FBZXVCLElBQWhCLEVBQXNCdEIsOENBQVcsQ0FBQ0QsQ0FBRCxDQUFYLENBQWVxQixFQUFyQyxFQUF5QyxDQUF6QyxDQUEvQjtBQUNEOztBQUNELFVBQUkzRixXQUFXLEdBQUc7QUFDaEI4RixtQkFBVyxFQUFFLHFCQUFDTixRQUFELEVBQVdPLEtBQVgsRUFBcUIsQ0FFakMsQ0FIZTtBQUloQnRCLGFBQUssRUFBRSxpQkFBTTtBQUNYSSwwQkFBZ0IsQ0FBQ00sU0FBakIsQ0FBMkJDLEdBQTNCLENBQStCLG9CQUEvQjtBQUNELFNBTmU7QUFPaEJSLGtCQUFVLEVBQUUsc0JBQU0sQ0FFakI7QUFUZSxPQUFsQjtBQVlBLGFBQU81RSxXQUFQO0FBQ0Q7QUFyVkg7QUFBQTtBQUFBLFdBdVZFLG1CQUFpRDtBQUFBOztBQUFBLFVBQXpDZ0csS0FBeUMsdUVBQWpDLEdBQWlDO0FBQUEsVUFBNUJDLElBQTRCLHVFQUFyQixFQUFxQjtBQUFBLFVBQWpCL0IsS0FBaUIsdUVBQVQsT0FBUztBQUMvQyxVQUFJZ0Msa0JBQWtCLEdBQUcsS0FBS0Esa0JBQUwsR0FBMEIsS0FBS3ZDLFdBQUwsRUFBbkQ7QUFDQSxVQUFJd0MseUJBQXlCLEdBQUcsS0FBS0EseUJBQUwsR0FBaUMsS0FBSzFGLCtCQUFMLEVBQWpFO0FBQ0EwRiwrQkFBeUIsQ0FBQ3pGLGFBQTFCLENBQXdDLEtBQUt1QyxtQkFBTCxDQUF5QnRDLEdBQXpCLENBQTZCQyxLQUFyRSxFQUE0RSxLQUFLcUMsbUJBQUwsQ0FBeUJ0QyxHQUF6QixDQUE2QkUsTUFBekcsRUFIK0MsQ0FLL0M7O0FBRUF1Rix1REFBQSxHQUFpQjtBQUNmL0MsU0FBQyxFQUFFZ0QsZ0VBQWlCLENBQUMsQ0FBRCxFQUFJTCxLQUFKLENBREw7QUFFZjFDLFNBQUMsRUFBRStDLGdFQUFpQixDQUFDLENBQUQsRUFBSUwsS0FBSjtBQUZMLE9BQWpCO0FBSUFJLHNEQUFBLEdBQWdCSCxJQUFoQjtBQUNBRyx1REFBQSxHQUFpQmxDLEtBQWpCO0FBQ0FrQywwREFBQSxHQUFvQjtBQUNsQi9DLFNBQUMsRUFBRWtCLDREQURlO0FBQ1k7QUFDOUJqQixTQUFDLEVBQUVpQiw0REFBQSxHQUE0QixLQUFLbEYsZ0JBQWpDLEdBQW9EO0FBRnJDLE9BQXBCO0FBS0EsVUFBSVMsSUFBSSxHQUFHO0FBQ1QyRSxhQUFLLEVBQUUsaUJBQU07QUFDWCxjQUFJNUMsT0FBSjtBQUNBLGNBQUlULE9BQU8sR0FBRyxJQUFJSyxPQUFKLENBQVksVUFBQUMsR0FBRyxFQUFJO0FBQy9CRyxtQkFBTyxHQUFHSCxHQUFWO0FBQ0QsV0FGYSxDQUFkO0FBR0EsY0FBSWdELE9BQU8sR0FBRyxDQUFkO0FBQ0EvQyxvQkFBVSxDQUFDLFlBQU07QUFDZixnQkFBSU4sUUFBUSxHQUFHQyxXQUFXLENBQUMsWUFBTTtBQUMvQixrQkFBSW9ELE9BQU8sSUFBSSxDQUFmLEVBQWtCO0FBQ2hCOUMsNkJBQWEsQ0FBQ1AsUUFBRCxDQUFiO0FBQ0FRLHVCQUFPO0FBQ1I7O0FBQ0R5RSxvRUFBVSxDQUFDSCx5QkFBeUIsQ0FBQ25GLEdBQTNCLEVBQWdDb0Ysc0RBQWhDLEVBQXFEQSxzREFBckQsRUFBMEVBLGdEQUExRSxFQUF5RkEsaURBQXpGLEVBQXlHMUIsT0FBekcsQ0FBVjs7QUFDQSxvQkFBSSxDQUFDakIsaUJBQUwsQ0FBdUJ5QyxrQkFBdkIsRUFBMkNDLHlCQUF5QixDQUFDeEYsR0FBckU7O0FBRUErRCxxQkFBTyxJQUFJLElBQVg7QUFDRCxhQVR5QixFQVN2QixNQUFJLENBQUMxRixHQVRrQixDQUExQjtBQVVELFdBWFMsRUFXUCxHQVhPLENBQVY7QUFZQSxpQkFBT29DLE9BQVA7QUFDRCxTQXBCUTtBQXFCVHdELGtCQUFVLEVBQUUsc0JBQU07QUFDaEIsY0FBSXZELFFBQVEsR0FBR0MsV0FBVyxDQUFDLFlBQU07QUFDL0I2RSxxQ0FBeUIsQ0FBQzVFLEtBQTFCO0FBQ0ErRSxrRUFBVSxDQUFDSCx5QkFBeUIsQ0FBQ25GLEdBQTNCLEVBQWdDb0Ysc0RBQWhDLEVBQXFEQSxzREFBckQsRUFBMEVBLGdEQUExRSxFQUF5RkEsaURBQXpGLENBQVY7O0FBQ0Esa0JBQUksQ0FBQzNDLGlCQUFMLENBQXVCeUMsa0JBQXZCLEVBQTJDQyx5QkFBeUIsQ0FBQ3hGLEdBQXJFO0FBQ0QsV0FKeUIsRUFJdkIsTUFBSSxDQUFDM0IsR0FKa0IsQ0FBMUI7QUFLRDtBQTNCUSxPQUFYO0FBNkJBLGFBQU9jLElBQVA7QUFDRDtBQXZZSDtBQUFBO0FBQUEsV0F5WUUsb0JBQVc7QUFBQTs7QUFDVCxXQUFLWCxVQUFMLEdBQWtCLENBQWxCO0FBQ0EsV0FBS08sT0FBTCxDQUFhdUIsT0FBYjtBQUNBLFVBQUlHLE9BQU8sR0FBRyxLQUFLOUIsT0FBTCxDQUFhMkIsT0FBYixFQUFkO0FBQ0FHLGFBQU8sQ0FDSmYsSUFESCxDQUNRLFlBQU07QUFDVixjQUFJLENBQUNsQixVQUFMLEdBQWtCLENBQWxCO0FBQ0EsZUFBTyxNQUFJLENBQUNLLEtBQUwsQ0FBV3lCLE9BQVgsRUFBUDtBQUNELE9BSkgsRUFLR1osSUFMSCxDQUtRLFlBQU07QUFDVixjQUFJLENBQUNsQixVQUFMLEdBQWtCLENBQWxCOztBQUNBLFlBQUlvSCxZQUFZLEdBQUcsTUFBSSxDQUFDM0csT0FBTCxDQUFhNkUsS0FBYixFQUFuQjs7QUFDQSxZQUFJK0IsU0FBUyxHQUFHLE1BQUksQ0FBQzFHLElBQUwsQ0FBVTJFLEtBQVYsRUFBaEI7O0FBQ0EsWUFBSWdDLGdCQUFnQixHQUFHLE1BQUksQ0FBQ3pHLFdBQUwsQ0FBaUJ5RSxLQUFqQixFQUF2Qjs7QUFDQSxZQUFJaUMsZUFBZSxHQUFHakYsT0FBTyxDQUFDa0YsR0FBUixDQUFZLENBQ2hDSixZQURnQyxFQUNsQkMsU0FEa0IsRUFDUEMsZ0JBRE8sQ0FBWixDQUF0QjtBQUdBLGVBQU9DLGVBQVA7QUFDRCxPQWRILEVBZUdyRyxJQWZILENBZVEsWUFBTTtBQUNWLGNBQUksQ0FBQ2xCLFVBQUwsR0FBa0IsQ0FBbEI7QUFDQSxZQUFJeUgsZ0JBQWdCLEdBQUcsSUFBSW5GLE9BQUosQ0FBWSxVQUFDQyxHQUFELEVBQU1JLEdBQU4sRUFBYztBQUMvQyxnQkFBSSxDQUFDK0UsMEJBQUw7O0FBQ0FuRixhQUFHO0FBQ0osU0FIc0IsQ0FBdkI7QUFJQSxlQUFPa0YsZ0JBQVA7QUFDRCxPQXRCSDtBQXVCQSxhQUFPeEYsT0FBUDtBQUNEO0FBcmFIO0FBQUE7QUFBQSxXQXVhRSxzQ0FBNkI7QUFDM0IsV0FBS3hCLE9BQUwsQ0FBYWdGLFVBQWI7QUFDQSxXQUFLOUUsSUFBTCxDQUFVOEUsVUFBVjtBQUNBLFdBQUs1RSxXQUFMLENBQWlCNEUsVUFBakI7QUFDRDtBQTNhSDs7QUFBQTtBQUFBLEVBQTRCa0MscURBQTVCO0FBaWJPLFNBQVNDLFdBQVQsR0FBdUI7QUFDNUIsTUFBSUMsSUFBSSxHQUFHQywrQ0FBSSxDQUFDdkksTUFBRCxFQUFTSixPQUFULEVBQWtCLEVBQWxCLEVBQXNCMEcsUUFBUSxDQUFDa0MsSUFBL0IsQ0FBZjtBQUNBLFNBQU9GLElBQVA7QUFDRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqY0Q7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNakcsU0FBYjtBQUNFLHFCQUFZQyxHQUFaLEVBQWlCO0FBQUE7O0FBQ2YsU0FBS21HLG1CQUFMLEdBQTJCLENBQ3pCO0FBQUV0QixVQUFJLEVBQUUsSUFBUjtBQUFjeEMsT0FBQyxFQUFFLENBQWpCO0FBQW9CQyxPQUFDLEVBQUU7QUFBdkIsS0FEeUIsRUFFekI7QUFBRXVDLFVBQUksRUFBRSxJQUFSO0FBQWN4QyxPQUFDLEVBQUUsQ0FBakI7QUFBb0JDLE9BQUMsRUFBRTtBQUF2QixLQUZ5QixFQUd6QjtBQUFFdUMsVUFBSSxFQUFFLElBQVI7QUFBY3hDLE9BQUMsRUFBRSxDQUFqQjtBQUFvQkMsT0FBQyxFQUFFO0FBQXZCLEtBSHlCLEVBSXpCO0FBQUV1QyxVQUFJLEVBQUUsSUFBUjtBQUFjeEMsT0FBQyxFQUFFLENBQWpCO0FBQW9CQyxPQUFDLEVBQUU7QUFBdkIsS0FKeUIsQ0FBM0I7QUFNQSxTQUFLOEQsWUFBTCxHQUFvQixDQUNsQjtBQUFFdkIsVUFBSSxFQUFFLElBQVI7QUFBY3hDLE9BQUMsRUFBRSxDQUFqQjtBQUFvQkMsT0FBQyxFQUFFO0FBQXZCLEtBRGtCLEVBRWxCO0FBQUV1QyxVQUFJLEVBQUUsSUFBUjtBQUFjeEMsT0FBQyxFQUFFLENBQWpCO0FBQW9CQyxPQUFDLEVBQUU7QUFBdkIsS0FGa0IsRUFHbEI7QUFBRXVDLFVBQUksRUFBRSxJQUFSO0FBQWN4QyxPQUFDLEVBQUUsQ0FBakI7QUFBb0JDLE9BQUMsRUFBRTtBQUF2QixLQUhrQixFQUlsQjtBQUFFdUMsVUFBSSxFQUFFLElBQVI7QUFBY3hDLE9BQUMsRUFBRSxDQUFqQjtBQUFvQkMsT0FBQyxFQUFFO0FBQXZCLEtBSmtCLENBQXBCO0FBTUEsU0FBS3RDLEdBQUwsR0FBV0EsR0FBWDtBQUNBLFNBQUtMLEdBQUwsR0FBV0ssR0FBRyxDQUFDcUcsTUFBZjtBQUNBLFNBQUtDLG1CQUFMO0FBQ0EsU0FBS0MsS0FBTCxHQUFhLENBQWI7QUFDQSxTQUFLQyxJQUFMLEdBQVksSUFBSUMsTUFBSixFQUFaO0FBQ0EsU0FBS3ZHLFlBQUwsR0FBb0JDLHFEQUFjLENBQUMsS0FBS0gsR0FBTixDQUFsQztBQUNBLFNBQUswRyxjQUFMLEdBQXNCLENBQXRCO0FBQ0Q7O0FBckJIO0FBQUE7QUFBQSxXQXNCRSwwQkFBaUJDLFNBQWpCLEVBQTRCSixLQUE1QixFQUFtQ0ssVUFBbkMsRUFBK0NDLFdBQS9DLEVBQTREO0FBQzFELFVBQUlDLFlBQVksR0FBR0gsU0FBUyxHQUFHLEtBQUtQLFlBQVIsR0FBdUIsS0FBS0QsbUJBQXhEO0FBRUEsVUFBSVksUUFBUSxHQUFHO0FBQ2JsQyxZQUFJLEVBQUVpQyxZQUFZLENBQUNQLEtBQUQsQ0FBWixDQUFvQjFCLElBRGI7QUFFYnhDLFNBQUMsRUFBRXlFLFlBQVksQ0FBQ1AsS0FBRCxDQUFaLENBQW9CbEUsQ0FBcEIsR0FBd0J1RSxVQUF4QixHQUFxQyxLQUFLRixjQUZoQztBQUdicEUsU0FBQyxFQUFFd0UsWUFBWSxDQUFDUCxLQUFELENBQVosQ0FBb0JqRSxDQUFwQixHQUF3QnVFLFdBQXhCLEdBQXNDLEtBQUtIO0FBSGpDLE9BQWY7QUFLQSxhQUFPSyxRQUFQO0FBQ0Q7QUEvQkg7QUFBQTtBQUFBLFdBZ0NFLG1CQUFvRTtBQUFBOztBQUFBLFVBQTVESixTQUE0RCx1RUFBaEQsS0FBZ0Q7QUFBQSxVQUF6Q3BILFNBQXlDLHVFQUE3QixFQUE2QjtBQUFBLFVBQXpCMkQsS0FBeUIsdUVBQWpCLGVBQWlCO0FBQ2xFLFVBQUk4RCxnQkFBZ0IsR0FBRyxJQUFJdkcsT0FBSixDQUFZLFVBQUNDLEdBQUQsRUFBTUksR0FBTixFQUFjO0FBQy9DLGFBQUksQ0FBQ3dGLG1CQUFMLEdBQTJCNUYsR0FBM0I7QUFDRCxPQUZzQixDQUF2QjtBQUdBLFdBQUt1RyxTQUFMLENBQWVOLFNBQWYsRUFBMEJwSCxTQUExQixFQUFxQzJELEtBQXJDO0FBRUEsYUFBTzhELGdCQUFQO0FBQ0Q7QUF2Q0g7QUFBQTtBQUFBLFdBeUNFLG1CQUFVTCxTQUFWLEVBQXFCcEgsU0FBckIsRUFBZ0MyRCxLQUFoQyxFQUF1QztBQUFBOztBQUNyQyxVQUFJN0MsUUFBUSxHQUFHQyxXQUFXLENBQUMsWUFBTTtBQUMvQixjQUFJLENBQUNrRyxJQUFMLENBQVVVLE9BQVYsQ0FBa0IsTUFBSSxDQUFDQyx3QkFBTCxDQUNoQjVILFNBRGdCLEVBRWhCLE1BQUksQ0FBQ0ksR0FBTCxDQUFTQyxLQUFULEdBQWlCLElBQUksTUFBSSxDQUFDOEcsY0FGVixFQUdoQixNQUFJLENBQUMvRyxHQUFMLENBQVNFLE1BQVQsR0FBa0IsSUFBSSxNQUFJLENBQUM2RyxjQUhYLEVBSWhCLE1BQUksQ0FBQ1UsZ0JBQUwsQ0FBc0JULFNBQXRCLEVBQWlDLE1BQUksQ0FBQ0osS0FBdEMsRUFBNkMsTUFBSSxDQUFDNUcsR0FBTCxDQUFTQyxLQUFULEdBQWlCLElBQUksTUFBSSxDQUFDOEcsY0FBdkUsRUFBdUYsTUFBSSxDQUFDL0csR0FBTCxDQUFTRSxNQUFULEdBQWtCLElBQUksTUFBSSxDQUFDNkcsY0FBbEgsQ0FKZ0IsRUFLaEJ4RCxLQUxnQixFQU1oQnlELFNBTmdCLENBQWxCOztBQVFBLGNBQUksQ0FBQzNHLEdBQUwsQ0FBU3FILElBQVQsQ0FBYyxNQUFJLENBQUNiLElBQW5COztBQUNBLFlBQUksTUFBSSxDQUFDN0csR0FBTCxDQUFTQyxLQUFULEdBQWlCLElBQUksTUFBSSxDQUFDOEcsY0FBMUIsR0FBMkMsQ0FBM0MsSUFBZ0QsTUFBSSxDQUFDL0csR0FBTCxDQUFTRSxNQUFULEdBQWtCLElBQUksTUFBSSxDQUFDNkcsY0FBM0IsR0FBNEMsQ0FBaEcsRUFBbUc7QUFFakcsY0FBSSxNQUFJLENBQUNILEtBQUwsR0FBYSxDQUFqQixFQUFvQjtBQUNsQixrQkFBSSxDQUFDQSxLQUFMO0FBQ0QsV0FGRCxNQUdLO0FBQ0gsa0JBQUksQ0FBQ0EsS0FBTCxHQUFhLENBQWI7QUFDQSxrQkFBSSxDQUFDRyxjQUFMLElBQXVCbkgsU0FBdkI7QUFFRDtBQUVGLFNBWEQsTUFZSztBQUNIcUIsdUJBQWEsQ0FBQ1AsUUFBRCxDQUFiOztBQUNBLGdCQUFJLENBQUNpRyxtQkFBTDtBQUNEO0FBRUYsT0EzQnlCLEVBMkJ2QixFQTNCdUIsQ0FBMUI7QUE0QkQ7QUF0RUg7QUFBQTtBQUFBLFdBd0VFLGtDQUF5Qi9HLFNBQXpCLEVBQW9DSyxLQUFwQyxFQUEyQ0MsTUFBM0MsRUFBbUR5SCxLQUFuRCxFQUEwRHBFLEtBQTFELEVBQWlFeUQsU0FBakUsRUFBNEU7QUFDMUUsVUFBSUgsSUFBSSxHQUFHLElBQUlDLE1BQUosRUFBWDs7QUFDQSxVQUFJYSxLQUFLLENBQUN6QyxJQUFOLEtBQWUsSUFBbkIsRUFBeUI7QUFDdkIsYUFBSzBDLG9CQUFMLENBQTBCZixJQUExQixFQUFnQ2pILFNBQWhDLEVBQTJDSyxLQUEzQyxFQUFrREMsTUFBbEQsRUFBMER5SCxLQUExRCxFQUFpRVgsU0FBakU7QUFDRCxPQUZELE1BR0ssSUFBSVcsS0FBSyxDQUFDekMsSUFBTixLQUFlLElBQW5CLEVBQXlCO0FBQzVCLGFBQUsyQyxvQkFBTCxDQUEwQmhCLElBQTFCLEVBQWdDakgsU0FBaEMsRUFBMkNLLEtBQTNDLEVBQWtEQyxNQUFsRCxFQUEwRHlILEtBQTFELEVBQWlFWCxTQUFqRTtBQUNELE9BRkksTUFHQSxJQUFJVyxLQUFLLENBQUN6QyxJQUFOLEtBQWUsSUFBbkIsRUFBeUI7QUFDNUIsYUFBSzRDLG9CQUFMLENBQTBCakIsSUFBMUIsRUFBZ0NqSCxTQUFoQyxFQUEyQ0ssS0FBM0MsRUFBa0RDLE1BQWxELEVBQTBEeUgsS0FBMUQsRUFBaUVYLFNBQWpFO0FBQ0QsT0FGSSxNQUdBLElBQUlXLEtBQUssQ0FBQ3pDLElBQU4sS0FBZSxJQUFuQixFQUF5QjtBQUM1QixhQUFLNkMsb0JBQUwsQ0FBMEJsQixJQUExQixFQUFnQ2pILFNBQWhDLEVBQTJDSyxLQUEzQyxFQUFrREMsTUFBbEQsRUFBMER5SCxLQUExRCxFQUFpRVgsU0FBakU7QUFDRDs7QUFDRCxhQUFPSCxJQUFQO0FBQ0Q7QUF2Rkg7QUFBQTtBQUFBLFdBd0ZFLDhCQUFxQkEsSUFBckIsRUFBMkJqSCxTQUEzQixFQUFzQ0ssS0FBdEMsRUFBNkNDLE1BQTdDLEVBQXFEeUgsS0FBckQsRUFBNERYLFNBQTVELEVBQXVFO0FBQ3JFSCxVQUFJLENBQUNtQixNQUFMLENBQVlMLEtBQUssQ0FBQ2pGLENBQWxCLEVBQXFCaUYsS0FBSyxDQUFDaEYsQ0FBM0I7O0FBQ0EsVUFBSXFFLFNBQUosRUFBZTtBQUNiLFlBQUlpQixZQUFZLEdBQUd2Qyw0REFBaUIsQ0FBQyxNQUFNeEYsTUFBUCxFQUFlLE1BQU1BLE1BQXJCLENBQXBDO0FBQ0EyRyxZQUFJLENBQUNxQixNQUFMLENBQVlQLEtBQUssQ0FBQ2pGLENBQU4sR0FBVXpDLEtBQXRCLEVBQTZCMEgsS0FBSyxDQUFDaEYsQ0FBbkM7QUFDQWtFLFlBQUksQ0FBQ3FCLE1BQUwsQ0FBWVAsS0FBSyxDQUFDakYsQ0FBTixHQUFVekMsS0FBdEIsRUFBNkIwSCxLQUFLLENBQUNoRixDQUFOLEdBQVVzRixZQUF2QztBQUNBcEIsWUFBSSxDQUFDcUIsTUFBTCxDQUFZUCxLQUFLLENBQUNqRixDQUFOLEdBQVV6QyxLQUFWLEdBQWtCTCxTQUE5QixFQUF5QytILEtBQUssQ0FBQ2hGLENBQU4sR0FBVXNGLFlBQW5EO0FBQ0FwQixZQUFJLENBQUNxQixNQUFMLENBQVlQLEtBQUssQ0FBQ2pGLENBQU4sR0FBVXpDLEtBQVYsR0FBa0JMLFNBQTlCLEVBQXlDK0gsS0FBSyxDQUFDaEYsQ0FBTixHQUFVL0MsU0FBbkQ7QUFDQWlILFlBQUksQ0FBQ3FCLE1BQUwsQ0FBWVAsS0FBSyxDQUFDakYsQ0FBbEIsRUFBcUJpRixLQUFLLENBQUNoRixDQUFOLEdBQVUvQyxTQUEvQjtBQUNELE9BUEQsTUFRSztBQUNILFlBQUl1SSxXQUFXLEdBQUd6Qyw0REFBaUIsQ0FBQyxNQUFNekYsS0FBUCxFQUFjLE1BQU1BLEtBQXBCLENBQW5DO0FBQ0E0RyxZQUFJLENBQUNxQixNQUFMLENBQVlQLEtBQUssQ0FBQ2pGLENBQU4sR0FBVTlDLFNBQXRCLEVBQWlDK0gsS0FBSyxDQUFDaEYsQ0FBdkM7QUFDQWtFLFlBQUksQ0FBQ3FCLE1BQUwsQ0FBWVAsS0FBSyxDQUFDakYsQ0FBTixHQUFVOUMsU0FBdEIsRUFBaUMrSCxLQUFLLENBQUNoRixDQUFOLEdBQVV6QyxNQUFWLEdBQW1CTixTQUFwRDtBQUNBaUgsWUFBSSxDQUFDcUIsTUFBTCxDQUFZUCxLQUFLLENBQUNqRixDQUFOLEdBQVV5RixXQUF0QixFQUFtQ1IsS0FBSyxDQUFDaEYsQ0FBTixHQUFVekMsTUFBVixHQUFtQk4sU0FBdEQ7QUFDQWlILFlBQUksQ0FBQ3FCLE1BQUwsQ0FBWVAsS0FBSyxDQUFDakYsQ0FBTixHQUFVeUYsV0FBdEIsRUFBbUNSLEtBQUssQ0FBQ2hGLENBQU4sR0FBVXpDLE1BQTdDO0FBQ0EyRyxZQUFJLENBQUNxQixNQUFMLENBQVlQLEtBQUssQ0FBQ2pGLENBQWxCLEVBQXFCaUYsS0FBSyxDQUFDaEYsQ0FBTixHQUFVekMsTUFBL0I7QUFDRDtBQUNGO0FBMUdIO0FBQUE7QUFBQSxXQTJHRSw4QkFBcUIyRyxJQUFyQixFQUEyQmpILFNBQTNCLEVBQXNDSyxLQUF0QyxFQUE2Q0MsTUFBN0MsRUFBcUR5SCxLQUFyRCxFQUE0RFgsU0FBNUQsRUFBdUU7QUFDckVILFVBQUksQ0FBQ21CLE1BQUwsQ0FBWUwsS0FBSyxDQUFDakYsQ0FBbEIsRUFBcUJpRixLQUFLLENBQUNoRixDQUEzQjs7QUFDQSxVQUFJcUUsU0FBSixFQUFlO0FBQ2IsWUFBSW1CLFdBQVcsR0FBR3pDLDREQUFpQixDQUFDLE1BQU16RixLQUFQLEVBQWMsTUFBTUEsS0FBcEIsQ0FBbkM7QUFDQTRHLFlBQUksQ0FBQ3FCLE1BQUwsQ0FBWVAsS0FBSyxDQUFDakYsQ0FBTixHQUFVOUMsU0FBdEIsRUFBaUMrSCxLQUFLLENBQUNoRixDQUF2QztBQUNBa0UsWUFBSSxDQUFDcUIsTUFBTCxDQUFZUCxLQUFLLENBQUNqRixDQUFOLEdBQVU5QyxTQUF0QixFQUFpQytILEtBQUssQ0FBQ2hGLENBQU4sR0FBVXpDLE1BQVYsR0FBbUJOLFNBQXBEO0FBQ0FpSCxZQUFJLENBQUNxQixNQUFMLENBQVlQLEtBQUssQ0FBQ2pGLENBQU4sR0FBVXlGLFdBQXRCLEVBQW1DUixLQUFLLENBQUNoRixDQUFOLEdBQVV6QyxNQUFWLEdBQW1CTixTQUF0RDtBQUNBaUgsWUFBSSxDQUFDcUIsTUFBTCxDQUFZUCxLQUFLLENBQUNqRixDQUFOLEdBQVV5RixXQUF0QixFQUFtQ1IsS0FBSyxDQUFDaEYsQ0FBTixHQUFVekMsTUFBN0M7QUFDQTJHLFlBQUksQ0FBQ3FCLE1BQUwsQ0FBWVAsS0FBSyxDQUFDakYsQ0FBbEIsRUFBcUJpRixLQUFLLENBQUNoRixDQUFOLEdBQVV6QyxNQUEvQjtBQUNELE9BUEQsTUFRSztBQUNILFlBQUkrSCxZQUFZLEdBQUd2Qyw0REFBaUIsQ0FBQyxNQUFNeEYsTUFBUCxFQUFlLE1BQU1BLE1BQXJCLENBQXBDO0FBQ0EyRyxZQUFJLENBQUNxQixNQUFMLENBQVlQLEtBQUssQ0FBQ2pGLENBQWxCLEVBQXFCaUYsS0FBSyxDQUFDaEYsQ0FBTixHQUFVL0MsU0FBL0I7QUFDQWlILFlBQUksQ0FBQ3FCLE1BQUwsQ0FBWVAsS0FBSyxDQUFDakYsQ0FBTixHQUFVekMsS0FBVixHQUFrQkwsU0FBOUIsRUFBeUMrSCxLQUFLLENBQUNoRixDQUFOLEdBQVUvQyxTQUFuRDtBQUNBaUgsWUFBSSxDQUFDcUIsTUFBTCxDQUFZUCxLQUFLLENBQUNqRixDQUFOLEdBQVV6QyxLQUFWLEdBQWtCTCxTQUE5QixFQUF5QytILEtBQUssQ0FBQ2hGLENBQU4sR0FBVXNGLFlBQW5EO0FBQ0FwQixZQUFJLENBQUNxQixNQUFMLENBQVlQLEtBQUssQ0FBQ2pGLENBQU4sR0FBVXpDLEtBQXRCLEVBQTZCMEgsS0FBSyxDQUFDaEYsQ0FBTixHQUFVc0YsWUFBdkM7QUFDQXBCLFlBQUksQ0FBQ3FCLE1BQUwsQ0FBWVAsS0FBSyxDQUFDakYsQ0FBTixHQUFVekMsS0FBdEIsRUFBNkIwSCxLQUFLLENBQUNoRixDQUFuQztBQUNEO0FBQ0Y7QUE3SEg7QUFBQTtBQUFBLFdBOEhFLDhCQUFxQmtFLElBQXJCLEVBQTJCakgsU0FBM0IsRUFBc0NLLEtBQXRDLEVBQTZDQyxNQUE3QyxFQUFxRHlILEtBQXJELEVBQTREWCxTQUE1RCxFQUF1RTtBQUNyRUgsVUFBSSxDQUFDbUIsTUFBTCxDQUFZTCxLQUFLLENBQUNqRixDQUFsQixFQUFxQmlGLEtBQUssQ0FBQ2hGLENBQTNCOztBQUNBLFVBQUlxRSxTQUFKLEVBQWU7QUFDYixZQUFJaUIsWUFBWSxHQUFHdkMsNERBQWlCLENBQUMsTUFBTXhGLE1BQVAsRUFBZSxNQUFNQSxNQUFyQixDQUFwQztBQUNBMkcsWUFBSSxDQUFDcUIsTUFBTCxDQUFZUCxLQUFLLENBQUNqRixDQUFsQixFQUFxQmlGLEtBQUssQ0FBQ2hGLENBQU4sR0FBVS9DLFNBQS9CO0FBQ0FpSCxZQUFJLENBQUNxQixNQUFMLENBQVlQLEtBQUssQ0FBQ2pGLENBQU4sR0FBVXpDLEtBQVYsR0FBa0JMLFNBQTlCLEVBQXlDK0gsS0FBSyxDQUFDaEYsQ0FBTixHQUFVL0MsU0FBbkQ7QUFDQWlILFlBQUksQ0FBQ3FCLE1BQUwsQ0FBWVAsS0FBSyxDQUFDakYsQ0FBTixHQUFVekMsS0FBVixHQUFrQkwsU0FBOUIsRUFBeUMrSCxLQUFLLENBQUNoRixDQUFOLEdBQVVzRixZQUFuRDtBQUNBcEIsWUFBSSxDQUFDcUIsTUFBTCxDQUFZUCxLQUFLLENBQUNqRixDQUFOLEdBQVV6QyxLQUF0QixFQUE2QjBILEtBQUssQ0FBQ2hGLENBQU4sR0FBVXNGLFlBQXZDO0FBQ0FwQixZQUFJLENBQUNxQixNQUFMLENBQVlQLEtBQUssQ0FBQ2pGLENBQU4sR0FBVXpDLEtBQXRCLEVBQTZCMEgsS0FBSyxDQUFDaEYsQ0FBbkM7QUFDRCxPQVBELE1BUUs7QUFDSCxZQUFJd0YsV0FBVyxHQUFHekMsNERBQWlCLENBQUMsTUFBTXpGLEtBQVAsRUFBYyxNQUFNQSxLQUFwQixDQUFuQztBQUNBNEcsWUFBSSxDQUFDcUIsTUFBTCxDQUFZUCxLQUFLLENBQUNqRixDQUFOLEdBQVU5QyxTQUF0QixFQUFpQytILEtBQUssQ0FBQ2hGLENBQXZDO0FBQ0FrRSxZQUFJLENBQUNxQixNQUFMLENBQVlQLEtBQUssQ0FBQ2pGLENBQU4sR0FBVTlDLFNBQXRCLEVBQWlDK0gsS0FBSyxDQUFDaEYsQ0FBTixHQUFVekMsTUFBVixHQUFtQk4sU0FBcEQ7QUFDQWlILFlBQUksQ0FBQ3FCLE1BQUwsQ0FBWVAsS0FBSyxDQUFDakYsQ0FBTixHQUFVeUYsV0FBdEIsRUFBbUNSLEtBQUssQ0FBQ2hGLENBQU4sR0FBVXpDLE1BQVYsR0FBbUJOLFNBQXREO0FBQ0FpSCxZQUFJLENBQUNxQixNQUFMLENBQVlQLEtBQUssQ0FBQ2pGLENBQU4sR0FBVXlGLFdBQXRCLEVBQW1DUixLQUFLLENBQUNoRixDQUFOLEdBQVV6QyxNQUE3QztBQUNBMkcsWUFBSSxDQUFDcUIsTUFBTCxDQUFZUCxLQUFLLENBQUNqRixDQUFsQixFQUFxQmlGLEtBQUssQ0FBQ2hGLENBQU4sR0FBVXpDLE1BQS9CO0FBQ0Q7QUFDRjtBQWhKSDtBQUFBO0FBQUEsV0FpSkUsOEJBQXFCMkcsSUFBckIsRUFBMkJqSCxTQUEzQixFQUFzQ0ssS0FBdEMsRUFBNkNDLE1BQTdDLEVBQXFEeUgsS0FBckQsRUFBNERYLFNBQTVELEVBQXVFO0FBQ3JFSCxVQUFJLENBQUNtQixNQUFMLENBQVlMLEtBQUssQ0FBQ2pGLENBQWxCLEVBQXFCaUYsS0FBSyxDQUFDaEYsQ0FBM0I7O0FBQ0EsVUFBSXFFLFNBQUosRUFBZTtBQUNiLFlBQUltQixXQUFXLEdBQUd6Qyw0REFBaUIsQ0FBQyxNQUFNekYsS0FBUCxFQUFjLE1BQU1BLEtBQXBCLENBQW5DO0FBQ0E0RyxZQUFJLENBQUNxQixNQUFMLENBQVlQLEtBQUssQ0FBQ2pGLENBQU4sR0FBVTlDLFNBQXRCLEVBQWlDK0gsS0FBSyxDQUFDaEYsQ0FBdkM7QUFDQWtFLFlBQUksQ0FBQ3FCLE1BQUwsQ0FBWVAsS0FBSyxDQUFDakYsQ0FBTixHQUFVOUMsU0FBdEIsRUFBaUMrSCxLQUFLLENBQUNoRixDQUFOLEdBQVV6QyxNQUFWLEdBQW1CTixTQUFwRDtBQUNBaUgsWUFBSSxDQUFDcUIsTUFBTCxDQUFZUCxLQUFLLENBQUNqRixDQUFOLEdBQVV5RixXQUF0QixFQUFtQ1IsS0FBSyxDQUFDaEYsQ0FBTixHQUFVekMsTUFBVixHQUFtQk4sU0FBdEQ7QUFDQWlILFlBQUksQ0FBQ3FCLE1BQUwsQ0FBWVAsS0FBSyxDQUFDakYsQ0FBTixHQUFVeUYsV0FBdEIsRUFBbUNSLEtBQUssQ0FBQ2hGLENBQU4sR0FBVXpDLE1BQTdDO0FBQ0EyRyxZQUFJLENBQUNxQixNQUFMLENBQVlQLEtBQUssQ0FBQ2pGLENBQWxCLEVBQXFCaUYsS0FBSyxDQUFDaEYsQ0FBTixHQUFVekMsTUFBL0I7QUFDRCxPQVBELE1BUUs7QUFDSCxZQUFJK0gsWUFBWSxHQUFHdkMsNERBQWlCLENBQUMsTUFBTXhGLE1BQVAsRUFBZSxNQUFNQSxNQUFyQixDQUFwQztBQUNBMkcsWUFBSSxDQUFDcUIsTUFBTCxDQUFZUCxLQUFLLENBQUNqRixDQUFsQixFQUFxQmlGLEtBQUssQ0FBQ2hGLENBQU4sR0FBVS9DLFNBQS9CO0FBQ0FpSCxZQUFJLENBQUNxQixNQUFMLENBQVlQLEtBQUssQ0FBQ2pGLENBQU4sR0FBVXpDLEtBQVYsR0FBa0JMLFNBQTlCLEVBQXlDK0gsS0FBSyxDQUFDaEYsQ0FBTixHQUFVL0MsU0FBbkQ7QUFDQWlILFlBQUksQ0FBQ3FCLE1BQUwsQ0FBWVAsS0FBSyxDQUFDakYsQ0FBTixHQUFVekMsS0FBVixHQUFrQkwsU0FBOUIsRUFBeUMrSCxLQUFLLENBQUNoRixDQUFOLEdBQVVzRixZQUFuRDtBQUNBcEIsWUFBSSxDQUFDcUIsTUFBTCxDQUFZUCxLQUFLLENBQUNqRixDQUFOLEdBQVV6QyxLQUF0QixFQUE2QjBILEtBQUssQ0FBQ2hGLENBQU4sR0FBVXNGLFlBQXZDO0FBQ0FwQixZQUFJLENBQUNxQixNQUFMLENBQVlQLEtBQUssQ0FBQ2pGLENBQU4sR0FBVXpDLEtBQXRCLEVBQTZCMEgsS0FBSyxDQUFDaEYsQ0FBbkM7QUFDRDtBQUNGO0FBbktIOztBQUFBO0FBQUE7QUFzS08sSUFBTUUsZUFBYjtBQUNFLDJCQUFZeEMsR0FBWixFQUFpQm9DLFFBQWpCLEVBQTJCO0FBQUE7O0FBQ3pCLFNBQUtwQyxHQUFMLEdBQVdBLEdBQVg7QUFDQSxTQUFLK0gsU0FBTCxHQUFpQkMsd0RBQWEsQ0FBQzVGLFFBQUQsQ0FBOUI7QUFDRDs7QUFKSDtBQUFBO0FBQUEsV0FNRSxtQkFBdUg7QUFBQTs7QUFBQSxVQUEvRzdDLFNBQStHLHVFQUFuRyxFQUFtRztBQUFBLFVBQS9GMkQsS0FBK0YsdUVBQXZGLHFCQUF1RjtBQUFBLFVBQWhFK0UsT0FBZ0UsdUVBQXRELElBQXNEO0FBQUEsVUFBaERDLElBQWdELHVFQUF6QyxFQUF5QztBQUFBLFVBQXJDQyxPQUFxQyx1RUFBM0IsT0FBMkI7QUFBQSxVQUFsQkMsV0FBa0IsdUVBQUosRUFBSTtBQUNySCxVQUFJcEIsZ0JBQWdCLEdBQUcsSUFBSXZHLE9BQUosQ0FBWSxVQUFDQyxHQUFELEVBQU1JLEdBQU4sRUFBYztBQUMvQyxjQUFJLENBQUN3RixtQkFBTCxHQUEyQjVGLEdBQTNCOztBQUNBLGNBQUksQ0FBQzJILGlCQUFMLENBQXVCOUksU0FBdkIsRUFBa0MyRCxLQUFsQyxFQUF5QytFLE9BQXpDLEVBQWtEQyxJQUFsRCxFQUF3REMsT0FBeEQsRUFBaUVDLFdBQWpFO0FBQ0QsT0FIc0IsQ0FBdkI7QUFLQSxhQUFPcEIsZ0JBQVA7QUFDRDtBQWJIO0FBQUE7QUFBQSxXQWVFLDJCQUFrQnpILFNBQWxCLEVBQTZCMkQsS0FBN0IsRUFBb0MrRSxPQUFwQyxFQUE2Q0MsSUFBN0MsRUFBbURDLE9BQW5ELEVBQTREQyxXQUE1RCxFQUFtRjtBQUFBOztBQUFBLFVBQVZwSyxHQUFVLHVFQUFKLEVBQUk7QUFDakYsVUFBSXNLLE9BQU8sR0FBRyxDQUFkO0FBQ0EsVUFBSUMsS0FBSyxHQUFHLElBQVo7QUFDQSxXQUFLdkksR0FBTCxDQUFTb0IsSUFBVDtBQUNBLFdBQUtwQixHQUFMLENBQVN3SSxPQUFULEdBQW1CLFFBQW5COztBQUNBLFVBQUlOLElBQUksQ0FBQ08sTUFBTCxHQUFjLENBQWxCLEVBQXFCO0FBQ25CLGFBQUt6SSxHQUFMLENBQVMwSSxXQUFULENBQXFCUixJQUFyQjtBQUNEOztBQUNELFdBQUtsSSxHQUFMLENBQVMySSxXQUFULEdBQXVCekYsS0FBdkI7QUFDQSxXQUFLbEQsR0FBTCxDQUFTNEksU0FBVCxHQUFxQnJKLFNBQXJCO0FBQ0EsV0FBS1MsR0FBTCxDQUFTNkksV0FBVCxHQUF1QlYsT0FBdkI7QUFDQSxXQUFLbkksR0FBTCxDQUFTOEksVUFBVCxHQUFzQlYsV0FBdEI7QUFDQSxVQUFJVyxZQUFZLEdBQUcsQ0FBbkI7QUFFQSxXQUFLL0ksR0FBTCxDQUFTZ0osU0FBVDtBQUNBLFVBQUkzSSxRQUFRLEdBQUdDLFdBQVcsQ0FBQyxZQUFNO0FBQy9CLFlBQUlnSSxPQUFPLEdBQUdDLEtBQUssQ0FBQ1IsU0FBTixDQUFnQlUsTUFBaEIsR0FBeUIsQ0FBdkMsRUFBMEM7QUFDeENGLGVBQUssQ0FBQ3ZJLEdBQU4sQ0FBVTJILE1BQVYsQ0FBaUJZLEtBQUssQ0FBQ1IsU0FBTixDQUFnQk8sT0FBaEIsRUFBeUJqRyxDQUExQyxFQUE2Q2tHLEtBQUssQ0FBQ1IsU0FBTixDQUFnQk8sT0FBaEIsRUFBeUJoRyxDQUF0RTtBQUNBaUcsZUFBSyxDQUFDdkksR0FBTixDQUFVNkgsTUFBVixDQUFpQlUsS0FBSyxDQUFDUixTQUFOLENBQWdCTyxPQUFPLEdBQUcsQ0FBMUIsRUFBNkJqRyxDQUE5QyxFQUFpRGtHLEtBQUssQ0FBQ1IsU0FBTixDQUFnQk8sT0FBTyxHQUFHLENBQTFCLEVBQTZCaEcsQ0FBOUU7O0FBQ0EsY0FBSTJGLE9BQUosRUFBYTtBQUNYLGtCQUFJLENBQUNqSSxHQUFMLENBQVNpSixTQUFULENBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLE1BQUksQ0FBQ2pKLEdBQUwsQ0FBU3FHLE1BQVQsQ0FBZ0J6RyxLQUF6QyxFQUFnRCxNQUFJLENBQUNJLEdBQUwsQ0FBU3FHLE1BQVQsQ0FBZ0J4RyxNQUFoRTs7QUFDQSxrQkFBSSxDQUFDRyxHQUFMLENBQVNrSixXQUFULEdBQXVCN0QsNERBQWlCLENBQUMwRCxZQUFELEVBQWUsQ0FBZixDQUF4QztBQUNBQSx3QkFBWSxJQUFLL0ssR0FBRyxHQUFHLEtBQXZCO0FBQ0Q7O0FBQ0R1SyxlQUFLLENBQUN2SSxHQUFOLENBQVVtSixNQUFWO0FBQ0QsU0FURCxNQVVLO0FBQ0h2SSx1QkFBYSxDQUFDUCxRQUFELENBQWI7QUFDQWtJLGVBQUssQ0FBQ3ZJLEdBQU4sQ0FBVW9KLFNBQVY7QUFDQWIsZUFBSyxDQUFDdkksR0FBTixDQUFVK0IsT0FBVjtBQUNBd0csZUFBSyxDQUFDakMsbUJBQU47QUFDRDs7QUFDRGdDLGVBQU87QUFDUixPQWxCeUIsRUFrQnZCLE9BQU90SyxHQWxCZ0IsQ0FBMUI7QUFtQkQ7QUFqREg7O0FBQUE7QUFBQTtBQW9ETyxJQUFNNkUsT0FBYjtBQUNFLG1CQUFZN0MsR0FBWixFQUFpQjtBQUFBOztBQUNmLFNBQUtBLEdBQUwsR0FBV0EsR0FBWDtBQUNBLFNBQUtMLEdBQUwsR0FBV0ssR0FBRyxDQUFDcUcsTUFBZjtBQUNBLFNBQUtnRCxLQUFMLEdBQWEsRUFBYjtBQUNBLFNBQUt0TCxJQUFMO0FBQ0Q7O0FBTkg7QUFBQTtBQUFBLFdBT0UsZ0JBQU87QUFDTCxXQUFLdUwsUUFBTDtBQUVEO0FBVkg7QUFBQTtBQUFBLFdBV0Usb0JBQXVCO0FBQUE7O0FBQUEsVUFBZEMsTUFBYyx1RUFBTCxHQUFLOztBQUFBLGlDQUNaakcsQ0FEWTtBQUVuQixZQUFJa0csSUFBSSxHQUFHO0FBQ1RuSCxXQUFDLEVBQUVnRCw0REFBaUIsQ0FBQyxDQUFELEVBQUksTUFBSSxDQUFDMUYsR0FBTCxDQUFTQyxLQUFiLENBRFg7QUFFVDBDLFdBQUMsRUFBRStDLDREQUFpQixDQUFDLENBQUQsRUFBSSxNQUFJLENBQUMxRixHQUFMLENBQVNFLE1BQWIsQ0FGWDtBQUdUcUQsZUFBSyw2QkFBc0JtQyw0REFBaUIsQ0FBQyxJQUFELEVBQU8sQ0FBUCxDQUF2QyxNQUhJO0FBSVRKLGNBQUksRUFBRUksNERBQWlCLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FKZDtBQUtUb0UsaUJBQU8sRUFBRSxtQkFBTTtBQUNiRCxnQkFBSSxDQUFDdEcsS0FBTCw4QkFBaUNtQyw0REFBaUIsQ0FBQyxJQUFELEVBQU8sQ0FBUCxDQUFsRDtBQUNEO0FBUFEsU0FBWDs7QUFTQSxjQUFJLENBQUNnRSxLQUFMLENBQVdLLElBQVgsQ0FBZ0JGLElBQWhCO0FBWG1COztBQUNyQixXQUFLLElBQUlsRyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHaUcsTUFBcEIsRUFBNEJqRyxDQUFDLEVBQTdCLEVBQWlDO0FBQUEsY0FBeEJBLENBQXdCO0FBV2hDO0FBQ0Y7QUF4Qkg7QUFBQTtBQUFBLFdBeUJFLHdCQUFlO0FBQ2IsV0FBSytGLEtBQUwsQ0FBV1osTUFBWCxHQUFvQixDQUFwQjtBQUNBLFdBQUthLFFBQUw7QUFDRDtBQTVCSDtBQUFBO0FBQUEsV0E2QkUsbUJBQVU7QUFBQTs7QUFDUixVQUFJSyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQ2YsY0FBSSxDQUFDM0osR0FBTCxDQUFTaUosU0FBVCxDQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixNQUFJLENBQUN0SixHQUFMLENBQVNDLEtBQWxDLEVBQXlDLE1BQUksQ0FBQ0QsR0FBTCxDQUFTRSxNQUFsRDs7QUFDQSxhQUFLLElBQUl5RCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLE1BQUksQ0FBQytGLEtBQUwsQ0FBV1osTUFBL0IsRUFBdUNuRixDQUFDLEVBQXhDLEVBQTRDO0FBQzFDLGdCQUFJLENBQUMrRixLQUFMLENBQVcvRixDQUFYLEVBQWNtRyxPQUFkOztBQUNBbkUsNERBQVUsQ0FBQyxNQUFJLENBQUN0RixHQUFOLEVBQVcsTUFBSSxDQUFDcUosS0FBTCxDQUFXL0YsQ0FBWCxFQUFjakIsQ0FBekIsRUFBNEIsTUFBSSxDQUFDZ0gsS0FBTCxDQUFXL0YsQ0FBWCxFQUFjaEIsQ0FBMUMsRUFBNkMsTUFBSSxDQUFDK0csS0FBTCxDQUFXL0YsQ0FBWCxFQUFjMkIsSUFBM0QsRUFBaUUsTUFBSSxDQUFDb0UsS0FBTCxDQUFXL0YsQ0FBWCxFQUFjSixLQUEvRSxDQUFWO0FBQ0Q7QUFDRixPQU5EOztBQVFBNUMsaUJBQVcsQ0FBQ3FKLElBQUQsRUFBTyxHQUFQLENBQVg7QUFDRDtBQXZDSDs7QUFBQTtBQUFBLEk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL05BO0FBR08sSUFBTTdELGNBQWI7QUFDRSwwQkFDRW5JLEdBREYsRUFFRTtBQUFBLFFBREtFLE1BQ0wsdUVBRGMsRUFDZDtBQUFBLFFBRGtCRCxhQUNsQix1RUFEa0MsRUFDbEM7QUFBQSxRQURzQ2dNLGFBQ3RDOztBQUFBOztBQUNBL0wsVUFBTSxHQUFHZ00sNkNBQUEsQ0FBT2hNLE1BQVAsSUFBaUJBLE1BQWpCLEdBQTBCLEVBQW5DO0FBQ0FELGlCQUFhLEdBQUdpTSw2Q0FBQSxDQUFPak0sYUFBUCxJQUF3QkEsYUFBeEIsR0FBd0MsRUFBeEQ7QUFDQSxTQUFLQyxNQUFMLEdBQWNpTSxNQUFNLENBQUNDLE1BQVAsQ0FBY25NLGFBQWQsRUFBNkJDLE1BQTdCLENBQWQ7QUFDQSxTQUFLRixHQUFMLEdBQVdBLEdBQVg7QUFDQSxTQUFLcU0sVUFBTCxHQUFrQixDQUFsQjtBQUNBLFNBQUtDLEtBQUwsR0FBYTtBQUNYNUgsT0FBQyxFQUFFLENBRFE7QUFFWEMsT0FBQyxFQUFFO0FBRlEsS0FBYjtBQUlBLFNBQUtzSCxhQUFMLEdBQXFCQSxhQUFyQjtBQUNBLFNBQUs1SixHQUFMLEdBQVcsSUFBWDtBQUNBLFNBQUtrSyxhQUFMLEdBQXFCLEtBQXJCO0FBQ0EsU0FBS0MsT0FBTCxHQUFlLEtBQWY7QUFDQSxTQUFLQyxlQUFMLEdBQXVCQyxTQUF2QjtBQUNBLFNBQUtDLGtCQUFMLEdBQTBCRCxTQUExQjtBQUNBLFNBQUtFLGVBQUwsR0FBdUIsS0FBdkI7QUFDQSxTQUFLQyxpQkFBTCxHQUF5QixJQUFJQyxJQUFKLEdBQVdDLE9BQVgsRUFBekI7QUFDQSxTQUFLQyxVQUFMLEdBQWtCLEtBQWxCO0FBQ0EsU0FBS0MsTUFBTCxHQUFjLEVBQWQ7QUFDQSxTQUFLQyxTQUFMLEdBQWlCLEVBQWpCOztBQUNBLFNBQUtDLGtCQUFMLEdBQTBCLFlBQU0sQ0FBRyxDQUFuQzs7QUFDQSxTQUFLM0wsZUFBTCxHQUF1QixZQUFNLENBQUcsQ0FBaEM7O0FBQ0EsU0FBSzRMLFFBQUw7QUFDRDs7QUEzQkg7QUFBQTtBQUFBLFdBNEJFLG9CQUFXO0FBQUE7O0FBRVQsVUFBSSxLQUFLcE4sR0FBTCxDQUFTcU4sT0FBVCxLQUFxQixRQUF6QixFQUFtQztBQUNqQyxZQUFNckwsR0FBRyxHQUFHcUUsUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBQVo7QUFDQSxhQUFLdEUsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsYUFBS3lLLGVBQUwsR0FBdUJwRyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBdkI7QUFDQSxhQUFLbUcsZUFBTCxDQUFxQmpHLFNBQXJCLENBQStCQyxHQUEvQixDQUFtQyxrQkFBbkM7QUFDQSxhQUFLZ0csZUFBTCxDQUFxQmEsS0FBckIsQ0FBMkJDLFFBQTNCLEdBQXNDLENBQXRDO0FBQ0EsYUFBS2QsZUFBTCxDQUFxQmEsS0FBckIsQ0FBMkJ6SCxRQUEzQixHQUFzQyxVQUF0QztBQUNBLGFBQUs0RyxlQUFMLENBQXFCYSxLQUFyQixDQUEyQnJMLEtBQTNCLEdBQW1DLE1BQW5DO0FBQ0EsYUFBS3dLLGVBQUwsQ0FBcUJhLEtBQXJCLENBQTJCcEwsTUFBM0IsR0FBb0MsTUFBcEM7QUFDQSxhQUFLdUssZUFBTCxDQUFxQmUsV0FBckIsQ0FBaUN4TCxHQUFqQztBQUNBLGFBQUt5TCxpQkFBTCxHQUF5QnBILFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUF6QjtBQUNBLGFBQUttSCxpQkFBTCxDQUF1QmpILFNBQXZCLENBQWlDQyxHQUFqQyxDQUFxQyxzQkFBckM7QUFDQSxhQUFLZ0gsaUJBQUwsQ0FBdUJILEtBQXZCLENBQTZCekgsUUFBN0IsR0FBd0MsVUFBeEM7QUFDQSxhQUFLNEgsaUJBQUwsQ0FBdUJILEtBQXZCLENBQTZCckwsS0FBN0IsR0FBcUMsTUFBckM7QUFDQSxhQUFLd0wsaUJBQUwsQ0FBdUJILEtBQXZCLENBQTZCcEwsTUFBN0IsR0FBc0MsTUFBdEM7QUFDQSxhQUFLd0wsV0FBTCxHQUFtQnJILFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFuQjtBQUNBLGFBQUtvSCxXQUFMLENBQWlCSixLQUFqQixDQUF1QnpILFFBQXZCLEdBQWtDLFVBQWxDO0FBQ0EsYUFBSzZILFdBQUwsQ0FBaUJKLEtBQWpCLENBQXVCckwsS0FBdkIsR0FBK0IsTUFBL0I7QUFDQSxhQUFLeUwsV0FBTCxDQUFpQkosS0FBakIsQ0FBdUJwTCxNQUF2QixHQUFnQyxNQUFoQztBQUNBLGFBQUt3TCxXQUFMLENBQWlCbEgsU0FBakIsQ0FBMkJDLEdBQTNCLENBQStCLHlCQUEvQjtBQUNBLGFBQUtpSCxXQUFMLENBQWlCRixXQUFqQixDQUE2QixLQUFLZixlQUFsQztBQUNBLGFBQUtpQixXQUFMLENBQWlCQyxZQUFqQixDQUE4QixLQUFLRixpQkFBbkMsRUFBc0QsS0FBS2hCLGVBQTNEO0FBQ0EsYUFBS3pNLEdBQUwsQ0FBUzBHLE1BQVQsQ0FBZ0IsS0FBS2dILFdBQXJCO0FBQ0EsYUFBSzFOLEdBQUwsQ0FBU3dHLFNBQVQsQ0FBbUJDLEdBQW5CLENBQXVCLFlBQXZCO0FBQ0QsT0F4QkQsTUF5Qks7QUFDSCxhQUFLekUsR0FBTCxHQUFXLEtBQUtoQyxHQUFoQjtBQUNEOztBQUVELFdBQUtxQyxHQUFMLEdBQVcsS0FBS0wsR0FBTCxDQUFTNEwsVUFBVCxDQUFvQixJQUFwQixDQUFYO0FBQ0EsV0FBS0Msd0JBQUw7QUFFQUMsWUFBTSxDQUFDQyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxZQUFNO0FBQ3RDLGFBQUksQ0FBQ2YsVUFBTCxHQUFrQixJQUFsQjs7QUFDQSxhQUFJLENBQUNHLGtCQUFMO0FBQ0QsT0FIRDtBQUtBVyxZQUFNLENBQUNDLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDQyxtREFBUSxDQUFDLFlBQU07QUFDL0MsYUFBSSxDQUFDaEIsVUFBTCxHQUFrQixLQUFsQjs7QUFDQSxhQUFJLENBQUNhLHdCQUFMOztBQUNBLGFBQUksQ0FBQ3JNLGVBQUw7QUFDRCxPQUp5QyxFQUl2QyxHQUp1QyxDQUExQztBQU1Bc00sWUFBTSxDQUFDQyxnQkFBUCxDQUF3QixrQkFBeEIsRUFBNEMsWUFBTTtBQUNoRCxZQUFJMUgsUUFBUSxDQUFDNEgsZUFBVCxLQUE2QixTQUFqQyxFQUE0QztBQUMxQyxlQUFJLENBQUMxQixhQUFMLEdBQXFCLElBQXJCO0FBQ0Q7QUFDRixPQUpEO0FBTUEsV0FBSzJCLGVBQUw7QUFFQSxXQUFLQyx1QkFBTDtBQUVEO0FBbkZIO0FBQUE7QUFBQSxXQXFGRSx1Q0FBOEIsQ0FFN0I7QUF2Rkg7QUFBQTtBQUFBLFdBeUZFLG1DQUEwQjtBQUFBOztBQUN4QixVQUFJQyxhQUFhLEdBQUcsSUFBSXRCLElBQUosR0FBV0MsT0FBWCxFQUFwQjtBQUNBLFdBQUtzQixXQUFMLEdBQW1CLENBQUNELGFBQWEsR0FBRyxLQUFLdkIsaUJBQXRCLElBQTJDLElBQTlEOztBQUNBLFVBQUksS0FBS04sYUFBVCxFQUF3QjtBQUN0QixhQUFLOEIsV0FBTCxHQUFtQixDQUFuQjtBQUNBLGFBQUs5QixhQUFMLEdBQXFCLEtBQXJCO0FBQ0Q7O0FBQ0QsV0FBS0YsVUFBTCxJQUFtQixDQUFuQjtBQUNBLFdBQUtRLGlCQUFMLEdBQXlCdUIsYUFBekI7QUFDQUUsMkJBQXFCLENBQUMsWUFBTTtBQUMxQixjQUFJLENBQUNILHVCQUFMO0FBQ0QsT0FGb0IsQ0FBckI7QUFHRDtBQXJHSDtBQUFBO0FBQUEsV0F1R0UsbUNBQTBCO0FBQ3hCLGFBQU85SCxRQUFRLENBQUNrQyxJQUFULENBQWNnRyxRQUFkLENBQXVCLEtBQUt0QyxhQUE1QixLQUE4QyxLQUFLQSxhQUFMLEtBQXVCNUYsUUFBUSxDQUFDa0MsSUFBckY7QUFDRDtBQXpHSDtBQUFBO0FBQUEsV0EyR0Usb0NBQTJCO0FBQ3pCLFVBQUksS0FBS3FFLGVBQVQsRUFBMEI7O0FBRTFCLFVBQUksS0FBSzVNLEdBQUwsQ0FBU3FOLE9BQVQsS0FBcUIsUUFBekIsRUFBbUM7QUFDakMsWUFBSW1CLFdBQUosRUFBaUJDLFlBQWpCOztBQUNBLFlBQUksS0FBS0MsdUJBQUwsRUFBSixFQUFvQztBQUNsQ0YscUJBQVcsR0FBRyxLQUFLdkMsYUFBTCxDQUFtQjBDLHFCQUFuQixHQUEyQzFNLEtBQXpEO0FBQ0F3TSxzQkFBWSxHQUFHLEtBQUt4QyxhQUFMLENBQW1CMEMscUJBQW5CLEdBQTJDek0sTUFBMUQ7QUFDRCxTQUhELE1BSUs7QUFDSHNNLHFCQUFXLEdBQUcsS0FBS3hPLEdBQUwsQ0FBUzJPLHFCQUFULEdBQWlDMU0sS0FBL0M7QUFDQXdNLHNCQUFZLEdBQUcsS0FBS3pPLEdBQUwsQ0FBUzJPLHFCQUFULEdBQWlDek0sTUFBaEQ7QUFDRDs7QUFFRCxhQUFLRixHQUFMLENBQVNDLEtBQVQsR0FBaUJ1TSxXQUFqQjtBQUNBLGFBQUt4TSxHQUFMLENBQVNFLE1BQVQsR0FBa0J1TSxZQUFsQjtBQUVELE9BZEQsTUFlSztBQUNILFlBQUlELFlBQUosRUFBaUJDLGFBQWpCOztBQUNBLFlBQUksS0FBS0MsdUJBQUwsRUFBSixFQUFvQztBQUNsQ0Ysc0JBQVcsR0FBRyxLQUFLdkMsYUFBTCxDQUFtQjBDLHFCQUFuQixHQUEyQzFNLEtBQXpEO0FBQ0F3TSx1QkFBWSxHQUFHLEtBQUt4QyxhQUFMLENBQW1CMEMscUJBQW5CLEdBQTJDek0sTUFBMUQ7QUFDRCxTQUhELE1BSUs7QUFDSHNNLHNCQUFXLEdBQUcsS0FBS3hNLEdBQUwsQ0FBUzRNLGFBQVQsQ0FBdUJELHFCQUF2QixHQUErQzFNLEtBQTdEO0FBQ0F3TSx1QkFBWSxHQUFHLEtBQUt6TSxHQUFMLENBQVM0TSxhQUFULENBQXVCRCxxQkFBdkIsR0FBK0N6TSxNQUE5RDtBQUNEOztBQUNELGFBQUtGLEdBQUwsQ0FBU0MsS0FBVCxHQUFpQnVNLFlBQWpCO0FBQ0EsYUFBS3hNLEdBQUwsQ0FBU0UsTUFBVCxHQUFrQnVNLGFBQWxCO0FBRUQ7QUFFRjtBQTVJSDtBQUFBO0FBQUEsV0E4SUUsdUJBQWN4TSxLQUFkLEVBQXFCQyxNQUFyQixFQUE2QjtBQUMzQixXQUFLMEssZUFBTCxHQUF1QixJQUF2QjtBQUNBLFdBQUs1SyxHQUFMLENBQVNDLEtBQVQsR0FBaUJBLEtBQWpCO0FBQ0EsV0FBS0QsR0FBTCxDQUFTRSxNQUFULEdBQWtCQSxNQUFsQjtBQUNEO0FBbEpIO0FBQUE7QUFBQSxXQW9KRSxvQkFBV3FELEtBQVgsRUFBa0I7QUFDaEIsV0FBS2xELEdBQUwsQ0FBU29CLElBQVQ7QUFDQSxXQUFLcEIsR0FBTCxDQUFTd00sU0FBVCxHQUFxQnRKLEtBQXJCO0FBQ0EsV0FBS2xELEdBQUwsQ0FBU3lNLFFBQVQsQ0FBa0IsQ0FBbEIsRUFBcUIsQ0FBckIsRUFBd0IsS0FBSzlNLEdBQUwsQ0FBU0MsS0FBakMsRUFBd0MsS0FBS0QsR0FBTCxDQUFTRSxNQUFqRDtBQUNBLFdBQUtHLEdBQUwsQ0FBUytCLE9BQVQ7QUFDRDtBQXpKSDtBQUFBO0FBQUEsV0EySkUsaUJBQVE7QUFDTixXQUFLL0IsR0FBTCxDQUFTaUosU0FBVCxDQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixLQUFLdEosR0FBTCxDQUFTQyxLQUFsQyxFQUF5QyxLQUFLRCxHQUFMLENBQVNFLE1BQWxEO0FBQ0Q7QUE3Skg7QUFBQTtBQUFBLFdBK0pFLDJCQUFrQjtBQUFBOztBQUVoQixXQUFLRixHQUFMLENBQVMrTCxnQkFBVCxDQUEwQixPQUExQixFQUFtQyxZQUFNO0FBQ3ZDLGNBQUksQ0FBQ3ZCLE9BQUwsR0FBZSxJQUFmO0FBQ0QsT0FGRDtBQUdBLFdBQUt4SyxHQUFMLENBQVMrTCxnQkFBVCxDQUEwQixZQUExQixFQUF3QyxZQUFNO0FBQzVDLGNBQUksQ0FBQ3ZCLE9BQUwsR0FBZSxJQUFmO0FBRUQsT0FIRDtBQUtBLFdBQUt4SyxHQUFMLENBQVMrTCxnQkFBVCxDQUEwQixXQUExQixFQUF1QyxVQUFDZ0IsQ0FBRCxFQUFPO0FBQzVDLFlBQUlDLEdBQUcsR0FBR0MsMkRBQWdCLENBQUNGLENBQUQsQ0FBMUI7QUFDQSxjQUFJLENBQUN6QyxLQUFMLEdBQWE7QUFDWDVILFdBQUMsRUFBRXNLLEdBQUcsQ0FBQ3RLLENBREk7QUFFWEMsV0FBQyxFQUFFcUssR0FBRyxDQUFDcks7QUFGSSxTQUFiO0FBSUQsT0FORDtBQVFBLFdBQUszQyxHQUFMLENBQVMrTCxnQkFBVCxDQUEwQixXQUExQixFQUF1QyxVQUFDZ0IsQ0FBRCxFQUFPO0FBQzVDLFlBQUlDLEdBQUcsR0FBR0MsMkRBQWdCLENBQUNGLENBQUQsQ0FBMUI7QUFDQSxjQUFJLENBQUN6QyxLQUFMLEdBQWE7QUFDWDVILFdBQUMsRUFBRXNLLEdBQUcsQ0FBQ3RLLENBREk7QUFFWEMsV0FBQyxFQUFFcUssR0FBRyxDQUFDcks7QUFGSSxTQUFiO0FBSUQsT0FORDtBQU9EO0FBeExIO0FBQUE7QUFBQSxXQTBMRSwyQ0FBa0M7QUFDaEMsVUFBSXVLLElBQUksR0FBRzdJLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixRQUF2QixDQUFYO0FBQ0EsVUFBSTZJLFlBQVksR0FBRyxJQUFJaEgsY0FBSixDQUFtQitHLElBQW5CLEVBQXlCLEVBQXpCLEVBQTZCLEVBQTdCLEVBQWlDLEtBQUtsUCxHQUF0QyxDQUFuQjtBQUNBLGFBQU9tUCxZQUFQO0FBQ0Q7QUE5TEg7QUFBQTtBQUFBLFdBZ01FLHVCQUFjO0FBQ1osVUFBSSxLQUFLblAsR0FBTCxDQUFTcU4sT0FBVCxLQUFxQixRQUF6QixFQUFtQyxPQUFPLElBQUkrQixTQUFKLHFJQUFQO0FBQ25DLFVBQUlwTixHQUFHLEdBQUdxRSxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBVjtBQUNBdEUsU0FBRyxDQUFDc0wsS0FBSixDQUFVekgsUUFBVixHQUFxQixVQUFyQjtBQUNBLFdBQUs0RyxlQUFMLENBQXFCNEMsT0FBckIsQ0FBNkJyTixHQUE3QjtBQUNBLFVBQUlzTixXQUFXLEdBQUcsSUFBSW5ILGNBQUosQ0FBbUJuRyxHQUFuQixFQUF3QixFQUF4QixFQUE0QixFQUE1QixFQUFnQyxLQUFLaEMsR0FBckMsQ0FBbEI7QUFDQSxXQUFLaU4sTUFBTCxDQUFZbEIsSUFBWixDQUFpQnVELFdBQWpCO0FBQ0EsYUFBT0EsV0FBUDtBQUNEO0FBeE1IO0FBQUE7QUFBQSxXQTBNRSxxQkFBWXRJLEVBQVosRUFBZ0J1SSxTQUFoQixFQUEyQjtBQUN6QixVQUFJLEtBQUt2UCxHQUFMLENBQVNxTixPQUFULEtBQXFCLFFBQXpCLEVBQW1DLE9BQU8sSUFBSStCLFNBQUoscUlBQVA7QUFDbkMsVUFBSUksUUFBUSxHQUFHbkosUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQWY7O0FBQ0EsVUFBSSxDQUFDLENBQUNpSixTQUFOLEVBQWlCO0FBQ2ZDLGdCQUFRLENBQUNoSixTQUFULENBQW1CQyxHQUFuQixDQUF1QjhJLFNBQXZCO0FBQ0Q7O0FBQ0QsVUFBSSxDQUFDLENBQUN2SSxFQUFOLEVBQVU7QUFDUndJLGdCQUFRLENBQUN4SSxFQUFULEdBQWNBLEVBQWQ7QUFDRDs7QUFDRHdJLGNBQVEsQ0FBQ2xDLEtBQVQsQ0FBZXpILFFBQWYsR0FBMEIsVUFBMUI7QUFDQTJKLGNBQVEsQ0FBQ2xDLEtBQVQsQ0FBZXJMLEtBQWYsR0FBdUIsTUFBdkI7QUFDQXVOLGNBQVEsQ0FBQ2xDLEtBQVQsQ0FBZXBMLE1BQWYsR0FBd0IsTUFBeEI7QUFDQSxXQUFLdUwsaUJBQUwsQ0FBdUI0QixPQUF2QixDQUErQkcsUUFBL0I7QUFDQSxXQUFLdEMsU0FBTCxDQUFlbkIsSUFBZixDQUFvQnlELFFBQXBCO0FBQ0EsYUFBT0EsUUFBUDtBQUNEO0FBek5IOztBQUFBO0FBQUE7QUE0Tk8sU0FBU2xILElBQVQsQ0FBY21ILElBQWQsRUFBb0J4UCxhQUFwQixFQUFtQ0MsTUFBbkMsRUFBMkN3UCxTQUEzQyxFQUFzRHpELGFBQXRELEVBQXFFO0FBQzFFLE1BQUlqSyxHQUFHLEdBQUdxRSxRQUFRLENBQUNzSixjQUFULENBQXdCLFFBQXhCLENBQVY7QUFDQTNOLEtBQUcsR0FBR0EsR0FBRyxHQUFHQSxHQUFILEdBQVNxRSxRQUFRLENBQUNrQyxJQUEzQjtBQUNBLE1BQUl2SSxHQUFHLEdBQUcwUCxTQUFTLEdBQUdBLFNBQUgsR0FBZTFOLEdBQWxDO0FBQ0EsTUFBSWtCLE9BQUo7QUFDQSxNQUFJME0sV0FBVyxHQUFHLElBQUk5TSxPQUFKLENBQVksVUFBQ0MsR0FBRCxFQUFNSSxHQUFOLEVBQWM7QUFDMUNELFdBQU8sR0FBRyxtQkFBTTtBQUNkLFVBQUkyTSxRQUFRLEdBQUcsSUFBSUosSUFBSixDQUFTelAsR0FBVCxFQUFjRSxNQUFkLEVBQXNCRCxhQUF0QixFQUFxQ2dNLGFBQXJDLENBQWY7QUFDQWxKLFNBQUcsQ0FBQzhNLFFBQUQsQ0FBSDtBQUNELEtBSEQ7QUFJRCxHQUxpQixDQUFsQjtBQU9BLE1BQUlDLFVBQVUsR0FBRztBQUNmck4sV0FBTyxFQUFFbU4sV0FETTtBQUVmMU0sV0FBTyxFQUFFQTtBQUZNLEdBQWpCO0FBS0EsU0FBTzRNLFVBQVA7QUFDRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pQTSxTQUFTQyxDQUFULENBQVdDLFFBQVgsRUFBcUI7QUFDMUIsU0FBTzNKLFFBQVEsQ0FBQzRKLGFBQVQsQ0FBdUJELFFBQXZCLENBQVA7QUFDRDtBQUVNLFNBQVNFLE1BQVQsQ0FBZ0JGLFFBQWhCLEVBQTBCRyxNQUExQixFQUFrQztBQUN2QyxNQUFJQyxRQUFRLEdBQUdELE1BQU0sR0FBRyxPQUFILEdBQWEsTUFBbEM7QUFDQUosR0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWUssWUFBWixDQUF5QixPQUF6QixvQkFBNkNELFFBQTdDO0FBQ0Q7QUFFTSxTQUFTRSxXQUFULENBQXFCTixRQUFyQixFQUErQk8sU0FBL0IsRUFBMENKLE1BQTFDLEVBQWtEO0FBQ3ZELE1BQUlLLE1BQU0sR0FBR0wsTUFBTSxHQUFHLEtBQUgsR0FBVyxRQUE5QjtBQUNBSixHQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZeEosU0FBWixDQUFzQmdLLE1BQXRCLEVBQThCRCxTQUE5QjtBQUNEO0FBRU0sU0FBU0UsSUFBVCxDQUFjQyxTQUFkLEVBQXlCO0FBQzlCLE1BQUlDLFNBQVMsR0FBR3RLLFFBQVEsQ0FBQ3VLLFdBQVQsQ0FBcUIsT0FBckIsQ0FBaEI7QUFDQUQsV0FBUyxDQUFDRSxTQUFWLENBQW9CSCxTQUFwQixFQUErQixJQUEvQixFQUFxQyxJQUFyQztBQUNBckssVUFBUSxDQUFDeUssYUFBVCxDQUF1QkgsU0FBdkI7QUFDRDtBQUVNLFNBQVNJLE9BQVQsQ0FBaUJDLElBQWpCLEVBQXVCaEIsUUFBdkIsRUFBaUM7QUFDdEMsTUFBSWlCLE9BQU8sR0FBR0QsSUFBZDtBQUFBLE1BQ0VFLElBQUksR0FBRyxFQURUOztBQUVBLFNBQU9ELE9BQU8sQ0FBQ0UsVUFBUixJQUFzQixJQUF0QixJQUE4QkYsT0FBTyxDQUFDRSxVQUFSLElBQXNCOUssUUFBUSxDQUFDK0ssZUFBcEUsRUFBcUY7QUFDbkZGLFFBQUksQ0FBQ25GLElBQUwsQ0FBVWtGLE9BQU8sQ0FBQ0UsVUFBbEI7QUFDQUYsV0FBTyxHQUFHQSxPQUFPLENBQUNFLFVBQWxCO0FBQ0Q7O0FBQ0QsU0FBT0QsSUFBSSxDQUFDRyxNQUFMLENBQVksVUFBQ0MsQ0FBRCxFQUFJM0wsQ0FBSixFQUFVO0FBQzNCLFdBQU8yTCxDQUFDLENBQUNDLE9BQUYsQ0FBVXZCLFFBQVYsQ0FBUDtBQUNELEdBRk0sQ0FBUDtBQUdEO0FBRU0sU0FBU3dCLE9BQVQsQ0FBaUJ4UixHQUFqQixFQUFzQnlSLFFBQXRCLEVBQTRFO0FBQUEsTUFBNUNDLEVBQTRDLHVFQUF2QyxZQUFNO0FBQUUxUixPQUFHLENBQUNzTixLQUFKLENBQVVxRSxPQUFWLEdBQW9CLE1BQXBCO0FBQTZCLEdBQUU7QUFDakYsTUFBSUMsVUFBVSxHQUFHNVIsR0FBakI7QUFDQSxNQUFJNlIsVUFBVSxHQUFHbFAsV0FBVyxDQUFDLFlBQU07QUFDakMsUUFBSSxDQUFDaVAsVUFBVSxDQUFDdEUsS0FBWCxDQUFpQnZILE9BQXRCLEVBQStCO0FBQzdCNkwsZ0JBQVUsQ0FBQ3RFLEtBQVgsQ0FBaUJ2SCxPQUFqQixHQUEyQixDQUEzQjtBQUNEOztBQUNELFFBQUk2TCxVQUFVLENBQUN0RSxLQUFYLENBQWlCdkgsT0FBakIsR0FBMkIsQ0FBL0IsRUFBa0M7QUFDaEM2TCxnQkFBVSxDQUFDdEUsS0FBWCxDQUFpQnZILE9BQWpCLElBQTRCLElBQUkwTCxRQUFoQztBQUNELEtBRkQsTUFFTztBQUNMeE8sbUJBQWEsQ0FBQzRPLFVBQUQsQ0FBYjtBQUNBSCxRQUFFO0FBQ0YxUixTQUFHLENBQUNzTixLQUFKLENBQVV2SCxPQUFWLEdBQW9CLEVBQXBCO0FBRUQ7QUFDRixHQVoyQixFQVl6QixJQUFJMEwsUUFacUIsQ0FBNUI7QUFhRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0NELElBQU1LLGVBQWUsR0FBR0MsbUJBQU8sQ0FBQyxpRkFBRCxDQUEvQjs7QUFDQSxJQUFNQyxFQUFFLEdBQUcsSUFBSUYsZUFBSixFQUFYO0FBR08sU0FBUzlELFFBQVQsQ0FBa0JpRSxJQUFsQixFQUF3QkMsS0FBeEIsRUFBK0I7QUFBQTtBQUNwQyxNQUFJQyxLQUFLLEdBQUcsSUFBWjtBQUNBLE1BQU12SCxLQUFLLEdBQUcsSUFBZDtBQUNBLFNBQU8sWUFBTTtBQUNYLFFBQU13SCxPQUFPLEdBQUd4SCxLQUFoQjtBQUNBLFFBQU15SCxJQUFJLEdBQUdDLFVBQWI7QUFDQUMsZ0JBQVksQ0FBQ0osS0FBRCxDQUFaO0FBQ0FBLFNBQUssR0FBR25QLFVBQVUsQ0FBQyxZQUFNO0FBQ3ZCaVAsVUFBSSxDQUFDTyxLQUFMLENBQVdKLE9BQVgsRUFBb0JDLElBQXBCO0FBQ0QsS0FGaUIsRUFFZkgsS0FGZSxDQUFsQjtBQUdELEdBUEQ7QUFRRDtBQUVNLElBQU1oRyxFQUFFLEdBQUc7QUFDaEJ1RyxLQUFHLEVBQUUsYUFBQUMsQ0FBQztBQUFBLFdBQUlDLEtBQUssQ0FBQ0MsT0FBTixDQUFjRixDQUFkLENBQUo7QUFBQSxHQURVO0FBRWhCRyxLQUFHLEVBQUUsYUFBQUgsQ0FBQztBQUFBLFdBQUl2RyxNQUFNLENBQUMyRyxTQUFQLENBQWlCQyxRQUFqQixDQUEwQkMsSUFBMUIsQ0FBK0JOLENBQS9CLEVBQWtDTyxPQUFsQyxDQUEwQyxRQUExQyxJQUFzRCxDQUFDLENBQTNEO0FBQUEsR0FGVTtBQUdoQkMsS0FBRyxFQUFFLGFBQUFSLENBQUM7QUFBQSxXQUFJeEcsRUFBRSxDQUFDMkcsR0FBSCxDQUFPSCxDQUFQLEtBQWFBLENBQUMsQ0FBQ1MsY0FBRixDQUFpQixhQUFqQixDQUFqQjtBQUFBLEdBSFU7QUFJaEJDLEtBQUcsRUFBRSxhQUFBVixDQUFDO0FBQUEsV0FBSUEsQ0FBQyxZQUFZVyxVQUFqQjtBQUFBLEdBSlU7QUFLaEJDLEtBQUcsRUFBRSxhQUFBWixDQUFDO0FBQUEsV0FBSUEsQ0FBQyxZQUFZYSxnQkFBakI7QUFBQSxHQUxVO0FBTWhCQyxLQUFHLEVBQUUsYUFBQWQsQ0FBQztBQUFBLFdBQUlBLENBQUMsQ0FBQ2UsUUFBRixJQUFjdkgsRUFBRSxDQUFDa0gsR0FBSCxDQUFPVixDQUFQLENBQWxCO0FBQUEsR0FOVTtBQU9oQmdCLEtBQUcsRUFBRSxhQUFBaEIsQ0FBQztBQUFBLFdBQUksT0FBT0EsQ0FBUCxLQUFhLFFBQWpCO0FBQUEsR0FQVTtBQVFoQmlCLEtBQUcsRUFBRSxhQUFBakIsQ0FBQztBQUFBLFdBQUksT0FBT0EsQ0FBUCxLQUFhLFVBQWpCO0FBQUEsR0FSVTtBQVNoQmtCLEtBQUcsRUFBRSxhQUFBbEIsQ0FBQztBQUFBLFdBQUksT0FBT0EsQ0FBUCxLQUFhLFdBQWpCO0FBQUEsR0FUVTtBQVVoQm1CLEtBQUcsRUFBRSxhQUFBbkIsQ0FBQztBQUFBLFdBQUl4RyxFQUFFLENBQUMwSCxHQUFILENBQU9sQixDQUFQLEtBQWFBLENBQUMsS0FBSyxJQUF2QjtBQUFBLEdBVlU7QUFXaEJvQixLQUFHLEVBQUUsYUFBQXBCLENBQUM7QUFBQSxXQUFJLHFDQUFxQ3FCLElBQXJDLENBQTBDckIsQ0FBMUMsQ0FBSjtBQUFBLEdBWFU7QUFZaEJzQixNQUFJLEVBQUUsY0FBQXRCLENBQUM7QUFBQSxXQUFJLFFBQVFxQixJQUFSLENBQWFyQixDQUFiLENBQUo7QUFBQSxHQVpTO0FBYWhCdUIsS0FBRyxFQUFFLGFBQUF2QixDQUFDO0FBQUEsV0FBSSxPQUFPcUIsSUFBUCxDQUFZckIsQ0FBWixDQUFKO0FBQUEsR0FiVTtBQWNoQndCLEtBQUcsRUFBRSxhQUFBeEIsQ0FBQztBQUFBLFdBQUksT0FBT3FCLElBQVAsQ0FBWXJCLENBQVosQ0FBSjtBQUFBLEdBZFU7QUFlaEJ5QixLQUFHLEVBQUUsYUFBQXpCLENBQUM7QUFBQSxXQUFLeEcsRUFBRSxDQUFDNEgsR0FBSCxDQUFPcEIsQ0FBUCxLQUFheEcsRUFBRSxDQUFDK0gsR0FBSCxDQUFPdkIsQ0FBUCxDQUFiLElBQTBCeEcsRUFBRSxDQUFDZ0ksR0FBSCxDQUFPeEIsQ0FBUCxDQUEvQjtBQUFBLEdBZlU7QUFnQmhCMEIsS0FBRyxFQUFFLGFBQUExQixDQUFDO0FBQUEsV0FBSSxDQUFDMkIsdUJBQXVCLENBQUNsQixjQUF4QixDQUF1Q1QsQ0FBdkMsQ0FBRCxJQUE4QyxDQUFDNEIsb0JBQW9CLENBQUNuQixjQUFyQixDQUFvQ1QsQ0FBcEMsQ0FBL0MsSUFBeUZBLENBQUMsS0FBSyxTQUEvRixJQUE0R0EsQ0FBQyxLQUFLLFdBQXRIO0FBQUE7QUFoQlUsQ0FBWDtBQW1CQSxTQUFTaEwsaUJBQVQsQ0FBMkI2TSxHQUEzQixFQUFnQ0MsR0FBaEMsRUFBcUNDLElBQXJDLEVBQTJDO0FBQ2hELFNBQU96QyxFQUFFLENBQUMwQyxNQUFILENBQVVELElBQVYsS0FBbUJELEdBQUcsR0FBR0QsR0FBekIsSUFBZ0NBLEdBQXZDO0FBQ0Q7QUFFTSxTQUFTSSxXQUFULENBQXFCQyxFQUFyQixFQUF5QkMsRUFBekIsRUFBNkJDLEVBQTdCLEVBQWlDQyxFQUFqQyxFQUFxQztBQUMxQyxTQUFPN1EsSUFBSSxDQUFDOFEsSUFBTCxDQUFVLENBQUNGLEVBQUUsR0FBR0YsRUFBTixLQUFhRSxFQUFFLEdBQUdGLEVBQWxCLElBQXdCLENBQUNHLEVBQUUsR0FBR0YsRUFBTixLQUFhRSxFQUFFLEdBQUdGLEVBQWxCLENBQWxDLENBQVA7QUFDRDtBQUVNLFNBQVNJLGNBQVQsQ0FBd0JDLE1BQXhCLEVBQWdDO0FBQ3JDLFNBQVFBLE1BQU0sR0FBRyxHQUFWLEdBQWlCaFIsSUFBSSxDQUFDQyxFQUE3QjtBQUNEO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLFNBQVM4SyxnQkFBVCxDQUEwQkYsQ0FBMUIsRUFBNkI7QUFDbEMsTUFBSW9HLEdBQUcsR0FBRztBQUFFelEsS0FBQyxFQUFFLENBQUw7QUFBUUMsS0FBQyxFQUFFO0FBQVgsR0FBVjs7QUFDQSxNQUFJb0ssQ0FBQyxDQUFDcUcsSUFBRixLQUFXLFlBQVgsSUFBMkJyRyxDQUFDLENBQUNxRyxJQUFGLEtBQVcsV0FBdEMsSUFBcURyRyxDQUFDLENBQUNxRyxJQUFGLEtBQVcsVUFBaEUsSUFBOEVyRyxDQUFDLENBQUNxRyxJQUFGLEtBQVcsYUFBN0YsRUFBNEc7QUFDMUcsUUFBSUMsS0FBSyxHQUFHdEcsQ0FBQyxDQUFDdUcsYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0IsQ0FBeEIsS0FBOEJ4RyxDQUFDLENBQUN1RyxhQUFGLENBQWdCRSxjQUFoQixDQUErQixDQUEvQixDQUExQztBQUNBTCxPQUFHLENBQUN6USxDQUFKLEdBQVEyUSxLQUFLLENBQUNJLEtBQWQ7QUFDQU4sT0FBRyxDQUFDeFEsQ0FBSixHQUFRMFEsS0FBSyxDQUFDSyxLQUFkO0FBQ0QsR0FKRCxNQUlPLElBQUkzRyxDQUFDLENBQUNxRyxJQUFGLEtBQVcsV0FBWCxJQUEwQnJHLENBQUMsQ0FBQ3FHLElBQUYsS0FBVyxTQUFyQyxJQUFrRHJHLENBQUMsQ0FBQ3FHLElBQUYsS0FBVyxXQUE3RCxJQUE0RXJHLENBQUMsQ0FBQ3FHLElBQUYsS0FBVyxXQUF2RixJQUFzR3JHLENBQUMsQ0FBQ3FHLElBQUYsS0FBVyxVQUFqSCxJQUErSHJHLENBQUMsQ0FBQ3FHLElBQUYsS0FBVyxZQUExSSxJQUEwSnJHLENBQUMsQ0FBQ3FHLElBQUYsS0FBVyxZQUF6SyxFQUF1TDtBQUM1TEQsT0FBRyxDQUFDelEsQ0FBSixHQUFRcUssQ0FBQyxDQUFDMEcsS0FBVjtBQUNBTixPQUFHLENBQUN4USxDQUFKLEdBQVFvSyxDQUFDLENBQUMyRyxLQUFWO0FBQ0Q7O0FBQ0QsU0FBT1AsR0FBUDtBQUNEO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxTQUFTUSxhQUFULENBQXVCQyxNQUF2QixFQUErQkMsSUFBL0IsRUFBcUM7QUFDMUMsU0FBTzFKLE1BQU0sQ0FBQzJHLFNBQVAsQ0FBaUJLLGNBQWpCLENBQWdDSCxJQUFoQyxDQUFxQzRDLE1BQXJDLEVBQTZDQyxJQUE3QyxDQUFQO0FBQ0Q7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sU0FBU0MsT0FBVCxDQUFpQkMsR0FBakIsRUFBc0I7QUFDM0IsU0FBTyxPQUFPQSxHQUFQLEtBQWUsUUFBZixHQUEwQkMsS0FBSyxDQUFDRCxHQUFELENBQS9CLEdBQXVDLENBQUNBLEdBQS9DO0FBQ0Q7O0FBR0QsU0FBU0UsU0FBVCxDQUFtQkMsUUFBbkIsRUFBNkI7QUFDM0IsTUFBTWpDLEdBQUcsR0FBRyxrQ0FBa0NrQyxJQUFsQyxDQUF1Q0QsUUFBdkMsQ0FBWjtBQUNBLFNBQU9qQyxHQUFHLGtCQUFXQSxHQUFHLENBQUMsQ0FBRCxDQUFkLFdBQXlCaUMsUUFBbkM7QUFDRDs7QUFFRCxTQUFTRSxTQUFULENBQW1CQyxRQUFuQixFQUE2QjtBQUMzQixNQUFNQyxHQUFHLEdBQUcsa0NBQVo7QUFDQSxNQUFNeEMsR0FBRyxHQUFHdUMsUUFBUSxDQUFDRSxPQUFULENBQWlCRCxHQUFqQixFQUFzQixVQUFDRSxDQUFELEVBQUlDLENBQUosRUFBT0MsQ0FBUCxFQUFVQyxDQUFWO0FBQUEsV0FBZ0JGLENBQUMsR0FBR0EsQ0FBSixHQUFRQyxDQUFSLEdBQVlBLENBQVosR0FBZ0JDLENBQWhCLEdBQW9CQSxDQUFwQztBQUFBLEdBQXRCLENBQVo7QUFDQSxNQUFNMUMsR0FBRyxHQUFHLDRDQUE0Q2tDLElBQTVDLENBQWlEckMsR0FBakQsQ0FBWjtBQUNBLE1BQU0yQyxDQUFDLEdBQUdHLFFBQVEsQ0FBQzNDLEdBQUcsQ0FBQyxDQUFELENBQUosRUFBUyxFQUFULENBQWxCO0FBQ0EsTUFBTXlDLENBQUMsR0FBR0UsUUFBUSxDQUFDM0MsR0FBRyxDQUFDLENBQUQsQ0FBSixFQUFTLEVBQVQsQ0FBbEI7QUFDQSxNQUFNMEMsQ0FBQyxHQUFHQyxRQUFRLENBQUMzQyxHQUFHLENBQUMsQ0FBRCxDQUFKLEVBQVMsRUFBVCxDQUFsQjtBQUNBLHdCQUFld0MsQ0FBZixjQUFvQkMsQ0FBcEIsY0FBeUJDLENBQXpCO0FBQ0Q7O0FBRUQsU0FBU0UsU0FBVCxDQUFtQkMsUUFBbkIsRUFBNkI7QUFDM0IsTUFBTTVDLEdBQUcsR0FBRywwQ0FBMENpQyxJQUExQyxDQUErQ1csUUFBL0MsS0FBNEQsdURBQXVEWCxJQUF2RCxDQUE0RFcsUUFBNUQsQ0FBeEU7QUFDQSxNQUFNQyxDQUFDLEdBQUdILFFBQVEsQ0FBQzFDLEdBQUcsQ0FBQyxDQUFELENBQUosRUFBUyxFQUFULENBQVIsR0FBdUIsR0FBakM7QUFDQSxNQUFNOEMsQ0FBQyxHQUFHSixRQUFRLENBQUMxQyxHQUFHLENBQUMsQ0FBRCxDQUFKLEVBQVMsRUFBVCxDQUFSLEdBQXVCLEdBQWpDO0FBQ0EsTUFBTStDLENBQUMsR0FBR0wsUUFBUSxDQUFDMUMsR0FBRyxDQUFDLENBQUQsQ0FBSixFQUFTLEVBQVQsQ0FBUixHQUF1QixHQUFqQztBQUNBLE1BQU14QixDQUFDLEdBQUd3QixHQUFHLENBQUMsQ0FBRCxDQUFILElBQVUsQ0FBcEI7O0FBQ0EsV0FBU2dELE9BQVQsQ0FBaUJDLENBQWpCLEVBQW9CQyxDQUFwQixFQUF1QkMsQ0FBdkIsRUFBMEI7QUFDeEIsUUFBSUEsQ0FBQyxHQUFHLENBQVIsRUFBV0EsQ0FBQyxJQUFJLENBQUw7QUFDWCxRQUFJQSxDQUFDLEdBQUcsQ0FBUixFQUFXQSxDQUFDLElBQUksQ0FBTDtBQUNYLFFBQUlBLENBQUMsR0FBRyxJQUFJLENBQVosRUFBZSxPQUFPRixDQUFDLEdBQUcsQ0FBQ0MsQ0FBQyxHQUFHRCxDQUFMLElBQVUsQ0FBVixHQUFjRSxDQUF6QjtBQUNmLFFBQUlBLENBQUMsR0FBRyxJQUFJLENBQVosRUFBZSxPQUFPRCxDQUFQO0FBQ2YsUUFBSUMsQ0FBQyxHQUFHLElBQUksQ0FBWixFQUFlLE9BQU9GLENBQUMsR0FBRyxDQUFDQyxDQUFDLEdBQUdELENBQUwsS0FBVyxJQUFJLENBQUosR0FBUUUsQ0FBbkIsSUFBd0IsQ0FBbkM7QUFDZixXQUFPRixDQUFQO0FBQ0Q7O0FBQ0QsTUFBSVYsQ0FBSixFQUFPQyxDQUFQLEVBQVVDLENBQVY7O0FBQ0EsTUFBSUssQ0FBQyxJQUFJLENBQVQsRUFBWTtBQUNWUCxLQUFDLEdBQUdDLENBQUMsR0FBR0MsQ0FBQyxHQUFHTSxDQUFaO0FBQ0QsR0FGRCxNQUVPO0FBQ0wsUUFBTUcsQ0FBQyxHQUFHSCxDQUFDLEdBQUcsR0FBSixHQUFVQSxDQUFDLElBQUksSUFBSUQsQ0FBUixDQUFYLEdBQXdCQyxDQUFDLEdBQUdELENBQUosR0FBUUMsQ0FBQyxHQUFHRCxDQUE5QztBQUNBLFFBQU1HLENBQUMsR0FBRyxJQUFJRixDQUFKLEdBQVFHLENBQWxCO0FBQ0FYLEtBQUMsR0FBR1MsT0FBTyxDQUFDQyxDQUFELEVBQUlDLENBQUosRUFBT0wsQ0FBQyxHQUFHLElBQUksQ0FBZixDQUFYO0FBQ0FMLEtBQUMsR0FBR1EsT0FBTyxDQUFDQyxDQUFELEVBQUlDLENBQUosRUFBT0wsQ0FBUCxDQUFYO0FBQ0FKLEtBQUMsR0FBR08sT0FBTyxDQUFDQyxDQUFELEVBQUlDLENBQUosRUFBT0wsQ0FBQyxHQUFHLElBQUksQ0FBZixDQUFYO0FBQ0Q7O0FBQ0Qsd0JBQWVOLENBQUMsR0FBRyxHQUFuQixjQUEwQkMsQ0FBQyxHQUFHLEdBQTlCLGNBQXFDQyxDQUFDLEdBQUcsR0FBekMsY0FBZ0RqRSxDQUFoRDtBQUNEOztBQUVNLFNBQVM0RSxXQUFULENBQXFCdkIsR0FBckIsRUFBMEI7QUFDL0IsTUFBSTdKLEVBQUUsQ0FBQytILEdBQUgsQ0FBTzhCLEdBQVAsQ0FBSixFQUFpQixPQUFPRSxTQUFTLENBQUNGLEdBQUQsQ0FBaEI7QUFDakIsTUFBSTdKLEVBQUUsQ0FBQzRILEdBQUgsQ0FBT2lDLEdBQVAsQ0FBSixFQUFpQixPQUFPSyxTQUFTLENBQUNMLEdBQUQsQ0FBaEI7QUFDakIsTUFBSTdKLEVBQUUsQ0FBQ2dJLEdBQUgsQ0FBTzZCLEdBQVAsQ0FBSixFQUFpQixPQUFPYyxTQUFTLENBQUNkLEdBQUQsQ0FBaEI7QUFDbEI7QUFFTSxTQUFTd0Isd0JBQVQsQ0FBa0N2RCxJQUFsQyxFQUF3QztBQUM3QyxTQUFPQSxJQUFJLENBQUN1QyxPQUFMLENBQWEsZUFBYixFQUE4QixFQUE5QixFQUFrQ0EsT0FBbEMsQ0FBMEMsS0FBMUMsRUFBaUQsRUFBakQsRUFBcURBLE9BQXJELENBQTZELEtBQTdELEVBQW9FLEVBQXBFLEVBQXdFaUIsS0FBeEUsQ0FBOEUsR0FBOUUsRUFBbUZDLEdBQW5GLENBQXVGLFVBQUEvUyxDQUFDO0FBQUEsV0FBSWtTLFFBQVEsQ0FBQ2xTLENBQUQsQ0FBWjtBQUFBLEdBQXhGLENBQVA7QUFDRDtBQUlNLFNBQVMyRixhQUFULENBQXVCNUYsUUFBdkIsRUFBbUQ7QUFBQSxNQUFsQmlULFdBQWtCLHVFQUFKLEVBQUk7QUFDeEQsTUFBSXROLFNBQVMsR0FBRyxFQUFoQjs7QUFDQSxPQUFLLElBQUl6RSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHbEIsUUFBUSxDQUFDcUcsTUFBN0IsRUFBcUNuRixDQUFDLEVBQXRDLEVBQTBDO0FBQ3hDLFFBQUlnUyxHQUFHLEdBQUdsVCxRQUFRLENBQUNrQixDQUFDLEdBQUcsQ0FBTCxDQUFsQjtBQUNBLFFBQUlpUyxHQUFHLEdBQUduVCxRQUFRLENBQUNrQixDQUFELENBQWxCO0FBQ0EsUUFBSWtTLEVBQUUsR0FBR0QsR0FBRyxDQUFDbFQsQ0FBSixHQUFRaVQsR0FBRyxDQUFDalQsQ0FBckI7QUFDQSxRQUFJb1QsRUFBRSxHQUFHRixHQUFHLENBQUNqVCxDQUFKLEdBQVFnVCxHQUFHLENBQUNoVCxDQUFyQjs7QUFDQSxTQUFLLElBQUlvVCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxJQUFJTCxXQUFyQixFQUFrQ0ssQ0FBQyxFQUFuQyxFQUF1QztBQUNyQyxVQUFJclQsQ0FBQyxHQUFHaVQsR0FBRyxDQUFDalQsQ0FBSixHQUFRbVQsRUFBRSxHQUFHRSxDQUFMLEdBQVNMLFdBQXpCO0FBQ0EsVUFBSS9TLENBQUMsR0FBR2dULEdBQUcsQ0FBQ2hULENBQUosR0FBUW1ULEVBQUUsR0FBR0MsQ0FBTCxHQUFTTCxXQUF6QjtBQUNBdE4sZUFBUyxDQUFDMkIsSUFBVixDQUFlO0FBQ2JySCxTQUFDLEVBQUVBLENBRFU7QUFFYkMsU0FBQyxFQUFFQTtBQUZVLE9BQWY7QUFJRDtBQUNGOztBQUdELFNBQVF5RixTQUFSO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25LTSxTQUFTNE4sVUFBVCxDQUFvQjNWLEdBQXBCLEVBQXlCcUMsQ0FBekIsRUFBNEJDLENBQTVCLEVBQStCMUMsS0FBL0IsRUFBc0NzRCxLQUF0QyxFQUE2QzBTLEtBQTdDLEVBQW9EO0FBQ3pENVYsS0FBRyxDQUFDb0IsSUFBSjtBQUNBcEIsS0FBRyxDQUFDd00sU0FBSixHQUFnQnRKLEtBQWhCO0FBQ0FsRCxLQUFHLENBQUNrSixXQUFKLEdBQWtCME0sS0FBbEI7QUFDQTVWLEtBQUcsQ0FBQ3lNLFFBQUosQ0FBYXBLLENBQUMsR0FBR3pDLEtBQUssR0FBRyxDQUF6QixFQUE0QjBDLENBQUMsR0FBRzFDLEtBQUssR0FBRyxDQUF4QyxFQUEyQ0EsS0FBM0MsRUFBa0RBLEtBQWxEO0FBQ0FJLEtBQUcsQ0FBQytCLE9BQUo7QUFDRDtBQUNNLFNBQVM0QixRQUFULENBQWtCM0QsR0FBbEIsRUFBdUJxQyxDQUF2QixFQUEwQkMsQ0FBMUIsRUFBNkIxQyxLQUE3QixFQUFvQ0MsTUFBcEMsRUFBNENxRCxLQUE1QyxFQUFtRDBTLEtBQW5ELEVBQTBEO0FBQy9ENVYsS0FBRyxDQUFDb0IsSUFBSjtBQUNBcEIsS0FBRyxDQUFDd00sU0FBSixHQUFnQnRKLEtBQWhCO0FBQ0FsRCxLQUFHLENBQUNrSixXQUFKLEdBQWtCME0sS0FBbEI7QUFDQTVWLEtBQUcsQ0FBQ3lNLFFBQUosQ0FBYXBLLENBQUMsR0FBR3pDLEtBQUssR0FBRyxDQUF6QixFQUE0QjBDLENBQUMsR0FBR3pDLE1BQU0sR0FBRyxDQUF6QyxFQUE0Q0QsS0FBNUMsRUFBbURDLE1BQW5EO0FBQ0FHLEtBQUcsQ0FBQytCLE9BQUo7QUFDRDtBQUNNLFNBQVN1RCxVQUFULENBQW9CdEYsR0FBcEIsRUFBeUJxQyxDQUF6QixFQUE0QkMsQ0FBNUIsRUFBK0IxQyxLQUEvQixFQUFzQ3NELEtBQXRDLEVBQXdEO0FBQUEsTUFBWDBTLEtBQVcsdUVBQUgsQ0FBRztBQUM3RDVWLEtBQUcsQ0FBQ29CLElBQUo7QUFDQXBCLEtBQUcsQ0FBQ3dNLFNBQUosR0FBZ0J0SixLQUFoQjtBQUNBbEQsS0FBRyxDQUFDa0osV0FBSixHQUFrQjBNLEtBQWxCO0FBQ0E1VixLQUFHLENBQUNnSixTQUFKO0FBQ0FoSixLQUFHLENBQUM2VixHQUFKLENBQVF4VCxDQUFSLEVBQVdDLENBQVgsRUFBYzFDLEtBQUssR0FBRyxDQUF0QixFQUF5QixDQUF6QixFQUE0QmlDLElBQUksQ0FBQ0MsRUFBTCxHQUFVLENBQXRDLEVBQXlDLElBQXpDO0FBQ0E5QixLQUFHLENBQUNvSixTQUFKO0FBQ0FwSixLQUFHLENBQUNxSCxJQUFKO0FBQ0FySCxLQUFHLENBQUMrQixPQUFKO0FBQ0Q7QUFDTSxTQUFTK1QsUUFBVCxDQUFrQjlWLEdBQWxCLEVBQXVCdVMsRUFBdkIsRUFBMkJDLEVBQTNCLEVBQStCQyxFQUEvQixFQUFtQ0MsRUFBbkMsRUFBdUNxRCxXQUF2QyxFQUFvRC9ULFdBQXBELEVBQWlFO0FBQ3RFaEMsS0FBRyxDQUFDb0IsSUFBSjtBQUNBcEIsS0FBRyxDQUFDMkksV0FBSixHQUFrQm9OLFdBQWxCO0FBQ0EvVixLQUFHLENBQUM0SSxTQUFKLEdBQWdCNUcsV0FBaEI7QUFDQWhDLEtBQUcsQ0FBQ2dKLFNBQUo7QUFDQWhKLEtBQUcsQ0FBQzJILE1BQUosQ0FBVzRLLEVBQVgsRUFBZUMsRUFBZjtBQUNBeFMsS0FBRyxDQUFDNkgsTUFBSixDQUFXNEssRUFBWCxFQUFlQyxFQUFmO0FBQ0ExUyxLQUFHLENBQUNvSixTQUFKO0FBQ0FwSixLQUFHLENBQUNtSixNQUFKO0FBQ0FuSixLQUFHLENBQUMrQixPQUFKO0FBQ0Q7QUFFTSxTQUFTaVUsUUFBVCxDQUFrQmhXLEdBQWxCLEVBQWtHO0FBQUEsTUFBM0VpVyxXQUEyRSx1RUFBN0QsTUFBNkQ7QUFBQSxNQUFyRDVULENBQXFEO0FBQUEsTUFBbERDLENBQWtEO0FBQUEsTUFBL0NZLEtBQStDLHVFQUF2QyxNQUF1QztBQUFBLE1BQS9CZ0ksUUFBK0IsdUVBQXBCLEVBQW9CO0FBQUEsTUFBaEJnTCxJQUFnQix1RUFBVCxPQUFTO0FBQ3ZHbFcsS0FBRyxDQUFDb0IsSUFBSjtBQUNBcEIsS0FBRyxDQUFDd00sU0FBSixHQUFnQnRKLEtBQWhCO0FBQ0FsRCxLQUFHLENBQUNrVyxJQUFKLGFBQWNoTCxRQUFkLGdCQUE0QmdMLElBQTVCO0FBQ0FsVyxLQUFHLENBQUNtVyxRQUFKLENBQWFGLFdBQWIsRUFBMEI1VCxDQUExQixFQUE2QkMsQ0FBN0I7QUFDQXRDLEtBQUcsQ0FBQytCLE9BQUo7QUFDRCxDOzs7Ozs7Ozs7Ozs7Ozs7O0FDMUNNLFNBQVNxVSxrQkFBVCxDQUE0QkMsU0FBNUIsRUFBdUM7QUFDNUMsTUFBSUMsR0FBRyxHQUFHRCxTQUFTLENBQUNFLFNBQVYsRUFBVjtBQUNBLE1BQUlDLEtBQUssR0FBRyxJQUFJQyxLQUFKLENBQVVKLFNBQVMsQ0FBQ3pXLEtBQXBCLEVBQTJCeVcsU0FBUyxDQUFDeFcsTUFBckMsQ0FBWjtBQUNBMlcsT0FBSyxDQUFDRSxHQUFOLEdBQVlKLEdBQVo7QUFDQSxTQUFPRSxLQUFQO0FBQ0Q7QUFFTSxTQUFTclcsY0FBVCxDQUF3QndXLFNBQXhCLEVBQW1DO0FBQ3hDLE1BQUlDLFFBQVEsR0FBRzVTLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixRQUF2QixDQUFmO0FBQ0EsTUFBSTRTLFFBQVEsR0FBR0QsUUFBUSxDQUFDckwsVUFBVCxDQUFvQixJQUFwQixDQUFmO0FBQ0EsTUFBSXVMLFdBQVcsR0FBR0gsU0FBUyxDQUFDdFEsTUFBVixDQUFpQnpHLEtBQW5DO0FBQ0EsTUFBSW1YLFlBQVksR0FBR0osU0FBUyxDQUFDdFEsTUFBVixDQUFpQnhHLE1BQXBDO0FBQ0ErVyxVQUFRLENBQUNoWCxLQUFULEdBQWlCa1gsV0FBakI7QUFDQUYsVUFBUSxDQUFDL1csTUFBVCxHQUFrQmtYLFlBQWxCO0FBRUEsTUFBSUMsU0FBUyxHQUFHTCxTQUFTLENBQUNNLFlBQVYsQ0FBdUIsQ0FBdkIsRUFBMEIsQ0FBMUIsRUFBNkJILFdBQTdCLEVBQTBDQyxZQUExQyxDQUFoQjtBQUNBRixVQUFRLENBQUNLLFlBQVQsQ0FBc0JGLFNBQXRCLEVBQWlDLENBQWpDLEVBQW9DLENBQXBDO0FBQ0EsU0FBT0osUUFBUDtBQUNELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkQ7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNTyxzQkFBc0IsR0FBRztBQUM3QkMsWUFBVSxFQUFFLEtBRGlCO0FBRTdCQyxRQUFNLEVBQUUsRUFGcUI7QUFHN0JuVSxPQUFLLEVBQUUsTUFIc0I7QUFJN0JvVSxRQUFNLEVBQUUsSUFKcUI7QUFLN0JDLFFBQU0sRUFBRSxJQUxxQjtBQU03QkMsZUFBYSxFQUFFLENBTmM7QUFPN0JDLGVBQWEsRUFBRSxDQVBjO0FBUTdCQyxXQUFTLEVBQUUsQ0FSa0I7QUFTN0JDLFdBQVMsRUFBRTtBQVRrQixDQUEvQjtBQVlBLElBQU1DLHVCQUF1QixHQUFHO0FBQzlCQyxTQUFPLEVBQUUsRUFEcUI7QUFFOUJDLFNBQU8sRUFBRSxFQUZxQjtBQUc5QkMsUUFBTSxFQUFFLEdBSHNCO0FBSTlCQyxNQUFJLEVBQUUsRUFKd0I7QUFLOUJDLGFBQVcsRUFBRSxJQUxpQjtBQU05Qi9VLE9BQUssRUFBRSxrQkFOdUI7QUFPOUI0TyxLQUFHLEVBQUUsRUFQeUI7QUFROUJvRyxLQUFHLEVBQUU7QUFSeUIsQ0FBaEM7O0lBV01DLGdCOzs7OztBQUNKLDRCQUFZOVIsTUFBWixFQUFvQnpJLGFBQXBCLEVBQW1DQyxNQUFuQyxFQUEyQytMLGFBQTNDLEVBQTBEO0FBQUE7O0FBQUE7O0FBQ3hELDhCQUFNdkQsTUFBTixFQUFjekksYUFBZCxFQUE2QkMsTUFBN0IsRUFBcUMrTCxhQUFyQztBQUNBLFVBQUt3TyxZQUFMLEdBQW9CLEtBQXBCOztBQUNBLFVBQUtyYSxJQUFMOztBQUh3RDtBQUl6RDs7OztXQUNELGdCQUFPO0FBQ0wsV0FBS3FhLFlBQUwsR0FBb0IsSUFBcEI7QUFDQSxXQUFLQyxRQUFMO0FBQ0EsV0FBS0MsV0FBTDtBQUNEOzs7V0FFRCxrQkFBU3hLLE1BQVQsRUFBaUI7QUFDZixXQUFLc0ssWUFBTCxHQUFvQnRLLE1BQXBCO0FBQ0Q7OztXQUVELG9CQUFXO0FBQ1QsVUFBSXZGLEtBQUssR0FBRyxJQUFaO0FBQ0EsV0FBS3pKLElBQUwsR0FBWTtBQUNWc1ksa0JBQVUsRUFBRTdPLEtBQUssQ0FBQzFLLE1BQU4sQ0FBYXVaLFVBRGY7QUFFVmxVLGFBQUssRUFBRXFGLEtBQUssQ0FBQzFLLE1BQU4sQ0FBYXFGLEtBRlY7QUFHVm1VLGNBQU0sRUFBRTlPLEtBQUssQ0FBQzFLLE1BQU4sQ0FBYXdaLE1BSFg7QUFJVnRRLGdCQUFRLEVBQUU7QUFDUjFFLFdBQUMsRUFBRWtHLEtBQUssQ0FBQzVJLEdBQU4sQ0FBVUMsS0FBVixHQUFrQixDQURiO0FBRVIwQyxXQUFDLEVBQUVpRyxLQUFLLENBQUM1SSxHQUFOLENBQVVFLE1BQVYsR0FBbUI7QUFGZCxTQUpBO0FBUVZtRixhQUFLLEVBQUU7QUFDTDNDLFdBQUMsRUFBRWtHLEtBQUssQ0FBQzFLLE1BQU4sQ0FBYXlaLE1BRFg7QUFFTGhWLFdBQUMsRUFBRWlHLEtBQUssQ0FBQzFLLE1BQU4sQ0FBYTBaO0FBRlgsU0FSRztBQVlWZ0Isb0JBQVksRUFBRTtBQUNabFcsV0FBQyxFQUFFa0csS0FBSyxDQUFDMUssTUFBTixDQUFhMlosYUFESjtBQUVabFYsV0FBQyxFQUFFaUcsS0FBSyxDQUFDMUssTUFBTixDQUFhNFo7QUFGSixTQVpKO0FBZ0JWZSxnQkFBUSxFQUFFO0FBQ1JuVyxXQUFDLEVBQUVrRyxLQUFLLENBQUMxSyxNQUFOLENBQWE2WixTQURSO0FBRVJwVixXQUFDLEVBQUVpRyxLQUFLLENBQUMxSyxNQUFOLENBQWE4WjtBQUZSO0FBaEJBLE9BQVo7QUFxQkQ7OztXQUNELG9CQUFXO0FBQ1RyUyw0REFBVSxDQUFDLEtBQUt0RixHQUFOLEVBQVcsS0FBS2xCLElBQUwsQ0FBVWlJLFFBQVYsQ0FBbUIxRSxDQUE5QixFQUFpQyxLQUFLdkQsSUFBTCxDQUFVaUksUUFBVixDQUFtQnpFLENBQXBELEVBQXVELEtBQUt4RCxJQUFMLENBQVV1WSxNQUFWLEdBQW1CLENBQTFFLEVBQTZFLEtBQUt2WSxJQUFMLENBQVVvRSxLQUF2RixDQUFWO0FBQ0Q7OztXQUNELHVCQUFjO0FBQ1osVUFBSSxLQUFLa1YsWUFBTCxJQUFxQixLQUF6QixFQUFnQztBQUNoQyxVQUFJN1AsS0FBSyxHQUFHLElBQVo7O0FBQ0EsVUFBSUEsS0FBSyxDQUFDekosSUFBTixDQUFXc1ksVUFBWCxLQUEwQixJQUE5QixFQUFvQztBQUNsQzdPLGFBQUssQ0FBQ2pKLFVBQU4sQ0FBaUIsdUJBQWpCO0FBQ0QsT0FGRCxNQUdLO0FBQ0hpSixhQUFLLENBQUN2SSxHQUFOLENBQVVpSixTQUFWLENBQW9CLENBQXBCLEVBQXVCLENBQXZCLEVBQTBCVixLQUFLLENBQUM1SSxHQUFOLENBQVVDLEtBQXBDLEVBQTJDMkksS0FBSyxDQUFDNUksR0FBTixDQUFVRSxNQUFyRDtBQUNEOztBQUNEMEksV0FBSyxDQUFDdkksR0FBTixDQUFVUSxTQUFWLENBQW9CK0gsS0FBSyxDQUFDMUssTUFBTixDQUFhb2EsV0FBakMsRUFBOEMsQ0FBOUMsRUFBaUQsQ0FBakQ7QUFDQTFQLFdBQUssQ0FBQ2tRLFFBQU47QUFDQWxRLFdBQUssQ0FBQ21RLGVBQU47QUFDQW5RLFdBQUssQ0FBQ29RLFlBQU47QUFDQXBRLFdBQUssQ0FBQ3FRLGFBQU47QUFDQTNNLDJCQUFxQixDQUNuQjFELEtBQUssQ0FBQytQLFdBQU4sQ0FBa0J2VixJQUFsQixDQUF1QndGLEtBQXZCLENBRG1CLENBQXJCO0FBR0Q7OztXQUVELHdCQUFlO0FBQ2IsVUFBSXNRLEVBQUUsR0FBRyxLQUFLN00sV0FBZDtBQUNBLFdBQUtsTixJQUFMLENBQVVrRyxLQUFWLENBQWdCM0MsQ0FBaEIsR0FBb0IsS0FBS3ZELElBQUwsQ0FBVWtHLEtBQVYsQ0FBZ0IzQyxDQUFoQixHQUFvQixLQUFLdkQsSUFBTCxDQUFVMFosUUFBVixDQUFtQm5XLENBQXZDLEdBQTJDLEtBQUt2RCxJQUFMLENBQVV5WixZQUFWLENBQXVCbFcsQ0FBdkIsR0FBMkJ3VyxFQUExRjtBQUNBLFdBQUsvWixJQUFMLENBQVVrRyxLQUFWLENBQWdCMUMsQ0FBaEIsR0FBb0IsS0FBS3hELElBQUwsQ0FBVWtHLEtBQVYsQ0FBZ0IxQyxDQUFoQixHQUFvQixLQUFLeEQsSUFBTCxDQUFVMFosUUFBVixDQUFtQmxXLENBQXZDLEdBQTJDLEtBQUt4RCxJQUFMLENBQVV5WixZQUFWLENBQXVCalcsQ0FBdkIsR0FBMkJ1VyxFQUExRjtBQUNEOzs7V0FFRCwyQkFBa0I7QUFDaEIsVUFBSUEsRUFBRSxHQUFHLEtBQUs3TSxXQUFkO0FBQ0EsV0FBS2xOLElBQUwsQ0FBVWlJLFFBQVYsQ0FBbUIxRSxDQUFuQixJQUF3QixLQUFLdkQsSUFBTCxDQUFVa0csS0FBVixDQUFnQjNDLENBQWhCLEdBQW9Cd1csRUFBNUM7QUFDQSxXQUFLL1osSUFBTCxDQUFVaUksUUFBVixDQUFtQnpFLENBQW5CLElBQXdCLEtBQUt4RCxJQUFMLENBQVVrRyxLQUFWLENBQWdCMUMsQ0FBaEIsR0FBb0J1VyxFQUE1QztBQUNEOzs7V0FDRCx5QkFBZ0I7QUFDZCxVQUFJL1osSUFBSSxHQUFHLEtBQUtBLElBQWhCO0FBQ0EsVUFBSXVILE1BQU0sR0FBRyxLQUFLMUcsR0FBbEIsQ0FGYyxDQUdkOztBQUNBLFVBQUliLElBQUksQ0FBQ2lJLFFBQUwsQ0FBY3pFLENBQWQsR0FBa0J4RCxJQUFJLENBQUN1WSxNQUF2QixHQUFnQ2hSLE1BQU0sQ0FBQ3hHLE1BQTNDLEVBQW1EO0FBQ2pEO0FBQ0EsWUFBSWYsSUFBSSxDQUFDa0csS0FBTCxDQUFXMUMsQ0FBWCxHQUFlLENBQW5CLEVBQXNCO0FBQ3BCeEQsY0FBSSxDQUFDa0csS0FBTCxDQUFXMUMsQ0FBWCxHQUFlLENBQUN4RCxJQUFJLENBQUNrRyxLQUFMLENBQVcxQyxDQUEzQjtBQUNEO0FBQ0YsT0FMRCxDQU1BO0FBTkEsV0FPSyxJQUFJeEQsSUFBSSxDQUFDaUksUUFBTCxDQUFjekUsQ0FBZCxHQUFrQnhELElBQUksQ0FBQ3VZLE1BQXZCLEdBQWdDLENBQXBDLEVBQXVDO0FBQzFDO0FBQ0EsY0FBSXZZLElBQUksQ0FBQ2tHLEtBQUwsQ0FBVzFDLENBQVgsR0FBZSxDQUFuQixFQUFzQjtBQUNwQnhELGdCQUFJLENBQUNrRyxLQUFMLENBQVcxQyxDQUFYLEdBQWUsQ0FBQ3hELElBQUksQ0FBQ2tHLEtBQUwsQ0FBVzFDLENBQTNCO0FBQ0Q7QUFDRixTQWhCYSxDQWtCZDs7O0FBQ0EsVUFBSXhELElBQUksQ0FBQ2lJLFFBQUwsQ0FBYzFFLENBQWQsR0FBa0J2RCxJQUFJLENBQUN1WSxNQUF2QixHQUFnQ2hSLE1BQU0sQ0FBQ3pHLEtBQTNDLEVBQWtEO0FBQ2hELFlBQUlkLElBQUksQ0FBQ2tHLEtBQUwsQ0FBVzNDLENBQVgsR0FBZSxDQUFuQixFQUFzQjtBQUNwQnZELGNBQUksQ0FBQ2tHLEtBQUwsQ0FBVzNDLENBQVgsR0FBZSxDQUFDdkQsSUFBSSxDQUFDa0csS0FBTCxDQUFXM0MsQ0FBM0I7QUFDRDtBQUNGLE9BSkQsQ0FLQTtBQUxBLFdBTUssSUFBSXZELElBQUksQ0FBQ2lJLFFBQUwsQ0FBYzFFLENBQWQsR0FBa0J2RCxJQUFJLENBQUN1WSxNQUF2QixHQUFnQyxDQUFwQyxFQUF1QztBQUMxQyxjQUFJdlksSUFBSSxDQUFDa0csS0FBTCxDQUFXM0MsQ0FBWCxHQUFlLENBQW5CLEVBQXNCO0FBQ3BCdkQsZ0JBQUksQ0FBQ2tHLEtBQUwsQ0FBVzNDLENBQVgsR0FBZSxDQUFDdkQsSUFBSSxDQUFDa0csS0FBTCxDQUFXM0MsQ0FBM0I7QUFDRDtBQUNGO0FBRUY7Ozs7RUF4RzRCeUQscUQ7O0lBMkd6QmdULFk7Ozs7O0FBQ0osd0JBQVl6UyxNQUFaLEVBQW9CekksYUFBcEIsRUFBbUNDLE1BQW5DLEVBQTJDK0wsYUFBM0MsRUFBMEQ7QUFBQTs7QUFBQTs7QUFDeEQsZ0NBQU12RCxNQUFOLEVBQWN6SSxhQUFkLEVBQTZCQyxNQUE3QixFQUFxQytMLGFBQXJDO0FBQ0EsV0FBS21QLFNBQUwsR0FBaUIsT0FBS2xiLE1BQUwsQ0FBWWdhLE9BQTdCO0FBQ0EsV0FBS21CLE1BQUwsR0FBYyxJQUFkO0FBQ0EsV0FBS1osWUFBTCxHQUFvQixLQUFwQjs7QUFDQSxXQUFLcmEsSUFBTDs7QUFMd0Q7QUFNekQ7Ozs7V0FDRCxnQkFBTztBQUNMLFdBQUtxYSxZQUFMLEdBQW9CLElBQXBCO0FBQ0EsV0FBS25ZLE9BQUw7QUFDRDs7O1dBRUQsa0JBQVM2TixNQUFULEVBQWlCO0FBQ2YsV0FBS3NLLFlBQUwsR0FBb0J0SyxNQUFwQjtBQUNEOzs7V0FFRCxtQkFBVTtBQUFBOztBQUNSLFVBQUl2RixLQUFLLEdBQUcsSUFBWjtBQUNBLFdBQUtsSSxRQUFMLEdBQWdCQyxXQUFXLENBQUMsWUFBTTtBQUNoQyxZQUFJLE1BQUksQ0FBQzhYLFlBQVQsRUFBdUI7QUFDckI3UCxlQUFLLENBQUNoSSxLQUFOO0FBQ0FnSSxlQUFLLENBQUMwUSxTQUFOO0FBQ0Q7QUFDRixPQUwwQixFQUt4QixLQUFLcGIsTUFBTCxDQUFZa2EsTUFMWSxDQUEzQjtBQU1EOzs7V0FFRCxxQkFBWTtBQUNWLFdBQUssSUFBSXpVLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLElBQUksS0FBS3pGLE1BQUwsQ0FBWWlVLEdBQWpDLEVBQXNDeE8sQ0FBQyxFQUF2QyxFQUEyQztBQUN6QyxhQUFLLElBQUlvUyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxJQUFJLEtBQUs3WCxNQUFMLENBQVlpVSxHQUFqQyxFQUFzQzRELENBQUMsRUFBdkMsRUFBMkM7QUFDekNwUSxnRUFBVSxDQUNSLEtBQUt0RixHQURHLEVBRVJzRCxDQUFDLEdBQUcsS0FBSzNELEdBQUwsQ0FBU0MsS0FBYixHQUFxQixLQUFLL0IsTUFBTCxDQUFZaVUsR0FGekIsRUFHUjRELENBQUMsR0FBRyxLQUFLL1YsR0FBTCxDQUFTRSxNQUFiLEdBQXNCLEtBQUtoQyxNQUFMLENBQVlxYSxHQUgxQixFQUlSLEtBQUthLFNBSkcsRUFLUixLQUFLbGIsTUFBTCxDQUFZcUYsS0FMSixFQU1SLENBTlEsQ0FBVjtBQVFEO0FBQ0Y7O0FBQ0QsVUFBSSxLQUFLNlYsU0FBTCxHQUFpQixDQUFqQixHQUFxQixLQUFLbGIsTUFBTCxDQUFZZ2EsT0FBckMsRUFBOEM7QUFDNUMsYUFBS21CLE1BQUwsR0FBYyxJQUFkO0FBQ0QsT0FGRCxNQUdLLElBQUksS0FBS0QsU0FBTCxHQUFpQixDQUFqQixHQUFxQixLQUFLbGIsTUFBTCxDQUFZaWEsT0FBckMsRUFBOEM7QUFDakQsYUFBS2tCLE1BQUwsR0FBYyxLQUFkO0FBQ0Q7O0FBQ0QsVUFBSSxLQUFLQSxNQUFULEVBQWlCO0FBQ2YsYUFBS0QsU0FBTCxJQUFrQixLQUFLbGIsTUFBTCxDQUFZbWEsSUFBOUI7QUFDRCxPQUZELE1BR0s7QUFDSCxhQUFLZSxTQUFMLElBQWtCLEtBQUtsYixNQUFMLENBQVltYSxJQUE5QjtBQUNEO0FBQ0Y7Ozs7RUFwRHdCbFMscUQ7O0FBdURwQixTQUFTb1QsVUFBVCxHQUFzQjtBQUMzQixNQUFJQyxhQUFhLEdBQUd6TCwyQ0FBQyxDQUFDLGlCQUFELENBQXJCO0FBQ0EsTUFBSTBMLGFBQWEsR0FBR3BWLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixRQUF2QixDQUFwQjtBQUNBLE1BQUlvVixRQUFKO0FBQ0EsTUFBSUMsYUFBYSxHQUFHclQsK0NBQUksQ0FBQzZTLFlBQUQsRUFBZWxCLHVCQUFmLEVBQXdDLEVBQXhDLEVBQTRDd0IsYUFBNUMsRUFBMkRELGFBQTNELENBQXhCO0FBQ0EsTUFBSUksYUFBYSxHQUFHRCxhQUFhLENBQUNsWixPQUFkLENBQXNCZixJQUF0QixDQUEyQixVQUFDbWEsb0JBQUQsRUFBMEI7QUFDdkUsUUFBSUMsY0FBYyxHQUFHeFQsK0NBQUksQ0FBQ2tTLGdCQUFELEVBQW1CaEIsc0JBQW5CLEVBQTJDO0FBQ2xFQyxnQkFBVSxFQUFFLElBRHNEO0FBRWxFQyxZQUFNLEVBQUUsRUFGMEQ7QUFHbEVuVSxXQUFLLEVBQUUsb0JBSDJEO0FBSWxFb1UsWUFBTSxFQUFFLElBSjBEO0FBS2xFVyxpQkFBVyxFQUFFdUIsb0JBQW9CLENBQUM3WixHQUxnQztBQU1sRTRYLFlBQU0sRUFBRSxJQU4wRDtBQU9sRUMsbUJBQWEsRUFBRSxDQVBtRDtBQVFsRUMsbUJBQWEsRUFBRSxHQVJtRDtBQVNsRUMsZUFBUyxFQUFFO0FBVHVELEtBQTNDLEVBVXRCeUIsYUFWc0IsQ0FBekI7QUFZQU0sa0JBQWMsQ0FBQzVZLE9BQWY7QUFFQSxXQUFPNFksY0FBYyxDQUFDclosT0FBZixDQUF1QmYsSUFBdkIsQ0FBNEIsVUFBQ3FhLHdCQUFELEVBQThCO0FBQy9ELGFBQU8sSUFBSWpaLE9BQUosQ0FBWSxVQUFBQyxHQUFHLEVBQUk7QUFDeEIyWSxnQkFBUSxHQUFHLGtCQUFDdkwsTUFBRCxFQUFZO0FBQ3JCMEwsOEJBQW9CLENBQUNILFFBQXJCLENBQThCdkwsTUFBOUI7QUFDQTRMLGtDQUF3QixDQUFDTCxRQUF6QixDQUFrQ3ZMLE1BQWxDO0FBQ0QsU0FIRDs7QUFJQXBOLFdBQUcsQ0FBQzJZLFFBQUQsQ0FBSDtBQUNELE9BTk0sQ0FBUDtBQU9ELEtBUk0sQ0FBUDtBQVNELEdBeEJtQixDQUFwQjtBQXlCQUMsZUFBYSxDQUFDelksT0FBZDtBQUVBLFNBQU8wWSxhQUFQO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvTk0sSUFBTWhXLFdBQVcsR0FBRyxDQUN6QjtBQUNFb0IsSUFBRSxFQUFFLENBRE47QUFFRUUsTUFBSSxFQUFFLEtBRlI7QUFHRUUsT0FBSyxFQUFFLENBSFQ7QUFJRW5GLE9BQUssRUFBRSxDQUpUO0FBS0U0RCxVQUFRLEVBQUU7QUFDUm5CLEtBQUMsRUFBRSxDQURLO0FBRVJDLEtBQUMsRUFBRTtBQUZLO0FBTFosQ0FEeUIsRUFXekI7QUFDRXFDLElBQUUsRUFBRSxDQUROO0FBRUVFLE1BQUksRUFBRSxLQUZSO0FBR0VFLE9BQUssRUFBRSxDQUhUO0FBSUVuRixPQUFLLEVBQUUsQ0FKVDtBQUtFNEQsVUFBUSxFQUFFO0FBQ1JuQixLQUFDLEVBQUUsQ0FESztBQUVSQyxLQUFDLEVBQUU7QUFGSztBQUxaLENBWHlCLENBQXBCO0FBdUJBLElBQU04QyxRQUFRLEdBQUc7QUFDdEI1QixVQUFRLEVBQUU7QUFDUm5CLEtBQUMsRUFBRSxDQURLO0FBRVJDLEtBQUMsRUFBRTtBQUZLLEdBRFk7QUFLdEIwQyxPQUFLLEVBQUU7QUFDTDNDLEtBQUMsRUFBRSxDQURFO0FBRUxDLEtBQUMsRUFBRTtBQUZFLEdBTGU7QUFTdEIyQyxNQUFJLEVBQUUsQ0FUZ0I7QUFVdEIvQixPQUFLLEVBQUU7QUFWZSxDQUFqQjtBQWVBLElBQU15VyxTQUFTLEdBQUc7QUFDdkI5VSxNQUFJLEVBQUUsS0FEaUI7QUFFdkIwRSxRQUFNLEVBQUU7QUFGZSxDQUFsQixDOzs7Ozs7Ozs7O0FDckNQO0FBQ0E7QUFDQTtBQUVBcVEsTUFBTSxDQUFDQyxPQUFQLEdBQWlCQyxPQUFqQjtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsT0FBVCxDQUFpQkMsSUFBakIsRUFBdUI7QUFDckJBLE1BQUksR0FBR0EsSUFBSSxJQUFJLEVBQWY7QUFDQSxPQUFLQyxFQUFMLEdBQVVELElBQUksQ0FBQzdILEdBQUwsSUFBWSxHQUF0QjtBQUNBLE9BQUtDLEdBQUwsR0FBVzRILElBQUksQ0FBQzVILEdBQUwsSUFBWSxLQUF2QjtBQUNBLE9BQUs4SCxNQUFMLEdBQWNGLElBQUksQ0FBQ0UsTUFBTCxJQUFlLENBQTdCO0FBQ0EsT0FBS0MsTUFBTCxHQUFjSCxJQUFJLENBQUNHLE1BQUwsR0FBYyxDQUFkLElBQW1CSCxJQUFJLENBQUNHLE1BQUwsSUFBZSxDQUFsQyxHQUFzQ0gsSUFBSSxDQUFDRyxNQUEzQyxHQUFvRCxDQUFsRTtBQUNBLE9BQUtDLFFBQUwsR0FBZ0IsQ0FBaEI7QUFDRDtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUFMLE9BQU8sQ0FBQ3JKLFNBQVIsQ0FBa0JyQixRQUFsQixHQUE2QixZQUFVO0FBQ3JDLE1BQUk0SyxFQUFFLEdBQUcsS0FBS0EsRUFBTCxHQUFVblksSUFBSSxDQUFDdVksR0FBTCxDQUFTLEtBQUtILE1BQWQsRUFBc0IsS0FBS0UsUUFBTCxFQUF0QixDQUFuQjs7QUFDQSxNQUFJLEtBQUtELE1BQVQsRUFBaUI7QUFDZixRQUFJRyxJQUFJLEdBQUl4WSxJQUFJLENBQUN3USxNQUFMLEVBQVo7QUFDQSxRQUFJaUksU0FBUyxHQUFHelksSUFBSSxDQUFDMFksS0FBTCxDQUFXRixJQUFJLEdBQUcsS0FBS0gsTUFBWixHQUFxQkYsRUFBaEMsQ0FBaEI7QUFDQUEsTUFBRSxHQUFHLENBQUNuWSxJQUFJLENBQUMwWSxLQUFMLENBQVdGLElBQUksR0FBRyxFQUFsQixJQUF3QixDQUF6QixLQUErQixDQUEvQixHQUFvQ0wsRUFBRSxHQUFHTSxTQUF6QyxHQUFxRE4sRUFBRSxHQUFHTSxTQUEvRDtBQUNEOztBQUNELFNBQU96WSxJQUFJLENBQUNxUSxHQUFMLENBQVM4SCxFQUFULEVBQWEsS0FBSzdILEdBQWxCLElBQXlCLENBQWhDO0FBQ0QsQ0FSRDtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBMkgsT0FBTyxDQUFDckosU0FBUixDQUFrQitKLEtBQWxCLEdBQTBCLFlBQVU7QUFDbEMsT0FBS0wsUUFBTCxHQUFnQixDQUFoQjtBQUNELENBRkQ7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQUwsT0FBTyxDQUFDckosU0FBUixDQUFrQmdLLE1BQWxCLEdBQTJCLFVBQVN2SSxHQUFULEVBQWE7QUFDdEMsT0FBSzhILEVBQUwsR0FBVTlILEdBQVY7QUFDRCxDQUZEO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE0SCxPQUFPLENBQUNySixTQUFSLENBQWtCaUssTUFBbEIsR0FBMkIsVUFBU3ZJLEdBQVQsRUFBYTtBQUN0QyxPQUFLQSxHQUFMLEdBQVdBLEdBQVg7QUFDRCxDQUZEO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEySCxPQUFPLENBQUNySixTQUFSLENBQWtCa0ssU0FBbEIsR0FBOEIsVUFBU1QsTUFBVCxFQUFnQjtBQUM1QyxPQUFLQSxNQUFMLEdBQWNBLE1BQWQ7QUFDRCxDQUZELEM7Ozs7Ozs7Ozs7QUNqRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLFVBQVNVLEtBQVQsRUFBZTtBQUNkOztBQUVBZixnQkFBQSxHQUFpQixVQUFTZ0IsV0FBVCxFQUFzQjtBQUNyQyxRQUFJQyxLQUFLLEdBQUcsSUFBSUMsVUFBSixDQUFlRixXQUFmLENBQVo7QUFBQSxRQUNBdlgsQ0FEQTtBQUFBLFFBQ0cwWCxHQUFHLEdBQUdGLEtBQUssQ0FBQ3JTLE1BRGY7QUFBQSxRQUN1QndTLE1BQU0sR0FBRyxFQURoQzs7QUFHQSxTQUFLM1gsQ0FBQyxHQUFHLENBQVQsRUFBWUEsQ0FBQyxHQUFHMFgsR0FBaEIsRUFBcUIxWCxDQUFDLElBQUUsQ0FBeEIsRUFBMkI7QUFDekIyWCxZQUFNLElBQUlMLEtBQUssQ0FBQ0UsS0FBSyxDQUFDeFgsQ0FBRCxDQUFMLElBQVksQ0FBYixDQUFmO0FBQ0EyWCxZQUFNLElBQUlMLEtBQUssQ0FBRSxDQUFDRSxLQUFLLENBQUN4WCxDQUFELENBQUwsR0FBVyxDQUFaLEtBQWtCLENBQW5CLEdBQXlCd1gsS0FBSyxDQUFDeFgsQ0FBQyxHQUFHLENBQUwsQ0FBTCxJQUFnQixDQUExQyxDQUFmO0FBQ0EyWCxZQUFNLElBQUlMLEtBQUssQ0FBRSxDQUFDRSxLQUFLLENBQUN4WCxDQUFDLEdBQUcsQ0FBTCxDQUFMLEdBQWUsRUFBaEIsS0FBdUIsQ0FBeEIsR0FBOEJ3WCxLQUFLLENBQUN4WCxDQUFDLEdBQUcsQ0FBTCxDQUFMLElBQWdCLENBQS9DLENBQWY7QUFDQTJYLFlBQU0sSUFBSUwsS0FBSyxDQUFDRSxLQUFLLENBQUN4WCxDQUFDLEdBQUcsQ0FBTCxDQUFMLEdBQWUsRUFBaEIsQ0FBZjtBQUNEOztBQUVELFFBQUswWCxHQUFHLEdBQUcsQ0FBUCxLQUFjLENBQWxCLEVBQXFCO0FBQ25CQyxZQUFNLEdBQUdBLE1BQU0sQ0FBQ0MsU0FBUCxDQUFpQixDQUFqQixFQUFvQkQsTUFBTSxDQUFDeFMsTUFBUCxHQUFnQixDQUFwQyxJQUF5QyxHQUFsRDtBQUNELEtBRkQsTUFFTyxJQUFJdVMsR0FBRyxHQUFHLENBQU4sS0FBWSxDQUFoQixFQUFtQjtBQUN4QkMsWUFBTSxHQUFHQSxNQUFNLENBQUNDLFNBQVAsQ0FBaUIsQ0FBakIsRUFBb0JELE1BQU0sQ0FBQ3hTLE1BQVAsR0FBZ0IsQ0FBcEMsSUFBeUMsSUFBbEQ7QUFDRDs7QUFFRCxXQUFPd1MsTUFBUDtBQUNELEdBbEJEOztBQW9CQXBCLGdCQUFBLEdBQWtCLFVBQVNvQixNQUFULEVBQWlCO0FBQ2pDLFFBQUlFLFlBQVksR0FBR0YsTUFBTSxDQUFDeFMsTUFBUCxHQUFnQixJQUFuQztBQUFBLFFBQ0F1UyxHQUFHLEdBQUdDLE1BQU0sQ0FBQ3hTLE1BRGI7QUFBQSxRQUNxQm5GLENBRHJCO0FBQUEsUUFDd0J3UixDQUFDLEdBQUcsQ0FENUI7QUFBQSxRQUVBc0csUUFGQTtBQUFBLFFBRVVDLFFBRlY7QUFBQSxRQUVvQkMsUUFGcEI7QUFBQSxRQUU4QkMsUUFGOUI7O0FBSUEsUUFBSU4sTUFBTSxDQUFDQSxNQUFNLENBQUN4UyxNQUFQLEdBQWdCLENBQWpCLENBQU4sS0FBOEIsR0FBbEMsRUFBdUM7QUFDckMwUyxrQkFBWTs7QUFDWixVQUFJRixNQUFNLENBQUNBLE1BQU0sQ0FBQ3hTLE1BQVAsR0FBZ0IsQ0FBakIsQ0FBTixLQUE4QixHQUFsQyxFQUF1QztBQUNyQzBTLG9CQUFZO0FBQ2I7QUFDRjs7QUFFRCxRQUFJTixXQUFXLEdBQUcsSUFBSVcsV0FBSixDQUFnQkwsWUFBaEIsQ0FBbEI7QUFBQSxRQUNBTCxLQUFLLEdBQUcsSUFBSUMsVUFBSixDQUFlRixXQUFmLENBRFI7O0FBR0EsU0FBS3ZYLENBQUMsR0FBRyxDQUFULEVBQVlBLENBQUMsR0FBRzBYLEdBQWhCLEVBQXFCMVgsQ0FBQyxJQUFFLENBQXhCLEVBQTJCO0FBQ3pCOFgsY0FBUSxHQUFHUixLQUFLLENBQUNoSyxPQUFOLENBQWNxSyxNQUFNLENBQUMzWCxDQUFELENBQXBCLENBQVg7QUFDQStYLGNBQVEsR0FBR1QsS0FBSyxDQUFDaEssT0FBTixDQUFjcUssTUFBTSxDQUFDM1gsQ0FBQyxHQUFDLENBQUgsQ0FBcEIsQ0FBWDtBQUNBZ1ksY0FBUSxHQUFHVixLQUFLLENBQUNoSyxPQUFOLENBQWNxSyxNQUFNLENBQUMzWCxDQUFDLEdBQUMsQ0FBSCxDQUFwQixDQUFYO0FBQ0FpWSxjQUFRLEdBQUdYLEtBQUssQ0FBQ2hLLE9BQU4sQ0FBY3FLLE1BQU0sQ0FBQzNYLENBQUMsR0FBQyxDQUFILENBQXBCLENBQVg7QUFFQXdYLFdBQUssQ0FBQ2hHLENBQUMsRUFBRixDQUFMLEdBQWNzRyxRQUFRLElBQUksQ0FBYixHQUFtQkMsUUFBUSxJQUFJLENBQTVDO0FBQ0FQLFdBQUssQ0FBQ2hHLENBQUMsRUFBRixDQUFMLEdBQWMsQ0FBQ3VHLFFBQVEsR0FBRyxFQUFaLEtBQW1CLENBQXBCLEdBQTBCQyxRQUFRLElBQUksQ0FBbkQ7QUFDQVIsV0FBSyxDQUFDaEcsQ0FBQyxFQUFGLENBQUwsR0FBYyxDQUFDd0csUUFBUSxHQUFHLENBQVosS0FBa0IsQ0FBbkIsR0FBeUJDLFFBQVEsR0FBRyxFQUFqRDtBQUNEOztBQUVELFdBQU9WLFdBQVA7QUFDRCxHQTNCRDtBQTRCRCxDQW5ERCxFQW1ERyxrRUFuREgsRTs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUVBLElBQUksSUFBSixFQUFtQztBQUNqQ2pCLFFBQU0sQ0FBQ0MsT0FBUCxHQUFpQjRCLE9BQWpCO0FBQ0Q7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxTQUFTQSxPQUFULENBQWlCakwsR0FBakIsRUFBc0I7QUFDcEIsTUFBSUEsR0FBSixFQUFTLE9BQU9rTCxLQUFLLENBQUNsTCxHQUFELENBQVo7QUFDVjs7QUFBQTtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNrTCxLQUFULENBQWVsTCxHQUFmLEVBQW9CO0FBQ2xCLE9BQUssSUFBSXVCLEdBQVQsSUFBZ0IwSixPQUFPLENBQUNoTCxTQUF4QixFQUFtQztBQUNqQ0QsT0FBRyxDQUFDdUIsR0FBRCxDQUFILEdBQVcwSixPQUFPLENBQUNoTCxTQUFSLENBQWtCc0IsR0FBbEIsQ0FBWDtBQUNEOztBQUNELFNBQU92QixHQUFQO0FBQ0Q7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQWlMLE9BQU8sQ0FBQ2hMLFNBQVIsQ0FBa0JrTCxFQUFsQixHQUNBRixPQUFPLENBQUNoTCxTQUFSLENBQWtCL0UsZ0JBQWxCLEdBQXFDLFVBQVNrUSxLQUFULEVBQWdCQyxFQUFoQixFQUFtQjtBQUN0RCxPQUFLQyxVQUFMLEdBQWtCLEtBQUtBLFVBQUwsSUFBbUIsRUFBckM7QUFDQSxHQUFDLEtBQUtBLFVBQUwsQ0FBZ0IsTUFBTUYsS0FBdEIsSUFBK0IsS0FBS0UsVUFBTCxDQUFnQixNQUFNRixLQUF0QixLQUFnQyxFQUFoRSxFQUNHbFMsSUFESCxDQUNRbVMsRUFEUjtBQUVBLFNBQU8sSUFBUDtBQUNELENBTkQ7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBSixPQUFPLENBQUNoTCxTQUFSLENBQWtCc0wsSUFBbEIsR0FBeUIsVUFBU0gsS0FBVCxFQUFnQkMsRUFBaEIsRUFBbUI7QUFDMUMsV0FBU0YsRUFBVCxHQUFjO0FBQ1osU0FBS0ssR0FBTCxDQUFTSixLQUFULEVBQWdCRCxFQUFoQjtBQUNBRSxNQUFFLENBQUMxTCxLQUFILENBQVMsSUFBVCxFQUFlRixTQUFmO0FBQ0Q7O0FBRUQwTCxJQUFFLENBQUNFLEVBQUgsR0FBUUEsRUFBUjtBQUNBLE9BQUtGLEVBQUwsQ0FBUUMsS0FBUixFQUFlRCxFQUFmO0FBQ0EsU0FBTyxJQUFQO0FBQ0QsQ0FURDtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUFGLE9BQU8sQ0FBQ2hMLFNBQVIsQ0FBa0J1TCxHQUFsQixHQUNBUCxPQUFPLENBQUNoTCxTQUFSLENBQWtCd0wsY0FBbEIsR0FDQVIsT0FBTyxDQUFDaEwsU0FBUixDQUFrQnlMLGtCQUFsQixHQUNBVCxPQUFPLENBQUNoTCxTQUFSLENBQWtCMEwsbUJBQWxCLEdBQXdDLFVBQVNQLEtBQVQsRUFBZ0JDLEVBQWhCLEVBQW1CO0FBQ3pELE9BQUtDLFVBQUwsR0FBa0IsS0FBS0EsVUFBTCxJQUFtQixFQUFyQyxDQUR5RCxDQUd6RDs7QUFDQSxNQUFJLEtBQUs3TCxTQUFTLENBQUN4SCxNQUFuQixFQUEyQjtBQUN6QixTQUFLcVQsVUFBTCxHQUFrQixFQUFsQjtBQUNBLFdBQU8sSUFBUDtBQUNELEdBUHdELENBU3pEOzs7QUFDQSxNQUFJTSxTQUFTLEdBQUcsS0FBS04sVUFBTCxDQUFnQixNQUFNRixLQUF0QixDQUFoQjtBQUNBLE1BQUksQ0FBQ1EsU0FBTCxFQUFnQixPQUFPLElBQVAsQ0FYeUMsQ0FhekQ7O0FBQ0EsTUFBSSxLQUFLbk0sU0FBUyxDQUFDeEgsTUFBbkIsRUFBMkI7QUFDekIsV0FBTyxLQUFLcVQsVUFBTCxDQUFnQixNQUFNRixLQUF0QixDQUFQO0FBQ0EsV0FBTyxJQUFQO0FBQ0QsR0FqQndELENBbUJ6RDs7O0FBQ0EsTUFBSXZNLEVBQUo7O0FBQ0EsT0FBSyxJQUFJL0wsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRzhZLFNBQVMsQ0FBQzNULE1BQTlCLEVBQXNDbkYsQ0FBQyxFQUF2QyxFQUEyQztBQUN6QytMLE1BQUUsR0FBRytNLFNBQVMsQ0FBQzlZLENBQUQsQ0FBZDs7QUFDQSxRQUFJK0wsRUFBRSxLQUFLd00sRUFBUCxJQUFheE0sRUFBRSxDQUFDd00sRUFBSCxLQUFVQSxFQUEzQixFQUErQjtBQUM3Qk8sZUFBUyxDQUFDQyxNQUFWLENBQWlCL1ksQ0FBakIsRUFBb0IsQ0FBcEI7QUFDQTtBQUNEO0FBQ0YsR0EzQndELENBNkJ6RDtBQUNBOzs7QUFDQSxNQUFJOFksU0FBUyxDQUFDM1QsTUFBVixLQUFxQixDQUF6QixFQUE0QjtBQUMxQixXQUFPLEtBQUtxVCxVQUFMLENBQWdCLE1BQU1GLEtBQXRCLENBQVA7QUFDRDs7QUFFRCxTQUFPLElBQVA7QUFDRCxDQXZDRDtBQXlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUFILE9BQU8sQ0FBQ2hMLFNBQVIsQ0FBa0JyQyxJQUFsQixHQUF5QixVQUFTd04sS0FBVCxFQUFlO0FBQ3RDLE9BQUtFLFVBQUwsR0FBa0IsS0FBS0EsVUFBTCxJQUFtQixFQUFyQztBQUVBLE1BQUk5TCxJQUFJLEdBQUcsSUFBSU0sS0FBSixDQUFVTCxTQUFTLENBQUN4SCxNQUFWLEdBQW1CLENBQTdCLENBQVg7QUFBQSxNQUNJMlQsU0FBUyxHQUFHLEtBQUtOLFVBQUwsQ0FBZ0IsTUFBTUYsS0FBdEIsQ0FEaEI7O0FBR0EsT0FBSyxJQUFJdFksQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRzJNLFNBQVMsQ0FBQ3hILE1BQTlCLEVBQXNDbkYsQ0FBQyxFQUF2QyxFQUEyQztBQUN6QzBNLFFBQUksQ0FBQzFNLENBQUMsR0FBRyxDQUFMLENBQUosR0FBYzJNLFNBQVMsQ0FBQzNNLENBQUQsQ0FBdkI7QUFDRDs7QUFFRCxNQUFJOFksU0FBSixFQUFlO0FBQ2JBLGFBQVMsR0FBR0EsU0FBUyxDQUFDRSxLQUFWLENBQWdCLENBQWhCLENBQVo7O0FBQ0EsU0FBSyxJQUFJaFosQ0FBQyxHQUFHLENBQVIsRUFBVzBYLEdBQUcsR0FBR29CLFNBQVMsQ0FBQzNULE1BQWhDLEVBQXdDbkYsQ0FBQyxHQUFHMFgsR0FBNUMsRUFBaUQsRUFBRTFYLENBQW5ELEVBQXNEO0FBQ3BEOFksZUFBUyxDQUFDOVksQ0FBRCxDQUFULENBQWE2TSxLQUFiLENBQW1CLElBQW5CLEVBQXlCSCxJQUF6QjtBQUNEO0FBQ0Y7O0FBRUQsU0FBTyxJQUFQO0FBQ0QsQ0FsQkQ7QUFvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBeUwsT0FBTyxDQUFDaEwsU0FBUixDQUFrQjhMLFNBQWxCLEdBQThCLFVBQVNYLEtBQVQsRUFBZTtBQUMzQyxPQUFLRSxVQUFMLEdBQWtCLEtBQUtBLFVBQUwsSUFBbUIsRUFBckM7QUFDQSxTQUFPLEtBQUtBLFVBQUwsQ0FBZ0IsTUFBTUYsS0FBdEIsS0FBZ0MsRUFBdkM7QUFDRCxDQUhEO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBSCxPQUFPLENBQUNoTCxTQUFSLENBQWtCK0wsWUFBbEIsR0FBaUMsVUFBU1osS0FBVCxFQUFlO0FBQzlDLFNBQU8sQ0FBQyxDQUFFLEtBQUtXLFNBQUwsQ0FBZVgsS0FBZixFQUFzQm5ULE1BQWhDO0FBQ0QsQ0FGRCxDOzs7Ozs7Ozs7Ozs7QUM1S0E7QUFDQTtBQUNBO0FBRUEsSUFBSWtNLENBQUMsR0FBRyxJQUFSO0FBQ0EsSUFBSVIsQ0FBQyxHQUFHUSxDQUFDLEdBQUcsRUFBWjtBQUNBLElBQUlELENBQUMsR0FBR1AsQ0FBQyxHQUFHLEVBQVo7QUFDQSxJQUFJc0ksQ0FBQyxHQUFHL0gsQ0FBQyxHQUFHLEVBQVo7QUFDQSxJQUFJZ0ksQ0FBQyxHQUFHRCxDQUFDLEdBQUcsQ0FBWjtBQUNBLElBQUluYSxDQUFDLEdBQUdtYSxDQUFDLEdBQUcsTUFBWjtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBN0MsTUFBTSxDQUFDQyxPQUFQLEdBQWlCLFVBQVNuRyxHQUFULEVBQWNpSixPQUFkLEVBQXVCO0FBQ3RDQSxTQUFPLEdBQUdBLE9BQU8sSUFBSSxFQUFyQjs7QUFDQSxNQUFJNUosSUFBSSxXQUFVVyxHQUFWLENBQVI7O0FBQ0EsTUFBSVgsSUFBSSxLQUFLLFFBQVQsSUFBcUJXLEdBQUcsQ0FBQ2pMLE1BQUosR0FBYSxDQUF0QyxFQUF5QztBQUN2QyxXQUFPbVUsS0FBSyxDQUFDbEosR0FBRCxDQUFaO0FBQ0QsR0FGRCxNQUVPLElBQUlYLElBQUksS0FBSyxRQUFULElBQXFCOEosUUFBUSxDQUFDbkosR0FBRCxDQUFqQyxFQUF3QztBQUM3QyxXQUFPaUosT0FBTyxDQUFDRyxJQUFSLEdBQWVDLE9BQU8sQ0FBQ3JKLEdBQUQsQ0FBdEIsR0FBOEJzSixRQUFRLENBQUN0SixHQUFELENBQTdDO0FBQ0Q7O0FBQ0QsUUFBTSxJQUFJdUosS0FBSixDQUNKLDBEQUNFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZXpKLEdBQWYsQ0FGRSxDQUFOO0FBSUQsQ0FaRDtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxTQUFTa0osS0FBVCxDQUFldkwsR0FBZixFQUFvQjtBQUNsQkEsS0FBRyxHQUFHK0wsTUFBTSxDQUFDL0wsR0FBRCxDQUFaOztBQUNBLE1BQUlBLEdBQUcsQ0FBQzVJLE1BQUosR0FBYSxHQUFqQixFQUFzQjtBQUNwQjtBQUNEOztBQUNELE1BQUk0VSxLQUFLLEdBQUcsbUlBQW1JdkosSUFBbkksQ0FDVnpDLEdBRFUsQ0FBWjs7QUFHQSxNQUFJLENBQUNnTSxLQUFMLEVBQVk7QUFDVjtBQUNEOztBQUNELE1BQUlDLENBQUMsR0FBR0MsVUFBVSxDQUFDRixLQUFLLENBQUMsQ0FBRCxDQUFOLENBQWxCO0FBQ0EsTUFBSXRLLElBQUksR0FBRyxDQUFDc0ssS0FBSyxDQUFDLENBQUQsQ0FBTCxJQUFZLElBQWIsRUFBbUJHLFdBQW5CLEVBQVg7O0FBQ0EsVUFBUXpLLElBQVI7QUFDRSxTQUFLLE9BQUw7QUFDQSxTQUFLLE1BQUw7QUFDQSxTQUFLLEtBQUw7QUFDQSxTQUFLLElBQUw7QUFDQSxTQUFLLEdBQUw7QUFDRSxhQUFPdUssQ0FBQyxHQUFHaGIsQ0FBWDs7QUFDRixTQUFLLE9BQUw7QUFDQSxTQUFLLE1BQUw7QUFDQSxTQUFLLEdBQUw7QUFDRSxhQUFPZ2IsQ0FBQyxHQUFHWixDQUFYOztBQUNGLFNBQUssTUFBTDtBQUNBLFNBQUssS0FBTDtBQUNBLFNBQUssR0FBTDtBQUNFLGFBQU9ZLENBQUMsR0FBR2IsQ0FBWDs7QUFDRixTQUFLLE9BQUw7QUFDQSxTQUFLLE1BQUw7QUFDQSxTQUFLLEtBQUw7QUFDQSxTQUFLLElBQUw7QUFDQSxTQUFLLEdBQUw7QUFDRSxhQUFPYSxDQUFDLEdBQUc1SSxDQUFYOztBQUNGLFNBQUssU0FBTDtBQUNBLFNBQUssUUFBTDtBQUNBLFNBQUssTUFBTDtBQUNBLFNBQUssS0FBTDtBQUNBLFNBQUssR0FBTDtBQUNFLGFBQU80SSxDQUFDLEdBQUduSixDQUFYOztBQUNGLFNBQUssU0FBTDtBQUNBLFNBQUssUUFBTDtBQUNBLFNBQUssTUFBTDtBQUNBLFNBQUssS0FBTDtBQUNBLFNBQUssR0FBTDtBQUNFLGFBQU9tSixDQUFDLEdBQUczSSxDQUFYOztBQUNGLFNBQUssY0FBTDtBQUNBLFNBQUssYUFBTDtBQUNBLFNBQUssT0FBTDtBQUNBLFNBQUssTUFBTDtBQUNBLFNBQUssSUFBTDtBQUNFLGFBQU8ySSxDQUFQOztBQUNGO0FBQ0UsYUFBT2pULFNBQVA7QUF4Q0o7QUEwQ0Q7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsU0FBUzJTLFFBQVQsQ0FBa0JoRCxFQUFsQixFQUFzQjtBQUNwQixNQUFJeUQsS0FBSyxHQUFHNWIsSUFBSSxDQUFDNmIsR0FBTCxDQUFTMUQsRUFBVCxDQUFaOztBQUNBLE1BQUl5RCxLQUFLLElBQUloQixDQUFiLEVBQWdCO0FBQ2QsV0FBTzVhLElBQUksQ0FBQzhiLEtBQUwsQ0FBVzNELEVBQUUsR0FBR3lDLENBQWhCLElBQXFCLEdBQTVCO0FBQ0Q7O0FBQ0QsTUFBSWdCLEtBQUssSUFBSS9JLENBQWIsRUFBZ0I7QUFDZCxXQUFPN1MsSUFBSSxDQUFDOGIsS0FBTCxDQUFXM0QsRUFBRSxHQUFHdEYsQ0FBaEIsSUFBcUIsR0FBNUI7QUFDRDs7QUFDRCxNQUFJK0ksS0FBSyxJQUFJdEosQ0FBYixFQUFnQjtBQUNkLFdBQU90UyxJQUFJLENBQUM4YixLQUFMLENBQVczRCxFQUFFLEdBQUc3RixDQUFoQixJQUFxQixHQUE1QjtBQUNEOztBQUNELE1BQUlzSixLQUFLLElBQUk5SSxDQUFiLEVBQWdCO0FBQ2QsV0FBTzlTLElBQUksQ0FBQzhiLEtBQUwsQ0FBVzNELEVBQUUsR0FBR3JGLENBQWhCLElBQXFCLEdBQTVCO0FBQ0Q7O0FBQ0QsU0FBT3FGLEVBQUUsR0FBRyxJQUFaO0FBQ0Q7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsU0FBUytDLE9BQVQsQ0FBaUIvQyxFQUFqQixFQUFxQjtBQUNuQixNQUFJeUQsS0FBSyxHQUFHNWIsSUFBSSxDQUFDNmIsR0FBTCxDQUFTMUQsRUFBVCxDQUFaOztBQUNBLE1BQUl5RCxLQUFLLElBQUloQixDQUFiLEVBQWdCO0FBQ2QsV0FBT21CLE1BQU0sQ0FBQzVELEVBQUQsRUFBS3lELEtBQUwsRUFBWWhCLENBQVosRUFBZSxLQUFmLENBQWI7QUFDRDs7QUFDRCxNQUFJZ0IsS0FBSyxJQUFJL0ksQ0FBYixFQUFnQjtBQUNkLFdBQU9rSixNQUFNLENBQUM1RCxFQUFELEVBQUt5RCxLQUFMLEVBQVkvSSxDQUFaLEVBQWUsTUFBZixDQUFiO0FBQ0Q7O0FBQ0QsTUFBSStJLEtBQUssSUFBSXRKLENBQWIsRUFBZ0I7QUFDZCxXQUFPeUosTUFBTSxDQUFDNUQsRUFBRCxFQUFLeUQsS0FBTCxFQUFZdEosQ0FBWixFQUFlLFFBQWYsQ0FBYjtBQUNEOztBQUNELE1BQUlzSixLQUFLLElBQUk5SSxDQUFiLEVBQWdCO0FBQ2QsV0FBT2lKLE1BQU0sQ0FBQzVELEVBQUQsRUFBS3lELEtBQUwsRUFBWTlJLENBQVosRUFBZSxRQUFmLENBQWI7QUFDRDs7QUFDRCxTQUFPcUYsRUFBRSxHQUFHLEtBQVo7QUFDRDtBQUVEO0FBQ0E7QUFDQTs7O0FBRUEsU0FBUzRELE1BQVQsQ0FBZ0I1RCxFQUFoQixFQUFvQnlELEtBQXBCLEVBQTJCSCxDQUEzQixFQUE4QnpZLElBQTlCLEVBQW9DO0FBQ2xDLE1BQUlnWixRQUFRLEdBQUdKLEtBQUssSUFBSUgsQ0FBQyxHQUFHLEdBQTVCO0FBQ0EsU0FBT3piLElBQUksQ0FBQzhiLEtBQUwsQ0FBVzNELEVBQUUsR0FBR3NELENBQWhCLElBQXFCLEdBQXJCLEdBQTJCelksSUFBM0IsSUFBbUNnWixRQUFRLEdBQUcsR0FBSCxHQUFTLEVBQXBELENBQVA7QUFDRCxDOzs7Ozs7Ozs7O0FDaktEOztBQUVBO0FBQ0E7QUFDQTtBQUVBaEUsa0JBQUEsR0FBcUJpRSxVQUFyQjtBQUNBakUsWUFBQSxHQUFlelksSUFBZjtBQUNBeVksWUFBQSxHQUFla0UsSUFBZjtBQUNBbEUsaUJBQUEsR0FBb0JtRSxTQUFwQjtBQUNBbkUsZUFBQSxHQUFrQm9FLFlBQVksRUFBOUI7O0FBQ0FwRSxlQUFBLEdBQW1CLFlBQU07QUFDeEIsTUFBSXFFLE1BQU0sR0FBRyxLQUFiO0FBRUEsU0FBTyxZQUFNO0FBQ1osUUFBSSxDQUFDQSxNQUFMLEVBQWE7QUFDWkEsWUFBTSxHQUFHLElBQVQ7QUFDQUMsYUFBTyxDQUFDQyxJQUFSLENBQWEsdUlBQWI7QUFDQTtBQUNELEdBTEQ7QUFNQSxDQVRpQixFQUFsQjtBQVdBO0FBQ0E7QUFDQTs7O0FBRUF2RSxjQUFBLEdBQWlCLENBQ2hCLFNBRGdCLEVBRWhCLFNBRmdCLEVBR2hCLFNBSGdCLEVBSWhCLFNBSmdCLEVBS2hCLFNBTGdCLEVBTWhCLFNBTmdCLEVBT2hCLFNBUGdCLEVBUWhCLFNBUmdCLEVBU2hCLFNBVGdCLEVBVWhCLFNBVmdCLEVBV2hCLFNBWGdCLEVBWWhCLFNBWmdCLEVBYWhCLFNBYmdCLEVBY2hCLFNBZGdCLEVBZWhCLFNBZmdCLEVBZ0JoQixTQWhCZ0IsRUFpQmhCLFNBakJnQixFQWtCaEIsU0FsQmdCLEVBbUJoQixTQW5CZ0IsRUFvQmhCLFNBcEJnQixFQXFCaEIsU0FyQmdCLEVBc0JoQixTQXRCZ0IsRUF1QmhCLFNBdkJnQixFQXdCaEIsU0F4QmdCLEVBeUJoQixTQXpCZ0IsRUEwQmhCLFNBMUJnQixFQTJCaEIsU0EzQmdCLEVBNEJoQixTQTVCZ0IsRUE2QmhCLFNBN0JnQixFQThCaEIsU0E5QmdCLEVBK0JoQixTQS9CZ0IsRUFnQ2hCLFNBaENnQixFQWlDaEIsU0FqQ2dCLEVBa0NoQixTQWxDZ0IsRUFtQ2hCLFNBbkNnQixFQW9DaEIsU0FwQ2dCLEVBcUNoQixTQXJDZ0IsRUFzQ2hCLFNBdENnQixFQXVDaEIsU0F2Q2dCLEVBd0NoQixTQXhDZ0IsRUF5Q2hCLFNBekNnQixFQTBDaEIsU0ExQ2dCLEVBMkNoQixTQTNDZ0IsRUE0Q2hCLFNBNUNnQixFQTZDaEIsU0E3Q2dCLEVBOENoQixTQTlDZ0IsRUErQ2hCLFNBL0NnQixFQWdEaEIsU0FoRGdCLEVBaURoQixTQWpEZ0IsRUFrRGhCLFNBbERnQixFQW1EaEIsU0FuRGdCLEVBb0RoQixTQXBEZ0IsRUFxRGhCLFNBckRnQixFQXNEaEIsU0F0RGdCLEVBdURoQixTQXZEZ0IsRUF3RGhCLFNBeERnQixFQXlEaEIsU0F6RGdCLEVBMERoQixTQTFEZ0IsRUEyRGhCLFNBM0RnQixFQTREaEIsU0E1RGdCLEVBNkRoQixTQTdEZ0IsRUE4RGhCLFNBOURnQixFQStEaEIsU0EvRGdCLEVBZ0VoQixTQWhFZ0IsRUFpRWhCLFNBakVnQixFQWtFaEIsU0FsRWdCLEVBbUVoQixTQW5FZ0IsRUFvRWhCLFNBcEVnQixFQXFFaEIsU0FyRWdCLEVBc0VoQixTQXRFZ0IsRUF1RWhCLFNBdkVnQixFQXdFaEIsU0F4RWdCLEVBeUVoQixTQXpFZ0IsRUEwRWhCLFNBMUVnQixFQTJFaEIsU0EzRWdCLEVBNEVoQixTQTVFZ0IsQ0FBakI7QUErRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQSxTQUFTbUUsU0FBVCxHQUFxQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQSxNQUFJLE9BQU92UyxNQUFQLEtBQWtCLFdBQWxCLElBQWlDQSxNQUFNLENBQUM0UyxPQUF4QyxLQUFvRDVTLE1BQU0sQ0FBQzRTLE9BQVAsQ0FBZXRMLElBQWYsS0FBd0IsVUFBeEIsSUFBc0N0SCxNQUFNLENBQUM0UyxPQUFQLENBQWVDLE1BQXpHLENBQUosRUFBc0g7QUFDckgsV0FBTyxJQUFQO0FBQ0EsR0FObUIsQ0FRcEI7OztBQUNBLE1BQUksT0FBT0MsU0FBUCxLQUFxQixXQUFyQixJQUFvQ0EsU0FBUyxDQUFDQyxTQUE5QyxJQUEyREQsU0FBUyxDQUFDQyxTQUFWLENBQW9CaEIsV0FBcEIsR0FBa0NILEtBQWxDLENBQXdDLHVCQUF4QyxDQUEvRCxFQUFpSTtBQUNoSSxXQUFPLEtBQVA7QUFDQSxHQVhtQixDQWFwQjtBQUNBOzs7QUFDQSxTQUFRLE9BQU9yWixRQUFQLEtBQW9CLFdBQXBCLElBQW1DQSxRQUFRLENBQUMrSyxlQUE1QyxJQUErRC9LLFFBQVEsQ0FBQytLLGVBQVQsQ0FBeUI5RCxLQUF4RixJQUFpR2pILFFBQVEsQ0FBQytLLGVBQVQsQ0FBeUI5RCxLQUF6QixDQUErQndULGdCQUFqSSxJQUNOO0FBQ0MsU0FBT2hULE1BQVAsS0FBa0IsV0FBbEIsSUFBaUNBLE1BQU0sQ0FBQzBTLE9BQXhDLEtBQW9EMVMsTUFBTSxDQUFDMFMsT0FBUCxDQUFlTyxPQUFmLElBQTJCalQsTUFBTSxDQUFDMFMsT0FBUCxDQUFlUSxTQUFmLElBQTRCbFQsTUFBTSxDQUFDMFMsT0FBUCxDQUFlUyxLQUExSCxDQUZLLElBR047QUFDQTtBQUNDLFNBQU9MLFNBQVAsS0FBcUIsV0FBckIsSUFBb0NBLFNBQVMsQ0FBQ0MsU0FBOUMsSUFBMkRELFNBQVMsQ0FBQ0MsU0FBVixDQUFvQmhCLFdBQXBCLEdBQWtDSCxLQUFsQyxDQUF3QyxnQkFBeEMsQ0FBM0QsSUFBd0g5SSxRQUFRLENBQUNzSyxNQUFNLENBQUNDLEVBQVIsRUFBWSxFQUFaLENBQVIsSUFBMkIsRUFMOUksSUFNTjtBQUNDLFNBQU9QLFNBQVAsS0FBcUIsV0FBckIsSUFBb0NBLFNBQVMsQ0FBQ0MsU0FBOUMsSUFBMkRELFNBQVMsQ0FBQ0MsU0FBVixDQUFvQmhCLFdBQXBCLEdBQWtDSCxLQUFsQyxDQUF3QyxvQkFBeEMsQ0FQN0Q7QUFRQTtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLFNBQVNTLFVBQVQsQ0FBb0I5TixJQUFwQixFQUEwQjtBQUN6QkEsTUFBSSxDQUFDLENBQUQsQ0FBSixHQUFVLENBQUMsS0FBS2dPLFNBQUwsR0FBaUIsSUFBakIsR0FBd0IsRUFBekIsSUFDVCxLQUFLZSxTQURJLElBRVIsS0FBS2YsU0FBTCxHQUFpQixLQUFqQixHQUF5QixHQUZqQixJQUdUaE8sSUFBSSxDQUFDLENBQUQsQ0FISyxJQUlSLEtBQUtnTyxTQUFMLEdBQWlCLEtBQWpCLEdBQXlCLEdBSmpCLElBS1QsR0FMUyxHQUtIcEUsTUFBTSxDQUFDQyxPQUFQLENBQWVtRixRQUFmLENBQXdCLEtBQUtDLElBQTdCLENBTFA7O0FBT0EsTUFBSSxDQUFDLEtBQUtqQixTQUFWLEVBQXFCO0FBQ3BCO0FBQ0E7O0FBRUQsTUFBTWtCLENBQUMsR0FBRyxZQUFZLEtBQUtoYyxLQUEzQjtBQUNBOE0sTUFBSSxDQUFDcU0sTUFBTCxDQUFZLENBQVosRUFBZSxDQUFmLEVBQWtCNkMsQ0FBbEIsRUFBcUIsZ0JBQXJCLEVBYnlCLENBZXpCO0FBQ0E7QUFDQTs7QUFDQSxNQUFJQyxLQUFLLEdBQUcsQ0FBWjtBQUNBLE1BQUlDLEtBQUssR0FBRyxDQUFaO0FBQ0FwUCxNQUFJLENBQUMsQ0FBRCxDQUFKLENBQVFrRSxPQUFSLENBQWdCLGFBQWhCLEVBQStCLFVBQUFtSixLQUFLLEVBQUk7QUFDdkMsUUFBSUEsS0FBSyxLQUFLLElBQWQsRUFBb0I7QUFDbkI7QUFDQTs7QUFDRDhCLFNBQUs7O0FBQ0wsUUFBSTlCLEtBQUssS0FBSyxJQUFkLEVBQW9CO0FBQ25CO0FBQ0E7QUFDQStCLFdBQUssR0FBR0QsS0FBUjtBQUNBO0FBQ0QsR0FWRDtBQVlBblAsTUFBSSxDQUFDcU0sTUFBTCxDQUFZK0MsS0FBWixFQUFtQixDQUFuQixFQUFzQkYsQ0FBdEI7QUFDQTtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBckYsV0FBQSxHQUFjc0UsT0FBTyxDQUFDa0IsS0FBUixJQUFpQmxCLE9BQU8sQ0FBQ21CLEdBQXpCLElBQWlDLFlBQU0sQ0FBRSxDQUF2RDtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsU0FBU2xlLElBQVQsQ0FBY21lLFVBQWQsRUFBMEI7QUFDekIsTUFBSTtBQUNILFFBQUlBLFVBQUosRUFBZ0I7QUFDZjFGLGFBQU8sQ0FBQzJGLE9BQVIsQ0FBZ0JDLE9BQWhCLENBQXdCLE9BQXhCLEVBQWlDRixVQUFqQztBQUNBLEtBRkQsTUFFTztBQUNOMUYsYUFBTyxDQUFDMkYsT0FBUixDQUFnQkUsVUFBaEIsQ0FBMkIsT0FBM0I7QUFDQTtBQUNELEdBTkQsQ0FNRSxPQUFPQyxLQUFQLEVBQWMsQ0FDZjtBQUNBO0FBQ0E7QUFDRDtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsU0FBUzVCLElBQVQsR0FBZ0I7QUFDZixNQUFJM0osQ0FBSjs7QUFDQSxNQUFJO0FBQ0hBLEtBQUMsR0FBR3lGLE9BQU8sQ0FBQzJGLE9BQVIsQ0FBZ0JJLE9BQWhCLENBQXdCLE9BQXhCLENBQUo7QUFDQSxHQUZELENBRUUsT0FBT0QsS0FBUCxFQUFjLENBQ2Y7QUFDQTtBQUNBLEdBUGMsQ0FTZjs7O0FBQ0EsTUFBSSxDQUFDdkwsQ0FBRCxJQUFNLE9BQU9pSyxPQUFQLEtBQW1CLFdBQXpCLElBQXdDLFNBQVNBLE9BQXJELEVBQThEO0FBQzdEakssS0FBQyxHQUFHaUssT0FBTyxDQUFDd0IsR0FBUixDQUFZQyxLQUFoQjtBQUNBOztBQUVELFNBQU8xTCxDQUFQO0FBQ0E7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsU0FBUzZKLFlBQVQsR0FBd0I7QUFDdkIsTUFBSTtBQUNIO0FBQ0E7QUFDQSxXQUFPOEIsWUFBUDtBQUNBLEdBSkQsQ0FJRSxPQUFPSixLQUFQLEVBQWMsQ0FDZjtBQUNBO0FBQ0E7QUFDRDs7QUFFRC9GLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQm5LLG1CQUFPLENBQUMsb0RBQUQsQ0FBUCxDQUFvQm1LLE9BQXBCLENBQWpCO0FBRUEsSUFBT21HLFVBQVAsR0FBcUJwRyxNQUFNLENBQUNDLE9BQTVCLENBQU9tRyxVQUFQO0FBRUE7QUFDQTtBQUNBOztBQUVBQSxVQUFVLENBQUN0SyxDQUFYLEdBQWUsVUFBVXVLLENBQVYsRUFBYTtBQUMzQixNQUFJO0FBQ0gsV0FBTy9DLElBQUksQ0FBQ0MsU0FBTCxDQUFlOEMsQ0FBZixDQUFQO0FBQ0EsR0FGRCxDQUVFLE9BQU9OLEtBQVAsRUFBYztBQUNmLFdBQU8saUNBQWlDQSxLQUFLLENBQUNPLE9BQTlDO0FBQ0E7QUFDRCxDQU5ELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyUUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxTQUFTQyxLQUFULENBQWVOLEdBQWYsRUFBb0I7QUFDbkJPLGFBQVcsQ0FBQ2YsS0FBWixHQUFvQmUsV0FBcEI7QUFDQUEsYUFBVyxDQUFDQyxPQUFaLEdBQXNCRCxXQUF0QjtBQUNBQSxhQUFXLENBQUNFLE1BQVosR0FBcUJBLE1BQXJCO0FBQ0FGLGFBQVcsQ0FBQ0csT0FBWixHQUFzQkEsT0FBdEI7QUFDQUgsYUFBVyxDQUFDSSxNQUFaLEdBQXFCQSxNQUFyQjtBQUNBSixhQUFXLENBQUNLLE9BQVosR0FBc0JBLE9BQXRCO0FBQ0FMLGFBQVcsQ0FBQ3BCLFFBQVosR0FBdUJ0UCxtQkFBTyxDQUFDLHlEQUFELENBQTlCO0FBQ0EwUSxhQUFXLENBQUNNLE9BQVosR0FBc0JBLE9BQXRCO0FBRUE1VyxRQUFNLENBQUM2VyxJQUFQLENBQVlkLEdBQVosRUFBaUJlLE9BQWpCLENBQXlCLFVBQUE3TyxHQUFHLEVBQUk7QUFDL0JxTyxlQUFXLENBQUNyTyxHQUFELENBQVgsR0FBbUI4TixHQUFHLENBQUM5TixHQUFELENBQXRCO0FBQ0EsR0FGRDtBQUlBO0FBQ0Q7QUFDQTs7QUFFQ3FPLGFBQVcsQ0FBQ1MsS0FBWixHQUFvQixFQUFwQjtBQUNBVCxhQUFXLENBQUNVLEtBQVosR0FBb0IsRUFBcEI7QUFFQTtBQUNEO0FBQ0E7QUFDQTtBQUNBOztBQUNDVixhQUFXLENBQUNKLFVBQVosR0FBeUIsRUFBekI7QUFFQTtBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0MsV0FBU2UsV0FBVCxDQUFxQmhDLFNBQXJCLEVBQWdDO0FBQy9CLFFBQUlpQyxJQUFJLEdBQUcsQ0FBWDs7QUFFQSxTQUFLLElBQUkxZCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHeWIsU0FBUyxDQUFDdFcsTUFBOUIsRUFBc0NuRixDQUFDLEVBQXZDLEVBQTJDO0FBQzFDMGQsVUFBSSxHQUFJLENBQUNBLElBQUksSUFBSSxDQUFULElBQWNBLElBQWYsR0FBdUJqQyxTQUFTLENBQUNrQyxVQUFWLENBQXFCM2QsQ0FBckIsQ0FBOUI7QUFDQTBkLFVBQUksSUFBSSxDQUFSLENBRjBDLENBRS9CO0FBQ1g7O0FBRUQsV0FBT1osV0FBVyxDQUFDYyxNQUFaLENBQW1CcmYsSUFBSSxDQUFDNmIsR0FBTCxDQUFTc0QsSUFBVCxJQUFpQlosV0FBVyxDQUFDYyxNQUFaLENBQW1CelksTUFBdkQsQ0FBUDtBQUNBOztBQUNEMlgsYUFBVyxDQUFDVyxXQUFaLEdBQTBCQSxXQUExQjtBQUVBO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNDLFdBQVNYLFdBQVQsQ0FBcUJyQixTQUFyQixFQUFnQztBQUMvQixRQUFJb0MsUUFBSjtBQUNBLFFBQUlDLGNBQWMsR0FBRyxJQUFyQjs7QUFFQSxhQUFTL0IsS0FBVCxHQUF3QjtBQUFBLHdDQUFOclAsSUFBTTtBQUFOQSxZQUFNO0FBQUE7O0FBQ3ZCO0FBQ0EsVUFBSSxDQUFDcVAsS0FBSyxDQUFDb0IsT0FBWCxFQUFvQjtBQUNuQjtBQUNBOztBQUVELFVBQU1ZLElBQUksR0FBR2hDLEtBQWIsQ0FOdUIsQ0FRdkI7O0FBQ0EsVUFBTWlDLElBQUksR0FBR0MsTUFBTSxDQUFDLElBQUk5VyxJQUFKLEVBQUQsQ0FBbkI7QUFDQSxVQUFNdVAsRUFBRSxHQUFHc0gsSUFBSSxJQUFJSCxRQUFRLElBQUlHLElBQWhCLENBQWY7QUFDQUQsVUFBSSxDQUFDcEMsSUFBTCxHQUFZakYsRUFBWjtBQUNBcUgsVUFBSSxDQUFDRyxJQUFMLEdBQVlMLFFBQVo7QUFDQUUsVUFBSSxDQUFDQyxJQUFMLEdBQVlBLElBQVo7QUFDQUgsY0FBUSxHQUFHRyxJQUFYO0FBRUF0UixVQUFJLENBQUMsQ0FBRCxDQUFKLEdBQVVvUSxXQUFXLENBQUNFLE1BQVosQ0FBbUJ0USxJQUFJLENBQUMsQ0FBRCxDQUF2QixDQUFWOztBQUVBLFVBQUksT0FBT0EsSUFBSSxDQUFDLENBQUQsQ0FBWCxLQUFtQixRQUF2QixFQUFpQztBQUNoQztBQUNBQSxZQUFJLENBQUN5UixPQUFMLENBQWEsSUFBYjtBQUNBLE9BckJzQixDQXVCdkI7OztBQUNBLFVBQUl0QyxLQUFLLEdBQUcsQ0FBWjtBQUNBblAsVUFBSSxDQUFDLENBQUQsQ0FBSixHQUFVQSxJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVFrRSxPQUFSLENBQWdCLGVBQWhCLEVBQWlDLFVBQUNtSixLQUFELEVBQVFxRSxNQUFSLEVBQW1CO0FBQzdEO0FBQ0EsWUFBSXJFLEtBQUssS0FBSyxJQUFkLEVBQW9CO0FBQ25CLGlCQUFPLEdBQVA7QUFDQTs7QUFDRDhCLGFBQUs7QUFDTCxZQUFNd0MsU0FBUyxHQUFHdkIsV0FBVyxDQUFDSixVQUFaLENBQXVCMEIsTUFBdkIsQ0FBbEI7O0FBQ0EsWUFBSSxPQUFPQyxTQUFQLEtBQXFCLFVBQXpCLEVBQXFDO0FBQ3BDLGNBQU1qTyxHQUFHLEdBQUcxRCxJQUFJLENBQUNtUCxLQUFELENBQWhCO0FBQ0E5QixlQUFLLEdBQUdzRSxTQUFTLENBQUNoUixJQUFWLENBQWUwUSxJQUFmLEVBQXFCM04sR0FBckIsQ0FBUixDQUZvQyxDQUlwQzs7QUFDQTFELGNBQUksQ0FBQ3FNLE1BQUwsQ0FBWThDLEtBQVosRUFBbUIsQ0FBbkI7QUFDQUEsZUFBSztBQUNMOztBQUNELGVBQU85QixLQUFQO0FBQ0EsT0FoQlMsQ0FBVixDQXpCdUIsQ0EyQ3ZCOztBQUNBK0MsaUJBQVcsQ0FBQ3RDLFVBQVosQ0FBdUJuTixJQUF2QixDQUE0QjBRLElBQTVCLEVBQWtDclIsSUFBbEM7QUFFQSxVQUFNNFIsS0FBSyxHQUFHUCxJQUFJLENBQUMvQixHQUFMLElBQVljLFdBQVcsQ0FBQ2QsR0FBdEM7QUFDQXNDLFdBQUssQ0FBQ3pSLEtBQU4sQ0FBWWtSLElBQVosRUFBa0JyUixJQUFsQjtBQUNBOztBQUVEcVAsU0FBSyxDQUFDTixTQUFOLEdBQWtCQSxTQUFsQjtBQUNBTSxTQUFLLENBQUNyQixTQUFOLEdBQWtCb0MsV0FBVyxDQUFDcEMsU0FBWixFQUFsQjtBQUNBcUIsU0FBSyxDQUFDbmMsS0FBTixHQUFja2QsV0FBVyxDQUFDVyxXQUFaLENBQXdCaEMsU0FBeEIsQ0FBZDtBQUNBTSxTQUFLLENBQUN3QyxNQUFOLEdBQWVBLE1BQWY7QUFDQXhDLFNBQUssQ0FBQ3FCLE9BQU4sR0FBZ0JOLFdBQVcsQ0FBQ00sT0FBNUIsQ0ExRCtCLENBMERNOztBQUVyQzVXLFVBQU0sQ0FBQ2dZLGNBQVAsQ0FBc0J6QyxLQUF0QixFQUE2QixTQUE3QixFQUF3QztBQUN2QzBDLGdCQUFVLEVBQUUsSUFEMkI7QUFFdkNDLGtCQUFZLEVBQUUsS0FGeUI7QUFHdkNDLFNBQUcsRUFBRTtBQUFBLGVBQU1iLGNBQWMsS0FBSyxJQUFuQixHQUEwQmhCLFdBQVcsQ0FBQ0ssT0FBWixDQUFvQjFCLFNBQXBCLENBQTFCLEdBQTJEcUMsY0FBakU7QUFBQSxPQUhrQztBQUl2Q2MsU0FBRyxFQUFFLGFBQUFqQyxDQUFDLEVBQUk7QUFDVG1CLHNCQUFjLEdBQUduQixDQUFqQjtBQUNBO0FBTnNDLEtBQXhDLEVBNUQrQixDQXFFL0I7O0FBQ0EsUUFBSSxPQUFPRyxXQUFXLENBQUNyaUIsSUFBbkIsS0FBNEIsVUFBaEMsRUFBNEM7QUFDM0NxaUIsaUJBQVcsQ0FBQ3JpQixJQUFaLENBQWlCc2hCLEtBQWpCO0FBQ0E7O0FBRUQsV0FBT0EsS0FBUDtBQUNBOztBQUVELFdBQVN3QyxNQUFULENBQWdCOUMsU0FBaEIsRUFBMkJvRCxTQUEzQixFQUFzQztBQUNyQyxRQUFNQyxRQUFRLEdBQUdoQyxXQUFXLENBQUMsS0FBS3JCLFNBQUwsSUFBa0IsT0FBT29ELFNBQVAsS0FBcUIsV0FBckIsR0FBbUMsR0FBbkMsR0FBeUNBLFNBQTNELElBQXdFcEQsU0FBekUsQ0FBNUI7QUFDQXFELFlBQVEsQ0FBQzlDLEdBQVQsR0FBZSxLQUFLQSxHQUFwQjtBQUNBLFdBQU84QyxRQUFQO0FBQ0E7QUFFRDtBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0MsV0FBUzVCLE1BQVQsQ0FBZ0JqQixVQUFoQixFQUE0QjtBQUMzQmEsZUFBVyxDQUFDaGYsSUFBWixDQUFpQm1lLFVBQWpCO0FBRUFhLGVBQVcsQ0FBQ1MsS0FBWixHQUFvQixFQUFwQjtBQUNBVCxlQUFXLENBQUNVLEtBQVosR0FBb0IsRUFBcEI7QUFFQSxRQUFJeGQsQ0FBSjtBQUNBLFFBQU02UixLQUFLLEdBQUcsQ0FBQyxPQUFPb0ssVUFBUCxLQUFzQixRQUF0QixHQUFpQ0EsVUFBakMsR0FBOEMsRUFBL0MsRUFBbURwSyxLQUFuRCxDQUF5RCxRQUF6RCxDQUFkO0FBQ0EsUUFBTTZGLEdBQUcsR0FBRzdGLEtBQUssQ0FBQzFNLE1BQWxCOztBQUVBLFNBQUtuRixDQUFDLEdBQUcsQ0FBVCxFQUFZQSxDQUFDLEdBQUcwWCxHQUFoQixFQUFxQjFYLENBQUMsRUFBdEIsRUFBMEI7QUFDekIsVUFBSSxDQUFDNlIsS0FBSyxDQUFDN1IsQ0FBRCxDQUFWLEVBQWU7QUFDZDtBQUNBO0FBQ0E7O0FBRURpYyxnQkFBVSxHQUFHcEssS0FBSyxDQUFDN1IsQ0FBRCxDQUFMLENBQVM0USxPQUFULENBQWlCLEtBQWpCLEVBQXdCLEtBQXhCLENBQWI7O0FBRUEsVUFBSXFMLFVBQVUsQ0FBQyxDQUFELENBQVYsS0FBa0IsR0FBdEIsRUFBMkI7QUFDMUJhLG1CQUFXLENBQUNVLEtBQVosQ0FBa0JwWCxJQUFsQixDQUF1QixJQUFJbVYsTUFBSixDQUFXLE1BQU1VLFVBQVUsQ0FBQzhDLE1BQVgsQ0FBa0IsQ0FBbEIsQ0FBTixHQUE2QixHQUF4QyxDQUF2QjtBQUNBLE9BRkQsTUFFTztBQUNOakMsbUJBQVcsQ0FBQ1MsS0FBWixDQUFrQm5YLElBQWxCLENBQXVCLElBQUltVixNQUFKLENBQVcsTUFBTVUsVUFBTixHQUFtQixHQUE5QixDQUF2QjtBQUNBO0FBQ0Q7QUFDRDtBQUVEO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0MsV0FBU2dCLE9BQVQsR0FBbUI7QUFDbEIsUUFBTWhCLFVBQVUsR0FBRyw2QkFDZmEsV0FBVyxDQUFDUyxLQUFaLENBQWtCekwsR0FBbEIsQ0FBc0JrTixXQUF0QixDQURlLHNCQUVmbEMsV0FBVyxDQUFDVSxLQUFaLENBQWtCMUwsR0FBbEIsQ0FBc0JrTixXQUF0QixFQUFtQ2xOLEdBQW5DLENBQXVDLFVBQUEySixTQUFTO0FBQUEsYUFBSSxNQUFNQSxTQUFWO0FBQUEsS0FBaEQsQ0FGZSxHQUdqQndELElBSGlCLENBR1osR0FIWSxDQUFuQjtBQUlBbkMsZUFBVyxDQUFDSSxNQUFaLENBQW1CLEVBQW5CO0FBQ0EsV0FBT2pCLFVBQVA7QUFDQTtBQUVEO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQyxXQUFTa0IsT0FBVCxDQUFpQjViLElBQWpCLEVBQXVCO0FBQ3RCLFFBQUlBLElBQUksQ0FBQ0EsSUFBSSxDQUFDNEQsTUFBTCxHQUFjLENBQWYsQ0FBSixLQUEwQixHQUE5QixFQUFtQztBQUNsQyxhQUFPLElBQVA7QUFDQTs7QUFFRCxRQUFJbkYsQ0FBSjtBQUNBLFFBQUkwWCxHQUFKOztBQUVBLFNBQUsxWCxDQUFDLEdBQUcsQ0FBSixFQUFPMFgsR0FBRyxHQUFHb0YsV0FBVyxDQUFDVSxLQUFaLENBQWtCclksTUFBcEMsRUFBNENuRixDQUFDLEdBQUcwWCxHQUFoRCxFQUFxRDFYLENBQUMsRUFBdEQsRUFBMEQ7QUFDekQsVUFBSThjLFdBQVcsQ0FBQ1UsS0FBWixDQUFrQnhkLENBQWxCLEVBQXFCb08sSUFBckIsQ0FBMEI3TSxJQUExQixDQUFKLEVBQXFDO0FBQ3BDLGVBQU8sS0FBUDtBQUNBO0FBQ0Q7O0FBRUQsU0FBS3ZCLENBQUMsR0FBRyxDQUFKLEVBQU8wWCxHQUFHLEdBQUdvRixXQUFXLENBQUNTLEtBQVosQ0FBa0JwWSxNQUFwQyxFQUE0Q25GLENBQUMsR0FBRzBYLEdBQWhELEVBQXFEMVgsQ0FBQyxFQUF0RCxFQUEwRDtBQUN6RCxVQUFJOGMsV0FBVyxDQUFDUyxLQUFaLENBQWtCdmQsQ0FBbEIsRUFBcUJvTyxJQUFyQixDQUEwQjdNLElBQTFCLENBQUosRUFBcUM7QUFDcEMsZUFBTyxJQUFQO0FBQ0E7QUFDRDs7QUFFRCxXQUFPLEtBQVA7QUFDQTtBQUVEO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQyxXQUFTeWQsV0FBVCxDQUFxQkUsTUFBckIsRUFBNkI7QUFDNUIsV0FBT0EsTUFBTSxDQUFDOVIsUUFBUCxHQUNMd0ssU0FESyxDQUNLLENBREwsRUFDUXNILE1BQU0sQ0FBQzlSLFFBQVAsR0FBa0JqSSxNQUFsQixHQUEyQixDQURuQyxFQUVMeUwsT0FGSyxDQUVHLFNBRkgsRUFFYyxHQUZkLENBQVA7QUFHQTtBQUVEO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQyxXQUFTb00sTUFBVCxDQUFnQjVNLEdBQWhCLEVBQXFCO0FBQ3BCLFFBQUlBLEdBQUcsWUFBWXVKLEtBQW5CLEVBQTBCO0FBQ3pCLGFBQU92SixHQUFHLENBQUMrTyxLQUFKLElBQWEvTyxHQUFHLENBQUN3TSxPQUF4QjtBQUNBOztBQUNELFdBQU94TSxHQUFQO0FBQ0E7QUFFRDtBQUNEO0FBQ0E7QUFDQTs7O0FBQ0MsV0FBU2dOLE9BQVQsR0FBbUI7QUFDbEJ2QyxXQUFPLENBQUNDLElBQVIsQ0FBYSx1SUFBYjtBQUNBOztBQUVEZ0MsYUFBVyxDQUFDSSxNQUFaLENBQW1CSixXQUFXLENBQUNyQyxJQUFaLEVBQW5CO0FBRUEsU0FBT3FDLFdBQVA7QUFDQTs7QUFFRHhHLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQnNHLEtBQWpCLEM7Ozs7Ozs7Ozs7QUNwUUF2RyxNQUFNLENBQUNDLE9BQVAsR0FBa0IsWUFBTTtBQUN0QixNQUFJLE9BQU93SCxJQUFQLEtBQWdCLFdBQXBCLEVBQWlDO0FBQy9CLFdBQU9BLElBQVA7QUFDRCxHQUZELE1BRU8sSUFBSSxPQUFPNVYsTUFBUCxLQUFrQixXQUF0QixFQUFtQztBQUN4QyxXQUFPQSxNQUFQO0FBQ0QsR0FGTSxNQUVBO0FBQ0wsV0FBT2lYLFFBQVEsQ0FBQyxhQUFELENBQVIsRUFBUDtBQUNEO0FBQ0YsQ0FSZ0IsRUFBakIsQzs7Ozs7Ozs7OztBQ0FBLElBQU1DLE1BQU0sR0FBR2pULG1CQUFPLENBQUMsK0RBQUQsQ0FBdEI7O0FBRUFrSyxNQUFNLENBQUNDLE9BQVAsR0FBaUIsVUFBQytJLEdBQUQsRUFBTTdJLElBQU47QUFBQSxTQUFlLElBQUk0SSxNQUFKLENBQVdDLEdBQVgsRUFBZ0I3SSxJQUFoQixDQUFmO0FBQUEsQ0FBakI7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUFILHFCQUFBLEdBQXdCK0ksTUFBeEI7QUFDQS9JLHVCQUFBLEdBQTBCK0ksTUFBTSxDQUFDRSxRQUFqQyxDLENBQTJDOztBQUMzQ2pKLHFIQUFBO0FBQ0FBLG9JQUFBO0FBQ0FBLG1IQUFBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkEsSUFBTWtKLFVBQVUsR0FBR3BULG1CQUFPLENBQUMsbUZBQUQsQ0FBMUI7O0FBQ0EsSUFBTStMLE9BQU8sR0FBRy9MLG1CQUFPLENBQUMsb0VBQUQsQ0FBdkI7O0FBQ0EsSUFBTTJQLEtBQUssR0FBRzNQLG1CQUFPLENBQUMsa0RBQUQsQ0FBUCxDQUFpQix5QkFBakIsQ0FBZDs7QUFDQSxJQUFNcVQsTUFBTSxHQUFHclQsbUJBQU8sQ0FBQyxzRUFBRCxDQUF0Qjs7QUFDQSxJQUFNc1QsUUFBUSxHQUFHdFQsbUJBQU8sQ0FBQyxrREFBRCxDQUF4Qjs7QUFDQSxJQUFNdVQsT0FBTyxHQUFHdlQsbUJBQU8sQ0FBQyxnREFBRCxDQUF2Qjs7SUFFTWlULE07Ozs7O0FBQ0o7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRSxrQkFBWUMsR0FBWixFQUE0QjtBQUFBOztBQUFBLFFBQVg3SSxJQUFXLHVFQUFKLEVBQUk7O0FBQUE7O0FBQzFCOztBQUVBLFFBQUk2SSxHQUFHLElBQUkscUJBQW9CQSxHQUFwQixDQUFYLEVBQW9DO0FBQ2xDN0ksVUFBSSxHQUFHNkksR0FBUDtBQUNBQSxTQUFHLEdBQUcsSUFBTjtBQUNEOztBQUVELFFBQUlBLEdBQUosRUFBUztBQUNQQSxTQUFHLEdBQUdJLFFBQVEsQ0FBQ0osR0FBRCxDQUFkO0FBQ0E3SSxVQUFJLENBQUNtSixRQUFMLEdBQWdCTixHQUFHLENBQUNPLElBQXBCO0FBQ0FwSixVQUFJLENBQUNxSixNQUFMLEdBQWNSLEdBQUcsQ0FBQ0MsUUFBSixLQUFpQixPQUFqQixJQUE0QkQsR0FBRyxDQUFDQyxRQUFKLEtBQWlCLEtBQTNEO0FBQ0E5SSxVQUFJLENBQUNzSixJQUFMLEdBQVlULEdBQUcsQ0FBQ1MsSUFBaEI7QUFDQSxVQUFJVCxHQUFHLENBQUNVLEtBQVIsRUFBZXZKLElBQUksQ0FBQ3VKLEtBQUwsR0FBYVYsR0FBRyxDQUFDVSxLQUFqQjtBQUNoQixLQU5ELE1BTU8sSUFBSXZKLElBQUksQ0FBQ29KLElBQVQsRUFBZTtBQUNwQnBKLFVBQUksQ0FBQ21KLFFBQUwsR0FBZ0JGLFFBQVEsQ0FBQ2pKLElBQUksQ0FBQ29KLElBQU4sQ0FBUixDQUFvQkEsSUFBcEM7QUFDRDs7QUFFRCxVQUFLQyxNQUFMLEdBQ0UsUUFBUXJKLElBQUksQ0FBQ3FKLE1BQWIsR0FDSXJKLElBQUksQ0FBQ3FKLE1BRFQsR0FFSSxPQUFPcmMsUUFBUCxLQUFvQixXQUFwQixJQUFtQyxhQUFhQSxRQUFRLENBQUM4YixRQUgvRDs7QUFLQSxRQUFJOUksSUFBSSxDQUFDbUosUUFBTCxJQUFpQixDQUFDbkosSUFBSSxDQUFDc0osSUFBM0IsRUFBaUM7QUFDL0I7QUFDQXRKLFVBQUksQ0FBQ3NKLElBQUwsR0FBWSxNQUFLRCxNQUFMLEdBQWMsS0FBZCxHQUFzQixJQUFsQztBQUNEOztBQUVELFVBQUtGLFFBQUwsR0FDRW5KLElBQUksQ0FBQ21KLFFBQUwsS0FDQyxPQUFPbmMsUUFBUCxLQUFvQixXQUFwQixHQUFrQ0EsUUFBUSxDQUFDbWMsUUFBM0MsR0FBc0QsV0FEdkQsQ0FERjtBQUdBLFVBQUtHLElBQUwsR0FDRXRKLElBQUksQ0FBQ3NKLElBQUwsS0FDQyxPQUFPdGMsUUFBUCxLQUFvQixXQUFwQixJQUFtQ0EsUUFBUSxDQUFDc2MsSUFBNUMsR0FDR3RjLFFBQVEsQ0FBQ3NjLElBRFosR0FFRyxNQUFLRCxNQUFMLEdBQ0EsR0FEQSxHQUVBLEVBTEosQ0FERjtBQVFBLFVBQUtOLFVBQUwsR0FBa0IvSSxJQUFJLENBQUMrSSxVQUFMLElBQW1CLENBQUMsU0FBRCxFQUFZLFdBQVosQ0FBckM7QUFDQSxVQUFLUyxVQUFMLEdBQWtCLEVBQWxCO0FBQ0EsVUFBS0MsV0FBTCxHQUFtQixFQUFuQjtBQUNBLFVBQUtDLGFBQUwsR0FBcUIsQ0FBckI7QUFFQSxVQUFLMUosSUFBTCxHQUFZalEsTUFBTSxDQUFDQyxNQUFQLENBQ1Y7QUFDRXZELFVBQUksRUFBRSxZQURSO0FBRUVrZCxXQUFLLEVBQUUsS0FGVDtBQUdFQyxxQkFBZSxFQUFFLEtBSG5CO0FBSUVDLGFBQU8sRUFBRSxJQUpYO0FBS0VDLFdBQUssRUFBRSxJQUxUO0FBTUVDLG9CQUFjLEVBQUUsR0FObEI7QUFPRUMscUJBQWUsRUFBRSxLQVBuQjtBQVFFQyx3QkFBa0IsRUFBRSxJQVJ0QjtBQVNFQyx1QkFBaUIsRUFBRTtBQUNqQkMsaUJBQVMsRUFBRTtBQURNLE9BVHJCO0FBWUVDLHNCQUFnQixFQUFFLEVBWnBCO0FBYUVDLHlCQUFtQixFQUFFO0FBYnZCLEtBRFUsRUFnQlZySyxJQWhCVSxDQUFaO0FBbUJBLFVBQUtBLElBQUwsQ0FBVXZULElBQVYsR0FBaUIsTUFBS3VULElBQUwsQ0FBVXZULElBQVYsQ0FBZTBOLE9BQWYsQ0FBdUIsS0FBdkIsRUFBOEIsRUFBOUIsSUFBb0MsR0FBckQ7O0FBRUEsUUFBSSxPQUFPLE1BQUs2RixJQUFMLENBQVV1SixLQUFqQixLQUEyQixRQUEvQixFQUF5QztBQUN2QyxZQUFLdkosSUFBTCxDQUFVdUosS0FBVixHQUFrQkwsT0FBTyxDQUFDb0IsTUFBUixDQUFlLE1BQUt0SyxJQUFMLENBQVV1SixLQUF6QixDQUFsQjtBQUNELEtBbkV5QixDQXFFMUI7OztBQUNBLFVBQUszZSxFQUFMLEdBQVUsSUFBVjtBQUNBLFVBQUsyZixRQUFMLEdBQWdCLElBQWhCO0FBQ0EsVUFBS0MsWUFBTCxHQUFvQixJQUFwQjtBQUNBLFVBQUtDLFdBQUwsR0FBbUIsSUFBbkIsQ0F6RTBCLENBMkUxQjs7QUFDQSxVQUFLQyxnQkFBTCxHQUF3QixJQUF4Qjs7QUFFQSxRQUFJLE9BQU8vWSxnQkFBUCxLQUE0QixVQUFoQyxFQUE0QztBQUMxQyxVQUFJLE1BQUtxTyxJQUFMLENBQVVxSyxtQkFBZCxFQUFtQztBQUNqQztBQUNBO0FBQ0E7QUFDQTFZLHdCQUFnQixDQUNkLGNBRGMsRUFFZCxZQUFNO0FBQ0osY0FBSSxNQUFLZ1osU0FBVCxFQUFvQjtBQUNsQjtBQUNBLGtCQUFLQSxTQUFMLENBQWV4SSxrQkFBZjs7QUFDQSxrQkFBS3dJLFNBQUwsQ0FBZUMsS0FBZjtBQUNEO0FBQ0YsU0FSYSxFQVNkLEtBVGMsQ0FBaEI7QUFXRDs7QUFDRCxVQUFJLE1BQUt6QixRQUFMLEtBQWtCLFdBQXRCLEVBQW1DO0FBQ2pDLGNBQUswQixvQkFBTCxHQUE0QixZQUFNO0FBQ2hDLGdCQUFLQyxPQUFMLENBQWEsaUJBQWI7QUFDRCxTQUZEOztBQUdBblosd0JBQWdCLENBQUMsU0FBRCxFQUFZLE1BQUtrWixvQkFBakIsRUFBdUMsS0FBdkMsQ0FBaEI7QUFDRDtBQUNGOztBQUVELFVBQUtFLElBQUw7O0FBdkcwQjtBQXdHM0I7QUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7V0FDRSx5QkFBZ0JqZ0IsSUFBaEIsRUFBc0I7QUFDcEJ3YSxXQUFLLENBQUMseUJBQUQsRUFBNEJ4YSxJQUE1QixDQUFMO0FBQ0EsVUFBTXllLEtBQUssR0FBR3lCLEtBQUssQ0FBQyxLQUFLaEwsSUFBTCxDQUFVdUosS0FBWCxDQUFuQixDQUZvQixDQUlwQjs7QUFDQUEsV0FBSyxDQUFDMEIsR0FBTixHQUFZakMsTUFBTSxDQUFDRixRQUFuQixDQUxvQixDQU9wQjs7QUFDQVMsV0FBSyxDQUFDb0IsU0FBTixHQUFrQjdmLElBQWxCLENBUm9CLENBVXBCOztBQUNBLFVBQUksS0FBS0YsRUFBVCxFQUFhMmUsS0FBSyxDQUFDMkIsR0FBTixHQUFZLEtBQUt0Z0IsRUFBakI7QUFFYixVQUFNb1YsSUFBSSxHQUFHalEsTUFBTSxDQUFDQyxNQUFQLENBQ1gsRUFEVyxFQUVYLEtBQUtnUSxJQUFMLENBQVVvSyxnQkFBVixDQUEyQnRmLElBQTNCLENBRlcsRUFHWCxLQUFLa1YsSUFITSxFQUlYO0FBQ0V1SixhQUFLLEVBQUxBLEtBREY7QUFFRTRCLGNBQU0sRUFBRSxJQUZWO0FBR0VoQyxnQkFBUSxFQUFFLEtBQUtBLFFBSGpCO0FBSUVFLGNBQU0sRUFBRSxLQUFLQSxNQUpmO0FBS0VDLFlBQUksRUFBRSxLQUFLQTtBQUxiLE9BSlcsQ0FBYjtBQWFBaEUsV0FBSyxDQUFDLGFBQUQsRUFBZ0J0RixJQUFoQixDQUFMO0FBRUEsYUFBTyxJQUFJK0ksVUFBVSxDQUFDamUsSUFBRCxDQUFkLENBQXFCa1YsSUFBckIsQ0FBUDtBQUNEO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7OztXQUNFLGdCQUFPO0FBQUE7O0FBQ0wsVUFBSTJLLFNBQUo7O0FBQ0EsVUFDRSxLQUFLM0ssSUFBTCxDQUFVZ0ssZUFBVixJQUNBcEIsTUFBTSxDQUFDd0MscUJBRFAsSUFFQSxLQUFLckMsVUFBTCxDQUFnQmxTLE9BQWhCLENBQXdCLFdBQXhCLE1BQXlDLENBQUMsQ0FINUMsRUFJRTtBQUNBOFQsaUJBQVMsR0FBRyxXQUFaO0FBQ0QsT0FORCxNQU1PLElBQUksTUFBTSxLQUFLNUIsVUFBTCxDQUFnQnJhLE1BQTFCLEVBQWtDO0FBQ3ZDO0FBQ0E5SCxrQkFBVSxDQUFDLFlBQU07QUFDZixnQkFBSSxDQUFDeU4sSUFBTCxDQUFVLE9BQVYsRUFBbUIseUJBQW5CO0FBQ0QsU0FGUyxFQUVQLENBRk8sQ0FBVjtBQUdBO0FBQ0QsT0FOTSxNQU1BO0FBQ0xzVyxpQkFBUyxHQUFHLEtBQUs1QixVQUFMLENBQWdCLENBQWhCLENBQVo7QUFDRDs7QUFDRCxXQUFLUyxVQUFMLEdBQWtCLFNBQWxCLENBakJLLENBbUJMOztBQUNBLFVBQUk7QUFDRm1CLGlCQUFTLEdBQUcsS0FBS1UsZUFBTCxDQUFxQlYsU0FBckIsQ0FBWjtBQUNELE9BRkQsQ0FFRSxPQUFPaFksQ0FBUCxFQUFVO0FBQ1YyUyxhQUFLLENBQUMsb0NBQUQsRUFBdUMzUyxDQUF2QyxDQUFMO0FBQ0EsYUFBS29XLFVBQUwsQ0FBZ0J1QyxLQUFoQjtBQUNBLGFBQUtQLElBQUw7QUFDQTtBQUNEOztBQUVESixlQUFTLENBQUNJLElBQVY7QUFDQSxXQUFLUSxZQUFMLENBQWtCWixTQUFsQjtBQUNEO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7OztXQUNFLHNCQUFhQSxTQUFiLEVBQXdCO0FBQUE7O0FBQ3RCckYsV0FBSyxDQUFDLHNCQUFELEVBQXlCcUYsU0FBUyxDQUFDN2YsSUFBbkMsQ0FBTDs7QUFFQSxVQUFJLEtBQUs2ZixTQUFULEVBQW9CO0FBQ2xCckYsYUFBSyxDQUFDLGdDQUFELEVBQW1DLEtBQUtxRixTQUFMLENBQWU3ZixJQUFsRCxDQUFMO0FBQ0EsYUFBSzZmLFNBQUwsQ0FBZXhJLGtCQUFmO0FBQ0QsT0FOcUIsQ0FRdEI7OztBQUNBLFdBQUt3SSxTQUFMLEdBQWlCQSxTQUFqQixDQVRzQixDQVd0Qjs7QUFDQUEsZUFBUyxDQUNOL0ksRUFESCxDQUNNLE9BRE4sRUFDZSxLQUFLNEosT0FBTCxDQUFheGlCLElBQWIsQ0FBa0IsSUFBbEIsQ0FEZixFQUVHNFksRUFGSCxDQUVNLFFBRk4sRUFFZ0IsS0FBSzZKLFFBQUwsQ0FBY3ppQixJQUFkLENBQW1CLElBQW5CLENBRmhCLEVBR0c0WSxFQUhILENBR00sT0FITixFQUdlLEtBQUs4SixPQUFMLENBQWExaUIsSUFBYixDQUFrQixJQUFsQixDQUhmLEVBSUc0WSxFQUpILENBSU0sT0FKTixFQUllLFlBQU07QUFDakIsY0FBSSxDQUFDa0osT0FBTCxDQUFhLGlCQUFiO0FBQ0QsT0FOSDtBQU9EO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O1dBQ0UsZUFBTWhnQixJQUFOLEVBQVk7QUFBQTs7QUFDVndhLFdBQUssQ0FBQyx3QkFBRCxFQUEyQnhhLElBQTNCLENBQUw7QUFDQSxVQUFJNmYsU0FBUyxHQUFHLEtBQUtVLGVBQUwsQ0FBcUJ2Z0IsSUFBckIsRUFBMkI7QUFBRTZnQixhQUFLLEVBQUU7QUFBVCxPQUEzQixDQUFoQjtBQUNBLFVBQUlDLE1BQU0sR0FBRyxLQUFiO0FBRUFoRCxZQUFNLENBQUN3QyxxQkFBUCxHQUErQixLQUEvQjs7QUFFQSxVQUFNUyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFDNUIsWUFBSUQsTUFBSixFQUFZO0FBRVp0RyxhQUFLLENBQUMsNkJBQUQsRUFBZ0N4YSxJQUFoQyxDQUFMO0FBQ0E2ZixpQkFBUyxDQUFDbUIsSUFBVixDQUFlLENBQUM7QUFBRTlTLGNBQUksRUFBRSxNQUFSO0FBQWdCK1MsY0FBSSxFQUFFO0FBQXRCLFNBQUQsQ0FBZjtBQUNBcEIsaUJBQVMsQ0FBQzNJLElBQVYsQ0FBZSxRQUFmLEVBQXlCLFVBQUFnSyxHQUFHLEVBQUk7QUFDOUIsY0FBSUosTUFBSixFQUFZOztBQUNaLGNBQUksV0FBV0ksR0FBRyxDQUFDaFQsSUFBZixJQUF1QixZQUFZZ1QsR0FBRyxDQUFDRCxJQUEzQyxFQUFpRDtBQUMvQ3pHLGlCQUFLLENBQUMsMkJBQUQsRUFBOEJ4YSxJQUE5QixDQUFMO0FBQ0Esa0JBQUksQ0FBQ21oQixTQUFMLEdBQWlCLElBQWpCOztBQUNBLGtCQUFJLENBQUM1WCxJQUFMLENBQVUsV0FBVixFQUF1QnNXLFNBQXZCOztBQUNBLGdCQUFJLENBQUNBLFNBQUwsRUFBZ0I7QUFDaEIvQixrQkFBTSxDQUFDd0MscUJBQVAsR0FBK0IsZ0JBQWdCVCxTQUFTLENBQUM3ZixJQUF6RDtBQUVBd2EsaUJBQUssQ0FBQyxnQ0FBRCxFQUFtQyxNQUFJLENBQUNxRixTQUFMLENBQWU3ZixJQUFsRCxDQUFMOztBQUNBLGtCQUFJLENBQUM2ZixTQUFMLENBQWV0bUIsS0FBZixDQUFxQixZQUFNO0FBQ3pCLGtCQUFJdW5CLE1BQUosRUFBWTtBQUNaLGtCQUFJLGFBQWEsTUFBSSxDQUFDcEMsVUFBdEIsRUFBa0M7QUFDbENsRSxtQkFBSyxDQUFDLCtDQUFELENBQUw7QUFFQTRHLHFCQUFPOztBQUVQLG9CQUFJLENBQUNYLFlBQUwsQ0FBa0JaLFNBQWxCOztBQUNBQSx1QkFBUyxDQUFDbUIsSUFBVixDQUFlLENBQUM7QUFBRTlTLG9CQUFJLEVBQUU7QUFBUixlQUFELENBQWY7O0FBQ0Esb0JBQUksQ0FBQzNFLElBQUwsQ0FBVSxTQUFWLEVBQXFCc1csU0FBckI7O0FBQ0FBLHVCQUFTLEdBQUcsSUFBWjtBQUNBLG9CQUFJLENBQUNzQixTQUFMLEdBQWlCLEtBQWpCOztBQUNBLG9CQUFJLENBQUNFLEtBQUw7QUFDRCxhQWJEO0FBY0QsV0F0QkQsTUFzQk87QUFDTDdHLGlCQUFLLENBQUMsNkJBQUQsRUFBZ0N4YSxJQUFoQyxDQUFMO0FBQ0EsZ0JBQU1zaEIsR0FBRyxHQUFHLElBQUlsSixLQUFKLENBQVUsYUFBVixDQUFaO0FBQ0FrSixlQUFHLENBQUN6QixTQUFKLEdBQWdCQSxTQUFTLENBQUM3ZixJQUExQjs7QUFDQSxrQkFBSSxDQUFDdUosSUFBTCxDQUFVLGNBQVYsRUFBMEIrWCxHQUExQjtBQUNEO0FBQ0YsU0E5QkQ7QUErQkQsT0FwQ0Q7O0FBc0NBLGVBQVNDLGVBQVQsR0FBMkI7QUFDekIsWUFBSVQsTUFBSixFQUFZLE9BRGEsQ0FHekI7O0FBQ0FBLGNBQU0sR0FBRyxJQUFUO0FBRUFNLGVBQU87QUFFUHZCLGlCQUFTLENBQUNDLEtBQVY7QUFDQUQsaUJBQVMsR0FBRyxJQUFaO0FBQ0QsT0F2RFMsQ0F5RFY7OztBQUNBLFVBQU0yQixPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFBRixHQUFHLEVBQUk7QUFDckIsWUFBTXhHLEtBQUssR0FBRyxJQUFJMUMsS0FBSixDQUFVLGtCQUFrQmtKLEdBQTVCLENBQWQ7QUFDQXhHLGFBQUssQ0FBQytFLFNBQU4sR0FBa0JBLFNBQVMsQ0FBQzdmLElBQTVCO0FBRUF1aEIsdUJBQWU7QUFFZi9HLGFBQUssQ0FBQyxrREFBRCxFQUFxRHhhLElBQXJELEVBQTJEc2hCLEdBQTNELENBQUw7O0FBRUEsY0FBSSxDQUFDL1gsSUFBTCxDQUFVLGNBQVYsRUFBMEJ1UixLQUExQjtBQUNELE9BVEQ7O0FBV0EsZUFBUzJHLGdCQUFULEdBQTRCO0FBQzFCRCxlQUFPLENBQUMsa0JBQUQsQ0FBUDtBQUNELE9BdkVTLENBeUVWOzs7QUFDQSxlQUFTRSxPQUFULEdBQW1CO0FBQ2pCRixlQUFPLENBQUMsZUFBRCxDQUFQO0FBQ0QsT0E1RVMsQ0E4RVY7OztBQUNBLGVBQVNHLFNBQVQsQ0FBbUJDLEVBQW5CLEVBQXVCO0FBQ3JCLFlBQUkvQixTQUFTLElBQUkrQixFQUFFLENBQUM1aEIsSUFBSCxLQUFZNmYsU0FBUyxDQUFDN2YsSUFBdkMsRUFBNkM7QUFDM0N3YSxlQUFLLENBQUMsNEJBQUQsRUFBK0JvSCxFQUFFLENBQUM1aEIsSUFBbEMsRUFBd0M2ZixTQUFTLENBQUM3ZixJQUFsRCxDQUFMO0FBQ0F1aEIseUJBQWU7QUFDaEI7QUFDRixPQXBGUyxDQXNGVjs7O0FBQ0EsVUFBTUgsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUNwQnZCLGlCQUFTLENBQUN6SSxjQUFWLENBQXlCLE1BQXpCLEVBQWlDMkosZUFBakM7QUFDQWxCLGlCQUFTLENBQUN6SSxjQUFWLENBQXlCLE9BQXpCLEVBQWtDb0ssT0FBbEM7QUFDQTNCLGlCQUFTLENBQUN6SSxjQUFWLENBQXlCLE9BQXpCLEVBQWtDcUssZ0JBQWxDOztBQUNBLGNBQUksQ0FBQ3JLLGNBQUwsQ0FBb0IsT0FBcEIsRUFBNkJzSyxPQUE3Qjs7QUFDQSxjQUFJLENBQUN0SyxjQUFMLENBQW9CLFdBQXBCLEVBQWlDdUssU0FBakM7QUFDRCxPQU5EOztBQVFBOUIsZUFBUyxDQUFDM0ksSUFBVixDQUFlLE1BQWYsRUFBdUI2SixlQUF2QjtBQUNBbEIsZUFBUyxDQUFDM0ksSUFBVixDQUFlLE9BQWYsRUFBd0JzSyxPQUF4QjtBQUNBM0IsZUFBUyxDQUFDM0ksSUFBVixDQUFlLE9BQWYsRUFBd0J1SyxnQkFBeEI7QUFFQSxXQUFLdkssSUFBTCxDQUFVLE9BQVYsRUFBbUJ3SyxPQUFuQjtBQUNBLFdBQUt4SyxJQUFMLENBQVUsV0FBVixFQUF1QnlLLFNBQXZCO0FBRUE5QixlQUFTLENBQUNJLElBQVY7QUFDRDtBQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7Ozs7V0FDRSxrQkFBUztBQUNQekYsV0FBSyxDQUFDLGFBQUQsQ0FBTDtBQUNBLFdBQUtrRSxVQUFMLEdBQWtCLE1BQWxCO0FBQ0FaLFlBQU0sQ0FBQ3dDLHFCQUFQLEdBQStCLGdCQUFnQixLQUFLVCxTQUFMLENBQWU3ZixJQUE5RDtBQUNBLFdBQUt1SixJQUFMLENBQVUsTUFBVjtBQUNBLFdBQUs4WCxLQUFMLEdBTE8sQ0FPUDtBQUNBOztBQUNBLFVBQ0UsV0FBVyxLQUFLM0MsVUFBaEIsSUFDQSxLQUFLeEosSUFBTCxDQUFVNkosT0FEVixJQUVBLEtBQUtjLFNBQUwsQ0FBZXRtQixLQUhqQixFQUlFO0FBQ0FpaEIsYUFBSyxDQUFDLHlCQUFELENBQUw7QUFDQSxZQUFJL2IsQ0FBQyxHQUFHLENBQVI7QUFDQSxZQUFNc1IsQ0FBQyxHQUFHLEtBQUswUCxRQUFMLENBQWM3YixNQUF4Qjs7QUFDQSxlQUFPbkYsQ0FBQyxHQUFHc1IsQ0FBWCxFQUFjdFIsQ0FBQyxFQUFmLEVBQW1CO0FBQ2pCLGVBQUtvaUIsS0FBTCxDQUFXLEtBQUtwQixRQUFMLENBQWNoaEIsQ0FBZCxDQUFYO0FBQ0Q7QUFDRjtBQUNGO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7OztXQUNFLGtCQUFTb2pCLE1BQVQsRUFBaUI7QUFDZixVQUNFLGNBQWMsS0FBS25ELFVBQW5CLElBQ0EsV0FBVyxLQUFLQSxVQURoQixJQUVBLGNBQWMsS0FBS0EsVUFIckIsRUFJRTtBQUNBbEUsYUFBSyxDQUFDLHNDQUFELEVBQXlDcUgsTUFBTSxDQUFDM1QsSUFBaEQsRUFBc0QyVCxNQUFNLENBQUNaLElBQTdELENBQUw7QUFFQSxhQUFLMVgsSUFBTCxDQUFVLFFBQVYsRUFBb0JzWSxNQUFwQixFQUhBLENBS0E7O0FBQ0EsYUFBS3RZLElBQUwsQ0FBVSxXQUFWOztBQUVBLGdCQUFRc1ksTUFBTSxDQUFDM1QsSUFBZjtBQUNFLGVBQUssTUFBTDtBQUNFLGlCQUFLNFQsV0FBTCxDQUFpQnpKLElBQUksQ0FBQ04sS0FBTCxDQUFXOEosTUFBTSxDQUFDWixJQUFsQixDQUFqQjtBQUNBOztBQUVGLGVBQUssTUFBTDtBQUNFLGlCQUFLYyxnQkFBTDtBQUNBLGlCQUFLQyxVQUFMLENBQWdCLE1BQWhCO0FBQ0EsaUJBQUt6WSxJQUFMLENBQVUsTUFBVjtBQUNBOztBQUVGLGVBQUssT0FBTDtBQUNFLGdCQUFNK1gsR0FBRyxHQUFHLElBQUlsSixLQUFKLENBQVUsY0FBVixDQUFaO0FBQ0FrSixlQUFHLENBQUNXLElBQUosR0FBV0osTUFBTSxDQUFDWixJQUFsQjtBQUNBLGlCQUFLTCxPQUFMLENBQWFVLEdBQWI7QUFDQTs7QUFFRixlQUFLLFNBQUw7QUFDRSxpQkFBSy9YLElBQUwsQ0FBVSxNQUFWLEVBQWtCc1ksTUFBTSxDQUFDWixJQUF6QjtBQUNBLGlCQUFLMVgsSUFBTCxDQUFVLFNBQVYsRUFBcUJzWSxNQUFNLENBQUNaLElBQTVCO0FBQ0E7QUFwQko7QUFzQkQsT0FsQ0QsTUFrQ087QUFDTHpHLGFBQUssQ0FBQyw2Q0FBRCxFQUFnRCxLQUFLa0UsVUFBckQsQ0FBTDtBQUNEO0FBQ0Y7QUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7V0FDRSxxQkFBWXVDLElBQVosRUFBa0I7QUFDaEIsV0FBSzFYLElBQUwsQ0FBVSxXQUFWLEVBQXVCMFgsSUFBdkI7QUFDQSxXQUFLbmhCLEVBQUwsR0FBVW1oQixJQUFJLENBQUNiLEdBQWY7QUFDQSxXQUFLUCxTQUFMLENBQWVwQixLQUFmLENBQXFCMkIsR0FBckIsR0FBMkJhLElBQUksQ0FBQ2IsR0FBaEM7QUFDQSxXQUFLWCxRQUFMLEdBQWdCLEtBQUt5QyxjQUFMLENBQW9CakIsSUFBSSxDQUFDeEIsUUFBekIsQ0FBaEI7QUFDQSxXQUFLQyxZQUFMLEdBQW9CdUIsSUFBSSxDQUFDdkIsWUFBekI7QUFDQSxXQUFLQyxXQUFMLEdBQW1Cc0IsSUFBSSxDQUFDdEIsV0FBeEI7QUFDQSxXQUFLd0MsTUFBTCxHQVBnQixDQVFoQjs7QUFDQSxVQUFJLGFBQWEsS0FBS3pELFVBQXRCLEVBQWtDO0FBQ2xDLFdBQUtxRCxnQkFBTDtBQUNEO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7OztXQUNFLDRCQUFtQjtBQUFBOztBQUNqQjFXLGtCQUFZLENBQUMsS0FBS3VVLGdCQUFOLENBQVo7QUFDQSxXQUFLQSxnQkFBTCxHQUF3QjlqQixVQUFVLENBQUMsWUFBTTtBQUN2QyxjQUFJLENBQUNra0IsT0FBTCxDQUFhLGNBQWI7QUFDRCxPQUZpQyxFQUUvQixLQUFLTixZQUFMLEdBQW9CLEtBQUtDLFdBRk0sQ0FBbEM7O0FBR0EsVUFBSSxLQUFLekssSUFBTCxDQUFVa04sU0FBZCxFQUF5QjtBQUN2QixhQUFLeEMsZ0JBQUwsQ0FBc0J5QyxLQUF0QjtBQUNEO0FBQ0Y7QUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBOzs7O1dBQ0UsbUJBQVU7QUFDUixXQUFLMUQsV0FBTCxDQUFpQm5ILE1BQWpCLENBQXdCLENBQXhCLEVBQTJCLEtBQUtvSCxhQUFoQyxFQURRLENBR1I7QUFDQTtBQUNBOztBQUNBLFdBQUtBLGFBQUwsR0FBcUIsQ0FBckI7O0FBRUEsVUFBSSxNQUFNLEtBQUtELFdBQUwsQ0FBaUIvYSxNQUEzQixFQUFtQztBQUNqQyxhQUFLMkYsSUFBTCxDQUFVLE9BQVY7QUFDRCxPQUZELE1BRU87QUFDTCxhQUFLOFgsS0FBTDtBQUNEO0FBQ0Y7QUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBOzs7O1dBQ0UsaUJBQVE7QUFDTixVQUNFLGFBQWEsS0FBSzNDLFVBQWxCLElBQ0EsS0FBS21CLFNBQUwsQ0FBZXlDLFFBRGYsSUFFQSxDQUFDLEtBQUtuQixTQUZOLElBR0EsS0FBS3hDLFdBQUwsQ0FBaUIvYSxNQUpuQixFQUtFO0FBQ0E0VyxhQUFLLENBQUMsK0JBQUQsRUFBa0MsS0FBS21FLFdBQUwsQ0FBaUIvYSxNQUFuRCxDQUFMO0FBQ0EsYUFBS2ljLFNBQUwsQ0FBZW1CLElBQWYsQ0FBb0IsS0FBS3JDLFdBQXpCLEVBRkEsQ0FHQTtBQUNBOztBQUNBLGFBQUtDLGFBQUwsR0FBcUIsS0FBS0QsV0FBTCxDQUFpQi9hLE1BQXRDO0FBQ0EsYUFBSzJGLElBQUwsQ0FBVSxPQUFWO0FBQ0Q7QUFDRjtBQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztXQUNFLGVBQU0yWCxHQUFOLEVBQVdwSixPQUFYLEVBQW9CZCxFQUFwQixFQUF3QjtBQUN0QixXQUFLZ0wsVUFBTCxDQUFnQixTQUFoQixFQUEyQmQsR0FBM0IsRUFBZ0NwSixPQUFoQyxFQUF5Q2QsRUFBekM7QUFDQSxhQUFPLElBQVA7QUFDRDs7O1dBRUQsY0FBS2tLLEdBQUwsRUFBVXBKLE9BQVYsRUFBbUJkLEVBQW5CLEVBQXVCO0FBQ3JCLFdBQUtnTCxVQUFMLENBQWdCLFNBQWhCLEVBQTJCZCxHQUEzQixFQUFnQ3BKLE9BQWhDLEVBQXlDZCxFQUF6QztBQUNBLGFBQU8sSUFBUDtBQUNEO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O1dBQ0Usb0JBQVc5SSxJQUFYLEVBQWlCK1MsSUFBakIsRUFBdUJuSixPQUF2QixFQUFnQ2QsRUFBaEMsRUFBb0M7QUFDbEMsVUFBSSxlQUFlLE9BQU9pSyxJQUExQixFQUFnQztBQUM5QmpLLFVBQUUsR0FBR2lLLElBQUw7QUFDQUEsWUFBSSxHQUFHemIsU0FBUDtBQUNEOztBQUVELFVBQUksZUFBZSxPQUFPc1MsT0FBMUIsRUFBbUM7QUFDakNkLFVBQUUsR0FBR2MsT0FBTDtBQUNBQSxlQUFPLEdBQUcsSUFBVjtBQUNEOztBQUVELFVBQUksY0FBYyxLQUFLNEcsVUFBbkIsSUFBaUMsYUFBYSxLQUFLQSxVQUF2RCxFQUFtRTtBQUNqRTtBQUNEOztBQUVENUcsYUFBTyxHQUFHQSxPQUFPLElBQUksRUFBckI7QUFDQUEsYUFBTyxDQUFDeUssUUFBUixHQUFtQixVQUFVekssT0FBTyxDQUFDeUssUUFBckM7QUFFQSxVQUFNVixNQUFNLEdBQUc7QUFDYjNULFlBQUksRUFBRUEsSUFETztBQUViK1MsWUFBSSxFQUFFQSxJQUZPO0FBR2JuSixlQUFPLEVBQUVBO0FBSEksT0FBZjtBQUtBLFdBQUt2TyxJQUFMLENBQVUsY0FBVixFQUEwQnNZLE1BQTFCO0FBQ0EsV0FBS2xELFdBQUwsQ0FBaUI5WixJQUFqQixDQUFzQmdkLE1BQXRCO0FBQ0EsVUFBSTdLLEVBQUosRUFBUSxLQUFLRSxJQUFMLENBQVUsT0FBVixFQUFtQkYsRUFBbkI7QUFDUixXQUFLcUssS0FBTDtBQUNEO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7OztXQUNFLGlCQUFRO0FBQUE7O0FBQ04sVUFBTXZCLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFDbEIsY0FBSSxDQUFDRSxPQUFMLENBQWEsY0FBYjs7QUFDQXhGLGFBQUssQ0FBQyw2Q0FBRCxDQUFMOztBQUNBLGNBQUksQ0FBQ3FGLFNBQUwsQ0FBZUMsS0FBZjtBQUNELE9BSkQ7O0FBTUEsVUFBTTBDLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBTTtBQUM1QixjQUFJLENBQUNwTCxjQUFMLENBQW9CLFNBQXBCLEVBQStCb0wsZUFBL0I7O0FBQ0EsY0FBSSxDQUFDcEwsY0FBTCxDQUFvQixjQUFwQixFQUFvQ29MLGVBQXBDOztBQUNBMUMsYUFBSztBQUNOLE9BSkQ7O0FBTUEsVUFBTTJDLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTTtBQUMzQjtBQUNBLGNBQUksQ0FBQ3ZMLElBQUwsQ0FBVSxTQUFWLEVBQXFCc0wsZUFBckI7O0FBQ0EsY0FBSSxDQUFDdEwsSUFBTCxDQUFVLGNBQVYsRUFBMEJzTCxlQUExQjtBQUNELE9BSkQ7O0FBTUEsVUFBSSxjQUFjLEtBQUs5RCxVQUFuQixJQUFpQyxXQUFXLEtBQUtBLFVBQXJELEVBQWlFO0FBQy9ELGFBQUtBLFVBQUwsR0FBa0IsU0FBbEI7O0FBRUEsWUFBSSxLQUFLQyxXQUFMLENBQWlCL2EsTUFBckIsRUFBNkI7QUFDM0IsZUFBS3NULElBQUwsQ0FBVSxPQUFWLEVBQW1CLFlBQU07QUFDdkIsZ0JBQUksTUFBSSxDQUFDaUssU0FBVCxFQUFvQjtBQUNsQnNCLDRCQUFjO0FBQ2YsYUFGRCxNQUVPO0FBQ0wzQyxtQkFBSztBQUNOO0FBQ0YsV0FORDtBQU9ELFNBUkQsTUFRTyxJQUFJLEtBQUtxQixTQUFULEVBQW9CO0FBQ3pCc0Isd0JBQWM7QUFDZixTQUZNLE1BRUE7QUFDTDNDLGVBQUs7QUFDTjtBQUNGOztBQUVELGFBQU8sSUFBUDtBQUNEO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7OztXQUNFLGlCQUFRd0IsR0FBUixFQUFhO0FBQ1g5RyxXQUFLLENBQUMsaUJBQUQsRUFBb0I4RyxHQUFwQixDQUFMO0FBQ0F4RCxZQUFNLENBQUN3QyxxQkFBUCxHQUErQixLQUEvQjtBQUNBLFdBQUsvVyxJQUFMLENBQVUsT0FBVixFQUFtQitYLEdBQW5CO0FBQ0EsV0FBS3RCLE9BQUwsQ0FBYSxpQkFBYixFQUFnQ3NCLEdBQWhDO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBOzs7O1dBQ0UsaUJBQVFvQixNQUFSLEVBQWdCQyxJQUFoQixFQUFzQjtBQUNwQixVQUNFLGNBQWMsS0FBS2pFLFVBQW5CLElBQ0EsV0FBVyxLQUFLQSxVQURoQixJQUVBLGNBQWMsS0FBS0EsVUFIckIsRUFJRTtBQUNBbEUsYUFBSyxDQUFDLGdDQUFELEVBQW1Da0ksTUFBbkMsQ0FBTCxDQURBLENBR0E7O0FBQ0FyWCxvQkFBWSxDQUFDLEtBQUt1WCxpQkFBTixDQUFaO0FBQ0F2WCxvQkFBWSxDQUFDLEtBQUt1VSxnQkFBTixDQUFaLENBTEEsQ0FPQTs7QUFDQSxhQUFLQyxTQUFMLENBQWV4SSxrQkFBZixDQUFrQyxPQUFsQyxFQVJBLENBVUE7O0FBQ0EsYUFBS3dJLFNBQUwsQ0FBZUMsS0FBZixHQVhBLENBYUE7O0FBQ0EsYUFBS0QsU0FBTCxDQUFleEksa0JBQWY7O0FBRUEsWUFBSSxPQUFPQyxtQkFBUCxLQUErQixVQUFuQyxFQUErQztBQUM3Q0EsNkJBQW1CLENBQUMsU0FBRCxFQUFZLEtBQUt5SSxvQkFBakIsRUFBdUMsS0FBdkMsQ0FBbkI7QUFDRCxTQWxCRCxDQW9CQTs7O0FBQ0EsYUFBS3JCLFVBQUwsR0FBa0IsUUFBbEIsQ0FyQkEsQ0F1QkE7O0FBQ0EsYUFBSzVlLEVBQUwsR0FBVSxJQUFWLENBeEJBLENBMEJBOztBQUNBLGFBQUt5SixJQUFMLENBQVUsT0FBVixFQUFtQm1aLE1BQW5CLEVBQTJCQyxJQUEzQixFQTNCQSxDQTZCQTtBQUNBOztBQUNBLGFBQUtoRSxXQUFMLEdBQW1CLEVBQW5CO0FBQ0EsYUFBS0MsYUFBTCxHQUFxQixDQUFyQjtBQUNEO0FBQ0Y7QUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztXQUNFLHdCQUFlYSxRQUFmLEVBQXlCO0FBQ3ZCLFVBQU1vRCxnQkFBZ0IsR0FBRyxFQUF6QjtBQUNBLFVBQUlwa0IsQ0FBQyxHQUFHLENBQVI7QUFDQSxVQUFNb1MsQ0FBQyxHQUFHNE8sUUFBUSxDQUFDN2IsTUFBbkI7O0FBQ0EsYUFBT25GLENBQUMsR0FBR29TLENBQVgsRUFBY3BTLENBQUMsRUFBZixFQUFtQjtBQUNqQixZQUFJLENBQUMsS0FBS3dmLFVBQUwsQ0FBZ0JsUyxPQUFoQixDQUF3QjBULFFBQVEsQ0FBQ2hoQixDQUFELENBQWhDLENBQUwsRUFDRW9rQixnQkFBZ0IsQ0FBQ2hlLElBQWpCLENBQXNCNGEsUUFBUSxDQUFDaGhCLENBQUQsQ0FBOUI7QUFDSDs7QUFDRCxhQUFPb2tCLGdCQUFQO0FBQ0Q7Ozs7RUEzb0JrQmpNLE87O0FBOG9CckJrSCxNQUFNLENBQUN3QyxxQkFBUCxHQUErQixLQUEvQjtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUF4QyxNQUFNLENBQUNFLFFBQVAsR0FBa0JFLE1BQU0sQ0FBQ0YsUUFBekIsQyxDQUFtQzs7QUFFbkMsU0FBU2tDLEtBQVQsQ0FBZXZVLEdBQWYsRUFBb0I7QUFDbEIsTUFBTXZCLENBQUMsR0FBRyxFQUFWOztBQUNBLE9BQUssSUFBSTNMLENBQVQsSUFBY2tOLEdBQWQsRUFBbUI7QUFDakIsUUFBSUEsR0FBRyxDQUFDTSxjQUFKLENBQW1CeE4sQ0FBbkIsQ0FBSixFQUEyQjtBQUN6QjJMLE9BQUMsQ0FBQzNMLENBQUQsQ0FBRCxHQUFPa04sR0FBRyxDQUFDbE4sQ0FBRCxDQUFWO0FBQ0Q7QUFDRjs7QUFDRCxTQUFPMkwsQ0FBUDtBQUNEOztBQUVEMkssTUFBTSxDQUFDQyxPQUFQLEdBQWlCOEksTUFBakIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6cUJBLElBQU1JLE1BQU0sR0FBR3JULG1CQUFPLENBQUMsc0VBQUQsQ0FBdEI7O0FBQ0EsSUFBTStMLE9BQU8sR0FBRy9MLG1CQUFPLENBQUMsb0VBQUQsQ0FBdkI7O0FBQ0EsSUFBTTJQLEtBQUssR0FBRzNQLG1CQUFPLENBQUMsa0RBQUQsQ0FBUCxDQUFpQiw0QkFBakIsQ0FBZDs7SUFFTWlZLFM7Ozs7O0FBQ0o7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0UscUJBQVk1TixJQUFaLEVBQWtCO0FBQUE7O0FBQUE7O0FBQ2hCO0FBRUEsVUFBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsVUFBS3VKLEtBQUwsR0FBYXZKLElBQUksQ0FBQ3VKLEtBQWxCO0FBQ0EsVUFBS0MsVUFBTCxHQUFrQixFQUFsQjtBQUNBLFVBQUsyQixNQUFMLEdBQWNuTCxJQUFJLENBQUNtTCxNQUFuQjtBQU5nQjtBQU9qQjtBQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztXQUNFLGlCQUFRYSxHQUFSLEVBQWF5QixJQUFiLEVBQW1CO0FBQ2pCLFVBQU1yQixHQUFHLEdBQUcsSUFBSWxKLEtBQUosQ0FBVThJLEdBQVYsQ0FBWjtBQUNBSSxTQUFHLENBQUNwVCxJQUFKLEdBQVcsZ0JBQVg7QUFDQW9ULFNBQUcsQ0FBQ3lCLFdBQUosR0FBa0JKLElBQWxCO0FBQ0EsV0FBS3BaLElBQUwsQ0FBVSxPQUFWLEVBQW1CK1gsR0FBbkI7QUFDQSxhQUFPLElBQVA7QUFDRDtBQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7Ozs7V0FDRSxnQkFBTztBQUNMLFVBQUksYUFBYSxLQUFLNUMsVUFBbEIsSUFBZ0MsT0FBTyxLQUFLQSxVQUFoRCxFQUE0RDtBQUMxRCxhQUFLQSxVQUFMLEdBQWtCLFNBQWxCO0FBQ0EsYUFBS3NFLE1BQUw7QUFDRDs7QUFFRCxhQUFPLElBQVA7QUFDRDtBQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7Ozs7V0FDRSxpQkFBUTtBQUNOLFVBQUksY0FBYyxLQUFLdEUsVUFBbkIsSUFBaUMsV0FBVyxLQUFLQSxVQUFyRCxFQUFpRTtBQUMvRCxhQUFLdUUsT0FBTDtBQUNBLGFBQUtqRCxPQUFMO0FBQ0Q7O0FBRUQsYUFBTyxJQUFQO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7V0FDRSxjQUFLa0QsT0FBTCxFQUFjO0FBQ1osVUFBSSxXQUFXLEtBQUt4RSxVQUFwQixFQUFnQztBQUM5QixhQUFLeUUsS0FBTCxDQUFXRCxPQUFYO0FBQ0QsT0FGRCxNQUVPO0FBQ0w7QUFDQTFJLGFBQUssQ0FBQywyQ0FBRCxDQUFMO0FBQ0Q7QUFDRjtBQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7Ozs7V0FDRSxrQkFBUztBQUNQLFdBQUtrRSxVQUFMLEdBQWtCLE1BQWxCO0FBQ0EsV0FBSzRELFFBQUwsR0FBZ0IsSUFBaEI7QUFDQSxXQUFLL1ksSUFBTCxDQUFVLE1BQVY7QUFDRDtBQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztXQUNFLGdCQUFPMFgsSUFBUCxFQUFhO0FBQ1gsVUFBTVksTUFBTSxHQUFHM0QsTUFBTSxDQUFDa0YsWUFBUCxDQUFvQm5DLElBQXBCLEVBQTBCLEtBQUtaLE1BQUwsQ0FBWWdELFVBQXRDLENBQWY7QUFDQSxXQUFLMUMsUUFBTCxDQUFja0IsTUFBZDtBQUNEO0FBRUQ7QUFDRjtBQUNBOzs7O1dBQ0Usa0JBQVNBLE1BQVQsRUFBaUI7QUFDZixXQUFLdFksSUFBTCxDQUFVLFFBQVYsRUFBb0JzWSxNQUFwQjtBQUNEO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7OztXQUNFLG1CQUFVO0FBQ1IsV0FBS25ELFVBQUwsR0FBa0IsUUFBbEI7QUFDQSxXQUFLblYsSUFBTCxDQUFVLE9BQVY7QUFDRDs7OztFQS9HcUJxTixPOztBQWtIeEI3QixNQUFNLENBQUNDLE9BQVAsR0FBaUI4TixTQUFqQixDOzs7Ozs7Ozs7O0FDdEhBLElBQU1RLGNBQWMsR0FBR3pZLG1CQUFPLENBQUMsOEdBQUQsQ0FBOUI7O0FBQ0EsSUFBTTBZLEdBQUcsR0FBRzFZLG1CQUFPLENBQUMsb0ZBQUQsQ0FBbkI7O0FBQ0EsSUFBTTJZLEtBQUssR0FBRzNZLG1CQUFPLENBQUMsd0ZBQUQsQ0FBckI7O0FBQ0EsSUFBTTRZLFNBQVMsR0FBRzVZLG1CQUFPLENBQUMsZ0ZBQUQsQ0FBekI7O0FBRUFtSyxlQUFBLEdBQWtCME8sT0FBbEI7QUFDQTFPLGlCQUFBLEdBQW9CeU8sU0FBcEI7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0MsT0FBVCxDQUFpQnhPLElBQWpCLEVBQXVCO0FBQ3JCLE1BQUl5TyxHQUFKO0FBQ0EsTUFBSUMsRUFBRSxHQUFHLEtBQVQ7QUFDQSxNQUFJQyxFQUFFLEdBQUcsS0FBVDtBQUNBLE1BQU03RSxLQUFLLEdBQUcsVUFBVTlKLElBQUksQ0FBQzhKLEtBQTdCOztBQUVBLE1BQUksT0FBTzljLFFBQVAsS0FBb0IsV0FBeEIsRUFBcUM7QUFDbkMsUUFBTTRoQixLQUFLLEdBQUcsYUFBYTVoQixRQUFRLENBQUM4YixRQUFwQztBQUNBLFFBQUlRLElBQUksR0FBR3RjLFFBQVEsQ0FBQ3NjLElBQXBCLENBRm1DLENBSW5DOztBQUNBLFFBQUksQ0FBQ0EsSUFBTCxFQUFXO0FBQ1RBLFVBQUksR0FBR3NGLEtBQUssR0FBRyxHQUFILEdBQVMsRUFBckI7QUFDRDs7QUFFREYsTUFBRSxHQUFHMU8sSUFBSSxDQUFDbUosUUFBTCxLQUFrQm5jLFFBQVEsQ0FBQ21jLFFBQTNCLElBQXVDRyxJQUFJLEtBQUt0SixJQUFJLENBQUNzSixJQUExRDtBQUNBcUYsTUFBRSxHQUFHM08sSUFBSSxDQUFDcUosTUFBTCxLQUFnQnVGLEtBQXJCO0FBQ0Q7O0FBRUQ1TyxNQUFJLENBQUM2TyxPQUFMLEdBQWVILEVBQWY7QUFDQTFPLE1BQUksQ0FBQzhPLE9BQUwsR0FBZUgsRUFBZjtBQUNBRixLQUFHLEdBQUcsSUFBSUwsY0FBSixDQUFtQnBPLElBQW5CLENBQU47O0FBRUEsTUFBSSxVQUFVeU8sR0FBVixJQUFpQixDQUFDek8sSUFBSSxDQUFDK08sVUFBM0IsRUFBdUM7QUFDckMsV0FBTyxJQUFJVixHQUFKLENBQVFyTyxJQUFSLENBQVA7QUFDRCxHQUZELE1BRU87QUFDTCxRQUFJLENBQUM4SixLQUFMLEVBQVksTUFBTSxJQUFJNUcsS0FBSixDQUFVLGdCQUFWLENBQU47QUFDWixXQUFPLElBQUlvTCxLQUFKLENBQVV0TyxJQUFWLENBQVA7QUFDRDtBQUNGLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVDRCxJQUFNZ1AsT0FBTyxHQUFHclosbUJBQU8sQ0FBQyw0RUFBRCxDQUF2Qjs7QUFDQSxJQUFNc1osVUFBVSxHQUFHdFosbUJBQU8sQ0FBQyxnRkFBRCxDQUExQjs7QUFFQSxJQUFNdVosUUFBUSxHQUFHLEtBQWpCO0FBQ0EsSUFBTUMsZUFBZSxHQUFHLE1BQXhCO0FBRUE7QUFDQTtBQUNBOztBQUVBLElBQUk5TSxTQUFKOztJQUVNK00sWTs7Ozs7QUFDSjtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRSx3QkFBWXBQLElBQVosRUFBa0I7QUFBQTs7QUFBQTs7QUFDaEIsOEJBQU1BLElBQU47QUFFQSxVQUFLdUosS0FBTCxHQUFhLE1BQUtBLEtBQUwsSUFBYyxFQUEzQixDQUhnQixDQUtoQjtBQUNBOztBQUNBLFFBQUksQ0FBQ2xILFNBQUwsRUFBZ0I7QUFDZDtBQUNBQSxlQUFTLEdBQUc0TSxVQUFVLENBQUNJLE1BQVgsR0FBb0JKLFVBQVUsQ0FBQ0ksTUFBWCxJQUFxQixFQUFyRDtBQUNELEtBVmUsQ0FZaEI7OztBQUNBLFVBQUtqSyxLQUFMLEdBQWEvQyxTQUFTLENBQUMzVCxNQUF2QixDQWJnQixDQWVoQjs7QUFDQTJULGFBQVMsQ0FBQzFTLElBQVYsQ0FBZSxNQUFLMmYsTUFBTCxDQUFZdG1CLElBQVosK0JBQWYsRUFoQmdCLENBa0JoQjs7QUFDQSxVQUFLdWdCLEtBQUwsQ0FBVzVOLENBQVgsR0FBZSxNQUFLeUosS0FBcEI7QUFuQmdCO0FBb0JqQjtBQUVEO0FBQ0Y7QUFDQTs7Ozs7U0FDRSxlQUFxQjtBQUNuQixhQUFPLEtBQVA7QUFDRDtBQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7Ozs7V0FDRSxtQkFBVTtBQUNSLFVBQUksS0FBS21LLE1BQVQsRUFBaUI7QUFDZjtBQUNBLGFBQUtBLE1BQUwsQ0FBWWpELE9BQVosR0FBc0IsWUFBTSxDQUFFLENBQTlCOztBQUNBLGFBQUtpRCxNQUFMLENBQVl4YSxVQUFaLENBQXVCeWEsV0FBdkIsQ0FBbUMsS0FBS0QsTUFBeEM7QUFDQSxhQUFLQSxNQUFMLEdBQWMsSUFBZDtBQUNEOztBQUVELFVBQUksS0FBS0UsSUFBVCxFQUFlO0FBQ2IsYUFBS0EsSUFBTCxDQUFVMWEsVUFBVixDQUFxQnlhLFdBQXJCLENBQWlDLEtBQUtDLElBQXRDO0FBQ0EsYUFBS0EsSUFBTCxHQUFZLElBQVo7QUFDQSxhQUFLQyxNQUFMLEdBQWMsSUFBZDtBQUNEOztBQUVEO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBOzs7O1dBQ0Usa0JBQVM7QUFBQTs7QUFDUCxVQUFNSCxNQUFNLEdBQUd0bEIsUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBQWY7O0FBRUEsVUFBSSxLQUFLcWxCLE1BQVQsRUFBaUI7QUFDZixhQUFLQSxNQUFMLENBQVl4YSxVQUFaLENBQXVCeWEsV0FBdkIsQ0FBbUMsS0FBS0QsTUFBeEM7QUFDQSxhQUFLQSxNQUFMLEdBQWMsSUFBZDtBQUNEOztBQUVEQSxZQUFNLENBQUNJLEtBQVAsR0FBZSxJQUFmO0FBQ0FKLFlBQU0sQ0FBQzVTLEdBQVAsR0FBYSxLQUFLa00sR0FBTCxFQUFiOztBQUNBMEcsWUFBTSxDQUFDakQsT0FBUCxHQUFpQixVQUFBM1osQ0FBQyxFQUFJO0FBQ3BCLGNBQUksQ0FBQytZLE9BQUwsQ0FBYSxrQkFBYixFQUFpQy9ZLENBQWpDO0FBQ0QsT0FGRDs7QUFJQSxVQUFNaWQsUUFBUSxHQUFHM2xCLFFBQVEsQ0FBQzRsQixvQkFBVCxDQUE4QixRQUE5QixFQUF3QyxDQUF4QyxDQUFqQjs7QUFDQSxVQUFJRCxRQUFKLEVBQWM7QUFDWkEsZ0JBQVEsQ0FBQzdhLFVBQVQsQ0FBb0J4RCxZQUFwQixDQUFpQ2dlLE1BQWpDLEVBQXlDSyxRQUF6QztBQUNELE9BRkQsTUFFTztBQUNMLFNBQUMzbEIsUUFBUSxDQUFDNmxCLElBQVQsSUFBaUI3bEIsUUFBUSxDQUFDa0MsSUFBM0IsRUFBaUNpRixXQUFqQyxDQUE2Q21lLE1BQTdDO0FBQ0Q7O0FBQ0QsV0FBS0EsTUFBTCxHQUFjQSxNQUFkO0FBRUEsVUFBTVEsU0FBUyxHQUNiLGdCQUFnQixPQUFPdkwsU0FBdkIsSUFBb0MsU0FBUzdNLElBQVQsQ0FBYzZNLFNBQVMsQ0FBQ0MsU0FBeEIsQ0FEdEM7O0FBR0EsVUFBSXNMLFNBQUosRUFBZTtBQUNibnBCLGtCQUFVLENBQUMsWUFBVztBQUNwQixjQUFNOG9CLE1BQU0sR0FBR3psQixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBZjtBQUNBRCxrQkFBUSxDQUFDa0MsSUFBVCxDQUFjaUYsV0FBZCxDQUEwQnNlLE1BQTFCO0FBQ0F6bEIsa0JBQVEsQ0FBQ2tDLElBQVQsQ0FBY3FqQixXQUFkLENBQTBCRSxNQUExQjtBQUNELFNBSlMsRUFJUCxHQUpPLENBQVY7QUFLRDtBQUNGO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7V0FDRSxpQkFBUTNELElBQVIsRUFBY2pLLEVBQWQsRUFBa0I7QUFBQTs7QUFDaEIsVUFBSTROLE1BQUo7O0FBRUEsVUFBSSxDQUFDLEtBQUtELElBQVYsRUFBZ0I7QUFDZCxZQUFNQSxJQUFJLEdBQUd4bEIsUUFBUSxDQUFDQyxhQUFULENBQXVCLE1BQXZCLENBQWI7QUFDQSxZQUFNOGxCLElBQUksR0FBRy9sQixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsVUFBdkIsQ0FBYjtBQUNBLFlBQU1VLEVBQUUsR0FBSSxLQUFLcWxCLFFBQUwsR0FBZ0IsZ0JBQWdCLEtBQUs3SyxLQUFqRDtBQUVBcUssWUFBSSxDQUFDdGMsU0FBTCxHQUFpQixVQUFqQjtBQUNBc2MsWUFBSSxDQUFDdmUsS0FBTCxDQUFXekgsUUFBWCxHQUFzQixVQUF0QjtBQUNBZ21CLFlBQUksQ0FBQ3ZlLEtBQUwsQ0FBV2dmLEdBQVgsR0FBaUIsU0FBakI7QUFDQVQsWUFBSSxDQUFDdmUsS0FBTCxDQUFXaWYsSUFBWCxHQUFrQixTQUFsQjtBQUNBVixZQUFJLENBQUNqVyxNQUFMLEdBQWM1TyxFQUFkO0FBQ0E2a0IsWUFBSSxDQUFDVyxNQUFMLEdBQWMsTUFBZDtBQUNBWCxZQUFJLENBQUN4YixZQUFMLENBQWtCLGdCQUFsQixFQUFvQyxPQUFwQztBQUNBK2IsWUFBSSxDQUFDbGxCLElBQUwsR0FBWSxHQUFaO0FBQ0Eya0IsWUFBSSxDQUFDcmUsV0FBTCxDQUFpQjRlLElBQWpCO0FBQ0EvbEIsZ0JBQVEsQ0FBQ2tDLElBQVQsQ0FBY2lGLFdBQWQsQ0FBMEJxZSxJQUExQjtBQUVBLGFBQUtBLElBQUwsR0FBWUEsSUFBWjtBQUNBLGFBQUtPLElBQUwsR0FBWUEsSUFBWjtBQUNEOztBQUVELFdBQUtQLElBQUwsQ0FBVXJiLE1BQVYsR0FBbUIsS0FBS3lVLEdBQUwsRUFBbkI7O0FBRUEsZUFBU3dILFFBQVQsR0FBb0I7QUFDbEJDLGtCQUFVO0FBQ1Z4TyxVQUFFO0FBQ0g7O0FBRUQsVUFBTXdPLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDdkIsWUFBSSxNQUFJLENBQUNaLE1BQVQsRUFBaUI7QUFDZixjQUFJO0FBQ0Ysa0JBQUksQ0FBQ0QsSUFBTCxDQUFVRCxXQUFWLENBQXNCLE1BQUksQ0FBQ0UsTUFBM0I7QUFDRCxXQUZELENBRUUsT0FBTy9jLENBQVAsRUFBVTtBQUNWLGtCQUFJLENBQUMrWSxPQUFMLENBQWEsb0NBQWIsRUFBbUQvWSxDQUFuRDtBQUNEO0FBQ0Y7O0FBRUQsWUFBSTtBQUNGO0FBQ0EsY0FBTTRkLElBQUksR0FBRyxzQ0FBc0MsTUFBSSxDQUFDTixRQUEzQyxHQUFzRCxJQUFuRTtBQUNBUCxnQkFBTSxHQUFHemxCLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QnFtQixJQUF2QixDQUFUO0FBQ0QsU0FKRCxDQUlFLE9BQU81ZCxDQUFQLEVBQVU7QUFDVitjLGdCQUFNLEdBQUd6bEIsUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBQVQ7QUFDQXdsQixnQkFBTSxDQUFDNWtCLElBQVAsR0FBYyxNQUFJLENBQUNtbEIsUUFBbkI7QUFDQVAsZ0JBQU0sQ0FBQy9TLEdBQVAsR0FBYSxjQUFiO0FBQ0Q7O0FBRUQrUyxjQUFNLENBQUM5a0IsRUFBUCxHQUFZLE1BQUksQ0FBQ3FsQixRQUFqQjs7QUFFQSxjQUFJLENBQUNSLElBQUwsQ0FBVXJlLFdBQVYsQ0FBc0JzZSxNQUF0Qjs7QUFDQSxjQUFJLENBQUNBLE1BQUwsR0FBY0EsTUFBZDtBQUNELE9BdkJEOztBQXlCQVksZ0JBQVUsR0F2RE0sQ0F5RGhCO0FBQ0E7O0FBQ0F2RSxVQUFJLEdBQUdBLElBQUksQ0FBQzVSLE9BQUwsQ0FBYWdWLGVBQWIsRUFBOEIsTUFBOUIsQ0FBUDtBQUNBLFdBQUthLElBQUwsQ0FBVVEsS0FBVixHQUFrQnpFLElBQUksQ0FBQzVSLE9BQUwsQ0FBYStVLFFBQWIsRUFBdUIsS0FBdkIsQ0FBbEI7O0FBRUEsVUFBSTtBQUNGLGFBQUtPLElBQUwsQ0FBVWdCLE1BQVY7QUFDRCxPQUZELENBRUUsT0FBTzlkLENBQVAsRUFBVSxDQUFFOztBQUVkLFVBQUksS0FBSytjLE1BQUwsQ0FBWWdCLFdBQWhCLEVBQTZCO0FBQzNCLGFBQUtoQixNQUFMLENBQVlpQixrQkFBWixHQUFpQyxZQUFNO0FBQ3JDLGNBQUksTUFBSSxDQUFDakIsTUFBTCxDQUFZbEcsVUFBWixLQUEyQixVQUEvQixFQUEyQztBQUN6QzZHLG9CQUFRO0FBQ1Q7QUFDRixTQUpEO0FBS0QsT0FORCxNQU1PO0FBQ0wsYUFBS1gsTUFBTCxDQUFZa0IsTUFBWixHQUFxQlAsUUFBckI7QUFDRDtBQUNGOzs7O0VBbkx3QnJCLE87O0FBc0wzQm5QLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQnNQLFlBQWpCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbE1BO0FBRUEsSUFBTWhCLGNBQWMsR0FBR3pZLG1CQUFPLENBQUMsOEdBQUQsQ0FBOUI7O0FBQ0EsSUFBTXFaLE9BQU8sR0FBR3JaLG1CQUFPLENBQUMsNEVBQUQsQ0FBdkI7O0FBQ0EsSUFBTStMLE9BQU8sR0FBRy9MLG1CQUFPLENBQUMsb0VBQUQsQ0FBdkI7O0FBQ0EsZUFBaUJBLG1CQUFPLENBQUMsNERBQUQsQ0FBeEI7QUFBQSxJQUFRa2IsSUFBUixZQUFRQSxJQUFSOztBQUNBLElBQU01QixVQUFVLEdBQUd0WixtQkFBTyxDQUFDLGdGQUFELENBQTFCOztBQUVBLElBQU0yUCxLQUFLLEdBQUczUCxtQkFBTyxDQUFDLGtEQUFELENBQVAsQ0FBaUIsOEJBQWpCLENBQWQ7QUFFQTtBQUNBO0FBQ0E7OztBQUVBLFNBQVNtYixLQUFULEdBQWlCLENBQUU7O0FBRW5CLElBQU1DLE9BQU8sR0FBSSxZQUFXO0FBQzFCLE1BQU10QyxHQUFHLEdBQUcsSUFBSUwsY0FBSixDQUFtQjtBQUFFUyxXQUFPLEVBQUU7QUFBWCxHQUFuQixDQUFaO0FBQ0EsU0FBTyxRQUFRSixHQUFHLENBQUN1QyxZQUFuQjtBQUNELENBSGUsRUFBaEI7O0lBS00zQyxHOzs7OztBQUNKO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNFLGVBQVlyTyxJQUFaLEVBQWtCO0FBQUE7O0FBQUE7O0FBQ2hCLDhCQUFNQSxJQUFOOztBQUVBLFFBQUksT0FBT2hULFFBQVAsS0FBb0IsV0FBeEIsRUFBcUM7QUFDbkMsVUFBTTRoQixLQUFLLEdBQUcsYUFBYTVoQixRQUFRLENBQUM4YixRQUFwQztBQUNBLFVBQUlRLElBQUksR0FBR3RjLFFBQVEsQ0FBQ3NjLElBQXBCLENBRm1DLENBSW5DOztBQUNBLFVBQUksQ0FBQ0EsSUFBTCxFQUFXO0FBQ1RBLFlBQUksR0FBR3NGLEtBQUssR0FBRyxHQUFILEdBQVMsRUFBckI7QUFDRDs7QUFFRCxZQUFLRixFQUFMLEdBQ0csT0FBTzFoQixRQUFQLEtBQW9CLFdBQXBCLElBQ0NnVCxJQUFJLENBQUNtSixRQUFMLEtBQWtCbmMsUUFBUSxDQUFDbWMsUUFEN0IsSUFFQUcsSUFBSSxLQUFLdEosSUFBSSxDQUFDc0osSUFIaEI7QUFJQSxZQUFLcUYsRUFBTCxHQUFVM08sSUFBSSxDQUFDcUosTUFBTCxLQUFnQnVGLEtBQTFCO0FBQ0Q7QUFDRDtBQUNKO0FBQ0E7OztBQUNJLFFBQU1xQyxXQUFXLEdBQUdqUixJQUFJLElBQUlBLElBQUksQ0FBQ2lSLFdBQWpDO0FBQ0EsVUFBS0MsY0FBTCxHQUFzQkgsT0FBTyxJQUFJLENBQUNFLFdBQWxDO0FBdEJnQjtBQXVCakI7QUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O1dBQ0UsbUJBQW1CO0FBQUEsVUFBWGpSLElBQVcsdUVBQUosRUFBSTtBQUNqQmpRLFlBQU0sQ0FBQ0MsTUFBUCxDQUFjZ1EsSUFBZCxFQUFvQjtBQUFFME8sVUFBRSxFQUFFLEtBQUtBLEVBQVg7QUFBZUMsVUFBRSxFQUFFLEtBQUtBO0FBQXhCLE9BQXBCLEVBQWtELEtBQUszTyxJQUF2RDtBQUNBLGFBQU8sSUFBSW1SLE9BQUosQ0FBWSxLQUFLdEksR0FBTCxFQUFaLEVBQXdCN0ksSUFBeEIsQ0FBUDtBQUNEO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7V0FDRSxpQkFBUStMLElBQVIsRUFBY2pLLEVBQWQsRUFBa0I7QUFBQTs7QUFDaEIsVUFBTXNQLEdBQUcsR0FBRyxLQUFLQyxPQUFMLENBQWE7QUFDdkJqQixjQUFNLEVBQUUsTUFEZTtBQUV2QnJFLFlBQUksRUFBRUE7QUFGaUIsT0FBYixDQUFaO0FBSUFxRixTQUFHLENBQUN4UCxFQUFKLENBQU8sU0FBUCxFQUFrQkUsRUFBbEI7QUFDQXNQLFNBQUcsQ0FBQ3hQLEVBQUosQ0FBTyxPQUFQLEVBQWdCLFVBQUF3SyxHQUFHLEVBQUk7QUFDckIsY0FBSSxDQUFDVixPQUFMLENBQWEsZ0JBQWIsRUFBK0JVLEdBQS9CO0FBQ0QsT0FGRDtBQUdEO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7OztXQUNFLGtCQUFTO0FBQUE7O0FBQ1A5RyxXQUFLLENBQUMsVUFBRCxDQUFMO0FBQ0EsVUFBTThMLEdBQUcsR0FBRyxLQUFLQyxPQUFMLEVBQVo7QUFDQUQsU0FBRyxDQUFDeFAsRUFBSixDQUFPLE1BQVAsRUFBZSxLQUFLME4sTUFBTCxDQUFZdG1CLElBQVosQ0FBaUIsSUFBakIsQ0FBZjtBQUNBb29CLFNBQUcsQ0FBQ3hQLEVBQUosQ0FBTyxPQUFQLEVBQWdCLFVBQUF3SyxHQUFHLEVBQUk7QUFDckIsY0FBSSxDQUFDVixPQUFMLENBQWEsZ0JBQWIsRUFBK0JVLEdBQS9CO0FBQ0QsT0FGRDtBQUdBLFdBQUtrRixPQUFMLEdBQWVGLEdBQWY7QUFDRDs7OztFQTFFZXBDLE87O0lBNkVabUMsTzs7Ozs7QUFDSjtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRSxtQkFBWXRJLEdBQVosRUFBaUI3SSxJQUFqQixFQUF1QjtBQUFBOztBQUFBOztBQUNyQjtBQUNBLFdBQUtBLElBQUwsR0FBWUEsSUFBWjtBQUVBLFdBQUtvUSxNQUFMLEdBQWNwUSxJQUFJLENBQUNvUSxNQUFMLElBQWUsS0FBN0I7QUFDQSxXQUFLdkgsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsV0FBSzhHLEtBQUwsR0FBYSxVQUFVM1AsSUFBSSxDQUFDMlAsS0FBNUI7QUFDQSxXQUFLNUQsSUFBTCxHQUFZemIsU0FBUyxLQUFLMFAsSUFBSSxDQUFDK0wsSUFBbkIsR0FBMEIvTCxJQUFJLENBQUMrTCxJQUEvQixHQUFzQyxJQUFsRDs7QUFFQSxXQUFLd0YsTUFBTDs7QUFUcUI7QUFVdEI7QUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBOzs7OztXQUNFLGtCQUFTO0FBQUE7O0FBQ1AsVUFBTXZSLElBQUksR0FBRzZRLElBQUksQ0FDZixLQUFLN1EsSUFEVSxFQUVmLE9BRmUsRUFHZixZQUhlLEVBSWYsS0FKZSxFQUtmLEtBTGUsRUFNZixZQU5lLEVBT2YsTUFQZSxFQVFmLElBUmUsRUFTZixTQVRlLEVBVWYsb0JBVmUsRUFXZixXQVhlLENBQWpCO0FBYUFBLFVBQUksQ0FBQzZPLE9BQUwsR0FBZSxDQUFDLENBQUMsS0FBSzdPLElBQUwsQ0FBVTBPLEVBQTNCO0FBQ0ExTyxVQUFJLENBQUM4TyxPQUFMLEdBQWUsQ0FBQyxDQUFDLEtBQUs5TyxJQUFMLENBQVUyTyxFQUEzQjtBQUVBLFVBQU1GLEdBQUcsR0FBSSxLQUFLQSxHQUFMLEdBQVcsSUFBSUwsY0FBSixDQUFtQnBPLElBQW5CLENBQXhCOztBQUVBLFVBQUk7QUFDRnNGLGFBQUssQ0FBQyxpQkFBRCxFQUFvQixLQUFLOEssTUFBekIsRUFBaUMsS0FBS3ZILEdBQXRDLENBQUw7QUFDQTRGLFdBQUcsQ0FBQzFELElBQUosQ0FBUyxLQUFLcUYsTUFBZCxFQUFzQixLQUFLdkgsR0FBM0IsRUFBZ0MsS0FBSzhHLEtBQXJDOztBQUNBLFlBQUk7QUFDRixjQUFJLEtBQUszUCxJQUFMLENBQVV3UixZQUFkLEVBQTRCO0FBQzFCL0MsZUFBRyxDQUFDZ0QscUJBQUosSUFBNkJoRCxHQUFHLENBQUNnRCxxQkFBSixDQUEwQixJQUExQixDQUE3Qjs7QUFDQSxpQkFBSyxJQUFJbG9CLENBQVQsSUFBYyxLQUFLeVcsSUFBTCxDQUFVd1IsWUFBeEIsRUFBc0M7QUFDcEMsa0JBQUksS0FBS3hSLElBQUwsQ0FBVXdSLFlBQVYsQ0FBdUJ6YSxjQUF2QixDQUFzQ3hOLENBQXRDLENBQUosRUFBOEM7QUFDNUNrbEIsbUJBQUcsQ0FBQ2lELGdCQUFKLENBQXFCbm9CLENBQXJCLEVBQXdCLEtBQUt5VyxJQUFMLENBQVV3UixZQUFWLENBQXVCam9CLENBQXZCLENBQXhCO0FBQ0Q7QUFDRjtBQUNGO0FBQ0YsU0FURCxDQVNFLE9BQU9vSixDQUFQLEVBQVUsQ0FBRTs7QUFFZCxZQUFJLFdBQVcsS0FBS3lkLE1BQXBCLEVBQTRCO0FBQzFCLGNBQUk7QUFDRjNCLGVBQUcsQ0FBQ2lELGdCQUFKLENBQXFCLGNBQXJCLEVBQXFDLDBCQUFyQztBQUNELFdBRkQsQ0FFRSxPQUFPL2UsQ0FBUCxFQUFVLENBQUU7QUFDZjs7QUFFRCxZQUFJO0FBQ0Y4YixhQUFHLENBQUNpRCxnQkFBSixDQUFxQixRQUFyQixFQUErQixLQUEvQjtBQUNELFNBRkQsQ0FFRSxPQUFPL2UsQ0FBUCxFQUFVLENBQUUsQ0F0QlosQ0F3QkY7OztBQUNBLFlBQUkscUJBQXFCOGIsR0FBekIsRUFBOEI7QUFDNUJBLGFBQUcsQ0FBQzdFLGVBQUosR0FBc0IsS0FBSzVKLElBQUwsQ0FBVTRKLGVBQWhDO0FBQ0Q7O0FBRUQsWUFBSSxLQUFLNUosSUFBTCxDQUFVMlIsY0FBZCxFQUE4QjtBQUM1QmxELGFBQUcsQ0FBQ21ELE9BQUosR0FBYyxLQUFLNVIsSUFBTCxDQUFVMlIsY0FBeEI7QUFDRDs7QUFFRCxZQUFJLEtBQUtFLE1BQUwsRUFBSixFQUFtQjtBQUNqQnBELGFBQUcsQ0FBQ21DLE1BQUosR0FBYSxZQUFNO0FBQ2pCLGtCQUFJLENBQUNrQixNQUFMO0FBQ0QsV0FGRDs7QUFHQXJELGFBQUcsQ0FBQ25DLE9BQUosR0FBYyxZQUFNO0FBQ2xCLGtCQUFJLENBQUNaLE9BQUwsQ0FBYStDLEdBQUcsQ0FBQ3NELFlBQWpCO0FBQ0QsV0FGRDtBQUdELFNBUEQsTUFPTztBQUNMdEQsYUFBRyxDQUFDa0Msa0JBQUosR0FBeUIsWUFBTTtBQUM3QixnQkFBSSxNQUFNbEMsR0FBRyxDQUFDakYsVUFBZCxFQUEwQjs7QUFDMUIsZ0JBQUksUUFBUWlGLEdBQUcsQ0FBQzFhLE1BQVosSUFBc0IsU0FBUzBhLEdBQUcsQ0FBQzFhLE1BQXZDLEVBQStDO0FBQzdDLG9CQUFJLENBQUMrZCxNQUFMO0FBQ0QsYUFGRCxNQUVPO0FBQ0w7QUFDQTtBQUNBbHJCLHdCQUFVLENBQUMsWUFBTTtBQUNmLHNCQUFJLENBQUM4a0IsT0FBTCxDQUFhLE9BQU8rQyxHQUFHLENBQUMxYSxNQUFYLEtBQXNCLFFBQXRCLEdBQWlDMGEsR0FBRyxDQUFDMWEsTUFBckMsR0FBOEMsQ0FBM0Q7QUFDRCxlQUZTLEVBRVAsQ0FGTyxDQUFWO0FBR0Q7QUFDRixXQVhEO0FBWUQ7O0FBRUR1UixhQUFLLENBQUMsYUFBRCxFQUFnQixLQUFLeUcsSUFBckIsQ0FBTDtBQUNBMEMsV0FBRyxDQUFDM0MsSUFBSixDQUFTLEtBQUtDLElBQWQ7QUFDRCxPQXpERCxDQXlERSxPQUFPcFosQ0FBUCxFQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EvTCxrQkFBVSxDQUFDLFlBQU07QUFDZixnQkFBSSxDQUFDOGtCLE9BQUwsQ0FBYS9ZLENBQWI7QUFDRCxTQUZTLEVBRVAsQ0FGTyxDQUFWO0FBR0E7QUFDRDs7QUFFRCxVQUFJLE9BQU8xSSxRQUFQLEtBQW9CLFdBQXhCLEVBQXFDO0FBQ25DLGFBQUttYixLQUFMLEdBQWErTCxPQUFPLENBQUNhLGFBQVIsRUFBYjtBQUNBYixlQUFPLENBQUNjLFFBQVIsQ0FBaUIsS0FBSzdNLEtBQXRCLElBQStCLElBQS9CO0FBQ0Q7QUFDRjtBQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7Ozs7V0FDRSxxQkFBWTtBQUNWLFdBQUsvUSxJQUFMLENBQVUsU0FBVjtBQUNBLFdBQUs2WCxPQUFMO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBOzs7O1dBQ0UsZ0JBQU9ILElBQVAsRUFBYTtBQUNYLFdBQUsxWCxJQUFMLENBQVUsTUFBVixFQUFrQjBYLElBQWxCO0FBQ0EsV0FBS21HLFNBQUw7QUFDRDtBQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7Ozs7V0FDRSxpQkFBUTlGLEdBQVIsRUFBYTtBQUNYLFdBQUsvWCxJQUFMLENBQVUsT0FBVixFQUFtQitYLEdBQW5CO0FBQ0EsV0FBS0YsT0FBTCxDQUFhLElBQWI7QUFDRDtBQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7Ozs7V0FDRSxpQkFBUWlHLFNBQVIsRUFBbUI7QUFDakIsVUFBSSxnQkFBZ0IsT0FBTyxLQUFLMUQsR0FBNUIsSUFBbUMsU0FBUyxLQUFLQSxHQUFyRCxFQUEwRDtBQUN4RDtBQUNELE9BSGdCLENBSWpCOzs7QUFDQSxVQUFJLEtBQUtvRCxNQUFMLEVBQUosRUFBbUI7QUFDakIsYUFBS3BELEdBQUwsQ0FBU21DLE1BQVQsR0FBa0IsS0FBS25DLEdBQUwsQ0FBU25DLE9BQVQsR0FBbUJ3RSxLQUFyQztBQUNELE9BRkQsTUFFTztBQUNMLGFBQUtyQyxHQUFMLENBQVNrQyxrQkFBVCxHQUE4QkcsS0FBOUI7QUFDRDs7QUFFRCxVQUFJcUIsU0FBSixFQUFlO0FBQ2IsWUFBSTtBQUNGLGVBQUsxRCxHQUFMLENBQVMyRCxLQUFUO0FBQ0QsU0FGRCxDQUVFLE9BQU96ZixDQUFQLEVBQVUsQ0FBRTtBQUNmOztBQUVELFVBQUksT0FBTzFJLFFBQVAsS0FBb0IsV0FBeEIsRUFBcUM7QUFDbkMsZUFBT2tuQixPQUFPLENBQUNjLFFBQVIsQ0FBaUIsS0FBSzdNLEtBQXRCLENBQVA7QUFDRDs7QUFFRCxXQUFLcUosR0FBTCxHQUFXLElBQVg7QUFDRDtBQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7Ozs7V0FDRSxrQkFBUztBQUNQLFVBQU0xQyxJQUFJLEdBQUcsS0FBSzBDLEdBQUwsQ0FBU3NELFlBQXRCOztBQUNBLFVBQUloRyxJQUFJLEtBQUssSUFBYixFQUFtQjtBQUNqQixhQUFLdUQsTUFBTCxDQUFZdkQsSUFBWjtBQUNEO0FBQ0Y7QUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBOzs7O1dBQ0Usa0JBQVM7QUFDUCxhQUFPLE9BQU9zRyxjQUFQLEtBQTBCLFdBQTFCLElBQXlDLENBQUMsS0FBSzFELEVBQS9DLElBQXFELEtBQUsyRCxVQUFqRTtBQUNEO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7OztXQUNFLGlCQUFRO0FBQ04sV0FBS3BHLE9BQUw7QUFDRDs7OztFQTNNbUJ4SyxPO0FBOE10QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQXlQLE9BQU8sQ0FBQ2EsYUFBUixHQUF3QixDQUF4QjtBQUNBYixPQUFPLENBQUNjLFFBQVIsR0FBbUIsRUFBbkI7O0FBRUEsSUFBSSxPQUFPaG9CLFFBQVAsS0FBb0IsV0FBeEIsRUFBcUM7QUFDbkMsTUFBSSxPQUFPeW1CLFdBQVAsS0FBdUIsVUFBM0IsRUFBdUM7QUFDckNBLGVBQVcsQ0FBQyxVQUFELEVBQWE2QixhQUFiLENBQVg7QUFDRCxHQUZELE1BRU8sSUFBSSxPQUFPNWdCLGdCQUFQLEtBQTRCLFVBQWhDLEVBQTRDO0FBQ2pELFFBQU02Z0IsZ0JBQWdCLEdBQUcsZ0JBQWdCdkQsVUFBaEIsR0FBNkIsVUFBN0IsR0FBMEMsUUFBbkU7QUFDQXRkLG9CQUFnQixDQUFDNmdCLGdCQUFELEVBQW1CRCxhQUFuQixFQUFrQyxLQUFsQyxDQUFoQjtBQUNEO0FBQ0Y7O0FBRUQsU0FBU0EsYUFBVCxHQUF5QjtBQUN2QixPQUFLLElBQUlocEIsQ0FBVCxJQUFjNG5CLE9BQU8sQ0FBQ2MsUUFBdEIsRUFBZ0M7QUFDOUIsUUFBSWQsT0FBTyxDQUFDYyxRQUFSLENBQWlCbGIsY0FBakIsQ0FBZ0N4TixDQUFoQyxDQUFKLEVBQXdDO0FBQ3RDNG5CLGFBQU8sQ0FBQ2MsUUFBUixDQUFpQjFvQixDQUFqQixFQUFvQjZvQixLQUFwQjtBQUNEO0FBQ0Y7QUFDRjs7QUFFRHZTLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQnVPLEdBQWpCO0FBQ0F4TyxzQkFBQSxHQUF5QnNSLE9BQXpCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM1VBLElBQU12RCxTQUFTLEdBQUdqWSxtQkFBTyxDQUFDLHNFQUFELENBQXpCOztBQUNBLElBQU11VCxPQUFPLEdBQUd2VCxtQkFBTyxDQUFDLGdEQUFELENBQXZCOztBQUNBLElBQU1xVCxNQUFNLEdBQUdyVCxtQkFBTyxDQUFDLHNFQUFELENBQXRCOztBQUNBLElBQU04YyxLQUFLLEdBQUc5YyxtQkFBTyxDQUFDLDRDQUFELENBQXJCOztBQUVBLElBQU0yUCxLQUFLLEdBQUczUCxtQkFBTyxDQUFDLGtEQUFELENBQVAsQ0FBaUIsMEJBQWpCLENBQWQ7O0lBRU1xWixPOzs7Ozs7Ozs7Ozs7OztBQUNKO0FBQ0Y7QUFDQTtBQUNFLG1CQUFXO0FBQ1QsYUFBTyxTQUFQO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7V0FDRSxrQkFBUztBQUNQLFdBQUswRCxJQUFMO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7V0FDRSxlQUFNQyxPQUFOLEVBQWU7QUFBQTs7QUFDYixXQUFLbkosVUFBTCxHQUFrQixTQUFsQjs7QUFFQSxVQUFNbmxCLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFDbEJpaEIsYUFBSyxDQUFDLFFBQUQsQ0FBTDtBQUNBLGFBQUksQ0FBQ2tFLFVBQUwsR0FBa0IsUUFBbEI7QUFDQW1KLGVBQU87QUFDUixPQUpEOztBQU1BLFVBQUksS0FBS25FLE9BQUwsSUFBZ0IsQ0FBQyxLQUFLcEIsUUFBMUIsRUFBb0M7QUFDbEMsWUFBSXdGLEtBQUssR0FBRyxDQUFaOztBQUVBLFlBQUksS0FBS3BFLE9BQVQsRUFBa0I7QUFDaEJsSixlQUFLLENBQUMsNkNBQUQsQ0FBTDtBQUNBc04sZUFBSztBQUNMLGVBQUs1USxJQUFMLENBQVUsY0FBVixFQUEwQixZQUFXO0FBQ25Dc0QsaUJBQUssQ0FBQyw0QkFBRCxDQUFMO0FBQ0EsY0FBRXNOLEtBQUYsSUFBV3Z1QixLQUFLLEVBQWhCO0FBQ0QsV0FIRDtBQUlEOztBQUVELFlBQUksQ0FBQyxLQUFLK29CLFFBQVYsRUFBb0I7QUFDbEI5SCxlQUFLLENBQUMsNkNBQUQsQ0FBTDtBQUNBc04sZUFBSztBQUNMLGVBQUs1USxJQUFMLENBQVUsT0FBVixFQUFtQixZQUFXO0FBQzVCc0QsaUJBQUssQ0FBQyw0QkFBRCxDQUFMO0FBQ0EsY0FBRXNOLEtBQUYsSUFBV3Z1QixLQUFLLEVBQWhCO0FBQ0QsV0FIRDtBQUlEO0FBQ0YsT0FwQkQsTUFvQk87QUFDTEEsYUFBSztBQUNOO0FBQ0Y7QUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBOzs7O1dBQ0UsZ0JBQU87QUFDTGloQixXQUFLLENBQUMsU0FBRCxDQUFMO0FBQ0EsV0FBS2tKLE9BQUwsR0FBZSxJQUFmO0FBQ0EsV0FBS3FFLE1BQUw7QUFDQSxXQUFLeGUsSUFBTCxDQUFVLE1BQVY7QUFDRDtBQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7Ozs7V0FDRSxnQkFBTzBYLElBQVAsRUFBYTtBQUFBOztBQUNYekcsV0FBSyxDQUFDLHFCQUFELEVBQXdCeUcsSUFBeEIsQ0FBTDs7QUFDQSxVQUFNK0csUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQW5HLE1BQU0sRUFBSTtBQUN6QjtBQUNBLFlBQUksY0FBYyxNQUFJLENBQUNuRCxVQUFuQixJQUFpQ21ELE1BQU0sQ0FBQzNULElBQVAsS0FBZ0IsTUFBckQsRUFBNkQ7QUFDM0QsZ0JBQUksQ0FBQ2lVLE1BQUw7QUFDRCxTQUp3QixDQU16Qjs7O0FBQ0EsWUFBSSxZQUFZTixNQUFNLENBQUMzVCxJQUF2QixFQUE2QjtBQUMzQixnQkFBSSxDQUFDOFIsT0FBTDs7QUFDQSxpQkFBTyxLQUFQO0FBQ0QsU0FWd0IsQ0FZekI7OztBQUNBLGNBQUksQ0FBQ1csUUFBTCxDQUFja0IsTUFBZDtBQUNELE9BZEQsQ0FGVyxDQWtCWDs7O0FBQ0EzRCxZQUFNLENBQUMrSixhQUFQLENBQXFCaEgsSUFBckIsRUFBMkIsS0FBS1osTUFBTCxDQUFZZ0QsVUFBdkMsRUFBbUR0SCxPQUFuRCxDQUEyRGlNLFFBQTNELEVBbkJXLENBcUJYOztBQUNBLFVBQUksYUFBYSxLQUFLdEosVUFBdEIsRUFBa0M7QUFDaEM7QUFDQSxhQUFLZ0YsT0FBTCxHQUFlLEtBQWY7QUFDQSxhQUFLbmEsSUFBTCxDQUFVLGNBQVY7O0FBRUEsWUFBSSxXQUFXLEtBQUttVixVQUFwQixFQUFnQztBQUM5QixlQUFLa0osSUFBTDtBQUNELFNBRkQsTUFFTztBQUNMcE4sZUFBSyxDQUFDLHNDQUFELEVBQXlDLEtBQUtrRSxVQUE5QyxDQUFMO0FBQ0Q7QUFDRjtBQUNGO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7OztXQUNFLG1CQUFVO0FBQUE7O0FBQ1IsVUFBTW9CLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFDbEJ0RixhQUFLLENBQUMsc0JBQUQsQ0FBTDs7QUFDQSxjQUFJLENBQUMySSxLQUFMLENBQVcsQ0FBQztBQUFFalYsY0FBSSxFQUFFO0FBQVIsU0FBRCxDQUFYO0FBQ0QsT0FIRDs7QUFLQSxVQUFJLFdBQVcsS0FBS3dRLFVBQXBCLEVBQWdDO0FBQzlCbEUsYUFBSyxDQUFDLDBCQUFELENBQUw7QUFDQXNGLGFBQUs7QUFDTixPQUhELE1BR087QUFDTDtBQUNBO0FBQ0F0RixhQUFLLENBQUMsc0NBQUQsQ0FBTDtBQUNBLGFBQUt0RCxJQUFMLENBQVUsTUFBVixFQUFrQjRJLEtBQWxCO0FBQ0Q7QUFDRjtBQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O1dBQ0UsZUFBTW9ELE9BQU4sRUFBZTtBQUFBOztBQUNiLFdBQUtaLFFBQUwsR0FBZ0IsS0FBaEI7QUFFQXBFLFlBQU0sQ0FBQ2dLLGFBQVAsQ0FBcUJoRixPQUFyQixFQUE4QixVQUFBakMsSUFBSSxFQUFJO0FBQ3BDLGNBQUksQ0FBQ2tILE9BQUwsQ0FBYWxILElBQWIsRUFBbUIsWUFBTTtBQUN2QixnQkFBSSxDQUFDcUIsUUFBTCxHQUFnQixJQUFoQjs7QUFDQSxnQkFBSSxDQUFDL1ksSUFBTCxDQUFVLE9BQVY7QUFDRCxTQUhEO0FBSUQsT0FMRDtBQU1EO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7OztXQUNFLGVBQU07QUFDSixVQUFJa1YsS0FBSyxHQUFHLEtBQUtBLEtBQUwsSUFBYyxFQUExQjtBQUNBLFVBQU0ySixNQUFNLEdBQUcsS0FBS2xULElBQUwsQ0FBVXFKLE1BQVYsR0FBbUIsT0FBbkIsR0FBNkIsTUFBNUM7QUFDQSxVQUFJQyxJQUFJLEdBQUcsRUFBWCxDQUhJLENBS0o7O0FBQ0EsVUFBSSxVQUFVLEtBQUt0SixJQUFMLENBQVVtVCxpQkFBeEIsRUFBMkM7QUFDekM1SixhQUFLLENBQUMsS0FBS3ZKLElBQUwsQ0FBVStKLGNBQVgsQ0FBTCxHQUFrQzBJLEtBQUssRUFBdkM7QUFDRDs7QUFFRCxVQUFJLENBQUMsS0FBS3ZCLGNBQU4sSUFBd0IsQ0FBQzNILEtBQUssQ0FBQzJCLEdBQW5DLEVBQXdDO0FBQ3RDM0IsYUFBSyxDQUFDNkosR0FBTixHQUFZLENBQVo7QUFDRDs7QUFFRDdKLFdBQUssR0FBR0wsT0FBTyxDQUFDbUssTUFBUixDQUFlOUosS0FBZixDQUFSLENBZEksQ0FnQko7O0FBQ0EsVUFDRSxLQUFLdkosSUFBTCxDQUFVc0osSUFBVixLQUNFLFlBQVk0SixNQUFaLElBQXNCMUwsTUFBTSxDQUFDLEtBQUt4SCxJQUFMLENBQVVzSixJQUFYLENBQU4sS0FBMkIsR0FBbEQsSUFDRSxXQUFXNEosTUFBWCxJQUFxQjFMLE1BQU0sQ0FBQyxLQUFLeEgsSUFBTCxDQUFVc0osSUFBWCxDQUFOLEtBQTJCLEVBRm5ELENBREYsRUFJRTtBQUNBQSxZQUFJLEdBQUcsTUFBTSxLQUFLdEosSUFBTCxDQUFVc0osSUFBdkI7QUFDRCxPQXZCRyxDQXlCSjs7O0FBQ0EsVUFBSUMsS0FBSyxDQUFDN2EsTUFBVixFQUFrQjtBQUNoQjZhLGFBQUssR0FBRyxNQUFNQSxLQUFkO0FBQ0Q7O0FBRUQsVUFBTStKLElBQUksR0FBRyxLQUFLdFQsSUFBTCxDQUFVbUosUUFBVixDQUFtQnRTLE9BQW5CLENBQTJCLEdBQTNCLE1BQW9DLENBQUMsQ0FBbEQ7QUFDQSxhQUNFcWMsTUFBTSxHQUNOLEtBREEsSUFFQ0ksSUFBSSxHQUFHLE1BQU0sS0FBS3RULElBQUwsQ0FBVW1KLFFBQWhCLEdBQTJCLEdBQTlCLEdBQW9DLEtBQUtuSixJQUFMLENBQVVtSixRQUZuRCxJQUdBRyxJQUhBLEdBSUEsS0FBS3RKLElBQUwsQ0FBVXZULElBSlYsR0FLQThjLEtBTkY7QUFRRDs7OztFQWxNbUJxRSxTOztBQXFNdEIvTixNQUFNLENBQUNDLE9BQVAsR0FBaUJrUCxPQUFqQixDOzs7Ozs7Ozs7O0FDNU1BLElBQU1DLFVBQVUsR0FBR3RaLG1CQUFPLENBQUMsZ0ZBQUQsQ0FBMUI7O0FBRUFrSyxNQUFNLENBQUNDLE9BQVAsR0FBaUI7QUFDZnlULFdBQVMsRUFBRXRFLFVBQVUsQ0FBQ3NFLFNBQVgsSUFBd0J0RSxVQUFVLENBQUN1RSxZQUQvQjtBQUVmQyx1QkFBcUIsRUFBRSxJQUZSO0FBR2ZDLG1CQUFpQixFQUFFO0FBSEosQ0FBakIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQSxJQUFNOUYsU0FBUyxHQUFHalksbUJBQU8sQ0FBQyxzRUFBRCxDQUF6Qjs7QUFDQSxJQUFNcVQsTUFBTSxHQUFHclQsbUJBQU8sQ0FBQyxzRUFBRCxDQUF0Qjs7QUFDQSxJQUFNdVQsT0FBTyxHQUFHdlQsbUJBQU8sQ0FBQyxnREFBRCxDQUF2Qjs7QUFDQSxJQUFNOGMsS0FBSyxHQUFHOWMsbUJBQU8sQ0FBQyw0Q0FBRCxDQUFyQjs7QUFDQSxlQUFpQkEsbUJBQU8sQ0FBQyw0REFBRCxDQUF4QjtBQUFBLElBQVFrYixJQUFSLFlBQVFBLElBQVI7O0FBQ0EsZ0JBSUlsYixtQkFBTyxDQUFDLGdIQUFELENBSlg7QUFBQSxJQUNFNGQsU0FERixhQUNFQSxTQURGO0FBQUEsSUFFRUUscUJBRkYsYUFFRUEscUJBRkY7QUFBQSxJQUdFQyxpQkFIRixhQUdFQSxpQkFIRjs7QUFNQSxJQUFNcE8sS0FBSyxHQUFHM1AsbUJBQU8sQ0FBQyxrREFBRCxDQUFQLENBQWlCLDRCQUFqQixDQUFkLEMsQ0FFQTs7O0FBQ0EsSUFBTWdlLGFBQWEsR0FDakIsT0FBT25QLFNBQVAsS0FBcUIsV0FBckIsSUFDQSxPQUFPQSxTQUFTLENBQUNvUCxPQUFqQixLQUE2QixRQUQ3QixJQUVBcFAsU0FBUyxDQUFDb1AsT0FBVixDQUFrQm5RLFdBQWxCLE9BQW9DLGFBSHRDOztJQUtNb1EsRTs7Ozs7QUFDSjtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRSxjQUFZN1QsSUFBWixFQUFrQjtBQUFBOztBQUFBOztBQUNoQiw4QkFBTUEsSUFBTjtBQUVBLFVBQUtrUixjQUFMLEdBQXNCLENBQUNsUixJQUFJLENBQUNpUixXQUE1QjtBQUhnQjtBQUlqQjtBQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7Ozs7O1NBQ0UsZUFBVztBQUNULGFBQU8sV0FBUDtBQUNEO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7OztXQUNFLGtCQUFTO0FBQ1AsVUFBSSxDQUFDLEtBQUs2QyxLQUFMLEVBQUwsRUFBbUI7QUFDakI7QUFDQTtBQUNEOztBQUVELFVBQU1qTCxHQUFHLEdBQUcsS0FBS0EsR0FBTCxFQUFaO0FBQ0EsVUFBTWtMLFNBQVMsR0FBRyxLQUFLL1QsSUFBTCxDQUFVK1QsU0FBNUIsQ0FQTyxDQVNQOztBQUNBLFVBQU0vVCxJQUFJLEdBQUcyVCxhQUFhLEdBQ3RCLEVBRHNCLEdBRXRCOUMsSUFBSSxDQUNGLEtBQUs3USxJQURILEVBRUYsT0FGRSxFQUdGLG1CQUhFLEVBSUYsS0FKRSxFQUtGLEtBTEUsRUFNRixZQU5FLEVBT0YsTUFQRSxFQVFGLElBUkUsRUFTRixTQVRFLEVBVUYsb0JBVkUsRUFXRixjQVhFLEVBWUYsaUJBWkUsRUFhRixRQWJFLEVBY0YsWUFkRSxFQWVGLFFBZkUsRUFnQkYscUJBaEJFLENBRlI7O0FBcUJBLFVBQUksS0FBS0EsSUFBTCxDQUFVd1IsWUFBZCxFQUE0QjtBQUMxQnhSLFlBQUksQ0FBQ2dVLE9BQUwsR0FBZSxLQUFLaFUsSUFBTCxDQUFVd1IsWUFBekI7QUFDRDs7QUFFRCxVQUFJO0FBQ0YsYUFBS3lDLEVBQUwsR0FDRVIscUJBQXFCLElBQUksQ0FBQ0UsYUFBMUIsR0FDSUksU0FBUyxHQUNQLElBQUlSLFNBQUosQ0FBYzFLLEdBQWQsRUFBbUJrTCxTQUFuQixDQURPLEdBRVAsSUFBSVIsU0FBSixDQUFjMUssR0FBZCxDQUhOLEdBSUksSUFBSTBLLFNBQUosQ0FBYzFLLEdBQWQsRUFBbUJrTCxTQUFuQixFQUE4Qi9ULElBQTlCLENBTE47QUFNRCxPQVBELENBT0UsT0FBT29NLEdBQVAsRUFBWTtBQUNaLGVBQU8sS0FBSy9YLElBQUwsQ0FBVSxPQUFWLEVBQW1CK1gsR0FBbkIsQ0FBUDtBQUNEOztBQUVELFdBQUs2SCxFQUFMLENBQVE5RixVQUFSLEdBQXFCLEtBQUtoRCxNQUFMLENBQVlnRCxVQUFaLElBQTBCdUYsaUJBQS9DO0FBRUEsV0FBS1EsaUJBQUw7QUFDRDtBQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7Ozs7V0FDRSw2QkFBb0I7QUFBQTs7QUFDbEIsV0FBS0QsRUFBTCxDQUFRRSxNQUFSLEdBQWlCLFlBQU07QUFDckIsWUFBSSxNQUFJLENBQUNuVSxJQUFMLENBQVVrTixTQUFkLEVBQXlCO0FBQ3ZCLGdCQUFJLENBQUMrRyxFQUFMLENBQVFHLE9BQVIsQ0FBZ0JqSCxLQUFoQjtBQUNEOztBQUNELGNBQUksQ0FBQ0YsTUFBTDtBQUNELE9BTEQ7O0FBTUEsV0FBS2dILEVBQUwsQ0FBUXpILE9BQVIsR0FBa0IsS0FBSzFCLE9BQUwsQ0FBYTloQixJQUFiLENBQWtCLElBQWxCLENBQWxCOztBQUNBLFdBQUtpckIsRUFBTCxDQUFRSSxTQUFSLEdBQW9CLFVBQUFDLEVBQUU7QUFBQSxlQUFJLE1BQUksQ0FBQ2hGLE1BQUwsQ0FBWWdGLEVBQUUsQ0FBQ3ZJLElBQWYsQ0FBSjtBQUFBLE9BQXRCOztBQUNBLFdBQUtrSSxFQUFMLENBQVEzSCxPQUFSLEdBQWtCLFVBQUEzWixDQUFDO0FBQUEsZUFBSSxNQUFJLENBQUMrWSxPQUFMLENBQWEsaUJBQWIsRUFBZ0MvWSxDQUFoQyxDQUFKO0FBQUEsT0FBbkI7QUFDRDtBQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztXQUNFLGVBQU1xYixPQUFOLEVBQWU7QUFBQTs7QUFDYixXQUFLWixRQUFMLEdBQWdCLEtBQWhCLENBRGEsQ0FHYjtBQUNBOztBQUphLGlDQUtKN2pCLENBTEk7QUFNWCxZQUFNb2pCLE1BQU0sR0FBR3FCLE9BQU8sQ0FBQ3prQixDQUFELENBQXRCO0FBQ0EsWUFBTWdyQixVQUFVLEdBQUdockIsQ0FBQyxLQUFLeWtCLE9BQU8sQ0FBQ3RmLE1BQVIsR0FBaUIsQ0FBMUM7QUFFQXNhLGNBQU0sQ0FBQ3dMLFlBQVAsQ0FBb0I3SCxNQUFwQixFQUE0QixNQUFJLENBQUN1RSxjQUFqQyxFQUFpRCxVQUFBbkYsSUFBSSxFQUFJO0FBQ3ZEO0FBQ0EsY0FBTS9MLElBQUksR0FBRyxFQUFiOztBQUNBLGNBQUksQ0FBQ3lULHFCQUFMLEVBQTRCO0FBQzFCLGdCQUFJOUcsTUFBTSxDQUFDL0osT0FBWCxFQUFvQjtBQUNsQjVDLGtCQUFJLENBQUNxTixRQUFMLEdBQWdCVixNQUFNLENBQUMvSixPQUFQLENBQWV5SyxRQUEvQjtBQUNEOztBQUVELGdCQUFJLE1BQUksQ0FBQ3JOLElBQUwsQ0FBVWtLLGlCQUFkLEVBQWlDO0FBQy9CLGtCQUFNakosR0FBRyxHQUNQLGFBQWEsT0FBTzhLLElBQXBCLEdBQTJCMEksTUFBTSxDQUFDQyxVQUFQLENBQWtCM0ksSUFBbEIsQ0FBM0IsR0FBcURBLElBQUksQ0FBQ3JkLE1BRDVEOztBQUVBLGtCQUFJdVMsR0FBRyxHQUFHLE1BQUksQ0FBQ2pCLElBQUwsQ0FBVWtLLGlCQUFWLENBQTRCQyxTQUF0QyxFQUFpRDtBQUMvQ25LLG9CQUFJLENBQUNxTixRQUFMLEdBQWdCLEtBQWhCO0FBQ0Q7QUFDRjtBQUNGLFdBZnNELENBaUJ2RDtBQUNBO0FBQ0E7OztBQUNBLGNBQUk7QUFDRixnQkFBSW9HLHFCQUFKLEVBQTJCO0FBQ3pCO0FBQ0Esb0JBQUksQ0FBQ1EsRUFBTCxDQUFRbkksSUFBUixDQUFhQyxJQUFiO0FBQ0QsYUFIRCxNQUdPO0FBQ0wsb0JBQUksQ0FBQ2tJLEVBQUwsQ0FBUW5JLElBQVIsQ0FBYUMsSUFBYixFQUFtQi9MLElBQW5CO0FBQ0Q7QUFDRixXQVBELENBT0UsT0FBT3JOLENBQVAsRUFBVTtBQUNWMlMsaUJBQUssQ0FBQyx1Q0FBRCxDQUFMO0FBQ0Q7O0FBRUQsY0FBSWlQLFVBQUosRUFBZ0I7QUFDZDtBQUNBO0FBQ0EzdEIsc0JBQVUsQ0FBQyxZQUFNO0FBQ2Ysb0JBQUksQ0FBQ3dtQixRQUFMLEdBQWdCLElBQWhCOztBQUNBLG9CQUFJLENBQUMvWSxJQUFMLENBQVUsT0FBVjtBQUNELGFBSFMsRUFHUCxDQUhPLENBQVY7QUFJRDtBQUNGLFNBdkNEO0FBVFc7O0FBS2IsV0FBSyxJQUFJOUssQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR3lrQixPQUFPLENBQUN0ZixNQUE1QixFQUFvQ25GLENBQUMsRUFBckMsRUFBeUM7QUFBQSxjQUFoQ0EsQ0FBZ0M7QUE0Q3hDO0FBQ0Y7QUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBOzs7O1dBQ0UsbUJBQVU7QUFDUnFrQixlQUFTLENBQUNsWCxTQUFWLENBQW9Cb1UsT0FBcEIsQ0FBNEJsVSxJQUE1QixDQUFpQyxJQUFqQztBQUNEO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7OztXQUNFLG1CQUFVO0FBQ1IsVUFBSSxPQUFPLEtBQUtxZCxFQUFaLEtBQW1CLFdBQXZCLEVBQW9DO0FBQ2xDLGFBQUtBLEVBQUwsQ0FBUXJKLEtBQVI7QUFDQSxhQUFLcUosRUFBTCxHQUFVLElBQVY7QUFDRDtBQUNGO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7OztXQUNFLGVBQU07QUFDSixVQUFJMUssS0FBSyxHQUFHLEtBQUtBLEtBQUwsSUFBYyxFQUExQjtBQUNBLFVBQU0ySixNQUFNLEdBQUcsS0FBS2xULElBQUwsQ0FBVXFKLE1BQVYsR0FBbUIsS0FBbkIsR0FBMkIsSUFBMUM7QUFDQSxVQUFJQyxJQUFJLEdBQUcsRUFBWCxDQUhJLENBS0o7O0FBQ0EsVUFDRSxLQUFLdEosSUFBTCxDQUFVc0osSUFBVixLQUNFLFVBQVU0SixNQUFWLElBQW9CMUwsTUFBTSxDQUFDLEtBQUt4SCxJQUFMLENBQVVzSixJQUFYLENBQU4sS0FBMkIsR0FBaEQsSUFDRSxTQUFTNEosTUFBVCxJQUFtQjFMLE1BQU0sQ0FBQyxLQUFLeEgsSUFBTCxDQUFVc0osSUFBWCxDQUFOLEtBQTJCLEVBRmpELENBREYsRUFJRTtBQUNBQSxZQUFJLEdBQUcsTUFBTSxLQUFLdEosSUFBTCxDQUFVc0osSUFBdkI7QUFDRCxPQVpHLENBY0o7OztBQUNBLFVBQUksS0FBS3RKLElBQUwsQ0FBVW1ULGlCQUFkLEVBQWlDO0FBQy9CNUosYUFBSyxDQUFDLEtBQUt2SixJQUFMLENBQVUrSixjQUFYLENBQUwsR0FBa0MwSSxLQUFLLEVBQXZDO0FBQ0QsT0FqQkcsQ0FtQko7OztBQUNBLFVBQUksQ0FBQyxLQUFLdkIsY0FBVixFQUEwQjtBQUN4QjNILGFBQUssQ0FBQzZKLEdBQU4sR0FBWSxDQUFaO0FBQ0Q7O0FBRUQ3SixXQUFLLEdBQUdMLE9BQU8sQ0FBQ21LLE1BQVIsQ0FBZTlKLEtBQWYsQ0FBUixDQXhCSSxDQTBCSjs7QUFDQSxVQUFJQSxLQUFLLENBQUM3YSxNQUFWLEVBQWtCO0FBQ2hCNmEsYUFBSyxHQUFHLE1BQU1BLEtBQWQ7QUFDRDs7QUFFRCxVQUFNK0osSUFBSSxHQUFHLEtBQUt0VCxJQUFMLENBQVVtSixRQUFWLENBQW1CdFMsT0FBbkIsQ0FBMkIsR0FBM0IsTUFBb0MsQ0FBQyxDQUFsRDtBQUNBLGFBQ0VxYyxNQUFNLEdBQ04sS0FEQSxJQUVDSSxJQUFJLEdBQUcsTUFBTSxLQUFLdFQsSUFBTCxDQUFVbUosUUFBaEIsR0FBMkIsR0FBOUIsR0FBb0MsS0FBS25KLElBQUwsQ0FBVW1KLFFBRm5ELElBR0FHLElBSEEsR0FJQSxLQUFLdEosSUFBTCxDQUFVdlQsSUFKVixHQUtBOGMsS0FORjtBQVFEO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O1dBQ0UsaUJBQVE7QUFDTixhQUNFLENBQUMsQ0FBQ2dLLFNBQUYsSUFDQSxFQUFFLGtCQUFrQkEsU0FBbEIsSUFBK0IsS0FBS3pvQixJQUFMLEtBQWMrb0IsRUFBRSxDQUFDbmQsU0FBSCxDQUFhNUwsSUFBNUQsQ0FGRjtBQUlEOzs7O0VBeE9jOGlCLFM7O0FBMk9qQi9OLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQitULEVBQWpCLEM7Ozs7Ozs7Ozs7QUM5UEFoVSxtQkFBQSxHQUFzQixVQUFDcEosR0FBRCxFQUFrQjtBQUFBLG9DQUFUa2UsSUFBUztBQUFUQSxRQUFTO0FBQUE7O0FBQ3RDLFNBQU9BLElBQUksQ0FBQ0MsTUFBTCxDQUFZLFVBQUNDLEdBQUQsRUFBTUMsQ0FBTixFQUFZO0FBQzdCLFFBQUlyZSxHQUFHLENBQUNNLGNBQUosQ0FBbUIrZCxDQUFuQixDQUFKLEVBQTJCO0FBQ3pCRCxTQUFHLENBQUNDLENBQUQsQ0FBSCxHQUFTcmUsR0FBRyxDQUFDcWUsQ0FBRCxDQUFaO0FBQ0Q7O0FBQ0QsV0FBT0QsR0FBUDtBQUNELEdBTE0sRUFLSixFQUxJLENBQVA7QUFNRCxDQVBELEM7Ozs7Ozs7Ozs7QUNBQTtBQUVBLElBQU1FLE9BQU8sR0FBR3BmLG1CQUFPLENBQUMsa0RBQUQsQ0FBdkI7O0FBQ0EsSUFBTXNaLFVBQVUsR0FBR3RaLG1CQUFPLENBQUMsK0VBQUQsQ0FBMUI7O0FBRUFrSyxNQUFNLENBQUNDLE9BQVAsR0FBaUIsVUFBU0UsSUFBVCxFQUFlO0FBQzlCLE1BQU02TyxPQUFPLEdBQUc3TyxJQUFJLENBQUM2TyxPQUFyQixDQUQ4QixDQUc5QjtBQUNBOztBQUNBLE1BQU1DLE9BQU8sR0FBRzlPLElBQUksQ0FBQzhPLE9BQXJCLENBTDhCLENBTzlCO0FBQ0E7O0FBQ0EsTUFBTXdELFVBQVUsR0FBR3RTLElBQUksQ0FBQ3NTLFVBQXhCLENBVDhCLENBVzlCOztBQUNBLE1BQUk7QUFDRixRQUFJLGdCQUFnQixPQUFPbEUsY0FBdkIsS0FBMEMsQ0FBQ1MsT0FBRCxJQUFZa0csT0FBdEQsQ0FBSixFQUFvRTtBQUNsRSxhQUFPLElBQUkzRyxjQUFKLEVBQVA7QUFDRDtBQUNGLEdBSkQsQ0FJRSxPQUFPemIsQ0FBUCxFQUFVLENBQUUsQ0FoQmdCLENBa0I5QjtBQUNBO0FBQ0E7OztBQUNBLE1BQUk7QUFDRixRQUFJLGdCQUFnQixPQUFPMGYsY0FBdkIsSUFBeUMsQ0FBQ3ZELE9BQTFDLElBQXFEd0QsVUFBekQsRUFBcUU7QUFDbkUsYUFBTyxJQUFJRCxjQUFKLEVBQVA7QUFDRDtBQUNGLEdBSkQsQ0FJRSxPQUFPMWYsQ0FBUCxFQUFVLENBQUU7O0FBRWQsTUFBSSxDQUFDa2MsT0FBTCxFQUFjO0FBQ1osUUFBSTtBQUNGLGFBQU8sSUFBSUksVUFBVSxDQUFDLENBQUMsUUFBRCxFQUFXK0YsTUFBWCxDQUFrQixRQUFsQixFQUE0QnhNLElBQTVCLENBQWlDLEdBQWpDLENBQUQsQ0FBZCxDQUNMLG1CQURLLENBQVA7QUFHRCxLQUpELENBSUUsT0FBTzdWLENBQVAsRUFBVSxDQUFFO0FBQ2Y7QUFDRixDQWxDRCxDOzs7Ozs7Ozs7O0FDTEEsSUFBTXNpQixZQUFZLEdBQUdsbEIsTUFBTSxDQUFDd2hCLE1BQVAsQ0FBYyxJQUFkLENBQXJCLEMsQ0FBMEM7O0FBQzFDMEQsWUFBWSxDQUFDLE1BQUQsQ0FBWixHQUF1QixHQUF2QjtBQUNBQSxZQUFZLENBQUMsT0FBRCxDQUFaLEdBQXdCLEdBQXhCO0FBQ0FBLFlBQVksQ0FBQyxNQUFELENBQVosR0FBdUIsR0FBdkI7QUFDQUEsWUFBWSxDQUFDLE1BQUQsQ0FBWixHQUF1QixHQUF2QjtBQUNBQSxZQUFZLENBQUMsU0FBRCxDQUFaLEdBQTBCLEdBQTFCO0FBQ0FBLFlBQVksQ0FBQyxTQUFELENBQVosR0FBMEIsR0FBMUI7QUFDQUEsWUFBWSxDQUFDLE1BQUQsQ0FBWixHQUF1QixHQUF2QjtBQUVBLElBQU1DLG9CQUFvQixHQUFHbmxCLE1BQU0sQ0FBQ3doQixNQUFQLENBQWMsSUFBZCxDQUE3QjtBQUNBeGhCLE1BQU0sQ0FBQzZXLElBQVAsQ0FBWXFPLFlBQVosRUFBMEJwTyxPQUExQixDQUFrQyxVQUFBN08sR0FBRyxFQUFJO0FBQ3ZDa2Qsc0JBQW9CLENBQUNELFlBQVksQ0FBQ2pkLEdBQUQsQ0FBYixDQUFwQixHQUEwQ0EsR0FBMUM7QUFDRCxDQUZEO0FBSUEsSUFBTW1kLFlBQVksR0FBRztBQUFFbmMsTUFBSSxFQUFFLE9BQVI7QUFBaUIrUyxNQUFJLEVBQUU7QUFBdkIsQ0FBckI7QUFFQWxNLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjtBQUNmbVYsY0FBWSxFQUFaQSxZQURlO0FBRWZDLHNCQUFvQixFQUFwQkEsb0JBRmU7QUFHZkMsY0FBWSxFQUFaQTtBQUhlLENBQWpCLEM7Ozs7Ozs7Ozs7QUNoQkEsZUFBK0N4ZixtQkFBTyxDQUFDLGlFQUFELENBQXREO0FBQUEsSUFBUXVmLG9CQUFSLFlBQVFBLG9CQUFSO0FBQUEsSUFBOEJDLFlBQTlCLFlBQThCQSxZQUE5Qjs7QUFFQSxJQUFNQyxxQkFBcUIsR0FBRyxPQUFPM1QsV0FBUCxLQUF1QixVQUFyRDtBQUVBLElBQUk0VCxhQUFKOztBQUNBLElBQUlELHFCQUFKLEVBQTJCO0FBQ3pCQyxlQUFhLEdBQUcxZixtQkFBTyxDQUFDLHVGQUFELENBQXZCO0FBQ0Q7O0FBRUQsSUFBTXVZLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNvSCxhQUFELEVBQWdCbkgsVUFBaEIsRUFBK0I7QUFDbEQsTUFBSSxPQUFPbUgsYUFBUCxLQUF5QixRQUE3QixFQUF1QztBQUNyQyxXQUFPO0FBQ0x0YyxVQUFJLEVBQUUsU0FERDtBQUVMK1MsVUFBSSxFQUFFd0osU0FBUyxDQUFDRCxhQUFELEVBQWdCbkgsVUFBaEI7QUFGVixLQUFQO0FBSUQ7O0FBQ0QsTUFBTW5WLElBQUksR0FBR3NjLGFBQWEsQ0FBQ0UsTUFBZCxDQUFxQixDQUFyQixDQUFiOztBQUNBLE1BQUl4YyxJQUFJLEtBQUssR0FBYixFQUFrQjtBQUNoQixXQUFPO0FBQ0xBLFVBQUksRUFBRSxTQUREO0FBRUwrUyxVQUFJLEVBQUUwSixrQkFBa0IsQ0FBQ0gsYUFBYSxDQUFDblUsU0FBZCxDQUF3QixDQUF4QixDQUFELEVBQTZCZ04sVUFBN0I7QUFGbkIsS0FBUDtBQUlEOztBQUNELE1BQU11SCxVQUFVLEdBQUdSLG9CQUFvQixDQUFDbGMsSUFBRCxDQUF2Qzs7QUFDQSxNQUFJLENBQUMwYyxVQUFMLEVBQWlCO0FBQ2YsV0FBT1AsWUFBUDtBQUNEOztBQUNELFNBQU9HLGFBQWEsQ0FBQzVtQixNQUFkLEdBQXVCLENBQXZCLEdBQ0g7QUFDRXNLLFFBQUksRUFBRWtjLG9CQUFvQixDQUFDbGMsSUFBRCxDQUQ1QjtBQUVFK1MsUUFBSSxFQUFFdUosYUFBYSxDQUFDblUsU0FBZCxDQUF3QixDQUF4QjtBQUZSLEdBREcsR0FLSDtBQUNFbkksUUFBSSxFQUFFa2Msb0JBQW9CLENBQUNsYyxJQUFEO0FBRDVCLEdBTEo7QUFRRCxDQTFCRDs7QUE0QkEsSUFBTXljLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQzFKLElBQUQsRUFBT29DLFVBQVAsRUFBc0I7QUFDL0MsTUFBSWtILGFBQUosRUFBbUI7QUFDakIsUUFBTU0sT0FBTyxHQUFHTixhQUFhLENBQUMvSyxNQUFkLENBQXFCeUIsSUFBckIsQ0FBaEI7QUFDQSxXQUFPd0osU0FBUyxDQUFDSSxPQUFELEVBQVV4SCxVQUFWLENBQWhCO0FBQ0QsR0FIRCxNQUdPO0FBQ0wsV0FBTztBQUFFak4sWUFBTSxFQUFFLElBQVY7QUFBZ0I2SyxVQUFJLEVBQUpBO0FBQWhCLEtBQVAsQ0FESyxDQUMwQjtBQUNoQztBQUNGLENBUEQ7O0FBU0EsSUFBTXdKLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUN4SixJQUFELEVBQU9vQyxVQUFQLEVBQXNCO0FBQ3RDLFVBQVFBLFVBQVI7QUFDRSxTQUFLLE1BQUw7QUFDRSxhQUFPcEMsSUFBSSxZQUFZdEssV0FBaEIsR0FBOEIsSUFBSW1VLElBQUosQ0FBUyxDQUFDN0osSUFBRCxDQUFULENBQTlCLEdBQWlEQSxJQUF4RDs7QUFDRixTQUFLLGFBQUw7QUFDQTtBQUNFLGFBQU9BLElBQVA7QUFBYTtBQUxqQjtBQU9ELENBUkQ7O0FBVUFsTSxNQUFNLENBQUNDLE9BQVAsR0FBaUJvTyxZQUFqQixDOzs7Ozs7Ozs7O0FDeERBLGVBQXlCdlksbUJBQU8sQ0FBQyxpRUFBRCxDQUFoQztBQUFBLElBQVFzZixZQUFSLFlBQVFBLFlBQVI7O0FBRUEsSUFBTVksY0FBYyxHQUNsQixPQUFPRCxJQUFQLEtBQWdCLFVBQWhCLElBQ0MsT0FBT0EsSUFBUCxLQUFnQixXQUFoQixJQUNDN2xCLE1BQU0sQ0FBQzJHLFNBQVAsQ0FBaUJDLFFBQWpCLENBQTBCQyxJQUExQixDQUErQmdmLElBQS9CLE1BQXlDLDBCQUg3QztBQUlBLElBQU1SLHFCQUFxQixHQUFHLE9BQU8zVCxXQUFQLEtBQXVCLFVBQXJELEMsQ0FFQTs7QUFDQSxJQUFNcVUsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQXJmLEdBQUcsRUFBSTtBQUNwQixTQUFPLE9BQU9nTCxXQUFXLENBQUNxVSxNQUFuQixLQUE4QixVQUE5QixHQUNIclUsV0FBVyxDQUFDcVUsTUFBWixDQUFtQnJmLEdBQW5CLENBREcsR0FFSEEsR0FBRyxJQUFJQSxHQUFHLENBQUNzZixNQUFKLFlBQXNCdFUsV0FGakM7QUFHRCxDQUpEOztBQU1BLElBQU0rUyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUFpQnRELGNBQWpCLEVBQWlDNEIsUUFBakMsRUFBOEM7QUFBQSxNQUEzQzlaLElBQTJDLFFBQTNDQSxJQUEyQztBQUFBLE1BQXJDK1MsSUFBcUMsUUFBckNBLElBQXFDOztBQUNqRSxNQUFJOEosY0FBYyxJQUFJOUosSUFBSSxZQUFZNkosSUFBdEMsRUFBNEM7QUFDMUMsUUFBSTFFLGNBQUosRUFBb0I7QUFDbEIsYUFBTzRCLFFBQVEsQ0FBQy9HLElBQUQsQ0FBZjtBQUNELEtBRkQsTUFFTztBQUNMLGFBQU9pSyxrQkFBa0IsQ0FBQ2pLLElBQUQsRUFBTytHLFFBQVAsQ0FBekI7QUFDRDtBQUNGLEdBTkQsTUFNTyxJQUNMc0MscUJBQXFCLEtBQ3BCckosSUFBSSxZQUFZdEssV0FBaEIsSUFBK0JxVSxNQUFNLENBQUMvSixJQUFELENBRGpCLENBRGhCLEVBR0w7QUFDQSxRQUFJbUYsY0FBSixFQUFvQjtBQUNsQixhQUFPNEIsUUFBUSxDQUFDL0csSUFBSSxZQUFZdEssV0FBaEIsR0FBOEJzSyxJQUE5QixHQUFxQ0EsSUFBSSxDQUFDZ0ssTUFBM0MsQ0FBZjtBQUNELEtBRkQsTUFFTztBQUNMLGFBQU9DLGtCQUFrQixDQUFDLElBQUlKLElBQUosQ0FBUyxDQUFDN0osSUFBRCxDQUFULENBQUQsRUFBbUIrRyxRQUFuQixDQUF6QjtBQUNEO0FBQ0YsR0FoQmdFLENBaUJqRTs7O0FBQ0EsU0FBT0EsUUFBUSxDQUFDbUMsWUFBWSxDQUFDamMsSUFBRCxDQUFaLElBQXNCK1MsSUFBSSxJQUFJLEVBQTlCLENBQUQsQ0FBZjtBQUNELENBbkJEOztBQXFCQSxJQUFNaUssa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDakssSUFBRCxFQUFPK0csUUFBUCxFQUFvQjtBQUM3QyxNQUFNbUQsVUFBVSxHQUFHLElBQUlDLFVBQUosRUFBbkI7O0FBQ0FELFlBQVUsQ0FBQ3JGLE1BQVgsR0FBb0IsWUFBVztBQUM3QixRQUFNdUYsT0FBTyxHQUFHRixVQUFVLENBQUNHLE1BQVgsQ0FBa0JoYixLQUFsQixDQUF3QixHQUF4QixFQUE2QixDQUE3QixDQUFoQjtBQUNBMFgsWUFBUSxDQUFDLE1BQU1xRCxPQUFQLENBQVI7QUFDRCxHQUhEOztBQUlBLFNBQU9GLFVBQVUsQ0FBQ0ksYUFBWCxDQUF5QnRLLElBQXpCLENBQVA7QUFDRCxDQVBEOztBQVNBbE0sTUFBTSxDQUFDQyxPQUFQLEdBQWlCMFUsWUFBakIsQzs7Ozs7Ozs7OztBQzdDQSxJQUFNQSxZQUFZLEdBQUc3ZSxtQkFBTyxDQUFDLG1GQUFELENBQTVCOztBQUNBLElBQU11WSxZQUFZLEdBQUd2WSxtQkFBTyxDQUFDLG1GQUFELENBQTVCOztBQUVBLElBQU0yZ0IsU0FBUyxHQUFHalQsTUFBTSxDQUFDa1QsWUFBUCxDQUFvQixFQUFwQixDQUFsQixDLENBQTJDOztBQUUzQyxJQUFNdkQsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDaEYsT0FBRCxFQUFVOEUsUUFBVixFQUF1QjtBQUMzQztBQUNBLE1BQU1wa0IsTUFBTSxHQUFHc2YsT0FBTyxDQUFDdGYsTUFBdkI7QUFDQSxNQUFNOG5CLGNBQWMsR0FBRyxJQUFJamdCLEtBQUosQ0FBVTdILE1BQVYsQ0FBdkI7QUFDQSxNQUFJK25CLEtBQUssR0FBRyxDQUFaO0FBRUF6SSxTQUFPLENBQUNuSCxPQUFSLENBQWdCLFVBQUM4RixNQUFELEVBQVNwakIsQ0FBVCxFQUFlO0FBQzdCO0FBQ0FpckIsZ0JBQVksQ0FBQzdILE1BQUQsRUFBUyxLQUFULEVBQWdCLFVBQUEySSxhQUFhLEVBQUk7QUFDM0NrQixvQkFBYyxDQUFDanRCLENBQUQsQ0FBZCxHQUFvQityQixhQUFwQjs7QUFDQSxVQUFJLEVBQUVtQixLQUFGLEtBQVkvbkIsTUFBaEIsRUFBd0I7QUFDdEJva0IsZ0JBQVEsQ0FBQzBELGNBQWMsQ0FBQ2hPLElBQWYsQ0FBb0I4TixTQUFwQixDQUFELENBQVI7QUFDRDtBQUNGLEtBTFcsQ0FBWjtBQU1ELEdBUkQ7QUFTRCxDQWZEOztBQWlCQSxJQUFNdkQsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDMkQsY0FBRCxFQUFpQnZJLFVBQWpCLEVBQWdDO0FBQ3BELE1BQU1xSSxjQUFjLEdBQUdFLGNBQWMsQ0FBQ3RiLEtBQWYsQ0FBcUJrYixTQUFyQixDQUF2QjtBQUNBLE1BQU10SSxPQUFPLEdBQUcsRUFBaEI7O0FBQ0EsT0FBSyxJQUFJemtCLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdpdEIsY0FBYyxDQUFDOW5CLE1BQW5DLEVBQTJDbkYsQ0FBQyxFQUE1QyxFQUFnRDtBQUM5QyxRQUFNb3RCLGFBQWEsR0FBR3pJLFlBQVksQ0FBQ3NJLGNBQWMsQ0FBQ2p0QixDQUFELENBQWYsRUFBb0I0a0IsVUFBcEIsQ0FBbEM7QUFDQUgsV0FBTyxDQUFDcmUsSUFBUixDQUFhZ25CLGFBQWI7O0FBQ0EsUUFBSUEsYUFBYSxDQUFDM2QsSUFBZCxLQUF1QixPQUEzQixFQUFvQztBQUNsQztBQUNEO0FBQ0Y7O0FBQ0QsU0FBT2dWLE9BQVA7QUFDRCxDQVhEOztBQWFBbk8sTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0FBQ2ZnSixVQUFRLEVBQUUsQ0FESztBQUVmMEwsY0FBWSxFQUFaQSxZQUZlO0FBR2Z4QixlQUFhLEVBQWJBLGFBSGU7QUFJZjlFLGNBQVksRUFBWkEsWUFKZTtBQUtmNkUsZUFBYSxFQUFiQTtBQUxlLENBQWpCLEM7Ozs7Ozs7Ozs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFJO0FBQ0ZsVCxRQUFNLENBQUNDLE9BQVAsR0FBaUIsT0FBT3NPLGNBQVAsS0FBMEIsV0FBMUIsSUFDZixxQkFBcUIsSUFBSUEsY0FBSixFQUR2QjtBQUVELENBSEQsQ0FHRSxPQUFPaEMsR0FBUCxFQUFZO0FBQ1o7QUFDQTtBQUNBdk0sUUFBTSxDQUFDQyxPQUFQLEdBQWlCLEtBQWpCO0FBQ0QsQzs7Ozs7Ozs7OztBQ2hCRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFJcEssZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFTMkMsSUFBVCxFQUFlO0FBQ3BDLE1BQUlBLElBQUksSUFBSS9ILFNBQVosRUFBdUI7QUFDdEIrSCxRQUFJLEdBQUcsSUFBSTNILElBQUosR0FBV0MsT0FBWCxFQUFQO0FBQ0E7QUFFRDs7O0FBQ0EsT0FBS2ltQixDQUFMLEdBQVMsR0FBVDtBQUNBLE9BQUtDLENBQUwsR0FBUyxHQUFUO0FBQ0EsT0FBS0MsUUFBTCxHQUFnQixVQUFoQjtBQUE4Qjs7QUFDOUIsT0FBS0MsVUFBTCxHQUFrQixVQUFsQjtBQUE4Qjs7QUFDOUIsT0FBS0MsVUFBTCxHQUFrQixVQUFsQjtBQUE4Qjs7QUFFOUIsT0FBS0MsRUFBTCxHQUFVLElBQUkxZ0IsS0FBSixDQUFVLEtBQUtxZ0IsQ0FBZixDQUFWO0FBQTZCOztBQUM3QixPQUFLTSxHQUFMLEdBQVMsS0FBS04sQ0FBTCxHQUFPLENBQWhCO0FBQW1COztBQUVuQixNQUFJdmUsSUFBSSxDQUFDOGUsV0FBTCxJQUFvQjVnQixLQUF4QixFQUErQjtBQUM5QixTQUFLNmdCLGFBQUwsQ0FBbUIvZSxJQUFuQixFQUF5QkEsSUFBSSxDQUFDM0osTUFBOUI7QUFDQSxHQUZELE1BR0s7QUFDSixTQUFLMm9CLFNBQUwsQ0FBZWhmLElBQWY7QUFDQTtBQUNELENBckJEO0FBdUJBOztBQUNBOzs7QUFDQTNDLGVBQWUsQ0FBQ2dCLFNBQWhCLENBQTBCMmdCLFNBQTFCLEdBQXNDLFVBQVN6YyxDQUFULEVBQVk7QUFDakQsT0FBS3FjLEVBQUwsQ0FBUSxDQUFSLElBQWFyYyxDQUFDLEtBQUssQ0FBbkI7O0FBQ0EsT0FBSyxLQUFLc2MsR0FBTCxHQUFTLENBQWQsRUFBaUIsS0FBS0EsR0FBTCxHQUFTLEtBQUtOLENBQS9CLEVBQWtDLEtBQUtNLEdBQUwsRUFBbEMsRUFBOEM7QUFDN0MsUUFBSXRjLENBQUMsR0FBRyxLQUFLcWMsRUFBTCxDQUFRLEtBQUtDLEdBQUwsR0FBUyxDQUFqQixJQUF1QixLQUFLRCxFQUFMLENBQVEsS0FBS0MsR0FBTCxHQUFTLENBQWpCLE1BQXdCLEVBQXZEO0FBQ0EsU0FBS0QsRUFBTCxDQUFRLEtBQUtDLEdBQWIsSUFBcUIsQ0FBRSxDQUFDLENBQUN0YyxDQUFDLEdBQUcsVUFBTCxNQUFxQixFQUF0QixJQUE0QixVQUE3QixJQUE0QyxFQUE3QyxJQUFtRCxDQUFDQSxDQUFDLEdBQUcsVUFBTCxJQUFtQixVQUF2RSxHQUNsQixLQUFLc2MsR0FEUDtBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBLFNBQUtELEVBQUwsQ0FBUSxLQUFLQyxHQUFiLE9BQXVCLENBQXZCO0FBQ0E7QUFDQTtBQUNELENBYkQ7QUFlQTs7QUFDQTs7QUFDQTs7QUFDQTs7O0FBQ0F4aEIsZUFBZSxDQUFDZ0IsU0FBaEIsQ0FBMEIwZ0IsYUFBMUIsR0FBMEMsVUFBU0UsUUFBVCxFQUFtQkMsVUFBbkIsRUFBK0I7QUFDeEUsTUFBSWh1QixDQUFKLEVBQU9vUyxDQUFQLEVBQVVtWixDQUFWO0FBQ0EsT0FBS3VDLFNBQUwsQ0FBZSxRQUFmO0FBQ0E5dEIsR0FBQyxHQUFDLENBQUY7QUFBS29TLEdBQUMsR0FBQyxDQUFGO0FBQ0xtWixHQUFDLEdBQUksS0FBSzhCLENBQUwsR0FBT1csVUFBUCxHQUFvQixLQUFLWCxDQUF6QixHQUE2QlcsVUFBbEM7O0FBQ0EsU0FBT3pDLENBQVAsRUFBVUEsQ0FBQyxFQUFYLEVBQWU7QUFDZCxRQUFJbGEsQ0FBQyxHQUFHLEtBQUtxYyxFQUFMLENBQVExdEIsQ0FBQyxHQUFDLENBQVYsSUFBZ0IsS0FBSzB0QixFQUFMLENBQVExdEIsQ0FBQyxHQUFDLENBQVYsTUFBaUIsRUFBekM7QUFDQSxTQUFLMHRCLEVBQUwsQ0FBUTF0QixDQUFSLElBQWEsQ0FBQyxLQUFLMHRCLEVBQUwsQ0FBUTF0QixDQUFSLElBQWMsQ0FBRSxDQUFDLENBQUNxUixDQUFDLEdBQUcsVUFBTCxNQUFxQixFQUF0QixJQUE0QixPQUE3QixJQUF5QyxFQUExQyxJQUFpRCxDQUFDQSxDQUFDLEdBQUcsVUFBTCxJQUFtQixPQUFuRixJQUNYMGMsUUFBUSxDQUFDM2IsQ0FBRCxDQURHLEdBQ0dBLENBRGhCO0FBQ21COztBQUNuQixTQUFLc2IsRUFBTCxDQUFRMXRCLENBQVIsT0FBZ0IsQ0FBaEI7QUFBbUI7O0FBQ25CQSxLQUFDO0FBQUlvUyxLQUFDOztBQUNOLFFBQUlwUyxDQUFDLElBQUUsS0FBS3F0QixDQUFaLEVBQWU7QUFBRSxXQUFLSyxFQUFMLENBQVEsQ0FBUixJQUFhLEtBQUtBLEVBQUwsQ0FBUSxLQUFLTCxDQUFMLEdBQU8sQ0FBZixDQUFiO0FBQWdDcnRCLE9BQUMsR0FBQyxDQUFGO0FBQU07O0FBQ3ZELFFBQUlvUyxDQUFDLElBQUU0YixVQUFQLEVBQW1CNWIsQ0FBQyxHQUFDLENBQUY7QUFDbkI7O0FBQ0QsT0FBS21aLENBQUMsR0FBQyxLQUFLOEIsQ0FBTCxHQUFPLENBQWQsRUFBaUI5QixDQUFqQixFQUFvQkEsQ0FBQyxFQUFyQixFQUF5QjtBQUN4QixRQUFJbGEsQ0FBQyxHQUFHLEtBQUtxYyxFQUFMLENBQVExdEIsQ0FBQyxHQUFDLENBQVYsSUFBZ0IsS0FBSzB0QixFQUFMLENBQVExdEIsQ0FBQyxHQUFDLENBQVYsTUFBaUIsRUFBekM7QUFDQSxTQUFLMHRCLEVBQUwsQ0FBUTF0QixDQUFSLElBQWEsQ0FBQyxLQUFLMHRCLEVBQUwsQ0FBUTF0QixDQUFSLElBQWMsQ0FBRSxDQUFDLENBQUNxUixDQUFDLEdBQUcsVUFBTCxNQUFxQixFQUF0QixJQUE0QixVQUE3QixJQUE0QyxFQUE3QyxJQUFtRCxDQUFDQSxDQUFDLEdBQUcsVUFBTCxJQUFtQixVQUFyRixJQUNYclIsQ0FERjtBQUNLOztBQUNMLFNBQUswdEIsRUFBTCxDQUFRMXRCLENBQVIsT0FBZ0IsQ0FBaEI7QUFBbUI7O0FBQ25CQSxLQUFDOztBQUNELFFBQUlBLENBQUMsSUFBRSxLQUFLcXRCLENBQVosRUFBZTtBQUFFLFdBQUtLLEVBQUwsQ0FBUSxDQUFSLElBQWEsS0FBS0EsRUFBTCxDQUFRLEtBQUtMLENBQUwsR0FBTyxDQUFmLENBQWI7QUFBZ0NydEIsT0FBQyxHQUFDLENBQUY7QUFBTTtBQUN2RDs7QUFFRCxPQUFLMHRCLEVBQUwsQ0FBUSxDQUFSLElBQWEsVUFBYjtBQUF5QjtBQUN6QixDQXhCRDtBQTBCQTs7QUFDQTs7O0FBQ0F2aEIsZUFBZSxDQUFDZ0IsU0FBaEIsQ0FBMEI4Z0IsVUFBMUIsR0FBdUMsWUFBVztBQUNqRCxNQUFJanZCLENBQUo7QUFDQSxNQUFJa3ZCLEtBQUssR0FBRyxJQUFJbGhCLEtBQUosQ0FBVSxHQUFWLEVBQWUsS0FBS3VnQixRQUFwQixDQUFaO0FBQ0E7O0FBRUEsTUFBSSxLQUFLSSxHQUFMLElBQVksS0FBS04sQ0FBckIsRUFBd0I7QUFBRTtBQUN6QixRQUFJYyxFQUFKO0FBRUEsUUFBSSxLQUFLUixHQUFMLElBQVksS0FBS04sQ0FBTCxHQUFPLENBQXZCO0FBQTJCO0FBQzFCLFdBQUtTLFNBQUwsQ0FBZSxJQUFmO0FBQXVCOztBQUV4QixTQUFLSyxFQUFFLEdBQUMsQ0FBUixFQUFVQSxFQUFFLEdBQUMsS0FBS2QsQ0FBTCxHQUFPLEtBQUtDLENBQXpCLEVBQTJCYSxFQUFFLEVBQTdCLEVBQWlDO0FBQ2hDbnZCLE9BQUMsR0FBSSxLQUFLMHVCLEVBQUwsQ0FBUVMsRUFBUixJQUFZLEtBQUtYLFVBQWxCLEdBQStCLEtBQUtFLEVBQUwsQ0FBUVMsRUFBRSxHQUFDLENBQVgsSUFBYyxLQUFLVixVQUF0RDtBQUNBLFdBQUtDLEVBQUwsQ0FBUVMsRUFBUixJQUFjLEtBQUtULEVBQUwsQ0FBUVMsRUFBRSxHQUFDLEtBQUtiLENBQWhCLElBQXNCdHVCLENBQUMsS0FBSyxDQUE1QixHQUFpQ2t2QixLQUFLLENBQUNsdkIsQ0FBQyxHQUFHLEdBQUwsQ0FBcEQ7QUFDQTs7QUFDRCxXQUFNbXZCLEVBQUUsR0FBQyxLQUFLZCxDQUFMLEdBQU8sQ0FBaEIsRUFBa0JjLEVBQUUsRUFBcEIsRUFBd0I7QUFDdkJudkIsT0FBQyxHQUFJLEtBQUswdUIsRUFBTCxDQUFRUyxFQUFSLElBQVksS0FBS1gsVUFBbEIsR0FBK0IsS0FBS0UsRUFBTCxDQUFRUyxFQUFFLEdBQUMsQ0FBWCxJQUFjLEtBQUtWLFVBQXREO0FBQ0EsV0FBS0MsRUFBTCxDQUFRUyxFQUFSLElBQWMsS0FBS1QsRUFBTCxDQUFRUyxFQUFFLElBQUUsS0FBS2IsQ0FBTCxHQUFPLEtBQUtELENBQWQsQ0FBVixJQUErQnJ1QixDQUFDLEtBQUssQ0FBckMsR0FBMENrdkIsS0FBSyxDQUFDbHZCLENBQUMsR0FBRyxHQUFMLENBQTdEO0FBQ0E7O0FBQ0RBLEtBQUMsR0FBSSxLQUFLMHVCLEVBQUwsQ0FBUSxLQUFLTCxDQUFMLEdBQU8sQ0FBZixJQUFrQixLQUFLRyxVQUF4QixHQUFxQyxLQUFLRSxFQUFMLENBQVEsQ0FBUixJQUFXLEtBQUtELFVBQXpEO0FBQ0EsU0FBS0MsRUFBTCxDQUFRLEtBQUtMLENBQUwsR0FBTyxDQUFmLElBQW9CLEtBQUtLLEVBQUwsQ0FBUSxLQUFLSixDQUFMLEdBQU8sQ0FBZixJQUFxQnR1QixDQUFDLEtBQUssQ0FBM0IsR0FBZ0NrdkIsS0FBSyxDQUFDbHZCLENBQUMsR0FBRyxHQUFMLENBQXpEO0FBRUEsU0FBSzJ1QixHQUFMLEdBQVcsQ0FBWDtBQUNBOztBQUVEM3VCLEdBQUMsR0FBRyxLQUFLMHVCLEVBQUwsQ0FBUSxLQUFLQyxHQUFMLEVBQVIsQ0FBSjtBQUVBOztBQUNBM3VCLEdBQUMsSUFBS0EsQ0FBQyxLQUFLLEVBQVo7QUFDQUEsR0FBQyxJQUFLQSxDQUFDLElBQUksQ0FBTixHQUFXLFVBQWhCO0FBQ0FBLEdBQUMsSUFBS0EsQ0FBQyxJQUFJLEVBQU4sR0FBWSxVQUFqQjtBQUNBQSxHQUFDLElBQUtBLENBQUMsS0FBSyxFQUFaO0FBRUEsU0FBT0EsQ0FBQyxLQUFLLENBQWI7QUFDQSxDQWxDRDtBQW9DQTs7QUFDQTs7O0FBQ0FtTixlQUFlLENBQUNnQixTQUFoQixDQUEwQmloQixZQUExQixHQUF5QyxZQUFXO0FBQ25ELFNBQVEsS0FBS0gsVUFBTCxPQUFvQixDQUE1QjtBQUNBLENBRkQ7QUFJQTs7QUFDQTs7O0FBQ0E5aEIsZUFBZSxDQUFDZ0IsU0FBaEIsQ0FBMEJraEIsV0FBMUIsR0FBd0MsWUFBVztBQUNsRCxTQUFPLEtBQUtKLFVBQUwsTUFBbUIsTUFBSSxZQUF2QixDQUFQO0FBQ0E7QUFDQSxDQUhEO0FBS0E7OztBQUNBOWhCLGVBQWUsQ0FBQ2dCLFNBQWhCLENBQTBCNEIsTUFBMUIsR0FBbUMsWUFBVztBQUM3QyxTQUFPLEtBQUtrZixVQUFMLE1BQW1CLE1BQUksWUFBdkIsQ0FBUDtBQUNBO0FBQ0EsQ0FIRDtBQUtBOztBQUNBOzs7QUFDQTloQixlQUFlLENBQUNnQixTQUFoQixDQUEwQm1oQixXQUExQixHQUF3QyxZQUFXO0FBQ2xELFNBQU8sQ0FBQyxLQUFLTCxVQUFMLEtBQW9CLEdBQXJCLEtBQTJCLE1BQUksWUFBL0IsQ0FBUDtBQUNBO0FBQ0EsQ0FIRDtBQUtBOztBQUNBOzs7QUFDQTloQixlQUFlLENBQUNnQixTQUFoQixDQUEwQm9oQixXQUExQixHQUF3QyxZQUFXO0FBQ2xELE1BQUl4aEIsQ0FBQyxHQUFDLEtBQUtraEIsVUFBTCxPQUFvQixDQUExQjtBQUFBLE1BQTZCamQsQ0FBQyxHQUFDLEtBQUtpZCxVQUFMLE9BQW9CLENBQW5EO0FBQ0EsU0FBTSxDQUFDbGhCLENBQUMsR0FBQyxVQUFGLEdBQWFpRSxDQUFkLEtBQWtCLE1BQUksa0JBQXRCLENBQU47QUFDQSxDQUhEO0FBS0E7OztBQUVBc0YsTUFBTSxDQUFDQyxPQUFQLEdBQWlCcEssZUFBakIsQzs7Ozs7Ozs7OztBQ2pOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBb0ssY0FBQSxHQUFpQixVQUFVckosR0FBVixFQUFlO0FBQzlCLE1BQUlhLEdBQUcsR0FBRyxFQUFWOztBQUVBLE9BQUssSUFBSS9OLENBQVQsSUFBY2tOLEdBQWQsRUFBbUI7QUFDakIsUUFBSUEsR0FBRyxDQUFDTSxjQUFKLENBQW1CeE4sQ0FBbkIsQ0FBSixFQUEyQjtBQUN6QixVQUFJK04sR0FBRyxDQUFDNUksTUFBUixFQUFnQjRJLEdBQUcsSUFBSSxHQUFQO0FBQ2hCQSxTQUFHLElBQUl5Z0Isa0JBQWtCLENBQUN4dUIsQ0FBRCxDQUFsQixHQUF3QixHQUF4QixHQUE4Qnd1QixrQkFBa0IsQ0FBQ3RoQixHQUFHLENBQUNsTixDQUFELENBQUosQ0FBdkQ7QUFDRDtBQUNGOztBQUVELFNBQU8rTixHQUFQO0FBQ0QsQ0FYRDtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUF3SSxjQUFBLEdBQWlCLFVBQVNrWSxFQUFULEVBQVk7QUFDM0IsTUFBSUMsR0FBRyxHQUFHLEVBQVY7QUFDQSxNQUFJQyxLQUFLLEdBQUdGLEVBQUUsQ0FBQzVjLEtBQUgsQ0FBUyxHQUFULENBQVo7O0FBQ0EsT0FBSyxJQUFJN1IsQ0FBQyxHQUFHLENBQVIsRUFBV3NSLENBQUMsR0FBR3FkLEtBQUssQ0FBQ3hwQixNQUExQixFQUFrQ25GLENBQUMsR0FBR3NSLENBQXRDLEVBQXlDdFIsQ0FBQyxFQUExQyxFQUE4QztBQUM1QyxRQUFJNHVCLElBQUksR0FBR0QsS0FBSyxDQUFDM3VCLENBQUQsQ0FBTCxDQUFTNlIsS0FBVCxDQUFlLEdBQWYsQ0FBWDtBQUNBNmMsT0FBRyxDQUFDRyxrQkFBa0IsQ0FBQ0QsSUFBSSxDQUFDLENBQUQsQ0FBTCxDQUFuQixDQUFILEdBQW1DQyxrQkFBa0IsQ0FBQ0QsSUFBSSxDQUFDLENBQUQsQ0FBTCxDQUFyRDtBQUNEOztBQUNELFNBQU9GLEdBQVA7QUFDRCxDQVJELEM7Ozs7Ozs7Ozs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBSUksRUFBRSxHQUFHLHlPQUFUO0FBRUEsSUFBSUMsS0FBSyxHQUFHLENBQ1IsUUFEUSxFQUNFLFVBREYsRUFDYyxXQURkLEVBQzJCLFVBRDNCLEVBQ3VDLE1BRHZDLEVBQytDLFVBRC9DLEVBQzJELE1BRDNELEVBQ21FLE1BRG5FLEVBQzJFLFVBRDNFLEVBQ3VGLE1BRHZGLEVBQytGLFdBRC9GLEVBQzRHLE1BRDVHLEVBQ29ILE9BRHBILEVBQzZILFFBRDdILENBQVo7O0FBSUF6WSxNQUFNLENBQUNDLE9BQVAsR0FBaUIsU0FBU21KLFFBQVQsQ0FBa0IzUixHQUFsQixFQUF1QjtBQUNwQyxNQUFJcUYsR0FBRyxHQUFHckYsR0FBVjtBQUFBLE1BQ0lpRCxDQUFDLEdBQUdqRCxHQUFHLENBQUNULE9BQUosQ0FBWSxHQUFaLENBRFI7QUFBQSxNQUVJbEUsQ0FBQyxHQUFHMkUsR0FBRyxDQUFDVCxPQUFKLENBQVksR0FBWixDQUZSOztBQUlBLE1BQUkwRCxDQUFDLElBQUksQ0FBQyxDQUFOLElBQVc1SCxDQUFDLElBQUksQ0FBQyxDQUFyQixFQUF3QjtBQUNwQjJFLE9BQUcsR0FBR0EsR0FBRyxDQUFDNkosU0FBSixDQUFjLENBQWQsRUFBaUI1RyxDQUFqQixJQUFzQmpELEdBQUcsQ0FBQzZKLFNBQUosQ0FBYzVHLENBQWQsRUFBaUI1SCxDQUFqQixFQUFvQndILE9BQXBCLENBQTRCLElBQTVCLEVBQWtDLEdBQWxDLENBQXRCLEdBQStEN0MsR0FBRyxDQUFDNkosU0FBSixDQUFjeE8sQ0FBZCxFQUFpQjJFLEdBQUcsQ0FBQzVJLE1BQXJCLENBQXJFO0FBQ0g7O0FBRUQsTUFBSTBMLENBQUMsR0FBR2llLEVBQUUsQ0FBQ3RlLElBQUgsQ0FBUXpDLEdBQUcsSUFBSSxFQUFmLENBQVI7QUFBQSxNQUNJdVIsR0FBRyxHQUFHLEVBRFY7QUFBQSxNQUVJdGYsQ0FBQyxHQUFHLEVBRlI7O0FBSUEsU0FBT0EsQ0FBQyxFQUFSLEVBQVk7QUFDUnNmLE9BQUcsQ0FBQ3lQLEtBQUssQ0FBQy91QixDQUFELENBQU4sQ0FBSCxHQUFnQjZRLENBQUMsQ0FBQzdRLENBQUQsQ0FBRCxJQUFRLEVBQXhCO0FBQ0g7O0FBRUQsTUFBSWdSLENBQUMsSUFBSSxDQUFDLENBQU4sSUFBVzVILENBQUMsSUFBSSxDQUFDLENBQXJCLEVBQXdCO0FBQ3BCa1csT0FBRyxDQUFDMFAsTUFBSixHQUFhNWIsR0FBYjtBQUNBa00sT0FBRyxDQUFDTyxJQUFKLEdBQVdQLEdBQUcsQ0FBQ08sSUFBSixDQUFTakksU0FBVCxDQUFtQixDQUFuQixFQUFzQjBILEdBQUcsQ0FBQ08sSUFBSixDQUFTMWEsTUFBVCxHQUFrQixDQUF4QyxFQUEyQ3lMLE9BQTNDLENBQW1ELElBQW5ELEVBQXlELEdBQXpELENBQVg7QUFDQTBPLE9BQUcsQ0FBQzJQLFNBQUosR0FBZ0IzUCxHQUFHLENBQUMyUCxTQUFKLENBQWNyZSxPQUFkLENBQXNCLEdBQXRCLEVBQTJCLEVBQTNCLEVBQStCQSxPQUEvQixDQUF1QyxHQUF2QyxFQUE0QyxFQUE1QyxFQUFnREEsT0FBaEQsQ0FBd0QsSUFBeEQsRUFBOEQsR0FBOUQsQ0FBaEI7QUFDQTBPLE9BQUcsQ0FBQzRQLE9BQUosR0FBYyxJQUFkO0FBQ0g7O0FBRUQ1UCxLQUFHLENBQUM2UCxTQUFKLEdBQWdCQSxTQUFTLENBQUM3UCxHQUFELEVBQU1BLEdBQUcsQ0FBQyxNQUFELENBQVQsQ0FBekI7QUFDQUEsS0FBRyxDQUFDOFAsUUFBSixHQUFlQSxRQUFRLENBQUM5UCxHQUFELEVBQU1BLEdBQUcsQ0FBQyxPQUFELENBQVQsQ0FBdkI7QUFFQSxTQUFPQSxHQUFQO0FBQ0gsQ0E1QkQ7O0FBOEJBLFNBQVM2UCxTQUFULENBQW1CamlCLEdBQW5CLEVBQXdCaEssSUFBeEIsRUFBOEI7QUFDMUIsTUFBSW1zQixJQUFJLEdBQUcsVUFBWDtBQUFBLE1BQ0k5UixLQUFLLEdBQUdyYSxJQUFJLENBQUMwTixPQUFMLENBQWF5ZSxJQUFiLEVBQW1CLEdBQW5CLEVBQXdCeGQsS0FBeEIsQ0FBOEIsR0FBOUIsQ0FEWjs7QUFHQSxNQUFJM08sSUFBSSxDQUFDNmIsTUFBTCxDQUFZLENBQVosRUFBZSxDQUFmLEtBQXFCLEdBQXJCLElBQTRCN2IsSUFBSSxDQUFDaUMsTUFBTCxLQUFnQixDQUFoRCxFQUFtRDtBQUMvQ29ZLFNBQUssQ0FBQ3hFLE1BQU4sQ0FBYSxDQUFiLEVBQWdCLENBQWhCO0FBQ0g7O0FBQ0QsTUFBSTdWLElBQUksQ0FBQzZiLE1BQUwsQ0FBWTdiLElBQUksQ0FBQ2lDLE1BQUwsR0FBYyxDQUExQixFQUE2QixDQUE3QixLQUFtQyxHQUF2QyxFQUE0QztBQUN4Q29ZLFNBQUssQ0FBQ3hFLE1BQU4sQ0FBYXdFLEtBQUssQ0FBQ3BZLE1BQU4sR0FBZSxDQUE1QixFQUErQixDQUEvQjtBQUNIOztBQUVELFNBQU9vWSxLQUFQO0FBQ0g7O0FBRUQsU0FBUzZSLFFBQVQsQ0FBa0I5UCxHQUFsQixFQUF1QlUsS0FBdkIsRUFBOEI7QUFDMUIsTUFBSXdDLElBQUksR0FBRyxFQUFYO0FBRUF4QyxPQUFLLENBQUNwUCxPQUFOLENBQWMsMkJBQWQsRUFBMkMsVUFBVTBlLEVBQVYsRUFBYzlULEVBQWQsRUFBa0IrVCxFQUFsQixFQUFzQjtBQUM3RCxRQUFJL1QsRUFBSixFQUFRO0FBQ0pnSCxVQUFJLENBQUNoSCxFQUFELENBQUosR0FBVytULEVBQVg7QUFDSDtBQUNKLEdBSkQ7QUFNQSxTQUFPL00sSUFBUDtBQUNILEM7Ozs7Ozs7Ozs7OztBQ25FRCxJQUFNZ04sVUFBVSxHQUFHO0FBQ2pCemlCLEdBQUMsRUFEZ0I7QUFFakI2TyxHQUFDLEVBRmdCO0FBR2pCeEssR0FBQyxFQUhnQjtBQUlqQkUsR0FBQyxFQUpnQjtBQUtqQlQsR0FBQyxFQUxnQjtBQU1qQlksR0FBQyxFQU5nQjtBQU9qQkosR0FBQyxFQVBnQjtBQVFqQkssR0FBQyxFQVJnQjtBQVNqQmlMLEdBQUMsRUFUZ0I7QUFVakI4UyxHQUFDLEVBQUU7QUFWYyxDQUFuQjtBQWFBLElBQU1DLGVBQWUsR0FBckI7QUFFQSxJQUFNQyxNQUFNLEdBQVo7O0FBRUEsMkJBQTJCO0FBQ3pCLE1BQU1DLE9BQU8sR0FBR2xqQixJQUFJLENBQUpBLE1BQWhCLE1BQWdCQSxDQUFoQjtBQUNBLFNBQU9rakIsT0FBTyxHQUFHQSxPQUFPLENBQVBBLElBQUgsTUFBR0EsQ0FBSCxHQUFkO0FBQ0Q7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxxQkFBcUI7QUFDbkIsTUFBTXBOLElBQUksR0FBVjtBQUNBLE1BQU1oUixDQUFDLEdBQUdzSSxNQUFNLENBQU5BLElBQU0sQ0FBTkEsQ0FGUyxJQUVUQSxFQUFWLENBRm1COztBQUtuQixNQUFJdEksQ0FBQyxDQUFEQSxDQUFDLENBQURBLFlBQWdCQSxDQUFDLENBQURBLENBQUMsQ0FBREEsS0FBcEIsS0FBa0M7QUFDaEM7QUFDRDs7QUFFREEsR0FBQyxDQUFEQSx5QkFBMkIsNEJBQXNCO0FBQy9DLFFBQUkvQixJQUFJLEdBQUdvZ0IsT0FBTyxDQUFsQixXQUFXQSxFQUFYO0FBQ0EsUUFBSUMsT0FBTyxHQUFHQyxXQUFXLENBQXpCLElBQXlCLENBQXpCO0FBQ0EsUUFBSUMsVUFBVSxHQUhpQyxPQUcvQyxDQUgrQzs7QUFLL0MsUUFBSXZnQixJQUFJLEtBQUpBLE9BQWdCcWdCLE9BQU8sQ0FBUEEsU0FBcEIsR0FBd0M7QUFDdEN0TixVQUFJLENBQUpBLEtBQVUsb0JBQW9Cc04sT0FBTyxDQUFQQSxVQUE5QnROLENBQThCc04sQ0FBcEIsQ0FBVnROO0FBQ0EvUyxVQUFJLEdBQUpBO0FBQ0F1Z0IsZ0JBQVUsR0FBR0EsVUFBVSxLQUFWQSxZQUFiQTtBQVI2Qzs7O0FBWS9DLFFBQUlGLE9BQU8sQ0FBUEEsU0FBaUJOLFVBQVUsQ0FBL0IsSUFBK0IsQ0FBL0IsRUFBdUM7QUFDckM7QUFDRDs7QUFFRGhOLFFBQUksQ0FBSkEsS0FBVSxvQkFBb0JzTixPQUFPLENBQVBBLFVBQWtCTixVQUFVLENBaEJYLElBZ0JXLENBQTVCTSxDQUFwQixDQUFWdE4sRUFoQitDOzs7OztBQXNCL0MsV0FDRXNOLE9BQU8sQ0FBUEEsVUFBa0JOLFVBQVUsQ0FBNUJNLElBQTRCLENBQTVCQSxJQUNBQSxPQUFPLENBRFBBLFVBRUFOLFVBQVUsQ0FIWixJQUdZLENBSFosRUFJRTtBQUNBaE4sVUFBSSxDQUFKQSxLQUFVLG9CQUFvQnNOLE9BQU8sQ0FBUEEsVUFBa0JOLFVBQVUsQ0FBMURoTixJQUEwRCxDQUE1QnNOLENBQXBCLENBQVZ0TjtBQUNEOztBQUVEO0FBOUJGaFI7QUFnQ0E7QUFDRDs7QUFFRCxhQUFjLEdBQWQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLHlDQUF5QztBQUN2QyxNQUFNek8sTUFBTSxHQUFHb0YsTUFBTSxDQUFOQSx1QkFBZixRQUFlQSxDQUFmO0FBQ0EsTUFBTTRJLENBQUMsR0FBR2hPLE1BQU0sQ0FBTkEsV0FBVixJQUFVQSxDQUFWO0FBQ0EsTUFBTXlPLENBQUMsR0FBRyxJQUFJckosTUFBTSxDQUFWLE9BQVYsV0FBVSxDQUFWO0FBQ0E0SSxHQUFDLENBQURBO0FBQ0FBLEdBQUMsQ0FBREE7QUFDQUEsR0FBQyxDQUFEQTtBQUNBLE1BQU1rZixPQUFPLEdBQUdsZixDQUFDLENBQURBLHNCQUFoQixDQUFnQkEsQ0FBaEI7QUFDQSxTQUFPa2YsT0FBTyxDQUFQQSxZQVJnQyxHQVF2QyxDQVJ1QztBQVN4Qzs7QUFFRCxtQ0FBbUM7QUFDakMsTUFBTUMsRUFBRSxHQUFHbHNCLEtBQUssQ0FBTEEsSUFBVXpGLElBQUksQ0FBSkEsSUFBVnlGLEtBQVV6RixDQUFWeUYsR0FBNEJBLEtBQUssQ0FBTEEsSUFBVXpGLElBQUksQ0FBSkEsSUFBakQsS0FBaURBLENBQWpEO0FBQ0EsTUFBTTR4QixFQUFFLEdBQUduc0IsS0FBSyxDQUFMQSxJQUFVekYsSUFBSSxDQUFKQSxJQUFWeUYsS0FBVXpGLENBQVZ5RixHQUE0QkEsS0FBSyxDQUFMQSxJQUFVekYsSUFBSSxDQUFKQSxJQUFqRCxLQUFpREEsQ0FBakQ7QUFDQXlGLE9BQUssQ0FBTEE7QUFDQUEsT0FBSyxDQUFMQTtBQUNEOztBQUVELHVDQUF1QztBQUNyQ0EsT0FBSyxDQUFMQTtBQUNBQSxPQUFLLENBQUxBO0FBQ0Q7O0FBRUQsOEJBQThCO0FBQzVCQSxPQUFLLENBQUxBO0FBQ0FBLE9BQUssQ0FBTEE7QUFDRDs7QUFFRCxnQ0FBZ0M7QUFDOUIsTUFBSSxpQ0FBaUMsQ0FBQ21FLE1BQU0sQ0FBNUMsMEJBQXVFO0FBQ3JFO0FBQ0Q7O0FBQ0QsTUFBSUEsTUFBTSxDQUFOQSxVQUFpQmlvQix1QkFBdUIsQ0FBNUMsTUFBNEMsQ0FBNUMsRUFBc0Q7QUFDcEQ7QUFDRDs7QUFHSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFiZ0MsTUFjeEJqdEIsTUFkd0I7QUFlNUIsMEJBQWtCO0FBQUE7O0FBQ2hCOztBQUNBLFVBQUlELElBQUksSUFBSUEsSUFBSSxZQUFoQixRQUFvQztBQUFBOztBQUNsQyx1RkFBc0JBLElBQUksQ0FBMUI7QUFERixhQUVPLFVBQVU7QUFDZix3QkFBZ0JtdEIsU0FBUyxDQUF6QixJQUF5QixDQUF6QjtBQUNEO0FBQ0Y7O0FBdEIyQjtBQUFBO0FBQUEsYUF3QjVCLHVCQUFjO0FBQ1osWUFBSW50QixJQUFJLElBQUlBLElBQUksWUFBaEIsUUFBb0M7QUFBQTs7QUFDbEMsMkZBQXNCQSxJQUFJLENBQTFCO0FBQ0Q7QUFDRjtBQTVCMkI7QUFBQTtBQUFBLGFBOEI1QixzQkFBYTtBQUNYLDJCQUFtQixTQUFuQixDQUFtQixDQUFuQjtBQUNEO0FBaEMyQjtBQUFBO0FBQUEsYUFrQzVCLHNCQUFhO0FBQ1gsMkJBQW1CLFNBQW5CLENBQW1CLENBQW5CO0FBQ0Q7QUFwQzJCO0FBQUE7QUFBQSxhQXNDNUIsdUNBQThCO0FBQzVCLDJCQUFtQiw0QkFBNEIsQ0FBQyxDQUFoRCxHQUFtQixDQUFuQjtBQUNEO0FBeEMyQjtBQUFBO0FBQUEsYUEwQzVCLGtDQUF5QjtBQUN2QiwyQkFBbUIsdUJBQW5CLENBQW1CLENBQW5CO0FBQ0Q7QUE1QzJCO0FBQUE7QUFBQSxhQThDNUIsdURBQThDO0FBQzVDLDJCQUFtQix1Q0FBdUMsQ0FBQyxDQUEzRCxHQUFtQixDQUFuQjtBQUNEO0FBaEQyQjtBQUFBO0FBQUEsYUFrRDVCLHFCQUFZO0FBQ1YsMkJBQW1CLENBQW5CLEdBQW1CLENBQW5CO0FBQ0Q7QUFwRDJCO0FBQUE7QUFBQSxhQXNENUIscURBQTRDO0FBQzFDLDJCQUFtQixpQ0FBbkIsQ0FBbUIsQ0FBbkI7QUFDRDtBQXhEMkI7QUFBQTtBQUFBLGFBMEQ1QiwwQ0FBaUM7QUFDL0IsMkJBQW1CLG1CQUFuQixDQUFtQixDQUFuQjtBQUNEO0FBNUQyQjtBQUFBO0FBQUEsYUE4RDVCLG1DQUEwQjtBQUN4QiwyQkFBbUIsbUJBQW5CLE1BQW1CLENBQW5CO0FBQ0Q7QUFoRTJCOztBQUFBO0FBQUE7O0FBbUU5Qix1Q0FBcUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQUlvdEIsVUFBVSxHQUFHO0FBQUV2eEIsT0FBQyxFQUFIO0FBQVFDLE9BQUMsRUFBRTtBQUFYLEtBQWpCO0FBQ0EsUUFBTXV4QixZQUFZLEdBQUc7QUFBRXh4QixPQUFDLEVBQUg7QUFBUUMsT0FBQyxFQUFFO0FBQVgsS0FBckI7QUFFQStELFVBQU0sQ0FBTkE7O0FBQ0EsU0FBSyxJQUFJL0MsQ0FBQyxHQUFWLEdBQWdCQSxDQUFDLEdBQUd3d0IsUUFBUSxDQUE1QixRQUFxQyxFQUFyQyxHQUEwQztBQUN4QyxVQUFNbmYsQ0FBQyxHQUFHbWYsUUFBUSxDQUFsQixDQUFrQixDQUFsQjtBQUNBQyxjQUFRLEdBQUdwZixDQUFDLENBRjRCLENBRTVCLENBQVpvZixDQUZ3Qzs7QUFLeEMsVUFDRUEsUUFBUSxLQUFSQSxPQUNBQSxRQUFRLEtBRFJBLE9BRUFBLFFBQVEsS0FGUkEsT0FHQUEsUUFBUSxLQUpWLEtBS0U7QUFDQUMsV0FBRyxHQUFIQTtBQUNBQyxXQUFHLEdBQUhBO0FBQ0Q7O0FBRUQsVUFDRUYsUUFBUSxLQUFSQSxPQUNBQSxRQUFRLEtBRFJBLE9BRUFBLFFBQVEsS0FGUkEsT0FHQUEsUUFBUSxLQUpWLEtBS0U7QUFDQUcsWUFBSSxHQUFKQTtBQUNBQyxZQUFJLEdBQUpBO0FBQ0Q7O0FBRUQ7QUFDRTtBQUNBO0FBQ0UsY0FBSUosUUFBUSxLQUFaLEtBQXNCO0FBQ3BCMXhCLGFBQUMsSUFBSXNTLENBQUMsQ0FBTnRTLENBQU0sQ0FBTkE7QUFDQUMsYUFBQyxJQUFJcVMsQ0FBQyxDQUFOclMsQ0FBTSxDQUFOQTtBQUZGLGlCQUdPO0FBQ0xELGFBQUMsR0FBR3NTLENBQUMsQ0FBTHRTLENBQUssQ0FBTEE7QUFDQUMsYUFBQyxHQUFHcVMsQ0FBQyxDQUFMclMsQ0FBSyxDQUFMQTtBQUNEOztBQUVELGNBQUl5eEIsUUFBUSxLQUFSQSxPQUFvQixDQUF4QixZQUFxQztBQUNuQ0gsc0JBQVUsR0FBRztBQUFFdnhCLGVBQUMsRUFBSDtBQUFLQyxlQUFDLEVBQURBO0FBQUwsYUFBYnN4QjtBQUNEOztBQUVEdnRCLGdCQUFNLENBQU5BO0FBQ0E7O0FBQ0Y7QUFDRWhFLFdBQUMsSUFBSXNTLENBQUMsQ0FBTnRTLENBQU0sQ0FBTkE7QUFDQUMsV0FBQyxJQUFJcVMsQ0FBQyxDQUFOclMsQ0FBTSxDQUFOQTtBQUNBK0QsZ0JBQU0sQ0FBTkE7QUFDQTs7QUFDRjtBQUNFaEUsV0FBQyxHQUFHc1MsQ0FBQyxDQUFMdFMsQ0FBSyxDQUFMQTtBQUNBQyxXQUFDLEdBQUdxUyxDQUFDLENBQUxyUyxDQUFLLENBQUxBO0FBQ0ErRCxnQkFBTSxDQUFOQTtBQUNBOztBQUNGO0FBQ0VoRSxXQUFDLEdBQUdzUyxDQUFDLENBQUx0UyxDQUFLLENBQUxBO0FBQ0FnRSxnQkFBTSxDQUFOQTtBQUNBOztBQUNGO0FBQ0VoRSxXQUFDLElBQUlzUyxDQUFDLENBQU50UyxDQUFNLENBQU5BO0FBQ0FnRSxnQkFBTSxDQUFOQTtBQUNBOztBQUNGO0FBQ0UvRCxXQUFDLEdBQUdxUyxDQUFDLENBQUxyUyxDQUFLLENBQUxBO0FBQ0ErRCxnQkFBTSxDQUFOQTtBQUNBOztBQUNGO0FBQ0UvRCxXQUFDLElBQUlxUyxDQUFDLENBQU5yUyxDQUFNLENBQU5BO0FBQ0ErRCxnQkFBTSxDQUFOQTtBQUNBOztBQUNGO0FBQ0E7QUFDRSxjQUFJMHRCLFFBQVEsS0FBWixLQUFzQjtBQUNwQjF4QixhQUFDLElBQUlzUyxDQUFDLENBQU50UyxDQUFNLENBQU5BO0FBQ0FDLGFBQUMsSUFBSXFTLENBQUMsQ0FBTnJTLENBQU0sQ0FBTkE7QUFGRixpQkFHTztBQUNMRCxhQUFDLEdBQUdzUyxDQUFDLENBQUx0UyxDQUFLLENBQUxBO0FBQ0FDLGFBQUMsR0FBR3FTLENBQUMsQ0FBTHJTLENBQUssQ0FBTEE7QUFDRDs7QUFFRDh4QixZQUFFLEdBQUd6ZixDQUFDLENBVFIsQ0FTUSxDQUFOeWYsQ0FURjs7QUFVRUMsWUFBRSxHQUFHMWYsQ0FBQyxDQVZSLENBVVEsQ0FBTjBmLENBVkY7O0FBV0VDLGVBQUssR0FBSTNmLENBQUMsQ0FBREEsQ0FBQyxDQUFEQSxHQUFPOVMsSUFBSSxDQUFaLEVBQUM4UyxHQUFUMmY7QUFDQUMsc0JBQVksR0FBRyxDQUFDLENBQUM1ZixDQUFDLENBQWxCNGYsQ0FBa0IsQ0FBbEJBO0FBQ0FDLG1CQUFTLEdBQUcsQ0FBQyxDQUFDN2YsQ0FBQyxDQUFmNmYsQ0FBZSxDQUFmQTtBQUNBQyxrQkFBUSxHQUFHO0FBQUVweUIsYUFBQyxFQUFIO0FBQUtDLGFBQUMsRUFBREE7QUFBTCxXQUFYbXlCLENBZEY7O0FBa0JFQyxrQkFBUSxHQUFHO0FBQ1RyeUIsYUFBQyxFQUFFLENBQUN3eEIsWUFBWSxDQUFaQSxJQUFpQlksUUFBUSxDQUExQixLQURNO0FBRVRueUIsYUFBQyxFQUFFLENBQUN1eEIsWUFBWSxDQUFaQSxJQUFpQlksUUFBUSxDQUExQixLQUFnQztBQUYxQixXQUFYQztBQUlBQyxxQkFBVyxXQUFXLENBdEJ4QixLQXNCYSxDQUFYQSxDQXRCRjs7QUF5QkVDLGdCQUFNLEdBQ0hGLFFBQVEsQ0FBUkEsSUFBYUEsUUFBUSxDQUF0QixDQUFDQSxJQUE0Qk4sRUFBRSxHQUEvQixFQUFDTSxJQUNBQSxRQUFRLENBQVJBLElBQWFBLFFBQVEsQ0FBdEIsQ0FBQ0EsSUFBNEJMLEVBQUUsR0FGakNPLEVBRUdGLENBRkhFOztBQUdBLGNBQUlBLE1BQU0sR0FBVixHQUFnQjtBQUNkQSxrQkFBTSxHQUFHL3lCLElBQUksQ0FBSkEsS0FBVCt5QixNQUFTL3lCLENBQVQreUI7QUFDQVIsY0FBRSxJQUFGQTtBQUNBQyxjQUFFLElBQUZBO0FBQ0Q7O0FBRURRLHFCQUFXLEdBQUc7QUFDWnh5QixhQUFDLEVBQUcreEIsRUFBRSxHQUFHTSxRQUFRLENBQWQsQ0FBQ04sR0FEUTtBQUVaOXhCLGFBQUMsRUFBRSxFQUFFK3hCLEVBQUUsR0FBR0ssUUFBUSxDQUFmLEtBQXFCTjtBQUZaLFdBQWRTO0FBSUFDLFlBQUUsR0FBR1YsRUFBRSxHQUFGQSxVQUFMVTtBQUNBQyxZQUFFLEdBQ0FYLEVBQUUsR0FBRkEsS0FBVU0sUUFBUSxDQUFsQk4sSUFBdUJNLFFBQVEsQ0FBL0JOLElBQ0FDLEVBQUUsR0FBRkEsS0FBVUssUUFBUSxDQUFsQkwsSUFBdUJLLFFBQVEsQ0FGakNLOztBQUdBLGNBQUlQLFNBQVMsS0FBYixjQUFnQztBQUM5QlEsc0JBQVUsY0FBY256QixJQUFJLENBQUpBLEtBQVUsQ0FBQ2l6QixFQUFFLEdBQUgsTUFBVmp6QixPQUF4Qm16QixDQUFVLENBQVZBO0FBREYsaUJBRU87QUFDTEEsc0JBQVUsY0FBYyxDQUFDbnpCLElBQUksQ0FBSkEsS0FBVSxDQUFDaXpCLEVBQUUsR0FBSCxNQUFYLEVBQUNqekIsQ0FBRCxJQUF4Qm16QixDQUFVLENBQVZBO0FBQ0Q7O0FBRURDLG9CQUFVLEdBQUdwekIsSUFBSSxDQUFKQSxNQUNYLENBQUM2eUIsUUFBUSxDQUFSQSxJQUFhRyxXQUFXLENBQXpCLEtBRFdoekIsSUFFWCxDQUFDNnlCLFFBQVEsQ0FBUkEsSUFBYUcsV0FBVyxDQUF6QixLQUZGSSxFQUFhcHpCLENBQWJvekI7QUFJQUMsa0JBQVEsR0FBR3J6QixJQUFJLENBQUpBLE1BQ1QsRUFBRTZ5QixRQUFRLENBQVJBLElBQWFHLFdBQVcsQ0FBMUIsS0FEU2h6QixJQUVULEVBQUU2eUIsUUFBUSxDQUFSQSxJQUFhRyxXQUFXLENBQTFCLEtBRkZLLEVBQVdyekIsQ0FBWHF6QjtBQUtBUCxxQkFBVyxjQUFYQSxLQUFXLENBQVhBO0FBQ0FRLHdCQUFjLGNBRVosQ0FBQ1YsUUFBUSxDQUFSQSxJQUFhWixZQUFZLENBQTFCLEtBRlksR0FHWixDQUFDWSxRQUFRLENBQVJBLElBQWFaLFlBQVksQ0FBMUIsS0FIRnNCLENBQWMsQ0FBZEE7QUFNQTl1QixnQkFBTSxDQUFOQTtBQUNBQSxnQkFBTSxDQUFOQSxVQUFpQnd1QixXQUFXLENBQTVCeHVCLEdBQWdDd3VCLFdBQVcsQ0FBM0N4dUI7QUFDQUEsZ0JBQU0sQ0FBTkE7QUFDQUEsZ0JBQU0sQ0FBTkE7QUFDQUEsZ0JBQU0sQ0FBTkEsbUNBQTBDLENBQTFDQTtBQUNBQSxnQkFBTSxDQUFOQTtBQUNBOztBQUNGO0FBQ0UydEIsYUFBRyxHQUFHcmYsQ0FBQyxDQURULENBQ1MsQ0FBUHFmLENBREY7O0FBRUVDLGFBQUcsR0FBR3RmLENBQUMsQ0FBUHNmLENBQU8sQ0FBUEE7QUFDQTV4QixXQUFDLEdBQUdzUyxDQUFDLENBQUx0UyxDQUFLLENBQUxBO0FBQ0FDLFdBQUMsR0FBR3FTLENBQUMsQ0FBTHJTLENBQUssQ0FBTEE7QUFDQStELGdCQUFNLENBQU5BLGNBQXFCc08sQ0FBQyxDQUF0QnRPLENBQXNCLENBQXRCQSxFQUEyQnNPLENBQUMsQ0FBNUJ0TyxDQUE0QixDQUE1QkE7QUFDQTs7QUFDRjtBQUNFQSxnQkFBTSxDQUFOQSxjQUNFc08sQ0FBQyxDQUFEQSxDQUFDLENBQURBLEdBREZ0TyxHQUVFc08sQ0FBQyxDQUFEQSxDQUFDLENBQURBLEdBRkZ0TyxHQUdFc08sQ0FBQyxDQUFEQSxDQUFDLENBQURBLEdBSEZ0TyxHQUlFc08sQ0FBQyxDQUFEQSxDQUFDLENBQURBLEdBSkZ0TyxHQUtFc08sQ0FBQyxDQUFEQSxDQUFDLENBQURBLEdBTEZ0TyxHQU1Fc08sQ0FBQyxDQUFEQSxDQUFDLENBQURBLEdBTkZ0TztBQVFBMnRCLGFBQUcsR0FBR3JmLENBQUMsQ0FBREEsQ0FBQyxDQUFEQSxHQVRSLENBU0VxZixDQVRGOztBQVVFQyxhQUFHLEdBQUd0ZixDQUFDLENBQURBLENBQUMsQ0FBREEsR0FBTnNmO0FBQ0E1eEIsV0FBQyxJQUFJc1MsQ0FBQyxDQUFOdFMsQ0FBTSxDQUFOQTtBQUNBQyxXQUFDLElBQUlxUyxDQUFDLENBQU5yUyxDQUFNLENBQU5BO0FBQ0E7O0FBQ0Y7QUFDRSxjQUFJMHhCLEdBQUcsS0FBSEEsUUFBZ0JBLEdBQUcsS0FBdkIsTUFBa0M7QUFDaENBLGVBQUcsR0FBSEE7QUFDQUMsZUFBRyxHQUFIQTtBQUNEOztBQUVENXRCLGdCQUFNLENBQU5BLGNBQ0UsUUFERkEsS0FFRSxRQUZGQSxLQUdFc08sQ0FBQyxDQUhIdE8sQ0FHRyxDQUhIQSxFQUlFc08sQ0FBQyxDQUpIdE8sQ0FJRyxDQUpIQSxFQUtFc08sQ0FBQyxDQUxIdE8sQ0FLRyxDQUxIQSxFQU1Fc08sQ0FBQyxDQU5IdE8sQ0FNRyxDQU5IQTtBQVFBMnRCLGFBQUcsR0FBR3JmLENBQUMsQ0FkVCxDQWNTLENBQVBxZixDQWRGOztBQWVFQyxhQUFHLEdBQUd0ZixDQUFDLENBQVBzZixDQUFPLENBQVBBO0FBQ0E1eEIsV0FBQyxHQUFHc1MsQ0FBQyxDQUFMdFMsQ0FBSyxDQUFMQTtBQUNBQyxXQUFDLEdBQUdxUyxDQUFDLENBQUxyUyxDQUFLLENBQUxBO0FBQ0E7O0FBQ0Y7QUFDRSxjQUFJMHhCLEdBQUcsS0FBSEEsUUFBZ0JBLEdBQUcsS0FBdkIsTUFBa0M7QUFDaENBLGVBQUcsR0FBSEE7QUFDQUMsZUFBRyxHQUFIQTtBQUNEOztBQUVENXRCLGdCQUFNLENBQU5BLGNBQ0UsUUFERkEsS0FFRSxRQUZGQSxLQUdFc08sQ0FBQyxDQUFEQSxDQUFDLENBQURBLEdBSEZ0TyxHQUlFc08sQ0FBQyxDQUFEQSxDQUFDLENBQURBLEdBSkZ0TyxHQUtFc08sQ0FBQyxDQUFEQSxDQUFDLENBQURBLEdBTEZ0TyxHQU1Fc08sQ0FBQyxDQUFEQSxDQUFDLENBQURBLEdBTkZ0TztBQVFBMnRCLGFBQUcsR0FBR3JmLENBQUMsQ0FBREEsQ0FBQyxDQUFEQSxHQWRSLENBY0VxZixDQWRGOztBQWVFQyxhQUFHLEdBQUd0ZixDQUFDLENBQURBLENBQUMsQ0FBREEsR0FBTnNmO0FBQ0E1eEIsV0FBQyxJQUFJc1MsQ0FBQyxDQUFOdFMsQ0FBTSxDQUFOQTtBQUNBQyxXQUFDLElBQUlxUyxDQUFDLENBQU5yUyxDQUFNLENBQU5BO0FBQ0E7O0FBQ0Y7QUFDRTR4QixjQUFJLEdBQUd2ZixDQUFDLENBRFYsQ0FDVSxDQUFSdWYsQ0FERjs7QUFFRUMsY0FBSSxHQUFHeGYsQ0FBQyxDQUFSd2YsQ0FBUSxDQUFSQTtBQUNBOXhCLFdBQUMsR0FBR3NTLENBQUMsQ0FBTHRTLENBQUssQ0FBTEE7QUFDQUMsV0FBQyxHQUFHcVMsQ0FBQyxDQUFMclMsQ0FBSyxDQUFMQTtBQUNBK0QsZ0JBQU0sQ0FBTkE7QUFDQTs7QUFDRjtBQUNFNnRCLGNBQUksR0FBR3ZmLENBQUMsQ0FBREEsQ0FBQyxDQUFEQSxHQURULENBQ0V1ZixDQURGOztBQUVFQyxjQUFJLEdBQUd4ZixDQUFDLENBQURBLENBQUMsQ0FBREEsR0FBUHdmO0FBQ0E5eEIsV0FBQyxJQUFJc1MsQ0FBQyxDQUFOdFMsQ0FBTSxDQUFOQTtBQUNBQyxXQUFDLElBQUlxUyxDQUFDLENBQU5yUyxDQUFNLENBQU5BO0FBQ0ErRCxnQkFBTSxDQUFOQTtBQUNBOztBQUNGO0FBQ0UsY0FBSTZ0QixJQUFJLEtBQUpBLFFBQWlCQSxJQUFJLEtBQXpCLE1BQW9DO0FBQ2xDQSxnQkFBSSxHQUFKQTtBQUNBQyxnQkFBSSxHQUFKQTtBQUNEOztBQUNERCxjQUFJLEdBQUcsUUFMVCxJQUtFQSxDQUxGOztBQU1FQyxjQUFJLEdBQUcsUUFBUEE7QUFDQTl4QixXQUFDLEdBQUdzUyxDQUFDLENBQUx0UyxDQUFLLENBQUxBO0FBQ0FDLFdBQUMsR0FBR3FTLENBQUMsQ0FBTHJTLENBQUssQ0FBTEE7QUFDQStELGdCQUFNLENBQU5BO0FBQ0E7O0FBQ0Y7QUFDRSxjQUFJNnRCLElBQUksS0FBSkEsUUFBaUJBLElBQUksS0FBekIsTUFBb0M7QUFDbENBLGdCQUFJLEdBQUpBO0FBQ0FDLGdCQUFJLEdBQUpBO0FBQ0Q7O0FBQ0RELGNBQUksR0FBRyxRQUxULElBS0VBLENBTEY7O0FBTUVDLGNBQUksR0FBRyxRQUFQQTtBQUNBOXhCLFdBQUMsSUFBSXNTLENBQUMsQ0FBTnRTLENBQU0sQ0FBTkE7QUFDQUMsV0FBQyxJQUFJcVMsQ0FBQyxDQUFOclMsQ0FBTSxDQUFOQTtBQUNBK0QsZ0JBQU0sQ0FBTkE7QUFDQTs7QUFDRjtBQUNBO0FBQ0VoRSxXQUFDLEdBQUd1eEIsVUFBVSxDQUFkdnhCO0FBQ0FDLFdBQUMsR0FBR3N4QixVQUFVLENBQWR0eEI7QUFDQXN4QixvQkFBVSxHQUFWQTtBQUNBdnRCLGdCQUFNLENBQU5BO0FBQ0E7O0FBQ0Y7O0FBQ0VoRSxXQUFDLEdBQUdzUyxDQUFDLENBQUx0UyxDQUFLLENBQUxBO0FBQ0FDLFdBQUMsR0FBR3FTLENBQUMsQ0FBTHJTLENBQUssQ0FBTEE7QUFDQThSLFdBQUMsR0FBR08sQ0FBQyxDQUFMUCxDQUFLLENBQUxBO0FBQ0E2Z0Isb0JBQVUsR0FBR3RnQixDQUFDLENBQWRzZ0IsQ0FBYyxDQUFkQTtBQUNBQyxrQkFBUSxHQUFHdmdCLENBQUMsQ0FBWnVnQixDQUFZLENBQVpBO0FBQ0FFLGFBQUcsR0FBR3pnQixDQUFDLENBQVB5Z0IsQ0FBTyxDQUFQQTtBQUNBL3VCLGdCQUFNLENBQU5BO0FBQ0E7O0FBQ0Y7O0FBQ0VvTSxZQUFFLEdBQUdrQyxDQUFDLENBQU5sQyxDQUFNLENBQU5BO0FBQ0FDLFlBQUUsR0FBR2lDLENBQUMsQ0FBTmpDLENBQU0sQ0FBTkE7QUFDQXJRLFdBQUMsR0FBR3NTLENBQUMsQ0FBTHRTLENBQUssQ0FBTEE7QUFDQUMsV0FBQyxHQUFHcVMsQ0FBQyxDQUFMclMsQ0FBSyxDQUFMQTtBQUNBOFIsV0FBQyxHQUFHTyxDQUFDLENBQUxQLENBQUssQ0FBTEE7QUFDQS9OLGdCQUFNLENBQU5BO0FBQ0E7O0FBQ0Y7O0FBQ0VoRSxXQUFDLEdBQUdzUyxDQUFDLENBQUx0UyxDQUFLLENBQUxBO0FBQ0FDLFdBQUMsR0FBR3FTLENBQUMsQ0FBTHJTLENBQUssQ0FBTEE7QUFDQTh4QixZQUFFLEdBQUd6ZixDQUFDLENBQU55ZixDQUFNLENBQU5BO0FBQ0FDLFlBQUUsR0FBRzFmLENBQUMsQ0FBTjBmLENBQU0sQ0FBTkE7QUFDQUMsZUFBSyxHQUFHM2YsQ0FBQyxDQUFUMmYsQ0FBUyxDQUFUQTtBQUNBVyxvQkFBVSxHQUFHdGdCLENBQUMsQ0FBZHNnQixDQUFjLENBQWRBO0FBQ0FDLGtCQUFRLEdBQUd2Z0IsQ0FBQyxDQUFadWdCLENBQVksQ0FBWkE7QUFDQUUsYUFBRyxHQUFHemdCLENBQUMsQ0FBUHlnQixDQUFPLENBQVBBO0FBQ0EvdUIsZ0JBQU0sQ0FBTkE7QUFDQUEsZ0JBQU0sQ0FBTkE7QUFDQUEsZ0JBQU0sQ0FBTkE7QUFDQUEsZ0JBQU0sQ0FBTkE7QUFDQUEsZ0JBQU0sQ0FBTkE7QUFDQUEsZ0JBQU0sQ0FBTkE7QUFDQTs7QUFDRjs7QUFDRWhFLFdBQUMsR0FBR3NTLENBQUMsQ0FBTHRTLENBQUssQ0FBTEE7QUFDQUMsV0FBQyxHQUFHcVMsQ0FBQyxDQUFMclMsQ0FBSyxDQUFMQTtBQUNBb2EsV0FBQyxHQUFHL0gsQ0FBQyxDQUFMK0gsQ0FBSyxDQUFMQTtBQUNBaEksV0FBQyxHQUFHQyxDQUFDLENBQUxELENBQUssQ0FBTEE7QUFDQWtmLG9CQUFVLEdBQUc7QUFBRXZ4QixhQUFDLEVBQUg7QUFBS0MsYUFBQyxFQUFEQTtBQUFMLFdBQWJzeEI7QUFDQXZ0QixnQkFBTSxDQUFOQTtBQUNBO0FBalFKOztBQXNRQXd0QixrQkFBWSxDQUFaQTtBQUNBQSxrQkFBWSxDQUFaQTtBQUNEO0FBQ0Y7O0FBRUQsTUFBTXdCLEtBQUssR0FBRzVwQixNQUFNLENBQU5BLG1DQUFkO0FBQ0EsTUFBTTZwQixPQUFPLEdBQUc3cEIsTUFBTSxDQUFOQSxtQ0FBaEI7O0FBRUFBLFFBQU0sQ0FBTkEsMENBQWlELGdCQUF1QjtBQUFBLHNDQUFOdUUsSUFBTTtBQUFOQSxVQUFNLE1BQU5BLEdBQU0sZUFBTkE7QUFBTTs7QUFDdEUsUUFBSXVsQixRQUFRLEdBQVo7O0FBQ0EsUUFDRXZsQixJQUFJLENBQUpBLGdCQUNDQSxJQUFJLENBQUpBLGdCQUFxQixPQUFPQSxJQUFJLENBQVgsQ0FBVyxDQUFYLEtBRnhCLFVBR0U7QUFDQXFsQixXQUFLLENBQUxBO0FBQ0E7QUFDRDs7QUFDRCxRQUFJcGxCLFNBQVMsQ0FBVEEsV0FBSixHQUE0QjtBQUMxQnNsQixjQUFRLEdBQUd2bEIsSUFBSSxDQUFmdWxCLENBQWUsQ0FBZkE7QUFDRDs7QUFDRCxRQUFNL3VCLElBQUksR0FBR3dKLElBQUksQ0FBakIsQ0FBaUIsQ0FBakI7QUFDQXdsQixhQUFTLE9BQU9odkIsSUFBSSxDQUFwQmd2QixRQUFTLENBQVRBO0FBQ0FILFNBQUssQ0FBTEE7QUFkRjVwQjs7QUFpQkFBLFFBQU0sQ0FBTkEsNENBQW1ELHNCQUFzQjtBQUN2RSxRQUFJLENBQUosTUFBVztBQUNUNnBCLGFBQU8sQ0FBUEE7QUFDQTtBQUNEOztBQUNERSxhQUFTLE9BQU9odkIsSUFBSSxDQUFwQmd2QixRQUFTLENBQVRBO0FBQ0FGLFdBQU8sQ0FBUEE7QUFORjdwQjs7QUFTQSxNQUFNZ3FCLGNBQWMsR0FDbEJocUIsTUFBTSxDQUFOQSxtQ0FERjs7QUFHQUEsUUFBTSxDQUFOQSxtREFBMEQseUJBRXhEO0FBQUEsdUNBREd1RSxJQUNIO0FBREdBLFVBQ0gsT0FER0EsR0FDSCxnQkFER0E7QUFDSCxNOzs7QUFFQSxRQUFJQSxJQUFJLENBQUpBLENBQUksQ0FBSkEsc0JBQUosVUFBMkM7O0FBRXpDLFVBQU0zTixDQUFDLEdBQUcyTixJQUFJLENBQWQsQ0FBYyxDQUFkO0FBQ0EsVUFBTTFOLENBQUMsR0FBRzBOLElBQUksQ0FBZCxDQUFjLENBQWQ7QUFDQSxVQUFNdWxCLFFBQVEsR0FBR3ZsQixJQUFJLENBQUpBLENBQUksQ0FBSkEsSUFBakI7QUFDQSxVQUFNeEosSUFBSSxHQUFHd0osSUFBSSxDQUFqQixDQUFpQixDQUFqQjtBQUNBd2xCLGVBQVMsT0FBT2h2QixJQUFJLENBQXBCZ3ZCLFFBQVMsQ0FBVEE7QUFDQSxhQUFPQyxjQUFjLENBQWRBLFlBQTJCLE9BQWxDLFFBQWtDLENBQTNCQSxDQUFQO0FBUEYsV0FRTztBQUNMLGFBQU9BLGNBQWMsQ0FBZEEsWUFBUCxJQUFPQSxDQUFQO0FBQ0Q7QUFkSGhxQjs7QUFpQkFBLFFBQU0sQ0FBTkE7QUFDRDs7QUFFRCxrQkFBYyxHQUFkOztBQ3pkQSxJQUFJLGtCQUFKLGFBQW1DO0FBQ2pDaXFCLGdCQUFjLENBQWRBLE1BQWMsQ0FBZEE7QUFDRDs7T0FFYSxHQUFHO0FBQ2ZBLGdCQUFjLEVBREM7QUFFZi9CLFdBQVMsRUFBVEE7QUFGZSxDOzs7Ozs7Ozs7Ozs7QUNQSjs7OztBQUNiN3BCLDhDQUE2QztBQUFFeWdCLE9BQUssRUFBRTtBQUFULENBQTdDO0FBQ0ExUSxVQUFBLEdBQWFBLGNBQUEsR0FBaUJBLGVBQUEsR0FBa0JBLGdCQUFBLEdBQW1CLEtBQUssQ0FBeEU7O0FBQ0EsSUFBTThiLEtBQUssR0FBR2ptQixtQkFBTyxDQUFDLDJEQUFELENBQXJCOztBQUNBLElBQU1rbUIsU0FBUyxHQUFHbG1CLG1CQUFPLENBQUMsbUVBQUQsQ0FBekI7O0FBQ0EsSUFBTTJQLEtBQUssR0FBRzNQLG1CQUFPLENBQUMsa0RBQUQsQ0FBUCxDQUFpQixrQkFBakIsQ0FBZDtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0FrSyxNQUFNLENBQUNDLE9BQVAsR0FBaUJBLE9BQU8sR0FBR2djLE1BQTNCO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1DLEtBQUssR0FBSWpjLGdCQUFBLEdBQW1CLEVBQWxDOztBQUNBLFNBQVNnYyxNQUFULENBQWdCalQsR0FBaEIsRUFBcUI3SSxJQUFyQixFQUEyQjtBQUN2QixNQUFJLFFBQU82SSxHQUFQLE1BQWUsUUFBbkIsRUFBNkI7QUFDekI3SSxRQUFJLEdBQUc2SSxHQUFQO0FBQ0FBLE9BQUcsR0FBR3ZZLFNBQU47QUFDSDs7QUFDRDBQLE1BQUksR0FBR0EsSUFBSSxJQUFJLEVBQWY7QUFDQSxNQUFNZ2MsTUFBTSxHQUFHSixLQUFLLENBQUNyZixHQUFOLENBQVVzTSxHQUFWLEVBQWU3SSxJQUFJLENBQUN2VCxJQUFMLElBQWEsWUFBNUIsQ0FBZjtBQUNBLE1BQU04ckIsTUFBTSxHQUFHeUQsTUFBTSxDQUFDekQsTUFBdEI7QUFDQSxNQUFNM3RCLEVBQUUsR0FBR294QixNQUFNLENBQUNweEIsRUFBbEI7QUFDQSxNQUFNNkIsSUFBSSxHQUFHdXZCLE1BQU0sQ0FBQ3Z2QixJQUFwQjtBQUNBLE1BQU13dkIsYUFBYSxHQUFHRixLQUFLLENBQUNueEIsRUFBRCxDQUFMLElBQWE2QixJQUFJLElBQUlzdkIsS0FBSyxDQUFDbnhCLEVBQUQsQ0FBTCxDQUFVLE1BQVYsQ0FBM0M7QUFDQSxNQUFNc3hCLGFBQWEsR0FBR2xjLElBQUksQ0FBQ21jLFFBQUwsSUFDbEJuYyxJQUFJLENBQUMsc0JBQUQsQ0FEYyxJQUVsQixVQUFVQSxJQUFJLENBQUNvYyxTQUZHLElBR2xCSCxhQUhKO0FBSUEsTUFBSUksRUFBSjs7QUFDQSxNQUFJSCxhQUFKLEVBQW1CO0FBQ2Y1VyxTQUFLLENBQUMsOEJBQUQsRUFBaUNpVCxNQUFqQyxDQUFMO0FBQ0E4RCxNQUFFLEdBQUcsSUFBSVIsU0FBUyxDQUFDUyxPQUFkLENBQXNCL0QsTUFBdEIsRUFBOEJ2WSxJQUE5QixDQUFMO0FBQ0gsR0FIRCxNQUlLO0FBQ0QsUUFBSSxDQUFDK2IsS0FBSyxDQUFDbnhCLEVBQUQsQ0FBVixFQUFnQjtBQUNaMGEsV0FBSyxDQUFDLHdCQUFELEVBQTJCaVQsTUFBM0IsQ0FBTDtBQUNBd0QsV0FBSyxDQUFDbnhCLEVBQUQsQ0FBTCxHQUFZLElBQUlpeEIsU0FBUyxDQUFDUyxPQUFkLENBQXNCL0QsTUFBdEIsRUFBOEJ2WSxJQUE5QixDQUFaO0FBQ0g7O0FBQ0RxYyxNQUFFLEdBQUdOLEtBQUssQ0FBQ254QixFQUFELENBQVY7QUFDSDs7QUFDRCxNQUFJb3hCLE1BQU0sQ0FBQ3pTLEtBQVAsSUFBZ0IsQ0FBQ3ZKLElBQUksQ0FBQ3VKLEtBQTFCLEVBQWlDO0FBQzdCdkosUUFBSSxDQUFDdUosS0FBTCxHQUFheVMsTUFBTSxDQUFDckQsUUFBcEI7QUFDSDs7QUFDRCxTQUFPMEQsRUFBRSxDQUFDbFIsTUFBSCxDQUFVNlEsTUFBTSxDQUFDdnZCLElBQWpCLEVBQXVCdVQsSUFBdkIsQ0FBUDtBQUNIOztBQUNERixVQUFBLEdBQWFnYyxNQUFiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFJUyxrQkFBa0IsR0FBRzVtQixtQkFBTyxDQUFDLHVFQUFELENBQWhDOztBQUNBNUYsNENBQTJDO0FBQUVpWSxZQUFVLEVBQUUsSUFBZDtBQUFvQkUsS0FBRyxFQUFFLGVBQVk7QUFBRSxXQUFPcVUsa0JBQWtCLENBQUN6VCxRQUExQjtBQUFxQztBQUE1RSxDQUEzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQWhKLGVBQUEsR0FBa0JnYyxNQUFsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBSVUsU0FBUyxHQUFHN21CLG1CQUFPLENBQUMsbUVBQUQsQ0FBdkI7O0FBQ0E1RiwyQ0FBMEM7QUFBRWlZLFlBQVUsRUFBRSxJQUFkO0FBQW9CRSxLQUFHLEVBQUUsZUFBWTtBQUFFLFdBQU9zVSxTQUFTLENBQUNGLE9BQWpCO0FBQTJCO0FBQWxFLENBQTFDOztBQUNBLElBQUlHLFFBQVEsR0FBRzltQixtQkFBTyxDQUFDLGlFQUFELENBQXRCOztBQUNBNUYsMENBQXlDO0FBQUVpWSxZQUFVLEVBQUUsSUFBZDtBQUFvQkUsS0FBRyxFQUFFLGVBQVk7QUFBRSxXQUFPdVUsUUFBUSxDQUFDN1QsTUFBaEI7QUFBeUI7QUFBaEUsQ0FBekM7QUFDQTlJLGVBQUEsR0FBa0JnYyxNQUFsQixDOzs7Ozs7Ozs7OztBQ3RFYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ2IvckIsOENBQTZDO0FBQUV5Z0IsT0FBSyxFQUFFO0FBQVQsQ0FBN0M7QUFDQTFRLGVBQUEsR0FBa0IsS0FBSyxDQUF2Qjs7QUFDQSxJQUFNNGMsR0FBRyxHQUFHL21CLG1CQUFPLENBQUMsc0VBQUQsQ0FBbkI7O0FBQ0EsSUFBTThtQixRQUFRLEdBQUc5bUIsbUJBQU8sQ0FBQyxpRUFBRCxDQUF4Qjs7QUFDQSxJQUFNcVQsTUFBTSxHQUFHclQsbUJBQU8sQ0FBQyx1RUFBRCxDQUF0Qjs7QUFDQSxJQUFNZ25CLElBQUksR0FBR2huQixtQkFBTyxDQUFDLHlEQUFELENBQXBCOztBQUNBLElBQU1vSyxPQUFPLEdBQUdwSyxtQkFBTyxDQUFDLDhDQUFELENBQXZCOztBQUNBLElBQU1pbkIsY0FBYyxHQUFHam5CLG1CQUFPLENBQUMsNkVBQUQsQ0FBOUI7O0FBQ0EsSUFBTTJQLEtBQUssR0FBRzNQLG1CQUFPLENBQUMsa0RBQUQsQ0FBUCxDQUFpQiwwQkFBakIsQ0FBZDs7SUFDTTJtQixPOzs7OztBQUNGLG1CQUFZelQsR0FBWixFQUFpQjdJLElBQWpCLEVBQXVCO0FBQUE7O0FBQUE7O0FBQ25CO0FBQ0EsVUFBSzZjLElBQUwsR0FBWSxFQUFaO0FBQ0EsVUFBS0MsSUFBTCxHQUFZLEVBQVo7O0FBQ0EsUUFBSWpVLEdBQUcsSUFBSSxxQkFBb0JBLEdBQXBCLENBQVgsRUFBb0M7QUFDaEM3SSxVQUFJLEdBQUc2SSxHQUFQO0FBQ0FBLFNBQUcsR0FBR3ZZLFNBQU47QUFDSDs7QUFDRDBQLFFBQUksR0FBR0EsSUFBSSxJQUFJLEVBQWY7QUFDQUEsUUFBSSxDQUFDdlQsSUFBTCxHQUFZdVQsSUFBSSxDQUFDdlQsSUFBTCxJQUFhLFlBQXpCO0FBQ0EsVUFBS3VULElBQUwsR0FBWUEsSUFBWjs7QUFDQSxVQUFLK2MsWUFBTCxDQUFrQi9jLElBQUksQ0FBQytjLFlBQUwsS0FBc0IsS0FBeEM7O0FBQ0EsVUFBS0Msb0JBQUwsQ0FBMEJoZCxJQUFJLENBQUNnZCxvQkFBTCxJQUE2QkMsUUFBdkQ7O0FBQ0EsVUFBS0MsaUJBQUwsQ0FBdUJsZCxJQUFJLENBQUNrZCxpQkFBTCxJQUEwQixJQUFqRDs7QUFDQSxVQUFLQyxvQkFBTCxDQUEwQm5kLElBQUksQ0FBQ21kLG9CQUFMLElBQTZCLElBQXZEOztBQUNBLFVBQUtDLG1CQUFMLENBQXlCcGQsSUFBSSxDQUFDb2QsbUJBQUwsSUFBNEIsR0FBckQ7O0FBQ0EsVUFBS0MsT0FBTCxHQUFlLElBQUl0ZCxPQUFKLENBQVk7QUFDdkI1SCxTQUFHLEVBQUUsTUFBSytrQixpQkFBTCxFQURrQjtBQUV2QjlrQixTQUFHLEVBQUUsTUFBSytrQixvQkFBTCxFQUZrQjtBQUd2QmhkLFlBQU0sRUFBRSxNQUFLaWQsbUJBQUw7QUFIZSxLQUFaLENBQWY7O0FBS0EsVUFBS3hMLE9BQUwsQ0FBYSxRQUFRNVIsSUFBSSxDQUFDNFIsT0FBYixHQUF1QixLQUF2QixHQUErQjVSLElBQUksQ0FBQzRSLE9BQWpEOztBQUNBLFVBQUswTCxXQUFMLEdBQW1CLFFBQW5CO0FBQ0EsVUFBS3pVLEdBQUwsR0FBV0EsR0FBWDs7QUFDQSxRQUFNMFUsT0FBTyxHQUFHdmQsSUFBSSxDQUFDZ0osTUFBTCxJQUFlQSxNQUEvQjs7QUFDQSxVQUFLd1UsT0FBTCxHQUFlLElBQUlELE9BQU8sQ0FBQ0UsT0FBWixFQUFmO0FBQ0EsVUFBS0MsT0FBTCxHQUFlLElBQUlILE9BQU8sQ0FBQ0ksT0FBWixFQUFmO0FBQ0EsVUFBS0MsWUFBTCxHQUFvQjVkLElBQUksQ0FBQzZkLFdBQUwsS0FBcUIsS0FBekM7QUFDQSxRQUFJLE1BQUtELFlBQVQsRUFDSSxNQUFLN1MsSUFBTDtBQTdCZTtBQThCdEI7Ozs7V0FDRCxzQkFBYTdFLENBQWIsRUFBZ0I7QUFDWixVQUFJLENBQUNoUSxTQUFTLENBQUN4SCxNQUFmLEVBQ0ksT0FBTyxLQUFLb3ZCLGFBQVo7QUFDSixXQUFLQSxhQUFMLEdBQXFCLENBQUMsQ0FBQzVYLENBQXZCO0FBQ0EsYUFBTyxJQUFQO0FBQ0g7OztXQUNELDhCQUFxQkEsQ0FBckIsRUFBd0I7QUFDcEIsVUFBSUEsQ0FBQyxLQUFLNVYsU0FBVixFQUNJLE9BQU8sS0FBS3l0QixxQkFBWjtBQUNKLFdBQUtBLHFCQUFMLEdBQTZCN1gsQ0FBN0I7QUFDQSxhQUFPLElBQVA7QUFDSDs7O1dBQ0QsMkJBQWtCQSxDQUFsQixFQUFxQjtBQUNqQixVQUFJOFgsRUFBSjs7QUFDQSxVQUFJOVgsQ0FBQyxLQUFLNVYsU0FBVixFQUNJLE9BQU8sS0FBSzJ0QixrQkFBWjtBQUNKLFdBQUtBLGtCQUFMLEdBQTBCL1gsQ0FBMUI7QUFDQSxPQUFDOFgsRUFBRSxHQUFHLEtBQUtYLE9BQVgsTUFBd0IsSUFBeEIsSUFBZ0NXLEVBQUUsS0FBSyxLQUFLLENBQTVDLEdBQWdELEtBQUssQ0FBckQsR0FBeURBLEVBQUUsQ0FBQ3RkLE1BQUgsQ0FBVXdGLENBQVYsQ0FBekQ7QUFDQSxhQUFPLElBQVA7QUFDSDs7O1dBQ0QsNkJBQW9CQSxDQUFwQixFQUF1QjtBQUNuQixVQUFJOFgsRUFBSjs7QUFDQSxVQUFJOVgsQ0FBQyxLQUFLNVYsU0FBVixFQUNJLE9BQU8sS0FBSzR0QixvQkFBWjtBQUNKLFdBQUtBLG9CQUFMLEdBQTRCaFksQ0FBNUI7QUFDQSxPQUFDOFgsRUFBRSxHQUFHLEtBQUtYLE9BQVgsTUFBd0IsSUFBeEIsSUFBZ0NXLEVBQUUsS0FBSyxLQUFLLENBQTVDLEdBQWdELEtBQUssQ0FBckQsR0FBeURBLEVBQUUsQ0FBQ3BkLFNBQUgsQ0FBYXNGLENBQWIsQ0FBekQ7QUFDQSxhQUFPLElBQVA7QUFDSDs7O1dBQ0QsOEJBQXFCQSxDQUFyQixFQUF3QjtBQUNwQixVQUFJOFgsRUFBSjs7QUFDQSxVQUFJOVgsQ0FBQyxLQUFLNVYsU0FBVixFQUNJLE9BQU8sS0FBSzZ0QixxQkFBWjtBQUNKLFdBQUtBLHFCQUFMLEdBQTZCalksQ0FBN0I7QUFDQSxPQUFDOFgsRUFBRSxHQUFHLEtBQUtYLE9BQVgsTUFBd0IsSUFBeEIsSUFBZ0NXLEVBQUUsS0FBSyxLQUFLLENBQTVDLEdBQWdELEtBQUssQ0FBckQsR0FBeURBLEVBQUUsQ0FBQ3JkLE1BQUgsQ0FBVXVGLENBQVYsQ0FBekQ7QUFDQSxhQUFPLElBQVA7QUFDSDs7O1dBQ0QsaUJBQVFBLENBQVIsRUFBVztBQUNQLFVBQUksQ0FBQ2hRLFNBQVMsQ0FBQ3hILE1BQWYsRUFDSSxPQUFPLEtBQUswdkIsUUFBWjtBQUNKLFdBQUtBLFFBQUwsR0FBZ0JsWSxDQUFoQjtBQUNBLGFBQU8sSUFBUDtBQUNIO0FBQ0Q7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O1dBQ0ksZ0NBQXVCO0FBQ25CO0FBQ0EsVUFBSSxDQUFDLEtBQUttWSxhQUFOLElBQ0EsS0FBS1AsYUFETCxJQUVBLEtBQUtULE9BQUwsQ0FBYWpkLFFBQWIsS0FBMEIsQ0FGOUIsRUFFaUM7QUFDN0I7QUFDQSxhQUFLa2UsU0FBTDtBQUNIO0FBQ0o7QUFDRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztXQUNJLGNBQUt4YyxFQUFMLEVBQVM7QUFBQTs7QUFDTHdELFdBQUssQ0FBQyxlQUFELEVBQWtCLEtBQUtnWSxXQUF2QixDQUFMO0FBQ0EsVUFBSSxDQUFDLEtBQUtBLFdBQUwsQ0FBaUJ6bUIsT0FBakIsQ0FBeUIsTUFBekIsQ0FBTCxFQUNJLE9BQU8sSUFBUDtBQUNKeU8sV0FBSyxDQUFDLFlBQUQsRUFBZSxLQUFLdUQsR0FBcEIsQ0FBTDtBQUNBLFdBQUswVixNQUFMLEdBQWM3QixHQUFHLENBQUMsS0FBSzdULEdBQU4sRUFBVyxLQUFLN0ksSUFBaEIsQ0FBakI7QUFDQSxVQUFNbUwsTUFBTSxHQUFHLEtBQUtvVCxNQUFwQjtBQUNBLFVBQU1qWCxJQUFJLEdBQUcsSUFBYjtBQUNBLFdBQUtnVyxXQUFMLEdBQW1CLFNBQW5CO0FBQ0EsV0FBS2tCLGFBQUwsR0FBcUIsS0FBckIsQ0FUSyxDQVVMOztBQUNBLFVBQU1DLGNBQWMsR0FBRzlCLElBQUksQ0FBQy9hLEVBQUwsQ0FBUXVKLE1BQVIsRUFBZ0IsTUFBaEIsRUFBd0IsWUFBWTtBQUN2RDdELFlBQUksQ0FBQzZNLE1BQUw7QUFDQXJTLFVBQUUsSUFBSUEsRUFBRSxFQUFSO0FBQ0gsT0FIc0IsQ0FBdkIsQ0FYSyxDQWVMOztBQUNBLFVBQU00YyxRQUFRLEdBQUcvQixJQUFJLENBQUMvYSxFQUFMLENBQVF1SixNQUFSLEVBQWdCLE9BQWhCLEVBQXlCLFVBQUNpQixHQUFELEVBQVM7QUFDL0M5RyxhQUFLLENBQUMsT0FBRCxDQUFMO0FBQ0FnQyxZQUFJLENBQUM0RSxPQUFMO0FBQ0E1RSxZQUFJLENBQUNnVyxXQUFMLEdBQW1CLFFBQW5COztBQUNBLGNBQUksQ0FBQ3FCLFlBQUwsQ0FBa0IsT0FBbEIsRUFBMkJ2UyxHQUEzQjs7QUFDQSxZQUFJdEssRUFBSixFQUFRO0FBQ0pBLFlBQUUsQ0FBQ3NLLEdBQUQsQ0FBRjtBQUNILFNBRkQsTUFHSztBQUNEO0FBQ0E5RSxjQUFJLENBQUNzWCxvQkFBTDtBQUNIO0FBQ0osT0FaZ0IsQ0FBakI7O0FBYUEsVUFBSSxVQUFVLEtBQUtSLFFBQW5CLEVBQTZCO0FBQ3pCLFlBQU14TSxPQUFPLEdBQUcsS0FBS3dNLFFBQXJCO0FBQ0E5WSxhQUFLLENBQUMsdUNBQUQsRUFBMENzTSxPQUExQyxDQUFMOztBQUNBLFlBQUlBLE9BQU8sS0FBSyxDQUFoQixFQUFtQjtBQUNmNk0sd0JBQWMsR0FEQyxDQUNHO0FBQ3JCLFNBTHdCLENBTXpCOzs7QUFDQSxZQUFNMW9CLEtBQUssR0FBR25QLFVBQVUsQ0FBQyxZQUFNO0FBQzNCMGUsZUFBSyxDQUFDLG9DQUFELEVBQXVDc00sT0FBdkMsQ0FBTDtBQUNBNk0sd0JBQWM7QUFDZHRULGdCQUFNLENBQUNQLEtBQVA7QUFDQU8sZ0JBQU0sQ0FBQzlXLElBQVAsQ0FBWSxPQUFaLEVBQXFCLElBQUk2TyxLQUFKLENBQVUsU0FBVixDQUFyQjtBQUNILFNBTHVCLEVBS3JCME8sT0FMcUIsQ0FBeEI7O0FBTUEsWUFBSSxLQUFLNVIsSUFBTCxDQUFVa04sU0FBZCxFQUF5QjtBQUNyQm5YLGVBQUssQ0FBQ29YLEtBQU47QUFDSDs7QUFDRCxhQUFLMlAsSUFBTCxDQUFVbnRCLElBQVYsQ0FBZSxTQUFTa3ZCLFVBQVQsR0FBc0I7QUFDakMxb0Isc0JBQVksQ0FBQ0osS0FBRCxDQUFaO0FBQ0gsU0FGRDtBQUdIOztBQUNELFdBQUsrbUIsSUFBTCxDQUFVbnRCLElBQVYsQ0FBZTh1QixjQUFmO0FBQ0EsV0FBSzNCLElBQUwsQ0FBVW50QixJQUFWLENBQWUrdUIsUUFBZjtBQUNBLGFBQU8sSUFBUDtBQUNIO0FBQ0Q7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O1dBQ0ksaUJBQVE1YyxFQUFSLEVBQVk7QUFDUixhQUFPLEtBQUtpSixJQUFMLENBQVVqSixFQUFWLENBQVA7QUFDSDtBQUNEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7Ozs7V0FDSSxrQkFBUztBQUNMd0QsV0FBSyxDQUFDLE1BQUQsQ0FBTCxDQURLLENBRUw7O0FBQ0EsV0FBSzRHLE9BQUwsR0FISyxDQUlMOztBQUNBLFdBQUtvUixXQUFMLEdBQW1CLE1BQW5CO0FBQ0EsV0FBS3FCLFlBQUwsQ0FBa0IsTUFBbEIsRUFOSyxDQU9MOztBQUNBLFVBQU14VCxNQUFNLEdBQUcsS0FBS29ULE1BQXBCO0FBQ0EsV0FBS3pCLElBQUwsQ0FBVW50QixJQUFWLENBQWVndEIsSUFBSSxDQUFDL2EsRUFBTCxDQUFRdUosTUFBUixFQUFnQixNQUFoQixFQUF3QixLQUFLMlQsTUFBTCxDQUFZOTFCLElBQVosQ0FBaUIsSUFBakIsQ0FBeEIsQ0FBZixFQUFnRTJ6QixJQUFJLENBQUMvYSxFQUFMLENBQVF1SixNQUFSLEVBQWdCLE1BQWhCLEVBQXdCLEtBQUs0VCxNQUFMLENBQVkvMUIsSUFBWixDQUFpQixJQUFqQixDQUF4QixDQUFoRSxFQUFpSDJ6QixJQUFJLENBQUMvYSxFQUFMLENBQVF1SixNQUFSLEVBQWdCLE9BQWhCLEVBQXlCLEtBQUttQixPQUFMLENBQWF0akIsSUFBYixDQUFrQixJQUFsQixDQUF6QixDQUFqSCxFQUFvSzJ6QixJQUFJLENBQUMvYSxFQUFMLENBQVF1SixNQUFSLEVBQWdCLE9BQWhCLEVBQXlCLEtBQUtxQixPQUFMLENBQWF4akIsSUFBYixDQUFrQixJQUFsQixDQUF6QixDQUFwSyxFQUF1TjJ6QixJQUFJLENBQUMvYSxFQUFMLENBQVEsS0FBSzhiLE9BQWIsRUFBc0IsU0FBdEIsRUFBaUMsS0FBS3NCLFNBQUwsQ0FBZWgyQixJQUFmLENBQW9CLElBQXBCLENBQWpDLENBQXZOO0FBQ0g7QUFDRDtBQUNKO0FBQ0E7QUFDQTtBQUNBOzs7O1dBQ0ksa0JBQVM7QUFDTCxXQUFLMjFCLFlBQUwsQ0FBa0IsTUFBbEI7QUFDSDtBQUNEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7Ozs7V0FDSSxnQkFBTzVTLElBQVAsRUFBYTtBQUNULFdBQUsyUixPQUFMLENBQWFyekIsR0FBYixDQUFpQjBoQixJQUFqQjtBQUNIO0FBQ0Q7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7OztXQUNJLG1CQUFVWSxNQUFWLEVBQWtCO0FBQ2QsV0FBS2dTLFlBQUwsQ0FBa0IsUUFBbEIsRUFBNEJoUyxNQUE1QjtBQUNIO0FBQ0Q7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7OztXQUNJLGlCQUFRUCxHQUFSLEVBQWE7QUFDVDlHLFdBQUssQ0FBQyxPQUFELEVBQVU4RyxHQUFWLENBQUw7QUFDQSxXQUFLdVMsWUFBTCxDQUFrQixPQUFsQixFQUEyQnZTLEdBQTNCO0FBQ0g7QUFDRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7V0FDSSxnQkFBTzZTLEdBQVAsRUFBWWpmLElBQVosRUFBa0I7QUFDZCxVQUFJbUwsTUFBTSxHQUFHLEtBQUswUixJQUFMLENBQVVvQyxHQUFWLENBQWI7O0FBQ0EsVUFBSSxDQUFDOVQsTUFBTCxFQUFhO0FBQ1RBLGNBQU0sR0FBRyxJQUFJc1IsUUFBUSxDQUFDN1QsTUFBYixDQUFvQixJQUFwQixFQUEwQnFXLEdBQTFCLEVBQStCamYsSUFBL0IsQ0FBVDtBQUNBLGFBQUs2YyxJQUFMLENBQVVvQyxHQUFWLElBQWlCOVQsTUFBakI7QUFDSDs7QUFDRCxhQUFPQSxNQUFQO0FBQ0g7QUFDRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7V0FDSSxrQkFBU0EsTUFBVCxFQUFpQjtBQUNiLFVBQU0wUixJQUFJLEdBQUc5c0IsTUFBTSxDQUFDNlcsSUFBUCxDQUFZLEtBQUtpVyxJQUFqQixDQUFiOztBQUNBLCtCQUFrQkEsSUFBbEIsMkJBQXdCO0FBQW5CLFlBQU1vQyxHQUFHLFlBQVQ7QUFDRCxZQUFNOVQsT0FBTSxHQUFHLEtBQUswUixJQUFMLENBQVVvQyxHQUFWLENBQWY7O0FBQ0EsWUFBSTlULE9BQU0sQ0FBQytULE1BQVgsRUFBbUI7QUFDZjVaLGVBQUssQ0FBQywyQ0FBRCxFQUE4QzJaLEdBQTlDLENBQUw7QUFDQTtBQUNIO0FBQ0o7O0FBQ0QsV0FBS0UsTUFBTDtBQUNIO0FBQ0Q7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O1dBQ0ksaUJBQVF4UyxNQUFSLEVBQWdCO0FBQ1pySCxXQUFLLENBQUMsbUJBQUQsRUFBc0JxSCxNQUF0QixDQUFMO0FBQ0EsVUFBTTZKLGNBQWMsR0FBRyxLQUFLZ0gsT0FBTCxDQUFhbkssTUFBYixDQUFvQjFHLE1BQXBCLENBQXZCOztBQUNBLFdBQUssSUFBSXBqQixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHaXRCLGNBQWMsQ0FBQzluQixNQUFuQyxFQUEyQ25GLENBQUMsRUFBNUMsRUFBZ0Q7QUFDNUMsYUFBS2cxQixNQUFMLENBQVl0USxLQUFaLENBQWtCdUksY0FBYyxDQUFDanRCLENBQUQsQ0FBaEMsRUFBcUNvakIsTUFBTSxDQUFDL0osT0FBNUM7QUFDSDtBQUNKO0FBQ0Q7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7OztXQUNJLG1CQUFVO0FBQ04wQyxXQUFLLENBQUMsU0FBRCxDQUFMO0FBQ0EsV0FBS3dYLElBQUwsQ0FBVWpXLE9BQVYsQ0FBa0IsVUFBQ2dZLFVBQUQ7QUFBQSxlQUFnQkEsVUFBVSxFQUExQjtBQUFBLE9BQWxCO0FBQ0EsV0FBSy9CLElBQUwsQ0FBVXB1QixNQUFWLEdBQW1CLENBQW5CO0FBQ0EsV0FBS2d2QixPQUFMLENBQWEvVyxPQUFiO0FBQ0g7QUFDRDtBQUNKO0FBQ0E7QUFDQTtBQUNBOzs7O1dBQ0ksa0JBQVM7QUFDTHJCLFdBQUssQ0FBQyxZQUFELENBQUw7QUFDQSxXQUFLa1osYUFBTCxHQUFxQixJQUFyQjtBQUNBLFdBQUtILGFBQUwsR0FBcUIsS0FBckI7O0FBQ0EsVUFBSSxjQUFjLEtBQUtmLFdBQXZCLEVBQW9DO0FBQ2hDO0FBQ0E7QUFDQSxhQUFLcFIsT0FBTDtBQUNIOztBQUNELFdBQUttUixPQUFMLENBQWE1YyxLQUFiO0FBQ0EsV0FBSzZjLFdBQUwsR0FBbUIsUUFBbkI7QUFDQSxVQUFJLEtBQUtpQixNQUFULEVBQ0ksS0FBS0EsTUFBTCxDQUFZM1QsS0FBWjtBQUNQO0FBQ0Q7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7OztXQUNJLHNCQUFhO0FBQ1QsYUFBTyxLQUFLdVUsTUFBTCxFQUFQO0FBQ0g7QUFDRDtBQUNKO0FBQ0E7QUFDQTtBQUNBOzs7O1dBQ0ksaUJBQVEzUixNQUFSLEVBQWdCO0FBQ1psSSxXQUFLLENBQUMsU0FBRCxDQUFMO0FBQ0EsV0FBSzRHLE9BQUw7QUFDQSxXQUFLbVIsT0FBTCxDQUFhNWMsS0FBYjtBQUNBLFdBQUs2YyxXQUFMLEdBQW1CLFFBQW5CO0FBQ0EsV0FBS3FCLFlBQUwsQ0FBa0IsT0FBbEIsRUFBMkJuUixNQUEzQjs7QUFDQSxVQUFJLEtBQUtzUSxhQUFMLElBQXNCLENBQUMsS0FBS1UsYUFBaEMsRUFBK0M7QUFDM0MsYUFBS0YsU0FBTDtBQUNIO0FBQ0o7QUFDRDtBQUNKO0FBQ0E7QUFDQTtBQUNBOzs7O1dBQ0kscUJBQVk7QUFBQTs7QUFDUixVQUFJLEtBQUtELGFBQUwsSUFBc0IsS0FBS0csYUFBL0IsRUFDSSxPQUFPLElBQVA7QUFDSixVQUFNbFgsSUFBSSxHQUFHLElBQWI7O0FBQ0EsVUFBSSxLQUFLK1YsT0FBTCxDQUFhamQsUUFBYixJQUF5QixLQUFLMmQscUJBQWxDLEVBQXlEO0FBQ3JEelksYUFBSyxDQUFDLGtCQUFELENBQUw7QUFDQSxhQUFLK1gsT0FBTCxDQUFhNWMsS0FBYjtBQUNBLGFBQUtrZSxZQUFMLENBQWtCLGtCQUFsQjtBQUNBLGFBQUtOLGFBQUwsR0FBcUIsS0FBckI7QUFDSCxPQUxELE1BTUs7QUFDRCxZQUFNdm9CLEtBQUssR0FBRyxLQUFLdW5CLE9BQUwsQ0FBYWhvQixRQUFiLEVBQWQ7QUFDQWlRLGFBQUssQ0FBQyx5Q0FBRCxFQUE0Q3hQLEtBQTVDLENBQUw7QUFDQSxhQUFLdW9CLGFBQUwsR0FBcUIsSUFBckI7QUFDQSxZQUFNdG9CLEtBQUssR0FBR25QLFVBQVUsQ0FBQyxZQUFNO0FBQzNCLGNBQUkwZ0IsSUFBSSxDQUFDa1gsYUFBVCxFQUNJO0FBQ0psWixlQUFLLENBQUMsc0JBQUQsQ0FBTDs7QUFDQSxnQkFBSSxDQUFDcVosWUFBTCxDQUFrQixtQkFBbEIsRUFBdUNyWCxJQUFJLENBQUMrVixPQUFMLENBQWFqZCxRQUFwRCxFQUoyQixDQUszQjs7O0FBQ0EsY0FBSWtILElBQUksQ0FBQ2tYLGFBQVQsRUFDSTtBQUNKbFgsY0FBSSxDQUFDeUQsSUFBTCxDQUFVLFVBQUNxQixHQUFELEVBQVM7QUFDZixnQkFBSUEsR0FBSixFQUFTO0FBQ0w5RyxtQkFBSyxDQUFDLHlCQUFELENBQUw7QUFDQWdDLGtCQUFJLENBQUMrVyxhQUFMLEdBQXFCLEtBQXJCO0FBQ0EvVyxrQkFBSSxDQUFDZ1gsU0FBTDs7QUFDQSxvQkFBSSxDQUFDSyxZQUFMLENBQWtCLGlCQUFsQixFQUFxQ3ZTLEdBQXJDO0FBQ0gsYUFMRCxNQU1LO0FBQ0Q5RyxtQkFBSyxDQUFDLG1CQUFELENBQUw7QUFDQWdDLGtCQUFJLENBQUM4WCxXQUFMO0FBQ0g7QUFDSixXQVhEO0FBWUgsU0FwQnVCLEVBb0JyQnRwQixLQXBCcUIsQ0FBeEI7O0FBcUJBLFlBQUksS0FBS2tLLElBQUwsQ0FBVWtOLFNBQWQsRUFBeUI7QUFDckJuWCxlQUFLLENBQUNvWCxLQUFOO0FBQ0g7O0FBQ0QsYUFBSzJQLElBQUwsQ0FBVW50QixJQUFWLENBQWUsU0FBU2t2QixVQUFULEdBQXNCO0FBQ2pDMW9CLHNCQUFZLENBQUNKLEtBQUQsQ0FBWjtBQUNILFNBRkQ7QUFHSDtBQUNKO0FBQ0Q7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7OztXQUNJLHVCQUFjO0FBQ1YsVUFBTXNwQixPQUFPLEdBQUcsS0FBS2hDLE9BQUwsQ0FBYWpkLFFBQTdCO0FBQ0EsV0FBS2llLGFBQUwsR0FBcUIsS0FBckI7QUFDQSxXQUFLaEIsT0FBTCxDQUFhNWMsS0FBYjtBQUNBLFdBQUtrZSxZQUFMLENBQWtCLFdBQWxCLEVBQStCVSxPQUEvQjtBQUNIOzs7O0VBMVdpQnpDLGNBQWMsQ0FBQzBDLGtCOztBQTRXckN4ZixlQUFBLEdBQWtCd2MsT0FBbEIsQzs7Ozs7Ozs7Ozs7QUN0WGE7O0FBQ2J2c0IsOENBQTZDO0FBQUV5Z0IsT0FBSyxFQUFFO0FBQVQsQ0FBN0M7QUFDQTFRLFVBQUEsR0FBYSxLQUFLLENBQWxCOztBQUNBLFNBQVM4QixFQUFULENBQVluTCxHQUFaLEVBQWlCNmQsRUFBakIsRUFBcUJ4UyxFQUFyQixFQUF5QjtBQUNyQnJMLEtBQUcsQ0FBQ21MLEVBQUosQ0FBTzBTLEVBQVAsRUFBV3hTLEVBQVg7QUFDQSxTQUFPLFNBQVMrYyxVQUFULEdBQXNCO0FBQ3pCcG9CLE9BQUcsQ0FBQ3dMLEdBQUosQ0FBUXFTLEVBQVIsRUFBWXhTLEVBQVo7QUFDSCxHQUZEO0FBR0g7O0FBQ0RoQyxVQUFBLEdBQWE4QixFQUFiLEM7Ozs7Ozs7Ozs7O0FDVGE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDYjdSLDhDQUE2QztBQUFFeWdCLE9BQUssRUFBRTtBQUFULENBQTdDO0FBQ0ExUSxjQUFBLEdBQWlCLEtBQUssQ0FBdEI7O0FBQ0EsSUFBTXljLGtCQUFrQixHQUFHNW1CLG1CQUFPLENBQUMsdUVBQUQsQ0FBbEM7O0FBQ0EsSUFBTWduQixJQUFJLEdBQUdobkIsbUJBQU8sQ0FBQyx5REFBRCxDQUFwQjs7QUFDQSxJQUFNaW5CLGNBQWMsR0FBR2puQixtQkFBTyxDQUFDLDZFQUFELENBQTlCOztBQUNBLElBQU0yUCxLQUFLLEdBQUczUCxtQkFBTyxDQUFDLGtEQUFELENBQVAsQ0FBaUIseUJBQWpCLENBQWQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsSUFBTTRwQixlQUFlLEdBQUd4dkIsTUFBTSxDQUFDeXZCLE1BQVAsQ0FBYztBQUNsQ0MsU0FBTyxFQUFFLENBRHlCO0FBRWxDQyxlQUFhLEVBQUUsQ0FGbUI7QUFHbENDLFlBQVUsRUFBRSxDQUhzQjtBQUlsQ0MsZUFBYSxFQUFFLENBSm1CO0FBS2xDO0FBQ0FDLGFBQVcsRUFBRSxDQU5xQjtBQU9sQzNkLGdCQUFjLEVBQUU7QUFQa0IsQ0FBZCxDQUF4Qjs7SUFTTTBHLE07Ozs7O0FBQ0Y7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNJLGtCQUFZeVQsRUFBWixFQUFnQjRDLEdBQWhCLEVBQXFCamYsSUFBckIsRUFBMkI7QUFBQTs7QUFBQTs7QUFDdkI7QUFDQSxVQUFLOGYsYUFBTCxHQUFxQixFQUFyQjtBQUNBLFVBQUtDLFVBQUwsR0FBa0IsRUFBbEI7QUFDQSxVQUFLQyxHQUFMLEdBQVcsQ0FBWDtBQUNBLFVBQUtDLElBQUwsR0FBWSxFQUFaO0FBQ0EsVUFBS0MsS0FBTCxHQUFhLEVBQWI7QUFDQSxVQUFLN0QsRUFBTCxHQUFVQSxFQUFWO0FBQ0EsVUFBSzRDLEdBQUwsR0FBV0EsR0FBWDtBQUNBLFVBQUtlLEdBQUwsR0FBVyxDQUFYO0FBQ0EsVUFBS0MsSUFBTCxHQUFZLEVBQVo7QUFDQSxVQUFLSCxhQUFMLEdBQXFCLEVBQXJCO0FBQ0EsVUFBS0MsVUFBTCxHQUFrQixFQUFsQjtBQUNBLFVBQUtJLFNBQUwsR0FBaUIsS0FBakI7QUFDQSxVQUFLQyxZQUFMLEdBQW9CLElBQXBCO0FBQ0EsVUFBS0YsS0FBTCxHQUFhLEVBQWI7O0FBQ0EsUUFBSWxnQixJQUFJLElBQUlBLElBQUksQ0FBQ3FnQixJQUFqQixFQUF1QjtBQUNuQixZQUFLQSxJQUFMLEdBQVlyZ0IsSUFBSSxDQUFDcWdCLElBQWpCO0FBQ0g7O0FBQ0QsUUFBSSxNQUFLaEUsRUFBTCxDQUFRdUIsWUFBWixFQUNJLE1BQUs3UyxJQUFMO0FBcEJtQjtBQXFCMUI7QUFDRDtBQUNKO0FBQ0E7QUFDQTtBQUNBOzs7OztXQUNJLHFCQUFZO0FBQ1IsVUFBSSxLQUFLK1IsSUFBVCxFQUNJO0FBQ0osVUFBTVQsRUFBRSxHQUFHLEtBQUtBLEVBQWhCO0FBQ0EsV0FBS1MsSUFBTCxHQUFZLENBQ1JILElBQUksQ0FBQy9hLEVBQUwsQ0FBUXlhLEVBQVIsRUFBWSxNQUFaLEVBQW9CLEtBQUtsSSxNQUFMLENBQVluckIsSUFBWixDQUFpQixJQUFqQixDQUFwQixDQURRLEVBRVIyekIsSUFBSSxDQUFDL2EsRUFBTCxDQUFReWEsRUFBUixFQUFZLFFBQVosRUFBc0IsS0FBS2lFLFFBQUwsQ0FBY3QzQixJQUFkLENBQW1CLElBQW5CLENBQXRCLENBRlEsRUFHUjJ6QixJQUFJLENBQUMvYSxFQUFMLENBQVF5YSxFQUFSLEVBQVksT0FBWixFQUFxQixLQUFLL1AsT0FBTCxDQUFhdGpCLElBQWIsQ0FBa0IsSUFBbEIsQ0FBckIsQ0FIUSxFQUlSMnpCLElBQUksQ0FBQy9hLEVBQUwsQ0FBUXlhLEVBQVIsRUFBWSxPQUFaLEVBQXFCLEtBQUs3UCxPQUFMLENBQWF4akIsSUFBYixDQUFrQixJQUFsQixDQUFyQixDQUpRLENBQVo7QUFNSDtBQUNEO0FBQ0o7QUFDQTs7OztTQUNJLGVBQWE7QUFDVCxhQUFPLENBQUMsQ0FBQyxLQUFLOHpCLElBQWQ7QUFDSDtBQUNEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7Ozs7V0FDSSxtQkFBVTtBQUNOLFVBQUksS0FBS3FELFNBQVQsRUFDSSxPQUFPLElBQVA7QUFDSixXQUFLSSxTQUFMO0FBQ0EsVUFBSSxDQUFDLEtBQUtsRSxFQUFMLENBQVEsZUFBUixDQUFMLEVBQ0ksS0FBS0EsRUFBTCxDQUFRdFIsSUFBUixHQUxFLENBS2M7O0FBQ3BCLFVBQUksV0FBVyxLQUFLc1IsRUFBTCxDQUFRaUIsV0FBdkIsRUFDSSxLQUFLbkosTUFBTDtBQUNKLGFBQU8sSUFBUDtBQUNIO0FBQ0Q7QUFDSjtBQUNBOzs7O1dBQ0ksZ0JBQU87QUFDSCxhQUFPLEtBQUtzTCxPQUFMLEVBQVA7QUFDSDtBQUNEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztXQUNJLGdCQUFjO0FBQUEsd0NBQU54cEIsSUFBTTtBQUFOQSxZQUFNO0FBQUE7O0FBQ1ZBLFVBQUksQ0FBQ3lSLE9BQUwsQ0FBYSxTQUFiO0FBQ0EsV0FBS3JULElBQUwsQ0FBVStCLEtBQVYsQ0FBZ0IsSUFBaEIsRUFBc0JILElBQXRCO0FBQ0EsYUFBTyxJQUFQO0FBQ0g7QUFDRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztXQUNJLGNBQUtxZSxFQUFMLEVBQWtCO0FBQ2QsVUFBSWlMLGVBQWUsQ0FBQ3hvQixjQUFoQixDQUErQnVkLEVBQS9CLENBQUosRUFBd0M7QUFDcEMsY0FBTSxJQUFJcFIsS0FBSixDQUFVLE1BQU1vUixFQUFOLEdBQVcsNEJBQXJCLENBQU47QUFDSDs7QUFIYSx5Q0FBTnJlLElBQU07QUFBTkEsWUFBTTtBQUFBOztBQUlkQSxVQUFJLENBQUN5UixPQUFMLENBQWE0TSxFQUFiO0FBQ0EsVUFBTTNILE1BQU0sR0FBRztBQUNYM1QsWUFBSSxFQUFFdWpCLGtCQUFrQixDQUFDaUUsVUFBbkIsQ0FBOEJDLEtBRHpCO0FBRVgxVSxZQUFJLEVBQUU5VjtBQUZLLE9BQWY7QUFJQTBXLFlBQU0sQ0FBQy9KLE9BQVAsR0FBaUIsRUFBakI7QUFDQStKLFlBQU0sQ0FBQy9KLE9BQVAsQ0FBZXlLLFFBQWYsR0FBMEIsS0FBSzZTLEtBQUwsQ0FBVzdTLFFBQVgsS0FBd0IsS0FBbEQsQ0FWYyxDQVdkOztBQUNBLFVBQUksZUFBZSxPQUFPcFgsSUFBSSxDQUFDQSxJQUFJLENBQUN2SCxNQUFMLEdBQWMsQ0FBZixDQUE5QixFQUFpRDtBQUM3QzRXLGFBQUssQ0FBQyxnQ0FBRCxFQUFtQyxLQUFLMGEsR0FBeEMsQ0FBTDtBQUNBLGFBQUtDLElBQUwsQ0FBVSxLQUFLRCxHQUFmLElBQXNCL3BCLElBQUksQ0FBQ3lxQixHQUFMLEVBQXRCO0FBQ0EvVCxjQUFNLENBQUMvaEIsRUFBUCxHQUFZLEtBQUtvMUIsR0FBTCxFQUFaO0FBQ0g7O0FBQ0QsVUFBTVcsbUJBQW1CLEdBQUcsS0FBS3RFLEVBQUwsQ0FBUWtDLE1BQVIsSUFDeEIsS0FBS2xDLEVBQUwsQ0FBUWtDLE1BQVIsQ0FBZTVULFNBRFMsSUFFeEIsS0FBSzBSLEVBQUwsQ0FBUWtDLE1BQVIsQ0FBZTVULFNBQWYsQ0FBeUJ5QyxRQUY3QjtBQUdBLFVBQU13VCxhQUFhLEdBQUcsS0FBS1YsS0FBTCxDQUFXVyxRQUFYLEtBQXdCLENBQUNGLG1CQUFELElBQXdCLENBQUMsS0FBS1IsU0FBdEQsQ0FBdEI7O0FBQ0EsVUFBSVMsYUFBSixFQUFtQjtBQUNmdGIsYUFBSyxDQUFDLDJEQUFELENBQUw7QUFDSCxPQUZELE1BR0ssSUFBSSxLQUFLNmEsU0FBVCxFQUFvQjtBQUNyQixhQUFLeFQsTUFBTCxDQUFZQSxNQUFaO0FBQ0gsT0FGSSxNQUdBO0FBQ0QsYUFBS29ULFVBQUwsQ0FBZ0Jwd0IsSUFBaEIsQ0FBcUJnZCxNQUFyQjtBQUNIOztBQUNELFdBQUt1VCxLQUFMLEdBQWEsRUFBYjtBQUNBLGFBQU8sSUFBUDtBQUNIO0FBQ0Q7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O1dBQ0ksZ0JBQU92VCxPQUFQLEVBQWU7QUFDWEEsYUFBTSxDQUFDc1MsR0FBUCxHQUFhLEtBQUtBLEdBQWxCOztBQUNBLFdBQUs1QyxFQUFMLENBQVF5RSxPQUFSLENBQWdCblUsT0FBaEI7QUFDSDtBQUNEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7Ozs7V0FDSSxrQkFBUztBQUFBOztBQUNMckgsV0FBSyxDQUFDLGdDQUFELENBQUw7O0FBQ0EsVUFBSSxPQUFPLEtBQUsrYSxJQUFaLElBQW9CLFVBQXhCLEVBQW9DO0FBQ2hDLGFBQUtBLElBQUwsQ0FBVSxVQUFDdFUsSUFBRCxFQUFVO0FBQ2hCLGdCQUFJLENBQUNZLE1BQUwsQ0FBWTtBQUFFM1QsZ0JBQUksRUFBRXVqQixrQkFBa0IsQ0FBQ2lFLFVBQW5CLENBQThCTyxPQUF0QztBQUErQ2hWLGdCQUFJLEVBQUpBO0FBQS9DLFdBQVo7QUFDSCxTQUZEO0FBR0gsT0FKRCxNQUtLO0FBQ0QsYUFBS1ksTUFBTCxDQUFZO0FBQUUzVCxjQUFJLEVBQUV1akIsa0JBQWtCLENBQUNpRSxVQUFuQixDQUE4Qk8sT0FBdEM7QUFBK0NoVixjQUFJLEVBQUUsS0FBS3NVO0FBQTFELFNBQVo7QUFDSDtBQUNKO0FBQ0Q7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O1dBQ0ksaUJBQVFqVSxHQUFSLEVBQWE7QUFDVCxVQUFJLENBQUMsS0FBSytULFNBQVYsRUFBcUI7QUFDakIsYUFBS3hCLFlBQUwsQ0FBa0IsZUFBbEIsRUFBbUN2UyxHQUFuQztBQUNIO0FBQ0o7QUFDRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7V0FDSSxpQkFBUW9CLE1BQVIsRUFBZ0I7QUFDWmxJLFdBQUssQ0FBQyxZQUFELEVBQWVrSSxNQUFmLENBQUw7QUFDQSxXQUFLMlMsU0FBTCxHQUFpQixLQUFqQjtBQUNBLFdBQUtDLFlBQUwsR0FBb0IsSUFBcEI7QUFDQSxhQUFPLEtBQUt4MUIsRUFBWjtBQUNBLFdBQUsrekIsWUFBTCxDQUFrQixZQUFsQixFQUFnQ25SLE1BQWhDO0FBQ0g7QUFDRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7V0FDSSxrQkFBU2IsTUFBVCxFQUFpQjtBQUNiLFVBQU1zUCxhQUFhLEdBQUd0UCxNQUFNLENBQUNzUyxHQUFQLEtBQWUsS0FBS0EsR0FBMUM7QUFDQSxVQUFJLENBQUNoRCxhQUFMLEVBQ0k7O0FBQ0osY0FBUXRQLE1BQU0sQ0FBQzNULElBQWY7QUFDSSxhQUFLdWpCLGtCQUFrQixDQUFDaUUsVUFBbkIsQ0FBOEJPLE9BQW5DO0FBQ0ksY0FBSXBVLE1BQU0sQ0FBQ1osSUFBUCxJQUFlWSxNQUFNLENBQUNaLElBQVAsQ0FBWWIsR0FBL0IsRUFBb0M7QUFDaEMsZ0JBQU10Z0IsRUFBRSxHQUFHK2hCLE1BQU0sQ0FBQ1osSUFBUCxDQUFZYixHQUF2QjtBQUNBLGlCQUFLOFYsU0FBTCxDQUFlcDJCLEVBQWY7QUFDSCxXQUhELE1BSUs7QUFDRCxpQkFBSyt6QixZQUFMLENBQWtCLGVBQWxCLEVBQW1DLElBQUl6YixLQUFKLENBQVUsMkxBQVYsQ0FBbkM7QUFDSDs7QUFDRDs7QUFDSixhQUFLcVosa0JBQWtCLENBQUNpRSxVQUFuQixDQUE4QkMsS0FBbkM7QUFDSSxlQUFLUSxPQUFMLENBQWF0VSxNQUFiO0FBQ0E7O0FBQ0osYUFBSzRQLGtCQUFrQixDQUFDaUUsVUFBbkIsQ0FBOEJVLFlBQW5DO0FBQ0ksZUFBS0QsT0FBTCxDQUFhdFUsTUFBYjtBQUNBOztBQUNKLGFBQUs0UCxrQkFBa0IsQ0FBQ2lFLFVBQW5CLENBQThCVyxHQUFuQztBQUNJLGVBQUtDLEtBQUwsQ0FBV3pVLE1BQVg7QUFDQTs7QUFDSixhQUFLNFAsa0JBQWtCLENBQUNpRSxVQUFuQixDQUE4QmEsVUFBbkM7QUFDSSxlQUFLRCxLQUFMLENBQVd6VSxNQUFYO0FBQ0E7O0FBQ0osYUFBSzRQLGtCQUFrQixDQUFDaUUsVUFBbkIsQ0FBOEJjLFVBQW5DO0FBQ0ksZUFBS0MsWUFBTDtBQUNBOztBQUNKLGFBQUtoRixrQkFBa0IsQ0FBQ2lFLFVBQW5CLENBQThCZ0IsYUFBbkM7QUFDSSxjQUFNcFYsR0FBRyxHQUFHLElBQUlsSixLQUFKLENBQVV5SixNQUFNLENBQUNaLElBQVAsQ0FBWTVGLE9BQXRCLENBQVosQ0FESixDQUVJOztBQUNBaUcsYUFBRyxDQUFDTCxJQUFKLEdBQVdZLE1BQU0sQ0FBQ1osSUFBUCxDQUFZQSxJQUF2QjtBQUNBLGVBQUs0UyxZQUFMLENBQWtCLGVBQWxCLEVBQW1DdlMsR0FBbkM7QUFDQTtBQTlCUjtBQWdDSDtBQUNEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztXQUNJLGlCQUFRTyxNQUFSLEVBQWdCO0FBQ1osVUFBTTFXLElBQUksR0FBRzBXLE1BQU0sQ0FBQ1osSUFBUCxJQUFlLEVBQTVCO0FBQ0F6RyxXQUFLLENBQUMsbUJBQUQsRUFBc0JyUCxJQUF0QixDQUFMOztBQUNBLFVBQUksUUFBUTBXLE1BQU0sQ0FBQy9oQixFQUFuQixFQUF1QjtBQUNuQjBhLGFBQUssQ0FBQyxpQ0FBRCxDQUFMO0FBQ0FyUCxZQUFJLENBQUN0RyxJQUFMLENBQVUsS0FBSzh4QixHQUFMLENBQVM5VSxNQUFNLENBQUMvaEIsRUFBaEIsQ0FBVjtBQUNIOztBQUNELFVBQUksS0FBS3UxQixTQUFULEVBQW9CO0FBQ2hCLGFBQUt1QixTQUFMLENBQWV6ckIsSUFBZjtBQUNILE9BRkQsTUFHSztBQUNELGFBQUs2cEIsYUFBTCxDQUFtQm53QixJQUFuQixDQUF3QkksTUFBTSxDQUFDeXZCLE1BQVAsQ0FBY3ZwQixJQUFkLENBQXhCO0FBQ0g7QUFDSjs7O1dBQ0QsbUJBQVVBLElBQVYsRUFBZ0I7QUFDWixVQUFJLEtBQUswckIsYUFBTCxJQUFzQixLQUFLQSxhQUFMLENBQW1CanpCLE1BQTdDLEVBQXFEO0FBQ2pELFlBQU04VCxTQUFTLEdBQUcsS0FBS21mLGFBQUwsQ0FBbUJwZixLQUFuQixFQUFsQjs7QUFEaUQsbURBRTFCQyxTQUYwQjtBQUFBOztBQUFBO0FBRWpELDhEQUFrQztBQUFBLGdCQUF2Qm9mLFFBQXVCO0FBQzlCQSxvQkFBUSxDQUFDeHJCLEtBQVQsQ0FBZSxJQUFmLEVBQXFCSCxJQUFyQjtBQUNIO0FBSmdEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLcEQ7O0FBQ0QsNERBQVdHLEtBQVgsQ0FBaUIsSUFBakIsRUFBdUJILElBQXZCO0FBQ0g7QUFDRDtBQUNKO0FBQ0E7QUFDQTtBQUNBOzs7O1dBQ0ksYUFBSXJMLEVBQUosRUFBUTtBQUNKLFVBQU0wYyxJQUFJLEdBQUcsSUFBYjtBQUNBLFVBQUl1YSxJQUFJLEdBQUcsS0FBWDtBQUNBLGFBQU8sWUFBbUI7QUFDdEI7QUFDQSxZQUFJQSxJQUFKLEVBQ0k7QUFDSkEsWUFBSSxHQUFHLElBQVA7O0FBSnNCLDJDQUFONXJCLElBQU07QUFBTkEsY0FBTTtBQUFBOztBQUt0QnFQLGFBQUssQ0FBQyxnQkFBRCxFQUFtQnJQLElBQW5CLENBQUw7QUFDQXFSLFlBQUksQ0FBQ3FGLE1BQUwsQ0FBWTtBQUNSM1QsY0FBSSxFQUFFdWpCLGtCQUFrQixDQUFDaUUsVUFBbkIsQ0FBOEJXLEdBRDVCO0FBRVJ2MkIsWUFBRSxFQUFFQSxFQUZJO0FBR1JtaEIsY0FBSSxFQUFFOVY7QUFIRSxTQUFaO0FBS0gsT0FYRDtBQVlIO0FBQ0Q7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O1dBQ0ksZUFBTTBXLE1BQU4sRUFBYztBQUNWLFVBQU04VSxHQUFHLEdBQUcsS0FBS3hCLElBQUwsQ0FBVXRULE1BQU0sQ0FBQy9oQixFQUFqQixDQUFaOztBQUNBLFVBQUksZUFBZSxPQUFPNjJCLEdBQTFCLEVBQStCO0FBQzNCbmMsYUFBSyxDQUFDLHdCQUFELEVBQTJCcUgsTUFBTSxDQUFDL2hCLEVBQWxDLEVBQXNDK2hCLE1BQU0sQ0FBQ1osSUFBN0MsQ0FBTDtBQUNBMFYsV0FBRyxDQUFDcnJCLEtBQUosQ0FBVSxJQUFWLEVBQWdCdVcsTUFBTSxDQUFDWixJQUF2QjtBQUNBLGVBQU8sS0FBS2tVLElBQUwsQ0FBVXRULE1BQU0sQ0FBQy9oQixFQUFqQixDQUFQO0FBQ0gsT0FKRCxNQUtLO0FBQ0QwYSxhQUFLLENBQUMsWUFBRCxFQUFlcUgsTUFBTSxDQUFDL2hCLEVBQXRCLENBQUw7QUFDSDtBQUNKO0FBQ0Q7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7OztXQUNJLG1CQUFVQSxFQUFWLEVBQWM7QUFDVjBhLFdBQUssQ0FBQyw2QkFBRCxFQUFnQzFhLEVBQWhDLENBQUw7QUFDQSxXQUFLQSxFQUFMLEdBQVVBLEVBQVY7QUFDQSxXQUFLdTFCLFNBQUwsR0FBaUIsSUFBakI7QUFDQSxXQUFLQyxZQUFMLEdBQW9CLEtBQXBCO0FBQ0EsV0FBSzBCLFlBQUw7QUFDQSxXQUFLbkQsWUFBTCxDQUFrQixTQUFsQjtBQUNIO0FBQ0Q7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7OztXQUNJLHdCQUFlO0FBQUE7O0FBQ1gsV0FBS21CLGFBQUwsQ0FBbUJqWixPQUFuQixDQUEyQixVQUFDNVEsSUFBRDtBQUFBLGVBQVUsTUFBSSxDQUFDeXJCLFNBQUwsQ0FBZXpyQixJQUFmLENBQVY7QUFBQSxPQUEzQjtBQUNBLFdBQUs2cEIsYUFBTCxHQUFxQixFQUFyQjtBQUNBLFdBQUtDLFVBQUwsQ0FBZ0JsWixPQUFoQixDQUF3QixVQUFDOEYsTUFBRDtBQUFBLGVBQVksTUFBSSxDQUFDQSxNQUFMLENBQVlBLE1BQVosQ0FBWjtBQUFBLE9BQXhCO0FBQ0EsV0FBS29ULFVBQUwsR0FBa0IsRUFBbEI7QUFDSDtBQUNEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7Ozs7V0FDSSx3QkFBZTtBQUNYemEsV0FBSyxDQUFDLHdCQUFELEVBQTJCLEtBQUsyWixHQUFoQyxDQUFMO0FBQ0EsV0FBS3RZLE9BQUw7QUFDQSxXQUFLNkYsT0FBTCxDQUFhLHNCQUFiO0FBQ0g7QUFDRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztXQUNJLG1CQUFVO0FBQ04sVUFBSSxLQUFLc1EsSUFBVCxFQUFlO0FBQ1g7QUFDQSxhQUFLQSxJQUFMLENBQVVqVyxPQUFWLENBQWtCLFVBQUNnWSxVQUFEO0FBQUEsaUJBQWdCQSxVQUFVLEVBQTFCO0FBQUEsU0FBbEI7QUFDQSxhQUFLL0IsSUFBTCxHQUFZeHNCLFNBQVo7QUFDSDs7QUFDRCxXQUFLK3JCLEVBQUwsQ0FBUSxVQUFSLEVBQW9CLElBQXBCO0FBQ0g7QUFDRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7V0FDSSxzQkFBYTtBQUNULFVBQUksS0FBSzhELFNBQVQsRUFBb0I7QUFDaEI3YSxhQUFLLENBQUMsNEJBQUQsRUFBK0IsS0FBSzJaLEdBQXBDLENBQUw7QUFDQSxhQUFLdFMsTUFBTCxDQUFZO0FBQUUzVCxjQUFJLEVBQUV1akIsa0JBQWtCLENBQUNpRSxVQUFuQixDQUE4QmM7QUFBdEMsU0FBWjtBQUNILE9BSlEsQ0FLVDs7O0FBQ0EsV0FBSzNhLE9BQUw7O0FBQ0EsVUFBSSxLQUFLd1osU0FBVCxFQUFvQjtBQUNoQjtBQUNBLGFBQUszVCxPQUFMLENBQWEsc0JBQWI7QUFDSDs7QUFDRCxhQUFPLElBQVA7QUFDSDtBQUNEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztXQUNJLGlCQUFRO0FBQ0osYUFBTyxLQUFLbVQsVUFBTCxFQUFQO0FBQ0g7QUFDRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztXQUNJLGtCQUFTdFMsU0FBVCxFQUFtQjtBQUNmLFdBQUs2UyxLQUFMLENBQVc3UyxRQUFYLEdBQXNCQSxTQUF0QjtBQUNBLGFBQU8sSUFBUDtBQUNIO0FBQ0Q7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7U0FDSSxlQUFlO0FBQ1gsV0FBSzZTLEtBQUwsQ0FBV1csUUFBWCxHQUFzQixJQUF0QjtBQUNBLGFBQU8sSUFBUDtBQUNIO0FBQ0Q7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7V0FDSSxlQUFNZSxRQUFOLEVBQWdCO0FBQ1osV0FBS0QsYUFBTCxHQUFxQixLQUFLQSxhQUFMLElBQXNCLEVBQTNDOztBQUNBLFdBQUtBLGFBQUwsQ0FBbUJoeUIsSUFBbkIsQ0FBd0JpeUIsUUFBeEI7O0FBQ0EsYUFBTyxJQUFQO0FBQ0g7QUFDRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztXQUNJLG9CQUFXQSxRQUFYLEVBQXFCO0FBQ2pCLFdBQUtELGFBQUwsR0FBcUIsS0FBS0EsYUFBTCxJQUFzQixFQUEzQzs7QUFDQSxXQUFLQSxhQUFMLENBQW1CamEsT0FBbkIsQ0FBMkJrYSxRQUEzQjs7QUFDQSxhQUFPLElBQVA7QUFDSDtBQUNEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztXQUNJLGdCQUFPQSxRQUFQLEVBQWlCO0FBQ2IsVUFBSSxDQUFDLEtBQUtELGFBQVYsRUFBeUI7QUFDckIsZUFBTyxJQUFQO0FBQ0g7O0FBQ0QsVUFBSUMsUUFBSixFQUFjO0FBQ1YsWUFBTXBmLFNBQVMsR0FBRyxLQUFLbWYsYUFBdkI7O0FBQ0EsYUFBSyxJQUFJcDRCLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdpWixTQUFTLENBQUM5VCxNQUE5QixFQUFzQ25GLENBQUMsRUFBdkMsRUFBMkM7QUFDdkMsY0FBSXE0QixRQUFRLEtBQUtwZixTQUFTLENBQUNqWixDQUFELENBQTFCLEVBQStCO0FBQzNCaVoscUJBQVMsQ0FBQ0YsTUFBVixDQUFpQi9ZLENBQWpCLEVBQW9CLENBQXBCO0FBQ0EsbUJBQU8sSUFBUDtBQUNIO0FBQ0o7QUFDSixPQVJELE1BU0s7QUFDRCxhQUFLbzRCLGFBQUwsR0FBcUIsRUFBckI7QUFDSDs7QUFDRCxhQUFPLElBQVA7QUFDSDtBQUNEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztXQUNJLHdCQUFlO0FBQ1gsYUFBTyxLQUFLQSxhQUFMLElBQXNCLEVBQTdCO0FBQ0g7Ozs7RUFyYmdCL0UsY0FBYyxDQUFDMEMsa0I7O0FBdWJwQ3hmLGNBQUEsR0FBaUI4SSxNQUFqQixDOzs7Ozs7Ozs7OztBQzNjYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNiN1ksOENBQTZDO0FBQUV5Z0IsT0FBSyxFQUFFO0FBQVQsQ0FBN0M7QUFDQTFRLDBCQUFBLEdBQTZCLEtBQUssQ0FBbEM7O0FBQ0EsSUFBTTRCLE9BQU8sR0FBRy9MLG1CQUFPLENBQUMsb0VBQUQsQ0FBdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0lBQ00ycEIsa0I7Ozs7Ozs7Ozs7Ozs7O0FBQ0Y7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0ksZ0JBQUdoTCxFQUFILEVBQU9zTixRQUFQLEVBQWlCO0FBQ2IsaUZBQVN0TixFQUFULEVBQWFzTixRQUFiOztBQUNBLGFBQU8sSUFBUDtBQUNIO0FBQ0Q7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O1dBQ0ksY0FBS3ROLEVBQUwsRUFBU3NOLFFBQVQsRUFBbUI7QUFDZixtRkFBV3ROLEVBQVgsRUFBZXNOLFFBQWY7O0FBQ0EsYUFBTyxJQUFQO0FBQ0g7QUFDRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7V0FDSSxjQUFLdE4sRUFBTCxFQUFrQjtBQUFBOztBQUFBLHdDQUFOcmUsSUFBTTtBQUFOQSxZQUFNO0FBQUE7O0FBQ2QsMkdBQVdxZSxFQUFYLFNBQWtCcmUsSUFBbEI7O0FBQ0EsYUFBTyxJQUFQO0FBQ0g7QUFDRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7V0FDSSxzQkFBYXFlLEVBQWIsRUFBMEI7QUFBQTs7QUFBQSx5Q0FBTnJlLElBQU07QUFBTkEsWUFBTTtBQUFBOztBQUN0QiwyR0FBV3FlLEVBQVgsU0FBa0JyZSxJQUFsQjs7QUFDQSxhQUFPLElBQVA7QUFDSDtBQUNEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztXQUNJLG1CQUFVNEwsS0FBVixFQUFpQjtBQUNiLCtGQUF1QkEsS0FBdkI7QUFDSDs7OztFQXBENEJILE87O0FBc0RqQzVCLDBCQUFBLEdBQTZCd2Ysa0JBQTdCLEM7Ozs7Ozs7Ozs7O0FDdkVhOztBQUNidnZCLDhDQUE2QztBQUFFeWdCLE9BQUssRUFBRTtBQUFULENBQTdDO0FBQ0ExUSxXQUFBLEdBQWMsS0FBSyxDQUFuQjs7QUFDQSxJQUFNbUosUUFBUSxHQUFHdFQsbUJBQU8sQ0FBQyxrREFBRCxDQUF4Qjs7QUFDQSxJQUFNMlAsS0FBSyxHQUFHM1AsbUJBQU8sQ0FBQyxrREFBRCxDQUFQLENBQWlCLHNCQUFqQixDQUFkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxTQUFTNEcsR0FBVCxDQUFhc00sR0FBYixFQUFrQztBQUFBLE1BQWhCcGMsSUFBZ0IsdUVBQVQsRUFBUztBQUFBLE1BQUxzMUIsR0FBSztBQUM5QixNQUFJdHJCLEdBQUcsR0FBR29TLEdBQVYsQ0FEOEIsQ0FFOUI7O0FBQ0FrWixLQUFHLEdBQUdBLEdBQUcsSUFBSyxPQUFPLzBCLFFBQVAsS0FBb0IsV0FBcEIsSUFBbUNBLFFBQWpEO0FBQ0EsTUFBSSxRQUFRNmIsR0FBWixFQUNJQSxHQUFHLEdBQUdrWixHQUFHLENBQUNqWixRQUFKLEdBQWUsSUFBZixHQUFzQmlaLEdBQUcsQ0FBQzNZLElBQWhDLENBTDBCLENBTTlCOztBQUNBLE1BQUksT0FBT1AsR0FBUCxLQUFlLFFBQW5CLEVBQTZCO0FBQ3pCLFFBQUksUUFBUUEsR0FBRyxDQUFDMk0sTUFBSixDQUFXLENBQVgsQ0FBWixFQUEyQjtBQUN2QixVQUFJLFFBQVEzTSxHQUFHLENBQUMyTSxNQUFKLENBQVcsQ0FBWCxDQUFaLEVBQTJCO0FBQ3ZCM00sV0FBRyxHQUFHa1osR0FBRyxDQUFDalosUUFBSixHQUFlRCxHQUFyQjtBQUNILE9BRkQsTUFHSztBQUNEQSxXQUFHLEdBQUdrWixHQUFHLENBQUMzWSxJQUFKLEdBQVdQLEdBQWpCO0FBQ0g7QUFDSjs7QUFDRCxRQUFJLENBQUMsc0JBQXNCbFIsSUFBdEIsQ0FBMkJrUixHQUEzQixDQUFMLEVBQXNDO0FBQ2xDdkQsV0FBSyxDQUFDLHNCQUFELEVBQXlCdUQsR0FBekIsQ0FBTDs7QUFDQSxVQUFJLGdCQUFnQixPQUFPa1osR0FBM0IsRUFBZ0M7QUFDNUJsWixXQUFHLEdBQUdrWixHQUFHLENBQUNqWixRQUFKLEdBQWUsSUFBZixHQUFzQkQsR0FBNUI7QUFDSCxPQUZELE1BR0s7QUFDREEsV0FBRyxHQUFHLGFBQWFBLEdBQW5CO0FBQ0g7QUFDSixLQWpCd0IsQ0FrQnpCOzs7QUFDQXZELFNBQUssQ0FBQyxVQUFELEVBQWF1RCxHQUFiLENBQUw7QUFDQXBTLE9BQUcsR0FBR3dTLFFBQVEsQ0FBQ0osR0FBRCxDQUFkO0FBQ0gsR0E1QjZCLENBNkI5Qjs7O0FBQ0EsTUFBSSxDQUFDcFMsR0FBRyxDQUFDNlMsSUFBVCxFQUFlO0FBQ1gsUUFBSSxjQUFjM1IsSUFBZCxDQUFtQmxCLEdBQUcsQ0FBQ3FTLFFBQXZCLENBQUosRUFBc0M7QUFDbENyUyxTQUFHLENBQUM2UyxJQUFKLEdBQVcsSUFBWDtBQUNILEtBRkQsTUFHSyxJQUFJLGVBQWUzUixJQUFmLENBQW9CbEIsR0FBRyxDQUFDcVMsUUFBeEIsQ0FBSixFQUF1QztBQUN4Q3JTLFNBQUcsQ0FBQzZTLElBQUosR0FBVyxLQUFYO0FBQ0g7QUFDSjs7QUFDRDdTLEtBQUcsQ0FBQ2hLLElBQUosR0FBV2dLLEdBQUcsQ0FBQ2hLLElBQUosSUFBWSxHQUF2QjtBQUNBLE1BQU02bUIsSUFBSSxHQUFHN2MsR0FBRyxDQUFDMlMsSUFBSixDQUFTdlMsT0FBVCxDQUFpQixHQUFqQixNQUEwQixDQUFDLENBQXhDO0FBQ0EsTUFBTXVTLElBQUksR0FBR2tLLElBQUksR0FBRyxNQUFNN2MsR0FBRyxDQUFDMlMsSUFBVixHQUFpQixHQUFwQixHQUEwQjNTLEdBQUcsQ0FBQzJTLElBQS9DLENBeEM4QixDQXlDOUI7O0FBQ0EzUyxLQUFHLENBQUM3TCxFQUFKLEdBQVM2TCxHQUFHLENBQUNxUyxRQUFKLEdBQWUsS0FBZixHQUF1Qk0sSUFBdkIsR0FBOEIsR0FBOUIsR0FBb0MzUyxHQUFHLENBQUM2UyxJQUF4QyxHQUErQzdjLElBQXhELENBMUM4QixDQTJDOUI7O0FBQ0FnSyxLQUFHLENBQUN1ckIsSUFBSixHQUNJdnJCLEdBQUcsQ0FBQ3FTLFFBQUosR0FDSSxLQURKLEdBRUlNLElBRkosSUFHSzJZLEdBQUcsSUFBSUEsR0FBRyxDQUFDelksSUFBSixLQUFhN1MsR0FBRyxDQUFDNlMsSUFBeEIsR0FBK0IsRUFBL0IsR0FBb0MsTUFBTTdTLEdBQUcsQ0FBQzZTLElBSG5ELENBREo7QUFLQSxTQUFPN1MsR0FBUDtBQUNIOztBQUNEcUosV0FBQSxHQUFjdkQsR0FBZCxDOzs7Ozs7Ozs7OztBQ2pFYTs7OztBQUNieE0sOENBQTZDO0FBQUV5Z0IsT0FBSyxFQUFFO0FBQVQsQ0FBN0M7QUFDQTFRLHlCQUFBLEdBQTRCQSx5QkFBQSxHQUE0QixLQUFLLENBQTdEOztBQUNBLElBQU1taUIsV0FBVyxHQUFHdHNCLG1CQUFPLENBQUMsc0VBQUQsQ0FBM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsU0FBU3VzQixpQkFBVCxDQUEyQnZWLE1BQTNCLEVBQW1DO0FBQy9CLE1BQU13VixPQUFPLEdBQUcsRUFBaEI7QUFDQSxNQUFNQyxVQUFVLEdBQUd6VixNQUFNLENBQUNaLElBQTFCO0FBQ0EsTUFBTXNXLElBQUksR0FBRzFWLE1BQWI7QUFDQTBWLE1BQUksQ0FBQ3RXLElBQUwsR0FBWXVXLGtCQUFrQixDQUFDRixVQUFELEVBQWFELE9BQWIsQ0FBOUI7QUFDQUUsTUFBSSxDQUFDRSxXQUFMLEdBQW1CSixPQUFPLENBQUN6ekIsTUFBM0IsQ0FMK0IsQ0FLSTs7QUFDbkMsU0FBTztBQUFFaWUsVUFBTSxFQUFFMFYsSUFBVjtBQUFnQkYsV0FBTyxFQUFFQTtBQUF6QixHQUFQO0FBQ0g7O0FBQ0RyaUIseUJBQUEsR0FBNEJvaUIsaUJBQTVCOztBQUNBLFNBQVNJLGtCQUFULENBQTRCdlcsSUFBNUIsRUFBa0NvVyxPQUFsQyxFQUEyQztBQUN2QyxNQUFJLENBQUNwVyxJQUFMLEVBQ0ksT0FBT0EsSUFBUDs7QUFDSixNQUFJa1csV0FBVyxDQUFDTyxRQUFaLENBQXFCelcsSUFBckIsQ0FBSixFQUFnQztBQUM1QixRQUFNMFcsV0FBVyxHQUFHO0FBQUVDLGtCQUFZLEVBQUUsSUFBaEI7QUFBc0JDLFNBQUcsRUFBRVIsT0FBTyxDQUFDenpCO0FBQW5DLEtBQXBCO0FBQ0F5ekIsV0FBTyxDQUFDeHlCLElBQVIsQ0FBYW9jLElBQWI7QUFDQSxXQUFPMFcsV0FBUDtBQUNILEdBSkQsTUFLSyxJQUFJbHNCLEtBQUssQ0FBQ0MsT0FBTixDQUFjdVYsSUFBZCxDQUFKLEVBQXlCO0FBQzFCLFFBQU02VyxPQUFPLEdBQUcsSUFBSXJzQixLQUFKLENBQVV3VixJQUFJLENBQUNyZCxNQUFmLENBQWhCOztBQUNBLFNBQUssSUFBSW5GLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUd3aUIsSUFBSSxDQUFDcmQsTUFBekIsRUFBaUNuRixDQUFDLEVBQWxDLEVBQXNDO0FBQ2xDcTVCLGFBQU8sQ0FBQ3I1QixDQUFELENBQVAsR0FBYSs0QixrQkFBa0IsQ0FBQ3ZXLElBQUksQ0FBQ3hpQixDQUFELENBQUwsRUFBVTQ0QixPQUFWLENBQS9CO0FBQ0g7O0FBQ0QsV0FBT1MsT0FBUDtBQUNILEdBTkksTUFPQSxJQUFJLFFBQU83VyxJQUFQLE1BQWdCLFFBQWhCLElBQTRCLEVBQUVBLElBQUksWUFBWXJiLElBQWxCLENBQWhDLEVBQXlEO0FBQzFELFFBQU1reUIsUUFBTyxHQUFHLEVBQWhCOztBQUNBLFNBQUssSUFBTTVxQixHQUFYLElBQWtCK1QsSUFBbEIsRUFBd0I7QUFDcEIsVUFBSUEsSUFBSSxDQUFDaFYsY0FBTCxDQUFvQmlCLEdBQXBCLENBQUosRUFBOEI7QUFDMUI0cUIsZ0JBQU8sQ0FBQzVxQixHQUFELENBQVAsR0FBZXNxQixrQkFBa0IsQ0FBQ3ZXLElBQUksQ0FBQy9ULEdBQUQsQ0FBTCxFQUFZbXFCLE9BQVosQ0FBakM7QUFDSDtBQUNKOztBQUNELFdBQU9TLFFBQVA7QUFDSDs7QUFDRCxTQUFPN1csSUFBUDtBQUNIO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsU0FBUzhXLGlCQUFULENBQTJCbFcsTUFBM0IsRUFBbUN3VixPQUFuQyxFQUE0QztBQUN4Q3hWLFFBQU0sQ0FBQ1osSUFBUCxHQUFjK1csa0JBQWtCLENBQUNuVyxNQUFNLENBQUNaLElBQVIsRUFBY29XLE9BQWQsQ0FBaEM7QUFDQXhWLFFBQU0sQ0FBQzRWLFdBQVAsR0FBcUJqeUIsU0FBckIsQ0FGd0MsQ0FFUjs7QUFDaEMsU0FBT3FjLE1BQVA7QUFDSDs7QUFDRDdNLHlCQUFBLEdBQTRCK2lCLGlCQUE1Qjs7QUFDQSxTQUFTQyxrQkFBVCxDQUE0Qi9XLElBQTVCLEVBQWtDb1csT0FBbEMsRUFBMkM7QUFDdkMsTUFBSSxDQUFDcFcsSUFBTCxFQUNJLE9BQU9BLElBQVA7O0FBQ0osTUFBSUEsSUFBSSxJQUFJQSxJQUFJLENBQUMyVyxZQUFqQixFQUErQjtBQUMzQixXQUFPUCxPQUFPLENBQUNwVyxJQUFJLENBQUM0VyxHQUFOLENBQWQsQ0FEMkIsQ0FDRDtBQUM3QixHQUZELE1BR0ssSUFBSXBzQixLQUFLLENBQUNDLE9BQU4sQ0FBY3VWLElBQWQsQ0FBSixFQUF5QjtBQUMxQixTQUFLLElBQUl4aUIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR3dpQixJQUFJLENBQUNyZCxNQUF6QixFQUFpQ25GLENBQUMsRUFBbEMsRUFBc0M7QUFDbEN3aUIsVUFBSSxDQUFDeGlCLENBQUQsQ0FBSixHQUFVdTVCLGtCQUFrQixDQUFDL1csSUFBSSxDQUFDeGlCLENBQUQsQ0FBTCxFQUFVNDRCLE9BQVYsQ0FBNUI7QUFDSDtBQUNKLEdBSkksTUFLQSxJQUFJLFFBQU9wVyxJQUFQLE1BQWdCLFFBQXBCLEVBQThCO0FBQy9CLFNBQUssSUFBTS9ULEdBQVgsSUFBa0IrVCxJQUFsQixFQUF3QjtBQUNwQixVQUFJQSxJQUFJLENBQUNoVixjQUFMLENBQW9CaUIsR0FBcEIsQ0FBSixFQUE4QjtBQUMxQitULFlBQUksQ0FBQy9ULEdBQUQsQ0FBSixHQUFZOHFCLGtCQUFrQixDQUFDL1csSUFBSSxDQUFDL1QsR0FBRCxDQUFMLEVBQVltcUIsT0FBWixDQUE5QjtBQUNIO0FBQ0o7QUFDSjs7QUFDRCxTQUFPcFcsSUFBUDtBQUNILEM7Ozs7Ozs7Ozs7O0FDL0VZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ2JoYyw4Q0FBNkM7QUFBRXlnQixPQUFLLEVBQUU7QUFBVCxDQUE3QztBQUNBMVEsZUFBQSxHQUFrQkEsZUFBQSxHQUFrQkEsa0JBQUEsR0FBcUJBLGdCQUFBLEdBQW1CLEtBQUssQ0FBakY7O0FBQ0EsSUFBTTRCLE9BQU8sR0FBRy9MLG1CQUFPLENBQUMsb0VBQUQsQ0FBdkI7O0FBQ0EsSUFBTW90QixRQUFRLEdBQUdwdEIsbUJBQU8sQ0FBQyxnRUFBRCxDQUF4Qjs7QUFDQSxJQUFNc3NCLFdBQVcsR0FBR3RzQixtQkFBTyxDQUFDLHNFQUFELENBQTNCOztBQUNBLElBQU0yUCxLQUFLLEdBQUczUCxtQkFBTyxDQUFDLGtEQUFELENBQVAsQ0FBaUIsa0JBQWpCLENBQWQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQW1LLGdCQUFBLEdBQW1CLENBQW5CO0FBQ0EsSUFBSTBnQixVQUFKOztBQUNBLENBQUMsVUFBVUEsVUFBVixFQUFzQjtBQUNuQkEsWUFBVSxDQUFDQSxVQUFVLENBQUMsU0FBRCxDQUFWLEdBQXdCLENBQXpCLENBQVYsR0FBd0MsU0FBeEM7QUFDQUEsWUFBVSxDQUFDQSxVQUFVLENBQUMsWUFBRCxDQUFWLEdBQTJCLENBQTVCLENBQVYsR0FBMkMsWUFBM0M7QUFDQUEsWUFBVSxDQUFDQSxVQUFVLENBQUMsT0FBRCxDQUFWLEdBQXNCLENBQXZCLENBQVYsR0FBc0MsT0FBdEM7QUFDQUEsWUFBVSxDQUFDQSxVQUFVLENBQUMsS0FBRCxDQUFWLEdBQW9CLENBQXJCLENBQVYsR0FBb0MsS0FBcEM7QUFDQUEsWUFBVSxDQUFDQSxVQUFVLENBQUMsZUFBRCxDQUFWLEdBQThCLENBQS9CLENBQVYsR0FBOEMsZUFBOUM7QUFDQUEsWUFBVSxDQUFDQSxVQUFVLENBQUMsY0FBRCxDQUFWLEdBQTZCLENBQTlCLENBQVYsR0FBNkMsY0FBN0M7QUFDQUEsWUFBVSxDQUFDQSxVQUFVLENBQUMsWUFBRCxDQUFWLEdBQTJCLENBQTVCLENBQVYsR0FBMkMsWUFBM0M7QUFDSCxDQVJELEVBUUdBLFVBQVUsR0FBRzFnQixPQUFPLENBQUMwZ0IsVUFBUixLQUF1QjFnQixrQkFBQSxHQUFxQixFQUE1QyxDQVJoQjtBQVNBO0FBQ0E7QUFDQTs7O0lBQ00yZCxPOzs7Ozs7OztBQUNGO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNJLG9CQUFPaG5CLEdBQVAsRUFBWTtBQUNSNk8sV0FBSyxDQUFDLG9CQUFELEVBQXVCN08sR0FBdkIsQ0FBTDs7QUFDQSxVQUFJQSxHQUFHLENBQUN1QyxJQUFKLEtBQWF3bkIsVUFBVSxDQUFDQyxLQUF4QixJQUFpQ2hxQixHQUFHLENBQUN1QyxJQUFKLEtBQWF3bkIsVUFBVSxDQUFDVyxHQUE3RCxFQUFrRTtBQUM5RCxZQUFJYyxXQUFXLENBQUNlLFNBQVosQ0FBc0J2c0IsR0FBdEIsQ0FBSixFQUFnQztBQUM1QkEsYUFBRyxDQUFDdUMsSUFBSixHQUNJdkMsR0FBRyxDQUFDdUMsSUFBSixLQUFhd25CLFVBQVUsQ0FBQ0MsS0FBeEIsR0FDTUQsVUFBVSxDQUFDVSxZQURqQixHQUVNVixVQUFVLENBQUNhLFVBSHJCO0FBSUEsaUJBQU8sS0FBSzRCLGNBQUwsQ0FBb0J4c0IsR0FBcEIsQ0FBUDtBQUNIO0FBQ0o7O0FBQ0QsYUFBTyxDQUFDLEtBQUt5c0IsY0FBTCxDQUFvQnpzQixHQUFwQixDQUFELENBQVA7QUFDSDtBQUNEO0FBQ0o7QUFDQTs7OztXQUNJLHdCQUFlQSxHQUFmLEVBQW9CO0FBQ2hCO0FBQ0EsVUFBSWEsR0FBRyxHQUFHLEtBQUtiLEdBQUcsQ0FBQ3VDLElBQW5CLENBRmdCLENBR2hCOztBQUNBLFVBQUl2QyxHQUFHLENBQUN1QyxJQUFKLEtBQWF3bkIsVUFBVSxDQUFDVSxZQUF4QixJQUNBenFCLEdBQUcsQ0FBQ3VDLElBQUosS0FBYXduQixVQUFVLENBQUNhLFVBRDVCLEVBQ3dDO0FBQ3BDL3BCLFdBQUcsSUFBSWIsR0FBRyxDQUFDOHJCLFdBQUosR0FBa0IsR0FBekI7QUFDSCxPQVBlLENBUWhCO0FBQ0E7OztBQUNBLFVBQUk5ckIsR0FBRyxDQUFDd29CLEdBQUosSUFBVyxRQUFReG9CLEdBQUcsQ0FBQ3dvQixHQUEzQixFQUFnQztBQUM1QjNuQixXQUFHLElBQUliLEdBQUcsQ0FBQ3dvQixHQUFKLEdBQVUsR0FBakI7QUFDSCxPQVplLENBYWhCOzs7QUFDQSxVQUFJLFFBQVF4b0IsR0FBRyxDQUFDN0wsRUFBaEIsRUFBb0I7QUFDaEIwTSxXQUFHLElBQUliLEdBQUcsQ0FBQzdMLEVBQVg7QUFDSCxPQWhCZSxDQWlCaEI7OztBQUNBLFVBQUksUUFBUTZMLEdBQUcsQ0FBQ3NWLElBQWhCLEVBQXNCO0FBQ2xCelUsV0FBRyxJQUFJNkwsSUFBSSxDQUFDQyxTQUFMLENBQWUzTSxHQUFHLENBQUNzVixJQUFuQixDQUFQO0FBQ0g7O0FBQ0R6RyxXQUFLLENBQUMsa0JBQUQsRUFBcUI3TyxHQUFyQixFQUEwQmEsR0FBMUIsQ0FBTDtBQUNBLGFBQU9BLEdBQVA7QUFDSDtBQUNEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7Ozs7V0FDSSx3QkFBZWIsR0FBZixFQUFvQjtBQUNoQixVQUFNMHNCLGNBQWMsR0FBR0osUUFBUSxDQUFDYixpQkFBVCxDQUEyQnpyQixHQUEzQixDQUF2QjtBQUNBLFVBQU00ckIsSUFBSSxHQUFHLEtBQUthLGNBQUwsQ0FBb0JDLGNBQWMsQ0FBQ3hXLE1BQW5DLENBQWI7QUFDQSxVQUFNd1YsT0FBTyxHQUFHZ0IsY0FBYyxDQUFDaEIsT0FBL0I7QUFDQUEsYUFBTyxDQUFDemEsT0FBUixDQUFnQjJhLElBQWhCLEVBSmdCLENBSU87O0FBQ3ZCLGFBQU9GLE9BQVAsQ0FMZ0IsQ0FLQTtBQUNuQjs7Ozs7O0FBRUxyaUIsZUFBQSxHQUFrQjJkLE9BQWxCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFDTUUsTzs7Ozs7QUFDRixxQkFBYztBQUFBOztBQUFBO0FBRWI7QUFDRDtBQUNKO0FBQ0E7QUFDQTtBQUNBOzs7OztXQUNJLGFBQUlsbkIsR0FBSixFQUFTO0FBQ0wsVUFBSWtXLE1BQUo7O0FBQ0EsVUFBSSxPQUFPbFcsR0FBUCxLQUFlLFFBQW5CLEVBQTZCO0FBQ3pCa1csY0FBTSxHQUFHLEtBQUt5VyxZQUFMLENBQWtCM3NCLEdBQWxCLENBQVQ7O0FBQ0EsWUFBSWtXLE1BQU0sQ0FBQzNULElBQVAsS0FBZ0J3bkIsVUFBVSxDQUFDVSxZQUEzQixJQUNBdlUsTUFBTSxDQUFDM1QsSUFBUCxLQUFnQnduQixVQUFVLENBQUNhLFVBRC9CLEVBQzJDO0FBQ3ZDO0FBQ0EsZUFBS2dDLGFBQUwsR0FBcUIsSUFBSUMsbUJBQUosQ0FBd0IzVyxNQUF4QixDQUFyQixDQUZ1QyxDQUd2Qzs7QUFDQSxjQUFJQSxNQUFNLENBQUM0VixXQUFQLEtBQXVCLENBQTNCLEVBQThCO0FBQzFCLDhFQUFXLFNBQVgsRUFBc0I1VixNQUF0QjtBQUNIO0FBQ0osU0FSRCxNQVNLO0FBQ0Q7QUFDQSw0RUFBVyxTQUFYLEVBQXNCQSxNQUF0QjtBQUNIO0FBQ0osT0FmRCxNQWdCSyxJQUFJc1YsV0FBVyxDQUFDTyxRQUFaLENBQXFCL3JCLEdBQXJCLEtBQTZCQSxHQUFHLENBQUN5SyxNQUFyQyxFQUE2QztBQUM5QztBQUNBLFlBQUksQ0FBQyxLQUFLbWlCLGFBQVYsRUFBeUI7QUFDckIsZ0JBQU0sSUFBSW5nQixLQUFKLENBQVUsa0RBQVYsQ0FBTjtBQUNILFNBRkQsTUFHSztBQUNEeUosZ0JBQU0sR0FBRyxLQUFLMFcsYUFBTCxDQUFtQkUsY0FBbkIsQ0FBa0M5c0IsR0FBbEMsQ0FBVDs7QUFDQSxjQUFJa1csTUFBSixFQUFZO0FBQ1I7QUFDQSxpQkFBSzBXLGFBQUwsR0FBcUIsSUFBckI7O0FBQ0EsOEVBQVcsU0FBWCxFQUFzQjFXLE1BQXRCO0FBQ0g7QUFDSjtBQUNKLE9BYkksTUFjQTtBQUNELGNBQU0sSUFBSXpKLEtBQUosQ0FBVSxtQkFBbUJ6TSxHQUE3QixDQUFOO0FBQ0g7QUFDSjtBQUNEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztXQUNJLHNCQUFhYSxHQUFiLEVBQWtCO0FBQ2QsVUFBSS9OLENBQUMsR0FBRyxDQUFSLENBRGMsQ0FFZDs7QUFDQSxVQUFNd1IsQ0FBQyxHQUFHO0FBQ04vQixZQUFJLEVBQUV3TyxNQUFNLENBQUNsUSxHQUFHLENBQUNrZSxNQUFKLENBQVcsQ0FBWCxDQUFEO0FBRE4sT0FBVjs7QUFHQSxVQUFJZ0wsVUFBVSxDQUFDemxCLENBQUMsQ0FBQy9CLElBQUgsQ0FBVixLQUF1QjFJLFNBQTNCLEVBQXNDO0FBQ2xDLGNBQU0sSUFBSTRTLEtBQUosQ0FBVSx5QkFBeUJuSSxDQUFDLENBQUMvQixJQUFyQyxDQUFOO0FBQ0gsT0FSYSxDQVNkOzs7QUFDQSxVQUFJK0IsQ0FBQyxDQUFDL0IsSUFBRixLQUFXd25CLFVBQVUsQ0FBQ1UsWUFBdEIsSUFDQW5tQixDQUFDLENBQUMvQixJQUFGLEtBQVd3bkIsVUFBVSxDQUFDYSxVQUQxQixFQUNzQztBQUNsQyxZQUFNbUMsS0FBSyxHQUFHajZCLENBQUMsR0FBRyxDQUFsQjs7QUFDQSxlQUFPK04sR0FBRyxDQUFDa2UsTUFBSixDQUFXLEVBQUVqc0IsQ0FBYixNQUFvQixHQUFwQixJQUEyQkEsQ0FBQyxJQUFJK04sR0FBRyxDQUFDNUksTUFBM0MsRUFBbUQsQ0FBRzs7QUFDdEQsWUFBTSswQixHQUFHLEdBQUduc0IsR0FBRyxDQUFDNkosU0FBSixDQUFjcWlCLEtBQWQsRUFBcUJqNkIsQ0FBckIsQ0FBWjs7QUFDQSxZQUFJazZCLEdBQUcsSUFBSWpjLE1BQU0sQ0FBQ2ljLEdBQUQsQ0FBYixJQUFzQm5zQixHQUFHLENBQUNrZSxNQUFKLENBQVdqc0IsQ0FBWCxNQUFrQixHQUE1QyxFQUFpRDtBQUM3QyxnQkFBTSxJQUFJMlosS0FBSixDQUFVLHFCQUFWLENBQU47QUFDSDs7QUFDRG5JLFNBQUMsQ0FBQ3duQixXQUFGLEdBQWdCL2EsTUFBTSxDQUFDaWMsR0FBRCxDQUF0QjtBQUNILE9BbkJhLENBb0JkOzs7QUFDQSxVQUFJLFFBQVFuc0IsR0FBRyxDQUFDa2UsTUFBSixDQUFXanNCLENBQUMsR0FBRyxDQUFmLENBQVosRUFBK0I7QUFDM0IsWUFBTWk2QixNQUFLLEdBQUdqNkIsQ0FBQyxHQUFHLENBQWxCOztBQUNBLGVBQU8sRUFBRUEsQ0FBVCxFQUFZO0FBQ1IsY0FBTTRiLENBQUMsR0FBRzdOLEdBQUcsQ0FBQ2tlLE1BQUosQ0FBV2pzQixDQUFYLENBQVY7QUFDQSxjQUFJLFFBQVE0YixDQUFaLEVBQ0k7QUFDSixjQUFJNWIsQ0FBQyxLQUFLK04sR0FBRyxDQUFDNUksTUFBZCxFQUNJO0FBQ1A7O0FBQ0RxTSxTQUFDLENBQUNra0IsR0FBRixHQUFRM25CLEdBQUcsQ0FBQzZKLFNBQUosQ0FBY3FpQixNQUFkLEVBQXFCajZCLENBQXJCLENBQVI7QUFDSCxPQVZELE1BV0s7QUFDRHdSLFNBQUMsQ0FBQ2trQixHQUFGLEdBQVEsR0FBUjtBQUNILE9BbENhLENBbUNkOzs7QUFDQSxVQUFNeUUsSUFBSSxHQUFHcHNCLEdBQUcsQ0FBQ2tlLE1BQUosQ0FBV2pzQixDQUFDLEdBQUcsQ0FBZixDQUFiOztBQUNBLFVBQUksT0FBT202QixJQUFQLElBQWVsYyxNQUFNLENBQUNrYyxJQUFELENBQU4sSUFBZ0JBLElBQW5DLEVBQXlDO0FBQ3JDLFlBQU1GLE9BQUssR0FBR2o2QixDQUFDLEdBQUcsQ0FBbEI7O0FBQ0EsZUFBTyxFQUFFQSxDQUFULEVBQVk7QUFDUixjQUFNNGIsRUFBQyxHQUFHN04sR0FBRyxDQUFDa2UsTUFBSixDQUFXanNCLENBQVgsQ0FBVjs7QUFDQSxjQUFJLFFBQVE0YixFQUFSLElBQWFxQyxNQUFNLENBQUNyQyxFQUFELENBQU4sSUFBYUEsRUFBOUIsRUFBaUM7QUFDN0IsY0FBRTViLENBQUY7QUFDQTtBQUNIOztBQUNELGNBQUlBLENBQUMsS0FBSytOLEdBQUcsQ0FBQzVJLE1BQWQsRUFDSTtBQUNQOztBQUNEcU0sU0FBQyxDQUFDblEsRUFBRixHQUFPNGMsTUFBTSxDQUFDbFEsR0FBRyxDQUFDNkosU0FBSixDQUFjcWlCLE9BQWQsRUFBcUJqNkIsQ0FBQyxHQUFHLENBQXpCLENBQUQsQ0FBYjtBQUNILE9BakRhLENBa0RkOzs7QUFDQSxVQUFJK04sR0FBRyxDQUFDa2UsTUFBSixDQUFXLEVBQUVqc0IsQ0FBYixDQUFKLEVBQXFCO0FBQ2pCLFlBQU1vNkIsT0FBTyxHQUFHQyxRQUFRLENBQUN0c0IsR0FBRyxDQUFDZ1IsTUFBSixDQUFXL2UsQ0FBWCxDQUFELENBQXhCOztBQUNBLFlBQUlvMEIsT0FBTyxDQUFDa0csY0FBUixDQUF1QjlvQixDQUFDLENBQUMvQixJQUF6QixFQUErQjJxQixPQUEvQixDQUFKLEVBQTZDO0FBQ3pDNW9CLFdBQUMsQ0FBQ2dSLElBQUYsR0FBUzRYLE9BQVQ7QUFDSCxTQUZELE1BR0s7QUFDRCxnQkFBTSxJQUFJemdCLEtBQUosQ0FBVSxpQkFBVixDQUFOO0FBQ0g7QUFDSjs7QUFDRG9DLFdBQUssQ0FBQyxrQkFBRCxFQUFxQmhPLEdBQXJCLEVBQTBCeUQsQ0FBMUIsQ0FBTDtBQUNBLGFBQU9BLENBQVA7QUFDSDs7OztBQWlCRDtBQUNKO0FBQ0E7QUFDSSx1QkFBVTtBQUNOLFVBQUksS0FBS3NvQixhQUFULEVBQXdCO0FBQ3BCLGFBQUtBLGFBQUwsQ0FBbUJTLHNCQUFuQjtBQUNIO0FBQ0o7OztXQXZCRCx3QkFBc0I5cUIsSUFBdEIsRUFBNEIycUIsT0FBNUIsRUFBcUM7QUFDakMsY0FBUTNxQixJQUFSO0FBQ0ksYUFBS3duQixVQUFVLENBQUNPLE9BQWhCO0FBQ0ksaUJBQU8sUUFBTzRDLE9BQVAsTUFBbUIsUUFBMUI7O0FBQ0osYUFBS25ELFVBQVUsQ0FBQ2MsVUFBaEI7QUFDSSxpQkFBT3FDLE9BQU8sS0FBS3J6QixTQUFuQjs7QUFDSixhQUFLa3dCLFVBQVUsQ0FBQ2dCLGFBQWhCO0FBQ0ksaUJBQU8sT0FBT21DLE9BQVAsS0FBbUIsUUFBbkIsSUFBK0IsUUFBT0EsT0FBUCxNQUFtQixRQUF6RDs7QUFDSixhQUFLbkQsVUFBVSxDQUFDQyxLQUFoQjtBQUNBLGFBQUtELFVBQVUsQ0FBQ1UsWUFBaEI7QUFDSSxpQkFBTzNxQixLQUFLLENBQUNDLE9BQU4sQ0FBY210QixPQUFkLEtBQTBCQSxPQUFPLENBQUNqMUIsTUFBUixHQUFpQixDQUFsRDs7QUFDSixhQUFLOHhCLFVBQVUsQ0FBQ1csR0FBaEI7QUFDQSxhQUFLWCxVQUFVLENBQUNhLFVBQWhCO0FBQ0ksaUJBQU85cUIsS0FBSyxDQUFDQyxPQUFOLENBQWNtdEIsT0FBZCxDQUFQO0FBWlI7QUFjSDs7OztFQWpJaUJqaUIsTzs7QUEySXRCNUIsZUFBQSxHQUFrQjZkLE9BQWxCOztBQUNBLFNBQVNpRyxRQUFULENBQWtCdHNCLEdBQWxCLEVBQXVCO0FBQ25CLE1BQUk7QUFDQSxXQUFPNkwsSUFBSSxDQUFDTixLQUFMLENBQVd2TCxHQUFYLENBQVA7QUFDSCxHQUZELENBR0EsT0FBTzNFLENBQVAsRUFBVTtBQUNOLFdBQU8sS0FBUDtBQUNIO0FBQ0o7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7SUFDTTJ3QixtQjtBQUNGLCtCQUFZM1csTUFBWixFQUFvQjtBQUFBOztBQUNoQixTQUFLQSxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLd1YsT0FBTCxHQUFlLEVBQWY7QUFDQSxTQUFLNEIsU0FBTCxHQUFpQnBYLE1BQWpCO0FBQ0g7QUFDRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztXQUNJLHdCQUFlcVgsT0FBZixFQUF3QjtBQUNwQixXQUFLN0IsT0FBTCxDQUFheHlCLElBQWIsQ0FBa0JxMEIsT0FBbEI7O0FBQ0EsVUFBSSxLQUFLN0IsT0FBTCxDQUFhenpCLE1BQWIsS0FBd0IsS0FBS3ExQixTQUFMLENBQWV4QixXQUEzQyxFQUF3RDtBQUNwRDtBQUNBLFlBQU01VixNQUFNLEdBQUdvVyxRQUFRLENBQUNGLGlCQUFULENBQTJCLEtBQUtrQixTQUFoQyxFQUEyQyxLQUFLNUIsT0FBaEQsQ0FBZjtBQUNBLGFBQUsyQixzQkFBTDtBQUNBLGVBQU9uWCxNQUFQO0FBQ0g7O0FBQ0QsYUFBTyxJQUFQO0FBQ0g7QUFDRDtBQUNKO0FBQ0E7Ozs7V0FDSSxrQ0FBeUI7QUFDckIsV0FBS29YLFNBQUwsR0FBaUIsSUFBakI7QUFDQSxXQUFLNUIsT0FBTCxHQUFlLEVBQWY7QUFDSDs7Ozs7Ozs7Ozs7Ozs7O0FDdFJROzs7O0FBQ2JweUIsOENBQTZDO0FBQUV5Z0IsT0FBSyxFQUFFO0FBQVQsQ0FBN0M7QUFDQTFRLGlCQUFBLEdBQW9CQSxnQkFBQSxHQUFtQixLQUFLLENBQTVDO0FBQ0EsSUFBTXNWLHFCQUFxQixHQUFHLE9BQU8zVCxXQUFQLEtBQXVCLFVBQXJEOztBQUNBLElBQU1xVSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDcmYsR0FBRCxFQUFTO0FBQ3BCLFNBQU8sT0FBT2dMLFdBQVcsQ0FBQ3FVLE1BQW5CLEtBQThCLFVBQTlCLEdBQ0RyVSxXQUFXLENBQUNxVSxNQUFaLENBQW1CcmYsR0FBbkIsQ0FEQyxHQUVEQSxHQUFHLENBQUNzZixNQUFKLFlBQXNCdFUsV0FGNUI7QUFHSCxDQUpEOztBQUtBLElBQU05SyxRQUFRLEdBQUc1RyxNQUFNLENBQUMyRyxTQUFQLENBQWlCQyxRQUFsQztBQUNBLElBQU1rZixjQUFjLEdBQUcsT0FBT0QsSUFBUCxLQUFnQixVQUFoQixJQUNsQixPQUFPQSxJQUFQLEtBQWdCLFdBQWhCLElBQ0dqZixRQUFRLENBQUNDLElBQVQsQ0FBY2dmLElBQWQsTUFBd0IsMEJBRmhDO0FBR0EsSUFBTXFPLGNBQWMsR0FBRyxPQUFPQyxJQUFQLEtBQWdCLFVBQWhCLElBQ2xCLE9BQU9BLElBQVAsS0FBZ0IsV0FBaEIsSUFDR3Z0QixRQUFRLENBQUNDLElBQVQsQ0FBY3N0QixJQUFkLE1BQXdCLDBCQUZoQztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsU0FBUzFCLFFBQVQsQ0FBa0IvckIsR0FBbEIsRUFBdUI7QUFDbkIsU0FBUzJlLHFCQUFxQixLQUFLM2UsR0FBRyxZQUFZZ0wsV0FBZixJQUE4QnFVLE1BQU0sQ0FBQ3JmLEdBQUQsQ0FBekMsQ0FBdEIsSUFDSG9mLGNBQWMsSUFBSXBmLEdBQUcsWUFBWW1mLElBRDlCLElBRUhxTyxjQUFjLElBQUl4dEIsR0FBRyxZQUFZeXRCLElBRnRDO0FBR0g7O0FBQ0Rwa0IsZ0JBQUEsR0FBbUIwaUIsUUFBbkI7O0FBQ0EsU0FBU1EsU0FBVCxDQUFtQnZzQixHQUFuQixFQUF3QjB0QixNQUF4QixFQUFnQztBQUM1QixNQUFJLENBQUMxdEIsR0FBRCxJQUFRLFFBQU9BLEdBQVAsTUFBZSxRQUEzQixFQUFxQztBQUNqQyxXQUFPLEtBQVA7QUFDSDs7QUFDRCxNQUFJRixLQUFLLENBQUNDLE9BQU4sQ0FBY0MsR0FBZCxDQUFKLEVBQXdCO0FBQ3BCLFNBQUssSUFBSWxOLENBQUMsR0FBRyxDQUFSLEVBQVdzUixDQUFDLEdBQUdwRSxHQUFHLENBQUMvSCxNQUF4QixFQUFnQ25GLENBQUMsR0FBR3NSLENBQXBDLEVBQXVDdFIsQ0FBQyxFQUF4QyxFQUE0QztBQUN4QyxVQUFJeTVCLFNBQVMsQ0FBQ3ZzQixHQUFHLENBQUNsTixDQUFELENBQUosQ0FBYixFQUF1QjtBQUNuQixlQUFPLElBQVA7QUFDSDtBQUNKOztBQUNELFdBQU8sS0FBUDtBQUNIOztBQUNELE1BQUlpNUIsUUFBUSxDQUFDL3JCLEdBQUQsQ0FBWixFQUFtQjtBQUNmLFdBQU8sSUFBUDtBQUNIOztBQUNELE1BQUlBLEdBQUcsQ0FBQzB0QixNQUFKLElBQ0EsT0FBTzF0QixHQUFHLENBQUMwdEIsTUFBWCxLQUFzQixVQUR0QixJQUVBanVCLFNBQVMsQ0FBQ3hILE1BQVYsS0FBcUIsQ0FGekIsRUFFNEI7QUFDeEIsV0FBT3MwQixTQUFTLENBQUN2c0IsR0FBRyxDQUFDMHRCLE1BQUosRUFBRCxFQUFlLElBQWYsQ0FBaEI7QUFDSDs7QUFDRCxPQUFLLElBQU1uc0IsR0FBWCxJQUFrQnZCLEdBQWxCLEVBQXVCO0FBQ25CLFFBQUkxRyxNQUFNLENBQUMyRyxTQUFQLENBQWlCSyxjQUFqQixDQUFnQ0gsSUFBaEMsQ0FBcUNILEdBQXJDLEVBQTBDdUIsR0FBMUMsS0FBa0RnckIsU0FBUyxDQUFDdnNCLEdBQUcsQ0FBQ3VCLEdBQUQsQ0FBSixDQUEvRCxFQUEyRTtBQUN2RSxhQUFPLElBQVA7QUFDSDtBQUNKOztBQUNELFNBQU8sS0FBUDtBQUNIOztBQUNEOEgsaUJBQUEsR0FBb0JrakIsU0FBcEIsQzs7Ozs7Ozs7Ozs7QUN0RGE7O0FBRWIsSUFBSW9CLFFBQVEsR0FBRyxtRUFBbUVocEIsS0FBbkUsQ0FBeUUsRUFBekUsQ0FBZjtBQUFBLElBQ0kxTSxNQUFNLEdBQUcsRUFEYjtBQUFBLElBRUkyTSxHQUFHLEdBQUcsRUFGVjtBQUFBLElBR0loRCxJQUFJLEdBQUcsQ0FIWDtBQUFBLElBSUk5TyxDQUFDLEdBQUcsQ0FKUjtBQUFBLElBS0lrZSxJQUxKO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsU0FBUzRMLE1BQVQsQ0FBZ0JzUCxHQUFoQixFQUFxQjtBQUNuQixNQUFJMEIsT0FBTyxHQUFHLEVBQWQ7O0FBRUEsS0FBRztBQUNEQSxXQUFPLEdBQUdELFFBQVEsQ0FBQ3pCLEdBQUcsR0FBR2owQixNQUFQLENBQVIsR0FBeUIyMUIsT0FBbkM7QUFDQTFCLE9BQUcsR0FBRzc2QixJQUFJLENBQUMwWSxLQUFMLENBQVdtaUIsR0FBRyxHQUFHajBCLE1BQWpCLENBQU47QUFDRCxHQUhELFFBR1NpMEIsR0FBRyxHQUFHLENBSGY7O0FBS0EsU0FBTzBCLE9BQVA7QUFDRDtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxTQUFTL1osTUFBVCxDQUFnQmhULEdBQWhCLEVBQXFCO0FBQ25CLE1BQUlxZSxPQUFPLEdBQUcsQ0FBZDs7QUFFQSxPQUFLcHNCLENBQUMsR0FBRyxDQUFULEVBQVlBLENBQUMsR0FBRytOLEdBQUcsQ0FBQzVJLE1BQXBCLEVBQTRCbkYsQ0FBQyxFQUE3QixFQUFpQztBQUMvQm9zQixXQUFPLEdBQUdBLE9BQU8sR0FBR2puQixNQUFWLEdBQW1CMk0sR0FBRyxDQUFDL0QsR0FBRyxDQUFDa2UsTUFBSixDQUFXanNCLENBQVgsQ0FBRCxDQUFoQztBQUNEOztBQUVELFNBQU9vc0IsT0FBUDtBQUNEO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxTQUFTbEQsS0FBVCxHQUFpQjtBQUNmLE1BQUk2UixHQUFHLEdBQUdqUixNQUFNLENBQUMsQ0FBQyxJQUFJM2lCLElBQUosRUFBRixDQUFoQjtBQUVBLE1BQUk0ekIsR0FBRyxLQUFLN2MsSUFBWixFQUFrQixPQUFPcFAsSUFBSSxHQUFHLENBQVAsRUFBVW9QLElBQUksR0FBRzZjLEdBQXhCO0FBQ2xCLFNBQU9BLEdBQUcsR0FBRSxHQUFMLEdBQVVqUixNQUFNLENBQUNoYixJQUFJLEVBQUwsQ0FBdkI7QUFDRCxDLENBRUQ7QUFDQTtBQUNBOzs7QUFDQSxPQUFPOU8sQ0FBQyxHQUFHbUYsTUFBWCxFQUFtQm5GLENBQUMsRUFBcEI7QUFBd0I4UixLQUFHLENBQUMrb0IsUUFBUSxDQUFDNzZCLENBQUQsQ0FBVCxDQUFILEdBQW1CQSxDQUFuQjtBQUF4QixDLENBRUE7QUFDQTtBQUNBOzs7QUFDQWtwQixLQUFLLENBQUNZLE1BQU4sR0FBZUEsTUFBZjtBQUNBWixLQUFLLENBQUNuSSxNQUFOLEdBQWVBLE1BQWY7QUFDQXpLLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjJTLEtBQWpCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25FQTtBQUNBO0FBQ0E7QUFHTyxTQUFTOFIsTUFBVCxDQUFnQnBaLE1BQWhCLEVBQXdCO0FBQzdCO0FBQ0EsTUFBSXFaLFdBQUosRUFBaUJDLE1BQWpCLEVBQXlCQyxhQUF6QixFQUF3Q0MsV0FBeEMsQ0FGNkIsQ0FHN0I7O0FBQ0EsTUFBSUMsYUFBYSxHQUFHanhCLGdEQUFDLENBQUMsY0FBRCxDQUFyQixDQUo2QixDQUlXOztBQUN4QyxNQUFJa3hCLHFCQUFxQixHQUFHbHhCLGdEQUFDLENBQUMsd0JBQUQsQ0FBN0IsQ0FMNkIsQ0FLNEI7O0FBQ3pELE1BQUlteEIsa0JBQWtCLEdBQUdueEIsZ0RBQUMsQ0FBQyxvQkFBRCxDQUExQixDQU42QixDQU1xQjs7QUFDbEQsTUFBSW94QixhQUFhLEdBQUdweEIsZ0RBQUMsQ0FBQyxrQkFBRCxDQUFyQjtBQUNBLE1BQUlxeEIsZUFBZSxHQUFHcnhCLGdEQUFDLENBQUMsb0JBQUQsQ0FBdkI7QUFDQSxNQUFJc3hCLFNBQVMsR0FBR3R4QixnREFBQyxDQUFDLGFBQUQsQ0FBakI7QUFDQSxNQUFJdXhCLFdBQVcsR0FBR3Z4QixnREFBQyxDQUFDLGVBQUQsQ0FBbkIsQ0FWNkIsQ0FVUzs7QUFDdEMsTUFBSXd4QixlQUFlLEdBQUd4eEIsZ0RBQUMsQ0FBQyxnQkFBRCxDQUF2QixDQVg2QixDQVdjOztBQUMzQyxNQUFJeXhCLG1CQUFtQixHQUFHenhCLGdEQUFDLENBQUMseUJBQUQsQ0FBM0IsQ0FaNkIsQ0FZMkI7O0FBQ3hELE1BQUkweEIsU0FBUyxHQUFHMXhCLGdEQUFDLENBQUMsYUFBRCxDQUFqQixDQWI2QixDQWFLO0FBRWxDOztBQUNBLE1BQUkyeEIsV0FBSjtBQUNBLE1BQUlDLGFBQWEsR0FBRyxJQUFJNytCLE9BQUosQ0FBWSxVQUFDQyxHQUFELEVBQU1JLEdBQU4sRUFBYztBQUM1Q3UrQixlQUFXLEdBQUczK0IsR0FBZDtBQUNELEdBRm1CLENBQXBCLENBakI2QixDQXFCN0I7O0FBQ0FKLGFBQVcsQ0FBQyxZQUFNO0FBQ2hCMEQsWUFBUSxDQUFDdTdCLGdCQUFULENBQTBCLG1CQUExQixFQUErQzNlLE9BQS9DLENBQXVELFVBQUFqakIsR0FBRyxFQUFJO0FBQzVELFVBQUlBLEdBQUcsQ0FBQ2lILFNBQUosQ0FBYzZELE1BQWQsR0FBdUIsQ0FBM0IsRUFBOEI7QUFDNUI5SyxXQUFHLENBQUNpSCxTQUFKLElBQWlCLEdBQWpCO0FBQ0QsT0FGRCxNQUdLO0FBQ0hqSCxXQUFHLENBQUNpSCxTQUFKLEdBQWdCLEVBQWhCO0FBQ0Q7QUFDRixLQVBEO0FBUUQsR0FUVSxFQVNSLEdBVFEsQ0FBWCxDQXRCNkIsQ0FpQzdCOztBQUNBWixVQUFRLENBQUN1N0IsZ0JBQVQsQ0FBMEIscUJBQTFCLEVBQWlEM2UsT0FBakQsQ0FBeUQsVUFBQWpqQixHQUFHLEVBQUk7QUFDOUQsUUFBSTZoQyxhQUFhLEdBQUc5d0Isc0RBQU8sQ0FBQy9RLEdBQUQsRUFBTSxTQUFOLENBQTNCO0FBQ0FBLE9BQUcsQ0FBQytOLGdCQUFKLENBQXFCLE9BQXJCLEVBQThCLFlBQU07QUFDbEMrekIsa0JBQVksQ0FBQ0QsYUFBYSxDQUFDLENBQUQsQ0FBYixDQUFpQjc2QixFQUFsQixFQUFzQixLQUF0QixDQUFaO0FBQ0QsS0FGRDtBQUdELEdBTEQsRUFsQzZCLENBMEM3Qjs7QUFDQSxNQUFJKzZCLElBQUosQ0EzQzZCLENBOEM3Qjs7QUFDQVQsYUFBVyxDQUFDdnpCLGdCQUFaLENBQTZCLE9BQTdCLEVBQXNDLFlBQU07QUFDMUMsUUFBSSt5QixhQUFhLElBQUlGLFdBQWpCLElBQWdDQyxNQUFwQyxFQUE0QztBQUM1QyxRQUFJMzVCLElBQUksR0FBR202QixTQUFTLENBQUN6VSxLQUFWLEdBQWtCeVUsU0FBUyxDQUFDelUsS0FBNUIsR0FBb0M1USxpREFBL0M7QUFDQWdtQixlQUFXLENBQUN6YSxNQUFELEVBQVNyZ0IsSUFBVCxDQUFYOztBQUNBLFFBQUk2NkIsSUFBSSxLQUFLLFFBQWIsRUFBdUI7QUFDckJELGtCQUFZLENBQUMsa0JBQUQsRUFBcUIsSUFBckIsQ0FBWjtBQUNELEtBRkQsTUFHSyxJQUFJQyxJQUFJLEtBQUssVUFBYixFQUF5QjtBQUM1QixVQUFJLENBQUNuQixXQUFMLEVBQWtCO0FBQ2hCcUIsZUFBTyxDQUFDMWEsTUFBRCxDQUFQO0FBQ0FxWixtQkFBVyxHQUFHLElBQWQ7QUFDQUMsY0FBTSxHQUFHLElBQVQ7QUFDQUMscUJBQWEsR0FBRyxJQUFoQjtBQUNELE9BTEQsTUFNSztBQUNIO0FBQ0Q7QUFDRjtBQUNGLEdBbEJELEVBL0M2QixDQW1FN0I7O0FBQ0FHLHVCQUFxQixDQUFDbHpCLGdCQUF0QixDQUF1QyxPQUF2QyxFQUFnRCxZQUFNO0FBQ3BEZzBCLFFBQUksR0FBRyxRQUFQO0FBQ0FELGdCQUFZLENBQUMsbUJBQUQsRUFBc0IsSUFBdEIsQ0FBWjtBQUNELEdBSEQsRUFwRTZCLENBeUU3Qjs7QUFDQVosb0JBQWtCLENBQUNuekIsZ0JBQW5CLENBQW9DLE9BQXBDLEVBQTZDLFlBQU07QUFDakQsUUFBSSxDQUFDOHlCLE1BQUwsRUFBYTtBQUNYLFVBQUlxQixRQUFRLEdBQUdmLGFBQWEsQ0FBQ3ZVLEtBQTdCO0FBQ0F1VixxQkFBZSxDQUFDNWEsTUFBRCxFQUFTMmEsUUFBVCxDQUFmO0FBQ0FyQixZQUFNLEdBQUcsSUFBVDtBQUNBRCxpQkFBVyxHQUFHLElBQWQ7QUFDQUUsbUJBQWEsR0FBRyxJQUFoQjtBQUNELEtBTkQsTUFPSztBQUNIO0FBQ0Q7QUFDRixHQVhELEVBMUU2QixDQXVGN0I7O0FBQ0FFLGVBQWEsQ0FBQ2p6QixnQkFBZCxDQUErQixPQUEvQixFQUF3QyxZQUFNO0FBQzVDZzBCLFFBQUksR0FBRyxVQUFQO0FBQ0FELGdCQUFZLENBQUMsbUJBQUQsRUFBc0IsSUFBdEIsQ0FBWjtBQUNELEdBSEQsRUF4RjZCLENBNkY3Qjs7QUFDQVAsaUJBQWUsQ0FBQ3h6QixnQkFBaEIsQ0FBaUMsT0FBakMsRUFBMEMsWUFBTTtBQUM5Q3daLFVBQU0sQ0FBQzlXLElBQVAsQ0FBWSxjQUFaO0FBQ0Ftd0IsZUFBVyxHQUFHLEtBQWQ7QUFDQUMsVUFBTSxHQUFHLEtBQVQ7QUFDQUMsaUJBQWEsR0FBRyxLQUFoQjtBQUNBZ0IsZ0JBQVksQ0FBQywwQkFBRCxFQUE2QixLQUE3QixDQUFaO0FBQ0QsR0FORCxFQTlGNkIsQ0FxRzdCOztBQUNBTixxQkFBbUIsQ0FBQ3p6QixnQkFBcEIsQ0FBcUMsT0FBckMsRUFBOEMsWUFBTTtBQUNsRHdaLFVBQU0sQ0FBQzlXLElBQVAsQ0FBWSxtQkFBWixFQUFpQ3VMLDRDQUFqQztBQUNBOGxCLGdCQUFZLENBQUMsa0JBQUQsRUFBcUIsS0FBckIsQ0FBWjtBQUNELEdBSEQ7QUFLQUwsV0FBUyxDQUFDMXpCLGdCQUFWLENBQTJCLE9BQTNCLEVBQW9DLFlBQU07QUFDeEMsUUFBSSxDQUFDZ3pCLFdBQUwsRUFBa0I7QUFDaEJ4WixZQUFNLENBQUM5VyxJQUFQLENBQVksWUFBWjtBQUNBc3dCLGlCQUFXLEdBQUcsSUFBZDtBQUNELEtBSEQsTUFJSztBQUNIO0FBQ0Q7QUFDRixHQVJELEVBM0c2QixDQXFIN0I7O0FBQ0F4WixRQUFNLENBQUN2SixFQUFQLENBQVUsYUFBVixFQUF5QixVQUFDbUssSUFBRCxFQUFVO0FBQ2pDaVosbUJBQWUsQ0FBQ242QixTQUFoQixHQUE0QmtoQixJQUE1QjtBQUNELEdBRkQsRUF0SDZCLENBMEg3Qjs7QUFDQVosUUFBTSxDQUFDdkosRUFBUCxDQUFVLGNBQVYsRUFBMEIsVUFBQ21LLElBQUQsRUFBVTtBQUNsQyxRQUFJQSxJQUFJLENBQUNpYSxZQUFMLEtBQXNCLENBQTFCLEVBQTZCO0FBQzNCLFVBQUlwbUIsbURBQUEsSUFBb0IsQ0FBeEIsRUFBMkI7QUFDekIzVixnQkFBUSxDQUFDdTdCLGdCQUFULENBQTBCLHdCQUExQixFQUFvRDNlLE9BQXBELENBQTRELFVBQUFqakIsR0FBRyxFQUFJO0FBQ2pFQSxhQUFHLENBQUNpSCxTQUFKLDJCQUFpQ2toQixJQUFJLENBQUN2aEIsVUFBdEM7QUFDRCxTQUZEO0FBR0FQLGdCQUFRLENBQUN1N0IsZ0JBQVQsQ0FBMEIsdUJBQTFCLEVBQW1EM2UsT0FBbkQsQ0FBMkQsVUFBQWpqQixHQUFHLEVBQUk7QUFDaEVBLGFBQUcsQ0FBQ3NOLEtBQUosQ0FBVXFFLE9BQVYsR0FBb0IsTUFBcEI7QUFDRCxTQUZEO0FBR0QsT0FQRCxNQVFLLElBQUlxSyxtREFBQSxJQUFvQixDQUF4QixFQUEyQjtBQUM5QjNWLGdCQUFRLENBQUN1N0IsZ0JBQVQsQ0FBMEIsd0JBQTFCLEVBQW9EM2UsT0FBcEQsQ0FBNEQsVUFBQWpqQixHQUFHLEVBQUk7QUFDakVBLGFBQUcsQ0FBQ2lILFNBQUosOENBQW9Ea2hCLElBQUksQ0FBQ2thLFFBQXpEO0FBQ0QsU0FGRDtBQUdBaDhCLGdCQUFRLENBQUN1N0IsZ0JBQVQsQ0FBMEIsdUJBQTFCLEVBQW1EM2UsT0FBbkQsQ0FBMkQsVUFBQWpqQixHQUFHLEVBQUk7QUFDaEVBLGFBQUcsQ0FBQ3NOLEtBQUosQ0FBVXFFLE9BQVYsR0FBb0IsTUFBcEI7QUFDRCxTQUZEO0FBR0Q7O0FBQ0Rtd0Isa0JBQVksQ0FBQywwQkFBRCxFQUE2QixLQUE3QixDQUFaO0FBQ0FBLGtCQUFZLENBQUMsa0JBQUQsRUFBcUIsS0FBckIsQ0FBWjtBQUNBQSxrQkFBWSxDQUFDLGtCQUFELEVBQXFCLElBQXJCLENBQVo7QUFDRDtBQUNGLEdBdEJEO0FBd0JBdmEsUUFBTSxDQUFDdkosRUFBUCxDQUFVLFlBQVYsRUFBd0IsVUFBQ21LLElBQUQsRUFBVTtBQUNoQzJaLGdCQUFZLENBQUMsa0JBQUQsRUFBcUIsS0FBckIsQ0FBWjtBQUNBQSxnQkFBWSxDQUFDLGFBQUQsRUFBZ0IsSUFBaEIsQ0FBWjtBQUNBZixlQUFXLEdBQUcsS0FBZDtBQUNBRixVQUFNLEdBQUcsS0FBVDtBQUNBQyxpQkFBYSxHQUFHLEtBQWhCO0FBQ0FGLGVBQVcsR0FBRyxLQUFkO0FBRUE3d0Isb0RBQUMsQ0FBQyx5QkFBRCxDQUFELENBQTZCOUksU0FBN0Isa0JBQWlEa2hCLElBQUksQ0FBQzNDLElBQXREO0FBQ0QsR0FURDtBQVdBK0IsUUFBTSxDQUFDdkosRUFBUCxDQUFVLGtCQUFWLEVBQThCLFVBQUNtSyxJQUFELEVBQVU7QUFDdEMyWixnQkFBWSxDQUFDLGtCQUFELEVBQXFCLEtBQXJCLENBQVo7QUFDQUEsZ0JBQVksQ0FBQyxhQUFELEVBQWdCLElBQWhCLENBQVo7QUFDQUEsZ0JBQVksQ0FBQywwQkFBRCxFQUE2QixJQUE3QixDQUFaO0FBQ0FmLGVBQVcsR0FBRyxLQUFkO0FBQ0FGLFVBQU0sR0FBRyxLQUFUO0FBQ0FDLGlCQUFhLEdBQUcsS0FBaEI7QUFDQUYsZUFBVyxHQUFHLEtBQWQ7QUFFQTd3QixvREFBQyxDQUFDLHlCQUFELENBQUQsQ0FBNkI5SSxTQUE3Qix3QkFBdURraEIsSUFBSSxDQUFDbWEsVUFBNUQ7QUFDRCxHQVZEO0FBWUEvYSxRQUFNLENBQUN2SixFQUFQLENBQVUsT0FBVixFQUFtQixZQUFNO0FBQ3ZCK2lCLGVBQVcsR0FBRyxLQUFkO0FBQ0FGLFVBQU0sR0FBRyxLQUFUO0FBQ0FDLGlCQUFhLEdBQUcsS0FBaEI7QUFDQUYsZUFBVyxHQUFHLEtBQWQ7QUFDRCxHQUxELEVBMUs2QixDQWlMN0I7O0FBQ0FyWixRQUFNLENBQUN2SixFQUFQLENBQVUsVUFBVixFQUFzQixZQUFNO0FBQzFCOGpCLGdCQUFZLENBQUMsa0JBQUQsRUFBcUIsS0FBckIsQ0FBWjtBQUNELEdBRkQsRUFsTDZCLENBdUw3Qjs7QUFDQUosYUFBVyxHQXhMa0IsQ0EwTDdCOztBQUNBLFNBQU9DLGFBQVA7QUFDRDtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxTQUFTRyxZQUFULENBQXNCOTZCLEVBQXRCLEVBQTBCbUosTUFBMUIsRUFBa0M7QUFDaEMsTUFBSW95QixNQUFNLEdBQUd4eUIsZ0RBQUMsbUJBQVkvSSxFQUFaLEVBQWQ7O0FBQ0EsTUFBSW1KLE1BQUosRUFBWTtBQUNWb3lCLFVBQU0sQ0FBQy83QixTQUFQLENBQWlCQyxHQUFqQixDQUFxQixjQUFyQjtBQUNELEdBRkQsTUFHSztBQUNIODdCLFVBQU0sQ0FBQy83QixTQUFQLENBQWlCZzhCLE1BQWpCLENBQXdCLGNBQXhCO0FBQ0Q7QUFDRjtBQUNEO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxTQUFTQyxpQkFBVCxHQUE2QjtBQUMzQixNQUFJam5CLGFBQWEsR0FBR3pMLGdEQUFDLENBQUMsaUJBQUQsQ0FBckI7QUFDQXlMLGVBQWEsQ0FBQ2xPLEtBQWQsQ0FBb0JxRSxPQUFwQixHQUE4QixNQUE5QjtBQUNEO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsU0FBUyt3QixrQkFBVCxDQUE0QnZ5QixNQUE1QixFQUFvQztBQUNsQzlKLFVBQVEsQ0FBQ3U3QixnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMzZSxPQUE5QyxDQUFzRCxVQUFBampCLEdBQUcsRUFBSTtBQUMzREEsT0FBRyxDQUFDcVEsWUFBSixDQUFpQixnQkFBakIsRUFBbUNGLE1BQU0sR0FBRyxFQUFILEdBQVEsTUFBakQ7QUFDRCxHQUZEO0FBR0Q7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxTQUFTd3lCLGtCQUFULENBQTRCeHlCLE1BQTVCLEVBQW9DO0FBQ2xDOUosVUFBUSxDQUFDdTdCLGdCQUFULENBQTBCLGtCQUExQixFQUE4QzNlLE9BQTlDLENBQXNELFVBQUFqakIsR0FBRyxFQUFJO0FBQzNEQSxPQUFHLENBQUNxUSxZQUFKLENBQWlCLGdCQUFqQixFQUFtQ0YsTUFBTSxHQUFHLEVBQUgsR0FBUSxNQUFqRDtBQUNELEdBRkQ7QUFHRDtBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLFNBQVM4eEIsT0FBVCxDQUFpQjFhLE1BQWpCLEVBQXlCO0FBQ3ZCdkwscURBQUEsR0FBbUIsQ0FBbkI7QUFDQThsQixjQUFZLENBQUMsMEJBQUQsRUFBNkIsSUFBN0IsQ0FBWjtBQUNBdmEsUUFBTSxDQUFDOVcsSUFBUCxDQUFZLFNBQVo7QUFDRDtBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsU0FBUzB4QixlQUFULENBQXlCNWEsTUFBekIsRUFBaUMyYSxRQUFqQyxFQUEyQztBQUN6Q2xtQixxREFBQSxHQUFtQixDQUFuQjtBQUNBdUwsUUFBTSxDQUFDOVcsSUFBUCxDQUFZLFVBQVosRUFBd0J5eEIsUUFBeEI7QUFDRDtBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLFNBQVNGLFdBQVQsQ0FBcUJ6YSxNQUFyQixFQUE2QnJnQixJQUE3QixFQUFtQ3dLLEVBQW5DLEVBQXVDO0FBQ3JDc0ssbURBQUEsR0FBaUI5VSxJQUFqQjtBQUNBcWdCLFFBQU0sQ0FBQzlXLElBQVAsQ0FBWSxhQUFaLEVBQTJCdkosSUFBM0I7QUFDQWIsVUFBUSxDQUFDdTdCLGdCQUFULHlCQUFnRDNlLE9BQWhELENBQXdELFVBQUMzUixDQUFELEVBQUkzTCxDQUFKLEVBQVU7QUFDaEUyTCxLQUFDLENBQUNySyxTQUFGLEdBQWNDLElBQWQ7QUFDRCxHQUZEO0FBR0E0NkIsY0FBWSxDQUFDLG1CQUFELEVBQXNCLEtBQXRCLENBQVo7QUFDRDs7QUFHTSxTQUFTYyxhQUFULENBQXVCbHhCLEVBQXZCLEVBQTJCO0FBQ2hDLE1BQUlteEIsRUFBRSxHQUFHOXlCLGdEQUFDLENBQUMsc0JBQUQsQ0FBVjtBQUNBOHlCLElBQUUsQ0FBQ3I4QixTQUFILENBQWFDLEdBQWIsQ0FBaUIsMkJBQWpCO0FBQ0EsTUFBSW1GLE1BQU0sR0FBR2kzQixFQUFFLENBQUM1eUIsYUFBSCxDQUFpQiw4QkFBakIsQ0FBYjtBQUNBckUsUUFBTSxDQUFDM0UsU0FBUCxHQUFtQixDQUFuQjtBQUNBLE1BQUk2N0IsWUFBWSxHQUFHbmdDLFdBQVcsQ0FBQyxZQUFNO0FBQ25DLFFBQUlpVSxRQUFRLENBQUNoTCxNQUFNLENBQUMzRSxTQUFSLENBQVIsR0FBNkIsQ0FBakMsRUFBb0M7QUFDbEMyRSxZQUFNLENBQUMzRSxTQUFQLEdBQW1CMlAsUUFBUSxDQUFDaEwsTUFBTSxDQUFDM0UsU0FBUixDQUFSLEdBQTZCLENBQWhEO0FBQ0QsS0FGRCxNQUdLO0FBQ0hoRSxtQkFBYSxDQUFDNi9CLFlBQUQsQ0FBYjtBQUNBdHhCLDREQUFPLENBQUNxeEIsRUFBRCxFQUFLLElBQUwsRUFBVyxZQUFNO0FBQ3RCQSxVQUFFLENBQUNyOEIsU0FBSCxDQUFhZzhCLE1BQWIsQ0FBb0IsMkJBQXBCO0FBQ0QsT0FGTSxDQUFQO0FBR0E5d0IsUUFBRTtBQUNIO0FBQ0YsR0FYNkIsRUFXM0IsSUFYMkIsQ0FBOUI7QUFZRCxDOzs7Ozs7VUN2U0Q7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLDZDQUE2Qyx3REFBd0QsRTs7Ozs7V0NBckc7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTTZWLE1BQU0sR0FBR3hWLG1CQUFPLENBQUMsd0VBQUQsQ0FBUCxDQUE0Qix1QkFBNUIsQ0FBZjs7QUFFQSxJQUFJZ3hCLGNBQUo7QUFDQSxJQUFJbm5CLGFBQWEsR0FBR0wsd0RBQVUsRUFBOUI7QUFDQUssYUFBYSxDQUFDbGEsSUFBZCxDQUFtQixVQUFDZ2EsUUFBRCxFQUFjO0FBQy9CcW5CLGdCQUFjLEdBQUdybkIsUUFBakI7QUFDRCxDQUZEO0FBSUEsSUFBSXNuQixhQUFhLEdBQUdyQywyQ0FBTSxDQUFDcFosTUFBRCxDQUExQjtBQUNBLElBQUlsZixJQUFJLEdBQUdELHVEQUFXLEVBQXRCO0FBQ0EsSUFBSTY2QixhQUFKO0FBRUFELGFBQWEsQ0FBQ3RoQyxJQUFkLENBQW1CLFlBQU07QUFDdkIyRyxNQUFJLENBQUNuRixPQUFMO0FBQ0QsQ0FGRDtBQUlBbUYsSUFBSSxDQUFDNUYsT0FBTCxDQUFhZixJQUFiLENBQWtCLFVBQUNtTyxRQUFELEVBQWM7QUFDOUJvekIsZUFBYSxHQUFHcHpCLFFBQWhCOztBQUNBL0IsUUFBTSxDQUFDbzFCLEVBQVAsR0FBWSxZQUFNO0FBQ2hCRCxpQkFBYSxDQUFDdjFCLFdBQWQsQ0FBMEJsSCxTQUExQixDQUFvQ0MsR0FBcEMsQ0FBd0MsVUFBeEM7QUFDQSxRQUFJd0IsZ0JBQWdCLEdBQUdnN0IsYUFBYSxDQUFDRSxRQUFkLEVBQXZCO0FBQ0FsN0Isb0JBQWdCLENBQUN2RyxJQUFqQixDQUFzQixZQUFNO0FBQzFCcWhDLG9CQUFjLENBQUMsS0FBRCxDQUFkO0FBQ0QsS0FGRDtBQUdELEdBTkQ7QUFRRCxDQVZEO0FBWUF4YixNQUFNLENBQUN2SixFQUFQLENBQVUsVUFBVixFQUFzQixZQUFNO0FBQzFCNGtCLG9EQUFhLENBQUMsWUFBTTtBQUNsQkssaUJBQWEsQ0FBQ3YxQixXQUFkLENBQTBCbEgsU0FBMUIsQ0FBb0NDLEdBQXBDLENBQXdDLFVBQXhDO0FBQ0EsUUFBSXdCLGdCQUFnQixHQUFHZzdCLGFBQWEsQ0FBQ0UsUUFBZCxFQUF2QjtBQUNBbDdCLG9CQUFnQixDQUFDdkcsSUFBakIsQ0FBc0IsWUFBTTtBQUMxQnFoQyxvQkFBYyxDQUFDLEtBQUQsQ0FBZDtBQUNELEtBRkQ7QUFHRCxHQU5ZLENBQWI7QUFPRCxDQVJEO0FBVUF4YixNQUFNLENBQUN2SixFQUFQLENBQVUsWUFBVixFQUF3QixZQUFNO0FBQzVCaWxCLGVBQWEsQ0FBQ2poQyxHQUFkLENBQWtCd0UsU0FBbEIsQ0FBNEJnOEIsTUFBNUIsQ0FBbUMsVUFBbkM7QUFDRCxDQUZEO0FBSUFqYixNQUFNLENBQUN2SixFQUFQLENBQVUsa0JBQVYsRUFBOEIsWUFBTTtBQUNsQ2lsQixlQUFhLENBQUNqaEMsR0FBZCxDQUFrQndFLFNBQWxCLENBQTRCZzhCLE1BQTVCLENBQW1DLFVBQW5DO0FBQ0QsQ0FGRDtBQUlBamIsTUFBTSxDQUFDdkosRUFBUCxDQUFVLE9BQVYsRUFBbUIsWUFBTTtBQUN2QmlsQixlQUFhLENBQUNqaEMsR0FBZCxDQUFrQndFLFNBQWxCLENBQTRCZzhCLE1BQTVCLENBQW1DLFVBQW5DO0FBQ0QsQ0FGRDtBQUlBamIsTUFBTSxDQUFDdkosRUFBUCxDQUFVLGdCQUFWLEVBQTRCLFlBQU07QUFDaENvbEIsT0FBSyxDQUFDLGtCQUFELENBQUw7QUFDRCxDQUZEO0FBSUE3YixNQUFNLENBQUN2SixFQUFQLENBQVUsYUFBVixFQUF5QixZQUFNO0FBQzdCb2xCLE9BQUssQ0FBQyxxQkFBRCxDQUFMO0FBQ0QsQ0FGRDtBQUlBN2IsTUFBTSxDQUFDdkosRUFBUCxDQUFVLGlCQUFWLEVBQTZCLFlBQU07QUFDakNvbEIsT0FBSyxDQUFDLHlDQUFELENBQUw7QUFDRCxDQUZELEU7Ozs7Ozs7OztBQy9EQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FudmFzMkRGeEJhc2UsIGJvb3QgfSBmcm9tICcuL2xpYi9iYXNlJztcbmltcG9ydCB7IFN0cm9rZUFuaW1hdGlvbiwgU3dpcmw4Qml0LCBTdGFyU2t5IH0gZnJvbSAnLi9saWIvYW5pbWF0aW9uJztcbmltcG9ydCB7IGdldENhY2hlQ2FudmFzIH0gZnJvbSAnLi9saWIvdXRpbCc7XG5pbXBvcnQgeyBwbGF5ZXJzRGF0YSwgYmFsbERhdGEgfSBmcm9tICcuLi9kYXRhJztcbmltcG9ydCB7IGRyYXdSZWN0LCBkcmF3Q2lyY2xlIH0gZnJvbSAnLi9saWIvc2hhcGUnXG5pbXBvcnQgeyByYW5kb21XaXRoaW5SYW5nZSB9IGZyb20gJy4vbGliL2Z1bmN0aW9uJztcblxuY29uc3QgREVGQVVMVCA9IHtcbiAgYmdDb2xvcjogJ3JnYmEoMCwwLDAsMSknLFxuICBjb3VydENvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwxKScsXG4gIGNvdXJ0QXNwZWN0UmF0aW86IDUgLyAzXG59XG5cbmV4cG9ydCBjbGFzcyBFbmdpbmUgZXh0ZW5kcyBDYW52YXMyREZ4QmFzZSB7XG4gIGNvbnN0cnVjdG9yKGVsZSwgZGVmYXVsdENvbmZpZywgY29uZmlnKSB7XG4gICAgc3VwZXIoZWxlLCBkZWZhdWx0Q29uZmlnLCBjb25maWcpXG4gICAgdGhpcy5waXhlbEJhc2UgPSAxNDQwO1xuICAgIHRoaXMuaW5pdCgpO1xuICAgIHRoaXMuZnBzID0gMzA7XG4gICAgdGhpcy5jb3VydE9mZnNldCA9IDc1O1xuICAgIHRoaXMuY291cnRPZmZzZXRNb2JpbGUgPSAyNTtcbiAgICB0aGlzLmdhbWVTdGF0dXMgPSAwO1xuICAgIHRoaXMucGF1c2UgPSBmYWxzZTtcbiAgICB0aGlzLnBsYXllcnNUaGlja25lc3MgPSAyMDtcbiAgICAvLzA6IG5vdCBzdGFydCB5ZXRcbiAgICAvLzE6IGN1cnRhaW4gYW5pbWF0aW5nXG4gICAgLy8yOiBjb3VydCBhbmltYXRpbmdcbiAgICAvLzM6IGFuaW1hdGluZyBwbGF5ZXJzIGFuZCBzY3JvZWJvYXJkXG4gICAgLy80OiBnYW1lIGlzIHJlYWR5XG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuY3VydGFpbiA9IHRoaXMuZ2VuQ3VydGFpbigpOy8vIOacgOW6leWxpGNhbnZhc1xuICAgIHRoaXMuY291cnQgPSB0aGlzLmdlbkNvdXJ0KCk7Ly/mnIDlupXlsaRjYW52YXNcbiAgICB0aGlzLnN0YXJTa3kgPSB0aGlzLmdlblN0YXJTa3koKTsvL+WAkuaVuOesrOS6jOWxpGNhbnZhc1xuICAgIHRoaXMucGxheWVycyA9IHRoaXMuZ2VuUGxheWVycygpOy8v5YCS5pW456ys5LiJ5bGkY2FudmFzXG4gICAgdGhpcy5iYWxsID0gdGhpcy5nZW5CYWxsKCk7Ly/lgJLmlbjnrKzlm5vlsaRjYW52YXNcbiAgICB0aGlzLnNjb3JlYm9hcmRzID0gdGhpcy5nZW5TY29yZWJvYXJkcygpOy8v5pyA6KGo5bGkY2FudmFzXG4gICAgdGhpcy5pbml0UmVzaXplZCgpO1xuICB9XG5cbiAgaW5pdFJlc2l6ZWQoKSB7XG4gICAgdGhpcy5yZXNpemVkQ2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgICB0aGlzLmN1cnRhaW4uZHJhd1N0YXRpYygpXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICBpZiAodGhpcy5nYW1lU3RhdHVzID09PSAzKSB7XG4gICAgICAgICAgICB0aGlzLmJhY2tncm91bmQoJ2JsYWNrJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuY291cnQuZHJhd1N0YXRpYygpO1xuICAgICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGdlbkN1cnRhaW4oYmFuZFdpZHRoID0gMzApIHtcbiAgICBsZXQgY3VydGFpbkNhbnZhc0luc3RhbmNlID0gdGhpcy5jdXJ0YWluQ2FudmFzSW5zdGFuY2UgPSB0aGlzLmNyZWF0ZVZpcnR1YWxDYW52YXNCYXNlSW5zdGFuY2UoKTtcbiAgICBjdXJ0YWluQ2FudmFzSW5zdGFuY2Uuc2V0Q2FudmFzU2l6ZSh0aGlzLmN2cy53aWR0aCwgdGhpcy5jdnMuaGVpZ2h0KTtcbiAgICBsZXQgY3VydGFpbkFuaW1hdGlvbkluc3RhbmNlID0gbmV3IFN3aXJsOEJpdChjdXJ0YWluQ2FudmFzSW5zdGFuY2UuY3R4KTtcbiAgICBsZXQgY3VydGFpbiA9IHtcbiAgICAgIGFuaW1hdGU6ICgpID0+IHtcbiAgICAgICAgbGV0IGluaXRpYWxJbWFnZSA9IGdldENhY2hlQ2FudmFzKHRoaXMuY3R4KTtcbiAgICAgICAgbGV0IHByb21pc2UgPSBjdXJ0YWluQW5pbWF0aW9uSW5zdGFuY2UuYW5pbWF0ZShmYWxzZSwgYmFuZFdpZHRoLCB0aGlzLmNvbmZpZy5iZ0NvbG9yKTtcbiAgICAgICAgbGV0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoaW5pdGlhbEltYWdlLCAwLCAwLCB0aGlzLmN2cy53aWR0aCwgdGhpcy5jdnMuaGVpZ2h0LCAwLCAwLCB0aGlzLmN2cy53aWR0aCwgdGhpcy5jdnMuaGVpZ2h0KTtcbiAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoY3VydGFpbkNhbnZhc0luc3RhbmNlLmN2cywgMCwgMCwgY3VydGFpbkNhbnZhc0luc3RhbmNlLmN2cy53aWR0aCwgY3VydGFpbkNhbnZhc0luc3RhbmNlLmN2cy5oZWlnaHQsIDAsIDAsIHRoaXMuY3ZzLndpZHRoLCB0aGlzLmN2cy5oZWlnaHQpO1xuICAgICAgICB9LCB0aGlzLmZwcyk7XG4gICAgICAgIHJldHVybiBwcm9taXNlLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzKSA9PiB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICAgICAgIHJlcygpO1xuICAgICAgICAgICAgfSwgNTAwKVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgZHJhd1N0YXRpYzogKCkgPT4geyAvL1xuICAgICAgICBsZXQgdHJpZ2dlcjtcbiAgICAgICAgbGV0IHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcbiAgICAgICAgICB0cmlnZ2VyID0gcmVzO1xuICAgICAgICB9KVxuICAgICAgICBsZXQgc3RhdGljSW1hZ2UgPSBjdXJ0YWluQ2FudmFzSW5zdGFuY2UuY3ZzO1xuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXG4gICAgICAgICAgc3RhdGljSW1hZ2UsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIHN0YXRpY0ltYWdlLndpZHRoLFxuICAgICAgICAgIHN0YXRpY0ltYWdlLmhlaWdodCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgdGhpcy5jdnMud2lkdGgsXG4gICAgICAgICAgdGhpcy5jdnMuaGVpZ2h0XG4gICAgICAgIClcbiAgICAgICAgdHJpZ2dlcigpO1xuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBjdXJ0YWluO1xuICB9XG5cbiAgZ2V0QXNwZWN0UmF0aW8oKSB7XG4gICAgcmV0dXJuIHRoaXMuY3ZzLndpZHRoIC8gdGhpcy5jdnMuaGVpZ2h0O1xuICB9XG5cbiAgcmVzcG9uc2l2ZVBhaW50ZXIodGFyZ2V0TGF5ZXIsIHNvdXJjZUNhbnZhcywgaW5pdGlhbEltYWdlKSB7XG4gICAgbGV0IG9mZnNldCA9IHRoaXMuY291cnRPZmZzZXQ7XG4gICAgbGV0IG9mZnNldE1vYmlsZSA9IHRoaXMuY291cnRPZmZzZXRNb2JpbGU7XG4gICAgdGFyZ2V0TGF5ZXIuY3R4LnNhdmUoKTtcbiAgICAvL+eVq2NvdXJ0IOacg+acieWbm+eorueLgOazgSwgKGNhbnZhc+mVt+WvrD7poJDoqK3plbflr6zmr5Q+MSkgfCAoMTw9Y2FudmFz6ZW35a+sPOmgkOioremVt+WvrOavlCkgfCAo6aCQ6Kit6ZW35a+s5q+U5YCS5pW4PGNhbnZhc+mVt+WvrOavlDwxKSDvvZwgKGNhbnZhc+mVt+WvrOavlDzpoJDoqK3plbflr6zmr5TlgJLmlbg8MSlcbiAgICBpZiAodGhpcy5nZXRBc3BlY3RSYXRpbygpID49IDEpIHtcbiAgICAgIC8vIOmAmemCiuaYr+WJjeWFqeeorueLgOazgVxuICAgICAgLy/lhYjmuIXpmaTkuIDmrKHkuYvlvoznlatpbml0aWFsSW1hZ2UgLCDlho3nlatjb3VydFxuICAgICAgdGFyZ2V0TGF5ZXIuY2xlYXIoKTtcbiAgICAgIGxldCB0eXBlQSA9ICh0YXJnZXRMYXllci5jdnMuaGVpZ2h0IC0gMiAqIG9mZnNldCkgKiB0aGlzLmNvbmZpZy5jb3VydEFzcGVjdFJhdGlvIDwgdGFyZ2V0TGF5ZXIuY3ZzLndpZHRoIC0gMiAqIG9mZnNldDtcbiAgICAgIGxldCBvZmZzZXRWLCBvZmZzZXRILCBjb3VydEhlaWdodCwgY291cnRXaWR0aDtcbiAgICAgIGlmICh0eXBlQSkge1xuICAgICAgICAvLyDlhYjnrpflh7rnuK7muJvpgY5vZmZzZXQg55qEY3ZzIOWvrFxuICAgICAgICBvZmZzZXRWID0gb2Zmc2V0O1xuICAgICAgICBjb3VydEhlaWdodCA9IHRhcmdldExheWVyLmN2cy5oZWlnaHQgLSAyICogb2Zmc2V0O1xuICAgICAgICBjb3VydFdpZHRoID0gY291cnRIZWlnaHQgKiB0aGlzLmNvbmZpZy5jb3VydEFzcGVjdFJhdGlvO1xuICAgICAgICBvZmZzZXRIID0gKHRhcmdldExheWVyLmN2cy53aWR0aCAtIGNvdXJ0V2lkdGgpIC8gMjtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICAvLyDpnZ50eXBlQeeahOeLgOazgSwg5Lmf5bCx5pivY2FudmFz5a+s6auY5q+U5L2O5pa8Y29uZmlnIOioreWumueahOavlOS+i1xuICAgICAgICBvZmZzZXRIID0gb2Zmc2V0O1xuICAgICAgICBjb3VydFdpZHRoID0gdGFyZ2V0TGF5ZXIuY3ZzLndpZHRoIC0gMiAqIG9mZnNldDtcbiAgICAgICAgY291cnRIZWlnaHQgPSBjb3VydFdpZHRoIC8gdGhpcy5jb25maWcuY291cnRBc3BlY3RSYXRpbztcbiAgICAgICAgb2Zmc2V0ViA9ICh0YXJnZXRMYXllci5jdnMuaGVpZ2h0IC0gY291cnRIZWlnaHQpIC8gMjtcbiAgICAgIH1cbiAgICAgIGlmIChpbml0aWFsSW1hZ2UpIHtcbiAgICAgICAgdGFyZ2V0TGF5ZXIuY3R4LmRyYXdJbWFnZShcbiAgICAgICAgICBpbml0aWFsSW1hZ2UsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIGluaXRpYWxJbWFnZS53aWR0aCxcbiAgICAgICAgICBpbml0aWFsSW1hZ2UuaGVpZ2h0LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICB0YXJnZXRMYXllci5jdnMud2lkdGgsXG4gICAgICAgICAgdGFyZ2V0TGF5ZXIuY3ZzLmhlaWdodFxuICAgICAgICApXG5cbiAgICAgIH1cbiAgICAgIC8vIOWFiOaXi+i9ieeVq+W4gywg5Zug54K6IHZpcnR1YWxjYW52YXMg5piv5LiA5by15Z6C55u055qE55Wr5biDXG4gICAgICB0YXJnZXRMYXllci5jdHgudHJhbnNsYXRlKHRhcmdldExheWVyLmN2cy53aWR0aCAvIDIsIHRhcmdldExheWVyLmN2cy5oZWlnaHQgLyAyKTtcbiAgICAgIHRhcmdldExheWVyLmN0eC5yb3RhdGUoLU1hdGguUEkgLyAyKTtcbiAgICAgIHRhcmdldExheWVyLmN0eC50cmFuc2xhdGUoLXRhcmdldExheWVyLmN2cy5oZWlnaHQgLyAyLCAtdGFyZ2V0TGF5ZXIuY3ZzLndpZHRoIC8gMik7XG4gICAgICAvLyDlm6Dngrpjb3VydCDnmoTlpKflsI/mnIPpmqjokZdjYW52YXMg55qE6ZW35a+s5q+U6ICM6K6K5YuVXG4gICAgICAvLyDpgJnpgorlhYgg5YGH6Kit5LuK5aSp5pivY2FudmFzIOWvrOavlOmrmOi2heWHuuW+iOWkmueahOaDheazgSAsIOS5n+WwseaYr+eLgOazgVwidHlwZUFcIlxuICAgICAgdGFyZ2V0TGF5ZXIuY3R4LmRyYXdJbWFnZShcbiAgICAgICAgc291cmNlQ2FudmFzLFxuICAgICAgICAwLFxuICAgICAgICAwLFxuICAgICAgICBzb3VyY2VDYW52YXMud2lkdGgsXG4gICAgICAgIHNvdXJjZUNhbnZhcy5oZWlnaHQsXG4gICAgICAgIG9mZnNldFYsXG4gICAgICAgIG9mZnNldEgsXG4gICAgICAgIGNvdXJ0SGVpZ2h0LFxuICAgICAgICBjb3VydFdpZHRoXG4gICAgICApXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgLy/pgJnpgormmK/lvozlhannqK7ni4Dms4FcbiAgICAgIC8vIOWboOeCumNvdXJ0IOeahOWkp+Wwj+acg+maqOiRl2NhbnZhcyDnmoTplbflr6zmr5TogIzororli5VcbiAgICAgIC8vIOmAmemCiuWFiCDlgYfoqK3ku4rlpKnmmK9jYW52YXMg6auY5q+U5a+s5q+U6LaF5Ye65b6I5aSa55qE5oOF5rOBICwg5Lmf5bCx5piv54uA5rOBXCJ0eXBlQVwiXG4gICAgICBsZXQgdHlwZUEgPSAodGFyZ2V0TGF5ZXIuY3ZzLndpZHRoIC0gMiAqIG9mZnNldE1vYmlsZSkgKiB0aGlzLmNvbmZpZy5jb3VydEFzcGVjdFJhdGlvIDwgdGFyZ2V0TGF5ZXIuY3ZzLmhlaWdodCAtIDIgKiBvZmZzZXQ7XG4gICAgICBsZXQgb2Zmc2V0Viwgb2Zmc2V0SCwgY291cnRIZWlnaHQsIGNvdXJ0V2lkdGg7XG4gICAgICBpZiAodHlwZUEpIHtcbiAgICAgICAgLy8g5YWI566X5Ye657iu5rib6YGOb2Zmc2V0IOeahGN2cyDlr6xcbiAgICAgICAgb2Zmc2V0SCA9IG9mZnNldE1vYmlsZTtcbiAgICAgICAgY291cnRXaWR0aCA9IHRhcmdldExheWVyLmN2cy53aWR0aCAtIDIgKiBvZmZzZXRNb2JpbGU7XG4gICAgICAgIGNvdXJ0SGVpZ2h0ID0gY291cnRXaWR0aCAqIHRoaXMuY29uZmlnLmNvdXJ0QXNwZWN0UmF0aW87XG4gICAgICAgIG9mZnNldFYgPSAodGFyZ2V0TGF5ZXIuY3ZzLmhlaWdodCAtIGNvdXJ0SGVpZ2h0KSAvIDI7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgLy8g6Z2edHlwZUHnmoTni4Dms4EsIOS5n+WwseaYr2NhbnZhc+WvrOmrmOavlOS9juaWvGNvbmZpZyDoqK3lrprnmoTmr5TkvotcbiAgICAgICAgb2Zmc2V0ViA9IG9mZnNldDtcbiAgICAgICAgY291cnRIZWlnaHQgPSB0YXJnZXRMYXllci5jdnMuaGVpZ2h0IC0gMiAqIG9mZnNldDtcbiAgICAgICAgY291cnRXaWR0aCA9IGNvdXJ0SGVpZ2h0IC8gdGhpcy5jb25maWcuY291cnRBc3BlY3RSYXRpbztcbiAgICAgICAgb2Zmc2V0SCA9ICh0YXJnZXRMYXllci5jdnMud2lkdGggLSBjb3VydFdpZHRoKSAvIDI7XG4gICAgICB9XG4gICAgICBpZiAoaW5pdGlhbEltYWdlKSB7XG4gICAgICAgIHRhcmdldExheWVyLmN0eC5kcmF3SW1hZ2UoXG4gICAgICAgICAgaW5pdGlhbEltYWdlLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICBpbml0aWFsSW1hZ2Uud2lkdGgsXG4gICAgICAgICAgaW5pdGlhbEltYWdlLmhlaWdodCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgdGFyZ2V0TGF5ZXIuY3ZzLndpZHRoLFxuICAgICAgICAgIHRhcmdldExheWVyLmN2cy5oZWlnaHRcbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgdGFyZ2V0TGF5ZXIuY3R4LmRyYXdJbWFnZShcbiAgICAgICAgc291cmNlQ2FudmFzLFxuICAgICAgICAwLFxuICAgICAgICAwLFxuICAgICAgICBzb3VyY2VDYW52YXMud2lkdGgsXG4gICAgICAgIHNvdXJjZUNhbnZhcy5oZWlnaHQsXG4gICAgICAgIG9mZnNldEgsXG4gICAgICAgIG9mZnNldFYsXG4gICAgICAgIGNvdXJ0V2lkdGgsXG4gICAgICAgIGNvdXJ0SGVpZ2h0XG4gICAgICApXG4gICAgfVxuXG4gICAgdGFyZ2V0TGF5ZXIuY3R4LnJlc3RvcmUoKTtcbiAgfVxuXG4gIGdlbkNvdXJ0KHN0cm9rZVdpZHRoID0gMTApIHtcbiAgICBsZXQgY291cnRDYW52YXNJbnN0YW5jZSA9IHRoaXMuY291cnRDYW52YXNJbnN0YW5jZSA9IHRoaXMuY3JlYXRlVmlydHVhbENhbnZhc0Jhc2VJbnN0YW5jZSgpO1xuICAgIGxldCBjb3VydENhbnZhc1dpZHRoID0gdGhpcy5waXhlbEJhc2UgLyB0aGlzLmNvbmZpZy5jb3VydEFzcGVjdFJhdGlvO1xuICAgIGxldCBjb3VydENhbnZhc0hlaWdodCA9IHRoaXMucGl4ZWxCYXNlO1xuICAgIGNvdXJ0Q2FudmFzSW5zdGFuY2Uuc2V0Q2FudmFzU2l6ZShjb3VydENhbnZhc1dpZHRoLCBjb3VydENhbnZhc0hlaWdodCk7XG4gICAgbGV0IHZlcnRpY2VzID0gW1xuICAgICAgeyB4OiAwLCB5OiAwIH0sXG4gICAgICB7IHg6IGNvdXJ0Q2FudmFzSW5zdGFuY2UuY3ZzLndpZHRoLCB5OiAwIH0sXG4gICAgICB7IHg6IGNvdXJ0Q2FudmFzSW5zdGFuY2UuY3ZzLndpZHRoLCB5OiBjb3VydENhbnZhc0luc3RhbmNlLmN2cy5oZWlnaHQgfSxcbiAgICAgIHsgeDogMCwgeTogY291cnRDYW52YXNJbnN0YW5jZS5jdnMuaGVpZ2h0IH0sXG4gICAgICB7IHg6IDAsIHk6IDAgfVxuICAgIF07XG5cbiAgICBsZXQgc3Ryb2tlQW5pbWF0aW9uSW5zdGFuY2UgPSBuZXcgU3Ryb2tlQW5pbWF0aW9uKGNvdXJ0Q2FudmFzSW5zdGFuY2UuY3R4LCB2ZXJ0aWNlcyk7XG5cbiAgICBsZXQgY291cnQgPSB7XG4gICAgICBhbmltYXRlOiAoKSA9PiB7XG4gICAgICAgIGNvdXJ0LmluaXRpYWxJbWFnZSA9IGdldENhY2hlQ2FudmFzKHRoaXMuY3R4KTtcbiAgICAgICAgbGV0IHByb21pc2UgPSBzdHJva2VBbmltYXRpb25JbnN0YW5jZS5hbmltYXRlKHN0cm9rZVdpZHRoLCB0aGlzLmNvbmZpZy5jb3VydENvbG9yKS50aGVuKCgpID0+IHtcbiAgICAgICAgICBsZXQgdmVydGljZXMgPSBbXG4gICAgICAgICAgICB7IHg6IDAsIHk6IGNvdXJ0Q2FudmFzSW5zdGFuY2UuY3ZzLmhlaWdodCAvIDIgfSxcbiAgICAgICAgICAgIHsgeDogY291cnRDYW52YXNJbnN0YW5jZS5jdnMud2lkdGgsIHk6IGNvdXJ0Q2FudmFzSW5zdGFuY2UuY3ZzLmhlaWdodCAvIDIgfSxcbiAgICAgICAgICBdXG4gICAgICAgICAgcmV0dXJuIG5ldyBTdHJva2VBbmltYXRpb24oY291cnRDYW52YXNJbnN0YW5jZS5jdHgsIHZlcnRpY2VzKS5hbmltYXRlKHN0cm9rZVdpZHRoLCB0aGlzLmNvbmZpZy5jb3VydENvbG9yLCBmYWxzZSwgWzEwLCAzMF0sICd0cmFuc3BhcmVudCcpO1xuICAgICAgICB9KTtcbiAgICAgICAgbGV0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgIHRoaXMucmVzcG9uc2l2ZVBhaW50ZXIodGhpcywgY291cnRDYW52YXNJbnN0YW5jZS5jdnMsIGNvdXJ0LmluaXRpYWxJbWFnZSk7XG4gICAgICAgIH0sIHRoaXMuZnBzKVxuICAgICAgICByZXR1cm4gcHJvbWlzZS50aGVuKCgpID0+IHtcbiAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlcykgPT4ge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgICAgICByZXMoKTtcbiAgICAgICAgICAgIH0sIDUwMClcbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuXG4gICAgICB9LFxuICAgICAgZHJhd1N0YXRpYzogKCkgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XG4gICAgICAgICAgdGhpcy5yZXNwb25zaXZlUGFpbnRlcih0aGlzLCBjb3VydENhbnZhc0luc3RhbmNlLmN2cywgY291cnQuaW5pdGlhbEltYWdlKTtcbiAgICAgICAgICByZXMoKTtcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIGNvdXJ0O1xuICB9XG5cbiAgZ2VuU3RhclNreSgpIHtcbiAgICBsZXQgc3RhclNreUNhbnZhc0luc3RhbmNlID0gdGhpcy5zdGFyU2t5Q2FudmFzSW5zdGFuY2UgPSB0aGlzLmFkZE5ld0xheWVyKCk7XG4gICAgbGV0IHN0YXJTa3lBbmltYXRpb25JbnN0YW5jZSA9IG5ldyBTdGFyU2t5KHN0YXJTa3lDYW52YXNJbnN0YW5jZS5jdHgpO1xuICAgIHN0YXJTa3lDYW52YXNJbnN0YW5jZS5yZXNpemVkQ2FsbGJhY2sgPSBzdGFyU2t5QW5pbWF0aW9uSW5zdGFuY2UucmVmcmVzaFN0YXJzLmJpbmQoc3RhclNreUFuaW1hdGlvbkluc3RhbmNlKTtcbiAgICByZXR1cm4gc3RhclNreUFuaW1hdGlvbkluc3RhbmNlO1xuICB9XG5cblxuICBnZW5QbGF5ZXJzKHdpZHRoUHJhbSA9IDEwLCBnYXBSYXRpbyA9IDAuMDUsIGNvbG9yID0gJ3doaXRlJywgdGhpY2tuZXNzID0gMjApIHtcbiAgICB0aGlzLnBsYXllcnNUaGlja25lc3MgPSB0aGlja25lc3M7XG4gICAgbGV0IHBsYXllcnNDYW52YXNJbnN0YW5jZSA9IHRoaXMucGxheWVyc0NhbnZhc0luc3RhbmNlID0gdGhpcy5hZGROZXdMYXllcigpO1xuICAgIGxldCBwbGF5ZXJzVmlydHVhbENhbnZhc0luc3RhbmNlID0gdGhpcy5wbGF5ZXJzVmlydHVhbENhbnZhc0luc3RhbmNlID0gdGhpcy5jcmVhdGVWaXJ0dWFsQ2FudmFzQmFzZUluc3RhbmNlKCk7XG4gICAgcGxheWVyc1ZpcnR1YWxDYW52YXNJbnN0YW5jZS5zZXRDYW52YXNTaXplKHRoaXMuY291cnRDYW52YXNJbnN0YW5jZS5jdnMud2lkdGgsIHRoaXMuY291cnRDYW52YXNJbnN0YW5jZS5jdnMuaGVpZ2h0KTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVyc0RhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIHBsYXllcnNEYXRhW2ldLndpZHRoID0gKHRoaXMucGl4ZWxCYXNlIC8gdGhpcy5jb25maWcuY291cnRBc3BlY3RSYXRpbykgLyB3aWR0aFByYW07XG4gICAgICBwbGF5ZXJzRGF0YVtpXS5wb3NpdGlvbi54ID0gdGhpcy5jb3VydENhbnZhc0luc3RhbmNlLmN2cy53aWR0aCAvIDI7XG4gICAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgICBwbGF5ZXJzRGF0YVtpXS5wb3NpdGlvbi55ID0gdGhpcy5jb3VydENhbnZhc0luc3RhbmNlLmN2cy5oZWlnaHQgKiAoMSAtIGdhcFJhdGlvKVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAoaSA9PT0gMSkge1xuICAgICAgICBwbGF5ZXJzRGF0YVtpXS5wb3NpdGlvbi55ID0gdGhpcy5jb3VydENhbnZhc0luc3RhbmNlLmN2cy5oZWlnaHQgKiBnYXBSYXRpb1xuICAgICAgfVxuICAgIH1cbiAgICBsZXQgcGxheWVycyA9IHtcbiAgICAgIHJlYWR5OiAoKSA9PiB7XG4gICAgICAgIGxldCB0cmlnZ2VyO1xuICAgICAgICBsZXQgcHJvbWlzZSA9IG5ldyBQcm9taXNlKHJlcyA9PiB7XG4gICAgICAgICAgdHJpZ2dlciA9IHJlcztcbiAgICAgICAgfSlcbiAgICAgICAgbGV0IG9wYWNpdHkgPSAwO1xuICAgICAgICBsZXQgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgaWYgKG9wYWNpdHkgPj0gMSkge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICAgICB0cmlnZ2VyKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVyc0RhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGRyYXdSZWN0KHBsYXllcnNWaXJ0dWFsQ2FudmFzSW5zdGFuY2UuY3R4LCBwbGF5ZXJzRGF0YVtpXS5wb3NpdGlvbi54LCBwbGF5ZXJzRGF0YVtpXS5wb3NpdGlvbi55LCBwbGF5ZXJzRGF0YVtpXS53aWR0aCwgdGhpY2tuZXNzLCBjb2xvciwgb3BhY2l0eSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMucmVzcG9uc2l2ZVBhaW50ZXIocGxheWVyc0NhbnZhc0luc3RhbmNlLCBwbGF5ZXJzVmlydHVhbENhbnZhc0luc3RhbmNlLmN2cyk7XG4gICAgICAgICAgb3BhY2l0eSArPSAwLjAxO1xuICAgICAgICB9LCB0aGlzLmZwcylcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgICB9LFxuXG4gICAgICBsb29wVXBkYXRlOiAoKSA9PiB7XG4gICAgICAgIGxldCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICBwbGF5ZXJzVmlydHVhbENhbnZhc0luc3RhbmNlLmNsZWFyKCk7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5ZXJzRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZHJhd1JlY3QocGxheWVyc1ZpcnR1YWxDYW52YXNJbnN0YW5jZS5jdHgsIHBsYXllcnNEYXRhW2ldLnBvc2l0aW9uLngsIHBsYXllcnNEYXRhW2ldLnBvc2l0aW9uLnksIHBsYXllcnNEYXRhW2ldLndpZHRoLCB0aGlja25lc3MsIGNvbG9yLCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5yZXNwb25zaXZlUGFpbnRlcihwbGF5ZXJzQ2FudmFzSW5zdGFuY2UsIHBsYXllcnNWaXJ0dWFsQ2FudmFzSW5zdGFuY2UuY3ZzKTtcbiAgICAgICAgfSwgdGhpcy5mcHMpXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHBsYXllcnM7XG4gIH1cblxuICBnZW5TY29yZWJvYXJkcygpIHtcbiAgICBsZXQgc2NvcmVib2FyZHNMYXllciA9IHRoaXMuYWRkRGl2TGF5ZXIoJ3Njb3JlYm9hcmRzJywgJ3Njb3JlYm9hcmRzJyk7XG4gICAgbGV0IHRvcEJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBib3RCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b3BCYXIuY2xhc3NMaXN0LmFkZCgnc2NvcmVib2FyZHNfX3RvcC1iYXInKTtcbiAgICBib3RCYXIuY2xhc3NMaXN0LmFkZCgnc2NvcmVib2FyZHNfX2JvdC1iYXInKTtcbiAgICBzY29yZWJvYXJkc0xheWVyLmFwcGVuZCh0b3BCYXIsIGJvdEJhcik7XG4gICAgbGV0IGdlblBsYXllclNob3djYXNlID0gKHBsYXllck5hbWUsIHBsYXllcklkLCBzY29yZU1heCkgPT4ge1xuXG4gICAgICBsZXQgcGxheWVyU2hvd0Nhc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHBsYXllclNob3dDYXNlLmNsYXNzTGlzdC5hZGQoJ3BsYXllci1zaG93Y2FzZScpO1xuICAgICAgcGxheWVyU2hvd0Nhc2UuaWQgPSBwbGF5ZXJJZDtcbiAgICAgIGxldCBpbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwbGF5ZXItc2hvd2Nhc2VfX25hbWVcIj4ke3BsYXllck5hbWV9PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwbGF5ZXItc2hvd2Nhc2VfX3Njb3JlXCI+XG4gICAgICAgICAgMDAwMCAgIFxuICAgICAgICA8L2Rpdj5cbiAgICAgIGBcbiAgICAgIHBsYXllclNob3dDYXNlLmlubmVySFRNTCA9IGlubmVySFRNTDtcbiAgICAgIHJldHVybiBwbGF5ZXJTaG93Q2FzZTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5ZXJzRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgdG9wQmFyLmFwcGVuZChnZW5QbGF5ZXJTaG93Y2FzZShwbGF5ZXJzRGF0YVtpXS5uYW1lLCBwbGF5ZXJzRGF0YVtpXS5pZCwgNSkpXG4gICAgfVxuICAgIGxldCBzY29yZWJvYXJkcyA9IHtcbiAgICAgIHVwZGF0ZVNjb3JlOiAocGxheWVySWQsIHNjb3JlKSA9PiB7XG5cbiAgICAgIH0sXG4gICAgICByZWFkeTogKCkgPT4ge1xuICAgICAgICBzY29yZWJvYXJkc0xheWVyLmNsYXNzTGlzdC5hZGQoJ3Njb3JlYm9hcmRzLS1yZWFkeScpO1xuICAgICAgfSxcbiAgICAgIGxvb3BVcGRhdGU6ICgpID0+IHtcblxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzY29yZWJvYXJkc1xuICB9XG5cbiAgZ2VuQmFsbChzcGVlZCA9IDEwMCwgc2l6ZSA9IDMwLCBjb2xvciA9ICd3aGl0ZScpIHtcbiAgICBsZXQgYmFsbENhbnZhc0luc3RhbmNlID0gdGhpcy5iYWxsQ2FudmFzSW5zdGFuY2UgPSB0aGlzLmFkZE5ld0xheWVyKCk7XG4gICAgbGV0IGJhbGxWaXJ0dWFsQ2FudmFzSW5zdGFuY2UgPSB0aGlzLmJhbGxWaXJ0dWFsQ2FudmFzSW5zdGFuY2UgPSB0aGlzLmNyZWF0ZVZpcnR1YWxDYW52YXNCYXNlSW5zdGFuY2UoKTtcbiAgICBiYWxsVmlydHVhbENhbnZhc0luc3RhbmNlLnNldENhbnZhc1NpemUodGhpcy5jb3VydENhbnZhc0luc3RhbmNlLmN2cy53aWR0aCwgdGhpcy5jb3VydENhbnZhc0luc3RhbmNlLmN2cy5oZWlnaHQpO1xuXG4gICAgLy9pbml0IGJhbGxEYXRhXG5cbiAgICBiYWxsRGF0YS5zcGVlZCA9IHtcbiAgICAgIHg6IHJhbmRvbVdpdGhpblJhbmdlKDAsIHNwZWVkKSxcbiAgICAgIHk6IHJhbmRvbVdpdGhpblJhbmdlKDAsIHNwZWVkKVxuICAgIH1cbiAgICBiYWxsRGF0YS5zaXplID0gc2l6ZTtcbiAgICBiYWxsRGF0YS5jb2xvciA9IGNvbG9yO1xuICAgIGJhbGxEYXRhLnBvc2l0aW9uID0ge1xuICAgICAgeDogcGxheWVyc0RhdGFbMF0ucG9zaXRpb24ueCwgLy/miL/kuLvlhYjmjIHnkINcbiAgICAgIHk6IHBsYXllcnNEYXRhWzBdLnBvc2l0aW9uLnkgLSB0aGlzLnBsYXllcnNUaGlja25lc3MgLSAxMFxuICAgIH07XG5cbiAgICBsZXQgYmFsbCA9IHtcbiAgICAgIHJlYWR5OiAoKSA9PiB7XG4gICAgICAgIGxldCB0cmlnZ2VyO1xuICAgICAgICBsZXQgcHJvbWlzZSA9IG5ldyBQcm9taXNlKHJlcyA9PiB7XG4gICAgICAgICAgdHJpZ2dlciA9IHJlcztcbiAgICAgICAgfSlcbiAgICAgICAgbGV0IG9wYWNpdHkgPSAwO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBsZXQgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAob3BhY2l0eSA+PSAxKSB7XG4gICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgICAgICB0cmlnZ2VyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkcmF3Q2lyY2xlKGJhbGxWaXJ0dWFsQ2FudmFzSW5zdGFuY2UuY3R4LCBiYWxsRGF0YS5wb3NpdGlvbi54LCBiYWxsRGF0YS5wb3NpdGlvbi55LCBiYWxsRGF0YS5zaXplLCBiYWxsRGF0YS5jb2xvciwgb3BhY2l0eSk7XG4gICAgICAgICAgICB0aGlzLnJlc3BvbnNpdmVQYWludGVyKGJhbGxDYW52YXNJbnN0YW5jZSwgYmFsbFZpcnR1YWxDYW52YXNJbnN0YW5jZS5jdnMpO1xuXG4gICAgICAgICAgICBvcGFjaXR5ICs9IDAuMDE7XG4gICAgICAgICAgfSwgdGhpcy5mcHMpXG4gICAgICAgIH0sIDUwMClcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgICB9LFxuICAgICAgbG9vcFVwZGF0ZTogKCkgPT4ge1xuICAgICAgICBsZXQgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgYmFsbFZpcnR1YWxDYW52YXNJbnN0YW5jZS5jbGVhcigpO1xuICAgICAgICAgIGRyYXdDaXJjbGUoYmFsbFZpcnR1YWxDYW52YXNJbnN0YW5jZS5jdHgsIGJhbGxEYXRhLnBvc2l0aW9uLngsIGJhbGxEYXRhLnBvc2l0aW9uLnksIGJhbGxEYXRhLnNpemUsIGJhbGxEYXRhLmNvbG9yKTtcbiAgICAgICAgICB0aGlzLnJlc3BvbnNpdmVQYWludGVyKGJhbGxDYW52YXNJbnN0YW5jZSwgYmFsbFZpcnR1YWxDYW52YXNJbnN0YW5jZS5jdnMpO1xuICAgICAgICB9LCB0aGlzLmZwcylcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGJhbGw7XG4gIH1cblxuICBkcmF3R2FtZSgpIHtcbiAgICB0aGlzLmdhbWVTdGF0dXMgPSAxO1xuICAgIHRoaXMuc3RhclNreS5hbmltYXRlKCk7XG4gICAgbGV0IHByb21pc2UgPSB0aGlzLmN1cnRhaW4uYW5pbWF0ZSgpO1xuICAgIHByb21pc2VcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5nYW1lU3RhdHVzID0gMjtcbiAgICAgICAgcmV0dXJuIHRoaXMuY291cnQuYW5pbWF0ZSgpO1xuICAgICAgfSlcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5nYW1lU3RhdHVzID0gMztcbiAgICAgICAgbGV0IHBsYXllcnNSZWFkeSA9IHRoaXMucGxheWVycy5yZWFkeSgpO1xuICAgICAgICBsZXQgYmFsbFJlYWR5ID0gdGhpcy5iYWxsLnJlYWR5KCk7XG4gICAgICAgIGxldCBzY29yZWJvYXJkc1JlYWR5ID0gdGhpcy5zY29yZWJvYXJkcy5yZWFkeSgpO1xuICAgICAgICBsZXQgYWxsUmVhZHlQcm9taXNlID0gUHJvbWlzZS5hbGwoW1xuICAgICAgICAgIHBsYXllcnNSZWFkeSwgYmFsbFJlYWR5LCBzY29yZWJvYXJkc1JlYWR5XG4gICAgICAgIF0pXG4gICAgICAgIHJldHVybiBhbGxSZWFkeVByb21pc2U7XG4gICAgICB9KVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmdhbWVTdGF0dXMgPSA0O1xuICAgICAgICBsZXQgZ2FtZVJlYWR5UHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xuICAgICAgICAgIHRoaXMuaW5pdEdhbWVEYXRhVXBkYXRlSW50ZXJ2YWwoKTtcbiAgICAgICAgICByZXMoKTtcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIGdhbWVSZWFkeVByb21pc2U7XG4gICAgICB9KVxuICAgIHJldHVybiBwcm9taXNlO1xuICB9XG5cbiAgaW5pdEdhbWVEYXRhVXBkYXRlSW50ZXJ2YWwoKSB7XG4gICAgdGhpcy5wbGF5ZXJzLmxvb3BVcGRhdGUoKTtcbiAgICB0aGlzLmJhbGwubG9vcFVwZGF0ZSgpO1xuICAgIHRoaXMuc2NvcmVib2FyZHMubG9vcFVwZGF0ZSgpO1xuICB9XG5cblxuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnYW1lQnVpbGRlcigpIHtcbiAgbGV0IGdhbWUgPSBib290KEVuZ2luZSwgREVGQVVMVCwge30sIGRvY3VtZW50LmJvZHkpO1xuICByZXR1cm4gZ2FtZTtcbn1cbiIsImltcG9ydCB7IHJhbmRvbVdpdGhpblJhbmdlLCBjYWxjV2F5cG9pbnRzIH0gZnJvbSAnLi9mdW5jdGlvbic7XG5pbXBvcnQgeyBnZXRDYWNoZUNhbnZhcyB9IGZyb20gJy4vdXRpbCc7XG5pbXBvcnQgeyBkcmF3Q2lyY2xlIH0gZnJvbSAnLi9zaGFwZSc7XG5pbXBvcnQgJ3BhdGgyZC1wb2x5ZmlsbCc7XG5cbmV4cG9ydCBjbGFzcyBTd2lybDhCaXQge1xuICBjb25zdHJ1Y3RvcihjdHgpIHtcbiAgICB0aGlzLmNvdW50ZXJDbG9ja3dpc2VBcnIgPSBbXG4gICAgICB7IG5hbWU6ICd0bCcsIHg6IDAsIHk6IDAgfSxcbiAgICAgIHsgbmFtZTogJ2JsJywgeDogMCwgeTogMSB9LFxuICAgICAgeyBuYW1lOiAnYnInLCB4OiAxLCB5OiAxIH0sXG4gICAgICB7IG5hbWU6ICd0cicsIHg6IDEsIHk6IDAgfVxuICAgIF1cbiAgICB0aGlzLmNsb2Nrd2lzZUFyciA9IFtcbiAgICAgIHsgbmFtZTogJ3RyJywgeDogMSwgeTogMCB9LFxuICAgICAgeyBuYW1lOiAnYnInLCB4OiAxLCB5OiAxIH0sXG4gICAgICB7IG5hbWU6ICdibCcsIHg6IDAsIHk6IDEgfSxcbiAgICAgIHsgbmFtZTogJ3RsJywgeDogMCwgeTogMCB9XG4gICAgXVxuICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgIHRoaXMuY3ZzID0gY3R4LmNhbnZhcztcbiAgICB0aGlzLmFuaW1hdGlvbkVuZFRyaWdnZXI7XG4gICAgdGhpcy5vcmRlciA9IDA7XG4gICAgdGhpcy5wYXRoID0gbmV3IFBhdGgyRCgpO1xuICAgIHRoaXMuaW5pdGlhbEltYWdlID0gZ2V0Q2FjaGVDYW52YXModGhpcy5jdHgpO1xuICAgIHRoaXMuYmFuZFdpZHRoU3RhY2sgPSAwO1xuICB9XG4gIGdldFN0YXJ0TG9jYXRpb24oY2xvY2t3aXNlLCBvcmRlciwgdG90YWxXaWR0aCwgdG90YWxIZWlnaHQpIHtcbiAgICBsZXQgZGlyZWN0aW9uQXJyID0gY2xvY2t3aXNlID8gdGhpcy5jbG9ja3dpc2VBcnIgOiB0aGlzLmNvdW50ZXJDbG9ja3dpc2VBcnI7XG5cbiAgICBsZXQgbG9jYXRpb24gPSB7XG4gICAgICBuYW1lOiBkaXJlY3Rpb25BcnJbb3JkZXJdLm5hbWUsXG4gICAgICB4OiBkaXJlY3Rpb25BcnJbb3JkZXJdLnggKiB0b3RhbFdpZHRoICsgdGhpcy5iYW5kV2lkdGhTdGFjayxcbiAgICAgIHk6IGRpcmVjdGlvbkFycltvcmRlcl0ueSAqIHRvdGFsSGVpZ2h0ICsgdGhpcy5iYW5kV2lkdGhTdGFja1xuICAgIH1cbiAgICByZXR1cm4gbG9jYXRpb247XG4gIH1cbiAgYW5pbWF0ZShjbG9ja3dpc2UgPSBmYWxzZSwgYmFuZFdpZHRoID0gMjAsIGNvbG9yID0gJ3JnYmEoMCwwLDAsMSknKSB7XG4gICAgbGV0IGFuaW1hdGlvblByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcbiAgICAgIHRoaXMuYW5pbWF0aW9uRW5kVHJpZ2dlciA9IHJlcztcbiAgICB9KVxuICAgIHRoaXMuZHJhd1N3aXJsKGNsb2Nrd2lzZSwgYmFuZFdpZHRoLCBjb2xvcik7XG5cbiAgICByZXR1cm4gYW5pbWF0aW9uUHJvbWlzZTtcbiAgfVxuXG4gIGRyYXdTd2lybChjbG9ja3dpc2UsIGJhbmRXaWR0aCwgY29sb3IpIHtcbiAgICBsZXQgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICB0aGlzLnBhdGguYWRkUGF0aCh0aGlzLmRyYVdSYW5kb21BbmdsZWRCYW5kUGF0aChcbiAgICAgICAgYmFuZFdpZHRoLFxuICAgICAgICB0aGlzLmN2cy53aWR0aCAtIDIgKiB0aGlzLmJhbmRXaWR0aFN0YWNrLFxuICAgICAgICB0aGlzLmN2cy5oZWlnaHQgLSAyICogdGhpcy5iYW5kV2lkdGhTdGFjayxcbiAgICAgICAgdGhpcy5nZXRTdGFydExvY2F0aW9uKGNsb2Nrd2lzZSwgdGhpcy5vcmRlciwgdGhpcy5jdnMud2lkdGggLSAyICogdGhpcy5iYW5kV2lkdGhTdGFjaywgdGhpcy5jdnMuaGVpZ2h0IC0gMiAqIHRoaXMuYmFuZFdpZHRoU3RhY2spLFxuICAgICAgICBjb2xvcixcbiAgICAgICAgY2xvY2t3aXNlXG4gICAgICApKVxuICAgICAgdGhpcy5jdHguZmlsbCh0aGlzLnBhdGgpO1xuICAgICAgaWYgKHRoaXMuY3ZzLndpZHRoIC0gMiAqIHRoaXMuYmFuZFdpZHRoU3RhY2sgPiAwICYmIHRoaXMuY3ZzLmhlaWdodCAtIDIgKiB0aGlzLmJhbmRXaWR0aFN0YWNrID4gMCkge1xuXG4gICAgICAgIGlmICh0aGlzLm9yZGVyIDwgMykge1xuICAgICAgICAgIHRoaXMub3JkZXIrK1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHRoaXMub3JkZXIgPSAwO1xuICAgICAgICAgIHRoaXMuYmFuZFdpZHRoU3RhY2sgKz0gYmFuZFdpZHRoO1xuXG4gICAgICAgIH1cblxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICB0aGlzLmFuaW1hdGlvbkVuZFRyaWdnZXIoKTtcbiAgICAgIH1cblxuICAgIH0sIDMwKVxuICB9XG5cbiAgZHJhV1JhbmRvbUFuZ2xlZEJhbmRQYXRoKGJhbmRXaWR0aCwgd2lkdGgsIGhlaWdodCwgcG9pbnQsIGNvbG9yLCBjbG9ja3dpc2UpIHtcbiAgICBsZXQgcGF0aCA9IG5ldyBQYXRoMkQoKTtcbiAgICBpZiAocG9pbnQubmFtZSA9PT0gJ3RsJykge1xuICAgICAgdGhpcy5kcmF3QW5nbGVkQmFuZEZyb21UTChwYXRoLCBiYW5kV2lkdGgsIHdpZHRoLCBoZWlnaHQsIHBvaW50LCBjbG9ja3dpc2UpO1xuICAgIH1cbiAgICBlbHNlIGlmIChwb2ludC5uYW1lID09PSAnYmwnKSB7XG4gICAgICB0aGlzLmRyYXdBbmdsZWRCYW5kRnJvbUJMKHBhdGgsIGJhbmRXaWR0aCwgd2lkdGgsIGhlaWdodCwgcG9pbnQsIGNsb2Nrd2lzZSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHBvaW50Lm5hbWUgPT09ICdicicpIHtcbiAgICAgIHRoaXMuZHJhd0FuZ2xlZEJhbmRGcm9tQlIocGF0aCwgYmFuZFdpZHRoLCB3aWR0aCwgaGVpZ2h0LCBwb2ludCwgY2xvY2t3aXNlKTtcbiAgICB9XG4gICAgZWxzZSBpZiAocG9pbnQubmFtZSA9PT0gJ3RyJykge1xuICAgICAgdGhpcy5kcmF3QW5nbGVkQmFuZEZyb21UUihwYXRoLCBiYW5kV2lkdGgsIHdpZHRoLCBoZWlnaHQsIHBvaW50LCBjbG9ja3dpc2UpO1xuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbiAgfVxuICBkcmF3QW5nbGVkQmFuZEZyb21UTChwYXRoLCBiYW5kV2lkdGgsIHdpZHRoLCBoZWlnaHQsIHBvaW50LCBjbG9ja3dpc2UpIHtcbiAgICBwYXRoLm1vdmVUbyhwb2ludC54LCBwb2ludC55KTtcbiAgICBpZiAoY2xvY2t3aXNlKSB7XG4gICAgICBsZXQgcmFuZG9tSGVpZ2h0ID0gcmFuZG9tV2l0aGluUmFuZ2UoMC41ICogaGVpZ2h0LCAwLjkgKiBoZWlnaHQpO1xuICAgICAgcGF0aC5saW5lVG8ocG9pbnQueCArIHdpZHRoLCBwb2ludC55KTtcbiAgICAgIHBhdGgubGluZVRvKHBvaW50LnggKyB3aWR0aCwgcG9pbnQueSArIHJhbmRvbUhlaWdodCk7XG4gICAgICBwYXRoLmxpbmVUbyhwb2ludC54ICsgd2lkdGggLSBiYW5kV2lkdGgsIHBvaW50LnkgKyByYW5kb21IZWlnaHQpO1xuICAgICAgcGF0aC5saW5lVG8ocG9pbnQueCArIHdpZHRoIC0gYmFuZFdpZHRoLCBwb2ludC55ICsgYmFuZFdpZHRoKTtcbiAgICAgIHBhdGgubGluZVRvKHBvaW50LngsIHBvaW50LnkgKyBiYW5kV2lkdGgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGxldCByYW5kb21XaWR0aCA9IHJhbmRvbVdpdGhpblJhbmdlKDAuNSAqIHdpZHRoLCAwLjkgKiB3aWR0aCk7XG4gICAgICBwYXRoLmxpbmVUbyhwb2ludC54ICsgYmFuZFdpZHRoLCBwb2ludC55KTtcbiAgICAgIHBhdGgubGluZVRvKHBvaW50LnggKyBiYW5kV2lkdGgsIHBvaW50LnkgKyBoZWlnaHQgLSBiYW5kV2lkdGgpO1xuICAgICAgcGF0aC5saW5lVG8ocG9pbnQueCArIHJhbmRvbVdpZHRoLCBwb2ludC55ICsgaGVpZ2h0IC0gYmFuZFdpZHRoKTtcbiAgICAgIHBhdGgubGluZVRvKHBvaW50LnggKyByYW5kb21XaWR0aCwgcG9pbnQueSArIGhlaWdodCk7XG4gICAgICBwYXRoLmxpbmVUbyhwb2ludC54LCBwb2ludC55ICsgaGVpZ2h0KTtcbiAgICB9XG4gIH1cbiAgZHJhd0FuZ2xlZEJhbmRGcm9tQkwocGF0aCwgYmFuZFdpZHRoLCB3aWR0aCwgaGVpZ2h0LCBwb2ludCwgY2xvY2t3aXNlKSB7XG4gICAgcGF0aC5tb3ZlVG8ocG9pbnQueCwgcG9pbnQueSk7XG4gICAgaWYgKGNsb2Nrd2lzZSkge1xuICAgICAgbGV0IHJhbmRvbVdpZHRoID0gcmFuZG9tV2l0aGluUmFuZ2UoMC41ICogd2lkdGgsIDAuOSAqIHdpZHRoKTtcbiAgICAgIHBhdGgubGluZVRvKHBvaW50LnggKyBiYW5kV2lkdGgsIHBvaW50LnkpO1xuICAgICAgcGF0aC5saW5lVG8ocG9pbnQueCArIGJhbmRXaWR0aCwgcG9pbnQueSAtIGhlaWdodCArIGJhbmRXaWR0aCk7XG4gICAgICBwYXRoLmxpbmVUbyhwb2ludC54ICsgcmFuZG9tV2lkdGgsIHBvaW50LnkgLSBoZWlnaHQgKyBiYW5kV2lkdGgpO1xuICAgICAgcGF0aC5saW5lVG8ocG9pbnQueCArIHJhbmRvbVdpZHRoLCBwb2ludC55IC0gaGVpZ2h0KTtcbiAgICAgIHBhdGgubGluZVRvKHBvaW50LngsIHBvaW50LnkgLSBoZWlnaHQpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGxldCByYW5kb21IZWlnaHQgPSByYW5kb21XaXRoaW5SYW5nZSgwLjUgKiBoZWlnaHQsIDAuOSAqIGhlaWdodCk7XG4gICAgICBwYXRoLmxpbmVUbyhwb2ludC54LCBwb2ludC55IC0gYmFuZFdpZHRoKTtcbiAgICAgIHBhdGgubGluZVRvKHBvaW50LnggKyB3aWR0aCAtIGJhbmRXaWR0aCwgcG9pbnQueSAtIGJhbmRXaWR0aCk7XG4gICAgICBwYXRoLmxpbmVUbyhwb2ludC54ICsgd2lkdGggLSBiYW5kV2lkdGgsIHBvaW50LnkgLSByYW5kb21IZWlnaHQpO1xuICAgICAgcGF0aC5saW5lVG8ocG9pbnQueCArIHdpZHRoLCBwb2ludC55IC0gcmFuZG9tSGVpZ2h0KTtcbiAgICAgIHBhdGgubGluZVRvKHBvaW50LnggKyB3aWR0aCwgcG9pbnQueSk7XG4gICAgfVxuICB9XG4gIGRyYXdBbmdsZWRCYW5kRnJvbUJSKHBhdGgsIGJhbmRXaWR0aCwgd2lkdGgsIGhlaWdodCwgcG9pbnQsIGNsb2Nrd2lzZSkge1xuICAgIHBhdGgubW92ZVRvKHBvaW50LngsIHBvaW50LnkpO1xuICAgIGlmIChjbG9ja3dpc2UpIHtcbiAgICAgIGxldCByYW5kb21IZWlnaHQgPSByYW5kb21XaXRoaW5SYW5nZSgwLjUgKiBoZWlnaHQsIDAuOSAqIGhlaWdodCk7XG4gICAgICBwYXRoLmxpbmVUbyhwb2ludC54LCBwb2ludC55IC0gYmFuZFdpZHRoKTtcbiAgICAgIHBhdGgubGluZVRvKHBvaW50LnggLSB3aWR0aCArIGJhbmRXaWR0aCwgcG9pbnQueSAtIGJhbmRXaWR0aCk7XG4gICAgICBwYXRoLmxpbmVUbyhwb2ludC54IC0gd2lkdGggKyBiYW5kV2lkdGgsIHBvaW50LnkgLSByYW5kb21IZWlnaHQpO1xuICAgICAgcGF0aC5saW5lVG8ocG9pbnQueCAtIHdpZHRoLCBwb2ludC55IC0gcmFuZG9tSGVpZ2h0KTtcbiAgICAgIHBhdGgubGluZVRvKHBvaW50LnggLSB3aWR0aCwgcG9pbnQueSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgbGV0IHJhbmRvbVdpZHRoID0gcmFuZG9tV2l0aGluUmFuZ2UoMC41ICogd2lkdGgsIDAuOSAqIHdpZHRoKTtcbiAgICAgIHBhdGgubGluZVRvKHBvaW50LnggLSBiYW5kV2lkdGgsIHBvaW50LnkpO1xuICAgICAgcGF0aC5saW5lVG8ocG9pbnQueCAtIGJhbmRXaWR0aCwgcG9pbnQueSAtIGhlaWdodCArIGJhbmRXaWR0aCk7XG4gICAgICBwYXRoLmxpbmVUbyhwb2ludC54IC0gcmFuZG9tV2lkdGgsIHBvaW50LnkgLSBoZWlnaHQgKyBiYW5kV2lkdGgpO1xuICAgICAgcGF0aC5saW5lVG8ocG9pbnQueCAtIHJhbmRvbVdpZHRoLCBwb2ludC55IC0gaGVpZ2h0KTtcbiAgICAgIHBhdGgubGluZVRvKHBvaW50LngsIHBvaW50LnkgLSBoZWlnaHQpO1xuICAgIH1cbiAgfVxuICBkcmF3QW5nbGVkQmFuZEZyb21UUihwYXRoLCBiYW5kV2lkdGgsIHdpZHRoLCBoZWlnaHQsIHBvaW50LCBjbG9ja3dpc2UpIHtcbiAgICBwYXRoLm1vdmVUbyhwb2ludC54LCBwb2ludC55KTtcbiAgICBpZiAoY2xvY2t3aXNlKSB7XG4gICAgICBsZXQgcmFuZG9tV2lkdGggPSByYW5kb21XaXRoaW5SYW5nZSgwLjUgKiB3aWR0aCwgMC45ICogd2lkdGgpO1xuICAgICAgcGF0aC5saW5lVG8ocG9pbnQueCAtIGJhbmRXaWR0aCwgcG9pbnQueSk7XG4gICAgICBwYXRoLmxpbmVUbyhwb2ludC54IC0gYmFuZFdpZHRoLCBwb2ludC55ICsgaGVpZ2h0IC0gYmFuZFdpZHRoKTtcbiAgICAgIHBhdGgubGluZVRvKHBvaW50LnggLSByYW5kb21XaWR0aCwgcG9pbnQueSArIGhlaWdodCAtIGJhbmRXaWR0aCk7XG4gICAgICBwYXRoLmxpbmVUbyhwb2ludC54IC0gcmFuZG9tV2lkdGgsIHBvaW50LnkgKyBoZWlnaHQpO1xuICAgICAgcGF0aC5saW5lVG8ocG9pbnQueCwgcG9pbnQueSArIGhlaWdodCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgbGV0IHJhbmRvbUhlaWdodCA9IHJhbmRvbVdpdGhpblJhbmdlKDAuNSAqIGhlaWdodCwgMC45ICogaGVpZ2h0KTtcbiAgICAgIHBhdGgubGluZVRvKHBvaW50LngsIHBvaW50LnkgKyBiYW5kV2lkdGgpO1xuICAgICAgcGF0aC5saW5lVG8ocG9pbnQueCAtIHdpZHRoICsgYmFuZFdpZHRoLCBwb2ludC55ICsgYmFuZFdpZHRoKTtcbiAgICAgIHBhdGgubGluZVRvKHBvaW50LnggLSB3aWR0aCArIGJhbmRXaWR0aCwgcG9pbnQueSArIHJhbmRvbUhlaWdodCk7XG4gICAgICBwYXRoLmxpbmVUbyhwb2ludC54IC0gd2lkdGgsIHBvaW50LnkgKyByYW5kb21IZWlnaHQpO1xuICAgICAgcGF0aC5saW5lVG8ocG9pbnQueCAtIHdpZHRoLCBwb2ludC55KTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFN0cm9rZUFuaW1hdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGN0eCwgdmVydGljZXMpIHtcbiAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICB0aGlzLndheXBvaW50cyA9IGNhbGNXYXlwb2ludHModmVydGljZXMpO1xuICB9XG5cbiAgYW5pbWF0ZShiYW5kV2lkdGggPSAyMCwgY29sb3IgPSAncmdiYSgyNTUsMjU1LDI1NSwxKScsIGZsaWNrZXIgPSB0cnVlLCBkYXNoID0gW10sIGdsb3dpbmcgPSAnd2hpdGUnLCBnbG93aW5nU2l6ZSA9IDQwKSB7XG4gICAgbGV0IGFuaW1hdGlvblByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcbiAgICAgIHRoaXMuYW5pbWF0aW9uRW5kVHJpZ2dlciA9IHJlcztcbiAgICAgIHRoaXMubG9vcGluZ0RyYXdTdHJva2UoYmFuZFdpZHRoLCBjb2xvciwgZmxpY2tlciwgZGFzaCwgZ2xvd2luZywgZ2xvd2luZ1NpemUsKTtcbiAgICB9KVxuXG4gICAgcmV0dXJuIGFuaW1hdGlvblByb21pc2U7XG4gIH1cblxuICBsb29waW5nRHJhd1N0cm9rZShiYW5kV2lkdGgsIGNvbG9yLCBmbGlja2VyLCBkYXNoLCBnbG93aW5nLCBnbG93aW5nU2l6ZSwgZnBzID0gNjApIHtcbiAgICBsZXQgY291bnRlciA9IDA7XG4gICAgbGV0ICR0aGlzID0gdGhpcztcbiAgICB0aGlzLmN0eC5zYXZlKCk7XG4gICAgdGhpcy5jdHgubGluZUNhcCA9ICdzcXVhcmUnXG4gICAgaWYgKGRhc2gubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5jdHguc2V0TGluZURhc2goZGFzaCk7XG4gICAgfVxuICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gY29sb3I7XG4gICAgdGhpcy5jdHgubGluZVdpZHRoID0gYmFuZFdpZHRoO1xuICAgIHRoaXMuY3R4LnNoYWRvd0NvbG9yID0gZ2xvd2luZztcbiAgICB0aGlzLmN0eC5zaGFkb3dCbHVyID0gZ2xvd2luZ1NpemU7XG4gICAgbGV0IGZsaWNrZXJSYW5nZSA9IDA7XG5cbiAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICBsZXQgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBpZiAoY291bnRlciA8ICR0aGlzLndheXBvaW50cy5sZW5ndGggLSAxKSB7XG4gICAgICAgICR0aGlzLmN0eC5tb3ZlVG8oJHRoaXMud2F5cG9pbnRzW2NvdW50ZXJdLngsICR0aGlzLndheXBvaW50c1tjb3VudGVyXS55KTtcbiAgICAgICAgJHRoaXMuY3R4LmxpbmVUbygkdGhpcy53YXlwb2ludHNbY291bnRlciArIDFdLngsICR0aGlzLndheXBvaW50c1tjb3VudGVyICsgMV0ueSk7XG4gICAgICAgIGlmIChmbGlja2VyKSB7XG4gICAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY3R4LmNhbnZhcy53aWR0aCwgdGhpcy5jdHguY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgdGhpcy5jdHguZ2xvYmFsQWxwaGEgPSByYW5kb21XaXRoaW5SYW5nZShmbGlja2VyUmFuZ2UsIDEpO1xuICAgICAgICAgIGZsaWNrZXJSYW5nZSArPSAoZnBzIC8gMTAwMDApO1xuICAgICAgICB9XG4gICAgICAgICR0aGlzLmN0eC5zdHJva2UoKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgJHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAkdGhpcy5jdHgucmVzdG9yZSgpO1xuICAgICAgICAkdGhpcy5hbmltYXRpb25FbmRUcmlnZ2VyKCk7XG4gICAgICB9XG4gICAgICBjb3VudGVyKys7XG4gICAgfSwgMTAwMCAvIGZwcylcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU3RhclNreSB7XG4gIGNvbnN0cnVjdG9yKGN0eCkge1xuICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgIHRoaXMuY3ZzID0gY3R4LmNhbnZhcztcbiAgICB0aGlzLnN0YXJzID0gW107XG4gICAgdGhpcy5pbml0KCk7XG4gIH1cbiAgaW5pdCgpIHtcbiAgICB0aGlzLmdlblN0YXJzKCk7XG5cbiAgfVxuICBnZW5TdGFycyhudW1iZXIgPSAxMDApIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bWJlcjsgaSsrKSB7XG4gICAgICBsZXQgc3RhciA9IHtcbiAgICAgICAgeDogcmFuZG9tV2l0aGluUmFuZ2UoMCwgdGhpcy5jdnMud2lkdGgpLFxuICAgICAgICB5OiByYW5kb21XaXRoaW5SYW5nZSgwLCB0aGlzLmN2cy5oZWlnaHQpLFxuICAgICAgICBjb2xvcjogYHJnYmEoMjU1LDI1NSwyNTUsJHtyYW5kb21XaXRoaW5SYW5nZSgwLjI1LCAxKX0pYCxcbiAgICAgICAgc2l6ZTogcmFuZG9tV2l0aGluUmFuZ2UoMiwgNSksXG4gICAgICAgIHR3aW5rbGU6ICgpID0+IHtcbiAgICAgICAgICBzdGFyLmNvbG9yID0gYHJnYmEoMjU1LDI1NSwyNTUsJHtyYW5kb21XaXRoaW5SYW5nZSgwLjI1LCAxKX0pYDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5zdGFycy5wdXNoKHN0YXIpO1xuICAgIH1cbiAgfVxuICByZWZyZXNoU3RhcnMoKSB7XG4gICAgdGhpcy5zdGFycy5sZW5ndGggPSAwO1xuICAgIHRoaXMuZ2VuU3RhcnMoKTtcbiAgfVxuICBhbmltYXRlKCkge1xuICAgIGxldCBkcmF3ID0gKCkgPT4ge1xuICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY3ZzLndpZHRoLCB0aGlzLmN2cy5oZWlnaHQpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnN0YXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRoaXMuc3RhcnNbaV0udHdpbmtsZSgpO1xuICAgICAgICBkcmF3Q2lyY2xlKHRoaXMuY3R4LCB0aGlzLnN0YXJzW2ldLngsIHRoaXMuc3RhcnNbaV0ueSwgdGhpcy5zdGFyc1tpXS5zaXplLCB0aGlzLnN0YXJzW2ldLmNvbG9yKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRJbnRlcnZhbChkcmF3LCA1MDApO1xuICB9XG59IiwiaW1wb3J0IHsgZGVib3VuY2UsIGlzLCBwb2ludGVyRXZlbnRUb1hZIH0gZnJvbSAnLi9mdW5jdGlvbic7XG5cblxuZXhwb3J0IGNsYXNzIENhbnZhczJERnhCYXNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgZWxlLCBjb25maWcgPSB7fSwgZGVmYXVsdENvbmZpZyA9IHt9LCB2aXJ0dWFsUGFyZW50XG4gICkge1xuICAgIGNvbmZpZyA9IGlzLm9iaihjb25maWcpID8gY29uZmlnIDoge307XG4gICAgZGVmYXVsdENvbmZpZyA9IGlzLm9iaihkZWZhdWx0Q29uZmlnKSA/IGRlZmF1bHRDb25maWcgOiB7fTtcbiAgICB0aGlzLmNvbmZpZyA9IE9iamVjdC5hc3NpZ24oZGVmYXVsdENvbmZpZywgY29uZmlnKTtcbiAgICB0aGlzLmVsZSA9IGVsZTtcbiAgICB0aGlzLmZyYW1lQ291bnQgPSAwO1xuICAgIHRoaXMubW91c2UgPSB7XG4gICAgICB4OiAwLFxuICAgICAgeTogMFxuICAgIH07XG4gICAgdGhpcy52aXJ0dWFsUGFyZW50ID0gdmlydHVhbFBhcmVudDtcbiAgICB0aGlzLmN0eCA9IG51bGw7XG4gICAgdGhpcy5mcmFtZUlzUGF1c2VkID0gZmFsc2U7XG4gICAgdGhpcy5pc0NsaWNrID0gZmFsc2U7XG4gICAgdGhpcy5sYXllcnNDb250YWluZXIgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5kaXZMYXllcnNDb250YWluZXIgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5jYW52YXNTaXplZml4ZWQgPSBmYWxzZTtcbiAgICB0aGlzLnByZXZpb3VzRnJhbWVUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgdGhpcy5pc1Jlc2l6aW5nID0gZmFsc2U7XG4gICAgdGhpcy5sYXllcnMgPSBbXTtcbiAgICB0aGlzLmRpdkxheWVycyA9IFtdO1xuICAgIHRoaXMuaXNSZXNpemluZ0NhbGxiYWNrID0gKCkgPT4geyB9O1xuICAgIHRoaXMucmVzaXplZENhbGxiYWNrID0gKCkgPT4geyB9O1xuICAgIHRoaXMuaW5pdEJhc2UoKTtcbiAgfVxuICBpbml0QmFzZSgpIHtcblxuICAgIGlmICh0aGlzLmVsZS50YWdOYW1lICE9PSAnQ0FOVkFTJykge1xuICAgICAgY29uc3QgY3ZzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICB0aGlzLmN2cyA9IGN2cztcbiAgICAgIHRoaXMubGF5ZXJzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0aGlzLmxheWVyc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdsYXllcnMtY29udGFpbmVyJyk7XG4gICAgICB0aGlzLmxheWVyc0NvbnRhaW5lci5zdHlsZS5mb250U2l6ZSA9IDA7XG4gICAgICB0aGlzLmxheWVyc0NvbnRhaW5lci5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICB0aGlzLmxheWVyc0NvbnRhaW5lci5zdHlsZS53aWR0aCA9ICcxMDAlJ1xuICAgICAgdGhpcy5sYXllcnNDb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xuICAgICAgdGhpcy5sYXllcnNDb250YWluZXIuYXBwZW5kQ2hpbGQoY3ZzKTtcbiAgICAgIHRoaXMuZGl2TGF5ZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRoaXMuZGl2TGF5ZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZGl2LWxheWVycy1jb250YWluZXInKTtcbiAgICAgIHRoaXMuZGl2TGF5ZXJDb250YWluZXIuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgdGhpcy5kaXZMYXllckNvbnRhaW5lci5zdHlsZS53aWR0aCA9ICcxMDAlJ1xuICAgICAgdGhpcy5kaXZMYXllckNvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSAnMTAwJSc7XG4gICAgICB0aGlzLnN1cnJvdW5kaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0aGlzLnN1cnJvdW5kaW5nLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgIHRoaXMuc3Vycm91bmRpbmcuc3R5bGUud2lkdGggPSAnMTAwJSdcbiAgICAgIHRoaXMuc3Vycm91bmRpbmcuc3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xuICAgICAgdGhpcy5zdXJyb3VuZGluZy5jbGFzc0xpc3QuYWRkKCdyZW5kZXItZW52X19zdXJyb3VuZGluZycpXG4gICAgICB0aGlzLnN1cnJvdW5kaW5nLmFwcGVuZENoaWxkKHRoaXMubGF5ZXJzQ29udGFpbmVyKTtcbiAgICAgIHRoaXMuc3Vycm91bmRpbmcuaW5zZXJ0QmVmb3JlKHRoaXMuZGl2TGF5ZXJDb250YWluZXIsIHRoaXMubGF5ZXJzQ29udGFpbmVyKTtcbiAgICAgIHRoaXMuZWxlLmFwcGVuZCh0aGlzLnN1cnJvdW5kaW5nKTtcbiAgICAgIHRoaXMuZWxlLmNsYXNzTGlzdC5hZGQoJ3JlbmRlci1lbnYnKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmN2cyA9IHRoaXMuZWxlO1xuICAgIH1cblxuICAgIHRoaXMuY3R4ID0gdGhpcy5jdnMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICB0aGlzLnRyaWdnZXJSZXNpemluZ01lY2hhbmlzbSgpO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgICAgIHRoaXMuaXNSZXNpemluZyA9IHRydWU7XG4gICAgICB0aGlzLmlzUmVzaXppbmdDYWxsYmFjaygpO1xuICAgIH0pO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGRlYm91bmNlKCgpID0+IHtcbiAgICAgIHRoaXMuaXNSZXNpemluZyA9IGZhbHNlO1xuICAgICAgdGhpcy50cmlnZ2VyUmVzaXppbmdNZWNoYW5pc20oKTtcbiAgICAgIHRoaXMucmVzaXplZENhbGxiYWNrKCk7XG4gICAgfSwgNTAwKSk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndmlzaWJpbGl0eWNoYW5nZScsICgpID0+IHtcbiAgICAgIGlmIChkb2N1bWVudC52aXNpYmlsaXR5U3RhdGUgIT09IFwidmlzaWJsZVwiKSB7XG4gICAgICAgIHRoaXMuZnJhbWVJc1BhdXNlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLmFkZEV2ZW50SGFuZGxlcigpO1xuXG4gICAgdGhpcy5yZWZyZXNoQmFzZUZyYW1lQ291bnRlcigpO1xuXG4gIH1cblxuICB1cGRhdGVQb3NpdGlvbk9wdGlvblNldHRpbmcoKSB7XG5cbiAgfVxuXG4gIHJlZnJlc2hCYXNlRnJhbWVDb3VudGVyKCkge1xuICAgIGxldCB0aGlzRnJhbWVUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgdGhpcy50aW1lRWxhcHNlZCA9ICh0aGlzRnJhbWVUaW1lIC0gdGhpcy5wcmV2aW91c0ZyYW1lVGltZSkgLyAxMDAwO1xuICAgIGlmICh0aGlzLmZyYW1lSXNQYXVzZWQpIHtcbiAgICAgIHRoaXMudGltZUVsYXBzZWQgPSAwO1xuICAgICAgdGhpcy5mcmFtZUlzUGF1c2VkID0gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMuZnJhbWVDb3VudCArPSAxO1xuICAgIHRoaXMucHJldmlvdXNGcmFtZVRpbWUgPSB0aGlzRnJhbWVUaW1lXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIHRoaXMucmVmcmVzaEJhc2VGcmFtZUNvdW50ZXIoKTtcbiAgICB9KVxuICB9XG5cbiAgdmlydHVhbFBhcmVudFZhbGlkYXRpb24oKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmJvZHkuY29udGFpbnModGhpcy52aXJ0dWFsUGFyZW50KSB8fCB0aGlzLnZpcnR1YWxQYXJlbnQgPT09IGRvY3VtZW50LmJvZHk7XG4gIH1cblxuICB0cmlnZ2VyUmVzaXppbmdNZWNoYW5pc20oKSB7XG4gICAgaWYgKHRoaXMuY2FudmFzU2l6ZWZpeGVkKSByZXR1cm47XG5cbiAgICBpZiAodGhpcy5lbGUudGFnTmFtZSAhPT0gJ0NBTlZBUycpIHtcbiAgICAgIGxldCBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0O1xuICAgICAgaWYgKHRoaXMudmlydHVhbFBhcmVudFZhbGlkYXRpb24oKSkge1xuICAgICAgICBjYW52YXNXaWR0aCA9IHRoaXMudmlydHVhbFBhcmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcbiAgICAgICAgY2FudmFzSGVpZ2h0ID0gdGhpcy52aXJ0dWFsUGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjYW52YXNXaWR0aCA9IHRoaXMuZWxlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICAgICAgICBjYW52YXNIZWlnaHQgPSB0aGlzLmVsZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY3ZzLndpZHRoID0gY2FudmFzV2lkdGg7XG4gICAgICB0aGlzLmN2cy5oZWlnaHQgPSBjYW52YXNIZWlnaHQ7XG5cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBsZXQgY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodDtcbiAgICAgIGlmICh0aGlzLnZpcnR1YWxQYXJlbnRWYWxpZGF0aW9uKCkpIHtcbiAgICAgICAgY2FudmFzV2lkdGggPSB0aGlzLnZpcnR1YWxQYXJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gICAgICAgIGNhbnZhc0hlaWdodCA9IHRoaXMudmlydHVhbFBhcmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgY2FudmFzV2lkdGggPSB0aGlzLmN2cy5wYXJlbnRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICAgICAgICBjYW52YXNIZWlnaHQgPSB0aGlzLmN2cy5wYXJlbnRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcbiAgICAgIH1cbiAgICAgIHRoaXMuY3ZzLndpZHRoID0gY2FudmFzV2lkdGg7XG4gICAgICB0aGlzLmN2cy5oZWlnaHQgPSBjYW52YXNIZWlnaHQ7XG5cbiAgICB9XG5cbiAgfVxuXG4gIHNldENhbnZhc1NpemUod2lkdGgsIGhlaWdodCkge1xuICAgIHRoaXMuY2FudmFzU2l6ZWZpeGVkID0gdHJ1ZTtcbiAgICB0aGlzLmN2cy53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuY3ZzLmhlaWdodCA9IGhlaWdodDtcbiAgfVxuXG4gIGJhY2tncm91bmQoY29sb3IpIHtcbiAgICB0aGlzLmN0eC5zYXZlKCk7XG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gY29sb3I7XG4gICAgdGhpcy5jdHguZmlsbFJlY3QoMCwgMCwgdGhpcy5jdnMud2lkdGgsIHRoaXMuY3ZzLmhlaWdodCk7XG4gICAgdGhpcy5jdHgucmVzdG9yZSgpO1xuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY3ZzLndpZHRoLCB0aGlzLmN2cy5oZWlnaHQpO1xuICB9XG5cbiAgYWRkRXZlbnRIYW5kbGVyKCkge1xuXG4gICAgdGhpcy5jdnMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLmlzQ2xpY2sgPSB0cnVlO1xuICAgIH0pXG4gICAgdGhpcy5jdnMuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsICgpID0+IHtcbiAgICAgIHRoaXMuaXNDbGljayA9IHRydWU7XG5cbiAgICB9KVxuXG4gICAgdGhpcy5jdnMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKGUpID0+IHtcbiAgICAgIGxldCBwb3MgPSBwb2ludGVyRXZlbnRUb1hZKGUpO1xuICAgICAgdGhpcy5tb3VzZSA9IHtcbiAgICAgICAgeDogcG9zLngsXG4gICAgICAgIHk6IHBvcy55XG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuY3ZzLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIChlKSA9PiB7XG4gICAgICBsZXQgcG9zID0gcG9pbnRlckV2ZW50VG9YWShlKTtcbiAgICAgIHRoaXMubW91c2UgPSB7XG4gICAgICAgIHg6IHBvcy54LFxuICAgICAgICB5OiBwb3MueVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBjcmVhdGVWaXJ0dWFsQ2FudmFzQmFzZUluc3RhbmNlKCkge1xuICAgIGxldCB2Y3ZzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgbGV0IHZjdnNJbnN0YW5jZSA9IG5ldyBDYW52YXMyREZ4QmFzZSh2Y3ZzLCB7fSwge30sIHRoaXMuZWxlKTtcbiAgICByZXR1cm4gdmN2c0luc3RhbmNlO1xuICB9XG5cbiAgYWRkTmV3TGF5ZXIoKSB7XG4gICAgaWYgKHRoaXMuZWxlLnRhZ05hbWUgPT09ICdDQU5WQVMnKSByZXR1cm4gbmV3IFR5cGVFcnJvcihg5paw5aKe5ZyW5bGk5pa55rOV5Y+q5pSv5o+05Lul56m6ZGl25a655Zmo5Yid5aeL5YyW55qE5riy5p+T55Kw5aKDYCk7XG4gICAgbGV0IGN2cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIGN2cy5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgdGhpcy5sYXllcnNDb250YWluZXIucHJlcGVuZChjdnMpO1xuICAgIGxldCBjdnNJbnN0YW5jZSA9IG5ldyBDYW52YXMyREZ4QmFzZShjdnMsIHt9LCB7fSwgdGhpcy5lbGUpO1xuICAgIHRoaXMubGF5ZXJzLnB1c2goY3ZzSW5zdGFuY2UpO1xuICAgIHJldHVybiBjdnNJbnN0YW5jZTtcbiAgfVxuXG4gIGFkZERpdkxheWVyKGlkLCBjbGFzc05hbWUpIHtcbiAgICBpZiAodGhpcy5lbGUudGFnTmFtZSA9PT0gJ0NBTlZBUycpIHJldHVybiBuZXcgVHlwZUVycm9yKGDmlrDlop7lnJblsaTmlrnms5Xlj6rmlK/mj7Tku6XnqbpkaXblrrnlmajliJ3lp4vljJbnmoTmuLLmn5PnkrDlooNgKTtcbiAgICBsZXQgZGl2TGF5ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpZiAoISFjbGFzc05hbWUpIHtcbiAgICAgIGRpdkxheWVyLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICB9XG4gICAgaWYgKCEhaWQpIHtcbiAgICAgIGRpdkxheWVyLmlkID0gaWQ7XG4gICAgfVxuICAgIGRpdkxheWVyLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICBkaXZMYXllci5zdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgICBkaXZMYXllci5zdHlsZS5oZWlnaHQgPSAnMTAwJSc7XG4gICAgdGhpcy5kaXZMYXllckNvbnRhaW5lci5wcmVwZW5kKGRpdkxheWVyKTtcbiAgICB0aGlzLmRpdkxheWVycy5wdXNoKGRpdkxheWVyKTtcbiAgICByZXR1cm4gZGl2TGF5ZXJcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYm9vdChjdG9yLCBkZWZhdWx0Q29uZmlnLCBjb25maWcsIHRhcmdldEVsZSwgdmlydHVhbFBhcmVudCkge1xuICBsZXQgY3ZzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpO1xuICBjdnMgPSBjdnMgPyBjdnMgOiBkb2N1bWVudC5ib2R5O1xuICBsZXQgZWxlID0gdGFyZ2V0RWxlID8gdGFyZ2V0RWxlIDogY3ZzO1xuICBsZXQgdHJpZ2dlcjtcbiAgbGV0IGJvb3RQcm9taXNlID0gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XG4gICAgdHJpZ2dlciA9ICgpID0+IHtcbiAgICAgIGxldCBpbnN0YW5jZSA9IG5ldyBjdG9yKGVsZSwgY29uZmlnLCBkZWZhdWx0Q29uZmlnLCB2aXJ0dWFsUGFyZW50KTtcbiAgICAgIHJlcyhpbnN0YW5jZSk7XG4gICAgfTtcbiAgfSk7XG5cbiAgbGV0IGNvbnRyb2xsZXIgPSB7XG4gICAgcHJvbWlzZTogYm9vdFByb21pc2UsXG4gICAgdHJpZ2dlcjogdHJpZ2dlcixcbiAgfVxuXG4gIHJldHVybiBjb250cm9sbGVyO1xufSIsImV4cG9ydCBmdW5jdGlvbiAkKHNlbGVjdG9yKSB7XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZShzZWxlY3Rvciwgc3RhdHVzKSB7XG4gIGxldCBzdHlsZVN0ciA9IHN0YXR1cyA/ICdibG9jaycgOiAnbm9uZSdcbiAgJChzZWxlY3Rvcikuc2V0QXR0cmlidXRlKCdzdHlsZScsIGBkaXNwbGF5OiR7c3R5bGVTdHJ9YCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVDbGFzcyhzZWxlY3RvciwgY2xhc3NuYW1lLCBzdGF0dXMpIHtcbiAgbGV0IGFjdGlvbiA9IHN0YXR1cyA/ICdhZGQnIDogJ3JlbW92ZSc7XG4gICQoc2VsZWN0b3IpLmNsYXNzTGlzdFthY3Rpb25dKGNsYXNzbmFtZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbWl0KGV2ZW50TmFtZSkge1xuICBsZXQgc29tZUV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0V2ZW50Jyk7XG4gIHNvbWVFdmVudC5pbml0RXZlbnQoZXZlbnROYW1lLCB0cnVlLCB0cnVlKTtcbiAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChzb21lRXZlbnQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyZW50cyhub2RlLCBzZWxlY3Rvcikge1xuICBsZXQgY3VycmVudCA9IG5vZGUsXG4gICAgbGlzdCA9IFtdO1xuICB3aGlsZSAoY3VycmVudC5wYXJlbnROb2RlICE9IG51bGwgJiYgY3VycmVudC5wYXJlbnROb2RlICE9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICAgIGxpc3QucHVzaChjdXJyZW50LnBhcmVudE5vZGUpO1xuICAgIGN1cnJlbnQgPSBjdXJyZW50LnBhcmVudE5vZGU7XG4gIH1cbiAgcmV0dXJuIGxpc3QuZmlsdGVyKChvLCBpKSA9PiB7XG4gICAgcmV0dXJuIG8ubWF0Y2hlcyhzZWxlY3RvcilcbiAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZhZGVPdXQoZWxlLCBkdXJhdGlvbiwgY2IgPSAoKSA9PiB7IGVsZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyB9KSB7XG4gIHZhciBmYWRlVGFyZ2V0ID0gZWxlO1xuICB2YXIgZmFkZUVmZmVjdCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICBpZiAoIWZhZGVUYXJnZXQuc3R5bGUub3BhY2l0eSkge1xuICAgICAgZmFkZVRhcmdldC5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICB9XG4gICAgaWYgKGZhZGVUYXJnZXQuc3R5bGUub3BhY2l0eSA+IDApIHtcbiAgICAgIGZhZGVUYXJnZXQuc3R5bGUub3BhY2l0eSAtPSAxIC8gZHVyYXRpb247XG4gICAgfSBlbHNlIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwoZmFkZUVmZmVjdCk7XG4gICAgICBjYigpXG4gICAgICBlbGUuc3R5bGUub3BhY2l0eSA9ICcnO1xuXG4gICAgfVxuICB9LCAxIC8gZHVyYXRpb24pO1xufSIsImNvbnN0IE1lcnNlbm5lVHdpc3RlciA9IHJlcXVpcmUoJ21lcnNlbm5lLXR3aXN0ZXInKTtcbmNvbnN0IE1UID0gbmV3IE1lcnNlbm5lVHdpc3RlcigpO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBkZWJvdW5jZShmdW5jLCBkZWxheSkge1xuICBsZXQgdGltZXIgPSBudWxsO1xuICBjb25zdCAkdGhpcyA9IHRoaXM7XG4gIHJldHVybiAoKSA9PiB7XG4gICAgY29uc3QgY29udGV4dCA9ICR0aGlzO1xuICAgIGNvbnN0IGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICB9LCBkZWxheSk7XG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBpcyA9IHtcbiAgYXJyOiBhID0+IEFycmF5LmlzQXJyYXkoYSksXG4gIG9iajogYSA9PiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYSkuaW5kZXhPZignT2JqZWN0JykgPiAtMSxcbiAgcHRoOiBhID0+IGlzLm9iaihhKSAmJiBhLmhhc093blByb3BlcnR5KCd0b3RhbExlbmd0aCcpLFxuICBzdmc6IGEgPT4gYSBpbnN0YW5jZW9mIFNWR0VsZW1lbnQsXG4gIGlucDogYSA9PiBhIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCxcbiAgZG9tOiBhID0+IGEubm9kZVR5cGUgfHwgaXMuc3ZnKGEpLFxuICBzdHI6IGEgPT4gdHlwZW9mIGEgPT09ICdzdHJpbmcnLFxuICBmbmM6IGEgPT4gdHlwZW9mIGEgPT09ICdmdW5jdGlvbicsXG4gIHVuZDogYSA9PiB0eXBlb2YgYSA9PT0gJ3VuZGVmaW5lZCcsXG4gIG5pbDogYSA9PiBpcy51bmQoYSkgfHwgYSA9PT0gbnVsbCxcbiAgaGV4OiBhID0+IC8oXiNbMC05QS1GXXs2fSQpfCheI1swLTlBLUZdezN9JCkvaS50ZXN0KGEpLFxuICByZ2JhOiBhID0+IC9ecmdiYS8udGVzdChhKSxcbiAgcmdiOiBhID0+IC9ecmdiLy50ZXN0KGEpLFxuICBoc2w6IGEgPT4gL15oc2wvLnRlc3QoYSksXG4gIGNvbDogYSA9PiAoaXMuaGV4KGEpIHx8IGlzLnJnYihhKSB8fCBpcy5oc2woYSkpLFxuICBrZXk6IGEgPT4gIWRlZmF1bHRJbnN0YW5jZVNldHRpbmdzLmhhc093blByb3BlcnR5KGEpICYmICFkZWZhdWx0VHdlZW5TZXR0aW5ncy5oYXNPd25Qcm9wZXJ0eShhKSAmJiBhICE9PSAndGFyZ2V0cycgJiYgYSAhPT0gJ2tleWZyYW1lcycsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByYW5kb21XaXRoaW5SYW5nZShtaW4sIG1heCwgc2VlZCkge1xuICByZXR1cm4gTVQucmFuZG9tKHNlZWQpICogKG1heCAtIG1pbikgKyBtaW47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXN0YW5jZSh4MCwgeTAsIHgxLCB5MSkge1xuICByZXR1cm4gTWF0aC5zcXJ0KCh4MSAtIHgwKSAqICh4MSAtIHgwKSArICh5MSAtIHkwKSAqICh5MSAtIHkwKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWdyZWVUb1JhZGlhbihkZWdyZWUpIHtcbiAgcmV0dXJuIChkZWdyZWUgLyAxODApICogTWF0aC5QSTtcbn1cblxuLyoqXG4gKiDntbHkuIAgdG91Y2hFdmVudC9tb3VzZUV2ZW50IOeahOS6i+S7tuinuOeZvOW6p+aomeWPluW+l+aWueW8j1xuICogQGV4cG9ydFxuICogQHBhcmFtIHtvYmplY3R9ICDlgrPlhaXnmoRldmVudCDnianku7ZcbiAqIEByZXR1cm5zIHtPYmplY3R9IOS4gOWAi+eJqeS7tiwg5YWn5ZCr5LqL5Lu26Ke455m85bqn5qiZ55qEWC9ZIOW6p+aomeWAvFxuICovXG5leHBvcnQgZnVuY3Rpb24gcG9pbnRlckV2ZW50VG9YWShlKSB7XG4gIHZhciBvdXQgPSB7IHg6IDAsIHk6IDAgfTtcbiAgaWYgKGUudHlwZSA9PT0gJ3RvdWNoc3RhcnQnIHx8IGUudHlwZSA9PT0gJ3RvdWNobW92ZScgfHwgZS50eXBlID09PSAndG91Y2hlbmQnIHx8IGUudHlwZSA9PT0gJ3RvdWNoY2FuY2VsJykge1xuICAgIHZhciB0b3VjaCA9IGUub3JpZ2luYWxFdmVudC50b3VjaGVzWzBdIHx8IGUub3JpZ2luYWxFdmVudC5jaGFuZ2VkVG91Y2hlc1swXTtcbiAgICBvdXQueCA9IHRvdWNoLnBhZ2VYO1xuICAgIG91dC55ID0gdG91Y2gucGFnZVk7XG4gIH0gZWxzZSBpZiAoZS50eXBlID09PSAnbW91c2Vkb3duJyB8fCBlLnR5cGUgPT09ICdtb3VzZXVwJyB8fCBlLnR5cGUgPT09ICdtb3VzZW1vdmUnIHx8IGUudHlwZSA9PT0gJ21vdXNlb3ZlcicgfHwgZS50eXBlID09PSAnbW91c2VvdXQnIHx8IGUudHlwZSA9PT0gJ21vdXNlZW50ZXInIHx8IGUudHlwZSA9PT0gJ21vdXNlbGVhdmUnKSB7XG4gICAgb3V0LnggPSBlLnBhZ2VYO1xuICAgIG91dC55ID0gZS5wYWdlWTtcbiAgfVxuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIOebtOaOpeWRvOWPq2hhc093blByb3BlcnR555qE5Y6f5Z6L5pa55rOVKOeUqOWcqGhhc093blByb3BlcnR56KKr5pS55YuV6YGO55qE54uA5rOBKVxuICpcbiAqIEBleHBvcnRcbiAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXQg55uu5qiZ54mp5Lu2XG4gKiBAcGFyYW0ge3N0cmluZ30gcHJvcCDnm67mqJlwcm9wXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0g5pivL+WQplxuICovXG5leHBvcnQgZnVuY3Rpb24gdGFyZ2V0SGFzUHJvcCh0YXJnZXQsIHByb3ApIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0YXJnZXQsIHByb3ApO1xufVxuXG4vKipcbiAqIOeiuuiqjeS4gOWAi+iuiuaVuC/lgLzmmK/lkKbngrrnqbooMOS4jeeul+epuuWAvClcbiAqIEBleHBvcnRcbiAqIEBwYXJhbSB7Kn0gdmFsXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0g5pivL+WQplxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNFbXB0eSh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdudW1iZXInID8gaXNOYU4odmFsKSA6ICF2YWw7XG59XG5cblxuZnVuY3Rpb24gcmdiVG9SZ2JhKHJnYlZhbHVlKSB7XG4gIGNvbnN0IHJnYiA9IC9yZ2JcXCgoXFxkKyxcXHMqW1xcZF0rLFxccypbXFxkXSspXFwpL2cuZXhlYyhyZ2JWYWx1ZSk7XG4gIHJldHVybiByZ2IgPyBgcmdiYSgke3JnYlsxXX0sMSlgIDogcmdiVmFsdWU7XG59XG5cbmZ1bmN0aW9uIGhleFRvUmdiYShoZXhWYWx1ZSkge1xuICBjb25zdCByZ3ggPSAvXiM/KFthLWZcXGRdKShbYS1mXFxkXSkoW2EtZlxcZF0pJC9pO1xuICBjb25zdCBoZXggPSBoZXhWYWx1ZS5yZXBsYWNlKHJneCwgKG0sIHIsIGcsIGIpID0+IHIgKyByICsgZyArIGcgKyBiICsgYik7XG4gIGNvbnN0IHJnYiA9IC9eIz8oW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkkL2kuZXhlYyhoZXgpO1xuICBjb25zdCByID0gcGFyc2VJbnQocmdiWzFdLCAxNik7XG4gIGNvbnN0IGcgPSBwYXJzZUludChyZ2JbMl0sIDE2KTtcbiAgY29uc3QgYiA9IHBhcnNlSW50KHJnYlszXSwgMTYpO1xuICByZXR1cm4gYHJnYmEoJHtyfSwke2d9LCR7Yn0sMSlgO1xufVxuXG5mdW5jdGlvbiBoc2xUb1JnYmEoaHNsVmFsdWUpIHtcbiAgY29uc3QgaHNsID0gL2hzbFxcKChcXGQrKSxcXHMqKFtcXGQuXSspJSxcXHMqKFtcXGQuXSspJVxcKS9nLmV4ZWMoaHNsVmFsdWUpIHx8IC9oc2xhXFwoKFxcZCspLFxccyooW1xcZC5dKyklLFxccyooW1xcZC5dKyklLFxccyooW1xcZC5dKylcXCkvZy5leGVjKGhzbFZhbHVlKTtcbiAgY29uc3QgaCA9IHBhcnNlSW50KGhzbFsxXSwgMTApIC8gMzYwO1xuICBjb25zdCBzID0gcGFyc2VJbnQoaHNsWzJdLCAxMCkgLyAxMDA7XG4gIGNvbnN0IGwgPSBwYXJzZUludChoc2xbM10sIDEwKSAvIDEwMDtcbiAgY29uc3QgYSA9IGhzbFs0XSB8fCAxO1xuICBmdW5jdGlvbiBodWUycmdiKHAsIHEsIHQpIHtcbiAgICBpZiAodCA8IDApIHQgKz0gMTtcbiAgICBpZiAodCA+IDEpIHQgLT0gMTtcbiAgICBpZiAodCA8IDEgLyA2KSByZXR1cm4gcCArIChxIC0gcCkgKiA2ICogdDtcbiAgICBpZiAodCA8IDEgLyAyKSByZXR1cm4gcTtcbiAgICBpZiAodCA8IDIgLyAzKSByZXR1cm4gcCArIChxIC0gcCkgKiAoMiAvIDMgLSB0KSAqIDY7XG4gICAgcmV0dXJuIHA7XG4gIH1cbiAgbGV0IHIsIGcsIGI7XG4gIGlmIChzID09IDApIHtcbiAgICByID0gZyA9IGIgPSBsO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHEgPSBsIDwgMC41ID8gbCAqICgxICsgcykgOiBsICsgcyAtIGwgKiBzO1xuICAgIGNvbnN0IHAgPSAyICogbCAtIHE7XG4gICAgciA9IGh1ZTJyZ2IocCwgcSwgaCArIDEgLyAzKTtcbiAgICBnID0gaHVlMnJnYihwLCBxLCBoKTtcbiAgICBiID0gaHVlMnJnYihwLCBxLCBoIC0gMSAvIDMpO1xuICB9XG4gIHJldHVybiBgcmdiYSgke3IgKiAyNTV9LCR7ZyAqIDI1NX0sJHtiICogMjU1fSwke2F9KWA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb2xvclRvUmdiYSh2YWwpIHtcbiAgaWYgKGlzLnJnYih2YWwpKSByZXR1cm4gcmdiVG9SZ2JhKHZhbCk7XG4gIGlmIChpcy5oZXgodmFsKSkgcmV0dXJuIGhleFRvUmdiYSh2YWwpO1xuICBpZiAoaXMuaHNsKHZhbCkpIHJldHVybiBoc2xUb1JnYmEodmFsKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENoYW5uZWxWYWx1ZXNGcm9tUmdiYShyZ2JhKSB7XG4gIHJldHVybiByZ2JhLnJlcGxhY2UoL14ocmdifHJnYmEpXFwoLywgJycpLnJlcGxhY2UoL1xcKSQvLCAnJykucmVwbGFjZSgvXFxzL2csICcnKS5zcGxpdCgnLCcpLm1hcCh4ID0+IHBhcnNlSW50KHgpKTtcbn1cblxuXG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjV2F5cG9pbnRzKHZlcnRpY2VzLCBpbnRlcnBvbGF0ZSA9IDMwKSB7XG4gIHZhciB3YXlwb2ludHMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCB2ZXJ0aWNlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBwdDAgPSB2ZXJ0aWNlc1tpIC0gMV07XG4gICAgdmFyIHB0MSA9IHZlcnRpY2VzW2ldO1xuICAgIHZhciBkeCA9IHB0MS54IC0gcHQwLng7XG4gICAgdmFyIGR5ID0gcHQxLnkgLSBwdDAueTtcbiAgICBmb3IgKHZhciBqID0gMDsgaiA8PSBpbnRlcnBvbGF0ZTsgaisrKSB7XG4gICAgICB2YXIgeCA9IHB0MC54ICsgZHggKiBqIC8gaW50ZXJwb2xhdGU7XG4gICAgICB2YXIgeSA9IHB0MC55ICsgZHkgKiBqIC8gaW50ZXJwb2xhdGU7XG4gICAgICB3YXlwb2ludHMucHVzaCh7XG4gICAgICAgIHg6IHgsXG4gICAgICAgIHk6IHlcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG5cbiAgcmV0dXJuICh3YXlwb2ludHMpO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGRyYXdTcXVhcmUoY3R4LCB4LCB5LCB3aWR0aCwgY29sb3IsIGFscGhhKSB7XG4gIGN0eC5zYXZlKCk7XG4gIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgY3R4Lmdsb2JhbEFscGhhID0gYWxwaGE7XG4gIGN0eC5maWxsUmVjdCh4IC0gd2lkdGggLyAyLCB5IC0gd2lkdGggLyAyLCB3aWR0aCwgd2lkdGgpO1xuICBjdHgucmVzdG9yZSgpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGRyYXdSZWN0KGN0eCwgeCwgeSwgd2lkdGgsIGhlaWdodCwgY29sb3IsIGFscGhhKSB7XG4gIGN0eC5zYXZlKCk7XG4gIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgY3R4Lmdsb2JhbEFscGhhID0gYWxwaGE7XG4gIGN0eC5maWxsUmVjdCh4IC0gd2lkdGggLyAyLCB5IC0gaGVpZ2h0IC8gMiwgd2lkdGgsIGhlaWdodCk7XG4gIGN0eC5yZXN0b3JlKCk7XG59XG5leHBvcnQgZnVuY3Rpb24gZHJhd0NpcmNsZShjdHgsIHgsIHksIHdpZHRoLCBjb2xvciwgYWxwaGEgPSAxKSB7XG4gIGN0eC5zYXZlKClcbiAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICBjdHguZ2xvYmFsQWxwaGEgPSBhbHBoYTtcbiAgY3R4LmJlZ2luUGF0aCgpO1xuICBjdHguYXJjKHgsIHksIHdpZHRoIC8gMiwgMCwgTWF0aC5QSSAqIDIsIHRydWUpO1xuICBjdHguY2xvc2VQYXRoKCk7XG4gIGN0eC5maWxsKCk7XG4gIGN0eC5yZXN0b3JlKCk7XG59XG5leHBvcnQgZnVuY3Rpb24gZHJhd0xpbmUoY3R4LCB4MCwgeTAsIHgxLCB5MSwgc3Ryb2tlQ29sb3IsIHN0cm9rZVdpZHRoKSB7XG4gIGN0eC5zYXZlKCk7XG4gIGN0eC5zdHJva2VTdHlsZSA9IHN0cm9rZUNvbG9yO1xuICBjdHgubGluZVdpZHRoID0gc3Ryb2tlV2lkdGg7XG4gIGN0eC5iZWdpblBhdGgoKTtcbiAgY3R4Lm1vdmVUbyh4MCwgeTApO1xuICBjdHgubGluZVRvKHgxLCB5MSk7XG4gIGN0eC5jbG9zZVBhdGgoKTtcbiAgY3R4LnN0cm9rZSgpO1xuICBjdHgucmVzdG9yZSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZHJhd1RleHQoY3R4LCB0ZXh0Q29udGVudCA9ICd0ZXh0JywgeCwgeSwgY29sb3IgPSAnIzAwMCcsIGZvbnRTaXplID0gMTIsIGZvbnQgPSAnQXJpYWwnKSB7XG4gIGN0eC5zYXZlKCk7XG4gIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgY3R4LmZvbnQgPSBgJHtmb250U2l6ZX1weCAke2ZvbnR9YDtcbiAgY3R4LmZpbGxUZXh0KHRleHRDb250ZW50LCB4LCB5KTtcbiAgY3R4LnJlc3RvcmUoKTtcbn1cblxuIiwiZXhwb3J0IGZ1bmN0aW9uIGdldFNjcmVlbnNob3RJbWFnZSh0YXJnZXRDdnMpIHtcbiAgbGV0IHVybCA9IHRhcmdldEN2cy50b0RhdGFVUkwoKTtcbiAgbGV0IGltYWdlID0gbmV3IEltYWdlKHRhcmdldEN2cy53aWR0aCwgdGFyZ2V0Q3ZzLmhlaWdodCk7XG4gIGltYWdlLnNyYyA9IHVybDtcbiAgcmV0dXJuIGltYWdlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2FjaGVDYW52YXModGFyZ2V0Q3R4KSB7XG4gIGxldCBjYWNoZUN2cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICBsZXQgY2FjaGVDdHggPSBjYWNoZUN2cy5nZXRDb250ZXh0KCcyZCcpO1xuICBsZXQgc291cmNlV2lkdGggPSB0YXJnZXRDdHguY2FudmFzLndpZHRoO1xuICBsZXQgc291cmNlSGVpZ2h0ID0gdGFyZ2V0Q3R4LmNhbnZhcy5oZWlnaHQ7XG4gIGNhY2hlQ3ZzLndpZHRoID0gc291cmNlV2lkdGg7XG4gIGNhY2hlQ3ZzLmhlaWdodCA9IHNvdXJjZUhlaWdodDtcblxuICBsZXQgY2FjaGVEYXRhID0gdGFyZ2V0Q3R4LmdldEltYWdlRGF0YSgwLCAwLCBzb3VyY2VXaWR0aCwgc291cmNlSGVpZ2h0KTtcbiAgY2FjaGVDdHgucHV0SW1hZ2VEYXRhKGNhY2hlRGF0YSwgMCwgMCk7XG4gIHJldHVybiBjYWNoZUN2cztcbn0iLCJpbXBvcnQgeyBDYW52YXMyREZ4QmFzZSwgYm9vdCB9IGZyb20gJy4vbGliL2Jhc2UnO1xuaW1wb3J0IHsgZHJhd0NpcmNsZSB9IGZyb20gJy4vbGliL3NoYXBlJztcbmltcG9ydCB7ICQgfSBmcm9tICcuL2xpYi9kb20nXG5pbXBvcnQgeyB0b2dnbGUgfSBmcm9tICcuL2xpYi9kb20nO1xuXG5jb25zdCBCQUxMX0FOSU1BVElPTl9ERUZBVUxUID0ge1xuICBhZnRlckltYWdlOiBmYWxzZSxcbiAgcmFkaXVzOiAyNSxcbiAgY29sb3I6ICdibHVlJyxcbiAgc3BlZWRYOiAxMDAwLFxuICBzcGVlZFk6IDEwMDAsXG4gIGFjY2VsZXJhdGlvblg6IDAsXG4gIGFjY2VsZXJhdGlvblk6IDAsXG4gIGZyaWN0aW9uWDogMSxcbiAgZnJpY3Rpb25ZOiAwLjk5OTdcbn1cblxuY29uc3QgU1BPVFNfQU5JTUFUSU9OX0RFRkFVTFQgPSB7XG4gIG1pblNpemU6IDEwLFxuICBtYXhTaXplOiAyMCxcbiAgcGVyaW9kOiAzMDAsXG4gIHN0ZXA6IDEwLFxuICBib3R0b21MYXllcjogbnVsbCxcbiAgY29sb3I6ICdyZ2JhKDAsMCwwLDAuMDMpJyxcbiAgY29sOiAxNSxcbiAgcm93OiAxNVxufVxuXG5jbGFzcyBCYXNpY1JlZmVsZWN0aW9uIGV4dGVuZHMgQ2FudmFzMkRGeEJhc2Uge1xuICBjb25zdHJ1Y3RvcihjYW52YXMsIGRlZmF1bHRDb25maWcsIGNvbmZpZywgdmlydHVhbFBhcmVudCkge1xuICAgIHN1cGVyKGNhbnZhcywgZGVmYXVsdENvbmZpZywgY29uZmlnLCB2aXJ0dWFsUGFyZW50KTtcbiAgICB0aGlzLnN3aXRjaFN0YXR1cyA9IGZhbHNlO1xuICAgIHRoaXMuaW5pdCgpO1xuICB9XG4gIGluaXQoKSB7XG4gICAgdGhpcy5zd2l0Y2hTdGF0dXMgPSB0cnVlO1xuICAgIHRoaXMuaW5pdEJhbGwoKTtcbiAgICB0aGlzLmFuaW1hdGVCYWxsKCk7XG4gIH1cblxuICBzd2l0Y2hlcihzdGF0dXMpIHtcbiAgICB0aGlzLnN3aXRjaFN0YXR1cyA9IHN0YXR1cztcbiAgfVxuXG4gIGluaXRCYWxsKCkge1xuICAgIGxldCAkdGhpcyA9IHRoaXM7XG4gICAgdGhpcy5iYWxsID0ge1xuICAgICAgYWZ0ZXJJbWFnZTogJHRoaXMuY29uZmlnLmFmdGVySW1hZ2UsXG4gICAgICBjb2xvcjogJHRoaXMuY29uZmlnLmNvbG9yLFxuICAgICAgcmFkaXVzOiAkdGhpcy5jb25maWcucmFkaXVzLFxuICAgICAgbG9jYXRpb246IHtcbiAgICAgICAgeDogJHRoaXMuY3ZzLndpZHRoIC8gMixcbiAgICAgICAgeTogJHRoaXMuY3ZzLmhlaWdodCAvIDIsXG4gICAgICB9LFxuICAgICAgc3BlZWQ6IHtcbiAgICAgICAgeDogJHRoaXMuY29uZmlnLnNwZWVkWCxcbiAgICAgICAgeTogJHRoaXMuY29uZmlnLnNwZWVkWVxuICAgICAgfSxcbiAgICAgIGFjY2VsZXJhdGlvbjoge1xuICAgICAgICB4OiAkdGhpcy5jb25maWcuYWNjZWxlcmF0aW9uWCxcbiAgICAgICAgeTogJHRoaXMuY29uZmlnLmFjY2VsZXJhdGlvbllcbiAgICAgIH0sXG4gICAgICBmcmljdGlvbjoge1xuICAgICAgICB4OiAkdGhpcy5jb25maWcuZnJpY3Rpb25YLFxuICAgICAgICB5OiAkdGhpcy5jb25maWcuZnJpY3Rpb25ZXG4gICAgICB9XG4gICAgfVxuICB9XG4gIGRyYXdCYWxsKCkge1xuICAgIGRyYXdDaXJjbGUodGhpcy5jdHgsIHRoaXMuYmFsbC5sb2NhdGlvbi54LCB0aGlzLmJhbGwubG9jYXRpb24ueSwgdGhpcy5iYWxsLnJhZGl1cyAqIDIsIHRoaXMuYmFsbC5jb2xvcik7XG4gIH1cbiAgYW5pbWF0ZUJhbGwoKSB7XG4gICAgaWYgKHRoaXMuc3dpdGNoU3RhdHVzID09IGZhbHNlKSByZXR1cm47XG4gICAgbGV0ICR0aGlzID0gdGhpcztcbiAgICBpZiAoJHRoaXMuYmFsbC5hZnRlckltYWdlID09PSB0cnVlKSB7XG4gICAgICAkdGhpcy5iYWNrZ3JvdW5kKCdyZ2IoMjU1LCAxNzcsIDQzLDAuMSknKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAkdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsICR0aGlzLmN2cy53aWR0aCwgJHRoaXMuY3ZzLmhlaWdodCk7XG4gICAgfVxuICAgICR0aGlzLmN0eC5kcmF3SW1hZ2UoJHRoaXMuY29uZmlnLmJvdHRvbUxheWVyLCAwLCAwKTtcbiAgICAkdGhpcy5kcmF3QmFsbCgpO1xuICAgICR0aGlzLnJlZnJlc2hMb2NhdGlvbigpO1xuICAgICR0aGlzLnJlZnJlc2hTcGVlZCgpO1xuICAgICR0aGlzLmNoZWNrQm91bmRhcnkoKTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoXG4gICAgICAkdGhpcy5hbmltYXRlQmFsbC5iaW5kKCR0aGlzKVxuICAgICk7XG4gIH1cblxuICByZWZyZXNoU3BlZWQoKSB7XG4gICAgbGV0IGR0ID0gdGhpcy50aW1lRWxhcHNlZDtcbiAgICB0aGlzLmJhbGwuc3BlZWQueCA9IHRoaXMuYmFsbC5zcGVlZC54ICogdGhpcy5iYWxsLmZyaWN0aW9uLnggKyB0aGlzLmJhbGwuYWNjZWxlcmF0aW9uLnggKiBkdDtcbiAgICB0aGlzLmJhbGwuc3BlZWQueSA9IHRoaXMuYmFsbC5zcGVlZC55ICogdGhpcy5iYWxsLmZyaWN0aW9uLnkgKyB0aGlzLmJhbGwuYWNjZWxlcmF0aW9uLnkgKiBkdDtcbiAgfVxuXG4gIHJlZnJlc2hMb2NhdGlvbigpIHtcbiAgICBsZXQgZHQgPSB0aGlzLnRpbWVFbGFwc2VkO1xuICAgIHRoaXMuYmFsbC5sb2NhdGlvbi54ICs9IHRoaXMuYmFsbC5zcGVlZC54ICogZHQ7XG4gICAgdGhpcy5iYWxsLmxvY2F0aW9uLnkgKz0gdGhpcy5iYWxsLnNwZWVkLnkgKiBkdDtcbiAgfVxuICBjaGVja0JvdW5kYXJ5KCkge1xuICAgIGxldCBiYWxsID0gdGhpcy5iYWxsO1xuICAgIGxldCBjYW52YXMgPSB0aGlzLmN2cztcbiAgICAvLyDnlbbnkIPmraPlnKjlupXnq69cbiAgICBpZiAoYmFsbC5sb2NhdGlvbi55ICsgYmFsbC5yYWRpdXMgPiBjYW52YXMuaGVpZ2h0KSB7XG4gICAgICAvLyDkuJTpgJ/luqbngrrmraPlgLzvvIjmnJ3kuIvvvIlcbiAgICAgIGlmIChiYWxsLnNwZWVkLnkgPiAwKSB7XG4gICAgICAgIGJhbGwuc3BlZWQueSA9IC1iYWxsLnNwZWVkLnk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIOeVtueQg+ato+WcqOmgguerr1xuICAgIGVsc2UgaWYgKGJhbGwubG9jYXRpb24ueSAtIGJhbGwucmFkaXVzIDwgMCkge1xuICAgICAgLy8g5LiU6YCf5bqm54K66LKg5YC877yI5pyd5LiK77yJXG4gICAgICBpZiAoYmFsbC5zcGVlZC55IDwgMCkge1xuICAgICAgICBiYWxsLnNwZWVkLnkgPSAtYmFsbC5zcGVlZC55O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIOeVtueQg+ato+WcqOWPs+err1xuICAgIGlmIChiYWxsLmxvY2F0aW9uLnggKyBiYWxsLnJhZGl1cyA+IGNhbnZhcy53aWR0aCkge1xuICAgICAgaWYgKGJhbGwuc3BlZWQueCA+IDApIHtcbiAgICAgICAgYmFsbC5zcGVlZC54ID0gLWJhbGwuc3BlZWQueDtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8g55W255CD5q2j5Zyo5bem56uvXG4gICAgZWxzZSBpZiAoYmFsbC5sb2NhdGlvbi54IC0gYmFsbC5yYWRpdXMgPCAwKSB7XG4gICAgICBpZiAoYmFsbC5zcGVlZC54IDwgMCkge1xuICAgICAgICBiYWxsLnNwZWVkLnggPSAtYmFsbC5zcGVlZC54O1xuICAgICAgfVxuICAgIH1cblxuICB9XG59XG5cbmNsYXNzIFNwb3RzQnVtcGluZyBleHRlbmRzIENhbnZhczJERnhCYXNlIHtcbiAgY29uc3RydWN0b3IoY2FudmFzLCBkZWZhdWx0Q29uZmlnLCBjb25maWcsIHZpcnR1YWxQYXJlbnQpIHtcbiAgICBzdXBlcihjYW52YXMsIGRlZmF1bHRDb25maWcsIGNvbmZpZywgdmlydHVhbFBhcmVudCk7XG4gICAgdGhpcy5zcG90c1NpemUgPSB0aGlzLmNvbmZpZy5taW5TaXplO1xuICAgIHRoaXMuZXhwYW5kID0gdHJ1ZTtcbiAgICB0aGlzLnN3aXRjaFN0YXR1cyA9IGZhbHNlO1xuICAgIHRoaXMuaW5pdCgpO1xuICB9XG4gIGluaXQoKSB7XG4gICAgdGhpcy5zd2l0Y2hTdGF0dXMgPSB0cnVlO1xuICAgIHRoaXMuYW5pbWF0ZSgpO1xuICB9XG5cbiAgc3dpdGNoZXIoc3RhdHVzKSB7XG4gICAgdGhpcy5zd2l0Y2hTdGF0dXMgPSBzdGF0dXM7XG4gIH1cblxuICBhbmltYXRlKCkge1xuICAgIGxldCAkdGhpcyA9IHRoaXM7XG4gICAgdGhpcy5pbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGlmICh0aGlzLnN3aXRjaFN0YXR1cykge1xuICAgICAgICAkdGhpcy5jbGVhcigpO1xuICAgICAgICAkdGhpcy5kcmF3U3BvdHMoKTtcbiAgICAgIH1cbiAgICB9LCB0aGlzLmNvbmZpZy5wZXJpb2QpXG4gIH1cblxuICBkcmF3U3BvdHMoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gdGhpcy5jb25maWcuY29sOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDw9IHRoaXMuY29uZmlnLmNvbDsgaisrKSB7XG4gICAgICAgIGRyYXdDaXJjbGUoXG4gICAgICAgICAgdGhpcy5jdHgsXG4gICAgICAgICAgaSAqIHRoaXMuY3ZzLndpZHRoIC8gdGhpcy5jb25maWcuY29sLFxuICAgICAgICAgIGogKiB0aGlzLmN2cy5oZWlnaHQgLyB0aGlzLmNvbmZpZy5yb3csXG4gICAgICAgICAgdGhpcy5zcG90c1NpemUsXG4gICAgICAgICAgdGhpcy5jb25maWcuY29sb3IsXG4gICAgICAgICAgMVxuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLnNwb3RzU2l6ZSAtIDEgPCB0aGlzLmNvbmZpZy5taW5TaXplKSB7XG4gICAgICB0aGlzLmV4cGFuZCA9IHRydWVcbiAgICB9XG4gICAgZWxzZSBpZiAodGhpcy5zcG90c1NpemUgKyAxID4gdGhpcy5jb25maWcubWF4U2l6ZSkge1xuICAgICAgdGhpcy5leHBhbmQgPSBmYWxzZVxuICAgIH1cbiAgICBpZiAodGhpcy5leHBhbmQpIHtcbiAgICAgIHRoaXMuc3BvdHNTaXplICs9IHRoaXMuY29uZmlnLnN0ZXA7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5zcG90c1NpemUgLT0gdGhpcy5jb25maWcuc3RlcDtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRTcGxhc2goKSB7XG4gIGxldCBpbml0aWFsU2NyZWVuID0gJCgnI2luaXRpYWwtc2NyZWVuJyk7XG4gIGxldCB2aXJ0dWFsQ2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gIGxldCBzd2l0Y2hlcjtcbiAgbGV0IHNwb3RBbmltYXRpb24gPSBib290KFNwb3RzQnVtcGluZywgU1BPVFNfQU5JTUFUSU9OX0RFRkFVTFQsIHt9LCB2aXJ0dWFsQ2FudmFzLCBpbml0aWFsU2NyZWVuKTtcbiAgbGV0IHNwbGFzaFByb21pc2UgPSBzcG90QW5pbWF0aW9uLnByb21pc2UudGhlbigoc3BvdHNCdW1waW5nSW5zdGFuY2UpID0+IHtcbiAgICBsZXQgYm9vdENvbnRyb2xsZXIgPSBib290KEJhc2ljUmVmZWxlY3Rpb24sIEJBTExfQU5JTUFUSU9OX0RFRkFVTFQsIHtcbiAgICAgIGFmdGVySW1hZ2U6IHRydWUsXG4gICAgICByYWRpdXM6IDQwLFxuICAgICAgY29sb3I6ICdyZ2JhKDAsIDAsIDAsMC43NSknLFxuICAgICAgc3BlZWRYOiAxMDAwLFxuICAgICAgYm90dG9tTGF5ZXI6IHNwb3RzQnVtcGluZ0luc3RhbmNlLmN2cyxcbiAgICAgIHNwZWVkWTogMTAwMCxcbiAgICAgIGFjY2VsZXJhdGlvblg6IDAsXG4gICAgICBhY2NlbGVyYXRpb25ZOiA5ODAsXG4gICAgICBmcmljdGlvblg6IDEsXG4gICAgfSwgaW5pdGlhbFNjcmVlbik7XG5cbiAgICBib290Q29udHJvbGxlci50cmlnZ2VyKCk7XG5cbiAgICByZXR1cm4gYm9vdENvbnRyb2xsZXIucHJvbWlzZS50aGVuKChiYXNpY1JlZmVsZWN0aW9uSW5zdGFuY2UpID0+IHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXMgPT4ge1xuICAgICAgICBzd2l0Y2hlciA9IChzdGF0dXMpID0+IHtcbiAgICAgICAgICBzcG90c0J1bXBpbmdJbnN0YW5jZS5zd2l0Y2hlcihzdGF0dXMpO1xuICAgICAgICAgIGJhc2ljUmVmZWxlY3Rpb25JbnN0YW5jZS5zd2l0Y2hlcihzdGF0dXMpO1xuICAgICAgICB9XG4gICAgICAgIHJlcyhzd2l0Y2hlcik7XG4gICAgICB9KVxuICAgIH0pXG4gIH0pXG4gIHNwb3RBbmltYXRpb24udHJpZ2dlcigpO1xuXG4gIHJldHVybiBzcGxhc2hQcm9taXNlO1xufVxuXG4iLCJleHBvcnQgY29uc3QgcGxheWVyc0RhdGEgPSBbXG4gIHtcbiAgICBpZDogMCxcbiAgICBuYW1lOiAnPz8/JyxcbiAgICBzY29yZTogMCxcbiAgICB3aWR0aDogMCxcbiAgICBwb3NpdGlvbjoge1xuICAgICAgeDogMCxcbiAgICAgIHk6IDBcbiAgICB9XG4gIH0sXG4gIHtcbiAgICBpZDogMSxcbiAgICBuYW1lOiAnPz8/JyxcbiAgICBzY29yZTogMCxcbiAgICB3aWR0aDogMCxcbiAgICBwb3NpdGlvbjoge1xuICAgICAgeDogMCxcbiAgICAgIHk6IDBcbiAgICB9XG4gIH1cbl07XG5cbmV4cG9ydCBjb25zdCBiYWxsRGF0YSA9IHtcbiAgcG9zaXRpb246IHtcbiAgICB4OiAwLFxuICAgIHk6IDBcbiAgfSxcbiAgc3BlZWQ6IHtcbiAgICB4OiAwLFxuICAgIHk6IDBcbiAgfSxcbiAgc2l6ZTogMCxcbiAgY29sb3I6IG51bGxcbn1cblxuXG5cbmV4cG9ydCBjb25zdCBwbGF5ZXJSZWYgPSB7XG4gIG5hbWU6ICc/Pz8nLFxuICBudW1iZXI6IDBcbn07IiwiXG4vKipcbiAqIEV4cG9zZSBgQmFja29mZmAuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBCYWNrb2ZmO1xuXG4vKipcbiAqIEluaXRpYWxpemUgYmFja29mZiB0aW1lciB3aXRoIGBvcHRzYC5cbiAqXG4gKiAtIGBtaW5gIGluaXRpYWwgdGltZW91dCBpbiBtaWxsaXNlY29uZHMgWzEwMF1cbiAqIC0gYG1heGAgbWF4IHRpbWVvdXQgWzEwMDAwXVxuICogLSBgaml0dGVyYCBbMF1cbiAqIC0gYGZhY3RvcmAgWzJdXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9wdHNcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gQmFja29mZihvcHRzKSB7XG4gIG9wdHMgPSBvcHRzIHx8IHt9O1xuICB0aGlzLm1zID0gb3B0cy5taW4gfHwgMTAwO1xuICB0aGlzLm1heCA9IG9wdHMubWF4IHx8IDEwMDAwO1xuICB0aGlzLmZhY3RvciA9IG9wdHMuZmFjdG9yIHx8IDI7XG4gIHRoaXMuaml0dGVyID0gb3B0cy5qaXR0ZXIgPiAwICYmIG9wdHMuaml0dGVyIDw9IDEgPyBvcHRzLmppdHRlciA6IDA7XG4gIHRoaXMuYXR0ZW1wdHMgPSAwO1xufVxuXG4vKipcbiAqIFJldHVybiB0aGUgYmFja29mZiBkdXJhdGlvbi5cbiAqXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkJhY2tvZmYucHJvdG90eXBlLmR1cmF0aW9uID0gZnVuY3Rpb24oKXtcbiAgdmFyIG1zID0gdGhpcy5tcyAqIE1hdGgucG93KHRoaXMuZmFjdG9yLCB0aGlzLmF0dGVtcHRzKyspO1xuICBpZiAodGhpcy5qaXR0ZXIpIHtcbiAgICB2YXIgcmFuZCA9ICBNYXRoLnJhbmRvbSgpO1xuICAgIHZhciBkZXZpYXRpb24gPSBNYXRoLmZsb29yKHJhbmQgKiB0aGlzLmppdHRlciAqIG1zKTtcbiAgICBtcyA9IChNYXRoLmZsb29yKHJhbmQgKiAxMCkgJiAxKSA9PSAwICA/IG1zIC0gZGV2aWF0aW9uIDogbXMgKyBkZXZpYXRpb247XG4gIH1cbiAgcmV0dXJuIE1hdGgubWluKG1zLCB0aGlzLm1heCkgfCAwO1xufTtcblxuLyoqXG4gKiBSZXNldCB0aGUgbnVtYmVyIG9mIGF0dGVtcHRzLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuQmFja29mZi5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbigpe1xuICB0aGlzLmF0dGVtcHRzID0gMDtcbn07XG5cbi8qKlxuICogU2V0IHRoZSBtaW5pbXVtIGR1cmF0aW9uXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5CYWNrb2ZmLnByb3RvdHlwZS5zZXRNaW4gPSBmdW5jdGlvbihtaW4pe1xuICB0aGlzLm1zID0gbWluO1xufTtcblxuLyoqXG4gKiBTZXQgdGhlIG1heGltdW0gZHVyYXRpb25cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkJhY2tvZmYucHJvdG90eXBlLnNldE1heCA9IGZ1bmN0aW9uKG1heCl7XG4gIHRoaXMubWF4ID0gbWF4O1xufTtcblxuLyoqXG4gKiBTZXQgdGhlIGppdHRlclxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuQmFja29mZi5wcm90b3R5cGUuc2V0Sml0dGVyID0gZnVuY3Rpb24oaml0dGVyKXtcbiAgdGhpcy5qaXR0ZXIgPSBqaXR0ZXI7XG59O1xuXG4iLCIvKlxuICogYmFzZTY0LWFycmF5YnVmZmVyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbmlrbGFzdmgvYmFzZTY0LWFycmF5YnVmZmVyXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDEyIE5pa2xhcyB2b24gSGVydHplblxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICovXG4oZnVuY3Rpb24oY2hhcnMpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICBleHBvcnRzLmVuY29kZSA9IGZ1bmN0aW9uKGFycmF5YnVmZmVyKSB7XG4gICAgdmFyIGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXlidWZmZXIpLFxuICAgIGksIGxlbiA9IGJ5dGVzLmxlbmd0aCwgYmFzZTY0ID0gXCJcIjtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrPTMpIHtcbiAgICAgIGJhc2U2NCArPSBjaGFyc1tieXRlc1tpXSA+PiAyXTtcbiAgICAgIGJhc2U2NCArPSBjaGFyc1soKGJ5dGVzW2ldICYgMykgPDwgNCkgfCAoYnl0ZXNbaSArIDFdID4+IDQpXTtcbiAgICAgIGJhc2U2NCArPSBjaGFyc1soKGJ5dGVzW2kgKyAxXSAmIDE1KSA8PCAyKSB8IChieXRlc1tpICsgMl0gPj4gNildO1xuICAgICAgYmFzZTY0ICs9IGNoYXJzW2J5dGVzW2kgKyAyXSAmIDYzXTtcbiAgICB9XG5cbiAgICBpZiAoKGxlbiAlIDMpID09PSAyKSB7XG4gICAgICBiYXNlNjQgPSBiYXNlNjQuc3Vic3RyaW5nKDAsIGJhc2U2NC5sZW5ndGggLSAxKSArIFwiPVwiO1xuICAgIH0gZWxzZSBpZiAobGVuICUgMyA9PT0gMSkge1xuICAgICAgYmFzZTY0ID0gYmFzZTY0LnN1YnN0cmluZygwLCBiYXNlNjQubGVuZ3RoIC0gMikgKyBcIj09XCI7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJhc2U2NDtcbiAgfTtcblxuICBleHBvcnRzLmRlY29kZSA9ICBmdW5jdGlvbihiYXNlNjQpIHtcbiAgICB2YXIgYnVmZmVyTGVuZ3RoID0gYmFzZTY0Lmxlbmd0aCAqIDAuNzUsXG4gICAgbGVuID0gYmFzZTY0Lmxlbmd0aCwgaSwgcCA9IDAsXG4gICAgZW5jb2RlZDEsIGVuY29kZWQyLCBlbmNvZGVkMywgZW5jb2RlZDQ7XG5cbiAgICBpZiAoYmFzZTY0W2Jhc2U2NC5sZW5ndGggLSAxXSA9PT0gXCI9XCIpIHtcbiAgICAgIGJ1ZmZlckxlbmd0aC0tO1xuICAgICAgaWYgKGJhc2U2NFtiYXNlNjQubGVuZ3RoIC0gMl0gPT09IFwiPVwiKSB7XG4gICAgICAgIGJ1ZmZlckxlbmd0aC0tO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBhcnJheWJ1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcihidWZmZXJMZW5ndGgpLFxuICAgIGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXlidWZmZXIpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSs9NCkge1xuICAgICAgZW5jb2RlZDEgPSBjaGFycy5pbmRleE9mKGJhc2U2NFtpXSk7XG4gICAgICBlbmNvZGVkMiA9IGNoYXJzLmluZGV4T2YoYmFzZTY0W2krMV0pO1xuICAgICAgZW5jb2RlZDMgPSBjaGFycy5pbmRleE9mKGJhc2U2NFtpKzJdKTtcbiAgICAgIGVuY29kZWQ0ID0gY2hhcnMuaW5kZXhPZihiYXNlNjRbaSszXSk7XG5cbiAgICAgIGJ5dGVzW3ArK10gPSAoZW5jb2RlZDEgPDwgMikgfCAoZW5jb2RlZDIgPj4gNCk7XG4gICAgICBieXRlc1twKytdID0gKChlbmNvZGVkMiAmIDE1KSA8PCA0KSB8IChlbmNvZGVkMyA+PiAyKTtcbiAgICAgIGJ5dGVzW3ArK10gPSAoKGVuY29kZWQzICYgMykgPDwgNikgfCAoZW5jb2RlZDQgJiA2Myk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycmF5YnVmZmVyO1xuICB9O1xufSkoXCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvXCIpO1xuIiwiXHJcbi8qKlxyXG4gKiBFeHBvc2UgYEVtaXR0ZXJgLlxyXG4gKi9cclxuXHJcbmlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJykge1xyXG4gIG1vZHVsZS5leHBvcnRzID0gRW1pdHRlcjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEluaXRpYWxpemUgYSBuZXcgYEVtaXR0ZXJgLlxyXG4gKlxyXG4gKiBAYXBpIHB1YmxpY1xyXG4gKi9cclxuXHJcbmZ1bmN0aW9uIEVtaXR0ZXIob2JqKSB7XHJcbiAgaWYgKG9iaikgcmV0dXJuIG1peGluKG9iaik7XHJcbn07XHJcblxyXG4vKipcclxuICogTWl4aW4gdGhlIGVtaXR0ZXIgcHJvcGVydGllcy5cclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IG9ialxyXG4gKiBAcmV0dXJuIHtPYmplY3R9XHJcbiAqIEBhcGkgcHJpdmF0ZVxyXG4gKi9cclxuXHJcbmZ1bmN0aW9uIG1peGluKG9iaikge1xyXG4gIGZvciAodmFyIGtleSBpbiBFbWl0dGVyLnByb3RvdHlwZSkge1xyXG4gICAgb2JqW2tleV0gPSBFbWl0dGVyLnByb3RvdHlwZVtrZXldO1xyXG4gIH1cclxuICByZXR1cm4gb2JqO1xyXG59XHJcblxyXG4vKipcclxuICogTGlzdGVuIG9uIHRoZSBnaXZlbiBgZXZlbnRgIHdpdGggYGZuYC5cclxuICpcclxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXHJcbiAqIEByZXR1cm4ge0VtaXR0ZXJ9XHJcbiAqIEBhcGkgcHVibGljXHJcbiAqL1xyXG5cclxuRW1pdHRlci5wcm90b3R5cGUub24gPVxyXG5FbWl0dGVyLnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24oZXZlbnQsIGZuKXtcclxuICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XHJcbiAgKHRoaXMuX2NhbGxiYWNrc1snJCcgKyBldmVudF0gPSB0aGlzLl9jYWxsYmFja3NbJyQnICsgZXZlbnRdIHx8IFtdKVxyXG4gICAgLnB1c2goZm4pO1xyXG4gIHJldHVybiB0aGlzO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEFkZHMgYW4gYGV2ZW50YCBsaXN0ZW5lciB0aGF0IHdpbGwgYmUgaW52b2tlZCBhIHNpbmdsZVxyXG4gKiB0aW1lIHRoZW4gYXV0b21hdGljYWxseSByZW1vdmVkLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcclxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cclxuICogQHJldHVybiB7RW1pdHRlcn1cclxuICogQGFwaSBwdWJsaWNcclxuICovXHJcblxyXG5FbWl0dGVyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24oZXZlbnQsIGZuKXtcclxuICBmdW5jdGlvbiBvbigpIHtcclxuICAgIHRoaXMub2ZmKGV2ZW50LCBvbik7XHJcbiAgICBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG4gIH1cclxuXHJcbiAgb24uZm4gPSBmbjtcclxuICB0aGlzLm9uKGV2ZW50LCBvbik7XHJcbiAgcmV0dXJuIHRoaXM7XHJcbn07XHJcblxyXG4vKipcclxuICogUmVtb3ZlIHRoZSBnaXZlbiBjYWxsYmFjayBmb3IgYGV2ZW50YCBvciBhbGxcclxuICogcmVnaXN0ZXJlZCBjYWxsYmFja3MuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxyXG4gKiBAcmV0dXJuIHtFbWl0dGVyfVxyXG4gKiBAYXBpIHB1YmxpY1xyXG4gKi9cclxuXHJcbkVtaXR0ZXIucHJvdG90eXBlLm9mZiA9XHJcbkVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyID1cclxuRW1pdHRlci5wcm90b3R5cGUucmVtb3ZlQWxsTGlzdGVuZXJzID1cclxuRW1pdHRlci5wcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKGV2ZW50LCBmbil7XHJcbiAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xyXG5cclxuICAvLyBhbGxcclxuICBpZiAoMCA9PSBhcmd1bWVudHMubGVuZ3RoKSB7XHJcbiAgICB0aGlzLl9jYWxsYmFja3MgPSB7fTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLy8gc3BlY2lmaWMgZXZlbnRcclxuICB2YXIgY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzWyckJyArIGV2ZW50XTtcclxuICBpZiAoIWNhbGxiYWNrcykgcmV0dXJuIHRoaXM7XHJcblxyXG4gIC8vIHJlbW92ZSBhbGwgaGFuZGxlcnNcclxuICBpZiAoMSA9PSBhcmd1bWVudHMubGVuZ3RoKSB7XHJcbiAgICBkZWxldGUgdGhpcy5fY2FsbGJhY2tzWyckJyArIGV2ZW50XTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLy8gcmVtb3ZlIHNwZWNpZmljIGhhbmRsZXJcclxuICB2YXIgY2I7XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjYWxsYmFja3MubGVuZ3RoOyBpKyspIHtcclxuICAgIGNiID0gY2FsbGJhY2tzW2ldO1xyXG4gICAgaWYgKGNiID09PSBmbiB8fCBjYi5mbiA9PT0gZm4pIHtcclxuICAgICAgY2FsbGJhY2tzLnNwbGljZShpLCAxKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBSZW1vdmUgZXZlbnQgc3BlY2lmaWMgYXJyYXlzIGZvciBldmVudCB0eXBlcyB0aGF0IG5vXHJcbiAgLy8gb25lIGlzIHN1YnNjcmliZWQgZm9yIHRvIGF2b2lkIG1lbW9yeSBsZWFrLlxyXG4gIGlmIChjYWxsYmFja3MubGVuZ3RoID09PSAwKSB7XHJcbiAgICBkZWxldGUgdGhpcy5fY2FsbGJhY2tzWyckJyArIGV2ZW50XTtcclxuICB9XHJcblxyXG4gIHJldHVybiB0aGlzO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEVtaXQgYGV2ZW50YCB3aXRoIHRoZSBnaXZlbiBhcmdzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcclxuICogQHBhcmFtIHtNaXhlZH0gLi4uXHJcbiAqIEByZXR1cm4ge0VtaXR0ZXJ9XHJcbiAqL1xyXG5cclxuRW1pdHRlci5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uKGV2ZW50KXtcclxuICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XHJcblxyXG4gIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKVxyXG4gICAgLCBjYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3NbJyQnICsgZXZlbnRdO1xyXG5cclxuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XHJcbiAgfVxyXG5cclxuICBpZiAoY2FsbGJhY2tzKSB7XHJcbiAgICBjYWxsYmFja3MgPSBjYWxsYmFja3Muc2xpY2UoMCk7XHJcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XHJcbiAgICAgIGNhbGxiYWNrc1tpXS5hcHBseSh0aGlzLCBhcmdzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiB0aGlzO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFJldHVybiBhcnJheSBvZiBjYWxsYmFja3MgZm9yIGBldmVudGAuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxyXG4gKiBAcmV0dXJuIHtBcnJheX1cclxuICogQGFwaSBwdWJsaWNcclxuICovXHJcblxyXG5FbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lcnMgPSBmdW5jdGlvbihldmVudCl7XHJcbiAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xyXG4gIHJldHVybiB0aGlzLl9jYWxsYmFja3NbJyQnICsgZXZlbnRdIHx8IFtdO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIENoZWNrIGlmIHRoaXMgZW1pdHRlciBoYXMgYGV2ZW50YCBoYW5kbGVycy5cclxuICpcclxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XHJcbiAqIEByZXR1cm4ge0Jvb2xlYW59XHJcbiAqIEBhcGkgcHVibGljXHJcbiAqL1xyXG5cclxuRW1pdHRlci5wcm90b3R5cGUuaGFzTGlzdGVuZXJzID0gZnVuY3Rpb24oZXZlbnQpe1xyXG4gIHJldHVybiAhISB0aGlzLmxpc3RlbmVycyhldmVudCkubGVuZ3RoO1xyXG59O1xyXG4iLCIvKipcbiAqIEhlbHBlcnMuXG4gKi9cblxudmFyIHMgPSAxMDAwO1xudmFyIG0gPSBzICogNjA7XG52YXIgaCA9IG0gKiA2MDtcbnZhciBkID0gaCAqIDI0O1xudmFyIHcgPSBkICogNztcbnZhciB5ID0gZCAqIDM2NS4yNTtcblxuLyoqXG4gKiBQYXJzZSBvciBmb3JtYXQgdGhlIGdpdmVuIGB2YWxgLlxuICpcbiAqIE9wdGlvbnM6XG4gKlxuICogIC0gYGxvbmdgIHZlcmJvc2UgZm9ybWF0dGluZyBbZmFsc2VdXG4gKlxuICogQHBhcmFtIHtTdHJpbmd8TnVtYmVyfSB2YWxcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEB0aHJvd3Mge0Vycm9yfSB0aHJvdyBhbiBlcnJvciBpZiB2YWwgaXMgbm90IGEgbm9uLWVtcHR5IHN0cmluZyBvciBhIG51bWJlclxuICogQHJldHVybiB7U3RyaW5nfE51bWJlcn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih2YWwsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbDtcbiAgaWYgKHR5cGUgPT09ICdzdHJpbmcnICYmIHZhbC5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIHBhcnNlKHZhbCk7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ251bWJlcicgJiYgaXNGaW5pdGUodmFsKSkge1xuICAgIHJldHVybiBvcHRpb25zLmxvbmcgPyBmbXRMb25nKHZhbCkgOiBmbXRTaG9ydCh2YWwpO1xuICB9XG4gIHRocm93IG5ldyBFcnJvcihcbiAgICAndmFsIGlzIG5vdCBhIG5vbi1lbXB0eSBzdHJpbmcgb3IgYSB2YWxpZCBudW1iZXIuIHZhbD0nICtcbiAgICAgIEpTT04uc3RyaW5naWZ5KHZhbClcbiAgKTtcbn07XG5cbi8qKlxuICogUGFyc2UgdGhlIGdpdmVuIGBzdHJgIGFuZCByZXR1cm4gbWlsbGlzZWNvbmRzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHBhcnNlKHN0cikge1xuICBzdHIgPSBTdHJpbmcoc3RyKTtcbiAgaWYgKHN0ci5sZW5ndGggPiAxMDApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIG1hdGNoID0gL14oLT8oPzpcXGQrKT9cXC4/XFxkKykgKihtaWxsaXNlY29uZHM/fG1zZWNzP3xtc3xzZWNvbmRzP3xzZWNzP3xzfG1pbnV0ZXM/fG1pbnM/fG18aG91cnM/fGhycz98aHxkYXlzP3xkfHdlZWtzP3x3fHllYXJzP3x5cnM/fHkpPyQvaS5leGVjKFxuICAgIHN0clxuICApO1xuICBpZiAoIW1hdGNoKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBuID0gcGFyc2VGbG9hdChtYXRjaFsxXSk7XG4gIHZhciB0eXBlID0gKG1hdGNoWzJdIHx8ICdtcycpLnRvTG93ZXJDYXNlKCk7XG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgJ3llYXJzJzpcbiAgICBjYXNlICd5ZWFyJzpcbiAgICBjYXNlICd5cnMnOlxuICAgIGNhc2UgJ3lyJzpcbiAgICBjYXNlICd5JzpcbiAgICAgIHJldHVybiBuICogeTtcbiAgICBjYXNlICd3ZWVrcyc6XG4gICAgY2FzZSAnd2Vlayc6XG4gICAgY2FzZSAndyc6XG4gICAgICByZXR1cm4gbiAqIHc7XG4gICAgY2FzZSAnZGF5cyc6XG4gICAgY2FzZSAnZGF5JzpcbiAgICBjYXNlICdkJzpcbiAgICAgIHJldHVybiBuICogZDtcbiAgICBjYXNlICdob3Vycyc6XG4gICAgY2FzZSAnaG91cic6XG4gICAgY2FzZSAnaHJzJzpcbiAgICBjYXNlICdocic6XG4gICAgY2FzZSAnaCc6XG4gICAgICByZXR1cm4gbiAqIGg7XG4gICAgY2FzZSAnbWludXRlcyc6XG4gICAgY2FzZSAnbWludXRlJzpcbiAgICBjYXNlICdtaW5zJzpcbiAgICBjYXNlICdtaW4nOlxuICAgIGNhc2UgJ20nOlxuICAgICAgcmV0dXJuIG4gKiBtO1xuICAgIGNhc2UgJ3NlY29uZHMnOlxuICAgIGNhc2UgJ3NlY29uZCc6XG4gICAgY2FzZSAnc2Vjcyc6XG4gICAgY2FzZSAnc2VjJzpcbiAgICBjYXNlICdzJzpcbiAgICAgIHJldHVybiBuICogcztcbiAgICBjYXNlICdtaWxsaXNlY29uZHMnOlxuICAgIGNhc2UgJ21pbGxpc2Vjb25kJzpcbiAgICBjYXNlICdtc2Vjcyc6XG4gICAgY2FzZSAnbXNlYyc6XG4gICAgY2FzZSAnbXMnOlxuICAgICAgcmV0dXJuIG47XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbn1cblxuLyoqXG4gKiBTaG9ydCBmb3JtYXQgZm9yIGBtc2AuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IG1zXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBmbXRTaG9ydChtcykge1xuICB2YXIgbXNBYnMgPSBNYXRoLmFicyhtcyk7XG4gIGlmIChtc0FicyA+PSBkKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBkKSArICdkJztcbiAgfVxuICBpZiAobXNBYnMgPj0gaCkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gaCkgKyAnaCc7XG4gIH1cbiAgaWYgKG1zQWJzID49IG0pIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIG0pICsgJ20nO1xuICB9XG4gIGlmIChtc0FicyA+PSBzKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBzKSArICdzJztcbiAgfVxuICByZXR1cm4gbXMgKyAnbXMnO1xufVxuXG4vKipcbiAqIExvbmcgZm9ybWF0IGZvciBgbXNgLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBtc1xuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gZm10TG9uZyhtcykge1xuICB2YXIgbXNBYnMgPSBNYXRoLmFicyhtcyk7XG4gIGlmIChtc0FicyA+PSBkKSB7XG4gICAgcmV0dXJuIHBsdXJhbChtcywgbXNBYnMsIGQsICdkYXknKTtcbiAgfVxuICBpZiAobXNBYnMgPj0gaCkge1xuICAgIHJldHVybiBwbHVyYWwobXMsIG1zQWJzLCBoLCAnaG91cicpO1xuICB9XG4gIGlmIChtc0FicyA+PSBtKSB7XG4gICAgcmV0dXJuIHBsdXJhbChtcywgbXNBYnMsIG0sICdtaW51dGUnKTtcbiAgfVxuICBpZiAobXNBYnMgPj0gcykge1xuICAgIHJldHVybiBwbHVyYWwobXMsIG1zQWJzLCBzLCAnc2Vjb25kJyk7XG4gIH1cbiAgcmV0dXJuIG1zICsgJyBtcyc7XG59XG5cbi8qKlxuICogUGx1cmFsaXphdGlvbiBoZWxwZXIuXG4gKi9cblxuZnVuY3Rpb24gcGx1cmFsKG1zLCBtc0FicywgbiwgbmFtZSkge1xuICB2YXIgaXNQbHVyYWwgPSBtc0FicyA+PSBuICogMS41O1xuICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIG4pICsgJyAnICsgbmFtZSArIChpc1BsdXJhbCA/ICdzJyA6ICcnKTtcbn1cbiIsIi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG4vKipcbiAqIFRoaXMgaXMgdGhlIHdlYiBicm93c2VyIGltcGxlbWVudGF0aW9uIG9mIGBkZWJ1ZygpYC5cbiAqL1xuXG5leHBvcnRzLmZvcm1hdEFyZ3MgPSBmb3JtYXRBcmdzO1xuZXhwb3J0cy5zYXZlID0gc2F2ZTtcbmV4cG9ydHMubG9hZCA9IGxvYWQ7XG5leHBvcnRzLnVzZUNvbG9ycyA9IHVzZUNvbG9ycztcbmV4cG9ydHMuc3RvcmFnZSA9IGxvY2Fsc3RvcmFnZSgpO1xuZXhwb3J0cy5kZXN0cm95ID0gKCgpID0+IHtcblx0bGV0IHdhcm5lZCA9IGZhbHNlO1xuXG5cdHJldHVybiAoKSA9PiB7XG5cdFx0aWYgKCF3YXJuZWQpIHtcblx0XHRcdHdhcm5lZCA9IHRydWU7XG5cdFx0XHRjb25zb2xlLndhcm4oJ0luc3RhbmNlIG1ldGhvZCBgZGVidWcuZGVzdHJveSgpYCBpcyBkZXByZWNhdGVkIGFuZCBubyBsb25nZXIgZG9lcyBhbnl0aGluZy4gSXQgd2lsbCBiZSByZW1vdmVkIGluIHRoZSBuZXh0IG1ham9yIHZlcnNpb24gb2YgYGRlYnVnYC4nKTtcblx0XHR9XG5cdH07XG59KSgpO1xuXG4vKipcbiAqIENvbG9ycy5cbiAqL1xuXG5leHBvcnRzLmNvbG9ycyA9IFtcblx0JyMwMDAwQ0MnLFxuXHQnIzAwMDBGRicsXG5cdCcjMDAzM0NDJyxcblx0JyMwMDMzRkYnLFxuXHQnIzAwNjZDQycsXG5cdCcjMDA2NkZGJyxcblx0JyMwMDk5Q0MnLFxuXHQnIzAwOTlGRicsXG5cdCcjMDBDQzAwJyxcblx0JyMwMENDMzMnLFxuXHQnIzAwQ0M2NicsXG5cdCcjMDBDQzk5Jyxcblx0JyMwMENDQ0MnLFxuXHQnIzAwQ0NGRicsXG5cdCcjMzMwMENDJyxcblx0JyMzMzAwRkYnLFxuXHQnIzMzMzNDQycsXG5cdCcjMzMzM0ZGJyxcblx0JyMzMzY2Q0MnLFxuXHQnIzMzNjZGRicsXG5cdCcjMzM5OUNDJyxcblx0JyMzMzk5RkYnLFxuXHQnIzMzQ0MwMCcsXG5cdCcjMzNDQzMzJyxcblx0JyMzM0NDNjYnLFxuXHQnIzMzQ0M5OScsXG5cdCcjMzNDQ0NDJyxcblx0JyMzM0NDRkYnLFxuXHQnIzY2MDBDQycsXG5cdCcjNjYwMEZGJyxcblx0JyM2NjMzQ0MnLFxuXHQnIzY2MzNGRicsXG5cdCcjNjZDQzAwJyxcblx0JyM2NkNDMzMnLFxuXHQnIzk5MDBDQycsXG5cdCcjOTkwMEZGJyxcblx0JyM5OTMzQ0MnLFxuXHQnIzk5MzNGRicsXG5cdCcjOTlDQzAwJyxcblx0JyM5OUNDMzMnLFxuXHQnI0NDMDAwMCcsXG5cdCcjQ0MwMDMzJyxcblx0JyNDQzAwNjYnLFxuXHQnI0NDMDA5OScsXG5cdCcjQ0MwMENDJyxcblx0JyNDQzAwRkYnLFxuXHQnI0NDMzMwMCcsXG5cdCcjQ0MzMzMzJyxcblx0JyNDQzMzNjYnLFxuXHQnI0NDMzM5OScsXG5cdCcjQ0MzM0NDJyxcblx0JyNDQzMzRkYnLFxuXHQnI0NDNjYwMCcsXG5cdCcjQ0M2NjMzJyxcblx0JyNDQzk5MDAnLFxuXHQnI0NDOTkzMycsXG5cdCcjQ0NDQzAwJyxcblx0JyNDQ0NDMzMnLFxuXHQnI0ZGMDAwMCcsXG5cdCcjRkYwMDMzJyxcblx0JyNGRjAwNjYnLFxuXHQnI0ZGMDA5OScsXG5cdCcjRkYwMENDJyxcblx0JyNGRjAwRkYnLFxuXHQnI0ZGMzMwMCcsXG5cdCcjRkYzMzMzJyxcblx0JyNGRjMzNjYnLFxuXHQnI0ZGMzM5OScsXG5cdCcjRkYzM0NDJyxcblx0JyNGRjMzRkYnLFxuXHQnI0ZGNjYwMCcsXG5cdCcjRkY2NjMzJyxcblx0JyNGRjk5MDAnLFxuXHQnI0ZGOTkzMycsXG5cdCcjRkZDQzAwJyxcblx0JyNGRkNDMzMnXG5dO1xuXG4vKipcbiAqIEN1cnJlbnRseSBvbmx5IFdlYktpdC1iYXNlZCBXZWIgSW5zcGVjdG9ycywgRmlyZWZveCA+PSB2MzEsXG4gKiBhbmQgdGhlIEZpcmVidWcgZXh0ZW5zaW9uIChhbnkgRmlyZWZveCB2ZXJzaW9uKSBhcmUga25vd25cbiAqIHRvIHN1cHBvcnQgXCIlY1wiIENTUyBjdXN0b21pemF0aW9ucy5cbiAqXG4gKiBUT0RPOiBhZGQgYSBgbG9jYWxTdG9yYWdlYCB2YXJpYWJsZSB0byBleHBsaWNpdGx5IGVuYWJsZS9kaXNhYmxlIGNvbG9yc1xuICovXG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb21wbGV4aXR5XG5mdW5jdGlvbiB1c2VDb2xvcnMoKSB7XG5cdC8vIE5COiBJbiBhbiBFbGVjdHJvbiBwcmVsb2FkIHNjcmlwdCwgZG9jdW1lbnQgd2lsbCBiZSBkZWZpbmVkIGJ1dCBub3QgZnVsbHlcblx0Ly8gaW5pdGlhbGl6ZWQuIFNpbmNlIHdlIGtub3cgd2UncmUgaW4gQ2hyb21lLCB3ZSdsbCBqdXN0IGRldGVjdCB0aGlzIGNhc2Vcblx0Ly8gZXhwbGljaXRseVxuXHRpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LnByb2Nlc3MgJiYgKHdpbmRvdy5wcm9jZXNzLnR5cGUgPT09ICdyZW5kZXJlcicgfHwgd2luZG93LnByb2Nlc3MuX19ud2pzKSkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0Ly8gSW50ZXJuZXQgRXhwbG9yZXIgYW5kIEVkZ2UgZG8gbm90IHN1cHBvcnQgY29sb3JzLlxuXHRpZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudCAmJiBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkubWF0Y2goLyhlZGdlfHRyaWRlbnQpXFwvKFxcZCspLykpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHQvLyBJcyB3ZWJraXQ/IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzE2NDU5NjA2LzM3Njc3M1xuXHQvLyBkb2N1bWVudCBpcyB1bmRlZmluZWQgaW4gcmVhY3QtbmF0aXZlOiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QtbmF0aXZlL3B1bGwvMTYzMlxuXHRyZXR1cm4gKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZSAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuV2Via2l0QXBwZWFyYW5jZSkgfHxcblx0XHQvLyBJcyBmaXJlYnVnPyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8zOTgxMjAvMzc2NzczXG5cdFx0KHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5jb25zb2xlICYmICh3aW5kb3cuY29uc29sZS5maXJlYnVnIHx8ICh3aW5kb3cuY29uc29sZS5leGNlcHRpb24gJiYgd2luZG93LmNvbnNvbGUudGFibGUpKSkgfHxcblx0XHQvLyBJcyBmaXJlZm94ID49IHYzMT9cblx0XHQvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1Rvb2xzL1dlYl9Db25zb2xlI1N0eWxpbmdfbWVzc2FnZXNcblx0XHQodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudCAmJiBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkubWF0Y2goL2ZpcmVmb3hcXC8oXFxkKykvKSAmJiBwYXJzZUludChSZWdFeHAuJDEsIDEwKSA+PSAzMSkgfHxcblx0XHQvLyBEb3VibGUgY2hlY2sgd2Via2l0IGluIHVzZXJBZ2VudCBqdXN0IGluIGNhc2Ugd2UgYXJlIGluIGEgd29ya2VyXG5cdFx0KHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci51c2VyQWdlbnQgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLm1hdGNoKC9hcHBsZXdlYmtpdFxcLyhcXGQrKS8pKTtcbn1cblxuLyoqXG4gKiBDb2xvcml6ZSBsb2cgYXJndW1lbnRzIGlmIGVuYWJsZWQuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBmb3JtYXRBcmdzKGFyZ3MpIHtcblx0YXJnc1swXSA9ICh0aGlzLnVzZUNvbG9ycyA/ICclYycgOiAnJykgK1xuXHRcdHRoaXMubmFtZXNwYWNlICtcblx0XHQodGhpcy51c2VDb2xvcnMgPyAnICVjJyA6ICcgJykgK1xuXHRcdGFyZ3NbMF0gK1xuXHRcdCh0aGlzLnVzZUNvbG9ycyA/ICclYyAnIDogJyAnKSArXG5cdFx0JysnICsgbW9kdWxlLmV4cG9ydHMuaHVtYW5pemUodGhpcy5kaWZmKTtcblxuXHRpZiAoIXRoaXMudXNlQ29sb3JzKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgYyA9ICdjb2xvcjogJyArIHRoaXMuY29sb3I7XG5cdGFyZ3Muc3BsaWNlKDEsIDAsIGMsICdjb2xvcjogaW5oZXJpdCcpO1xuXG5cdC8vIFRoZSBmaW5hbCBcIiVjXCIgaXMgc29tZXdoYXQgdHJpY2t5LCBiZWNhdXNlIHRoZXJlIGNvdWxkIGJlIG90aGVyXG5cdC8vIGFyZ3VtZW50cyBwYXNzZWQgZWl0aGVyIGJlZm9yZSBvciBhZnRlciB0aGUgJWMsIHNvIHdlIG5lZWQgdG9cblx0Ly8gZmlndXJlIG91dCB0aGUgY29ycmVjdCBpbmRleCB0byBpbnNlcnQgdGhlIENTUyBpbnRvXG5cdGxldCBpbmRleCA9IDA7XG5cdGxldCBsYXN0QyA9IDA7XG5cdGFyZ3NbMF0ucmVwbGFjZSgvJVthLXpBLVolXS9nLCBtYXRjaCA9PiB7XG5cdFx0aWYgKG1hdGNoID09PSAnJSUnKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGluZGV4Kys7XG5cdFx0aWYgKG1hdGNoID09PSAnJWMnKSB7XG5cdFx0XHQvLyBXZSBvbmx5IGFyZSBpbnRlcmVzdGVkIGluIHRoZSAqbGFzdCogJWNcblx0XHRcdC8vICh0aGUgdXNlciBtYXkgaGF2ZSBwcm92aWRlZCB0aGVpciBvd24pXG5cdFx0XHRsYXN0QyA9IGluZGV4O1xuXHRcdH1cblx0fSk7XG5cblx0YXJncy5zcGxpY2UobGFzdEMsIDAsIGMpO1xufVxuXG4vKipcbiAqIEludm9rZXMgYGNvbnNvbGUuZGVidWcoKWAgd2hlbiBhdmFpbGFibGUuXG4gKiBOby1vcCB3aGVuIGBjb25zb2xlLmRlYnVnYCBpcyBub3QgYSBcImZ1bmN0aW9uXCIuXG4gKiBJZiBgY29uc29sZS5kZWJ1Z2AgaXMgbm90IGF2YWlsYWJsZSwgZmFsbHMgYmFja1xuICogdG8gYGNvbnNvbGUubG9nYC5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5leHBvcnRzLmxvZyA9IGNvbnNvbGUuZGVidWcgfHwgY29uc29sZS5sb2cgfHwgKCgpID0+IHt9KTtcblxuLyoqXG4gKiBTYXZlIGBuYW1lc3BhY2VzYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlc1xuICogQGFwaSBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHNhdmUobmFtZXNwYWNlcykge1xuXHR0cnkge1xuXHRcdGlmIChuYW1lc3BhY2VzKSB7XG5cdFx0XHRleHBvcnRzLnN0b3JhZ2Uuc2V0SXRlbSgnZGVidWcnLCBuYW1lc3BhY2VzKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZXhwb3J0cy5zdG9yYWdlLnJlbW92ZUl0ZW0oJ2RlYnVnJyk7XG5cdFx0fVxuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdC8vIFN3YWxsb3dcblx0XHQvLyBYWFggKEBRaXgtKSBzaG91bGQgd2UgYmUgbG9nZ2luZyB0aGVzZT9cblx0fVxufVxuXG4vKipcbiAqIExvYWQgYG5hbWVzcGFjZXNgLlxuICpcbiAqIEByZXR1cm4ge1N0cmluZ30gcmV0dXJucyB0aGUgcHJldmlvdXNseSBwZXJzaXN0ZWQgZGVidWcgbW9kZXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBsb2FkKCkge1xuXHRsZXQgcjtcblx0dHJ5IHtcblx0XHRyID0gZXhwb3J0cy5zdG9yYWdlLmdldEl0ZW0oJ2RlYnVnJyk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Ly8gU3dhbGxvd1xuXHRcdC8vIFhYWCAoQFFpeC0pIHNob3VsZCB3ZSBiZSBsb2dnaW5nIHRoZXNlP1xuXHR9XG5cblx0Ly8gSWYgZGVidWcgaXNuJ3Qgc2V0IGluIExTLCBhbmQgd2UncmUgaW4gRWxlY3Ryb24sIHRyeSB0byBsb2FkICRERUJVR1xuXHRpZiAoIXIgJiYgdHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmICdlbnYnIGluIHByb2Nlc3MpIHtcblx0XHRyID0gcHJvY2Vzcy5lbnYuREVCVUc7XG5cdH1cblxuXHRyZXR1cm4gcjtcbn1cblxuLyoqXG4gKiBMb2NhbHN0b3JhZ2UgYXR0ZW1wdHMgdG8gcmV0dXJuIHRoZSBsb2NhbHN0b3JhZ2UuXG4gKlxuICogVGhpcyBpcyBuZWNlc3NhcnkgYmVjYXVzZSBzYWZhcmkgdGhyb3dzXG4gKiB3aGVuIGEgdXNlciBkaXNhYmxlcyBjb29raWVzL2xvY2Fsc3RvcmFnZVxuICogYW5kIHlvdSBhdHRlbXB0IHRvIGFjY2VzcyBpdC5cbiAqXG4gKiBAcmV0dXJuIHtMb2NhbFN0b3JhZ2V9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBsb2NhbHN0b3JhZ2UoKSB7XG5cdHRyeSB7XG5cdFx0Ly8gVFZNTEtpdCAoQXBwbGUgVFYgSlMgUnVudGltZSkgZG9lcyBub3QgaGF2ZSBhIHdpbmRvdyBvYmplY3QsIGp1c3QgbG9jYWxTdG9yYWdlIGluIHRoZSBnbG9iYWwgY29udGV4dFxuXHRcdC8vIFRoZSBCcm93c2VyIGFsc28gaGFzIGxvY2FsU3RvcmFnZSBpbiB0aGUgZ2xvYmFsIGNvbnRleHQuXG5cdFx0cmV0dXJuIGxvY2FsU3RvcmFnZTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHQvLyBTd2FsbG93XG5cdFx0Ly8gWFhYIChAUWl4LSkgc2hvdWxkIHdlIGJlIGxvZ2dpbmcgdGhlc2U/XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2NvbW1vbicpKGV4cG9ydHMpO1xuXG5jb25zdCB7Zm9ybWF0dGVyc30gPSBtb2R1bGUuZXhwb3J0cztcblxuLyoqXG4gKiBNYXAgJWogdG8gYEpTT04uc3RyaW5naWZ5KClgLCBzaW5jZSBubyBXZWIgSW5zcGVjdG9ycyBkbyB0aGF0IGJ5IGRlZmF1bHQuXG4gKi9cblxuZm9ybWF0dGVycy5qID0gZnVuY3Rpb24gKHYpIHtcblx0dHJ5IHtcblx0XHRyZXR1cm4gSlNPTi5zdHJpbmdpZnkodik7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0cmV0dXJuICdbVW5leHBlY3RlZEpTT05QYXJzZUVycm9yXTogJyArIGVycm9yLm1lc3NhZ2U7XG5cdH1cbn07XG4iLCJcbi8qKlxuICogVGhpcyBpcyB0aGUgY29tbW9uIGxvZ2ljIGZvciBib3RoIHRoZSBOb2RlLmpzIGFuZCB3ZWIgYnJvd3NlclxuICogaW1wbGVtZW50YXRpb25zIG9mIGBkZWJ1ZygpYC5cbiAqL1xuXG5mdW5jdGlvbiBzZXR1cChlbnYpIHtcblx0Y3JlYXRlRGVidWcuZGVidWcgPSBjcmVhdGVEZWJ1Zztcblx0Y3JlYXRlRGVidWcuZGVmYXVsdCA9IGNyZWF0ZURlYnVnO1xuXHRjcmVhdGVEZWJ1Zy5jb2VyY2UgPSBjb2VyY2U7XG5cdGNyZWF0ZURlYnVnLmRpc2FibGUgPSBkaXNhYmxlO1xuXHRjcmVhdGVEZWJ1Zy5lbmFibGUgPSBlbmFibGU7XG5cdGNyZWF0ZURlYnVnLmVuYWJsZWQgPSBlbmFibGVkO1xuXHRjcmVhdGVEZWJ1Zy5odW1hbml6ZSA9IHJlcXVpcmUoJ21zJyk7XG5cdGNyZWF0ZURlYnVnLmRlc3Ryb3kgPSBkZXN0cm95O1xuXG5cdE9iamVjdC5rZXlzKGVudikuZm9yRWFjaChrZXkgPT4ge1xuXHRcdGNyZWF0ZURlYnVnW2tleV0gPSBlbnZba2V5XTtcblx0fSk7XG5cblx0LyoqXG5cdCogVGhlIGN1cnJlbnRseSBhY3RpdmUgZGVidWcgbW9kZSBuYW1lcywgYW5kIG5hbWVzIHRvIHNraXAuXG5cdCovXG5cblx0Y3JlYXRlRGVidWcubmFtZXMgPSBbXTtcblx0Y3JlYXRlRGVidWcuc2tpcHMgPSBbXTtcblxuXHQvKipcblx0KiBNYXAgb2Ygc3BlY2lhbCBcIiVuXCIgaGFuZGxpbmcgZnVuY3Rpb25zLCBmb3IgdGhlIGRlYnVnIFwiZm9ybWF0XCIgYXJndW1lbnQuXG5cdCpcblx0KiBWYWxpZCBrZXkgbmFtZXMgYXJlIGEgc2luZ2xlLCBsb3dlciBvciB1cHBlci1jYXNlIGxldHRlciwgaS5lLiBcIm5cIiBhbmQgXCJOXCIuXG5cdCovXG5cdGNyZWF0ZURlYnVnLmZvcm1hdHRlcnMgPSB7fTtcblxuXHQvKipcblx0KiBTZWxlY3RzIGEgY29sb3IgZm9yIGEgZGVidWcgbmFtZXNwYWNlXG5cdCogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZSBUaGUgbmFtZXNwYWNlIHN0cmluZyBmb3IgdGhlIGZvciB0aGUgZGVidWcgaW5zdGFuY2UgdG8gYmUgY29sb3JlZFxuXHQqIEByZXR1cm4ge051bWJlcnxTdHJpbmd9IEFuIEFOU0kgY29sb3IgY29kZSBmb3IgdGhlIGdpdmVuIG5hbWVzcGFjZVxuXHQqIEBhcGkgcHJpdmF0ZVxuXHQqL1xuXHRmdW5jdGlvbiBzZWxlY3RDb2xvcihuYW1lc3BhY2UpIHtcblx0XHRsZXQgaGFzaCA9IDA7XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IG5hbWVzcGFjZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0aGFzaCA9ICgoaGFzaCA8PCA1KSAtIGhhc2gpICsgbmFtZXNwYWNlLmNoYXJDb2RlQXQoaSk7XG5cdFx0XHRoYXNoIHw9IDA7IC8vIENvbnZlcnQgdG8gMzJiaXQgaW50ZWdlclxuXHRcdH1cblxuXHRcdHJldHVybiBjcmVhdGVEZWJ1Zy5jb2xvcnNbTWF0aC5hYnMoaGFzaCkgJSBjcmVhdGVEZWJ1Zy5jb2xvcnMubGVuZ3RoXTtcblx0fVxuXHRjcmVhdGVEZWJ1Zy5zZWxlY3RDb2xvciA9IHNlbGVjdENvbG9yO1xuXG5cdC8qKlxuXHQqIENyZWF0ZSBhIGRlYnVnZ2VyIHdpdGggdGhlIGdpdmVuIGBuYW1lc3BhY2VgLlxuXHQqXG5cdCogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZVxuXHQqIEByZXR1cm4ge0Z1bmN0aW9ufVxuXHQqIEBhcGkgcHVibGljXG5cdCovXG5cdGZ1bmN0aW9uIGNyZWF0ZURlYnVnKG5hbWVzcGFjZSkge1xuXHRcdGxldCBwcmV2VGltZTtcblx0XHRsZXQgZW5hYmxlT3ZlcnJpZGUgPSBudWxsO1xuXG5cdFx0ZnVuY3Rpb24gZGVidWcoLi4uYXJncykge1xuXHRcdFx0Ly8gRGlzYWJsZWQ/XG5cdFx0XHRpZiAoIWRlYnVnLmVuYWJsZWQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBzZWxmID0gZGVidWc7XG5cblx0XHRcdC8vIFNldCBgZGlmZmAgdGltZXN0YW1wXG5cdFx0XHRjb25zdCBjdXJyID0gTnVtYmVyKG5ldyBEYXRlKCkpO1xuXHRcdFx0Y29uc3QgbXMgPSBjdXJyIC0gKHByZXZUaW1lIHx8IGN1cnIpO1xuXHRcdFx0c2VsZi5kaWZmID0gbXM7XG5cdFx0XHRzZWxmLnByZXYgPSBwcmV2VGltZTtcblx0XHRcdHNlbGYuY3VyciA9IGN1cnI7XG5cdFx0XHRwcmV2VGltZSA9IGN1cnI7XG5cblx0XHRcdGFyZ3NbMF0gPSBjcmVhdGVEZWJ1Zy5jb2VyY2UoYXJnc1swXSk7XG5cblx0XHRcdGlmICh0eXBlb2YgYXJnc1swXSAhPT0gJ3N0cmluZycpIHtcblx0XHRcdFx0Ly8gQW55dGhpbmcgZWxzZSBsZXQncyBpbnNwZWN0IHdpdGggJU9cblx0XHRcdFx0YXJncy51bnNoaWZ0KCclTycpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBBcHBseSBhbnkgYGZvcm1hdHRlcnNgIHRyYW5zZm9ybWF0aW9uc1xuXHRcdFx0bGV0IGluZGV4ID0gMDtcblx0XHRcdGFyZ3NbMF0gPSBhcmdzWzBdLnJlcGxhY2UoLyUoW2EtekEtWiVdKS9nLCAobWF0Y2gsIGZvcm1hdCkgPT4ge1xuXHRcdFx0XHQvLyBJZiB3ZSBlbmNvdW50ZXIgYW4gZXNjYXBlZCAlIHRoZW4gZG9uJ3QgaW5jcmVhc2UgdGhlIGFycmF5IGluZGV4XG5cdFx0XHRcdGlmIChtYXRjaCA9PT0gJyUlJykge1xuXHRcdFx0XHRcdHJldHVybiAnJSc7XG5cdFx0XHRcdH1cblx0XHRcdFx0aW5kZXgrKztcblx0XHRcdFx0Y29uc3QgZm9ybWF0dGVyID0gY3JlYXRlRGVidWcuZm9ybWF0dGVyc1tmb3JtYXRdO1xuXHRcdFx0XHRpZiAodHlwZW9mIGZvcm1hdHRlciA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRcdGNvbnN0IHZhbCA9IGFyZ3NbaW5kZXhdO1xuXHRcdFx0XHRcdG1hdGNoID0gZm9ybWF0dGVyLmNhbGwoc2VsZiwgdmFsKTtcblxuXHRcdFx0XHRcdC8vIE5vdyB3ZSBuZWVkIHRvIHJlbW92ZSBgYXJnc1tpbmRleF1gIHNpbmNlIGl0J3MgaW5saW5lZCBpbiB0aGUgYGZvcm1hdGBcblx0XHRcdFx0XHRhcmdzLnNwbGljZShpbmRleCwgMSk7XG5cdFx0XHRcdFx0aW5kZXgtLTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gbWF0Y2g7XG5cdFx0XHR9KTtcblxuXHRcdFx0Ly8gQXBwbHkgZW52LXNwZWNpZmljIGZvcm1hdHRpbmcgKGNvbG9ycywgZXRjLilcblx0XHRcdGNyZWF0ZURlYnVnLmZvcm1hdEFyZ3MuY2FsbChzZWxmLCBhcmdzKTtcblxuXHRcdFx0Y29uc3QgbG9nRm4gPSBzZWxmLmxvZyB8fCBjcmVhdGVEZWJ1Zy5sb2c7XG5cdFx0XHRsb2dGbi5hcHBseShzZWxmLCBhcmdzKTtcblx0XHR9XG5cblx0XHRkZWJ1Zy5uYW1lc3BhY2UgPSBuYW1lc3BhY2U7XG5cdFx0ZGVidWcudXNlQ29sb3JzID0gY3JlYXRlRGVidWcudXNlQ29sb3JzKCk7XG5cdFx0ZGVidWcuY29sb3IgPSBjcmVhdGVEZWJ1Zy5zZWxlY3RDb2xvcihuYW1lc3BhY2UpO1xuXHRcdGRlYnVnLmV4dGVuZCA9IGV4dGVuZDtcblx0XHRkZWJ1Zy5kZXN0cm95ID0gY3JlYXRlRGVidWcuZGVzdHJveTsgLy8gWFhYIFRlbXBvcmFyeS4gV2lsbCBiZSByZW1vdmVkIGluIHRoZSBuZXh0IG1ham9yIHJlbGVhc2UuXG5cblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZGVidWcsICdlbmFibGVkJywge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG5cdFx0XHRnZXQ6ICgpID0+IGVuYWJsZU92ZXJyaWRlID09PSBudWxsID8gY3JlYXRlRGVidWcuZW5hYmxlZChuYW1lc3BhY2UpIDogZW5hYmxlT3ZlcnJpZGUsXG5cdFx0XHRzZXQ6IHYgPT4ge1xuXHRcdFx0XHRlbmFibGVPdmVycmlkZSA9IHY7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHQvLyBFbnYtc3BlY2lmaWMgaW5pdGlhbGl6YXRpb24gbG9naWMgZm9yIGRlYnVnIGluc3RhbmNlc1xuXHRcdGlmICh0eXBlb2YgY3JlYXRlRGVidWcuaW5pdCA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0Y3JlYXRlRGVidWcuaW5pdChkZWJ1Zyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGRlYnVnO1xuXHR9XG5cblx0ZnVuY3Rpb24gZXh0ZW5kKG5hbWVzcGFjZSwgZGVsaW1pdGVyKSB7XG5cdFx0Y29uc3QgbmV3RGVidWcgPSBjcmVhdGVEZWJ1Zyh0aGlzLm5hbWVzcGFjZSArICh0eXBlb2YgZGVsaW1pdGVyID09PSAndW5kZWZpbmVkJyA/ICc6JyA6IGRlbGltaXRlcikgKyBuYW1lc3BhY2UpO1xuXHRcdG5ld0RlYnVnLmxvZyA9IHRoaXMubG9nO1xuXHRcdHJldHVybiBuZXdEZWJ1Zztcblx0fVxuXG5cdC8qKlxuXHQqIEVuYWJsZXMgYSBkZWJ1ZyBtb2RlIGJ5IG5hbWVzcGFjZXMuIFRoaXMgY2FuIGluY2x1ZGUgbW9kZXNcblx0KiBzZXBhcmF0ZWQgYnkgYSBjb2xvbiBhbmQgd2lsZGNhcmRzLlxuXHQqXG5cdCogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZXNcblx0KiBAYXBpIHB1YmxpY1xuXHQqL1xuXHRmdW5jdGlvbiBlbmFibGUobmFtZXNwYWNlcykge1xuXHRcdGNyZWF0ZURlYnVnLnNhdmUobmFtZXNwYWNlcyk7XG5cblx0XHRjcmVhdGVEZWJ1Zy5uYW1lcyA9IFtdO1xuXHRcdGNyZWF0ZURlYnVnLnNraXBzID0gW107XG5cblx0XHRsZXQgaTtcblx0XHRjb25zdCBzcGxpdCA9ICh0eXBlb2YgbmFtZXNwYWNlcyA9PT0gJ3N0cmluZycgPyBuYW1lc3BhY2VzIDogJycpLnNwbGl0KC9bXFxzLF0rLyk7XG5cdFx0Y29uc3QgbGVuID0gc3BsaXQubGVuZ3RoO1xuXG5cdFx0Zm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHRpZiAoIXNwbGl0W2ldKSB7XG5cdFx0XHRcdC8vIGlnbm9yZSBlbXB0eSBzdHJpbmdzXG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRuYW1lc3BhY2VzID0gc3BsaXRbaV0ucmVwbGFjZSgvXFwqL2csICcuKj8nKTtcblxuXHRcdFx0aWYgKG5hbWVzcGFjZXNbMF0gPT09ICctJykge1xuXHRcdFx0XHRjcmVhdGVEZWJ1Zy5za2lwcy5wdXNoKG5ldyBSZWdFeHAoJ14nICsgbmFtZXNwYWNlcy5zdWJzdHIoMSkgKyAnJCcpKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNyZWF0ZURlYnVnLm5hbWVzLnB1c2gobmV3IFJlZ0V4cCgnXicgKyBuYW1lc3BhY2VzICsgJyQnKSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCogRGlzYWJsZSBkZWJ1ZyBvdXRwdXQuXG5cdCpcblx0KiBAcmV0dXJuIHtTdHJpbmd9IG5hbWVzcGFjZXNcblx0KiBAYXBpIHB1YmxpY1xuXHQqL1xuXHRmdW5jdGlvbiBkaXNhYmxlKCkge1xuXHRcdGNvbnN0IG5hbWVzcGFjZXMgPSBbXG5cdFx0XHQuLi5jcmVhdGVEZWJ1Zy5uYW1lcy5tYXAodG9OYW1lc3BhY2UpLFxuXHRcdFx0Li4uY3JlYXRlRGVidWcuc2tpcHMubWFwKHRvTmFtZXNwYWNlKS5tYXAobmFtZXNwYWNlID0+ICctJyArIG5hbWVzcGFjZSlcblx0XHRdLmpvaW4oJywnKTtcblx0XHRjcmVhdGVEZWJ1Zy5lbmFibGUoJycpO1xuXHRcdHJldHVybiBuYW1lc3BhY2VzO1xuXHR9XG5cblx0LyoqXG5cdCogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiBtb2RlIG5hbWUgaXMgZW5hYmxlZCwgZmFsc2Ugb3RoZXJ3aXNlLlxuXHQqXG5cdCogQHBhcmFtIHtTdHJpbmd9IG5hbWVcblx0KiBAcmV0dXJuIHtCb29sZWFufVxuXHQqIEBhcGkgcHVibGljXG5cdCovXG5cdGZ1bmN0aW9uIGVuYWJsZWQobmFtZSkge1xuXHRcdGlmIChuYW1lW25hbWUubGVuZ3RoIC0gMV0gPT09ICcqJykge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0bGV0IGk7XG5cdFx0bGV0IGxlbjtcblxuXHRcdGZvciAoaSA9IDAsIGxlbiA9IGNyZWF0ZURlYnVnLnNraXBzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHRpZiAoY3JlYXRlRGVidWcuc2tpcHNbaV0udGVzdChuYW1lKSkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Zm9yIChpID0gMCwgbGVuID0gY3JlYXRlRGVidWcubmFtZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdGlmIChjcmVhdGVEZWJ1Zy5uYW1lc1tpXS50ZXN0KG5hbWUpKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdC8qKlxuXHQqIENvbnZlcnQgcmVnZXhwIHRvIG5hbWVzcGFjZVxuXHQqXG5cdCogQHBhcmFtIHtSZWdFeHB9IHJlZ3hlcFxuXHQqIEByZXR1cm4ge1N0cmluZ30gbmFtZXNwYWNlXG5cdCogQGFwaSBwcml2YXRlXG5cdCovXG5cdGZ1bmN0aW9uIHRvTmFtZXNwYWNlKHJlZ2V4cCkge1xuXHRcdHJldHVybiByZWdleHAudG9TdHJpbmcoKVxuXHRcdFx0LnN1YnN0cmluZygyLCByZWdleHAudG9TdHJpbmcoKS5sZW5ndGggLSAyKVxuXHRcdFx0LnJlcGxhY2UoL1xcLlxcKlxcPyQvLCAnKicpO1xuXHR9XG5cblx0LyoqXG5cdCogQ29lcmNlIGB2YWxgLlxuXHQqXG5cdCogQHBhcmFtIHtNaXhlZH0gdmFsXG5cdCogQHJldHVybiB7TWl4ZWR9XG5cdCogQGFwaSBwcml2YXRlXG5cdCovXG5cdGZ1bmN0aW9uIGNvZXJjZSh2YWwpIHtcblx0XHRpZiAodmFsIGluc3RhbmNlb2YgRXJyb3IpIHtcblx0XHRcdHJldHVybiB2YWwuc3RhY2sgfHwgdmFsLm1lc3NhZ2U7XG5cdFx0fVxuXHRcdHJldHVybiB2YWw7XG5cdH1cblxuXHQvKipcblx0KiBYWFggRE8gTk9UIFVTRS4gVGhpcyBpcyBhIHRlbXBvcmFyeSBzdHViIGZ1bmN0aW9uLlxuXHQqIFhYWCBJdCBXSUxMIGJlIHJlbW92ZWQgaW4gdGhlIG5leHQgbWFqb3IgcmVsZWFzZS5cblx0Ki9cblx0ZnVuY3Rpb24gZGVzdHJveSgpIHtcblx0XHRjb25zb2xlLndhcm4oJ0luc3RhbmNlIG1ldGhvZCBgZGVidWcuZGVzdHJveSgpYCBpcyBkZXByZWNhdGVkIGFuZCBubyBsb25nZXIgZG9lcyBhbnl0aGluZy4gSXQgd2lsbCBiZSByZW1vdmVkIGluIHRoZSBuZXh0IG1ham9yIHZlcnNpb24gb2YgYGRlYnVnYC4nKTtcblx0fVxuXG5cdGNyZWF0ZURlYnVnLmVuYWJsZShjcmVhdGVEZWJ1Zy5sb2FkKCkpO1xuXG5cdHJldHVybiBjcmVhdGVEZWJ1Zztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXR1cDtcbiIsIm1vZHVsZS5leHBvcnRzID0gKCgpID0+IHtcbiAgaWYgKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHNlbGY7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB3aW5kb3c7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbiAgfVxufSkoKTtcbiIsImNvbnN0IFNvY2tldCA9IHJlcXVpcmUoXCIuL3NvY2tldFwiKTtcblxubW9kdWxlLmV4cG9ydHMgPSAodXJpLCBvcHRzKSA9PiBuZXcgU29ja2V0KHVyaSwgb3B0cyk7XG5cbi8qKlxuICogRXhwb3NlIGRlcHMgZm9yIGxlZ2FjeSBjb21wYXRpYmlsaXR5XG4gKiBhbmQgc3RhbmRhbG9uZSBicm93c2VyIGFjY2Vzcy5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cy5Tb2NrZXQgPSBTb2NrZXQ7XG5tb2R1bGUuZXhwb3J0cy5wcm90b2NvbCA9IFNvY2tldC5wcm90b2NvbDsgLy8gdGhpcyBpcyBhbiBpbnRcbm1vZHVsZS5leHBvcnRzLlRyYW5zcG9ydCA9IHJlcXVpcmUoXCIuL3RyYW5zcG9ydFwiKTtcbm1vZHVsZS5leHBvcnRzLnRyYW5zcG9ydHMgPSByZXF1aXJlKFwiLi90cmFuc3BvcnRzL2luZGV4XCIpO1xubW9kdWxlLmV4cG9ydHMucGFyc2VyID0gcmVxdWlyZShcImVuZ2luZS5pby1wYXJzZXJcIik7XG4iLCJjb25zdCB0cmFuc3BvcnRzID0gcmVxdWlyZShcIi4vdHJhbnNwb3J0cy9pbmRleFwiKTtcbmNvbnN0IEVtaXR0ZXIgPSByZXF1aXJlKFwiY29tcG9uZW50LWVtaXR0ZXJcIik7XG5jb25zdCBkZWJ1ZyA9IHJlcXVpcmUoXCJkZWJ1Z1wiKShcImVuZ2luZS5pby1jbGllbnQ6c29ja2V0XCIpO1xuY29uc3QgcGFyc2VyID0gcmVxdWlyZShcImVuZ2luZS5pby1wYXJzZXJcIik7XG5jb25zdCBwYXJzZXVyaSA9IHJlcXVpcmUoXCJwYXJzZXVyaVwiKTtcbmNvbnN0IHBhcnNlcXMgPSByZXF1aXJlKFwicGFyc2Vxc1wiKTtcblxuY2xhc3MgU29ja2V0IGV4dGVuZHMgRW1pdHRlciB7XG4gIC8qKlxuICAgKiBTb2NrZXQgY29uc3RydWN0b3IuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfE9iamVjdH0gdXJpIG9yIG9wdGlvbnNcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG4gIGNvbnN0cnVjdG9yKHVyaSwgb3B0cyA9IHt9KSB7XG4gICAgc3VwZXIoKTtcblxuICAgIGlmICh1cmkgJiYgXCJvYmplY3RcIiA9PT0gdHlwZW9mIHVyaSkge1xuICAgICAgb3B0cyA9IHVyaTtcbiAgICAgIHVyaSA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHVyaSkge1xuICAgICAgdXJpID0gcGFyc2V1cmkodXJpKTtcbiAgICAgIG9wdHMuaG9zdG5hbWUgPSB1cmkuaG9zdDtcbiAgICAgIG9wdHMuc2VjdXJlID0gdXJpLnByb3RvY29sID09PSBcImh0dHBzXCIgfHwgdXJpLnByb3RvY29sID09PSBcIndzc1wiO1xuICAgICAgb3B0cy5wb3J0ID0gdXJpLnBvcnQ7XG4gICAgICBpZiAodXJpLnF1ZXJ5KSBvcHRzLnF1ZXJ5ID0gdXJpLnF1ZXJ5O1xuICAgIH0gZWxzZSBpZiAob3B0cy5ob3N0KSB7XG4gICAgICBvcHRzLmhvc3RuYW1lID0gcGFyc2V1cmkob3B0cy5ob3N0KS5ob3N0O1xuICAgIH1cblxuICAgIHRoaXMuc2VjdXJlID1cbiAgICAgIG51bGwgIT0gb3B0cy5zZWN1cmVcbiAgICAgICAgPyBvcHRzLnNlY3VyZVxuICAgICAgICA6IHR5cGVvZiBsb2NhdGlvbiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBcImh0dHBzOlwiID09PSBsb2NhdGlvbi5wcm90b2NvbDtcblxuICAgIGlmIChvcHRzLmhvc3RuYW1lICYmICFvcHRzLnBvcnQpIHtcbiAgICAgIC8vIGlmIG5vIHBvcnQgaXMgc3BlY2lmaWVkIG1hbnVhbGx5LCB1c2UgdGhlIHByb3RvY29sIGRlZmF1bHRcbiAgICAgIG9wdHMucG9ydCA9IHRoaXMuc2VjdXJlID8gXCI0NDNcIiA6IFwiODBcIjtcbiAgICB9XG5cbiAgICB0aGlzLmhvc3RuYW1lID1cbiAgICAgIG9wdHMuaG9zdG5hbWUgfHxcbiAgICAgICh0eXBlb2YgbG9jYXRpb24gIT09IFwidW5kZWZpbmVkXCIgPyBsb2NhdGlvbi5ob3N0bmFtZSA6IFwibG9jYWxob3N0XCIpO1xuICAgIHRoaXMucG9ydCA9XG4gICAgICBvcHRzLnBvcnQgfHxcbiAgICAgICh0eXBlb2YgbG9jYXRpb24gIT09IFwidW5kZWZpbmVkXCIgJiYgbG9jYXRpb24ucG9ydFxuICAgICAgICA/IGxvY2F0aW9uLnBvcnRcbiAgICAgICAgOiB0aGlzLnNlY3VyZVxuICAgICAgICA/IDQ0M1xuICAgICAgICA6IDgwKTtcblxuICAgIHRoaXMudHJhbnNwb3J0cyA9IG9wdHMudHJhbnNwb3J0cyB8fCBbXCJwb2xsaW5nXCIsIFwid2Vic29ja2V0XCJdO1xuICAgIHRoaXMucmVhZHlTdGF0ZSA9IFwiXCI7XG4gICAgdGhpcy53cml0ZUJ1ZmZlciA9IFtdO1xuICAgIHRoaXMucHJldkJ1ZmZlckxlbiA9IDA7XG5cbiAgICB0aGlzLm9wdHMgPSBPYmplY3QuYXNzaWduKFxuICAgICAge1xuICAgICAgICBwYXRoOiBcIi9lbmdpbmUuaW9cIixcbiAgICAgICAgYWdlbnQ6IGZhbHNlLFxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IGZhbHNlLFxuICAgICAgICB1cGdyYWRlOiB0cnVlLFxuICAgICAgICBqc29ucDogdHJ1ZSxcbiAgICAgICAgdGltZXN0YW1wUGFyYW06IFwidFwiLFxuICAgICAgICByZW1lbWJlclVwZ3JhZGU6IGZhbHNlLFxuICAgICAgICByZWplY3RVbmF1dGhvcml6ZWQ6IHRydWUsXG4gICAgICAgIHBlck1lc3NhZ2VEZWZsYXRlOiB7XG4gICAgICAgICAgdGhyZXNob2xkOiAxMDI0XG4gICAgICAgIH0sXG4gICAgICAgIHRyYW5zcG9ydE9wdGlvbnM6IHt9LFxuICAgICAgICBjbG9zZU9uQmVmb3JldW5sb2FkOiB0cnVlXG4gICAgICB9LFxuICAgICAgb3B0c1xuICAgICk7XG5cbiAgICB0aGlzLm9wdHMucGF0aCA9IHRoaXMub3B0cy5wYXRoLnJlcGxhY2UoL1xcLyQvLCBcIlwiKSArIFwiL1wiO1xuXG4gICAgaWYgKHR5cGVvZiB0aGlzLm9wdHMucXVlcnkgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIHRoaXMub3B0cy5xdWVyeSA9IHBhcnNlcXMuZGVjb2RlKHRoaXMub3B0cy5xdWVyeSk7XG4gICAgfVxuXG4gICAgLy8gc2V0IG9uIGhhbmRzaGFrZVxuICAgIHRoaXMuaWQgPSBudWxsO1xuICAgIHRoaXMudXBncmFkZXMgPSBudWxsO1xuICAgIHRoaXMucGluZ0ludGVydmFsID0gbnVsbDtcbiAgICB0aGlzLnBpbmdUaW1lb3V0ID0gbnVsbDtcblxuICAgIC8vIHNldCBvbiBoZWFydGJlYXRcbiAgICB0aGlzLnBpbmdUaW1lb3V0VGltZXIgPSBudWxsO1xuXG4gICAgaWYgKHR5cGVvZiBhZGRFdmVudExpc3RlbmVyID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIGlmICh0aGlzLm9wdHMuY2xvc2VPbkJlZm9yZXVubG9hZCkge1xuICAgICAgICAvLyBGaXJlZm94IGNsb3NlcyB0aGUgY29ubmVjdGlvbiB3aGVuIHRoZSBcImJlZm9yZXVubG9hZFwiIGV2ZW50IGlzIGVtaXR0ZWQgYnV0IG5vdCBDaHJvbWUuIFRoaXMgZXZlbnQgbGlzdGVuZXJcbiAgICAgICAgLy8gZW5zdXJlcyBldmVyeSBicm93c2VyIGJlaGF2ZXMgdGhlIHNhbWUgKG5vIFwiZGlzY29ubmVjdFwiIGV2ZW50IGF0IHRoZSBTb2NrZXQuSU8gbGV2ZWwgd2hlbiB0aGUgcGFnZSBpc1xuICAgICAgICAvLyBjbG9zZWQvcmVsb2FkZWQpXG4gICAgICAgIGFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgXCJiZWZvcmV1bmxvYWRcIixcbiAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy50cmFuc3BvcnQpIHtcbiAgICAgICAgICAgICAgLy8gc2lsZW50bHkgY2xvc2UgdGhlIHRyYW5zcG9ydFxuICAgICAgICAgICAgICB0aGlzLnRyYW5zcG9ydC5yZW1vdmVBbGxMaXN0ZW5lcnMoKTtcbiAgICAgICAgICAgICAgdGhpcy50cmFuc3BvcnQuY2xvc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGZhbHNlXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5ob3N0bmFtZSAhPT0gXCJsb2NhbGhvc3RcIikge1xuICAgICAgICB0aGlzLm9mZmxpbmVFdmVudExpc3RlbmVyID0gKCkgPT4ge1xuICAgICAgICAgIHRoaXMub25DbG9zZShcInRyYW5zcG9ydCBjbG9zZVwiKTtcbiAgICAgICAgfTtcbiAgICAgICAgYWRkRXZlbnRMaXN0ZW5lcihcIm9mZmxpbmVcIiwgdGhpcy5vZmZsaW5lRXZlbnRMaXN0ZW5lciwgZmFsc2UpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMub3BlbigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgdHJhbnNwb3J0IG9mIHRoZSBnaXZlbiB0eXBlLlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gdHJhbnNwb3J0IG5hbWVcbiAgICogQHJldHVybiB7VHJhbnNwb3J0fVxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIGNyZWF0ZVRyYW5zcG9ydChuYW1lKSB7XG4gICAgZGVidWcoJ2NyZWF0aW5nIHRyYW5zcG9ydCBcIiVzXCInLCBuYW1lKTtcbiAgICBjb25zdCBxdWVyeSA9IGNsb25lKHRoaXMub3B0cy5xdWVyeSk7XG5cbiAgICAvLyBhcHBlbmQgZW5naW5lLmlvIHByb3RvY29sIGlkZW50aWZpZXJcbiAgICBxdWVyeS5FSU8gPSBwYXJzZXIucHJvdG9jb2w7XG5cbiAgICAvLyB0cmFuc3BvcnQgbmFtZVxuICAgIHF1ZXJ5LnRyYW5zcG9ydCA9IG5hbWU7XG5cbiAgICAvLyBzZXNzaW9uIGlkIGlmIHdlIGFscmVhZHkgaGF2ZSBvbmVcbiAgICBpZiAodGhpcy5pZCkgcXVlcnkuc2lkID0gdGhpcy5pZDtcblxuICAgIGNvbnN0IG9wdHMgPSBPYmplY3QuYXNzaWduKFxuICAgICAge30sXG4gICAgICB0aGlzLm9wdHMudHJhbnNwb3J0T3B0aW9uc1tuYW1lXSxcbiAgICAgIHRoaXMub3B0cyxcbiAgICAgIHtcbiAgICAgICAgcXVlcnksXG4gICAgICAgIHNvY2tldDogdGhpcyxcbiAgICAgICAgaG9zdG5hbWU6IHRoaXMuaG9zdG5hbWUsXG4gICAgICAgIHNlY3VyZTogdGhpcy5zZWN1cmUsXG4gICAgICAgIHBvcnQ6IHRoaXMucG9ydFxuICAgICAgfVxuICAgICk7XG5cbiAgICBkZWJ1ZyhcIm9wdGlvbnM6ICVqXCIsIG9wdHMpO1xuXG4gICAgcmV0dXJuIG5ldyB0cmFuc3BvcnRzW25hbWVdKG9wdHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIHRyYW5zcG9ydCB0byB1c2UgYW5kIHN0YXJ0cyBwcm9iZS5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBvcGVuKCkge1xuICAgIGxldCB0cmFuc3BvcnQ7XG4gICAgaWYgKFxuICAgICAgdGhpcy5vcHRzLnJlbWVtYmVyVXBncmFkZSAmJlxuICAgICAgU29ja2V0LnByaW9yV2Vic29ja2V0U3VjY2VzcyAmJlxuICAgICAgdGhpcy50cmFuc3BvcnRzLmluZGV4T2YoXCJ3ZWJzb2NrZXRcIikgIT09IC0xXG4gICAgKSB7XG4gICAgICB0cmFuc3BvcnQgPSBcIndlYnNvY2tldFwiO1xuICAgIH0gZWxzZSBpZiAoMCA9PT0gdGhpcy50cmFuc3BvcnRzLmxlbmd0aCkge1xuICAgICAgLy8gRW1pdCBlcnJvciBvbiBuZXh0IHRpY2sgc28gaXQgY2FuIGJlIGxpc3RlbmVkIHRvXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5lbWl0KFwiZXJyb3JcIiwgXCJObyB0cmFuc3BvcnRzIGF2YWlsYWJsZVwiKTtcbiAgICAgIH0sIDApO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICB0cmFuc3BvcnQgPSB0aGlzLnRyYW5zcG9ydHNbMF07XG4gICAgfVxuICAgIHRoaXMucmVhZHlTdGF0ZSA9IFwib3BlbmluZ1wiO1xuXG4gICAgLy8gUmV0cnkgd2l0aCB0aGUgbmV4dCB0cmFuc3BvcnQgaWYgdGhlIHRyYW5zcG9ydCBpcyBkaXNhYmxlZCAoanNvbnA6IGZhbHNlKVxuICAgIHRyeSB7XG4gICAgICB0cmFuc3BvcnQgPSB0aGlzLmNyZWF0ZVRyYW5zcG9ydCh0cmFuc3BvcnQpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGRlYnVnKFwiZXJyb3Igd2hpbGUgY3JlYXRpbmcgdHJhbnNwb3J0OiAlc1wiLCBlKTtcbiAgICAgIHRoaXMudHJhbnNwb3J0cy5zaGlmdCgpO1xuICAgICAgdGhpcy5vcGVuKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdHJhbnNwb3J0Lm9wZW4oKTtcbiAgICB0aGlzLnNldFRyYW5zcG9ydCh0cmFuc3BvcnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGN1cnJlbnQgdHJhbnNwb3J0LiBEaXNhYmxlcyB0aGUgZXhpc3Rpbmcgb25lIChpZiBhbnkpLlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIHNldFRyYW5zcG9ydCh0cmFuc3BvcnQpIHtcbiAgICBkZWJ1ZyhcInNldHRpbmcgdHJhbnNwb3J0ICVzXCIsIHRyYW5zcG9ydC5uYW1lKTtcblxuICAgIGlmICh0aGlzLnRyYW5zcG9ydCkge1xuICAgICAgZGVidWcoXCJjbGVhcmluZyBleGlzdGluZyB0cmFuc3BvcnQgJXNcIiwgdGhpcy50cmFuc3BvcnQubmFtZSk7XG4gICAgICB0aGlzLnRyYW5zcG9ydC5yZW1vdmVBbGxMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICAvLyBzZXQgdXAgdHJhbnNwb3J0XG4gICAgdGhpcy50cmFuc3BvcnQgPSB0cmFuc3BvcnQ7XG5cbiAgICAvLyBzZXQgdXAgdHJhbnNwb3J0IGxpc3RlbmVyc1xuICAgIHRyYW5zcG9ydFxuICAgICAgLm9uKFwiZHJhaW5cIiwgdGhpcy5vbkRyYWluLmJpbmQodGhpcykpXG4gICAgICAub24oXCJwYWNrZXRcIiwgdGhpcy5vblBhY2tldC5iaW5kKHRoaXMpKVxuICAgICAgLm9uKFwiZXJyb3JcIiwgdGhpcy5vbkVycm9yLmJpbmQodGhpcykpXG4gICAgICAub24oXCJjbG9zZVwiLCAoKSA9PiB7XG4gICAgICAgIHRoaXMub25DbG9zZShcInRyYW5zcG9ydCBjbG9zZVwiKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb2JlcyBhIHRyYW5zcG9ydC5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IHRyYW5zcG9ydCBuYW1lXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgcHJvYmUobmFtZSkge1xuICAgIGRlYnVnKCdwcm9iaW5nIHRyYW5zcG9ydCBcIiVzXCInLCBuYW1lKTtcbiAgICBsZXQgdHJhbnNwb3J0ID0gdGhpcy5jcmVhdGVUcmFuc3BvcnQobmFtZSwgeyBwcm9iZTogMSB9KTtcbiAgICBsZXQgZmFpbGVkID0gZmFsc2U7XG5cbiAgICBTb2NrZXQucHJpb3JXZWJzb2NrZXRTdWNjZXNzID0gZmFsc2U7XG5cbiAgICBjb25zdCBvblRyYW5zcG9ydE9wZW4gPSAoKSA9PiB7XG4gICAgICBpZiAoZmFpbGVkKSByZXR1cm47XG5cbiAgICAgIGRlYnVnKCdwcm9iZSB0cmFuc3BvcnQgXCIlc1wiIG9wZW5lZCcsIG5hbWUpO1xuICAgICAgdHJhbnNwb3J0LnNlbmQoW3sgdHlwZTogXCJwaW5nXCIsIGRhdGE6IFwicHJvYmVcIiB9XSk7XG4gICAgICB0cmFuc3BvcnQub25jZShcInBhY2tldFwiLCBtc2cgPT4ge1xuICAgICAgICBpZiAoZmFpbGVkKSByZXR1cm47XG4gICAgICAgIGlmIChcInBvbmdcIiA9PT0gbXNnLnR5cGUgJiYgXCJwcm9iZVwiID09PSBtc2cuZGF0YSkge1xuICAgICAgICAgIGRlYnVnKCdwcm9iZSB0cmFuc3BvcnQgXCIlc1wiIHBvbmcnLCBuYW1lKTtcbiAgICAgICAgICB0aGlzLnVwZ3JhZGluZyA9IHRydWU7XG4gICAgICAgICAgdGhpcy5lbWl0KFwidXBncmFkaW5nXCIsIHRyYW5zcG9ydCk7XG4gICAgICAgICAgaWYgKCF0cmFuc3BvcnQpIHJldHVybjtcbiAgICAgICAgICBTb2NrZXQucHJpb3JXZWJzb2NrZXRTdWNjZXNzID0gXCJ3ZWJzb2NrZXRcIiA9PT0gdHJhbnNwb3J0Lm5hbWU7XG5cbiAgICAgICAgICBkZWJ1ZygncGF1c2luZyBjdXJyZW50IHRyYW5zcG9ydCBcIiVzXCInLCB0aGlzLnRyYW5zcG9ydC5uYW1lKTtcbiAgICAgICAgICB0aGlzLnRyYW5zcG9ydC5wYXVzZSgoKSA9PiB7XG4gICAgICAgICAgICBpZiAoZmFpbGVkKSByZXR1cm47XG4gICAgICAgICAgICBpZiAoXCJjbG9zZWRcIiA9PT0gdGhpcy5yZWFkeVN0YXRlKSByZXR1cm47XG4gICAgICAgICAgICBkZWJ1ZyhcImNoYW5naW5nIHRyYW5zcG9ydCBhbmQgc2VuZGluZyB1cGdyYWRlIHBhY2tldFwiKTtcblxuICAgICAgICAgICAgY2xlYW51cCgpO1xuXG4gICAgICAgICAgICB0aGlzLnNldFRyYW5zcG9ydCh0cmFuc3BvcnQpO1xuICAgICAgICAgICAgdHJhbnNwb3J0LnNlbmQoW3sgdHlwZTogXCJ1cGdyYWRlXCIgfV0pO1xuICAgICAgICAgICAgdGhpcy5lbWl0KFwidXBncmFkZVwiLCB0cmFuc3BvcnQpO1xuICAgICAgICAgICAgdHJhbnNwb3J0ID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMudXBncmFkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmZsdXNoKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGVidWcoJ3Byb2JlIHRyYW5zcG9ydCBcIiVzXCIgZmFpbGVkJywgbmFtZSk7XG4gICAgICAgICAgY29uc3QgZXJyID0gbmV3IEVycm9yKFwicHJvYmUgZXJyb3JcIik7XG4gICAgICAgICAgZXJyLnRyYW5zcG9ydCA9IHRyYW5zcG9ydC5uYW1lO1xuICAgICAgICAgIHRoaXMuZW1pdChcInVwZ3JhZGVFcnJvclwiLCBlcnIpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gZnJlZXplVHJhbnNwb3J0KCkge1xuICAgICAgaWYgKGZhaWxlZCkgcmV0dXJuO1xuXG4gICAgICAvLyBBbnkgY2FsbGJhY2sgY2FsbGVkIGJ5IHRyYW5zcG9ydCBzaG91bGQgYmUgaWdub3JlZCBzaW5jZSBub3dcbiAgICAgIGZhaWxlZCA9IHRydWU7XG5cbiAgICAgIGNsZWFudXAoKTtcblxuICAgICAgdHJhbnNwb3J0LmNsb3NlKCk7XG4gICAgICB0cmFuc3BvcnQgPSBudWxsO1xuICAgIH1cblxuICAgIC8vIEhhbmRsZSBhbnkgZXJyb3IgdGhhdCBoYXBwZW5zIHdoaWxlIHByb2JpbmdcbiAgICBjb25zdCBvbmVycm9yID0gZXJyID0+IHtcbiAgICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKFwicHJvYmUgZXJyb3I6IFwiICsgZXJyKTtcbiAgICAgIGVycm9yLnRyYW5zcG9ydCA9IHRyYW5zcG9ydC5uYW1lO1xuXG4gICAgICBmcmVlemVUcmFuc3BvcnQoKTtcblxuICAgICAgZGVidWcoJ3Byb2JlIHRyYW5zcG9ydCBcIiVzXCIgZmFpbGVkIGJlY2F1c2Ugb2YgZXJyb3I6ICVzJywgbmFtZSwgZXJyKTtcblxuICAgICAgdGhpcy5lbWl0KFwidXBncmFkZUVycm9yXCIsIGVycm9yKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gb25UcmFuc3BvcnRDbG9zZSgpIHtcbiAgICAgIG9uZXJyb3IoXCJ0cmFuc3BvcnQgY2xvc2VkXCIpO1xuICAgIH1cblxuICAgIC8vIFdoZW4gdGhlIHNvY2tldCBpcyBjbG9zZWQgd2hpbGUgd2UncmUgcHJvYmluZ1xuICAgIGZ1bmN0aW9uIG9uY2xvc2UoKSB7XG4gICAgICBvbmVycm9yKFwic29ja2V0IGNsb3NlZFwiKTtcbiAgICB9XG5cbiAgICAvLyBXaGVuIHRoZSBzb2NrZXQgaXMgdXBncmFkZWQgd2hpbGUgd2UncmUgcHJvYmluZ1xuICAgIGZ1bmN0aW9uIG9udXBncmFkZSh0bykge1xuICAgICAgaWYgKHRyYW5zcG9ydCAmJiB0by5uYW1lICE9PSB0cmFuc3BvcnQubmFtZSkge1xuICAgICAgICBkZWJ1ZygnXCIlc1wiIHdvcmtzIC0gYWJvcnRpbmcgXCIlc1wiJywgdG8ubmFtZSwgdHJhbnNwb3J0Lm5hbWUpO1xuICAgICAgICBmcmVlemVUcmFuc3BvcnQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZW1vdmUgYWxsIGxpc3RlbmVycyBvbiB0aGUgdHJhbnNwb3J0IGFuZCBvbiBzZWxmXG4gICAgY29uc3QgY2xlYW51cCA9ICgpID0+IHtcbiAgICAgIHRyYW5zcG9ydC5yZW1vdmVMaXN0ZW5lcihcIm9wZW5cIiwgb25UcmFuc3BvcnRPcGVuKTtcbiAgICAgIHRyYW5zcG9ydC5yZW1vdmVMaXN0ZW5lcihcImVycm9yXCIsIG9uZXJyb3IpO1xuICAgICAgdHJhbnNwb3J0LnJlbW92ZUxpc3RlbmVyKFwiY2xvc2VcIiwgb25UcmFuc3BvcnRDbG9zZSk7XG4gICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKFwiY2xvc2VcIiwgb25jbG9zZSk7XG4gICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKFwidXBncmFkaW5nXCIsIG9udXBncmFkZSk7XG4gICAgfTtcblxuICAgIHRyYW5zcG9ydC5vbmNlKFwib3BlblwiLCBvblRyYW5zcG9ydE9wZW4pO1xuICAgIHRyYW5zcG9ydC5vbmNlKFwiZXJyb3JcIiwgb25lcnJvcik7XG4gICAgdHJhbnNwb3J0Lm9uY2UoXCJjbG9zZVwiLCBvblRyYW5zcG9ydENsb3NlKTtcblxuICAgIHRoaXMub25jZShcImNsb3NlXCIsIG9uY2xvc2UpO1xuICAgIHRoaXMub25jZShcInVwZ3JhZGluZ1wiLCBvbnVwZ3JhZGUpO1xuXG4gICAgdHJhbnNwb3J0Lm9wZW4oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiBjb25uZWN0aW9uIGlzIGRlZW1lZCBvcGVuLlxuICAgKlxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cbiAgb25PcGVuKCkge1xuICAgIGRlYnVnKFwic29ja2V0IG9wZW5cIik7XG4gICAgdGhpcy5yZWFkeVN0YXRlID0gXCJvcGVuXCI7XG4gICAgU29ja2V0LnByaW9yV2Vic29ja2V0U3VjY2VzcyA9IFwid2Vic29ja2V0XCIgPT09IHRoaXMudHJhbnNwb3J0Lm5hbWU7XG4gICAgdGhpcy5lbWl0KFwib3BlblwiKTtcbiAgICB0aGlzLmZsdXNoKCk7XG5cbiAgICAvLyB3ZSBjaGVjayBmb3IgYHJlYWR5U3RhdGVgIGluIGNhc2UgYW4gYG9wZW5gXG4gICAgLy8gbGlzdGVuZXIgYWxyZWFkeSBjbG9zZWQgdGhlIHNvY2tldFxuICAgIGlmIChcbiAgICAgIFwib3BlblwiID09PSB0aGlzLnJlYWR5U3RhdGUgJiZcbiAgICAgIHRoaXMub3B0cy51cGdyYWRlICYmXG4gICAgICB0aGlzLnRyYW5zcG9ydC5wYXVzZVxuICAgICkge1xuICAgICAgZGVidWcoXCJzdGFydGluZyB1cGdyYWRlIHByb2Jlc1wiKTtcbiAgICAgIGxldCBpID0gMDtcbiAgICAgIGNvbnN0IGwgPSB0aGlzLnVwZ3JhZGVzLmxlbmd0aDtcbiAgICAgIGZvciAoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIHRoaXMucHJvYmUodGhpcy51cGdyYWRlc1tpXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgYSBwYWNrZXQuXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgb25QYWNrZXQocGFja2V0KSB7XG4gICAgaWYgKFxuICAgICAgXCJvcGVuaW5nXCIgPT09IHRoaXMucmVhZHlTdGF0ZSB8fFxuICAgICAgXCJvcGVuXCIgPT09IHRoaXMucmVhZHlTdGF0ZSB8fFxuICAgICAgXCJjbG9zaW5nXCIgPT09IHRoaXMucmVhZHlTdGF0ZVxuICAgICkge1xuICAgICAgZGVidWcoJ3NvY2tldCByZWNlaXZlOiB0eXBlIFwiJXNcIiwgZGF0YSBcIiVzXCInLCBwYWNrZXQudHlwZSwgcGFja2V0LmRhdGEpO1xuXG4gICAgICB0aGlzLmVtaXQoXCJwYWNrZXRcIiwgcGFja2V0KTtcblxuICAgICAgLy8gU29ja2V0IGlzIGxpdmUgLSBhbnkgcGFja2V0IGNvdW50c1xuICAgICAgdGhpcy5lbWl0KFwiaGVhcnRiZWF0XCIpO1xuXG4gICAgICBzd2l0Y2ggKHBhY2tldC50eXBlKSB7XG4gICAgICAgIGNhc2UgXCJvcGVuXCI6XG4gICAgICAgICAgdGhpcy5vbkhhbmRzaGFrZShKU09OLnBhcnNlKHBhY2tldC5kYXRhKSk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcInBpbmdcIjpcbiAgICAgICAgICB0aGlzLnJlc2V0UGluZ1RpbWVvdXQoKTtcbiAgICAgICAgICB0aGlzLnNlbmRQYWNrZXQoXCJwb25nXCIpO1xuICAgICAgICAgIHRoaXMuZW1pdChcInBvbmdcIik7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcImVycm9yXCI6XG4gICAgICAgICAgY29uc3QgZXJyID0gbmV3IEVycm9yKFwic2VydmVyIGVycm9yXCIpO1xuICAgICAgICAgIGVyci5jb2RlID0gcGFja2V0LmRhdGE7XG4gICAgICAgICAgdGhpcy5vbkVycm9yKGVycik7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcIm1lc3NhZ2VcIjpcbiAgICAgICAgICB0aGlzLmVtaXQoXCJkYXRhXCIsIHBhY2tldC5kYXRhKTtcbiAgICAgICAgICB0aGlzLmVtaXQoXCJtZXNzYWdlXCIsIHBhY2tldC5kYXRhKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZGVidWcoJ3BhY2tldCByZWNlaXZlZCB3aXRoIHNvY2tldCByZWFkeVN0YXRlIFwiJXNcIicsIHRoaXMucmVhZHlTdGF0ZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCB1cG9uIGhhbmRzaGFrZSBjb21wbGV0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gaGFuZHNoYWtlIG9ialxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIG9uSGFuZHNoYWtlKGRhdGEpIHtcbiAgICB0aGlzLmVtaXQoXCJoYW5kc2hha2VcIiwgZGF0YSk7XG4gICAgdGhpcy5pZCA9IGRhdGEuc2lkO1xuICAgIHRoaXMudHJhbnNwb3J0LnF1ZXJ5LnNpZCA9IGRhdGEuc2lkO1xuICAgIHRoaXMudXBncmFkZXMgPSB0aGlzLmZpbHRlclVwZ3JhZGVzKGRhdGEudXBncmFkZXMpO1xuICAgIHRoaXMucGluZ0ludGVydmFsID0gZGF0YS5waW5nSW50ZXJ2YWw7XG4gICAgdGhpcy5waW5nVGltZW91dCA9IGRhdGEucGluZ1RpbWVvdXQ7XG4gICAgdGhpcy5vbk9wZW4oKTtcbiAgICAvLyBJbiBjYXNlIG9wZW4gaGFuZGxlciBjbG9zZXMgc29ja2V0XG4gICAgaWYgKFwiY2xvc2VkXCIgPT09IHRoaXMucmVhZHlTdGF0ZSkgcmV0dXJuO1xuICAgIHRoaXMucmVzZXRQaW5nVGltZW91dCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgYW5kIHJlc2V0cyBwaW5nIHRpbWVvdXQgdGltZXIgYmFzZWQgb24gc2VydmVyIHBpbmdzLlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIHJlc2V0UGluZ1RpbWVvdXQoKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMucGluZ1RpbWVvdXRUaW1lcik7XG4gICAgdGhpcy5waW5nVGltZW91dFRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLm9uQ2xvc2UoXCJwaW5nIHRpbWVvdXRcIik7XG4gICAgfSwgdGhpcy5waW5nSW50ZXJ2YWwgKyB0aGlzLnBpbmdUaW1lb3V0KTtcbiAgICBpZiAodGhpcy5vcHRzLmF1dG9VbnJlZikge1xuICAgICAgdGhpcy5waW5nVGltZW91dFRpbWVyLnVucmVmKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCBvbiBgZHJhaW5gIGV2ZW50XG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgb25EcmFpbigpIHtcbiAgICB0aGlzLndyaXRlQnVmZmVyLnNwbGljZSgwLCB0aGlzLnByZXZCdWZmZXJMZW4pO1xuXG4gICAgLy8gc2V0dGluZyBwcmV2QnVmZmVyTGVuID0gMCBpcyB2ZXJ5IGltcG9ydGFudFxuICAgIC8vIGZvciBleGFtcGxlLCB3aGVuIHVwZ3JhZGluZywgdXBncmFkZSBwYWNrZXQgaXMgc2VudCBvdmVyLFxuICAgIC8vIGFuZCBhIG5vbnplcm8gcHJldkJ1ZmZlckxlbiBjb3VsZCBjYXVzZSBwcm9ibGVtcyBvbiBgZHJhaW5gXG4gICAgdGhpcy5wcmV2QnVmZmVyTGVuID0gMDtcblxuICAgIGlmICgwID09PSB0aGlzLndyaXRlQnVmZmVyLmxlbmd0aCkge1xuICAgICAgdGhpcy5lbWl0KFwiZHJhaW5cIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZmx1c2goKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRmx1c2ggd3JpdGUgYnVmZmVycy5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBmbHVzaCgpIHtcbiAgICBpZiAoXG4gICAgICBcImNsb3NlZFwiICE9PSB0aGlzLnJlYWR5U3RhdGUgJiZcbiAgICAgIHRoaXMudHJhbnNwb3J0LndyaXRhYmxlICYmXG4gICAgICAhdGhpcy51cGdyYWRpbmcgJiZcbiAgICAgIHRoaXMud3JpdGVCdWZmZXIubGVuZ3RoXG4gICAgKSB7XG4gICAgICBkZWJ1ZyhcImZsdXNoaW5nICVkIHBhY2tldHMgaW4gc29ja2V0XCIsIHRoaXMud3JpdGVCdWZmZXIubGVuZ3RoKTtcbiAgICAgIHRoaXMudHJhbnNwb3J0LnNlbmQodGhpcy53cml0ZUJ1ZmZlcik7XG4gICAgICAvLyBrZWVwIHRyYWNrIG9mIGN1cnJlbnQgbGVuZ3RoIG9mIHdyaXRlQnVmZmVyXG4gICAgICAvLyBzcGxpY2Ugd3JpdGVCdWZmZXIgYW5kIGNhbGxiYWNrQnVmZmVyIG9uIGBkcmFpbmBcbiAgICAgIHRoaXMucHJldkJ1ZmZlckxlbiA9IHRoaXMud3JpdGVCdWZmZXIubGVuZ3RoO1xuICAgICAgdGhpcy5lbWl0KFwiZmx1c2hcIik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNlbmRzIGEgbWVzc2FnZS5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2UuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIGZ1bmN0aW9uLlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucy5cbiAgICogQHJldHVybiB7U29ja2V0fSBmb3IgY2hhaW5pbmcuXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuICB3cml0ZShtc2csIG9wdGlvbnMsIGZuKSB7XG4gICAgdGhpcy5zZW5kUGFja2V0KFwibWVzc2FnZVwiLCBtc2csIG9wdGlvbnMsIGZuKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNlbmQobXNnLCBvcHRpb25zLCBmbikge1xuICAgIHRoaXMuc2VuZFBhY2tldChcIm1lc3NhZ2VcIiwgbXNnLCBvcHRpb25zLCBmbik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogU2VuZHMgYSBwYWNrZXQuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwYWNrZXQgdHlwZS5cbiAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGEuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBmdW5jdGlvbi5cbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBzZW5kUGFja2V0KHR5cGUsIGRhdGEsIG9wdGlvbnMsIGZuKSB7XG4gICAgaWYgKFwiZnVuY3Rpb25cIiA9PT0gdHlwZW9mIGRhdGEpIHtcbiAgICAgIGZuID0gZGF0YTtcbiAgICAgIGRhdGEgPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgaWYgKFwiZnVuY3Rpb25cIiA9PT0gdHlwZW9mIG9wdGlvbnMpIHtcbiAgICAgIGZuID0gb3B0aW9ucztcbiAgICAgIG9wdGlvbnMgPSBudWxsO1xuICAgIH1cblxuICAgIGlmIChcImNsb3NpbmdcIiA9PT0gdGhpcy5yZWFkeVN0YXRlIHx8IFwiY2xvc2VkXCIgPT09IHRoaXMucmVhZHlTdGF0ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIG9wdGlvbnMuY29tcHJlc3MgPSBmYWxzZSAhPT0gb3B0aW9ucy5jb21wcmVzcztcblxuICAgIGNvbnN0IHBhY2tldCA9IHtcbiAgICAgIHR5cGU6IHR5cGUsXG4gICAgICBkYXRhOiBkYXRhLFxuICAgICAgb3B0aW9uczogb3B0aW9uc1xuICAgIH07XG4gICAgdGhpcy5lbWl0KFwicGFja2V0Q3JlYXRlXCIsIHBhY2tldCk7XG4gICAgdGhpcy53cml0ZUJ1ZmZlci5wdXNoKHBhY2tldCk7XG4gICAgaWYgKGZuKSB0aGlzLm9uY2UoXCJmbHVzaFwiLCBmbik7XG4gICAgdGhpcy5mbHVzaCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsb3NlcyB0aGUgY29ubmVjdGlvbi5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBjbG9zZSgpIHtcbiAgICBjb25zdCBjbG9zZSA9ICgpID0+IHtcbiAgICAgIHRoaXMub25DbG9zZShcImZvcmNlZCBjbG9zZVwiKTtcbiAgICAgIGRlYnVnKFwic29ja2V0IGNsb3NpbmcgLSB0ZWxsaW5nIHRyYW5zcG9ydCB0byBjbG9zZVwiKTtcbiAgICAgIHRoaXMudHJhbnNwb3J0LmNsb3NlKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGNsZWFudXBBbmRDbG9zZSA9ICgpID0+IHtcbiAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIoXCJ1cGdyYWRlXCIsIGNsZWFudXBBbmRDbG9zZSk7XG4gICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKFwidXBncmFkZUVycm9yXCIsIGNsZWFudXBBbmRDbG9zZSk7XG4gICAgICBjbG9zZSgpO1xuICAgIH07XG5cbiAgICBjb25zdCB3YWl0Rm9yVXBncmFkZSA9ICgpID0+IHtcbiAgICAgIC8vIHdhaXQgZm9yIHVwZ3JhZGUgdG8gZmluaXNoIHNpbmNlIHdlIGNhbid0IHNlbmQgcGFja2V0cyB3aGlsZSBwYXVzaW5nIGEgdHJhbnNwb3J0XG4gICAgICB0aGlzLm9uY2UoXCJ1cGdyYWRlXCIsIGNsZWFudXBBbmRDbG9zZSk7XG4gICAgICB0aGlzLm9uY2UoXCJ1cGdyYWRlRXJyb3JcIiwgY2xlYW51cEFuZENsb3NlKTtcbiAgICB9O1xuXG4gICAgaWYgKFwib3BlbmluZ1wiID09PSB0aGlzLnJlYWR5U3RhdGUgfHwgXCJvcGVuXCIgPT09IHRoaXMucmVhZHlTdGF0ZSkge1xuICAgICAgdGhpcy5yZWFkeVN0YXRlID0gXCJjbG9zaW5nXCI7XG5cbiAgICAgIGlmICh0aGlzLndyaXRlQnVmZmVyLmxlbmd0aCkge1xuICAgICAgICB0aGlzLm9uY2UoXCJkcmFpblwiLCAoKSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMudXBncmFkaW5nKSB7XG4gICAgICAgICAgICB3YWl0Rm9yVXBncmFkZSgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjbG9zZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMudXBncmFkaW5nKSB7XG4gICAgICAgIHdhaXRGb3JVcGdyYWRlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjbG9zZSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCB1cG9uIHRyYW5zcG9ydCBlcnJvclxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIG9uRXJyb3IoZXJyKSB7XG4gICAgZGVidWcoXCJzb2NrZXQgZXJyb3IgJWpcIiwgZXJyKTtcbiAgICBTb2NrZXQucHJpb3JXZWJzb2NrZXRTdWNjZXNzID0gZmFsc2U7XG4gICAgdGhpcy5lbWl0KFwiZXJyb3JcIiwgZXJyKTtcbiAgICB0aGlzLm9uQ2xvc2UoXCJ0cmFuc3BvcnQgZXJyb3JcIiwgZXJyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgdXBvbiB0cmFuc3BvcnQgY2xvc2UuXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgb25DbG9zZShyZWFzb24sIGRlc2MpIHtcbiAgICBpZiAoXG4gICAgICBcIm9wZW5pbmdcIiA9PT0gdGhpcy5yZWFkeVN0YXRlIHx8XG4gICAgICBcIm9wZW5cIiA9PT0gdGhpcy5yZWFkeVN0YXRlIHx8XG4gICAgICBcImNsb3NpbmdcIiA9PT0gdGhpcy5yZWFkeVN0YXRlXG4gICAgKSB7XG4gICAgICBkZWJ1Zygnc29ja2V0IGNsb3NlIHdpdGggcmVhc29uOiBcIiVzXCInLCByZWFzb24pO1xuXG4gICAgICAvLyBjbGVhciB0aW1lcnNcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLnBpbmdJbnRlcnZhbFRpbWVyKTtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLnBpbmdUaW1lb3V0VGltZXIpO1xuXG4gICAgICAvLyBzdG9wIGV2ZW50IGZyb20gZmlyaW5nIGFnYWluIGZvciB0cmFuc3BvcnRcbiAgICAgIHRoaXMudHJhbnNwb3J0LnJlbW92ZUFsbExpc3RlbmVycyhcImNsb3NlXCIpO1xuXG4gICAgICAvLyBlbnN1cmUgdHJhbnNwb3J0IHdvbid0IHN0YXkgb3BlblxuICAgICAgdGhpcy50cmFuc3BvcnQuY2xvc2UoKTtcblxuICAgICAgLy8gaWdub3JlIGZ1cnRoZXIgdHJhbnNwb3J0IGNvbW11bmljYXRpb25cbiAgICAgIHRoaXMudHJhbnNwb3J0LnJlbW92ZUFsbExpc3RlbmVycygpO1xuXG4gICAgICBpZiAodHlwZW9mIHJlbW92ZUV2ZW50TGlzdGVuZXIgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZW1vdmVFdmVudExpc3RlbmVyKFwib2ZmbGluZVwiLCB0aGlzLm9mZmxpbmVFdmVudExpc3RlbmVyLCBmYWxzZSk7XG4gICAgICB9XG5cbiAgICAgIC8vIHNldCByZWFkeSBzdGF0ZVxuICAgICAgdGhpcy5yZWFkeVN0YXRlID0gXCJjbG9zZWRcIjtcblxuICAgICAgLy8gY2xlYXIgc2Vzc2lvbiBpZFxuICAgICAgdGhpcy5pZCA9IG51bGw7XG5cbiAgICAgIC8vIGVtaXQgY2xvc2UgZXZlbnRcbiAgICAgIHRoaXMuZW1pdChcImNsb3NlXCIsIHJlYXNvbiwgZGVzYyk7XG5cbiAgICAgIC8vIGNsZWFuIGJ1ZmZlcnMgYWZ0ZXIsIHNvIHVzZXJzIGNhbiBzdGlsbFxuICAgICAgLy8gZ3JhYiB0aGUgYnVmZmVycyBvbiBgY2xvc2VgIGV2ZW50XG4gICAgICB0aGlzLndyaXRlQnVmZmVyID0gW107XG4gICAgICB0aGlzLnByZXZCdWZmZXJMZW4gPSAwO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBGaWx0ZXJzIHVwZ3JhZGVzLCByZXR1cm5pbmcgb25seSB0aG9zZSBtYXRjaGluZyBjbGllbnQgdHJhbnNwb3J0cy5cbiAgICpcbiAgICogQHBhcmFtIHtBcnJheX0gc2VydmVyIHVwZ3JhZGVzXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKlxuICAgKi9cbiAgZmlsdGVyVXBncmFkZXModXBncmFkZXMpIHtcbiAgICBjb25zdCBmaWx0ZXJlZFVwZ3JhZGVzID0gW107XG4gICAgbGV0IGkgPSAwO1xuICAgIGNvbnN0IGogPSB1cGdyYWRlcy5sZW5ndGg7XG4gICAgZm9yICg7IGkgPCBqOyBpKyspIHtcbiAgICAgIGlmICh+dGhpcy50cmFuc3BvcnRzLmluZGV4T2YodXBncmFkZXNbaV0pKVxuICAgICAgICBmaWx0ZXJlZFVwZ3JhZGVzLnB1c2godXBncmFkZXNbaV0pO1xuICAgIH1cbiAgICByZXR1cm4gZmlsdGVyZWRVcGdyYWRlcztcbiAgfVxufVxuXG5Tb2NrZXQucHJpb3JXZWJzb2NrZXRTdWNjZXNzID0gZmFsc2U7XG5cbi8qKlxuICogUHJvdG9jb2wgdmVyc2lvbi5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblNvY2tldC5wcm90b2NvbCA9IHBhcnNlci5wcm90b2NvbDsgLy8gdGhpcyBpcyBhbiBpbnRcblxuZnVuY3Rpb24gY2xvbmUob2JqKSB7XG4gIGNvbnN0IG8gPSB7fTtcbiAgZm9yIChsZXQgaSBpbiBvYmopIHtcbiAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICBvW2ldID0gb2JqW2ldO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTb2NrZXQ7XG4iLCJjb25zdCBwYXJzZXIgPSByZXF1aXJlKFwiZW5naW5lLmlvLXBhcnNlclwiKTtcbmNvbnN0IEVtaXR0ZXIgPSByZXF1aXJlKFwiY29tcG9uZW50LWVtaXR0ZXJcIik7XG5jb25zdCBkZWJ1ZyA9IHJlcXVpcmUoXCJkZWJ1Z1wiKShcImVuZ2luZS5pby1jbGllbnQ6dHJhbnNwb3J0XCIpO1xuXG5jbGFzcyBUcmFuc3BvcnQgZXh0ZW5kcyBFbWl0dGVyIHtcbiAgLyoqXG4gICAqIFRyYW5zcG9ydCBhYnN0cmFjdCBjb25zdHJ1Y3Rvci5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMuXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgY29uc3RydWN0b3Iob3B0cykge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLm9wdHMgPSBvcHRzO1xuICAgIHRoaXMucXVlcnkgPSBvcHRzLnF1ZXJ5O1xuICAgIHRoaXMucmVhZHlTdGF0ZSA9IFwiXCI7XG4gICAgdGhpcy5zb2NrZXQgPSBvcHRzLnNvY2tldDtcbiAgfVxuXG4gIC8qKlxuICAgKiBFbWl0cyBhbiBlcnJvci5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICAgKiBAcmV0dXJuIHtUcmFuc3BvcnR9IGZvciBjaGFpbmluZ1xuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cbiAgb25FcnJvcihtc2csIGRlc2MpIHtcbiAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IobXNnKTtcbiAgICBlcnIudHlwZSA9IFwiVHJhbnNwb3J0RXJyb3JcIjtcbiAgICBlcnIuZGVzY3JpcHRpb24gPSBkZXNjO1xuICAgIHRoaXMuZW1pdChcImVycm9yXCIsIGVycik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogT3BlbnMgdGhlIHRyYW5zcG9ydC5cbiAgICpcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG4gIG9wZW4oKSB7XG4gICAgaWYgKFwiY2xvc2VkXCIgPT09IHRoaXMucmVhZHlTdGF0ZSB8fCBcIlwiID09PSB0aGlzLnJlYWR5U3RhdGUpIHtcbiAgICAgIHRoaXMucmVhZHlTdGF0ZSA9IFwib3BlbmluZ1wiO1xuICAgICAgdGhpcy5kb09wZW4oKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBDbG9zZXMgdGhlIHRyYW5zcG9ydC5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBjbG9zZSgpIHtcbiAgICBpZiAoXCJvcGVuaW5nXCIgPT09IHRoaXMucmVhZHlTdGF0ZSB8fCBcIm9wZW5cIiA9PT0gdGhpcy5yZWFkeVN0YXRlKSB7XG4gICAgICB0aGlzLmRvQ2xvc2UoKTtcbiAgICAgIHRoaXMub25DbG9zZSgpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbmRzIG11bHRpcGxlIHBhY2tldHMuXG4gICAqXG4gICAqIEBwYXJhbSB7QXJyYXl9IHBhY2tldHNcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBzZW5kKHBhY2tldHMpIHtcbiAgICBpZiAoXCJvcGVuXCIgPT09IHRoaXMucmVhZHlTdGF0ZSkge1xuICAgICAgdGhpcy53cml0ZShwYWNrZXRzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gdGhpcyBtaWdodCBoYXBwZW4gaWYgdGhlIHRyYW5zcG9ydCB3YXMgc2lsZW50bHkgY2xvc2VkIGluIHRoZSBiZWZvcmV1bmxvYWQgZXZlbnQgaGFuZGxlclxuICAgICAgZGVidWcoXCJ0cmFuc3BvcnQgaXMgbm90IG9wZW4sIGRpc2NhcmRpbmcgcGFja2V0c1wiKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIHVwb24gb3BlblxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIG9uT3BlbigpIHtcbiAgICB0aGlzLnJlYWR5U3RhdGUgPSBcIm9wZW5cIjtcbiAgICB0aGlzLndyaXRhYmxlID0gdHJ1ZTtcbiAgICB0aGlzLmVtaXQoXCJvcGVuXCIpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aXRoIGRhdGEuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgb25EYXRhKGRhdGEpIHtcbiAgICBjb25zdCBwYWNrZXQgPSBwYXJzZXIuZGVjb2RlUGFja2V0KGRhdGEsIHRoaXMuc29ja2V0LmJpbmFyeVR5cGUpO1xuICAgIHRoaXMub25QYWNrZXQocGFja2V0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2l0aCBhIGRlY29kZWQgcGFja2V0LlxuICAgKi9cbiAgb25QYWNrZXQocGFja2V0KSB7XG4gICAgdGhpcy5lbWl0KFwicGFja2V0XCIsIHBhY2tldCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIHVwb24gY2xvc2UuXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgb25DbG9zZSgpIHtcbiAgICB0aGlzLnJlYWR5U3RhdGUgPSBcImNsb3NlZFwiO1xuICAgIHRoaXMuZW1pdChcImNsb3NlXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVHJhbnNwb3J0O1xuIiwiY29uc3QgWE1MSHR0cFJlcXVlc3QgPSByZXF1aXJlKFwiLi4vLi4vY29udHJpYi94bWxodHRwcmVxdWVzdC1zc2wvWE1MSHR0cFJlcXVlc3RcIik7XG5jb25zdCBYSFIgPSByZXF1aXJlKFwiLi9wb2xsaW5nLXhoclwiKTtcbmNvbnN0IEpTT05QID0gcmVxdWlyZShcIi4vcG9sbGluZy1qc29ucFwiKTtcbmNvbnN0IHdlYnNvY2tldCA9IHJlcXVpcmUoXCIuL3dlYnNvY2tldFwiKTtcblxuZXhwb3J0cy5wb2xsaW5nID0gcG9sbGluZztcbmV4cG9ydHMud2Vic29ja2V0ID0gd2Vic29ja2V0O1xuXG4vKipcbiAqIFBvbGxpbmcgdHJhbnNwb3J0IHBvbHltb3JwaGljIGNvbnN0cnVjdG9yLlxuICogRGVjaWRlcyBvbiB4aHIgdnMganNvbnAgYmFzZWQgb24gZmVhdHVyZSBkZXRlY3Rpb24uXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gcG9sbGluZyhvcHRzKSB7XG4gIGxldCB4aHI7XG4gIGxldCB4ZCA9IGZhbHNlO1xuICBsZXQgeHMgPSBmYWxzZTtcbiAgY29uc3QganNvbnAgPSBmYWxzZSAhPT0gb3B0cy5qc29ucDtcblxuICBpZiAodHlwZW9mIGxvY2F0aW9uICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY29uc3QgaXNTU0wgPSBcImh0dHBzOlwiID09PSBsb2NhdGlvbi5wcm90b2NvbDtcbiAgICBsZXQgcG9ydCA9IGxvY2F0aW9uLnBvcnQ7XG5cbiAgICAvLyBzb21lIHVzZXIgYWdlbnRzIGhhdmUgZW1wdHkgYGxvY2F0aW9uLnBvcnRgXG4gICAgaWYgKCFwb3J0KSB7XG4gICAgICBwb3J0ID0gaXNTU0wgPyA0NDMgOiA4MDtcbiAgICB9XG5cbiAgICB4ZCA9IG9wdHMuaG9zdG5hbWUgIT09IGxvY2F0aW9uLmhvc3RuYW1lIHx8IHBvcnQgIT09IG9wdHMucG9ydDtcbiAgICB4cyA9IG9wdHMuc2VjdXJlICE9PSBpc1NTTDtcbiAgfVxuXG4gIG9wdHMueGRvbWFpbiA9IHhkO1xuICBvcHRzLnhzY2hlbWUgPSB4cztcbiAgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KG9wdHMpO1xuXG4gIGlmIChcIm9wZW5cIiBpbiB4aHIgJiYgIW9wdHMuZm9yY2VKU09OUCkge1xuICAgIHJldHVybiBuZXcgWEhSKG9wdHMpO1xuICB9IGVsc2Uge1xuICAgIGlmICghanNvbnApIHRocm93IG5ldyBFcnJvcihcIkpTT05QIGRpc2FibGVkXCIpO1xuICAgIHJldHVybiBuZXcgSlNPTlAob3B0cyk7XG4gIH1cbn1cbiIsImNvbnN0IFBvbGxpbmcgPSByZXF1aXJlKFwiLi9wb2xsaW5nXCIpO1xuY29uc3QgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoXCIuLi9nbG9iYWxUaGlzXCIpO1xuXG5jb25zdCByTmV3bGluZSA9IC9cXG4vZztcbmNvbnN0IHJFc2NhcGVkTmV3bGluZSA9IC9cXFxcbi9nO1xuXG4vKipcbiAqIEdsb2JhbCBKU09OUCBjYWxsYmFja3MuXG4gKi9cblxubGV0IGNhbGxiYWNrcztcblxuY2xhc3MgSlNPTlBQb2xsaW5nIGV4dGVuZHMgUG9sbGluZyB7XG4gIC8qKlxuICAgKiBKU09OUCBQb2xsaW5nIGNvbnN0cnVjdG9yLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cy5cbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG4gIGNvbnN0cnVjdG9yKG9wdHMpIHtcbiAgICBzdXBlcihvcHRzKTtcblxuICAgIHRoaXMucXVlcnkgPSB0aGlzLnF1ZXJ5IHx8IHt9O1xuXG4gICAgLy8gZGVmaW5lIGdsb2JhbCBjYWxsYmFja3MgYXJyYXkgaWYgbm90IHByZXNlbnRcbiAgICAvLyB3ZSBkbyB0aGlzIGhlcmUgKGxhemlseSkgdG8gYXZvaWQgdW5uZWVkZWQgZ2xvYmFsIHBvbGx1dGlvblxuICAgIGlmICghY2FsbGJhY2tzKSB7XG4gICAgICAvLyB3ZSBuZWVkIHRvIGNvbnNpZGVyIG11bHRpcGxlIGVuZ2luZXMgaW4gdGhlIHNhbWUgcGFnZVxuICAgICAgY2FsbGJhY2tzID0gZ2xvYmFsVGhpcy5fX19laW8gPSBnbG9iYWxUaGlzLl9fX2VpbyB8fCBbXTtcbiAgICB9XG5cbiAgICAvLyBjYWxsYmFjayBpZGVudGlmaWVyXG4gICAgdGhpcy5pbmRleCA9IGNhbGxiYWNrcy5sZW5ndGg7XG5cbiAgICAvLyBhZGQgY2FsbGJhY2sgdG8ganNvbnAgZ2xvYmFsXG4gICAgY2FsbGJhY2tzLnB1c2godGhpcy5vbkRhdGEuYmluZCh0aGlzKSk7XG5cbiAgICAvLyBhcHBlbmQgdG8gcXVlcnkgc3RyaW5nXG4gICAgdGhpcy5xdWVyeS5qID0gdGhpcy5pbmRleDtcbiAgfVxuXG4gIC8qKlxuICAgKiBKU09OUCBvbmx5IHN1cHBvcnRzIGJpbmFyeSBhcyBiYXNlNjQgZW5jb2RlZCBzdHJpbmdzXG4gICAqL1xuICBnZXQgc3VwcG9ydHNCaW5hcnkoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENsb3NlcyB0aGUgc29ja2V0LlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIGRvQ2xvc2UoKSB7XG4gICAgaWYgKHRoaXMuc2NyaXB0KSB7XG4gICAgICAvLyBwcmV2ZW50IHNwdXJpb3VzIGVycm9ycyBmcm9tIGJlaW5nIGVtaXR0ZWQgd2hlbiB0aGUgd2luZG93IGlzIHVubG9hZGVkXG4gICAgICB0aGlzLnNjcmlwdC5vbmVycm9yID0gKCkgPT4ge307XG4gICAgICB0aGlzLnNjcmlwdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuc2NyaXB0KTtcbiAgICAgIHRoaXMuc2NyaXB0ID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5mb3JtKSB7XG4gICAgICB0aGlzLmZvcm0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmZvcm0pO1xuICAgICAgdGhpcy5mb3JtID0gbnVsbDtcbiAgICAgIHRoaXMuaWZyYW1lID0gbnVsbDtcbiAgICB9XG5cbiAgICBzdXBlci5kb0Nsb3NlKCk7XG4gIH1cblxuICAvKipcbiAgICogU3RhcnRzIGEgcG9sbCBjeWNsZS5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBkb1BvbGwoKSB7XG4gICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcblxuICAgIGlmICh0aGlzLnNjcmlwdCkge1xuICAgICAgdGhpcy5zY3JpcHQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLnNjcmlwdCk7XG4gICAgICB0aGlzLnNjcmlwdCA9IG51bGw7XG4gICAgfVxuXG4gICAgc2NyaXB0LmFzeW5jID0gdHJ1ZTtcbiAgICBzY3JpcHQuc3JjID0gdGhpcy51cmkoKTtcbiAgICBzY3JpcHQub25lcnJvciA9IGUgPT4ge1xuICAgICAgdGhpcy5vbkVycm9yKFwianNvbnAgcG9sbCBlcnJvclwiLCBlKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaW5zZXJ0QXQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKVswXTtcbiAgICBpZiAoaW5zZXJ0QXQpIHtcbiAgICAgIGluc2VydEF0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHNjcmlwdCwgaW5zZXJ0QXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAoZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5ib2R5KS5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgIH1cbiAgICB0aGlzLnNjcmlwdCA9IHNjcmlwdDtcblxuICAgIGNvbnN0IGlzVUFnZWNrbyA9XG4gICAgICBcInVuZGVmaW5lZFwiICE9PSB0eXBlb2YgbmF2aWdhdG9yICYmIC9nZWNrby9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG5cbiAgICBpZiAoaXNVQWdlY2tvKSB7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBpZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoaWZyYW1lKTtcbiAgICAgIH0sIDEwMCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFdyaXRlcyB3aXRoIGEgaGlkZGVuIGlmcmFtZS5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGEgdG8gc2VuZFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsZWQgdXBvbiBmbHVzaC5cbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBkb1dyaXRlKGRhdGEsIGZuKSB7XG4gICAgbGV0IGlmcmFtZTtcblxuICAgIGlmICghdGhpcy5mb3JtKSB7XG4gICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgICBjb25zdCBhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICAgICAgY29uc3QgaWQgPSAodGhpcy5pZnJhbWVJZCA9IFwiZWlvX2lmcmFtZV9cIiArIHRoaXMuaW5kZXgpO1xuXG4gICAgICBmb3JtLmNsYXNzTmFtZSA9IFwic29ja2V0aW9cIjtcbiAgICAgIGZvcm0uc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgICBmb3JtLnN0eWxlLnRvcCA9IFwiLTEwMDBweFwiO1xuICAgICAgZm9ybS5zdHlsZS5sZWZ0ID0gXCItMTAwMHB4XCI7XG4gICAgICBmb3JtLnRhcmdldCA9IGlkO1xuICAgICAgZm9ybS5tZXRob2QgPSBcIlBPU1RcIjtcbiAgICAgIGZvcm0uc2V0QXR0cmlidXRlKFwiYWNjZXB0LWNoYXJzZXRcIiwgXCJ1dGYtOFwiKTtcbiAgICAgIGFyZWEubmFtZSA9IFwiZFwiO1xuICAgICAgZm9ybS5hcHBlbmRDaGlsZChhcmVhKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgICAgIHRoaXMuZm9ybSA9IGZvcm07XG4gICAgICB0aGlzLmFyZWEgPSBhcmVhO1xuICAgIH1cblxuICAgIHRoaXMuZm9ybS5hY3Rpb24gPSB0aGlzLnVyaSgpO1xuXG4gICAgZnVuY3Rpb24gY29tcGxldGUoKSB7XG4gICAgICBpbml0SWZyYW1lKCk7XG4gICAgICBmbigpO1xuICAgIH1cblxuICAgIGNvbnN0IGluaXRJZnJhbWUgPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5pZnJhbWUpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB0aGlzLmZvcm0ucmVtb3ZlQ2hpbGQodGhpcy5pZnJhbWUpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgdGhpcy5vbkVycm9yKFwianNvbnAgcG9sbGluZyBpZnJhbWUgcmVtb3ZhbCBlcnJvclwiLCBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0cnkge1xuICAgICAgICAvLyBpZTYgZHluYW1pYyBpZnJhbWVzIHdpdGggdGFyZ2V0PVwiXCIgc3VwcG9ydCAodGhhbmtzIENocmlzIExhbWJhY2hlcilcbiAgICAgICAgY29uc3QgaHRtbCA9ICc8aWZyYW1lIHNyYz1cImphdmFzY3JpcHQ6MFwiIG5hbWU9XCInICsgdGhpcy5pZnJhbWVJZCArICdcIj4nO1xuICAgICAgICBpZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGh0bWwpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIpO1xuICAgICAgICBpZnJhbWUubmFtZSA9IHRoaXMuaWZyYW1lSWQ7XG4gICAgICAgIGlmcmFtZS5zcmMgPSBcImphdmFzY3JpcHQ6MFwiO1xuICAgICAgfVxuXG4gICAgICBpZnJhbWUuaWQgPSB0aGlzLmlmcmFtZUlkO1xuXG4gICAgICB0aGlzLmZvcm0uYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgICAgIHRoaXMuaWZyYW1lID0gaWZyYW1lO1xuICAgIH07XG5cbiAgICBpbml0SWZyYW1lKCk7XG5cbiAgICAvLyBlc2NhcGUgXFxuIHRvIHByZXZlbnQgaXQgZnJvbSBiZWluZyBjb252ZXJ0ZWQgaW50byBcXHJcXG4gYnkgc29tZSBVQXNcbiAgICAvLyBkb3VibGUgZXNjYXBpbmcgaXMgcmVxdWlyZWQgZm9yIGVzY2FwZWQgbmV3IGxpbmVzIGJlY2F1c2UgdW5lc2NhcGluZyBvZiBuZXcgbGluZXMgY2FuIGJlIGRvbmUgc2FmZWx5IG9uIHNlcnZlci1zaWRlXG4gICAgZGF0YSA9IGRhdGEucmVwbGFjZShyRXNjYXBlZE5ld2xpbmUsIFwiXFxcXFxcblwiKTtcbiAgICB0aGlzLmFyZWEudmFsdWUgPSBkYXRhLnJlcGxhY2Uock5ld2xpbmUsIFwiXFxcXG5cIik7XG5cbiAgICB0cnkge1xuICAgICAgdGhpcy5mb3JtLnN1Ym1pdCgpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG5cbiAgICBpZiAodGhpcy5pZnJhbWUuYXR0YWNoRXZlbnQpIHtcbiAgICAgIHRoaXMuaWZyYW1lLm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuaWZyYW1lLnJlYWR5U3RhdGUgPT09IFwiY29tcGxldGVcIikge1xuICAgICAgICAgIGNvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaWZyYW1lLm9ubG9hZCA9IGNvbXBsZXRlO1xuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEpTT05QUG9sbGluZztcbiIsIi8qIGdsb2JhbCBhdHRhY2hFdmVudCAqL1xuXG5jb25zdCBYTUxIdHRwUmVxdWVzdCA9IHJlcXVpcmUoXCIuLi8uLi9jb250cmliL3htbGh0dHByZXF1ZXN0LXNzbC9YTUxIdHRwUmVxdWVzdFwiKTtcbmNvbnN0IFBvbGxpbmcgPSByZXF1aXJlKFwiLi9wb2xsaW5nXCIpO1xuY29uc3QgRW1pdHRlciA9IHJlcXVpcmUoXCJjb21wb25lbnQtZW1pdHRlclwiKTtcbmNvbnN0IHsgcGljayB9ID0gcmVxdWlyZShcIi4uL3V0aWxcIik7XG5jb25zdCBnbG9iYWxUaGlzID0gcmVxdWlyZShcIi4uL2dsb2JhbFRoaXNcIik7XG5cbmNvbnN0IGRlYnVnID0gcmVxdWlyZShcImRlYnVnXCIpKFwiZW5naW5lLmlvLWNsaWVudDpwb2xsaW5nLXhoclwiKTtcblxuLyoqXG4gKiBFbXB0eSBmdW5jdGlvblxuICovXG5cbmZ1bmN0aW9uIGVtcHR5KCkge31cblxuY29uc3QgaGFzWEhSMiA9IChmdW5jdGlvbigpIHtcbiAgY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KHsgeGRvbWFpbjogZmFsc2UgfSk7XG4gIHJldHVybiBudWxsICE9IHhoci5yZXNwb25zZVR5cGU7XG59KSgpO1xuXG5jbGFzcyBYSFIgZXh0ZW5kcyBQb2xsaW5nIHtcbiAgLyoqXG4gICAqIFhIUiBQb2xsaW5nIGNvbnN0cnVjdG9yLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0c1xuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cbiAgY29uc3RydWN0b3Iob3B0cykge1xuICAgIHN1cGVyKG9wdHMpO1xuXG4gICAgaWYgKHR5cGVvZiBsb2NhdGlvbiAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgY29uc3QgaXNTU0wgPSBcImh0dHBzOlwiID09PSBsb2NhdGlvbi5wcm90b2NvbDtcbiAgICAgIGxldCBwb3J0ID0gbG9jYXRpb24ucG9ydDtcblxuICAgICAgLy8gc29tZSB1c2VyIGFnZW50cyBoYXZlIGVtcHR5IGBsb2NhdGlvbi5wb3J0YFxuICAgICAgaWYgKCFwb3J0KSB7XG4gICAgICAgIHBvcnQgPSBpc1NTTCA/IDQ0MyA6IDgwO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnhkID1cbiAgICAgICAgKHR5cGVvZiBsb2NhdGlvbiAhPT0gXCJ1bmRlZmluZWRcIiAmJlxuICAgICAgICAgIG9wdHMuaG9zdG5hbWUgIT09IGxvY2F0aW9uLmhvc3RuYW1lKSB8fFxuICAgICAgICBwb3J0ICE9PSBvcHRzLnBvcnQ7XG4gICAgICB0aGlzLnhzID0gb3B0cy5zZWN1cmUgIT09IGlzU1NMO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBYSFIgc3VwcG9ydHMgYmluYXJ5XG4gICAgICovXG4gICAgY29uc3QgZm9yY2VCYXNlNjQgPSBvcHRzICYmIG9wdHMuZm9yY2VCYXNlNjQ7XG4gICAgdGhpcy5zdXBwb3J0c0JpbmFyeSA9IGhhc1hIUjIgJiYgIWZvcmNlQmFzZTY0O1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSByZXF1ZXN0LlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgcmVxdWVzdChvcHRzID0ge30pIHtcbiAgICBPYmplY3QuYXNzaWduKG9wdHMsIHsgeGQ6IHRoaXMueGQsIHhzOiB0aGlzLnhzIH0sIHRoaXMub3B0cyk7XG4gICAgcmV0dXJuIG5ldyBSZXF1ZXN0KHRoaXMudXJpKCksIG9wdHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbmRzIGRhdGEuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhIHRvIHNlbmQuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxlZCB1cG9uIGZsdXNoLlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIGRvV3JpdGUoZGF0YSwgZm4pIHtcbiAgICBjb25zdCByZXEgPSB0aGlzLnJlcXVlc3Qoe1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGRhdGE6IGRhdGFcbiAgICB9KTtcbiAgICByZXEub24oXCJzdWNjZXNzXCIsIGZuKTtcbiAgICByZXEub24oXCJlcnJvclwiLCBlcnIgPT4ge1xuICAgICAgdGhpcy5vbkVycm9yKFwieGhyIHBvc3QgZXJyb3JcIiwgZXJyKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdGFydHMgYSBwb2xsIGN5Y2xlLlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIGRvUG9sbCgpIHtcbiAgICBkZWJ1ZyhcInhociBwb2xsXCIpO1xuICAgIGNvbnN0IHJlcSA9IHRoaXMucmVxdWVzdCgpO1xuICAgIHJlcS5vbihcImRhdGFcIiwgdGhpcy5vbkRhdGEuYmluZCh0aGlzKSk7XG4gICAgcmVxLm9uKFwiZXJyb3JcIiwgZXJyID0+IHtcbiAgICAgIHRoaXMub25FcnJvcihcInhociBwb2xsIGVycm9yXCIsIGVycik7XG4gICAgfSk7XG4gICAgdGhpcy5wb2xsWGhyID0gcmVxO1xuICB9XG59XG5cbmNsYXNzIFJlcXVlc3QgZXh0ZW5kcyBFbWl0dGVyIHtcbiAgLyoqXG4gICAqIFJlcXVlc3QgY29uc3RydWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG4gIGNvbnN0cnVjdG9yKHVyaSwgb3B0cykge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5vcHRzID0gb3B0cztcblxuICAgIHRoaXMubWV0aG9kID0gb3B0cy5tZXRob2QgfHwgXCJHRVRcIjtcbiAgICB0aGlzLnVyaSA9IHVyaTtcbiAgICB0aGlzLmFzeW5jID0gZmFsc2UgIT09IG9wdHMuYXN5bmM7XG4gICAgdGhpcy5kYXRhID0gdW5kZWZpbmVkICE9PSBvcHRzLmRhdGEgPyBvcHRzLmRhdGEgOiBudWxsO1xuXG4gICAgdGhpcy5jcmVhdGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIHRoZSBYSFIgb2JqZWN0IGFuZCBzZW5kcyB0aGUgcmVxdWVzdC5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBjcmVhdGUoKSB7XG4gICAgY29uc3Qgb3B0cyA9IHBpY2soXG4gICAgICB0aGlzLm9wdHMsXG4gICAgICBcImFnZW50XCIsXG4gICAgICBcImVuYWJsZXNYRFJcIixcbiAgICAgIFwicGZ4XCIsXG4gICAgICBcImtleVwiLFxuICAgICAgXCJwYXNzcGhyYXNlXCIsXG4gICAgICBcImNlcnRcIixcbiAgICAgIFwiY2FcIixcbiAgICAgIFwiY2lwaGVyc1wiLFxuICAgICAgXCJyZWplY3RVbmF1dGhvcml6ZWRcIixcbiAgICAgIFwiYXV0b1VucmVmXCJcbiAgICApO1xuICAgIG9wdHMueGRvbWFpbiA9ICEhdGhpcy5vcHRzLnhkO1xuICAgIG9wdHMueHNjaGVtZSA9ICEhdGhpcy5vcHRzLnhzO1xuXG4gICAgY29uc3QgeGhyID0gKHRoaXMueGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KG9wdHMpKTtcblxuICAgIHRyeSB7XG4gICAgICBkZWJ1ZyhcInhociBvcGVuICVzOiAlc1wiLCB0aGlzLm1ldGhvZCwgdGhpcy51cmkpO1xuICAgICAgeGhyLm9wZW4odGhpcy5tZXRob2QsIHRoaXMudXJpLCB0aGlzLmFzeW5jKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICh0aGlzLm9wdHMuZXh0cmFIZWFkZXJzKSB7XG4gICAgICAgICAgeGhyLnNldERpc2FibGVIZWFkZXJDaGVjayAmJiB4aHIuc2V0RGlzYWJsZUhlYWRlckNoZWNrKHRydWUpO1xuICAgICAgICAgIGZvciAobGV0IGkgaW4gdGhpcy5vcHRzLmV4dHJhSGVhZGVycykge1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0cy5leHRyYUhlYWRlcnMuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoaSwgdGhpcy5vcHRzLmV4dHJhSGVhZGVyc1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7fVxuXG4gICAgICBpZiAoXCJQT1NUXCIgPT09IHRoaXMubWV0aG9kKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LXR5cGVcIiwgXCJ0ZXh0L3BsYWluO2NoYXJzZXQ9VVRGLThcIik7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICB9XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQWNjZXB0XCIsIFwiKi8qXCIpO1xuICAgICAgfSBjYXRjaCAoZSkge31cblxuICAgICAgLy8gaWU2IGNoZWNrXG4gICAgICBpZiAoXCJ3aXRoQ3JlZGVudGlhbHNcIiBpbiB4aHIpIHtcbiAgICAgICAgeGhyLndpdGhDcmVkZW50aWFscyA9IHRoaXMub3B0cy53aXRoQ3JlZGVudGlhbHM7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLm9wdHMucmVxdWVzdFRpbWVvdXQpIHtcbiAgICAgICAgeGhyLnRpbWVvdXQgPSB0aGlzLm9wdHMucmVxdWVzdFRpbWVvdXQ7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmhhc1hEUigpKSB7XG4gICAgICAgIHhoci5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5vbkxvYWQoKTtcbiAgICAgICAgfTtcbiAgICAgICAgeGhyLm9uZXJyb3IgPSAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5vbkVycm9yKHhoci5yZXNwb25zZVRleHQpO1xuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcbiAgICAgICAgICBpZiAoNCAhPT0geGhyLnJlYWR5U3RhdGUpIHJldHVybjtcbiAgICAgICAgICBpZiAoMjAwID09PSB4aHIuc3RhdHVzIHx8IDEyMjMgPT09IHhoci5zdGF0dXMpIHtcbiAgICAgICAgICAgIHRoaXMub25Mb2FkKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSB0aGUgYGVycm9yYCBldmVudCBoYW5kbGVyIHRoYXQncyB1c2VyLXNldFxuICAgICAgICAgICAgLy8gZG9lcyBub3QgdGhyb3cgaW4gdGhlIHNhbWUgdGljayBhbmQgZ2V0cyBjYXVnaHQgaGVyZVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMub25FcnJvcih0eXBlb2YgeGhyLnN0YXR1cyA9PT0gXCJudW1iZXJcIiA/IHhoci5zdGF0dXMgOiAwKTtcbiAgICAgICAgICAgIH0sIDApO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgZGVidWcoXCJ4aHIgZGF0YSAlc1wiLCB0aGlzLmRhdGEpO1xuICAgICAgeGhyLnNlbmQodGhpcy5kYXRhKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBOZWVkIHRvIGRlZmVyIHNpbmNlIC5jcmVhdGUoKSBpcyBjYWxsZWQgZGlyZWN0bHkgZnJvbSB0aGUgY29uc3RydWN0b3JcbiAgICAgIC8vIGFuZCB0aHVzIHRoZSAnZXJyb3InIGV2ZW50IGNhbiBvbmx5IGJlIG9ubHkgYm91bmQgKmFmdGVyKiB0aGlzIGV4Y2VwdGlvblxuICAgICAgLy8gb2NjdXJzLiAgVGhlcmVmb3JlLCBhbHNvLCB3ZSBjYW5ub3QgdGhyb3cgaGVyZSBhdCBhbGwuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5vbkVycm9yKGUpO1xuICAgICAgfSwgMCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgdGhpcy5pbmRleCA9IFJlcXVlc3QucmVxdWVzdHNDb3VudCsrO1xuICAgICAgUmVxdWVzdC5yZXF1ZXN0c1t0aGlzLmluZGV4XSA9IHRoaXM7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCB1cG9uIHN1Y2Nlc3NmdWwgcmVzcG9uc2UuXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgb25TdWNjZXNzKCkge1xuICAgIHRoaXMuZW1pdChcInN1Y2Nlc3NcIik7XG4gICAgdGhpcy5jbGVhbnVwKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIGlmIHdlIGhhdmUgZGF0YS5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBvbkRhdGEoZGF0YSkge1xuICAgIHRoaXMuZW1pdChcImRhdGFcIiwgZGF0YSk7XG4gICAgdGhpcy5vblN1Y2Nlc3MoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgdXBvbiBlcnJvci5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBvbkVycm9yKGVycikge1xuICAgIHRoaXMuZW1pdChcImVycm9yXCIsIGVycik7XG4gICAgdGhpcy5jbGVhbnVwKHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFucyB1cCBob3VzZS5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBjbGVhbnVwKGZyb21FcnJvcikge1xuICAgIGlmIChcInVuZGVmaW5lZFwiID09PSB0eXBlb2YgdGhpcy54aHIgfHwgbnVsbCA9PT0gdGhpcy54aHIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8geG1saHR0cHJlcXVlc3RcbiAgICBpZiAodGhpcy5oYXNYRFIoKSkge1xuICAgICAgdGhpcy54aHIub25sb2FkID0gdGhpcy54aHIub25lcnJvciA9IGVtcHR5O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBlbXB0eTtcbiAgICB9XG5cbiAgICBpZiAoZnJvbUVycm9yKSB7XG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLnhoci5hYm9ydCgpO1xuICAgICAgfSBjYXRjaCAoZSkge31cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICBkZWxldGUgUmVxdWVzdC5yZXF1ZXN0c1t0aGlzLmluZGV4XTtcbiAgICB9XG5cbiAgICB0aGlzLnhociA9IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIHVwb24gbG9hZC5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBvbkxvYWQoKSB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMueGhyLnJlc3BvbnNlVGV4dDtcbiAgICBpZiAoZGF0YSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5vbkRhdGEoZGF0YSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGl0IGhhcyBYRG9tYWluUmVxdWVzdC5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBoYXNYRFIoKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBYRG9tYWluUmVxdWVzdCAhPT0gXCJ1bmRlZmluZWRcIiAmJiAhdGhpcy54cyAmJiB0aGlzLmVuYWJsZXNYRFI7XG4gIH1cblxuICAvKipcbiAgICogQWJvcnRzIHRoZSByZXF1ZXN0LlxuICAgKlxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cbiAgYWJvcnQoKSB7XG4gICAgdGhpcy5jbGVhbnVwKCk7XG4gIH1cbn1cblxuLyoqXG4gKiBBYm9ydHMgcGVuZGluZyByZXF1ZXN0cyB3aGVuIHVubG9hZGluZyB0aGUgd2luZG93LiBUaGlzIGlzIG5lZWRlZCB0byBwcmV2ZW50XG4gKiBtZW1vcnkgbGVha3MgKGUuZy4gd2hlbiB1c2luZyBJRSkgYW5kIHRvIGVuc3VyZSB0aGF0IG5vIHNwdXJpb3VzIGVycm9yIGlzXG4gKiBlbWl0dGVkLlxuICovXG5cblJlcXVlc3QucmVxdWVzdHNDb3VudCA9IDA7XG5SZXF1ZXN0LnJlcXVlc3RzID0ge307XG5cbmlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgaWYgKHR5cGVvZiBhdHRhY2hFdmVudCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgYXR0YWNoRXZlbnQoXCJvbnVubG9hZFwiLCB1bmxvYWRIYW5kbGVyKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYWRkRXZlbnRMaXN0ZW5lciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgY29uc3QgdGVybWluYXRpb25FdmVudCA9IFwib25wYWdlaGlkZVwiIGluIGdsb2JhbFRoaXMgPyBcInBhZ2VoaWRlXCIgOiBcInVubG9hZFwiO1xuICAgIGFkZEV2ZW50TGlzdGVuZXIodGVybWluYXRpb25FdmVudCwgdW5sb2FkSGFuZGxlciwgZmFsc2UpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVubG9hZEhhbmRsZXIoKSB7XG4gIGZvciAobGV0IGkgaW4gUmVxdWVzdC5yZXF1ZXN0cykge1xuICAgIGlmIChSZXF1ZXN0LnJlcXVlc3RzLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICBSZXF1ZXN0LnJlcXVlc3RzW2ldLmFib3J0KCk7XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gWEhSO1xubW9kdWxlLmV4cG9ydHMuUmVxdWVzdCA9IFJlcXVlc3Q7XG4iLCJjb25zdCBUcmFuc3BvcnQgPSByZXF1aXJlKFwiLi4vdHJhbnNwb3J0XCIpO1xuY29uc3QgcGFyc2VxcyA9IHJlcXVpcmUoXCJwYXJzZXFzXCIpO1xuY29uc3QgcGFyc2VyID0gcmVxdWlyZShcImVuZ2luZS5pby1wYXJzZXJcIik7XG5jb25zdCB5ZWFzdCA9IHJlcXVpcmUoXCJ5ZWFzdFwiKTtcblxuY29uc3QgZGVidWcgPSByZXF1aXJlKFwiZGVidWdcIikoXCJlbmdpbmUuaW8tY2xpZW50OnBvbGxpbmdcIik7XG5cbmNsYXNzIFBvbGxpbmcgZXh0ZW5kcyBUcmFuc3BvcnQge1xuICAvKipcbiAgICogVHJhbnNwb3J0IG5hbWUuXG4gICAqL1xuICBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gXCJwb2xsaW5nXCI7XG4gIH1cblxuICAvKipcbiAgICogT3BlbnMgdGhlIHNvY2tldCAodHJpZ2dlcnMgcG9sbGluZykuIFdlIHdyaXRlIGEgUElORyBtZXNzYWdlIHRvIGRldGVybWluZVxuICAgKiB3aGVuIHRoZSB0cmFuc3BvcnQgaXMgb3Blbi5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBkb09wZW4oKSB7XG4gICAgdGhpcy5wb2xsKCk7XG4gIH1cblxuICAvKipcbiAgICogUGF1c2VzIHBvbGxpbmcuXG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIHVwb24gYnVmZmVycyBhcmUgZmx1c2hlZCBhbmQgdHJhbnNwb3J0IGlzIHBhdXNlZFxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIHBhdXNlKG9uUGF1c2UpIHtcbiAgICB0aGlzLnJlYWR5U3RhdGUgPSBcInBhdXNpbmdcIjtcblxuICAgIGNvbnN0IHBhdXNlID0gKCkgPT4ge1xuICAgICAgZGVidWcoXCJwYXVzZWRcIik7XG4gICAgICB0aGlzLnJlYWR5U3RhdGUgPSBcInBhdXNlZFwiO1xuICAgICAgb25QYXVzZSgpO1xuICAgIH07XG5cbiAgICBpZiAodGhpcy5wb2xsaW5nIHx8ICF0aGlzLndyaXRhYmxlKSB7XG4gICAgICBsZXQgdG90YWwgPSAwO1xuXG4gICAgICBpZiAodGhpcy5wb2xsaW5nKSB7XG4gICAgICAgIGRlYnVnKFwid2UgYXJlIGN1cnJlbnRseSBwb2xsaW5nIC0gd2FpdGluZyB0byBwYXVzZVwiKTtcbiAgICAgICAgdG90YWwrKztcbiAgICAgICAgdGhpcy5vbmNlKFwicG9sbENvbXBsZXRlXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGRlYnVnKFwicHJlLXBhdXNlIHBvbGxpbmcgY29tcGxldGVcIik7XG4gICAgICAgICAgLS10b3RhbCB8fCBwYXVzZSgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLndyaXRhYmxlKSB7XG4gICAgICAgIGRlYnVnKFwid2UgYXJlIGN1cnJlbnRseSB3cml0aW5nIC0gd2FpdGluZyB0byBwYXVzZVwiKTtcbiAgICAgICAgdG90YWwrKztcbiAgICAgICAgdGhpcy5vbmNlKFwiZHJhaW5cIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgZGVidWcoXCJwcmUtcGF1c2Ugd3JpdGluZyBjb21wbGV0ZVwiKTtcbiAgICAgICAgICAtLXRvdGFsIHx8IHBhdXNlKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwYXVzZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTdGFydHMgcG9sbGluZyBjeWNsZS5cbiAgICpcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG4gIHBvbGwoKSB7XG4gICAgZGVidWcoXCJwb2xsaW5nXCIpO1xuICAgIHRoaXMucG9sbGluZyA9IHRydWU7XG4gICAgdGhpcy5kb1BvbGwoKTtcbiAgICB0aGlzLmVtaXQoXCJwb2xsXCIpO1xuICB9XG5cbiAgLyoqXG4gICAqIE92ZXJsb2FkcyBvbkRhdGEgdG8gZGV0ZWN0IHBheWxvYWRzLlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIG9uRGF0YShkYXRhKSB7XG4gICAgZGVidWcoXCJwb2xsaW5nIGdvdCBkYXRhICVzXCIsIGRhdGEpO1xuICAgIGNvbnN0IGNhbGxiYWNrID0gcGFja2V0ID0+IHtcbiAgICAgIC8vIGlmIGl0cyB0aGUgZmlyc3QgbWVzc2FnZSB3ZSBjb25zaWRlciB0aGUgdHJhbnNwb3J0IG9wZW5cbiAgICAgIGlmIChcIm9wZW5pbmdcIiA9PT0gdGhpcy5yZWFkeVN0YXRlICYmIHBhY2tldC50eXBlID09PSBcIm9wZW5cIikge1xuICAgICAgICB0aGlzLm9uT3BlbigpO1xuICAgICAgfVxuXG4gICAgICAvLyBpZiBpdHMgYSBjbG9zZSBwYWNrZXQsIHdlIGNsb3NlIHRoZSBvbmdvaW5nIHJlcXVlc3RzXG4gICAgICBpZiAoXCJjbG9zZVwiID09PSBwYWNrZXQudHlwZSkge1xuICAgICAgICB0aGlzLm9uQ2xvc2UoKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICAvLyBvdGhlcndpc2UgYnlwYXNzIG9uRGF0YSBhbmQgaGFuZGxlIHRoZSBtZXNzYWdlXG4gICAgICB0aGlzLm9uUGFja2V0KHBhY2tldCk7XG4gICAgfTtcblxuICAgIC8vIGRlY29kZSBwYXlsb2FkXG4gICAgcGFyc2VyLmRlY29kZVBheWxvYWQoZGF0YSwgdGhpcy5zb2NrZXQuYmluYXJ5VHlwZSkuZm9yRWFjaChjYWxsYmFjayk7XG5cbiAgICAvLyBpZiBhbiBldmVudCBkaWQgbm90IHRyaWdnZXIgY2xvc2luZ1xuICAgIGlmIChcImNsb3NlZFwiICE9PSB0aGlzLnJlYWR5U3RhdGUpIHtcbiAgICAgIC8vIGlmIHdlIGdvdCBkYXRhIHdlJ3JlIG5vdCBwb2xsaW5nXG4gICAgICB0aGlzLnBvbGxpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMuZW1pdChcInBvbGxDb21wbGV0ZVwiKTtcblxuICAgICAgaWYgKFwib3BlblwiID09PSB0aGlzLnJlYWR5U3RhdGUpIHtcbiAgICAgICAgdGhpcy5wb2xsKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZWJ1ZygnaWdub3JpbmcgcG9sbCAtIHRyYW5zcG9ydCBzdGF0ZSBcIiVzXCInLCB0aGlzLnJlYWR5U3RhdGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBGb3IgcG9sbGluZywgc2VuZCBhIGNsb3NlIHBhY2tldC5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBkb0Nsb3NlKCkge1xuICAgIGNvbnN0IGNsb3NlID0gKCkgPT4ge1xuICAgICAgZGVidWcoXCJ3cml0aW5nIGNsb3NlIHBhY2tldFwiKTtcbiAgICAgIHRoaXMud3JpdGUoW3sgdHlwZTogXCJjbG9zZVwiIH1dKTtcbiAgICB9O1xuXG4gICAgaWYgKFwib3BlblwiID09PSB0aGlzLnJlYWR5U3RhdGUpIHtcbiAgICAgIGRlYnVnKFwidHJhbnNwb3J0IG9wZW4gLSBjbG9zaW5nXCIpO1xuICAgICAgY2xvc2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaW4gY2FzZSB3ZSdyZSB0cnlpbmcgdG8gY2xvc2Ugd2hpbGVcbiAgICAgIC8vIGhhbmRzaGFraW5nIGlzIGluIHByb2dyZXNzIChHSC0xNjQpXG4gICAgICBkZWJ1ZyhcInRyYW5zcG9ydCBub3Qgb3BlbiAtIGRlZmVycmluZyBjbG9zZVwiKTtcbiAgICAgIHRoaXMub25jZShcIm9wZW5cIiwgY2xvc2UpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBXcml0ZXMgYSBwYWNrZXRzIHBheWxvYWQuXG4gICAqXG4gICAqIEBwYXJhbSB7QXJyYXl9IGRhdGEgcGFja2V0c1xuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBkcmFpbiBjYWxsYmFja1xuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIHdyaXRlKHBhY2tldHMpIHtcbiAgICB0aGlzLndyaXRhYmxlID0gZmFsc2U7XG5cbiAgICBwYXJzZXIuZW5jb2RlUGF5bG9hZChwYWNrZXRzLCBkYXRhID0+IHtcbiAgICAgIHRoaXMuZG9Xcml0ZShkYXRhLCAoKSA9PiB7XG4gICAgICAgIHRoaXMud3JpdGFibGUgPSB0cnVlO1xuICAgICAgICB0aGlzLmVtaXQoXCJkcmFpblwiKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdlbmVyYXRlcyB1cmkgZm9yIGNvbm5lY3Rpb24uXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgdXJpKCkge1xuICAgIGxldCBxdWVyeSA9IHRoaXMucXVlcnkgfHwge307XG4gICAgY29uc3Qgc2NoZW1hID0gdGhpcy5vcHRzLnNlY3VyZSA/IFwiaHR0cHNcIiA6IFwiaHR0cFwiO1xuICAgIGxldCBwb3J0ID0gXCJcIjtcblxuICAgIC8vIGNhY2hlIGJ1c3RpbmcgaXMgZm9yY2VkXG4gICAgaWYgKGZhbHNlICE9PSB0aGlzLm9wdHMudGltZXN0YW1wUmVxdWVzdHMpIHtcbiAgICAgIHF1ZXJ5W3RoaXMub3B0cy50aW1lc3RhbXBQYXJhbV0gPSB5ZWFzdCgpO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5zdXBwb3J0c0JpbmFyeSAmJiAhcXVlcnkuc2lkKSB7XG4gICAgICBxdWVyeS5iNjQgPSAxO1xuICAgIH1cblxuICAgIHF1ZXJ5ID0gcGFyc2Vxcy5lbmNvZGUocXVlcnkpO1xuXG4gICAgLy8gYXZvaWQgcG9ydCBpZiBkZWZhdWx0IGZvciBzY2hlbWFcbiAgICBpZiAoXG4gICAgICB0aGlzLm9wdHMucG9ydCAmJlxuICAgICAgKChcImh0dHBzXCIgPT09IHNjaGVtYSAmJiBOdW1iZXIodGhpcy5vcHRzLnBvcnQpICE9PSA0NDMpIHx8XG4gICAgICAgIChcImh0dHBcIiA9PT0gc2NoZW1hICYmIE51bWJlcih0aGlzLm9wdHMucG9ydCkgIT09IDgwKSlcbiAgICApIHtcbiAgICAgIHBvcnQgPSBcIjpcIiArIHRoaXMub3B0cy5wb3J0O1xuICAgIH1cblxuICAgIC8vIHByZXBlbmQgPyB0byBxdWVyeVxuICAgIGlmIChxdWVyeS5sZW5ndGgpIHtcbiAgICAgIHF1ZXJ5ID0gXCI/XCIgKyBxdWVyeTtcbiAgICB9XG5cbiAgICBjb25zdCBpcHY2ID0gdGhpcy5vcHRzLmhvc3RuYW1lLmluZGV4T2YoXCI6XCIpICE9PSAtMTtcbiAgICByZXR1cm4gKFxuICAgICAgc2NoZW1hICtcbiAgICAgIFwiOi8vXCIgK1xuICAgICAgKGlwdjYgPyBcIltcIiArIHRoaXMub3B0cy5ob3N0bmFtZSArIFwiXVwiIDogdGhpcy5vcHRzLmhvc3RuYW1lKSArXG4gICAgICBwb3J0ICtcbiAgICAgIHRoaXMub3B0cy5wYXRoICtcbiAgICAgIHF1ZXJ5XG4gICAgKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBvbGxpbmc7XG4iLCJjb25zdCBnbG9iYWxUaGlzID0gcmVxdWlyZShcIi4uL2dsb2JhbFRoaXNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBXZWJTb2NrZXQ6IGdsb2JhbFRoaXMuV2ViU29ja2V0IHx8IGdsb2JhbFRoaXMuTW96V2ViU29ja2V0LFxuICB1c2luZ0Jyb3dzZXJXZWJTb2NrZXQ6IHRydWUsXG4gIGRlZmF1bHRCaW5hcnlUeXBlOiBcImFycmF5YnVmZmVyXCJcbn07XG4iLCJjb25zdCBUcmFuc3BvcnQgPSByZXF1aXJlKFwiLi4vdHJhbnNwb3J0XCIpO1xuY29uc3QgcGFyc2VyID0gcmVxdWlyZShcImVuZ2luZS5pby1wYXJzZXJcIik7XG5jb25zdCBwYXJzZXFzID0gcmVxdWlyZShcInBhcnNlcXNcIik7XG5jb25zdCB5ZWFzdCA9IHJlcXVpcmUoXCJ5ZWFzdFwiKTtcbmNvbnN0IHsgcGljayB9ID0gcmVxdWlyZShcIi4uL3V0aWxcIik7XG5jb25zdCB7XG4gIFdlYlNvY2tldCxcbiAgdXNpbmdCcm93c2VyV2ViU29ja2V0LFxuICBkZWZhdWx0QmluYXJ5VHlwZVxufSA9IHJlcXVpcmUoXCIuL3dlYnNvY2tldC1jb25zdHJ1Y3RvclwiKTtcblxuY29uc3QgZGVidWcgPSByZXF1aXJlKFwiZGVidWdcIikoXCJlbmdpbmUuaW8tY2xpZW50OndlYnNvY2tldFwiKTtcblxuLy8gZGV0ZWN0IFJlYWN0TmF0aXZlIGVudmlyb25tZW50XG5jb25zdCBpc1JlYWN0TmF0aXZlID1cbiAgdHlwZW9mIG5hdmlnYXRvciAhPT0gXCJ1bmRlZmluZWRcIiAmJlxuICB0eXBlb2YgbmF2aWdhdG9yLnByb2R1Y3QgPT09IFwic3RyaW5nXCIgJiZcbiAgbmF2aWdhdG9yLnByb2R1Y3QudG9Mb3dlckNhc2UoKSA9PT0gXCJyZWFjdG5hdGl2ZVwiO1xuXG5jbGFzcyBXUyBleHRlbmRzIFRyYW5zcG9ydCB7XG4gIC8qKlxuICAgKiBXZWJTb2NrZXQgdHJhbnNwb3J0IGNvbnN0cnVjdG9yLlxuICAgKlxuICAgKiBAYXBpIHtPYmplY3R9IGNvbm5lY3Rpb24gb3B0aW9uc1xuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cbiAgY29uc3RydWN0b3Iob3B0cykge1xuICAgIHN1cGVyKG9wdHMpO1xuXG4gICAgdGhpcy5zdXBwb3J0c0JpbmFyeSA9ICFvcHRzLmZvcmNlQmFzZTY0O1xuICB9XG5cbiAgLyoqXG4gICAqIFRyYW5zcG9ydCBuYW1lLlxuICAgKlxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cbiAgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIFwid2Vic29ja2V0XCI7XG4gIH1cblxuICAvKipcbiAgICogT3BlbnMgc29ja2V0LlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIGRvT3BlbigpIHtcbiAgICBpZiAoIXRoaXMuY2hlY2soKSkge1xuICAgICAgLy8gbGV0IHByb2JlIHRpbWVvdXRcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB1cmkgPSB0aGlzLnVyaSgpO1xuICAgIGNvbnN0IHByb3RvY29scyA9IHRoaXMub3B0cy5wcm90b2NvbHM7XG5cbiAgICAvLyBSZWFjdCBOYXRpdmUgb25seSBzdXBwb3J0cyB0aGUgJ2hlYWRlcnMnIG9wdGlvbiwgYW5kIHdpbGwgcHJpbnQgYSB3YXJuaW5nIGlmIGFueXRoaW5nIGVsc2UgaXMgcGFzc2VkXG4gICAgY29uc3Qgb3B0cyA9IGlzUmVhY3ROYXRpdmVcbiAgICAgID8ge31cbiAgICAgIDogcGljayhcbiAgICAgICAgICB0aGlzLm9wdHMsXG4gICAgICAgICAgXCJhZ2VudFwiLFxuICAgICAgICAgIFwicGVyTWVzc2FnZURlZmxhdGVcIixcbiAgICAgICAgICBcInBmeFwiLFxuICAgICAgICAgIFwia2V5XCIsXG4gICAgICAgICAgXCJwYXNzcGhyYXNlXCIsXG4gICAgICAgICAgXCJjZXJ0XCIsXG4gICAgICAgICAgXCJjYVwiLFxuICAgICAgICAgIFwiY2lwaGVyc1wiLFxuICAgICAgICAgIFwicmVqZWN0VW5hdXRob3JpemVkXCIsXG4gICAgICAgICAgXCJsb2NhbEFkZHJlc3NcIixcbiAgICAgICAgICBcInByb3RvY29sVmVyc2lvblwiLFxuICAgICAgICAgIFwib3JpZ2luXCIsXG4gICAgICAgICAgXCJtYXhQYXlsb2FkXCIsXG4gICAgICAgICAgXCJmYW1pbHlcIixcbiAgICAgICAgICBcImNoZWNrU2VydmVySWRlbnRpdHlcIlxuICAgICAgICApO1xuXG4gICAgaWYgKHRoaXMub3B0cy5leHRyYUhlYWRlcnMpIHtcbiAgICAgIG9wdHMuaGVhZGVycyA9IHRoaXMub3B0cy5leHRyYUhlYWRlcnM7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIHRoaXMud3MgPVxuICAgICAgICB1c2luZ0Jyb3dzZXJXZWJTb2NrZXQgJiYgIWlzUmVhY3ROYXRpdmVcbiAgICAgICAgICA/IHByb3RvY29sc1xuICAgICAgICAgICAgPyBuZXcgV2ViU29ja2V0KHVyaSwgcHJvdG9jb2xzKVxuICAgICAgICAgICAgOiBuZXcgV2ViU29ja2V0KHVyaSlcbiAgICAgICAgICA6IG5ldyBXZWJTb2NrZXQodXJpLCBwcm90b2NvbHMsIG9wdHMpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHRoaXMuZW1pdChcImVycm9yXCIsIGVycik7XG4gICAgfVxuXG4gICAgdGhpcy53cy5iaW5hcnlUeXBlID0gdGhpcy5zb2NrZXQuYmluYXJ5VHlwZSB8fCBkZWZhdWx0QmluYXJ5VHlwZTtcblxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGV2ZW50IGxpc3RlbmVycyB0byB0aGUgc29ja2V0XG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgdGhpcy53cy5vbm9wZW4gPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5vcHRzLmF1dG9VbnJlZikge1xuICAgICAgICB0aGlzLndzLl9zb2NrZXQudW5yZWYoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMub25PcGVuKCk7XG4gICAgfTtcbiAgICB0aGlzLndzLm9uY2xvc2UgPSB0aGlzLm9uQ2xvc2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLndzLm9ubWVzc2FnZSA9IGV2ID0+IHRoaXMub25EYXRhKGV2LmRhdGEpO1xuICAgIHRoaXMud3Mub25lcnJvciA9IGUgPT4gdGhpcy5vbkVycm9yKFwid2Vic29ja2V0IGVycm9yXCIsIGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFdyaXRlcyBkYXRhIHRvIHNvY2tldC5cbiAgICpcbiAgICogQHBhcmFtIHtBcnJheX0gYXJyYXkgb2YgcGFja2V0cy5cbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICB3cml0ZShwYWNrZXRzKSB7XG4gICAgdGhpcy53cml0YWJsZSA9IGZhbHNlO1xuXG4gICAgLy8gZW5jb2RlUGFja2V0IGVmZmljaWVudCBhcyBpdCB1c2VzIFdTIGZyYW1pbmdcbiAgICAvLyBubyBuZWVkIGZvciBlbmNvZGVQYXlsb2FkXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYWNrZXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBwYWNrZXQgPSBwYWNrZXRzW2ldO1xuICAgICAgY29uc3QgbGFzdFBhY2tldCA9IGkgPT09IHBhY2tldHMubGVuZ3RoIC0gMTtcblxuICAgICAgcGFyc2VyLmVuY29kZVBhY2tldChwYWNrZXQsIHRoaXMuc3VwcG9ydHNCaW5hcnksIGRhdGEgPT4ge1xuICAgICAgICAvLyBhbHdheXMgY3JlYXRlIGEgbmV3IG9iamVjdCAoR0gtNDM3KVxuICAgICAgICBjb25zdCBvcHRzID0ge307XG4gICAgICAgIGlmICghdXNpbmdCcm93c2VyV2ViU29ja2V0KSB7XG4gICAgICAgICAgaWYgKHBhY2tldC5vcHRpb25zKSB7XG4gICAgICAgICAgICBvcHRzLmNvbXByZXNzID0gcGFja2V0Lm9wdGlvbnMuY29tcHJlc3M7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHRoaXMub3B0cy5wZXJNZXNzYWdlRGVmbGF0ZSkge1xuICAgICAgICAgICAgY29uc3QgbGVuID1cbiAgICAgICAgICAgICAgXCJzdHJpbmdcIiA9PT0gdHlwZW9mIGRhdGEgPyBCdWZmZXIuYnl0ZUxlbmd0aChkYXRhKSA6IGRhdGEubGVuZ3RoO1xuICAgICAgICAgICAgaWYgKGxlbiA8IHRoaXMub3B0cy5wZXJNZXNzYWdlRGVmbGF0ZS50aHJlc2hvbGQpIHtcbiAgICAgICAgICAgICAgb3B0cy5jb21wcmVzcyA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNvbWV0aW1lcyB0aGUgd2Vic29ja2V0IGhhcyBhbHJlYWR5IGJlZW4gY2xvc2VkIGJ1dCB0aGUgYnJvd3NlciBkaWRuJ3RcbiAgICAgICAgLy8gaGF2ZSBhIGNoYW5jZSBvZiBpbmZvcm1pbmcgdXMgYWJvdXQgaXQgeWV0LCBpbiB0aGF0IGNhc2Ugc2VuZCB3aWxsXG4gICAgICAgIC8vIHRocm93IGFuIGVycm9yXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgaWYgKHVzaW5nQnJvd3NlcldlYlNvY2tldCkge1xuICAgICAgICAgICAgLy8gVHlwZUVycm9yIGlzIHRocm93biB3aGVuIHBhc3NpbmcgdGhlIHNlY29uZCBhcmd1bWVudCBvbiBTYWZhcmlcbiAgICAgICAgICAgIHRoaXMud3Muc2VuZChkYXRhKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy53cy5zZW5kKGRhdGEsIG9wdHMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGRlYnVnKFwid2Vic29ja2V0IGNsb3NlZCBiZWZvcmUgb25jbG9zZSBldmVudFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChsYXN0UGFja2V0KSB7XG4gICAgICAgICAgLy8gZmFrZSBkcmFpblxuICAgICAgICAgIC8vIGRlZmVyIHRvIG5leHQgdGljayB0byBhbGxvdyBTb2NrZXQgdG8gY2xlYXIgd3JpdGVCdWZmZXJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMud3JpdGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5lbWl0KFwiZHJhaW5cIik7XG4gICAgICAgICAgfSwgMCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgdXBvbiBjbG9zZVxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIG9uQ2xvc2UoKSB7XG4gICAgVHJhbnNwb3J0LnByb3RvdHlwZS5vbkNsb3NlLmNhbGwodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogQ2xvc2VzIHNvY2tldC5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBkb0Nsb3NlKCkge1xuICAgIGlmICh0eXBlb2YgdGhpcy53cyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgdGhpcy53cy5jbG9zZSgpO1xuICAgICAgdGhpcy53cyA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdlbmVyYXRlcyB1cmkgZm9yIGNvbm5lY3Rpb24uXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgdXJpKCkge1xuICAgIGxldCBxdWVyeSA9IHRoaXMucXVlcnkgfHwge307XG4gICAgY29uc3Qgc2NoZW1hID0gdGhpcy5vcHRzLnNlY3VyZSA/IFwid3NzXCIgOiBcIndzXCI7XG4gICAgbGV0IHBvcnQgPSBcIlwiO1xuXG4gICAgLy8gYXZvaWQgcG9ydCBpZiBkZWZhdWx0IGZvciBzY2hlbWFcbiAgICBpZiAoXG4gICAgICB0aGlzLm9wdHMucG9ydCAmJlxuICAgICAgKChcIndzc1wiID09PSBzY2hlbWEgJiYgTnVtYmVyKHRoaXMub3B0cy5wb3J0KSAhPT0gNDQzKSB8fFxuICAgICAgICAoXCJ3c1wiID09PSBzY2hlbWEgJiYgTnVtYmVyKHRoaXMub3B0cy5wb3J0KSAhPT0gODApKVxuICAgICkge1xuICAgICAgcG9ydCA9IFwiOlwiICsgdGhpcy5vcHRzLnBvcnQ7XG4gICAgfVxuXG4gICAgLy8gYXBwZW5kIHRpbWVzdGFtcCB0byBVUklcbiAgICBpZiAodGhpcy5vcHRzLnRpbWVzdGFtcFJlcXVlc3RzKSB7XG4gICAgICBxdWVyeVt0aGlzLm9wdHMudGltZXN0YW1wUGFyYW1dID0geWVhc3QoKTtcbiAgICB9XG5cbiAgICAvLyBjb21tdW5pY2F0ZSBiaW5hcnkgc3VwcG9ydCBjYXBhYmlsaXRpZXNcbiAgICBpZiAoIXRoaXMuc3VwcG9ydHNCaW5hcnkpIHtcbiAgICAgIHF1ZXJ5LmI2NCA9IDE7XG4gICAgfVxuXG4gICAgcXVlcnkgPSBwYXJzZXFzLmVuY29kZShxdWVyeSk7XG5cbiAgICAvLyBwcmVwZW5kID8gdG8gcXVlcnlcbiAgICBpZiAocXVlcnkubGVuZ3RoKSB7XG4gICAgICBxdWVyeSA9IFwiP1wiICsgcXVlcnk7XG4gICAgfVxuXG4gICAgY29uc3QgaXB2NiA9IHRoaXMub3B0cy5ob3N0bmFtZS5pbmRleE9mKFwiOlwiKSAhPT0gLTE7XG4gICAgcmV0dXJuIChcbiAgICAgIHNjaGVtYSArXG4gICAgICBcIjovL1wiICtcbiAgICAgIChpcHY2ID8gXCJbXCIgKyB0aGlzLm9wdHMuaG9zdG5hbWUgKyBcIl1cIiA6IHRoaXMub3B0cy5ob3N0bmFtZSkgK1xuICAgICAgcG9ydCArXG4gICAgICB0aGlzLm9wdHMucGF0aCArXG4gICAgICBxdWVyeVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogRmVhdHVyZSBkZXRlY3Rpb24gZm9yIFdlYlNvY2tldC5cbiAgICpcbiAgICogQHJldHVybiB7Qm9vbGVhbn0gd2hldGhlciB0aGlzIHRyYW5zcG9ydCBpcyBhdmFpbGFibGUuXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuICBjaGVjaygpIHtcbiAgICByZXR1cm4gKFxuICAgICAgISFXZWJTb2NrZXQgJiZcbiAgICAgICEoXCJfX2luaXRpYWxpemVcIiBpbiBXZWJTb2NrZXQgJiYgdGhpcy5uYW1lID09PSBXUy5wcm90b3R5cGUubmFtZSlcbiAgICApO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gV1M7XG4iLCJtb2R1bGUuZXhwb3J0cy5waWNrID0gKG9iaiwgLi4uYXR0cikgPT4ge1xuICByZXR1cm4gYXR0ci5yZWR1Y2UoKGFjYywgaykgPT4ge1xuICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgIGFjY1trXSA9IG9ialtrXTtcbiAgICB9XG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xufTtcbiIsIi8vIGJyb3dzZXIgc2hpbSBmb3IgeG1saHR0cHJlcXVlc3QgbW9kdWxlXG5cbmNvbnN0IGhhc0NPUlMgPSByZXF1aXJlKFwiaGFzLWNvcnNcIik7XG5jb25zdCBnbG9iYWxUaGlzID0gcmVxdWlyZShcIi4vZ2xvYmFsVGhpc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcHRzKSB7XG4gIGNvbnN0IHhkb21haW4gPSBvcHRzLnhkb21haW47XG5cbiAgLy8gc2NoZW1lIG11c3QgYmUgc2FtZSB3aGVuIHVzaWduIFhEb21haW5SZXF1ZXN0XG4gIC8vIGh0dHA6Ly9ibG9ncy5tc2RuLmNvbS9iL2llaW50ZXJuYWxzL2FyY2hpdmUvMjAxMC8wNS8xMy94ZG9tYWlucmVxdWVzdC1yZXN0cmljdGlvbnMtbGltaXRhdGlvbnMtYW5kLXdvcmthcm91bmRzLmFzcHhcbiAgY29uc3QgeHNjaGVtZSA9IG9wdHMueHNjaGVtZTtcblxuICAvLyBYRG9tYWluUmVxdWVzdCBoYXMgYSBmbG93IG9mIG5vdCBzZW5kaW5nIGNvb2tpZSwgdGhlcmVmb3JlIGl0IHNob3VsZCBiZSBkaXNhYmxlZCBhcyBhIGRlZmF1bHQuXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9BdXRvbWF0dGljL2VuZ2luZS5pby1jbGllbnQvcHVsbC8yMTdcbiAgY29uc3QgZW5hYmxlc1hEUiA9IG9wdHMuZW5hYmxlc1hEUjtcblxuICAvLyBYTUxIdHRwUmVxdWVzdCBjYW4gYmUgZGlzYWJsZWQgb24gSUVcbiAgdHJ5IHtcbiAgICBpZiAoXCJ1bmRlZmluZWRcIiAhPT0gdHlwZW9mIFhNTEh0dHBSZXF1ZXN0ICYmICgheGRvbWFpbiB8fCBoYXNDT1JTKSkge1xuICAgICAgcmV0dXJuIG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIH1cbiAgfSBjYXRjaCAoZSkge31cblxuICAvLyBVc2UgWERvbWFpblJlcXVlc3QgZm9yIElFOCBpZiBlbmFibGVzWERSIGlzIHRydWVcbiAgLy8gYmVjYXVzZSBsb2FkaW5nIGJhciBrZWVwcyBmbGFzaGluZyB3aGVuIHVzaW5nIGpzb25wLXBvbGxpbmdcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3l1amlvc2FrYS9zb2NrZS5pby1pZTgtbG9hZGluZy1leGFtcGxlXG4gIHRyeSB7XG4gICAgaWYgKFwidW5kZWZpbmVkXCIgIT09IHR5cGVvZiBYRG9tYWluUmVxdWVzdCAmJiAheHNjaGVtZSAmJiBlbmFibGVzWERSKSB7XG4gICAgICByZXR1cm4gbmV3IFhEb21haW5SZXF1ZXN0KCk7XG4gICAgfVxuICB9IGNhdGNoIChlKSB7fVxuXG4gIGlmICgheGRvbWFpbikge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gbmV3IGdsb2JhbFRoaXNbW1wiQWN0aXZlXCJdLmNvbmNhdChcIk9iamVjdFwiKS5qb2luKFwiWFwiKV0oXG4gICAgICAgIFwiTWljcm9zb2Z0LlhNTEhUVFBcIlxuICAgICAgKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICB9XG59O1xuIiwiY29uc3QgUEFDS0VUX1RZUEVTID0gT2JqZWN0LmNyZWF0ZShudWxsKTsgLy8gbm8gTWFwID0gbm8gcG9seWZpbGxcblBBQ0tFVF9UWVBFU1tcIm9wZW5cIl0gPSBcIjBcIjtcblBBQ0tFVF9UWVBFU1tcImNsb3NlXCJdID0gXCIxXCI7XG5QQUNLRVRfVFlQRVNbXCJwaW5nXCJdID0gXCIyXCI7XG5QQUNLRVRfVFlQRVNbXCJwb25nXCJdID0gXCIzXCI7XG5QQUNLRVRfVFlQRVNbXCJtZXNzYWdlXCJdID0gXCI0XCI7XG5QQUNLRVRfVFlQRVNbXCJ1cGdyYWRlXCJdID0gXCI1XCI7XG5QQUNLRVRfVFlQRVNbXCJub29wXCJdID0gXCI2XCI7XG5cbmNvbnN0IFBBQ0tFVF9UWVBFU19SRVZFUlNFID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbk9iamVjdC5rZXlzKFBBQ0tFVF9UWVBFUykuZm9yRWFjaChrZXkgPT4ge1xuICBQQUNLRVRfVFlQRVNfUkVWRVJTRVtQQUNLRVRfVFlQRVNba2V5XV0gPSBrZXk7XG59KTtcblxuY29uc3QgRVJST1JfUEFDS0VUID0geyB0eXBlOiBcImVycm9yXCIsIGRhdGE6IFwicGFyc2VyIGVycm9yXCIgfTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIFBBQ0tFVF9UWVBFUyxcbiAgUEFDS0VUX1RZUEVTX1JFVkVSU0UsXG4gIEVSUk9SX1BBQ0tFVFxufTtcbiIsImNvbnN0IHsgUEFDS0VUX1RZUEVTX1JFVkVSU0UsIEVSUk9SX1BBQ0tFVCB9ID0gcmVxdWlyZShcIi4vY29tbW9uc1wiKTtcblxuY29uc3Qgd2l0aE5hdGl2ZUFycmF5QnVmZmVyID0gdHlwZW9mIEFycmF5QnVmZmVyID09PSBcImZ1bmN0aW9uXCI7XG5cbmxldCBiYXNlNjRkZWNvZGVyO1xuaWYgKHdpdGhOYXRpdmVBcnJheUJ1ZmZlcikge1xuICBiYXNlNjRkZWNvZGVyID0gcmVxdWlyZShcImJhc2U2NC1hcnJheWJ1ZmZlclwiKTtcbn1cblxuY29uc3QgZGVjb2RlUGFja2V0ID0gKGVuY29kZWRQYWNrZXQsIGJpbmFyeVR5cGUpID0+IHtcbiAgaWYgKHR5cGVvZiBlbmNvZGVkUGFja2V0ICE9PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IFwibWVzc2FnZVwiLFxuICAgICAgZGF0YTogbWFwQmluYXJ5KGVuY29kZWRQYWNrZXQsIGJpbmFyeVR5cGUpXG4gICAgfTtcbiAgfVxuICBjb25zdCB0eXBlID0gZW5jb2RlZFBhY2tldC5jaGFyQXQoMCk7XG4gIGlmICh0eXBlID09PSBcImJcIikge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBcIm1lc3NhZ2VcIixcbiAgICAgIGRhdGE6IGRlY29kZUJhc2U2NFBhY2tldChlbmNvZGVkUGFja2V0LnN1YnN0cmluZygxKSwgYmluYXJ5VHlwZSlcbiAgICB9O1xuICB9XG4gIGNvbnN0IHBhY2tldFR5cGUgPSBQQUNLRVRfVFlQRVNfUkVWRVJTRVt0eXBlXTtcbiAgaWYgKCFwYWNrZXRUeXBlKSB7XG4gICAgcmV0dXJuIEVSUk9SX1BBQ0tFVDtcbiAgfVxuICByZXR1cm4gZW5jb2RlZFBhY2tldC5sZW5ndGggPiAxXG4gICAgPyB7XG4gICAgICAgIHR5cGU6IFBBQ0tFVF9UWVBFU19SRVZFUlNFW3R5cGVdLFxuICAgICAgICBkYXRhOiBlbmNvZGVkUGFja2V0LnN1YnN0cmluZygxKVxuICAgICAgfVxuICAgIDoge1xuICAgICAgICB0eXBlOiBQQUNLRVRfVFlQRVNfUkVWRVJTRVt0eXBlXVxuICAgICAgfTtcbn07XG5cbmNvbnN0IGRlY29kZUJhc2U2NFBhY2tldCA9IChkYXRhLCBiaW5hcnlUeXBlKSA9PiB7XG4gIGlmIChiYXNlNjRkZWNvZGVyKSB7XG4gICAgY29uc3QgZGVjb2RlZCA9IGJhc2U2NGRlY29kZXIuZGVjb2RlKGRhdGEpO1xuICAgIHJldHVybiBtYXBCaW5hcnkoZGVjb2RlZCwgYmluYXJ5VHlwZSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHsgYmFzZTY0OiB0cnVlLCBkYXRhIH07IC8vIGZhbGxiYWNrIGZvciBvbGQgYnJvd3NlcnNcbiAgfVxufTtcblxuY29uc3QgbWFwQmluYXJ5ID0gKGRhdGEsIGJpbmFyeVR5cGUpID0+IHtcbiAgc3dpdGNoIChiaW5hcnlUeXBlKSB7XG4gICAgY2FzZSBcImJsb2JcIjpcbiAgICAgIHJldHVybiBkYXRhIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIgPyBuZXcgQmxvYihbZGF0YV0pIDogZGF0YTtcbiAgICBjYXNlIFwiYXJyYXlidWZmZXJcIjpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGRhdGE7IC8vIGFzc3VtaW5nIHRoZSBkYXRhIGlzIGFscmVhZHkgYW4gQXJyYXlCdWZmZXJcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBkZWNvZGVQYWNrZXQ7XG4iLCJjb25zdCB7IFBBQ0tFVF9UWVBFUyB9ID0gcmVxdWlyZShcIi4vY29tbW9uc1wiKTtcblxuY29uc3Qgd2l0aE5hdGl2ZUJsb2IgPVxuICB0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiIHx8XG4gICh0eXBlb2YgQmxvYiAhPT0gXCJ1bmRlZmluZWRcIiAmJlxuICAgIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChCbG9iKSA9PT0gXCJbb2JqZWN0IEJsb2JDb25zdHJ1Y3Rvcl1cIik7XG5jb25zdCB3aXRoTmF0aXZlQXJyYXlCdWZmZXIgPSB0eXBlb2YgQXJyYXlCdWZmZXIgPT09IFwiZnVuY3Rpb25cIjtcblxuLy8gQXJyYXlCdWZmZXIuaXNWaWV3IG1ldGhvZCBpcyBub3QgZGVmaW5lZCBpbiBJRTEwXG5jb25zdCBpc1ZpZXcgPSBvYmogPT4ge1xuICByZXR1cm4gdHlwZW9mIEFycmF5QnVmZmVyLmlzVmlldyA9PT0gXCJmdW5jdGlvblwiXG4gICAgPyBBcnJheUJ1ZmZlci5pc1ZpZXcob2JqKVxuICAgIDogb2JqICYmIG9iai5idWZmZXIgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcjtcbn07XG5cbmNvbnN0IGVuY29kZVBhY2tldCA9ICh7IHR5cGUsIGRhdGEgfSwgc3VwcG9ydHNCaW5hcnksIGNhbGxiYWNrKSA9PiB7XG4gIGlmICh3aXRoTmF0aXZlQmxvYiAmJiBkYXRhIGluc3RhbmNlb2YgQmxvYikge1xuICAgIGlmIChzdXBwb3J0c0JpbmFyeSkge1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKGRhdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZW5jb2RlQmxvYkFzQmFzZTY0KGRhdGEsIGNhbGxiYWNrKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoXG4gICAgd2l0aE5hdGl2ZUFycmF5QnVmZmVyICYmXG4gICAgKGRhdGEgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlciB8fCBpc1ZpZXcoZGF0YSkpXG4gICkge1xuICAgIGlmIChzdXBwb3J0c0JpbmFyeSkge1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKGRhdGEgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlciA/IGRhdGEgOiBkYXRhLmJ1ZmZlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBlbmNvZGVCbG9iQXNCYXNlNjQobmV3IEJsb2IoW2RhdGFdKSwgY2FsbGJhY2spO1xuICAgIH1cbiAgfVxuICAvLyBwbGFpbiBzdHJpbmdcbiAgcmV0dXJuIGNhbGxiYWNrKFBBQ0tFVF9UWVBFU1t0eXBlXSArIChkYXRhIHx8IFwiXCIpKTtcbn07XG5cbmNvbnN0IGVuY29kZUJsb2JBc0Jhc2U2NCA9IChkYXRhLCBjYWxsYmFjaykgPT4ge1xuICBjb25zdCBmaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgZmlsZVJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZmlsZVJlYWRlci5yZXN1bHQuc3BsaXQoXCIsXCIpWzFdO1xuICAgIGNhbGxiYWNrKFwiYlwiICsgY29udGVudCk7XG4gIH07XG4gIHJldHVybiBmaWxlUmVhZGVyLnJlYWRBc0RhdGFVUkwoZGF0YSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGVuY29kZVBhY2tldDtcbiIsImNvbnN0IGVuY29kZVBhY2tldCA9IHJlcXVpcmUoXCIuL2VuY29kZVBhY2tldFwiKTtcbmNvbnN0IGRlY29kZVBhY2tldCA9IHJlcXVpcmUoXCIuL2RlY29kZVBhY2tldFwiKTtcblxuY29uc3QgU0VQQVJBVE9SID0gU3RyaW5nLmZyb21DaGFyQ29kZSgzMCk7IC8vIHNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9EZWxpbWl0ZXIjQVNDSUlfZGVsaW1pdGVkX3RleHRcblxuY29uc3QgZW5jb2RlUGF5bG9hZCA9IChwYWNrZXRzLCBjYWxsYmFjaykgPT4ge1xuICAvLyBzb21lIHBhY2tldHMgbWF5IGJlIGFkZGVkIHRvIHRoZSBhcnJheSB3aGlsZSBlbmNvZGluZywgc28gdGhlIGluaXRpYWwgbGVuZ3RoIG11c3QgYmUgc2F2ZWRcbiAgY29uc3QgbGVuZ3RoID0gcGFja2V0cy5sZW5ndGg7XG4gIGNvbnN0IGVuY29kZWRQYWNrZXRzID0gbmV3IEFycmF5KGxlbmd0aCk7XG4gIGxldCBjb3VudCA9IDA7XG5cbiAgcGFja2V0cy5mb3JFYWNoKChwYWNrZXQsIGkpID0+IHtcbiAgICAvLyBmb3JjZSBiYXNlNjQgZW5jb2RpbmcgZm9yIGJpbmFyeSBwYWNrZXRzXG4gICAgZW5jb2RlUGFja2V0KHBhY2tldCwgZmFsc2UsIGVuY29kZWRQYWNrZXQgPT4ge1xuICAgICAgZW5jb2RlZFBhY2tldHNbaV0gPSBlbmNvZGVkUGFja2V0O1xuICAgICAgaWYgKCsrY291bnQgPT09IGxlbmd0aCkge1xuICAgICAgICBjYWxsYmFjayhlbmNvZGVkUGFja2V0cy5qb2luKFNFUEFSQVRPUikpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn07XG5cbmNvbnN0IGRlY29kZVBheWxvYWQgPSAoZW5jb2RlZFBheWxvYWQsIGJpbmFyeVR5cGUpID0+IHtcbiAgY29uc3QgZW5jb2RlZFBhY2tldHMgPSBlbmNvZGVkUGF5bG9hZC5zcGxpdChTRVBBUkFUT1IpO1xuICBjb25zdCBwYWNrZXRzID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZW5jb2RlZFBhY2tldHMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBkZWNvZGVkUGFja2V0ID0gZGVjb2RlUGFja2V0KGVuY29kZWRQYWNrZXRzW2ldLCBiaW5hcnlUeXBlKTtcbiAgICBwYWNrZXRzLnB1c2goZGVjb2RlZFBhY2tldCk7XG4gICAgaWYgKGRlY29kZWRQYWNrZXQudHlwZSA9PT0gXCJlcnJvclwiKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHBhY2tldHM7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcHJvdG9jb2w6IDQsXG4gIGVuY29kZVBhY2tldCxcbiAgZW5jb2RlUGF5bG9hZCxcbiAgZGVjb2RlUGFja2V0LFxuICBkZWNvZGVQYXlsb2FkXG59O1xuIiwiXG4vKipcbiAqIE1vZHVsZSBleHBvcnRzLlxuICpcbiAqIExvZ2ljIGJvcnJvd2VkIGZyb20gTW9kZXJuaXpyOlxuICpcbiAqICAgLSBodHRwczovL2dpdGh1Yi5jb20vTW9kZXJuaXpyL01vZGVybml6ci9ibG9iL21hc3Rlci9mZWF0dXJlLWRldGVjdHMvY29ycy5qc1xuICovXG5cbnRyeSB7XG4gIG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIFhNTEh0dHBSZXF1ZXN0ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICd3aXRoQ3JlZGVudGlhbHMnIGluIG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xufSBjYXRjaCAoZXJyKSB7XG4gIC8vIGlmIFhNTEh0dHAgc3VwcG9ydCBpcyBkaXNhYmxlZCBpbiBJRSB0aGVuIGl0IHdpbGwgdGhyb3dcbiAgLy8gd2hlbiB0cnlpbmcgdG8gY3JlYXRlXG4gIG1vZHVsZS5leHBvcnRzID0gZmFsc2U7XG59XG4iLCIvKlxuICBodHRwczovL2dpdGh1Yi5jb20vYmFua3NlYW4gd3JhcHBlZCBNYWtvdG8gTWF0c3Vtb3RvIGFuZCBUYWt1amkgTmlzaGltdXJhJ3MgY29kZSBpbiBhIG5hbWVzcGFjZVxuICBzbyBpdCdzIGJldHRlciBlbmNhcHN1bGF0ZWQuIE5vdyB5b3UgY2FuIGhhdmUgbXVsdGlwbGUgcmFuZG9tIG51bWJlciBnZW5lcmF0b3JzXG4gIGFuZCB0aGV5IHdvbid0IHN0b21wIGFsbCBvdmVyIGVhY2hvdGhlcidzIHN0YXRlLlxuXG4gIElmIHlvdSB3YW50IHRvIHVzZSB0aGlzIGFzIGEgc3Vic3RpdHV0ZSBmb3IgTWF0aC5yYW5kb20oKSwgdXNlIHRoZSByYW5kb20oKVxuICBtZXRob2QgbGlrZSBzbzpcblxuICB2YXIgbSA9IG5ldyBNZXJzZW5uZVR3aXN0ZXIoKTtcbiAgdmFyIHJhbmRvbU51bWJlciA9IG0ucmFuZG9tKCk7XG5cbiAgWW91IGNhbiBhbHNvIGNhbGwgdGhlIG90aGVyIGdlbnJhbmRfe2Zvb30oKSBtZXRob2RzIG9uIHRoZSBpbnN0YW5jZS5cblxuICBJZiB5b3Ugd2FudCB0byB1c2UgYSBzcGVjaWZpYyBzZWVkIGluIG9yZGVyIHRvIGdldCBhIHJlcGVhdGFibGUgcmFuZG9tXG4gIHNlcXVlbmNlLCBwYXNzIGFuIGludGVnZXIgaW50byB0aGUgY29uc3RydWN0b3I6XG5cbiAgdmFyIG0gPSBuZXcgTWVyc2VubmVUd2lzdGVyKDEyMyk7XG5cbiAgYW5kIHRoYXQgd2lsbCBhbHdheXMgcHJvZHVjZSB0aGUgc2FtZSByYW5kb20gc2VxdWVuY2UuXG5cbiAgU2VhbiBNY0N1bGxvdWdoIChiYW5rc2VhbkBnbWFpbC5jb20pXG4qL1xuXG4vKlxuICAgQSBDLXByb2dyYW0gZm9yIE1UMTk5MzcsIHdpdGggaW5pdGlhbGl6YXRpb24gaW1wcm92ZWQgMjAwMi8xLzI2LlxuICAgQ29kZWQgYnkgVGFrdWppIE5pc2hpbXVyYSBhbmQgTWFrb3RvIE1hdHN1bW90by5cblxuICAgQmVmb3JlIHVzaW5nLCBpbml0aWFsaXplIHRoZSBzdGF0ZSBieSB1c2luZyBpbml0X3NlZWQoc2VlZClcbiAgIG9yIGluaXRfYnlfYXJyYXkoaW5pdF9rZXksIGtleV9sZW5ndGgpLlxuXG4gICBDb3B5cmlnaHQgKEMpIDE5OTcgLSAyMDAyLCBNYWtvdG8gTWF0c3Vtb3RvIGFuZCBUYWt1amkgTmlzaGltdXJhLFxuICAgQWxsIHJpZ2h0cyByZXNlcnZlZC5cblxuICAgUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0XG4gICBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnNcbiAgIGFyZSBtZXQ6XG5cbiAgICAgMS4gUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHRcbiAgICAgICAgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuXG4gICAgIDIuIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0XG4gICAgICAgIG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lciBpbiB0aGVcbiAgICAgICAgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlIGRpc3RyaWJ1dGlvbi5cblxuICAgICAzLiBUaGUgbmFtZXMgb2YgaXRzIGNvbnRyaWJ1dG9ycyBtYXkgbm90IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlXG4gICAgICAgIHByb2R1Y3RzIGRlcml2ZWQgZnJvbSB0aGlzIHNvZnR3YXJlIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlblxuICAgICAgICBwZXJtaXNzaW9uLlxuXG4gICBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTXG4gICBcIkFTIElTXCIgQU5EIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UXG4gICBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1JcbiAgIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELiAgSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVCBPV05FUiBPUlxuICAgQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsXG4gICBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sXG4gICBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSwgREFUQSwgT1JcbiAgIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWSBUSEVPUlkgT0ZcbiAgIExJQUJJTElUWSwgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HXG4gICBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GIFRISVNcbiAgIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuXG5cbiAgIEFueSBmZWVkYmFjayBpcyB2ZXJ5IHdlbGNvbWUuXG4gICBodHRwOi8vd3d3Lm1hdGguc2NpLmhpcm9zaGltYS11LmFjLmpwL35tLW1hdC9NVC9lbXQuaHRtbFxuICAgZW1haWw6IG0tbWF0IEAgbWF0aC5zY2kuaGlyb3NoaW1hLXUuYWMuanAgKHJlbW92ZSBzcGFjZSlcbiovXG5cbnZhciBNZXJzZW5uZVR3aXN0ZXIgPSBmdW5jdGlvbihzZWVkKSB7XG5cdGlmIChzZWVkID09IHVuZGVmaW5lZCkge1xuXHRcdHNlZWQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblx0fVxuXG5cdC8qIFBlcmlvZCBwYXJhbWV0ZXJzICovXG5cdHRoaXMuTiA9IDYyNDtcblx0dGhpcy5NID0gMzk3O1xuXHR0aGlzLk1BVFJJWF9BID0gMHg5OTA4YjBkZjsgICAvKiBjb25zdGFudCB2ZWN0b3IgYSAqL1xuXHR0aGlzLlVQUEVSX01BU0sgPSAweDgwMDAwMDAwOyAvKiBtb3N0IHNpZ25pZmljYW50IHctciBiaXRzICovXG5cdHRoaXMuTE9XRVJfTUFTSyA9IDB4N2ZmZmZmZmY7IC8qIGxlYXN0IHNpZ25pZmljYW50IHIgYml0cyAqL1xuXG5cdHRoaXMubXQgPSBuZXcgQXJyYXkodGhpcy5OKTsgLyogdGhlIGFycmF5IGZvciB0aGUgc3RhdGUgdmVjdG9yICovXG5cdHRoaXMubXRpPXRoaXMuTisxOyAvKiBtdGk9PU4rMSBtZWFucyBtdFtOXSBpcyBub3QgaW5pdGlhbGl6ZWQgKi9cblxuXHRpZiAoc2VlZC5jb25zdHJ1Y3RvciA9PSBBcnJheSkge1xuXHRcdHRoaXMuaW5pdF9ieV9hcnJheShzZWVkLCBzZWVkLmxlbmd0aCk7XG5cdH1cblx0ZWxzZSB7XG5cdFx0dGhpcy5pbml0X3NlZWQoc2VlZCk7XG5cdH1cbn1cblxuLyogaW5pdGlhbGl6ZXMgbXRbTl0gd2l0aCBhIHNlZWQgKi9cbi8qIG9yaWdpbiBuYW1lIGluaXRfZ2VucmFuZCAqL1xuTWVyc2VubmVUd2lzdGVyLnByb3RvdHlwZS5pbml0X3NlZWQgPSBmdW5jdGlvbihzKSB7XG5cdHRoaXMubXRbMF0gPSBzID4+PiAwO1xuXHRmb3IgKHRoaXMubXRpPTE7IHRoaXMubXRpPHRoaXMuTjsgdGhpcy5tdGkrKykge1xuXHRcdHZhciBzID0gdGhpcy5tdFt0aGlzLm10aS0xXSBeICh0aGlzLm10W3RoaXMubXRpLTFdID4+PiAzMCk7XG5cdFx0dGhpcy5tdFt0aGlzLm10aV0gPSAoKCgoKHMgJiAweGZmZmYwMDAwKSA+Pj4gMTYpICogMTgxMjQzMzI1MykgPDwgMTYpICsgKHMgJiAweDAwMDBmZmZmKSAqIDE4MTI0MzMyNTMpXG5cdFx0KyB0aGlzLm10aTtcblx0XHQvKiBTZWUgS251dGggVEFPQ1AgVm9sMi4gM3JkIEVkLiBQLjEwNiBmb3IgbXVsdGlwbGllci4gKi9cblx0XHQvKiBJbiB0aGUgcHJldmlvdXMgdmVyc2lvbnMsIE1TQnMgb2YgdGhlIHNlZWQgYWZmZWN0ICAgKi9cblx0XHQvKiBvbmx5IE1TQnMgb2YgdGhlIGFycmF5IG10W10uICAgICAgICAgICAgICAgICAgICAgICAgKi9cblx0XHQvKiAyMDAyLzAxLzA5IG1vZGlmaWVkIGJ5IE1ha290byBNYXRzdW1vdG8gICAgICAgICAgICAgKi9cblx0XHR0aGlzLm10W3RoaXMubXRpXSA+Pj49IDA7XG5cdFx0LyogZm9yID4zMiBiaXQgbWFjaGluZXMgKi9cblx0fVxufVxuXG4vKiBpbml0aWFsaXplIGJ5IGFuIGFycmF5IHdpdGggYXJyYXktbGVuZ3RoICovXG4vKiBpbml0X2tleSBpcyB0aGUgYXJyYXkgZm9yIGluaXRpYWxpemluZyBrZXlzICovXG4vKiBrZXlfbGVuZ3RoIGlzIGl0cyBsZW5ndGggKi9cbi8qIHNsaWdodCBjaGFuZ2UgZm9yIEMrKywgMjAwNC8yLzI2ICovXG5NZXJzZW5uZVR3aXN0ZXIucHJvdG90eXBlLmluaXRfYnlfYXJyYXkgPSBmdW5jdGlvbihpbml0X2tleSwga2V5X2xlbmd0aCkge1xuXHR2YXIgaSwgaiwgaztcblx0dGhpcy5pbml0X3NlZWQoMTk2NTAyMTgpO1xuXHRpPTE7IGo9MDtcblx0ayA9ICh0aGlzLk4+a2V5X2xlbmd0aCA/IHRoaXMuTiA6IGtleV9sZW5ndGgpO1xuXHRmb3IgKDsgazsgay0tKSB7XG5cdFx0dmFyIHMgPSB0aGlzLm10W2ktMV0gXiAodGhpcy5tdFtpLTFdID4+PiAzMClcblx0XHR0aGlzLm10W2ldID0gKHRoaXMubXRbaV0gXiAoKCgoKHMgJiAweGZmZmYwMDAwKSA+Pj4gMTYpICogMTY2NDUyNSkgPDwgMTYpICsgKChzICYgMHgwMDAwZmZmZikgKiAxNjY0NTI1KSkpXG5cdFx0KyBpbml0X2tleVtqXSArIGo7IC8qIG5vbiBsaW5lYXIgKi9cblx0XHR0aGlzLm10W2ldID4+Pj0gMDsgLyogZm9yIFdPUkRTSVpFID4gMzIgbWFjaGluZXMgKi9cblx0XHRpKys7IGorKztcblx0XHRpZiAoaT49dGhpcy5OKSB7IHRoaXMubXRbMF0gPSB0aGlzLm10W3RoaXMuTi0xXTsgaT0xOyB9XG5cdFx0aWYgKGo+PWtleV9sZW5ndGgpIGo9MDtcblx0fVxuXHRmb3IgKGs9dGhpcy5OLTE7IGs7IGstLSkge1xuXHRcdHZhciBzID0gdGhpcy5tdFtpLTFdIF4gKHRoaXMubXRbaS0xXSA+Pj4gMzApO1xuXHRcdHRoaXMubXRbaV0gPSAodGhpcy5tdFtpXSBeICgoKCgocyAmIDB4ZmZmZjAwMDApID4+PiAxNikgKiAxNTY2MDgzOTQxKSA8PCAxNikgKyAocyAmIDB4MDAwMGZmZmYpICogMTU2NjA4Mzk0MSkpXG5cdFx0LSBpOyAvKiBub24gbGluZWFyICovXG5cdFx0dGhpcy5tdFtpXSA+Pj49IDA7IC8qIGZvciBXT1JEU0laRSA+IDMyIG1hY2hpbmVzICovXG5cdFx0aSsrO1xuXHRcdGlmIChpPj10aGlzLk4pIHsgdGhpcy5tdFswXSA9IHRoaXMubXRbdGhpcy5OLTFdOyBpPTE7IH1cblx0fVxuXG5cdHRoaXMubXRbMF0gPSAweDgwMDAwMDAwOyAvKiBNU0IgaXMgMTsgYXNzdXJpbmcgbm9uLXplcm8gaW5pdGlhbCBhcnJheSAqL1xufVxuXG4vKiBnZW5lcmF0ZXMgYSByYW5kb20gbnVtYmVyIG9uIFswLDB4ZmZmZmZmZmZdLWludGVydmFsICovXG4vKiBvcmlnaW4gbmFtZSBnZW5yYW5kX2ludDMyICovXG5NZXJzZW5uZVR3aXN0ZXIucHJvdG90eXBlLnJhbmRvbV9pbnQgPSBmdW5jdGlvbigpIHtcblx0dmFyIHk7XG5cdHZhciBtYWcwMSA9IG5ldyBBcnJheSgweDAsIHRoaXMuTUFUUklYX0EpO1xuXHQvKiBtYWcwMVt4XSA9IHggKiBNQVRSSVhfQSAgZm9yIHg9MCwxICovXG5cblx0aWYgKHRoaXMubXRpID49IHRoaXMuTikgeyAvKiBnZW5lcmF0ZSBOIHdvcmRzIGF0IG9uZSB0aW1lICovXG5cdFx0dmFyIGtrO1xuXG5cdFx0aWYgKHRoaXMubXRpID09IHRoaXMuTisxKSAgLyogaWYgaW5pdF9zZWVkKCkgaGFzIG5vdCBiZWVuIGNhbGxlZCwgKi9cblx0XHRcdHRoaXMuaW5pdF9zZWVkKDU0ODkpOyAgLyogYSBkZWZhdWx0IGluaXRpYWwgc2VlZCBpcyB1c2VkICovXG5cblx0XHRmb3IgKGtrPTA7a2s8dGhpcy5OLXRoaXMuTTtraysrKSB7XG5cdFx0XHR5ID0gKHRoaXMubXRba2tdJnRoaXMuVVBQRVJfTUFTSyl8KHRoaXMubXRba2srMV0mdGhpcy5MT1dFUl9NQVNLKTtcblx0XHRcdHRoaXMubXRba2tdID0gdGhpcy5tdFtrayt0aGlzLk1dIF4gKHkgPj4+IDEpIF4gbWFnMDFbeSAmIDB4MV07XG5cdFx0fVxuXHRcdGZvciAoO2trPHRoaXMuTi0xO2trKyspIHtcblx0XHRcdHkgPSAodGhpcy5tdFtra10mdGhpcy5VUFBFUl9NQVNLKXwodGhpcy5tdFtraysxXSZ0aGlzLkxPV0VSX01BU0spO1xuXHRcdFx0dGhpcy5tdFtra10gPSB0aGlzLm10W2trKyh0aGlzLk0tdGhpcy5OKV0gXiAoeSA+Pj4gMSkgXiBtYWcwMVt5ICYgMHgxXTtcblx0XHR9XG5cdFx0eSA9ICh0aGlzLm10W3RoaXMuTi0xXSZ0aGlzLlVQUEVSX01BU0spfCh0aGlzLm10WzBdJnRoaXMuTE9XRVJfTUFTSyk7XG5cdFx0dGhpcy5tdFt0aGlzLk4tMV0gPSB0aGlzLm10W3RoaXMuTS0xXSBeICh5ID4+PiAxKSBeIG1hZzAxW3kgJiAweDFdO1xuXG5cdFx0dGhpcy5tdGkgPSAwO1xuXHR9XG5cblx0eSA9IHRoaXMubXRbdGhpcy5tdGkrK107XG5cblx0LyogVGVtcGVyaW5nICovXG5cdHkgXj0gKHkgPj4+IDExKTtcblx0eSBePSAoeSA8PCA3KSAmIDB4OWQyYzU2ODA7XG5cdHkgXj0gKHkgPDwgMTUpICYgMHhlZmM2MDAwMDtcblx0eSBePSAoeSA+Pj4gMTgpO1xuXG5cdHJldHVybiB5ID4+PiAwO1xufVxuXG4vKiBnZW5lcmF0ZXMgYSByYW5kb20gbnVtYmVyIG9uIFswLDB4N2ZmZmZmZmZdLWludGVydmFsICovXG4vKiBvcmlnaW4gbmFtZSBnZW5yYW5kX2ludDMxICovXG5NZXJzZW5uZVR3aXN0ZXIucHJvdG90eXBlLnJhbmRvbV9pbnQzMSA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gKHRoaXMucmFuZG9tX2ludCgpPj4+MSk7XG59XG5cbi8qIGdlbmVyYXRlcyBhIHJhbmRvbSBudW1iZXIgb24gWzAsMV0tcmVhbC1pbnRlcnZhbCAqL1xuLyogb3JpZ2luIG5hbWUgZ2VucmFuZF9yZWFsMSAqL1xuTWVyc2VubmVUd2lzdGVyLnByb3RvdHlwZS5yYW5kb21faW5jbCA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcy5yYW5kb21faW50KCkqKDEuMC80Mjk0OTY3Mjk1LjApO1xuXHQvKiBkaXZpZGVkIGJ5IDJeMzItMSAqL1xufVxuXG4vKiBnZW5lcmF0ZXMgYSByYW5kb20gbnVtYmVyIG9uIFswLDEpLXJlYWwtaW50ZXJ2YWwgKi9cbk1lcnNlbm5lVHdpc3Rlci5wcm90b3R5cGUucmFuZG9tID0gZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzLnJhbmRvbV9pbnQoKSooMS4wLzQyOTQ5NjcyOTYuMCk7XG5cdC8qIGRpdmlkZWQgYnkgMl4zMiAqL1xufVxuXG4vKiBnZW5lcmF0ZXMgYSByYW5kb20gbnVtYmVyIG9uICgwLDEpLXJlYWwtaW50ZXJ2YWwgKi9cbi8qIG9yaWdpbiBuYW1lIGdlbnJhbmRfcmVhbDMgKi9cbk1lcnNlbm5lVHdpc3Rlci5wcm90b3R5cGUucmFuZG9tX2V4Y2wgPSBmdW5jdGlvbigpIHtcblx0cmV0dXJuICh0aGlzLnJhbmRvbV9pbnQoKSArIDAuNSkqKDEuMC80Mjk0OTY3Mjk2LjApO1xuXHQvKiBkaXZpZGVkIGJ5IDJeMzIgKi9cbn1cblxuLyogZ2VuZXJhdGVzIGEgcmFuZG9tIG51bWJlciBvbiBbMCwxKSB3aXRoIDUzLWJpdCByZXNvbHV0aW9uKi9cbi8qIG9yaWdpbiBuYW1lIGdlbnJhbmRfcmVzNTMgKi9cbk1lcnNlbm5lVHdpc3Rlci5wcm90b3R5cGUucmFuZG9tX2xvbmcgPSBmdW5jdGlvbigpIHtcblx0dmFyIGE9dGhpcy5yYW5kb21faW50KCk+Pj41LCBiPXRoaXMucmFuZG9tX2ludCgpPj4+Njtcblx0cmV0dXJuKGEqNjcxMDg4NjQuMCtiKSooMS4wLzkwMDcxOTkyNTQ3NDA5OTIuMCk7XG59XG5cbi8qIFRoZXNlIHJlYWwgdmVyc2lvbnMgYXJlIGR1ZSB0byBJc2FrdSBXYWRhLCAyMDAyLzAxLzA5IGFkZGVkICovXG5cbm1vZHVsZS5leHBvcnRzID0gTWVyc2VubmVUd2lzdGVyO1xuIiwiLyoqXG4gKiBDb21waWxlcyBhIHF1ZXJ5c3RyaW5nXG4gKiBSZXR1cm5zIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgb2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5leHBvcnRzLmVuY29kZSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgdmFyIHN0ciA9ICcnO1xuXG4gIGZvciAodmFyIGkgaW4gb2JqKSB7XG4gICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgaWYgKHN0ci5sZW5ndGgpIHN0ciArPSAnJic7XG4gICAgICBzdHIgKz0gZW5jb2RlVVJJQ29tcG9uZW50KGkpICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG9ialtpXSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0cjtcbn07XG5cbi8qKlxuICogUGFyc2VzIGEgc2ltcGxlIHF1ZXJ5c3RyaW5nIGludG8gYW4gb2JqZWN0XG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHFzXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5leHBvcnRzLmRlY29kZSA9IGZ1bmN0aW9uKHFzKXtcbiAgdmFyIHFyeSA9IHt9O1xuICB2YXIgcGFpcnMgPSBxcy5zcGxpdCgnJicpO1xuICBmb3IgKHZhciBpID0gMCwgbCA9IHBhaXJzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIHZhciBwYWlyID0gcGFpcnNbaV0uc3BsaXQoJz0nKTtcbiAgICBxcnlbZGVjb2RlVVJJQ29tcG9uZW50KHBhaXJbMF0pXSA9IGRlY29kZVVSSUNvbXBvbmVudChwYWlyWzFdKTtcbiAgfVxuICByZXR1cm4gcXJ5O1xufTtcbiIsIi8qKlxuICogUGFyc2VzIGFuIFVSSVxuICpcbiAqIEBhdXRob3IgU3RldmVuIExldml0aGFuIDxzdGV2ZW5sZXZpdGhhbi5jb20+IChNSVQgbGljZW5zZSlcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbnZhciByZSA9IC9eKD86KD8hW146QF0rOlteOkBcXC9dKkApKGh0dHB8aHR0cHN8d3N8d3NzKTpcXC9cXC8pPygoPzooKFteOkBdKikoPzo6KFteOkBdKikpPyk/QCk/KCg/OlthLWYwLTldezAsNH06KXsyLDd9W2EtZjAtOV17MCw0fXxbXjpcXC8/I10qKSg/OjooXFxkKikpPykoKChcXC8oPzpbXj8jXSg/IVtePyNcXC9dKlxcLltePyNcXC8uXSsoPzpbPyNdfCQpKSkqXFwvPyk/KFtePyNcXC9dKikpKD86XFw/KFteI10qKSk/KD86IyguKikpPykvO1xuXG52YXIgcGFydHMgPSBbXG4gICAgJ3NvdXJjZScsICdwcm90b2NvbCcsICdhdXRob3JpdHknLCAndXNlckluZm8nLCAndXNlcicsICdwYXNzd29yZCcsICdob3N0JywgJ3BvcnQnLCAncmVsYXRpdmUnLCAncGF0aCcsICdkaXJlY3RvcnknLCAnZmlsZScsICdxdWVyeScsICdhbmNob3InXG5dO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHBhcnNldXJpKHN0cikge1xuICAgIHZhciBzcmMgPSBzdHIsXG4gICAgICAgIGIgPSBzdHIuaW5kZXhPZignWycpLFxuICAgICAgICBlID0gc3RyLmluZGV4T2YoJ10nKTtcblxuICAgIGlmIChiICE9IC0xICYmIGUgIT0gLTEpIHtcbiAgICAgICAgc3RyID0gc3RyLnN1YnN0cmluZygwLCBiKSArIHN0ci5zdWJzdHJpbmcoYiwgZSkucmVwbGFjZSgvOi9nLCAnOycpICsgc3RyLnN1YnN0cmluZyhlLCBzdHIubGVuZ3RoKTtcbiAgICB9XG5cbiAgICB2YXIgbSA9IHJlLmV4ZWMoc3RyIHx8ICcnKSxcbiAgICAgICAgdXJpID0ge30sXG4gICAgICAgIGkgPSAxNDtcblxuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgdXJpW3BhcnRzW2ldXSA9IG1baV0gfHwgJyc7XG4gICAgfVxuXG4gICAgaWYgKGIgIT0gLTEgJiYgZSAhPSAtMSkge1xuICAgICAgICB1cmkuc291cmNlID0gc3JjO1xuICAgICAgICB1cmkuaG9zdCA9IHVyaS5ob3N0LnN1YnN0cmluZygxLCB1cmkuaG9zdC5sZW5ndGggLSAxKS5yZXBsYWNlKC87L2csICc6Jyk7XG4gICAgICAgIHVyaS5hdXRob3JpdHkgPSB1cmkuYXV0aG9yaXR5LnJlcGxhY2UoJ1snLCAnJykucmVwbGFjZSgnXScsICcnKS5yZXBsYWNlKC87L2csICc6Jyk7XG4gICAgICAgIHVyaS5pcHY2dXJpID0gdHJ1ZTtcbiAgICB9XG5cbiAgICB1cmkucGF0aE5hbWVzID0gcGF0aE5hbWVzKHVyaSwgdXJpWydwYXRoJ10pO1xuICAgIHVyaS5xdWVyeUtleSA9IHF1ZXJ5S2V5KHVyaSwgdXJpWydxdWVyeSddKTtcblxuICAgIHJldHVybiB1cmk7XG59O1xuXG5mdW5jdGlvbiBwYXRoTmFtZXMob2JqLCBwYXRoKSB7XG4gICAgdmFyIHJlZ3ggPSAvXFwvezIsOX0vZyxcbiAgICAgICAgbmFtZXMgPSBwYXRoLnJlcGxhY2UocmVneCwgXCIvXCIpLnNwbGl0KFwiL1wiKTtcblxuICAgIGlmIChwYXRoLnN1YnN0cigwLCAxKSA9PSAnLycgfHwgcGF0aC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgbmFtZXMuc3BsaWNlKDAsIDEpO1xuICAgIH1cbiAgICBpZiAocGF0aC5zdWJzdHIocGF0aC5sZW5ndGggLSAxLCAxKSA9PSAnLycpIHtcbiAgICAgICAgbmFtZXMuc3BsaWNlKG5hbWVzLmxlbmd0aCAtIDEsIDEpO1xuICAgIH1cblxuICAgIHJldHVybiBuYW1lcztcbn1cblxuZnVuY3Rpb24gcXVlcnlLZXkodXJpLCBxdWVyeSkge1xuICAgIHZhciBkYXRhID0ge307XG5cbiAgICBxdWVyeS5yZXBsYWNlKC8oPzpefCYpKFteJj1dKik9PyhbXiZdKikvZywgZnVuY3Rpb24gKCQwLCAkMSwgJDIpIHtcbiAgICAgICAgaWYgKCQxKSB7XG4gICAgICAgICAgICBkYXRhWyQxXSA9ICQyO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZGF0YTtcbn1cbiIsImNvbnN0IEFSR19MRU5HVEggPSB7XG4gIGE6IDcsXG4gIGM6IDYsXG4gIGg6IDEsXG4gIGw6IDIsXG4gIG06IDIsXG4gIHE6IDQsXG4gIHM6IDQsXG4gIHQ6IDIsXG4gIHY6IDEsXG4gIHo6IDAsXG59O1xuXG5jb25zdCBTRUdNRU5UX1BBVFRFUk4gPSAvKFthc3R2enFtaGxjXSkoW15hc3R2enFtaGxjXSopL2dpO1xuXG5jb25zdCBOVU1CRVIgPSAvLT9bMC05XSpcXC4/WzAtOV0rKD86ZVstK10/XFxkKyk/L2dpO1xuXG5mdW5jdGlvbiBwYXJzZVZhbHVlcyhhcmdzKSB7XG4gIGNvbnN0IG51bWJlcnMgPSBhcmdzLm1hdGNoKE5VTUJFUik7XG4gIHJldHVybiBudW1iZXJzID8gbnVtYmVycy5tYXAoTnVtYmVyKSA6IFtdO1xufVxuXG4vKipcbiAqIHBhcnNlIGFuIHN2ZyBwYXRoIGRhdGEgc3RyaW5nLiBHZW5lcmF0ZXMgYW4gQXJyYXlcbiAqIG9mIGNvbW1hbmRzIHdoZXJlIGVhY2ggY29tbWFuZCBpcyBhbiBBcnJheSBvZiB0aGVcbiAqIGZvcm0gYFtjb21tYW5kLCBhcmcxLCBhcmcyLCAuLi5dYFxuICpcbiAqIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9TVkcvcGF0aHMuaHRtbCNQYXRoRGF0YUdlbmVyYWxJbmZvcm1hdGlvblxuICogQGlnbm9yZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoXG4gKiBAcmV0dXJucyB7YXJyYXl9XG4gKi9cbmZ1bmN0aW9uIHBhcnNlKHBhdGgpIHtcbiAgY29uc3QgZGF0YSA9IFtdO1xuICBjb25zdCBwID0gU3RyaW5nKHBhdGgpLnRyaW0oKTtcblxuICAvLyBBIHBhdGggZGF0YSBzZWdtZW50IChpZiB0aGVyZSBpcyBvbmUpIG11c3QgYmVnaW4gd2l0aCBhIFwibW92ZXRvXCIgY29tbWFuZFxuICBpZiAocFswXSAhPT0gJ00nICYmIHBbMF0gIT09ICdtJykge1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgcC5yZXBsYWNlKFNFR01FTlRfUEFUVEVSTiwgKF8sIGNvbW1hbmQsIGFyZ3MpID0+IHtcbiAgICBsZXQgdHlwZSA9IGNvbW1hbmQudG9Mb3dlckNhc2UoKTtcbiAgICBsZXQgdGhlQXJncyA9IHBhcnNlVmFsdWVzKGFyZ3MpO1xuICAgIGxldCB0aGVDb21tYW5kID0gY29tbWFuZDtcbiAgICAvLyBvdmVybG9hZGVkIG1vdmVUb1xuICAgIGlmICh0eXBlID09PSAnbScgJiYgdGhlQXJncy5sZW5ndGggPiAyKSB7XG4gICAgICBkYXRhLnB1c2goW3RoZUNvbW1hbmRdLmNvbmNhdCh0aGVBcmdzLnNwbGljZSgwLCAyKSkpO1xuICAgICAgdHlwZSA9ICdsJztcbiAgICAgIHRoZUNvbW1hbmQgPSB0aGVDb21tYW5kID09PSAnbScgPyAnbCcgOiAnTCc7XG4gICAgfVxuXG4gICAgLy8gSWdub3JlIGludmFsaWQgY29tbWFuZHNcbiAgICBpZiAodGhlQXJncy5sZW5ndGggPCBBUkdfTEVOR1RIW3R5cGVdKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgZGF0YS5wdXNoKFt0aGVDb21tYW5kXS5jb25jYXQodGhlQXJncy5zcGxpY2UoMCwgQVJHX0xFTkdUSFt0eXBlXSkpKTtcblxuICAgIC8vIFRoZSBjb21tYW5kIGxldHRlciBjYW4gYmUgZWxpbWluYXRlZCBvbiBzdWJzZXF1ZW50IGNvbW1hbmRzIGlmIHRoZVxuICAgIC8vIHNhbWUgY29tbWFuZCBpcyB1c2VkIG11bHRpcGxlIHRpbWVzIGluIGEgcm93IChlLmcuLCB5b3UgY2FuIGRyb3AgdGhlXG4gICAgLy8gc2Vjb25kIFwiTFwiIGluIFwiTSAxMDAgMjAwIEwgMjAwIDEwMCBMIC0xMDAgLTIwMFwiIGFuZCB1c2VcbiAgICAvLyBcIk0gMTAwIDIwMCBMIDIwMCAxMDAgLTEwMCAtMjAwXCIgaW5zdGVhZCkuXG4gICAgd2hpbGUgKFxuICAgICAgdGhlQXJncy5sZW5ndGggPj0gQVJHX0xFTkdUSFt0eXBlXSAmJlxuICAgICAgdGhlQXJncy5sZW5ndGggJiZcbiAgICAgIEFSR19MRU5HVEhbdHlwZV1cbiAgICApIHtcbiAgICAgIGRhdGEucHVzaChbdGhlQ29tbWFuZF0uY29uY2F0KHRoZUFyZ3Muc3BsaWNlKDAsIEFSR19MRU5HVEhbdHlwZV0pKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuICcnO1xuICB9KTtcbiAgcmV0dXJuIGRhdGE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcGFyc2U7XG4iLCJjb25zdCBwYXJzZVBhdGggPSByZXF1aXJlKCcuL3BhcnNlLXBhdGgnKTtcblxuLyoqXG4gKiBXb3JrIGFyb3VuZCBmb3IgaHR0cHM6Ly9kZXZlbG9wZXIubWljcm9zb2Z0LmNvbS9lbi11cy9taWNyb3NvZnQtZWRnZS9wbGF0Zm9ybS9pc3N1ZXMvODQzODg4NC9cbiAqIEBpZ25vcmVcbiAqL1xuZnVuY3Rpb24gc3VwcG9ydHNTdmdQYXRoQXJndW1lbnQod2luZG93KSB7XG4gIGNvbnN0IGNhbnZhcyA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgY29uc3QgZyA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICBjb25zdCBwID0gbmV3IHdpbmRvdy5QYXRoMkQoJ00wIDAgTDEgMScpO1xuICBnLnN0cm9rZVN0eWxlID0gJ3JlZCc7XG4gIGcubGluZVdpZHRoID0gMTtcbiAgZy5zdHJva2UocCk7XG4gIGNvbnN0IGltZ0RhdGEgPSBnLmdldEltYWdlRGF0YSgwLCAwLCAxLCAxKTtcbiAgcmV0dXJuIGltZ0RhdGEuZGF0YVswXSA9PT0gMjU1OyAvLyBDaGVjayBpZiBwaXhlbCBpcyByZWRcbn1cblxuZnVuY3Rpb24gcm90YXRlUG9pbnQocG9pbnQsIGFuZ2xlKSB7XG4gIGNvbnN0IG54ID0gcG9pbnQueCAqIE1hdGguY29zKGFuZ2xlKSAtIHBvaW50LnkgKiBNYXRoLnNpbihhbmdsZSk7XG4gIGNvbnN0IG55ID0gcG9pbnQueSAqIE1hdGguY29zKGFuZ2xlKSArIHBvaW50LnggKiBNYXRoLnNpbihhbmdsZSk7XG4gIHBvaW50LnggPSBueDtcbiAgcG9pbnQueSA9IG55O1xufVxuXG5mdW5jdGlvbiB0cmFuc2xhdGVQb2ludChwb2ludCwgZHgsIGR5KSB7XG4gIHBvaW50LnggKz0gZHg7XG4gIHBvaW50LnkgKz0gZHk7XG59XG5cbmZ1bmN0aW9uIHNjYWxlUG9pbnQocG9pbnQsIHMpIHtcbiAgcG9pbnQueCAqPSBzO1xuICBwb2ludC55ICo9IHM7XG59XG5cbmZ1bmN0aW9uIHBvbHlGaWxsUGF0aDJEKHdpbmRvdykge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgIXdpbmRvdy5DYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKHdpbmRvdy5QYXRoMkQgJiYgc3VwcG9ydHNTdmdQYXRoQXJndW1lbnQod2luZG93KSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmF0ZXMgYSBQYXRoMkQgcG9seWZpbGwgb2JqZWN0XG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAaWdub3JlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwYXRoXG4gICAqL1xuICBjbGFzcyBQYXRoMkQge1xuICAgIGNvbnN0cnVjdG9yKHBhdGgpIHtcbiAgICAgIHRoaXMuc2VnbWVudHMgPSBbXTtcbiAgICAgIGlmIChwYXRoICYmIHBhdGggaW5zdGFuY2VvZiBQYXRoMkQpIHtcbiAgICAgICAgdGhpcy5zZWdtZW50cy5wdXNoKC4uLnBhdGguc2VnbWVudHMpO1xuICAgICAgfSBlbHNlIGlmIChwYXRoKSB7XG4gICAgICAgIHRoaXMuc2VnbWVudHMgPSBwYXJzZVBhdGgocGF0aCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgYWRkUGF0aChwYXRoKSB7XG4gICAgICBpZiAocGF0aCAmJiBwYXRoIGluc3RhbmNlb2YgUGF0aDJEKSB7XG4gICAgICAgIHRoaXMuc2VnbWVudHMucHVzaCguLi5wYXRoLnNlZ21lbnRzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtb3ZlVG8oeCwgeSkge1xuICAgICAgdGhpcy5zZWdtZW50cy5wdXNoKFsnTScsIHgsIHldKTtcbiAgICB9XG5cbiAgICBsaW5lVG8oeCwgeSkge1xuICAgICAgdGhpcy5zZWdtZW50cy5wdXNoKFsnTCcsIHgsIHldKTtcbiAgICB9XG5cbiAgICBhcmMoeCwgeSwgciwgc3RhcnQsIGVuZCwgY2N3KSB7XG4gICAgICB0aGlzLnNlZ21lbnRzLnB1c2goWydBQycsIHgsIHksIHIsIHN0YXJ0LCBlbmQsICEhY2N3XSk7XG4gICAgfVxuXG4gICAgYXJjVG8oeDEsIHkxLCB4MiwgeTIsIHIpIHtcbiAgICAgIHRoaXMuc2VnbWVudHMucHVzaChbJ0FUJywgeDEsIHkxLCB4MiwgeTIsIHJdKTtcbiAgICB9XG5cbiAgICBlbGxpcHNlKHgsIHksIHJ4LCByeSwgYW5nbGUsIHN0YXJ0LCBlbmQsIGNjdykge1xuICAgICAgdGhpcy5zZWdtZW50cy5wdXNoKFsnRScsIHgsIHksIHJ4LCByeSwgYW5nbGUsIHN0YXJ0LCBlbmQsICEhY2N3XSk7XG4gICAgfVxuXG4gICAgY2xvc2VQYXRoKCkge1xuICAgICAgdGhpcy5zZWdtZW50cy5wdXNoKFsnWiddKTtcbiAgICB9XG5cbiAgICBiZXppZXJDdXJ2ZVRvKGNwMXgsIGNwMXksIGNwMngsIGNwMnksIHgsIHkpIHtcbiAgICAgIHRoaXMuc2VnbWVudHMucHVzaChbJ0MnLCBjcDF4LCBjcDF5LCBjcDJ4LCBjcDJ5LCB4LCB5XSk7XG4gICAgfVxuXG4gICAgcXVhZHJhdGljQ3VydmVUbyhjcHgsIGNweSwgeCwgeSkge1xuICAgICAgdGhpcy5zZWdtZW50cy5wdXNoKFsnUScsIGNweCwgY3B5LCB4LCB5XSk7XG4gICAgfVxuXG4gICAgcmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICB0aGlzLnNlZ21lbnRzLnB1c2goWydSJywgeCwgeSwgd2lkdGgsIGhlaWdodF0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGJ1aWxkUGF0aChjYW52YXMsIHNlZ21lbnRzKSB7XG4gICAgbGV0IGVuZEFuZ2xlO1xuICAgIGxldCBzdGFydEFuZ2xlO1xuICAgIGxldCBsYXJnZUFyY0ZsYWc7XG4gICAgbGV0IHN3ZWVwRmxhZztcbiAgICBsZXQgZW5kUG9pbnQ7XG4gICAgbGV0IG1pZFBvaW50O1xuICAgIGxldCBhbmdsZTtcbiAgICBsZXQgbGFtYmRhO1xuICAgIGxldCB0MTtcbiAgICBsZXQgdDI7XG4gICAgbGV0IHg7XG4gICAgbGV0IHgxO1xuICAgIGxldCB5O1xuICAgIGxldCB5MTtcbiAgICBsZXQgcjtcbiAgICBsZXQgcng7XG4gICAgbGV0IHJ5O1xuICAgIGxldCB3O1xuICAgIGxldCBoO1xuICAgIGxldCBwYXRoVHlwZTtcbiAgICBsZXQgY2VudGVyUG9pbnQ7XG4gICAgbGV0IGNweDtcbiAgICBsZXQgY3B5O1xuICAgIGxldCBxY3B4O1xuICAgIGxldCBxY3B5O1xuICAgIGxldCBjY3c7XG4gICAgbGV0IHN0YXJ0UG9pbnQgPSB7IHg6IDAsIHk6IDAgfTtcbiAgICBjb25zdCBjdXJyZW50UG9pbnQgPSB7IHg6IDAsIHk6IDAgfTtcblxuICAgIGNhbnZhcy5iZWdpblBhdGgoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlZ21lbnRzLmxlbmd0aDsgKytpKSB7XG4gICAgICBjb25zdCBzID0gc2VnbWVudHNbaV07XG4gICAgICBwYXRoVHlwZSA9IHNbMF07XG5cbiAgICAgIC8vIFJlc2V0IGNvbnRyb2wgcG9pbnQgaWYgY29tbWFuZCBpcyBub3QgY3ViaWNcbiAgICAgIGlmIChcbiAgICAgICAgcGF0aFR5cGUgIT09ICdTJyAmJlxuICAgICAgICBwYXRoVHlwZSAhPT0gJ3MnICYmXG4gICAgICAgIHBhdGhUeXBlICE9PSAnQycgJiZcbiAgICAgICAgcGF0aFR5cGUgIT09ICdjJ1xuICAgICAgKSB7XG4gICAgICAgIGNweCA9IG51bGw7XG4gICAgICAgIGNweSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgcGF0aFR5cGUgIT09ICdUJyAmJlxuICAgICAgICBwYXRoVHlwZSAhPT0gJ3QnICYmXG4gICAgICAgIHBhdGhUeXBlICE9PSAnUScgJiZcbiAgICAgICAgcGF0aFR5cGUgIT09ICdxJ1xuICAgICAgKSB7XG4gICAgICAgIHFjcHggPSBudWxsO1xuICAgICAgICBxY3B5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgc3dpdGNoIChwYXRoVHlwZSkge1xuICAgICAgICBjYXNlICdtJzpcbiAgICAgICAgY2FzZSAnTSc6XG4gICAgICAgICAgaWYgKHBhdGhUeXBlID09PSAnbScpIHtcbiAgICAgICAgICAgIHggKz0gc1sxXTtcbiAgICAgICAgICAgIHkgKz0gc1syXTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgeCA9IHNbMV07XG4gICAgICAgICAgICB5ID0gc1syXTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAocGF0aFR5cGUgPT09ICdNJyB8fCAhc3RhcnRQb2ludCkge1xuICAgICAgICAgICAgc3RhcnRQb2ludCA9IHsgeCwgeSB9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNhbnZhcy5tb3ZlVG8oeCwgeSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2wnOlxuICAgICAgICAgIHggKz0gc1sxXTtcbiAgICAgICAgICB5ICs9IHNbMl07XG4gICAgICAgICAgY2FudmFzLmxpbmVUbyh4LCB5KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnTCc6XG4gICAgICAgICAgeCA9IHNbMV07XG4gICAgICAgICAgeSA9IHNbMl07XG4gICAgICAgICAgY2FudmFzLmxpbmVUbyh4LCB5KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnSCc6XG4gICAgICAgICAgeCA9IHNbMV07XG4gICAgICAgICAgY2FudmFzLmxpbmVUbyh4LCB5KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnaCc6XG4gICAgICAgICAgeCArPSBzWzFdO1xuICAgICAgICAgIGNhbnZhcy5saW5lVG8oeCwgeSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ1YnOlxuICAgICAgICAgIHkgPSBzWzFdO1xuICAgICAgICAgIGNhbnZhcy5saW5lVG8oeCwgeSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3YnOlxuICAgICAgICAgIHkgKz0gc1sxXTtcbiAgICAgICAgICBjYW52YXMubGluZVRvKHgsIHkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhJzpcbiAgICAgICAgY2FzZSAnQSc6XG4gICAgICAgICAgaWYgKHBhdGhUeXBlID09PSAnYScpIHtcbiAgICAgICAgICAgIHggKz0gc1s2XTtcbiAgICAgICAgICAgIHkgKz0gc1s3XTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgeCA9IHNbNl07XG4gICAgICAgICAgICB5ID0gc1s3XTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByeCA9IHNbMV07IC8vIHJ4XG4gICAgICAgICAgcnkgPSBzWzJdOyAvLyByeVxuICAgICAgICAgIGFuZ2xlID0gKHNbM10gKiBNYXRoLlBJKSAvIDE4MDtcbiAgICAgICAgICBsYXJnZUFyY0ZsYWcgPSAhIXNbNF07XG4gICAgICAgICAgc3dlZXBGbGFnID0gISFzWzVdO1xuICAgICAgICAgIGVuZFBvaW50ID0geyB4LCB5IH07XG5cbiAgICAgICAgICAvLyBodHRwczovL3d3dy53My5vcmcvVFIvU1ZHL2ltcGxub3RlLmh0bWwjQXJjSW1wbGVtZW50YXRpb25Ob3Rlc1xuXG4gICAgICAgICAgbWlkUG9pbnQgPSB7XG4gICAgICAgICAgICB4OiAoY3VycmVudFBvaW50LnggLSBlbmRQb2ludC54KSAvIDIsXG4gICAgICAgICAgICB5OiAoY3VycmVudFBvaW50LnkgLSBlbmRQb2ludC55KSAvIDIsXG4gICAgICAgICAgfTtcbiAgICAgICAgICByb3RhdGVQb2ludChtaWRQb2ludCwgLWFuZ2xlKTtcblxuICAgICAgICAgIC8vIHJhZGl1cyBjb3JyZWN0aW9uXG4gICAgICAgICAgbGFtYmRhID1cbiAgICAgICAgICAgIChtaWRQb2ludC54ICogbWlkUG9pbnQueCkgLyAocnggKiByeCkgK1xuICAgICAgICAgICAgKG1pZFBvaW50LnkgKiBtaWRQb2ludC55KSAvIChyeSAqIHJ5KTtcbiAgICAgICAgICBpZiAobGFtYmRhID4gMSkge1xuICAgICAgICAgICAgbGFtYmRhID0gTWF0aC5zcXJ0KGxhbWJkYSk7XG4gICAgICAgICAgICByeCAqPSBsYW1iZGE7XG4gICAgICAgICAgICByeSAqPSBsYW1iZGE7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY2VudGVyUG9pbnQgPSB7XG4gICAgICAgICAgICB4OiAocnggKiBtaWRQb2ludC55KSAvIHJ5LFxuICAgICAgICAgICAgeTogLShyeSAqIG1pZFBvaW50LngpIC8gcngsXG4gICAgICAgICAgfTtcbiAgICAgICAgICB0MSA9IHJ4ICogcnggKiByeSAqIHJ5O1xuICAgICAgICAgIHQyID1cbiAgICAgICAgICAgIHJ4ICogcnggKiBtaWRQb2ludC55ICogbWlkUG9pbnQueSArXG4gICAgICAgICAgICByeSAqIHJ5ICogbWlkUG9pbnQueCAqIG1pZFBvaW50Lng7XG4gICAgICAgICAgaWYgKHN3ZWVwRmxhZyAhPT0gbGFyZ2VBcmNGbGFnKSB7XG4gICAgICAgICAgICBzY2FsZVBvaW50KGNlbnRlclBvaW50LCBNYXRoLnNxcnQoKHQxIC0gdDIpIC8gdDIpIHx8IDApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzY2FsZVBvaW50KGNlbnRlclBvaW50LCAtTWF0aC5zcXJ0KCh0MSAtIHQyKSAvIHQyKSB8fCAwKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzdGFydEFuZ2xlID0gTWF0aC5hdGFuMihcbiAgICAgICAgICAgIChtaWRQb2ludC55IC0gY2VudGVyUG9pbnQueSkgLyByeSxcbiAgICAgICAgICAgIChtaWRQb2ludC54IC0gY2VudGVyUG9pbnQueCkgLyByeFxuICAgICAgICAgICk7XG4gICAgICAgICAgZW5kQW5nbGUgPSBNYXRoLmF0YW4yKFxuICAgICAgICAgICAgLShtaWRQb2ludC55ICsgY2VudGVyUG9pbnQueSkgLyByeSxcbiAgICAgICAgICAgIC0obWlkUG9pbnQueCArIGNlbnRlclBvaW50LngpIC8gcnhcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgcm90YXRlUG9pbnQoY2VudGVyUG9pbnQsIGFuZ2xlKTtcbiAgICAgICAgICB0cmFuc2xhdGVQb2ludChcbiAgICAgICAgICAgIGNlbnRlclBvaW50LFxuICAgICAgICAgICAgKGVuZFBvaW50LnggKyBjdXJyZW50UG9pbnQueCkgLyAyLFxuICAgICAgICAgICAgKGVuZFBvaW50LnkgKyBjdXJyZW50UG9pbnQueSkgLyAyXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIGNhbnZhcy5zYXZlKCk7XG4gICAgICAgICAgY2FudmFzLnRyYW5zbGF0ZShjZW50ZXJQb2ludC54LCBjZW50ZXJQb2ludC55KTtcbiAgICAgICAgICBjYW52YXMucm90YXRlKGFuZ2xlKTtcbiAgICAgICAgICBjYW52YXMuc2NhbGUocngsIHJ5KTtcbiAgICAgICAgICBjYW52YXMuYXJjKDAsIDAsIDEsIHN0YXJ0QW5nbGUsIGVuZEFuZ2xlLCAhc3dlZXBGbGFnKTtcbiAgICAgICAgICBjYW52YXMucmVzdG9yZSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdDJzpcbiAgICAgICAgICBjcHggPSBzWzNdOyAvLyBMYXN0IGNvbnRyb2wgcG9pbnRcbiAgICAgICAgICBjcHkgPSBzWzRdO1xuICAgICAgICAgIHggPSBzWzVdO1xuICAgICAgICAgIHkgPSBzWzZdO1xuICAgICAgICAgIGNhbnZhcy5iZXppZXJDdXJ2ZVRvKHNbMV0sIHNbMl0sIGNweCwgY3B5LCB4LCB5KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYyc6XG4gICAgICAgICAgY2FudmFzLmJlemllckN1cnZlVG8oXG4gICAgICAgICAgICBzWzFdICsgeCxcbiAgICAgICAgICAgIHNbMl0gKyB5LFxuICAgICAgICAgICAgc1szXSArIHgsXG4gICAgICAgICAgICBzWzRdICsgeSxcbiAgICAgICAgICAgIHNbNV0gKyB4LFxuICAgICAgICAgICAgc1s2XSArIHlcbiAgICAgICAgICApO1xuICAgICAgICAgIGNweCA9IHNbM10gKyB4OyAvLyBMYXN0IGNvbnRyb2wgcG9pbnRcbiAgICAgICAgICBjcHkgPSBzWzRdICsgeTtcbiAgICAgICAgICB4ICs9IHNbNV07XG4gICAgICAgICAgeSArPSBzWzZdO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdTJzpcbiAgICAgICAgICBpZiAoY3B4ID09PSBudWxsIHx8IGNweCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgY3B4ID0geDtcbiAgICAgICAgICAgIGNweSA9IHk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY2FudmFzLmJlemllckN1cnZlVG8oXG4gICAgICAgICAgICAyICogeCAtIGNweCxcbiAgICAgICAgICAgIDIgKiB5IC0gY3B5LFxuICAgICAgICAgICAgc1sxXSxcbiAgICAgICAgICAgIHNbMl0sXG4gICAgICAgICAgICBzWzNdLFxuICAgICAgICAgICAgc1s0XVxuICAgICAgICAgICk7XG4gICAgICAgICAgY3B4ID0gc1sxXTsgLy8gbGFzdCBjb250cm9sIHBvaW50XG4gICAgICAgICAgY3B5ID0gc1syXTtcbiAgICAgICAgICB4ID0gc1szXTtcbiAgICAgICAgICB5ID0gc1s0XTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncyc6XG4gICAgICAgICAgaWYgKGNweCA9PT0gbnVsbCB8fCBjcHggPT09IG51bGwpIHtcbiAgICAgICAgICAgIGNweCA9IHg7XG4gICAgICAgICAgICBjcHkgPSB5O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNhbnZhcy5iZXppZXJDdXJ2ZVRvKFxuICAgICAgICAgICAgMiAqIHggLSBjcHgsXG4gICAgICAgICAgICAyICogeSAtIGNweSxcbiAgICAgICAgICAgIHNbMV0gKyB4LFxuICAgICAgICAgICAgc1syXSArIHksXG4gICAgICAgICAgICBzWzNdICsgeCxcbiAgICAgICAgICAgIHNbNF0gKyB5XG4gICAgICAgICAgKTtcbiAgICAgICAgICBjcHggPSBzWzFdICsgeDsgLy8gbGFzdCBjb250cm9sIHBvaW50XG4gICAgICAgICAgY3B5ID0gc1syXSArIHk7XG4gICAgICAgICAgeCArPSBzWzNdO1xuICAgICAgICAgIHkgKz0gc1s0XTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnUSc6XG4gICAgICAgICAgcWNweCA9IHNbMV07IC8vIGxhc3QgY29udHJvbCBwb2ludFxuICAgICAgICAgIHFjcHkgPSBzWzJdO1xuICAgICAgICAgIHggPSBzWzNdO1xuICAgICAgICAgIHkgPSBzWzRdO1xuICAgICAgICAgIGNhbnZhcy5xdWFkcmF0aWNDdXJ2ZVRvKHFjcHgsIHFjcHksIHgsIHkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdxJzpcbiAgICAgICAgICBxY3B4ID0gc1sxXSArIHg7IC8vIGxhc3QgY29udHJvbCBwb2ludFxuICAgICAgICAgIHFjcHkgPSBzWzJdICsgeTtcbiAgICAgICAgICB4ICs9IHNbM107XG4gICAgICAgICAgeSArPSBzWzRdO1xuICAgICAgICAgIGNhbnZhcy5xdWFkcmF0aWNDdXJ2ZVRvKHFjcHgsIHFjcHksIHgsIHkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdUJzpcbiAgICAgICAgICBpZiAocWNweCA9PT0gbnVsbCB8fCBxY3B4ID09PSBudWxsKSB7XG4gICAgICAgICAgICBxY3B4ID0geDtcbiAgICAgICAgICAgIHFjcHkgPSB5O1xuICAgICAgICAgIH1cbiAgICAgICAgICBxY3B4ID0gMiAqIHggLSBxY3B4OyAvLyBsYXN0IGNvbnRyb2wgcG9pbnRcbiAgICAgICAgICBxY3B5ID0gMiAqIHkgLSBxY3B5O1xuICAgICAgICAgIHggPSBzWzFdO1xuICAgICAgICAgIHkgPSBzWzJdO1xuICAgICAgICAgIGNhbnZhcy5xdWFkcmF0aWNDdXJ2ZVRvKHFjcHgsIHFjcHksIHgsIHkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICd0JzpcbiAgICAgICAgICBpZiAocWNweCA9PT0gbnVsbCB8fCBxY3B4ID09PSBudWxsKSB7XG4gICAgICAgICAgICBxY3B4ID0geDtcbiAgICAgICAgICAgIHFjcHkgPSB5O1xuICAgICAgICAgIH1cbiAgICAgICAgICBxY3B4ID0gMiAqIHggLSBxY3B4OyAvLyBsYXN0IGNvbnRyb2wgcG9pbnRcbiAgICAgICAgICBxY3B5ID0gMiAqIHkgLSBxY3B5O1xuICAgICAgICAgIHggKz0gc1sxXTtcbiAgICAgICAgICB5ICs9IHNbMl07XG4gICAgICAgICAgY2FudmFzLnF1YWRyYXRpY0N1cnZlVG8ocWNweCwgcWNweSwgeCwgeSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3onOlxuICAgICAgICBjYXNlICdaJzpcbiAgICAgICAgICB4ID0gc3RhcnRQb2ludC54O1xuICAgICAgICAgIHkgPSBzdGFydFBvaW50Lnk7XG4gICAgICAgICAgc3RhcnRQb2ludCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBjYW52YXMuY2xvc2VQYXRoKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0FDJzogLy8gYXJjXG4gICAgICAgICAgeCA9IHNbMV07XG4gICAgICAgICAgeSA9IHNbMl07XG4gICAgICAgICAgciA9IHNbM107XG4gICAgICAgICAgc3RhcnRBbmdsZSA9IHNbNF07XG4gICAgICAgICAgZW5kQW5nbGUgPSBzWzVdO1xuICAgICAgICAgIGNjdyA9IHNbNl07XG4gICAgICAgICAgY2FudmFzLmFyYyh4LCB5LCByLCBzdGFydEFuZ2xlLCBlbmRBbmdsZSwgY2N3KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnQVQnOiAvLyBhcmNUb1xuICAgICAgICAgIHgxID0gc1sxXTtcbiAgICAgICAgICB5MSA9IHNbMl07XG4gICAgICAgICAgeCA9IHNbM107XG4gICAgICAgICAgeSA9IHNbNF07XG4gICAgICAgICAgciA9IHNbNV07XG4gICAgICAgICAgY2FudmFzLmFyY1RvKHgxLCB5MSwgeCwgeSwgcik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0UnOiAvLyBlbGxpcHNlXG4gICAgICAgICAgeCA9IHNbMV07XG4gICAgICAgICAgeSA9IHNbMl07XG4gICAgICAgICAgcnggPSBzWzNdO1xuICAgICAgICAgIHJ5ID0gc1s0XTtcbiAgICAgICAgICBhbmdsZSA9IHNbNV07XG4gICAgICAgICAgc3RhcnRBbmdsZSA9IHNbNl07XG4gICAgICAgICAgZW5kQW5nbGUgPSBzWzddO1xuICAgICAgICAgIGNjdyA9IHNbOF07XG4gICAgICAgICAgY2FudmFzLnNhdmUoKTtcbiAgICAgICAgICBjYW52YXMudHJhbnNsYXRlKHgsIHkpO1xuICAgICAgICAgIGNhbnZhcy5yb3RhdGUoYW5nbGUpO1xuICAgICAgICAgIGNhbnZhcy5zY2FsZShyeCwgcnkpO1xuICAgICAgICAgIGNhbnZhcy5hcmMoMCwgMCwgMSwgc3RhcnRBbmdsZSwgZW5kQW5nbGUsIGNjdyk7XG4gICAgICAgICAgY2FudmFzLnJlc3RvcmUoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnUic6IC8vIHJlY3RcbiAgICAgICAgICB4ID0gc1sxXTtcbiAgICAgICAgICB5ID0gc1syXTtcbiAgICAgICAgICB3ID0gc1szXTtcbiAgICAgICAgICBoID0gc1s0XTtcbiAgICAgICAgICBzdGFydFBvaW50ID0geyB4LCB5IH07XG4gICAgICAgICAgY2FudmFzLnJlY3QoeCwgeSwgdywgaCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgIC8vIHRocm93IG5ldyBFcnJvcihgJHtwYXRoVHlwZX0gaXMgbm90IGltcGxlbWVudGVkYCk7ID9cbiAgICAgIH1cblxuICAgICAgY3VycmVudFBvaW50LnggPSB4O1xuICAgICAgY3VycmVudFBvaW50LnkgPSB5O1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGNGaWxsID0gd2luZG93LkNhbnZhc1JlbmRlcmluZ0NvbnRleHQyRC5wcm90b3R5cGUuZmlsbDtcbiAgY29uc3QgY1N0cm9rZSA9IHdpbmRvdy5DYW52YXNSZW5kZXJpbmdDb250ZXh0MkQucHJvdG90eXBlLnN0cm9rZTtcblxuICB3aW5kb3cuQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELnByb3RvdHlwZS5maWxsID0gZnVuY3Rpb24gZmlsbCguLi5hcmdzKSB7XG4gICAgbGV0IGZpbGxSdWxlID0gJ25vbnplcm8nO1xuICAgIGlmIChcbiAgICAgIGFyZ3MubGVuZ3RoID09PSAwIHx8XG4gICAgICAoYXJncy5sZW5ndGggPT09IDEgJiYgdHlwZW9mIGFyZ3NbMF0gPT09ICdzdHJpbmcnKVxuICAgICkge1xuICAgICAgY0ZpbGwuYXBwbHkodGhpcywgYXJncyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyKSB7XG4gICAgICBmaWxsUnVsZSA9IGFyZ3NbMV07XG4gICAgfVxuICAgIGNvbnN0IHBhdGggPSBhcmdzWzBdO1xuICAgIGJ1aWxkUGF0aCh0aGlzLCBwYXRoLnNlZ21lbnRzKTtcbiAgICBjRmlsbC5jYWxsKHRoaXMsIGZpbGxSdWxlKTtcbiAgfTtcblxuICB3aW5kb3cuQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELnByb3RvdHlwZS5zdHJva2UgPSBmdW5jdGlvbiBzdHJva2UocGF0aCkge1xuICAgIGlmICghcGF0aCkge1xuICAgICAgY1N0cm9rZS5jYWxsKHRoaXMpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBidWlsZFBhdGgodGhpcywgcGF0aC5zZWdtZW50cyk7XG4gICAgY1N0cm9rZS5jYWxsKHRoaXMpO1xuICB9O1xuXG4gIGNvbnN0IGNJc1BvaW50SW5QYXRoID1cbiAgICB3aW5kb3cuQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELnByb3RvdHlwZS5pc1BvaW50SW5QYXRoO1xuXG4gIHdpbmRvdy5DYW52YXNSZW5kZXJpbmdDb250ZXh0MkQucHJvdG90eXBlLmlzUG9pbnRJblBhdGggPSBmdW5jdGlvbiBpc1BvaW50SW5QYXRoKFxuICAgIC4uLmFyZ3NcbiAgKSB7XG4gICAgLy8gbGV0IGZpbGxSdWxlID0gJ25vbnplcm8nO1xuICAgIGlmIChhcmdzWzBdLmNvbnN0cnVjdG9yLm5hbWUgPT09ICdQYXRoMkQnKSB7XG4gICAgICAvLyBmaXJzdCBhcmd1bWVudCBpcyBhIFBhdGgyRCBvYmplY3RcbiAgICAgIGNvbnN0IHggPSBhcmdzWzFdO1xuICAgICAgY29uc3QgeSA9IGFyZ3NbMl07XG4gICAgICBjb25zdCBmaWxsUnVsZSA9IGFyZ3NbM10gfHwgJ25vbnplcm8nO1xuICAgICAgY29uc3QgcGF0aCA9IGFyZ3NbMF07XG4gICAgICBidWlsZFBhdGgodGhpcywgcGF0aC5zZWdtZW50cyk7XG4gICAgICByZXR1cm4gY0lzUG9pbnRJblBhdGguYXBwbHkodGhpcywgW3gsIHksIGZpbGxSdWxlXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBjSXNQb2ludEluUGF0aC5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9XG4gIH07XG5cbiAgd2luZG93LlBhdGgyRCA9IFBhdGgyRDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBwb2x5RmlsbFBhdGgyRDtcbiIsImNvbnN0IHBhcnNlUGF0aCA9IHJlcXVpcmUoJy4vcGFyc2UtcGF0aCcpO1xuY29uc3QgcGF0aDJkUG9seWZpbGwgPSByZXF1aXJlKCcuL3BhdGgyZC1wb2x5ZmlsbCcpO1xuXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgcGF0aDJkUG9seWZpbGwod2luZG93KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHBhdGgyZFBvbHlmaWxsLFxuICBwYXJzZVBhdGgsXG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmlvID0gZXhwb3J0cy5Tb2NrZXQgPSBleHBvcnRzLk1hbmFnZXIgPSBleHBvcnRzLnByb3RvY29sID0gdm9pZCAwO1xuY29uc3QgdXJsXzEgPSByZXF1aXJlKFwiLi91cmxcIik7XG5jb25zdCBtYW5hZ2VyXzEgPSByZXF1aXJlKFwiLi9tYW5hZ2VyXCIpO1xuY29uc3QgZGVidWcgPSByZXF1aXJlKFwiZGVidWdcIikoXCJzb2NrZXQuaW8tY2xpZW50XCIpO1xuLyoqXG4gKiBNb2R1bGUgZXhwb3J0cy5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gbG9va3VwO1xuLyoqXG4gKiBNYW5hZ2VycyBjYWNoZS5cbiAqL1xuY29uc3QgY2FjaGUgPSAoZXhwb3J0cy5tYW5hZ2VycyA9IHt9KTtcbmZ1bmN0aW9uIGxvb2t1cCh1cmksIG9wdHMpIHtcbiAgICBpZiAodHlwZW9mIHVyaSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICBvcHRzID0gdXJpO1xuICAgICAgICB1cmkgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIG9wdHMgPSBvcHRzIHx8IHt9O1xuICAgIGNvbnN0IHBhcnNlZCA9IHVybF8xLnVybCh1cmksIG9wdHMucGF0aCB8fCBcIi9zb2NrZXQuaW9cIik7XG4gICAgY29uc3Qgc291cmNlID0gcGFyc2VkLnNvdXJjZTtcbiAgICBjb25zdCBpZCA9IHBhcnNlZC5pZDtcbiAgICBjb25zdCBwYXRoID0gcGFyc2VkLnBhdGg7XG4gICAgY29uc3Qgc2FtZU5hbWVzcGFjZSA9IGNhY2hlW2lkXSAmJiBwYXRoIGluIGNhY2hlW2lkXVtcIm5zcHNcIl07XG4gICAgY29uc3QgbmV3Q29ubmVjdGlvbiA9IG9wdHMuZm9yY2VOZXcgfHxcbiAgICAgICAgb3B0c1tcImZvcmNlIG5ldyBjb25uZWN0aW9uXCJdIHx8XG4gICAgICAgIGZhbHNlID09PSBvcHRzLm11bHRpcGxleCB8fFxuICAgICAgICBzYW1lTmFtZXNwYWNlO1xuICAgIGxldCBpbztcbiAgICBpZiAobmV3Q29ubmVjdGlvbikge1xuICAgICAgICBkZWJ1ZyhcImlnbm9yaW5nIHNvY2tldCBjYWNoZSBmb3IgJXNcIiwgc291cmNlKTtcbiAgICAgICAgaW8gPSBuZXcgbWFuYWdlcl8xLk1hbmFnZXIoc291cmNlLCBvcHRzKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmICghY2FjaGVbaWRdKSB7XG4gICAgICAgICAgICBkZWJ1ZyhcIm5ldyBpbyBpbnN0YW5jZSBmb3IgJXNcIiwgc291cmNlKTtcbiAgICAgICAgICAgIGNhY2hlW2lkXSA9IG5ldyBtYW5hZ2VyXzEuTWFuYWdlcihzb3VyY2UsIG9wdHMpO1xuICAgICAgICB9XG4gICAgICAgIGlvID0gY2FjaGVbaWRdO1xuICAgIH1cbiAgICBpZiAocGFyc2VkLnF1ZXJ5ICYmICFvcHRzLnF1ZXJ5KSB7XG4gICAgICAgIG9wdHMucXVlcnkgPSBwYXJzZWQucXVlcnlLZXk7XG4gICAgfVxuICAgIHJldHVybiBpby5zb2NrZXQocGFyc2VkLnBhdGgsIG9wdHMpO1xufVxuZXhwb3J0cy5pbyA9IGxvb2t1cDtcbi8qKlxuICogUHJvdG9jb2wgdmVyc2lvbi5cbiAqXG4gKiBAcHVibGljXG4gKi9cbnZhciBzb2NrZXRfaW9fcGFyc2VyXzEgPSByZXF1aXJlKFwic29ja2V0LmlvLXBhcnNlclwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInByb3RvY29sXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzb2NrZXRfaW9fcGFyc2VyXzEucHJvdG9jb2w7IH0gfSk7XG4vKipcbiAqIGBjb25uZWN0YC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJpXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydHMuY29ubmVjdCA9IGxvb2t1cDtcbi8qKlxuICogRXhwb3NlIGNvbnN0cnVjdG9ycyBmb3Igc3RhbmRhbG9uZSBidWlsZC5cbiAqXG4gKiBAcHVibGljXG4gKi9cbnZhciBtYW5hZ2VyXzIgPSByZXF1aXJlKFwiLi9tYW5hZ2VyXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiTWFuYWdlclwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbWFuYWdlcl8yLk1hbmFnZXI7IH0gfSk7XG52YXIgc29ja2V0XzEgPSByZXF1aXJlKFwiLi9zb2NrZXRcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJTb2NrZXRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNvY2tldF8xLlNvY2tldDsgfSB9KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGxvb2t1cDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5NYW5hZ2VyID0gdm9pZCAwO1xuY29uc3QgZWlvID0gcmVxdWlyZShcImVuZ2luZS5pby1jbGllbnRcIik7XG5jb25zdCBzb2NrZXRfMSA9IHJlcXVpcmUoXCIuL3NvY2tldFwiKTtcbmNvbnN0IHBhcnNlciA9IHJlcXVpcmUoXCJzb2NrZXQuaW8tcGFyc2VyXCIpO1xuY29uc3Qgb25fMSA9IHJlcXVpcmUoXCIuL29uXCIpO1xuY29uc3QgQmFja29mZiA9IHJlcXVpcmUoXCJiYWNrbzJcIik7XG5jb25zdCB0eXBlZF9ldmVudHNfMSA9IHJlcXVpcmUoXCIuL3R5cGVkLWV2ZW50c1wiKTtcbmNvbnN0IGRlYnVnID0gcmVxdWlyZShcImRlYnVnXCIpKFwic29ja2V0LmlvLWNsaWVudDptYW5hZ2VyXCIpO1xuY2xhc3MgTWFuYWdlciBleHRlbmRzIHR5cGVkX2V2ZW50c18xLlN0cmljdEV2ZW50RW1pdHRlciB7XG4gICAgY29uc3RydWN0b3IodXJpLCBvcHRzKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubnNwcyA9IHt9O1xuICAgICAgICB0aGlzLnN1YnMgPSBbXTtcbiAgICAgICAgaWYgKHVyaSAmJiBcIm9iamVjdFwiID09PSB0eXBlb2YgdXJpKSB7XG4gICAgICAgICAgICBvcHRzID0gdXJpO1xuICAgICAgICAgICAgdXJpID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIG9wdHMgPSBvcHRzIHx8IHt9O1xuICAgICAgICBvcHRzLnBhdGggPSBvcHRzLnBhdGggfHwgXCIvc29ja2V0LmlvXCI7XG4gICAgICAgIHRoaXMub3B0cyA9IG9wdHM7XG4gICAgICAgIHRoaXMucmVjb25uZWN0aW9uKG9wdHMucmVjb25uZWN0aW9uICE9PSBmYWxzZSk7XG4gICAgICAgIHRoaXMucmVjb25uZWN0aW9uQXR0ZW1wdHMob3B0cy5yZWNvbm5lY3Rpb25BdHRlbXB0cyB8fCBJbmZpbml0eSk7XG4gICAgICAgIHRoaXMucmVjb25uZWN0aW9uRGVsYXkob3B0cy5yZWNvbm5lY3Rpb25EZWxheSB8fCAxMDAwKTtcbiAgICAgICAgdGhpcy5yZWNvbm5lY3Rpb25EZWxheU1heChvcHRzLnJlY29ubmVjdGlvbkRlbGF5TWF4IHx8IDUwMDApO1xuICAgICAgICB0aGlzLnJhbmRvbWl6YXRpb25GYWN0b3Iob3B0cy5yYW5kb21pemF0aW9uRmFjdG9yIHx8IDAuNSk7XG4gICAgICAgIHRoaXMuYmFja29mZiA9IG5ldyBCYWNrb2ZmKHtcbiAgICAgICAgICAgIG1pbjogdGhpcy5yZWNvbm5lY3Rpb25EZWxheSgpLFxuICAgICAgICAgICAgbWF4OiB0aGlzLnJlY29ubmVjdGlvbkRlbGF5TWF4KCksXG4gICAgICAgICAgICBqaXR0ZXI6IHRoaXMucmFuZG9taXphdGlvbkZhY3RvcigpLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy50aW1lb3V0KG51bGwgPT0gb3B0cy50aW1lb3V0ID8gMjAwMDAgOiBvcHRzLnRpbWVvdXQpO1xuICAgICAgICB0aGlzLl9yZWFkeVN0YXRlID0gXCJjbG9zZWRcIjtcbiAgICAgICAgdGhpcy51cmkgPSB1cmk7XG4gICAgICAgIGNvbnN0IF9wYXJzZXIgPSBvcHRzLnBhcnNlciB8fCBwYXJzZXI7XG4gICAgICAgIHRoaXMuZW5jb2RlciA9IG5ldyBfcGFyc2VyLkVuY29kZXIoKTtcbiAgICAgICAgdGhpcy5kZWNvZGVyID0gbmV3IF9wYXJzZXIuRGVjb2RlcigpO1xuICAgICAgICB0aGlzLl9hdXRvQ29ubmVjdCA9IG9wdHMuYXV0b0Nvbm5lY3QgIT09IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5fYXV0b0Nvbm5lY3QpXG4gICAgICAgICAgICB0aGlzLm9wZW4oKTtcbiAgICB9XG4gICAgcmVjb25uZWN0aW9uKHYpIHtcbiAgICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JlY29ubmVjdGlvbjtcbiAgICAgICAgdGhpcy5fcmVjb25uZWN0aW9uID0gISF2O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgcmVjb25uZWN0aW9uQXR0ZW1wdHModikge1xuICAgICAgICBpZiAodiA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JlY29ubmVjdGlvbkF0dGVtcHRzO1xuICAgICAgICB0aGlzLl9yZWNvbm5lY3Rpb25BdHRlbXB0cyA9IHY7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICByZWNvbm5lY3Rpb25EZWxheSh2KSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgaWYgKHYgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZWNvbm5lY3Rpb25EZWxheTtcbiAgICAgICAgdGhpcy5fcmVjb25uZWN0aW9uRGVsYXkgPSB2O1xuICAgICAgICAoX2EgPSB0aGlzLmJhY2tvZmYpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5zZXRNaW4odik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICByYW5kb21pemF0aW9uRmFjdG9yKHYpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBpZiAodiA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JhbmRvbWl6YXRpb25GYWN0b3I7XG4gICAgICAgIHRoaXMuX3JhbmRvbWl6YXRpb25GYWN0b3IgPSB2O1xuICAgICAgICAoX2EgPSB0aGlzLmJhY2tvZmYpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5zZXRKaXR0ZXIodik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICByZWNvbm5lY3Rpb25EZWxheU1heCh2KSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgaWYgKHYgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZWNvbm5lY3Rpb25EZWxheU1heDtcbiAgICAgICAgdGhpcy5fcmVjb25uZWN0aW9uRGVsYXlNYXggPSB2O1xuICAgICAgICAoX2EgPSB0aGlzLmJhY2tvZmYpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5zZXRNYXgodik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICB0aW1lb3V0KHYpIHtcbiAgICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RpbWVvdXQ7XG4gICAgICAgIHRoaXMuX3RpbWVvdXQgPSB2O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogU3RhcnRzIHRyeWluZyB0byByZWNvbm5lY3QgaWYgcmVjb25uZWN0aW9uIGlzIGVuYWJsZWQgYW5kIHdlIGhhdmUgbm90XG4gICAgICogc3RhcnRlZCByZWNvbm5lY3RpbmcgeWV0XG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIG1heWJlUmVjb25uZWN0T25PcGVuKCkge1xuICAgICAgICAvLyBPbmx5IHRyeSB0byByZWNvbm5lY3QgaWYgaXQncyB0aGUgZmlyc3QgdGltZSB3ZSdyZSBjb25uZWN0aW5nXG4gICAgICAgIGlmICghdGhpcy5fcmVjb25uZWN0aW5nICYmXG4gICAgICAgICAgICB0aGlzLl9yZWNvbm5lY3Rpb24gJiZcbiAgICAgICAgICAgIHRoaXMuYmFja29mZi5hdHRlbXB0cyA9PT0gMCkge1xuICAgICAgICAgICAgLy8ga2VlcHMgcmVjb25uZWN0aW9uIGZyb20gZmlyaW5nIHR3aWNlIGZvciB0aGUgc2FtZSByZWNvbm5lY3Rpb24gbG9vcFxuICAgICAgICAgICAgdGhpcy5yZWNvbm5lY3QoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBjdXJyZW50IHRyYW5zcG9ydCBgc29ja2V0YC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIC0gb3B0aW9uYWwsIGNhbGxiYWNrXG4gICAgICogQHJldHVybiBzZWxmXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIG9wZW4oZm4pIHtcbiAgICAgICAgZGVidWcoXCJyZWFkeVN0YXRlICVzXCIsIHRoaXMuX3JlYWR5U3RhdGUpO1xuICAgICAgICBpZiAofnRoaXMuX3JlYWR5U3RhdGUuaW5kZXhPZihcIm9wZW5cIikpXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgZGVidWcoXCJvcGVuaW5nICVzXCIsIHRoaXMudXJpKTtcbiAgICAgICAgdGhpcy5lbmdpbmUgPSBlaW8odGhpcy51cmksIHRoaXMub3B0cyk7XG4gICAgICAgIGNvbnN0IHNvY2tldCA9IHRoaXMuZW5naW5lO1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5fcmVhZHlTdGF0ZSA9IFwib3BlbmluZ1wiO1xuICAgICAgICB0aGlzLnNraXBSZWNvbm5lY3QgPSBmYWxzZTtcbiAgICAgICAgLy8gZW1pdCBgb3BlbmBcbiAgICAgICAgY29uc3Qgb3BlblN1YkRlc3Ryb3kgPSBvbl8xLm9uKHNvY2tldCwgXCJvcGVuXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNlbGYub25vcGVuKCk7XG4gICAgICAgICAgICBmbiAmJiBmbigpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gZW1pdCBgZXJyb3JgXG4gICAgICAgIGNvbnN0IGVycm9yU3ViID0gb25fMS5vbihzb2NrZXQsIFwiZXJyb3JcIiwgKGVycikgPT4ge1xuICAgICAgICAgICAgZGVidWcoXCJlcnJvclwiKTtcbiAgICAgICAgICAgIHNlbGYuY2xlYW51cCgpO1xuICAgICAgICAgICAgc2VsZi5fcmVhZHlTdGF0ZSA9IFwiY2xvc2VkXCI7XG4gICAgICAgICAgICB0aGlzLmVtaXRSZXNlcnZlZChcImVycm9yXCIsIGVycik7XG4gICAgICAgICAgICBpZiAoZm4pIHtcbiAgICAgICAgICAgICAgICBmbihlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gT25seSBkbyB0aGlzIGlmIHRoZXJlIGlzIG5vIGZuIHRvIGhhbmRsZSB0aGUgZXJyb3JcbiAgICAgICAgICAgICAgICBzZWxmLm1heWJlUmVjb25uZWN0T25PcGVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoZmFsc2UgIT09IHRoaXMuX3RpbWVvdXQpIHtcbiAgICAgICAgICAgIGNvbnN0IHRpbWVvdXQgPSB0aGlzLl90aW1lb3V0O1xuICAgICAgICAgICAgZGVidWcoXCJjb25uZWN0IGF0dGVtcHQgd2lsbCB0aW1lb3V0IGFmdGVyICVkXCIsIHRpbWVvdXQpO1xuICAgICAgICAgICAgaWYgKHRpbWVvdXQgPT09IDApIHtcbiAgICAgICAgICAgICAgICBvcGVuU3ViRGVzdHJveSgpOyAvLyBwcmV2ZW50cyBhIHJhY2UgY29uZGl0aW9uIHdpdGggdGhlICdvcGVuJyBldmVudFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gc2V0IHRpbWVyXG4gICAgICAgICAgICBjb25zdCB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGRlYnVnKFwiY29ubmVjdCBhdHRlbXB0IHRpbWVkIG91dCBhZnRlciAlZFwiLCB0aW1lb3V0KTtcbiAgICAgICAgICAgICAgICBvcGVuU3ViRGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIHNvY2tldC5jbG9zZSgpO1xuICAgICAgICAgICAgICAgIHNvY2tldC5lbWl0KFwiZXJyb3JcIiwgbmV3IEVycm9yKFwidGltZW91dFwiKSk7XG4gICAgICAgICAgICB9LCB0aW1lb3V0KTtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdHMuYXV0b1VucmVmKSB7XG4gICAgICAgICAgICAgICAgdGltZXIudW5yZWYoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc3Vicy5wdXNoKGZ1bmN0aW9uIHN1YkRlc3Ryb3koKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3Vicy5wdXNoKG9wZW5TdWJEZXN0cm95KTtcbiAgICAgICAgdGhpcy5zdWJzLnB1c2goZXJyb3JTdWIpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWxpYXMgZm9yIG9wZW4oKVxuICAgICAqXG4gICAgICogQHJldHVybiBzZWxmXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIGNvbm5lY3QoZm4pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3Blbihmbik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxlZCB1cG9uIHRyYW5zcG9ydCBvcGVuLlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBvbm9wZW4oKSB7XG4gICAgICAgIGRlYnVnKFwib3BlblwiKTtcbiAgICAgICAgLy8gY2xlYXIgb2xkIHN1YnNcbiAgICAgICAgdGhpcy5jbGVhbnVwKCk7XG4gICAgICAgIC8vIG1hcmsgYXMgb3BlblxuICAgICAgICB0aGlzLl9yZWFkeVN0YXRlID0gXCJvcGVuXCI7XG4gICAgICAgIHRoaXMuZW1pdFJlc2VydmVkKFwib3BlblwiKTtcbiAgICAgICAgLy8gYWRkIG5ldyBzdWJzXG4gICAgICAgIGNvbnN0IHNvY2tldCA9IHRoaXMuZW5naW5lO1xuICAgICAgICB0aGlzLnN1YnMucHVzaChvbl8xLm9uKHNvY2tldCwgXCJwaW5nXCIsIHRoaXMub25waW5nLmJpbmQodGhpcykpLCBvbl8xLm9uKHNvY2tldCwgXCJkYXRhXCIsIHRoaXMub25kYXRhLmJpbmQodGhpcykpLCBvbl8xLm9uKHNvY2tldCwgXCJlcnJvclwiLCB0aGlzLm9uZXJyb3IuYmluZCh0aGlzKSksIG9uXzEub24oc29ja2V0LCBcImNsb3NlXCIsIHRoaXMub25jbG9zZS5iaW5kKHRoaXMpKSwgb25fMS5vbih0aGlzLmRlY29kZXIsIFwiZGVjb2RlZFwiLCB0aGlzLm9uZGVjb2RlZC5iaW5kKHRoaXMpKSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxlZCB1cG9uIGEgcGluZy5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgb25waW5nKCkge1xuICAgICAgICB0aGlzLmVtaXRSZXNlcnZlZChcInBpbmdcIik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxlZCB3aXRoIGRhdGEuXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIG9uZGF0YShkYXRhKSB7XG4gICAgICAgIHRoaXMuZGVjb2Rlci5hZGQoZGF0YSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxlZCB3aGVuIHBhcnNlciBmdWxseSBkZWNvZGVzIGEgcGFja2V0LlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBvbmRlY29kZWQocGFja2V0KSB7XG4gICAgICAgIHRoaXMuZW1pdFJlc2VydmVkKFwicGFja2V0XCIsIHBhY2tldCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxlZCB1cG9uIHNvY2tldCBlcnJvci5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgb25lcnJvcihlcnIpIHtcbiAgICAgICAgZGVidWcoXCJlcnJvclwiLCBlcnIpO1xuICAgICAgICB0aGlzLmVtaXRSZXNlcnZlZChcImVycm9yXCIsIGVycik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgc29ja2V0IGZvciB0aGUgZ2l2ZW4gYG5zcGAuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtTb2NrZXR9XG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIHNvY2tldChuc3AsIG9wdHMpIHtcbiAgICAgICAgbGV0IHNvY2tldCA9IHRoaXMubnNwc1tuc3BdO1xuICAgICAgICBpZiAoIXNvY2tldCkge1xuICAgICAgICAgICAgc29ja2V0ID0gbmV3IHNvY2tldF8xLlNvY2tldCh0aGlzLCBuc3AsIG9wdHMpO1xuICAgICAgICAgICAgdGhpcy5uc3BzW25zcF0gPSBzb2NrZXQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNvY2tldDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHVwb24gYSBzb2NrZXQgY2xvc2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc29ja2V0XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfZGVzdHJveShzb2NrZXQpIHtcbiAgICAgICAgY29uc3QgbnNwcyA9IE9iamVjdC5rZXlzKHRoaXMubnNwcyk7XG4gICAgICAgIGZvciAoY29uc3QgbnNwIG9mIG5zcHMpIHtcbiAgICAgICAgICAgIGNvbnN0IHNvY2tldCA9IHRoaXMubnNwc1tuc3BdO1xuICAgICAgICAgICAgaWYgKHNvY2tldC5hY3RpdmUpIHtcbiAgICAgICAgICAgICAgICBkZWJ1ZyhcInNvY2tldCAlcyBpcyBzdGlsbCBhY3RpdmUsIHNraXBwaW5nIGNsb3NlXCIsIG5zcCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2Nsb3NlKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFdyaXRlcyBhIHBhY2tldC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBwYWNrZXRcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9wYWNrZXQocGFja2V0KSB7XG4gICAgICAgIGRlYnVnKFwid3JpdGluZyBwYWNrZXQgJWpcIiwgcGFja2V0KTtcbiAgICAgICAgY29uc3QgZW5jb2RlZFBhY2tldHMgPSB0aGlzLmVuY29kZXIuZW5jb2RlKHBhY2tldCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZW5jb2RlZFBhY2tldHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLndyaXRlKGVuY29kZWRQYWNrZXRzW2ldLCBwYWNrZXQub3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2xlYW4gdXAgdHJhbnNwb3J0IHN1YnNjcmlwdGlvbnMgYW5kIHBhY2tldCBidWZmZXIuXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGNsZWFudXAoKSB7XG4gICAgICAgIGRlYnVnKFwiY2xlYW51cFwiKTtcbiAgICAgICAgdGhpcy5zdWJzLmZvckVhY2goKHN1YkRlc3Ryb3kpID0+IHN1YkRlc3Ryb3koKSk7XG4gICAgICAgIHRoaXMuc3Vicy5sZW5ndGggPSAwO1xuICAgICAgICB0aGlzLmRlY29kZXIuZGVzdHJveSgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDbG9zZSB0aGUgY3VycmVudCBzb2NrZXQuXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9jbG9zZSgpIHtcbiAgICAgICAgZGVidWcoXCJkaXNjb25uZWN0XCIpO1xuICAgICAgICB0aGlzLnNraXBSZWNvbm5lY3QgPSB0cnVlO1xuICAgICAgICB0aGlzLl9yZWNvbm5lY3RpbmcgPSBmYWxzZTtcbiAgICAgICAgaWYgKFwib3BlbmluZ1wiID09PSB0aGlzLl9yZWFkeVN0YXRlKSB7XG4gICAgICAgICAgICAvLyBgb25jbG9zZWAgd2lsbCBub3QgZmlyZSBiZWNhdXNlXG4gICAgICAgICAgICAvLyBhbiBvcGVuIGV2ZW50IG5ldmVyIGhhcHBlbmVkXG4gICAgICAgICAgICB0aGlzLmNsZWFudXAoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJhY2tvZmYucmVzZXQoKTtcbiAgICAgICAgdGhpcy5fcmVhZHlTdGF0ZSA9IFwiY2xvc2VkXCI7XG4gICAgICAgIGlmICh0aGlzLmVuZ2luZSlcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLmNsb3NlKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFsaWFzIGZvciBjbG9zZSgpXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGRpc2Nvbm5lY3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jbG9zZSgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgdXBvbiBlbmdpbmUgY2xvc2UuXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIG9uY2xvc2UocmVhc29uKSB7XG4gICAgICAgIGRlYnVnKFwib25jbG9zZVwiKTtcbiAgICAgICAgdGhpcy5jbGVhbnVwKCk7XG4gICAgICAgIHRoaXMuYmFja29mZi5yZXNldCgpO1xuICAgICAgICB0aGlzLl9yZWFkeVN0YXRlID0gXCJjbG9zZWRcIjtcbiAgICAgICAgdGhpcy5lbWl0UmVzZXJ2ZWQoXCJjbG9zZVwiLCByZWFzb24pO1xuICAgICAgICBpZiAodGhpcy5fcmVjb25uZWN0aW9uICYmICF0aGlzLnNraXBSZWNvbm5lY3QpIHtcbiAgICAgICAgICAgIHRoaXMucmVjb25uZWN0KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQXR0ZW1wdCBhIHJlY29ubmVjdGlvbi5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgcmVjb25uZWN0KCkge1xuICAgICAgICBpZiAodGhpcy5fcmVjb25uZWN0aW5nIHx8IHRoaXMuc2tpcFJlY29ubmVjdClcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMuYmFja29mZi5hdHRlbXB0cyA+PSB0aGlzLl9yZWNvbm5lY3Rpb25BdHRlbXB0cykge1xuICAgICAgICAgICAgZGVidWcoXCJyZWNvbm5lY3QgZmFpbGVkXCIpO1xuICAgICAgICAgICAgdGhpcy5iYWNrb2ZmLnJlc2V0KCk7XG4gICAgICAgICAgICB0aGlzLmVtaXRSZXNlcnZlZChcInJlY29ubmVjdF9mYWlsZWRcIik7XG4gICAgICAgICAgICB0aGlzLl9yZWNvbm5lY3RpbmcgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGRlbGF5ID0gdGhpcy5iYWNrb2ZmLmR1cmF0aW9uKCk7XG4gICAgICAgICAgICBkZWJ1ZyhcIndpbGwgd2FpdCAlZG1zIGJlZm9yZSByZWNvbm5lY3QgYXR0ZW1wdFwiLCBkZWxheSk7XG4gICAgICAgICAgICB0aGlzLl9yZWNvbm5lY3RpbmcgPSB0cnVlO1xuICAgICAgICAgICAgY29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5za2lwUmVjb25uZWN0KVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgZGVidWcoXCJhdHRlbXB0aW5nIHJlY29ubmVjdFwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXRSZXNlcnZlZChcInJlY29ubmVjdF9hdHRlbXB0XCIsIHNlbGYuYmFja29mZi5hdHRlbXB0cyk7XG4gICAgICAgICAgICAgICAgLy8gY2hlY2sgYWdhaW4gZm9yIHRoZSBjYXNlIHNvY2tldCBjbG9zZWQgaW4gYWJvdmUgZXZlbnRzXG4gICAgICAgICAgICAgICAgaWYgKHNlbGYuc2tpcFJlY29ubmVjdClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIHNlbGYub3BlbigoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlYnVnKFwicmVjb25uZWN0IGF0dGVtcHQgZXJyb3JcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLl9yZWNvbm5lY3RpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucmVjb25uZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXRSZXNlcnZlZChcInJlY29ubmVjdF9lcnJvclwiLCBlcnIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVidWcoXCJyZWNvbm5lY3Qgc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYub25yZWNvbm5lY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSwgZGVsYXkpO1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0cy5hdXRvVW5yZWYpIHtcbiAgICAgICAgICAgICAgICB0aW1lci51bnJlZigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zdWJzLnB1c2goZnVuY3Rpb24gc3ViRGVzdHJveSgpIHtcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHVwb24gc3VjY2Vzc2Z1bCByZWNvbm5lY3QuXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIG9ucmVjb25uZWN0KCkge1xuICAgICAgICBjb25zdCBhdHRlbXB0ID0gdGhpcy5iYWNrb2ZmLmF0dGVtcHRzO1xuICAgICAgICB0aGlzLl9yZWNvbm5lY3RpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5iYWNrb2ZmLnJlc2V0KCk7XG4gICAgICAgIHRoaXMuZW1pdFJlc2VydmVkKFwicmVjb25uZWN0XCIsIGF0dGVtcHQpO1xuICAgIH1cbn1cbmV4cG9ydHMuTWFuYWdlciA9IE1hbmFnZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMub24gPSB2b2lkIDA7XG5mdW5jdGlvbiBvbihvYmosIGV2LCBmbikge1xuICAgIG9iai5vbihldiwgZm4pO1xuICAgIHJldHVybiBmdW5jdGlvbiBzdWJEZXN0cm95KCkge1xuICAgICAgICBvYmoub2ZmKGV2LCBmbik7XG4gICAgfTtcbn1cbmV4cG9ydHMub24gPSBvbjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Tb2NrZXQgPSB2b2lkIDA7XG5jb25zdCBzb2NrZXRfaW9fcGFyc2VyXzEgPSByZXF1aXJlKFwic29ja2V0LmlvLXBhcnNlclwiKTtcbmNvbnN0IG9uXzEgPSByZXF1aXJlKFwiLi9vblwiKTtcbmNvbnN0IHR5cGVkX2V2ZW50c18xID0gcmVxdWlyZShcIi4vdHlwZWQtZXZlbnRzXCIpO1xuY29uc3QgZGVidWcgPSByZXF1aXJlKFwiZGVidWdcIikoXCJzb2NrZXQuaW8tY2xpZW50OnNvY2tldFwiKTtcbi8qKlxuICogSW50ZXJuYWwgZXZlbnRzLlxuICogVGhlc2UgZXZlbnRzIGNhbid0IGJlIGVtaXR0ZWQgYnkgdGhlIHVzZXIuXG4gKi9cbmNvbnN0IFJFU0VSVkVEX0VWRU5UUyA9IE9iamVjdC5mcmVlemUoe1xuICAgIGNvbm5lY3Q6IDEsXG4gICAgY29ubmVjdF9lcnJvcjogMSxcbiAgICBkaXNjb25uZWN0OiAxLFxuICAgIGRpc2Nvbm5lY3Rpbmc6IDEsXG4gICAgLy8gRXZlbnRFbWl0dGVyIHJlc2VydmVkIGV2ZW50czogaHR0cHM6Ly9ub2RlanMub3JnL2FwaS9ldmVudHMuaHRtbCNldmVudHNfZXZlbnRfbmV3bGlzdGVuZXJcbiAgICBuZXdMaXN0ZW5lcjogMSxcbiAgICByZW1vdmVMaXN0ZW5lcjogMSxcbn0pO1xuY2xhc3MgU29ja2V0IGV4dGVuZHMgdHlwZWRfZXZlbnRzXzEuU3RyaWN0RXZlbnRFbWl0dGVyIHtcbiAgICAvKipcbiAgICAgKiBgU29ja2V0YCBjb25zdHJ1Y3Rvci5cbiAgICAgKlxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihpbywgbnNwLCBvcHRzKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMucmVjZWl2ZUJ1ZmZlciA9IFtdO1xuICAgICAgICB0aGlzLnNlbmRCdWZmZXIgPSBbXTtcbiAgICAgICAgdGhpcy5pZHMgPSAwO1xuICAgICAgICB0aGlzLmFja3MgPSB7fTtcbiAgICAgICAgdGhpcy5mbGFncyA9IHt9O1xuICAgICAgICB0aGlzLmlvID0gaW87XG4gICAgICAgIHRoaXMubnNwID0gbnNwO1xuICAgICAgICB0aGlzLmlkcyA9IDA7XG4gICAgICAgIHRoaXMuYWNrcyA9IHt9O1xuICAgICAgICB0aGlzLnJlY2VpdmVCdWZmZXIgPSBbXTtcbiAgICAgICAgdGhpcy5zZW5kQnVmZmVyID0gW107XG4gICAgICAgIHRoaXMuY29ubmVjdGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZGlzY29ubmVjdGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5mbGFncyA9IHt9O1xuICAgICAgICBpZiAob3B0cyAmJiBvcHRzLmF1dGgpIHtcbiAgICAgICAgICAgIHRoaXMuYXV0aCA9IG9wdHMuYXV0aDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pby5fYXV0b0Nvbm5lY3QpXG4gICAgICAgICAgICB0aGlzLm9wZW4oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU3Vic2NyaWJlIHRvIG9wZW4sIGNsb3NlIGFuZCBwYWNrZXQgZXZlbnRzXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHN1YkV2ZW50cygpIHtcbiAgICAgICAgaWYgKHRoaXMuc3VicylcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgY29uc3QgaW8gPSB0aGlzLmlvO1xuICAgICAgICB0aGlzLnN1YnMgPSBbXG4gICAgICAgICAgICBvbl8xLm9uKGlvLCBcIm9wZW5cIiwgdGhpcy5vbm9wZW4uYmluZCh0aGlzKSksXG4gICAgICAgICAgICBvbl8xLm9uKGlvLCBcInBhY2tldFwiLCB0aGlzLm9ucGFja2V0LmJpbmQodGhpcykpLFxuICAgICAgICAgICAgb25fMS5vbihpbywgXCJlcnJvclwiLCB0aGlzLm9uZXJyb3IuYmluZCh0aGlzKSksXG4gICAgICAgICAgICBvbl8xLm9uKGlvLCBcImNsb3NlXCIsIHRoaXMub25jbG9zZS5iaW5kKHRoaXMpKSxcbiAgICAgICAgXTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogV2hldGhlciB0aGUgU29ja2V0IHdpbGwgdHJ5IHRvIHJlY29ubmVjdCB3aGVuIGl0cyBNYW5hZ2VyIGNvbm5lY3RzIG9yIHJlY29ubmVjdHNcbiAgICAgKi9cbiAgICBnZXQgYWN0aXZlKCkge1xuICAgICAgICByZXR1cm4gISF0aGlzLnN1YnM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFwiT3BlbnNcIiB0aGUgc29ja2V0LlxuICAgICAqXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbm5lY3RlZClcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB0aGlzLnN1YkV2ZW50cygpO1xuICAgICAgICBpZiAoIXRoaXMuaW9bXCJfcmVjb25uZWN0aW5nXCJdKVxuICAgICAgICAgICAgdGhpcy5pby5vcGVuKCk7IC8vIGVuc3VyZSBvcGVuXG4gICAgICAgIGlmIChcIm9wZW5cIiA9PT0gdGhpcy5pby5fcmVhZHlTdGF0ZSlcbiAgICAgICAgICAgIHRoaXMub25vcGVuKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBbGlhcyBmb3IgY29ubmVjdCgpXG4gICAgICovXG4gICAgb3BlbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29ubmVjdCgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZW5kcyBhIGBtZXNzYWdlYCBldmVudC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4gc2VsZlxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBzZW5kKC4uLmFyZ3MpIHtcbiAgICAgICAgYXJncy51bnNoaWZ0KFwibWVzc2FnZVwiKTtcbiAgICAgICAgdGhpcy5lbWl0LmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogT3ZlcnJpZGUgYGVtaXRgLlxuICAgICAqIElmIHRoZSBldmVudCBpcyBpbiBgZXZlbnRzYCwgaXQncyBlbWl0dGVkIG5vcm1hbGx5LlxuICAgICAqXG4gICAgICogQHJldHVybiBzZWxmXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIGVtaXQoZXYsIC4uLmFyZ3MpIHtcbiAgICAgICAgaWYgKFJFU0VSVkVEX0VWRU5UUy5oYXNPd25Qcm9wZXJ0eShldikpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignXCInICsgZXYgKyAnXCIgaXMgYSByZXNlcnZlZCBldmVudCBuYW1lJyk7XG4gICAgICAgIH1cbiAgICAgICAgYXJncy51bnNoaWZ0KGV2KTtcbiAgICAgICAgY29uc3QgcGFja2V0ID0ge1xuICAgICAgICAgICAgdHlwZTogc29ja2V0X2lvX3BhcnNlcl8xLlBhY2tldFR5cGUuRVZFTlQsXG4gICAgICAgICAgICBkYXRhOiBhcmdzLFxuICAgICAgICB9O1xuICAgICAgICBwYWNrZXQub3B0aW9ucyA9IHt9O1xuICAgICAgICBwYWNrZXQub3B0aW9ucy5jb21wcmVzcyA9IHRoaXMuZmxhZ3MuY29tcHJlc3MgIT09IGZhbHNlO1xuICAgICAgICAvLyBldmVudCBhY2sgY2FsbGJhY2tcbiAgICAgICAgaWYgKFwiZnVuY3Rpb25cIiA9PT0gdHlwZW9mIGFyZ3NbYXJncy5sZW5ndGggLSAxXSkge1xuICAgICAgICAgICAgZGVidWcoXCJlbWl0dGluZyBwYWNrZXQgd2l0aCBhY2sgaWQgJWRcIiwgdGhpcy5pZHMpO1xuICAgICAgICAgICAgdGhpcy5hY2tzW3RoaXMuaWRzXSA9IGFyZ3MucG9wKCk7XG4gICAgICAgICAgICBwYWNrZXQuaWQgPSB0aGlzLmlkcysrO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGlzVHJhbnNwb3J0V3JpdGFibGUgPSB0aGlzLmlvLmVuZ2luZSAmJlxuICAgICAgICAgICAgdGhpcy5pby5lbmdpbmUudHJhbnNwb3J0ICYmXG4gICAgICAgICAgICB0aGlzLmlvLmVuZ2luZS50cmFuc3BvcnQud3JpdGFibGU7XG4gICAgICAgIGNvbnN0IGRpc2NhcmRQYWNrZXQgPSB0aGlzLmZsYWdzLnZvbGF0aWxlICYmICghaXNUcmFuc3BvcnRXcml0YWJsZSB8fCAhdGhpcy5jb25uZWN0ZWQpO1xuICAgICAgICBpZiAoZGlzY2FyZFBhY2tldCkge1xuICAgICAgICAgICAgZGVidWcoXCJkaXNjYXJkIHBhY2tldCBhcyB0aGUgdHJhbnNwb3J0IGlzIG5vdCBjdXJyZW50bHkgd3JpdGFibGVcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5jb25uZWN0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMucGFja2V0KHBhY2tldCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNlbmRCdWZmZXIucHVzaChwYWNrZXQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZmxhZ3MgPSB7fTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNlbmRzIGEgcGFja2V0LlxuICAgICAqXG4gICAgICogQHBhcmFtIHBhY2tldFxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgcGFja2V0KHBhY2tldCkge1xuICAgICAgICBwYWNrZXQubnNwID0gdGhpcy5uc3A7XG4gICAgICAgIHRoaXMuaW8uX3BhY2tldChwYWNrZXQpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgdXBvbiBlbmdpbmUgYG9wZW5gLlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBvbm9wZW4oKSB7XG4gICAgICAgIGRlYnVnKFwidHJhbnNwb3J0IGlzIG9wZW4gLSBjb25uZWN0aW5nXCIpO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuYXV0aCA9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHRoaXMuYXV0aCgoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucGFja2V0KHsgdHlwZTogc29ja2V0X2lvX3BhcnNlcl8xLlBhY2tldFR5cGUuQ09OTkVDVCwgZGF0YSB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wYWNrZXQoeyB0eXBlOiBzb2NrZXRfaW9fcGFyc2VyXzEuUGFja2V0VHlwZS5DT05ORUNULCBkYXRhOiB0aGlzLmF1dGggfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHVwb24gZW5naW5lIG9yIG1hbmFnZXIgYGVycm9yYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBlcnJcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIG9uZXJyb3IoZXJyKSB7XG4gICAgICAgIGlmICghdGhpcy5jb25uZWN0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZW1pdFJlc2VydmVkKFwiY29ubmVjdF9lcnJvclwiLCBlcnIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxlZCB1cG9uIGVuZ2luZSBgY2xvc2VgLlxuICAgICAqXG4gICAgICogQHBhcmFtIHJlYXNvblxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgb25jbG9zZShyZWFzb24pIHtcbiAgICAgICAgZGVidWcoXCJjbG9zZSAoJXMpXCIsIHJlYXNvbik7XG4gICAgICAgIHRoaXMuY29ubmVjdGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZGlzY29ubmVjdGVkID0gdHJ1ZTtcbiAgICAgICAgZGVsZXRlIHRoaXMuaWQ7XG4gICAgICAgIHRoaXMuZW1pdFJlc2VydmVkKFwiZGlzY29ubmVjdFwiLCByZWFzb24pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgd2l0aCBzb2NrZXQgcGFja2V0LlxuICAgICAqXG4gICAgICogQHBhcmFtIHBhY2tldFxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgb25wYWNrZXQocGFja2V0KSB7XG4gICAgICAgIGNvbnN0IHNhbWVOYW1lc3BhY2UgPSBwYWNrZXQubnNwID09PSB0aGlzLm5zcDtcbiAgICAgICAgaWYgKCFzYW1lTmFtZXNwYWNlKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBzd2l0Y2ggKHBhY2tldC50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIHNvY2tldF9pb19wYXJzZXJfMS5QYWNrZXRUeXBlLkNPTk5FQ1Q6XG4gICAgICAgICAgICAgICAgaWYgKHBhY2tldC5kYXRhICYmIHBhY2tldC5kYXRhLnNpZCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpZCA9IHBhY2tldC5kYXRhLnNpZDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbmNvbm5lY3QoaWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0UmVzZXJ2ZWQoXCJjb25uZWN0X2Vycm9yXCIsIG5ldyBFcnJvcihcIkl0IHNlZW1zIHlvdSBhcmUgdHJ5aW5nIHRvIHJlYWNoIGEgU29ja2V0LklPIHNlcnZlciBpbiB2Mi54IHdpdGggYSB2My54IGNsaWVudCwgYnV0IHRoZXkgYXJlIG5vdCBjb21wYXRpYmxlIChtb3JlIGluZm9ybWF0aW9uIGhlcmU6IGh0dHBzOi8vc29ja2V0LmlvL2RvY3MvdjMvbWlncmF0aW5nLWZyb20tMi14LXRvLTMtMC8pXCIpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHNvY2tldF9pb19wYXJzZXJfMS5QYWNrZXRUeXBlLkVWRU5UOlxuICAgICAgICAgICAgICAgIHRoaXMub25ldmVudChwYWNrZXQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBzb2NrZXRfaW9fcGFyc2VyXzEuUGFja2V0VHlwZS5CSU5BUllfRVZFTlQ6XG4gICAgICAgICAgICAgICAgdGhpcy5vbmV2ZW50KHBhY2tldCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHNvY2tldF9pb19wYXJzZXJfMS5QYWNrZXRUeXBlLkFDSzpcbiAgICAgICAgICAgICAgICB0aGlzLm9uYWNrKHBhY2tldCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHNvY2tldF9pb19wYXJzZXJfMS5QYWNrZXRUeXBlLkJJTkFSWV9BQ0s6XG4gICAgICAgICAgICAgICAgdGhpcy5vbmFjayhwYWNrZXQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBzb2NrZXRfaW9fcGFyc2VyXzEuUGFja2V0VHlwZS5ESVNDT05ORUNUOlxuICAgICAgICAgICAgICAgIHRoaXMub25kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHNvY2tldF9pb19wYXJzZXJfMS5QYWNrZXRUeXBlLkNPTk5FQ1RfRVJST1I6XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyID0gbmV3IEVycm9yKHBhY2tldC5kYXRhLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICBlcnIuZGF0YSA9IHBhY2tldC5kYXRhLmRhdGE7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0UmVzZXJ2ZWQoXCJjb25uZWN0X2Vycm9yXCIsIGVycik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHVwb24gYSBzZXJ2ZXIgZXZlbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcGFja2V0XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBvbmV2ZW50KHBhY2tldCkge1xuICAgICAgICBjb25zdCBhcmdzID0gcGFja2V0LmRhdGEgfHwgW107XG4gICAgICAgIGRlYnVnKFwiZW1pdHRpbmcgZXZlbnQgJWpcIiwgYXJncyk7XG4gICAgICAgIGlmIChudWxsICE9IHBhY2tldC5pZCkge1xuICAgICAgICAgICAgZGVidWcoXCJhdHRhY2hpbmcgYWNrIGNhbGxiYWNrIHRvIGV2ZW50XCIpO1xuICAgICAgICAgICAgYXJncy5wdXNoKHRoaXMuYWNrKHBhY2tldC5pZCkpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmNvbm5lY3RlZCkge1xuICAgICAgICAgICAgdGhpcy5lbWl0RXZlbnQoYXJncyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJlY2VpdmVCdWZmZXIucHVzaChPYmplY3QuZnJlZXplKGFyZ3MpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbWl0RXZlbnQoYXJncykge1xuICAgICAgICBpZiAodGhpcy5fYW55TGlzdGVuZXJzICYmIHRoaXMuX2FueUxpc3RlbmVycy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IGxpc3RlbmVycyA9IHRoaXMuX2FueUxpc3RlbmVycy5zbGljZSgpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBsaXN0ZW5lciBvZiBsaXN0ZW5lcnMpIHtcbiAgICAgICAgICAgICAgICBsaXN0ZW5lci5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzdXBlci5lbWl0LmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQcm9kdWNlcyBhbiBhY2sgY2FsbGJhY2sgdG8gZW1pdCB3aXRoIGFuIGV2ZW50LlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBhY2soaWQpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGxldCBzZW50ID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgICAgICAgICAgLy8gcHJldmVudCBkb3VibGUgY2FsbGJhY2tzXG4gICAgICAgICAgICBpZiAoc2VudClcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBzZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgIGRlYnVnKFwic2VuZGluZyBhY2sgJWpcIiwgYXJncyk7XG4gICAgICAgICAgICBzZWxmLnBhY2tldCh7XG4gICAgICAgICAgICAgICAgdHlwZTogc29ja2V0X2lvX3BhcnNlcl8xLlBhY2tldFR5cGUuQUNLLFxuICAgICAgICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICAgICAgICBkYXRhOiBhcmdzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxlZCB1cG9uIGEgc2VydmVyIGFja25vd2xlZ2VtZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIHBhY2tldFxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgb25hY2socGFja2V0KSB7XG4gICAgICAgIGNvbnN0IGFjayA9IHRoaXMuYWNrc1twYWNrZXQuaWRdO1xuICAgICAgICBpZiAoXCJmdW5jdGlvblwiID09PSB0eXBlb2YgYWNrKSB7XG4gICAgICAgICAgICBkZWJ1ZyhcImNhbGxpbmcgYWNrICVzIHdpdGggJWpcIiwgcGFja2V0LmlkLCBwYWNrZXQuZGF0YSk7XG4gICAgICAgICAgICBhY2suYXBwbHkodGhpcywgcGFja2V0LmRhdGEpO1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuYWNrc1twYWNrZXQuaWRdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZGVidWcoXCJiYWQgYWNrICVzXCIsIHBhY2tldC5pZCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHVwb24gc2VydmVyIGNvbm5lY3QuXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIG9uY29ubmVjdChpZCkge1xuICAgICAgICBkZWJ1ZyhcInNvY2tldCBjb25uZWN0ZWQgd2l0aCBpZCAlc1wiLCBpZCk7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5jb25uZWN0ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmRpc2Nvbm5lY3RlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmVtaXRCdWZmZXJlZCgpO1xuICAgICAgICB0aGlzLmVtaXRSZXNlcnZlZChcImNvbm5lY3RcIik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEVtaXQgYnVmZmVyZWQgZXZlbnRzIChyZWNlaXZlZCBhbmQgZW1pdHRlZCkuXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGVtaXRCdWZmZXJlZCgpIHtcbiAgICAgICAgdGhpcy5yZWNlaXZlQnVmZmVyLmZvckVhY2goKGFyZ3MpID0+IHRoaXMuZW1pdEV2ZW50KGFyZ3MpKTtcbiAgICAgICAgdGhpcy5yZWNlaXZlQnVmZmVyID0gW107XG4gICAgICAgIHRoaXMuc2VuZEJ1ZmZlci5mb3JFYWNoKChwYWNrZXQpID0+IHRoaXMucGFja2V0KHBhY2tldCkpO1xuICAgICAgICB0aGlzLnNlbmRCdWZmZXIgPSBbXTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHVwb24gc2VydmVyIGRpc2Nvbm5lY3QuXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIG9uZGlzY29ubmVjdCgpIHtcbiAgICAgICAgZGVidWcoXCJzZXJ2ZXIgZGlzY29ubmVjdCAoJXMpXCIsIHRoaXMubnNwKTtcbiAgICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMub25jbG9zZShcImlvIHNlcnZlciBkaXNjb25uZWN0XCIpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgdXBvbiBmb3JjZWQgY2xpZW50L3NlcnZlciBzaWRlIGRpc2Nvbm5lY3Rpb25zLFxuICAgICAqIHRoaXMgbWV0aG9kIGVuc3VyZXMgdGhlIG1hbmFnZXIgc3RvcHMgdHJhY2tpbmcgdXMgYW5kXG4gICAgICogdGhhdCByZWNvbm5lY3Rpb25zIGRvbid0IGdldCB0cmlnZ2VyZWQgZm9yIHRoaXMuXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh0aGlzLnN1YnMpIHtcbiAgICAgICAgICAgIC8vIGNsZWFuIHN1YnNjcmlwdGlvbnMgdG8gYXZvaWQgcmVjb25uZWN0aW9uc1xuICAgICAgICAgICAgdGhpcy5zdWJzLmZvckVhY2goKHN1YkRlc3Ryb3kpID0+IHN1YkRlc3Ryb3koKSk7XG4gICAgICAgICAgICB0aGlzLnN1YnMgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pb1tcIl9kZXN0cm95XCJdKHRoaXMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEaXNjb25uZWN0cyB0aGUgc29ja2V0IG1hbnVhbGx5LlxuICAgICAqXG4gICAgICogQHJldHVybiBzZWxmXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIGRpc2Nvbm5lY3QoKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbm5lY3RlZCkge1xuICAgICAgICAgICAgZGVidWcoXCJwZXJmb3JtaW5nIGRpc2Nvbm5lY3QgKCVzKVwiLCB0aGlzLm5zcCk7XG4gICAgICAgICAgICB0aGlzLnBhY2tldCh7IHR5cGU6IHNvY2tldF9pb19wYXJzZXJfMS5QYWNrZXRUeXBlLkRJU0NPTk5FQ1QgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gcmVtb3ZlIHNvY2tldCBmcm9tIHBvb2xcbiAgICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgICAgIGlmICh0aGlzLmNvbm5lY3RlZCkge1xuICAgICAgICAgICAgLy8gZmlyZSBldmVudHNcbiAgICAgICAgICAgIHRoaXMub25jbG9zZShcImlvIGNsaWVudCBkaXNjb25uZWN0XCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBbGlhcyBmb3IgZGlzY29ubmVjdCgpXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHNlbGZcbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgY2xvc2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRpc2Nvbm5lY3QoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgY29tcHJlc3MgZmxhZy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBjb21wcmVzcyAtIGlmIGB0cnVlYCwgY29tcHJlc3NlcyB0aGUgc2VuZGluZyBkYXRhXG4gICAgICogQHJldHVybiBzZWxmXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIGNvbXByZXNzKGNvbXByZXNzKSB7XG4gICAgICAgIHRoaXMuZmxhZ3MuY29tcHJlc3MgPSBjb21wcmVzcztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgYSBtb2RpZmllciBmb3IgYSBzdWJzZXF1ZW50IGV2ZW50IGVtaXNzaW9uIHRoYXQgdGhlIGV2ZW50IG1lc3NhZ2Ugd2lsbCBiZSBkcm9wcGVkIHdoZW4gdGhpcyBzb2NrZXQgaXMgbm90XG4gICAgICogcmVhZHkgdG8gc2VuZCBtZXNzYWdlcy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHNlbGZcbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgZ2V0IHZvbGF0aWxlKCkge1xuICAgICAgICB0aGlzLmZsYWdzLnZvbGF0aWxlID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFkZHMgYSBsaXN0ZW5lciB0aGF0IHdpbGwgYmUgZmlyZWQgd2hlbiBhbnkgZXZlbnQgaXMgZW1pdHRlZC4gVGhlIGV2ZW50IG5hbWUgaXMgcGFzc2VkIGFzIHRoZSBmaXJzdCBhcmd1bWVudCB0byB0aGVcbiAgICAgKiBjYWxsYmFjay5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBsaXN0ZW5lclxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBvbkFueShsaXN0ZW5lcikge1xuICAgICAgICB0aGlzLl9hbnlMaXN0ZW5lcnMgPSB0aGlzLl9hbnlMaXN0ZW5lcnMgfHwgW107XG4gICAgICAgIHRoaXMuX2FueUxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFkZHMgYSBsaXN0ZW5lciB0aGF0IHdpbGwgYmUgZmlyZWQgd2hlbiBhbnkgZXZlbnQgaXMgZW1pdHRlZC4gVGhlIGV2ZW50IG5hbWUgaXMgcGFzc2VkIGFzIHRoZSBmaXJzdCBhcmd1bWVudCB0byB0aGVcbiAgICAgKiBjYWxsYmFjay4gVGhlIGxpc3RlbmVyIGlzIGFkZGVkIHRvIHRoZSBiZWdpbm5pbmcgb2YgdGhlIGxpc3RlbmVycyBhcnJheS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBsaXN0ZW5lclxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBwcmVwZW5kQW55KGxpc3RlbmVyKSB7XG4gICAgICAgIHRoaXMuX2FueUxpc3RlbmVycyA9IHRoaXMuX2FueUxpc3RlbmVycyB8fCBbXTtcbiAgICAgICAgdGhpcy5fYW55TGlzdGVuZXJzLnVuc2hpZnQobGlzdGVuZXIpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyB0aGUgbGlzdGVuZXIgdGhhdCB3aWxsIGJlIGZpcmVkIHdoZW4gYW55IGV2ZW50IGlzIGVtaXR0ZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbGlzdGVuZXJcbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgb2ZmQW55KGxpc3RlbmVyKSB7XG4gICAgICAgIGlmICghdGhpcy5fYW55TGlzdGVuZXJzKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICBpZiAobGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IGxpc3RlbmVycyA9IHRoaXMuX2FueUxpc3RlbmVycztcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGxpc3RlbmVyID09PSBsaXN0ZW5lcnNbaV0pIHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fYW55TGlzdGVuZXJzID0gW107XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gYXJyYXkgb2YgbGlzdGVuZXJzIHRoYXQgYXJlIGxpc3RlbmluZyBmb3IgYW55IGV2ZW50IHRoYXQgaXMgc3BlY2lmaWVkLiBUaGlzIGFycmF5IGNhbiBiZSBtYW5pcHVsYXRlZCxcbiAgICAgKiBlLmcuIHRvIHJlbW92ZSBsaXN0ZW5lcnMuXG4gICAgICpcbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgbGlzdGVuZXJzQW55KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYW55TGlzdGVuZXJzIHx8IFtdO1xuICAgIH1cbn1cbmV4cG9ydHMuU29ja2V0ID0gU29ja2V0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlN0cmljdEV2ZW50RW1pdHRlciA9IHZvaWQgMDtcbmNvbnN0IEVtaXR0ZXIgPSByZXF1aXJlKFwiY29tcG9uZW50LWVtaXR0ZXJcIik7XG4vKipcbiAqIFN0cmljdGx5IHR5cGVkIHZlcnNpb24gb2YgYW4gYEV2ZW50RW1pdHRlcmAuIEEgYFR5cGVkRXZlbnRFbWl0dGVyYCB0YWtlcyB0eXBlXG4gKiBwYXJhbWV0ZXJzIGZvciBtYXBwaW5ncyBvZiBldmVudCBuYW1lcyB0byBldmVudCBkYXRhIHR5cGVzLCBhbmQgc3RyaWN0bHlcbiAqIHR5cGVzIG1ldGhvZCBjYWxscyB0byB0aGUgYEV2ZW50RW1pdHRlcmAgYWNjb3JkaW5nIHRvIHRoZXNlIGV2ZW50IG1hcHMuXG4gKlxuICogQHR5cGVQYXJhbSBMaXN0ZW5FdmVudHMgLSBgRXZlbnRzTWFwYCBvZiB1c2VyLWRlZmluZWQgZXZlbnRzIHRoYXQgY2FuIGJlXG4gKiBsaXN0ZW5lZCB0byB3aXRoIGBvbmAgb3IgYG9uY2VgXG4gKiBAdHlwZVBhcmFtIEVtaXRFdmVudHMgLSBgRXZlbnRzTWFwYCBvZiB1c2VyLWRlZmluZWQgZXZlbnRzIHRoYXQgY2FuIGJlXG4gKiBlbWl0dGVkIHdpdGggYGVtaXRgXG4gKiBAdHlwZVBhcmFtIFJlc2VydmVkRXZlbnRzIC0gYEV2ZW50c01hcGAgb2YgcmVzZXJ2ZWQgZXZlbnRzLCB0aGF0IGNhbiBiZVxuICogZW1pdHRlZCBieSBzb2NrZXQuaW8gd2l0aCBgZW1pdFJlc2VydmVkYCwgYW5kIGNhbiBiZSBsaXN0ZW5lZCB0byB3aXRoXG4gKiBgbGlzdGVuYC5cbiAqL1xuY2xhc3MgU3RyaWN0RXZlbnRFbWl0dGVyIGV4dGVuZHMgRW1pdHRlciB7XG4gICAgLyoqXG4gICAgICogQWRkcyB0aGUgYGxpc3RlbmVyYCBmdW5jdGlvbiBhcyBhbiBldmVudCBsaXN0ZW5lciBmb3IgYGV2YC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBldiBOYW1lIG9mIHRoZSBldmVudFxuICAgICAqIEBwYXJhbSBsaXN0ZW5lciBDYWxsYmFjayBmdW5jdGlvblxuICAgICAqL1xuICAgIG9uKGV2LCBsaXN0ZW5lcikge1xuICAgICAgICBzdXBlci5vbihldiwgbGlzdGVuZXIpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkcyBhIG9uZS10aW1lIGBsaXN0ZW5lcmAgZnVuY3Rpb24gYXMgYW4gZXZlbnQgbGlzdGVuZXIgZm9yIGBldmAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZXYgTmFtZSBvZiB0aGUgZXZlbnRcbiAgICAgKiBAcGFyYW0gbGlzdGVuZXIgQ2FsbGJhY2sgZnVuY3Rpb25cbiAgICAgKi9cbiAgICBvbmNlKGV2LCBsaXN0ZW5lcikge1xuICAgICAgICBzdXBlci5vbmNlKGV2LCBsaXN0ZW5lcik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBFbWl0cyBhbiBldmVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBldiBOYW1lIG9mIHRoZSBldmVudFxuICAgICAqIEBwYXJhbSBhcmdzIFZhbHVlcyB0byBzZW5kIHRvIGxpc3RlbmVycyBvZiB0aGlzIGV2ZW50XG4gICAgICovXG4gICAgZW1pdChldiwgLi4uYXJncykge1xuICAgICAgICBzdXBlci5lbWl0KGV2LCAuLi5hcmdzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEVtaXRzIGEgcmVzZXJ2ZWQgZXZlbnQuXG4gICAgICpcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBgcHJvdGVjdGVkYCwgc28gdGhhdCBvbmx5IGEgY2xhc3MgZXh0ZW5kaW5nXG4gICAgICogYFN0cmljdEV2ZW50RW1pdHRlcmAgY2FuIGVtaXQgaXRzIG93biByZXNlcnZlZCBldmVudHMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZXYgUmVzZXJ2ZWQgZXZlbnQgbmFtZVxuICAgICAqIEBwYXJhbSBhcmdzIEFyZ3VtZW50cyB0byBlbWl0IGFsb25nIHdpdGggdGhlIGV2ZW50XG4gICAgICovXG4gICAgZW1pdFJlc2VydmVkKGV2LCAuLi5hcmdzKSB7XG4gICAgICAgIHN1cGVyLmVtaXQoZXYsIC4uLmFyZ3MpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbGlzdGVuZXJzIGxpc3RlbmluZyB0byBhbiBldmVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBldmVudCBFdmVudCBuYW1lXG4gICAgICogQHJldHVybnMgQXJyYXkgb2YgbGlzdGVuZXJzIHN1YnNjcmliZWQgdG8gYGV2ZW50YFxuICAgICAqL1xuICAgIGxpc3RlbmVycyhldmVudCkge1xuICAgICAgICByZXR1cm4gc3VwZXIubGlzdGVuZXJzKGV2ZW50KTtcbiAgICB9XG59XG5leHBvcnRzLlN0cmljdEV2ZW50RW1pdHRlciA9IFN0cmljdEV2ZW50RW1pdHRlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy51cmwgPSB2b2lkIDA7XG5jb25zdCBwYXJzZXVyaSA9IHJlcXVpcmUoXCJwYXJzZXVyaVwiKTtcbmNvbnN0IGRlYnVnID0gcmVxdWlyZShcImRlYnVnXCIpKFwic29ja2V0LmlvLWNsaWVudDp1cmxcIik7XG4vKipcbiAqIFVSTCBwYXJzZXIuXG4gKlxuICogQHBhcmFtIHVyaSAtIHVybFxuICogQHBhcmFtIHBhdGggLSB0aGUgcmVxdWVzdCBwYXRoIG9mIHRoZSBjb25uZWN0aW9uXG4gKiBAcGFyYW0gbG9jIC0gQW4gb2JqZWN0IG1lYW50IHRvIG1pbWljIHdpbmRvdy5sb2NhdGlvbi5cbiAqICAgICAgICBEZWZhdWx0cyB0byB3aW5kb3cubG9jYXRpb24uXG4gKiBAcHVibGljXG4gKi9cbmZ1bmN0aW9uIHVybCh1cmksIHBhdGggPSBcIlwiLCBsb2MpIHtcbiAgICBsZXQgb2JqID0gdXJpO1xuICAgIC8vIGRlZmF1bHQgdG8gd2luZG93LmxvY2F0aW9uXG4gICAgbG9jID0gbG9jIHx8ICh0eXBlb2YgbG9jYXRpb24gIT09IFwidW5kZWZpbmVkXCIgJiYgbG9jYXRpb24pO1xuICAgIGlmIChudWxsID09IHVyaSlcbiAgICAgICAgdXJpID0gbG9jLnByb3RvY29sICsgXCIvL1wiICsgbG9jLmhvc3Q7XG4gICAgLy8gcmVsYXRpdmUgcGF0aCBzdXBwb3J0XG4gICAgaWYgKHR5cGVvZiB1cmkgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgaWYgKFwiL1wiID09PSB1cmkuY2hhckF0KDApKSB7XG4gICAgICAgICAgICBpZiAoXCIvXCIgPT09IHVyaS5jaGFyQXQoMSkpIHtcbiAgICAgICAgICAgICAgICB1cmkgPSBsb2MucHJvdG9jb2wgKyB1cmk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB1cmkgPSBsb2MuaG9zdCArIHVyaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIS9eKGh0dHBzP3x3c3M/KTpcXC9cXC8vLnRlc3QodXJpKSkge1xuICAgICAgICAgICAgZGVidWcoXCJwcm90b2NvbC1sZXNzIHVybCAlc1wiLCB1cmkpO1xuICAgICAgICAgICAgaWYgKFwidW5kZWZpbmVkXCIgIT09IHR5cGVvZiBsb2MpIHtcbiAgICAgICAgICAgICAgICB1cmkgPSBsb2MucHJvdG9jb2wgKyBcIi8vXCIgKyB1cmk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB1cmkgPSBcImh0dHBzOi8vXCIgKyB1cmk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gcGFyc2VcbiAgICAgICAgZGVidWcoXCJwYXJzZSAlc1wiLCB1cmkpO1xuICAgICAgICBvYmogPSBwYXJzZXVyaSh1cmkpO1xuICAgIH1cbiAgICAvLyBtYWtlIHN1cmUgd2UgdHJlYXQgYGxvY2FsaG9zdDo4MGAgYW5kIGBsb2NhbGhvc3RgIGVxdWFsbHlcbiAgICBpZiAoIW9iai5wb3J0KSB7XG4gICAgICAgIGlmICgvXihodHRwfHdzKSQvLnRlc3Qob2JqLnByb3RvY29sKSkge1xuICAgICAgICAgICAgb2JqLnBvcnQgPSBcIjgwXCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoL14oaHR0cHx3cylzJC8udGVzdChvYmoucHJvdG9jb2wpKSB7XG4gICAgICAgICAgICBvYmoucG9ydCA9IFwiNDQzXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgb2JqLnBhdGggPSBvYmoucGF0aCB8fCBcIi9cIjtcbiAgICBjb25zdCBpcHY2ID0gb2JqLmhvc3QuaW5kZXhPZihcIjpcIikgIT09IC0xO1xuICAgIGNvbnN0IGhvc3QgPSBpcHY2ID8gXCJbXCIgKyBvYmouaG9zdCArIFwiXVwiIDogb2JqLmhvc3Q7XG4gICAgLy8gZGVmaW5lIHVuaXF1ZSBpZFxuICAgIG9iai5pZCA9IG9iai5wcm90b2NvbCArIFwiOi8vXCIgKyBob3N0ICsgXCI6XCIgKyBvYmoucG9ydCArIHBhdGg7XG4gICAgLy8gZGVmaW5lIGhyZWZcbiAgICBvYmouaHJlZiA9XG4gICAgICAgIG9iai5wcm90b2NvbCArXG4gICAgICAgICAgICBcIjovL1wiICtcbiAgICAgICAgICAgIGhvc3QgK1xuICAgICAgICAgICAgKGxvYyAmJiBsb2MucG9ydCA9PT0gb2JqLnBvcnQgPyBcIlwiIDogXCI6XCIgKyBvYmoucG9ydCk7XG4gICAgcmV0dXJuIG9iajtcbn1cbmV4cG9ydHMudXJsID0gdXJsO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnJlY29uc3RydWN0UGFja2V0ID0gZXhwb3J0cy5kZWNvbnN0cnVjdFBhY2tldCA9IHZvaWQgMDtcbmNvbnN0IGlzX2JpbmFyeV8xID0gcmVxdWlyZShcIi4vaXMtYmluYXJ5XCIpO1xuLyoqXG4gKiBSZXBsYWNlcyBldmVyeSBCdWZmZXIgfCBBcnJheUJ1ZmZlciB8IEJsb2IgfCBGaWxlIGluIHBhY2tldCB3aXRoIGEgbnVtYmVyZWQgcGxhY2Vob2xkZXIuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHBhY2tldCAtIHNvY2tldC5pbyBldmVudCBwYWNrZXRcbiAqIEByZXR1cm4ge09iamVjdH0gd2l0aCBkZWNvbnN0cnVjdGVkIHBhY2tldCBhbmQgbGlzdCBvZiBidWZmZXJzXG4gKiBAcHVibGljXG4gKi9cbmZ1bmN0aW9uIGRlY29uc3RydWN0UGFja2V0KHBhY2tldCkge1xuICAgIGNvbnN0IGJ1ZmZlcnMgPSBbXTtcbiAgICBjb25zdCBwYWNrZXREYXRhID0gcGFja2V0LmRhdGE7XG4gICAgY29uc3QgcGFjayA9IHBhY2tldDtcbiAgICBwYWNrLmRhdGEgPSBfZGVjb25zdHJ1Y3RQYWNrZXQocGFja2V0RGF0YSwgYnVmZmVycyk7XG4gICAgcGFjay5hdHRhY2htZW50cyA9IGJ1ZmZlcnMubGVuZ3RoOyAvLyBudW1iZXIgb2YgYmluYXJ5ICdhdHRhY2htZW50cydcbiAgICByZXR1cm4geyBwYWNrZXQ6IHBhY2ssIGJ1ZmZlcnM6IGJ1ZmZlcnMgfTtcbn1cbmV4cG9ydHMuZGVjb25zdHJ1Y3RQYWNrZXQgPSBkZWNvbnN0cnVjdFBhY2tldDtcbmZ1bmN0aW9uIF9kZWNvbnN0cnVjdFBhY2tldChkYXRhLCBidWZmZXJzKSB7XG4gICAgaWYgKCFkYXRhKVxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICBpZiAoaXNfYmluYXJ5XzEuaXNCaW5hcnkoZGF0YSkpIHtcbiAgICAgICAgY29uc3QgcGxhY2Vob2xkZXIgPSB7IF9wbGFjZWhvbGRlcjogdHJ1ZSwgbnVtOiBidWZmZXJzLmxlbmd0aCB9O1xuICAgICAgICBidWZmZXJzLnB1c2goZGF0YSk7XG4gICAgICAgIHJldHVybiBwbGFjZWhvbGRlcjtcbiAgICB9XG4gICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgICAgICBjb25zdCBuZXdEYXRhID0gbmV3IEFycmF5KGRhdGEubGVuZ3RoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBuZXdEYXRhW2ldID0gX2RlY29uc3RydWN0UGFja2V0KGRhdGFbaV0sIGJ1ZmZlcnMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdEYXRhO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgZGF0YSA9PT0gXCJvYmplY3RcIiAmJiAhKGRhdGEgaW5zdGFuY2VvZiBEYXRlKSkge1xuICAgICAgICBjb25zdCBuZXdEYXRhID0ge307XG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIGRhdGEpIHtcbiAgICAgICAgICAgIGlmIChkYXRhLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBuZXdEYXRhW2tleV0gPSBfZGVjb25zdHJ1Y3RQYWNrZXQoZGF0YVtrZXldLCBidWZmZXJzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3RGF0YTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG59XG4vKipcbiAqIFJlY29uc3RydWN0cyBhIGJpbmFyeSBwYWNrZXQgZnJvbSBpdHMgcGxhY2Vob2xkZXIgcGFja2V0IGFuZCBidWZmZXJzXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHBhY2tldCAtIGV2ZW50IHBhY2tldCB3aXRoIHBsYWNlaG9sZGVyc1xuICogQHBhcmFtIHtBcnJheX0gYnVmZmVycyAtIGJpbmFyeSBidWZmZXJzIHRvIHB1dCBpbiBwbGFjZWhvbGRlciBwb3NpdGlvbnNcbiAqIEByZXR1cm4ge09iamVjdH0gcmVjb25zdHJ1Y3RlZCBwYWNrZXRcbiAqIEBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gcmVjb25zdHJ1Y3RQYWNrZXQocGFja2V0LCBidWZmZXJzKSB7XG4gICAgcGFja2V0LmRhdGEgPSBfcmVjb25zdHJ1Y3RQYWNrZXQocGFja2V0LmRhdGEsIGJ1ZmZlcnMpO1xuICAgIHBhY2tldC5hdHRhY2htZW50cyA9IHVuZGVmaW5lZDsgLy8gbm8gbG9uZ2VyIHVzZWZ1bFxuICAgIHJldHVybiBwYWNrZXQ7XG59XG5leHBvcnRzLnJlY29uc3RydWN0UGFja2V0ID0gcmVjb25zdHJ1Y3RQYWNrZXQ7XG5mdW5jdGlvbiBfcmVjb25zdHJ1Y3RQYWNrZXQoZGF0YSwgYnVmZmVycykge1xuICAgIGlmICghZGF0YSlcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgaWYgKGRhdGEgJiYgZGF0YS5fcGxhY2Vob2xkZXIpIHtcbiAgICAgICAgcmV0dXJuIGJ1ZmZlcnNbZGF0YS5udW1dOyAvLyBhcHByb3ByaWF0ZSBidWZmZXIgKHNob3VsZCBiZSBuYXR1cmFsIG9yZGVyIGFueXdheSlcbiAgICB9XG4gICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGRhdGFbaV0gPSBfcmVjb25zdHJ1Y3RQYWNrZXQoZGF0YVtpXSwgYnVmZmVycyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIGRhdGEgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gZGF0YSkge1xuICAgICAgICAgICAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIGRhdGFba2V5XSA9IF9yZWNvbnN0cnVjdFBhY2tldChkYXRhW2tleV0sIGJ1ZmZlcnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkRlY29kZXIgPSBleHBvcnRzLkVuY29kZXIgPSBleHBvcnRzLlBhY2tldFR5cGUgPSBleHBvcnRzLnByb3RvY29sID0gdm9pZCAwO1xuY29uc3QgRW1pdHRlciA9IHJlcXVpcmUoXCJjb21wb25lbnQtZW1pdHRlclwiKTtcbmNvbnN0IGJpbmFyeV8xID0gcmVxdWlyZShcIi4vYmluYXJ5XCIpO1xuY29uc3QgaXNfYmluYXJ5XzEgPSByZXF1aXJlKFwiLi9pcy1iaW5hcnlcIik7XG5jb25zdCBkZWJ1ZyA9IHJlcXVpcmUoXCJkZWJ1Z1wiKShcInNvY2tldC5pby1wYXJzZXJcIik7XG4vKipcbiAqIFByb3RvY29sIHZlcnNpb24uXG4gKlxuICogQHB1YmxpY1xuICovXG5leHBvcnRzLnByb3RvY29sID0gNTtcbnZhciBQYWNrZXRUeXBlO1xuKGZ1bmN0aW9uIChQYWNrZXRUeXBlKSB7XG4gICAgUGFja2V0VHlwZVtQYWNrZXRUeXBlW1wiQ09OTkVDVFwiXSA9IDBdID0gXCJDT05ORUNUXCI7XG4gICAgUGFja2V0VHlwZVtQYWNrZXRUeXBlW1wiRElTQ09OTkVDVFwiXSA9IDFdID0gXCJESVNDT05ORUNUXCI7XG4gICAgUGFja2V0VHlwZVtQYWNrZXRUeXBlW1wiRVZFTlRcIl0gPSAyXSA9IFwiRVZFTlRcIjtcbiAgICBQYWNrZXRUeXBlW1BhY2tldFR5cGVbXCJBQ0tcIl0gPSAzXSA9IFwiQUNLXCI7XG4gICAgUGFja2V0VHlwZVtQYWNrZXRUeXBlW1wiQ09OTkVDVF9FUlJPUlwiXSA9IDRdID0gXCJDT05ORUNUX0VSUk9SXCI7XG4gICAgUGFja2V0VHlwZVtQYWNrZXRUeXBlW1wiQklOQVJZX0VWRU5UXCJdID0gNV0gPSBcIkJJTkFSWV9FVkVOVFwiO1xuICAgIFBhY2tldFR5cGVbUGFja2V0VHlwZVtcIkJJTkFSWV9BQ0tcIl0gPSA2XSA9IFwiQklOQVJZX0FDS1wiO1xufSkoUGFja2V0VHlwZSA9IGV4cG9ydHMuUGFja2V0VHlwZSB8fCAoZXhwb3J0cy5QYWNrZXRUeXBlID0ge30pKTtcbi8qKlxuICogQSBzb2NrZXQuaW8gRW5jb2RlciBpbnN0YW5jZVxuICovXG5jbGFzcyBFbmNvZGVyIHtcbiAgICAvKipcbiAgICAgKiBFbmNvZGUgYSBwYWNrZXQgYXMgYSBzaW5nbGUgc3RyaW5nIGlmIG5vbi1iaW5hcnksIG9yIGFzIGFcbiAgICAgKiBidWZmZXIgc2VxdWVuY2UsIGRlcGVuZGluZyBvbiBwYWNrZXQgdHlwZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvYmogLSBwYWNrZXQgb2JqZWN0XG4gICAgICovXG4gICAgZW5jb2RlKG9iaikge1xuICAgICAgICBkZWJ1ZyhcImVuY29kaW5nIHBhY2tldCAlalwiLCBvYmopO1xuICAgICAgICBpZiAob2JqLnR5cGUgPT09IFBhY2tldFR5cGUuRVZFTlQgfHwgb2JqLnR5cGUgPT09IFBhY2tldFR5cGUuQUNLKSB7XG4gICAgICAgICAgICBpZiAoaXNfYmluYXJ5XzEuaGFzQmluYXJ5KG9iaikpIHtcbiAgICAgICAgICAgICAgICBvYmoudHlwZSA9XG4gICAgICAgICAgICAgICAgICAgIG9iai50eXBlID09PSBQYWNrZXRUeXBlLkVWRU5UXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFBhY2tldFR5cGUuQklOQVJZX0VWRU5UXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFBhY2tldFR5cGUuQklOQVJZX0FDSztcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5lbmNvZGVBc0JpbmFyeShvYmopO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbdGhpcy5lbmNvZGVBc1N0cmluZyhvYmopXTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRW5jb2RlIHBhY2tldCBhcyBzdHJpbmcuXG4gICAgICovXG4gICAgZW5jb2RlQXNTdHJpbmcob2JqKSB7XG4gICAgICAgIC8vIGZpcnN0IGlzIHR5cGVcbiAgICAgICAgbGV0IHN0ciA9IFwiXCIgKyBvYmoudHlwZTtcbiAgICAgICAgLy8gYXR0YWNobWVudHMgaWYgd2UgaGF2ZSB0aGVtXG4gICAgICAgIGlmIChvYmoudHlwZSA9PT0gUGFja2V0VHlwZS5CSU5BUllfRVZFTlQgfHxcbiAgICAgICAgICAgIG9iai50eXBlID09PSBQYWNrZXRUeXBlLkJJTkFSWV9BQ0spIHtcbiAgICAgICAgICAgIHN0ciArPSBvYmouYXR0YWNobWVudHMgKyBcIi1cIjtcbiAgICAgICAgfVxuICAgICAgICAvLyBpZiB3ZSBoYXZlIGEgbmFtZXNwYWNlIG90aGVyIHRoYW4gYC9gXG4gICAgICAgIC8vIHdlIGFwcGVuZCBpdCBmb2xsb3dlZCBieSBhIGNvbW1hIGAsYFxuICAgICAgICBpZiAob2JqLm5zcCAmJiBcIi9cIiAhPT0gb2JqLm5zcCkge1xuICAgICAgICAgICAgc3RyICs9IG9iai5uc3AgKyBcIixcIjtcbiAgICAgICAgfVxuICAgICAgICAvLyBpbW1lZGlhdGVseSBmb2xsb3dlZCBieSB0aGUgaWRcbiAgICAgICAgaWYgKG51bGwgIT0gb2JqLmlkKSB7XG4gICAgICAgICAgICBzdHIgKz0gb2JqLmlkO1xuICAgICAgICB9XG4gICAgICAgIC8vIGpzb24gZGF0YVxuICAgICAgICBpZiAobnVsbCAhPSBvYmouZGF0YSkge1xuICAgICAgICAgICAgc3RyICs9IEpTT04uc3RyaW5naWZ5KG9iai5kYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBkZWJ1ZyhcImVuY29kZWQgJWogYXMgJXNcIiwgb2JqLCBzdHIpO1xuICAgICAgICByZXR1cm4gc3RyO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBFbmNvZGUgcGFja2V0IGFzICdidWZmZXIgc2VxdWVuY2UnIGJ5IHJlbW92aW5nIGJsb2JzLCBhbmRcbiAgICAgKiBkZWNvbnN0cnVjdGluZyBwYWNrZXQgaW50byBvYmplY3Qgd2l0aCBwbGFjZWhvbGRlcnMgYW5kXG4gICAgICogYSBsaXN0IG9mIGJ1ZmZlcnMuXG4gICAgICovXG4gICAgZW5jb2RlQXNCaW5hcnkob2JqKSB7XG4gICAgICAgIGNvbnN0IGRlY29uc3RydWN0aW9uID0gYmluYXJ5XzEuZGVjb25zdHJ1Y3RQYWNrZXQob2JqKTtcbiAgICAgICAgY29uc3QgcGFjayA9IHRoaXMuZW5jb2RlQXNTdHJpbmcoZGVjb25zdHJ1Y3Rpb24ucGFja2V0KTtcbiAgICAgICAgY29uc3QgYnVmZmVycyA9IGRlY29uc3RydWN0aW9uLmJ1ZmZlcnM7XG4gICAgICAgIGJ1ZmZlcnMudW5zaGlmdChwYWNrKTsgLy8gYWRkIHBhY2tldCBpbmZvIHRvIGJlZ2lubmluZyBvZiBkYXRhIGxpc3RcbiAgICAgICAgcmV0dXJuIGJ1ZmZlcnM7IC8vIHdyaXRlIGFsbCB0aGUgYnVmZmVyc1xuICAgIH1cbn1cbmV4cG9ydHMuRW5jb2RlciA9IEVuY29kZXI7XG4vKipcbiAqIEEgc29ja2V0LmlvIERlY29kZXIgaW5zdGFuY2VcbiAqXG4gKiBAcmV0dXJuIHtPYmplY3R9IGRlY29kZXJcbiAqL1xuY2xhc3MgRGVjb2RlciBleHRlbmRzIEVtaXR0ZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEZWNvZGVzIGFuIGVuY29kZWQgcGFja2V0IHN0cmluZyBpbnRvIHBhY2tldCBKU09OLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9iaiAtIGVuY29kZWQgcGFja2V0XG4gICAgICovXG4gICAgYWRkKG9iaikge1xuICAgICAgICBsZXQgcGFja2V0O1xuICAgICAgICBpZiAodHlwZW9mIG9iaiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgcGFja2V0ID0gdGhpcy5kZWNvZGVTdHJpbmcob2JqKTtcbiAgICAgICAgICAgIGlmIChwYWNrZXQudHlwZSA9PT0gUGFja2V0VHlwZS5CSU5BUllfRVZFTlQgfHxcbiAgICAgICAgICAgICAgICBwYWNrZXQudHlwZSA9PT0gUGFja2V0VHlwZS5CSU5BUllfQUNLKSB7XG4gICAgICAgICAgICAgICAgLy8gYmluYXJ5IHBhY2tldCdzIGpzb25cbiAgICAgICAgICAgICAgICB0aGlzLnJlY29uc3RydWN0b3IgPSBuZXcgQmluYXJ5UmVjb25zdHJ1Y3RvcihwYWNrZXQpO1xuICAgICAgICAgICAgICAgIC8vIG5vIGF0dGFjaG1lbnRzLCBsYWJlbGVkIGJpbmFyeSBidXQgbm8gYmluYXJ5IGRhdGEgdG8gZm9sbG93XG4gICAgICAgICAgICAgICAgaWYgKHBhY2tldC5hdHRhY2htZW50cyA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBzdXBlci5lbWl0KFwiZGVjb2RlZFwiLCBwYWNrZXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIG5vbi1iaW5hcnkgZnVsbCBwYWNrZXRcbiAgICAgICAgICAgICAgICBzdXBlci5lbWl0KFwiZGVjb2RlZFwiLCBwYWNrZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzX2JpbmFyeV8xLmlzQmluYXJ5KG9iaikgfHwgb2JqLmJhc2U2NCkge1xuICAgICAgICAgICAgLy8gcmF3IGJpbmFyeSBkYXRhXG4gICAgICAgICAgICBpZiAoIXRoaXMucmVjb25zdHJ1Y3Rvcikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImdvdCBiaW5hcnkgZGF0YSB3aGVuIG5vdCByZWNvbnN0cnVjdGluZyBhIHBhY2tldFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhY2tldCA9IHRoaXMucmVjb25zdHJ1Y3Rvci50YWtlQmluYXJ5RGF0YShvYmopO1xuICAgICAgICAgICAgICAgIGlmIChwYWNrZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVjZWl2ZWQgZmluYWwgYnVmZmVyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVjb25zdHJ1Y3RvciA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHN1cGVyLmVtaXQoXCJkZWNvZGVkXCIsIHBhY2tldCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5rbm93biB0eXBlOiBcIiArIG9iaik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogRGVjb2RlIGEgcGFja2V0IFN0cmluZyAoSlNPTiBkYXRhKVxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICAgICAqIEByZXR1cm4ge09iamVjdH0gcGFja2V0XG4gICAgICovXG4gICAgZGVjb2RlU3RyaW5nKHN0cikge1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIC8vIGxvb2sgdXAgdHlwZVxuICAgICAgICBjb25zdCBwID0ge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyKHN0ci5jaGFyQXQoMCkpLFxuICAgICAgICB9O1xuICAgICAgICBpZiAoUGFja2V0VHlwZVtwLnR5cGVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInVua25vd24gcGFja2V0IHR5cGUgXCIgKyBwLnR5cGUpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGxvb2sgdXAgYXR0YWNobWVudHMgaWYgdHlwZSBiaW5hcnlcbiAgICAgICAgaWYgKHAudHlwZSA9PT0gUGFja2V0VHlwZS5CSU5BUllfRVZFTlQgfHxcbiAgICAgICAgICAgIHAudHlwZSA9PT0gUGFja2V0VHlwZS5CSU5BUllfQUNLKSB7XG4gICAgICAgICAgICBjb25zdCBzdGFydCA9IGkgKyAxO1xuICAgICAgICAgICAgd2hpbGUgKHN0ci5jaGFyQXQoKytpKSAhPT0gXCItXCIgJiYgaSAhPSBzdHIubGVuZ3RoKSB7IH1cbiAgICAgICAgICAgIGNvbnN0IGJ1ZiA9IHN0ci5zdWJzdHJpbmcoc3RhcnQsIGkpO1xuICAgICAgICAgICAgaWYgKGJ1ZiAhPSBOdW1iZXIoYnVmKSB8fCBzdHIuY2hhckF0KGkpICE9PSBcIi1cIikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIklsbGVnYWwgYXR0YWNobWVudHNcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwLmF0dGFjaG1lbnRzID0gTnVtYmVyKGJ1Zik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gbG9vayB1cCBuYW1lc3BhY2UgKGlmIGFueSlcbiAgICAgICAgaWYgKFwiL1wiID09PSBzdHIuY2hhckF0KGkgKyAxKSkge1xuICAgICAgICAgICAgY29uc3Qgc3RhcnQgPSBpICsgMTtcbiAgICAgICAgICAgIHdoaWxlICgrK2kpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjID0gc3RyLmNoYXJBdChpKTtcbiAgICAgICAgICAgICAgICBpZiAoXCIsXCIgPT09IGMpXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGlmIChpID09PSBzdHIubGVuZ3RoKVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHAubnNwID0gc3RyLnN1YnN0cmluZyhzdGFydCwgaSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwLm5zcCA9IFwiL1wiO1xuICAgICAgICB9XG4gICAgICAgIC8vIGxvb2sgdXAgaWRcbiAgICAgICAgY29uc3QgbmV4dCA9IHN0ci5jaGFyQXQoaSArIDEpO1xuICAgICAgICBpZiAoXCJcIiAhPT0gbmV4dCAmJiBOdW1iZXIobmV4dCkgPT0gbmV4dCkge1xuICAgICAgICAgICAgY29uc3Qgc3RhcnQgPSBpICsgMTtcbiAgICAgICAgICAgIHdoaWxlICgrK2kpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjID0gc3RyLmNoYXJBdChpKTtcbiAgICAgICAgICAgICAgICBpZiAobnVsbCA9PSBjIHx8IE51bWJlcihjKSAhPSBjKSB7XG4gICAgICAgICAgICAgICAgICAgIC0taTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChpID09PSBzdHIubGVuZ3RoKVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHAuaWQgPSBOdW1iZXIoc3RyLnN1YnN0cmluZyhzdGFydCwgaSArIDEpKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBsb29rIHVwIGpzb24gZGF0YVxuICAgICAgICBpZiAoc3RyLmNoYXJBdCgrK2kpKSB7XG4gICAgICAgICAgICBjb25zdCBwYXlsb2FkID0gdHJ5UGFyc2Uoc3RyLnN1YnN0cihpKSk7XG4gICAgICAgICAgICBpZiAoRGVjb2Rlci5pc1BheWxvYWRWYWxpZChwLnR5cGUsIHBheWxvYWQpKSB7XG4gICAgICAgICAgICAgICAgcC5kYXRhID0gcGF5bG9hZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImludmFsaWQgcGF5bG9hZFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBkZWJ1ZyhcImRlY29kZWQgJXMgYXMgJWpcIiwgc3RyLCBwKTtcbiAgICAgICAgcmV0dXJuIHA7XG4gICAgfVxuICAgIHN0YXRpYyBpc1BheWxvYWRWYWxpZCh0eXBlLCBwYXlsb2FkKSB7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSBQYWNrZXRUeXBlLkNPTk5FQ1Q6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiBwYXlsb2FkID09PSBcIm9iamVjdFwiO1xuICAgICAgICAgICAgY2FzZSBQYWNrZXRUeXBlLkRJU0NPTk5FQ1Q6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBheWxvYWQgPT09IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGNhc2UgUGFja2V0VHlwZS5DT05ORUNUX0VSUk9SOlxuICAgICAgICAgICAgICAgIHJldHVybiB0eXBlb2YgcGF5bG9hZCA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgcGF5bG9hZCA9PT0gXCJvYmplY3RcIjtcbiAgICAgICAgICAgIGNhc2UgUGFja2V0VHlwZS5FVkVOVDpcbiAgICAgICAgICAgIGNhc2UgUGFja2V0VHlwZS5CSU5BUllfRVZFTlQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkocGF5bG9hZCkgJiYgcGF5bG9hZC5sZW5ndGggPiAwO1xuICAgICAgICAgICAgY2FzZSBQYWNrZXRUeXBlLkFDSzpcbiAgICAgICAgICAgIGNhc2UgUGFja2V0VHlwZS5CSU5BUllfQUNLOlxuICAgICAgICAgICAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KHBheWxvYWQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERlYWxsb2NhdGVzIGEgcGFyc2VyJ3MgcmVzb3VyY2VzXG4gICAgICovXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMucmVjb25zdHJ1Y3Rvcikge1xuICAgICAgICAgICAgdGhpcy5yZWNvbnN0cnVjdG9yLmZpbmlzaGVkUmVjb25zdHJ1Y3Rpb24oKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuRGVjb2RlciA9IERlY29kZXI7XG5mdW5jdGlvbiB0cnlQYXJzZShzdHIpIHtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShzdHIpO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuLyoqXG4gKiBBIG1hbmFnZXIgb2YgYSBiaW5hcnkgZXZlbnQncyAnYnVmZmVyIHNlcXVlbmNlJy4gU2hvdWxkXG4gKiBiZSBjb25zdHJ1Y3RlZCB3aGVuZXZlciBhIHBhY2tldCBvZiB0eXBlIEJJTkFSWV9FVkVOVCBpc1xuICogZGVjb2RlZC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcGFja2V0XG4gKiBAcmV0dXJuIHtCaW5hcnlSZWNvbnN0cnVjdG9yfSBpbml0aWFsaXplZCByZWNvbnN0cnVjdG9yXG4gKi9cbmNsYXNzIEJpbmFyeVJlY29uc3RydWN0b3Ige1xuICAgIGNvbnN0cnVjdG9yKHBhY2tldCkge1xuICAgICAgICB0aGlzLnBhY2tldCA9IHBhY2tldDtcbiAgICAgICAgdGhpcy5idWZmZXJzID0gW107XG4gICAgICAgIHRoaXMucmVjb25QYWNrID0gcGFja2V0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBNZXRob2QgdG8gYmUgY2FsbGVkIHdoZW4gYmluYXJ5IGRhdGEgcmVjZWl2ZWQgZnJvbSBjb25uZWN0aW9uXG4gICAgICogYWZ0ZXIgYSBCSU5BUllfRVZFTlQgcGFja2V0LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtCdWZmZXIgfCBBcnJheUJ1ZmZlcn0gYmluRGF0YSAtIHRoZSByYXcgYmluYXJ5IGRhdGEgcmVjZWl2ZWRcbiAgICAgKiBAcmV0dXJuIHtudWxsIHwgT2JqZWN0fSByZXR1cm5zIG51bGwgaWYgbW9yZSBiaW5hcnkgZGF0YSBpcyBleHBlY3RlZCBvclxuICAgICAqICAgYSByZWNvbnN0cnVjdGVkIHBhY2tldCBvYmplY3QgaWYgYWxsIGJ1ZmZlcnMgaGF2ZSBiZWVuIHJlY2VpdmVkLlxuICAgICAqL1xuICAgIHRha2VCaW5hcnlEYXRhKGJpbkRhdGEpIHtcbiAgICAgICAgdGhpcy5idWZmZXJzLnB1c2goYmluRGF0YSk7XG4gICAgICAgIGlmICh0aGlzLmJ1ZmZlcnMubGVuZ3RoID09PSB0aGlzLnJlY29uUGFjay5hdHRhY2htZW50cykge1xuICAgICAgICAgICAgLy8gZG9uZSB3aXRoIGJ1ZmZlciBsaXN0XG4gICAgICAgICAgICBjb25zdCBwYWNrZXQgPSBiaW5hcnlfMS5yZWNvbnN0cnVjdFBhY2tldCh0aGlzLnJlY29uUGFjaywgdGhpcy5idWZmZXJzKTtcbiAgICAgICAgICAgIHRoaXMuZmluaXNoZWRSZWNvbnN0cnVjdGlvbigpO1xuICAgICAgICAgICAgcmV0dXJuIHBhY2tldDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2xlYW5zIHVwIGJpbmFyeSBwYWNrZXQgcmVjb25zdHJ1Y3Rpb24gdmFyaWFibGVzLlxuICAgICAqL1xuICAgIGZpbmlzaGVkUmVjb25zdHJ1Y3Rpb24oKSB7XG4gICAgICAgIHRoaXMucmVjb25QYWNrID0gbnVsbDtcbiAgICAgICAgdGhpcy5idWZmZXJzID0gW107XG4gICAgfVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmhhc0JpbmFyeSA9IGV4cG9ydHMuaXNCaW5hcnkgPSB2b2lkIDA7XG5jb25zdCB3aXRoTmF0aXZlQXJyYXlCdWZmZXIgPSB0eXBlb2YgQXJyYXlCdWZmZXIgPT09IFwiZnVuY3Rpb25cIjtcbmNvbnN0IGlzVmlldyA9IChvYmopID0+IHtcbiAgICByZXR1cm4gdHlwZW9mIEFycmF5QnVmZmVyLmlzVmlldyA9PT0gXCJmdW5jdGlvblwiXG4gICAgICAgID8gQXJyYXlCdWZmZXIuaXNWaWV3KG9iailcbiAgICAgICAgOiBvYmouYnVmZmVyIGluc3RhbmNlb2YgQXJyYXlCdWZmZXI7XG59O1xuY29uc3QgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuY29uc3Qgd2l0aE5hdGl2ZUJsb2IgPSB0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiIHx8XG4gICAgKHR5cGVvZiBCbG9iICE9PSBcInVuZGVmaW5lZFwiICYmXG4gICAgICAgIHRvU3RyaW5nLmNhbGwoQmxvYikgPT09IFwiW29iamVjdCBCbG9iQ29uc3RydWN0b3JdXCIpO1xuY29uc3Qgd2l0aE5hdGl2ZUZpbGUgPSB0eXBlb2YgRmlsZSA9PT0gXCJmdW5jdGlvblwiIHx8XG4gICAgKHR5cGVvZiBGaWxlICE9PSBcInVuZGVmaW5lZFwiICYmXG4gICAgICAgIHRvU3RyaW5nLmNhbGwoRmlsZSkgPT09IFwiW29iamVjdCBGaWxlQ29uc3RydWN0b3JdXCIpO1xuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgb2JqIGlzIGEgQnVmZmVyLCBhbiBBcnJheUJ1ZmZlciwgYSBCbG9iIG9yIGEgRmlsZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBpc0JpbmFyeShvYmopIHtcbiAgICByZXR1cm4gKCh3aXRoTmF0aXZlQXJyYXlCdWZmZXIgJiYgKG9iaiBpbnN0YW5jZW9mIEFycmF5QnVmZmVyIHx8IGlzVmlldyhvYmopKSkgfHxcbiAgICAgICAgKHdpdGhOYXRpdmVCbG9iICYmIG9iaiBpbnN0YW5jZW9mIEJsb2IpIHx8XG4gICAgICAgICh3aXRoTmF0aXZlRmlsZSAmJiBvYmogaW5zdGFuY2VvZiBGaWxlKSk7XG59XG5leHBvcnRzLmlzQmluYXJ5ID0gaXNCaW5hcnk7XG5mdW5jdGlvbiBoYXNCaW5hcnkob2JqLCB0b0pTT04pIHtcbiAgICBpZiAoIW9iaiB8fCB0eXBlb2Ygb2JqICE9PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKEFycmF5LmlzQXJyYXkob2JqKSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgbCA9IG9iai5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChoYXNCaW5hcnkob2JqW2ldKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKGlzQmluYXJ5KG9iaikpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmIChvYmoudG9KU09OICYmXG4gICAgICAgIHR5cGVvZiBvYmoudG9KU09OID09PSBcImZ1bmN0aW9uXCIgJiZcbiAgICAgICAgYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICByZXR1cm4gaGFzQmluYXJ5KG9iai50b0pTT04oKSwgdHJ1ZSk7XG4gICAgfVxuICAgIGZvciAoY29uc3Qga2V5IGluIG9iaikge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSAmJiBoYXNCaW5hcnkob2JqW2tleV0pKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5leHBvcnRzLmhhc0JpbmFyeSA9IGhhc0JpbmFyeTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGFscGhhYmV0ID0gJzAxMjM0NTY3ODlBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6LV8nLnNwbGl0KCcnKVxuICAsIGxlbmd0aCA9IDY0XG4gICwgbWFwID0ge31cbiAgLCBzZWVkID0gMFxuICAsIGkgPSAwXG4gICwgcHJldjtcblxuLyoqXG4gKiBSZXR1cm4gYSBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSBzcGVjaWZpZWQgbnVtYmVyLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBudW0gVGhlIG51bWJlciB0byBjb252ZXJ0LlxuICogQHJldHVybnMge1N0cmluZ30gVGhlIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgbnVtYmVyLlxuICogQGFwaSBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gZW5jb2RlKG51bSkge1xuICB2YXIgZW5jb2RlZCA9ICcnO1xuXG4gIGRvIHtcbiAgICBlbmNvZGVkID0gYWxwaGFiZXRbbnVtICUgbGVuZ3RoXSArIGVuY29kZWQ7XG4gICAgbnVtID0gTWF0aC5mbG9vcihudW0gLyBsZW5ndGgpO1xuICB9IHdoaWxlIChudW0gPiAwKTtcblxuICByZXR1cm4gZW5jb2RlZDtcbn1cblxuLyoqXG4gKiBSZXR1cm4gdGhlIGludGVnZXIgdmFsdWUgc3BlY2lmaWVkIGJ5IHRoZSBnaXZlbiBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0ciBUaGUgc3RyaW5nIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBUaGUgaW50ZWdlciB2YWx1ZSByZXByZXNlbnRlZCBieSB0aGUgc3RyaW5nLlxuICogQGFwaSBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gZGVjb2RlKHN0cikge1xuICB2YXIgZGVjb2RlZCA9IDA7XG5cbiAgZm9yIChpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgIGRlY29kZWQgPSBkZWNvZGVkICogbGVuZ3RoICsgbWFwW3N0ci5jaGFyQXQoaSldO1xuICB9XG5cbiAgcmV0dXJuIGRlY29kZWQ7XG59XG5cbi8qKlxuICogWWVhc3Q6IEEgdGlueSBncm93aW5nIGlkIGdlbmVyYXRvci5cbiAqXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBBIHVuaXF1ZSBpZC5cbiAqIEBhcGkgcHVibGljXG4gKi9cbmZ1bmN0aW9uIHllYXN0KCkge1xuICB2YXIgbm93ID0gZW5jb2RlKCtuZXcgRGF0ZSgpKTtcblxuICBpZiAobm93ICE9PSBwcmV2KSByZXR1cm4gc2VlZCA9IDAsIHByZXYgPSBub3c7XG4gIHJldHVybiBub3cgKycuJysgZW5jb2RlKHNlZWQrKyk7XG59XG5cbi8vXG4vLyBNYXAgZWFjaCBjaGFyYWN0ZXIgdG8gaXRzIGluZGV4LlxuLy9cbmZvciAoOyBpIDwgbGVuZ3RoOyBpKyspIG1hcFthbHBoYWJldFtpXV0gPSBpO1xuXG4vL1xuLy8gRXhwb3NlIHRoZSBgeWVhc3RgLCBgZW5jb2RlYCBhbmQgYGRlY29kZWAgZnVuY3Rpb25zLlxuLy9cbnllYXN0LmVuY29kZSA9IGVuY29kZTtcbnllYXN0LmRlY29kZSA9IGRlY29kZTtcbm1vZHVsZS5leHBvcnRzID0geWVhc3Q7XG4iLCJpbXBvcnQgeyAkIH0gZnJvbSAnLi9jb3JlL2xpYi9kb20nO1xuaW1wb3J0IHsgcGFyZW50cywgZmFkZU91dCB9IGZyb20gJy4vY29yZS9saWIvZG9tJztcbmltcG9ydCB7IHBsYXllclJlZiB9IGZyb20gJy4vZGF0YSdcblxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdFVJKHNvY2tldCkge1xuICAvLyBzdGF0dXNcbiAgbGV0IGdhbWVDcmVhdGVkLCBqb2luZWQsIG5hbWVDb25maXJtZWQsIGdhbWVTdGFydGVkO1xuICAvLyBxdWVyeSBFbGVtZW50c1xuICBsZXQgY3JlYXRlR2FtZUJ0biA9ICQoJyNjcmVhdGUtZ2FtZScpOyAgLy8gIGJpbmRFdmVudCA6IGdhbWVDcmVhdGVkXG4gIGxldCBzaG93Sm9pbkdhbWVQcm9tcHRCdG4gPSAkKCcjc2hvdy1qb2luLWdhbWUtcHJvbXB0Jyk7IC8vICBiaW5kRXZlbnRcbiAgbGV0IGNvbmZpcm1Kb2luR2FtZUJ0biA9ICQoJyNjb25maXJtLWpvaW4tZ2FtZScpOyAvLyAgYmluZEV2ZW50OiBqb2luZWRcbiAgbGV0IHJvb21Db2RlSW5wdXQgPSAkKCcjcm9vbS1jb2RlLWlucHV0Jyk7XG4gIGxldCByb29tQ29kZURpc3BsYXkgPSAkKCcjcm9vbS1jb2RlLWRpc3BsYXknKTtcbiAgbGV0IG5hbWVJbnB1dCA9ICQoJyNuYW1lLWlucHV0Jyk7XG4gIGxldCBuYW1lQ29uZmlybSA9ICQoJyNuYW1lLWNvbmZpcm0nKTsgLy8gIGJpbmRFdmVudCBuYW1lQ29uZmlybWVkXG4gIGxldCBsZWF2ZVdhaXRpbmdCdG4gPSAkKCcjbGVhdmUtd2FpdGluZycpOyAvLyAgYmluZEV2ZW50XG4gIGxldCBsZWF2ZUdhbWVTdGFydEFsZXJ0ID0gJCgnI2xlYXZlLWdhbWUtc3RhcnQtYWxlcnQnKTsgLy8gIGJpbmRFdmVudFxuICBsZXQgZ2FtZVN0YXJ0ID0gJCgnI2dhbWUtc3RhcnQnKTsgLy8gIGJpbmRFdmVudFxuXG4gIC8vIOW7uueriyBpbmlVSSBQcm9taXNlIFxuICBsZXQgaW5pdFRyaWdnZXI7XG4gIGxldCBpbml0VUlQcm9taXNlID0gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XG4gICAgaW5pdFRyaWdnZXIgPSByZXM7XG4gIH0pXG5cbiAgLy8uLi7mloflrZdcbiAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXJvbGU9XCIuLi5cIl0nKS5mb3JFYWNoKGVsZSA9PiB7XG4gICAgICBpZiAoZWxlLmlubmVySFRNTC5sZW5ndGggPCAzKSB7XG4gICAgICAgIGVsZS5pbm5lckhUTUwgKz0gJy4nXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgZWxlLmlubmVySFRNTCA9ICcnXG4gICAgICB9XG4gICAgfSlcbiAgfSwgNTAwKVxuXG4gIC8v57aB5a6a6Zec6ZaJcG9wb3V0XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tjbG9zZS10aGlzLXBvcG91dF0nKS5mb3JFYWNoKGVsZSA9PiB7XG4gICAgbGV0IHBhcmVudFBvcG91dHMgPSBwYXJlbnRzKGVsZSwgJy5wb3BvdXQnKTtcbiAgICBlbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0b2dnbGVQb3BvdXQocGFyZW50UG9wb3V0c1swXS5pZCwgZmFsc2UpO1xuICAgIH0pXG4gIH0pXG5cblxuICAvLyDlrqPlkYogZmxhZywg55uu55qE5piv55So5L6G5Yik5a6a5Yiw5bqVbmFtZVByb21wdCDmmK/lvp7lk6rkuIDlgIvnrqHpgZPljrtjYWxs5Ye65L6G55qEXG4gIGxldCBmbGFnO1xuXG5cbiAgLy/ntoHlrprnorroqo3pgIHlh7rmjInpiJXnmoTpu57mk4rkuovku7ZcbiAgbmFtZUNvbmZpcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYgKG5hbWVDb25maXJtZWQgfHwgZ2FtZUNyZWF0ZWQgfHwgam9pbmVkKSByZXR1cm47XG4gICAgbGV0IG5hbWUgPSBuYW1lSW5wdXQudmFsdWUgPyBuYW1lSW5wdXQudmFsdWUgOiBwbGF5ZXJSZWYubmFtZTtcbiAgICBjb25maXJtTmFtZShzb2NrZXQsIG5hbWUpO1xuICAgIGlmIChmbGFnID09PSAnb25Kb2luJykge1xuICAgICAgdG9nZ2xlUG9wb3V0KCdqb2luLWdhbWUtcHJvbXB0JywgdHJ1ZSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGZsYWcgPT09ICdvbkNyZWF0ZScpIHtcbiAgICAgIGlmICghZ2FtZUNyZWF0ZWQpIHtcbiAgICAgICAgbmV3R2FtZShzb2NrZXQpO1xuICAgICAgICBnYW1lQ3JlYXRlZCA9IHRydWU7XG4gICAgICAgIGpvaW5lZCA9IHRydWU7XG4gICAgICAgIG5hbWVDb25maXJtZWQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cbiAgfSlcblxuICAvL+e2geWumuaMiemIlem7nuaTiuW+jOmWi+WVn25hbWUtaW5wdXQtcHJvbXB0ID0+IGpvaW5HYW1lIHByb21wdFxuICBzaG93Sm9pbkdhbWVQcm9tcHRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZmxhZyA9ICdvbkpvaW4nO1xuICAgIHRvZ2dsZVBvcG91dCgnbmFtZS1pbnB1dC1wcm9tcHQnLCB0cnVlKTtcbiAgfSk7XG5cbiAgLy/ntoHlrprmjInpiJXpu57mk4rlvozpgIHlh7rmg7Plj4PliqDnmoTmiL/plpPnorznmoTkuovku7ZcbiAgY29uZmlybUpvaW5HYW1lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmICgham9pbmVkKSB7XG4gICAgICBsZXQgcm9vbUNvZGUgPSByb29tQ29kZUlucHV0LnZhbHVlO1xuICAgICAgY29uZmlybUpvaW5HYW1lKHNvY2tldCwgcm9vbUNvZGUpO1xuICAgICAgam9pbmVkID0gdHJ1ZTtcbiAgICAgIGdhbWVDcmVhdGVkID0gdHJ1ZTtcbiAgICAgIG5hbWVDb25maXJtZWQgPSB0cnVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH0pXG5cbiAgLy/ntoHlrprmjInpiJXpu57mk4rlvozplovllZ9uYW1lLWlucHV0LXByb21wdCA9PiBuZXdHYW1lIHByb21wdFxuICBjcmVhdGVHYW1lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGZsYWcgPSAnb25DcmVhdGUnO1xuICAgIHRvZ2dsZVBvcG91dCgnbmFtZS1pbnB1dC1wcm9tcHQnLCB0cnVlKTtcbiAgfSk7XG5cbiAgLy/ntoHlrprnrKzkuIDpm6LplovmjInpiJVcbiAgbGVhdmVXYWl0aW5nQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHNvY2tldC5lbWl0KCdsZWF2ZVdhaXRpbmcnKTtcbiAgICBnYW1lQ3JlYXRlZCA9IGZhbHNlO1xuICAgIGpvaW5lZCA9IGZhbHNlO1xuICAgIG5hbWVDb25maXJtZWQgPSBmYWxzZTtcbiAgICB0b2dnbGVQb3BvdXQoJ3Jvb20tY29kZS1kaXNwbGF5LXBvcG91dCcsIGZhbHNlKTtcbiAgfSlcbiAgLy/ntoHlrprnrKzkuozpm6LplovmjInpiJVcbiAgbGVhdmVHYW1lU3RhcnRBbGVydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBzb2NrZXQuZW1pdCgnbGVhdmVTdGFydGluZ0dhbWUnLCBwbGF5ZXJSZWYpO1xuICAgIHRvZ2dsZVBvcG91dCgnZ2FtZS1zdGFydC1hbGVydCcsIGZhbHNlKTtcbiAgfSlcblxuICBnYW1lU3RhcnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYgKCFnYW1lU3RhcnRlZCkge1xuICAgICAgc29ja2V0LmVtaXQoJ3N0YXJ0TWF0Y2gnKTtcbiAgICAgIGdhbWVTdGFydGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gIH0pXG5cbiAgLy/ntoHlrprnlbZzZXJ2ZXLlgrPkvoYnZ2VuUm9vbUNvZGUn6KiK6Jmf5b6M77yMdWkg5oeJ55Si55Sf55qE5bCN5oeJ6KGM54K6XG4gIHNvY2tldC5vbignZ2VuUm9vbUNvZGUnLCAoZGF0YSkgPT4ge1xuICAgIHJvb21Db2RlRGlzcGxheS5pbm5lckhUTUwgPSBkYXRhO1xuICB9KVxuXG4gIC8v57aB5a6a55W2c2VydmVy5YKz5L6GJ3BsYXllckpvaW5lZCfoqIromZ/lvozvvIx1aSDmh4nnlKLnlJ/nmoTlsI3mh4nooYzngrpcbiAgc29ja2V0Lm9uKCdwbGF5ZXJKb2luZWQnLCAoZGF0YSkgPT4ge1xuICAgIGlmIChkYXRhLnBsYXllck51bWJlciA9PT0gMikge1xuICAgICAgaWYgKHBsYXllclJlZi5udW1iZXIgPT0gMSkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1yb2xlPVwib3Bwb25lbnRcIl0nKS5mb3JFYWNoKGVsZSA9PiB7XG4gICAgICAgICAgZWxlLmlubmVySFRNTCA9IGBZT1VSIE9QUE9ORU5UICR7ZGF0YS5wbGF5ZXJOYW1lfSBTSE9XUyBVUCFgXG4gICAgICAgIH0pO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1yb2xlPVwicGxheWVyMlwiXScpLmZvckVhY2goZWxlID0+IHtcbiAgICAgICAgICBlbGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHBsYXllclJlZi5udW1iZXIgPT0gMikge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1yb2xlPVwib3Bwb25lbnRcIl0nKS5mb3JFYWNoKGVsZSA9PiB7XG4gICAgICAgICAgZWxlLmlubmVySFRNTCA9IGBXQUlUSU5HIEZPUiBUSEUgUk9PTSBIT1NUPGJyPjxicj4ke2RhdGEuaG9zdE5hbWV9PGJyPjxicj5UTyBBQ0NFUFQgWU9VUiBDSEFMTEVOR0U8c3BhbiBkYXRhLXJvbGU9XCIuLi5cIj48L3NwYW4+YFxuICAgICAgICB9KTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtcm9sZT1cInBsYXllcjFcIl0nKS5mb3JFYWNoKGVsZSA9PiB7XG4gICAgICAgICAgZWxlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICB0b2dnbGVQb3BvdXQoJ3Jvb20tY29kZS1kaXNwbGF5LXBvcG91dCcsIGZhbHNlKTtcbiAgICAgIHRvZ2dsZVBvcG91dCgnam9pbi1nYW1lLXByb21wdCcsIGZhbHNlKTtcbiAgICAgIHRvZ2dsZVBvcG91dCgnZ2FtZS1zdGFydC1hbGVydCcsIHRydWUpO1xuICAgIH1cbiAgfSlcblxuICBzb2NrZXQub24oJ2hvc3QtbGVhdmUnLCAoZGF0YSkgPT4ge1xuICAgIHRvZ2dsZVBvcG91dCgnZ2FtZS1zdGFydC1hbGVydCcsIGZhbHNlKTtcbiAgICB0b2dnbGVQb3BvdXQoJ2xlYXZlLWFsZXJ0JywgdHJ1ZSk7XG4gICAgZ2FtZVN0YXJ0ZWQgPSBmYWxzZTtcbiAgICBqb2luZWQgPSBmYWxzZTtcbiAgICBuYW1lQ29uZmlybWVkID0gZmFsc2U7XG4gICAgZ2FtZUNyZWF0ZWQgPSBmYWxzZTtcblxuICAgICQoJ1tkYXRhLXJvbGU9XCJsZWF2ZS1tc2dcIl0nKS5pbm5lckhUTUwgPSBgSE9TVCAke2RhdGEuaG9zdH0gTEVGVCBBTkQgU0hVVERPV04gVEhFIFJPT00uYFxuICB9KVxuXG4gIHNvY2tldC5vbignY2hhbGxlbmdlci1sZWF2ZScsIChkYXRhKSA9PiB7XG4gICAgdG9nZ2xlUG9wb3V0KCdnYW1lLXN0YXJ0LWFsZXJ0JywgZmFsc2UpO1xuICAgIHRvZ2dsZVBvcG91dCgnbGVhdmUtYWxlcnQnLCB0cnVlKTtcbiAgICB0b2dnbGVQb3BvdXQoJ3Jvb20tY29kZS1kaXNwbGF5LXBvcG91dCcsIHRydWUpO1xuICAgIGdhbWVTdGFydGVkID0gZmFsc2U7XG4gICAgam9pbmVkID0gZmFsc2U7XG4gICAgbmFtZUNvbmZpcm1lZCA9IGZhbHNlO1xuICAgIGdhbWVDcmVhdGVkID0gZmFsc2U7XG5cbiAgICAkKCdbZGF0YS1yb2xlPVwibGVhdmUtbXNnXCJdJykuaW5uZXJIVE1MID0gYENIQUxMRU5HRVIgJHtkYXRhLmNoYWxsZW5nZXJ9IExFRlQgVEhJUyBNQVRDSC5gXG4gIH0pXG5cbiAgc29ja2V0Lm9uKCdsZWF2ZScsICgpID0+IHtcbiAgICBnYW1lU3RhcnRlZCA9IGZhbHNlO1xuICAgIGpvaW5lZCA9IGZhbHNlO1xuICAgIG5hbWVDb25maXJtZWQgPSBmYWxzZTtcbiAgICBnYW1lQ3JlYXRlZCA9IGZhbHNlO1xuICB9KVxuXG4gIC8v57aB5a6a55W2c2VydmVy5YKz5L6GJ2dhbWVJbml0J+ioiuiZn+W+jO+8jHVpIOaHieeUoueUn+eahOWwjeaHieihjOeCulxuICBzb2NrZXQub24oJ2dhbWVJbml0JywgKCkgPT4ge1xuICAgIHRvZ2dsZVBvcG91dCgnZ2FtZS1zdGFydC1hbGVydCcsIGZhbHNlKTtcbiAgfSlcblxuXG4gIC8vIOinuOeZvCBwcm9taXNlIGZ1bGxmaWxs5qmf5Yi2XG4gIGluaXRUcmlnZ2VyKCk7XG5cbiAgLy8g5Zue5YKzIGZ1bGxmaWxs5b6M55qEcHJvbWlzZVxuICByZXR1cm4gaW5pdFVJUHJvbWlzZTtcbn1cblxuLyoqXG4gKiDplovllZ8gcG9wb3V0XG4gKlxuICogQHBhcmFtIHsqfSBpZFxuICogQHBhcmFtIHsqfSBzdGF0dXNcbiAqL1xuZnVuY3Rpb24gdG9nZ2xlUG9wb3V0KGlkLCBzdGF0dXMpIHtcbiAgbGV0IHBvcG91dCA9ICQoYC5wb3BvdXQjJHtpZH1gKTtcbiAgaWYgKHN0YXR1cykge1xuICAgIHBvcG91dC5jbGFzc0xpc3QuYWRkKCdwb3BvdXQtLXNob3cnKTtcbiAgfVxuICBlbHNlIHtcbiAgICBwb3BvdXQuY2xhc3NMaXN0LnJlbW92ZSgncG9wb3V0LS1zaG93Jyk7XG4gIH1cbn1cbi8qKlxuICog6Zqx6JeP6LW35aeL55Wr6Z2iXG4gKlxuICovXG5mdW5jdGlvbiBoaWRlSW5pdGlhbFNjcmVlbigpIHtcbiAgbGV0IGluaXRpYWxTY3JlZW4gPSAkKCcjaW5pdGlhbC1zY3JlZW4nKTtcbiAgaW5pdGlhbFNjcmVlbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufVxuLyoqXG4gKiAg6ZaL6Zec5YW35pyJaGlkZS1vbi1hY3Rpb27lsazmgKfnmoR1aSBlbGVtZW50LFxuICpcbiAqIEBwYXJhbSB7Kn0gc3RhdHVzXG4gKi9cbmZ1bmN0aW9uIHRvZ2dsZUhpZGVPbkFjdGlvbihzdGF0dXMpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2hpZGUtb24tYWN0aW9uXScpLmZvckVhY2goZWxlID0+IHtcbiAgICBlbGUuc2V0QXR0cmlidXRlKCdoaWRlLW9uLWFjdGlvbicsIHN0YXR1cyA/ICcnIDogJ2hpZGUnKTtcbiAgfSlcbn1cbi8qKlxuICog6ZaL6Zec5YW35pyJc2hvdy1vbi1mdWxs5bGs5oCn55qEdWkgZWxlbWVudCxcbiAqXG4gKiBAcGFyYW0geyp9IHN0YXR1c1xuICovXG5mdW5jdGlvbiB0b2dnbGVTaG93T25BY3Rpb24oc3RhdHVzKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tzaG93LW9uLWFjdGlvbl0nKS5mb3JFYWNoKGVsZSA9PiB7XG4gICAgZWxlLnNldEF0dHJpYnV0ZSgnc2hvdy1vbi1hY3Rpb24nLCBzdGF0dXMgPyAnJyA6ICdoaWRlJyk7XG4gIH0pXG59XG5cblxuLyoqXG4gKiDlu7rnq4vmlrDpgYrmiLJcbiAqXG4gKiBAcGFyYW0geyp9IHNvY2tldFxuICovXG5mdW5jdGlvbiBuZXdHYW1lKHNvY2tldCkge1xuICBwbGF5ZXJSZWYubnVtYmVyID0gMTtcbiAgdG9nZ2xlUG9wb3V0KCdyb29tLWNvZGUtZGlzcGxheS1wb3BvdXQnLCB0cnVlKTtcbiAgc29ja2V0LmVtaXQoJ25ld0dhbWUnKTtcbn1cbi8qKlxuICog5ZCRc2VydmVy55m85Ye656K66KqN5Y+D5Yqg6YGK5oiy55qE5L+h6JmfXG4gKlxuICogQHBhcmFtIHsqfSBzb2NrZXRcbiAqIEBwYXJhbSB7Kn0gcm9vbUNvZGVcbiAqL1xuZnVuY3Rpb24gY29uZmlybUpvaW5HYW1lKHNvY2tldCwgcm9vbUNvZGUpIHtcbiAgcGxheWVyUmVmLm51bWJlciA9IDI7XG4gIHNvY2tldC5lbWl0KCdqb2luR2FtZScsIHJvb21Db2RlKTtcbn1cbi8qKlxuICogXG4gKiDnorroqo3ovLjlhaXnmoTmmrHnqLHlvozvvIzmiorpgYrmiLLlhafmiYDmnIlkYXRhLXJvbGU9XCJuYW1lXCIg55qEIGVsZW1lbnQsIOWFp+WuuemDveaPm+aIkOi8uOWFpeeahG5hbWUsIOS4puWQjOaZguWQkXNlcnZlcueZvOmAgSduYW1lQ29uZmlybSfnmoToqIromZ9cbiAqIOacgOW+jOmXnOmWiW5hbWUtaW5wdXQtcHJvbXB0XG4gKiBAcGFyYW0geyp9IHNvY2tldFxuICogQHBhcmFtIHsqfSBuYW1lXG4gKiBAcGFyYW0geyp9IGNiXG4gKi9cbmZ1bmN0aW9uIGNvbmZpcm1OYW1lKHNvY2tldCwgbmFtZSwgY2IpIHtcbiAgcGxheWVyUmVmLm5hbWUgPSBuYW1lO1xuICBzb2NrZXQuZW1pdCgnbmFtZUNvbmZpcm0nLCBuYW1lKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgW2RhdGEtcm9sZT1cIm5hbWVcIl1gKS5mb3JFYWNoKChvLCBpKSA9PiB7XG4gICAgby5pbm5lckhUTUwgPSBuYW1lO1xuICB9KVxuICB0b2dnbGVQb3BvdXQoJ25hbWUtaW5wdXQtcHJvbXB0JywgZmFsc2UpO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBzdGFydENvdW50aW5nKGNiKSB7XG4gIGxldCBnYyA9ICQoJyNnYW1lLXN0YXJ0LWNvdW50aW5nJyk7XG4gIGdjLmNsYXNzTGlzdC5hZGQoJ2dhbWUtc3RhcnQtY291bnRpbmctLXNob3cnKTtcbiAgbGV0IG51bWJlciA9IGdjLnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLXN0YXJ0LWNvdW50aW5nX19udW1iZXInKTtcbiAgbnVtYmVyLmlubmVySFRNTCA9IDM7XG4gIGxldCB0aW1lSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgaWYgKHBhcnNlSW50KG51bWJlci5pbm5lckhUTUwpID4gMCkge1xuICAgICAgbnVtYmVyLmlubmVySFRNTCA9IHBhcnNlSW50KG51bWJlci5pbm5lckhUTUwpIC0gMTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBjbGVhckludGVydmFsKHRpbWVJbnRlcnZhbCk7XG4gICAgICBmYWRlT3V0KGdjLCAxMDAwLCAoKSA9PiB7XG4gICAgICAgIGdjLmNsYXNzTGlzdC5yZW1vdmUoJ2dhbWUtc3RhcnQtY291bnRpbmctLXNob3cnKTtcbiAgICAgIH0pXG4gICAgICBjYigpO1xuICAgIH1cbiAgfSwgMTAwMClcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBpbml0VUksIHN0YXJ0Q291bnRpbmcgfSBmcm9tICcuL3VpJztcbmltcG9ydCB7IGluaXRTcGxhc2ggfSBmcm9tICcuL2NvcmUvc3BsYXNoJztcbmltcG9ydCB7IGdhbWVCdWlsZGVyIH0gZnJvbSAnLi9jb3JlL2dhbWUnO1xuXG5cbmNvbnN0IHNvY2tldCA9IHJlcXVpcmUoJ3NvY2tldC5pby1jbGllbnQnKSgnaHR0cDovL2xvY2FsaG9zdDozMDAwJyk7XG5cbmxldCBzcGxhc2hTd2l0Y2hlcjtcbmxldCBzcGxhc2hQcm9taXNlID0gaW5pdFNwbGFzaCgpO1xuc3BsYXNoUHJvbWlzZS50aGVuKChzd2l0Y2hlcikgPT4ge1xuICBzcGxhc2hTd2l0Y2hlciA9IHN3aXRjaGVyO1xufSlcblxubGV0IHVpSW5pdFByb21pc2UgPSBpbml0VUkoc29ja2V0KTtcbmxldCBnYW1lID0gZ2FtZUJ1aWxkZXIoKTtcbmxldCBnYW1lQ29udG9sbGVyO1xuXG51aUluaXRQcm9taXNlLnRoZW4oKCkgPT4ge1xuICBnYW1lLnRyaWdnZXIoKTtcbn0pXG5cbmdhbWUucHJvbWlzZS50aGVuKChpbnN0YW5jZSkgPT4ge1xuICBnYW1lQ29udG9sbGVyID0gaW5zdGFuY2U7XG4gIHdpbmRvdy5nbyA9ICgpID0+IHtcbiAgICBnYW1lQ29udG9sbGVyLnN1cnJvdW5kaW5nLmNsYXNzTGlzdC5hZGQoJ3Byb21vdGVkJyk7XG4gICAgbGV0IGdhbWVSZWFkeVByb21pc2UgPSBnYW1lQ29udG9sbGVyLmRyYXdHYW1lKCk7XG4gICAgZ2FtZVJlYWR5UHJvbWlzZS50aGVuKCgpID0+IHtcbiAgICAgIHNwbGFzaFN3aXRjaGVyKGZhbHNlKTtcbiAgICB9KVxuICB9XG5cbn0pXG5cbnNvY2tldC5vbignZ2FtZUluaXQnLCAoKSA9PiB7XG4gIHN0YXJ0Q291bnRpbmcoKCkgPT4ge1xuICAgIGdhbWVDb250b2xsZXIuc3Vycm91bmRpbmcuY2xhc3NMaXN0LmFkZCgncHJvbW90ZWQnKTtcbiAgICBsZXQgZ2FtZVJlYWR5UHJvbWlzZSA9IGdhbWVDb250b2xsZXIuZHJhd0dhbWUoKTtcbiAgICBnYW1lUmVhZHlQcm9taXNlLnRoZW4oKCkgPT4ge1xuICAgICAgc3BsYXNoU3dpdGNoZXIoZmFsc2UpO1xuICAgIH0pXG4gIH0pXG59KVxuXG5zb2NrZXQub24oJ2hvc3QtbGVhdmUnLCAoKSA9PiB7XG4gIGdhbWVDb250b2xsZXIuY3ZzLmNsYXNzTGlzdC5yZW1vdmUoJ3Byb21vdGVkJyk7XG59KVxuXG5zb2NrZXQub24oJ2NoYWxsZW5nZXItbGVhdmUnLCAoKSA9PiB7XG4gIGdhbWVDb250b2xsZXIuY3ZzLmNsYXNzTGlzdC5yZW1vdmUoJ3Byb21vdGVkJyk7XG59KVxuXG5zb2NrZXQub24oJ2xlYXZlJywgKCkgPT4ge1xuICBnYW1lQ29udG9sbGVyLmN2cy5jbGFzc0xpc3QucmVtb3ZlKCdwcm9tb3RlZCcpO1xufSlcblxuc29ja2V0Lm9uKCd0b29NYW55UGxheWVycycsICgpID0+IHtcbiAgYWxlcnQoJ1Jvb20gSXMgRnVsbCBOb3cnKTtcbn0pXG5cbnNvY2tldC5vbigndW5rbm93bkNvZGUnLCAoKSA9PiB7XG4gIGFsZXJ0KCdJbmNvcnJlY3QgUm9vbSBDb2RlJyk7XG59KVxuXG5zb2NrZXQub24oJ2hvc3RDYW50QmVHdWVzdCcsICgpID0+IHtcbiAgYWxlcnQoXCJZb3UgQ2FuJ3QgSm9pbiBUaGUgR2FtZSBZb3UgQXJlIEhvc3RpbmdcIik7XG59KVxuXG5cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=