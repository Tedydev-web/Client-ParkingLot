module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"pages/index": 0
/******/ 	};
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../" + ({}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_actions_place__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/actions/place */ "./redux/actions/place.js");
/* harmony import */ var _redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/actions/boxVisble */ "./redux/actions/boxVisble.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }






const App = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../components/App */ "./components/App.jsx")).then(mod => mod.default), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ../components/App */ "./components/App.jsx")],
    modules: ["../components/App"]
  }
});
class Home extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  static async getInitialProps({
    req,
    query,
    params
  }) {
    return {
      query
    };
  }
  constructor(props) {
    super(props);
    _defineProperty(this, "updateWindowWidth", () => {
      this.setState({
        windowWidth: window.innerWidth
      });
    });
    this.state = _objectSpread(_objectSpread({}, props.query), {}, {
      windowWidth: 800
    });
  }
  componentDidMount() {
    var _URLSearchParams$get;
    window.addEventListener('resize', this.updateWindowWidth);
    this.setState({
      windowWidth: window.innerWidth
    });
    this.updateWindowWidth();
    const pid = new URLSearchParams(window.location.search).get("pid");
    const location = (_URLSearchParams$get = new URLSearchParams(window.location.search).get("location")) === null || _URLSearchParams$get === void 0 ? void 0 : _URLSearchParams$get.split(",");
    const pid_around = new URLSearchParams(window.location.search).get("pid_around");
    const is_iframe = new URLSearchParams(window.location.search).get("iframe");
    if (is_iframe) {
      if (location) {
        const latLng = {
          latitude: Number(location[0]),
          longitude: Number(location[1])
        };
        this.props.dispatch(Object(_redux_actions_place__WEBPACK_IMPORTED_MODULE_3__["getDetailByLatLngAction"])(latLng));
        this.props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_4__["setBoxVisibleAction"])('iframe'));
      } else {
        this.props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_4__["setBoxVisibleAction"])('iframe'));
      }
      return;
    } else {
      if (pid) {
        this.props.dispatch(Object(_redux_actions_place__WEBPACK_IMPORTED_MODULE_3__["getDetailByIdAction"])(pid));
        this.props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_4__["setBoxVisibleAction"])('info'));
        return;
      } else if (pid_around) {
        this.props.dispatch(Object(_redux_actions_place__WEBPACK_IMPORTED_MODULE_3__["getDetailAroundPlace"])(pid_around));
        this.props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_4__["setBoxVisibleAction"])('info'));
        return;
      } else if (location) {
        const latLng = {
          latitude: Number(location[0]),
          longitude: Number(location[1])
        };
        this.props.dispatch(Object(_redux_actions_place__WEBPACK_IMPORTED_MODULE_3__["getDetailByLatLngAction"])(latLng));
        this.props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_4__["setBoxVisibleAction"])('info'));
        return;
      }
    }
  }
  componentDidUpdate(prevProps) {
    if (prevProps.boxVisible !== "search" && this.props.boxVisible === "search") {
      next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push({
        pathname: `/`,
        query: null
      });
    }
  }
  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(App, null));
  }
}
const mapStateToProps = state => {
  return {
    boxVisible: state.boxVisibleReducer.box_visible
  };
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(Home));

/***/ }),

/***/ "./redux/actions/boxVisble.js":
/*!************************************!*\
  !*** ./redux/actions/boxVisble.js ***!
  \************************************/
/*! exports provided: setBoxVisibleAction, setRedMarkerAction, setCollapsedInfoBoxAction, setPopupRightClick */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setBoxVisibleAction", function() { return setBoxVisibleAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setRedMarkerAction", function() { return setRedMarkerAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCollapsedInfoBoxAction", function() { return setCollapsedInfoBoxAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPopupRightClick", function() { return setPopupRightClick; });
/* harmony import */ var _consts_boxVisible__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../consts/boxVisible */ "./redux/consts/boxVisible.js");

