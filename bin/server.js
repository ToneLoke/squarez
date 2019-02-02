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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GameSetupProvider; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GameSetupContext\", function() { return GameSetupContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GameSetupConsumer\", function() { return GameSetupConsumer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"actions\", function() { return actions; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"]) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); } }; }();\n\n\n// import { helpers } from '.';\n\nvar GameSetupContext = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createContext\"])();\n\nvar initialState = {\n  match: {\n    id: null, home: {}, away: {}, network: null\n  },\n  matches: [],\n  price: 5,\n  players: 25,\n  host: { id: null, alias: null },\n  error: null\n};\n\nvar actions = {\n  SET_MATCH: 'SET_MATCH',\n  SET_PRICE: 'SET_PRICE',\n  SET_HOST: 'SET_HOST',\n  SUBMIT_GAME: 'SUBMIT_GAME'\n};\n\nvar reducer = function reducer(state, action) {\n  switch (action.type) {\n    case 'SET_MATCH':\n      return Object.assign({}, state, { match: Object.assign({}, state.match, action.payload) });\n    case 'SET_PRICE':\n      return Object.assign({}, state, { price: action.payload });\n    case 'SET_HOST':\n      return Object.assign({}, state, { host: Object.assign({}, state.host, action.payload) });\n    case 'SUBMIT_GAME':\n      console.log('SUBMIT_GAME');\n      return Object.assign({}, initialState);\n    default:\n      return state;\n  }\n};\n\n//= ====================== GAME SETUP HOC =======================\nfunction GameSetupProvider(_ref) {\n  var children = _ref.children,\n      matches = _ref.value;\n\n  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useReducer\"])(reducer, Object.assign({}, initialState, { matches: matches })),\n      _useReducer2 = _slicedToArray(_useReducer, 2),\n      state = _useReducer2[0],\n      dispatch = _useReducer2[1];\n\n  var value = { state: state, dispatch: dispatch };\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n    GameSetupContext.Provider,\n    { value: value },\n    children\n  );\n}\n//= ====================== END OF GAME SETUP =======================\n\n//= ====================== NOTE: For components to use =======================\nvar GameSetupConsumer = GameSetupContext.consumer;\n\n\n\n\n//# sourceURL=webpack:///./src/common/GameSetupStore.js?");

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

/***/ "./src/common/getData.js":
/*!*******************************!*\
  !*** ./src/common/getData.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getData; });\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ \"./src/common/helpers.js\");\n\n\n\nvar getAllMatches = _helpers__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getAllMatches,\n    getBoard = _helpers__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getBoard;\n\n\nvar routes = [{\n  //= ====================== \"Props for routes\" =======================\n  loadData: undefined,\n  routes: [{\n    loadData: getAllMatches,\n    path: '/setup',\n    exact: true\n  }, {\n    loadData: getBoard,\n    path: '/board/:id',\n    exact: true\n  }]\n}];\n\n//= ====================== PROMISE ERROR  =======================\nfunction noOp() {\n  console.error('**GET_DATA**');\n}\n\nfunction getData(path) {\n  //= ====================== create promises from all routes??? =======================\n  var matches = Object(react_router_config__WEBPACK_IMPORTED_MODULE_0__[\"matchRoutes\"])(routes, path);\n  return matches.filter(function (m) {\n    return !!m.route.loadData;\n  })\n  //= ====================== grab all  =======================\n  .map(function (m) {\n    return m.route.loadData().catch(noOp);\n  });\n}\n\n//# sourceURL=webpack:///./src/common/getData.js?");

/***/ }),

/***/ "./src/common/helpers.js":
/*!*******************************!*\
  !*** ./src/common/helpers.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\n\n//= ====================== API CALLS =======================\nvar API_URL = 'http://api.sportradar.us/nfl/official/trial/v5/en/games/2018/PST/4/schedule.json?api_key=p3jrhz3b36atpuwr2d593jyq';\n// TODO: GET YEAR FROM TODAYS DATE\n// FIGURE OUT REG OR POST SEASON\n// GET NFL WEEK\nvar getAllMatches = function getAllMatches() {\n  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(API_URL).then(function (res) {\n    return res.data;\n  });\n};\nvar getSingleMatch = function getSingleMatch() {\n  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(API_URL).then(function (res) {\n    return res.data;\n  });\n};\nvar getBoard = function getBoard() {\n  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(API_URL).then(function (res) {\n    return res.data;\n  });\n};\nvar createBoard = function createBoard() {\n  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(API_URL).then(function (res) {\n    return res.data;\n  });\n};\nvar updateBoard = function updateBoard() {\n  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(API_URL).then(function (res) {\n    return res.data;\n  });\n};\n//= ====================== End API =======================\n//= ====================== Heloper Methods =======================\n// NOTE: generates game board 5 x 5\n// TODO: make dynamic\nvar generateSquares = function generateSquares(num) {\n  return function (square) {\n    var data = [];\n    var count = 0;\n    var points = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];\n\n    var iter = function iter(i) {\n      if (i === num) {\n        return data;\n      }if (i <= 5 && i !== 0 || i > 5 && i % 6 === 0) {\n        data.push(square(' ' + points[count] + ' | ' + points[count + 1], i));\n        count === 8 ? count = 0 : count += 2;\n      } else {\n        data.push(square('' + i, i));\n      }\n      return iter(i + 1);\n    };\n\n    return iter(0);\n  };\n};\n//= ====================== End Heloper Methods =======================\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  getAllMatches: getAllMatches, getSingleMatch: getSingleMatch, getBoard: getBoard, generateSquares: generateSquares, createBoard: createBoard, updateBoard: updateBoard\n});\n\n//# sourceURL=webpack:///./src/common/helpers.js?");

/***/ }),

/***/ "./src/common/index.js":
/*!*****************************!*\
  !*** ./src/common/index.js ***!
  \*****************************/
/*! exports provided: helpers, getData, NotFound, SetupProvider, GameProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./src/common/helpers.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"helpers\", function() { return _helpers__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getData */ \"./src/common/getData.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getData\", function() { return _getData__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _NotFound__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NotFound */ \"./src/common/NotFound.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"NotFound\", function() { return _NotFound__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var _GameSetupStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GameSetupStore */ \"./src/common/GameSetupStore.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"SetupProvider\", function() { return _GameSetupStore__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n/* harmony import */ var _LiveGameStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LiveGameStore */ \"./src/common/LiveGameStore.js\");\n/* harmony import */ var _LiveGameStore__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_LiveGameStore__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, \"GameProvider\", function() { return _LiveGameStore__WEBPACK_IMPORTED_MODULE_4___default.a; });\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/common/index.js?");

/***/ }),

/***/ "./src/common/sample.json":
/*!********************************!*\
  !*** ./src/common/sample.json ***!
  \********************************/
