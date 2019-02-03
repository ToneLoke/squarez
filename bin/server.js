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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/common/GameSetupStore.js":
/*!**************************************!*\
  !*** ./src/common/GameSetupStore.js ***!
  \**************************************/
/*! exports provided: default, GameSetupContext, GameSetupConsumer, actions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GameSetupProvider; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GameSetupContext\", function() { return GameSetupContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GameSetupConsumer\", function() { return GameSetupConsumer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"actions\", function() { return actions; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"]) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); } }; }();\n\n\n\nvar GameSetupContext = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createContext\"])();\n\nvar initialState = {\n  match: {\n    id: null, home: {}, away: {}, network: null\n  },\n  matches: [],\n  price: 5,\n  players: 25,\n  host: { id: null, alias: null },\n  error: null\n};\n\nvar actions = {\n  SET_MATCH: 'SET_MATCH',\n  SET_MATCHES: 'SET_MATCHES',\n  SET_PRICE: 'SET_PRICE',\n  SET_HOST: 'SET_HOST',\n  SUBMIT_GAME: 'SUBMIT_GAME'\n};\n\nvar reducer = function reducer(state, action) {\n  switch (action.type) {\n    case 'SET_MATCH':\n      return Object.assign({}, state, { match: Object.assign({}, state.match, action.payload) });\n    case 'SET_PRICE':\n      return Object.assign({}, state, { price: action.payload });\n    case 'SET_HOST':\n      return Object.assign({}, state, { host: Object.assign({}, state.host, action.payload) });\n    case 'SUBMIT_GAME':\n      console.log('SUBMIT_GAME');\n      return Object.assign({}, initialState);\n    default:\n      return state;\n  }\n};\n\n//= ====================== GAME SETUP HOC =======================\nfunction GameSetupProvider(_ref) {\n  var children = _ref.children,\n      data = _ref.value;\n\n  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useReducer\"])(reducer, Object.assign({}, initialState, data)),\n      _useReducer2 = _slicedToArray(_useReducer, 2),\n      state = _useReducer2[0],\n      dispatch = _useReducer2[1];\n\n  var value = { state: state, dispatch: dispatch };\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n    GameSetupContext.Provider,\n    { value: value },\n    children\n  );\n}\n//= ====================== END OF GAME SETUP =======================\n\n//= ====================== NOTE: For components to use =======================\nvar GameSetupConsumer = GameSetupContext.consumer;\n\n\n\n\n//# sourceURL=webpack:///./src/common/GameSetupStore.js?");

/***/ }),

/***/ "./src/common/LiveGameStore.js":
/*!*************************************!*\
  !*** ./src/common/LiveGameStore.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// import React, { createContext, useReducer } from 'react';\n\n// const GameSetupContext = createContext();\n\n// const initialState = {\n//   match: { home: {}, away: {} },\n//   settings: { price: 5, players: 25, exp: '' },\n//   host: { id: null, alias: null },\n//   step: 'matches',\n//   // NOTE: this board is pre activation\n//   board: { squares: {}, full: false },\n// };\n\n// //= ====================== STEP SAMPLE REDUCER PATTERN w/Context =======================\n// const actions = {\n//   step: { NEXT_STEP: 'NEXT_STEP' },\n// };\n\n// const changeStep = (state, step) => ({ ...state, step });\n// //= ====================== End of Step Actions/Reducers =======================\n\n// //= ====================== SETUP ALL REDUCERS =======================\n// const GameSetupReducers = (state, action) => {\n//   switch (action.type) {\n//   case actions.step.NEXT_STEP:\n//     return changeStep(state, action.payload);\n//   default:\n//     return state;\n//   }\n// };\n// // = ====================== END OF ALL REDUCERS =======================\n\n// //= ====================== GAME SETUP HOC =======================\n// const GameSetupProvider = ({ children }) => {\n//   const [state, dispatch] = useReducer(GameSetupReducers, initialState);\n//   const value = {\n//     state,\n//     dispatch,\n//   };\n\n//   return (\n//     <GameSetupContext.Provider value={value}>\n//       {children}\n//     </GameSetupContext.Provider>\n//   );\n// };\n// //= ====================== END OF GAME SETUP =======================\n\n// const { consumer: GameSetupConsumer } = GameSetupContext;\n\n// export {\n//   GameSetupContext, GameSetupProvider, GameSetupConsumer, actions,\n// };\n\n//# sourceURL=webpack:///./src/common/LiveGameStore.js?");

/***/ }),