const setBoxVisibleAction = type_visible => {
  return {
    type: _consts_boxVisible__WEBPACK_IMPORTED_MODULE_0__["SHOW_VISBLE_BOX"],
    type_visible
  };
};
const setRedMarkerAction = (visible, location) => {
  return {
    type: _consts_boxVisible__WEBPACK_IMPORTED_MODULE_0__["SET_RED_MARKER"],
    visible,
    location
  };
};
const setCollapsedInfoBoxAction = collapsed => {
  return {
    type: _consts_boxVisible__WEBPACK_IMPORTED_MODULE_0__["SET_COLLAPSED_INFO_BOX"],
    collapsed
  };
};
const setPopupRightClick = (visible, location, type_popup) => {
  return {
    type: _consts_boxVisible__WEBPACK_IMPORTED_MODULE_0__["SET_POPUP_RIGHT_CLICK"],
    visible,
    location,
    type_popup
  };
};

/***/ }),

/***/ "./redux/actions/place.js":
/*!********************************!*\
  !*** ./redux/actions/place.js ***!
  \********************************/
/*! exports provided: getDetailByIdAction, getDetailByLatLngAction, getDetailAroundPlace, setMapViewportAction, setCenterLatLngAction, setMyLocationAction, resetLocationAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDetailByIdAction", function() { return getDetailByIdAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDetailByLatLngAction", function() { return getDetailByLatLngAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDetailAroundPlace", function() { return getDetailAroundPlace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMapViewportAction", function() { return setMapViewportAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCenterLatLngAction", function() { return setCenterLatLngAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMyLocationAction", function() { return setMyLocationAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetLocationAction", function() { return resetLocationAction; });
/* harmony import */ var _consts_place__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../consts/place */ "./redux/consts/place.js");

const getDetailByIdAction = pid => {
  return {
    type: _consts_place__WEBPACK_IMPORTED_MODULE_0__["GET_DETAIL_BY_ID_REQUEST"],
    pid
  };
};
const getDetailByLatLngAction = latLng => {
  return {
    type: _consts_place__WEBPACK_IMPORTED_MODULE_0__["GET_DETAIL_BY_LATLNG_REQUEST"],
    latLng
  };
};
const getDetailAroundPlace = id => {
  return {
    type: _consts_place__WEBPACK_IMPORTED_MODULE_0__["GET_DETAIL_AROUND_PLACE_REQUEST"],
    id
  };
};
const setMapViewportAction = viewport => {
  return {
    type: _consts_place__WEBPACK_IMPORTED_MODULE_0__["SET_MAP_VIEWPORT_REQUEST"],
    viewport
  };
};
const setCenterLatLngAction = latLng => {
  return {
    type: _consts_place__WEBPACK_IMPORTED_MODULE_0__["SET_CENTER_LATLNG_REQUEST"],
    latLng
  };
};
const setMyLocationAction = latLng => {
  return {
    type: _consts_place__WEBPACK_IMPORTED_MODULE_0__["SET_MY_LOCATION"],
    latLng
  };
};
const resetLocationAction = () => {
  return {
    type: _consts_place__WEBPACK_IMPORTED_MODULE_0__["RESET_LOCATION"]
  };
};

/***/ }),

/***/ "./redux/consts/boxVisible.js":
/*!************************************!*\
  !*** ./redux/consts/boxVisible.js ***!
  \************************************/
/*! exports provided: SHOW_VISBLE_BOX, SET_RED_MARKER, SET_COLLAPSED_INFO_BOX, SET_POPUP_RIGHT_CLICK */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOW_VISBLE_BOX", function() { return SHOW_VISBLE_BOX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_RED_MARKER", function() { return SET_RED_MARKER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_COLLAPSED_INFO_BOX", function() { return SET_COLLAPSED_INFO_BOX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_POPUP_RIGHT_CLICK", function() { return SET_POPUP_RIGHT_CLICK; });
const SHOW_VISBLE_BOX = "BOX:SHOW_VISIBLE_BOX",
  SET_RED_MARKER = "MARKER:SET_RED_MARKER",
  SET_COLLAPSED_INFO_BOX = "INFO_BOX:SET_COLLAPSED",
  SET_POPUP_RIGHT_CLICK = "POPUP:SET_POPUP";

/***/ }),

/***/ "./redux/consts/place.js":
/*!*******************************!*\
  !*** ./redux/consts/place.js ***!
  \*******************************/
