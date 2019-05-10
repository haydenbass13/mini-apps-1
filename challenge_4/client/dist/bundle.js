/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/src/components/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/components/app.jsx":
/*!***************************************!*\
  !*** ./client/src/components/app.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _row_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./row.jsx */ \"./client/src/components/row.jsx\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar App =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(App, _React$Component);\n\n  function App(props) {\n    var _this;\n\n    _classCallCheck(this, App);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));\n    _this.state = {\n      player1: 1,\n      player2: 2,\n      current: null,\n      gameBoard: [],\n      end: false,\n      winner: ''\n    };\n    _this.play = _this.play.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n\n  _createClass(App, [{\n    key: \"newGame\",\n    value: function newGame() {\n      var gameBoard = [];\n\n      for (var x = 0; x < 6; x++) {\n        var row = [];\n\n        for (var y = 0; y < 7; y++) {\n          row.push(null);\n        }\n\n        gameBoard.push(row);\n      }\n\n      this.setState({\n        gameBoard: gameBoard,\n        currentPlayer: this.state.player1,\n        end: false,\n        winner: ''\n      });\n    }\n  }, {\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      this.newGame();\n    }\n  }, {\n    key: \"switchPlayer\",\n    value: function switchPlayer() {\n      return this.state.currentPlayer === this.state.player1 ? this.state.player2 : this.state.player1;\n    }\n  }, {\n    key: \"play\",\n    value: function play(y) {\n      if (!this.state.end) {\n        var gameBoard = this.state.gameBoard;\n\n        for (var x = 5; x >= 0; x--) {\n          if (!gameBoard[x][y]) {\n            gameBoard[x][y] = this.state.currentPlayer;\n            break;\n          }\n        }\n\n        var result = this.checkBoard(gameBoard);\n\n        if (result === this.state.player1) {\n          this.setState({\n            gameBoard: gameBoard,\n            end: true,\n            winner: 'Player 1 (red) wins!'\n          });\n        } else if (result === this.state.player2) {\n          this.setState({\n            gameBoard: gameBoard,\n            end: true,\n            winner: 'Player 2 (yellow) wins!'\n          });\n        } else if (result === 'draw') {\n          this.setState({\n            gameBoard: gameBoard,\n            end: true,\n            winner: 'Draw game.'\n          });\n        } else {\n          this.setState({\n            gameBoard: gameBoard,\n            currentPlayer: this.switchPlayer()\n          });\n        }\n      } else {\n        this.setState({\n          winner: 'Game over. Please start a new game.'\n        });\n      }\n    }\n  }, {\n    key: \"colCheck\",\n    value: function colCheck(gameBoard) {\n      for (var x = 3; x < 6; x++) {\n        for (var y = 0; y < 7; y++) {\n          if (gameBoard[x][y]) {\n            if (gameBoard[x][y] === gameBoard[x - 1][y] && gameBoard[x][y] === gameBoard[x - 2][y] && gameBoard[x][y] === gameBoard[x - 3][y]) {\n              return gameBoard[x][y];\n            }\n          }\n        }\n      }\n    }\n  }, {\n    key: \"rowCheck\",\n    value: function rowCheck(gameBoard) {\n      for (var x = 0; x < 6; x++) {\n        for (var y = 0; y < 4; y++) {\n          if (gameBoard[x][y]) {\n            if (gameBoard[x][y] === gameBoard[x][y + 1] && gameBoard[x][y] === gameBoard[x][y + 2] && gameBoard[x][y] === gameBoard[x][y + 3]) {\n              return gameBoard[x][y];\n            }\n          }\n        }\n      }\n    }\n  }, {\n    key: \"diaRight\",\n    value: function diaRight(gameBoard) {\n      for (var x = 3; x < 6; x++) {\n        for (var y = 0; y < 4; y++) {\n          if (gameBoard[x][y]) {\n            if (gameBoard[x][y] === gameBoard[x - 1][y + 1] && gameBoard[x][y] === gameBoard[x - 2][y + 2] && gameBoard[x][y] === gameBoard[x - 3][y + 3]) {\n              return gameBoard[x][y];\n            }\n          }\n        }\n      }\n    }\n  }, {\n    key: \"diaLeft\",\n    value: function diaLeft(gameBoard) {\n      for (var x = 3; x < 6; x++) {\n        for (var y = 3; y < 7; y++) {\n          if (gameBoard[x][y]) {\n            if (gameBoard[x][y] === gameBoard[x - 1][y - 1] && gameBoard[x][y] === gameBoard[x - 2][y - 2] && gameBoard[x][y] === gameBoard[x - 3][y - 3]) {\n              return gameBoard[x][y];\n            }\n          }\n        }\n      }\n    }\n  }, {\n    key: \"checkDraw\",\n    value: function checkDraw(gameBoard) {\n      for (var x = 0; x < 6; x++) {\n        for (var y = 0; y < 7; y++) {\n          if (gameBoard[x][y] === null) {\n            return null;\n          }\n        }\n      }\n\n      return 'draw';\n    }\n  }, {\n    key: \"checkBoard\",\n    value: function checkBoard(gameBoard) {\n      return this.colCheck(gameBoard) || this.diaRight(gameBoard) || this.diaLeft(gameBoard) || this.rowCheck(gameBoard) || this.checkDraw(gameBoard);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return React.createElement(\"div\", null, React.createElement(\"div\", {\n        className: \"gameBoardWrapper\"\n      }, React.createElement(\"table\", null, React.createElement(\"thead\", null), React.createElement(\"tbody\", null, this.state.gameBoard.map(function (row, i) {\n        return React.createElement(_row_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n          key: i,\n          row: row,\n          play: _this2.play\n        });\n      }))), React.createElement(\"p\", {\n        className: \"winner\"\n      }, this.state.winner), React.createElement(\"div\", {\n        className: \"button\",\n        onClick: function onClick() {\n          _this2.newGame();\n        }\n      }, \"New Game\")));\n    }\n  }]);\n\n  return App;\n}(React.Component);\n\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvYXBwLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NsaWVudC9zcmMvY29tcG9uZW50cy9hcHAuanN4P2I2MzEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJvdyBmcm9tICcuL3Jvdy5qc3gnO1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgcGxheWVyMTogMSxcbiAgICAgIHBsYXllcjI6IDIsXG4gICAgICBjdXJyZW50OiBudWxsLFxuICAgICAgZ2FtZUJvYXJkOiBbXSxcbiAgICAgIGVuZDogZmFsc2UsXG4gICAgICB3aW5uZXI6ICcnLFxuICAgIH07XG4gICAgdGhpcy5wbGF5ID0gdGhpcy5wbGF5LmJpbmQodGhpcyk7XG4gIH1cbiAgbmV3R2FtZSgpIHtcbiAgICBsZXQgZ2FtZUJvYXJkID0gW107XG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCA2OyB4KyspIHtcbiAgICAgIGxldCByb3cgPSBbXTtcbiAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgNzsgeSsrKSB7IHJvdy5wdXNoKG51bGwpIH1cbiAgICAgIGdhbWVCb2FyZC5wdXNoKHJvdyk7XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZ2FtZUJvYXJkLFxuICAgICAgY3VycmVudFBsYXllcjogdGhpcy5zdGF0ZS5wbGF5ZXIxLFxuICAgICAgZW5kOiBmYWxzZSxcbiAgICAgIHdpbm5lcjogJydcbiAgICB9KTtcbiAgfTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLm5ld0dhbWUoKTtcbiAgfVxuXG4gIHN3aXRjaFBsYXllcigpIHtcbiAgICByZXR1cm4gKHRoaXMuc3RhdGUuY3VycmVudFBsYXllciA9PT0gdGhpcy5zdGF0ZS5wbGF5ZXIxKSA/IHRoaXMuc3RhdGUucGxheWVyMiA6IHRoaXMuc3RhdGUucGxheWVyMTtcbiAgfVxuXG4gIHBsYXkoeSkge1xuICAgIGlmICghdGhpcy5zdGF0ZS5lbmQpIHtcbiAgICAgIGxldCBnYW1lQm9hcmQgPSB0aGlzLnN0YXRlLmdhbWVCb2FyZDtcbiAgICAgIGZvciAobGV0IHggPSA1OyB4ID49IDA7IHgtLSkge1xuICAgICAgICBpZiAoIWdhbWVCb2FyZFt4XVt5XSkge1xuICAgICAgICAgIGdhbWVCb2FyZFt4XVt5XSA9IHRoaXMuc3RhdGUuY3VycmVudFBsYXllcjtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgcmVzdWx0ID0gdGhpcy5jaGVja0JvYXJkKGdhbWVCb2FyZCk7XG4gICAgICBpZiAocmVzdWx0ID09PSB0aGlzLnN0YXRlLnBsYXllcjEpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGdhbWVCb2FyZCwgZW5kOiB0cnVlLCB3aW5uZXI6ICdQbGF5ZXIgMSAocmVkKSB3aW5zIScgfSk7XG4gICAgICB9IGVsc2UgaWYgKHJlc3VsdCA9PT0gdGhpcy5zdGF0ZS5wbGF5ZXIyKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBnYW1lQm9hcmQsIGVuZDogdHJ1ZSwgd2lubmVyOiAnUGxheWVyIDIgKHllbGxvdykgd2lucyEnIH0pO1xuICAgICAgfSBlbHNlIGlmIChyZXN1bHQgPT09ICdkcmF3Jykge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZ2FtZUJvYXJkLCBlbmQ6IHRydWUsIHdpbm5lcjogJ0RyYXcgZ2FtZS4nIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGdhbWVCb2FyZCwgY3VycmVudFBsYXllcjogdGhpcy5zd2l0Y2hQbGF5ZXIoKSB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHdpbm5lcjogJ0dhbWUgb3Zlci4gUGxlYXNlIHN0YXJ0IGEgbmV3IGdhbWUuJyB9KTtcbiAgICB9XG4gIH1cblxuICBjb2xDaGVjayhnYW1lQm9hcmQpIHtcbiAgICBmb3IgKGxldCB4ID0gMzsgeCA8IDY7IHgrKykge1xuICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCA3OyB5KyspIHtcbiAgICAgICAgaWYgKGdhbWVCb2FyZFt4XVt5XSkge1xuICAgICAgICAgIGlmIChnYW1lQm9hcmRbeF1beV0gPT09IGdhbWVCb2FyZFt4IC0gMV1beV0gJiZcbiAgICAgICAgICAgIGdhbWVCb2FyZFt4XVt5XSA9PT0gZ2FtZUJvYXJkW3ggLSAyXVt5XSAmJlxuICAgICAgICAgICAgZ2FtZUJvYXJkW3hdW3ldID09PSBnYW1lQm9hcmRbeCAtIDNdW3ldKSB7XG4gICAgICAgICAgICByZXR1cm4gZ2FtZUJvYXJkW3hdW3ldO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJvd0NoZWNrKGdhbWVCb2FyZCkge1xuICAgIGZvciAobGV0IHggPSAwOyB4IDwgNjsgeCsrKSB7XG4gICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IDQ7IHkrKykge1xuICAgICAgICBpZiAoZ2FtZUJvYXJkW3hdW3ldKSB7XG4gICAgICAgICAgaWYgKGdhbWVCb2FyZFt4XVt5XSA9PT0gZ2FtZUJvYXJkW3hdW3kgKyAxXSAmJlxuICAgICAgICAgICAgZ2FtZUJvYXJkW3hdW3ldID09PSBnYW1lQm9hcmRbeF1beSArIDJdICYmXG4gICAgICAgICAgICBnYW1lQm9hcmRbeF1beV0gPT09IGdhbWVCb2FyZFt4XVt5ICsgM10pIHtcbiAgICAgICAgICAgIHJldHVybiBnYW1lQm9hcmRbeF1beV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZGlhUmlnaHQoZ2FtZUJvYXJkKSB7XG4gICAgZm9yIChsZXQgeCA9IDM7IHggPCA2OyB4KyspIHtcbiAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgNDsgeSsrKSB7XG4gICAgICAgIGlmIChnYW1lQm9hcmRbeF1beV0pIHtcbiAgICAgICAgICBpZiAoZ2FtZUJvYXJkW3hdW3ldID09PSBnYW1lQm9hcmRbeCAtIDFdW3kgKyAxXSAmJlxuICAgICAgICAgICAgZ2FtZUJvYXJkW3hdW3ldID09PSBnYW1lQm9hcmRbeCAtIDJdW3kgKyAyXSAmJlxuICAgICAgICAgICAgZ2FtZUJvYXJkW3hdW3ldID09PSBnYW1lQm9hcmRbeCAtIDNdW3kgKyAzXSkge1xuICAgICAgICAgICAgcmV0dXJuIGdhbWVCb2FyZFt4XVt5XTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBkaWFMZWZ0KGdhbWVCb2FyZCkge1xuICAgIGZvciAobGV0IHggPSAzOyB4IDwgNjsgeCsrKSB7XG4gICAgICBmb3IgKGxldCB5ID0gMzsgeSA8IDc7IHkrKykge1xuICAgICAgICBpZiAoZ2FtZUJvYXJkW3hdW3ldKSB7XG4gICAgICAgICAgaWYgKGdhbWVCb2FyZFt4XVt5XSA9PT0gZ2FtZUJvYXJkW3ggLSAxXVt5IC0gMV0gJiZcbiAgICAgICAgICAgIGdhbWVCb2FyZFt4XVt5XSA9PT0gZ2FtZUJvYXJkW3ggLSAyXVt5IC0gMl0gJiZcbiAgICAgICAgICAgIGdhbWVCb2FyZFt4XVt5XSA9PT0gZ2FtZUJvYXJkW3ggLSAzXVt5IC0gM10pIHtcbiAgICAgICAgICAgIHJldHVybiBnYW1lQm9hcmRbeF1beV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY2hlY2tEcmF3KGdhbWVCb2FyZCkge1xuICAgIGZvciAobGV0IHggPSAwOyB4IDwgNjsgeCsrKSB7XG4gICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IDc7IHkrKykge1xuICAgICAgICBpZiAoZ2FtZUJvYXJkW3hdW3ldID09PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuICdkcmF3JztcbiAgfVxuXG4gIGNoZWNrQm9hcmQoZ2FtZUJvYXJkKSB7XG4gICAgcmV0dXJuIHRoaXMuY29sQ2hlY2soZ2FtZUJvYXJkKSB8fCB0aGlzLmRpYVJpZ2h0KGdhbWVCb2FyZCkgfHwgdGhpcy5kaWFMZWZ0KGdhbWVCb2FyZCkgfHwgdGhpcy5yb3dDaGVjayhnYW1lQm9hcmQpIHx8IHRoaXMuY2hlY2tEcmF3KGdhbWVCb2FyZCk7XG4gIH1cblxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2FtZUJvYXJkV3JhcHBlclwiPlxuICAgICAgICA8dGFibGU+XG4gICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAge3RoaXMuc3RhdGUuZ2FtZUJvYXJkLm1hcCgocm93LCBpKSA9PiAoPFJvdyBrZXk9e2l9IHJvdz17cm93fSBwbGF5PXt0aGlzLnBsYXl9IC8+KSl9XG4gICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cblxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ3aW5uZXJcIj57dGhpcy5zdGF0ZS53aW5uZXJ9PC9wPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHsgdGhpcy5uZXdHYW1lKCkgfX0+TmV3IEdhbWU8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFWQTtBQVdBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBOzs7O0FBdEpBO0FBQ0E7QUFzSkE7QUFFQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/src/components/app.jsx\n");