/***/ "./src/common/NotFound.js":
/*!********************************!*\
  !*** ./src/common/NotFound.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return NotFound; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* eslint-disable no-param-reassign */\n\n\nfunction NotFound(_ref) {\n  var staticContext = _ref.staticContext;\n\n  if (staticContext) {\n    staticContext.notFound = true;\n  }\n  return (\n    //= ====================== 404 PAGE =======================\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      'div',\n      null,\n      'Not found'\n    )\n  );\n}\n\n//# sourceURL=webpack:///./src/common/NotFound.js?");

/***/ }),

/***/ "./src/common/StaticContext.js":
/*!*************************************!*\
  !*** ./src/common/StaticContext.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createContext\"])());\n\n//# sourceURL=webpack:///./src/common/StaticContext.js?");

/***/ }),

/***/ "./src/common/getData.js":
/*!*******************************!*\
  !*** ./src/common/getData.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getData; });\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ \"./src/common/helpers.js\");\n\n\n\nvar getAllMatches = _helpers__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getAllMatches,\n    getBoard = _helpers__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getBoard;\n\n\nvar routes = [{\n  //= ====================== \"Props for routes\" =======================\n  loadData: undefined,\n  routes: [{\n    loadData: getAllMatches,\n    path: '/',\n    exact: true\n  }, {\n    path: '/board/:id',\n    exact: true\n  }]\n}];\n\n//= ====================== PROMISE ERROR  =======================\nfunction noOp() {\n  console.error('**GET_DATA**');\n}\n\nfunction getData(path) {\n  //= ====================== create promises from all routes??? =======================\n  var matches = Object(react_router_config__WEBPACK_IMPORTED_MODULE_0__[\"matchRoutes\"])(routes, path);\n  return matches.filter(function (m) {\n    return !!m.route.loadData;\n  })\n  //= ====================== grab all  =======================\n  .map(function (m) {\n    return m.route.loadData().catch(noOp);\n  });\n}\n\n//# sourceURL=webpack:///./src/common/getData.js?");

/***/ }),

/***/ "./src/common/helpers.js":
/*!*******************************!*\
  !*** ./src/common/helpers.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\n\n//= ====================== API CALLS =======================\nvar API_URL = 'http://api.sportradar.us/nfl/official/trial/v5/en/games/2018/PST/4/schedule.json?api_key=p3jrhz3b36atpuwr2d593jyq';\nvar GET_WEEKLY_MATCHES = '/api/matches';\n// TODO: GET YEAR FROM TODAYS DATE\n// FIGURE OUT REG OR POST SEASON\n// GET NFL WEEK\nvar getWeeklyMatches = function getWeeklyMatches() {\n  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(GET_WEEKLY_MATCHES).then(function (res) {\n    return { matches: res.data };\n  });\n};\nvar getSingleMatch = function getSingleMatch() {\n  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(API_URL).then(function (res) {\n    return res.data;\n  });\n};\nvar getBoard = function getBoard() {\n  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(API_URL).then(function (res) {\n    return res.data;\n  });\n};\nvar createBoard = function createBoard() {\n  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(API_URL).then(function (res) {\n    return res.data;\n  });\n};\nvar updateBoard = function updateBoard() {\n  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(API_URL).then(function (res) {\n    return res.data;\n  });\n};\n//= ====================== End API =======================\n//= ====================== Heloper Methods =======================\n// NOTE: generates game board 5 x 5\n// TODO: make dynamic\nvar generateSquares = function generateSquares(num) {\n  return function (square) {\n    var data = [];\n    var count = 0;\n    var points = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];\n\n    var iter = function iter(i) {\n      if (i === num) {\n        return data;\n      }if (i <= 5 && i !== 0 || i > 5 && i % 6 === 0) {\n        data.push(square(' ' + points[count] + ' | ' + points[count + 1], i));\n        count === 8 ? count = 0 : count += 2;\n      } else {\n        data.push(square('' + i, i));\n      }\n      return iter(i + 1);\n    };\n\n    return iter(0);\n  };\n};\n//= ====================== End Heloper Methods =======================\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  getWeeklyMatches: getWeeklyMatches, getSingleMatch: getSingleMatch, getBoard: getBoard, generateSquares: generateSquares, createBoard: createBoard, updateBoard: updateBoard\n});\n\n//# sourceURL=webpack:///./src/common/helpers.js?");

/***/ }),

