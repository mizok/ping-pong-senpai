/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./controll.js":
/*!*********************!*\
  !*** ./controll.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initKeyControl": function() { return /* binding */ initKeyControl; }
/* harmony export */ });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./data.js");

function initKeyControl() {
  var intervalPeriod = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 300;
  var socket = arguments.length > 1 ? arguments[1] : undefined;
  var keyHoldInterval;
  document.addEventListener('keydown', function (e) {
    var windowAspectRatio = window.innerWidth / window.innerHeight;

    if (windowAspectRatio >= 1) {
      switch (e.key) {
        case "Down": // IE/Edge specific value

        case "ArrowDown":
          // Do something for "down arrow" key press.
          clearInterval(keyHoldInterval);
          keyHoldInterval = setInterval(function () {
            socket.emit('playerMoveMinus', _data__WEBPACK_IMPORTED_MODULE_0__.playerRef);
          }, intervalPeriod);
          break;

        case "Up": // IE/Edge specific value

        case "ArrowUp":
          // Do something for "up arrow" key press.
          clearInterval(keyHoldInterval);
          keyHoldInterval = setInterval(function () {
            socket.emit('playerMovePlus', _data__WEBPACK_IMPORTED_MODULE_0__.playerRef);
          }, intervalPeriod);
          break;
      }
    } else {
      switch (e.key) {
        case "Left": // IE/Edge specific value

        case "ArrowLeft":
          // Do something for "left arrow" key press.
          clearInterval(keyHoldInterval);
          keyHoldInterval = setInterval(function () {
            socket.emit('playerMoveMinus', _data__WEBPACK_IMPORTED_MODULE_0__.playerRef);
          }, intervalPeriod);
          break;

        case "Right": // IE/Edge specific value

        case "ArrowRight":
          // Do something for "right arrow" key press.
          clearInterval(keyHoldInterval);
          keyHoldInterval = setInterval(function () {
            socket.emit('playerMovePlus', _data__WEBPACK_IMPORTED_MODULE_0__.playerRef);
          }, intervalPeriod);
          break;
      }
    }

    switch (e.key) {
      case "Space":
        // Do something for "enter" or "return" key press.
        socket.emit('playerLunchBall', _data__WEBPACK_IMPORTED_MODULE_0__.playerRef);
        break;

      case "Esc": // IE/Edge specific value

      case "Escape":
        // Do something for "esc" key press.
        socket.emit('playerEscape', _data__WEBPACK_IMPORTED_MODULE_0__.playerRef);
        break;

      default:
        return;
      // Quit when this doesn't handle the key event.
    }
  });
}

/***/ }),

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
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "game": function() { return /* binding */ game; }
/* harmony export */ });
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ "./ui.js");
/* harmony import */ var _core_splash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/splash */ "./core/splash.js");
/* harmony import */ var _core_game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/game */ "./core/game.js");
/* harmony import */ var _controll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controll */ "./controll.js");





var socket = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/build/index.js")('http://localhost:3000');

var splashSwitcher;
var splashPromise = (0,_core_splash__WEBPACK_IMPORTED_MODULE_1__.initSplash)();
splashPromise.then(function (switcher) {
  splashSwitcher = switcher;
});
var uiInitPromise = (0,_ui__WEBPACK_IMPORTED_MODULE_0__.initUI)(socket);
var game = (0,_core_game__WEBPACK_IMPORTED_MODULE_2__.gameBuilder)(); // 上線後要移除 start

game.promise.then(function () {
  game.controller.surrounding.classList.add('promoted');
  var gameReadyPromise = game.controller.drawGame();
  gameReadyPromise.then(function () {
    splashSwitcher(false);
    (0,_controll__WEBPACK_IMPORTED_MODULE_3__.initKeyControl)(socket);
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vY29udHJvbGwuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL2NvcmUvZ2FtZS5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vY29yZS9saWIvYW5pbWF0aW9uLmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9jb3JlL2xpYi9iYXNlLmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9jb3JlL2xpYi9kb20uanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL2NvcmUvbGliL2Z1bmN0aW9uLmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9jb3JlL2xpYi9zaGFwZS5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vY29yZS9saWIvdXRpbC5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vY29yZS9zcGxhc2guanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL2RhdGEuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9iYWNrbzIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9iYXNlNjQtYXJyYXlidWZmZXIvbGliL2Jhc2U2NC1hcnJheWJ1ZmZlci5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL2NvbXBvbmVudC1lbWl0dGVyL2luZGV4LmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvZGVidWcvbm9kZV9tb2R1bGVzL21zL2luZGV4LmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvZGVidWcvc3JjL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9kZWJ1Zy9zcmMvY29tbW9uLmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9saWIvZ2xvYmFsVGhpcy5icm93c2VyLmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2xpYi9zb2NrZXQuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2xpYi90cmFuc3BvcnQuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2xpYi90cmFuc3BvcnRzL2luZGV4LmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9saWIvdHJhbnNwb3J0cy9wb2xsaW5nLWpzb25wLmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9saWIvdHJhbnNwb3J0cy9wb2xsaW5nLXhoci5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvbGliL3RyYW5zcG9ydHMvcG9sbGluZy5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvbGliL3RyYW5zcG9ydHMvd2Vic29ja2V0LWNvbnN0cnVjdG9yLmJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2xpYi90cmFuc3BvcnRzL3dlYnNvY2tldC5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvbGliL3V0aWwuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2xpYi94bWxodHRwcmVxdWVzdC5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1wYXJzZXIvbGliL2NvbW1vbnMuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tcGFyc2VyL2xpYi9kZWNvZGVQYWNrZXQuYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1wYXJzZXIvbGliL2VuY29kZVBhY2tldC5icm93c2VyLmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLXBhcnNlci9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9oYXMtY29ycy9pbmRleC5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL21lcnNlbm5lLXR3aXN0ZXIvc3JjL21lcnNlbm5lLXR3aXN0ZXIuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9wYXJzZXFzL2luZGV4LmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvcGFyc2V1cmkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uLi9zcmMvcGFyc2UtcGF0aC5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4uL3NyYy9wYXRoMmQtcG9seWZpbGwuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tY2xpZW50L2J1aWxkL2luZGV4LmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLWNsaWVudC9idWlsZC9tYW5hZ2VyLmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLWNsaWVudC9idWlsZC9vbi5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1jbGllbnQvYnVpbGQvc29ja2V0LmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLWNsaWVudC9idWlsZC90eXBlZC1ldmVudHMuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tY2xpZW50L2J1aWxkL3VybC5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1wYXJzZXIvZGlzdC9iaW5hcnkuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tcGFyc2VyL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tcGFyc2VyL2Rpc3QvaXMtYmluYXJ5LmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMveWVhc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL3VpLmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL3NyYy9zY3NzL21haW4uc2NzcyJdLCJuYW1lcyI6WyJpbml0S2V5Q29udHJvbCIsImludGVydmFsUGVyaW9kIiwic29ja2V0Iiwia2V5SG9sZEludGVydmFsIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsIndpbmRvd0FzcGVjdFJhdGlvIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0Iiwia2V5IiwiY2xlYXJJbnRlcnZhbCIsInNldEludGVydmFsIiwiZW1pdCIsInBsYXllclJlZiIsIkRFRkFVTFQiLCJiZ0NvbG9yIiwiY291cnRDb2xvciIsImNvdXJ0QXNwZWN0UmF0aW8iLCJFbmdpbmUiLCJlbGUiLCJkZWZhdWx0Q29uZmlnIiwiY29uZmlnIiwicGl4ZWxCYXNlIiwiaW5pdCIsImZwcyIsImNvdXJ0T2Zmc2V0IiwiY291cnRPZmZzZXRNb2JpbGUiLCJnYW1lU3RhdHVzIiwicGF1c2UiLCJwbGF5ZXJzVGhpY2tuZXNzIiwiY3VydGFpbiIsImdlbkN1cnRhaW4iLCJjb3VydCIsImdlbkNvdXJ0Iiwic3RhclNreSIsImdlblN0YXJTa3kiLCJwbGF5ZXJzIiwiZ2VuUGxheWVycyIsImJhbGwiLCJnZW5CYWxsIiwic2NvcmVib2FyZHMiLCJnZW5TY29yZWJvYXJkcyIsImluaXRSZXNpemVkIiwicmVzaXplZENhbGxiYWNrIiwiZHJhd1N0YXRpYyIsInRoZW4iLCJiYWNrZ3JvdW5kIiwiYmFuZFdpZHRoIiwiY3VydGFpbkNhbnZhc0luc3RhbmNlIiwiY3JlYXRlVmlydHVhbENhbnZhc0Jhc2VJbnN0YW5jZSIsInNldENhbnZhc1NpemUiLCJjdnMiLCJ3aWR0aCIsImhlaWdodCIsImN1cnRhaW5BbmltYXRpb25JbnN0YW5jZSIsIlN3aXJsOEJpdCIsImN0eCIsImFuaW1hdGUiLCJpbml0aWFsSW1hZ2UiLCJnZXRDYWNoZUNhbnZhcyIsInByb21pc2UiLCJpbnRlcnZhbCIsImNsZWFyIiwiZHJhd0ltYWdlIiwiUHJvbWlzZSIsInJlcyIsInNldFRpbWVvdXQiLCJ0cmlnZ2VyIiwicmVqIiwic3RhdGljSW1hZ2UiLCJ0YXJnZXRMYXllciIsInNvdXJjZUNhbnZhcyIsIm9mZnNldCIsIm9mZnNldE1vYmlsZSIsInNhdmUiLCJnZXRBc3BlY3RSYXRpbyIsInR5cGVBIiwib2Zmc2V0ViIsIm9mZnNldEgiLCJjb3VydEhlaWdodCIsImNvdXJ0V2lkdGgiLCJ0cmFuc2xhdGUiLCJyb3RhdGUiLCJNYXRoIiwiUEkiLCJyZXN0b3JlIiwic3Ryb2tlV2lkdGgiLCJjb3VydENhbnZhc0luc3RhbmNlIiwiY291cnRDYW52YXNXaWR0aCIsImNvdXJ0Q2FudmFzSGVpZ2h0IiwidmVydGljZXMiLCJ4IiwieSIsInN0cm9rZUFuaW1hdGlvbkluc3RhbmNlIiwiU3Ryb2tlQW5pbWF0aW9uIiwicmVzcG9uc2l2ZVBhaW50ZXIiLCJzdGFyU2t5Q2FudmFzSW5zdGFuY2UiLCJhZGROZXdMYXllciIsInN0YXJTa3lBbmltYXRpb25JbnN0YW5jZSIsIlN0YXJTa3kiLCJyZWZyZXNoU3RhcnMiLCJiaW5kIiwid2lkdGhQcmFtIiwiZ2FwUmF0aW8iLCJjb2xvciIsInRoaWNrbmVzcyIsInBsYXllcnNDYW52YXNJbnN0YW5jZSIsInBsYXllcnNWaXJ0dWFsQ2FudmFzSW5zdGFuY2UiLCJpIiwicGxheWVyc0RhdGEiLCJwb3NpdGlvbiIsInJlYWR5Iiwib3BhY2l0eSIsImRyYXdSZWN0IiwibG9vcFVwZGF0ZSIsInNjb3JlYm9hcmRzTGF5ZXIiLCJhZGREaXZMYXllciIsInRvcEJhciIsImNyZWF0ZUVsZW1lbnQiLCJib3RCYXIiLCJjbGFzc0xpc3QiLCJhZGQiLCJhcHBlbmQiLCJnZW5QbGF5ZXJTaG93Y2FzZSIsInBsYXllck5hbWUiLCJwbGF5ZXJJZCIsInNjb3JlTWF4IiwicGxheWVyU2hvd0Nhc2UiLCJpZCIsImlubmVySFRNTCIsIm5hbWUiLCJ1cGRhdGUiLCJxdWVyeVNlbGVjdG9yIiwicGFkU3RyaW5nIiwic2NvcmUiLCJzcGVlZCIsInNpemUiLCJiYWxsQ2FudmFzSW5zdGFuY2UiLCJiYWxsVmlydHVhbENhbnZhc0luc3RhbmNlIiwiYmFsbERhdGEiLCJyYW5kb21XaXRoaW5SYW5nZSIsImRyYXdDaXJjbGUiLCJwbGF5ZXJzUmVhZHkiLCJiYWxsUmVhZHkiLCJzY29yZWJvYXJkc1JlYWR5IiwiYWxsUmVhZHlQcm9taXNlIiwiYWxsIiwiZ2FtZVJlYWR5UHJvbWlzZSIsImluaXRHYW1lRGF0YVVwZGF0ZUludGVydmFsIiwiQ2FudmFzMkRGeEJhc2UiLCJnYW1lQnVpbGRlciIsImdhbWUiLCJib290IiwiYm9keSIsImluc3RhbmNlIiwiY29udHJvbGxlciIsImNvdW50ZXJDbG9ja3dpc2VBcnIiLCJjbG9ja3dpc2VBcnIiLCJjYW52YXMiLCJhbmltYXRpb25FbmRUcmlnZ2VyIiwib3JkZXIiLCJwYXRoIiwiUGF0aDJEIiwiYmFuZFdpZHRoU3RhY2siLCJjbG9ja3dpc2UiLCJ0b3RhbFdpZHRoIiwidG90YWxIZWlnaHQiLCJkaXJlY3Rpb25BcnIiLCJsb2NhdGlvbiIsImFuaW1hdGlvblByb21pc2UiLCJkcmF3U3dpcmwiLCJhZGRQYXRoIiwiZHJhV1JhbmRvbUFuZ2xlZEJhbmRQYXRoIiwiZ2V0U3RhcnRMb2NhdGlvbiIsImZpbGwiLCJwb2ludCIsImRyYXdBbmdsZWRCYW5kRnJvbVRMIiwiZHJhd0FuZ2xlZEJhbmRGcm9tQkwiLCJkcmF3QW5nbGVkQmFuZEZyb21CUiIsImRyYXdBbmdsZWRCYW5kRnJvbVRSIiwibW92ZVRvIiwicmFuZG9tSGVpZ2h0IiwibGluZVRvIiwicmFuZG9tV2lkdGgiLCJ3YXlwb2ludHMiLCJjYWxjV2F5cG9pbnRzIiwiZmxpY2tlciIsImRhc2giLCJnbG93aW5nIiwiZ2xvd2luZ1NpemUiLCJsb29waW5nRHJhd1N0cm9rZSIsImNvdW50ZXIiLCIkdGhpcyIsImxpbmVDYXAiLCJsZW5ndGgiLCJzZXRMaW5lRGFzaCIsInN0cm9rZVN0eWxlIiwibGluZVdpZHRoIiwic2hhZG93Q29sb3IiLCJzaGFkb3dCbHVyIiwiZmxpY2tlclJhbmdlIiwiYmVnaW5QYXRoIiwiY2xlYXJSZWN0IiwiZ2xvYmFsQWxwaGEiLCJzdHJva2UiLCJjbG9zZVBhdGgiLCJzdGFycyIsImdlblN0YXJzIiwibnVtYmVyIiwic3RhciIsInR3aW5rbGUiLCJwdXNoIiwiZHJhdyIsInZpcnR1YWxQYXJlbnQiLCJpcyIsIk9iamVjdCIsImFzc2lnbiIsImZyYW1lQ291bnQiLCJtb3VzZSIsImZyYW1lSXNQYXVzZWQiLCJpc0NsaWNrIiwibGF5ZXJzQ29udGFpbmVyIiwidW5kZWZpbmVkIiwiZGl2TGF5ZXJzQ29udGFpbmVyIiwiY2FudmFzU2l6ZWZpeGVkIiwicHJldmlvdXNGcmFtZVRpbWUiLCJEYXRlIiwiZ2V0VGltZSIsImlzUmVzaXppbmciLCJsYXllcnMiLCJkaXZMYXllcnMiLCJpc1Jlc2l6aW5nQ2FsbGJhY2siLCJpbml0QmFzZSIsInRhZ05hbWUiLCJzdHlsZSIsImZvbnRTaXplIiwiYXBwZW5kQ2hpbGQiLCJkaXZMYXllckNvbnRhaW5lciIsInN1cnJvdW5kaW5nIiwiaW5zZXJ0QmVmb3JlIiwiZ2V0Q29udGV4dCIsInRyaWdnZXJSZXNpemluZ01lY2hhbmlzbSIsImRlYm91bmNlIiwidmlzaWJpbGl0eVN0YXRlIiwiYWRkRXZlbnRIYW5kbGVyIiwicmVmcmVzaEJhc2VGcmFtZUNvdW50ZXIiLCJ0aGlzRnJhbWVUaW1lIiwidGltZUVsYXBzZWQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjb250YWlucyIsImNhbnZhc1dpZHRoIiwiY2FudmFzSGVpZ2h0IiwidmlydHVhbFBhcmVudFZhbGlkYXRpb24iLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJwYXJlbnRFbGVtZW50IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJwb3MiLCJwb2ludGVyRXZlbnRUb1hZIiwidmN2cyIsInZjdnNJbnN0YW5jZSIsIlR5cGVFcnJvciIsInByZXBlbmQiLCJjdnNJbnN0YW5jZSIsImNsYXNzTmFtZSIsImRpdkxheWVyIiwiY3RvciIsInRhcmdldEVsZSIsImdldEVsZW1lbnRCeUlkIiwiYm9vdFByb21pc2UiLCIkIiwic2VsZWN0b3IiLCJ0b2dnbGUiLCJzdGF0dXMiLCJzdHlsZVN0ciIsInNldEF0dHJpYnV0ZSIsInRvZ2dsZUNsYXNzIiwiY2xhc3NuYW1lIiwiYWN0aW9uIiwiZXZlbnROYW1lIiwic29tZUV2ZW50IiwiY3JlYXRlRXZlbnQiLCJpbml0RXZlbnQiLCJkaXNwYXRjaEV2ZW50IiwicGFyZW50cyIsIm5vZGUiLCJjdXJyZW50IiwibGlzdCIsInBhcmVudE5vZGUiLCJkb2N1bWVudEVsZW1lbnQiLCJmaWx0ZXIiLCJvIiwibWF0Y2hlcyIsImZhZGVPdXQiLCJkdXJhdGlvbiIsImNiIiwiZGlzcGxheSIsImZhZGVUYXJnZXQiLCJmYWRlRWZmZWN0IiwiTWVyc2VubmVUd2lzdGVyIiwicmVxdWlyZSIsIk1UIiwiZnVuYyIsImRlbGF5IiwidGltZXIiLCJjb250ZXh0IiwiYXJncyIsImFyZ3VtZW50cyIsImNsZWFyVGltZW91dCIsImFwcGx5IiwiYXJyIiwiYSIsIkFycmF5IiwiaXNBcnJheSIsIm9iaiIsInByb3RvdHlwZSIsInRvU3RyaW5nIiwiY2FsbCIsImluZGV4T2YiLCJwdGgiLCJoYXNPd25Qcm9wZXJ0eSIsInN2ZyIsIlNWR0VsZW1lbnQiLCJpbnAiLCJIVE1MSW5wdXRFbGVtZW50IiwiZG9tIiwibm9kZVR5cGUiLCJzdHIiLCJmbmMiLCJ1bmQiLCJuaWwiLCJoZXgiLCJ0ZXN0IiwicmdiYSIsInJnYiIsImhzbCIsImNvbCIsImRlZmF1bHRJbnN0YW5jZVNldHRpbmdzIiwiZGVmYXVsdFR3ZWVuU2V0dGluZ3MiLCJtaW4iLCJtYXgiLCJzZWVkIiwicmFuZG9tIiwiZ2V0RGlzdGFuY2UiLCJ4MCIsInkwIiwieDEiLCJ5MSIsInNxcnQiLCJkZWdyZWVUb1JhZGlhbiIsImRlZ3JlZSIsIm91dCIsInR5cGUiLCJ0b3VjaCIsIm9yaWdpbmFsRXZlbnQiLCJ0b3VjaGVzIiwiY2hhbmdlZFRvdWNoZXMiLCJwYWdlWCIsInBhZ2VZIiwidGFyZ2V0SGFzUHJvcCIsInRhcmdldCIsInByb3AiLCJpc0VtcHR5IiwidmFsIiwiaXNOYU4iLCJyZ2JUb1JnYmEiLCJyZ2JWYWx1ZSIsImV4ZWMiLCJoZXhUb1JnYmEiLCJoZXhWYWx1ZSIsInJneCIsInJlcGxhY2UiLCJtIiwiciIsImciLCJiIiwicGFyc2VJbnQiLCJoc2xUb1JnYmEiLCJoc2xWYWx1ZSIsImgiLCJzIiwibCIsImh1ZTJyZ2IiLCJwIiwicSIsInQiLCJjb2xvclRvUmdiYSIsImdldENoYW5uZWxWYWx1ZXNGcm9tUmdiYSIsInNwbGl0IiwibWFwIiwiaW50ZXJwb2xhdGUiLCJwdDAiLCJwdDEiLCJkeCIsImR5IiwiaiIsInRhcmdldFN0ciIsImRyYXdTcXVhcmUiLCJhbHBoYSIsImFyYyIsImRyYXdMaW5lIiwic3Ryb2tlQ29sb3IiLCJkcmF3VGV4dCIsInRleHRDb250ZW50IiwiZm9udCIsImZpbGxUZXh0IiwiZ2V0U2NyZWVuc2hvdEltYWdlIiwidGFyZ2V0Q3ZzIiwidXJsIiwidG9EYXRhVVJMIiwiaW1hZ2UiLCJJbWFnZSIsInNyYyIsInRhcmdldEN0eCIsImNhY2hlQ3ZzIiwiY2FjaGVDdHgiLCJzb3VyY2VXaWR0aCIsInNvdXJjZUhlaWdodCIsImNhY2hlRGF0YSIsImdldEltYWdlRGF0YSIsInB1dEltYWdlRGF0YSIsIkJBTExfQU5JTUFUSU9OX0RFRkFVTFQiLCJhZnRlckltYWdlIiwicmFkaXVzIiwic3BlZWRYIiwic3BlZWRZIiwiYWNjZWxlcmF0aW9uWCIsImFjY2VsZXJhdGlvblkiLCJmcmljdGlvblgiLCJmcmljdGlvblkiLCJTUE9UU19BTklNQVRJT05fREVGQVVMVCIsIm1pblNpemUiLCJtYXhTaXplIiwicGVyaW9kIiwic3RlcCIsImJvdHRvbUxheWVyIiwicm93IiwiQmFzaWNSZWZlbGVjdGlvbiIsInN3aXRjaFN0YXR1cyIsImluaXRCYWxsIiwiYW5pbWF0ZUJhbGwiLCJhY2NlbGVyYXRpb24iLCJmcmljdGlvbiIsImRyYXdCYWxsIiwicmVmcmVzaExvY2F0aW9uIiwicmVmcmVzaFNwZWVkIiwiY2hlY2tCb3VuZGFyeSIsImR0IiwiU3BvdHNCdW1waW5nIiwic3BvdHNTaXplIiwiZXhwYW5kIiwiZHJhd1Nwb3RzIiwiaW5pdFNwbGFzaCIsImluaXRpYWxTY3JlZW4iLCJ2aXJ0dWFsQ2FudmFzIiwic3dpdGNoZXIiLCJzcG90QW5pbWF0aW9uIiwic3BsYXNoUHJvbWlzZSIsInNwb3RzQnVtcGluZ0luc3RhbmNlIiwiYm9vdENvbnRyb2xsZXIiLCJiYXNpY1JlZmVsZWN0aW9uSW5zdGFuY2UiLCJpc1N0dWNrIiwibW9kdWxlIiwiZXhwb3J0cyIsIkJhY2tvZmYiLCJvcHRzIiwibXMiLCJmYWN0b3IiLCJqaXR0ZXIiLCJhdHRlbXB0cyIsInBvdyIsInJhbmQiLCJkZXZpYXRpb24iLCJmbG9vciIsInJlc2V0Iiwic2V0TWluIiwic2V0TWF4Iiwic2V0Sml0dGVyIiwiY2hhcnMiLCJhcnJheWJ1ZmZlciIsImJ5dGVzIiwiVWludDhBcnJheSIsImxlbiIsImJhc2U2NCIsInN1YnN0cmluZyIsImJ1ZmZlckxlbmd0aCIsImVuY29kZWQxIiwiZW5jb2RlZDIiLCJlbmNvZGVkMyIsImVuY29kZWQ0IiwiQXJyYXlCdWZmZXIiLCJFbWl0dGVyIiwibWl4aW4iLCJvbiIsImV2ZW50IiwiZm4iLCJfY2FsbGJhY2tzIiwib25jZSIsIm9mZiIsInJlbW92ZUxpc3RlbmVyIiwicmVtb3ZlQWxsTGlzdGVuZXJzIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNhbGxiYWNrcyIsInNwbGljZSIsInNsaWNlIiwibGlzdGVuZXJzIiwiaGFzTGlzdGVuZXJzIiwiZCIsInciLCJvcHRpb25zIiwicGFyc2UiLCJpc0Zpbml0ZSIsImxvbmciLCJmbXRMb25nIiwiZm10U2hvcnQiLCJFcnJvciIsIkpTT04iLCJzdHJpbmdpZnkiLCJTdHJpbmciLCJtYXRjaCIsIm4iLCJwYXJzZUZsb2F0IiwidG9Mb3dlckNhc2UiLCJtc0FicyIsImFicyIsInJvdW5kIiwicGx1cmFsIiwiaXNQbHVyYWwiLCJmb3JtYXRBcmdzIiwibG9hZCIsInVzZUNvbG9ycyIsImxvY2Fsc3RvcmFnZSIsIndhcm5lZCIsImNvbnNvbGUiLCJ3YXJuIiwicHJvY2VzcyIsIl9fbndqcyIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsIldlYmtpdEFwcGVhcmFuY2UiLCJmaXJlYnVnIiwiZXhjZXB0aW9uIiwidGFibGUiLCJSZWdFeHAiLCIkMSIsIm5hbWVzcGFjZSIsImh1bWFuaXplIiwiZGlmZiIsImMiLCJpbmRleCIsImxhc3RDIiwiZGVidWciLCJsb2ciLCJuYW1lc3BhY2VzIiwic3RvcmFnZSIsInNldEl0ZW0iLCJyZW1vdmVJdGVtIiwiZXJyb3IiLCJnZXRJdGVtIiwiZW52IiwiREVCVUciLCJsb2NhbFN0b3JhZ2UiLCJmb3JtYXR0ZXJzIiwidiIsIm1lc3NhZ2UiLCJzZXR1cCIsImNyZWF0ZURlYnVnIiwiZGVmYXVsdCIsImNvZXJjZSIsImRpc2FibGUiLCJlbmFibGUiLCJlbmFibGVkIiwiZGVzdHJveSIsImtleXMiLCJmb3JFYWNoIiwibmFtZXMiLCJza2lwcyIsInNlbGVjdENvbG9yIiwiaGFzaCIsImNoYXJDb2RlQXQiLCJjb2xvcnMiLCJwcmV2VGltZSIsImVuYWJsZU92ZXJyaWRlIiwic2VsZiIsImN1cnIiLCJOdW1iZXIiLCJwcmV2IiwidW5zaGlmdCIsImZvcm1hdCIsImZvcm1hdHRlciIsImxvZ0ZuIiwiZXh0ZW5kIiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwiZ2V0Iiwic2V0IiwiZGVsaW1pdGVyIiwibmV3RGVidWciLCJzdWJzdHIiLCJ0b05hbWVzcGFjZSIsImpvaW4iLCJyZWdleHAiLCJzdGFjayIsIkZ1bmN0aW9uIiwiU29ja2V0IiwidXJpIiwicHJvdG9jb2wiLCJ0cmFuc3BvcnRzIiwicGFyc2VyIiwicGFyc2V1cmkiLCJwYXJzZXFzIiwiaG9zdG5hbWUiLCJob3N0Iiwic2VjdXJlIiwicG9ydCIsInF1ZXJ5IiwicmVhZHlTdGF0ZSIsIndyaXRlQnVmZmVyIiwicHJldkJ1ZmZlckxlbiIsImFnZW50Iiwid2l0aENyZWRlbnRpYWxzIiwidXBncmFkZSIsImpzb25wIiwidGltZXN0YW1wUGFyYW0iLCJyZW1lbWJlclVwZ3JhZGUiLCJyZWplY3RVbmF1dGhvcml6ZWQiLCJwZXJNZXNzYWdlRGVmbGF0ZSIsInRocmVzaG9sZCIsInRyYW5zcG9ydE9wdGlvbnMiLCJjbG9zZU9uQmVmb3JldW5sb2FkIiwiZGVjb2RlIiwidXBncmFkZXMiLCJwaW5nSW50ZXJ2YWwiLCJwaW5nVGltZW91dCIsInBpbmdUaW1lb3V0VGltZXIiLCJ0cmFuc3BvcnQiLCJjbG9zZSIsIm9mZmxpbmVFdmVudExpc3RlbmVyIiwib25DbG9zZSIsIm9wZW4iLCJjbG9uZSIsIkVJTyIsInNpZCIsInByaW9yV2Vic29ja2V0U3VjY2VzcyIsImNyZWF0ZVRyYW5zcG9ydCIsInNoaWZ0Iiwic2V0VHJhbnNwb3J0Iiwib25EcmFpbiIsIm9uUGFja2V0Iiwib25FcnJvciIsInByb2JlIiwiZmFpbGVkIiwib25UcmFuc3BvcnRPcGVuIiwic2VuZCIsImRhdGEiLCJtc2ciLCJ1cGdyYWRpbmciLCJjbGVhbnVwIiwiZmx1c2giLCJlcnIiLCJmcmVlemVUcmFuc3BvcnQiLCJvbmVycm9yIiwib25UcmFuc3BvcnRDbG9zZSIsIm9uY2xvc2UiLCJvbnVwZ3JhZGUiLCJ0byIsInBhY2tldCIsIm9uSGFuZHNoYWtlIiwicmVzZXRQaW5nVGltZW91dCIsInNlbmRQYWNrZXQiLCJjb2RlIiwiZmlsdGVyVXBncmFkZXMiLCJvbk9wZW4iLCJhdXRvVW5yZWYiLCJ1bnJlZiIsIndyaXRhYmxlIiwiY29tcHJlc3MiLCJjbGVhbnVwQW5kQ2xvc2UiLCJ3YWl0Rm9yVXBncmFkZSIsInJlYXNvbiIsImRlc2MiLCJwaW5nSW50ZXJ2YWxUaW1lciIsImZpbHRlcmVkVXBncmFkZXMiLCJUcmFuc3BvcnQiLCJkZXNjcmlwdGlvbiIsImRvT3BlbiIsImRvQ2xvc2UiLCJwYWNrZXRzIiwid3JpdGUiLCJkZWNvZGVQYWNrZXQiLCJiaW5hcnlUeXBlIiwiWE1MSHR0cFJlcXVlc3QiLCJYSFIiLCJKU09OUCIsIndlYnNvY2tldCIsInBvbGxpbmciLCJ4aHIiLCJ4ZCIsInhzIiwiaXNTU0wiLCJ4ZG9tYWluIiwieHNjaGVtZSIsImZvcmNlSlNPTlAiLCJQb2xsaW5nIiwiZ2xvYmFsVGhpcyIsInJOZXdsaW5lIiwickVzY2FwZWROZXdsaW5lIiwiSlNPTlBQb2xsaW5nIiwiX19fZWlvIiwib25EYXRhIiwic2NyaXB0IiwicmVtb3ZlQ2hpbGQiLCJmb3JtIiwiaWZyYW1lIiwiYXN5bmMiLCJpbnNlcnRBdCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiaGVhZCIsImlzVUFnZWNrbyIsImFyZWEiLCJpZnJhbWVJZCIsInRvcCIsImxlZnQiLCJtZXRob2QiLCJjb21wbGV0ZSIsImluaXRJZnJhbWUiLCJodG1sIiwidmFsdWUiLCJzdWJtaXQiLCJhdHRhY2hFdmVudCIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsIm9ubG9hZCIsInBpY2siLCJlbXB0eSIsImhhc1hIUjIiLCJyZXNwb25zZVR5cGUiLCJmb3JjZUJhc2U2NCIsInN1cHBvcnRzQmluYXJ5IiwiUmVxdWVzdCIsInJlcSIsInJlcXVlc3QiLCJwb2xsWGhyIiwiY3JlYXRlIiwiZXh0cmFIZWFkZXJzIiwic2V0RGlzYWJsZUhlYWRlckNoZWNrIiwic2V0UmVxdWVzdEhlYWRlciIsInJlcXVlc3RUaW1lb3V0IiwidGltZW91dCIsImhhc1hEUiIsIm9uTG9hZCIsInJlc3BvbnNlVGV4dCIsInJlcXVlc3RzQ291bnQiLCJyZXF1ZXN0cyIsIm9uU3VjY2VzcyIsImZyb21FcnJvciIsImFib3J0IiwiWERvbWFpblJlcXVlc3QiLCJlbmFibGVzWERSIiwidW5sb2FkSGFuZGxlciIsInRlcm1pbmF0aW9uRXZlbnQiLCJ5ZWFzdCIsInBvbGwiLCJvblBhdXNlIiwidG90YWwiLCJkb1BvbGwiLCJjYWxsYmFjayIsImRlY29kZVBheWxvYWQiLCJlbmNvZGVQYXlsb2FkIiwiZG9Xcml0ZSIsInNjaGVtYSIsInRpbWVzdGFtcFJlcXVlc3RzIiwiYjY0IiwiZW5jb2RlIiwiaXB2NiIsIldlYlNvY2tldCIsIk1veldlYlNvY2tldCIsInVzaW5nQnJvd3NlcldlYlNvY2tldCIsImRlZmF1bHRCaW5hcnlUeXBlIiwiaXNSZWFjdE5hdGl2ZSIsInByb2R1Y3QiLCJXUyIsImNoZWNrIiwicHJvdG9jb2xzIiwiaGVhZGVycyIsIndzIiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJvbm9wZW4iLCJfc29ja2V0Iiwib25tZXNzYWdlIiwiZXYiLCJsYXN0UGFja2V0IiwiZW5jb2RlUGFja2V0IiwiQnVmZmVyIiwiYnl0ZUxlbmd0aCIsImF0dHIiLCJyZWR1Y2UiLCJhY2MiLCJrIiwiaGFzQ09SUyIsImNvbmNhdCIsIlBBQ0tFVF9UWVBFUyIsIlBBQ0tFVF9UWVBFU19SRVZFUlNFIiwiRVJST1JfUEFDS0VUIiwid2l0aE5hdGl2ZUFycmF5QnVmZmVyIiwiYmFzZTY0ZGVjb2RlciIsImVuY29kZWRQYWNrZXQiLCJtYXBCaW5hcnkiLCJjaGFyQXQiLCJkZWNvZGVCYXNlNjRQYWNrZXQiLCJwYWNrZXRUeXBlIiwiZGVjb2RlZCIsIkJsb2IiLCJ3aXRoTmF0aXZlQmxvYiIsImlzVmlldyIsImJ1ZmZlciIsImVuY29kZUJsb2JBc0Jhc2U2NCIsImZpbGVSZWFkZXIiLCJGaWxlUmVhZGVyIiwiY29udGVudCIsInJlc3VsdCIsInJlYWRBc0RhdGFVUkwiLCJTRVBBUkFUT1IiLCJmcm9tQ2hhckNvZGUiLCJlbmNvZGVkUGFja2V0cyIsImNvdW50IiwiZW5jb2RlZFBheWxvYWQiLCJkZWNvZGVkUGFja2V0IiwiTiIsIk0iLCJNQVRSSVhfQSIsIlVQUEVSX01BU0siLCJMT1dFUl9NQVNLIiwibXQiLCJtdGkiLCJjb25zdHJ1Y3RvciIsImluaXRfYnlfYXJyYXkiLCJpbml0X3NlZWQiLCJpbml0X2tleSIsImtleV9sZW5ndGgiLCJyYW5kb21faW50IiwibWFnMDEiLCJrayIsInJhbmRvbV9pbnQzMSIsInJhbmRvbV9pbmNsIiwicmFuZG9tX2V4Y2wiLCJyYW5kb21fbG9uZyIsImVuY29kZVVSSUNvbXBvbmVudCIsInFzIiwicXJ5IiwicGFpcnMiLCJwYWlyIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwicmUiLCJwYXJ0cyIsInNvdXJjZSIsImF1dGhvcml0eSIsImlwdjZ1cmkiLCJwYXRoTmFtZXMiLCJxdWVyeUtleSIsInJlZ3giLCIkMCIsIiQyIiwiQVJHX0xFTkdUSCIsInoiLCJTRUdNRU5UX1BBVFRFUk4iLCJOVU1CRVIiLCJudW1iZXJzIiwiY29tbWFuZCIsInRoZUFyZ3MiLCJwYXJzZVZhbHVlcyIsInRoZUNvbW1hbmQiLCJpbWdEYXRhIiwibngiLCJueSIsInN1cHBvcnRzU3ZnUGF0aEFyZ3VtZW50IiwicGFyc2VQYXRoIiwic3RhcnRQb2ludCIsImN1cnJlbnRQb2ludCIsInNlZ21lbnRzIiwicGF0aFR5cGUiLCJjcHgiLCJjcHkiLCJxY3B4IiwicWNweSIsInJ4IiwicnkiLCJhbmdsZSIsImxhcmdlQXJjRmxhZyIsInN3ZWVwRmxhZyIsImVuZFBvaW50IiwibWlkUG9pbnQiLCJyb3RhdGVQb2ludCIsImxhbWJkYSIsImNlbnRlclBvaW50IiwidDEiLCJ0MiIsInNjYWxlUG9pbnQiLCJzdGFydEFuZ2xlIiwiZW5kQW5nbGUiLCJ0cmFuc2xhdGVQb2ludCIsImNjdyIsImNGaWxsIiwiY1N0cm9rZSIsImZpbGxSdWxlIiwiYnVpbGRQYXRoIiwiY0lzUG9pbnRJblBhdGgiLCJwYXRoMmRQb2x5ZmlsbCIsInVybF8xIiwibWFuYWdlcl8xIiwibG9va3VwIiwiY2FjaGUiLCJwYXJzZWQiLCJzYW1lTmFtZXNwYWNlIiwibmV3Q29ubmVjdGlvbiIsImZvcmNlTmV3IiwibXVsdGlwbGV4IiwiaW8iLCJNYW5hZ2VyIiwic29ja2V0X2lvX3BhcnNlcl8xIiwibWFuYWdlcl8yIiwic29ja2V0XzEiLCJlaW8iLCJvbl8xIiwidHlwZWRfZXZlbnRzXzEiLCJuc3BzIiwic3VicyIsInJlY29ubmVjdGlvbiIsInJlY29ubmVjdGlvbkF0dGVtcHRzIiwiSW5maW5pdHkiLCJyZWNvbm5lY3Rpb25EZWxheSIsInJlY29ubmVjdGlvbkRlbGF5TWF4IiwicmFuZG9taXphdGlvbkZhY3RvciIsImJhY2tvZmYiLCJfcmVhZHlTdGF0ZSIsIl9wYXJzZXIiLCJlbmNvZGVyIiwiRW5jb2RlciIsImRlY29kZXIiLCJEZWNvZGVyIiwiX2F1dG9Db25uZWN0IiwiYXV0b0Nvbm5lY3QiLCJfcmVjb25uZWN0aW9uIiwiX3JlY29ubmVjdGlvbkF0dGVtcHRzIiwiX2EiLCJfcmVjb25uZWN0aW9uRGVsYXkiLCJfcmFuZG9taXphdGlvbkZhY3RvciIsIl9yZWNvbm5lY3Rpb25EZWxheU1heCIsIl90aW1lb3V0IiwiX3JlY29ubmVjdGluZyIsInJlY29ubmVjdCIsImVuZ2luZSIsInNraXBSZWNvbm5lY3QiLCJvcGVuU3ViRGVzdHJveSIsImVycm9yU3ViIiwiZW1pdFJlc2VydmVkIiwibWF5YmVSZWNvbm5lY3RPbk9wZW4iLCJzdWJEZXN0cm95Iiwib25waW5nIiwib25kYXRhIiwib25kZWNvZGVkIiwibnNwIiwiYWN0aXZlIiwiX2Nsb3NlIiwib25yZWNvbm5lY3QiLCJhdHRlbXB0IiwiU3RyaWN0RXZlbnRFbWl0dGVyIiwiUkVTRVJWRURfRVZFTlRTIiwiZnJlZXplIiwiY29ubmVjdCIsImNvbm5lY3RfZXJyb3IiLCJkaXNjb25uZWN0IiwiZGlzY29ubmVjdGluZyIsIm5ld0xpc3RlbmVyIiwicmVjZWl2ZUJ1ZmZlciIsInNlbmRCdWZmZXIiLCJpZHMiLCJhY2tzIiwiZmxhZ3MiLCJjb25uZWN0ZWQiLCJkaXNjb25uZWN0ZWQiLCJhdXRoIiwib25wYWNrZXQiLCJzdWJFdmVudHMiLCJQYWNrZXRUeXBlIiwiRVZFTlQiLCJwb3AiLCJpc1RyYW5zcG9ydFdyaXRhYmxlIiwiZGlzY2FyZFBhY2tldCIsInZvbGF0aWxlIiwiX3BhY2tldCIsIkNPTk5FQ1QiLCJvbmNvbm5lY3QiLCJvbmV2ZW50IiwiQklOQVJZX0VWRU5UIiwiQUNLIiwib25hY2siLCJCSU5BUllfQUNLIiwiRElTQ09OTkVDVCIsIm9uZGlzY29ubmVjdCIsIkNPTk5FQ1RfRVJST1IiLCJhY2siLCJlbWl0RXZlbnQiLCJfYW55TGlzdGVuZXJzIiwibGlzdGVuZXIiLCJzZW50IiwiZW1pdEJ1ZmZlcmVkIiwibG9jIiwiaHJlZiIsImlzX2JpbmFyeV8xIiwiZGVjb25zdHJ1Y3RQYWNrZXQiLCJidWZmZXJzIiwicGFja2V0RGF0YSIsInBhY2siLCJfZGVjb25zdHJ1Y3RQYWNrZXQiLCJhdHRhY2htZW50cyIsImlzQmluYXJ5IiwicGxhY2Vob2xkZXIiLCJfcGxhY2Vob2xkZXIiLCJudW0iLCJuZXdEYXRhIiwicmVjb25zdHJ1Y3RQYWNrZXQiLCJfcmVjb25zdHJ1Y3RQYWNrZXQiLCJiaW5hcnlfMSIsImhhc0JpbmFyeSIsImVuY29kZUFzQmluYXJ5IiwiZW5jb2RlQXNTdHJpbmciLCJkZWNvbnN0cnVjdGlvbiIsImRlY29kZVN0cmluZyIsInJlY29uc3RydWN0b3IiLCJCaW5hcnlSZWNvbnN0cnVjdG9yIiwidGFrZUJpbmFyeURhdGEiLCJzdGFydCIsImJ1ZiIsIm5leHQiLCJwYXlsb2FkIiwidHJ5UGFyc2UiLCJpc1BheWxvYWRWYWxpZCIsImZpbmlzaGVkUmVjb25zdHJ1Y3Rpb24iLCJyZWNvblBhY2siLCJiaW5EYXRhIiwid2l0aE5hdGl2ZUZpbGUiLCJGaWxlIiwidG9KU09OIiwiYWxwaGFiZXQiLCJlbmNvZGVkIiwibm93IiwiaW5pdFVJIiwiZ2FtZUNyZWF0ZWQiLCJqb2luZWQiLCJuYW1lQ29uZmlybWVkIiwiZ2FtZVN0YXJ0ZWQiLCJjcmVhdGVHYW1lQnRuIiwic2hvd0pvaW5HYW1lUHJvbXB0QnRuIiwiY29uZmlybUpvaW5HYW1lQnRuIiwicm9vbUNvZGVJbnB1dCIsInJvb21Db2RlRGlzcGxheSIsIm5hbWVJbnB1dCIsIm5hbWVDb25maXJtIiwibGVhdmVXYWl0aW5nQnRuIiwibGVhdmVHYW1lU3RhcnRBbGVydCIsImdhbWVTdGFydCIsImluaXRUcmlnZ2VyIiwiaW5pdFVJUHJvbWlzZSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJwYXJlbnRQb3BvdXRzIiwidG9nZ2xlUG9wb3V0IiwiZmxhZyIsImNvbmZpcm1OYW1lIiwibmV3R2FtZSIsInJvb21Db2RlIiwiY29uZmlybUpvaW5HYW1lIiwicGxheWVyTnVtYmVyIiwiaG9zdE5hbWUiLCJjaGFsbGVuZ2VyIiwicG9wb3V0IiwicmVtb3ZlIiwidG9nZ2xlSGlkZU9uQWN0aW9uIiwidG9nZ2xlU2hvd09uQWN0aW9uIiwic3RhcnRDb3VudGluZyIsImdjIiwidGltZUludGVydmFsIiwic3BsYXNoU3dpdGNoZXIiLCJ1aUluaXRQcm9taXNlIiwiZHJhd0dhbWUiLCJhbGVydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxTQUFTQSxjQUFULEdBQXNEO0FBQUEsTUFBOUJDLGNBQThCLHVFQUFiLEdBQWE7QUFBQSxNQUFSQyxNQUFRO0FBQzNELE1BQUlDLGVBQUo7QUFDQUMsVUFBUSxDQUFDQyxnQkFBVCxDQUEwQixTQUExQixFQUFxQyxVQUFDQyxDQUFELEVBQU87QUFDMUMsUUFBSUMsaUJBQWlCLEdBQUdDLE1BQU0sQ0FBQ0MsVUFBUCxHQUFvQkQsTUFBTSxDQUFDRSxXQUFuRDs7QUFDQSxRQUFJSCxpQkFBaUIsSUFBSSxDQUF6QixFQUE0QjtBQUMxQixjQUFRRCxDQUFDLENBQUNLLEdBQVY7QUFDRSxhQUFLLE1BQUwsQ0FERixDQUNlOztBQUNiLGFBQUssV0FBTDtBQUNFO0FBQ0FDLHVCQUFhLENBQUNULGVBQUQsQ0FBYjtBQUNBQSx5QkFBZSxHQUFHVSxXQUFXLENBQUMsWUFBTTtBQUNsQ1gsa0JBQU0sQ0FBQ1ksSUFBUCxDQUFZLGlCQUFaLEVBQStCQyw0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QzQ3QixNQUF0QyxDQUE2QyxVQUE3QztBQUNELENBRkQ7QUFJQXBqQyxNQUFNLENBQUM2ZSxFQUFQLENBQVUsT0FBVixFQUFtQixZQUFNO0FBQ3ZCdFYsTUFBSSxDQUFDSSxVQUFMLENBQWdCbUYsV0FBaEIsQ0FBNEJ0SCxTQUE1QixDQUFzQzQ3QixNQUF0QyxDQUE2QyxVQUE3QztBQUNELENBRkQ7QUFJQXBqQyxNQUFNLENBQUM2ZSxFQUFQLENBQVUsZ0JBQVYsRUFBNEIsWUFBTTtBQUNoQ2dsQixPQUFLLENBQUMsa0JBQUQsQ0FBTDtBQUNELENBRkQ7QUFJQTdqQyxNQUFNLENBQUM2ZSxFQUFQLENBQVUsYUFBVixFQUF5QixZQUFNO0FBQzdCZ2xCLE9BQUssQ0FBQyxxQkFBRCxDQUFMO0FBQ0QsQ0FGRDtBQUlBN2pDLE1BQU0sQ0FBQzZlLEVBQVAsQ0FBVSxpQkFBVixFQUE2QixZQUFNO0FBQ2pDZ2xCLE9BQUssQ0FBQyx5Q0FBRCxDQUFMO0FBQ0QsQ0FGRCxFOzs7Ozs7Ozs7QUMvREEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHBsYXllclJlZiB9IGZyb20gJy4vZGF0YSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0S2V5Q29udHJvbChpbnRlcnZhbFBlcmlvZCA9IDMwMCwgc29ja2V0KSB7XG4gIGxldCBrZXlIb2xkSW50ZXJ2YWw7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICAgIGxldCB3aW5kb3dBc3BlY3RSYXRpbyA9IHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIGlmICh3aW5kb3dBc3BlY3RSYXRpbyA+PSAxKSB7XG4gICAgICBzd2l0Y2ggKGUua2V5KSB7XG4gICAgICAgIGNhc2UgXCJEb3duXCI6IC8vIElFL0VkZ2Ugc3BlY2lmaWMgdmFsdWVcbiAgICAgICAgY2FzZSBcIkFycm93RG93blwiOlxuICAgICAgICAgIC8vIERvIHNvbWV0aGluZyBmb3IgXCJkb3duIGFycm93XCIga2V5IHByZXNzLlxuICAgICAgICAgIGNsZWFySW50ZXJ2YWwoa2V5SG9sZEludGVydmFsKTtcbiAgICAgICAgICBrZXlIb2xkSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBzb2NrZXQuZW1pdCgncGxheWVyTW92ZU1pbnVzJywgcGxheWVyUmVmKTtcbiAgICAgICAgICB9LCBpbnRlcnZhbFBlcmlvZClcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIlVwXCI6IC8vIElFL0VkZ2Ugc3BlY2lmaWMgdmFsdWVcbiAgICAgICAgY2FzZSBcIkFycm93VXBcIjpcbiAgICAgICAgICAvLyBEbyBzb21ldGhpbmcgZm9yIFwidXAgYXJyb3dcIiBrZXkgcHJlc3MuXG4gICAgICAgICAgY2xlYXJJbnRlcnZhbChrZXlIb2xkSW50ZXJ2YWwpO1xuICAgICAgICAgIGtleUhvbGRJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIHNvY2tldC5lbWl0KCdwbGF5ZXJNb3ZlUGx1cycsIHBsYXllclJlZik7XG4gICAgICAgICAgfSwgaW50ZXJ2YWxQZXJpb2QpXG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgc3dpdGNoIChlLmtleSkge1xuICAgICAgICBjYXNlIFwiTGVmdFwiOiAvLyBJRS9FZGdlIHNwZWNpZmljIHZhbHVlXG4gICAgICAgIGNhc2UgXCJBcnJvd0xlZnRcIjpcbiAgICAgICAgICAvLyBEbyBzb21ldGhpbmcgZm9yIFwibGVmdCBhcnJvd1wiIGtleSBwcmVzcy5cbiAgICAgICAgICBjbGVhckludGVydmFsKGtleUhvbGRJbnRlcnZhbCk7XG4gICAgICAgICAga2V5SG9sZEludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgc29ja2V0LmVtaXQoJ3BsYXllck1vdmVNaW51cycsIHBsYXllclJlZik7XG4gICAgICAgICAgfSwgaW50ZXJ2YWxQZXJpb2QpXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJSaWdodFwiOiAvLyBJRS9FZGdlIHNwZWNpZmljIHZhbHVlXG4gICAgICAgIGNhc2UgXCJBcnJvd1JpZ2h0XCI6XG4gICAgICAgICAgLy8gRG8gc29tZXRoaW5nIGZvciBcInJpZ2h0IGFycm93XCIga2V5IHByZXNzLlxuICAgICAgICAgIGNsZWFySW50ZXJ2YWwoa2V5SG9sZEludGVydmFsKTtcbiAgICAgICAgICBrZXlIb2xkSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBzb2NrZXQuZW1pdCgncGxheWVyTW92ZVBsdXMnLCBwbGF5ZXJSZWYpO1xuICAgICAgICAgIH0sIGludGVydmFsUGVyaW9kKVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHN3aXRjaCAoZS5rZXkpIHtcbiAgICAgIGNhc2UgXCJTcGFjZVwiOlxuICAgICAgICAvLyBEbyBzb21ldGhpbmcgZm9yIFwiZW50ZXJcIiBvciBcInJldHVyblwiIGtleSBwcmVzcy5cbiAgICAgICAgc29ja2V0LmVtaXQoJ3BsYXllckx1bmNoQmFsbCcsIHBsYXllclJlZik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIkVzY1wiOiAvLyBJRS9FZGdlIHNwZWNpZmljIHZhbHVlXG4gICAgICBjYXNlIFwiRXNjYXBlXCI6XG4gICAgICAgIC8vIERvIHNvbWV0aGluZyBmb3IgXCJlc2NcIiBrZXkgcHJlc3MuXG4gICAgICAgIHNvY2tldC5lbWl0KCdwbGF5ZXJFc2NhcGUnLCBwbGF5ZXJSZWYpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybjsgLy8gUXVpdCB3aGVuIHRoaXMgZG9lc24ndCBoYW5kbGUgdGhlIGtleSBldmVudC5cbiAgICB9XG4gIH0pXG59XG5cblxuIiwiaW1wb3J0IHsgQ2FudmFzMkRGeEJhc2UsIGJvb3QgfSBmcm9tICcuL2xpYi9iYXNlJztcbmltcG9ydCB7IFN0cm9rZUFuaW1hdGlvbiwgU3dpcmw4Qml0LCBTdGFyU2t5IH0gZnJvbSAnLi9saWIvYW5pbWF0aW9uJztcbmltcG9ydCB7IGdldENhY2hlQ2FudmFzIH0gZnJvbSAnLi9saWIvdXRpbCc7XG5pbXBvcnQgeyBwbGF5ZXJzRGF0YSwgYmFsbERhdGEgfSBmcm9tICcuLi9kYXRhJztcbmltcG9ydCB7IGRyYXdSZWN0LCBkcmF3Q2lyY2xlIH0gZnJvbSAnLi9saWIvc2hhcGUnXG5pbXBvcnQgeyByYW5kb21XaXRoaW5SYW5nZSwgcGFkU3RyaW5nIH0gZnJvbSAnLi9saWIvZnVuY3Rpb24nO1xuXG5jb25zdCBERUZBVUxUID0ge1xuICBiZ0NvbG9yOiAncmdiYSgwLDAsMCwxKScsXG4gIGNvdXJ0Q29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LDEpJyxcbiAgY291cnRBc3BlY3RSYXRpbzogNSAvIDNcbn1cblxuZXhwb3J0IGNsYXNzIEVuZ2luZSBleHRlbmRzIENhbnZhczJERnhCYXNlIHtcbiAgY29uc3RydWN0b3IoZWxlLCBkZWZhdWx0Q29uZmlnLCBjb25maWcpIHtcbiAgICBzdXBlcihlbGUsIGRlZmF1bHRDb25maWcsIGNvbmZpZylcbiAgICB0aGlzLnBpeGVsQmFzZSA9IDE0NDA7XG4gICAgdGhpcy5pbml0KCk7XG4gICAgdGhpcy5mcHMgPSAzMDtcbiAgICB0aGlzLmNvdXJ0T2Zmc2V0ID0gNzU7XG4gICAgdGhpcy5jb3VydE9mZnNldE1vYmlsZSA9IDI1O1xuICAgIHRoaXMuZ2FtZVN0YXR1cyA9IDA7XG4gICAgdGhpcy5wYXVzZSA9IGZhbHNlO1xuICAgIHRoaXMucGxheWVyc1RoaWNrbmVzcyA9IDIwO1xuICAgIC8vMDogbm90IHN0YXJ0IHlldFxuICAgIC8vMTogY3VydGFpbiBhbmltYXRpbmdcbiAgICAvLzI6IGNvdXJ0IGFuaW1hdGluZ1xuICAgIC8vMzogYW5pbWF0aW5nIHBsYXllcnMgYW5kIHNjcm9lYm9hcmRcbiAgICAvLzQ6IGdhbWUgaXMgcmVhZHlcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5jdXJ0YWluID0gdGhpcy5nZW5DdXJ0YWluKCk7Ly8g5pyA5bqV5bGkY2FudmFzXG4gICAgdGhpcy5jb3VydCA9IHRoaXMuZ2VuQ291cnQoKTsvL+acgOW6leWxpGNhbnZhc1xuICAgIHRoaXMuc3RhclNreSA9IHRoaXMuZ2VuU3RhclNreSgpOy8v5YCS5pW456ys5LqM5bGkY2FudmFzXG4gICAgdGhpcy5wbGF5ZXJzID0gdGhpcy5nZW5QbGF5ZXJzKCk7Ly/lgJLmlbjnrKzkuInlsaRjYW52YXNcbiAgICB0aGlzLmJhbGwgPSB0aGlzLmdlbkJhbGwoKTsvL+WAkuaVuOesrOWbm+WxpGNhbnZhc1xuICAgIHRoaXMuc2NvcmVib2FyZHMgPSB0aGlzLmdlblNjb3JlYm9hcmRzKCk7Ly/mnIDooajlsaRjYW52YXNcbiAgICB0aGlzLmluaXRSZXNpemVkKCk7XG4gIH1cblxuICBpbml0UmVzaXplZCgpIHtcbiAgICB0aGlzLnJlc2l6ZWRDYWxsYmFjayA9ICgpID0+IHtcbiAgICAgIHRoaXMuY3VydGFpbi5kcmF3U3RhdGljKClcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLmdhbWVTdGF0dXMgPT09IDMpIHtcbiAgICAgICAgICAgIHRoaXMuYmFja2dyb3VuZCgnYmxhY2snKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5jb3VydC5kcmF3U3RhdGljKCk7XG4gICAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgZ2VuQ3VydGFpbihiYW5kV2lkdGggPSAzMCkge1xuICAgIGxldCBjdXJ0YWluQ2FudmFzSW5zdGFuY2UgPSB0aGlzLmN1cnRhaW5DYW52YXNJbnN0YW5jZSA9IHRoaXMuY3JlYXRlVmlydHVhbENhbnZhc0Jhc2VJbnN0YW5jZSgpO1xuICAgIGN1cnRhaW5DYW52YXNJbnN0YW5jZS5zZXRDYW52YXNTaXplKHRoaXMuY3ZzLndpZHRoLCB0aGlzLmN2cy5oZWlnaHQpO1xuICAgIGxldCBjdXJ0YWluQW5pbWF0aW9uSW5zdGFuY2UgPSBuZXcgU3dpcmw4Qml0KGN1cnRhaW5DYW52YXNJbnN0YW5jZS5jdHgpO1xuICAgIGxldCBjdXJ0YWluID0ge1xuICAgICAgYW5pbWF0ZTogKCkgPT4ge1xuICAgICAgICBsZXQgaW5pdGlhbEltYWdlID0gZ2V0Q2FjaGVDYW52YXModGhpcy5jdHgpO1xuICAgICAgICBsZXQgcHJvbWlzZSA9IGN1cnRhaW5BbmltYXRpb25JbnN0YW5jZS5hbmltYXRlKGZhbHNlLCBiYW5kV2lkdGgsIHRoaXMuY29uZmlnLmJnQ29sb3IpO1xuICAgICAgICBsZXQgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShpbml0aWFsSW1hZ2UsIDAsIDAsIHRoaXMuY3ZzLndpZHRoLCB0aGlzLmN2cy5oZWlnaHQsIDAsIDAsIHRoaXMuY3ZzLndpZHRoLCB0aGlzLmN2cy5oZWlnaHQpO1xuICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShjdXJ0YWluQ2FudmFzSW5zdGFuY2UuY3ZzLCAwLCAwLCBjdXJ0YWluQ2FudmFzSW5zdGFuY2UuY3ZzLndpZHRoLCBjdXJ0YWluQ2FudmFzSW5zdGFuY2UuY3ZzLmhlaWdodCwgMCwgMCwgdGhpcy5jdnMud2lkdGgsIHRoaXMuY3ZzLmhlaWdodCk7XG4gICAgICAgIH0sIHRoaXMuZnBzKTtcbiAgICAgICAgcmV0dXJuIHByb21pc2UudGhlbigoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMpID0+IHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgICAgcmVzKCk7XG4gICAgICAgICAgICB9LCA1MDApXG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBkcmF3U3RhdGljOiAoKSA9PiB7IC8vXG4gICAgICAgIGxldCB0cmlnZ2VyO1xuICAgICAgICBsZXQgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xuICAgICAgICAgIHRyaWdnZXIgPSByZXM7XG4gICAgICAgIH0pXG4gICAgICAgIGxldCBzdGF0aWNJbWFnZSA9IGN1cnRhaW5DYW52YXNJbnN0YW5jZS5jdnM7XG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcbiAgICAgICAgICBzdGF0aWNJbWFnZSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgc3RhdGljSW1hZ2Uud2lkdGgsXG4gICAgICAgICAgc3RhdGljSW1hZ2UuaGVpZ2h0LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICB0aGlzLmN2cy53aWR0aCxcbiAgICAgICAgICB0aGlzLmN2cy5oZWlnaHRcbiAgICAgICAgKVxuICAgICAgICB0cmlnZ2VyKCk7XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIGN1cnRhaW47XG4gIH1cblxuICBnZXRBc3BlY3RSYXRpbygpIHtcbiAgICByZXR1cm4gdGhpcy5jdnMud2lkdGggLyB0aGlzLmN2cy5oZWlnaHQ7XG4gIH1cblxuICByZXNwb25zaXZlUGFpbnRlcih0YXJnZXRMYXllciwgc291cmNlQ2FudmFzLCBpbml0aWFsSW1hZ2UpIHtcbiAgICBsZXQgb2Zmc2V0ID0gdGhpcy5jb3VydE9mZnNldDtcbiAgICBsZXQgb2Zmc2V0TW9iaWxlID0gdGhpcy5jb3VydE9mZnNldE1vYmlsZTtcbiAgICB0YXJnZXRMYXllci5jdHguc2F2ZSgpO1xuICAgIC8v55WrY291cnQg5pyD5pyJ5Zub56iu54uA5rOBLCAoY2FudmFz6ZW35a+sPumgkOioremVt+WvrOavlD4xKSB8ICgxPD1jYW52YXPplbflr6w86aCQ6Kit6ZW35a+s5q+UKSB8ICjpoJDoqK3plbflr6zmr5TlgJLmlbg8Y2FudmFz6ZW35a+s5q+UPDEpIO+9nCAoY2FudmFz6ZW35a+s5q+UPOmgkOioremVt+WvrOavlOWAkuaVuDwxKVxuICAgIGlmICh0aGlzLmdldEFzcGVjdFJhdGlvKCkgPj0gMSkge1xuICAgICAgLy8g6YCZ6YKK5piv5YmN5YWp56iu54uA5rOBXG4gICAgICAvL+WFiOa4hemZpOS4gOasoeS5i+W+jOeVq2luaXRpYWxJbWFnZSAsIOWGjeeVq2NvdXJ0XG4gICAgICB0YXJnZXRMYXllci5jbGVhcigpO1xuICAgICAgbGV0IHR5cGVBID0gKHRhcmdldExheWVyLmN2cy5oZWlnaHQgLSAyICogb2Zmc2V0KSAqIHRoaXMuY29uZmlnLmNvdXJ0QXNwZWN0UmF0aW8gPCB0YXJnZXRMYXllci5jdnMud2lkdGggLSAyICogb2Zmc2V0O1xuICAgICAgbGV0IG9mZnNldFYsIG9mZnNldEgsIGNvdXJ0SGVpZ2h0LCBjb3VydFdpZHRoO1xuICAgICAgaWYgKHR5cGVBKSB7XG4gICAgICAgIC8vIOWFiOeul+WHuue4rua4m+mBjm9mZnNldCDnmoRjdnMg5a+sXG4gICAgICAgIG9mZnNldFYgPSBvZmZzZXQ7XG4gICAgICAgIGNvdXJ0SGVpZ2h0ID0gdGFyZ2V0TGF5ZXIuY3ZzLmhlaWdodCAtIDIgKiBvZmZzZXQ7XG4gICAgICAgIGNvdXJ0V2lkdGggPSBjb3VydEhlaWdodCAqIHRoaXMuY29uZmlnLmNvdXJ0QXNwZWN0UmF0aW87XG4gICAgICAgIG9mZnNldEggPSAodGFyZ2V0TGF5ZXIuY3ZzLndpZHRoIC0gY291cnRXaWR0aCkgLyAyO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIC8vIOmdnnR5cGVB55qE54uA5rOBLCDkuZ/lsLHmmK9jYW52YXPlr6zpq5jmr5TkvY7mlrxjb25maWcg6Kit5a6a55qE5q+U5L6LXG4gICAgICAgIG9mZnNldEggPSBvZmZzZXQ7XG4gICAgICAgIGNvdXJ0V2lkdGggPSB0YXJnZXRMYXllci5jdnMud2lkdGggLSAyICogb2Zmc2V0O1xuICAgICAgICBjb3VydEhlaWdodCA9IGNvdXJ0V2lkdGggLyB0aGlzLmNvbmZpZy5jb3VydEFzcGVjdFJhdGlvO1xuICAgICAgICBvZmZzZXRWID0gKHRhcmdldExheWVyLmN2cy5oZWlnaHQgLSBjb3VydEhlaWdodCkgLyAyO1xuICAgICAgfVxuICAgICAgaWYgKGluaXRpYWxJbWFnZSkge1xuICAgICAgICB0YXJnZXRMYXllci5jdHguZHJhd0ltYWdlKFxuICAgICAgICAgIGluaXRpYWxJbWFnZSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgaW5pdGlhbEltYWdlLndpZHRoLFxuICAgICAgICAgIGluaXRpYWxJbWFnZS5oZWlnaHQsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIHRhcmdldExheWVyLmN2cy53aWR0aCxcbiAgICAgICAgICB0YXJnZXRMYXllci5jdnMuaGVpZ2h0XG4gICAgICAgIClcblxuICAgICAgfVxuICAgICAgLy8g5YWI5peL6L2J55Wr5biDLCDlm6DngrogdmlydHVhbGNhbnZhcyDmmK/kuIDlvLXlnoLnm7TnmoTnlavluINcbiAgICAgIHRhcmdldExheWVyLmN0eC50cmFuc2xhdGUodGFyZ2V0TGF5ZXIuY3ZzLndpZHRoIC8gMiwgdGFyZ2V0TGF5ZXIuY3ZzLmhlaWdodCAvIDIpO1xuICAgICAgdGFyZ2V0TGF5ZXIuY3R4LnJvdGF0ZSgtTWF0aC5QSSAvIDIpO1xuICAgICAgdGFyZ2V0TGF5ZXIuY3R4LnRyYW5zbGF0ZSgtdGFyZ2V0TGF5ZXIuY3ZzLmhlaWdodCAvIDIsIC10YXJnZXRMYXllci5jdnMud2lkdGggLyAyKTtcbiAgICAgIC8vIOWboOeCumNvdXJ0IOeahOWkp+Wwj+acg+maqOiRl2NhbnZhcyDnmoTplbflr6zmr5TogIzororli5VcbiAgICAgIC8vIOmAmemCiuWFiCDlgYfoqK3ku4rlpKnmmK9jYW52YXMg5a+s5q+U6auY6LaF5Ye65b6I5aSa55qE5oOF5rOBICwg5Lmf5bCx5piv54uA5rOBXCJ0eXBlQVwiXG4gICAgICB0YXJnZXRMYXllci5jdHguZHJhd0ltYWdlKFxuICAgICAgICBzb3VyY2VDYW52YXMsXG4gICAgICAgIDAsXG4gICAgICAgIDAsXG4gICAgICAgIHNvdXJjZUNhbnZhcy53aWR0aCxcbiAgICAgICAgc291cmNlQ2FudmFzLmhlaWdodCxcbiAgICAgICAgb2Zmc2V0VixcbiAgICAgICAgb2Zmc2V0SCxcbiAgICAgICAgY291cnRIZWlnaHQsXG4gICAgICAgIGNvdXJ0V2lkdGhcbiAgICAgIClcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAvL+mAmemCiuaYr+W+jOWFqeeorueLgOazgVxuICAgICAgLy8g5Zug54K6Y291cnQg55qE5aSn5bCP5pyD6Zqo6JGXY2FudmFzIOeahOmVt+WvrOavlOiAjOiuiuWLlVxuICAgICAgLy8g6YCZ6YKK5YWIIOWBh+ioreS7iuWkqeaYr2NhbnZhcyDpq5jmr5Tlr6zmr5TotoXlh7rlvojlpJrnmoTmg4Xms4EgLCDkuZ/lsLHmmK/ni4Dms4FcInR5cGVBXCJcbiAgICAgIGxldCB0eXBlQSA9ICh0YXJnZXRMYXllci5jdnMud2lkdGggLSAyICogb2Zmc2V0TW9iaWxlKSAqIHRoaXMuY29uZmlnLmNvdXJ0QXNwZWN0UmF0aW8gPCB0YXJnZXRMYXllci5jdnMuaGVpZ2h0IC0gMiAqIG9mZnNldDtcbiAgICAgIGxldCBvZmZzZXRWLCBvZmZzZXRILCBjb3VydEhlaWdodCwgY291cnRXaWR0aDtcbiAgICAgIGlmICh0eXBlQSkge1xuICAgICAgICAvLyDlhYjnrpflh7rnuK7muJvpgY5vZmZzZXQg55qEY3ZzIOWvrFxuICAgICAgICBvZmZzZXRIID0gb2Zmc2V0TW9iaWxlO1xuICAgICAgICBjb3VydFdpZHRoID0gdGFyZ2V0TGF5ZXIuY3ZzLndpZHRoIC0gMiAqIG9mZnNldE1vYmlsZTtcbiAgICAgICAgY291cnRIZWlnaHQgPSBjb3VydFdpZHRoICogdGhpcy5jb25maWcuY291cnRBc3BlY3RSYXRpbztcbiAgICAgICAgb2Zmc2V0ViA9ICh0YXJnZXRMYXllci5jdnMuaGVpZ2h0IC0gY291cnRIZWlnaHQpIC8gMjtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICAvLyDpnZ50eXBlQeeahOeLgOazgSwg5Lmf5bCx5pivY2FudmFz5a+s6auY5q+U5L2O5pa8Y29uZmlnIOioreWumueahOavlOS+i1xuICAgICAgICBvZmZzZXRWID0gb2Zmc2V0O1xuICAgICAgICBjb3VydEhlaWdodCA9IHRhcmdldExheWVyLmN2cy5oZWlnaHQgLSAyICogb2Zmc2V0O1xuICAgICAgICBjb3VydFdpZHRoID0gY291cnRIZWlnaHQgLyB0aGlzLmNvbmZpZy5jb3VydEFzcGVjdFJhdGlvO1xuICAgICAgICBvZmZzZXRIID0gKHRhcmdldExheWVyLmN2cy53aWR0aCAtIGNvdXJ0V2lkdGgpIC8gMjtcbiAgICAgIH1cbiAgICAgIGlmIChpbml0aWFsSW1hZ2UpIHtcbiAgICAgICAgdGFyZ2V0TGF5ZXIuY3R4LmRyYXdJbWFnZShcbiAgICAgICAgICBpbml0aWFsSW1hZ2UsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIGluaXRpYWxJbWFnZS53aWR0aCxcbiAgICAgICAgICBpbml0aWFsSW1hZ2UuaGVpZ2h0LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICB0YXJnZXRMYXllci5jdnMud2lkdGgsXG4gICAgICAgICAgdGFyZ2V0TGF5ZXIuY3ZzLmhlaWdodFxuICAgICAgICApXG4gICAgICB9XG4gICAgICB0YXJnZXRMYXllci5jdHguZHJhd0ltYWdlKFxuICAgICAgICBzb3VyY2VDYW52YXMsXG4gICAgICAgIDAsXG4gICAgICAgIDAsXG4gICAgICAgIHNvdXJjZUNhbnZhcy53aWR0aCxcbiAgICAgICAgc291cmNlQ2FudmFzLmhlaWdodCxcbiAgICAgICAgb2Zmc2V0SCxcbiAgICAgICAgb2Zmc2V0VixcbiAgICAgICAgY291cnRXaWR0aCxcbiAgICAgICAgY291cnRIZWlnaHRcbiAgICAgIClcbiAgICB9XG5cbiAgICB0YXJnZXRMYXllci5jdHgucmVzdG9yZSgpO1xuICB9XG5cbiAgZ2VuQ291cnQoc3Ryb2tlV2lkdGggPSAxMCkge1xuICAgIGxldCBjb3VydENhbnZhc0luc3RhbmNlID0gdGhpcy5jb3VydENhbnZhc0luc3RhbmNlID0gdGhpcy5jcmVhdGVWaXJ0dWFsQ2FudmFzQmFzZUluc3RhbmNlKCk7XG4gICAgbGV0IGNvdXJ0Q2FudmFzV2lkdGggPSB0aGlzLnBpeGVsQmFzZSAvIHRoaXMuY29uZmlnLmNvdXJ0QXNwZWN0UmF0aW87XG4gICAgbGV0IGNvdXJ0Q2FudmFzSGVpZ2h0ID0gdGhpcy5waXhlbEJhc2U7XG4gICAgY291cnRDYW52YXNJbnN0YW5jZS5zZXRDYW52YXNTaXplKGNvdXJ0Q2FudmFzV2lkdGgsIGNvdXJ0Q2FudmFzSGVpZ2h0KTtcbiAgICBsZXQgdmVydGljZXMgPSBbXG4gICAgICB7IHg6IDAsIHk6IDAgfSxcbiAgICAgIHsgeDogY291cnRDYW52YXNJbnN0YW5jZS5jdnMud2lkdGgsIHk6IDAgfSxcbiAgICAgIHsgeDogY291cnRDYW52YXNJbnN0YW5jZS5jdnMud2lkdGgsIHk6IGNvdXJ0Q2FudmFzSW5zdGFuY2UuY3ZzLmhlaWdodCB9LFxuICAgICAgeyB4OiAwLCB5OiBjb3VydENhbnZhc0luc3RhbmNlLmN2cy5oZWlnaHQgfSxcbiAgICAgIHsgeDogMCwgeTogMCB9XG4gICAgXTtcblxuICAgIGxldCBzdHJva2VBbmltYXRpb25JbnN0YW5jZSA9IG5ldyBTdHJva2VBbmltYXRpb24oY291cnRDYW52YXNJbnN0YW5jZS5jdHgsIHZlcnRpY2VzKTtcblxuICAgIGxldCBjb3VydCA9IHtcbiAgICAgIGFuaW1hdGU6ICgpID0+IHtcbiAgICAgICAgY291cnQuaW5pdGlhbEltYWdlID0gZ2V0Q2FjaGVDYW52YXModGhpcy5jdHgpO1xuICAgICAgICBsZXQgcHJvbWlzZSA9IHN0cm9rZUFuaW1hdGlvbkluc3RhbmNlLmFuaW1hdGUoc3Ryb2tlV2lkdGgsIHRoaXMuY29uZmlnLmNvdXJ0Q29sb3IpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIGxldCB2ZXJ0aWNlcyA9IFtcbiAgICAgICAgICAgIHsgeDogMCwgeTogY291cnRDYW52YXNJbnN0YW5jZS5jdnMuaGVpZ2h0IC8gMiB9LFxuICAgICAgICAgICAgeyB4OiBjb3VydENhbnZhc0luc3RhbmNlLmN2cy53aWR0aCwgeTogY291cnRDYW52YXNJbnN0YW5jZS5jdnMuaGVpZ2h0IC8gMiB9LFxuICAgICAgICAgIF1cbiAgICAgICAgICByZXR1cm4gbmV3IFN0cm9rZUFuaW1hdGlvbihjb3VydENhbnZhc0luc3RhbmNlLmN0eCwgdmVydGljZXMpLmFuaW1hdGUoc3Ryb2tlV2lkdGgsIHRoaXMuY29uZmlnLmNvdXJ0Q29sb3IsIGZhbHNlLCBbMTAsIDMwXSwgJ3RyYW5zcGFyZW50Jyk7XG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5yZXNwb25zaXZlUGFpbnRlcih0aGlzLCBjb3VydENhbnZhc0luc3RhbmNlLmN2cywgY291cnQuaW5pdGlhbEltYWdlKTtcbiAgICAgICAgfSwgdGhpcy5mcHMpXG4gICAgICAgIHJldHVybiBwcm9taXNlLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzKSA9PiB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICAgICAgIHJlcygpO1xuICAgICAgICAgICAgfSwgNTAwKVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG5cbiAgICAgIH0sXG4gICAgICBkcmF3U3RhdGljOiAoKSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcbiAgICAgICAgICB0aGlzLnJlc3BvbnNpdmVQYWludGVyKHRoaXMsIGNvdXJ0Q2FudmFzSW5zdGFuY2UuY3ZzLCBjb3VydC5pbml0aWFsSW1hZ2UpO1xuICAgICAgICAgIHJlcygpO1xuICAgICAgICB9KVxuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gY291cnQ7XG4gIH1cblxuICBnZW5TdGFyU2t5KCkge1xuICAgIGxldCBzdGFyU2t5Q2FudmFzSW5zdGFuY2UgPSB0aGlzLnN0YXJTa3lDYW52YXNJbnN0YW5jZSA9IHRoaXMuYWRkTmV3TGF5ZXIoKTtcbiAgICBsZXQgc3RhclNreUFuaW1hdGlvbkluc3RhbmNlID0gbmV3IFN0YXJTa3koc3RhclNreUNhbnZhc0luc3RhbmNlLmN0eCk7XG4gICAgc3RhclNreUNhbnZhc0luc3RhbmNlLnJlc2l6ZWRDYWxsYmFjayA9IHN0YXJTa3lBbmltYXRpb25JbnN0YW5jZS5yZWZyZXNoU3RhcnMuYmluZChzdGFyU2t5QW5pbWF0aW9uSW5zdGFuY2UpO1xuICAgIHJldHVybiBzdGFyU2t5QW5pbWF0aW9uSW5zdGFuY2U7XG4gIH1cblxuXG4gIGdlblBsYXllcnMod2lkdGhQcmFtID0gMTAsIGdhcFJhdGlvID0gMC4wNSwgY29sb3IgPSAnd2hpdGUnLCB0aGlja25lc3MgPSAyMCkge1xuICAgIHRoaXMucGxheWVyc1RoaWNrbmVzcyA9IHRoaWNrbmVzcztcbiAgICBsZXQgcGxheWVyc0NhbnZhc0luc3RhbmNlID0gdGhpcy5wbGF5ZXJzQ2FudmFzSW5zdGFuY2UgPSB0aGlzLmFkZE5ld0xheWVyKCk7XG4gICAgbGV0IHBsYXllcnNWaXJ0dWFsQ2FudmFzSW5zdGFuY2UgPSB0aGlzLnBsYXllcnNWaXJ0dWFsQ2FudmFzSW5zdGFuY2UgPSB0aGlzLmNyZWF0ZVZpcnR1YWxDYW52YXNCYXNlSW5zdGFuY2UoKTtcbiAgICBwbGF5ZXJzVmlydHVhbENhbnZhc0luc3RhbmNlLnNldENhbnZhc1NpemUodGhpcy5jb3VydENhbnZhc0luc3RhbmNlLmN2cy53aWR0aCwgdGhpcy5jb3VydENhbnZhc0luc3RhbmNlLmN2cy5oZWlnaHQpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5ZXJzRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgcGxheWVyc0RhdGFbaV0ud2lkdGggPSAodGhpcy5waXhlbEJhc2UgLyB0aGlzLmNvbmZpZy5jb3VydEFzcGVjdFJhdGlvKSAvIHdpZHRoUHJhbTtcbiAgICAgIHBsYXllcnNEYXRhW2ldLnBvc2l0aW9uLnggPSB0aGlzLmNvdXJ0Q2FudmFzSW5zdGFuY2UuY3ZzLndpZHRoIC8gMjtcbiAgICAgIGlmIChpID09PSAwKSB7XG4gICAgICAgIHBsYXllcnNEYXRhW2ldLnBvc2l0aW9uLnkgPSB0aGlzLmNvdXJ0Q2FudmFzSW5zdGFuY2UuY3ZzLmhlaWdodCAqICgxIC0gZ2FwUmF0aW8pXG4gICAgICB9XG4gICAgICBlbHNlIGlmIChpID09PSAxKSB7XG4gICAgICAgIHBsYXllcnNEYXRhW2ldLnBvc2l0aW9uLnkgPSB0aGlzLmNvdXJ0Q2FudmFzSW5zdGFuY2UuY3ZzLmhlaWdodCAqIGdhcFJhdGlvXG4gICAgICB9XG4gICAgfVxuICAgIGxldCBwbGF5ZXJzID0ge1xuICAgICAgcmVhZHk6ICgpID0+IHtcbiAgICAgICAgbGV0IHRyaWdnZXI7XG4gICAgICAgIGxldCBwcm9taXNlID0gbmV3IFByb21pc2UocmVzID0+IHtcbiAgICAgICAgICB0cmlnZ2VyID0gcmVzO1xuICAgICAgICB9KVxuICAgICAgICBsZXQgb3BhY2l0eSA9IDA7XG4gICAgICAgIGxldCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICBpZiAob3BhY2l0eSA+PSAxKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgIHRyaWdnZXIoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5ZXJzRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZHJhd1JlY3QocGxheWVyc1ZpcnR1YWxDYW52YXNJbnN0YW5jZS5jdHgsIHBsYXllcnNEYXRhW2ldLnBvc2l0aW9uLngsIHBsYXllcnNEYXRhW2ldLnBvc2l0aW9uLnksIHBsYXllcnNEYXRhW2ldLndpZHRoLCB0aGlja25lc3MsIGNvbG9yLCBvcGFjaXR5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5yZXNwb25zaXZlUGFpbnRlcihwbGF5ZXJzQ2FudmFzSW5zdGFuY2UsIHBsYXllcnNWaXJ0dWFsQ2FudmFzSW5zdGFuY2UuY3ZzKTtcbiAgICAgICAgICBvcGFjaXR5ICs9IDAuMDE7XG4gICAgICAgIH0sIHRoaXMuZnBzKVxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICAgIH0sXG5cbiAgICAgIGxvb3BVcGRhdGU6ICgpID0+IHtcbiAgICAgICAgbGV0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgIHBsYXllcnNWaXJ0dWFsQ2FudmFzSW5zdGFuY2UuY2xlYXIoKTtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBsYXllcnNEYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBkcmF3UmVjdChwbGF5ZXJzVmlydHVhbENhbnZhc0luc3RhbmNlLmN0eCwgcGxheWVyc0RhdGFbaV0ucG9zaXRpb24ueCwgcGxheWVyc0RhdGFbaV0ucG9zaXRpb24ueSwgcGxheWVyc0RhdGFbaV0ud2lkdGgsIHRoaWNrbmVzcywgY29sb3IsIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnJlc3BvbnNpdmVQYWludGVyKHBsYXllcnNDYW52YXNJbnN0YW5jZSwgcGxheWVyc1ZpcnR1YWxDYW52YXNJbnN0YW5jZS5jdnMpO1xuICAgICAgICB9LCB0aGlzLmZwcylcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcGxheWVycztcbiAgfVxuXG4gIGdlblNjb3JlYm9hcmRzKCkge1xuICAgIGxldCBzY29yZWJvYXJkc0xheWVyID0gdGhpcy5hZGREaXZMYXllcignc2NvcmVib2FyZHMnLCAnc2NvcmVib2FyZHMnKTtcbiAgICBsZXQgdG9wQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IGJvdEJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvcEJhci5jbGFzc0xpc3QuYWRkKCdzY29yZWJvYXJkc19fdG9wLWJhcicpO1xuICAgIGJvdEJhci5jbGFzc0xpc3QuYWRkKCdzY29yZWJvYXJkc19fYm90LWJhcicpO1xuICAgIHNjb3JlYm9hcmRzTGF5ZXIuYXBwZW5kKHRvcEJhciwgYm90QmFyKTtcbiAgICBsZXQgZ2VuUGxheWVyU2hvd2Nhc2UgPSAocGxheWVyTmFtZSwgcGxheWVySWQsIHNjb3JlTWF4KSA9PiB7XG5cbiAgICAgIGxldCBwbGF5ZXJTaG93Q2FzZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgcGxheWVyU2hvd0Nhc2UuY2xhc3NMaXN0LmFkZCgncGxheWVyLXNob3djYXNlJyk7XG4gICAgICBwbGF5ZXJTaG93Q2FzZS5pZCA9IGBwbGF5ZXIke3BsYXllcklkfWA7XG4gICAgICBsZXQgaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwicGxheWVyLXNob3djYXNlX19uYW1lXCI+JHtwbGF5ZXJOYW1lfTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicGxheWVyLXNob3djYXNlX19zY29yZVwiPlxuICAgICAgICAgIDAwMDAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICBgXG4gICAgICBwbGF5ZXJTaG93Q2FzZS5pbm5lckhUTUwgPSBpbm5lckhUTUw7XG4gICAgICByZXR1cm4gcGxheWVyU2hvd0Nhc2U7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVyc0RhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRvcEJhci5hcHBlbmQoZ2VuUGxheWVyU2hvd2Nhc2UocGxheWVyc0RhdGFbaV0ubmFtZSwgcGxheWVyc0RhdGFbaV0uaWQsIDUpKVxuICAgIH1cbiAgICBsZXQgc2NvcmVib2FyZHMgPSB7XG4gICAgICB1cGRhdGU6ICgpID0+IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5ZXJzRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHNjb3JlYm9hcmRzTGF5ZXIucXVlcnlTZWxlY3RvcihgI3BsYXllciR7aX1gKS5xdWVyeVNlbGVjdG9yKCcucGxheWVyLXNob3djYXNlX19uYW1lJykuaW5uZXJIVE1MID0gcGxheWVyc0RhdGFbaV0ubmFtZTtcbiAgICAgICAgICBzY29yZWJvYXJkc0xheWVyLnF1ZXJ5U2VsZWN0b3IoYCNwbGF5ZXIke2l9YCkucXVlcnlTZWxlY3RvcignLnBsYXllci1zaG93Y2FzZV9fc2NvcmUnKS5pbm5lckhUTUwgPSBwYWRTdHJpbmcocGxheWVyc0RhdGFbaV0uc2NvcmUsIDQpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgcmVhZHk6ICgpID0+IHtcbiAgICAgICAgc2NvcmVib2FyZHNMYXllci5jbGFzc0xpc3QuYWRkKCdzY29yZWJvYXJkcy0tcmVhZHknKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc2NvcmVib2FyZHNcbiAgfVxuXG4gIGdlbkJhbGwoc3BlZWQgPSAxMDAsIHNpemUgPSAzMCwgY29sb3IgPSAnd2hpdGUnKSB7XG4gICAgbGV0IGJhbGxDYW52YXNJbnN0YW5jZSA9IHRoaXMuYmFsbENhbnZhc0luc3RhbmNlID0gdGhpcy5hZGROZXdMYXllcigpO1xuICAgIGxldCBiYWxsVmlydHVhbENhbnZhc0luc3RhbmNlID0gdGhpcy5iYWxsVmlydHVhbENhbnZhc0luc3RhbmNlID0gdGhpcy5jcmVhdGVWaXJ0dWFsQ2FudmFzQmFzZUluc3RhbmNlKCk7XG4gICAgYmFsbFZpcnR1YWxDYW52YXNJbnN0YW5jZS5zZXRDYW52YXNTaXplKHRoaXMuY291cnRDYW52YXNJbnN0YW5jZS5jdnMud2lkdGgsIHRoaXMuY291cnRDYW52YXNJbnN0YW5jZS5jdnMuaGVpZ2h0KTtcblxuICAgIC8vaW5pdCBiYWxsRGF0YVxuXG4gICAgYmFsbERhdGEuc3BlZWQgPSB7XG4gICAgICB4OiByYW5kb21XaXRoaW5SYW5nZSgwLCBzcGVlZCksXG4gICAgICB5OiByYW5kb21XaXRoaW5SYW5nZSgwLCBzcGVlZClcbiAgICB9XG4gICAgYmFsbERhdGEuc2l6ZSA9IHNpemU7XG4gICAgYmFsbERhdGEuY29sb3IgPSBjb2xvcjtcbiAgICBiYWxsRGF0YS5wb3NpdGlvbiA9IHtcbiAgICAgIHg6IHBsYXllcnNEYXRhWzBdLnBvc2l0aW9uLngsIC8v5oi/5Li75YWI5oyB55CDXG4gICAgICB5OiBwbGF5ZXJzRGF0YVswXS5wb3NpdGlvbi55IC0gdGhpcy5wbGF5ZXJzVGhpY2tuZXNzIC0gMTBcbiAgICB9O1xuXG4gICAgbGV0IGJhbGwgPSB7XG4gICAgICByZWFkeTogKCkgPT4ge1xuICAgICAgICBsZXQgdHJpZ2dlcjtcbiAgICAgICAgbGV0IHByb21pc2UgPSBuZXcgUHJvbWlzZShyZXMgPT4ge1xuICAgICAgICAgIHRyaWdnZXIgPSByZXM7XG4gICAgICAgIH0pXG4gICAgICAgIGxldCBvcGFjaXR5ID0gMDtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgbGV0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKG9wYWNpdHkgPj0gMSkge1xuICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgICAgdHJpZ2dlcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZHJhd0NpcmNsZShiYWxsVmlydHVhbENhbnZhc0luc3RhbmNlLmN0eCwgYmFsbERhdGEucG9zaXRpb24ueCwgYmFsbERhdGEucG9zaXRpb24ueSwgYmFsbERhdGEuc2l6ZSwgYmFsbERhdGEuY29sb3IsIG9wYWNpdHkpO1xuICAgICAgICAgICAgdGhpcy5yZXNwb25zaXZlUGFpbnRlcihiYWxsQ2FudmFzSW5zdGFuY2UsIGJhbGxWaXJ0dWFsQ2FudmFzSW5zdGFuY2UuY3ZzKTtcblxuICAgICAgICAgICAgb3BhY2l0eSArPSAwLjAxO1xuICAgICAgICAgIH0sIHRoaXMuZnBzKVxuICAgICAgICB9LCA1MDApXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgICAgfSxcbiAgICAgIGxvb3BVcGRhdGU6ICgpID0+IHtcbiAgICAgICAgbGV0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgIGJhbGxWaXJ0dWFsQ2FudmFzSW5zdGFuY2UuY2xlYXIoKTtcbiAgICAgICAgICBkcmF3Q2lyY2xlKGJhbGxWaXJ0dWFsQ2FudmFzSW5zdGFuY2UuY3R4LCBiYWxsRGF0YS5wb3NpdGlvbi54LCBiYWxsRGF0YS5wb3NpdGlvbi55LCBiYWxsRGF0YS5zaXplLCBiYWxsRGF0YS5jb2xvcik7XG4gICAgICAgICAgdGhpcy5yZXNwb25zaXZlUGFpbnRlcihiYWxsQ2FudmFzSW5zdGFuY2UsIGJhbGxWaXJ0dWFsQ2FudmFzSW5zdGFuY2UuY3ZzKTtcbiAgICAgICAgfSwgdGhpcy5mcHMpXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBiYWxsO1xuICB9XG5cbiAgZHJhd0dhbWUoKSB7XG4gICAgdGhpcy5nYW1lU3RhdHVzID0gMTtcbiAgICB0aGlzLnN0YXJTa3kuYW5pbWF0ZSgpO1xuICAgIGxldCBwcm9taXNlID0gdGhpcy5jdXJ0YWluLmFuaW1hdGUoKTtcbiAgICBwcm9taXNlXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMuZ2FtZVN0YXR1cyA9IDI7XG4gICAgICAgIHJldHVybiB0aGlzLmNvdXJ0LmFuaW1hdGUoKTtcbiAgICAgIH0pXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMuZ2FtZVN0YXR1cyA9IDM7XG4gICAgICAgIGxldCBwbGF5ZXJzUmVhZHkgPSB0aGlzLnBsYXllcnMucmVhZHkoKTtcbiAgICAgICAgbGV0IGJhbGxSZWFkeSA9IHRoaXMuYmFsbC5yZWFkeSgpO1xuICAgICAgICBsZXQgc2NvcmVib2FyZHNSZWFkeSA9IHRoaXMuc2NvcmVib2FyZHMucmVhZHkoKTtcbiAgICAgICAgbGV0IGFsbFJlYWR5UHJvbWlzZSA9IFByb21pc2UuYWxsKFtcbiAgICAgICAgICBwbGF5ZXJzUmVhZHksIGJhbGxSZWFkeSwgc2NvcmVib2FyZHNSZWFkeVxuICAgICAgICBdKVxuICAgICAgICByZXR1cm4gYWxsUmVhZHlQcm9taXNlO1xuICAgICAgfSlcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5nYW1lU3RhdHVzID0gNDtcbiAgICAgICAgbGV0IGdhbWVSZWFkeVByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcbiAgICAgICAgICB0aGlzLmluaXRHYW1lRGF0YVVwZGF0ZUludGVydmFsKCk7XG4gICAgICAgICAgcmVzKCk7XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBnYW1lUmVhZHlQcm9taXNlO1xuICAgICAgfSlcbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfVxuXG4gIGluaXRHYW1lRGF0YVVwZGF0ZUludGVydmFsKCkge1xuICAgIHRoaXMucGxheWVycy5sb29wVXBkYXRlKCk7XG4gICAgdGhpcy5iYWxsLmxvb3BVcGRhdGUoKTtcbiAgfVxuXG5cblxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2FtZUJ1aWxkZXIoKSB7XG4gIGxldCBnYW1lID0gYm9vdChFbmdpbmUsIERFRkFVTFQsIHt9LCBkb2N1bWVudC5ib2R5KTtcbiAgZ2FtZS5wcm9taXNlLnRoZW4oKGluc3RhbmNlKSA9PiB7XG4gICAgZ2FtZS5jb250cm9sbGVyID0gaW5zdGFuY2U7XG4gIH0pXG4gIHJldHVybiBnYW1lO1xufVxuXG4iLCJpbXBvcnQgeyByYW5kb21XaXRoaW5SYW5nZSwgY2FsY1dheXBvaW50cyB9IGZyb20gJy4vZnVuY3Rpb24nO1xuaW1wb3J0IHsgZ2V0Q2FjaGVDYW52YXMgfSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IHsgZHJhd0NpcmNsZSB9IGZyb20gJy4vc2hhcGUnO1xuaW1wb3J0ICdwYXRoMmQtcG9seWZpbGwnO1xuXG5leHBvcnQgY2xhc3MgU3dpcmw4Qml0IHtcbiAgY29uc3RydWN0b3IoY3R4KSB7XG4gICAgdGhpcy5jb3VudGVyQ2xvY2t3aXNlQXJyID0gW1xuICAgICAgeyBuYW1lOiAndGwnLCB4OiAwLCB5OiAwIH0sXG4gICAgICB7IG5hbWU6ICdibCcsIHg6IDAsIHk6IDEgfSxcbiAgICAgIHsgbmFtZTogJ2JyJywgeDogMSwgeTogMSB9LFxuICAgICAgeyBuYW1lOiAndHInLCB4OiAxLCB5OiAwIH1cbiAgICBdXG4gICAgdGhpcy5jbG9ja3dpc2VBcnIgPSBbXG4gICAgICB7IG5hbWU6ICd0cicsIHg6IDEsIHk6IDAgfSxcbiAgICAgIHsgbmFtZTogJ2JyJywgeDogMSwgeTogMSB9LFxuICAgICAgeyBuYW1lOiAnYmwnLCB4OiAwLCB5OiAxIH0sXG4gICAgICB7IG5hbWU6ICd0bCcsIHg6IDAsIHk6IDAgfVxuICAgIF1cbiAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICB0aGlzLmN2cyA9IGN0eC5jYW52YXM7XG4gICAgdGhpcy5hbmltYXRpb25FbmRUcmlnZ2VyO1xuICAgIHRoaXMub3JkZXIgPSAwO1xuICAgIHRoaXMucGF0aCA9IG5ldyBQYXRoMkQoKTtcbiAgICB0aGlzLmluaXRpYWxJbWFnZSA9IGdldENhY2hlQ2FudmFzKHRoaXMuY3R4KTtcbiAgICB0aGlzLmJhbmRXaWR0aFN0YWNrID0gMDtcbiAgfVxuICBnZXRTdGFydExvY2F0aW9uKGNsb2Nrd2lzZSwgb3JkZXIsIHRvdGFsV2lkdGgsIHRvdGFsSGVpZ2h0KSB7XG4gICAgbGV0IGRpcmVjdGlvbkFyciA9IGNsb2Nrd2lzZSA/IHRoaXMuY2xvY2t3aXNlQXJyIDogdGhpcy5jb3VudGVyQ2xvY2t3aXNlQXJyO1xuXG4gICAgbGV0IGxvY2F0aW9uID0ge1xuICAgICAgbmFtZTogZGlyZWN0aW9uQXJyW29yZGVyXS5uYW1lLFxuICAgICAgeDogZGlyZWN0aW9uQXJyW29yZGVyXS54ICogdG90YWxXaWR0aCArIHRoaXMuYmFuZFdpZHRoU3RhY2ssXG4gICAgICB5OiBkaXJlY3Rpb25BcnJbb3JkZXJdLnkgKiB0b3RhbEhlaWdodCArIHRoaXMuYmFuZFdpZHRoU3RhY2tcbiAgICB9XG4gICAgcmV0dXJuIGxvY2F0aW9uO1xuICB9XG4gIGFuaW1hdGUoY2xvY2t3aXNlID0gZmFsc2UsIGJhbmRXaWR0aCA9IDIwLCBjb2xvciA9ICdyZ2JhKDAsMCwwLDEpJykge1xuICAgIGxldCBhbmltYXRpb25Qcm9taXNlID0gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XG4gICAgICB0aGlzLmFuaW1hdGlvbkVuZFRyaWdnZXIgPSByZXM7XG4gICAgfSlcbiAgICB0aGlzLmRyYXdTd2lybChjbG9ja3dpc2UsIGJhbmRXaWR0aCwgY29sb3IpO1xuXG4gICAgcmV0dXJuIGFuaW1hdGlvblByb21pc2U7XG4gIH1cblxuICBkcmF3U3dpcmwoY2xvY2t3aXNlLCBiYW5kV2lkdGgsIGNvbG9yKSB7XG4gICAgbGV0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgdGhpcy5wYXRoLmFkZFBhdGgodGhpcy5kcmFXUmFuZG9tQW5nbGVkQmFuZFBhdGgoXG4gICAgICAgIGJhbmRXaWR0aCxcbiAgICAgICAgdGhpcy5jdnMud2lkdGggLSAyICogdGhpcy5iYW5kV2lkdGhTdGFjayxcbiAgICAgICAgdGhpcy5jdnMuaGVpZ2h0IC0gMiAqIHRoaXMuYmFuZFdpZHRoU3RhY2ssXG4gICAgICAgIHRoaXMuZ2V0U3RhcnRMb2NhdGlvbihjbG9ja3dpc2UsIHRoaXMub3JkZXIsIHRoaXMuY3ZzLndpZHRoIC0gMiAqIHRoaXMuYmFuZFdpZHRoU3RhY2ssIHRoaXMuY3ZzLmhlaWdodCAtIDIgKiB0aGlzLmJhbmRXaWR0aFN0YWNrKSxcbiAgICAgICAgY29sb3IsXG4gICAgICAgIGNsb2Nrd2lzZVxuICAgICAgKSlcbiAgICAgIHRoaXMuY3R4LmZpbGwodGhpcy5wYXRoKTtcbiAgICAgIGlmICh0aGlzLmN2cy53aWR0aCAtIDIgKiB0aGlzLmJhbmRXaWR0aFN0YWNrID4gMCAmJiB0aGlzLmN2cy5oZWlnaHQgLSAyICogdGhpcy5iYW5kV2lkdGhTdGFjayA+IDApIHtcblxuICAgICAgICBpZiAodGhpcy5vcmRlciA8IDMpIHtcbiAgICAgICAgICB0aGlzLm9yZGVyKytcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB0aGlzLm9yZGVyID0gMDtcbiAgICAgICAgICB0aGlzLmJhbmRXaWR0aFN0YWNrICs9IGJhbmRXaWR0aDtcblxuICAgICAgICB9XG5cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgdGhpcy5hbmltYXRpb25FbmRUcmlnZ2VyKCk7XG4gICAgICB9XG5cbiAgICB9LCAzMClcbiAgfVxuXG4gIGRyYVdSYW5kb21BbmdsZWRCYW5kUGF0aChiYW5kV2lkdGgsIHdpZHRoLCBoZWlnaHQsIHBvaW50LCBjb2xvciwgY2xvY2t3aXNlKSB7XG4gICAgbGV0IHBhdGggPSBuZXcgUGF0aDJEKCk7XG4gICAgaWYgKHBvaW50Lm5hbWUgPT09ICd0bCcpIHtcbiAgICAgIHRoaXMuZHJhd0FuZ2xlZEJhbmRGcm9tVEwocGF0aCwgYmFuZFdpZHRoLCB3aWR0aCwgaGVpZ2h0LCBwb2ludCwgY2xvY2t3aXNlKTtcbiAgICB9XG4gICAgZWxzZSBpZiAocG9pbnQubmFtZSA9PT0gJ2JsJykge1xuICAgICAgdGhpcy5kcmF3QW5nbGVkQmFuZEZyb21CTChwYXRoLCBiYW5kV2lkdGgsIHdpZHRoLCBoZWlnaHQsIHBvaW50LCBjbG9ja3dpc2UpO1xuICAgIH1cbiAgICBlbHNlIGlmIChwb2ludC5uYW1lID09PSAnYnInKSB7XG4gICAgICB0aGlzLmRyYXdBbmdsZWRCYW5kRnJvbUJSKHBhdGgsIGJhbmRXaWR0aCwgd2lkdGgsIGhlaWdodCwgcG9pbnQsIGNsb2Nrd2lzZSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHBvaW50Lm5hbWUgPT09ICd0cicpIHtcbiAgICAgIHRoaXMuZHJhd0FuZ2xlZEJhbmRGcm9tVFIocGF0aCwgYmFuZFdpZHRoLCB3aWR0aCwgaGVpZ2h0LCBwb2ludCwgY2xvY2t3aXNlKTtcbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG4gIH1cbiAgZHJhd0FuZ2xlZEJhbmRGcm9tVEwocGF0aCwgYmFuZFdpZHRoLCB3aWR0aCwgaGVpZ2h0LCBwb2ludCwgY2xvY2t3aXNlKSB7XG4gICAgcGF0aC5tb3ZlVG8ocG9pbnQueCwgcG9pbnQueSk7XG4gICAgaWYgKGNsb2Nrd2lzZSkge1xuICAgICAgbGV0IHJhbmRvbUhlaWdodCA9IHJhbmRvbVdpdGhpblJhbmdlKDAuNSAqIGhlaWdodCwgMC45ICogaGVpZ2h0KTtcbiAgICAgIHBhdGgubGluZVRvKHBvaW50LnggKyB3aWR0aCwgcG9pbnQueSk7XG4gICAgICBwYXRoLmxpbmVUbyhwb2ludC54ICsgd2lkdGgsIHBvaW50LnkgKyByYW5kb21IZWlnaHQpO1xuICAgICAgcGF0aC5saW5lVG8ocG9pbnQueCArIHdpZHRoIC0gYmFuZFdpZHRoLCBwb2ludC55ICsgcmFuZG9tSGVpZ2h0KTtcbiAgICAgIHBhdGgubGluZVRvKHBvaW50LnggKyB3aWR0aCAtIGJhbmRXaWR0aCwgcG9pbnQueSArIGJhbmRXaWR0aCk7XG4gICAgICBwYXRoLmxpbmVUbyhwb2ludC54LCBwb2ludC55ICsgYmFuZFdpZHRoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBsZXQgcmFuZG9tV2lkdGggPSByYW5kb21XaXRoaW5SYW5nZSgwLjUgKiB3aWR0aCwgMC45ICogd2lkdGgpO1xuICAgICAgcGF0aC5saW5lVG8ocG9pbnQueCArIGJhbmRXaWR0aCwgcG9pbnQueSk7XG4gICAgICBwYXRoLmxpbmVUbyhwb2ludC54ICsgYmFuZFdpZHRoLCBwb2ludC55ICsgaGVpZ2h0IC0gYmFuZFdpZHRoKTtcbiAgICAgIHBhdGgubGluZVRvKHBvaW50LnggKyByYW5kb21XaWR0aCwgcG9pbnQueSArIGhlaWdodCAtIGJhbmRXaWR0aCk7XG4gICAgICBwYXRoLmxpbmVUbyhwb2ludC54ICsgcmFuZG9tV2lkdGgsIHBvaW50LnkgKyBoZWlnaHQpO1xuICAgICAgcGF0aC5saW5lVG8ocG9pbnQueCwgcG9pbnQueSArIGhlaWdodCk7XG4gICAgfVxuICB9XG4gIGRyYXdBbmdsZWRCYW5kRnJvbUJMKHBhdGgsIGJhbmRXaWR0aCwgd2lkdGgsIGhlaWdodCwgcG9pbnQsIGNsb2Nrd2lzZSkge1xuICAgIHBhdGgubW92ZVRvKHBvaW50LngsIHBvaW50LnkpO1xuICAgIGlmIChjbG9ja3dpc2UpIHtcbiAgICAgIGxldCByYW5kb21XaWR0aCA9IHJhbmRvbVdpdGhpblJhbmdlKDAuNSAqIHdpZHRoLCAwLjkgKiB3aWR0aCk7XG4gICAgICBwYXRoLmxpbmVUbyhwb2ludC54ICsgYmFuZFdpZHRoLCBwb2ludC55KTtcbiAgICAgIHBhdGgubGluZVRvKHBvaW50LnggKyBiYW5kV2lkdGgsIHBvaW50LnkgLSBoZWlnaHQgKyBiYW5kV2lkdGgpO1xuICAgICAgcGF0aC5saW5lVG8ocG9pbnQueCArIHJhbmRvbVdpZHRoLCBwb2ludC55IC0gaGVpZ2h0ICsgYmFuZFdpZHRoKTtcbiAgICAgIHBhdGgubGluZVRvKHBvaW50LnggKyByYW5kb21XaWR0aCwgcG9pbnQueSAtIGhlaWdodCk7XG4gICAgICBwYXRoLmxpbmVUbyhwb2ludC54LCBwb2ludC55IC0gaGVpZ2h0KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBsZXQgcmFuZG9tSGVpZ2h0ID0gcmFuZG9tV2l0aGluUmFuZ2UoMC41ICogaGVpZ2h0LCAwLjkgKiBoZWlnaHQpO1xuICAgICAgcGF0aC5saW5lVG8ocG9pbnQueCwgcG9pbnQueSAtIGJhbmRXaWR0aCk7XG4gICAgICBwYXRoLmxpbmVUbyhwb2ludC54ICsgd2lkdGggLSBiYW5kV2lkdGgsIHBvaW50LnkgLSBiYW5kV2lkdGgpO1xuICAgICAgcGF0aC5saW5lVG8ocG9pbnQueCArIHdpZHRoIC0gYmFuZFdpZHRoLCBwb2ludC55IC0gcmFuZG9tSGVpZ2h0KTtcbiAgICAgIHBhdGgubGluZVRvKHBvaW50LnggKyB3aWR0aCwgcG9pbnQueSAtIHJhbmRvbUhlaWdodCk7XG4gICAgICBwYXRoLmxpbmVUbyhwb2ludC54ICsgd2lkdGgsIHBvaW50LnkpO1xuICAgIH1cbiAgfVxuICBkcmF3QW5nbGVkQmFuZEZyb21CUihwYXRoLCBiYW5kV2lkdGgsIHdpZHRoLCBoZWlnaHQsIHBvaW50LCBjbG9ja3dpc2UpIHtcbiAgICBwYXRoLm1vdmVUbyhwb2ludC54LCBwb2ludC55KTtcbiAgICBpZiAoY2xvY2t3aXNlKSB7XG4gICAgICBsZXQgcmFuZG9tSGVpZ2h0ID0gcmFuZG9tV2l0aGluUmFuZ2UoMC41ICogaGVpZ2h0LCAwLjkgKiBoZWlnaHQpO1xuICAgICAgcGF0aC5saW5lVG8ocG9pbnQueCwgcG9pbnQueSAtIGJhbmRXaWR0aCk7XG4gICAgICBwYXRoLmxpbmVUbyhwb2ludC54IC0gd2lkdGggKyBiYW5kV2lkdGgsIHBvaW50LnkgLSBiYW5kV2lkdGgpO1xuICAgICAgcGF0aC5saW5lVG8ocG9pbnQueCAtIHdpZHRoICsgYmFuZFdpZHRoLCBwb2ludC55IC0gcmFuZG9tSGVpZ2h0KTtcbiAgICAgIHBhdGgubGluZVRvKHBvaW50LnggLSB3aWR0aCwgcG9pbnQueSAtIHJhbmRvbUhlaWdodCk7XG4gICAgICBwYXRoLmxpbmVUbyhwb2ludC54IC0gd2lkdGgsIHBvaW50LnkpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGxldCByYW5kb21XaWR0aCA9IHJhbmRvbVdpdGhpblJhbmdlKDAuNSAqIHdpZHRoLCAwLjkgKiB3aWR0aCk7XG4gICAgICBwYXRoLmxpbmVUbyhwb2ludC54IC0gYmFuZFdpZHRoLCBwb2ludC55KTtcbiAgICAgIHBhdGgubGluZVRvKHBvaW50LnggLSBiYW5kV2lkdGgsIHBvaW50LnkgLSBoZWlnaHQgKyBiYW5kV2lkdGgpO1xuICAgICAgcGF0aC5saW5lVG8ocG9pbnQueCAtIHJhbmRvbVdpZHRoLCBwb2ludC55IC0gaGVpZ2h0ICsgYmFuZFdpZHRoKTtcbiAgICAgIHBhdGgubGluZVRvKHBvaW50LnggLSByYW5kb21XaWR0aCwgcG9pbnQueSAtIGhlaWdodCk7XG4gICAgICBwYXRoLmxpbmVUbyhwb2ludC54LCBwb2ludC55IC0gaGVpZ2h0KTtcbiAgICB9XG4gIH1cbiAgZHJhd0FuZ2xlZEJhbmRGcm9tVFIocGF0aCwgYmFuZFdpZHRoLCB3aWR0aCwgaGVpZ2h0LCBwb2ludCwgY2xvY2t3aXNlKSB7XG4gICAgcGF0aC5tb3ZlVG8ocG9pbnQueCwgcG9pbnQueSk7XG4gICAgaWYgKGNsb2Nrd2lzZSkge1xuICAgICAgbGV0IHJhbmRvbVdpZHRoID0gcmFuZG9tV2l0aGluUmFuZ2UoMC41ICogd2lkdGgsIDAuOSAqIHdpZHRoKTtcbiAgICAgIHBhdGgubGluZVRvKHBvaW50LnggLSBiYW5kV2lkdGgsIHBvaW50LnkpO1xuICAgICAgcGF0aC5saW5lVG8ocG9pbnQueCAtIGJhbmRXaWR0aCwgcG9pbnQueSArIGhlaWdodCAtIGJhbmRXaWR0aCk7XG4gICAgICBwYXRoLmxpbmVUbyhwb2ludC54IC0gcmFuZG9tV2lkdGgsIHBvaW50LnkgKyBoZWlnaHQgLSBiYW5kV2lkdGgpO1xuICAgICAgcGF0aC5saW5lVG8ocG9pbnQueCAtIHJhbmRvbVdpZHRoLCBwb2ludC55ICsgaGVpZ2h0KTtcbiAgICAgIHBhdGgubGluZVRvKHBvaW50LngsIHBvaW50LnkgKyBoZWlnaHQpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGxldCByYW5kb21IZWlnaHQgPSByYW5kb21XaXRoaW5SYW5nZSgwLjUgKiBoZWlnaHQsIDAuOSAqIGhlaWdodCk7XG4gICAgICBwYXRoLmxpbmVUbyhwb2ludC54LCBwb2ludC55ICsgYmFuZFdpZHRoKTtcbiAgICAgIHBhdGgubGluZVRvKHBvaW50LnggLSB3aWR0aCArIGJhbmRXaWR0aCwgcG9pbnQueSArIGJhbmRXaWR0aCk7XG4gICAgICBwYXRoLmxpbmVUbyhwb2ludC54IC0gd2lkdGggKyBiYW5kV2lkdGgsIHBvaW50LnkgKyByYW5kb21IZWlnaHQpO1xuICAgICAgcGF0aC5saW5lVG8ocG9pbnQueCAtIHdpZHRoLCBwb2ludC55ICsgcmFuZG9tSGVpZ2h0KTtcbiAgICAgIHBhdGgubGluZVRvKHBvaW50LnggLSB3aWR0aCwgcG9pbnQueSk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTdHJva2VBbmltYXRpb24ge1xuICBjb25zdHJ1Y3RvcihjdHgsIHZlcnRpY2VzKSB7XG4gICAgdGhpcy5jdHggPSBjdHg7XG4gICAgdGhpcy53YXlwb2ludHMgPSBjYWxjV2F5cG9pbnRzKHZlcnRpY2VzKTtcbiAgfVxuXG4gIGFuaW1hdGUoYmFuZFdpZHRoID0gMjAsIGNvbG9yID0gJ3JnYmEoMjU1LDI1NSwyNTUsMSknLCBmbGlja2VyID0gdHJ1ZSwgZGFzaCA9IFtdLCBnbG93aW5nID0gJ3doaXRlJywgZ2xvd2luZ1NpemUgPSA0MCkge1xuICAgIGxldCBhbmltYXRpb25Qcm9taXNlID0gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XG4gICAgICB0aGlzLmFuaW1hdGlvbkVuZFRyaWdnZXIgPSByZXM7XG4gICAgICB0aGlzLmxvb3BpbmdEcmF3U3Ryb2tlKGJhbmRXaWR0aCwgY29sb3IsIGZsaWNrZXIsIGRhc2gsIGdsb3dpbmcsIGdsb3dpbmdTaXplLCk7XG4gICAgfSlcblxuICAgIHJldHVybiBhbmltYXRpb25Qcm9taXNlO1xuICB9XG5cbiAgbG9vcGluZ0RyYXdTdHJva2UoYmFuZFdpZHRoLCBjb2xvciwgZmxpY2tlciwgZGFzaCwgZ2xvd2luZywgZ2xvd2luZ1NpemUsIGZwcyA9IDYwKSB7XG4gICAgbGV0IGNvdW50ZXIgPSAwO1xuICAgIGxldCAkdGhpcyA9IHRoaXM7XG4gICAgdGhpcy5jdHguc2F2ZSgpO1xuICAgIHRoaXMuY3R4LmxpbmVDYXAgPSAnc3F1YXJlJ1xuICAgIGlmIChkYXNoLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuY3R4LnNldExpbmVEYXNoKGRhc2gpO1xuICAgIH1cbiAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IGNvbG9yO1xuICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IGJhbmRXaWR0aDtcbiAgICB0aGlzLmN0eC5zaGFkb3dDb2xvciA9IGdsb3dpbmc7XG4gICAgdGhpcy5jdHguc2hhZG93Qmx1ciA9IGdsb3dpbmdTaXplO1xuICAgIGxldCBmbGlja2VyUmFuZ2UgPSAwO1xuXG4gICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgbGV0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgaWYgKGNvdW50ZXIgPCAkdGhpcy53YXlwb2ludHMubGVuZ3RoIC0gMSkge1xuICAgICAgICAkdGhpcy5jdHgubW92ZVRvKCR0aGlzLndheXBvaW50c1tjb3VudGVyXS54LCAkdGhpcy53YXlwb2ludHNbY291bnRlcl0ueSk7XG4gICAgICAgICR0aGlzLmN0eC5saW5lVG8oJHRoaXMud2F5cG9pbnRzW2NvdW50ZXIgKyAxXS54LCAkdGhpcy53YXlwb2ludHNbY291bnRlciArIDFdLnkpO1xuICAgICAgICBpZiAoZmxpY2tlcikge1xuICAgICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmN0eC5jYW52YXMud2lkdGgsIHRoaXMuY3R4LmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICAgIHRoaXMuY3R4Lmdsb2JhbEFscGhhID0gcmFuZG9tV2l0aGluUmFuZ2UoZmxpY2tlclJhbmdlLCAxKTtcbiAgICAgICAgICBmbGlja2VyUmFuZ2UgKz0gKGZwcyAvIDEwMDAwKTtcbiAgICAgICAgfVxuICAgICAgICAkdGhpcy5jdHguc3Ryb2tlKCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICR0aGlzLmN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgJHRoaXMuY3R4LnJlc3RvcmUoKTtcbiAgICAgICAgJHRoaXMuYW5pbWF0aW9uRW5kVHJpZ2dlcigpO1xuICAgICAgfVxuICAgICAgY291bnRlcisrO1xuICAgIH0sIDEwMDAgLyBmcHMpXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFN0YXJTa3kge1xuICBjb25zdHJ1Y3RvcihjdHgpIHtcbiAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICB0aGlzLmN2cyA9IGN0eC5jYW52YXM7XG4gICAgdGhpcy5zdGFycyA9IFtdO1xuICAgIHRoaXMuaW5pdCgpO1xuICB9XG4gIGluaXQoKSB7XG4gICAgdGhpcy5nZW5TdGFycygpO1xuXG4gIH1cbiAgZ2VuU3RhcnMobnVtYmVyID0gMTAwKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1iZXI7IGkrKykge1xuICAgICAgbGV0IHN0YXIgPSB7XG4gICAgICAgIHg6IHJhbmRvbVdpdGhpblJhbmdlKDAsIHRoaXMuY3ZzLndpZHRoKSxcbiAgICAgICAgeTogcmFuZG9tV2l0aGluUmFuZ2UoMCwgdGhpcy5jdnMuaGVpZ2h0KSxcbiAgICAgICAgY29sb3I6IGByZ2JhKDI1NSwyNTUsMjU1LCR7cmFuZG9tV2l0aGluUmFuZ2UoMC4yNSwgMSl9KWAsXG4gICAgICAgIHNpemU6IHJhbmRvbVdpdGhpblJhbmdlKDIsIDUpLFxuICAgICAgICB0d2lua2xlOiAoKSA9PiB7XG4gICAgICAgICAgc3Rhci5jb2xvciA9IGByZ2JhKDI1NSwyNTUsMjU1LCR7cmFuZG9tV2l0aGluUmFuZ2UoMC4yNSwgMSl9KWA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuc3RhcnMucHVzaChzdGFyKTtcbiAgICB9XG4gIH1cbiAgcmVmcmVzaFN0YXJzKCkge1xuICAgIHRoaXMuc3RhcnMubGVuZ3RoID0gMDtcbiAgICB0aGlzLmdlblN0YXJzKCk7XG4gIH1cbiAgYW5pbWF0ZSgpIHtcbiAgICBsZXQgZHJhdyA9ICgpID0+IHtcbiAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmN2cy53aWR0aCwgdGhpcy5jdnMuaGVpZ2h0KTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zdGFycy5sZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLnN0YXJzW2ldLnR3aW5rbGUoKTtcbiAgICAgICAgZHJhd0NpcmNsZSh0aGlzLmN0eCwgdGhpcy5zdGFyc1tpXS54LCB0aGlzLnN0YXJzW2ldLnksIHRoaXMuc3RhcnNbaV0uc2l6ZSwgdGhpcy5zdGFyc1tpXS5jb2xvcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc2V0SW50ZXJ2YWwoZHJhdywgNTAwKTtcbiAgfVxufSIsImltcG9ydCB7IGRlYm91bmNlLCBpcywgcG9pbnRlckV2ZW50VG9YWSB9IGZyb20gJy4vZnVuY3Rpb24nO1xuXG5cbmV4cG9ydCBjbGFzcyBDYW52YXMyREZ4QmFzZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIGVsZSwgY29uZmlnID0ge30sIGRlZmF1bHRDb25maWcgPSB7fSwgdmlydHVhbFBhcmVudFxuICApIHtcbiAgICBjb25maWcgPSBpcy5vYmooY29uZmlnKSA/IGNvbmZpZyA6IHt9O1xuICAgIGRlZmF1bHRDb25maWcgPSBpcy5vYmooZGVmYXVsdENvbmZpZykgPyBkZWZhdWx0Q29uZmlnIDoge307XG4gICAgdGhpcy5jb25maWcgPSBPYmplY3QuYXNzaWduKGRlZmF1bHRDb25maWcsIGNvbmZpZyk7XG4gICAgdGhpcy5lbGUgPSBlbGU7XG4gICAgdGhpcy5mcmFtZUNvdW50ID0gMDtcbiAgICB0aGlzLm1vdXNlID0ge1xuICAgICAgeDogMCxcbiAgICAgIHk6IDBcbiAgICB9O1xuICAgIHRoaXMudmlydHVhbFBhcmVudCA9IHZpcnR1YWxQYXJlbnQ7XG4gICAgdGhpcy5jdHggPSBudWxsO1xuICAgIHRoaXMuZnJhbWVJc1BhdXNlZCA9IGZhbHNlO1xuICAgIHRoaXMuaXNDbGljayA9IGZhbHNlO1xuICAgIHRoaXMubGF5ZXJzQ29udGFpbmVyID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZGl2TGF5ZXJzQ29udGFpbmVyID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuY2FudmFzU2l6ZWZpeGVkID0gZmFsc2U7XG4gICAgdGhpcy5wcmV2aW91c0ZyYW1lVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIHRoaXMuaXNSZXNpemluZyA9IGZhbHNlO1xuICAgIHRoaXMubGF5ZXJzID0gW107XG4gICAgdGhpcy5kaXZMYXllcnMgPSBbXTtcbiAgICB0aGlzLmlzUmVzaXppbmdDYWxsYmFjayA9ICgpID0+IHsgfTtcbiAgICB0aGlzLnJlc2l6ZWRDYWxsYmFjayA9ICgpID0+IHsgfTtcbiAgICB0aGlzLmluaXRCYXNlKCk7XG4gIH1cbiAgaW5pdEJhc2UoKSB7XG5cbiAgICBpZiAodGhpcy5lbGUudGFnTmFtZSAhPT0gJ0NBTlZBUycpIHtcbiAgICAgIGNvbnN0IGN2cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgdGhpcy5jdnMgPSBjdnM7XG4gICAgICB0aGlzLmxheWVyc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGhpcy5sYXllcnNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbGF5ZXJzLWNvbnRhaW5lcicpO1xuICAgICAgdGhpcy5sYXllcnNDb250YWluZXIuc3R5bGUuZm9udFNpemUgPSAwO1xuICAgICAgdGhpcy5sYXllcnNDb250YWluZXIuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgdGhpcy5sYXllcnNDb250YWluZXIuc3R5bGUud2lkdGggPSAnMTAwJSdcbiAgICAgIHRoaXMubGF5ZXJzQ29udGFpbmVyLnN0eWxlLmhlaWdodCA9ICcxMDAlJztcbiAgICAgIHRoaXMubGF5ZXJzQ29udGFpbmVyLmFwcGVuZENoaWxkKGN2cyk7XG4gICAgICB0aGlzLmRpdkxheWVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0aGlzLmRpdkxheWVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Rpdi1sYXllcnMtY29udGFpbmVyJyk7XG4gICAgICB0aGlzLmRpdkxheWVyQ29udGFpbmVyLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgIHRoaXMuZGl2TGF5ZXJDb250YWluZXIuc3R5bGUud2lkdGggPSAnMTAwJSdcbiAgICAgIHRoaXMuZGl2TGF5ZXJDb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xuICAgICAgdGhpcy5zdXJyb3VuZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGhpcy5zdXJyb3VuZGluZy5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICB0aGlzLnN1cnJvdW5kaW5nLnN0eWxlLndpZHRoID0gJzEwMCUnXG4gICAgICB0aGlzLnN1cnJvdW5kaW5nLnN0eWxlLmhlaWdodCA9ICcxMDAlJztcbiAgICAgIHRoaXMuc3Vycm91bmRpbmcuY2xhc3NMaXN0LmFkZCgncmVuZGVyLWVudl9fc3Vycm91bmRpbmcnKVxuICAgICAgdGhpcy5zdXJyb3VuZGluZy5hcHBlbmRDaGlsZCh0aGlzLmxheWVyc0NvbnRhaW5lcik7XG4gICAgICB0aGlzLnN1cnJvdW5kaW5nLmluc2VydEJlZm9yZSh0aGlzLmRpdkxheWVyQ29udGFpbmVyLCB0aGlzLmxheWVyc0NvbnRhaW5lcik7XG4gICAgICB0aGlzLmVsZS5hcHBlbmQodGhpcy5zdXJyb3VuZGluZyk7XG4gICAgICB0aGlzLmVsZS5jbGFzc0xpc3QuYWRkKCdyZW5kZXItZW52Jyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5jdnMgPSB0aGlzLmVsZTtcbiAgICB9XG5cbiAgICB0aGlzLmN0eCA9IHRoaXMuY3ZzLmdldENvbnRleHQoJzJkJyk7XG4gICAgdGhpcy50cmlnZ2VyUmVzaXppbmdNZWNoYW5pc20oKTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gICAgICB0aGlzLmlzUmVzaXppbmcgPSB0cnVlO1xuICAgICAgdGhpcy5pc1Jlc2l6aW5nQ2FsbGJhY2soKTtcbiAgICB9KTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBkZWJvdW5jZSgoKSA9PiB7XG4gICAgICB0aGlzLmlzUmVzaXppbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMudHJpZ2dlclJlc2l6aW5nTWVjaGFuaXNtKCk7XG4gICAgICB0aGlzLnJlc2l6ZWRDYWxsYmFjaygpO1xuICAgIH0sIDUwMCkpO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Zpc2liaWxpdHljaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBpZiAoZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlICE9PSBcInZpc2libGVcIikge1xuICAgICAgICB0aGlzLmZyYW1lSXNQYXVzZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5hZGRFdmVudEhhbmRsZXIoKTtcblxuICAgIHRoaXMucmVmcmVzaEJhc2VGcmFtZUNvdW50ZXIoKTtcblxuICB9XG5cbiAgdXBkYXRlUG9zaXRpb25PcHRpb25TZXR0aW5nKCkge1xuXG4gIH1cblxuICByZWZyZXNoQmFzZUZyYW1lQ291bnRlcigpIHtcbiAgICBsZXQgdGhpc0ZyYW1lVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIHRoaXMudGltZUVsYXBzZWQgPSAodGhpc0ZyYW1lVGltZSAtIHRoaXMucHJldmlvdXNGcmFtZVRpbWUpIC8gMTAwMDtcbiAgICBpZiAodGhpcy5mcmFtZUlzUGF1c2VkKSB7XG4gICAgICB0aGlzLnRpbWVFbGFwc2VkID0gMDtcbiAgICAgIHRoaXMuZnJhbWVJc1BhdXNlZCA9IGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLmZyYW1lQ291bnQgKz0gMTtcbiAgICB0aGlzLnByZXZpb3VzRnJhbWVUaW1lID0gdGhpc0ZyYW1lVGltZVxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICB0aGlzLnJlZnJlc2hCYXNlRnJhbWVDb3VudGVyKCk7XG4gICAgfSlcbiAgfVxuXG4gIHZpcnR1YWxQYXJlbnRWYWxpZGF0aW9uKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5ib2R5LmNvbnRhaW5zKHRoaXMudmlydHVhbFBhcmVudCkgfHwgdGhpcy52aXJ0dWFsUGFyZW50ID09PSBkb2N1bWVudC5ib2R5O1xuICB9XG5cbiAgdHJpZ2dlclJlc2l6aW5nTWVjaGFuaXNtKCkge1xuICAgIGlmICh0aGlzLmNhbnZhc1NpemVmaXhlZCkgcmV0dXJuO1xuXG4gICAgaWYgKHRoaXMuZWxlLnRhZ05hbWUgIT09ICdDQU5WQVMnKSB7XG4gICAgICBsZXQgY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodDtcbiAgICAgIGlmICh0aGlzLnZpcnR1YWxQYXJlbnRWYWxpZGF0aW9uKCkpIHtcbiAgICAgICAgY2FudmFzV2lkdGggPSB0aGlzLnZpcnR1YWxQYXJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gICAgICAgIGNhbnZhc0hlaWdodCA9IHRoaXMudmlydHVhbFBhcmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgY2FudmFzV2lkdGggPSB0aGlzLmVsZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcbiAgICAgICAgY2FudmFzSGVpZ2h0ID0gdGhpcy5lbGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuICAgICAgfVxuXG4gICAgICB0aGlzLmN2cy53aWR0aCA9IGNhbnZhc1dpZHRoO1xuICAgICAgdGhpcy5jdnMuaGVpZ2h0ID0gY2FudmFzSGVpZ2h0O1xuXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgbGV0IGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQ7XG4gICAgICBpZiAodGhpcy52aXJ0dWFsUGFyZW50VmFsaWRhdGlvbigpKSB7XG4gICAgICAgIGNhbnZhc1dpZHRoID0gdGhpcy52aXJ0dWFsUGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICAgICAgICBjYW52YXNIZWlnaHQgPSB0aGlzLnZpcnR1YWxQYXJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNhbnZhc1dpZHRoID0gdGhpcy5jdnMucGFyZW50RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcbiAgICAgICAgY2FudmFzSGVpZ2h0ID0gdGhpcy5jdnMucGFyZW50RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG4gICAgICB9XG4gICAgICB0aGlzLmN2cy53aWR0aCA9IGNhbnZhc1dpZHRoO1xuICAgICAgdGhpcy5jdnMuaGVpZ2h0ID0gY2FudmFzSGVpZ2h0O1xuXG4gICAgfVxuXG4gIH1cblxuICBzZXRDYW52YXNTaXplKHdpZHRoLCBoZWlnaHQpIHtcbiAgICB0aGlzLmNhbnZhc1NpemVmaXhlZCA9IHRydWU7XG4gICAgdGhpcy5jdnMud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLmN2cy5oZWlnaHQgPSBoZWlnaHQ7XG4gIH1cblxuICBiYWNrZ3JvdW5kKGNvbG9yKSB7XG4gICAgdGhpcy5jdHguc2F2ZSgpO1xuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgIHRoaXMuY3R4LmZpbGxSZWN0KDAsIDAsIHRoaXMuY3ZzLndpZHRoLCB0aGlzLmN2cy5oZWlnaHQpO1xuICAgIHRoaXMuY3R4LnJlc3RvcmUoKTtcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmN2cy53aWR0aCwgdGhpcy5jdnMuaGVpZ2h0KTtcbiAgfVxuXG4gIGFkZEV2ZW50SGFuZGxlcigpIHtcblxuICAgIHRoaXMuY3ZzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5pc0NsaWNrID0gdHJ1ZTtcbiAgICB9KVxuICAgIHRoaXMuY3ZzLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCAoKSA9PiB7XG4gICAgICB0aGlzLmlzQ2xpY2sgPSB0cnVlO1xuXG4gICAgfSlcblxuICAgIHRoaXMuY3ZzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChlKSA9PiB7XG4gICAgICBsZXQgcG9zID0gcG9pbnRlckV2ZW50VG9YWShlKTtcbiAgICAgIHRoaXMubW91c2UgPSB7XG4gICAgICAgIHg6IHBvcy54LFxuICAgICAgICB5OiBwb3MueVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLmN2cy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCAoZSkgPT4ge1xuICAgICAgbGV0IHBvcyA9IHBvaW50ZXJFdmVudFRvWFkoZSk7XG4gICAgICB0aGlzLm1vdXNlID0ge1xuICAgICAgICB4OiBwb3MueCxcbiAgICAgICAgeTogcG9zLnlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgY3JlYXRlVmlydHVhbENhbnZhc0Jhc2VJbnN0YW5jZSgpIHtcbiAgICBsZXQgdmN2cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIGxldCB2Y3ZzSW5zdGFuY2UgPSBuZXcgQ2FudmFzMkRGeEJhc2UodmN2cywge30sIHt9LCB0aGlzLmVsZSk7XG4gICAgcmV0dXJuIHZjdnNJbnN0YW5jZTtcbiAgfVxuXG4gIGFkZE5ld0xheWVyKCkge1xuICAgIGlmICh0aGlzLmVsZS50YWdOYW1lID09PSAnQ0FOVkFTJykgcmV0dXJuIG5ldyBUeXBlRXJyb3IoYOaWsOWinuWcluWxpOaWueazleWPquaUr+aPtOS7peepumRpduWuueWZqOWIneWni+WMlueahOa4suafk+eSsOWig2ApO1xuICAgIGxldCBjdnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICBjdnMuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgIHRoaXMubGF5ZXJzQ29udGFpbmVyLnByZXBlbmQoY3ZzKTtcbiAgICBsZXQgY3ZzSW5zdGFuY2UgPSBuZXcgQ2FudmFzMkRGeEJhc2UoY3ZzLCB7fSwge30sIHRoaXMuZWxlKTtcbiAgICB0aGlzLmxheWVycy5wdXNoKGN2c0luc3RhbmNlKTtcbiAgICByZXR1cm4gY3ZzSW5zdGFuY2U7XG4gIH1cblxuICBhZGREaXZMYXllcihpZCwgY2xhc3NOYW1lKSB7XG4gICAgaWYgKHRoaXMuZWxlLnRhZ05hbWUgPT09ICdDQU5WQVMnKSByZXR1cm4gbmV3IFR5cGVFcnJvcihg5paw5aKe5ZyW5bGk5pa55rOV5Y+q5pSv5o+05Lul56m6ZGl25a655Zmo5Yid5aeL5YyW55qE5riy5p+T55Kw5aKDYCk7XG4gICAgbGV0IGRpdkxheWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaWYgKCEhY2xhc3NOYW1lKSB7XG4gICAgICBkaXZMYXllci5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgfVxuICAgIGlmICghIWlkKSB7XG4gICAgICBkaXZMYXllci5pZCA9IGlkO1xuICAgIH1cbiAgICBkaXZMYXllci5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgZGl2TGF5ZXIuc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gICAgZGl2TGF5ZXIuc3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xuICAgIHRoaXMuZGl2TGF5ZXJDb250YWluZXIucHJlcGVuZChkaXZMYXllcik7XG4gICAgdGhpcy5kaXZMYXllcnMucHVzaChkaXZMYXllcik7XG4gICAgcmV0dXJuIGRpdkxheWVyXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvb3QoY3RvciwgZGVmYXVsdENvbmZpZywgY29uZmlnLCB0YXJnZXRFbGUsIHZpcnR1YWxQYXJlbnQpIHtcbiAgbGV0IGN2cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcbiAgY3ZzID0gY3ZzID8gY3ZzIDogZG9jdW1lbnQuYm9keTtcbiAgbGV0IGVsZSA9IHRhcmdldEVsZSA/IHRhcmdldEVsZSA6IGN2cztcbiAgbGV0IHRyaWdnZXI7XG4gIGxldCBib290UHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xuICAgIHRyaWdnZXIgPSAoKSA9PiB7XG4gICAgICBsZXQgaW5zdGFuY2UgPSBuZXcgY3RvcihlbGUsIGNvbmZpZywgZGVmYXVsdENvbmZpZywgdmlydHVhbFBhcmVudCk7XG4gICAgICByZXMoaW5zdGFuY2UpO1xuICAgIH07XG4gIH0pO1xuXG4gIGxldCBjb250cm9sbGVyID0ge1xuICAgIHByb21pc2U6IGJvb3RQcm9taXNlLFxuICAgIHRyaWdnZXI6IHRyaWdnZXIsXG4gIH1cblxuICByZXR1cm4gY29udHJvbGxlcjtcbn0iLCJleHBvcnQgZnVuY3Rpb24gJChzZWxlY3Rvcikge1xuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGUoc2VsZWN0b3IsIHN0YXR1cykge1xuICBsZXQgc3R5bGVTdHIgPSBzdGF0dXMgPyAnYmxvY2snIDogJ25vbmUnXG4gICQoc2VsZWN0b3IpLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBgZGlzcGxheToke3N0eWxlU3RyfWApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlQ2xhc3Moc2VsZWN0b3IsIGNsYXNzbmFtZSwgc3RhdHVzKSB7XG4gIGxldCBhY3Rpb24gPSBzdGF0dXMgPyAnYWRkJyA6ICdyZW1vdmUnO1xuICAkKHNlbGVjdG9yKS5jbGFzc0xpc3RbYWN0aW9uXShjbGFzc25hbWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZW1pdChldmVudE5hbWUpIHtcbiAgbGV0IHNvbWVFdmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdFdmVudCcpO1xuICBzb21lRXZlbnQuaW5pdEV2ZW50KGV2ZW50TmFtZSwgdHJ1ZSwgdHJ1ZSk7XG4gIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoc29tZUV2ZW50KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcmVudHMobm9kZSwgc2VsZWN0b3IpIHtcbiAgbGV0IGN1cnJlbnQgPSBub2RlLFxuICAgIGxpc3QgPSBbXTtcbiAgd2hpbGUgKGN1cnJlbnQucGFyZW50Tm9kZSAhPSBudWxsICYmIGN1cnJlbnQucGFyZW50Tm9kZSAhPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICBsaXN0LnB1c2goY3VycmVudC5wYXJlbnROb2RlKTtcbiAgICBjdXJyZW50ID0gY3VycmVudC5wYXJlbnROb2RlO1xuICB9XG4gIHJldHVybiBsaXN0LmZpbHRlcigobywgaSkgPT4ge1xuICAgIHJldHVybiBvLm1hdGNoZXMoc2VsZWN0b3IpXG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmYWRlT3V0KGVsZSwgZHVyYXRpb24sIGNiID0gKCkgPT4geyBlbGUuc3R5bGUuZGlzcGxheSA9ICdub25lJzsgfSkge1xuICB2YXIgZmFkZVRhcmdldCA9IGVsZTtcbiAgdmFyIGZhZGVFZmZlY3QgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgaWYgKCFmYWRlVGFyZ2V0LnN0eWxlLm9wYWNpdHkpIHtcbiAgICAgIGZhZGVUYXJnZXQuc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgfVxuICAgIGlmIChmYWRlVGFyZ2V0LnN0eWxlLm9wYWNpdHkgPiAwKSB7XG4gICAgICBmYWRlVGFyZ2V0LnN0eWxlLm9wYWNpdHkgLT0gMSAvIGR1cmF0aW9uO1xuICAgIH0gZWxzZSB7XG4gICAgICBjbGVhckludGVydmFsKGZhZGVFZmZlY3QpO1xuICAgICAgY2IoKVxuICAgICAgZWxlLnN0eWxlLm9wYWNpdHkgPSAnJztcblxuICAgIH1cbiAgfSwgMSAvIGR1cmF0aW9uKTtcbn0iLCJjb25zdCBNZXJzZW5uZVR3aXN0ZXIgPSByZXF1aXJlKCdtZXJzZW5uZS10d2lzdGVyJyk7XG5jb25zdCBNVCA9IG5ldyBNZXJzZW5uZVR3aXN0ZXIoKTtcblxuXG5leHBvcnQgZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgZGVsYXkpIHtcbiAgbGV0IHRpbWVyID0gbnVsbDtcbiAgY29uc3QgJHRoaXMgPSB0aGlzO1xuICByZXR1cm4gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRleHQgPSAkdGhpcztcbiAgICBjb25zdCBhcmdzID0gYXJndW1lbnRzO1xuICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgfSwgZGVsYXkpO1xuICB9O1xufVxuXG5leHBvcnQgY29uc3QgaXMgPSB7XG4gIGFycjogYSA9PiBBcnJheS5pc0FycmF5KGEpLFxuICBvYmo6IGEgPT4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGEpLmluZGV4T2YoJ09iamVjdCcpID4gLTEsXG4gIHB0aDogYSA9PiBpcy5vYmooYSkgJiYgYS5oYXNPd25Qcm9wZXJ0eSgndG90YWxMZW5ndGgnKSxcbiAgc3ZnOiBhID0+IGEgaW5zdGFuY2VvZiBTVkdFbGVtZW50LFxuICBpbnA6IGEgPT4gYSBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQsXG4gIGRvbTogYSA9PiBhLm5vZGVUeXBlIHx8IGlzLnN2ZyhhKSxcbiAgc3RyOiBhID0+IHR5cGVvZiBhID09PSAnc3RyaW5nJyxcbiAgZm5jOiBhID0+IHR5cGVvZiBhID09PSAnZnVuY3Rpb24nLFxuICB1bmQ6IGEgPT4gdHlwZW9mIGEgPT09ICd1bmRlZmluZWQnLFxuICBuaWw6IGEgPT4gaXMudW5kKGEpIHx8IGEgPT09IG51bGwsXG4gIGhleDogYSA9PiAvKF4jWzAtOUEtRl17Nn0kKXwoXiNbMC05QS1GXXszfSQpL2kudGVzdChhKSxcbiAgcmdiYTogYSA9PiAvXnJnYmEvLnRlc3QoYSksXG4gIHJnYjogYSA9PiAvXnJnYi8udGVzdChhKSxcbiAgaHNsOiBhID0+IC9eaHNsLy50ZXN0KGEpLFxuICBjb2w6IGEgPT4gKGlzLmhleChhKSB8fCBpcy5yZ2IoYSkgfHwgaXMuaHNsKGEpKSxcbiAga2V5OiBhID0+ICFkZWZhdWx0SW5zdGFuY2VTZXR0aW5ncy5oYXNPd25Qcm9wZXJ0eShhKSAmJiAhZGVmYXVsdFR3ZWVuU2V0dGluZ3MuaGFzT3duUHJvcGVydHkoYSkgJiYgYSAhPT0gJ3RhcmdldHMnICYmIGEgIT09ICdrZXlmcmFtZXMnLFxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tV2l0aGluUmFuZ2UobWluLCBtYXgsIHNlZWQpIHtcbiAgcmV0dXJuIE1ULnJhbmRvbShzZWVkKSAqIChtYXggLSBtaW4pICsgbWluO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzdGFuY2UoeDAsIHkwLCB4MSwgeTEpIHtcbiAgcmV0dXJuIE1hdGguc3FydCgoeDEgLSB4MCkgKiAoeDEgLSB4MCkgKyAoeTEgLSB5MCkgKiAoeTEgLSB5MCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVncmVlVG9SYWRpYW4oZGVncmVlKSB7XG4gIHJldHVybiAoZGVncmVlIC8gMTgwKSAqIE1hdGguUEk7XG59XG5cbi8qKlxuICog57Wx5LiAIHRvdWNoRXZlbnQvbW91c2VFdmVudCDnmoTkuovku7bop7jnmbzluqfmqJnlj5blvpfmlrnlvI9cbiAqIEBleHBvcnRcbiAqIEBwYXJhbSB7b2JqZWN0fSAg5YKz5YWl55qEZXZlbnQg54mp5Lu2XG4gKiBAcmV0dXJucyB7T2JqZWN0fSDkuIDlgIvnianku7YsIOWFp+WQq+S6i+S7tuinuOeZvOW6p+aomeeahFgvWSDluqfmqJnlgLxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBvaW50ZXJFdmVudFRvWFkoZSkge1xuICB2YXIgb3V0ID0geyB4OiAwLCB5OiAwIH07XG4gIGlmIChlLnR5cGUgPT09ICd0b3VjaHN0YXJ0JyB8fCBlLnR5cGUgPT09ICd0b3VjaG1vdmUnIHx8IGUudHlwZSA9PT0gJ3RvdWNoZW5kJyB8fCBlLnR5cGUgPT09ICd0b3VjaGNhbmNlbCcpIHtcbiAgICB2YXIgdG91Y2ggPSBlLm9yaWdpbmFsRXZlbnQudG91Y2hlc1swXSB8fCBlLm9yaWdpbmFsRXZlbnQuY2hhbmdlZFRvdWNoZXNbMF07XG4gICAgb3V0LnggPSB0b3VjaC5wYWdlWDtcbiAgICBvdXQueSA9IHRvdWNoLnBhZ2VZO1xuICB9IGVsc2UgaWYgKGUudHlwZSA9PT0gJ21vdXNlZG93bicgfHwgZS50eXBlID09PSAnbW91c2V1cCcgfHwgZS50eXBlID09PSAnbW91c2Vtb3ZlJyB8fCBlLnR5cGUgPT09ICdtb3VzZW92ZXInIHx8IGUudHlwZSA9PT0gJ21vdXNlb3V0JyB8fCBlLnR5cGUgPT09ICdtb3VzZWVudGVyJyB8fCBlLnR5cGUgPT09ICdtb3VzZWxlYXZlJykge1xuICAgIG91dC54ID0gZS5wYWdlWDtcbiAgICBvdXQueSA9IGUucGFnZVk7XG4gIH1cbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiDnm7TmjqXlkbzlj6toYXNPd25Qcm9wZXJ0eeeahOWOn+Wei+aWueazlSjnlKjlnKhoYXNPd25Qcm9wZXJ0eeiiq+aUueWLlemBjueahOeLgOazgSlcbiAqXG4gKiBAZXhwb3J0XG4gKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0IOebruaomeeJqeS7tlxuICogQHBhcmFtIHtzdHJpbmd9IHByb3Ag55uu5qiZcHJvcFxuICogQHJldHVybnMge2Jvb2xlYW59IOaYry/lkKZcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRhcmdldEhhc1Byb3AodGFyZ2V0LCBwcm9wKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodGFyZ2V0LCBwcm9wKTtcbn1cblxuLyoqXG4gKiDnorroqo3kuIDlgIvorormlbgv5YC85piv5ZCm54K656m6KDDkuI3nrpfnqbrlgLwpXG4gKiBAZXhwb3J0XG4gKiBAcGFyYW0geyp9IHZhbFxuICogQHJldHVybnMge2Jvb2xlYW59IOaYry/lkKZcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzRW1wdHkodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnbnVtYmVyJyA/IGlzTmFOKHZhbCkgOiAhdmFsO1xufVxuXG5cbmZ1bmN0aW9uIHJnYlRvUmdiYShyZ2JWYWx1ZSkge1xuICBjb25zdCByZ2IgPSAvcmdiXFwoKFxcZCssXFxzKltcXGRdKyxcXHMqW1xcZF0rKVxcKS9nLmV4ZWMocmdiVmFsdWUpO1xuICByZXR1cm4gcmdiID8gYHJnYmEoJHtyZ2JbMV19LDEpYCA6IHJnYlZhbHVlO1xufVxuXG5mdW5jdGlvbiBoZXhUb1JnYmEoaGV4VmFsdWUpIHtcbiAgY29uc3Qgcmd4ID0gL14jPyhbYS1mXFxkXSkoW2EtZlxcZF0pKFthLWZcXGRdKSQvaTtcbiAgY29uc3QgaGV4ID0gaGV4VmFsdWUucmVwbGFjZShyZ3gsIChtLCByLCBnLCBiKSA9PiByICsgciArIGcgKyBnICsgYiArIGIpO1xuICBjb25zdCByZ2IgPSAvXiM/KFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pJC9pLmV4ZWMoaGV4KTtcbiAgY29uc3QgciA9IHBhcnNlSW50KHJnYlsxXSwgMTYpO1xuICBjb25zdCBnID0gcGFyc2VJbnQocmdiWzJdLCAxNik7XG4gIGNvbnN0IGIgPSBwYXJzZUludChyZ2JbM10sIDE2KTtcbiAgcmV0dXJuIGByZ2JhKCR7cn0sJHtnfSwke2J9LDEpYDtcbn1cblxuZnVuY3Rpb24gaHNsVG9SZ2JhKGhzbFZhbHVlKSB7XG4gIGNvbnN0IGhzbCA9IC9oc2xcXCgoXFxkKyksXFxzKihbXFxkLl0rKSUsXFxzKihbXFxkLl0rKSVcXCkvZy5leGVjKGhzbFZhbHVlKSB8fCAvaHNsYVxcKChcXGQrKSxcXHMqKFtcXGQuXSspJSxcXHMqKFtcXGQuXSspJSxcXHMqKFtcXGQuXSspXFwpL2cuZXhlYyhoc2xWYWx1ZSk7XG4gIGNvbnN0IGggPSBwYXJzZUludChoc2xbMV0sIDEwKSAvIDM2MDtcbiAgY29uc3QgcyA9IHBhcnNlSW50KGhzbFsyXSwgMTApIC8gMTAwO1xuICBjb25zdCBsID0gcGFyc2VJbnQoaHNsWzNdLCAxMCkgLyAxMDA7XG4gIGNvbnN0IGEgPSBoc2xbNF0gfHwgMTtcbiAgZnVuY3Rpb24gaHVlMnJnYihwLCBxLCB0KSB7XG4gICAgaWYgKHQgPCAwKSB0ICs9IDE7XG4gICAgaWYgKHQgPiAxKSB0IC09IDE7XG4gICAgaWYgKHQgPCAxIC8gNikgcmV0dXJuIHAgKyAocSAtIHApICogNiAqIHQ7XG4gICAgaWYgKHQgPCAxIC8gMikgcmV0dXJuIHE7XG4gICAgaWYgKHQgPCAyIC8gMykgcmV0dXJuIHAgKyAocSAtIHApICogKDIgLyAzIC0gdCkgKiA2O1xuICAgIHJldHVybiBwO1xuICB9XG4gIGxldCByLCBnLCBiO1xuICBpZiAocyA9PSAwKSB7XG4gICAgciA9IGcgPSBiID0gbDtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBxID0gbCA8IDAuNSA/IGwgKiAoMSArIHMpIDogbCArIHMgLSBsICogcztcbiAgICBjb25zdCBwID0gMiAqIGwgLSBxO1xuICAgIHIgPSBodWUycmdiKHAsIHEsIGggKyAxIC8gMyk7XG4gICAgZyA9IGh1ZTJyZ2IocCwgcSwgaCk7XG4gICAgYiA9IGh1ZTJyZ2IocCwgcSwgaCAtIDEgLyAzKTtcbiAgfVxuICByZXR1cm4gYHJnYmEoJHtyICogMjU1fSwke2cgKiAyNTV9LCR7YiAqIDI1NX0sJHthfSlgO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29sb3JUb1JnYmEodmFsKSB7XG4gIGlmIChpcy5yZ2IodmFsKSkgcmV0dXJuIHJnYlRvUmdiYSh2YWwpO1xuICBpZiAoaXMuaGV4KHZhbCkpIHJldHVybiBoZXhUb1JnYmEodmFsKTtcbiAgaWYgKGlzLmhzbCh2YWwpKSByZXR1cm4gaHNsVG9SZ2JhKHZhbCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDaGFubmVsVmFsdWVzRnJvbVJnYmEocmdiYSkge1xuICByZXR1cm4gcmdiYS5yZXBsYWNlKC9eKHJnYnxyZ2JhKVxcKC8sICcnKS5yZXBsYWNlKC9cXCkkLywgJycpLnJlcGxhY2UoL1xccy9nLCAnJykuc3BsaXQoJywnKS5tYXAoeCA9PiBwYXJzZUludCh4KSk7XG59XG5cblxuXG5leHBvcnQgZnVuY3Rpb24gY2FsY1dheXBvaW50cyh2ZXJ0aWNlcywgaW50ZXJwb2xhdGUgPSAzMCkge1xuICB2YXIgd2F5cG9pbnRzID0gW107XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgdmVydGljZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgcHQwID0gdmVydGljZXNbaSAtIDFdO1xuICAgIHZhciBwdDEgPSB2ZXJ0aWNlc1tpXTtcbiAgICB2YXIgZHggPSBwdDEueCAtIHB0MC54O1xuICAgIHZhciBkeSA9IHB0MS55IC0gcHQwLnk7XG4gICAgZm9yICh2YXIgaiA9IDA7IGogPD0gaW50ZXJwb2xhdGU7IGorKykge1xuICAgICAgdmFyIHggPSBwdDAueCArIGR4ICogaiAvIGludGVycG9sYXRlO1xuICAgICAgdmFyIHkgPSBwdDAueSArIGR5ICogaiAvIGludGVycG9sYXRlO1xuICAgICAgd2F5cG9pbnRzLnB1c2goe1xuICAgICAgICB4OiB4LFxuICAgICAgICB5OiB5XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuXG4gIHJldHVybiAod2F5cG9pbnRzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhZFN0cmluZyh0YXJnZXRTdHIsIGxlbmd0aCwgcGFkU3RyaW5nID0gJzAnKSB7XG4gIHZhciBzdHIgPSB0YXJnZXRTdHIudG9TdHJpbmcoKTtcbiAgd2hpbGUgKHN0ci5sZW5ndGggPCBsZW5ndGgpXG4gICAgc3RyID0gcGFkU3RyaW5nICsgc3RyO1xuICByZXR1cm4gc3RyO1xufSIsImV4cG9ydCBmdW5jdGlvbiBkcmF3U3F1YXJlKGN0eCwgeCwgeSwgd2lkdGgsIGNvbG9yLCBhbHBoYSkge1xuICBjdHguc2F2ZSgpO1xuICBjdHguZmlsbFN0eWxlID0gY29sb3I7XG4gIGN0eC5nbG9iYWxBbHBoYSA9IGFscGhhO1xuICBjdHguZmlsbFJlY3QoeCAtIHdpZHRoIC8gMiwgeSAtIHdpZHRoIC8gMiwgd2lkdGgsIHdpZHRoKTtcbiAgY3R4LnJlc3RvcmUoKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBkcmF3UmVjdChjdHgsIHgsIHksIHdpZHRoLCBoZWlnaHQsIGNvbG9yLCBhbHBoYSkge1xuICBjdHguc2F2ZSgpO1xuICBjdHguZmlsbFN0eWxlID0gY29sb3I7XG4gIGN0eC5nbG9iYWxBbHBoYSA9IGFscGhhO1xuICBjdHguZmlsbFJlY3QoeCAtIHdpZHRoIC8gMiwgeSAtIGhlaWdodCAvIDIsIHdpZHRoLCBoZWlnaHQpO1xuICBjdHgucmVzdG9yZSgpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGRyYXdDaXJjbGUoY3R4LCB4LCB5LCB3aWR0aCwgY29sb3IsIGFscGhhID0gMSkge1xuICBjdHguc2F2ZSgpXG4gIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgY3R4Lmdsb2JhbEFscGhhID0gYWxwaGE7XG4gIGN0eC5iZWdpblBhdGgoKTtcbiAgY3R4LmFyYyh4LCB5LCB3aWR0aCAvIDIsIDAsIE1hdGguUEkgKiAyLCB0cnVlKTtcbiAgY3R4LmNsb3NlUGF0aCgpO1xuICBjdHguZmlsbCgpO1xuICBjdHgucmVzdG9yZSgpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGRyYXdMaW5lKGN0eCwgeDAsIHkwLCB4MSwgeTEsIHN0cm9rZUNvbG9yLCBzdHJva2VXaWR0aCkge1xuICBjdHguc2F2ZSgpO1xuICBjdHguc3Ryb2tlU3R5bGUgPSBzdHJva2VDb2xvcjtcbiAgY3R4LmxpbmVXaWR0aCA9IHN0cm9rZVdpZHRoO1xuICBjdHguYmVnaW5QYXRoKCk7XG4gIGN0eC5tb3ZlVG8oeDAsIHkwKTtcbiAgY3R4LmxpbmVUbyh4MSwgeTEpO1xuICBjdHguY2xvc2VQYXRoKCk7XG4gIGN0eC5zdHJva2UoKTtcbiAgY3R4LnJlc3RvcmUoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRyYXdUZXh0KGN0eCwgdGV4dENvbnRlbnQgPSAndGV4dCcsIHgsIHksIGNvbG9yID0gJyMwMDAnLCBmb250U2l6ZSA9IDEyLCBmb250ID0gJ0FyaWFsJykge1xuICBjdHguc2F2ZSgpO1xuICBjdHguZmlsbFN0eWxlID0gY29sb3I7XG4gIGN0eC5mb250ID0gYCR7Zm9udFNpemV9cHggJHtmb250fWA7XG4gIGN0eC5maWxsVGV4dCh0ZXh0Q29udGVudCwgeCwgeSk7XG4gIGN0eC5yZXN0b3JlKCk7XG59XG5cbiIsImV4cG9ydCBmdW5jdGlvbiBnZXRTY3JlZW5zaG90SW1hZ2UodGFyZ2V0Q3ZzKSB7XG4gIGxldCB1cmwgPSB0YXJnZXRDdnMudG9EYXRhVVJMKCk7XG4gIGxldCBpbWFnZSA9IG5ldyBJbWFnZSh0YXJnZXRDdnMud2lkdGgsIHRhcmdldEN2cy5oZWlnaHQpO1xuICBpbWFnZS5zcmMgPSB1cmw7XG4gIHJldHVybiBpbWFnZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENhY2hlQ2FudmFzKHRhcmdldEN0eCkge1xuICBsZXQgY2FjaGVDdnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgbGV0IGNhY2hlQ3R4ID0gY2FjaGVDdnMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgbGV0IHNvdXJjZVdpZHRoID0gdGFyZ2V0Q3R4LmNhbnZhcy53aWR0aDtcbiAgbGV0IHNvdXJjZUhlaWdodCA9IHRhcmdldEN0eC5jYW52YXMuaGVpZ2h0O1xuICBjYWNoZUN2cy53aWR0aCA9IHNvdXJjZVdpZHRoO1xuICBjYWNoZUN2cy5oZWlnaHQgPSBzb3VyY2VIZWlnaHQ7XG5cbiAgbGV0IGNhY2hlRGF0YSA9IHRhcmdldEN0eC5nZXRJbWFnZURhdGEoMCwgMCwgc291cmNlV2lkdGgsIHNvdXJjZUhlaWdodCk7XG4gIGNhY2hlQ3R4LnB1dEltYWdlRGF0YShjYWNoZURhdGEsIDAsIDApO1xuICByZXR1cm4gY2FjaGVDdnM7XG59IiwiaW1wb3J0IHsgQ2FudmFzMkRGeEJhc2UsIGJvb3QgfSBmcm9tICcuL2xpYi9iYXNlJztcbmltcG9ydCB7IGRyYXdDaXJjbGUgfSBmcm9tICcuL2xpYi9zaGFwZSc7XG5pbXBvcnQgeyAkIH0gZnJvbSAnLi9saWIvZG9tJ1xuaW1wb3J0IHsgdG9nZ2xlIH0gZnJvbSAnLi9saWIvZG9tJztcblxuY29uc3QgQkFMTF9BTklNQVRJT05fREVGQVVMVCA9IHtcbiAgYWZ0ZXJJbWFnZTogZmFsc2UsXG4gIHJhZGl1czogMjUsXG4gIGNvbG9yOiAnYmx1ZScsXG4gIHNwZWVkWDogMTAwMCxcbiAgc3BlZWRZOiAxMDAwLFxuICBhY2NlbGVyYXRpb25YOiAwLFxuICBhY2NlbGVyYXRpb25ZOiAwLFxuICBmcmljdGlvblg6IDEsXG4gIGZyaWN0aW9uWTogMC45OTk3XG59XG5cbmNvbnN0IFNQT1RTX0FOSU1BVElPTl9ERUZBVUxUID0ge1xuICBtaW5TaXplOiAxMCxcbiAgbWF4U2l6ZTogMjAsXG4gIHBlcmlvZDogMzAwLFxuICBzdGVwOiAxMCxcbiAgYm90dG9tTGF5ZXI6IG51bGwsXG4gIGNvbG9yOiAncmdiYSgwLDAsMCwwLjAzKScsXG4gIGNvbDogMTUsXG4gIHJvdzogMTVcbn1cblxuY2xhc3MgQmFzaWNSZWZlbGVjdGlvbiBleHRlbmRzIENhbnZhczJERnhCYXNlIHtcbiAgY29uc3RydWN0b3IoY2FudmFzLCBkZWZhdWx0Q29uZmlnLCBjb25maWcsIHZpcnR1YWxQYXJlbnQpIHtcbiAgICBzdXBlcihjYW52YXMsIGRlZmF1bHRDb25maWcsIGNvbmZpZywgdmlydHVhbFBhcmVudCk7XG4gICAgdGhpcy5zd2l0Y2hTdGF0dXMgPSBmYWxzZTtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuICBpbml0KCkge1xuICAgIHRoaXMuc3dpdGNoU3RhdHVzID0gdHJ1ZTtcbiAgICB0aGlzLmluaXRCYWxsKCk7XG4gICAgdGhpcy5hbmltYXRlQmFsbCgpO1xuICB9XG5cbiAgc3dpdGNoZXIoc3RhdHVzKSB7XG4gICAgdGhpcy5zd2l0Y2hTdGF0dXMgPSBzdGF0dXM7XG4gIH1cblxuICBpbml0QmFsbCgpIHtcbiAgICBsZXQgJHRoaXMgPSB0aGlzO1xuICAgIHRoaXMuYmFsbCA9IHtcbiAgICAgIGFmdGVySW1hZ2U6ICR0aGlzLmNvbmZpZy5hZnRlckltYWdlLFxuICAgICAgY29sb3I6ICR0aGlzLmNvbmZpZy5jb2xvcixcbiAgICAgIHJhZGl1czogJHRoaXMuY29uZmlnLnJhZGl1cyxcbiAgICAgIGxvY2F0aW9uOiB7XG4gICAgICAgIHg6ICR0aGlzLmN2cy53aWR0aCAvIDIsXG4gICAgICAgIHk6ICR0aGlzLmN2cy5oZWlnaHQgLyAyLFxuICAgICAgfSxcbiAgICAgIHNwZWVkOiB7XG4gICAgICAgIHg6ICR0aGlzLmNvbmZpZy5zcGVlZFgsXG4gICAgICAgIHk6ICR0aGlzLmNvbmZpZy5zcGVlZFlcbiAgICAgIH0sXG4gICAgICBhY2NlbGVyYXRpb246IHtcbiAgICAgICAgeDogJHRoaXMuY29uZmlnLmFjY2VsZXJhdGlvblgsXG4gICAgICAgIHk6ICR0aGlzLmNvbmZpZy5hY2NlbGVyYXRpb25ZXG4gICAgICB9LFxuICAgICAgZnJpY3Rpb246IHtcbiAgICAgICAgeDogJHRoaXMuY29uZmlnLmZyaWN0aW9uWCxcbiAgICAgICAgeTogJHRoaXMuY29uZmlnLmZyaWN0aW9uWVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBkcmF3QmFsbCgpIHtcbiAgICBkcmF3Q2lyY2xlKHRoaXMuY3R4LCB0aGlzLmJhbGwubG9jYXRpb24ueCwgdGhpcy5iYWxsLmxvY2F0aW9uLnksIHRoaXMuYmFsbC5yYWRpdXMgKiAyLCB0aGlzLmJhbGwuY29sb3IpO1xuICB9XG4gIGFuaW1hdGVCYWxsKCkge1xuICAgIGlmICh0aGlzLnN3aXRjaFN0YXR1cyA9PSBmYWxzZSkgcmV0dXJuO1xuICAgIGxldCAkdGhpcyA9IHRoaXM7XG4gICAgaWYgKCR0aGlzLmJhbGwuYWZ0ZXJJbWFnZSA9PT0gdHJ1ZSkge1xuICAgICAgJHRoaXMuYmFja2dyb3VuZCgncmdiKDI1NSwgMTc3LCA0MywwLjEpJyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgJHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCAkdGhpcy5jdnMud2lkdGgsICR0aGlzLmN2cy5oZWlnaHQpO1xuICAgIH1cbiAgICAkdGhpcy5jdHguZHJhd0ltYWdlKCR0aGlzLmNvbmZpZy5ib3R0b21MYXllciwgMCwgMCk7XG4gICAgJHRoaXMuZHJhd0JhbGwoKTtcbiAgICAkdGhpcy5yZWZyZXNoTG9jYXRpb24oKTtcbiAgICAkdGhpcy5yZWZyZXNoU3BlZWQoKTtcbiAgICAkdGhpcy5jaGVja0JvdW5kYXJ5KCk7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKFxuICAgICAgJHRoaXMuYW5pbWF0ZUJhbGwuYmluZCgkdGhpcylcbiAgICApO1xuICB9XG5cbiAgcmVmcmVzaFNwZWVkKCkge1xuICAgIGxldCBkdCA9IHRoaXMudGltZUVsYXBzZWQ7XG4gICAgdGhpcy5iYWxsLnNwZWVkLnggPSB0aGlzLmJhbGwuc3BlZWQueCAqIHRoaXMuYmFsbC5mcmljdGlvbi54ICsgdGhpcy5iYWxsLmFjY2VsZXJhdGlvbi54ICogZHQ7XG4gICAgdGhpcy5iYWxsLnNwZWVkLnkgPSB0aGlzLmJhbGwuc3BlZWQueSAqIHRoaXMuYmFsbC5mcmljdGlvbi55ICsgdGhpcy5iYWxsLmFjY2VsZXJhdGlvbi55ICogZHQ7XG4gIH1cblxuICByZWZyZXNoTG9jYXRpb24oKSB7XG4gICAgbGV0IGR0ID0gdGhpcy50aW1lRWxhcHNlZDtcbiAgICB0aGlzLmJhbGwubG9jYXRpb24ueCArPSB0aGlzLmJhbGwuc3BlZWQueCAqIGR0O1xuICAgIHRoaXMuYmFsbC5sb2NhdGlvbi55ICs9IHRoaXMuYmFsbC5zcGVlZC55ICogZHQ7XG4gIH1cbiAgY2hlY2tCb3VuZGFyeSgpIHtcbiAgICBsZXQgYmFsbCA9IHRoaXMuYmFsbDtcbiAgICBsZXQgY2FudmFzID0gdGhpcy5jdnM7XG4gICAgLy8g55W255CD5q2j5Zyo5bqV56uvXG4gICAgaWYgKGJhbGwubG9jYXRpb24ueSArIGJhbGwucmFkaXVzID4gY2FudmFzLmhlaWdodCkge1xuICAgICAgLy8g5LiU6YCf5bqm54K65q2j5YC877yI5pyd5LiL77yJXG4gICAgICBpZiAoYmFsbC5zcGVlZC55ID4gMCkge1xuICAgICAgICBiYWxsLnNwZWVkLnkgPSAtYmFsbC5zcGVlZC55O1xuICAgICAgfVxuICAgIH1cbiAgICAvLyDnlbbnkIPmraPlnKjpoILnq69cbiAgICBlbHNlIGlmIChiYWxsLmxvY2F0aW9uLnkgLSBiYWxsLnJhZGl1cyA8IDApIHtcbiAgICAgIC8vIOS4lOmAn+W6pueCuuiyoOWAvO+8iOacneS4iu+8iVxuICAgICAgaWYgKGJhbGwuc3BlZWQueSA8IDApIHtcbiAgICAgICAgYmFsbC5zcGVlZC55ID0gLWJhbGwuc3BlZWQueTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyDnlbbnkIPmraPlnKjlj7Pnq69cbiAgICBpZiAoYmFsbC5sb2NhdGlvbi54ICsgYmFsbC5yYWRpdXMgPiBjYW52YXMud2lkdGgpIHtcbiAgICAgIGlmIChiYWxsLnNwZWVkLnggPiAwKSB7XG4gICAgICAgIGJhbGwuc3BlZWQueCA9IC1iYWxsLnNwZWVkLng7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIOeVtueQg+ato+WcqOW3puerr1xuICAgIGVsc2UgaWYgKGJhbGwubG9jYXRpb24ueCAtIGJhbGwucmFkaXVzIDwgMCkge1xuICAgICAgaWYgKGJhbGwuc3BlZWQueCA8IDApIHtcbiAgICAgICAgYmFsbC5zcGVlZC54ID0gLWJhbGwuc3BlZWQueDtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxufVxuXG5jbGFzcyBTcG90c0J1bXBpbmcgZXh0ZW5kcyBDYW52YXMyREZ4QmFzZSB7XG4gIGNvbnN0cnVjdG9yKGNhbnZhcywgZGVmYXVsdENvbmZpZywgY29uZmlnLCB2aXJ0dWFsUGFyZW50KSB7XG4gICAgc3VwZXIoY2FudmFzLCBkZWZhdWx0Q29uZmlnLCBjb25maWcsIHZpcnR1YWxQYXJlbnQpO1xuICAgIHRoaXMuc3BvdHNTaXplID0gdGhpcy5jb25maWcubWluU2l6ZTtcbiAgICB0aGlzLmV4cGFuZCA9IHRydWU7XG4gICAgdGhpcy5zd2l0Y2hTdGF0dXMgPSBmYWxzZTtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuICBpbml0KCkge1xuICAgIHRoaXMuc3dpdGNoU3RhdHVzID0gdHJ1ZTtcbiAgICB0aGlzLmFuaW1hdGUoKTtcbiAgfVxuXG4gIHN3aXRjaGVyKHN0YXR1cykge1xuICAgIHRoaXMuc3dpdGNoU3RhdHVzID0gc3RhdHVzO1xuICB9XG5cbiAgYW5pbWF0ZSgpIHtcbiAgICBsZXQgJHRoaXMgPSB0aGlzO1xuICAgIHRoaXMuaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5zd2l0Y2hTdGF0dXMpIHtcbiAgICAgICAgJHRoaXMuY2xlYXIoKTtcbiAgICAgICAgJHRoaXMuZHJhd1Nwb3RzKCk7XG4gICAgICB9XG4gICAgfSwgdGhpcy5jb25maWcucGVyaW9kKVxuICB9XG5cbiAgZHJhd1Nwb3RzKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IHRoaXMuY29uZmlnLmNvbDsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8PSB0aGlzLmNvbmZpZy5jb2w7IGorKykge1xuICAgICAgICBkcmF3Q2lyY2xlKFxuICAgICAgICAgIHRoaXMuY3R4LFxuICAgICAgICAgIGkgKiB0aGlzLmN2cy53aWR0aCAvIHRoaXMuY29uZmlnLmNvbCxcbiAgICAgICAgICBqICogdGhpcy5jdnMuaGVpZ2h0IC8gdGhpcy5jb25maWcucm93LFxuICAgICAgICAgIHRoaXMuc3BvdHNTaXplLFxuICAgICAgICAgIHRoaXMuY29uZmlnLmNvbG9yLFxuICAgICAgICAgIDFcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5zcG90c1NpemUgLSAxIDwgdGhpcy5jb25maWcubWluU2l6ZSkge1xuICAgICAgdGhpcy5leHBhbmQgPSB0cnVlXG4gICAgfVxuICAgIGVsc2UgaWYgKHRoaXMuc3BvdHNTaXplICsgMSA+IHRoaXMuY29uZmlnLm1heFNpemUpIHtcbiAgICAgIHRoaXMuZXhwYW5kID0gZmFsc2VcbiAgICB9XG4gICAgaWYgKHRoaXMuZXhwYW5kKSB7XG4gICAgICB0aGlzLnNwb3RzU2l6ZSArPSB0aGlzLmNvbmZpZy5zdGVwO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuc3BvdHNTaXplIC09IHRoaXMuY29uZmlnLnN0ZXA7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0U3BsYXNoKCkge1xuICBsZXQgaW5pdGlhbFNjcmVlbiA9ICQoJyNpbml0aWFsLXNjcmVlbicpO1xuICBsZXQgdmlydHVhbENhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICBsZXQgc3dpdGNoZXI7XG4gIGxldCBzcG90QW5pbWF0aW9uID0gYm9vdChTcG90c0J1bXBpbmcsIFNQT1RTX0FOSU1BVElPTl9ERUZBVUxULCB7fSwgdmlydHVhbENhbnZhcywgaW5pdGlhbFNjcmVlbik7XG4gIGxldCBzcGxhc2hQcm9taXNlID0gc3BvdEFuaW1hdGlvbi5wcm9taXNlLnRoZW4oKHNwb3RzQnVtcGluZ0luc3RhbmNlKSA9PiB7XG4gICAgbGV0IGJvb3RDb250cm9sbGVyID0gYm9vdChCYXNpY1JlZmVsZWN0aW9uLCBCQUxMX0FOSU1BVElPTl9ERUZBVUxULCB7XG4gICAgICBhZnRlckltYWdlOiB0cnVlLFxuICAgICAgcmFkaXVzOiA0MCxcbiAgICAgIGNvbG9yOiAncmdiYSgwLCAwLCAwLDAuNzUpJyxcbiAgICAgIHNwZWVkWDogMTAwMCxcbiAgICAgIGJvdHRvbUxheWVyOiBzcG90c0J1bXBpbmdJbnN0YW5jZS5jdnMsXG4gICAgICBzcGVlZFk6IDEwMDAsXG4gICAgICBhY2NlbGVyYXRpb25YOiAwLFxuICAgICAgYWNjZWxlcmF0aW9uWTogOTgwLFxuICAgICAgZnJpY3Rpb25YOiAxLFxuICAgIH0sIGluaXRpYWxTY3JlZW4pO1xuXG4gICAgYm9vdENvbnRyb2xsZXIudHJpZ2dlcigpO1xuXG4gICAgcmV0dXJuIGJvb3RDb250cm9sbGVyLnByb21pc2UudGhlbigoYmFzaWNSZWZlbGVjdGlvbkluc3RhbmNlKSA9PiB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzID0+IHtcbiAgICAgICAgc3dpdGNoZXIgPSAoc3RhdHVzKSA9PiB7XG4gICAgICAgICAgc3BvdHNCdW1waW5nSW5zdGFuY2Uuc3dpdGNoZXIoc3RhdHVzKTtcbiAgICAgICAgICBiYXNpY1JlZmVsZWN0aW9uSW5zdGFuY2Uuc3dpdGNoZXIoc3RhdHVzKTtcbiAgICAgICAgfVxuICAgICAgICByZXMoc3dpdGNoZXIpO1xuICAgICAgfSlcbiAgICB9KVxuICB9KVxuICBzcG90QW5pbWF0aW9uLnRyaWdnZXIoKTtcblxuICByZXR1cm4gc3BsYXNoUHJvbWlzZTtcbn1cblxuIiwiZXhwb3J0IGNvbnN0IHBsYXllcnNEYXRhID0gW1xuICB7XG4gICAgaWQ6IDAsXG4gICAgbmFtZTogJz8/PycsXG4gICAgc2NvcmU6IDAsXG4gICAgd2lkdGg6IDAsXG4gICAgcG9zaXRpb246IHtcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwXG4gICAgfVxuICB9LFxuICB7XG4gICAgaWQ6IDEsXG4gICAgbmFtZTogJz8/PycsXG4gICAgc2NvcmU6IDAsXG4gICAgd2lkdGg6IDAsXG4gICAgcG9zaXRpb246IHtcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwXG4gICAgfVxuICB9XG5dO1xuXG5leHBvcnQgY29uc3QgYmFsbERhdGEgPSB7XG4gIHBvc2l0aW9uOiB7XG4gICAgeDogMCxcbiAgICB5OiAwXG4gIH0sXG4gIHNwZWVkOiB7XG4gICAgeDogMCxcbiAgICB5OiAwXG4gIH0sXG4gIHNpemU6IDAsXG4gIGNvbG9yOiBudWxsLFxuICBpc1N0dWNrOiB0cnVlXG59XG5cblxuXG5leHBvcnQgY29uc3QgcGxheWVyUmVmID0ge1xuICBuYW1lOiAnPz8/JyxcbiAgbnVtYmVyOiAwXG59OyIsIlxuLyoqXG4gKiBFeHBvc2UgYEJhY2tvZmZgLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gQmFja29mZjtcblxuLyoqXG4gKiBJbml0aWFsaXplIGJhY2tvZmYgdGltZXIgd2l0aCBgb3B0c2AuXG4gKlxuICogLSBgbWluYCBpbml0aWFsIHRpbWVvdXQgaW4gbWlsbGlzZWNvbmRzIFsxMDBdXG4gKiAtIGBtYXhgIG1heCB0aW1lb3V0IFsxMDAwMF1cbiAqIC0gYGppdHRlcmAgWzBdXG4gKiAtIGBmYWN0b3JgIFsyXVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIEJhY2tvZmYob3B0cykge1xuICBvcHRzID0gb3B0cyB8fCB7fTtcbiAgdGhpcy5tcyA9IG9wdHMubWluIHx8IDEwMDtcbiAgdGhpcy5tYXggPSBvcHRzLm1heCB8fCAxMDAwMDtcbiAgdGhpcy5mYWN0b3IgPSBvcHRzLmZhY3RvciB8fCAyO1xuICB0aGlzLmppdHRlciA9IG9wdHMuaml0dGVyID4gMCAmJiBvcHRzLmppdHRlciA8PSAxID8gb3B0cy5qaXR0ZXIgOiAwO1xuICB0aGlzLmF0dGVtcHRzID0gMDtcbn1cblxuLyoqXG4gKiBSZXR1cm4gdGhlIGJhY2tvZmYgZHVyYXRpb24uXG4gKlxuICogQHJldHVybiB7TnVtYmVyfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5CYWNrb2ZmLnByb3RvdHlwZS5kdXJhdGlvbiA9IGZ1bmN0aW9uKCl7XG4gIHZhciBtcyA9IHRoaXMubXMgKiBNYXRoLnBvdyh0aGlzLmZhY3RvciwgdGhpcy5hdHRlbXB0cysrKTtcbiAgaWYgKHRoaXMuaml0dGVyKSB7XG4gICAgdmFyIHJhbmQgPSAgTWF0aC5yYW5kb20oKTtcbiAgICB2YXIgZGV2aWF0aW9uID0gTWF0aC5mbG9vcihyYW5kICogdGhpcy5qaXR0ZXIgKiBtcyk7XG4gICAgbXMgPSAoTWF0aC5mbG9vcihyYW5kICogMTApICYgMSkgPT0gMCAgPyBtcyAtIGRldmlhdGlvbiA6IG1zICsgZGV2aWF0aW9uO1xuICB9XG4gIHJldHVybiBNYXRoLm1pbihtcywgdGhpcy5tYXgpIHwgMDtcbn07XG5cbi8qKlxuICogUmVzZXQgdGhlIG51bWJlciBvZiBhdHRlbXB0cy5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkJhY2tvZmYucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24oKXtcbiAgdGhpcy5hdHRlbXB0cyA9IDA7XG59O1xuXG4vKipcbiAqIFNldCB0aGUgbWluaW11bSBkdXJhdGlvblxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuQmFja29mZi5wcm90b3R5cGUuc2V0TWluID0gZnVuY3Rpb24obWluKXtcbiAgdGhpcy5tcyA9IG1pbjtcbn07XG5cbi8qKlxuICogU2V0IHRoZSBtYXhpbXVtIGR1cmF0aW9uXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5CYWNrb2ZmLnByb3RvdHlwZS5zZXRNYXggPSBmdW5jdGlvbihtYXgpe1xuICB0aGlzLm1heCA9IG1heDtcbn07XG5cbi8qKlxuICogU2V0IHRoZSBqaXR0ZXJcbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkJhY2tvZmYucHJvdG90eXBlLnNldEppdHRlciA9IGZ1bmN0aW9uKGppdHRlcil7XG4gIHRoaXMuaml0dGVyID0gaml0dGVyO1xufTtcblxuIiwiLypcbiAqIGJhc2U2NC1hcnJheWJ1ZmZlclxuICogaHR0cHM6Ly9naXRodWIuY29tL25pa2xhc3ZoL2Jhc2U2NC1hcnJheWJ1ZmZlclxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxMiBOaWtsYXMgdm9uIEhlcnR6ZW5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqL1xuKGZ1bmN0aW9uKGNoYXJzKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgZXhwb3J0cy5lbmNvZGUgPSBmdW5jdGlvbihhcnJheWJ1ZmZlcikge1xuICAgIHZhciBieXRlcyA9IG5ldyBVaW50OEFycmF5KGFycmF5YnVmZmVyKSxcbiAgICBpLCBsZW4gPSBieXRlcy5sZW5ndGgsIGJhc2U2NCA9IFwiXCI7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKz0zKSB7XG4gICAgICBiYXNlNjQgKz0gY2hhcnNbYnl0ZXNbaV0gPj4gMl07XG4gICAgICBiYXNlNjQgKz0gY2hhcnNbKChieXRlc1tpXSAmIDMpIDw8IDQpIHwgKGJ5dGVzW2kgKyAxXSA+PiA0KV07XG4gICAgICBiYXNlNjQgKz0gY2hhcnNbKChieXRlc1tpICsgMV0gJiAxNSkgPDwgMikgfCAoYnl0ZXNbaSArIDJdID4+IDYpXTtcbiAgICAgIGJhc2U2NCArPSBjaGFyc1tieXRlc1tpICsgMl0gJiA2M107XG4gICAgfVxuXG4gICAgaWYgKChsZW4gJSAzKSA9PT0gMikge1xuICAgICAgYmFzZTY0ID0gYmFzZTY0LnN1YnN0cmluZygwLCBiYXNlNjQubGVuZ3RoIC0gMSkgKyBcIj1cIjtcbiAgICB9IGVsc2UgaWYgKGxlbiAlIDMgPT09IDEpIHtcbiAgICAgIGJhc2U2NCA9IGJhc2U2NC5zdWJzdHJpbmcoMCwgYmFzZTY0Lmxlbmd0aCAtIDIpICsgXCI9PVwiO1xuICAgIH1cblxuICAgIHJldHVybiBiYXNlNjQ7XG4gIH07XG5cbiAgZXhwb3J0cy5kZWNvZGUgPSAgZnVuY3Rpb24oYmFzZTY0KSB7XG4gICAgdmFyIGJ1ZmZlckxlbmd0aCA9IGJhc2U2NC5sZW5ndGggKiAwLjc1LFxuICAgIGxlbiA9IGJhc2U2NC5sZW5ndGgsIGksIHAgPSAwLFxuICAgIGVuY29kZWQxLCBlbmNvZGVkMiwgZW5jb2RlZDMsIGVuY29kZWQ0O1xuXG4gICAgaWYgKGJhc2U2NFtiYXNlNjQubGVuZ3RoIC0gMV0gPT09IFwiPVwiKSB7XG4gICAgICBidWZmZXJMZW5ndGgtLTtcbiAgICAgIGlmIChiYXNlNjRbYmFzZTY0Lmxlbmd0aCAtIDJdID09PSBcIj1cIikge1xuICAgICAgICBidWZmZXJMZW5ndGgtLTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgYXJyYXlidWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIoYnVmZmVyTGVuZ3RoKSxcbiAgICBieXRlcyA9IG5ldyBVaW50OEFycmF5KGFycmF5YnVmZmVyKTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrPTQpIHtcbiAgICAgIGVuY29kZWQxID0gY2hhcnMuaW5kZXhPZihiYXNlNjRbaV0pO1xuICAgICAgZW5jb2RlZDIgPSBjaGFycy5pbmRleE9mKGJhc2U2NFtpKzFdKTtcbiAgICAgIGVuY29kZWQzID0gY2hhcnMuaW5kZXhPZihiYXNlNjRbaSsyXSk7XG4gICAgICBlbmNvZGVkNCA9IGNoYXJzLmluZGV4T2YoYmFzZTY0W2krM10pO1xuXG4gICAgICBieXRlc1twKytdID0gKGVuY29kZWQxIDw8IDIpIHwgKGVuY29kZWQyID4+IDQpO1xuICAgICAgYnl0ZXNbcCsrXSA9ICgoZW5jb2RlZDIgJiAxNSkgPDwgNCkgfCAoZW5jb2RlZDMgPj4gMik7XG4gICAgICBieXRlc1twKytdID0gKChlbmNvZGVkMyAmIDMpIDw8IDYpIHwgKGVuY29kZWQ0ICYgNjMpO1xuICAgIH1cblxuICAgIHJldHVybiBhcnJheWJ1ZmZlcjtcbiAgfTtcbn0pKFwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrL1wiKTtcbiIsIlxyXG4vKipcclxuICogRXhwb3NlIGBFbWl0dGVyYC5cclxuICovXHJcblxyXG5pZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICBtb2R1bGUuZXhwb3J0cyA9IEVtaXR0ZXI7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbml0aWFsaXplIGEgbmV3IGBFbWl0dGVyYC5cclxuICpcclxuICogQGFwaSBwdWJsaWNcclxuICovXHJcblxyXG5mdW5jdGlvbiBFbWl0dGVyKG9iaikge1xyXG4gIGlmIChvYmopIHJldHVybiBtaXhpbihvYmopO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIE1peGluIHRoZSBlbWl0dGVyIHByb3BlcnRpZXMuXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcclxuICogQHJldHVybiB7T2JqZWN0fVxyXG4gKiBAYXBpIHByaXZhdGVcclxuICovXHJcblxyXG5mdW5jdGlvbiBtaXhpbihvYmopIHtcclxuICBmb3IgKHZhciBrZXkgaW4gRW1pdHRlci5wcm90b3R5cGUpIHtcclxuICAgIG9ialtrZXldID0gRW1pdHRlci5wcm90b3R5cGVba2V5XTtcclxuICB9XHJcbiAgcmV0dXJuIG9iajtcclxufVxyXG5cclxuLyoqXHJcbiAqIExpc3RlbiBvbiB0aGUgZ2l2ZW4gYGV2ZW50YCB3aXRoIGBmbmAuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxyXG4gKiBAcmV0dXJuIHtFbWl0dGVyfVxyXG4gKiBAYXBpIHB1YmxpY1xyXG4gKi9cclxuXHJcbkVtaXR0ZXIucHJvdG90eXBlLm9uID1cclxuRW1pdHRlci5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKGV2ZW50LCBmbil7XHJcbiAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xyXG4gICh0aGlzLl9jYWxsYmFja3NbJyQnICsgZXZlbnRdID0gdGhpcy5fY2FsbGJhY2tzWyckJyArIGV2ZW50XSB8fCBbXSlcclxuICAgIC5wdXNoKGZuKTtcclxuICByZXR1cm4gdGhpcztcclxufTtcclxuXHJcbi8qKlxyXG4gKiBBZGRzIGFuIGBldmVudGAgbGlzdGVuZXIgdGhhdCB3aWxsIGJlIGludm9rZWQgYSBzaW5nbGVcclxuICogdGltZSB0aGVuIGF1dG9tYXRpY2FsbHkgcmVtb3ZlZC5cclxuICpcclxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXHJcbiAqIEByZXR1cm4ge0VtaXR0ZXJ9XHJcbiAqIEBhcGkgcHVibGljXHJcbiAqL1xyXG5cclxuRW1pdHRlci5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uKGV2ZW50LCBmbil7XHJcbiAgZnVuY3Rpb24gb24oKSB7XHJcbiAgICB0aGlzLm9mZihldmVudCwgb24pO1xyXG4gICAgZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuICB9XHJcblxyXG4gIG9uLmZuID0gZm47XHJcbiAgdGhpcy5vbihldmVudCwgb24pO1xyXG4gIHJldHVybiB0aGlzO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFJlbW92ZSB0aGUgZ2l2ZW4gY2FsbGJhY2sgZm9yIGBldmVudGAgb3IgYWxsXHJcbiAqIHJlZ2lzdGVyZWQgY2FsbGJhY2tzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcclxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cclxuICogQHJldHVybiB7RW1pdHRlcn1cclxuICogQGFwaSBwdWJsaWNcclxuICovXHJcblxyXG5FbWl0dGVyLnByb3RvdHlwZS5vZmYgPVxyXG5FbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9XHJcbkVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9XHJcbkVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbihldmVudCwgZm4pe1xyXG4gIHRoaXMuX2NhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrcyB8fCB7fTtcclxuXHJcbiAgLy8gYWxsXHJcbiAgaWYgKDAgPT0gYXJndW1lbnRzLmxlbmd0aCkge1xyXG4gICAgdGhpcy5fY2FsbGJhY2tzID0ge307XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8vIHNwZWNpZmljIGV2ZW50XHJcbiAgdmFyIGNhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrc1snJCcgKyBldmVudF07XHJcbiAgaWYgKCFjYWxsYmFja3MpIHJldHVybiB0aGlzO1xyXG5cclxuICAvLyByZW1vdmUgYWxsIGhhbmRsZXJzXHJcbiAgaWYgKDEgPT0gYXJndW1lbnRzLmxlbmd0aCkge1xyXG4gICAgZGVsZXRlIHRoaXMuX2NhbGxiYWNrc1snJCcgKyBldmVudF07XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8vIHJlbW92ZSBzcGVjaWZpYyBoYW5kbGVyXHJcbiAgdmFyIGNiO1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgY2FsbGJhY2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBjYiA9IGNhbGxiYWNrc1tpXTtcclxuICAgIGlmIChjYiA9PT0gZm4gfHwgY2IuZm4gPT09IGZuKSB7XHJcbiAgICAgIGNhbGxiYWNrcy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gUmVtb3ZlIGV2ZW50IHNwZWNpZmljIGFycmF5cyBmb3IgZXZlbnQgdHlwZXMgdGhhdCBub1xyXG4gIC8vIG9uZSBpcyBzdWJzY3JpYmVkIGZvciB0byBhdm9pZCBtZW1vcnkgbGVhay5cclxuICBpZiAoY2FsbGJhY2tzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgZGVsZXRlIHRoaXMuX2NhbGxiYWNrc1snJCcgKyBldmVudF07XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdGhpcztcclxufTtcclxuXHJcbi8qKlxyXG4gKiBFbWl0IGBldmVudGAgd2l0aCB0aGUgZ2l2ZW4gYXJncy5cclxuICpcclxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XHJcbiAqIEBwYXJhbSB7TWl4ZWR9IC4uLlxyXG4gKiBAcmV0dXJuIHtFbWl0dGVyfVxyXG4gKi9cclxuXHJcbkVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbihldmVudCl7XHJcbiAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xyXG5cclxuICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSlcclxuICAgICwgY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzWyckJyArIGV2ZW50XTtcclxuXHJcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xyXG4gIH1cclxuXHJcbiAgaWYgKGNhbGxiYWNrcykge1xyXG4gICAgY2FsbGJhY2tzID0gY2FsbGJhY2tzLnNsaWNlKDApO1xyXG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGNhbGxiYWNrcy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xyXG4gICAgICBjYWxsYmFja3NbaV0uYXBwbHkodGhpcywgYXJncyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdGhpcztcclxufTtcclxuXHJcbi8qKlxyXG4gKiBSZXR1cm4gYXJyYXkgb2YgY2FsbGJhY2tzIGZvciBgZXZlbnRgLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcclxuICogQHJldHVybiB7QXJyYXl9XHJcbiAqIEBhcGkgcHVibGljXHJcbiAqL1xyXG5cclxuRW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJzID0gZnVuY3Rpb24oZXZlbnQpe1xyXG4gIHRoaXMuX2NhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrcyB8fCB7fTtcclxuICByZXR1cm4gdGhpcy5fY2FsbGJhY2tzWyckJyArIGV2ZW50XSB8fCBbXTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBDaGVjayBpZiB0aGlzIGVtaXR0ZXIgaGFzIGBldmVudGAgaGFuZGxlcnMuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxyXG4gKiBAcmV0dXJuIHtCb29sZWFufVxyXG4gKiBAYXBpIHB1YmxpY1xyXG4gKi9cclxuXHJcbkVtaXR0ZXIucHJvdG90eXBlLmhhc0xpc3RlbmVycyA9IGZ1bmN0aW9uKGV2ZW50KXtcclxuICByZXR1cm4gISEgdGhpcy5saXN0ZW5lcnMoZXZlbnQpLmxlbmd0aDtcclxufTtcclxuIiwiLyoqXG4gKiBIZWxwZXJzLlxuICovXG5cbnZhciBzID0gMTAwMDtcbnZhciBtID0gcyAqIDYwO1xudmFyIGggPSBtICogNjA7XG52YXIgZCA9IGggKiAyNDtcbnZhciB3ID0gZCAqIDc7XG52YXIgeSA9IGQgKiAzNjUuMjU7XG5cbi8qKlxuICogUGFyc2Ugb3IgZm9ybWF0IHRoZSBnaXZlbiBgdmFsYC5cbiAqXG4gKiBPcHRpb25zOlxuICpcbiAqICAtIGBsb25nYCB2ZXJib3NlIGZvcm1hdHRpbmcgW2ZhbHNlXVxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfE51bWJlcn0gdmFsXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBAdGhyb3dzIHtFcnJvcn0gdGhyb3cgYW4gZXJyb3IgaWYgdmFsIGlzIG5vdCBhIG5vbi1lbXB0eSBzdHJpbmcgb3IgYSBudW1iZXJcbiAqIEByZXR1cm4ge1N0cmluZ3xOdW1iZXJ9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odmFsLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWw7XG4gIGlmICh0eXBlID09PSAnc3RyaW5nJyAmJiB2YWwubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiBwYXJzZSh2YWwpO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdudW1iZXInICYmIGlzRmluaXRlKHZhbCkpIHtcbiAgICByZXR1cm4gb3B0aW9ucy5sb25nID8gZm10TG9uZyh2YWwpIDogZm10U2hvcnQodmFsKTtcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgJ3ZhbCBpcyBub3QgYSBub24tZW1wdHkgc3RyaW5nIG9yIGEgdmFsaWQgbnVtYmVyLiB2YWw9JyArXG4gICAgICBKU09OLnN0cmluZ2lmeSh2YWwpXG4gICk7XG59O1xuXG4vKipcbiAqIFBhcnNlIHRoZSBnaXZlbiBgc3RyYCBhbmQgcmV0dXJuIG1pbGxpc2Vjb25kcy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBwYXJzZShzdHIpIHtcbiAgc3RyID0gU3RyaW5nKHN0cik7XG4gIGlmIChzdHIubGVuZ3RoID4gMTAwKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBtYXRjaCA9IC9eKC0/KD86XFxkKyk/XFwuP1xcZCspICoobWlsbGlzZWNvbmRzP3xtc2Vjcz98bXN8c2Vjb25kcz98c2Vjcz98c3xtaW51dGVzP3xtaW5zP3xtfGhvdXJzP3xocnM/fGh8ZGF5cz98ZHx3ZWVrcz98d3x5ZWFycz98eXJzP3x5KT8kL2kuZXhlYyhcbiAgICBzdHJcbiAgKTtcbiAgaWYgKCFtYXRjaCkge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgbiA9IHBhcnNlRmxvYXQobWF0Y2hbMV0pO1xuICB2YXIgdHlwZSA9IChtYXRjaFsyXSB8fCAnbXMnKS50b0xvd2VyQ2FzZSgpO1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlICd5ZWFycyc6XG4gICAgY2FzZSAneWVhcic6XG4gICAgY2FzZSAneXJzJzpcbiAgICBjYXNlICd5cic6XG4gICAgY2FzZSAneSc6XG4gICAgICByZXR1cm4gbiAqIHk7XG4gICAgY2FzZSAnd2Vla3MnOlxuICAgIGNhc2UgJ3dlZWsnOlxuICAgIGNhc2UgJ3cnOlxuICAgICAgcmV0dXJuIG4gKiB3O1xuICAgIGNhc2UgJ2RheXMnOlxuICAgIGNhc2UgJ2RheSc6XG4gICAgY2FzZSAnZCc6XG4gICAgICByZXR1cm4gbiAqIGQ7XG4gICAgY2FzZSAnaG91cnMnOlxuICAgIGNhc2UgJ2hvdXInOlxuICAgIGNhc2UgJ2hycyc6XG4gICAgY2FzZSAnaHInOlxuICAgIGNhc2UgJ2gnOlxuICAgICAgcmV0dXJuIG4gKiBoO1xuICAgIGNhc2UgJ21pbnV0ZXMnOlxuICAgIGNhc2UgJ21pbnV0ZSc6XG4gICAgY2FzZSAnbWlucyc6XG4gICAgY2FzZSAnbWluJzpcbiAgICBjYXNlICdtJzpcbiAgICAgIHJldHVybiBuICogbTtcbiAgICBjYXNlICdzZWNvbmRzJzpcbiAgICBjYXNlICdzZWNvbmQnOlxuICAgIGNhc2UgJ3NlY3MnOlxuICAgIGNhc2UgJ3NlYyc6XG4gICAgY2FzZSAncyc6XG4gICAgICByZXR1cm4gbiAqIHM7XG4gICAgY2FzZSAnbWlsbGlzZWNvbmRzJzpcbiAgICBjYXNlICdtaWxsaXNlY29uZCc6XG4gICAgY2FzZSAnbXNlY3MnOlxuICAgIGNhc2UgJ21zZWMnOlxuICAgIGNhc2UgJ21zJzpcbiAgICAgIHJldHVybiBuO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG59XG5cbi8qKlxuICogU2hvcnQgZm9ybWF0IGZvciBgbXNgLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBtc1xuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gZm10U2hvcnQobXMpIHtcbiAgdmFyIG1zQWJzID0gTWF0aC5hYnMobXMpO1xuICBpZiAobXNBYnMgPj0gZCkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gZCkgKyAnZCc7XG4gIH1cbiAgaWYgKG1zQWJzID49IGgpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIGgpICsgJ2gnO1xuICB9XG4gIGlmIChtc0FicyA+PSBtKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBtKSArICdtJztcbiAgfVxuICBpZiAobXNBYnMgPj0gcykge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gcykgKyAncyc7XG4gIH1cbiAgcmV0dXJuIG1zICsgJ21zJztcbn1cblxuLyoqXG4gKiBMb25nIGZvcm1hdCBmb3IgYG1zYC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gbXNcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGZtdExvbmcobXMpIHtcbiAgdmFyIG1zQWJzID0gTWF0aC5hYnMobXMpO1xuICBpZiAobXNBYnMgPj0gZCkge1xuICAgIHJldHVybiBwbHVyYWwobXMsIG1zQWJzLCBkLCAnZGF5Jyk7XG4gIH1cbiAgaWYgKG1zQWJzID49IGgpIHtcbiAgICByZXR1cm4gcGx1cmFsKG1zLCBtc0FicywgaCwgJ2hvdXInKTtcbiAgfVxuICBpZiAobXNBYnMgPj0gbSkge1xuICAgIHJldHVybiBwbHVyYWwobXMsIG1zQWJzLCBtLCAnbWludXRlJyk7XG4gIH1cbiAgaWYgKG1zQWJzID49IHMpIHtcbiAgICByZXR1cm4gcGx1cmFsKG1zLCBtc0FicywgcywgJ3NlY29uZCcpO1xuICB9XG4gIHJldHVybiBtcyArICcgbXMnO1xufVxuXG4vKipcbiAqIFBsdXJhbGl6YXRpb24gaGVscGVyLlxuICovXG5cbmZ1bmN0aW9uIHBsdXJhbChtcywgbXNBYnMsIG4sIG5hbWUpIHtcbiAgdmFyIGlzUGx1cmFsID0gbXNBYnMgPj0gbiAqIDEuNTtcbiAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBuKSArICcgJyArIG5hbWUgKyAoaXNQbHVyYWwgPyAncycgOiAnJyk7XG59XG4iLCIvKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuLyoqXG4gKiBUaGlzIGlzIHRoZSB3ZWIgYnJvd3NlciBpbXBsZW1lbnRhdGlvbiBvZiBgZGVidWcoKWAuXG4gKi9cblxuZXhwb3J0cy5mb3JtYXRBcmdzID0gZm9ybWF0QXJncztcbmV4cG9ydHMuc2F2ZSA9IHNhdmU7XG5leHBvcnRzLmxvYWQgPSBsb2FkO1xuZXhwb3J0cy51c2VDb2xvcnMgPSB1c2VDb2xvcnM7XG5leHBvcnRzLnN0b3JhZ2UgPSBsb2NhbHN0b3JhZ2UoKTtcbmV4cG9ydHMuZGVzdHJveSA9ICgoKSA9PiB7XG5cdGxldCB3YXJuZWQgPSBmYWxzZTtcblxuXHRyZXR1cm4gKCkgPT4ge1xuXHRcdGlmICghd2FybmVkKSB7XG5cdFx0XHR3YXJuZWQgPSB0cnVlO1xuXHRcdFx0Y29uc29sZS53YXJuKCdJbnN0YW5jZSBtZXRob2QgYGRlYnVnLmRlc3Ryb3koKWAgaXMgZGVwcmVjYXRlZCBhbmQgbm8gbG9uZ2VyIGRvZXMgYW55dGhpbmcuIEl0IHdpbGwgYmUgcmVtb3ZlZCBpbiB0aGUgbmV4dCBtYWpvciB2ZXJzaW9uIG9mIGBkZWJ1Z2AuJyk7XG5cdFx0fVxuXHR9O1xufSkoKTtcblxuLyoqXG4gKiBDb2xvcnMuXG4gKi9cblxuZXhwb3J0cy5jb2xvcnMgPSBbXG5cdCcjMDAwMENDJyxcblx0JyMwMDAwRkYnLFxuXHQnIzAwMzNDQycsXG5cdCcjMDAzM0ZGJyxcblx0JyMwMDY2Q0MnLFxuXHQnIzAwNjZGRicsXG5cdCcjMDA5OUNDJyxcblx0JyMwMDk5RkYnLFxuXHQnIzAwQ0MwMCcsXG5cdCcjMDBDQzMzJyxcblx0JyMwMENDNjYnLFxuXHQnIzAwQ0M5OScsXG5cdCcjMDBDQ0NDJyxcblx0JyMwMENDRkYnLFxuXHQnIzMzMDBDQycsXG5cdCcjMzMwMEZGJyxcblx0JyMzMzMzQ0MnLFxuXHQnIzMzMzNGRicsXG5cdCcjMzM2NkNDJyxcblx0JyMzMzY2RkYnLFxuXHQnIzMzOTlDQycsXG5cdCcjMzM5OUZGJyxcblx0JyMzM0NDMDAnLFxuXHQnIzMzQ0MzMycsXG5cdCcjMzNDQzY2Jyxcblx0JyMzM0NDOTknLFxuXHQnIzMzQ0NDQycsXG5cdCcjMzNDQ0ZGJyxcblx0JyM2NjAwQ0MnLFxuXHQnIzY2MDBGRicsXG5cdCcjNjYzM0NDJyxcblx0JyM2NjMzRkYnLFxuXHQnIzY2Q0MwMCcsXG5cdCcjNjZDQzMzJyxcblx0JyM5OTAwQ0MnLFxuXHQnIzk5MDBGRicsXG5cdCcjOTkzM0NDJyxcblx0JyM5OTMzRkYnLFxuXHQnIzk5Q0MwMCcsXG5cdCcjOTlDQzMzJyxcblx0JyNDQzAwMDAnLFxuXHQnI0NDMDAzMycsXG5cdCcjQ0MwMDY2Jyxcblx0JyNDQzAwOTknLFxuXHQnI0NDMDBDQycsXG5cdCcjQ0MwMEZGJyxcblx0JyNDQzMzMDAnLFxuXHQnI0NDMzMzMycsXG5cdCcjQ0MzMzY2Jyxcblx0JyNDQzMzOTknLFxuXHQnI0NDMzNDQycsXG5cdCcjQ0MzM0ZGJyxcblx0JyNDQzY2MDAnLFxuXHQnI0NDNjYzMycsXG5cdCcjQ0M5OTAwJyxcblx0JyNDQzk5MzMnLFxuXHQnI0NDQ0MwMCcsXG5cdCcjQ0NDQzMzJyxcblx0JyNGRjAwMDAnLFxuXHQnI0ZGMDAzMycsXG5cdCcjRkYwMDY2Jyxcblx0JyNGRjAwOTknLFxuXHQnI0ZGMDBDQycsXG5cdCcjRkYwMEZGJyxcblx0JyNGRjMzMDAnLFxuXHQnI0ZGMzMzMycsXG5cdCcjRkYzMzY2Jyxcblx0JyNGRjMzOTknLFxuXHQnI0ZGMzNDQycsXG5cdCcjRkYzM0ZGJyxcblx0JyNGRjY2MDAnLFxuXHQnI0ZGNjYzMycsXG5cdCcjRkY5OTAwJyxcblx0JyNGRjk5MzMnLFxuXHQnI0ZGQ0MwMCcsXG5cdCcjRkZDQzMzJ1xuXTtcblxuLyoqXG4gKiBDdXJyZW50bHkgb25seSBXZWJLaXQtYmFzZWQgV2ViIEluc3BlY3RvcnMsIEZpcmVmb3ggPj0gdjMxLFxuICogYW5kIHRoZSBGaXJlYnVnIGV4dGVuc2lvbiAoYW55IEZpcmVmb3ggdmVyc2lvbikgYXJlIGtub3duXG4gKiB0byBzdXBwb3J0IFwiJWNcIiBDU1MgY3VzdG9taXphdGlvbnMuXG4gKlxuICogVE9ETzogYWRkIGEgYGxvY2FsU3RvcmFnZWAgdmFyaWFibGUgdG8gZXhwbGljaXRseSBlbmFibGUvZGlzYWJsZSBjb2xvcnNcbiAqL1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29tcGxleGl0eVxuZnVuY3Rpb24gdXNlQ29sb3JzKCkge1xuXHQvLyBOQjogSW4gYW4gRWxlY3Ryb24gcHJlbG9hZCBzY3JpcHQsIGRvY3VtZW50IHdpbGwgYmUgZGVmaW5lZCBidXQgbm90IGZ1bGx5XG5cdC8vIGluaXRpYWxpemVkLiBTaW5jZSB3ZSBrbm93IHdlJ3JlIGluIENocm9tZSwgd2UnbGwganVzdCBkZXRlY3QgdGhpcyBjYXNlXG5cdC8vIGV4cGxpY2l0bHlcblx0aWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5wcm9jZXNzICYmICh3aW5kb3cucHJvY2Vzcy50eXBlID09PSAncmVuZGVyZXInIHx8IHdpbmRvdy5wcm9jZXNzLl9fbndqcykpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdC8vIEludGVybmV0IEV4cGxvcmVyIGFuZCBFZGdlIGRvIG5vdCBzdXBwb3J0IGNvbG9ycy5cblx0aWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci51c2VyQWdlbnQgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLm1hdGNoKC8oZWRnZXx0cmlkZW50KVxcLyhcXGQrKS8pKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0Ly8gSXMgd2Via2l0PyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xNjQ1OTYwNi8zNzY3NzNcblx0Ly8gZG9jdW1lbnQgaXMgdW5kZWZpbmVkIGluIHJlYWN0LW5hdGl2ZTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0LW5hdGl2ZS9wdWxsLzE2MzJcblx0cmV0dXJuICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLldlYmtpdEFwcGVhcmFuY2UpIHx8XG5cdFx0Ly8gSXMgZmlyZWJ1Zz8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMzk4MTIwLzM3Njc3M1xuXHRcdCh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuY29uc29sZSAmJiAod2luZG93LmNvbnNvbGUuZmlyZWJ1ZyB8fCAod2luZG93LmNvbnNvbGUuZXhjZXB0aW9uICYmIHdpbmRvdy5jb25zb2xlLnRhYmxlKSkpIHx8XG5cdFx0Ly8gSXMgZmlyZWZveCA+PSB2MzE/XG5cdFx0Ly8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9Ub29scy9XZWJfQ29uc29sZSNTdHlsaW5nX21lc3NhZ2VzXG5cdFx0KHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci51c2VyQWdlbnQgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLm1hdGNoKC9maXJlZm94XFwvKFxcZCspLykgJiYgcGFyc2VJbnQoUmVnRXhwLiQxLCAxMCkgPj0gMzEpIHx8XG5cdFx0Ly8gRG91YmxlIGNoZWNrIHdlYmtpdCBpbiB1c2VyQWdlbnQganVzdCBpbiBjYXNlIHdlIGFyZSBpbiBhIHdvcmtlclxuXHRcdCh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IudXNlckFnZW50ICYmIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5tYXRjaCgvYXBwbGV3ZWJraXRcXC8oXFxkKykvKSk7XG59XG5cbi8qKlxuICogQ29sb3JpemUgbG9nIGFyZ3VtZW50cyBpZiBlbmFibGVkLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gZm9ybWF0QXJncyhhcmdzKSB7XG5cdGFyZ3NbMF0gPSAodGhpcy51c2VDb2xvcnMgPyAnJWMnIDogJycpICtcblx0XHR0aGlzLm5hbWVzcGFjZSArXG5cdFx0KHRoaXMudXNlQ29sb3JzID8gJyAlYycgOiAnICcpICtcblx0XHRhcmdzWzBdICtcblx0XHQodGhpcy51c2VDb2xvcnMgPyAnJWMgJyA6ICcgJykgK1xuXHRcdCcrJyArIG1vZHVsZS5leHBvcnRzLmh1bWFuaXplKHRoaXMuZGlmZik7XG5cblx0aWYgKCF0aGlzLnVzZUNvbG9ycykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGMgPSAnY29sb3I6ICcgKyB0aGlzLmNvbG9yO1xuXHRhcmdzLnNwbGljZSgxLCAwLCBjLCAnY29sb3I6IGluaGVyaXQnKTtcblxuXHQvLyBUaGUgZmluYWwgXCIlY1wiIGlzIHNvbWV3aGF0IHRyaWNreSwgYmVjYXVzZSB0aGVyZSBjb3VsZCBiZSBvdGhlclxuXHQvLyBhcmd1bWVudHMgcGFzc2VkIGVpdGhlciBiZWZvcmUgb3IgYWZ0ZXIgdGhlICVjLCBzbyB3ZSBuZWVkIHRvXG5cdC8vIGZpZ3VyZSBvdXQgdGhlIGNvcnJlY3QgaW5kZXggdG8gaW5zZXJ0IHRoZSBDU1MgaW50b1xuXHRsZXQgaW5kZXggPSAwO1xuXHRsZXQgbGFzdEMgPSAwO1xuXHRhcmdzWzBdLnJlcGxhY2UoLyVbYS16QS1aJV0vZywgbWF0Y2ggPT4ge1xuXHRcdGlmIChtYXRjaCA9PT0gJyUlJykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpbmRleCsrO1xuXHRcdGlmIChtYXRjaCA9PT0gJyVjJykge1xuXHRcdFx0Ly8gV2Ugb25seSBhcmUgaW50ZXJlc3RlZCBpbiB0aGUgKmxhc3QqICVjXG5cdFx0XHQvLyAodGhlIHVzZXIgbWF5IGhhdmUgcHJvdmlkZWQgdGhlaXIgb3duKVxuXHRcdFx0bGFzdEMgPSBpbmRleDtcblx0XHR9XG5cdH0pO1xuXG5cdGFyZ3Muc3BsaWNlKGxhc3RDLCAwLCBjKTtcbn1cblxuLyoqXG4gKiBJbnZva2VzIGBjb25zb2xlLmRlYnVnKClgIHdoZW4gYXZhaWxhYmxlLlxuICogTm8tb3Agd2hlbiBgY29uc29sZS5kZWJ1Z2AgaXMgbm90IGEgXCJmdW5jdGlvblwiLlxuICogSWYgYGNvbnNvbGUuZGVidWdgIGlzIG5vdCBhdmFpbGFibGUsIGZhbGxzIGJhY2tcbiAqIHRvIGBjb25zb2xlLmxvZ2AuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuZXhwb3J0cy5sb2cgPSBjb25zb2xlLmRlYnVnIHx8IGNvbnNvbGUubG9nIHx8ICgoKSA9PiB7fSk7XG5cbi8qKlxuICogU2F2ZSBgbmFtZXNwYWNlc2AuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBzYXZlKG5hbWVzcGFjZXMpIHtcblx0dHJ5IHtcblx0XHRpZiAobmFtZXNwYWNlcykge1xuXHRcdFx0ZXhwb3J0cy5zdG9yYWdlLnNldEl0ZW0oJ2RlYnVnJywgbmFtZXNwYWNlcyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGV4cG9ydHMuc3RvcmFnZS5yZW1vdmVJdGVtKCdkZWJ1ZycpO1xuXHRcdH1cblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHQvLyBTd2FsbG93XG5cdFx0Ly8gWFhYIChAUWl4LSkgc2hvdWxkIHdlIGJlIGxvZ2dpbmcgdGhlc2U/XG5cdH1cbn1cblxuLyoqXG4gKiBMb2FkIGBuYW1lc3BhY2VzYC5cbiAqXG4gKiBAcmV0dXJuIHtTdHJpbmd9IHJldHVybnMgdGhlIHByZXZpb3VzbHkgcGVyc2lzdGVkIGRlYnVnIG1vZGVzXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gbG9hZCgpIHtcblx0bGV0IHI7XG5cdHRyeSB7XG5cdFx0ciA9IGV4cG9ydHMuc3RvcmFnZS5nZXRJdGVtKCdkZWJ1ZycpO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdC8vIFN3YWxsb3dcblx0XHQvLyBYWFggKEBRaXgtKSBzaG91bGQgd2UgYmUgbG9nZ2luZyB0aGVzZT9cblx0fVxuXG5cdC8vIElmIGRlYnVnIGlzbid0IHNldCBpbiBMUywgYW5kIHdlJ3JlIGluIEVsZWN0cm9uLCB0cnkgdG8gbG9hZCAkREVCVUdcblx0aWYgKCFyICYmIHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiAnZW52JyBpbiBwcm9jZXNzKSB7XG5cdFx0ciA9IHByb2Nlc3MuZW52LkRFQlVHO1xuXHR9XG5cblx0cmV0dXJuIHI7XG59XG5cbi8qKlxuICogTG9jYWxzdG9yYWdlIGF0dGVtcHRzIHRvIHJldHVybiB0aGUgbG9jYWxzdG9yYWdlLlxuICpcbiAqIFRoaXMgaXMgbmVjZXNzYXJ5IGJlY2F1c2Ugc2FmYXJpIHRocm93c1xuICogd2hlbiBhIHVzZXIgZGlzYWJsZXMgY29va2llcy9sb2NhbHN0b3JhZ2VcbiAqIGFuZCB5b3UgYXR0ZW1wdCB0byBhY2Nlc3MgaXQuXG4gKlxuICogQHJldHVybiB7TG9jYWxTdG9yYWdlfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gbG9jYWxzdG9yYWdlKCkge1xuXHR0cnkge1xuXHRcdC8vIFRWTUxLaXQgKEFwcGxlIFRWIEpTIFJ1bnRpbWUpIGRvZXMgbm90IGhhdmUgYSB3aW5kb3cgb2JqZWN0LCBqdXN0IGxvY2FsU3RvcmFnZSBpbiB0aGUgZ2xvYmFsIGNvbnRleHRcblx0XHQvLyBUaGUgQnJvd3NlciBhbHNvIGhhcyBsb2NhbFN0b3JhZ2UgaW4gdGhlIGdsb2JhbCBjb250ZXh0LlxuXHRcdHJldHVybiBsb2NhbFN0b3JhZ2U7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Ly8gU3dhbGxvd1xuXHRcdC8vIFhYWCAoQFFpeC0pIHNob3VsZCB3ZSBiZSBsb2dnaW5nIHRoZXNlP1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9jb21tb24nKShleHBvcnRzKTtcblxuY29uc3Qge2Zvcm1hdHRlcnN9ID0gbW9kdWxlLmV4cG9ydHM7XG5cbi8qKlxuICogTWFwICVqIHRvIGBKU09OLnN0cmluZ2lmeSgpYCwgc2luY2Ugbm8gV2ViIEluc3BlY3RvcnMgZG8gdGhhdCBieSBkZWZhdWx0LlxuICovXG5cbmZvcm1hdHRlcnMuaiA9IGZ1bmN0aW9uICh2KSB7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIEpTT04uc3RyaW5naWZ5KHYpO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdHJldHVybiAnW1VuZXhwZWN0ZWRKU09OUGFyc2VFcnJvcl06ICcgKyBlcnJvci5tZXNzYWdlO1xuXHR9XG59O1xuIiwiXG4vKipcbiAqIFRoaXMgaXMgdGhlIGNvbW1vbiBsb2dpYyBmb3IgYm90aCB0aGUgTm9kZS5qcyBhbmQgd2ViIGJyb3dzZXJcbiAqIGltcGxlbWVudGF0aW9ucyBvZiBgZGVidWcoKWAuXG4gKi9cblxuZnVuY3Rpb24gc2V0dXAoZW52KSB7XG5cdGNyZWF0ZURlYnVnLmRlYnVnID0gY3JlYXRlRGVidWc7XG5cdGNyZWF0ZURlYnVnLmRlZmF1bHQgPSBjcmVhdGVEZWJ1Zztcblx0Y3JlYXRlRGVidWcuY29lcmNlID0gY29lcmNlO1xuXHRjcmVhdGVEZWJ1Zy5kaXNhYmxlID0gZGlzYWJsZTtcblx0Y3JlYXRlRGVidWcuZW5hYmxlID0gZW5hYmxlO1xuXHRjcmVhdGVEZWJ1Zy5lbmFibGVkID0gZW5hYmxlZDtcblx0Y3JlYXRlRGVidWcuaHVtYW5pemUgPSByZXF1aXJlKCdtcycpO1xuXHRjcmVhdGVEZWJ1Zy5kZXN0cm95ID0gZGVzdHJveTtcblxuXHRPYmplY3Qua2V5cyhlbnYpLmZvckVhY2goa2V5ID0+IHtcblx0XHRjcmVhdGVEZWJ1Z1trZXldID0gZW52W2tleV07XG5cdH0pO1xuXG5cdC8qKlxuXHQqIFRoZSBjdXJyZW50bHkgYWN0aXZlIGRlYnVnIG1vZGUgbmFtZXMsIGFuZCBuYW1lcyB0byBza2lwLlxuXHQqL1xuXG5cdGNyZWF0ZURlYnVnLm5hbWVzID0gW107XG5cdGNyZWF0ZURlYnVnLnNraXBzID0gW107XG5cblx0LyoqXG5cdCogTWFwIG9mIHNwZWNpYWwgXCIlblwiIGhhbmRsaW5nIGZ1bmN0aW9ucywgZm9yIHRoZSBkZWJ1ZyBcImZvcm1hdFwiIGFyZ3VtZW50LlxuXHQqXG5cdCogVmFsaWQga2V5IG5hbWVzIGFyZSBhIHNpbmdsZSwgbG93ZXIgb3IgdXBwZXItY2FzZSBsZXR0ZXIsIGkuZS4gXCJuXCIgYW5kIFwiTlwiLlxuXHQqL1xuXHRjcmVhdGVEZWJ1Zy5mb3JtYXR0ZXJzID0ge307XG5cblx0LyoqXG5cdCogU2VsZWN0cyBhIGNvbG9yIGZvciBhIGRlYnVnIG5hbWVzcGFjZVxuXHQqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2UgVGhlIG5hbWVzcGFjZSBzdHJpbmcgZm9yIHRoZSBmb3IgdGhlIGRlYnVnIGluc3RhbmNlIHRvIGJlIGNvbG9yZWRcblx0KiBAcmV0dXJuIHtOdW1iZXJ8U3RyaW5nfSBBbiBBTlNJIGNvbG9yIGNvZGUgZm9yIHRoZSBnaXZlbiBuYW1lc3BhY2Vcblx0KiBAYXBpIHByaXZhdGVcblx0Ki9cblx0ZnVuY3Rpb24gc2VsZWN0Q29sb3IobmFtZXNwYWNlKSB7XG5cdFx0bGV0IGhhc2ggPSAwO1xuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBuYW1lc3BhY2UubGVuZ3RoOyBpKyspIHtcblx0XHRcdGhhc2ggPSAoKGhhc2ggPDwgNSkgLSBoYXNoKSArIG5hbWVzcGFjZS5jaGFyQ29kZUF0KGkpO1xuXHRcdFx0aGFzaCB8PSAwOyAvLyBDb252ZXJ0IHRvIDMyYml0IGludGVnZXJcblx0XHR9XG5cblx0XHRyZXR1cm4gY3JlYXRlRGVidWcuY29sb3JzW01hdGguYWJzKGhhc2gpICUgY3JlYXRlRGVidWcuY29sb3JzLmxlbmd0aF07XG5cdH1cblx0Y3JlYXRlRGVidWcuc2VsZWN0Q29sb3IgPSBzZWxlY3RDb2xvcjtcblxuXHQvKipcblx0KiBDcmVhdGUgYSBkZWJ1Z2dlciB3aXRoIHRoZSBnaXZlbiBgbmFtZXNwYWNlYC5cblx0KlxuXHQqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2Vcblx0KiBAcmV0dXJuIHtGdW5jdGlvbn1cblx0KiBAYXBpIHB1YmxpY1xuXHQqL1xuXHRmdW5jdGlvbiBjcmVhdGVEZWJ1ZyhuYW1lc3BhY2UpIHtcblx0XHRsZXQgcHJldlRpbWU7XG5cdFx0bGV0IGVuYWJsZU92ZXJyaWRlID0gbnVsbDtcblxuXHRcdGZ1bmN0aW9uIGRlYnVnKC4uLmFyZ3MpIHtcblx0XHRcdC8vIERpc2FibGVkP1xuXHRcdFx0aWYgKCFkZWJ1Zy5lbmFibGVkKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3Qgc2VsZiA9IGRlYnVnO1xuXG5cdFx0XHQvLyBTZXQgYGRpZmZgIHRpbWVzdGFtcFxuXHRcdFx0Y29uc3QgY3VyciA9IE51bWJlcihuZXcgRGF0ZSgpKTtcblx0XHRcdGNvbnN0IG1zID0gY3VyciAtIChwcmV2VGltZSB8fCBjdXJyKTtcblx0XHRcdHNlbGYuZGlmZiA9IG1zO1xuXHRcdFx0c2VsZi5wcmV2ID0gcHJldlRpbWU7XG5cdFx0XHRzZWxmLmN1cnIgPSBjdXJyO1xuXHRcdFx0cHJldlRpbWUgPSBjdXJyO1xuXG5cdFx0XHRhcmdzWzBdID0gY3JlYXRlRGVidWcuY29lcmNlKGFyZ3NbMF0pO1xuXG5cdFx0XHRpZiAodHlwZW9mIGFyZ3NbMF0gIT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdC8vIEFueXRoaW5nIGVsc2UgbGV0J3MgaW5zcGVjdCB3aXRoICVPXG5cdFx0XHRcdGFyZ3MudW5zaGlmdCgnJU8nKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gQXBwbHkgYW55IGBmb3JtYXR0ZXJzYCB0cmFuc2Zvcm1hdGlvbnNcblx0XHRcdGxldCBpbmRleCA9IDA7XG5cdFx0XHRhcmdzWzBdID0gYXJnc1swXS5yZXBsYWNlKC8lKFthLXpBLVolXSkvZywgKG1hdGNoLCBmb3JtYXQpID0+IHtcblx0XHRcdFx0Ly8gSWYgd2UgZW5jb3VudGVyIGFuIGVzY2FwZWQgJSB0aGVuIGRvbid0IGluY3JlYXNlIHRoZSBhcnJheSBpbmRleFxuXHRcdFx0XHRpZiAobWF0Y2ggPT09ICclJScpIHtcblx0XHRcdFx0XHRyZXR1cm4gJyUnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGluZGV4Kys7XG5cdFx0XHRcdGNvbnN0IGZvcm1hdHRlciA9IGNyZWF0ZURlYnVnLmZvcm1hdHRlcnNbZm9ybWF0XTtcblx0XHRcdFx0aWYgKHR5cGVvZiBmb3JtYXR0ZXIgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0XHRjb25zdCB2YWwgPSBhcmdzW2luZGV4XTtcblx0XHRcdFx0XHRtYXRjaCA9IGZvcm1hdHRlci5jYWxsKHNlbGYsIHZhbCk7XG5cblx0XHRcdFx0XHQvLyBOb3cgd2UgbmVlZCB0byByZW1vdmUgYGFyZ3NbaW5kZXhdYCBzaW5jZSBpdCdzIGlubGluZWQgaW4gdGhlIGBmb3JtYXRgXG5cdFx0XHRcdFx0YXJncy5zcGxpY2UoaW5kZXgsIDEpO1xuXHRcdFx0XHRcdGluZGV4LS07XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIG1hdGNoO1xuXHRcdFx0fSk7XG5cblx0XHRcdC8vIEFwcGx5IGVudi1zcGVjaWZpYyBmb3JtYXR0aW5nIChjb2xvcnMsIGV0Yy4pXG5cdFx0XHRjcmVhdGVEZWJ1Zy5mb3JtYXRBcmdzLmNhbGwoc2VsZiwgYXJncyk7XG5cblx0XHRcdGNvbnN0IGxvZ0ZuID0gc2VsZi5sb2cgfHwgY3JlYXRlRGVidWcubG9nO1xuXHRcdFx0bG9nRm4uYXBwbHkoc2VsZiwgYXJncyk7XG5cdFx0fVxuXG5cdFx0ZGVidWcubmFtZXNwYWNlID0gbmFtZXNwYWNlO1xuXHRcdGRlYnVnLnVzZUNvbG9ycyA9IGNyZWF0ZURlYnVnLnVzZUNvbG9ycygpO1xuXHRcdGRlYnVnLmNvbG9yID0gY3JlYXRlRGVidWcuc2VsZWN0Q29sb3IobmFtZXNwYWNlKTtcblx0XHRkZWJ1Zy5leHRlbmQgPSBleHRlbmQ7XG5cdFx0ZGVidWcuZGVzdHJveSA9IGNyZWF0ZURlYnVnLmRlc3Ryb3k7IC8vIFhYWCBUZW1wb3JhcnkuIFdpbGwgYmUgcmVtb3ZlZCBpbiB0aGUgbmV4dCBtYWpvciByZWxlYXNlLlxuXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGRlYnVnLCAnZW5hYmxlZCcsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuXHRcdFx0Z2V0OiAoKSA9PiBlbmFibGVPdmVycmlkZSA9PT0gbnVsbCA/IGNyZWF0ZURlYnVnLmVuYWJsZWQobmFtZXNwYWNlKSA6IGVuYWJsZU92ZXJyaWRlLFxuXHRcdFx0c2V0OiB2ID0+IHtcblx0XHRcdFx0ZW5hYmxlT3ZlcnJpZGUgPSB2O1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0Ly8gRW52LXNwZWNpZmljIGluaXRpYWxpemF0aW9uIGxvZ2ljIGZvciBkZWJ1ZyBpbnN0YW5jZXNcblx0XHRpZiAodHlwZW9mIGNyZWF0ZURlYnVnLmluaXQgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdGNyZWF0ZURlYnVnLmluaXQoZGVidWcpO1xuXHRcdH1cblxuXHRcdHJldHVybiBkZWJ1Zztcblx0fVxuXG5cdGZ1bmN0aW9uIGV4dGVuZChuYW1lc3BhY2UsIGRlbGltaXRlcikge1xuXHRcdGNvbnN0IG5ld0RlYnVnID0gY3JlYXRlRGVidWcodGhpcy5uYW1lc3BhY2UgKyAodHlwZW9mIGRlbGltaXRlciA9PT0gJ3VuZGVmaW5lZCcgPyAnOicgOiBkZWxpbWl0ZXIpICsgbmFtZXNwYWNlKTtcblx0XHRuZXdEZWJ1Zy5sb2cgPSB0aGlzLmxvZztcblx0XHRyZXR1cm4gbmV3RGVidWc7XG5cdH1cblxuXHQvKipcblx0KiBFbmFibGVzIGEgZGVidWcgbW9kZSBieSBuYW1lc3BhY2VzLiBUaGlzIGNhbiBpbmNsdWRlIG1vZGVzXG5cdCogc2VwYXJhdGVkIGJ5IGEgY29sb24gYW5kIHdpbGRjYXJkcy5cblx0KlxuXHQqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2VzXG5cdCogQGFwaSBwdWJsaWNcblx0Ki9cblx0ZnVuY3Rpb24gZW5hYmxlKG5hbWVzcGFjZXMpIHtcblx0XHRjcmVhdGVEZWJ1Zy5zYXZlKG5hbWVzcGFjZXMpO1xuXG5cdFx0Y3JlYXRlRGVidWcubmFtZXMgPSBbXTtcblx0XHRjcmVhdGVEZWJ1Zy5za2lwcyA9IFtdO1xuXG5cdFx0bGV0IGk7XG5cdFx0Y29uc3Qgc3BsaXQgPSAodHlwZW9mIG5hbWVzcGFjZXMgPT09ICdzdHJpbmcnID8gbmFtZXNwYWNlcyA6ICcnKS5zcGxpdCgvW1xccyxdKy8pO1xuXHRcdGNvbnN0IGxlbiA9IHNwbGl0Lmxlbmd0aDtcblxuXHRcdGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0aWYgKCFzcGxpdFtpXSkge1xuXHRcdFx0XHQvLyBpZ25vcmUgZW1wdHkgc3RyaW5nc1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0bmFtZXNwYWNlcyA9IHNwbGl0W2ldLnJlcGxhY2UoL1xcKi9nLCAnLio/Jyk7XG5cblx0XHRcdGlmIChuYW1lc3BhY2VzWzBdID09PSAnLScpIHtcblx0XHRcdFx0Y3JlYXRlRGVidWcuc2tpcHMucHVzaChuZXcgUmVnRXhwKCdeJyArIG5hbWVzcGFjZXMuc3Vic3RyKDEpICsgJyQnKSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjcmVhdGVEZWJ1Zy5uYW1lcy5wdXNoKG5ldyBSZWdFeHAoJ14nICsgbmFtZXNwYWNlcyArICckJykpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQqIERpc2FibGUgZGVidWcgb3V0cHV0LlxuXHQqXG5cdCogQHJldHVybiB7U3RyaW5nfSBuYW1lc3BhY2VzXG5cdCogQGFwaSBwdWJsaWNcblx0Ki9cblx0ZnVuY3Rpb24gZGlzYWJsZSgpIHtcblx0XHRjb25zdCBuYW1lc3BhY2VzID0gW1xuXHRcdFx0Li4uY3JlYXRlRGVidWcubmFtZXMubWFwKHRvTmFtZXNwYWNlKSxcblx0XHRcdC4uLmNyZWF0ZURlYnVnLnNraXBzLm1hcCh0b05hbWVzcGFjZSkubWFwKG5hbWVzcGFjZSA9PiAnLScgKyBuYW1lc3BhY2UpXG5cdFx0XS5qb2luKCcsJyk7XG5cdFx0Y3JlYXRlRGVidWcuZW5hYmxlKCcnKTtcblx0XHRyZXR1cm4gbmFtZXNwYWNlcztcblx0fVxuXG5cdC8qKlxuXHQqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gbW9kZSBuYW1lIGlzIGVuYWJsZWQsIGZhbHNlIG90aGVyd2lzZS5cblx0KlxuXHQqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG5cdCogQHJldHVybiB7Qm9vbGVhbn1cblx0KiBAYXBpIHB1YmxpY1xuXHQqL1xuXHRmdW5jdGlvbiBlbmFibGVkKG5hbWUpIHtcblx0XHRpZiAobmFtZVtuYW1lLmxlbmd0aCAtIDFdID09PSAnKicpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdGxldCBpO1xuXHRcdGxldCBsZW47XG5cblx0XHRmb3IgKGkgPSAwLCBsZW4gPSBjcmVhdGVEZWJ1Zy5za2lwcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0aWYgKGNyZWF0ZURlYnVnLnNraXBzW2ldLnRlc3QobmFtZSkpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGZvciAoaSA9IDAsIGxlbiA9IGNyZWF0ZURlYnVnLm5hbWVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHRpZiAoY3JlYXRlRGVidWcubmFtZXNbaV0udGVzdChuYW1lKSkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHQvKipcblx0KiBDb252ZXJ0IHJlZ2V4cCB0byBuYW1lc3BhY2Vcblx0KlxuXHQqIEBwYXJhbSB7UmVnRXhwfSByZWd4ZXBcblx0KiBAcmV0dXJuIHtTdHJpbmd9IG5hbWVzcGFjZVxuXHQqIEBhcGkgcHJpdmF0ZVxuXHQqL1xuXHRmdW5jdGlvbiB0b05hbWVzcGFjZShyZWdleHApIHtcblx0XHRyZXR1cm4gcmVnZXhwLnRvU3RyaW5nKClcblx0XHRcdC5zdWJzdHJpbmcoMiwgcmVnZXhwLnRvU3RyaW5nKCkubGVuZ3RoIC0gMilcblx0XHRcdC5yZXBsYWNlKC9cXC5cXCpcXD8kLywgJyonKTtcblx0fVxuXG5cdC8qKlxuXHQqIENvZXJjZSBgdmFsYC5cblx0KlxuXHQqIEBwYXJhbSB7TWl4ZWR9IHZhbFxuXHQqIEByZXR1cm4ge01peGVkfVxuXHQqIEBhcGkgcHJpdmF0ZVxuXHQqL1xuXHRmdW5jdGlvbiBjb2VyY2UodmFsKSB7XG5cdFx0aWYgKHZhbCBpbnN0YW5jZW9mIEVycm9yKSB7XG5cdFx0XHRyZXR1cm4gdmFsLnN0YWNrIHx8IHZhbC5tZXNzYWdlO1xuXHRcdH1cblx0XHRyZXR1cm4gdmFsO1xuXHR9XG5cblx0LyoqXG5cdCogWFhYIERPIE5PVCBVU0UuIFRoaXMgaXMgYSB0ZW1wb3Jhcnkgc3R1YiBmdW5jdGlvbi5cblx0KiBYWFggSXQgV0lMTCBiZSByZW1vdmVkIGluIHRoZSBuZXh0IG1ham9yIHJlbGVhc2UuXG5cdCovXG5cdGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG5cdFx0Y29uc29sZS53YXJuKCdJbnN0YW5jZSBtZXRob2QgYGRlYnVnLmRlc3Ryb3koKWAgaXMgZGVwcmVjYXRlZCBhbmQgbm8gbG9uZ2VyIGRvZXMgYW55dGhpbmcuIEl0IHdpbGwgYmUgcmVtb3ZlZCBpbiB0aGUgbmV4dCBtYWpvciB2ZXJzaW9uIG9mIGBkZWJ1Z2AuJyk7XG5cdH1cblxuXHRjcmVhdGVEZWJ1Zy5lbmFibGUoY3JlYXRlRGVidWcubG9hZCgpKTtcblxuXHRyZXR1cm4gY3JlYXRlRGVidWc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0dXA7XG4iLCJtb2R1bGUuZXhwb3J0cyA9ICgoKSA9PiB7XG4gIGlmICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiBzZWxmO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4gd2luZG93O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG4gIH1cbn0pKCk7XG4iLCJjb25zdCBTb2NrZXQgPSByZXF1aXJlKFwiLi9zb2NrZXRcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gKHVyaSwgb3B0cykgPT4gbmV3IFNvY2tldCh1cmksIG9wdHMpO1xuXG4vKipcbiAqIEV4cG9zZSBkZXBzIGZvciBsZWdhY3kgY29tcGF0aWJpbGl0eVxuICogYW5kIHN0YW5kYWxvbmUgYnJvd3NlciBhY2Nlc3MuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMuU29ja2V0ID0gU29ja2V0O1xubW9kdWxlLmV4cG9ydHMucHJvdG9jb2wgPSBTb2NrZXQucHJvdG9jb2w7IC8vIHRoaXMgaXMgYW4gaW50XG5tb2R1bGUuZXhwb3J0cy5UcmFuc3BvcnQgPSByZXF1aXJlKFwiLi90cmFuc3BvcnRcIik7XG5tb2R1bGUuZXhwb3J0cy50cmFuc3BvcnRzID0gcmVxdWlyZShcIi4vdHJhbnNwb3J0cy9pbmRleFwiKTtcbm1vZHVsZS5leHBvcnRzLnBhcnNlciA9IHJlcXVpcmUoXCJlbmdpbmUuaW8tcGFyc2VyXCIpO1xuIiwiY29uc3QgdHJhbnNwb3J0cyA9IHJlcXVpcmUoXCIuL3RyYW5zcG9ydHMvaW5kZXhcIik7XG5jb25zdCBFbWl0dGVyID0gcmVxdWlyZShcImNvbXBvbmVudC1lbWl0dGVyXCIpO1xuY29uc3QgZGVidWcgPSByZXF1aXJlKFwiZGVidWdcIikoXCJlbmdpbmUuaW8tY2xpZW50OnNvY2tldFwiKTtcbmNvbnN0IHBhcnNlciA9IHJlcXVpcmUoXCJlbmdpbmUuaW8tcGFyc2VyXCIpO1xuY29uc3QgcGFyc2V1cmkgPSByZXF1aXJlKFwicGFyc2V1cmlcIik7XG5jb25zdCBwYXJzZXFzID0gcmVxdWlyZShcInBhcnNlcXNcIik7XG5cbmNsYXNzIFNvY2tldCBleHRlbmRzIEVtaXR0ZXIge1xuICAvKipcbiAgICogU29ja2V0IGNvbnN0cnVjdG9yLlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ3xPYmplY3R9IHVyaSBvciBvcHRpb25zXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih1cmksIG9wdHMgPSB7fSkge1xuICAgIHN1cGVyKCk7XG5cbiAgICBpZiAodXJpICYmIFwib2JqZWN0XCIgPT09IHR5cGVvZiB1cmkpIHtcbiAgICAgIG9wdHMgPSB1cmk7XG4gICAgICB1cmkgPSBudWxsO1xuICAgIH1cblxuICAgIGlmICh1cmkpIHtcbiAgICAgIHVyaSA9IHBhcnNldXJpKHVyaSk7XG4gICAgICBvcHRzLmhvc3RuYW1lID0gdXJpLmhvc3Q7XG4gICAgICBvcHRzLnNlY3VyZSA9IHVyaS5wcm90b2NvbCA9PT0gXCJodHRwc1wiIHx8IHVyaS5wcm90b2NvbCA9PT0gXCJ3c3NcIjtcbiAgICAgIG9wdHMucG9ydCA9IHVyaS5wb3J0O1xuICAgICAgaWYgKHVyaS5xdWVyeSkgb3B0cy5xdWVyeSA9IHVyaS5xdWVyeTtcbiAgICB9IGVsc2UgaWYgKG9wdHMuaG9zdCkge1xuICAgICAgb3B0cy5ob3N0bmFtZSA9IHBhcnNldXJpKG9wdHMuaG9zdCkuaG9zdDtcbiAgICB9XG5cbiAgICB0aGlzLnNlY3VyZSA9XG4gICAgICBudWxsICE9IG9wdHMuc2VjdXJlXG4gICAgICAgID8gb3B0cy5zZWN1cmVcbiAgICAgICAgOiB0eXBlb2YgbG9jYXRpb24gIT09IFwidW5kZWZpbmVkXCIgJiYgXCJodHRwczpcIiA9PT0gbG9jYXRpb24ucHJvdG9jb2w7XG5cbiAgICBpZiAob3B0cy5ob3N0bmFtZSAmJiAhb3B0cy5wb3J0KSB7XG4gICAgICAvLyBpZiBubyBwb3J0IGlzIHNwZWNpZmllZCBtYW51YWxseSwgdXNlIHRoZSBwcm90b2NvbCBkZWZhdWx0XG4gICAgICBvcHRzLnBvcnQgPSB0aGlzLnNlY3VyZSA/IFwiNDQzXCIgOiBcIjgwXCI7XG4gICAgfVxuXG4gICAgdGhpcy5ob3N0bmFtZSA9XG4gICAgICBvcHRzLmhvc3RuYW1lIHx8XG4gICAgICAodHlwZW9mIGxvY2F0aW9uICE9PSBcInVuZGVmaW5lZFwiID8gbG9jYXRpb24uaG9zdG5hbWUgOiBcImxvY2FsaG9zdFwiKTtcbiAgICB0aGlzLnBvcnQgPVxuICAgICAgb3B0cy5wb3J0IHx8XG4gICAgICAodHlwZW9mIGxvY2F0aW9uICE9PSBcInVuZGVmaW5lZFwiICYmIGxvY2F0aW9uLnBvcnRcbiAgICAgICAgPyBsb2NhdGlvbi5wb3J0XG4gICAgICAgIDogdGhpcy5zZWN1cmVcbiAgICAgICAgPyA0NDNcbiAgICAgICAgOiA4MCk7XG5cbiAgICB0aGlzLnRyYW5zcG9ydHMgPSBvcHRzLnRyYW5zcG9ydHMgfHwgW1wicG9sbGluZ1wiLCBcIndlYnNvY2tldFwiXTtcbiAgICB0aGlzLnJlYWR5U3RhdGUgPSBcIlwiO1xuICAgIHRoaXMud3JpdGVCdWZmZXIgPSBbXTtcbiAgICB0aGlzLnByZXZCdWZmZXJMZW4gPSAwO1xuXG4gICAgdGhpcy5vcHRzID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIHtcbiAgICAgICAgcGF0aDogXCIvZW5naW5lLmlvXCIsXG4gICAgICAgIGFnZW50OiBmYWxzZSxcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzOiBmYWxzZSxcbiAgICAgICAgdXBncmFkZTogdHJ1ZSxcbiAgICAgICAganNvbnA6IHRydWUsXG4gICAgICAgIHRpbWVzdGFtcFBhcmFtOiBcInRcIixcbiAgICAgICAgcmVtZW1iZXJVcGdyYWRlOiBmYWxzZSxcbiAgICAgICAgcmVqZWN0VW5hdXRob3JpemVkOiB0cnVlLFxuICAgICAgICBwZXJNZXNzYWdlRGVmbGF0ZToge1xuICAgICAgICAgIHRocmVzaG9sZDogMTAyNFxuICAgICAgICB9LFxuICAgICAgICB0cmFuc3BvcnRPcHRpb25zOiB7fSxcbiAgICAgICAgY2xvc2VPbkJlZm9yZXVubG9hZDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIG9wdHNcbiAgICApO1xuXG4gICAgdGhpcy5vcHRzLnBhdGggPSB0aGlzLm9wdHMucGF0aC5yZXBsYWNlKC9cXC8kLywgXCJcIikgKyBcIi9cIjtcblxuICAgIGlmICh0eXBlb2YgdGhpcy5vcHRzLnF1ZXJ5ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICB0aGlzLm9wdHMucXVlcnkgPSBwYXJzZXFzLmRlY29kZSh0aGlzLm9wdHMucXVlcnkpO1xuICAgIH1cblxuICAgIC8vIHNldCBvbiBoYW5kc2hha2VcbiAgICB0aGlzLmlkID0gbnVsbDtcbiAgICB0aGlzLnVwZ3JhZGVzID0gbnVsbDtcbiAgICB0aGlzLnBpbmdJbnRlcnZhbCA9IG51bGw7XG4gICAgdGhpcy5waW5nVGltZW91dCA9IG51bGw7XG5cbiAgICAvLyBzZXQgb24gaGVhcnRiZWF0XG4gICAgdGhpcy5waW5nVGltZW91dFRpbWVyID0gbnVsbDtcblxuICAgIGlmICh0eXBlb2YgYWRkRXZlbnRMaXN0ZW5lciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICBpZiAodGhpcy5vcHRzLmNsb3NlT25CZWZvcmV1bmxvYWQpIHtcbiAgICAgICAgLy8gRmlyZWZveCBjbG9zZXMgdGhlIGNvbm5lY3Rpb24gd2hlbiB0aGUgXCJiZWZvcmV1bmxvYWRcIiBldmVudCBpcyBlbWl0dGVkIGJ1dCBub3QgQ2hyb21lLiBUaGlzIGV2ZW50IGxpc3RlbmVyXG4gICAgICAgIC8vIGVuc3VyZXMgZXZlcnkgYnJvd3NlciBiZWhhdmVzIHRoZSBzYW1lIChubyBcImRpc2Nvbm5lY3RcIiBldmVudCBhdCB0aGUgU29ja2V0LklPIGxldmVsIHdoZW4gdGhlIHBhZ2UgaXNcbiAgICAgICAgLy8gY2xvc2VkL3JlbG9hZGVkKVxuICAgICAgICBhZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgIFwiYmVmb3JldW5sb2FkXCIsXG4gICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMudHJhbnNwb3J0KSB7XG4gICAgICAgICAgICAgIC8vIHNpbGVudGx5IGNsb3NlIHRoZSB0cmFuc3BvcnRcbiAgICAgICAgICAgICAgdGhpcy50cmFuc3BvcnQucmVtb3ZlQWxsTGlzdGVuZXJzKCk7XG4gICAgICAgICAgICAgIHRoaXMudHJhbnNwb3J0LmNsb3NlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBmYWxzZVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuaG9zdG5hbWUgIT09IFwibG9jYWxob3N0XCIpIHtcbiAgICAgICAgdGhpcy5vZmZsaW5lRXZlbnRMaXN0ZW5lciA9ICgpID0+IHtcbiAgICAgICAgICB0aGlzLm9uQ2xvc2UoXCJ0cmFuc3BvcnQgY2xvc2VcIik7XG4gICAgICAgIH07XG4gICAgICAgIGFkZEV2ZW50TGlzdGVuZXIoXCJvZmZsaW5lXCIsIHRoaXMub2ZmbGluZUV2ZW50TGlzdGVuZXIsIGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLm9wZW4oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIHRyYW5zcG9ydCBvZiB0aGUgZ2l2ZW4gdHlwZS5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IHRyYW5zcG9ydCBuYW1lXG4gICAqIEByZXR1cm4ge1RyYW5zcG9ydH1cbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBjcmVhdGVUcmFuc3BvcnQobmFtZSkge1xuICAgIGRlYnVnKCdjcmVhdGluZyB0cmFuc3BvcnQgXCIlc1wiJywgbmFtZSk7XG4gICAgY29uc3QgcXVlcnkgPSBjbG9uZSh0aGlzLm9wdHMucXVlcnkpO1xuXG4gICAgLy8gYXBwZW5kIGVuZ2luZS5pbyBwcm90b2NvbCBpZGVudGlmaWVyXG4gICAgcXVlcnkuRUlPID0gcGFyc2VyLnByb3RvY29sO1xuXG4gICAgLy8gdHJhbnNwb3J0IG5hbWVcbiAgICBxdWVyeS50cmFuc3BvcnQgPSBuYW1lO1xuXG4gICAgLy8gc2Vzc2lvbiBpZCBpZiB3ZSBhbHJlYWR5IGhhdmUgb25lXG4gICAgaWYgKHRoaXMuaWQpIHF1ZXJ5LnNpZCA9IHRoaXMuaWQ7XG5cbiAgICBjb25zdCBvcHRzID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIHt9LFxuICAgICAgdGhpcy5vcHRzLnRyYW5zcG9ydE9wdGlvbnNbbmFtZV0sXG4gICAgICB0aGlzLm9wdHMsXG4gICAgICB7XG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBzb2NrZXQ6IHRoaXMsXG4gICAgICAgIGhvc3RuYW1lOiB0aGlzLmhvc3RuYW1lLFxuICAgICAgICBzZWN1cmU6IHRoaXMuc2VjdXJlLFxuICAgICAgICBwb3J0OiB0aGlzLnBvcnRcbiAgICAgIH1cbiAgICApO1xuXG4gICAgZGVidWcoXCJvcHRpb25zOiAlalwiLCBvcHRzKTtcblxuICAgIHJldHVybiBuZXcgdHJhbnNwb3J0c1tuYW1lXShvcHRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyB0cmFuc3BvcnQgdG8gdXNlIGFuZCBzdGFydHMgcHJvYmUuXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgb3BlbigpIHtcbiAgICBsZXQgdHJhbnNwb3J0O1xuICAgIGlmIChcbiAgICAgIHRoaXMub3B0cy5yZW1lbWJlclVwZ3JhZGUgJiZcbiAgICAgIFNvY2tldC5wcmlvcldlYnNvY2tldFN1Y2Nlc3MgJiZcbiAgICAgIHRoaXMudHJhbnNwb3J0cy5pbmRleE9mKFwid2Vic29ja2V0XCIpICE9PSAtMVxuICAgICkge1xuICAgICAgdHJhbnNwb3J0ID0gXCJ3ZWJzb2NrZXRcIjtcbiAgICB9IGVsc2UgaWYgKDAgPT09IHRoaXMudHJhbnNwb3J0cy5sZW5ndGgpIHtcbiAgICAgIC8vIEVtaXQgZXJyb3Igb24gbmV4dCB0aWNrIHNvIGl0IGNhbiBiZSBsaXN0ZW5lZCB0b1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZW1pdChcImVycm9yXCIsIFwiTm8gdHJhbnNwb3J0cyBhdmFpbGFibGVcIik7XG4gICAgICB9LCAwKTtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgdHJhbnNwb3J0ID0gdGhpcy50cmFuc3BvcnRzWzBdO1xuICAgIH1cbiAgICB0aGlzLnJlYWR5U3RhdGUgPSBcIm9wZW5pbmdcIjtcblxuICAgIC8vIFJldHJ5IHdpdGggdGhlIG5leHQgdHJhbnNwb3J0IGlmIHRoZSB0cmFuc3BvcnQgaXMgZGlzYWJsZWQgKGpzb25wOiBmYWxzZSlcbiAgICB0cnkge1xuICAgICAgdHJhbnNwb3J0ID0gdGhpcy5jcmVhdGVUcmFuc3BvcnQodHJhbnNwb3J0KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBkZWJ1ZyhcImVycm9yIHdoaWxlIGNyZWF0aW5nIHRyYW5zcG9ydDogJXNcIiwgZSk7XG4gICAgICB0aGlzLnRyYW5zcG9ydHMuc2hpZnQoKTtcbiAgICAgIHRoaXMub3BlbigpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRyYW5zcG9ydC5vcGVuKCk7XG4gICAgdGhpcy5zZXRUcmFuc3BvcnQodHJhbnNwb3J0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBjdXJyZW50IHRyYW5zcG9ydC4gRGlzYWJsZXMgdGhlIGV4aXN0aW5nIG9uZSAoaWYgYW55KS5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBzZXRUcmFuc3BvcnQodHJhbnNwb3J0KSB7XG4gICAgZGVidWcoXCJzZXR0aW5nIHRyYW5zcG9ydCAlc1wiLCB0cmFuc3BvcnQubmFtZSk7XG5cbiAgICBpZiAodGhpcy50cmFuc3BvcnQpIHtcbiAgICAgIGRlYnVnKFwiY2xlYXJpbmcgZXhpc3RpbmcgdHJhbnNwb3J0ICVzXCIsIHRoaXMudHJhbnNwb3J0Lm5hbWUpO1xuICAgICAgdGhpcy50cmFuc3BvcnQucmVtb3ZlQWxsTGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgLy8gc2V0IHVwIHRyYW5zcG9ydFxuICAgIHRoaXMudHJhbnNwb3J0ID0gdHJhbnNwb3J0O1xuXG4gICAgLy8gc2V0IHVwIHRyYW5zcG9ydCBsaXN0ZW5lcnNcbiAgICB0cmFuc3BvcnRcbiAgICAgIC5vbihcImRyYWluXCIsIHRoaXMub25EcmFpbi5iaW5kKHRoaXMpKVxuICAgICAgLm9uKFwicGFja2V0XCIsIHRoaXMub25QYWNrZXQuYmluZCh0aGlzKSlcbiAgICAgIC5vbihcImVycm9yXCIsIHRoaXMub25FcnJvci5iaW5kKHRoaXMpKVxuICAgICAgLm9uKFwiY2xvc2VcIiwgKCkgPT4ge1xuICAgICAgICB0aGlzLm9uQ2xvc2UoXCJ0cmFuc3BvcnQgY2xvc2VcIik7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm9iZXMgYSB0cmFuc3BvcnQuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB0cmFuc3BvcnQgbmFtZVxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIHByb2JlKG5hbWUpIHtcbiAgICBkZWJ1ZygncHJvYmluZyB0cmFuc3BvcnQgXCIlc1wiJywgbmFtZSk7XG4gICAgbGV0IHRyYW5zcG9ydCA9IHRoaXMuY3JlYXRlVHJhbnNwb3J0KG5hbWUsIHsgcHJvYmU6IDEgfSk7XG4gICAgbGV0IGZhaWxlZCA9IGZhbHNlO1xuXG4gICAgU29ja2V0LnByaW9yV2Vic29ja2V0U3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgb25UcmFuc3BvcnRPcGVuID0gKCkgPT4ge1xuICAgICAgaWYgKGZhaWxlZCkgcmV0dXJuO1xuXG4gICAgICBkZWJ1ZygncHJvYmUgdHJhbnNwb3J0IFwiJXNcIiBvcGVuZWQnLCBuYW1lKTtcbiAgICAgIHRyYW5zcG9ydC5zZW5kKFt7IHR5cGU6IFwicGluZ1wiLCBkYXRhOiBcInByb2JlXCIgfV0pO1xuICAgICAgdHJhbnNwb3J0Lm9uY2UoXCJwYWNrZXRcIiwgbXNnID0+IHtcbiAgICAgICAgaWYgKGZhaWxlZCkgcmV0dXJuO1xuICAgICAgICBpZiAoXCJwb25nXCIgPT09IG1zZy50eXBlICYmIFwicHJvYmVcIiA9PT0gbXNnLmRhdGEpIHtcbiAgICAgICAgICBkZWJ1ZygncHJvYmUgdHJhbnNwb3J0IFwiJXNcIiBwb25nJywgbmFtZSk7XG4gICAgICAgICAgdGhpcy51cGdyYWRpbmcgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuZW1pdChcInVwZ3JhZGluZ1wiLCB0cmFuc3BvcnQpO1xuICAgICAgICAgIGlmICghdHJhbnNwb3J0KSByZXR1cm47XG4gICAgICAgICAgU29ja2V0LnByaW9yV2Vic29ja2V0U3VjY2VzcyA9IFwid2Vic29ja2V0XCIgPT09IHRyYW5zcG9ydC5uYW1lO1xuXG4gICAgICAgICAgZGVidWcoJ3BhdXNpbmcgY3VycmVudCB0cmFuc3BvcnQgXCIlc1wiJywgdGhpcy50cmFuc3BvcnQubmFtZSk7XG4gICAgICAgICAgdGhpcy50cmFuc3BvcnQucGF1c2UoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGZhaWxlZCkgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKFwiY2xvc2VkXCIgPT09IHRoaXMucmVhZHlTdGF0ZSkgcmV0dXJuO1xuICAgICAgICAgICAgZGVidWcoXCJjaGFuZ2luZyB0cmFuc3BvcnQgYW5kIHNlbmRpbmcgdXBncmFkZSBwYWNrZXRcIik7XG5cbiAgICAgICAgICAgIGNsZWFudXAoKTtcblxuICAgICAgICAgICAgdGhpcy5zZXRUcmFuc3BvcnQodHJhbnNwb3J0KTtcbiAgICAgICAgICAgIHRyYW5zcG9ydC5zZW5kKFt7IHR5cGU6IFwidXBncmFkZVwiIH1dKTtcbiAgICAgICAgICAgIHRoaXMuZW1pdChcInVwZ3JhZGVcIiwgdHJhbnNwb3J0KTtcbiAgICAgICAgICAgIHRyYW5zcG9ydCA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLnVwZ3JhZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5mbHVzaCgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRlYnVnKCdwcm9iZSB0cmFuc3BvcnQgXCIlc1wiIGZhaWxlZCcsIG5hbWUpO1xuICAgICAgICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcihcInByb2JlIGVycm9yXCIpO1xuICAgICAgICAgIGVyci50cmFuc3BvcnQgPSB0cmFuc3BvcnQubmFtZTtcbiAgICAgICAgICB0aGlzLmVtaXQoXCJ1cGdyYWRlRXJyb3JcIiwgZXJyKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGZyZWV6ZVRyYW5zcG9ydCgpIHtcbiAgICAgIGlmIChmYWlsZWQpIHJldHVybjtcblxuICAgICAgLy8gQW55IGNhbGxiYWNrIGNhbGxlZCBieSB0cmFuc3BvcnQgc2hvdWxkIGJlIGlnbm9yZWQgc2luY2Ugbm93XG4gICAgICBmYWlsZWQgPSB0cnVlO1xuXG4gICAgICBjbGVhbnVwKCk7XG5cbiAgICAgIHRyYW5zcG9ydC5jbG9zZSgpO1xuICAgICAgdHJhbnNwb3J0ID0gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgYW55IGVycm9yIHRoYXQgaGFwcGVucyB3aGlsZSBwcm9iaW5nXG4gICAgY29uc3Qgb25lcnJvciA9IGVyciA9PiB7XG4gICAgICBjb25zdCBlcnJvciA9IG5ldyBFcnJvcihcInByb2JlIGVycm9yOiBcIiArIGVycik7XG4gICAgICBlcnJvci50cmFuc3BvcnQgPSB0cmFuc3BvcnQubmFtZTtcblxuICAgICAgZnJlZXplVHJhbnNwb3J0KCk7XG5cbiAgICAgIGRlYnVnKCdwcm9iZSB0cmFuc3BvcnQgXCIlc1wiIGZhaWxlZCBiZWNhdXNlIG9mIGVycm9yOiAlcycsIG5hbWUsIGVycik7XG5cbiAgICAgIHRoaXMuZW1pdChcInVwZ3JhZGVFcnJvclwiLCBlcnJvcik7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIG9uVHJhbnNwb3J0Q2xvc2UoKSB7XG4gICAgICBvbmVycm9yKFwidHJhbnNwb3J0IGNsb3NlZFwiKTtcbiAgICB9XG5cbiAgICAvLyBXaGVuIHRoZSBzb2NrZXQgaXMgY2xvc2VkIHdoaWxlIHdlJ3JlIHByb2JpbmdcbiAgICBmdW5jdGlvbiBvbmNsb3NlKCkge1xuICAgICAgb25lcnJvcihcInNvY2tldCBjbG9zZWRcIik7XG4gICAgfVxuXG4gICAgLy8gV2hlbiB0aGUgc29ja2V0IGlzIHVwZ3JhZGVkIHdoaWxlIHdlJ3JlIHByb2JpbmdcbiAgICBmdW5jdGlvbiBvbnVwZ3JhZGUodG8pIHtcbiAgICAgIGlmICh0cmFuc3BvcnQgJiYgdG8ubmFtZSAhPT0gdHJhbnNwb3J0Lm5hbWUpIHtcbiAgICAgICAgZGVidWcoJ1wiJXNcIiB3b3JrcyAtIGFib3J0aW5nIFwiJXNcIicsIHRvLm5hbWUsIHRyYW5zcG9ydC5uYW1lKTtcbiAgICAgICAgZnJlZXplVHJhbnNwb3J0KCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmVtb3ZlIGFsbCBsaXN0ZW5lcnMgb24gdGhlIHRyYW5zcG9ydCBhbmQgb24gc2VsZlxuICAgIGNvbnN0IGNsZWFudXAgPSAoKSA9PiB7XG4gICAgICB0cmFuc3BvcnQucmVtb3ZlTGlzdGVuZXIoXCJvcGVuXCIsIG9uVHJhbnNwb3J0T3Blbik7XG4gICAgICB0cmFuc3BvcnQucmVtb3ZlTGlzdGVuZXIoXCJlcnJvclwiLCBvbmVycm9yKTtcbiAgICAgIHRyYW5zcG9ydC5yZW1vdmVMaXN0ZW5lcihcImNsb3NlXCIsIG9uVHJhbnNwb3J0Q2xvc2UpO1xuICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcihcImNsb3NlXCIsIG9uY2xvc2UpO1xuICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcihcInVwZ3JhZGluZ1wiLCBvbnVwZ3JhZGUpO1xuICAgIH07XG5cbiAgICB0cmFuc3BvcnQub25jZShcIm9wZW5cIiwgb25UcmFuc3BvcnRPcGVuKTtcbiAgICB0cmFuc3BvcnQub25jZShcImVycm9yXCIsIG9uZXJyb3IpO1xuICAgIHRyYW5zcG9ydC5vbmNlKFwiY2xvc2VcIiwgb25UcmFuc3BvcnRDbG9zZSk7XG5cbiAgICB0aGlzLm9uY2UoXCJjbG9zZVwiLCBvbmNsb3NlKTtcbiAgICB0aGlzLm9uY2UoXCJ1cGdyYWRpbmdcIiwgb251cGdyYWRlKTtcblxuICAgIHRyYW5zcG9ydC5vcGVuKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gY29ubmVjdGlvbiBpcyBkZWVtZWQgb3Blbi5cbiAgICpcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG4gIG9uT3BlbigpIHtcbiAgICBkZWJ1ZyhcInNvY2tldCBvcGVuXCIpO1xuICAgIHRoaXMucmVhZHlTdGF0ZSA9IFwib3BlblwiO1xuICAgIFNvY2tldC5wcmlvcldlYnNvY2tldFN1Y2Nlc3MgPSBcIndlYnNvY2tldFwiID09PSB0aGlzLnRyYW5zcG9ydC5uYW1lO1xuICAgIHRoaXMuZW1pdChcIm9wZW5cIik7XG4gICAgdGhpcy5mbHVzaCgpO1xuXG4gICAgLy8gd2UgY2hlY2sgZm9yIGByZWFkeVN0YXRlYCBpbiBjYXNlIGFuIGBvcGVuYFxuICAgIC8vIGxpc3RlbmVyIGFscmVhZHkgY2xvc2VkIHRoZSBzb2NrZXRcbiAgICBpZiAoXG4gICAgICBcIm9wZW5cIiA9PT0gdGhpcy5yZWFkeVN0YXRlICYmXG4gICAgICB0aGlzLm9wdHMudXBncmFkZSAmJlxuICAgICAgdGhpcy50cmFuc3BvcnQucGF1c2VcbiAgICApIHtcbiAgICAgIGRlYnVnKFwic3RhcnRpbmcgdXBncmFkZSBwcm9iZXNcIik7XG4gICAgICBsZXQgaSA9IDA7XG4gICAgICBjb25zdCBsID0gdGhpcy51cGdyYWRlcy5sZW5ndGg7XG4gICAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xuICAgICAgICB0aGlzLnByb2JlKHRoaXMudXBncmFkZXNbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGVzIGEgcGFja2V0LlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIG9uUGFja2V0KHBhY2tldCkge1xuICAgIGlmIChcbiAgICAgIFwib3BlbmluZ1wiID09PSB0aGlzLnJlYWR5U3RhdGUgfHxcbiAgICAgIFwib3BlblwiID09PSB0aGlzLnJlYWR5U3RhdGUgfHxcbiAgICAgIFwiY2xvc2luZ1wiID09PSB0aGlzLnJlYWR5U3RhdGVcbiAgICApIHtcbiAgICAgIGRlYnVnKCdzb2NrZXQgcmVjZWl2ZTogdHlwZSBcIiVzXCIsIGRhdGEgXCIlc1wiJywgcGFja2V0LnR5cGUsIHBhY2tldC5kYXRhKTtcblxuICAgICAgdGhpcy5lbWl0KFwicGFja2V0XCIsIHBhY2tldCk7XG5cbiAgICAgIC8vIFNvY2tldCBpcyBsaXZlIC0gYW55IHBhY2tldCBjb3VudHNcbiAgICAgIHRoaXMuZW1pdChcImhlYXJ0YmVhdFwiKTtcblxuICAgICAgc3dpdGNoIChwYWNrZXQudHlwZSkge1xuICAgICAgICBjYXNlIFwib3BlblwiOlxuICAgICAgICAgIHRoaXMub25IYW5kc2hha2UoSlNPTi5wYXJzZShwYWNrZXQuZGF0YSkpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgXCJwaW5nXCI6XG4gICAgICAgICAgdGhpcy5yZXNldFBpbmdUaW1lb3V0KCk7XG4gICAgICAgICAgdGhpcy5zZW5kUGFja2V0KFwicG9uZ1wiKTtcbiAgICAgICAgICB0aGlzLmVtaXQoXCJwb25nXCIpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgXCJlcnJvclwiOlxuICAgICAgICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcihcInNlcnZlciBlcnJvclwiKTtcbiAgICAgICAgICBlcnIuY29kZSA9IHBhY2tldC5kYXRhO1xuICAgICAgICAgIHRoaXMub25FcnJvcihlcnIpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgXCJtZXNzYWdlXCI6XG4gICAgICAgICAgdGhpcy5lbWl0KFwiZGF0YVwiLCBwYWNrZXQuZGF0YSk7XG4gICAgICAgICAgdGhpcy5lbWl0KFwibWVzc2FnZVwiLCBwYWNrZXQuZGF0YSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlYnVnKCdwYWNrZXQgcmVjZWl2ZWQgd2l0aCBzb2NrZXQgcmVhZHlTdGF0ZSBcIiVzXCInLCB0aGlzLnJlYWR5U3RhdGUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgdXBvbiBoYW5kc2hha2UgY29tcGxldGlvbi5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IGhhbmRzaGFrZSBvYmpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBvbkhhbmRzaGFrZShkYXRhKSB7XG4gICAgdGhpcy5lbWl0KFwiaGFuZHNoYWtlXCIsIGRhdGEpO1xuICAgIHRoaXMuaWQgPSBkYXRhLnNpZDtcbiAgICB0aGlzLnRyYW5zcG9ydC5xdWVyeS5zaWQgPSBkYXRhLnNpZDtcbiAgICB0aGlzLnVwZ3JhZGVzID0gdGhpcy5maWx0ZXJVcGdyYWRlcyhkYXRhLnVwZ3JhZGVzKTtcbiAgICB0aGlzLnBpbmdJbnRlcnZhbCA9IGRhdGEucGluZ0ludGVydmFsO1xuICAgIHRoaXMucGluZ1RpbWVvdXQgPSBkYXRhLnBpbmdUaW1lb3V0O1xuICAgIHRoaXMub25PcGVuKCk7XG4gICAgLy8gSW4gY2FzZSBvcGVuIGhhbmRsZXIgY2xvc2VzIHNvY2tldFxuICAgIGlmIChcImNsb3NlZFwiID09PSB0aGlzLnJlYWR5U3RhdGUpIHJldHVybjtcbiAgICB0aGlzLnJlc2V0UGluZ1RpbWVvdXQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIGFuZCByZXNldHMgcGluZyB0aW1lb3V0IHRpbWVyIGJhc2VkIG9uIHNlcnZlciBwaW5ncy5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICByZXNldFBpbmdUaW1lb3V0KCkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLnBpbmdUaW1lb3V0VGltZXIpO1xuICAgIHRoaXMucGluZ1RpbWVvdXRUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5vbkNsb3NlKFwicGluZyB0aW1lb3V0XCIpO1xuICAgIH0sIHRoaXMucGluZ0ludGVydmFsICsgdGhpcy5waW5nVGltZW91dCk7XG4gICAgaWYgKHRoaXMub3B0cy5hdXRvVW5yZWYpIHtcbiAgICAgIHRoaXMucGluZ1RpbWVvdXRUaW1lci51bnJlZigpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgb24gYGRyYWluYCBldmVudFxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIG9uRHJhaW4oKSB7XG4gICAgdGhpcy53cml0ZUJ1ZmZlci5zcGxpY2UoMCwgdGhpcy5wcmV2QnVmZmVyTGVuKTtcblxuICAgIC8vIHNldHRpbmcgcHJldkJ1ZmZlckxlbiA9IDAgaXMgdmVyeSBpbXBvcnRhbnRcbiAgICAvLyBmb3IgZXhhbXBsZSwgd2hlbiB1cGdyYWRpbmcsIHVwZ3JhZGUgcGFja2V0IGlzIHNlbnQgb3ZlcixcbiAgICAvLyBhbmQgYSBub256ZXJvIHByZXZCdWZmZXJMZW4gY291bGQgY2F1c2UgcHJvYmxlbXMgb24gYGRyYWluYFxuICAgIHRoaXMucHJldkJ1ZmZlckxlbiA9IDA7XG5cbiAgICBpZiAoMCA9PT0gdGhpcy53cml0ZUJ1ZmZlci5sZW5ndGgpIHtcbiAgICAgIHRoaXMuZW1pdChcImRyYWluXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZsdXNoKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEZsdXNoIHdyaXRlIGJ1ZmZlcnMuXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgZmx1c2goKSB7XG4gICAgaWYgKFxuICAgICAgXCJjbG9zZWRcIiAhPT0gdGhpcy5yZWFkeVN0YXRlICYmXG4gICAgICB0aGlzLnRyYW5zcG9ydC53cml0YWJsZSAmJlxuICAgICAgIXRoaXMudXBncmFkaW5nICYmXG4gICAgICB0aGlzLndyaXRlQnVmZmVyLmxlbmd0aFxuICAgICkge1xuICAgICAgZGVidWcoXCJmbHVzaGluZyAlZCBwYWNrZXRzIGluIHNvY2tldFwiLCB0aGlzLndyaXRlQnVmZmVyLmxlbmd0aCk7XG4gICAgICB0aGlzLnRyYW5zcG9ydC5zZW5kKHRoaXMud3JpdGVCdWZmZXIpO1xuICAgICAgLy8ga2VlcCB0cmFjayBvZiBjdXJyZW50IGxlbmd0aCBvZiB3cml0ZUJ1ZmZlclxuICAgICAgLy8gc3BsaWNlIHdyaXRlQnVmZmVyIGFuZCBjYWxsYmFja0J1ZmZlciBvbiBgZHJhaW5gXG4gICAgICB0aGlzLnByZXZCdWZmZXJMZW4gPSB0aGlzLndyaXRlQnVmZmVyLmxlbmd0aDtcbiAgICAgIHRoaXMuZW1pdChcImZsdXNoXCIpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kcyBhIG1lc3NhZ2UuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBmdW5jdGlvbi5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMuXG4gICAqIEByZXR1cm4ge1NvY2tldH0gZm9yIGNoYWluaW5nLlxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cbiAgd3JpdGUobXNnLCBvcHRpb25zLCBmbikge1xuICAgIHRoaXMuc2VuZFBhY2tldChcIm1lc3NhZ2VcIiwgbXNnLCBvcHRpb25zLCBmbik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzZW5kKG1zZywgb3B0aW9ucywgZm4pIHtcbiAgICB0aGlzLnNlbmRQYWNrZXQoXCJtZXNzYWdlXCIsIG1zZywgb3B0aW9ucywgZm4pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbmRzIGEgcGFja2V0LlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gcGFja2V0IHR5cGUuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucy5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgZnVuY3Rpb24uXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgc2VuZFBhY2tldCh0eXBlLCBkYXRhLCBvcHRpb25zLCBmbikge1xuICAgIGlmIChcImZ1bmN0aW9uXCIgPT09IHR5cGVvZiBkYXRhKSB7XG4gICAgICBmbiA9IGRhdGE7XG4gICAgICBkYXRhID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGlmIChcImZ1bmN0aW9uXCIgPT09IHR5cGVvZiBvcHRpb25zKSB7XG4gICAgICBmbiA9IG9wdGlvbnM7XG4gICAgICBvcHRpb25zID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoXCJjbG9zaW5nXCIgPT09IHRoaXMucmVhZHlTdGF0ZSB8fCBcImNsb3NlZFwiID09PSB0aGlzLnJlYWR5U3RhdGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICBvcHRpb25zLmNvbXByZXNzID0gZmFsc2UgIT09IG9wdGlvbnMuY29tcHJlc3M7XG5cbiAgICBjb25zdCBwYWNrZXQgPSB7XG4gICAgICB0eXBlOiB0eXBlLFxuICAgICAgZGF0YTogZGF0YSxcbiAgICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgICB9O1xuICAgIHRoaXMuZW1pdChcInBhY2tldENyZWF0ZVwiLCBwYWNrZXQpO1xuICAgIHRoaXMud3JpdGVCdWZmZXIucHVzaChwYWNrZXQpO1xuICAgIGlmIChmbikgdGhpcy5vbmNlKFwiZmx1c2hcIiwgZm4pO1xuICAgIHRoaXMuZmx1c2goKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbG9zZXMgdGhlIGNvbm5lY3Rpb24uXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgY2xvc2UoKSB7XG4gICAgY29uc3QgY2xvc2UgPSAoKSA9PiB7XG4gICAgICB0aGlzLm9uQ2xvc2UoXCJmb3JjZWQgY2xvc2VcIik7XG4gICAgICBkZWJ1ZyhcInNvY2tldCBjbG9zaW5nIC0gdGVsbGluZyB0cmFuc3BvcnQgdG8gY2xvc2VcIik7XG4gICAgICB0aGlzLnRyYW5zcG9ydC5jbG9zZSgpO1xuICAgIH07XG5cbiAgICBjb25zdCBjbGVhbnVwQW5kQ2xvc2UgPSAoKSA9PiB7XG4gICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKFwidXBncmFkZVwiLCBjbGVhbnVwQW5kQ2xvc2UpO1xuICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcihcInVwZ3JhZGVFcnJvclwiLCBjbGVhbnVwQW5kQ2xvc2UpO1xuICAgICAgY2xvc2UoKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgd2FpdEZvclVwZ3JhZGUgPSAoKSA9PiB7XG4gICAgICAvLyB3YWl0IGZvciB1cGdyYWRlIHRvIGZpbmlzaCBzaW5jZSB3ZSBjYW4ndCBzZW5kIHBhY2tldHMgd2hpbGUgcGF1c2luZyBhIHRyYW5zcG9ydFxuICAgICAgdGhpcy5vbmNlKFwidXBncmFkZVwiLCBjbGVhbnVwQW5kQ2xvc2UpO1xuICAgICAgdGhpcy5vbmNlKFwidXBncmFkZUVycm9yXCIsIGNsZWFudXBBbmRDbG9zZSk7XG4gICAgfTtcblxuICAgIGlmIChcIm9wZW5pbmdcIiA9PT0gdGhpcy5yZWFkeVN0YXRlIHx8IFwib3BlblwiID09PSB0aGlzLnJlYWR5U3RhdGUpIHtcbiAgICAgIHRoaXMucmVhZHlTdGF0ZSA9IFwiY2xvc2luZ1wiO1xuXG4gICAgICBpZiAodGhpcy53cml0ZUJ1ZmZlci5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5vbmNlKFwiZHJhaW5cIiwgKCkgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLnVwZ3JhZGluZykge1xuICAgICAgICAgICAgd2FpdEZvclVwZ3JhZGUoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2xvc2UoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnVwZ3JhZGluZykge1xuICAgICAgICB3YWl0Rm9yVXBncmFkZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2xvc2UoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgdXBvbiB0cmFuc3BvcnQgZXJyb3JcbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBvbkVycm9yKGVycikge1xuICAgIGRlYnVnKFwic29ja2V0IGVycm9yICVqXCIsIGVycik7XG4gICAgU29ja2V0LnByaW9yV2Vic29ja2V0U3VjY2VzcyA9IGZhbHNlO1xuICAgIHRoaXMuZW1pdChcImVycm9yXCIsIGVycik7XG4gICAgdGhpcy5vbkNsb3NlKFwidHJhbnNwb3J0IGVycm9yXCIsIGVycik7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIHVwb24gdHJhbnNwb3J0IGNsb3NlLlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIG9uQ2xvc2UocmVhc29uLCBkZXNjKSB7XG4gICAgaWYgKFxuICAgICAgXCJvcGVuaW5nXCIgPT09IHRoaXMucmVhZHlTdGF0ZSB8fFxuICAgICAgXCJvcGVuXCIgPT09IHRoaXMucmVhZHlTdGF0ZSB8fFxuICAgICAgXCJjbG9zaW5nXCIgPT09IHRoaXMucmVhZHlTdGF0ZVxuICAgICkge1xuICAgICAgZGVidWcoJ3NvY2tldCBjbG9zZSB3aXRoIHJlYXNvbjogXCIlc1wiJywgcmVhc29uKTtcblxuICAgICAgLy8gY2xlYXIgdGltZXJzXG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5waW5nSW50ZXJ2YWxUaW1lcik7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5waW5nVGltZW91dFRpbWVyKTtcblxuICAgICAgLy8gc3RvcCBldmVudCBmcm9tIGZpcmluZyBhZ2FpbiBmb3IgdHJhbnNwb3J0XG4gICAgICB0aGlzLnRyYW5zcG9ydC5yZW1vdmVBbGxMaXN0ZW5lcnMoXCJjbG9zZVwiKTtcblxuICAgICAgLy8gZW5zdXJlIHRyYW5zcG9ydCB3b24ndCBzdGF5IG9wZW5cbiAgICAgIHRoaXMudHJhbnNwb3J0LmNsb3NlKCk7XG5cbiAgICAgIC8vIGlnbm9yZSBmdXJ0aGVyIHRyYW5zcG9ydCBjb21tdW5pY2F0aW9uXG4gICAgICB0aGlzLnRyYW5zcG9ydC5yZW1vdmVBbGxMaXN0ZW5lcnMoKTtcblxuICAgICAgaWYgKHR5cGVvZiByZW1vdmVFdmVudExpc3RlbmVyID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm9mZmxpbmVcIiwgdGhpcy5vZmZsaW5lRXZlbnRMaXN0ZW5lciwgZmFsc2UpO1xuICAgICAgfVxuXG4gICAgICAvLyBzZXQgcmVhZHkgc3RhdGVcbiAgICAgIHRoaXMucmVhZHlTdGF0ZSA9IFwiY2xvc2VkXCI7XG5cbiAgICAgIC8vIGNsZWFyIHNlc3Npb24gaWRcbiAgICAgIHRoaXMuaWQgPSBudWxsO1xuXG4gICAgICAvLyBlbWl0IGNsb3NlIGV2ZW50XG4gICAgICB0aGlzLmVtaXQoXCJjbG9zZVwiLCByZWFzb24sIGRlc2MpO1xuXG4gICAgICAvLyBjbGVhbiBidWZmZXJzIGFmdGVyLCBzbyB1c2VycyBjYW4gc3RpbGxcbiAgICAgIC8vIGdyYWIgdGhlIGJ1ZmZlcnMgb24gYGNsb3NlYCBldmVudFxuICAgICAgdGhpcy53cml0ZUJ1ZmZlciA9IFtdO1xuICAgICAgdGhpcy5wcmV2QnVmZmVyTGVuID0gMDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRmlsdGVycyB1cGdyYWRlcywgcmV0dXJuaW5nIG9ubHkgdGhvc2UgbWF0Y2hpbmcgY2xpZW50IHRyYW5zcG9ydHMuXG4gICAqXG4gICAqIEBwYXJhbSB7QXJyYXl9IHNlcnZlciB1cGdyYWRlc1xuICAgKiBAYXBpIHByaXZhdGVcbiAgICpcbiAgICovXG4gIGZpbHRlclVwZ3JhZGVzKHVwZ3JhZGVzKSB7XG4gICAgY29uc3QgZmlsdGVyZWRVcGdyYWRlcyA9IFtdO1xuICAgIGxldCBpID0gMDtcbiAgICBjb25zdCBqID0gdXBncmFkZXMubGVuZ3RoO1xuICAgIGZvciAoOyBpIDwgajsgaSsrKSB7XG4gICAgICBpZiAofnRoaXMudHJhbnNwb3J0cy5pbmRleE9mKHVwZ3JhZGVzW2ldKSlcbiAgICAgICAgZmlsdGVyZWRVcGdyYWRlcy5wdXNoKHVwZ3JhZGVzW2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIGZpbHRlcmVkVXBncmFkZXM7XG4gIH1cbn1cblxuU29ja2V0LnByaW9yV2Vic29ja2V0U3VjY2VzcyA9IGZhbHNlO1xuXG4vKipcbiAqIFByb3RvY29sIHZlcnNpb24uXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5Tb2NrZXQucHJvdG9jb2wgPSBwYXJzZXIucHJvdG9jb2w7IC8vIHRoaXMgaXMgYW4gaW50XG5cbmZ1bmN0aW9uIGNsb25lKG9iaikge1xuICBjb25zdCBvID0ge307XG4gIGZvciAobGV0IGkgaW4gb2JqKSB7XG4gICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgb1tpXSA9IG9ialtpXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG87XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU29ja2V0O1xuIiwiY29uc3QgcGFyc2VyID0gcmVxdWlyZShcImVuZ2luZS5pby1wYXJzZXJcIik7XG5jb25zdCBFbWl0dGVyID0gcmVxdWlyZShcImNvbXBvbmVudC1lbWl0dGVyXCIpO1xuY29uc3QgZGVidWcgPSByZXF1aXJlKFwiZGVidWdcIikoXCJlbmdpbmUuaW8tY2xpZW50OnRyYW5zcG9ydFwiKTtcblxuY2xhc3MgVHJhbnNwb3J0IGV4dGVuZHMgRW1pdHRlciB7XG4gIC8qKlxuICAgKiBUcmFuc3BvcnQgYWJzdHJhY3QgY29uc3RydWN0b3IuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zLlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIGNvbnN0cnVjdG9yKG9wdHMpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5vcHRzID0gb3B0cztcbiAgICB0aGlzLnF1ZXJ5ID0gb3B0cy5xdWVyeTtcbiAgICB0aGlzLnJlYWR5U3RhdGUgPSBcIlwiO1xuICAgIHRoaXMuc29ja2V0ID0gb3B0cy5zb2NrZXQ7XG4gIH1cblxuICAvKipcbiAgICogRW1pdHMgYW4gZXJyb3IuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAgICogQHJldHVybiB7VHJhbnNwb3J0fSBmb3IgY2hhaW5pbmdcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG4gIG9uRXJyb3IobXNnLCBkZXNjKSB7XG4gICAgY29uc3QgZXJyID0gbmV3IEVycm9yKG1zZyk7XG4gICAgZXJyLnR5cGUgPSBcIlRyYW5zcG9ydEVycm9yXCI7XG4gICAgZXJyLmRlc2NyaXB0aW9uID0gZGVzYztcbiAgICB0aGlzLmVtaXQoXCJlcnJvclwiLCBlcnIpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIE9wZW5zIHRoZSB0cmFuc3BvcnQuXG4gICAqXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuICBvcGVuKCkge1xuICAgIGlmIChcImNsb3NlZFwiID09PSB0aGlzLnJlYWR5U3RhdGUgfHwgXCJcIiA9PT0gdGhpcy5yZWFkeVN0YXRlKSB7XG4gICAgICB0aGlzLnJlYWR5U3RhdGUgPSBcIm9wZW5pbmdcIjtcbiAgICAgIHRoaXMuZG9PcGVuKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogQ2xvc2VzIHRoZSB0cmFuc3BvcnQuXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgY2xvc2UoKSB7XG4gICAgaWYgKFwib3BlbmluZ1wiID09PSB0aGlzLnJlYWR5U3RhdGUgfHwgXCJvcGVuXCIgPT09IHRoaXMucmVhZHlTdGF0ZSkge1xuICAgICAgdGhpcy5kb0Nsb3NlKCk7XG4gICAgICB0aGlzLm9uQ2xvc2UoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kcyBtdWx0aXBsZSBwYWNrZXRzLlxuICAgKlxuICAgKiBAcGFyYW0ge0FycmF5fSBwYWNrZXRzXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgc2VuZChwYWNrZXRzKSB7XG4gICAgaWYgKFwib3BlblwiID09PSB0aGlzLnJlYWR5U3RhdGUpIHtcbiAgICAgIHRoaXMud3JpdGUocGFja2V0cyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHRoaXMgbWlnaHQgaGFwcGVuIGlmIHRoZSB0cmFuc3BvcnQgd2FzIHNpbGVudGx5IGNsb3NlZCBpbiB0aGUgYmVmb3JldW5sb2FkIGV2ZW50IGhhbmRsZXJcbiAgICAgIGRlYnVnKFwidHJhbnNwb3J0IGlzIG5vdCBvcGVuLCBkaXNjYXJkaW5nIHBhY2tldHNcIik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCB1cG9uIG9wZW5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBvbk9wZW4oKSB7XG4gICAgdGhpcy5yZWFkeVN0YXRlID0gXCJvcGVuXCI7XG4gICAgdGhpcy53cml0YWJsZSA9IHRydWU7XG4gICAgdGhpcy5lbWl0KFwib3BlblwiKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2l0aCBkYXRhLlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YVxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIG9uRGF0YShkYXRhKSB7XG4gICAgY29uc3QgcGFja2V0ID0gcGFyc2VyLmRlY29kZVBhY2tldChkYXRhLCB0aGlzLnNvY2tldC5iaW5hcnlUeXBlKTtcbiAgICB0aGlzLm9uUGFja2V0KHBhY2tldCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIHdpdGggYSBkZWNvZGVkIHBhY2tldC5cbiAgICovXG4gIG9uUGFja2V0KHBhY2tldCkge1xuICAgIHRoaXMuZW1pdChcInBhY2tldFwiLCBwYWNrZXQpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCB1cG9uIGNsb3NlLlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIG9uQ2xvc2UoKSB7XG4gICAgdGhpcy5yZWFkeVN0YXRlID0gXCJjbG9zZWRcIjtcbiAgICB0aGlzLmVtaXQoXCJjbG9zZVwiKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRyYW5zcG9ydDtcbiIsImNvbnN0IFhNTEh0dHBSZXF1ZXN0ID0gcmVxdWlyZShcIi4uLy4uL2NvbnRyaWIveG1saHR0cHJlcXVlc3Qtc3NsL1hNTEh0dHBSZXF1ZXN0XCIpO1xuY29uc3QgWEhSID0gcmVxdWlyZShcIi4vcG9sbGluZy14aHJcIik7XG5jb25zdCBKU09OUCA9IHJlcXVpcmUoXCIuL3BvbGxpbmctanNvbnBcIik7XG5jb25zdCB3ZWJzb2NrZXQgPSByZXF1aXJlKFwiLi93ZWJzb2NrZXRcIik7XG5cbmV4cG9ydHMucG9sbGluZyA9IHBvbGxpbmc7XG5leHBvcnRzLndlYnNvY2tldCA9IHdlYnNvY2tldDtcblxuLyoqXG4gKiBQb2xsaW5nIHRyYW5zcG9ydCBwb2x5bW9ycGhpYyBjb25zdHJ1Y3Rvci5cbiAqIERlY2lkZXMgb24geGhyIHZzIGpzb25wIGJhc2VkIG9uIGZlYXR1cmUgZGV0ZWN0aW9uLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHBvbGxpbmcob3B0cykge1xuICBsZXQgeGhyO1xuICBsZXQgeGQgPSBmYWxzZTtcbiAgbGV0IHhzID0gZmFsc2U7XG4gIGNvbnN0IGpzb25wID0gZmFsc2UgIT09IG9wdHMuanNvbnA7XG5cbiAgaWYgKHR5cGVvZiBsb2NhdGlvbiAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNvbnN0IGlzU1NMID0gXCJodHRwczpcIiA9PT0gbG9jYXRpb24ucHJvdG9jb2w7XG4gICAgbGV0IHBvcnQgPSBsb2NhdGlvbi5wb3J0O1xuXG4gICAgLy8gc29tZSB1c2VyIGFnZW50cyBoYXZlIGVtcHR5IGBsb2NhdGlvbi5wb3J0YFxuICAgIGlmICghcG9ydCkge1xuICAgICAgcG9ydCA9IGlzU1NMID8gNDQzIDogODA7XG4gICAgfVxuXG4gICAgeGQgPSBvcHRzLmhvc3RuYW1lICE9PSBsb2NhdGlvbi5ob3N0bmFtZSB8fCBwb3J0ICE9PSBvcHRzLnBvcnQ7XG4gICAgeHMgPSBvcHRzLnNlY3VyZSAhPT0gaXNTU0w7XG4gIH1cblxuICBvcHRzLnhkb21haW4gPSB4ZDtcbiAgb3B0cy54c2NoZW1lID0geHM7XG4gIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdChvcHRzKTtcblxuICBpZiAoXCJvcGVuXCIgaW4geGhyICYmICFvcHRzLmZvcmNlSlNPTlApIHtcbiAgICByZXR1cm4gbmV3IFhIUihvcHRzKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoIWpzb25wKSB0aHJvdyBuZXcgRXJyb3IoXCJKU09OUCBkaXNhYmxlZFwiKTtcbiAgICByZXR1cm4gbmV3IEpTT05QKG9wdHMpO1xuICB9XG59XG4iLCJjb25zdCBQb2xsaW5nID0gcmVxdWlyZShcIi4vcG9sbGluZ1wiKTtcbmNvbnN0IGdsb2JhbFRoaXMgPSByZXF1aXJlKFwiLi4vZ2xvYmFsVGhpc1wiKTtcblxuY29uc3Qgck5ld2xpbmUgPSAvXFxuL2c7XG5jb25zdCByRXNjYXBlZE5ld2xpbmUgPSAvXFxcXG4vZztcblxuLyoqXG4gKiBHbG9iYWwgSlNPTlAgY2FsbGJhY2tzLlxuICovXG5cbmxldCBjYWxsYmFja3M7XG5cbmNsYXNzIEpTT05QUG9sbGluZyBleHRlbmRzIFBvbGxpbmcge1xuICAvKipcbiAgICogSlNPTlAgUG9sbGluZyBjb25zdHJ1Y3Rvci5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMuXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuICBjb25zdHJ1Y3RvcihvcHRzKSB7XG4gICAgc3VwZXIob3B0cyk7XG5cbiAgICB0aGlzLnF1ZXJ5ID0gdGhpcy5xdWVyeSB8fCB7fTtcblxuICAgIC8vIGRlZmluZSBnbG9iYWwgY2FsbGJhY2tzIGFycmF5IGlmIG5vdCBwcmVzZW50XG4gICAgLy8gd2UgZG8gdGhpcyBoZXJlIChsYXppbHkpIHRvIGF2b2lkIHVubmVlZGVkIGdsb2JhbCBwb2xsdXRpb25cbiAgICBpZiAoIWNhbGxiYWNrcykge1xuICAgICAgLy8gd2UgbmVlZCB0byBjb25zaWRlciBtdWx0aXBsZSBlbmdpbmVzIGluIHRoZSBzYW1lIHBhZ2VcbiAgICAgIGNhbGxiYWNrcyA9IGdsb2JhbFRoaXMuX19fZWlvID0gZ2xvYmFsVGhpcy5fX19laW8gfHwgW107XG4gICAgfVxuXG4gICAgLy8gY2FsbGJhY2sgaWRlbnRpZmllclxuICAgIHRoaXMuaW5kZXggPSBjYWxsYmFja3MubGVuZ3RoO1xuXG4gICAgLy8gYWRkIGNhbGxiYWNrIHRvIGpzb25wIGdsb2JhbFxuICAgIGNhbGxiYWNrcy5wdXNoKHRoaXMub25EYXRhLmJpbmQodGhpcykpO1xuXG4gICAgLy8gYXBwZW5kIHRvIHF1ZXJ5IHN0cmluZ1xuICAgIHRoaXMucXVlcnkuaiA9IHRoaXMuaW5kZXg7XG4gIH1cblxuICAvKipcbiAgICogSlNPTlAgb25seSBzdXBwb3J0cyBiaW5hcnkgYXMgYmFzZTY0IGVuY29kZWQgc3RyaW5nc1xuICAgKi9cbiAgZ2V0IHN1cHBvcnRzQmluYXJ5KCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbG9zZXMgdGhlIHNvY2tldC5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBkb0Nsb3NlKCkge1xuICAgIGlmICh0aGlzLnNjcmlwdCkge1xuICAgICAgLy8gcHJldmVudCBzcHVyaW91cyBlcnJvcnMgZnJvbSBiZWluZyBlbWl0dGVkIHdoZW4gdGhlIHdpbmRvdyBpcyB1bmxvYWRlZFxuICAgICAgdGhpcy5zY3JpcHQub25lcnJvciA9ICgpID0+IHt9O1xuICAgICAgdGhpcy5zY3JpcHQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLnNjcmlwdCk7XG4gICAgICB0aGlzLnNjcmlwdCA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZm9ybSkge1xuICAgICAgdGhpcy5mb3JtLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5mb3JtKTtcbiAgICAgIHRoaXMuZm9ybSA9IG51bGw7XG4gICAgICB0aGlzLmlmcmFtZSA9IG51bGw7XG4gICAgfVxuXG4gICAgc3VwZXIuZG9DbG9zZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0YXJ0cyBhIHBvbGwgY3ljbGUuXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgZG9Qb2xsKCkge1xuICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG5cbiAgICBpZiAodGhpcy5zY3JpcHQpIHtcbiAgICAgIHRoaXMuc2NyaXB0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5zY3JpcHQpO1xuICAgICAgdGhpcy5zY3JpcHQgPSBudWxsO1xuICAgIH1cblxuICAgIHNjcmlwdC5hc3luYyA9IHRydWU7XG4gICAgc2NyaXB0LnNyYyA9IHRoaXMudXJpKCk7XG4gICAgc2NyaXB0Lm9uZXJyb3IgPSBlID0+IHtcbiAgICAgIHRoaXMub25FcnJvcihcImpzb25wIHBvbGwgZXJyb3JcIiwgZSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGluc2VydEF0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIilbMF07XG4gICAgaWYgKGluc2VydEF0KSB7XG4gICAgICBpbnNlcnRBdC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShzY3JpcHQsIGluc2VydEF0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgKGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuYm9keSkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICB9XG4gICAgdGhpcy5zY3JpcHQgPSBzY3JpcHQ7XG5cbiAgICBjb25zdCBpc1VBZ2Vja28gPVxuICAgICAgXCJ1bmRlZmluZWRcIiAhPT0gdHlwZW9mIG5hdmlnYXRvciAmJiAvZ2Vja28vaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuXG4gICAgaWYgKGlzVUFnZWNrbykge1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgaWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGlmcmFtZSk7XG4gICAgICB9LCAxMDApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBXcml0ZXMgd2l0aCBhIGhpZGRlbiBpZnJhbWUuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhIHRvIHNlbmRcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGVkIHVwb24gZmx1c2guXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgZG9Xcml0ZShkYXRhLCBmbikge1xuICAgIGxldCBpZnJhbWU7XG5cbiAgICBpZiAoIXRoaXMuZm9ybSkge1xuICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgICAgY29uc3QgYXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgICAgIGNvbnN0IGlkID0gKHRoaXMuaWZyYW1lSWQgPSBcImVpb19pZnJhbWVfXCIgKyB0aGlzLmluZGV4KTtcblxuICAgICAgZm9ybS5jbGFzc05hbWUgPSBcInNvY2tldGlvXCI7XG4gICAgICBmb3JtLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgICAgZm9ybS5zdHlsZS50b3AgPSBcIi0xMDAwcHhcIjtcbiAgICAgIGZvcm0uc3R5bGUubGVmdCA9IFwiLTEwMDBweFwiO1xuICAgICAgZm9ybS50YXJnZXQgPSBpZDtcbiAgICAgIGZvcm0ubWV0aG9kID0gXCJQT1NUXCI7XG4gICAgICBmb3JtLnNldEF0dHJpYnV0ZShcImFjY2VwdC1jaGFyc2V0XCIsIFwidXRmLThcIik7XG4gICAgICBhcmVhLm5hbWUgPSBcImRcIjtcbiAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoYXJlYSk7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gICAgICB0aGlzLmZvcm0gPSBmb3JtO1xuICAgICAgdGhpcy5hcmVhID0gYXJlYTtcbiAgICB9XG5cbiAgICB0aGlzLmZvcm0uYWN0aW9uID0gdGhpcy51cmkoKTtcblxuICAgIGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuICAgICAgaW5pdElmcmFtZSgpO1xuICAgICAgZm4oKTtcbiAgICB9XG5cbiAgICBjb25zdCBpbml0SWZyYW1lID0gKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuaWZyYW1lKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhpcy5mb3JtLnJlbW92ZUNoaWxkKHRoaXMuaWZyYW1lKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHRoaXMub25FcnJvcihcImpzb25wIHBvbGxpbmcgaWZyYW1lIHJlbW92YWwgZXJyb3JcIiwgZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gaWU2IGR5bmFtaWMgaWZyYW1lcyB3aXRoIHRhcmdldD1cIlwiIHN1cHBvcnQgKHRoYW5rcyBDaHJpcyBMYW1iYWNoZXIpXG4gICAgICAgIGNvbnN0IGh0bWwgPSAnPGlmcmFtZSBzcmM9XCJqYXZhc2NyaXB0OjBcIiBuYW1lPVwiJyArIHRoaXMuaWZyYW1lSWQgKyAnXCI+JztcbiAgICAgICAgaWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChodG1sKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKTtcbiAgICAgICAgaWZyYW1lLm5hbWUgPSB0aGlzLmlmcmFtZUlkO1xuICAgICAgICBpZnJhbWUuc3JjID0gXCJqYXZhc2NyaXB0OjBcIjtcbiAgICAgIH1cblxuICAgICAgaWZyYW1lLmlkID0gdGhpcy5pZnJhbWVJZDtcblxuICAgICAgdGhpcy5mb3JtLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gICAgICB0aGlzLmlmcmFtZSA9IGlmcmFtZTtcbiAgICB9O1xuXG4gICAgaW5pdElmcmFtZSgpO1xuXG4gICAgLy8gZXNjYXBlIFxcbiB0byBwcmV2ZW50IGl0IGZyb20gYmVpbmcgY29udmVydGVkIGludG8gXFxyXFxuIGJ5IHNvbWUgVUFzXG4gICAgLy8gZG91YmxlIGVzY2FwaW5nIGlzIHJlcXVpcmVkIGZvciBlc2NhcGVkIG5ldyBsaW5lcyBiZWNhdXNlIHVuZXNjYXBpbmcgb2YgbmV3IGxpbmVzIGNhbiBiZSBkb25lIHNhZmVseSBvbiBzZXJ2ZXItc2lkZVxuICAgIGRhdGEgPSBkYXRhLnJlcGxhY2UockVzY2FwZWROZXdsaW5lLCBcIlxcXFxcXG5cIik7XG4gICAgdGhpcy5hcmVhLnZhbHVlID0gZGF0YS5yZXBsYWNlKHJOZXdsaW5lLCBcIlxcXFxuXCIpO1xuXG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuZm9ybS5zdWJtaXQoKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuXG4gICAgaWYgKHRoaXMuaWZyYW1lLmF0dGFjaEV2ZW50KSB7XG4gICAgICB0aGlzLmlmcmFtZS5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmlmcmFtZS5yZWFkeVN0YXRlID09PSBcImNvbXBsZXRlXCIpIHtcbiAgICAgICAgICBjb21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlmcmFtZS5vbmxvYWQgPSBjb21wbGV0ZTtcbiAgICB9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBKU09OUFBvbGxpbmc7XG4iLCIvKiBnbG9iYWwgYXR0YWNoRXZlbnQgKi9cblxuY29uc3QgWE1MSHR0cFJlcXVlc3QgPSByZXF1aXJlKFwiLi4vLi4vY29udHJpYi94bWxodHRwcmVxdWVzdC1zc2wvWE1MSHR0cFJlcXVlc3RcIik7XG5jb25zdCBQb2xsaW5nID0gcmVxdWlyZShcIi4vcG9sbGluZ1wiKTtcbmNvbnN0IEVtaXR0ZXIgPSByZXF1aXJlKFwiY29tcG9uZW50LWVtaXR0ZXJcIik7XG5jb25zdCB7IHBpY2sgfSA9IHJlcXVpcmUoXCIuLi91dGlsXCIpO1xuY29uc3QgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoXCIuLi9nbG9iYWxUaGlzXCIpO1xuXG5jb25zdCBkZWJ1ZyA9IHJlcXVpcmUoXCJkZWJ1Z1wiKShcImVuZ2luZS5pby1jbGllbnQ6cG9sbGluZy14aHJcIik7XG5cbi8qKlxuICogRW1wdHkgZnVuY3Rpb25cbiAqL1xuXG5mdW5jdGlvbiBlbXB0eSgpIHt9XG5cbmNvbnN0IGhhc1hIUjIgPSAoZnVuY3Rpb24oKSB7XG4gIGNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCh7IHhkb21haW46IGZhbHNlIH0pO1xuICByZXR1cm4gbnVsbCAhPSB4aHIucmVzcG9uc2VUeXBlO1xufSkoKTtcblxuY2xhc3MgWEhSIGV4dGVuZHMgUG9sbGluZyB7XG4gIC8qKlxuICAgKiBYSFIgUG9sbGluZyBjb25zdHJ1Y3Rvci5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHNcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG4gIGNvbnN0cnVjdG9yKG9wdHMpIHtcbiAgICBzdXBlcihvcHRzKTtcblxuICAgIGlmICh0eXBlb2YgbG9jYXRpb24gIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIGNvbnN0IGlzU1NMID0gXCJodHRwczpcIiA9PT0gbG9jYXRpb24ucHJvdG9jb2w7XG4gICAgICBsZXQgcG9ydCA9IGxvY2F0aW9uLnBvcnQ7XG5cbiAgICAgIC8vIHNvbWUgdXNlciBhZ2VudHMgaGF2ZSBlbXB0eSBgbG9jYXRpb24ucG9ydGBcbiAgICAgIGlmICghcG9ydCkge1xuICAgICAgICBwb3J0ID0gaXNTU0wgPyA0NDMgOiA4MDtcbiAgICAgIH1cblxuICAgICAgdGhpcy54ZCA9XG4gICAgICAgICh0eXBlb2YgbG9jYXRpb24gIT09IFwidW5kZWZpbmVkXCIgJiZcbiAgICAgICAgICBvcHRzLmhvc3RuYW1lICE9PSBsb2NhdGlvbi5ob3N0bmFtZSkgfHxcbiAgICAgICAgcG9ydCAhPT0gb3B0cy5wb3J0O1xuICAgICAgdGhpcy54cyA9IG9wdHMuc2VjdXJlICE9PSBpc1NTTDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogWEhSIHN1cHBvcnRzIGJpbmFyeVxuICAgICAqL1xuICAgIGNvbnN0IGZvcmNlQmFzZTY0ID0gb3B0cyAmJiBvcHRzLmZvcmNlQmFzZTY0O1xuICAgIHRoaXMuc3VwcG9ydHNCaW5hcnkgPSBoYXNYSFIyICYmICFmb3JjZUJhc2U2NDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgcmVxdWVzdC5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZFxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIHJlcXVlc3Qob3B0cyA9IHt9KSB7XG4gICAgT2JqZWN0LmFzc2lnbihvcHRzLCB7IHhkOiB0aGlzLnhkLCB4czogdGhpcy54cyB9LCB0aGlzLm9wdHMpO1xuICAgIHJldHVybiBuZXcgUmVxdWVzdCh0aGlzLnVyaSgpLCBvcHRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kcyBkYXRhLlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YSB0byBzZW5kLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsZWQgdXBvbiBmbHVzaC5cbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBkb1dyaXRlKGRhdGEsIGZuKSB7XG4gICAgY29uc3QgcmVxID0gdGhpcy5yZXF1ZXN0KHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBkYXRhOiBkYXRhXG4gICAgfSk7XG4gICAgcmVxLm9uKFwic3VjY2Vzc1wiLCBmbik7XG4gICAgcmVxLm9uKFwiZXJyb3JcIiwgZXJyID0+IHtcbiAgICAgIHRoaXMub25FcnJvcihcInhociBwb3N0IGVycm9yXCIsIGVycik7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU3RhcnRzIGEgcG9sbCBjeWNsZS5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBkb1BvbGwoKSB7XG4gICAgZGVidWcoXCJ4aHIgcG9sbFwiKTtcbiAgICBjb25zdCByZXEgPSB0aGlzLnJlcXVlc3QoKTtcbiAgICByZXEub24oXCJkYXRhXCIsIHRoaXMub25EYXRhLmJpbmQodGhpcykpO1xuICAgIHJlcS5vbihcImVycm9yXCIsIGVyciA9PiB7XG4gICAgICB0aGlzLm9uRXJyb3IoXCJ4aHIgcG9sbCBlcnJvclwiLCBlcnIpO1xuICAgIH0pO1xuICAgIHRoaXMucG9sbFhociA9IHJlcTtcbiAgfVxufVxuXG5jbGFzcyBSZXF1ZXN0IGV4dGVuZHMgRW1pdHRlciB7XG4gIC8qKlxuICAgKiBSZXF1ZXN0IGNvbnN0cnVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih1cmksIG9wdHMpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMub3B0cyA9IG9wdHM7XG5cbiAgICB0aGlzLm1ldGhvZCA9IG9wdHMubWV0aG9kIHx8IFwiR0VUXCI7XG4gICAgdGhpcy51cmkgPSB1cmk7XG4gICAgdGhpcy5hc3luYyA9IGZhbHNlICE9PSBvcHRzLmFzeW5jO1xuICAgIHRoaXMuZGF0YSA9IHVuZGVmaW5lZCAhPT0gb3B0cy5kYXRhID8gb3B0cy5kYXRhIDogbnVsbDtcblxuICAgIHRoaXMuY3JlYXRlKCk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyB0aGUgWEhSIG9iamVjdCBhbmQgc2VuZHMgdGhlIHJlcXVlc3QuXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgY3JlYXRlKCkge1xuICAgIGNvbnN0IG9wdHMgPSBwaWNrKFxuICAgICAgdGhpcy5vcHRzLFxuICAgICAgXCJhZ2VudFwiLFxuICAgICAgXCJlbmFibGVzWERSXCIsXG4gICAgICBcInBmeFwiLFxuICAgICAgXCJrZXlcIixcbiAgICAgIFwicGFzc3BocmFzZVwiLFxuICAgICAgXCJjZXJ0XCIsXG4gICAgICBcImNhXCIsXG4gICAgICBcImNpcGhlcnNcIixcbiAgICAgIFwicmVqZWN0VW5hdXRob3JpemVkXCIsXG4gICAgICBcImF1dG9VbnJlZlwiXG4gICAgKTtcbiAgICBvcHRzLnhkb21haW4gPSAhIXRoaXMub3B0cy54ZDtcbiAgICBvcHRzLnhzY2hlbWUgPSAhIXRoaXMub3B0cy54cztcblxuICAgIGNvbnN0IHhociA9ICh0aGlzLnhociA9IG5ldyBYTUxIdHRwUmVxdWVzdChvcHRzKSk7XG5cbiAgICB0cnkge1xuICAgICAgZGVidWcoXCJ4aHIgb3BlbiAlczogJXNcIiwgdGhpcy5tZXRob2QsIHRoaXMudXJpKTtcbiAgICAgIHhoci5vcGVuKHRoaXMubWV0aG9kLCB0aGlzLnVyaSwgdGhpcy5hc3luYyk7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAodGhpcy5vcHRzLmV4dHJhSGVhZGVycykge1xuICAgICAgICAgIHhoci5zZXREaXNhYmxlSGVhZGVyQ2hlY2sgJiYgeGhyLnNldERpc2FibGVIZWFkZXJDaGVjayh0cnVlKTtcbiAgICAgICAgICBmb3IgKGxldCBpIGluIHRoaXMub3B0cy5leHRyYUhlYWRlcnMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdHMuZXh0cmFIZWFkZXJzLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKGksIHRoaXMub3B0cy5leHRyYUhlYWRlcnNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge31cblxuICAgICAgaWYgKFwiUE9TVFwiID09PSB0aGlzLm1ldGhvZCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC10eXBlXCIsIFwidGV4dC9wbGFpbjtjaGFyc2V0PVVURi04XCIpO1xuICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgfVxuXG4gICAgICB0cnkge1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkFjY2VwdFwiLCBcIiovKlwiKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHt9XG5cbiAgICAgIC8vIGllNiBjaGVja1xuICAgICAgaWYgKFwid2l0aENyZWRlbnRpYWxzXCIgaW4geGhyKSB7XG4gICAgICAgIHhoci53aXRoQ3JlZGVudGlhbHMgPSB0aGlzLm9wdHMud2l0aENyZWRlbnRpYWxzO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5vcHRzLnJlcXVlc3RUaW1lb3V0KSB7XG4gICAgICAgIHhoci50aW1lb3V0ID0gdGhpcy5vcHRzLnJlcXVlc3RUaW1lb3V0O1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5oYXNYRFIoKSkge1xuICAgICAgICB4aHIub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgIHRoaXMub25Mb2FkKCk7XG4gICAgICAgIH07XG4gICAgICAgIHhoci5vbmVycm9yID0gKCkgPT4ge1xuICAgICAgICAgIHRoaXMub25FcnJvcih4aHIucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XG4gICAgICAgICAgaWYgKDQgIT09IHhoci5yZWFkeVN0YXRlKSByZXR1cm47XG4gICAgICAgICAgaWYgKDIwMCA9PT0geGhyLnN0YXR1cyB8fCAxMjIzID09PSB4aHIuc3RhdHVzKSB7XG4gICAgICAgICAgICB0aGlzLm9uTG9hZCgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBtYWtlIHN1cmUgdGhlIGBlcnJvcmAgZXZlbnQgaGFuZGxlciB0aGF0J3MgdXNlci1zZXRcbiAgICAgICAgICAgIC8vIGRvZXMgbm90IHRocm93IGluIHRoZSBzYW1lIHRpY2sgYW5kIGdldHMgY2F1Z2h0IGhlcmVcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLm9uRXJyb3IodHlwZW9mIHhoci5zdGF0dXMgPT09IFwibnVtYmVyXCIgPyB4aHIuc3RhdHVzIDogMCk7XG4gICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIGRlYnVnKFwieGhyIGRhdGEgJXNcIiwgdGhpcy5kYXRhKTtcbiAgICAgIHhoci5zZW5kKHRoaXMuZGF0YSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy8gTmVlZCB0byBkZWZlciBzaW5jZSAuY3JlYXRlKCkgaXMgY2FsbGVkIGRpcmVjdGx5IGZyb20gdGhlIGNvbnN0cnVjdG9yXG4gICAgICAvLyBhbmQgdGh1cyB0aGUgJ2Vycm9yJyBldmVudCBjYW4gb25seSBiZSBvbmx5IGJvdW5kICphZnRlciogdGhpcyBleGNlcHRpb25cbiAgICAgIC8vIG9jY3Vycy4gIFRoZXJlZm9yZSwgYWxzbywgd2UgY2Fubm90IHRocm93IGhlcmUgYXQgYWxsLlxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMub25FcnJvcihlKTtcbiAgICAgIH0sIDApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIHRoaXMuaW5kZXggPSBSZXF1ZXN0LnJlcXVlc3RzQ291bnQrKztcbiAgICAgIFJlcXVlc3QucmVxdWVzdHNbdGhpcy5pbmRleF0gPSB0aGlzO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgdXBvbiBzdWNjZXNzZnVsIHJlc3BvbnNlLlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIG9uU3VjY2VzcygpIHtcbiAgICB0aGlzLmVtaXQoXCJzdWNjZXNzXCIpO1xuICAgIHRoaXMuY2xlYW51cCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCBpZiB3ZSBoYXZlIGRhdGEuXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgb25EYXRhKGRhdGEpIHtcbiAgICB0aGlzLmVtaXQoXCJkYXRhXCIsIGRhdGEpO1xuICAgIHRoaXMub25TdWNjZXNzKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIHVwb24gZXJyb3IuXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgb25FcnJvcihlcnIpIHtcbiAgICB0aGlzLmVtaXQoXCJlcnJvclwiLCBlcnIpO1xuICAgIHRoaXMuY2xlYW51cCh0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhbnMgdXAgaG91c2UuXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgY2xlYW51cChmcm9tRXJyb3IpIHtcbiAgICBpZiAoXCJ1bmRlZmluZWRcIiA9PT0gdHlwZW9mIHRoaXMueGhyIHx8IG51bGwgPT09IHRoaXMueGhyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIHhtbGh0dHByZXF1ZXN0XG4gICAgaWYgKHRoaXMuaGFzWERSKCkpIHtcbiAgICAgIHRoaXMueGhyLm9ubG9hZCA9IHRoaXMueGhyLm9uZXJyb3IgPSBlbXB0eTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy54aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZW1wdHk7XG4gICAgfVxuXG4gICAgaWYgKGZyb21FcnJvcikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhpcy54aHIuYWJvcnQoKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgZGVsZXRlIFJlcXVlc3QucmVxdWVzdHNbdGhpcy5pbmRleF07XG4gICAgfVxuXG4gICAgdGhpcy54aHIgPSBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCB1cG9uIGxvYWQuXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgb25Mb2FkKCkge1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLnhoci5yZXNwb25zZVRleHQ7XG4gICAgaWYgKGRhdGEgIT09IG51bGwpIHtcbiAgICAgIHRoaXMub25EYXRhKGRhdGEpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBpdCBoYXMgWERvbWFpblJlcXVlc3QuXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgaGFzWERSKCkge1xuICAgIHJldHVybiB0eXBlb2YgWERvbWFpblJlcXVlc3QgIT09IFwidW5kZWZpbmVkXCIgJiYgIXRoaXMueHMgJiYgdGhpcy5lbmFibGVzWERSO1xuICB9XG5cbiAgLyoqXG4gICAqIEFib3J0cyB0aGUgcmVxdWVzdC5cbiAgICpcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG4gIGFib3J0KCkge1xuICAgIHRoaXMuY2xlYW51cCgpO1xuICB9XG59XG5cbi8qKlxuICogQWJvcnRzIHBlbmRpbmcgcmVxdWVzdHMgd2hlbiB1bmxvYWRpbmcgdGhlIHdpbmRvdy4gVGhpcyBpcyBuZWVkZWQgdG8gcHJldmVudFxuICogbWVtb3J5IGxlYWtzIChlLmcuIHdoZW4gdXNpbmcgSUUpIGFuZCB0byBlbnN1cmUgdGhhdCBubyBzcHVyaW91cyBlcnJvciBpc1xuICogZW1pdHRlZC5cbiAqL1xuXG5SZXF1ZXN0LnJlcXVlc3RzQ291bnQgPSAwO1xuUmVxdWVzdC5yZXF1ZXN0cyA9IHt9O1xuXG5pZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gIGlmICh0eXBlb2YgYXR0YWNoRXZlbnQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGF0dGFjaEV2ZW50KFwib251bmxvYWRcIiwgdW5sb2FkSGFuZGxlcik7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFkZEV2ZW50TGlzdGVuZXIgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGNvbnN0IHRlcm1pbmF0aW9uRXZlbnQgPSBcIm9ucGFnZWhpZGVcIiBpbiBnbG9iYWxUaGlzID8gXCJwYWdlaGlkZVwiIDogXCJ1bmxvYWRcIjtcbiAgICBhZGRFdmVudExpc3RlbmVyKHRlcm1pbmF0aW9uRXZlbnQsIHVubG9hZEhhbmRsZXIsIGZhbHNlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB1bmxvYWRIYW5kbGVyKCkge1xuICBmb3IgKGxldCBpIGluIFJlcXVlc3QucmVxdWVzdHMpIHtcbiAgICBpZiAoUmVxdWVzdC5yZXF1ZXN0cy5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgUmVxdWVzdC5yZXF1ZXN0c1tpXS5hYm9ydCgpO1xuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFhIUjtcbm1vZHVsZS5leHBvcnRzLlJlcXVlc3QgPSBSZXF1ZXN0O1xuIiwiY29uc3QgVHJhbnNwb3J0ID0gcmVxdWlyZShcIi4uL3RyYW5zcG9ydFwiKTtcbmNvbnN0IHBhcnNlcXMgPSByZXF1aXJlKFwicGFyc2Vxc1wiKTtcbmNvbnN0IHBhcnNlciA9IHJlcXVpcmUoXCJlbmdpbmUuaW8tcGFyc2VyXCIpO1xuY29uc3QgeWVhc3QgPSByZXF1aXJlKFwieWVhc3RcIik7XG5cbmNvbnN0IGRlYnVnID0gcmVxdWlyZShcImRlYnVnXCIpKFwiZW5naW5lLmlvLWNsaWVudDpwb2xsaW5nXCIpO1xuXG5jbGFzcyBQb2xsaW5nIGV4dGVuZHMgVHJhbnNwb3J0IHtcbiAgLyoqXG4gICAqIFRyYW5zcG9ydCBuYW1lLlxuICAgKi9cbiAgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIFwicG9sbGluZ1wiO1xuICB9XG5cbiAgLyoqXG4gICAqIE9wZW5zIHRoZSBzb2NrZXQgKHRyaWdnZXJzIHBvbGxpbmcpLiBXZSB3cml0ZSBhIFBJTkcgbWVzc2FnZSB0byBkZXRlcm1pbmVcbiAgICogd2hlbiB0aGUgdHJhbnNwb3J0IGlzIG9wZW4uXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgZG9PcGVuKCkge1xuICAgIHRoaXMucG9sbCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhdXNlcyBwb2xsaW5nLlxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayB1cG9uIGJ1ZmZlcnMgYXJlIGZsdXNoZWQgYW5kIHRyYW5zcG9ydCBpcyBwYXVzZWRcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBwYXVzZShvblBhdXNlKSB7XG4gICAgdGhpcy5yZWFkeVN0YXRlID0gXCJwYXVzaW5nXCI7XG5cbiAgICBjb25zdCBwYXVzZSA9ICgpID0+IHtcbiAgICAgIGRlYnVnKFwicGF1c2VkXCIpO1xuICAgICAgdGhpcy5yZWFkeVN0YXRlID0gXCJwYXVzZWRcIjtcbiAgICAgIG9uUGF1c2UoKTtcbiAgICB9O1xuXG4gICAgaWYgKHRoaXMucG9sbGluZyB8fCAhdGhpcy53cml0YWJsZSkge1xuICAgICAgbGV0IHRvdGFsID0gMDtcblxuICAgICAgaWYgKHRoaXMucG9sbGluZykge1xuICAgICAgICBkZWJ1ZyhcIndlIGFyZSBjdXJyZW50bHkgcG9sbGluZyAtIHdhaXRpbmcgdG8gcGF1c2VcIik7XG4gICAgICAgIHRvdGFsKys7XG4gICAgICAgIHRoaXMub25jZShcInBvbGxDb21wbGV0ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICBkZWJ1ZyhcInByZS1wYXVzZSBwb2xsaW5nIGNvbXBsZXRlXCIpO1xuICAgICAgICAgIC0tdG90YWwgfHwgcGF1c2UoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy53cml0YWJsZSkge1xuICAgICAgICBkZWJ1ZyhcIndlIGFyZSBjdXJyZW50bHkgd3JpdGluZyAtIHdhaXRpbmcgdG8gcGF1c2VcIik7XG4gICAgICAgIHRvdGFsKys7XG4gICAgICAgIHRoaXMub25jZShcImRyYWluXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGRlYnVnKFwicHJlLXBhdXNlIHdyaXRpbmcgY29tcGxldGVcIik7XG4gICAgICAgICAgLS10b3RhbCB8fCBwYXVzZSgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcGF1c2UoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU3RhcnRzIHBvbGxpbmcgY3ljbGUuXG4gICAqXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuICBwb2xsKCkge1xuICAgIGRlYnVnKFwicG9sbGluZ1wiKTtcbiAgICB0aGlzLnBvbGxpbmcgPSB0cnVlO1xuICAgIHRoaXMuZG9Qb2xsKCk7XG4gICAgdGhpcy5lbWl0KFwicG9sbFwiKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPdmVybG9hZHMgb25EYXRhIHRvIGRldGVjdCBwYXlsb2Fkcy5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBvbkRhdGEoZGF0YSkge1xuICAgIGRlYnVnKFwicG9sbGluZyBnb3QgZGF0YSAlc1wiLCBkYXRhKTtcbiAgICBjb25zdCBjYWxsYmFjayA9IHBhY2tldCA9PiB7XG4gICAgICAvLyBpZiBpdHMgdGhlIGZpcnN0IG1lc3NhZ2Ugd2UgY29uc2lkZXIgdGhlIHRyYW5zcG9ydCBvcGVuXG4gICAgICBpZiAoXCJvcGVuaW5nXCIgPT09IHRoaXMucmVhZHlTdGF0ZSAmJiBwYWNrZXQudHlwZSA9PT0gXCJvcGVuXCIpIHtcbiAgICAgICAgdGhpcy5vbk9wZW4oKTtcbiAgICAgIH1cblxuICAgICAgLy8gaWYgaXRzIGEgY2xvc2UgcGFja2V0LCB3ZSBjbG9zZSB0aGUgb25nb2luZyByZXF1ZXN0c1xuICAgICAgaWYgKFwiY2xvc2VcIiA9PT0gcGFja2V0LnR5cGUpIHtcbiAgICAgICAgdGhpcy5vbkNsb3NlKCk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgLy8gb3RoZXJ3aXNlIGJ5cGFzcyBvbkRhdGEgYW5kIGhhbmRsZSB0aGUgbWVzc2FnZVxuICAgICAgdGhpcy5vblBhY2tldChwYWNrZXQpO1xuICAgIH07XG5cbiAgICAvLyBkZWNvZGUgcGF5bG9hZFxuICAgIHBhcnNlci5kZWNvZGVQYXlsb2FkKGRhdGEsIHRoaXMuc29ja2V0LmJpbmFyeVR5cGUpLmZvckVhY2goY2FsbGJhY2spO1xuXG4gICAgLy8gaWYgYW4gZXZlbnQgZGlkIG5vdCB0cmlnZ2VyIGNsb3NpbmdcbiAgICBpZiAoXCJjbG9zZWRcIiAhPT0gdGhpcy5yZWFkeVN0YXRlKSB7XG4gICAgICAvLyBpZiB3ZSBnb3QgZGF0YSB3ZSdyZSBub3QgcG9sbGluZ1xuICAgICAgdGhpcy5wb2xsaW5nID0gZmFsc2U7XG4gICAgICB0aGlzLmVtaXQoXCJwb2xsQ29tcGxldGVcIik7XG5cbiAgICAgIGlmIChcIm9wZW5cIiA9PT0gdGhpcy5yZWFkeVN0YXRlKSB7XG4gICAgICAgIHRoaXMucG9sbCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGVidWcoJ2lnbm9yaW5nIHBvbGwgLSB0cmFuc3BvcnQgc3RhdGUgXCIlc1wiJywgdGhpcy5yZWFkeVN0YXRlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRm9yIHBvbGxpbmcsIHNlbmQgYSBjbG9zZSBwYWNrZXQuXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgZG9DbG9zZSgpIHtcbiAgICBjb25zdCBjbG9zZSA9ICgpID0+IHtcbiAgICAgIGRlYnVnKFwid3JpdGluZyBjbG9zZSBwYWNrZXRcIik7XG4gICAgICB0aGlzLndyaXRlKFt7IHR5cGU6IFwiY2xvc2VcIiB9XSk7XG4gICAgfTtcblxuICAgIGlmIChcIm9wZW5cIiA9PT0gdGhpcy5yZWFkeVN0YXRlKSB7XG4gICAgICBkZWJ1ZyhcInRyYW5zcG9ydCBvcGVuIC0gY2xvc2luZ1wiKTtcbiAgICAgIGNsb3NlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGluIGNhc2Ugd2UncmUgdHJ5aW5nIHRvIGNsb3NlIHdoaWxlXG4gICAgICAvLyBoYW5kc2hha2luZyBpcyBpbiBwcm9ncmVzcyAoR0gtMTY0KVxuICAgICAgZGVidWcoXCJ0cmFuc3BvcnQgbm90IG9wZW4gLSBkZWZlcnJpbmcgY2xvc2VcIik7XG4gICAgICB0aGlzLm9uY2UoXCJvcGVuXCIsIGNsb3NlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogV3JpdGVzIGEgcGFja2V0cyBwYXlsb2FkLlxuICAgKlxuICAgKiBAcGFyYW0ge0FycmF5fSBkYXRhIHBhY2tldHNcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZHJhaW4gY2FsbGJhY2tcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICB3cml0ZShwYWNrZXRzKSB7XG4gICAgdGhpcy53cml0YWJsZSA9IGZhbHNlO1xuXG4gICAgcGFyc2VyLmVuY29kZVBheWxvYWQocGFja2V0cywgZGF0YSA9PiB7XG4gICAgICB0aGlzLmRvV3JpdGUoZGF0YSwgKCkgPT4ge1xuICAgICAgICB0aGlzLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5lbWl0KFwiZHJhaW5cIik7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZW5lcmF0ZXMgdXJpIGZvciBjb25uZWN0aW9uLlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIHVyaSgpIHtcbiAgICBsZXQgcXVlcnkgPSB0aGlzLnF1ZXJ5IHx8IHt9O1xuICAgIGNvbnN0IHNjaGVtYSA9IHRoaXMub3B0cy5zZWN1cmUgPyBcImh0dHBzXCIgOiBcImh0dHBcIjtcbiAgICBsZXQgcG9ydCA9IFwiXCI7XG5cbiAgICAvLyBjYWNoZSBidXN0aW5nIGlzIGZvcmNlZFxuICAgIGlmIChmYWxzZSAhPT0gdGhpcy5vcHRzLnRpbWVzdGFtcFJlcXVlc3RzKSB7XG4gICAgICBxdWVyeVt0aGlzLm9wdHMudGltZXN0YW1wUGFyYW1dID0geWVhc3QoKTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuc3VwcG9ydHNCaW5hcnkgJiYgIXF1ZXJ5LnNpZCkge1xuICAgICAgcXVlcnkuYjY0ID0gMTtcbiAgICB9XG5cbiAgICBxdWVyeSA9IHBhcnNlcXMuZW5jb2RlKHF1ZXJ5KTtcblxuICAgIC8vIGF2b2lkIHBvcnQgaWYgZGVmYXVsdCBmb3Igc2NoZW1hXG4gICAgaWYgKFxuICAgICAgdGhpcy5vcHRzLnBvcnQgJiZcbiAgICAgICgoXCJodHRwc1wiID09PSBzY2hlbWEgJiYgTnVtYmVyKHRoaXMub3B0cy5wb3J0KSAhPT0gNDQzKSB8fFxuICAgICAgICAoXCJodHRwXCIgPT09IHNjaGVtYSAmJiBOdW1iZXIodGhpcy5vcHRzLnBvcnQpICE9PSA4MCkpXG4gICAgKSB7XG4gICAgICBwb3J0ID0gXCI6XCIgKyB0aGlzLm9wdHMucG9ydDtcbiAgICB9XG5cbiAgICAvLyBwcmVwZW5kID8gdG8gcXVlcnlcbiAgICBpZiAocXVlcnkubGVuZ3RoKSB7XG4gICAgICBxdWVyeSA9IFwiP1wiICsgcXVlcnk7XG4gICAgfVxuXG4gICAgY29uc3QgaXB2NiA9IHRoaXMub3B0cy5ob3N0bmFtZS5pbmRleE9mKFwiOlwiKSAhPT0gLTE7XG4gICAgcmV0dXJuIChcbiAgICAgIHNjaGVtYSArXG4gICAgICBcIjovL1wiICtcbiAgICAgIChpcHY2ID8gXCJbXCIgKyB0aGlzLm9wdHMuaG9zdG5hbWUgKyBcIl1cIiA6IHRoaXMub3B0cy5ob3N0bmFtZSkgK1xuICAgICAgcG9ydCArXG4gICAgICB0aGlzLm9wdHMucGF0aCArXG4gICAgICBxdWVyeVxuICAgICk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQb2xsaW5nO1xuIiwiY29uc3QgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoXCIuLi9nbG9iYWxUaGlzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgV2ViU29ja2V0OiBnbG9iYWxUaGlzLldlYlNvY2tldCB8fCBnbG9iYWxUaGlzLk1veldlYlNvY2tldCxcbiAgdXNpbmdCcm93c2VyV2ViU29ja2V0OiB0cnVlLFxuICBkZWZhdWx0QmluYXJ5VHlwZTogXCJhcnJheWJ1ZmZlclwiXG59O1xuIiwiY29uc3QgVHJhbnNwb3J0ID0gcmVxdWlyZShcIi4uL3RyYW5zcG9ydFwiKTtcbmNvbnN0IHBhcnNlciA9IHJlcXVpcmUoXCJlbmdpbmUuaW8tcGFyc2VyXCIpO1xuY29uc3QgcGFyc2VxcyA9IHJlcXVpcmUoXCJwYXJzZXFzXCIpO1xuY29uc3QgeWVhc3QgPSByZXF1aXJlKFwieWVhc3RcIik7XG5jb25zdCB7IHBpY2sgfSA9IHJlcXVpcmUoXCIuLi91dGlsXCIpO1xuY29uc3Qge1xuICBXZWJTb2NrZXQsXG4gIHVzaW5nQnJvd3NlcldlYlNvY2tldCxcbiAgZGVmYXVsdEJpbmFyeVR5cGVcbn0gPSByZXF1aXJlKFwiLi93ZWJzb2NrZXQtY29uc3RydWN0b3JcIik7XG5cbmNvbnN0IGRlYnVnID0gcmVxdWlyZShcImRlYnVnXCIpKFwiZW5naW5lLmlvLWNsaWVudDp3ZWJzb2NrZXRcIik7XG5cbi8vIGRldGVjdCBSZWFjdE5hdGl2ZSBlbnZpcm9ubWVudFxuY29uc3QgaXNSZWFjdE5hdGl2ZSA9XG4gIHR5cGVvZiBuYXZpZ2F0b3IgIT09IFwidW5kZWZpbmVkXCIgJiZcbiAgdHlwZW9mIG5hdmlnYXRvci5wcm9kdWN0ID09PSBcInN0cmluZ1wiICYmXG4gIG5hdmlnYXRvci5wcm9kdWN0LnRvTG93ZXJDYXNlKCkgPT09IFwicmVhY3RuYXRpdmVcIjtcblxuY2xhc3MgV1MgZXh0ZW5kcyBUcmFuc3BvcnQge1xuICAvKipcbiAgICogV2ViU29ja2V0IHRyYW5zcG9ydCBjb25zdHJ1Y3Rvci5cbiAgICpcbiAgICogQGFwaSB7T2JqZWN0fSBjb25uZWN0aW9uIG9wdGlvbnNcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG4gIGNvbnN0cnVjdG9yKG9wdHMpIHtcbiAgICBzdXBlcihvcHRzKTtcblxuICAgIHRoaXMuc3VwcG9ydHNCaW5hcnkgPSAhb3B0cy5mb3JjZUJhc2U2NDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmFuc3BvcnQgbmFtZS5cbiAgICpcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG4gIGdldCBuYW1lKCkge1xuICAgIHJldHVybiBcIndlYnNvY2tldFwiO1xuICB9XG5cbiAgLyoqXG4gICAqIE9wZW5zIHNvY2tldC5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBkb09wZW4oKSB7XG4gICAgaWYgKCF0aGlzLmNoZWNrKCkpIHtcbiAgICAgIC8vIGxldCBwcm9iZSB0aW1lb3V0XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdXJpID0gdGhpcy51cmkoKTtcbiAgICBjb25zdCBwcm90b2NvbHMgPSB0aGlzLm9wdHMucHJvdG9jb2xzO1xuXG4gICAgLy8gUmVhY3QgTmF0aXZlIG9ubHkgc3VwcG9ydHMgdGhlICdoZWFkZXJzJyBvcHRpb24sIGFuZCB3aWxsIHByaW50IGEgd2FybmluZyBpZiBhbnl0aGluZyBlbHNlIGlzIHBhc3NlZFxuICAgIGNvbnN0IG9wdHMgPSBpc1JlYWN0TmF0aXZlXG4gICAgICA/IHt9XG4gICAgICA6IHBpY2soXG4gICAgICAgICAgdGhpcy5vcHRzLFxuICAgICAgICAgIFwiYWdlbnRcIixcbiAgICAgICAgICBcInBlck1lc3NhZ2VEZWZsYXRlXCIsXG4gICAgICAgICAgXCJwZnhcIixcbiAgICAgICAgICBcImtleVwiLFxuICAgICAgICAgIFwicGFzc3BocmFzZVwiLFxuICAgICAgICAgIFwiY2VydFwiLFxuICAgICAgICAgIFwiY2FcIixcbiAgICAgICAgICBcImNpcGhlcnNcIixcbiAgICAgICAgICBcInJlamVjdFVuYXV0aG9yaXplZFwiLFxuICAgICAgICAgIFwibG9jYWxBZGRyZXNzXCIsXG4gICAgICAgICAgXCJwcm90b2NvbFZlcnNpb25cIixcbiAgICAgICAgICBcIm9yaWdpblwiLFxuICAgICAgICAgIFwibWF4UGF5bG9hZFwiLFxuICAgICAgICAgIFwiZmFtaWx5XCIsXG4gICAgICAgICAgXCJjaGVja1NlcnZlcklkZW50aXR5XCJcbiAgICAgICAgKTtcblxuICAgIGlmICh0aGlzLm9wdHMuZXh0cmFIZWFkZXJzKSB7XG4gICAgICBvcHRzLmhlYWRlcnMgPSB0aGlzLm9wdHMuZXh0cmFIZWFkZXJzO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICB0aGlzLndzID1cbiAgICAgICAgdXNpbmdCcm93c2VyV2ViU29ja2V0ICYmICFpc1JlYWN0TmF0aXZlXG4gICAgICAgICAgPyBwcm90b2NvbHNcbiAgICAgICAgICAgID8gbmV3IFdlYlNvY2tldCh1cmksIHByb3RvY29scylcbiAgICAgICAgICAgIDogbmV3IFdlYlNvY2tldCh1cmkpXG4gICAgICAgICAgOiBuZXcgV2ViU29ja2V0KHVyaSwgcHJvdG9jb2xzLCBvcHRzKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmVtaXQoXCJlcnJvclwiLCBlcnIpO1xuICAgIH1cblxuICAgIHRoaXMud3MuYmluYXJ5VHlwZSA9IHRoaXMuc29ja2V0LmJpbmFyeVR5cGUgfHwgZGVmYXVsdEJpbmFyeVR5cGU7XG5cbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBldmVudCBsaXN0ZW5lcnMgdG8gdGhlIHNvY2tldFxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHRoaXMud3Mub25vcGVuID0gKCkgPT4ge1xuICAgICAgaWYgKHRoaXMub3B0cy5hdXRvVW5yZWYpIHtcbiAgICAgICAgdGhpcy53cy5fc29ja2V0LnVucmVmKCk7XG4gICAgICB9XG4gICAgICB0aGlzLm9uT3BlbigpO1xuICAgIH07XG4gICAgdGhpcy53cy5vbmNsb3NlID0gdGhpcy5vbkNsb3NlLmJpbmQodGhpcyk7XG4gICAgdGhpcy53cy5vbm1lc3NhZ2UgPSBldiA9PiB0aGlzLm9uRGF0YShldi5kYXRhKTtcbiAgICB0aGlzLndzLm9uZXJyb3IgPSBlID0+IHRoaXMub25FcnJvcihcIndlYnNvY2tldCBlcnJvclwiLCBlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXcml0ZXMgZGF0YSB0byBzb2NrZXQuXG4gICAqXG4gICAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IG9mIHBhY2tldHMuXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgd3JpdGUocGFja2V0cykge1xuICAgIHRoaXMud3JpdGFibGUgPSBmYWxzZTtcblxuICAgIC8vIGVuY29kZVBhY2tldCBlZmZpY2llbnQgYXMgaXQgdXNlcyBXUyBmcmFtaW5nXG4gICAgLy8gbm8gbmVlZCBmb3IgZW5jb2RlUGF5bG9hZFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFja2V0cy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgcGFja2V0ID0gcGFja2V0c1tpXTtcbiAgICAgIGNvbnN0IGxhc3RQYWNrZXQgPSBpID09PSBwYWNrZXRzLmxlbmd0aCAtIDE7XG5cbiAgICAgIHBhcnNlci5lbmNvZGVQYWNrZXQocGFja2V0LCB0aGlzLnN1cHBvcnRzQmluYXJ5LCBkYXRhID0+IHtcbiAgICAgICAgLy8gYWx3YXlzIGNyZWF0ZSBhIG5ldyBvYmplY3QgKEdILTQzNylcbiAgICAgICAgY29uc3Qgb3B0cyA9IHt9O1xuICAgICAgICBpZiAoIXVzaW5nQnJvd3NlcldlYlNvY2tldCkge1xuICAgICAgICAgIGlmIChwYWNrZXQub3B0aW9ucykge1xuICAgICAgICAgICAgb3B0cy5jb21wcmVzcyA9IHBhY2tldC5vcHRpb25zLmNvbXByZXNzO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0aGlzLm9wdHMucGVyTWVzc2FnZURlZmxhdGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGxlbiA9XG4gICAgICAgICAgICAgIFwic3RyaW5nXCIgPT09IHR5cGVvZiBkYXRhID8gQnVmZmVyLmJ5dGVMZW5ndGgoZGF0YSkgOiBkYXRhLmxlbmd0aDtcbiAgICAgICAgICAgIGlmIChsZW4gPCB0aGlzLm9wdHMucGVyTWVzc2FnZURlZmxhdGUudGhyZXNob2xkKSB7XG4gICAgICAgICAgICAgIG9wdHMuY29tcHJlc3MgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTb21ldGltZXMgdGhlIHdlYnNvY2tldCBoYXMgYWxyZWFkeSBiZWVuIGNsb3NlZCBidXQgdGhlIGJyb3dzZXIgZGlkbid0XG4gICAgICAgIC8vIGhhdmUgYSBjaGFuY2Ugb2YgaW5mb3JtaW5nIHVzIGFib3V0IGl0IHlldCwgaW4gdGhhdCBjYXNlIHNlbmQgd2lsbFxuICAgICAgICAvLyB0aHJvdyBhbiBlcnJvclxuICAgICAgICB0cnkge1xuICAgICAgICAgIGlmICh1c2luZ0Jyb3dzZXJXZWJTb2NrZXQpIHtcbiAgICAgICAgICAgIC8vIFR5cGVFcnJvciBpcyB0aHJvd24gd2hlbiBwYXNzaW5nIHRoZSBzZWNvbmQgYXJndW1lbnQgb24gU2FmYXJpXG4gICAgICAgICAgICB0aGlzLndzLnNlbmQoZGF0YSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMud3Muc2VuZChkYXRhLCBvcHRzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBkZWJ1ZyhcIndlYnNvY2tldCBjbG9zZWQgYmVmb3JlIG9uY2xvc2UgZXZlbnRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobGFzdFBhY2tldCkge1xuICAgICAgICAgIC8vIGZha2UgZHJhaW5cbiAgICAgICAgICAvLyBkZWZlciB0byBuZXh0IHRpY2sgdG8gYWxsb3cgU29ja2V0IHRvIGNsZWFyIHdyaXRlQnVmZmVyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuZW1pdChcImRyYWluXCIpO1xuICAgICAgICAgIH0sIDApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIHVwb24gY2xvc2VcbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBvbkNsb3NlKCkge1xuICAgIFRyYW5zcG9ydC5wcm90b3R5cGUub25DbG9zZS5jYWxsKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsb3NlcyBzb2NrZXQuXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgZG9DbG9zZSgpIHtcbiAgICBpZiAodHlwZW9mIHRoaXMud3MgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIHRoaXMud3MuY2xvc2UoKTtcbiAgICAgIHRoaXMud3MgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZW5lcmF0ZXMgdXJpIGZvciBjb25uZWN0aW9uLlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIHVyaSgpIHtcbiAgICBsZXQgcXVlcnkgPSB0aGlzLnF1ZXJ5IHx8IHt9O1xuICAgIGNvbnN0IHNjaGVtYSA9IHRoaXMub3B0cy5zZWN1cmUgPyBcIndzc1wiIDogXCJ3c1wiO1xuICAgIGxldCBwb3J0ID0gXCJcIjtcblxuICAgIC8vIGF2b2lkIHBvcnQgaWYgZGVmYXVsdCBmb3Igc2NoZW1hXG4gICAgaWYgKFxuICAgICAgdGhpcy5vcHRzLnBvcnQgJiZcbiAgICAgICgoXCJ3c3NcIiA9PT0gc2NoZW1hICYmIE51bWJlcih0aGlzLm9wdHMucG9ydCkgIT09IDQ0MykgfHxcbiAgICAgICAgKFwid3NcIiA9PT0gc2NoZW1hICYmIE51bWJlcih0aGlzLm9wdHMucG9ydCkgIT09IDgwKSlcbiAgICApIHtcbiAgICAgIHBvcnQgPSBcIjpcIiArIHRoaXMub3B0cy5wb3J0O1xuICAgIH1cblxuICAgIC8vIGFwcGVuZCB0aW1lc3RhbXAgdG8gVVJJXG4gICAgaWYgKHRoaXMub3B0cy50aW1lc3RhbXBSZXF1ZXN0cykge1xuICAgICAgcXVlcnlbdGhpcy5vcHRzLnRpbWVzdGFtcFBhcmFtXSA9IHllYXN0KCk7XG4gICAgfVxuXG4gICAgLy8gY29tbXVuaWNhdGUgYmluYXJ5IHN1cHBvcnQgY2FwYWJpbGl0aWVzXG4gICAgaWYgKCF0aGlzLnN1cHBvcnRzQmluYXJ5KSB7XG4gICAgICBxdWVyeS5iNjQgPSAxO1xuICAgIH1cblxuICAgIHF1ZXJ5ID0gcGFyc2Vxcy5lbmNvZGUocXVlcnkpO1xuXG4gICAgLy8gcHJlcGVuZCA/IHRvIHF1ZXJ5XG4gICAgaWYgKHF1ZXJ5Lmxlbmd0aCkge1xuICAgICAgcXVlcnkgPSBcIj9cIiArIHF1ZXJ5O1xuICAgIH1cblxuICAgIGNvbnN0IGlwdjYgPSB0aGlzLm9wdHMuaG9zdG5hbWUuaW5kZXhPZihcIjpcIikgIT09IC0xO1xuICAgIHJldHVybiAoXG4gICAgICBzY2hlbWEgK1xuICAgICAgXCI6Ly9cIiArXG4gICAgICAoaXB2NiA/IFwiW1wiICsgdGhpcy5vcHRzLmhvc3RuYW1lICsgXCJdXCIgOiB0aGlzLm9wdHMuaG9zdG5hbWUpICtcbiAgICAgIHBvcnQgK1xuICAgICAgdGhpcy5vcHRzLnBhdGggK1xuICAgICAgcXVlcnlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEZlYXR1cmUgZGV0ZWN0aW9uIGZvciBXZWJTb2NrZXQuXG4gICAqXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59IHdoZXRoZXIgdGhpcyB0cmFuc3BvcnQgaXMgYXZhaWxhYmxlLlxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cbiAgY2hlY2soKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICEhV2ViU29ja2V0ICYmXG4gICAgICAhKFwiX19pbml0aWFsaXplXCIgaW4gV2ViU29ja2V0ICYmIHRoaXMubmFtZSA9PT0gV1MucHJvdG90eXBlLm5hbWUpXG4gICAgKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFdTO1xuIiwibW9kdWxlLmV4cG9ydHMucGljayA9IChvYmosIC4uLmF0dHIpID0+IHtcbiAgcmV0dXJuIGF0dHIucmVkdWNlKChhY2MsIGspID0+IHtcbiAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICBhY2Nba10gPSBvYmpba107XG4gICAgfVxuICAgIHJldHVybiBhY2M7XG4gIH0sIHt9KTtcbn07XG4iLCIvLyBicm93c2VyIHNoaW0gZm9yIHhtbGh0dHByZXF1ZXN0IG1vZHVsZVxuXG5jb25zdCBoYXNDT1JTID0gcmVxdWlyZShcImhhcy1jb3JzXCIpO1xuY29uc3QgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoXCIuL2dsb2JhbFRoaXNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3B0cykge1xuICBjb25zdCB4ZG9tYWluID0gb3B0cy54ZG9tYWluO1xuXG4gIC8vIHNjaGVtZSBtdXN0IGJlIHNhbWUgd2hlbiB1c2lnbiBYRG9tYWluUmVxdWVzdFxuICAvLyBodHRwOi8vYmxvZ3MubXNkbi5jb20vYi9pZWludGVybmFscy9hcmNoaXZlLzIwMTAvMDUvMTMveGRvbWFpbnJlcXVlc3QtcmVzdHJpY3Rpb25zLWxpbWl0YXRpb25zLWFuZC13b3JrYXJvdW5kcy5hc3B4XG4gIGNvbnN0IHhzY2hlbWUgPSBvcHRzLnhzY2hlbWU7XG5cbiAgLy8gWERvbWFpblJlcXVlc3QgaGFzIGEgZmxvdyBvZiBub3Qgc2VuZGluZyBjb29raWUsIHRoZXJlZm9yZSBpdCBzaG91bGQgYmUgZGlzYWJsZWQgYXMgYSBkZWZhdWx0LlxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vQXV0b21hdHRpYy9lbmdpbmUuaW8tY2xpZW50L3B1bGwvMjE3XG4gIGNvbnN0IGVuYWJsZXNYRFIgPSBvcHRzLmVuYWJsZXNYRFI7XG5cbiAgLy8gWE1MSHR0cFJlcXVlc3QgY2FuIGJlIGRpc2FibGVkIG9uIElFXG4gIHRyeSB7XG4gICAgaWYgKFwidW5kZWZpbmVkXCIgIT09IHR5cGVvZiBYTUxIdHRwUmVxdWVzdCAmJiAoIXhkb21haW4gfHwgaGFzQ09SUykpIHtcbiAgICAgIHJldHVybiBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHt9XG5cbiAgLy8gVXNlIFhEb21haW5SZXF1ZXN0IGZvciBJRTggaWYgZW5hYmxlc1hEUiBpcyB0cnVlXG4gIC8vIGJlY2F1c2UgbG9hZGluZyBiYXIga2VlcHMgZmxhc2hpbmcgd2hlbiB1c2luZyBqc29ucC1wb2xsaW5nXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS95dWppb3Nha2Evc29ja2UuaW8taWU4LWxvYWRpbmctZXhhbXBsZVxuICB0cnkge1xuICAgIGlmIChcInVuZGVmaW5lZFwiICE9PSB0eXBlb2YgWERvbWFpblJlcXVlc3QgJiYgIXhzY2hlbWUgJiYgZW5hYmxlc1hEUikge1xuICAgICAgcmV0dXJuIG5ldyBYRG9tYWluUmVxdWVzdCgpO1xuICAgIH1cbiAgfSBjYXRjaCAoZSkge31cblxuICBpZiAoIXhkb21haW4pIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIG5ldyBnbG9iYWxUaGlzW1tcIkFjdGl2ZVwiXS5jb25jYXQoXCJPYmplY3RcIikuam9pbihcIlhcIildKFxuICAgICAgICBcIk1pY3Jvc29mdC5YTUxIVFRQXCJcbiAgICAgICk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxufTtcbiIsImNvbnN0IFBBQ0tFVF9UWVBFUyA9IE9iamVjdC5jcmVhdGUobnVsbCk7IC8vIG5vIE1hcCA9IG5vIHBvbHlmaWxsXG5QQUNLRVRfVFlQRVNbXCJvcGVuXCJdID0gXCIwXCI7XG5QQUNLRVRfVFlQRVNbXCJjbG9zZVwiXSA9IFwiMVwiO1xuUEFDS0VUX1RZUEVTW1wicGluZ1wiXSA9IFwiMlwiO1xuUEFDS0VUX1RZUEVTW1wicG9uZ1wiXSA9IFwiM1wiO1xuUEFDS0VUX1RZUEVTW1wibWVzc2FnZVwiXSA9IFwiNFwiO1xuUEFDS0VUX1RZUEVTW1widXBncmFkZVwiXSA9IFwiNVwiO1xuUEFDS0VUX1RZUEVTW1wibm9vcFwiXSA9IFwiNlwiO1xuXG5jb25zdCBQQUNLRVRfVFlQRVNfUkVWRVJTRSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5PYmplY3Qua2V5cyhQQUNLRVRfVFlQRVMpLmZvckVhY2goa2V5ID0+IHtcbiAgUEFDS0VUX1RZUEVTX1JFVkVSU0VbUEFDS0VUX1RZUEVTW2tleV1dID0ga2V5O1xufSk7XG5cbmNvbnN0IEVSUk9SX1BBQ0tFVCA9IHsgdHlwZTogXCJlcnJvclwiLCBkYXRhOiBcInBhcnNlciBlcnJvclwiIH07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBQQUNLRVRfVFlQRVMsXG4gIFBBQ0tFVF9UWVBFU19SRVZFUlNFLFxuICBFUlJPUl9QQUNLRVRcbn07XG4iLCJjb25zdCB7IFBBQ0tFVF9UWVBFU19SRVZFUlNFLCBFUlJPUl9QQUNLRVQgfSA9IHJlcXVpcmUoXCIuL2NvbW1vbnNcIik7XG5cbmNvbnN0IHdpdGhOYXRpdmVBcnJheUJ1ZmZlciA9IHR5cGVvZiBBcnJheUJ1ZmZlciA9PT0gXCJmdW5jdGlvblwiO1xuXG5sZXQgYmFzZTY0ZGVjb2RlcjtcbmlmICh3aXRoTmF0aXZlQXJyYXlCdWZmZXIpIHtcbiAgYmFzZTY0ZGVjb2RlciA9IHJlcXVpcmUoXCJiYXNlNjQtYXJyYXlidWZmZXJcIik7XG59XG5cbmNvbnN0IGRlY29kZVBhY2tldCA9IChlbmNvZGVkUGFja2V0LCBiaW5hcnlUeXBlKSA9PiB7XG4gIGlmICh0eXBlb2YgZW5jb2RlZFBhY2tldCAhPT0gXCJzdHJpbmdcIikge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBcIm1lc3NhZ2VcIixcbiAgICAgIGRhdGE6IG1hcEJpbmFyeShlbmNvZGVkUGFja2V0LCBiaW5hcnlUeXBlKVxuICAgIH07XG4gIH1cbiAgY29uc3QgdHlwZSA9IGVuY29kZWRQYWNrZXQuY2hhckF0KDApO1xuICBpZiAodHlwZSA9PT0gXCJiXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogXCJtZXNzYWdlXCIsXG4gICAgICBkYXRhOiBkZWNvZGVCYXNlNjRQYWNrZXQoZW5jb2RlZFBhY2tldC5zdWJzdHJpbmcoMSksIGJpbmFyeVR5cGUpXG4gICAgfTtcbiAgfVxuICBjb25zdCBwYWNrZXRUeXBlID0gUEFDS0VUX1RZUEVTX1JFVkVSU0VbdHlwZV07XG4gIGlmICghcGFja2V0VHlwZSkge1xuICAgIHJldHVybiBFUlJPUl9QQUNLRVQ7XG4gIH1cbiAgcmV0dXJuIGVuY29kZWRQYWNrZXQubGVuZ3RoID4gMVxuICAgID8ge1xuICAgICAgICB0eXBlOiBQQUNLRVRfVFlQRVNfUkVWRVJTRVt0eXBlXSxcbiAgICAgICAgZGF0YTogZW5jb2RlZFBhY2tldC5zdWJzdHJpbmcoMSlcbiAgICAgIH1cbiAgICA6IHtcbiAgICAgICAgdHlwZTogUEFDS0VUX1RZUEVTX1JFVkVSU0VbdHlwZV1cbiAgICAgIH07XG59O1xuXG5jb25zdCBkZWNvZGVCYXNlNjRQYWNrZXQgPSAoZGF0YSwgYmluYXJ5VHlwZSkgPT4ge1xuICBpZiAoYmFzZTY0ZGVjb2Rlcikge1xuICAgIGNvbnN0IGRlY29kZWQgPSBiYXNlNjRkZWNvZGVyLmRlY29kZShkYXRhKTtcbiAgICByZXR1cm4gbWFwQmluYXJ5KGRlY29kZWQsIGJpbmFyeVR5cGUpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB7IGJhc2U2NDogdHJ1ZSwgZGF0YSB9OyAvLyBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzXG4gIH1cbn07XG5cbmNvbnN0IG1hcEJpbmFyeSA9IChkYXRhLCBiaW5hcnlUeXBlKSA9PiB7XG4gIHN3aXRjaCAoYmluYXJ5VHlwZSkge1xuICAgIGNhc2UgXCJibG9iXCI6XG4gICAgICByZXR1cm4gZGF0YSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyID8gbmV3IEJsb2IoW2RhdGFdKSA6IGRhdGE7XG4gICAgY2FzZSBcImFycmF5YnVmZmVyXCI6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBkYXRhOyAvLyBhc3N1bWluZyB0aGUgZGF0YSBpcyBhbHJlYWR5IGFuIEFycmF5QnVmZmVyXG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZGVjb2RlUGFja2V0O1xuIiwiY29uc3QgeyBQQUNLRVRfVFlQRVMgfSA9IHJlcXVpcmUoXCIuL2NvbW1vbnNcIik7XG5cbmNvbnN0IHdpdGhOYXRpdmVCbG9iID1cbiAgdHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiB8fFxuICAodHlwZW9mIEJsb2IgIT09IFwidW5kZWZpbmVkXCIgJiZcbiAgICBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoQmxvYikgPT09IFwiW29iamVjdCBCbG9iQ29uc3RydWN0b3JdXCIpO1xuY29uc3Qgd2l0aE5hdGl2ZUFycmF5QnVmZmVyID0gdHlwZW9mIEFycmF5QnVmZmVyID09PSBcImZ1bmN0aW9uXCI7XG5cbi8vIEFycmF5QnVmZmVyLmlzVmlldyBtZXRob2QgaXMgbm90IGRlZmluZWQgaW4gSUUxMFxuY29uc3QgaXNWaWV3ID0gb2JqID0+IHtcbiAgcmV0dXJuIHR5cGVvZiBBcnJheUJ1ZmZlci5pc1ZpZXcgPT09IFwiZnVuY3Rpb25cIlxuICAgID8gQXJyYXlCdWZmZXIuaXNWaWV3KG9iailcbiAgICA6IG9iaiAmJiBvYmouYnVmZmVyIGluc3RhbmNlb2YgQXJyYXlCdWZmZXI7XG59O1xuXG5jb25zdCBlbmNvZGVQYWNrZXQgPSAoeyB0eXBlLCBkYXRhIH0sIHN1cHBvcnRzQmluYXJ5LCBjYWxsYmFjaykgPT4ge1xuICBpZiAod2l0aE5hdGl2ZUJsb2IgJiYgZGF0YSBpbnN0YW5jZW9mIEJsb2IpIHtcbiAgICBpZiAoc3VwcG9ydHNCaW5hcnkpIHtcbiAgICAgIHJldHVybiBjYWxsYmFjayhkYXRhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGVuY29kZUJsb2JBc0Jhc2U2NChkYXRhLCBjYWxsYmFjayk7XG4gICAgfVxuICB9IGVsc2UgaWYgKFxuICAgIHdpdGhOYXRpdmVBcnJheUJ1ZmZlciAmJlxuICAgIChkYXRhIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIgfHwgaXNWaWV3KGRhdGEpKVxuICApIHtcbiAgICBpZiAoc3VwcG9ydHNCaW5hcnkpIHtcbiAgICAgIHJldHVybiBjYWxsYmFjayhkYXRhIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIgPyBkYXRhIDogZGF0YS5idWZmZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZW5jb2RlQmxvYkFzQmFzZTY0KG5ldyBCbG9iKFtkYXRhXSksIGNhbGxiYWNrKTtcbiAgICB9XG4gIH1cbiAgLy8gcGxhaW4gc3RyaW5nXG4gIHJldHVybiBjYWxsYmFjayhQQUNLRVRfVFlQRVNbdHlwZV0gKyAoZGF0YSB8fCBcIlwiKSk7XG59O1xuXG5jb25zdCBlbmNvZGVCbG9iQXNCYXNlNjQgPSAoZGF0YSwgY2FsbGJhY2spID0+IHtcbiAgY29uc3QgZmlsZVJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gIGZpbGVSZWFkZXIub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgY29udGVudCA9IGZpbGVSZWFkZXIucmVzdWx0LnNwbGl0KFwiLFwiKVsxXTtcbiAgICBjYWxsYmFjayhcImJcIiArIGNvbnRlbnQpO1xuICB9O1xuICByZXR1cm4gZmlsZVJlYWRlci5yZWFkQXNEYXRhVVJMKGRhdGEpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBlbmNvZGVQYWNrZXQ7XG4iLCJjb25zdCBlbmNvZGVQYWNrZXQgPSByZXF1aXJlKFwiLi9lbmNvZGVQYWNrZXRcIik7XG5jb25zdCBkZWNvZGVQYWNrZXQgPSByZXF1aXJlKFwiLi9kZWNvZGVQYWNrZXRcIik7XG5cbmNvbnN0IFNFUEFSQVRPUiA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMzApOyAvLyBzZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvRGVsaW1pdGVyI0FTQ0lJX2RlbGltaXRlZF90ZXh0XG5cbmNvbnN0IGVuY29kZVBheWxvYWQgPSAocGFja2V0cywgY2FsbGJhY2spID0+IHtcbiAgLy8gc29tZSBwYWNrZXRzIG1heSBiZSBhZGRlZCB0byB0aGUgYXJyYXkgd2hpbGUgZW5jb2RpbmcsIHNvIHRoZSBpbml0aWFsIGxlbmd0aCBtdXN0IGJlIHNhdmVkXG4gIGNvbnN0IGxlbmd0aCA9IHBhY2tldHMubGVuZ3RoO1xuICBjb25zdCBlbmNvZGVkUGFja2V0cyA9IG5ldyBBcnJheShsZW5ndGgpO1xuICBsZXQgY291bnQgPSAwO1xuXG4gIHBhY2tldHMuZm9yRWFjaCgocGFja2V0LCBpKSA9PiB7XG4gICAgLy8gZm9yY2UgYmFzZTY0IGVuY29kaW5nIGZvciBiaW5hcnkgcGFja2V0c1xuICAgIGVuY29kZVBhY2tldChwYWNrZXQsIGZhbHNlLCBlbmNvZGVkUGFja2V0ID0+IHtcbiAgICAgIGVuY29kZWRQYWNrZXRzW2ldID0gZW5jb2RlZFBhY2tldDtcbiAgICAgIGlmICgrK2NvdW50ID09PSBsZW5ndGgpIHtcbiAgICAgICAgY2FsbGJhY2soZW5jb2RlZFBhY2tldHMuam9pbihTRVBBUkFUT1IpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59O1xuXG5jb25zdCBkZWNvZGVQYXlsb2FkID0gKGVuY29kZWRQYXlsb2FkLCBiaW5hcnlUeXBlKSA9PiB7XG4gIGNvbnN0IGVuY29kZWRQYWNrZXRzID0gZW5jb2RlZFBheWxvYWQuc3BsaXQoU0VQQVJBVE9SKTtcbiAgY29uc3QgcGFja2V0cyA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGVuY29kZWRQYWNrZXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgZGVjb2RlZFBhY2tldCA9IGRlY29kZVBhY2tldChlbmNvZGVkUGFja2V0c1tpXSwgYmluYXJ5VHlwZSk7XG4gICAgcGFja2V0cy5wdXNoKGRlY29kZWRQYWNrZXQpO1xuICAgIGlmIChkZWNvZGVkUGFja2V0LnR5cGUgPT09IFwiZXJyb3JcIikge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiBwYWNrZXRzO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHByb3RvY29sOiA0LFxuICBlbmNvZGVQYWNrZXQsXG4gIGVuY29kZVBheWxvYWQsXG4gIGRlY29kZVBhY2tldCxcbiAgZGVjb2RlUGF5bG9hZFxufTtcbiIsIlxuLyoqXG4gKiBNb2R1bGUgZXhwb3J0cy5cbiAqXG4gKiBMb2dpYyBib3Jyb3dlZCBmcm9tIE1vZGVybml6cjpcbiAqXG4gKiAgIC0gaHR0cHM6Ly9naXRodWIuY29tL01vZGVybml6ci9Nb2Rlcm5penIvYmxvYi9tYXN0ZXIvZmVhdHVyZS1kZXRlY3RzL2NvcnMuanNcbiAqL1xuXG50cnkge1xuICBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiBYTUxIdHRwUmVxdWVzdCAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAnd2l0aENyZWRlbnRpYWxzJyBpbiBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbn0gY2F0Y2ggKGVycikge1xuICAvLyBpZiBYTUxIdHRwIHN1cHBvcnQgaXMgZGlzYWJsZWQgaW4gSUUgdGhlbiBpdCB3aWxsIHRocm93XG4gIC8vIHdoZW4gdHJ5aW5nIHRvIGNyZWF0ZVxuICBtb2R1bGUuZXhwb3J0cyA9IGZhbHNlO1xufVxuIiwiLypcbiAgaHR0cHM6Ly9naXRodWIuY29tL2JhbmtzZWFuIHdyYXBwZWQgTWFrb3RvIE1hdHN1bW90byBhbmQgVGFrdWppIE5pc2hpbXVyYSdzIGNvZGUgaW4gYSBuYW1lc3BhY2VcbiAgc28gaXQncyBiZXR0ZXIgZW5jYXBzdWxhdGVkLiBOb3cgeW91IGNhbiBoYXZlIG11bHRpcGxlIHJhbmRvbSBudW1iZXIgZ2VuZXJhdG9yc1xuICBhbmQgdGhleSB3b24ndCBzdG9tcCBhbGwgb3ZlciBlYWNob3RoZXIncyBzdGF0ZS5cblxuICBJZiB5b3Ugd2FudCB0byB1c2UgdGhpcyBhcyBhIHN1YnN0aXR1dGUgZm9yIE1hdGgucmFuZG9tKCksIHVzZSB0aGUgcmFuZG9tKClcbiAgbWV0aG9kIGxpa2Ugc286XG5cbiAgdmFyIG0gPSBuZXcgTWVyc2VubmVUd2lzdGVyKCk7XG4gIHZhciByYW5kb21OdW1iZXIgPSBtLnJhbmRvbSgpO1xuXG4gIFlvdSBjYW4gYWxzbyBjYWxsIHRoZSBvdGhlciBnZW5yYW5kX3tmb299KCkgbWV0aG9kcyBvbiB0aGUgaW5zdGFuY2UuXG5cbiAgSWYgeW91IHdhbnQgdG8gdXNlIGEgc3BlY2lmaWMgc2VlZCBpbiBvcmRlciB0byBnZXQgYSByZXBlYXRhYmxlIHJhbmRvbVxuICBzZXF1ZW5jZSwgcGFzcyBhbiBpbnRlZ2VyIGludG8gdGhlIGNvbnN0cnVjdG9yOlxuXG4gIHZhciBtID0gbmV3IE1lcnNlbm5lVHdpc3RlcigxMjMpO1xuXG4gIGFuZCB0aGF0IHdpbGwgYWx3YXlzIHByb2R1Y2UgdGhlIHNhbWUgcmFuZG9tIHNlcXVlbmNlLlxuXG4gIFNlYW4gTWNDdWxsb3VnaCAoYmFua3NlYW5AZ21haWwuY29tKVxuKi9cblxuLypcbiAgIEEgQy1wcm9ncmFtIGZvciBNVDE5OTM3LCB3aXRoIGluaXRpYWxpemF0aW9uIGltcHJvdmVkIDIwMDIvMS8yNi5cbiAgIENvZGVkIGJ5IFRha3VqaSBOaXNoaW11cmEgYW5kIE1ha290byBNYXRzdW1vdG8uXG5cbiAgIEJlZm9yZSB1c2luZywgaW5pdGlhbGl6ZSB0aGUgc3RhdGUgYnkgdXNpbmcgaW5pdF9zZWVkKHNlZWQpXG4gICBvciBpbml0X2J5X2FycmF5KGluaXRfa2V5LCBrZXlfbGVuZ3RoKS5cblxuICAgQ29weXJpZ2h0IChDKSAxOTk3IC0gMjAwMiwgTWFrb3RvIE1hdHN1bW90byBhbmQgVGFrdWppIE5pc2hpbXVyYSxcbiAgIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5cbiAgIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dFxuICAgbW9kaWZpY2F0aW9uLCBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zXG4gICBhcmUgbWV0OlxuXG4gICAgIDEuIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0XG4gICAgICAgIG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cblxuICAgICAyLiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodFxuICAgICAgICBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIgaW4gdGhlXG4gICAgICAgIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZSBkaXN0cmlidXRpb24uXG5cbiAgICAgMy4gVGhlIG5hbWVzIG9mIGl0cyBjb250cmlidXRvcnMgbWF5IG5vdCBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZVxuICAgICAgICBwcm9kdWN0cyBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZSB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW5cbiAgICAgICAgcGVybWlzc2lvbi5cblxuICAgVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SU1xuICAgXCJBUyBJU1wiIEFORCBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVFxuICAgTElNSVRFRCBUTywgVEhFIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SXG4gICBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC4gIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFQgT1dORVIgT1JcbiAgIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLFxuICAgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLFxuICAgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsIERBVEEsIE9SXG4gICBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZIE9GXG4gICBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElOR1xuICAgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRSBPRiBUSElTXG4gICBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRSBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cblxuXG4gICBBbnkgZmVlZGJhY2sgaXMgdmVyeSB3ZWxjb21lLlxuICAgaHR0cDovL3d3dy5tYXRoLnNjaS5oaXJvc2hpbWEtdS5hYy5qcC9+bS1tYXQvTVQvZW10Lmh0bWxcbiAgIGVtYWlsOiBtLW1hdCBAIG1hdGguc2NpLmhpcm9zaGltYS11LmFjLmpwIChyZW1vdmUgc3BhY2UpXG4qL1xuXG52YXIgTWVyc2VubmVUd2lzdGVyID0gZnVuY3Rpb24oc2VlZCkge1xuXHRpZiAoc2VlZCA9PSB1bmRlZmluZWQpIHtcblx0XHRzZWVkID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cdH1cblxuXHQvKiBQZXJpb2QgcGFyYW1ldGVycyAqL1xuXHR0aGlzLk4gPSA2MjQ7XG5cdHRoaXMuTSA9IDM5Nztcblx0dGhpcy5NQVRSSVhfQSA9IDB4OTkwOGIwZGY7ICAgLyogY29uc3RhbnQgdmVjdG9yIGEgKi9cblx0dGhpcy5VUFBFUl9NQVNLID0gMHg4MDAwMDAwMDsgLyogbW9zdCBzaWduaWZpY2FudCB3LXIgYml0cyAqL1xuXHR0aGlzLkxPV0VSX01BU0sgPSAweDdmZmZmZmZmOyAvKiBsZWFzdCBzaWduaWZpY2FudCByIGJpdHMgKi9cblxuXHR0aGlzLm10ID0gbmV3IEFycmF5KHRoaXMuTik7IC8qIHRoZSBhcnJheSBmb3IgdGhlIHN0YXRlIHZlY3RvciAqL1xuXHR0aGlzLm10aT10aGlzLk4rMTsgLyogbXRpPT1OKzEgbWVhbnMgbXRbTl0gaXMgbm90IGluaXRpYWxpemVkICovXG5cblx0aWYgKHNlZWQuY29uc3RydWN0b3IgPT0gQXJyYXkpIHtcblx0XHR0aGlzLmluaXRfYnlfYXJyYXkoc2VlZCwgc2VlZC5sZW5ndGgpO1xuXHR9XG5cdGVsc2Uge1xuXHRcdHRoaXMuaW5pdF9zZWVkKHNlZWQpO1xuXHR9XG59XG5cbi8qIGluaXRpYWxpemVzIG10W05dIHdpdGggYSBzZWVkICovXG4vKiBvcmlnaW4gbmFtZSBpbml0X2dlbnJhbmQgKi9cbk1lcnNlbm5lVHdpc3Rlci5wcm90b3R5cGUuaW5pdF9zZWVkID0gZnVuY3Rpb24ocykge1xuXHR0aGlzLm10WzBdID0gcyA+Pj4gMDtcblx0Zm9yICh0aGlzLm10aT0xOyB0aGlzLm10aTx0aGlzLk47IHRoaXMubXRpKyspIHtcblx0XHR2YXIgcyA9IHRoaXMubXRbdGhpcy5tdGktMV0gXiAodGhpcy5tdFt0aGlzLm10aS0xXSA+Pj4gMzApO1xuXHRcdHRoaXMubXRbdGhpcy5tdGldID0gKCgoKChzICYgMHhmZmZmMDAwMCkgPj4+IDE2KSAqIDE4MTI0MzMyNTMpIDw8IDE2KSArIChzICYgMHgwMDAwZmZmZikgKiAxODEyNDMzMjUzKVxuXHRcdCsgdGhpcy5tdGk7XG5cdFx0LyogU2VlIEtudXRoIFRBT0NQIFZvbDIuIDNyZCBFZC4gUC4xMDYgZm9yIG11bHRpcGxpZXIuICovXG5cdFx0LyogSW4gdGhlIHByZXZpb3VzIHZlcnNpb25zLCBNU0JzIG9mIHRoZSBzZWVkIGFmZmVjdCAgICovXG5cdFx0Lyogb25seSBNU0JzIG9mIHRoZSBhcnJheSBtdFtdLiAgICAgICAgICAgICAgICAgICAgICAgICovXG5cdFx0LyogMjAwMi8wMS8wOSBtb2RpZmllZCBieSBNYWtvdG8gTWF0c3Vtb3RvICAgICAgICAgICAgICovXG5cdFx0dGhpcy5tdFt0aGlzLm10aV0gPj4+PSAwO1xuXHRcdC8qIGZvciA+MzIgYml0IG1hY2hpbmVzICovXG5cdH1cbn1cblxuLyogaW5pdGlhbGl6ZSBieSBhbiBhcnJheSB3aXRoIGFycmF5LWxlbmd0aCAqL1xuLyogaW5pdF9rZXkgaXMgdGhlIGFycmF5IGZvciBpbml0aWFsaXppbmcga2V5cyAqL1xuLyoga2V5X2xlbmd0aCBpcyBpdHMgbGVuZ3RoICovXG4vKiBzbGlnaHQgY2hhbmdlIGZvciBDKyssIDIwMDQvMi8yNiAqL1xuTWVyc2VubmVUd2lzdGVyLnByb3RvdHlwZS5pbml0X2J5X2FycmF5ID0gZnVuY3Rpb24oaW5pdF9rZXksIGtleV9sZW5ndGgpIHtcblx0dmFyIGksIGosIGs7XG5cdHRoaXMuaW5pdF9zZWVkKDE5NjUwMjE4KTtcblx0aT0xOyBqPTA7XG5cdGsgPSAodGhpcy5OPmtleV9sZW5ndGggPyB0aGlzLk4gOiBrZXlfbGVuZ3RoKTtcblx0Zm9yICg7IGs7IGstLSkge1xuXHRcdHZhciBzID0gdGhpcy5tdFtpLTFdIF4gKHRoaXMubXRbaS0xXSA+Pj4gMzApXG5cdFx0dGhpcy5tdFtpXSA9ICh0aGlzLm10W2ldIF4gKCgoKChzICYgMHhmZmZmMDAwMCkgPj4+IDE2KSAqIDE2NjQ1MjUpIDw8IDE2KSArICgocyAmIDB4MDAwMGZmZmYpICogMTY2NDUyNSkpKVxuXHRcdCsgaW5pdF9rZXlbal0gKyBqOyAvKiBub24gbGluZWFyICovXG5cdFx0dGhpcy5tdFtpXSA+Pj49IDA7IC8qIGZvciBXT1JEU0laRSA+IDMyIG1hY2hpbmVzICovXG5cdFx0aSsrOyBqKys7XG5cdFx0aWYgKGk+PXRoaXMuTikgeyB0aGlzLm10WzBdID0gdGhpcy5tdFt0aGlzLk4tMV07IGk9MTsgfVxuXHRcdGlmIChqPj1rZXlfbGVuZ3RoKSBqPTA7XG5cdH1cblx0Zm9yIChrPXRoaXMuTi0xOyBrOyBrLS0pIHtcblx0XHR2YXIgcyA9IHRoaXMubXRbaS0xXSBeICh0aGlzLm10W2ktMV0gPj4+IDMwKTtcblx0XHR0aGlzLm10W2ldID0gKHRoaXMubXRbaV0gXiAoKCgoKHMgJiAweGZmZmYwMDAwKSA+Pj4gMTYpICogMTU2NjA4Mzk0MSkgPDwgMTYpICsgKHMgJiAweDAwMDBmZmZmKSAqIDE1NjYwODM5NDEpKVxuXHRcdC0gaTsgLyogbm9uIGxpbmVhciAqL1xuXHRcdHRoaXMubXRbaV0gPj4+PSAwOyAvKiBmb3IgV09SRFNJWkUgPiAzMiBtYWNoaW5lcyAqL1xuXHRcdGkrKztcblx0XHRpZiAoaT49dGhpcy5OKSB7IHRoaXMubXRbMF0gPSB0aGlzLm10W3RoaXMuTi0xXTsgaT0xOyB9XG5cdH1cblxuXHR0aGlzLm10WzBdID0gMHg4MDAwMDAwMDsgLyogTVNCIGlzIDE7IGFzc3VyaW5nIG5vbi16ZXJvIGluaXRpYWwgYXJyYXkgKi9cbn1cblxuLyogZ2VuZXJhdGVzIGEgcmFuZG9tIG51bWJlciBvbiBbMCwweGZmZmZmZmZmXS1pbnRlcnZhbCAqL1xuLyogb3JpZ2luIG5hbWUgZ2VucmFuZF9pbnQzMiAqL1xuTWVyc2VubmVUd2lzdGVyLnByb3RvdHlwZS5yYW5kb21faW50ID0gZnVuY3Rpb24oKSB7XG5cdHZhciB5O1xuXHR2YXIgbWFnMDEgPSBuZXcgQXJyYXkoMHgwLCB0aGlzLk1BVFJJWF9BKTtcblx0LyogbWFnMDFbeF0gPSB4ICogTUFUUklYX0EgIGZvciB4PTAsMSAqL1xuXG5cdGlmICh0aGlzLm10aSA+PSB0aGlzLk4pIHsgLyogZ2VuZXJhdGUgTiB3b3JkcyBhdCBvbmUgdGltZSAqL1xuXHRcdHZhciBraztcblxuXHRcdGlmICh0aGlzLm10aSA9PSB0aGlzLk4rMSkgIC8qIGlmIGluaXRfc2VlZCgpIGhhcyBub3QgYmVlbiBjYWxsZWQsICovXG5cdFx0XHR0aGlzLmluaXRfc2VlZCg1NDg5KTsgIC8qIGEgZGVmYXVsdCBpbml0aWFsIHNlZWQgaXMgdXNlZCAqL1xuXG5cdFx0Zm9yIChraz0wO2trPHRoaXMuTi10aGlzLk07a2srKykge1xuXHRcdFx0eSA9ICh0aGlzLm10W2trXSZ0aGlzLlVQUEVSX01BU0spfCh0aGlzLm10W2trKzFdJnRoaXMuTE9XRVJfTUFTSyk7XG5cdFx0XHR0aGlzLm10W2trXSA9IHRoaXMubXRba2srdGhpcy5NXSBeICh5ID4+PiAxKSBeIG1hZzAxW3kgJiAweDFdO1xuXHRcdH1cblx0XHRmb3IgKDtrazx0aGlzLk4tMTtraysrKSB7XG5cdFx0XHR5ID0gKHRoaXMubXRba2tdJnRoaXMuVVBQRVJfTUFTSyl8KHRoaXMubXRba2srMV0mdGhpcy5MT1dFUl9NQVNLKTtcblx0XHRcdHRoaXMubXRba2tdID0gdGhpcy5tdFtraysodGhpcy5NLXRoaXMuTildIF4gKHkgPj4+IDEpIF4gbWFnMDFbeSAmIDB4MV07XG5cdFx0fVxuXHRcdHkgPSAodGhpcy5tdFt0aGlzLk4tMV0mdGhpcy5VUFBFUl9NQVNLKXwodGhpcy5tdFswXSZ0aGlzLkxPV0VSX01BU0spO1xuXHRcdHRoaXMubXRbdGhpcy5OLTFdID0gdGhpcy5tdFt0aGlzLk0tMV0gXiAoeSA+Pj4gMSkgXiBtYWcwMVt5ICYgMHgxXTtcblxuXHRcdHRoaXMubXRpID0gMDtcblx0fVxuXG5cdHkgPSB0aGlzLm10W3RoaXMubXRpKytdO1xuXG5cdC8qIFRlbXBlcmluZyAqL1xuXHR5IF49ICh5ID4+PiAxMSk7XG5cdHkgXj0gKHkgPDwgNykgJiAweDlkMmM1NjgwO1xuXHR5IF49ICh5IDw8IDE1KSAmIDB4ZWZjNjAwMDA7XG5cdHkgXj0gKHkgPj4+IDE4KTtcblxuXHRyZXR1cm4geSA+Pj4gMDtcbn1cblxuLyogZ2VuZXJhdGVzIGEgcmFuZG9tIG51bWJlciBvbiBbMCwweDdmZmZmZmZmXS1pbnRlcnZhbCAqL1xuLyogb3JpZ2luIG5hbWUgZ2VucmFuZF9pbnQzMSAqL1xuTWVyc2VubmVUd2lzdGVyLnByb3RvdHlwZS5yYW5kb21faW50MzEgPSBmdW5jdGlvbigpIHtcblx0cmV0dXJuICh0aGlzLnJhbmRvbV9pbnQoKT4+PjEpO1xufVxuXG4vKiBnZW5lcmF0ZXMgYSByYW5kb20gbnVtYmVyIG9uIFswLDFdLXJlYWwtaW50ZXJ2YWwgKi9cbi8qIG9yaWdpbiBuYW1lIGdlbnJhbmRfcmVhbDEgKi9cbk1lcnNlbm5lVHdpc3Rlci5wcm90b3R5cGUucmFuZG9tX2luY2wgPSBmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXMucmFuZG9tX2ludCgpKigxLjAvNDI5NDk2NzI5NS4wKTtcblx0LyogZGl2aWRlZCBieSAyXjMyLTEgKi9cbn1cblxuLyogZ2VuZXJhdGVzIGEgcmFuZG9tIG51bWJlciBvbiBbMCwxKS1yZWFsLWludGVydmFsICovXG5NZXJzZW5uZVR3aXN0ZXIucHJvdG90eXBlLnJhbmRvbSA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcy5yYW5kb21faW50KCkqKDEuMC80Mjk0OTY3Mjk2LjApO1xuXHQvKiBkaXZpZGVkIGJ5IDJeMzIgKi9cbn1cblxuLyogZ2VuZXJhdGVzIGEgcmFuZG9tIG51bWJlciBvbiAoMCwxKS1yZWFsLWludGVydmFsICovXG4vKiBvcmlnaW4gbmFtZSBnZW5yYW5kX3JlYWwzICovXG5NZXJzZW5uZVR3aXN0ZXIucHJvdG90eXBlLnJhbmRvbV9leGNsID0gZnVuY3Rpb24oKSB7XG5cdHJldHVybiAodGhpcy5yYW5kb21faW50KCkgKyAwLjUpKigxLjAvNDI5NDk2NzI5Ni4wKTtcblx0LyogZGl2aWRlZCBieSAyXjMyICovXG59XG5cbi8qIGdlbmVyYXRlcyBhIHJhbmRvbSBudW1iZXIgb24gWzAsMSkgd2l0aCA1My1iaXQgcmVzb2x1dGlvbiovXG4vKiBvcmlnaW4gbmFtZSBnZW5yYW5kX3JlczUzICovXG5NZXJzZW5uZVR3aXN0ZXIucHJvdG90eXBlLnJhbmRvbV9sb25nID0gZnVuY3Rpb24oKSB7XG5cdHZhciBhPXRoaXMucmFuZG9tX2ludCgpPj4+NSwgYj10aGlzLnJhbmRvbV9pbnQoKT4+PjY7XG5cdHJldHVybihhKjY3MTA4ODY0LjArYikqKDEuMC85MDA3MTk5MjU0NzQwOTkyLjApO1xufVxuXG4vKiBUaGVzZSByZWFsIHZlcnNpb25zIGFyZSBkdWUgdG8gSXNha3UgV2FkYSwgMjAwMi8wMS8wOSBhZGRlZCAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1lcnNlbm5lVHdpc3RlcjtcbiIsIi8qKlxuICogQ29tcGlsZXMgYSBxdWVyeXN0cmluZ1xuICogUmV0dXJucyBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIG9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZXhwb3J0cy5lbmNvZGUgPSBmdW5jdGlvbiAob2JqKSB7XG4gIHZhciBzdHIgPSAnJztcblxuICBmb3IgKHZhciBpIGluIG9iaikge1xuICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgIGlmIChzdHIubGVuZ3RoKSBzdHIgKz0gJyYnO1xuICAgICAgc3RyICs9IGVuY29kZVVSSUNvbXBvbmVudChpKSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudChvYmpbaV0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdHI7XG59O1xuXG4vKipcbiAqIFBhcnNlcyBhIHNpbXBsZSBxdWVyeXN0cmluZyBpbnRvIGFuIG9iamVjdFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBxc1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZXhwb3J0cy5kZWNvZGUgPSBmdW5jdGlvbihxcyl7XG4gIHZhciBxcnkgPSB7fTtcbiAgdmFyIHBhaXJzID0gcXMuc3BsaXQoJyYnKTtcbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBwYWlycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICB2YXIgcGFpciA9IHBhaXJzW2ldLnNwbGl0KCc9Jyk7XG4gICAgcXJ5W2RlY29kZVVSSUNvbXBvbmVudChwYWlyWzBdKV0gPSBkZWNvZGVVUklDb21wb25lbnQocGFpclsxXSk7XG4gIH1cbiAgcmV0dXJuIHFyeTtcbn07XG4iLCIvKipcbiAqIFBhcnNlcyBhbiBVUklcbiAqXG4gKiBAYXV0aG9yIFN0ZXZlbiBMZXZpdGhhbiA8c3RldmVubGV2aXRoYW4uY29tPiAoTUlUIGxpY2Vuc2UpXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG52YXIgcmUgPSAvXig/Oig/IVteOkBdKzpbXjpAXFwvXSpAKShodHRwfGh0dHBzfHdzfHdzcyk6XFwvXFwvKT8oKD86KChbXjpAXSopKD86OihbXjpAXSopKT8pP0ApPygoPzpbYS1mMC05XXswLDR9Oil7Miw3fVthLWYwLTldezAsNH18W146XFwvPyNdKikoPzo6KFxcZCopKT8pKCgoXFwvKD86W14/I10oPyFbXj8jXFwvXSpcXC5bXj8jXFwvLl0rKD86Wz8jXXwkKSkpKlxcLz8pPyhbXj8jXFwvXSopKSg/OlxcPyhbXiNdKikpPyg/OiMoLiopKT8pLztcblxudmFyIHBhcnRzID0gW1xuICAgICdzb3VyY2UnLCAncHJvdG9jb2wnLCAnYXV0aG9yaXR5JywgJ3VzZXJJbmZvJywgJ3VzZXInLCAncGFzc3dvcmQnLCAnaG9zdCcsICdwb3J0JywgJ3JlbGF0aXZlJywgJ3BhdGgnLCAnZGlyZWN0b3J5JywgJ2ZpbGUnLCAncXVlcnknLCAnYW5jaG9yJ1xuXTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBwYXJzZXVyaShzdHIpIHtcbiAgICB2YXIgc3JjID0gc3RyLFxuICAgICAgICBiID0gc3RyLmluZGV4T2YoJ1snKSxcbiAgICAgICAgZSA9IHN0ci5pbmRleE9mKCddJyk7XG5cbiAgICBpZiAoYiAhPSAtMSAmJiBlICE9IC0xKSB7XG4gICAgICAgIHN0ciA9IHN0ci5zdWJzdHJpbmcoMCwgYikgKyBzdHIuc3Vic3RyaW5nKGIsIGUpLnJlcGxhY2UoLzovZywgJzsnKSArIHN0ci5zdWJzdHJpbmcoZSwgc3RyLmxlbmd0aCk7XG4gICAgfVxuXG4gICAgdmFyIG0gPSByZS5leGVjKHN0ciB8fCAnJyksXG4gICAgICAgIHVyaSA9IHt9LFxuICAgICAgICBpID0gMTQ7XG5cbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgIHVyaVtwYXJ0c1tpXV0gPSBtW2ldIHx8ICcnO1xuICAgIH1cblxuICAgIGlmIChiICE9IC0xICYmIGUgIT0gLTEpIHtcbiAgICAgICAgdXJpLnNvdXJjZSA9IHNyYztcbiAgICAgICAgdXJpLmhvc3QgPSB1cmkuaG9zdC5zdWJzdHJpbmcoMSwgdXJpLmhvc3QubGVuZ3RoIC0gMSkucmVwbGFjZSgvOy9nLCAnOicpO1xuICAgICAgICB1cmkuYXV0aG9yaXR5ID0gdXJpLmF1dGhvcml0eS5yZXBsYWNlKCdbJywgJycpLnJlcGxhY2UoJ10nLCAnJykucmVwbGFjZSgvOy9nLCAnOicpO1xuICAgICAgICB1cmkuaXB2NnVyaSA9IHRydWU7XG4gICAgfVxuXG4gICAgdXJpLnBhdGhOYW1lcyA9IHBhdGhOYW1lcyh1cmksIHVyaVsncGF0aCddKTtcbiAgICB1cmkucXVlcnlLZXkgPSBxdWVyeUtleSh1cmksIHVyaVsncXVlcnknXSk7XG5cbiAgICByZXR1cm4gdXJpO1xufTtcblxuZnVuY3Rpb24gcGF0aE5hbWVzKG9iaiwgcGF0aCkge1xuICAgIHZhciByZWd4ID0gL1xcL3syLDl9L2csXG4gICAgICAgIG5hbWVzID0gcGF0aC5yZXBsYWNlKHJlZ3gsIFwiL1wiKS5zcGxpdChcIi9cIik7XG5cbiAgICBpZiAocGF0aC5zdWJzdHIoMCwgMSkgPT0gJy8nIHx8IHBhdGgubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIG5hbWVzLnNwbGljZSgwLCAxKTtcbiAgICB9XG4gICAgaWYgKHBhdGguc3Vic3RyKHBhdGgubGVuZ3RoIC0gMSwgMSkgPT0gJy8nKSB7XG4gICAgICAgIG5hbWVzLnNwbGljZShuYW1lcy5sZW5ndGggLSAxLCAxKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmFtZXM7XG59XG5cbmZ1bmN0aW9uIHF1ZXJ5S2V5KHVyaSwgcXVlcnkpIHtcbiAgICB2YXIgZGF0YSA9IHt9O1xuXG4gICAgcXVlcnkucmVwbGFjZSgvKD86XnwmKShbXiY9XSopPT8oW14mXSopL2csIGZ1bmN0aW9uICgkMCwgJDEsICQyKSB7XG4gICAgICAgIGlmICgkMSkge1xuICAgICAgICAgICAgZGF0YVskMV0gPSAkMjtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGRhdGE7XG59XG4iLCJjb25zdCBBUkdfTEVOR1RIID0ge1xuICBhOiA3LFxuICBjOiA2LFxuICBoOiAxLFxuICBsOiAyLFxuICBtOiAyLFxuICBxOiA0LFxuICBzOiA0LFxuICB0OiAyLFxuICB2OiAxLFxuICB6OiAwLFxufTtcblxuY29uc3QgU0VHTUVOVF9QQVRURVJOID0gLyhbYXN0dnpxbWhsY10pKFteYXN0dnpxbWhsY10qKS9naTtcblxuY29uc3QgTlVNQkVSID0gLy0/WzAtOV0qXFwuP1swLTldKyg/OmVbLStdP1xcZCspPy9naTtcblxuZnVuY3Rpb24gcGFyc2VWYWx1ZXMoYXJncykge1xuICBjb25zdCBudW1iZXJzID0gYXJncy5tYXRjaChOVU1CRVIpO1xuICByZXR1cm4gbnVtYmVycyA/IG51bWJlcnMubWFwKE51bWJlcikgOiBbXTtcbn1cblxuLyoqXG4gKiBwYXJzZSBhbiBzdmcgcGF0aCBkYXRhIHN0cmluZy4gR2VuZXJhdGVzIGFuIEFycmF5XG4gKiBvZiBjb21tYW5kcyB3aGVyZSBlYWNoIGNvbW1hbmQgaXMgYW4gQXJyYXkgb2YgdGhlXG4gKiBmb3JtIGBbY29tbWFuZCwgYXJnMSwgYXJnMiwgLi4uXWBcbiAqXG4gKiBodHRwczovL3d3dy53My5vcmcvVFIvU1ZHL3BhdGhzLmh0bWwjUGF0aERhdGFHZW5lcmFsSW5mb3JtYXRpb25cbiAqIEBpZ25vcmVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aFxuICogQHJldHVybnMge2FycmF5fVxuICovXG5mdW5jdGlvbiBwYXJzZShwYXRoKSB7XG4gIGNvbnN0IGRhdGEgPSBbXTtcbiAgY29uc3QgcCA9IFN0cmluZyhwYXRoKS50cmltKCk7XG5cbiAgLy8gQSBwYXRoIGRhdGEgc2VnbWVudCAoaWYgdGhlcmUgaXMgb25lKSBtdXN0IGJlZ2luIHdpdGggYSBcIm1vdmV0b1wiIGNvbW1hbmRcbiAgaWYgKHBbMF0gIT09ICdNJyAmJiBwWzBdICE9PSAnbScpIHtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIHAucmVwbGFjZShTRUdNRU5UX1BBVFRFUk4sIChfLCBjb21tYW5kLCBhcmdzKSA9PiB7XG4gICAgbGV0IHR5cGUgPSBjb21tYW5kLnRvTG93ZXJDYXNlKCk7XG4gICAgbGV0IHRoZUFyZ3MgPSBwYXJzZVZhbHVlcyhhcmdzKTtcbiAgICBsZXQgdGhlQ29tbWFuZCA9IGNvbW1hbmQ7XG4gICAgLy8gb3ZlcmxvYWRlZCBtb3ZlVG9cbiAgICBpZiAodHlwZSA9PT0gJ20nICYmIHRoZUFyZ3MubGVuZ3RoID4gMikge1xuICAgICAgZGF0YS5wdXNoKFt0aGVDb21tYW5kXS5jb25jYXQodGhlQXJncy5zcGxpY2UoMCwgMikpKTtcbiAgICAgIHR5cGUgPSAnbCc7XG4gICAgICB0aGVDb21tYW5kID0gdGhlQ29tbWFuZCA9PT0gJ20nID8gJ2wnIDogJ0wnO1xuICAgIH1cblxuICAgIC8vIElnbm9yZSBpbnZhbGlkIGNvbW1hbmRzXG4gICAgaWYgKHRoZUFyZ3MubGVuZ3RoIDwgQVJHX0xFTkdUSFt0eXBlXSkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIGRhdGEucHVzaChbdGhlQ29tbWFuZF0uY29uY2F0KHRoZUFyZ3Muc3BsaWNlKDAsIEFSR19MRU5HVEhbdHlwZV0pKSk7XG5cbiAgICAvLyBUaGUgY29tbWFuZCBsZXR0ZXIgY2FuIGJlIGVsaW1pbmF0ZWQgb24gc3Vic2VxdWVudCBjb21tYW5kcyBpZiB0aGVcbiAgICAvLyBzYW1lIGNvbW1hbmQgaXMgdXNlZCBtdWx0aXBsZSB0aW1lcyBpbiBhIHJvdyAoZS5nLiwgeW91IGNhbiBkcm9wIHRoZVxuICAgIC8vIHNlY29uZCBcIkxcIiBpbiBcIk0gMTAwIDIwMCBMIDIwMCAxMDAgTCAtMTAwIC0yMDBcIiBhbmQgdXNlXG4gICAgLy8gXCJNIDEwMCAyMDAgTCAyMDAgMTAwIC0xMDAgLTIwMFwiIGluc3RlYWQpLlxuICAgIHdoaWxlIChcbiAgICAgIHRoZUFyZ3MubGVuZ3RoID49IEFSR19MRU5HVEhbdHlwZV0gJiZcbiAgICAgIHRoZUFyZ3MubGVuZ3RoICYmXG4gICAgICBBUkdfTEVOR1RIW3R5cGVdXG4gICAgKSB7XG4gICAgICBkYXRhLnB1c2goW3RoZUNvbW1hbmRdLmNvbmNhdCh0aGVBcmdzLnNwbGljZSgwLCBBUkdfTEVOR1RIW3R5cGVdKSkpO1xuICAgIH1cblxuICAgIHJldHVybiAnJztcbiAgfSk7XG4gIHJldHVybiBkYXRhO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHBhcnNlO1xuIiwiY29uc3QgcGFyc2VQYXRoID0gcmVxdWlyZSgnLi9wYXJzZS1wYXRoJyk7XG5cbi8qKlxuICogV29yayBhcm91bmQgZm9yIGh0dHBzOi8vZGV2ZWxvcGVyLm1pY3Jvc29mdC5jb20vZW4tdXMvbWljcm9zb2Z0LWVkZ2UvcGxhdGZvcm0vaXNzdWVzLzg0Mzg4ODQvXG4gKiBAaWdub3JlXG4gKi9cbmZ1bmN0aW9uIHN1cHBvcnRzU3ZnUGF0aEFyZ3VtZW50KHdpbmRvdykge1xuICBjb25zdCBjYW52YXMgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gIGNvbnN0IGcgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgY29uc3QgcCA9IG5ldyB3aW5kb3cuUGF0aDJEKCdNMCAwIEwxIDEnKTtcbiAgZy5zdHJva2VTdHlsZSA9ICdyZWQnO1xuICBnLmxpbmVXaWR0aCA9IDE7XG4gIGcuc3Ryb2tlKHApO1xuICBjb25zdCBpbWdEYXRhID0gZy5nZXRJbWFnZURhdGEoMCwgMCwgMSwgMSk7XG4gIHJldHVybiBpbWdEYXRhLmRhdGFbMF0gPT09IDI1NTsgLy8gQ2hlY2sgaWYgcGl4ZWwgaXMgcmVkXG59XG5cbmZ1bmN0aW9uIHJvdGF0ZVBvaW50KHBvaW50LCBhbmdsZSkge1xuICBjb25zdCBueCA9IHBvaW50LnggKiBNYXRoLmNvcyhhbmdsZSkgLSBwb2ludC55ICogTWF0aC5zaW4oYW5nbGUpO1xuICBjb25zdCBueSA9IHBvaW50LnkgKiBNYXRoLmNvcyhhbmdsZSkgKyBwb2ludC54ICogTWF0aC5zaW4oYW5nbGUpO1xuICBwb2ludC54ID0gbng7XG4gIHBvaW50LnkgPSBueTtcbn1cblxuZnVuY3Rpb24gdHJhbnNsYXRlUG9pbnQocG9pbnQsIGR4LCBkeSkge1xuICBwb2ludC54ICs9IGR4O1xuICBwb2ludC55ICs9IGR5O1xufVxuXG5mdW5jdGlvbiBzY2FsZVBvaW50KHBvaW50LCBzKSB7XG4gIHBvaW50LnggKj0gcztcbiAgcG9pbnQueSAqPSBzO1xufVxuXG5mdW5jdGlvbiBwb2x5RmlsbFBhdGgyRCh3aW5kb3cpIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8ICF3aW5kb3cuQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmICh3aW5kb3cuUGF0aDJEICYmIHN1cHBvcnRzU3ZnUGF0aEFyZ3VtZW50KHdpbmRvdykpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ3JhdGVzIGEgUGF0aDJEIHBvbHlmaWxsIG9iamVjdFxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQGlnbm9yZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gcGF0aFxuICAgKi9cbiAgY2xhc3MgUGF0aDJEIHtcbiAgICBjb25zdHJ1Y3RvcihwYXRoKSB7XG4gICAgICB0aGlzLnNlZ21lbnRzID0gW107XG4gICAgICBpZiAocGF0aCAmJiBwYXRoIGluc3RhbmNlb2YgUGF0aDJEKSB7XG4gICAgICAgIHRoaXMuc2VnbWVudHMucHVzaCguLi5wYXRoLnNlZ21lbnRzKTtcbiAgICAgIH0gZWxzZSBpZiAocGF0aCkge1xuICAgICAgICB0aGlzLnNlZ21lbnRzID0gcGFyc2VQYXRoKHBhdGgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGFkZFBhdGgocGF0aCkge1xuICAgICAgaWYgKHBhdGggJiYgcGF0aCBpbnN0YW5jZW9mIFBhdGgyRCkge1xuICAgICAgICB0aGlzLnNlZ21lbnRzLnB1c2goLi4ucGF0aC5zZWdtZW50cyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbW92ZVRvKHgsIHkpIHtcbiAgICAgIHRoaXMuc2VnbWVudHMucHVzaChbJ00nLCB4LCB5XSk7XG4gICAgfVxuXG4gICAgbGluZVRvKHgsIHkpIHtcbiAgICAgIHRoaXMuc2VnbWVudHMucHVzaChbJ0wnLCB4LCB5XSk7XG4gICAgfVxuXG4gICAgYXJjKHgsIHksIHIsIHN0YXJ0LCBlbmQsIGNjdykge1xuICAgICAgdGhpcy5zZWdtZW50cy5wdXNoKFsnQUMnLCB4LCB5LCByLCBzdGFydCwgZW5kLCAhIWNjd10pO1xuICAgIH1cblxuICAgIGFyY1RvKHgxLCB5MSwgeDIsIHkyLCByKSB7XG4gICAgICB0aGlzLnNlZ21lbnRzLnB1c2goWydBVCcsIHgxLCB5MSwgeDIsIHkyLCByXSk7XG4gICAgfVxuXG4gICAgZWxsaXBzZSh4LCB5LCByeCwgcnksIGFuZ2xlLCBzdGFydCwgZW5kLCBjY3cpIHtcbiAgICAgIHRoaXMuc2VnbWVudHMucHVzaChbJ0UnLCB4LCB5LCByeCwgcnksIGFuZ2xlLCBzdGFydCwgZW5kLCAhIWNjd10pO1xuICAgIH1cblxuICAgIGNsb3NlUGF0aCgpIHtcbiAgICAgIHRoaXMuc2VnbWVudHMucHVzaChbJ1onXSk7XG4gICAgfVxuXG4gICAgYmV6aWVyQ3VydmVUbyhjcDF4LCBjcDF5LCBjcDJ4LCBjcDJ5LCB4LCB5KSB7XG4gICAgICB0aGlzLnNlZ21lbnRzLnB1c2goWydDJywgY3AxeCwgY3AxeSwgY3AyeCwgY3AyeSwgeCwgeV0pO1xuICAgIH1cblxuICAgIHF1YWRyYXRpY0N1cnZlVG8oY3B4LCBjcHksIHgsIHkpIHtcbiAgICAgIHRoaXMuc2VnbWVudHMucHVzaChbJ1EnLCBjcHgsIGNweSwgeCwgeV0pO1xuICAgIH1cblxuICAgIHJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuICAgICAgdGhpcy5zZWdtZW50cy5wdXNoKFsnUicsIHgsIHksIHdpZHRoLCBoZWlnaHRdKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBidWlsZFBhdGgoY2FudmFzLCBzZWdtZW50cykge1xuICAgIGxldCBlbmRBbmdsZTtcbiAgICBsZXQgc3RhcnRBbmdsZTtcbiAgICBsZXQgbGFyZ2VBcmNGbGFnO1xuICAgIGxldCBzd2VlcEZsYWc7XG4gICAgbGV0IGVuZFBvaW50O1xuICAgIGxldCBtaWRQb2ludDtcbiAgICBsZXQgYW5nbGU7XG4gICAgbGV0IGxhbWJkYTtcbiAgICBsZXQgdDE7XG4gICAgbGV0IHQyO1xuICAgIGxldCB4O1xuICAgIGxldCB4MTtcbiAgICBsZXQgeTtcbiAgICBsZXQgeTE7XG4gICAgbGV0IHI7XG4gICAgbGV0IHJ4O1xuICAgIGxldCByeTtcbiAgICBsZXQgdztcbiAgICBsZXQgaDtcbiAgICBsZXQgcGF0aFR5cGU7XG4gICAgbGV0IGNlbnRlclBvaW50O1xuICAgIGxldCBjcHg7XG4gICAgbGV0IGNweTtcbiAgICBsZXQgcWNweDtcbiAgICBsZXQgcWNweTtcbiAgICBsZXQgY2N3O1xuICAgIGxldCBzdGFydFBvaW50ID0geyB4OiAwLCB5OiAwIH07XG4gICAgY29uc3QgY3VycmVudFBvaW50ID0geyB4OiAwLCB5OiAwIH07XG5cbiAgICBjYW52YXMuYmVnaW5QYXRoKCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWdtZW50cy5sZW5ndGg7ICsraSkge1xuICAgICAgY29uc3QgcyA9IHNlZ21lbnRzW2ldO1xuICAgICAgcGF0aFR5cGUgPSBzWzBdO1xuXG4gICAgICAvLyBSZXNldCBjb250cm9sIHBvaW50IGlmIGNvbW1hbmQgaXMgbm90IGN1YmljXG4gICAgICBpZiAoXG4gICAgICAgIHBhdGhUeXBlICE9PSAnUycgJiZcbiAgICAgICAgcGF0aFR5cGUgIT09ICdzJyAmJlxuICAgICAgICBwYXRoVHlwZSAhPT0gJ0MnICYmXG4gICAgICAgIHBhdGhUeXBlICE9PSAnYydcbiAgICAgICkge1xuICAgICAgICBjcHggPSBudWxsO1xuICAgICAgICBjcHkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgIHBhdGhUeXBlICE9PSAnVCcgJiZcbiAgICAgICAgcGF0aFR5cGUgIT09ICd0JyAmJlxuICAgICAgICBwYXRoVHlwZSAhPT0gJ1EnICYmXG4gICAgICAgIHBhdGhUeXBlICE9PSAncSdcbiAgICAgICkge1xuICAgICAgICBxY3B4ID0gbnVsbDtcbiAgICAgICAgcWNweSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHN3aXRjaCAocGF0aFR5cGUpIHtcbiAgICAgICAgY2FzZSAnbSc6XG4gICAgICAgIGNhc2UgJ00nOlxuICAgICAgICAgIGlmIChwYXRoVHlwZSA9PT0gJ20nKSB7XG4gICAgICAgICAgICB4ICs9IHNbMV07XG4gICAgICAgICAgICB5ICs9IHNbMl07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHggPSBzWzFdO1xuICAgICAgICAgICAgeSA9IHNbMl07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHBhdGhUeXBlID09PSAnTScgfHwgIXN0YXJ0UG9pbnQpIHtcbiAgICAgICAgICAgIHN0YXJ0UG9pbnQgPSB7IHgsIHkgfTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjYW52YXMubW92ZVRvKHgsIHkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdsJzpcbiAgICAgICAgICB4ICs9IHNbMV07XG4gICAgICAgICAgeSArPSBzWzJdO1xuICAgICAgICAgIGNhbnZhcy5saW5lVG8oeCwgeSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0wnOlxuICAgICAgICAgIHggPSBzWzFdO1xuICAgICAgICAgIHkgPSBzWzJdO1xuICAgICAgICAgIGNhbnZhcy5saW5lVG8oeCwgeSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0gnOlxuICAgICAgICAgIHggPSBzWzFdO1xuICAgICAgICAgIGNhbnZhcy5saW5lVG8oeCwgeSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2gnOlxuICAgICAgICAgIHggKz0gc1sxXTtcbiAgICAgICAgICBjYW52YXMubGluZVRvKHgsIHkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdWJzpcbiAgICAgICAgICB5ID0gc1sxXTtcbiAgICAgICAgICBjYW52YXMubGluZVRvKHgsIHkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICd2JzpcbiAgICAgICAgICB5ICs9IHNbMV07XG4gICAgICAgICAgY2FudmFzLmxpbmVUbyh4LCB5KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYSc6XG4gICAgICAgIGNhc2UgJ0EnOlxuICAgICAgICAgIGlmIChwYXRoVHlwZSA9PT0gJ2EnKSB7XG4gICAgICAgICAgICB4ICs9IHNbNl07XG4gICAgICAgICAgICB5ICs9IHNbN107XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHggPSBzWzZdO1xuICAgICAgICAgICAgeSA9IHNbN107XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcnggPSBzWzFdOyAvLyByeFxuICAgICAgICAgIHJ5ID0gc1syXTsgLy8gcnlcbiAgICAgICAgICBhbmdsZSA9IChzWzNdICogTWF0aC5QSSkgLyAxODA7XG4gICAgICAgICAgbGFyZ2VBcmNGbGFnID0gISFzWzRdO1xuICAgICAgICAgIHN3ZWVwRmxhZyA9ICEhc1s1XTtcbiAgICAgICAgICBlbmRQb2ludCA9IHsgeCwgeSB9O1xuXG4gICAgICAgICAgLy8gaHR0cHM6Ly93d3cudzMub3JnL1RSL1NWRy9pbXBsbm90ZS5odG1sI0FyY0ltcGxlbWVudGF0aW9uTm90ZXNcblxuICAgICAgICAgIG1pZFBvaW50ID0ge1xuICAgICAgICAgICAgeDogKGN1cnJlbnRQb2ludC54IC0gZW5kUG9pbnQueCkgLyAyLFxuICAgICAgICAgICAgeTogKGN1cnJlbnRQb2ludC55IC0gZW5kUG9pbnQueSkgLyAyLFxuICAgICAgICAgIH07XG4gICAgICAgICAgcm90YXRlUG9pbnQobWlkUG9pbnQsIC1hbmdsZSk7XG5cbiAgICAgICAgICAvLyByYWRpdXMgY29ycmVjdGlvblxuICAgICAgICAgIGxhbWJkYSA9XG4gICAgICAgICAgICAobWlkUG9pbnQueCAqIG1pZFBvaW50LngpIC8gKHJ4ICogcngpICtcbiAgICAgICAgICAgIChtaWRQb2ludC55ICogbWlkUG9pbnQueSkgLyAocnkgKiByeSk7XG4gICAgICAgICAgaWYgKGxhbWJkYSA+IDEpIHtcbiAgICAgICAgICAgIGxhbWJkYSA9IE1hdGguc3FydChsYW1iZGEpO1xuICAgICAgICAgICAgcnggKj0gbGFtYmRhO1xuICAgICAgICAgICAgcnkgKj0gbGFtYmRhO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNlbnRlclBvaW50ID0ge1xuICAgICAgICAgICAgeDogKHJ4ICogbWlkUG9pbnQueSkgLyByeSxcbiAgICAgICAgICAgIHk6IC0ocnkgKiBtaWRQb2ludC54KSAvIHJ4LFxuICAgICAgICAgIH07XG4gICAgICAgICAgdDEgPSByeCAqIHJ4ICogcnkgKiByeTtcbiAgICAgICAgICB0MiA9XG4gICAgICAgICAgICByeCAqIHJ4ICogbWlkUG9pbnQueSAqIG1pZFBvaW50LnkgK1xuICAgICAgICAgICAgcnkgKiByeSAqIG1pZFBvaW50LnggKiBtaWRQb2ludC54O1xuICAgICAgICAgIGlmIChzd2VlcEZsYWcgIT09IGxhcmdlQXJjRmxhZykge1xuICAgICAgICAgICAgc2NhbGVQb2ludChjZW50ZXJQb2ludCwgTWF0aC5zcXJ0KCh0MSAtIHQyKSAvIHQyKSB8fCAwKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2NhbGVQb2ludChjZW50ZXJQb2ludCwgLU1hdGguc3FydCgodDEgLSB0MikgLyB0MikgfHwgMCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc3RhcnRBbmdsZSA9IE1hdGguYXRhbjIoXG4gICAgICAgICAgICAobWlkUG9pbnQueSAtIGNlbnRlclBvaW50LnkpIC8gcnksXG4gICAgICAgICAgICAobWlkUG9pbnQueCAtIGNlbnRlclBvaW50LngpIC8gcnhcbiAgICAgICAgICApO1xuICAgICAgICAgIGVuZEFuZ2xlID0gTWF0aC5hdGFuMihcbiAgICAgICAgICAgIC0obWlkUG9pbnQueSArIGNlbnRlclBvaW50LnkpIC8gcnksXG4gICAgICAgICAgICAtKG1pZFBvaW50LnggKyBjZW50ZXJQb2ludC54KSAvIHJ4XG4gICAgICAgICAgKTtcblxuICAgICAgICAgIHJvdGF0ZVBvaW50KGNlbnRlclBvaW50LCBhbmdsZSk7XG4gICAgICAgICAgdHJhbnNsYXRlUG9pbnQoXG4gICAgICAgICAgICBjZW50ZXJQb2ludCxcbiAgICAgICAgICAgIChlbmRQb2ludC54ICsgY3VycmVudFBvaW50LngpIC8gMixcbiAgICAgICAgICAgIChlbmRQb2ludC55ICsgY3VycmVudFBvaW50LnkpIC8gMlxuICAgICAgICAgICk7XG5cbiAgICAgICAgICBjYW52YXMuc2F2ZSgpO1xuICAgICAgICAgIGNhbnZhcy50cmFuc2xhdGUoY2VudGVyUG9pbnQueCwgY2VudGVyUG9pbnQueSk7XG4gICAgICAgICAgY2FudmFzLnJvdGF0ZShhbmdsZSk7XG4gICAgICAgICAgY2FudmFzLnNjYWxlKHJ4LCByeSk7XG4gICAgICAgICAgY2FudmFzLmFyYygwLCAwLCAxLCBzdGFydEFuZ2xlLCBlbmRBbmdsZSwgIXN3ZWVwRmxhZyk7XG4gICAgICAgICAgY2FudmFzLnJlc3RvcmUoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnQyc6XG4gICAgICAgICAgY3B4ID0gc1szXTsgLy8gTGFzdCBjb250cm9sIHBvaW50XG4gICAgICAgICAgY3B5ID0gc1s0XTtcbiAgICAgICAgICB4ID0gc1s1XTtcbiAgICAgICAgICB5ID0gc1s2XTtcbiAgICAgICAgICBjYW52YXMuYmV6aWVyQ3VydmVUbyhzWzFdLCBzWzJdLCBjcHgsIGNweSwgeCwgeSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2MnOlxuICAgICAgICAgIGNhbnZhcy5iZXppZXJDdXJ2ZVRvKFxuICAgICAgICAgICAgc1sxXSArIHgsXG4gICAgICAgICAgICBzWzJdICsgeSxcbiAgICAgICAgICAgIHNbM10gKyB4LFxuICAgICAgICAgICAgc1s0XSArIHksXG4gICAgICAgICAgICBzWzVdICsgeCxcbiAgICAgICAgICAgIHNbNl0gKyB5XG4gICAgICAgICAgKTtcbiAgICAgICAgICBjcHggPSBzWzNdICsgeDsgLy8gTGFzdCBjb250cm9sIHBvaW50XG4gICAgICAgICAgY3B5ID0gc1s0XSArIHk7XG4gICAgICAgICAgeCArPSBzWzVdO1xuICAgICAgICAgIHkgKz0gc1s2XTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnUyc6XG4gICAgICAgICAgaWYgKGNweCA9PT0gbnVsbCB8fCBjcHggPT09IG51bGwpIHtcbiAgICAgICAgICAgIGNweCA9IHg7XG4gICAgICAgICAgICBjcHkgPSB5O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNhbnZhcy5iZXppZXJDdXJ2ZVRvKFxuICAgICAgICAgICAgMiAqIHggLSBjcHgsXG4gICAgICAgICAgICAyICogeSAtIGNweSxcbiAgICAgICAgICAgIHNbMV0sXG4gICAgICAgICAgICBzWzJdLFxuICAgICAgICAgICAgc1szXSxcbiAgICAgICAgICAgIHNbNF1cbiAgICAgICAgICApO1xuICAgICAgICAgIGNweCA9IHNbMV07IC8vIGxhc3QgY29udHJvbCBwb2ludFxuICAgICAgICAgIGNweSA9IHNbMl07XG4gICAgICAgICAgeCA9IHNbM107XG4gICAgICAgICAgeSA9IHNbNF07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3MnOlxuICAgICAgICAgIGlmIChjcHggPT09IG51bGwgfHwgY3B4ID09PSBudWxsKSB7XG4gICAgICAgICAgICBjcHggPSB4O1xuICAgICAgICAgICAgY3B5ID0geTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjYW52YXMuYmV6aWVyQ3VydmVUbyhcbiAgICAgICAgICAgIDIgKiB4IC0gY3B4LFxuICAgICAgICAgICAgMiAqIHkgLSBjcHksXG4gICAgICAgICAgICBzWzFdICsgeCxcbiAgICAgICAgICAgIHNbMl0gKyB5LFxuICAgICAgICAgICAgc1szXSArIHgsXG4gICAgICAgICAgICBzWzRdICsgeVxuICAgICAgICAgICk7XG4gICAgICAgICAgY3B4ID0gc1sxXSArIHg7IC8vIGxhc3QgY29udHJvbCBwb2ludFxuICAgICAgICAgIGNweSA9IHNbMl0gKyB5O1xuICAgICAgICAgIHggKz0gc1szXTtcbiAgICAgICAgICB5ICs9IHNbNF07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ1EnOlxuICAgICAgICAgIHFjcHggPSBzWzFdOyAvLyBsYXN0IGNvbnRyb2wgcG9pbnRcbiAgICAgICAgICBxY3B5ID0gc1syXTtcbiAgICAgICAgICB4ID0gc1szXTtcbiAgICAgICAgICB5ID0gc1s0XTtcbiAgICAgICAgICBjYW52YXMucXVhZHJhdGljQ3VydmVUbyhxY3B4LCBxY3B5LCB4LCB5KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncSc6XG4gICAgICAgICAgcWNweCA9IHNbMV0gKyB4OyAvLyBsYXN0IGNvbnRyb2wgcG9pbnRcbiAgICAgICAgICBxY3B5ID0gc1syXSArIHk7XG4gICAgICAgICAgeCArPSBzWzNdO1xuICAgICAgICAgIHkgKz0gc1s0XTtcbiAgICAgICAgICBjYW52YXMucXVhZHJhdGljQ3VydmVUbyhxY3B4LCBxY3B5LCB4LCB5KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnVCc6XG4gICAgICAgICAgaWYgKHFjcHggPT09IG51bGwgfHwgcWNweCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcWNweCA9IHg7XG4gICAgICAgICAgICBxY3B5ID0geTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcWNweCA9IDIgKiB4IC0gcWNweDsgLy8gbGFzdCBjb250cm9sIHBvaW50XG4gICAgICAgICAgcWNweSA9IDIgKiB5IC0gcWNweTtcbiAgICAgICAgICB4ID0gc1sxXTtcbiAgICAgICAgICB5ID0gc1syXTtcbiAgICAgICAgICBjYW52YXMucXVhZHJhdGljQ3VydmVUbyhxY3B4LCBxY3B5LCB4LCB5KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAndCc6XG4gICAgICAgICAgaWYgKHFjcHggPT09IG51bGwgfHwgcWNweCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcWNweCA9IHg7XG4gICAgICAgICAgICBxY3B5ID0geTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcWNweCA9IDIgKiB4IC0gcWNweDsgLy8gbGFzdCBjb250cm9sIHBvaW50XG4gICAgICAgICAgcWNweSA9IDIgKiB5IC0gcWNweTtcbiAgICAgICAgICB4ICs9IHNbMV07XG4gICAgICAgICAgeSArPSBzWzJdO1xuICAgICAgICAgIGNhbnZhcy5xdWFkcmF0aWNDdXJ2ZVRvKHFjcHgsIHFjcHksIHgsIHkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICd6JzpcbiAgICAgICAgY2FzZSAnWic6XG4gICAgICAgICAgeCA9IHN0YXJ0UG9pbnQueDtcbiAgICAgICAgICB5ID0gc3RhcnRQb2ludC55O1xuICAgICAgICAgIHN0YXJ0UG9pbnQgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgY2FudmFzLmNsb3NlUGF0aCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdBQyc6IC8vIGFyY1xuICAgICAgICAgIHggPSBzWzFdO1xuICAgICAgICAgIHkgPSBzWzJdO1xuICAgICAgICAgIHIgPSBzWzNdO1xuICAgICAgICAgIHN0YXJ0QW5nbGUgPSBzWzRdO1xuICAgICAgICAgIGVuZEFuZ2xlID0gc1s1XTtcbiAgICAgICAgICBjY3cgPSBzWzZdO1xuICAgICAgICAgIGNhbnZhcy5hcmMoeCwgeSwgciwgc3RhcnRBbmdsZSwgZW5kQW5nbGUsIGNjdyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0FUJzogLy8gYXJjVG9cbiAgICAgICAgICB4MSA9IHNbMV07XG4gICAgICAgICAgeTEgPSBzWzJdO1xuICAgICAgICAgIHggPSBzWzNdO1xuICAgICAgICAgIHkgPSBzWzRdO1xuICAgICAgICAgIHIgPSBzWzVdO1xuICAgICAgICAgIGNhbnZhcy5hcmNUbyh4MSwgeTEsIHgsIHksIHIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdFJzogLy8gZWxsaXBzZVxuICAgICAgICAgIHggPSBzWzFdO1xuICAgICAgICAgIHkgPSBzWzJdO1xuICAgICAgICAgIHJ4ID0gc1szXTtcbiAgICAgICAgICByeSA9IHNbNF07XG4gICAgICAgICAgYW5nbGUgPSBzWzVdO1xuICAgICAgICAgIHN0YXJ0QW5nbGUgPSBzWzZdO1xuICAgICAgICAgIGVuZEFuZ2xlID0gc1s3XTtcbiAgICAgICAgICBjY3cgPSBzWzhdO1xuICAgICAgICAgIGNhbnZhcy5zYXZlKCk7XG4gICAgICAgICAgY2FudmFzLnRyYW5zbGF0ZSh4LCB5KTtcbiAgICAgICAgICBjYW52YXMucm90YXRlKGFuZ2xlKTtcbiAgICAgICAgICBjYW52YXMuc2NhbGUocngsIHJ5KTtcbiAgICAgICAgICBjYW52YXMuYXJjKDAsIDAsIDEsIHN0YXJ0QW5nbGUsIGVuZEFuZ2xlLCBjY3cpO1xuICAgICAgICAgIGNhbnZhcy5yZXN0b3JlKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ1InOiAvLyByZWN0XG4gICAgICAgICAgeCA9IHNbMV07XG4gICAgICAgICAgeSA9IHNbMl07XG4gICAgICAgICAgdyA9IHNbM107XG4gICAgICAgICAgaCA9IHNbNF07XG4gICAgICAgICAgc3RhcnRQb2ludCA9IHsgeCwgeSB9O1xuICAgICAgICAgIGNhbnZhcy5yZWN0KHgsIHksIHcsIGgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAvLyB0aHJvdyBuZXcgRXJyb3IoYCR7cGF0aFR5cGV9IGlzIG5vdCBpbXBsZW1lbnRlZGApOyA/XG4gICAgICB9XG5cbiAgICAgIGN1cnJlbnRQb2ludC54ID0geDtcbiAgICAgIGN1cnJlbnRQb2ludC55ID0geTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBjRmlsbCA9IHdpbmRvdy5DYW52YXNSZW5kZXJpbmdDb250ZXh0MkQucHJvdG90eXBlLmZpbGw7XG4gIGNvbnN0IGNTdHJva2UgPSB3aW5kb3cuQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELnByb3RvdHlwZS5zdHJva2U7XG5cbiAgd2luZG93LkNhbnZhc1JlbmRlcmluZ0NvbnRleHQyRC5wcm90b3R5cGUuZmlsbCA9IGZ1bmN0aW9uIGZpbGwoLi4uYXJncykge1xuICAgIGxldCBmaWxsUnVsZSA9ICdub256ZXJvJztcbiAgICBpZiAoXG4gICAgICBhcmdzLmxlbmd0aCA9PT0gMCB8fFxuICAgICAgKGFyZ3MubGVuZ3RoID09PSAxICYmIHR5cGVvZiBhcmdzWzBdID09PSAnc3RyaW5nJylcbiAgICApIHtcbiAgICAgIGNGaWxsLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMikge1xuICAgICAgZmlsbFJ1bGUgPSBhcmdzWzFdO1xuICAgIH1cbiAgICBjb25zdCBwYXRoID0gYXJnc1swXTtcbiAgICBidWlsZFBhdGgodGhpcywgcGF0aC5zZWdtZW50cyk7XG4gICAgY0ZpbGwuY2FsbCh0aGlzLCBmaWxsUnVsZSk7XG4gIH07XG5cbiAgd2luZG93LkNhbnZhc1JlbmRlcmluZ0NvbnRleHQyRC5wcm90b3R5cGUuc3Ryb2tlID0gZnVuY3Rpb24gc3Ryb2tlKHBhdGgpIHtcbiAgICBpZiAoIXBhdGgpIHtcbiAgICAgIGNTdHJva2UuY2FsbCh0aGlzKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYnVpbGRQYXRoKHRoaXMsIHBhdGguc2VnbWVudHMpO1xuICAgIGNTdHJva2UuY2FsbCh0aGlzKTtcbiAgfTtcblxuICBjb25zdCBjSXNQb2ludEluUGF0aCA9XG4gICAgd2luZG93LkNhbnZhc1JlbmRlcmluZ0NvbnRleHQyRC5wcm90b3R5cGUuaXNQb2ludEluUGF0aDtcblxuICB3aW5kb3cuQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELnByb3RvdHlwZS5pc1BvaW50SW5QYXRoID0gZnVuY3Rpb24gaXNQb2ludEluUGF0aChcbiAgICAuLi5hcmdzXG4gICkge1xuICAgIC8vIGxldCBmaWxsUnVsZSA9ICdub256ZXJvJztcbiAgICBpZiAoYXJnc1swXS5jb25zdHJ1Y3Rvci5uYW1lID09PSAnUGF0aDJEJykge1xuICAgICAgLy8gZmlyc3QgYXJndW1lbnQgaXMgYSBQYXRoMkQgb2JqZWN0XG4gICAgICBjb25zdCB4ID0gYXJnc1sxXTtcbiAgICAgIGNvbnN0IHkgPSBhcmdzWzJdO1xuICAgICAgY29uc3QgZmlsbFJ1bGUgPSBhcmdzWzNdIHx8ICdub256ZXJvJztcbiAgICAgIGNvbnN0IHBhdGggPSBhcmdzWzBdO1xuICAgICAgYnVpbGRQYXRoKHRoaXMsIHBhdGguc2VnbWVudHMpO1xuICAgICAgcmV0dXJuIGNJc1BvaW50SW5QYXRoLmFwcGx5KHRoaXMsIFt4LCB5LCBmaWxsUnVsZV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gY0lzUG9pbnRJblBhdGguYXBwbHkodGhpcywgYXJncyk7XG4gICAgfVxuICB9O1xuXG4gIHdpbmRvdy5QYXRoMkQgPSBQYXRoMkQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcG9seUZpbGxQYXRoMkQ7XG4iLCJjb25zdCBwYXJzZVBhdGggPSByZXF1aXJlKCcuL3BhcnNlLXBhdGgnKTtcbmNvbnN0IHBhdGgyZFBvbHlmaWxsID0gcmVxdWlyZSgnLi9wYXRoMmQtcG9seWZpbGwnKTtcblxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gIHBhdGgyZFBvbHlmaWxsKHdpbmRvdyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBwYXRoMmRQb2x5ZmlsbCxcbiAgcGFyc2VQYXRoLFxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5pbyA9IGV4cG9ydHMuU29ja2V0ID0gZXhwb3J0cy5NYW5hZ2VyID0gZXhwb3J0cy5wcm90b2NvbCA9IHZvaWQgMDtcbmNvbnN0IHVybF8xID0gcmVxdWlyZShcIi4vdXJsXCIpO1xuY29uc3QgbWFuYWdlcl8xID0gcmVxdWlyZShcIi4vbWFuYWdlclwiKTtcbmNvbnN0IGRlYnVnID0gcmVxdWlyZShcImRlYnVnXCIpKFwic29ja2V0LmlvLWNsaWVudFwiKTtcbi8qKlxuICogTW9kdWxlIGV4cG9ydHMuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGxvb2t1cDtcbi8qKlxuICogTWFuYWdlcnMgY2FjaGUuXG4gKi9cbmNvbnN0IGNhY2hlID0gKGV4cG9ydHMubWFuYWdlcnMgPSB7fSk7XG5mdW5jdGlvbiBsb29rdXAodXJpLCBvcHRzKSB7XG4gICAgaWYgKHR5cGVvZiB1cmkgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgb3B0cyA9IHVyaTtcbiAgICAgICAgdXJpID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBvcHRzID0gb3B0cyB8fCB7fTtcbiAgICBjb25zdCBwYXJzZWQgPSB1cmxfMS51cmwodXJpLCBvcHRzLnBhdGggfHwgXCIvc29ja2V0LmlvXCIpO1xuICAgIGNvbnN0IHNvdXJjZSA9IHBhcnNlZC5zb3VyY2U7XG4gICAgY29uc3QgaWQgPSBwYXJzZWQuaWQ7XG4gICAgY29uc3QgcGF0aCA9IHBhcnNlZC5wYXRoO1xuICAgIGNvbnN0IHNhbWVOYW1lc3BhY2UgPSBjYWNoZVtpZF0gJiYgcGF0aCBpbiBjYWNoZVtpZF1bXCJuc3BzXCJdO1xuICAgIGNvbnN0IG5ld0Nvbm5lY3Rpb24gPSBvcHRzLmZvcmNlTmV3IHx8XG4gICAgICAgIG9wdHNbXCJmb3JjZSBuZXcgY29ubmVjdGlvblwiXSB8fFxuICAgICAgICBmYWxzZSA9PT0gb3B0cy5tdWx0aXBsZXggfHxcbiAgICAgICAgc2FtZU5hbWVzcGFjZTtcbiAgICBsZXQgaW87XG4gICAgaWYgKG5ld0Nvbm5lY3Rpb24pIHtcbiAgICAgICAgZGVidWcoXCJpZ25vcmluZyBzb2NrZXQgY2FjaGUgZm9yICVzXCIsIHNvdXJjZSk7XG4gICAgICAgIGlvID0gbmV3IG1hbmFnZXJfMS5NYW5hZ2VyKHNvdXJjZSwgb3B0cyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZiAoIWNhY2hlW2lkXSkge1xuICAgICAgICAgICAgZGVidWcoXCJuZXcgaW8gaW5zdGFuY2UgZm9yICVzXCIsIHNvdXJjZSk7XG4gICAgICAgICAgICBjYWNoZVtpZF0gPSBuZXcgbWFuYWdlcl8xLk1hbmFnZXIoc291cmNlLCBvcHRzKTtcbiAgICAgICAgfVxuICAgICAgICBpbyA9IGNhY2hlW2lkXTtcbiAgICB9XG4gICAgaWYgKHBhcnNlZC5xdWVyeSAmJiAhb3B0cy5xdWVyeSkge1xuICAgICAgICBvcHRzLnF1ZXJ5ID0gcGFyc2VkLnF1ZXJ5S2V5O1xuICAgIH1cbiAgICByZXR1cm4gaW8uc29ja2V0KHBhcnNlZC5wYXRoLCBvcHRzKTtcbn1cbmV4cG9ydHMuaW8gPSBsb29rdXA7XG4vKipcbiAqIFByb3RvY29sIHZlcnNpb24uXG4gKlxuICogQHB1YmxpY1xuICovXG52YXIgc29ja2V0X2lvX3BhcnNlcl8xID0gcmVxdWlyZShcInNvY2tldC5pby1wYXJzZXJcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJwcm90b2NvbFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc29ja2V0X2lvX3BhcnNlcl8xLnByb3RvY29sOyB9IH0pO1xuLyoqXG4gKiBgY29ubmVjdGAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHVyaVxuICogQHB1YmxpY1xuICovXG5leHBvcnRzLmNvbm5lY3QgPSBsb29rdXA7XG4vKipcbiAqIEV4cG9zZSBjb25zdHJ1Y3RvcnMgZm9yIHN0YW5kYWxvbmUgYnVpbGQuXG4gKlxuICogQHB1YmxpY1xuICovXG52YXIgbWFuYWdlcl8yID0gcmVxdWlyZShcIi4vbWFuYWdlclwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIk1hbmFnZXJcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG1hbmFnZXJfMi5NYW5hZ2VyOyB9IH0pO1xudmFyIHNvY2tldF8xID0gcmVxdWlyZShcIi4vc29ja2V0XCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiU29ja2V0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzb2NrZXRfMS5Tb2NrZXQ7IH0gfSk7XG5leHBvcnRzLmRlZmF1bHQgPSBsb29rdXA7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuTWFuYWdlciA9IHZvaWQgMDtcbmNvbnN0IGVpbyA9IHJlcXVpcmUoXCJlbmdpbmUuaW8tY2xpZW50XCIpO1xuY29uc3Qgc29ja2V0XzEgPSByZXF1aXJlKFwiLi9zb2NrZXRcIik7XG5jb25zdCBwYXJzZXIgPSByZXF1aXJlKFwic29ja2V0LmlvLXBhcnNlclwiKTtcbmNvbnN0IG9uXzEgPSByZXF1aXJlKFwiLi9vblwiKTtcbmNvbnN0IEJhY2tvZmYgPSByZXF1aXJlKFwiYmFja28yXCIpO1xuY29uc3QgdHlwZWRfZXZlbnRzXzEgPSByZXF1aXJlKFwiLi90eXBlZC1ldmVudHNcIik7XG5jb25zdCBkZWJ1ZyA9IHJlcXVpcmUoXCJkZWJ1Z1wiKShcInNvY2tldC5pby1jbGllbnQ6bWFuYWdlclwiKTtcbmNsYXNzIE1hbmFnZXIgZXh0ZW5kcyB0eXBlZF9ldmVudHNfMS5TdHJpY3RFdmVudEVtaXR0ZXIge1xuICAgIGNvbnN0cnVjdG9yKHVyaSwgb3B0cykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm5zcHMgPSB7fTtcbiAgICAgICAgdGhpcy5zdWJzID0gW107XG4gICAgICAgIGlmICh1cmkgJiYgXCJvYmplY3RcIiA9PT0gdHlwZW9mIHVyaSkge1xuICAgICAgICAgICAgb3B0cyA9IHVyaTtcbiAgICAgICAgICAgIHVyaSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBvcHRzID0gb3B0cyB8fCB7fTtcbiAgICAgICAgb3B0cy5wYXRoID0gb3B0cy5wYXRoIHx8IFwiL3NvY2tldC5pb1wiO1xuICAgICAgICB0aGlzLm9wdHMgPSBvcHRzO1xuICAgICAgICB0aGlzLnJlY29ubmVjdGlvbihvcHRzLnJlY29ubmVjdGlvbiAhPT0gZmFsc2UpO1xuICAgICAgICB0aGlzLnJlY29ubmVjdGlvbkF0dGVtcHRzKG9wdHMucmVjb25uZWN0aW9uQXR0ZW1wdHMgfHwgSW5maW5pdHkpO1xuICAgICAgICB0aGlzLnJlY29ubmVjdGlvbkRlbGF5KG9wdHMucmVjb25uZWN0aW9uRGVsYXkgfHwgMTAwMCk7XG4gICAgICAgIHRoaXMucmVjb25uZWN0aW9uRGVsYXlNYXgob3B0cy5yZWNvbm5lY3Rpb25EZWxheU1heCB8fCA1MDAwKTtcbiAgICAgICAgdGhpcy5yYW5kb21pemF0aW9uRmFjdG9yKG9wdHMucmFuZG9taXphdGlvbkZhY3RvciB8fCAwLjUpO1xuICAgICAgICB0aGlzLmJhY2tvZmYgPSBuZXcgQmFja29mZih7XG4gICAgICAgICAgICBtaW46IHRoaXMucmVjb25uZWN0aW9uRGVsYXkoKSxcbiAgICAgICAgICAgIG1heDogdGhpcy5yZWNvbm5lY3Rpb25EZWxheU1heCgpLFxuICAgICAgICAgICAgaml0dGVyOiB0aGlzLnJhbmRvbWl6YXRpb25GYWN0b3IoKSxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudGltZW91dChudWxsID09IG9wdHMudGltZW91dCA/IDIwMDAwIDogb3B0cy50aW1lb3V0KTtcbiAgICAgICAgdGhpcy5fcmVhZHlTdGF0ZSA9IFwiY2xvc2VkXCI7XG4gICAgICAgIHRoaXMudXJpID0gdXJpO1xuICAgICAgICBjb25zdCBfcGFyc2VyID0gb3B0cy5wYXJzZXIgfHwgcGFyc2VyO1xuICAgICAgICB0aGlzLmVuY29kZXIgPSBuZXcgX3BhcnNlci5FbmNvZGVyKCk7XG4gICAgICAgIHRoaXMuZGVjb2RlciA9IG5ldyBfcGFyc2VyLkRlY29kZXIoKTtcbiAgICAgICAgdGhpcy5fYXV0b0Nvbm5lY3QgPSBvcHRzLmF1dG9Db25uZWN0ICE9PSBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMuX2F1dG9Db25uZWN0KVxuICAgICAgICAgICAgdGhpcy5vcGVuKCk7XG4gICAgfVxuICAgIHJlY29ubmVjdGlvbih2KSB7XG4gICAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aClcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZWNvbm5lY3Rpb247XG4gICAgICAgIHRoaXMuX3JlY29ubmVjdGlvbiA9ICEhdjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHJlY29ubmVjdGlvbkF0dGVtcHRzKHYpIHtcbiAgICAgICAgaWYgKHYgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZWNvbm5lY3Rpb25BdHRlbXB0cztcbiAgICAgICAgdGhpcy5fcmVjb25uZWN0aW9uQXR0ZW1wdHMgPSB2O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgcmVjb25uZWN0aW9uRGVsYXkodikge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGlmICh2ID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVjb25uZWN0aW9uRGVsYXk7XG4gICAgICAgIHRoaXMuX3JlY29ubmVjdGlvbkRlbGF5ID0gdjtcbiAgICAgICAgKF9hID0gdGhpcy5iYWNrb2ZmKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc2V0TWluKHYpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgcmFuZG9taXphdGlvbkZhY3Rvcih2KSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgaWYgKHYgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yYW5kb21pemF0aW9uRmFjdG9yO1xuICAgICAgICB0aGlzLl9yYW5kb21pemF0aW9uRmFjdG9yID0gdjtcbiAgICAgICAgKF9hID0gdGhpcy5iYWNrb2ZmKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc2V0Sml0dGVyKHYpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgcmVjb25uZWN0aW9uRGVsYXlNYXgodikge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGlmICh2ID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVjb25uZWN0aW9uRGVsYXlNYXg7XG4gICAgICAgIHRoaXMuX3JlY29ubmVjdGlvbkRlbGF5TWF4ID0gdjtcbiAgICAgICAgKF9hID0gdGhpcy5iYWNrb2ZmKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc2V0TWF4KHYpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgdGltZW91dCh2KSB7XG4gICAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aClcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl90aW1lb3V0O1xuICAgICAgICB0aGlzLl90aW1lb3V0ID0gdjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFN0YXJ0cyB0cnlpbmcgdG8gcmVjb25uZWN0IGlmIHJlY29ubmVjdGlvbiBpcyBlbmFibGVkIGFuZCB3ZSBoYXZlIG5vdFxuICAgICAqIHN0YXJ0ZWQgcmVjb25uZWN0aW5nIHlldFxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBtYXliZVJlY29ubmVjdE9uT3BlbigpIHtcbiAgICAgICAgLy8gT25seSB0cnkgdG8gcmVjb25uZWN0IGlmIGl0J3MgdGhlIGZpcnN0IHRpbWUgd2UncmUgY29ubmVjdGluZ1xuICAgICAgICBpZiAoIXRoaXMuX3JlY29ubmVjdGluZyAmJlxuICAgICAgICAgICAgdGhpcy5fcmVjb25uZWN0aW9uICYmXG4gICAgICAgICAgICB0aGlzLmJhY2tvZmYuYXR0ZW1wdHMgPT09IDApIHtcbiAgICAgICAgICAgIC8vIGtlZXBzIHJlY29ubmVjdGlvbiBmcm9tIGZpcmluZyB0d2ljZSBmb3IgdGhlIHNhbWUgcmVjb25uZWN0aW9uIGxvb3BcbiAgICAgICAgICAgIHRoaXMucmVjb25uZWN0KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgY3VycmVudCB0cmFuc3BvcnQgYHNvY2tldGAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiAtIG9wdGlvbmFsLCBjYWxsYmFja1xuICAgICAqIEByZXR1cm4gc2VsZlxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBvcGVuKGZuKSB7XG4gICAgICAgIGRlYnVnKFwicmVhZHlTdGF0ZSAlc1wiLCB0aGlzLl9yZWFkeVN0YXRlKTtcbiAgICAgICAgaWYgKH50aGlzLl9yZWFkeVN0YXRlLmluZGV4T2YoXCJvcGVuXCIpKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIGRlYnVnKFwib3BlbmluZyAlc1wiLCB0aGlzLnVyaSk7XG4gICAgICAgIHRoaXMuZW5naW5lID0gZWlvKHRoaXMudXJpLCB0aGlzLm9wdHMpO1xuICAgICAgICBjb25zdCBzb2NrZXQgPSB0aGlzLmVuZ2luZTtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuX3JlYWR5U3RhdGUgPSBcIm9wZW5pbmdcIjtcbiAgICAgICAgdGhpcy5za2lwUmVjb25uZWN0ID0gZmFsc2U7XG4gICAgICAgIC8vIGVtaXQgYG9wZW5gXG4gICAgICAgIGNvbnN0IG9wZW5TdWJEZXN0cm95ID0gb25fMS5vbihzb2NrZXQsIFwib3BlblwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZWxmLm9ub3BlbigpO1xuICAgICAgICAgICAgZm4gJiYgZm4oKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIGVtaXQgYGVycm9yYFxuICAgICAgICBjb25zdCBlcnJvclN1YiA9IG9uXzEub24oc29ja2V0LCBcImVycm9yXCIsIChlcnIpID0+IHtcbiAgICAgICAgICAgIGRlYnVnKFwiZXJyb3JcIik7XG4gICAgICAgICAgICBzZWxmLmNsZWFudXAoKTtcbiAgICAgICAgICAgIHNlbGYuX3JlYWR5U3RhdGUgPSBcImNsb3NlZFwiO1xuICAgICAgICAgICAgdGhpcy5lbWl0UmVzZXJ2ZWQoXCJlcnJvclwiLCBlcnIpO1xuICAgICAgICAgICAgaWYgKGZuKSB7XG4gICAgICAgICAgICAgICAgZm4oZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIE9ubHkgZG8gdGhpcyBpZiB0aGVyZSBpcyBubyBmbiB0byBoYW5kbGUgdGhlIGVycm9yXG4gICAgICAgICAgICAgICAgc2VsZi5tYXliZVJlY29ubmVjdE9uT3BlbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGZhbHNlICE9PSB0aGlzLl90aW1lb3V0KSB7XG4gICAgICAgICAgICBjb25zdCB0aW1lb3V0ID0gdGhpcy5fdGltZW91dDtcbiAgICAgICAgICAgIGRlYnVnKFwiY29ubmVjdCBhdHRlbXB0IHdpbGwgdGltZW91dCBhZnRlciAlZFwiLCB0aW1lb3V0KTtcbiAgICAgICAgICAgIGlmICh0aW1lb3V0ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgb3BlblN1YkRlc3Ryb3koKTsgLy8gcHJldmVudHMgYSByYWNlIGNvbmRpdGlvbiB3aXRoIHRoZSAnb3BlbicgZXZlbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHNldCB0aW1lclxuICAgICAgICAgICAgY29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBkZWJ1ZyhcImNvbm5lY3QgYXR0ZW1wdCB0aW1lZCBvdXQgYWZ0ZXIgJWRcIiwgdGltZW91dCk7XG4gICAgICAgICAgICAgICAgb3BlblN1YkRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICBzb2NrZXQuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICBzb2NrZXQuZW1pdChcImVycm9yXCIsIG5ldyBFcnJvcihcInRpbWVvdXRcIikpO1xuICAgICAgICAgICAgfSwgdGltZW91dCk7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRzLmF1dG9VbnJlZikge1xuICAgICAgICAgICAgICAgIHRpbWVyLnVucmVmKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnN1YnMucHVzaChmdW5jdGlvbiBzdWJEZXN0cm95KCkge1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN1YnMucHVzaChvcGVuU3ViRGVzdHJveSk7XG4gICAgICAgIHRoaXMuc3Vicy5wdXNoKGVycm9yU3ViKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFsaWFzIGZvciBvcGVuKClcbiAgICAgKlxuICAgICAqIEByZXR1cm4gc2VsZlxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBjb25uZWN0KGZuKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wZW4oZm4pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgdXBvbiB0cmFuc3BvcnQgb3Blbi5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgb25vcGVuKCkge1xuICAgICAgICBkZWJ1ZyhcIm9wZW5cIik7XG4gICAgICAgIC8vIGNsZWFyIG9sZCBzdWJzXG4gICAgICAgIHRoaXMuY2xlYW51cCgpO1xuICAgICAgICAvLyBtYXJrIGFzIG9wZW5cbiAgICAgICAgdGhpcy5fcmVhZHlTdGF0ZSA9IFwib3BlblwiO1xuICAgICAgICB0aGlzLmVtaXRSZXNlcnZlZChcIm9wZW5cIik7XG4gICAgICAgIC8vIGFkZCBuZXcgc3Vic1xuICAgICAgICBjb25zdCBzb2NrZXQgPSB0aGlzLmVuZ2luZTtcbiAgICAgICAgdGhpcy5zdWJzLnB1c2gob25fMS5vbihzb2NrZXQsIFwicGluZ1wiLCB0aGlzLm9ucGluZy5iaW5kKHRoaXMpKSwgb25fMS5vbihzb2NrZXQsIFwiZGF0YVwiLCB0aGlzLm9uZGF0YS5iaW5kKHRoaXMpKSwgb25fMS5vbihzb2NrZXQsIFwiZXJyb3JcIiwgdGhpcy5vbmVycm9yLmJpbmQodGhpcykpLCBvbl8xLm9uKHNvY2tldCwgXCJjbG9zZVwiLCB0aGlzLm9uY2xvc2UuYmluZCh0aGlzKSksIG9uXzEub24odGhpcy5kZWNvZGVyLCBcImRlY29kZWRcIiwgdGhpcy5vbmRlY29kZWQuYmluZCh0aGlzKSkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgdXBvbiBhIHBpbmcuXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIG9ucGluZygpIHtcbiAgICAgICAgdGhpcy5lbWl0UmVzZXJ2ZWQoXCJwaW5nXCIpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgd2l0aCBkYXRhLlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBvbmRhdGEoZGF0YSkge1xuICAgICAgICB0aGlzLmRlY29kZXIuYWRkKGRhdGEpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgd2hlbiBwYXJzZXIgZnVsbHkgZGVjb2RlcyBhIHBhY2tldC5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgb25kZWNvZGVkKHBhY2tldCkge1xuICAgICAgICB0aGlzLmVtaXRSZXNlcnZlZChcInBhY2tldFwiLCBwYWNrZXQpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgdXBvbiBzb2NrZXQgZXJyb3IuXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIG9uZXJyb3IoZXJyKSB7XG4gICAgICAgIGRlYnVnKFwiZXJyb3JcIiwgZXJyKTtcbiAgICAgICAgdGhpcy5lbWl0UmVzZXJ2ZWQoXCJlcnJvclwiLCBlcnIpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IHNvY2tldCBmb3IgdGhlIGdpdmVuIGBuc3BgLlxuICAgICAqXG4gICAgICogQHJldHVybiB7U29ja2V0fVxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBzb2NrZXQobnNwLCBvcHRzKSB7XG4gICAgICAgIGxldCBzb2NrZXQgPSB0aGlzLm5zcHNbbnNwXTtcbiAgICAgICAgaWYgKCFzb2NrZXQpIHtcbiAgICAgICAgICAgIHNvY2tldCA9IG5ldyBzb2NrZXRfMS5Tb2NrZXQodGhpcywgbnNwLCBvcHRzKTtcbiAgICAgICAgICAgIHRoaXMubnNwc1tuc3BdID0gc29ja2V0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzb2NrZXQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxlZCB1cG9uIGEgc29ja2V0IGNsb3NlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHNvY2tldFxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX2Rlc3Ryb3koc29ja2V0KSB7XG4gICAgICAgIGNvbnN0IG5zcHMgPSBPYmplY3Qua2V5cyh0aGlzLm5zcHMpO1xuICAgICAgICBmb3IgKGNvbnN0IG5zcCBvZiBuc3BzKSB7XG4gICAgICAgICAgICBjb25zdCBzb2NrZXQgPSB0aGlzLm5zcHNbbnNwXTtcbiAgICAgICAgICAgIGlmIChzb2NrZXQuYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgZGVidWcoXCJzb2NrZXQgJXMgaXMgc3RpbGwgYWN0aXZlLCBza2lwcGluZyBjbG9zZVwiLCBuc3ApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9jbG9zZSgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBXcml0ZXMgYSBwYWNrZXQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcGFja2V0XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfcGFja2V0KHBhY2tldCkge1xuICAgICAgICBkZWJ1ZyhcIndyaXRpbmcgcGFja2V0ICVqXCIsIHBhY2tldCk7XG4gICAgICAgIGNvbnN0IGVuY29kZWRQYWNrZXRzID0gdGhpcy5lbmNvZGVyLmVuY29kZShwYWNrZXQpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVuY29kZWRQYWNrZXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmVuZ2luZS53cml0ZShlbmNvZGVkUGFja2V0c1tpXSwgcGFja2V0Lm9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENsZWFuIHVwIHRyYW5zcG9ydCBzdWJzY3JpcHRpb25zIGFuZCBwYWNrZXQgYnVmZmVyLlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBjbGVhbnVwKCkge1xuICAgICAgICBkZWJ1ZyhcImNsZWFudXBcIik7XG4gICAgICAgIHRoaXMuc3Vicy5mb3JFYWNoKChzdWJEZXN0cm95KSA9PiBzdWJEZXN0cm95KCkpO1xuICAgICAgICB0aGlzLnN1YnMubGVuZ3RoID0gMDtcbiAgICAgICAgdGhpcy5kZWNvZGVyLmRlc3Ryb3koKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2xvc2UgdGhlIGN1cnJlbnQgc29ja2V0LlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfY2xvc2UoKSB7XG4gICAgICAgIGRlYnVnKFwiZGlzY29ubmVjdFwiKTtcbiAgICAgICAgdGhpcy5za2lwUmVjb25uZWN0ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fcmVjb25uZWN0aW5nID0gZmFsc2U7XG4gICAgICAgIGlmIChcIm9wZW5pbmdcIiA9PT0gdGhpcy5fcmVhZHlTdGF0ZSkge1xuICAgICAgICAgICAgLy8gYG9uY2xvc2VgIHdpbGwgbm90IGZpcmUgYmVjYXVzZVxuICAgICAgICAgICAgLy8gYW4gb3BlbiBldmVudCBuZXZlciBoYXBwZW5lZFxuICAgICAgICAgICAgdGhpcy5jbGVhbnVwKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5iYWNrb2ZmLnJlc2V0KCk7XG4gICAgICAgIHRoaXMuX3JlYWR5U3RhdGUgPSBcImNsb3NlZFwiO1xuICAgICAgICBpZiAodGhpcy5lbmdpbmUpXG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5jbG9zZSgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBbGlhcyBmb3IgY2xvc2UoKVxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBkaXNjb25uZWN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2xvc2UoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHVwb24gZW5naW5lIGNsb3NlLlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBvbmNsb3NlKHJlYXNvbikge1xuICAgICAgICBkZWJ1ZyhcIm9uY2xvc2VcIik7XG4gICAgICAgIHRoaXMuY2xlYW51cCgpO1xuICAgICAgICB0aGlzLmJhY2tvZmYucmVzZXQoKTtcbiAgICAgICAgdGhpcy5fcmVhZHlTdGF0ZSA9IFwiY2xvc2VkXCI7XG4gICAgICAgIHRoaXMuZW1pdFJlc2VydmVkKFwiY2xvc2VcIiwgcmVhc29uKTtcbiAgICAgICAgaWYgKHRoaXMuX3JlY29ubmVjdGlvbiAmJiAhdGhpcy5za2lwUmVjb25uZWN0KSB7XG4gICAgICAgICAgICB0aGlzLnJlY29ubmVjdCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEF0dGVtcHQgYSByZWNvbm5lY3Rpb24uXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHJlY29ubmVjdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuX3JlY29ubmVjdGluZyB8fCB0aGlzLnNraXBSZWNvbm5lY3QpXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLmJhY2tvZmYuYXR0ZW1wdHMgPj0gdGhpcy5fcmVjb25uZWN0aW9uQXR0ZW1wdHMpIHtcbiAgICAgICAgICAgIGRlYnVnKFwicmVjb25uZWN0IGZhaWxlZFwiKTtcbiAgICAgICAgICAgIHRoaXMuYmFja29mZi5yZXNldCgpO1xuICAgICAgICAgICAgdGhpcy5lbWl0UmVzZXJ2ZWQoXCJyZWNvbm5lY3RfZmFpbGVkXCIpO1xuICAgICAgICAgICAgdGhpcy5fcmVjb25uZWN0aW5nID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBkZWxheSA9IHRoaXMuYmFja29mZi5kdXJhdGlvbigpO1xuICAgICAgICAgICAgZGVidWcoXCJ3aWxsIHdhaXQgJWRtcyBiZWZvcmUgcmVjb25uZWN0IGF0dGVtcHRcIiwgZGVsYXkpO1xuICAgICAgICAgICAgdGhpcy5fcmVjb25uZWN0aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGYuc2tpcFJlY29ubmVjdClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGRlYnVnKFwiYXR0ZW1wdGluZyByZWNvbm5lY3RcIik7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0UmVzZXJ2ZWQoXCJyZWNvbm5lY3RfYXR0ZW1wdFwiLCBzZWxmLmJhY2tvZmYuYXR0ZW1wdHMpO1xuICAgICAgICAgICAgICAgIC8vIGNoZWNrIGFnYWluIGZvciB0aGUgY2FzZSBzb2NrZXQgY2xvc2VkIGluIGFib3ZlIGV2ZW50c1xuICAgICAgICAgICAgICAgIGlmIChzZWxmLnNraXBSZWNvbm5lY3QpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICBzZWxmLm9wZW4oKGVycikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWJ1ZyhcInJlY29ubmVjdCBhdHRlbXB0IGVycm9yXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5fcmVjb25uZWN0aW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnJlY29ubmVjdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0UmVzZXJ2ZWQoXCJyZWNvbm5lY3RfZXJyb3JcIiwgZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlYnVnKFwicmVjb25uZWN0IHN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLm9ucmVjb25uZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sIGRlbGF5KTtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdHMuYXV0b1VucmVmKSB7XG4gICAgICAgICAgICAgICAgdGltZXIudW5yZWYoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc3Vicy5wdXNoKGZ1bmN0aW9uIHN1YkRlc3Ryb3koKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxlZCB1cG9uIHN1Y2Nlc3NmdWwgcmVjb25uZWN0LlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBvbnJlY29ubmVjdCgpIHtcbiAgICAgICAgY29uc3QgYXR0ZW1wdCA9IHRoaXMuYmFja29mZi5hdHRlbXB0cztcbiAgICAgICAgdGhpcy5fcmVjb25uZWN0aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYmFja29mZi5yZXNldCgpO1xuICAgICAgICB0aGlzLmVtaXRSZXNlcnZlZChcInJlY29ubmVjdFwiLCBhdHRlbXB0KTtcbiAgICB9XG59XG5leHBvcnRzLk1hbmFnZXIgPSBNYW5hZ2VyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLm9uID0gdm9pZCAwO1xuZnVuY3Rpb24gb24ob2JqLCBldiwgZm4pIHtcbiAgICBvYmoub24oZXYsIGZuKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gc3ViRGVzdHJveSgpIHtcbiAgICAgICAgb2JqLm9mZihldiwgZm4pO1xuICAgIH07XG59XG5leHBvcnRzLm9uID0gb247XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuU29ja2V0ID0gdm9pZCAwO1xuY29uc3Qgc29ja2V0X2lvX3BhcnNlcl8xID0gcmVxdWlyZShcInNvY2tldC5pby1wYXJzZXJcIik7XG5jb25zdCBvbl8xID0gcmVxdWlyZShcIi4vb25cIik7XG5jb25zdCB0eXBlZF9ldmVudHNfMSA9IHJlcXVpcmUoXCIuL3R5cGVkLWV2ZW50c1wiKTtcbmNvbnN0IGRlYnVnID0gcmVxdWlyZShcImRlYnVnXCIpKFwic29ja2V0LmlvLWNsaWVudDpzb2NrZXRcIik7XG4vKipcbiAqIEludGVybmFsIGV2ZW50cy5cbiAqIFRoZXNlIGV2ZW50cyBjYW4ndCBiZSBlbWl0dGVkIGJ5IHRoZSB1c2VyLlxuICovXG5jb25zdCBSRVNFUlZFRF9FVkVOVFMgPSBPYmplY3QuZnJlZXplKHtcbiAgICBjb25uZWN0OiAxLFxuICAgIGNvbm5lY3RfZXJyb3I6IDEsXG4gICAgZGlzY29ubmVjdDogMSxcbiAgICBkaXNjb25uZWN0aW5nOiAxLFxuICAgIC8vIEV2ZW50RW1pdHRlciByZXNlcnZlZCBldmVudHM6IGh0dHBzOi8vbm9kZWpzLm9yZy9hcGkvZXZlbnRzLmh0bWwjZXZlbnRzX2V2ZW50X25ld2xpc3RlbmVyXG4gICAgbmV3TGlzdGVuZXI6IDEsXG4gICAgcmVtb3ZlTGlzdGVuZXI6IDEsXG59KTtcbmNsYXNzIFNvY2tldCBleHRlbmRzIHR5cGVkX2V2ZW50c18xLlN0cmljdEV2ZW50RW1pdHRlciB7XG4gICAgLyoqXG4gICAgICogYFNvY2tldGAgY29uc3RydWN0b3IuXG4gICAgICpcbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoaW8sIG5zcCwgb3B0cykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnJlY2VpdmVCdWZmZXIgPSBbXTtcbiAgICAgICAgdGhpcy5zZW5kQnVmZmVyID0gW107XG4gICAgICAgIHRoaXMuaWRzID0gMDtcbiAgICAgICAgdGhpcy5hY2tzID0ge307XG4gICAgICAgIHRoaXMuZmxhZ3MgPSB7fTtcbiAgICAgICAgdGhpcy5pbyA9IGlvO1xuICAgICAgICB0aGlzLm5zcCA9IG5zcDtcbiAgICAgICAgdGhpcy5pZHMgPSAwO1xuICAgICAgICB0aGlzLmFja3MgPSB7fTtcbiAgICAgICAgdGhpcy5yZWNlaXZlQnVmZmVyID0gW107XG4gICAgICAgIHRoaXMuc2VuZEJ1ZmZlciA9IFtdO1xuICAgICAgICB0aGlzLmNvbm5lY3RlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmRpc2Nvbm5lY3RlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuZmxhZ3MgPSB7fTtcbiAgICAgICAgaWYgKG9wdHMgJiYgb3B0cy5hdXRoKSB7XG4gICAgICAgICAgICB0aGlzLmF1dGggPSBvcHRzLmF1dGg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaW8uX2F1dG9Db25uZWN0KVxuICAgICAgICAgICAgdGhpcy5vcGVuKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFN1YnNjcmliZSB0byBvcGVuLCBjbG9zZSBhbmQgcGFja2V0IGV2ZW50c1xuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBzdWJFdmVudHMoKSB7XG4gICAgICAgIGlmICh0aGlzLnN1YnMpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGNvbnN0IGlvID0gdGhpcy5pbztcbiAgICAgICAgdGhpcy5zdWJzID0gW1xuICAgICAgICAgICAgb25fMS5vbihpbywgXCJvcGVuXCIsIHRoaXMub25vcGVuLmJpbmQodGhpcykpLFxuICAgICAgICAgICAgb25fMS5vbihpbywgXCJwYWNrZXRcIiwgdGhpcy5vbnBhY2tldC5iaW5kKHRoaXMpKSxcbiAgICAgICAgICAgIG9uXzEub24oaW8sIFwiZXJyb3JcIiwgdGhpcy5vbmVycm9yLmJpbmQodGhpcykpLFxuICAgICAgICAgICAgb25fMS5vbihpbywgXCJjbG9zZVwiLCB0aGlzLm9uY2xvc2UuYmluZCh0aGlzKSksXG4gICAgICAgIF07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdGhlIFNvY2tldCB3aWxsIHRyeSB0byByZWNvbm5lY3Qgd2hlbiBpdHMgTWFuYWdlciBjb25uZWN0cyBvciByZWNvbm5lY3RzXG4gICAgICovXG4gICAgZ2V0IGFjdGl2ZSgpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5zdWJzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBcIk9wZW5zXCIgdGhlIHNvY2tldC5cbiAgICAgKlxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBjb25uZWN0KCkge1xuICAgICAgICBpZiAodGhpcy5jb25uZWN0ZWQpXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgdGhpcy5zdWJFdmVudHMoKTtcbiAgICAgICAgaWYgKCF0aGlzLmlvW1wiX3JlY29ubmVjdGluZ1wiXSlcbiAgICAgICAgICAgIHRoaXMuaW8ub3BlbigpOyAvLyBlbnN1cmUgb3BlblxuICAgICAgICBpZiAoXCJvcGVuXCIgPT09IHRoaXMuaW8uX3JlYWR5U3RhdGUpXG4gICAgICAgICAgICB0aGlzLm9ub3BlbigpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWxpYXMgZm9yIGNvbm5lY3QoKVxuICAgICAqL1xuICAgIG9wZW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbm5lY3QoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2VuZHMgYSBgbWVzc2FnZWAgZXZlbnQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHNlbGZcbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgc2VuZCguLi5hcmdzKSB7XG4gICAgICAgIGFyZ3MudW5zaGlmdChcIm1lc3NhZ2VcIik7XG4gICAgICAgIHRoaXMuZW1pdC5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRlIGBlbWl0YC5cbiAgICAgKiBJZiB0aGUgZXZlbnQgaXMgaW4gYGV2ZW50c2AsIGl0J3MgZW1pdHRlZCBub3JtYWxseS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4gc2VsZlxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBlbWl0KGV2LCAuLi5hcmdzKSB7XG4gICAgICAgIGlmIChSRVNFUlZFRF9FVkVOVFMuaGFzT3duUHJvcGVydHkoZXYpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1wiJyArIGV2ICsgJ1wiIGlzIGEgcmVzZXJ2ZWQgZXZlbnQgbmFtZScpO1xuICAgICAgICB9XG4gICAgICAgIGFyZ3MudW5zaGlmdChldik7XG4gICAgICAgIGNvbnN0IHBhY2tldCA9IHtcbiAgICAgICAgICAgIHR5cGU6IHNvY2tldF9pb19wYXJzZXJfMS5QYWNrZXRUeXBlLkVWRU5ULFxuICAgICAgICAgICAgZGF0YTogYXJncyxcbiAgICAgICAgfTtcbiAgICAgICAgcGFja2V0Lm9wdGlvbnMgPSB7fTtcbiAgICAgICAgcGFja2V0Lm9wdGlvbnMuY29tcHJlc3MgPSB0aGlzLmZsYWdzLmNvbXByZXNzICE9PSBmYWxzZTtcbiAgICAgICAgLy8gZXZlbnQgYWNrIGNhbGxiYWNrXG4gICAgICAgIGlmIChcImZ1bmN0aW9uXCIgPT09IHR5cGVvZiBhcmdzW2FyZ3MubGVuZ3RoIC0gMV0pIHtcbiAgICAgICAgICAgIGRlYnVnKFwiZW1pdHRpbmcgcGFja2V0IHdpdGggYWNrIGlkICVkXCIsIHRoaXMuaWRzKTtcbiAgICAgICAgICAgIHRoaXMuYWNrc1t0aGlzLmlkc10gPSBhcmdzLnBvcCgpO1xuICAgICAgICAgICAgcGFja2V0LmlkID0gdGhpcy5pZHMrKztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpc1RyYW5zcG9ydFdyaXRhYmxlID0gdGhpcy5pby5lbmdpbmUgJiZcbiAgICAgICAgICAgIHRoaXMuaW8uZW5naW5lLnRyYW5zcG9ydCAmJlxuICAgICAgICAgICAgdGhpcy5pby5lbmdpbmUudHJhbnNwb3J0LndyaXRhYmxlO1xuICAgICAgICBjb25zdCBkaXNjYXJkUGFja2V0ID0gdGhpcy5mbGFncy52b2xhdGlsZSAmJiAoIWlzVHJhbnNwb3J0V3JpdGFibGUgfHwgIXRoaXMuY29ubmVjdGVkKTtcbiAgICAgICAgaWYgKGRpc2NhcmRQYWNrZXQpIHtcbiAgICAgICAgICAgIGRlYnVnKFwiZGlzY2FyZCBwYWNrZXQgYXMgdGhlIHRyYW5zcG9ydCBpcyBub3QgY3VycmVudGx5IHdyaXRhYmxlXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuY29ubmVjdGVkKSB7XG4gICAgICAgICAgICB0aGlzLnBhY2tldChwYWNrZXQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZW5kQnVmZmVyLnB1c2gocGFja2V0KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZsYWdzID0ge307XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZW5kcyBhIHBhY2tldC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBwYWNrZXRcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHBhY2tldChwYWNrZXQpIHtcbiAgICAgICAgcGFja2V0Lm5zcCA9IHRoaXMubnNwO1xuICAgICAgICB0aGlzLmlvLl9wYWNrZXQocGFja2V0KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHVwb24gZW5naW5lIGBvcGVuYC5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgb25vcGVuKCkge1xuICAgICAgICBkZWJ1ZyhcInRyYW5zcG9ydCBpcyBvcGVuIC0gY29ubmVjdGluZ1wiKTtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmF1dGggPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICB0aGlzLmF1dGgoKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhY2tldCh7IHR5cGU6IHNvY2tldF9pb19wYXJzZXJfMS5QYWNrZXRUeXBlLkNPTk5FQ1QsIGRhdGEgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucGFja2V0KHsgdHlwZTogc29ja2V0X2lvX3BhcnNlcl8xLlBhY2tldFR5cGUuQ09OTkVDVCwgZGF0YTogdGhpcy5hdXRoIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxlZCB1cG9uIGVuZ2luZSBvciBtYW5hZ2VyIGBlcnJvcmAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZXJyXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBvbmVycm9yKGVycikge1xuICAgICAgICBpZiAoIXRoaXMuY29ubmVjdGVkKSB7XG4gICAgICAgICAgICB0aGlzLmVtaXRSZXNlcnZlZChcImNvbm5lY3RfZXJyb3JcIiwgZXJyKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgdXBvbiBlbmdpbmUgYGNsb3NlYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSByZWFzb25cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIG9uY2xvc2UocmVhc29uKSB7XG4gICAgICAgIGRlYnVnKFwiY2xvc2UgKCVzKVwiLCByZWFzb24pO1xuICAgICAgICB0aGlzLmNvbm5lY3RlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmRpc2Nvbm5lY3RlZCA9IHRydWU7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmlkO1xuICAgICAgICB0aGlzLmVtaXRSZXNlcnZlZChcImRpc2Nvbm5lY3RcIiwgcmVhc29uKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHdpdGggc29ja2V0IHBhY2tldC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBwYWNrZXRcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIG9ucGFja2V0KHBhY2tldCkge1xuICAgICAgICBjb25zdCBzYW1lTmFtZXNwYWNlID0gcGFja2V0Lm5zcCA9PT0gdGhpcy5uc3A7XG4gICAgICAgIGlmICghc2FtZU5hbWVzcGFjZSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgc3dpdGNoIChwYWNrZXQudHlwZSkge1xuICAgICAgICAgICAgY2FzZSBzb2NrZXRfaW9fcGFyc2VyXzEuUGFja2V0VHlwZS5DT05ORUNUOlxuICAgICAgICAgICAgICAgIGlmIChwYWNrZXQuZGF0YSAmJiBwYWNrZXQuZGF0YS5zaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaWQgPSBwYWNrZXQuZGF0YS5zaWQ7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25jb25uZWN0KGlkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdFJlc2VydmVkKFwiY29ubmVjdF9lcnJvclwiLCBuZXcgRXJyb3IoXCJJdCBzZWVtcyB5b3UgYXJlIHRyeWluZyB0byByZWFjaCBhIFNvY2tldC5JTyBzZXJ2ZXIgaW4gdjIueCB3aXRoIGEgdjMueCBjbGllbnQsIGJ1dCB0aGV5IGFyZSBub3QgY29tcGF0aWJsZSAobW9yZSBpbmZvcm1hdGlvbiBoZXJlOiBodHRwczovL3NvY2tldC5pby9kb2NzL3YzL21pZ3JhdGluZy1mcm9tLTIteC10by0zLTAvKVwiKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBzb2NrZXRfaW9fcGFyc2VyXzEuUGFja2V0VHlwZS5FVkVOVDpcbiAgICAgICAgICAgICAgICB0aGlzLm9uZXZlbnQocGFja2V0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2Ugc29ja2V0X2lvX3BhcnNlcl8xLlBhY2tldFR5cGUuQklOQVJZX0VWRU5UOlxuICAgICAgICAgICAgICAgIHRoaXMub25ldmVudChwYWNrZXQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBzb2NrZXRfaW9fcGFyc2VyXzEuUGFja2V0VHlwZS5BQ0s6XG4gICAgICAgICAgICAgICAgdGhpcy5vbmFjayhwYWNrZXQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBzb2NrZXRfaW9fcGFyc2VyXzEuUGFja2V0VHlwZS5CSU5BUllfQUNLOlxuICAgICAgICAgICAgICAgIHRoaXMub25hY2socGFja2V0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2Ugc29ja2V0X2lvX3BhcnNlcl8xLlBhY2tldFR5cGUuRElTQ09OTkVDVDpcbiAgICAgICAgICAgICAgICB0aGlzLm9uZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBzb2NrZXRfaW9fcGFyc2VyXzEuUGFja2V0VHlwZS5DT05ORUNUX0VSUk9SOlxuICAgICAgICAgICAgICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcihwYWNrZXQuZGF0YS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgZXJyLmRhdGEgPSBwYWNrZXQuZGF0YS5kYXRhO1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdFJlc2VydmVkKFwiY29ubmVjdF9lcnJvclwiLCBlcnIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxlZCB1cG9uIGEgc2VydmVyIGV2ZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIHBhY2tldFxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgb25ldmVudChwYWNrZXQpIHtcbiAgICAgICAgY29uc3QgYXJncyA9IHBhY2tldC5kYXRhIHx8IFtdO1xuICAgICAgICBkZWJ1ZyhcImVtaXR0aW5nIGV2ZW50ICVqXCIsIGFyZ3MpO1xuICAgICAgICBpZiAobnVsbCAhPSBwYWNrZXQuaWQpIHtcbiAgICAgICAgICAgIGRlYnVnKFwiYXR0YWNoaW5nIGFjayBjYWxsYmFjayB0byBldmVudFwiKTtcbiAgICAgICAgICAgIGFyZ3MucHVzaCh0aGlzLmFjayhwYWNrZXQuaWQpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jb25uZWN0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZW1pdEV2ZW50KGFyZ3MpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yZWNlaXZlQnVmZmVyLnB1c2goT2JqZWN0LmZyZWV6ZShhcmdzKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZW1pdEV2ZW50KGFyZ3MpIHtcbiAgICAgICAgaWYgKHRoaXMuX2FueUxpc3RlbmVycyAmJiB0aGlzLl9hbnlMaXN0ZW5lcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBsaXN0ZW5lcnMgPSB0aGlzLl9hbnlMaXN0ZW5lcnMuc2xpY2UoKTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgbGlzdGVuZXIgb2YgbGlzdGVuZXJzKSB7XG4gICAgICAgICAgICAgICAgbGlzdGVuZXIuYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc3VwZXIuZW1pdC5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUHJvZHVjZXMgYW4gYWNrIGNhbGxiYWNrIHRvIGVtaXQgd2l0aCBhbiBldmVudC5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgYWNrKGlkKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBsZXQgc2VudCA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICAgICAgICAgIC8vIHByZXZlbnQgZG91YmxlIGNhbGxiYWNrc1xuICAgICAgICAgICAgaWYgKHNlbnQpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgc2VudCA9IHRydWU7XG4gICAgICAgICAgICBkZWJ1ZyhcInNlbmRpbmcgYWNrICVqXCIsIGFyZ3MpO1xuICAgICAgICAgICAgc2VsZi5wYWNrZXQoe1xuICAgICAgICAgICAgICAgIHR5cGU6IHNvY2tldF9pb19wYXJzZXJfMS5QYWNrZXRUeXBlLkFDSyxcbiAgICAgICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICAgICAgZGF0YTogYXJncyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgdXBvbiBhIHNlcnZlciBhY2tub3dsZWdlbWVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBwYWNrZXRcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIG9uYWNrKHBhY2tldCkge1xuICAgICAgICBjb25zdCBhY2sgPSB0aGlzLmFja3NbcGFja2V0LmlkXTtcbiAgICAgICAgaWYgKFwiZnVuY3Rpb25cIiA9PT0gdHlwZW9mIGFjaykge1xuICAgICAgICAgICAgZGVidWcoXCJjYWxsaW5nIGFjayAlcyB3aXRoICVqXCIsIHBhY2tldC5pZCwgcGFja2V0LmRhdGEpO1xuICAgICAgICAgICAgYWNrLmFwcGx5KHRoaXMsIHBhY2tldC5kYXRhKTtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmFja3NbcGFja2V0LmlkXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRlYnVnKFwiYmFkIGFjayAlc1wiLCBwYWNrZXQuaWQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxlZCB1cG9uIHNlcnZlciBjb25uZWN0LlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBvbmNvbm5lY3QoaWQpIHtcbiAgICAgICAgZGVidWcoXCJzb2NrZXQgY29ubmVjdGVkIHdpdGggaWQgJXNcIiwgaWQpO1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMuY29ubmVjdGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5kaXNjb25uZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5lbWl0QnVmZmVyZWQoKTtcbiAgICAgICAgdGhpcy5lbWl0UmVzZXJ2ZWQoXCJjb25uZWN0XCIpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBFbWl0IGJ1ZmZlcmVkIGV2ZW50cyAocmVjZWl2ZWQgYW5kIGVtaXR0ZWQpLlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBlbWl0QnVmZmVyZWQoKSB7XG4gICAgICAgIHRoaXMucmVjZWl2ZUJ1ZmZlci5mb3JFYWNoKChhcmdzKSA9PiB0aGlzLmVtaXRFdmVudChhcmdzKSk7XG4gICAgICAgIHRoaXMucmVjZWl2ZUJ1ZmZlciA9IFtdO1xuICAgICAgICB0aGlzLnNlbmRCdWZmZXIuZm9yRWFjaCgocGFja2V0KSA9PiB0aGlzLnBhY2tldChwYWNrZXQpKTtcbiAgICAgICAgdGhpcy5zZW5kQnVmZmVyID0gW107XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxlZCB1cG9uIHNlcnZlciBkaXNjb25uZWN0LlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBvbmRpc2Nvbm5lY3QoKSB7XG4gICAgICAgIGRlYnVnKFwic2VydmVyIGRpc2Nvbm5lY3QgKCVzKVwiLCB0aGlzLm5zcCk7XG4gICAgICAgIHRoaXMuZGVzdHJveSgpO1xuICAgICAgICB0aGlzLm9uY2xvc2UoXCJpbyBzZXJ2ZXIgZGlzY29ubmVjdFwiKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHVwb24gZm9yY2VkIGNsaWVudC9zZXJ2ZXIgc2lkZSBkaXNjb25uZWN0aW9ucyxcbiAgICAgKiB0aGlzIG1ldGhvZCBlbnN1cmVzIHRoZSBtYW5hZ2VyIHN0b3BzIHRyYWNraW5nIHVzIGFuZFxuICAgICAqIHRoYXQgcmVjb25uZWN0aW9ucyBkb24ndCBnZXQgdHJpZ2dlcmVkIGZvciB0aGlzLlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBkZXN0cm95KCkge1xuICAgICAgICBpZiAodGhpcy5zdWJzKSB7XG4gICAgICAgICAgICAvLyBjbGVhbiBzdWJzY3JpcHRpb25zIHRvIGF2b2lkIHJlY29ubmVjdGlvbnNcbiAgICAgICAgICAgIHRoaXMuc3Vicy5mb3JFYWNoKChzdWJEZXN0cm95KSA9PiBzdWJEZXN0cm95KCkpO1xuICAgICAgICAgICAgdGhpcy5zdWJzID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW9bXCJfZGVzdHJveVwiXSh0aGlzKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRGlzY29ubmVjdHMgdGhlIHNvY2tldCBtYW51YWxseS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4gc2VsZlxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBkaXNjb25uZWN0KCkge1xuICAgICAgICBpZiAodGhpcy5jb25uZWN0ZWQpIHtcbiAgICAgICAgICAgIGRlYnVnKFwicGVyZm9ybWluZyBkaXNjb25uZWN0ICglcylcIiwgdGhpcy5uc3ApO1xuICAgICAgICAgICAgdGhpcy5wYWNrZXQoeyB0eXBlOiBzb2NrZXRfaW9fcGFyc2VyXzEuUGFja2V0VHlwZS5ESVNDT05ORUNUIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIHJlbW92ZSBzb2NrZXQgZnJvbSBwb29sXG4gICAgICAgIHRoaXMuZGVzdHJveSgpO1xuICAgICAgICBpZiAodGhpcy5jb25uZWN0ZWQpIHtcbiAgICAgICAgICAgIC8vIGZpcmUgZXZlbnRzXG4gICAgICAgICAgICB0aGlzLm9uY2xvc2UoXCJpbyBjbGllbnQgZGlzY29ubmVjdFwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWxpYXMgZm9yIGRpc2Nvbm5lY3QoKVxuICAgICAqXG4gICAgICogQHJldHVybiBzZWxmXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIGNsb3NlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kaXNjb25uZWN0KCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGNvbXByZXNzIGZsYWcuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY29tcHJlc3MgLSBpZiBgdHJ1ZWAsIGNvbXByZXNzZXMgdGhlIHNlbmRpbmcgZGF0YVxuICAgICAqIEByZXR1cm4gc2VsZlxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBjb21wcmVzcyhjb21wcmVzcykge1xuICAgICAgICB0aGlzLmZsYWdzLmNvbXByZXNzID0gY29tcHJlc3M7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIGEgbW9kaWZpZXIgZm9yIGEgc3Vic2VxdWVudCBldmVudCBlbWlzc2lvbiB0aGF0IHRoZSBldmVudCBtZXNzYWdlIHdpbGwgYmUgZHJvcHBlZCB3aGVuIHRoaXMgc29ja2V0IGlzIG5vdFxuICAgICAqIHJlYWR5IHRvIHNlbmQgbWVzc2FnZXMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBzZWxmXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIGdldCB2b2xhdGlsZSgpIHtcbiAgICAgICAgdGhpcy5mbGFncy52b2xhdGlsZSA9IHRydWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGRzIGEgbGlzdGVuZXIgdGhhdCB3aWxsIGJlIGZpcmVkIHdoZW4gYW55IGV2ZW50IGlzIGVtaXR0ZWQuIFRoZSBldmVudCBuYW1lIGlzIHBhc3NlZCBhcyB0aGUgZmlyc3QgYXJndW1lbnQgdG8gdGhlXG4gICAgICogY2FsbGJhY2suXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbGlzdGVuZXJcbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgb25BbnkobGlzdGVuZXIpIHtcbiAgICAgICAgdGhpcy5fYW55TGlzdGVuZXJzID0gdGhpcy5fYW55TGlzdGVuZXJzIHx8IFtdO1xuICAgICAgICB0aGlzLl9hbnlMaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGRzIGEgbGlzdGVuZXIgdGhhdCB3aWxsIGJlIGZpcmVkIHdoZW4gYW55IGV2ZW50IGlzIGVtaXR0ZWQuIFRoZSBldmVudCBuYW1lIGlzIHBhc3NlZCBhcyB0aGUgZmlyc3QgYXJndW1lbnQgdG8gdGhlXG4gICAgICogY2FsbGJhY2suIFRoZSBsaXN0ZW5lciBpcyBhZGRlZCB0byB0aGUgYmVnaW5uaW5nIG9mIHRoZSBsaXN0ZW5lcnMgYXJyYXkuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbGlzdGVuZXJcbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgcHJlcGVuZEFueShsaXN0ZW5lcikge1xuICAgICAgICB0aGlzLl9hbnlMaXN0ZW5lcnMgPSB0aGlzLl9hbnlMaXN0ZW5lcnMgfHwgW107XG4gICAgICAgIHRoaXMuX2FueUxpc3RlbmVycy51bnNoaWZ0KGxpc3RlbmVyKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgdGhlIGxpc3RlbmVyIHRoYXQgd2lsbCBiZSBmaXJlZCB3aGVuIGFueSBldmVudCBpcyBlbWl0dGVkLlxuICAgICAqXG4gICAgICogQHBhcmFtIGxpc3RlbmVyXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIG9mZkFueShsaXN0ZW5lcikge1xuICAgICAgICBpZiAoIXRoaXMuX2FueUxpc3RlbmVycykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxpc3RlbmVyKSB7XG4gICAgICAgICAgICBjb25zdCBsaXN0ZW5lcnMgPSB0aGlzLl9hbnlMaXN0ZW5lcnM7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChsaXN0ZW5lciA9PT0gbGlzdGVuZXJzW2ldKSB7XG4gICAgICAgICAgICAgICAgICAgIGxpc3RlbmVycy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2FueUxpc3RlbmVycyA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIGxpc3RlbmVycyB0aGF0IGFyZSBsaXN0ZW5pbmcgZm9yIGFueSBldmVudCB0aGF0IGlzIHNwZWNpZmllZC4gVGhpcyBhcnJheSBjYW4gYmUgbWFuaXB1bGF0ZWQsXG4gICAgICogZS5nLiB0byByZW1vdmUgbGlzdGVuZXJzLlxuICAgICAqXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIGxpc3RlbmVyc0FueSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FueUxpc3RlbmVycyB8fCBbXTtcbiAgICB9XG59XG5leHBvcnRzLlNvY2tldCA9IFNvY2tldDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5TdHJpY3RFdmVudEVtaXR0ZXIgPSB2b2lkIDA7XG5jb25zdCBFbWl0dGVyID0gcmVxdWlyZShcImNvbXBvbmVudC1lbWl0dGVyXCIpO1xuLyoqXG4gKiBTdHJpY3RseSB0eXBlZCB2ZXJzaW9uIG9mIGFuIGBFdmVudEVtaXR0ZXJgLiBBIGBUeXBlZEV2ZW50RW1pdHRlcmAgdGFrZXMgdHlwZVxuICogcGFyYW1ldGVycyBmb3IgbWFwcGluZ3Mgb2YgZXZlbnQgbmFtZXMgdG8gZXZlbnQgZGF0YSB0eXBlcywgYW5kIHN0cmljdGx5XG4gKiB0eXBlcyBtZXRob2QgY2FsbHMgdG8gdGhlIGBFdmVudEVtaXR0ZXJgIGFjY29yZGluZyB0byB0aGVzZSBldmVudCBtYXBzLlxuICpcbiAqIEB0eXBlUGFyYW0gTGlzdGVuRXZlbnRzIC0gYEV2ZW50c01hcGAgb2YgdXNlci1kZWZpbmVkIGV2ZW50cyB0aGF0IGNhbiBiZVxuICogbGlzdGVuZWQgdG8gd2l0aCBgb25gIG9yIGBvbmNlYFxuICogQHR5cGVQYXJhbSBFbWl0RXZlbnRzIC0gYEV2ZW50c01hcGAgb2YgdXNlci1kZWZpbmVkIGV2ZW50cyB0aGF0IGNhbiBiZVxuICogZW1pdHRlZCB3aXRoIGBlbWl0YFxuICogQHR5cGVQYXJhbSBSZXNlcnZlZEV2ZW50cyAtIGBFdmVudHNNYXBgIG9mIHJlc2VydmVkIGV2ZW50cywgdGhhdCBjYW4gYmVcbiAqIGVtaXR0ZWQgYnkgc29ja2V0LmlvIHdpdGggYGVtaXRSZXNlcnZlZGAsIGFuZCBjYW4gYmUgbGlzdGVuZWQgdG8gd2l0aFxuICogYGxpc3RlbmAuXG4gKi9cbmNsYXNzIFN0cmljdEV2ZW50RW1pdHRlciBleHRlbmRzIEVtaXR0ZXIge1xuICAgIC8qKlxuICAgICAqIEFkZHMgdGhlIGBsaXN0ZW5lcmAgZnVuY3Rpb24gYXMgYW4gZXZlbnQgbGlzdGVuZXIgZm9yIGBldmAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZXYgTmFtZSBvZiB0aGUgZXZlbnRcbiAgICAgKiBAcGFyYW0gbGlzdGVuZXIgQ2FsbGJhY2sgZnVuY3Rpb25cbiAgICAgKi9cbiAgICBvbihldiwgbGlzdGVuZXIpIHtcbiAgICAgICAgc3VwZXIub24oZXYsIGxpc3RlbmVyKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFkZHMgYSBvbmUtdGltZSBgbGlzdGVuZXJgIGZ1bmN0aW9uIGFzIGFuIGV2ZW50IGxpc3RlbmVyIGZvciBgZXZgLlxuICAgICAqXG4gICAgICogQHBhcmFtIGV2IE5hbWUgb2YgdGhlIGV2ZW50XG4gICAgICogQHBhcmFtIGxpc3RlbmVyIENhbGxiYWNrIGZ1bmN0aW9uXG4gICAgICovXG4gICAgb25jZShldiwgbGlzdGVuZXIpIHtcbiAgICAgICAgc3VwZXIub25jZShldiwgbGlzdGVuZXIpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogRW1pdHMgYW4gZXZlbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZXYgTmFtZSBvZiB0aGUgZXZlbnRcbiAgICAgKiBAcGFyYW0gYXJncyBWYWx1ZXMgdG8gc2VuZCB0byBsaXN0ZW5lcnMgb2YgdGhpcyBldmVudFxuICAgICAqL1xuICAgIGVtaXQoZXYsIC4uLmFyZ3MpIHtcbiAgICAgICAgc3VwZXIuZW1pdChldiwgLi4uYXJncyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBFbWl0cyBhIHJlc2VydmVkIGV2ZW50LlxuICAgICAqXG4gICAgICogVGhpcyBtZXRob2QgaXMgYHByb3RlY3RlZGAsIHNvIHRoYXQgb25seSBhIGNsYXNzIGV4dGVuZGluZ1xuICAgICAqIGBTdHJpY3RFdmVudEVtaXR0ZXJgIGNhbiBlbWl0IGl0cyBvd24gcmVzZXJ2ZWQgZXZlbnRzLlxuICAgICAqXG4gICAgICogQHBhcmFtIGV2IFJlc2VydmVkIGV2ZW50IG5hbWVcbiAgICAgKiBAcGFyYW0gYXJncyBBcmd1bWVudHMgdG8gZW1pdCBhbG9uZyB3aXRoIHRoZSBldmVudFxuICAgICAqL1xuICAgIGVtaXRSZXNlcnZlZChldiwgLi4uYXJncykge1xuICAgICAgICBzdXBlci5lbWl0KGV2LCAuLi5hcmdzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGxpc3RlbmVycyBsaXN0ZW5pbmcgdG8gYW4gZXZlbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZXZlbnQgRXZlbnQgbmFtZVxuICAgICAqIEByZXR1cm5zIEFycmF5IG9mIGxpc3RlbmVycyBzdWJzY3JpYmVkIHRvIGBldmVudGBcbiAgICAgKi9cbiAgICBsaXN0ZW5lcnMoZXZlbnQpIHtcbiAgICAgICAgcmV0dXJuIHN1cGVyLmxpc3RlbmVycyhldmVudCk7XG4gICAgfVxufVxuZXhwb3J0cy5TdHJpY3RFdmVudEVtaXR0ZXIgPSBTdHJpY3RFdmVudEVtaXR0ZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMudXJsID0gdm9pZCAwO1xuY29uc3QgcGFyc2V1cmkgPSByZXF1aXJlKFwicGFyc2V1cmlcIik7XG5jb25zdCBkZWJ1ZyA9IHJlcXVpcmUoXCJkZWJ1Z1wiKShcInNvY2tldC5pby1jbGllbnQ6dXJsXCIpO1xuLyoqXG4gKiBVUkwgcGFyc2VyLlxuICpcbiAqIEBwYXJhbSB1cmkgLSB1cmxcbiAqIEBwYXJhbSBwYXRoIC0gdGhlIHJlcXVlc3QgcGF0aCBvZiB0aGUgY29ubmVjdGlvblxuICogQHBhcmFtIGxvYyAtIEFuIG9iamVjdCBtZWFudCB0byBtaW1pYyB3aW5kb3cubG9jYXRpb24uXG4gKiAgICAgICAgRGVmYXVsdHMgdG8gd2luZG93LmxvY2F0aW9uLlxuICogQHB1YmxpY1xuICovXG5mdW5jdGlvbiB1cmwodXJpLCBwYXRoID0gXCJcIiwgbG9jKSB7XG4gICAgbGV0IG9iaiA9IHVyaTtcbiAgICAvLyBkZWZhdWx0IHRvIHdpbmRvdy5sb2NhdGlvblxuICAgIGxvYyA9IGxvYyB8fCAodHlwZW9mIGxvY2F0aW9uICE9PSBcInVuZGVmaW5lZFwiICYmIGxvY2F0aW9uKTtcbiAgICBpZiAobnVsbCA9PSB1cmkpXG4gICAgICAgIHVyaSA9IGxvYy5wcm90b2NvbCArIFwiLy9cIiArIGxvYy5ob3N0O1xuICAgIC8vIHJlbGF0aXZlIHBhdGggc3VwcG9ydFxuICAgIGlmICh0eXBlb2YgdXJpID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIGlmIChcIi9cIiA9PT0gdXJpLmNoYXJBdCgwKSkge1xuICAgICAgICAgICAgaWYgKFwiL1wiID09PSB1cmkuY2hhckF0KDEpKSB7XG4gICAgICAgICAgICAgICAgdXJpID0gbG9jLnByb3RvY29sICsgdXJpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdXJpID0gbG9jLmhvc3QgKyB1cmk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCEvXihodHRwcz98d3NzPyk6XFwvXFwvLy50ZXN0KHVyaSkpIHtcbiAgICAgICAgICAgIGRlYnVnKFwicHJvdG9jb2wtbGVzcyB1cmwgJXNcIiwgdXJpKTtcbiAgICAgICAgICAgIGlmIChcInVuZGVmaW5lZFwiICE9PSB0eXBlb2YgbG9jKSB7XG4gICAgICAgICAgICAgICAgdXJpID0gbG9jLnByb3RvY29sICsgXCIvL1wiICsgdXJpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdXJpID0gXCJodHRwczovL1wiICsgdXJpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIHBhcnNlXG4gICAgICAgIGRlYnVnKFwicGFyc2UgJXNcIiwgdXJpKTtcbiAgICAgICAgb2JqID0gcGFyc2V1cmkodXJpKTtcbiAgICB9XG4gICAgLy8gbWFrZSBzdXJlIHdlIHRyZWF0IGBsb2NhbGhvc3Q6ODBgIGFuZCBgbG9jYWxob3N0YCBlcXVhbGx5XG4gICAgaWYgKCFvYmoucG9ydCkge1xuICAgICAgICBpZiAoL14oaHR0cHx3cykkLy50ZXN0KG9iai5wcm90b2NvbCkpIHtcbiAgICAgICAgICAgIG9iai5wb3J0ID0gXCI4MFwiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKC9eKGh0dHB8d3MpcyQvLnRlc3Qob2JqLnByb3RvY29sKSkge1xuICAgICAgICAgICAgb2JqLnBvcnQgPSBcIjQ0M1wiO1xuICAgICAgICB9XG4gICAgfVxuICAgIG9iai5wYXRoID0gb2JqLnBhdGggfHwgXCIvXCI7XG4gICAgY29uc3QgaXB2NiA9IG9iai5ob3N0LmluZGV4T2YoXCI6XCIpICE9PSAtMTtcbiAgICBjb25zdCBob3N0ID0gaXB2NiA/IFwiW1wiICsgb2JqLmhvc3QgKyBcIl1cIiA6IG9iai5ob3N0O1xuICAgIC8vIGRlZmluZSB1bmlxdWUgaWRcbiAgICBvYmouaWQgPSBvYmoucHJvdG9jb2wgKyBcIjovL1wiICsgaG9zdCArIFwiOlwiICsgb2JqLnBvcnQgKyBwYXRoO1xuICAgIC8vIGRlZmluZSBocmVmXG4gICAgb2JqLmhyZWYgPVxuICAgICAgICBvYmoucHJvdG9jb2wgK1xuICAgICAgICAgICAgXCI6Ly9cIiArXG4gICAgICAgICAgICBob3N0ICtcbiAgICAgICAgICAgIChsb2MgJiYgbG9jLnBvcnQgPT09IG9iai5wb3J0ID8gXCJcIiA6IFwiOlwiICsgb2JqLnBvcnQpO1xuICAgIHJldHVybiBvYmo7XG59XG5leHBvcnRzLnVybCA9IHVybDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5yZWNvbnN0cnVjdFBhY2tldCA9IGV4cG9ydHMuZGVjb25zdHJ1Y3RQYWNrZXQgPSB2b2lkIDA7XG5jb25zdCBpc19iaW5hcnlfMSA9IHJlcXVpcmUoXCIuL2lzLWJpbmFyeVwiKTtcbi8qKlxuICogUmVwbGFjZXMgZXZlcnkgQnVmZmVyIHwgQXJyYXlCdWZmZXIgfCBCbG9iIHwgRmlsZSBpbiBwYWNrZXQgd2l0aCBhIG51bWJlcmVkIHBsYWNlaG9sZGVyLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYWNrZXQgLSBzb2NrZXQuaW8gZXZlbnQgcGFja2V0XG4gKiBAcmV0dXJuIHtPYmplY3R9IHdpdGggZGVjb25zdHJ1Y3RlZCBwYWNrZXQgYW5kIGxpc3Qgb2YgYnVmZmVyc1xuICogQHB1YmxpY1xuICovXG5mdW5jdGlvbiBkZWNvbnN0cnVjdFBhY2tldChwYWNrZXQpIHtcbiAgICBjb25zdCBidWZmZXJzID0gW107XG4gICAgY29uc3QgcGFja2V0RGF0YSA9IHBhY2tldC5kYXRhO1xuICAgIGNvbnN0IHBhY2sgPSBwYWNrZXQ7XG4gICAgcGFjay5kYXRhID0gX2RlY29uc3RydWN0UGFja2V0KHBhY2tldERhdGEsIGJ1ZmZlcnMpO1xuICAgIHBhY2suYXR0YWNobWVudHMgPSBidWZmZXJzLmxlbmd0aDsgLy8gbnVtYmVyIG9mIGJpbmFyeSAnYXR0YWNobWVudHMnXG4gICAgcmV0dXJuIHsgcGFja2V0OiBwYWNrLCBidWZmZXJzOiBidWZmZXJzIH07XG59XG5leHBvcnRzLmRlY29uc3RydWN0UGFja2V0ID0gZGVjb25zdHJ1Y3RQYWNrZXQ7XG5mdW5jdGlvbiBfZGVjb25zdHJ1Y3RQYWNrZXQoZGF0YSwgYnVmZmVycykge1xuICAgIGlmICghZGF0YSlcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgaWYgKGlzX2JpbmFyeV8xLmlzQmluYXJ5KGRhdGEpKSB7XG4gICAgICAgIGNvbnN0IHBsYWNlaG9sZGVyID0geyBfcGxhY2Vob2xkZXI6IHRydWUsIG51bTogYnVmZmVycy5sZW5ndGggfTtcbiAgICAgICAgYnVmZmVycy5wdXNoKGRhdGEpO1xuICAgICAgICByZXR1cm4gcGxhY2Vob2xkZXI7XG4gICAgfVxuICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgICAgY29uc3QgbmV3RGF0YSA9IG5ldyBBcnJheShkYXRhLmxlbmd0aCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbmV3RGF0YVtpXSA9IF9kZWNvbnN0cnVjdFBhY2tldChkYXRhW2ldLCBidWZmZXJzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3RGF0YTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIGRhdGEgPT09IFwib2JqZWN0XCIgJiYgIShkYXRhIGluc3RhbmNlb2YgRGF0ZSkpIHtcbiAgICAgICAgY29uc3QgbmV3RGF0YSA9IHt9O1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBkYXRhKSB7XG4gICAgICAgICAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgbmV3RGF0YVtrZXldID0gX2RlY29uc3RydWN0UGFja2V0KGRhdGFba2V5XSwgYnVmZmVycyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ld0RhdGE7XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xufVxuLyoqXG4gKiBSZWNvbnN0cnVjdHMgYSBiaW5hcnkgcGFja2V0IGZyb20gaXRzIHBsYWNlaG9sZGVyIHBhY2tldCBhbmQgYnVmZmVyc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYWNrZXQgLSBldmVudCBwYWNrZXQgd2l0aCBwbGFjZWhvbGRlcnNcbiAqIEBwYXJhbSB7QXJyYXl9IGJ1ZmZlcnMgLSBiaW5hcnkgYnVmZmVycyB0byBwdXQgaW4gcGxhY2Vob2xkZXIgcG9zaXRpb25zXG4gKiBAcmV0dXJuIHtPYmplY3R9IHJlY29uc3RydWN0ZWQgcGFja2V0XG4gKiBAcHVibGljXG4gKi9cbmZ1bmN0aW9uIHJlY29uc3RydWN0UGFja2V0KHBhY2tldCwgYnVmZmVycykge1xuICAgIHBhY2tldC5kYXRhID0gX3JlY29uc3RydWN0UGFja2V0KHBhY2tldC5kYXRhLCBidWZmZXJzKTtcbiAgICBwYWNrZXQuYXR0YWNobWVudHMgPSB1bmRlZmluZWQ7IC8vIG5vIGxvbmdlciB1c2VmdWxcbiAgICByZXR1cm4gcGFja2V0O1xufVxuZXhwb3J0cy5yZWNvbnN0cnVjdFBhY2tldCA9IHJlY29uc3RydWN0UGFja2V0O1xuZnVuY3Rpb24gX3JlY29uc3RydWN0UGFja2V0KGRhdGEsIGJ1ZmZlcnMpIHtcbiAgICBpZiAoIWRhdGEpXG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIGlmIChkYXRhICYmIGRhdGEuX3BsYWNlaG9sZGVyKSB7XG4gICAgICAgIHJldHVybiBidWZmZXJzW2RhdGEubnVtXTsgLy8gYXBwcm9wcmlhdGUgYnVmZmVyIChzaG91bGQgYmUgbmF0dXJhbCBvcmRlciBhbnl3YXkpXG4gICAgfVxuICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBkYXRhW2ldID0gX3JlY29uc3RydWN0UGFja2V0KGRhdGFbaV0sIGJ1ZmZlcnMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiBkYXRhID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIGRhdGEpIHtcbiAgICAgICAgICAgIGlmIChkYXRhLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBkYXRhW2tleV0gPSBfcmVjb25zdHJ1Y3RQYWNrZXQoZGF0YVtrZXldLCBidWZmZXJzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5EZWNvZGVyID0gZXhwb3J0cy5FbmNvZGVyID0gZXhwb3J0cy5QYWNrZXRUeXBlID0gZXhwb3J0cy5wcm90b2NvbCA9IHZvaWQgMDtcbmNvbnN0IEVtaXR0ZXIgPSByZXF1aXJlKFwiY29tcG9uZW50LWVtaXR0ZXJcIik7XG5jb25zdCBiaW5hcnlfMSA9IHJlcXVpcmUoXCIuL2JpbmFyeVwiKTtcbmNvbnN0IGlzX2JpbmFyeV8xID0gcmVxdWlyZShcIi4vaXMtYmluYXJ5XCIpO1xuY29uc3QgZGVidWcgPSByZXF1aXJlKFwiZGVidWdcIikoXCJzb2NrZXQuaW8tcGFyc2VyXCIpO1xuLyoqXG4gKiBQcm90b2NvbCB2ZXJzaW9uLlxuICpcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0cy5wcm90b2NvbCA9IDU7XG52YXIgUGFja2V0VHlwZTtcbihmdW5jdGlvbiAoUGFja2V0VHlwZSkge1xuICAgIFBhY2tldFR5cGVbUGFja2V0VHlwZVtcIkNPTk5FQ1RcIl0gPSAwXSA9IFwiQ09OTkVDVFwiO1xuICAgIFBhY2tldFR5cGVbUGFja2V0VHlwZVtcIkRJU0NPTk5FQ1RcIl0gPSAxXSA9IFwiRElTQ09OTkVDVFwiO1xuICAgIFBhY2tldFR5cGVbUGFja2V0VHlwZVtcIkVWRU5UXCJdID0gMl0gPSBcIkVWRU5UXCI7XG4gICAgUGFja2V0VHlwZVtQYWNrZXRUeXBlW1wiQUNLXCJdID0gM10gPSBcIkFDS1wiO1xuICAgIFBhY2tldFR5cGVbUGFja2V0VHlwZVtcIkNPTk5FQ1RfRVJST1JcIl0gPSA0XSA9IFwiQ09OTkVDVF9FUlJPUlwiO1xuICAgIFBhY2tldFR5cGVbUGFja2V0VHlwZVtcIkJJTkFSWV9FVkVOVFwiXSA9IDVdID0gXCJCSU5BUllfRVZFTlRcIjtcbiAgICBQYWNrZXRUeXBlW1BhY2tldFR5cGVbXCJCSU5BUllfQUNLXCJdID0gNl0gPSBcIkJJTkFSWV9BQ0tcIjtcbn0pKFBhY2tldFR5cGUgPSBleHBvcnRzLlBhY2tldFR5cGUgfHwgKGV4cG9ydHMuUGFja2V0VHlwZSA9IHt9KSk7XG4vKipcbiAqIEEgc29ja2V0LmlvIEVuY29kZXIgaW5zdGFuY2VcbiAqL1xuY2xhc3MgRW5jb2RlciB7XG4gICAgLyoqXG4gICAgICogRW5jb2RlIGEgcGFja2V0IGFzIGEgc2luZ2xlIHN0cmluZyBpZiBub24tYmluYXJ5LCBvciBhcyBhXG4gICAgICogYnVmZmVyIHNlcXVlbmNlLCBkZXBlbmRpbmcgb24gcGFja2V0IHR5cGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb2JqIC0gcGFja2V0IG9iamVjdFxuICAgICAqL1xuICAgIGVuY29kZShvYmopIHtcbiAgICAgICAgZGVidWcoXCJlbmNvZGluZyBwYWNrZXQgJWpcIiwgb2JqKTtcbiAgICAgICAgaWYgKG9iai50eXBlID09PSBQYWNrZXRUeXBlLkVWRU5UIHx8IG9iai50eXBlID09PSBQYWNrZXRUeXBlLkFDSykge1xuICAgICAgICAgICAgaWYgKGlzX2JpbmFyeV8xLmhhc0JpbmFyeShvYmopKSB7XG4gICAgICAgICAgICAgICAgb2JqLnR5cGUgPVxuICAgICAgICAgICAgICAgICAgICBvYmoudHlwZSA9PT0gUGFja2V0VHlwZS5FVkVOVFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBQYWNrZXRUeXBlLkJJTkFSWV9FVkVOVFxuICAgICAgICAgICAgICAgICAgICAgICAgOiBQYWNrZXRUeXBlLkJJTkFSWV9BQ0s7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZW5jb2RlQXNCaW5hcnkob2JqKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW3RoaXMuZW5jb2RlQXNTdHJpbmcob2JqKV07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEVuY29kZSBwYWNrZXQgYXMgc3RyaW5nLlxuICAgICAqL1xuICAgIGVuY29kZUFzU3RyaW5nKG9iaikge1xuICAgICAgICAvLyBmaXJzdCBpcyB0eXBlXG4gICAgICAgIGxldCBzdHIgPSBcIlwiICsgb2JqLnR5cGU7XG4gICAgICAgIC8vIGF0dGFjaG1lbnRzIGlmIHdlIGhhdmUgdGhlbVxuICAgICAgICBpZiAob2JqLnR5cGUgPT09IFBhY2tldFR5cGUuQklOQVJZX0VWRU5UIHx8XG4gICAgICAgICAgICBvYmoudHlwZSA9PT0gUGFja2V0VHlwZS5CSU5BUllfQUNLKSB7XG4gICAgICAgICAgICBzdHIgKz0gb2JqLmF0dGFjaG1lbnRzICsgXCItXCI7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgd2UgaGF2ZSBhIG5hbWVzcGFjZSBvdGhlciB0aGFuIGAvYFxuICAgICAgICAvLyB3ZSBhcHBlbmQgaXQgZm9sbG93ZWQgYnkgYSBjb21tYSBgLGBcbiAgICAgICAgaWYgKG9iai5uc3AgJiYgXCIvXCIgIT09IG9iai5uc3ApIHtcbiAgICAgICAgICAgIHN0ciArPSBvYmoubnNwICsgXCIsXCI7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaW1tZWRpYXRlbHkgZm9sbG93ZWQgYnkgdGhlIGlkXG4gICAgICAgIGlmIChudWxsICE9IG9iai5pZCkge1xuICAgICAgICAgICAgc3RyICs9IG9iai5pZDtcbiAgICAgICAgfVxuICAgICAgICAvLyBqc29uIGRhdGFcbiAgICAgICAgaWYgKG51bGwgIT0gb2JqLmRhdGEpIHtcbiAgICAgICAgICAgIHN0ciArPSBKU09OLnN0cmluZ2lmeShvYmouZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgZGVidWcoXCJlbmNvZGVkICVqIGFzICVzXCIsIG9iaiwgc3RyKTtcbiAgICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRW5jb2RlIHBhY2tldCBhcyAnYnVmZmVyIHNlcXVlbmNlJyBieSByZW1vdmluZyBibG9icywgYW5kXG4gICAgICogZGVjb25zdHJ1Y3RpbmcgcGFja2V0IGludG8gb2JqZWN0IHdpdGggcGxhY2Vob2xkZXJzIGFuZFxuICAgICAqIGEgbGlzdCBvZiBidWZmZXJzLlxuICAgICAqL1xuICAgIGVuY29kZUFzQmluYXJ5KG9iaikge1xuICAgICAgICBjb25zdCBkZWNvbnN0cnVjdGlvbiA9IGJpbmFyeV8xLmRlY29uc3RydWN0UGFja2V0KG9iaik7XG4gICAgICAgIGNvbnN0IHBhY2sgPSB0aGlzLmVuY29kZUFzU3RyaW5nKGRlY29uc3RydWN0aW9uLnBhY2tldCk7XG4gICAgICAgIGNvbnN0IGJ1ZmZlcnMgPSBkZWNvbnN0cnVjdGlvbi5idWZmZXJzO1xuICAgICAgICBidWZmZXJzLnVuc2hpZnQocGFjayk7IC8vIGFkZCBwYWNrZXQgaW5mbyB0byBiZWdpbm5pbmcgb2YgZGF0YSBsaXN0XG4gICAgICAgIHJldHVybiBidWZmZXJzOyAvLyB3cml0ZSBhbGwgdGhlIGJ1ZmZlcnNcbiAgICB9XG59XG5leHBvcnRzLkVuY29kZXIgPSBFbmNvZGVyO1xuLyoqXG4gKiBBIHNvY2tldC5pbyBEZWNvZGVyIGluc3RhbmNlXG4gKlxuICogQHJldHVybiB7T2JqZWN0fSBkZWNvZGVyXG4gKi9cbmNsYXNzIERlY29kZXIgZXh0ZW5kcyBFbWl0dGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRGVjb2RlcyBhbiBlbmNvZGVkIHBhY2tldCBzdHJpbmcgaW50byBwYWNrZXQgSlNPTi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvYmogLSBlbmNvZGVkIHBhY2tldFxuICAgICAqL1xuICAgIGFkZChvYmopIHtcbiAgICAgICAgbGV0IHBhY2tldDtcbiAgICAgICAgaWYgKHR5cGVvZiBvYmogPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHBhY2tldCA9IHRoaXMuZGVjb2RlU3RyaW5nKG9iaik7XG4gICAgICAgICAgICBpZiAocGFja2V0LnR5cGUgPT09IFBhY2tldFR5cGUuQklOQVJZX0VWRU5UIHx8XG4gICAgICAgICAgICAgICAgcGFja2V0LnR5cGUgPT09IFBhY2tldFR5cGUuQklOQVJZX0FDSykge1xuICAgICAgICAgICAgICAgIC8vIGJpbmFyeSBwYWNrZXQncyBqc29uXG4gICAgICAgICAgICAgICAgdGhpcy5yZWNvbnN0cnVjdG9yID0gbmV3IEJpbmFyeVJlY29uc3RydWN0b3IocGFja2V0KTtcbiAgICAgICAgICAgICAgICAvLyBubyBhdHRhY2htZW50cywgbGFiZWxlZCBiaW5hcnkgYnV0IG5vIGJpbmFyeSBkYXRhIHRvIGZvbGxvd1xuICAgICAgICAgICAgICAgIGlmIChwYWNrZXQuYXR0YWNobWVudHMgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgc3VwZXIuZW1pdChcImRlY29kZWRcIiwgcGFja2V0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBub24tYmluYXJ5IGZ1bGwgcGFja2V0XG4gICAgICAgICAgICAgICAgc3VwZXIuZW1pdChcImRlY29kZWRcIiwgcGFja2V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc19iaW5hcnlfMS5pc0JpbmFyeShvYmopIHx8IG9iai5iYXNlNjQpIHtcbiAgICAgICAgICAgIC8vIHJhdyBiaW5hcnkgZGF0YVxuICAgICAgICAgICAgaWYgKCF0aGlzLnJlY29uc3RydWN0b3IpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJnb3QgYmluYXJ5IGRhdGEgd2hlbiBub3QgcmVjb25zdHJ1Y3RpbmcgYSBwYWNrZXRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYWNrZXQgPSB0aGlzLnJlY29uc3RydWN0b3IudGFrZUJpbmFyeURhdGEob2JqKTtcbiAgICAgICAgICAgICAgICBpZiAocGFja2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHJlY2VpdmVkIGZpbmFsIGJ1ZmZlclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlY29uc3RydWN0b3IgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBzdXBlci5lbWl0KFwiZGVjb2RlZFwiLCBwYWNrZXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVua25vd24gdHlwZTogXCIgKyBvYmopO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERlY29kZSBhIHBhY2tldCBTdHJpbmcgKEpTT04gZGF0YSlcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9IHBhY2tldFxuICAgICAqL1xuICAgIGRlY29kZVN0cmluZyhzdHIpIHtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICAvLyBsb29rIHVwIHR5cGVcbiAgICAgICAgY29uc3QgcCA9IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcihzdHIuY2hhckF0KDApKSxcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKFBhY2tldFR5cGVbcC50eXBlXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1bmtub3duIHBhY2tldCB0eXBlIFwiICsgcC50eXBlKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBsb29rIHVwIGF0dGFjaG1lbnRzIGlmIHR5cGUgYmluYXJ5XG4gICAgICAgIGlmIChwLnR5cGUgPT09IFBhY2tldFR5cGUuQklOQVJZX0VWRU5UIHx8XG4gICAgICAgICAgICBwLnR5cGUgPT09IFBhY2tldFR5cGUuQklOQVJZX0FDSykge1xuICAgICAgICAgICAgY29uc3Qgc3RhcnQgPSBpICsgMTtcbiAgICAgICAgICAgIHdoaWxlIChzdHIuY2hhckF0KCsraSkgIT09IFwiLVwiICYmIGkgIT0gc3RyLmxlbmd0aCkgeyB9XG4gICAgICAgICAgICBjb25zdCBidWYgPSBzdHIuc3Vic3RyaW5nKHN0YXJ0LCBpKTtcbiAgICAgICAgICAgIGlmIChidWYgIT0gTnVtYmVyKGJ1ZikgfHwgc3RyLmNoYXJBdChpKSAhPT0gXCItXCIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbGxlZ2FsIGF0dGFjaG1lbnRzXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcC5hdHRhY2htZW50cyA9IE51bWJlcihidWYpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGxvb2sgdXAgbmFtZXNwYWNlIChpZiBhbnkpXG4gICAgICAgIGlmIChcIi9cIiA9PT0gc3RyLmNoYXJBdChpICsgMSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gaSArIDE7XG4gICAgICAgICAgICB3aGlsZSAoKytpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYyA9IHN0ci5jaGFyQXQoaSk7XG4gICAgICAgICAgICAgICAgaWYgKFwiLFwiID09PSBjKVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBpZiAoaSA9PT0gc3RyLmxlbmd0aClcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwLm5zcCA9IHN0ci5zdWJzdHJpbmcoc3RhcnQsIGkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcC5uc3AgPSBcIi9cIjtcbiAgICAgICAgfVxuICAgICAgICAvLyBsb29rIHVwIGlkXG4gICAgICAgIGNvbnN0IG5leHQgPSBzdHIuY2hhckF0KGkgKyAxKTtcbiAgICAgICAgaWYgKFwiXCIgIT09IG5leHQgJiYgTnVtYmVyKG5leHQpID09IG5leHQpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gaSArIDE7XG4gICAgICAgICAgICB3aGlsZSAoKytpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYyA9IHN0ci5jaGFyQXQoaSk7XG4gICAgICAgICAgICAgICAgaWYgKG51bGwgPT0gYyB8fCBOdW1iZXIoYykgIT0gYykge1xuICAgICAgICAgICAgICAgICAgICAtLWk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoaSA9PT0gc3RyLmxlbmd0aClcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwLmlkID0gTnVtYmVyKHN0ci5zdWJzdHJpbmcoc3RhcnQsIGkgKyAxKSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gbG9vayB1cCBqc29uIGRhdGFcbiAgICAgICAgaWYgKHN0ci5jaGFyQXQoKytpKSkge1xuICAgICAgICAgICAgY29uc3QgcGF5bG9hZCA9IHRyeVBhcnNlKHN0ci5zdWJzdHIoaSkpO1xuICAgICAgICAgICAgaWYgKERlY29kZXIuaXNQYXlsb2FkVmFsaWQocC50eXBlLCBwYXlsb2FkKSkge1xuICAgICAgICAgICAgICAgIHAuZGF0YSA9IHBheWxvYWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbnZhbGlkIHBheWxvYWRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZGVidWcoXCJkZWNvZGVkICVzIGFzICVqXCIsIHN0ciwgcCk7XG4gICAgICAgIHJldHVybiBwO1xuICAgIH1cbiAgICBzdGF0aWMgaXNQYXlsb2FkVmFsaWQodHlwZSwgcGF5bG9hZCkge1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgUGFja2V0VHlwZS5DT05ORUNUOlxuICAgICAgICAgICAgICAgIHJldHVybiB0eXBlb2YgcGF5bG9hZCA9PT0gXCJvYmplY3RcIjtcbiAgICAgICAgICAgIGNhc2UgUGFja2V0VHlwZS5ESVNDT05ORUNUOlxuICAgICAgICAgICAgICAgIHJldHVybiBwYXlsb2FkID09PSB1bmRlZmluZWQ7XG4gICAgICAgICAgICBjYXNlIFBhY2tldFR5cGUuQ09OTkVDVF9FUlJPUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdHlwZW9mIHBheWxvYWQgPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIHBheWxvYWQgPT09IFwib2JqZWN0XCI7XG4gICAgICAgICAgICBjYXNlIFBhY2tldFR5cGUuRVZFTlQ6XG4gICAgICAgICAgICBjYXNlIFBhY2tldFR5cGUuQklOQVJZX0VWRU5UOlxuICAgICAgICAgICAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KHBheWxvYWQpICYmIHBheWxvYWQubGVuZ3RoID4gMDtcbiAgICAgICAgICAgIGNhc2UgUGFja2V0VHlwZS5BQ0s6XG4gICAgICAgICAgICBjYXNlIFBhY2tldFR5cGUuQklOQVJZX0FDSzpcbiAgICAgICAgICAgICAgICByZXR1cm4gQXJyYXkuaXNBcnJheShwYXlsb2FkKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBEZWFsbG9jYXRlcyBhIHBhcnNlcidzIHJlc291cmNlc1xuICAgICAqL1xuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh0aGlzLnJlY29uc3RydWN0b3IpIHtcbiAgICAgICAgICAgIHRoaXMucmVjb25zdHJ1Y3Rvci5maW5pc2hlZFJlY29uc3RydWN0aW9uKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLkRlY29kZXIgPSBEZWNvZGVyO1xuZnVuY3Rpb24gdHJ5UGFyc2Uoc3RyKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2Uoc3RyKTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbi8qKlxuICogQSBtYW5hZ2VyIG9mIGEgYmluYXJ5IGV2ZW50J3MgJ2J1ZmZlciBzZXF1ZW5jZScuIFNob3VsZFxuICogYmUgY29uc3RydWN0ZWQgd2hlbmV2ZXIgYSBwYWNrZXQgb2YgdHlwZSBCSU5BUllfRVZFTlQgaXNcbiAqIGRlY29kZWQuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHBhY2tldFxuICogQHJldHVybiB7QmluYXJ5UmVjb25zdHJ1Y3Rvcn0gaW5pdGlhbGl6ZWQgcmVjb25zdHJ1Y3RvclxuICovXG5jbGFzcyBCaW5hcnlSZWNvbnN0cnVjdG9yIHtcbiAgICBjb25zdHJ1Y3RvcihwYWNrZXQpIHtcbiAgICAgICAgdGhpcy5wYWNrZXQgPSBwYWNrZXQ7XG4gICAgICAgIHRoaXMuYnVmZmVycyA9IFtdO1xuICAgICAgICB0aGlzLnJlY29uUGFjayA9IHBhY2tldDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogTWV0aG9kIHRvIGJlIGNhbGxlZCB3aGVuIGJpbmFyeSBkYXRhIHJlY2VpdmVkIGZyb20gY29ubmVjdGlvblxuICAgICAqIGFmdGVyIGEgQklOQVJZX0VWRU5UIHBhY2tldC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7QnVmZmVyIHwgQXJyYXlCdWZmZXJ9IGJpbkRhdGEgLSB0aGUgcmF3IGJpbmFyeSBkYXRhIHJlY2VpdmVkXG4gICAgICogQHJldHVybiB7bnVsbCB8IE9iamVjdH0gcmV0dXJucyBudWxsIGlmIG1vcmUgYmluYXJ5IGRhdGEgaXMgZXhwZWN0ZWQgb3JcbiAgICAgKiAgIGEgcmVjb25zdHJ1Y3RlZCBwYWNrZXQgb2JqZWN0IGlmIGFsbCBidWZmZXJzIGhhdmUgYmVlbiByZWNlaXZlZC5cbiAgICAgKi9cbiAgICB0YWtlQmluYXJ5RGF0YShiaW5EYXRhKSB7XG4gICAgICAgIHRoaXMuYnVmZmVycy5wdXNoKGJpbkRhdGEpO1xuICAgICAgICBpZiAodGhpcy5idWZmZXJzLmxlbmd0aCA9PT0gdGhpcy5yZWNvblBhY2suYXR0YWNobWVudHMpIHtcbiAgICAgICAgICAgIC8vIGRvbmUgd2l0aCBidWZmZXIgbGlzdFxuICAgICAgICAgICAgY29uc3QgcGFja2V0ID0gYmluYXJ5XzEucmVjb25zdHJ1Y3RQYWNrZXQodGhpcy5yZWNvblBhY2ssIHRoaXMuYnVmZmVycyk7XG4gICAgICAgICAgICB0aGlzLmZpbmlzaGVkUmVjb25zdHJ1Y3Rpb24oKTtcbiAgICAgICAgICAgIHJldHVybiBwYWNrZXQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENsZWFucyB1cCBiaW5hcnkgcGFja2V0IHJlY29uc3RydWN0aW9uIHZhcmlhYmxlcy5cbiAgICAgKi9cbiAgICBmaW5pc2hlZFJlY29uc3RydWN0aW9uKCkge1xuICAgICAgICB0aGlzLnJlY29uUGFjayA9IG51bGw7XG4gICAgICAgIHRoaXMuYnVmZmVycyA9IFtdO1xuICAgIH1cbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5oYXNCaW5hcnkgPSBleHBvcnRzLmlzQmluYXJ5ID0gdm9pZCAwO1xuY29uc3Qgd2l0aE5hdGl2ZUFycmF5QnVmZmVyID0gdHlwZW9mIEFycmF5QnVmZmVyID09PSBcImZ1bmN0aW9uXCI7XG5jb25zdCBpc1ZpZXcgPSAob2JqKSA9PiB7XG4gICAgcmV0dXJuIHR5cGVvZiBBcnJheUJ1ZmZlci5pc1ZpZXcgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgICA/IEFycmF5QnVmZmVyLmlzVmlldyhvYmopXG4gICAgICAgIDogb2JqLmJ1ZmZlciBpbnN0YW5jZW9mIEFycmF5QnVmZmVyO1xufTtcbmNvbnN0IHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbmNvbnN0IHdpdGhOYXRpdmVCbG9iID0gdHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiB8fFxuICAgICh0eXBlb2YgQmxvYiAhPT0gXCJ1bmRlZmluZWRcIiAmJlxuICAgICAgICB0b1N0cmluZy5jYWxsKEJsb2IpID09PSBcIltvYmplY3QgQmxvYkNvbnN0cnVjdG9yXVwiKTtcbmNvbnN0IHdpdGhOYXRpdmVGaWxlID0gdHlwZW9mIEZpbGUgPT09IFwiZnVuY3Rpb25cIiB8fFxuICAgICh0eXBlb2YgRmlsZSAhPT0gXCJ1bmRlZmluZWRcIiAmJlxuICAgICAgICB0b1N0cmluZy5jYWxsKEZpbGUpID09PSBcIltvYmplY3QgRmlsZUNvbnN0cnVjdG9yXVwiKTtcbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIG9iaiBpcyBhIEJ1ZmZlciwgYW4gQXJyYXlCdWZmZXIsIGEgQmxvYiBvciBhIEZpbGUuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gaXNCaW5hcnkob2JqKSB7XG4gICAgcmV0dXJuICgod2l0aE5hdGl2ZUFycmF5QnVmZmVyICYmIChvYmogaW5zdGFuY2VvZiBBcnJheUJ1ZmZlciB8fCBpc1ZpZXcob2JqKSkpIHx8XG4gICAgICAgICh3aXRoTmF0aXZlQmxvYiAmJiBvYmogaW5zdGFuY2VvZiBCbG9iKSB8fFxuICAgICAgICAod2l0aE5hdGl2ZUZpbGUgJiYgb2JqIGluc3RhbmNlb2YgRmlsZSkpO1xufVxuZXhwb3J0cy5pc0JpbmFyeSA9IGlzQmluYXJ5O1xuZnVuY3Rpb24gaGFzQmluYXJ5KG9iaiwgdG9KU09OKSB7XG4gICAgaWYgKCFvYmogfHwgdHlwZW9mIG9iaiAhPT0gXCJvYmplY3RcIikge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChBcnJheS5pc0FycmF5KG9iaikpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBvYmoubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaGFzQmluYXJ5KG9ialtpXSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChpc0JpbmFyeShvYmopKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAob2JqLnRvSlNPTiAmJlxuICAgICAgICB0eXBlb2Ygb2JqLnRvSlNPTiA9PT0gXCJmdW5jdGlvblwiICYmXG4gICAgICAgIGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgcmV0dXJuIGhhc0JpbmFyeShvYmoudG9KU09OKCksIHRydWUpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IGtleSBpbiBvYmopIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkgJiYgaGFzQmluYXJ5KG9ialtrZXldKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuZXhwb3J0cy5oYXNCaW5hcnkgPSBoYXNCaW5hcnk7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBhbHBoYWJldCA9ICcwMTIzNDU2Nzg5QUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ei1fJy5zcGxpdCgnJylcbiAgLCBsZW5ndGggPSA2NFxuICAsIG1hcCA9IHt9XG4gICwgc2VlZCA9IDBcbiAgLCBpID0gMFxuICAsIHByZXY7XG5cbi8qKlxuICogUmV0dXJuIGEgc3RyaW5nIHJlcHJlc2VudGluZyB0aGUgc3BlY2lmaWVkIG51bWJlci5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gbnVtIFRoZSBudW1iZXIgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIG51bWJlci5cbiAqIEBhcGkgcHVibGljXG4gKi9cbmZ1bmN0aW9uIGVuY29kZShudW0pIHtcbiAgdmFyIGVuY29kZWQgPSAnJztcblxuICBkbyB7XG4gICAgZW5jb2RlZCA9IGFscGhhYmV0W251bSAlIGxlbmd0aF0gKyBlbmNvZGVkO1xuICAgIG51bSA9IE1hdGguZmxvb3IobnVtIC8gbGVuZ3RoKTtcbiAgfSB3aGlsZSAobnVtID4gMCk7XG5cbiAgcmV0dXJuIGVuY29kZWQ7XG59XG5cbi8qKlxuICogUmV0dXJuIHRoZSBpbnRlZ2VyIHZhbHVlIHNwZWNpZmllZCBieSB0aGUgZ2l2ZW4gc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgVGhlIHN0cmluZyB0byBjb252ZXJ0LlxuICogQHJldHVybnMge051bWJlcn0gVGhlIGludGVnZXIgdmFsdWUgcmVwcmVzZW50ZWQgYnkgdGhlIHN0cmluZy5cbiAqIEBhcGkgcHVibGljXG4gKi9cbmZ1bmN0aW9uIGRlY29kZShzdHIpIHtcbiAgdmFyIGRlY29kZWQgPSAwO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICBkZWNvZGVkID0gZGVjb2RlZCAqIGxlbmd0aCArIG1hcFtzdHIuY2hhckF0KGkpXTtcbiAgfVxuXG4gIHJldHVybiBkZWNvZGVkO1xufVxuXG4vKipcbiAqIFllYXN0OiBBIHRpbnkgZ3Jvd2luZyBpZCBnZW5lcmF0b3IuXG4gKlxuICogQHJldHVybnMge1N0cmluZ30gQSB1bmlxdWUgaWQuXG4gKiBAYXBpIHB1YmxpY1xuICovXG5mdW5jdGlvbiB5ZWFzdCgpIHtcbiAgdmFyIG5vdyA9IGVuY29kZSgrbmV3IERhdGUoKSk7XG5cbiAgaWYgKG5vdyAhPT0gcHJldikgcmV0dXJuIHNlZWQgPSAwLCBwcmV2ID0gbm93O1xuICByZXR1cm4gbm93ICsnLicrIGVuY29kZShzZWVkKyspO1xufVxuXG4vL1xuLy8gTWFwIGVhY2ggY2hhcmFjdGVyIHRvIGl0cyBpbmRleC5cbi8vXG5mb3IgKDsgaSA8IGxlbmd0aDsgaSsrKSBtYXBbYWxwaGFiZXRbaV1dID0gaTtcblxuLy9cbi8vIEV4cG9zZSB0aGUgYHllYXN0YCwgYGVuY29kZWAgYW5kIGBkZWNvZGVgIGZ1bmN0aW9ucy5cbi8vXG55ZWFzdC5lbmNvZGUgPSBlbmNvZGU7XG55ZWFzdC5kZWNvZGUgPSBkZWNvZGU7XG5tb2R1bGUuZXhwb3J0cyA9IHllYXN0O1xuIiwiaW1wb3J0IHsgJCB9IGZyb20gJy4vY29yZS9saWIvZG9tJztcbmltcG9ydCB7IHBhcmVudHMsIGZhZGVPdXQgfSBmcm9tICcuL2NvcmUvbGliL2RvbSc7XG5pbXBvcnQgeyBwbGF5ZXJSZWYsIHBsYXllcnNEYXRhIH0gZnJvbSAnLi9kYXRhJztcblxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdFVJKHNvY2tldCkge1xuICAvLyBzdGF0dXNcbiAgbGV0IGdhbWVDcmVhdGVkLCBqb2luZWQsIG5hbWVDb25maXJtZWQsIGdhbWVTdGFydGVkO1xuICAvLyBxdWVyeSBFbGVtZW50c1xuICBsZXQgY3JlYXRlR2FtZUJ0biA9ICQoJyNjcmVhdGUtZ2FtZScpOyAgLy8gIGJpbmRFdmVudCA6IGdhbWVDcmVhdGVkXG4gIGxldCBzaG93Sm9pbkdhbWVQcm9tcHRCdG4gPSAkKCcjc2hvdy1qb2luLWdhbWUtcHJvbXB0Jyk7IC8vICBiaW5kRXZlbnRcbiAgbGV0IGNvbmZpcm1Kb2luR2FtZUJ0biA9ICQoJyNjb25maXJtLWpvaW4tZ2FtZScpOyAvLyAgYmluZEV2ZW50OiBqb2luZWRcbiAgbGV0IHJvb21Db2RlSW5wdXQgPSAkKCcjcm9vbS1jb2RlLWlucHV0Jyk7XG4gIGxldCByb29tQ29kZURpc3BsYXkgPSAkKCcjcm9vbS1jb2RlLWRpc3BsYXknKTtcbiAgbGV0IG5hbWVJbnB1dCA9ICQoJyNuYW1lLWlucHV0Jyk7XG4gIGxldCBuYW1lQ29uZmlybSA9ICQoJyNuYW1lLWNvbmZpcm0nKTsgLy8gIGJpbmRFdmVudCBuYW1lQ29uZmlybWVkXG4gIGxldCBsZWF2ZVdhaXRpbmdCdG4gPSAkKCcjbGVhdmUtd2FpdGluZycpOyAvLyAgYmluZEV2ZW50XG4gIGxldCBsZWF2ZUdhbWVTdGFydEFsZXJ0ID0gJCgnI2xlYXZlLWdhbWUtc3RhcnQtYWxlcnQnKTsgLy8gIGJpbmRFdmVudFxuICBsZXQgZ2FtZVN0YXJ0ID0gJCgnI2dhbWUtc3RhcnQnKTsgLy8gIGJpbmRFdmVudFxuXG4gIC8vIOW7uueriyBpbmlVSSBQcm9taXNlIFxuICBsZXQgaW5pdFRyaWdnZXI7XG4gIGxldCBpbml0VUlQcm9taXNlID0gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XG4gICAgaW5pdFRyaWdnZXIgPSByZXM7XG4gIH0pXG5cbiAgLy8uLi7mloflrZdcbiAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXJvbGU9XCIuLi5cIl0nKS5mb3JFYWNoKGVsZSA9PiB7XG4gICAgICBpZiAoZWxlLmlubmVySFRNTC5sZW5ndGggPCAzKSB7XG4gICAgICAgIGVsZS5pbm5lckhUTUwgKz0gJy4nXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgZWxlLmlubmVySFRNTCA9ICcnXG4gICAgICB9XG4gICAgfSlcbiAgfSwgNTAwKVxuXG4gIC8v57aB5a6a6Zec6ZaJcG9wb3V0XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tjbG9zZS10aGlzLXBvcG91dF0nKS5mb3JFYWNoKGVsZSA9PiB7XG4gICAgbGV0IHBhcmVudFBvcG91dHMgPSBwYXJlbnRzKGVsZSwgJy5wb3BvdXQnKTtcbiAgICBlbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0b2dnbGVQb3BvdXQocGFyZW50UG9wb3V0c1swXS5pZCwgZmFsc2UpO1xuICAgIH0pXG4gIH0pXG5cblxuICAvLyDlrqPlkYogZmxhZywg55uu55qE5piv55So5L6G5Yik5a6a5Yiw5bqVbmFtZVByb21wdCDmmK/lvp7lk6rkuIDlgIvnrqHpgZPljrtjYWxs5Ye65L6G55qEXG4gIGxldCBmbGFnO1xuXG5cbiAgLy/ntoHlrprnorroqo3pgIHlh7rmjInpiJXnmoTpu57mk4rkuovku7ZcbiAgbmFtZUNvbmZpcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYgKG5hbWVDb25maXJtZWQgfHwgZ2FtZUNyZWF0ZWQgfHwgam9pbmVkKSByZXR1cm47XG4gICAgbGV0IG5hbWUgPSBuYW1lSW5wdXQudmFsdWUgPyBuYW1lSW5wdXQudmFsdWUgOiBwbGF5ZXJSZWYubmFtZTtcbiAgICBjb25maXJtTmFtZShzb2NrZXQsIG5hbWUpO1xuICAgIGlmIChmbGFnID09PSAnb25Kb2luJykge1xuICAgICAgdG9nZ2xlUG9wb3V0KCdqb2luLWdhbWUtcHJvbXB0JywgdHJ1ZSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGZsYWcgPT09ICdvbkNyZWF0ZScpIHtcbiAgICAgIGlmICghZ2FtZUNyZWF0ZWQpIHtcbiAgICAgICAgbmV3R2FtZShzb2NrZXQpO1xuICAgICAgICBnYW1lQ3JlYXRlZCA9IHRydWU7XG4gICAgICAgIGpvaW5lZCA9IHRydWU7XG4gICAgICAgIG5hbWVDb25maXJtZWQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cbiAgfSlcblxuICAvL+e2geWumuaMiemIlem7nuaTiuW+jOmWi+WVn25hbWUtaW5wdXQtcHJvbXB0ID0+IGpvaW5HYW1lIHByb21wdFxuICBzaG93Sm9pbkdhbWVQcm9tcHRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZmxhZyA9ICdvbkpvaW4nO1xuICAgIHRvZ2dsZVBvcG91dCgnbmFtZS1pbnB1dC1wcm9tcHQnLCB0cnVlKTtcbiAgfSk7XG5cbiAgLy/ntoHlrprmjInpiJXpu57mk4rlvozpgIHlh7rmg7Plj4PliqDnmoTmiL/plpPnorznmoTkuovku7ZcbiAgY29uZmlybUpvaW5HYW1lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmICgham9pbmVkKSB7XG4gICAgICBsZXQgcm9vbUNvZGUgPSByb29tQ29kZUlucHV0LnZhbHVlO1xuICAgICAgY29uZmlybUpvaW5HYW1lKHNvY2tldCwgcm9vbUNvZGUpO1xuICAgICAgam9pbmVkID0gdHJ1ZTtcbiAgICAgIGdhbWVDcmVhdGVkID0gdHJ1ZTtcbiAgICAgIG5hbWVDb25maXJtZWQgPSB0cnVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH0pXG5cbiAgLy/ntoHlrprmjInpiJXpu57mk4rlvozplovllZ9uYW1lLWlucHV0LXByb21wdCA9PiBuZXdHYW1lIHByb21wdFxuICBjcmVhdGVHYW1lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGZsYWcgPSAnb25DcmVhdGUnO1xuICAgIHRvZ2dsZVBvcG91dCgnbmFtZS1pbnB1dC1wcm9tcHQnLCB0cnVlKTtcbiAgfSk7XG5cbiAgLy/ntoHlrprnrKzkuIDpm6LplovmjInpiJVcbiAgbGVhdmVXYWl0aW5nQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHNvY2tldC5lbWl0KCdsZWF2ZVdhaXRpbmcnKTtcbiAgICBnYW1lQ3JlYXRlZCA9IGZhbHNlO1xuICAgIGpvaW5lZCA9IGZhbHNlO1xuICAgIG5hbWVDb25maXJtZWQgPSBmYWxzZTtcbiAgICB0b2dnbGVQb3BvdXQoJ3Jvb20tY29kZS1kaXNwbGF5LXBvcG91dCcsIGZhbHNlKTtcbiAgfSlcbiAgLy/ntoHlrprnrKzkuozpm6LplovmjInpiJVcbiAgbGVhdmVHYW1lU3RhcnRBbGVydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBzb2NrZXQuZW1pdCgnbGVhdmVTdGFydGluZ0dhbWUnLCBwbGF5ZXJSZWYpO1xuICAgIHRvZ2dsZVBvcG91dCgnZ2FtZS1zdGFydC1hbGVydCcsIGZhbHNlKTtcbiAgfSlcblxuICBnYW1lU3RhcnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYgKCFnYW1lU3RhcnRlZCkge1xuICAgICAgc29ja2V0LmVtaXQoJ3N0YXJ0TWF0Y2gnKTtcbiAgICAgIGdhbWVTdGFydGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gIH0pXG5cbiAgLy/ntoHlrprnlbZzZXJ2ZXLlgrPkvoYnZ2VuUm9vbUNvZGUn6KiK6Jmf5b6M77yMdWkg5oeJ55Si55Sf55qE5bCN5oeJ6KGM54K6XG4gIHNvY2tldC5vbignZ2VuUm9vbUNvZGUnLCAoZGF0YSkgPT4ge1xuICAgIHJvb21Db2RlRGlzcGxheS5pbm5lckhUTUwgPSBkYXRhO1xuICB9KVxuXG4gIC8v57aB5a6a55W2c2VydmVy5YKz5L6GJ3BsYXllckpvaW5lZCfoqIromZ/lvozvvIx1aSDmh4nnlKLnlJ/nmoTlsI3mh4nooYzngrpcbiAgc29ja2V0Lm9uKCdwbGF5ZXJKb2luZWQnLCAoZGF0YSkgPT4ge1xuICAgIGlmIChkYXRhLnBsYXllck51bWJlciA9PT0gMikge1xuICAgICAgaWYgKHBsYXllclJlZi5udW1iZXIgPT0gMSkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1yb2xlPVwib3Bwb25lbnRcIl0nKS5mb3JFYWNoKGVsZSA9PiB7XG4gICAgICAgICAgZWxlLmlubmVySFRNTCA9IGBZT1VSIE9QUE9ORU5UICR7ZGF0YS5wbGF5ZXJOYW1lfSBTSE9XUyBVUCFgXG4gICAgICAgIH0pO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1yb2xlPVwicGxheWVyMlwiXScpLmZvckVhY2goZWxlID0+IHtcbiAgICAgICAgICBlbGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChwbGF5ZXJSZWYubnVtYmVyID09IDIpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtcm9sZT1cIm9wcG9uZW50XCJdJykuZm9yRWFjaChlbGUgPT4ge1xuICAgICAgICAgIGVsZS5pbm5lckhUTUwgPSBgV0FJVElORyBGT1IgVEhFIFJPT00gSE9TVDxicj48YnI+JHtkYXRhLmhvc3ROYW1lfTxicj48YnI+VE8gQUNDRVBUIFlPVVIgQ0hBTExFTkdFPHNwYW4gZGF0YS1yb2xlPVwiLi4uXCI+PC9zcGFuPmBcbiAgICAgICAgfSk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXJvbGU9XCJwbGF5ZXIxXCJdJykuZm9yRWFjaChlbGUgPT4ge1xuICAgICAgICAgIGVsZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgdG9nZ2xlUG9wb3V0KCdyb29tLWNvZGUtZGlzcGxheS1wb3BvdXQnLCBmYWxzZSk7XG4gICAgICB0b2dnbGVQb3BvdXQoJ2pvaW4tZ2FtZS1wcm9tcHQnLCBmYWxzZSk7XG4gICAgICB0b2dnbGVQb3BvdXQoJ2dhbWUtc3RhcnQtYWxlcnQnLCB0cnVlKTtcbiAgICAgIHBsYXllcnNEYXRhWzBdLm5hbWUgPSBkYXRhLmhvc3ROYW1lO1xuICAgICAgcGxheWVyc0RhdGFbMV0ubmFtZSA9IGRhdGEucGxheWVyTmFtZTtcbiAgICB9XG4gIH0pXG5cbiAgc29ja2V0Lm9uKCdob3N0LWxlYXZlJywgKGRhdGEpID0+IHtcbiAgICB0b2dnbGVQb3BvdXQoJ2dhbWUtc3RhcnQtYWxlcnQnLCBmYWxzZSk7XG4gICAgdG9nZ2xlUG9wb3V0KCdsZWF2ZS1hbGVydCcsIHRydWUpO1xuICAgIGdhbWVTdGFydGVkID0gZmFsc2U7XG4gICAgam9pbmVkID0gZmFsc2U7XG4gICAgbmFtZUNvbmZpcm1lZCA9IGZhbHNlO1xuICAgIGdhbWVDcmVhdGVkID0gZmFsc2U7XG5cbiAgICAkKCdbZGF0YS1yb2xlPVwibGVhdmUtbXNnXCJdJykuaW5uZXJIVE1MID0gYEhPU1QgJHtkYXRhLmhvc3R9IExFRlQgQU5EIFNIVVRET1dOIFRIRSBST09NLmBcbiAgfSlcblxuICBzb2NrZXQub24oJ2NoYWxsZW5nZXItbGVhdmUnLCAoZGF0YSkgPT4ge1xuICAgIHRvZ2dsZVBvcG91dCgnZ2FtZS1zdGFydC1hbGVydCcsIGZhbHNlKTtcbiAgICB0b2dnbGVQb3BvdXQoJ2xlYXZlLWFsZXJ0JywgdHJ1ZSk7XG4gICAgdG9nZ2xlUG9wb3V0KCdyb29tLWNvZGUtZGlzcGxheS1wb3BvdXQnLCB0cnVlKTtcbiAgICBnYW1lU3RhcnRlZCA9IGZhbHNlO1xuICAgIGpvaW5lZCA9IGZhbHNlO1xuICAgIG5hbWVDb25maXJtZWQgPSBmYWxzZTtcbiAgICBnYW1lQ3JlYXRlZCA9IGZhbHNlO1xuXG4gICAgJCgnW2RhdGEtcm9sZT1cImxlYXZlLW1zZ1wiXScpLmlubmVySFRNTCA9IGBDSEFMTEVOR0VSICR7ZGF0YS5jaGFsbGVuZ2VyfSBMRUZUIFRISVMgTUFUQ0guYFxuICB9KVxuXG4gIHNvY2tldC5vbignbGVhdmUnLCAoKSA9PiB7XG4gICAgZ2FtZVN0YXJ0ZWQgPSBmYWxzZTtcbiAgICBqb2luZWQgPSBmYWxzZTtcbiAgICBuYW1lQ29uZmlybWVkID0gZmFsc2U7XG4gICAgZ2FtZUNyZWF0ZWQgPSBmYWxzZTtcbiAgfSlcblxuICAvL+e2geWumueVtnNlcnZlcuWCs+S+hidnYW1lSW5pdCfoqIromZ/lvozvvIx1aSDmh4nnlKLnlJ/nmoTlsI3mh4nooYzngrpcbiAgc29ja2V0Lm9uKCdnYW1lSW5pdCcsICgpID0+IHtcbiAgICB0b2dnbGVQb3BvdXQoJ2dhbWUtc3RhcnQtYWxlcnQnLCBmYWxzZSk7XG5cbiAgfSlcblxuXG4gIC8vIOinuOeZvCBwcm9taXNlIGZ1bGxmaWxs5qmf5Yi2XG4gIGluaXRUcmlnZ2VyKCk7XG5cbiAgLy8g5Zue5YKzIGZ1bGxmaWxs5b6M55qEcHJvbWlzZVxuICByZXR1cm4gaW5pdFVJUHJvbWlzZTtcbn1cblxuLyoqXG4gKiDplovllZ8gcG9wb3V0XG4gKlxuICogQHBhcmFtIHsqfSBpZFxuICogQHBhcmFtIHsqfSBzdGF0dXNcbiAqL1xuZnVuY3Rpb24gdG9nZ2xlUG9wb3V0KGlkLCBzdGF0dXMpIHtcbiAgbGV0IHBvcG91dCA9ICQoYC5wb3BvdXQjJHtpZH1gKTtcbiAgaWYgKHN0YXR1cykge1xuICAgIHBvcG91dC5jbGFzc0xpc3QuYWRkKCdwb3BvdXQtLXNob3cnKTtcbiAgfVxuICBlbHNlIHtcbiAgICBwb3BvdXQuY2xhc3NMaXN0LnJlbW92ZSgncG9wb3V0LS1zaG93Jyk7XG4gIH1cbn1cblxuLyoqXG4gKiAg6ZaL6Zec5YW35pyJaGlkZS1vbi1hY3Rpb27lsazmgKfnmoR1aSBlbGVtZW50LFxuICpcbiAqIEBwYXJhbSB7Kn0gc3RhdHVzXG4gKi9cbmZ1bmN0aW9uIHRvZ2dsZUhpZGVPbkFjdGlvbihzdGF0dXMpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2hpZGUtb24tYWN0aW9uXScpLmZvckVhY2goZWxlID0+IHtcbiAgICBlbGUuc2V0QXR0cmlidXRlKCdoaWRlLW9uLWFjdGlvbicsIHN0YXR1cyA/ICcnIDogJ2hpZGUnKTtcbiAgfSlcbn1cbi8qKlxuICog6ZaL6Zec5YW35pyJc2hvdy1vbi1mdWxs5bGs5oCn55qEdWkgZWxlbWVudCxcbiAqXG4gKiBAcGFyYW0geyp9IHN0YXR1c1xuICovXG5mdW5jdGlvbiB0b2dnbGVTaG93T25BY3Rpb24oc3RhdHVzKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tzaG93LW9uLWFjdGlvbl0nKS5mb3JFYWNoKGVsZSA9PiB7XG4gICAgZWxlLnNldEF0dHJpYnV0ZSgnc2hvdy1vbi1hY3Rpb24nLCBzdGF0dXMgPyAnJyA6ICdoaWRlJyk7XG4gIH0pXG59XG5cblxuLyoqXG4gKiDlu7rnq4vmlrDpgYrmiLJcbiAqXG4gKiBAcGFyYW0geyp9IHNvY2tldFxuICovXG5mdW5jdGlvbiBuZXdHYW1lKHNvY2tldCkge1xuICBwbGF5ZXJSZWYubnVtYmVyID0gMTtcbiAgdG9nZ2xlUG9wb3V0KCdyb29tLWNvZGUtZGlzcGxheS1wb3BvdXQnLCB0cnVlKTtcbiAgc29ja2V0LmVtaXQoJ25ld0dhbWUnKTtcbn1cbi8qKlxuICog5ZCRc2VydmVy55m85Ye656K66KqN5Y+D5Yqg6YGK5oiy55qE5L+h6JmfXG4gKlxuICogQHBhcmFtIHsqfSBzb2NrZXRcbiAqIEBwYXJhbSB7Kn0gcm9vbUNvZGVcbiAqL1xuZnVuY3Rpb24gY29uZmlybUpvaW5HYW1lKHNvY2tldCwgcm9vbUNvZGUpIHtcbiAgcGxheWVyUmVmLm51bWJlciA9IDI7XG4gIHNvY2tldC5lbWl0KCdqb2luR2FtZScsIHJvb21Db2RlKTtcbn1cbi8qKlxuICogXG4gKiDnorroqo3ovLjlhaXnmoTmmrHnqLHlvozvvIzmiorpgYrmiLLlhafmiYDmnIlkYXRhLXJvbGU9XCJuYW1lXCIg55qEIGVsZW1lbnQsIOWFp+WuuemDveaPm+aIkOi8uOWFpeeahG5hbWUsIOS4puWQjOaZguWQkXNlcnZlcueZvOmAgSduYW1lQ29uZmlybSfnmoToqIromZ9cbiAqIOacgOW+jOmXnOmWiW5hbWUtaW5wdXQtcHJvbXB0XG4gKiBAcGFyYW0geyp9IHNvY2tldFxuICogQHBhcmFtIHsqfSBuYW1lXG4gKiBAcGFyYW0geyp9IGNiXG4gKi9cbmZ1bmN0aW9uIGNvbmZpcm1OYW1lKHNvY2tldCwgbmFtZSwgY2IpIHtcbiAgcGxheWVyUmVmLm5hbWUgPSBuYW1lO1xuICBzb2NrZXQuZW1pdCgnbmFtZUNvbmZpcm0nLCBuYW1lKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgW2RhdGEtcm9sZT1cIm5hbWVcIl1gKS5mb3JFYWNoKChvLCBpKSA9PiB7XG4gICAgby5pbm5lckhUTUwgPSBuYW1lO1xuICB9KVxuICB0b2dnbGVQb3BvdXQoJ25hbWUtaW5wdXQtcHJvbXB0JywgZmFsc2UpO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBzdGFydENvdW50aW5nKGNiKSB7XG4gIGxldCBnYyA9ICQoJyNnYW1lLXN0YXJ0LWNvdW50aW5nJyk7XG4gIGdjLmNsYXNzTGlzdC5hZGQoJ2dhbWUtc3RhcnQtY291bnRpbmctLXNob3cnKTtcbiAgbGV0IG51bWJlciA9IGdjLnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLXN0YXJ0LWNvdW50aW5nX19udW1iZXInKTtcbiAgbnVtYmVyLmlubmVySFRNTCA9IDM7XG4gIGxldCB0aW1lSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgaWYgKHBhcnNlSW50KG51bWJlci5pbm5lckhUTUwpID4gMCkge1xuICAgICAgbnVtYmVyLmlubmVySFRNTCA9IHBhcnNlSW50KG51bWJlci5pbm5lckhUTUwpIC0gMTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBjbGVhckludGVydmFsKHRpbWVJbnRlcnZhbCk7XG4gICAgICBmYWRlT3V0KGdjLCAxMDAwLCAoKSA9PiB7XG4gICAgICAgIGdjLmNsYXNzTGlzdC5yZW1vdmUoJ2dhbWUtc3RhcnQtY291bnRpbmctLXNob3cnKTtcbiAgICAgIH0pXG4gICAgICBjYigpO1xuICAgIH1cbiAgfSwgMTAwMClcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBpbml0VUksIHN0YXJ0Q291bnRpbmcgfSBmcm9tICcuL3VpJztcbmltcG9ydCB7IGluaXRTcGxhc2ggfSBmcm9tICcuL2NvcmUvc3BsYXNoJztcbmltcG9ydCB7IGdhbWVCdWlsZGVyIH0gZnJvbSAnLi9jb3JlL2dhbWUnO1xuaW1wb3J0IHsgaW5pdEtleUNvbnRyb2wgfSBmcm9tICcuL2NvbnRyb2xsJztcblxuXG5jb25zdCBzb2NrZXQgPSByZXF1aXJlKCdzb2NrZXQuaW8tY2xpZW50JykoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCcpO1xuXG5sZXQgc3BsYXNoU3dpdGNoZXI7XG5sZXQgc3BsYXNoUHJvbWlzZSA9IGluaXRTcGxhc2goKTtcbnNwbGFzaFByb21pc2UudGhlbigoc3dpdGNoZXIpID0+IHtcbiAgc3BsYXNoU3dpdGNoZXIgPSBzd2l0Y2hlcjtcbn0pXG5cbmxldCB1aUluaXRQcm9taXNlID0gaW5pdFVJKHNvY2tldCk7XG5leHBvcnQgY29uc3QgZ2FtZSA9IGdhbWVCdWlsZGVyKCk7XG5cbi8vIOS4iue3muW+jOimgeenu+mZpCBzdGFydFxuZ2FtZS5wcm9taXNlLnRoZW4oKCkgPT4ge1xuICBnYW1lLmNvbnRyb2xsZXIuc3Vycm91bmRpbmcuY2xhc3NMaXN0LmFkZCgncHJvbW90ZWQnKTtcbiAgbGV0IGdhbWVSZWFkeVByb21pc2UgPSBnYW1lLmNvbnRyb2xsZXIuZHJhd0dhbWUoKTtcbiAgZ2FtZVJlYWR5UHJvbWlzZS50aGVuKCgpID0+IHtcbiAgICBzcGxhc2hTd2l0Y2hlcihmYWxzZSk7XG4gICAgaW5pdEtleUNvbnRyb2woc29ja2V0KTtcbiAgfSlcbn0pXG4vLyDkuIrnt5rlvozopoHnp7vpmaQgZW5kXG5cbnVpSW5pdFByb21pc2UudGhlbigoKSA9PiB7XG4gIGdhbWUudHJpZ2dlcigpO1xufSlcblxuc29ja2V0Lm9uKCdnYW1lSW5pdCcsICgpID0+IHtcbiAgc3RhcnRDb3VudGluZygoKSA9PiB7XG4gICAgZ2FtZS5jb250cm9sbGVyLnN1cnJvdW5kaW5nLmNsYXNzTGlzdC5hZGQoJ3Byb21vdGVkJyk7XG4gICAgZ2FtZS5jb250cm9sbGVyLnNjb3JlYm9hcmRzLnVwZGF0ZSgpO1xuICAgIGxldCBnYW1lUmVhZHlQcm9taXNlID0gZ2FtZS5jb250cm9sbGVyLmRyYXdHYW1lKCk7XG4gICAgZ2FtZVJlYWR5UHJvbWlzZS50aGVuKCgpID0+IHtcbiAgICAgIHNwbGFzaFN3aXRjaGVyKGZhbHNlKTtcbiAgICB9KVxuICB9KVxufSlcblxuc29ja2V0Lm9uKCdob3N0LWxlYXZlJywgKCkgPT4ge1xuICBnYW1lLmNvbnRyb2xsZXIuc3Vycm91bmRpbmcuY2xhc3NMaXN0LnJlbW92ZSgncHJvbW90ZWQnKTtcbn0pXG5cbnNvY2tldC5vbignY2hhbGxlbmdlci1sZWF2ZScsICgpID0+IHtcbiAgZ2FtZS5jb250cm9sbGVyLnN1cnJvdW5kaW5nLmNsYXNzTGlzdC5yZW1vdmUoJ3Byb21vdGVkJyk7XG59KVxuXG5zb2NrZXQub24oJ2xlYXZlJywgKCkgPT4ge1xuICBnYW1lLmNvbnRyb2xsZXIuc3Vycm91bmRpbmcuY2xhc3NMaXN0LnJlbW92ZSgncHJvbW90ZWQnKTtcbn0pXG5cbnNvY2tldC5vbigndG9vTWFueVBsYXllcnMnLCAoKSA9PiB7XG4gIGFsZXJ0KCdSb29tIElzIEZ1bGwgTm93Jyk7XG59KVxuXG5zb2NrZXQub24oJ3Vua25vd25Db2RlJywgKCkgPT4ge1xuICBhbGVydCgnSW5jb3JyZWN0IFJvb20gQ29kZScpO1xufSlcblxuc29ja2V0Lm9uKCdob3N0Q2FudEJlR3Vlc3QnLCAoKSA9PiB7XG4gIGFsZXJ0KFwiWW91IENhbid0IEpvaW4gVGhlIEdhbWUgWW91IEFyZSBIb3N0aW5nXCIpO1xufSlcblxuXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwic291cmNlUm9vdCI6IiJ9