/***/ }),

/***/ "./client/src/components/index.jsx":
/*!*****************************************!*\
  !*** ./client/src/components/index.jsx ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.jsx */ \"./client/src/components/app.jsx\");\n\nReactDOM.render(React.createElement(_app_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], null), document.getElementById('app'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvaW5kZXguanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL2luZGV4LmpzeD9iMTA0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcHAgZnJvbSAnLi9hcHAuanN4JztcblxuUmVhY3RET00ucmVuZGVyKDxBcHAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUVBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/src/components/index.jsx\n");

/***/ }),

/***/ "./client/src/components/row.jsx":
/*!***************************************!*\
  !*** ./client/src/components/row.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _square_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./square.jsx */ \"./client/src/components/square.jsx\");\n\n\nvar Row = function Row(_ref) {\n  var row = _ref.row,\n      play = _ref.play;\n  return React.createElement(\"tr\", null, row.map(function (cell, i) {\n    return React.createElement(_square_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n      key: i,\n      value: cell,\n      columnIndex: i,\n      play: play\n    });\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Row);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvcm93LmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NsaWVudC9zcmMvY29tcG9uZW50cy9yb3cuanN4P2FiNTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENlbGwgZnJvbSAnLi9zcXVhcmUuanN4JztcblxuY29uc3QgUm93ID0gKHsgcm93LCBwbGF5IH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8dHI+XG4gICAgICB7cm93Lm1hcCgoY2VsbCwgaSkgPT4gPENlbGwga2V5PXtpfSB2YWx1ZT17Y2VsbH0gY29sdW1uSW5kZXg9e2l9IHBsYXk9e3BsYXl9IC8+KX1cbiAgICA8L3RyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUm93OyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/src/components/row.jsx\n");