/***/ "./src/common/index.js":
/*!*****************************!*\
  !*** ./src/common/index.js ***!
  \*****************************/
/*! exports provided: helpers, getData, NotFound, SetupProvider, GameProvider, StaticContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./src/common/helpers.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"helpers\", function() { return _helpers__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getData */ \"./src/common/getData.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getData\", function() { return _getData__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _NotFound__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NotFound */ \"./src/common/NotFound.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"NotFound\", function() { return _NotFound__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var _GameSetupStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GameSetupStore */ \"./src/common/GameSetupStore.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"SetupProvider\", function() { return _GameSetupStore__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n/* harmony import */ var _LiveGameStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LiveGameStore */ \"./src/common/LiveGameStore.js\");\n/* harmony import */ var _LiveGameStore__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_LiveGameStore__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, \"GameProvider\", function() { return _LiveGameStore__WEBPACK_IMPORTED_MODULE_4___default.a; });\n/* harmony import */ var _StaticContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./StaticContext */ \"./src/common/StaticContext.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"StaticContext\", function() { return _StaticContext__WEBPACK_IMPORTED_MODULE_5__[\"default\"]; });\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/common/index.js?");

/***/ }),

/***/ "./src/common/superbowl.js":
/*!*********************************!*\
  !*** ./src/common/superbowl.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  id: '38c98229-3687-4b4d-974c-38bf8c88f7f9',\n  year: 2018,\n  type: 'PST',\n  name: 'PST',\n  week: {\n    id: '65c7bc7f-a4cd-4346-bd46-139c76dd630b',\n    sequence: 4,\n    title: '4',\n    games: [{\n      id: 'dc38b093-48ba-49b2-9f2b-04e216ce321c',\n      status: 'scheduled',\n      reference: '57833',\n      number: 267,\n      scheduled: '2019-02-03T23:30:00+00:00',\n      entry_mode: 'INGEST',\n      sr_id: 'sr:match:17091991',\n      venue: {\n        id: '1f2d393b-2291-4835-a412-0714966ea245',\n        name: 'Mercedes-Benz Stadium',\n        city: 'Atlanta',\n        state: 'GA',\n        country: 'USA',\n        zip: '30313',\n        address: '441 Martin Luther King Jr Drive NW',\n        capacity: 71000,\n        surface: 'artificial',\n        roof_type: 'retractable_dome'\n      },\n      home: {\n        id: '2eff2a03-54d4-46ba-890e-2bc3925548f3',\n        name: 'Los Angeles Rams',\n        alias: 'LA',\n        sr_id: 'sr:competitor:4387'\n      },\n      away: {\n        id: '97354895-8c77-4fd4-a860-32e62ea7382a',\n        name: 'New England Patriots',\n        alias: 'NE',\n        sr_id: 'sr:competitor:4424'\n      },\n      broadcast: { network: 'CBS' }\n    }]\n  },\n  _comment: 'Generation started @ 2019-01-31 12:22:49 +0000 ended @ 2019-01-31 12:22:49 +0000'\n});\n\n//# sourceURL=webpack:///./src/common/superbowl.js?");

/***/ }),