/*! exports provided: GET_DETAIL_BY_ID_REQUEST, GET_DETAIL_BY_ID_SUCCESS, SET_MY_LOCATION, GET_DETAIL_BY_LATLNG_REQUEST, GET_DETAIL_BY_LATLNG_SUCCESS, RESET_LOCATION, GET_DETAIL_AROUND_PLACE_REQUEST, GET_DETAIL_AROUND_PLACE_SUCCESS, SET_MAP_VIEWPORT_REQUEST, SET_CENTER_LATLNG_REQUEST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_DETAIL_BY_ID_REQUEST", function() { return GET_DETAIL_BY_ID_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_DETAIL_BY_ID_SUCCESS", function() { return GET_DETAIL_BY_ID_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_MY_LOCATION", function() { return SET_MY_LOCATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_DETAIL_BY_LATLNG_REQUEST", function() { return GET_DETAIL_BY_LATLNG_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_DETAIL_BY_LATLNG_SUCCESS", function() { return GET_DETAIL_BY_LATLNG_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESET_LOCATION", function() { return RESET_LOCATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_DETAIL_AROUND_PLACE_REQUEST", function() { return GET_DETAIL_AROUND_PLACE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_DETAIL_AROUND_PLACE_SUCCESS", function() { return GET_DETAIL_AROUND_PLACE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_MAP_VIEWPORT_REQUEST", function() { return SET_MAP_VIEWPORT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_CENTER_LATLNG_REQUEST", function() { return SET_CENTER_LATLNG_REQUEST; });
const GET_DETAIL_BY_ID_REQUEST = "LOCATION:GET_DETAIL_ID_REQUEST",
  GET_DETAIL_BY_ID_SUCCESS = "LOCATION:GET_DETAIL_ID_SUCCESS",
  SET_MY_LOCATION = "LOCATION:SET_MY_LOCATION",
  GET_DETAIL_BY_LATLNG_REQUEST = "LOCATION:GET_DETAIL_LATLNG_REQUEST",
  GET_DETAIL_BY_LATLNG_SUCCESS = "LOCATION:GET_DETAIL_LATLNG_SUCCESS",
  RESET_LOCATION = "LOCATION:RESET",
  GET_DETAIL_AROUND_PLACE_REQUEST = "LOCATION:GET_DETAIL_AROUND_PLACE_REQUEST",
  GET_DETAIL_AROUND_PLACE_SUCCESS = "LOCATION:GET_DETAIL_AROUND_PLACE_SUCCESS",
  SET_MAP_VIEWPORT_REQUEST = "MAP:SET_VIEWPORT_REQUEST",
  SET_CENTER_LATLNG_REQUEST = "MAP:SET_CENTER_LATLNG_REQUEST";

/***/ }),

/***/ "@ant-design/icons":
/*!************************************!*\
  !*** external "@ant-design/icons" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ "antd/lib/avatar":
/*!**********************************!*\
  !*** external "antd/lib/avatar" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/avatar");

/***/ }),

/***/ "antd/lib/card":
/*!********************************!*\
  !*** external "antd/lib/card" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/card");

/***/ }),

/***/ "antd/lib/col":
/*!*******************************!*\
  !*** external "antd/lib/col" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/col");

/***/ }),

/***/ "antd/lib/divider":
/*!***********************************!*\
  !*** external "antd/lib/divider" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/divider");

/***/ }),

/***/ "antd/lib/input":
/*!*********************************!*\
  !*** external "antd/lib/input" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/input");

/***/ }),

/***/ "antd/lib/layout":
/*!**********************************!*\
  !*** external "antd/lib/layout" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/layout");

/***/ }),

/***/ "antd/lib/list":
/*!********************************!*\
  !*** external "antd/lib/list" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/list");

/***/ }),

/***/ "antd/lib/message":
/*!***********************************!*\
  !*** external "antd/lib/message" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/message");

/***/ }),

/***/ "antd/lib/row":
/*!*******************************!*\
  !*** external "antd/lib/row" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/row");

/***/ }),