/*! exports provided: id, year, type, name, week, _comment, default */
/***/ (function(module) {

eval("module.exports = {\"id\":\"8e45fe2d-fb95-4504-845d-7c815623ccd6\",\"year\":2018,\"type\":\"REG\",\"name\":\"REG\",\"week\":{\"id\":\"37435167-5cf6-4cce-b405-ff0e264ced9c\",\"sequence\":1,\"title\":\"1\",\"games\":[{\"id\":\"0822b924-eadc-4398-bfe6-83cbbf3a2912\",\"status\":\"closed\",\"reference\":\"57570\",\"number\":4,\"scheduled\":\"2018-09-09T17:00:00+00:00\",\"attendance\":58699,\"utc_offset\":-5,\"entry_mode\":\"INGEST\",\"weather\":\"Cloudy Temp: 59 F, Humidity: 91%, Wind: NE 11 mph\",\"sr_id\":\"sr:match:14387832\",\"venue\":{\"id\":\"6ed18563-53e0-46c2-a91d-12d73a16456d\",\"name\":\"Lucas Oil Stadium\",\"city\":\"Indianapolis\",\"state\":\"IN\",\"country\":\"USA\",\"zip\":\"46225\",\"address\":\"500 South Capitol Avenue\",\"capacity\":67000,\"surface\":\"artificial\",\"roof_type\":\"retractable_dome\"},\"home\":{\"id\":\"82cf9565-6eb9-4f01-bdbd-5aa0d472fcd9\",\"name\":\"Indianapolis Colts\",\"alias\":\"IND\",\"game_number\":1,\"sr_id\":\"sr:competitor:4421\"},\"away\":{\"id\":\"ad4ae08f-d808-42d5-a1e6-e9bc4e34d123\",\"name\":\"Cincinnati Bengals\",\"alias\":\"CIN\",\"game_number\":1,\"sr_id\":\"sr:competitor:4416\"},\"broadcast\":{\"network\":\"CBS\"},\"scoring\":{\"home_points\":23,\"away_points\":34,\"periods\":[{\"period_type\":\"quarter\",\"id\":\"0e0fc115-8063-490f-8325-37a3442b4a4f\",\"number\":1,\"sequence\":1,\"home_points\":3,\"away_points\":3},{\"period_type\":\"quarter\",\"id\":\"f94b815c-404f-4fb8-af3c-55b99db6dce8\",\"number\":2,\"sequence\":2,\"home_points\":13,\"away_points\":7},{\"period_type\":\"quarter\",\"id\":\"b07b8e78-aaca-4dee-82b2-0940798c6c00\",\"number\":3,\"sequence\":3,\"home_points\":7,\"away_points\":7},{\"period_type\":\"quarter\",\"id\":\"36ab0074-1238-4c98-be41-16fb984b1c27\",\"number\":4,\"sequence\":4,\"home_points\":0,\"away_points\":17}]}},{},{\"id\":\"63047598-04c4-4b94-9674-94beead0724e\",\"status\":\"closed\",\"reference\":\"57571\",\"number\":5,\"scheduled\":\"2018-09-09T17:00:00+00:00\",\"attendance\":65184,\"utc_offset\":-5,\"entry_mode\":\"INGEST\",\"weather\":\"Scattered Showers Temp: 89 F, Humidity: 63%, Wind: WSW 7 mph\",\"sr_id\":\"sr:match:14387828\",\"venue\":{\"id\":\"50a5c833-1570-4c38-abc7-7914cf87dbde\",\"name\":\"Hard Rock Stadium\",\"city\":\"Miami Gardens\",\"state\":\"FL\",\"country\":\"USA\",\"zip\":\"33056\",\"address\":\"2269 Northwest 199th Street\",\"capacity\":65326,\"surface\":\"turf\",\"roof_type\":\"outdoor\",\"sr_id\":\"sr:venue:20269\"},\"home\":{\"id\":\"4809ecb0-abd3-451d-9c4a-92a90b83ca06\",\"name\":\"Miami Dolphins\",\"alias\":\"MIA\",\"game_number\":1,\"sr_id\":\"sr:competitor:4287\"},\"away\":{\"id\":\"d26a1ca5-722d-4274-8f97-c92e49c96315\",\"name\":\"Tennessee Titans\",\"alias\":\"TEN\",\"game_number\":1,\"sr_id\":\"sr:competitor:367364\"},\"broadcast\":{\"network\":\"FOX\"},\"scoring\":{\"home_points\":27,\"away_points\":20,\"periods\":[{\"period_type\":\"quarter\",\"id\":\"5779ac50-15c6-420d-a988-2e2ab8572336\",\"number\":1,\"sequence\":1,\"home_points\":0,\"away_points\":3},{\"period_type\":\"quarter\",\"id\":\"de38bcb2-326f-4aa3-b1c0-7e89c755579c\",\"number\":2,\"sequence\":2,\"home_points\":7,\"away_points\":0},{\"period_type\":\"quarter\",\"id\":\"5fa3f1d6-214d-42f1-9de3-e03739bcaeb0\",\"number\":3,\"sequence\":3,\"home_points\":3,\"away_points\":0},{\"period_type\":\"quarter\",\"id\":\"1d4a4151-d50f-4010-b29b-2270b8768262\",\"number\":4,\"sequence\":4,\"home_points\":17,\"away_points\":17}]}},{\"id\":\"8a46621a-752e-4e68-9446-7f6686967064\",\"status\":\"closed\",\"reference\":\"57582\",\"number\":16,\"scheduled\":\"2018-09-11T02:20:00+00:00\",\"attendance\":53857,\"utc_offset\":-8,\"entry_mode\":\"INGEST\",\"weather\":\"Clear Temp: 69 F, Humidity: 58%, Wind: WSW 10 mph\",\"sr_id\":\"sr:match:14387862\",\"venue\":{\"id\":\"ba1ad00f-9130-462c-93f9-5612a0015117\",\"name\":\"Oakland Alameda Coliseum\",\"city\":\"Oakland\",\"state\":\"CA\",\"country\":\"USA\",\"zip\":\"94621\",\"address\":\"7000 Coliseum Way\",\"capacity\":53286,\"surface\":\"turf\",\"roof_type\":\"outdoor\",\"sr_id\":\"sr:venue:8095\"},\"home\":{\"id\":\"1c1cec48-6352-4556-b789-35304c1a6ae1\",\"name\":\"Oakland Raiders\",\"alias\":\"OAK\",\"game_number\":1,\"sr_id\":\"sr:competitor:4390\"},\"away\":{\"id\":\"2eff2a03-54d4-46ba-890e-2bc3925548f3\",\"name\":\"Los Angeles Rams\",\"alias\":\"LA\",\"game_number\":1,\"sr_id\":\"sr:competitor:4387\"},\"broadcast\":{\"network\":\"ESPN\",\"satellite\":\"206\",\"internet\":\"WatchESPN\"},\"scoring\":{\"home_points\":13,\"away_points\":33,\"periods\":[{\"period_type\":\"quarter\",\"id\":\"3dc96c12-87db-416c-806c-f530f33113a5\",\"number\":1,\"sequence\":1,\"home_points\":7,\"away_points\":7},{\"period_type\":\"quarter\",\"id\":\"322d026f-89ba-4cc6-b0ff-b28af33bbfcf\",\"number\":2,\"sequence\":2,\"home_points\":6,\"away_points\":3},{\"period_type\":\"quarter\",\"id\":\"fb36b7be-a386-4dc5-b589-f13847debb63\",\"number\":3,\"sequence\":3,\"home_points\":0,\"away_points\":10},{\"period_type\":\"quarter\",\"id\":\"86dadb98-6636-4df0-8b48-19bc3c36644b\",\"number\":4,\"sequence\":4,\"home_points\":0,\"away_points\":13}]}},{\"id\":\"8ac7b300-8f92-4a20-a357-4710fd3be679\",\"status\":\"closed\",\"reference\":\"57577\",\"number\":11,\"scheduled\":\"2018-09-09T20:25:00+00:00\",\"attendance\":61613,\"utc_offset\":-8,\"entry_mode\":\"INGEST\",\"weather\":\"N/A Indoor Temp:  F, Wind:   mph\",\"sr_id\":\"sr:match:14387850\",\"venue\":{\"id\":\"f8e4d2ab-53f9-4e9f-8c4a-9bc278094a84\",\"name\":\"State Farm Stadium\",\"city\":\"Glendale\",\"state\":\"AZ\",\"country\":\"USA\",\"zip\":\"85305\",\"address\":\"One Cardinals Drive\",\"capacity\":63400,\"surface\":\"turf\",\"roof_type\":\"retractable_dome\"},\"home\":{\"id\":\"de760528-1dc0-416a-a978-b510d20692ff\",\"name\":\"Arizona Cardinals\",\"alias\":\"ARI\",\"game_number\":1,\"sr_id\":\"sr:competitor:4412\"},\"away\":{\"id\":\"22052ff7-c065-42ee-bc8f-c4691c50e624\",\"name\":\"Washington Redskins\",\"alias\":\"WAS\",\"game_number\":1,\"sr_id\":\"sr:competitor:4432\"},\"broadcast\":{\"network\":\"FOX\"},\"scoring\":{\"home_points\":6,\"away_points\":24,\"periods\":[{\"period_type\":\"quarter\",\"id\":\"19ceae60-96e2-4ce9-87e8-a3966f051975\",\"number\":1,\"sequence\":1,\"home_points\":0,\"away_points\":0},{\"period_type\":\"quarter\",\"id\":\"4e21ec67-45b7-4022-97e9-6d42339f825d\",\"number\":2,\"sequence\":2,\"home_points\":0,\"away_points\":21},{\"period_type\":\"quarter\",\"id\":\"95d18292-07ab-419c-a871-201442b9cdc3\",\"number\":3,\"sequence\":3,\"home_points\":0,\"away_points\":0},{\"period_type\":\"quarter\",\"id\":\"a8c6fed4-b677-4fca-9d34-ab3406ab52e7\",\"number\":4,\"sequence\":4,\"home_points\":6,\"away_points\":3}]}},{\"id\":\"8e70d260-ec90-447e-8fdd-10572742d742\",\"status\":\"closed\",\"reference\":\"57572\",\"number\":6,\"scheduled\":\"2018-09-09T17:00:00+00:00\",\"attendance\":66673,\"utc_offset\":-6,\"entry_mode\":\"INGEST\",\"weather\":\"N/A (Indoors) Temp:  F, Wind:   mph\",\"sr_id\":\"sr:match:14387824\",\"venue\":{\"id\":\"f5ff00d4-1ed8-4918-bf73-13d66d510f98\",\"name\":\"U.S. Bank Stadium\",\"city\":\"Minneapolis\",\"state\":\"MN\",\"country\":\"USA\",\"zip\":\"55415\",\"address\":\"900 S 5th Street\",\"capacity\":66655,\"surface\":\"artificial\",\"roof_type\":\"dome\",\"sr_id\":\"sr:venue:18423\"},\"home\":{\"id\":\"33405046-04ee-4058-a950-d606f8c30852\",\"name\":\"Minnesota Vikings\",\"alias\":\"MIN\",\"game_number\":1,\"sr_id\":\"sr:competitor:4423\"},\"away\":{\"id\":\"f0e724b0-4cbf-495a-be47-013907608da9\",\"name\":\"San Francisco 49ers\",\"alias\":\"SF\",\"game_number\":1,\"sr_id\":\"sr:competitor:4389\"},\"broadcast\":{\"network\":\"FOX\"},\"scoring\":{\"home_points\":24,\"away_points\":16,\"periods\":[{\"period_type\":\"quarter\",\"id\":\"99146e93-217d-4e5b-8e57-9e555de55f48\",\"number\":1,\"sequence\":1,\"home_points\":3,\"away_points\":0},{\"period_type\":\"quarter\",\"id\":\"6509c674-1191-441b-a1a9-0a851deb5e24\",\"number\":2,\"sequence\":2,\"home_points\":7,\"away_points\":3},{\"period_type\":\"quarter\",\"id\":\"28d6e878-6652-4b42-9e58-81898c6247e7\",\"number\":3,\"sequence\":3,\"home_points\":14,\"away_points\":10},{\"period_type\":\"quarter\",\"id\":\"a5297e42-a06d-477a-b4a6-ce649db3c164\",\"number\":4,\"sequence\":4,\"home_points\":0,\"away_points\":3}]}},{\"id\":\"8f19fa37-ab1a-4624-935e-297d74e20eb8\",\"status\":\"closed\",\"reference\":\"57579\",\"number\":13,\"scheduled\":\"2018-09-09T20:25:00+00:00\",\"attendance\":76761,\"utc_offset\":-7,\"entry_mode\":\"INGEST\",\"weather\":\"Sunny Temp: 84 F, Humidity: 17%, Wind: Northeast 5 mph\",\"sr_id\":\"sr:match:14387844\",\"venue\":{\"id\":\"6589e61d-ef1e-4e30-91b5-9acd2072b8a0\",\"name\":\"Broncos Stadium at Mile High\",\"city\":\"Denver\",\"state\":\"CO\",\"country\":\"USA\",\"zip\":\"80204\",\"address\":\"1701 Mile High Stadium Circle\",\"capacity\":76125,\"surface\":\"turf\",\"roof_type\":\"outdoor\",\"sr_id\":\"sr:venue:30961\"},\"home\":{\"id\":\"ce92bd47-93d5-4fe9-ada4-0fc681e6caa0\",\"name\":\"Denver Broncos\",\"alias\":\"DEN\",\"game_number\":1,\"sr_id\":\"sr:competitor:4418\"},\"away\":{\"id\":\"3d08af9e-c767-4f88-a7dc-b920c6d2b4a8\",\"name\":\"Seattle Seahawks\",\"alias\":\"SEA\",\"game_number\":1,\"sr_id\":\"sr:competitor:4430\"},\"broadcast\":{\"network\":\"FOX\"},\"scoring\":{\"home_points\":27,\"away_points\":24,\"periods\":[{\"period_type\":\"quarter\",\"id\":\"30bfb087-cc85-49d8-a0af-aeb4f25ead5c\",\"number\":1,\"sequence\":1,\"home_points\":7,\"away_points\":7},{\"period_type\":\"quarter\",\"id\":\"56cc5a27-5778-4aac-9588-b703fd2306b0\",\"number\":2,\"sequence\":2,\"home_points\":10,\"away_points\":3},{\"period_type\":\"quarter\",\"id\":\"0450be97-4635-4e27-9f1f-a981bc8298e4\",\"number\":3,\"sequence\":3,\"home_points\":3,\"away_points\":7},{\"period_type\":\"quarter\",\"id\":\"97c2cb0a-907c-47d1-8731-7c0c44e3356d\",\"number\":4,\"sequence\":4,\"home_points\":7,\"away_points\":7}]}},{\"id\":\"9b12fe52-4398-4976-92e8-35055e996afc\",\"status\":\"closed\",\"reference\":\"57575\",\"number\":9,\"scheduled\":\"2018-09-09T17:00:00+00:00\",\"attendance\":77992,\"utc_offset\":-5,\"entry_mode\":\"INGEST\",\"weather\":\"Rain Temp: 59 F, Humidity: 85%, Wind: NE 7 mph\",\"sr_id\":\"sr:match:14387814\",\"venue\":{\"id\":\"5d4c85c7-d84e-4e10-bd6a-8a15ebecca5c\",\"name\":\"MetLife Stadium\",\"city\":\"East Rutherford\",\"state\":\"NJ\",\"country\":\"USA\",\"zip\":\"07073\",\"address\":\"One MetLife Stadium Drive\",\"capacity\":82500,\"surface\":\"artificial\",\"roof_type\":\"outdoor\",\"sr_id\":\"sr:venue:1981\"},\"home\":{\"id\":\"04aa1c9d-66da-489d-b16a-1dee3f2eec4d\",\"name\":\"New York Giants\",\"alias\":\"NYG\",\"game_number\":1,\"sr_id\":\"sr:competitor:4426\"},\"away\":{\"id\":\"f7ddd7fa-0bae-4f90-bc8e-669e4d6cf2de\",\"name\":\"Jacksonville Jaguars\",\"alias\":\"JAC\",\"game_number\":1,\"sr_id\":\"sr:competitor:4386\"},\"broadcast\":{\"network\":\"FOX\"},\"scoring\":{\"home_points\":15,\"away_points\":20,\"periods\":[{\"period_type\":\"quarter\",\"id\":\"47184d56-a6b2-41b1-b6bd-05b1a0a280ca\",\"number\":1,\"sequence\":1,\"home_points\":3,\"away_points\":3},{\"period_type\":\"quarter\",\"id\":\"009070ea-fbab-40da-9fe0-9984bd1ad624\",\"number\":2,\"sequence\":2,\"home_points\":3,\"away_points\":10},{\"period_type\":\"quarter\",\"id\":\"a02896e4-910d-4b7a-9189-897f76a428e8\",\"number\":3,\"sequence\":3,\"home_points\":3,\"away_points\":0},{\"period_type\":\"quarter\",\"id\":\"852f11d7-28a9-4b2b-af01-56bb0c9513fa\",\"number\":4,\"sequence\":4,\"home_points\":6,\"away_points\":7}]}},{\"id\":\"afec5a57-23c7-4900-bdba-aed594d500a5\",\"status\":\"closed\",\"reference\":\"57580\",\"number\":14,\"scheduled\":\"2018-09-10T00:20:00+00:00\",\"attendance\":78282,\"utc_offset\":-6,\"entry_mode\":\"INGEST\",\"weather\":\"Clear Temp: 62 F, Humidity: 65%, Wind: E 10 mph\",\"sr_id\":\"sr:match:14387854\",\"venue\":{\"id\":\"5a60dd3a-302c-41c6-ab0f-dd335c1103c2\",\"name\":\"Lambeau Field\",\"city\":\"Green Bay\",\"state\":\"WI\",\"country\":\"USA\",\"zip\":\"54304\",\"address\":\"1265 Lombardi Avenue\",\"capacity\":81435,\"surface\":\"turf\",\"roof_type\":\"outdoor\",\"sr_id\":\"sr:venue:8183\"},\"home\":{\"id\":\"a20471b4-a8d9-40c7-95ad-90cc30e46932\",\"name\":\"Green Bay Packers\",\"alias\":\"GB\",\"game_number\":1,\"sr_id\":\"sr:competitor:4420\"},\"away\":{\"id\":\"7b112545-38e6-483c-a55c-96cf6ee49cb8\",\"name\":\"Chicago Bears\",\"alias\":\"CHI\",\"game_number\":1,\"sr_id\":\"sr:competitor:4391\"},\"broadcast\":{\"network\":\"NBC\"},\"scoring\":{\"home_points\":24,\"away_points\":23,\"periods\":[{\"period_type\":\"quarter\",\"id\":\"2f4d0f7e-9108-4467-b1d8-8dba890c7445\",\"number\":1,\"sequence\":1,\"home_points\":0,\"away_points\":7},{\"period_type\":\"quarter\",\"id\":\"8297c0fb-53a6-4885-8d9c-3b4a874c39c2\",\"number\":2,\"sequence\":2,\"home_points\":0,\"away_points\":10},{\"period_type\":\"quarter\",\"id\":\"f821d58b-e73d-4fe1-94ae-9ae8140c7213\",\"number\":3,\"sequence\":3,\"home_points\":3,\"away_points\":3},{\"period_type\":\"quarter\",\"id\":\"1e357d2a-3cb4-427e-b9d2-e9b7039020d1\",\"number\":4,\"sequence\":4,\"home_points\":21,\"away_points\":3}]}},{\"id\":\"b8b1fd3a-179f-4e49-ac5b-315265826c1f\",\"status\":\"closed\",\"reference\":\"57581\",\"number\":15,\"scheduled\":\"2018-09-10T23:10:00+00:00\",\"attendance\":61352,\"utc_offset\":-5,\"entry_mode\":\"INGEST\",\"weather\":\"Controlled Climate Temp: 68 F, Humidity: 70%, Wind:   mph\",\"sr_id\":\"sr:match:14387858\",\"venue\":{\"id\":\"6e3bcf22-277d-4c06-b019-62aded51654f\",\"name\":\"Ford Field\",\"city\":\"Detroit\",\"state\":\"MI\",\"country\":\"USA\",\"zip\":\"48226\",\"address\":\"2000 Brush Street\",\"capacity\":65000,\"surface\":\"artificial\",\"roof_type\":\"dome\"},\"home\":{\"id\":\"c5a59daa-53a7-4de0-851f-fb12be893e9e\",\"name\":\"Detroit Lions\",\"alias\":\"DET\",\"game_number\":1,\"sr_id\":\"sr:competitor:4419\"},\"away\":{\"id\":\"5fee86ae-74ab-4bdd-8416-42a9dd9964f3\",\"name\":\"New York Jets\",\"alias\":\"NYJ\",\"game_number\":1,\"sr_id\":\"sr:competitor:4427\"},\"broadcast\":{\"network\":\"ESPN\",\"satellite\":\"206\",\"internet\":\"WatchESPN\"},\"scoring\":{\"home_points\":17,\"away_points\":48,\"periods\":[{\"period_type\":\"quarter\",\"id\":\"f5f687d2-be4f-4b21-b53c-1e89d9e9f3fa\",\"number\":1,\"sequence\":1,\"home_points\":7,\"away_points\":7},{\"period_type\":\"quarter\",\"id\":\"63cfdb7e-4ac5-435d-8f6b-5956841ec541\",\"number\":2,\"sequence\":2,\"home_points\":3,\"away_points\":10},{\"period_type\":\"quarter\",\"id\":\"452d06ae-261c-4ffb-8ea5-49c028806800\",\"number\":3,\"sequence\":3,\"home_points\":7,\"away_points\":31},{\"period_type\":\"quarter\",\"id\":\"0cd476de-c6c3-484a-9fbe-f5ba3b64ef05\",\"number\":4,\"sequence\":4,\"home_points\":0,\"away_points\":0}]}},{\"id\":\"b92cb9c2-c053-4b5a-9861-98460beeaf42\",\"status\":\"closed\",\"reference\":\"57576\",\"number\":10,\"scheduled\":\"2018-09-09T20:05:00+00:00\",\"attendance\":25351,\"utc_offset\":-8,\"entry_mode\":\"INGEST\",\"weather\":\"Sunny Temp: 84 F, Humidity: 52%, Wind: SW 8 mph\",\"sr_id\":\"sr:match:14387840\",\"venue\":{\"id\":\"feebab00-4a3e-4123-8d7c-ed0dbdd96540\",\"name\":\"StubHub Center\",\"city\":\"Carson\",\"state\":\"CA\",\"country\":\"USA\",\"zip\":\"90746\",\"address\":\"18400 Avalon Boulevard\",\"capacity\":27000,\"surface\":\"turf\",\"roof_type\":\"outdoor\",\"sr_id\":\"sr:venue:2292\"},\"home\":{\"id\":\"1f6dcffb-9823-43cd-9ff4-e7a8466749b5\",\"name\":\"Los Angeles Chargers\",\"alias\":\"LAC\",\"game_number\":1,\"sr_id\":\"sr:competitor:4429\"},\"away\":{\"id\":\"6680d28d-d4d2-49f6-aace-5292d3ec02c2\",\"name\":\"Kansas City Chiefs\",\"alias\":\"KC\",\"game_number\":1,\"sr_id\":\"sr:competitor:4422\"},\"broadcast\":{\"network\":\"CBS\"},\"scoring\":{\"home_points\":28,\"away_points\":38,\"periods\":[{\"period_type\":\"quarter\",\"id\":\"bac31861-6fea-4259-ad40-06da80973cd9\",\"number\":1,\"sequence\":1,\"home_points\":6,\"away_points\":14},{\"period_type\":\"quarter\",\"id\":\"8d92a6d1-8237-4b7c-90fa-27284b68d3da\",\"number\":2,\"sequence\":2,\"home_points\":6,\"away_points\":3},{\"period_type\":\"quarter\",\"id\":\"3a6eb3cb-2fce-4a5b-a653-56dc1f9f8067\",\"number\":3,\"sequence\":3,\"home_points\":0,\"away_points\":14},{\"period_type\":\"quarter\",\"id\":\"a2092ef6-0f15-442b-92de-ad9cef5cf6b4\",\"number\":4,\"sequence\":4,\"home_points\":16,\"away_points\":7}]}},{\"id\":\"bb7895ff-a4be-4471-97ed-3ba4c150470b\",\"status\":\"closed\",\"reference\":\"57567\",\"number\":1,\"scheduled\":\"2018-09-07T00:20:00+00:00\",\"attendance\":69696,\"utc_offset\":-5,\"entry_mode\":\"INGEST\",\"weather\":\"Cloudy Temp: 81 F, Humidity: 71%, Wind: NNW 8 mph\",\"sr_id\":\"sr:match:14387810\",\"venue\":{\"id\":\"4fa8c29c-6626-464c-8540-314ed7535e1b\",\"name\":\"Lincoln Financial Field\",\"city\":\"Philadelphia\",\"state\":\"PA\",\"country\":\"USA\",\"zip\":\"19148\",\"address\":\"1020 Pattison Avenue\",\"capacity\":69596,\"surface\":\"turf\",\"roof_type\":\"outdoor\"},\"home\":{\"id\":\"386bdbf9-9eea-4869-bb9a-274b0bc66e80\",\"name\":\"Philadelphia Eagles\",\"alias\":\"PHI\",\"game_number\":1,\"sr_id\":\"sr:competitor:4428\"},\"away\":{\"id\":\"e6aa13a4-0055-48a9-bc41-be28dc106929\",\"name\":\"Atlanta Falcons\",\"alias\":\"ATL\",\"game_number\":1,\"sr_id\":\"sr:competitor:4393\"},\"broadcast\":{\"network\":\"NBC\"},\"scoring\":{\"home_points\":18,\"away_points\":12,\"periods\":[{\"period_type\":\"quarter\",\"id\":\"386c3fd5-4b3f-45b9-bdb7-f20877c9ee5e\",\"number\":1,\"sequence\":1,\"home_points\":0,\"away_points\":3},{\"period_type\":\"quarter\",\"id\":\"6b421bd7-737a-47a2-aa65-b0f5123d0927\",\"number\":2,\"sequence\":2,\"home_points\":3,\"away_points\":3},{\"period_type\":\"quarter\",\"id\":\"a0ecccb1-2aac-4ab0-936b-a93deff379ed\",\"number\":3,\"sequence\":3,\"home_points\":7,\"away_points\":0},{\"period_type\":\"quarter\",\"id\":\"e806296c-946c-43a5-a301-418db2697f4a\",\"number\":4,\"sequence\":4,\"home_points\":8,\"away_points\":6}]}},{\"id\":\"d02693ec-73c7-41bf-a272-f2ebe9df4801\",\"status\":\"closed\",\"reference\":\"57568\",\"number\":2,\"scheduled\":\"2018-09-09T17:00:00+00:00\",\"attendance\":70591,\"utc_offset\":-5,\"entry_mode\":\"INGEST\",\"weather\":\"Rain Temp: 61 F, Humidity: 97%, Wind: ENE 12 mph\",\"sr_id\":\"sr:match:14387812\",\"venue\":{\"id\":\"d54faae0-0314-484f-8604-9d8dd08e1149\",\"name\":\"M&T Bank Stadium\",\"city\":\"Baltimore\",\"state\":\"MD\",\"country\":\"USA\",\"zip\":\"21230\",\"address\":\"1101 Russell Street\",\"capacity\":71008,\"surface\":\"turf\",\"roof_type\":\"outdoor\",\"sr_id\":\"sr:venue:8169\"},\"home\":{\"id\":\"ebd87119-b331-4469-9ea6-d51fe3ce2f1c\",\"name\":\"Baltimore Ravens\",\"alias\":\"BAL\",\"game_number\":1,\"sr_id\":\"sr:competitor:4413\"},\"away\":{\"id\":\"768c92aa-75ff-4a43-bcc0-f2798c2e1724\",\"name\":\"Buffalo Bills\",\"alias\":\"BUF\",\"game_number\":1,\"sr_id\":\"sr:competitor:4376\"},\"broadcast\":{\"network\":\"CBS\"},\"scoring\":{\"home_points\":47,\"away_points\":3,\"periods\":[{\"period_type\":\"quarter\",\"id\":\"cbe1ac4b-da03-4d64-9052-d6632ed3cdb4\",\"number\":1,\"sequence\":1,\"home_points\":14,\"away_points\":0},{\"period_type\":\"quarter\",\"id\":\"19c79519-87ba-4db6-9d3e-85a2ae503b22\",\"number\":2,\"sequence\":2,\"home_points\":12,\"away_points\":0},{\"period_type\":\"quarter\",\"id\":\"9c7712de-c242-4f2d-9b7a-9ec71ab3c642\",\"number\":3,\"sequence\":3,\"home_points\":14,\"away_points\":3},{\"period_type\":\"quarter\",\"id\":\"bc5af65c-1fc7-47ec-a8eb-a2349f170bd2\",\"number\":4,\"sequence\":4,\"home_points\":7,\"away_points\":0}]}},{\"id\":\"d4214f4c-8f54-4edf-81d8-45f8b95e0b65\",\"status\":\"closed\",\"reference\":\"57578\",\"number\":12,\"scheduled\":\"2018-09-09T20:25:00+00:00\",\"attendance\":74532,\"utc_offset\":-5,\"entry_mode\":\"INGEST\",\"weather\":\"Partly Cloudy Temp: 81 F, Humidity: 74%, Wind: East North East 9 mph\",\"sr_id\":\"sr:match:14387848\",\"venue\":{\"id\":\"39be9ed4-3292-49ac-8699-a381de3a4969\",\"name\":\"Bank of America Stadium\",\"city\":\"Charlotte\",\"state\":\"NC\",\"country\":\"USA\",\"zip\":\"28202\",\"address\":\"800 South Mint Street\",\"capacity\":75419,\"surface\":\"turf\",\"roof_type\":\"outdoor\"},\"home\":{\"id\":\"f14bf5cc-9a82-4a38-bc15-d39f75ed5314\",\"name\":\"Carolina Panthers\",\"alias\":\"CAR\",\"game_number\":1,\"sr_id\":\"sr:competitor:4415\"},\"away\":{\"id\":\"e627eec7-bbae-4fa4-8e73-8e1d6bc5c060\",\"name\":\"Dallas Cowboys\",\"alias\":\"DAL\",\"game_number\":1,\"sr_id\":\"sr:competitor:4392\"},\"broadcast\":{\"network\":\"FOX\"},\"scoring\":{\"home_points\":16,\"away_points\":8,\"periods\":[{\"period_type\":\"quarter\",\"id\":\"efdc9f42-c47e-4ada-ae39-ac8c2f3de9e9\",\"number\":1,\"sequence\":1,\"home_points\":0,\"away_points\":0},{\"period_type\":\"quarter\",\"id\":\"f243d81f-c2fe-4d8f-9d59-e0b8cf3d6740\",\"number\":2,\"sequence\":2,\"home_points\":10,\"away_points\":0},{\"period_type\":\"quarter\",\"id\":\"5a6de543-8a64-4126-b74f-2be125e76266\",\"number\":3,\"sequence\":3,\"home_points\":0,\"away_points\":0},{\"period_type\":\"quarter\",\"id\":\"39f58114-4eb3-4350-b81a-9bb0eee163d0\",\"number\":4,\"sequence\":4,\"home_points\":6,\"away_points\":8}]}},{\"id\":\"d8d0ab6b-214a-41ec-be5b-973abf1cfbbe\",\"status\":\"closed\",\"reference\":\"57573\",\"number\":7,\"scheduled\":\"2018-09-09T17:00:00+00:00\",\"attendance\":65878,\"utc_offset\":-5,\"entry_mode\":\"INGEST\",\"weather\":\"Cloudy and Cool Temp: 62 F, Humidity: 61%, Wind: NE 10 mph\",\"sr_id\":\"sr:match:14387820\",\"venue\":{\"id\":\"e43310b1-cb82-4df9-8be5-e9b39637031b\",\"name\":\"Gillette Stadium\",\"city\":\"Foxborough\",\"state\":\"MA\",\"country\":\"USA\",\"zip\":\"02035\",\"address\":\"One Patriot Place\",\"capacity\":66829,\"surface\":\"artificial\",\"roof_type\":\"outdoor\",\"sr_id\":\"sr:venue:2379\"},\"home\":{\"id\":\"97354895-8c77-4fd4-a860-32e62ea7382a\",\"name\":\"New England Patriots\",\"alias\":\"NE\",\"game_number\":1,\"sr_id\":\"sr:competitor:4424\"},\"away\":{\"id\":\"82d2d380-3834-4938-835f-aec541e5ece7\",\"name\":\"Houston Texans\",\"alias\":\"HOU\",\"game_number\":1,\"sr_id\":\"sr:competitor:4324\"},\"broadcast\":{\"network\":\"CBS\"},\"scoring\":{\"home_points\":27,\"away_points\":20,\"periods\":[{\"period_type\":\"quarter\",\"id\":\"379236b5-2ecf-40de-848f-fa15ffd663a7\",\"number\":1,\"sequence\":1,\"home_points\":7,\"away_points\":3},{\"period_type\":\"quarter\",\"id\":\"f8c09336-035d-4a19-a678-2a3460275ffd\",\"number\":2,\"sequence\":2,\"home_points\":14,\"away_points\":3},{\"period_type\":\"quarter\",\"id\":\"03dae004-48f3-421c-b024-f0b9ded8e808\",\"number\":3,\"sequence\":3,\"home_points\":3,\"away_points\":7},{\"period_type\":\"quarter\",\"id\":\"2293d7dc-8d3a-4842-9015-ab0b37577b79\",\"number\":4,\"sequence\":4,\"home_points\":3,\"away_points\":7}]}},{\"id\":\"db9df049-a3a4-46a2-be3b-278066e6145e\",\"status\":\"closed\",\"reference\":\"57569\",\"number\":3,\"scheduled\":\"2018-09-09T17:00:00+00:00\",\"attendance\":67431,\"utc_offset\":-5,\"entry_mode\":\"INGEST\",\"weather\":\"Rain Temp: 58 F, Humidity: 84%, Wind: East 11 mph\",\"sr_id\":\"sr:match:14387834\",\"venue\":{\"id\":\"90c38d91-3774-4f5d-82ca-1c806828219f\",\"name\":\"FirstEnergy Stadium\",\"city\":\"Cleveland\",\"state\":\"OH\",\"country\":\"USA\",\"zip\":\"44114\",\"address\":\"100 Alfred Lerner Way\",\"capacity\":67895,\"surface\":\"turf\",\"roof_type\":\"outdoor\",\"sr_id\":\"sr:venue:8177\"},\"home\":{\"id\":\"d5a2eb42-8065-4174-ab79-0a6fa820e35e\",\"name\":\"Cleveland Browns\",\"alias\":\"CLE\",\"game_number\":1,\"sr_id\":\"sr:competitor:4417\"},\"away\":{\"id\":\"cb2f9f1f-ac67-424e-9e72-1475cb0ed398\",\"name\":\"Pittsburgh Steelers\",\"alias\":\"PIT\",\"game_number\":1,\"sr_id\":\"sr:competitor:4345\"},\"broadcast\":{\"network\":\"CBS\"},\"scoring\":{\"home_points\":21,\"away_points\":21,\"periods\":[{\"period_type\":\"quarter\",\"id\":\"4b367aff-c758-4b4e-977a-9e1a0a06f975\",\"number\":1,\"sequence\":1,\"home_points\":0,\"away_points\":0},{\"period_type\":\"quarter\",\"id\":\"9f63fddc-7cde-41cb-a697-768157079e1d\",\"number\":2,\"sequence\":2,\"home_points\":0,\"away_points\":7},{\"period_type\":\"quarter\",\"id\":\"3539d6a3-89b8-42ff-ba14-712103395ad6\",\"number\":3,\"sequence\":3,\"home_points\":7,\"away_points\":14},{\"period_type\":\"quarter\",\"id\":\"4cf879f3-6e19-4f60-a308-7c04ac135ea3\",\"number\":4,\"sequence\":4,\"home_points\":14,\"away_points\":0},{\"period_type\":\"overtime\",\"id\":\"77af9b15-edeb-4882-83f3-49d51cf65d6f\",\"number\":1,\"sequence\":5,\"home_points\":0,\"away_points\":0}]}}]},\"_comment\":\"Generation started @ 2019-01-30 12:43:37 +0000 ended @ 2019-01-30 12:43:37 +0000\"};\n\n//# sourceURL=webpack:///./src/common/sample.json?");

/***/ }),

