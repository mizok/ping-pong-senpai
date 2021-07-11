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
  document.addEventListener('keydown', function (e) {
    var windowAspectRatio = window.innerWidth / window.innerHeight;

    if (windowAspectRatio >= 1) {
      switch (e.key) {
        case "Down": // IE/Edge specific value

        case "ArrowDown":
          // Do something for "down arrow" key press.
          socket.emit('playerMoveMinus', _data__WEBPACK_IMPORTED_MODULE_0__.playerRef);
          break;

        case "Up": // IE/Edge specific value

        case "ArrowUp":
          // Do something for "up arrow" key press.
          socket.emit('playerMovePlus', _data__WEBPACK_IMPORTED_MODULE_0__.playerRef);
          break;
      }
    } else {
      switch (e.key) {
        case "Left": // IE/Edge specific value

        case "ArrowLeft":
          // Do something for "left arrow" key press.
          socket.emit('playerMoveMinus', _data__WEBPACK_IMPORTED_MODULE_0__.playerRef);
          break;

        case "Right": // IE/Edge specific value

        case "ArrowRight":
          // Do something for "right arrow" key press.
          socket.emit('playerMovePlus', _data__WEBPACK_IMPORTED_MODULE_0__.playerRef);
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
      targetLayer.ctx.save();
      targetLayer.clear(); //畫court 會有四種狀況, (canvas長寬>預設長寬比>1) | (1<=canvas長寬<預設長寬比) | (預設長寬比倒數<canvas長寬比<1) ｜ (canvas長寬比<預設長寬比倒數<1)

      if (this.getAspectRatio() >= 1) {
        // 這邊是前兩種狀況
        //畫initialImage , 再畫court
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


        var rotatePram = _data__WEBPACK_IMPORTED_MODULE_3__.playerRef.number == 1 ? 1 : -1;
        var scalePram = _data__WEBPACK_IMPORTED_MODULE_3__.playerRef.number == 1 ? 1 : -1;
        targetLayer.ctx.translate(targetLayer.cvs.width / 2, targetLayer.cvs.height / 2);
        targetLayer.ctx.rotate(-Math.PI / 2);
        targetLayer.ctx.scale(1, 1 * scalePram);
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

        var _rotatePram = _data__WEBPACK_IMPORTED_MODULE_3__.playerRef.number == 1 ? 2 : 1;

        var _scalePram = _data__WEBPACK_IMPORTED_MODULE_3__.playerRef.number == 1 ? 1 : -1;

        targetLayer.ctx.translate(targetLayer.cvs.width / 2, targetLayer.cvs.height / 2);
        targetLayer.ctx.rotate(Math.PI * _rotatePram);
        targetLayer.ctx.scale(1 * _scalePram, 1);
        targetLayer.ctx.translate(-targetLayer.cvs.width / 2, -targetLayer.cvs.height / 2);
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
      var courtCanvasWidth = _data__WEBPACK_IMPORTED_MODULE_3__.courtData.width = this.pixelBase / this.config.courtAspectRatio;
      var courtCanvasHeight = _data__WEBPACK_IMPORTED_MODULE_3__.courtData.height = this.pixelBase;
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
      var promise = this.curtain.animate().then(function () {
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
/* harmony export */   "courtData": function() { return /* binding */ courtData; },
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
var courtData = {
  width: 0,
  height: 0
};
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
  isStuck: true,
  isHoldBy: 0
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
  var newGameData = {
    playersData: _data__WEBPACK_IMPORTED_MODULE_1__.playersData,
    courtData: _data__WEBPACK_IMPORTED_MODULE_1__.courtData,
    ballData: _data__WEBPACK_IMPORTED_MODULE_1__.ballData
  };
  togglePopout('room-code-display-popout', true);
  socket.emit('newGame', JSON.stringify(newGameData));
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
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data */ "./data.js");






var socket = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/build/index.js")('http://localhost:3000');

var splashSwitcher;
var splashPromise = (0,_core_splash__WEBPACK_IMPORTED_MODULE_1__.initSplash)();
splashPromise.then(function (switcher) {
  splashSwitcher = switcher;
});
var uiInitPromise = (0,_ui__WEBPACK_IMPORTED_MODULE_0__.initUI)(socket);
var game = (0,_core_game__WEBPACK_IMPORTED_MODULE_2__.gameBuilder)();
uiInitPromise.then(function () {
  game.trigger();
});
socket.on('gameInit', function () {
  (0,_ui__WEBPACK_IMPORTED_MODULE_0__.startCounting)(function () {
    game.controller.surrounding.classList.add('promoted');
    game.controller.scoreboards.update();
    var gameReadyPromise = game.controller.drawGame();
    gameReadyPromise.then(function () {
      socket.emit('gameReady');
      splashSwitcher(false);
      (0,_controll__WEBPACK_IMPORTED_MODULE_3__.initKeyControl)(100, socket);
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
socket.on('gameProceeding', function (data) {
  var serverData = JSON.parse(data);

  for (var i = 0; i < _data__WEBPACK_IMPORTED_MODULE_4__.playersData.length; i++) {
    _data__WEBPACK_IMPORTED_MODULE_4__.playersData[i].position.x = serverData.players[i].position.x;
  }

  _data__WEBPACK_IMPORTED_MODULE_4__.ballData.position = serverData.ball.position;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vY29udHJvbGwuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL2NvcmUvZ2FtZS5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vY29yZS9saWIvYW5pbWF0aW9uLmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9jb3JlL2xpYi9iYXNlLmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9jb3JlL2xpYi9kb20uanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL2NvcmUvbGliL2Z1bmN0aW9uLmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9jb3JlL2xpYi9zaGFwZS5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vY29yZS9saWIvdXRpbC5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vY29yZS9zcGxhc2guanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL2RhdGEuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9iYWNrbzIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9iYXNlNjQtYXJyYXlidWZmZXIvbGliL2Jhc2U2NC1hcnJheWJ1ZmZlci5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL2NvbXBvbmVudC1lbWl0dGVyL2luZGV4LmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvZGVidWcvbm9kZV9tb2R1bGVzL21zL2luZGV4LmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvZGVidWcvc3JjL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9kZWJ1Zy9zcmMvY29tbW9uLmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9saWIvZ2xvYmFsVGhpcy5icm93c2VyLmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2xpYi9zb2NrZXQuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2xpYi90cmFuc3BvcnQuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2xpYi90cmFuc3BvcnRzL2luZGV4LmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9saWIvdHJhbnNwb3J0cy9wb2xsaW5nLWpzb25wLmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9saWIvdHJhbnNwb3J0cy9wb2xsaW5nLXhoci5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvbGliL3RyYW5zcG9ydHMvcG9sbGluZy5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvbGliL3RyYW5zcG9ydHMvd2Vic29ja2V0LWNvbnN0cnVjdG9yLmJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2xpYi90cmFuc3BvcnRzL3dlYnNvY2tldC5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvbGliL3V0aWwuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2xpYi94bWxodHRwcmVxdWVzdC5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1wYXJzZXIvbGliL2NvbW1vbnMuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tcGFyc2VyL2xpYi9kZWNvZGVQYWNrZXQuYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1wYXJzZXIvbGliL2VuY29kZVBhY2tldC5icm93c2VyLmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLXBhcnNlci9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9oYXMtY29ycy9pbmRleC5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL21lcnNlbm5lLXR3aXN0ZXIvc3JjL21lcnNlbm5lLXR3aXN0ZXIuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9wYXJzZXFzL2luZGV4LmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvcGFyc2V1cmkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uLi9zcmMvcGFyc2UtcGF0aC5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4uL3NyYy9wYXRoMmQtcG9seWZpbGwuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tY2xpZW50L2J1aWxkL2luZGV4LmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLWNsaWVudC9idWlsZC9tYW5hZ2VyLmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLWNsaWVudC9idWlsZC9vbi5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1jbGllbnQvYnVpbGQvc29ja2V0LmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLWNsaWVudC9idWlsZC90eXBlZC1ldmVudHMuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tY2xpZW50L2J1aWxkL3VybC5qcyIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1wYXJzZXIvZGlzdC9iaW5hcnkuanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tcGFyc2VyL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tcGFyc2VyL2Rpc3QvaXMtYmluYXJ5LmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvLi9ub2RlX21vZHVsZXMveWVhc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL3VpLmpzIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3BpbmctcG9uZy1zZW5wYWkvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9waW5nLXBvbmctc2VucGFpLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGluZy1wb25nLXNlbnBhaS8uL3NyYy9zY3NzL21haW4uc2NzcyJdLCJuYW1lcyI6WyJpbml0S2V5Q29udHJvbCIsImludGVydmFsUGVyaW9kIiwic29ja2V0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsIndpbmRvd0FzcGVjdFJhdGlvIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0Iiwia2V5IiwiZW1pdCIsInBsYXllclJlZiIsIkRFRkFVTFQiLCJiZ0NvbG9yIiwiY291cnRDb2xvciIsImNvdXJ0QXNwZWN0UmF0aW8iLCJFbmdpbmUiLCJlbGUiLCJkZWZhdWx0Q29uZmlnIiwiY29uZmlnIiwicGl4ZWxCYXNlIiwiaW5pdCIsImZwcyIsImNvdXJ0T2Zmc2V0IiwiY291cnRPZmZzZXRNb2JpbGUiLCJnYW1lU3RhdHVzIiwicGF1c2UiLCJwbGF5ZXJzVGhpY2tuZXNzIiwiY3VydGFpbiIsImdlbkN1cnRhaW4iLCJjb3VydCIsImdlbkNvdXJ0Iiwic3RhclNreSIsImdlblN0YXJTa3kiLCJwbGF5ZXJzIiwiZ2VuUGxheWVycyIsImJhbGwiLCJnZW5CYWxsIiwic2NvcmVib2FyZHMiLCJnZW5TY29yZWJvYXJkcyIsImluaXRSZXNpemVkIiwicmVzaXplZENhbGxiYWNrIiwiZHJhd1N0YXRpYyIsInRoZW4iLCJiYWNrZ3JvdW5kIiwiYmFuZFdpZHRoIiwiY3VydGFpbkNhbnZhc0luc3RhbmNlIiwiY3JlYXRlVmlydHVhbENhbnZhc0Jhc2VJbnN0YW5jZSIsInNldENhbnZhc1NpemUiLCJjdnMiLCJ3aWR0aCIsImhlaWdodCIsImN1cnRhaW5BbmltYXRpb25JbnN0YW5jZSIsIlN3aXJsOEJpdCIsImN0eCIsImFuaW1hdGUiLCJpbml0aWFsSW1hZ2UiLCJnZXRDYWNoZUNhbnZhcyIsInByb21pc2UiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXIiLCJkcmF3SW1hZ2UiLCJQcm9taXNlIiwicmVzIiwic2V0VGltZW91dCIsImNsZWFySW50ZXJ2YWwiLCJ0cmlnZ2VyIiwicmVqIiwic3RhdGljSW1hZ2UiLCJ0YXJnZXRMYXllciIsInNvdXJjZUNhbnZhcyIsIm9mZnNldCIsIm9mZnNldE1vYmlsZSIsInNhdmUiLCJnZXRBc3BlY3RSYXRpbyIsInR5cGVBIiwib2Zmc2V0ViIsIm9mZnNldEgiLCJjb3VydEhlaWdodCIsImNvdXJ0V2lkdGgiLCJyb3RhdGVQcmFtIiwic2NhbGVQcmFtIiwidHJhbnNsYXRlIiwicm90YXRlIiwiTWF0aCIsIlBJIiwic2NhbGUiLCJyZXN0b3JlIiwic3Ryb2tlV2lkdGgiLCJjb3VydENhbnZhc0luc3RhbmNlIiwiY291cnRDYW52YXNXaWR0aCIsImNvdXJ0RGF0YSIsImNvdXJ0Q2FudmFzSGVpZ2h0IiwidmVydGljZXMiLCJ4IiwieSIsInN0cm9rZUFuaW1hdGlvbkluc3RhbmNlIiwiU3Ryb2tlQW5pbWF0aW9uIiwicmVzcG9uc2l2ZVBhaW50ZXIiLCJzdGFyU2t5Q2FudmFzSW5zdGFuY2UiLCJhZGROZXdMYXllciIsInN0YXJTa3lBbmltYXRpb25JbnN0YW5jZSIsIlN0YXJTa3kiLCJyZWZyZXNoU3RhcnMiLCJiaW5kIiwid2lkdGhQcmFtIiwiZ2FwUmF0aW8iLCJjb2xvciIsInRoaWNrbmVzcyIsInBsYXllcnNDYW52YXNJbnN0YW5jZSIsInBsYXllcnNWaXJ0dWFsQ2FudmFzSW5zdGFuY2UiLCJpIiwicGxheWVyc0RhdGEiLCJwb3NpdGlvbiIsInJlYWR5Iiwib3BhY2l0eSIsImRyYXdSZWN0IiwibG9vcFVwZGF0ZSIsInNjb3JlYm9hcmRzTGF5ZXIiLCJhZGREaXZMYXllciIsInRvcEJhciIsImNyZWF0ZUVsZW1lbnQiLCJib3RCYXIiLCJjbGFzc0xpc3QiLCJhZGQiLCJhcHBlbmQiLCJnZW5QbGF5ZXJTaG93Y2FzZSIsInBsYXllck5hbWUiLCJwbGF5ZXJJZCIsInNjb3JlTWF4IiwicGxheWVyU2hvd0Nhc2UiLCJpZCIsImlubmVySFRNTCIsIm5hbWUiLCJ1cGRhdGUiLCJxdWVyeVNlbGVjdG9yIiwicGFkU3RyaW5nIiwic2NvcmUiLCJzcGVlZCIsInNpemUiLCJiYWxsQ2FudmFzSW5zdGFuY2UiLCJiYWxsVmlydHVhbENhbnZhc0luc3RhbmNlIiwiYmFsbERhdGEiLCJyYW5kb21XaXRoaW5SYW5nZSIsImRyYXdDaXJjbGUiLCJwbGF5ZXJzUmVhZHkiLCJiYWxsUmVhZHkiLCJzY29yZWJvYXJkc1JlYWR5IiwiYWxsUmVhZHlQcm9taXNlIiwiYWxsIiwiZ2FtZVJlYWR5UHJvbWlzZSIsImluaXRHYW1lRGF0YVVwZGF0ZUludGVydmFsIiwiQ2FudmFzMkRGeEJhc2UiLCJnYW1lQnVpbGRlciIsImdhbWUiLCJib290IiwiYm9keSIsImluc3RhbmNlIiwiY29udHJvbGxlciIsImNvdW50ZXJDbG9ja3dpc2VBcnIiLCJjbG9ja3dpc2VBcnIiLCJjYW52YXMiLCJhbmltYXRpb25FbmRUcmlnZ2VyIiwib3JkZXIiLCJwYXRoIiwiUGF0aDJEIiwiYmFuZFdpZHRoU3RhY2siLCJjbG9ja3dpc2UiLCJ0b3RhbFdpZHRoIiwidG90YWxIZWlnaHQiLCJkaXJlY3Rpb25BcnIiLCJsb2NhdGlvbiIsImFuaW1hdGlvblByb21pc2UiLCJkcmF3U3dpcmwiLCJhZGRQYXRoIiwiZHJhV1JhbmRvbUFuZ2xlZEJhbmRQYXRoIiwiZ2V0U3RhcnRMb2NhdGlvbiIsImZpbGwiLCJwb2ludCIsImRyYXdBbmdsZWRCYW5kRnJvbVRMIiwiZHJhd0FuZ2xlZEJhbmRGcm9tQkwiLCJkcmF3QW5nbGVkQmFuZEZyb21CUiIsImRyYXdBbmdsZWRCYW5kRnJvbVRSIiwibW92ZVRvIiwicmFuZG9tSGVpZ2h0IiwibGluZVRvIiwicmFuZG9tV2lkdGgiLCJ3YXlwb2ludHMiLCJjYWxjV2F5cG9pbnRzIiwiZmxpY2tlciIsImRhc2giLCJnbG93aW5nIiwiZ2xvd2luZ1NpemUiLCJsb29waW5nRHJhd1N0cm9rZSIsImNvdW50ZXIiLCIkdGhpcyIsImxpbmVDYXAiLCJsZW5ndGgiLCJzZXRMaW5lRGFzaCIsInN0cm9rZVN0eWxlIiwibGluZVdpZHRoIiwic2hhZG93Q29sb3IiLCJzaGFkb3dCbHVyIiwiZmxpY2tlclJhbmdlIiwiYmVnaW5QYXRoIiwiY2xlYXJSZWN0IiwiZ2xvYmFsQWxwaGEiLCJzdHJva2UiLCJjbG9zZVBhdGgiLCJzdGFycyIsImdlblN0YXJzIiwibnVtYmVyIiwic3RhciIsInR3aW5rbGUiLCJwdXNoIiwiZHJhdyIsInZpcnR1YWxQYXJlbnQiLCJpcyIsIk9iamVjdCIsImFzc2lnbiIsImZyYW1lQ291bnQiLCJtb3VzZSIsImZyYW1lSXNQYXVzZWQiLCJpc0NsaWNrIiwibGF5ZXJzQ29udGFpbmVyIiwidW5kZWZpbmVkIiwiZGl2TGF5ZXJzQ29udGFpbmVyIiwiY2FudmFzU2l6ZWZpeGVkIiwicHJldmlvdXNGcmFtZVRpbWUiLCJEYXRlIiwiZ2V0VGltZSIsImlzUmVzaXppbmciLCJsYXllcnMiLCJkaXZMYXllcnMiLCJpc1Jlc2l6aW5nQ2FsbGJhY2siLCJpbml0QmFzZSIsInRhZ05hbWUiLCJzdHlsZSIsImZvbnRTaXplIiwiYXBwZW5kQ2hpbGQiLCJkaXZMYXllckNvbnRhaW5lciIsInN1cnJvdW5kaW5nIiwiaW5zZXJ0QmVmb3JlIiwiZ2V0Q29udGV4dCIsInRyaWdnZXJSZXNpemluZ01lY2hhbmlzbSIsImRlYm91bmNlIiwidmlzaWJpbGl0eVN0YXRlIiwiYWRkRXZlbnRIYW5kbGVyIiwicmVmcmVzaEJhc2VGcmFtZUNvdW50ZXIiLCJ0aGlzRnJhbWVUaW1lIiwidGltZUVsYXBzZWQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjb250YWlucyIsImNhbnZhc1dpZHRoIiwiY2FudmFzSGVpZ2h0IiwidmlydHVhbFBhcmVudFZhbGlkYXRpb24iLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJwYXJlbnRFbGVtZW50IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJwb3MiLCJwb2ludGVyRXZlbnRUb1hZIiwidmN2cyIsInZjdnNJbnN0YW5jZSIsIlR5cGVFcnJvciIsInByZXBlbmQiLCJjdnNJbnN0YW5jZSIsImNsYXNzTmFtZSIsImRpdkxheWVyIiwiY3RvciIsInRhcmdldEVsZSIsImdldEVsZW1lbnRCeUlkIiwiYm9vdFByb21pc2UiLCIkIiwic2VsZWN0b3IiLCJ0b2dnbGUiLCJzdGF0dXMiLCJzdHlsZVN0ciIsInNldEF0dHJpYnV0ZSIsInRvZ2dsZUNsYXNzIiwiY2xhc3NuYW1lIiwiYWN0aW9uIiwiZXZlbnROYW1lIiwic29tZUV2ZW50IiwiY3JlYXRlRXZlbnQiLCJpbml0RXZlbnQiLCJkaXNwYXRjaEV2ZW50IiwicGFyZW50cyIsIm5vZGUiLCJjdXJyZW50IiwibGlzdCIsInBhcmVudE5vZGUiLCJkb2N1bWVudEVsZW1lbnQiLCJmaWx0ZXIiLCJvIiwibWF0Y2hlcyIsImZhZGVPdXQiLCJkdXJhdGlvbiIsImNiIiwiZGlzcGxheSIsImZhZGVUYXJnZXQiLCJmYWRlRWZmZWN0IiwiTWVyc2VubmVUd2lzdGVyIiwicmVxdWlyZSIsIk1UIiwiZnVuYyIsImRlbGF5IiwidGltZXIiLCJjb250ZXh0IiwiYXJncyIsImFyZ3VtZW50cyIsImNsZWFyVGltZW91dCIsImFwcGx5IiwiYXJyIiwiYSIsIkFycmF5IiwiaXNBcnJheSIsIm9iaiIsInByb3RvdHlwZSIsInRvU3RyaW5nIiwiY2FsbCIsImluZGV4T2YiLCJwdGgiLCJoYXNPd25Qcm9wZXJ0eSIsInN2ZyIsIlNWR0VsZW1lbnQiLCJpbnAiLCJIVE1MSW5wdXRFbGVtZW50IiwiZG9tIiwibm9kZVR5cGUiLCJzdHIiLCJmbmMiLCJ1bmQiLCJuaWwiLCJoZXgiLCJ0ZXN0IiwicmdiYSIsInJnYiIsImhzbCIsImNvbCIsImRlZmF1bHRJbnN0YW5jZVNldHRpbmdzIiwiZGVmYXVsdFR3ZWVuU2V0dGluZ3MiLCJtaW4iLCJtYXgiLCJzZWVkIiwicmFuZG9tIiwiZ2V0RGlzdGFuY2UiLCJ4MCIsInkwIiwieDEiLCJ5MSIsInNxcnQiLCJkZWdyZWVUb1JhZGlhbiIsImRlZ3JlZSIsIm91dCIsInR5cGUiLCJ0b3VjaCIsIm9yaWdpbmFsRXZlbnQiLCJ0b3VjaGVzIiwiY2hhbmdlZFRvdWNoZXMiLCJwYWdlWCIsInBhZ2VZIiwidGFyZ2V0SGFzUHJvcCIsInRhcmdldCIsInByb3AiLCJpc0VtcHR5IiwidmFsIiwiaXNOYU4iLCJyZ2JUb1JnYmEiLCJyZ2JWYWx1ZSIsImV4ZWMiLCJoZXhUb1JnYmEiLCJoZXhWYWx1ZSIsInJneCIsInJlcGxhY2UiLCJtIiwiciIsImciLCJiIiwicGFyc2VJbnQiLCJoc2xUb1JnYmEiLCJoc2xWYWx1ZSIsImgiLCJzIiwibCIsImh1ZTJyZ2IiLCJwIiwicSIsInQiLCJjb2xvclRvUmdiYSIsImdldENoYW5uZWxWYWx1ZXNGcm9tUmdiYSIsInNwbGl0IiwibWFwIiwiaW50ZXJwb2xhdGUiLCJwdDAiLCJwdDEiLCJkeCIsImR5IiwiaiIsInRhcmdldFN0ciIsImRyYXdTcXVhcmUiLCJhbHBoYSIsImFyYyIsImRyYXdMaW5lIiwic3Ryb2tlQ29sb3IiLCJkcmF3VGV4dCIsInRleHRDb250ZW50IiwiZm9udCIsImZpbGxUZXh0IiwiZ2V0U2NyZWVuc2hvdEltYWdlIiwidGFyZ2V0Q3ZzIiwidXJsIiwidG9EYXRhVVJMIiwiaW1hZ2UiLCJJbWFnZSIsInNyYyIsInRhcmdldEN0eCIsImNhY2hlQ3ZzIiwiY2FjaGVDdHgiLCJzb3VyY2VXaWR0aCIsInNvdXJjZUhlaWdodCIsImNhY2hlRGF0YSIsImdldEltYWdlRGF0YSIsInB1dEltYWdlRGF0YSIsIkJBTExfQU5JTUFUSU9OX0RFRkFVTFQiLCJhZnRlckltYWdlIiwicmFkaXVzIiwic3BlZWRYIiwic3BlZWRZIiwiYWNjZWxlcmF0aW9uWCIsImFjY2VsZXJhdGlvblkiLCJmcmljdGlvblgiLCJmcmljdGlvblkiLCJTUE9UU19BTklNQVRJT05fREVGQVVMVCIsIm1pblNpemUiLCJtYXhTaXplIiwicGVyaW9kIiwic3RlcCIsImJvdHRvbUxheWVyIiwicm93IiwiQmFzaWNSZWZlbGVjdGlvbiIsInN3aXRjaFN0YXR1cyIsImluaXRCYWxsIiwiYW5pbWF0ZUJhbGwiLCJhY2NlbGVyYXRpb24iLCJmcmljdGlvbiIsImRyYXdCYWxsIiwicmVmcmVzaExvY2F0aW9uIiwicmVmcmVzaFNwZWVkIiwiY2hlY2tCb3VuZGFyeSIsImR0IiwiU3BvdHNCdW1waW5nIiwic3BvdHNTaXplIiwiZXhwYW5kIiwiZHJhd1Nwb3RzIiwiaW5pdFNwbGFzaCIsImluaXRpYWxTY3JlZW4iLCJ2aXJ0dWFsQ2FudmFzIiwic3dpdGNoZXIiLCJzcG90QW5pbWF0aW9uIiwic3BsYXNoUHJvbWlzZSIsInNwb3RzQnVtcGluZ0luc3RhbmNlIiwiYm9vdENvbnRyb2xsZXIiLCJiYXNpY1JlZmVsZWN0aW9uSW5zdGFuY2UiLCJpc1N0dWNrIiwiaXNIb2xkQnkiLCJtb2R1bGUiLCJleHBvcnRzIiwiQmFja29mZiIsIm9wdHMiLCJtcyIsImZhY3RvciIsImppdHRlciIsImF0dGVtcHRzIiwicG93IiwicmFuZCIsImRldmlhdGlvbiIsImZsb29yIiwicmVzZXQiLCJzZXRNaW4iLCJzZXRNYXgiLCJzZXRKaXR0ZXIiLCJjaGFycyIsImFycmF5YnVmZmVyIiwiYnl0ZXMiLCJVaW50OEFycmF5IiwibGVuIiwiYmFzZTY0Iiwic3Vic3RyaW5nIiwiYnVmZmVyTGVuZ3RoIiwiZW5jb2RlZDEiLCJlbmNvZGVkMiIsImVuY29kZWQzIiwiZW5jb2RlZDQiLCJBcnJheUJ1ZmZlciIsIkVtaXR0ZXIiLCJtaXhpbiIsIm9uIiwiZXZlbnQiLCJmbiIsIl9jYWxsYmFja3MiLCJvbmNlIiwib2ZmIiwicmVtb3ZlTGlzdGVuZXIiLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2FsbGJhY2tzIiwic3BsaWNlIiwic2xpY2UiLCJsaXN0ZW5lcnMiLCJoYXNMaXN0ZW5lcnMiLCJkIiwidyIsIm9wdGlvbnMiLCJwYXJzZSIsImlzRmluaXRlIiwibG9uZyIsImZtdExvbmciLCJmbXRTaG9ydCIsIkVycm9yIiwiSlNPTiIsInN0cmluZ2lmeSIsIlN0cmluZyIsIm1hdGNoIiwibiIsInBhcnNlRmxvYXQiLCJ0b0xvd2VyQ2FzZSIsIm1zQWJzIiwiYWJzIiwicm91bmQiLCJwbHVyYWwiLCJpc1BsdXJhbCIsImZvcm1hdEFyZ3MiLCJsb2FkIiwidXNlQ29sb3JzIiwibG9jYWxzdG9yYWdlIiwid2FybmVkIiwiY29uc29sZSIsIndhcm4iLCJwcm9jZXNzIiwiX19ud2pzIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiV2Via2l0QXBwZWFyYW5jZSIsImZpcmVidWciLCJleGNlcHRpb24iLCJ0YWJsZSIsIlJlZ0V4cCIsIiQxIiwibmFtZXNwYWNlIiwiaHVtYW5pemUiLCJkaWZmIiwiYyIsImluZGV4IiwibGFzdEMiLCJkZWJ1ZyIsImxvZyIsIm5hbWVzcGFjZXMiLCJzdG9yYWdlIiwic2V0SXRlbSIsInJlbW92ZUl0ZW0iLCJlcnJvciIsImdldEl0ZW0iLCJlbnYiLCJERUJVRyIsImxvY2FsU3RvcmFnZSIsImZvcm1hdHRlcnMiLCJ2IiwibWVzc2FnZSIsInNldHVwIiwiY3JlYXRlRGVidWciLCJkZWZhdWx0IiwiY29lcmNlIiwiZGlzYWJsZSIsImVuYWJsZSIsImVuYWJsZWQiLCJkZXN0cm95Iiwia2V5cyIsImZvckVhY2giLCJuYW1lcyIsInNraXBzIiwic2VsZWN0Q29sb3IiLCJoYXNoIiwiY2hhckNvZGVBdCIsImNvbG9ycyIsInByZXZUaW1lIiwiZW5hYmxlT3ZlcnJpZGUiLCJzZWxmIiwiY3VyciIsIk51bWJlciIsInByZXYiLCJ1bnNoaWZ0IiwiZm9ybWF0IiwiZm9ybWF0dGVyIiwibG9nRm4iLCJleHRlbmQiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJnZXQiLCJzZXQiLCJkZWxpbWl0ZXIiLCJuZXdEZWJ1ZyIsInN1YnN0ciIsInRvTmFtZXNwYWNlIiwiam9pbiIsInJlZ2V4cCIsInN0YWNrIiwiRnVuY3Rpb24iLCJTb2NrZXQiLCJ1cmkiLCJwcm90b2NvbCIsInRyYW5zcG9ydHMiLCJwYXJzZXIiLCJwYXJzZXVyaSIsInBhcnNlcXMiLCJob3N0bmFtZSIsImhvc3QiLCJzZWN1cmUiLCJwb3J0IiwicXVlcnkiLCJyZWFkeVN0YXRlIiwid3JpdGVCdWZmZXIiLCJwcmV2QnVmZmVyTGVuIiwiYWdlbnQiLCJ3aXRoQ3JlZGVudGlhbHMiLCJ1cGdyYWRlIiwianNvbnAiLCJ0aW1lc3RhbXBQYXJhbSIsInJlbWVtYmVyVXBncmFkZSIsInJlamVjdFVuYXV0aG9yaXplZCIsInBlck1lc3NhZ2VEZWZsYXRlIiwidGhyZXNob2xkIiwidHJhbnNwb3J0T3B0aW9ucyIsImNsb3NlT25CZWZvcmV1bmxvYWQiLCJkZWNvZGUiLCJ1cGdyYWRlcyIsInBpbmdJbnRlcnZhbCIsInBpbmdUaW1lb3V0IiwicGluZ1RpbWVvdXRUaW1lciIsInRyYW5zcG9ydCIsImNsb3NlIiwib2ZmbGluZUV2ZW50TGlzdGVuZXIiLCJvbkNsb3NlIiwib3BlbiIsImNsb25lIiwiRUlPIiwic2lkIiwicHJpb3JXZWJzb2NrZXRTdWNjZXNzIiwiY3JlYXRlVHJhbnNwb3J0Iiwic2hpZnQiLCJzZXRUcmFuc3BvcnQiLCJvbkRyYWluIiwib25QYWNrZXQiLCJvbkVycm9yIiwicHJvYmUiLCJmYWlsZWQiLCJvblRyYW5zcG9ydE9wZW4iLCJzZW5kIiwiZGF0YSIsIm1zZyIsInVwZ3JhZGluZyIsImNsZWFudXAiLCJmbHVzaCIsImVyciIsImZyZWV6ZVRyYW5zcG9ydCIsIm9uZXJyb3IiLCJvblRyYW5zcG9ydENsb3NlIiwib25jbG9zZSIsIm9udXBncmFkZSIsInRvIiwicGFja2V0Iiwib25IYW5kc2hha2UiLCJyZXNldFBpbmdUaW1lb3V0Iiwic2VuZFBhY2tldCIsImNvZGUiLCJmaWx0ZXJVcGdyYWRlcyIsIm9uT3BlbiIsImF1dG9VbnJlZiIsInVucmVmIiwid3JpdGFibGUiLCJjb21wcmVzcyIsImNsZWFudXBBbmRDbG9zZSIsIndhaXRGb3JVcGdyYWRlIiwicmVhc29uIiwiZGVzYyIsInBpbmdJbnRlcnZhbFRpbWVyIiwiZmlsdGVyZWRVcGdyYWRlcyIsIlRyYW5zcG9ydCIsImRlc2NyaXB0aW9uIiwiZG9PcGVuIiwiZG9DbG9zZSIsInBhY2tldHMiLCJ3cml0ZSIsImRlY29kZVBhY2tldCIsImJpbmFyeVR5cGUiLCJYTUxIdHRwUmVxdWVzdCIsIlhIUiIsIkpTT05QIiwid2Vic29ja2V0IiwicG9sbGluZyIsInhociIsInhkIiwieHMiLCJpc1NTTCIsInhkb21haW4iLCJ4c2NoZW1lIiwiZm9yY2VKU09OUCIsIlBvbGxpbmciLCJnbG9iYWxUaGlzIiwick5ld2xpbmUiLCJyRXNjYXBlZE5ld2xpbmUiLCJKU09OUFBvbGxpbmciLCJfX19laW8iLCJvbkRhdGEiLCJzY3JpcHQiLCJyZW1vdmVDaGlsZCIsImZvcm0iLCJpZnJhbWUiLCJhc3luYyIsImluc2VydEF0IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJoZWFkIiwiaXNVQWdlY2tvIiwiYXJlYSIsImlmcmFtZUlkIiwidG9wIiwibGVmdCIsIm1ldGhvZCIsImNvbXBsZXRlIiwiaW5pdElmcmFtZSIsImh0bWwiLCJ2YWx1ZSIsInN1Ym1pdCIsImF0dGFjaEV2ZW50Iiwib25yZWFkeXN0YXRlY2hhbmdlIiwib25sb2FkIiwicGljayIsImVtcHR5IiwiaGFzWEhSMiIsInJlc3BvbnNlVHlwZSIsImZvcmNlQmFzZTY0Iiwic3VwcG9ydHNCaW5hcnkiLCJSZXF1ZXN0IiwicmVxIiwicmVxdWVzdCIsInBvbGxYaHIiLCJjcmVhdGUiLCJleHRyYUhlYWRlcnMiLCJzZXREaXNhYmxlSGVhZGVyQ2hlY2siLCJzZXRSZXF1ZXN0SGVhZGVyIiwicmVxdWVzdFRpbWVvdXQiLCJ0aW1lb3V0IiwiaGFzWERSIiwib25Mb2FkIiwicmVzcG9uc2VUZXh0IiwicmVxdWVzdHNDb3VudCIsInJlcXVlc3RzIiwib25TdWNjZXNzIiwiZnJvbUVycm9yIiwiYWJvcnQiLCJYRG9tYWluUmVxdWVzdCIsImVuYWJsZXNYRFIiLCJ1bmxvYWRIYW5kbGVyIiwidGVybWluYXRpb25FdmVudCIsInllYXN0IiwicG9sbCIsIm9uUGF1c2UiLCJ0b3RhbCIsImRvUG9sbCIsImNhbGxiYWNrIiwiZGVjb2RlUGF5bG9hZCIsImVuY29kZVBheWxvYWQiLCJkb1dyaXRlIiwic2NoZW1hIiwidGltZXN0YW1wUmVxdWVzdHMiLCJiNjQiLCJlbmNvZGUiLCJpcHY2IiwiV2ViU29ja2V0IiwiTW96V2ViU29ja2V0IiwidXNpbmdCcm93c2VyV2ViU29ja2V0IiwiZGVmYXVsdEJpbmFyeVR5cGUiLCJpc1JlYWN0TmF0aXZlIiwicHJvZHVjdCIsIldTIiwiY2hlY2siLCJwcm90b2NvbHMiLCJoZWFkZXJzIiwid3MiLCJhZGRFdmVudExpc3RlbmVycyIsIm9ub3BlbiIsIl9zb2NrZXQiLCJvbm1lc3NhZ2UiLCJldiIsImxhc3RQYWNrZXQiLCJlbmNvZGVQYWNrZXQiLCJCdWZmZXIiLCJieXRlTGVuZ3RoIiwiYXR0ciIsInJlZHVjZSIsImFjYyIsImsiLCJoYXNDT1JTIiwiY29uY2F0IiwiUEFDS0VUX1RZUEVTIiwiUEFDS0VUX1RZUEVTX1JFVkVSU0UiLCJFUlJPUl9QQUNLRVQiLCJ3aXRoTmF0aXZlQXJyYXlCdWZmZXIiLCJiYXNlNjRkZWNvZGVyIiwiZW5jb2RlZFBhY2tldCIsIm1hcEJpbmFyeSIsImNoYXJBdCIsImRlY29kZUJhc2U2NFBhY2tldCIsInBhY2tldFR5cGUiLCJkZWNvZGVkIiwiQmxvYiIsIndpdGhOYXRpdmVCbG9iIiwiaXNWaWV3IiwiYnVmZmVyIiwiZW5jb2RlQmxvYkFzQmFzZTY0IiwiZmlsZVJlYWRlciIsIkZpbGVSZWFkZXIiLCJjb250ZW50IiwicmVzdWx0IiwicmVhZEFzRGF0YVVSTCIsIlNFUEFSQVRPUiIsImZyb21DaGFyQ29kZSIsImVuY29kZWRQYWNrZXRzIiwiY291bnQiLCJlbmNvZGVkUGF5bG9hZCIsImRlY29kZWRQYWNrZXQiLCJOIiwiTSIsIk1BVFJJWF9BIiwiVVBQRVJfTUFTSyIsIkxPV0VSX01BU0siLCJtdCIsIm10aSIsImNvbnN0cnVjdG9yIiwiaW5pdF9ieV9hcnJheSIsImluaXRfc2VlZCIsImluaXRfa2V5Iiwia2V5X2xlbmd0aCIsInJhbmRvbV9pbnQiLCJtYWcwMSIsImtrIiwicmFuZG9tX2ludDMxIiwicmFuZG9tX2luY2wiLCJyYW5kb21fZXhjbCIsInJhbmRvbV9sb25nIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicXMiLCJxcnkiLCJwYWlycyIsInBhaXIiLCJkZWNvZGVVUklDb21wb25lbnQiLCJyZSIsInBhcnRzIiwic291cmNlIiwiYXV0aG9yaXR5IiwiaXB2NnVyaSIsInBhdGhOYW1lcyIsInF1ZXJ5S2V5IiwicmVneCIsIiQwIiwiJDIiLCJBUkdfTEVOR1RIIiwieiIsIlNFR01FTlRfUEFUVEVSTiIsIk5VTUJFUiIsIm51bWJlcnMiLCJjb21tYW5kIiwidGhlQXJncyIsInBhcnNlVmFsdWVzIiwidGhlQ29tbWFuZCIsImltZ0RhdGEiLCJueCIsIm55Iiwic3VwcG9ydHNTdmdQYXRoQXJndW1lbnQiLCJwYXJzZVBhdGgiLCJzdGFydFBvaW50IiwiY3VycmVudFBvaW50Iiwic2VnbWVudHMiLCJwYXRoVHlwZSIsImNweCIsImNweSIsInFjcHgiLCJxY3B5IiwicngiLCJyeSIsImFuZ2xlIiwibGFyZ2VBcmNGbGFnIiwic3dlZXBGbGFnIiwiZW5kUG9pbnQiLCJtaWRQb2ludCIsInJvdGF0ZVBvaW50IiwibGFtYmRhIiwiY2VudGVyUG9pbnQiLCJ0MSIsInQyIiwic2NhbGVQb2ludCIsInN0YXJ0QW5nbGUiLCJlbmRBbmdsZSIsInRyYW5zbGF0ZVBvaW50IiwiY2N3IiwiY0ZpbGwiLCJjU3Ryb2tlIiwiZmlsbFJ1bGUiLCJidWlsZFBhdGgiLCJjSXNQb2ludEluUGF0aCIsInBhdGgyZFBvbHlmaWxsIiwidXJsXzEiLCJtYW5hZ2VyXzEiLCJsb29rdXAiLCJjYWNoZSIsInBhcnNlZCIsInNhbWVOYW1lc3BhY2UiLCJuZXdDb25uZWN0aW9uIiwiZm9yY2VOZXciLCJtdWx0aXBsZXgiLCJpbyIsIk1hbmFnZXIiLCJzb2NrZXRfaW9fcGFyc2VyXzEiLCJtYW5hZ2VyXzIiLCJzb2NrZXRfMSIsImVpbyIsIm9uXzEiLCJ0eXBlZF9ldmVudHNfMSIsIm5zcHMiLCJzdWJzIiwicmVjb25uZWN0aW9uIiwicmVjb25uZWN0aW9uQXR0ZW1wdHMiLCJJbmZpbml0eSIsInJlY29ubmVjdGlvbkRlbGF5IiwicmVjb25uZWN0aW9uRGVsYXlNYXgiLCJyYW5kb21pemF0aW9uRmFjdG9yIiwiYmFja29mZiIsIl9yZWFkeVN0YXRlIiwiX3BhcnNlciIsImVuY29kZXIiLCJFbmNvZGVyIiwiZGVjb2RlciIsIkRlY29kZXIiLCJfYXV0b0Nvbm5lY3QiLCJhdXRvQ29ubmVjdCIsIl9yZWNvbm5lY3Rpb24iLCJfcmVjb25uZWN0aW9uQXR0ZW1wdHMiLCJfYSIsIl9yZWNvbm5lY3Rpb25EZWxheSIsIl9yYW5kb21pemF0aW9uRmFjdG9yIiwiX3JlY29ubmVjdGlvbkRlbGF5TWF4IiwiX3RpbWVvdXQiLCJfcmVjb25uZWN0aW5nIiwicmVjb25uZWN0IiwiZW5naW5lIiwic2tpcFJlY29ubmVjdCIsIm9wZW5TdWJEZXN0cm95IiwiZXJyb3JTdWIiLCJlbWl0UmVzZXJ2ZWQiLCJtYXliZVJlY29ubmVjdE9uT3BlbiIsInN1YkRlc3Ryb3kiLCJvbnBpbmciLCJvbmRhdGEiLCJvbmRlY29kZWQiLCJuc3AiLCJhY3RpdmUiLCJfY2xvc2UiLCJvbnJlY29ubmVjdCIsImF0dGVtcHQiLCJTdHJpY3RFdmVudEVtaXR0ZXIiLCJSRVNFUlZFRF9FVkVOVFMiLCJmcmVlemUiLCJjb25uZWN0IiwiY29ubmVjdF9lcnJvciIsImRpc2Nvbm5lY3QiLCJkaXNjb25uZWN0aW5nIiwibmV3TGlzdGVuZXIiLCJyZWNlaXZlQnVmZmVyIiwic2VuZEJ1ZmZlciIsImlkcyIsImFja3MiLCJmbGFncyIsImNvbm5lY3RlZCIsImRpc2Nvbm5lY3RlZCIsImF1dGgiLCJvbnBhY2tldCIsInN1YkV2ZW50cyIsIlBhY2tldFR5cGUiLCJFVkVOVCIsInBvcCIsImlzVHJhbnNwb3J0V3JpdGFibGUiLCJkaXNjYXJkUGFja2V0Iiwidm9sYXRpbGUiLCJfcGFja2V0IiwiQ09OTkVDVCIsIm9uY29ubmVjdCIsIm9uZXZlbnQiLCJCSU5BUllfRVZFTlQiLCJBQ0siLCJvbmFjayIsIkJJTkFSWV9BQ0siLCJESVNDT05ORUNUIiwib25kaXNjb25uZWN0IiwiQ09OTkVDVF9FUlJPUiIsImFjayIsImVtaXRFdmVudCIsIl9hbnlMaXN0ZW5lcnMiLCJsaXN0ZW5lciIsInNlbnQiLCJlbWl0QnVmZmVyZWQiLCJsb2MiLCJocmVmIiwiaXNfYmluYXJ5XzEiLCJkZWNvbnN0cnVjdFBhY2tldCIsImJ1ZmZlcnMiLCJwYWNrZXREYXRhIiwicGFjayIsIl9kZWNvbnN0cnVjdFBhY2tldCIsImF0dGFjaG1lbnRzIiwiaXNCaW5hcnkiLCJwbGFjZWhvbGRlciIsIl9wbGFjZWhvbGRlciIsIm51bSIsIm5ld0RhdGEiLCJyZWNvbnN0cnVjdFBhY2tldCIsIl9yZWNvbnN0cnVjdFBhY2tldCIsImJpbmFyeV8xIiwiaGFzQmluYXJ5IiwiZW5jb2RlQXNCaW5hcnkiLCJlbmNvZGVBc1N0cmluZyIsImRlY29uc3RydWN0aW9uIiwiZGVjb2RlU3RyaW5nIiwicmVjb25zdHJ1Y3RvciIsIkJpbmFyeVJlY29uc3RydWN0b3IiLCJ0YWtlQmluYXJ5RGF0YSIsInN0YXJ0IiwiYnVmIiwibmV4dCIsInBheWxvYWQiLCJ0cnlQYXJzZSIsImlzUGF5bG9hZFZhbGlkIiwiZmluaXNoZWRSZWNvbnN0cnVjdGlvbiIsInJlY29uUGFjayIsImJpbkRhdGEiLCJ3aXRoTmF0aXZlRmlsZSIsIkZpbGUiLCJ0b0pTT04iLCJhbHBoYWJldCIsImVuY29kZWQiLCJub3ciLCJpbml0VUkiLCJnYW1lQ3JlYXRlZCIsImpvaW5lZCIsIm5hbWVDb25maXJtZWQiLCJnYW1lU3RhcnRlZCIsImNyZWF0ZUdhbWVCdG4iLCJzaG93Sm9pbkdhbWVQcm9tcHRCdG4iLCJjb25maXJtSm9pbkdhbWVCdG4iLCJyb29tQ29kZUlucHV0Iiwicm9vbUNvZGVEaXNwbGF5IiwibmFtZUlucHV0IiwibmFtZUNvbmZpcm0iLCJsZWF2ZVdhaXRpbmdCdG4iLCJsZWF2ZUdhbWVTdGFydEFsZXJ0IiwiZ2FtZVN0YXJ0IiwiaW5pdFRyaWdnZXIiLCJpbml0VUlQcm9taXNlIiwicXVlcnlTZWxlY3RvckFsbCIsInBhcmVudFBvcG91dHMiLCJ0b2dnbGVQb3BvdXQiLCJmbGFnIiwiY29uZmlybU5hbWUiLCJuZXdHYW1lIiwicm9vbUNvZGUiLCJjb25maXJtSm9pbkdhbWUiLCJwbGF5ZXJOdW1iZXIiLCJob3N0TmFtZSIsImNoYWxsZW5nZXIiLCJwb3BvdXQiLCJyZW1vdmUiLCJ0b2dnbGVIaWRlT25BY3Rpb24iLCJ0b2dnbGVTaG93T25BY3Rpb24iLCJuZXdHYW1lRGF0YSIsInN0YXJ0Q291bnRpbmciLCJnYyIsInRpbWVJbnRlcnZhbCIsInNwbGFzaFN3aXRjaGVyIiwidWlJbml0UHJvbWlzZSIsImRyYXdHYW1lIiwic2VydmVyRGF0YSIsImFsZXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLFNBQVNBLGNBQVQsR0FBc0Q7QUFBQSxNQUE5QkMsY0FBOEIsdUVBQWIsR0FBYTtBQUFBLE1BQVJDLE1BQVE7QUFDM0RDLFVBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsU0FBMUIsRUFBcUMsVUFBQ0MsQ0FBRCxFQUFPO0FBQzFDLFFBQUlDLGlCQUFpQixHQUFHQyxNQUFNLENBQUNDLFVBQVAsR0FBb0JELE1BQU0sQ0FBQ0UsV0FBbkQ7O0FBQ0EsUUFBSUgsaUJBQWlCLElBQUksQ0FBekIsRUFBNEI7QUFDMUIsY0FBUUQsQ0FBQyxDQUFDSyxHQUFWO0FBQ0UsYUFBSyxNQUFMLENBREYsQ0FDZTs7QUFDYixhQUFLLFdBQUw7QUFDRTtBQUNBUixnQkFBTSxDQUFDUyxJQUFQLENBQVksaUJBQVosRUFBK0JDLDRDQUEvQjtBQUNBOztB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QUFVLENBQUNqaUMsT0FBWCxDQUFtQjhFLENBQW5CLEVBQXNCRSxRQUF0QixDQUErQm5CLENBQTNEO0FBQ0Q7O0FBQ0RnRCxzREFBQSxHQUFvQm83QixVQUFVLENBQUMvaEMsSUFBWCxDQUFnQjhFLFFBQXBDO0FBQ0QsQ0FORDtBQVFBakgsTUFBTSxDQUFDaWYsRUFBUCxDQUFVLGdCQUFWLEVBQTRCLFlBQU07QUFDaENrbEIsT0FBSyxDQUFDLGtCQUFELENBQUw7QUFDRCxDQUZEO0FBSUFua0MsTUFBTSxDQUFDaWYsRUFBUCxDQUFVLGFBQVYsRUFBeUIsWUFBTTtBQUM3QmtsQixPQUFLLENBQUMscUJBQUQsQ0FBTDtBQUNELENBRkQ7QUFJQW5rQyxNQUFNLENBQUNpZixFQUFQLENBQVUsaUJBQVYsRUFBNkIsWUFBTTtBQUNqQ2tsQixPQUFLLENBQUMseUNBQUQsQ0FBTDtBQUNELENBRkQsRTs7Ozs7Ozs7O0FDOURBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwbGF5ZXJSZWYgfSBmcm9tICcuL2RhdGEnO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdEtleUNvbnRyb2woaW50ZXJ2YWxQZXJpb2QgPSAzMDAsIHNvY2tldCkge1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcbiAgICBsZXQgd2luZG93QXNwZWN0UmF0aW8gPSB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICBpZiAod2luZG93QXNwZWN0UmF0aW8gPj0gMSkge1xuICAgICAgc3dpdGNoIChlLmtleSkge1xuICAgICAgICBjYXNlIFwiRG93blwiOiAvLyBJRS9FZGdlIHNwZWNpZmljIHZhbHVlXG4gICAgICAgIGNhc2UgXCJBcnJvd0Rvd25cIjpcbiAgICAgICAgICAvLyBEbyBzb21ldGhpbmcgZm9yIFwiZG93biBhcnJvd1wiIGtleSBwcmVzcy5cbiAgICAgICAgICBzb2NrZXQuZW1pdCgncGxheWVyTW92ZU1pbnVzJywgcGxheWVyUmVmKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIlVwXCI6IC8vIElFL0VkZ2Ugc3BlY2lmaWMgdmFsdWVcbiAgICAgICAgY2FzZSBcIkFycm93VXBcIjpcbiAgICAgICAgICAvLyBEbyBzb21ldGhpbmcgZm9yIFwidXAgYXJyb3dcIiBrZXkgcHJlc3MuXG4gICAgICAgICAgc29ja2V0LmVtaXQoJ3BsYXllck1vdmVQbHVzJywgcGxheWVyUmVmKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBzd2l0Y2ggKGUua2V5KSB7XG4gICAgICAgIGNhc2UgXCJMZWZ0XCI6IC8vIElFL0VkZ2Ugc3BlY2lmaWMgdmFsdWVcbiAgICAgICAgY2FzZSBcIkFycm93TGVmdFwiOlxuICAgICAgICAgIC8vIERvIHNvbWV0aGluZyBmb3IgXCJsZWZ0IGFycm93XCIga2V5IHByZXNzLlxuICAgICAgICAgIHNvY2tldC5lbWl0KCdwbGF5ZXJNb3ZlTWludXMnLCBwbGF5ZXJSZWYpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiUmlnaHRcIjogLy8gSUUvRWRnZSBzcGVjaWZpYyB2YWx1ZVxuICAgICAgICBjYXNlIFwiQXJyb3dSaWdodFwiOlxuICAgICAgICAgIC8vIERvIHNvbWV0aGluZyBmb3IgXCJyaWdodCBhcnJvd1wiIGtleSBwcmVzcy5cbiAgICAgICAgICBzb2NrZXQuZW1pdCgncGxheWVyTW92ZVBsdXMnLCBwbGF5ZXJSZWYpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHN3aXRjaCAoZS5rZXkpIHtcbiAgICAgIGNhc2UgXCJTcGFjZVwiOlxuICAgICAgICAvLyBEbyBzb21ldGhpbmcgZm9yIFwiZW50ZXJcIiBvciBcInJldHVyblwiIGtleSBwcmVzcy5cbiAgICAgICAgc29ja2V0LmVtaXQoJ3BsYXllckx1bmNoQmFsbCcsIHBsYXllclJlZik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIkVzY1wiOiAvLyBJRS9FZGdlIHNwZWNpZmljIHZhbHVlXG4gICAgICBjYXNlIFwiRXNjYXBlXCI6XG4gICAgICAgIC8vIERvIHNvbWV0aGluZyBmb3IgXCJlc2NcIiBrZXkgcHJlc3MuXG4gICAgICAgIHNvY2tldC5lbWl0KCdwbGF5ZXJFc2NhcGUnLCBwbGF5ZXJSZWYpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybjsgLy8gUXVpdCB3aGVuIHRoaXMgZG9lc24ndCBoYW5kbGUgdGhlIGtleSBldmVudC5cbiAgICB9XG4gIH0pXG5cblxufVxuXG5cbiIsImltcG9ydCB7IENhbnZhczJERnhCYXNlLCBib290IH0gZnJvbSAnLi9saWIvYmFzZSc7XG5pbXBvcnQgeyBTdHJva2VBbmltYXRpb24sIFN3aXJsOEJpdCwgU3RhclNreSB9IGZyb20gJy4vbGliL2FuaW1hdGlvbic7XG5pbXBvcnQgeyBnZXRDYWNoZUNhbnZhcyB9IGZyb20gJy4vbGliL3V0aWwnO1xuaW1wb3J0IHsgcGxheWVyc0RhdGEsIGJhbGxEYXRhLCBjb3VydERhdGEsIHBsYXllclJlZiB9IGZyb20gJy4uL2RhdGEnO1xuaW1wb3J0IHsgZHJhd1JlY3QsIGRyYXdDaXJjbGUgfSBmcm9tICcuL2xpYi9zaGFwZSdcbmltcG9ydCB7IHJhbmRvbVdpdGhpblJhbmdlLCBwYWRTdHJpbmcgfSBmcm9tICcuL2xpYi9mdW5jdGlvbic7XG5cbmNvbnN0IERFRkFVTFQgPSB7XG4gIGJnQ29sb3I6ICdyZ2JhKDAsMCwwLDEpJyxcbiAgY291cnRDb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsMSknLFxuICBjb3VydEFzcGVjdFJhdGlvOiA1IC8gM1xufVxuXG5leHBvcnQgY2xhc3MgRW5naW5lIGV4dGVuZHMgQ2FudmFzMkRGeEJhc2Uge1xuICBjb25zdHJ1Y3RvcihlbGUsIGRlZmF1bHRDb25maWcsIGNvbmZpZykge1xuICAgIHN1cGVyKGVsZSwgZGVmYXVsdENvbmZpZywgY29uZmlnKVxuICAgIHRoaXMucGl4ZWxCYXNlID0gMTQ0MDtcbiAgICB0aGlzLmluaXQoKTtcbiAgICB0aGlzLmZwcyA9IDMwO1xuICAgIHRoaXMuY291cnRPZmZzZXQgPSA3NTtcbiAgICB0aGlzLmNvdXJ0T2Zmc2V0TW9iaWxlID0gMjU7XG4gICAgdGhpcy5nYW1lU3RhdHVzID0gMDtcbiAgICB0aGlzLnBhdXNlID0gZmFsc2U7XG4gICAgdGhpcy5wbGF5ZXJzVGhpY2tuZXNzID0gMjA7XG4gICAgLy8wOiBub3Qgc3RhcnQgeWV0XG4gICAgLy8xOiBjdXJ0YWluIGFuaW1hdGluZ1xuICAgIC8vMjogY291cnQgYW5pbWF0aW5nXG4gICAgLy8zOiBhbmltYXRpbmcgcGxheWVycyBhbmQgc2Nyb2Vib2FyZFxuICAgIC8vNDogZ2FtZSBpcyByZWFkeVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLmN1cnRhaW4gPSB0aGlzLmdlbkN1cnRhaW4oKTsvLyDmnIDlupXlsaRjYW52YXNcbiAgICB0aGlzLmNvdXJ0ID0gdGhpcy5nZW5Db3VydCgpOy8v5pyA5bqV5bGkY2FudmFzXG4gICAgdGhpcy5zdGFyU2t5ID0gdGhpcy5nZW5TdGFyU2t5KCk7Ly/lgJLmlbjnrKzkuozlsaRjYW52YXNcbiAgICB0aGlzLnBsYXllcnMgPSB0aGlzLmdlblBsYXllcnMoKTsvL+WAkuaVuOesrOS4ieWxpGNhbnZhc1xuICAgIHRoaXMuYmFsbCA9IHRoaXMuZ2VuQmFsbCgpOy8v5YCS5pW456ys5Zub5bGkY2FudmFzXG4gICAgdGhpcy5zY29yZWJvYXJkcyA9IHRoaXMuZ2VuU2NvcmVib2FyZHMoKTsvL+acgOihqOWxpGNhbnZhc1xuICAgIHRoaXMuaW5pdFJlc2l6ZWQoKTtcbiAgfVxuXG4gIGluaXRSZXNpemVkKCkge1xuICAgIHRoaXMucmVzaXplZENhbGxiYWNrID0gKCkgPT4ge1xuICAgICAgdGhpcy5jdXJ0YWluLmRyYXdTdGF0aWMoKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMuZ2FtZVN0YXR1cyA9PT0gMykge1xuICAgICAgICAgICAgdGhpcy5iYWNrZ3JvdW5kKCdibGFjaycpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmNvdXJ0LmRyYXdTdGF0aWMoKTtcbiAgICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBnZW5DdXJ0YWluKGJhbmRXaWR0aCA9IDMwKSB7XG4gICAgbGV0IGN1cnRhaW5DYW52YXNJbnN0YW5jZSA9IHRoaXMuY3VydGFpbkNhbnZhc0luc3RhbmNlID0gdGhpcy5jcmVhdGVWaXJ0dWFsQ2FudmFzQmFzZUluc3RhbmNlKCk7XG4gICAgY3VydGFpbkNhbnZhc0luc3RhbmNlLnNldENhbnZhc1NpemUodGhpcy5jdnMud2lkdGgsIHRoaXMuY3ZzLmhlaWdodCk7XG4gICAgbGV0IGN1cnRhaW5BbmltYXRpb25JbnN0YW5jZSA9IG5ldyBTd2lybDhCaXQoY3VydGFpbkNhbnZhc0luc3RhbmNlLmN0eCk7XG4gICAgbGV0IGN1cnRhaW4gPSB7XG4gICAgICBhbmltYXRlOiAoKSA9PiB7XG4gICAgICAgIGxldCBpbml0aWFsSW1hZ2UgPSBnZXRDYWNoZUNhbnZhcyh0aGlzLmN0eCk7XG4gICAgICAgIGxldCBwcm9taXNlID0gY3VydGFpbkFuaW1hdGlvbkluc3RhbmNlLmFuaW1hdGUoZmFsc2UsIGJhbmRXaWR0aCwgdGhpcy5jb25maWcuYmdDb2xvcik7XG4gICAgICAgIGxldCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKGluaXRpYWxJbWFnZSwgMCwgMCwgdGhpcy5jdnMud2lkdGgsIHRoaXMuY3ZzLmhlaWdodCwgMCwgMCwgdGhpcy5jdnMud2lkdGgsIHRoaXMuY3ZzLmhlaWdodCk7XG4gICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKGN1cnRhaW5DYW52YXNJbnN0YW5jZS5jdnMsIDAsIDAsIGN1cnRhaW5DYW52YXNJbnN0YW5jZS5jdnMud2lkdGgsIGN1cnRhaW5DYW52YXNJbnN0YW5jZS5jdnMuaGVpZ2h0LCAwLCAwLCB0aGlzLmN2cy53aWR0aCwgdGhpcy5jdnMuaGVpZ2h0KTtcbiAgICAgICAgfSwgdGhpcy5mcHMpO1xuICAgICAgICByZXR1cm4gcHJvbWlzZS50aGVuKCgpID0+IHtcbiAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlcykgPT4ge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgICAgICByZXMoKTtcbiAgICAgICAgICAgIH0sIDUwMClcbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIGRyYXdTdGF0aWM6ICgpID0+IHsgLy9cbiAgICAgICAgbGV0IHRyaWdnZXI7XG4gICAgICAgIGxldCBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XG4gICAgICAgICAgdHJpZ2dlciA9IHJlcztcbiAgICAgICAgfSlcbiAgICAgICAgbGV0IHN0YXRpY0ltYWdlID0gY3VydGFpbkNhbnZhc0luc3RhbmNlLmN2cztcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKFxuICAgICAgICAgIHN0YXRpY0ltYWdlLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICBzdGF0aWNJbWFnZS53aWR0aCxcbiAgICAgICAgICBzdGF0aWNJbWFnZS5oZWlnaHQsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIHRoaXMuY3ZzLndpZHRoLFxuICAgICAgICAgIHRoaXMuY3ZzLmhlaWdodFxuICAgICAgICApXG4gICAgICAgIHRyaWdnZXIoKTtcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gY3VydGFpbjtcbiAgfVxuXG4gIGdldEFzcGVjdFJhdGlvKCkge1xuICAgIHJldHVybiB0aGlzLmN2cy53aWR0aCAvIHRoaXMuY3ZzLmhlaWdodDtcbiAgfVxuXG4gIHJlc3BvbnNpdmVQYWludGVyKHRhcmdldExheWVyLCBzb3VyY2VDYW52YXMsIGluaXRpYWxJbWFnZSkge1xuICAgIGxldCBvZmZzZXQgPSB0aGlzLmNvdXJ0T2Zmc2V0O1xuICAgIGxldCBvZmZzZXRNb2JpbGUgPSB0aGlzLmNvdXJ0T2Zmc2V0TW9iaWxlO1xuICAgIHRhcmdldExheWVyLmN0eC5zYXZlKCk7XG4gICAgdGFyZ2V0TGF5ZXIuY2xlYXIoKTtcbiAgICAvL+eVq2NvdXJ0IOacg+acieWbm+eorueLgOazgSwgKGNhbnZhc+mVt+WvrD7poJDoqK3plbflr6zmr5Q+MSkgfCAoMTw9Y2FudmFz6ZW35a+sPOmgkOioremVt+WvrOavlCkgfCAo6aCQ6Kit6ZW35a+s5q+U5YCS5pW4PGNhbnZhc+mVt+WvrOavlDwxKSDvvZwgKGNhbnZhc+mVt+WvrOavlDzpoJDoqK3plbflr6zmr5TlgJLmlbg8MSlcbiAgICBpZiAodGhpcy5nZXRBc3BlY3RSYXRpbygpID49IDEpIHtcbiAgICAgIC8vIOmAmemCiuaYr+WJjeWFqeeorueLgOazgVxuICAgICAgLy/nlatpbml0aWFsSW1hZ2UgLCDlho3nlatjb3VydFxuICAgICAgbGV0IHR5cGVBID0gKHRhcmdldExheWVyLmN2cy5oZWlnaHQgLSAyICogb2Zmc2V0KSAqIHRoaXMuY29uZmlnLmNvdXJ0QXNwZWN0UmF0aW8gPCB0YXJnZXRMYXllci5jdnMud2lkdGggLSAyICogb2Zmc2V0O1xuICAgICAgbGV0IG9mZnNldFYsIG9mZnNldEgsIGNvdXJ0SGVpZ2h0LCBjb3VydFdpZHRoO1xuICAgICAgaWYgKHR5cGVBKSB7XG4gICAgICAgIC8vIOWFiOeul+WHuue4rua4m+mBjm9mZnNldCDnmoRjdnMg5a+sXG4gICAgICAgIG9mZnNldFYgPSBvZmZzZXQ7XG4gICAgICAgIGNvdXJ0SGVpZ2h0ID0gdGFyZ2V0TGF5ZXIuY3ZzLmhlaWdodCAtIDIgKiBvZmZzZXQ7XG4gICAgICAgIGNvdXJ0V2lkdGggPSBjb3VydEhlaWdodCAqIHRoaXMuY29uZmlnLmNvdXJ0QXNwZWN0UmF0aW87XG4gICAgICAgIG9mZnNldEggPSAodGFyZ2V0TGF5ZXIuY3ZzLndpZHRoIC0gY291cnRXaWR0aCkgLyAyO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIC8vIOmdnnR5cGVB55qE54uA5rOBLCDkuZ/lsLHmmK9jYW52YXPlr6zpq5jmr5TkvY7mlrxjb25maWcg6Kit5a6a55qE5q+U5L6LXG4gICAgICAgIG9mZnNldEggPSBvZmZzZXQ7XG4gICAgICAgIGNvdXJ0V2lkdGggPSB0YXJnZXRMYXllci5jdnMud2lkdGggLSAyICogb2Zmc2V0O1xuICAgICAgICBjb3VydEhlaWdodCA9IGNvdXJ0V2lkdGggLyB0aGlzLmNvbmZpZy5jb3VydEFzcGVjdFJhdGlvO1xuICAgICAgICBvZmZzZXRWID0gKHRhcmdldExheWVyLmN2cy5oZWlnaHQgLSBjb3VydEhlaWdodCkgLyAyO1xuICAgICAgfVxuICAgICAgaWYgKGluaXRpYWxJbWFnZSkge1xuICAgICAgICB0YXJnZXRMYXllci5jdHguZHJhd0ltYWdlKFxuICAgICAgICAgIGluaXRpYWxJbWFnZSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgaW5pdGlhbEltYWdlLndpZHRoLFxuICAgICAgICAgIGluaXRpYWxJbWFnZS5oZWlnaHQsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIHRhcmdldExheWVyLmN2cy53aWR0aCxcbiAgICAgICAgICB0YXJnZXRMYXllci5jdnMuaGVpZ2h0XG4gICAgICAgIClcblxuICAgICAgfVxuICAgICAgLy8g5YWI5peL6L2J55Wr5biDLCDlm6DngrogdmlydHVhbGNhbnZhcyDmmK/kuIDlvLXlnoLnm7TnmoTnlavluINcbiAgICAgIGxldCByb3RhdGVQcmFtID0gcGxheWVyUmVmLm51bWJlciA9PSAxID8gMSA6IC0xXG4gICAgICBsZXQgc2NhbGVQcmFtID0gcGxheWVyUmVmLm51bWJlciA9PSAxID8gMSA6IC0xXG4gICAgICB0YXJnZXRMYXllci5jdHgudHJhbnNsYXRlKHRhcmdldExheWVyLmN2cy53aWR0aCAvIDIsIHRhcmdldExheWVyLmN2cy5oZWlnaHQgLyAyKTtcbiAgICAgIHRhcmdldExheWVyLmN0eC5yb3RhdGUoLU1hdGguUEkgLyAyKTtcbiAgICAgIHRhcmdldExheWVyLmN0eC5zY2FsZSgxLCAxICogc2NhbGVQcmFtKTtcbiAgICAgIHRhcmdldExheWVyLmN0eC50cmFuc2xhdGUoLXRhcmdldExheWVyLmN2cy5oZWlnaHQgLyAyLCAtdGFyZ2V0TGF5ZXIuY3ZzLndpZHRoIC8gMik7XG4gICAgICAvLyDlm6Dngrpjb3VydCDnmoTlpKflsI/mnIPpmqjokZdjYW52YXMg55qE6ZW35a+s5q+U6ICM6K6K5YuVXG4gICAgICAvLyDpgJnpgorlhYgg5YGH6Kit5LuK5aSp5pivY2FudmFzIOWvrOavlOmrmOi2heWHuuW+iOWkmueahOaDheazgSAsIOS5n+WwseaYr+eLgOazgVwidHlwZUFcIlxuICAgICAgdGFyZ2V0TGF5ZXIuY3R4LmRyYXdJbWFnZShcbiAgICAgICAgc291cmNlQ2FudmFzLFxuICAgICAgICAwLFxuICAgICAgICAwLFxuICAgICAgICBzb3VyY2VDYW52YXMud2lkdGgsXG4gICAgICAgIHNvdXJjZUNhbnZhcy5oZWlnaHQsXG4gICAgICAgIG9mZnNldFYsXG4gICAgICAgIG9mZnNldEgsXG4gICAgICAgIGNvdXJ0SGVpZ2h0LFxuICAgICAgICBjb3VydFdpZHRoXG4gICAgICApXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgLy/pgJnpgormmK/lvozlhannqK7ni4Dms4FcbiAgICAgIC8vIOWboOeCumNvdXJ0IOeahOWkp+Wwj+acg+maqOiRl2NhbnZhcyDnmoTplbflr6zmr5TogIzororli5VcbiAgICAgIC8vIOmAmemCiuWFiCDlgYfoqK3ku4rlpKnmmK9jYW52YXMg6auY5q+U5a+s5q+U6LaF5Ye65b6I5aSa55qE5oOF5rOBICwg5Lmf5bCx5piv54uA5rOBXCJ0eXBlQVwiXG4gICAgICBsZXQgdHlwZUEgPSAodGFyZ2V0TGF5ZXIuY3ZzLndpZHRoIC0gMiAqIG9mZnNldE1vYmlsZSkgKiB0aGlzLmNvbmZpZy5jb3VydEFzcGVjdFJhdGlvIDwgdGFyZ2V0TGF5ZXIuY3ZzLmhlaWdodCAtIDIgKiBvZmZzZXQ7XG4gICAgICBsZXQgb2Zmc2V0Viwgb2Zmc2V0SCwgY291cnRIZWlnaHQsIGNvdXJ0V2lkdGg7XG4gICAgICBpZiAodHlwZUEpIHtcbiAgICAgICAgLy8g5YWI566X5Ye657iu5rib6YGOb2Zmc2V0IOeahGN2cyDlr6xcbiAgICAgICAgb2Zmc2V0SCA9IG9mZnNldE1vYmlsZTtcbiAgICAgICAgY291cnRXaWR0aCA9IHRhcmdldExheWVyLmN2cy53aWR0aCAtIDIgKiBvZmZzZXRNb2JpbGU7XG4gICAgICAgIGNvdXJ0SGVpZ2h0ID0gY291cnRXaWR0aCAqIHRoaXMuY29uZmlnLmNvdXJ0QXNwZWN0UmF0aW87XG4gICAgICAgIG9mZnNldFYgPSAodGFyZ2V0TGF5ZXIuY3ZzLmhlaWdodCAtIGNvdXJ0SGVpZ2h0KSAvIDI7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgLy8g6Z2edHlwZUHnmoTni4Dms4EsIOS5n+WwseaYr2NhbnZhc+WvrOmrmOavlOS9juaWvGNvbmZpZyDoqK3lrprnmoTmr5TkvotcbiAgICAgICAgb2Zmc2V0ViA9IG9mZnNldDtcbiAgICAgICAgY291cnRIZWlnaHQgPSB0YXJnZXRMYXllci5jdnMuaGVpZ2h0IC0gMiAqIG9mZnNldDtcbiAgICAgICAgY291cnRXaWR0aCA9IGNvdXJ0SGVpZ2h0IC8gdGhpcy5jb25maWcuY291cnRBc3BlY3RSYXRpbztcbiAgICAgICAgb2Zmc2V0SCA9ICh0YXJnZXRMYXllci5jdnMud2lkdGggLSBjb3VydFdpZHRoKSAvIDI7XG4gICAgICB9XG4gICAgICBpZiAoaW5pdGlhbEltYWdlKSB7XG4gICAgICAgIHRhcmdldExheWVyLmN0eC5kcmF3SW1hZ2UoXG4gICAgICAgICAgaW5pdGlhbEltYWdlLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICBpbml0aWFsSW1hZ2Uud2lkdGgsXG4gICAgICAgICAgaW5pdGlhbEltYWdlLmhlaWdodCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgdGFyZ2V0TGF5ZXIuY3ZzLndpZHRoLFxuICAgICAgICAgIHRhcmdldExheWVyLmN2cy5oZWlnaHRcbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgbGV0IHJvdGF0ZVByYW0gPSBwbGF5ZXJSZWYubnVtYmVyID09IDEgPyAyIDogMTtcbiAgICAgIGxldCBzY2FsZVByYW0gPSBwbGF5ZXJSZWYubnVtYmVyID09IDEgPyAxIDogLTE7XG4gICAgICB0YXJnZXRMYXllci5jdHgudHJhbnNsYXRlKHRhcmdldExheWVyLmN2cy53aWR0aCAvIDIsIHRhcmdldExheWVyLmN2cy5oZWlnaHQgLyAyKTtcbiAgICAgIHRhcmdldExheWVyLmN0eC5yb3RhdGUoTWF0aC5QSSAqIHJvdGF0ZVByYW0pO1xuICAgICAgdGFyZ2V0TGF5ZXIuY3R4LnNjYWxlKDEgKiBzY2FsZVByYW0sIDEpO1xuICAgICAgdGFyZ2V0TGF5ZXIuY3R4LnRyYW5zbGF0ZSgtdGFyZ2V0TGF5ZXIuY3ZzLndpZHRoIC8gMiwgLXRhcmdldExheWVyLmN2cy5oZWlnaHQgLyAyKTtcbiAgICAgIHRhcmdldExheWVyLmN0eC5kcmF3SW1hZ2UoXG4gICAgICAgIHNvdXJjZUNhbnZhcyxcbiAgICAgICAgMCxcbiAgICAgICAgMCxcbiAgICAgICAgc291cmNlQ2FudmFzLndpZHRoLFxuICAgICAgICBzb3VyY2VDYW52YXMuaGVpZ2h0LFxuICAgICAgICBvZmZzZXRILFxuICAgICAgICBvZmZzZXRWLFxuICAgICAgICBjb3VydFdpZHRoLFxuICAgICAgICBjb3VydEhlaWdodFxuICAgICAgKVxuICAgIH1cblxuICAgIHRhcmdldExheWVyLmN0eC5yZXN0b3JlKCk7XG4gIH1cblxuICBnZW5Db3VydChzdHJva2VXaWR0aCA9IDEwKSB7XG4gICAgbGV0IGNvdXJ0Q2FudmFzSW5zdGFuY2UgPSB0aGlzLmNvdXJ0Q2FudmFzSW5zdGFuY2UgPSB0aGlzLmNyZWF0ZVZpcnR1YWxDYW52YXNCYXNlSW5zdGFuY2UoKTtcbiAgICBsZXQgY291cnRDYW52YXNXaWR0aCA9IGNvdXJ0RGF0YS53aWR0aCA9IHRoaXMucGl4ZWxCYXNlIC8gdGhpcy5jb25maWcuY291cnRBc3BlY3RSYXRpbztcbiAgICBsZXQgY291cnRDYW52YXNIZWlnaHQgPSBjb3VydERhdGEuaGVpZ2h0ID0gdGhpcy5waXhlbEJhc2U7XG4gICAgY291cnRDYW52YXNJbnN0YW5jZS5zZXRDYW52YXNTaXplKGNvdXJ0Q2FudmFzV2lkdGgsIGNvdXJ0Q2FudmFzSGVpZ2h0KTtcbiAgICBsZXQgdmVydGljZXMgPSBbXG4gICAgICB7IHg6IDAsIHk6IDAgfSxcbiAgICAgIHsgeDogY291cnRDYW52YXNJbnN0YW5jZS5jdnMud2lkdGgsIHk6IDAgfSxcbiAgICAgIHsgeDogY291cnRDYW52YXNJbnN0YW5jZS5jdnMud2lkdGgsIHk6IGNvdXJ0Q2FudmFzSW5zdGFuY2UuY3ZzLmhlaWdodCB9LFxuICAgICAgeyB4OiAwLCB5OiBjb3VydENhbnZhc0luc3RhbmNlLmN2cy5oZWlnaHQgfSxcbiAgICAgIHsgeDogMCwgeTogMCB9XG4gICAgXTtcblxuICAgIGxldCBzdHJva2VBbmltYXRpb25JbnN0YW5jZSA9IG5ldyBTdHJva2VBbmltYXRpb24oY291cnRDYW52YXNJbnN0YW5jZS5jdHgsIHZlcnRpY2VzKTtcblxuICAgIGxldCBjb3VydCA9IHtcbiAgICAgIGFuaW1hdGU6ICgpID0+IHtcbiAgICAgICAgY291cnQuaW5pdGlhbEltYWdlID0gZ2V0Q2FjaGVDYW52YXModGhpcy5jdHgpO1xuICAgICAgICBsZXQgcHJvbWlzZSA9IHN0cm9rZUFuaW1hdGlvbkluc3RhbmNlLmFuaW1hdGUoc3Ryb2tlV2lkdGgsIHRoaXMuY29uZmlnLmNvdXJ0Q29sb3IpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIGxldCB2ZXJ0aWNlcyA9IFtcbiAgICAgICAgICAgIHsgeDogMCwgeTogY291cnRDYW52YXNJbnN0YW5jZS5jdnMuaGVpZ2h0IC8gMiB9LFxuICAgICAgICAgICAgeyB4OiBjb3VydENhbnZhc0luc3RhbmNlLmN2cy53aWR0aCwgeTogY291cnRDYW52YXNJbnN0YW5jZS5jdnMuaGVpZ2h0IC8gMiB9LFxuICAgICAgICAgIF1cbiAgICAgICAgICByZXR1cm4gbmV3IFN0cm9rZUFuaW1hdGlvbihjb3VydENhbnZhc0luc3RhbmNlLmN0eCwgdmVydGljZXMpLmFuaW1hdGUoc3Ryb2tlV2lkdGgsIHRoaXMuY29uZmlnLmNvdXJ0Q29sb3IsIGZhbHNlLCBbMTAsIDMwXSwgJ3RyYW5zcGFyZW50Jyk7XG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5yZXNwb25zaXZlUGFpbnRlcih0aGlzLCBjb3VydENhbnZhc0luc3RhbmNlLmN2cywgY291cnQuaW5pdGlhbEltYWdlKTtcbiAgICAgICAgfSwgdGhpcy5mcHMpXG4gICAgICAgIHJldHVybiBwcm9taXNlLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzKSA9PiB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICAgICAgIHJlcygpO1xuICAgICAgICAgICAgfSwgNTAwKVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG5cbiAgICAgIH0sXG4gICAgICBkcmF3U3RhdGljOiAoKSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcbiAgICAgICAgICB0aGlzLnJlc3BvbnNpdmVQYWludGVyKHRoaXMsIGNvdXJ0Q2FudmFzSW5zdGFuY2UuY3ZzLCBjb3VydC5pbml0aWFsSW1hZ2UpO1xuICAgICAgICAgIHJlcygpO1xuICAgICAgICB9KVxuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gY291cnQ7XG4gIH1cblxuICBnZW5TdGFyU2t5KCkge1xuICAgIGxldCBzdGFyU2t5Q2FudmFzSW5zdGFuY2UgPSB0aGlzLnN0YXJTa3lDYW52YXNJbnN0YW5jZSA9IHRoaXMuYWRkTmV3TGF5ZXIoKTtcbiAgICBsZXQgc3RhclNreUFuaW1hdGlvbkluc3RhbmNlID0gbmV3IFN0YXJTa3koc3RhclNreUNhbnZhc0luc3RhbmNlLmN0eCk7XG4gICAgc3RhclNreUNhbnZhc0luc3RhbmNlLnJlc2l6ZWRDYWxsYmFjayA9IHN0YXJTa3lBbmltYXRpb25JbnN0YW5jZS5yZWZyZXNoU3RhcnMuYmluZChzdGFyU2t5QW5pbWF0aW9uSW5zdGFuY2UpO1xuICAgIHJldHVybiBzdGFyU2t5QW5pbWF0aW9uSW5zdGFuY2U7XG4gIH1cblxuXG4gIGdlblBsYXllcnMod2lkdGhQcmFtID0gMTAsIGdhcFJhdGlvID0gMC4wNSwgY29sb3IgPSAnd2hpdGUnLCB0aGlja25lc3MgPSAyMCkge1xuICAgIHRoaXMucGxheWVyc1RoaWNrbmVzcyA9IHRoaWNrbmVzcztcbiAgICBsZXQgcGxheWVyc0NhbnZhc0luc3RhbmNlID0gdGhpcy5wbGF5ZXJzQ2FudmFzSW5zdGFuY2UgPSB0aGlzLmFkZE5ld0xheWVyKCk7XG4gICAgbGV0IHBsYXllcnNWaXJ0dWFsQ2FudmFzSW5zdGFuY2UgPSB0aGlzLnBsYXllcnNWaXJ0dWFsQ2FudmFzSW5zdGFuY2UgPSB0aGlzLmNyZWF0ZVZpcnR1YWxDYW52YXNCYXNlSW5zdGFuY2UoKTtcbiAgICBwbGF5ZXJzVmlydHVhbENhbnZhc0luc3RhbmNlLnNldENhbnZhc1NpemUodGhpcy5jb3VydENhbnZhc0luc3RhbmNlLmN2cy53aWR0aCwgdGhpcy5jb3VydENhbnZhc0luc3RhbmNlLmN2cy5oZWlnaHQpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5ZXJzRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgcGxheWVyc0RhdGFbaV0ud2lkdGggPSAodGhpcy5waXhlbEJhc2UgLyB0aGlzLmNvbmZpZy5jb3VydEFzcGVjdFJhdGlvKSAvIHdpZHRoUHJhbTtcbiAgICAgIHBsYXllcnNEYXRhW2ldLnBvc2l0aW9uLnggPSB0aGlzLmNvdXJ0Q2FudmFzSW5zdGFuY2UuY3ZzLndpZHRoIC8gMjtcbiAgICAgIGlmIChpID09PSAwKSB7XG4gICAgICAgIHBsYXllcnNEYXRhW2ldLnBvc2l0aW9uLnkgPSB0aGlzLmNvdXJ0Q2FudmFzSW5zdGFuY2UuY3ZzLmhlaWdodCAqICgxIC0gZ2FwUmF0aW8pXG4gICAgICB9XG4gICAgICBlbHNlIGlmIChpID09PSAxKSB7XG4gICAgICAgIHBsYXllcnNEYXRhW2ldLnBvc2l0aW9uLnkgPSB0aGlzLmNvdXJ0Q2FudmFzSW5zdGFuY2UuY3ZzLmhlaWdodCAqIGdhcFJhdGlvXG4gICAgICB9XG4gICAgfVxuICAgIGxldCBwbGF5ZXJzID0ge1xuICAgICAgcmVhZHk6ICgpID0+IHtcbiAgICAgICAgbGV0IHRyaWdnZXI7XG4gICAgICAgIGxldCBwcm9taXNlID0gbmV3IFByb21pc2UocmVzID0+IHtcbiAgICAgICAgICB0cmlnZ2VyID0gcmVzO1xuICAgICAgICB9KVxuICAgICAgICBsZXQgb3BhY2l0eSA9IDA7XG4gICAgICAgIGxldCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICBpZiAob3BhY2l0eSA+PSAxKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgIHRyaWdnZXIoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5ZXJzRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZHJhd1JlY3QocGxheWVyc1ZpcnR1YWxDYW52YXNJbnN0YW5jZS5jdHgsIHBsYXllcnNEYXRhW2ldLnBvc2l0aW9uLngsIHBsYXllcnNEYXRhW2ldLnBvc2l0aW9uLnksIHBsYXllcnNEYXRhW2ldLndpZHRoLCB0aGlja25lc3MsIGNvbG9yLCBvcGFjaXR5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5yZXNwb25zaXZlUGFpbnRlcihwbGF5ZXJzQ2FudmFzSW5zdGFuY2UsIHBsYXllcnNWaXJ0dWFsQ2FudmFzSW5zdGFuY2UuY3ZzKTtcbiAgICAgICAgICBvcGFjaXR5ICs9IDAuMDE7XG4gICAgICAgIH0sIHRoaXMuZnBzKVxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICAgIH0sXG5cbiAgICAgIGxvb3BVcGRhdGU6ICgpID0+IHtcbiAgICAgICAgbGV0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgIHBsYXllcnNWaXJ0dWFsQ2FudmFzSW5zdGFuY2UuY2xlYXIoKTtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBsYXllcnNEYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBkcmF3UmVjdChwbGF5ZXJzVmlydHVhbENhbnZhc0luc3RhbmNlLmN0eCwgcGxheWVyc0RhdGFbaV0ucG9zaXRpb24ueCwgcGxheWVyc0RhdGFbaV0ucG9zaXRpb24ueSwgcGxheWVyc0RhdGFbaV0ud2lkdGgsIHRoaWNrbmVzcywgY29sb3IsIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnJlc3BvbnNpdmVQYWludGVyKHBsYXllcnNDYW52YXNJbnN0YW5jZSwgcGxheWVyc1ZpcnR1YWxDYW52YXNJbnN0YW5jZS5jdnMpO1xuICAgICAgICB9LCB0aGlzLmZwcylcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcGxheWVycztcbiAgfVxuXG4gIGdlblNjb3JlYm9hcmRzKCkge1xuICAgIGxldCBzY29yZWJvYXJkc0xheWVyID0gdGhpcy5hZGREaXZMYXllcignc2NvcmVib2FyZHMnLCAnc2NvcmVib2FyZHMnKTtcbiAgICBsZXQgdG9wQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IGJvdEJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvcEJhci5jbGFzc0xpc3QuYWRkKCdzY29yZWJvYXJkc19fdG9wLWJhcicpO1xuICAgIGJvdEJhci5jbGFzc0xpc3QuYWRkKCdzY29yZWJvYXJkc19fYm90LWJhcicpO1xuICAgIHNjb3JlYm9hcmRzTGF5ZXIuYXBwZW5kKHRvcEJhciwgYm90QmFyKTtcbiAgICBsZXQgZ2VuUGxheWVyU2hvd2Nhc2UgPSAocGxheWVyTmFtZSwgcGxheWVySWQsIHNjb3JlTWF4KSA9PiB7XG5cbiAgICAgIGxldCBwbGF5ZXJTaG93Q2FzZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgcGxheWVyU2hvd0Nhc2UuY2xhc3NMaXN0LmFkZCgncGxheWVyLXNob3djYXNlJyk7XG4gICAgICBwbGF5ZXJTaG93Q2FzZS5pZCA9IGBwbGF5ZXIke3BsYXllcklkfWA7XG4gICAgICBsZXQgaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwicGxheWVyLXNob3djYXNlX19uYW1lXCI+JHtwbGF5ZXJOYW1lfTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicGxheWVyLXNob3djYXNlX19zY29yZVwiPlxuICAgICAgICAgIDAwMDAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICBgXG4gICAgICBwbGF5ZXJTaG93Q2FzZS5pbm5lckhUTUwgPSBpbm5lckhUTUw7XG4gICAgICByZXR1cm4gcGxheWVyU2hvd0Nhc2U7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVyc0RhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRvcEJhci5hcHBlbmQoZ2VuUGxheWVyU2hvd2Nhc2UocGxheWVyc0RhdGFbaV0ubmFtZSwgcGxheWVyc0RhdGFbaV0uaWQsIDUpKVxuICAgIH1cbiAgICBsZXQgc2NvcmVib2FyZHMgPSB7XG4gICAgICB1cGRhdGU6ICgpID0+IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5ZXJzRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHNjb3JlYm9hcmRzTGF5ZXIucXVlcnlTZWxlY3RvcihgI3BsYXllciR7aX1gKS5xdWVyeVNlbGVjdG9yKCcucGxheWVyLXNob3djYXNlX19uYW1lJykuaW5uZXJIVE1MID0gcGxheWVyc0RhdGFbaV0ubmFtZTtcbiAgICAgICAgICBzY29yZWJvYXJkc0xheWVyLnF1ZXJ5U2VsZWN0b3IoYCNwbGF5ZXIke2l9YCkucXVlcnlTZWxlY3RvcignLnBsYXllci1zaG93Y2FzZV9fc2NvcmUnKS5pbm5lckhUTUwgPSBwYWRTdHJpbmcocGxheWVyc0RhdGFbaV0uc2NvcmUsIDQpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgcmVhZHk6ICgpID0+IHtcbiAgICAgICAgc2NvcmVib2FyZHNMYXllci5jbGFzc0xpc3QuYWRkKCdzY29yZWJvYXJkcy0tcmVhZHknKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc2NvcmVib2FyZHNcbiAgfVxuXG4gIGdlbkJhbGwoc3BlZWQgPSAxMDAsIHNpemUgPSAzMCwgY29sb3IgPSAnd2hpdGUnKSB7XG4gICAgbGV0IGJhbGxDYW52YXNJbnN0YW5jZSA9IHRoaXMuYmFsbENhbnZhc0luc3RhbmNlID0gdGhpcy5hZGROZXdMYXllcigpO1xuICAgIGxldCBiYWxsVmlydHVhbENhbnZhc0luc3RhbmNlID0gdGhpcy5iYWxsVmlydHVhbENhbnZhc0luc3RhbmNlID0gdGhpcy5jcmVhdGVWaXJ0dWFsQ2FudmFzQmFzZUluc3RhbmNlKCk7XG4gICAgYmFsbFZpcnR1YWxDYW52YXNJbnN0YW5jZS5zZXRDYW52YXNTaXplKHRoaXMuY291cnRDYW52YXNJbnN0YW5jZS5jdnMud2lkdGgsIHRoaXMuY291cnRDYW52YXNJbnN0YW5jZS5jdnMuaGVpZ2h0KTtcblxuICAgIC8vaW5pdCBiYWxsRGF0YVxuXG4gICAgYmFsbERhdGEuc3BlZWQgPSB7XG4gICAgICB4OiByYW5kb21XaXRoaW5SYW5nZSgwLCBzcGVlZCksXG4gICAgICB5OiByYW5kb21XaXRoaW5SYW5nZSgwLCBzcGVlZClcbiAgICB9XG4gICAgYmFsbERhdGEuc2l6ZSA9IHNpemU7XG4gICAgYmFsbERhdGEuY29sb3IgPSBjb2xvcjtcbiAgICBiYWxsRGF0YS5wb3NpdGlvbiA9IHtcbiAgICAgIHg6IHBsYXllcnNEYXRhWzBdLnBvc2l0aW9uLngsIC8v5oi/5Li75YWI5oyB55CDXG4gICAgICB5OiBwbGF5ZXJzRGF0YVswXS5wb3NpdGlvbi55IC0gdGhpcy5wbGF5ZXJzVGhpY2tuZXNzIC0gMTBcbiAgICB9O1xuXG4gICAgbGV0IGJhbGwgPSB7XG4gICAgICByZWFkeTogKCkgPT4ge1xuICAgICAgICBsZXQgdHJpZ2dlcjtcbiAgICAgICAgbGV0IHByb21pc2UgPSBuZXcgUHJvbWlzZShyZXMgPT4ge1xuICAgICAgICAgIHRyaWdnZXIgPSByZXM7XG4gICAgICAgIH0pXG4gICAgICAgIGxldCBvcGFjaXR5ID0gMDtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgbGV0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKG9wYWNpdHkgPj0gMSkge1xuICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgICAgdHJpZ2dlcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZHJhd0NpcmNsZShiYWxsVmlydHVhbENhbnZhc0luc3RhbmNlLmN0eCwgYmFsbERhdGEucG9zaXRpb24ueCwgYmFsbERhdGEucG9zaXRpb24ueSwgYmFsbERhdGEuc2l6ZSwgYmFsbERhdGEuY29sb3IsIG9wYWNpdHkpO1xuICAgICAgICAgICAgdGhpcy5yZXNwb25zaXZlUGFpbnRlcihiYWxsQ2FudmFzSW5zdGFuY2UsIGJhbGxWaXJ0dWFsQ2FudmFzSW5zdGFuY2UuY3ZzKTtcblxuICAgICAgICAgICAgb3BhY2l0eSArPSAwLjAxO1xuICAgICAgICAgIH0sIHRoaXMuZnBzKVxuICAgICAgICB9LCA1MDApXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgICAgfSxcbiAgICAgIGxvb3BVcGRhdGU6ICgpID0+IHtcbiAgICAgICAgbGV0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgIGJhbGxWaXJ0dWFsQ2FudmFzSW5zdGFuY2UuY2xlYXIoKTtcbiAgICAgICAgICBkcmF3Q2lyY2xlKGJhbGxWaXJ0dWFsQ2FudmFzSW5zdGFuY2UuY3R4LCBiYWxsRGF0YS5wb3NpdGlvbi54LCBiYWxsRGF0YS5wb3NpdGlvbi55LCBiYWxsRGF0YS5zaXplLCBiYWxsRGF0YS5jb2xvcik7XG4gICAgICAgICAgdGhpcy5yZXNwb25zaXZlUGFpbnRlcihiYWxsQ2FudmFzSW5zdGFuY2UsIGJhbGxWaXJ0dWFsQ2FudmFzSW5zdGFuY2UuY3ZzKTtcbiAgICAgICAgfSwgdGhpcy5mcHMpXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBiYWxsO1xuICB9XG5cbiAgZHJhd0dhbWUoKSB7XG4gICAgdGhpcy5nYW1lU3RhdHVzID0gMTtcbiAgICB0aGlzLnN0YXJTa3kuYW5pbWF0ZSgpO1xuICAgIGxldCBwcm9taXNlID0gdGhpcy5jdXJ0YWluLmFuaW1hdGUoKVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmdhbWVTdGF0dXMgPSAyO1xuICAgICAgICByZXR1cm4gdGhpcy5jb3VydC5hbmltYXRlKCk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmdhbWVTdGF0dXMgPSAzO1xuICAgICAgICBsZXQgcGxheWVyc1JlYWR5ID0gdGhpcy5wbGF5ZXJzLnJlYWR5KCk7XG4gICAgICAgIGxldCBiYWxsUmVhZHkgPSB0aGlzLmJhbGwucmVhZHkoKTtcbiAgICAgICAgbGV0IHNjb3JlYm9hcmRzUmVhZHkgPSB0aGlzLnNjb3JlYm9hcmRzLnJlYWR5KCk7XG4gICAgICAgIGxldCBhbGxSZWFkeVByb21pc2UgPSBQcm9taXNlLmFsbChbXG4gICAgICAgICAgcGxheWVyc1JlYWR5LCBiYWxsUmVhZHksIHNjb3JlYm9hcmRzUmVhZHlcbiAgICAgICAgXSlcbiAgICAgICAgcmV0dXJuIGFsbFJlYWR5UHJvbWlzZTtcbiAgICAgIH0pXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMuZ2FtZVN0YXR1cyA9IDQ7XG4gICAgICAgIGxldCBnYW1lUmVhZHlQcm9taXNlID0gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XG4gICAgICAgICAgdGhpcy5pbml0R2FtZURhdGFVcGRhdGVJbnRlcnZhbCgpO1xuICAgICAgICAgIHJlcygpO1xuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gZ2FtZVJlYWR5UHJvbWlzZTtcbiAgICAgIH0pXG4gICAgcmV0dXJuIHByb21pc2U7XG4gIH1cblxuICBpbml0R2FtZURhdGFVcGRhdGVJbnRlcnZhbCgpIHtcbiAgICB0aGlzLnBsYXllcnMubG9vcFVwZGF0ZSgpO1xuICAgIHRoaXMuYmFsbC5sb29wVXBkYXRlKCk7XG4gIH1cblxuXG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdhbWVCdWlsZGVyKCkge1xuICBsZXQgZ2FtZSA9IGJvb3QoRW5naW5lLCBERUZBVUxULCB7fSwgZG9jdW1lbnQuYm9keSk7XG4gIGdhbWUucHJvbWlzZS50aGVuKChpbnN0YW5jZSkgPT4ge1xuICAgIGdhbWUuY29udHJvbGxlciA9IGluc3RhbmNlO1xuICB9KVxuICByZXR1cm4gZ2FtZTtcbn1cblxuIiwiaW1wb3J0IHsgcmFuZG9tV2l0aGluUmFuZ2UsIGNhbGNXYXlwb2ludHMgfSBmcm9tICcuL2Z1bmN0aW9uJztcbmltcG9ydCB7IGdldENhY2hlQ2FudmFzIH0gZnJvbSAnLi91dGlsJztcbmltcG9ydCB7IGRyYXdDaXJjbGUgfSBmcm9tICcuL3NoYXBlJztcbmltcG9ydCAncGF0aDJkLXBvbHlmaWxsJztcblxuZXhwb3J0IGNsYXNzIFN3aXJsOEJpdCB7XG4gIGNvbnN0cnVjdG9yKGN0eCkge1xuICAgIHRoaXMuY291bnRlckNsb2Nrd2lzZUFyciA9IFtcbiAgICAgIHsgbmFtZTogJ3RsJywgeDogMCwgeTogMCB9LFxuICAgICAgeyBuYW1lOiAnYmwnLCB4OiAwLCB5OiAxIH0sXG4gICAgICB7IG5hbWU6ICdicicsIHg6IDEsIHk6IDEgfSxcbiAgICAgIHsgbmFtZTogJ3RyJywgeDogMSwgeTogMCB9XG4gICAgXVxuICAgIHRoaXMuY2xvY2t3aXNlQXJyID0gW1xuICAgICAgeyBuYW1lOiAndHInLCB4OiAxLCB5OiAwIH0sXG4gICAgICB7IG5hbWU6ICdicicsIHg6IDEsIHk6IDEgfSxcbiAgICAgIHsgbmFtZTogJ2JsJywgeDogMCwgeTogMSB9LFxuICAgICAgeyBuYW1lOiAndGwnLCB4OiAwLCB5OiAwIH1cbiAgICBdXG4gICAgdGhpcy5jdHggPSBjdHg7XG4gICAgdGhpcy5jdnMgPSBjdHguY2FudmFzO1xuICAgIHRoaXMuYW5pbWF0aW9uRW5kVHJpZ2dlcjtcbiAgICB0aGlzLm9yZGVyID0gMDtcbiAgICB0aGlzLnBhdGggPSBuZXcgUGF0aDJEKCk7XG4gICAgdGhpcy5pbml0aWFsSW1hZ2UgPSBnZXRDYWNoZUNhbnZhcyh0aGlzLmN0eCk7XG4gICAgdGhpcy5iYW5kV2lkdGhTdGFjayA9IDA7XG4gIH1cbiAgZ2V0U3RhcnRMb2NhdGlvbihjbG9ja3dpc2UsIG9yZGVyLCB0b3RhbFdpZHRoLCB0b3RhbEhlaWdodCkge1xuICAgIGxldCBkaXJlY3Rpb25BcnIgPSBjbG9ja3dpc2UgPyB0aGlzLmNsb2Nrd2lzZUFyciA6IHRoaXMuY291bnRlckNsb2Nrd2lzZUFycjtcblxuICAgIGxldCBsb2NhdGlvbiA9IHtcbiAgICAgIG5hbWU6IGRpcmVjdGlvbkFycltvcmRlcl0ubmFtZSxcbiAgICAgIHg6IGRpcmVjdGlvbkFycltvcmRlcl0ueCAqIHRvdGFsV2lkdGggKyB0aGlzLmJhbmRXaWR0aFN0YWNrLFxuICAgICAgeTogZGlyZWN0aW9uQXJyW29yZGVyXS55ICogdG90YWxIZWlnaHQgKyB0aGlzLmJhbmRXaWR0aFN0YWNrXG4gICAgfVxuICAgIHJldHVybiBsb2NhdGlvbjtcbiAgfVxuICBhbmltYXRlKGNsb2Nrd2lzZSA9IGZhbHNlLCBiYW5kV2lkdGggPSAyMCwgY29sb3IgPSAncmdiYSgwLDAsMCwxKScpIHtcbiAgICBsZXQgYW5pbWF0aW9uUHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xuICAgICAgdGhpcy5hbmltYXRpb25FbmRUcmlnZ2VyID0gcmVzO1xuICAgIH0pXG4gICAgdGhpcy5kcmF3U3dpcmwoY2xvY2t3aXNlLCBiYW5kV2lkdGgsIGNvbG9yKTtcblxuICAgIHJldHVybiBhbmltYXRpb25Qcm9taXNlO1xuICB9XG5cbiAgZHJhd1N3aXJsKGNsb2Nrd2lzZSwgYmFuZFdpZHRoLCBjb2xvcikge1xuICAgIGxldCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHRoaXMucGF0aC5hZGRQYXRoKHRoaXMuZHJhV1JhbmRvbUFuZ2xlZEJhbmRQYXRoKFxuICAgICAgICBiYW5kV2lkdGgsXG4gICAgICAgIHRoaXMuY3ZzLndpZHRoIC0gMiAqIHRoaXMuYmFuZFdpZHRoU3RhY2ssXG4gICAgICAgIHRoaXMuY3ZzLmhlaWdodCAtIDIgKiB0aGlzLmJhbmRXaWR0aFN0YWNrLFxuICAgICAgICB0aGlzLmdldFN0YXJ0TG9jYXRpb24oY2xvY2t3aXNlLCB0aGlzLm9yZGVyLCB0aGlzLmN2cy53aWR0aCAtIDIgKiB0aGlzLmJhbmRXaWR0aFN0YWNrLCB0aGlzLmN2cy5oZWlnaHQgLSAyICogdGhpcy5iYW5kV2lkdGhTdGFjayksXG4gICAgICAgIGNvbG9yLFxuICAgICAgICBjbG9ja3dpc2VcbiAgICAgICkpXG4gICAgICB0aGlzLmN0eC5maWxsKHRoaXMucGF0aCk7XG4gICAgICBpZiAodGhpcy5jdnMud2lkdGggLSAyICogdGhpcy5iYW5kV2lkdGhTdGFjayA+IDAgJiYgdGhpcy5jdnMuaGVpZ2h0IC0gMiAqIHRoaXMuYmFuZFdpZHRoU3RhY2sgPiAwKSB7XG5cbiAgICAgICAgaWYgKHRoaXMub3JkZXIgPCAzKSB7XG4gICAgICAgICAgdGhpcy5vcmRlcisrXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdGhpcy5vcmRlciA9IDA7XG4gICAgICAgICAgdGhpcy5iYW5kV2lkdGhTdGFjayArPSBiYW5kV2lkdGg7XG5cbiAgICAgICAgfVxuXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uRW5kVHJpZ2dlcigpO1xuICAgICAgfVxuXG4gICAgfSwgMzApXG4gIH1cblxuICBkcmFXUmFuZG9tQW5nbGVkQmFuZFBhdGgoYmFuZFdpZHRoLCB3aWR0aCwgaGVpZ2h0LCBwb2ludCwgY29sb3IsIGNsb2Nrd2lzZSkge1xuICAgIGxldCBwYXRoID0gbmV3IFBhdGgyRCgpO1xuICAgIGlmIChwb2ludC5uYW1lID09PSAndGwnKSB7XG4gICAgICB0aGlzLmRyYXdBbmdsZWRCYW5kRnJvbVRMKHBhdGgsIGJhbmRXaWR0aCwgd2lkdGgsIGhlaWdodCwgcG9pbnQsIGNsb2Nrd2lzZSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHBvaW50Lm5hbWUgPT09ICdibCcpIHtcbiAgICAgIHRoaXMuZHJhd0FuZ2xlZEJhbmRGcm9tQkwocGF0aCwgYmFuZFdpZHRoLCB3aWR0aCwgaGVpZ2h0LCBwb2ludCwgY2xvY2t3aXNlKTtcbiAgICB9XG4gICAgZWxzZSBpZiAocG9pbnQubmFtZSA9PT0gJ2JyJykge1xuICAgICAgdGhpcy5kcmF3QW5nbGVkQmFuZEZyb21CUihwYXRoLCBiYW5kV2lkdGgsIHdpZHRoLCBoZWlnaHQsIHBvaW50LCBjbG9ja3dpc2UpO1xuICAgIH1cbiAgICBlbHNlIGlmIChwb2ludC5uYW1lID09PSAndHInKSB7XG4gICAgICB0aGlzLmRyYXdBbmdsZWRCYW5kRnJvbVRSKHBhdGgsIGJhbmRXaWR0aCwgd2lkdGgsIGhlaWdodCwgcG9pbnQsIGNsb2Nrd2lzZSk7XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xuICB9XG4gIGRyYXdBbmdsZWRCYW5kRnJvbVRMKHBhdGgsIGJhbmRXaWR0aCwgd2lkdGgsIGhlaWdodCwgcG9pbnQsIGNsb2Nrd2lzZSkge1xuICAgIHBhdGgubW92ZVRvKHBvaW50LngsIHBvaW50LnkpO1xuICAgIGlmIChjbG9ja3dpc2UpIHtcbiAgICAgIGxldCByYW5kb21IZWlnaHQgPSByYW5kb21XaXRoaW5SYW5nZSgwLjUgKiBoZWlnaHQsIDAuOSAqIGhlaWdodCk7XG4gICAgICBwYXRoLmxpbmVUbyhwb2ludC54ICsgd2lkdGgsIHBvaW50LnkpO1xuICAgICAgcGF0aC5saW5lVG8ocG9pbnQueCArIHdpZHRoLCBwb2ludC55ICsgcmFuZG9tSGVpZ2h0KTtcbiAgICAgIHBhdGgubGluZVRvKHBvaW50LnggKyB3aWR0aCAtIGJhbmRXaWR0aCwgcG9pbnQueSArIHJhbmRvbUhlaWdodCk7XG4gICAgICBwYXRoLmxpbmVUbyhwb2ludC54ICsgd2lkdGggLSBiYW5kV2lkdGgsIHBvaW50LnkgKyBiYW5kV2lkdGgpO1xuICAgICAgcGF0aC5saW5lVG8ocG9pbnQueCwgcG9pbnQueSArIGJhbmRXaWR0aCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgbGV0IHJhbmRvbVdpZHRoID0gcmFuZG9tV2l0aGluUmFuZ2UoMC41ICogd2lkdGgsIDAuOSAqIHdpZHRoKTtcbiAgICAgIHBhdGgubGluZVRvKHBvaW50LnggKyBiYW5kV2lkdGgsIHBvaW50LnkpO1xuICAgICAgcGF0aC5saW5lVG8ocG9pbnQueCArIGJhbmRXaWR0aCwgcG9pbnQueSArIGhlaWdodCAtIGJhbmRXaWR0aCk7XG4gICAgICBwYXRoLmxpbmVUbyhwb2ludC54ICsgcmFuZG9tV2lkdGgsIHBvaW50LnkgKyBoZWlnaHQgLSBiYW5kV2lkdGgpO1xuICAgICAgcGF0aC5saW5lVG8ocG9pbnQueCArIHJhbmRvbVdpZHRoLCBwb2ludC55ICsgaGVpZ2h0KTtcbiAgICAgIHBhdGgubGluZVRvKHBvaW50LngsIHBvaW50LnkgKyBoZWlnaHQpO1xuICAgIH1cbiAgfVxuICBkcmF3QW5nbGVkQmFuZEZyb21CTChwYXRoLCBiYW5kV2lkdGgsIHdpZHRoLCBoZWlnaHQsIHBvaW50LCBjbG9ja3dpc2UpIHtcbiAgICBwYXRoLm1vdmVUbyhwb2ludC54LCBwb2ludC55KTtcbiAgICBpZiAoY2xvY2t3aXNlKSB7XG4gICAgICBsZXQgcmFuZG9tV2lkdGggPSByYW5kb21XaXRoaW5SYW5nZSgwLjUgKiB3aWR0aCwgMC45ICogd2lkdGgpO1xuICAgICAgcGF0aC5saW5lVG8ocG9pbnQueCArIGJhbmRXaWR0aCwgcG9pbnQueSk7XG4gICAgICBwYXRoLmxpbmVUbyhwb2ludC54ICsgYmFuZFdpZHRoLCBwb2ludC55IC0gaGVpZ2h0ICsgYmFuZFdpZHRoKTtcbiAgICAgIHBhdGgubGluZVRvKHBvaW50LnggKyByYW5kb21XaWR0aCwgcG9pbnQueSAtIGhlaWdodCArIGJhbmRXaWR0aCk7XG4gICAgICBwYXRoLmxpbmVUbyhwb2ludC54ICsgcmFuZG9tV2lkdGgsIHBvaW50LnkgLSBoZWlnaHQpO1xuICAgICAgcGF0aC5saW5lVG8ocG9pbnQueCwgcG9pbnQueSAtIGhlaWdodCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgbGV0IHJhbmRvbUhlaWdodCA9IHJhbmRvbVdpdGhpblJhbmdlKDAuNSAqIGhlaWdodCwgMC45ICogaGVpZ2h0KTtcbiAgICAgIHBhdGgubGluZVRvKHBvaW50LngsIHBvaW50LnkgLSBiYW5kV2lkdGgpO1xuICAgICAgcGF0aC5saW5lVG8ocG9pbnQueCArIHdpZHRoIC0gYmFuZFdpZHRoLCBwb2ludC55IC0gYmFuZFdpZHRoKTtcbiAgICAgIHBhdGgubGluZVRvKHBvaW50LnggKyB3aWR0aCAtIGJhbmRXaWR0aCwgcG9pbnQueSAtIHJhbmRvbUhlaWdodCk7XG4gICAgICBwYXRoLmxpbmVUbyhwb2ludC54ICsgd2lkdGgsIHBvaW50LnkgLSByYW5kb21IZWlnaHQpO1xuICAgICAgcGF0aC5saW5lVG8ocG9pbnQueCArIHdpZHRoLCBwb2ludC55KTtcbiAgICB9XG4gIH1cbiAgZHJhd0FuZ2xlZEJhbmRGcm9tQlIocGF0aCwgYmFuZFdpZHRoLCB3aWR0aCwgaGVpZ2h0LCBwb2ludCwgY2xvY2t3aXNlKSB7XG4gICAgcGF0aC5tb3ZlVG8ocG9pbnQueCwgcG9pbnQueSk7XG4gICAgaWYgKGNsb2Nrd2lzZSkge1xuICAgICAgbGV0IHJhbmRvbUhlaWdodCA9IHJhbmRvbVdpdGhpblJhbmdlKDAuNSAqIGhlaWdodCwgMC45ICogaGVpZ2h0KTtcbiAgICAgIHBhdGgubGluZVRvKHBvaW50LngsIHBvaW50LnkgLSBiYW5kV2lkdGgpO1xuICAgICAgcGF0aC5saW5lVG8ocG9pbnQueCAtIHdpZHRoICsgYmFuZFdpZHRoLCBwb2ludC55IC0gYmFuZFdpZHRoKTtcbiAgICAgIHBhdGgubGluZVRvKHBvaW50LnggLSB3aWR0aCArIGJhbmRXaWR0aCwgcG9pbnQueSAtIHJhbmRvbUhlaWdodCk7XG4gICAgICBwYXRoLmxpbmVUbyhwb2ludC54IC0gd2lkdGgsIHBvaW50LnkgLSByYW5kb21IZWlnaHQpO1xuICAgICAgcGF0aC5saW5lVG8ocG9pbnQueCAtIHdpZHRoLCBwb2ludC55KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBsZXQgcmFuZG9tV2lkdGggPSByYW5kb21XaXRoaW5SYW5nZSgwLjUgKiB3aWR0aCwgMC45ICogd2lkdGgpO1xuICAgICAgcGF0aC5saW5lVG8ocG9pbnQueCAtIGJhbmRXaWR0aCwgcG9pbnQueSk7XG4gICAgICBwYXRoLmxpbmVUbyhwb2ludC54IC0gYmFuZFdpZHRoLCBwb2ludC55IC0gaGVpZ2h0ICsgYmFuZFdpZHRoKTtcbiAgICAgIHBhdGgubGluZVRvKHBvaW50LnggLSByYW5kb21XaWR0aCwgcG9pbnQueSAtIGhlaWdodCArIGJhbmRXaWR0aCk7XG4gICAgICBwYXRoLmxpbmVUbyhwb2ludC54IC0gcmFuZG9tV2lkdGgsIHBvaW50LnkgLSBoZWlnaHQpO1xuICAgICAgcGF0aC5saW5lVG8ocG9pbnQueCwgcG9pbnQueSAtIGhlaWdodCk7XG4gICAgfVxuICB9XG4gIGRyYXdBbmdsZWRCYW5kRnJvbVRSKHBhdGgsIGJhbmRXaWR0aCwgd2lkdGgsIGhlaWdodCwgcG9pbnQsIGNsb2Nrd2lzZSkge1xuICAgIHBhdGgubW92ZVRvKHBvaW50LngsIHBvaW50LnkpO1xuICAgIGlmIChjbG9ja3dpc2UpIHtcbiAgICAgIGxldCByYW5kb21XaWR0aCA9IHJhbmRvbVdpdGhpblJhbmdlKDAuNSAqIHdpZHRoLCAwLjkgKiB3aWR0aCk7XG4gICAgICBwYXRoLmxpbmVUbyhwb2ludC54IC0gYmFuZFdpZHRoLCBwb2ludC55KTtcbiAgICAgIHBhdGgubGluZVRvKHBvaW50LnggLSBiYW5kV2lkdGgsIHBvaW50LnkgKyBoZWlnaHQgLSBiYW5kV2lkdGgpO1xuICAgICAgcGF0aC5saW5lVG8ocG9pbnQueCAtIHJhbmRvbVdpZHRoLCBwb2ludC55ICsgaGVpZ2h0IC0gYmFuZFdpZHRoKTtcbiAgICAgIHBhdGgubGluZVRvKHBvaW50LnggLSByYW5kb21XaWR0aCwgcG9pbnQueSArIGhlaWdodCk7XG4gICAgICBwYXRoLmxpbmVUbyhwb2ludC54LCBwb2ludC55ICsgaGVpZ2h0KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBsZXQgcmFuZG9tSGVpZ2h0ID0gcmFuZG9tV2l0aGluUmFuZ2UoMC41ICogaGVpZ2h0LCAwLjkgKiBoZWlnaHQpO1xuICAgICAgcGF0aC5saW5lVG8ocG9pbnQueCwgcG9pbnQueSArIGJhbmRXaWR0aCk7XG4gICAgICBwYXRoLmxpbmVUbyhwb2ludC54IC0gd2lkdGggKyBiYW5kV2lkdGgsIHBvaW50LnkgKyBiYW5kV2lkdGgpO1xuICAgICAgcGF0aC5saW5lVG8ocG9pbnQueCAtIHdpZHRoICsgYmFuZFdpZHRoLCBwb2ludC55ICsgcmFuZG9tSGVpZ2h0KTtcbiAgICAgIHBhdGgubGluZVRvKHBvaW50LnggLSB3aWR0aCwgcG9pbnQueSArIHJhbmRvbUhlaWdodCk7XG4gICAgICBwYXRoLmxpbmVUbyhwb2ludC54IC0gd2lkdGgsIHBvaW50LnkpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU3Ryb2tlQW5pbWF0aW9uIHtcbiAgY29uc3RydWN0b3IoY3R4LCB2ZXJ0aWNlcykge1xuICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgIHRoaXMud2F5cG9pbnRzID0gY2FsY1dheXBvaW50cyh2ZXJ0aWNlcyk7XG4gIH1cblxuICBhbmltYXRlKGJhbmRXaWR0aCA9IDIwLCBjb2xvciA9ICdyZ2JhKDI1NSwyNTUsMjU1LDEpJywgZmxpY2tlciA9IHRydWUsIGRhc2ggPSBbXSwgZ2xvd2luZyA9ICd3aGl0ZScsIGdsb3dpbmdTaXplID0gNDApIHtcbiAgICBsZXQgYW5pbWF0aW9uUHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xuICAgICAgdGhpcy5hbmltYXRpb25FbmRUcmlnZ2VyID0gcmVzO1xuICAgICAgdGhpcy5sb29waW5nRHJhd1N0cm9rZShiYW5kV2lkdGgsIGNvbG9yLCBmbGlja2VyLCBkYXNoLCBnbG93aW5nLCBnbG93aW5nU2l6ZSwpO1xuICAgIH0pXG5cbiAgICByZXR1cm4gYW5pbWF0aW9uUHJvbWlzZTtcbiAgfVxuXG4gIGxvb3BpbmdEcmF3U3Ryb2tlKGJhbmRXaWR0aCwgY29sb3IsIGZsaWNrZXIsIGRhc2gsIGdsb3dpbmcsIGdsb3dpbmdTaXplLCBmcHMgPSA2MCkge1xuICAgIGxldCBjb3VudGVyID0gMDtcbiAgICBsZXQgJHRoaXMgPSB0aGlzO1xuICAgIHRoaXMuY3R4LnNhdmUoKTtcbiAgICB0aGlzLmN0eC5saW5lQ2FwID0gJ3NxdWFyZSdcbiAgICBpZiAoZGFzaC5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmN0eC5zZXRMaW5lRGFzaChkYXNoKTtcbiAgICB9XG4gICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSBjb2xvcjtcbiAgICB0aGlzLmN0eC5saW5lV2lkdGggPSBiYW5kV2lkdGg7XG4gICAgdGhpcy5jdHguc2hhZG93Q29sb3IgPSBnbG93aW5nO1xuICAgIHRoaXMuY3R4LnNoYWRvd0JsdXIgPSBnbG93aW5nU2l6ZTtcbiAgICBsZXQgZmxpY2tlclJhbmdlID0gMDtcblxuICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgIGxldCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGlmIChjb3VudGVyIDwgJHRoaXMud2F5cG9pbnRzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgJHRoaXMuY3R4Lm1vdmVUbygkdGhpcy53YXlwb2ludHNbY291bnRlcl0ueCwgJHRoaXMud2F5cG9pbnRzW2NvdW50ZXJdLnkpO1xuICAgICAgICAkdGhpcy5jdHgubGluZVRvKCR0aGlzLndheXBvaW50c1tjb3VudGVyICsgMV0ueCwgJHRoaXMud2F5cG9pbnRzW2NvdW50ZXIgKyAxXS55KTtcbiAgICAgICAgaWYgKGZsaWNrZXIpIHtcbiAgICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jdHguY2FudmFzLndpZHRoLCB0aGlzLmN0eC5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICB0aGlzLmN0eC5nbG9iYWxBbHBoYSA9IHJhbmRvbVdpdGhpblJhbmdlKGZsaWNrZXJSYW5nZSwgMSk7XG4gICAgICAgICAgZmxpY2tlclJhbmdlICs9IChmcHMgLyAxMDAwMCk7XG4gICAgICAgIH1cbiAgICAgICAgJHRoaXMuY3R4LnN0cm9rZSgpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAkdGhpcy5jdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICR0aGlzLmN0eC5yZXN0b3JlKCk7XG4gICAgICAgICR0aGlzLmFuaW1hdGlvbkVuZFRyaWdnZXIoKTtcbiAgICAgIH1cbiAgICAgIGNvdW50ZXIrKztcbiAgICB9LCAxMDAwIC8gZnBzKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTdGFyU2t5IHtcbiAgY29uc3RydWN0b3IoY3R4KSB7XG4gICAgdGhpcy5jdHggPSBjdHg7XG4gICAgdGhpcy5jdnMgPSBjdHguY2FudmFzO1xuICAgIHRoaXMuc3RhcnMgPSBbXTtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuICBpbml0KCkge1xuICAgIHRoaXMuZ2VuU3RhcnMoKTtcblxuICB9XG4gIGdlblN0YXJzKG51bWJlciA9IDEwMCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtYmVyOyBpKyspIHtcbiAgICAgIGxldCBzdGFyID0ge1xuICAgICAgICB4OiByYW5kb21XaXRoaW5SYW5nZSgwLCB0aGlzLmN2cy53aWR0aCksXG4gICAgICAgIHk6IHJhbmRvbVdpdGhpblJhbmdlKDAsIHRoaXMuY3ZzLmhlaWdodCksXG4gICAgICAgIGNvbG9yOiBgcmdiYSgyNTUsMjU1LDI1NSwke3JhbmRvbVdpdGhpblJhbmdlKDAuMjUsIDEpfSlgLFxuICAgICAgICBzaXplOiByYW5kb21XaXRoaW5SYW5nZSgyLCA1KSxcbiAgICAgICAgdHdpbmtsZTogKCkgPT4ge1xuICAgICAgICAgIHN0YXIuY29sb3IgPSBgcmdiYSgyNTUsMjU1LDI1NSwke3JhbmRvbVdpdGhpblJhbmdlKDAuMjUsIDEpfSlgO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLnN0YXJzLnB1c2goc3Rhcik7XG4gICAgfVxuICB9XG4gIHJlZnJlc2hTdGFycygpIHtcbiAgICB0aGlzLnN0YXJzLmxlbmd0aCA9IDA7XG4gICAgdGhpcy5nZW5TdGFycygpO1xuICB9XG4gIGFuaW1hdGUoKSB7XG4gICAgbGV0IGRyYXcgPSAoKSA9PiB7XG4gICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jdnMud2lkdGgsIHRoaXMuY3ZzLmhlaWdodCk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3RhcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy5zdGFyc1tpXS50d2lua2xlKCk7XG4gICAgICAgIGRyYXdDaXJjbGUodGhpcy5jdHgsIHRoaXMuc3RhcnNbaV0ueCwgdGhpcy5zdGFyc1tpXS55LCB0aGlzLnN0YXJzW2ldLnNpemUsIHRoaXMuc3RhcnNbaV0uY29sb3IpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHNldEludGVydmFsKGRyYXcsIDUwMCk7XG4gIH1cbn0iLCJpbXBvcnQgeyBkZWJvdW5jZSwgaXMsIHBvaW50ZXJFdmVudFRvWFkgfSBmcm9tICcuL2Z1bmN0aW9uJztcblxuXG5leHBvcnQgY2xhc3MgQ2FudmFzMkRGeEJhc2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBlbGUsIGNvbmZpZyA9IHt9LCBkZWZhdWx0Q29uZmlnID0ge30sIHZpcnR1YWxQYXJlbnRcbiAgKSB7XG4gICAgY29uZmlnID0gaXMub2JqKGNvbmZpZykgPyBjb25maWcgOiB7fTtcbiAgICBkZWZhdWx0Q29uZmlnID0gaXMub2JqKGRlZmF1bHRDb25maWcpID8gZGVmYXVsdENvbmZpZyA6IHt9O1xuICAgIHRoaXMuY29uZmlnID0gT2JqZWN0LmFzc2lnbihkZWZhdWx0Q29uZmlnLCBjb25maWcpO1xuICAgIHRoaXMuZWxlID0gZWxlO1xuICAgIHRoaXMuZnJhbWVDb3VudCA9IDA7XG4gICAgdGhpcy5tb3VzZSA9IHtcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwXG4gICAgfTtcbiAgICB0aGlzLnZpcnR1YWxQYXJlbnQgPSB2aXJ0dWFsUGFyZW50O1xuICAgIHRoaXMuY3R4ID0gbnVsbDtcbiAgICB0aGlzLmZyYW1lSXNQYXVzZWQgPSBmYWxzZTtcbiAgICB0aGlzLmlzQ2xpY2sgPSBmYWxzZTtcbiAgICB0aGlzLmxheWVyc0NvbnRhaW5lciA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmRpdkxheWVyc0NvbnRhaW5lciA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmNhbnZhc1NpemVmaXhlZCA9IGZhbHNlO1xuICAgIHRoaXMucHJldmlvdXNGcmFtZVRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICB0aGlzLmlzUmVzaXppbmcgPSBmYWxzZTtcbiAgICB0aGlzLmxheWVycyA9IFtdO1xuICAgIHRoaXMuZGl2TGF5ZXJzID0gW107XG4gICAgdGhpcy5pc1Jlc2l6aW5nQ2FsbGJhY2sgPSAoKSA9PiB7IH07XG4gICAgdGhpcy5yZXNpemVkQ2FsbGJhY2sgPSAoKSA9PiB7IH07XG4gICAgdGhpcy5pbml0QmFzZSgpO1xuICB9XG4gIGluaXRCYXNlKCkge1xuXG4gICAgaWYgKHRoaXMuZWxlLnRhZ05hbWUgIT09ICdDQU5WQVMnKSB7XG4gICAgICBjb25zdCBjdnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgIHRoaXMuY3ZzID0gY3ZzO1xuICAgICAgdGhpcy5sYXllcnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRoaXMubGF5ZXJzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2xheWVycy1jb250YWluZXInKTtcbiAgICAgIHRoaXMubGF5ZXJzQ29udGFpbmVyLnN0eWxlLmZvbnRTaXplID0gMDtcbiAgICAgIHRoaXMubGF5ZXJzQ29udGFpbmVyLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgIHRoaXMubGF5ZXJzQ29udGFpbmVyLnN0eWxlLndpZHRoID0gJzEwMCUnXG4gICAgICB0aGlzLmxheWVyc0NvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSAnMTAwJSc7XG4gICAgICB0aGlzLmxheWVyc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjdnMpO1xuICAgICAgdGhpcy5kaXZMYXllckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGhpcy5kaXZMYXllckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdkaXYtbGF5ZXJzLWNvbnRhaW5lcicpO1xuICAgICAgdGhpcy5kaXZMYXllckNvbnRhaW5lci5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICB0aGlzLmRpdkxheWVyQ29udGFpbmVyLnN0eWxlLndpZHRoID0gJzEwMCUnXG4gICAgICB0aGlzLmRpdkxheWVyQ29udGFpbmVyLnN0eWxlLmhlaWdodCA9ICcxMDAlJztcbiAgICAgIHRoaXMuc3Vycm91bmRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRoaXMuc3Vycm91bmRpbmcuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgdGhpcy5zdXJyb3VuZGluZy5zdHlsZS53aWR0aCA9ICcxMDAlJ1xuICAgICAgdGhpcy5zdXJyb3VuZGluZy5zdHlsZS5oZWlnaHQgPSAnMTAwJSc7XG4gICAgICB0aGlzLnN1cnJvdW5kaW5nLmNsYXNzTGlzdC5hZGQoJ3JlbmRlci1lbnZfX3N1cnJvdW5kaW5nJylcbiAgICAgIHRoaXMuc3Vycm91bmRpbmcuYXBwZW5kQ2hpbGQodGhpcy5sYXllcnNDb250YWluZXIpO1xuICAgICAgdGhpcy5zdXJyb3VuZGluZy5pbnNlcnRCZWZvcmUodGhpcy5kaXZMYXllckNvbnRhaW5lciwgdGhpcy5sYXllcnNDb250YWluZXIpO1xuICAgICAgdGhpcy5lbGUuYXBwZW5kKHRoaXMuc3Vycm91bmRpbmcpO1xuICAgICAgdGhpcy5lbGUuY2xhc3NMaXN0LmFkZCgncmVuZGVyLWVudicpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuY3ZzID0gdGhpcy5lbGU7XG4gICAgfVxuXG4gICAgdGhpcy5jdHggPSB0aGlzLmN2cy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIHRoaXMudHJpZ2dlclJlc2l6aW5nTWVjaGFuaXNtKCk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgICAgdGhpcy5pc1Jlc2l6aW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuaXNSZXNpemluZ0NhbGxiYWNrKCk7XG4gICAgfSk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZGVib3VuY2UoKCkgPT4ge1xuICAgICAgdGhpcy5pc1Jlc2l6aW5nID0gZmFsc2U7XG4gICAgICB0aGlzLnRyaWdnZXJSZXNpemluZ01lY2hhbmlzbSgpO1xuICAgICAgdGhpcy5yZXNpemVkQ2FsbGJhY2soKTtcbiAgICB9LCA1MDApKTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd2aXNpYmlsaXR5Y2hhbmdlJywgKCkgPT4ge1xuICAgICAgaWYgKGRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZSAhPT0gXCJ2aXNpYmxlXCIpIHtcbiAgICAgICAgdGhpcy5mcmFtZUlzUGF1c2VkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuYWRkRXZlbnRIYW5kbGVyKCk7XG5cbiAgICB0aGlzLnJlZnJlc2hCYXNlRnJhbWVDb3VudGVyKCk7XG5cbiAgfVxuXG4gIHVwZGF0ZVBvc2l0aW9uT3B0aW9uU2V0dGluZygpIHtcblxuICB9XG5cbiAgcmVmcmVzaEJhc2VGcmFtZUNvdW50ZXIoKSB7XG4gICAgbGV0IHRoaXNGcmFtZVRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICB0aGlzLnRpbWVFbGFwc2VkID0gKHRoaXNGcmFtZVRpbWUgLSB0aGlzLnByZXZpb3VzRnJhbWVUaW1lKSAvIDEwMDA7XG4gICAgaWYgKHRoaXMuZnJhbWVJc1BhdXNlZCkge1xuICAgICAgdGhpcy50aW1lRWxhcHNlZCA9IDA7XG4gICAgICB0aGlzLmZyYW1lSXNQYXVzZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5mcmFtZUNvdW50ICs9IDE7XG4gICAgdGhpcy5wcmV2aW91c0ZyYW1lVGltZSA9IHRoaXNGcmFtZVRpbWVcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgdGhpcy5yZWZyZXNoQmFzZUZyYW1lQ291bnRlcigpO1xuICAgIH0pXG4gIH1cblxuICB2aXJ0dWFsUGFyZW50VmFsaWRhdGlvbigpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuYm9keS5jb250YWlucyh0aGlzLnZpcnR1YWxQYXJlbnQpIHx8IHRoaXMudmlydHVhbFBhcmVudCA9PT0gZG9jdW1lbnQuYm9keTtcbiAgfVxuXG4gIHRyaWdnZXJSZXNpemluZ01lY2hhbmlzbSgpIHtcbiAgICBpZiAodGhpcy5jYW52YXNTaXplZml4ZWQpIHJldHVybjtcblxuICAgIGlmICh0aGlzLmVsZS50YWdOYW1lICE9PSAnQ0FOVkFTJykge1xuICAgICAgbGV0IGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQ7XG4gICAgICBpZiAodGhpcy52aXJ0dWFsUGFyZW50VmFsaWRhdGlvbigpKSB7XG4gICAgICAgIGNhbnZhc1dpZHRoID0gdGhpcy52aXJ0dWFsUGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICAgICAgICBjYW52YXNIZWlnaHQgPSB0aGlzLnZpcnR1YWxQYXJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNhbnZhc1dpZHRoID0gdGhpcy5lbGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gICAgICAgIGNhbnZhc0hlaWdodCA9IHRoaXMuZWxlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcbiAgICAgIH1cblxuICAgICAgdGhpcy5jdnMud2lkdGggPSBjYW52YXNXaWR0aDtcbiAgICAgIHRoaXMuY3ZzLmhlaWdodCA9IGNhbnZhc0hlaWdodDtcblxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGxldCBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0O1xuICAgICAgaWYgKHRoaXMudmlydHVhbFBhcmVudFZhbGlkYXRpb24oKSkge1xuICAgICAgICBjYW52YXNXaWR0aCA9IHRoaXMudmlydHVhbFBhcmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcbiAgICAgICAgY2FudmFzSGVpZ2h0ID0gdGhpcy52aXJ0dWFsUGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjYW52YXNXaWR0aCA9IHRoaXMuY3ZzLnBhcmVudEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gICAgICAgIGNhbnZhc0hlaWdodCA9IHRoaXMuY3ZzLnBhcmVudEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuICAgICAgfVxuICAgICAgdGhpcy5jdnMud2lkdGggPSBjYW52YXNXaWR0aDtcbiAgICAgIHRoaXMuY3ZzLmhlaWdodCA9IGNhbnZhc0hlaWdodDtcblxuICAgIH1cblxuICB9XG5cbiAgc2V0Q2FudmFzU2l6ZSh3aWR0aCwgaGVpZ2h0KSB7XG4gICAgdGhpcy5jYW52YXNTaXplZml4ZWQgPSB0cnVlO1xuICAgIHRoaXMuY3ZzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5jdnMuaGVpZ2h0ID0gaGVpZ2h0O1xuICB9XG5cbiAgYmFja2dyb3VuZChjb2xvcikge1xuICAgIHRoaXMuY3R4LnNhdmUoKTtcbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICB0aGlzLmN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLmN2cy53aWR0aCwgdGhpcy5jdnMuaGVpZ2h0KTtcbiAgICB0aGlzLmN0eC5yZXN0b3JlKCk7XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jdnMud2lkdGgsIHRoaXMuY3ZzLmhlaWdodCk7XG4gIH1cblxuICBhZGRFdmVudEhhbmRsZXIoKSB7XG5cbiAgICB0aGlzLmN2cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMuaXNDbGljayA9IHRydWU7XG4gICAgfSlcbiAgICB0aGlzLmN2cy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgKCkgPT4ge1xuICAgICAgdGhpcy5pc0NsaWNrID0gdHJ1ZTtcblxuICAgIH0pXG5cbiAgICB0aGlzLmN2cy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZSkgPT4ge1xuICAgICAgbGV0IHBvcyA9IHBvaW50ZXJFdmVudFRvWFkoZSk7XG4gICAgICB0aGlzLm1vdXNlID0ge1xuICAgICAgICB4OiBwb3MueCxcbiAgICAgICAgeTogcG9zLnlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5jdnMuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgKGUpID0+IHtcbiAgICAgIGxldCBwb3MgPSBwb2ludGVyRXZlbnRUb1hZKGUpO1xuICAgICAgdGhpcy5tb3VzZSA9IHtcbiAgICAgICAgeDogcG9zLngsXG4gICAgICAgIHk6IHBvcy55XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGNyZWF0ZVZpcnR1YWxDYW52YXNCYXNlSW5zdGFuY2UoKSB7XG4gICAgbGV0IHZjdnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICBsZXQgdmN2c0luc3RhbmNlID0gbmV3IENhbnZhczJERnhCYXNlKHZjdnMsIHt9LCB7fSwgdGhpcy5lbGUpO1xuICAgIHJldHVybiB2Y3ZzSW5zdGFuY2U7XG4gIH1cblxuICBhZGROZXdMYXllcigpIHtcbiAgICBpZiAodGhpcy5lbGUudGFnTmFtZSA9PT0gJ0NBTlZBUycpIHJldHVybiBuZXcgVHlwZUVycm9yKGDmlrDlop7lnJblsaTmlrnms5Xlj6rmlK/mj7Tku6XnqbpkaXblrrnlmajliJ3lp4vljJbnmoTmuLLmn5PnkrDlooNgKTtcbiAgICBsZXQgY3ZzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgY3ZzLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICB0aGlzLmxheWVyc0NvbnRhaW5lci5wcmVwZW5kKGN2cyk7XG4gICAgbGV0IGN2c0luc3RhbmNlID0gbmV3IENhbnZhczJERnhCYXNlKGN2cywge30sIHt9LCB0aGlzLmVsZSk7XG4gICAgdGhpcy5sYXllcnMucHVzaChjdnNJbnN0YW5jZSk7XG4gICAgcmV0dXJuIGN2c0luc3RhbmNlO1xuICB9XG5cbiAgYWRkRGl2TGF5ZXIoaWQsIGNsYXNzTmFtZSkge1xuICAgIGlmICh0aGlzLmVsZS50YWdOYW1lID09PSAnQ0FOVkFTJykgcmV0dXJuIG5ldyBUeXBlRXJyb3IoYOaWsOWinuWcluWxpOaWueazleWPquaUr+aPtOS7peepumRpduWuueWZqOWIneWni+WMlueahOa4suafk+eSsOWig2ApO1xuICAgIGxldCBkaXZMYXllciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGlmICghIWNsYXNzTmFtZSkge1xuICAgICAgZGl2TGF5ZXIuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIH1cbiAgICBpZiAoISFpZCkge1xuICAgICAgZGl2TGF5ZXIuaWQgPSBpZDtcbiAgICB9XG4gICAgZGl2TGF5ZXIuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgIGRpdkxheWVyLnN0eWxlLndpZHRoID0gJzEwMCUnO1xuICAgIGRpdkxheWVyLnN0eWxlLmhlaWdodCA9ICcxMDAlJztcbiAgICB0aGlzLmRpdkxheWVyQ29udGFpbmVyLnByZXBlbmQoZGl2TGF5ZXIpO1xuICAgIHRoaXMuZGl2TGF5ZXJzLnB1c2goZGl2TGF5ZXIpO1xuICAgIHJldHVybiBkaXZMYXllclxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib290KGN0b3IsIGRlZmF1bHRDb25maWcsIGNvbmZpZywgdGFyZ2V0RWxlLCB2aXJ0dWFsUGFyZW50KSB7XG4gIGxldCBjdnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyk7XG4gIGN2cyA9IGN2cyA/IGN2cyA6IGRvY3VtZW50LmJvZHk7XG4gIGxldCBlbGUgPSB0YXJnZXRFbGUgPyB0YXJnZXRFbGUgOiBjdnM7XG4gIGxldCB0cmlnZ2VyO1xuICBsZXQgYm9vdFByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcbiAgICB0cmlnZ2VyID0gKCkgPT4ge1xuICAgICAgbGV0IGluc3RhbmNlID0gbmV3IGN0b3IoZWxlLCBjb25maWcsIGRlZmF1bHRDb25maWcsIHZpcnR1YWxQYXJlbnQpO1xuICAgICAgcmVzKGluc3RhbmNlKTtcbiAgICB9O1xuICB9KTtcblxuICBsZXQgY29udHJvbGxlciA9IHtcbiAgICBwcm9taXNlOiBib290UHJvbWlzZSxcbiAgICB0cmlnZ2VyOiB0cmlnZ2VyLFxuICB9XG5cbiAgcmV0dXJuIGNvbnRyb2xsZXI7XG59IiwiZXhwb3J0IGZ1bmN0aW9uICQoc2VsZWN0b3IpIHtcbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlKHNlbGVjdG9yLCBzdGF0dXMpIHtcbiAgbGV0IHN0eWxlU3RyID0gc3RhdHVzID8gJ2Jsb2NrJyA6ICdub25lJ1xuICAkKHNlbGVjdG9yKS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgYGRpc3BsYXk6JHtzdHlsZVN0cn1gKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZUNsYXNzKHNlbGVjdG9yLCBjbGFzc25hbWUsIHN0YXR1cykge1xuICBsZXQgYWN0aW9uID0gc3RhdHVzID8gJ2FkZCcgOiAncmVtb3ZlJztcbiAgJChzZWxlY3RvcikuY2xhc3NMaXN0W2FjdGlvbl0oY2xhc3NuYW1lKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVtaXQoZXZlbnROYW1lKSB7XG4gIGxldCBzb21lRXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKTtcbiAgc29tZUV2ZW50LmluaXRFdmVudChldmVudE5hbWUsIHRydWUsIHRydWUpO1xuICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KHNvbWVFdmVudCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJlbnRzKG5vZGUsIHNlbGVjdG9yKSB7XG4gIGxldCBjdXJyZW50ID0gbm9kZSxcbiAgICBsaXN0ID0gW107XG4gIHdoaWxlIChjdXJyZW50LnBhcmVudE5vZGUgIT0gbnVsbCAmJiBjdXJyZW50LnBhcmVudE5vZGUgIT0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgbGlzdC5wdXNoKGN1cnJlbnQucGFyZW50Tm9kZSk7XG4gICAgY3VycmVudCA9IGN1cnJlbnQucGFyZW50Tm9kZTtcbiAgfVxuICByZXR1cm4gbGlzdC5maWx0ZXIoKG8sIGkpID0+IHtcbiAgICByZXR1cm4gby5tYXRjaGVzKHNlbGVjdG9yKVxuICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmFkZU91dChlbGUsIGR1cmF0aW9uLCBjYiA9ICgpID0+IHsgZWxlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7IH0pIHtcbiAgdmFyIGZhZGVUYXJnZXQgPSBlbGU7XG4gIHZhciBmYWRlRWZmZWN0ID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgIGlmICghZmFkZVRhcmdldC5zdHlsZS5vcGFjaXR5KSB7XG4gICAgICBmYWRlVGFyZ2V0LnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgIH1cbiAgICBpZiAoZmFkZVRhcmdldC5zdHlsZS5vcGFjaXR5ID4gMCkge1xuICAgICAgZmFkZVRhcmdldC5zdHlsZS5vcGFjaXR5IC09IDEgLyBkdXJhdGlvbjtcbiAgICB9IGVsc2Uge1xuICAgICAgY2xlYXJJbnRlcnZhbChmYWRlRWZmZWN0KTtcbiAgICAgIGNiKClcbiAgICAgIGVsZS5zdHlsZS5vcGFjaXR5ID0gJyc7XG5cbiAgICB9XG4gIH0sIDEgLyBkdXJhdGlvbik7XG59IiwiY29uc3QgTWVyc2VubmVUd2lzdGVyID0gcmVxdWlyZSgnbWVyc2VubmUtdHdpc3RlcicpO1xuY29uc3QgTVQgPSBuZXcgTWVyc2VubmVUd2lzdGVyKCk7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMsIGRlbGF5KSB7XG4gIGxldCB0aW1lciA9IG51bGw7XG4gIGNvbnN0ICR0aGlzID0gdGhpcztcbiAgcmV0dXJuICgpID0+IHtcbiAgICBjb25zdCBjb250ZXh0ID0gJHRoaXM7XG4gICAgY29uc3QgYXJncyA9IGFyZ3VtZW50cztcbiAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgIHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgIH0sIGRlbGF5KTtcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IGlzID0ge1xuICBhcnI6IGEgPT4gQXJyYXkuaXNBcnJheShhKSxcbiAgb2JqOiBhID0+IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhKS5pbmRleE9mKCdPYmplY3QnKSA+IC0xLFxuICBwdGg6IGEgPT4gaXMub2JqKGEpICYmIGEuaGFzT3duUHJvcGVydHkoJ3RvdGFsTGVuZ3RoJyksXG4gIHN2ZzogYSA9PiBhIGluc3RhbmNlb2YgU1ZHRWxlbWVudCxcbiAgaW5wOiBhID0+IGEgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50LFxuICBkb206IGEgPT4gYS5ub2RlVHlwZSB8fCBpcy5zdmcoYSksXG4gIHN0cjogYSA9PiB0eXBlb2YgYSA9PT0gJ3N0cmluZycsXG4gIGZuYzogYSA9PiB0eXBlb2YgYSA9PT0gJ2Z1bmN0aW9uJyxcbiAgdW5kOiBhID0+IHR5cGVvZiBhID09PSAndW5kZWZpbmVkJyxcbiAgbmlsOiBhID0+IGlzLnVuZChhKSB8fCBhID09PSBudWxsLFxuICBoZXg6IGEgPT4gLyheI1swLTlBLUZdezZ9JCl8KF4jWzAtOUEtRl17M30kKS9pLnRlc3QoYSksXG4gIHJnYmE6IGEgPT4gL15yZ2JhLy50ZXN0KGEpLFxuICByZ2I6IGEgPT4gL15yZ2IvLnRlc3QoYSksXG4gIGhzbDogYSA9PiAvXmhzbC8udGVzdChhKSxcbiAgY29sOiBhID0+IChpcy5oZXgoYSkgfHwgaXMucmdiKGEpIHx8IGlzLmhzbChhKSksXG4gIGtleTogYSA9PiAhZGVmYXVsdEluc3RhbmNlU2V0dGluZ3MuaGFzT3duUHJvcGVydHkoYSkgJiYgIWRlZmF1bHRUd2VlblNldHRpbmdzLmhhc093blByb3BlcnR5KGEpICYmIGEgIT09ICd0YXJnZXRzJyAmJiBhICE9PSAna2V5ZnJhbWVzJyxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbVdpdGhpblJhbmdlKG1pbiwgbWF4LCBzZWVkKSB7XG4gIHJldHVybiBNVC5yYW5kb20oc2VlZCkgKiAobWF4IC0gbWluKSArIG1pbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3RhbmNlKHgwLCB5MCwgeDEsIHkxKSB7XG4gIHJldHVybiBNYXRoLnNxcnQoKHgxIC0geDApICogKHgxIC0geDApICsgKHkxIC0geTApICogKHkxIC0geTApKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZ3JlZVRvUmFkaWFuKGRlZ3JlZSkge1xuICByZXR1cm4gKGRlZ3JlZSAvIDE4MCkgKiBNYXRoLlBJO1xufVxuXG4vKipcbiAqIOe1seS4gCB0b3VjaEV2ZW50L21vdXNlRXZlbnQg55qE5LqL5Lu26Ke455m85bqn5qiZ5Y+W5b6X5pa55byPXG4gKiBAZXhwb3J0XG4gKiBAcGFyYW0ge29iamVjdH0gIOWCs+WFpeeahGV2ZW50IOeJqeS7tlxuICogQHJldHVybnMge09iamVjdH0g5LiA5YCL54mp5Lu2LCDlhaflkKvkuovku7bop7jnmbzluqfmqJnnmoRYL1kg5bqn5qiZ5YC8XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwb2ludGVyRXZlbnRUb1hZKGUpIHtcbiAgdmFyIG91dCA9IHsgeDogMCwgeTogMCB9O1xuICBpZiAoZS50eXBlID09PSAndG91Y2hzdGFydCcgfHwgZS50eXBlID09PSAndG91Y2htb3ZlJyB8fCBlLnR5cGUgPT09ICd0b3VjaGVuZCcgfHwgZS50eXBlID09PSAndG91Y2hjYW5jZWwnKSB7XG4gICAgdmFyIHRvdWNoID0gZS5vcmlnaW5hbEV2ZW50LnRvdWNoZXNbMF0gfHwgZS5vcmlnaW5hbEV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdO1xuICAgIG91dC54ID0gdG91Y2gucGFnZVg7XG4gICAgb3V0LnkgPSB0b3VjaC5wYWdlWTtcbiAgfSBlbHNlIGlmIChlLnR5cGUgPT09ICdtb3VzZWRvd24nIHx8IGUudHlwZSA9PT0gJ21vdXNldXAnIHx8IGUudHlwZSA9PT0gJ21vdXNlbW92ZScgfHwgZS50eXBlID09PSAnbW91c2VvdmVyJyB8fCBlLnR5cGUgPT09ICdtb3VzZW91dCcgfHwgZS50eXBlID09PSAnbW91c2VlbnRlcicgfHwgZS50eXBlID09PSAnbW91c2VsZWF2ZScpIHtcbiAgICBvdXQueCA9IGUucGFnZVg7XG4gICAgb3V0LnkgPSBlLnBhZ2VZO1xuICB9XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICog55u05o6l5ZG85Y+raGFzT3duUHJvcGVydHnnmoTljp/lnovmlrnms5Uo55So5ZyoaGFzT3duUHJvcGVydHnooqvmlLnli5XpgY7nmoTni4Dms4EpXG4gKlxuICogQGV4cG9ydFxuICogQHBhcmFtIHtvYmplY3R9IHRhcmdldCDnm67mqJnnianku7ZcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wIOebruaomXByb3BcbiAqIEByZXR1cm5zIHtib29sZWFufSDmmK8v5ZCmXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0YXJnZXRIYXNQcm9wKHRhcmdldCwgcHJvcCkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRhcmdldCwgcHJvcCk7XG59XG5cbi8qKlxuICog56K66KqN5LiA5YCL6K6K5pW4L+WAvOaYr+WQpueCuuepuigw5LiN566X56m65YC8KVxuICogQGV4cG9ydFxuICogQHBhcmFtIHsqfSB2YWxcbiAqIEByZXR1cm5zIHtib29sZWFufSDmmK8v5ZCmXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0VtcHR5KHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ251bWJlcicgPyBpc05hTih2YWwpIDogIXZhbDtcbn1cblxuXG5mdW5jdGlvbiByZ2JUb1JnYmEocmdiVmFsdWUpIHtcbiAgY29uc3QgcmdiID0gL3JnYlxcKChcXGQrLFxccypbXFxkXSssXFxzKltcXGRdKylcXCkvZy5leGVjKHJnYlZhbHVlKTtcbiAgcmV0dXJuIHJnYiA/IGByZ2JhKCR7cmdiWzFdfSwxKWAgOiByZ2JWYWx1ZTtcbn1cblxuZnVuY3Rpb24gaGV4VG9SZ2JhKGhleFZhbHVlKSB7XG4gIGNvbnN0IHJneCA9IC9eIz8oW2EtZlxcZF0pKFthLWZcXGRdKShbYS1mXFxkXSkkL2k7XG4gIGNvbnN0IGhleCA9IGhleFZhbHVlLnJlcGxhY2Uocmd4LCAobSwgciwgZywgYikgPT4gciArIHIgKyBnICsgZyArIGIgKyBiKTtcbiAgY29uc3QgcmdiID0gL14jPyhbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KSQvaS5leGVjKGhleCk7XG4gIGNvbnN0IHIgPSBwYXJzZUludChyZ2JbMV0sIDE2KTtcbiAgY29uc3QgZyA9IHBhcnNlSW50KHJnYlsyXSwgMTYpO1xuICBjb25zdCBiID0gcGFyc2VJbnQocmdiWzNdLCAxNik7XG4gIHJldHVybiBgcmdiYSgke3J9LCR7Z30sJHtifSwxKWA7XG59XG5cbmZ1bmN0aW9uIGhzbFRvUmdiYShoc2xWYWx1ZSkge1xuICBjb25zdCBoc2wgPSAvaHNsXFwoKFxcZCspLFxccyooW1xcZC5dKyklLFxccyooW1xcZC5dKyklXFwpL2cuZXhlYyhoc2xWYWx1ZSkgfHwgL2hzbGFcXCgoXFxkKyksXFxzKihbXFxkLl0rKSUsXFxzKihbXFxkLl0rKSUsXFxzKihbXFxkLl0rKVxcKS9nLmV4ZWMoaHNsVmFsdWUpO1xuICBjb25zdCBoID0gcGFyc2VJbnQoaHNsWzFdLCAxMCkgLyAzNjA7XG4gIGNvbnN0IHMgPSBwYXJzZUludChoc2xbMl0sIDEwKSAvIDEwMDtcbiAgY29uc3QgbCA9IHBhcnNlSW50KGhzbFszXSwgMTApIC8gMTAwO1xuICBjb25zdCBhID0gaHNsWzRdIHx8IDE7XG4gIGZ1bmN0aW9uIGh1ZTJyZ2IocCwgcSwgdCkge1xuICAgIGlmICh0IDwgMCkgdCArPSAxO1xuICAgIGlmICh0ID4gMSkgdCAtPSAxO1xuICAgIGlmICh0IDwgMSAvIDYpIHJldHVybiBwICsgKHEgLSBwKSAqIDYgKiB0O1xuICAgIGlmICh0IDwgMSAvIDIpIHJldHVybiBxO1xuICAgIGlmICh0IDwgMiAvIDMpIHJldHVybiBwICsgKHEgLSBwKSAqICgyIC8gMyAtIHQpICogNjtcbiAgICByZXR1cm4gcDtcbiAgfVxuICBsZXQgciwgZywgYjtcbiAgaWYgKHMgPT0gMCkge1xuICAgIHIgPSBnID0gYiA9IGw7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgcSA9IGwgPCAwLjUgPyBsICogKDEgKyBzKSA6IGwgKyBzIC0gbCAqIHM7XG4gICAgY29uc3QgcCA9IDIgKiBsIC0gcTtcbiAgICByID0gaHVlMnJnYihwLCBxLCBoICsgMSAvIDMpO1xuICAgIGcgPSBodWUycmdiKHAsIHEsIGgpO1xuICAgIGIgPSBodWUycmdiKHAsIHEsIGggLSAxIC8gMyk7XG4gIH1cbiAgcmV0dXJuIGByZ2JhKCR7ciAqIDI1NX0sJHtnICogMjU1fSwke2IgKiAyNTV9LCR7YX0pYDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbG9yVG9SZ2JhKHZhbCkge1xuICBpZiAoaXMucmdiKHZhbCkpIHJldHVybiByZ2JUb1JnYmEodmFsKTtcbiAgaWYgKGlzLmhleCh2YWwpKSByZXR1cm4gaGV4VG9SZ2JhKHZhbCk7XG4gIGlmIChpcy5oc2wodmFsKSkgcmV0dXJuIGhzbFRvUmdiYSh2YWwpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2hhbm5lbFZhbHVlc0Zyb21SZ2JhKHJnYmEpIHtcbiAgcmV0dXJuIHJnYmEucmVwbGFjZSgvXihyZ2J8cmdiYSlcXCgvLCAnJykucmVwbGFjZSgvXFwpJC8sICcnKS5yZXBsYWNlKC9cXHMvZywgJycpLnNwbGl0KCcsJykubWFwKHggPT4gcGFyc2VJbnQoeCkpO1xufVxuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGNXYXlwb2ludHModmVydGljZXMsIGludGVycG9sYXRlID0gMzApIHtcbiAgdmFyIHdheXBvaW50cyA9IFtdO1xuICBmb3IgKHZhciBpID0gMTsgaSA8IHZlcnRpY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHB0MCA9IHZlcnRpY2VzW2kgLSAxXTtcbiAgICB2YXIgcHQxID0gdmVydGljZXNbaV07XG4gICAgdmFyIGR4ID0gcHQxLnggLSBwdDAueDtcbiAgICB2YXIgZHkgPSBwdDEueSAtIHB0MC55O1xuICAgIGZvciAodmFyIGogPSAwOyBqIDw9IGludGVycG9sYXRlOyBqKyspIHtcbiAgICAgIHZhciB4ID0gcHQwLnggKyBkeCAqIGogLyBpbnRlcnBvbGF0ZTtcbiAgICAgIHZhciB5ID0gcHQwLnkgKyBkeSAqIGogLyBpbnRlcnBvbGF0ZTtcbiAgICAgIHdheXBvaW50cy5wdXNoKHtcbiAgICAgICAgeDogeCxcbiAgICAgICAgeTogeVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cblxuICByZXR1cm4gKHdheXBvaW50cyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYWRTdHJpbmcodGFyZ2V0U3RyLCBsZW5ndGgsIHBhZFN0cmluZyA9ICcwJykge1xuICB2YXIgc3RyID0gdGFyZ2V0U3RyLnRvU3RyaW5nKCk7XG4gIHdoaWxlIChzdHIubGVuZ3RoIDwgbGVuZ3RoKVxuICAgIHN0ciA9IHBhZFN0cmluZyArIHN0cjtcbiAgcmV0dXJuIHN0cjtcbn0iLCJleHBvcnQgZnVuY3Rpb24gZHJhd1NxdWFyZShjdHgsIHgsIHksIHdpZHRoLCBjb2xvciwgYWxwaGEpIHtcbiAgY3R4LnNhdmUoKTtcbiAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICBjdHguZ2xvYmFsQWxwaGEgPSBhbHBoYTtcbiAgY3R4LmZpbGxSZWN0KHggLSB3aWR0aCAvIDIsIHkgLSB3aWR0aCAvIDIsIHdpZHRoLCB3aWR0aCk7XG4gIGN0eC5yZXN0b3JlKCk7XG59XG5leHBvcnQgZnVuY3Rpb24gZHJhd1JlY3QoY3R4LCB4LCB5LCB3aWR0aCwgaGVpZ2h0LCBjb2xvciwgYWxwaGEpIHtcbiAgY3R4LnNhdmUoKTtcbiAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICBjdHguZ2xvYmFsQWxwaGEgPSBhbHBoYTtcbiAgY3R4LmZpbGxSZWN0KHggLSB3aWR0aCAvIDIsIHkgLSBoZWlnaHQgLyAyLCB3aWR0aCwgaGVpZ2h0KTtcbiAgY3R4LnJlc3RvcmUoKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBkcmF3Q2lyY2xlKGN0eCwgeCwgeSwgd2lkdGgsIGNvbG9yLCBhbHBoYSA9IDEpIHtcbiAgY3R4LnNhdmUoKVxuICBjdHguZmlsbFN0eWxlID0gY29sb3I7XG4gIGN0eC5nbG9iYWxBbHBoYSA9IGFscGhhO1xuICBjdHguYmVnaW5QYXRoKCk7XG4gIGN0eC5hcmMoeCwgeSwgd2lkdGggLyAyLCAwLCBNYXRoLlBJICogMiwgdHJ1ZSk7XG4gIGN0eC5jbG9zZVBhdGgoKTtcbiAgY3R4LmZpbGwoKTtcbiAgY3R4LnJlc3RvcmUoKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBkcmF3TGluZShjdHgsIHgwLCB5MCwgeDEsIHkxLCBzdHJva2VDb2xvciwgc3Ryb2tlV2lkdGgpIHtcbiAgY3R4LnNhdmUoKTtcbiAgY3R4LnN0cm9rZVN0eWxlID0gc3Ryb2tlQ29sb3I7XG4gIGN0eC5saW5lV2lkdGggPSBzdHJva2VXaWR0aDtcbiAgY3R4LmJlZ2luUGF0aCgpO1xuICBjdHgubW92ZVRvKHgwLCB5MCk7XG4gIGN0eC5saW5lVG8oeDEsIHkxKTtcbiAgY3R4LmNsb3NlUGF0aCgpO1xuICBjdHguc3Ryb2tlKCk7XG4gIGN0eC5yZXN0b3JlKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkcmF3VGV4dChjdHgsIHRleHRDb250ZW50ID0gJ3RleHQnLCB4LCB5LCBjb2xvciA9ICcjMDAwJywgZm9udFNpemUgPSAxMiwgZm9udCA9ICdBcmlhbCcpIHtcbiAgY3R4LnNhdmUoKTtcbiAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICBjdHguZm9udCA9IGAke2ZvbnRTaXplfXB4ICR7Zm9udH1gO1xuICBjdHguZmlsbFRleHQodGV4dENvbnRlbnQsIHgsIHkpO1xuICBjdHgucmVzdG9yZSgpO1xufVxuXG4iLCJleHBvcnQgZnVuY3Rpb24gZ2V0U2NyZWVuc2hvdEltYWdlKHRhcmdldEN2cykge1xuICBsZXQgdXJsID0gdGFyZ2V0Q3ZzLnRvRGF0YVVSTCgpO1xuICBsZXQgaW1hZ2UgPSBuZXcgSW1hZ2UodGFyZ2V0Q3ZzLndpZHRoLCB0YXJnZXRDdnMuaGVpZ2h0KTtcbiAgaW1hZ2Uuc3JjID0gdXJsO1xuICByZXR1cm4gaW1hZ2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDYWNoZUNhbnZhcyh0YXJnZXRDdHgpIHtcbiAgbGV0IGNhY2hlQ3ZzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gIGxldCBjYWNoZUN0eCA9IGNhY2hlQ3ZzLmdldENvbnRleHQoJzJkJyk7XG4gIGxldCBzb3VyY2VXaWR0aCA9IHRhcmdldEN0eC5jYW52YXMud2lkdGg7XG4gIGxldCBzb3VyY2VIZWlnaHQgPSB0YXJnZXRDdHguY2FudmFzLmhlaWdodDtcbiAgY2FjaGVDdnMud2lkdGggPSBzb3VyY2VXaWR0aDtcbiAgY2FjaGVDdnMuaGVpZ2h0ID0gc291cmNlSGVpZ2h0O1xuXG4gIGxldCBjYWNoZURhdGEgPSB0YXJnZXRDdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIHNvdXJjZVdpZHRoLCBzb3VyY2VIZWlnaHQpO1xuICBjYWNoZUN0eC5wdXRJbWFnZURhdGEoY2FjaGVEYXRhLCAwLCAwKTtcbiAgcmV0dXJuIGNhY2hlQ3ZzO1xufSIsImltcG9ydCB7IENhbnZhczJERnhCYXNlLCBib290IH0gZnJvbSAnLi9saWIvYmFzZSc7XG5pbXBvcnQgeyBkcmF3Q2lyY2xlIH0gZnJvbSAnLi9saWIvc2hhcGUnO1xuaW1wb3J0IHsgJCB9IGZyb20gJy4vbGliL2RvbSdcbmltcG9ydCB7IHRvZ2dsZSB9IGZyb20gJy4vbGliL2RvbSc7XG5cbmNvbnN0IEJBTExfQU5JTUFUSU9OX0RFRkFVTFQgPSB7XG4gIGFmdGVySW1hZ2U6IGZhbHNlLFxuICByYWRpdXM6IDI1LFxuICBjb2xvcjogJ2JsdWUnLFxuICBzcGVlZFg6IDEwMDAsXG4gIHNwZWVkWTogMTAwMCxcbiAgYWNjZWxlcmF0aW9uWDogMCxcbiAgYWNjZWxlcmF0aW9uWTogMCxcbiAgZnJpY3Rpb25YOiAxLFxuICBmcmljdGlvblk6IDAuOTk5N1xufVxuXG5jb25zdCBTUE9UU19BTklNQVRJT05fREVGQVVMVCA9IHtcbiAgbWluU2l6ZTogMTAsXG4gIG1heFNpemU6IDIwLFxuICBwZXJpb2Q6IDMwMCxcbiAgc3RlcDogMTAsXG4gIGJvdHRvbUxheWVyOiBudWxsLFxuICBjb2xvcjogJ3JnYmEoMCwwLDAsMC4wMyknLFxuICBjb2w6IDE1LFxuICByb3c6IDE1XG59XG5cbmNsYXNzIEJhc2ljUmVmZWxlY3Rpb24gZXh0ZW5kcyBDYW52YXMyREZ4QmFzZSB7XG4gIGNvbnN0cnVjdG9yKGNhbnZhcywgZGVmYXVsdENvbmZpZywgY29uZmlnLCB2aXJ0dWFsUGFyZW50KSB7XG4gICAgc3VwZXIoY2FudmFzLCBkZWZhdWx0Q29uZmlnLCBjb25maWcsIHZpcnR1YWxQYXJlbnQpO1xuICAgIHRoaXMuc3dpdGNoU3RhdHVzID0gZmFsc2U7XG4gICAgdGhpcy5pbml0KCk7XG4gIH1cbiAgaW5pdCgpIHtcbiAgICB0aGlzLnN3aXRjaFN0YXR1cyA9IHRydWU7XG4gICAgdGhpcy5pbml0QmFsbCgpO1xuICAgIHRoaXMuYW5pbWF0ZUJhbGwoKTtcbiAgfVxuXG4gIHN3aXRjaGVyKHN0YXR1cykge1xuICAgIHRoaXMuc3dpdGNoU3RhdHVzID0gc3RhdHVzO1xuICB9XG5cbiAgaW5pdEJhbGwoKSB7XG4gICAgbGV0ICR0aGlzID0gdGhpcztcbiAgICB0aGlzLmJhbGwgPSB7XG4gICAgICBhZnRlckltYWdlOiAkdGhpcy5jb25maWcuYWZ0ZXJJbWFnZSxcbiAgICAgIGNvbG9yOiAkdGhpcy5jb25maWcuY29sb3IsXG4gICAgICByYWRpdXM6ICR0aGlzLmNvbmZpZy5yYWRpdXMsXG4gICAgICBsb2NhdGlvbjoge1xuICAgICAgICB4OiAkdGhpcy5jdnMud2lkdGggLyAyLFxuICAgICAgICB5OiAkdGhpcy5jdnMuaGVpZ2h0IC8gMixcbiAgICAgIH0sXG4gICAgICBzcGVlZDoge1xuICAgICAgICB4OiAkdGhpcy5jb25maWcuc3BlZWRYLFxuICAgICAgICB5OiAkdGhpcy5jb25maWcuc3BlZWRZXG4gICAgICB9LFxuICAgICAgYWNjZWxlcmF0aW9uOiB7XG4gICAgICAgIHg6ICR0aGlzLmNvbmZpZy5hY2NlbGVyYXRpb25YLFxuICAgICAgICB5OiAkdGhpcy5jb25maWcuYWNjZWxlcmF0aW9uWVxuICAgICAgfSxcbiAgICAgIGZyaWN0aW9uOiB7XG4gICAgICAgIHg6ICR0aGlzLmNvbmZpZy5mcmljdGlvblgsXG4gICAgICAgIHk6ICR0aGlzLmNvbmZpZy5mcmljdGlvbllcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZHJhd0JhbGwoKSB7XG4gICAgZHJhd0NpcmNsZSh0aGlzLmN0eCwgdGhpcy5iYWxsLmxvY2F0aW9uLngsIHRoaXMuYmFsbC5sb2NhdGlvbi55LCB0aGlzLmJhbGwucmFkaXVzICogMiwgdGhpcy5iYWxsLmNvbG9yKTtcbiAgfVxuICBhbmltYXRlQmFsbCgpIHtcbiAgICBpZiAodGhpcy5zd2l0Y2hTdGF0dXMgPT0gZmFsc2UpIHJldHVybjtcbiAgICBsZXQgJHRoaXMgPSB0aGlzO1xuICAgIGlmICgkdGhpcy5iYWxsLmFmdGVySW1hZ2UgPT09IHRydWUpIHtcbiAgICAgICR0aGlzLmJhY2tncm91bmQoJ3JnYigyNTUsIDE3NywgNDMsMC4xKScpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICR0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgJHRoaXMuY3ZzLndpZHRoLCAkdGhpcy5jdnMuaGVpZ2h0KTtcbiAgICB9XG4gICAgJHRoaXMuY3R4LmRyYXdJbWFnZSgkdGhpcy5jb25maWcuYm90dG9tTGF5ZXIsIDAsIDApO1xuICAgICR0aGlzLmRyYXdCYWxsKCk7XG4gICAgJHRoaXMucmVmcmVzaExvY2F0aW9uKCk7XG4gICAgJHRoaXMucmVmcmVzaFNwZWVkKCk7XG4gICAgJHRoaXMuY2hlY2tCb3VuZGFyeSgpO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShcbiAgICAgICR0aGlzLmFuaW1hdGVCYWxsLmJpbmQoJHRoaXMpXG4gICAgKTtcbiAgfVxuXG4gIHJlZnJlc2hTcGVlZCgpIHtcbiAgICBsZXQgZHQgPSB0aGlzLnRpbWVFbGFwc2VkO1xuICAgIHRoaXMuYmFsbC5zcGVlZC54ID0gdGhpcy5iYWxsLnNwZWVkLnggKiB0aGlzLmJhbGwuZnJpY3Rpb24ueCArIHRoaXMuYmFsbC5hY2NlbGVyYXRpb24ueCAqIGR0O1xuICAgIHRoaXMuYmFsbC5zcGVlZC55ID0gdGhpcy5iYWxsLnNwZWVkLnkgKiB0aGlzLmJhbGwuZnJpY3Rpb24ueSArIHRoaXMuYmFsbC5hY2NlbGVyYXRpb24ueSAqIGR0O1xuICB9XG5cbiAgcmVmcmVzaExvY2F0aW9uKCkge1xuICAgIGxldCBkdCA9IHRoaXMudGltZUVsYXBzZWQ7XG4gICAgdGhpcy5iYWxsLmxvY2F0aW9uLnggKz0gdGhpcy5iYWxsLnNwZWVkLnggKiBkdDtcbiAgICB0aGlzLmJhbGwubG9jYXRpb24ueSArPSB0aGlzLmJhbGwuc3BlZWQueSAqIGR0O1xuICB9XG4gIGNoZWNrQm91bmRhcnkoKSB7XG4gICAgbGV0IGJhbGwgPSB0aGlzLmJhbGw7XG4gICAgbGV0IGNhbnZhcyA9IHRoaXMuY3ZzO1xuICAgIC8vIOeVtueQg+ato+WcqOW6leerr1xuICAgIGlmIChiYWxsLmxvY2F0aW9uLnkgKyBiYWxsLnJhZGl1cyA+IGNhbnZhcy5oZWlnaHQpIHtcbiAgICAgIC8vIOS4lOmAn+W6pueCuuato+WAvO+8iOacneS4i++8iVxuICAgICAgaWYgKGJhbGwuc3BlZWQueSA+IDApIHtcbiAgICAgICAgYmFsbC5zcGVlZC55ID0gLWJhbGwuc3BlZWQueTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8g55W255CD5q2j5Zyo6aCC56uvXG4gICAgZWxzZSBpZiAoYmFsbC5sb2NhdGlvbi55IC0gYmFsbC5yYWRpdXMgPCAwKSB7XG4gICAgICAvLyDkuJTpgJ/luqbngrrosqDlgLzvvIjmnJ3kuIrvvIlcbiAgICAgIGlmIChiYWxsLnNwZWVkLnkgPCAwKSB7XG4gICAgICAgIGJhbGwuc3BlZWQueSA9IC1iYWxsLnNwZWVkLnk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8g55W255CD5q2j5Zyo5Y+z56uvXG4gICAgaWYgKGJhbGwubG9jYXRpb24ueCArIGJhbGwucmFkaXVzID4gY2FudmFzLndpZHRoKSB7XG4gICAgICBpZiAoYmFsbC5zcGVlZC54ID4gMCkge1xuICAgICAgICBiYWxsLnNwZWVkLnggPSAtYmFsbC5zcGVlZC54O1xuICAgICAgfVxuICAgIH1cbiAgICAvLyDnlbbnkIPmraPlnKjlt6bnq69cbiAgICBlbHNlIGlmIChiYWxsLmxvY2F0aW9uLnggLSBiYWxsLnJhZGl1cyA8IDApIHtcbiAgICAgIGlmIChiYWxsLnNwZWVkLnggPCAwKSB7XG4gICAgICAgIGJhbGwuc3BlZWQueCA9IC1iYWxsLnNwZWVkLng7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cbn1cblxuY2xhc3MgU3BvdHNCdW1waW5nIGV4dGVuZHMgQ2FudmFzMkRGeEJhc2Uge1xuICBjb25zdHJ1Y3RvcihjYW52YXMsIGRlZmF1bHRDb25maWcsIGNvbmZpZywgdmlydHVhbFBhcmVudCkge1xuICAgIHN1cGVyKGNhbnZhcywgZGVmYXVsdENvbmZpZywgY29uZmlnLCB2aXJ0dWFsUGFyZW50KTtcbiAgICB0aGlzLnNwb3RzU2l6ZSA9IHRoaXMuY29uZmlnLm1pblNpemU7XG4gICAgdGhpcy5leHBhbmQgPSB0cnVlO1xuICAgIHRoaXMuc3dpdGNoU3RhdHVzID0gZmFsc2U7XG4gICAgdGhpcy5pbml0KCk7XG4gIH1cbiAgaW5pdCgpIHtcbiAgICB0aGlzLnN3aXRjaFN0YXR1cyA9IHRydWU7XG4gICAgdGhpcy5hbmltYXRlKCk7XG4gIH1cblxuICBzd2l0Y2hlcihzdGF0dXMpIHtcbiAgICB0aGlzLnN3aXRjaFN0YXR1cyA9IHN0YXR1cztcbiAgfVxuXG4gIGFuaW1hdGUoKSB7XG4gICAgbGV0ICR0aGlzID0gdGhpcztcbiAgICB0aGlzLmludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuc3dpdGNoU3RhdHVzKSB7XG4gICAgICAgICR0aGlzLmNsZWFyKCk7XG4gICAgICAgICR0aGlzLmRyYXdTcG90cygpO1xuICAgICAgfVxuICAgIH0sIHRoaXMuY29uZmlnLnBlcmlvZClcbiAgfVxuXG4gIGRyYXdTcG90cygpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSB0aGlzLmNvbmZpZy5jb2w7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPD0gdGhpcy5jb25maWcuY29sOyBqKyspIHtcbiAgICAgICAgZHJhd0NpcmNsZShcbiAgICAgICAgICB0aGlzLmN0eCxcbiAgICAgICAgICBpICogdGhpcy5jdnMud2lkdGggLyB0aGlzLmNvbmZpZy5jb2wsXG4gICAgICAgICAgaiAqIHRoaXMuY3ZzLmhlaWdodCAvIHRoaXMuY29uZmlnLnJvdyxcbiAgICAgICAgICB0aGlzLnNwb3RzU2l6ZSxcbiAgICAgICAgICB0aGlzLmNvbmZpZy5jb2xvcixcbiAgICAgICAgICAxXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMuc3BvdHNTaXplIC0gMSA8IHRoaXMuY29uZmlnLm1pblNpemUpIHtcbiAgICAgIHRoaXMuZXhwYW5kID0gdHJ1ZVxuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLnNwb3RzU2l6ZSArIDEgPiB0aGlzLmNvbmZpZy5tYXhTaXplKSB7XG4gICAgICB0aGlzLmV4cGFuZCA9IGZhbHNlXG4gICAgfVxuICAgIGlmICh0aGlzLmV4cGFuZCkge1xuICAgICAgdGhpcy5zcG90c1NpemUgKz0gdGhpcy5jb25maWcuc3RlcDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLnNwb3RzU2l6ZSAtPSB0aGlzLmNvbmZpZy5zdGVwO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdFNwbGFzaCgpIHtcbiAgbGV0IGluaXRpYWxTY3JlZW4gPSAkKCcjaW5pdGlhbC1zY3JlZW4nKTtcbiAgbGV0IHZpcnR1YWxDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgbGV0IHN3aXRjaGVyO1xuICBsZXQgc3BvdEFuaW1hdGlvbiA9IGJvb3QoU3BvdHNCdW1waW5nLCBTUE9UU19BTklNQVRJT05fREVGQVVMVCwge30sIHZpcnR1YWxDYW52YXMsIGluaXRpYWxTY3JlZW4pO1xuICBsZXQgc3BsYXNoUHJvbWlzZSA9IHNwb3RBbmltYXRpb24ucHJvbWlzZS50aGVuKChzcG90c0J1bXBpbmdJbnN0YW5jZSkgPT4ge1xuICAgIGxldCBib290Q29udHJvbGxlciA9IGJvb3QoQmFzaWNSZWZlbGVjdGlvbiwgQkFMTF9BTklNQVRJT05fREVGQVVMVCwge1xuICAgICAgYWZ0ZXJJbWFnZTogdHJ1ZSxcbiAgICAgIHJhZGl1czogNDAsXG4gICAgICBjb2xvcjogJ3JnYmEoMCwgMCwgMCwwLjc1KScsXG4gICAgICBzcGVlZFg6IDEwMDAsXG4gICAgICBib3R0b21MYXllcjogc3BvdHNCdW1waW5nSW5zdGFuY2UuY3ZzLFxuICAgICAgc3BlZWRZOiAxMDAwLFxuICAgICAgYWNjZWxlcmF0aW9uWDogMCxcbiAgICAgIGFjY2VsZXJhdGlvblk6IDk4MCxcbiAgICAgIGZyaWN0aW9uWDogMSxcbiAgICB9LCBpbml0aWFsU2NyZWVuKTtcblxuICAgIGJvb3RDb250cm9sbGVyLnRyaWdnZXIoKTtcblxuICAgIHJldHVybiBib290Q29udHJvbGxlci5wcm9taXNlLnRoZW4oKGJhc2ljUmVmZWxlY3Rpb25JbnN0YW5jZSkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlcyA9PiB7XG4gICAgICAgIHN3aXRjaGVyID0gKHN0YXR1cykgPT4ge1xuICAgICAgICAgIHNwb3RzQnVtcGluZ0luc3RhbmNlLnN3aXRjaGVyKHN0YXR1cyk7XG4gICAgICAgICAgYmFzaWNSZWZlbGVjdGlvbkluc3RhbmNlLnN3aXRjaGVyKHN0YXR1cyk7XG4gICAgICAgIH1cbiAgICAgICAgcmVzKHN3aXRjaGVyKTtcbiAgICAgIH0pXG4gICAgfSlcbiAgfSlcbiAgc3BvdEFuaW1hdGlvbi50cmlnZ2VyKCk7XG5cbiAgcmV0dXJuIHNwbGFzaFByb21pc2U7XG59XG5cbiIsImV4cG9ydCBjb25zdCBwbGF5ZXJzRGF0YSA9IFtcbiAge1xuICAgIGlkOiAwLFxuICAgIG5hbWU6ICc/Pz8nLFxuICAgIHNjb3JlOiAwLFxuICAgIHdpZHRoOiAwLFxuICAgIHBvc2l0aW9uOiB7XG4gICAgICB4OiAwLFxuICAgICAgeTogMFxuICAgIH1cbiAgfSxcbiAge1xuICAgIGlkOiAxLFxuICAgIG5hbWU6ICc/Pz8nLFxuICAgIHNjb3JlOiAwLFxuICAgIHdpZHRoOiAwLFxuICAgIHBvc2l0aW9uOiB7XG4gICAgICB4OiAwLFxuICAgICAgeTogMFxuICAgIH1cbiAgfVxuXTtcblxuZXhwb3J0IGNvbnN0IGNvdXJ0RGF0YSA9IHtcbiAgd2lkdGg6IDAsXG4gIGhlaWdodDogMFxufVxuXG5leHBvcnQgY29uc3QgYmFsbERhdGEgPSB7XG4gIHBvc2l0aW9uOiB7XG4gICAgeDogMCxcbiAgICB5OiAwXG4gIH0sXG4gIHNwZWVkOiB7XG4gICAgeDogMCxcbiAgICB5OiAwXG4gIH0sXG4gIHNpemU6IDAsXG4gIGNvbG9yOiBudWxsLFxuICBpc1N0dWNrOiB0cnVlLFxuICBpc0hvbGRCeTogMFxufVxuXG5cblxuZXhwb3J0IGNvbnN0IHBsYXllclJlZiA9IHtcbiAgbmFtZTogJz8/PycsXG4gIG51bWJlcjogMFxufTsiLCJcbi8qKlxuICogRXhwb3NlIGBCYWNrb2ZmYC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJhY2tvZmY7XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBiYWNrb2ZmIHRpbWVyIHdpdGggYG9wdHNgLlxuICpcbiAqIC0gYG1pbmAgaW5pdGlhbCB0aW1lb3V0IGluIG1pbGxpc2Vjb25kcyBbMTAwXVxuICogLSBgbWF4YCBtYXggdGltZW91dCBbMTAwMDBdXG4gKiAtIGBqaXR0ZXJgIFswXVxuICogLSBgZmFjdG9yYCBbMl1cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0c1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBCYWNrb2ZmKG9wdHMpIHtcbiAgb3B0cyA9IG9wdHMgfHwge307XG4gIHRoaXMubXMgPSBvcHRzLm1pbiB8fCAxMDA7XG4gIHRoaXMubWF4ID0gb3B0cy5tYXggfHwgMTAwMDA7XG4gIHRoaXMuZmFjdG9yID0gb3B0cy5mYWN0b3IgfHwgMjtcbiAgdGhpcy5qaXR0ZXIgPSBvcHRzLmppdHRlciA+IDAgJiYgb3B0cy5qaXR0ZXIgPD0gMSA/IG9wdHMuaml0dGVyIDogMDtcbiAgdGhpcy5hdHRlbXB0cyA9IDA7XG59XG5cbi8qKlxuICogUmV0dXJuIHRoZSBiYWNrb2ZmIGR1cmF0aW9uLlxuICpcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuQmFja29mZi5wcm90b3R5cGUuZHVyYXRpb24gPSBmdW5jdGlvbigpe1xuICB2YXIgbXMgPSB0aGlzLm1zICogTWF0aC5wb3codGhpcy5mYWN0b3IsIHRoaXMuYXR0ZW1wdHMrKyk7XG4gIGlmICh0aGlzLmppdHRlcikge1xuICAgIHZhciByYW5kID0gIE1hdGgucmFuZG9tKCk7XG4gICAgdmFyIGRldmlhdGlvbiA9IE1hdGguZmxvb3IocmFuZCAqIHRoaXMuaml0dGVyICogbXMpO1xuICAgIG1zID0gKE1hdGguZmxvb3IocmFuZCAqIDEwKSAmIDEpID09IDAgID8gbXMgLSBkZXZpYXRpb24gOiBtcyArIGRldmlhdGlvbjtcbiAgfVxuICByZXR1cm4gTWF0aC5taW4obXMsIHRoaXMubWF4KSB8IDA7XG59O1xuXG4vKipcbiAqIFJlc2V0IHRoZSBudW1iZXIgb2YgYXR0ZW1wdHMuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5CYWNrb2ZmLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uKCl7XG4gIHRoaXMuYXR0ZW1wdHMgPSAwO1xufTtcblxuLyoqXG4gKiBTZXQgdGhlIG1pbmltdW0gZHVyYXRpb25cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkJhY2tvZmYucHJvdG90eXBlLnNldE1pbiA9IGZ1bmN0aW9uKG1pbil7XG4gIHRoaXMubXMgPSBtaW47XG59O1xuXG4vKipcbiAqIFNldCB0aGUgbWF4aW11bSBkdXJhdGlvblxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuQmFja29mZi5wcm90b3R5cGUuc2V0TWF4ID0gZnVuY3Rpb24obWF4KXtcbiAgdGhpcy5tYXggPSBtYXg7XG59O1xuXG4vKipcbiAqIFNldCB0aGUgaml0dGVyXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5CYWNrb2ZmLnByb3RvdHlwZS5zZXRKaXR0ZXIgPSBmdW5jdGlvbihqaXR0ZXIpe1xuICB0aGlzLmppdHRlciA9IGppdHRlcjtcbn07XG5cbiIsIi8qXG4gKiBiYXNlNjQtYXJyYXlidWZmZXJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9uaWtsYXN2aC9iYXNlNjQtYXJyYXlidWZmZXJcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTIgTmlrbGFzIHZvbiBIZXJ0emVuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKi9cbihmdW5jdGlvbihjaGFycyl7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIGV4cG9ydHMuZW5jb2RlID0gZnVuY3Rpb24oYXJyYXlidWZmZXIpIHtcbiAgICB2YXIgYnl0ZXMgPSBuZXcgVWludDhBcnJheShhcnJheWJ1ZmZlciksXG4gICAgaSwgbGVuID0gYnl0ZXMubGVuZ3RoLCBiYXNlNjQgPSBcIlwiO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSs9Mykge1xuICAgICAgYmFzZTY0ICs9IGNoYXJzW2J5dGVzW2ldID4+IDJdO1xuICAgICAgYmFzZTY0ICs9IGNoYXJzWygoYnl0ZXNbaV0gJiAzKSA8PCA0KSB8IChieXRlc1tpICsgMV0gPj4gNCldO1xuICAgICAgYmFzZTY0ICs9IGNoYXJzWygoYnl0ZXNbaSArIDFdICYgMTUpIDw8IDIpIHwgKGJ5dGVzW2kgKyAyXSA+PiA2KV07XG4gICAgICBiYXNlNjQgKz0gY2hhcnNbYnl0ZXNbaSArIDJdICYgNjNdO1xuICAgIH1cblxuICAgIGlmICgobGVuICUgMykgPT09IDIpIHtcbiAgICAgIGJhc2U2NCA9IGJhc2U2NC5zdWJzdHJpbmcoMCwgYmFzZTY0Lmxlbmd0aCAtIDEpICsgXCI9XCI7XG4gICAgfSBlbHNlIGlmIChsZW4gJSAzID09PSAxKSB7XG4gICAgICBiYXNlNjQgPSBiYXNlNjQuc3Vic3RyaW5nKDAsIGJhc2U2NC5sZW5ndGggLSAyKSArIFwiPT1cIjtcbiAgICB9XG5cbiAgICByZXR1cm4gYmFzZTY0O1xuICB9O1xuXG4gIGV4cG9ydHMuZGVjb2RlID0gIGZ1bmN0aW9uKGJhc2U2NCkge1xuICAgIHZhciBidWZmZXJMZW5ndGggPSBiYXNlNjQubGVuZ3RoICogMC43NSxcbiAgICBsZW4gPSBiYXNlNjQubGVuZ3RoLCBpLCBwID0gMCxcbiAgICBlbmNvZGVkMSwgZW5jb2RlZDIsIGVuY29kZWQzLCBlbmNvZGVkNDtcblxuICAgIGlmIChiYXNlNjRbYmFzZTY0Lmxlbmd0aCAtIDFdID09PSBcIj1cIikge1xuICAgICAgYnVmZmVyTGVuZ3RoLS07XG4gICAgICBpZiAoYmFzZTY0W2Jhc2U2NC5sZW5ndGggLSAyXSA9PT0gXCI9XCIpIHtcbiAgICAgICAgYnVmZmVyTGVuZ3RoLS07XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGFycmF5YnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKGJ1ZmZlckxlbmd0aCksXG4gICAgYnl0ZXMgPSBuZXcgVWludDhBcnJheShhcnJheWJ1ZmZlcik7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKz00KSB7XG4gICAgICBlbmNvZGVkMSA9IGNoYXJzLmluZGV4T2YoYmFzZTY0W2ldKTtcbiAgICAgIGVuY29kZWQyID0gY2hhcnMuaW5kZXhPZihiYXNlNjRbaSsxXSk7XG4gICAgICBlbmNvZGVkMyA9IGNoYXJzLmluZGV4T2YoYmFzZTY0W2krMl0pO1xuICAgICAgZW5jb2RlZDQgPSBjaGFycy5pbmRleE9mKGJhc2U2NFtpKzNdKTtcblxuICAgICAgYnl0ZXNbcCsrXSA9IChlbmNvZGVkMSA8PCAyKSB8IChlbmNvZGVkMiA+PiA0KTtcbiAgICAgIGJ5dGVzW3ArK10gPSAoKGVuY29kZWQyICYgMTUpIDw8IDQpIHwgKGVuY29kZWQzID4+IDIpO1xuICAgICAgYnl0ZXNbcCsrXSA9ICgoZW5jb2RlZDMgJiAzKSA8PCA2KSB8IChlbmNvZGVkNCAmIDYzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJyYXlidWZmZXI7XG4gIH07XG59KShcIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky9cIik7XG4iLCJcclxuLyoqXHJcbiAqIEV4cG9zZSBgRW1pdHRlcmAuXHJcbiAqL1xyXG5cclxuaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgbW9kdWxlLmV4cG9ydHMgPSBFbWl0dGVyO1xyXG59XHJcblxyXG4vKipcclxuICogSW5pdGlhbGl6ZSBhIG5ldyBgRW1pdHRlcmAuXHJcbiAqXHJcbiAqIEBhcGkgcHVibGljXHJcbiAqL1xyXG5cclxuZnVuY3Rpb24gRW1pdHRlcihvYmopIHtcclxuICBpZiAob2JqKSByZXR1cm4gbWl4aW4ob2JqKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBNaXhpbiB0aGUgZW1pdHRlciBwcm9wZXJ0aWVzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXHJcbiAqIEByZXR1cm4ge09iamVjdH1cclxuICogQGFwaSBwcml2YXRlXHJcbiAqL1xyXG5cclxuZnVuY3Rpb24gbWl4aW4ob2JqKSB7XHJcbiAgZm9yICh2YXIga2V5IGluIEVtaXR0ZXIucHJvdG90eXBlKSB7XHJcbiAgICBvYmpba2V5XSA9IEVtaXR0ZXIucHJvdG90eXBlW2tleV07XHJcbiAgfVxyXG4gIHJldHVybiBvYmo7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBMaXN0ZW4gb24gdGhlIGdpdmVuIGBldmVudGAgd2l0aCBgZm5gLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcclxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cclxuICogQHJldHVybiB7RW1pdHRlcn1cclxuICogQGFwaSBwdWJsaWNcclxuICovXHJcblxyXG5FbWl0dGVyLnByb3RvdHlwZS5vbiA9XHJcbkVtaXR0ZXIucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbihldmVudCwgZm4pe1xyXG4gIHRoaXMuX2NhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrcyB8fCB7fTtcclxuICAodGhpcy5fY2FsbGJhY2tzWyckJyArIGV2ZW50XSA9IHRoaXMuX2NhbGxiYWNrc1snJCcgKyBldmVudF0gfHwgW10pXHJcbiAgICAucHVzaChmbik7XHJcbiAgcmV0dXJuIHRoaXM7XHJcbn07XHJcblxyXG4vKipcclxuICogQWRkcyBhbiBgZXZlbnRgIGxpc3RlbmVyIHRoYXQgd2lsbCBiZSBpbnZva2VkIGEgc2luZ2xlXHJcbiAqIHRpbWUgdGhlbiBhdXRvbWF0aWNhbGx5IHJlbW92ZWQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxyXG4gKiBAcmV0dXJuIHtFbWl0dGVyfVxyXG4gKiBAYXBpIHB1YmxpY1xyXG4gKi9cclxuXHJcbkVtaXR0ZXIucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbihldmVudCwgZm4pe1xyXG4gIGZ1bmN0aW9uIG9uKCkge1xyXG4gICAgdGhpcy5vZmYoZXZlbnQsIG9uKTtcclxuICAgIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgfVxyXG5cclxuICBvbi5mbiA9IGZuO1xyXG4gIHRoaXMub24oZXZlbnQsIG9uKTtcclxuICByZXR1cm4gdGhpcztcclxufTtcclxuXHJcbi8qKlxyXG4gKiBSZW1vdmUgdGhlIGdpdmVuIGNhbGxiYWNrIGZvciBgZXZlbnRgIG9yIGFsbFxyXG4gKiByZWdpc3RlcmVkIGNhbGxiYWNrcy5cclxuICpcclxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXHJcbiAqIEByZXR1cm4ge0VtaXR0ZXJ9XHJcbiAqIEBhcGkgcHVibGljXHJcbiAqL1xyXG5cclxuRW1pdHRlci5wcm90b3R5cGUub2ZmID1cclxuRW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPVxyXG5FbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVBbGxMaXN0ZW5lcnMgPVxyXG5FbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24oZXZlbnQsIGZuKXtcclxuICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XHJcblxyXG4gIC8vIGFsbFxyXG4gIGlmICgwID09IGFyZ3VtZW50cy5sZW5ndGgpIHtcclxuICAgIHRoaXMuX2NhbGxiYWNrcyA9IHt9O1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvLyBzcGVjaWZpYyBldmVudFxyXG4gIHZhciBjYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3NbJyQnICsgZXZlbnRdO1xyXG4gIGlmICghY2FsbGJhY2tzKSByZXR1cm4gdGhpcztcclxuXHJcbiAgLy8gcmVtb3ZlIGFsbCBoYW5kbGVyc1xyXG4gIGlmICgxID09IGFyZ3VtZW50cy5sZW5ndGgpIHtcclxuICAgIGRlbGV0ZSB0aGlzLl9jYWxsYmFja3NbJyQnICsgZXZlbnRdO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvLyByZW1vdmUgc3BlY2lmaWMgaGFuZGxlclxyXG4gIHZhciBjYjtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IGNhbGxiYWNrcy5sZW5ndGg7IGkrKykge1xyXG4gICAgY2IgPSBjYWxsYmFja3NbaV07XHJcbiAgICBpZiAoY2IgPT09IGZuIHx8IGNiLmZuID09PSBmbikge1xyXG4gICAgICBjYWxsYmFja3Muc3BsaWNlKGksIDEpO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIFJlbW92ZSBldmVudCBzcGVjaWZpYyBhcnJheXMgZm9yIGV2ZW50IHR5cGVzIHRoYXQgbm9cclxuICAvLyBvbmUgaXMgc3Vic2NyaWJlZCBmb3IgdG8gYXZvaWQgbWVtb3J5IGxlYWsuXHJcbiAgaWYgKGNhbGxiYWNrcy5sZW5ndGggPT09IDApIHtcclxuICAgIGRlbGV0ZSB0aGlzLl9jYWxsYmFja3NbJyQnICsgZXZlbnRdO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHRoaXM7XHJcbn07XHJcblxyXG4vKipcclxuICogRW1pdCBgZXZlbnRgIHdpdGggdGhlIGdpdmVuIGFyZ3MuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxyXG4gKiBAcGFyYW0ge01peGVkfSAuLi5cclxuICogQHJldHVybiB7RW1pdHRlcn1cclxuICovXHJcblxyXG5FbWl0dGVyLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24oZXZlbnQpe1xyXG4gIHRoaXMuX2NhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrcyB8fCB7fTtcclxuXHJcbiAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpXHJcbiAgICAsIGNhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrc1snJCcgKyBldmVudF07XHJcblxyXG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcclxuICB9XHJcblxyXG4gIGlmIChjYWxsYmFja3MpIHtcclxuICAgIGNhbGxiYWNrcyA9IGNhbGxiYWNrcy5zbGljZSgwKTtcclxuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBjYWxsYmFja3MubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcclxuICAgICAgY2FsbGJhY2tzW2ldLmFwcGx5KHRoaXMsIGFyZ3MpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHRoaXM7XHJcbn07XHJcblxyXG4vKipcclxuICogUmV0dXJuIGFycmF5IG9mIGNhbGxiYWNrcyBmb3IgYGV2ZW50YC5cclxuICpcclxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XHJcbiAqIEByZXR1cm4ge0FycmF5fVxyXG4gKiBAYXBpIHB1YmxpY1xyXG4gKi9cclxuXHJcbkVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVycyA9IGZ1bmN0aW9uKGV2ZW50KXtcclxuICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XHJcbiAgcmV0dXJuIHRoaXMuX2NhbGxiYWNrc1snJCcgKyBldmVudF0gfHwgW107XHJcbn07XHJcblxyXG4vKipcclxuICogQ2hlY2sgaWYgdGhpcyBlbWl0dGVyIGhhcyBgZXZlbnRgIGhhbmRsZXJzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcclxuICogQHJldHVybiB7Qm9vbGVhbn1cclxuICogQGFwaSBwdWJsaWNcclxuICovXHJcblxyXG5FbWl0dGVyLnByb3RvdHlwZS5oYXNMaXN0ZW5lcnMgPSBmdW5jdGlvbihldmVudCl7XHJcbiAgcmV0dXJuICEhIHRoaXMubGlzdGVuZXJzKGV2ZW50KS5sZW5ndGg7XHJcbn07XHJcbiIsIi8qKlxuICogSGVscGVycy5cbiAqL1xuXG52YXIgcyA9IDEwMDA7XG52YXIgbSA9IHMgKiA2MDtcbnZhciBoID0gbSAqIDYwO1xudmFyIGQgPSBoICogMjQ7XG52YXIgdyA9IGQgKiA3O1xudmFyIHkgPSBkICogMzY1LjI1O1xuXG4vKipcbiAqIFBhcnNlIG9yIGZvcm1hdCB0aGUgZ2l2ZW4gYHZhbGAuXG4gKlxuICogT3B0aW9uczpcbiAqXG4gKiAgLSBgbG9uZ2AgdmVyYm9zZSBmb3JtYXR0aW5nIFtmYWxzZV1cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ3xOdW1iZXJ9IHZhbFxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQHRocm93cyB7RXJyb3J9IHRocm93IGFuIGVycm9yIGlmIHZhbCBpcyBub3QgYSBub24tZW1wdHkgc3RyaW5nIG9yIGEgbnVtYmVyXG4gKiBAcmV0dXJuIHtTdHJpbmd8TnVtYmVyfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHZhbCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsO1xuICBpZiAodHlwZSA9PT0gJ3N0cmluZycgJiYgdmFsLmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gcGFyc2UodmFsKTtcbiAgfSBlbHNlIGlmICh0eXBlID09PSAnbnVtYmVyJyAmJiBpc0Zpbml0ZSh2YWwpKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMubG9uZyA/IGZtdExvbmcodmFsKSA6IGZtdFNob3J0KHZhbCk7XG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKFxuICAgICd2YWwgaXMgbm90IGEgbm9uLWVtcHR5IHN0cmluZyBvciBhIHZhbGlkIG51bWJlci4gdmFsPScgK1xuICAgICAgSlNPTi5zdHJpbmdpZnkodmFsKVxuICApO1xufTtcblxuLyoqXG4gKiBQYXJzZSB0aGUgZ2l2ZW4gYHN0cmAgYW5kIHJldHVybiBtaWxsaXNlY29uZHMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7TnVtYmVyfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gcGFyc2Uoc3RyKSB7XG4gIHN0ciA9IFN0cmluZyhzdHIpO1xuICBpZiAoc3RyLmxlbmd0aCA+IDEwMCkge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgbWF0Y2ggPSAvXigtPyg/OlxcZCspP1xcLj9cXGQrKSAqKG1pbGxpc2Vjb25kcz98bXNlY3M/fG1zfHNlY29uZHM/fHNlY3M/fHN8bWludXRlcz98bWlucz98bXxob3Vycz98aHJzP3xofGRheXM/fGR8d2Vla3M/fHd8eWVhcnM/fHlycz98eSk/JC9pLmV4ZWMoXG4gICAgc3RyXG4gICk7XG4gIGlmICghbWF0Y2gpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIG4gPSBwYXJzZUZsb2F0KG1hdGNoWzFdKTtcbiAgdmFyIHR5cGUgPSAobWF0Y2hbMl0gfHwgJ21zJykudG9Mb3dlckNhc2UoKTtcbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSAneWVhcnMnOlxuICAgIGNhc2UgJ3llYXInOlxuICAgIGNhc2UgJ3lycyc6XG4gICAgY2FzZSAneXInOlxuICAgIGNhc2UgJ3knOlxuICAgICAgcmV0dXJuIG4gKiB5O1xuICAgIGNhc2UgJ3dlZWtzJzpcbiAgICBjYXNlICd3ZWVrJzpcbiAgICBjYXNlICd3JzpcbiAgICAgIHJldHVybiBuICogdztcbiAgICBjYXNlICdkYXlzJzpcbiAgICBjYXNlICdkYXknOlxuICAgIGNhc2UgJ2QnOlxuICAgICAgcmV0dXJuIG4gKiBkO1xuICAgIGNhc2UgJ2hvdXJzJzpcbiAgICBjYXNlICdob3VyJzpcbiAgICBjYXNlICdocnMnOlxuICAgIGNhc2UgJ2hyJzpcbiAgICBjYXNlICdoJzpcbiAgICAgIHJldHVybiBuICogaDtcbiAgICBjYXNlICdtaW51dGVzJzpcbiAgICBjYXNlICdtaW51dGUnOlxuICAgIGNhc2UgJ21pbnMnOlxuICAgIGNhc2UgJ21pbic6XG4gICAgY2FzZSAnbSc6XG4gICAgICByZXR1cm4gbiAqIG07XG4gICAgY2FzZSAnc2Vjb25kcyc6XG4gICAgY2FzZSAnc2Vjb25kJzpcbiAgICBjYXNlICdzZWNzJzpcbiAgICBjYXNlICdzZWMnOlxuICAgIGNhc2UgJ3MnOlxuICAgICAgcmV0dXJuIG4gKiBzO1xuICAgIGNhc2UgJ21pbGxpc2Vjb25kcyc6XG4gICAgY2FzZSAnbWlsbGlzZWNvbmQnOlxuICAgIGNhc2UgJ21zZWNzJzpcbiAgICBjYXNlICdtc2VjJzpcbiAgICBjYXNlICdtcyc6XG4gICAgICByZXR1cm4gbjtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxufVxuXG4vKipcbiAqIFNob3J0IGZvcm1hdCBmb3IgYG1zYC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gbXNcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGZtdFNob3J0KG1zKSB7XG4gIHZhciBtc0FicyA9IE1hdGguYWJzKG1zKTtcbiAgaWYgKG1zQWJzID49IGQpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIGQpICsgJ2QnO1xuICB9XG4gIGlmIChtc0FicyA+PSBoKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBoKSArICdoJztcbiAgfVxuICBpZiAobXNBYnMgPj0gbSkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gbSkgKyAnbSc7XG4gIH1cbiAgaWYgKG1zQWJzID49IHMpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIHMpICsgJ3MnO1xuICB9XG4gIHJldHVybiBtcyArICdtcyc7XG59XG5cbi8qKlxuICogTG9uZyBmb3JtYXQgZm9yIGBtc2AuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IG1zXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBmbXRMb25nKG1zKSB7XG4gIHZhciBtc0FicyA9IE1hdGguYWJzKG1zKTtcbiAgaWYgKG1zQWJzID49IGQpIHtcbiAgICByZXR1cm4gcGx1cmFsKG1zLCBtc0FicywgZCwgJ2RheScpO1xuICB9XG4gIGlmIChtc0FicyA+PSBoKSB7XG4gICAgcmV0dXJuIHBsdXJhbChtcywgbXNBYnMsIGgsICdob3VyJyk7XG4gIH1cbiAgaWYgKG1zQWJzID49IG0pIHtcbiAgICByZXR1cm4gcGx1cmFsKG1zLCBtc0FicywgbSwgJ21pbnV0ZScpO1xuICB9XG4gIGlmIChtc0FicyA+PSBzKSB7XG4gICAgcmV0dXJuIHBsdXJhbChtcywgbXNBYnMsIHMsICdzZWNvbmQnKTtcbiAgfVxuICByZXR1cm4gbXMgKyAnIG1zJztcbn1cblxuLyoqXG4gKiBQbHVyYWxpemF0aW9uIGhlbHBlci5cbiAqL1xuXG5mdW5jdGlvbiBwbHVyYWwobXMsIG1zQWJzLCBuLCBuYW1lKSB7XG4gIHZhciBpc1BsdXJhbCA9IG1zQWJzID49IG4gKiAxLjU7XG4gIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gbikgKyAnICcgKyBuYW1lICsgKGlzUGx1cmFsID8gJ3MnIDogJycpO1xufVxuIiwiLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbi8qKlxuICogVGhpcyBpcyB0aGUgd2ViIGJyb3dzZXIgaW1wbGVtZW50YXRpb24gb2YgYGRlYnVnKClgLlxuICovXG5cbmV4cG9ydHMuZm9ybWF0QXJncyA9IGZvcm1hdEFyZ3M7XG5leHBvcnRzLnNhdmUgPSBzYXZlO1xuZXhwb3J0cy5sb2FkID0gbG9hZDtcbmV4cG9ydHMudXNlQ29sb3JzID0gdXNlQ29sb3JzO1xuZXhwb3J0cy5zdG9yYWdlID0gbG9jYWxzdG9yYWdlKCk7XG5leHBvcnRzLmRlc3Ryb3kgPSAoKCkgPT4ge1xuXHRsZXQgd2FybmVkID0gZmFsc2U7XG5cblx0cmV0dXJuICgpID0+IHtcblx0XHRpZiAoIXdhcm5lZCkge1xuXHRcdFx0d2FybmVkID0gdHJ1ZTtcblx0XHRcdGNvbnNvbGUud2FybignSW5zdGFuY2UgbWV0aG9kIGBkZWJ1Zy5kZXN0cm95KClgIGlzIGRlcHJlY2F0ZWQgYW5kIG5vIGxvbmdlciBkb2VzIGFueXRoaW5nLiBJdCB3aWxsIGJlIHJlbW92ZWQgaW4gdGhlIG5leHQgbWFqb3IgdmVyc2lvbiBvZiBgZGVidWdgLicpO1xuXHRcdH1cblx0fTtcbn0pKCk7XG5cbi8qKlxuICogQ29sb3JzLlxuICovXG5cbmV4cG9ydHMuY29sb3JzID0gW1xuXHQnIzAwMDBDQycsXG5cdCcjMDAwMEZGJyxcblx0JyMwMDMzQ0MnLFxuXHQnIzAwMzNGRicsXG5cdCcjMDA2NkNDJyxcblx0JyMwMDY2RkYnLFxuXHQnIzAwOTlDQycsXG5cdCcjMDA5OUZGJyxcblx0JyMwMENDMDAnLFxuXHQnIzAwQ0MzMycsXG5cdCcjMDBDQzY2Jyxcblx0JyMwMENDOTknLFxuXHQnIzAwQ0NDQycsXG5cdCcjMDBDQ0ZGJyxcblx0JyMzMzAwQ0MnLFxuXHQnIzMzMDBGRicsXG5cdCcjMzMzM0NDJyxcblx0JyMzMzMzRkYnLFxuXHQnIzMzNjZDQycsXG5cdCcjMzM2NkZGJyxcblx0JyMzMzk5Q0MnLFxuXHQnIzMzOTlGRicsXG5cdCcjMzNDQzAwJyxcblx0JyMzM0NDMzMnLFxuXHQnIzMzQ0M2NicsXG5cdCcjMzNDQzk5Jyxcblx0JyMzM0NDQ0MnLFxuXHQnIzMzQ0NGRicsXG5cdCcjNjYwMENDJyxcblx0JyM2NjAwRkYnLFxuXHQnIzY2MzNDQycsXG5cdCcjNjYzM0ZGJyxcblx0JyM2NkNDMDAnLFxuXHQnIzY2Q0MzMycsXG5cdCcjOTkwMENDJyxcblx0JyM5OTAwRkYnLFxuXHQnIzk5MzNDQycsXG5cdCcjOTkzM0ZGJyxcblx0JyM5OUNDMDAnLFxuXHQnIzk5Q0MzMycsXG5cdCcjQ0MwMDAwJyxcblx0JyNDQzAwMzMnLFxuXHQnI0NDMDA2NicsXG5cdCcjQ0MwMDk5Jyxcblx0JyNDQzAwQ0MnLFxuXHQnI0NDMDBGRicsXG5cdCcjQ0MzMzAwJyxcblx0JyNDQzMzMzMnLFxuXHQnI0NDMzM2NicsXG5cdCcjQ0MzMzk5Jyxcblx0JyNDQzMzQ0MnLFxuXHQnI0NDMzNGRicsXG5cdCcjQ0M2NjAwJyxcblx0JyNDQzY2MzMnLFxuXHQnI0NDOTkwMCcsXG5cdCcjQ0M5OTMzJyxcblx0JyNDQ0NDMDAnLFxuXHQnI0NDQ0MzMycsXG5cdCcjRkYwMDAwJyxcblx0JyNGRjAwMzMnLFxuXHQnI0ZGMDA2NicsXG5cdCcjRkYwMDk5Jyxcblx0JyNGRjAwQ0MnLFxuXHQnI0ZGMDBGRicsXG5cdCcjRkYzMzAwJyxcblx0JyNGRjMzMzMnLFxuXHQnI0ZGMzM2NicsXG5cdCcjRkYzMzk5Jyxcblx0JyNGRjMzQ0MnLFxuXHQnI0ZGMzNGRicsXG5cdCcjRkY2NjAwJyxcblx0JyNGRjY2MzMnLFxuXHQnI0ZGOTkwMCcsXG5cdCcjRkY5OTMzJyxcblx0JyNGRkNDMDAnLFxuXHQnI0ZGQ0MzMydcbl07XG5cbi8qKlxuICogQ3VycmVudGx5IG9ubHkgV2ViS2l0LWJhc2VkIFdlYiBJbnNwZWN0b3JzLCBGaXJlZm94ID49IHYzMSxcbiAqIGFuZCB0aGUgRmlyZWJ1ZyBleHRlbnNpb24gKGFueSBGaXJlZm94IHZlcnNpb24pIGFyZSBrbm93blxuICogdG8gc3VwcG9ydCBcIiVjXCIgQ1NTIGN1c3RvbWl6YXRpb25zLlxuICpcbiAqIFRPRE86IGFkZCBhIGBsb2NhbFN0b3JhZ2VgIHZhcmlhYmxlIHRvIGV4cGxpY2l0bHkgZW5hYmxlL2Rpc2FibGUgY29sb3JzXG4gKi9cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbXBsZXhpdHlcbmZ1bmN0aW9uIHVzZUNvbG9ycygpIHtcblx0Ly8gTkI6IEluIGFuIEVsZWN0cm9uIHByZWxvYWQgc2NyaXB0LCBkb2N1bWVudCB3aWxsIGJlIGRlZmluZWQgYnV0IG5vdCBmdWxseVxuXHQvLyBpbml0aWFsaXplZC4gU2luY2Ugd2Uga25vdyB3ZSdyZSBpbiBDaHJvbWUsIHdlJ2xsIGp1c3QgZGV0ZWN0IHRoaXMgY2FzZVxuXHQvLyBleHBsaWNpdGx5XG5cdGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cucHJvY2VzcyAmJiAod2luZG93LnByb2Nlc3MudHlwZSA9PT0gJ3JlbmRlcmVyJyB8fCB3aW5kb3cucHJvY2Vzcy5fX253anMpKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHQvLyBJbnRlcm5ldCBFeHBsb3JlciBhbmQgRWRnZSBkbyBub3Qgc3VwcG9ydCBjb2xvcnMuXG5cdGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IudXNlckFnZW50ICYmIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5tYXRjaCgvKGVkZ2V8dHJpZGVudClcXC8oXFxkKykvKSkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdC8vIElzIHdlYmtpdD8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTY0NTk2MDYvMzc2NzczXG5cdC8vIGRvY3VtZW50IGlzIHVuZGVmaW5lZCBpbiByZWFjdC1uYXRpdmU6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC1uYXRpdmUvcHVsbC8xNjMyXG5cdHJldHVybiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5XZWJraXRBcHBlYXJhbmNlKSB8fFxuXHRcdC8vIElzIGZpcmVidWc/IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzM5ODEyMC8zNzY3NzNcblx0XHQodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmNvbnNvbGUgJiYgKHdpbmRvdy5jb25zb2xlLmZpcmVidWcgfHwgKHdpbmRvdy5jb25zb2xlLmV4Y2VwdGlvbiAmJiB3aW5kb3cuY29uc29sZS50YWJsZSkpKSB8fFxuXHRcdC8vIElzIGZpcmVmb3ggPj0gdjMxP1xuXHRcdC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvVG9vbHMvV2ViX0NvbnNvbGUjU3R5bGluZ19tZXNzYWdlc1xuXHRcdCh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IudXNlckFnZW50ICYmIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5tYXRjaCgvZmlyZWZveFxcLyhcXGQrKS8pICYmIHBhcnNlSW50KFJlZ0V4cC4kMSwgMTApID49IDMxKSB8fFxuXHRcdC8vIERvdWJsZSBjaGVjayB3ZWJraXQgaW4gdXNlckFnZW50IGp1c3QgaW4gY2FzZSB3ZSBhcmUgaW4gYSB3b3JrZXJcblx0XHQodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudCAmJiBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkubWF0Y2goL2FwcGxld2Via2l0XFwvKFxcZCspLykpO1xufVxuXG4vKipcbiAqIENvbG9yaXplIGxvZyBhcmd1bWVudHMgaWYgZW5hYmxlZC5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGZvcm1hdEFyZ3MoYXJncykge1xuXHRhcmdzWzBdID0gKHRoaXMudXNlQ29sb3JzID8gJyVjJyA6ICcnKSArXG5cdFx0dGhpcy5uYW1lc3BhY2UgK1xuXHRcdCh0aGlzLnVzZUNvbG9ycyA/ICcgJWMnIDogJyAnKSArXG5cdFx0YXJnc1swXSArXG5cdFx0KHRoaXMudXNlQ29sb3JzID8gJyVjICcgOiAnICcpICtcblx0XHQnKycgKyBtb2R1bGUuZXhwb3J0cy5odW1hbml6ZSh0aGlzLmRpZmYpO1xuXG5cdGlmICghdGhpcy51c2VDb2xvcnMpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBjID0gJ2NvbG9yOiAnICsgdGhpcy5jb2xvcjtcblx0YXJncy5zcGxpY2UoMSwgMCwgYywgJ2NvbG9yOiBpbmhlcml0Jyk7XG5cblx0Ly8gVGhlIGZpbmFsIFwiJWNcIiBpcyBzb21ld2hhdCB0cmlja3ksIGJlY2F1c2UgdGhlcmUgY291bGQgYmUgb3RoZXJcblx0Ly8gYXJndW1lbnRzIHBhc3NlZCBlaXRoZXIgYmVmb3JlIG9yIGFmdGVyIHRoZSAlYywgc28gd2UgbmVlZCB0b1xuXHQvLyBmaWd1cmUgb3V0IHRoZSBjb3JyZWN0IGluZGV4IHRvIGluc2VydCB0aGUgQ1NTIGludG9cblx0bGV0IGluZGV4ID0gMDtcblx0bGV0IGxhc3RDID0gMDtcblx0YXJnc1swXS5yZXBsYWNlKC8lW2EtekEtWiVdL2csIG1hdGNoID0+IHtcblx0XHRpZiAobWF0Y2ggPT09ICclJScpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aW5kZXgrKztcblx0XHRpZiAobWF0Y2ggPT09ICclYycpIHtcblx0XHRcdC8vIFdlIG9ubHkgYXJlIGludGVyZXN0ZWQgaW4gdGhlICpsYXN0KiAlY1xuXHRcdFx0Ly8gKHRoZSB1c2VyIG1heSBoYXZlIHByb3ZpZGVkIHRoZWlyIG93bilcblx0XHRcdGxhc3RDID0gaW5kZXg7XG5cdFx0fVxuXHR9KTtcblxuXHRhcmdzLnNwbGljZShsYXN0QywgMCwgYyk7XG59XG5cbi8qKlxuICogSW52b2tlcyBgY29uc29sZS5kZWJ1ZygpYCB3aGVuIGF2YWlsYWJsZS5cbiAqIE5vLW9wIHdoZW4gYGNvbnNvbGUuZGVidWdgIGlzIG5vdCBhIFwiZnVuY3Rpb25cIi5cbiAqIElmIGBjb25zb2xlLmRlYnVnYCBpcyBub3QgYXZhaWxhYmxlLCBmYWxscyBiYWNrXG4gKiB0byBgY29uc29sZS5sb2dgLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cbmV4cG9ydHMubG9nID0gY29uc29sZS5kZWJ1ZyB8fCBjb25zb2xlLmxvZyB8fCAoKCkgPT4ge30pO1xuXG4vKipcbiAqIFNhdmUgYG5hbWVzcGFjZXNgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2VzXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gc2F2ZShuYW1lc3BhY2VzKSB7XG5cdHRyeSB7XG5cdFx0aWYgKG5hbWVzcGFjZXMpIHtcblx0XHRcdGV4cG9ydHMuc3RvcmFnZS5zZXRJdGVtKCdkZWJ1ZycsIG5hbWVzcGFjZXMpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRleHBvcnRzLnN0b3JhZ2UucmVtb3ZlSXRlbSgnZGVidWcnKTtcblx0XHR9XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Ly8gU3dhbGxvd1xuXHRcdC8vIFhYWCAoQFFpeC0pIHNob3VsZCB3ZSBiZSBsb2dnaW5nIHRoZXNlP1xuXHR9XG59XG5cbi8qKlxuICogTG9hZCBgbmFtZXNwYWNlc2AuXG4gKlxuICogQHJldHVybiB7U3RyaW5nfSByZXR1cm5zIHRoZSBwcmV2aW91c2x5IHBlcnNpc3RlZCBkZWJ1ZyBtb2Rlc1xuICogQGFwaSBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGxvYWQoKSB7XG5cdGxldCByO1xuXHR0cnkge1xuXHRcdHIgPSBleHBvcnRzLnN0b3JhZ2UuZ2V0SXRlbSgnZGVidWcnKTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHQvLyBTd2FsbG93XG5cdFx0Ly8gWFhYIChAUWl4LSkgc2hvdWxkIHdlIGJlIGxvZ2dpbmcgdGhlc2U/XG5cdH1cblxuXHQvLyBJZiBkZWJ1ZyBpc24ndCBzZXQgaW4gTFMsIGFuZCB3ZSdyZSBpbiBFbGVjdHJvbiwgdHJ5IHRvIGxvYWQgJERFQlVHXG5cdGlmICghciAmJiB0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgJ2VudicgaW4gcHJvY2Vzcykge1xuXHRcdHIgPSBwcm9jZXNzLmVudi5ERUJVRztcblx0fVxuXG5cdHJldHVybiByO1xufVxuXG4vKipcbiAqIExvY2Fsc3RvcmFnZSBhdHRlbXB0cyB0byByZXR1cm4gdGhlIGxvY2Fsc3RvcmFnZS5cbiAqXG4gKiBUaGlzIGlzIG5lY2Vzc2FyeSBiZWNhdXNlIHNhZmFyaSB0aHJvd3NcbiAqIHdoZW4gYSB1c2VyIGRpc2FibGVzIGNvb2tpZXMvbG9jYWxzdG9yYWdlXG4gKiBhbmQgeW91IGF0dGVtcHQgdG8gYWNjZXNzIGl0LlxuICpcbiAqIEByZXR1cm4ge0xvY2FsU3RvcmFnZX1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGxvY2Fsc3RvcmFnZSgpIHtcblx0dHJ5IHtcblx0XHQvLyBUVk1MS2l0IChBcHBsZSBUViBKUyBSdW50aW1lKSBkb2VzIG5vdCBoYXZlIGEgd2luZG93IG9iamVjdCwganVzdCBsb2NhbFN0b3JhZ2UgaW4gdGhlIGdsb2JhbCBjb250ZXh0XG5cdFx0Ly8gVGhlIEJyb3dzZXIgYWxzbyBoYXMgbG9jYWxTdG9yYWdlIGluIHRoZSBnbG9iYWwgY29udGV4dC5cblx0XHRyZXR1cm4gbG9jYWxTdG9yYWdlO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdC8vIFN3YWxsb3dcblx0XHQvLyBYWFggKEBRaXgtKSBzaG91bGQgd2UgYmUgbG9nZ2luZyB0aGVzZT9cblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY29tbW9uJykoZXhwb3J0cyk7XG5cbmNvbnN0IHtmb3JtYXR0ZXJzfSA9IG1vZHVsZS5leHBvcnRzO1xuXG4vKipcbiAqIE1hcCAlaiB0byBgSlNPTi5zdHJpbmdpZnkoKWAsIHNpbmNlIG5vIFdlYiBJbnNwZWN0b3JzIGRvIHRoYXQgYnkgZGVmYXVsdC5cbiAqL1xuXG5mb3JtYXR0ZXJzLmogPSBmdW5jdGlvbiAodikge1xuXHR0cnkge1xuXHRcdHJldHVybiBKU09OLnN0cmluZ2lmeSh2KTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRyZXR1cm4gJ1tVbmV4cGVjdGVkSlNPTlBhcnNlRXJyb3JdOiAnICsgZXJyb3IubWVzc2FnZTtcblx0fVxufTtcbiIsIlxuLyoqXG4gKiBUaGlzIGlzIHRoZSBjb21tb24gbG9naWMgZm9yIGJvdGggdGhlIE5vZGUuanMgYW5kIHdlYiBicm93c2VyXG4gKiBpbXBsZW1lbnRhdGlvbnMgb2YgYGRlYnVnKClgLlxuICovXG5cbmZ1bmN0aW9uIHNldHVwKGVudikge1xuXHRjcmVhdGVEZWJ1Zy5kZWJ1ZyA9IGNyZWF0ZURlYnVnO1xuXHRjcmVhdGVEZWJ1Zy5kZWZhdWx0ID0gY3JlYXRlRGVidWc7XG5cdGNyZWF0ZURlYnVnLmNvZXJjZSA9IGNvZXJjZTtcblx0Y3JlYXRlRGVidWcuZGlzYWJsZSA9IGRpc2FibGU7XG5cdGNyZWF0ZURlYnVnLmVuYWJsZSA9IGVuYWJsZTtcblx0Y3JlYXRlRGVidWcuZW5hYmxlZCA9IGVuYWJsZWQ7XG5cdGNyZWF0ZURlYnVnLmh1bWFuaXplID0gcmVxdWlyZSgnbXMnKTtcblx0Y3JlYXRlRGVidWcuZGVzdHJveSA9IGRlc3Ryb3k7XG5cblx0T2JqZWN0LmtleXMoZW52KS5mb3JFYWNoKGtleSA9PiB7XG5cdFx0Y3JlYXRlRGVidWdba2V5XSA9IGVudltrZXldO1xuXHR9KTtcblxuXHQvKipcblx0KiBUaGUgY3VycmVudGx5IGFjdGl2ZSBkZWJ1ZyBtb2RlIG5hbWVzLCBhbmQgbmFtZXMgdG8gc2tpcC5cblx0Ki9cblxuXHRjcmVhdGVEZWJ1Zy5uYW1lcyA9IFtdO1xuXHRjcmVhdGVEZWJ1Zy5za2lwcyA9IFtdO1xuXG5cdC8qKlxuXHQqIE1hcCBvZiBzcGVjaWFsIFwiJW5cIiBoYW5kbGluZyBmdW5jdGlvbnMsIGZvciB0aGUgZGVidWcgXCJmb3JtYXRcIiBhcmd1bWVudC5cblx0KlxuXHQqIFZhbGlkIGtleSBuYW1lcyBhcmUgYSBzaW5nbGUsIGxvd2VyIG9yIHVwcGVyLWNhc2UgbGV0dGVyLCBpLmUuIFwiblwiIGFuZCBcIk5cIi5cblx0Ki9cblx0Y3JlYXRlRGVidWcuZm9ybWF0dGVycyA9IHt9O1xuXG5cdC8qKlxuXHQqIFNlbGVjdHMgYSBjb2xvciBmb3IgYSBkZWJ1ZyBuYW1lc3BhY2Vcblx0KiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlIFRoZSBuYW1lc3BhY2Ugc3RyaW5nIGZvciB0aGUgZm9yIHRoZSBkZWJ1ZyBpbnN0YW5jZSB0byBiZSBjb2xvcmVkXG5cdCogQHJldHVybiB7TnVtYmVyfFN0cmluZ30gQW4gQU5TSSBjb2xvciBjb2RlIGZvciB0aGUgZ2l2ZW4gbmFtZXNwYWNlXG5cdCogQGFwaSBwcml2YXRlXG5cdCovXG5cdGZ1bmN0aW9uIHNlbGVjdENvbG9yKG5hbWVzcGFjZSkge1xuXHRcdGxldCBoYXNoID0gMDtcblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbmFtZXNwYWNlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRoYXNoID0gKChoYXNoIDw8IDUpIC0gaGFzaCkgKyBuYW1lc3BhY2UuY2hhckNvZGVBdChpKTtcblx0XHRcdGhhc2ggfD0gMDsgLy8gQ29udmVydCB0byAzMmJpdCBpbnRlZ2VyXG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNyZWF0ZURlYnVnLmNvbG9yc1tNYXRoLmFicyhoYXNoKSAlIGNyZWF0ZURlYnVnLmNvbG9ycy5sZW5ndGhdO1xuXHR9XG5cdGNyZWF0ZURlYnVnLnNlbGVjdENvbG9yID0gc2VsZWN0Q29sb3I7XG5cblx0LyoqXG5cdCogQ3JlYXRlIGEgZGVidWdnZXIgd2l0aCB0aGUgZ2l2ZW4gYG5hbWVzcGFjZWAuXG5cdCpcblx0KiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlXG5cdCogQHJldHVybiB7RnVuY3Rpb259XG5cdCogQGFwaSBwdWJsaWNcblx0Ki9cblx0ZnVuY3Rpb24gY3JlYXRlRGVidWcobmFtZXNwYWNlKSB7XG5cdFx0bGV0IHByZXZUaW1lO1xuXHRcdGxldCBlbmFibGVPdmVycmlkZSA9IG51bGw7XG5cblx0XHRmdW5jdGlvbiBkZWJ1ZyguLi5hcmdzKSB7XG5cdFx0XHQvLyBEaXNhYmxlZD9cblx0XHRcdGlmICghZGVidWcuZW5hYmxlZCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHNlbGYgPSBkZWJ1ZztcblxuXHRcdFx0Ly8gU2V0IGBkaWZmYCB0aW1lc3RhbXBcblx0XHRcdGNvbnN0IGN1cnIgPSBOdW1iZXIobmV3IERhdGUoKSk7XG5cdFx0XHRjb25zdCBtcyA9IGN1cnIgLSAocHJldlRpbWUgfHwgY3Vycik7XG5cdFx0XHRzZWxmLmRpZmYgPSBtcztcblx0XHRcdHNlbGYucHJldiA9IHByZXZUaW1lO1xuXHRcdFx0c2VsZi5jdXJyID0gY3Vycjtcblx0XHRcdHByZXZUaW1lID0gY3VycjtcblxuXHRcdFx0YXJnc1swXSA9IGNyZWF0ZURlYnVnLmNvZXJjZShhcmdzWzBdKTtcblxuXHRcdFx0aWYgKHR5cGVvZiBhcmdzWzBdICE9PSAnc3RyaW5nJykge1xuXHRcdFx0XHQvLyBBbnl0aGluZyBlbHNlIGxldCdzIGluc3BlY3Qgd2l0aCAlT1xuXHRcdFx0XHRhcmdzLnVuc2hpZnQoJyVPJyk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEFwcGx5IGFueSBgZm9ybWF0dGVyc2AgdHJhbnNmb3JtYXRpb25zXG5cdFx0XHRsZXQgaW5kZXggPSAwO1xuXHRcdFx0YXJnc1swXSA9IGFyZ3NbMF0ucmVwbGFjZSgvJShbYS16QS1aJV0pL2csIChtYXRjaCwgZm9ybWF0KSA9PiB7XG5cdFx0XHRcdC8vIElmIHdlIGVuY291bnRlciBhbiBlc2NhcGVkICUgdGhlbiBkb24ndCBpbmNyZWFzZSB0aGUgYXJyYXkgaW5kZXhcblx0XHRcdFx0aWYgKG1hdGNoID09PSAnJSUnKSB7XG5cdFx0XHRcdFx0cmV0dXJuICclJztcblx0XHRcdFx0fVxuXHRcdFx0XHRpbmRleCsrO1xuXHRcdFx0XHRjb25zdCBmb3JtYXR0ZXIgPSBjcmVhdGVEZWJ1Zy5mb3JtYXR0ZXJzW2Zvcm1hdF07XG5cdFx0XHRcdGlmICh0eXBlb2YgZm9ybWF0dGVyID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdFx0Y29uc3QgdmFsID0gYXJnc1tpbmRleF07XG5cdFx0XHRcdFx0bWF0Y2ggPSBmb3JtYXR0ZXIuY2FsbChzZWxmLCB2YWwpO1xuXG5cdFx0XHRcdFx0Ly8gTm93IHdlIG5lZWQgdG8gcmVtb3ZlIGBhcmdzW2luZGV4XWAgc2luY2UgaXQncyBpbmxpbmVkIGluIHRoZSBgZm9ybWF0YFxuXHRcdFx0XHRcdGFyZ3Muc3BsaWNlKGluZGV4LCAxKTtcblx0XHRcdFx0XHRpbmRleC0tO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBtYXRjaDtcblx0XHRcdH0pO1xuXG5cdFx0XHQvLyBBcHBseSBlbnYtc3BlY2lmaWMgZm9ybWF0dGluZyAoY29sb3JzLCBldGMuKVxuXHRcdFx0Y3JlYXRlRGVidWcuZm9ybWF0QXJncy5jYWxsKHNlbGYsIGFyZ3MpO1xuXG5cdFx0XHRjb25zdCBsb2dGbiA9IHNlbGYubG9nIHx8IGNyZWF0ZURlYnVnLmxvZztcblx0XHRcdGxvZ0ZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXHRcdH1cblxuXHRcdGRlYnVnLm5hbWVzcGFjZSA9IG5hbWVzcGFjZTtcblx0XHRkZWJ1Zy51c2VDb2xvcnMgPSBjcmVhdGVEZWJ1Zy51c2VDb2xvcnMoKTtcblx0XHRkZWJ1Zy5jb2xvciA9IGNyZWF0ZURlYnVnLnNlbGVjdENvbG9yKG5hbWVzcGFjZSk7XG5cdFx0ZGVidWcuZXh0ZW5kID0gZXh0ZW5kO1xuXHRcdGRlYnVnLmRlc3Ryb3kgPSBjcmVhdGVEZWJ1Zy5kZXN0cm95OyAvLyBYWFggVGVtcG9yYXJ5LiBXaWxsIGJlIHJlbW92ZWQgaW4gdGhlIG5leHQgbWFqb3IgcmVsZWFzZS5cblxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkZWJ1ZywgJ2VuYWJsZWQnLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcblx0XHRcdGdldDogKCkgPT4gZW5hYmxlT3ZlcnJpZGUgPT09IG51bGwgPyBjcmVhdGVEZWJ1Zy5lbmFibGVkKG5hbWVzcGFjZSkgOiBlbmFibGVPdmVycmlkZSxcblx0XHRcdHNldDogdiA9PiB7XG5cdFx0XHRcdGVuYWJsZU92ZXJyaWRlID0gdjtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdC8vIEVudi1zcGVjaWZpYyBpbml0aWFsaXphdGlvbiBsb2dpYyBmb3IgZGVidWcgaW5zdGFuY2VzXG5cdFx0aWYgKHR5cGVvZiBjcmVhdGVEZWJ1Zy5pbml0ID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRjcmVhdGVEZWJ1Zy5pbml0KGRlYnVnKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZGVidWc7XG5cdH1cblxuXHRmdW5jdGlvbiBleHRlbmQobmFtZXNwYWNlLCBkZWxpbWl0ZXIpIHtcblx0XHRjb25zdCBuZXdEZWJ1ZyA9IGNyZWF0ZURlYnVnKHRoaXMubmFtZXNwYWNlICsgKHR5cGVvZiBkZWxpbWl0ZXIgPT09ICd1bmRlZmluZWQnID8gJzonIDogZGVsaW1pdGVyKSArIG5hbWVzcGFjZSk7XG5cdFx0bmV3RGVidWcubG9nID0gdGhpcy5sb2c7XG5cdFx0cmV0dXJuIG5ld0RlYnVnO1xuXHR9XG5cblx0LyoqXG5cdCogRW5hYmxlcyBhIGRlYnVnIG1vZGUgYnkgbmFtZXNwYWNlcy4gVGhpcyBjYW4gaW5jbHVkZSBtb2Rlc1xuXHQqIHNlcGFyYXRlZCBieSBhIGNvbG9uIGFuZCB3aWxkY2FyZHMuXG5cdCpcblx0KiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlc1xuXHQqIEBhcGkgcHVibGljXG5cdCovXG5cdGZ1bmN0aW9uIGVuYWJsZShuYW1lc3BhY2VzKSB7XG5cdFx0Y3JlYXRlRGVidWcuc2F2ZShuYW1lc3BhY2VzKTtcblxuXHRcdGNyZWF0ZURlYnVnLm5hbWVzID0gW107XG5cdFx0Y3JlYXRlRGVidWcuc2tpcHMgPSBbXTtcblxuXHRcdGxldCBpO1xuXHRcdGNvbnN0IHNwbGl0ID0gKHR5cGVvZiBuYW1lc3BhY2VzID09PSAnc3RyaW5nJyA/IG5hbWVzcGFjZXMgOiAnJykuc3BsaXQoL1tcXHMsXSsvKTtcblx0XHRjb25zdCBsZW4gPSBzcGxpdC5sZW5ndGg7XG5cblx0XHRmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdGlmICghc3BsaXRbaV0pIHtcblx0XHRcdFx0Ly8gaWdub3JlIGVtcHR5IHN0cmluZ3Ncblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdG5hbWVzcGFjZXMgPSBzcGxpdFtpXS5yZXBsYWNlKC9cXCovZywgJy4qPycpO1xuXG5cdFx0XHRpZiAobmFtZXNwYWNlc1swXSA9PT0gJy0nKSB7XG5cdFx0XHRcdGNyZWF0ZURlYnVnLnNraXBzLnB1c2gobmV3IFJlZ0V4cCgnXicgKyBuYW1lc3BhY2VzLnN1YnN0cigxKSArICckJykpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y3JlYXRlRGVidWcubmFtZXMucHVzaChuZXcgUmVnRXhwKCdeJyArIG5hbWVzcGFjZXMgKyAnJCcpKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvKipcblx0KiBEaXNhYmxlIGRlYnVnIG91dHB1dC5cblx0KlxuXHQqIEByZXR1cm4ge1N0cmluZ30gbmFtZXNwYWNlc1xuXHQqIEBhcGkgcHVibGljXG5cdCovXG5cdGZ1bmN0aW9uIGRpc2FibGUoKSB7XG5cdFx0Y29uc3QgbmFtZXNwYWNlcyA9IFtcblx0XHRcdC4uLmNyZWF0ZURlYnVnLm5hbWVzLm1hcCh0b05hbWVzcGFjZSksXG5cdFx0XHQuLi5jcmVhdGVEZWJ1Zy5za2lwcy5tYXAodG9OYW1lc3BhY2UpLm1hcChuYW1lc3BhY2UgPT4gJy0nICsgbmFtZXNwYWNlKVxuXHRcdF0uam9pbignLCcpO1xuXHRcdGNyZWF0ZURlYnVnLmVuYWJsZSgnJyk7XG5cdFx0cmV0dXJuIG5hbWVzcGFjZXM7XG5cdH1cblxuXHQvKipcblx0KiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIG1vZGUgbmFtZSBpcyBlbmFibGVkLCBmYWxzZSBvdGhlcndpc2UuXG5cdCpcblx0KiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuXHQqIEByZXR1cm4ge0Jvb2xlYW59XG5cdCogQGFwaSBwdWJsaWNcblx0Ki9cblx0ZnVuY3Rpb24gZW5hYmxlZChuYW1lKSB7XG5cdFx0aWYgKG5hbWVbbmFtZS5sZW5ndGggLSAxXSA9PT0gJyonKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRsZXQgaTtcblx0XHRsZXQgbGVuO1xuXG5cdFx0Zm9yIChpID0gMCwgbGVuID0gY3JlYXRlRGVidWcuc2tpcHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdGlmIChjcmVhdGVEZWJ1Zy5za2lwc1tpXS50ZXN0KG5hbWUpKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRmb3IgKGkgPSAwLCBsZW4gPSBjcmVhdGVEZWJ1Zy5uYW1lcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0aWYgKGNyZWF0ZURlYnVnLm5hbWVzW2ldLnRlc3QobmFtZSkpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0LyoqXG5cdCogQ29udmVydCByZWdleHAgdG8gbmFtZXNwYWNlXG5cdCpcblx0KiBAcGFyYW0ge1JlZ0V4cH0gcmVneGVwXG5cdCogQHJldHVybiB7U3RyaW5nfSBuYW1lc3BhY2Vcblx0KiBAYXBpIHByaXZhdGVcblx0Ki9cblx0ZnVuY3Rpb24gdG9OYW1lc3BhY2UocmVnZXhwKSB7XG5cdFx0cmV0dXJuIHJlZ2V4cC50b1N0cmluZygpXG5cdFx0XHQuc3Vic3RyaW5nKDIsIHJlZ2V4cC50b1N0cmluZygpLmxlbmd0aCAtIDIpXG5cdFx0XHQucmVwbGFjZSgvXFwuXFwqXFw/JC8sICcqJyk7XG5cdH1cblxuXHQvKipcblx0KiBDb2VyY2UgYHZhbGAuXG5cdCpcblx0KiBAcGFyYW0ge01peGVkfSB2YWxcblx0KiBAcmV0dXJuIHtNaXhlZH1cblx0KiBAYXBpIHByaXZhdGVcblx0Ki9cblx0ZnVuY3Rpb24gY29lcmNlKHZhbCkge1xuXHRcdGlmICh2YWwgaW5zdGFuY2VvZiBFcnJvcikge1xuXHRcdFx0cmV0dXJuIHZhbC5zdGFjayB8fCB2YWwubWVzc2FnZTtcblx0XHR9XG5cdFx0cmV0dXJuIHZhbDtcblx0fVxuXG5cdC8qKlxuXHQqIFhYWCBETyBOT1QgVVNFLiBUaGlzIGlzIGEgdGVtcG9yYXJ5IHN0dWIgZnVuY3Rpb24uXG5cdCogWFhYIEl0IFdJTEwgYmUgcmVtb3ZlZCBpbiB0aGUgbmV4dCBtYWpvciByZWxlYXNlLlxuXHQqL1xuXHRmdW5jdGlvbiBkZXN0cm95KCkge1xuXHRcdGNvbnNvbGUud2FybignSW5zdGFuY2UgbWV0aG9kIGBkZWJ1Zy5kZXN0cm95KClgIGlzIGRlcHJlY2F0ZWQgYW5kIG5vIGxvbmdlciBkb2VzIGFueXRoaW5nLiBJdCB3aWxsIGJlIHJlbW92ZWQgaW4gdGhlIG5leHQgbWFqb3IgdmVyc2lvbiBvZiBgZGVidWdgLicpO1xuXHR9XG5cblx0Y3JlYXRlRGVidWcuZW5hYmxlKGNyZWF0ZURlYnVnLmxvYWQoKSk7XG5cblx0cmV0dXJuIGNyZWF0ZURlYnVnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldHVwO1xuIiwibW9kdWxlLmV4cG9ydHMgPSAoKCkgPT4ge1xuICBpZiAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4gc2VsZjtcbiAgfSBlbHNlIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHdpbmRvdztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xuICB9XG59KSgpO1xuIiwiY29uc3QgU29ja2V0ID0gcmVxdWlyZShcIi4vc29ja2V0XCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICh1cmksIG9wdHMpID0+IG5ldyBTb2NrZXQodXJpLCBvcHRzKTtcblxuLyoqXG4gKiBFeHBvc2UgZGVwcyBmb3IgbGVnYWN5IGNvbXBhdGliaWxpdHlcbiAqIGFuZCBzdGFuZGFsb25lIGJyb3dzZXIgYWNjZXNzLlxuICovXG5cbm1vZHVsZS5leHBvcnRzLlNvY2tldCA9IFNvY2tldDtcbm1vZHVsZS5leHBvcnRzLnByb3RvY29sID0gU29ja2V0LnByb3RvY29sOyAvLyB0aGlzIGlzIGFuIGludFxubW9kdWxlLmV4cG9ydHMuVHJhbnNwb3J0ID0gcmVxdWlyZShcIi4vdHJhbnNwb3J0XCIpO1xubW9kdWxlLmV4cG9ydHMudHJhbnNwb3J0cyA9IHJlcXVpcmUoXCIuL3RyYW5zcG9ydHMvaW5kZXhcIik7XG5tb2R1bGUuZXhwb3J0cy5wYXJzZXIgPSByZXF1aXJlKFwiZW5naW5lLmlvLXBhcnNlclwiKTtcbiIsImNvbnN0IHRyYW5zcG9ydHMgPSByZXF1aXJlKFwiLi90cmFuc3BvcnRzL2luZGV4XCIpO1xuY29uc3QgRW1pdHRlciA9IHJlcXVpcmUoXCJjb21wb25lbnQtZW1pdHRlclwiKTtcbmNvbnN0IGRlYnVnID0gcmVxdWlyZShcImRlYnVnXCIpKFwiZW5naW5lLmlvLWNsaWVudDpzb2NrZXRcIik7XG5jb25zdCBwYXJzZXIgPSByZXF1aXJlKFwiZW5naW5lLmlvLXBhcnNlclwiKTtcbmNvbnN0IHBhcnNldXJpID0gcmVxdWlyZShcInBhcnNldXJpXCIpO1xuY29uc3QgcGFyc2VxcyA9IHJlcXVpcmUoXCJwYXJzZXFzXCIpO1xuXG5jbGFzcyBTb2NrZXQgZXh0ZW5kcyBFbWl0dGVyIHtcbiAgLyoqXG4gICAqIFNvY2tldCBjb25zdHJ1Y3Rvci5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd8T2JqZWN0fSB1cmkgb3Igb3B0aW9uc1xuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cbiAgY29uc3RydWN0b3IodXJpLCBvcHRzID0ge30pIHtcbiAgICBzdXBlcigpO1xuXG4gICAgaWYgKHVyaSAmJiBcIm9iamVjdFwiID09PSB0eXBlb2YgdXJpKSB7XG4gICAgICBvcHRzID0gdXJpO1xuICAgICAgdXJpID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAodXJpKSB7XG4gICAgICB1cmkgPSBwYXJzZXVyaSh1cmkpO1xuICAgICAgb3B0cy5ob3N0bmFtZSA9IHVyaS5ob3N0O1xuICAgICAgb3B0cy5zZWN1cmUgPSB1cmkucHJvdG9jb2wgPT09IFwiaHR0cHNcIiB8fCB1cmkucHJvdG9jb2wgPT09IFwid3NzXCI7XG4gICAgICBvcHRzLnBvcnQgPSB1cmkucG9ydDtcbiAgICAgIGlmICh1cmkucXVlcnkpIG9wdHMucXVlcnkgPSB1cmkucXVlcnk7XG4gICAgfSBlbHNlIGlmIChvcHRzLmhvc3QpIHtcbiAgICAgIG9wdHMuaG9zdG5hbWUgPSBwYXJzZXVyaShvcHRzLmhvc3QpLmhvc3Q7XG4gICAgfVxuXG4gICAgdGhpcy5zZWN1cmUgPVxuICAgICAgbnVsbCAhPSBvcHRzLnNlY3VyZVxuICAgICAgICA/IG9wdHMuc2VjdXJlXG4gICAgICAgIDogdHlwZW9mIGxvY2F0aW9uICE9PSBcInVuZGVmaW5lZFwiICYmIFwiaHR0cHM6XCIgPT09IGxvY2F0aW9uLnByb3RvY29sO1xuXG4gICAgaWYgKG9wdHMuaG9zdG5hbWUgJiYgIW9wdHMucG9ydCkge1xuICAgICAgLy8gaWYgbm8gcG9ydCBpcyBzcGVjaWZpZWQgbWFudWFsbHksIHVzZSB0aGUgcHJvdG9jb2wgZGVmYXVsdFxuICAgICAgb3B0cy5wb3J0ID0gdGhpcy5zZWN1cmUgPyBcIjQ0M1wiIDogXCI4MFwiO1xuICAgIH1cblxuICAgIHRoaXMuaG9zdG5hbWUgPVxuICAgICAgb3B0cy5ob3N0bmFtZSB8fFxuICAgICAgKHR5cGVvZiBsb2NhdGlvbiAhPT0gXCJ1bmRlZmluZWRcIiA/IGxvY2F0aW9uLmhvc3RuYW1lIDogXCJsb2NhbGhvc3RcIik7XG4gICAgdGhpcy5wb3J0ID1cbiAgICAgIG9wdHMucG9ydCB8fFxuICAgICAgKHR5cGVvZiBsb2NhdGlvbiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBsb2NhdGlvbi5wb3J0XG4gICAgICAgID8gbG9jYXRpb24ucG9ydFxuICAgICAgICA6IHRoaXMuc2VjdXJlXG4gICAgICAgID8gNDQzXG4gICAgICAgIDogODApO1xuXG4gICAgdGhpcy50cmFuc3BvcnRzID0gb3B0cy50cmFuc3BvcnRzIHx8IFtcInBvbGxpbmdcIiwgXCJ3ZWJzb2NrZXRcIl07XG4gICAgdGhpcy5yZWFkeVN0YXRlID0gXCJcIjtcbiAgICB0aGlzLndyaXRlQnVmZmVyID0gW107XG4gICAgdGhpcy5wcmV2QnVmZmVyTGVuID0gMDtcblxuICAgIHRoaXMub3B0cyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiL2VuZ2luZS5pb1wiLFxuICAgICAgICBhZ2VudDogZmFsc2UsXG4gICAgICAgIHdpdGhDcmVkZW50aWFsczogZmFsc2UsXG4gICAgICAgIHVwZ3JhZGU6IHRydWUsXG4gICAgICAgIGpzb25wOiB0cnVlLFxuICAgICAgICB0aW1lc3RhbXBQYXJhbTogXCJ0XCIsXG4gICAgICAgIHJlbWVtYmVyVXBncmFkZTogZmFsc2UsXG4gICAgICAgIHJlamVjdFVuYXV0aG9yaXplZDogdHJ1ZSxcbiAgICAgICAgcGVyTWVzc2FnZURlZmxhdGU6IHtcbiAgICAgICAgICB0aHJlc2hvbGQ6IDEwMjRcbiAgICAgICAgfSxcbiAgICAgICAgdHJhbnNwb3J0T3B0aW9uczoge30sXG4gICAgICAgIGNsb3NlT25CZWZvcmV1bmxvYWQ6IHRydWVcbiAgICAgIH0sXG4gICAgICBvcHRzXG4gICAgKTtcblxuICAgIHRoaXMub3B0cy5wYXRoID0gdGhpcy5vcHRzLnBhdGgucmVwbGFjZSgvXFwvJC8sIFwiXCIpICsgXCIvXCI7XG5cbiAgICBpZiAodHlwZW9mIHRoaXMub3B0cy5xdWVyeSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgdGhpcy5vcHRzLnF1ZXJ5ID0gcGFyc2Vxcy5kZWNvZGUodGhpcy5vcHRzLnF1ZXJ5KTtcbiAgICB9XG5cbiAgICAvLyBzZXQgb24gaGFuZHNoYWtlXG4gICAgdGhpcy5pZCA9IG51bGw7XG4gICAgdGhpcy51cGdyYWRlcyA9IG51bGw7XG4gICAgdGhpcy5waW5nSW50ZXJ2YWwgPSBudWxsO1xuICAgIHRoaXMucGluZ1RpbWVvdXQgPSBudWxsO1xuXG4gICAgLy8gc2V0IG9uIGhlYXJ0YmVhdFxuICAgIHRoaXMucGluZ1RpbWVvdXRUaW1lciA9IG51bGw7XG5cbiAgICBpZiAodHlwZW9mIGFkZEV2ZW50TGlzdGVuZXIgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgaWYgKHRoaXMub3B0cy5jbG9zZU9uQmVmb3JldW5sb2FkKSB7XG4gICAgICAgIC8vIEZpcmVmb3ggY2xvc2VzIHRoZSBjb25uZWN0aW9uIHdoZW4gdGhlIFwiYmVmb3JldW5sb2FkXCIgZXZlbnQgaXMgZW1pdHRlZCBidXQgbm90IENocm9tZS4gVGhpcyBldmVudCBsaXN0ZW5lclxuICAgICAgICAvLyBlbnN1cmVzIGV2ZXJ5IGJyb3dzZXIgYmVoYXZlcyB0aGUgc2FtZSAobm8gXCJkaXNjb25uZWN0XCIgZXZlbnQgYXQgdGhlIFNvY2tldC5JTyBsZXZlbCB3aGVuIHRoZSBwYWdlIGlzXG4gICAgICAgIC8vIGNsb3NlZC9yZWxvYWRlZClcbiAgICAgICAgYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICBcImJlZm9yZXVubG9hZFwiLFxuICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnRyYW5zcG9ydCkge1xuICAgICAgICAgICAgICAvLyBzaWxlbnRseSBjbG9zZSB0aGUgdHJhbnNwb3J0XG4gICAgICAgICAgICAgIHRoaXMudHJhbnNwb3J0LnJlbW92ZUFsbExpc3RlbmVycygpO1xuICAgICAgICAgICAgICB0aGlzLnRyYW5zcG9ydC5jbG9zZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZmFsc2VcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmhvc3RuYW1lICE9PSBcImxvY2FsaG9zdFwiKSB7XG4gICAgICAgIHRoaXMub2ZmbGluZUV2ZW50TGlzdGVuZXIgPSAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5vbkNsb3NlKFwidHJhbnNwb3J0IGNsb3NlXCIpO1xuICAgICAgICB9O1xuICAgICAgICBhZGRFdmVudExpc3RlbmVyKFwib2ZmbGluZVwiLCB0aGlzLm9mZmxpbmVFdmVudExpc3RlbmVyLCBmYWxzZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5vcGVuKCk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyB0cmFuc3BvcnQgb2YgdGhlIGdpdmVuIHR5cGUuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB0cmFuc3BvcnQgbmFtZVxuICAgKiBAcmV0dXJuIHtUcmFuc3BvcnR9XG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgY3JlYXRlVHJhbnNwb3J0KG5hbWUpIHtcbiAgICBkZWJ1ZygnY3JlYXRpbmcgdHJhbnNwb3J0IFwiJXNcIicsIG5hbWUpO1xuICAgIGNvbnN0IHF1ZXJ5ID0gY2xvbmUodGhpcy5vcHRzLnF1ZXJ5KTtcblxuICAgIC8vIGFwcGVuZCBlbmdpbmUuaW8gcHJvdG9jb2wgaWRlbnRpZmllclxuICAgIHF1ZXJ5LkVJTyA9IHBhcnNlci5wcm90b2NvbDtcblxuICAgIC8vIHRyYW5zcG9ydCBuYW1lXG4gICAgcXVlcnkudHJhbnNwb3J0ID0gbmFtZTtcblxuICAgIC8vIHNlc3Npb24gaWQgaWYgd2UgYWxyZWFkeSBoYXZlIG9uZVxuICAgIGlmICh0aGlzLmlkKSBxdWVyeS5zaWQgPSB0aGlzLmlkO1xuXG4gICAgY29uc3Qgb3B0cyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICB7fSxcbiAgICAgIHRoaXMub3B0cy50cmFuc3BvcnRPcHRpb25zW25hbWVdLFxuICAgICAgdGhpcy5vcHRzLFxuICAgICAge1xuICAgICAgICBxdWVyeSxcbiAgICAgICAgc29ja2V0OiB0aGlzLFxuICAgICAgICBob3N0bmFtZTogdGhpcy5ob3N0bmFtZSxcbiAgICAgICAgc2VjdXJlOiB0aGlzLnNlY3VyZSxcbiAgICAgICAgcG9ydDogdGhpcy5wb3J0XG4gICAgICB9XG4gICAgKTtcblxuICAgIGRlYnVnKFwib3B0aW9uczogJWpcIiwgb3B0cyk7XG5cbiAgICByZXR1cm4gbmV3IHRyYW5zcG9ydHNbbmFtZV0ob3B0cyk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgdHJhbnNwb3J0IHRvIHVzZSBhbmQgc3RhcnRzIHByb2JlLlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIG9wZW4oKSB7XG4gICAgbGV0IHRyYW5zcG9ydDtcbiAgICBpZiAoXG4gICAgICB0aGlzLm9wdHMucmVtZW1iZXJVcGdyYWRlICYmXG4gICAgICBTb2NrZXQucHJpb3JXZWJzb2NrZXRTdWNjZXNzICYmXG4gICAgICB0aGlzLnRyYW5zcG9ydHMuaW5kZXhPZihcIndlYnNvY2tldFwiKSAhPT0gLTFcbiAgICApIHtcbiAgICAgIHRyYW5zcG9ydCA9IFwid2Vic29ja2V0XCI7XG4gICAgfSBlbHNlIGlmICgwID09PSB0aGlzLnRyYW5zcG9ydHMubGVuZ3RoKSB7XG4gICAgICAvLyBFbWl0IGVycm9yIG9uIG5leHQgdGljayBzbyBpdCBjYW4gYmUgbGlzdGVuZWQgdG9cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmVtaXQoXCJlcnJvclwiLCBcIk5vIHRyYW5zcG9ydHMgYXZhaWxhYmxlXCIpO1xuICAgICAgfSwgMCk7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyYW5zcG9ydCA9IHRoaXMudHJhbnNwb3J0c1swXTtcbiAgICB9XG4gICAgdGhpcy5yZWFkeVN0YXRlID0gXCJvcGVuaW5nXCI7XG5cbiAgICAvLyBSZXRyeSB3aXRoIHRoZSBuZXh0IHRyYW5zcG9ydCBpZiB0aGUgdHJhbnNwb3J0IGlzIGRpc2FibGVkIChqc29ucDogZmFsc2UpXG4gICAgdHJ5IHtcbiAgICAgIHRyYW5zcG9ydCA9IHRoaXMuY3JlYXRlVHJhbnNwb3J0KHRyYW5zcG9ydCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgZGVidWcoXCJlcnJvciB3aGlsZSBjcmVhdGluZyB0cmFuc3BvcnQ6ICVzXCIsIGUpO1xuICAgICAgdGhpcy50cmFuc3BvcnRzLnNoaWZ0KCk7XG4gICAgICB0aGlzLm9wZW4oKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0cmFuc3BvcnQub3BlbigpO1xuICAgIHRoaXMuc2V0VHJhbnNwb3J0KHRyYW5zcG9ydCk7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgY3VycmVudCB0cmFuc3BvcnQuIERpc2FibGVzIHRoZSBleGlzdGluZyBvbmUgKGlmIGFueSkuXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgc2V0VHJhbnNwb3J0KHRyYW5zcG9ydCkge1xuICAgIGRlYnVnKFwic2V0dGluZyB0cmFuc3BvcnQgJXNcIiwgdHJhbnNwb3J0Lm5hbWUpO1xuXG4gICAgaWYgKHRoaXMudHJhbnNwb3J0KSB7XG4gICAgICBkZWJ1ZyhcImNsZWFyaW5nIGV4aXN0aW5nIHRyYW5zcG9ydCAlc1wiLCB0aGlzLnRyYW5zcG9ydC5uYW1lKTtcbiAgICAgIHRoaXMudHJhbnNwb3J0LnJlbW92ZUFsbExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIC8vIHNldCB1cCB0cmFuc3BvcnRcbiAgICB0aGlzLnRyYW5zcG9ydCA9IHRyYW5zcG9ydDtcblxuICAgIC8vIHNldCB1cCB0cmFuc3BvcnQgbGlzdGVuZXJzXG4gICAgdHJhbnNwb3J0XG4gICAgICAub24oXCJkcmFpblwiLCB0aGlzLm9uRHJhaW4uYmluZCh0aGlzKSlcbiAgICAgIC5vbihcInBhY2tldFwiLCB0aGlzLm9uUGFja2V0LmJpbmQodGhpcykpXG4gICAgICAub24oXCJlcnJvclwiLCB0aGlzLm9uRXJyb3IuYmluZCh0aGlzKSlcbiAgICAgIC5vbihcImNsb3NlXCIsICgpID0+IHtcbiAgICAgICAgdGhpcy5vbkNsb3NlKFwidHJhbnNwb3J0IGNsb3NlXCIpO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUHJvYmVzIGEgdHJhbnNwb3J0LlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gdHJhbnNwb3J0IG5hbWVcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBwcm9iZShuYW1lKSB7XG4gICAgZGVidWcoJ3Byb2JpbmcgdHJhbnNwb3J0IFwiJXNcIicsIG5hbWUpO1xuICAgIGxldCB0cmFuc3BvcnQgPSB0aGlzLmNyZWF0ZVRyYW5zcG9ydChuYW1lLCB7IHByb2JlOiAxIH0pO1xuICAgIGxldCBmYWlsZWQgPSBmYWxzZTtcblxuICAgIFNvY2tldC5wcmlvcldlYnNvY2tldFN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgIGNvbnN0IG9uVHJhbnNwb3J0T3BlbiA9ICgpID0+IHtcbiAgICAgIGlmIChmYWlsZWQpIHJldHVybjtcblxuICAgICAgZGVidWcoJ3Byb2JlIHRyYW5zcG9ydCBcIiVzXCIgb3BlbmVkJywgbmFtZSk7XG4gICAgICB0cmFuc3BvcnQuc2VuZChbeyB0eXBlOiBcInBpbmdcIiwgZGF0YTogXCJwcm9iZVwiIH1dKTtcbiAgICAgIHRyYW5zcG9ydC5vbmNlKFwicGFja2V0XCIsIG1zZyA9PiB7XG4gICAgICAgIGlmIChmYWlsZWQpIHJldHVybjtcbiAgICAgICAgaWYgKFwicG9uZ1wiID09PSBtc2cudHlwZSAmJiBcInByb2JlXCIgPT09IG1zZy5kYXRhKSB7XG4gICAgICAgICAgZGVidWcoJ3Byb2JlIHRyYW5zcG9ydCBcIiVzXCIgcG9uZycsIG5hbWUpO1xuICAgICAgICAgIHRoaXMudXBncmFkaW5nID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLmVtaXQoXCJ1cGdyYWRpbmdcIiwgdHJhbnNwb3J0KTtcbiAgICAgICAgICBpZiAoIXRyYW5zcG9ydCkgcmV0dXJuO1xuICAgICAgICAgIFNvY2tldC5wcmlvcldlYnNvY2tldFN1Y2Nlc3MgPSBcIndlYnNvY2tldFwiID09PSB0cmFuc3BvcnQubmFtZTtcblxuICAgICAgICAgIGRlYnVnKCdwYXVzaW5nIGN1cnJlbnQgdHJhbnNwb3J0IFwiJXNcIicsIHRoaXMudHJhbnNwb3J0Lm5hbWUpO1xuICAgICAgICAgIHRoaXMudHJhbnNwb3J0LnBhdXNlKCgpID0+IHtcbiAgICAgICAgICAgIGlmIChmYWlsZWQpIHJldHVybjtcbiAgICAgICAgICAgIGlmIChcImNsb3NlZFwiID09PSB0aGlzLnJlYWR5U3RhdGUpIHJldHVybjtcbiAgICAgICAgICAgIGRlYnVnKFwiY2hhbmdpbmcgdHJhbnNwb3J0IGFuZCBzZW5kaW5nIHVwZ3JhZGUgcGFja2V0XCIpO1xuXG4gICAgICAgICAgICBjbGVhbnVwKCk7XG5cbiAgICAgICAgICAgIHRoaXMuc2V0VHJhbnNwb3J0KHRyYW5zcG9ydCk7XG4gICAgICAgICAgICB0cmFuc3BvcnQuc2VuZChbeyB0eXBlOiBcInVwZ3JhZGVcIiB9XSk7XG4gICAgICAgICAgICB0aGlzLmVtaXQoXCJ1cGdyYWRlXCIsIHRyYW5zcG9ydCk7XG4gICAgICAgICAgICB0cmFuc3BvcnQgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy51cGdyYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuZmx1c2goKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkZWJ1ZygncHJvYmUgdHJhbnNwb3J0IFwiJXNcIiBmYWlsZWQnLCBuYW1lKTtcbiAgICAgICAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IoXCJwcm9iZSBlcnJvclwiKTtcbiAgICAgICAgICBlcnIudHJhbnNwb3J0ID0gdHJhbnNwb3J0Lm5hbWU7XG4gICAgICAgICAgdGhpcy5lbWl0KFwidXBncmFkZUVycm9yXCIsIGVycik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBmcmVlemVUcmFuc3BvcnQoKSB7XG4gICAgICBpZiAoZmFpbGVkKSByZXR1cm47XG5cbiAgICAgIC8vIEFueSBjYWxsYmFjayBjYWxsZWQgYnkgdHJhbnNwb3J0IHNob3VsZCBiZSBpZ25vcmVkIHNpbmNlIG5vd1xuICAgICAgZmFpbGVkID0gdHJ1ZTtcblxuICAgICAgY2xlYW51cCgpO1xuXG4gICAgICB0cmFuc3BvcnQuY2xvc2UoKTtcbiAgICAgIHRyYW5zcG9ydCA9IG51bGw7XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIGFueSBlcnJvciB0aGF0IGhhcHBlbnMgd2hpbGUgcHJvYmluZ1xuICAgIGNvbnN0IG9uZXJyb3IgPSBlcnIgPT4ge1xuICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoXCJwcm9iZSBlcnJvcjogXCIgKyBlcnIpO1xuICAgICAgZXJyb3IudHJhbnNwb3J0ID0gdHJhbnNwb3J0Lm5hbWU7XG5cbiAgICAgIGZyZWV6ZVRyYW5zcG9ydCgpO1xuXG4gICAgICBkZWJ1ZygncHJvYmUgdHJhbnNwb3J0IFwiJXNcIiBmYWlsZWQgYmVjYXVzZSBvZiBlcnJvcjogJXMnLCBuYW1lLCBlcnIpO1xuXG4gICAgICB0aGlzLmVtaXQoXCJ1cGdyYWRlRXJyb3JcIiwgZXJyb3IpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBvblRyYW5zcG9ydENsb3NlKCkge1xuICAgICAgb25lcnJvcihcInRyYW5zcG9ydCBjbG9zZWRcIik7XG4gICAgfVxuXG4gICAgLy8gV2hlbiB0aGUgc29ja2V0IGlzIGNsb3NlZCB3aGlsZSB3ZSdyZSBwcm9iaW5nXG4gICAgZnVuY3Rpb24gb25jbG9zZSgpIHtcbiAgICAgIG9uZXJyb3IoXCJzb2NrZXQgY2xvc2VkXCIpO1xuICAgIH1cblxuICAgIC8vIFdoZW4gdGhlIHNvY2tldCBpcyB1cGdyYWRlZCB3aGlsZSB3ZSdyZSBwcm9iaW5nXG4gICAgZnVuY3Rpb24gb251cGdyYWRlKHRvKSB7XG4gICAgICBpZiAodHJhbnNwb3J0ICYmIHRvLm5hbWUgIT09IHRyYW5zcG9ydC5uYW1lKSB7XG4gICAgICAgIGRlYnVnKCdcIiVzXCIgd29ya3MgLSBhYm9ydGluZyBcIiVzXCInLCB0by5uYW1lLCB0cmFuc3BvcnQubmFtZSk7XG4gICAgICAgIGZyZWV6ZVRyYW5zcG9ydCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJlbW92ZSBhbGwgbGlzdGVuZXJzIG9uIHRoZSB0cmFuc3BvcnQgYW5kIG9uIHNlbGZcbiAgICBjb25zdCBjbGVhbnVwID0gKCkgPT4ge1xuICAgICAgdHJhbnNwb3J0LnJlbW92ZUxpc3RlbmVyKFwib3BlblwiLCBvblRyYW5zcG9ydE9wZW4pO1xuICAgICAgdHJhbnNwb3J0LnJlbW92ZUxpc3RlbmVyKFwiZXJyb3JcIiwgb25lcnJvcik7XG4gICAgICB0cmFuc3BvcnQucmVtb3ZlTGlzdGVuZXIoXCJjbG9zZVwiLCBvblRyYW5zcG9ydENsb3NlKTtcbiAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIoXCJjbG9zZVwiLCBvbmNsb3NlKTtcbiAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIoXCJ1cGdyYWRpbmdcIiwgb251cGdyYWRlKTtcbiAgICB9O1xuXG4gICAgdHJhbnNwb3J0Lm9uY2UoXCJvcGVuXCIsIG9uVHJhbnNwb3J0T3Blbik7XG4gICAgdHJhbnNwb3J0Lm9uY2UoXCJlcnJvclwiLCBvbmVycm9yKTtcbiAgICB0cmFuc3BvcnQub25jZShcImNsb3NlXCIsIG9uVHJhbnNwb3J0Q2xvc2UpO1xuXG4gICAgdGhpcy5vbmNlKFwiY2xvc2VcIiwgb25jbG9zZSk7XG4gICAgdGhpcy5vbmNlKFwidXBncmFkaW5nXCIsIG9udXBncmFkZSk7XG5cbiAgICB0cmFuc3BvcnQub3BlbigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIGNvbm5lY3Rpb24gaXMgZGVlbWVkIG9wZW4uXG4gICAqXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuICBvbk9wZW4oKSB7XG4gICAgZGVidWcoXCJzb2NrZXQgb3BlblwiKTtcbiAgICB0aGlzLnJlYWR5U3RhdGUgPSBcIm9wZW5cIjtcbiAgICBTb2NrZXQucHJpb3JXZWJzb2NrZXRTdWNjZXNzID0gXCJ3ZWJzb2NrZXRcIiA9PT0gdGhpcy50cmFuc3BvcnQubmFtZTtcbiAgICB0aGlzLmVtaXQoXCJvcGVuXCIpO1xuICAgIHRoaXMuZmx1c2goKTtcblxuICAgIC8vIHdlIGNoZWNrIGZvciBgcmVhZHlTdGF0ZWAgaW4gY2FzZSBhbiBgb3BlbmBcbiAgICAvLyBsaXN0ZW5lciBhbHJlYWR5IGNsb3NlZCB0aGUgc29ja2V0XG4gICAgaWYgKFxuICAgICAgXCJvcGVuXCIgPT09IHRoaXMucmVhZHlTdGF0ZSAmJlxuICAgICAgdGhpcy5vcHRzLnVwZ3JhZGUgJiZcbiAgICAgIHRoaXMudHJhbnNwb3J0LnBhdXNlXG4gICAgKSB7XG4gICAgICBkZWJ1ZyhcInN0YXJ0aW5nIHVwZ3JhZGUgcHJvYmVzXCIpO1xuICAgICAgbGV0IGkgPSAwO1xuICAgICAgY29uc3QgbCA9IHRoaXMudXBncmFkZXMubGVuZ3RoO1xuICAgICAgZm9yICg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgdGhpcy5wcm9iZSh0aGlzLnVwZ3JhZGVzW2ldKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlcyBhIHBhY2tldC5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBvblBhY2tldChwYWNrZXQpIHtcbiAgICBpZiAoXG4gICAgICBcIm9wZW5pbmdcIiA9PT0gdGhpcy5yZWFkeVN0YXRlIHx8XG4gICAgICBcIm9wZW5cIiA9PT0gdGhpcy5yZWFkeVN0YXRlIHx8XG4gICAgICBcImNsb3NpbmdcIiA9PT0gdGhpcy5yZWFkeVN0YXRlXG4gICAgKSB7XG4gICAgICBkZWJ1Zygnc29ja2V0IHJlY2VpdmU6IHR5cGUgXCIlc1wiLCBkYXRhIFwiJXNcIicsIHBhY2tldC50eXBlLCBwYWNrZXQuZGF0YSk7XG5cbiAgICAgIHRoaXMuZW1pdChcInBhY2tldFwiLCBwYWNrZXQpO1xuXG4gICAgICAvLyBTb2NrZXQgaXMgbGl2ZSAtIGFueSBwYWNrZXQgY291bnRzXG4gICAgICB0aGlzLmVtaXQoXCJoZWFydGJlYXRcIik7XG5cbiAgICAgIHN3aXRjaCAocGFja2V0LnR5cGUpIHtcbiAgICAgICAgY2FzZSBcIm9wZW5cIjpcbiAgICAgICAgICB0aGlzLm9uSGFuZHNoYWtlKEpTT04ucGFyc2UocGFja2V0LmRhdGEpKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFwicGluZ1wiOlxuICAgICAgICAgIHRoaXMucmVzZXRQaW5nVGltZW91dCgpO1xuICAgICAgICAgIHRoaXMuc2VuZFBhY2tldChcInBvbmdcIik7XG4gICAgICAgICAgdGhpcy5lbWl0KFwicG9uZ1wiKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFwiZXJyb3JcIjpcbiAgICAgICAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IoXCJzZXJ2ZXIgZXJyb3JcIik7XG4gICAgICAgICAgZXJyLmNvZGUgPSBwYWNrZXQuZGF0YTtcbiAgICAgICAgICB0aGlzLm9uRXJyb3IoZXJyKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFwibWVzc2FnZVwiOlxuICAgICAgICAgIHRoaXMuZW1pdChcImRhdGFcIiwgcGFja2V0LmRhdGEpO1xuICAgICAgICAgIHRoaXMuZW1pdChcIm1lc3NhZ2VcIiwgcGFja2V0LmRhdGEpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBkZWJ1ZygncGFja2V0IHJlY2VpdmVkIHdpdGggc29ja2V0IHJlYWR5U3RhdGUgXCIlc1wiJywgdGhpcy5yZWFkeVN0YXRlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIHVwb24gaGFuZHNoYWtlIGNvbXBsZXRpb24uXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBoYW5kc2hha2Ugb2JqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgb25IYW5kc2hha2UoZGF0YSkge1xuICAgIHRoaXMuZW1pdChcImhhbmRzaGFrZVwiLCBkYXRhKTtcbiAgICB0aGlzLmlkID0gZGF0YS5zaWQ7XG4gICAgdGhpcy50cmFuc3BvcnQucXVlcnkuc2lkID0gZGF0YS5zaWQ7XG4gICAgdGhpcy51cGdyYWRlcyA9IHRoaXMuZmlsdGVyVXBncmFkZXMoZGF0YS51cGdyYWRlcyk7XG4gICAgdGhpcy5waW5nSW50ZXJ2YWwgPSBkYXRhLnBpbmdJbnRlcnZhbDtcbiAgICB0aGlzLnBpbmdUaW1lb3V0ID0gZGF0YS5waW5nVGltZW91dDtcbiAgICB0aGlzLm9uT3BlbigpO1xuICAgIC8vIEluIGNhc2Ugb3BlbiBoYW5kbGVyIGNsb3NlcyBzb2NrZXRcbiAgICBpZiAoXCJjbG9zZWRcIiA9PT0gdGhpcy5yZWFkeVN0YXRlKSByZXR1cm47XG4gICAgdGhpcy5yZXNldFBpbmdUaW1lb3V0KCk7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBhbmQgcmVzZXRzIHBpbmcgdGltZW91dCB0aW1lciBiYXNlZCBvbiBzZXJ2ZXIgcGluZ3MuXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgcmVzZXRQaW5nVGltZW91dCgpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5waW5nVGltZW91dFRpbWVyKTtcbiAgICB0aGlzLnBpbmdUaW1lb3V0VGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMub25DbG9zZShcInBpbmcgdGltZW91dFwiKTtcbiAgICB9LCB0aGlzLnBpbmdJbnRlcnZhbCArIHRoaXMucGluZ1RpbWVvdXQpO1xuICAgIGlmICh0aGlzLm9wdHMuYXV0b1VucmVmKSB7XG4gICAgICB0aGlzLnBpbmdUaW1lb3V0VGltZXIudW5yZWYoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIG9uIGBkcmFpbmAgZXZlbnRcbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBvbkRyYWluKCkge1xuICAgIHRoaXMud3JpdGVCdWZmZXIuc3BsaWNlKDAsIHRoaXMucHJldkJ1ZmZlckxlbik7XG5cbiAgICAvLyBzZXR0aW5nIHByZXZCdWZmZXJMZW4gPSAwIGlzIHZlcnkgaW1wb3J0YW50XG4gICAgLy8gZm9yIGV4YW1wbGUsIHdoZW4gdXBncmFkaW5nLCB1cGdyYWRlIHBhY2tldCBpcyBzZW50IG92ZXIsXG4gICAgLy8gYW5kIGEgbm9uemVybyBwcmV2QnVmZmVyTGVuIGNvdWxkIGNhdXNlIHByb2JsZW1zIG9uIGBkcmFpbmBcbiAgICB0aGlzLnByZXZCdWZmZXJMZW4gPSAwO1xuXG4gICAgaWYgKDAgPT09IHRoaXMud3JpdGVCdWZmZXIubGVuZ3RoKSB7XG4gICAgICB0aGlzLmVtaXQoXCJkcmFpblwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5mbHVzaCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBGbHVzaCB3cml0ZSBidWZmZXJzLlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIGZsdXNoKCkge1xuICAgIGlmIChcbiAgICAgIFwiY2xvc2VkXCIgIT09IHRoaXMucmVhZHlTdGF0ZSAmJlxuICAgICAgdGhpcy50cmFuc3BvcnQud3JpdGFibGUgJiZcbiAgICAgICF0aGlzLnVwZ3JhZGluZyAmJlxuICAgICAgdGhpcy53cml0ZUJ1ZmZlci5sZW5ndGhcbiAgICApIHtcbiAgICAgIGRlYnVnKFwiZmx1c2hpbmcgJWQgcGFja2V0cyBpbiBzb2NrZXRcIiwgdGhpcy53cml0ZUJ1ZmZlci5sZW5ndGgpO1xuICAgICAgdGhpcy50cmFuc3BvcnQuc2VuZCh0aGlzLndyaXRlQnVmZmVyKTtcbiAgICAgIC8vIGtlZXAgdHJhY2sgb2YgY3VycmVudCBsZW5ndGggb2Ygd3JpdGVCdWZmZXJcbiAgICAgIC8vIHNwbGljZSB3cml0ZUJ1ZmZlciBhbmQgY2FsbGJhY2tCdWZmZXIgb24gYGRyYWluYFxuICAgICAgdGhpcy5wcmV2QnVmZmVyTGVuID0gdGhpcy53cml0ZUJ1ZmZlci5sZW5ndGg7XG4gICAgICB0aGlzLmVtaXQoXCJmbHVzaFwiKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2VuZHMgYSBtZXNzYWdlLlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZS5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgZnVuY3Rpb24uXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zLlxuICAgKiBAcmV0dXJuIHtTb2NrZXR9IGZvciBjaGFpbmluZy5cbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG4gIHdyaXRlKG1zZywgb3B0aW9ucywgZm4pIHtcbiAgICB0aGlzLnNlbmRQYWNrZXQoXCJtZXNzYWdlXCIsIG1zZywgb3B0aW9ucywgZm4pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2VuZChtc2csIG9wdGlvbnMsIGZuKSB7XG4gICAgdGhpcy5zZW5kUGFja2V0KFwibWVzc2FnZVwiLCBtc2csIG9wdGlvbnMsIGZuKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kcyBhIHBhY2tldC5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IHBhY2tldCB0eXBlLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIGZ1bmN0aW9uLlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIHNlbmRQYWNrZXQodHlwZSwgZGF0YSwgb3B0aW9ucywgZm4pIHtcbiAgICBpZiAoXCJmdW5jdGlvblwiID09PSB0eXBlb2YgZGF0YSkge1xuICAgICAgZm4gPSBkYXRhO1xuICAgICAgZGF0YSA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBpZiAoXCJmdW5jdGlvblwiID09PSB0eXBlb2Ygb3B0aW9ucykge1xuICAgICAgZm4gPSBvcHRpb25zO1xuICAgICAgb3B0aW9ucyA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKFwiY2xvc2luZ1wiID09PSB0aGlzLnJlYWR5U3RhdGUgfHwgXCJjbG9zZWRcIiA9PT0gdGhpcy5yZWFkeVN0YXRlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgb3B0aW9ucy5jb21wcmVzcyA9IGZhbHNlICE9PSBvcHRpb25zLmNvbXByZXNzO1xuXG4gICAgY29uc3QgcGFja2V0ID0ge1xuICAgICAgdHlwZTogdHlwZSxcbiAgICAgIGRhdGE6IGRhdGEsXG4gICAgICBvcHRpb25zOiBvcHRpb25zXG4gICAgfTtcbiAgICB0aGlzLmVtaXQoXCJwYWNrZXRDcmVhdGVcIiwgcGFja2V0KTtcbiAgICB0aGlzLndyaXRlQnVmZmVyLnB1c2gocGFja2V0KTtcbiAgICBpZiAoZm4pIHRoaXMub25jZShcImZsdXNoXCIsIGZuKTtcbiAgICB0aGlzLmZsdXNoKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2xvc2VzIHRoZSBjb25uZWN0aW9uLlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIGNsb3NlKCkge1xuICAgIGNvbnN0IGNsb3NlID0gKCkgPT4ge1xuICAgICAgdGhpcy5vbkNsb3NlKFwiZm9yY2VkIGNsb3NlXCIpO1xuICAgICAgZGVidWcoXCJzb2NrZXQgY2xvc2luZyAtIHRlbGxpbmcgdHJhbnNwb3J0IHRvIGNsb3NlXCIpO1xuICAgICAgdGhpcy50cmFuc3BvcnQuY2xvc2UoKTtcbiAgICB9O1xuXG4gICAgY29uc3QgY2xlYW51cEFuZENsb3NlID0gKCkgPT4ge1xuICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcihcInVwZ3JhZGVcIiwgY2xlYW51cEFuZENsb3NlKTtcbiAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIoXCJ1cGdyYWRlRXJyb3JcIiwgY2xlYW51cEFuZENsb3NlKTtcbiAgICAgIGNsb3NlKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IHdhaXRGb3JVcGdyYWRlID0gKCkgPT4ge1xuICAgICAgLy8gd2FpdCBmb3IgdXBncmFkZSB0byBmaW5pc2ggc2luY2Ugd2UgY2FuJ3Qgc2VuZCBwYWNrZXRzIHdoaWxlIHBhdXNpbmcgYSB0cmFuc3BvcnRcbiAgICAgIHRoaXMub25jZShcInVwZ3JhZGVcIiwgY2xlYW51cEFuZENsb3NlKTtcbiAgICAgIHRoaXMub25jZShcInVwZ3JhZGVFcnJvclwiLCBjbGVhbnVwQW5kQ2xvc2UpO1xuICAgIH07XG5cbiAgICBpZiAoXCJvcGVuaW5nXCIgPT09IHRoaXMucmVhZHlTdGF0ZSB8fCBcIm9wZW5cIiA9PT0gdGhpcy5yZWFkeVN0YXRlKSB7XG4gICAgICB0aGlzLnJlYWR5U3RhdGUgPSBcImNsb3NpbmdcIjtcblxuICAgICAgaWYgKHRoaXMud3JpdGVCdWZmZXIubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMub25jZShcImRyYWluXCIsICgpID0+IHtcbiAgICAgICAgICBpZiAodGhpcy51cGdyYWRpbmcpIHtcbiAgICAgICAgICAgIHdhaXRGb3JVcGdyYWRlKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNsb3NlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy51cGdyYWRpbmcpIHtcbiAgICAgICAgd2FpdEZvclVwZ3JhZGUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNsb3NlKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIHVwb24gdHJhbnNwb3J0IGVycm9yXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgb25FcnJvcihlcnIpIHtcbiAgICBkZWJ1ZyhcInNvY2tldCBlcnJvciAlalwiLCBlcnIpO1xuICAgIFNvY2tldC5wcmlvcldlYnNvY2tldFN1Y2Nlc3MgPSBmYWxzZTtcbiAgICB0aGlzLmVtaXQoXCJlcnJvclwiLCBlcnIpO1xuICAgIHRoaXMub25DbG9zZShcInRyYW5zcG9ydCBlcnJvclwiLCBlcnIpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCB1cG9uIHRyYW5zcG9ydCBjbG9zZS5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBvbkNsb3NlKHJlYXNvbiwgZGVzYykge1xuICAgIGlmIChcbiAgICAgIFwib3BlbmluZ1wiID09PSB0aGlzLnJlYWR5U3RhdGUgfHxcbiAgICAgIFwib3BlblwiID09PSB0aGlzLnJlYWR5U3RhdGUgfHxcbiAgICAgIFwiY2xvc2luZ1wiID09PSB0aGlzLnJlYWR5U3RhdGVcbiAgICApIHtcbiAgICAgIGRlYnVnKCdzb2NrZXQgY2xvc2Ugd2l0aCByZWFzb246IFwiJXNcIicsIHJlYXNvbik7XG5cbiAgICAgIC8vIGNsZWFyIHRpbWVyc1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMucGluZ0ludGVydmFsVGltZXIpO1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMucGluZ1RpbWVvdXRUaW1lcik7XG5cbiAgICAgIC8vIHN0b3AgZXZlbnQgZnJvbSBmaXJpbmcgYWdhaW4gZm9yIHRyYW5zcG9ydFxuICAgICAgdGhpcy50cmFuc3BvcnQucmVtb3ZlQWxsTGlzdGVuZXJzKFwiY2xvc2VcIik7XG5cbiAgICAgIC8vIGVuc3VyZSB0cmFuc3BvcnQgd29uJ3Qgc3RheSBvcGVuXG4gICAgICB0aGlzLnRyYW5zcG9ydC5jbG9zZSgpO1xuXG4gICAgICAvLyBpZ25vcmUgZnVydGhlciB0cmFuc3BvcnQgY29tbXVuaWNhdGlvblxuICAgICAgdGhpcy50cmFuc3BvcnQucmVtb3ZlQWxsTGlzdGVuZXJzKCk7XG5cbiAgICAgIGlmICh0eXBlb2YgcmVtb3ZlRXZlbnRMaXN0ZW5lciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJlbW92ZUV2ZW50TGlzdGVuZXIoXCJvZmZsaW5lXCIsIHRoaXMub2ZmbGluZUV2ZW50TGlzdGVuZXIsIGZhbHNlKTtcbiAgICAgIH1cblxuICAgICAgLy8gc2V0IHJlYWR5IHN0YXRlXG4gICAgICB0aGlzLnJlYWR5U3RhdGUgPSBcImNsb3NlZFwiO1xuXG4gICAgICAvLyBjbGVhciBzZXNzaW9uIGlkXG4gICAgICB0aGlzLmlkID0gbnVsbDtcblxuICAgICAgLy8gZW1pdCBjbG9zZSBldmVudFxuICAgICAgdGhpcy5lbWl0KFwiY2xvc2VcIiwgcmVhc29uLCBkZXNjKTtcblxuICAgICAgLy8gY2xlYW4gYnVmZmVycyBhZnRlciwgc28gdXNlcnMgY2FuIHN0aWxsXG4gICAgICAvLyBncmFiIHRoZSBidWZmZXJzIG9uIGBjbG9zZWAgZXZlbnRcbiAgICAgIHRoaXMud3JpdGVCdWZmZXIgPSBbXTtcbiAgICAgIHRoaXMucHJldkJ1ZmZlckxlbiA9IDA7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEZpbHRlcnMgdXBncmFkZXMsIHJldHVybmluZyBvbmx5IHRob3NlIG1hdGNoaW5nIGNsaWVudCB0cmFuc3BvcnRzLlxuICAgKlxuICAgKiBAcGFyYW0ge0FycmF5fSBzZXJ2ZXIgdXBncmFkZXNcbiAgICogQGFwaSBwcml2YXRlXG4gICAqXG4gICAqL1xuICBmaWx0ZXJVcGdyYWRlcyh1cGdyYWRlcykge1xuICAgIGNvbnN0IGZpbHRlcmVkVXBncmFkZXMgPSBbXTtcbiAgICBsZXQgaSA9IDA7XG4gICAgY29uc3QgaiA9IHVwZ3JhZGVzLmxlbmd0aDtcbiAgICBmb3IgKDsgaSA8IGo7IGkrKykge1xuICAgICAgaWYgKH50aGlzLnRyYW5zcG9ydHMuaW5kZXhPZih1cGdyYWRlc1tpXSkpXG4gICAgICAgIGZpbHRlcmVkVXBncmFkZXMucHVzaCh1cGdyYWRlc1tpXSk7XG4gICAgfVxuICAgIHJldHVybiBmaWx0ZXJlZFVwZ3JhZGVzO1xuICB9XG59XG5cblNvY2tldC5wcmlvcldlYnNvY2tldFN1Y2Nlc3MgPSBmYWxzZTtcblxuLyoqXG4gKiBQcm90b2NvbCB2ZXJzaW9uLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuU29ja2V0LnByb3RvY29sID0gcGFyc2VyLnByb3RvY29sOyAvLyB0aGlzIGlzIGFuIGludFxuXG5mdW5jdGlvbiBjbG9uZShvYmopIHtcbiAgY29uc3QgbyA9IHt9O1xuICBmb3IgKGxldCBpIGluIG9iaikge1xuICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgIG9baV0gPSBvYmpbaV07XG4gICAgfVxuICB9XG4gIHJldHVybiBvO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNvY2tldDtcbiIsImNvbnN0IHBhcnNlciA9IHJlcXVpcmUoXCJlbmdpbmUuaW8tcGFyc2VyXCIpO1xuY29uc3QgRW1pdHRlciA9IHJlcXVpcmUoXCJjb21wb25lbnQtZW1pdHRlclwiKTtcbmNvbnN0IGRlYnVnID0gcmVxdWlyZShcImRlYnVnXCIpKFwiZW5naW5lLmlvLWNsaWVudDp0cmFuc3BvcnRcIik7XG5cbmNsYXNzIFRyYW5zcG9ydCBleHRlbmRzIEVtaXR0ZXIge1xuICAvKipcbiAgICogVHJhbnNwb3J0IGFic3RyYWN0IGNvbnN0cnVjdG9yLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucy5cbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBjb25zdHJ1Y3RvcihvcHRzKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMub3B0cyA9IG9wdHM7XG4gICAgdGhpcy5xdWVyeSA9IG9wdHMucXVlcnk7XG4gICAgdGhpcy5yZWFkeVN0YXRlID0gXCJcIjtcbiAgICB0aGlzLnNvY2tldCA9IG9wdHMuc29ja2V0O1xuICB9XG5cbiAgLyoqXG4gICAqIEVtaXRzIGFuIGVycm9yLlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gICAqIEByZXR1cm4ge1RyYW5zcG9ydH0gZm9yIGNoYWluaW5nXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuICBvbkVycm9yKG1zZywgZGVzYykge1xuICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcihtc2cpO1xuICAgIGVyci50eXBlID0gXCJUcmFuc3BvcnRFcnJvclwiO1xuICAgIGVyci5kZXNjcmlwdGlvbiA9IGRlc2M7XG4gICAgdGhpcy5lbWl0KFwiZXJyb3JcIiwgZXJyKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBPcGVucyB0aGUgdHJhbnNwb3J0LlxuICAgKlxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cbiAgb3BlbigpIHtcbiAgICBpZiAoXCJjbG9zZWRcIiA9PT0gdGhpcy5yZWFkeVN0YXRlIHx8IFwiXCIgPT09IHRoaXMucmVhZHlTdGF0ZSkge1xuICAgICAgdGhpcy5yZWFkeVN0YXRlID0gXCJvcGVuaW5nXCI7XG4gICAgICB0aGlzLmRvT3BlbigpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIENsb3NlcyB0aGUgdHJhbnNwb3J0LlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIGNsb3NlKCkge1xuICAgIGlmIChcIm9wZW5pbmdcIiA9PT0gdGhpcy5yZWFkeVN0YXRlIHx8IFwib3BlblwiID09PSB0aGlzLnJlYWR5U3RhdGUpIHtcbiAgICAgIHRoaXMuZG9DbG9zZSgpO1xuICAgICAgdGhpcy5vbkNsb3NlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogU2VuZHMgbXVsdGlwbGUgcGFja2V0cy5cbiAgICpcbiAgICogQHBhcmFtIHtBcnJheX0gcGFja2V0c1xuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIHNlbmQocGFja2V0cykge1xuICAgIGlmIChcIm9wZW5cIiA9PT0gdGhpcy5yZWFkeVN0YXRlKSB7XG4gICAgICB0aGlzLndyaXRlKHBhY2tldHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyB0aGlzIG1pZ2h0IGhhcHBlbiBpZiB0aGUgdHJhbnNwb3J0IHdhcyBzaWxlbnRseSBjbG9zZWQgaW4gdGhlIGJlZm9yZXVubG9hZCBldmVudCBoYW5kbGVyXG4gICAgICBkZWJ1ZyhcInRyYW5zcG9ydCBpcyBub3Qgb3BlbiwgZGlzY2FyZGluZyBwYWNrZXRzXCIpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgdXBvbiBvcGVuXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgb25PcGVuKCkge1xuICAgIHRoaXMucmVhZHlTdGF0ZSA9IFwib3BlblwiO1xuICAgIHRoaXMud3JpdGFibGUgPSB0cnVlO1xuICAgIHRoaXMuZW1pdChcIm9wZW5cIik7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIHdpdGggZGF0YS5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGFcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBvbkRhdGEoZGF0YSkge1xuICAgIGNvbnN0IHBhY2tldCA9IHBhcnNlci5kZWNvZGVQYWNrZXQoZGF0YSwgdGhpcy5zb2NrZXQuYmluYXJ5VHlwZSk7XG4gICAgdGhpcy5vblBhY2tldChwYWNrZXQpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aXRoIGEgZGVjb2RlZCBwYWNrZXQuXG4gICAqL1xuICBvblBhY2tldChwYWNrZXQpIHtcbiAgICB0aGlzLmVtaXQoXCJwYWNrZXRcIiwgcGFja2V0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgdXBvbiBjbG9zZS5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBvbkNsb3NlKCkge1xuICAgIHRoaXMucmVhZHlTdGF0ZSA9IFwiY2xvc2VkXCI7XG4gICAgdGhpcy5lbWl0KFwiY2xvc2VcIik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUcmFuc3BvcnQ7XG4iLCJjb25zdCBYTUxIdHRwUmVxdWVzdCA9IHJlcXVpcmUoXCIuLi8uLi9jb250cmliL3htbGh0dHByZXF1ZXN0LXNzbC9YTUxIdHRwUmVxdWVzdFwiKTtcbmNvbnN0IFhIUiA9IHJlcXVpcmUoXCIuL3BvbGxpbmcteGhyXCIpO1xuY29uc3QgSlNPTlAgPSByZXF1aXJlKFwiLi9wb2xsaW5nLWpzb25wXCIpO1xuY29uc3Qgd2Vic29ja2V0ID0gcmVxdWlyZShcIi4vd2Vic29ja2V0XCIpO1xuXG5leHBvcnRzLnBvbGxpbmcgPSBwb2xsaW5nO1xuZXhwb3J0cy53ZWJzb2NrZXQgPSB3ZWJzb2NrZXQ7XG5cbi8qKlxuICogUG9sbGluZyB0cmFuc3BvcnQgcG9seW1vcnBoaWMgY29uc3RydWN0b3IuXG4gKiBEZWNpZGVzIG9uIHhociB2cyBqc29ucCBiYXNlZCBvbiBmZWF0dXJlIGRldGVjdGlvbi5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBwb2xsaW5nKG9wdHMpIHtcbiAgbGV0IHhocjtcbiAgbGV0IHhkID0gZmFsc2U7XG4gIGxldCB4cyA9IGZhbHNlO1xuICBjb25zdCBqc29ucCA9IGZhbHNlICE9PSBvcHRzLmpzb25wO1xuXG4gIGlmICh0eXBlb2YgbG9jYXRpb24gIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjb25zdCBpc1NTTCA9IFwiaHR0cHM6XCIgPT09IGxvY2F0aW9uLnByb3RvY29sO1xuICAgIGxldCBwb3J0ID0gbG9jYXRpb24ucG9ydDtcblxuICAgIC8vIHNvbWUgdXNlciBhZ2VudHMgaGF2ZSBlbXB0eSBgbG9jYXRpb24ucG9ydGBcbiAgICBpZiAoIXBvcnQpIHtcbiAgICAgIHBvcnQgPSBpc1NTTCA/IDQ0MyA6IDgwO1xuICAgIH1cblxuICAgIHhkID0gb3B0cy5ob3N0bmFtZSAhPT0gbG9jYXRpb24uaG9zdG5hbWUgfHwgcG9ydCAhPT0gb3B0cy5wb3J0O1xuICAgIHhzID0gb3B0cy5zZWN1cmUgIT09IGlzU1NMO1xuICB9XG5cbiAgb3B0cy54ZG9tYWluID0geGQ7XG4gIG9wdHMueHNjaGVtZSA9IHhzO1xuICB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3Qob3B0cyk7XG5cbiAgaWYgKFwib3BlblwiIGluIHhociAmJiAhb3B0cy5mb3JjZUpTT05QKSB7XG4gICAgcmV0dXJuIG5ldyBYSFIob3B0cyk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCFqc29ucCkgdGhyb3cgbmV3IEVycm9yKFwiSlNPTlAgZGlzYWJsZWRcIik7XG4gICAgcmV0dXJuIG5ldyBKU09OUChvcHRzKTtcbiAgfVxufVxuIiwiY29uc3QgUG9sbGluZyA9IHJlcXVpcmUoXCIuL3BvbGxpbmdcIik7XG5jb25zdCBnbG9iYWxUaGlzID0gcmVxdWlyZShcIi4uL2dsb2JhbFRoaXNcIik7XG5cbmNvbnN0IHJOZXdsaW5lID0gL1xcbi9nO1xuY29uc3QgckVzY2FwZWROZXdsaW5lID0gL1xcXFxuL2c7XG5cbi8qKlxuICogR2xvYmFsIEpTT05QIGNhbGxiYWNrcy5cbiAqL1xuXG5sZXQgY2FsbGJhY2tzO1xuXG5jbGFzcyBKU09OUFBvbGxpbmcgZXh0ZW5kcyBQb2xsaW5nIHtcbiAgLyoqXG4gICAqIEpTT05QIFBvbGxpbmcgY29uc3RydWN0b3IuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzLlxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cbiAgY29uc3RydWN0b3Iob3B0cykge1xuICAgIHN1cGVyKG9wdHMpO1xuXG4gICAgdGhpcy5xdWVyeSA9IHRoaXMucXVlcnkgfHwge307XG5cbiAgICAvLyBkZWZpbmUgZ2xvYmFsIGNhbGxiYWNrcyBhcnJheSBpZiBub3QgcHJlc2VudFxuICAgIC8vIHdlIGRvIHRoaXMgaGVyZSAobGF6aWx5KSB0byBhdm9pZCB1bm5lZWRlZCBnbG9iYWwgcG9sbHV0aW9uXG4gICAgaWYgKCFjYWxsYmFja3MpIHtcbiAgICAgIC8vIHdlIG5lZWQgdG8gY29uc2lkZXIgbXVsdGlwbGUgZW5naW5lcyBpbiB0aGUgc2FtZSBwYWdlXG4gICAgICBjYWxsYmFja3MgPSBnbG9iYWxUaGlzLl9fX2VpbyA9IGdsb2JhbFRoaXMuX19fZWlvIHx8IFtdO1xuICAgIH1cblxuICAgIC8vIGNhbGxiYWNrIGlkZW50aWZpZXJcbiAgICB0aGlzLmluZGV4ID0gY2FsbGJhY2tzLmxlbmd0aDtcblxuICAgIC8vIGFkZCBjYWxsYmFjayB0byBqc29ucCBnbG9iYWxcbiAgICBjYWxsYmFja3MucHVzaCh0aGlzLm9uRGF0YS5iaW5kKHRoaXMpKTtcblxuICAgIC8vIGFwcGVuZCB0byBxdWVyeSBzdHJpbmdcbiAgICB0aGlzLnF1ZXJ5LmogPSB0aGlzLmluZGV4O1xuICB9XG5cbiAgLyoqXG4gICAqIEpTT05QIG9ubHkgc3VwcG9ydHMgYmluYXJ5IGFzIGJhc2U2NCBlbmNvZGVkIHN0cmluZ3NcbiAgICovXG4gIGdldCBzdXBwb3J0c0JpbmFyeSgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogQ2xvc2VzIHRoZSBzb2NrZXQuXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgZG9DbG9zZSgpIHtcbiAgICBpZiAodGhpcy5zY3JpcHQpIHtcbiAgICAgIC8vIHByZXZlbnQgc3B1cmlvdXMgZXJyb3JzIGZyb20gYmVpbmcgZW1pdHRlZCB3aGVuIHRoZSB3aW5kb3cgaXMgdW5sb2FkZWRcbiAgICAgIHRoaXMuc2NyaXB0Lm9uZXJyb3IgPSAoKSA9PiB7fTtcbiAgICAgIHRoaXMuc2NyaXB0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5zY3JpcHQpO1xuICAgICAgdGhpcy5zY3JpcHQgPSBudWxsO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmZvcm0pIHtcbiAgICAgIHRoaXMuZm9ybS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuZm9ybSk7XG4gICAgICB0aGlzLmZvcm0gPSBudWxsO1xuICAgICAgdGhpcy5pZnJhbWUgPSBudWxsO1xuICAgIH1cblxuICAgIHN1cGVyLmRvQ2xvc2UoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdGFydHMgYSBwb2xsIGN5Y2xlLlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIGRvUG9sbCgpIHtcbiAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuXG4gICAgaWYgKHRoaXMuc2NyaXB0KSB7XG4gICAgICB0aGlzLnNjcmlwdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuc2NyaXB0KTtcbiAgICAgIHRoaXMuc2NyaXB0ID0gbnVsbDtcbiAgICB9XG5cbiAgICBzY3JpcHQuYXN5bmMgPSB0cnVlO1xuICAgIHNjcmlwdC5zcmMgPSB0aGlzLnVyaSgpO1xuICAgIHNjcmlwdC5vbmVycm9yID0gZSA9PiB7XG4gICAgICB0aGlzLm9uRXJyb3IoXCJqc29ucCBwb2xsIGVycm9yXCIsIGUpO1xuICAgIH07XG5cbiAgICBjb25zdCBpbnNlcnRBdCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpWzBdO1xuICAgIGlmIChpbnNlcnRBdCkge1xuICAgICAgaW5zZXJ0QXQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoc2NyaXB0LCBpbnNlcnRBdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIChkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmJvZHkpLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgfVxuICAgIHRoaXMuc2NyaXB0ID0gc2NyaXB0O1xuXG4gICAgY29uc3QgaXNVQWdlY2tvID1cbiAgICAgIFwidW5kZWZpbmVkXCIgIT09IHR5cGVvZiBuYXZpZ2F0b3IgJiYgL2dlY2tvL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcblxuICAgIGlmIChpc1VBZ2Vja28pIHtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IGlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICAgICAgfSwgMTAwKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogV3JpdGVzIHdpdGggYSBoaWRkZW4gaWZyYW1lLlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YSB0byBzZW5kXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxlZCB1cG9uIGZsdXNoLlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIGRvV3JpdGUoZGF0YSwgZm4pIHtcbiAgICBsZXQgaWZyYW1lO1xuXG4gICAgaWYgKCF0aGlzLmZvcm0pIHtcbiAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICAgIGNvbnN0IGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gICAgICBjb25zdCBpZCA9ICh0aGlzLmlmcmFtZUlkID0gXCJlaW9faWZyYW1lX1wiICsgdGhpcy5pbmRleCk7XG5cbiAgICAgIGZvcm0uY2xhc3NOYW1lID0gXCJzb2NrZXRpb1wiO1xuICAgICAgZm9ybS5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICAgIGZvcm0uc3R5bGUudG9wID0gXCItMTAwMHB4XCI7XG4gICAgICBmb3JtLnN0eWxlLmxlZnQgPSBcIi0xMDAwcHhcIjtcbiAgICAgIGZvcm0udGFyZ2V0ID0gaWQ7XG4gICAgICBmb3JtLm1ldGhvZCA9IFwiUE9TVFwiO1xuICAgICAgZm9ybS5zZXRBdHRyaWJ1dGUoXCJhY2NlcHQtY2hhcnNldFwiLCBcInV0Zi04XCIpO1xuICAgICAgYXJlYS5uYW1lID0gXCJkXCI7XG4gICAgICBmb3JtLmFwcGVuZENoaWxkKGFyZWEpO1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmb3JtKTtcblxuICAgICAgdGhpcy5mb3JtID0gZm9ybTtcbiAgICAgIHRoaXMuYXJlYSA9IGFyZWE7XG4gICAgfVxuXG4gICAgdGhpcy5mb3JtLmFjdGlvbiA9IHRoaXMudXJpKCk7XG5cbiAgICBmdW5jdGlvbiBjb21wbGV0ZSgpIHtcbiAgICAgIGluaXRJZnJhbWUoKTtcbiAgICAgIGZuKCk7XG4gICAgfVxuXG4gICAgY29uc3QgaW5pdElmcmFtZSA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLmlmcmFtZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHRoaXMuZm9ybS5yZW1vdmVDaGlsZCh0aGlzLmlmcmFtZSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICB0aGlzLm9uRXJyb3IoXCJqc29ucCBwb2xsaW5nIGlmcmFtZSByZW1vdmFsIGVycm9yXCIsIGUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIGllNiBkeW5hbWljIGlmcmFtZXMgd2l0aCB0YXJnZXQ9XCJcIiBzdXBwb3J0ICh0aGFua3MgQ2hyaXMgTGFtYmFjaGVyKVxuICAgICAgICBjb25zdCBodG1sID0gJzxpZnJhbWUgc3JjPVwiamF2YXNjcmlwdDowXCIgbmFtZT1cIicgKyB0aGlzLmlmcmFtZUlkICsgJ1wiPic7XG4gICAgICAgIGlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaHRtbCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7XG4gICAgICAgIGlmcmFtZS5uYW1lID0gdGhpcy5pZnJhbWVJZDtcbiAgICAgICAgaWZyYW1lLnNyYyA9IFwiamF2YXNjcmlwdDowXCI7XG4gICAgICB9XG5cbiAgICAgIGlmcmFtZS5pZCA9IHRoaXMuaWZyYW1lSWQ7XG5cbiAgICAgIHRoaXMuZm9ybS5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICAgICAgdGhpcy5pZnJhbWUgPSBpZnJhbWU7XG4gICAgfTtcblxuICAgIGluaXRJZnJhbWUoKTtcblxuICAgIC8vIGVzY2FwZSBcXG4gdG8gcHJldmVudCBpdCBmcm9tIGJlaW5nIGNvbnZlcnRlZCBpbnRvIFxcclxcbiBieSBzb21lIFVBc1xuICAgIC8vIGRvdWJsZSBlc2NhcGluZyBpcyByZXF1aXJlZCBmb3IgZXNjYXBlZCBuZXcgbGluZXMgYmVjYXVzZSB1bmVzY2FwaW5nIG9mIG5ldyBsaW5lcyBjYW4gYmUgZG9uZSBzYWZlbHkgb24gc2VydmVyLXNpZGVcbiAgICBkYXRhID0gZGF0YS5yZXBsYWNlKHJFc2NhcGVkTmV3bGluZSwgXCJcXFxcXFxuXCIpO1xuICAgIHRoaXMuYXJlYS52YWx1ZSA9IGRhdGEucmVwbGFjZShyTmV3bGluZSwgXCJcXFxcblwiKTtcblxuICAgIHRyeSB7XG4gICAgICB0aGlzLmZvcm0uc3VibWl0KCk7XG4gICAgfSBjYXRjaCAoZSkge31cblxuICAgIGlmICh0aGlzLmlmcmFtZS5hdHRhY2hFdmVudCkge1xuICAgICAgdGhpcy5pZnJhbWUub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5pZnJhbWUucmVhZHlTdGF0ZSA9PT0gXCJjb21wbGV0ZVwiKSB7XG4gICAgICAgICAgY29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pZnJhbWUub25sb2FkID0gY29tcGxldGU7XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gSlNPTlBQb2xsaW5nO1xuIiwiLyogZ2xvYmFsIGF0dGFjaEV2ZW50ICovXG5cbmNvbnN0IFhNTEh0dHBSZXF1ZXN0ID0gcmVxdWlyZShcIi4uLy4uL2NvbnRyaWIveG1saHR0cHJlcXVlc3Qtc3NsL1hNTEh0dHBSZXF1ZXN0XCIpO1xuY29uc3QgUG9sbGluZyA9IHJlcXVpcmUoXCIuL3BvbGxpbmdcIik7XG5jb25zdCBFbWl0dGVyID0gcmVxdWlyZShcImNvbXBvbmVudC1lbWl0dGVyXCIpO1xuY29uc3QgeyBwaWNrIH0gPSByZXF1aXJlKFwiLi4vdXRpbFwiKTtcbmNvbnN0IGdsb2JhbFRoaXMgPSByZXF1aXJlKFwiLi4vZ2xvYmFsVGhpc1wiKTtcblxuY29uc3QgZGVidWcgPSByZXF1aXJlKFwiZGVidWdcIikoXCJlbmdpbmUuaW8tY2xpZW50OnBvbGxpbmcteGhyXCIpO1xuXG4vKipcbiAqIEVtcHR5IGZ1bmN0aW9uXG4gKi9cblxuZnVuY3Rpb24gZW1wdHkoKSB7fVxuXG5jb25zdCBoYXNYSFIyID0gKGZ1bmN0aW9uKCkge1xuICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoeyB4ZG9tYWluOiBmYWxzZSB9KTtcbiAgcmV0dXJuIG51bGwgIT0geGhyLnJlc3BvbnNlVHlwZTtcbn0pKCk7XG5cbmNsYXNzIFhIUiBleHRlbmRzIFBvbGxpbmcge1xuICAvKipcbiAgICogWEhSIFBvbGxpbmcgY29uc3RydWN0b3IuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuICBjb25zdHJ1Y3RvcihvcHRzKSB7XG4gICAgc3VwZXIob3B0cyk7XG5cbiAgICBpZiAodHlwZW9mIGxvY2F0aW9uICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICBjb25zdCBpc1NTTCA9IFwiaHR0cHM6XCIgPT09IGxvY2F0aW9uLnByb3RvY29sO1xuICAgICAgbGV0IHBvcnQgPSBsb2NhdGlvbi5wb3J0O1xuXG4gICAgICAvLyBzb21lIHVzZXIgYWdlbnRzIGhhdmUgZW1wdHkgYGxvY2F0aW9uLnBvcnRgXG4gICAgICBpZiAoIXBvcnQpIHtcbiAgICAgICAgcG9ydCA9IGlzU1NMID8gNDQzIDogODA7XG4gICAgICB9XG5cbiAgICAgIHRoaXMueGQgPVxuICAgICAgICAodHlwZW9mIGxvY2F0aW9uICE9PSBcInVuZGVmaW5lZFwiICYmXG4gICAgICAgICAgb3B0cy5ob3N0bmFtZSAhPT0gbG9jYXRpb24uaG9zdG5hbWUpIHx8XG4gICAgICAgIHBvcnQgIT09IG9wdHMucG9ydDtcbiAgICAgIHRoaXMueHMgPSBvcHRzLnNlY3VyZSAhPT0gaXNTU0w7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFhIUiBzdXBwb3J0cyBiaW5hcnlcbiAgICAgKi9cbiAgICBjb25zdCBmb3JjZUJhc2U2NCA9IG9wdHMgJiYgb3B0cy5mb3JjZUJhc2U2NDtcbiAgICB0aGlzLnN1cHBvcnRzQmluYXJ5ID0gaGFzWEhSMiAmJiAhZm9yY2VCYXNlNjQ7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIHJlcXVlc3QuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBtZXRob2RcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICByZXF1ZXN0KG9wdHMgPSB7fSkge1xuICAgIE9iamVjdC5hc3NpZ24ob3B0cywgeyB4ZDogdGhpcy54ZCwgeHM6IHRoaXMueHMgfSwgdGhpcy5vcHRzKTtcbiAgICByZXR1cm4gbmV3IFJlcXVlc3QodGhpcy51cmkoKSwgb3B0cyk7XG4gIH1cblxuICAvKipcbiAgICogU2VuZHMgZGF0YS5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGEgdG8gc2VuZC5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGVkIHVwb24gZmx1c2guXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgZG9Xcml0ZShkYXRhLCBmbikge1xuICAgIGNvbnN0IHJlcSA9IHRoaXMucmVxdWVzdCh7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgZGF0YTogZGF0YVxuICAgIH0pO1xuICAgIHJlcS5vbihcInN1Y2Nlc3NcIiwgZm4pO1xuICAgIHJlcS5vbihcImVycm9yXCIsIGVyciA9PiB7XG4gICAgICB0aGlzLm9uRXJyb3IoXCJ4aHIgcG9zdCBlcnJvclwiLCBlcnIpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0YXJ0cyBhIHBvbGwgY3ljbGUuXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgZG9Qb2xsKCkge1xuICAgIGRlYnVnKFwieGhyIHBvbGxcIik7XG4gICAgY29uc3QgcmVxID0gdGhpcy5yZXF1ZXN0KCk7XG4gICAgcmVxLm9uKFwiZGF0YVwiLCB0aGlzLm9uRGF0YS5iaW5kKHRoaXMpKTtcbiAgICByZXEub24oXCJlcnJvclwiLCBlcnIgPT4ge1xuICAgICAgdGhpcy5vbkVycm9yKFwieGhyIHBvbGwgZXJyb3JcIiwgZXJyKTtcbiAgICB9KTtcbiAgICB0aGlzLnBvbGxYaHIgPSByZXE7XG4gIH1cbn1cblxuY2xhc3MgUmVxdWVzdCBleHRlbmRzIEVtaXR0ZXIge1xuICAvKipcbiAgICogUmVxdWVzdCBjb25zdHJ1Y3RvclxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cbiAgY29uc3RydWN0b3IodXJpLCBvcHRzKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLm9wdHMgPSBvcHRzO1xuXG4gICAgdGhpcy5tZXRob2QgPSBvcHRzLm1ldGhvZCB8fCBcIkdFVFwiO1xuICAgIHRoaXMudXJpID0gdXJpO1xuICAgIHRoaXMuYXN5bmMgPSBmYWxzZSAhPT0gb3B0cy5hc3luYztcbiAgICB0aGlzLmRhdGEgPSB1bmRlZmluZWQgIT09IG9wdHMuZGF0YSA/IG9wdHMuZGF0YSA6IG51bGw7XG5cbiAgICB0aGlzLmNyZWF0ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgdGhlIFhIUiBvYmplY3QgYW5kIHNlbmRzIHRoZSByZXF1ZXN0LlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIGNyZWF0ZSgpIHtcbiAgICBjb25zdCBvcHRzID0gcGljayhcbiAgICAgIHRoaXMub3B0cyxcbiAgICAgIFwiYWdlbnRcIixcbiAgICAgIFwiZW5hYmxlc1hEUlwiLFxuICAgICAgXCJwZnhcIixcbiAgICAgIFwia2V5XCIsXG4gICAgICBcInBhc3NwaHJhc2VcIixcbiAgICAgIFwiY2VydFwiLFxuICAgICAgXCJjYVwiLFxuICAgICAgXCJjaXBoZXJzXCIsXG4gICAgICBcInJlamVjdFVuYXV0aG9yaXplZFwiLFxuICAgICAgXCJhdXRvVW5yZWZcIlxuICAgICk7XG4gICAgb3B0cy54ZG9tYWluID0gISF0aGlzLm9wdHMueGQ7XG4gICAgb3B0cy54c2NoZW1lID0gISF0aGlzLm9wdHMueHM7XG5cbiAgICBjb25zdCB4aHIgPSAodGhpcy54aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3Qob3B0cykpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGRlYnVnKFwieGhyIG9wZW4gJXM6ICVzXCIsIHRoaXMubWV0aG9kLCB0aGlzLnVyaSk7XG4gICAgICB4aHIub3Blbih0aGlzLm1ldGhvZCwgdGhpcy51cmksIHRoaXMuYXN5bmMpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKHRoaXMub3B0cy5leHRyYUhlYWRlcnMpIHtcbiAgICAgICAgICB4aHIuc2V0RGlzYWJsZUhlYWRlckNoZWNrICYmIHhoci5zZXREaXNhYmxlSGVhZGVyQ2hlY2sodHJ1ZSk7XG4gICAgICAgICAgZm9yIChsZXQgaSBpbiB0aGlzLm9wdHMuZXh0cmFIZWFkZXJzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRzLmV4dHJhSGVhZGVycy5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihpLCB0aGlzLm9wdHMuZXh0cmFIZWFkZXJzW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHt9XG5cbiAgICAgIGlmIChcIlBPU1RcIiA9PT0gdGhpcy5tZXRob2QpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtdHlwZVwiLCBcInRleHQvcGxhaW47Y2hhcnNldD1VVEYtOFwiKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgIH1cblxuICAgICAgdHJ5IHtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJBY2NlcHRcIiwgXCIqLypcIik7XG4gICAgICB9IGNhdGNoIChlKSB7fVxuXG4gICAgICAvLyBpZTYgY2hlY2tcbiAgICAgIGlmIChcIndpdGhDcmVkZW50aWFsc1wiIGluIHhocikge1xuICAgICAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gdGhpcy5vcHRzLndpdGhDcmVkZW50aWFscztcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMub3B0cy5yZXF1ZXN0VGltZW91dCkge1xuICAgICAgICB4aHIudGltZW91dCA9IHRoaXMub3B0cy5yZXF1ZXN0VGltZW91dDtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuaGFzWERSKCkpIHtcbiAgICAgICAgeGhyLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICB0aGlzLm9uTG9hZCgpO1xuICAgICAgICB9O1xuICAgICAgICB4aHIub25lcnJvciA9ICgpID0+IHtcbiAgICAgICAgICB0aGlzLm9uRXJyb3IoeGhyLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xuICAgICAgICAgIGlmICg0ICE9PSB4aHIucmVhZHlTdGF0ZSkgcmV0dXJuO1xuICAgICAgICAgIGlmICgyMDAgPT09IHhoci5zdGF0dXMgfHwgMTIyMyA9PT0geGhyLnN0YXR1cykge1xuICAgICAgICAgICAgdGhpcy5vbkxvYWQoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gbWFrZSBzdXJlIHRoZSBgZXJyb3JgIGV2ZW50IGhhbmRsZXIgdGhhdCdzIHVzZXItc2V0XG4gICAgICAgICAgICAvLyBkb2VzIG5vdCB0aHJvdyBpbiB0aGUgc2FtZSB0aWNrIGFuZCBnZXRzIGNhdWdodCBoZXJlXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5vbkVycm9yKHR5cGVvZiB4aHIuc3RhdHVzID09PSBcIm51bWJlclwiID8geGhyLnN0YXR1cyA6IDApO1xuICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBkZWJ1ZyhcInhociBkYXRhICVzXCIsIHRoaXMuZGF0YSk7XG4gICAgICB4aHIuc2VuZCh0aGlzLmRhdGEpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIE5lZWQgdG8gZGVmZXIgc2luY2UgLmNyZWF0ZSgpIGlzIGNhbGxlZCBkaXJlY3RseSBmcm9tIHRoZSBjb25zdHJ1Y3RvclxuICAgICAgLy8gYW5kIHRodXMgdGhlICdlcnJvcicgZXZlbnQgY2FuIG9ubHkgYmUgb25seSBib3VuZCAqYWZ0ZXIqIHRoaXMgZXhjZXB0aW9uXG4gICAgICAvLyBvY2N1cnMuICBUaGVyZWZvcmUsIGFsc28sIHdlIGNhbm5vdCB0aHJvdyBoZXJlIGF0IGFsbC5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLm9uRXJyb3IoZSk7XG4gICAgICB9LCAwKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICB0aGlzLmluZGV4ID0gUmVxdWVzdC5yZXF1ZXN0c0NvdW50Kys7XG4gICAgICBSZXF1ZXN0LnJlcXVlc3RzW3RoaXMuaW5kZXhdID0gdGhpcztcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIHVwb24gc3VjY2Vzc2Z1bCByZXNwb25zZS5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBvblN1Y2Nlc3MoKSB7XG4gICAgdGhpcy5lbWl0KFwic3VjY2Vzc1wiKTtcbiAgICB0aGlzLmNsZWFudXAoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgaWYgd2UgaGF2ZSBkYXRhLlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIG9uRGF0YShkYXRhKSB7XG4gICAgdGhpcy5lbWl0KFwiZGF0YVwiLCBkYXRhKTtcbiAgICB0aGlzLm9uU3VjY2VzcygpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCB1cG9uIGVycm9yLlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIG9uRXJyb3IoZXJyKSB7XG4gICAgdGhpcy5lbWl0KFwiZXJyb3JcIiwgZXJyKTtcbiAgICB0aGlzLmNsZWFudXAodHJ1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYW5zIHVwIGhvdXNlLlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIGNsZWFudXAoZnJvbUVycm9yKSB7XG4gICAgaWYgKFwidW5kZWZpbmVkXCIgPT09IHR5cGVvZiB0aGlzLnhociB8fCBudWxsID09PSB0aGlzLnhocikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyB4bWxodHRwcmVxdWVzdFxuICAgIGlmICh0aGlzLmhhc1hEUigpKSB7XG4gICAgICB0aGlzLnhoci5vbmxvYWQgPSB0aGlzLnhoci5vbmVycm9yID0gZW1wdHk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMueGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGVtcHR5O1xuICAgIH1cblxuICAgIGlmIChmcm9tRXJyb3IpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMueGhyLmFib3J0KCk7XG4gICAgICB9IGNhdGNoIChlKSB7fVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIGRlbGV0ZSBSZXF1ZXN0LnJlcXVlc3RzW3RoaXMuaW5kZXhdO1xuICAgIH1cblxuICAgIHRoaXMueGhyID0gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgdXBvbiBsb2FkLlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIG9uTG9hZCgpIHtcbiAgICBjb25zdCBkYXRhID0gdGhpcy54aHIucmVzcG9uc2VUZXh0O1xuICAgIGlmIChkYXRhICE9PSBudWxsKSB7XG4gICAgICB0aGlzLm9uRGF0YShkYXRhKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgaXQgaGFzIFhEb21haW5SZXF1ZXN0LlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIGhhc1hEUigpIHtcbiAgICByZXR1cm4gdHlwZW9mIFhEb21haW5SZXF1ZXN0ICE9PSBcInVuZGVmaW5lZFwiICYmICF0aGlzLnhzICYmIHRoaXMuZW5hYmxlc1hEUjtcbiAgfVxuXG4gIC8qKlxuICAgKiBBYm9ydHMgdGhlIHJlcXVlc3QuXG4gICAqXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuICBhYm9ydCgpIHtcbiAgICB0aGlzLmNsZWFudXAoKTtcbiAgfVxufVxuXG4vKipcbiAqIEFib3J0cyBwZW5kaW5nIHJlcXVlc3RzIHdoZW4gdW5sb2FkaW5nIHRoZSB3aW5kb3cuIFRoaXMgaXMgbmVlZGVkIHRvIHByZXZlbnRcbiAqIG1lbW9yeSBsZWFrcyAoZS5nLiB3aGVuIHVzaW5nIElFKSBhbmQgdG8gZW5zdXJlIHRoYXQgbm8gc3B1cmlvdXMgZXJyb3IgaXNcbiAqIGVtaXR0ZWQuXG4gKi9cblxuUmVxdWVzdC5yZXF1ZXN0c0NvdW50ID0gMDtcblJlcXVlc3QucmVxdWVzdHMgPSB7fTtcblxuaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICBpZiAodHlwZW9mIGF0dGFjaEV2ZW50ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBhdHRhY2hFdmVudChcIm9udW5sb2FkXCIsIHVubG9hZEhhbmRsZXIpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhZGRFdmVudExpc3RlbmVyID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBjb25zdCB0ZXJtaW5hdGlvbkV2ZW50ID0gXCJvbnBhZ2VoaWRlXCIgaW4gZ2xvYmFsVGhpcyA/IFwicGFnZWhpZGVcIiA6IFwidW5sb2FkXCI7XG4gICAgYWRkRXZlbnRMaXN0ZW5lcih0ZXJtaW5hdGlvbkV2ZW50LCB1bmxvYWRIYW5kbGVyLCBmYWxzZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdW5sb2FkSGFuZGxlcigpIHtcbiAgZm9yIChsZXQgaSBpbiBSZXF1ZXN0LnJlcXVlc3RzKSB7XG4gICAgaWYgKFJlcXVlc3QucmVxdWVzdHMuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgIFJlcXVlc3QucmVxdWVzdHNbaV0uYWJvcnQoKTtcbiAgICB9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBYSFI7XG5tb2R1bGUuZXhwb3J0cy5SZXF1ZXN0ID0gUmVxdWVzdDtcbiIsImNvbnN0IFRyYW5zcG9ydCA9IHJlcXVpcmUoXCIuLi90cmFuc3BvcnRcIik7XG5jb25zdCBwYXJzZXFzID0gcmVxdWlyZShcInBhcnNlcXNcIik7XG5jb25zdCBwYXJzZXIgPSByZXF1aXJlKFwiZW5naW5lLmlvLXBhcnNlclwiKTtcbmNvbnN0IHllYXN0ID0gcmVxdWlyZShcInllYXN0XCIpO1xuXG5jb25zdCBkZWJ1ZyA9IHJlcXVpcmUoXCJkZWJ1Z1wiKShcImVuZ2luZS5pby1jbGllbnQ6cG9sbGluZ1wiKTtcblxuY2xhc3MgUG9sbGluZyBleHRlbmRzIFRyYW5zcG9ydCB7XG4gIC8qKlxuICAgKiBUcmFuc3BvcnQgbmFtZS5cbiAgICovXG4gIGdldCBuYW1lKCkge1xuICAgIHJldHVybiBcInBvbGxpbmdcIjtcbiAgfVxuXG4gIC8qKlxuICAgKiBPcGVucyB0aGUgc29ja2V0ICh0cmlnZ2VycyBwb2xsaW5nKS4gV2Ugd3JpdGUgYSBQSU5HIG1lc3NhZ2UgdG8gZGV0ZXJtaW5lXG4gICAqIHdoZW4gdGhlIHRyYW5zcG9ydCBpcyBvcGVuLlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIGRvT3BlbigpIHtcbiAgICB0aGlzLnBvbGwoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXVzZXMgcG9sbGluZy5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgdXBvbiBidWZmZXJzIGFyZSBmbHVzaGVkIGFuZCB0cmFuc3BvcnQgaXMgcGF1c2VkXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgcGF1c2Uob25QYXVzZSkge1xuICAgIHRoaXMucmVhZHlTdGF0ZSA9IFwicGF1c2luZ1wiO1xuXG4gICAgY29uc3QgcGF1c2UgPSAoKSA9PiB7XG4gICAgICBkZWJ1ZyhcInBhdXNlZFwiKTtcbiAgICAgIHRoaXMucmVhZHlTdGF0ZSA9IFwicGF1c2VkXCI7XG4gICAgICBvblBhdXNlKCk7XG4gICAgfTtcblxuICAgIGlmICh0aGlzLnBvbGxpbmcgfHwgIXRoaXMud3JpdGFibGUpIHtcbiAgICAgIGxldCB0b3RhbCA9IDA7XG5cbiAgICAgIGlmICh0aGlzLnBvbGxpbmcpIHtcbiAgICAgICAgZGVidWcoXCJ3ZSBhcmUgY3VycmVudGx5IHBvbGxpbmcgLSB3YWl0aW5nIHRvIHBhdXNlXCIpO1xuICAgICAgICB0b3RhbCsrO1xuICAgICAgICB0aGlzLm9uY2UoXCJwb2xsQ29tcGxldGVcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgZGVidWcoXCJwcmUtcGF1c2UgcG9sbGluZyBjb21wbGV0ZVwiKTtcbiAgICAgICAgICAtLXRvdGFsIHx8IHBhdXNlKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMud3JpdGFibGUpIHtcbiAgICAgICAgZGVidWcoXCJ3ZSBhcmUgY3VycmVudGx5IHdyaXRpbmcgLSB3YWl0aW5nIHRvIHBhdXNlXCIpO1xuICAgICAgICB0b3RhbCsrO1xuICAgICAgICB0aGlzLm9uY2UoXCJkcmFpblwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICBkZWJ1ZyhcInByZS1wYXVzZSB3cml0aW5nIGNvbXBsZXRlXCIpO1xuICAgICAgICAgIC0tdG90YWwgfHwgcGF1c2UoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhdXNlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFN0YXJ0cyBwb2xsaW5nIGN5Y2xlLlxuICAgKlxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cbiAgcG9sbCgpIHtcbiAgICBkZWJ1ZyhcInBvbGxpbmdcIik7XG4gICAgdGhpcy5wb2xsaW5nID0gdHJ1ZTtcbiAgICB0aGlzLmRvUG9sbCgpO1xuICAgIHRoaXMuZW1pdChcInBvbGxcIik7XG4gIH1cblxuICAvKipcbiAgICogT3ZlcmxvYWRzIG9uRGF0YSB0byBkZXRlY3QgcGF5bG9hZHMuXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgb25EYXRhKGRhdGEpIHtcbiAgICBkZWJ1ZyhcInBvbGxpbmcgZ290IGRhdGEgJXNcIiwgZGF0YSk7XG4gICAgY29uc3QgY2FsbGJhY2sgPSBwYWNrZXQgPT4ge1xuICAgICAgLy8gaWYgaXRzIHRoZSBmaXJzdCBtZXNzYWdlIHdlIGNvbnNpZGVyIHRoZSB0cmFuc3BvcnQgb3BlblxuICAgICAgaWYgKFwib3BlbmluZ1wiID09PSB0aGlzLnJlYWR5U3RhdGUgJiYgcGFja2V0LnR5cGUgPT09IFwib3BlblwiKSB7XG4gICAgICAgIHRoaXMub25PcGVuKCk7XG4gICAgICB9XG5cbiAgICAgIC8vIGlmIGl0cyBhIGNsb3NlIHBhY2tldCwgd2UgY2xvc2UgdGhlIG9uZ29pbmcgcmVxdWVzdHNcbiAgICAgIGlmIChcImNsb3NlXCIgPT09IHBhY2tldC50eXBlKSB7XG4gICAgICAgIHRoaXMub25DbG9zZSgpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIC8vIG90aGVyd2lzZSBieXBhc3Mgb25EYXRhIGFuZCBoYW5kbGUgdGhlIG1lc3NhZ2VcbiAgICAgIHRoaXMub25QYWNrZXQocGFja2V0KTtcbiAgICB9O1xuXG4gICAgLy8gZGVjb2RlIHBheWxvYWRcbiAgICBwYXJzZXIuZGVjb2RlUGF5bG9hZChkYXRhLCB0aGlzLnNvY2tldC5iaW5hcnlUeXBlKS5mb3JFYWNoKGNhbGxiYWNrKTtcblxuICAgIC8vIGlmIGFuIGV2ZW50IGRpZCBub3QgdHJpZ2dlciBjbG9zaW5nXG4gICAgaWYgKFwiY2xvc2VkXCIgIT09IHRoaXMucmVhZHlTdGF0ZSkge1xuICAgICAgLy8gaWYgd2UgZ290IGRhdGEgd2UncmUgbm90IHBvbGxpbmdcbiAgICAgIHRoaXMucG9sbGluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5lbWl0KFwicG9sbENvbXBsZXRlXCIpO1xuXG4gICAgICBpZiAoXCJvcGVuXCIgPT09IHRoaXMucmVhZHlTdGF0ZSkge1xuICAgICAgICB0aGlzLnBvbGwoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlYnVnKCdpZ25vcmluZyBwb2xsIC0gdHJhbnNwb3J0IHN0YXRlIFwiJXNcIicsIHRoaXMucmVhZHlTdGF0ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEZvciBwb2xsaW5nLCBzZW5kIGEgY2xvc2UgcGFja2V0LlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIGRvQ2xvc2UoKSB7XG4gICAgY29uc3QgY2xvc2UgPSAoKSA9PiB7XG4gICAgICBkZWJ1ZyhcIndyaXRpbmcgY2xvc2UgcGFja2V0XCIpO1xuICAgICAgdGhpcy53cml0ZShbeyB0eXBlOiBcImNsb3NlXCIgfV0pO1xuICAgIH07XG5cbiAgICBpZiAoXCJvcGVuXCIgPT09IHRoaXMucmVhZHlTdGF0ZSkge1xuICAgICAgZGVidWcoXCJ0cmFuc3BvcnQgb3BlbiAtIGNsb3NpbmdcIik7XG4gICAgICBjbG9zZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpbiBjYXNlIHdlJ3JlIHRyeWluZyB0byBjbG9zZSB3aGlsZVxuICAgICAgLy8gaGFuZHNoYWtpbmcgaXMgaW4gcHJvZ3Jlc3MgKEdILTE2NClcbiAgICAgIGRlYnVnKFwidHJhbnNwb3J0IG5vdCBvcGVuIC0gZGVmZXJyaW5nIGNsb3NlXCIpO1xuICAgICAgdGhpcy5vbmNlKFwib3BlblwiLCBjbG9zZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFdyaXRlcyBhIHBhY2tldHMgcGF5bG9hZC5cbiAgICpcbiAgICogQHBhcmFtIHtBcnJheX0gZGF0YSBwYWNrZXRzXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGRyYWluIGNhbGxiYWNrXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgd3JpdGUocGFja2V0cykge1xuICAgIHRoaXMud3JpdGFibGUgPSBmYWxzZTtcblxuICAgIHBhcnNlci5lbmNvZGVQYXlsb2FkKHBhY2tldHMsIGRhdGEgPT4ge1xuICAgICAgdGhpcy5kb1dyaXRlKGRhdGEsICgpID0+IHtcbiAgICAgICAgdGhpcy53cml0YWJsZSA9IHRydWU7XG4gICAgICAgIHRoaXMuZW1pdChcImRyYWluXCIpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogR2VuZXJhdGVzIHVyaSBmb3IgY29ubmVjdGlvbi5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICB1cmkoKSB7XG4gICAgbGV0IHF1ZXJ5ID0gdGhpcy5xdWVyeSB8fCB7fTtcbiAgICBjb25zdCBzY2hlbWEgPSB0aGlzLm9wdHMuc2VjdXJlID8gXCJodHRwc1wiIDogXCJodHRwXCI7XG4gICAgbGV0IHBvcnQgPSBcIlwiO1xuXG4gICAgLy8gY2FjaGUgYnVzdGluZyBpcyBmb3JjZWRcbiAgICBpZiAoZmFsc2UgIT09IHRoaXMub3B0cy50aW1lc3RhbXBSZXF1ZXN0cykge1xuICAgICAgcXVlcnlbdGhpcy5vcHRzLnRpbWVzdGFtcFBhcmFtXSA9IHllYXN0KCk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLnN1cHBvcnRzQmluYXJ5ICYmICFxdWVyeS5zaWQpIHtcbiAgICAgIHF1ZXJ5LmI2NCA9IDE7XG4gICAgfVxuXG4gICAgcXVlcnkgPSBwYXJzZXFzLmVuY29kZShxdWVyeSk7XG5cbiAgICAvLyBhdm9pZCBwb3J0IGlmIGRlZmF1bHQgZm9yIHNjaGVtYVxuICAgIGlmIChcbiAgICAgIHRoaXMub3B0cy5wb3J0ICYmXG4gICAgICAoKFwiaHR0cHNcIiA9PT0gc2NoZW1hICYmIE51bWJlcih0aGlzLm9wdHMucG9ydCkgIT09IDQ0MykgfHxcbiAgICAgICAgKFwiaHR0cFwiID09PSBzY2hlbWEgJiYgTnVtYmVyKHRoaXMub3B0cy5wb3J0KSAhPT0gODApKVxuICAgICkge1xuICAgICAgcG9ydCA9IFwiOlwiICsgdGhpcy5vcHRzLnBvcnQ7XG4gICAgfVxuXG4gICAgLy8gcHJlcGVuZCA/IHRvIHF1ZXJ5XG4gICAgaWYgKHF1ZXJ5Lmxlbmd0aCkge1xuICAgICAgcXVlcnkgPSBcIj9cIiArIHF1ZXJ5O1xuICAgIH1cblxuICAgIGNvbnN0IGlwdjYgPSB0aGlzLm9wdHMuaG9zdG5hbWUuaW5kZXhPZihcIjpcIikgIT09IC0xO1xuICAgIHJldHVybiAoXG4gICAgICBzY2hlbWEgK1xuICAgICAgXCI6Ly9cIiArXG4gICAgICAoaXB2NiA/IFwiW1wiICsgdGhpcy5vcHRzLmhvc3RuYW1lICsgXCJdXCIgOiB0aGlzLm9wdHMuaG9zdG5hbWUpICtcbiAgICAgIHBvcnQgK1xuICAgICAgdGhpcy5vcHRzLnBhdGggK1xuICAgICAgcXVlcnlcbiAgICApO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUG9sbGluZztcbiIsImNvbnN0IGdsb2JhbFRoaXMgPSByZXF1aXJlKFwiLi4vZ2xvYmFsVGhpc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIFdlYlNvY2tldDogZ2xvYmFsVGhpcy5XZWJTb2NrZXQgfHwgZ2xvYmFsVGhpcy5Nb3pXZWJTb2NrZXQsXG4gIHVzaW5nQnJvd3NlcldlYlNvY2tldDogdHJ1ZSxcbiAgZGVmYXVsdEJpbmFyeVR5cGU6IFwiYXJyYXlidWZmZXJcIlxufTtcbiIsImNvbnN0IFRyYW5zcG9ydCA9IHJlcXVpcmUoXCIuLi90cmFuc3BvcnRcIik7XG5jb25zdCBwYXJzZXIgPSByZXF1aXJlKFwiZW5naW5lLmlvLXBhcnNlclwiKTtcbmNvbnN0IHBhcnNlcXMgPSByZXF1aXJlKFwicGFyc2Vxc1wiKTtcbmNvbnN0IHllYXN0ID0gcmVxdWlyZShcInllYXN0XCIpO1xuY29uc3QgeyBwaWNrIH0gPSByZXF1aXJlKFwiLi4vdXRpbFwiKTtcbmNvbnN0IHtcbiAgV2ViU29ja2V0LFxuICB1c2luZ0Jyb3dzZXJXZWJTb2NrZXQsXG4gIGRlZmF1bHRCaW5hcnlUeXBlXG59ID0gcmVxdWlyZShcIi4vd2Vic29ja2V0LWNvbnN0cnVjdG9yXCIpO1xuXG5jb25zdCBkZWJ1ZyA9IHJlcXVpcmUoXCJkZWJ1Z1wiKShcImVuZ2luZS5pby1jbGllbnQ6d2Vic29ja2V0XCIpO1xuXG4vLyBkZXRlY3QgUmVhY3ROYXRpdmUgZW52aXJvbm1lbnRcbmNvbnN0IGlzUmVhY3ROYXRpdmUgPVxuICB0eXBlb2YgbmF2aWdhdG9yICE9PSBcInVuZGVmaW5lZFwiICYmXG4gIHR5cGVvZiBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gXCJzdHJpbmdcIiAmJlxuICBuYXZpZ2F0b3IucHJvZHVjdC50b0xvd2VyQ2FzZSgpID09PSBcInJlYWN0bmF0aXZlXCI7XG5cbmNsYXNzIFdTIGV4dGVuZHMgVHJhbnNwb3J0IHtcbiAgLyoqXG4gICAqIFdlYlNvY2tldCB0cmFuc3BvcnQgY29uc3RydWN0b3IuXG4gICAqXG4gICAqIEBhcGkge09iamVjdH0gY29ubmVjdGlvbiBvcHRpb25zXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuICBjb25zdHJ1Y3RvcihvcHRzKSB7XG4gICAgc3VwZXIob3B0cyk7XG5cbiAgICB0aGlzLnN1cHBvcnRzQmluYXJ5ID0gIW9wdHMuZm9yY2VCYXNlNjQ7XG4gIH1cblxuICAvKipcbiAgICogVHJhbnNwb3J0IG5hbWUuXG4gICAqXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuICBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gXCJ3ZWJzb2NrZXRcIjtcbiAgfVxuXG4gIC8qKlxuICAgKiBPcGVucyBzb2NrZXQuXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgZG9PcGVuKCkge1xuICAgIGlmICghdGhpcy5jaGVjaygpKSB7XG4gICAgICAvLyBsZXQgcHJvYmUgdGltZW91dFxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHVyaSA9IHRoaXMudXJpKCk7XG4gICAgY29uc3QgcHJvdG9jb2xzID0gdGhpcy5vcHRzLnByb3RvY29scztcblxuICAgIC8vIFJlYWN0IE5hdGl2ZSBvbmx5IHN1cHBvcnRzIHRoZSAnaGVhZGVycycgb3B0aW9uLCBhbmQgd2lsbCBwcmludCBhIHdhcm5pbmcgaWYgYW55dGhpbmcgZWxzZSBpcyBwYXNzZWRcbiAgICBjb25zdCBvcHRzID0gaXNSZWFjdE5hdGl2ZVxuICAgICAgPyB7fVxuICAgICAgOiBwaWNrKFxuICAgICAgICAgIHRoaXMub3B0cyxcbiAgICAgICAgICBcImFnZW50XCIsXG4gICAgICAgICAgXCJwZXJNZXNzYWdlRGVmbGF0ZVwiLFxuICAgICAgICAgIFwicGZ4XCIsXG4gICAgICAgICAgXCJrZXlcIixcbiAgICAgICAgICBcInBhc3NwaHJhc2VcIixcbiAgICAgICAgICBcImNlcnRcIixcbiAgICAgICAgICBcImNhXCIsXG4gICAgICAgICAgXCJjaXBoZXJzXCIsXG4gICAgICAgICAgXCJyZWplY3RVbmF1dGhvcml6ZWRcIixcbiAgICAgICAgICBcImxvY2FsQWRkcmVzc1wiLFxuICAgICAgICAgIFwicHJvdG9jb2xWZXJzaW9uXCIsXG4gICAgICAgICAgXCJvcmlnaW5cIixcbiAgICAgICAgICBcIm1heFBheWxvYWRcIixcbiAgICAgICAgICBcImZhbWlseVwiLFxuICAgICAgICAgIFwiY2hlY2tTZXJ2ZXJJZGVudGl0eVwiXG4gICAgICAgICk7XG5cbiAgICBpZiAodGhpcy5vcHRzLmV4dHJhSGVhZGVycykge1xuICAgICAgb3B0cy5oZWFkZXJzID0gdGhpcy5vcHRzLmV4dHJhSGVhZGVycztcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgdGhpcy53cyA9XG4gICAgICAgIHVzaW5nQnJvd3NlcldlYlNvY2tldCAmJiAhaXNSZWFjdE5hdGl2ZVxuICAgICAgICAgID8gcHJvdG9jb2xzXG4gICAgICAgICAgICA/IG5ldyBXZWJTb2NrZXQodXJpLCBwcm90b2NvbHMpXG4gICAgICAgICAgICA6IG5ldyBXZWJTb2NrZXQodXJpKVxuICAgICAgICAgIDogbmV3IFdlYlNvY2tldCh1cmksIHByb3RvY29scywgb3B0cyk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5lbWl0KFwiZXJyb3JcIiwgZXJyKTtcbiAgICB9XG5cbiAgICB0aGlzLndzLmJpbmFyeVR5cGUgPSB0aGlzLnNvY2tldC5iaW5hcnlUeXBlIHx8IGRlZmF1bHRCaW5hcnlUeXBlO1xuXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgZXZlbnQgbGlzdGVuZXJzIHRvIHRoZSBzb2NrZXRcbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICB0aGlzLndzLm9ub3BlbiA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLm9wdHMuYXV0b1VucmVmKSB7XG4gICAgICAgIHRoaXMud3MuX3NvY2tldC51bnJlZigpO1xuICAgICAgfVxuICAgICAgdGhpcy5vbk9wZW4oKTtcbiAgICB9O1xuICAgIHRoaXMud3Mub25jbG9zZSA9IHRoaXMub25DbG9zZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMud3Mub25tZXNzYWdlID0gZXYgPT4gdGhpcy5vbkRhdGEoZXYuZGF0YSk7XG4gICAgdGhpcy53cy5vbmVycm9yID0gZSA9PiB0aGlzLm9uRXJyb3IoXCJ3ZWJzb2NrZXQgZXJyb3JcIiwgZSk7XG4gIH1cblxuICAvKipcbiAgICogV3JpdGVzIGRhdGEgdG8gc29ja2V0LlxuICAgKlxuICAgKiBAcGFyYW0ge0FycmF5fSBhcnJheSBvZiBwYWNrZXRzLlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIHdyaXRlKHBhY2tldHMpIHtcbiAgICB0aGlzLndyaXRhYmxlID0gZmFsc2U7XG5cbiAgICAvLyBlbmNvZGVQYWNrZXQgZWZmaWNpZW50IGFzIGl0IHVzZXMgV1MgZnJhbWluZ1xuICAgIC8vIG5vIG5lZWQgZm9yIGVuY29kZVBheWxvYWRcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhY2tldHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHBhY2tldCA9IHBhY2tldHNbaV07XG4gICAgICBjb25zdCBsYXN0UGFja2V0ID0gaSA9PT0gcGFja2V0cy5sZW5ndGggLSAxO1xuXG4gICAgICBwYXJzZXIuZW5jb2RlUGFja2V0KHBhY2tldCwgdGhpcy5zdXBwb3J0c0JpbmFyeSwgZGF0YSA9PiB7XG4gICAgICAgIC8vIGFsd2F5cyBjcmVhdGUgYSBuZXcgb2JqZWN0IChHSC00MzcpXG4gICAgICAgIGNvbnN0IG9wdHMgPSB7fTtcbiAgICAgICAgaWYgKCF1c2luZ0Jyb3dzZXJXZWJTb2NrZXQpIHtcbiAgICAgICAgICBpZiAocGFja2V0Lm9wdGlvbnMpIHtcbiAgICAgICAgICAgIG9wdHMuY29tcHJlc3MgPSBwYWNrZXQub3B0aW9ucy5jb21wcmVzcztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodGhpcy5vcHRzLnBlck1lc3NhZ2VEZWZsYXRlKSB7XG4gICAgICAgICAgICBjb25zdCBsZW4gPVxuICAgICAgICAgICAgICBcInN0cmluZ1wiID09PSB0eXBlb2YgZGF0YSA/IEJ1ZmZlci5ieXRlTGVuZ3RoKGRhdGEpIDogZGF0YS5sZW5ndGg7XG4gICAgICAgICAgICBpZiAobGVuIDwgdGhpcy5vcHRzLnBlck1lc3NhZ2VEZWZsYXRlLnRocmVzaG9sZCkge1xuICAgICAgICAgICAgICBvcHRzLmNvbXByZXNzID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gU29tZXRpbWVzIHRoZSB3ZWJzb2NrZXQgaGFzIGFscmVhZHkgYmVlbiBjbG9zZWQgYnV0IHRoZSBicm93c2VyIGRpZG4ndFxuICAgICAgICAvLyBoYXZlIGEgY2hhbmNlIG9mIGluZm9ybWluZyB1cyBhYm91dCBpdCB5ZXQsIGluIHRoYXQgY2FzZSBzZW5kIHdpbGxcbiAgICAgICAgLy8gdGhyb3cgYW4gZXJyb3JcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpZiAodXNpbmdCcm93c2VyV2ViU29ja2V0KSB7XG4gICAgICAgICAgICAvLyBUeXBlRXJyb3IgaXMgdGhyb3duIHdoZW4gcGFzc2luZyB0aGUgc2Vjb25kIGFyZ3VtZW50IG9uIFNhZmFyaVxuICAgICAgICAgICAgdGhpcy53cy5zZW5kKGRhdGEpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLndzLnNlbmQoZGF0YSwgb3B0cyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgZGVidWcoXCJ3ZWJzb2NrZXQgY2xvc2VkIGJlZm9yZSBvbmNsb3NlIGV2ZW50XCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGxhc3RQYWNrZXQpIHtcbiAgICAgICAgICAvLyBmYWtlIGRyYWluXG4gICAgICAgICAgLy8gZGVmZXIgdG8gbmV4dCB0aWNrIHRvIGFsbG93IFNvY2tldCB0byBjbGVhciB3cml0ZUJ1ZmZlclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy53cml0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmVtaXQoXCJkcmFpblwiKTtcbiAgICAgICAgICB9LCAwKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCB1cG9uIGNsb3NlXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgb25DbG9zZSgpIHtcbiAgICBUcmFuc3BvcnQucHJvdG90eXBlLm9uQ2xvc2UuY2FsbCh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbG9zZXMgc29ja2V0LlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIGRvQ2xvc2UoKSB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLndzICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICB0aGlzLndzLmNsb3NlKCk7XG4gICAgICB0aGlzLndzID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2VuZXJhdGVzIHVyaSBmb3IgY29ubmVjdGlvbi5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICB1cmkoKSB7XG4gICAgbGV0IHF1ZXJ5ID0gdGhpcy5xdWVyeSB8fCB7fTtcbiAgICBjb25zdCBzY2hlbWEgPSB0aGlzLm9wdHMuc2VjdXJlID8gXCJ3c3NcIiA6IFwid3NcIjtcbiAgICBsZXQgcG9ydCA9IFwiXCI7XG5cbiAgICAvLyBhdm9pZCBwb3J0IGlmIGRlZmF1bHQgZm9yIHNjaGVtYVxuICAgIGlmIChcbiAgICAgIHRoaXMub3B0cy5wb3J0ICYmXG4gICAgICAoKFwid3NzXCIgPT09IHNjaGVtYSAmJiBOdW1iZXIodGhpcy5vcHRzLnBvcnQpICE9PSA0NDMpIHx8XG4gICAgICAgIChcIndzXCIgPT09IHNjaGVtYSAmJiBOdW1iZXIodGhpcy5vcHRzLnBvcnQpICE9PSA4MCkpXG4gICAgKSB7XG4gICAgICBwb3J0ID0gXCI6XCIgKyB0aGlzLm9wdHMucG9ydDtcbiAgICB9XG5cbiAgICAvLyBhcHBlbmQgdGltZXN0YW1wIHRvIFVSSVxuICAgIGlmICh0aGlzLm9wdHMudGltZXN0YW1wUmVxdWVzdHMpIHtcbiAgICAgIHF1ZXJ5W3RoaXMub3B0cy50aW1lc3RhbXBQYXJhbV0gPSB5ZWFzdCgpO1xuICAgIH1cblxuICAgIC8vIGNvbW11bmljYXRlIGJpbmFyeSBzdXBwb3J0IGNhcGFiaWxpdGllc1xuICAgIGlmICghdGhpcy5zdXBwb3J0c0JpbmFyeSkge1xuICAgICAgcXVlcnkuYjY0ID0gMTtcbiAgICB9XG5cbiAgICBxdWVyeSA9IHBhcnNlcXMuZW5jb2RlKHF1ZXJ5KTtcblxuICAgIC8vIHByZXBlbmQgPyB0byBxdWVyeVxuICAgIGlmIChxdWVyeS5sZW5ndGgpIHtcbiAgICAgIHF1ZXJ5ID0gXCI/XCIgKyBxdWVyeTtcbiAgICB9XG5cbiAgICBjb25zdCBpcHY2ID0gdGhpcy5vcHRzLmhvc3RuYW1lLmluZGV4T2YoXCI6XCIpICE9PSAtMTtcbiAgICByZXR1cm4gKFxuICAgICAgc2NoZW1hICtcbiAgICAgIFwiOi8vXCIgK1xuICAgICAgKGlwdjYgPyBcIltcIiArIHRoaXMub3B0cy5ob3N0bmFtZSArIFwiXVwiIDogdGhpcy5vcHRzLmhvc3RuYW1lKSArXG4gICAgICBwb3J0ICtcbiAgICAgIHRoaXMub3B0cy5wYXRoICtcbiAgICAgIHF1ZXJ5XG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGZWF0dXJlIGRldGVjdGlvbiBmb3IgV2ViU29ja2V0LlxuICAgKlxuICAgKiBAcmV0dXJuIHtCb29sZWFufSB3aGV0aGVyIHRoaXMgdHJhbnNwb3J0IGlzIGF2YWlsYWJsZS5cbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG4gIGNoZWNrKCkge1xuICAgIHJldHVybiAoXG4gICAgICAhIVdlYlNvY2tldCAmJlxuICAgICAgIShcIl9faW5pdGlhbGl6ZVwiIGluIFdlYlNvY2tldCAmJiB0aGlzLm5hbWUgPT09IFdTLnByb3RvdHlwZS5uYW1lKVxuICAgICk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBXUztcbiIsIm1vZHVsZS5leHBvcnRzLnBpY2sgPSAob2JqLCAuLi5hdHRyKSA9PiB7XG4gIHJldHVybiBhdHRyLnJlZHVjZSgoYWNjLCBrKSA9PiB7XG4gICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgYWNjW2tdID0gb2JqW2tdO1xuICAgIH1cbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG59O1xuIiwiLy8gYnJvd3NlciBzaGltIGZvciB4bWxodHRwcmVxdWVzdCBtb2R1bGVcblxuY29uc3QgaGFzQ09SUyA9IHJlcXVpcmUoXCJoYXMtY29yc1wiKTtcbmNvbnN0IGdsb2JhbFRoaXMgPSByZXF1aXJlKFwiLi9nbG9iYWxUaGlzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9wdHMpIHtcbiAgY29uc3QgeGRvbWFpbiA9IG9wdHMueGRvbWFpbjtcblxuICAvLyBzY2hlbWUgbXVzdCBiZSBzYW1lIHdoZW4gdXNpZ24gWERvbWFpblJlcXVlc3RcbiAgLy8gaHR0cDovL2Jsb2dzLm1zZG4uY29tL2IvaWVpbnRlcm5hbHMvYXJjaGl2ZS8yMDEwLzA1LzEzL3hkb21haW5yZXF1ZXN0LXJlc3RyaWN0aW9ucy1saW1pdGF0aW9ucy1hbmQtd29ya2Fyb3VuZHMuYXNweFxuICBjb25zdCB4c2NoZW1lID0gb3B0cy54c2NoZW1lO1xuXG4gIC8vIFhEb21haW5SZXF1ZXN0IGhhcyBhIGZsb3cgb2Ygbm90IHNlbmRpbmcgY29va2llLCB0aGVyZWZvcmUgaXQgc2hvdWxkIGJlIGRpc2FibGVkIGFzIGEgZGVmYXVsdC5cbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL0F1dG9tYXR0aWMvZW5naW5lLmlvLWNsaWVudC9wdWxsLzIxN1xuICBjb25zdCBlbmFibGVzWERSID0gb3B0cy5lbmFibGVzWERSO1xuXG4gIC8vIFhNTEh0dHBSZXF1ZXN0IGNhbiBiZSBkaXNhYmxlZCBvbiBJRVxuICB0cnkge1xuICAgIGlmIChcInVuZGVmaW5lZFwiICE9PSB0eXBlb2YgWE1MSHR0cFJlcXVlc3QgJiYgKCF4ZG9tYWluIHx8IGhhc0NPUlMpKSB7XG4gICAgICByZXR1cm4gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgfVxuICB9IGNhdGNoIChlKSB7fVxuXG4gIC8vIFVzZSBYRG9tYWluUmVxdWVzdCBmb3IgSUU4IGlmIGVuYWJsZXNYRFIgaXMgdHJ1ZVxuICAvLyBiZWNhdXNlIGxvYWRpbmcgYmFyIGtlZXBzIGZsYXNoaW5nIHdoZW4gdXNpbmcganNvbnAtcG9sbGluZ1xuICAvLyBodHRwczovL2dpdGh1Yi5jb20veXVqaW9zYWthL3NvY2tlLmlvLWllOC1sb2FkaW5nLWV4YW1wbGVcbiAgdHJ5IHtcbiAgICBpZiAoXCJ1bmRlZmluZWRcIiAhPT0gdHlwZW9mIFhEb21haW5SZXF1ZXN0ICYmICF4c2NoZW1lICYmIGVuYWJsZXNYRFIpIHtcbiAgICAgIHJldHVybiBuZXcgWERvbWFpblJlcXVlc3QoKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHt9XG5cbiAgaWYgKCF4ZG9tYWluKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBuZXcgZ2xvYmFsVGhpc1tbXCJBY3RpdmVcIl0uY29uY2F0KFwiT2JqZWN0XCIpLmpvaW4oXCJYXCIpXShcbiAgICAgICAgXCJNaWNyb3NvZnQuWE1MSFRUUFwiXG4gICAgICApO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cbn07XG4iLCJjb25zdCBQQUNLRVRfVFlQRVMgPSBPYmplY3QuY3JlYXRlKG51bGwpOyAvLyBubyBNYXAgPSBubyBwb2x5ZmlsbFxuUEFDS0VUX1RZUEVTW1wib3BlblwiXSA9IFwiMFwiO1xuUEFDS0VUX1RZUEVTW1wiY2xvc2VcIl0gPSBcIjFcIjtcblBBQ0tFVF9UWVBFU1tcInBpbmdcIl0gPSBcIjJcIjtcblBBQ0tFVF9UWVBFU1tcInBvbmdcIl0gPSBcIjNcIjtcblBBQ0tFVF9UWVBFU1tcIm1lc3NhZ2VcIl0gPSBcIjRcIjtcblBBQ0tFVF9UWVBFU1tcInVwZ3JhZGVcIl0gPSBcIjVcIjtcblBBQ0tFVF9UWVBFU1tcIm5vb3BcIl0gPSBcIjZcIjtcblxuY29uc3QgUEFDS0VUX1RZUEVTX1JFVkVSU0UgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuT2JqZWN0LmtleXMoUEFDS0VUX1RZUEVTKS5mb3JFYWNoKGtleSA9PiB7XG4gIFBBQ0tFVF9UWVBFU19SRVZFUlNFW1BBQ0tFVF9UWVBFU1trZXldXSA9IGtleTtcbn0pO1xuXG5jb25zdCBFUlJPUl9QQUNLRVQgPSB7IHR5cGU6IFwiZXJyb3JcIiwgZGF0YTogXCJwYXJzZXIgZXJyb3JcIiB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgUEFDS0VUX1RZUEVTLFxuICBQQUNLRVRfVFlQRVNfUkVWRVJTRSxcbiAgRVJST1JfUEFDS0VUXG59O1xuIiwiY29uc3QgeyBQQUNLRVRfVFlQRVNfUkVWRVJTRSwgRVJST1JfUEFDS0VUIH0gPSByZXF1aXJlKFwiLi9jb21tb25zXCIpO1xuXG5jb25zdCB3aXRoTmF0aXZlQXJyYXlCdWZmZXIgPSB0eXBlb2YgQXJyYXlCdWZmZXIgPT09IFwiZnVuY3Rpb25cIjtcblxubGV0IGJhc2U2NGRlY29kZXI7XG5pZiAod2l0aE5hdGl2ZUFycmF5QnVmZmVyKSB7XG4gIGJhc2U2NGRlY29kZXIgPSByZXF1aXJlKFwiYmFzZTY0LWFycmF5YnVmZmVyXCIpO1xufVxuXG5jb25zdCBkZWNvZGVQYWNrZXQgPSAoZW5jb2RlZFBhY2tldCwgYmluYXJ5VHlwZSkgPT4ge1xuICBpZiAodHlwZW9mIGVuY29kZWRQYWNrZXQgIT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogXCJtZXNzYWdlXCIsXG4gICAgICBkYXRhOiBtYXBCaW5hcnkoZW5jb2RlZFBhY2tldCwgYmluYXJ5VHlwZSlcbiAgICB9O1xuICB9XG4gIGNvbnN0IHR5cGUgPSBlbmNvZGVkUGFja2V0LmNoYXJBdCgwKTtcbiAgaWYgKHR5cGUgPT09IFwiYlwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IFwibWVzc2FnZVwiLFxuICAgICAgZGF0YTogZGVjb2RlQmFzZTY0UGFja2V0KGVuY29kZWRQYWNrZXQuc3Vic3RyaW5nKDEpLCBiaW5hcnlUeXBlKVxuICAgIH07XG4gIH1cbiAgY29uc3QgcGFja2V0VHlwZSA9IFBBQ0tFVF9UWVBFU19SRVZFUlNFW3R5cGVdO1xuICBpZiAoIXBhY2tldFR5cGUpIHtcbiAgICByZXR1cm4gRVJST1JfUEFDS0VUO1xuICB9XG4gIHJldHVybiBlbmNvZGVkUGFja2V0Lmxlbmd0aCA+IDFcbiAgICA/IHtcbiAgICAgICAgdHlwZTogUEFDS0VUX1RZUEVTX1JFVkVSU0VbdHlwZV0sXG4gICAgICAgIGRhdGE6IGVuY29kZWRQYWNrZXQuc3Vic3RyaW5nKDEpXG4gICAgICB9XG4gICAgOiB7XG4gICAgICAgIHR5cGU6IFBBQ0tFVF9UWVBFU19SRVZFUlNFW3R5cGVdXG4gICAgICB9O1xufTtcblxuY29uc3QgZGVjb2RlQmFzZTY0UGFja2V0ID0gKGRhdGEsIGJpbmFyeVR5cGUpID0+IHtcbiAgaWYgKGJhc2U2NGRlY29kZXIpIHtcbiAgICBjb25zdCBkZWNvZGVkID0gYmFzZTY0ZGVjb2Rlci5kZWNvZGUoZGF0YSk7XG4gICAgcmV0dXJuIG1hcEJpbmFyeShkZWNvZGVkLCBiaW5hcnlUeXBlKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geyBiYXNlNjQ6IHRydWUsIGRhdGEgfTsgLy8gZmFsbGJhY2sgZm9yIG9sZCBicm93c2Vyc1xuICB9XG59O1xuXG5jb25zdCBtYXBCaW5hcnkgPSAoZGF0YSwgYmluYXJ5VHlwZSkgPT4ge1xuICBzd2l0Y2ggKGJpbmFyeVR5cGUpIHtcbiAgICBjYXNlIFwiYmxvYlwiOlxuICAgICAgcmV0dXJuIGRhdGEgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlciA/IG5ldyBCbG9iKFtkYXRhXSkgOiBkYXRhO1xuICAgIGNhc2UgXCJhcnJheWJ1ZmZlclwiOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZGF0YTsgLy8gYXNzdW1pbmcgdGhlIGRhdGEgaXMgYWxyZWFkeSBhbiBBcnJheUJ1ZmZlclxuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRlY29kZVBhY2tldDtcbiIsImNvbnN0IHsgUEFDS0VUX1RZUEVTIH0gPSByZXF1aXJlKFwiLi9jb21tb25zXCIpO1xuXG5jb25zdCB3aXRoTmF0aXZlQmxvYiA9XG4gIHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgfHxcbiAgKHR5cGVvZiBCbG9iICE9PSBcInVuZGVmaW5lZFwiICYmXG4gICAgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKEJsb2IpID09PSBcIltvYmplY3QgQmxvYkNvbnN0cnVjdG9yXVwiKTtcbmNvbnN0IHdpdGhOYXRpdmVBcnJheUJ1ZmZlciA9IHR5cGVvZiBBcnJheUJ1ZmZlciA9PT0gXCJmdW5jdGlvblwiO1xuXG4vLyBBcnJheUJ1ZmZlci5pc1ZpZXcgbWV0aG9kIGlzIG5vdCBkZWZpbmVkIGluIElFMTBcbmNvbnN0IGlzVmlldyA9IG9iaiA9PiB7XG4gIHJldHVybiB0eXBlb2YgQXJyYXlCdWZmZXIuaXNWaWV3ID09PSBcImZ1bmN0aW9uXCJcbiAgICA/IEFycmF5QnVmZmVyLmlzVmlldyhvYmopXG4gICAgOiBvYmogJiYgb2JqLmJ1ZmZlciBpbnN0YW5jZW9mIEFycmF5QnVmZmVyO1xufTtcblxuY29uc3QgZW5jb2RlUGFja2V0ID0gKHsgdHlwZSwgZGF0YSB9LCBzdXBwb3J0c0JpbmFyeSwgY2FsbGJhY2spID0+IHtcbiAgaWYgKHdpdGhOYXRpdmVCbG9iICYmIGRhdGEgaW5zdGFuY2VvZiBCbG9iKSB7XG4gICAgaWYgKHN1cHBvcnRzQmluYXJ5KSB7XG4gICAgICByZXR1cm4gY2FsbGJhY2soZGF0YSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBlbmNvZGVCbG9iQXNCYXNlNjQoZGF0YSwgY2FsbGJhY2spO1xuICAgIH1cbiAgfSBlbHNlIGlmIChcbiAgICB3aXRoTmF0aXZlQXJyYXlCdWZmZXIgJiZcbiAgICAoZGF0YSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyIHx8IGlzVmlldyhkYXRhKSlcbiAgKSB7XG4gICAgaWYgKHN1cHBvcnRzQmluYXJ5KSB7XG4gICAgICByZXR1cm4gY2FsbGJhY2soZGF0YSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyID8gZGF0YSA6IGRhdGEuYnVmZmVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGVuY29kZUJsb2JBc0Jhc2U2NChuZXcgQmxvYihbZGF0YV0pLCBjYWxsYmFjayk7XG4gICAgfVxuICB9XG4gIC8vIHBsYWluIHN0cmluZ1xuICByZXR1cm4gY2FsbGJhY2soUEFDS0VUX1RZUEVTW3R5cGVdICsgKGRhdGEgfHwgXCJcIikpO1xufTtcblxuY29uc3QgZW5jb2RlQmxvYkFzQmFzZTY0ID0gKGRhdGEsIGNhbGxiYWNrKSA9PiB7XG4gIGNvbnN0IGZpbGVSZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICBmaWxlUmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBmaWxlUmVhZGVyLnJlc3VsdC5zcGxpdChcIixcIilbMV07XG4gICAgY2FsbGJhY2soXCJiXCIgKyBjb250ZW50KTtcbiAgfTtcbiAgcmV0dXJuIGZpbGVSZWFkZXIucmVhZEFzRGF0YVVSTChkYXRhKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZW5jb2RlUGFja2V0O1xuIiwiY29uc3QgZW5jb2RlUGFja2V0ID0gcmVxdWlyZShcIi4vZW5jb2RlUGFja2V0XCIpO1xuY29uc3QgZGVjb2RlUGFja2V0ID0gcmVxdWlyZShcIi4vZGVjb2RlUGFja2V0XCIpO1xuXG5jb25zdCBTRVBBUkFUT1IgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDMwKTsgLy8gc2VlIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0RlbGltaXRlciNBU0NJSV9kZWxpbWl0ZWRfdGV4dFxuXG5jb25zdCBlbmNvZGVQYXlsb2FkID0gKHBhY2tldHMsIGNhbGxiYWNrKSA9PiB7XG4gIC8vIHNvbWUgcGFja2V0cyBtYXkgYmUgYWRkZWQgdG8gdGhlIGFycmF5IHdoaWxlIGVuY29kaW5nLCBzbyB0aGUgaW5pdGlhbCBsZW5ndGggbXVzdCBiZSBzYXZlZFxuICBjb25zdCBsZW5ndGggPSBwYWNrZXRzLmxlbmd0aDtcbiAgY29uc3QgZW5jb2RlZFBhY2tldHMgPSBuZXcgQXJyYXkobGVuZ3RoKTtcbiAgbGV0IGNvdW50ID0gMDtcblxuICBwYWNrZXRzLmZvckVhY2goKHBhY2tldCwgaSkgPT4ge1xuICAgIC8vIGZvcmNlIGJhc2U2NCBlbmNvZGluZyBmb3IgYmluYXJ5IHBhY2tldHNcbiAgICBlbmNvZGVQYWNrZXQocGFja2V0LCBmYWxzZSwgZW5jb2RlZFBhY2tldCA9PiB7XG4gICAgICBlbmNvZGVkUGFja2V0c1tpXSA9IGVuY29kZWRQYWNrZXQ7XG4gICAgICBpZiAoKytjb3VudCA9PT0gbGVuZ3RoKSB7XG4gICAgICAgIGNhbGxiYWNrKGVuY29kZWRQYWNrZXRzLmpvaW4oU0VQQVJBVE9SKSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufTtcblxuY29uc3QgZGVjb2RlUGF5bG9hZCA9IChlbmNvZGVkUGF5bG9hZCwgYmluYXJ5VHlwZSkgPT4ge1xuICBjb25zdCBlbmNvZGVkUGFja2V0cyA9IGVuY29kZWRQYXlsb2FkLnNwbGl0KFNFUEFSQVRPUik7XG4gIGNvbnN0IHBhY2tldHMgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbmNvZGVkUGFja2V0cy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGRlY29kZWRQYWNrZXQgPSBkZWNvZGVQYWNrZXQoZW5jb2RlZFBhY2tldHNbaV0sIGJpbmFyeVR5cGUpO1xuICAgIHBhY2tldHMucHVzaChkZWNvZGVkUGFja2V0KTtcbiAgICBpZiAoZGVjb2RlZFBhY2tldC50eXBlID09PSBcImVycm9yXCIpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcGFja2V0cztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBwcm90b2NvbDogNCxcbiAgZW5jb2RlUGFja2V0LFxuICBlbmNvZGVQYXlsb2FkLFxuICBkZWNvZGVQYWNrZXQsXG4gIGRlY29kZVBheWxvYWRcbn07XG4iLCJcbi8qKlxuICogTW9kdWxlIGV4cG9ydHMuXG4gKlxuICogTG9naWMgYm9ycm93ZWQgZnJvbSBNb2Rlcm5penI6XG4gKlxuICogICAtIGh0dHBzOi8vZ2l0aHViLmNvbS9Nb2Rlcm5penIvTW9kZXJuaXpyL2Jsb2IvbWFzdGVyL2ZlYXR1cmUtZGV0ZWN0cy9jb3JzLmpzXG4gKi9cblxudHJ5IHtcbiAgbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2YgWE1MSHR0cFJlcXVlc3QgIT09ICd1bmRlZmluZWQnICYmXG4gICAgJ3dpdGhDcmVkZW50aWFscycgaW4gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG59IGNhdGNoIChlcnIpIHtcbiAgLy8gaWYgWE1MSHR0cCBzdXBwb3J0IGlzIGRpc2FibGVkIGluIElFIHRoZW4gaXQgd2lsbCB0aHJvd1xuICAvLyB3aGVuIHRyeWluZyB0byBjcmVhdGVcbiAgbW9kdWxlLmV4cG9ydHMgPSBmYWxzZTtcbn1cbiIsIi8qXG4gIGh0dHBzOi8vZ2l0aHViLmNvbS9iYW5rc2VhbiB3cmFwcGVkIE1ha290byBNYXRzdW1vdG8gYW5kIFRha3VqaSBOaXNoaW11cmEncyBjb2RlIGluIGEgbmFtZXNwYWNlXG4gIHNvIGl0J3MgYmV0dGVyIGVuY2Fwc3VsYXRlZC4gTm93IHlvdSBjYW4gaGF2ZSBtdWx0aXBsZSByYW5kb20gbnVtYmVyIGdlbmVyYXRvcnNcbiAgYW5kIHRoZXkgd29uJ3Qgc3RvbXAgYWxsIG92ZXIgZWFjaG90aGVyJ3Mgc3RhdGUuXG5cbiAgSWYgeW91IHdhbnQgdG8gdXNlIHRoaXMgYXMgYSBzdWJzdGl0dXRlIGZvciBNYXRoLnJhbmRvbSgpLCB1c2UgdGhlIHJhbmRvbSgpXG4gIG1ldGhvZCBsaWtlIHNvOlxuXG4gIHZhciBtID0gbmV3IE1lcnNlbm5lVHdpc3RlcigpO1xuICB2YXIgcmFuZG9tTnVtYmVyID0gbS5yYW5kb20oKTtcblxuICBZb3UgY2FuIGFsc28gY2FsbCB0aGUgb3RoZXIgZ2VucmFuZF97Zm9vfSgpIG1ldGhvZHMgb24gdGhlIGluc3RhbmNlLlxuXG4gIElmIHlvdSB3YW50IHRvIHVzZSBhIHNwZWNpZmljIHNlZWQgaW4gb3JkZXIgdG8gZ2V0IGEgcmVwZWF0YWJsZSByYW5kb21cbiAgc2VxdWVuY2UsIHBhc3MgYW4gaW50ZWdlciBpbnRvIHRoZSBjb25zdHJ1Y3RvcjpcblxuICB2YXIgbSA9IG5ldyBNZXJzZW5uZVR3aXN0ZXIoMTIzKTtcblxuICBhbmQgdGhhdCB3aWxsIGFsd2F5cyBwcm9kdWNlIHRoZSBzYW1lIHJhbmRvbSBzZXF1ZW5jZS5cblxuICBTZWFuIE1jQ3VsbG91Z2ggKGJhbmtzZWFuQGdtYWlsLmNvbSlcbiovXG5cbi8qXG4gICBBIEMtcHJvZ3JhbSBmb3IgTVQxOTkzNywgd2l0aCBpbml0aWFsaXphdGlvbiBpbXByb3ZlZCAyMDAyLzEvMjYuXG4gICBDb2RlZCBieSBUYWt1amkgTmlzaGltdXJhIGFuZCBNYWtvdG8gTWF0c3Vtb3RvLlxuXG4gICBCZWZvcmUgdXNpbmcsIGluaXRpYWxpemUgdGhlIHN0YXRlIGJ5IHVzaW5nIGluaXRfc2VlZChzZWVkKVxuICAgb3IgaW5pdF9ieV9hcnJheShpbml0X2tleSwga2V5X2xlbmd0aCkuXG5cbiAgIENvcHlyaWdodCAoQykgMTk5NyAtIDIwMDIsIE1ha290byBNYXRzdW1vdG8gYW5kIFRha3VqaSBOaXNoaW11cmEsXG4gICBBbGwgcmlnaHRzIHJlc2VydmVkLlxuXG4gICBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXRcbiAgIG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uc1xuICAgYXJlIG1ldDpcblxuICAgICAxLiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodFxuICAgICAgICBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG5cbiAgICAgMi4gUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHRcbiAgICAgICAgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyIGluIHRoZVxuICAgICAgICBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGUgZGlzdHJpYnV0aW9uLlxuXG4gICAgIDMuIFRoZSBuYW1lcyBvZiBpdHMgY29udHJpYnV0b3JzIG1heSBub3QgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGVcbiAgICAgICAgcHJvZHVjdHMgZGVyaXZlZCBmcm9tIHRoaXMgc29mdHdhcmUgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuXG4gICAgICAgIHBlcm1pc3Npb24uXG5cbiAgIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlNcbiAgIFwiQVMgSVNcIiBBTkQgQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1RcbiAgIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUlxuICAgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFIERJU0NMQUlNRUQuICBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUIE9XTkVSIE9SXG4gICBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCxcbiAgIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTyxcbiAgIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLCBEQVRBLCBPUlxuICAgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZIFRIRU9SWSBPRlxuICAgTElBQklMSVRZLCBXSEVUSEVSIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUIChJTkNMVURJTkdcbiAgIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKSBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0UgT0YgVEhJU1xuICAgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEUgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG5cblxuICAgQW55IGZlZWRiYWNrIGlzIHZlcnkgd2VsY29tZS5cbiAgIGh0dHA6Ly93d3cubWF0aC5zY2kuaGlyb3NoaW1hLXUuYWMuanAvfm0tbWF0L01UL2VtdC5odG1sXG4gICBlbWFpbDogbS1tYXQgQCBtYXRoLnNjaS5oaXJvc2hpbWEtdS5hYy5qcCAocmVtb3ZlIHNwYWNlKVxuKi9cblxudmFyIE1lcnNlbm5lVHdpc3RlciA9IGZ1bmN0aW9uKHNlZWQpIHtcblx0aWYgKHNlZWQgPT0gdW5kZWZpbmVkKSB7XG5cdFx0c2VlZCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXHR9XG5cblx0LyogUGVyaW9kIHBhcmFtZXRlcnMgKi9cblx0dGhpcy5OID0gNjI0O1xuXHR0aGlzLk0gPSAzOTc7XG5cdHRoaXMuTUFUUklYX0EgPSAweDk5MDhiMGRmOyAgIC8qIGNvbnN0YW50IHZlY3RvciBhICovXG5cdHRoaXMuVVBQRVJfTUFTSyA9IDB4ODAwMDAwMDA7IC8qIG1vc3Qgc2lnbmlmaWNhbnQgdy1yIGJpdHMgKi9cblx0dGhpcy5MT1dFUl9NQVNLID0gMHg3ZmZmZmZmZjsgLyogbGVhc3Qgc2lnbmlmaWNhbnQgciBiaXRzICovXG5cblx0dGhpcy5tdCA9IG5ldyBBcnJheSh0aGlzLk4pOyAvKiB0aGUgYXJyYXkgZm9yIHRoZSBzdGF0ZSB2ZWN0b3IgKi9cblx0dGhpcy5tdGk9dGhpcy5OKzE7IC8qIG10aT09TisxIG1lYW5zIG10W05dIGlzIG5vdCBpbml0aWFsaXplZCAqL1xuXG5cdGlmIChzZWVkLmNvbnN0cnVjdG9yID09IEFycmF5KSB7XG5cdFx0dGhpcy5pbml0X2J5X2FycmF5KHNlZWQsIHNlZWQubGVuZ3RoKTtcblx0fVxuXHRlbHNlIHtcblx0XHR0aGlzLmluaXRfc2VlZChzZWVkKTtcblx0fVxufVxuXG4vKiBpbml0aWFsaXplcyBtdFtOXSB3aXRoIGEgc2VlZCAqL1xuLyogb3JpZ2luIG5hbWUgaW5pdF9nZW5yYW5kICovXG5NZXJzZW5uZVR3aXN0ZXIucHJvdG90eXBlLmluaXRfc2VlZCA9IGZ1bmN0aW9uKHMpIHtcblx0dGhpcy5tdFswXSA9IHMgPj4+IDA7XG5cdGZvciAodGhpcy5tdGk9MTsgdGhpcy5tdGk8dGhpcy5OOyB0aGlzLm10aSsrKSB7XG5cdFx0dmFyIHMgPSB0aGlzLm10W3RoaXMubXRpLTFdIF4gKHRoaXMubXRbdGhpcy5tdGktMV0gPj4+IDMwKTtcblx0XHR0aGlzLm10W3RoaXMubXRpXSA9ICgoKCgocyAmIDB4ZmZmZjAwMDApID4+PiAxNikgKiAxODEyNDMzMjUzKSA8PCAxNikgKyAocyAmIDB4MDAwMGZmZmYpICogMTgxMjQzMzI1Mylcblx0XHQrIHRoaXMubXRpO1xuXHRcdC8qIFNlZSBLbnV0aCBUQU9DUCBWb2wyLiAzcmQgRWQuIFAuMTA2IGZvciBtdWx0aXBsaWVyLiAqL1xuXHRcdC8qIEluIHRoZSBwcmV2aW91cyB2ZXJzaW9ucywgTVNCcyBvZiB0aGUgc2VlZCBhZmZlY3QgICAqL1xuXHRcdC8qIG9ubHkgTVNCcyBvZiB0aGUgYXJyYXkgbXRbXS4gICAgICAgICAgICAgICAgICAgICAgICAqL1xuXHRcdC8qIDIwMDIvMDEvMDkgbW9kaWZpZWQgYnkgTWFrb3RvIE1hdHN1bW90byAgICAgICAgICAgICAqL1xuXHRcdHRoaXMubXRbdGhpcy5tdGldID4+Pj0gMDtcblx0XHQvKiBmb3IgPjMyIGJpdCBtYWNoaW5lcyAqL1xuXHR9XG59XG5cbi8qIGluaXRpYWxpemUgYnkgYW4gYXJyYXkgd2l0aCBhcnJheS1sZW5ndGggKi9cbi8qIGluaXRfa2V5IGlzIHRoZSBhcnJheSBmb3IgaW5pdGlhbGl6aW5nIGtleXMgKi9cbi8qIGtleV9sZW5ndGggaXMgaXRzIGxlbmd0aCAqL1xuLyogc2xpZ2h0IGNoYW5nZSBmb3IgQysrLCAyMDA0LzIvMjYgKi9cbk1lcnNlbm5lVHdpc3Rlci5wcm90b3R5cGUuaW5pdF9ieV9hcnJheSA9IGZ1bmN0aW9uKGluaXRfa2V5LCBrZXlfbGVuZ3RoKSB7XG5cdHZhciBpLCBqLCBrO1xuXHR0aGlzLmluaXRfc2VlZCgxOTY1MDIxOCk7XG5cdGk9MTsgaj0wO1xuXHRrID0gKHRoaXMuTj5rZXlfbGVuZ3RoID8gdGhpcy5OIDoga2V5X2xlbmd0aCk7XG5cdGZvciAoOyBrOyBrLS0pIHtcblx0XHR2YXIgcyA9IHRoaXMubXRbaS0xXSBeICh0aGlzLm10W2ktMV0gPj4+IDMwKVxuXHRcdHRoaXMubXRbaV0gPSAodGhpcy5tdFtpXSBeICgoKCgocyAmIDB4ZmZmZjAwMDApID4+PiAxNikgKiAxNjY0NTI1KSA8PCAxNikgKyAoKHMgJiAweDAwMDBmZmZmKSAqIDE2NjQ1MjUpKSlcblx0XHQrIGluaXRfa2V5W2pdICsgajsgLyogbm9uIGxpbmVhciAqL1xuXHRcdHRoaXMubXRbaV0gPj4+PSAwOyAvKiBmb3IgV09SRFNJWkUgPiAzMiBtYWNoaW5lcyAqL1xuXHRcdGkrKzsgaisrO1xuXHRcdGlmIChpPj10aGlzLk4pIHsgdGhpcy5tdFswXSA9IHRoaXMubXRbdGhpcy5OLTFdOyBpPTE7IH1cblx0XHRpZiAoaj49a2V5X2xlbmd0aCkgaj0wO1xuXHR9XG5cdGZvciAoaz10aGlzLk4tMTsgazsgay0tKSB7XG5cdFx0dmFyIHMgPSB0aGlzLm10W2ktMV0gXiAodGhpcy5tdFtpLTFdID4+PiAzMCk7XG5cdFx0dGhpcy5tdFtpXSA9ICh0aGlzLm10W2ldIF4gKCgoKChzICYgMHhmZmZmMDAwMCkgPj4+IDE2KSAqIDE1NjYwODM5NDEpIDw8IDE2KSArIChzICYgMHgwMDAwZmZmZikgKiAxNTY2MDgzOTQxKSlcblx0XHQtIGk7IC8qIG5vbiBsaW5lYXIgKi9cblx0XHR0aGlzLm10W2ldID4+Pj0gMDsgLyogZm9yIFdPUkRTSVpFID4gMzIgbWFjaGluZXMgKi9cblx0XHRpKys7XG5cdFx0aWYgKGk+PXRoaXMuTikgeyB0aGlzLm10WzBdID0gdGhpcy5tdFt0aGlzLk4tMV07IGk9MTsgfVxuXHR9XG5cblx0dGhpcy5tdFswXSA9IDB4ODAwMDAwMDA7IC8qIE1TQiBpcyAxOyBhc3N1cmluZyBub24temVybyBpbml0aWFsIGFycmF5ICovXG59XG5cbi8qIGdlbmVyYXRlcyBhIHJhbmRvbSBudW1iZXIgb24gWzAsMHhmZmZmZmZmZl0taW50ZXJ2YWwgKi9cbi8qIG9yaWdpbiBuYW1lIGdlbnJhbmRfaW50MzIgKi9cbk1lcnNlbm5lVHdpc3Rlci5wcm90b3R5cGUucmFuZG9tX2ludCA9IGZ1bmN0aW9uKCkge1xuXHR2YXIgeTtcblx0dmFyIG1hZzAxID0gbmV3IEFycmF5KDB4MCwgdGhpcy5NQVRSSVhfQSk7XG5cdC8qIG1hZzAxW3hdID0geCAqIE1BVFJJWF9BICBmb3IgeD0wLDEgKi9cblxuXHRpZiAodGhpcy5tdGkgPj0gdGhpcy5OKSB7IC8qIGdlbmVyYXRlIE4gd29yZHMgYXQgb25lIHRpbWUgKi9cblx0XHR2YXIga2s7XG5cblx0XHRpZiAodGhpcy5tdGkgPT0gdGhpcy5OKzEpICAvKiBpZiBpbml0X3NlZWQoKSBoYXMgbm90IGJlZW4gY2FsbGVkLCAqL1xuXHRcdFx0dGhpcy5pbml0X3NlZWQoNTQ4OSk7ICAvKiBhIGRlZmF1bHQgaW5pdGlhbCBzZWVkIGlzIHVzZWQgKi9cblxuXHRcdGZvciAoa2s9MDtrazx0aGlzLk4tdGhpcy5NO2trKyspIHtcblx0XHRcdHkgPSAodGhpcy5tdFtra10mdGhpcy5VUFBFUl9NQVNLKXwodGhpcy5tdFtraysxXSZ0aGlzLkxPV0VSX01BU0spO1xuXHRcdFx0dGhpcy5tdFtra10gPSB0aGlzLm10W2trK3RoaXMuTV0gXiAoeSA+Pj4gMSkgXiBtYWcwMVt5ICYgMHgxXTtcblx0XHR9XG5cdFx0Zm9yICg7a2s8dGhpcy5OLTE7a2srKykge1xuXHRcdFx0eSA9ICh0aGlzLm10W2trXSZ0aGlzLlVQUEVSX01BU0spfCh0aGlzLm10W2trKzFdJnRoaXMuTE9XRVJfTUFTSyk7XG5cdFx0XHR0aGlzLm10W2trXSA9IHRoaXMubXRba2srKHRoaXMuTS10aGlzLk4pXSBeICh5ID4+PiAxKSBeIG1hZzAxW3kgJiAweDFdO1xuXHRcdH1cblx0XHR5ID0gKHRoaXMubXRbdGhpcy5OLTFdJnRoaXMuVVBQRVJfTUFTSyl8KHRoaXMubXRbMF0mdGhpcy5MT1dFUl9NQVNLKTtcblx0XHR0aGlzLm10W3RoaXMuTi0xXSA9IHRoaXMubXRbdGhpcy5NLTFdIF4gKHkgPj4+IDEpIF4gbWFnMDFbeSAmIDB4MV07XG5cblx0XHR0aGlzLm10aSA9IDA7XG5cdH1cblxuXHR5ID0gdGhpcy5tdFt0aGlzLm10aSsrXTtcblxuXHQvKiBUZW1wZXJpbmcgKi9cblx0eSBePSAoeSA+Pj4gMTEpO1xuXHR5IF49ICh5IDw8IDcpICYgMHg5ZDJjNTY4MDtcblx0eSBePSAoeSA8PCAxNSkgJiAweGVmYzYwMDAwO1xuXHR5IF49ICh5ID4+PiAxOCk7XG5cblx0cmV0dXJuIHkgPj4+IDA7XG59XG5cbi8qIGdlbmVyYXRlcyBhIHJhbmRvbSBudW1iZXIgb24gWzAsMHg3ZmZmZmZmZl0taW50ZXJ2YWwgKi9cbi8qIG9yaWdpbiBuYW1lIGdlbnJhbmRfaW50MzEgKi9cbk1lcnNlbm5lVHdpc3Rlci5wcm90b3R5cGUucmFuZG9tX2ludDMxID0gZnVuY3Rpb24oKSB7XG5cdHJldHVybiAodGhpcy5yYW5kb21faW50KCk+Pj4xKTtcbn1cblxuLyogZ2VuZXJhdGVzIGEgcmFuZG9tIG51bWJlciBvbiBbMCwxXS1yZWFsLWludGVydmFsICovXG4vKiBvcmlnaW4gbmFtZSBnZW5yYW5kX3JlYWwxICovXG5NZXJzZW5uZVR3aXN0ZXIucHJvdG90eXBlLnJhbmRvbV9pbmNsID0gZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzLnJhbmRvbV9pbnQoKSooMS4wLzQyOTQ5NjcyOTUuMCk7XG5cdC8qIGRpdmlkZWQgYnkgMl4zMi0xICovXG59XG5cbi8qIGdlbmVyYXRlcyBhIHJhbmRvbSBudW1iZXIgb24gWzAsMSktcmVhbC1pbnRlcnZhbCAqL1xuTWVyc2VubmVUd2lzdGVyLnByb3RvdHlwZS5yYW5kb20gPSBmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXMucmFuZG9tX2ludCgpKigxLjAvNDI5NDk2NzI5Ni4wKTtcblx0LyogZGl2aWRlZCBieSAyXjMyICovXG59XG5cbi8qIGdlbmVyYXRlcyBhIHJhbmRvbSBudW1iZXIgb24gKDAsMSktcmVhbC1pbnRlcnZhbCAqL1xuLyogb3JpZ2luIG5hbWUgZ2VucmFuZF9yZWFsMyAqL1xuTWVyc2VubmVUd2lzdGVyLnByb3RvdHlwZS5yYW5kb21fZXhjbCA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gKHRoaXMucmFuZG9tX2ludCgpICsgMC41KSooMS4wLzQyOTQ5NjcyOTYuMCk7XG5cdC8qIGRpdmlkZWQgYnkgMl4zMiAqL1xufVxuXG4vKiBnZW5lcmF0ZXMgYSByYW5kb20gbnVtYmVyIG9uIFswLDEpIHdpdGggNTMtYml0IHJlc29sdXRpb24qL1xuLyogb3JpZ2luIG5hbWUgZ2VucmFuZF9yZXM1MyAqL1xuTWVyc2VubmVUd2lzdGVyLnByb3RvdHlwZS5yYW5kb21fbG9uZyA9IGZ1bmN0aW9uKCkge1xuXHR2YXIgYT10aGlzLnJhbmRvbV9pbnQoKT4+PjUsIGI9dGhpcy5yYW5kb21faW50KCk+Pj42O1xuXHRyZXR1cm4oYSo2NzEwODg2NC4wK2IpKigxLjAvOTAwNzE5OTI1NDc0MDk5Mi4wKTtcbn1cblxuLyogVGhlc2UgcmVhbCB2ZXJzaW9ucyBhcmUgZHVlIHRvIElzYWt1IFdhZGEsIDIwMDIvMDEvMDkgYWRkZWQgKi9cblxubW9kdWxlLmV4cG9ydHMgPSBNZXJzZW5uZVR3aXN0ZXI7XG4iLCIvKipcbiAqIENvbXBpbGVzIGEgcXVlcnlzdHJpbmdcbiAqIFJldHVybnMgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmV4cG9ydHMuZW5jb2RlID0gZnVuY3Rpb24gKG9iaikge1xuICB2YXIgc3RyID0gJyc7XG5cbiAgZm9yICh2YXIgaSBpbiBvYmopIHtcbiAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICBpZiAoc3RyLmxlbmd0aCkgc3RyICs9ICcmJztcbiAgICAgIHN0ciArPSBlbmNvZGVVUklDb21wb25lbnQoaSkgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQob2JqW2ldKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RyO1xufTtcblxuLyoqXG4gKiBQYXJzZXMgYSBzaW1wbGUgcXVlcnlzdHJpbmcgaW50byBhbiBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gcXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmV4cG9ydHMuZGVjb2RlID0gZnVuY3Rpb24ocXMpe1xuICB2YXIgcXJ5ID0ge307XG4gIHZhciBwYWlycyA9IHFzLnNwbGl0KCcmJyk7XG4gIGZvciAodmFyIGkgPSAwLCBsID0gcGFpcnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgdmFyIHBhaXIgPSBwYWlyc1tpXS5zcGxpdCgnPScpO1xuICAgIHFyeVtkZWNvZGVVUklDb21wb25lbnQocGFpclswXSldID0gZGVjb2RlVVJJQ29tcG9uZW50KHBhaXJbMV0pO1xuICB9XG4gIHJldHVybiBxcnk7XG59O1xuIiwiLyoqXG4gKiBQYXJzZXMgYW4gVVJJXG4gKlxuICogQGF1dGhvciBTdGV2ZW4gTGV2aXRoYW4gPHN0ZXZlbmxldml0aGFuLmNvbT4gKE1JVCBsaWNlbnNlKVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxudmFyIHJlID0gL14oPzooPyFbXjpAXSs6W146QFxcL10qQCkoaHR0cHxodHRwc3x3c3x3c3MpOlxcL1xcLyk/KCg/OigoW146QF0qKSg/OjooW146QF0qKSk/KT9AKT8oKD86W2EtZjAtOV17MCw0fTopezIsN31bYS1mMC05XXswLDR9fFteOlxcLz8jXSopKD86OihcXGQqKSk/KSgoKFxcLyg/OltePyNdKD8hW14/I1xcL10qXFwuW14/I1xcLy5dKyg/Ols/I118JCkpKSpcXC8/KT8oW14/I1xcL10qKSkoPzpcXD8oW14jXSopKT8oPzojKC4qKSk/KS87XG5cbnZhciBwYXJ0cyA9IFtcbiAgICAnc291cmNlJywgJ3Byb3RvY29sJywgJ2F1dGhvcml0eScsICd1c2VySW5mbycsICd1c2VyJywgJ3Bhc3N3b3JkJywgJ2hvc3QnLCAncG9ydCcsICdyZWxhdGl2ZScsICdwYXRoJywgJ2RpcmVjdG9yeScsICdmaWxlJywgJ3F1ZXJ5JywgJ2FuY2hvcidcbl07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcGFyc2V1cmkoc3RyKSB7XG4gICAgdmFyIHNyYyA9IHN0cixcbiAgICAgICAgYiA9IHN0ci5pbmRleE9mKCdbJyksXG4gICAgICAgIGUgPSBzdHIuaW5kZXhPZignXScpO1xuXG4gICAgaWYgKGIgIT0gLTEgJiYgZSAhPSAtMSkge1xuICAgICAgICBzdHIgPSBzdHIuc3Vic3RyaW5nKDAsIGIpICsgc3RyLnN1YnN0cmluZyhiLCBlKS5yZXBsYWNlKC86L2csICc7JykgKyBzdHIuc3Vic3RyaW5nKGUsIHN0ci5sZW5ndGgpO1xuICAgIH1cblxuICAgIHZhciBtID0gcmUuZXhlYyhzdHIgfHwgJycpLFxuICAgICAgICB1cmkgPSB7fSxcbiAgICAgICAgaSA9IDE0O1xuXG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgICB1cmlbcGFydHNbaV1dID0gbVtpXSB8fCAnJztcbiAgICB9XG5cbiAgICBpZiAoYiAhPSAtMSAmJiBlICE9IC0xKSB7XG4gICAgICAgIHVyaS5zb3VyY2UgPSBzcmM7XG4gICAgICAgIHVyaS5ob3N0ID0gdXJpLmhvc3Quc3Vic3RyaW5nKDEsIHVyaS5ob3N0Lmxlbmd0aCAtIDEpLnJlcGxhY2UoLzsvZywgJzonKTtcbiAgICAgICAgdXJpLmF1dGhvcml0eSA9IHVyaS5hdXRob3JpdHkucmVwbGFjZSgnWycsICcnKS5yZXBsYWNlKCddJywgJycpLnJlcGxhY2UoLzsvZywgJzonKTtcbiAgICAgICAgdXJpLmlwdjZ1cmkgPSB0cnVlO1xuICAgIH1cblxuICAgIHVyaS5wYXRoTmFtZXMgPSBwYXRoTmFtZXModXJpLCB1cmlbJ3BhdGgnXSk7XG4gICAgdXJpLnF1ZXJ5S2V5ID0gcXVlcnlLZXkodXJpLCB1cmlbJ3F1ZXJ5J10pO1xuXG4gICAgcmV0dXJuIHVyaTtcbn07XG5cbmZ1bmN0aW9uIHBhdGhOYW1lcyhvYmosIHBhdGgpIHtcbiAgICB2YXIgcmVneCA9IC9cXC97Miw5fS9nLFxuICAgICAgICBuYW1lcyA9IHBhdGgucmVwbGFjZShyZWd4LCBcIi9cIikuc3BsaXQoXCIvXCIpO1xuXG4gICAgaWYgKHBhdGguc3Vic3RyKDAsIDEpID09ICcvJyB8fCBwYXRoLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBuYW1lcy5zcGxpY2UoMCwgMSk7XG4gICAgfVxuICAgIGlmIChwYXRoLnN1YnN0cihwYXRoLmxlbmd0aCAtIDEsIDEpID09ICcvJykge1xuICAgICAgICBuYW1lcy5zcGxpY2UobmFtZXMubGVuZ3RoIC0gMSwgMSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5hbWVzO1xufVxuXG5mdW5jdGlvbiBxdWVyeUtleSh1cmksIHF1ZXJ5KSB7XG4gICAgdmFyIGRhdGEgPSB7fTtcblxuICAgIHF1ZXJ5LnJlcGxhY2UoLyg/Ol58JikoW14mPV0qKT0/KFteJl0qKS9nLCBmdW5jdGlvbiAoJDAsICQxLCAkMikge1xuICAgICAgICBpZiAoJDEpIHtcbiAgICAgICAgICAgIGRhdGFbJDFdID0gJDI7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBkYXRhO1xufVxuIiwiY29uc3QgQVJHX0xFTkdUSCA9IHtcbiAgYTogNyxcbiAgYzogNixcbiAgaDogMSxcbiAgbDogMixcbiAgbTogMixcbiAgcTogNCxcbiAgczogNCxcbiAgdDogMixcbiAgdjogMSxcbiAgejogMCxcbn07XG5cbmNvbnN0IFNFR01FTlRfUEFUVEVSTiA9IC8oW2FzdHZ6cW1obGNdKShbXmFzdHZ6cW1obGNdKikvZ2k7XG5cbmNvbnN0IE5VTUJFUiA9IC8tP1swLTldKlxcLj9bMC05XSsoPzplWy0rXT9cXGQrKT8vZ2k7XG5cbmZ1bmN0aW9uIHBhcnNlVmFsdWVzKGFyZ3MpIHtcbiAgY29uc3QgbnVtYmVycyA9IGFyZ3MubWF0Y2goTlVNQkVSKTtcbiAgcmV0dXJuIG51bWJlcnMgPyBudW1iZXJzLm1hcChOdW1iZXIpIDogW107XG59XG5cbi8qKlxuICogcGFyc2UgYW4gc3ZnIHBhdGggZGF0YSBzdHJpbmcuIEdlbmVyYXRlcyBhbiBBcnJheVxuICogb2YgY29tbWFuZHMgd2hlcmUgZWFjaCBjb21tYW5kIGlzIGFuIEFycmF5IG9mIHRoZVxuICogZm9ybSBgW2NvbW1hbmQsIGFyZzEsIGFyZzIsIC4uLl1gXG4gKlxuICogaHR0cHM6Ly93d3cudzMub3JnL1RSL1NWRy9wYXRocy5odG1sI1BhdGhEYXRhR2VuZXJhbEluZm9ybWF0aW9uXG4gKiBAaWdub3JlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHBhdGhcbiAqIEByZXR1cm5zIHthcnJheX1cbiAqL1xuZnVuY3Rpb24gcGFyc2UocGF0aCkge1xuICBjb25zdCBkYXRhID0gW107XG4gIGNvbnN0IHAgPSBTdHJpbmcocGF0aCkudHJpbSgpO1xuXG4gIC8vIEEgcGF0aCBkYXRhIHNlZ21lbnQgKGlmIHRoZXJlIGlzIG9uZSkgbXVzdCBiZWdpbiB3aXRoIGEgXCJtb3ZldG9cIiBjb21tYW5kXG4gIGlmIChwWzBdICE9PSAnTScgJiYgcFswXSAhPT0gJ20nKSB7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBwLnJlcGxhY2UoU0VHTUVOVF9QQVRURVJOLCAoXywgY29tbWFuZCwgYXJncykgPT4ge1xuICAgIGxldCB0eXBlID0gY29tbWFuZC50b0xvd2VyQ2FzZSgpO1xuICAgIGxldCB0aGVBcmdzID0gcGFyc2VWYWx1ZXMoYXJncyk7XG4gICAgbGV0IHRoZUNvbW1hbmQgPSBjb21tYW5kO1xuICAgIC8vIG92ZXJsb2FkZWQgbW92ZVRvXG4gICAgaWYgKHR5cGUgPT09ICdtJyAmJiB0aGVBcmdzLmxlbmd0aCA+IDIpIHtcbiAgICAgIGRhdGEucHVzaChbdGhlQ29tbWFuZF0uY29uY2F0KHRoZUFyZ3Muc3BsaWNlKDAsIDIpKSk7XG4gICAgICB0eXBlID0gJ2wnO1xuICAgICAgdGhlQ29tbWFuZCA9IHRoZUNvbW1hbmQgPT09ICdtJyA/ICdsJyA6ICdMJztcbiAgICB9XG5cbiAgICAvLyBJZ25vcmUgaW52YWxpZCBjb21tYW5kc1xuICAgIGlmICh0aGVBcmdzLmxlbmd0aCA8IEFSR19MRU5HVEhbdHlwZV0pIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICBkYXRhLnB1c2goW3RoZUNvbW1hbmRdLmNvbmNhdCh0aGVBcmdzLnNwbGljZSgwLCBBUkdfTEVOR1RIW3R5cGVdKSkpO1xuXG4gICAgLy8gVGhlIGNvbW1hbmQgbGV0dGVyIGNhbiBiZSBlbGltaW5hdGVkIG9uIHN1YnNlcXVlbnQgY29tbWFuZHMgaWYgdGhlXG4gICAgLy8gc2FtZSBjb21tYW5kIGlzIHVzZWQgbXVsdGlwbGUgdGltZXMgaW4gYSByb3cgKGUuZy4sIHlvdSBjYW4gZHJvcCB0aGVcbiAgICAvLyBzZWNvbmQgXCJMXCIgaW4gXCJNIDEwMCAyMDAgTCAyMDAgMTAwIEwgLTEwMCAtMjAwXCIgYW5kIHVzZVxuICAgIC8vIFwiTSAxMDAgMjAwIEwgMjAwIDEwMCAtMTAwIC0yMDBcIiBpbnN0ZWFkKS5cbiAgICB3aGlsZSAoXG4gICAgICB0aGVBcmdzLmxlbmd0aCA+PSBBUkdfTEVOR1RIW3R5cGVdICYmXG4gICAgICB0aGVBcmdzLmxlbmd0aCAmJlxuICAgICAgQVJHX0xFTkdUSFt0eXBlXVxuICAgICkge1xuICAgICAgZGF0YS5wdXNoKFt0aGVDb21tYW5kXS5jb25jYXQodGhlQXJncy5zcGxpY2UoMCwgQVJHX0xFTkdUSFt0eXBlXSkpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gJyc7XG4gIH0pO1xuICByZXR1cm4gZGF0YTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBwYXJzZTtcbiIsImNvbnN0IHBhcnNlUGF0aCA9IHJlcXVpcmUoJy4vcGFyc2UtcGF0aCcpO1xuXG4vKipcbiAqIFdvcmsgYXJvdW5kIGZvciBodHRwczovL2RldmVsb3Blci5taWNyb3NvZnQuY29tL2VuLXVzL21pY3Jvc29mdC1lZGdlL3BsYXRmb3JtL2lzc3Vlcy84NDM4ODg0L1xuICogQGlnbm9yZVxuICovXG5mdW5jdGlvbiBzdXBwb3J0c1N2Z1BhdGhBcmd1bWVudCh3aW5kb3cpIHtcbiAgY29uc3QgY2FudmFzID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICBjb25zdCBnID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gIGNvbnN0IHAgPSBuZXcgd2luZG93LlBhdGgyRCgnTTAgMCBMMSAxJyk7XG4gIGcuc3Ryb2tlU3R5bGUgPSAncmVkJztcbiAgZy5saW5lV2lkdGggPSAxO1xuICBnLnN0cm9rZShwKTtcbiAgY29uc3QgaW1nRGF0YSA9IGcuZ2V0SW1hZ2VEYXRhKDAsIDAsIDEsIDEpO1xuICByZXR1cm4gaW1nRGF0YS5kYXRhWzBdID09PSAyNTU7IC8vIENoZWNrIGlmIHBpeGVsIGlzIHJlZFxufVxuXG5mdW5jdGlvbiByb3RhdGVQb2ludChwb2ludCwgYW5nbGUpIHtcbiAgY29uc3QgbnggPSBwb2ludC54ICogTWF0aC5jb3MoYW5nbGUpIC0gcG9pbnQueSAqIE1hdGguc2luKGFuZ2xlKTtcbiAgY29uc3QgbnkgPSBwb2ludC55ICogTWF0aC5jb3MoYW5nbGUpICsgcG9pbnQueCAqIE1hdGguc2luKGFuZ2xlKTtcbiAgcG9pbnQueCA9IG54O1xuICBwb2ludC55ID0gbnk7XG59XG5cbmZ1bmN0aW9uIHRyYW5zbGF0ZVBvaW50KHBvaW50LCBkeCwgZHkpIHtcbiAgcG9pbnQueCArPSBkeDtcbiAgcG9pbnQueSArPSBkeTtcbn1cblxuZnVuY3Rpb24gc2NhbGVQb2ludChwb2ludCwgcykge1xuICBwb2ludC54ICo9IHM7XG4gIHBvaW50LnkgKj0gcztcbn1cblxuZnVuY3Rpb24gcG9seUZpbGxQYXRoMkQod2luZG93KSB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCAhd2luZG93LkNhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAod2luZG93LlBhdGgyRCAmJiBzdXBwb3J0c1N2Z1BhdGhBcmd1bWVudCh3aW5kb3cpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENyYXRlcyBhIFBhdGgyRCBwb2x5ZmlsbCBvYmplY3RcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBpZ25vcmVcbiAgICogQHBhcmFtIHtTdHJpbmd9IHBhdGhcbiAgICovXG4gIGNsYXNzIFBhdGgyRCB7XG4gICAgY29uc3RydWN0b3IocGF0aCkge1xuICAgICAgdGhpcy5zZWdtZW50cyA9IFtdO1xuICAgICAgaWYgKHBhdGggJiYgcGF0aCBpbnN0YW5jZW9mIFBhdGgyRCkge1xuICAgICAgICB0aGlzLnNlZ21lbnRzLnB1c2goLi4ucGF0aC5zZWdtZW50cyk7XG4gICAgICB9IGVsc2UgaWYgKHBhdGgpIHtcbiAgICAgICAgdGhpcy5zZWdtZW50cyA9IHBhcnNlUGF0aChwYXRoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRQYXRoKHBhdGgpIHtcbiAgICAgIGlmIChwYXRoICYmIHBhdGggaW5zdGFuY2VvZiBQYXRoMkQpIHtcbiAgICAgICAgdGhpcy5zZWdtZW50cy5wdXNoKC4uLnBhdGguc2VnbWVudHMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1vdmVUbyh4LCB5KSB7XG4gICAgICB0aGlzLnNlZ21lbnRzLnB1c2goWydNJywgeCwgeV0pO1xuICAgIH1cblxuICAgIGxpbmVUbyh4LCB5KSB7XG4gICAgICB0aGlzLnNlZ21lbnRzLnB1c2goWydMJywgeCwgeV0pO1xuICAgIH1cblxuICAgIGFyYyh4LCB5LCByLCBzdGFydCwgZW5kLCBjY3cpIHtcbiAgICAgIHRoaXMuc2VnbWVudHMucHVzaChbJ0FDJywgeCwgeSwgciwgc3RhcnQsIGVuZCwgISFjY3ddKTtcbiAgICB9XG5cbiAgICBhcmNUbyh4MSwgeTEsIHgyLCB5Miwgcikge1xuICAgICAgdGhpcy5zZWdtZW50cy5wdXNoKFsnQVQnLCB4MSwgeTEsIHgyLCB5Miwgcl0pO1xuICAgIH1cblxuICAgIGVsbGlwc2UoeCwgeSwgcngsIHJ5LCBhbmdsZSwgc3RhcnQsIGVuZCwgY2N3KSB7XG4gICAgICB0aGlzLnNlZ21lbnRzLnB1c2goWydFJywgeCwgeSwgcngsIHJ5LCBhbmdsZSwgc3RhcnQsIGVuZCwgISFjY3ddKTtcbiAgICB9XG5cbiAgICBjbG9zZVBhdGgoKSB7XG4gICAgICB0aGlzLnNlZ21lbnRzLnB1c2goWydaJ10pO1xuICAgIH1cblxuICAgIGJlemllckN1cnZlVG8oY3AxeCwgY3AxeSwgY3AyeCwgY3AyeSwgeCwgeSkge1xuICAgICAgdGhpcy5zZWdtZW50cy5wdXNoKFsnQycsIGNwMXgsIGNwMXksIGNwMngsIGNwMnksIHgsIHldKTtcbiAgICB9XG5cbiAgICBxdWFkcmF0aWNDdXJ2ZVRvKGNweCwgY3B5LCB4LCB5KSB7XG4gICAgICB0aGlzLnNlZ21lbnRzLnB1c2goWydRJywgY3B4LCBjcHksIHgsIHldKTtcbiAgICB9XG5cbiAgICByZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgIHRoaXMuc2VnbWVudHMucHVzaChbJ1InLCB4LCB5LCB3aWR0aCwgaGVpZ2h0XSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gYnVpbGRQYXRoKGNhbnZhcywgc2VnbWVudHMpIHtcbiAgICBsZXQgZW5kQW5nbGU7XG4gICAgbGV0IHN0YXJ0QW5nbGU7XG4gICAgbGV0IGxhcmdlQXJjRmxhZztcbiAgICBsZXQgc3dlZXBGbGFnO1xuICAgIGxldCBlbmRQb2ludDtcbiAgICBsZXQgbWlkUG9pbnQ7XG4gICAgbGV0IGFuZ2xlO1xuICAgIGxldCBsYW1iZGE7XG4gICAgbGV0IHQxO1xuICAgIGxldCB0MjtcbiAgICBsZXQgeDtcbiAgICBsZXQgeDE7XG4gICAgbGV0IHk7XG4gICAgbGV0IHkxO1xuICAgIGxldCByO1xuICAgIGxldCByeDtcbiAgICBsZXQgcnk7XG4gICAgbGV0IHc7XG4gICAgbGV0IGg7XG4gICAgbGV0IHBhdGhUeXBlO1xuICAgIGxldCBjZW50ZXJQb2ludDtcbiAgICBsZXQgY3B4O1xuICAgIGxldCBjcHk7XG4gICAgbGV0IHFjcHg7XG4gICAgbGV0IHFjcHk7XG4gICAgbGV0IGNjdztcbiAgICBsZXQgc3RhcnRQb2ludCA9IHsgeDogMCwgeTogMCB9O1xuICAgIGNvbnN0IGN1cnJlbnRQb2ludCA9IHsgeDogMCwgeTogMCB9O1xuXG4gICAgY2FudmFzLmJlZ2luUGF0aCgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VnbWVudHMubGVuZ3RoOyArK2kpIHtcbiAgICAgIGNvbnN0IHMgPSBzZWdtZW50c1tpXTtcbiAgICAgIHBhdGhUeXBlID0gc1swXTtcblxuICAgICAgLy8gUmVzZXQgY29udHJvbCBwb2ludCBpZiBjb21tYW5kIGlzIG5vdCBjdWJpY1xuICAgICAgaWYgKFxuICAgICAgICBwYXRoVHlwZSAhPT0gJ1MnICYmXG4gICAgICAgIHBhdGhUeXBlICE9PSAncycgJiZcbiAgICAgICAgcGF0aFR5cGUgIT09ICdDJyAmJlxuICAgICAgICBwYXRoVHlwZSAhPT0gJ2MnXG4gICAgICApIHtcbiAgICAgICAgY3B4ID0gbnVsbDtcbiAgICAgICAgY3B5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICBwYXRoVHlwZSAhPT0gJ1QnICYmXG4gICAgICAgIHBhdGhUeXBlICE9PSAndCcgJiZcbiAgICAgICAgcGF0aFR5cGUgIT09ICdRJyAmJlxuICAgICAgICBwYXRoVHlwZSAhPT0gJ3EnXG4gICAgICApIHtcbiAgICAgICAgcWNweCA9IG51bGw7XG4gICAgICAgIHFjcHkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICBzd2l0Y2ggKHBhdGhUeXBlKSB7XG4gICAgICAgIGNhc2UgJ20nOlxuICAgICAgICBjYXNlICdNJzpcbiAgICAgICAgICBpZiAocGF0aFR5cGUgPT09ICdtJykge1xuICAgICAgICAgICAgeCArPSBzWzFdO1xuICAgICAgICAgICAgeSArPSBzWzJdO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB4ID0gc1sxXTtcbiAgICAgICAgICAgIHkgPSBzWzJdO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChwYXRoVHlwZSA9PT0gJ00nIHx8ICFzdGFydFBvaW50KSB7XG4gICAgICAgICAgICBzdGFydFBvaW50ID0geyB4LCB5IH07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY2FudmFzLm1vdmVUbyh4LCB5KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbCc6XG4gICAgICAgICAgeCArPSBzWzFdO1xuICAgICAgICAgIHkgKz0gc1syXTtcbiAgICAgICAgICBjYW52YXMubGluZVRvKHgsIHkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdMJzpcbiAgICAgICAgICB4ID0gc1sxXTtcbiAgICAgICAgICB5ID0gc1syXTtcbiAgICAgICAgICBjYW52YXMubGluZVRvKHgsIHkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdIJzpcbiAgICAgICAgICB4ID0gc1sxXTtcbiAgICAgICAgICBjYW52YXMubGluZVRvKHgsIHkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdoJzpcbiAgICAgICAgICB4ICs9IHNbMV07XG4gICAgICAgICAgY2FudmFzLmxpbmVUbyh4LCB5KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnVic6XG4gICAgICAgICAgeSA9IHNbMV07XG4gICAgICAgICAgY2FudmFzLmxpbmVUbyh4LCB5KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAndic6XG4gICAgICAgICAgeSArPSBzWzFdO1xuICAgICAgICAgIGNhbnZhcy5saW5lVG8oeCwgeSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2EnOlxuICAgICAgICBjYXNlICdBJzpcbiAgICAgICAgICBpZiAocGF0aFR5cGUgPT09ICdhJykge1xuICAgICAgICAgICAgeCArPSBzWzZdO1xuICAgICAgICAgICAgeSArPSBzWzddO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB4ID0gc1s2XTtcbiAgICAgICAgICAgIHkgPSBzWzddO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJ4ID0gc1sxXTsgLy8gcnhcbiAgICAgICAgICByeSA9IHNbMl07IC8vIHJ5XG4gICAgICAgICAgYW5nbGUgPSAoc1szXSAqIE1hdGguUEkpIC8gMTgwO1xuICAgICAgICAgIGxhcmdlQXJjRmxhZyA9ICEhc1s0XTtcbiAgICAgICAgICBzd2VlcEZsYWcgPSAhIXNbNV07XG4gICAgICAgICAgZW5kUG9pbnQgPSB7IHgsIHkgfTtcblxuICAgICAgICAgIC8vIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9TVkcvaW1wbG5vdGUuaHRtbCNBcmNJbXBsZW1lbnRhdGlvbk5vdGVzXG5cbiAgICAgICAgICBtaWRQb2ludCA9IHtcbiAgICAgICAgICAgIHg6IChjdXJyZW50UG9pbnQueCAtIGVuZFBvaW50LngpIC8gMixcbiAgICAgICAgICAgIHk6IChjdXJyZW50UG9pbnQueSAtIGVuZFBvaW50LnkpIC8gMixcbiAgICAgICAgICB9O1xuICAgICAgICAgIHJvdGF0ZVBvaW50KG1pZFBvaW50LCAtYW5nbGUpO1xuXG4gICAgICAgICAgLy8gcmFkaXVzIGNvcnJlY3Rpb25cbiAgICAgICAgICBsYW1iZGEgPVxuICAgICAgICAgICAgKG1pZFBvaW50LnggKiBtaWRQb2ludC54KSAvIChyeCAqIHJ4KSArXG4gICAgICAgICAgICAobWlkUG9pbnQueSAqIG1pZFBvaW50LnkpIC8gKHJ5ICogcnkpO1xuICAgICAgICAgIGlmIChsYW1iZGEgPiAxKSB7XG4gICAgICAgICAgICBsYW1iZGEgPSBNYXRoLnNxcnQobGFtYmRhKTtcbiAgICAgICAgICAgIHJ4ICo9IGxhbWJkYTtcbiAgICAgICAgICAgIHJ5ICo9IGxhbWJkYTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjZW50ZXJQb2ludCA9IHtcbiAgICAgICAgICAgIHg6IChyeCAqIG1pZFBvaW50LnkpIC8gcnksXG4gICAgICAgICAgICB5OiAtKHJ5ICogbWlkUG9pbnQueCkgLyByeCxcbiAgICAgICAgICB9O1xuICAgICAgICAgIHQxID0gcnggKiByeCAqIHJ5ICogcnk7XG4gICAgICAgICAgdDIgPVxuICAgICAgICAgICAgcnggKiByeCAqIG1pZFBvaW50LnkgKiBtaWRQb2ludC55ICtcbiAgICAgICAgICAgIHJ5ICogcnkgKiBtaWRQb2ludC54ICogbWlkUG9pbnQueDtcbiAgICAgICAgICBpZiAoc3dlZXBGbGFnICE9PSBsYXJnZUFyY0ZsYWcpIHtcbiAgICAgICAgICAgIHNjYWxlUG9pbnQoY2VudGVyUG9pbnQsIE1hdGguc3FydCgodDEgLSB0MikgLyB0MikgfHwgMCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNjYWxlUG9pbnQoY2VudGVyUG9pbnQsIC1NYXRoLnNxcnQoKHQxIC0gdDIpIC8gdDIpIHx8IDApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHN0YXJ0QW5nbGUgPSBNYXRoLmF0YW4yKFxuICAgICAgICAgICAgKG1pZFBvaW50LnkgLSBjZW50ZXJQb2ludC55KSAvIHJ5LFxuICAgICAgICAgICAgKG1pZFBvaW50LnggLSBjZW50ZXJQb2ludC54KSAvIHJ4XG4gICAgICAgICAgKTtcbiAgICAgICAgICBlbmRBbmdsZSA9IE1hdGguYXRhbjIoXG4gICAgICAgICAgICAtKG1pZFBvaW50LnkgKyBjZW50ZXJQb2ludC55KSAvIHJ5LFxuICAgICAgICAgICAgLShtaWRQb2ludC54ICsgY2VudGVyUG9pbnQueCkgLyByeFxuICAgICAgICAgICk7XG5cbiAgICAgICAgICByb3RhdGVQb2ludChjZW50ZXJQb2ludCwgYW5nbGUpO1xuICAgICAgICAgIHRyYW5zbGF0ZVBvaW50KFxuICAgICAgICAgICAgY2VudGVyUG9pbnQsXG4gICAgICAgICAgICAoZW5kUG9pbnQueCArIGN1cnJlbnRQb2ludC54KSAvIDIsXG4gICAgICAgICAgICAoZW5kUG9pbnQueSArIGN1cnJlbnRQb2ludC55KSAvIDJcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgY2FudmFzLnNhdmUoKTtcbiAgICAgICAgICBjYW52YXMudHJhbnNsYXRlKGNlbnRlclBvaW50LngsIGNlbnRlclBvaW50LnkpO1xuICAgICAgICAgIGNhbnZhcy5yb3RhdGUoYW5nbGUpO1xuICAgICAgICAgIGNhbnZhcy5zY2FsZShyeCwgcnkpO1xuICAgICAgICAgIGNhbnZhcy5hcmMoMCwgMCwgMSwgc3RhcnRBbmdsZSwgZW5kQW5nbGUsICFzd2VlcEZsYWcpO1xuICAgICAgICAgIGNhbnZhcy5yZXN0b3JlKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0MnOlxuICAgICAgICAgIGNweCA9IHNbM107IC8vIExhc3QgY29udHJvbCBwb2ludFxuICAgICAgICAgIGNweSA9IHNbNF07XG4gICAgICAgICAgeCA9IHNbNV07XG4gICAgICAgICAgeSA9IHNbNl07XG4gICAgICAgICAgY2FudmFzLmJlemllckN1cnZlVG8oc1sxXSwgc1syXSwgY3B4LCBjcHksIHgsIHkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdjJzpcbiAgICAgICAgICBjYW52YXMuYmV6aWVyQ3VydmVUbyhcbiAgICAgICAgICAgIHNbMV0gKyB4LFxuICAgICAgICAgICAgc1syXSArIHksXG4gICAgICAgICAgICBzWzNdICsgeCxcbiAgICAgICAgICAgIHNbNF0gKyB5LFxuICAgICAgICAgICAgc1s1XSArIHgsXG4gICAgICAgICAgICBzWzZdICsgeVxuICAgICAgICAgICk7XG4gICAgICAgICAgY3B4ID0gc1szXSArIHg7IC8vIExhc3QgY29udHJvbCBwb2ludFxuICAgICAgICAgIGNweSA9IHNbNF0gKyB5O1xuICAgICAgICAgIHggKz0gc1s1XTtcbiAgICAgICAgICB5ICs9IHNbNl07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ1MnOlxuICAgICAgICAgIGlmIChjcHggPT09IG51bGwgfHwgY3B4ID09PSBudWxsKSB7XG4gICAgICAgICAgICBjcHggPSB4O1xuICAgICAgICAgICAgY3B5ID0geTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjYW52YXMuYmV6aWVyQ3VydmVUbyhcbiAgICAgICAgICAgIDIgKiB4IC0gY3B4LFxuICAgICAgICAgICAgMiAqIHkgLSBjcHksXG4gICAgICAgICAgICBzWzFdLFxuICAgICAgICAgICAgc1syXSxcbiAgICAgICAgICAgIHNbM10sXG4gICAgICAgICAgICBzWzRdXG4gICAgICAgICAgKTtcbiAgICAgICAgICBjcHggPSBzWzFdOyAvLyBsYXN0IGNvbnRyb2wgcG9pbnRcbiAgICAgICAgICBjcHkgPSBzWzJdO1xuICAgICAgICAgIHggPSBzWzNdO1xuICAgICAgICAgIHkgPSBzWzRdO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdzJzpcbiAgICAgICAgICBpZiAoY3B4ID09PSBudWxsIHx8IGNweCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgY3B4ID0geDtcbiAgICAgICAgICAgIGNweSA9IHk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY2FudmFzLmJlemllckN1cnZlVG8oXG4gICAgICAgICAgICAyICogeCAtIGNweCxcbiAgICAgICAgICAgIDIgKiB5IC0gY3B5LFxuICAgICAgICAgICAgc1sxXSArIHgsXG4gICAgICAgICAgICBzWzJdICsgeSxcbiAgICAgICAgICAgIHNbM10gKyB4LFxuICAgICAgICAgICAgc1s0XSArIHlcbiAgICAgICAgICApO1xuICAgICAgICAgIGNweCA9IHNbMV0gKyB4OyAvLyBsYXN0IGNvbnRyb2wgcG9pbnRcbiAgICAgICAgICBjcHkgPSBzWzJdICsgeTtcbiAgICAgICAgICB4ICs9IHNbM107XG4gICAgICAgICAgeSArPSBzWzRdO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdRJzpcbiAgICAgICAgICBxY3B4ID0gc1sxXTsgLy8gbGFzdCBjb250cm9sIHBvaW50XG4gICAgICAgICAgcWNweSA9IHNbMl07XG4gICAgICAgICAgeCA9IHNbM107XG4gICAgICAgICAgeSA9IHNbNF07XG4gICAgICAgICAgY2FudmFzLnF1YWRyYXRpY0N1cnZlVG8ocWNweCwgcWNweSwgeCwgeSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3EnOlxuICAgICAgICAgIHFjcHggPSBzWzFdICsgeDsgLy8gbGFzdCBjb250cm9sIHBvaW50XG4gICAgICAgICAgcWNweSA9IHNbMl0gKyB5O1xuICAgICAgICAgIHggKz0gc1szXTtcbiAgICAgICAgICB5ICs9IHNbNF07XG4gICAgICAgICAgY2FudmFzLnF1YWRyYXRpY0N1cnZlVG8ocWNweCwgcWNweSwgeCwgeSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ1QnOlxuICAgICAgICAgIGlmIChxY3B4ID09PSBudWxsIHx8IHFjcHggPT09IG51bGwpIHtcbiAgICAgICAgICAgIHFjcHggPSB4O1xuICAgICAgICAgICAgcWNweSA9IHk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHFjcHggPSAyICogeCAtIHFjcHg7IC8vIGxhc3QgY29udHJvbCBwb2ludFxuICAgICAgICAgIHFjcHkgPSAyICogeSAtIHFjcHk7XG4gICAgICAgICAgeCA9IHNbMV07XG4gICAgICAgICAgeSA9IHNbMl07XG4gICAgICAgICAgY2FudmFzLnF1YWRyYXRpY0N1cnZlVG8ocWNweCwgcWNweSwgeCwgeSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3QnOlxuICAgICAgICAgIGlmIChxY3B4ID09PSBudWxsIHx8IHFjcHggPT09IG51bGwpIHtcbiAgICAgICAgICAgIHFjcHggPSB4O1xuICAgICAgICAgICAgcWNweSA9IHk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHFjcHggPSAyICogeCAtIHFjcHg7IC8vIGxhc3QgY29udHJvbCBwb2ludFxuICAgICAgICAgIHFjcHkgPSAyICogeSAtIHFjcHk7XG4gICAgICAgICAgeCArPSBzWzFdO1xuICAgICAgICAgIHkgKz0gc1syXTtcbiAgICAgICAgICBjYW52YXMucXVhZHJhdGljQ3VydmVUbyhxY3B4LCBxY3B5LCB4LCB5KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAneic6XG4gICAgICAgIGNhc2UgJ1onOlxuICAgICAgICAgIHggPSBzdGFydFBvaW50Lng7XG4gICAgICAgICAgeSA9IHN0YXJ0UG9pbnQueTtcbiAgICAgICAgICBzdGFydFBvaW50ID0gdW5kZWZpbmVkO1xuICAgICAgICAgIGNhbnZhcy5jbG9zZVBhdGgoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnQUMnOiAvLyBhcmNcbiAgICAgICAgICB4ID0gc1sxXTtcbiAgICAgICAgICB5ID0gc1syXTtcbiAgICAgICAgICByID0gc1szXTtcbiAgICAgICAgICBzdGFydEFuZ2xlID0gc1s0XTtcbiAgICAgICAgICBlbmRBbmdsZSA9IHNbNV07XG4gICAgICAgICAgY2N3ID0gc1s2XTtcbiAgICAgICAgICBjYW52YXMuYXJjKHgsIHksIHIsIHN0YXJ0QW5nbGUsIGVuZEFuZ2xlLCBjY3cpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdBVCc6IC8vIGFyY1RvXG4gICAgICAgICAgeDEgPSBzWzFdO1xuICAgICAgICAgIHkxID0gc1syXTtcbiAgICAgICAgICB4ID0gc1szXTtcbiAgICAgICAgICB5ID0gc1s0XTtcbiAgICAgICAgICByID0gc1s1XTtcbiAgICAgICAgICBjYW52YXMuYXJjVG8oeDEsIHkxLCB4LCB5LCByKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnRSc6IC8vIGVsbGlwc2VcbiAgICAgICAgICB4ID0gc1sxXTtcbiAgICAgICAgICB5ID0gc1syXTtcbiAgICAgICAgICByeCA9IHNbM107XG4gICAgICAgICAgcnkgPSBzWzRdO1xuICAgICAgICAgIGFuZ2xlID0gc1s1XTtcbiAgICAgICAgICBzdGFydEFuZ2xlID0gc1s2XTtcbiAgICAgICAgICBlbmRBbmdsZSA9IHNbN107XG4gICAgICAgICAgY2N3ID0gc1s4XTtcbiAgICAgICAgICBjYW52YXMuc2F2ZSgpO1xuICAgICAgICAgIGNhbnZhcy50cmFuc2xhdGUoeCwgeSk7XG4gICAgICAgICAgY2FudmFzLnJvdGF0ZShhbmdsZSk7XG4gICAgICAgICAgY2FudmFzLnNjYWxlKHJ4LCByeSk7XG4gICAgICAgICAgY2FudmFzLmFyYygwLCAwLCAxLCBzdGFydEFuZ2xlLCBlbmRBbmdsZSwgY2N3KTtcbiAgICAgICAgICBjYW52YXMucmVzdG9yZSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdSJzogLy8gcmVjdFxuICAgICAgICAgIHggPSBzWzFdO1xuICAgICAgICAgIHkgPSBzWzJdO1xuICAgICAgICAgIHcgPSBzWzNdO1xuICAgICAgICAgIGggPSBzWzRdO1xuICAgICAgICAgIHN0YXJ0UG9pbnQgPSB7IHgsIHkgfTtcbiAgICAgICAgICBjYW52YXMucmVjdCh4LCB5LCB3LCBoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKGAke3BhdGhUeXBlfSBpcyBub3QgaW1wbGVtZW50ZWRgKTsgP1xuICAgICAgfVxuXG4gICAgICBjdXJyZW50UG9pbnQueCA9IHg7XG4gICAgICBjdXJyZW50UG9pbnQueSA9IHk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgY0ZpbGwgPSB3aW5kb3cuQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELnByb3RvdHlwZS5maWxsO1xuICBjb25zdCBjU3Ryb2tlID0gd2luZG93LkNhbnZhc1JlbmRlcmluZ0NvbnRleHQyRC5wcm90b3R5cGUuc3Ryb2tlO1xuXG4gIHdpbmRvdy5DYW52YXNSZW5kZXJpbmdDb250ZXh0MkQucHJvdG90eXBlLmZpbGwgPSBmdW5jdGlvbiBmaWxsKC4uLmFyZ3MpIHtcbiAgICBsZXQgZmlsbFJ1bGUgPSAnbm9uemVybyc7XG4gICAgaWYgKFxuICAgICAgYXJncy5sZW5ndGggPT09IDAgfHxcbiAgICAgIChhcmdzLmxlbmd0aCA9PT0gMSAmJiB0eXBlb2YgYXJnc1swXSA9PT0gJ3N0cmluZycpXG4gICAgKSB7XG4gICAgICBjRmlsbC5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIHtcbiAgICAgIGZpbGxSdWxlID0gYXJnc1sxXTtcbiAgICB9XG4gICAgY29uc3QgcGF0aCA9IGFyZ3NbMF07XG4gICAgYnVpbGRQYXRoKHRoaXMsIHBhdGguc2VnbWVudHMpO1xuICAgIGNGaWxsLmNhbGwodGhpcywgZmlsbFJ1bGUpO1xuICB9O1xuXG4gIHdpbmRvdy5DYW52YXNSZW5kZXJpbmdDb250ZXh0MkQucHJvdG90eXBlLnN0cm9rZSA9IGZ1bmN0aW9uIHN0cm9rZShwYXRoKSB7XG4gICAgaWYgKCFwYXRoKSB7XG4gICAgICBjU3Ryb2tlLmNhbGwodGhpcyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGJ1aWxkUGF0aCh0aGlzLCBwYXRoLnNlZ21lbnRzKTtcbiAgICBjU3Ryb2tlLmNhbGwodGhpcyk7XG4gIH07XG5cbiAgY29uc3QgY0lzUG9pbnRJblBhdGggPVxuICAgIHdpbmRvdy5DYW52YXNSZW5kZXJpbmdDb250ZXh0MkQucHJvdG90eXBlLmlzUG9pbnRJblBhdGg7XG5cbiAgd2luZG93LkNhbnZhc1JlbmRlcmluZ0NvbnRleHQyRC5wcm90b3R5cGUuaXNQb2ludEluUGF0aCA9IGZ1bmN0aW9uIGlzUG9pbnRJblBhdGgoXG4gICAgLi4uYXJnc1xuICApIHtcbiAgICAvLyBsZXQgZmlsbFJ1bGUgPSAnbm9uemVybyc7XG4gICAgaWYgKGFyZ3NbMF0uY29uc3RydWN0b3IubmFtZSA9PT0gJ1BhdGgyRCcpIHtcbiAgICAgIC8vIGZpcnN0IGFyZ3VtZW50IGlzIGEgUGF0aDJEIG9iamVjdFxuICAgICAgY29uc3QgeCA9IGFyZ3NbMV07XG4gICAgICBjb25zdCB5ID0gYXJnc1syXTtcbiAgICAgIGNvbnN0IGZpbGxSdWxlID0gYXJnc1szXSB8fCAnbm9uemVybyc7XG4gICAgICBjb25zdCBwYXRoID0gYXJnc1swXTtcbiAgICAgIGJ1aWxkUGF0aCh0aGlzLCBwYXRoLnNlZ21lbnRzKTtcbiAgICAgIHJldHVybiBjSXNQb2ludEluUGF0aC5hcHBseSh0aGlzLCBbeCwgeSwgZmlsbFJ1bGVdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGNJc1BvaW50SW5QYXRoLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH1cbiAgfTtcblxuICB3aW5kb3cuUGF0aDJEID0gUGF0aDJEO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHBvbHlGaWxsUGF0aDJEO1xuIiwiY29uc3QgcGFyc2VQYXRoID0gcmVxdWlyZSgnLi9wYXJzZS1wYXRoJyk7XG5jb25zdCBwYXRoMmRQb2x5ZmlsbCA9IHJlcXVpcmUoJy4vcGF0aDJkLXBvbHlmaWxsJyk7XG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICBwYXRoMmRQb2x5ZmlsbCh3aW5kb3cpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcGF0aDJkUG9seWZpbGwsXG4gIHBhcnNlUGF0aCxcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuaW8gPSBleHBvcnRzLlNvY2tldCA9IGV4cG9ydHMuTWFuYWdlciA9IGV4cG9ydHMucHJvdG9jb2wgPSB2b2lkIDA7XG5jb25zdCB1cmxfMSA9IHJlcXVpcmUoXCIuL3VybFwiKTtcbmNvbnN0IG1hbmFnZXJfMSA9IHJlcXVpcmUoXCIuL21hbmFnZXJcIik7XG5jb25zdCBkZWJ1ZyA9IHJlcXVpcmUoXCJkZWJ1Z1wiKShcInNvY2tldC5pby1jbGllbnRcIik7XG4vKipcbiAqIE1vZHVsZSBleHBvcnRzLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBsb29rdXA7XG4vKipcbiAqIE1hbmFnZXJzIGNhY2hlLlxuICovXG5jb25zdCBjYWNoZSA9IChleHBvcnRzLm1hbmFnZXJzID0ge30pO1xuZnVuY3Rpb24gbG9va3VwKHVyaSwgb3B0cykge1xuICAgIGlmICh0eXBlb2YgdXJpID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIG9wdHMgPSB1cmk7XG4gICAgICAgIHVyaSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgb3B0cyA9IG9wdHMgfHwge307XG4gICAgY29uc3QgcGFyc2VkID0gdXJsXzEudXJsKHVyaSwgb3B0cy5wYXRoIHx8IFwiL3NvY2tldC5pb1wiKTtcbiAgICBjb25zdCBzb3VyY2UgPSBwYXJzZWQuc291cmNlO1xuICAgIGNvbnN0IGlkID0gcGFyc2VkLmlkO1xuICAgIGNvbnN0IHBhdGggPSBwYXJzZWQucGF0aDtcbiAgICBjb25zdCBzYW1lTmFtZXNwYWNlID0gY2FjaGVbaWRdICYmIHBhdGggaW4gY2FjaGVbaWRdW1wibnNwc1wiXTtcbiAgICBjb25zdCBuZXdDb25uZWN0aW9uID0gb3B0cy5mb3JjZU5ldyB8fFxuICAgICAgICBvcHRzW1wiZm9yY2UgbmV3IGNvbm5lY3Rpb25cIl0gfHxcbiAgICAgICAgZmFsc2UgPT09IG9wdHMubXVsdGlwbGV4IHx8XG4gICAgICAgIHNhbWVOYW1lc3BhY2U7XG4gICAgbGV0IGlvO1xuICAgIGlmIChuZXdDb25uZWN0aW9uKSB7XG4gICAgICAgIGRlYnVnKFwiaWdub3Jpbmcgc29ja2V0IGNhY2hlIGZvciAlc1wiLCBzb3VyY2UpO1xuICAgICAgICBpbyA9IG5ldyBtYW5hZ2VyXzEuTWFuYWdlcihzb3VyY2UsIG9wdHMpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKCFjYWNoZVtpZF0pIHtcbiAgICAgICAgICAgIGRlYnVnKFwibmV3IGlvIGluc3RhbmNlIGZvciAlc1wiLCBzb3VyY2UpO1xuICAgICAgICAgICAgY2FjaGVbaWRdID0gbmV3IG1hbmFnZXJfMS5NYW5hZ2VyKHNvdXJjZSwgb3B0cyk7XG4gICAgICAgIH1cbiAgICAgICAgaW8gPSBjYWNoZVtpZF07XG4gICAgfVxuICAgIGlmIChwYXJzZWQucXVlcnkgJiYgIW9wdHMucXVlcnkpIHtcbiAgICAgICAgb3B0cy5xdWVyeSA9IHBhcnNlZC5xdWVyeUtleTtcbiAgICB9XG4gICAgcmV0dXJuIGlvLnNvY2tldChwYXJzZWQucGF0aCwgb3B0cyk7XG59XG5leHBvcnRzLmlvID0gbG9va3VwO1xuLyoqXG4gKiBQcm90b2NvbCB2ZXJzaW9uLlxuICpcbiAqIEBwdWJsaWNcbiAqL1xudmFyIHNvY2tldF9pb19wYXJzZXJfMSA9IHJlcXVpcmUoXCJzb2NrZXQuaW8tcGFyc2VyXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwicHJvdG9jb2xcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNvY2tldF9pb19wYXJzZXJfMS5wcm90b2NvbDsgfSB9KTtcbi8qKlxuICogYGNvbm5lY3RgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmlcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0cy5jb25uZWN0ID0gbG9va3VwO1xuLyoqXG4gKiBFeHBvc2UgY29uc3RydWN0b3JzIGZvciBzdGFuZGFsb25lIGJ1aWxkLlxuICpcbiAqIEBwdWJsaWNcbiAqL1xudmFyIG1hbmFnZXJfMiA9IHJlcXVpcmUoXCIuL21hbmFnZXJcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJNYW5hZ2VyXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBtYW5hZ2VyXzIuTWFuYWdlcjsgfSB9KTtcbnZhciBzb2NrZXRfMSA9IHJlcXVpcmUoXCIuL3NvY2tldFwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlNvY2tldFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc29ja2V0XzEuU29ja2V0OyB9IH0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gbG9va3VwO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLk1hbmFnZXIgPSB2b2lkIDA7XG5jb25zdCBlaW8gPSByZXF1aXJlKFwiZW5naW5lLmlvLWNsaWVudFwiKTtcbmNvbnN0IHNvY2tldF8xID0gcmVxdWlyZShcIi4vc29ja2V0XCIpO1xuY29uc3QgcGFyc2VyID0gcmVxdWlyZShcInNvY2tldC5pby1wYXJzZXJcIik7XG5jb25zdCBvbl8xID0gcmVxdWlyZShcIi4vb25cIik7XG5jb25zdCBCYWNrb2ZmID0gcmVxdWlyZShcImJhY2tvMlwiKTtcbmNvbnN0IHR5cGVkX2V2ZW50c18xID0gcmVxdWlyZShcIi4vdHlwZWQtZXZlbnRzXCIpO1xuY29uc3QgZGVidWcgPSByZXF1aXJlKFwiZGVidWdcIikoXCJzb2NrZXQuaW8tY2xpZW50Om1hbmFnZXJcIik7XG5jbGFzcyBNYW5hZ2VyIGV4dGVuZHMgdHlwZWRfZXZlbnRzXzEuU3RyaWN0RXZlbnRFbWl0dGVyIHtcbiAgICBjb25zdHJ1Y3Rvcih1cmksIG9wdHMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5uc3BzID0ge307XG4gICAgICAgIHRoaXMuc3VicyA9IFtdO1xuICAgICAgICBpZiAodXJpICYmIFwib2JqZWN0XCIgPT09IHR5cGVvZiB1cmkpIHtcbiAgICAgICAgICAgIG9wdHMgPSB1cmk7XG4gICAgICAgICAgICB1cmkgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgb3B0cyA9IG9wdHMgfHwge307XG4gICAgICAgIG9wdHMucGF0aCA9IG9wdHMucGF0aCB8fCBcIi9zb2NrZXQuaW9cIjtcbiAgICAgICAgdGhpcy5vcHRzID0gb3B0cztcbiAgICAgICAgdGhpcy5yZWNvbm5lY3Rpb24ob3B0cy5yZWNvbm5lY3Rpb24gIT09IGZhbHNlKTtcbiAgICAgICAgdGhpcy5yZWNvbm5lY3Rpb25BdHRlbXB0cyhvcHRzLnJlY29ubmVjdGlvbkF0dGVtcHRzIHx8IEluZmluaXR5KTtcbiAgICAgICAgdGhpcy5yZWNvbm5lY3Rpb25EZWxheShvcHRzLnJlY29ubmVjdGlvbkRlbGF5IHx8IDEwMDApO1xuICAgICAgICB0aGlzLnJlY29ubmVjdGlvbkRlbGF5TWF4KG9wdHMucmVjb25uZWN0aW9uRGVsYXlNYXggfHwgNTAwMCk7XG4gICAgICAgIHRoaXMucmFuZG9taXphdGlvbkZhY3RvcihvcHRzLnJhbmRvbWl6YXRpb25GYWN0b3IgfHwgMC41KTtcbiAgICAgICAgdGhpcy5iYWNrb2ZmID0gbmV3IEJhY2tvZmYoe1xuICAgICAgICAgICAgbWluOiB0aGlzLnJlY29ubmVjdGlvbkRlbGF5KCksXG4gICAgICAgICAgICBtYXg6IHRoaXMucmVjb25uZWN0aW9uRGVsYXlNYXgoKSxcbiAgICAgICAgICAgIGppdHRlcjogdGhpcy5yYW5kb21pemF0aW9uRmFjdG9yKCksXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnRpbWVvdXQobnVsbCA9PSBvcHRzLnRpbWVvdXQgPyAyMDAwMCA6IG9wdHMudGltZW91dCk7XG4gICAgICAgIHRoaXMuX3JlYWR5U3RhdGUgPSBcImNsb3NlZFwiO1xuICAgICAgICB0aGlzLnVyaSA9IHVyaTtcbiAgICAgICAgY29uc3QgX3BhcnNlciA9IG9wdHMucGFyc2VyIHx8IHBhcnNlcjtcbiAgICAgICAgdGhpcy5lbmNvZGVyID0gbmV3IF9wYXJzZXIuRW5jb2RlcigpO1xuICAgICAgICB0aGlzLmRlY29kZXIgPSBuZXcgX3BhcnNlci5EZWNvZGVyKCk7XG4gICAgICAgIHRoaXMuX2F1dG9Db25uZWN0ID0gb3B0cy5hdXRvQ29ubmVjdCAhPT0gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLl9hdXRvQ29ubmVjdClcbiAgICAgICAgICAgIHRoaXMub3BlbigpO1xuICAgIH1cbiAgICByZWNvbm5lY3Rpb24odikge1xuICAgICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVjb25uZWN0aW9uO1xuICAgICAgICB0aGlzLl9yZWNvbm5lY3Rpb24gPSAhIXY7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICByZWNvbm5lY3Rpb25BdHRlbXB0cyh2KSB7XG4gICAgICAgIGlmICh2ID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVjb25uZWN0aW9uQXR0ZW1wdHM7XG4gICAgICAgIHRoaXMuX3JlY29ubmVjdGlvbkF0dGVtcHRzID0gdjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHJlY29ubmVjdGlvbkRlbGF5KHYpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBpZiAodiA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JlY29ubmVjdGlvbkRlbGF5O1xuICAgICAgICB0aGlzLl9yZWNvbm5lY3Rpb25EZWxheSA9IHY7XG4gICAgICAgIChfYSA9IHRoaXMuYmFja29mZikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnNldE1pbih2KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHJhbmRvbWl6YXRpb25GYWN0b3Iodikge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGlmICh2ID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmFuZG9taXphdGlvbkZhY3RvcjtcbiAgICAgICAgdGhpcy5fcmFuZG9taXphdGlvbkZhY3RvciA9IHY7XG4gICAgICAgIChfYSA9IHRoaXMuYmFja29mZikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnNldEppdHRlcih2KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHJlY29ubmVjdGlvbkRlbGF5TWF4KHYpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBpZiAodiA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JlY29ubmVjdGlvbkRlbGF5TWF4O1xuICAgICAgICB0aGlzLl9yZWNvbm5lY3Rpb25EZWxheU1heCA9IHY7XG4gICAgICAgIChfYSA9IHRoaXMuYmFja29mZikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnNldE1heCh2KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHRpbWVvdXQodikge1xuICAgICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdGltZW91dDtcbiAgICAgICAgdGhpcy5fdGltZW91dCA9IHY7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTdGFydHMgdHJ5aW5nIHRvIHJlY29ubmVjdCBpZiByZWNvbm5lY3Rpb24gaXMgZW5hYmxlZCBhbmQgd2UgaGF2ZSBub3RcbiAgICAgKiBzdGFydGVkIHJlY29ubmVjdGluZyB5ZXRcbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgbWF5YmVSZWNvbm5lY3RPbk9wZW4oKSB7XG4gICAgICAgIC8vIE9ubHkgdHJ5IHRvIHJlY29ubmVjdCBpZiBpdCdzIHRoZSBmaXJzdCB0aW1lIHdlJ3JlIGNvbm5lY3RpbmdcbiAgICAgICAgaWYgKCF0aGlzLl9yZWNvbm5lY3RpbmcgJiZcbiAgICAgICAgICAgIHRoaXMuX3JlY29ubmVjdGlvbiAmJlxuICAgICAgICAgICAgdGhpcy5iYWNrb2ZmLmF0dGVtcHRzID09PSAwKSB7XG4gICAgICAgICAgICAvLyBrZWVwcyByZWNvbm5lY3Rpb24gZnJvbSBmaXJpbmcgdHdpY2UgZm9yIHRoZSBzYW1lIHJlY29ubmVjdGlvbiBsb29wXG4gICAgICAgICAgICB0aGlzLnJlY29ubmVjdCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGN1cnJlbnQgdHJhbnNwb3J0IGBzb2NrZXRgLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gLSBvcHRpb25hbCwgY2FsbGJhY2tcbiAgICAgKiBAcmV0dXJuIHNlbGZcbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgb3Blbihmbikge1xuICAgICAgICBkZWJ1ZyhcInJlYWR5U3RhdGUgJXNcIiwgdGhpcy5fcmVhZHlTdGF0ZSk7XG4gICAgICAgIGlmICh+dGhpcy5fcmVhZHlTdGF0ZS5pbmRleE9mKFwib3BlblwiKSlcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICBkZWJ1ZyhcIm9wZW5pbmcgJXNcIiwgdGhpcy51cmkpO1xuICAgICAgICB0aGlzLmVuZ2luZSA9IGVpbyh0aGlzLnVyaSwgdGhpcy5vcHRzKTtcbiAgICAgICAgY29uc3Qgc29ja2V0ID0gdGhpcy5lbmdpbmU7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLl9yZWFkeVN0YXRlID0gXCJvcGVuaW5nXCI7XG4gICAgICAgIHRoaXMuc2tpcFJlY29ubmVjdCA9IGZhbHNlO1xuICAgICAgICAvLyBlbWl0IGBvcGVuYFxuICAgICAgICBjb25zdCBvcGVuU3ViRGVzdHJveSA9IG9uXzEub24oc29ja2V0LCBcIm9wZW5cIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2VsZi5vbm9wZW4oKTtcbiAgICAgICAgICAgIGZuICYmIGZuKCk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBlbWl0IGBlcnJvcmBcbiAgICAgICAgY29uc3QgZXJyb3JTdWIgPSBvbl8xLm9uKHNvY2tldCwgXCJlcnJvclwiLCAoZXJyKSA9PiB7XG4gICAgICAgICAgICBkZWJ1ZyhcImVycm9yXCIpO1xuICAgICAgICAgICAgc2VsZi5jbGVhbnVwKCk7XG4gICAgICAgICAgICBzZWxmLl9yZWFkeVN0YXRlID0gXCJjbG9zZWRcIjtcbiAgICAgICAgICAgIHRoaXMuZW1pdFJlc2VydmVkKFwiZXJyb3JcIiwgZXJyKTtcbiAgICAgICAgICAgIGlmIChmbikge1xuICAgICAgICAgICAgICAgIGZuKGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBPbmx5IGRvIHRoaXMgaWYgdGhlcmUgaXMgbm8gZm4gdG8gaGFuZGxlIHRoZSBlcnJvclxuICAgICAgICAgICAgICAgIHNlbGYubWF5YmVSZWNvbm5lY3RPbk9wZW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChmYWxzZSAhPT0gdGhpcy5fdGltZW91dCkge1xuICAgICAgICAgICAgY29uc3QgdGltZW91dCA9IHRoaXMuX3RpbWVvdXQ7XG4gICAgICAgICAgICBkZWJ1ZyhcImNvbm5lY3QgYXR0ZW1wdCB3aWxsIHRpbWVvdXQgYWZ0ZXIgJWRcIiwgdGltZW91dCk7XG4gICAgICAgICAgICBpZiAodGltZW91dCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIG9wZW5TdWJEZXN0cm95KCk7IC8vIHByZXZlbnRzIGEgcmFjZSBjb25kaXRpb24gd2l0aCB0aGUgJ29wZW4nIGV2ZW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBzZXQgdGltZXJcbiAgICAgICAgICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgZGVidWcoXCJjb25uZWN0IGF0dGVtcHQgdGltZWQgb3V0IGFmdGVyICVkXCIsIHRpbWVvdXQpO1xuICAgICAgICAgICAgICAgIG9wZW5TdWJEZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgc29ja2V0LmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgc29ja2V0LmVtaXQoXCJlcnJvclwiLCBuZXcgRXJyb3IoXCJ0aW1lb3V0XCIpKTtcbiAgICAgICAgICAgIH0sIHRpbWVvdXQpO1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0cy5hdXRvVW5yZWYpIHtcbiAgICAgICAgICAgICAgICB0aW1lci51bnJlZigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zdWJzLnB1c2goZnVuY3Rpb24gc3ViRGVzdHJveSgpIHtcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdWJzLnB1c2gob3BlblN1YkRlc3Ryb3kpO1xuICAgICAgICB0aGlzLnN1YnMucHVzaChlcnJvclN1Yik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBbGlhcyBmb3Igb3BlbigpXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHNlbGZcbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgY29ubmVjdChmbikge1xuICAgICAgICByZXR1cm4gdGhpcy5vcGVuKGZuKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHVwb24gdHJhbnNwb3J0IG9wZW4uXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIG9ub3BlbigpIHtcbiAgICAgICAgZGVidWcoXCJvcGVuXCIpO1xuICAgICAgICAvLyBjbGVhciBvbGQgc3Vic1xuICAgICAgICB0aGlzLmNsZWFudXAoKTtcbiAgICAgICAgLy8gbWFyayBhcyBvcGVuXG4gICAgICAgIHRoaXMuX3JlYWR5U3RhdGUgPSBcIm9wZW5cIjtcbiAgICAgICAgdGhpcy5lbWl0UmVzZXJ2ZWQoXCJvcGVuXCIpO1xuICAgICAgICAvLyBhZGQgbmV3IHN1YnNcbiAgICAgICAgY29uc3Qgc29ja2V0ID0gdGhpcy5lbmdpbmU7XG4gICAgICAgIHRoaXMuc3Vicy5wdXNoKG9uXzEub24oc29ja2V0LCBcInBpbmdcIiwgdGhpcy5vbnBpbmcuYmluZCh0aGlzKSksIG9uXzEub24oc29ja2V0LCBcImRhdGFcIiwgdGhpcy5vbmRhdGEuYmluZCh0aGlzKSksIG9uXzEub24oc29ja2V0LCBcImVycm9yXCIsIHRoaXMub25lcnJvci5iaW5kKHRoaXMpKSwgb25fMS5vbihzb2NrZXQsIFwiY2xvc2VcIiwgdGhpcy5vbmNsb3NlLmJpbmQodGhpcykpLCBvbl8xLm9uKHRoaXMuZGVjb2RlciwgXCJkZWNvZGVkXCIsIHRoaXMub25kZWNvZGVkLmJpbmQodGhpcykpKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHVwb24gYSBwaW5nLlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBvbnBpbmcoKSB7XG4gICAgICAgIHRoaXMuZW1pdFJlc2VydmVkKFwicGluZ1wiKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHdpdGggZGF0YS5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgb25kYXRhKGRhdGEpIHtcbiAgICAgICAgdGhpcy5kZWNvZGVyLmFkZChkYXRhKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHdoZW4gcGFyc2VyIGZ1bGx5IGRlY29kZXMgYSBwYWNrZXQuXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIG9uZGVjb2RlZChwYWNrZXQpIHtcbiAgICAgICAgdGhpcy5lbWl0UmVzZXJ2ZWQoXCJwYWNrZXRcIiwgcGFja2V0KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHVwb24gc29ja2V0IGVycm9yLlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBvbmVycm9yKGVycikge1xuICAgICAgICBkZWJ1ZyhcImVycm9yXCIsIGVycik7XG4gICAgICAgIHRoaXMuZW1pdFJlc2VydmVkKFwiZXJyb3JcIiwgZXJyKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyBzb2NrZXQgZm9yIHRoZSBnaXZlbiBgbnNwYC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1NvY2tldH1cbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgc29ja2V0KG5zcCwgb3B0cykge1xuICAgICAgICBsZXQgc29ja2V0ID0gdGhpcy5uc3BzW25zcF07XG4gICAgICAgIGlmICghc29ja2V0KSB7XG4gICAgICAgICAgICBzb2NrZXQgPSBuZXcgc29ja2V0XzEuU29ja2V0KHRoaXMsIG5zcCwgb3B0cyk7XG4gICAgICAgICAgICB0aGlzLm5zcHNbbnNwXSA9IHNvY2tldDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc29ja2V0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgdXBvbiBhIHNvY2tldCBjbG9zZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzb2NrZXRcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9kZXN0cm95KHNvY2tldCkge1xuICAgICAgICBjb25zdCBuc3BzID0gT2JqZWN0LmtleXModGhpcy5uc3BzKTtcbiAgICAgICAgZm9yIChjb25zdCBuc3Agb2YgbnNwcykge1xuICAgICAgICAgICAgY29uc3Qgc29ja2V0ID0gdGhpcy5uc3BzW25zcF07XG4gICAgICAgICAgICBpZiAoc29ja2V0LmFjdGl2ZSkge1xuICAgICAgICAgICAgICAgIGRlYnVnKFwic29ja2V0ICVzIGlzIHN0aWxsIGFjdGl2ZSwgc2tpcHBpbmcgY2xvc2VcIiwgbnNwKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fY2xvc2UoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogV3JpdGVzIGEgcGFja2V0LlxuICAgICAqXG4gICAgICogQHBhcmFtIHBhY2tldFxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX3BhY2tldChwYWNrZXQpIHtcbiAgICAgICAgZGVidWcoXCJ3cml0aW5nIHBhY2tldCAlalwiLCBwYWNrZXQpO1xuICAgICAgICBjb25zdCBlbmNvZGVkUGFja2V0cyA9IHRoaXMuZW5jb2Rlci5lbmNvZGUocGFja2V0KTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbmNvZGVkUGFja2V0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5lbmdpbmUud3JpdGUoZW5jb2RlZFBhY2tldHNbaV0sIHBhY2tldC5vcHRpb25zKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBDbGVhbiB1cCB0cmFuc3BvcnQgc3Vic2NyaXB0aW9ucyBhbmQgcGFja2V0IGJ1ZmZlci5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgY2xlYW51cCgpIHtcbiAgICAgICAgZGVidWcoXCJjbGVhbnVwXCIpO1xuICAgICAgICB0aGlzLnN1YnMuZm9yRWFjaCgoc3ViRGVzdHJveSkgPT4gc3ViRGVzdHJveSgpKTtcbiAgICAgICAgdGhpcy5zdWJzLmxlbmd0aCA9IDA7XG4gICAgICAgIHRoaXMuZGVjb2Rlci5kZXN0cm95KCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENsb3NlIHRoZSBjdXJyZW50IHNvY2tldC5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX2Nsb3NlKCkge1xuICAgICAgICBkZWJ1ZyhcImRpc2Nvbm5lY3RcIik7XG4gICAgICAgIHRoaXMuc2tpcFJlY29ubmVjdCA9IHRydWU7XG4gICAgICAgIHRoaXMuX3JlY29ubmVjdGluZyA9IGZhbHNlO1xuICAgICAgICBpZiAoXCJvcGVuaW5nXCIgPT09IHRoaXMuX3JlYWR5U3RhdGUpIHtcbiAgICAgICAgICAgIC8vIGBvbmNsb3NlYCB3aWxsIG5vdCBmaXJlIGJlY2F1c2VcbiAgICAgICAgICAgIC8vIGFuIG9wZW4gZXZlbnQgbmV2ZXIgaGFwcGVuZWRcbiAgICAgICAgICAgIHRoaXMuY2xlYW51cCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYmFja29mZi5yZXNldCgpO1xuICAgICAgICB0aGlzLl9yZWFkeVN0YXRlID0gXCJjbG9zZWRcIjtcbiAgICAgICAgaWYgKHRoaXMuZW5naW5lKVxuICAgICAgICAgICAgdGhpcy5lbmdpbmUuY2xvc2UoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWxpYXMgZm9yIGNsb3NlKClcbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgZGlzY29ubmVjdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Nsb3NlKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxlZCB1cG9uIGVuZ2luZSBjbG9zZS5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgb25jbG9zZShyZWFzb24pIHtcbiAgICAgICAgZGVidWcoXCJvbmNsb3NlXCIpO1xuICAgICAgICB0aGlzLmNsZWFudXAoKTtcbiAgICAgICAgdGhpcy5iYWNrb2ZmLnJlc2V0KCk7XG4gICAgICAgIHRoaXMuX3JlYWR5U3RhdGUgPSBcImNsb3NlZFwiO1xuICAgICAgICB0aGlzLmVtaXRSZXNlcnZlZChcImNsb3NlXCIsIHJlYXNvbik7XG4gICAgICAgIGlmICh0aGlzLl9yZWNvbm5lY3Rpb24gJiYgIXRoaXMuc2tpcFJlY29ubmVjdCkge1xuICAgICAgICAgICAgdGhpcy5yZWNvbm5lY3QoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBBdHRlbXB0IGEgcmVjb25uZWN0aW9uLlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICByZWNvbm5lY3QoKSB7XG4gICAgICAgIGlmICh0aGlzLl9yZWNvbm5lY3RpbmcgfHwgdGhpcy5za2lwUmVjb25uZWN0KVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBpZiAodGhpcy5iYWNrb2ZmLmF0dGVtcHRzID49IHRoaXMuX3JlY29ubmVjdGlvbkF0dGVtcHRzKSB7XG4gICAgICAgICAgICBkZWJ1ZyhcInJlY29ubmVjdCBmYWlsZWRcIik7XG4gICAgICAgICAgICB0aGlzLmJhY2tvZmYucmVzZXQoKTtcbiAgICAgICAgICAgIHRoaXMuZW1pdFJlc2VydmVkKFwicmVjb25uZWN0X2ZhaWxlZFwiKTtcbiAgICAgICAgICAgIHRoaXMuX3JlY29ubmVjdGluZyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgZGVsYXkgPSB0aGlzLmJhY2tvZmYuZHVyYXRpb24oKTtcbiAgICAgICAgICAgIGRlYnVnKFwid2lsbCB3YWl0ICVkbXMgYmVmb3JlIHJlY29ubmVjdCBhdHRlbXB0XCIsIGRlbGF5KTtcbiAgICAgICAgICAgIHRoaXMuX3JlY29ubmVjdGluZyA9IHRydWU7XG4gICAgICAgICAgICBjb25zdCB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChzZWxmLnNraXBSZWNvbm5lY3QpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICBkZWJ1ZyhcImF0dGVtcHRpbmcgcmVjb25uZWN0XCIpO1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdFJlc2VydmVkKFwicmVjb25uZWN0X2F0dGVtcHRcIiwgc2VsZi5iYWNrb2ZmLmF0dGVtcHRzKTtcbiAgICAgICAgICAgICAgICAvLyBjaGVjayBhZ2FpbiBmb3IgdGhlIGNhc2Ugc29ja2V0IGNsb3NlZCBpbiBhYm92ZSBldmVudHNcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5za2lwUmVjb25uZWN0KVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgc2VsZi5vcGVuKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVidWcoXCJyZWNvbm5lY3QgYXR0ZW1wdCBlcnJvclwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuX3JlY29ubmVjdGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5yZWNvbm5lY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdFJlc2VydmVkKFwicmVjb25uZWN0X2Vycm9yXCIsIGVycik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWJ1ZyhcInJlY29ubmVjdCBzdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5vbnJlY29ubmVjdCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LCBkZWxheSk7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRzLmF1dG9VbnJlZikge1xuICAgICAgICAgICAgICAgIHRpbWVyLnVucmVmKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnN1YnMucHVzaChmdW5jdGlvbiBzdWJEZXN0cm95KCkge1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgdXBvbiBzdWNjZXNzZnVsIHJlY29ubmVjdC5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgb25yZWNvbm5lY3QoKSB7XG4gICAgICAgIGNvbnN0IGF0dGVtcHQgPSB0aGlzLmJhY2tvZmYuYXR0ZW1wdHM7XG4gICAgICAgIHRoaXMuX3JlY29ubmVjdGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmJhY2tvZmYucmVzZXQoKTtcbiAgICAgICAgdGhpcy5lbWl0UmVzZXJ2ZWQoXCJyZWNvbm5lY3RcIiwgYXR0ZW1wdCk7XG4gICAgfVxufVxuZXhwb3J0cy5NYW5hZ2VyID0gTWFuYWdlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5vbiA9IHZvaWQgMDtcbmZ1bmN0aW9uIG9uKG9iaiwgZXYsIGZuKSB7XG4gICAgb2JqLm9uKGV2LCBmbik7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHN1YkRlc3Ryb3koKSB7XG4gICAgICAgIG9iai5vZmYoZXYsIGZuKTtcbiAgICB9O1xufVxuZXhwb3J0cy5vbiA9IG9uO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlNvY2tldCA9IHZvaWQgMDtcbmNvbnN0IHNvY2tldF9pb19wYXJzZXJfMSA9IHJlcXVpcmUoXCJzb2NrZXQuaW8tcGFyc2VyXCIpO1xuY29uc3Qgb25fMSA9IHJlcXVpcmUoXCIuL29uXCIpO1xuY29uc3QgdHlwZWRfZXZlbnRzXzEgPSByZXF1aXJlKFwiLi90eXBlZC1ldmVudHNcIik7XG5jb25zdCBkZWJ1ZyA9IHJlcXVpcmUoXCJkZWJ1Z1wiKShcInNvY2tldC5pby1jbGllbnQ6c29ja2V0XCIpO1xuLyoqXG4gKiBJbnRlcm5hbCBldmVudHMuXG4gKiBUaGVzZSBldmVudHMgY2FuJ3QgYmUgZW1pdHRlZCBieSB0aGUgdXNlci5cbiAqL1xuY29uc3QgUkVTRVJWRURfRVZFTlRTID0gT2JqZWN0LmZyZWV6ZSh7XG4gICAgY29ubmVjdDogMSxcbiAgICBjb25uZWN0X2Vycm9yOiAxLFxuICAgIGRpc2Nvbm5lY3Q6IDEsXG4gICAgZGlzY29ubmVjdGluZzogMSxcbiAgICAvLyBFdmVudEVtaXR0ZXIgcmVzZXJ2ZWQgZXZlbnRzOiBodHRwczovL25vZGVqcy5vcmcvYXBpL2V2ZW50cy5odG1sI2V2ZW50c19ldmVudF9uZXdsaXN0ZW5lclxuICAgIG5ld0xpc3RlbmVyOiAxLFxuICAgIHJlbW92ZUxpc3RlbmVyOiAxLFxufSk7XG5jbGFzcyBTb2NrZXQgZXh0ZW5kcyB0eXBlZF9ldmVudHNfMS5TdHJpY3RFdmVudEVtaXR0ZXIge1xuICAgIC8qKlxuICAgICAqIGBTb2NrZXRgIGNvbnN0cnVjdG9yLlxuICAgICAqXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGlvLCBuc3AsIG9wdHMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5yZWNlaXZlQnVmZmVyID0gW107XG4gICAgICAgIHRoaXMuc2VuZEJ1ZmZlciA9IFtdO1xuICAgICAgICB0aGlzLmlkcyA9IDA7XG4gICAgICAgIHRoaXMuYWNrcyA9IHt9O1xuICAgICAgICB0aGlzLmZsYWdzID0ge307XG4gICAgICAgIHRoaXMuaW8gPSBpbztcbiAgICAgICAgdGhpcy5uc3AgPSBuc3A7XG4gICAgICAgIHRoaXMuaWRzID0gMDtcbiAgICAgICAgdGhpcy5hY2tzID0ge307XG4gICAgICAgIHRoaXMucmVjZWl2ZUJ1ZmZlciA9IFtdO1xuICAgICAgICB0aGlzLnNlbmRCdWZmZXIgPSBbXTtcbiAgICAgICAgdGhpcy5jb25uZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kaXNjb25uZWN0ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmZsYWdzID0ge307XG4gICAgICAgIGlmIChvcHRzICYmIG9wdHMuYXV0aCkge1xuICAgICAgICAgICAgdGhpcy5hdXRoID0gb3B0cy5hdXRoO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmlvLl9hdXRvQ29ubmVjdClcbiAgICAgICAgICAgIHRoaXMub3BlbigpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTdWJzY3JpYmUgdG8gb3BlbiwgY2xvc2UgYW5kIHBhY2tldCBldmVudHNcbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgc3ViRXZlbnRzKCkge1xuICAgICAgICBpZiAodGhpcy5zdWJzKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBjb25zdCBpbyA9IHRoaXMuaW87XG4gICAgICAgIHRoaXMuc3VicyA9IFtcbiAgICAgICAgICAgIG9uXzEub24oaW8sIFwib3BlblwiLCB0aGlzLm9ub3Blbi5iaW5kKHRoaXMpKSxcbiAgICAgICAgICAgIG9uXzEub24oaW8sIFwicGFja2V0XCIsIHRoaXMub25wYWNrZXQuYmluZCh0aGlzKSksXG4gICAgICAgICAgICBvbl8xLm9uKGlvLCBcImVycm9yXCIsIHRoaXMub25lcnJvci5iaW5kKHRoaXMpKSxcbiAgICAgICAgICAgIG9uXzEub24oaW8sIFwiY2xvc2VcIiwgdGhpcy5vbmNsb3NlLmJpbmQodGhpcykpLFxuICAgICAgICBdO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIHRoZSBTb2NrZXQgd2lsbCB0cnkgdG8gcmVjb25uZWN0IHdoZW4gaXRzIE1hbmFnZXIgY29ubmVjdHMgb3IgcmVjb25uZWN0c1xuICAgICAqL1xuICAgIGdldCBhY3RpdmUoKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuc3VicztcbiAgICB9XG4gICAgLyoqXG4gICAgICogXCJPcGVuc1wiIHRoZSBzb2NrZXQuXG4gICAgICpcbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuY29ubmVjdGVkKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIHRoaXMuc3ViRXZlbnRzKCk7XG4gICAgICAgIGlmICghdGhpcy5pb1tcIl9yZWNvbm5lY3RpbmdcIl0pXG4gICAgICAgICAgICB0aGlzLmlvLm9wZW4oKTsgLy8gZW5zdXJlIG9wZW5cbiAgICAgICAgaWYgKFwib3BlblwiID09PSB0aGlzLmlvLl9yZWFkeVN0YXRlKVxuICAgICAgICAgICAgdGhpcy5vbm9wZW4oKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFsaWFzIGZvciBjb25uZWN0KClcbiAgICAgKi9cbiAgICBvcGVuKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb25uZWN0KCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNlbmRzIGEgYG1lc3NhZ2VgIGV2ZW50LlxuICAgICAqXG4gICAgICogQHJldHVybiBzZWxmXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIHNlbmQoLi4uYXJncykge1xuICAgICAgICBhcmdzLnVuc2hpZnQoXCJtZXNzYWdlXCIpO1xuICAgICAgICB0aGlzLmVtaXQuYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBPdmVycmlkZSBgZW1pdGAuXG4gICAgICogSWYgdGhlIGV2ZW50IGlzIGluIGBldmVudHNgLCBpdCdzIGVtaXR0ZWQgbm9ybWFsbHkuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHNlbGZcbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgZW1pdChldiwgLi4uYXJncykge1xuICAgICAgICBpZiAoUkVTRVJWRURfRVZFTlRTLmhhc093blByb3BlcnR5KGV2KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdcIicgKyBldiArICdcIiBpcyBhIHJlc2VydmVkIGV2ZW50IG5hbWUnKTtcbiAgICAgICAgfVxuICAgICAgICBhcmdzLnVuc2hpZnQoZXYpO1xuICAgICAgICBjb25zdCBwYWNrZXQgPSB7XG4gICAgICAgICAgICB0eXBlOiBzb2NrZXRfaW9fcGFyc2VyXzEuUGFja2V0VHlwZS5FVkVOVCxcbiAgICAgICAgICAgIGRhdGE6IGFyZ3MsXG4gICAgICAgIH07XG4gICAgICAgIHBhY2tldC5vcHRpb25zID0ge307XG4gICAgICAgIHBhY2tldC5vcHRpb25zLmNvbXByZXNzID0gdGhpcy5mbGFncy5jb21wcmVzcyAhPT0gZmFsc2U7XG4gICAgICAgIC8vIGV2ZW50IGFjayBjYWxsYmFja1xuICAgICAgICBpZiAoXCJmdW5jdGlvblwiID09PSB0eXBlb2YgYXJnc1thcmdzLmxlbmd0aCAtIDFdKSB7XG4gICAgICAgICAgICBkZWJ1ZyhcImVtaXR0aW5nIHBhY2tldCB3aXRoIGFjayBpZCAlZFwiLCB0aGlzLmlkcyk7XG4gICAgICAgICAgICB0aGlzLmFja3NbdGhpcy5pZHNdID0gYXJncy5wb3AoKTtcbiAgICAgICAgICAgIHBhY2tldC5pZCA9IHRoaXMuaWRzKys7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaXNUcmFuc3BvcnRXcml0YWJsZSA9IHRoaXMuaW8uZW5naW5lICYmXG4gICAgICAgICAgICB0aGlzLmlvLmVuZ2luZS50cmFuc3BvcnQgJiZcbiAgICAgICAgICAgIHRoaXMuaW8uZW5naW5lLnRyYW5zcG9ydC53cml0YWJsZTtcbiAgICAgICAgY29uc3QgZGlzY2FyZFBhY2tldCA9IHRoaXMuZmxhZ3Mudm9sYXRpbGUgJiYgKCFpc1RyYW5zcG9ydFdyaXRhYmxlIHx8ICF0aGlzLmNvbm5lY3RlZCk7XG4gICAgICAgIGlmIChkaXNjYXJkUGFja2V0KSB7XG4gICAgICAgICAgICBkZWJ1ZyhcImRpc2NhcmQgcGFja2V0IGFzIHRoZSB0cmFuc3BvcnQgaXMgbm90IGN1cnJlbnRseSB3cml0YWJsZVwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmNvbm5lY3RlZCkge1xuICAgICAgICAgICAgdGhpcy5wYWNrZXQocGFja2V0KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2VuZEJ1ZmZlci5wdXNoKHBhY2tldCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5mbGFncyA9IHt9O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2VuZHMgYSBwYWNrZXQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcGFja2V0XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBwYWNrZXQocGFja2V0KSB7XG4gICAgICAgIHBhY2tldC5uc3AgPSB0aGlzLm5zcDtcbiAgICAgICAgdGhpcy5pby5fcGFja2V0KHBhY2tldCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxlZCB1cG9uIGVuZ2luZSBgb3BlbmAuXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIG9ub3BlbigpIHtcbiAgICAgICAgZGVidWcoXCJ0cmFuc3BvcnQgaXMgb3BlbiAtIGNvbm5lY3RpbmdcIik7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5hdXRoID09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgdGhpcy5hdXRoKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYWNrZXQoeyB0eXBlOiBzb2NrZXRfaW9fcGFyc2VyXzEuUGFja2V0VHlwZS5DT05ORUNULCBkYXRhIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnBhY2tldCh7IHR5cGU6IHNvY2tldF9pb19wYXJzZXJfMS5QYWNrZXRUeXBlLkNPTk5FQ1QsIGRhdGE6IHRoaXMuYXV0aCB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgdXBvbiBlbmdpbmUgb3IgbWFuYWdlciBgZXJyb3JgLlxuICAgICAqXG4gICAgICogQHBhcmFtIGVyclxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgb25lcnJvcihlcnIpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNvbm5lY3RlZCkge1xuICAgICAgICAgICAgdGhpcy5lbWl0UmVzZXJ2ZWQoXCJjb25uZWN0X2Vycm9yXCIsIGVycik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHVwb24gZW5naW5lIGBjbG9zZWAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVhc29uXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBvbmNsb3NlKHJlYXNvbikge1xuICAgICAgICBkZWJ1ZyhcImNsb3NlICglcylcIiwgcmVhc29uKTtcbiAgICAgICAgdGhpcy5jb25uZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kaXNjb25uZWN0ZWQgPSB0cnVlO1xuICAgICAgICBkZWxldGUgdGhpcy5pZDtcbiAgICAgICAgdGhpcy5lbWl0UmVzZXJ2ZWQoXCJkaXNjb25uZWN0XCIsIHJlYXNvbik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxlZCB3aXRoIHNvY2tldCBwYWNrZXQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcGFja2V0XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBvbnBhY2tldChwYWNrZXQpIHtcbiAgICAgICAgY29uc3Qgc2FtZU5hbWVzcGFjZSA9IHBhY2tldC5uc3AgPT09IHRoaXMubnNwO1xuICAgICAgICBpZiAoIXNhbWVOYW1lc3BhY2UpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHN3aXRjaCAocGFja2V0LnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2Ugc29ja2V0X2lvX3BhcnNlcl8xLlBhY2tldFR5cGUuQ09OTkVDVDpcbiAgICAgICAgICAgICAgICBpZiAocGFja2V0LmRhdGEgJiYgcGFja2V0LmRhdGEuc2lkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlkID0gcGFja2V0LmRhdGEuc2lkO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uY29ubmVjdChpZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXRSZXNlcnZlZChcImNvbm5lY3RfZXJyb3JcIiwgbmV3IEVycm9yKFwiSXQgc2VlbXMgeW91IGFyZSB0cnlpbmcgdG8gcmVhY2ggYSBTb2NrZXQuSU8gc2VydmVyIGluIHYyLnggd2l0aCBhIHYzLnggY2xpZW50LCBidXQgdGhleSBhcmUgbm90IGNvbXBhdGlibGUgKG1vcmUgaW5mb3JtYXRpb24gaGVyZTogaHR0cHM6Ly9zb2NrZXQuaW8vZG9jcy92My9taWdyYXRpbmctZnJvbS0yLXgtdG8tMy0wLylcIikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2Ugc29ja2V0X2lvX3BhcnNlcl8xLlBhY2tldFR5cGUuRVZFTlQ6XG4gICAgICAgICAgICAgICAgdGhpcy5vbmV2ZW50KHBhY2tldCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHNvY2tldF9pb19wYXJzZXJfMS5QYWNrZXRUeXBlLkJJTkFSWV9FVkVOVDpcbiAgICAgICAgICAgICAgICB0aGlzLm9uZXZlbnQocGFja2V0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2Ugc29ja2V0X2lvX3BhcnNlcl8xLlBhY2tldFR5cGUuQUNLOlxuICAgICAgICAgICAgICAgIHRoaXMub25hY2socGFja2V0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2Ugc29ja2V0X2lvX3BhcnNlcl8xLlBhY2tldFR5cGUuQklOQVJZX0FDSzpcbiAgICAgICAgICAgICAgICB0aGlzLm9uYWNrKHBhY2tldCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHNvY2tldF9pb19wYXJzZXJfMS5QYWNrZXRUeXBlLkRJU0NPTk5FQ1Q6XG4gICAgICAgICAgICAgICAgdGhpcy5vbmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2Ugc29ja2V0X2lvX3BhcnNlcl8xLlBhY2tldFR5cGUuQ09OTkVDVF9FUlJPUjpcbiAgICAgICAgICAgICAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IocGFja2V0LmRhdGEubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgIGVyci5kYXRhID0gcGFja2V0LmRhdGEuZGF0YTtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXRSZXNlcnZlZChcImNvbm5lY3RfZXJyb3JcIiwgZXJyKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgdXBvbiBhIHNlcnZlciBldmVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBwYWNrZXRcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIG9uZXZlbnQocGFja2V0KSB7XG4gICAgICAgIGNvbnN0IGFyZ3MgPSBwYWNrZXQuZGF0YSB8fCBbXTtcbiAgICAgICAgZGVidWcoXCJlbWl0dGluZyBldmVudCAlalwiLCBhcmdzKTtcbiAgICAgICAgaWYgKG51bGwgIT0gcGFja2V0LmlkKSB7XG4gICAgICAgICAgICBkZWJ1ZyhcImF0dGFjaGluZyBhY2sgY2FsbGJhY2sgdG8gZXZlbnRcIik7XG4gICAgICAgICAgICBhcmdzLnB1c2godGhpcy5hY2socGFja2V0LmlkKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY29ubmVjdGVkKSB7XG4gICAgICAgICAgICB0aGlzLmVtaXRFdmVudChhcmdzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucmVjZWl2ZUJ1ZmZlci5wdXNoKE9iamVjdC5mcmVlemUoYXJncykpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVtaXRFdmVudChhcmdzKSB7XG4gICAgICAgIGlmICh0aGlzLl9hbnlMaXN0ZW5lcnMgJiYgdGhpcy5fYW55TGlzdGVuZXJzLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3QgbGlzdGVuZXJzID0gdGhpcy5fYW55TGlzdGVuZXJzLnNsaWNlKCk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGxpc3RlbmVyIG9mIGxpc3RlbmVycykge1xuICAgICAgICAgICAgICAgIGxpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHN1cGVyLmVtaXQuYXBwbHkodGhpcywgYXJncyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFByb2R1Y2VzIGFuIGFjayBjYWxsYmFjayB0byBlbWl0IHdpdGggYW4gZXZlbnQuXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGFjayhpZCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgbGV0IHNlbnQgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gICAgICAgICAgICAvLyBwcmV2ZW50IGRvdWJsZSBjYWxsYmFja3NcbiAgICAgICAgICAgIGlmIChzZW50KVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIHNlbnQgPSB0cnVlO1xuICAgICAgICAgICAgZGVidWcoXCJzZW5kaW5nIGFjayAlalwiLCBhcmdzKTtcbiAgICAgICAgICAgIHNlbGYucGFja2V0KHtcbiAgICAgICAgICAgICAgICB0eXBlOiBzb2NrZXRfaW9fcGFyc2VyXzEuUGFja2V0VHlwZS5BQ0ssXG4gICAgICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgICAgIGRhdGE6IGFyZ3MsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHVwb24gYSBzZXJ2ZXIgYWNrbm93bGVnZW1lbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcGFja2V0XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBvbmFjayhwYWNrZXQpIHtcbiAgICAgICAgY29uc3QgYWNrID0gdGhpcy5hY2tzW3BhY2tldC5pZF07XG4gICAgICAgIGlmIChcImZ1bmN0aW9uXCIgPT09IHR5cGVvZiBhY2spIHtcbiAgICAgICAgICAgIGRlYnVnKFwiY2FsbGluZyBhY2sgJXMgd2l0aCAlalwiLCBwYWNrZXQuaWQsIHBhY2tldC5kYXRhKTtcbiAgICAgICAgICAgIGFjay5hcHBseSh0aGlzLCBwYWNrZXQuZGF0YSk7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5hY2tzW3BhY2tldC5pZF07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkZWJ1ZyhcImJhZCBhY2sgJXNcIiwgcGFja2V0LmlkKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgdXBvbiBzZXJ2ZXIgY29ubmVjdC5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgb25jb25uZWN0KGlkKSB7XG4gICAgICAgIGRlYnVnKFwic29ja2V0IGNvbm5lY3RlZCB3aXRoIGlkICVzXCIsIGlkKTtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLmNvbm5lY3RlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuZGlzY29ubmVjdGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZW1pdEJ1ZmZlcmVkKCk7XG4gICAgICAgIHRoaXMuZW1pdFJlc2VydmVkKFwiY29ubmVjdFwiKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRW1pdCBidWZmZXJlZCBldmVudHMgKHJlY2VpdmVkIGFuZCBlbWl0dGVkKS5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgZW1pdEJ1ZmZlcmVkKCkge1xuICAgICAgICB0aGlzLnJlY2VpdmVCdWZmZXIuZm9yRWFjaCgoYXJncykgPT4gdGhpcy5lbWl0RXZlbnQoYXJncykpO1xuICAgICAgICB0aGlzLnJlY2VpdmVCdWZmZXIgPSBbXTtcbiAgICAgICAgdGhpcy5zZW5kQnVmZmVyLmZvckVhY2goKHBhY2tldCkgPT4gdGhpcy5wYWNrZXQocGFja2V0KSk7XG4gICAgICAgIHRoaXMuc2VuZEJ1ZmZlciA9IFtdO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgdXBvbiBzZXJ2ZXIgZGlzY29ubmVjdC5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgb25kaXNjb25uZWN0KCkge1xuICAgICAgICBkZWJ1ZyhcInNlcnZlciBkaXNjb25uZWN0ICglcylcIiwgdGhpcy5uc3ApO1xuICAgICAgICB0aGlzLmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy5vbmNsb3NlKFwiaW8gc2VydmVyIGRpc2Nvbm5lY3RcIik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxlZCB1cG9uIGZvcmNlZCBjbGllbnQvc2VydmVyIHNpZGUgZGlzY29ubmVjdGlvbnMsXG4gICAgICogdGhpcyBtZXRob2QgZW5zdXJlcyB0aGUgbWFuYWdlciBzdG9wcyB0cmFja2luZyB1cyBhbmRcbiAgICAgKiB0aGF0IHJlY29ubmVjdGlvbnMgZG9uJ3QgZ2V0IHRyaWdnZXJlZCBmb3IgdGhpcy5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3Vicykge1xuICAgICAgICAgICAgLy8gY2xlYW4gc3Vic2NyaXB0aW9ucyB0byBhdm9pZCByZWNvbm5lY3Rpb25zXG4gICAgICAgICAgICB0aGlzLnN1YnMuZm9yRWFjaCgoc3ViRGVzdHJveSkgPT4gc3ViRGVzdHJveSgpKTtcbiAgICAgICAgICAgIHRoaXMuc3VicyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlvW1wiX2Rlc3Ryb3lcIl0odGhpcyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERpc2Nvbm5lY3RzIHRoZSBzb2NrZXQgbWFudWFsbHkuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHNlbGZcbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgZGlzY29ubmVjdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuY29ubmVjdGVkKSB7XG4gICAgICAgICAgICBkZWJ1ZyhcInBlcmZvcm1pbmcgZGlzY29ubmVjdCAoJXMpXCIsIHRoaXMubnNwKTtcbiAgICAgICAgICAgIHRoaXMucGFja2V0KHsgdHlwZTogc29ja2V0X2lvX3BhcnNlcl8xLlBhY2tldFR5cGUuRElTQ09OTkVDVCB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyByZW1vdmUgc29ja2V0IGZyb20gcG9vbFxuICAgICAgICB0aGlzLmRlc3Ryb3koKTtcbiAgICAgICAgaWYgKHRoaXMuY29ubmVjdGVkKSB7XG4gICAgICAgICAgICAvLyBmaXJlIGV2ZW50c1xuICAgICAgICAgICAgdGhpcy5vbmNsb3NlKFwiaW8gY2xpZW50IGRpc2Nvbm5lY3RcIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFsaWFzIGZvciBkaXNjb25uZWN0KClcbiAgICAgKlxuICAgICAqIEByZXR1cm4gc2VsZlxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBjbG9zZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGlzY29ubmVjdCgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBjb21wcmVzcyBmbGFnLlxuICAgICAqXG4gICAgICogQHBhcmFtIGNvbXByZXNzIC0gaWYgYHRydWVgLCBjb21wcmVzc2VzIHRoZSBzZW5kaW5nIGRhdGFcbiAgICAgKiBAcmV0dXJuIHNlbGZcbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgY29tcHJlc3MoY29tcHJlc3MpIHtcbiAgICAgICAgdGhpcy5mbGFncy5jb21wcmVzcyA9IGNvbXByZXNzO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cyBhIG1vZGlmaWVyIGZvciBhIHN1YnNlcXVlbnQgZXZlbnQgZW1pc3Npb24gdGhhdCB0aGUgZXZlbnQgbWVzc2FnZSB3aWxsIGJlIGRyb3BwZWQgd2hlbiB0aGlzIHNvY2tldCBpcyBub3RcbiAgICAgKiByZWFkeSB0byBzZW5kIG1lc3NhZ2VzLlxuICAgICAqXG4gICAgICogQHJldHVybnMgc2VsZlxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBnZXQgdm9sYXRpbGUoKSB7XG4gICAgICAgIHRoaXMuZmxhZ3Mudm9sYXRpbGUgPSB0cnVlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkcyBhIGxpc3RlbmVyIHRoYXQgd2lsbCBiZSBmaXJlZCB3aGVuIGFueSBldmVudCBpcyBlbWl0dGVkLiBUaGUgZXZlbnQgbmFtZSBpcyBwYXNzZWQgYXMgdGhlIGZpcnN0IGFyZ3VtZW50IHRvIHRoZVxuICAgICAqIGNhbGxiYWNrLlxuICAgICAqXG4gICAgICogQHBhcmFtIGxpc3RlbmVyXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIG9uQW55KGxpc3RlbmVyKSB7XG4gICAgICAgIHRoaXMuX2FueUxpc3RlbmVycyA9IHRoaXMuX2FueUxpc3RlbmVycyB8fCBbXTtcbiAgICAgICAgdGhpcy5fYW55TGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkcyBhIGxpc3RlbmVyIHRoYXQgd2lsbCBiZSBmaXJlZCB3aGVuIGFueSBldmVudCBpcyBlbWl0dGVkLiBUaGUgZXZlbnQgbmFtZSBpcyBwYXNzZWQgYXMgdGhlIGZpcnN0IGFyZ3VtZW50IHRvIHRoZVxuICAgICAqIGNhbGxiYWNrLiBUaGUgbGlzdGVuZXIgaXMgYWRkZWQgdG8gdGhlIGJlZ2lubmluZyBvZiB0aGUgbGlzdGVuZXJzIGFycmF5LlxuICAgICAqXG4gICAgICogQHBhcmFtIGxpc3RlbmVyXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIHByZXBlbmRBbnkobGlzdGVuZXIpIHtcbiAgICAgICAgdGhpcy5fYW55TGlzdGVuZXJzID0gdGhpcy5fYW55TGlzdGVuZXJzIHx8IFtdO1xuICAgICAgICB0aGlzLl9hbnlMaXN0ZW5lcnMudW5zaGlmdChsaXN0ZW5lcik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIHRoZSBsaXN0ZW5lciB0aGF0IHdpbGwgYmUgZmlyZWQgd2hlbiBhbnkgZXZlbnQgaXMgZW1pdHRlZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBsaXN0ZW5lclxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBvZmZBbnkobGlzdGVuZXIpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9hbnlMaXN0ZW5lcnMpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsaXN0ZW5lcikge1xuICAgICAgICAgICAgY29uc3QgbGlzdGVuZXJzID0gdGhpcy5fYW55TGlzdGVuZXJzO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0ZW5lcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAobGlzdGVuZXIgPT09IGxpc3RlbmVyc1tpXSkge1xuICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lcnMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9hbnlMaXN0ZW5lcnMgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBhcnJheSBvZiBsaXN0ZW5lcnMgdGhhdCBhcmUgbGlzdGVuaW5nIGZvciBhbnkgZXZlbnQgdGhhdCBpcyBzcGVjaWZpZWQuIFRoaXMgYXJyYXkgY2FuIGJlIG1hbmlwdWxhdGVkLFxuICAgICAqIGUuZy4gdG8gcmVtb3ZlIGxpc3RlbmVycy5cbiAgICAgKlxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBsaXN0ZW5lcnNBbnkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hbnlMaXN0ZW5lcnMgfHwgW107XG4gICAgfVxufVxuZXhwb3J0cy5Tb2NrZXQgPSBTb2NrZXQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuU3RyaWN0RXZlbnRFbWl0dGVyID0gdm9pZCAwO1xuY29uc3QgRW1pdHRlciA9IHJlcXVpcmUoXCJjb21wb25lbnQtZW1pdHRlclwiKTtcbi8qKlxuICogU3RyaWN0bHkgdHlwZWQgdmVyc2lvbiBvZiBhbiBgRXZlbnRFbWl0dGVyYC4gQSBgVHlwZWRFdmVudEVtaXR0ZXJgIHRha2VzIHR5cGVcbiAqIHBhcmFtZXRlcnMgZm9yIG1hcHBpbmdzIG9mIGV2ZW50IG5hbWVzIHRvIGV2ZW50IGRhdGEgdHlwZXMsIGFuZCBzdHJpY3RseVxuICogdHlwZXMgbWV0aG9kIGNhbGxzIHRvIHRoZSBgRXZlbnRFbWl0dGVyYCBhY2NvcmRpbmcgdG8gdGhlc2UgZXZlbnQgbWFwcy5cbiAqXG4gKiBAdHlwZVBhcmFtIExpc3RlbkV2ZW50cyAtIGBFdmVudHNNYXBgIG9mIHVzZXItZGVmaW5lZCBldmVudHMgdGhhdCBjYW4gYmVcbiAqIGxpc3RlbmVkIHRvIHdpdGggYG9uYCBvciBgb25jZWBcbiAqIEB0eXBlUGFyYW0gRW1pdEV2ZW50cyAtIGBFdmVudHNNYXBgIG9mIHVzZXItZGVmaW5lZCBldmVudHMgdGhhdCBjYW4gYmVcbiAqIGVtaXR0ZWQgd2l0aCBgZW1pdGBcbiAqIEB0eXBlUGFyYW0gUmVzZXJ2ZWRFdmVudHMgLSBgRXZlbnRzTWFwYCBvZiByZXNlcnZlZCBldmVudHMsIHRoYXQgY2FuIGJlXG4gKiBlbWl0dGVkIGJ5IHNvY2tldC5pbyB3aXRoIGBlbWl0UmVzZXJ2ZWRgLCBhbmQgY2FuIGJlIGxpc3RlbmVkIHRvIHdpdGhcbiAqIGBsaXN0ZW5gLlxuICovXG5jbGFzcyBTdHJpY3RFdmVudEVtaXR0ZXIgZXh0ZW5kcyBFbWl0dGVyIHtcbiAgICAvKipcbiAgICAgKiBBZGRzIHRoZSBgbGlzdGVuZXJgIGZ1bmN0aW9uIGFzIGFuIGV2ZW50IGxpc3RlbmVyIGZvciBgZXZgLlxuICAgICAqXG4gICAgICogQHBhcmFtIGV2IE5hbWUgb2YgdGhlIGV2ZW50XG4gICAgICogQHBhcmFtIGxpc3RlbmVyIENhbGxiYWNrIGZ1bmN0aW9uXG4gICAgICovXG4gICAgb24oZXYsIGxpc3RlbmVyKSB7XG4gICAgICAgIHN1cGVyLm9uKGV2LCBsaXN0ZW5lcik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGRzIGEgb25lLXRpbWUgYGxpc3RlbmVyYCBmdW5jdGlvbiBhcyBhbiBldmVudCBsaXN0ZW5lciBmb3IgYGV2YC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBldiBOYW1lIG9mIHRoZSBldmVudFxuICAgICAqIEBwYXJhbSBsaXN0ZW5lciBDYWxsYmFjayBmdW5jdGlvblxuICAgICAqL1xuICAgIG9uY2UoZXYsIGxpc3RlbmVyKSB7XG4gICAgICAgIHN1cGVyLm9uY2UoZXYsIGxpc3RlbmVyKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEVtaXRzIGFuIGV2ZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIGV2IE5hbWUgb2YgdGhlIGV2ZW50XG4gICAgICogQHBhcmFtIGFyZ3MgVmFsdWVzIHRvIHNlbmQgdG8gbGlzdGVuZXJzIG9mIHRoaXMgZXZlbnRcbiAgICAgKi9cbiAgICBlbWl0KGV2LCAuLi5hcmdzKSB7XG4gICAgICAgIHN1cGVyLmVtaXQoZXYsIC4uLmFyZ3MpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogRW1pdHMgYSByZXNlcnZlZCBldmVudC5cbiAgICAgKlxuICAgICAqIFRoaXMgbWV0aG9kIGlzIGBwcm90ZWN0ZWRgLCBzbyB0aGF0IG9ubHkgYSBjbGFzcyBleHRlbmRpbmdcbiAgICAgKiBgU3RyaWN0RXZlbnRFbWl0dGVyYCBjYW4gZW1pdCBpdHMgb3duIHJlc2VydmVkIGV2ZW50cy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBldiBSZXNlcnZlZCBldmVudCBuYW1lXG4gICAgICogQHBhcmFtIGFyZ3MgQXJndW1lbnRzIHRvIGVtaXQgYWxvbmcgd2l0aCB0aGUgZXZlbnRcbiAgICAgKi9cbiAgICBlbWl0UmVzZXJ2ZWQoZXYsIC4uLmFyZ3MpIHtcbiAgICAgICAgc3VwZXIuZW1pdChldiwgLi4uYXJncyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBsaXN0ZW5lcnMgbGlzdGVuaW5nIHRvIGFuIGV2ZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIGV2ZW50IEV2ZW50IG5hbWVcbiAgICAgKiBAcmV0dXJucyBBcnJheSBvZiBsaXN0ZW5lcnMgc3Vic2NyaWJlZCB0byBgZXZlbnRgXG4gICAgICovXG4gICAgbGlzdGVuZXJzKGV2ZW50KSB7XG4gICAgICAgIHJldHVybiBzdXBlci5saXN0ZW5lcnMoZXZlbnQpO1xuICAgIH1cbn1cbmV4cG9ydHMuU3RyaWN0RXZlbnRFbWl0dGVyID0gU3RyaWN0RXZlbnRFbWl0dGVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnVybCA9IHZvaWQgMDtcbmNvbnN0IHBhcnNldXJpID0gcmVxdWlyZShcInBhcnNldXJpXCIpO1xuY29uc3QgZGVidWcgPSByZXF1aXJlKFwiZGVidWdcIikoXCJzb2NrZXQuaW8tY2xpZW50OnVybFwiKTtcbi8qKlxuICogVVJMIHBhcnNlci5cbiAqXG4gKiBAcGFyYW0gdXJpIC0gdXJsXG4gKiBAcGFyYW0gcGF0aCAtIHRoZSByZXF1ZXN0IHBhdGggb2YgdGhlIGNvbm5lY3Rpb25cbiAqIEBwYXJhbSBsb2MgLSBBbiBvYmplY3QgbWVhbnQgdG8gbWltaWMgd2luZG93LmxvY2F0aW9uLlxuICogICAgICAgIERlZmF1bHRzIHRvIHdpbmRvdy5sb2NhdGlvbi5cbiAqIEBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gdXJsKHVyaSwgcGF0aCA9IFwiXCIsIGxvYykge1xuICAgIGxldCBvYmogPSB1cmk7XG4gICAgLy8gZGVmYXVsdCB0byB3aW5kb3cubG9jYXRpb25cbiAgICBsb2MgPSBsb2MgfHwgKHR5cGVvZiBsb2NhdGlvbiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBsb2NhdGlvbik7XG4gICAgaWYgKG51bGwgPT0gdXJpKVxuICAgICAgICB1cmkgPSBsb2MucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2MuaG9zdDtcbiAgICAvLyByZWxhdGl2ZSBwYXRoIHN1cHBvcnRcbiAgICBpZiAodHlwZW9mIHVyaSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBpZiAoXCIvXCIgPT09IHVyaS5jaGFyQXQoMCkpIHtcbiAgICAgICAgICAgIGlmIChcIi9cIiA9PT0gdXJpLmNoYXJBdCgxKSkge1xuICAgICAgICAgICAgICAgIHVyaSA9IGxvYy5wcm90b2NvbCArIHVyaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHVyaSA9IGxvYy5ob3N0ICsgdXJpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghL14oaHR0cHM/fHdzcz8pOlxcL1xcLy8udGVzdCh1cmkpKSB7XG4gICAgICAgICAgICBkZWJ1ZyhcInByb3RvY29sLWxlc3MgdXJsICVzXCIsIHVyaSk7XG4gICAgICAgICAgICBpZiAoXCJ1bmRlZmluZWRcIiAhPT0gdHlwZW9mIGxvYykge1xuICAgICAgICAgICAgICAgIHVyaSA9IGxvYy5wcm90b2NvbCArIFwiLy9cIiArIHVyaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHVyaSA9IFwiaHR0cHM6Ly9cIiArIHVyaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBwYXJzZVxuICAgICAgICBkZWJ1ZyhcInBhcnNlICVzXCIsIHVyaSk7XG4gICAgICAgIG9iaiA9IHBhcnNldXJpKHVyaSk7XG4gICAgfVxuICAgIC8vIG1ha2Ugc3VyZSB3ZSB0cmVhdCBgbG9jYWxob3N0OjgwYCBhbmQgYGxvY2FsaG9zdGAgZXF1YWxseVxuICAgIGlmICghb2JqLnBvcnQpIHtcbiAgICAgICAgaWYgKC9eKGh0dHB8d3MpJC8udGVzdChvYmoucHJvdG9jb2wpKSB7XG4gICAgICAgICAgICBvYmoucG9ydCA9IFwiODBcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICgvXihodHRwfHdzKXMkLy50ZXN0KG9iai5wcm90b2NvbCkpIHtcbiAgICAgICAgICAgIG9iai5wb3J0ID0gXCI0NDNcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBvYmoucGF0aCA9IG9iai5wYXRoIHx8IFwiL1wiO1xuICAgIGNvbnN0IGlwdjYgPSBvYmouaG9zdC5pbmRleE9mKFwiOlwiKSAhPT0gLTE7XG4gICAgY29uc3QgaG9zdCA9IGlwdjYgPyBcIltcIiArIG9iai5ob3N0ICsgXCJdXCIgOiBvYmouaG9zdDtcbiAgICAvLyBkZWZpbmUgdW5pcXVlIGlkXG4gICAgb2JqLmlkID0gb2JqLnByb3RvY29sICsgXCI6Ly9cIiArIGhvc3QgKyBcIjpcIiArIG9iai5wb3J0ICsgcGF0aDtcbiAgICAvLyBkZWZpbmUgaHJlZlxuICAgIG9iai5ocmVmID1cbiAgICAgICAgb2JqLnByb3RvY29sICtcbiAgICAgICAgICAgIFwiOi8vXCIgK1xuICAgICAgICAgICAgaG9zdCArXG4gICAgICAgICAgICAobG9jICYmIGxvYy5wb3J0ID09PSBvYmoucG9ydCA/IFwiXCIgOiBcIjpcIiArIG9iai5wb3J0KTtcbiAgICByZXR1cm4gb2JqO1xufVxuZXhwb3J0cy51cmwgPSB1cmw7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMucmVjb25zdHJ1Y3RQYWNrZXQgPSBleHBvcnRzLmRlY29uc3RydWN0UGFja2V0ID0gdm9pZCAwO1xuY29uc3QgaXNfYmluYXJ5XzEgPSByZXF1aXJlKFwiLi9pcy1iaW5hcnlcIik7XG4vKipcbiAqIFJlcGxhY2VzIGV2ZXJ5IEJ1ZmZlciB8IEFycmF5QnVmZmVyIHwgQmxvYiB8IEZpbGUgaW4gcGFja2V0IHdpdGggYSBudW1iZXJlZCBwbGFjZWhvbGRlci5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcGFja2V0IC0gc29ja2V0LmlvIGV2ZW50IHBhY2tldFxuICogQHJldHVybiB7T2JqZWN0fSB3aXRoIGRlY29uc3RydWN0ZWQgcGFja2V0IGFuZCBsaXN0IG9mIGJ1ZmZlcnNcbiAqIEBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gZGVjb25zdHJ1Y3RQYWNrZXQocGFja2V0KSB7XG4gICAgY29uc3QgYnVmZmVycyA9IFtdO1xuICAgIGNvbnN0IHBhY2tldERhdGEgPSBwYWNrZXQuZGF0YTtcbiAgICBjb25zdCBwYWNrID0gcGFja2V0O1xuICAgIHBhY2suZGF0YSA9IF9kZWNvbnN0cnVjdFBhY2tldChwYWNrZXREYXRhLCBidWZmZXJzKTtcbiAgICBwYWNrLmF0dGFjaG1lbnRzID0gYnVmZmVycy5sZW5ndGg7IC8vIG51bWJlciBvZiBiaW5hcnkgJ2F0dGFjaG1lbnRzJ1xuICAgIHJldHVybiB7IHBhY2tldDogcGFjaywgYnVmZmVyczogYnVmZmVycyB9O1xufVxuZXhwb3J0cy5kZWNvbnN0cnVjdFBhY2tldCA9IGRlY29uc3RydWN0UGFja2V0O1xuZnVuY3Rpb24gX2RlY29uc3RydWN0UGFja2V0KGRhdGEsIGJ1ZmZlcnMpIHtcbiAgICBpZiAoIWRhdGEpXG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIGlmIChpc19iaW5hcnlfMS5pc0JpbmFyeShkYXRhKSkge1xuICAgICAgICBjb25zdCBwbGFjZWhvbGRlciA9IHsgX3BsYWNlaG9sZGVyOiB0cnVlLCBudW06IGJ1ZmZlcnMubGVuZ3RoIH07XG4gICAgICAgIGJ1ZmZlcnMucHVzaChkYXRhKTtcbiAgICAgICAgcmV0dXJuIHBsYWNlaG9sZGVyO1xuICAgIH1cbiAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICAgIGNvbnN0IG5ld0RhdGEgPSBuZXcgQXJyYXkoZGF0YS5sZW5ndGgpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIG5ld0RhdGFbaV0gPSBfZGVjb25zdHJ1Y3RQYWNrZXQoZGF0YVtpXSwgYnVmZmVycyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ld0RhdGE7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiBkYXRhID09PSBcIm9iamVjdFwiICYmICEoZGF0YSBpbnN0YW5jZW9mIERhdGUpKSB7XG4gICAgICAgIGNvbnN0IG5ld0RhdGEgPSB7fTtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gZGF0YSkge1xuICAgICAgICAgICAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIG5ld0RhdGFba2V5XSA9IF9kZWNvbnN0cnVjdFBhY2tldChkYXRhW2tleV0sIGJ1ZmZlcnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdEYXRhO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbn1cbi8qKlxuICogUmVjb25zdHJ1Y3RzIGEgYmluYXJ5IHBhY2tldCBmcm9tIGl0cyBwbGFjZWhvbGRlciBwYWNrZXQgYW5kIGJ1ZmZlcnNcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcGFja2V0IC0gZXZlbnQgcGFja2V0IHdpdGggcGxhY2Vob2xkZXJzXG4gKiBAcGFyYW0ge0FycmF5fSBidWZmZXJzIC0gYmluYXJ5IGJ1ZmZlcnMgdG8gcHV0IGluIHBsYWNlaG9sZGVyIHBvc2l0aW9uc1xuICogQHJldHVybiB7T2JqZWN0fSByZWNvbnN0cnVjdGVkIHBhY2tldFxuICogQHB1YmxpY1xuICovXG5mdW5jdGlvbiByZWNvbnN0cnVjdFBhY2tldChwYWNrZXQsIGJ1ZmZlcnMpIHtcbiAgICBwYWNrZXQuZGF0YSA9IF9yZWNvbnN0cnVjdFBhY2tldChwYWNrZXQuZGF0YSwgYnVmZmVycyk7XG4gICAgcGFja2V0LmF0dGFjaG1lbnRzID0gdW5kZWZpbmVkOyAvLyBubyBsb25nZXIgdXNlZnVsXG4gICAgcmV0dXJuIHBhY2tldDtcbn1cbmV4cG9ydHMucmVjb25zdHJ1Y3RQYWNrZXQgPSByZWNvbnN0cnVjdFBhY2tldDtcbmZ1bmN0aW9uIF9yZWNvbnN0cnVjdFBhY2tldChkYXRhLCBidWZmZXJzKSB7XG4gICAgaWYgKCFkYXRhKVxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICBpZiAoZGF0YSAmJiBkYXRhLl9wbGFjZWhvbGRlcikge1xuICAgICAgICByZXR1cm4gYnVmZmVyc1tkYXRhLm51bV07IC8vIGFwcHJvcHJpYXRlIGJ1ZmZlciAoc2hvdWxkIGJlIG5hdHVyYWwgb3JkZXIgYW55d2F5KVxuICAgIH1cbiAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZGF0YVtpXSA9IF9yZWNvbnN0cnVjdFBhY2tldChkYXRhW2ldLCBidWZmZXJzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgZGF0YSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBkYXRhKSB7XG4gICAgICAgICAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgZGF0YVtrZXldID0gX3JlY29uc3RydWN0UGFja2V0KGRhdGFba2V5XSwgYnVmZmVycyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuRGVjb2RlciA9IGV4cG9ydHMuRW5jb2RlciA9IGV4cG9ydHMuUGFja2V0VHlwZSA9IGV4cG9ydHMucHJvdG9jb2wgPSB2b2lkIDA7XG5jb25zdCBFbWl0dGVyID0gcmVxdWlyZShcImNvbXBvbmVudC1lbWl0dGVyXCIpO1xuY29uc3QgYmluYXJ5XzEgPSByZXF1aXJlKFwiLi9iaW5hcnlcIik7XG5jb25zdCBpc19iaW5hcnlfMSA9IHJlcXVpcmUoXCIuL2lzLWJpbmFyeVwiKTtcbmNvbnN0IGRlYnVnID0gcmVxdWlyZShcImRlYnVnXCIpKFwic29ja2V0LmlvLXBhcnNlclwiKTtcbi8qKlxuICogUHJvdG9jb2wgdmVyc2lvbi5cbiAqXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydHMucHJvdG9jb2wgPSA1O1xudmFyIFBhY2tldFR5cGU7XG4oZnVuY3Rpb24gKFBhY2tldFR5cGUpIHtcbiAgICBQYWNrZXRUeXBlW1BhY2tldFR5cGVbXCJDT05ORUNUXCJdID0gMF0gPSBcIkNPTk5FQ1RcIjtcbiAgICBQYWNrZXRUeXBlW1BhY2tldFR5cGVbXCJESVNDT05ORUNUXCJdID0gMV0gPSBcIkRJU0NPTk5FQ1RcIjtcbiAgICBQYWNrZXRUeXBlW1BhY2tldFR5cGVbXCJFVkVOVFwiXSA9IDJdID0gXCJFVkVOVFwiO1xuICAgIFBhY2tldFR5cGVbUGFja2V0VHlwZVtcIkFDS1wiXSA9IDNdID0gXCJBQ0tcIjtcbiAgICBQYWNrZXRUeXBlW1BhY2tldFR5cGVbXCJDT05ORUNUX0VSUk9SXCJdID0gNF0gPSBcIkNPTk5FQ1RfRVJST1JcIjtcbiAgICBQYWNrZXRUeXBlW1BhY2tldFR5cGVbXCJCSU5BUllfRVZFTlRcIl0gPSA1XSA9IFwiQklOQVJZX0VWRU5UXCI7XG4gICAgUGFja2V0VHlwZVtQYWNrZXRUeXBlW1wiQklOQVJZX0FDS1wiXSA9IDZdID0gXCJCSU5BUllfQUNLXCI7XG59KShQYWNrZXRUeXBlID0gZXhwb3J0cy5QYWNrZXRUeXBlIHx8IChleHBvcnRzLlBhY2tldFR5cGUgPSB7fSkpO1xuLyoqXG4gKiBBIHNvY2tldC5pbyBFbmNvZGVyIGluc3RhbmNlXG4gKi9cbmNsYXNzIEVuY29kZXIge1xuICAgIC8qKlxuICAgICAqIEVuY29kZSBhIHBhY2tldCBhcyBhIHNpbmdsZSBzdHJpbmcgaWYgbm9uLWJpbmFyeSwgb3IgYXMgYVxuICAgICAqIGJ1ZmZlciBzZXF1ZW5jZSwgZGVwZW5kaW5nIG9uIHBhY2tldCB0eXBlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9iaiAtIHBhY2tldCBvYmplY3RcbiAgICAgKi9cbiAgICBlbmNvZGUob2JqKSB7XG4gICAgICAgIGRlYnVnKFwiZW5jb2RpbmcgcGFja2V0ICVqXCIsIG9iaik7XG4gICAgICAgIGlmIChvYmoudHlwZSA9PT0gUGFja2V0VHlwZS5FVkVOVCB8fCBvYmoudHlwZSA9PT0gUGFja2V0VHlwZS5BQ0spIHtcbiAgICAgICAgICAgIGlmIChpc19iaW5hcnlfMS5oYXNCaW5hcnkob2JqKSkge1xuICAgICAgICAgICAgICAgIG9iai50eXBlID1cbiAgICAgICAgICAgICAgICAgICAgb2JqLnR5cGUgPT09IFBhY2tldFR5cGUuRVZFTlRcbiAgICAgICAgICAgICAgICAgICAgICAgID8gUGFja2V0VHlwZS5CSU5BUllfRVZFTlRcbiAgICAgICAgICAgICAgICAgICAgICAgIDogUGFja2V0VHlwZS5CSU5BUllfQUNLO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmVuY29kZUFzQmluYXJ5KG9iaik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFt0aGlzLmVuY29kZUFzU3RyaW5nKG9iaildO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBFbmNvZGUgcGFja2V0IGFzIHN0cmluZy5cbiAgICAgKi9cbiAgICBlbmNvZGVBc1N0cmluZyhvYmopIHtcbiAgICAgICAgLy8gZmlyc3QgaXMgdHlwZVxuICAgICAgICBsZXQgc3RyID0gXCJcIiArIG9iai50eXBlO1xuICAgICAgICAvLyBhdHRhY2htZW50cyBpZiB3ZSBoYXZlIHRoZW1cbiAgICAgICAgaWYgKG9iai50eXBlID09PSBQYWNrZXRUeXBlLkJJTkFSWV9FVkVOVCB8fFxuICAgICAgICAgICAgb2JqLnR5cGUgPT09IFBhY2tldFR5cGUuQklOQVJZX0FDSykge1xuICAgICAgICAgICAgc3RyICs9IG9iai5hdHRhY2htZW50cyArIFwiLVwiO1xuICAgICAgICB9XG4gICAgICAgIC8vIGlmIHdlIGhhdmUgYSBuYW1lc3BhY2Ugb3RoZXIgdGhhbiBgL2BcbiAgICAgICAgLy8gd2UgYXBwZW5kIGl0IGZvbGxvd2VkIGJ5IGEgY29tbWEgYCxgXG4gICAgICAgIGlmIChvYmoubnNwICYmIFwiL1wiICE9PSBvYmoubnNwKSB7XG4gICAgICAgICAgICBzdHIgKz0gb2JqLm5zcCArIFwiLFwiO1xuICAgICAgICB9XG4gICAgICAgIC8vIGltbWVkaWF0ZWx5IGZvbGxvd2VkIGJ5IHRoZSBpZFxuICAgICAgICBpZiAobnVsbCAhPSBvYmouaWQpIHtcbiAgICAgICAgICAgIHN0ciArPSBvYmouaWQ7XG4gICAgICAgIH1cbiAgICAgICAgLy8ganNvbiBkYXRhXG4gICAgICAgIGlmIChudWxsICE9IG9iai5kYXRhKSB7XG4gICAgICAgICAgICBzdHIgKz0gSlNPTi5zdHJpbmdpZnkob2JqLmRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGRlYnVnKFwiZW5jb2RlZCAlaiBhcyAlc1wiLCBvYmosIHN0cik7XG4gICAgICAgIHJldHVybiBzdHI7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEVuY29kZSBwYWNrZXQgYXMgJ2J1ZmZlciBzZXF1ZW5jZScgYnkgcmVtb3ZpbmcgYmxvYnMsIGFuZFxuICAgICAqIGRlY29uc3RydWN0aW5nIHBhY2tldCBpbnRvIG9iamVjdCB3aXRoIHBsYWNlaG9sZGVycyBhbmRcbiAgICAgKiBhIGxpc3Qgb2YgYnVmZmVycy5cbiAgICAgKi9cbiAgICBlbmNvZGVBc0JpbmFyeShvYmopIHtcbiAgICAgICAgY29uc3QgZGVjb25zdHJ1Y3Rpb24gPSBiaW5hcnlfMS5kZWNvbnN0cnVjdFBhY2tldChvYmopO1xuICAgICAgICBjb25zdCBwYWNrID0gdGhpcy5lbmNvZGVBc1N0cmluZyhkZWNvbnN0cnVjdGlvbi5wYWNrZXQpO1xuICAgICAgICBjb25zdCBidWZmZXJzID0gZGVjb25zdHJ1Y3Rpb24uYnVmZmVycztcbiAgICAgICAgYnVmZmVycy51bnNoaWZ0KHBhY2spOyAvLyBhZGQgcGFja2V0IGluZm8gdG8gYmVnaW5uaW5nIG9mIGRhdGEgbGlzdFxuICAgICAgICByZXR1cm4gYnVmZmVyczsgLy8gd3JpdGUgYWxsIHRoZSBidWZmZXJzXG4gICAgfVxufVxuZXhwb3J0cy5FbmNvZGVyID0gRW5jb2Rlcjtcbi8qKlxuICogQSBzb2NrZXQuaW8gRGVjb2RlciBpbnN0YW5jZVxuICpcbiAqIEByZXR1cm4ge09iamVjdH0gZGVjb2RlclxuICovXG5jbGFzcyBEZWNvZGVyIGV4dGVuZHMgRW1pdHRlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERlY29kZXMgYW4gZW5jb2RlZCBwYWNrZXQgc3RyaW5nIGludG8gcGFja2V0IEpTT04uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2JqIC0gZW5jb2RlZCBwYWNrZXRcbiAgICAgKi9cbiAgICBhZGQob2JqKSB7XG4gICAgICAgIGxldCBwYWNrZXQ7XG4gICAgICAgIGlmICh0eXBlb2Ygb2JqID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBwYWNrZXQgPSB0aGlzLmRlY29kZVN0cmluZyhvYmopO1xuICAgICAgICAgICAgaWYgKHBhY2tldC50eXBlID09PSBQYWNrZXRUeXBlLkJJTkFSWV9FVkVOVCB8fFxuICAgICAgICAgICAgICAgIHBhY2tldC50eXBlID09PSBQYWNrZXRUeXBlLkJJTkFSWV9BQ0spIHtcbiAgICAgICAgICAgICAgICAvLyBiaW5hcnkgcGFja2V0J3MganNvblxuICAgICAgICAgICAgICAgIHRoaXMucmVjb25zdHJ1Y3RvciA9IG5ldyBCaW5hcnlSZWNvbnN0cnVjdG9yKHBhY2tldCk7XG4gICAgICAgICAgICAgICAgLy8gbm8gYXR0YWNobWVudHMsIGxhYmVsZWQgYmluYXJ5IGJ1dCBubyBiaW5hcnkgZGF0YSB0byBmb2xsb3dcbiAgICAgICAgICAgICAgICBpZiAocGFja2V0LmF0dGFjaG1lbnRzID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1cGVyLmVtaXQoXCJkZWNvZGVkXCIsIHBhY2tldCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gbm9uLWJpbmFyeSBmdWxsIHBhY2tldFxuICAgICAgICAgICAgICAgIHN1cGVyLmVtaXQoXCJkZWNvZGVkXCIsIHBhY2tldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNfYmluYXJ5XzEuaXNCaW5hcnkob2JqKSB8fCBvYmouYmFzZTY0KSB7XG4gICAgICAgICAgICAvLyByYXcgYmluYXJ5IGRhdGFcbiAgICAgICAgICAgIGlmICghdGhpcy5yZWNvbnN0cnVjdG9yKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZ290IGJpbmFyeSBkYXRhIHdoZW4gbm90IHJlY29uc3RydWN0aW5nIGEgcGFja2V0XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFja2V0ID0gdGhpcy5yZWNvbnN0cnVjdG9yLnRha2VCaW5hcnlEYXRhKG9iaik7XG4gICAgICAgICAgICAgICAgaWYgKHBhY2tldCkge1xuICAgICAgICAgICAgICAgICAgICAvLyByZWNlaXZlZCBmaW5hbCBidWZmZXJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWNvbnN0cnVjdG9yID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgc3VwZXIuZW1pdChcImRlY29kZWRcIiwgcGFja2V0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmtub3duIHR5cGU6IFwiICsgb2JqKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBEZWNvZGUgYSBwYWNrZXQgU3RyaW5nIChKU09OIGRhdGEpXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gICAgICogQHJldHVybiB7T2JqZWN0fSBwYWNrZXRcbiAgICAgKi9cbiAgICBkZWNvZGVTdHJpbmcoc3RyKSB7XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgLy8gbG9vayB1cCB0eXBlXG4gICAgICAgIGNvbnN0IHAgPSB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIoc3RyLmNoYXJBdCgwKSksXG4gICAgICAgIH07XG4gICAgICAgIGlmIChQYWNrZXRUeXBlW3AudHlwZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidW5rbm93biBwYWNrZXQgdHlwZSBcIiArIHAudHlwZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gbG9vayB1cCBhdHRhY2htZW50cyBpZiB0eXBlIGJpbmFyeVxuICAgICAgICBpZiAocC50eXBlID09PSBQYWNrZXRUeXBlLkJJTkFSWV9FVkVOVCB8fFxuICAgICAgICAgICAgcC50eXBlID09PSBQYWNrZXRUeXBlLkJJTkFSWV9BQ0spIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gaSArIDE7XG4gICAgICAgICAgICB3aGlsZSAoc3RyLmNoYXJBdCgrK2kpICE9PSBcIi1cIiAmJiBpICE9IHN0ci5sZW5ndGgpIHsgfVxuICAgICAgICAgICAgY29uc3QgYnVmID0gc3RyLnN1YnN0cmluZyhzdGFydCwgaSk7XG4gICAgICAgICAgICBpZiAoYnVmICE9IE51bWJlcihidWYpIHx8IHN0ci5jaGFyQXQoaSkgIT09IFwiLVwiKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSWxsZWdhbCBhdHRhY2htZW50c1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHAuYXR0YWNobWVudHMgPSBOdW1iZXIoYnVmKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBsb29rIHVwIG5hbWVzcGFjZSAoaWYgYW55KVxuICAgICAgICBpZiAoXCIvXCIgPT09IHN0ci5jaGFyQXQoaSArIDEpKSB7XG4gICAgICAgICAgICBjb25zdCBzdGFydCA9IGkgKyAxO1xuICAgICAgICAgICAgd2hpbGUgKCsraSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGMgPSBzdHIuY2hhckF0KGkpO1xuICAgICAgICAgICAgICAgIGlmIChcIixcIiA9PT0gYylcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgaWYgKGkgPT09IHN0ci5sZW5ndGgpXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcC5uc3AgPSBzdHIuc3Vic3RyaW5nKHN0YXJ0LCBpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHAubnNwID0gXCIvXCI7XG4gICAgICAgIH1cbiAgICAgICAgLy8gbG9vayB1cCBpZFxuICAgICAgICBjb25zdCBuZXh0ID0gc3RyLmNoYXJBdChpICsgMSk7XG4gICAgICAgIGlmIChcIlwiICE9PSBuZXh0ICYmIE51bWJlcihuZXh0KSA9PSBuZXh0KSB7XG4gICAgICAgICAgICBjb25zdCBzdGFydCA9IGkgKyAxO1xuICAgICAgICAgICAgd2hpbGUgKCsraSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGMgPSBzdHIuY2hhckF0KGkpO1xuICAgICAgICAgICAgICAgIGlmIChudWxsID09IGMgfHwgTnVtYmVyKGMpICE9IGMpIHtcbiAgICAgICAgICAgICAgICAgICAgLS1pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGkgPT09IHN0ci5sZW5ndGgpXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcC5pZCA9IE51bWJlcihzdHIuc3Vic3RyaW5nKHN0YXJ0LCBpICsgMSkpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGxvb2sgdXAganNvbiBkYXRhXG4gICAgICAgIGlmIChzdHIuY2hhckF0KCsraSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHBheWxvYWQgPSB0cnlQYXJzZShzdHIuc3Vic3RyKGkpKTtcbiAgICAgICAgICAgIGlmIChEZWNvZGVyLmlzUGF5bG9hZFZhbGlkKHAudHlwZSwgcGF5bG9hZCkpIHtcbiAgICAgICAgICAgICAgICBwLmRhdGEgPSBwYXlsb2FkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaW52YWxpZCBwYXlsb2FkXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGRlYnVnKFwiZGVjb2RlZCAlcyBhcyAlalwiLCBzdHIsIHApO1xuICAgICAgICByZXR1cm4gcDtcbiAgICB9XG4gICAgc3RhdGljIGlzUGF5bG9hZFZhbGlkKHR5cGUsIHBheWxvYWQpIHtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlIFBhY2tldFR5cGUuQ09OTkVDVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gdHlwZW9mIHBheWxvYWQgPT09IFwib2JqZWN0XCI7XG4gICAgICAgICAgICBjYXNlIFBhY2tldFR5cGUuRElTQ09OTkVDVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gcGF5bG9hZCA9PT0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgY2FzZSBQYWNrZXRUeXBlLkNPTk5FQ1RfRVJST1I6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiBwYXlsb2FkID09PSBcInN0cmluZ1wiIHx8IHR5cGVvZiBwYXlsb2FkID09PSBcIm9iamVjdFwiO1xuICAgICAgICAgICAgY2FzZSBQYWNrZXRUeXBlLkVWRU5UOlxuICAgICAgICAgICAgY2FzZSBQYWNrZXRUeXBlLkJJTkFSWV9FVkVOVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gQXJyYXkuaXNBcnJheShwYXlsb2FkKSAmJiBwYXlsb2FkLmxlbmd0aCA+IDA7XG4gICAgICAgICAgICBjYXNlIFBhY2tldFR5cGUuQUNLOlxuICAgICAgICAgICAgY2FzZSBQYWNrZXRUeXBlLkJJTkFSWV9BQ0s6XG4gICAgICAgICAgICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkocGF5bG9hZCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogRGVhbGxvY2F0ZXMgYSBwYXJzZXIncyByZXNvdXJjZXNcbiAgICAgKi9cbiAgICBkZXN0cm95KCkge1xuICAgICAgICBpZiAodGhpcy5yZWNvbnN0cnVjdG9yKSB7XG4gICAgICAgICAgICB0aGlzLnJlY29uc3RydWN0b3IuZmluaXNoZWRSZWNvbnN0cnVjdGlvbigpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5EZWNvZGVyID0gRGVjb2RlcjtcbmZ1bmN0aW9uIHRyeVBhcnNlKHN0cikge1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKHN0cik7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG4vKipcbiAqIEEgbWFuYWdlciBvZiBhIGJpbmFyeSBldmVudCdzICdidWZmZXIgc2VxdWVuY2UnLiBTaG91bGRcbiAqIGJlIGNvbnN0cnVjdGVkIHdoZW5ldmVyIGEgcGFja2V0IG9mIHR5cGUgQklOQVJZX0VWRU5UIGlzXG4gKiBkZWNvZGVkLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYWNrZXRcbiAqIEByZXR1cm4ge0JpbmFyeVJlY29uc3RydWN0b3J9IGluaXRpYWxpemVkIHJlY29uc3RydWN0b3JcbiAqL1xuY2xhc3MgQmluYXJ5UmVjb25zdHJ1Y3RvciB7XG4gICAgY29uc3RydWN0b3IocGFja2V0KSB7XG4gICAgICAgIHRoaXMucGFja2V0ID0gcGFja2V0O1xuICAgICAgICB0aGlzLmJ1ZmZlcnMgPSBbXTtcbiAgICAgICAgdGhpcy5yZWNvblBhY2sgPSBwYWNrZXQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE1ldGhvZCB0byBiZSBjYWxsZWQgd2hlbiBiaW5hcnkgZGF0YSByZWNlaXZlZCBmcm9tIGNvbm5lY3Rpb25cbiAgICAgKiBhZnRlciBhIEJJTkFSWV9FVkVOVCBwYWNrZXQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0J1ZmZlciB8IEFycmF5QnVmZmVyfSBiaW5EYXRhIC0gdGhlIHJhdyBiaW5hcnkgZGF0YSByZWNlaXZlZFxuICAgICAqIEByZXR1cm4ge251bGwgfCBPYmplY3R9IHJldHVybnMgbnVsbCBpZiBtb3JlIGJpbmFyeSBkYXRhIGlzIGV4cGVjdGVkIG9yXG4gICAgICogICBhIHJlY29uc3RydWN0ZWQgcGFja2V0IG9iamVjdCBpZiBhbGwgYnVmZmVycyBoYXZlIGJlZW4gcmVjZWl2ZWQuXG4gICAgICovXG4gICAgdGFrZUJpbmFyeURhdGEoYmluRGF0YSkge1xuICAgICAgICB0aGlzLmJ1ZmZlcnMucHVzaChiaW5EYXRhKTtcbiAgICAgICAgaWYgKHRoaXMuYnVmZmVycy5sZW5ndGggPT09IHRoaXMucmVjb25QYWNrLmF0dGFjaG1lbnRzKSB7XG4gICAgICAgICAgICAvLyBkb25lIHdpdGggYnVmZmVyIGxpc3RcbiAgICAgICAgICAgIGNvbnN0IHBhY2tldCA9IGJpbmFyeV8xLnJlY29uc3RydWN0UGFja2V0KHRoaXMucmVjb25QYWNrLCB0aGlzLmJ1ZmZlcnMpO1xuICAgICAgICAgICAgdGhpcy5maW5pc2hlZFJlY29uc3RydWN0aW9uKCk7XG4gICAgICAgICAgICByZXR1cm4gcGFja2V0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDbGVhbnMgdXAgYmluYXJ5IHBhY2tldCByZWNvbnN0cnVjdGlvbiB2YXJpYWJsZXMuXG4gICAgICovXG4gICAgZmluaXNoZWRSZWNvbnN0cnVjdGlvbigpIHtcbiAgICAgICAgdGhpcy5yZWNvblBhY2sgPSBudWxsO1xuICAgICAgICB0aGlzLmJ1ZmZlcnMgPSBbXTtcbiAgICB9XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuaGFzQmluYXJ5ID0gZXhwb3J0cy5pc0JpbmFyeSA9IHZvaWQgMDtcbmNvbnN0IHdpdGhOYXRpdmVBcnJheUJ1ZmZlciA9IHR5cGVvZiBBcnJheUJ1ZmZlciA9PT0gXCJmdW5jdGlvblwiO1xuY29uc3QgaXNWaWV3ID0gKG9iaikgPT4ge1xuICAgIHJldHVybiB0eXBlb2YgQXJyYXlCdWZmZXIuaXNWaWV3ID09PSBcImZ1bmN0aW9uXCJcbiAgICAgICAgPyBBcnJheUJ1ZmZlci5pc1ZpZXcob2JqKVxuICAgICAgICA6IG9iai5idWZmZXIgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcjtcbn07XG5jb25zdCB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5jb25zdCB3aXRoTmF0aXZlQmxvYiA9IHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgfHxcbiAgICAodHlwZW9mIEJsb2IgIT09IFwidW5kZWZpbmVkXCIgJiZcbiAgICAgICAgdG9TdHJpbmcuY2FsbChCbG9iKSA9PT0gXCJbb2JqZWN0IEJsb2JDb25zdHJ1Y3Rvcl1cIik7XG5jb25zdCB3aXRoTmF0aXZlRmlsZSA9IHR5cGVvZiBGaWxlID09PSBcImZ1bmN0aW9uXCIgfHxcbiAgICAodHlwZW9mIEZpbGUgIT09IFwidW5kZWZpbmVkXCIgJiZcbiAgICAgICAgdG9TdHJpbmcuY2FsbChGaWxlKSA9PT0gXCJbb2JqZWN0IEZpbGVDb25zdHJ1Y3Rvcl1cIik7XG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiBvYmogaXMgYSBCdWZmZXIsIGFuIEFycmF5QnVmZmVyLCBhIEJsb2Igb3IgYSBGaWxlLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGlzQmluYXJ5KG9iaikge1xuICAgIHJldHVybiAoKHdpdGhOYXRpdmVBcnJheUJ1ZmZlciAmJiAob2JqIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIgfHwgaXNWaWV3KG9iaikpKSB8fFxuICAgICAgICAod2l0aE5hdGl2ZUJsb2IgJiYgb2JqIGluc3RhbmNlb2YgQmxvYikgfHxcbiAgICAgICAgKHdpdGhOYXRpdmVGaWxlICYmIG9iaiBpbnN0YW5jZW9mIEZpbGUpKTtcbn1cbmV4cG9ydHMuaXNCaW5hcnkgPSBpc0JpbmFyeTtcbmZ1bmN0aW9uIGhhc0JpbmFyeShvYmosIHRvSlNPTikge1xuICAgIGlmICghb2JqIHx8IHR5cGVvZiBvYmogIT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoQXJyYXkuaXNBcnJheShvYmopKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gb2JqLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgaWYgKGhhc0JpbmFyeShvYmpbaV0pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoaXNCaW5hcnkob2JqKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKG9iai50b0pTT04gJiZcbiAgICAgICAgdHlwZW9mIG9iai50b0pTT04gPT09IFwiZnVuY3Rpb25cIiAmJlxuICAgICAgICBhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHJldHVybiBoYXNCaW5hcnkob2JqLnRvSlNPTigpLCB0cnVlKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBrZXkgaW4gb2JqKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpICYmIGhhc0JpbmFyeShvYmpba2V5XSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbmV4cG9ydHMuaGFzQmluYXJ5ID0gaGFzQmluYXJ5O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYWxwaGFiZXQgPSAnMDEyMzQ1Njc4OUFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXotXycuc3BsaXQoJycpXG4gICwgbGVuZ3RoID0gNjRcbiAgLCBtYXAgPSB7fVxuICAsIHNlZWQgPSAwXG4gICwgaSA9IDBcbiAgLCBwcmV2O1xuXG4vKipcbiAqIFJldHVybiBhIHN0cmluZyByZXByZXNlbnRpbmcgdGhlIHNwZWNpZmllZCBudW1iZXIuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IG51bSBUaGUgbnVtYmVyIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBudW1iZXIuXG4gKiBAYXBpIHB1YmxpY1xuICovXG5mdW5jdGlvbiBlbmNvZGUobnVtKSB7XG4gIHZhciBlbmNvZGVkID0gJyc7XG5cbiAgZG8ge1xuICAgIGVuY29kZWQgPSBhbHBoYWJldFtudW0gJSBsZW5ndGhdICsgZW5jb2RlZDtcbiAgICBudW0gPSBNYXRoLmZsb29yKG51bSAvIGxlbmd0aCk7XG4gIH0gd2hpbGUgKG51bSA+IDApO1xuXG4gIHJldHVybiBlbmNvZGVkO1xufVxuXG4vKipcbiAqIFJldHVybiB0aGUgaW50ZWdlciB2YWx1ZSBzcGVjaWZpZWQgYnkgdGhlIGdpdmVuIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyIFRoZSBzdHJpbmcgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtOdW1iZXJ9IFRoZSBpbnRlZ2VyIHZhbHVlIHJlcHJlc2VudGVkIGJ5IHRoZSBzdHJpbmcuXG4gKiBAYXBpIHB1YmxpY1xuICovXG5mdW5jdGlvbiBkZWNvZGUoc3RyKSB7XG4gIHZhciBkZWNvZGVkID0gMDtcblxuICBmb3IgKGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgZGVjb2RlZCA9IGRlY29kZWQgKiBsZW5ndGggKyBtYXBbc3RyLmNoYXJBdChpKV07XG4gIH1cblxuICByZXR1cm4gZGVjb2RlZDtcbn1cblxuLyoqXG4gKiBZZWFzdDogQSB0aW55IGdyb3dpbmcgaWQgZ2VuZXJhdG9yLlxuICpcbiAqIEByZXR1cm5zIHtTdHJpbmd9IEEgdW5pcXVlIGlkLlxuICogQGFwaSBwdWJsaWNcbiAqL1xuZnVuY3Rpb24geWVhc3QoKSB7XG4gIHZhciBub3cgPSBlbmNvZGUoK25ldyBEYXRlKCkpO1xuXG4gIGlmIChub3cgIT09IHByZXYpIHJldHVybiBzZWVkID0gMCwgcHJldiA9IG5vdztcbiAgcmV0dXJuIG5vdyArJy4nKyBlbmNvZGUoc2VlZCsrKTtcbn1cblxuLy9cbi8vIE1hcCBlYWNoIGNoYXJhY3RlciB0byBpdHMgaW5kZXguXG4vL1xuZm9yICg7IGkgPCBsZW5ndGg7IGkrKykgbWFwW2FscGhhYmV0W2ldXSA9IGk7XG5cbi8vXG4vLyBFeHBvc2UgdGhlIGB5ZWFzdGAsIGBlbmNvZGVgIGFuZCBgZGVjb2RlYCBmdW5jdGlvbnMuXG4vL1xueWVhc3QuZW5jb2RlID0gZW5jb2RlO1xueWVhc3QuZGVjb2RlID0gZGVjb2RlO1xubW9kdWxlLmV4cG9ydHMgPSB5ZWFzdDtcbiIsImltcG9ydCB7ICQgfSBmcm9tICcuL2NvcmUvbGliL2RvbSc7XG5pbXBvcnQgeyBwYXJlbnRzLCBmYWRlT3V0IH0gZnJvbSAnLi9jb3JlL2xpYi9kb20nO1xuaW1wb3J0IHsgcGxheWVyUmVmLCBwbGF5ZXJzRGF0YSwgY291cnREYXRhLCBiYWxsRGF0YSB9IGZyb20gJy4vZGF0YSc7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRVSShzb2NrZXQpIHtcbiAgLy8gc3RhdHVzXG4gIGxldCBnYW1lQ3JlYXRlZCwgam9pbmVkLCBuYW1lQ29uZmlybWVkLCBnYW1lU3RhcnRlZDtcbiAgLy8gcXVlcnkgRWxlbWVudHNcbiAgbGV0IGNyZWF0ZUdhbWVCdG4gPSAkKCcjY3JlYXRlLWdhbWUnKTsgIC8vICBiaW5kRXZlbnQgOiBnYW1lQ3JlYXRlZFxuICBsZXQgc2hvd0pvaW5HYW1lUHJvbXB0QnRuID0gJCgnI3Nob3ctam9pbi1nYW1lLXByb21wdCcpOyAvLyAgYmluZEV2ZW50XG4gIGxldCBjb25maXJtSm9pbkdhbWVCdG4gPSAkKCcjY29uZmlybS1qb2luLWdhbWUnKTsgLy8gIGJpbmRFdmVudDogam9pbmVkXG4gIGxldCByb29tQ29kZUlucHV0ID0gJCgnI3Jvb20tY29kZS1pbnB1dCcpO1xuICBsZXQgcm9vbUNvZGVEaXNwbGF5ID0gJCgnI3Jvb20tY29kZS1kaXNwbGF5Jyk7XG4gIGxldCBuYW1lSW5wdXQgPSAkKCcjbmFtZS1pbnB1dCcpO1xuICBsZXQgbmFtZUNvbmZpcm0gPSAkKCcjbmFtZS1jb25maXJtJyk7IC8vICBiaW5kRXZlbnQgbmFtZUNvbmZpcm1lZFxuICBsZXQgbGVhdmVXYWl0aW5nQnRuID0gJCgnI2xlYXZlLXdhaXRpbmcnKTsgLy8gIGJpbmRFdmVudFxuICBsZXQgbGVhdmVHYW1lU3RhcnRBbGVydCA9ICQoJyNsZWF2ZS1nYW1lLXN0YXJ0LWFsZXJ0Jyk7IC8vICBiaW5kRXZlbnRcbiAgbGV0IGdhbWVTdGFydCA9ICQoJyNnYW1lLXN0YXJ0Jyk7IC8vICBiaW5kRXZlbnRcblxuICAvLyDlu7rnq4sgaW5pVUkgUHJvbWlzZSBcbiAgbGV0IGluaXRUcmlnZ2VyO1xuICBsZXQgaW5pdFVJUHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xuICAgIGluaXRUcmlnZ2VyID0gcmVzO1xuICB9KVxuXG4gIC8vLi4u5paH5a2XXG4gIHNldEludGVydmFsKCgpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1yb2xlPVwiLi4uXCJdJykuZm9yRWFjaChlbGUgPT4ge1xuICAgICAgaWYgKGVsZS5pbm5lckhUTUwubGVuZ3RoIDwgMykge1xuICAgICAgICBlbGUuaW5uZXJIVE1MICs9ICcuJ1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGVsZS5pbm5lckhUTUwgPSAnJ1xuICAgICAgfVxuICAgIH0pXG4gIH0sIDUwMClcblxuICAvL+e2geWumumXnOmWiXBvcG91dFxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbY2xvc2UtdGhpcy1wb3BvdXRdJykuZm9yRWFjaChlbGUgPT4ge1xuICAgIGxldCBwYXJlbnRQb3BvdXRzID0gcGFyZW50cyhlbGUsICcucG9wb3V0Jyk7XG4gICAgZWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdG9nZ2xlUG9wb3V0KHBhcmVudFBvcG91dHNbMF0uaWQsIGZhbHNlKTtcbiAgICB9KVxuICB9KVxuXG5cbiAgLy8g5a6j5ZGKIGZsYWcsIOebrueahOaYr+eUqOS+huWIpOWumuWIsOW6lW5hbWVQcm9tcHQg5piv5b6e5ZOq5LiA5YCL566h6YGT5Y67Y2FsbOWHuuS+hueahFxuICBsZXQgZmxhZztcblxuXG4gIC8v57aB5a6a56K66KqN6YCB5Ye65oyJ6YiV55qE6bue5pOK5LqL5Lu2XG4gIG5hbWVDb25maXJtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmIChuYW1lQ29uZmlybWVkIHx8IGdhbWVDcmVhdGVkIHx8IGpvaW5lZCkgcmV0dXJuO1xuICAgIGxldCBuYW1lID0gbmFtZUlucHV0LnZhbHVlID8gbmFtZUlucHV0LnZhbHVlIDogcGxheWVyUmVmLm5hbWU7XG4gICAgY29uZmlybU5hbWUoc29ja2V0LCBuYW1lKTtcbiAgICBpZiAoZmxhZyA9PT0gJ29uSm9pbicpIHtcbiAgICAgIHRvZ2dsZVBvcG91dCgnam9pbi1nYW1lLXByb21wdCcsIHRydWUpO1xuICAgIH1cbiAgICBlbHNlIGlmIChmbGFnID09PSAnb25DcmVhdGUnKSB7XG4gICAgICBpZiAoIWdhbWVDcmVhdGVkKSB7XG4gICAgICAgIG5ld0dhbWUoc29ja2V0KTtcbiAgICAgICAgZ2FtZUNyZWF0ZWQgPSB0cnVlO1xuICAgICAgICBqb2luZWQgPSB0cnVlO1xuICAgICAgICBuYW1lQ29uZmlybWVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG4gIH0pXG5cbiAgLy/ntoHlrprmjInpiJXpu57mk4rlvozplovllZ9uYW1lLWlucHV0LXByb21wdCA9PiBqb2luR2FtZSBwcm9tcHRcbiAgc2hvd0pvaW5HYW1lUHJvbXB0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGZsYWcgPSAnb25Kb2luJztcbiAgICB0b2dnbGVQb3BvdXQoJ25hbWUtaW5wdXQtcHJvbXB0JywgdHJ1ZSk7XG4gIH0pO1xuXG4gIC8v57aB5a6a5oyJ6YiV6bue5pOK5b6M6YCB5Ye65oOz5Y+D5Yqg55qE5oi/6ZaT56K855qE5LqL5Lu2XG4gIGNvbmZpcm1Kb2luR2FtZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAoIWpvaW5lZCkge1xuICAgICAgbGV0IHJvb21Db2RlID0gcm9vbUNvZGVJbnB1dC52YWx1ZTtcbiAgICAgIGNvbmZpcm1Kb2luR2FtZShzb2NrZXQsIHJvb21Db2RlKTtcbiAgICAgIGpvaW5lZCA9IHRydWU7XG4gICAgICBnYW1lQ3JlYXRlZCA9IHRydWU7XG4gICAgICBuYW1lQ29uZmlybWVkID0gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9KVxuXG4gIC8v57aB5a6a5oyJ6YiV6bue5pOK5b6M6ZaL5ZWfbmFtZS1pbnB1dC1wcm9tcHQgPT4gbmV3R2FtZSBwcm9tcHRcbiAgY3JlYXRlR2FtZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBmbGFnID0gJ29uQ3JlYXRlJztcbiAgICB0b2dnbGVQb3BvdXQoJ25hbWUtaW5wdXQtcHJvbXB0JywgdHJ1ZSk7XG4gIH0pO1xuXG4gIC8v57aB5a6a56ys5LiA6Zui6ZaL5oyJ6YiVXG4gIGxlYXZlV2FpdGluZ0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBzb2NrZXQuZW1pdCgnbGVhdmVXYWl0aW5nJyk7XG4gICAgZ2FtZUNyZWF0ZWQgPSBmYWxzZTtcbiAgICBqb2luZWQgPSBmYWxzZTtcbiAgICBuYW1lQ29uZmlybWVkID0gZmFsc2U7XG4gICAgdG9nZ2xlUG9wb3V0KCdyb29tLWNvZGUtZGlzcGxheS1wb3BvdXQnLCBmYWxzZSk7XG4gIH0pXG4gIC8v57aB5a6a56ys5LqM6Zui6ZaL5oyJ6YiVXG4gIGxlYXZlR2FtZVN0YXJ0QWxlcnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgc29ja2V0LmVtaXQoJ2xlYXZlU3RhcnRpbmdHYW1lJywgcGxheWVyUmVmKTtcbiAgICB0b2dnbGVQb3BvdXQoJ2dhbWUtc3RhcnQtYWxlcnQnLCBmYWxzZSk7XG4gIH0pXG5cbiAgZ2FtZVN0YXJ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmICghZ2FtZVN0YXJ0ZWQpIHtcbiAgICAgIHNvY2tldC5lbWl0KCdzdGFydE1hdGNoJyk7XG4gICAgICBnYW1lU3RhcnRlZCA9IHRydWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICB9KVxuXG4gIC8v57aB5a6a55W2c2VydmVy5YKz5L6GJ2dlblJvb21Db2RlJ+ioiuiZn+W+jO+8jHVpIOaHieeUoueUn+eahOWwjeaHieihjOeCulxuICBzb2NrZXQub24oJ2dlblJvb21Db2RlJywgKGRhdGEpID0+IHtcbiAgICByb29tQ29kZURpc3BsYXkuaW5uZXJIVE1MID0gZGF0YTtcbiAgfSlcblxuICAvL+e2geWumueVtnNlcnZlcuWCs+S+hidwbGF5ZXJKb2luZWQn6KiK6Jmf5b6M77yMdWkg5oeJ55Si55Sf55qE5bCN5oeJ6KGM54K6XG4gIHNvY2tldC5vbigncGxheWVySm9pbmVkJywgKGRhdGEpID0+IHtcbiAgICBpZiAoZGF0YS5wbGF5ZXJOdW1iZXIgPT09IDIpIHtcbiAgICAgIGlmIChwbGF5ZXJSZWYubnVtYmVyID09IDEpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtcm9sZT1cIm9wcG9uZW50XCJdJykuZm9yRWFjaChlbGUgPT4ge1xuICAgICAgICAgIGVsZS5pbm5lckhUTUwgPSBgWU9VUiBPUFBPTkVOVCAke2RhdGEucGxheWVyTmFtZX0gU0hPV1MgVVAhYFxuICAgICAgICB9KTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtcm9sZT1cInBsYXllcjJcIl0nKS5mb3JFYWNoKGVsZSA9PiB7XG4gICAgICAgICAgZWxlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAocGxheWVyUmVmLm51bWJlciA9PSAyKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXJvbGU9XCJvcHBvbmVudFwiXScpLmZvckVhY2goZWxlID0+IHtcbiAgICAgICAgICBlbGUuaW5uZXJIVE1MID0gYFdBSVRJTkcgRk9SIFRIRSBST09NIEhPU1Q8YnI+PGJyPiR7ZGF0YS5ob3N0TmFtZX08YnI+PGJyPlRPIEFDQ0VQVCBZT1VSIENIQUxMRU5HRTxzcGFuIGRhdGEtcm9sZT1cIi4uLlwiPjwvc3Bhbj5gXG4gICAgICAgIH0pO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1yb2xlPVwicGxheWVyMVwiXScpLmZvckVhY2goZWxlID0+IHtcbiAgICAgICAgICBlbGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIHRvZ2dsZVBvcG91dCgncm9vbS1jb2RlLWRpc3BsYXktcG9wb3V0JywgZmFsc2UpO1xuICAgICAgdG9nZ2xlUG9wb3V0KCdqb2luLWdhbWUtcHJvbXB0JywgZmFsc2UpO1xuICAgICAgdG9nZ2xlUG9wb3V0KCdnYW1lLXN0YXJ0LWFsZXJ0JywgdHJ1ZSk7XG4gICAgICBwbGF5ZXJzRGF0YVswXS5uYW1lID0gZGF0YS5ob3N0TmFtZTtcbiAgICAgIHBsYXllcnNEYXRhWzFdLm5hbWUgPSBkYXRhLnBsYXllck5hbWU7XG4gICAgfVxuICB9KVxuXG4gIHNvY2tldC5vbignaG9zdC1sZWF2ZScsIChkYXRhKSA9PiB7XG4gICAgdG9nZ2xlUG9wb3V0KCdnYW1lLXN0YXJ0LWFsZXJ0JywgZmFsc2UpO1xuICAgIHRvZ2dsZVBvcG91dCgnbGVhdmUtYWxlcnQnLCB0cnVlKTtcbiAgICBnYW1lU3RhcnRlZCA9IGZhbHNlO1xuICAgIGpvaW5lZCA9IGZhbHNlO1xuICAgIG5hbWVDb25maXJtZWQgPSBmYWxzZTtcbiAgICBnYW1lQ3JlYXRlZCA9IGZhbHNlO1xuXG4gICAgJCgnW2RhdGEtcm9sZT1cImxlYXZlLW1zZ1wiXScpLmlubmVySFRNTCA9IGBIT1NUICR7ZGF0YS5ob3N0fSBMRUZUIEFORCBTSFVURE9XTiBUSEUgUk9PTS5gXG4gIH0pXG5cbiAgc29ja2V0Lm9uKCdjaGFsbGVuZ2VyLWxlYXZlJywgKGRhdGEpID0+IHtcbiAgICB0b2dnbGVQb3BvdXQoJ2dhbWUtc3RhcnQtYWxlcnQnLCBmYWxzZSk7XG4gICAgdG9nZ2xlUG9wb3V0KCdsZWF2ZS1hbGVydCcsIHRydWUpO1xuICAgIHRvZ2dsZVBvcG91dCgncm9vbS1jb2RlLWRpc3BsYXktcG9wb3V0JywgdHJ1ZSk7XG4gICAgZ2FtZVN0YXJ0ZWQgPSBmYWxzZTtcbiAgICBqb2luZWQgPSBmYWxzZTtcbiAgICBuYW1lQ29uZmlybWVkID0gZmFsc2U7XG4gICAgZ2FtZUNyZWF0ZWQgPSBmYWxzZTtcblxuICAgICQoJ1tkYXRhLXJvbGU9XCJsZWF2ZS1tc2dcIl0nKS5pbm5lckhUTUwgPSBgQ0hBTExFTkdFUiAke2RhdGEuY2hhbGxlbmdlcn0gTEVGVCBUSElTIE1BVENILmBcbiAgfSlcblxuICBzb2NrZXQub24oJ2xlYXZlJywgKCkgPT4ge1xuICAgIGdhbWVTdGFydGVkID0gZmFsc2U7XG4gICAgam9pbmVkID0gZmFsc2U7XG4gICAgbmFtZUNvbmZpcm1lZCA9IGZhbHNlO1xuICAgIGdhbWVDcmVhdGVkID0gZmFsc2U7XG4gIH0pXG5cbiAgLy/ntoHlrprnlbZzZXJ2ZXLlgrPkvoYnZ2FtZUluaXQn6KiK6Jmf5b6M77yMdWkg5oeJ55Si55Sf55qE5bCN5oeJ6KGM54K6XG4gIHNvY2tldC5vbignZ2FtZUluaXQnLCAoKSA9PiB7XG4gICAgdG9nZ2xlUG9wb3V0KCdnYW1lLXN0YXJ0LWFsZXJ0JywgZmFsc2UpO1xuXG4gIH0pXG5cblxuICAvLyDop7jnmbwgcHJvbWlzZSBmdWxsZmlsbOapn+WItlxuICBpbml0VHJpZ2dlcigpO1xuXG4gIC8vIOWbnuWCsyBmdWxsZmlsbOW+jOeahHByb21pc2VcbiAgcmV0dXJuIGluaXRVSVByb21pc2U7XG59XG5cbi8qKlxuICog6ZaL5ZWfIHBvcG91dFxuICpcbiAqIEBwYXJhbSB7Kn0gaWRcbiAqIEBwYXJhbSB7Kn0gc3RhdHVzXG4gKi9cbmZ1bmN0aW9uIHRvZ2dsZVBvcG91dChpZCwgc3RhdHVzKSB7XG4gIGxldCBwb3BvdXQgPSAkKGAucG9wb3V0IyR7aWR9YCk7XG4gIGlmIChzdGF0dXMpIHtcbiAgICBwb3BvdXQuY2xhc3NMaXN0LmFkZCgncG9wb3V0LS1zaG93Jyk7XG4gIH1cbiAgZWxzZSB7XG4gICAgcG9wb3V0LmNsYXNzTGlzdC5yZW1vdmUoJ3BvcG91dC0tc2hvdycpO1xuICB9XG59XG5cbi8qKlxuICogIOmWi+mXnOWFt+aciWhpZGUtb24tYWN0aW9u5bGs5oCn55qEdWkgZWxlbWVudCxcbiAqXG4gKiBAcGFyYW0geyp9IHN0YXR1c1xuICovXG5mdW5jdGlvbiB0b2dnbGVIaWRlT25BY3Rpb24oc3RhdHVzKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1toaWRlLW9uLWFjdGlvbl0nKS5mb3JFYWNoKGVsZSA9PiB7XG4gICAgZWxlLnNldEF0dHJpYnV0ZSgnaGlkZS1vbi1hY3Rpb24nLCBzdGF0dXMgPyAnJyA6ICdoaWRlJyk7XG4gIH0pXG59XG4vKipcbiAqIOmWi+mXnOWFt+aciXNob3ctb24tZnVsbOWxrOaAp+eahHVpIGVsZW1lbnQsXG4gKlxuICogQHBhcmFtIHsqfSBzdGF0dXNcbiAqL1xuZnVuY3Rpb24gdG9nZ2xlU2hvd09uQWN0aW9uKHN0YXR1cykge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbc2hvdy1vbi1hY3Rpb25dJykuZm9yRWFjaChlbGUgPT4ge1xuICAgIGVsZS5zZXRBdHRyaWJ1dGUoJ3Nob3ctb24tYWN0aW9uJywgc3RhdHVzID8gJycgOiAnaGlkZScpO1xuICB9KVxufVxuXG5cbi8qKlxuICog5bu656uL5paw6YGK5oiyXG4gKlxuICogQHBhcmFtIHsqfSBzb2NrZXRcbiAqL1xuZnVuY3Rpb24gbmV3R2FtZShzb2NrZXQpIHtcbiAgcGxheWVyUmVmLm51bWJlciA9IDE7XG4gIGNvbnN0IG5ld0dhbWVEYXRhID0ge1xuICAgIHBsYXllcnNEYXRhOiBwbGF5ZXJzRGF0YSxcbiAgICBjb3VydERhdGE6IGNvdXJ0RGF0YSxcbiAgICBiYWxsRGF0YTogYmFsbERhdGFcbiAgfVxuICB0b2dnbGVQb3BvdXQoJ3Jvb20tY29kZS1kaXNwbGF5LXBvcG91dCcsIHRydWUpO1xuICBzb2NrZXQuZW1pdCgnbmV3R2FtZScsIEpTT04uc3RyaW5naWZ5KG5ld0dhbWVEYXRhKSk7XG59XG4vKipcbiAqIOWQkXNlcnZlcueZvOWHuueiuuiqjeWPg+WKoOmBiuaIsueahOS/oeiZn1xuICpcbiAqIEBwYXJhbSB7Kn0gc29ja2V0XG4gKiBAcGFyYW0geyp9IHJvb21Db2RlXG4gKi9cbmZ1bmN0aW9uIGNvbmZpcm1Kb2luR2FtZShzb2NrZXQsIHJvb21Db2RlKSB7XG4gIHBsYXllclJlZi5udW1iZXIgPSAyO1xuICBzb2NrZXQuZW1pdCgnam9pbkdhbWUnLCByb29tQ29kZSk7XG59XG4vKipcbiAqIFxuICog56K66KqN6Ly45YWl55qE5pqx56ix5b6M77yM5oqK6YGK5oiy5YWn5omA5pyJZGF0YS1yb2xlPVwibmFtZVwiIOeahCBlbGVtZW50LCDlhaflrrnpg73mj5vmiJDovLjlhaXnmoRuYW1lLCDkuKblkIzmmYLlkJFzZXJ2ZXLnmbzpgIEnbmFtZUNvbmZpcm0n55qE6KiK6JmfXG4gKiDmnIDlvozpl5zploluYW1lLWlucHV0LXByb21wdFxuICogQHBhcmFtIHsqfSBzb2NrZXRcbiAqIEBwYXJhbSB7Kn0gbmFtZVxuICogQHBhcmFtIHsqfSBjYlxuICovXG5mdW5jdGlvbiBjb25maXJtTmFtZShzb2NrZXQsIG5hbWUsIGNiKSB7XG4gIHBsYXllclJlZi5uYW1lID0gbmFtZTtcbiAgc29ja2V0LmVtaXQoJ25hbWVDb25maXJtJywgbmFtZSk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLXJvbGU9XCJuYW1lXCJdYCkuZm9yRWFjaCgobywgaSkgPT4ge1xuICAgIG8uaW5uZXJIVE1MID0gbmFtZTtcbiAgfSlcbiAgdG9nZ2xlUG9wb3V0KCduYW1lLWlucHV0LXByb21wdCcsIGZhbHNlKTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRDb3VudGluZyhjYikge1xuICBsZXQgZ2MgPSAkKCcjZ2FtZS1zdGFydC1jb3VudGluZycpO1xuICBnYy5jbGFzc0xpc3QuYWRkKCdnYW1lLXN0YXJ0LWNvdW50aW5nLS1zaG93Jyk7XG4gIGxldCBudW1iZXIgPSBnYy5xdWVyeVNlbGVjdG9yKCcuZ2FtZS1zdGFydC1jb3VudGluZ19fbnVtYmVyJyk7XG4gIG51bWJlci5pbm5lckhUTUwgPSAzO1xuICBsZXQgdGltZUludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgIGlmIChwYXJzZUludChudW1iZXIuaW5uZXJIVE1MKSA+IDApIHtcbiAgICAgIG51bWJlci5pbm5lckhUTUwgPSBwYXJzZUludChudW1iZXIuaW5uZXJIVE1MKSAtIDE7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lSW50ZXJ2YWwpO1xuICAgICAgZmFkZU91dChnYywgMTAwMCwgKCkgPT4ge1xuICAgICAgICBnYy5jbGFzc0xpc3QucmVtb3ZlKCdnYW1lLXN0YXJ0LWNvdW50aW5nLS1zaG93Jyk7XG4gICAgICB9KVxuICAgICAgY2IoKTtcbiAgICB9XG4gIH0sIDEwMDApXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgaW5pdFVJLCBzdGFydENvdW50aW5nIH0gZnJvbSAnLi91aSc7XG5pbXBvcnQgeyBpbml0U3BsYXNoIH0gZnJvbSAnLi9jb3JlL3NwbGFzaCc7XG5pbXBvcnQgeyBnYW1lQnVpbGRlciB9IGZyb20gJy4vY29yZS9nYW1lJztcbmltcG9ydCB7IGluaXRLZXlDb250cm9sIH0gZnJvbSAnLi9jb250cm9sbCc7XG5pbXBvcnQgeyBwbGF5ZXJzRGF0YSwgYmFsbERhdGEgfSBmcm9tICcuL2RhdGEnXG5cbmNvbnN0IHNvY2tldCA9IHJlcXVpcmUoJ3NvY2tldC5pby1jbGllbnQnKSgnaHR0cDovL2xvY2FsaG9zdDozMDAwJyk7XG5cbmxldCBzcGxhc2hTd2l0Y2hlcjtcbmxldCBzcGxhc2hQcm9taXNlID0gaW5pdFNwbGFzaCgpO1xuc3BsYXNoUHJvbWlzZS50aGVuKChzd2l0Y2hlcikgPT4ge1xuICBzcGxhc2hTd2l0Y2hlciA9IHN3aXRjaGVyO1xufSlcblxubGV0IHVpSW5pdFByb21pc2UgPSBpbml0VUkoc29ja2V0KTtcbmV4cG9ydCBjb25zdCBnYW1lID0gZ2FtZUJ1aWxkZXIoKTtcblxudWlJbml0UHJvbWlzZS50aGVuKCgpID0+IHtcbiAgZ2FtZS50cmlnZ2VyKCk7XG59KVxuXG5zb2NrZXQub24oJ2dhbWVJbml0JywgKCkgPT4ge1xuICBzdGFydENvdW50aW5nKCgpID0+IHtcbiAgICBnYW1lLmNvbnRyb2xsZXIuc3Vycm91bmRpbmcuY2xhc3NMaXN0LmFkZCgncHJvbW90ZWQnKTtcbiAgICBnYW1lLmNvbnRyb2xsZXIuc2NvcmVib2FyZHMudXBkYXRlKCk7XG4gICAgbGV0IGdhbWVSZWFkeVByb21pc2UgPSBnYW1lLmNvbnRyb2xsZXIuZHJhd0dhbWUoKTtcbiAgICBnYW1lUmVhZHlQcm9taXNlLnRoZW4oKCkgPT4ge1xuICAgICAgc29ja2V0LmVtaXQoJ2dhbWVSZWFkeScpO1xuICAgICAgc3BsYXNoU3dpdGNoZXIoZmFsc2UpO1xuICAgICAgaW5pdEtleUNvbnRyb2woMTAwLCBzb2NrZXQpO1xuICAgIH0pXG4gIH0pXG59KVxuXG5zb2NrZXQub24oJ2hvc3QtbGVhdmUnLCAoKSA9PiB7XG4gIGdhbWUuY29udHJvbGxlci5zdXJyb3VuZGluZy5jbGFzc0xpc3QucmVtb3ZlKCdwcm9tb3RlZCcpO1xufSlcblxuc29ja2V0Lm9uKCdjaGFsbGVuZ2VyLWxlYXZlJywgKCkgPT4ge1xuICBnYW1lLmNvbnRyb2xsZXIuc3Vycm91bmRpbmcuY2xhc3NMaXN0LnJlbW92ZSgncHJvbW90ZWQnKTtcbn0pXG5cbnNvY2tldC5vbignbGVhdmUnLCAoKSA9PiB7XG4gIGdhbWUuY29udHJvbGxlci5zdXJyb3VuZGluZy5jbGFzc0xpc3QucmVtb3ZlKCdwcm9tb3RlZCcpO1xufSlcblxuc29ja2V0Lm9uKCdnYW1lUHJvY2VlZGluZycsIChkYXRhKSA9PiB7XG4gIGxldCBzZXJ2ZXJEYXRhID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5ZXJzRGF0YS5sZW5ndGg7IGkrKykge1xuICAgIHBsYXllcnNEYXRhW2ldLnBvc2l0aW9uLnggPSBzZXJ2ZXJEYXRhLnBsYXllcnNbaV0ucG9zaXRpb24ueDtcbiAgfVxuICBiYWxsRGF0YS5wb3NpdGlvbiA9IHNlcnZlckRhdGEuYmFsbC5wb3NpdGlvbjtcbn0pXG5cbnNvY2tldC5vbigndG9vTWFueVBsYXllcnMnLCAoKSA9PiB7XG4gIGFsZXJ0KCdSb29tIElzIEZ1bGwgTm93Jyk7XG59KVxuXG5zb2NrZXQub24oJ3Vua25vd25Db2RlJywgKCkgPT4ge1xuICBhbGVydCgnSW5jb3JyZWN0IFJvb20gQ29kZScpO1xufSlcblxuc29ja2V0Lm9uKCdob3N0Q2FudEJlR3Vlc3QnLCAoKSA9PiB7XG4gIGFsZXJ0KFwiWW91IENhbid0IEpvaW4gVGhlIEdhbWUgWW91IEFyZSBIb3N0aW5nXCIpO1xufSlcblxuXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwic291cmNlUm9vdCI6IiJ9