/***/ "./src/game/Game.jsx":
/*!***************************!*\
  !*** ./src/game/Game.jsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return App; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _views_board__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/board */ \"./src/views/board/Board.jsx\");\n/* harmony import */ var _views_setup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/setup */ \"./src/views/setup/Setup.jsx\");\n/* harmony import */ var _views_squares_core_styles_index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../views/squares-core/styles/index.scss */ \"./src/views/squares-core/styles/index.scss\");\n/* harmony import */ var _views_squares_core_styles_index_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_views_squares_core_styles_index_scss__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nfunction App() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n    'div',\n    { className: 'App' },\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Switch\"],\n      null,\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], { exact: true, path: '/', component: _views_setup__WEBPACK_IMPORTED_MODULE_3__[\"default\"] }),\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], { exact: true, path: '/board/:Id', component: _views_board__WEBPACK_IMPORTED_MODULE_2__[\"default\"] })\n    )\n  );\n}\n\n//# sourceURL=webpack:///./src/game/Game.jsx?");

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./renderer */ \"./src/server/renderer.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routes */ \"./src/server/routes.js\");\n\n\n\n\n\n\n\nvar PORT = 3000;\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\n\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_3___default.a.json());\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_3___default.a.urlencoded({ extended: false }));\n\n// Mongoose Connection (messages is our database)\nmongoose__WEBPACK_IMPORTED_MODULE_2___default.a.connect('mongodb://localhost/messages');\n\n// API ROUTES\napp.use('/api', _routes__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.static('public'));\napp.get('*', function (req, res) {\n  fs__WEBPACK_IMPORTED_MODULE_1___default.a.readFile('./src/server/index.html', 'utf8', function (err, data) {\n    var routeContext = {};\n    Object(_renderer__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(data, req.path, routeContext).then(function (html) {\n      if (routeContext.notFound) {\n        res.status(404);\n      }\n      res.send(html);\n    });\n  });\n});\n\napp.listen(PORT);\n\n//# sourceURL=webpack:///./src/server/index.js?");

/***/ }),

/***/ "./src/server/renderer.js":
/*!********************************!*\
  !*** ./src/server/renderer.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return renderer; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../game */ \"./src/game/Game.jsx\");\n/* harmony import */ var _common_getData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/getData */ \"./src/common/getData.js\");\n/* eslint-disable no-param-reassign */\n\n\n\n // SEO && TEXT DATA\n\n\n\nfunction renderer(html, path, context) {\n  var promises = Object(_common_getData__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(path);\n  context.data = {};\n\n  //= ====================== render response to client after api call =======================\n  return Promise.all(promises).then(function (responses) {\n    responses.forEach(function (r) {\n      if (r) Object.assign(context.data, r);\n    });\n    //= ====================== create stringified react =======================\n    var serverHtml = react_dom_server__WEBPACK_IMPORTED_MODULE_1___default.a.renderToString(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"StaticRouter\"],\n      { location: path, context: context },\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_game__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null)\n    ));\n\n    //= ====================== find and replace old html with new =======================\n    var regex = /(<div id=\"root\">)(<\\/div>)/;\n    html = html.replace(regex, function (original, div1, div2) {\n      return div1 + serverHtml + div2;\n    });\n    var helmet = react_helmet__WEBPACK_IMPORTED_MODULE_3___default.a.renderStatic();\n    var head = helmet.title.toString() + helmet.meta.toString();\n    var index = html.indexOf('</head>');\n    var html1 = html.slice(0, index);\n    var html2 = html.slice(index);\n    return html1 + head + html2;\n  });\n}\n\n//# sourceURL=webpack:///./src/server/renderer.js?");

/***/ }),

/***/ "./src/server/routes.js":
/*!******************************!*\
  !*** ./src/server/routes.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _common_superbowl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/superbowl */ \"./src/common/superbowl.js\");\n\n\n\nvar apiRouter = Object(express__WEBPACK_IMPORTED_MODULE_0__[\"Router\"])();\n\napiRouter.route('/matches').get(function (req, res) {\n  res.status(200).json(_common_superbowl__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (apiRouter);\n\n//# sourceURL=webpack:///./src/server/routes.js?");

/***/ }),