/***/ }),

/***/ "./client/src/components/square.jsx":
/*!******************************************!*\
  !*** ./client/src/components/square.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Cell = function Cell(_ref) {\n  var value = _ref.value,\n      columnIndex = _ref.columnIndex,\n      play = _ref.play;\n  var color = 'white';\n\n  if (value === 1) {\n    color = 'red';\n  } else if (value === 2) {\n    color = 'yellow';\n  }\n\n  return React.createElement(\"td\", null, React.createElement(\"div\", {\n    className: \"cell\",\n    onClick: function onClick() {\n      play(columnIndex);\n    }\n  }, React.createElement(\"div\", {\n    className: color\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Cell);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvc3F1YXJlLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NsaWVudC9zcmMvY29tcG9uZW50cy9zcXVhcmUuanN4P2RkOTQiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQ2VsbCA9ICh7IHZhbHVlLCBjb2x1bW5JbmRleCwgcGxheSB9KSA9PiB7XG4gIGxldCBjb2xvciA9ICd3aGl0ZSc7XG4gIGlmICh2YWx1ZSA9PT0gMSkge1xuICAgIGNvbG9yID0gJ3JlZCc7XG4gIH0gZWxzZSBpZiAodmFsdWUgPT09IDIpIHtcbiAgICBjb2xvciA9ICd5ZWxsb3cnO1xuICB9XG4gICAgXG4gIHJldHVybiAoXG4gICAgPHRkPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZWxsXCIgb25DbGljaz17KCkgPT4ge3BsYXkoY29sdW1uSW5kZXgpfX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb2xvcn0+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3RkPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2VsbDsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/src/components/square.jsx\n");

/***/ })

/******/ });