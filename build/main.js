/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ (function() {

eval("var HOST = location.origin.replace(/^http/, 'ws');\nvar ws = new WebSocket(HOST);\nvar el;\nvar str;\nvar id = new Date().getTime();\nvar playerRecognized = false;\nvar localData = {\n  login: false,\n  id: id,\n  cursor: {\n    x: 0,\n    y: 0\n  }\n};\n\nws.onmessage = function (event) {\n  // 取回整體遊戲當前狀況資料\n  var dataFromServer = JSON.parse(event.data);\n\n  if (dataFromServer.connected === true) {\n    ws.send(JSON.stringify(localData));\n    localData.login = true;\n  } else {\n    // 把當前遊戲狀況資料印出來\n    str = '';\n    el = document.getElementById('server-time');\n    dataFromServer.clients.forEach(function (o, i) {\n      str += \"\\u73A9\\u5BB6\".concat(i, \"\\u6ED1\\u9F20\\u5EA7\\u6A19X:\").concat(o.cursor.x);\n      el.innerHTML = str;\n    }); // 把當前玩家操作狀況送給server\n    // 注意送出前都要先轉字串\n\n    ws.send(JSON.stringify(localData));\n  }\n};\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  document.body.addEventListener('mousemove', function (event) {\n    localData.cursor.x = event.pageX;\n    localData.cursor.y = event.pageY;\n  });\n});\n\n//# sourceURL=webpack://ping-pong/./index.js?");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://ping-pong/./src/scss/main.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./index.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/scss/main.scss"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;