/***/ "./src/views/board/Board.jsx":
/*!***********************************!*\
  !*** ./src/views/board/Board.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common */ \"./src/common/index.js\");\n/* harmony import */ var _Board_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Board.scss */ \"./src/views/board/Board.scss\");\n/* harmony import */ var _Board_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Board_scss__WEBPACK_IMPORTED_MODULE_2__);\nvar _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"]) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); } }; }();\n\n\n\n\n\nvar generateSquares = _common__WEBPACK_IMPORTED_MODULE_1__[\"helpers\"].generateSquares;\n\n\nvar SquareRenderer = generateSquares(36);\n\nfunction lookupStatus(status) {\n  var squareStates = ['empty', 'pending', 'approved', 'cancel'];\n  return squareStates[status];\n}\n\nvar InnerSquare = function InnerSquare(_ref) {\n  var data = _ref.data;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      _useState2 = _slicedToArray(_useState, 2),\n      status = _useState2[0],\n      setStatus = _useState2[1];\n\n  var squareStatus = lookupStatus(status);\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n    'div',\n    {\n      className: 'item ' + squareStatus,\n      'data-status': squareStatus,\n      onClick: function onClick() {\n        return setStatus(status + 1);\n      },\n      role: 'button'\n    },\n    data\n  );\n};\n\nvar Square = function Square(data, boxId) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n    'div',\n    { className: 'cell', key: boxId, id: boxId },\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InnerSquare, { data: data })\n  );\n};\n\nvar board = SquareRenderer(Square);\n\nvar GameBoard = function GameBoard() {\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(board),\n      _useState4 = _slicedToArray(_useState3, 2),\n      squares = _useState4[0],\n      setSquares = _useState4[1];\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n    'div',\n    { className: 'board-wrapper' },\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      'div',\n      { className: 'board-container' },\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        'div',\n        { className: 'board' },\n        squares\n      )\n    )\n  );\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameBoard);\n\n//# sourceURL=webpack:///./src/views/board/Board.jsx?");

/***/ }),

/***/ "./src/views/board/Board.scss":
/*!************************************!*\
  !*** ./src/views/board/Board.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/views/board/Board.scss?");

/***/ }),

/***/ "./src/views/setup/Setup.jsx":
/*!***********************************!*\
  !*** ./src/views/setup/Setup.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _matches__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./matches */ \"./src/views/setup/matches/Matches.jsx\");\n/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings */ \"./src/views/setup/settings/Settings.jsx\");\n/* harmony import */ var _squares_core_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../squares-core/components */ \"./src/views/squares-core/components/index.js\");\n/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common */ \"./src/common/index.js\");\n/* harmony import */ var _Setup_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Setup.scss */ \"./src/views/setup/Setup.scss\");\n/* harmony import */ var _Setup_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Setup_scss__WEBPACK_IMPORTED_MODULE_6__);\nvar _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"]) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); } }; }();\n\n\n\n\n\n\n\n\n\n\nvar getWeeklyMatches = _common__WEBPACK_IMPORTED_MODULE_5__[\"helpers\"].getWeeklyMatches;\n\n\nvar Setup = function Setup() {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]),\n      _useState2 = _slicedToArray(_useState, 2),\n      matches = _useState2[0],\n      setMatches = _useState2[1];\n\n  var data = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_common__WEBPACK_IMPORTED_MODULE_5__[\"StaticContext\"]);\n\n  // const handleSubmit = () => store.dispatch({ type: actions.SUBMIT_GAME, payload: null })\n  // const setMatches = matches => store.dispatch({ type: actions.SET_HOST, payload: matches })\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (!data || !data.matches) {\n      getWeeklyMatches().then(function (data) {\n        var games = data.matches.week.games;\n\n        setMatches(games);\n      });\n    }\n  }, []);\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n    'div',\n    { className: 'setup' },\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      'div',\n      { className: 'container' },\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"],\n        { to: '/board/1' },\n        'Submit'\n      ),\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_settings__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null),\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_squares_core_components__WEBPACK_IMPORTED_MODULE_4__[\"User\"], { type: 'HOST' }),\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_matches__WEBPACK_IMPORTED_MODULE_2__[\"default\"], { games: matches })\n    )\n  );\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Setup);\n\n//# sourceURL=webpack:///./src/views/setup/Setup.jsx?");

/***/ }),

/***/ "./src/views/setup/Setup.scss":
/*!************************************!*\
  !*** ./src/views/setup/Setup.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/views/setup/Setup.scss?");

/***/ }),

/***/ "./src/views/setup/matches/Matches.jsx":
/*!*********************************************!*\
  !*** ./src/views/setup/matches/Matches.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _squares_core_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../squares-core/components */ \"./src/views/squares-core/components/index.js\");\n/* harmony import */ var _Matches_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Matches.scss */ \"./src/views/setup/matches/Matches.scss\");\n/* harmony import */ var _Matches_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Matches_scss__WEBPACK_IMPORTED_MODULE_2__);\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\n\n\n\n\nvar Matches = function Matches(_ref) {\n  var games = _ref.games;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n    'div',\n    { className: 'matches' },\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      'div',\n      { className: 'wrapper' },\n      games && games.map(function (game) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_squares_core_components__WEBPACK_IMPORTED_MODULE_1__[\"Match\"], _extends({ key: game.id }, game));\n      })\n    )\n  );\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Matches);\n\n//# sourceURL=webpack:///./src/views/setup/matches/Matches.jsx?");