/***/ "./src/game/Game.jsx":
/*!***************************!*\
  !*** ./src/game/Game.jsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return App; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _views_board__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/board */ \"./src/views/board/index.js\");\n/* harmony import */ var _views_setup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/setup */ \"./src/views/setup/Setup.jsx\");\n\n\n\n\n\nfunction App() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n    'div',\n    { className: 'App' },\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Switch\"],\n      null,\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"IndexRedirect\"], { to: '/setup' }),\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], { exact: true, path: '/setup', component: _views_setup__WEBPACK_IMPORTED_MODULE_3__[\"default\"] }),\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], { exact: true, path: '/board/:Id', component: _views_board__WEBPACK_IMPORTED_MODULE_2__[\"default\"] })\n    )\n  );\n}\n\n//# sourceURL=webpack:///./src/game/Game.jsx?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _common_sample_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/sample.json */ \"./src/common/sample.json\");\nvar _common_sample_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../common/sample.json */ \"./src/common/sample.json\", 1);\n\n\n\nvar apiRouter = Object(express__WEBPACK_IMPORTED_MODULE_0__[\"Router\"])();\n\napiRouter.route('/matches').get(function (req, res) {\n  res.status(200).json(_common_sample_json__WEBPACK_IMPORTED_MODULE_1__);\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (apiRouter);\n\n//# sourceURL=webpack:///./src/server/routes.js?");

