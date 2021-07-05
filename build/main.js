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
        playerShowCase.id = "player".concat(playerId);
        var innerHTML = "\n        <div class=\"player-showcase__name\">".concat(playerName, "</div>\n        <div class=\"player-showcase__score\">\n          0000   \n        </div>\n      ");
        playerShowCase.innerHTML = innerHTML;
        return playerShowCase;
      };

      for (var i = 0; i < _data__WEBPACK_IMPORTED_MODULE_3__.playersData.length; i++) {
        topBar.append(genPlayerShowcase(_data__WEBPACK_IMPORTED_MODULE_3__.playersData[i].name, _data__WEBPACK_IMPORTED_MODULE_3__.playersData[i].id, 5));
      }

      var scoreboards = {
        update: function update() {
          for (var _i3 = 0; _i3 < _data__WEBPACK_IMPORTED_MODULE_3__.playersData.length; _i3++) {
            scoreboardsLayer.querySelector("#player".concat(_i3)).querySelector('.player-showcase__name').innerHTML = _data__WEBPACK_IMPORTED_MODULE_3__.playersData[_i3].name;
            scoreboardsLayer.querySelector("#player".concat(_i3)).querySelector('.player-showcase__score').innerHTML = (0,_lib_function__WEBPACK_IMPORTED_MODULE_5__.padString)(_data__WEBPACK_IMPORTED_MODULE_3__.playersData[_i3].score, 4);
          }
        },
        ready: function ready() {
          scoreboardsLayer.classList.add('scoreboards--ready');
        }
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
    }
  }]);

  return Engine;
}(_lib_base__WEBPACK_IMPORTED_MODULE_0__.Canvas2DFxBase);
function gameBuilder() {
  var game = (0,_lib_base__WEBPACK_IMPORTED_MODULE_0__.boot)(Engine, DEFAULT, {}, document.body);
  game.promise.then(function (instance) {
    game.controller = instance;
  });
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
/* harmony export */   "calcWaypoints": function() { return /* binding */ calcWaypoints; },
/* harmony export */   "padString": function() { return /* binding */ padString; }
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
function padString(targetStr, length) {
  var padString = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '0';
  var str = targetStr.toString();

  while (str.length < length) {
    str = padString + str;
  }

  return str;
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
  color: null,
  isStuck: true
};
var playerRef = {
  name: '???',
  number: 0
};

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "game": function() { return /* binding */ game; }
/* harmony export */ });
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
var game = (0,_core_game__WEBPACK_IMPORTED_MODULE_2__.gameBuilder)(); // 上線後要移除 start

game.promise.then(function () {
  window.go = function () {
    game.controller.surrounding.classList.add('promoted');
    var gameReadyPromise = game.controller.drawGame();
    gameReadyPromise.then(function () {
      splashSwitcher(false);
    });
  };
}); // 上線後要移除 end

uiInitPromise.then(function () {
  game.trigger();
});
socket.on('gameInit', function () {
  (0,_ui__WEBPACK_IMPORTED_MODULE_0__.startCounting)(function () {
    game.controller.surrounding.classList.add('promoted');
    game.controller.scoreboards.update();
    var gameReadyPromise = game.controller.drawGame();
    gameReadyPromise.then(function () {
      splashSwitcher(false);
    });
  });
});
socket.on('host-leave', function () {
  game.controller.surrounding.classList.remove('promoted');
});
socket.on('challenger-leave', function () {
  game.controller.surrounding.classList.remove('promoted');
});
socket.on('leave', function () {
  game.controller.surrounding.classList.remove('promoted');
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
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "./index.js");




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
      _data__WEBPACK_IMPORTED_MODULE_1__.playersData[0].name = data.hostName;
      _data__WEBPACK_IMPORTED_MODULE_1__.playersData[1].name = data.playerName;
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

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scss/main.scss");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vY29yZS9nYW1lLmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9jb3JlL2xpYi9hbmltYXRpb24uanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL2NvcmUvbGliL2Jhc2UuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL2NvcmUvbGliL2RvbS5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vY29yZS9saWIvZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL2NvcmUvbGliL3NoYXBlLmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9jb3JlL2xpYi91dGlsLmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9jb3JlL3NwbGFzaC5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vZGF0YS5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9iYWNrbzIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9iYXNlNjQtYXJyYXlidWZmZXIvbGliL2Jhc2U2NC1hcnJheWJ1ZmZlci5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL2NvbXBvbmVudC1lbWl0dGVyL2luZGV4LmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvZGVidWcvbm9kZV9tb2R1bGVzL21zL2luZGV4LmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvZGVidWcvc3JjL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9kZWJ1Zy9zcmMvY29tbW9uLmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9saWIvZ2xvYmFsVGhpcy5icm93c2VyLmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2xpYi9zb2NrZXQuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2xpYi90cmFuc3BvcnQuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2xpYi90cmFuc3BvcnRzL2luZGV4LmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9saWIvdHJhbnNwb3J0cy9wb2xsaW5nLWpzb25wLmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9saWIvdHJhbnNwb3J0cy9wb2xsaW5nLXhoci5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvbGliL3RyYW5zcG9ydHMvcG9sbGluZy5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvbGliL3RyYW5zcG9ydHMvd2Vic29ja2V0LWNvbnN0cnVjdG9yLmJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2xpYi90cmFuc3BvcnRzL3dlYnNvY2tldC5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvbGliL3V0aWwuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2xpYi94bWxodHRwcmVxdWVzdC5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1wYXJzZXIvbGliL2NvbW1vbnMuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tcGFyc2VyL2xpYi9kZWNvZGVQYWNrZXQuYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1wYXJzZXIvbGliL2VuY29kZVBhY2tldC5icm93c2VyLmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLXBhcnNlci9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9oYXMtY29ycy9pbmRleC5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL21lcnNlbm5lLXR3aXN0ZXIvc3JjL21lcnNlbm5lLXR3aXN0ZXIuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9wYXJzZXFzL2luZGV4LmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvcGFyc2V1cmkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uLi9zcmMvcGFyc2UtcGF0aC5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4uL3NyYy9wYXRoMmQtcG9seWZpbGwuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tY2xpZW50L2J1aWxkL2luZGV4LmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLWNsaWVudC9idWlsZC9tYW5hZ2VyLmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLWNsaWVudC9idWlsZC9vbi5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1jbGllbnQvYnVpbGQvc29ja2V0LmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLWNsaWVudC9idWlsZC90eXBlZC1ldmVudHMuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tY2xpZW50L2J1aWxkL3VybC5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1wYXJzZXIvZGlzdC9iaW5hcnkuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tcGFyc2VyL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tcGFyc2VyL2Rpc3QvaXMtYmluYXJ5LmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMveWVhc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL3VpLmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9zcmMvc2Nzcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbIkRFRkFVTFQiLCJiZ0NvbG9yIiwiY291cnRDb2xvciIsImNvdXJ0QXNwZWN0UmF0aW8iLCJFbmdpbmUiLCJlbGUiLCJkZWZhdWx0Q29uZmlnIiwiY29uZmlnIiwicGl4ZWxCYXNlIiwiaW5pdCIsImZwcyIsImNvdXJ0T2Zmc2V0IiwiY291cnRPZmZzZXRNb2JpbGUiLCJnYW1lU3RhdHVzIiwicGF1c2UiLCJwbGF5ZXJzVGhpY2tuZXNzIiwiY3VydGFpbiIsImdlbkN1cnRhaW4iLCJjb3VydCIsImdlbkNvdXJ0Iiwic3RhclNreSIsImdlblN0YXJTa3kiLCJwbGF5ZXJzIiwiZ2VuUGxheWVycyIsImJhbGwiLCJnZW5CYWxsIiwic2NvcmVib2FyZHMiLCJnZW5TY29yZWJvYXJkcyIsImluaXRSZXNpemVkIiwicmVzaXplZENhbGxiYWNrIiwiZHJhd1N0YXRpYyIsInRoZW4iLCJiYWNrZ3JvdW5kIiwiYmFuZFdpZHRoIiwiY3VydGFpbkNhbnZhc0luc3RhbmNlIiwiY3JlYXRlVmlydHVhbENhbnZhc0Jhc2VJbnN0YW5jZSIsInNldENhbnZhc1NpemUiLCJjdnMiLCJ3aWR0aCIsImhlaWdodCIsImN1cnRhaW5BbmltYXRpb25JbnN0YW5jZSIsIlN3aXJsOEJpdCIsImN0eCIsImFuaW1hdGUiLCJpbml0aWFsSW1hZ2UiLCJnZXRDYWNoZUNhbnZhcyIsInByb21pc2UiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXIiLCJkcmF3SW1hZ2UiLCJQcm9taXNlIiwicmVzIiwic2V0VGltZW91dCIsImNsZWFySW50ZXJ2YWwiLCJ0cmlnZ2VyIiwicmVqIiwic3RhdGljSW1hZ2UiLCJ0YXJnZXRMYXllciIsInNvdXJjZUNhbnZhcyIsIm9mZnNldCIsIm9mZnNldE1vYmlsZSIsInNhdmUiLCJnZXRBc3BlY3RSYXRpbyIsInR5cGVBIiwib2Zmc2V0ViIsIm9mZnNldEgiLCJjb3VydEhlaWdodCIsImNvdXJ0V2lkdGgiLCJ0cmFuc2xhdGUiLCJyb3RhdGUiLCJNYXRoIiwiUEkiLCJyZXN0b3JlIiwic3Ryb2tlV2lkdGgiLCJjb3VydENhbnZhc0luc3RhbmNlIiwiY291cnRDYW52YXNXaWR0aCIsImNvdXJ0Q2FudmFzSGVpZ2h0IiwidmVydGljZXMiLCJ4IiwieSIsInN0cm9rZUFuaW1hdGlvbkluc3RhbmNlIiwiU3Ryb2tlQW5pbWF0aW9uIiwicmVzcG9uc2l2ZVBhaW50ZXIiLCJzdGFyU2t5Q2FudmFzSW5zdGFuY2UiLCJhZGROZXdMYXllciIsInN0YXJTa3lBbmltYXRpb25JbnN0YW5jZSIsIlN0YXJTa3kiLCJyZWZyZXNoU3RhcnMiLCJiaW5kIiwid2lkdGhQcmFtIiwiZ2FwUmF0aW8iLCJjb2xvciIsInRoaWNrbmVzcyIsInBsYXllcnNDYW52YXNJbnN0YW5jZSIsInBsYXllcnNWaXJ0dWFsQ2FudmFzSW5zdGFuY2UiLCJpIiwicGxheWVyc0RhdGEiLCJwb3NpdGlvbiIsInJlYWR5Iiwib3BhY2l0eSIsImRyYXdSZWN0IiwibG9vcFVwZGF0ZSIsInNjb3JlYm9hcmRzTGF5ZXIiLCJhZGREaXZMYXllciIsInRvcEJhciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImJvdEJhciIsImNsYXNzTGlzdCIsImFkZCIsImFwcGVuZCIsImdlblBsYXllclNob3djYXNlIiwicGxheWVyTmFtZSIsInBsYXllcklkIiwic2NvcmVNYXgiLCJwbGF5ZXJTaG93Q2FzZSIsImlkIiwiaW5uZXJIVE1MIiwibmFtZSIsInVwZGF0ZSIsInF1ZXJ5U2VsZWN0b3IiLCJwYWRTdHJpbmciLCJzY29yZSIsInNwZWVkIiwic2l6ZSIsImJhbGxDYW52YXNJbnN0YW5jZSIsImJhbGxWaXJ0dWFsQ2FudmFzSW5zdGFuY2UiLCJiYWxsRGF0YSIsInJhbmRvbVdpdGhpblJhbmdlIiwiZHJhd0NpcmNsZSIsInBsYXllcnNSZWFkeSIsImJhbGxSZWFkeSIsInNjb3JlYm9hcmRzUmVhZHkiLCJhbGxSZWFkeVByb21pc2UiLCJhbGwiLCJnYW1lUmVhZHlQcm9taXNlIiwiaW5pdEdhbWVEYXRhVXBkYXRlSW50ZXJ2YWwiLCJDYW52YXMyREZ4QmFzZSIsImdhbWVCdWlsZGVyIiwiZ2FtZSIsImJvb3QiLCJib2R5IiwiaW5zdGFuY2UiLCJjb250cm9sbGVyIiwiY291bnRlckNsb2Nrd2lzZUFyciIsImNsb2Nrd2lzZUFyciIsImNhbnZhcyIsImFuaW1hdGlvbkVuZFRyaWdnZXIiLCJvcmRlciIsInBhdGgiLCJQYXRoMkQiLCJiYW5kV2lkdGhTdGFjayIsImNsb2Nrd2lzZSIsInRvdGFsV2lkdGgiLCJ0b3RhbEhlaWdodCIsImRpcmVjdGlvbkFyciIsImxvY2F0aW9uIiwiYW5pbWF0aW9uUHJvbWlzZSIsImRyYXdTd2lybCIsImFkZFBhdGgiLCJkcmFXUmFuZG9tQW5nbGVkQmFuZFBhdGgiLCJnZXRTdGFydExvY2F0aW9uIiwiZmlsbCIsInBvaW50IiwiZHJhd0FuZ2xlZEJhbmRGcm9tVEwiLCJkcmF3QW5nbGVkQmFuZEZyb21CTCIsImRyYXdBbmdsZWRCYW5kRnJvbUJSIiwiZHJhd0FuZ2xlZEJhbmRGcm9tVFIiLCJtb3ZlVG8iLCJyYW5kb21IZWlnaHQiLCJsaW5lVG8iLCJyYW5kb21XaWR0aCIsIndheXBvaW50cyIsImNhbGNXYXlwb2ludHMiLCJmbGlja2VyIiwiZGFzaCIsImdsb3dpbmciLCJnbG93aW5nU2l6ZSIsImxvb3BpbmdEcmF3U3Ryb2tlIiwiY291bnRlciIsIiR0aGlzIiwibGluZUNhcCIsImxlbmd0aCIsInNldExpbmVEYXNoIiwic3Ryb2tlU3R5bGUiLCJsaW5lV2lkdGgiLCJzaGFkb3dDb2xvciIsInNoYWRvd0JsdXIiLCJmbGlja2VyUmFuZ2UiLCJiZWdpblBhdGgiLCJjbGVhclJlY3QiLCJnbG9iYWxBbHBoYSIsInN0cm9rZSIsImNsb3NlUGF0aCIsInN0YXJzIiwiZ2VuU3RhcnMiLCJudW1iZXIiLCJzdGFyIiwidHdpbmtsZSIsInB1c2giLCJkcmF3IiwidmlydHVhbFBhcmVudCIsImlzIiwiT2JqZWN0IiwiYXNzaWduIiwiZnJhbWVDb3VudCIsIm1vdXNlIiwiZnJhbWVJc1BhdXNlZCIsImlzQ2xpY2siLCJsYXllcnNDb250YWluZXIiLCJ1bmRlZmluZWQiLCJkaXZMYXllcnNDb250YWluZXIiLCJjYW52YXNTaXplZml4ZWQiLCJwcmV2aW91c0ZyYW1lVGltZSIsIkRhdGUiLCJnZXRUaW1lIiwiaXNSZXNpemluZyIsImxheWVycyIsImRpdkxheWVycyIsImlzUmVzaXppbmdDYWxsYmFjayIsImluaXRCYXNlIiwidGFnTmFtZSIsInN0eWxlIiwiZm9udFNpemUiLCJhcHBlbmRDaGlsZCIsImRpdkxheWVyQ29udGFpbmVyIiwic3Vycm91bmRpbmciLCJpbnNlcnRCZWZvcmUiLCJnZXRDb250ZXh0IiwidHJpZ2dlclJlc2l6aW5nTWVjaGFuaXNtIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImRlYm91bmNlIiwidmlzaWJpbGl0eVN0YXRlIiwiYWRkRXZlbnRIYW5kbGVyIiwicmVmcmVzaEJhc2VGcmFtZUNvdW50ZXIiLCJ0aGlzRnJhbWVUaW1lIiwidGltZUVsYXBzZWQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjb250YWlucyIsImNhbnZhc1dpZHRoIiwiY2FudmFzSGVpZ2h0IiwidmlydHVhbFBhcmVudFZhbGlkYXRpb24iLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJwYXJlbnRFbGVtZW50IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJlIiwicG9zIiwicG9pbnRlckV2ZW50VG9YWSIsInZjdnMiLCJ2Y3ZzSW5zdGFuY2UiLCJUeXBlRXJyb3IiLCJwcmVwZW5kIiwiY3ZzSW5zdGFuY2UiLCJjbGFzc05hbWUiLCJkaXZMYXllciIsImN0b3IiLCJ0YXJnZXRFbGUiLCJnZXRFbGVtZW50QnlJZCIsImJvb3RQcm9taXNlIiwiJCIsInNlbGVjdG9yIiwidG9nZ2xlIiwic3RhdHVzIiwic3R5bGVTdHIiLCJzZXRBdHRyaWJ1dGUiLCJ0b2dnbGVDbGFzcyIsImNsYXNzbmFtZSIsImFjdGlvbiIsImVtaXQiLCJldmVudE5hbWUiLCJzb21lRXZlbnQiLCJjcmVhdGVFdmVudCIsImluaXRFdmVudCIsImRpc3BhdGNoRXZlbnQiLCJwYXJlbnRzIiwibm9kZSIsImN1cnJlbnQiLCJsaXN0IiwicGFyZW50Tm9kZSIsImRvY3VtZW50RWxlbWVudCIsImZpbHRlciIsIm8iLCJtYXRjaGVzIiwiZmFkZU91dCIsImR1cmF0aW9uIiwiY2IiLCJkaXNwbGF5IiwiZmFkZVRhcmdldCIsImZhZGVFZmZlY3QiLCJNZXJzZW5uZVR3aXN0ZXIiLCJyZXF1aXJlIiwiTVQiLCJmdW5jIiwiZGVsYXkiLCJ0aW1lciIsImNvbnRleHQiLCJhcmdzIiwiYXJndW1lbnRzIiwiY2xlYXJUaW1lb3V0IiwiYXBwbHkiLCJhcnIiLCJhIiwiQXJyYXkiLCJpc0FycmF5Iiwib2JqIiwicHJvdG90eXBlIiwidG9TdHJpbmciLCJjYWxsIiwiaW5kZXhPZiIsInB0aCIsImhhc093blByb3BlcnR5Iiwic3ZnIiwiU1ZHRWxlbWVudCIsImlucCIsIkhUTUxJbnB1dEVsZW1lbnQiLCJkb20iLCJub2RlVHlwZSIsInN0ciIsImZuYyIsInVuZCIsIm5pbCIsImhleCIsInRlc3QiLCJyZ2JhIiwicmdiIiwiaHNsIiwiY29sIiwia2V5IiwiZGVmYXVsdEluc3RhbmNlU2V0dGluZ3MiLCJkZWZhdWx0VHdlZW5TZXR0aW5ncyIsIm1pbiIsIm1heCIsInNlZWQiLCJyYW5kb20iLCJnZXREaXN0YW5jZSIsIngwIiwieTAiLCJ4MSIsInkxIiwic3FydCIsImRlZ3JlZVRvUmFkaWFuIiwiZGVncmVlIiwib3V0IiwidHlwZSIsInRvdWNoIiwib3JpZ2luYWxFdmVudCIsInRvdWNoZXMiLCJjaGFuZ2VkVG91Y2hlcyIsInBhZ2VYIiwicGFnZVkiLCJ0YXJnZXRIYXNQcm9wIiwidGFyZ2V0IiwicHJvcCIsImlzRW1wdHkiLCJ2YWwiLCJpc05hTiIsInJnYlRvUmdiYSIsInJnYlZhbHVlIiwiZXhlYyIsImhleFRvUmdiYSIsImhleFZhbHVlIiwicmd4IiwicmVwbGFjZSIsIm0iLCJyIiwiZyIsImIiLCJwYXJzZUludCIsImhzbFRvUmdiYSIsImhzbFZhbHVlIiwiaCIsInMiLCJsIiwiaHVlMnJnYiIsInAiLCJxIiwidCIsImNvbG9yVG9SZ2JhIiwiZ2V0Q2hhbm5lbFZhbHVlc0Zyb21SZ2JhIiwic3BsaXQiLCJtYXAiLCJpbnRlcnBvbGF0ZSIsInB0MCIsInB0MSIsImR4IiwiZHkiLCJqIiwidGFyZ2V0U3RyIiwiZHJhd1NxdWFyZSIsImFscGhhIiwiYXJjIiwiZHJhd0xpbmUiLCJzdHJva2VDb2xvciIsImRyYXdUZXh0IiwidGV4dENvbnRlbnQiLCJmb250IiwiZmlsbFRleHQiLCJnZXRTY3JlZW5zaG90SW1hZ2UiLCJ0YXJnZXRDdnMiLCJ1cmwiLCJ0b0RhdGFVUkwiLCJpbWFnZSIsIkltYWdlIiwic3JjIiwidGFyZ2V0Q3R4IiwiY2FjaGVDdnMiLCJjYWNoZUN0eCIsInNvdXJjZVdpZHRoIiwic291cmNlSGVpZ2h0IiwiY2FjaGVEYXRhIiwiZ2V0SW1hZ2VEYXRhIiwicHV0SW1hZ2VEYXRhIiwiQkFMTF9BTklNQVRJT05fREVGQVVMVCIsImFmdGVySW1hZ2UiLCJyYWRpdXMiLCJzcGVlZFgiLCJzcGVlZFkiLCJhY2NlbGVyYXRpb25YIiwiYWNjZWxlcmF0aW9uWSIsImZyaWN0aW9uWCIsImZyaWN0aW9uWSIsIlNQT1RTX0FOSU1BVElPTl9ERUZBVUxUIiwibWluU2l6ZSIsIm1heFNpemUiLCJwZXJpb2QiLCJzdGVwIiwiYm90dG9tTGF5ZXIiLCJyb3ciLCJCYXNpY1JlZmVsZWN0aW9uIiwic3dpdGNoU3RhdHVzIiwiaW5pdEJhbGwiLCJhbmltYXRlQmFsbCIsImFjY2VsZXJhdGlvbiIsImZyaWN0aW9uIiwiZHJhd0JhbGwiLCJyZWZyZXNoTG9jYXRpb24iLCJyZWZyZXNoU3BlZWQiLCJjaGVja0JvdW5kYXJ5IiwiZHQiLCJTcG90c0J1bXBpbmciLCJzcG90c1NpemUiLCJleHBhbmQiLCJkcmF3U3BvdHMiLCJpbml0U3BsYXNoIiwiaW5pdGlhbFNjcmVlbiIsInZpcnR1YWxDYW52YXMiLCJzd2l0Y2hlciIsInNwb3RBbmltYXRpb24iLCJzcGxhc2hQcm9taXNlIiwic3BvdHNCdW1waW5nSW5zdGFuY2UiLCJib290Q29udHJvbGxlciIsImJhc2ljUmVmZWxlY3Rpb25JbnN0YW5jZSIsImlzU3R1Y2siLCJwbGF5ZXJSZWYiLCJzb2NrZXQiLCJzcGxhc2hTd2l0Y2hlciIsInVpSW5pdFByb21pc2UiLCJpbml0VUkiLCJnbyIsImRyYXdHYW1lIiwib24iLCJzdGFydENvdW50aW5nIiwicmVtb3ZlIiwiYWxlcnQiLCJtb2R1bGUiLCJleHBvcnRzIiwiQmFja29mZiIsIm9wdHMiLCJtcyIsImZhY3RvciIsImppdHRlciIsImF0dGVtcHRzIiwicG93IiwicmFuZCIsImRldmlhdGlvbiIsImZsb29yIiwicmVzZXQiLCJzZXRNaW4iLCJzZXRNYXgiLCJzZXRKaXR0ZXIiLCJjaGFycyIsImFycmF5YnVmZmVyIiwiYnl0ZXMiLCJVaW50OEFycmF5IiwibGVuIiwiYmFzZTY0Iiwic3Vic3RyaW5nIiwiYnVmZmVyTGVuZ3RoIiwiZW5jb2RlZDEiLCJlbmNvZGVkMiIsImVuY29kZWQzIiwiZW5jb2RlZDQiLCJBcnJheUJ1ZmZlciIsIkVtaXR0ZXIiLCJtaXhpbiIsImV2ZW50IiwiZm4iLCJfY2FsbGJhY2tzIiwib25jZSIsIm9mZiIsInJlbW92ZUxpc3RlbmVyIiwicmVtb3ZlQWxsTGlzdGVuZXJzIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNhbGxiYWNrcyIsInNwbGljZSIsInNsaWNlIiwibGlzdGVuZXJzIiwiaGFzTGlzdGVuZXJzIiwiZCIsInciLCJvcHRpb25zIiwicGFyc2UiLCJpc0Zpbml0ZSIsImxvbmciLCJmbXRMb25nIiwiZm10U2hvcnQiLCJFcnJvciIsIkpTT04iLCJzdHJpbmdpZnkiLCJTdHJpbmciLCJtYXRjaCIsIm4iLCJwYXJzZUZsb2F0IiwidG9Mb3dlckNhc2UiLCJtc0FicyIsImFicyIsInJvdW5kIiwicGx1cmFsIiwiaXNQbHVyYWwiLCJmb3JtYXRBcmdzIiwibG9hZCIsInVzZUNvbG9ycyIsImxvY2Fsc3RvcmFnZSIsIndhcm5lZCIsImNvbnNvbGUiLCJ3YXJuIiwicHJvY2VzcyIsIl9fbndqcyIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsIldlYmtpdEFwcGVhcmFuY2UiLCJmaXJlYnVnIiwiZXhjZXB0aW9uIiwidGFibGUiLCJSZWdFeHAiLCIkMSIsIm5hbWVzcGFjZSIsImh1bWFuaXplIiwiZGlmZiIsImMiLCJpbmRleCIsImxhc3RDIiwiZGVidWciLCJsb2ciLCJuYW1lc3BhY2VzIiwic3RvcmFnZSIsInNldEl0ZW0iLCJyZW1vdmVJdGVtIiwiZXJyb3IiLCJnZXRJdGVtIiwiZW52IiwiREVCVUciLCJsb2NhbFN0b3JhZ2UiLCJmb3JtYXR0ZXJzIiwidiIsIm1lc3NhZ2UiLCJzZXR1cCIsImNyZWF0ZURlYnVnIiwiZGVmYXVsdCIsImNvZXJjZSIsImRpc2FibGUiLCJlbmFibGUiLCJlbmFibGVkIiwiZGVzdHJveSIsImtleXMiLCJmb3JFYWNoIiwibmFtZXMiLCJza2lwcyIsInNlbGVjdENvbG9yIiwiaGFzaCIsImNoYXJDb2RlQXQiLCJjb2xvcnMiLCJwcmV2VGltZSIsImVuYWJsZU92ZXJyaWRlIiwic2VsZiIsImN1cnIiLCJOdW1iZXIiLCJwcmV2IiwidW5zaGlmdCIsImZvcm1hdCIsImZvcm1hdHRlciIsImxvZ0ZuIiwiZXh0ZW5kIiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwiZ2V0Iiwic2V0IiwiZGVsaW1pdGVyIiwibmV3RGVidWciLCJzdWJzdHIiLCJ0b05hbWVzcGFjZSIsImpvaW4iLCJyZWdleHAiLCJzdGFjayIsIkZ1bmN0aW9uIiwiU29ja2V0IiwidXJpIiwicHJvdG9jb2wiLCJ0cmFuc3BvcnRzIiwicGFyc2VyIiwicGFyc2V1cmkiLCJwYXJzZXFzIiwiaG9zdG5hbWUiLCJob3N0Iiwic2VjdXJlIiwicG9ydCIsInF1ZXJ5IiwicmVhZHlTdGF0ZSIsIndyaXRlQnVmZmVyIiwicHJldkJ1ZmZlckxlbiIsImFnZW50Iiwid2l0aENyZWRlbnRpYWxzIiwidXBncmFkZSIsImpzb25wIiwidGltZXN0YW1wUGFyYW0iLCJyZW1lbWJlclVwZ3JhZGUiLCJyZWplY3RVbmF1dGhvcml6ZWQiLCJwZXJNZXNzYWdlRGVmbGF0ZSIsInRocmVzaG9sZCIsInRyYW5zcG9ydE9wdGlvbnMiLCJjbG9zZU9uQmVmb3JldW5sb2FkIiwiZGVjb2RlIiwidXBncmFkZXMiLCJwaW5nSW50ZXJ2YWwiLCJwaW5nVGltZW91dCIsInBpbmdUaW1lb3V0VGltZXIiLCJ0cmFuc3BvcnQiLCJjbG9zZSIsIm9mZmxpbmVFdmVudExpc3RlbmVyIiwib25DbG9zZSIsIm9wZW4iLCJjbG9uZSIsIkVJTyIsInNpZCIsInByaW9yV2Vic29ja2V0U3VjY2VzcyIsImNyZWF0ZVRyYW5zcG9ydCIsInNoaWZ0Iiwic2V0VHJhbnNwb3J0Iiwib25EcmFpbiIsIm9uUGFja2V0Iiwib25FcnJvciIsInByb2JlIiwiZmFpbGVkIiwib25UcmFuc3BvcnRPcGVuIiwic2VuZCIsImRhdGEiLCJtc2ciLCJ1cGdyYWRpbmciLCJjbGVhbnVwIiwiZmx1c2giLCJlcnIiLCJmcmVlemVUcmFuc3BvcnQiLCJvbmVycm9yIiwib25UcmFuc3BvcnRDbG9zZSIsIm9uY2xvc2UiLCJvbnVwZ3JhZGUiLCJ0byIsInBhY2tldCIsIm9uSGFuZHNoYWtlIiwicmVzZXRQaW5nVGltZW91dCIsInNlbmRQYWNrZXQiLCJjb2RlIiwiZmlsdGVyVXBncmFkZXMiLCJvbk9wZW4iLCJhdXRvVW5yZWYiLCJ1bnJlZiIsIndyaXRhYmxlIiwiY29tcHJlc3MiLCJjbGVhbnVwQW5kQ2xvc2UiLCJ3YWl0Rm9yVXBncmFkZSIsInJlYXNvbiIsImRlc2MiLCJwaW5nSW50ZXJ2YWxUaW1lciIsImZpbHRlcmVkVXBncmFkZXMiLCJUcmFuc3BvcnQiLCJkZXNjcmlwdGlvbiIsImRvT3BlbiIsImRvQ2xvc2UiLCJwYWNrZXRzIiwid3JpdGUiLCJkZWNvZGVQYWNrZXQiLCJiaW5hcnlUeXBlIiwiWE1MSHR0cFJlcXVlc3QiLCJYSFIiLCJKU09OUCIsIndlYnNvY2tldCIsInBvbGxpbmciLCJ4aHIiLCJ4ZCIsInhzIiwiaXNTU0wiLCJ4ZG9tYWluIiwieHNjaGVtZSIsImZvcmNlSlNPTlAiLCJQb2xsaW5nIiwiZ2xvYmFsVGhpcyIsInJOZXdsaW5lIiwickVzY2FwZWROZXdsaW5lIiwiSlNPTlBQb2xsaW5nIiwiX19fZWlvIiwib25EYXRhIiwic2NyaXB0IiwicmVtb3ZlQ2hpbGQiLCJmb3JtIiwiaWZyYW1lIiwiYXN5bmMiLCJpbnNlcnRBdCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiaGVhZCIsImlzVUFnZWNrbyIsImFyZWEiLCJpZnJhbWVJZCIsInRvcCIsImxlZnQiLCJtZXRob2QiLCJjb21wbGV0ZSIsImluaXRJZnJhbWUiLCJodG1sIiwidmFsdWUiLCJzdWJtaXQiLCJhdHRhY2hFdmVudCIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsIm9ubG9hZCIsInBpY2siLCJlbXB0eSIsImhhc1hIUjIiLCJyZXNwb25zZVR5cGUiLCJmb3JjZUJhc2U2NCIsInN1cHBvcnRzQmluYXJ5IiwiUmVxdWVzdCIsInJlcSIsInJlcXVlc3QiLCJwb2xsWGhyIiwiY3JlYXRlIiwiZXh0cmFIZWFkZXJzIiwic2V0RGlzYWJsZUhlYWRlckNoZWNrIiwic2V0UmVxdWVzdEhlYWRlciIsInJlcXVlc3RUaW1lb3V0IiwidGltZW91dCIsImhhc1hEUiIsIm9uTG9hZCIsInJlc3BvbnNlVGV4dCIsInJlcXVlc3RzQ291bnQiLCJyZXF1ZXN0cyIsIm9uU3VjY2VzcyIsImZyb21FcnJvciIsImFib3J0IiwiWERvbWFpblJlcXVlc3QiLCJlbmFibGVzWERSIiwidW5sb2FkSGFuZGxlciIsInRlcm1pbmF0aW9uRXZlbnQiLCJ5ZWFzdCIsInBvbGwiLCJvblBhdXNlIiwidG90YWwiLCJkb1BvbGwiLCJjYWxsYmFjayIsImRlY29kZVBheWxvYWQiLCJlbmNvZGVQYXlsb2FkIiwiZG9Xcml0ZSIsInNjaGVtYSIsInRpbWVzdGFtcFJlcXVlc3RzIiwiYjY0IiwiZW5jb2RlIiwiaXB2NiIsIldlYlNvY2tldCIsIk1veldlYlNvY2tldCIsInVzaW5nQnJvd3NlcldlYlNvY2tldCIsImRlZmF1bHRCaW5hcnlUeXBlIiwiaXNSZWFjdE5hdGl2ZSIsInByb2R1Y3QiLCJXUyIsImNoZWNrIiwicHJvdG9jb2xzIiwiaGVhZGVycyIsIndzIiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJvbm9wZW4iLCJfc29ja2V0Iiwib25tZXNzYWdlIiwiZXYiLCJsYXN0UGFja2V0IiwiZW5jb2RlUGFja2V0IiwiQnVmZmVyIiwiYnl0ZUxlbmd0aCIsImF0dHIiLCJyZWR1Y2UiLCJhY2MiLCJrIiwiaGFzQ09SUyIsImNvbmNhdCIsIlBBQ0tFVF9UWVBFUyIsIlBBQ0tFVF9UWVBFU19SRVZFUlNFIiwiRVJST1JfUEFDS0VUIiwid2l0aE5hdGl2ZUFycmF5QnVmZmVyIiwiYmFzZTY0ZGVjb2RlciIsImVuY29kZWRQYWNrZXQiLCJtYXBCaW5hcnkiLCJjaGFyQXQiLCJkZWNvZGVCYXNlNjRQYWNrZXQiLCJwYWNrZXRUeXBlIiwiZGVjb2RlZCIsIkJsb2IiLCJ3aXRoTmF0aXZlQmxvYiIsImlzVmlldyIsImJ1ZmZlciIsImVuY29kZUJsb2JBc0Jhc2U2NCIsImZpbGVSZWFkZXIiLCJGaWxlUmVhZGVyIiwiY29udGVudCIsInJlc3VsdCIsInJlYWRBc0RhdGFVUkwiLCJTRVBBUkFUT1IiLCJmcm9tQ2hhckNvZGUiLCJlbmNvZGVkUGFja2V0cyIsImNvdW50IiwiZW5jb2RlZFBheWxvYWQiLCJkZWNvZGVkUGFja2V0IiwiTiIsIk0iLCJNQVRSSVhfQSIsIlVQUEVSX01BU0siLCJMT1dFUl9NQVNLIiwibXQiLCJtdGkiLCJjb25zdHJ1Y3RvciIsImluaXRfYnlfYXJyYXkiLCJpbml0X3NlZWQiLCJpbml0X2tleSIsImtleV9sZW5ndGgiLCJyYW5kb21faW50IiwibWFnMDEiLCJrayIsInJhbmRvbV9pbnQzMSIsInJhbmRvbV9pbmNsIiwicmFuZG9tX2V4Y2wiLCJyYW5kb21fbG9uZyIsImVuY29kZVVSSUNvbXBvbmVudCIsInFzIiwicXJ5IiwicGFpcnMiLCJwYWlyIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwicmUiLCJwYXJ0cyIsInNvdXJjZSIsImF1dGhvcml0eSIsImlwdjZ1cmkiLCJwYXRoTmFtZXMiLCJxdWVyeUtleSIsInJlZ3giLCIkMCIsIiQyIiwiQVJHX0xFTkdUSCIsInoiLCJTRUdNRU5UX1BBVFRFUk4iLCJOVU1CRVIiLCJudW1iZXJzIiwiY29tbWFuZCIsInRoZUFyZ3MiLCJwYXJzZVZhbHVlcyIsInRoZUNvbW1hbmQiLCJpbWdEYXRhIiwibngiLCJueSIsInN1cHBvcnRzU3ZnUGF0aEFyZ3VtZW50IiwicGFyc2VQYXRoIiwic3RhcnRQb2ludCIsImN1cnJlbnRQb2ludCIsInNlZ21lbnRzIiwicGF0aFR5cGUiLCJjcHgiLCJjcHkiLCJxY3B4IiwicWNweSIsInJ4IiwicnkiLCJhbmdsZSIsImxhcmdlQXJjRmxhZyIsInN3ZWVwRmxhZyIsImVuZFBvaW50IiwibWlkUG9pbnQiLCJyb3RhdGVQb2ludCIsImxhbWJkYSIsImNlbnRlclBvaW50IiwidDEiLCJ0MiIsInNjYWxlUG9pbnQiLCJzdGFydEFuZ2xlIiwiZW5kQW5nbGUiLCJ0cmFuc2xhdGVQb2ludCIsImNjdyIsImNGaWxsIiwiY1N0cm9rZSIsImZpbGxSdWxlIiwiYnVpbGRQYXRoIiwiY0lzUG9pbnRJblBhdGgiLCJwYXRoMmRQb2x5ZmlsbCIsInVybF8xIiwibWFuYWdlcl8xIiwibG9va3VwIiwiY2FjaGUiLCJwYXJzZWQiLCJzYW1lTmFtZXNwYWNlIiwibmV3Q29ubmVjdGlvbiIsImZvcmNlTmV3IiwibXVsdGlwbGV4IiwiaW8iLCJNYW5hZ2VyIiwic29ja2V0X2lvX3BhcnNlcl8xIiwibWFuYWdlcl8yIiwic29ja2V0XzEiLCJlaW8iLCJvbl8xIiwidHlwZWRfZXZlbnRzXzEiLCJuc3BzIiwic3VicyIsInJlY29ubmVjdGlvbiIsInJlY29ubmVjdGlvbkF0dGVtcHRzIiwiSW5maW5pdHkiLCJyZWNvbm5lY3Rpb25EZWxheSIsInJlY29ubmVjdGlvbkRlbGF5TWF4IiwicmFuZG9taXphdGlvbkZhY3RvciIsImJhY2tvZmYiLCJfcmVhZHlTdGF0ZSIsIl9wYXJzZXIiLCJlbmNvZGVyIiwiRW5jb2RlciIsImRlY29kZXIiLCJEZWNvZGVyIiwiX2F1dG9Db25uZWN0IiwiYXV0b0Nvbm5lY3QiLCJfcmVjb25uZWN0aW9uIiwiX3JlY29ubmVjdGlvbkF0dGVtcHRzIiwiX2EiLCJfcmVjb25uZWN0aW9uRGVsYXkiLCJfcmFuZG9taXphdGlvbkZhY3RvciIsIl9yZWNvbm5lY3Rpb25EZWxheU1heCIsIl90aW1lb3V0IiwiX3JlY29ubmVjdGluZyIsInJlY29ubmVjdCIsImVuZ2luZSIsInNraXBSZWNvbm5lY3QiLCJvcGVuU3ViRGVzdHJveSIsImVycm9yU3ViIiwiZW1pdFJlc2VydmVkIiwibWF5YmVSZWNvbm5lY3RPbk9wZW4iLCJzdWJEZXN0cm95Iiwib25waW5nIiwib25kYXRhIiwib25kZWNvZGVkIiwibnNwIiwiYWN0aXZlIiwiX2Nsb3NlIiwib25yZWNvbm5lY3QiLCJhdHRlbXB0IiwiU3RyaWN0RXZlbnRFbWl0dGVyIiwiUkVTRVJWRURfRVZFTlRTIiwiZnJlZXplIiwiY29ubmVjdCIsImNvbm5lY3RfZXJyb3IiLCJkaXNjb25uZWN0IiwiZGlzY29ubmVjdGluZyIsIm5ld0xpc3RlbmVyIiwicmVjZWl2ZUJ1ZmZlciIsInNlbmRCdWZmZXIiLCJpZHMiLCJhY2tzIiwiZmxhZ3MiLCJjb25uZWN0ZWQiLCJkaXNjb25uZWN0ZWQiLCJhdXRoIiwib25wYWNrZXQiLCJzdWJFdmVudHMiLCJQYWNrZXRUeXBlIiwiRVZFTlQiLCJwb3AiLCJpc1RyYW5zcG9ydFdyaXRhYmxlIiwiZGlzY2FyZFBhY2tldCIsInZvbGF0aWxlIiwiX3BhY2tldCIsIkNPTk5FQ1QiLCJvbmNvbm5lY3QiLCJvbmV2ZW50IiwiQklOQVJZX0VWRU5UIiwiQUNLIiwib25hY2siLCJCSU5BUllfQUNLIiwiRElTQ09OTkVDVCIsIm9uZGlzY29ubmVjdCIsIkNPTk5FQ1RfRVJST1IiLCJhY2siLCJlbWl0RXZlbnQiLCJfYW55TGlzdGVuZXJzIiwibGlzdGVuZXIiLCJzZW50IiwiZW1pdEJ1ZmZlcmVkIiwibG9jIiwiaHJlZiIsImlzX2JpbmFyeV8xIiwiZGVjb25zdHJ1Y3RQYWNrZXQiLCJidWZmZXJzIiwicGFja2V0RGF0YSIsInBhY2siLCJfZGVjb25zdHJ1Y3RQYWNrZXQiLCJhdHRhY2htZW50cyIsImlzQmluYXJ5IiwicGxhY2Vob2xkZXIiLCJfcGxhY2Vob2xkZXIiLCJudW0iLCJuZXdEYXRhIiwicmVjb25zdHJ1Y3RQYWNrZXQiLCJfcmVjb25zdHJ1Y3RQYWNrZXQiLCJiaW5hcnlfMSIsImhhc0JpbmFyeSIsImVuY29kZUFzQmluYXJ5IiwiZW5jb2RlQXNTdHJpbmciLCJkZWNvbnN0cnVjdGlvbiIsImRlY29kZVN0cmluZyIsInJlY29uc3RydWN0b3IiLCJCaW5hcnlSZWNvbnN0cnVjdG9yIiwidGFrZUJpbmFyeURhdGEiLCJzdGFydCIsImJ1ZiIsIm5leHQiLCJwYXlsb2FkIiwidHJ5UGFyc2UiLCJpc1BheWxvYWRWYWxpZCIsImZpbmlzaGVkUmVjb25zdHJ1Y3Rpb24iLCJyZWNvblBhY2siLCJiaW5EYXRhIiwid2l0aE5hdGl2ZUZpbGUiLCJGaWxlIiwidG9KU09OIiwiYWxwaGFiZXQiLCJlbmNvZGVkIiwibm93IiwiZ2FtZUNyZWF0ZWQiLCJqb2luZWQiLCJuYW1lQ29uZmlybWVkIiwiZ2FtZVN0YXJ0ZWQiLCJjcmVhdGVHYW1lQnRuIiwic2hvd0pvaW5HYW1lUHJvbXB0QnRuIiwiY29uZmlybUpvaW5HYW1lQnRuIiwicm9vbUNvZGVJbnB1dCIsInJvb21Db2RlRGlzcGxheSIsIm5hbWVJbnB1dCIsIm5hbWVDb25maXJtIiwibGVhdmVXYWl0aW5nQnRuIiwibGVhdmVHYW1lU3RhcnRBbGVydCIsImdhbWVTdGFydCIsImluaXRUcmlnZ2VyIiwiaW5pdFVJUHJvbWlzZSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJwYXJlbnRQb3BvdXRzIiwidG9nZ2xlUG9wb3V0IiwiZmxhZyIsImNvbmZpcm1OYW1lIiwibmV3R2FtZSIsInJvb21Db2RlIiwiY29uZmlybUpvaW5HYW1lIiwicGxheWVyTnVtYmVyIiwiaG9zdE5hbWUiLCJjaGFsbGVuZ2VyIiwicG9wb3V0IiwiaGlkZUluaXRpYWxTY3JlZW4iLCJ0b2dnbGVIaWRlT25BY3Rpb24iLCJ0b2dnbGVTaG93T25BY3Rpb24iLCJnYyIsInRpbWVJbnRlcnZhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLE9BQU8sR0FBRztBQUNkQyxTQUFPLEVBQUUsZUFESztBQUVkQyxZQUFVLEVBQUUscUJBRkU7QUFHZEMsa0JBQWdCLEVBQUUsSUFBSTtBQUhSLENBQWhCO0FBTU8sSUFBTUMsTUFBYjtBQUFBOztBQUFBOztBQUNFLGtCQUFZQyxHQUFaLEVBQWlCQyxhQUFqQixFQUFnQ0MsTUFBaEMsRUFBd0M7QUFBQTs7QUFBQTs7QUFDdEMsOEJBQU1GLEdBQU4sRUFBV0MsYUFBWCxFQUEwQkMsTUFBMUI7QUFDQSxVQUFLQyxTQUFMLEdBQWlCLElBQWpCOztBQUNBLFVBQUtDLElBQUw7O0FBQ0EsVUFBS0MsR0FBTCxHQUFXLEVBQVg7QUFDQSxVQUFLQyxXQUFMLEdBQW1CLEVBQW5CO0FBQ0EsVUFBS0MsaUJBQUwsR0FBeUIsRUFBekI7QUFDQSxVQUFLQyxVQUFMLEdBQWtCLENBQWxCO0FBQ0EsVUFBS0MsS0FBTCxHQUFhLEtBQWI7QUFDQSxVQUFLQyxnQkFBTCxHQUF3QixFQUF4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QUFILENBQWFDLEdBQWIsQ0FBaUIsMkJBQWpCO0FBQ0EsTUFBSXVGLE1BQU0sR0FBR3EzQixFQUFFLENBQUNqOEIsYUFBSCxDQUFpQiw4QkFBakIsQ0FBYjtBQUNBNEUsUUFBTSxDQUFDL0UsU0FBUCxHQUFtQixDQUFuQjtBQUNBLE1BQUlxOEIsWUFBWSxHQUFHM2dDLFdBQVcsQ0FBQyxZQUFNO0FBQ25DLFFBQUlrVSxRQUFRLENBQUM3SyxNQUFNLENBQUMvRSxTQUFSLENBQVIsR0FBNkIsQ0FBakMsRUFBb0M7QUFDbEMrRSxZQUFNLENBQUMvRSxTQUFQLEdBQW1CNFAsUUFBUSxDQUFDN0ssTUFBTSxDQUFDL0UsU0FBUixDQUFSLEdBQTZCLENBQWhEO0FBQ0QsS0FGRCxNQUdLO0FBQ0hoRSxtQkFBYSxDQUFDcWdDLFlBQUQsQ0FBYjtBQUNBN3hCLDREQUFPLENBQUM0eEIsRUFBRCxFQUFLLElBQUwsRUFBVyxZQUFNO0FBQ3RCQSxVQUFFLENBQUM3OEIsU0FBSCxDQUFhb1csTUFBYixDQUFvQiwyQkFBcEI7QUFDRCxPQUZNLENBQVA7QUFHQWpMLFFBQUU7QUFDSDtBQUNGLEdBWDZCLEVBVzNCLElBWDJCLENBQTlCO0FBWUQsQzs7Ozs7Ozs7Ozs7O0FDM1NEOzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLDZDQUE2Qyx3REFBd0QsRTs7Ozs7V0NBckc7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7O1VDTkE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FudmFzMkRGeEJhc2UsIGJvb3QgfSBmcm9tICcuL2xpYi9iYXNlJztcbmltcG9ydCB7IFN0cm9rZUFuaW1hdGlvbiwgU3dpcmw4Qml0LCBTdGFyU2t5IH0gZnJvbSAnLi9saWIvYW5pbWF0aW9uJztcbmltcG9ydCB7IGdldENhY2hlQ2FudmFzIH0gZnJvbSAnLi9saWIvdXRpbCc7XG5pbXBvcnQgeyBwbGF5ZXJzRGF0YSwgYmFsbERhdGEgfSBmcm9tICcuLi9kYXRhJztcbmltcG9ydCB7IGRyYXdSZWN0LCBkcmF3Q2lyY2xlIH0gZnJvbSAnLi9saWIvc2hhcGUnXG5pbXBvcnQgeyByYW5kb21XaXRoaW5SYW5nZSwgcGFkU3RyaW5nIH0gZnJvbSAnLi9saWIvZnVuY3Rpb24nO1xuXG5jb25zdCBERUZBVUxUID0ge1xuICBiZ0NvbG9yOiAncmdiYSgwLDAsMCwxKScsXG4gIGNvdXJ0Q29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LDEpJyxcbiAgY291cnRBc3BlY3RSYXRpbzogNSAvIDNcbn1cblxuZXhwb3J0IGNsYXNzIEVuZ2luZSBleHRlbmRzIENhbnZhczJERnhCYXNlIHtcbiAgY29uc3RydWN0b3IoZWxlLCBkZWZhdWx0Q29uZmlnLCBjb25maWcpIHtcbiAgICBzdXBlcihlbGUsIGRlZmF1bHRDb25maWcsIGNvbmZpZylcbiAgICB0aGlzLnBpeGVsQmFzZSA9IDE0NDA7XG4gICAgdGhpcy5pbml0KCk7XG4gICAgdGhpcy5mcHMgPSAzMDtcbiAgICB0aGlzLmNvdXJ0T2Zmc2V0ID0gNzU7XG4gICAgdGhpcy5jb3VydE9mZnNldE1vYmlsZSA9IDI1O1xuICAgIHRoaXMuZ2FtZVN0YXR1cyA9IDA7XG4gICAgdGhpcy5wYXVzZSA9IGZhbHNlO1xuICAgIHRoaXMucGxheWVyc1RoaWNrbmVzcyA9IDIwO1xuICAgIC8vMDogbm90IHN0YXJ0IHlldFxuICAgIC8vMTogY3VydGFpbiBhbmltYXRpbmdcbiAgICAvLzI6IGNvdXJ0IGFuaW1hdGluZ1xuICAgIC8vMzogYW5pbWF0aW5nIHBsYXllcnMgYW5kIHNjcm9lYm9hcmRcbiAgICAvLzQ6IGdhbWUgaXMgcmVhZHlcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5jdXJ0YWluID0gdGhpcy5nZW5DdXJ0YWluKCk7Ly8g5pyA5bqV5bGkY2FudmFzXG4gICAgdGhpcy5jb3VydCA9IHRoaXMuZ2VuQ291cnQoKTsvL+acgOW6leWxpGNhbnZhc1xuICAgIHRoaXMuc3RhclNreSA9IHRoaXMuZ2VuU3RhclNreSgpOy8v5YCS5pW456ys5LqM5bGkY2FudmFzXG4gICAgdGhpcy5wbGF5ZXJzID0gdGhpcy5nZW5QbGF5ZXJzKCk7Ly/lgJLmlbjnrKzkuInlsaRjYW52YXNcbiAgICB0aGlzLmJhbGwgPSB0aGlzLmdlbkJhbGwoKTsvL+WAkuaVuOesrOWbm+WxpGNhbnZhc1xuICAgIHRoaXMuc2NvcmVib2FyZHMgPSB0aGlzLmdlblNjb3JlYm9hcmRzKCk7Ly/mnIDooajlsaRjYW52YXNcbiAgICB0aGlzLmluaXRSZXNpemVkKCk7XG4gIH1cblxuICBpbml0UmVzaXplZCgpIHtcbiAgICB0aGlzLnJlc2l6ZWRDYWxsYmFjayA9ICgpID0+IHtcbiAgICAgIHRoaXMuY3VydGFpbi5kcmF3U3RhdGljKClcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLmdhbWVTdGF0dXMgPT09IDMpIHtcbiAgICAgICAgICAgIHRoaXMuYmFja2dyb3VuZCgnYmxhY2snKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5jb3VydC5kcmF3U3RhdGljKCk7XG4gICAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgZ2VuQ3VydGFpbihiYW5kV2lkdGggPSAzMCkge1xuICAgIGxldCBjdXJ0YWluQ2FudmFzSW5zdGFuY2UgPSB0aGlzLmN1cnRhaW5DYW52YXNJbnN0YW5jZSA9IHRoaXMuY3JlYXRlVmlydHVhbENhbnZhc0Jhc2VJbnN0YW5jZSgpO1xuICAgIGN1cnRhaW5DYW52YXNJbnN0YW5jZS5zZXRDYW52YXNTaXplKHRoaXMuY3ZzLndpZHRoLCB0aGlzLmN2cy5oZWlnaHQpO1xuICAgIGxldCBjdXJ0YWluQW5pbWF0aW9uSW5zdGFuY2UgPSBuZXcgU3dpcmw4Qml0KGN1cnRhaW5DYW52YXNJbnN0YW5jZS5jdHgpO1xuICAgIGxldCBjdXJ0YWluID0ge1xuICAgICAgYW5pbWF0ZTogKCkgPT4ge1xuICAgICAgICBsZXQgaW5pdGlhbEltYWdlID0gZ2V0Q2FjaGVDYW52YXModGhpcy5jdHgpO1xuICAgICAgICBsZXQgcHJvbWlzZSA9IGN1cnRhaW5BbmltYXRpb25JbnN0YW5jZS5hbmltYXRlKGZhbHNlLCBiYW5kV2lkdGgsIHRoaXMuY29uZmlnLmJnQ29sb3IpO1xuICAgICAgICBsZXQgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShpbml0aWFsSW1hZ2UsIDAsIDAsIHRoaXMuY3ZzLndpZHRoLCB0aGlzLmN2cy5oZWlnaHQsIDAsIDAsIHRoaXMuY3ZzLndpZHRoLCB0aGlzLmN2cy5oZWlnaHQpO1xuICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShjdXJ0YWluQ2FudmFzSW5zdGFuY2UuY3ZzLCAwLCAwLCBjdXJ0YWluQ2FudmFzSW5zdGFuY2UuY3ZzLndpZHRoLCBjdXJ0YWluQ2FudmFzSW5zdGFuY2UuY3ZzLmhlaWdodCwgMCwgMCwgdGhpcy5jdnMud2lkdGgsIHRoaXMuY3ZzLmhlaWdodCk7XG4gICAgICAgIH0sIHRoaXMuZnBzKTtcbiAgICAgICAgcmV0dXJuIHByb21pc2UudGhlbigoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMpID0+IHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgICAgcmVzKCk7XG4gICAgICAgICAgICB9LCA1MDApXG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBkcmF3U3RhdGljOiAoKSA9PiB7IC8vXG4gICAgICAgIGxldCB0cmlnZ2VyO1xuICAgICAgICBsZXQgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xuICAgICAgICAgIHRyaWdnZXIgPSByZXM7XG4gICAgICAgIH0pXG4gICAgICAgIGxldCBzdGF0aWNJbWFnZSA9IGN1cnRhaW5DYW52YXNJbnN0YW5jZS5jdnM7XG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcbiAgICAgICAgICBzdGF0aWNJbWFnZSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgc3RhdGljSW1hZ2Uud2lkdGgsXG4gICAgICAgICAgc3RhdGljSW1hZ2UuaGVpZ2h0LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICB0aGlzLmN2cy53aWR0aCxcbiAgICAgICAgICB0aGlzLmN2cy5oZWlnaHRcbiAgICAgICAgKVxuICAgICAgICB0cmlnZ2VyKCk7XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIGN1cnRhaW47XG4gIH1cblxuICBnZXRBc3BlY3RSYXRpbygpIHtcbiAgICByZXR1cm4gdGhpcy5jdnMud2lkdGggLyB0aGlzLmN2cy5oZWlnaHQ7XG4gIH1cblxuICByZXNwb25zaXZlUGFpbnRlcih0YXJnZXRMYXllciwgc291cmNlQ2FudmFzLCBpbml0aWFsSW1hZ2UpIHtcbiAgICBsZXQgb2Zmc2V0ID0gdGhpcy5jb3VydE9mZnNldDtcbiAgICBsZXQgb2Zmc2V0TW9iaWxlID0gdGhpcy5jb3VydE9mZnNldE1vYmlsZTtcbiAgICB0YXJnZXRMYXllci5jdHguc2F2ZSgpO1xuICAgIC8v55WrY291cnQg5pyD5pyJ5Zub56iu54uA5rOBLCAoY2FudmFz6ZW35a+sPumgkOioremVt+WvrOavlD4xKSB8ICgxPD1jYW52YXPplbflr6w86aCQ6Kit6ZW35a+s5q+UKSB8ICjpoJDoqK3plbflr6zmr5TlgJLmlbg8Y2FudmFz6ZW35a+s5q+UPDEpIO+9nCAoY2FudmFz6ZW35a+s5q+UPOmgkOioremVt+WvrOavlOWAkuaVuDwxKVxuICAgIGlmICh0aGlzLmdldEFzcGVjdFJhdGlvKCkgPj0gMSkge1xuICAgICAgLy8g6YCZ6YKK5piv5YmN5YWp56iu54uA5rOBXG4gICAgICAvL+WFiOa4hemZpOS4gOasoeS5i+W+jOeVq2luaXRpYWxJbWFnZSAsIOWGjeeVq2NvdXJ0XG4gICAgICB0YXJnZXRMYXllci5jbGVhcigpO1xuICAgICAgbGV0IHR5cGVBID0gKHRhcmdldExheWVyLmN2cy5oZWlnaHQgLSAyICogb2Zmc2V0KSAqIHRoaXMuY29uZmlnLmNvdXJ0QXNwZWN0UmF0aW8gPCB0YXJnZXRMYXllci5jdnMud2lkdGggLSAyICogb2Zmc2V0O1xuICAgICAgbGV0IG9mZnNldFYsIG9mZnNldEgsIGNvdXJ0SGVpZ2h0LCBjb3VydFdpZHRoO1xuICAgICAgaWYgKHR5cGVBKSB7XG4gICAgICAgIC8vIOWFiOeul+WHuue4rua4m+mBjm9mZnNldCDnmoRjdnMg5a+sXG4gICAgICAgIG9mZnNldFYgPSBvZmZzZXQ7XG4gICAgICAgIGNvdXJ0SGVpZ2h0ID0gdGFyZ2V0TGF5ZXIuY3ZzLmhlaWdodCAtIDIgKiBvZmZzZXQ7XG4gICAgICAgIGNvdXJ0V2lkdGggPSBjb3VydEhlaWdodCAqIHRoaXMuY29uZmlnLmNvdXJ0QXNwZWN0UmF0aW87XG4gICAgICAgIG9mZnNldEggPSAodGFyZ2V0TGF5ZXIuY3ZzLndpZHRoIC0gY291cnRXaWR0aCkgLyAyO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIC8vIOmdnnR5cGVB55qE54uA5rOBLCDkuZ/lsLHmmK9jYW52YXPlr6zpq5jmr5TkvY7mlrxjb25maWcg6Kit5a6a55qE5q+U5L6LXG4gICAgICAgIG9mZnNldEggPSBvZmZzZXQ7XG4gICAgICAgIGNvdXJ0V2lkdGggPSB0YXJnZXRMYXllci5jdnMud2lkdGggLSAyICogb2Zmc2V0O1xuICAgICAgICBjb3VydEhlaWdodCA9IGNvdXJ0V2lkdGggLyB0aGlzLmNvbmZpZy5jb3VydEFzcGVjdFJhdGlvO1xuICAgICAgICBvZmZzZXRWID0gKHRhcmdldExheWVyLmN2cy5oZWlnaHQgLSBjb3VydEhlaWdodCkgLyAyO1xuICAgICAgfVxuICAgICAgaWYgKGluaXRpYWxJbWFnZSkge1xuICAgICAgICB0YXJnZXRMYXllci5jdHguZHJhd0ltYWdlKFxuICAgICAgICAgIGluaXRpYWxJbWFnZSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgaW5pdGlhbEltYWdlLndpZHRoLFxuICAgICAgICAgIGluaXRpYWxJbWFnZS5oZWlnaHQsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIHRhcmdldExheWVyLmN2cy53aWR0aCxcbiAgICAgICAgICB0YXJnZXRMYXllci5jdnMuaGVpZ2h0XG4gICAgICAgIClcblxuICAgICAgfVxuICAgICAgLy8g5YWI5peL6L2J55Wr5biDLCDlm6DngrogdmlydHVhbGNhbnZhcyDmmK/kuIDlvLXlnoLnm7TnmoTnlavluINcbiAgICAgIHRhcmdldExheWVyLmN0eC50cmFuc2xhdGUodGFyZ2V0TGF5ZXIuY3ZzLndpZHRoIC8gMiwgdGFyZ2V0TGF5ZXIuY3ZzLmhlaWdodCAvIDIpO1xuICAgICAgdGFyZ2V0TGF5ZXIuY3R4LnJvdGF0ZSgtTWF0aC5QSSAvIDIpO1xuICAgICAgdGFyZ2V0TGF5ZXIuY3R4LnRyYW5zbGF0ZSgtdGFyZ2V0TGF5ZXIuY3ZzLmhlaWdodCAvIDIsIC10YXJnZXRMYXllci5jdnMud2lkdGggLyAyKTtcbiAgICAgIC8vIOWboOeCumNvdXJ0IOeahOWkp+Wwj+acg+maqOiRl2NhbnZhcyDnmoTplbflr6zmr5TogIzororli5VcbiAgICAgIC8vIOmAmemCiuWFiCDlgYfoqK3ku4rlpKnmmK9jYW52YXMg5a+s5q+U6auY6LaF5Ye65b6I5aSa55qE5oOF5rOBICwg5Lmf5bCx5piv54uA5rOBXCJ0eXBlQVwiXG4gICAgICB0YXJnZXRMYXllci5jdHguZHJhd0ltYWdlKFxuICAgICAgICBzb3VyY2VDYW52YXMsXG4gICAgICAgIDAsXG4gICAgICAgIDAsXG4gICAgICAgIHNvdXJjZUNhbnZhcy53aWR0aCxcbiAgICAgICAgc291cmNlQ2FudmFzLmhlaWdodCxcbiAgICAgICAgb2Zmc2V0VixcbiAgICAgICAgb2Zmc2V0SCxcbiAgICAgICAgY291cnRIZWlnaHQsXG4gICAgICAgIGNvdXJ0V2lkdGhcbiAgICAgIClcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAvL+mAmemCiuaYr+W+jOWFqeeorueLgOazgVxuICAgICAgLy8g5Zug54K6Y291cnQg55qE5aSn5bCP5pyD6Zqo6JGXY2FudmFzIOeahOmVt+WvrOavlOiAjOiuiuWLlVxuICAgICAgLy8g6YCZ6YKK5YWIIOWBh+ioreS7iuWkqeaYr2NhbnZhcyDpq5jmr5Tlr6zmr5TotoXlh7rlvojlpJrnmoTmg4Xms4EgLCDkuZ/lsLHmmK/ni4Dms4FcInR5cGVBXCJcbiAgICAgIGxldCB0eXBlQSA9ICh0YXJnZXRMYXllci5jdnMud2lkdGggLSAyICogb2Zmc2V0TW9iaWxlKSAqIHRoaXMuY29uZmlnLmNvdXJ0QXNwZWN0UmF0aW8gPCB0YXJnZXRMYXllci5jdnMuaGVpZ2h0IC0gMiAqIG9mZnNldDtcbiAgICAgIGxldCBvZmZzZXRWLCBvZmZzZXRILCBjb3VydEhlaWdodCwgY291cnRXaWR0aDtcbiAgICAgIGlmICh0eXBlQSkge1xuICAgICAgICAvLyDlhYjnrpflh7rnuK7muJvpgY5vZmZzZXQg55qEY3ZzIOWvrFxuICAgICAgICBvZmZzZXRIID0gb2Zmc2V0TW9iaWxlO1xuICAgICAgICBjb3VydFdpZHRoID0gdGFyZ2V0TGF5ZXIuY3ZzLndpZHRoIC0gMiAqIG9mZnNldE1vYmlsZTtcbiAgICAgICAgY291cnRIZWlnaHQgPSBjb3VydFdpZHRoICogdGhpcy5jb25maWcuY291cnRBc3BlY3RSYXRpbztcbiAgICAgICAgb2Zmc2V0ViA9ICh0YXJnZXRMYXllci5jdnMuaGVpZ2h0IC0gY291cnRIZWlnaHQpIC8gMjtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICAvLyDpnZ50eXBlQeeahOeLgOazgSwg5Lmf5bCx5pivY2FudmFz5a+s6auY5q+U5L2O5pa8Y29uZmlnIOioreWumueahOavlOS+i1xuICAgICAgICBvZmZzZXRWID0gb2Zmc2V0O1xuICAgICAgICBjb3VydEhlaWdodCA9IHRhcmdldExheWVyLmN2cy5oZWlnaHQgLSAyICogb2Zmc2V0O1xuICAgICAgICBjb3VydFdpZHRoID0gY291cnRIZWlnaHQgLyB0aGlzLmNvbmZpZy5jb3VydEFzcGVjdFJhdGlvO1xuICAgICAgICBvZmZzZXRIID0gKHRhcmdldExheWVyLmN2cy53aWR0aCAtIGNvdXJ0V2lkdGgpIC8gMjtcbiAgICAgIH1cbiAgICAgIGlmIChpbml0aWFsSW1hZ2UpIHtcbiAgICAgICAgdGFyZ2V0TGF5ZXIuY3R4LmRyYXdJbWFnZShcbiAgICAgICAgICBpbml0aWFsSW1hZ2UsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIGluaXRpYWxJbWFnZS53aWR0aCxcbiAgICAgICAgICBpbml0aWFsSW1hZ2UuaGVpZ2h0LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICB0YXJnZXRMYXllci5jdnMud2lkdGgsXG4gICAgICAgICAgdGFyZ2V0TGF5ZXIuY3ZzLmhlaWdodFxuICAgICAgICApXG4gICAgICB9XG4gICAgICB0YXJnZXRMYXllci5jdHguZHJhd0ltYWdlKFxuICAgICAgICBzb3VyY2VDYW52YXMsXG4gICAgICAgIDAsXG4gICAgICAgIDAsXG4gICAgICAgIHNvdXJjZUNhbnZhcy53aWR0aCxcbiAgICAgICAgc291cmNlQ2FudmFzLmhlaWdodCxcbiAgICAgICAgb2Zmc2V0SCxcbiAgICAgICAgb2Zmc2V0VixcbiAgICAgICAgY291cnRXaWR0aCxcbiAgICAgICAgY291cnRIZWlnaHRcbiAgICAgIClcbiAgICB9XG5cbiAgICB0YXJnZXRMYXllci5jdHgucmVzdG9yZSgpO1xuICB9XG5cbiAgZ2VuQ291cnQoc3Ryb2tlV2lkdGggPSAxMCkge1xuICAgIGxldCBjb3VydENhbnZhc0luc3RhbmNlID0gdGhpcy5jb3VydENhbnZhc0luc3RhbmNlID0gdGhpcy5jcmVhdGVWaXJ0dWFsQ2FudmFzQmFzZUluc3RhbmNlKCk7XG4gICAgbGV0IGNvdXJ0Q2FudmFzV2lkdGggPSB0aGlzLnBpeGVsQmFzZSAvIHRoaXMuY29uZmlnLmNvdXJ0QXNwZWN0UmF0aW87XG4gICAgbGV0IGNvdXJ0Q2FudmFzSGVpZ2h0ID0gdGhpcy5waXhlbEJhc2U7XG4gICAgY291cnRDYW52YXNJbnN0YW5jZS5zZXRDYW52YXNTaXplKGNvdXJ0Q2FudmFzV2lkdGgsIGNvdXJ0Q2FudmFzSGVpZ2h0KTtcbiAgICBsZXQgdmVydGljZXMgPSBbXG4gICAgICB7IHg6IDAsIHk6IDAgfSxcbiAgICAgIHsgeDogY291cnRDYW52YXNJbnN0YW5jZS5jdnMud2lkdGgsIHk6IDAgfSxcbiAgICAgIHsgeDogY291cnRDYW52YXNJbnN0YW5jZS5jdnMud2lkdGgsIHk6IGNvdXJ0Q2FudmFzSW5zdGFuY2UuY3ZzLmhlaWdodCB9LFxuICAgICAgeyB4OiAwLCB5OiBjb3VydENhbnZhc0luc3RhbmNlLmN2cy5oZWlnaHQgfSxcbiAgICAgIHsgeDogMCwgeTogMCB9XG4gICAgXTtcblxuICAgIGxldCBzdHJva2VBbmltYXRpb25JbnN0YW5jZSA9IG5ldyBTdHJva2VBbmltYXRpb24oY291cnRDYW52YXNJbnN0YW5jZS5jdHgsIHZlcnRpY2VzKTtcblxuICAgIGxldCBjb3VydCA9IHtcbiAgICAgIGFuaW1hdGU6ICgpID0+IHtcbiAgICAgICAgY291cnQuaW5pdGlhbEltYWdlID0gZ2V0Q2FjaGVDYW52YXModGhpcy5jdHgpO1xuICAgICAgICBsZXQgcHJvbWlzZSA9IHN0cm9rZUFuaW1hdGlvbkluc3RhbmNlLmFuaW1hdGUoc3Ryb2tlV2lkdGgsIHRoaXMuY29uZmlnLmNvdXJ0Q29sb3IpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIGxldCB2ZXJ0aWNlcyA9IFtcbiAgICAgICAgICAgIHsgeDogMCwgeTogY291cnRDYW52YXNJbnN0YW5jZS5jdnMuaGVpZ2h0IC8gMiB9LFxuICAgICAgICAgICAgeyB4OiBjb3VydENhbnZhc0luc3RhbmNlLmN2cy53aWR0aCwgeTogY291cnRDYW52YXNJbnN0YW5jZS5jdnMuaGVpZ2h0IC8gMiB9LFxuICAgICAgICAgIF1cbiAgICAgICAgICByZXR1cm4gbmV3IFN0cm9rZUFuaW1hdGlvbihjb3VydENhbnZhc0luc3RhbmNlLmN0eCwgdmVydGljZXMpLmFuaW1hdGUoc3Ryb2tlV2lkdGgsIHRoaXMuY29uZmlnLmNvdXJ0Q29sb3IsIGZhbHNlLCBbMTAsIDMwXSwgJ3RyYW5zcGFyZW50Jyk7XG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5yZXNwb25zaXZlUGFpbnRlcih0aGlzLCBjb3VydENhbnZhc0luc3RhbmNlLmN2cywgY291cnQuaW5pdGlhbEltYWdlKTtcbiAgICAgICAgfSwgdGhpcy5mcHMpXG4gICAgICAgIHJldHVybiBwcm9taXNlLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzKSA9PiB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICAgICAgIHJlcygpO1xuICAgICAgICAgICAgfSwgNTAwKVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG5cbiAgICAgIH0sXG4gICAgICBkcmF3U3RhdGljOiAoKSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcbiAgICAgICAgICB0aGlzLnJlc3BvbnNpdmVQYWludGVyKHRoaXMsIGNvdXJ0Q2FudmFzSW5zdGFuY2UuY3ZzLCBjb3VydC5pbml0aWFsSW1hZ2UpO1xuICAgICAgICAgIHJlcygpO1xuICAgICAgICB9KVxuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gY291cnQ7XG4gIH1cblxuICBnZW5TdGFyU2t5KCkge1xuICAgIGxldCBzdGFyU2t5Q2FudmFzSW5zdGFuY2UgPSB0aGlzLnN0YXJTa3lDYW52YXNJbnN0YW5jZSA9IHRoaXMuYWRkTmV3TGF5ZXIoKTtcbiAgICBsZXQgc3RhclNreUFuaW1hdGlvbkluc3RhbmNlID0gbmV3IFN0YXJTa3koc3RhclNreUNhbnZhc0luc3RhbmNlLmN0eCk7XG4gICAgc3RhclNreUNhbnZhc0luc3RhbmNlLnJlc2l6ZWRDYWxsYmFjayA9IHN0YXJTa3lBbmltYXRpb25JbnN0YW5jZS5yZWZyZXNoU3RhcnMuYmluZChzdGFyU2t5QW5pbWF0aW9uSW5zdGFuY2UpO1xuICAgIHJldHVybiBzdGFyU2t5QW5pbWF0aW9uSW5zdGFuY2U7XG4gIH1cblxuXG4gIGdlblBsYXllcnMod2lkdGhQcmFtID0gMTAsIGdhcFJhdGlvID0gMC4wNSwgY29sb3IgPSAnd2hpdGUnLCB0aGlja25lc3MgPSAyMCkge1xuICAgIHRoaXMucGxheWVyc1RoaWNrbmVzcyA9IHRoaWNrbmVzcztcbiAgICBsZXQgcGxheWVyc0NhbnZhc0luc3RhbmNlID0gdGhpcy5wbGF5ZXJzQ2FudmFzSW5zdGFuY2UgPSB0aGlzLmFkZE5ld0xheWVyKCk7XG4gICAgbGV0IHBsYXllcnNWaXJ0dWFsQ2FudmFzSW5zdGFuY2UgPSB0aGlzLnBsYXllcnNWaXJ0dWFsQ2FudmFzSW5zdGFuY2UgPSB0aGlzLmNyZWF0ZVZpcnR1YWxDYW52YXNCYXNlSW5zdGFuY2UoKTtcbiAgICBwbGF5ZXJzVmlydHVhbENhbnZhc0luc3RhbmNlLnNldENhbnZhc1NpemUodGhpcy5jb3VydENhbnZhc0luc3RhbmNlLmN2cy53aWR0aCwgdGhpcy5jb3VydENhbnZhc0luc3RhbmNlLmN2cy5oZWlnaHQpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5ZXJzRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgcGxheWVyc0RhdGFbaV0ud2lkdGggPSAodGhpcy5waXhlbEJhc2UgLyB0aGlzLmNvbmZpZy5jb3VydEFzcGVjdFJhdGlvKSAvIHdpZHRoUHJhbTtcbiAgICAgIHBsYXllcnNEYXRhW2ldLnBvc2l0aW9uLnggPSB0aGlzLmNvdXJ0Q2FudmFzSW5zdGFuY2UuY3ZzLndpZHRoIC8gMjtcbiAgICAgIGlmIChpID09PSAwKSB7XG4gICAgICAgIHBsYXllcnNEYXRhW2ldLnBvc2l0aW9uLnkgPSB0aGlzLmNvdXJ0Q2FudmFzSW5zdGFuY2UuY3ZzLmhlaWdodCAqICgxIC0gZ2FwUmF0aW8pXG4gICAgICB9XG4gICAgICBlbHNlIGlmIChpID09PSAxKSB7XG4gICAgICAgIHBsYXllcnNEYXRhW2ldLnBvc2l0aW9uLnkgPSB0aGlzLmNvdXJ0Q2FudmFzSW5zdGFuY2UuY3ZzLmhlaWdodCAqIGdhcFJhdGlvXG4gICAgICB9XG4gICAgfVxuICAgIGxldCBwbGF5ZXJzID0ge1xuICAgICAgcmVhZHk6ICgpID0+IHtcbiAgICAgICAgbGV0IHRyaWdnZXI7XG4gICAgICAgIGxldCBwcm9taXNlID0gbmV3IFByb21pc2UocmVzID0+IHtcbiAgICAgICAgICB0cmlnZ2VyID0gcmVzO1xuICAgICAgICB9KVxuICAgICAgICBsZXQgb3BhY2l0eSA9IDA7XG4gICAgICAgIGxldCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICBpZiAob3BhY2l0eSA+PSAxKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgIHRyaWdnZXIoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5ZXJzRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZHJhd1JlY3QocGxheWVyc1ZpcnR1YWxDYW52YXNJbnN0YW5jZS5jdHgsIHBsYXllcnNEYXRhW2ldLnBvc2l0aW9uLngsIHBsYXllcnNEYXRhW2ldLnBvc2l0aW9uLnksIHBsYXllcnNEYXRhW2ldLndpZHRoLCB0aGlja25lc3MsIGNvbG9yLCBvcGFjaXR5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5yZXNwb25zaXZlUGFpbnRlcihwbGF5ZXJzQ2FudmFzSW5zdGFuY2UsIHBsYXllcnNWaXJ0dWFsQ2FudmFzSW5zdGFuY2UuY3ZzKTtcbiAgICAgICAgICBvcGFjaXR5ICs9IDAuMDE7XG4gICAgICAgIH0sIHRoaXMuZnBzKVxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICAgIH0sXG5cbiAgICAgIGxvb3BVcGRhdGU6ICgpID0+IHtcbiAgICAgICAgbGV0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgIHBsYXllcnNWaXJ0dWFsQ2FudmFzSW5zdGFuY2UuY2xlYXIoKTtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBsYXllcnNEYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBkcmF3UmVjdChwbGF5ZXJzVmlydHVhbENhbnZhc0luc3RhbmNlLmN0eCwgcGxheWVyc0RhdGFbaV0ucG9zaXRpb24ueCwgcGxheWVyc0RhdGFbaV0ucG9zaXRpb24ueSwgcGxheWVyc0RhdGFbaV0ud2lkdGgsIHRoaWNrbmVzcywgY29sb3IsIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnJlc3BvbnNpdmVQYWludGVyKHBsYXllcnNDYW52YXNJbnN0YW5jZSwgcGxheWVyc1ZpcnR1YWxDYW52YXNJbnN0YW5jZS5jdnMpO1xuICAgICAgICB9LCB0aGlzLmZwcylcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcGxheWVycztcbiAgfVxuXG4gIGdlblNjb3JlYm9hcmRzKCkge1xuICAgIGxldCBzY29yZWJvYXJkc0xheWVyID0gdGhpcy5hZGREaXZMYXllcignc2NvcmVib2FyZHMnLCAnc2NvcmVib2FyZHMnKTtcbiAgICBsZXQgdG9wQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IGJvdEJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvcEJhci5jbGFzc0xpc3QuYWRkKCdzY29yZWJvYXJkc19fdG9wLWJhcicpO1xuICAgIGJvdEJhci5jbGFzc0xpc3QuYWRkKCdzY29yZWJvYXJkc19fYm90LWJhcicpO1xuICAgIHNjb3JlYm9hcmRzTGF5ZXIuYXBwZW5kKHRvcEJhciwgYm90QmFyKTtcbiAgICBsZXQgZ2VuUGxheWVyU2hvd2Nhc2UgPSAocGxheWVyTmFtZSwgcGxheWVySWQsIHNjb3JlTWF4KSA9PiB7XG5cbiAgICAgIGxldCBwbGF5ZXJTaG93Q2FzZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgcGxheWVyU2hvd0Nhc2UuY2xhc3NMaXN0LmFkZCgncGxheWVyLXNob3djYXNlJyk7XG4gICAgICBwbGF5ZXJTaG93Q2FzZS5pZCA9IGBwbGF5ZXIke3BsYXllcklkfWA7XG4gICAgICBsZXQgaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwicGxheWVyLXNob3djYXNlX19uYW1lXCI+JHtwbGF5ZXJOYW1lfTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicGxheWVyLXNob3djYXNlX19zY29yZVwiPlxuICAgICAgICAgIDAwMDAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICBgXG4gICAgICBwbGF5ZXJTaG93Q2FzZS5pbm5lckhUTUwgPSBpbm5lckhUTUw7XG4gICAgICByZXR1cm4gcGxheWVyU2hvd0Nhc2U7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVyc0RhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRvcEJhci5hcHBlbmQoZ2VuUGxheWVyU2hvd2Nhc2UocGxheWVyc0RhdGFbaV0ubmFtZSwgcGxheWVyc0RhdGFbaV0uaWQsIDUpKVxuICAgIH1cbiAgICBsZXQgc2NvcmVib2FyZHMgPSB7XG4gICAgICB1cGRhdGU6ICgpID0+IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5ZXJzRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHNjb3JlYm9hcmRzTGF5ZXIucXVlcnlTZWxlY3RvcihgI3BsYXllciR7aX1gKS5xdWVyeVNlbGVjdG9yKCcucGxheWVyLXNob3djYXNlX19uYW1lJykuaW5uZXJIVE1MID0gcGxheWVyc0RhdGFbaV0ubmFtZTtcbiAgICAgICAgICBzY29yZWJvYXJkc0xheWVyLnF1ZXJ5U2VsZWN0b3IoYCNwbGF5ZXIke2l9YCkucXVlcnlTZWxlY3RvcignLnBsYXllci1zaG93Y2FzZV9fc2NvcmUnKS5pbm5lckhUTUwgPSBwYWRTdHJpbmcocGxheWVyc0RhdGFbaV0uc2NvcmUsIDQpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgcmVhZHk6ICgpID0+IHtcbiAgICAgICAgc2NvcmVib2FyZHNMYXllci5jbGFzc0xpc3QuYWRkKCdzY29yZWJvYXJkcy0tcmVhZHknKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc2NvcmVib2FyZHNcbiAgfVxuXG4gIGdlbkJhbGwoc3BlZWQgPSAxMDAsIHNpemUgPSAzMCwgY29sb3IgPSAnd2hpdGUnKSB7XG4gICAgbGV0IGJhbGxDYW52YXNJbnN0YW5jZSA9IHRoaXMuYmFsbENhbnZhc0luc3RhbmNlID0gdGhpcy5hZGROZXdMYXllcigpO1xuICAgIGxldCBiYWxsVmlydHVhbENhbnZhc0luc3RhbmNlID0gdGhpcy5iYWxsVmlydHVhbENhbnZhc0luc3RhbmNlID0gdGhpcy5jcmVhdGVWaXJ0dWFsQ2FudmFzQmFzZUluc3RhbmNlKCk7XG4gICAgYmFsbFZpcnR1YWxDYW52YXNJbnN0YW5jZS5zZXRDYW52YXNTaXplKHRoaXMuY291cnRDYW52YXNJbnN0YW5jZS5jdnMud2lkdGgsIHRoaXMuY291cnRDYW52YXNJbnN0YW5jZS5jdnMuaGVpZ2h0KTtcblxuICAgIC8vaW5pdCBiYWxsRGF0YVxuXG4gICAgYmFsbERhdGEuc3BlZWQgPSB7XG4gICAgICB4OiByYW5kb21XaXRoaW5SYW5nZSgwLCBzcGVlZCksXG4gICAgICB5OiByYW5kb21XaXRoaW5SYW5nZSgwLCBzcGVlZClcbiAgICB9XG4gICAgYmFsbERhdGEuc2l6ZSA9IHNpemU7XG4gICAgYmFsbERhdGEuY29sb3IgPSBjb2xvcjtcbiAgICBiYWxsRGF0YS5wb3NpdGlvbiA9IHtcbiAgICAgIHg6IHBsYXllcnNEYXRhWzBdLnBvc2l0aW9uLngsIC8v5oi/5Li75YWI5oyB55CDXG4gICAgICB5OiBwbGF5ZXJzRGF0YVswXS5wb3NpdGlvbi55IC0gdGhpcy5wbGF5ZXJzVGhpY2tuZXNzIC0gMTBcbiAgICB9O1xuXG4gICAgbGV0IGJhbGwgPSB7XG4gICAgICByZWFkeTogKCkgPT4ge1xuICAgICAgICBsZXQgdHJpZ2dlcjtcbiAgICAgICAgbGV0IHByb21pc2UgPSBuZXcgUHJvbWlzZShyZXMgPT4ge1xuICAgICAgICAgIHRyaWdnZXIgPSByZXM7XG4gICAgICAgIH0pXG4gICAgICAgIGxldCBvcGFjaXR5ID0gMDtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgbGV0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKG9wYWNpdHkgPj0gMSkge1xuICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgICAgdHJpZ2dlcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZHJhd0NpcmNsZShiYWxsVmlydHVhbENhbnZhc0luc3RhbmNlLmN0eCwgYmFsbERhdGEucG9zaXRpb24ueCwgYmFsbERhdGEucG9zaXRpb24ueSwgYmFsbERhdGEuc2l6ZSwgYmFsbERhdGEuY29sb3IsIG9wYWNpdHkpO1xuICAgICAgICAgICAgdGhpcy5yZXNwb25zaXZlUGFpbnRlcihiYWxsQ2FudmFzSW5zdGFuY2UsIGJhbGxWaXJ0dWFsQ2FudmFzSW5zdGFuY2UuY3ZzKTtcblxuICAgICAgICAgICAgb3BhY2l0eSArPSAwLjAxO1xuICAgICAgICAgIH0sIHRoaXMuZnBzKVxuICAgICAgICB9LCA1MDApXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgICAgfSxcbiAgICAgIGxvb3BVcGRhdGU6ICgpID0+IHtcbiAgICAgICAgbGV0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgIGJhbGxWaXJ0dWFsQ2FudmFzSW5zdGFuY2UuY2xlYXIoKTtcbiAgICAgICAgICBkcmF3Q2lyY2xlKGJhbGxWaXJ0dWFsQ2FudmFzSW5zdGFuY2UuY3R4LCBiYWxsRGF0YS5wb3NpdGlvbi54LCBiYWxsRGF0YS5wb3NpdGlvbi55LCBiYWxsRGF0YS5zaXplLCBiYWxsRGF0YS5jb2xvcik7XG4gICAgICAgICAgdGhpcy5yZXNwb25zaXZlUGFpbnRlcihiYWxsQ2FudmFzSW5zdGFuY2UsIGJhbGxWaXJ0dWFsQ2FudmFzSW5zdGFuY2UuY3ZzKTtcbiAgICAgICAgfSwgdGhpcy5mcHMpXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBiYWxsO1xuICB9XG5cbiAgZHJhd0dhbWUoKSB7XG4gICAgdGhpcy5nYW1lU3RhdHVzID0gMTtcbiAgICB0aGlzLnN0YXJTa3kuYW5pbWF0ZSgpO1xuICAgIGxldCBwcm9taXNlID0gdGhpcy5jdXJ0YWluLmFuaW1hdGUoKTtcbiAgICBwcm9taXNlXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMuZ2FtZVN0YXR1cyA9IDI7XG4gICAgICAgIHJldHVybiB0aGlzLmNvdXJ0LmFuaW1hdGUoKTtcbiAgICAgIH0pXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMuZ2FtZVN0YXR1cyA9IDM7XG4gICAgICAgIGxldCBwbGF5ZXJzUmVhZHkgPSB0aGlzLnBsYXllcnMucmVhZHkoKTtcbiAgICAgICAgbGV0IGJhbGxSZWFkeSA9IHRoaXMuYmFsbC5yZWFkeSgpO1xuICAgICAgICBsZXQgc2NvcmVib2FyZHNSZWFkeSA9IHRoaXMuc2NvcmVib2FyZHMucmVhZHkoKTtcbiAgICAgICAgbGV0IGFsbFJlYWR5UHJvbWlzZSA9IFByb21pc2UuYWxsKFtcbiAgICAgICAgICBwbGF5ZXJzUmVhZHksIGJhbGxSZWFkeSwgc2NvcmVib2FyZHNSZWFkeVxuICAgICAgICBdKVxuICAgICAgICByZXR1cm4gYWxsUmVhZHlQcm9taXNlO1xuICAgICAgfSlcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5nYW1lU3RhdHVzID0gNDtcbiAgICAgICAgbGV0IGdhbWVSZWFkeVByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcbiAgICAgICAgICB0aGlzLmluaXRHYW1lRGF0YVVwZGF0ZUludGVydmFsKCk7XG4gICAgICAgICAgcmVzKCk7XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBnYW1lUmVhZHlQcm9taXNlO1xuICAgICAgfSlcbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfVxuXG4gIGluaXRHYW1lRGF0YVVwZGF0ZUludGVydmFsKCkge1xuICAgIHRoaXMucGxheWVycy5sb29wVXBkYXRlKCk7XG4gICAgdGhpcy5iYWxsLmxvb3BVcGRhdGUoKTtcbiAgfVxuXG5cblxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2FtZUJ1aWxkZXIoKSB7XG4gIGxldCBnYW1lID0gYm9vdChFbmdpbmUsIERFRkFVTFQsIHt9LCBkb2N1bWVudC5ib2R5KTtcbiAgZ2FtZS5wcm9taXNlLnRoZW4oKGluc3RhbmNlKSA9PiB7XG4gICAgZ2FtZS5jb250cm9sbGVyID0gaW5zdGFuY2U7XG4gIH0pXG4gIHJldHVybiBnYW1lO1xufVxuXG4iLCJpbXBvcnQgeyByYW5kb21XaXRoaW5SYW5nZSwgY2FsY1dheXBvaW50cyB9IGZyb20gJy4vZnVuY3Rpb24nO1xuaW1wb3J0IHsgZ2V0Q2FjaGVDYW52YXMgfSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IHsgZHJhd0NpcmNsZSB9IGZyb20gJy4vc2hhcGUnO1xuaW1wb3J0ICdwYXRoMmQtcG9seWZpbGwnO1xuXG5leHBvcnQgY2xhc3MgU3dpcmw4Qml0IHtcbiAgY29uc3RydWN0b3IoY3R4KSB7XG4gICAgdGhpcy5jb3VudGVyQ2xvY2t3aXNlQXJyID0gW1xuICAgICAgeyBuYW1lOiAndGwnLCB4OiAwLCB5OiAwIH0sXG4gICAgICB7IG5hbWU6ICdibCcsIHg6IDAsIHk6IDEgfSxcbiAgICAgIHsgbmFtZTogJ2JyJywgeDogMSwgeTogMSB9LFxuICAgICAgeyBuYW1lOiAndHInLCB4OiAxLCB5OiAwIH1cbiAgICBdXG4gICAgdGhpcy5jbG9ja3dpc2VBcnIgPSBbXG4gICAgICB7IG5hbWU6ICd0cicsIHg6IDEsIHk6IDAgfSxcbiAgICAgIHsgbmFtZTogJ2JyJywgeDogMSwgeTogMSB9LFxuICAgICAgeyBuYW1lOiAnYmwnLCB4OiAwLCB5OiAxIH0sXG4gICAgICB7IG5hbWU6ICd0bCcsIHg6IDAsIHk6IDAgfVxuICAgIF1cbiAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICB0aGlzLmN2cyA9IGN0eC5jYW52YXM7XG4gICAgdGhpcy5hbmltYXRpb25FbmRUcmlnZ2VyO1xuICAgIHRoaXMub3JkZXIgPSAwO1xuICAgIHRoaXMucGF0aCA9IG5ldyBQYXRoMkQoKTtcbiAgICB0aGlzLmluaXRpYWxJbWFnZSA9IGdldENhY2hlQ2FudmFzKHRoaXMuY3R4KTtcbiAgICB0aGlzLmJhbmRXaWR0aFN0YWNrID0gMDtcbiAgfVxuICBnZXRTdGFydExvY2F0aW9uKGNsb2Nrd2lzZSwgb3JkZXIsIHRvdGFsV2lkdGgsIHRvdGFsSGVpZ2h0KSB7XG4gICAgbGV0IGRpcmVjdGlvbkFyciA9IGNsb2Nrd2lzZSA/IHRoaXMuY2xvY2t3aXNlQXJyIDogdGhpcy5jb3VudGVyQ2xvY2t3aXNlQXJyO1xuXG4gICAgbGV0IGxvY2F0aW9uID0ge1xuICAgICAgbmFtZTogZGlyZWN0aW9uQXJyW29yZGVyXS5uYW1lLFxuICAgICAgeDogZGlyZWN0aW9uQXJyW29yZGVyXS54ICogdG90YWxXaWR0aCArIHRoaXMuYmFuZFdpZHRoU3RhY2ssXG4gICAgICB5OiBkaXJlY3Rpb25BcnJbb3JkZXJdLnkgKiB0b3RhbEhlaWdodCArIHRoaXMuYmFuZFdpZHRoU3RhY2tcbiAgICB9XG4gICAgcmV0dXJuIGxvY2F0aW9uO1xuICB9XG4gIGFuaW1hdGUoY2xvY2t3aXNlID0gZmFsc2UsIGJhbmRXaWR0aCA9IDIwLCBjb2xvciA9ICdyZ2JhKDAsMCwwLDEpJykge1xuICAgIGxldCBhbmltYXRpb25Qcm9taXNlID0gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XG4gICAgICB0aGlzLmFuaW1hdGlvbkVuZFRyaWdnZXIgPSByZXM7XG4gICAgfSlcbiAgICB0aGlzLmRyYXdTd2lybChjbG9ja3dpc2UsIGJhbmRXaWR0aCwgY29sb3IpO1xuXG4gICAgcmV0dXJuIGFuaW1hdGlvblByb21pc2U7XG4gIH1cblxuICBkcmF3U3dpcmwoY2xvY2t3aXNlLCBiYW5kV2lkdGgsIGNvbG9yKSB7XG4gICAgbGV0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgdGhpcy5wYXRoLmFkZFBhdGgodGhpcy5kcmFXUmFuZG9tQW5nbGVkQmFuZFBhdGgoXG4gICAgICAgIGJhbmRXaWR0aCxcbiAgICAgICAgdGhpcy5jdnMud2lkdGggLSAyICogdGhpcy5iYW5kV2lkdGhTdGFjayxcbiAgICAgICAgdGhpcy5jdnMuaGVpZ2h0IC0gMiAqIHRoaXMuYmFuZFdpZHRoU3RhY2ssXG4gICAgICAgIHRoaXMuZ2V0U3RhcnRMb2NhdGlvbihjbG9ja3dpc2UsIHRoaXMub3JkZXIsIHRoaXMuY3ZzLndpZHRoIC0gMiAqIHRoaXMuYmFuZFdpZHRoU3RhY2ssIHRoaXMuY3ZzLmhlaWdodCAtIDIgKiB0aGlzLmJhbmRXaWR0aFN0YWNrKSxcbiAgICAgICAgY29sb3IsXG4gICAgICAgIGNsb2Nrd2lzZVxuICAgICAgKSlcbiAgICAgIHRoaXMuY3R4LmZpbGwodGhpcy5wYXRoKTtcbiAgICAgIGlmICh0aGlzLmN2cy53aWR0aCAtIDIgKiB0aGlzLmJhbmRXaWR0aFN0YWNrID4gMCAmJiB0aGlzLmN2cy5oZWlnaHQgLSAyICogdGhpcy5iYW5kV2lkdGhTdGFjayA+IDApIHtcblxuICAgICAgICBpZiAodGhpcy5vcmRlciA8IDMpIHtcbiAgICAgICAgICB0aGlzLm9yZGVyKytcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB0aGlzLm9yZGVyID0gMDtcbiAgICAgICAgICB0aGlzLmJhbmRXaWR0aFN0YWNrICs9IGJhbmRXaWR0aDtcblxuICAgICAgICB9XG5cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgdGhpcy5hbmltYXRpb25FbmRUcmlnZ2VyKCk7XG4gICAgICB9XG5cbiAgICB9LCAzMClcbiAgfVxuXG4gIGRyYVdSYW5kb21BbmdsZWRCYW5kUGF0aChiYW5kV2lkdGgsIHdpZHRoLCBoZWlnaHQsIHBvaW50LCBjb2xvciwgY2xvY2t3aXNlKSB7XG4gICAgbGV0IHBhdGggPSBuZXcgUGF0aDJEKCk7XG4gICAgaWYgKHBvaW50Lm5hbWUgPT09ICd0bCcpIHtcbiAgICAgIHRoaXMuZHJhd0FuZ2xlZEJhbmRGcm9tVEwocGF0aCwgYmFuZFdpZHRoLCB3aWR0aCwgaGVpZ2h0LCBwb2ludCwgY2xvY2t3aXNlKTtcbiAgICB9XG4gICAgZWxzZSBpZiAocG9pbnQubmFtZSA9PT0gJ2JsJykge1xuICAgICAgdGhpcy5kcmF3QW5nbGVkQmFuZEZyb21CTChwYXRoLCBiYW5kV2lkdGgsIHdpZHRoLCBoZWlnaHQsIHBvaW50LCBjbG9ja3dpc2UpO1xuICAgIH1cbiAgICBlbHNlIGlmIChwb2ludC5uYW1lID09PSAnYnInKSB7XG4gICAgICB0aGlzLmRyYXdBbmdsZWRCYW5kRnJvbUJSKHBhdGgsIGJhbmRXaWR0aCwgd2lkdGgsIGhlaWdodCwgcG9pbnQsIGNsb2Nrd2lzZSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHBvaW50Lm5hbWUgPT09ICd0cicpIHtcbiAgICAgIHRoaXMuZHJhd0FuZ2xlZEJhbmRGcm9tVFIocGF0aCwgYmFuZFdpZHRoLCB3aWR0aCwgaGVpZ2h0LCBwb2ludCwgY2xvY2t3aXNlKTtcbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG4gIH1cbiAgZHJhd0FuZ2xlZEJhbmRGcm9tVEwocGF0aCwgYmFuZFdpZHRoLCB3aWR0aCwgaGVpZ2h0LCBwb2ludCwgY2xvY2t3aXNlKSB7XG4gICAgcGF0aC5tb3ZlVG8ocG9pbnQueCwgcG9pbnQueSk7XG4gICAgaWYgKGNsb2Nrd2lzZSkge1xuICAgICAgbGV0IHJhbmRvbUhlaWdodCA9IHJhbmRvbVdpdGhpblJhbmdlKDAuNSAqIGhlaWdodCwgMC45ICogaGVpZ2h0KTtcbiAgICAgIHBhdGgubGluZVRvKHBvaW50LnggKyB3aWR0aCwgcG9pbnQueSk7XG4gICAgICBwYXRoLmxpbmVUbyhwb2ludC54ICsgd2lkdGgsIHBvaW50LnkgKyByYW5kb21IZWlnaHQpO1xuICAgICAgcGF0aC5saW5lVG8ocG9pbnQueCArIHdpZHRoIC0gYmFuZFdpZHRoLCBwb2ludC55ICsgcmFuZG9tSGVpZ2h0KTtcbiAgICAgIHBhdGgubGluZVRvKHBvaW50LnggKyB3aWR0aCAtIGJhbmRXaWR0aCwgcG9pbnQueSArIGJhbmRXaWR0aCk7XG4gICAgICBwYXRoLmxpbmVUbyhwb2ludC54LCBwb2ludC55ICsgYmFuZFdpZHRoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBsZXQgcmFuZG9tV2lkdGggPSByYW5kb21XaXRoaW5SYW5nZSgwLjUgKiB3aWR0aCwgMC45ICogd2lkdGgpO1xuICAgICAgcGF0aC5saW5lVG8ocG9pbnQueCArIGJhbmRXaWR0aCwgcG9pbnQueSk7XG4gICAgICBwYXRoLmxpbmVUbyhwb2ludC54ICsgYmFuZFdpZHRoLCBwb2ludC55ICsgaGVpZ2h0IC0gYmFuZFdpZHRoKTtcbiAgICAgIHBhdGgubGluZVRvKHBvaW50LnggKyByYW5kb21XaWR0aCwgcG9pbnQueSArIGhlaWdodCAtIGJhbmRXaWR0aCk7XG4gICAgICBwYXRoLmxpbmVUbyhwb2ludC54ICsgcmFuZG9tV2lkdGgsIHBvaW50LnkgKyBoZWlnaHQpO1xuICAgICAgcGF0aC5saW5lVG8ocG9pbnQueCwgcG9pbnQueSArIGhlaWdodCk7XG4gICAgfVxuICB9XG4gIGRyYXdBbmdsZWRCYW5kRnJvbUJMKHBhdGgsIGJhbmRXaWR0aCwgd2lkdGgsIGhlaWdodCwgcG9pbnQsIGNsb2Nrd2lzZSkge1xuICAgIHBhdGgubW92ZVRvKHBvaW50LngsIHBvaW50LnkpO1xuICAgIGlmIChjbG9ja3dpc2UpIHtcbiAgICAgIGxldCByYW5kb21XaWR0aCA9IHJhbmRvbVdpdGhpblJhbmdlKDAuNSAqIHdpZHRoLCAwLjkgKiB3aWR0aCk7XG4gICAgICBwYXRoLmxpbmVUbyhwb2ludC54ICsgYmFuZFdpZHRoLCBwb2ludC55KTtcbiAgICAgIHBhdGgubGluZVRvKHBvaW50LnggKyBiYW5kV2lkdGgsIHBvaW50LnkgLSBoZWlnaHQgKyBiYW5kV2lkdGgpO1xuICAgICAgcGF0aC5saW5lVG8ocG9pbnQueCArIHJhbmRvbVdpZHRoLCBwb2ludC55IC0gaGVpZ2h0ICsgYmFuZFdpZHRoKTtcbiAgICAgIHBhdGgubGluZVRvKHBvaW50LnggKyByYW5kb21XaWR0aCwgcG9pbnQueSAtIGhlaWdodCk7XG4gICAgICBwYXRoLmxpbmVUbyhwb2ludC54LCBwb2ludC55IC0gaGVpZ2h0KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBsZXQgcmFuZG9tSGVpZ2h0ID0gcmFuZG9tV2l0aGluUmFuZ2UoMC41ICogaGVpZ2h0LCAwLjkgKiBoZWlnaHQpO1xuICAgICAgcGF0aC5saW5lVG8ocG9pbnQueCwgcG9pbnQueSAtIGJhbmRXaWR0aCk7XG4gICAgICBwYXRoLmxpbmVUbyhwb2ludC54ICsgd2lkdGggLSBiYW5kV2lkdGgsIHBvaW50LnkgLSBiYW5kV2lkdGgpO1xuICAgICAgcGF0aC5saW5lVG8ocG9pbnQueCArIHdpZHRoIC0gYmFuZFdpZHRoLCBwb2ludC55IC0gcmFuZG9tSGVpZ2h0KTtcbiAgICAgIHBhdGgubGluZVRvKHBvaW50LnggKyB3aWR0aCwgcG9pbnQueSAtIHJhbmRvbUhlaWdodCk7XG4gICAgICBwYXRoLmxpbmVUbyhwb2ludC54ICsgd2lkdGgsIHBvaW50LnkpO1xuICAgIH1cbiAgfVxuICBkcmF3QW5nbGVkQmFuZEZyb21CUihwYXRoLCBiYW5kV2lkdGgsIHdpZHRoLCBoZWlnaHQsIHBvaW50LCBjbG9ja3dpc2UpIHtcbiAgICBwYXRoLm1vdmVUbyhwb2ludC54LCBwb2ludC55KTtcbiAgICBpZiAoY2xvY2t3aXNlKSB7XG4gICAgICBsZXQgcmFuZG9tSGVpZ2h0ID0gcmFuZG9tV2l0aGluUmFuZ2UoMC41ICogaGVpZ2h0LCAwLjkgKiBoZWlnaHQpO1xuICAgICAgcGF0aC5saW5lVG8ocG9pbnQueCwgcG9pbnQueSAtIGJhbmRXaWR0aCk7XG4gICAgICBwYXRoLmxpbmVUbyhwb2ludC54IC0gd2lkdGggKyBiYW5kV2lkdGgsIHBvaW50LnkgLSBiYW5kV2lkdGgpO1xuICAgICAgcGF0aC5saW5lVG8ocG9pbnQueCAtIHdpZHRoICsgYmFuZFdpZHRoLCBwb2ludC55IC0gcmFuZG9tSGVpZ2h0KTtcbiAgICAgIHBhdGgubGluZVRvKHBvaW50LnggLSB3aWR0aCwgcG9pbnQueSAtIHJhbmRvbUhlaWdodCk7XG4gICAgICBwYXRoLmxpbmVUbyhwb2ludC54IC0gd2lkdGgsIHBvaW50LnkpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGxldCByYW5kb21XaWR0aCA9IHJhbmRvbVdpdGhpblJhbmdlKDAuNSAqIHdpZHRoLCAwLjkgKiB3aWR0aCk7XG4gICAgICBwYXRoLmxpbmVUbyhwb2ludC54IC0gYmFuZFdpZHRoLCBwb2ludC55KTtcbiAgICAgIHBhdGgubGluZVRvKHBvaW50LnggLSBiYW5kV2lkdGgsIHBvaW50LnkgLSBoZWlnaHQgKyBiYW5kV2lkdGgpO1xuICAgICAgcGF0aC5saW5lVG8ocG9pbnQueCAtIHJhbmRvbVdpZHRoLCBwb2ludC55IC0gaGVpZ2h0ICsgYmFuZFdpZHRoKTtcbiAgICAgIHBhdGgubGluZVRvKHBvaW50LnggLSByYW5kb21XaWR0aCwgcG9pbnQueSAtIGhlaWdodCk7XG4gICAgICBwYXRoLmxpbmVUbyhwb2ludC54LCBwb2ludC55IC0gaGVpZ2h0KTtcbiAgICB9XG4gIH1cbiAgZHJhd0FuZ2xlZEJhbmRGcm9tVFIocGF0aCwgYmFuZFdpZHRoLCB3aWR0aCwgaGVpZ2h0LCBwb2ludCwgY2xvY2t3aXNlKSB7XG4gICAgcGF0aC5tb3ZlVG8ocG9pbnQueCwgcG9pbnQueSk7XG4gICAgaWYgKGNsb2Nrd2lzZSkge1xuICAgICAgbGV0IHJhbmRvbVdpZHRoID0gcmFuZG9tV2l0aGluUmFuZ2UoMC41ICogd2lkdGgsIDAuOSAqIHdpZHRoKTtcbiAgICAgIHBhdGgubGluZVRvKHBvaW50LnggLSBiYW5kV2lkdGgsIHBvaW50LnkpO1xuICAgICAgcGF0aC5saW5lVG8ocG9pbnQueCAtIGJhbmRXaWR0aCwgcG9pbnQueSArIGhlaWdodCAtIGJhbmRXaWR0aCk7XG4gICAgICBwYXRoLmxpbmVUbyhwb2ludC54IC0gcmFuZG9tV2lkdGgsIHBvaW50LnkgKyBoZWlnaHQgLSBiYW5kV2lkdGgpO1xuICAgICAgcGF0aC5saW5lVG8ocG9pbnQueCAtIHJhbmRvbVdpZHRoLCBwb2ludC55ICsgaGVpZ2h0KTtcbiAgICAgIHBhdGgubGluZVRvKHBvaW50LngsIHBvaW50LnkgKyBoZWlnaHQpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGxldCByYW5kb21IZWlnaHQgPSByYW5kb21XaXRoaW5SYW5nZSgwLjUgKiBoZWlnaHQsIDAuOSAqIGhlaWdodCk7XG4gICAgICBwYXRoLmxpbmVUbyhwb2ludC54LCBwb2ludC55ICsgYmFuZFdpZHRoKTtcbiAgICAgIHBhdGgubGluZVRvKHBvaW50LnggLSB3aWR0aCArIGJhbmRXaWR0aCwgcG9pbnQueSArIGJhbmRXaWR0aCk7XG4gICAgICBwYXRoLmxpbmVUbyhwb2ludC54IC0gd2lkdGggKyBiYW5kV2lkdGgsIHBvaW50LnkgKyByYW5kb21IZWlnaHQpO1xuICAgICAgcGF0aC5saW5lVG8ocG9pbnQueCAtIHdpZHRoLCBwb2ludC55ICsgcmFuZG9tSGVpZ2h0KTtcbiAgICAgIHBhdGgubGluZVRvKHBvaW50LnggLSB3aWR0aCwgcG9pbnQueSk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTdHJva2VBbmltYXRpb24ge1xuICBjb25zdHJ1Y3RvcihjdHgsIHZlcnRpY2VzKSB7XG4gICAgdGhpcy5jdHggPSBjdHg7XG4gICAgdGhpcy53YXlwb2ludHMgPSBjYWxjV2F5cG9pbnRzKHZlcnRpY2VzKTtcbiAgfVxuXG4gIGFuaW1hdGUoYmFuZFdpZHRoID0gMjAsIGNvbG9yID0gJ3JnYmEoMjU1LDI1NSwyNTUsMSknLCBmbGlja2VyID0gdHJ1ZSwgZGFzaCA9IFtdLCBnbG93aW5nID0gJ3doaXRlJywgZ2xvd2luZ1NpemUgPSA0MCkge1xuICAgIGxldCBhbmltYXRpb25Qcm9taXNlID0gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XG4gICAgICB0aGlzLmFuaW1hdGlvbkVuZFRyaWdnZXIgPSByZXM7XG4gICAgICB0aGlzLmxvb3BpbmdEcmF3U3Ryb2tlKGJhbmRXaWR0aCwgY29sb3IsIGZsaWNrZXIsIGRhc2gsIGdsb3dpbmcsIGdsb3dpbmdTaXplLCk7XG4gICAgfSlcblxuICAgIHJldHVybiBhbmltYXRpb25Qcm9taXNlO1xuICB9XG5cbiAgbG9vcGluZ0RyYXdTdHJva2UoYmFuZFdpZHRoLCBjb2xvciwgZmxpY2tlciwgZGFzaCwgZ2xvd2luZywgZ2xvd2luZ1NpemUsIGZwcyA9IDYwKSB7XG4gICAgbGV0IGNvdW50ZXIgPSAwO1xuICAgIGxldCAkdGhpcyA9IHRoaXM7XG4gICAgdGhpcy5jdHguc2F2ZSgpO1xuICAgIHRoaXMuY3R4LmxpbmVDYXAgPSAnc3F1YXJlJ1xuICAgIGlmIChkYXNoLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuY3R4LnNldExpbmVEYXNoKGRhc2gpO1xuICAgIH1cbiAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IGNvbG9yO1xuICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IGJhbmRXaWR0aDtcbiAgICB0aGlzLmN0eC5zaGFkb3dDb2xvciA9IGdsb3dpbmc7XG4gICAgdGhpcy5jdHguc2hhZG93Qmx1ciA9IGdsb3dpbmdTaXplO1xuICAgIGxldCBmbGlja2VyUmFuZ2UgPSAwO1xuXG4gICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgbGV0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgaWYgKGNvdW50ZXIgPCAkdGhpcy53YXlwb2ludHMubGVuZ3RoIC0gMSkge1xuICAgICAgICAkdGhpcy5jdHgubW92ZVRvKCR0aGlzLndheXBvaW50c1tjb3VudGVyXS54LCAkdGhpcy53YXlwb2ludHNbY291bnRlcl0ueSk7XG4gICAgICAgICR0aGlzLmN0eC5saW5lVG8oJHRoaXMud2F5cG9pbnRzW2NvdW50ZXIgKyAxXS54LCAkdGhpcy53YXlwb2ludHNbY291bnRlciArIDFdLnkpO1xuICAgICAgICBpZiAoZmxpY2tlcikge1xuICAgICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmN0eC5jYW52YXMud2lkdGgsIHRoaXMuY3R4LmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICAgIHRoaXMuY3R4Lmdsb2JhbEFscGhhID0gcmFuZG9tV2l0aGluUmFuZ2UoZmxpY2tlclJhbmdlLCAxKTtcbiAgICAgICAgICBmbGlja2VyUmFuZ2UgKz0gKGZwcyAvIDEwMDAwKTtcbiAgICAgICAgfVxuICAgICAgICAkdGhpcy5jdHguc3Ryb2tlKCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICR0aGlzLmN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgJHRoaXMuY3R4LnJlc3RvcmUoKTtcbiAgICAgICAgJHRoaXMuYW5pbWF0aW9uRW5kVHJpZ2dlcigpO1xuICAgICAgfVxuICAgICAgY291bnRlcisrO1xuICAgIH0sIDEwMDAgLyBmcHMpXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFN0YXJTa3kge1xuICBjb25zdHJ1Y3RvcihjdHgpIHtcbiAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICB0aGlzLmN2cyA9IGN0eC5jYW52YXM7XG4gICAgdGhpcy5zdGFycyA9IFtdO1xuICAgIHRoaXMuaW5pdCgpO1xuICB9XG4gIGluaXQoKSB7XG4gICAgdGhpcy5nZW5TdGFycygpO1xuXG4gIH1cbiAgZ2VuU3RhcnMobnVtYmVyID0gMTAwKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1iZXI7IGkrKykge1xuICAgICAgbGV0IHN0YXIgPSB7XG4gICAgICAgIHg6IHJhbmRvbVdpdGhpblJhbmdlKDAsIHRoaXMuY3ZzLndpZHRoKSxcbiAgICAgICAgeTogcmFuZG9tV2l0aGluUmFuZ2UoMCwgdGhpcy5jdnMuaGVpZ2h0KSxcbiAgICAgICAgY29sb3I6IGByZ2JhKDI1NSwyNTUsMjU1LCR7cmFuZG9tV2l0aGluUmFuZ2UoMC4yNSwgMSl9KWAsXG4gICAgICAgIHNpemU6IHJhbmRvbVdpdGhpblJhbmdlKDIsIDUpLFxuICAgICAgICB0d2lua2xlOiAoKSA9PiB7XG4gICAgICAgICAgc3Rhci5jb2xvciA9IGByZ2JhKDI1NSwyNTUsMjU1LCR7cmFuZG9tV2l0aGluUmFuZ2UoMC4yNSwgMSl9KWA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuc3RhcnMucHVzaChzdGFyKTtcbiAgICB9XG4gIH1cbiAgcmVmcmVzaFN0YXJzKCkge1xuICAgIHRoaXMuc3RhcnMubGVuZ3RoID0gMDtcbiAgICB0aGlzLmdlblN0YXJzKCk7XG4gIH1cbiAgYW5pbWF0ZSgpIHtcbiAgICBsZXQgZHJhdyA9ICgpID0+IHtcbiAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmN2cy53aWR0aCwgdGhpcy5jdnMuaGVpZ2h0KTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zdGFycy5sZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLnN0YXJzW2ldLnR3aW5rbGUoKTtcbiAgICAgICAgZHJhd0NpcmNsZSh0aGlzLmN0eCwgdGhpcy5zdGFyc1tpXS54LCB0aGlzLnN0YXJzW2ldLnksIHRoaXMuc3RhcnNbaV0uc2l6ZSwgdGhpcy5zdGFyc1tpXS5jb2xvcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc2V0SW50ZXJ2YWwoZHJhdywgNTAwKTtcbiAgfVxufSIsImltcG9ydCB7IGRlYm91bmNlLCBpcywgcG9pbnRlckV2ZW50VG9YWSB9IGZyb20gJy4vZnVuY3Rpb24nO1xuXG5cbmV4cG9ydCBjbGFzcyBDYW52YXMyREZ4QmFzZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIGVsZSwgY29uZmlnID0ge30sIGRlZmF1bHRDb25maWcgPSB7fSwgdmlydHVhbFBhcmVudFxuICApIHtcbiAgICBjb25maWcgPSBpcy5vYmooY29uZmlnKSA/IGNvbmZpZyA6IHt9O1xuICAgIGRlZmF1bHRDb25maWcgPSBpcy5vYmooZGVmYXVsdENvbmZpZykgPyBkZWZhdWx0Q29uZmlnIDoge307XG4gICAgdGhpcy5jb25maWcgPSBPYmplY3QuYXNzaWduKGRlZmF1bHRDb25maWcsIGNvbmZpZyk7XG4gICAgdGhpcy5lbGUgPSBlbGU7XG4gICAgdGhpcy5mcmFtZUNvdW50ID0gMDtcbiAgICB0aGlzLm1vdXNlID0ge1xuICAgICAgeDogMCxcbiAgICAgIHk6IDBcbiAgICB9O1xuICAgIHRoaXMudmlydHVhbFBhcmVudCA9IHZpcnR1YWxQYXJlbnQ7XG4gICAgdGhpcy5jdHggPSBudWxsO1xuICAgIHRoaXMuZnJhbWVJc1BhdXNlZCA9IGZhbHNlO1xuICAgIHRoaXMuaXNDbGljayA9IGZhbHNlO1xuICAgIHRoaXMubGF5ZXJzQ29udGFpbmVyID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZGl2TGF5ZXJzQ29udGFpbmVyID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuY2FudmFzU2l6ZWZpeGVkID0gZmFsc2U7XG4gICAgdGhpcy5wcmV2aW91c0ZyYW1lVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIHRoaXMuaXNSZXNpemluZyA9IGZhbHNlO1xuICAgIHRoaXMubGF5ZXJzID0gW107XG4gICAgdGhpcy5kaXZMYXllcnMgPSBbXTtcbiAgICB0aGlzLmlzUmVzaXppbmdDYWxsYmFjayA9ICgpID0+IHsgfTtcbiAgICB0aGlzLnJlc2l6ZWRDYWxsYmFjayA9ICgpID0+IHsgfTtcbiAgICB0aGlzLmluaXRCYXNlKCk7XG4gIH1cbiAgaW5pdEJhc2UoKSB7XG5cbiAgICBpZiAodGhpcy5lbGUudGFnTmFtZSAhPT0gJ0NBTlZBUycpIHtcbiAgICAgIGNvbnN0IGN2cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgdGhpcy5jdnMgPSBjdnM7XG4gICAgICB0aGlzLmxheWVyc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGhpcy5sYXllcnNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbGF5ZXJzLWNvbnRhaW5lcicpO1xuICAgICAgdGhpcy5sYXllcnNDb250YWluZXIuc3R5bGUuZm9udFNpemUgPSAwO1xuICAgICAgdGhpcy5sYXllcnNDb250YWluZXIuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgdGhpcy5sYXllcnNDb250YWluZXIuc3R5bGUud2lkdGggPSAnMTAwJSdcbiAgICAgIHRoaXMubGF5ZXJzQ29udGFpbmVyLnN0eWxlLmhlaWdodCA9ICcxMDAlJztcbiAgICAgIHRoaXMubGF5ZXJzQ29udGFpbmVyLmFwcGVuZENoaWxkKGN2cyk7XG4gICAgICB0aGlzLmRpdkxheWVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0aGlzLmRpdkxheWVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Rpdi1sYXllcnMtY29udGFpbmVyJyk7XG4gICAgICB0aGlzLmRpdkxheWVyQ29udGFpbmVyLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgIHRoaXMuZGl2TGF5ZXJDb250YWluZXIuc3R5bGUud2lkdGggPSAnMTAwJSdcbiAgICAgIHRoaXMuZGl2TGF5ZXJDb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xuICAgICAgdGhpcy5zdXJyb3VuZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGhpcy5zdXJyb3VuZGluZy5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICB0aGlzLnN1cnJvdW5kaW5nLnN0eWxlLndpZHRoID0gJzEwMCUnXG4gICAgICB0aGlzLnN1cnJvdW5kaW5nLnN0eWxlLmhlaWdodCA9ICcxMDAlJztcbiAgICAgIHRoaXMuc3Vycm91bmRpbmcuY2xhc3NMaXN0LmFkZCgncmVuZGVyLWVudl9fc3Vycm91bmRpbmcnKVxuICAgICAgdGhpcy5zdXJyb3VuZGluZy5hcHBlbmRDaGlsZCh0aGlzLmxheWVyc0NvbnRhaW5lcik7XG4gICAgICB0aGlzLnN1cnJvdW5kaW5nLmluc2VydEJlZm9yZSh0aGlzLmRpdkxheWVyQ29udGFpbmVyLCB0aGlzLmxheWVyc0NvbnRhaW5lcik7XG4gICAgICB0aGlzLmVsZS5hcHBlbmQodGhpcy5zdXJyb3VuZGluZyk7XG4gICAgICB0aGlzLmVsZS5jbGFzc0xpc3QuYWRkKCdyZW5kZXItZW52Jyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5jdnMgPSB0aGlzLmVsZTtcbiAgICB9XG5cbiAgICB0aGlzLmN0eCA9IHRoaXMuY3ZzLmdldENvbnRleHQoJzJkJyk7XG4gICAgdGhpcy50cmlnZ2VyUmVzaXppbmdNZWNoYW5pc20oKTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gICAgICB0aGlzLmlzUmVzaXppbmcgPSB0cnVlO1xuICAgICAgdGhpcy5pc1Jlc2l6aW5nQ2FsbGJhY2soKTtcbiAgICB9KTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBkZWJvdW5jZSgoKSA9PiB7XG4gICAgICB0aGlzLmlzUmVzaXppbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMudHJpZ2dlclJlc2l6aW5nTWVjaGFuaXNtKCk7XG4gICAgICB0aGlzLnJlc2l6ZWRDYWxsYmFjaygpO1xuICAgIH0sIDUwMCkpO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Zpc2liaWxpdHljaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBpZiAoZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlICE9PSBcInZpc2libGVcIikge1xuICAgICAgICB0aGlzLmZyYW1lSXNQYXVzZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5hZGRFdmVudEhhbmRsZXIoKTtcblxuICAgIHRoaXMucmVmcmVzaEJhc2VGcmFtZUNvdW50ZXIoKTtcblxuICB9XG5cbiAgdXBkYXRlUG9zaXRpb25PcHRpb25TZXR0aW5nKCkge1xuXG4gIH1cblxuICByZWZyZXNoQmFzZUZyYW1lQ291bnRlcigpIHtcbiAgICBsZXQgdGhpc0ZyYW1lVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIHRoaXMudGltZUVsYXBzZWQgPSAodGhpc0ZyYW1lVGltZSAtIHRoaXMucHJldmlvdXNGcmFtZVRpbWUpIC8gMTAwMDtcbiAgICBpZiAodGhpcy5mcmFtZUlzUGF1c2VkKSB7XG4gICAgICB0aGlzLnRpbWVFbGFwc2VkID0gMDtcbiAgICAgIHRoaXMuZnJhbWVJc1BhdXNlZCA9IGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLmZyYW1lQ291bnQgKz0gMTtcbiAgICB0aGlzLnByZXZpb3VzRnJhbWVUaW1lID0gdGhpc0ZyYW1lVGltZVxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICB0aGlzLnJlZnJlc2hCYXNlRnJhbWVDb3VudGVyKCk7XG4gICAgfSlcbiAgfVxuXG4gIHZpcnR1YWxQYXJlbnRWYWxpZGF0aW9uKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5ib2R5LmNvbnRhaW5zKHRoaXMudmlydHVhbFBhcmVudCkgfHwgdGhpcy52aXJ0dWFsUGFyZW50ID09PSBkb2N1bWVudC5ib2R5O1xuICB9XG5cbiAgdHJpZ2dlclJlc2l6aW5nTWVjaGFuaXNtKCkge1xuICAgIGlmICh0aGlzLmNhbnZhc1NpemVmaXhlZCkgcmV0dXJuO1xuXG4gICAgaWYgKHRoaXMuZWxlLnRhZ05hbWUgIT09ICdDQU5WQVMnKSB7XG4gICAgICBsZXQgY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodDtcbiAgICAgIGlmICh0aGlzLnZpcnR1YWxQYXJlbnRWYWxpZGF0aW9uKCkpIHtcbiAgICAgICAgY2FudmFzV2lkdGggPSB0aGlzLnZpcnR1YWxQYXJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gICAgICAgIGNhbnZhc0hlaWdodCA9IHRoaXMudmlydHVhbFBhcmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgY2FudmFzV2lkdGggPSB0aGlzLmVsZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcbiAgICAgICAgY2FudmFzSGVpZ2h0ID0gdGhpcy5lbGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuICAgICAgfVxuXG4gICAgICB0aGlzLmN2cy53aWR0aCA9IGNhbnZhc1dpZHRoO1xuICAgICAgdGhpcy5jdnMuaGVpZ2h0ID0gY2FudmFzSGVpZ2h0O1xuXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgbGV0IGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQ7XG4gICAgICBpZiAodGhpcy52aXJ0dWFsUGFyZW50VmFsaWRhdGlvbigpKSB7XG4gICAgICAgIGNhbnZhc1dpZHRoID0gdGhpcy52aXJ0dWFsUGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICAgICAgICBjYW52YXNIZWlnaHQgPSB0aGlzLnZpcnR1YWxQYXJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNhbnZhc1dpZHRoID0gdGhpcy5jdnMucGFyZW50RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcbiAgICAgICAgY2FudmFzSGVpZ2h0ID0gdGhpcy5jdnMucGFyZW50RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG4gICAgICB9XG4gICAgICB0aGlzLmN2cy53aWR0aCA9IGNhbnZhc1dpZHRoO1xuICAgICAgdGhpcy5jdnMuaGVpZ2h0ID0gY2FudmFzSGVpZ2h0O1xuXG4gICAgfVxuXG4gIH1cblxuICBzZXRDYW52YXNTaXplKHdpZHRoLCBoZWlnaHQpIHtcbiAgICB0aGlzLmNhbnZhc1NpemVmaXhlZCA9IHRydWU7XG4gICAgdGhpcy5jdnMud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLmN2cy5oZWlnaHQgPSBoZWlnaHQ7XG4gIH1cblxuICBiYWNrZ3JvdW5kKGNvbG9yKSB7XG4gICAgdGhpcy5jdHguc2F2ZSgpO1xuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgIHRoaXMuY3R4LmZpbGxSZWN0KDAsIDAsIHRoaXMuY3ZzLndpZHRoLCB0aGlzLmN2cy5oZWlnaHQpO1xuICAgIHRoaXMuY3R4LnJlc3RvcmUoKTtcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmN2cy53aWR0aCwgdGhpcy5jdnMuaGVpZ2h0KTtcbiAgfVxuXG4gIGFkZEV2ZW50SGFuZGxlcigpIHtcblxuICAgIHRoaXMuY3ZzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5pc0NsaWNrID0gdHJ1ZTtcbiAgICB9KVxuICAgIHRoaXMuY3ZzLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCAoKSA9PiB7XG4gICAgICB0aGlzLmlzQ2xpY2sgPSB0cnVlO1xuXG4gICAgfSlcblxuICAgIHRoaXMuY3ZzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChlKSA9PiB7XG4gICAgICBsZXQgcG9zID0gcG9pbnRlckV2ZW50VG9YWShlKTtcbiAgICAgIHRoaXMubW91c2UgPSB7XG4gICAgICAgIHg6IHBvcy54LFxuICAgICAgICB5OiBwb3MueVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLmN2cy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCAoZSkgPT4ge1xuICAgICAgbGV0IHBvcyA9IHBvaW50ZXJFdmVudFRvWFkoZSk7XG4gICAgICB0aGlzLm1vdXNlID0ge1xuICAgICAgICB4OiBwb3MueCxcbiAgICAgICAgeTogcG9zLnlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgY3JlYXRlVmlydHVhbENhbnZhc0Jhc2VJbnN0YW5jZSgpIHtcbiAgICBsZXQgdmN2cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIGxldCB2Y3ZzSW5zdGFuY2UgPSBuZXcgQ2FudmFzMkRGeEJhc2UodmN2cywge30sIHt9LCB0aGlzLmVsZSk7XG4gICAgcmV0dXJuIHZjdnNJbnN0YW5jZTtcbiAgfVxuXG4gIGFkZE5ld0xheWVyKCkge1xuICAgIGlmICh0aGlzLmVsZS50YWdOYW1lID09PSAnQ0FOVkFTJykgcmV0dXJuIG5ldyBUeXBlRXJyb3IoYOaWsOWinuWcluWxpOaWueazleWPquaUr+aPtOS7peepumRpduWuueWZqOWIneWni+WMlueahOa4suafk+eSsOWig2ApO1xuICAgIGxldCBjdnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICBjdnMuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgIHRoaXMubGF5ZXJzQ29udGFpbmVyLnByZXBlbmQoY3ZzKTtcbiAgICBsZXQgY3ZzSW5zdGFuY2UgPSBuZXcgQ2FudmFzMkRGeEJhc2UoY3ZzLCB7fSwge30sIHRoaXMuZWxlKTtcbiAgICB0aGlzLmxheWVycy5wdXNoKGN2c0luc3RhbmNlKTtcbiAgICByZXR1cm4gY3ZzSW5zdGFuY2U7XG4gIH1cblxuICBhZGREaXZMYXllcihpZCwgY2xhc3NOYW1lKSB7XG4gICAgaWYgKHRoaXMuZWxlLnRhZ05hbWUgPT09ICdDQU5WQVMnKSByZXR1cm4gbmV3IFR5cGVFcnJvcihg5paw5aKe5ZyW5bGk5pa55rOV5Y+q5pSv5o+05Lul56m6ZGl25a655Zmo5Yid5aeL5YyW55qE5riy5p+T55Kw5aKDYCk7XG4gICAgbGV0IGRpdkxheWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaWYgKCEhY2xhc3NOYW1lKSB7XG4gICAgICBkaXZMYXllci5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgfVxuICAgIGlmICghIWlkKSB7XG4gICAgICBkaXZMYXllci5pZCA9IGlkO1xuICAgIH1cbiAgICBkaXZMYXllci5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgZGl2TGF5ZXIuc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gICAgZGl2TGF5ZXIuc3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xuICAgIHRoaXMuZGl2TGF5ZXJDb250YWluZXIucHJlcGVuZChkaXZMYXllcik7XG4gICAgdGhpcy5kaXZMYXllcnMucHVzaChkaXZMYXllcik7XG4gICAgcmV0dXJuIGRpdkxheWVyXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvb3QoY3RvciwgZGVmYXVsdENvbmZpZywgY29uZmlnLCB0YXJnZXRFbGUsIHZpcnR1YWxQYXJlbnQpIHtcbiAgbGV0IGN2cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcbiAgY3ZzID0gY3ZzID8gY3ZzIDogZG9jdW1lbnQuYm9keTtcbiAgbGV0IGVsZSA9IHRhcmdldEVsZSA/IHRhcmdldEVsZSA6IGN2cztcbiAgbGV0IHRyaWdnZXI7XG4gIGxldCBib290UHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xuICAgIHRyaWdnZXIgPSAoKSA9PiB7XG4gICAgICBsZXQgaW5zdGFuY2UgPSBuZXcgY3RvcihlbGUsIGNvbmZpZywgZGVmYXVsdENvbmZpZywgdmlydHVhbFBhcmVudCk7XG4gICAgICByZXMoaW5zdGFuY2UpO1xuICAgIH07XG4gIH0pO1xuXG4gIGxldCBjb250cm9sbGVyID0ge1xuICAgIHByb21pc2U6IGJvb3RQcm9taXNlLFxuICAgIHRyaWdnZXI6IHRyaWdnZXIsXG4gIH1cblxuICByZXR1cm4gY29udHJvbGxlcjtcbn0iLCJleHBvcnQgZnVuY3Rpb24gJChzZWxlY3Rvcikge1xuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGUoc2VsZWN0b3IsIHN0YXR1cykge1xuICBsZXQgc3R5bGVTdHIgPSBzdGF0dXMgPyAnYmxvY2snIDogJ25vbmUnXG4gICQoc2VsZWN0b3IpLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBgZGlzcGxheToke3N0eWxlU3RyfWApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlQ2xhc3Moc2VsZWN0b3IsIGNsYXNzbmFtZSwgc3RhdHVzKSB7XG4gIGxldCBhY3Rpb24gPSBzdGF0dXMgPyAnYWRkJyA6ICdyZW1vdmUnO1xuICAkKHNlbGVjdG9yKS5jbGFzc0xpc3RbYWN0aW9uXShjbGFzc25hbWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZW1pdChldmVudE5hbWUpIHtcbiAgbGV0IHNvbWVFdmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdFdmVudCcpO1xuICBzb21lRXZlbnQuaW5pdEV2ZW50KGV2ZW50TmFtZSwgdHJ1ZSwgdHJ1ZSk7XG4gIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoc29tZUV2ZW50KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcmVudHMobm9kZSwgc2VsZWN0b3IpIHtcbiAgbGV0IGN1cnJlbnQgPSBub2RlLFxuICAgIGxpc3QgPSBbXTtcbiAgd2hpbGUgKGN1cnJlbnQucGFyZW50Tm9kZSAhPSBudWxsICYmIGN1cnJlbnQucGFyZW50Tm9kZSAhPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICBsaXN0LnB1c2goY3VycmVudC5wYXJlbnROb2RlKTtcbiAgICBjdXJyZW50ID0gY3VycmVudC5wYXJlbnROb2RlO1xuICB9XG4gIHJldHVybiBsaXN0LmZpbHRlcigobywgaSkgPT4ge1xuICAgIHJldHVybiBvLm1hdGNoZXMoc2VsZWN0b3IpXG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmYWRlT3V0KGVsZSwgZHVyYXRpb24sIGNiID0gKCkgPT4geyBlbGUuc3R5bGUuZGlzcGxheSA9ICdub25lJzsgfSkge1xuICB2YXIgZmFkZVRhcmdldCA9IGVsZTtcbiAgdmFyIGZhZGVFZmZlY3QgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgaWYgKCFmYWRlVGFyZ2V0LnN0eWxlLm9wYWNpdHkpIHtcbiAgICAgIGZhZGVUYXJnZXQuc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgfVxuICAgIGlmIChmYWRlVGFyZ2V0LnN0eWxlLm9wYWNpdHkgPiAwKSB7XG4gICAgICBmYWRlVGFyZ2V0LnN0eWxlLm9wYWNpdHkgLT0gMSAvIGR1cmF0aW9uO1xuICAgIH0gZWxzZSB7XG4gICAgICBjbGVhckludGVydmFsKGZhZGVFZmZlY3QpO1xuICAgICAgY2IoKVxuICAgICAgZWxlLnN0eWxlLm9wYWNpdHkgPSAnJztcblxuICAgIH1cbiAgfSwgMSAvIGR1cmF0aW9uKTtcbn0iLCJjb25zdCBNZXJzZW5uZVR3aXN0ZXIgPSByZXF1aXJlKCdtZXJzZW5uZS10d2lzdGVyJyk7XG5jb25zdCBNVCA9IG5ldyBNZXJzZW5uZVR3aXN0ZXIoKTtcblxuXG5leHBvcnQgZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgZGVsYXkpIHtcbiAgbGV0IHRpbWVyID0gbnVsbDtcbiAgY29uc3QgJHRoaXMgPSB0aGlzO1xuICByZXR1cm4gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRleHQgPSAkdGhpcztcbiAgICBjb25zdCBhcmdzID0gYXJndW1lbnRzO1xuICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgfSwgZGVsYXkpO1xuICB9O1xufVxuXG5leHBvcnQgY29uc3QgaXMgPSB7XG4gIGFycjogYSA9PiBBcnJheS5pc0FycmF5KGEpLFxuICBvYmo6IGEgPT4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGEpLmluZGV4T2YoJ09iamVjdCcpID4gLTEsXG4gIHB0aDogYSA9PiBpcy5vYmooYSkgJiYgYS5oYXNPd25Qcm9wZXJ0eSgndG90YWxMZW5ndGgnKSxcbiAgc3ZnOiBhID0+IGEgaW5zdGFuY2VvZiBTVkdFbGVtZW50LFxuICBpbnA6IGEgPT4gYSBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQsXG4gIGRvbTogYSA9PiBhLm5vZGVUeXBlIHx8IGlzLnN2ZyhhKSxcbiAgc3RyOiBhID0+IHR5cGVvZiBhID09PSAnc3RyaW5nJyxcbiAgZm5jOiBhID0+IHR5cGVvZiBhID09PSAnZnVuY3Rpb24nLFxuICB1bmQ6IGEgPT4gdHlwZW9mIGEgPT09ICd1bmRlZmluZWQnLFxuICBuaWw6IGEgPT4gaXMudW5kKGEpIHx8IGEgPT09IG51bGwsXG4gIGhleDogYSA9PiAvKF4jWzAtOUEtRl17Nn0kKXwoXiNbMC05QS1GXXszfSQpL2kudGVzdChhKSxcbiAgcmdiYTogYSA9PiAvXnJnYmEvLnRlc3QoYSksXG4gIHJnYjogYSA9PiAvXnJnYi8udGVzdChhKSxcbiAgaHNsOiBhID0+IC9eaHNsLy50ZXN0KGEpLFxuICBjb2w6IGEgPT4gKGlzLmhleChhKSB8fCBpcy5yZ2IoYSkgfHwgaXMuaHNsKGEpKSxcbiAga2V5OiBhID0+ICFkZWZhdWx0SW5zdGFuY2VTZXR0aW5ncy5oYXNPd25Qcm9wZXJ0eShhKSAmJiAhZGVmYXVsdFR3ZWVuU2V0dGluZ3MuaGFzT3duUHJvcGVydHkoYSkgJiYgYSAhPT0gJ3RhcmdldHMnICYmIGEgIT09ICdrZXlmcmFtZXMnLFxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tV2l0aGluUmFuZ2UobWluLCBtYXgsIHNlZWQpIHtcbiAgcmV0dXJuIE1ULnJhbmRvbShzZWVkKSAqIChtYXggLSBtaW4pICsgbWluO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzdGFuY2UoeDAsIHkwLCB4MSwgeTEpIHtcbiAgcmV0dXJuIE1hdGguc3FydCgoeDEgLSB4MCkgKiAoeDEgLSB4MCkgKyAoeTEgLSB5MCkgKiAoeTEgLSB5MCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVncmVlVG9SYWRpYW4oZGVncmVlKSB7XG4gIHJldHVybiAoZGVncmVlIC8gMTgwKSAqIE1hdGguUEk7XG59XG5cbi8qKlxuICog57Wx5LiAIHRvdWNoRXZlbnQvbW91c2VFdmVudCDnmoTkuovku7bop7jnmbzluqfmqJnlj5blvpfmlrnlvI9cbiAqIEBleHBvcnRcbiAqIEBwYXJhbSB7b2JqZWN0fSAg5YKz5YWl55qEZXZlbnQg54mp5Lu2XG4gKiBAcmV0dXJucyB7T2JqZWN0fSDkuIDlgIvnianku7YsIOWFp+WQq+S6i+S7tuinuOeZvOW6p+aomeeahFgvWSDluqfmqJnlgLxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBvaW50ZXJFdmVudFRvWFkoZSkge1xuICB2YXIgb3V0ID0geyB4OiAwLCB5OiAwIH07XG4gIGlmIChlLnR5cGUgPT09ICd0b3VjaHN0YXJ0JyB8fCBlLnR5cGUgPT09ICd0b3VjaG1vdmUnIHx8IGUudHlwZSA9PT0gJ3RvdWNoZW5kJyB8fCBlLnR5cGUgPT09ICd0b3VjaGNhbmNlbCcpIHtcbiAgICB2YXIgdG91Y2ggPSBlLm9yaWdpbmFsRXZlbnQudG91Y2hlc1swXSB8fCBlLm9yaWdpbmFsRXZlbnQuY2hhbmdlZFRvdWNoZXNbMF07XG4gICAgb3V0LnggPSB0b3VjaC5wYWdlWDtcbiAgICBvdXQueSA9IHRvdWNoLnBhZ2VZO1xuICB9IGVsc2UgaWYgKGUudHlwZSA9PT0gJ21vdXNlZG93bicgfHwgZS50eXBlID09PSAnbW91c2V1cCcgfHwgZS50eXBlID09PSAnbW91c2Vtb3ZlJyB8fCBlLnR5cGUgPT09ICdtb3VzZW92ZXInIHx8IGUudHlwZSA9PT0gJ21vdXNlb3V0JyB8fCBlLnR5cGUgPT09ICdtb3VzZWVudGVyJyB8fCBlLnR5cGUgPT09ICdtb3VzZWxlYXZlJykge1xuICAgIG91dC54ID0gZS5wYWdlWDtcbiAgICBvdXQueSA9IGUucGFnZVk7XG4gIH1cbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiDnm7TmjqXlkbzlj6toYXNPd25Qcm9wZXJ0eeeahOWOn+Wei+aWueazlSjnlKjlnKhoYXNPd25Qcm9wZXJ0eeiiq+aUueWLlemBjueahOeLgOazgSlcbiAqXG4gKiBAZXhwb3J0XG4gKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0IOebruaomeeJqeS7tlxuICogQHBhcmFtIHtzdHJpbmd9IHByb3Ag55uu5qiZcHJvcFxuICogQHJldHVybnMge2Jvb2xlYW59IOaYry/lkKZcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRhcmdldEhhc1Byb3AodGFyZ2V0LCBwcm9wKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodGFyZ2V0LCBwcm9wKTtcbn1cblxuLyoqXG4gKiDnorroqo3kuIDlgIvorormlbgv5YC85piv5ZCm54K656m6KDDkuI3nrpfnqbrlgLwpXG4gKiBAZXhwb3J0XG4gKiBAcGFyYW0geyp9IHZhbFxuICogQHJldHVybnMge2Jvb2xlYW59IOaYry/lkKZcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzRW1wdHkodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnbnVtYmVyJyA/IGlzTmFOKHZhbCkgOiAhdmFsO1xufVxuXG5cbmZ1bmN0aW9uIHJnYlRvUmdiYShyZ2JWYWx1ZSkge1xuICBjb25zdCByZ2IgPSAvcmdiXFwoKFxcZCssXFxzKltcXGRdKyxcXHMqW1xcZF0rKVxcKS9nLmV4ZWMocmdiVmFsdWUpO1xuICByZXR1cm4gcmdiID8gYHJnYmEoJHtyZ2JbMV19LDEpYCA6IHJnYlZhbHVlO1xufVxuXG5mdW5jdGlvbiBoZXhUb1JnYmEoaGV4VmFsdWUpIHtcbiAgY29uc3Qgcmd4ID0gL14jPyhbYS1mXFxkXSkoW2EtZlxcZF0pKFthLWZcXGRdKSQvaTtcbiAgY29uc3QgaGV4ID0gaGV4VmFsdWUucmVwbGFjZShyZ3gsIChtLCByLCBnLCBiKSA9PiByICsgciArIGcgKyBnICsgYiArIGIpO1xuICBjb25zdCByZ2IgPSAvXiM/KFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pJC9pLmV4ZWMoaGV4KTtcbiAgY29uc3QgciA9IHBhcnNlSW50KHJnYlsxXSwgMTYpO1xuICBjb25zdCBnID0gcGFyc2VJbnQocmdiWzJdLCAxNik7XG4gIGNvbnN0IGIgPSBwYXJzZUludChyZ2JbM10sIDE2KTtcbiAgcmV0dXJuIGByZ2JhKCR7cn0sJHtnfSwke2J9LDEpYDtcbn1cblxuZnVuY3Rpb24gaHNsVG9SZ2JhKGhzbFZhbHVlKSB7XG4gIGNvbnN0IGhzbCA9IC9oc2xcXCgoXFxkKyksXFxzKihbXFxkLl0rKSUsXFxzKihbXFxkLl0rKSVcXCkvZy5leGVjKGhzbFZhbHVlKSB8fCAvaHNsYVxcKChcXGQrKSxcXHMqKFtcXGQuXSspJSxcXHMqKFtcXGQuXSspJSxcXHMqKFtcXGQuXSspXFwpL2cuZXhlYyhoc2xWYWx1ZSk7XG4gIGNvbnN0IGggPSBwYXJzZUludChoc2xbMV0sIDEwKSAvIDM2MDtcbiAgY29uc3QgcyA9IHBhcnNlSW50KGhzbFsyXSwgMTApIC8gMTAwO1xuICBjb25zdCBsID0gcGFyc2VJbnQoaHNsWzNdLCAxMCkgLyAxMDA7XG4gIGNvbnN0IGEgPSBoc2xbNF0gfHwgMTtcbiAgZnVuY3Rpb24gaHVlMnJnYihwLCBxLCB0KSB7XG4gICAgaWYgKHQgPCAwKSB0ICs9IDE7XG4gICAgaWYgKHQgPiAxKSB0IC09IDE7XG4gICAgaWYgKHQgPCAxIC8gNikgcmV0dXJuIHAgKyAocSAtIHApICogNiAqIHQ7XG4gICAgaWYgKHQgPCAxIC8gMikgcmV0dXJuIHE7XG4gICAgaWYgKHQgPCAyIC8gMykgcmV0dXJuIHAgKyAocSAtIHApICogKDIgLyAzIC0gdCkgKiA2O1xuICAgIHJldHVybiBwO1xuICB9XG4gIGxldCByLCBnLCBiO1xuICBpZiAocyA9PSAwKSB7XG4gICAgciA9IGcgPSBiID0gbDtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBxID0gbCA8IDAuNSA/IGwgKiAoMSArIHMpIDogbCArIHMgLSBsICogcztcbiAgICBjb25zdCBwID0gMiAqIGwgLSBxO1xuICAgIHIgPSBodWUycmdiKHAsIHEsIGggKyAxIC8gMyk7XG4gICAgZyA9IGh1ZTJyZ2IocCwgcSwgaCk7XG4gICAgYiA9IGh1ZTJyZ2IocCwgcSwgaCAtIDEgLyAzKTtcbiAgfVxuICByZXR1cm4gYHJnYmEoJHtyICogMjU1fSwke2cgKiAyNTV9LCR7YiAqIDI1NX0sJHthfSlgO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29sb3JUb1JnYmEodmFsKSB7XG4gIGlmIChpcy5yZ2IodmFsKSkgcmV0dXJuIHJnYlRvUmdiYSh2YWwpO1xuICBpZiAoaXMuaGV4KHZhbCkpIHJldHVybiBoZXhUb1JnYmEodmFsKTtcbiAgaWYgKGlzLmhzbCh2YWwpKSByZXR1cm4gaHNsVG9SZ2JhKHZhbCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDaGFubmVsVmFsdWVzRnJvbVJnYmEocmdiYSkge1xuICByZXR1cm4gcmdiYS5yZXBsYWNlKC9eKHJnYnxyZ2JhKVxcKC8sICcnKS5yZXBsYWNlKC9cXCkkLywgJycpLnJlcGxhY2UoL1xccy9nLCAnJykuc3BsaXQoJywnKS5tYXAoeCA9PiBwYXJzZUludCh4KSk7XG59XG5cblxuXG5leHBvcnQgZnVuY3Rpb24gY2FsY1dheXBvaW50cyh2ZXJ0aWNlcywgaW50ZXJwb2xhdGUgPSAzMCkge1xuICB2YXIgd2F5cG9pbnRzID0gW107XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgdmVydGljZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgcHQwID0gdmVydGljZXNbaSAtIDFdO1xuICAgIHZhciBwdDEgPSB2ZXJ0aWNlc1tpXTtcbiAgICB2YXIgZHggPSBwdDEueCAtIHB0MC54O1xuICAgIHZhciBkeSA9IHB0MS55IC0gcHQwLnk7XG4gICAgZm9yICh2YXIgaiA9IDA7IGogPD0gaW50ZXJwb2xhdGU7IGorKykge1xuICAgICAgdmFyIHggPSBwdDAueCArIGR4ICogaiAvIGludGVycG9sYXRlO1xuICAgICAgdmFyIHkgPSBwdDAueSArIGR5ICogaiAvIGludGVycG9sYXRlO1xuICAgICAgd2F5cG9pbnRzLnB1c2goe1xuICAgICAgICB4OiB4LFxuICAgICAgICB5OiB5XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuXG4gIHJldHVybiAod2F5cG9pbnRzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhZFN0cmluZyh0YXJnZXRTdHIsIGxlbmd0aCwgcGFkU3RyaW5nID0gJzAnKSB7XG4gIHZhciBzdHIgPSB0YXJnZXRTdHIudG9TdHJpbmcoKTtcbiAgd2hpbGUgKHN0ci5sZW5ndGggPCBsZW5ndGgpXG4gICAgc3RyID0gcGFkU3RyaW5nICsgc3RyO1xuICByZXR1cm4gc3RyO1xufSIsImV4cG9ydCBmdW5jdGlvbiBkcmF3U3F1YXJlKGN0eCwgeCwgeSwgd2lkdGgsIGNvbG9yLCBhbHBoYSkge1xuICBjdHguc2F2ZSgpO1xuICBjdHguZmlsbFN0eWxlID0gY29sb3I7XG4gIGN0eC5nbG9iYWxBbHBoYSA9IGFscGhhO1xuICBjdHguZmlsbFJlY3QoeCAtIHdpZHRoIC8gMiwgeSAtIHdpZHRoIC8gMiwgd2lkdGgsIHdpZHRoKTtcbiAgY3R4LnJlc3RvcmUoKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBkcmF3UmVjdChjdHgsIHgsIHksIHdpZHRoLCBoZWlnaHQsIGNvbG9yLCBhbHBoYSkge1xuICBjdHguc2F2ZSgpO1xuICBjdHguZmlsbFN0eWxlID0gY29sb3I7XG4gIGN0eC5nbG9iYWxBbHBoYSA9IGFscGhhO1xuICBjdHguZmlsbFJlY3QoeCAtIHdpZHRoIC8gMiwgeSAtIGhlaWdodCAvIDIsIHdpZHRoLCBoZWlnaHQpO1xuICBjdHgucmVzdG9yZSgpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGRyYXdDaXJjbGUoY3R4LCB4LCB5LCB3aWR0aCwgY29sb3IsIGFscGhhID0gMSkge1xuICBjdHguc2F2ZSgpXG4gIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgY3R4Lmdsb2JhbEFscGhhID0gYWxwaGE7XG4gIGN0eC5iZWdpblBhdGgoKTtcbiAgY3R4LmFyYyh4LCB5LCB3aWR0aCAvIDIsIDAsIE1hdGguUEkgKiAyLCB0cnVlKTtcbiAgY3R4LmNsb3NlUGF0aCgpO1xuICBjdHguZmlsbCgpO1xuICBjdHgucmVzdG9yZSgpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGRyYXdMaW5lKGN0eCwgeDAsIHkwLCB4MSwgeTEsIHN0cm9rZUNvbG9yLCBzdHJva2VXaWR0aCkge1xuICBjdHguc2F2ZSgpO1xuICBjdHguc3Ryb2tlU3R5bGUgPSBzdHJva2VDb2xvcjtcbiAgY3R4LmxpbmVXaWR0aCA9IHN0cm9rZVdpZHRoO1xuICBjdHguYmVnaW5QYXRoKCk7XG4gIGN0eC5tb3ZlVG8oeDAsIHkwKTtcbiAgY3R4LmxpbmVUbyh4MSwgeTEpO1xuICBjdHguY2xvc2VQYXRoKCk7XG4gIGN0eC5zdHJva2UoKTtcbiAgY3R4LnJlc3RvcmUoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRyYXdUZXh0KGN0eCwgdGV4dENvbnRlbnQgPSAndGV4dCcsIHgsIHksIGNvbG9yID0gJyMwMDAnLCBmb250U2l6ZSA9IDEyLCBmb250ID0gJ0FyaWFsJykge1xuICBjdHguc2F2ZSgpO1xuICBjdHguZmlsbFN0eWxlID0gY29sb3I7XG4gIGN0eC5mb250ID0gYCR7Zm9udFNpemV9cHggJHtmb250fWA7XG4gIGN0eC5maWxsVGV4dCh0ZXh0Q29udGVudCwgeCwgeSk7XG4gIGN0eC5yZXN0b3JlKCk7XG59XG5cbiIsImV4cG9ydCBmdW5jdGlvbiBnZXRTY3JlZW5zaG90SW1hZ2UodGFyZ2V0Q3ZzKSB7XG4gIGxldCB1cmwgPSB0YXJnZXRDdnMudG9EYXRhVVJMKCk7XG4gIGxldCBpbWFnZSA9IG5ldyBJbWFnZSh0YXJnZXRDdnMud2lkdGgsIHRhcmdldEN2cy5oZWlnaHQpO1xuICBpbWFnZS5zcmMgPSB1cmw7XG4gIHJldHVybiBpbWFnZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENhY2hlQ2FudmFzKHRhcmdldEN0eCkge1xuICBsZXQgY2FjaGVDdnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgbGV0IGNhY2hlQ3R4ID0gY2FjaGVDdnMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgbGV0IHNvdXJjZVdpZHRoID0gdGFyZ2V0Q3R4LmNhbnZhcy53aWR0aDtcbiAgbGV0IHNvdXJjZUhlaWdodCA9IHRhcmdldEN0eC5jYW52YXMuaGVpZ2h0O1xuICBjYWNoZUN2cy53aWR0aCA9IHNvdXJjZVdpZHRoO1xuICBjYWNoZUN2cy5oZWlnaHQgPSBzb3VyY2VIZWlnaHQ7XG5cbiAgbGV0IGNhY2hlRGF0YSA9IHRhcmdldEN0eC5nZXRJbWFnZURhdGEoMCwgMCwgc291cmNlV2lkdGgsIHNvdXJjZUhlaWdodCk7XG4gIGNhY2hlQ3R4LnB1dEltYWdlRGF0YShjYWNoZURhdGEsIDAsIDApO1xuICByZXR1cm4gY2FjaGVDdnM7XG59IiwiaW1wb3J0IHsgQ2FudmFzMkRGeEJhc2UsIGJvb3QgfSBmcm9tICcuL2xpYi9iYXNlJztcbmltcG9ydCB7IGRyYXdDaXJjbGUgfSBmcm9tICcuL2xpYi9zaGFwZSc7XG5pbXBvcnQgeyAkIH0gZnJvbSAnLi9saWIvZG9tJ1xuaW1wb3J0IHsgdG9nZ2xlIH0gZnJvbSAnLi9saWIvZG9tJztcblxuY29uc3QgQkFMTF9BTklNQVRJT05fREVGQVVMVCA9IHtcbiAgYWZ0ZXJJbWFnZTogZmFsc2UsXG4gIHJhZGl1czogMjUsXG4gIGNvbG9yOiAnYmx1ZScsXG4gIHNwZWVkWDogMTAwMCxcbiAgc3BlZWRZOiAxMDAwLFxuICBhY2NlbGVyYXRpb25YOiAwLFxuICBhY2NlbGVyYXRpb25ZOiAwLFxuICBmcmljdGlvblg6IDEsXG4gIGZyaWN0aW9uWTogMC45OTk3XG59XG5cbmNvbnN0IFNQT1RTX0FOSU1BVElPTl9ERUZBVUxUID0ge1xuICBtaW5TaXplOiAxMCxcbiAgbWF4U2l6ZTogMjAsXG4gIHBlcmlvZDogMzAwLFxuICBzdGVwOiAxMCxcbiAgYm90dG9tTGF5ZXI6IG51bGwsXG4gIGNvbG9yOiAncmdiYSgwLDAsMCwwLjAzKScsXG4gIGNvbDogMTUsXG4gIHJvdzogMTVcbn1cblxuY2xhc3MgQmFzaWNSZWZlbGVjdGlvbiBleHRlbmRzIENhbnZhczJERnhCYXNlIHtcbiAgY29uc3RydWN0b3IoY2FudmFzLCBkZWZhdWx0Q29uZmlnLCBjb25maWcsIHZpcnR1YWxQYXJlbnQpIHtcbiAgICBzdXBlcihjYW52YXMsIGRlZmF1bHRDb25maWcsIGNvbmZpZywgdmlydHVhbFBhcmVudCk7XG4gICAgdGhpcy5zd2l0Y2hTdGF0dXMgPSBmYWxzZTtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuICBpbml0KCkge1xuICAgIHRoaXMuc3dpdGNoU3RhdHVzID0gdHJ1ZTtcbiAgICB0aGlzLmluaXRCYWxsKCk7XG4gICAgdGhpcy5hbmltYXRlQmFsbCgpO1xuICB9XG5cbiAgc3dpdGNoZXIoc3RhdHVzKSB7XG4gICAgdGhpcy5zd2l0Y2hTdGF0dXMgPSBzdGF0dXM7XG4gIH1cblxuICBpbml0QmFsbCgpIHtcbiAgICBsZXQgJHRoaXMgPSB0aGlzO1xuICAgIHRoaXMuYmFsbCA9IHtcbiAgICAgIGFmdGVySW1hZ2U6ICR0aGlzLmNvbmZpZy5hZnRlckltYWdlLFxuICAgICAgY29sb3I6ICR0aGlzLmNvbmZpZy5jb2xvcixcbiAgICAgIHJhZGl1czogJHRoaXMuY29uZmlnLnJhZGl1cyxcbiAgICAgIGxvY2F0aW9uOiB7XG4gICAgICAgIHg6ICR0aGlzLmN2cy53aWR0aCAvIDIsXG4gICAgICAgIHk6ICR0aGlzLmN2cy5oZWlnaHQgLyAyLFxuICAgICAgfSxcbiAgICAgIHNwZWVkOiB7XG4gICAgICAgIHg6ICR0aGlzLmNvbmZpZy5zcGVlZFgsXG4gICAgICAgIHk6ICR0aGlzLmNvbmZpZy5zcGVlZFlcbiAgICAgIH0sXG4gICAgICBhY2NlbGVyYXRpb246IHtcbiAgICAgICAgeDogJHRoaXMuY29uZmlnLmFjY2VsZXJhdGlvblgsXG4gICAgICAgIHk6ICR0aGlzLmNvbmZpZy5hY2NlbGVyYXRpb25ZXG4gICAgICB9LFxuICAgICAgZnJpY3Rpb246IHtcbiAgICAgICAgeDogJHRoaXMuY29uZmlnLmZyaWN0aW9uWCxcbiAgICAgICAgeTogJHRoaXMuY29uZmlnLmZyaWN0aW9uWVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBkcmF3QmFsbCgpIHtcbiAgICBkcmF3Q2lyY2xlKHRoaXMuY3R4LCB0aGlzLmJhbGwubG9jYXRpb24ueCwgdGhpcy5iYWxsLmxvY2F0aW9uLnksIHRoaXMuYmFsbC5yYWRpdXMgKiAyLCB0aGlzLmJhbGwuY29sb3IpO1xuICB9XG4gIGFuaW1hdGVCYWxsKCkge1xuICAgIGlmICh0aGlzLnN3aXRjaFN0YXR1cyA9PSBmYWxzZSkgcmV0dXJuO1xuICAgIGxldCAkdGhpcyA9IHRoaXM7XG4gICAgaWYgKCR0aGlzLmJhbGwuYWZ0ZXJJbWFnZSA9PT0gdHJ1ZSkge1xuICAgICAgJHRoaXMuYmFja2dyb3VuZCgncmdiKDI1NSwgMTc3LCA0MywwLjEpJyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgJHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCAkdGhpcy5jdnMud2lkdGgsICR0aGlzLmN2cy5oZWlnaHQpO1xuICAgIH1cbiAgICAkdGhpcy5jdHguZHJhd0ltYWdlKCR0aGlzLmNvbmZpZy5ib3R0b21MYXllciwgMCwgMCk7XG4gICAgJHRoaXMuZHJhd0JhbGwoKTtcbiAgICAkdGhpcy5yZWZyZXNoTG9jYXRpb24oKTtcbiAgICAkdGhpcy5yZWZyZXNoU3BlZWQoKTtcbiAgICAkdGhpcy5jaGVja0JvdW5kYXJ5KCk7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKFxuICAgICAgJHRoaXMuYW5pbWF0ZUJhbGwuYmluZCgkdGhpcylcbiAgICApO1xuICB9XG5cbiAgcmVmcmVzaFNwZWVkKCkge1xuICAgIGxldCBkdCA9IHRoaXMudGltZUVsYXBzZWQ7XG4gICAgdGhpcy5iYWxsLnNwZWVkLnggPSB0aGlzLmJhbGwuc3BlZWQueCAqIHRoaXMuYmFsbC5mcmljdGlvbi54ICsgdGhpcy5iYWxsLmFjY2VsZXJhdGlvbi54ICogZHQ7XG4gICAgdGhpcy5iYWxsLnNwZWVkLnkgPSB0aGlzLmJhbGwuc3BlZWQueSAqIHRoaXMuYmFsbC5mcmljdGlvbi55ICsgdGhpcy5iYWxsLmFjY2VsZXJhdGlvbi55ICogZHQ7XG4gIH1cblxuICByZWZyZXNoTG9jYXRpb24oKSB7XG4gICAgbGV0IGR0ID0gdGhpcy50aW1lRWxhcHNlZDtcbiAgICB0aGlzLmJhbGwubG9jYXRpb24ueCArPSB0aGlzLmJhbGwuc3BlZWQueCAqIGR0O1xuICAgIHRoaXMuYmFsbC5sb2NhdGlvbi55ICs9IHRoaXMuYmFsbC5zcGVlZC55ICogZHQ7XG4gIH1cbiAgY2hlY2tCb3VuZGFyeSgpIHtcbiAgICBsZXQgYmFsbCA9IHRoaXMuYmFsbDtcbiAgICBsZXQgY2FudmFzID0gdGhpcy5jdnM7XG4gICAgLy8g55W255CD5q2j5Zyo5bqV56uvXG4gICAgaWYgKGJhbGwubG9jYXRpb24ueSArIGJhbGwucmFkaXVzID4gY2FudmFzLmhlaWdodCkge1xuICAgICAgLy8g5LiU6YCf5bqm54K65q2j5YC877yI5pyd5LiL77yJXG4gICAgICBpZiAoYmFsbC5zcGVlZC55ID4gMCkge1xuICAgICAgICBiYWxsLnNwZWVkLnkgPSAtYmFsbC5zcGVlZC55O1xuICAgICAgfVxuICAgIH1cbiAgICAvLyDnlbbnkIPmraPlnKjpoILnq69cbiAgICBlbHNlIGlmIChiYWxsLmxvY2F0aW9uLnkgLSBiYWxsLnJhZGl1cyA8IDApIHtcbiAgICAgIC8vIOS4lOmAn+W6pueCuuiyoOWAvO+8iOacneS4iu+8iVxuICAgICAgaWYgKGJhbGwuc3BlZWQueSA8IDApIHtcbiAgICAgICAgYmFsbC5zcGVlZC55ID0gLWJhbGwuc3BlZWQueTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyDnlbbnkIPmraPlnKjlj7Pnq69cbiAgICBpZiAoYmFsbC5sb2NhdGlvbi54ICsgYmFsbC5yYWRpdXMgPiBjYW52YXMud2lkdGgpIHtcbiAgICAgIGlmIChiYWxsLnNwZWVkLnggPiAwKSB7XG4gICAgICAgIGJhbGwuc3BlZWQueCA9IC1iYWxsLnNwZWVkLng7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIOeVtueQg+ato+WcqOW3puerr1xuICAgIGVsc2UgaWYgKGJhbGwubG9jYXRpb24ueCAtIGJhbGwucmFkaXVzIDwgMCkge1xuICAgICAgaWYgKGJhbGwuc3BlZWQueCA8IDApIHtcbiAgICAgICAgYmFsbC5zcGVlZC54ID0gLWJhbGwuc3BlZWQueDtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxufVxuXG5jbGFzcyBTcG90c0J1bXBpbmcgZXh0ZW5kcyBDYW52YXMyREZ4QmFzZSB7XG4gIGNvbnN0cnVjdG9yKGNhbnZhcywgZGVmYXVsdENvbmZpZywgY29uZmlnLCB2aXJ0dWFsUGFyZW50KSB7XG4gICAgc3VwZXIoY2FudmFzLCBkZWZhdWx0Q29uZmlnLCBjb25maWcsIHZpcnR1YWxQYXJlbnQpO1xuICAgIHRoaXMuc3BvdHNTaXplID0gdGhpcy5jb25maWcubWluU2l6ZTtcbiAgICB0aGlzLmV4cGFuZCA9IHRydWU7XG4gICAgdGhpcy5zd2l0Y2hTdGF0dXMgPSBmYWxzZTtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuICBpbml0KCkge1xuICAgIHRoaXMuc3dpdGNoU3RhdHVzID0gdHJ1ZTtcbiAgICB0aGlzLmFuaW1hdGUoKTtcbiAgfVxuXG4gIHN3aXRjaGVyKHN0YXR1cykge1xuICAgIHRoaXMuc3dpdGNoU3RhdHVzID0gc3RhdHVzO1xuICB9XG5cbiAgYW5pbWF0ZSgpIHtcbiAgICBsZXQgJHRoaXMgPSB0aGlzO1xuICAgIHRoaXMuaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5zd2l0Y2hTdGF0dXMpIHtcbiAgICAgICAgJHRoaXMuY2xlYXIoKTtcbiAgICAgICAgJHRoaXMuZHJhd1Nwb3RzKCk7XG4gICAgICB9XG4gICAgfSwgdGhpcy5jb25maWcucGVyaW9kKVxuICB9XG5cbiAgZHJhd1Nwb3RzKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IHRoaXMuY29uZmlnLmNvbDsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8PSB0aGlzLmNvbmZpZy5jb2w7IGorKykge1xuICAgICAgICBkcmF3Q2lyY2xlKFxuICAgICAgICAgIHRoaXMuY3R4LFxuICAgICAgICAgIGkgKiB0aGlzLmN2cy53aWR0aCAvIHRoaXMuY29uZmlnLmNvbCxcbiAgICAgICAgICBqICogdGhpcy5jdnMuaGVpZ2h0IC8gdGhpcy5jb25maWcucm93LFxuICAgICAgICAgIHRoaXMuc3BvdHNTaXplLFxuICAgICAgICAgIHRoaXMuY29uZmlnLmNvbG9yLFxuICAgICAgICAgIDFcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5zcG90c1NpemUgLSAxIDwgdGhpcy5jb25maWcubWluU2l6ZSkge1xuICAgICAgdGhpcy5leHBhbmQgPSB0cnVlXG4gICAgfVxuICAgIGVsc2UgaWYgKHRoaXMuc3BvdHNTaXplICsgMSA+IHRoaXMuY29uZmlnLm1heFNpemUpIHtcbiAgICAgIHRoaXMuZXhwYW5kID0gZmFsc2VcbiAgICB9XG4gICAgaWYgKHRoaXMuZXhwYW5kKSB7XG4gICAgICB0aGlzLnNwb3RzU2l6ZSArPSB0aGlzLmNvbmZpZy5zdGVwO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuc3BvdHNTaXplIC09IHRoaXMuY29uZmlnLnN0ZXA7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0U3BsYXNoKCkge1xuICBsZXQgaW5pdGlhbFNjcmVlbiA9ICQoJyNpbml0aWFsLXNjcmVlbicpO1xuICBsZXQgdmlydHVhbENhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICBsZXQgc3dpdGNoZXI7XG4gIGxldCBzcG90QW5pbWF0aW9uID0gYm9vdChTcG90c0J1bXBpbmcsIFNQT1RTX0FOSU1BVElPTl9ERUZBVUxULCB7fSwgdmlydHVhbENhbnZhcywgaW5pdGlhbFNjcmVlbik7XG4gIGxldCBzcGxhc2hQcm9taXNlID0gc3BvdEFuaW1hdGlvbi5wcm9taXNlLnRoZW4oKHNwb3RzQnVtcGluZ0luc3RhbmNlKSA9PiB7XG4gICAgbGV0IGJvb3RDb250cm9sbGVyID0gYm9vdChCYXNpY1JlZmVsZWN0aW9uLCBCQUxMX0FOSU1BVElPTl9ERUZBVUxULCB7XG4gICAgICBhZnRlckltYWdlOiB0cnVlLFxuICAgICAgcmFkaXVzOiA0MCxcbiAgICAgIGNvbG9yOiAncmdiYSgwLCAwLCAwLDAuNzUpJyxcbiAgICAgIHNwZWVkWDogMTAwMCxcbiAgICAgIGJvdHRvbUxheWVyOiBzcG90c0J1bXBpbmdJbnN0YW5jZS5jdnMsXG4gICAgICBzcGVlZFk6IDEwMDAsXG4gICAgICBhY2NlbGVyYXRpb25YOiAwLFxuICAgICAgYWNjZWxlcmF0aW9uWTogOTgwLFxuICAgICAgZnJpY3Rpb25YOiAxLFxuICAgIH0sIGluaXRpYWxTY3JlZW4pO1xuXG4gICAgYm9vdENvbnRyb2xsZXIudHJpZ2dlcigpO1xuXG4gICAgcmV0dXJuIGJvb3RDb250cm9sbGVyLnByb21pc2UudGhlbigoYmFzaWNSZWZlbGVjdGlvbkluc3RhbmNlKSA9PiB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzID0+IHtcbiAgICAgICAgc3dpdGNoZXIgPSAoc3RhdHVzKSA9PiB7XG4gICAgICAgICAgc3BvdHNCdW1waW5nSW5zdGFuY2Uuc3dpdGNoZXIoc3RhdHVzKTtcbiAgICAgICAgICBiYXNpY1JlZmVsZWN0aW9uSW5zdGFuY2Uuc3dpdGNoZXIoc3RhdHVzKTtcbiAgICAgICAgfVxuICAgICAgICByZXMoc3dpdGNoZXIpO1xuICAgICAgfSlcbiAgICB9KVxuICB9KVxuICBzcG90QW5pbWF0aW9uLnRyaWdnZXIoKTtcblxuICByZXR1cm4gc3BsYXNoUHJvbWlzZTtcbn1cblxuIiwiZXhwb3J0IGNvbnN0IHBsYXllcnNEYXRhID0gW1xuICB7XG4gICAgaWQ6IDAsXG4gICAgbmFtZTogJz8/PycsXG4gICAgc2NvcmU6IDAsXG4gICAgd2lkdGg6IDAsXG4gICAgcG9zaXRpb246IHtcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwXG4gICAgfVxuICB9LFxuICB7XG4gICAgaWQ6IDEsXG4gICAgbmFtZTogJz8/PycsXG4gICAgc2NvcmU6IDAsXG4gICAgd2lkdGg6IDAsXG4gICAgcG9zaXRpb246IHtcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwXG4gICAgfVxuICB9XG5dO1xuXG5leHBvcnQgY29uc3QgYmFsbERhdGEgPSB7XG4gIHBvc2l0aW9uOiB7XG4gICAgeDogMCxcbiAgICB5OiAwXG4gIH0sXG4gIHNwZWVkOiB7XG4gICAgeDogMCxcbiAgICB5OiAwXG4gIH0sXG4gIHNpemU6IDAsXG4gIGNvbG9yOiBudWxsLFxuICBpc1N0dWNrOiB0cnVlXG59XG5cblxuXG5leHBvcnQgY29uc3QgcGxheWVyUmVmID0ge1xuICBuYW1lOiAnPz8/JyxcbiAgbnVtYmVyOiAwXG59OyIsImltcG9ydCB7IGluaXRVSSwgc3RhcnRDb3VudGluZyB9IGZyb20gJy4vdWknO1xuaW1wb3J0IHsgaW5pdFNwbGFzaCB9IGZyb20gJy4vY29yZS9zcGxhc2gnO1xuaW1wb3J0IHsgZ2FtZUJ1aWxkZXIgfSBmcm9tICcuL2NvcmUvZ2FtZSc7XG5cblxuY29uc3Qgc29ja2V0ID0gcmVxdWlyZSgnc29ja2V0LmlvLWNsaWVudCcpKCdodHRwOi8vbG9jYWxob3N0OjMwMDAnKTtcblxubGV0IHNwbGFzaFN3aXRjaGVyO1xubGV0IHNwbGFzaFByb21pc2UgPSBpbml0U3BsYXNoKCk7XG5zcGxhc2hQcm9taXNlLnRoZW4oKHN3aXRjaGVyKSA9PiB7XG4gIHNwbGFzaFN3aXRjaGVyID0gc3dpdGNoZXI7XG59KVxuXG5sZXQgdWlJbml0UHJvbWlzZSA9IGluaXRVSShzb2NrZXQpO1xuZXhwb3J0IGNvbnN0IGdhbWUgPSBnYW1lQnVpbGRlcigpO1xuXG4vLyDkuIrnt5rlvozopoHnp7vpmaQgc3RhcnRcbmdhbWUucHJvbWlzZS50aGVuKCgpID0+IHtcbiAgd2luZG93LmdvID0gKCkgPT4ge1xuICAgIGdhbWUuY29udHJvbGxlci5zdXJyb3VuZGluZy5jbGFzc0xpc3QuYWRkKCdwcm9tb3RlZCcpO1xuICAgIGxldCBnYW1lUmVhZHlQcm9taXNlID0gZ2FtZS5jb250cm9sbGVyLmRyYXdHYW1lKCk7XG4gICAgZ2FtZVJlYWR5UHJvbWlzZS50aGVuKCgpID0+IHtcbiAgICAgIHNwbGFzaFN3aXRjaGVyKGZhbHNlKTtcbiAgICB9KVxuICB9XG59KVxuLy8g5LiK57ea5b6M6KaB56e76ZmkIGVuZFxuXG51aUluaXRQcm9taXNlLnRoZW4oKCkgPT4ge1xuICBnYW1lLnRyaWdnZXIoKTtcbn0pXG5cbnNvY2tldC5vbignZ2FtZUluaXQnLCAoKSA9PiB7XG4gIHN0YXJ0Q291bnRpbmcoKCkgPT4ge1xuICAgIGdhbWUuY29udHJvbGxlci5zdXJyb3VuZGluZy5jbGFzc0xpc3QuYWRkKCdwcm9tb3RlZCcpO1xuICAgIGdhbWUuY29udHJvbGxlci5zY29yZWJvYXJkcy51cGRhdGUoKTtcbiAgICBsZXQgZ2FtZVJlYWR5UHJvbWlzZSA9IGdhbWUuY29udHJvbGxlci5kcmF3R2FtZSgpO1xuICAgIGdhbWVSZWFkeVByb21pc2UudGhlbigoKSA9PiB7XG4gICAgICBzcGxhc2hTd2l0Y2hlcihmYWxzZSk7XG4gICAgfSlcbiAgfSlcbn0pXG5cbnNvY2tldC5vbignaG9zdC1sZWF2ZScsICgpID0+IHtcbiAgZ2FtZS5jb250cm9sbGVyLnN1cnJvdW5kaW5nLmNsYXNzTGlzdC5yZW1vdmUoJ3Byb21vdGVkJyk7XG59KVxuXG5zb2NrZXQub24oJ2NoYWxsZW5nZXItbGVhdmUnLCAoKSA9PiB7XG4gIGdhbWUuY29udHJvbGxlci5zdXJyb3VuZGluZy5jbGFzc0xpc3QucmVtb3ZlKCdwcm9tb3RlZCcpO1xufSlcblxuc29ja2V0Lm9uKCdsZWF2ZScsICgpID0+IHtcbiAgZ2FtZS5jb250cm9sbGVyLnN1cnJvdW5kaW5nLmNsYXNzTGlzdC5yZW1vdmUoJ3Byb21vdGVkJyk7XG59KVxuXG5zb2NrZXQub24oJ3Rvb01hbnlQbGF5ZXJzJywgKCkgPT4ge1xuICBhbGVydCgnUm9vbSBJcyBGdWxsIE5vdycpO1xufSlcblxuc29ja2V0Lm9uKCd1bmtub3duQ29kZScsICgpID0+IHtcbiAgYWxlcnQoJ0luY29ycmVjdCBSb29tIENvZGUnKTtcbn0pXG5cbnNvY2tldC5vbignaG9zdENhbnRCZUd1ZXN0JywgKCkgPT4ge1xuICBhbGVydChcIllvdSBDYW4ndCBKb2luIFRoZSBHYW1lIFlvdSBBcmUgSG9zdGluZ1wiKTtcbn0pXG5cblxuIiwiXG4vKipcbiAqIEV4cG9zZSBgQmFja29mZmAuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBCYWNrb2ZmO1xuXG4vKipcbiAqIEluaXRpYWxpemUgYmFja29mZiB0aW1lciB3aXRoIGBvcHRzYC5cbiAqXG4gKiAtIGBtaW5gIGluaXRpYWwgdGltZW91dCBpbiBtaWxsaXNlY29uZHMgWzEwMF1cbiAqIC0gYG1heGAgbWF4IHRpbWVvdXQgWzEwMDAwXVxuICogLSBgaml0dGVyYCBbMF1cbiAqIC0gYGZhY3RvcmAgWzJdXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9wdHNcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gQmFja29mZihvcHRzKSB7XG4gIG9wdHMgPSBvcHRzIHx8IHt9O1xuICB0aGlzLm1zID0gb3B0cy5taW4gfHwgMTAwO1xuICB0aGlzLm1heCA9IG9wdHMubWF4IHx8IDEwMDAwO1xuICB0aGlzLmZhY3RvciA9IG9wdHMuZmFjdG9yIHx8IDI7XG4gIHRoaXMuaml0dGVyID0gb3B0cy5qaXR0ZXIgPiAwICYmIG9wdHMuaml0dGVyIDw9IDEgPyBvcHRzLmppdHRlciA6IDA7XG4gIHRoaXMuYXR0ZW1wdHMgPSAwO1xufVxuXG4vKipcbiAqIFJldHVybiB0aGUgYmFja29mZiBkdXJhdGlvbi5cbiAqXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkJhY2tvZmYucHJvdG90eXBlLmR1cmF0aW9uID0gZnVuY3Rpb24oKXtcbiAgdmFyIG1zID0gdGhpcy5tcyAqIE1hdGgucG93KHRoaXMuZmFjdG9yLCB0aGlzLmF0dGVtcHRzKyspO1xuICBpZiAodGhpcy5qaXR0ZXIpIHtcbiAgICB2YXIgcmFuZCA9ICBNYXRoLnJhbmRvbSgpO1xuICAgIHZhciBkZXZpYXRpb24gPSBNYXRoLmZsb29yKHJhbmQgKiB0aGlzLmppdHRlciAqIG1zKTtcbiAgICBtcyA9IChNYXRoLmZsb29yKHJhbmQgKiAxMCkgJiAxKSA9PSAwICA/IG1zIC0gZGV2aWF0aW9uIDogbXMgKyBkZXZpYXRpb247XG4gIH1cbiAgcmV0dXJuIE1hdGgubWluKG1zLCB0aGlzLm1heCkgfCAwO1xufTtcblxuLyoqXG4gKiBSZXNldCB0aGUgbnVtYmVyIG9mIGF0dGVtcHRzLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuQmFja29mZi5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbigpe1xuICB0aGlzLmF0dGVtcHRzID0gMDtcbn07XG5cbi8qKlxuICogU2V0IHRoZSBtaW5pbXVtIGR1cmF0aW9uXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5CYWNrb2ZmLnByb3RvdHlwZS5zZXRNaW4gPSBmdW5jdGlvbihtaW4pe1xuICB0aGlzLm1zID0gbWluO1xufTtcblxuLyoqXG4gKiBTZXQgdGhlIG1heGltdW0gZHVyYXRpb25cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkJhY2tvZmYucHJvdG90eXBlLnNldE1heCA9IGZ1bmN0aW9uKG1heCl7XG4gIHRoaXMubWF4ID0gbWF4O1xufTtcblxuLyoqXG4gKiBTZXQgdGhlIGppdHRlclxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuQmFja29mZi5wcm90b3R5cGUuc2V0Sml0dGVyID0gZnVuY3Rpb24oaml0dGVyKXtcbiAgdGhpcy5qaXR0ZXIgPSBqaXR0ZXI7XG59O1xuXG4iLCIvKlxuICogYmFzZTY0LWFycmF5YnVmZmVyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbmlrbGFzdmgvYmFzZTY0LWFycmF5YnVmZmVyXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDEyIE5pa2xhcyB2b24gSGVydHplblxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICovXG4oZnVuY3Rpb24oY2hhcnMpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICBleHBvcnRzLmVuY29kZSA9IGZ1bmN0aW9uKGFycmF5YnVmZmVyKSB7XG4gICAgdmFyIGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXlidWZmZXIpLFxuICAgIGksIGxlbiA9IGJ5dGVzLmxlbmd0aCwgYmFzZTY0ID0gXCJcIjtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrPTMpIHtcbiAgICAgIGJhc2U2NCArPSBjaGFyc1tieXRlc1tpXSA+PiAyXTtcbiAgICAgIGJhc2U2NCArPSBjaGFyc1soKGJ5dGVzW2ldICYgMykgPDwgNCkgfCAoYnl0ZXNbaSArIDFdID4+IDQpXTtcbiAgICAgIGJhc2U2NCArPSBjaGFyc1soKGJ5dGVzW2kgKyAxXSAmIDE1KSA8PCAyKSB8IChieXRlc1tpICsgMl0gPj4gNildO1xuICAgICAgYmFzZTY0ICs9IGNoYXJzW2J5dGVzW2kgKyAyXSAmIDYzXTtcbiAgICB9XG5cbiAgICBpZiAoKGxlbiAlIDMpID09PSAyKSB7XG4gICAgICBiYXNlNjQgPSBiYXNlNjQuc3Vic3RyaW5nKDAsIGJhc2U2NC5sZW5ndGggLSAxKSArIFwiPVwiO1xuICAgIH0gZWxzZSBpZiAobGVuICUgMyA9PT0gMSkge1xuICAgICAgYmFzZTY0ID0gYmFzZTY0LnN1YnN0cmluZygwLCBiYXNlNjQubGVuZ3RoIC0gMikgKyBcIj09XCI7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJhc2U2NDtcbiAgfTtcblxuICBleHBvcnRzLmRlY29kZSA9ICBmdW5jdGlvbihiYXNlNjQpIHtcbiAgICB2YXIgYnVmZmVyTGVuZ3RoID0gYmFzZTY0Lmxlbmd0aCAqIDAuNzUsXG4gICAgbGVuID0gYmFzZTY0Lmxlbmd0aCwgaSwgcCA9IDAsXG4gICAgZW5jb2RlZDEsIGVuY29kZWQyLCBlbmNvZGVkMywgZW5jb2RlZDQ7XG5cbiAgICBpZiAoYmFzZTY0W2Jhc2U2NC5sZW5ndGggLSAxXSA9PT0gXCI9XCIpIHtcbiAgICAgIGJ1ZmZlckxlbmd0aC0tO1xuICAgICAgaWYgKGJhc2U2NFtiYXNlNjQubGVuZ3RoIC0gMl0gPT09IFwiPVwiKSB7XG4gICAgICAgIGJ1ZmZlckxlbmd0aC0tO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBhcnJheWJ1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcihidWZmZXJMZW5ndGgpLFxuICAgIGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXlidWZmZXIpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSs9NCkge1xuICAgICAgZW5jb2RlZDEgPSBjaGFycy5pbmRleE9mKGJhc2U2NFtpXSk7XG4gICAgICBlbmNvZGVkMiA9IGNoYXJzLmluZGV4T2YoYmFzZTY0W2krMV0pO1xuICAgICAgZW5jb2RlZDMgPSBjaGFycy5pbmRleE9mKGJhc2U2NFtpKzJdKTtcbiAgICAgIGVuY29kZWQ0ID0gY2hhcnMuaW5kZXhPZihiYXNlNjRbaSszXSk7XG5cbiAgICAgIGJ5dGVzW3ArK10gPSAoZW5jb2RlZDEgPDwgMikgfCAoZW5jb2RlZDIgPj4gNCk7XG4gICAgICBieXRlc1twKytdID0gKChlbmNvZGVkMiAmIDE1KSA8PCA0KSB8IChlbmNvZGVkMyA+PiAyKTtcbiAgICAgIGJ5dGVzW3ArK10gPSAoKGVuY29kZWQzICYgMykgPDwgNikgfCAoZW5jb2RlZDQgJiA2Myk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycmF5YnVmZmVyO1xuICB9O1xufSkoXCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvXCIpO1xuIiwiXHJcbi8qKlxyXG4gKiBFeHBvc2UgYEVtaXR0ZXJgLlxyXG4gKi9cclxuXHJcbmlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJykge1xyXG4gIG1vZHVsZS5leHBvcnRzID0gRW1pdHRlcjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEluaXRpYWxpemUgYSBuZXcgYEVtaXR0ZXJgLlxyXG4gKlxyXG4gKiBAYXBpIHB1YmxpY1xyXG4gKi9cclxuXHJcbmZ1bmN0aW9uIEVtaXR0ZXIob2JqKSB7XHJcbiAgaWYgKG9iaikgcmV0dXJuIG1peGluKG9iaik7XHJcbn07XHJcblxyXG4vKipcclxuICogTWl4aW4gdGhlIGVtaXR0ZXIgcHJvcGVydGllcy5cclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IG9ialxyXG4gKiBAcmV0dXJuIHtPYmplY3R9XHJcbiAqIEBhcGkgcHJpdmF0ZVxyXG4gKi9cclxuXHJcbmZ1bmN0aW9uIG1peGluKG9iaikge1xyXG4gIGZvciAodmFyIGtleSBpbiBFbWl0dGVyLnByb3RvdHlwZSkge1xyXG4gICAgb2JqW2tleV0gPSBFbWl0dGVyLnByb3RvdHlwZVtrZXldO1xyXG4gIH1cclxuICByZXR1cm4gb2JqO1xyXG59XHJcblxyXG4vKipcclxuICogTGlzdGVuIG9uIHRoZSBnaXZlbiBgZXZlbnRgIHdpdGggYGZuYC5cclxuICpcclxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXHJcbiAqIEByZXR1cm4ge0VtaXR0ZXJ9XHJcbiAqIEBhcGkgcHVibGljXHJcbiAqL1xyXG5cclxuRW1pdHRlci5wcm90b3R5cGUub24gPVxyXG5FbWl0dGVyLnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24oZXZlbnQsIGZuKXtcclxuICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XHJcbiAgKHRoaXMuX2NhbGxiYWNrc1snJCcgKyBldmVudF0gPSB0aGlzLl9jYWxsYmFja3NbJyQnICsgZXZlbnRdIHx8IFtdKVxyXG4gICAgLnB1c2goZm4pO1xyXG4gIHJldHVybiB0aGlzO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEFkZHMgYW4gYGV2ZW50YCBsaXN0ZW5lciB0aGF0IHdpbGwgYmUgaW52b2tlZCBhIHNpbmdsZVxyXG4gKiB0aW1lIHRoZW4gYXV0b21hdGljYWxseSByZW1vdmVkLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcclxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cclxuICogQHJldHVybiB7RW1pdHRlcn1cclxuICogQGFwaSBwdWJsaWNcclxuICovXHJcblxyXG5FbWl0dGVyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24oZXZlbnQsIGZuKXtcclxuICBmdW5jdGlvbiBvbigpIHtcclxuICAgIHRoaXMub2ZmKGV2ZW50LCBvbik7XHJcbiAgICBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG4gIH1cclxuXHJcbiAgb24uZm4gPSBmbjtcclxuICB0aGlzLm9uKGV2ZW50LCBvbik7XHJcbiAgcmV0dXJuIHRoaXM7XHJcbn07XHJcblxyXG4vKipcclxuICogUmVtb3ZlIHRoZSBnaXZlbiBjYWxsYmFjayBmb3IgYGV2ZW50YCBvciBhbGxcclxuICogcmVnaXN0ZXJlZCBjYWxsYmFja3MuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxyXG4gKiBAcmV0dXJuIHtFbWl0dGVyfVxyXG4gKiBAYXBpIHB1YmxpY1xyXG4gKi9cclxuXHJcbkVtaXR0ZXIucHJvdG90eXBlLm9mZiA9XHJcbkVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyID1cclxuRW1pdHRlci5wcm90b3R5cGUucmVtb3ZlQWxsTGlzdGVuZXJzID1cclxuRW1pdHRlci5wcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKGV2ZW50LCBmbil7XHJcbiAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xyXG5cclxuICAvLyBhbGxcclxuICBpZiAoMCA9PSBhcmd1bWVudHMubGVuZ3RoKSB7XHJcbiAgICB0aGlzLl9jYWxsYmFja3MgPSB7fTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLy8gc3BlY2lmaWMgZXZlbnRcclxuICB2YXIgY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzWyckJyArIGV2ZW50XTtcclxuICBpZiAoIWNhbGxiYWNrcykgcmV0dXJuIHRoaXM7XHJcblxyXG4gIC8vIHJlbW92ZSBhbGwgaGFuZGxlcnNcclxuICBpZiAoMSA9PSBhcmd1bWVudHMubGVuZ3RoKSB7XHJcbiAgICBkZWxldGUgdGhpcy5fY2FsbGJhY2tzWyckJyArIGV2ZW50XTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLy8gcmVtb3ZlIHNwZWNpZmljIGhhbmRsZXJcclxuICB2YXIgY2I7XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjYWxsYmFja3MubGVuZ3RoOyBpKyspIHtcclxuICAgIGNiID0gY2FsbGJhY2tzW2ldO1xyXG4gICAgaWYgKGNiID09PSBmbiB8fCBjYi5mbiA9PT0gZm4pIHtcclxuICAgICAgY2FsbGJhY2tzLnNwbGljZShpLCAxKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBSZW1vdmUgZXZlbnQgc3BlY2lmaWMgYXJyYXlzIGZvciBldmVudCB0eXBlcyB0aGF0IG5vXHJcbiAgLy8gb25lIGlzIHN1YnNjcmliZWQgZm9yIHRvIGF2b2lkIG1lbW9yeSBsZWFrLlxyXG4gIGlmIChjYWxsYmFja3MubGVuZ3RoID09PSAwKSB7XHJcbiAgICBkZWxldGUgdGhpcy5fY2FsbGJhY2tzWyckJyArIGV2ZW50XTtcclxuICB9XHJcblxyXG4gIHJldHVybiB0aGlzO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEVtaXQgYGV2ZW50YCB3aXRoIHRoZSBnaXZlbiBhcmdzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcclxuICogQHBhcmFtIHtNaXhlZH0gLi4uXHJcbiAqIEByZXR1cm4ge0VtaXR0ZXJ9XHJcbiAqL1xyXG5cclxuRW1pdHRlci5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uKGV2ZW50KXtcclxuICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XHJcblxyXG4gIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKVxyXG4gICAgLCBjYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3NbJyQnICsgZXZlbnRdO1xyXG5cclxuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XHJcbiAgfVxyXG5cclxuICBpZiAoY2FsbGJhY2tzKSB7XHJcbiAgICBjYWxsYmFja3MgPSBjYWxsYmFja3Muc2xpY2UoMCk7XHJcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XHJcbiAgICAgIGNhbGxiYWNrc1tpXS5hcHBseSh0aGlzLCBhcmdzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiB0aGlzO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFJldHVybiBhcnJheSBvZiBjYWxsYmFja3MgZm9yIGBldmVudGAuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxyXG4gKiBAcmV0dXJuIHtBcnJheX1cclxuICogQGFwaSBwdWJsaWNcclxuICovXHJcblxyXG5FbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lcnMgPSBmdW5jdGlvbihldmVudCl7XHJcbiAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xyXG4gIHJldHVybiB0aGlzLl9jYWxsYmFja3NbJyQnICsgZXZlbnRdIHx8IFtdO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIENoZWNrIGlmIHRoaXMgZW1pdHRlciBoYXMgYGV2ZW50YCBoYW5kbGVycy5cclxuICpcclxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XHJcbiAqIEByZXR1cm4ge0Jvb2xlYW59XHJcbiAqIEBhcGkgcHVibGljXHJcbiAqL1xyXG5cclxuRW1pdHRlci5wcm90b3R5cGUuaGFzTGlzdGVuZXJzID0gZnVuY3Rpb24oZXZlbnQpe1xyXG4gIHJldHVybiAhISB0aGlzLmxpc3RlbmVycyhldmVudCkubGVuZ3RoO1xyXG59O1xyXG4iLCIvKipcbiAqIEhlbHBlcnMuXG4gKi9cblxudmFyIHMgPSAxMDAwO1xudmFyIG0gPSBzICogNjA7XG52YXIgaCA9IG0gKiA2MDtcbnZhciBkID0gaCAqIDI0O1xudmFyIHcgPSBkICogNztcbnZhciB5ID0gZCAqIDM2NS4yNTtcblxuLyoqXG4gKiBQYXJzZSBvciBmb3JtYXQgdGhlIGdpdmVuIGB2YWxgLlxuICpcbiAqIE9wdGlvbnM6XG4gKlxuICogIC0gYGxvbmdgIHZlcmJvc2UgZm9ybWF0dGluZyBbZmFsc2VdXG4gKlxuICogQHBhcmFtIHtTdHJpbmd8TnVtYmVyfSB2YWxcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEB0aHJvd3Mge0Vycm9yfSB0aHJvdyBhbiBlcnJvciBpZiB2YWwgaXMgbm90IGEgbm9uLWVtcHR5IHN0cmluZyBvciBhIG51bWJlclxuICogQHJldHVybiB7U3RyaW5nfE51bWJlcn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih2YWwsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbDtcbiAgaWYgKHR5cGUgPT09ICdzdHJpbmcnICYmIHZhbC5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIHBhcnNlKHZhbCk7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ251bWJlcicgJiYgaXNGaW5pdGUodmFsKSkge1xuICAgIHJldHVybiBvcHRpb25zLmxvbmcgPyBmbXRMb25nKHZhbCkgOiBmbXRTaG9ydCh2YWwpO1xuICB9XG4gIHRocm93IG5ldyBFcnJvcihcbiAgICAndmFsIGlzIG5vdCBhIG5vbi1lbXB0eSBzdHJpbmcgb3IgYSB2YWxpZCBudW1iZXIuIHZhbD0nICtcbiAgICAgIEpTT04uc3RyaW5naWZ5KHZhbClcbiAgKTtcbn07XG5cbi8qKlxuICogUGFyc2UgdGhlIGdpdmVuIGBzdHJgIGFuZCByZXR1cm4gbWlsbGlzZWNvbmRzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHBhcnNlKHN0cikge1xuICBzdHIgPSBTdHJpbmcoc3RyKTtcbiAgaWYgKHN0ci5sZW5ndGggPiAxMDApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIG1hdGNoID0gL14oLT8oPzpcXGQrKT9cXC4/XFxkKykgKihtaWxsaXNlY29uZHM/fG1zZWNzP3xtc3xzZWNvbmRzP3xzZWNzP3xzfG1pbnV0ZXM/fG1pbnM/fG18aG91cnM/fGhycz98aHxkYXlzP3xkfHdlZWtzP3x3fHllYXJzP3x5cnM/fHkpPyQvaS5leGVjKFxuICAgIHN0clxuICApO1xuICBpZiAoIW1hdGNoKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBuID0gcGFyc2VGbG9hdChtYXRjaFsxXSk7XG4gIHZhciB0eXBlID0gKG1hdGNoWzJdIHx8ICdtcycpLnRvTG93ZXJDYXNlKCk7XG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgJ3llYXJzJzpcbiAgICBjYXNlICd5ZWFyJzpcbiAgICBjYXNlICd5cnMnOlxuICAgIGNhc2UgJ3lyJzpcbiAgICBjYXNlICd5JzpcbiAgICAgIHJldHVybiBuICogeTtcbiAgICBjYXNlICd3ZWVrcyc6XG4gICAgY2FzZSAnd2Vlayc6XG4gICAgY2FzZSAndyc6XG4gICAgICByZXR1cm4gbiAqIHc7XG4gICAgY2FzZSAnZGF5cyc6XG4gICAgY2FzZSAnZGF5JzpcbiAgICBjYXNlICdkJzpcbiAgICAgIHJldHVybiBuICogZDtcbiAgICBjYXNlICdob3Vycyc6XG4gICAgY2FzZSAnaG91cic6XG4gICAgY2FzZSAnaHJzJzpcbiAgICBjYXNlICdocic6XG4gICAgY2FzZSAnaCc6XG4gICAgICByZXR1cm4gbiAqIGg7XG4gICAgY2FzZSAnbWludXRlcyc6XG4gICAgY2FzZSAnbWludXRlJzpcbiAgICBjYXNlICdtaW5zJzpcbiAgICBjYXNlICdtaW4nOlxuICAgIGNhc2UgJ20nOlxuICAgICAgcmV0dXJuIG4gKiBtO1xuICAgIGNhc2UgJ3NlY29uZHMnOlxuICAgIGNhc2UgJ3NlY29uZCc6XG4gICAgY2FzZSAnc2Vjcyc6XG4gICAgY2FzZSAnc2VjJzpcbiAgICBjYXNlICdzJzpcbiAgICAgIHJldHVybiBuICogcztcbiAgICBjYXNlICdtaWxsaXNlY29uZHMnOlxuICAgIGNhc2UgJ21pbGxpc2Vjb25kJzpcbiAgICBjYXNlICdtc2Vjcyc6XG4gICAgY2FzZSAnbXNlYyc6XG4gICAgY2FzZSAnbXMnOlxuICAgICAgcmV0dXJuIG47XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbn1cblxuLyoqXG4gKiBTaG9ydCBmb3JtYXQgZm9yIGBtc2AuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IG1zXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBmbXRTaG9ydChtcykge1xuICB2YXIgbXNBYnMgPSBNYXRoLmFicyhtcyk7XG4gIGlmIChtc0FicyA+PSBkKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBkKSArICdkJztcbiAgfVxuICBpZiAobXNBYnMgPj0gaCkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gaCkgKyAnaCc7XG4gIH1cbiAgaWYgKG1zQWJzID49IG0pIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIG0pICsgJ20nO1xuICB9XG4gIGlmIChtc0FicyA+PSBzKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBzKSArICdzJztcbiAgfVxuICByZXR1cm4gbXMgKyAnbXMnO1xufVxuXG4vKipcbiAqIExvbmcgZm9ybWF0IGZvciBgbXNgLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBtc1xuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gZm10TG9uZyhtcykge1xuICB2YXIgbXNBYnMgPSBNYXRoLmFicyhtcyk7XG4gIGlmIChtc0FicyA+PSBkKSB7XG4gICAgcmV0dXJuIHBsdXJhbChtcywgbXNBYnMsIGQsICdkYXknKTtcbiAgfVxuICBpZiAobXNBYnMgPj0gaCkge1xuICAgIHJldHVybiBwbHVyYWwobXMsIG1zQWJzLCBoLCAnaG91cicpO1xuICB9XG4gIGlmIChtc0FicyA+PSBtKSB7XG4gICAgcmV0dXJuIHBsdXJhbChtcywgbXNBYnMsIG0sICdtaW51dGUnKTtcbiAgfVxuICBpZiAobXNBYnMgPj0gcykge1xuICAgIHJldHVybiBwbHVyYWwobXMsIG1zQWJzLCBzLCAnc2Vjb25kJyk7XG4gIH1cbiAgcmV0dXJuIG1zICsgJyBtcyc7XG59XG5cbi8qKlxuICogUGx1cmFsaXphdGlvbiBoZWxwZXIuXG4gKi9cblxuZnVuY3Rpb24gcGx1cmFsKG1zLCBtc0FicywgbiwgbmFtZSkge1xuICB2YXIgaXNQbHVyYWwgPSBtc0FicyA+PSBuICogMS41O1xuICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIG4pICsgJyAnICsgbmFtZSArIChpc1BsdXJhbCA/ICdzJyA6ICcnKTtcbn1cbiIsIi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG4vKipcbiAqIFRoaXMgaXMgdGhlIHdlYiBicm93c2VyIGltcGxlbWVudGF0aW9uIG9mIGBkZWJ1ZygpYC5cbiAqL1xuXG5leHBvcnRzLmZvcm1hdEFyZ3MgPSBmb3JtYXRBcmdzO1xuZXhwb3J0cy5zYXZlID0gc2F2ZTtcbmV4cG9ydHMubG9hZCA9IGxvYWQ7XG5leHBvcnRzLnVzZUNvbG9ycyA9IHVzZUNvbG9ycztcbmV4cG9ydHMuc3RvcmFnZSA9IGxvY2Fsc3RvcmFnZSgpO1xuZXhwb3J0cy5kZXN0cm95ID0gKCgpID0+IHtcblx0bGV0IHdhcm5lZCA9IGZhbHNlO1xuXG5cdHJldHVybiAoKSA9PiB7XG5cdFx0aWYgKCF3YXJuZWQpIHtcblx0XHRcdHdhcm5lZCA9IHRydWU7XG5cdFx0XHRjb25zb2xlLndhcm4oJ0luc3RhbmNlIG1ldGhvZCBgZGVidWcuZGVzdHJveSgpYCBpcyBkZXByZWNhdGVkIGFuZCBubyBsb25nZXIgZG9lcyBhbnl0aGluZy4gSXQgd2lsbCBiZSByZW1vdmVkIGluIHRoZSBuZXh0IG1ham9yIHZlcnNpb24gb2YgYGRlYnVnYC4nKTtcblx0XHR9XG5cdH07XG59KSgpO1xuXG4vKipcbiAqIENvbG9ycy5cbiAqL1xuXG5leHBvcnRzLmNvbG9ycyA9IFtcblx0JyMwMDAwQ0MnLFxuXHQnIzAwMDBGRicsXG5cdCcjMDAzM0NDJyxcblx0JyMwMDMzRkYnLFxuXHQnIzAwNjZDQycsXG5cdCcjMDA2NkZGJyxcblx0JyMwMDk5Q0MnLFxuXHQnIzAwOTlGRicsXG5cdCcjMDBDQzAwJyxcblx0JyMwMENDMzMnLFxuXHQnIzAwQ0M2NicsXG5cdCcjMDBDQzk5Jyxcblx0JyMwMENDQ0MnLFxuXHQnIzAwQ0NGRicsXG5cdCcjMzMwMENDJyxcblx0JyMzMzAwRkYnLFxuXHQnIzMzMzNDQycsXG5cdCcjMzMzM0ZGJyxcblx0JyMzMzY2Q0MnLFxuXHQnIzMzNjZGRicsXG5cdCcjMzM5OUNDJyxcblx0JyMzMzk5RkYnLFxuXHQnIzMzQ0MwMCcsXG5cdCcjMzNDQzMzJyxcblx0JyMzM0NDNjYnLFxuXHQnIzMzQ0M5OScsXG5cdCcjMzNDQ0NDJyxcblx0JyMzM0NDRkYnLFxuXHQnIzY2MDBDQycsXG5cdCcjNjYwMEZGJyxcblx0JyM2NjMzQ0MnLFxuXHQnIzY2MzNGRicsXG5cdCcjNjZDQzAwJyxcblx0JyM2NkNDMzMnLFxuXHQnIzk5MDBDQycsXG5cdCcjOTkwMEZGJyxcblx0JyM5OTMzQ0MnLFxuXHQnIzk5MzNGRicsXG5cdCcjOTlDQzAwJyxcblx0JyM5OUNDMzMnLFxuXHQnI0NDMDAwMCcsXG5cdCcjQ0MwMDMzJyxcblx0JyNDQzAwNjYnLFxuXHQnI0NDMDA5OScsXG5cdCcjQ0MwMENDJyxcblx0JyNDQzAwRkYnLFxuXHQnI0NDMzMwMCcsXG5cdCcjQ0MzMzMzJyxcblx0JyNDQzMzNjYnLFxuXHQnI0NDMzM5OScsXG5cdCcjQ0MzM0NDJyxcblx0JyNDQzMzRkYnLFxuXHQnI0NDNjYwMCcsXG5cdCcjQ0M2NjMzJyxcblx0JyNDQzk5MDAnLFxuXHQnI0NDOTkzMycsXG5cdCcjQ0NDQzAwJyxcblx0JyNDQ0NDMzMnLFxuXHQnI0ZGMDAwMCcsXG5cdCcjRkYwMDMzJyxcblx0JyNGRjAwNjYnLFxuXHQnI0ZGMDA5OScsXG5cdCcjRkYwMENDJyxcblx0JyNGRjAwRkYnLFxuXHQnI0ZGMzMwMCcsXG5cdCcjRkYzMzMzJyxcblx0JyNGRjMzNjYnLFxuXHQnI0ZGMzM5OScsXG5cdCcjRkYzM0NDJyxcblx0JyNGRjMzRkYnLFxuXHQnI0ZGNjYwMCcsXG5cdCcjRkY2NjMzJyxcblx0JyNGRjk5MDAnLFxuXHQnI0ZGOTkzMycsXG5cdCcjRkZDQzAwJyxcblx0JyNGRkNDMzMnXG5dO1xuXG4vKipcbiAqIEN1cnJlbnRseSBvbmx5IFdlYktpdC1iYXNlZCBXZWIgSW5zcGVjdG9ycywgRmlyZWZveCA+PSB2MzEsXG4gKiBhbmQgdGhlIEZpcmVidWcgZXh0ZW5zaW9uIChhbnkgRmlyZWZveCB2ZXJzaW9uKSBhcmUga25vd25cbiAqIHRvIHN1cHBvcnQgXCIlY1wiIENTUyBjdXN0b21pemF0aW9ucy5cbiAqXG4gKiBUT0RPOiBhZGQgYSBgbG9jYWxTdG9yYWdlYCB2YXJpYWJsZSB0byBleHBsaWNpdGx5IGVuYWJsZS9kaXNhYmxlIGNvbG9yc1xuICovXG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb21wbGV4aXR5XG5mdW5jdGlvbiB1c2VDb2xvcnMoKSB7XG5cdC8vIE5COiBJbiBhbiBFbGVjdHJvbiBwcmVsb2FkIHNjcmlwdCwgZG9jdW1lbnQgd2lsbCBiZSBkZWZpbmVkIGJ1dCBub3QgZnVsbHlcblx0Ly8gaW5pdGlhbGl6ZWQuIFNpbmNlIHdlIGtub3cgd2UncmUgaW4gQ2hyb21lLCB3ZSdsbCBqdXN0IGRldGVjdCB0aGlzIGNhc2Vcblx0Ly8gZXhwbGljaXRseVxuXHRpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LnByb2Nlc3MgJiYgKHdpbmRvdy5wcm9jZXNzLnR5cGUgPT09ICdyZW5kZXJlcicgfHwgd2luZG93LnByb2Nlc3MuX19ud2pzKSkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0Ly8gSW50ZXJuZXQgRXhwbG9yZXIgYW5kIEVkZ2UgZG8gbm90IHN1cHBvcnQgY29sb3JzLlxuXHRpZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudCAmJiBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkubWF0Y2goLyhlZGdlfHRyaWRlbnQpXFwvKFxcZCspLykpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHQvLyBJcyB3ZWJraXQ/IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzE2NDU5NjA2LzM3Njc3M1xuXHQvLyBkb2N1bWVudCBpcyB1bmRlZmluZWQgaW4gcmVhY3QtbmF0aXZlOiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QtbmF0aXZlL3B1bGwvMTYzMlxuXHRyZXR1cm4gKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZSAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuV2Via2l0QXBwZWFyYW5jZSkgfHxcblx0XHQvLyBJcyBmaXJlYnVnPyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8zOTgxMjAvMzc2NzczXG5cdFx0KHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5jb25zb2xlICYmICh3aW5kb3cuY29uc29sZS5maXJlYnVnIHx8ICh3aW5kb3cuY29uc29sZS5leGNlcHRpb24gJiYgd2luZG93LmNvbnNvbGUudGFibGUpKSkgfHxcblx0XHQvLyBJcyBmaXJlZm94ID49IHYzMT9cblx0XHQvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1Rvb2xzL1dlYl9Db25zb2xlI1N0eWxpbmdfbWVzc2FnZXNcblx0XHQodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudCAmJiBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkubWF0Y2goL2ZpcmVmb3hcXC8oXFxkKykvKSAmJiBwYXJzZUludChSZWdFeHAuJDEsIDEwKSA+PSAzMSkgfHxcblx0XHQvLyBEb3VibGUgY2hlY2sgd2Via2l0IGluIHVzZXJBZ2VudCBqdXN0IGluIGNhc2Ugd2UgYXJlIGluIGEgd29ya2VyXG5cdFx0KHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci51c2VyQWdlbnQgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLm1hdGNoKC9hcHBsZXdlYmtpdFxcLyhcXGQrKS8pKTtcbn1cblxuLyoqXG4gKiBDb2xvcml6ZSBsb2cgYXJndW1lbnRzIGlmIGVuYWJsZWQuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBmb3JtYXRBcmdzKGFyZ3MpIHtcblx0YXJnc1swXSA9ICh0aGlzLnVzZUNvbG9ycyA/ICclYycgOiAnJykgK1xuXHRcdHRoaXMubmFtZXNwYWNlICtcblx0XHQodGhpcy51c2VDb2xvcnMgPyAnICVjJyA6ICcgJykgK1xuXHRcdGFyZ3NbMF0gK1xuXHRcdCh0aGlzLnVzZUNvbG9ycyA/ICclYyAnIDogJyAnKSArXG5cdFx0JysnICsgbW9kdWxlLmV4cG9ydHMuaHVtYW5pemUodGhpcy5kaWZmKTtcblxuXHRpZiAoIXRoaXMudXNlQ29sb3JzKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgYyA9ICdjb2xvcjogJyArIHRoaXMuY29sb3I7XG5cdGFyZ3Muc3BsaWNlKDEsIDAsIGMsICdjb2xvcjogaW5oZXJpdCcpO1xuXG5cdC8vIFRoZSBmaW5hbCBcIiVjXCIgaXMgc29tZXdoYXQgdHJpY2t5LCBiZWNhdXNlIHRoZXJlIGNvdWxkIGJlIG90aGVyXG5cdC8vIGFyZ3VtZW50cyBwYXNzZWQgZWl0aGVyIGJlZm9yZSBvciBhZnRlciB0aGUgJWMsIHNvIHdlIG5lZWQgdG9cblx0Ly8gZmlndXJlIG91dCB0aGUgY29ycmVjdCBpbmRleCB0byBpbnNlcnQgdGhlIENTUyBpbnRvXG5cdGxldCBpbmRleCA9IDA7XG5cdGxldCBsYXN0QyA9IDA7XG5cdGFyZ3NbMF0ucmVwbGFjZSgvJVthLXpBLVolXS9nLCBtYXRjaCA9PiB7XG5cdFx0aWYgKG1hdGNoID09PSAnJSUnKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGluZGV4Kys7XG5cdFx0aWYgKG1hdGNoID09PSAnJWMnKSB7XG5cdFx0XHQvLyBXZSBvbmx5IGFyZSBpbnRlcmVzdGVkIGluIHRoZSAqbGFzdCogJWNcblx0XHRcdC8vICh0aGUgdXNlciBtYXkgaGF2ZSBwcm92aWRlZCB0aGVpciBvd24pXG5cdFx0XHRsYXN0QyA9IGluZGV4O1xuXHRcdH1cblx0fSk7XG5cblx0YXJncy5zcGxpY2UobGFzdEMsIDAsIGMpO1xufVxuXG4vKipcbiAqIEludm9rZXMgYGNvbnNvbGUuZGVidWcoKWAgd2hlbiBhdmFpbGFibGUuXG4gKiBOby1vcCB3aGVuIGBjb25zb2xlLmRlYnVnYCBpcyBub3QgYSBcImZ1bmN0aW9uXCIuXG4gKiBJZiBgY29uc29sZS5kZWJ1Z2AgaXMgbm90IGF2YWlsYWJsZSwgZmFsbHMgYmFja1xuICogdG8gYGNvbnNvbGUubG9nYC5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5leHBvcnRzLmxvZyA9IGNvbnNvbGUuZGVidWcgfHwgY29uc29sZS5sb2cgfHwgKCgpID0+IHt9KTtcblxuLyoqXG4gKiBTYXZlIGBuYW1lc3BhY2VzYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlc1xuICogQGFwaSBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHNhdmUobmFtZXNwYWNlcykge1xuXHR0cnkge1xuXHRcdGlmIChuYW1lc3BhY2VzKSB7XG5cdFx0XHRleHBvcnRzLnN0b3JhZ2Uuc2V0SXRlbSgnZGVidWcnLCBuYW1lc3BhY2VzKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZXhwb3J0cy5zdG9yYWdlLnJlbW92ZUl0ZW0oJ2RlYnVnJyk7XG5cdFx0fVxuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdC8vIFN3YWxsb3dcblx0XHQvLyBYWFggKEBRaXgtKSBzaG91bGQgd2UgYmUgbG9nZ2luZyB0aGVzZT9cblx0fVxufVxuXG4vKipcbiAqIExvYWQgYG5hbWVzcGFjZXNgLlxuICpcbiAqIEByZXR1cm4ge1N0cmluZ30gcmV0dXJucyB0aGUgcHJldmlvdXNseSBwZXJzaXN0ZWQgZGVidWcgbW9kZXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBsb2FkKCkge1xuXHRsZXQgcjtcblx0dHJ5IHtcblx0XHRyID0gZXhwb3J0cy5zdG9yYWdlLmdldEl0ZW0oJ2RlYnVnJyk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Ly8gU3dhbGxvd1xuXHRcdC8vIFhYWCAoQFFpeC0pIHNob3VsZCB3ZSBiZSBsb2dnaW5nIHRoZXNlP1xuXHR9XG5cblx0Ly8gSWYgZGVidWcgaXNuJ3Qgc2V0IGluIExTLCBhbmQgd2UncmUgaW4gRWxlY3Ryb24sIHRyeSB0byBsb2FkICRERUJVR1xuXHRpZiAoIXIgJiYgdHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmICdlbnYnIGluIHByb2Nlc3MpIHtcblx0XHRyID0gcHJvY2Vzcy5lbnYuREVCVUc7XG5cdH1cblxuXHRyZXR1cm4gcjtcbn1cblxuLyoqXG4gKiBMb2NhbHN0b3JhZ2UgYXR0ZW1wdHMgdG8gcmV0dXJuIHRoZSBsb2NhbHN0b3JhZ2UuXG4gKlxuICogVGhpcyBpcyBuZWNlc3NhcnkgYmVjYXVzZSBzYWZhcmkgdGhyb3dzXG4gKiB3aGVuIGEgdXNlciBkaXNhYmxlcyBjb29raWVzL2xvY2Fsc3RvcmFnZVxuICogYW5kIHlvdSBhdHRlbXB0IHRvIGFjY2VzcyBpdC5cbiAqXG4gKiBAcmV0dXJuIHtMb2NhbFN0b3JhZ2V9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBsb2NhbHN0b3JhZ2UoKSB7XG5cdHRyeSB7XG5cdFx0Ly8gVFZNTEtpdCAoQXBwbGUgVFYgSlMgUnVudGltZSkgZG9lcyBub3QgaGF2ZSBhIHdpbmRvdyBvYmplY3QsIGp1c3QgbG9jYWxTdG9yYWdlIGluIHRoZSBnbG9iYWwgY29udGV4dFxuXHRcdC8vIFRoZSBCcm93c2VyIGFsc28gaGFzIGxvY2FsU3RvcmFnZSBpbiB0aGUgZ2xvYmFsIGNvbnRleHQuXG5cdFx0cmV0dXJuIGxvY2FsU3RvcmFnZTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHQvLyBTd2FsbG93XG5cdFx0Ly8gWFhYIChAUWl4LSkgc2hvdWxkIHdlIGJlIGxvZ2dpbmcgdGhlc2U/XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2NvbW1vbicpKGV4cG9ydHMpO1xuXG5jb25zdCB7Zm9ybWF0dGVyc30gPSBtb2R1bGUuZXhwb3J0cztcblxuLyoqXG4gKiBNYXAgJWogdG8gYEpTT04uc3RyaW5naWZ5KClgLCBzaW5jZSBubyBXZWIgSW5zcGVjdG9ycyBkbyB0aGF0IGJ5IGRlZmF1bHQuXG4gKi9cblxuZm9ybWF0dGVycy5qID0gZnVuY3Rpb24gKHYpIHtcblx0dHJ5IHtcblx0XHRyZXR1cm4gSlNPTi5zdHJpbmdpZnkodik7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0cmV0dXJuICdbVW5leHBlY3RlZEpTT05QYXJzZUVycm9yXTogJyArIGVycm9yLm1lc3NhZ2U7XG5cdH1cbn07XG4iLCJcbi8qKlxuICogVGhpcyBpcyB0aGUgY29tbW9uIGxvZ2ljIGZvciBib3RoIHRoZSBOb2RlLmpzIGFuZCB3ZWIgYnJvd3NlclxuICogaW1wbGVtZW50YXRpb25zIG9mIGBkZWJ1ZygpYC5cbiAqL1xuXG5mdW5jdGlvbiBzZXR1cChlbnYpIHtcblx0Y3JlYXRlRGVidWcuZGVidWcgPSBjcmVhdGVEZWJ1Zztcblx0Y3JlYXRlRGVidWcuZGVmYXVsdCA9IGNyZWF0ZURlYnVnO1xuXHRjcmVhdGVEZWJ1Zy5jb2VyY2UgPSBjb2VyY2U7XG5cdGNyZWF0ZURlYnVnLmRpc2FibGUgPSBkaXNhYmxlO1xuXHRjcmVhdGVEZWJ1Zy5lbmFibGUgPSBlbmFibGU7XG5cdGNyZWF0ZURlYnVnLmVuYWJsZWQgPSBlbmFibGVkO1xuXHRjcmVhdGVEZWJ1Zy5odW1hbml6ZSA9IHJlcXVpcmUoJ21zJyk7XG5cdGNyZWF0ZURlYnVnLmRlc3Ryb3kgPSBkZXN0cm95O1xuXG5cdE9iamVjdC5rZXlzKGVudikuZm9yRWFjaChrZXkgPT4ge1xuXHRcdGNyZWF0ZURlYnVnW2tleV0gPSBlbnZba2V5XTtcblx0fSk7XG5cblx0LyoqXG5cdCogVGhlIGN1cnJlbnRseSBhY3RpdmUgZGVidWcgbW9kZSBuYW1lcywgYW5kIG5hbWVzIHRvIHNraXAuXG5cdCovXG5cblx0Y3JlYXRlRGVidWcubmFtZXMgPSBbXTtcblx0Y3JlYXRlRGVidWcuc2tpcHMgPSBbXTtcblxuXHQvKipcblx0KiBNYXAgb2Ygc3BlY2lhbCBcIiVuXCIgaGFuZGxpbmcgZnVuY3Rpb25zLCBmb3IgdGhlIGRlYnVnIFwiZm9ybWF0XCIgYXJndW1lbnQuXG5cdCpcblx0KiBWYWxpZCBrZXkgbmFtZXMgYXJlIGEgc2luZ2xlLCBsb3dlciBvciB1cHBlci1jYXNlIGxldHRlciwgaS5lLiBcIm5cIiBhbmQgXCJOXCIuXG5cdCovXG5cdGNyZWF0ZURlYnVnLmZvcm1hdHRlcnMgPSB7fTtcblxuXHQvKipcblx0KiBTZWxlY3RzIGEgY29sb3IgZm9yIGEgZGVidWcgbmFtZXNwYWNlXG5cdCogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZSBUaGUgbmFtZXNwYWNlIHN0cmluZyBmb3IgdGhlIGZvciB0aGUgZGVidWcgaW5zdGFuY2UgdG8gYmUgY29sb3JlZFxuXHQqIEByZXR1cm4ge051bWJlcnxTdHJpbmd9IEFuIEFOU0kgY29sb3IgY29kZSBmb3IgdGhlIGdpdmVuIG5hbWVzcGFjZVxuXHQqIEBhcGkgcHJpdmF0ZVxuXHQqL1xuXHRmdW5jdGlvbiBzZWxlY3RDb2xvcihuYW1lc3BhY2UpIHtcblx0XHRsZXQgaGFzaCA9IDA7XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IG5hbWVzcGFjZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0aGFzaCA9ICgoaGFzaCA8PCA1KSAtIGhhc2gpICsgbmFtZXNwYWNlLmNoYXJDb2RlQXQoaSk7XG5cdFx0XHRoYXNoIHw9IDA7IC8vIENvbnZlcnQgdG8gMzJiaXQgaW50ZWdlclxuXHRcdH1cblxuXHRcdHJldHVybiBjcmVhdGVEZWJ1Zy5jb2xvcnNbTWF0aC5hYnMoaGFzaCkgJSBjcmVhdGVEZWJ1Zy5jb2xvcnMubGVuZ3RoXTtcblx0fVxuXHRjcmVhdGVEZWJ1Zy5zZWxlY3RDb2xvciA9IHNlbGVjdENvbG9yO1xuXG5cdC8qKlxuXHQqIENyZWF0ZSBhIGRlYnVnZ2VyIHdpdGggdGhlIGdpdmVuIGBuYW1lc3BhY2VgLlxuXHQqXG5cdCogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZVxuXHQqIEByZXR1cm4ge0Z1bmN0aW9ufVxuXHQqIEBhcGkgcHVibGljXG5cdCovXG5cdGZ1bmN0aW9uIGNyZWF0ZURlYnVnKG5hbWVzcGFjZSkge1xuXHRcdGxldCBwcmV2VGltZTtcblx0XHRsZXQgZW5hYmxlT3ZlcnJpZGUgPSBudWxsO1xuXG5cdFx0ZnVuY3Rpb24gZGVidWcoLi4uYXJncykge1xuXHRcdFx0Ly8gRGlzYWJsZWQ/XG5cdFx0XHRpZiAoIWRlYnVnLmVuYWJsZWQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBzZWxmID0gZGVidWc7XG5cblx0XHRcdC8vIFNldCBgZGlmZmAgdGltZXN0YW1wXG5cdFx0XHRjb25zdCBjdXJyID0gTnVtYmVyKG5ldyBEYXRlKCkpO1xuXHRcdFx0Y29uc3QgbXMgPSBjdXJyIC0gKHByZXZUaW1lIHx8IGN1cnIpO1xuXHRcdFx0c2VsZi5kaWZmID0gbXM7XG5cdFx0XHRzZWxmLnByZXYgPSBwcmV2VGltZTtcblx0XHRcdHNlbGYuY3VyciA9IGN1cnI7XG5cdFx0XHRwcmV2VGltZSA9IGN1cnI7XG5cblx0XHRcdGFyZ3NbMF0gPSBjcmVhdGVEZWJ1Zy5jb2VyY2UoYXJnc1swXSk7XG5cblx0XHRcdGlmICh0eXBlb2YgYXJnc1swXSAhPT0gJ3N0cmluZycpIHtcblx0XHRcdFx0Ly8gQW55dGhpbmcgZWxzZSBsZXQncyBpbnNwZWN0IHdpdGggJU9cblx0XHRcdFx0YXJncy51bnNoaWZ0KCclTycpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBBcHBseSBhbnkgYGZvcm1hdHRlcnNgIHRyYW5zZm9ybWF0aW9uc1xuXHRcdFx0bGV0IGluZGV4ID0gMDtcblx0XHRcdGFyZ3NbMF0gPSBhcmdzWzBdLnJlcGxhY2UoLyUoW2EtekEtWiVdKS9nLCAobWF0Y2gsIGZvcm1hdCkgPT4ge1xuXHRcdFx0XHQvLyBJZiB3ZSBlbmNvdW50ZXIgYW4gZXNjYXBlZCAlIHRoZW4gZG9uJ3QgaW5jcmVhc2UgdGhlIGFycmF5IGluZGV4XG5cdFx0XHRcdGlmIChtYXRjaCA9PT0gJyUlJykge1xuXHRcdFx0XHRcdHJldHVybiAnJSc7XG5cdFx0XHRcdH1cblx0XHRcdFx0aW5kZXgrKztcblx0XHRcdFx0Y29uc3QgZm9ybWF0dGVyID0gY3JlYXRlRGVidWcuZm9ybWF0dGVyc1tmb3JtYXRdO1xuXHRcdFx0XHRpZiAodHlwZW9mIGZvcm1hdHRlciA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRcdGNvbnN0IHZhbCA9IGFyZ3NbaW5kZXhdO1xuXHRcdFx0XHRcdG1hdGNoID0gZm9ybWF0dGVyLmNhbGwoc2VsZiwgdmFsKTtcblxuXHRcdFx0XHRcdC8vIE5vdyB3ZSBuZWVkIHRvIHJlbW92ZSBgYXJnc1tpbmRleF1gIHNpbmNlIGl0J3MgaW5saW5lZCBpbiB0aGUgYGZvcm1hdGBcblx0XHRcdFx0XHRhcmdzLnNwbGljZShpbmRleCwgMSk7XG5cdFx0XHRcdFx0aW5kZXgtLTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gbWF0Y2g7XG5cdFx0XHR9KTtcblxuXHRcdFx0Ly8gQXBwbHkgZW52LXNwZWNpZmljIGZvcm1hdHRpbmcgKGNvbG9ycywgZXRjLilcblx0XHRcdGNyZWF0ZURlYnVnLmZvcm1hdEFyZ3MuY2FsbChzZWxmLCBhcmdzKTtcblxuXHRcdFx0Y29uc3QgbG9nRm4gPSBzZWxmLmxvZyB8fCBjcmVhdGVEZWJ1Zy5sb2c7XG5cdFx0XHRsb2dGbi5hcHBseShzZWxmLCBhcmdzKTtcblx0XHR9XG5cblx0XHRkZWJ1Zy5uYW1lc3BhY2UgPSBuYW1lc3BhY2U7XG5cdFx0ZGVidWcudXNlQ29sb3JzID0gY3JlYXRlRGVidWcudXNlQ29sb3JzKCk7XG5cdFx0ZGVidWcuY29sb3IgPSBjcmVhdGVEZWJ1Zy5zZWxlY3RDb2xvcihuYW1lc3BhY2UpO1xuXHRcdGRlYnVnLmV4dGVuZCA9IGV4dGVuZDtcblx0XHRkZWJ1Zy5kZXN0cm95ID0gY3JlYXRlRGVidWcuZGVzdHJveTsgLy8gWFhYIFRlbXBvcmFyeS4gV2lsbCBiZSByZW1vdmVkIGluIHRoZSBuZXh0IG1ham9yIHJlbGVhc2UuXG5cblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZGVidWcsICdlbmFibGVkJywge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG5cdFx0XHRnZXQ6ICgpID0+IGVuYWJsZU92ZXJyaWRlID09PSBudWxsID8gY3JlYXRlRGVidWcuZW5hYmxlZChuYW1lc3BhY2UpIDogZW5hYmxlT3ZlcnJpZGUsXG5cdFx0XHRzZXQ6IHYgPT4ge1xuXHRcdFx0XHRlbmFibGVPdmVycmlkZSA9IHY7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHQvLyBFbnYtc3BlY2lmaWMgaW5pdGlhbGl6YXRpb24gbG9naWMgZm9yIGRlYnVnIGluc3RhbmNlc1xuXHRcdGlmICh0eXBlb2YgY3JlYXRlRGVidWcuaW5pdCA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0Y3JlYXRlRGVidWcuaW5pdChkZWJ1Zyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGRlYnVnO1xuXHR9XG5cblx0ZnVuY3Rpb24gZXh0ZW5kKG5hbWVzcGFjZSwgZGVsaW1pdGVyKSB7XG5cdFx0Y29uc3QgbmV3RGVidWcgPSBjcmVhdGVEZWJ1Zyh0aGlzLm5hbWVzcGFjZSArICh0eXBlb2YgZGVsaW1pdGVyID09PSAndW5kZWZpbmVkJyA/ICc6JyA6IGRlbGltaXRlcikgKyBuYW1lc3BhY2UpO1xuXHRcdG5ld0RlYnVnLmxvZyA9IHRoaXMubG9nO1xuXHRcdHJldHVybiBuZXdEZWJ1Zztcblx0fVxuXG5cdC8qKlxuXHQqIEVuYWJsZXMgYSBkZWJ1ZyBtb2RlIGJ5IG5hbWVzcGFjZXMuIFRoaXMgY2FuIGluY2x1ZGUgbW9kZXNcblx0KiBzZXBhcmF0ZWQgYnkgYSBjb2xvbiBhbmQgd2lsZGNhcmRzLlxuXHQqXG5cdCogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZXNcblx0KiBAYXBpIHB1YmxpY1xuXHQqL1xuXHRmdW5jdGlvbiBlbmFibGUobmFtZXNwYWNlcykge1xuXHRcdGNyZWF0ZURlYnVnLnNhdmUobmFtZXNwYWNlcyk7XG5cblx0XHRjcmVhdGVEZWJ1Zy5uYW1lcyA9IFtdO1xuXHRcdGNyZWF0ZURlYnVnLnNraXBzID0gW107XG5cblx0XHRsZXQgaTtcblx0XHRjb25zdCBzcGxpdCA9ICh0eXBlb2YgbmFtZXNwYWNlcyA9PT0gJ3N0cmluZycgPyBuYW1lc3BhY2VzIDogJycpLnNwbGl0KC9bXFxzLF0rLyk7XG5cdFx0Y29uc3QgbGVuID0gc3BsaXQubGVuZ3RoO1xuXG5cdFx0Zm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHRpZiAoIXNwbGl0W2ldKSB7XG5cdFx0XHRcdC8vIGlnbm9yZSBlbXB0eSBzdHJpbmdzXG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRuYW1lc3BhY2VzID0gc3BsaXRbaV0ucmVwbGFjZSgvXFwqL2csICcuKj8nKTtcblxuXHRcdFx0aWYgKG5hbWVzcGFjZXNbMF0gPT09ICctJykge1xuXHRcdFx0XHRjcmVhdGVEZWJ1Zy5za2lwcy5wdXNoKG5ldyBSZWdFeHAoJ14nICsgbmFtZXNwYWNlcy5zdWJzdHIoMSkgKyAnJCcpKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNyZWF0ZURlYnVnLm5hbWVzLnB1c2gobmV3IFJlZ0V4cCgnXicgKyBuYW1lc3BhY2VzICsgJyQnKSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCogRGlzYWJsZSBkZWJ1ZyBvdXRwdXQuXG5cdCpcblx0KiBAcmV0dXJuIHtTdHJpbmd9IG5hbWVzcGFjZXNcblx0KiBAYXBpIHB1YmxpY1xuXHQqL1xuXHRmdW5jdGlvbiBkaXNhYmxlKCkge1xuXHRcdGNvbnN0IG5hbWVzcGFjZXMgPSBbXG5cdFx0XHQuLi5jcmVhdGVEZWJ1Zy5uYW1lcy5tYXAodG9OYW1lc3BhY2UpLFxuXHRcdFx0Li4uY3JlYXRlRGVidWcuc2tpcHMubWFwKHRvTmFtZXNwYWNlKS5tYXAobmFtZXNwYWNlID0+ICctJyArIG5hbWVzcGFjZSlcblx0XHRdLmpvaW4oJywnKTtcblx0XHRjcmVhdGVEZWJ1Zy5lbmFibGUoJycpO1xuXHRcdHJldHVybiBuYW1lc3BhY2VzO1xuXHR9XG5cblx0LyoqXG5cdCogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiBtb2RlIG5hbWUgaXMgZW5hYmxlZCwgZmFsc2Ugb3RoZXJ3aXNlLlxuXHQqXG5cdCogQHBhcmFtIHtTdHJpbmd9IG5hbWVcblx0KiBAcmV0dXJuIHtCb29sZWFufVxuXHQqIEBhcGkgcHVibGljXG5cdCovXG5cdGZ1bmN0aW9uIGVuYWJsZWQobmFtZSkge1xuXHRcdGlmIChuYW1lW25hbWUubGVuZ3RoIC0gMV0gPT09ICcqJykge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0bGV0IGk7XG5cdFx0bGV0IGxlbjtcblxuXHRcdGZvciAoaSA9IDAsIGxlbiA9IGNyZWF0ZURlYnVnLnNraXBzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHRpZiAoY3JlYXRlRGVidWcuc2tpcHNbaV0udGVzdChuYW1lKSkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Zm9yIChpID0gMCwgbGVuID0gY3JlYXRlRGVidWcubmFtZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdGlmIChjcmVhdGVEZWJ1Zy5uYW1lc1tpXS50ZXN0KG5hbWUpKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdC8qKlxuXHQqIENvbnZlcnQgcmVnZXhwIHRvIG5hbWVzcGFjZVxuXHQqXG5cdCogQHBhcmFtIHtSZWdFeHB9IHJlZ3hlcFxuXHQqIEByZXR1cm4ge1N0cmluZ30gbmFtZXNwYWNlXG5cdCogQGFwaSBwcml2YXRlXG5cdCovXG5cdGZ1bmN0aW9uIHRvTmFtZXNwYWNlKHJlZ2V4cCkge1xuXHRcdHJldHVybiByZWdleHAudG9TdHJpbmcoKVxuXHRcdFx0LnN1YnN0cmluZygyLCByZWdleHAudG9TdHJpbmcoKS5sZW5ndGggLSAyKVxuXHRcdFx0LnJlcGxhY2UoL1xcLlxcKlxcPyQvLCAnKicpO1xuXHR9XG5cblx0LyoqXG5cdCogQ29lcmNlIGB2YWxgLlxuXHQqXG5cdCogQHBhcmFtIHtNaXhlZH0gdmFsXG5cdCogQHJldHVybiB7TWl4ZWR9XG5cdCogQGFwaSBwcml2YXRlXG5cdCovXG5cdGZ1bmN0aW9uIGNvZXJjZSh2YWwpIHtcblx0XHRpZiAodmFsIGluc3RhbmNlb2YgRXJyb3IpIHtcblx0XHRcdHJldHVybiB2YWwuc3RhY2sgfHwgdmFsLm1lc3NhZ2U7XG5cdFx0fVxuXHRcdHJldHVybiB2YWw7XG5cdH1cblxuXHQvKipcblx0KiBYWFggRE8gTk9UIFVTRS4gVGhpcyBpcyBhIHRlbXBvcmFyeSBzdHViIGZ1bmN0aW9uLlxuXHQqIFhYWCBJdCBXSUxMIGJlIHJlbW92ZWQgaW4gdGhlIG5leHQgbWFqb3IgcmVsZWFzZS5cblx0Ki9cblx0ZnVuY3Rpb24gZGVzdHJveSgpIHtcblx0XHRjb25zb2xlLndhcm4oJ0luc3RhbmNlIG1ldGhvZCBgZGVidWcuZGVzdHJveSgpYCBpcyBkZXByZWNhdGVkIGFuZCBubyBsb25nZXIgZG9lcyBhbnl0aGluZy4gSXQgd2lsbCBiZSByZW1vdmVkIGluIHRoZSBuZXh0IG1ham9yIHZlcnNpb24gb2YgYGRlYnVnYC4nKTtcblx0fVxuXG5cdGNyZWF0ZURlYnVnLmVuYWJsZShjcmVhdGVEZWJ1Zy5sb2FkKCkpO1xuXG5cdHJldHVybiBjcmVhdGVEZWJ1Zztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXR1cDtcbiIsIm1vZHVsZS5leHBvcnRzID0gKCgpID0+IHtcbiAgaWYgKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHNlbGY7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB3aW5kb3c7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbiAgfVxufSkoKTtcbiIsImNvbnN0IFNvY2tldCA9IHJlcXVpcmUoXCIuL3NvY2tldFwiKTtcblxubW9kdWxlLmV4cG9ydHMgPSAodXJpLCBvcHRzKSA9PiBuZXcgU29ja2V0KHVyaSwgb3B0cyk7XG5cbi8qKlxuICogRXhwb3NlIGRlcHMgZm9yIGxlZ2FjeSBjb21wYXRpYmlsaXR5XG4gKiBhbmQgc3RhbmRhbG9uZSBicm93c2VyIGFjY2Vzcy5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cy5Tb2NrZXQgPSBTb2NrZXQ7XG5tb2R1bGUuZXhwb3J0cy5wcm90b2NvbCA9IFNvY2tldC5wcm90b2NvbDsgLy8gdGhpcyBpcyBhbiBpbnRcbm1vZHVsZS5leHBvcnRzLlRyYW5zcG9ydCA9IHJlcXVpcmUoXCIuL3RyYW5zcG9ydFwiKTtcbm1vZHVsZS5leHBvcnRzLnRyYW5zcG9ydHMgPSByZXF1aXJlKFwiLi90cmFuc3BvcnRzL2luZGV4XCIpO1xubW9kdWxlLmV4cG9ydHMucGFyc2VyID0gcmVxdWlyZShcImVuZ2luZS5pby1wYXJzZXJcIik7XG4iLCJjb25zdCB0cmFuc3BvcnRzID0gcmVxdWlyZShcIi4vdHJhbnNwb3J0cy9pbmRleFwiKTtcbmNvbnN0IEVtaXR0ZXIgPSByZXF1aXJlKFwiY29tcG9uZW50LWVtaXR0ZXJcIik7XG5jb25zdCBkZWJ1ZyA9IHJlcXVpcmUoXCJkZWJ1Z1wiKShcImVuZ2luZS5pby1jbGllbnQ6c29ja2V0XCIpO1xuY29uc3QgcGFyc2VyID0gcmVxdWlyZShcImVuZ2luZS5pby1wYXJzZXJcIik7XG5jb25zdCBwYXJzZXVyaSA9IHJlcXVpcmUoXCJwYXJzZXVyaVwiKTtcbmNvbnN0IHBhcnNlcXMgPSByZXF1aXJlKFwicGFyc2Vxc1wiKTtcblxuY2xhc3MgU29ja2V0IGV4dGVuZHMgRW1pdHRlciB7XG4gIC8qKlxuICAgKiBTb2NrZXQgY29uc3RydWN0b3IuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfE9iamVjdH0gdXJpIG9yIG9wdGlvbnNcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG4gIGNvbnN0cnVjdG9yKHVyaSwgb3B0cyA9IHt9KSB7XG4gICAgc3VwZXIoKTtcblxuICAgIGlmICh1cmkgJiYgXCJvYmplY3RcIiA9PT0gdHlwZW9mIHVyaSkge1xuICAgICAgb3B0cyA9IHVyaTtcbiAgICAgIHVyaSA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHVyaSkge1xuICAgICAgdXJpID0gcGFyc2V1cmkodXJpKTtcbiAgICAgIG9wdHMuaG9zdG5hbWUgPSB1cmkuaG9zdDtcbiAgICAgIG9wdHMuc2VjdXJlID0gdXJpLnByb3RvY29sID09PSBcImh0dHBzXCIgfHwgdXJpLnByb3RvY29sID09PSBcIndzc1wiO1xuICAgICAgb3B0cy5wb3J0ID0gdXJpLnBvcnQ7XG4gICAgICBpZiAodXJpLnF1ZXJ5KSBvcHRzLnF1ZXJ5ID0gdXJpLnF1ZXJ5O1xuICAgIH0gZWxzZSBpZiAob3B0cy5ob3N0KSB7XG4gICAgICBvcHRzLmhvc3RuYW1lID0gcGFyc2V1cmkob3B0cy5ob3N0KS5ob3N0O1xuICAgIH1cblxuICAgIHRoaXMuc2VjdXJlID1cbiAgICAgIG51bGwgIT0gb3B0cy5zZWN1cmVcbiAgICAgICAgPyBvcHRzLnNlY3VyZVxuICAgICAgICA6IHR5cGVvZiBsb2NhdGlvbiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBcImh0dHBzOlwiID09PSBsb2NhdGlvbi5wcm90b2NvbDtcblxuICAgIGlmIChvcHRzLmhvc3RuYW1lICYmICFvcHRzLnBvcnQpIHtcbiAgICAgIC8vIGlmIG5vIHBvcnQgaXMgc3BlY2lmaWVkIG1hbnVhbGx5LCB1c2UgdGhlIHByb3RvY29sIGRlZmF1bHRcbiAgICAgIG9wdHMucG9ydCA9IHRoaXMuc2VjdXJlID8gXCI0NDNcIiA6IFwiODBcIjtcbiAgICB9XG5cbiAgICB0aGlzLmhvc3RuYW1lID1cbiAgICAgIG9wdHMuaG9zdG5hbWUgfHxcbiAgICAgICh0eXBlb2YgbG9jYXRpb24gIT09IFwidW5kZWZpbmVkXCIgPyBsb2NhdGlvbi5ob3N0bmFtZSA6IFwibG9jYWxob3N0XCIpO1xuICAgIHRoaXMucG9ydCA9XG4gICAgICBvcHRzLnBvcnQgfHxcbiAgICAgICh0eXBlb2YgbG9jYXRpb24gIT09IFwidW5kZWZpbmVkXCIgJiYgbG9jYXRpb24ucG9ydFxuICAgICAgICA/IGxvY2F0aW9uLnBvcnRcbiAgICAgICAgOiB0aGlzLnNlY3VyZVxuICAgICAgICA/IDQ0M1xuICAgICAgICA6IDgwKTtcblxuICAgIHRoaXMudHJhbnNwb3J0cyA9IG9wdHMudHJhbnNwb3J0cyB8fCBbXCJwb2xsaW5nXCIsIFwid2Vic29ja2V0XCJdO1xuICAgIHRoaXMucmVhZHlTdGF0ZSA9IFwiXCI7XG4gICAgdGhpcy53cml0ZUJ1ZmZlciA9IFtdO1xuICAgIHRoaXMucHJldkJ1ZmZlckxlbiA9IDA7XG5cbiAgICB0aGlzLm9wdHMgPSBPYmplY3QuYXNzaWduKFxuICAgICAge1xuICAgICAgICBwYXRoOiBcIi9lbmdpbmUuaW9cIixcbiAgICAgICAgYWdlbnQ6IGZhbHNlLFxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IGZhbHNlLFxuICAgICAgICB1cGdyYWRlOiB0cnVlLFxuICAgICAgICBqc29ucDogdHJ1ZSxcbiAgICAgICAgdGltZXN0YW1wUGFyYW06IFwidFwiLFxuICAgICAgICByZW1lbWJlclVwZ3JhZGU6IGZhbHNlLFxuICAgICAgICByZWplY3RVbmF1dGhvcml6ZWQ6IHRydWUsXG4gICAgICAgIHBlck1lc3NhZ2VEZWZsYXRlOiB7XG4gICAgICAgICAgdGhyZXNob2xkOiAxMDI0XG4gICAgICAgIH0sXG4gICAgICAgIHRyYW5zcG9ydE9wdGlvbnM6IHt9LFxuICAgICAgICBjbG9zZU9uQmVmb3JldW5sb2FkOiB0cnVlXG4gICAgICB9LFxuICAgICAgb3B0c1xuICAgICk7XG5cbiAgICB0aGlzLm9wdHMucGF0aCA9IHRoaXMub3B0cy5wYXRoLnJlcGxhY2UoL1xcLyQvLCBcIlwiKSArIFwiL1wiO1xuXG4gICAgaWYgKHR5cGVvZiB0aGlzLm9wdHMucXVlcnkgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIHRoaXMub3B0cy5xdWVyeSA9IHBhcnNlcXMuZGVjb2RlKHRoaXMub3B0cy5xdWVyeSk7XG4gICAgfVxuXG4gICAgLy8gc2V0IG9uIGhhbmRzaGFrZVxuICAgIHRoaXMuaWQgPSBudWxsO1xuICAgIHRoaXMudXBncmFkZXMgPSBudWxsO1xuICAgIHRoaXMucGluZ0ludGVydmFsID0gbnVsbDtcbiAgICB0aGlzLnBpbmdUaW1lb3V0ID0gbnVsbDtcblxuICAgIC8vIHNldCBvbiBoZWFydGJlYXRcbiAgICB0aGlzLnBpbmdUaW1lb3V0VGltZXIgPSBudWxsO1xuXG4gICAgaWYgKHR5cGVvZiBhZGRFdmVudExpc3RlbmVyID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIGlmICh0aGlzLm9wdHMuY2xvc2VPbkJlZm9yZXVubG9hZCkge1xuICAgICAgICAvLyBGaXJlZm94IGNsb3NlcyB0aGUgY29ubmVjdGlvbiB3aGVuIHRoZSBcImJlZm9yZXVubG9hZFwiIGV2ZW50IGlzIGVtaXR0ZWQgYnV0IG5vdCBDaHJvbWUuIFRoaXMgZXZlbnQgbGlzdGVuZXJcbiAgICAgICAgLy8gZW5zdXJlcyBldmVyeSBicm93c2VyIGJlaGF2ZXMgdGhlIHNhbWUgKG5vIFwiZGlzY29ubmVjdFwiIGV2ZW50IGF0IHRoZSBTb2NrZXQuSU8gbGV2ZWwgd2hlbiB0aGUgcGFnZSBpc1xuICAgICAgICAvLyBjbG9zZWQvcmVsb2FkZWQpXG4gICAgICAgIGFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgXCJiZWZvcmV1bmxvYWRcIixcbiAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy50cmFuc3BvcnQpIHtcbiAgICAgICAgICAgICAgLy8gc2lsZW50bHkgY2xvc2UgdGhlIHRyYW5zcG9ydFxuICAgICAgICAgICAgICB0aGlzLnRyYW5zcG9ydC5yZW1vdmVBbGxMaXN0ZW5lcnMoKTtcbiAgICAgICAgICAgICAgdGhpcy50cmFuc3BvcnQuY2xvc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGZhbHNlXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5ob3N0bmFtZSAhPT0gXCJsb2NhbGhvc3RcIikge1xuICAgICAgICB0aGlzLm9mZmxpbmVFdmVudExpc3RlbmVyID0gKCkgPT4ge1xuICAgICAgICAgIHRoaXMub25DbG9zZShcInRyYW5zcG9ydCBjbG9zZVwiKTtcbiAgICAgICAgfTtcbiAgICAgICAgYWRkRXZlbnRMaXN0ZW5lcihcIm9mZmxpbmVcIiwgdGhpcy5vZmZsaW5lRXZlbnRMaXN0ZW5lciwgZmFsc2UpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMub3BlbigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgdHJhbnNwb3J0IG9mIHRoZSBnaXZlbiB0eXBlLlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gdHJhbnNwb3J0IG5hbWVcbiAgICogQHJldHVybiB7VHJhbnNwb3J0fVxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIGNyZWF0ZVRyYW5zcG9ydChuYW1lKSB7XG4gICAgZGVidWcoJ2NyZWF0aW5nIHRyYW5zcG9ydCBcIiVzXCInLCBuYW1lKTtcbiAgICBjb25zdCBxdWVyeSA9IGNsb25lKHRoaXMub3B0cy5xdWVyeSk7XG5cbiAgICAvLyBhcHBlbmQgZW5naW5lLmlvIHByb3RvY29sIGlkZW50aWZpZXJcbiAgICBxdWVyeS5FSU8gPSBwYXJzZXIucHJvdG9jb2w7XG5cbiAgICAvLyB0cmFuc3BvcnQgbmFtZVxuICAgIHF1ZXJ5LnRyYW5zcG9ydCA9IG5hbWU7XG5cbiAgICAvLyBzZXNzaW9uIGlkIGlmIHdlIGFscmVhZHkgaGF2ZSBvbmVcbiAgICBpZiAodGhpcy5pZCkgcXVlcnkuc2lkID0gdGhpcy5pZDtcblxuICAgIGNvbnN0IG9wdHMgPSBPYmplY3QuYXNzaWduKFxuICAgICAge30sXG4gICAgICB0aGlzLm9wdHMudHJhbnNwb3J0T3B0aW9uc1tuYW1lXSxcbiAgICAgIHRoaXMub3B0cyxcbiAgICAgIHtcbiAgICAgICAgcXVlcnksXG4gICAgICAgIHNvY2tldDogdGhpcyxcbiAgICAgICAgaG9zdG5hbWU6IHRoaXMuaG9zdG5hbWUsXG4gICAgICAgIHNlY3VyZTogdGhpcy5zZWN1cmUsXG4gICAgICAgIHBvcnQ6IHRoaXMucG9ydFxuICAgICAgfVxuICAgICk7XG5cbiAgICBkZWJ1ZyhcIm9wdGlvbnM6ICVqXCIsIG9wdHMpO1xuXG4gICAgcmV0dXJuIG5ldyB0cmFuc3BvcnRzW25hbWVdKG9wdHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIHRyYW5zcG9ydCB0byB1c2UgYW5kIHN0YXJ0cyBwcm9iZS5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBvcGVuKCkge1xuICAgIGxldCB0cmFuc3BvcnQ7XG4gICAgaWYgKFxuICAgICAgdGhpcy5vcHRzLnJlbWVtYmVyVXBncmFkZSAmJlxuICAgICAgU29ja2V0LnByaW9yV2Vic29ja2V0U3VjY2VzcyAmJlxuICAgICAgdGhpcy50cmFuc3BvcnRzLmluZGV4T2YoXCJ3ZWJzb2NrZXRcIikgIT09IC0xXG4gICAgKSB7XG4gICAgICB0cmFuc3BvcnQgPSBcIndlYnNvY2tldFwiO1xuICAgIH0gZWxzZSBpZiAoMCA9PT0gdGhpcy50cmFuc3BvcnRzLmxlbmd0aCkge1xuICAgICAgLy8gRW1pdCBlcnJvciBvbiBuZXh0IHRpY2sgc28gaXQgY2FuIGJlIGxpc3RlbmVkIHRvXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5lbWl0KFwiZXJyb3JcIiwgXCJObyB0cmFuc3BvcnRzIGF2YWlsYWJsZVwiKTtcbiAgICAgIH0sIDApO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICB0cmFuc3BvcnQgPSB0aGlzLnRyYW5zcG9ydHNbMF07XG4gICAgfVxuICAgIHRoaXMucmVhZHlTdGF0ZSA9IFwib3BlbmluZ1wiO1xuXG4gICAgLy8gUmV0cnkgd2l0aCB0aGUgbmV4dCB0cmFuc3BvcnQgaWYgdGhlIHRyYW5zcG9ydCBpcyBkaXNhYmxlZCAoanNvbnA6IGZhbHNlKVxuICAgIHRyeSB7XG4gICAgICB0cmFuc3BvcnQgPSB0aGlzLmNyZWF0ZVRyYW5zcG9ydCh0cmFuc3BvcnQpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGRlYnVnKFwiZXJyb3Igd2hpbGUgY3JlYXRpbmcgdHJhbnNwb3J0OiAlc1wiLCBlKTtcbiAgICAgIHRoaXMudHJhbnNwb3J0cy5zaGlmdCgpO1xuICAgICAgdGhpcy5vcGVuKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdHJhbnNwb3J0Lm9wZW4oKTtcbiAgICB0aGlzLnNldFRyYW5zcG9ydCh0cmFuc3BvcnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGN1cnJlbnQgdHJhbnNwb3J0LiBEaXNhYmxlcyB0aGUgZXhpc3Rpbmcgb25lIChpZiBhbnkpLlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIHNldFRyYW5zcG9ydCh0cmFuc3BvcnQpIHtcbiAgICBkZWJ1ZyhcInNldHRpbmcgdHJhbnNwb3J0ICVzXCIsIHRyYW5zcG9ydC5uYW1lKTtcblxuICAgIGlmICh0aGlzLnRyYW5zcG9ydCkge1xuICAgICAgZGVidWcoXCJjbGVhcmluZyBleGlzdGluZyB0cmFuc3BvcnQgJXNcIiwgdGhpcy50cmFuc3BvcnQubmFtZSk7XG4gICAgICB0aGlzLnRyYW5zcG9ydC5yZW1vdmVBbGxMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICAvLyBzZXQgdXAgdHJhbnNwb3J0XG4gICAgdGhpcy50cmFuc3BvcnQgPSB0cmFuc3BvcnQ7XG5cbiAgICAvLyBzZXQgdXAgdHJhbnNwb3J0IGxpc3RlbmVyc1xuICAgIHRyYW5zcG9ydFxuICAgICAgLm9uKFwiZHJhaW5cIiwgdGhpcy5vbkRyYWluLmJpbmQodGhpcykpXG4gICAgICAub24oXCJwYWNrZXRcIiwgdGhpcy5vblBhY2tldC5iaW5kKHRoaXMpKVxuICAgICAgLm9uKFwiZXJyb3JcIiwgdGhpcy5vbkVycm9yLmJpbmQodGhpcykpXG4gICAgICAub24oXCJjbG9zZVwiLCAoKSA9PiB7XG4gICAgICAgIHRoaXMub25DbG9zZShcInRyYW5zcG9ydCBjbG9zZVwiKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb2JlcyBhIHRyYW5zcG9ydC5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IHRyYW5zcG9ydCBuYW1lXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgcHJvYmUobmFtZSkge1xuICAgIGRlYnVnKCdwcm9iaW5nIHRyYW5zcG9ydCBcIiVzXCInLCBuYW1lKTtcbiAgICBsZXQgdHJhbnNwb3J0ID0gdGhpcy5jcmVhdGVUcmFuc3BvcnQobmFtZSwgeyBwcm9iZTogMSB9KTtcbiAgICBsZXQgZmFpbGVkID0gZmFsc2U7XG5cbiAgICBTb2NrZXQucHJpb3JXZWJzb2NrZXRTdWNjZXNzID0gZmFsc2U7XG5cbiAgICBjb25zdCBvblRyYW5zcG9ydE9wZW4gPSAoKSA9PiB7XG4gICAgICBpZiAoZmFpbGVkKSByZXR1cm47XG5cbiAgICAgIGRlYnVnKCdwcm9iZSB0cmFuc3BvcnQgXCIlc1wiIG9wZW5lZCcsIG5hbWUpO1xuICAgICAgdHJhbnNwb3J0LnNlbmQoW3sgdHlwZTogXCJwaW5nXCIsIGRhdGE6IFwicHJvYmVcIiB9XSk7XG4gICAgICB0cmFuc3BvcnQub25jZShcInBhY2tldFwiLCBtc2cgPT4ge1xuICAgICAgICBpZiAoZmFpbGVkKSByZXR1cm47XG4gICAgICAgIGlmIChcInBvbmdcIiA9PT0gbXNnLnR5cGUgJiYgXCJwcm9iZVwiID09PSBtc2cuZGF0YSkge1xuICAgICAgICAgIGRlYnVnKCdwcm9iZSB0cmFuc3BvcnQgXCIlc1wiIHBvbmcnLCBuYW1lKTtcbiAgICAgICAgICB0aGlzLnVwZ3JhZGluZyA9IHRydWU7XG4gICAgICAgICAgdGhpcy5lbWl0KFwidXBncmFkaW5nXCIsIHRyYW5zcG9ydCk7XG4gICAgICAgICAgaWYgKCF0cmFuc3BvcnQpIHJldHVybjtcbiAgICAgICAgICBTb2NrZXQucHJpb3JXZWJzb2NrZXRTdWNjZXNzID0gXCJ3ZWJzb2NrZXRcIiA9PT0gdHJhbnNwb3J0Lm5hbWU7XG5cbiAgICAgICAgICBkZWJ1ZygncGF1c2luZyBjdXJyZW50IHRyYW5zcG9ydCBcIiVzXCInLCB0aGlzLnRyYW5zcG9ydC5uYW1lKTtcbiAgICAgICAgICB0aGlzLnRyYW5zcG9ydC5wYXVzZSgoKSA9PiB7XG4gICAgICAgICAgICBpZiAoZmFpbGVkKSByZXR1cm47XG4gICAgICAgICAgICBpZiAoXCJjbG9zZWRcIiA9PT0gdGhpcy5yZWFkeVN0YXRlKSByZXR1cm47XG4gICAgICAgICAgICBkZWJ1ZyhcImNoYW5naW5nIHRyYW5zcG9ydCBhbmQgc2VuZGluZyB1cGdyYWRlIHBhY2tldFwiKTtcblxuICAgICAgICAgICAgY2xlYW51cCgpO1xuXG4gICAgICAgICAgICB0aGlzLnNldFRyYW5zcG9ydCh0cmFuc3BvcnQpO1xuICAgICAgICAgICAgdHJhbnNwb3J0LnNlbmQoW3sgdHlwZTogXCJ1cGdyYWRlXCIgfV0pO1xuICAgICAgICAgICAgdGhpcy5lbWl0KFwidXBncmFkZVwiLCB0cmFuc3BvcnQpO1xuICAgICAgICAgICAgdHJhbnNwb3J0ID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMudXBncmFkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmZsdXNoKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGVidWcoJ3Byb2JlIHRyYW5zcG9ydCBcIiVzXCIgZmFpbGVkJywgbmFtZSk7XG4gICAgICAgICAgY29uc3QgZXJyID0gbmV3IEVycm9yKFwicHJvYmUgZXJyb3JcIik7XG4gICAgICAgICAgZXJyLnRyYW5zcG9ydCA9IHRyYW5zcG9ydC5uYW1lO1xuICAgICAgICAgIHRoaXMuZW1pdChcInVwZ3JhZGVFcnJvclwiLCBlcnIpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gZnJlZXplVHJhbnNwb3J0KCkge1xuICAgICAgaWYgKGZhaWxlZCkgcmV0dXJuO1xuXG4gICAgICAvLyBBbnkgY2FsbGJhY2sgY2FsbGVkIGJ5IHRyYW5zcG9ydCBzaG91bGQgYmUgaWdub3JlZCBzaW5jZSBub3dcbiAgICAgIGZhaWxlZCA9IHRydWU7XG5cbiAgICAgIGNsZWFudXAoKTtcblxuICAgICAgdHJhbnNwb3J0LmNsb3NlKCk7XG4gICAgICB0cmFuc3BvcnQgPSBudWxsO1xuICAgIH1cblxuICAgIC8vIEhhbmRsZSBhbnkgZXJyb3IgdGhhdCBoYXBwZW5zIHdoaWxlIHByb2JpbmdcbiAgICBjb25zdCBvbmVycm9yID0gZXJyID0+IHtcbiAgICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKFwicHJvYmUgZXJyb3I6IFwiICsgZXJyKTtcbiAgICAgIGVycm9yLnRyYW5zcG9ydCA9IHRyYW5zcG9ydC5uYW1lO1xuXG4gICAgICBmcmVlemVUcmFuc3BvcnQoKTtcblxuICAgICAgZGVidWcoJ3Byb2JlIHRyYW5zcG9ydCBcIiVzXCIgZmFpbGVkIGJlY2F1c2Ugb2YgZXJyb3I6ICVzJywgbmFtZSwgZXJyKTtcblxuICAgICAgdGhpcy5lbWl0KFwidXBncmFkZUVycm9yXCIsIGVycm9yKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gb25UcmFuc3BvcnRDbG9zZSgpIHtcbiAgICAgIG9uZXJyb3IoXCJ0cmFuc3BvcnQgY2xvc2VkXCIpO1xuICAgIH1cblxuICAgIC8vIFdoZW4gdGhlIHNvY2tldCBpcyBjbG9zZWQgd2hpbGUgd2UncmUgcHJvYmluZ1xuICAgIGZ1bmN0aW9uIG9uY2xvc2UoKSB7XG4gICAgICBvbmVycm9yKFwic29ja2V0IGNsb3NlZFwiKTtcbiAgICB9XG5cbiAgICAvLyBXaGVuIHRoZSBzb2NrZXQgaXMgdXBncmFkZWQgd2hpbGUgd2UncmUgcHJvYmluZ1xuICAgIGZ1bmN0aW9uIG9udXBncmFkZSh0bykge1xuICAgICAgaWYgKHRyYW5zcG9ydCAmJiB0by5uYW1lICE9PSB0cmFuc3BvcnQubmFtZSkge1xuICAgICAgICBkZWJ1ZygnXCIlc1wiIHdvcmtzIC0gYWJvcnRpbmcgXCIlc1wiJywgdG8ubmFtZSwgdHJhbnNwb3J0Lm5hbWUpO1xuICAgICAgICBmcmVlemVUcmFuc3BvcnQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZW1vdmUgYWxsIGxpc3RlbmVycyBvbiB0aGUgdHJhbnNwb3J0IGFuZCBvbiBzZWxmXG4gICAgY29uc3QgY2xlYW51cCA9ICgpID0+IHtcbiAgICAgIHRyYW5zcG9ydC5yZW1vdmVMaXN0ZW5lcihcIm9wZW5cIiwgb25UcmFuc3BvcnRPcGVuKTtcbiAgICAgIHRyYW5zcG9ydC5yZW1vdmVMaXN0ZW5lcihcImVycm9yXCIsIG9uZXJyb3IpO1xuICAgICAgdHJhbnNwb3J0LnJlbW92ZUxpc3RlbmVyKFwiY2xvc2VcIiwgb25UcmFuc3BvcnRDbG9zZSk7XG4gICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKFwiY2xvc2VcIiwgb25jbG9zZSk7XG4gICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKFwidXBncmFkaW5nXCIsIG9udXBncmFkZSk7XG4gICAgfTtcblxuICAgIHRyYW5zcG9ydC5vbmNlKFwib3BlblwiLCBvblRyYW5zcG9ydE9wZW4pO1xuICAgIHRyYW5zcG9ydC5vbmNlKFwiZXJyb3JcIiwgb25lcnJvcik7XG4gICAgdHJhbnNwb3J0Lm9uY2UoXCJjbG9zZVwiLCBvblRyYW5zcG9ydENsb3NlKTtcblxuICAgIHRoaXMub25jZShcImNsb3NlXCIsIG9uY2xvc2UpO1xuICAgIHRoaXMub25jZShcInVwZ3JhZGluZ1wiLCBvbnVwZ3JhZGUpO1xuXG4gICAgdHJhbnNwb3J0Lm9wZW4oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiBjb25uZWN0aW9uIGlzIGRlZW1lZCBvcGVuLlxuICAgKlxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cbiAgb25PcGVuKCkge1xuICAgIGRlYnVnKFwic29ja2V0IG9wZW5cIik7XG4gICAgdGhpcy5yZWFkeVN0YXRlID0gXCJvcGVuXCI7XG4gICAgU29ja2V0LnByaW9yV2Vic29ja2V0U3VjY2VzcyA9IFwid2Vic29ja2V0XCIgPT09IHRoaXMudHJhbnNwb3J0Lm5hbWU7XG4gICAgdGhpcy5lbWl0KFwib3BlblwiKTtcbiAgICB0aGlzLmZsdXNoKCk7XG5cbiAgICAvLyB3ZSBjaGVjayBmb3IgYHJlYWR5U3RhdGVgIGluIGNhc2UgYW4gYG9wZW5gXG4gICAgLy8gbGlzdGVuZXIgYWxyZWFkeSBjbG9zZWQgdGhlIHNvY2tldFxuICAgIGlmIChcbiAgICAgIFwib3BlblwiID09PSB0aGlzLnJlYWR5U3RhdGUgJiZcbiAgICAgIHRoaXMub3B0cy51cGdyYWRlICYmXG4gICAgICB0aGlzLnRyYW5zcG9ydC5wYXVzZVxuICAgICkge1xuICAgICAgZGVidWcoXCJzdGFydGluZyB1cGdyYWRlIHByb2Jlc1wiKTtcbiAgICAgIGxldCBpID0gMDtcbiAgICAgIGNvbnN0IGwgPSB0aGlzLnVwZ3JhZGVzLmxlbmd0aDtcbiAgICAgIGZvciAoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIHRoaXMucHJvYmUodGhpcy51cGdyYWRlc1tpXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgYSBwYWNrZXQuXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgb25QYWNrZXQocGFja2V0KSB7XG4gICAgaWYgKFxuICAgICAgXCJvcGVuaW5nXCIgPT09IHRoaXMucmVhZHlTdGF0ZSB8fFxuICAgICAgXCJvcGVuXCIgPT09IHRoaXMucmVhZHlTdGF0ZSB8fFxuICAgICAgXCJjbG9zaW5nXCIgPT09IHRoaXMucmVhZHlTdGF0ZVxuICAgICkge1xuICAgICAgZGVidWcoJ3NvY2tldCByZWNlaXZlOiB0eXBlIFwiJXNcIiwgZGF0YSBcIiVzXCInLCBwYWNrZXQudHlwZSwgcGFja2V0LmRhdGEpO1xuXG4gICAgICB0aGlzLmVtaXQoXCJwYWNrZXRcIiwgcGFja2V0KTtcblxuICAgICAgLy8gU29ja2V0IGlzIGxpdmUgLSBhbnkgcGFja2V0IGNvdW50c1xuICAgICAgdGhpcy5lbWl0KFwiaGVhcnRiZWF0XCIpO1xuXG4gICAgICBzd2l0Y2ggKHBhY2tldC50eXBlKSB7XG4gICAgICAgIGNhc2UgXCJvcGVuXCI6XG4gICAgICAgICAgdGhpcy5vbkhhbmRzaGFrZShKU09OLnBhcnNlKHBhY2tldC5kYXRhKSk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcInBpbmdcIjpcbiAgICAgICAgICB0aGlzLnJlc2V0UGluZ1RpbWVvdXQoKTtcbiAgICAgICAgICB0aGlzLnNlbmRQYWNrZXQoXCJwb25nXCIpO1xuICAgICAgICAgIHRoaXMuZW1pdChcInBvbmdcIik7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcImVycm9yXCI6XG4gICAgICAgICAgY29uc3QgZXJyID0gbmV3IEVycm9yKFwic2VydmVyIGVycm9yXCIpO1xuICAgICAgICAgIGVyci5jb2RlID0gcGFja2V0LmRhdGE7XG4gICAgICAgICAgdGhpcy5vbkVycm9yKGVycik7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcIm1lc3NhZ2VcIjpcbiAgICAgICAgICB0aGlzLmVtaXQoXCJkYXRhXCIsIHBhY2tldC5kYXRhKTtcbiAgICAgICAgICB0aGlzLmVtaXQoXCJtZXNzYWdlXCIsIHBhY2tldC5kYXRhKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZGVidWcoJ3BhY2tldCByZWNlaXZlZCB3aXRoIHNvY2tldCByZWFkeVN0YXRlIFwiJXNcIicsIHRoaXMucmVhZHlTdGF0ZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCB1cG9uIGhhbmRzaGFrZSBjb21wbGV0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gaGFuZHNoYWtlIG9ialxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIG9uSGFuZHNoYWtlKGRhdGEpIHtcbiAgICB0aGlzLmVtaXQoXCJoYW5kc2hha2VcIiwgZGF0YSk7XG4gICAgdGhpcy5pZCA9IGRhdGEuc2lkO1xuICAgIHRoaXMudHJhbnNwb3J0LnF1ZXJ5LnNpZCA9IGRhdGEuc2lkO1xuICAgIHRoaXMudXBncmFkZXMgPSB0aGlzLmZpbHRlclVwZ3JhZGVzKGRhdGEudXBncmFkZXMpO1xuICAgIHRoaXMucGluZ0ludGVydmFsID0gZGF0YS5waW5nSW50ZXJ2YWw7XG4gICAgdGhpcy5waW5nVGltZW91dCA9IGRhdGEucGluZ1RpbWVvdXQ7XG4gICAgdGhpcy5vbk9wZW4oKTtcbiAgICAvLyBJbiBjYXNlIG9wZW4gaGFuZGxlciBjbG9zZXMgc29ja2V0XG4gICAgaWYgKFwiY2xvc2VkXCIgPT09IHRoaXMucmVhZHlTdGF0ZSkgcmV0dXJuO1xuICAgIHRoaXMucmVzZXRQaW5nVGltZW91dCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgYW5kIHJlc2V0cyBwaW5nIHRpbWVvdXQgdGltZXIgYmFzZWQgb24gc2VydmVyIHBpbmdzLlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIHJlc2V0UGluZ1RpbWVvdXQoKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMucGluZ1RpbWVvdXRUaW1lcik7XG4gICAgdGhpcy5waW5nVGltZW91dFRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLm9uQ2xvc2UoXCJwaW5nIHRpbWVvdXRcIik7XG4gICAgfSwgdGhpcy5waW5nSW50ZXJ2YWwgKyB0aGlzLnBpbmdUaW1lb3V0KTtcbiAgICBpZiAodGhpcy5vcHRzLmF1dG9VbnJlZikge1xuICAgICAgdGhpcy5waW5nVGltZW91dFRpbWVyLnVucmVmKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCBvbiBgZHJhaW5gIGV2ZW50XG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgb25EcmFpbigpIHtcbiAgICB0aGlzLndyaXRlQnVmZmVyLnNwbGljZSgwLCB0aGlzLnByZXZCdWZmZXJMZW4pO1xuXG4gICAgLy8gc2V0dGluZyBwcmV2QnVmZmVyTGVuID0gMCBpcyB2ZXJ5IGltcG9ydGFudFxuICAgIC8vIGZvciBleGFtcGxlLCB3aGVuIHVwZ3JhZGluZywgdXBncmFkZSBwYWNrZXQgaXMgc2VudCBvdmVyLFxuICAgIC8vIGFuZCBhIG5vbnplcm8gcHJldkJ1ZmZlckxlbiBjb3VsZCBjYXVzZSBwcm9ibGVtcyBvbiBgZHJhaW5gXG4gICAgdGhpcy5wcmV2QnVmZmVyTGVuID0gMDtcblxuICAgIGlmICgwID09PSB0aGlzLndyaXRlQnVmZmVyLmxlbmd0aCkge1xuICAgICAgdGhpcy5lbWl0KFwiZHJhaW5cIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZmx1c2goKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRmx1c2ggd3JpdGUgYnVmZmVycy5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBmbHVzaCgpIHtcbiAgICBpZiAoXG4gICAgICBcImNsb3NlZFwiICE9PSB0aGlzLnJlYWR5U3RhdGUgJiZcbiAgICAgIHRoaXMudHJhbnNwb3J0LndyaXRhYmxlICYmXG4gICAgICAhdGhpcy51cGdyYWRpbmcgJiZcbiAgICAgIHRoaXMud3JpdGVCdWZmZXIubGVuZ3RoXG4gICAgKSB7XG4gICAgICBkZWJ1ZyhcImZsdXNoaW5nICVkIHBhY2tldHMgaW4gc29ja2V0XCIsIHRoaXMud3JpdGVCdWZmZXIubGVuZ3RoKTtcbiAgICAgIHRoaXMudHJhbnNwb3J0LnNlbmQodGhpcy53cml0ZUJ1ZmZlcik7XG4gICAgICAvLyBrZWVwIHRyYWNrIG9mIGN1cnJlbnQgbGVuZ3RoIG9mIHdyaXRlQnVmZmVyXG4gICAgICAvLyBzcGxpY2Ugd3JpdGVCdWZmZXIgYW5kIGNhbGxiYWNrQnVmZmVyIG9uIGBkcmFpbmBcbiAgICAgIHRoaXMucHJldkJ1ZmZlckxlbiA9IHRoaXMud3JpdGVCdWZmZXIubGVuZ3RoO1xuICAgICAgdGhpcy5lbWl0KFwiZmx1c2hcIik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNlbmRzIGEgbWVzc2FnZS5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2UuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIGZ1bmN0aW9uLlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucy5cbiAgICogQHJldHVybiB7U29ja2V0fSBmb3IgY2hhaW5pbmcuXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuICB3cml0ZShtc2csIG9wdGlvbnMsIGZuKSB7XG4gICAgdGhpcy5zZW5kUGFja2V0KFwibWVzc2FnZVwiLCBtc2csIG9wdGlvbnMsIGZuKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNlbmQobXNnLCBvcHRpb25zLCBmbikge1xuICAgIHRoaXMuc2VuZFBhY2tldChcIm1lc3NhZ2VcIiwgbXNnLCBvcHRpb25zLCBmbik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogU2VuZHMgYSBwYWNrZXQuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwYWNrZXQgdHlwZS5cbiAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGEuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBmdW5jdGlvbi5cbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBzZW5kUGFja2V0KHR5cGUsIGRhdGEsIG9wdGlvbnMsIGZuKSB7XG4gICAgaWYgKFwiZnVuY3Rpb25cIiA9PT0gdHlwZW9mIGRhdGEpIHtcbiAgICAgIGZuID0gZGF0YTtcbiAgICAgIGRhdGEgPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgaWYgKFwiZnVuY3Rpb25cIiA9PT0gdHlwZW9mIG9wdGlvbnMpIHtcbiAgICAgIGZuID0gb3B0aW9ucztcbiAgICAgIG9wdGlvbnMgPSBudWxsO1xuICAgIH1cblxuICAgIGlmIChcImNsb3NpbmdcIiA9PT0gdGhpcy5yZWFkeVN0YXRlIHx8IFwiY2xvc2VkXCIgPT09IHRoaXMucmVhZHlTdGF0ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIG9wdGlvbnMuY29tcHJlc3MgPSBmYWxzZSAhPT0gb3B0aW9ucy5jb21wcmVzcztcblxuICAgIGNvbnN0IHBhY2tldCA9IHtcbiAgICAgIHR5cGU6IHR5cGUsXG4gICAgICBkYXRhOiBkYXRhLFxuICAgICAgb3B0aW9uczogb3B0aW9uc1xuICAgIH07XG4gICAgdGhpcy5lbWl0KFwicGFja2V0Q3JlYXRlXCIsIHBhY2tldCk7XG4gICAgdGhpcy53cml0ZUJ1ZmZlci5wdXNoKHBhY2tldCk7XG4gICAgaWYgKGZuKSB0aGlzLm9uY2UoXCJmbHVzaFwiLCBmbik7XG4gICAgdGhpcy5mbHVzaCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsb3NlcyB0aGUgY29ubmVjdGlvbi5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBjbG9zZSgpIHtcbiAgICBjb25zdCBjbG9zZSA9ICgpID0+IHtcbiAgICAgIHRoaXMub25DbG9zZShcImZvcmNlZCBjbG9zZVwiKTtcbiAgICAgIGRlYnVnKFwic29ja2V0IGNsb3NpbmcgLSB0ZWxsaW5nIHRyYW5zcG9ydCB0byBjbG9zZVwiKTtcbiAgICAgIHRoaXMudHJhbnNwb3J0LmNsb3NlKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGNsZWFudXBBbmRDbG9zZSA9ICgpID0+IHtcbiAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIoXCJ1cGdyYWRlXCIsIGNsZWFudXBBbmRDbG9zZSk7XG4gICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKFwidXBncmFkZUVycm9yXCIsIGNsZWFudXBBbmRDbG9zZSk7XG4gICAgICBjbG9zZSgpO1xuICAgIH07XG5cbiAgICBjb25zdCB3YWl0Rm9yVXBncmFkZSA9ICgpID0+IHtcbiAgICAgIC8vIHdhaXQgZm9yIHVwZ3JhZGUgdG8gZmluaXNoIHNpbmNlIHdlIGNhbid0IHNlbmQgcGFja2V0cyB3aGlsZSBwYXVzaW5nIGEgdHJhbnNwb3J0XG4gICAgICB0aGlzLm9uY2UoXCJ1cGdyYWRlXCIsIGNsZWFudXBBbmRDbG9zZSk7XG4gICAgICB0aGlzLm9uY2UoXCJ1cGdyYWRlRXJyb3JcIiwgY2xlYW51cEFuZENsb3NlKTtcbiAgICB9O1xuXG4gICAgaWYgKFwib3BlbmluZ1wiID09PSB0aGlzLnJlYWR5U3RhdGUgfHwgXCJvcGVuXCIgPT09IHRoaXMucmVhZHlTdGF0ZSkge1xuICAgICAgdGhpcy5yZWFkeVN0YXRlID0gXCJjbG9zaW5nXCI7XG5cbiAgICAgIGlmICh0aGlzLndyaXRlQnVmZmVyLmxlbmd0aCkge1xuICAgICAgICB0aGlzLm9uY2UoXCJkcmFpblwiLCAoKSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMudXBncmFkaW5nKSB7XG4gICAgICAgICAgICB3YWl0Rm9yVXBncmFkZSgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjbG9zZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMudXBncmFkaW5nKSB7XG4gICAgICAgIHdhaXRGb3JVcGdyYWRlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjbG9zZSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCB1cG9uIHRyYW5zcG9ydCBlcnJvclxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIG9uRXJyb3IoZXJyKSB7XG4gICAgZGVidWcoXCJzb2NrZXQgZXJyb3IgJWpcIiwgZXJyKTtcbiAgICBTb2NrZXQucHJpb3JXZWJzb2NrZXRTdWNjZXNzID0gZmFsc2U7XG4gICAgdGhpcy5lbWl0KFwiZXJyb3JcIiwgZXJyKTtcbiAgICB0aGlzLm9uQ2xvc2UoXCJ0cmFuc3BvcnQgZXJyb3JcIiwgZXJyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgdXBvbiB0cmFuc3BvcnQgY2xvc2UuXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgb25DbG9zZShyZWFzb24sIGRlc2MpIHtcbiAgICBpZiAoXG4gICAgICBcIm9wZW5pbmdcIiA9PT0gdGhpcy5yZWFkeVN0YXRlIHx8XG4gICAgICBcIm9wZW5cIiA9PT0gdGhpcy5yZWFkeVN0YXRlIHx8XG4gICAgICBcImNsb3NpbmdcIiA9PT0gdGhpcy5yZWFkeVN0YXRlXG4gICAgKSB7XG4gICAgICBkZWJ1Zygnc29ja2V0IGNsb3NlIHdpdGggcmVhc29uOiBcIiVzXCInLCByZWFzb24pO1xuXG4gICAgICAvLyBjbGVhciB0aW1lcnNcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLnBpbmdJbnRlcnZhbFRpbWVyKTtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLnBpbmdUaW1lb3V0VGltZXIpO1xuXG4gICAgICAvLyBzdG9wIGV2ZW50IGZyb20gZmlyaW5nIGFnYWluIGZvciB0cmFuc3BvcnRcbiAgICAgIHRoaXMudHJhbnNwb3J0LnJlbW92ZUFsbExpc3RlbmVycyhcImNsb3NlXCIpO1xuXG4gICAgICAvLyBlbnN1cmUgdHJhbnNwb3J0IHdvbid0IHN0YXkgb3BlblxuICAgICAgdGhpcy50cmFuc3BvcnQuY2xvc2UoKTtcblxuICAgICAgLy8gaWdub3JlIGZ1cnRoZXIgdHJhbnNwb3J0IGNvbW11bmljYXRpb25cbiAgICAgIHRoaXMudHJhbnNwb3J0LnJlbW92ZUFsbExpc3RlbmVycygpO1xuXG4gICAgICBpZiAodHlwZW9mIHJlbW92ZUV2ZW50TGlzdGVuZXIgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZW1vdmVFdmVudExpc3RlbmVyKFwib2ZmbGluZVwiLCB0aGlzLm9mZmxpbmVFdmVudExpc3RlbmVyLCBmYWxzZSk7XG4gICAgICB9XG5cbiAgICAgIC8vIHNldCByZWFkeSBzdGF0ZVxuICAgICAgdGhpcy5yZWFkeVN0YXRlID0gXCJjbG9zZWRcIjtcblxuICAgICAgLy8gY2xlYXIgc2Vzc2lvbiBpZFxuICAgICAgdGhpcy5pZCA9IG51bGw7XG5cbiAgICAgIC8vIGVtaXQgY2xvc2UgZXZlbnRcbiAgICAgIHRoaXMuZW1pdChcImNsb3NlXCIsIHJlYXNvbiwgZGVzYyk7XG5cbiAgICAgIC8vIGNsZWFuIGJ1ZmZlcnMgYWZ0ZXIsIHNvIHVzZXJzIGNhbiBzdGlsbFxuICAgICAgLy8gZ3JhYiB0aGUgYnVmZmVycyBvbiBgY2xvc2VgIGV2ZW50XG4gICAgICB0aGlzLndyaXRlQnVmZmVyID0gW107XG4gICAgICB0aGlzLnByZXZCdWZmZXJMZW4gPSAwO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBGaWx0ZXJzIHVwZ3JhZGVzLCByZXR1cm5pbmcgb25seSB0aG9zZSBtYXRjaGluZyBjbGllbnQgdHJhbnNwb3J0cy5cbiAgICpcbiAgICogQHBhcmFtIHtBcnJheX0gc2VydmVyIHVwZ3JhZGVzXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKlxuICAgKi9cbiAgZmlsdGVyVXBncmFkZXModXBncmFkZXMpIHtcbiAgICBjb25zdCBmaWx0ZXJlZFVwZ3JhZGVzID0gW107XG4gICAgbGV0IGkgPSAwO1xuICAgIGNvbnN0IGogPSB1cGdyYWRlcy5sZW5ndGg7XG4gICAgZm9yICg7IGkgPCBqOyBpKyspIHtcbiAgICAgIGlmICh+dGhpcy50cmFuc3BvcnRzLmluZGV4T2YodXBncmFkZXNbaV0pKVxuICAgICAgICBmaWx0ZXJlZFVwZ3JhZGVzLnB1c2godXBncmFkZXNbaV0pO1xuICAgIH1cbiAgICByZXR1cm4gZmlsdGVyZWRVcGdyYWRlcztcbiAgfVxufVxuXG5Tb2NrZXQucHJpb3JXZWJzb2NrZXRTdWNjZXNzID0gZmFsc2U7XG5cbi8qKlxuICogUHJvdG9jb2wgdmVyc2lvbi5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblNvY2tldC5wcm90b2NvbCA9IHBhcnNlci5wcm90b2NvbDsgLy8gdGhpcyBpcyBhbiBpbnRcblxuZnVuY3Rpb24gY2xvbmUob2JqKSB7XG4gIGNvbnN0IG8gPSB7fTtcbiAgZm9yIChsZXQgaSBpbiBvYmopIHtcbiAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICBvW2ldID0gb2JqW2ldO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTb2NrZXQ7XG4iLCJjb25zdCBwYXJzZXIgPSByZXF1aXJlKFwiZW5naW5lLmlvLXBhcnNlclwiKTtcbmNvbnN0IEVtaXR0ZXIgPSByZXF1aXJlKFwiY29tcG9uZW50LWVtaXR0ZXJcIik7XG5jb25zdCBkZWJ1ZyA9IHJlcXVpcmUoXCJkZWJ1Z1wiKShcImVuZ2luZS5pby1jbGllbnQ6dHJhbnNwb3J0XCIpO1xuXG5jbGFzcyBUcmFuc3BvcnQgZXh0ZW5kcyBFbWl0dGVyIHtcbiAgLyoqXG4gICAqIFRyYW5zcG9ydCBhYnN0cmFjdCBjb25zdHJ1Y3Rvci5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMuXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgY29uc3RydWN0b3Iob3B0cykge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLm9wdHMgPSBvcHRzO1xuICAgIHRoaXMucXVlcnkgPSBvcHRzLnF1ZXJ5O1xuICAgIHRoaXMucmVhZHlTdGF0ZSA9IFwiXCI7XG4gICAgdGhpcy5zb2NrZXQgPSBvcHRzLnNvY2tldDtcbiAgfVxuXG4gIC8qKlxuICAgKiBFbWl0cyBhbiBlcnJvci5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICAgKiBAcmV0dXJuIHtUcmFuc3BvcnR9IGZvciBjaGFpbmluZ1xuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cbiAgb25FcnJvcihtc2csIGRlc2MpIHtcbiAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IobXNnKTtcbiAgICBlcnIudHlwZSA9IFwiVHJhbnNwb3J0RXJyb3JcIjtcbiAgICBlcnIuZGVzY3JpcHRpb24gPSBkZXNjO1xuICAgIHRoaXMuZW1pdChcImVycm9yXCIsIGVycik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogT3BlbnMgdGhlIHRyYW5zcG9ydC5cbiAgICpcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG4gIG9wZW4oKSB7XG4gICAgaWYgKFwiY2xvc2VkXCIgPT09IHRoaXMucmVhZHlTdGF0ZSB8fCBcIlwiID09PSB0aGlzLnJlYWR5U3RhdGUpIHtcbiAgICAgIHRoaXMucmVhZHlTdGF0ZSA9IFwib3BlbmluZ1wiO1xuICAgICAgdGhpcy5kb09wZW4oKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBDbG9zZXMgdGhlIHRyYW5zcG9ydC5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBjbG9zZSgpIHtcbiAgICBpZiAoXCJvcGVuaW5nXCIgPT09IHRoaXMucmVhZHlTdGF0ZSB8fCBcIm9wZW5cIiA9PT0gdGhpcy5yZWFkeVN0YXRlKSB7XG4gICAgICB0aGlzLmRvQ2xvc2UoKTtcbiAgICAgIHRoaXMub25DbG9zZSgpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbmRzIG11bHRpcGxlIHBhY2tldHMuXG4gICAqXG4gICAqIEBwYXJhbSB7QXJyYXl9IHBhY2tldHNcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBzZW5kKHBhY2tldHMpIHtcbiAgICBpZiAoXCJvcGVuXCIgPT09IHRoaXMucmVhZHlTdGF0ZSkge1xuICAgICAgdGhpcy53cml0ZShwYWNrZXRzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gdGhpcyBtaWdodCBoYXBwZW4gaWYgdGhlIHRyYW5zcG9ydCB3YXMgc2lsZW50bHkgY2xvc2VkIGluIHRoZSBiZWZvcmV1bmxvYWQgZXZlbnQgaGFuZGxlclxuICAgICAgZGVidWcoXCJ0cmFuc3BvcnQgaXMgbm90IG9wZW4sIGRpc2NhcmRpbmcgcGFja2V0c1wiKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIHVwb24gb3BlblxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIG9uT3BlbigpIHtcbiAgICB0aGlzLnJlYWR5U3RhdGUgPSBcIm9wZW5cIjtcbiAgICB0aGlzLndyaXRhYmxlID0gdHJ1ZTtcbiAgICB0aGlzLmVtaXQoXCJvcGVuXCIpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aXRoIGRhdGEuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgb25EYXRhKGRhdGEpIHtcbiAgICBjb25zdCBwYWNrZXQgPSBwYXJzZXIuZGVjb2RlUGFja2V0KGRhdGEsIHRoaXMuc29ja2V0LmJpbmFyeVR5cGUpO1xuICAgIHRoaXMub25QYWNrZXQocGFja2V0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2l0aCBhIGRlY29kZWQgcGFja2V0LlxuICAgKi9cbiAgb25QYWNrZXQocGFja2V0KSB7XG4gICAgdGhpcy5lbWl0KFwicGFja2V0XCIsIHBhY2tldCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIHVwb24gY2xvc2UuXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgb25DbG9zZSgpIHtcbiAgICB0aGlzLnJlYWR5U3RhdGUgPSBcImNsb3NlZFwiO1xuICAgIHRoaXMuZW1pdChcImNsb3NlXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVHJhbnNwb3J0O1xuIiwiY29uc3QgWE1MSHR0cFJlcXVlc3QgPSByZXF1aXJlKFwiLi4vLi4vY29udHJpYi94bWxodHRwcmVxdWVzdC1zc2wvWE1MSHR0cFJlcXVlc3RcIik7XG5jb25zdCBYSFIgPSByZXF1aXJlKFwiLi9wb2xsaW5nLXhoclwiKTtcbmNvbnN0IEpTT05QID0gcmVxdWlyZShcIi4vcG9sbGluZy1qc29ucFwiKTtcbmNvbnN0IHdlYnNvY2tldCA9IHJlcXVpcmUoXCIuL3dlYnNvY2tldFwiKTtcblxuZXhwb3J0cy5wb2xsaW5nID0gcG9sbGluZztcbmV4cG9ydHMud2Vic29ja2V0ID0gd2Vic29ja2V0O1xuXG4vKipcbiAqIFBvbGxpbmcgdHJhbnNwb3J0IHBvbHltb3JwaGljIGNvbnN0cnVjdG9yLlxuICogRGVjaWRlcyBvbiB4aHIgdnMganNvbnAgYmFzZWQgb24gZmVhdHVyZSBkZXRlY3Rpb24uXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gcG9sbGluZyhvcHRzKSB7XG4gIGxldCB4aHI7XG4gIGxldCB4ZCA9IGZhbHNlO1xuICBsZXQgeHMgPSBmYWxzZTtcbiAgY29uc3QganNvbnAgPSBmYWxzZSAhPT0gb3B0cy5qc29ucDtcblxuICBpZiAodHlwZW9mIGxvY2F0aW9uICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY29uc3QgaXNTU0wgPSBcImh0dHBzOlwiID09PSBsb2NhdGlvbi5wcm90b2NvbDtcbiAgICBsZXQgcG9ydCA9IGxvY2F0aW9uLnBvcnQ7XG5cbiAgICAvLyBzb21lIHVzZXIgYWdlbnRzIGhhdmUgZW1wdHkgYGxvY2F0aW9uLnBvcnRgXG4gICAgaWYgKCFwb3J0KSB7XG4gICAgICBwb3J0ID0gaXNTU0wgPyA0NDMgOiA4MDtcbiAgICB9XG5cbiAgICB4ZCA9IG9wdHMuaG9zdG5hbWUgIT09IGxvY2F0aW9uLmhvc3RuYW1lIHx8IHBvcnQgIT09IG9wdHMucG9ydDtcbiAgICB4cyA9IG9wdHMuc2VjdXJlICE9PSBpc1NTTDtcbiAgfVxuXG4gIG9wdHMueGRvbWFpbiA9IHhkO1xuICBvcHRzLnhzY2hlbWUgPSB4cztcbiAgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KG9wdHMpO1xuXG4gIGlmIChcIm9wZW5cIiBpbiB4aHIgJiYgIW9wdHMuZm9yY2VKU09OUCkge1xuICAgIHJldHVybiBuZXcgWEhSKG9wdHMpO1xuICB9IGVsc2Uge1xuICAgIGlmICghanNvbnApIHRocm93IG5ldyBFcnJvcihcIkpTT05QIGRpc2FibGVkXCIpO1xuICAgIHJldHVybiBuZXcgSlNPTlAob3B0cyk7XG4gIH1cbn1cbiIsImNvbnN0IFBvbGxpbmcgPSByZXF1aXJlKFwiLi9wb2xsaW5nXCIpO1xuY29uc3QgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoXCIuLi9nbG9iYWxUaGlzXCIpO1xuXG5jb25zdCByTmV3bGluZSA9IC9cXG4vZztcbmNvbnN0IHJFc2NhcGVkTmV3bGluZSA9IC9cXFxcbi9nO1xuXG4vKipcbiAqIEdsb2JhbCBKU09OUCBjYWxsYmFja3MuXG4gKi9cblxubGV0IGNhbGxiYWNrcztcblxuY2xhc3MgSlNPTlBQb2xsaW5nIGV4dGVuZHMgUG9sbGluZyB7XG4gIC8qKlxuICAgKiBKU09OUCBQb2xsaW5nIGNvbnN0cnVjdG9yLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cy5cbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG4gIGNvbnN0cnVjdG9yKG9wdHMpIHtcbiAgICBzdXBlcihvcHRzKTtcblxuICAgIHRoaXMucXVlcnkgPSB0aGlzLnF1ZXJ5IHx8IHt9O1xuXG4gICAgLy8gZGVmaW5lIGdsb2JhbCBjYWxsYmFja3MgYXJyYXkgaWYgbm90IHByZXNlbnRcbiAgICAvLyB3ZSBkbyB0aGlzIGhlcmUgKGxhemlseSkgdG8gYXZvaWQgdW5uZWVkZWQgZ2xvYmFsIHBvbGx1dGlvblxuICAgIGlmICghY2FsbGJhY2tzKSB7XG4gICAgICAvLyB3ZSBuZWVkIHRvIGNvbnNpZGVyIG11bHRpcGxlIGVuZ2luZXMgaW4gdGhlIHNhbWUgcGFnZVxuICAgICAgY2FsbGJhY2tzID0gZ2xvYmFsVGhpcy5fX19laW8gPSBnbG9iYWxUaGlzLl9fX2VpbyB8fCBbXTtcbiAgICB9XG5cbiAgICAvLyBjYWxsYmFjayBpZGVudGlmaWVyXG4gICAgdGhpcy5pbmRleCA9IGNhbGxiYWNrcy5sZW5ndGg7XG5cbiAgICAvLyBhZGQgY2FsbGJhY2sgdG8ganNvbnAgZ2xvYmFsXG4gICAgY2FsbGJhY2tzLnB1c2godGhpcy5vbkRhdGEuYmluZCh0aGlzKSk7XG5cbiAgICAvLyBhcHBlbmQgdG8gcXVlcnkgc3RyaW5nXG4gICAgdGhpcy5xdWVyeS5qID0gdGhpcy5pbmRleDtcbiAgfVxuXG4gIC8qKlxuICAgKiBKU09OUCBvbmx5IHN1cHBvcnRzIGJpbmFyeSBhcyBiYXNlNjQgZW5jb2RlZCBzdHJpbmdzXG4gICAqL1xuICBnZXQgc3VwcG9ydHNCaW5hcnkoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENsb3NlcyB0aGUgc29ja2V0LlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIGRvQ2xvc2UoKSB7XG4gICAgaWYgKHRoaXMuc2NyaXB0KSB7XG4gICAgICAvLyBwcmV2ZW50IHNwdXJpb3VzIGVycm9ycyBmcm9tIGJlaW5nIGVtaXR0ZWQgd2hlbiB0aGUgd2luZG93IGlzIHVubG9hZGVkXG4gICAgICB0aGlzLnNjcmlwdC5vbmVycm9yID0gKCkgPT4ge307XG4gICAgICB0aGlzLnNjcmlwdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuc2NyaXB0KTtcbiAgICAgIHRoaXMuc2NyaXB0ID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5mb3JtKSB7XG4gICAgICB0aGlzLmZvcm0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmZvcm0pO1xuICAgICAgdGhpcy5mb3JtID0gbnVsbDtcbiAgICAgIHRoaXMuaWZyYW1lID0gbnVsbDtcbiAgICB9XG5cbiAgICBzdXBlci5kb0Nsb3NlKCk7XG4gIH1cblxuICAvKipcbiAgICogU3RhcnRzIGEgcG9sbCBjeWNsZS5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBkb1BvbGwoKSB7XG4gICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcblxuICAgIGlmICh0aGlzLnNjcmlwdCkge1xuICAgICAgdGhpcy5zY3JpcHQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLnNjcmlwdCk7XG4gICAgICB0aGlzLnNjcmlwdCA9IG51bGw7XG4gICAgfVxuXG4gICAgc2NyaXB0LmFzeW5jID0gdHJ1ZTtcbiAgICBzY3JpcHQuc3JjID0gdGhpcy51cmkoKTtcbiAgICBzY3JpcHQub25lcnJvciA9IGUgPT4ge1xuICAgICAgdGhpcy5vbkVycm9yKFwianNvbnAgcG9sbCBlcnJvclwiLCBlKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaW5zZXJ0QXQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKVswXTtcbiAgICBpZiAoaW5zZXJ0QXQpIHtcbiAgICAgIGluc2VydEF0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHNjcmlwdCwgaW5zZXJ0QXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAoZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5ib2R5KS5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgIH1cbiAgICB0aGlzLnNjcmlwdCA9IHNjcmlwdDtcblxuICAgIGNvbnN0IGlzVUFnZWNrbyA9XG4gICAgICBcInVuZGVmaW5lZFwiICE9PSB0eXBlb2YgbmF2aWdhdG9yICYmIC9nZWNrby9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG5cbiAgICBpZiAoaXNVQWdlY2tvKSB7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBpZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoaWZyYW1lKTtcbiAgICAgIH0sIDEwMCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFdyaXRlcyB3aXRoIGEgaGlkZGVuIGlmcmFtZS5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGEgdG8gc2VuZFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsZWQgdXBvbiBmbHVzaC5cbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBkb1dyaXRlKGRhdGEsIGZuKSB7XG4gICAgbGV0IGlmcmFtZTtcblxuICAgIGlmICghdGhpcy5mb3JtKSB7XG4gICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgICBjb25zdCBhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICAgICAgY29uc3QgaWQgPSAodGhpcy5pZnJhbWVJZCA9IFwiZWlvX2lmcmFtZV9cIiArIHRoaXMuaW5kZXgpO1xuXG4gICAgICBmb3JtLmNsYXNzTmFtZSA9IFwic29ja2V0aW9cIjtcbiAgICAgIGZvcm0uc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgICBmb3JtLnN0eWxlLnRvcCA9IFwiLTEwMDBweFwiO1xuICAgICAgZm9ybS5zdHlsZS5sZWZ0ID0gXCItMTAwMHB4XCI7XG4gICAgICBmb3JtLnRhcmdldCA9IGlkO1xuICAgICAgZm9ybS5tZXRob2QgPSBcIlBPU1RcIjtcbiAgICAgIGZvcm0uc2V0QXR0cmlidXRlKFwiYWNjZXB0LWNoYXJzZXRcIiwgXCJ1dGYtOFwiKTtcbiAgICAgIGFyZWEubmFtZSA9IFwiZFwiO1xuICAgICAgZm9ybS5hcHBlbmRDaGlsZChhcmVhKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgICAgIHRoaXMuZm9ybSA9IGZvcm07XG4gICAgICB0aGlzLmFyZWEgPSBhcmVhO1xuICAgIH1cblxuICAgIHRoaXMuZm9ybS5hY3Rpb24gPSB0aGlzLnVyaSgpO1xuXG4gICAgZnVuY3Rpb24gY29tcGxldGUoKSB7XG4gICAgICBpbml0SWZyYW1lKCk7XG4gICAgICBmbigpO1xuICAgIH1cblxuICAgIGNvbnN0IGluaXRJZnJhbWUgPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5pZnJhbWUpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB0aGlzLmZvcm0ucmVtb3ZlQ2hpbGQodGhpcy5pZnJhbWUpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgdGhpcy5vbkVycm9yKFwianNvbnAgcG9sbGluZyBpZnJhbWUgcmVtb3ZhbCBlcnJvclwiLCBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0cnkge1xuICAgICAgICAvLyBpZTYgZHluYW1pYyBpZnJhbWVzIHdpdGggdGFyZ2V0PVwiXCIgc3VwcG9ydCAodGhhbmtzIENocmlzIExhbWJhY2hlcilcbiAgICAgICAgY29uc3QgaHRtbCA9ICc8aWZyYW1lIHNyYz1cImphdmFzY3JpcHQ6MFwiIG5hbWU9XCInICsgdGhpcy5pZnJhbWVJZCArICdcIj4nO1xuICAgICAgICBpZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGh0bWwpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIpO1xuICAgICAgICBpZnJhbWUubmFtZSA9IHRoaXMuaWZyYW1lSWQ7XG4gICAgICAgIGlmcmFtZS5zcmMgPSBcImphdmFzY3JpcHQ6MFwiO1xuICAgICAgfVxuXG4gICAgICBpZnJhbWUuaWQgPSB0aGlzLmlmcmFtZUlkO1xuXG4gICAgICB0aGlzLmZvcm0uYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgICAgIHRoaXMuaWZyYW1lID0gaWZyYW1lO1xuICAgIH07XG5cbiAgICBpbml0SWZyYW1lKCk7XG5cbiAgICAvLyBlc2NhcGUgXFxuIHRvIHByZXZlbnQgaXQgZnJvbSBiZWluZyBjb252ZXJ0ZWQgaW50byBcXHJcXG4gYnkgc29tZSBVQXNcbiAgICAvLyBkb3VibGUgZXNjYXBpbmcgaXMgcmVxdWlyZWQgZm9yIGVzY2FwZWQgbmV3IGxpbmVzIGJlY2F1c2UgdW5lc2NhcGluZyBvZiBuZXcgbGluZXMgY2FuIGJlIGRvbmUgc2FmZWx5IG9uIHNlcnZlci1zaWRlXG4gICAgZGF0YSA9IGRhdGEucmVwbGFjZShyRXNjYXBlZE5ld2xpbmUsIFwiXFxcXFxcblwiKTtcbiAgICB0aGlzLmFyZWEudmFsdWUgPSBkYXRhLnJlcGxhY2Uock5ld2xpbmUsIFwiXFxcXG5cIik7XG5cbiAgICB0cnkge1xuICAgICAgdGhpcy5mb3JtLnN1Ym1pdCgpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG5cbiAgICBpZiAodGhpcy5pZnJhbWUuYXR0YWNoRXZlbnQpIHtcbiAgICAgIHRoaXMuaWZyYW1lLm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuaWZyYW1lLnJlYWR5U3RhdGUgPT09IFwiY29tcGxldGVcIikge1xuICAgICAgICAgIGNvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaWZyYW1lLm9ubG9hZCA9IGNvbXBsZXRlO1xuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEpTT05QUG9sbGluZztcbiIsIi8qIGdsb2JhbCBhdHRhY2hFdmVudCAqL1xuXG5jb25zdCBYTUxIdHRwUmVxdWVzdCA9IHJlcXVpcmUoXCIuLi8uLi9jb250cmliL3htbGh0dHByZXF1ZXN0LXNzbC9YTUxIdHRwUmVxdWVzdFwiKTtcbmNvbnN0IFBvbGxpbmcgPSByZXF1aXJlKFwiLi9wb2xsaW5nXCIpO1xuY29uc3QgRW1pdHRlciA9IHJlcXVpcmUoXCJjb21wb25lbnQtZW1pdHRlclwiKTtcbmNvbnN0IHsgcGljayB9ID0gcmVxdWlyZShcIi4uL3V0aWxcIik7XG5jb25zdCBnbG9iYWxUaGlzID0gcmVxdWlyZShcIi4uL2dsb2JhbFRoaXNcIik7XG5cbmNvbnN0IGRlYnVnID0gcmVxdWlyZShcImRlYnVnXCIpKFwiZW5naW5lLmlvLWNsaWVudDpwb2xsaW5nLXhoclwiKTtcblxuLyoqXG4gKiBFbXB0eSBmdW5jdGlvblxuICovXG5cbmZ1bmN0aW9uIGVtcHR5KCkge31cblxuY29uc3QgaGFzWEhSMiA9IChmdW5jdGlvbigpIHtcbiAgY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KHsgeGRvbWFpbjogZmFsc2UgfSk7XG4gIHJldHVybiBudWxsICE9IHhoci5yZXNwb25zZVR5cGU7XG59KSgpO1xuXG5jbGFzcyBYSFIgZXh0ZW5kcyBQb2xsaW5nIHtcbiAgLyoqXG4gICAqIFhIUiBQb2xsaW5nIGNvbnN0cnVjdG9yLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0c1xuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cbiAgY29uc3RydWN0b3Iob3B0cykge1xuICAgIHN1cGVyKG9wdHMpO1xuXG4gICAgaWYgKHR5cGVvZiBsb2NhdGlvbiAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgY29uc3QgaXNTU0wgPSBcImh0dHBzOlwiID09PSBsb2NhdGlvbi5wcm90b2NvbDtcbiAgICAgIGxldCBwb3J0ID0gbG9jYXRpb24ucG9ydDtcblxuICAgICAgLy8gc29tZSB1c2VyIGFnZW50cyBoYXZlIGVtcHR5IGBsb2NhdGlvbi5wb3J0YFxuICAgICAgaWYgKCFwb3J0KSB7XG4gICAgICAgIHBvcnQgPSBpc1NTTCA/IDQ0MyA6IDgwO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnhkID1cbiAgICAgICAgKHR5cGVvZiBsb2NhdGlvbiAhPT0gXCJ1bmRlZmluZWRcIiAmJlxuICAgICAgICAgIG9wdHMuaG9zdG5hbWUgIT09IGxvY2F0aW9uLmhvc3RuYW1lKSB8fFxuICAgICAgICBwb3J0ICE9PSBvcHRzLnBvcnQ7XG4gICAgICB0aGlzLnhzID0gb3B0cy5zZWN1cmUgIT09IGlzU1NMO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBYSFIgc3VwcG9ydHMgYmluYXJ5XG4gICAgICovXG4gICAgY29uc3QgZm9yY2VCYXNlNjQgPSBvcHRzICYmIG9wdHMuZm9yY2VCYXNlNjQ7XG4gICAgdGhpcy5zdXBwb3J0c0JpbmFyeSA9IGhhc1hIUjIgJiYgIWZvcmNlQmFzZTY0O1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSByZXF1ZXN0LlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgcmVxdWVzdChvcHRzID0ge30pIHtcbiAgICBPYmplY3QuYXNzaWduKG9wdHMsIHsgeGQ6IHRoaXMueGQsIHhzOiB0aGlzLnhzIH0sIHRoaXMub3B0cyk7XG4gICAgcmV0dXJuIG5ldyBSZXF1ZXN0KHRoaXMudXJpKCksIG9wdHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbmRzIGRhdGEuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhIHRvIHNlbmQuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxlZCB1cG9uIGZsdXNoLlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIGRvV3JpdGUoZGF0YSwgZm4pIHtcbiAgICBjb25zdCByZXEgPSB0aGlzLnJlcXVlc3Qoe1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGRhdGE6IGRhdGFcbiAgICB9KTtcbiAgICByZXEub24oXCJzdWNjZXNzXCIsIGZuKTtcbiAgICByZXEub24oXCJlcnJvclwiLCBlcnIgPT4ge1xuICAgICAgdGhpcy5vbkVycm9yKFwieGhyIHBvc3QgZXJyb3JcIiwgZXJyKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdGFydHMgYSBwb2xsIGN5Y2xlLlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIGRvUG9sbCgpIHtcbiAgICBkZWJ1ZyhcInhociBwb2xsXCIpO1xuICAgIGNvbnN0IHJlcSA9IHRoaXMucmVxdWVzdCgpO1xuICAgIHJlcS5vbihcImRhdGFcIiwgdGhpcy5vbkRhdGEuYmluZCh0aGlzKSk7XG4gICAgcmVxLm9uKFwiZXJyb3JcIiwgZXJyID0+IHtcbiAgICAgIHRoaXMub25FcnJvcihcInhociBwb2xsIGVycm9yXCIsIGVycik7XG4gICAgfSk7XG4gICAgdGhpcy5wb2xsWGhyID0gcmVxO1xuICB9XG59XG5cbmNsYXNzIFJlcXVlc3QgZXh0ZW5kcyBFbWl0dGVyIHtcbiAgLyoqXG4gICAqIFJlcXVlc3QgY29uc3RydWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG4gIGNvbnN0cnVjdG9yKHVyaSwgb3B0cykge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5vcHRzID0gb3B0cztcblxuICAgIHRoaXMubWV0aG9kID0gb3B0cy5tZXRob2QgfHwgXCJHRVRcIjtcbiAgICB0aGlzLnVyaSA9IHVyaTtcbiAgICB0aGlzLmFzeW5jID0gZmFsc2UgIT09IG9wdHMuYXN5bmM7XG4gICAgdGhpcy5kYXRhID0gdW5kZWZpbmVkICE9PSBvcHRzLmRhdGEgPyBvcHRzLmRhdGEgOiBudWxsO1xuXG4gICAgdGhpcy5jcmVhdGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIHRoZSBYSFIgb2JqZWN0IGFuZCBzZW5kcyB0aGUgcmVxdWVzdC5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBjcmVhdGUoKSB7XG4gICAgY29uc3Qgb3B0cyA9IHBpY2soXG4gICAgICB0aGlzLm9wdHMsXG4gICAgICBcImFnZW50XCIsXG4gICAgICBcImVuYWJsZXNYRFJcIixcbiAgICAgIFwicGZ4XCIsXG4gICAgICBcImtleVwiLFxuICAgICAgXCJwYXNzcGhyYXNlXCIsXG4gICAgICBcImNlcnRcIixcbiAgICAgIFwiY2FcIixcbiAgICAgIFwiY2lwaGVyc1wiLFxuICAgICAgXCJyZWplY3RVbmF1dGhvcml6ZWRcIixcbiAgICAgIFwiYXV0b1VucmVmXCJcbiAgICApO1xuICAgIG9wdHMueGRvbWFpbiA9ICEhdGhpcy5vcHRzLnhkO1xuICAgIG9wdHMueHNjaGVtZSA9ICEhdGhpcy5vcHRzLnhzO1xuXG4gICAgY29uc3QgeGhyID0gKHRoaXMueGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KG9wdHMpKTtcblxuICAgIHRyeSB7XG4gICAgICBkZWJ1ZyhcInhociBvcGVuICVzOiAlc1wiLCB0aGlzLm1ldGhvZCwgdGhpcy51cmkpO1xuICAgICAgeGhyLm9wZW4odGhpcy5tZXRob2QsIHRoaXMudXJpLCB0aGlzLmFzeW5jKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICh0aGlzLm9wdHMuZXh0cmFIZWFkZXJzKSB7XG4gICAgICAgICAgeGhyLnNldERpc2FibGVIZWFkZXJDaGVjayAmJiB4aHIuc2V0RGlzYWJsZUhlYWRlckNoZWNrKHRydWUpO1xuICAgICAgICAgIGZvciAobGV0IGkgaW4gdGhpcy5vcHRzLmV4dHJhSGVhZGVycykge1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0cy5leHRyYUhlYWRlcnMuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoaSwgdGhpcy5vcHRzLmV4dHJhSGVhZGVyc1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7fVxuXG4gICAgICBpZiAoXCJQT1NUXCIgPT09IHRoaXMubWV0aG9kKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LXR5cGVcIiwgXCJ0ZXh0L3BsYWluO2NoYXJzZXQ9VVRGLThcIik7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICB9XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQWNjZXB0XCIsIFwiKi8qXCIpO1xuICAgICAgfSBjYXRjaCAoZSkge31cblxuICAgICAgLy8gaWU2IGNoZWNrXG4gICAgICBpZiAoXCJ3aXRoQ3JlZGVudGlhbHNcIiBpbiB4aHIpIHtcbiAgICAgICAgeGhyLndpdGhDcmVkZW50aWFscyA9IHRoaXMub3B0cy53aXRoQ3JlZGVudGlhbHM7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLm9wdHMucmVxdWVzdFRpbWVvdXQpIHtcbiAgICAgICAgeGhyLnRpbWVvdXQgPSB0aGlzLm9wdHMucmVxdWVzdFRpbWVvdXQ7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmhhc1hEUigpKSB7XG4gICAgICAgIHhoci5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5vbkxvYWQoKTtcbiAgICAgICAgfTtcbiAgICAgICAgeGhyLm9uZXJyb3IgPSAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5vbkVycm9yKHhoci5yZXNwb25zZVRleHQpO1xuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcbiAgICAgICAgICBpZiAoNCAhPT0geGhyLnJlYWR5U3RhdGUpIHJldHVybjtcbiAgICAgICAgICBpZiAoMjAwID09PSB4aHIuc3RhdHVzIHx8IDEyMjMgPT09IHhoci5zdGF0dXMpIHtcbiAgICAgICAgICAgIHRoaXMub25Mb2FkKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSB0aGUgYGVycm9yYCBldmVudCBoYW5kbGVyIHRoYXQncyB1c2VyLXNldFxuICAgICAgICAgICAgLy8gZG9lcyBub3QgdGhyb3cgaW4gdGhlIHNhbWUgdGljayBhbmQgZ2V0cyBjYXVnaHQgaGVyZVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMub25FcnJvcih0eXBlb2YgeGhyLnN0YXR1cyA9PT0gXCJudW1iZXJcIiA/IHhoci5zdGF0dXMgOiAwKTtcbiAgICAgICAgICAgIH0sIDApO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgZGVidWcoXCJ4aHIgZGF0YSAlc1wiLCB0aGlzLmRhdGEpO1xuICAgICAgeGhyLnNlbmQodGhpcy5kYXRhKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBOZWVkIHRvIGRlZmVyIHNpbmNlIC5jcmVhdGUoKSBpcyBjYWxsZWQgZGlyZWN0bHkgZnJvbSB0aGUgY29uc3RydWN0b3JcbiAgICAgIC8vIGFuZCB0aHVzIHRoZSAnZXJyb3InIGV2ZW50IGNhbiBvbmx5IGJlIG9ubHkgYm91bmQgKmFmdGVyKiB0aGlzIGV4Y2VwdGlvblxuICAgICAgLy8gb2NjdXJzLiAgVGhlcmVmb3JlLCBhbHNvLCB3ZSBjYW5ub3QgdGhyb3cgaGVyZSBhdCBhbGwuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5vbkVycm9yKGUpO1xuICAgICAgfSwgMCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgdGhpcy5pbmRleCA9IFJlcXVlc3QucmVxdWVzdHNDb3VudCsrO1xuICAgICAgUmVxdWVzdC5yZXF1ZXN0c1t0aGlzLmluZGV4XSA9IHRoaXM7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCB1cG9uIHN1Y2Nlc3NmdWwgcmVzcG9uc2UuXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgb25TdWNjZXNzKCkge1xuICAgIHRoaXMuZW1pdChcInN1Y2Nlc3NcIik7XG4gICAgdGhpcy5jbGVhbnVwKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIGlmIHdlIGhhdmUgZGF0YS5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBvbkRhdGEoZGF0YSkge1xuICAgIHRoaXMuZW1pdChcImRhdGFcIiwgZGF0YSk7XG4gICAgdGhpcy5vblN1Y2Nlc3MoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgdXBvbiBlcnJvci5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBvbkVycm9yKGVycikge1xuICAgIHRoaXMuZW1pdChcImVycm9yXCIsIGVycik7XG4gICAgdGhpcy5jbGVhbnVwKHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFucyB1cCBob3VzZS5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBjbGVhbnVwKGZyb21FcnJvcikge1xuICAgIGlmIChcInVuZGVmaW5lZFwiID09PSB0eXBlb2YgdGhpcy54aHIgfHwgbnVsbCA9PT0gdGhpcy54aHIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8geG1saHR0cHJlcXVlc3RcbiAgICBpZiAodGhpcy5oYXNYRFIoKSkge1xuICAgICAgdGhpcy54aHIub25sb2FkID0gdGhpcy54aHIub25lcnJvciA9IGVtcHR5O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBlbXB0eTtcbiAgICB9XG5cbiAgICBpZiAoZnJvbUVycm9yKSB7XG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLnhoci5hYm9ydCgpO1xuICAgICAgfSBjYXRjaCAoZSkge31cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICBkZWxldGUgUmVxdWVzdC5yZXF1ZXN0c1t0aGlzLmluZGV4XTtcbiAgICB9XG5cbiAgICB0aGlzLnhociA9IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIHVwb24gbG9hZC5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBvbkxvYWQoKSB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMueGhyLnJlc3BvbnNlVGV4dDtcbiAgICBpZiAoZGF0YSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5vbkRhdGEoZGF0YSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGl0IGhhcyBYRG9tYWluUmVxdWVzdC5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBoYXNYRFIoKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBYRG9tYWluUmVxdWVzdCAhPT0gXCJ1bmRlZmluZWRcIiAmJiAhdGhpcy54cyAmJiB0aGlzLmVuYWJsZXNYRFI7XG4gIH1cblxuICAvKipcbiAgICogQWJvcnRzIHRoZSByZXF1ZXN0LlxuICAgKlxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cbiAgYWJvcnQoKSB7XG4gICAgdGhpcy5jbGVhbnVwKCk7XG4gIH1cbn1cblxuLyoqXG4gKiBBYm9ydHMgcGVuZGluZyByZXF1ZXN0cyB3aGVuIHVubG9hZGluZyB0aGUgd2luZG93LiBUaGlzIGlzIG5lZWRlZCB0byBwcmV2ZW50XG4gKiBtZW1vcnkgbGVha3MgKGUuZy4gd2hlbiB1c2luZyBJRSkgYW5kIHRvIGVuc3VyZSB0aGF0IG5vIHNwdXJpb3VzIGVycm9yIGlzXG4gKiBlbWl0dGVkLlxuICovXG5cblJlcXVlc3QucmVxdWVzdHNDb3VudCA9IDA7XG5SZXF1ZXN0LnJlcXVlc3RzID0ge307XG5cbmlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgaWYgKHR5cGVvZiBhdHRhY2hFdmVudCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgYXR0YWNoRXZlbnQoXCJvbnVubG9hZFwiLCB1bmxvYWRIYW5kbGVyKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYWRkRXZlbnRMaXN0ZW5lciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgY29uc3QgdGVybWluYXRpb25FdmVudCA9IFwib25wYWdlaGlkZVwiIGluIGdsb2JhbFRoaXMgPyBcInBhZ2VoaWRlXCIgOiBcInVubG9hZFwiO1xuICAgIGFkZEV2ZW50TGlzdGVuZXIodGVybWluYXRpb25FdmVudCwgdW5sb2FkSGFuZGxlciwgZmFsc2UpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVubG9hZEhhbmRsZXIoKSB7XG4gIGZvciAobGV0IGkgaW4gUmVxdWVzdC5yZXF1ZXN0cykge1xuICAgIGlmIChSZXF1ZXN0LnJlcXVlc3RzLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICBSZXF1ZXN0LnJlcXVlc3RzW2ldLmFib3J0KCk7XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gWEhSO1xubW9kdWxlLmV4cG9ydHMuUmVxdWVzdCA9IFJlcXVlc3Q7XG4iLCJjb25zdCBUcmFuc3BvcnQgPSByZXF1aXJlKFwiLi4vdHJhbnNwb3J0XCIpO1xuY29uc3QgcGFyc2VxcyA9IHJlcXVpcmUoXCJwYXJzZXFzXCIpO1xuY29uc3QgcGFyc2VyID0gcmVxdWlyZShcImVuZ2luZS5pby1wYXJzZXJcIik7XG5jb25zdCB5ZWFzdCA9IHJlcXVpcmUoXCJ5ZWFzdFwiKTtcblxuY29uc3QgZGVidWcgPSByZXF1aXJlKFwiZGVidWdcIikoXCJlbmdpbmUuaW8tY2xpZW50OnBvbGxpbmdcIik7XG5cbmNsYXNzIFBvbGxpbmcgZXh0ZW5kcyBUcmFuc3BvcnQge1xuICAvKipcbiAgICogVHJhbnNwb3J0IG5hbWUuXG4gICAqL1xuICBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gXCJwb2xsaW5nXCI7XG4gIH1cblxuICAvKipcbiAgICogT3BlbnMgdGhlIHNvY2tldCAodHJpZ2dlcnMgcG9sbGluZykuIFdlIHdyaXRlIGEgUElORyBtZXNzYWdlIHRvIGRldGVybWluZVxuICAgKiB3aGVuIHRoZSB0cmFuc3BvcnQgaXMgb3Blbi5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBkb09wZW4oKSB7XG4gICAgdGhpcy5wb2xsKCk7XG4gIH1cblxuICAvKipcbiAgICogUGF1c2VzIHBvbGxpbmcuXG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIHVwb24gYnVmZmVycyBhcmUgZmx1c2hlZCBhbmQgdHJhbnNwb3J0IGlzIHBhdXNlZFxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIHBhdXNlKG9uUGF1c2UpIHtcbiAgICB0aGlzLnJlYWR5U3RhdGUgPSBcInBhdXNpbmdcIjtcblxuICAgIGNvbnN0IHBhdXNlID0gKCkgPT4ge1xuICAgICAgZGVidWcoXCJwYXVzZWRcIik7XG4gICAgICB0aGlzLnJlYWR5U3RhdGUgPSBcInBhdXNlZFwiO1xuICAgICAgb25QYXVzZSgpO1xuICAgIH07XG5cbiAgICBpZiAodGhpcy5wb2xsaW5nIHx8ICF0aGlzLndyaXRhYmxlKSB7XG4gICAgICBsZXQgdG90YWwgPSAwO1xuXG4gICAgICBpZiAodGhpcy5wb2xsaW5nKSB7XG4gICAgICAgIGRlYnVnKFwid2UgYXJlIGN1cnJlbnRseSBwb2xsaW5nIC0gd2FpdGluZyB0byBwYXVzZVwiKTtcbiAgICAgICAgdG90YWwrKztcbiAgICAgICAgdGhpcy5vbmNlKFwicG9sbENvbXBsZXRlXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGRlYnVnKFwicHJlLXBhdXNlIHBvbGxpbmcgY29tcGxldGVcIik7XG4gICAgICAgICAgLS10b3RhbCB8fCBwYXVzZSgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLndyaXRhYmxlKSB7XG4gICAgICAgIGRlYnVnKFwid2UgYXJlIGN1cnJlbnRseSB3cml0aW5nIC0gd2FpdGluZyB0byBwYXVzZVwiKTtcbiAgICAgICAgdG90YWwrKztcbiAgICAgICAgdGhpcy5vbmNlKFwiZHJhaW5cIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgZGVidWcoXCJwcmUtcGF1c2Ugd3JpdGluZyBjb21wbGV0ZVwiKTtcbiAgICAgICAgICAtLXRvdGFsIHx8IHBhdXNlKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwYXVzZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTdGFydHMgcG9sbGluZyBjeWNsZS5cbiAgICpcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG4gIHBvbGwoKSB7XG4gICAgZGVidWcoXCJwb2xsaW5nXCIpO1xuICAgIHRoaXMucG9sbGluZyA9IHRydWU7XG4gICAgdGhpcy5kb1BvbGwoKTtcbiAgICB0aGlzLmVtaXQoXCJwb2xsXCIpO1xuICB9XG5cbiAgLyoqXG4gICAqIE92ZXJsb2FkcyBvbkRhdGEgdG8gZGV0ZWN0IHBheWxvYWRzLlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIG9uRGF0YShkYXRhKSB7XG4gICAgZGVidWcoXCJwb2xsaW5nIGdvdCBkYXRhICVzXCIsIGRhdGEpO1xuICAgIGNvbnN0IGNhbGxiYWNrID0gcGFja2V0ID0+IHtcbiAgICAgIC8vIGlmIGl0cyB0aGUgZmlyc3QgbWVzc2FnZSB3ZSBjb25zaWRlciB0aGUgdHJhbnNwb3J0IG9wZW5cbiAgICAgIGlmIChcIm9wZW5pbmdcIiA9PT0gdGhpcy5yZWFkeVN0YXRlICYmIHBhY2tldC50eXBlID09PSBcIm9wZW5cIikge1xuICAgICAgICB0aGlzLm9uT3BlbigpO1xuICAgICAgfVxuXG4gICAgICAvLyBpZiBpdHMgYSBjbG9zZSBwYWNrZXQsIHdlIGNsb3NlIHRoZSBvbmdvaW5nIHJlcXVlc3RzXG4gICAgICBpZiAoXCJjbG9zZVwiID09PSBwYWNrZXQudHlwZSkge1xuICAgICAgICB0aGlzLm9uQ2xvc2UoKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICAvLyBvdGhlcndpc2UgYnlwYXNzIG9uRGF0YSBhbmQgaGFuZGxlIHRoZSBtZXNzYWdlXG4gICAgICB0aGlzLm9uUGFja2V0KHBhY2tldCk7XG4gICAgfTtcblxuICAgIC8vIGRlY29kZSBwYXlsb2FkXG4gICAgcGFyc2VyLmRlY29kZVBheWxvYWQoZGF0YSwgdGhpcy5zb2NrZXQuYmluYXJ5VHlwZSkuZm9yRWFjaChjYWxsYmFjayk7XG5cbiAgICAvLyBpZiBhbiBldmVudCBkaWQgbm90IHRyaWdnZXIgY2xvc2luZ1xuICAgIGlmIChcImNsb3NlZFwiICE9PSB0aGlzLnJlYWR5U3RhdGUpIHtcbiAgICAgIC8vIGlmIHdlIGdvdCBkYXRhIHdlJ3JlIG5vdCBwb2xsaW5nXG4gICAgICB0aGlzLnBvbGxpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMuZW1pdChcInBvbGxDb21wbGV0ZVwiKTtcblxuICAgICAgaWYgKFwib3BlblwiID09PSB0aGlzLnJlYWR5U3RhdGUpIHtcbiAgICAgICAgdGhpcy5wb2xsKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZWJ1ZygnaWdub3JpbmcgcG9sbCAtIHRyYW5zcG9ydCBzdGF0ZSBcIiVzXCInLCB0aGlzLnJlYWR5U3RhdGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBGb3IgcG9sbGluZywgc2VuZCBhIGNsb3NlIHBhY2tldC5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBkb0Nsb3NlKCkge1xuICAgIGNvbnN0IGNsb3NlID0gKCkgPT4ge1xuICAgICAgZGVidWcoXCJ3cml0aW5nIGNsb3NlIHBhY2tldFwiKTtcbiAgICAgIHRoaXMud3JpdGUoW3sgdHlwZTogXCJjbG9zZVwiIH1dKTtcbiAgICB9O1xuXG4gICAgaWYgKFwib3BlblwiID09PSB0aGlzLnJlYWR5U3RhdGUpIHtcbiAgICAgIGRlYnVnKFwidHJhbnNwb3J0IG9wZW4gLSBjbG9zaW5nXCIpO1xuICAgICAgY2xvc2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaW4gY2FzZSB3ZSdyZSB0cnlpbmcgdG8gY2xvc2Ugd2hpbGVcbiAgICAgIC8vIGhhbmRzaGFraW5nIGlzIGluIHByb2dyZXNzIChHSC0xNjQpXG4gICAgICBkZWJ1ZyhcInRyYW5zcG9ydCBub3Qgb3BlbiAtIGRlZmVycmluZyBjbG9zZVwiKTtcbiAgICAgIHRoaXMub25jZShcIm9wZW5cIiwgY2xvc2UpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBXcml0ZXMgYSBwYWNrZXRzIHBheWxvYWQuXG4gICAqXG4gICAqIEBwYXJhbSB7QXJyYXl9IGRhdGEgcGFja2V0c1xuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBkcmFpbiBjYWxsYmFja1xuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIHdyaXRlKHBhY2tldHMpIHtcbiAgICB0aGlzLndyaXRhYmxlID0gZmFsc2U7XG5cbiAgICBwYXJzZXIuZW5jb2RlUGF5bG9hZChwYWNrZXRzLCBkYXRhID0+IHtcbiAgICAgIHRoaXMuZG9Xcml0ZShkYXRhLCAoKSA9PiB7XG4gICAgICAgIHRoaXMud3JpdGFibGUgPSB0cnVlO1xuICAgICAgICB0aGlzLmVtaXQoXCJkcmFpblwiKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdlbmVyYXRlcyB1cmkgZm9yIGNvbm5lY3Rpb24uXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgdXJpKCkge1xuICAgIGxldCBxdWVyeSA9IHRoaXMucXVlcnkgfHwge307XG4gICAgY29uc3Qgc2NoZW1hID0gdGhpcy5vcHRzLnNlY3VyZSA/IFwiaHR0cHNcIiA6IFwiaHR0cFwiO1xuICAgIGxldCBwb3J0ID0gXCJcIjtcblxuICAgIC8vIGNhY2hlIGJ1c3RpbmcgaXMgZm9yY2VkXG4gICAgaWYgKGZhbHNlICE9PSB0aGlzLm9wdHMudGltZXN0YW1wUmVxdWVzdHMpIHtcbiAgICAgIHF1ZXJ5W3RoaXMub3B0cy50aW1lc3RhbXBQYXJhbV0gPSB5ZWFzdCgpO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5zdXBwb3J0c0JpbmFyeSAmJiAhcXVlcnkuc2lkKSB7XG4gICAgICBxdWVyeS5iNjQgPSAxO1xuICAgIH1cblxuICAgIHF1ZXJ5ID0gcGFyc2Vxcy5lbmNvZGUocXVlcnkpO1xuXG4gICAgLy8gYXZvaWQgcG9ydCBpZiBkZWZhdWx0IGZvciBzY2hlbWFcbiAgICBpZiAoXG4gICAgICB0aGlzLm9wdHMucG9ydCAmJlxuICAgICAgKChcImh0dHBzXCIgPT09IHNjaGVtYSAmJiBOdW1iZXIodGhpcy5vcHRzLnBvcnQpICE9PSA0NDMpIHx8XG4gICAgICAgIChcImh0dHBcIiA9PT0gc2NoZW1hICYmIE51bWJlcih0aGlzLm9wdHMucG9ydCkgIT09IDgwKSlcbiAgICApIHtcbiAgICAgIHBvcnQgPSBcIjpcIiArIHRoaXMub3B0cy5wb3J0O1xuICAgIH1cblxuICAgIC8vIHByZXBlbmQgPyB0byBxdWVyeVxuICAgIGlmIChxdWVyeS5sZW5ndGgpIHtcbiAgICAgIHF1ZXJ5ID0gXCI/XCIgKyBxdWVyeTtcbiAgICB9XG5cbiAgICBjb25zdCBpcHY2ID0gdGhpcy5vcHRzLmhvc3RuYW1lLmluZGV4T2YoXCI6XCIpICE9PSAtMTtcbiAgICByZXR1cm4gKFxuICAgICAgc2NoZW1hICtcbiAgICAgIFwiOi8vXCIgK1xuICAgICAgKGlwdjYgPyBcIltcIiArIHRoaXMub3B0cy5ob3N0bmFtZSArIFwiXVwiIDogdGhpcy5vcHRzLmhvc3RuYW1lKSArXG4gICAgICBwb3J0ICtcbiAgICAgIHRoaXMub3B0cy5wYXRoICtcbiAgICAgIHF1ZXJ5XG4gICAgKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBvbGxpbmc7XG4iLCJjb25zdCBnbG9iYWxUaGlzID0gcmVxdWlyZShcIi4uL2dsb2JhbFRoaXNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBXZWJTb2NrZXQ6IGdsb2JhbFRoaXMuV2ViU29ja2V0IHx8IGdsb2JhbFRoaXMuTW96V2ViU29ja2V0LFxuICB1c2luZ0Jyb3dzZXJXZWJTb2NrZXQ6IHRydWUsXG4gIGRlZmF1bHRCaW5hcnlUeXBlOiBcImFycmF5YnVmZmVyXCJcbn07XG4iLCJjb25zdCBUcmFuc3BvcnQgPSByZXF1aXJlKFwiLi4vdHJhbnNwb3J0XCIpO1xuY29uc3QgcGFyc2VyID0gcmVxdWlyZShcImVuZ2luZS5pby1wYXJzZXJcIik7XG5jb25zdCBwYXJzZXFzID0gcmVxdWlyZShcInBhcnNlcXNcIik7XG5jb25zdCB5ZWFzdCA9IHJlcXVpcmUoXCJ5ZWFzdFwiKTtcbmNvbnN0IHsgcGljayB9ID0gcmVxdWlyZShcIi4uL3V0aWxcIik7XG5jb25zdCB7XG4gIFdlYlNvY2tldCxcbiAgdXNpbmdCcm93c2VyV2ViU29ja2V0LFxuICBkZWZhdWx0QmluYXJ5VHlwZVxufSA9IHJlcXVpcmUoXCIuL3dlYnNvY2tldC1jb25zdHJ1Y3RvclwiKTtcblxuY29uc3QgZGVidWcgPSByZXF1aXJlKFwiZGVidWdcIikoXCJlbmdpbmUuaW8tY2xpZW50OndlYnNvY2tldFwiKTtcblxuLy8gZGV0ZWN0IFJlYWN0TmF0aXZlIGVudmlyb25tZW50XG5jb25zdCBpc1JlYWN0TmF0aXZlID1cbiAgdHlwZW9mIG5hdmlnYXRvciAhPT0gXCJ1bmRlZmluZWRcIiAmJlxuICB0eXBlb2YgbmF2aWdhdG9yLnByb2R1Y3QgPT09IFwic3RyaW5nXCIgJiZcbiAgbmF2aWdhdG9yLnByb2R1Y3QudG9Mb3dlckNhc2UoKSA9PT0gXCJyZWFjdG5hdGl2ZVwiO1xuXG5jbGFzcyBXUyBleHRlbmRzIFRyYW5zcG9ydCB7XG4gIC8qKlxuICAgKiBXZWJTb2NrZXQgdHJhbnNwb3J0IGNvbnN0cnVjdG9yLlxuICAgKlxuICAgKiBAYXBpIHtPYmplY3R9IGNvbm5lY3Rpb24gb3B0aW9uc1xuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cbiAgY29uc3RydWN0b3Iob3B0cykge1xuICAgIHN1cGVyKG9wdHMpO1xuXG4gICAgdGhpcy5zdXBwb3J0c0JpbmFyeSA9ICFvcHRzLmZvcmNlQmFzZTY0O1xuICB9XG5cbiAgLyoqXG4gICAqIFRyYW5zcG9ydCBuYW1lLlxuICAgKlxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cbiAgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIFwid2Vic29ja2V0XCI7XG4gIH1cblxuICAvKipcbiAgICogT3BlbnMgc29ja2V0LlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIGRvT3BlbigpIHtcbiAgICBpZiAoIXRoaXMuY2hlY2soKSkge1xuICAgICAgLy8gbGV0IHByb2JlIHRpbWVvdXRcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB1cmkgPSB0aGlzLnVyaSgpO1xuICAgIGNvbnN0IHByb3RvY29scyA9IHRoaXMub3B0cy5wcm90b2NvbHM7XG5cbiAgICAvLyBSZWFjdCBOYXRpdmUgb25seSBzdXBwb3J0cyB0aGUgJ2hlYWRlcnMnIG9wdGlvbiwgYW5kIHdpbGwgcHJpbnQgYSB3YXJuaW5nIGlmIGFueXRoaW5nIGVsc2UgaXMgcGFzc2VkXG4gICAgY29uc3Qgb3B0cyA9IGlzUmVhY3ROYXRpdmVcbiAgICAgID8ge31cbiAgICAgIDogcGljayhcbiAgICAgICAgICB0aGlzLm9wdHMsXG4gICAgICAgICAgXCJhZ2VudFwiLFxuICAgICAgICAgIFwicGVyTWVzc2FnZURlZmxhdGVcIixcbiAgICAgICAgICBcInBmeFwiLFxuICAgICAgICAgIFwia2V5XCIsXG4gICAgICAgICAgXCJwYXNzcGhyYXNlXCIsXG4gICAgICAgICAgXCJjZXJ0XCIsXG4gICAgICAgICAgXCJjYVwiLFxuICAgICAgICAgIFwiY2lwaGVyc1wiLFxuICAgICAgICAgIFwicmVqZWN0VW5hdXRob3JpemVkXCIsXG4gICAgICAgICAgXCJsb2NhbEFkZHJlc3NcIixcbiAgICAgICAgICBcInByb3RvY29sVmVyc2lvblwiLFxuICAgICAgICAgIFwib3JpZ2luXCIsXG4gICAgICAgICAgXCJtYXhQYXlsb2FkXCIsXG4gICAgICAgICAgXCJmYW1pbHlcIixcbiAgICAgICAgICBcImNoZWNrU2VydmVySWRlbnRpdHlcIlxuICAgICAgICApO1xuXG4gICAgaWYgKHRoaXMub3B0cy5leHRyYUhlYWRlcnMpIHtcbiAgICAgIG9wdHMuaGVhZGVycyA9IHRoaXMub3B0cy5leHRyYUhlYWRlcnM7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIHRoaXMud3MgPVxuICAgICAgICB1c2luZ0Jyb3dzZXJXZWJTb2NrZXQgJiYgIWlzUmVhY3ROYXRpdmVcbiAgICAgICAgICA/IHByb3RvY29sc1xuICAgICAgICAgICAgPyBuZXcgV2ViU29ja2V0KHVyaSwgcHJvdG9jb2xzKVxuICAgICAgICAgICAgOiBuZXcgV2ViU29ja2V0KHVyaSlcbiAgICAgICAgICA6IG5ldyBXZWJTb2NrZXQodXJpLCBwcm90b2NvbHMsIG9wdHMpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHRoaXMuZW1pdChcImVycm9yXCIsIGVycik7XG4gICAgfVxuXG4gICAgdGhpcy53cy5iaW5hcnlUeXBlID0gdGhpcy5zb2NrZXQuYmluYXJ5VHlwZSB8fCBkZWZhdWx0QmluYXJ5VHlwZTtcblxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGV2ZW50IGxpc3RlbmVycyB0byB0aGUgc29ja2V0XG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgdGhpcy53cy5vbm9wZW4gPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5vcHRzLmF1dG9VbnJlZikge1xuICAgICAgICB0aGlzLndzLl9zb2NrZXQudW5yZWYoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMub25PcGVuKCk7XG4gICAgfTtcbiAgICB0aGlzLndzLm9uY2xvc2UgPSB0aGlzLm9uQ2xvc2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLndzLm9ubWVzc2FnZSA9IGV2ID0+IHRoaXMub25EYXRhKGV2LmRhdGEpO1xuICAgIHRoaXMud3Mub25lcnJvciA9IGUgPT4gdGhpcy5vbkVycm9yKFwid2Vic29ja2V0IGVycm9yXCIsIGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFdyaXRlcyBkYXRhIHRvIHNvY2tldC5cbiAgICpcbiAgICogQHBhcmFtIHtBcnJheX0gYXJyYXkgb2YgcGFja2V0cy5cbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICB3cml0ZShwYWNrZXRzKSB7XG4gICAgdGhpcy53cml0YWJsZSA9IGZhbHNlO1xuXG4gICAgLy8gZW5jb2RlUGFja2V0IGVmZmljaWVudCBhcyBpdCB1c2VzIFdTIGZyYW1pbmdcbiAgICAvLyBubyBuZWVkIGZvciBlbmNvZGVQYXlsb2FkXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYWNrZXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBwYWNrZXQgPSBwYWNrZXRzW2ldO1xuICAgICAgY29uc3QgbGFzdFBhY2tldCA9IGkgPT09IHBhY2tldHMubGVuZ3RoIC0gMTtcblxuICAgICAgcGFyc2VyLmVuY29kZVBhY2tldChwYWNrZXQsIHRoaXMuc3VwcG9ydHNCaW5hcnksIGRhdGEgPT4ge1xuICAgICAgICAvLyBhbHdheXMgY3JlYXRlIGEgbmV3IG9iamVjdCAoR0gtNDM3KVxuICAgICAgICBjb25zdCBvcHRzID0ge307XG4gICAgICAgIGlmICghdXNpbmdCcm93c2VyV2ViU29ja2V0KSB7XG4gICAgICAgICAgaWYgKHBhY2tldC5vcHRpb25zKSB7XG4gICAgICAgICAgICBvcHRzLmNvbXByZXNzID0gcGFja2V0Lm9wdGlvbnMuY29tcHJlc3M7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHRoaXMub3B0cy5wZXJNZXNzYWdlRGVmbGF0ZSkge1xuICAgICAgICAgICAgY29uc3QgbGVuID1cbiAgICAgICAgICAgICAgXCJzdHJpbmdcIiA9PT0gdHlwZW9mIGRhdGEgPyBCdWZmZXIuYnl0ZUxlbmd0aChkYXRhKSA6IGRhdGEubGVuZ3RoO1xuICAgICAgICAgICAgaWYgKGxlbiA8IHRoaXMub3B0cy5wZXJNZXNzYWdlRGVmbGF0ZS50aHJlc2hvbGQpIHtcbiAgICAgICAgICAgICAgb3B0cy5jb21wcmVzcyA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNvbWV0aW1lcyB0aGUgd2Vic29ja2V0IGhhcyBhbHJlYWR5IGJlZW4gY2xvc2VkIGJ1dCB0aGUgYnJvd3NlciBkaWRuJ3RcbiAgICAgICAgLy8gaGF2ZSBhIGNoYW5jZSBvZiBpbmZvcm1pbmcgdXMgYWJvdXQgaXQgeWV0LCBpbiB0aGF0IGNhc2Ugc2VuZCB3aWxsXG4gICAgICAgIC8vIHRocm93IGFuIGVycm9yXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgaWYgKHVzaW5nQnJvd3NlcldlYlNvY2tldCkge1xuICAgICAgICAgICAgLy8gVHlwZUVycm9yIGlzIHRocm93biB3aGVuIHBhc3NpbmcgdGhlIHNlY29uZCBhcmd1bWVudCBvbiBTYWZhcmlcbiAgICAgICAgICAgIHRoaXMud3Muc2VuZChkYXRhKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy53cy5zZW5kKGRhdGEsIG9wdHMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGRlYnVnKFwid2Vic29ja2V0IGNsb3NlZCBiZWZvcmUgb25jbG9zZSBldmVudFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChsYXN0UGFja2V0KSB7XG4gICAgICAgICAgLy8gZmFrZSBkcmFpblxuICAgICAgICAgIC8vIGRlZmVyIHRvIG5leHQgdGljayB0byBhbGxvdyBTb2NrZXQgdG8gY2xlYXIgd3JpdGVCdWZmZXJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMud3JpdGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5lbWl0KFwiZHJhaW5cIik7XG4gICAgICAgICAgfSwgMCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgdXBvbiBjbG9zZVxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIG9uQ2xvc2UoKSB7XG4gICAgVHJhbnNwb3J0LnByb3RvdHlwZS5vbkNsb3NlLmNhbGwodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogQ2xvc2VzIHNvY2tldC5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBkb0Nsb3NlKCkge1xuICAgIGlmICh0eXBlb2YgdGhpcy53cyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgdGhpcy53cy5jbG9zZSgpO1xuICAgICAgdGhpcy53cyA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdlbmVyYXRlcyB1cmkgZm9yIGNvbm5lY3Rpb24uXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgdXJpKCkge1xuICAgIGxldCBxdWVyeSA9IHRoaXMucXVlcnkgfHwge307XG4gICAgY29uc3Qgc2NoZW1hID0gdGhpcy5vcHRzLnNlY3VyZSA/IFwid3NzXCIgOiBcIndzXCI7XG4gICAgbGV0IHBvcnQgPSBcIlwiO1xuXG4gICAgLy8gYXZvaWQgcG9ydCBpZiBkZWZhdWx0IGZvciBzY2hlbWFcbiAgICBpZiAoXG4gICAgICB0aGlzLm9wdHMucG9ydCAmJlxuICAgICAgKChcIndzc1wiID09PSBzY2hlbWEgJiYgTnVtYmVyKHRoaXMub3B0cy5wb3J0KSAhPT0gNDQzKSB8fFxuICAgICAgICAoXCJ3c1wiID09PSBzY2hlbWEgJiYgTnVtYmVyKHRoaXMub3B0cy5wb3J0KSAhPT0gODApKVxuICAgICkge1xuICAgICAgcG9ydCA9IFwiOlwiICsgdGhpcy5vcHRzLnBvcnQ7XG4gICAgfVxuXG4gICAgLy8gYXBwZW5kIHRpbWVzdGFtcCB0byBVUklcbiAgICBpZiAodGhpcy5vcHRzLnRpbWVzdGFtcFJlcXVlc3RzKSB7XG4gICAgICBxdWVyeVt0aGlzLm9wdHMudGltZXN0YW1wUGFyYW1dID0geWVhc3QoKTtcbiAgICB9XG5cbiAgICAvLyBjb21tdW5pY2F0ZSBiaW5hcnkgc3VwcG9ydCBjYXBhYmlsaXRpZXNcbiAgICBpZiAoIXRoaXMuc3VwcG9ydHNCaW5hcnkpIHtcbiAgICAgIHF1ZXJ5LmI2NCA9IDE7XG4gICAgfVxuXG4gICAgcXVlcnkgPSBwYXJzZXFzLmVuY29kZShxdWVyeSk7XG5cbiAgICAvLyBwcmVwZW5kID8gdG8gcXVlcnlcbiAgICBpZiAocXVlcnkubGVuZ3RoKSB7XG4gICAgICBxdWVyeSA9IFwiP1wiICsgcXVlcnk7XG4gICAgfVxuXG4gICAgY29uc3QgaXB2NiA9IHRoaXMub3B0cy5ob3N0bmFtZS5pbmRleE9mKFwiOlwiKSAhPT0gLTE7XG4gICAgcmV0dXJuIChcbiAgICAgIHNjaGVtYSArXG4gICAgICBcIjovL1wiICtcbiAgICAgIChpcHY2ID8gXCJbXCIgKyB0aGlzLm9wdHMuaG9zdG5hbWUgKyBcIl1cIiA6IHRoaXMub3B0cy5ob3N0bmFtZSkgK1xuICAgICAgcG9ydCArXG4gICAgICB0aGlzLm9wdHMucGF0aCArXG4gICAgICBxdWVyeVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogRmVhdHVyZSBkZXRlY3Rpb24gZm9yIFdlYlNvY2tldC5cbiAgICpcbiAgICogQHJldHVybiB7Qm9vbGVhbn0gd2hldGhlciB0aGlzIHRyYW5zcG9ydCBpcyBhdmFpbGFibGUuXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuICBjaGVjaygpIHtcbiAgICByZXR1cm4gKFxuICAgICAgISFXZWJTb2NrZXQgJiZcbiAgICAgICEoXCJfX2luaXRpYWxpemVcIiBpbiBXZWJTb2NrZXQgJiYgdGhpcy5uYW1lID09PSBXUy5wcm90b3R5cGUubmFtZSlcbiAgICApO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gV1M7XG4iLCJtb2R1bGUuZXhwb3J0cy5waWNrID0gKG9iaiwgLi4uYXR0cikgPT4ge1xuICByZXR1cm4gYXR0ci5yZWR1Y2UoKGFjYywgaykgPT4ge1xuICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgIGFjY1trXSA9IG9ialtrXTtcbiAgICB9XG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xufTtcbiIsIi8vIGJyb3dzZXIgc2hpbSBmb3IgeG1saHR0cHJlcXVlc3QgbW9kdWxlXG5cbmNvbnN0IGhhc0NPUlMgPSByZXF1aXJlKFwiaGFzLWNvcnNcIik7XG5jb25zdCBnbG9iYWxUaGlzID0gcmVxdWlyZShcIi4vZ2xvYmFsVGhpc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcHRzKSB7XG4gIGNvbnN0IHhkb21haW4gPSBvcHRzLnhkb21haW47XG5cbiAgLy8gc2NoZW1lIG11c3QgYmUgc2FtZSB3aGVuIHVzaWduIFhEb21haW5SZXF1ZXN0XG4gIC8vIGh0dHA6Ly9ibG9ncy5tc2RuLmNvbS9iL2llaW50ZXJuYWxzL2FyY2hpdmUvMjAxMC8wNS8xMy94ZG9tYWlucmVxdWVzdC1yZXN0cmljdGlvbnMtbGltaXRhdGlvbnMtYW5kLXdvcmthcm91bmRzLmFzcHhcbiAgY29uc3QgeHNjaGVtZSA9IG9wdHMueHNjaGVtZTtcblxuICAvLyBYRG9tYWluUmVxdWVzdCBoYXMgYSBmbG93IG9mIG5vdCBzZW5kaW5nIGNvb2tpZSwgdGhlcmVmb3JlIGl0IHNob3VsZCBiZSBkaXNhYmxlZCBhcyBhIGRlZmF1bHQuXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9BdXRvbWF0dGljL2VuZ2luZS5pby1jbGllbnQvcHVsbC8yMTdcbiAgY29uc3QgZW5hYmxlc1hEUiA9IG9wdHMuZW5hYmxlc1hEUjtcblxuICAvLyBYTUxIdHRwUmVxdWVzdCBjYW4gYmUgZGlzYWJsZWQgb24gSUVcbiAgdHJ5IHtcbiAgICBpZiAoXCJ1bmRlZmluZWRcIiAhPT0gdHlwZW9mIFhNTEh0dHBSZXF1ZXN0ICYmICgheGRvbWFpbiB8fCBoYXNDT1JTKSkge1xuICAgICAgcmV0dXJuIG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIH1cbiAgfSBjYXRjaCAoZSkge31cblxuICAvLyBVc2UgWERvbWFpblJlcXVlc3QgZm9yIElFOCBpZiBlbmFibGVzWERSIGlzIHRydWVcbiAgLy8gYmVjYXVzZSBsb2FkaW5nIGJhciBrZWVwcyBmbGFzaGluZyB3aGVuIHVzaW5nIGpzb25wLXBvbGxpbmdcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3l1amlvc2FrYS9zb2NrZS5pby1pZTgtbG9hZGluZy1leGFtcGxlXG4gIHRyeSB7XG4gICAgaWYgKFwidW5kZWZpbmVkXCIgIT09IHR5cGVvZiBYRG9tYWluUmVxdWVzdCAmJiAheHNjaGVtZSAmJiBlbmFibGVzWERSKSB7XG4gICAgICByZXR1cm4gbmV3IFhEb21haW5SZXF1ZXN0KCk7XG4gICAgfVxuICB9IGNhdGNoIChlKSB7fVxuXG4gIGlmICgheGRvbWFpbikge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gbmV3IGdsb2JhbFRoaXNbW1wiQWN0aXZlXCJdLmNvbmNhdChcIk9iamVjdFwiKS5qb2luKFwiWFwiKV0oXG4gICAgICAgIFwiTWljcm9zb2Z0LlhNTEhUVFBcIlxuICAgICAgKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICB9XG59O1xuIiwiY29uc3QgUEFDS0VUX1RZUEVTID0gT2JqZWN0LmNyZWF0ZShudWxsKTsgLy8gbm8gTWFwID0gbm8gcG9seWZpbGxcblBBQ0tFVF9UWVBFU1tcIm9wZW5cIl0gPSBcIjBcIjtcblBBQ0tFVF9UWVBFU1tcImNsb3NlXCJdID0gXCIxXCI7XG5QQUNLRVRfVFlQRVNbXCJwaW5nXCJdID0gXCIyXCI7XG5QQUNLRVRfVFlQRVNbXCJwb25nXCJdID0gXCIzXCI7XG5QQUNLRVRfVFlQRVNbXCJtZXNzYWdlXCJdID0gXCI0XCI7XG5QQUNLRVRfVFlQRVNbXCJ1cGdyYWRlXCJdID0gXCI1XCI7XG5QQUNLRVRfVFlQRVNbXCJub29wXCJdID0gXCI2XCI7XG5cbmNvbnN0IFBBQ0tFVF9UWVBFU19SRVZFUlNFID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbk9iamVjdC5rZXlzKFBBQ0tFVF9UWVBFUykuZm9yRWFjaChrZXkgPT4ge1xuICBQQUNLRVRfVFlQRVNfUkVWRVJTRVtQQUNLRVRfVFlQRVNba2V5XV0gPSBrZXk7XG59KTtcblxuY29uc3QgRVJST1JfUEFDS0VUID0geyB0eXBlOiBcImVycm9yXCIsIGRhdGE6IFwicGFyc2VyIGVycm9yXCIgfTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIFBBQ0tFVF9UWVBFUyxcbiAgUEFDS0VUX1RZUEVTX1JFVkVSU0UsXG4gIEVSUk9SX1BBQ0tFVFxufTtcbiIsImNvbnN0IHsgUEFDS0VUX1RZUEVTX1JFVkVSU0UsIEVSUk9SX1BBQ0tFVCB9ID0gcmVxdWlyZShcIi4vY29tbW9uc1wiKTtcblxuY29uc3Qgd2l0aE5hdGl2ZUFycmF5QnVmZmVyID0gdHlwZW9mIEFycmF5QnVmZmVyID09PSBcImZ1bmN0aW9uXCI7XG5cbmxldCBiYXNlNjRkZWNvZGVyO1xuaWYgKHdpdGhOYXRpdmVBcnJheUJ1ZmZlcikge1xuICBiYXNlNjRkZWNvZGVyID0gcmVxdWlyZShcImJhc2U2NC1hcnJheWJ1ZmZlclwiKTtcbn1cblxuY29uc3QgZGVjb2RlUGFja2V0ID0gKGVuY29kZWRQYWNrZXQsIGJpbmFyeVR5cGUpID0+IHtcbiAgaWYgKHR5cGVvZiBlbmNvZGVkUGFja2V0ICE9PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IFwibWVzc2FnZVwiLFxuICAgICAgZGF0YTogbWFwQmluYXJ5KGVuY29kZWRQYWNrZXQsIGJpbmFyeVR5cGUpXG4gICAgfTtcbiAgfVxuICBjb25zdCB0eXBlID0gZW5jb2RlZFBhY2tldC5jaGFyQXQoMCk7XG4gIGlmICh0eXBlID09PSBcImJcIikge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBcIm1lc3NhZ2VcIixcbiAgICAgIGRhdGE6IGRlY29kZUJhc2U2NFBhY2tldChlbmNvZGVkUGFja2V0LnN1YnN0cmluZygxKSwgYmluYXJ5VHlwZSlcbiAgICB9O1xuICB9XG4gIGNvbnN0IHBhY2tldFR5cGUgPSBQQUNLRVRfVFlQRVNfUkVWRVJTRVt0eXBlXTtcbiAgaWYgKCFwYWNrZXRUeXBlKSB7XG4gICAgcmV0dXJuIEVSUk9SX1BBQ0tFVDtcbiAgfVxuICByZXR1cm4gZW5jb2RlZFBhY2tldC5sZW5ndGggPiAxXG4gICAgPyB7XG4gICAgICAgIHR5cGU6IFBBQ0tFVF9UWVBFU19SRVZFUlNFW3R5cGVdLFxuICAgICAgICBkYXRhOiBlbmNvZGVkUGFja2V0LnN1YnN0cmluZygxKVxuICAgICAgfVxuICAgIDoge1xuICAgICAgICB0eXBlOiBQQUNLRVRfVFlQRVNfUkVWRVJTRVt0eXBlXVxuICAgICAgfTtcbn07XG5cbmNvbnN0IGRlY29kZUJhc2U2NFBhY2tldCA9IChkYXRhLCBiaW5hcnlUeXBlKSA9PiB7XG4gIGlmIChiYXNlNjRkZWNvZGVyKSB7XG4gICAgY29uc3QgZGVjb2RlZCA9IGJhc2U2NGRlY29kZXIuZGVjb2RlKGRhdGEpO1xuICAgIHJldHVybiBtYXBCaW5hcnkoZGVjb2RlZCwgYmluYXJ5VHlwZSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHsgYmFzZTY0OiB0cnVlLCBkYXRhIH07IC8vIGZhbGxiYWNrIGZvciBvbGQgYnJvd3NlcnNcbiAgfVxufTtcblxuY29uc3QgbWFwQmluYXJ5ID0gKGRhdGEsIGJpbmFyeVR5cGUpID0+IHtcbiAgc3dpdGNoIChiaW5hcnlUeXBlKSB7XG4gICAgY2FzZSBcImJsb2JcIjpcbiAgICAgIHJldHVybiBkYXRhIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIgPyBuZXcgQmxvYihbZGF0YV0pIDogZGF0YTtcbiAgICBjYXNlIFwiYXJyYXlidWZmZXJcIjpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGRhdGE7IC8vIGFzc3VtaW5nIHRoZSBkYXRhIGlzIGFscmVhZHkgYW4gQXJyYXlCdWZmZXJcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBkZWNvZGVQYWNrZXQ7XG4iLCJjb25zdCB7IFBBQ0tFVF9UWVBFUyB9ID0gcmVxdWlyZShcIi4vY29tbW9uc1wiKTtcblxuY29uc3Qgd2l0aE5hdGl2ZUJsb2IgPVxuICB0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiIHx8XG4gICh0eXBlb2YgQmxvYiAhPT0gXCJ1bmRlZmluZWRcIiAmJlxuICAgIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChCbG9iKSA9PT0gXCJbb2JqZWN0IEJsb2JDb25zdHJ1Y3Rvcl1cIik7XG5jb25zdCB3aXRoTmF0aXZlQXJyYXlCdWZmZXIgPSB0eXBlb2YgQXJyYXlCdWZmZXIgPT09IFwiZnVuY3Rpb25cIjtcblxuLy8gQXJyYXlCdWZmZXIuaXNWaWV3IG1ldGhvZCBpcyBub3QgZGVmaW5lZCBpbiBJRTEwXG5jb25zdCBpc1ZpZXcgPSBvYmogPT4ge1xuICByZXR1cm4gdHlwZW9mIEFycmF5QnVmZmVyLmlzVmlldyA9PT0gXCJmdW5jdGlvblwiXG4gICAgPyBBcnJheUJ1ZmZlci5pc1ZpZXcob2JqKVxuICAgIDogb2JqICYmIG9iai5idWZmZXIgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcjtcbn07XG5cbmNvbnN0IGVuY29kZVBhY2tldCA9ICh7IHR5cGUsIGRhdGEgfSwgc3VwcG9ydHNCaW5hcnksIGNhbGxiYWNrKSA9PiB7XG4gIGlmICh3aXRoTmF0aXZlQmxvYiAmJiBkYXRhIGluc3RhbmNlb2YgQmxvYikge1xuICAgIGlmIChzdXBwb3J0c0JpbmFyeSkge1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKGRhdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZW5jb2RlQmxvYkFzQmFzZTY0KGRhdGEsIGNhbGxiYWNrKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoXG4gICAgd2l0aE5hdGl2ZUFycmF5QnVmZmVyICYmXG4gICAgKGRhdGEgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlciB8fCBpc1ZpZXcoZGF0YSkpXG4gICkge1xuICAgIGlmIChzdXBwb3J0c0JpbmFyeSkge1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKGRhdGEgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlciA/IGRhdGEgOiBkYXRhLmJ1ZmZlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBlbmNvZGVCbG9iQXNCYXNlNjQobmV3IEJsb2IoW2RhdGFdKSwgY2FsbGJhY2spO1xuICAgIH1cbiAgfVxuICAvLyBwbGFpbiBzdHJpbmdcbiAgcmV0dXJuIGNhbGxiYWNrKFBBQ0tFVF9UWVBFU1t0eXBlXSArIChkYXRhIHx8IFwiXCIpKTtcbn07XG5cbmNvbnN0IGVuY29kZUJsb2JBc0Jhc2U2NCA9IChkYXRhLCBjYWxsYmFjaykgPT4ge1xuICBjb25zdCBmaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgZmlsZVJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZmlsZVJlYWRlci5yZXN1bHQuc3BsaXQoXCIsXCIpWzFdO1xuICAgIGNhbGxiYWNrKFwiYlwiICsgY29udGVudCk7XG4gIH07XG4gIHJldHVybiBmaWxlUmVhZGVyLnJlYWRBc0RhdGFVUkwoZGF0YSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGVuY29kZVBhY2tldDtcbiIsImNvbnN0IGVuY29kZVBhY2tldCA9IHJlcXVpcmUoXCIuL2VuY29kZVBhY2tldFwiKTtcbmNvbnN0IGRlY29kZVBhY2tldCA9IHJlcXVpcmUoXCIuL2RlY29kZVBhY2tldFwiKTtcblxuY29uc3QgU0VQQVJBVE9SID0gU3RyaW5nLmZyb21DaGFyQ29kZSgzMCk7IC8vIHNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9EZWxpbWl0ZXIjQVNDSUlfZGVsaW1pdGVkX3RleHRcblxuY29uc3QgZW5jb2RlUGF5bG9hZCA9IChwYWNrZXRzLCBjYWxsYmFjaykgPT4ge1xuICAvLyBzb21lIHBhY2tldHMgbWF5IGJlIGFkZGVkIHRvIHRoZSBhcnJheSB3aGlsZSBlbmNvZGluZywgc28gdGhlIGluaXRpYWwgbGVuZ3RoIG11c3QgYmUgc2F2ZWRcbiAgY29uc3QgbGVuZ3RoID0gcGFja2V0cy5sZW5ndGg7XG4gIGNvbnN0IGVuY29kZWRQYWNrZXRzID0gbmV3IEFycmF5KGxlbmd0aCk7XG4gIGxldCBjb3VudCA9IDA7XG5cbiAgcGFja2V0cy5mb3JFYWNoKChwYWNrZXQsIGkpID0+IHtcbiAgICAvLyBmb3JjZSBiYXNlNjQgZW5jb2RpbmcgZm9yIGJpbmFyeSBwYWNrZXRzXG4gICAgZW5jb2RlUGFja2V0KHBhY2tldCwgZmFsc2UsIGVuY29kZWRQYWNrZXQgPT4ge1xuICAgICAgZW5jb2RlZFBhY2tldHNbaV0gPSBlbmNvZGVkUGFja2V0O1xuICAgICAgaWYgKCsrY291bnQgPT09IGxlbmd0aCkge1xuICAgICAgICBjYWxsYmFjayhlbmNvZGVkUGFja2V0cy5qb2luKFNFUEFSQVRPUikpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn07XG5cbmNvbnN0IGRlY29kZVBheWxvYWQgPSAoZW5jb2RlZFBheWxvYWQsIGJpbmFyeVR5cGUpID0+IHtcbiAgY29uc3QgZW5jb2RlZFBhY2tldHMgPSBlbmNvZGVkUGF5bG9hZC5zcGxpdChTRVBBUkFUT1IpO1xuICBjb25zdCBwYWNrZXRzID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZW5jb2RlZFBhY2tldHMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBkZWNvZGVkUGFja2V0ID0gZGVjb2RlUGFja2V0KGVuY29kZWRQYWNrZXRzW2ldLCBiaW5hcnlUeXBlKTtcbiAgICBwYWNrZXRzLnB1c2goZGVjb2RlZFBhY2tldCk7XG4gICAgaWYgKGRlY29kZWRQYWNrZXQudHlwZSA9PT0gXCJlcnJvclwiKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHBhY2tldHM7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcHJvdG9jb2w6IDQsXG4gIGVuY29kZVBhY2tldCxcbiAgZW5jb2RlUGF5bG9hZCxcbiAgZGVjb2RlUGFja2V0LFxuICBkZWNvZGVQYXlsb2FkXG59O1xuIiwiXG4vKipcbiAqIE1vZHVsZSBleHBvcnRzLlxuICpcbiAqIExvZ2ljIGJvcnJvd2VkIGZyb20gTW9kZXJuaXpyOlxuICpcbiAqICAgLSBodHRwczovL2dpdGh1Yi5jb20vTW9kZXJuaXpyL01vZGVybml6ci9ibG9iL21hc3Rlci9mZWF0dXJlLWRldGVjdHMvY29ycy5qc1xuICovXG5cbnRyeSB7XG4gIG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIFhNTEh0dHBSZXF1ZXN0ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICd3aXRoQ3JlZGVudGlhbHMnIGluIG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xufSBjYXRjaCAoZXJyKSB7XG4gIC8vIGlmIFhNTEh0dHAgc3VwcG9ydCBpcyBkaXNhYmxlZCBpbiBJRSB0aGVuIGl0IHdpbGwgdGhyb3dcbiAgLy8gd2hlbiB0cnlpbmcgdG8gY3JlYXRlXG4gIG1vZHVsZS5leHBvcnRzID0gZmFsc2U7XG59XG4iLCIvKlxuICBodHRwczovL2dpdGh1Yi5jb20vYmFua3NlYW4gd3JhcHBlZCBNYWtvdG8gTWF0c3Vtb3RvIGFuZCBUYWt1amkgTmlzaGltdXJhJ3MgY29kZSBpbiBhIG5hbWVzcGFjZVxuICBzbyBpdCdzIGJldHRlciBlbmNhcHN1bGF0ZWQuIE5vdyB5b3UgY2FuIGhhdmUgbXVsdGlwbGUgcmFuZG9tIG51bWJlciBnZW5lcmF0b3JzXG4gIGFuZCB0aGV5IHdvbid0IHN0b21wIGFsbCBvdmVyIGVhY2hvdGhlcidzIHN0YXRlLlxuXG4gIElmIHlvdSB3YW50IHRvIHVzZSB0aGlzIGFzIGEgc3Vic3RpdHV0ZSBmb3IgTWF0aC5yYW5kb20oKSwgdXNlIHRoZSByYW5kb20oKVxuICBtZXRob2QgbGlrZSBzbzpcblxuICB2YXIgbSA9IG5ldyBNZXJzZW5uZVR3aXN0ZXIoKTtcbiAgdmFyIHJhbmRvbU51bWJlciA9IG0ucmFuZG9tKCk7XG5cbiAgWW91IGNhbiBhbHNvIGNhbGwgdGhlIG90aGVyIGdlbnJhbmRfe2Zvb30oKSBtZXRob2RzIG9uIHRoZSBpbnN0YW5jZS5cblxuICBJZiB5b3Ugd2FudCB0byB1c2UgYSBzcGVjaWZpYyBzZWVkIGluIG9yZGVyIHRvIGdldCBhIHJlcGVhdGFibGUgcmFuZG9tXG4gIHNlcXVlbmNlLCBwYXNzIGFuIGludGVnZXIgaW50byB0aGUgY29uc3RydWN0b3I6XG5cbiAgdmFyIG0gPSBuZXcgTWVyc2VubmVUd2lzdGVyKDEyMyk7XG5cbiAgYW5kIHRoYXQgd2lsbCBhbHdheXMgcHJvZHVjZSB0aGUgc2FtZSByYW5kb20gc2VxdWVuY2UuXG5cbiAgU2VhbiBNY0N1bGxvdWdoIChiYW5rc2VhbkBnbWFpbC5jb20pXG4qL1xuXG4vKlxuICAgQSBDLXByb2dyYW0gZm9yIE1UMTk5MzcsIHdpdGggaW5pdGlhbGl6YXRpb24gaW1wcm92ZWQgMjAwMi8xLzI2LlxuICAgQ29kZWQgYnkgVGFrdWppIE5pc2hpbXVyYSBhbmQgTWFrb3RvIE1hdHN1bW90by5cblxuICAgQmVmb3JlIHVzaW5nLCBpbml0aWFsaXplIHRoZSBzdGF0ZSBieSB1c2luZyBpbml0X3NlZWQoc2VlZClcbiAgIG9yIGluaXRfYnlfYXJyYXkoaW5pdF9rZXksIGtleV9sZW5ndGgpLlxuXG4gICBDb3B5cmlnaHQgKEMpIDE5OTcgLSAyMDAyLCBNYWtvdG8gTWF0c3Vtb3RvIGFuZCBUYWt1amkgTmlzaGltdXJhLFxuICAgQWxsIHJpZ2h0cyByZXNlcnZlZC5cblxuICAgUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0XG4gICBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnNcbiAgIGFyZSBtZXQ6XG5cbiAgICAgMS4gUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHRcbiAgICAgICAgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuXG4gICAgIDIuIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0XG4gICAgICAgIG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lciBpbiB0aGVcbiAgICAgICAgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlIGRpc3RyaWJ1dGlvbi5cblxuICAgICAzLiBUaGUgbmFtZXMgb2YgaXRzIGNvbnRyaWJ1dG9ycyBtYXkgbm90IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlXG4gICAgICAgIHByb2R1Y3RzIGRlcml2ZWQgZnJvbSB0aGlzIHNvZnR3YXJlIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlblxuICAgICAgICBwZXJtaXNzaW9uLlxuXG4gICBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTXG4gICBcIkFTIElTXCIgQU5EIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UXG4gICBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1JcbiAgIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELiAgSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVCBPV05FUiBPUlxuICAgQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsXG4gICBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sXG4gICBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSwgREFUQSwgT1JcbiAgIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWSBUSEVPUlkgT0ZcbiAgIExJQUJJTElUWSwgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HXG4gICBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GIFRISVNcbiAgIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuXG5cbiAgIEFueSBmZWVkYmFjayBpcyB2ZXJ5IHdlbGNvbWUuXG4gICBodHRwOi8vd3d3Lm1hdGguc2NpLmhpcm9zaGltYS11LmFjLmpwL35tLW1hdC9NVC9lbXQuaHRtbFxuICAgZW1haWw6IG0tbWF0IEAgbWF0aC5zY2kuaGlyb3NoaW1hLXUuYWMuanAgKHJlbW92ZSBzcGFjZSlcbiovXG5cbnZhciBNZXJzZW5uZVR3aXN0ZXIgPSBmdW5jdGlvbihzZWVkKSB7XG5cdGlmIChzZWVkID09IHVuZGVmaW5lZCkge1xuXHRcdHNlZWQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblx0fVxuXG5cdC8qIFBlcmlvZCBwYXJhbWV0ZXJzICovXG5cdHRoaXMuTiA9IDYyNDtcblx0dGhpcy5NID0gMzk3O1xuXHR0aGlzLk1BVFJJWF9BID0gMHg5OTA4YjBkZjsgICAvKiBjb25zdGFudCB2ZWN0b3IgYSAqL1xuXHR0aGlzLlVQUEVSX01BU0sgPSAweDgwMDAwMDAwOyAvKiBtb3N0IHNpZ25pZmljYW50IHctciBiaXRzICovXG5cdHRoaXMuTE9XRVJfTUFTSyA9IDB4N2ZmZmZmZmY7IC8qIGxlYXN0IHNpZ25pZmljYW50IHIgYml0cyAqL1xuXG5cdHRoaXMubXQgPSBuZXcgQXJyYXkodGhpcy5OKTsgLyogdGhlIGFycmF5IGZvciB0aGUgc3RhdGUgdmVjdG9yICovXG5cdHRoaXMubXRpPXRoaXMuTisxOyAvKiBtdGk9PU4rMSBtZWFucyBtdFtOXSBpcyBub3QgaW5pdGlhbGl6ZWQgKi9cblxuXHRpZiAoc2VlZC5jb25zdHJ1Y3RvciA9PSBBcnJheSkge1xuXHRcdHRoaXMuaW5pdF9ieV9hcnJheShzZWVkLCBzZWVkLmxlbmd0aCk7XG5cdH1cblx0ZWxzZSB7XG5cdFx0dGhpcy5pbml0X3NlZWQoc2VlZCk7XG5cdH1cbn1cblxuLyogaW5pdGlhbGl6ZXMgbXRbTl0gd2l0aCBhIHNlZWQgKi9cbi8qIG9yaWdpbiBuYW1lIGluaXRfZ2VucmFuZCAqL1xuTWVyc2VubmVUd2lzdGVyLnByb3RvdHlwZS5pbml0X3NlZWQgPSBmdW5jdGlvbihzKSB7XG5cdHRoaXMubXRbMF0gPSBzID4+PiAwO1xuXHRmb3IgKHRoaXMubXRpPTE7IHRoaXMubXRpPHRoaXMuTjsgdGhpcy5tdGkrKykge1xuXHRcdHZhciBzID0gdGhpcy5tdFt0aGlzLm10aS0xXSBeICh0aGlzLm10W3RoaXMubXRpLTFdID4+PiAzMCk7XG5cdFx0dGhpcy5tdFt0aGlzLm10aV0gPSAoKCgoKHMgJiAweGZmZmYwMDAwKSA+Pj4gMTYpICogMTgxMjQzMzI1MykgPDwgMTYpICsgKHMgJiAweDAwMDBmZmZmKSAqIDE4MTI0MzMyNTMpXG5cdFx0KyB0aGlzLm10aTtcblx0XHQvKiBTZWUgS251dGggVEFPQ1AgVm9sMi4gM3JkIEVkLiBQLjEwNiBmb3IgbXVsdGlwbGllci4gKi9cblx0XHQvKiBJbiB0aGUgcHJldmlvdXMgdmVyc2lvbnMsIE1TQnMgb2YgdGhlIHNlZWQgYWZmZWN0ICAgKi9cblx0XHQvKiBvbmx5IE1TQnMgb2YgdGhlIGFycmF5IG10W10uICAgICAgICAgICAgICAgICAgICAgICAgKi9cblx0XHQvKiAyMDAyLzAxLzA5IG1vZGlmaWVkIGJ5IE1ha290byBNYXRzdW1vdG8gICAgICAgICAgICAgKi9cblx0XHR0aGlzLm10W3RoaXMubXRpXSA+Pj49IDA7XG5cdFx0LyogZm9yID4zMiBiaXQgbWFjaGluZXMgKi9cblx0fVxufVxuXG4vKiBpbml0aWFsaXplIGJ5IGFuIGFycmF5IHdpdGggYXJyYXktbGVuZ3RoICovXG4vKiBpbml0X2tleSBpcyB0aGUgYXJyYXkgZm9yIGluaXRpYWxpemluZyBrZXlzICovXG4vKiBrZXlfbGVuZ3RoIGlzIGl0cyBsZW5ndGggKi9cbi8qIHNsaWdodCBjaGFuZ2UgZm9yIEMrKywgMjAwNC8yLzI2ICovXG5NZXJzZW5uZVR3aXN0ZXIucHJvdG90eXBlLmluaXRfYnlfYXJyYXkgPSBmdW5jdGlvbihpbml0X2tleSwga2V5X2xlbmd0aCkge1xuXHR2YXIgaSwgaiwgaztcblx0dGhpcy5pbml0X3NlZWQoMTk2NTAyMTgpO1xuXHRpPTE7IGo9MDtcblx0ayA9ICh0aGlzLk4+a2V5X2xlbmd0aCA/IHRoaXMuTiA6IGtleV9sZW5ndGgpO1xuXHRmb3IgKDsgazsgay0tKSB7XG5cdFx0dmFyIHMgPSB0aGlzLm10W2ktMV0gXiAodGhpcy5tdFtpLTFdID4+PiAzMClcblx0XHR0aGlzLm10W2ldID0gKHRoaXMubXRbaV0gXiAoKCgoKHMgJiAweGZmZmYwMDAwKSA+Pj4gMTYpICogMTY2NDUyNSkgPDwgMTYpICsgKChzICYgMHgwMDAwZmZmZikgKiAxNjY0NTI1KSkpXG5cdFx0KyBpbml0X2tleVtqXSArIGo7IC8qIG5vbiBsaW5lYXIgKi9cblx0XHR0aGlzLm10W2ldID4+Pj0gMDsgLyogZm9yIFdPUkRTSVpFID4gMzIgbWFjaGluZXMgKi9cblx0XHRpKys7IGorKztcblx0XHRpZiAoaT49dGhpcy5OKSB7IHRoaXMubXRbMF0gPSB0aGlzLm10W3RoaXMuTi0xXTsgaT0xOyB9XG5cdFx0aWYgKGo+PWtleV9sZW5ndGgpIGo9MDtcblx0fVxuXHRmb3IgKGs9dGhpcy5OLTE7IGs7IGstLSkge1xuXHRcdHZhciBzID0gdGhpcy5tdFtpLTFdIF4gKHRoaXMubXRbaS0xXSA+Pj4gMzApO1xuXHRcdHRoaXMubXRbaV0gPSAodGhpcy5tdFtpXSBeICgoKCgocyAmIDB4ZmZmZjAwMDApID4+PiAxNikgKiAxNTY2MDgzOTQxKSA8PCAxNikgKyAocyAmIDB4MDAwMGZmZmYpICogMTU2NjA4Mzk0MSkpXG5cdFx0LSBpOyAvKiBub24gbGluZWFyICovXG5cdFx0dGhpcy5tdFtpXSA+Pj49IDA7IC8qIGZvciBXT1JEU0laRSA+IDMyIG1hY2hpbmVzICovXG5cdFx0aSsrO1xuXHRcdGlmIChpPj10aGlzLk4pIHsgdGhpcy5tdFswXSA9IHRoaXMubXRbdGhpcy5OLTFdOyBpPTE7IH1cblx0fVxuXG5cdHRoaXMubXRbMF0gPSAweDgwMDAwMDAwOyAvKiBNU0IgaXMgMTsgYXNzdXJpbmcgbm9uLXplcm8gaW5pdGlhbCBhcnJheSAqL1xufVxuXG4vKiBnZW5lcmF0ZXMgYSByYW5kb20gbnVtYmVyIG9uIFswLDB4ZmZmZmZmZmZdLWludGVydmFsICovXG4vKiBvcmlnaW4gbmFtZSBnZW5yYW5kX2ludDMyICovXG5NZXJzZW5uZVR3aXN0ZXIucHJvdG90eXBlLnJhbmRvbV9pbnQgPSBmdW5jdGlvbigpIHtcblx0dmFyIHk7XG5cdHZhciBtYWcwMSA9IG5ldyBBcnJheSgweDAsIHRoaXMuTUFUUklYX0EpO1xuXHQvKiBtYWcwMVt4XSA9IHggKiBNQVRSSVhfQSAgZm9yIHg9MCwxICovXG5cblx0aWYgKHRoaXMubXRpID49IHRoaXMuTikgeyAvKiBnZW5lcmF0ZSBOIHdvcmRzIGF0IG9uZSB0aW1lICovXG5cdFx0dmFyIGtrO1xuXG5cdFx0aWYgKHRoaXMubXRpID09IHRoaXMuTisxKSAgLyogaWYgaW5pdF9zZWVkKCkgaGFzIG5vdCBiZWVuIGNhbGxlZCwgKi9cblx0XHRcdHRoaXMuaW5pdF9zZWVkKDU0ODkpOyAgLyogYSBkZWZhdWx0IGluaXRpYWwgc2VlZCBpcyB1c2VkICovXG5cblx0XHRmb3IgKGtrPTA7a2s8dGhpcy5OLXRoaXMuTTtraysrKSB7XG5cdFx0XHR5ID0gKHRoaXMubXRba2tdJnRoaXMuVVBQRVJfTUFTSyl8KHRoaXMubXRba2srMV0mdGhpcy5MT1dFUl9NQVNLKTtcblx0XHRcdHRoaXMubXRba2tdID0gdGhpcy5tdFtrayt0aGlzLk1dIF4gKHkgPj4+IDEpIF4gbWFnMDFbeSAmIDB4MV07XG5cdFx0fVxuXHRcdGZvciAoO2trPHRoaXMuTi0xO2trKyspIHtcblx0XHRcdHkgPSAodGhpcy5tdFtra10mdGhpcy5VUFBFUl9NQVNLKXwodGhpcy5tdFtraysxXSZ0aGlzLkxPV0VSX01BU0spO1xuXHRcdFx0dGhpcy5tdFtra10gPSB0aGlzLm10W2trKyh0aGlzLk0tdGhpcy5OKV0gXiAoeSA+Pj4gMSkgXiBtYWcwMVt5ICYgMHgxXTtcblx0XHR9XG5cdFx0eSA9ICh0aGlzLm10W3RoaXMuTi0xXSZ0aGlzLlVQUEVSX01BU0spfCh0aGlzLm10WzBdJnRoaXMuTE9XRVJfTUFTSyk7XG5cdFx0dGhpcy5tdFt0aGlzLk4tMV0gPSB0aGlzLm10W3RoaXMuTS0xXSBeICh5ID4+PiAxKSBeIG1hZzAxW3kgJiAweDFdO1xuXG5cdFx0dGhpcy5tdGkgPSAwO1xuXHR9XG5cblx0eSA9IHRoaXMubXRbdGhpcy5tdGkrK107XG5cblx0LyogVGVtcGVyaW5nICovXG5cdHkgXj0gKHkgPj4+IDExKTtcblx0eSBePSAoeSA8PCA3KSAmIDB4OWQyYzU2ODA7XG5cdHkgXj0gKHkgPDwgMTUpICYgMHhlZmM2MDAwMDtcblx0eSBePSAoeSA+Pj4gMTgpO1xuXG5cdHJldHVybiB5ID4+PiAwO1xufVxuXG4vKiBnZW5lcmF0ZXMgYSByYW5kb20gbnVtYmVyIG9uIFswLDB4N2ZmZmZmZmZdLWludGVydmFsICovXG4vKiBvcmlnaW4gbmFtZSBnZW5yYW5kX2ludDMxICovXG5NZXJzZW5uZVR3aXN0ZXIucHJvdG90eXBlLnJhbmRvbV9pbnQzMSA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gKHRoaXMucmFuZG9tX2ludCgpPj4+MSk7XG59XG5cbi8qIGdlbmVyYXRlcyBhIHJhbmRvbSBudW1iZXIgb24gWzAsMV0tcmVhbC1pbnRlcnZhbCAqL1xuLyogb3JpZ2luIG5hbWUgZ2VucmFuZF9yZWFsMSAqL1xuTWVyc2VubmVUd2lzdGVyLnByb3RvdHlwZS5yYW5kb21faW5jbCA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcy5yYW5kb21faW50KCkqKDEuMC80Mjk0OTY3Mjk1LjApO1xuXHQvKiBkaXZpZGVkIGJ5IDJeMzItMSAqL1xufVxuXG4vKiBnZW5lcmF0ZXMgYSByYW5kb20gbnVtYmVyIG9uIFswLDEpLXJlYWwtaW50ZXJ2YWwgKi9cbk1lcnNlbm5lVHdpc3Rlci5wcm90b3R5cGUucmFuZG9tID0gZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzLnJhbmRvbV9pbnQoKSooMS4wLzQyOTQ5NjcyOTYuMCk7XG5cdC8qIGRpdmlkZWQgYnkgMl4zMiAqL1xufVxuXG4vKiBnZW5lcmF0ZXMgYSByYW5kb20gbnVtYmVyIG9uICgwLDEpLXJlYWwtaW50ZXJ2YWwgKi9cbi8qIG9yaWdpbiBuYW1lIGdlbnJhbmRfcmVhbDMgKi9cbk1lcnNlbm5lVHdpc3Rlci5wcm90b3R5cGUucmFuZG9tX2V4Y2wgPSBmdW5jdGlvbigpIHtcblx0cmV0dXJuICh0aGlzLnJhbmRvbV9pbnQoKSArIDAuNSkqKDEuMC80Mjk0OTY3Mjk2LjApO1xuXHQvKiBkaXZpZGVkIGJ5IDJeMzIgKi9cbn1cblxuLyogZ2VuZXJhdGVzIGEgcmFuZG9tIG51bWJlciBvbiBbMCwxKSB3aXRoIDUzLWJpdCByZXNvbHV0aW9uKi9cbi8qIG9yaWdpbiBuYW1lIGdlbnJhbmRfcmVzNTMgKi9cbk1lcnNlbm5lVHdpc3Rlci5wcm90b3R5cGUucmFuZG9tX2xvbmcgPSBmdW5jdGlvbigpIHtcblx0dmFyIGE9dGhpcy5yYW5kb21faW50KCk+Pj41LCBiPXRoaXMucmFuZG9tX2ludCgpPj4+Njtcblx0cmV0dXJuKGEqNjcxMDg4NjQuMCtiKSooMS4wLzkwMDcxOTkyNTQ3NDA5OTIuMCk7XG59XG5cbi8qIFRoZXNlIHJlYWwgdmVyc2lvbnMgYXJlIGR1ZSB0byBJc2FrdSBXYWRhLCAyMDAyLzAxLzA5IGFkZGVkICovXG5cbm1vZHVsZS5leHBvcnRzID0gTWVyc2VubmVUd2lzdGVyO1xuIiwiLyoqXG4gKiBDb21waWxlcyBhIHF1ZXJ5c3RyaW5nXG4gKiBSZXR1cm5zIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgb2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5leHBvcnRzLmVuY29kZSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgdmFyIHN0ciA9ICcnO1xuXG4gIGZvciAodmFyIGkgaW4gb2JqKSB7XG4gICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgaWYgKHN0ci5sZW5ndGgpIHN0ciArPSAnJic7XG4gICAgICBzdHIgKz0gZW5jb2RlVVJJQ29tcG9uZW50KGkpICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG9ialtpXSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0cjtcbn07XG5cbi8qKlxuICogUGFyc2VzIGEgc2ltcGxlIHF1ZXJ5c3RyaW5nIGludG8gYW4gb2JqZWN0XG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHFzXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5leHBvcnRzLmRlY29kZSA9IGZ1bmN0aW9uKHFzKXtcbiAgdmFyIHFyeSA9IHt9O1xuICB2YXIgcGFpcnMgPSBxcy5zcGxpdCgnJicpO1xuICBmb3IgKHZhciBpID0gMCwgbCA9IHBhaXJzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIHZhciBwYWlyID0gcGFpcnNbaV0uc3BsaXQoJz0nKTtcbiAgICBxcnlbZGVjb2RlVVJJQ29tcG9uZW50KHBhaXJbMF0pXSA9IGRlY29kZVVSSUNvbXBvbmVudChwYWlyWzFdKTtcbiAgfVxuICByZXR1cm4gcXJ5O1xufTtcbiIsIi8qKlxuICogUGFyc2VzIGFuIFVSSVxuICpcbiAqIEBhdXRob3IgU3RldmVuIExldml0aGFuIDxzdGV2ZW5sZXZpdGhhbi5jb20+IChNSVQgbGljZW5zZSlcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbnZhciByZSA9IC9eKD86KD8hW146QF0rOlteOkBcXC9dKkApKGh0dHB8aHR0cHN8d3N8d3NzKTpcXC9cXC8pPygoPzooKFteOkBdKikoPzo6KFteOkBdKikpPyk/QCk/KCg/OlthLWYwLTldezAsNH06KXsyLDd9W2EtZjAtOV17MCw0fXxbXjpcXC8/I10qKSg/OjooXFxkKikpPykoKChcXC8oPzpbXj8jXSg/IVtePyNcXC9dKlxcLltePyNcXC8uXSsoPzpbPyNdfCQpKSkqXFwvPyk/KFtePyNcXC9dKikpKD86XFw/KFteI10qKSk/KD86IyguKikpPykvO1xuXG52YXIgcGFydHMgPSBbXG4gICAgJ3NvdXJjZScsICdwcm90b2NvbCcsICdhdXRob3JpdHknLCAndXNlckluZm8nLCAndXNlcicsICdwYXNzd29yZCcsICdob3N0JywgJ3BvcnQnLCAncmVsYXRpdmUnLCAncGF0aCcsICdkaXJlY3RvcnknLCAnZmlsZScsICdxdWVyeScsICdhbmNob3InXG5dO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHBhcnNldXJpKHN0cikge1xuICAgIHZhciBzcmMgPSBzdHIsXG4gICAgICAgIGIgPSBzdHIuaW5kZXhPZignWycpLFxuICAgICAgICBlID0gc3RyLmluZGV4T2YoJ10nKTtcblxuICAgIGlmIChiICE9IC0xICYmIGUgIT0gLTEpIHtcbiAgICAgICAgc3RyID0gc3RyLnN1YnN0cmluZygwLCBiKSArIHN0ci5zdWJzdHJpbmcoYiwgZSkucmVwbGFjZSgvOi9nLCAnOycpICsgc3RyLnN1YnN0cmluZyhlLCBzdHIubGVuZ3RoKTtcbiAgICB9XG5cbiAgICB2YXIgbSA9IHJlLmV4ZWMoc3RyIHx8ICcnKSxcbiAgICAgICAgdXJpID0ge30sXG4gICAgICAgIGkgPSAxNDtcblxuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgdXJpW3BhcnRzW2ldXSA9IG1baV0gfHwgJyc7XG4gICAgfVxuXG4gICAgaWYgKGIgIT0gLTEgJiYgZSAhPSAtMSkge1xuICAgICAgICB1cmkuc291cmNlID0gc3JjO1xuICAgICAgICB1cmkuaG9zdCA9IHVyaS5ob3N0LnN1YnN0cmluZygxLCB1cmkuaG9zdC5sZW5ndGggLSAxKS5yZXBsYWNlKC87L2csICc6Jyk7XG4gICAgICAgIHVyaS5hdXRob3JpdHkgPSB1cmkuYXV0aG9yaXR5LnJlcGxhY2UoJ1snLCAnJykucmVwbGFjZSgnXScsICcnKS5yZXBsYWNlKC87L2csICc6Jyk7XG4gICAgICAgIHVyaS5pcHY2dXJpID0gdHJ1ZTtcbiAgICB9XG5cbiAgICB1cmkucGF0aE5hbWVzID0gcGF0aE5hbWVzKHVyaSwgdXJpWydwYXRoJ10pO1xuICAgIHVyaS5xdWVyeUtleSA9IHF1ZXJ5S2V5KHVyaSwgdXJpWydxdWVyeSddKTtcblxuICAgIHJldHVybiB1cmk7XG59O1xuXG5mdW5jdGlvbiBwYXRoTmFtZXMob2JqLCBwYXRoKSB7XG4gICAgdmFyIHJlZ3ggPSAvXFwvezIsOX0vZyxcbiAgICAgICAgbmFtZXMgPSBwYXRoLnJlcGxhY2UocmVneCwgXCIvXCIpLnNwbGl0KFwiL1wiKTtcblxuICAgIGlmIChwYXRoLnN1YnN0cigwLCAxKSA9PSAnLycgfHwgcGF0aC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgbmFtZXMuc3BsaWNlKDAsIDEpO1xuICAgIH1cbiAgICBpZiAocGF0aC5zdWJzdHIocGF0aC5sZW5ndGggLSAxLCAxKSA9PSAnLycpIHtcbiAgICAgICAgbmFtZXMuc3BsaWNlKG5hbWVzLmxlbmd0aCAtIDEsIDEpO1xuICAgIH1cblxuICAgIHJldHVybiBuYW1lcztcbn1cblxuZnVuY3Rpb24gcXVlcnlLZXkodXJpLCBxdWVyeSkge1xuICAgIHZhciBkYXRhID0ge307XG5cbiAgICBxdWVyeS5yZXBsYWNlKC8oPzpefCYpKFteJj1dKik9PyhbXiZdKikvZywgZnVuY3Rpb24gKCQwLCAkMSwgJDIpIHtcbiAgICAgICAgaWYgKCQxKSB7XG4gICAgICAgICAgICBkYXRhWyQxXSA9ICQyO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZGF0YTtcbn1cbiIsImNvbnN0IEFSR19MRU5HVEggPSB7XG4gIGE6IDcsXG4gIGM6IDYsXG4gIGg6IDEsXG4gIGw6IDIsXG4gIG06IDIsXG4gIHE6IDQsXG4gIHM6IDQsXG4gIHQ6IDIsXG4gIHY6IDEsXG4gIHo6IDAsXG59O1xuXG5jb25zdCBTRUdNRU5UX1BBVFRFUk4gPSAvKFthc3R2enFtaGxjXSkoW15hc3R2enFtaGxjXSopL2dpO1xuXG5jb25zdCBOVU1CRVIgPSAvLT9bMC05XSpcXC4/WzAtOV0rKD86ZVstK10/XFxkKyk/L2dpO1xuXG5mdW5jdGlvbiBwYXJzZVZhbHVlcyhhcmdzKSB7XG4gIGNvbnN0IG51bWJlcnMgPSBhcmdzLm1hdGNoKE5VTUJFUik7XG4gIHJldHVybiBudW1iZXJzID8gbnVtYmVycy5tYXAoTnVtYmVyKSA6IFtdO1xufVxuXG4vKipcbiAqIHBhcnNlIGFuIHN2ZyBwYXRoIGRhdGEgc3RyaW5nLiBHZW5lcmF0ZXMgYW4gQXJyYXlcbiAqIG9mIGNvbW1hbmRzIHdoZXJlIGVhY2ggY29tbWFuZCBpcyBhbiBBcnJheSBvZiB0aGVcbiAqIGZvcm0gYFtjb21tYW5kLCBhcmcxLCBhcmcyLCAuLi5dYFxuICpcbiAqIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9TVkcvcGF0aHMuaHRtbCNQYXRoRGF0YUdlbmVyYWxJbmZvcm1hdGlvblxuICogQGlnbm9yZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoXG4gKiBAcmV0dXJucyB7YXJyYXl9XG4gKi9cbmZ1bmN0aW9uIHBhcnNlKHBhdGgpIHtcbiAgY29uc3QgZGF0YSA9IFtdO1xuICBjb25zdCBwID0gU3RyaW5nKHBhdGgpLnRyaW0oKTtcblxuICAvLyBBIHBhdGggZGF0YSBzZWdtZW50IChpZiB0aGVyZSBpcyBvbmUpIG11c3QgYmVnaW4gd2l0aCBhIFwibW92ZXRvXCIgY29tbWFuZFxuICBpZiAocFswXSAhPT0gJ00nICYmIHBbMF0gIT09ICdtJykge1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgcC5yZXBsYWNlKFNFR01FTlRfUEFUVEVSTiwgKF8sIGNvbW1hbmQsIGFyZ3MpID0+IHtcbiAgICBsZXQgdHlwZSA9IGNvbW1hbmQudG9Mb3dlckNhc2UoKTtcbiAgICBsZXQgdGhlQXJncyA9IHBhcnNlVmFsdWVzKGFyZ3MpO1xuICAgIGxldCB0aGVDb21tYW5kID0gY29tbWFuZDtcbiAgICAvLyBvdmVybG9hZGVkIG1vdmVUb1xuICAgIGlmICh0eXBlID09PSAnbScgJiYgdGhlQXJncy5sZW5ndGggPiAyKSB7XG4gICAgICBkYXRhLnB1c2goW3RoZUNvbW1hbmRdLmNvbmNhdCh0aGVBcmdzLnNwbGljZSgwLCAyKSkpO1xuICAgICAgdHlwZSA9ICdsJztcbiAgICAgIHRoZUNvbW1hbmQgPSB0aGVDb21tYW5kID09PSAnbScgPyAnbCcgOiAnTCc7XG4gICAgfVxuXG4gICAgLy8gSWdub3JlIGludmFsaWQgY29tbWFuZHNcbiAgICBpZiAodGhlQXJncy5sZW5ndGggPCBBUkdfTEVOR1RIW3R5cGVdKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgZGF0YS5wdXNoKFt0aGVDb21tYW5kXS5jb25jYXQodGhlQXJncy5zcGxpY2UoMCwgQVJHX0xFTkdUSFt0eXBlXSkpKTtcblxuICAgIC8vIFRoZSBjb21tYW5kIGxldHRlciBjYW4gYmUgZWxpbWluYXRlZCBvbiBzdWJzZXF1ZW50IGNvbW1hbmRzIGlmIHRoZVxuICAgIC8vIHNhbWUgY29tbWFuZCBpcyB1c2VkIG11bHRpcGxlIHRpbWVzIGluIGEgcm93IChlLmcuLCB5b3UgY2FuIGRyb3AgdGhlXG4gICAgLy8gc2Vjb25kIFwiTFwiIGluIFwiTSAxMDAgMjAwIEwgMjAwIDEwMCBMIC0xMDAgLTIwMFwiIGFuZCB1c2VcbiAgICAvLyBcIk0gMTAwIDIwMCBMIDIwMCAxMDAgLTEwMCAtMjAwXCIgaW5zdGVhZCkuXG4gICAgd2hpbGUgKFxuICAgICAgdGhlQXJncy5sZW5ndGggPj0gQVJHX0xFTkdUSFt0eXBlXSAmJlxuICAgICAgdGhlQXJncy5sZW5ndGggJiZcbiAgICAgIEFSR19MRU5HVEhbdHlwZV1cbiAgICApIHtcbiAgICAgIGRhdGEucHVzaChbdGhlQ29tbWFuZF0uY29uY2F0KHRoZUFyZ3Muc3BsaWNlKDAsIEFSR19MRU5HVEhbdHlwZV0pKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuICcnO1xuICB9KTtcbiAgcmV0dXJuIGRhdGE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcGFyc2U7XG4iLCJjb25zdCBwYXJzZVBhdGggPSByZXF1aXJlKCcuL3BhcnNlLXBhdGgnKTtcblxuLyoqXG4gKiBXb3JrIGFyb3VuZCBmb3IgaHR0cHM6Ly9kZXZlbG9wZXIubWljcm9zb2Z0LmNvbS9lbi11cy9taWNyb3NvZnQtZWRnZS9wbGF0Zm9ybS9pc3N1ZXMvODQzODg4NC9cbiAqIEBpZ25vcmVcbiAqL1xuZnVuY3Rpb24gc3VwcG9ydHNTdmdQYXRoQXJndW1lbnQod2luZG93KSB7XG4gIGNvbnN0IGNhbnZhcyA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgY29uc3QgZyA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICBjb25zdCBwID0gbmV3IHdpbmRvdy5QYXRoMkQoJ00wIDAgTDEgMScpO1xuICBnLnN0cm9rZVN0eWxlID0gJ3JlZCc7XG4gIGcubGluZVdpZHRoID0gMTtcbiAgZy5zdHJva2UocCk7XG4gIGNvbnN0IGltZ0RhdGEgPSBnLmdldEltYWdlRGF0YSgwLCAwLCAxLCAxKTtcbiAgcmV0dXJuIGltZ0RhdGEuZGF0YVswXSA9PT0gMjU1OyAvLyBDaGVjayBpZiBwaXhlbCBpcyByZWRcbn1cblxuZnVuY3Rpb24gcm90YXRlUG9pbnQocG9pbnQsIGFuZ2xlKSB7XG4gIGNvbnN0IG54ID0gcG9pbnQueCAqIE1hdGguY29zKGFuZ2xlKSAtIHBvaW50LnkgKiBNYXRoLnNpbihhbmdsZSk7XG4gIGNvbnN0IG55ID0gcG9pbnQueSAqIE1hdGguY29zKGFuZ2xlKSArIHBvaW50LnggKiBNYXRoLnNpbihhbmdsZSk7XG4gIHBvaW50LnggPSBueDtcbiAgcG9pbnQueSA9IG55O1xufVxuXG5mdW5jdGlvbiB0cmFuc2xhdGVQb2ludChwb2ludCwgZHgsIGR5KSB7XG4gIHBvaW50LnggKz0gZHg7XG4gIHBvaW50LnkgKz0gZHk7XG59XG5cbmZ1bmN0aW9uIHNjYWxlUG9pbnQocG9pbnQsIHMpIHtcbiAgcG9pbnQueCAqPSBzO1xuICBwb2ludC55ICo9IHM7XG59XG5cbmZ1bmN0aW9uIHBvbHlGaWxsUGF0aDJEKHdpbmRvdykge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgIXdpbmRvdy5DYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKHdpbmRvdy5QYXRoMkQgJiYgc3VwcG9ydHNTdmdQYXRoQXJndW1lbnQod2luZG93KSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmF0ZXMgYSBQYXRoMkQgcG9seWZpbGwgb2JqZWN0XG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAaWdub3JlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwYXRoXG4gICAqL1xuICBjbGFzcyBQYXRoMkQge1xuICAgIGNvbnN0cnVjdG9yKHBhdGgpIHtcbiAgICAgIHRoaXMuc2VnbWVudHMgPSBbXTtcbiAgICAgIGlmIChwYXRoICYmIHBhdGggaW5zdGFuY2VvZiBQYXRoMkQpIHtcbiAgICAgICAgdGhpcy5zZWdtZW50cy5wdXNoKC4uLnBhdGguc2VnbWVudHMpO1xuICAgICAgfSBlbHNlIGlmIChwYXRoKSB7XG4gICAgICAgIHRoaXMuc2VnbWVudHMgPSBwYXJzZVBhdGgocGF0aCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgYWRkUGF0aChwYXRoKSB7XG4gICAgICBpZiAocGF0aCAmJiBwYXRoIGluc3RhbmNlb2YgUGF0aDJEKSB7XG4gICAgICAgIHRoaXMuc2VnbWVudHMucHVzaCguLi5wYXRoLnNlZ21lbnRzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtb3ZlVG8oeCwgeSkge1xuICAgICAgdGhpcy5zZWdtZW50cy5wdXNoKFsnTScsIHgsIHldKTtcbiAgICB9XG5cbiAgICBsaW5lVG8oeCwgeSkge1xuICAgICAgdGhpcy5zZWdtZW50cy5wdXNoKFsnTCcsIHgsIHldKTtcbiAgICB9XG5cbiAgICBhcmMoeCwgeSwgciwgc3RhcnQsIGVuZCwgY2N3KSB7XG4gICAgICB0aGlzLnNlZ21lbnRzLnB1c2goWydBQycsIHgsIHksIHIsIHN0YXJ0LCBlbmQsICEhY2N3XSk7XG4gICAgfVxuXG4gICAgYXJjVG8oeDEsIHkxLCB4MiwgeTIsIHIpIHtcbiAgICAgIHRoaXMuc2VnbWVudHMucHVzaChbJ0FUJywgeDEsIHkxLCB4MiwgeTIsIHJdKTtcbiAgICB9XG5cbiAgICBlbGxpcHNlKHgsIHksIHJ4LCByeSwgYW5nbGUsIHN0YXJ0LCBlbmQsIGNjdykge1xuICAgICAgdGhpcy5zZWdtZW50cy5wdXNoKFsnRScsIHgsIHksIHJ4LCByeSwgYW5nbGUsIHN0YXJ0LCBlbmQsICEhY2N3XSk7XG4gICAgfVxuXG4gICAgY2xvc2VQYXRoKCkge1xuICAgICAgdGhpcy5zZWdtZW50cy5wdXNoKFsnWiddKTtcbiAgICB9XG5cbiAgICBiZXppZXJDdXJ2ZVRvKGNwMXgsIGNwMXksIGNwMngsIGNwMnksIHgsIHkpIHtcbiAgICAgIHRoaXMuc2VnbWVudHMucHVzaChbJ0MnLCBjcDF4LCBjcDF5LCBjcDJ4LCBjcDJ5LCB4LCB5XSk7XG4gICAgfVxuXG4gICAgcXVhZHJhdGljQ3VydmVUbyhjcHgsIGNweSwgeCwgeSkge1xuICAgICAgdGhpcy5zZWdtZW50cy5wdXNoKFsnUScsIGNweCwgY3B5LCB4LCB5XSk7XG4gICAgfVxuXG4gICAgcmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICB0aGlzLnNlZ21lbnRzLnB1c2goWydSJywgeCwgeSwgd2lkdGgsIGhlaWdodF0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGJ1aWxkUGF0aChjYW52YXMsIHNlZ21lbnRzKSB7XG4gICAgbGV0IGVuZEFuZ2xlO1xuICAgIGxldCBzdGFydEFuZ2xlO1xuICAgIGxldCBsYXJnZUFyY0ZsYWc7XG4gICAgbGV0IHN3ZWVwRmxhZztcbiAgICBsZXQgZW5kUG9pbnQ7XG4gICAgbGV0IG1pZFBvaW50O1xuICAgIGxldCBhbmdsZTtcbiAgICBsZXQgbGFtYmRhO1xuICAgIGxldCB0MTtcbiAgICBsZXQgdDI7XG4gICAgbGV0IHg7XG4gICAgbGV0IHgxO1xuICAgIGxldCB5O1xuICAgIGxldCB5MTtcbiAgICBsZXQgcjtcbiAgICBsZXQgcng7XG4gICAgbGV0IHJ5O1xuICAgIGxldCB3O1xuICAgIGxldCBoO1xuICAgIGxldCBwYXRoVHlwZTtcbiAgICBsZXQgY2VudGVyUG9pbnQ7XG4gICAgbGV0IGNweDtcbiAgICBsZXQgY3B5O1xuICAgIGxldCBxY3B4O1xuICAgIGxldCBxY3B5O1xuICAgIGxldCBjY3c7XG4gICAgbGV0IHN0YXJ0UG9pbnQgPSB7IHg6IDAsIHk6IDAgfTtcbiAgICBjb25zdCBjdXJyZW50UG9pbnQgPSB7IHg6IDAsIHk6IDAgfTtcblxuICAgIGNhbnZhcy5iZWdpblBhdGgoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlZ21lbnRzLmxlbmd0aDsgKytpKSB7XG4gICAgICBjb25zdCBzID0gc2VnbWVudHNbaV07XG4gICAgICBwYXRoVHlwZSA9IHNbMF07XG5cbiAgICAgIC8vIFJlc2V0IGNvbnRyb2wgcG9pbnQgaWYgY29tbWFuZCBpcyBub3QgY3ViaWNcbiAgICAgIGlmIChcbiAgICAgICAgcGF0aFR5cGUgIT09ICdTJyAmJlxuICAgICAgICBwYXRoVHlwZSAhPT0gJ3MnICYmXG4gICAgICAgIHBhdGhUeXBlICE9PSAnQycgJiZcbiAgICAgICAgcGF0aFR5cGUgIT09ICdjJ1xuICAgICAgKSB7XG4gICAgICAgIGNweCA9IG51bGw7XG4gICAgICAgIGNweSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgcGF0aFR5cGUgIT09ICdUJyAmJlxuICAgICAgICBwYXRoVHlwZSAhPT0gJ3QnICYmXG4gICAgICAgIHBhdGhUeXBlICE9PSAnUScgJiZcbiAgICAgICAgcGF0aFR5cGUgIT09ICdxJ1xuICAgICAgKSB7XG4gICAgICAgIHFjcHggPSBudWxsO1xuICAgICAgICBxY3B5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgc3dpdGNoIChwYXRoVHlwZSkge1xuICAgICAgICBjYXNlICdtJzpcbiAgICAgICAgY2FzZSAnTSc6XG4gICAgICAgICAgaWYgKHBhdGhUeXBlID09PSAnbScpIHtcbiAgICAgICAgICAgIHggKz0gc1sxXTtcbiAgICAgICAgICAgIHkgKz0gc1syXTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgeCA9IHNbMV07XG4gICAgICAgICAgICB5ID0gc1syXTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAocGF0aFR5cGUgPT09ICdNJyB8fCAhc3RhcnRQb2ludCkge1xuICAgICAgICAgICAgc3RhcnRQb2ludCA9IHsgeCwgeSB9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNhbnZhcy5tb3ZlVG8oeCwgeSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2wnOlxuICAgICAgICAgIHggKz0gc1sxXTtcbiAgICAgICAgICB5ICs9IHNbMl07XG4gICAgICAgICAgY2FudmFzLmxpbmVUbyh4LCB5KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnTCc6XG4gICAgICAgICAgeCA9IHNbMV07XG4gICAgICAgICAgeSA9IHNbMl07XG4gICAgICAgICAgY2FudmFzLmxpbmVUbyh4LCB5KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnSCc6XG4gICAgICAgICAgeCA9IHNbMV07XG4gICAgICAgICAgY2FudmFzLmxpbmVUbyh4LCB5KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnaCc6XG4gICAgICAgICAgeCArPSBzWzFdO1xuICAgICAgICAgIGNhbnZhcy5saW5lVG8oeCwgeSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ1YnOlxuICAgICAgICAgIHkgPSBzWzFdO1xuICAgICAgICAgIGNhbnZhcy5saW5lVG8oeCwgeSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3YnOlxuICAgICAgICAgIHkgKz0gc1sxXTtcbiAgICAgICAgICBjYW52YXMubGluZVRvKHgsIHkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhJzpcbiAgICAgICAgY2FzZSAnQSc6XG4gICAgICAgICAgaWYgKHBhdGhUeXBlID09PSAnYScpIHtcbiAgICAgICAgICAgIHggKz0gc1s2XTtcbiAgICAgICAgICAgIHkgKz0gc1s3XTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgeCA9IHNbNl07XG4gICAgICAgICAgICB5ID0gc1s3XTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByeCA9IHNbMV07IC8vIHJ4XG4gICAgICAgICAgcnkgPSBzWzJdOyAvLyByeVxuICAgICAgICAgIGFuZ2xlID0gKHNbM10gKiBNYXRoLlBJKSAvIDE4MDtcbiAgICAgICAgICBsYXJnZUFyY0ZsYWcgPSAhIXNbNF07XG4gICAgICAgICAgc3dlZXBGbGFnID0gISFzWzVdO1xuICAgICAgICAgIGVuZFBvaW50ID0geyB4LCB5IH07XG5cbiAgICAgICAgICAvLyBodHRwczovL3d3dy53My5vcmcvVFIvU1ZHL2ltcGxub3RlLmh0bWwjQXJjSW1wbGVtZW50YXRpb25Ob3Rlc1xuXG4gICAgICAgICAgbWlkUG9pbnQgPSB7XG4gICAgICAgICAgICB4OiAoY3VycmVudFBvaW50LnggLSBlbmRQb2ludC54KSAvIDIsXG4gICAgICAgICAgICB5OiAoY3VycmVudFBvaW50LnkgLSBlbmRQb2ludC55KSAvIDIsXG4gICAgICAgICAgfTtcbiAgICAgICAgICByb3RhdGVQb2ludChtaWRQb2ludCwgLWFuZ2xlKTtcblxuICAgICAgICAgIC8vIHJhZGl1cyBjb3JyZWN0aW9uXG4gICAgICAgICAgbGFtYmRhID1cbiAgICAgICAgICAgIChtaWRQb2ludC54ICogbWlkUG9pbnQueCkgLyAocnggKiByeCkgK1xuICAgICAgICAgICAgKG1pZFBvaW50LnkgKiBtaWRQb2ludC55KSAvIChyeSAqIHJ5KTtcbiAgICAgICAgICBpZiAobGFtYmRhID4gMSkge1xuICAgICAgICAgICAgbGFtYmRhID0gTWF0aC5zcXJ0KGxhbWJkYSk7XG4gICAgICAgICAgICByeCAqPSBsYW1iZGE7XG4gICAgICAgICAgICByeSAqPSBsYW1iZGE7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY2VudGVyUG9pbnQgPSB7XG4gICAgICAgICAgICB4OiAocnggKiBtaWRQb2ludC55KSAvIHJ5LFxuICAgICAgICAgICAgeTogLShyeSAqIG1pZFBvaW50LngpIC8gcngsXG4gICAgICAgICAgfTtcbiAgICAgICAgICB0MSA9IHJ4ICogcnggKiByeSAqIHJ5O1xuICAgICAgICAgIHQyID1cbiAgICAgICAgICAgIHJ4ICogcnggKiBtaWRQb2ludC55ICogbWlkUG9pbnQueSArXG4gICAgICAgICAgICByeSAqIHJ5ICogbWlkUG9pbnQueCAqIG1pZFBvaW50Lng7XG4gICAgICAgICAgaWYgKHN3ZWVwRmxhZyAhPT0gbGFyZ2VBcmNGbGFnKSB7XG4gICAgICAgICAgICBzY2FsZVBvaW50KGNlbnRlclBvaW50LCBNYXRoLnNxcnQoKHQxIC0gdDIpIC8gdDIpIHx8IDApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzY2FsZVBvaW50KGNlbnRlclBvaW50LCAtTWF0aC5zcXJ0KCh0MSAtIHQyKSAvIHQyKSB8fCAwKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzdGFydEFuZ2xlID0gTWF0aC5hdGFuMihcbiAgICAgICAgICAgIChtaWRQb2ludC55IC0gY2VudGVyUG9pbnQueSkgLyByeSxcbiAgICAgICAgICAgIChtaWRQb2ludC54IC0gY2VudGVyUG9pbnQueCkgLyByeFxuICAgICAgICAgICk7XG4gICAgICAgICAgZW5kQW5nbGUgPSBNYXRoLmF0YW4yKFxuICAgICAgICAgICAgLShtaWRQb2ludC55ICsgY2VudGVyUG9pbnQueSkgLyByeSxcbiAgICAgICAgICAgIC0obWlkUG9pbnQueCArIGNlbnRlclBvaW50LngpIC8gcnhcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgcm90YXRlUG9pbnQoY2VudGVyUG9pbnQsIGFuZ2xlKTtcbiAgICAgICAgICB0cmFuc2xhdGVQb2ludChcbiAgICAgICAgICAgIGNlbnRlclBvaW50LFxuICAgICAgICAgICAgKGVuZFBvaW50LnggKyBjdXJyZW50UG9pbnQueCkgLyAyLFxuICAgICAgICAgICAgKGVuZFBvaW50LnkgKyBjdXJyZW50UG9pbnQueSkgLyAyXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIGNhbnZhcy5zYXZlKCk7XG4gICAgICAgICAgY2FudmFzLnRyYW5zbGF0ZShjZW50ZXJQb2ludC54LCBjZW50ZXJQb2ludC55KTtcbiAgICAgICAgICBjYW52YXMucm90YXRlKGFuZ2xlKTtcbiAgICAgICAgICBjYW52YXMuc2NhbGUocngsIHJ5KTtcbiAgICAgICAgICBjYW52YXMuYXJjKDAsIDAsIDEsIHN0YXJ0QW5nbGUsIGVuZEFuZ2xlLCAhc3dlZXBGbGFnKTtcbiAgICAgICAgICBjYW52YXMucmVzdG9yZSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdDJzpcbiAgICAgICAgICBjcHggPSBzWzNdOyAvLyBMYXN0IGNvbnRyb2wgcG9pbnRcbiAgICAgICAgICBjcHkgPSBzWzRdO1xuICAgICAgICAgIHggPSBzWzVdO1xuICAgICAgICAgIHkgPSBzWzZdO1xuICAgICAgICAgIGNhbnZhcy5iZXppZXJDdXJ2ZVRvKHNbMV0sIHNbMl0sIGNweCwgY3B5LCB4LCB5KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYyc6XG4gICAgICAgICAgY2FudmFzLmJlemllckN1cnZlVG8oXG4gICAgICAgICAgICBzWzFdICsgeCxcbiAgICAgICAgICAgIHNbMl0gKyB5LFxuICAgICAgICAgICAgc1szXSArIHgsXG4gICAgICAgICAgICBzWzRdICsgeSxcbiAgICAgICAgICAgIHNbNV0gKyB4LFxuICAgICAgICAgICAgc1s2XSArIHlcbiAgICAgICAgICApO1xuICAgICAgICAgIGNweCA9IHNbM10gKyB4OyAvLyBMYXN0IGNvbnRyb2wgcG9pbnRcbiAgICAgICAgICBjcHkgPSBzWzRdICsgeTtcbiAgICAgICAgICB4ICs9IHNbNV07XG4gICAgICAgICAgeSArPSBzWzZdO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdTJzpcbiAgICAgICAgICBpZiAoY3B4ID09PSBudWxsIHx8IGNweCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgY3B4ID0geDtcbiAgICAgICAgICAgIGNweSA9IHk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY2FudmFzLmJlemllckN1cnZlVG8oXG4gICAgICAgICAgICAyICogeCAtIGNweCxcbiAgICAgICAgICAgIDIgKiB5IC0gY3B5LFxuICAgICAgICAgICAgc1sxXSxcbiAgICAgICAgICAgIHNbMl0sXG4gICAgICAgICAgICBzWzNdLFxuICAgICAgICAgICAgc1s0XVxuICAgICAgICAgICk7XG4gICAgICAgICAgY3B4ID0gc1sxXTsgLy8gbGFzdCBjb250cm9sIHBvaW50XG4gICAgICAgICAgY3B5ID0gc1syXTtcbiAgICAgICAgICB4ID0gc1szXTtcbiAgICAgICAgICB5ID0gc1s0XTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncyc6XG4gICAgICAgICAgaWYgKGNweCA9PT0gbnVsbCB8fCBjcHggPT09IG51bGwpIHtcbiAgICAgICAgICAgIGNweCA9IHg7XG4gICAgICAgICAgICBjcHkgPSB5O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNhbnZhcy5iZXppZXJDdXJ2ZVRvKFxuICAgICAgICAgICAgMiAqIHggLSBjcHgsXG4gICAgICAgICAgICAyICogeSAtIGNweSxcbiAgICAgICAgICAgIHNbMV0gKyB4LFxuICAgICAgICAgICAgc1syXSArIHksXG4gICAgICAgICAgICBzWzNdICsgeCxcbiAgICAgICAgICAgIHNbNF0gKyB5XG4gICAgICAgICAgKTtcbiAgICAgICAgICBjcHggPSBzWzFdICsgeDsgLy8gbGFzdCBjb250cm9sIHBvaW50XG4gICAgICAgICAgY3B5ID0gc1syXSArIHk7XG4gICAgICAgICAgeCArPSBzWzNdO1xuICAgICAgICAgIHkgKz0gc1s0XTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnUSc6XG4gICAgICAgICAgcWNweCA9IHNbMV07IC8vIGxhc3QgY29udHJvbCBwb2ludFxuICAgICAgICAgIHFjcHkgPSBzWzJdO1xuICAgICAgICAgIHggPSBzWzNdO1xuICAgICAgICAgIHkgPSBzWzRdO1xuICAgICAgICAgIGNhbnZhcy5xdWFkcmF0aWNDdXJ2ZVRvKHFjcHgsIHFjcHksIHgsIHkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdxJzpcbiAgICAgICAgICBxY3B4ID0gc1sxXSArIHg7IC8vIGxhc3QgY29udHJvbCBwb2ludFxuICAgICAgICAgIHFjcHkgPSBzWzJdICsgeTtcbiAgICAgICAgICB4ICs9IHNbM107XG4gICAgICAgICAgeSArPSBzWzRdO1xuICAgICAgICAgIGNhbnZhcy5xdWFkcmF0aWNDdXJ2ZVRvKHFjcHgsIHFjcHksIHgsIHkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdUJzpcbiAgICAgICAgICBpZiAocWNweCA9PT0gbnVsbCB8fCBxY3B4ID09PSBudWxsKSB7XG4gICAgICAgICAgICBxY3B4ID0geDtcbiAgICAgICAgICAgIHFjcHkgPSB5O1xuICAgICAgICAgIH1cbiAgICAgICAgICBxY3B4ID0gMiAqIHggLSBxY3B4OyAvLyBsYXN0IGNvbnRyb2wgcG9pbnRcbiAgICAgICAgICBxY3B5ID0gMiAqIHkgLSBxY3B5O1xuICAgICAgICAgIHggPSBzWzFdO1xuICAgICAgICAgIHkgPSBzWzJdO1xuICAgICAgICAgIGNhbnZhcy5xdWFkcmF0aWNDdXJ2ZVRvKHFjcHgsIHFjcHksIHgsIHkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICd0JzpcbiAgICAgICAgICBpZiAocWNweCA9PT0gbnVsbCB8fCBxY3B4ID09PSBudWxsKSB7XG4gICAgICAgICAgICBxY3B4ID0geDtcbiAgICAgICAgICAgIHFjcHkgPSB5O1xuICAgICAgICAgIH1cbiAgICAgICAgICBxY3B4ID0gMiAqIHggLSBxY3B4OyAvLyBsYXN0IGNvbnRyb2wgcG9pbnRcbiAgICAgICAgICBxY3B5ID0gMiAqIHkgLSBxY3B5O1xuICAgICAgICAgIHggKz0gc1sxXTtcbiAgICAgICAgICB5ICs9IHNbMl07XG4gICAgICAgICAgY2FudmFzLnF1YWRyYXRpY0N1cnZlVG8ocWNweCwgcWNweSwgeCwgeSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3onOlxuICAgICAgICBjYXNlICdaJzpcbiAgICAgICAgICB4ID0gc3RhcnRQb2ludC54O1xuICAgICAgICAgIHkgPSBzdGFydFBvaW50Lnk7XG4gICAgICAgICAgc3RhcnRQb2ludCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBjYW52YXMuY2xvc2VQYXRoKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0FDJzogLy8gYXJjXG4gICAgICAgICAgeCA9IHNbMV07XG4gICAgICAgICAgeSA9IHNbMl07XG4gICAgICAgICAgciA9IHNbM107XG4gICAgICAgICAgc3RhcnRBbmdsZSA9IHNbNF07XG4gICAgICAgICAgZW5kQW5nbGUgPSBzWzVdO1xuICAgICAgICAgIGNjdyA9IHNbNl07XG4gICAgICAgICAgY2FudmFzLmFyYyh4LCB5LCByLCBzdGFydEFuZ2xlLCBlbmRBbmdsZSwgY2N3KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnQVQnOiAvLyBhcmNUb1xuICAgICAgICAgIHgxID0gc1sxXTtcbiAgICAgICAgICB5MSA9IHNbMl07XG4gICAgICAgICAgeCA9IHNbM107XG4gICAgICAgICAgeSA9IHNbNF07XG4gICAgICAgICAgciA9IHNbNV07XG4gICAgICAgICAgY2FudmFzLmFyY1RvKHgxLCB5MSwgeCwgeSwgcik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0UnOiAvLyBlbGxpcHNlXG4gICAgICAgICAgeCA9IHNbMV07XG4gICAgICAgICAgeSA9IHNbMl07XG4gICAgICAgICAgcnggPSBzWzNdO1xuICAgICAgICAgIHJ5ID0gc1s0XTtcbiAgICAgICAgICBhbmdsZSA9IHNbNV07XG4gICAgICAgICAgc3RhcnRBbmdsZSA9IHNbNl07XG4gICAgICAgICAgZW5kQW5nbGUgPSBzWzddO1xuICAgICAgICAgIGNjdyA9IHNbOF07XG4gICAgICAgICAgY2FudmFzLnNhdmUoKTtcbiAgICAgICAgICBjYW52YXMudHJhbnNsYXRlKHgsIHkpO1xuICAgICAgICAgIGNhbnZhcy5yb3RhdGUoYW5nbGUpO1xuICAgICAgICAgIGNhbnZhcy5zY2FsZShyeCwgcnkpO1xuICAgICAgICAgIGNhbnZhcy5hcmMoMCwgMCwgMSwgc3RhcnRBbmdsZSwgZW5kQW5nbGUsIGNjdyk7XG4gICAgICAgICAgY2FudmFzLnJlc3RvcmUoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnUic6IC8vIHJlY3RcbiAgICAgICAgICB4ID0gc1sxXTtcbiAgICAgICAgICB5ID0gc1syXTtcbiAgICAgICAgICB3ID0gc1szXTtcbiAgICAgICAgICBoID0gc1s0XTtcbiAgICAgICAgICBzdGFydFBvaW50ID0geyB4LCB5IH07XG4gICAgICAgICAgY2FudmFzLnJlY3QoeCwgeSwgdywgaCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgIC8vIHRocm93IG5ldyBFcnJvcihgJHtwYXRoVHlwZX0gaXMgbm90IGltcGxlbWVudGVkYCk7ID9cbiAgICAgIH1cblxuICAgICAgY3VycmVudFBvaW50LnggPSB4O1xuICAgICAgY3VycmVudFBvaW50LnkgPSB5O1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGNGaWxsID0gd2luZG93LkNhbnZhc1JlbmRlcmluZ0NvbnRleHQyRC5wcm90b3R5cGUuZmlsbDtcbiAgY29uc3QgY1N0cm9rZSA9IHdpbmRvdy5DYW52YXNSZW5kZXJpbmdDb250ZXh0MkQucHJvdG90eXBlLnN0cm9rZTtcblxuICB3aW5kb3cuQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELnByb3RvdHlwZS5maWxsID0gZnVuY3Rpb24gZmlsbCguLi5hcmdzKSB7XG4gICAgbGV0IGZpbGxSdWxlID0gJ25vbnplcm8nO1xuICAgIGlmIChcbiAgICAgIGFyZ3MubGVuZ3RoID09PSAwIHx8XG4gICAgICAoYXJncy5sZW5ndGggPT09IDEgJiYgdHlwZW9mIGFyZ3NbMF0gPT09ICdzdHJpbmcnKVxuICAgICkge1xuICAgICAgY0ZpbGwuYXBwbHkodGhpcywgYXJncyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyKSB7XG4gICAgICBmaWxsUnVsZSA9IGFyZ3NbMV07XG4gICAgfVxuICAgIGNvbnN0IHBhdGggPSBhcmdzWzBdO1xuICAgIGJ1aWxkUGF0aCh0aGlzLCBwYXRoLnNlZ21lbnRzKTtcbiAgICBjRmlsbC5jYWxsKHRoaXMsIGZpbGxSdWxlKTtcbiAgfTtcblxuICB3aW5kb3cuQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELnByb3RvdHlwZS5zdHJva2UgPSBmdW5jdGlvbiBzdHJva2UocGF0aCkge1xuICAgIGlmICghcGF0aCkge1xuICAgICAgY1N0cm9rZS5jYWxsKHRoaXMpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBidWlsZFBhdGgodGhpcywgcGF0aC5zZWdtZW50cyk7XG4gICAgY1N0cm9rZS5jYWxsKHRoaXMpO1xuICB9O1xuXG4gIGNvbnN0IGNJc1BvaW50SW5QYXRoID1cbiAgICB3aW5kb3cuQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELnByb3RvdHlwZS5pc1BvaW50SW5QYXRoO1xuXG4gIHdpbmRvdy5DYW52YXNSZW5kZXJpbmdDb250ZXh0MkQucHJvdG90eXBlLmlzUG9pbnRJblBhdGggPSBmdW5jdGlvbiBpc1BvaW50SW5QYXRoKFxuICAgIC4uLmFyZ3NcbiAgKSB7XG4gICAgLy8gbGV0IGZpbGxSdWxlID0gJ25vbnplcm8nO1xuICAgIGlmIChhcmdzWzBdLmNvbnN0cnVjdG9yLm5hbWUgPT09ICdQYXRoMkQnKSB7XG4gICAgICAvLyBmaXJzdCBhcmd1bWVudCBpcyBhIFBhdGgyRCBvYmplY3RcbiAgICAgIGNvbnN0IHggPSBhcmdzWzFdO1xuICAgICAgY29uc3QgeSA9IGFyZ3NbMl07XG4gICAgICBjb25zdCBmaWxsUnVsZSA9IGFyZ3NbM10gfHwgJ25vbnplcm8nO1xuICAgICAgY29uc3QgcGF0aCA9IGFyZ3NbMF07XG4gICAgICBidWlsZFBhdGgodGhpcywgcGF0aC5zZWdtZW50cyk7XG4gICAgICByZXR1cm4gY0lzUG9pbnRJblBhdGguYXBwbHkodGhpcywgW3gsIHksIGZpbGxSdWxlXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBjSXNQb2ludEluUGF0aC5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9XG4gIH07XG5cbiAgd2luZG93LlBhdGgyRCA9IFBhdGgyRDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBwb2x5RmlsbFBhdGgyRDtcbiIsImNvbnN0IHBhcnNlUGF0aCA9IHJlcXVpcmUoJy4vcGFyc2UtcGF0aCcpO1xuY29uc3QgcGF0aDJkUG9seWZpbGwgPSByZXF1aXJlKCcuL3BhdGgyZC1wb2x5ZmlsbCcpO1xuXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgcGF0aDJkUG9seWZpbGwod2luZG93KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHBhdGgyZFBvbHlmaWxsLFxuICBwYXJzZVBhdGgsXG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmlvID0gZXhwb3J0cy5Tb2NrZXQgPSBleHBvcnRzLk1hbmFnZXIgPSBleHBvcnRzLnByb3RvY29sID0gdm9pZCAwO1xuY29uc3QgdXJsXzEgPSByZXF1aXJlKFwiLi91cmxcIik7XG5jb25zdCBtYW5hZ2VyXzEgPSByZXF1aXJlKFwiLi9tYW5hZ2VyXCIpO1xuY29uc3QgZGVidWcgPSByZXF1aXJlKFwiZGVidWdcIikoXCJzb2NrZXQuaW8tY2xpZW50XCIpO1xuLyoqXG4gKiBNb2R1bGUgZXhwb3J0cy5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gbG9va3VwO1xuLyoqXG4gKiBNYW5hZ2VycyBjYWNoZS5cbiAqL1xuY29uc3QgY2FjaGUgPSAoZXhwb3J0cy5tYW5hZ2VycyA9IHt9KTtcbmZ1bmN0aW9uIGxvb2t1cCh1cmksIG9wdHMpIHtcbiAgICBpZiAodHlwZW9mIHVyaSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICBvcHRzID0gdXJpO1xuICAgICAgICB1cmkgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIG9wdHMgPSBvcHRzIHx8IHt9O1xuICAgIGNvbnN0IHBhcnNlZCA9IHVybF8xLnVybCh1cmksIG9wdHMucGF0aCB8fCBcIi9zb2NrZXQuaW9cIik7XG4gICAgY29uc3Qgc291cmNlID0gcGFyc2VkLnNvdXJjZTtcbiAgICBjb25zdCBpZCA9IHBhcnNlZC5pZDtcbiAgICBjb25zdCBwYXRoID0gcGFyc2VkLnBhdGg7XG4gICAgY29uc3Qgc2FtZU5hbWVzcGFjZSA9IGNhY2hlW2lkXSAmJiBwYXRoIGluIGNhY2hlW2lkXVtcIm5zcHNcIl07XG4gICAgY29uc3QgbmV3Q29ubmVjdGlvbiA9IG9wdHMuZm9yY2VOZXcgfHxcbiAgICAgICAgb3B0c1tcImZvcmNlIG5ldyBjb25uZWN0aW9uXCJdIHx8XG4gICAgICAgIGZhbHNlID09PSBvcHRzLm11bHRpcGxleCB8fFxuICAgICAgICBzYW1lTmFtZXNwYWNlO1xuICAgIGxldCBpbztcbiAgICBpZiAobmV3Q29ubmVjdGlvbikge1xuICAgICAgICBkZWJ1ZyhcImlnbm9yaW5nIHNvY2tldCBjYWNoZSBmb3IgJXNcIiwgc291cmNlKTtcbiAgICAgICAgaW8gPSBuZXcgbWFuYWdlcl8xLk1hbmFnZXIoc291cmNlLCBvcHRzKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmICghY2FjaGVbaWRdKSB7XG4gICAgICAgICAgICBkZWJ1ZyhcIm5ldyBpbyBpbnN0YW5jZSBmb3IgJXNcIiwgc291cmNlKTtcbiAgICAgICAgICAgIGNhY2hlW2lkXSA9IG5ldyBtYW5hZ2VyXzEuTWFuYWdlcihzb3VyY2UsIG9wdHMpO1xuICAgICAgICB9XG4gICAgICAgIGlvID0gY2FjaGVbaWRdO1xuICAgIH1cbiAgICBpZiAocGFyc2VkLnF1ZXJ5ICYmICFvcHRzLnF1ZXJ5KSB7XG4gICAgICAgIG9wdHMucXVlcnkgPSBwYXJzZWQucXVlcnlLZXk7XG4gICAgfVxuICAgIHJldHVybiBpby5zb2NrZXQocGFyc2VkLnBhdGgsIG9wdHMpO1xufVxuZXhwb3J0cy5pbyA9IGxvb2t1cDtcbi8qKlxuICogUHJvdG9jb2wgdmVyc2lvbi5cbiAqXG4gKiBAcHVibGljXG4gKi9cbnZhciBzb2NrZXRfaW9fcGFyc2VyXzEgPSByZXF1aXJlKFwic29ja2V0LmlvLXBhcnNlclwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInByb3RvY29sXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzb2NrZXRfaW9fcGFyc2VyXzEucHJvdG9jb2w7IH0gfSk7XG4vKipcbiAqIGBjb25uZWN0YC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJpXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydHMuY29ubmVjdCA9IGxvb2t1cDtcbi8qKlxuICogRXhwb3NlIGNvbnN0cnVjdG9ycyBmb3Igc3RhbmRhbG9uZSBidWlsZC5cbiAqXG4gKiBAcHVibGljXG4gKi9cbnZhciBtYW5hZ2VyXzIgPSByZXF1aXJlKFwiLi9tYW5hZ2VyXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiTWFuYWdlclwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbWFuYWdlcl8yLk1hbmFnZXI7IH0gfSk7XG52YXIgc29ja2V0XzEgPSByZXF1aXJlKFwiLi9zb2NrZXRcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJTb2NrZXRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNvY2tldF8xLlNvY2tldDsgfSB9KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGxvb2t1cDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5NYW5hZ2VyID0gdm9pZCAwO1xuY29uc3QgZWlvID0gcmVxdWlyZShcImVuZ2luZS5pby1jbGllbnRcIik7XG5jb25zdCBzb2NrZXRfMSA9IHJlcXVpcmUoXCIuL3NvY2tldFwiKTtcbmNvbnN0IHBhcnNlciA9IHJlcXVpcmUoXCJzb2NrZXQuaW8tcGFyc2VyXCIpO1xuY29uc3Qgb25fMSA9IHJlcXVpcmUoXCIuL29uXCIpO1xuY29uc3QgQmFja29mZiA9IHJlcXVpcmUoXCJiYWNrbzJcIik7XG5jb25zdCB0eXBlZF9ldmVudHNfMSA9IHJlcXVpcmUoXCIuL3R5cGVkLWV2ZW50c1wiKTtcbmNvbnN0IGRlYnVnID0gcmVxdWlyZShcImRlYnVnXCIpKFwic29ja2V0LmlvLWNsaWVudDptYW5hZ2VyXCIpO1xuY2xhc3MgTWFuYWdlciBleHRlbmRzIHR5cGVkX2V2ZW50c18xLlN0cmljdEV2ZW50RW1pdHRlciB7XG4gICAgY29uc3RydWN0b3IodXJpLCBvcHRzKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubnNwcyA9IHt9O1xuICAgICAgICB0aGlzLnN1YnMgPSBbXTtcbiAgICAgICAgaWYgKHVyaSAmJiBcIm9iamVjdFwiID09PSB0eXBlb2YgdXJpKSB7XG4gICAgICAgICAgICBvcHRzID0gdXJpO1xuICAgICAgICAgICAgdXJpID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIG9wdHMgPSBvcHRzIHx8IHt9O1xuICAgICAgICBvcHRzLnBhdGggPSBvcHRzLnBhdGggfHwgXCIvc29ja2V0LmlvXCI7XG4gICAgICAgIHRoaXMub3B0cyA9IG9wdHM7XG4gICAgICAgIHRoaXMucmVjb25uZWN0aW9uKG9wdHMucmVjb25uZWN0aW9uICE9PSBmYWxzZSk7XG4gICAgICAgIHRoaXMucmVjb25uZWN0aW9uQXR0ZW1wdHMob3B0cy5yZWNvbm5lY3Rpb25BdHRlbXB0cyB8fCBJbmZpbml0eSk7XG4gICAgICAgIHRoaXMucmVjb25uZWN0aW9uRGVsYXkob3B0cy5yZWNvbm5lY3Rpb25EZWxheSB8fCAxMDAwKTtcbiAgICAgICAgdGhpcy5yZWNvbm5lY3Rpb25EZWxheU1heChvcHRzLnJlY29ubmVjdGlvbkRlbGF5TWF4IHx8IDUwMDApO1xuICAgICAgICB0aGlzLnJhbmRvbWl6YXRpb25GYWN0b3Iob3B0cy5yYW5kb21pemF0aW9uRmFjdG9yIHx8IDAuNSk7XG4gICAgICAgIHRoaXMuYmFja29mZiA9IG5ldyBCYWNrb2ZmKHtcbiAgICAgICAgICAgIG1pbjogdGhpcy5yZWNvbm5lY3Rpb25EZWxheSgpLFxuICAgICAgICAgICAgbWF4OiB0aGlzLnJlY29ubmVjdGlvbkRlbGF5TWF4KCksXG4gICAgICAgICAgICBqaXR0ZXI6IHRoaXMucmFuZG9taXphdGlvbkZhY3RvcigpLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy50aW1lb3V0KG51bGwgPT0gb3B0cy50aW1lb3V0ID8gMjAwMDAgOiBvcHRzLnRpbWVvdXQpO1xuICAgICAgICB0aGlzLl9yZWFkeVN0YXRlID0gXCJjbG9zZWRcIjtcbiAgICAgICAgdGhpcy51cmkgPSB1cmk7XG4gICAgICAgIGNvbnN0IF9wYXJzZXIgPSBvcHRzLnBhcnNlciB8fCBwYXJzZXI7XG4gICAgICAgIHRoaXMuZW5jb2RlciA9IG5ldyBfcGFyc2VyLkVuY29kZXIoKTtcbiAgICAgICAgdGhpcy5kZWNvZGVyID0gbmV3IF9wYXJzZXIuRGVjb2RlcigpO1xuICAgICAgICB0aGlzLl9hdXRvQ29ubmVjdCA9IG9wdHMuYXV0b0Nvbm5lY3QgIT09IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5fYXV0b0Nvbm5lY3QpXG4gICAgICAgICAgICB0aGlzLm9wZW4oKTtcbiAgICB9XG4gICAgcmVjb25uZWN0aW9uKHYpIHtcbiAgICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JlY29ubmVjdGlvbjtcbiAgICAgICAgdGhpcy5fcmVjb25uZWN0aW9uID0gISF2O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgcmVjb25uZWN0aW9uQXR0ZW1wdHModikge1xuICAgICAgICBpZiAodiA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JlY29ubmVjdGlvbkF0dGVtcHRzO1xuICAgICAgICB0aGlzLl9yZWNvbm5lY3Rpb25BdHRlbXB0cyA9IHY7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICByZWNvbm5lY3Rpb25EZWxheSh2KSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgaWYgKHYgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZWNvbm5lY3Rpb25EZWxheTtcbiAgICAgICAgdGhpcy5fcmVjb25uZWN0aW9uRGVsYXkgPSB2O1xuICAgICAgICAoX2EgPSB0aGlzLmJhY2tvZmYpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5zZXRNaW4odik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICByYW5kb21pemF0aW9uRmFjdG9yKHYpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBpZiAodiA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JhbmRvbWl6YXRpb25GYWN0b3I7XG4gICAgICAgIHRoaXMuX3JhbmRvbWl6YXRpb25GYWN0b3IgPSB2O1xuICAgICAgICAoX2EgPSB0aGlzLmJhY2tvZmYpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5zZXRKaXR0ZXIodik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICByZWNvbm5lY3Rpb25EZWxheU1heCh2KSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgaWYgKHYgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZWNvbm5lY3Rpb25EZWxheU1heDtcbiAgICAgICAgdGhpcy5fcmVjb25uZWN0aW9uRGVsYXlNYXggPSB2O1xuICAgICAgICAoX2EgPSB0aGlzLmJhY2tvZmYpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5zZXRNYXgodik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICB0aW1lb3V0KHYpIHtcbiAgICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RpbWVvdXQ7XG4gICAgICAgIHRoaXMuX3RpbWVvdXQgPSB2O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogU3RhcnRzIHRyeWluZyB0byByZWNvbm5lY3QgaWYgcmVjb25uZWN0aW9uIGlzIGVuYWJsZWQgYW5kIHdlIGhhdmUgbm90XG4gICAgICogc3RhcnRlZCByZWNvbm5lY3RpbmcgeWV0XG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIG1heWJlUmVjb25uZWN0T25PcGVuKCkge1xuICAgICAgICAvLyBPbmx5IHRyeSB0byByZWNvbm5lY3QgaWYgaXQncyB0aGUgZmlyc3QgdGltZSB3ZSdyZSBjb25uZWN0aW5nXG4gICAgICAgIGlmICghdGhpcy5fcmVjb25uZWN0aW5nICYmXG4gICAgICAgICAgICB0aGlzLl9yZWNvbm5lY3Rpb24gJiZcbiAgICAgICAgICAgIHRoaXMuYmFja29mZi5hdHRlbXB0cyA9PT0gMCkge1xuICAgICAgICAgICAgLy8ga2VlcHMgcmVjb25uZWN0aW9uIGZyb20gZmlyaW5nIHR3aWNlIGZvciB0aGUgc2FtZSByZWNvbm5lY3Rpb24gbG9vcFxuICAgICAgICAgICAgdGhpcy5yZWNvbm5lY3QoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBjdXJyZW50IHRyYW5zcG9ydCBgc29ja2V0YC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIC0gb3B0aW9uYWwsIGNhbGxiYWNrXG4gICAgICogQHJldHVybiBzZWxmXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIG9wZW4oZm4pIHtcbiAgICAgICAgZGVidWcoXCJyZWFkeVN0YXRlICVzXCIsIHRoaXMuX3JlYWR5U3RhdGUpO1xuICAgICAgICBpZiAofnRoaXMuX3JlYWR5U3RhdGUuaW5kZXhPZihcIm9wZW5cIikpXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgZGVidWcoXCJvcGVuaW5nICVzXCIsIHRoaXMudXJpKTtcbiAgICAgICAgdGhpcy5lbmdpbmUgPSBlaW8odGhpcy51cmksIHRoaXMub3B0cyk7XG4gICAgICAgIGNvbnN0IHNvY2tldCA9IHRoaXMuZW5naW5lO1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5fcmVhZHlTdGF0ZSA9IFwib3BlbmluZ1wiO1xuICAgICAgICB0aGlzLnNraXBSZWNvbm5lY3QgPSBmYWxzZTtcbiAgICAgICAgLy8gZW1pdCBgb3BlbmBcbiAgICAgICAgY29uc3Qgb3BlblN1YkRlc3Ryb3kgPSBvbl8xLm9uKHNvY2tldCwgXCJvcGVuXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNlbGYub25vcGVuKCk7XG4gICAgICAgICAgICBmbiAmJiBmbigpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gZW1pdCBgZXJyb3JgXG4gICAgICAgIGNvbnN0IGVycm9yU3ViID0gb25fMS5vbihzb2NrZXQsIFwiZXJyb3JcIiwgKGVycikgPT4ge1xuICAgICAgICAgICAgZGVidWcoXCJlcnJvclwiKTtcbiAgICAgICAgICAgIHNlbGYuY2xlYW51cCgpO1xuICAgICAgICAgICAgc2VsZi5fcmVhZHlTdGF0ZSA9IFwiY2xvc2VkXCI7XG4gICAgICAgICAgICB0aGlzLmVtaXRSZXNlcnZlZChcImVycm9yXCIsIGVycik7XG4gICAgICAgICAgICBpZiAoZm4pIHtcbiAgICAgICAgICAgICAgICBmbihlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gT25seSBkbyB0aGlzIGlmIHRoZXJlIGlzIG5vIGZuIHRvIGhhbmRsZSB0aGUgZXJyb3JcbiAgICAgICAgICAgICAgICBzZWxmLm1heWJlUmVjb25uZWN0T25PcGVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoZmFsc2UgIT09IHRoaXMuX3RpbWVvdXQpIHtcbiAgICAgICAgICAgIGNvbnN0IHRpbWVvdXQgPSB0aGlzLl90aW1lb3V0O1xuICAgICAgICAgICAgZGVidWcoXCJjb25uZWN0IGF0dGVtcHQgd2lsbCB0aW1lb3V0IGFmdGVyICVkXCIsIHRpbWVvdXQpO1xuICAgICAgICAgICAgaWYgKHRpbWVvdXQgPT09IDApIHtcbiAgICAgICAgICAgICAgICBvcGVuU3ViRGVzdHJveSgpOyAvLyBwcmV2ZW50cyBhIHJhY2UgY29uZGl0aW9uIHdpdGggdGhlICdvcGVuJyBldmVudFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gc2V0IHRpbWVyXG4gICAgICAgICAgICBjb25zdCB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGRlYnVnKFwiY29ubmVjdCBhdHRlbXB0IHRpbWVkIG91dCBhZnRlciAlZFwiLCB0aW1lb3V0KTtcbiAgICAgICAgICAgICAgICBvcGVuU3ViRGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIHNvY2tldC5jbG9zZSgpO1xuICAgICAgICAgICAgICAgIHNvY2tldC5lbWl0KFwiZXJyb3JcIiwgbmV3IEVycm9yKFwidGltZW91dFwiKSk7XG4gICAgICAgICAgICB9LCB0aW1lb3V0KTtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdHMuYXV0b1VucmVmKSB7XG4gICAgICAgICAgICAgICAgdGltZXIudW5yZWYoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc3Vicy5wdXNoKGZ1bmN0aW9uIHN1YkRlc3Ryb3koKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3Vicy5wdXNoKG9wZW5TdWJEZXN0cm95KTtcbiAgICAgICAgdGhpcy5zdWJzLnB1c2goZXJyb3JTdWIpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWxpYXMgZm9yIG9wZW4oKVxuICAgICAqXG4gICAgICogQHJldHVybiBzZWxmXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIGNvbm5lY3QoZm4pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3Blbihmbik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxlZCB1cG9uIHRyYW5zcG9ydCBvcGVuLlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBvbm9wZW4oKSB7XG4gICAgICAgIGRlYnVnKFwib3BlblwiKTtcbiAgICAgICAgLy8gY2xlYXIgb2xkIHN1YnNcbiAgICAgICAgdGhpcy5jbGVhbnVwKCk7XG4gICAgICAgIC8vIG1hcmsgYXMgb3BlblxuICAgICAgICB0aGlzLl9yZWFkeVN0YXRlID0gXCJvcGVuXCI7XG4gICAgICAgIHRoaXMuZW1pdFJlc2VydmVkKFwib3BlblwiKTtcbiAgICAgICAgLy8gYWRkIG5ldyBzdWJzXG4gICAgICAgIGNvbnN0IHNvY2tldCA9IHRoaXMuZW5naW5lO1xuICAgICAgICB0aGlzLnN1YnMucHVzaChvbl8xLm9uKHNvY2tldCwgXCJwaW5nXCIsIHRoaXMub25waW5nLmJpbmQodGhpcykpLCBvbl8xLm9uKHNvY2tldCwgXCJkYXRhXCIsIHRoaXMub25kYXRhLmJpbmQodGhpcykpLCBvbl8xLm9uKHNvY2tldCwgXCJlcnJvclwiLCB0aGlzLm9uZXJyb3IuYmluZCh0aGlzKSksIG9uXzEub24oc29ja2V0LCBcImNsb3NlXCIsIHRoaXMub25jbG9zZS5iaW5kKHRoaXMpKSwgb25fMS5vbih0aGlzLmRlY29kZXIsIFwiZGVjb2RlZFwiLCB0aGlzLm9uZGVjb2RlZC5iaW5kKHRoaXMpKSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxlZCB1cG9uIGEgcGluZy5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgb25waW5nKCkge1xuICAgICAgICB0aGlzLmVtaXRSZXNlcnZlZChcInBpbmdcIik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxlZCB3aXRoIGRhdGEuXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIG9uZGF0YShkYXRhKSB7XG4gICAgICAgIHRoaXMuZGVjb2Rlci5hZGQoZGF0YSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxlZCB3aGVuIHBhcnNlciBmdWxseSBkZWNvZGVzIGEgcGFja2V0LlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBvbmRlY29kZWQocGFja2V0KSB7XG4gICAgICAgIHRoaXMuZW1pdFJlc2VydmVkKFwicGFja2V0XCIsIHBhY2tldCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxlZCB1cG9uIHNvY2tldCBlcnJvci5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgb25lcnJvcihlcnIpIHtcbiAgICAgICAgZGVidWcoXCJlcnJvclwiLCBlcnIpO1xuICAgICAgICB0aGlzLmVtaXRSZXNlcnZlZChcImVycm9yXCIsIGVycik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgc29ja2V0IGZvciB0aGUgZ2l2ZW4gYG5zcGAuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtTb2NrZXR9XG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIHNvY2tldChuc3AsIG9wdHMpIHtcbiAgICAgICAgbGV0IHNvY2tldCA9IHRoaXMubnNwc1tuc3BdO1xuICAgICAgICBpZiAoIXNvY2tldCkge1xuICAgICAgICAgICAgc29ja2V0ID0gbmV3IHNvY2tldF8xLlNvY2tldCh0aGlzLCBuc3AsIG9wdHMpO1xuICAgICAgICAgICAgdGhpcy5uc3BzW25zcF0gPSBzb2NrZXQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNvY2tldDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHVwb24gYSBzb2NrZXQgY2xvc2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc29ja2V0XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfZGVzdHJveShzb2NrZXQpIHtcbiAgICAgICAgY29uc3QgbnNwcyA9IE9iamVjdC5rZXlzKHRoaXMubnNwcyk7XG4gICAgICAgIGZvciAoY29uc3QgbnNwIG9mIG5zcHMpIHtcbiAgICAgICAgICAgIGNvbnN0IHNvY2tldCA9IHRoaXMubnNwc1tuc3BdO1xuICAgICAgICAgICAgaWYgKHNvY2tldC5hY3RpdmUpIHtcbiAgICAgICAgICAgICAgICBkZWJ1ZyhcInNvY2tldCAlcyBpcyBzdGlsbCBhY3RpdmUsIHNraXBwaW5nIGNsb3NlXCIsIG5zcCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2Nsb3NlKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFdyaXRlcyBhIHBhY2tldC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBwYWNrZXRcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9wYWNrZXQocGFja2V0KSB7XG4gICAgICAgIGRlYnVnKFwid3JpdGluZyBwYWNrZXQgJWpcIiwgcGFja2V0KTtcbiAgICAgICAgY29uc3QgZW5jb2RlZFBhY2tldHMgPSB0aGlzLmVuY29kZXIuZW5jb2RlKHBhY2tldCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZW5jb2RlZFBhY2tldHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLndyaXRlKGVuY29kZWRQYWNrZXRzW2ldLCBwYWNrZXQub3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2xlYW4gdXAgdHJhbnNwb3J0IHN1YnNjcmlwdGlvbnMgYW5kIHBhY2tldCBidWZmZXIuXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGNsZWFudXAoKSB7XG4gICAgICAgIGRlYnVnKFwiY2xlYW51cFwiKTtcbiAgICAgICAgdGhpcy5zdWJzLmZvckVhY2goKHN1YkRlc3Ryb3kpID0+IHN1YkRlc3Ryb3koKSk7XG4gICAgICAgIHRoaXMuc3Vicy5sZW5ndGggPSAwO1xuICAgICAgICB0aGlzLmRlY29kZXIuZGVzdHJveSgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDbG9zZSB0aGUgY3VycmVudCBzb2NrZXQuXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9jbG9zZSgpIHtcbiAgICAgICAgZGVidWcoXCJkaXNjb25uZWN0XCIpO1xuICAgICAgICB0aGlzLnNraXBSZWNvbm5lY3QgPSB0cnVlO1xuICAgICAgICB0aGlzLl9yZWNvbm5lY3RpbmcgPSBmYWxzZTtcbiAgICAgICAgaWYgKFwib3BlbmluZ1wiID09PSB0aGlzLl9yZWFkeVN0YXRlKSB7XG4gICAgICAgICAgICAvLyBgb25jbG9zZWAgd2lsbCBub3QgZmlyZSBiZWNhdXNlXG4gICAgICAgICAgICAvLyBhbiBvcGVuIGV2ZW50IG5ldmVyIGhhcHBlbmVkXG4gICAgICAgICAgICB0aGlzLmNsZWFudXAoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJhY2tvZmYucmVzZXQoKTtcbiAgICAgICAgdGhpcy5fcmVhZHlTdGF0ZSA9IFwiY2xvc2VkXCI7XG4gICAgICAgIGlmICh0aGlzLmVuZ2luZSlcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLmNsb3NlKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFsaWFzIGZvciBjbG9zZSgpXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGRpc2Nvbm5lY3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jbG9zZSgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgdXBvbiBlbmdpbmUgY2xvc2UuXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIG9uY2xvc2UocmVhc29uKSB7XG4gICAgICAgIGRlYnVnKFwib25jbG9zZVwiKTtcbiAgICAgICAgdGhpcy5jbGVhbnVwKCk7XG4gICAgICAgIHRoaXMuYmFja29mZi5yZXNldCgpO1xuICAgICAgICB0aGlzLl9yZWFkeVN0YXRlID0gXCJjbG9zZWRcIjtcbiAgICAgICAgdGhpcy5lbWl0UmVzZXJ2ZWQoXCJjbG9zZVwiLCByZWFzb24pO1xuICAgICAgICBpZiAodGhpcy5fcmVjb25uZWN0aW9uICYmICF0aGlzLnNraXBSZWNvbm5lY3QpIHtcbiAgICAgICAgICAgIHRoaXMucmVjb25uZWN0KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQXR0ZW1wdCBhIHJlY29ubmVjdGlvbi5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgcmVjb25uZWN0KCkge1xuICAgICAgICBpZiAodGhpcy5fcmVjb25uZWN0aW5nIHx8IHRoaXMuc2tpcFJlY29ubmVjdClcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMuYmFja29mZi5hdHRlbXB0cyA+PSB0aGlzLl9yZWNvbm5lY3Rpb25BdHRlbXB0cykge1xuICAgICAgICAgICAgZGVidWcoXCJyZWNvbm5lY3QgZmFpbGVkXCIpO1xuICAgICAgICAgICAgdGhpcy5iYWNrb2ZmLnJlc2V0KCk7XG4gICAgICAgICAgICB0aGlzLmVtaXRSZXNlcnZlZChcInJlY29ubmVjdF9mYWlsZWRcIik7XG4gICAgICAgICAgICB0aGlzLl9yZWNvbm5lY3RpbmcgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGRlbGF5ID0gdGhpcy5iYWNrb2ZmLmR1cmF0aW9uKCk7XG4gICAgICAgICAgICBkZWJ1ZyhcIndpbGwgd2FpdCAlZG1zIGJlZm9yZSByZWNvbm5lY3QgYXR0ZW1wdFwiLCBkZWxheSk7XG4gICAgICAgICAgICB0aGlzLl9yZWNvbm5lY3RpbmcgPSB0cnVlO1xuICAgICAgICAgICAgY29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5za2lwUmVjb25uZWN0KVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgZGVidWcoXCJhdHRlbXB0aW5nIHJlY29ubmVjdFwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXRSZXNlcnZlZChcInJlY29ubmVjdF9hdHRlbXB0XCIsIHNlbGYuYmFja29mZi5hdHRlbXB0cyk7XG4gICAgICAgICAgICAgICAgLy8gY2hlY2sgYWdhaW4gZm9yIHRoZSBjYXNlIHNvY2tldCBjbG9zZWQgaW4gYWJvdmUgZXZlbnRzXG4gICAgICAgICAgICAgICAgaWYgKHNlbGYuc2tpcFJlY29ubmVjdClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIHNlbGYub3BlbigoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlYnVnKFwicmVjb25uZWN0IGF0dGVtcHQgZXJyb3JcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLl9yZWNvbm5lY3RpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucmVjb25uZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXRSZXNlcnZlZChcInJlY29ubmVjdF9lcnJvclwiLCBlcnIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVidWcoXCJyZWNvbm5lY3Qgc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYub25yZWNvbm5lY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSwgZGVsYXkpO1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0cy5hdXRvVW5yZWYpIHtcbiAgICAgICAgICAgICAgICB0aW1lci51bnJlZigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zdWJzLnB1c2goZnVuY3Rpb24gc3ViRGVzdHJveSgpIHtcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHVwb24gc3VjY2Vzc2Z1bCByZWNvbm5lY3QuXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIG9ucmVjb25uZWN0KCkge1xuICAgICAgICBjb25zdCBhdHRlbXB0ID0gdGhpcy5iYWNrb2ZmLmF0dGVtcHRzO1xuICAgICAgICB0aGlzLl9yZWNvbm5lY3RpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5iYWNrb2ZmLnJlc2V0KCk7XG4gICAgICAgIHRoaXMuZW1pdFJlc2VydmVkKFwicmVjb25uZWN0XCIsIGF0dGVtcHQpO1xuICAgIH1cbn1cbmV4cG9ydHMuTWFuYWdlciA9IE1hbmFnZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMub24gPSB2b2lkIDA7XG5mdW5jdGlvbiBvbihvYmosIGV2LCBmbikge1xuICAgIG9iai5vbihldiwgZm4pO1xuICAgIHJldHVybiBmdW5jdGlvbiBzdWJEZXN0cm95KCkge1xuICAgICAgICBvYmoub2ZmKGV2LCBmbik7XG4gICAgfTtcbn1cbmV4cG9ydHMub24gPSBvbjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Tb2NrZXQgPSB2b2lkIDA7XG5jb25zdCBzb2NrZXRfaW9fcGFyc2VyXzEgPSByZXF1aXJlKFwic29ja2V0LmlvLXBhcnNlclwiKTtcbmNvbnN0IG9uXzEgPSByZXF1aXJlKFwiLi9vblwiKTtcbmNvbnN0IHR5cGVkX2V2ZW50c18xID0gcmVxdWlyZShcIi4vdHlwZWQtZXZlbnRzXCIpO1xuY29uc3QgZGVidWcgPSByZXF1aXJlKFwiZGVidWdcIikoXCJzb2NrZXQuaW8tY2xpZW50OnNvY2tldFwiKTtcbi8qKlxuICogSW50ZXJuYWwgZXZlbnRzLlxuICogVGhlc2UgZXZlbnRzIGNhbid0IGJlIGVtaXR0ZWQgYnkgdGhlIHVzZXIuXG4gKi9cbmNvbnN0IFJFU0VSVkVEX0VWRU5UUyA9IE9iamVjdC5mcmVlemUoe1xuICAgIGNvbm5lY3Q6IDEsXG4gICAgY29ubmVjdF9lcnJvcjogMSxcbiAgICBkaXNjb25uZWN0OiAxLFxuICAgIGRpc2Nvbm5lY3Rpbmc6IDEsXG4gICAgLy8gRXZlbnRFbWl0dGVyIHJlc2VydmVkIGV2ZW50czogaHR0cHM6Ly9ub2RlanMub3JnL2FwaS9ldmVudHMuaHRtbCNldmVudHNfZXZlbnRfbmV3bGlzdGVuZXJcbiAgICBuZXdMaXN0ZW5lcjogMSxcbiAgICByZW1vdmVMaXN0ZW5lcjogMSxcbn0pO1xuY2xhc3MgU29ja2V0IGV4dGVuZHMgdHlwZWRfZXZlbnRzXzEuU3RyaWN0RXZlbnRFbWl0dGVyIHtcbiAgICAvKipcbiAgICAgKiBgU29ja2V0YCBjb25zdHJ1Y3Rvci5cbiAgICAgKlxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihpbywgbnNwLCBvcHRzKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMucmVjZWl2ZUJ1ZmZlciA9IFtdO1xuICAgICAgICB0aGlzLnNlbmRCdWZmZXIgPSBbXTtcbiAgICAgICAgdGhpcy5pZHMgPSAwO1xuICAgICAgICB0aGlzLmFja3MgPSB7fTtcbiAgICAgICAgdGhpcy5mbGFncyA9IHt9O1xuICAgICAgICB0aGlzLmlvID0gaW87XG4gICAgICAgIHRoaXMubnNwID0gbnNwO1xuICAgICAgICB0aGlzLmlkcyA9IDA7XG4gICAgICAgIHRoaXMuYWNrcyA9IHt9O1xuICAgICAgICB0aGlzLnJlY2VpdmVCdWZmZXIgPSBbXTtcbiAgICAgICAgdGhpcy5zZW5kQnVmZmVyID0gW107XG4gICAgICAgIHRoaXMuY29ubmVjdGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZGlzY29ubmVjdGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5mbGFncyA9IHt9O1xuICAgICAgICBpZiAob3B0cyAmJiBvcHRzLmF1dGgpIHtcbiAgICAgICAgICAgIHRoaXMuYXV0aCA9IG9wdHMuYXV0aDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pby5fYXV0b0Nvbm5lY3QpXG4gICAgICAgICAgICB0aGlzLm9wZW4oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU3Vic2NyaWJlIHRvIG9wZW4sIGNsb3NlIGFuZCBwYWNrZXQgZXZlbnRzXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHN1YkV2ZW50cygpIHtcbiAgICAgICAgaWYgKHRoaXMuc3VicylcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgY29uc3QgaW8gPSB0aGlzLmlvO1xuICAgICAgICB0aGlzLnN1YnMgPSBbXG4gICAgICAgICAgICBvbl8xLm9uKGlvLCBcIm9wZW5cIiwgdGhpcy5vbm9wZW4uYmluZCh0aGlzKSksXG4gICAgICAgICAgICBvbl8xLm9uKGlvLCBcInBhY2tldFwiLCB0aGlzLm9ucGFja2V0LmJpbmQodGhpcykpLFxuICAgICAgICAgICAgb25fMS5vbihpbywgXCJlcnJvclwiLCB0aGlzLm9uZXJyb3IuYmluZCh0aGlzKSksXG4gICAgICAgICAgICBvbl8xLm9uKGlvLCBcImNsb3NlXCIsIHRoaXMub25jbG9zZS5iaW5kKHRoaXMpKSxcbiAgICAgICAgXTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogV2hldGhlciB0aGUgU29ja2V0IHdpbGwgdHJ5IHRvIHJlY29ubmVjdCB3aGVuIGl0cyBNYW5hZ2VyIGNvbm5lY3RzIG9yIHJlY29ubmVjdHNcbiAgICAgKi9cbiAgICBnZXQgYWN0aXZlKCkge1xuICAgICAgICByZXR1cm4gISF0aGlzLnN1YnM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFwiT3BlbnNcIiB0aGUgc29ja2V0LlxuICAgICAqXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbm5lY3RlZClcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB0aGlzLnN1YkV2ZW50cygpO1xuICAgICAgICBpZiAoIXRoaXMuaW9bXCJfcmVjb25uZWN0aW5nXCJdKVxuICAgICAgICAgICAgdGhpcy5pby5vcGVuKCk7IC8vIGVuc3VyZSBvcGVuXG4gICAgICAgIGlmIChcIm9wZW5cIiA9PT0gdGhpcy5pby5fcmVhZHlTdGF0ZSlcbiAgICAgICAgICAgIHRoaXMub25vcGVuKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBbGlhcyBmb3IgY29ubmVjdCgpXG4gICAgICovXG4gICAgb3BlbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29ubmVjdCgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZW5kcyBhIGBtZXNzYWdlYCBldmVudC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4gc2VsZlxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBzZW5kKC4uLmFyZ3MpIHtcbiAgICAgICAgYXJncy51bnNoaWZ0KFwibWVzc2FnZVwiKTtcbiAgICAgICAgdGhpcy5lbWl0LmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogT3ZlcnJpZGUgYGVtaXRgLlxuICAgICAqIElmIHRoZSBldmVudCBpcyBpbiBgZXZlbnRzYCwgaXQncyBlbWl0dGVkIG5vcm1hbGx5LlxuICAgICAqXG4gICAgICogQHJldHVybiBzZWxmXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIGVtaXQoZXYsIC4uLmFyZ3MpIHtcbiAgICAgICAgaWYgKFJFU0VSVkVEX0VWRU5UUy5oYXNPd25Qcm9wZXJ0eShldikpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignXCInICsgZXYgKyAnXCIgaXMgYSByZXNlcnZlZCBldmVudCBuYW1lJyk7XG4gICAgICAgIH1cbiAgICAgICAgYXJncy51bnNoaWZ0KGV2KTtcbiAgICAgICAgY29uc3QgcGFja2V0ID0ge1xuICAgICAgICAgICAgdHlwZTogc29ja2V0X2lvX3BhcnNlcl8xLlBhY2tldFR5cGUuRVZFTlQsXG4gICAgICAgICAgICBkYXRhOiBhcmdzLFxuICAgICAgICB9O1xuICAgICAgICBwYWNrZXQub3B0aW9ucyA9IHt9O1xuICAgICAgICBwYWNrZXQub3B0aW9ucy5jb21wcmVzcyA9IHRoaXMuZmxhZ3MuY29tcHJlc3MgIT09IGZhbHNlO1xuICAgICAgICAvLyBldmVudCBhY2sgY2FsbGJhY2tcbiAgICAgICAgaWYgKFwiZnVuY3Rpb25cIiA9PT0gdHlwZW9mIGFyZ3NbYXJncy5sZW5ndGggLSAxXSkge1xuICAgICAgICAgICAgZGVidWcoXCJlbWl0dGluZyBwYWNrZXQgd2l0aCBhY2sgaWQgJWRcIiwgdGhpcy5pZHMpO1xuICAgICAgICAgICAgdGhpcy5hY2tzW3RoaXMuaWRzXSA9IGFyZ3MucG9wKCk7XG4gICAgICAgICAgICBwYWNrZXQuaWQgPSB0aGlzLmlkcysrO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGlzVHJhbnNwb3J0V3JpdGFibGUgPSB0aGlzLmlvLmVuZ2luZSAmJlxuICAgICAgICAgICAgdGhpcy5pby5lbmdpbmUudHJhbnNwb3J0ICYmXG4gICAgICAgICAgICB0aGlzLmlvLmVuZ2luZS50cmFuc3BvcnQud3JpdGFibGU7XG4gICAgICAgIGNvbnN0IGRpc2NhcmRQYWNrZXQgPSB0aGlzLmZsYWdzLnZvbGF0aWxlICYmICghaXNUcmFuc3BvcnRXcml0YWJsZSB8fCAhdGhpcy5jb25uZWN0ZWQpO1xuICAgICAgICBpZiAoZGlzY2FyZFBhY2tldCkge1xuICAgICAgICAgICAgZGVidWcoXCJkaXNjYXJkIHBhY2tldCBhcyB0aGUgdHJhbnNwb3J0IGlzIG5vdCBjdXJyZW50bHkgd3JpdGFibGVcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5jb25uZWN0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMucGFja2V0KHBhY2tldCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNlbmRCdWZmZXIucHVzaChwYWNrZXQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZmxhZ3MgPSB7fTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNlbmRzIGEgcGFja2V0LlxuICAgICAqXG4gICAgICogQHBhcmFtIHBhY2tldFxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgcGFja2V0KHBhY2tldCkge1xuICAgICAgICBwYWNrZXQubnNwID0gdGhpcy5uc3A7XG4gICAgICAgIHRoaXMuaW8uX3BhY2tldChwYWNrZXQpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgdXBvbiBlbmdpbmUgYG9wZW5gLlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBvbm9wZW4oKSB7XG4gICAgICAgIGRlYnVnKFwidHJhbnNwb3J0IGlzIG9wZW4gLSBjb25uZWN0aW5nXCIpO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuYXV0aCA9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHRoaXMuYXV0aCgoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucGFja2V0KHsgdHlwZTogc29ja2V0X2lvX3BhcnNlcl8xLlBhY2tldFR5cGUuQ09OTkVDVCwgZGF0YSB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wYWNrZXQoeyB0eXBlOiBzb2NrZXRfaW9fcGFyc2VyXzEuUGFja2V0VHlwZS5DT05ORUNULCBkYXRhOiB0aGlzLmF1dGggfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHVwb24gZW5naW5lIG9yIG1hbmFnZXIgYGVycm9yYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBlcnJcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIG9uZXJyb3IoZXJyKSB7XG4gICAgICAgIGlmICghdGhpcy5jb25uZWN0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZW1pdFJlc2VydmVkKFwiY29ubmVjdF9lcnJvclwiLCBlcnIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxlZCB1cG9uIGVuZ2luZSBgY2xvc2VgLlxuICAgICAqXG4gICAgICogQHBhcmFtIHJlYXNvblxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgb25jbG9zZShyZWFzb24pIHtcbiAgICAgICAgZGVidWcoXCJjbG9zZSAoJXMpXCIsIHJlYXNvbik7XG4gICAgICAgIHRoaXMuY29ubmVjdGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZGlzY29ubmVjdGVkID0gdHJ1ZTtcbiAgICAgICAgZGVsZXRlIHRoaXMuaWQ7XG4gICAgICAgIHRoaXMuZW1pdFJlc2VydmVkKFwiZGlzY29ubmVjdFwiLCByZWFzb24pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgd2l0aCBzb2NrZXQgcGFja2V0LlxuICAgICAqXG4gICAgICogQHBhcmFtIHBhY2tldFxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgb25wYWNrZXQocGFja2V0KSB7XG4gICAgICAgIGNvbnN0IHNhbWVOYW1lc3BhY2UgPSBwYWNrZXQubnNwID09PSB0aGlzLm5zcDtcbiAgICAgICAgaWYgKCFzYW1lTmFtZXNwYWNlKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBzd2l0Y2ggKHBhY2tldC50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIHNvY2tldF9pb19wYXJzZXJfMS5QYWNrZXRUeXBlLkNPTk5FQ1Q6XG4gICAgICAgICAgICAgICAgaWYgKHBhY2tldC5kYXRhICYmIHBhY2tldC5kYXRhLnNpZCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpZCA9IHBhY2tldC5kYXRhLnNpZDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbmNvbm5lY3QoaWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0UmVzZXJ2ZWQoXCJjb25uZWN0X2Vycm9yXCIsIG5ldyBFcnJvcihcIkl0IHNlZW1zIHlvdSBhcmUgdHJ5aW5nIHRvIHJlYWNoIGEgU29ja2V0LklPIHNlcnZlciBpbiB2Mi54IHdpdGggYSB2My54IGNsaWVudCwgYnV0IHRoZXkgYXJlIG5vdCBjb21wYXRpYmxlIChtb3JlIGluZm9ybWF0aW9uIGhlcmU6IGh0dHBzOi8vc29ja2V0LmlvL2RvY3MvdjMvbWlncmF0aW5nLWZyb20tMi14LXRvLTMtMC8pXCIpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHNvY2tldF9pb19wYXJzZXJfMS5QYWNrZXRUeXBlLkVWRU5UOlxuICAgICAgICAgICAgICAgIHRoaXMub25ldmVudChwYWNrZXQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBzb2NrZXRfaW9fcGFyc2VyXzEuUGFja2V0VHlwZS5CSU5BUllfRVZFTlQ6XG4gICAgICAgICAgICAgICAgdGhpcy5vbmV2ZW50KHBhY2tldCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHNvY2tldF9pb19wYXJzZXJfMS5QYWNrZXRUeXBlLkFDSzpcbiAgICAgICAgICAgICAgICB0aGlzLm9uYWNrKHBhY2tldCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHNvY2tldF9pb19wYXJzZXJfMS5QYWNrZXRUeXBlLkJJTkFSWV9BQ0s6XG4gICAgICAgICAgICAgICAgdGhpcy5vbmFjayhwYWNrZXQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBzb2NrZXRfaW9fcGFyc2VyXzEuUGFja2V0VHlwZS5ESVNDT05ORUNUOlxuICAgICAgICAgICAgICAgIHRoaXMub25kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHNvY2tldF9pb19wYXJzZXJfMS5QYWNrZXRUeXBlLkNPTk5FQ1RfRVJST1I6XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyID0gbmV3IEVycm9yKHBhY2tldC5kYXRhLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICBlcnIuZGF0YSA9IHBhY2tldC5kYXRhLmRhdGE7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0UmVzZXJ2ZWQoXCJjb25uZWN0X2Vycm9yXCIsIGVycik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHVwb24gYSBzZXJ2ZXIgZXZlbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcGFja2V0XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBvbmV2ZW50KHBhY2tldCkge1xuICAgICAgICBjb25zdCBhcmdzID0gcGFja2V0LmRhdGEgfHwgW107XG4gICAgICAgIGRlYnVnKFwiZW1pdHRpbmcgZXZlbnQgJWpcIiwgYXJncyk7XG4gICAgICAgIGlmIChudWxsICE9IHBhY2tldC5pZCkge1xuICAgICAgICAgICAgZGVidWcoXCJhdHRhY2hpbmcgYWNrIGNhbGxiYWNrIHRvIGV2ZW50XCIpO1xuICAgICAgICAgICAgYXJncy5wdXNoKHRoaXMuYWNrKHBhY2tldC5pZCkpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmNvbm5lY3RlZCkge1xuICAgICAgICAgICAgdGhpcy5lbWl0RXZlbnQoYXJncyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJlY2VpdmVCdWZmZXIucHVzaChPYmplY3QuZnJlZXplKGFyZ3MpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbWl0RXZlbnQoYXJncykge1xuICAgICAgICBpZiAodGhpcy5fYW55TGlzdGVuZXJzICYmIHRoaXMuX2FueUxpc3RlbmVycy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IGxpc3RlbmVycyA9IHRoaXMuX2FueUxpc3RlbmVycy5zbGljZSgpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBsaXN0ZW5lciBvZiBsaXN0ZW5lcnMpIHtcbiAgICAgICAgICAgICAgICBsaXN0ZW5lci5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzdXBlci5lbWl0LmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQcm9kdWNlcyBhbiBhY2sgY2FsbGJhY2sgdG8gZW1pdCB3aXRoIGFuIGV2ZW50LlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBhY2soaWQpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGxldCBzZW50ID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgICAgICAgICAgLy8gcHJldmVudCBkb3VibGUgY2FsbGJhY2tzXG4gICAgICAgICAgICBpZiAoc2VudClcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBzZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgIGRlYnVnKFwic2VuZGluZyBhY2sgJWpcIiwgYXJncyk7XG4gICAgICAgICAgICBzZWxmLnBhY2tldCh7XG4gICAgICAgICAgICAgICAgdHlwZTogc29ja2V0X2lvX3BhcnNlcl8xLlBhY2tldFR5cGUuQUNLLFxuICAgICAgICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICAgICAgICBkYXRhOiBhcmdzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxlZCB1cG9uIGEgc2VydmVyIGFja25vd2xlZ2VtZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIHBhY2tldFxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgb25hY2socGFja2V0KSB7XG4gICAgICAgIGNvbnN0IGFjayA9IHRoaXMuYWNrc1twYWNrZXQuaWRdO1xuICAgICAgICBpZiAoXCJmdW5jdGlvblwiID09PSB0eXBlb2YgYWNrKSB7XG4gICAgICAgICAgICBkZWJ1ZyhcImNhbGxpbmcgYWNrICVzIHdpdGggJWpcIiwgcGFja2V0LmlkLCBwYWNrZXQuZGF0YSk7XG4gICAgICAgICAgICBhY2suYXBwbHkodGhpcywgcGFja2V0LmRhdGEpO1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuYWNrc1twYWNrZXQuaWRdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZGVidWcoXCJiYWQgYWNrICVzXCIsIHBhY2tldC5pZCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHVwb24gc2VydmVyIGNvbm5lY3QuXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIG9uY29ubmVjdChpZCkge1xuICAgICAgICBkZWJ1ZyhcInNvY2tldCBjb25uZWN0ZWQgd2l0aCBpZCAlc1wiLCBpZCk7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5jb25uZWN0ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmRpc2Nvbm5lY3RlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmVtaXRCdWZmZXJlZCgpO1xuICAgICAgICB0aGlzLmVtaXRSZXNlcnZlZChcImNvbm5lY3RcIik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEVtaXQgYnVmZmVyZWQgZXZlbnRzIChyZWNlaXZlZCBhbmQgZW1pdHRlZCkuXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGVtaXRCdWZmZXJlZCgpIHtcbiAgICAgICAgdGhpcy5yZWNlaXZlQnVmZmVyLmZvckVhY2goKGFyZ3MpID0+IHRoaXMuZW1pdEV2ZW50KGFyZ3MpKTtcbiAgICAgICAgdGhpcy5yZWNlaXZlQnVmZmVyID0gW107XG4gICAgICAgIHRoaXMuc2VuZEJ1ZmZlci5mb3JFYWNoKChwYWNrZXQpID0+IHRoaXMucGFja2V0KHBhY2tldCkpO1xuICAgICAgICB0aGlzLnNlbmRCdWZmZXIgPSBbXTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHVwb24gc2VydmVyIGRpc2Nvbm5lY3QuXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIG9uZGlzY29ubmVjdCgpIHtcbiAgICAgICAgZGVidWcoXCJzZXJ2ZXIgZGlzY29ubmVjdCAoJXMpXCIsIHRoaXMubnNwKTtcbiAgICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMub25jbG9zZShcImlvIHNlcnZlciBkaXNjb25uZWN0XCIpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgdXBvbiBmb3JjZWQgY2xpZW50L3NlcnZlciBzaWRlIGRpc2Nvbm5lY3Rpb25zLFxuICAgICAqIHRoaXMgbWV0aG9kIGVuc3VyZXMgdGhlIG1hbmFnZXIgc3RvcHMgdHJhY2tpbmcgdXMgYW5kXG4gICAgICogdGhhdCByZWNvbm5lY3Rpb25zIGRvbid0IGdldCB0cmlnZ2VyZWQgZm9yIHRoaXMuXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh0aGlzLnN1YnMpIHtcbiAgICAgICAgICAgIC8vIGNsZWFuIHN1YnNjcmlwdGlvbnMgdG8gYXZvaWQgcmVjb25uZWN0aW9uc1xuICAgICAgICAgICAgdGhpcy5zdWJzLmZvckVhY2goKHN1YkRlc3Ryb3kpID0+IHN1YkRlc3Ryb3koKSk7XG4gICAgICAgICAgICB0aGlzLnN1YnMgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pb1tcIl9kZXN0cm95XCJdKHRoaXMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEaXNjb25uZWN0cyB0aGUgc29ja2V0IG1hbnVhbGx5LlxuICAgICAqXG4gICAgICogQHJldHVybiBzZWxmXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIGRpc2Nvbm5lY3QoKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbm5lY3RlZCkge1xuICAgICAgICAgICAgZGVidWcoXCJwZXJmb3JtaW5nIGRpc2Nvbm5lY3QgKCVzKVwiLCB0aGlzLm5zcCk7XG4gICAgICAgICAgICB0aGlzLnBhY2tldCh7IHR5cGU6IHNvY2tldF9pb19wYXJzZXJfMS5QYWNrZXRUeXBlLkRJU0NPTk5FQ1QgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gcmVtb3ZlIHNvY2tldCBmcm9tIHBvb2xcbiAgICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgICAgIGlmICh0aGlzLmNvbm5lY3RlZCkge1xuICAgICAgICAgICAgLy8gZmlyZSBldmVudHNcbiAgICAgICAgICAgIHRoaXMub25jbG9zZShcImlvIGNsaWVudCBkaXNjb25uZWN0XCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBbGlhcyBmb3IgZGlzY29ubmVjdCgpXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHNlbGZcbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgY2xvc2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRpc2Nvbm5lY3QoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgY29tcHJlc3MgZmxhZy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBjb21wcmVzcyAtIGlmIGB0cnVlYCwgY29tcHJlc3NlcyB0aGUgc2VuZGluZyBkYXRhXG4gICAgICogQHJldHVybiBzZWxmXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIGNvbXByZXNzKGNvbXByZXNzKSB7XG4gICAgICAgIHRoaXMuZmxhZ3MuY29tcHJlc3MgPSBjb21wcmVzcztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgYSBtb2RpZmllciBmb3IgYSBzdWJzZXF1ZW50IGV2ZW50IGVtaXNzaW9uIHRoYXQgdGhlIGV2ZW50IG1lc3NhZ2Ugd2lsbCBiZSBkcm9wcGVkIHdoZW4gdGhpcyBzb2NrZXQgaXMgbm90XG4gICAgICogcmVhZHkgdG8gc2VuZCBtZXNzYWdlcy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHNlbGZcbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgZ2V0IHZvbGF0aWxlKCkge1xuICAgICAgICB0aGlzLmZsYWdzLnZvbGF0aWxlID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFkZHMgYSBsaXN0ZW5lciB0aGF0IHdpbGwgYmUgZmlyZWQgd2hlbiBhbnkgZXZlbnQgaXMgZW1pdHRlZC4gVGhlIGV2ZW50IG5hbWUgaXMgcGFzc2VkIGFzIHRoZSBmaXJzdCBhcmd1bWVudCB0byB0aGVcbiAgICAgKiBjYWxsYmFjay5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBsaXN0ZW5lclxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBvbkFueShsaXN0ZW5lcikge1xuICAgICAgICB0aGlzLl9hbnlMaXN0ZW5lcnMgPSB0aGlzLl9hbnlMaXN0ZW5lcnMgfHwgW107XG4gICAgICAgIHRoaXMuX2FueUxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFkZHMgYSBsaXN0ZW5lciB0aGF0IHdpbGwgYmUgZmlyZWQgd2hlbiBhbnkgZXZlbnQgaXMgZW1pdHRlZC4gVGhlIGV2ZW50IG5hbWUgaXMgcGFzc2VkIGFzIHRoZSBmaXJzdCBhcmd1bWVudCB0byB0aGVcbiAgICAgKiBjYWxsYmFjay4gVGhlIGxpc3RlbmVyIGlzIGFkZGVkIHRvIHRoZSBiZWdpbm5pbmcgb2YgdGhlIGxpc3RlbmVycyBhcnJheS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBsaXN0ZW5lclxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBwcmVwZW5kQW55KGxpc3RlbmVyKSB7XG4gICAgICAgIHRoaXMuX2FueUxpc3RlbmVycyA9IHRoaXMuX2FueUxpc3RlbmVycyB8fCBbXTtcbiAgICAgICAgdGhpcy5fYW55TGlzdGVuZXJzLnVuc2hpZnQobGlzdGVuZXIpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyB0aGUgbGlzdGVuZXIgdGhhdCB3aWxsIGJlIGZpcmVkIHdoZW4gYW55IGV2ZW50IGlzIGVtaXR0ZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbGlzdGVuZXJcbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgb2ZmQW55KGxpc3RlbmVyKSB7XG4gICAgICAgIGlmICghdGhpcy5fYW55TGlzdGVuZXJzKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICBpZiAobGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IGxpc3RlbmVycyA9IHRoaXMuX2FueUxpc3RlbmVycztcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGxpc3RlbmVyID09PSBsaXN0ZW5lcnNbaV0pIHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fYW55TGlzdGVuZXJzID0gW107XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gYXJyYXkgb2YgbGlzdGVuZXJzIHRoYXQgYXJlIGxpc3RlbmluZyBmb3IgYW55IGV2ZW50IHRoYXQgaXMgc3BlY2lmaWVkLiBUaGlzIGFycmF5IGNhbiBiZSBtYW5pcHVsYXRlZCxcbiAgICAgKiBlLmcuIHRvIHJlbW92ZSBsaXN0ZW5lcnMuXG4gICAgICpcbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgbGlzdGVuZXJzQW55KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYW55TGlzdGVuZXJzIHx8IFtdO1xuICAgIH1cbn1cbmV4cG9ydHMuU29ja2V0ID0gU29ja2V0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlN0cmljdEV2ZW50RW1pdHRlciA9IHZvaWQgMDtcbmNvbnN0IEVtaXR0ZXIgPSByZXF1aXJlKFwiY29tcG9uZW50LWVtaXR0ZXJcIik7XG4vKipcbiAqIFN0cmljdGx5IHR5cGVkIHZlcnNpb24gb2YgYW4gYEV2ZW50RW1pdHRlcmAuIEEgYFR5cGVkRXZlbnRFbWl0dGVyYCB0YWtlcyB0eXBlXG4gKiBwYXJhbWV0ZXJzIGZvciBtYXBwaW5ncyBvZiBldmVudCBuYW1lcyB0byBldmVudCBkYXRhIHR5cGVzLCBhbmQgc3RyaWN0bHlcbiAqIHR5cGVzIG1ldGhvZCBjYWxscyB0byB0aGUgYEV2ZW50RW1pdHRlcmAgYWNjb3JkaW5nIHRvIHRoZXNlIGV2ZW50IG1hcHMuXG4gKlxuICogQHR5cGVQYXJhbSBMaXN0ZW5FdmVudHMgLSBgRXZlbnRzTWFwYCBvZiB1c2VyLWRlZmluZWQgZXZlbnRzIHRoYXQgY2FuIGJlXG4gKiBsaXN0ZW5lZCB0byB3aXRoIGBvbmAgb3IgYG9uY2VgXG4gKiBAdHlwZVBhcmFtIEVtaXRFdmVudHMgLSBgRXZlbnRzTWFwYCBvZiB1c2VyLWRlZmluZWQgZXZlbnRzIHRoYXQgY2FuIGJlXG4gKiBlbWl0dGVkIHdpdGggYGVtaXRgXG4gKiBAdHlwZVBhcmFtIFJlc2VydmVkRXZlbnRzIC0gYEV2ZW50c01hcGAgb2YgcmVzZXJ2ZWQgZXZlbnRzLCB0aGF0IGNhbiBiZVxuICogZW1pdHRlZCBieSBzb2NrZXQuaW8gd2l0aCBgZW1pdFJlc2VydmVkYCwgYW5kIGNhbiBiZSBsaXN0ZW5lZCB0byB3aXRoXG4gKiBgbGlzdGVuYC5cbiAqL1xuY2xhc3MgU3RyaWN0RXZlbnRFbWl0dGVyIGV4dGVuZHMgRW1pdHRlciB7XG4gICAgLyoqXG4gICAgICogQWRkcyB0aGUgYGxpc3RlbmVyYCBmdW5jdGlvbiBhcyBhbiBldmVudCBsaXN0ZW5lciBmb3IgYGV2YC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBldiBOYW1lIG9mIHRoZSBldmVudFxuICAgICAqIEBwYXJhbSBsaXN0ZW5lciBDYWxsYmFjayBmdW5jdGlvblxuICAgICAqL1xuICAgIG9uKGV2LCBsaXN0ZW5lcikge1xuICAgICAgICBzdXBlci5vbihldiwgbGlzdGVuZXIpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkcyBhIG9uZS10aW1lIGBsaXN0ZW5lcmAgZnVuY3Rpb24gYXMgYW4gZXZlbnQgbGlzdGVuZXIgZm9yIGBldmAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZXYgTmFtZSBvZiB0aGUgZXZlbnRcbiAgICAgKiBAcGFyYW0gbGlzdGVuZXIgQ2FsbGJhY2sgZnVuY3Rpb25cbiAgICAgKi9cbiAgICBvbmNlKGV2LCBsaXN0ZW5lcikge1xuICAgICAgICBzdXBlci5vbmNlKGV2LCBsaXN0ZW5lcik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBFbWl0cyBhbiBldmVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBldiBOYW1lIG9mIHRoZSBldmVudFxuICAgICAqIEBwYXJhbSBhcmdzIFZhbHVlcyB0byBzZW5kIHRvIGxpc3RlbmVycyBvZiB0aGlzIGV2ZW50XG4gICAgICovXG4gICAgZW1pdChldiwgLi4uYXJncykge1xuICAgICAgICBzdXBlci5lbWl0KGV2LCAuLi5hcmdzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEVtaXRzIGEgcmVzZXJ2ZWQgZXZlbnQuXG4gICAgICpcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBgcHJvdGVjdGVkYCwgc28gdGhhdCBvbmx5IGEgY2xhc3MgZXh0ZW5kaW5nXG4gICAgICogYFN0cmljdEV2ZW50RW1pdHRlcmAgY2FuIGVtaXQgaXRzIG93biByZXNlcnZlZCBldmVudHMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZXYgUmVzZXJ2ZWQgZXZlbnQgbmFtZVxuICAgICAqIEBwYXJhbSBhcmdzIEFyZ3VtZW50cyB0byBlbWl0IGFsb25nIHdpdGggdGhlIGV2ZW50XG4gICAgICovXG4gICAgZW1pdFJlc2VydmVkKGV2LCAuLi5hcmdzKSB7XG4gICAgICAgIHN1cGVyLmVtaXQoZXYsIC4uLmFyZ3MpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbGlzdGVuZXJzIGxpc3RlbmluZyB0byBhbiBldmVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBldmVudCBFdmVudCBuYW1lXG4gICAgICogQHJldHVybnMgQXJyYXkgb2YgbGlzdGVuZXJzIHN1YnNjcmliZWQgdG8gYGV2ZW50YFxuICAgICAqL1xuICAgIGxpc3RlbmVycyhldmVudCkge1xuICAgICAgICByZXR1cm4gc3VwZXIubGlzdGVuZXJzKGV2ZW50KTtcbiAgICB9XG59XG5leHBvcnRzLlN0cmljdEV2ZW50RW1pdHRlciA9IFN0cmljdEV2ZW50RW1pdHRlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy51cmwgPSB2b2lkIDA7XG5jb25zdCBwYXJzZXVyaSA9IHJlcXVpcmUoXCJwYXJzZXVyaVwiKTtcbmNvbnN0IGRlYnVnID0gcmVxdWlyZShcImRlYnVnXCIpKFwic29ja2V0LmlvLWNsaWVudDp1cmxcIik7XG4vKipcbiAqIFVSTCBwYXJzZXIuXG4gKlxuICogQHBhcmFtIHVyaSAtIHVybFxuICogQHBhcmFtIHBhdGggLSB0aGUgcmVxdWVzdCBwYXRoIG9mIHRoZSBjb25uZWN0aW9uXG4gKiBAcGFyYW0gbG9jIC0gQW4gb2JqZWN0IG1lYW50IHRvIG1pbWljIHdpbmRvdy5sb2NhdGlvbi5cbiAqICAgICAgICBEZWZhdWx0cyB0byB3aW5kb3cubG9jYXRpb24uXG4gKiBAcHVibGljXG4gKi9cbmZ1bmN0aW9uIHVybCh1cmksIHBhdGggPSBcIlwiLCBsb2MpIHtcbiAgICBsZXQgb2JqID0gdXJpO1xuICAgIC8vIGRlZmF1bHQgdG8gd2luZG93LmxvY2F0aW9uXG4gICAgbG9jID0gbG9jIHx8ICh0eXBlb2YgbG9jYXRpb24gIT09IFwidW5kZWZpbmVkXCIgJiYgbG9jYXRpb24pO1xuICAgIGlmIChudWxsID09IHVyaSlcbiAgICAgICAgdXJpID0gbG9jLnByb3RvY29sICsgXCIvL1wiICsgbG9jLmhvc3Q7XG4gICAgLy8gcmVsYXRpdmUgcGF0aCBzdXBwb3J0XG4gICAgaWYgKHR5cGVvZiB1cmkgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgaWYgKFwiL1wiID09PSB1cmkuY2hhckF0KDApKSB7XG4gICAgICAgICAgICBpZiAoXCIvXCIgPT09IHVyaS5jaGFyQXQoMSkpIHtcbiAgICAgICAgICAgICAgICB1cmkgPSBsb2MucHJvdG9jb2wgKyB1cmk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB1cmkgPSBsb2MuaG9zdCArIHVyaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIS9eKGh0dHBzP3x3c3M/KTpcXC9cXC8vLnRlc3QodXJpKSkge1xuICAgICAgICAgICAgZGVidWcoXCJwcm90b2NvbC1sZXNzIHVybCAlc1wiLCB1cmkpO1xuICAgICAgICAgICAgaWYgKFwidW5kZWZpbmVkXCIgIT09IHR5cGVvZiBsb2MpIHtcbiAgICAgICAgICAgICAgICB1cmkgPSBsb2MucHJvdG9jb2wgKyBcIi8vXCIgKyB1cmk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB1cmkgPSBcImh0dHBzOi8vXCIgKyB1cmk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gcGFyc2VcbiAgICAgICAgZGVidWcoXCJwYXJzZSAlc1wiLCB1cmkpO1xuICAgICAgICBvYmogPSBwYXJzZXVyaSh1cmkpO1xuICAgIH1cbiAgICAvLyBtYWtlIHN1cmUgd2UgdHJlYXQgYGxvY2FsaG9zdDo4MGAgYW5kIGBsb2NhbGhvc3RgIGVxdWFsbHlcbiAgICBpZiAoIW9iai5wb3J0KSB7XG4gICAgICAgIGlmICgvXihodHRwfHdzKSQvLnRlc3Qob2JqLnByb3RvY29sKSkge1xuICAgICAgICAgICAgb2JqLnBvcnQgPSBcIjgwXCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoL14oaHR0cHx3cylzJC8udGVzdChvYmoucHJvdG9jb2wpKSB7XG4gICAgICAgICAgICBvYmoucG9ydCA9IFwiNDQzXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgb2JqLnBhdGggPSBvYmoucGF0aCB8fCBcIi9cIjtcbiAgICBjb25zdCBpcHY2ID0gb2JqLmhvc3QuaW5kZXhPZihcIjpcIikgIT09IC0xO1xuICAgIGNvbnN0IGhvc3QgPSBpcHY2ID8gXCJbXCIgKyBvYmouaG9zdCArIFwiXVwiIDogb2JqLmhvc3Q7XG4gICAgLy8gZGVmaW5lIHVuaXF1ZSBpZFxuICAgIG9iai5pZCA9IG9iai5wcm90b2NvbCArIFwiOi8vXCIgKyBob3N0ICsgXCI6XCIgKyBvYmoucG9ydCArIHBhdGg7XG4gICAgLy8gZGVmaW5lIGhyZWZcbiAgICBvYmouaHJlZiA9XG4gICAgICAgIG9iai5wcm90b2NvbCArXG4gICAgICAgICAgICBcIjovL1wiICtcbiAgICAgICAgICAgIGhvc3QgK1xuICAgICAgICAgICAgKGxvYyAmJiBsb2MucG9ydCA9PT0gb2JqLnBvcnQgPyBcIlwiIDogXCI6XCIgKyBvYmoucG9ydCk7XG4gICAgcmV0dXJuIG9iajtcbn1cbmV4cG9ydHMudXJsID0gdXJsO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnJlY29uc3RydWN0UGFja2V0ID0gZXhwb3J0cy5kZWNvbnN0cnVjdFBhY2tldCA9IHZvaWQgMDtcbmNvbnN0IGlzX2JpbmFyeV8xID0gcmVxdWlyZShcIi4vaXMtYmluYXJ5XCIpO1xuLyoqXG4gKiBSZXBsYWNlcyBldmVyeSBCdWZmZXIgfCBBcnJheUJ1ZmZlciB8IEJsb2IgfCBGaWxlIGluIHBhY2tldCB3aXRoIGEgbnVtYmVyZWQgcGxhY2Vob2xkZXIuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHBhY2tldCAtIHNvY2tldC5pbyBldmVudCBwYWNrZXRcbiAqIEByZXR1cm4ge09iamVjdH0gd2l0aCBkZWNvbnN0cnVjdGVkIHBhY2tldCBhbmQgbGlzdCBvZiBidWZmZXJzXG4gKiBAcHVibGljXG4gKi9cbmZ1bmN0aW9uIGRlY29uc3RydWN0UGFja2V0KHBhY2tldCkge1xuICAgIGNvbnN0IGJ1ZmZlcnMgPSBbXTtcbiAgICBjb25zdCBwYWNrZXREYXRhID0gcGFja2V0LmRhdGE7XG4gICAgY29uc3QgcGFjayA9IHBhY2tldDtcbiAgICBwYWNrLmRhdGEgPSBfZGVjb25zdHJ1Y3RQYWNrZXQocGFja2V0RGF0YSwgYnVmZmVycyk7XG4gICAgcGFjay5hdHRhY2htZW50cyA9IGJ1ZmZlcnMubGVuZ3RoOyAvLyBudW1iZXIgb2YgYmluYXJ5ICdhdHRhY2htZW50cydcbiAgICByZXR1cm4geyBwYWNrZXQ6IHBhY2ssIGJ1ZmZlcnM6IGJ1ZmZlcnMgfTtcbn1cbmV4cG9ydHMuZGVjb25zdHJ1Y3RQYWNrZXQgPSBkZWNvbnN0cnVjdFBhY2tldDtcbmZ1bmN0aW9uIF9kZWNvbnN0cnVjdFBhY2tldChkYXRhLCBidWZmZXJzKSB7XG4gICAgaWYgKCFkYXRhKVxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICBpZiAoaXNfYmluYXJ5XzEuaXNCaW5hcnkoZGF0YSkpIHtcbiAgICAgICAgY29uc3QgcGxhY2Vob2xkZXIgPSB7IF9wbGFjZWhvbGRlcjogdHJ1ZSwgbnVtOiBidWZmZXJzLmxlbmd0aCB9O1xuICAgICAgICBidWZmZXJzLnB1c2goZGF0YSk7XG4gICAgICAgIHJldHVybiBwbGFjZWhvbGRlcjtcbiAgICB9XG4gICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgICAgICBjb25zdCBuZXdEYXRhID0gbmV3IEFycmF5KGRhdGEubGVuZ3RoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBuZXdEYXRhW2ldID0gX2RlY29uc3RydWN0UGFja2V0KGRhdGFbaV0sIGJ1ZmZlcnMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdEYXRhO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgZGF0YSA9PT0gXCJvYmplY3RcIiAmJiAhKGRhdGEgaW5zdGFuY2VvZiBEYXRlKSkge1xuICAgICAgICBjb25zdCBuZXdEYXRhID0ge307XG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIGRhdGEpIHtcbiAgICAgICAgICAgIGlmIChkYXRhLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBuZXdEYXRhW2tleV0gPSBfZGVjb25zdHJ1Y3RQYWNrZXQoZGF0YVtrZXldLCBidWZmZXJzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3RGF0YTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG59XG4vKipcbiAqIFJlY29uc3RydWN0cyBhIGJpbmFyeSBwYWNrZXQgZnJvbSBpdHMgcGxhY2Vob2xkZXIgcGFja2V0IGFuZCBidWZmZXJzXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHBhY2tldCAtIGV2ZW50IHBhY2tldCB3aXRoIHBsYWNlaG9sZGVyc1xuICogQHBhcmFtIHtBcnJheX0gYnVmZmVycyAtIGJpbmFyeSBidWZmZXJzIHRvIHB1dCBpbiBwbGFjZWhvbGRlciBwb3NpdGlvbnNcbiAqIEByZXR1cm4ge09iamVjdH0gcmVjb25zdHJ1Y3RlZCBwYWNrZXRcbiAqIEBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gcmVjb25zdHJ1Y3RQYWNrZXQocGFja2V0LCBidWZmZXJzKSB7XG4gICAgcGFja2V0LmRhdGEgPSBfcmVjb25zdHJ1Y3RQYWNrZXQocGFja2V0LmRhdGEsIGJ1ZmZlcnMpO1xuICAgIHBhY2tldC5hdHRhY2htZW50cyA9IHVuZGVmaW5lZDsgLy8gbm8gbG9uZ2VyIHVzZWZ1bFxuICAgIHJldHVybiBwYWNrZXQ7XG59XG5leHBvcnRzLnJlY29uc3RydWN0UGFja2V0ID0gcmVjb25zdHJ1Y3RQYWNrZXQ7XG5mdW5jdGlvbiBfcmVjb25zdHJ1Y3RQYWNrZXQoZGF0YSwgYnVmZmVycykge1xuICAgIGlmICghZGF0YSlcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgaWYgKGRhdGEgJiYgZGF0YS5fcGxhY2Vob2xkZXIpIHtcbiAgICAgICAgcmV0dXJuIGJ1ZmZlcnNbZGF0YS5udW1dOyAvLyBhcHByb3ByaWF0ZSBidWZmZXIgKHNob3VsZCBiZSBuYXR1cmFsIG9yZGVyIGFueXdheSlcbiAgICB9XG4gICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGRhdGFbaV0gPSBfcmVjb25zdHJ1Y3RQYWNrZXQoZGF0YVtpXSwgYnVmZmVycyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIGRhdGEgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gZGF0YSkge1xuICAgICAgICAgICAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIGRhdGFba2V5XSA9IF9yZWNvbnN0cnVjdFBhY2tldChkYXRhW2tleV0sIGJ1ZmZlcnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkRlY29kZXIgPSBleHBvcnRzLkVuY29kZXIgPSBleHBvcnRzLlBhY2tldFR5cGUgPSBleHBvcnRzLnByb3RvY29sID0gdm9pZCAwO1xuY29uc3QgRW1pdHRlciA9IHJlcXVpcmUoXCJjb21wb25lbnQtZW1pdHRlclwiKTtcbmNvbnN0IGJpbmFyeV8xID0gcmVxdWlyZShcIi4vYmluYXJ5XCIpO1xuY29uc3QgaXNfYmluYXJ5XzEgPSByZXF1aXJlKFwiLi9pcy1iaW5hcnlcIik7XG5jb25zdCBkZWJ1ZyA9IHJlcXVpcmUoXCJkZWJ1Z1wiKShcInNvY2tldC5pby1wYXJzZXJcIik7XG4vKipcbiAqIFByb3RvY29sIHZlcnNpb24uXG4gKlxuICogQHB1YmxpY1xuICovXG5leHBvcnRzLnByb3RvY29sID0gNTtcbnZhciBQYWNrZXRUeXBlO1xuKGZ1bmN0aW9uIChQYWNrZXRUeXBlKSB7XG4gICAgUGFja2V0VHlwZVtQYWNrZXRUeXBlW1wiQ09OTkVDVFwiXSA9IDBdID0gXCJDT05ORUNUXCI7XG4gICAgUGFja2V0VHlwZVtQYWNrZXRUeXBlW1wiRElTQ09OTkVDVFwiXSA9IDFdID0gXCJESVNDT05ORUNUXCI7XG4gICAgUGFja2V0VHlwZVtQYWNrZXRUeXBlW1wiRVZFTlRcIl0gPSAyXSA9IFwiRVZFTlRcIjtcbiAgICBQYWNrZXRUeXBlW1BhY2tldFR5cGVbXCJBQ0tcIl0gPSAzXSA9IFwiQUNLXCI7XG4gICAgUGFja2V0VHlwZVtQYWNrZXRUeXBlW1wiQ09OTkVDVF9FUlJPUlwiXSA9IDRdID0gXCJDT05ORUNUX0VSUk9SXCI7XG4gICAgUGFja2V0VHlwZVtQYWNrZXRUeXBlW1wiQklOQVJZX0VWRU5UXCJdID0gNV0gPSBcIkJJTkFSWV9FVkVOVFwiO1xuICAgIFBhY2tldFR5cGVbUGFja2V0VHlwZVtcIkJJTkFSWV9BQ0tcIl0gPSA2XSA9IFwiQklOQVJZX0FDS1wiO1xufSkoUGFja2V0VHlwZSA9IGV4cG9ydHMuUGFja2V0VHlwZSB8fCAoZXhwb3J0cy5QYWNrZXRUeXBlID0ge30pKTtcbi8qKlxuICogQSBzb2NrZXQuaW8gRW5jb2RlciBpbnN0YW5jZVxuICovXG5jbGFzcyBFbmNvZGVyIHtcbiAgICAvKipcbiAgICAgKiBFbmNvZGUgYSBwYWNrZXQgYXMgYSBzaW5nbGUgc3RyaW5nIGlmIG5vbi1iaW5hcnksIG9yIGFzIGFcbiAgICAgKiBidWZmZXIgc2VxdWVuY2UsIGRlcGVuZGluZyBvbiBwYWNrZXQgdHlwZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvYmogLSBwYWNrZXQgb2JqZWN0XG4gICAgICovXG4gICAgZW5jb2RlKG9iaikge1xuICAgICAgICBkZWJ1ZyhcImVuY29kaW5nIHBhY2tldCAlalwiLCBvYmopO1xuICAgICAgICBpZiAob2JqLnR5cGUgPT09IFBhY2tldFR5cGUuRVZFTlQgfHwgb2JqLnR5cGUgPT09IFBhY2tldFR5cGUuQUNLKSB7XG4gICAgICAgICAgICBpZiAoaXNfYmluYXJ5XzEuaGFzQmluYXJ5KG9iaikpIHtcbiAgICAgICAgICAgICAgICBvYmoudHlwZSA9XG4gICAgICAgICAgICAgICAgICAgIG9iai50eXBlID09PSBQYWNrZXRUeXBlLkVWRU5UXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFBhY2tldFR5cGUuQklOQVJZX0VWRU5UXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFBhY2tldFR5cGUuQklOQVJZX0FDSztcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5lbmNvZGVBc0JpbmFyeShvYmopO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbdGhpcy5lbmNvZGVBc1N0cmluZyhvYmopXTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRW5jb2RlIHBhY2tldCBhcyBzdHJpbmcuXG4gICAgICovXG4gICAgZW5jb2RlQXNTdHJpbmcob2JqKSB7XG4gICAgICAgIC8vIGZpcnN0IGlzIHR5cGVcbiAgICAgICAgbGV0IHN0ciA9IFwiXCIgKyBvYmoudHlwZTtcbiAgICAgICAgLy8gYXR0YWNobWVudHMgaWYgd2UgaGF2ZSB0aGVtXG4gICAgICAgIGlmIChvYmoudHlwZSA9PT0gUGFja2V0VHlwZS5CSU5BUllfRVZFTlQgfHxcbiAgICAgICAgICAgIG9iai50eXBlID09PSBQYWNrZXRUeXBlLkJJTkFSWV9BQ0spIHtcbiAgICAgICAgICAgIHN0ciArPSBvYmouYXR0YWNobWVudHMgKyBcIi1cIjtcbiAgICAgICAgfVxuICAgICAgICAvLyBpZiB3ZSBoYXZlIGEgbmFtZXNwYWNlIG90aGVyIHRoYW4gYC9gXG4gICAgICAgIC8vIHdlIGFwcGVuZCBpdCBmb2xsb3dlZCBieSBhIGNvbW1hIGAsYFxuICAgICAgICBpZiAob2JqLm5zcCAmJiBcIi9cIiAhPT0gb2JqLm5zcCkge1xuICAgICAgICAgICAgc3RyICs9IG9iai5uc3AgKyBcIixcIjtcbiAgICAgICAgfVxuICAgICAgICAvLyBpbW1lZGlhdGVseSBmb2xsb3dlZCBieSB0aGUgaWRcbiAgICAgICAgaWYgKG51bGwgIT0gb2JqLmlkKSB7XG4gICAgICAgICAgICBzdHIgKz0gb2JqLmlkO1xuICAgICAgICB9XG4gICAgICAgIC8vIGpzb24gZGF0YVxuICAgICAgICBpZiAobnVsbCAhPSBvYmouZGF0YSkge1xuICAgICAgICAgICAgc3RyICs9IEpTT04uc3RyaW5naWZ5KG9iai5kYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBkZWJ1ZyhcImVuY29kZWQgJWogYXMgJXNcIiwgb2JqLCBzdHIpO1xuICAgICAgICByZXR1cm4gc3RyO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBFbmNvZGUgcGFja2V0IGFzICdidWZmZXIgc2VxdWVuY2UnIGJ5IHJlbW92aW5nIGJsb2JzLCBhbmRcbiAgICAgKiBkZWNvbnN0cnVjdGluZyBwYWNrZXQgaW50byBvYmplY3Qgd2l0aCBwbGFjZWhvbGRlcnMgYW5kXG4gICAgICogYSBsaXN0IG9mIGJ1ZmZlcnMuXG4gICAgICovXG4gICAgZW5jb2RlQXNCaW5hcnkob2JqKSB7XG4gICAgICAgIGNvbnN0IGRlY29uc3RydWN0aW9uID0gYmluYXJ5XzEuZGVjb25zdHJ1Y3RQYWNrZXQob2JqKTtcbiAgICAgICAgY29uc3QgcGFjayA9IHRoaXMuZW5jb2RlQXNTdHJpbmcoZGVjb25zdHJ1Y3Rpb24ucGFja2V0KTtcbiAgICAgICAgY29uc3QgYnVmZmVycyA9IGRlY29uc3RydWN0aW9uLmJ1ZmZlcnM7XG4gICAgICAgIGJ1ZmZlcnMudW5zaGlmdChwYWNrKTsgLy8gYWRkIHBhY2tldCBpbmZvIHRvIGJlZ2lubmluZyBvZiBkYXRhIGxpc3RcbiAgICAgICAgcmV0dXJuIGJ1ZmZlcnM7IC8vIHdyaXRlIGFsbCB0aGUgYnVmZmVyc1xuICAgIH1cbn1cbmV4cG9ydHMuRW5jb2RlciA9IEVuY29kZXI7XG4vKipcbiAqIEEgc29ja2V0LmlvIERlY29kZXIgaW5zdGFuY2VcbiAqXG4gKiBAcmV0dXJuIHtPYmplY3R9IGRlY29kZXJcbiAqL1xuY2xhc3MgRGVjb2RlciBleHRlbmRzIEVtaXR0ZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEZWNvZGVzIGFuIGVuY29kZWQgcGFja2V0IHN0cmluZyBpbnRvIHBhY2tldCBKU09OLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9iaiAtIGVuY29kZWQgcGFja2V0XG4gICAgICovXG4gICAgYWRkKG9iaikge1xuICAgICAgICBsZXQgcGFja2V0O1xuICAgICAgICBpZiAodHlwZW9mIG9iaiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgcGFja2V0ID0gdGhpcy5kZWNvZGVTdHJpbmcob2JqKTtcbiAgICAgICAgICAgIGlmIChwYWNrZXQudHlwZSA9PT0gUGFja2V0VHlwZS5CSU5BUllfRVZFTlQgfHxcbiAgICAgICAgICAgICAgICBwYWNrZXQudHlwZSA9PT0gUGFja2V0VHlwZS5CSU5BUllfQUNLKSB7XG4gICAgICAgICAgICAgICAgLy8gYmluYXJ5IHBhY2tldCdzIGpzb25cbiAgICAgICAgICAgICAgICB0aGlzLnJlY29uc3RydWN0b3IgPSBuZXcgQmluYXJ5UmVjb25zdHJ1Y3RvcihwYWNrZXQpO1xuICAgICAgICAgICAgICAgIC8vIG5vIGF0dGFjaG1lbnRzLCBsYWJlbGVkIGJpbmFyeSBidXQgbm8gYmluYXJ5IGRhdGEgdG8gZm9sbG93XG4gICAgICAgICAgICAgICAgaWYgKHBhY2tldC5hdHRhY2htZW50cyA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBzdXBlci5lbWl0KFwiZGVjb2RlZFwiLCBwYWNrZXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIG5vbi1iaW5hcnkgZnVsbCBwYWNrZXRcbiAgICAgICAgICAgICAgICBzdXBlci5lbWl0KFwiZGVjb2RlZFwiLCBwYWNrZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzX2JpbmFyeV8xLmlzQmluYXJ5KG9iaikgfHwgb2JqLmJhc2U2NCkge1xuICAgICAgICAgICAgLy8gcmF3IGJpbmFyeSBkYXRhXG4gICAgICAgICAgICBpZiAoIXRoaXMucmVjb25zdHJ1Y3Rvcikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImdvdCBiaW5hcnkgZGF0YSB3aGVuIG5vdCByZWNvbnN0cnVjdGluZyBhIHBhY2tldFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhY2tldCA9IHRoaXMucmVjb25zdHJ1Y3Rvci50YWtlQmluYXJ5RGF0YShvYmopO1xuICAgICAgICAgICAgICAgIGlmIChwYWNrZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVjZWl2ZWQgZmluYWwgYnVmZmVyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVjb25zdHJ1Y3RvciA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHN1cGVyLmVtaXQoXCJkZWNvZGVkXCIsIHBhY2tldCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5rbm93biB0eXBlOiBcIiArIG9iaik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogRGVjb2RlIGEgcGFja2V0IFN0cmluZyAoSlNPTiBkYXRhKVxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICAgICAqIEByZXR1cm4ge09iamVjdH0gcGFja2V0XG4gICAgICovXG4gICAgZGVjb2RlU3RyaW5nKHN0cikge1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIC8vIGxvb2sgdXAgdHlwZVxuICAgICAgICBjb25zdCBwID0ge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyKHN0ci5jaGFyQXQoMCkpLFxuICAgICAgICB9O1xuICAgICAgICBpZiAoUGFja2V0VHlwZVtwLnR5cGVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInVua25vd24gcGFja2V0IHR5cGUgXCIgKyBwLnR5cGUpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGxvb2sgdXAgYXR0YWNobWVudHMgaWYgdHlwZSBiaW5hcnlcbiAgICAgICAgaWYgKHAudHlwZSA9PT0gUGFja2V0VHlwZS5CSU5BUllfRVZFTlQgfHxcbiAgICAgICAgICAgIHAudHlwZSA9PT0gUGFja2V0VHlwZS5CSU5BUllfQUNLKSB7XG4gICAgICAgICAgICBjb25zdCBzdGFydCA9IGkgKyAxO1xuICAgICAgICAgICAgd2hpbGUgKHN0ci5jaGFyQXQoKytpKSAhPT0gXCItXCIgJiYgaSAhPSBzdHIubGVuZ3RoKSB7IH1cbiAgICAgICAgICAgIGNvbnN0IGJ1ZiA9IHN0ci5zdWJzdHJpbmcoc3RhcnQsIGkpO1xuICAgICAgICAgICAgaWYgKGJ1ZiAhPSBOdW1iZXIoYnVmKSB8fCBzdHIuY2hhckF0KGkpICE9PSBcIi1cIikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIklsbGVnYWwgYXR0YWNobWVudHNcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwLmF0dGFjaG1lbnRzID0gTnVtYmVyKGJ1Zik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gbG9vayB1cCBuYW1lc3BhY2UgKGlmIGFueSlcbiAgICAgICAgaWYgKFwiL1wiID09PSBzdHIuY2hhckF0KGkgKyAxKSkge1xuICAgICAgICAgICAgY29uc3Qgc3RhcnQgPSBpICsgMTtcbiAgICAgICAgICAgIHdoaWxlICgrK2kpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjID0gc3RyLmNoYXJBdChpKTtcbiAgICAgICAgICAgICAgICBpZiAoXCIsXCIgPT09IGMpXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGlmIChpID09PSBzdHIubGVuZ3RoKVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHAubnNwID0gc3RyLnN1YnN0cmluZyhzdGFydCwgaSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwLm5zcCA9IFwiL1wiO1xuICAgICAgICB9XG4gICAgICAgIC8vIGxvb2sgdXAgaWRcbiAgICAgICAgY29uc3QgbmV4dCA9IHN0ci5jaGFyQXQoaSArIDEpO1xuICAgICAgICBpZiAoXCJcIiAhPT0gbmV4dCAmJiBOdW1iZXIobmV4dCkgPT0gbmV4dCkge1xuICAgICAgICAgICAgY29uc3Qgc3RhcnQgPSBpICsgMTtcbiAgICAgICAgICAgIHdoaWxlICgrK2kpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjID0gc3RyLmNoYXJBdChpKTtcbiAgICAgICAgICAgICAgICBpZiAobnVsbCA9PSBjIHx8IE51bWJlcihjKSAhPSBjKSB7XG4gICAgICAgICAgICAgICAgICAgIC0taTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChpID09PSBzdHIubGVuZ3RoKVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHAuaWQgPSBOdW1iZXIoc3RyLnN1YnN0cmluZyhzdGFydCwgaSArIDEpKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBsb29rIHVwIGpzb24gZGF0YVxuICAgICAgICBpZiAoc3RyLmNoYXJBdCgrK2kpKSB7XG4gICAgICAgICAgICBjb25zdCBwYXlsb2FkID0gdHJ5UGFyc2Uoc3RyLnN1YnN0cihpKSk7XG4gICAgICAgICAgICBpZiAoRGVjb2Rlci5pc1BheWxvYWRWYWxpZChwLnR5cGUsIHBheWxvYWQpKSB7XG4gICAgICAgICAgICAgICAgcC5kYXRhID0gcGF5bG9hZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImludmFsaWQgcGF5bG9hZFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBkZWJ1ZyhcImRlY29kZWQgJXMgYXMgJWpcIiwgc3RyLCBwKTtcbiAgICAgICAgcmV0dXJuIHA7XG4gICAgfVxuICAgIHN0YXRpYyBpc1BheWxvYWRWYWxpZCh0eXBlLCBwYXlsb2FkKSB7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSBQYWNrZXRUeXBlLkNPTk5FQ1Q6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiBwYXlsb2FkID09PSBcIm9iamVjdFwiO1xuICAgICAgICAgICAgY2FzZSBQYWNrZXRUeXBlLkRJU0NPTk5FQ1Q6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBheWxvYWQgPT09IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGNhc2UgUGFja2V0VHlwZS5DT05ORUNUX0VSUk9SOlxuICAgICAgICAgICAgICAgIHJldHVybiB0eXBlb2YgcGF5bG9hZCA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgcGF5bG9hZCA9PT0gXCJvYmplY3RcIjtcbiAgICAgICAgICAgIGNhc2UgUGFja2V0VHlwZS5FVkVOVDpcbiAgICAgICAgICAgIGNhc2UgUGFja2V0VHlwZS5CSU5BUllfRVZFTlQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkocGF5bG9hZCkgJiYgcGF5bG9hZC5sZW5ndGggPiAwO1xuICAgICAgICAgICAgY2FzZSBQYWNrZXRUeXBlLkFDSzpcbiAgICAgICAgICAgIGNhc2UgUGFja2V0VHlwZS5CSU5BUllfQUNLOlxuICAgICAgICAgICAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KHBheWxvYWQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERlYWxsb2NhdGVzIGEgcGFyc2VyJ3MgcmVzb3VyY2VzXG4gICAgICovXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMucmVjb25zdHJ1Y3Rvcikge1xuICAgICAgICAgICAgdGhpcy5yZWNvbnN0cnVjdG9yLmZpbmlzaGVkUmVjb25zdHJ1Y3Rpb24oKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuRGVjb2RlciA9IERlY29kZXI7XG5mdW5jdGlvbiB0cnlQYXJzZShzdHIpIHtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShzdHIpO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuLyoqXG4gKiBBIG1hbmFnZXIgb2YgYSBiaW5hcnkgZXZlbnQncyAnYnVmZmVyIHNlcXVlbmNlJy4gU2hvdWxkXG4gKiBiZSBjb25zdHJ1Y3RlZCB3aGVuZXZlciBhIHBhY2tldCBvZiB0eXBlIEJJTkFSWV9FVkVOVCBpc1xuICogZGVjb2RlZC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcGFja2V0XG4gKiBAcmV0dXJuIHtCaW5hcnlSZWNvbnN0cnVjdG9yfSBpbml0aWFsaXplZCByZWNvbnN0cnVjdG9yXG4gKi9cbmNsYXNzIEJpbmFyeVJlY29uc3RydWN0b3Ige1xuICAgIGNvbnN0cnVjdG9yKHBhY2tldCkge1xuICAgICAgICB0aGlzLnBhY2tldCA9IHBhY2tldDtcbiAgICAgICAgdGhpcy5idWZmZXJzID0gW107XG4gICAgICAgIHRoaXMucmVjb25QYWNrID0gcGFja2V0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBNZXRob2QgdG8gYmUgY2FsbGVkIHdoZW4gYmluYXJ5IGRhdGEgcmVjZWl2ZWQgZnJvbSBjb25uZWN0aW9uXG4gICAgICogYWZ0ZXIgYSBCSU5BUllfRVZFTlQgcGFja2V0LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtCdWZmZXIgfCBBcnJheUJ1ZmZlcn0gYmluRGF0YSAtIHRoZSByYXcgYmluYXJ5IGRhdGEgcmVjZWl2ZWRcbiAgICAgKiBAcmV0dXJuIHtudWxsIHwgT2JqZWN0fSByZXR1cm5zIG51bGwgaWYgbW9yZSBiaW5hcnkgZGF0YSBpcyBleHBlY3RlZCBvclxuICAgICAqICAgYSByZWNvbnN0cnVjdGVkIHBhY2tldCBvYmplY3QgaWYgYWxsIGJ1ZmZlcnMgaGF2ZSBiZWVuIHJlY2VpdmVkLlxuICAgICAqL1xuICAgIHRha2VCaW5hcnlEYXRhKGJpbkRhdGEpIHtcbiAgICAgICAgdGhpcy5idWZmZXJzLnB1c2goYmluRGF0YSk7XG4gICAgICAgIGlmICh0aGlzLmJ1ZmZlcnMubGVuZ3RoID09PSB0aGlzLnJlY29uUGFjay5hdHRhY2htZW50cykge1xuICAgICAgICAgICAgLy8gZG9uZSB3aXRoIGJ1ZmZlciBsaXN0XG4gICAgICAgICAgICBjb25zdCBwYWNrZXQgPSBiaW5hcnlfMS5yZWNvbnN0cnVjdFBhY2tldCh0aGlzLnJlY29uUGFjaywgdGhpcy5idWZmZXJzKTtcbiAgICAgICAgICAgIHRoaXMuZmluaXNoZWRSZWNvbnN0cnVjdGlvbigpO1xuICAgICAgICAgICAgcmV0dXJuIHBhY2tldDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2xlYW5zIHVwIGJpbmFyeSBwYWNrZXQgcmVjb25zdHJ1Y3Rpb24gdmFyaWFibGVzLlxuICAgICAqL1xuICAgIGZpbmlzaGVkUmVjb25zdHJ1Y3Rpb24oKSB7XG4gICAgICAgIHRoaXMucmVjb25QYWNrID0gbnVsbDtcbiAgICAgICAgdGhpcy5idWZmZXJzID0gW107XG4gICAgfVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmhhc0JpbmFyeSA9IGV4cG9ydHMuaXNCaW5hcnkgPSB2b2lkIDA7XG5jb25zdCB3aXRoTmF0aXZlQXJyYXlCdWZmZXIgPSB0eXBlb2YgQXJyYXlCdWZmZXIgPT09IFwiZnVuY3Rpb25cIjtcbmNvbnN0IGlzVmlldyA9IChvYmopID0+IHtcbiAgICByZXR1cm4gdHlwZW9mIEFycmF5QnVmZmVyLmlzVmlldyA9PT0gXCJmdW5jdGlvblwiXG4gICAgICAgID8gQXJyYXlCdWZmZXIuaXNWaWV3KG9iailcbiAgICAgICAgOiBvYmouYnVmZmVyIGluc3RhbmNlb2YgQXJyYXlCdWZmZXI7XG59O1xuY29uc3QgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuY29uc3Qgd2l0aE5hdGl2ZUJsb2IgPSB0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiIHx8XG4gICAgKHR5cGVvZiBCbG9iICE9PSBcInVuZGVmaW5lZFwiICYmXG4gICAgICAgIHRvU3RyaW5nLmNhbGwoQmxvYikgPT09IFwiW29iamVjdCBCbG9iQ29uc3RydWN0b3JdXCIpO1xuY29uc3Qgd2l0aE5hdGl2ZUZpbGUgPSB0eXBlb2YgRmlsZSA9PT0gXCJmdW5jdGlvblwiIHx8XG4gICAgKHR5cGVvZiBGaWxlICE9PSBcInVuZGVmaW5lZFwiICYmXG4gICAgICAgIHRvU3RyaW5nLmNhbGwoRmlsZSkgPT09IFwiW29iamVjdCBGaWxlQ29uc3RydWN0b3JdXCIpO1xuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgb2JqIGlzIGEgQnVmZmVyLCBhbiBBcnJheUJ1ZmZlciwgYSBCbG9iIG9yIGEgRmlsZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBpc0JpbmFyeShvYmopIHtcbiAgICByZXR1cm4gKCh3aXRoTmF0aXZlQXJyYXlCdWZmZXIgJiYgKG9iaiBpbnN0YW5jZW9mIEFycmF5QnVmZmVyIHx8IGlzVmlldyhvYmopKSkgfHxcbiAgICAgICAgKHdpdGhOYXRpdmVCbG9iICYmIG9iaiBpbnN0YW5jZW9mIEJsb2IpIHx8XG4gICAgICAgICh3aXRoTmF0aXZlRmlsZSAmJiBvYmogaW5zdGFuY2VvZiBGaWxlKSk7XG59XG5leHBvcnRzLmlzQmluYXJ5ID0gaXNCaW5hcnk7XG5mdW5jdGlvbiBoYXNCaW5hcnkob2JqLCB0b0pTT04pIHtcbiAgICBpZiAoIW9iaiB8fCB0eXBlb2Ygb2JqICE9PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKEFycmF5LmlzQXJyYXkob2JqKSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgbCA9IG9iai5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChoYXNCaW5hcnkob2JqW2ldKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKGlzQmluYXJ5KG9iaikpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmIChvYmoudG9KU09OICYmXG4gICAgICAgIHR5cGVvZiBvYmoudG9KU09OID09PSBcImZ1bmN0aW9uXCIgJiZcbiAgICAgICAgYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICByZXR1cm4gaGFzQmluYXJ5KG9iai50b0pTT04oKSwgdHJ1ZSk7XG4gICAgfVxuICAgIGZvciAoY29uc3Qga2V5IGluIG9iaikge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSAmJiBoYXNCaW5hcnkob2JqW2tleV0pKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5leHBvcnRzLmhhc0JpbmFyeSA9IGhhc0JpbmFyeTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGFscGhhYmV0ID0gJzAxMjM0NTY3ODlBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6LV8nLnNwbGl0KCcnKVxuICAsIGxlbmd0aCA9IDY0XG4gICwgbWFwID0ge31cbiAgLCBzZWVkID0gMFxuICAsIGkgPSAwXG4gICwgcHJldjtcblxuLyoqXG4gKiBSZXR1cm4gYSBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSBzcGVjaWZpZWQgbnVtYmVyLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBudW0gVGhlIG51bWJlciB0byBjb252ZXJ0LlxuICogQHJldHVybnMge1N0cmluZ30gVGhlIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgbnVtYmVyLlxuICogQGFwaSBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gZW5jb2RlKG51bSkge1xuICB2YXIgZW5jb2RlZCA9ICcnO1xuXG4gIGRvIHtcbiAgICBlbmNvZGVkID0gYWxwaGFiZXRbbnVtICUgbGVuZ3RoXSArIGVuY29kZWQ7XG4gICAgbnVtID0gTWF0aC5mbG9vcihudW0gLyBsZW5ndGgpO1xuICB9IHdoaWxlIChudW0gPiAwKTtcblxuICByZXR1cm4gZW5jb2RlZDtcbn1cblxuLyoqXG4gKiBSZXR1cm4gdGhlIGludGVnZXIgdmFsdWUgc3BlY2lmaWVkIGJ5IHRoZSBnaXZlbiBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0ciBUaGUgc3RyaW5nIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBUaGUgaW50ZWdlciB2YWx1ZSByZXByZXNlbnRlZCBieSB0aGUgc3RyaW5nLlxuICogQGFwaSBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gZGVjb2RlKHN0cikge1xuICB2YXIgZGVjb2RlZCA9IDA7XG5cbiAgZm9yIChpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgIGRlY29kZWQgPSBkZWNvZGVkICogbGVuZ3RoICsgbWFwW3N0ci5jaGFyQXQoaSldO1xuICB9XG5cbiAgcmV0dXJuIGRlY29kZWQ7XG59XG5cbi8qKlxuICogWWVhc3Q6IEEgdGlueSBncm93aW5nIGlkIGdlbmVyYXRvci5cbiAqXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBBIHVuaXF1ZSBpZC5cbiAqIEBhcGkgcHVibGljXG4gKi9cbmZ1bmN0aW9uIHllYXN0KCkge1xuICB2YXIgbm93ID0gZW5jb2RlKCtuZXcgRGF0ZSgpKTtcblxuICBpZiAobm93ICE9PSBwcmV2KSByZXR1cm4gc2VlZCA9IDAsIHByZXYgPSBub3c7XG4gIHJldHVybiBub3cgKycuJysgZW5jb2RlKHNlZWQrKyk7XG59XG5cbi8vXG4vLyBNYXAgZWFjaCBjaGFyYWN0ZXIgdG8gaXRzIGluZGV4LlxuLy9cbmZvciAoOyBpIDwgbGVuZ3RoOyBpKyspIG1hcFthbHBoYWJldFtpXV0gPSBpO1xuXG4vL1xuLy8gRXhwb3NlIHRoZSBgeWVhc3RgLCBgZW5jb2RlYCBhbmQgYGRlY29kZWAgZnVuY3Rpb25zLlxuLy9cbnllYXN0LmVuY29kZSA9IGVuY29kZTtcbnllYXN0LmRlY29kZSA9IGRlY29kZTtcbm1vZHVsZS5leHBvcnRzID0geWVhc3Q7XG4iLCJpbXBvcnQgeyAkIH0gZnJvbSAnLi9jb3JlL2xpYi9kb20nO1xuaW1wb3J0IHsgcGFyZW50cywgZmFkZU91dCB9IGZyb20gJy4vY29yZS9saWIvZG9tJztcbmltcG9ydCB7IHBsYXllclJlZiwgcGxheWVyc0RhdGEgfSBmcm9tICcuL2RhdGEnO1xuaW1wb3J0IHsgZ2FtZSB9IGZyb20gJy4vaW5kZXgnO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0VUkoc29ja2V0KSB7XG4gIC8vIHN0YXR1c1xuICBsZXQgZ2FtZUNyZWF0ZWQsIGpvaW5lZCwgbmFtZUNvbmZpcm1lZCwgZ2FtZVN0YXJ0ZWQ7XG4gIC8vIHF1ZXJ5IEVsZW1lbnRzXG4gIGxldCBjcmVhdGVHYW1lQnRuID0gJCgnI2NyZWF0ZS1nYW1lJyk7ICAvLyAgYmluZEV2ZW50IDogZ2FtZUNyZWF0ZWRcbiAgbGV0IHNob3dKb2luR2FtZVByb21wdEJ0biA9ICQoJyNzaG93LWpvaW4tZ2FtZS1wcm9tcHQnKTsgLy8gIGJpbmRFdmVudFxuICBsZXQgY29uZmlybUpvaW5HYW1lQnRuID0gJCgnI2NvbmZpcm0tam9pbi1nYW1lJyk7IC8vICBiaW5kRXZlbnQ6IGpvaW5lZFxuICBsZXQgcm9vbUNvZGVJbnB1dCA9ICQoJyNyb29tLWNvZGUtaW5wdXQnKTtcbiAgbGV0IHJvb21Db2RlRGlzcGxheSA9ICQoJyNyb29tLWNvZGUtZGlzcGxheScpO1xuICBsZXQgbmFtZUlucHV0ID0gJCgnI25hbWUtaW5wdXQnKTtcbiAgbGV0IG5hbWVDb25maXJtID0gJCgnI25hbWUtY29uZmlybScpOyAvLyAgYmluZEV2ZW50IG5hbWVDb25maXJtZWRcbiAgbGV0IGxlYXZlV2FpdGluZ0J0biA9ICQoJyNsZWF2ZS13YWl0aW5nJyk7IC8vICBiaW5kRXZlbnRcbiAgbGV0IGxlYXZlR2FtZVN0YXJ0QWxlcnQgPSAkKCcjbGVhdmUtZ2FtZS1zdGFydC1hbGVydCcpOyAvLyAgYmluZEV2ZW50XG4gIGxldCBnYW1lU3RhcnQgPSAkKCcjZ2FtZS1zdGFydCcpOyAvLyAgYmluZEV2ZW50XG5cbiAgLy8g5bu656uLIGluaVVJIFByb21pc2UgXG4gIGxldCBpbml0VHJpZ2dlcjtcbiAgbGV0IGluaXRVSVByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcbiAgICBpbml0VHJpZ2dlciA9IHJlcztcbiAgfSlcblxuICAvLy4uLuaWh+Wtl1xuICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtcm9sZT1cIi4uLlwiXScpLmZvckVhY2goZWxlID0+IHtcbiAgICAgIGlmIChlbGUuaW5uZXJIVE1MLmxlbmd0aCA8IDMpIHtcbiAgICAgICAgZWxlLmlubmVySFRNTCArPSAnLidcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBlbGUuaW5uZXJIVE1MID0gJydcbiAgICAgIH1cbiAgICB9KVxuICB9LCA1MDApXG5cbiAgLy/ntoHlrprpl5zplolwb3BvdXRcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2Nsb3NlLXRoaXMtcG9wb3V0XScpLmZvckVhY2goZWxlID0+IHtcbiAgICBsZXQgcGFyZW50UG9wb3V0cyA9IHBhcmVudHMoZWxlLCAnLnBvcG91dCcpO1xuICAgIGVsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRvZ2dsZVBvcG91dChwYXJlbnRQb3BvdXRzWzBdLmlkLCBmYWxzZSk7XG4gICAgfSlcbiAgfSlcblxuXG4gIC8vIOWuo+WRiiBmbGFnLCDnm67nmoTmmK/nlKjkvobliKTlrprliLDlupVuYW1lUHJvbXB0IOaYr+W+nuWTquS4gOWAi+euoemBk+WOu2NhbGzlh7rkvobnmoRcbiAgbGV0IGZsYWc7XG5cblxuICAvL+e2geWumueiuuiqjemAgeWHuuaMiemIleeahOm7nuaTiuS6i+S7tlxuICBuYW1lQ29uZmlybS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAobmFtZUNvbmZpcm1lZCB8fCBnYW1lQ3JlYXRlZCB8fCBqb2luZWQpIHJldHVybjtcbiAgICBsZXQgbmFtZSA9IG5hbWVJbnB1dC52YWx1ZSA/IG5hbWVJbnB1dC52YWx1ZSA6IHBsYXllclJlZi5uYW1lO1xuICAgIGNvbmZpcm1OYW1lKHNvY2tldCwgbmFtZSk7XG4gICAgaWYgKGZsYWcgPT09ICdvbkpvaW4nKSB7XG4gICAgICB0b2dnbGVQb3BvdXQoJ2pvaW4tZ2FtZS1wcm9tcHQnLCB0cnVlKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZmxhZyA9PT0gJ29uQ3JlYXRlJykge1xuICAgICAgaWYgKCFnYW1lQ3JlYXRlZCkge1xuICAgICAgICBuZXdHYW1lKHNvY2tldCk7XG4gICAgICAgIGdhbWVDcmVhdGVkID0gdHJ1ZTtcbiAgICAgICAgam9pbmVkID0gdHJ1ZTtcbiAgICAgICAgbmFtZUNvbmZpcm1lZCA9IHRydWU7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuICB9KVxuXG4gIC8v57aB5a6a5oyJ6YiV6bue5pOK5b6M6ZaL5ZWfbmFtZS1pbnB1dC1wcm9tcHQgPT4gam9pbkdhbWUgcHJvbXB0XG4gIHNob3dKb2luR2FtZVByb21wdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBmbGFnID0gJ29uSm9pbic7XG4gICAgdG9nZ2xlUG9wb3V0KCduYW1lLWlucHV0LXByb21wdCcsIHRydWUpO1xuICB9KTtcblxuICAvL+e2geWumuaMiemIlem7nuaTiuW+jOmAgeWHuuaDs+WPg+WKoOeahOaIv+mWk+eivOeahOS6i+S7tlxuICBjb25maXJtSm9pbkdhbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYgKCFqb2luZWQpIHtcbiAgICAgIGxldCByb29tQ29kZSA9IHJvb21Db2RlSW5wdXQudmFsdWU7XG4gICAgICBjb25maXJtSm9pbkdhbWUoc29ja2V0LCByb29tQ29kZSk7XG4gICAgICBqb2luZWQgPSB0cnVlO1xuICAgICAgZ2FtZUNyZWF0ZWQgPSB0cnVlO1xuICAgICAgbmFtZUNvbmZpcm1lZCA9IHRydWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfSlcblxuICAvL+e2geWumuaMiemIlem7nuaTiuW+jOmWi+WVn25hbWUtaW5wdXQtcHJvbXB0ID0+IG5ld0dhbWUgcHJvbXB0XG4gIGNyZWF0ZUdhbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZmxhZyA9ICdvbkNyZWF0ZSc7XG4gICAgdG9nZ2xlUG9wb3V0KCduYW1lLWlucHV0LXByb21wdCcsIHRydWUpO1xuICB9KTtcblxuICAvL+e2geWumuesrOS4gOmboumWi+aMiemIlVxuICBsZWF2ZVdhaXRpbmdCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgc29ja2V0LmVtaXQoJ2xlYXZlV2FpdGluZycpO1xuICAgIGdhbWVDcmVhdGVkID0gZmFsc2U7XG4gICAgam9pbmVkID0gZmFsc2U7XG4gICAgbmFtZUNvbmZpcm1lZCA9IGZhbHNlO1xuICAgIHRvZ2dsZVBvcG91dCgncm9vbS1jb2RlLWRpc3BsYXktcG9wb3V0JywgZmFsc2UpO1xuICB9KVxuICAvL+e2geWumuesrOS6jOmboumWi+aMiemIlVxuICBsZWF2ZUdhbWVTdGFydEFsZXJ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHNvY2tldC5lbWl0KCdsZWF2ZVN0YXJ0aW5nR2FtZScsIHBsYXllclJlZik7XG4gICAgdG9nZ2xlUG9wb3V0KCdnYW1lLXN0YXJ0LWFsZXJ0JywgZmFsc2UpO1xuICB9KVxuXG4gIGdhbWVTdGFydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAoIWdhbWVTdGFydGVkKSB7XG4gICAgICBzb2NrZXQuZW1pdCgnc3RhcnRNYXRjaCcpO1xuICAgICAgZ2FtZVN0YXJ0ZWQgPSB0cnVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgfSlcblxuICAvL+e2geWumueVtnNlcnZlcuWCs+S+hidnZW5Sb29tQ29kZSfoqIromZ/lvozvvIx1aSDmh4nnlKLnlJ/nmoTlsI3mh4nooYzngrpcbiAgc29ja2V0Lm9uKCdnZW5Sb29tQ29kZScsIChkYXRhKSA9PiB7XG4gICAgcm9vbUNvZGVEaXNwbGF5LmlubmVySFRNTCA9IGRhdGE7XG4gIH0pXG5cbiAgLy/ntoHlrprnlbZzZXJ2ZXLlgrPkvoYncGxheWVySm9pbmVkJ+ioiuiZn+W+jO+8jHVpIOaHieeUoueUn+eahOWwjeaHieihjOeCulxuICBzb2NrZXQub24oJ3BsYXllckpvaW5lZCcsIChkYXRhKSA9PiB7XG4gICAgaWYgKGRhdGEucGxheWVyTnVtYmVyID09PSAyKSB7XG4gICAgICBpZiAocGxheWVyUmVmLm51bWJlciA9PSAxKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXJvbGU9XCJvcHBvbmVudFwiXScpLmZvckVhY2goZWxlID0+IHtcbiAgICAgICAgICBlbGUuaW5uZXJIVE1MID0gYFlPVVIgT1BQT05FTlQgJHtkYXRhLnBsYXllck5hbWV9IFNIT1dTIFVQIWBcbiAgICAgICAgfSk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXJvbGU9XCJwbGF5ZXIyXCJdJykuZm9yRWFjaChlbGUgPT4ge1xuICAgICAgICAgIGVsZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHBsYXllclJlZi5udW1iZXIgPT0gMikge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1yb2xlPVwib3Bwb25lbnRcIl0nKS5mb3JFYWNoKGVsZSA9PiB7XG4gICAgICAgICAgZWxlLmlubmVySFRNTCA9IGBXQUlUSU5HIEZPUiBUSEUgUk9PTSBIT1NUPGJyPjxicj4ke2RhdGEuaG9zdE5hbWV9PGJyPjxicj5UTyBBQ0NFUFQgWU9VUiBDSEFMTEVOR0U8c3BhbiBkYXRhLXJvbGU9XCIuLi5cIj48L3NwYW4+YFxuICAgICAgICB9KTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtcm9sZT1cInBsYXllcjFcIl0nKS5mb3JFYWNoKGVsZSA9PiB7XG4gICAgICAgICAgZWxlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICB0b2dnbGVQb3BvdXQoJ3Jvb20tY29kZS1kaXNwbGF5LXBvcG91dCcsIGZhbHNlKTtcbiAgICAgIHRvZ2dsZVBvcG91dCgnam9pbi1nYW1lLXByb21wdCcsIGZhbHNlKTtcbiAgICAgIHRvZ2dsZVBvcG91dCgnZ2FtZS1zdGFydC1hbGVydCcsIHRydWUpO1xuICAgICAgcGxheWVyc0RhdGFbMF0ubmFtZSA9IGRhdGEuaG9zdE5hbWU7XG4gICAgICBwbGF5ZXJzRGF0YVsxXS5uYW1lID0gZGF0YS5wbGF5ZXJOYW1lO1xuICAgIH1cbiAgfSlcblxuICBzb2NrZXQub24oJ2hvc3QtbGVhdmUnLCAoZGF0YSkgPT4ge1xuICAgIHRvZ2dsZVBvcG91dCgnZ2FtZS1zdGFydC1hbGVydCcsIGZhbHNlKTtcbiAgICB0b2dnbGVQb3BvdXQoJ2xlYXZlLWFsZXJ0JywgdHJ1ZSk7XG4gICAgZ2FtZVN0YXJ0ZWQgPSBmYWxzZTtcbiAgICBqb2luZWQgPSBmYWxzZTtcbiAgICBuYW1lQ29uZmlybWVkID0gZmFsc2U7XG4gICAgZ2FtZUNyZWF0ZWQgPSBmYWxzZTtcblxuICAgICQoJ1tkYXRhLXJvbGU9XCJsZWF2ZS1tc2dcIl0nKS5pbm5lckhUTUwgPSBgSE9TVCAke2RhdGEuaG9zdH0gTEVGVCBBTkQgU0hVVERPV04gVEhFIFJPT00uYFxuICB9KVxuXG4gIHNvY2tldC5vbignY2hhbGxlbmdlci1sZWF2ZScsIChkYXRhKSA9PiB7XG4gICAgdG9nZ2xlUG9wb3V0KCdnYW1lLXN0YXJ0LWFsZXJ0JywgZmFsc2UpO1xuICAgIHRvZ2dsZVBvcG91dCgnbGVhdmUtYWxlcnQnLCB0cnVlKTtcbiAgICB0b2dnbGVQb3BvdXQoJ3Jvb20tY29kZS1kaXNwbGF5LXBvcG91dCcsIHRydWUpO1xuICAgIGdhbWVTdGFydGVkID0gZmFsc2U7XG4gICAgam9pbmVkID0gZmFsc2U7XG4gICAgbmFtZUNvbmZpcm1lZCA9IGZhbHNlO1xuICAgIGdhbWVDcmVhdGVkID0gZmFsc2U7XG5cbiAgICAkKCdbZGF0YS1yb2xlPVwibGVhdmUtbXNnXCJdJykuaW5uZXJIVE1MID0gYENIQUxMRU5HRVIgJHtkYXRhLmNoYWxsZW5nZXJ9IExFRlQgVEhJUyBNQVRDSC5gXG4gIH0pXG5cbiAgc29ja2V0Lm9uKCdsZWF2ZScsICgpID0+IHtcbiAgICBnYW1lU3RhcnRlZCA9IGZhbHNlO1xuICAgIGpvaW5lZCA9IGZhbHNlO1xuICAgIG5hbWVDb25maXJtZWQgPSBmYWxzZTtcbiAgICBnYW1lQ3JlYXRlZCA9IGZhbHNlO1xuICB9KVxuXG4gIC8v57aB5a6a55W2c2VydmVy5YKz5L6GJ2dhbWVJbml0J+ioiuiZn+W+jO+8jHVpIOaHieeUoueUn+eahOWwjeaHieihjOeCulxuICBzb2NrZXQub24oJ2dhbWVJbml0JywgKCkgPT4ge1xuICAgIHRvZ2dsZVBvcG91dCgnZ2FtZS1zdGFydC1hbGVydCcsIGZhbHNlKTtcblxuICB9KVxuXG5cbiAgLy8g6Ke455m8IHByb21pc2UgZnVsbGZpbGzmqZ/liLZcbiAgaW5pdFRyaWdnZXIoKTtcblxuICAvLyDlm57lgrMgZnVsbGZpbGzlvoznmoRwcm9taXNlXG4gIHJldHVybiBpbml0VUlQcm9taXNlO1xufVxuXG4vKipcbiAqIOmWi+WVnyBwb3BvdXRcbiAqXG4gKiBAcGFyYW0geyp9IGlkXG4gKiBAcGFyYW0geyp9IHN0YXR1c1xuICovXG5mdW5jdGlvbiB0b2dnbGVQb3BvdXQoaWQsIHN0YXR1cykge1xuICBsZXQgcG9wb3V0ID0gJChgLnBvcG91dCMke2lkfWApO1xuICBpZiAoc3RhdHVzKSB7XG4gICAgcG9wb3V0LmNsYXNzTGlzdC5hZGQoJ3BvcG91dC0tc2hvdycpO1xuICB9XG4gIGVsc2Uge1xuICAgIHBvcG91dC5jbGFzc0xpc3QucmVtb3ZlKCdwb3BvdXQtLXNob3cnKTtcbiAgfVxufVxuLyoqXG4gKiDpmrHol4/otbflp4vnlavpnaJcbiAqXG4gKi9cbmZ1bmN0aW9uIGhpZGVJbml0aWFsU2NyZWVuKCkge1xuICBsZXQgaW5pdGlhbFNjcmVlbiA9ICQoJyNpbml0aWFsLXNjcmVlbicpO1xuICBpbml0aWFsU2NyZWVuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59XG4vKipcbiAqICDplovpl5zlhbfmnIloaWRlLW9uLWFjdGlvbuWxrOaAp+eahHVpIGVsZW1lbnQsXG4gKlxuICogQHBhcmFtIHsqfSBzdGF0dXNcbiAqL1xuZnVuY3Rpb24gdG9nZ2xlSGlkZU9uQWN0aW9uKHN0YXR1cykge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbaGlkZS1vbi1hY3Rpb25dJykuZm9yRWFjaChlbGUgPT4ge1xuICAgIGVsZS5zZXRBdHRyaWJ1dGUoJ2hpZGUtb24tYWN0aW9uJywgc3RhdHVzID8gJycgOiAnaGlkZScpO1xuICB9KVxufVxuLyoqXG4gKiDplovpl5zlhbfmnIlzaG93LW9uLWZ1bGzlsazmgKfnmoR1aSBlbGVtZW50LFxuICpcbiAqIEBwYXJhbSB7Kn0gc3RhdHVzXG4gKi9cbmZ1bmN0aW9uIHRvZ2dsZVNob3dPbkFjdGlvbihzdGF0dXMpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW3Nob3ctb24tYWN0aW9uXScpLmZvckVhY2goZWxlID0+IHtcbiAgICBlbGUuc2V0QXR0cmlidXRlKCdzaG93LW9uLWFjdGlvbicsIHN0YXR1cyA/ICcnIDogJ2hpZGUnKTtcbiAgfSlcbn1cblxuXG4vKipcbiAqIOW7uueri+aWsOmBiuaIslxuICpcbiAqIEBwYXJhbSB7Kn0gc29ja2V0XG4gKi9cbmZ1bmN0aW9uIG5ld0dhbWUoc29ja2V0KSB7XG4gIHBsYXllclJlZi5udW1iZXIgPSAxO1xuICB0b2dnbGVQb3BvdXQoJ3Jvb20tY29kZS1kaXNwbGF5LXBvcG91dCcsIHRydWUpO1xuICBzb2NrZXQuZW1pdCgnbmV3R2FtZScpO1xufVxuLyoqXG4gKiDlkJFzZXJ2ZXLnmbzlh7rnorroqo3lj4PliqDpgYrmiLLnmoTkv6HomZ9cbiAqXG4gKiBAcGFyYW0geyp9IHNvY2tldFxuICogQHBhcmFtIHsqfSByb29tQ29kZVxuICovXG5mdW5jdGlvbiBjb25maXJtSm9pbkdhbWUoc29ja2V0LCByb29tQ29kZSkge1xuICBwbGF5ZXJSZWYubnVtYmVyID0gMjtcbiAgc29ja2V0LmVtaXQoJ2pvaW5HYW1lJywgcm9vbUNvZGUpO1xufVxuLyoqXG4gKiBcbiAqIOeiuuiqjei8uOWFpeeahOaaseeoseW+jO+8jOaKiumBiuaIsuWFp+aJgOaciWRhdGEtcm9sZT1cIm5hbWVcIiDnmoQgZWxlbWVudCwg5YWn5a656YO95o+b5oiQ6Ly45YWl55qEbmFtZSwg5Lim5ZCM5pmC5ZCRc2VydmVy55m86YCBJ25hbWVDb25maXJtJ+eahOioiuiZn1xuICog5pyA5b6M6Zec6ZaJbmFtZS1pbnB1dC1wcm9tcHRcbiAqIEBwYXJhbSB7Kn0gc29ja2V0XG4gKiBAcGFyYW0geyp9IG5hbWVcbiAqIEBwYXJhbSB7Kn0gY2JcbiAqL1xuZnVuY3Rpb24gY29uZmlybU5hbWUoc29ja2V0LCBuYW1lLCBjYikge1xuICBwbGF5ZXJSZWYubmFtZSA9IG5hbWU7XG4gIHNvY2tldC5lbWl0KCduYW1lQ29uZmlybScsIG5hbWUpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbZGF0YS1yb2xlPVwibmFtZVwiXWApLmZvckVhY2goKG8sIGkpID0+IHtcbiAgICBvLmlubmVySFRNTCA9IG5hbWU7XG4gIH0pXG4gIHRvZ2dsZVBvcG91dCgnbmFtZS1pbnB1dC1wcm9tcHQnLCBmYWxzZSk7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0Q291bnRpbmcoY2IpIHtcbiAgbGV0IGdjID0gJCgnI2dhbWUtc3RhcnQtY291bnRpbmcnKTtcbiAgZ2MuY2xhc3NMaXN0LmFkZCgnZ2FtZS1zdGFydC1jb3VudGluZy0tc2hvdycpO1xuICBsZXQgbnVtYmVyID0gZ2MucXVlcnlTZWxlY3RvcignLmdhbWUtc3RhcnQtY291bnRpbmdfX251bWJlcicpO1xuICBudW1iZXIuaW5uZXJIVE1MID0gMztcbiAgbGV0IHRpbWVJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICBpZiAocGFyc2VJbnQobnVtYmVyLmlubmVySFRNTCkgPiAwKSB7XG4gICAgICBudW1iZXIuaW5uZXJIVE1MID0gcGFyc2VJbnQobnVtYmVyLmlubmVySFRNTCkgLSAxO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGltZUludGVydmFsKTtcbiAgICAgIGZhZGVPdXQoZ2MsIDEwMDAsICgpID0+IHtcbiAgICAgICAgZ2MuY2xhc3NMaXN0LnJlbW92ZSgnZ2FtZS1zdGFydC1jb3VudGluZy0tc2hvdycpO1xuICAgICAgfSlcbiAgICAgIGNiKCk7XG4gICAgfVxuICB9LCAxMDAwKVxufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH0iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL2luZGV4LmpzXCIpO1xudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvc2Nzcy9tYWluLnNjc3NcIik7XG4iXSwic291cmNlUm9vdCI6IiJ9