/***/ }),

/***/ "./src/views/setup/matches/Matches.scss":
/*!**********************************************!*\
  !*** ./src/views/setup/matches/Matches.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/views/setup/matches/Matches.scss?");

/***/ }),

/***/ "./src/views/setup/settings/Settings.jsx":
/*!***********************************************!*\
  !*** ./src/views/setup/settings/Settings.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _squares_core_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../squares-core/components */ \"./src/views/squares-core/components/index.js\");\n/* harmony import */ var _Settings_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Settings.scss */ \"./src/views/setup/settings/Settings.scss\");\n/* harmony import */ var _Settings_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Settings_scss__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar prices = [1, 5, 10, 15, 20, 25];\n\nvar Amount = function Amount(_ref) {\n  var amount = _ref.amount;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n    'div',\n    { key: amount, className: 'settings-price' },\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      'span',\n      null,\n      '$'\n    ),\n    amount\n  );\n};\n\nvar Settings = function Settings() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n    'div',\n    { className: 'settings' },\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      _squares_core_components__WEBPACK_IMPORTED_MODULE_1__[\"Field\"],\n      { label: 'SQUARE PRICE', type: 'title' },\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        'div',\n        { className: 'settings-wrapper' },\n        prices.map(function (a) {\n          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Amount, { key: 'amount-' + a, amount: a });\n        })\n      )\n    ),\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      _squares_core_components__WEBPACK_IMPORTED_MODULE_1__[\"Field\"],\n      { label: 'GAME SETTINGS', type: 'title' },\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_squares_core_components__WEBPACK_IMPORTED_MODULE_1__[\"TextInput\"], { type: 'number', placeholder: '25 squares', disabled: true }),\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_squares_core_components__WEBPACK_IMPORTED_MODULE_1__[\"TextInput\"], { type: 'dattexte', placeholder: '1 day before', disabled: true })\n    )\n  );\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Settings);\n\n//# sourceURL=webpack:///./src/views/setup/settings/Settings.jsx?");

/***/ }),

/***/ "./src/views/setup/settings/Settings.scss":
/*!************************************************!*\
  !*** ./src/views/setup/settings/Settings.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/views/setup/settings/Settings.scss?");

/***/ }),

/***/ "./src/views/squares-core/components/Button/Button.jsx":
/*!*************************************************************!*\
  !*** ./src/views/squares-core/components/Button/Button.jsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Button_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button.scss */ \"./src/views/squares-core/components/Button/Button.scss\");\n/* harmony import */ var _Button_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Button_scss__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (_ref) {\n  var children = _ref.children,\n      handleClick = _ref.handleClick;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n    'div',\n    { className: 'btn', onClick: handleClick, role: 'button' },\n    children\n  );\n});\n\n//# sourceURL=webpack:///./src/views/squares-core/components/Button/Button.jsx?");

/***/ }),

/***/ "./src/views/squares-core/components/Button/Button.scss":
/*!**************************************************************!*\
  !*** ./src/views/squares-core/components/Button/Button.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/views/squares-core/components/Button/Button.scss?");

/***/ }),

/***/ "./src/views/squares-core/components/Field/Field.jsx":
/*!***********************************************************!*\
  !*** ./src/views/squares-core/components/Field/Field.jsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Header */ \"./src/views/squares-core/components/Header/Header.jsx\");\n/* harmony import */ var _Field_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Field.scss */ \"./src/views/squares-core/components/Field/Field.scss\");\n/* harmony import */ var _Field_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Field_scss__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar Field = function Field(_ref) {\n  var children = _ref.children,\n      type = _ref.type,\n      label = _ref.label;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n    'div',\n    { className: 'Field-' + type },\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], { name: label }),\n    children\n  );\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Field);\n\n//# sourceURL=webpack:///./src/views/squares-core/components/Field/Field.jsx?");

/***/ }),

/***/ "./src/views/squares-core/components/Field/Field.scss":
/*!************************************************************!*\
  !*** ./src/views/squares-core/components/Field/Field.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/views/squares-core/components/Field/Field.scss?");

/***/ }),