/***/ "antd/lib/tooltip":
/*!***********************************!*\
  !*** external "antd/lib/tooltip" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/tooltip");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "fast-deep-equal/es6/react":
/*!********************************************!*\
  !*** external "fast-deep-equal/es6/react" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fast-deep-equal/es6/react");

/***/ }),

/***/ "i18next":
/*!**************************!*\
  !*** external "i18next" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("i18next");

/***/ }),

/***/ "lodash/debounce":
/*!**********************************!*\
  !*** external "lodash/debounce" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/debounce");

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-copy-to-clipboard":
/*!******************************************!*\
  !*** external "react-copy-to-clipboard" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-copy-to-clipboard");

/***/ }),

/***/ "react-device-detect":
/*!**************************************!*\
  !*** external "react-device-detect" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-device-detect");

/***/ }),

/***/ "react-div-100vh":
/*!**********************************!*\
  !*** external "react-div-100vh" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-div-100vh");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-i18next":
/*!********************************!*\
  !*** external "react-i18next" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-i18next");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-sortable-hoc":
/*!*************************************!*\
  !*** external "react-sortable-hoc" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-sortable-hoc");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvYWN0aW9ucy9ib3hWaXNibGUuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvYWN0aW9ucy9wbGFjZS5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9jb25zdHMvYm94VmlzaWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9jb25zdHMvcGxhY2UuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFudC1kZXNpZ24vaWNvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkL2xpYi9hdmF0YXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkL2xpYi9jYXJkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZC9saWIvY29sXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZC9saWIvZGl2aWRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFudGQvbGliL2lucHV0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZC9saWIvbGF5b3V0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZC9saWIvbGlzdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFudGQvbGliL21lc3NhZ2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkL2xpYi9yb3dcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkL2xpYi90b29sdGlwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmYXN0LWRlZXAtZXF1YWwvZXM2L3JlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaTE4bmV4dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvZGFzaC9kZWJvdW5jZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZHluYW1pY1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1jb3B5LXRvLWNsaXBib2FyZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRldmljZS1kZXRlY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1kaXYtMTAwdmhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1kb20vc2VydmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaTE4bmV4dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc29ydGFibGUtaG9jXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYS9lZmZlY3RzXCIiXSwibmFtZXMiOlsiQXBwIiwiZHluYW1pYyIsInRoZW4iLCJtb2QiLCJkZWZhdWx0Iiwic3NyIiwibG9hZGFibGVHZW5lcmF0ZWQiLCJ3ZWJwYWNrIiwicmVxdWlyZSIsIm1vZHVsZXMiLCJIb21lIiwiUmVhY3QiLCJDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJyZXEiLCJxdWVyeSIsInBhcmFtcyIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJfZGVmaW5lUHJvcGVydHkiLCJzZXRTdGF0ZSIsIndpbmRvd1dpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsInN0YXRlIiwiX29iamVjdFNwcmVhZCIsImNvbXBvbmVudERpZE1vdW50IiwiX1VSTFNlYXJjaFBhcmFtcyRnZXQiLCJhZGRFdmVudExpc3RlbmVyIiwidXBkYXRlV2luZG93V2lkdGgiLCJwaWQiLCJVUkxTZWFyY2hQYXJhbXMiLCJsb2NhdGlvbiIsInNlYXJjaCIsImdldCIsInNwbGl0IiwicGlkX2Fyb3VuZCIsImlzX2lmcmFtZSIsImxhdExuZyIsImxhdGl0dWRlIiwiTnVtYmVyIiwibG9uZ2l0dWRlIiwiZGlzcGF0Y2giLCJnZXREZXRhaWxCeUxhdExuZ0FjdGlvbiIsInNldEJveFZpc2libGVBY3Rpb24iLCJnZXREZXRhaWxCeUlkQWN0aW9uIiwiZ2V0RGV0YWlsQXJvdW5kUGxhY2UiLCJjb21wb25lbnREaWRVcGRhdGUiLCJwcmV2UHJvcHMiLCJib3hWaXNpYmxlIiwiUm91dGVyIiwicHVzaCIsInBhdGhuYW1lIiwicmVuZGVyIiwiX19qc3giLCJGcmFnbWVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsImJveFZpc2libGVSZWR1Y2VyIiwiYm94X3Zpc2libGUiLCJjb25uZWN0IiwidHlwZV92aXNpYmxlIiwidHlwZSIsImJveCIsInNldFJlZE1hcmtlckFjdGlvbiIsInZpc2libGUiLCJzZXRDb2xsYXBzZWRJbmZvQm94QWN0aW9uIiwiY29sbGFwc2VkIiwic2V0UG9wdXBSaWdodENsaWNrIiwidHlwZV9wb3B1cCIsInBsYWNlIiwiaWQiLCJzZXRNYXBWaWV3cG9ydEFjdGlvbiIsInZpZXdwb3J0Iiwic2V0Q2VudGVyTGF0TG5nQWN0aW9uIiwic2V0TXlMb2NhdGlvbkFjdGlvbiIsInJlc2V0TG9jYXRpb25BY3Rpb24iLCJSRVNFVF9MT0NBVElPTiIsIlNIT1dfVklTQkxFX0JPWCIsIlNFVF9SRURfTUFSS0VSIiwiU0VUX0NPTExBUFNFRF9JTkZPX0JPWCIsIlNFVF9QT1BVUF9SSUdIVF9DTElDSyIsIkdFVF9ERVRBSUxfQllfSURfUkVRVUVTVCIsIkdFVF9ERVRBSUxfQllfSURfU1VDQ0VTUyIsIlNFVF9NWV9MT0NBVElPTiIsIkdFVF9ERVRBSUxfQllfTEFUTE5HX1JFUVVFU1QiLCJHRVRfREVUQUlMX0JZX0xBVExOR19TVUNDRVNTIiwiR0VUX0RFVEFJTF9BUk9VTkRfUExBQ0VfUkVRVUVTVCIsIkdFVF9ERVRBSUxfQVJPVU5EX1BMQUNFX1NVQ0NFU1MiLCJTRVRfTUFQX1ZJRVdQT1JUX1JFUVVFU1QiLCJTRVRfQ0VOVEVSX0xBVExOR19SRVFVRVNUIl0sIm1hcHBpbmdzIjoiOztRQUFB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Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSxnRDs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSwrQyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGNodW5rc1xuIFx0Ly8gXCIwXCIgbWVhbnMgXCJhbHJlYWR5IGxvYWRlZFwiXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcInBhZ2VzL2luZGV4XCI6IDBcbiBcdH07XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG4gXHQvLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4gXHQvLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3NcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZSA9IGZ1bmN0aW9uIHJlcXVpcmVFbnN1cmUoY2h1bmtJZCkge1xuIFx0XHR2YXIgcHJvbWlzZXMgPSBbXTtcblxuXG4gXHRcdC8vIHJlcXVpcmUoKSBjaHVuayBsb2FkaW5nIGZvciBqYXZhc2NyaXB0XG5cbiBcdFx0Ly8gXCIwXCIgaXMgdGhlIHNpZ25hbCBmb3IgXCJhbHJlYWR5IGxvYWRlZFwiXG4gXHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSAhPT0gMCkge1xuIFx0XHRcdHZhciBjaHVuayA9IHJlcXVpcmUoXCIuLi9cIiArICh7fVtjaHVua0lkXXx8Y2h1bmtJZCkgKyBcIi5qc1wiKTtcbiBcdFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBjaHVuay5tb2R1bGVzLCBjaHVua0lkcyA9IGNodW5rLmlkcztcbiBcdFx0XHRmb3IodmFyIG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKVxuIFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRzW2ldXSA9IDA7XG4gXHRcdH1cbiBcdFx0cmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbiBcdH07XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gdW5jYXVnaHQgZXJyb3IgaGFuZGxlciBmb3Igd2VicGFjayBydW50aW1lXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm9lID0gZnVuY3Rpb24oZXJyKSB7XG4gXHRcdHByb2Nlc3MubmV4dFRpY2soZnVuY3Rpb24oKSB7XG4gXHRcdFx0dGhyb3cgZXJyOyAvLyBjYXRjaCB0aGlzIGVycm9yIGJ5IHVzaW5nIGltcG9ydCgpLmNhdGNoKClcbiBcdFx0fSk7XG4gXHR9O1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJ1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBnZXREZXRhaWxCeUxhdExuZ0FjdGlvbiwgZ2V0RGV0YWlsQnlJZEFjdGlvbiwgZ2V0RGV0YWlsQXJvdW5kUGxhY2UgfSBmcm9tICcuLi9yZWR1eC9hY3Rpb25zL3BsYWNlJztcclxuaW1wb3J0IHsgc2V0Qm94VmlzaWJsZUFjdGlvbiB9IGZyb20gXCIuLi9yZWR1eC9hY3Rpb25zL2JveFZpc2JsZVwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmNvbnN0IEFwcCA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCcuLi9jb21wb25lbnRzL0FwcCcpLnRoZW4obW9kID0+IG1vZC5kZWZhdWx0KSwge1xyXG4gIHNzcjogZmFsc2VcclxufSk7XHJcblxyXG5jbGFzcyBIb21lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IHJlcSwgcXVlcnksIHBhcmFtcyB9KSB7XHJcbiAgICByZXR1cm4geyBxdWVyeSB9XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgLi4ucHJvcHMucXVlcnksXHJcbiAgICAgIHdpbmRvd1dpZHRoOiA4MDAsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlV2luZG93V2lkdGggPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgd2luZG93V2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMudXBkYXRlV2luZG93V2lkdGgpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHdpbmRvd1dpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCB9KTtcclxuICAgIHRoaXMudXBkYXRlV2luZG93V2lkdGgoKTtcclxuICAgIGNvbnN0IHBpZCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCkuZ2V0KFwicGlkXCIpO1xyXG4gICAgY29uc3QgbG9jYXRpb24gPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpLmdldChcImxvY2F0aW9uXCIpPy5zcGxpdChcIixcIik7XHJcbiAgICBjb25zdCBwaWRfYXJvdW5kID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKS5nZXQoXCJwaWRfYXJvdW5kXCIpO1xyXG4gICAgY29uc3QgaXNfaWZyYW1lID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKS5nZXQoXCJpZnJhbWVcIik7XHJcbiAgICBpZiAoaXNfaWZyYW1lKSB7XHJcbiAgICAgIGlmIChsb2NhdGlvbikge1xyXG4gICAgICAgIGNvbnN0IGxhdExuZyA9IHtcclxuICAgICAgICAgIGxhdGl0dWRlOiBOdW1iZXIobG9jYXRpb25bMF0pLFxyXG4gICAgICAgICAgbG9uZ2l0dWRlOiBOdW1iZXIobG9jYXRpb25bMV0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goZ2V0RGV0YWlsQnlMYXRMbmdBY3Rpb24obGF0TG5nKSk7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChzZXRCb3hWaXNpYmxlQWN0aW9uKCdpZnJhbWUnKSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChzZXRCb3hWaXNpYmxlQWN0aW9uKCdpZnJhbWUnKSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKHBpZCkge1xyXG4gICAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goZ2V0RGV0YWlsQnlJZEFjdGlvbihwaWQpKTtcclxuICAgICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHNldEJveFZpc2libGVBY3Rpb24oJ2luZm8nKSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKHBpZF9hcm91bmQpIHtcclxuICAgICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGdldERldGFpbEFyb3VuZFBsYWNlKHBpZF9hcm91bmQpKTtcclxuICAgICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHNldEJveFZpc2libGVBY3Rpb24oJ2luZm8nKSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9IGVsc2UgaWYgKGxvY2F0aW9uKSB7XHJcbiAgICAgICAgY29uc3QgbGF0TG5nID0ge1xyXG4gICAgICAgICAgbGF0aXR1ZGU6IE51bWJlcihsb2NhdGlvblswXSksXHJcbiAgICAgICAgICBsb25naXR1ZGU6IE51bWJlcihsb2NhdGlvblsxXSlcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChnZXREZXRhaWxCeUxhdExuZ0FjdGlvbihsYXRMbmcpKTtcclxuICAgICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHNldEJveFZpc2libGVBY3Rpb24oJ2luZm8nKSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XHJcbiAgICBpZiAocHJldlByb3BzLmJveFZpc2libGUgIT09IFwic2VhcmNoXCIgJiYgdGhpcy5wcm9wcy5ib3hWaXNpYmxlID09PSBcInNlYXJjaFwiKSB7XHJcbiAgICAgIFJvdXRlci5wdXNoKHtcclxuICAgICAgICBwYXRobmFtZTogYC9gLFxyXG4gICAgICAgIHF1ZXJ5OiBudWxsXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICB7Lyoge2lzTW9iaWxlID8gPEFwcE1vYmlsZSAvPiA6IDxBcHAgd2luZG93V2lkdGg9e3RoaXMuc3RhdGUud2luZG93V2lkdGh9IC8+fSAqL31cclxuICAgICAgPEFwcCAvPlxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgYm94VmlzaWJsZTogc3RhdGUuYm94VmlzaWJsZVJlZHVjZXIuYm94X3Zpc2libGUsXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoSG9tZSlcclxuIiwiaW1wb3J0ICogYXMgYm94IGZyb20gJy4uL2NvbnN0cy9ib3hWaXNpYmxlJ1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldEJveFZpc2libGVBY3Rpb24gPSAodHlwZV92aXNpYmxlKSA9PiB7XHJcbiAgcmV0dXJuIHsgdHlwZTogYm94LlNIT1dfVklTQkxFX0JPWCwgdHlwZV92aXNpYmxlIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRSZWRNYXJrZXJBY3Rpb24gPSAodmlzaWJsZSwgbG9jYXRpb24pID0+IHtcclxuICByZXR1cm4geyB0eXBlOiBib3guU0VUX1JFRF9NQVJLRVIsIHZpc2libGUsIGxvY2F0aW9uIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNldENvbGxhcHNlZEluZm9Cb3hBY3Rpb24gPSAoY29sbGFwc2VkKSA9PiB7XHJcbiAgcmV0dXJuIHsgdHlwZTogYm94LlNFVF9DT0xMQVBTRURfSU5GT19CT1gsIGNvbGxhcHNlZCB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzZXRQb3B1cFJpZ2h0Q2xpY2sgPSAodmlzaWJsZSwgbG9jYXRpb24sIHR5cGVfcG9wdXApID0+IHtcclxuICByZXR1cm4geyB0eXBlOiBib3guU0VUX1BPUFVQX1JJR0hUX0NMSUNLLCB2aXNpYmxlLCBsb2NhdGlvbiwgdHlwZV9wb3B1cCB9XHJcbn0iLCJpbXBvcnQgKiBhcyBwbGFjZSBmcm9tICcuLi9jb25zdHMvcGxhY2UnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldERldGFpbEJ5SWRBY3Rpb24gPSAocGlkKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IHBsYWNlLkdFVF9ERVRBSUxfQllfSURfUkVRVUVTVCxcclxuICAgIHBpZFxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXREZXRhaWxCeUxhdExuZ0FjdGlvbiA9IChsYXRMbmcpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogcGxhY2UuR0VUX0RFVEFJTF9CWV9MQVRMTkdfUkVRVUVTVCxcclxuICAgIGxhdExuZ1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXREZXRhaWxBcm91bmRQbGFjZSA9IChpZCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBwbGFjZS5HRVRfREVUQUlMX0FST1VORF9QTEFDRV9SRVFVRVNULFxyXG4gICAgaWRcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0TWFwVmlld3BvcnRBY3Rpb24gPSAodmlld3BvcnQpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogcGxhY2UuU0VUX01BUF9WSUVXUE9SVF9SRVFVRVNULFxyXG4gICAgdmlld3BvcnRcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzZXRDZW50ZXJMYXRMbmdBY3Rpb24gPSAobGF0TG5nKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IHBsYWNlLlNFVF9DRU5URVJfTEFUTE5HX1JFUVVFU1QsXHJcbiAgICBsYXRMbmdcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzZXRNeUxvY2F0aW9uQWN0aW9uID0gKGxhdExuZykgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBwbGFjZS5TRVRfTVlfTE9DQVRJT04sXHJcbiAgICBsYXRMbmdcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCByZXNldExvY2F0aW9uQWN0aW9uID0gKCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBwbGFjZS5SRVNFVF9MT0NBVElPTlxyXG4gIH1cclxufSIsImV4cG9ydCBjb25zdFxyXG4gIFNIT1dfVklTQkxFX0JPWCA9IFwiQk9YOlNIT1dfVklTSUJMRV9CT1hcIixcclxuXHJcbiAgU0VUX1JFRF9NQVJLRVIgPSBcIk1BUktFUjpTRVRfUkVEX01BUktFUlwiLFxyXG5cclxuICBTRVRfQ09MTEFQU0VEX0lORk9fQk9YID0gXCJJTkZPX0JPWDpTRVRfQ09MTEFQU0VEXCIsXHJcblxyXG4gIFNFVF9QT1BVUF9SSUdIVF9DTElDSyA9IFwiUE9QVVA6U0VUX1BPUFVQXCIiLCJleHBvcnQgY29uc3RcclxuICBHRVRfREVUQUlMX0JZX0lEX1JFUVVFU1QgPSBcIkxPQ0FUSU9OOkdFVF9ERVRBSUxfSURfUkVRVUVTVFwiLFxyXG4gIEdFVF9ERVRBSUxfQllfSURfU1VDQ0VTUyA9IFwiTE9DQVRJT046R0VUX0RFVEFJTF9JRF9TVUNDRVNTXCIsXHJcblxyXG4gIFNFVF9NWV9MT0NBVElPTiA9IFwiTE9DQVRJT046U0VUX01ZX0xPQ0FUSU9OXCIsXHJcblxyXG4gIEdFVF9ERVRBSUxfQllfTEFUTE5HX1JFUVVFU1QgPSBcIkxPQ0FUSU9OOkdFVF9ERVRBSUxfTEFUTE5HX1JFUVVFU1RcIixcclxuICBHRVRfREVUQUlMX0JZX0xBVExOR19TVUNDRVNTID0gXCJMT0NBVElPTjpHRVRfREVUQUlMX0xBVExOR19TVUNDRVNTXCIsXHJcblxyXG4gIFJFU0VUX0xPQ0FUSU9OID0gXCJMT0NBVElPTjpSRVNFVFwiLFxyXG4gIEdFVF9ERVRBSUxfQVJPVU5EX1BMQUNFX1JFUVVFU1QgPSBcIkxPQ0FUSU9OOkdFVF9ERVRBSUxfQVJPVU5EX1BMQUNFX1JFUVVFU1RcIixcclxuICBHRVRfREVUQUlMX0FST1VORF9QTEFDRV9TVUNDRVNTID0gXCJMT0NBVElPTjpHRVRfREVUQUlMX0FST1VORF9QTEFDRV9TVUNDRVNTXCIsXHJcblxyXG4gIFNFVF9NQVBfVklFV1BPUlRfUkVRVUVTVCA9IFwiTUFQOlNFVF9WSUVXUE9SVF9SRVFVRVNUXCIsXHJcbiAgU0VUX0NFTlRFUl9MQVRMTkdfUkVRVUVTVCA9IFwiTUFQOlNFVF9DRU5URVJfTEFUTE5HX1JFUVVFU1RcIlxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkL2xpYi9hdmF0YXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZC9saWIvY2FyZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkL2xpYi9jb2xcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZC9saWIvZGl2aWRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkL2xpYi9pbnB1dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkL2xpYi9sYXlvdXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZC9saWIvbGlzdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkL2xpYi9tZXNzYWdlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGQvbGliL3Jvd1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkL2xpYi90b29sdGlwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZhc3QtZGVlcC1lcXVhbC9lczYvcmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaTE4bmV4dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2gvZGVib3VuY2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9keW5hbWljXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWNvcHktdG8tY2xpcGJvYXJkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRldmljZS1kZXRlY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZGl2LTEwMHZoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvbS9zZXJ2ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaTE4bmV4dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zb3J0YWJsZS1ob2NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYS9lZmZlY3RzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=