/***/ }),

/***/ "./src/views/board/Board.scss":
/*!************************************!*\
  !*** ./src/views/board/Board.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/views/board/Board.scss?");

/***/ }),

/***/ "./src/views/board/index.js":
/*!**********************************!*\
  !*** ./src/views/board/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common */ \"./src/common/index.js\");\n/* harmony import */ var _Board_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Board.scss */ \"./src/views/board/Board.scss\");\n/* harmony import */ var _Board_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Board_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _squares_core_components_match_Match_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../squares-core/components/match/Match.scss */ \"./src/views/squares-core/components/match/Match.scss\");\n/* harmony import */ var _squares_core_components_match_Match_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_squares_core_components_match_Match_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _squares_core_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../squares-core/components */ \"./src/views/squares-core/components/index.js\");\nvar _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"]) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); } }; }();\n\n\n\n\n\n\n\nvar generateSquares = _common__WEBPACK_IMPORTED_MODULE_1__[\"helpers\"].generateSquares;\n\n\nvar SquareRenderer = generateSquares(36);\n\nfunction lookupStatus(status) {\n  var squareStates = ['empty', 'pending', 'approved', 'cancel'];\n  return squareStates[status];\n}\n\nvar InnerSquare = function InnerSquare(_ref) {\n  var data = _ref.data;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      _useState2 = _slicedToArray(_useState, 2),\n      status = _useState2[0],\n      setStatus = _useState2[1];\n\n  var squareStatus = lookupStatus(status);\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n    'div',\n    {\n      className: 'item ' + squareStatus,\n      'data-status': squareStatus,\n      onClick: function onClick() {\n        return setStatus(status + 1);\n      },\n      role: 'button'\n    },\n    data\n  );\n};\n\nvar Square = function Square(data, boxId) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n    'div',\n    { className: 'cell', key: boxId, id: boxId },\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InnerSquare, { data: data })\n  );\n};\n\nvar board = SquareRenderer(Square);\n\nvar GameBoard = function GameBoard() {\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(board),\n      _useState4 = _slicedToArray(_useState3, 2),\n      squares = _useState4[0],\n      setSquares = _useState4[1];\n\n  // TODO: dynamically create\n\n\n  var game = {\n    scheduled: '',\n    broadcast: '',\n    scoring: '',\n    home: { name: 'Los Angeles Rams' },\n    away: { name: 'New England Patriots' }\n  };\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n    'div',\n    { className: 'board-container' },\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_squares_core_components__WEBPACK_IMPORTED_MODULE_4__[\"Match\"], game),\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      'div',\n      { className: 'board' },\n      squares\n    )\n  );\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameBoard);\n\n//# sourceURL=webpack:///./src/views/board/index.js?");