/***/ "./src/views/squares-core/components/Header/Header.jsx":
/*!*************************************************************!*\
  !*** ./src/views/squares-core/components/Header/Header.jsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ \"moment\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Header_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header.scss */ \"./src/views/squares-core/components/Header/Header.scss\");\n/* harmony import */ var _Header_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Header_scss__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar Header = function Header(_ref) {\n  var name = _ref.name;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n    'div',\n    { className: 'header' },\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      'div',\n      { className: 'label' },\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        'div',\n        { className: 'team-name' },\n        name\n      )\n    )\n  );\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\n//# sourceURL=webpack:///./src/views/squares-core/components/Header/Header.jsx?");

/***/ }),

/***/ "./src/views/squares-core/components/Header/Header.scss":
/*!**************************************************************!*\
  !*** ./src/views/squares-core/components/Header/Header.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/views/squares-core/components/Header/Header.scss?");

/***/ }),

/***/ "./src/views/squares-core/components/Icon/Icon.jsx":
/*!*********************************************************!*\
  !*** ./src/views/squares-core/components/Icon/Icon.jsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Icon; });\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction Icon(_ref) {\n  var icons = _ref.icons,\n      name = _ref.name;\n\n  var icon = icons[name];\n  var findicon = function findicon() {\n    switch (icon) {\n      case 'matches':\n        {\n          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\n            'div',\n            null,\n            'icon'\n          );\n        }\n      case 'settings':\n        {\n          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\n            'div',\n            null,\n            'icon'\n          );\n        }\n      case 'preview':\n        {\n          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\n            'div',\n            null,\n            'icon'\n          );\n        }\n      default:\n        {\n          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\n            'div',\n            null,\n            'icon'\n          );\n        }\n    }\n  };\n  var IconRenderer = findicon(icon);\n  return IconRenderer;\n}\n\nIcon.displayName = 'Icon';\nIcon.propTypes = {\n  icon: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string])\n};\nIcon.defaultProps = {\n  icon: null\n};\n\n//# sourceURL=webpack:///./src/views/squares-core/components/Icon/Icon.jsx?");

/***/ }),

/***/ "./src/views/squares-core/components/Match/Match.jsx":
/*!***********************************************************!*\
  !*** ./src/views/squares-core/components/Match/Match.jsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ \"moment\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Field */ \"./src/views/squares-core/components/Field/Field.jsx\");\n/* harmony import */ var _Match_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Match.scss */ \"./src/views/squares-core/components/Match/Match.scss\");\n/* harmony import */ var _Match_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Match_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n// import PatriotsLogo from '../../../../../..fassets/patriots.svg';\n// import RamsLogo from '../../../../../assets/rams.svg';\n\n\nvar Team = function Team(_ref) {\n  var name = _ref.name;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n    'div',\n    { className: 'team-name' },\n    name\n  );\n};\n\nvar Match = function Match(_ref2) {\n  var scheduled = _ref2.scheduled,\n      broadcast = _ref2.broadcast,\n      scoring = _ref2.scoring,\n      home = _ref2.home,\n      away = _ref2.away;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n    _Field__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    { type: 'title', label: 'SuperBowl LIII' },\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      'div',\n      { className: 'match' },\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        'div',\n        { className: 'team-away' },\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Team, away)\n      ),\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        'div',\n        { className: 'team-home' },\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Team, home)\n      ),\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        'div',\n        { className: 'info' },\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          'span',\n          null,\n          moment__WEBPACK_IMPORTED_MODULE_1___default()(scheduled).format('MMMM Do, h:mm a')\n        ),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          'span',\n          null,\n          broadcast.network\n        )\n      )\n    )\n  );\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Match);\n\n//# sourceURL=webpack:///./src/views/squares-core/components/Match/Match.jsx?");

/***/ }),

/***/ "./src/views/squares-core/components/Match/Match.scss":
/*!************************************************************!*\
  !*** ./src/views/squares-core/components/Match/Match.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/views/squares-core/components/Match/Match.scss?");

/***/ }),

/***/ "./src/views/squares-core/components/TextInput/TextInput.jsx":
/*!*******************************************************************!*\
  !*** ./src/views/squares-core/components/TextInput/TextInput.jsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _TextInput_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TextInput.scss */ \"./src/views/squares-core/components/TextInput/TextInput.scss\");\n/* harmony import */ var _TextInput_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_TextInput_scss__WEBPACK_IMPORTED_MODULE_1__);\n\n\n// NOTE: button is disabled unless needed in the future\nvar TextInput = function TextInput(props) {\n  var type = props.type;\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n    'div',\n    { className: 'Input-wrapper ' + type },\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('input', props)\n  );\n};\n\nvar arePropsEqual = function arePropsEqual(prevProps, nextProps) {\n  return prevProps.value === nextProps.value;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react__WEBPACK_IMPORTED_MODULE_0__[\"memo\"])(TextInput, arePropsEqual));\n\n//# sourceURL=webpack:///./src/views/squares-core/components/TextInput/TextInput.jsx?");

/***/ }),

/***/ "./src/views/squares-core/components/TextInput/TextInput.scss":
/*!********************************************************************!*\
  !*** ./src/views/squares-core/components/TextInput/TextInput.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/views/squares-core/components/TextInput/TextInput.scss?");

/***/ }),

/***/ "./src/views/squares-core/components/User/UserInfo.jsx":
/*!*************************************************************!*\
  !*** ./src/views/squares-core/components/User/UserInfo.jsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _TextInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../TextInput */ \"./src/views/squares-core/components/TextInput/TextInput.jsx\");\n/* harmony import */ var _Field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Field */ \"./src/views/squares-core/components/Field/Field.jsx\");\n\n\n\n\nvar User = function User(_ref) {\n  var input = _ref.input,\n      type = _ref.type;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n    'div',\n    { className: 'user' },\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      _Field__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n      { label: type + ' INFO', type: 'title' },\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TextInput__WEBPACK_IMPORTED_MODULE_1__[\"default\"], { type: 'text', placeholder: 'venmo name' }),\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TextInput__WEBPACK_IMPORTED_MODULE_1__[\"default\"], { type: 'text', placeholder: 'alias' })\n    )\n  );\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (User);\n\n//# sourceURL=webpack:///./src/views/squares-core/components/User/UserInfo.jsx?");

/***/ }),

/***/ "./src/views/squares-core/components/index.js":
/*!****************************************************!*\
  !*** ./src/views/squares-core/components/index.js ***!
  \****************************************************/
/*! exports provided: Button, Field, Header, Icon, Match, TextInput, User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button */ \"./src/views/squares-core/components/Button/Button.jsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Button\", function() { return _Button__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _Field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Field */ \"./src/views/squares-core/components/Field/Field.jsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Field\", function() { return _Field__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ \"./src/views/squares-core/components/Header/Header.jsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Header\", function() { return _Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Icon */ \"./src/views/squares-core/components/Icon/Icon.jsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Icon\", function() { return _Icon__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n/* harmony import */ var _Match__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Match */ \"./src/views/squares-core/components/Match/Match.jsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Match\", function() { return _Match__WEBPACK_IMPORTED_MODULE_4__[\"default\"]; });\n\n/* harmony import */ var _TextInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TextInput */ \"./src/views/squares-core/components/TextInput/TextInput.jsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"TextInput\", function() { return _TextInput__WEBPACK_IMPORTED_MODULE_5__[\"default\"]; });\n\n/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./User */ \"./src/views/squares-core/components/User/UserInfo.jsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"User\", function() { return _User__WEBPACK_IMPORTED_MODULE_6__[\"default\"]; });\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/views/squares-core/components/index.js?");

/***/ }),

/***/ "./src/views/squares-core/styles/index.scss":
/*!**************************************************!*\
  !*** ./src/views/squares-core/styles/index.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/views/squares-core/styles/index.scss?");

/***/ }),

/***/ 0:
/*!***********************************!*\
  !*** multi ./src/server/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/server/index.js */\"./src/server/index.js\");\n\n\n//# sourceURL=webpack:///multi_./src/server/index.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"moment\");\n\n//# sourceURL=webpack:///external_%22moment%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");\n\n//# sourceURL=webpack:///external_%22prop-types%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-helmet\");\n\n//# sourceURL=webpack:///external_%22react-helmet%22?");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-config\");\n\n//# sourceURL=webpack:///external_%22react-router-config%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ })

/******/ });