/***/ }),

/***/ "./src/views/setup/Setup.jsx":
/*!***********************************!*\
  !*** ./src/views/setup/Setup.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _matches__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./matches */ \"./src/views/setup/matches/Matches.jsx\");\n/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings */ \"./src/views/setup/settings/Settings.jsx\");\n/* harmony import */ var _squares_core_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../squares-core/components */ \"./src/views/squares-core/components/index.js\");\n/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common */ \"./src/common/index.js\");\n/* harmony import */ var _Setup_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Setup.scss */ \"./src/views/setup/Setup.scss\");\n/* harmony import */ var _Setup_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Setup_scss__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\n\nvar Setup = function Setup() {\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_common__WEBPACK_IMPORTED_MODULE_4__[\"GameSetupContext\"]),\n      dispatch = _useContext.dispatch;\n\n  var handleSubmit = function handleSubmit() {\n    return dispatch({ type: _common__WEBPACK_IMPORTED_MODULE_4__[\"actions\"].SUBMIT_GAME, payload: null });\n  };\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n    'div',\n    { className: 'setup' },\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      'div',\n      { className: 'container' },\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_matches__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null),\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_settings__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null),\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_squares_core_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null),\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        'div',\n        { onClick: handleSubmit, role: 'button' },\n        'Create SQuares'\n      )\n    )\n  );\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Setup);\n\n//# sourceURL=webpack:///./src/views/setup/Setup.jsx?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _squares_core_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../squares-core/components */ \"./src/views/squares-core/components/index.js\");\n/* harmony import */ var _Matches_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Matches.scss */ \"./src/views/setup/matches/Matches.scss\");\n/* harmony import */ var _Matches_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Matches_scss__WEBPACK_IMPORTED_MODULE_2__);\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"]) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); } }; }();\n\n\n\n\n\nvar Matches = function Matches() {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n      _useState2 = _slicedToArray(_useState, 2),\n      games = _useState2[0],\n      setGames = _useState2[1];\n\n  // const fetchGames = async () => {\n  //   try {\n  //     const {\n  //       week: { games }\n  //     } = await GET_GAMES();\n  //     setGames(games);\n  //   } catch (error) {\n  //     console.error(\"SPORTS API -\", error);\n  //   }\n  // };\n\n  // useEffect(() => {\n  //   fetchGames();\n  // }, []);\n  // Not sure if we need labels. games dont have labels. the original game doesn't either.\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n    'div',\n    { className: 'matches' },\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      'div',\n      { className: 'wrapper' },\n      games && games.map(function (game) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_squares_core_components__WEBPACK_IMPORTED_MODULE_1__[\"Match\"], _extends({ key: game.id }, game));\n      })\n    )\n  );\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Matches);\n\n//# sourceURL=webpack:///./src/views/setup/matches/Matches.jsx?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _squares_core_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../squares-core/components */ \"./src/views/squares-core/components/index.js\");\n/* harmony import */ var _Settings_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Settings.scss */ \"./src/views/setup/settings/Settings.scss\");\n/* harmony import */ var _Settings_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Settings_scss__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar prices = [1, 5, 10, 15, 20, 25];\n\nvar Amount = function Amount(_ref) {\n  var amount = _ref.amount;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n    'div',\n    { key: amount, className: 'settings-price' },\n    amount\n  );\n};\n\nvar Settings = function Settings() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n    'div',\n    { className: 'settings' },\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      _squares_core_components__WEBPACK_IMPORTED_MODULE_1__[\"Field\"],\n      { label: 'Bounty Amount' },\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        'div',\n        { className: 'settings-wrapper' },\n        prices.map(function (a) {\n          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Amount, { amount: a });\n        })\n      )\n    ),\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      _squares_core_components__WEBPACK_IMPORTED_MODULE_1__[\"Field\"],\n      { label: 'Party Size' },\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_squares_core_components__WEBPACK_IMPORTED_MODULE_1__[\"TextInput\"], { type: 'number', placeholder: '25 squares', disabled: true })\n    ),\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      _squares_core_components__WEBPACK_IMPORTED_MODULE_1__[\"Field\"],\n      { label: 'Expiration Date' },\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_squares_core_components__WEBPACK_IMPORTED_MODULE_1__[\"TextInput\"], { type: 'dattexte', placeholder: '1 day before', disabled: true })\n    )\n  );\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Settings);\n\n//# sourceURL=webpack:///./src/views/setup/settings/Settings.jsx?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Button_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button.scss */ \"./src/views/squares-core/components/Button/Button.scss\");\n/* harmony import */ var _Button_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Button_scss__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (_ref) {\n  var children = _ref.children;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n    'div',\n    { className: 'btn' },\n    children\n  );\n});\n\n//# sourceURL=webpack:///./src/views/squares-core/components/Button/Button.jsx?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Header */ \"./src/views/squares-core/components/Header/Header.jsx\");\n/* harmony import */ var _Field_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Field.scss */ \"./src/views/squares-core/components/Field/Field.scss\");\n/* harmony import */ var _Field_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Field_scss__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar Field = function Field(_ref) {\n  var children = _ref.children,\n      type = _ref.type,\n      label = _ref.label;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n    'div',\n    { className: 'Field ' + type },\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], { name: label }),\n    children\n  );\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Field);\n\n//# sourceURL=webpack:///./src/views/squares-core/components/Field/Field.jsx?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ \"moment\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Match_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Match.scss */ \"./src/views/squares-core/components/Match/Match.scss\");\n/* harmony import */ var _Match_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Match_scss__WEBPACK_IMPORTED_MODULE_2__);\n\n\n// import PatriotsLogo from '../../../../../..fassets/patriots.svg';\n// import RamsLogo from '../../../../../assets/rams.svg';\n\n\nvar Team = function Team(_ref) {\n  var name = _ref.name;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n    'div',\n    { className: 'team-name' },\n    name\n  );\n};\n\nvar Match = function Match(_ref2) {\n  var scheduled = _ref2.scheduled,\n      broadcast = _ref2.broadcast,\n      scoring = _ref2.scoring,\n      home = _ref2.home,\n      away = _ref2.away;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n    'div',\n    { className: 'match' },\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      'div',\n      { className: 'team-away' },\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Team, away)\n    ),\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      'span',\n      { className: 'info' },\n      '@'\n    ),\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      'div',\n      { className: 'team-home' },\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Team, home)\n    ),\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      'div',\n      { className: 'info' },\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        'span',\n        null,\n        moment__WEBPACK_IMPORTED_MODULE_1___default()(scheduled).format('MMMM Do, h:mm a')\n      ),\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        'span',\n        null,\n        broadcast.network\n      )\n    )\n  );\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Match);\n\n//# sourceURL=webpack:///./src/views/squares-core/components/Match/Match.jsx?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _TextInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../TextInput */ \"./src/views/squares-core/components/TextInput/TextInput.jsx\");\n/* harmony import */ var _Field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Field */ \"./src/views/squares-core/components/Field/Field.jsx\");\n\n\n\n\nvar User = function User(_ref) {\n  var type = _ref.type;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n    'div',\n    { className: 'user' },\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      _Field__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n      { label: 'Payout Id' },\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TextInput__WEBPACK_IMPORTED_MODULE_1__[\"default\"], { type: 'text', placeholder: '@toneloke', disabled: true })\n    ),\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      _Field__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n      { label: 'Alias' },\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TextInput__WEBPACK_IMPORTED_MODULE_1__[\"default\"], { type: 'text', placeholder: 'square display', disabled: true })\n    )\n  );\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (User);\n\n//# sourceURL=webpack:///./src/views/squares-core/components/User/UserInfo.jsx?");

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

/***/ "./src/views/squares-core/components/match/Match.scss":
/*!************************************************************!*\
  !*** ./src/views/squares-core/components/match/Match.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/views/squares-core/components/match/Match.scss?");

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