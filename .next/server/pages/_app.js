module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./consts/api_url.js":
/*!***************************!*\
  !*** ./consts/api_url.js ***!
  \***************************/
/*! exports provided: API_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_URL", function() { return API_URL; });
const API_URL = {
  GEOCODE: "/geocode",
  AUTOCOMPLETE: "/Place/Autocomplete",
  DIRECTION: "/Direction",
  DISTANCEMATRIX: "/DistanceMatrix",
  GOOGLE_EMBED: "https://maps.google.com/maps?z=17&output=embed",
  PLACE_DETAIL: "/Place/Detail",
  WEATHER: "https://api.openweathermap.org/data/2.5/weather"
};

/***/ }),

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");
exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");
exports.AppInitialProps = _utils.AppInitialProps;
exports.NextWebVitalsMetric = _utils.NextWebVitalsMetric; /**
                                                          * `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
                                                          * This allows for keeping state between navigation, custom error handling, injecting additional data.
                                                          */
async function appGetInitialProps({
  Component,
  ctx
}) {
  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}
class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }
  render() {
    const {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps,
    // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }
}
exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
let warnContainer;
let warnUrl;
if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn(`Warning: the \`Container\` in \`_app\` has been deprecated and should be removed. https://err.sh/vercel/next.js/app-container-deprecated`);
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error(`Warning: the 'url' property is deprecated. https://err.sh/vercel/next.js/url-deprecated`);
  });
} // @deprecated noop for now until removal
function Container(p) {
  if (true) warnContainer();
  return p.children;
}
function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  const {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },
    get pathname() {
      if (true) warnUrl();
      return pathname;
    },
    get asPath() {
      if (true) warnUrl();
      return asPath;
    },
    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainApp; });
/* harmony import */ var antd_lib_config_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/config-provider */ "antd/lib/config-provider");
/* harmony import */ var antd_lib_config_provider__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_config_provider__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_locale_provider_vi_VN__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/locale-provider/vi_VN */ "antd/lib/locale-provider/vi_VN");
/* harmony import */ var antd_lib_locale_provider_vi_VN__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_locale_provider_vi_VN__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _redux_sagas_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/sagas/index */ "./redux/sagas/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _redux_storeConfig__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../redux/storeConfig */ "./redux/storeConfig.js");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/index.scss */ "./styles/index.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_10__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;










const store = Object(_redux_storeConfig__WEBPACK_IMPORTED_MODULE_7__["default"])();
store.runSaga(_redux_sagas_index__WEBPACK_IMPORTED_MODULE_5__["default"]);
class MainApp extends next_app__WEBPACK_IMPORTED_MODULE_3___default.a {
  render() {
    const {
      Component,
      pageProps
    } = this.props;
    return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_6__["Provider"], {
      store: store
    }, __jsx(next_app__WEBPACK_IMPORTED_MODULE_3__["Container"], null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, __jsx("meta", {
      charSet: "UTF-8"
    }), __jsx("meta", {
      name: "viewport",
      content: "width=device-width, height=device-height, initial-scale=1.0"
    }), __jsx("link", {
      rel: "icon",
      href: "/static/images/logo-mini.png"
    }), __jsx("link", {
      rel: "stylesheet",
      href: "https://use.fontawesome.com/releases/v5.2.0/css/all.css",
      integrity: "sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ",
      crossOrigin: "anonymous"
    })), __jsx(antd_lib_config_provider__WEBPACK_IMPORTED_MODULE_0___default.a, {
      locale: antd_lib_locale_provider_vi_VN__WEBPACK_IMPORTED_MODULE_4___default.a
    }, __jsx(Component, pageProps))));
  }
}

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

/***/ "./redux/consts/navigation.js":
/*!************************************!*\
  !*** ./redux/consts/navigation.js ***!
  \************************************/
/*! exports provided: SHOW_NAVIGATION_BOX, NAVIGATION_FROM_REQUEST, NAVIGATION_TO_REQUEST, NAVIGATION_REQUEST, NAVIGATION_SUCCESS, NAVIGATION_FAIL, SWAP_REQUEST, NAVIGATION_SELECT_RESULT_REQUEST, NAVIGATION_SELECT_RESULT_SUCCESS, CLEAR_RESULT_REQUEST, CLEAR_REQUEST, TYPE_INPUT, TYPE_LATLONG, INFO_RESTAURANT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOW_NAVIGATION_BOX", function() { return SHOW_NAVIGATION_BOX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAVIGATION_FROM_REQUEST", function() { return NAVIGATION_FROM_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAVIGATION_TO_REQUEST", function() { return NAVIGATION_TO_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAVIGATION_REQUEST", function() { return NAVIGATION_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAVIGATION_SUCCESS", function() { return NAVIGATION_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAVIGATION_FAIL", function() { return NAVIGATION_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SWAP_REQUEST", function() { return SWAP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAVIGATION_SELECT_RESULT_REQUEST", function() { return NAVIGATION_SELECT_RESULT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAVIGATION_SELECT_RESULT_SUCCESS", function() { return NAVIGATION_SELECT_RESULT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_RESULT_REQUEST", function() { return CLEAR_RESULT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_REQUEST", function() { return CLEAR_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE_INPUT", function() { return TYPE_INPUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE_LATLONG", function() { return TYPE_LATLONG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INFO_RESTAURANT", function() { return INFO_RESTAURANT; });
const SHOW_NAVIGATION_BOX = "BOX:SHOW_NAVIGATION_BOX",
  NAVIGATION_FROM_REQUEST = "LOCATION:NAVIGATION_FROM_REQUEST",
  NAVIGATION_TO_REQUEST = "LOCATION:NAVIGATION_TO_REQUEST",
  NAVIGATION_REQUEST = "LOCATION:NAVIGATION_REQUEST",
  NAVIGATION_SUCCESS = "LOCATION:NAVIGATION_SUCCESS",
  NAVIGATION_FAIL = "LOCATION:NAVIGATION_FAIL",
  SWAP_REQUEST = "LOCATION:SWAP_REQUEST",
  NAVIGATION_SELECT_RESULT_REQUEST = "LOCATION:SELECT_RESULT_REQUEST",
  NAVIGATION_SELECT_RESULT_SUCCESS = "LOCATION:SELECT_RESULT_SUCCESS",
  CLEAR_RESULT_REQUEST = "LOCATION:CLEAR_RESULT_REQUEST",
  CLEAR_REQUEST = "LOCATION:CLEAR_REQUEST",
  TYPE_INPUT = "TYPE_INPUT",
  TYPE_LATLONG = "TYPE_LATLONG",
  INFO_RESTAURANT = "INFO_RESTAURANT";

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

/***/ "./redux/consts/search.js":
/*!********************************!*\
  !*** ./redux/consts/search.js ***!
  \********************************/
/*! exports provided: SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_CLEAR_REQUEST, SEARCH_AROUND_REQUEST, SEARCH_AROUND_SUCCESS, CLEAR_SEARCH_AROUND_REQUEST, SELECT_AROUND_PLACE_MARKER, SEARCH_HISTORY, SEARCH_DATA, RESTAURANT_DATA, SEARCH_LOCAL_STORAGE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_REQUEST", function() { return SEARCH_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_SUCCESS", function() { return SEARCH_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_CLEAR_REQUEST", function() { return SEARCH_CLEAR_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_AROUND_REQUEST", function() { return SEARCH_AROUND_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_AROUND_SUCCESS", function() { return SEARCH_AROUND_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_SEARCH_AROUND_REQUEST", function() { return CLEAR_SEARCH_AROUND_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_AROUND_PLACE_MARKER", function() { return SELECT_AROUND_PLACE_MARKER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_HISTORY", function() { return SEARCH_HISTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_DATA", function() { return SEARCH_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESTAURANT_DATA", function() { return RESTAURANT_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_LOCAL_STORAGE", function() { return SEARCH_LOCAL_STORAGE; });
const SEARCH_REQUEST = "SEARCH:SEARCH_REQUEST",
  SEARCH_SUCCESS = "SEARCH:SEARCH_SUCCESS",
  SEARCH_CLEAR_REQUEST = "SEARCH:CLEAR_REQUEST",
  SEARCH_AROUND_REQUEST = "SEARCH:SEARCH_AROUND_REQUEST",
  SEARCH_AROUND_SUCCESS = "SEARCH:SEARCH_AROUND_SUCCESS",
  CLEAR_SEARCH_AROUND_REQUEST = "SEARCH:CLEAR_SEARCH_AROUND_REQUEST",
  SELECT_AROUND_PLACE_MARKER = "SELECT_AROUND_PLACE_MARKER_REQUEST",
  SEARCH_HISTORY = "SEARCH_HISTORY",
  SEARCH_DATA = "SEARCH_DATA",
  RESTAURANT_DATA = "RESTAURANT_DATA",
  SEARCH_LOCAL_STORAGE = "SEARCH_LOCAL_STORAGE";

/***/ }),

/***/ "./redux/reducers/boxVisibleReducer.js":
/*!*********************************************!*\
  !*** ./redux/reducers/boxVisibleReducer.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return boxVisibleReducer; });
/* harmony import */ var _consts_boxVisible__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../consts/boxVisible */ "./redux/consts/boxVisible.js");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

const initialState = {
  box_visible: 'search',
  info_box_collapsed: false,
  red_marker_visible: false,
  position_red_marker: {},
  popup_visible: false,
  position_popup: {},
  type_popup: 'normal'
};
function boxVisibleReducer(state = initialState, action) {
  switch (action.type) {
    case _consts_boxVisible__WEBPACK_IMPORTED_MODULE_0__["SHOW_VISBLE_BOX"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        box_visible: action.type_visible
      });
    case _consts_boxVisible__WEBPACK_IMPORTED_MODULE_0__["SET_RED_MARKER"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        red_marker_visible: action.visible,
        position_red_marker: action.location
      });
    case _consts_boxVisible__WEBPACK_IMPORTED_MODULE_0__["SET_COLLAPSED_INFO_BOX"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        info_box_collapsed: action.collapsed
      });
    case _consts_boxVisible__WEBPACK_IMPORTED_MODULE_0__["SET_POPUP_RIGHT_CLICK"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        popup_visible: action.visible,
        position_popup: action.location,
        type_popup: action.type_popup
      });
    default:
      return _objectSpread({}, state);
  }
}

/***/ }),

/***/ "./redux/reducers/index.js":
/*!*********************************!*\
  !*** ./redux/reducers/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _searchReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./searchReducer */ "./redux/reducers/searchReducer.js");
/* harmony import */ var _placeReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./placeReducer */ "./redux/reducers/placeReducer.js");
/* harmony import */ var _navigationReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigationReducer */ "./redux/reducers/navigationReducer.js");
/* harmony import */ var _boxVisibleReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./boxVisibleReducer */ "./redux/reducers/boxVisibleReducer.js");





const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  searchReducer: _searchReducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  placeReducer: _placeReducer__WEBPACK_IMPORTED_MODULE_2__["default"],
  navigationReducer: _navigationReducer__WEBPACK_IMPORTED_MODULE_3__["default"],
  boxVisibleReducer: _boxVisibleReducer__WEBPACK_IMPORTED_MODULE_4__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./redux/reducers/navigationReducer.js":
/*!*********************************************!*\
  !*** ./redux/reducers/navigationReducer.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return navigationReducer; });
/* harmony import */ var _consts_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../consts/navigation */ "./redux/consts/navigation.js");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

const initialState = {
  from: null,
  to: null,
  result: null,
  text_to_input: '',
  text_from_input: '',
  result_select: 'fastest',
  response_status: true,
  type_input: true,
  type_latlong: '',
  info_restaurant: false
};
function navigationReducer(state = initialState, action) {
  switch (action.type) {
    case _consts_navigation__WEBPACK_IMPORTED_MODULE_0__["NAVIGATION_FROM_REQUEST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        from: action.place,
        text_from_input: action.text
      });
    case _consts_navigation__WEBPACK_IMPORTED_MODULE_0__["NAVIGATION_TO_REQUEST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        to: action.place,
        text_to_input: action.text
      });
    case _consts_navigation__WEBPACK_IMPORTED_MODULE_0__["SWAP_REQUEST"]:
      const tmp = state.from;
      const tmp_text = state.text_from_input;
      return _objectSpread(_objectSpread({}, state), {}, {
        from: state.to,
        to: tmp,
        text_from_input: state.text_to_input,
        text_to_input: tmp_text
      });
    case _consts_navigation__WEBPACK_IMPORTED_MODULE_0__["NAVIGATION_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        result: action.result,
        response_status: true
      });
    case _consts_navigation__WEBPACK_IMPORTED_MODULE_0__["NAVIGATION_FAIL"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        result: action.result,
        response_status: false
      });
    case _consts_navigation__WEBPACK_IMPORTED_MODULE_0__["NAVIGATION_SELECT_RESULT_REQUEST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        result_select: action.roadWay
      });
    case _consts_navigation__WEBPACK_IMPORTED_MODULE_0__["CLEAR_RESULT_REQUEST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        result: null
      });
    case _consts_navigation__WEBPACK_IMPORTED_MODULE_0__["CLEAR_REQUEST"]:
      return _objectSpread({}, initialState);
    case _consts_navigation__WEBPACK_IMPORTED_MODULE_0__["TYPE_INPUT"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        type_input: action.type_input
      });
    case _consts_navigation__WEBPACK_IMPORTED_MODULE_0__["TYPE_LATLONG"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        type_latlong: action.type_latlong
      });
    case _consts_navigation__WEBPACK_IMPORTED_MODULE_0__["INFO_RESTAURANT"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        info_restaurant: action.info_restaurant
      });
    default:
      return _objectSpread({}, state);
  }
}

/***/ }),

/***/ "./redux/reducers/placeReducer.js":
/*!****************************************!*\
  !*** ./redux/reducers/placeReducer.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return searchReducer; });
/* harmony import */ var _consts_place__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../consts/place */ "./redux/consts/place.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


const initialState = {
  current_place: null,
  near_places: [],
  center: {
    latitude: 21.013722,
    longitude: 105.798232
  },
  viewport: {
    latitude: 21.013722,
    longitude: 105.798232,
    zoom: 12
  },
  my_location: null
};
function searchReducer(state = initialState, action) {
  switch (action.type) {
    case _consts_place__WEBPACK_IMPORTED_MODULE_0__["GET_DETAIL_BY_ID_SUCCESS"]:
      const pid = action.pid || action.data.place_id;
      if (pid) {
        next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push({
          pathname: `/`,
          query: {
            pid: `${pid}`
          }
        });
      } else {
        next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push({
          pathname: `/`,
          query: {
            location: `${action.data.geometry.location.lat},${action.data.geometry.location.lng}`
          }
        });
      }
      return _objectSpread(_objectSpread({}, state), {}, {
        current_place: action.data,
        near_places: action.nearPlaces
      });
    case _consts_place__WEBPACK_IMPORTED_MODULE_0__["RESET_LOCATION"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        current_place: initialState.current_place,
        near_places: initialState.near_places
      });
    case _consts_place__WEBPACK_IMPORTED_MODULE_0__["SET_MAP_VIEWPORT_REQUEST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        viewport: action.viewport
      });
    case _consts_place__WEBPACK_IMPORTED_MODULE_0__["SET_CENTER_LATLNG_REQUEST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        center: action.latLng
      });
    case _consts_place__WEBPACK_IMPORTED_MODULE_0__["GET_DETAIL_AROUND_PLACE_SUCCESS"]:
      const pid_around = action.pid || action.data.place_id;
      ;
      if (pid_around) {
        next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push({
          pathname: `/`,
          query: {
            pid_around
          }
        });
      }
      return _objectSpread(_objectSpread({}, state), {}, {
        current_place: action.data,
        near_places: action.nearPlaces
      });
    case _consts_place__WEBPACK_IMPORTED_MODULE_0__["SET_MY_LOCATION"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        my_location: action.latLng
      });
    default:
      return _objectSpread({}, state);
  }
}

/***/ }),

/***/ "./redux/reducers/searchReducer.js":
/*!*****************************************!*\
  !*** ./redux/reducers/searchReducer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return searchReducer; });
/* harmony import */ var _consts_search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../consts/search */ "./redux/consts/search.js");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

const initialState = {
  places: [],
  around_places: [],
  around_place_select: null,
  search_history: true,
  search_data: [],
  restaurant_data: [],
  search_local_storage: []
};
function searchReducer(state = initialState, action) {
  switch (action.type) {
    case _consts_search__WEBPACK_IMPORTED_MODULE_0__["SEARCH_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        places: action.places
      });
    case _consts_search__WEBPACK_IMPORTED_MODULE_0__["SEARCH_AROUND_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        around_places: action.around_places,
        around_place_center: action.center_location
      });
    case _consts_search__WEBPACK_IMPORTED_MODULE_0__["SEARCH_CLEAR_REQUEST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        places: initialState.places
      });
    case _consts_search__WEBPACK_IMPORTED_MODULE_0__["CLEAR_SEARCH_AROUND_REQUEST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        around_places: initialState.around_places,
        around_place_select: null
      });
    case _consts_search__WEBPACK_IMPORTED_MODULE_0__["SELECT_AROUND_PLACE_MARKER"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        around_place_select: action.place
      });
    case _consts_search__WEBPACK_IMPORTED_MODULE_0__["SEARCH_HISTORY"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        search_history: action.search_history
      });
    case _consts_search__WEBPACK_IMPORTED_MODULE_0__["SEARCH_DATA"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        search_data: action.search_data
      });
    case _consts_search__WEBPACK_IMPORTED_MODULE_0__["RESTAURANT_DATA"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        restaurant_data: action.restaurant_data
      });
    case _consts_search__WEBPACK_IMPORTED_MODULE_0__["SEARCH_LOCAL_STORAGE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        search_local_storage: action.search_local_storage
      });
    default:
      return _objectSpread({}, state);
  }
}

/***/ }),

/***/ "./redux/sagas/index.js":
/*!******************************!*\
  !*** ./redux/sagas/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _searchSaga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./searchSaga */ "./redux/sagas/searchSaga.js");
/* harmony import */ var _placeSaga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./placeSaga */ "./redux/sagas/placeSaga.js");
/* harmony import */ var _navigationSaga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigationSaga */ "./redux/sagas/navigationSaga.js");




function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_searchSaga__WEBPACK_IMPORTED_MODULE_1__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_placeSaga__WEBPACK_IMPORTED_MODULE_2__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_navigationSaga__WEBPACK_IMPORTED_MODULE_3__["default"])]);
}

/***/ }),

/***/ "./redux/sagas/navigationSaga.js":
/*!***************************************!*\
  !*** ./redux/sagas/navigationSaga.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return navigationSaga; });
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/message */ "antd/lib/message");
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _consts_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../consts/navigation */ "./redux/consts/navigation.js");
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/request */ "./utils/request.js");




function* navigationSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_consts_navigation__WEBPACK_IMPORTED_MODULE_2__["NAVIGATION_REQUEST"], navigationRequestSaga)]);
}
function directionService(params) {
  return _utils_request__WEBPACK_IMPORTED_MODULE_3__["default"].direction(params);
}
function* navigationRequestSaga(action) {
  try {
    const {
      from_place,
      to_place,
      vehicle
    } = action;
    let params = {
      origin: {
        latitude: from_place.geometry.location.lat,
        longitude: from_place.geometry.location.lng
      },
      destination: {
        latitude: to_place.geometry.location.lat,
        longitude: to_place.geometry.location.lng
      },
      vehicle
    };
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(directionService, params);
    if (response.status == 200 && response.data.routes.length > 0) {
      var _response$data, _response$data$routes, _response$data2, _response$data2$route;
      const shortest = (_response$data = response.data) === null || _response$data === void 0 ? void 0 : (_response$data$routes = _response$data.routes) === null || _response$data$routes === void 0 ? void 0 : _response$data$routes.sort((r1, r2) => {
        return r1.legs[0].distance.value - r2.legs[0].distance.value;
      })[0];
      const fastest = (_response$data2 = response.data) === null || _response$data2 === void 0 ? void 0 : (_response$data2$route = _response$data2.routes) === null || _response$data2$route === void 0 ? void 0 : _response$data2$route.sort((r1, r2) => {
        return r1.legs[0].duration.value - r2.legs[0].duration.value;
      })[0];
      const result = {
        fastest: [fastest],
        shortest: [shortest]
      };
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _consts_navigation__WEBPACK_IMPORTED_MODULE_2__["NAVIGATION_SUCCESS"],
        result: result
      });
    } else {
      antd_lib_message__WEBPACK_IMPORTED_MODULE_0___default.a.error("Không tìm thấy đường đi !");
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _consts_navigation__WEBPACK_IMPORTED_MODULE_2__["NAVIGATION_FAIL"],
        result: null
      });
    }
  } catch (error) {
    antd_lib_message__WEBPACK_IMPORTED_MODULE_0___default.a.error("Không tìm thấy đường đi !");
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _consts_navigation__WEBPACK_IMPORTED_MODULE_2__["NAVIGATION_FAIL"],
      result: null
    });
    throw error;
  }
}

/***/ }),

/***/ "./redux/sagas/placeSaga.js":
/*!**********************************!*\
  !*** ./redux/sagas/placeSaga.js ***!
  \**********************************/
/*! exports provided: default, getDetailIdService, getDetailLatLngService, getDetailAroundPlaceService, getAddressGeocode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return placeSaga; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDetailIdService", function() { return getDetailIdService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDetailLatLngService", function() { return getDetailLatLngService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDetailAroundPlaceService", function() { return getDetailAroundPlaceService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAddressGeocode", function() { return getAddressGeocode; });
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/message */ "antd/lib/message");
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _consts_place__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../consts/place */ "./redux/consts/place.js");
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/request */ "./utils/request.js");
/* harmony import */ var _searchSaga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./searchSaga */ "./redux/sagas/searchSaga.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }





function* placeSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_consts_place__WEBPACK_IMPORTED_MODULE_2__["GET_DETAIL_BY_ID_REQUEST"], getDetailIdSaga), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_consts_place__WEBPACK_IMPORTED_MODULE_2__["GET_DETAIL_BY_LATLNG_REQUEST"], getDetailLatLngSaga), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_consts_place__WEBPACK_IMPORTED_MODULE_2__["GET_DETAIL_AROUND_PLACE_REQUEST"], getDetailAroundPlaceSaga)]);
}
function getDetailIdService(pid) {
  return _utils_request__WEBPACK_IMPORTED_MODULE_3__["default"].place_detail(pid);
}
function getDetailLatLngService(latLng) {
  return _utils_request__WEBPACK_IMPORTED_MODULE_3__["default"].geocode(latLng);
}
function getDetailAroundPlaceService(id) {
  return axios__WEBPACK_IMPORTED_MODULE_5___default.a.get(`https://napi.goong.io/v1/marker/get_marker_detail/${id}`);
}
function* getDetailIdSaga(action) {
  try {
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(getDetailIdService, action.pid);
    const latLng = {
      latitude: response.data.result.geometry.location.lat,
      longitude: response.data.result.geometry.location.lng
    };
    const getByLatLng = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(getDetailLatLngService, latLng);
    if (response.data.status == 'OK' && getByLatLng.data.results.length > 0) {
      var _response_search$data;
      const location = response.data.result.geometry.location.lat + "," + response.data.result.geometry.location.lng;
      const response_search = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_searchSaga__WEBPACK_IMPORTED_MODULE_4__["searchService"], response.data.result.name, location, 11, 10);
      const near_places = (_response_search$data = response_search.data.predictions) === null || _response_search$data === void 0 ? void 0 : _response_search$data.filter(i => i.place_id !== action.pid);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _consts_place__WEBPACK_IMPORTED_MODULE_2__["GET_DETAIL_BY_ID_SUCCESS"],
        data: response.data.result,
        nearPlaces: near_places,
        pid: action.pid
      });
    } else {
      antd_lib_message__WEBPACK_IMPORTED_MODULE_0___default.a.error('Không tìm thấy địa điểm !');
    }
  } catch (error) {
    throw error;
  }
}
function* getDetailLatLngSaga(action) {
  try {
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(getDetailLatLngService, action.latLng);
    if (response.data.status == 'OK' && response.data.results.length > 0) {
      var _response_search$data2;
      const place_return = response.data.results[0];
      const name_place = place_return.address_components[0].long_name;
      const location = place_return.geometry.location.lat + "," + place_return.geometry.location.lng;
      const response_search = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_searchSaga__WEBPACK_IMPORTED_MODULE_4__["searchService"], name_place, location, 11, 10);
      const near_places = (_response_search$data2 = response_search.data.predictions) === null || _response_search$data2 === void 0 ? void 0 : _response_search$data2.filter(i => i.place_id !== place_return.place_id);
      const return_data = _objectSpread(_objectSpread({}, place_return), {}, {
        name: name_place,
        formatted_address: getAddressGeocode(place_return)
      });
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _consts_place__WEBPACK_IMPORTED_MODULE_2__["GET_DETAIL_BY_ID_SUCCESS"],
        data: return_data,
        nearPlaces: near_places
      });
    } else {
      antd_lib_message__WEBPACK_IMPORTED_MODULE_0___default.a.error('Không tìm thấy địa điểm !');
    }
  } catch (error) {
    throw error;
  }
}
function* getDetailAroundPlaceSaga(action) {
  try {
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(getDetailAroundPlaceService, action.id);
    const data = response.data.data;
    if (data) {
      const return_data = _objectSpread(_objectSpread({}, data), {}, {
        place_id: data._id,
        geometry: {
          location: {
            lat: Number(data.lng_lat[1]),
            lng: Number(data.lng_lat[0])
          }
        },
        formatted_address: data.description.address
      });
      const name_place = return_data.name;
      const location = return_data.geometry.location.lat + "," + return_data.geometry.location.lng;
      const response_search = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_searchSaga__WEBPACK_IMPORTED_MODULE_4__["searchService"], name_place, location, 10, 10);
      const near_places = response_search.data.predictions;
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _consts_place__WEBPACK_IMPORTED_MODULE_2__["GET_DETAIL_AROUND_PLACE_SUCCESS"],
        data: return_data,
        nearPlaces: near_places
      });
    } else {
      antd_lib_message__WEBPACK_IMPORTED_MODULE_0___default.a.error('Không tìm thấy địa điểm !');
    }
  } catch (error) {
    throw error;
  }
}
function getAddressGeocode(place) {
  let result = [];
  place.address_components.slice(1).map(item => {
    result.push(item.long_name);
  });
  return result.join(',');
}

/***/ }),

/***/ "./redux/sagas/searchSaga.js":
/*!***********************************!*\
  !*** ./redux/sagas/searchSaga.js ***!
  \***********************************/
/*! exports provided: default, searchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return searchSaga; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchService", function() { return searchService; });
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/message */ "antd/lib/message");
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _consts_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../consts/search */ "./redux/consts/search.js");
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/request */ "./utils/request.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _placeSaga__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./placeSaga */ "./redux/sagas/placeSaga.js");

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }





let searchRequest = null;
function* searchSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_consts_search__WEBPACK_IMPORTED_MODULE_2__["SEARCH_REQUEST"], searchRequestSaga), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_consts_search__WEBPACK_IMPORTED_MODULE_2__["SEARCH_AROUND_REQUEST"], searchAroundSaga)]);
}
function searchService(query, location, radius, limit) {
  if (searchRequest) searchRequest.cancel();
  searchRequest = _utils_request__WEBPACK_IMPORTED_MODULE_3__["default"].autocomplete(query, location, radius, limit);
  return searchRequest;
}
function searchAroundService(location, zoom) {
  return axios__WEBPACK_IMPORTED_MODULE_4___default.a.post('https://napi.goong.io/v1/marker/get_markers_in_bear', {
    "lat": location.lat,
    "lng": location.lng,
    "distance": 1000,
    "type_code": ["SUGGESTION"],
    //or "cat_code":["GT_STATIC"]
    "bearing": 0,
    "angle": 360,
    "limit": 50,
    "page": 0,
    "zoom": zoom
  });
}
function* searchRequestSaga(action) {
  if (action.query.trim() === '') {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _consts_search__WEBPACK_IMPORTED_MODULE_2__["SEARCH_SUCCESS"],
      places: []
    });
  } else {
    try {
      const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(searchService, action.query, action.location);
      if (response.data.status == 'OK') {
        const places = response.data.predictions || [];
        yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
          type: _consts_search__WEBPACK_IMPORTED_MODULE_2__["SEARCH_SUCCESS"],
          places: places
        });
      } else {
        yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
          type: _consts_search__WEBPACK_IMPORTED_MODULE_2__["SEARCH_SUCCESS"],
          places: []
        });
      }
    } catch (error) {}
  }
}
function* searchAroundSaga(action) {
  if (action.location.lat && action.location.lng) {
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(searchAroundService, action.location, action.zoom);
    if (response.data.length > 0) {
      const response_center = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_placeSaga__WEBPACK_IMPORTED_MODULE_5__["getDetailLatLngService"], {
        latitude: action.location.lat,
        longitude: action.location.lng
      });
      const place_center = response_center.data.results[0];
      const place_center_return = _objectSpread(_objectSpread({}, place_center), {}, {
        name: place_center.address_components[0].long_name,
        formatted_address: Object(_placeSaga__WEBPACK_IMPORTED_MODULE_5__["getAddressGeocode"])(place_center)
      });
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _consts_search__WEBPACK_IMPORTED_MODULE_2__["SEARCH_AROUND_SUCCESS"],
        around_places: response.data,
        center_location: place_center_return
      });
    } else {
      antd_lib_message__WEBPACK_IMPORTED_MODULE_0___default.a.error('Không có địa điểm nào quanh đây !');
    }
  }
}

/***/ }),

/***/ "./redux/storeConfig.js":
/*!******************************!*\
  !*** ./redux/storeConfig.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return configureStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducers_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers/index */ "./redux/reducers/index.js");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



function configureStore() {
  const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_2___default()();
  return _objectSpread(_objectSpread({}, Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers_index__WEBPACK_IMPORTED_MODULE_1__["default"], Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(sagaMiddleware))), {}, {
    runSaga: sagaMiddleware.run
  });
  return _objectSpread(_objectSpread({}, Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers_index__WEBPACK_IMPORTED_MODULE_1__["default"], Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(sagaMiddleware))), {}, {
    runSaga: sagaMiddleware.run
  });
}

/***/ }),

/***/ "./styles/index.scss":
/*!***************************!*\
  !*** ./styles/index.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./utils/base_request.js":
/*!*******************************!*\
  !*** ./utils/base_request.js ***!
  \*******************************/
/*! exports provided: GET */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET", function() { return GET; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

const {
  CancelToken
} = axios__WEBPACK_IMPORTED_MODULE_0___default.a;
const GET = (url, params, options = {}) => {
  let cancel;
  let promise = new Promise((resolve, reject) => {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${options.host_name || "https://rsapi.goong.io"}${url}`, {
      params: _objectSpread(_objectSpread({}, params), {}, {
        api_key: options.api_key || "zR0c6DjYs3YWpvi5zSfywPUPesH2G1Liy7rqfVin"
      }),
      cancelToken: new CancelToken(function executor(c) {
        cancel = c;
      })
    }).then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    });
  });
  promise.cancel = cancel;
  return promise;
};

/***/ }),

/***/ "./utils/request.js":
/*!**************************!*\
  !*** ./utils/request.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base_request */ "./utils/base_request.js");
/* harmony import */ var _consts_api_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../consts/api_url */ "./consts/api_url.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = ({
  geocode: (location, options) => {
    return Object(_base_request__WEBPACK_IMPORTED_MODULE_0__["GET"])(_consts_api_url__WEBPACK_IMPORTED_MODULE_1__["API_URL"].GEOCODE, {
      latlng: `${location.latitude},${location.longitude}`
    }, options);
  },
  autocomplete: (input, location, limit, radius, has_children, options) => {
    return Object(_base_request__WEBPACK_IMPORTED_MODULE_0__["GET"])(_consts_api_url__WEBPACK_IMPORTED_MODULE_1__["API_URL"].AUTOCOMPLETE, {
      input,
      location,
      radius: radius || 3000,
      limit: limit || 10,
      has_children: has_children || false
    }, options);
  },
  direction: (params, options) => {
    return Object(_base_request__WEBPACK_IMPORTED_MODULE_0__["GET"])(_consts_api_url__WEBPACK_IMPORTED_MODULE_1__["API_URL"].DIRECTION, {
      origin: `${params.origin.latitude},${params.origin.longitude}`,
      destination: `${params.destination.latitude},${params.destination.longitude}`,
      vehicle: params.vehicle || 'car'
    }, options);
  },
  distancematrix: (params, options) => {
    return Object(_base_request__WEBPACK_IMPORTED_MODULE_0__["GET"])(_consts_api_url__WEBPACK_IMPORTED_MODULE_1__["API_URL"].DISTANCEMATRIX, {
      origins: `${params.origin.latitude},${params.origin.longitude}`,
      destinations: `${params.destination.latitude},${params.destination.longitude}`,
      vehicle: `${params.vehicle}`
    }, options);
  },
  place_detail: (placeid, options) => {
    return Object(_base_request__WEBPACK_IMPORTED_MODULE_0__["GET"])(_consts_api_url__WEBPACK_IMPORTED_MODULE_1__["API_URL"].PLACE_DETAIL, {
      placeid
    }, options);
  },
  get_weather: (latitude, longitude) => {
    return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&lang=vi&appid=${"b80572c03d85f1f8899c2073275803d9"}`);
  }
});

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "antd/lib/config-provider":
/*!*******************************************!*\
  !*** external "antd/lib/config-provider" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/config-provider");

/***/ }),

/***/ "antd/lib/locale-provider/vi_VN":
/*!*************************************************!*\
  !*** external "antd/lib/locale-provider/vi_VN" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/locale-provider/vi_VN");

/***/ }),

/***/ "antd/lib/message":
/*!***********************************!*\
  !*** external "antd/lib/message" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/message");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

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

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovLy8uL2NvbnN0cy9hcGlfdXJsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2FwcC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vcGFnZXMvX2FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvY29uc3RzL2JveFZpc2libGUuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvY29uc3RzL25hdmlnYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvY29uc3RzL3BsYWNlLmpzIiwid2VicGFjazovLy8uL3JlZHV4L2NvbnN0cy9zZWFyY2guanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvcmVkdWNlcnMvYm94VmlzaWJsZVJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvcmVkdWNlcnMvbmF2aWdhdGlvblJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvcmVkdWNlcnMvcGxhY2VSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3JlZHV4L3JlZHVjZXJzL3NlYXJjaFJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvc2FnYXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvc2FnYXMvbmF2aWdhdGlvblNhZ2EuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvc2FnYXMvcGxhY2VTYWdhLmpzIiwid2VicGFjazovLy8uL3JlZHV4L3NhZ2FzL3NlYXJjaFNhZ2EuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvc3RvcmVDb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvYmFzZV9yZXF1ZXN0LmpzIiwid2VicGFjazovLy8uL3V0aWxzL3JlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZC9saWIvY29uZmlnLXByb3ZpZGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZC9saWIvbG9jYWxlLXByb3ZpZGVyL3ZpX1ZOXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZC9saWIvbWVzc2FnZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWhlbG1ldFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYS9lZmZlY3RzXCIiXSwibmFtZXMiOlsiQVBJX1VSTCIsIkdFT0NPREUiLCJBVVRPQ09NUExFVEUiLCJESVJFQ1RJT04iLCJESVNUQU5DRU1BVFJJWCIsIkdPT0dMRV9FTUJFRCIsIlBMQUNFX0RFVEFJTCIsIldFQVRIRVIiLCJhcHBHZXRJbml0aWFsUHJvcHMiLCJDb21wb25lbnQiLCJjdHgiLCJwYWdlUHJvcHMiLCJBcHAiLCJSZWFjdCIsImNvbXBvbmVudERpZENhdGNoIiwiZXJyb3IiLCJfZXJyb3JJbmZvIiwicmVuZGVyIiwicm91dGVyIiwiX19OX1NTRyIsIl9fTl9TU1AiLCJwcm9wcyIsInVybCIsImNyZWF0ZVVybCIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJnZXRJbml0aWFsUHJvcHMiLCJ3YXJuQ29udGFpbmVyIiwid2FyblVybCIsImNvbnNvbGUiLCJ3YXJuIiwiQ29udGFpbmVyIiwicCIsImNoaWxkcmVuIiwicGF0aG5hbWUiLCJhc1BhdGgiLCJxdWVyeSIsImJhY2siLCJwdXNoIiwiYXMiLCJwdXNoVG8iLCJocmVmIiwicHVzaFJvdXRlIiwicHVzaFVybCIsInJlcGxhY2UiLCJyZXBsYWNlVG8iLCJyZXBsYWNlUm91dGUiLCJyZXBsYWNlVXJsIiwic3RvcmUiLCJjb25maWd1cmVTdG9yZSIsInJ1blNhZ2EiLCJyb290U2FnYSIsIk1haW5BcHAiLCJfX2pzeCIsIlByb3ZpZGVyIiwiSGVhZCIsImNoYXJTZXQiLCJuYW1lIiwiY29udGVudCIsInJlbCIsImludGVncml0eSIsImNyb3NzT3JpZ2luIiwiX0NvbmZpZ1Byb3ZpZGVyIiwibG9jYWxlIiwidmlfVk4iLCJTSE9XX1ZJU0JMRV9CT1giLCJTRVRfUkVEX01BUktFUiIsIlNFVF9DT0xMQVBTRURfSU5GT19CT1giLCJTRVRfUE9QVVBfUklHSFRfQ0xJQ0siLCJTSE9XX05BVklHQVRJT05fQk9YIiwiTkFWSUdBVElPTl9GUk9NX1JFUVVFU1QiLCJOQVZJR0FUSU9OX1RPX1JFUVVFU1QiLCJOQVZJR0FUSU9OX1JFUVVFU1QiLCJOQVZJR0FUSU9OX1NVQ0NFU1MiLCJOQVZJR0FUSU9OX0ZBSUwiLCJTV0FQX1JFUVVFU1QiLCJOQVZJR0FUSU9OX1NFTEVDVF9SRVNVTFRfUkVRVUVTVCIsIk5BVklHQVRJT05fU0VMRUNUX1JFU1VMVF9TVUNDRVNTIiwiQ0xFQVJfUkVTVUxUX1JFUVVFU1QiLCJDTEVBUl9SRVFVRVNUIiwiVFlQRV9JTlBVVCIsIlRZUEVfTEFUTE9ORyIsIklORk9fUkVTVEFVUkFOVCIsIkdFVF9ERVRBSUxfQllfSURfUkVRVUVTVCIsIkdFVF9ERVRBSUxfQllfSURfU1VDQ0VTUyIsIlNFVF9NWV9MT0NBVElPTiIsIkdFVF9ERVRBSUxfQllfTEFUTE5HX1JFUVVFU1QiLCJHRVRfREVUQUlMX0JZX0xBVExOR19TVUNDRVNTIiwiUkVTRVRfTE9DQVRJT04iLCJHRVRfREVUQUlMX0FST1VORF9QTEFDRV9SRVFVRVNUIiwiR0VUX0RFVEFJTF9BUk9VTkRfUExBQ0VfU1VDQ0VTUyIsIlNFVF9NQVBfVklFV1BPUlRfUkVRVUVTVCIsIlNFVF9DRU5URVJfTEFUTE5HX1JFUVVFU1QiLCJTRUFSQ0hfUkVRVUVTVCIsIlNFQVJDSF9TVUNDRVNTIiwiU0VBUkNIX0NMRUFSX1JFUVVFU1QiLCJTRUFSQ0hfQVJPVU5EX1JFUVVFU1QiLCJTRUFSQ0hfQVJPVU5EX1NVQ0NFU1MiLCJDTEVBUl9TRUFSQ0hfQVJPVU5EX1JFUVVFU1QiLCJTRUxFQ1RfQVJPVU5EX1BMQUNFX01BUktFUiIsIlNFQVJDSF9ISVNUT1JZIiwiU0VBUkNIX0RBVEEiLCJSRVNUQVVSQU5UX0RBVEEiLCJTRUFSQ0hfTE9DQUxfU1RPUkFHRSIsImluaXRpYWxTdGF0ZSIsImJveF92aXNpYmxlIiwiaW5mb19ib3hfY29sbGFwc2VkIiwicmVkX21hcmtlcl92aXNpYmxlIiwicG9zaXRpb25fcmVkX21hcmtlciIsInBvcHVwX3Zpc2libGUiLCJwb3NpdGlvbl9wb3B1cCIsInR5cGVfcG9wdXAiLCJib3hWaXNpYmxlUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsImJveCIsIl9vYmplY3RTcHJlYWQiLCJ0eXBlX3Zpc2libGUiLCJ2aXNpYmxlIiwibG9jYXRpb24iLCJjb2xsYXBzZWQiLCJyb290UmVkdWNlciIsImNvbWJpbmVSZWR1Y2VycyIsInNlYXJjaFJlZHVjZXIiLCJwbGFjZVJlZHVjZXIiLCJuYXZpZ2F0aW9uUmVkdWNlciIsImZyb20iLCJ0byIsInJlc3VsdCIsInRleHRfdG9faW5wdXQiLCJ0ZXh0X2Zyb21faW5wdXQiLCJyZXN1bHRfc2VsZWN0IiwicmVzcG9uc2Vfc3RhdHVzIiwidHlwZV9pbnB1dCIsInR5cGVfbGF0bG9uZyIsImluZm9fcmVzdGF1cmFudCIsIm5hdmlnYXRpb24iLCJwbGFjZSIsInRleHQiLCJ0bXAiLCJ0bXBfdGV4dCIsInJvYWRXYXkiLCJjdXJyZW50X3BsYWNlIiwibmVhcl9wbGFjZXMiLCJjZW50ZXIiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsInZpZXdwb3J0Iiwiem9vbSIsIm15X2xvY2F0aW9uIiwicGlkIiwiZGF0YSIsInBsYWNlX2lkIiwiUm91dGVyIiwiZ2VvbWV0cnkiLCJsYXQiLCJsbmciLCJuZWFyUGxhY2VzIiwibGF0TG5nIiwicGlkX2Fyb3VuZCIsInBsYWNlcyIsImFyb3VuZF9wbGFjZXMiLCJhcm91bmRfcGxhY2Vfc2VsZWN0Iiwic2VhcmNoX2hpc3RvcnkiLCJzZWFyY2hfZGF0YSIsInJlc3RhdXJhbnRfZGF0YSIsInNlYXJjaF9sb2NhbF9zdG9yYWdlIiwic2VhcmNoIiwiYXJvdW5kX3BsYWNlX2NlbnRlciIsImNlbnRlcl9sb2NhdGlvbiIsImFsbCIsImZvcmsiLCJzZWFyY2hTYWdhIiwicGxhY2VTYWdhIiwibmF2aWdhdGlvblNhZ2EiLCJ0YWtlTGF0ZXN0IiwibmF2aWdhdGlvblJlcXVlc3RTYWdhIiwiZGlyZWN0aW9uU2VydmljZSIsInBhcmFtcyIsIlJlcXVlc3QiLCJkaXJlY3Rpb24iLCJmcm9tX3BsYWNlIiwidG9fcGxhY2UiLCJ2ZWhpY2xlIiwib3JpZ2luIiwiZGVzdGluYXRpb24iLCJyZXNwb25zZSIsImNhbGwiLCJzdGF0dXMiLCJyb3V0ZXMiLCJsZW5ndGgiLCJfcmVzcG9uc2UkZGF0YSIsIl9yZXNwb25zZSRkYXRhJHJvdXRlcyIsIl9yZXNwb25zZSRkYXRhMiIsIl9yZXNwb25zZSRkYXRhMiRyb3V0ZSIsInNob3J0ZXN0Iiwic29ydCIsInIxIiwicjIiLCJsZWdzIiwiZGlzdGFuY2UiLCJ2YWx1ZSIsImZhc3Rlc3QiLCJkdXJhdGlvbiIsInB1dCIsIl9tZXNzYWdlIiwiZ2V0RGV0YWlsSWRTYWdhIiwiZ2V0RGV0YWlsTGF0TG5nU2FnYSIsImdldERldGFpbEFyb3VuZFBsYWNlU2FnYSIsImdldERldGFpbElkU2VydmljZSIsInBsYWNlX2RldGFpbCIsImdldERldGFpbExhdExuZ1NlcnZpY2UiLCJnZW9jb2RlIiwiZ2V0RGV0YWlsQXJvdW5kUGxhY2VTZXJ2aWNlIiwiaWQiLCJBeGlvcyIsImdldCIsImdldEJ5TGF0TG5nIiwicmVzdWx0cyIsIl9yZXNwb25zZV9zZWFyY2gkZGF0YSIsInJlc3BvbnNlX3NlYXJjaCIsInNlYXJjaFNlcnZpY2UiLCJwcmVkaWN0aW9ucyIsImZpbHRlciIsImkiLCJfcmVzcG9uc2Vfc2VhcmNoJGRhdGEyIiwicGxhY2VfcmV0dXJuIiwibmFtZV9wbGFjZSIsImFkZHJlc3NfY29tcG9uZW50cyIsImxvbmdfbmFtZSIsInJldHVybl9kYXRhIiwiZm9ybWF0dGVkX2FkZHJlc3MiLCJnZXRBZGRyZXNzR2VvY29kZSIsIl9pZCIsIk51bWJlciIsImxuZ19sYXQiLCJkZXNjcmlwdGlvbiIsImFkZHJlc3MiLCJzbGljZSIsIm1hcCIsIml0ZW0iLCJqb2luIiwic2VhcmNoUmVxdWVzdCIsInNlYXJjaFJlcXVlc3RTYWdhIiwic2VhcmNoQXJvdW5kU2FnYSIsInJhZGl1cyIsImxpbWl0IiwiY2FuY2VsIiwiYXV0b2NvbXBsZXRlIiwic2VhcmNoQXJvdW5kU2VydmljZSIsInBvc3QiLCJ0cmltIiwicmVzcG9uc2VfY2VudGVyIiwicGxhY2VfY2VudGVyIiwicGxhY2VfY2VudGVyX3JldHVybiIsInNhZ2FNaWRkbGV3YXJlIiwiY3JlYXRlU2FnYU1pZGRsZXdhcmUiLCJjcmVhdGVTdG9yZSIsImFwcGx5TWlkZGxld2FyZSIsInJ1biIsIkNhbmNlbFRva2VuIiwiYXhpb3MiLCJHRVQiLCJvcHRpb25zIiwicHJvbWlzZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiaG9zdF9uYW1lIiwiYXBpX2tleSIsImNhbmNlbFRva2VuIiwiZXhlY3V0b3IiLCJjIiwidGhlbiIsInJlcyIsImNhdGNoIiwiZXJyIiwibGF0bG5nIiwiaW5wdXQiLCJoYXNfY2hpbGRyZW4iLCJkaXN0YW5jZW1hdHJpeCIsIm9yaWdpbnMiLCJkZXN0aW5hdGlvbnMiLCJwbGFjZWlk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O0lBQ25DLE9BQU9ELHlEQUFHLENBQUN0USx1REFBTyxDQUFDSSxjQUFjLEVBQUU7TUFDakNxUixPQUFPLEVBQUUsR0FBR3ZHLE1BQU0sQ0FBQ00sTUFBTSxDQUFDdkMsUUFBUSxJQUFJaUMsTUFBTSxDQUFDTSxNQUFNLENBQUN0QyxTQUFTLEVBQUU7TUFDL0R3SSxZQUFZLEVBQUUsR0FBR3hHLE1BQU0sQ0FBQ08sV0FBVyxDQUFDeEMsUUFBUSxJQUFJaUMsTUFBTSxDQUFDTyxXQUFXLENBQUN2QyxTQUFTLEVBQUU7TUFDOUVxQyxPQUFPLEVBQUUsR0FBR0wsTUFBTSxDQUFDSyxPQUFPO0lBQzVCLENBQUMsRUFBRWdGLE9BQU8sQ0FBQztFQUNiLENBQUM7RUFDRHJELFlBQVksRUFBRUEsQ0FBQ3lFLE9BQU8sRUFBRXBCLE9BQU8sS0FBSztJQUNsQyxPQUFPRCx5REFBRyxDQUFDdFEsdURBQU8sQ0FBQ00sWUFBWSxFQUFFO01BQy9CcVI7SUFDRixDQUFDLEVBQUVwQixPQUFPLENBQUM7RUFDYixDQUFDO0VBQ0RxQixXQUFXLEVBQUVBLENBQUMzSSxRQUFRLEVBQUVDLFNBQVMsS0FBSztJQUNwQyxPQUFPcUUsNENBQUssQ0FBQ0MsR0FBRyxDQUFDLHVEQUF1RHZFLFFBQVEsUUFBUUMsU0FBUyxtRUFBNEMsQ0FBQztFQUNoSjtBQUNGLENBQUMsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Q0QscUQ7Ozs7Ozs7Ozs7O0FDQUEsMkQ7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsK0MiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7IiwiZXhwb3J0IGNvbnN0IEFQSV9VUkwgPSB7XHJcbiAgR0VPQ09ERTogXCIvZ2VvY29kZVwiLFxyXG4gIEFVVE9DT01QTEVURTogXCIvUGxhY2UvQXV0b2NvbXBsZXRlXCIsXHJcbiAgRElSRUNUSU9OOiBcIi9EaXJlY3Rpb25cIixcclxuICBESVNUQU5DRU1BVFJJWDogXCIvRGlzdGFuY2VNYXRyaXhcIixcclxuICBHT09HTEVfRU1CRUQ6IFwiaHR0cHM6Ly9tYXBzLmdvb2dsZS5jb20vbWFwcz96PTE3Jm91dHB1dD1lbWJlZFwiLFxyXG4gIFBMQUNFX0RFVEFJTDogXCIvUGxhY2UvRGV0YWlsXCIsXHJcbiAgV0VBVEhFUjpcImh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyXCIsXHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvcGFnZXMvX2FwcCcpXG4iLCJpbXBvcnQgUmVhY3QsIHsgRXJyb3JJbmZvIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICBleGVjT25jZSxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlLFxuICBOZXh0V2ViVml0YWxzTWV0cmljLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICcuLi9jbGllbnQvcm91dGVyJ1xuXG5leHBvcnQgeyBBcHBJbml0aWFsUHJvcHMgfVxuXG5leHBvcnQgeyBOZXh0V2ViVml0YWxzTWV0cmljIH1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dCA9IEFwcENvbnRleHRUeXBlPFJvdXRlcj5cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHM8UCA9IHt9PiA9IEFwcFByb3BzVHlwZTxSb3V0ZXIsIFA+XG5cbi8qKlxuICogYEFwcGAgY29tcG9uZW50IGlzIHVzZWQgZm9yIGluaXRpYWxpemUgb2YgcGFnZXMuIEl0IGFsbG93cyBmb3Igb3ZlcndyaXRpbmcgYW5kIGZ1bGwgY29udHJvbCBvZiB0aGUgYHBhZ2VgIGluaXRpYWxpemF0aW9uLlxuICogVGhpcyBhbGxvd3MgZm9yIGtlZXBpbmcgc3RhdGUgYmV0d2VlbiBuYXZpZ2F0aW9uLCBjdXN0b20gZXJyb3IgaGFuZGxpbmcsIGluamVjdGluZyBhZGRpdGlvbmFsIGRhdGEuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGFwcEdldEluaXRpYWxQcm9wcyh7XG4gIENvbXBvbmVudCxcbiAgY3R4LFxufTogQXBwQ29udGV4dCk6IFByb21pc2U8QXBwSW5pdGlhbFByb3BzPiB7XG4gIGNvbnN0IHBhZ2VQcm9wcyA9IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBjdHgpXG4gIHJldHVybiB7IHBhZ2VQcm9wcyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcDxQID0ge30sIENQID0ge30sIFMgPSB7fT4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8XG4gIFAgJiBBcHBQcm9wczxDUD4sXG4gIFNcbj4ge1xuICBzdGF0aWMgb3JpZ0dldEluaXRpYWxQcm9wcyA9IGFwcEdldEluaXRpYWxQcm9wc1xuICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzID0gYXBwR2V0SW5pdGlhbFByb3BzXG5cbiAgLy8gS2VwdCBoZXJlIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS5cbiAgLy8gV2hlbiBzb21lb25lIGVuZGVkIEFwcCB0aGV5IGNvdWxkIGNhbGwgYHN1cGVyLmNvbXBvbmVudERpZENhdGNoYC5cbiAgLy8gQGRlcHJlY2F0ZWQgVGhpcyBtZXRob2QgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gRXJyb3JzIGFyZSBjYXVnaHQgYXQgdGhlIHRvcCBsZXZlbFxuICBjb21wb25lbnREaWRDYXRjaChlcnJvcjogRXJyb3IsIF9lcnJvckluZm86IEVycm9ySW5mbyk6IHZvaWQge1xuICAgIHRocm93IGVycm9yXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyByb3V0ZXIsIENvbXBvbmVudCwgcGFnZVByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSB0aGlzXG4gICAgICAucHJvcHMgYXMgQXBwUHJvcHM8Q1A+XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbXBvbmVudFxuICAgICAgICB7Li4ucGFnZVByb3BzfVxuICAgICAgICB7XG4gICAgICAgICAgLy8gd2UgZG9uJ3QgYWRkIHRoZSBsZWdhY3kgVVJMIHByb3AgaWYgaXQncyB1c2luZyBub24tbGVnYWN5XG4gICAgICAgICAgLy8gbWV0aG9kcyBsaWtlIGdldFN0YXRpY1Byb3BzIGFuZCBnZXRTZXJ2ZXJTaWRlUHJvcHNcbiAgICAgICAgICAuLi4oIShfX05fU1NHIHx8IF9fTl9TU1ApID8geyB1cmw6IGNyZWF0ZVVybChyb3V0ZXIpIH0gOiB7fSlcbiAgICAgICAgfVxuICAgICAgLz5cbiAgICApXG4gIH1cbn1cblxubGV0IHdhcm5Db250YWluZXI6ICgpID0+IHZvaWRcbmxldCB3YXJuVXJsOiAoKSA9PiB2b2lkXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHdhcm5Db250YWluZXIgPSBleGVjT25jZSgoKSA9PiB7XG4gICAgY29uc29sZS53YXJuKFxuICAgICAgYFdhcm5pbmc6IHRoZSBcXGBDb250YWluZXJcXGAgaW4gXFxgX2FwcFxcYCBoYXMgYmVlbiBkZXByZWNhdGVkIGFuZCBzaG91bGQgYmUgcmVtb3ZlZC4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvYXBwLWNvbnRhaW5lci1kZXByZWNhdGVkYFxuICAgIClcbiAgfSlcblxuICB3YXJuVXJsID0gZXhlY09uY2UoKCkgPT4ge1xuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICBgV2FybmluZzogdGhlICd1cmwnIHByb3BlcnR5IGlzIGRlcHJlY2F0ZWQuIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3VybC1kZXByZWNhdGVkYFxuICAgIClcbiAgfSlcbn1cblxuLy8gQGRlcHJlY2F0ZWQgbm9vcCBmb3Igbm93IHVudGlsIHJlbW92YWxcbmV4cG9ydCBmdW5jdGlvbiBDb250YWluZXIocDogYW55KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuQ29udGFpbmVyKClcbiAgcmV0dXJuIHAuY2hpbGRyZW5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVVybChyb3V0ZXI6IFJvdXRlcikge1xuICAvLyBUaGlzIGlzIHRvIG1ha2Ugc3VyZSB3ZSBkb24ndCByZWZlcmVuY2VzIHRoZSByb3V0ZXIgb2JqZWN0IGF0IGNhbGwgdGltZVxuICBjb25zdCB7IHBhdGhuYW1lLCBhc1BhdGgsIHF1ZXJ5IH0gPSByb3V0ZXJcbiAgcmV0dXJuIHtcbiAgICBnZXQgcXVlcnkoKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcXVlcnlcbiAgICB9LFxuICAgIGdldCBwYXRobmFtZSgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiBwYXRobmFtZVxuICAgIH0sXG4gICAgZ2V0IGFzUGF0aCgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiBhc1BhdGhcbiAgICB9LFxuICAgIGJhY2s6ICgpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJvdXRlci5iYWNrKClcbiAgICB9LFxuICAgIHB1c2g6ICh1cmw6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiByb3V0ZXIucHVzaCh1cmwsIGFzKVxuICAgIH0sXG4gICAgcHVzaFRvOiAoaHJlZjogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgY29uc3QgcHVzaFJvdXRlID0gYXMgPyBocmVmIDogJydcbiAgICAgIGNvbnN0IHB1c2hVcmwgPSBhcyB8fCBocmVmXG5cbiAgICAgIHJldHVybiByb3V0ZXIucHVzaChwdXNoUm91dGUsIHB1c2hVcmwpXG4gICAgfSxcbiAgICByZXBsYWNlOiAodXJsOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcm91dGVyLnJlcGxhY2UodXJsLCBhcylcbiAgICB9LFxuICAgIHJlcGxhY2VUbzogKGhyZWY6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIGNvbnN0IHJlcGxhY2VSb3V0ZSA9IGFzID8gaHJlZiA6ICcnXG4gICAgICBjb25zdCByZXBsYWNlVXJsID0gYXMgfHwgaHJlZlxuXG4gICAgICByZXR1cm4gcm91dGVyLnJlcGxhY2UocmVwbGFjZVJvdXRlLCByZXBsYWNlVXJsKVxuICAgIH0sXG4gIH1cbn1cbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHsgQ29uZmlnUHJvdmlkZXIgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IEFwcCwgeyBDb250YWluZXIgfSBmcm9tICduZXh0L2FwcCc7XHJcbmltcG9ydCB2aV9WTiBmcm9tICdhbnRkL2xpYi9sb2NhbGUtcHJvdmlkZXIvdmlfVk4nO1xyXG5pbXBvcnQgcm9vdFNhZ2EgZnJvbSAnLi4vcmVkdXgvc2FnYXMvaW5kZXgnO1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IGNvbmZpZ3VyZVN0b3JlIGZyb20gJy4uL3JlZHV4L3N0b3JlQ29uZmlnJztcclxuaW1wb3J0ICdhbnRkL2Rpc3QvYW50ZC5jc3MnO1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9pbmRleC5zY3NzJztcclxuaW1wb3J0IHsgSGVsbWV0IH0gZnJvbSAncmVhY3QtaGVsbWV0JztcclxuY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSgpO1xyXG5zdG9yZS5ydW5TYWdhKHJvb3RTYWdhKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW5BcHAgZXh0ZW5kcyBBcHAge1xyXG5cdHJlbmRlcigpIHtcclxuXHRcdGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSA9IHRoaXMucHJvcHM7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuXHRcdFx0XHQ8Q29udGFpbmVyPlxyXG5cdFx0XHRcdFx0PEhlYWQ+XHJcblx0XHRcdFx0XHRcdDxtZXRhIGNoYXJTZXQ9XCJVVEYtOFwiIC8+XHJcblx0XHRcdFx0XHRcdHsvKiA8dGl0bGU+UGFya2luZyBMb3QgLSBMaXZlIE1hcDwvdGl0bGU+ICovfVxyXG5cdFx0XHRcdFx0XHQ8bWV0YVxyXG5cdFx0XHRcdFx0XHRcdG5hbWU9XCJ2aWV3cG9ydFwiXHJcblx0XHRcdFx0XHRcdFx0Y29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaGVpZ2h0PWRldmljZS1oZWlnaHQsIGluaXRpYWwtc2NhbGU9MS4wXCJcclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PGxpbmtcclxuXHRcdFx0XHRcdFx0XHRyZWw9XCJpY29uXCJcclxuXHRcdFx0XHRcdFx0XHRocmVmPVwiL3N0YXRpYy9pbWFnZXMvbG9nby1taW5pLnBuZ1wiXHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDxsaW5rXHJcblx0XHRcdFx0XHRcdFx0cmVsPVwic3R5bGVzaGVldFwiXHJcblx0XHRcdFx0XHRcdFx0aHJlZj1cImh0dHBzOi8vdXNlLmZvbnRhd2Vzb21lLmNvbS9yZWxlYXNlcy92NS4yLjAvY3NzL2FsbC5jc3NcIlxyXG5cdFx0XHRcdFx0XHRcdGludGVncml0eT1cInNoYTM4NC1oV1ZqZmx3RnhMNnNOem50aWgyN2JmeGtyMjdQbWJiSy9pU3ZKK2E0KzBvd1hxNzl2K2xzRmtXNTRiT0diaURRXCJcclxuXHRcdFx0XHRcdFx0XHRjcm9zc09yaWdpbj1cImFub255bW91c1wiXHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8L0hlYWQ+XHJcblx0XHRcdFx0XHQ8Q29uZmlnUHJvdmlkZXIgbG9jYWxlPXt2aV9WTn0+XHJcblx0XHRcdFx0XHRcdDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuXHRcdFx0XHRcdDwvQ29uZmlnUHJvdmlkZXI+XHJcblx0XHRcdFx0PC9Db250YWluZXI+XHJcblx0XHRcdDwvUHJvdmlkZXI+XHJcblx0XHQpO1xyXG5cdH1cclxufVxyXG4iLCJleHBvcnQgY29uc3RcclxuICBTSE9XX1ZJU0JMRV9CT1ggPSBcIkJPWDpTSE9XX1ZJU0lCTEVfQk9YXCIsXHJcblxyXG4gIFNFVF9SRURfTUFSS0VSID0gXCJNQVJLRVI6U0VUX1JFRF9NQVJLRVJcIixcclxuXHJcbiAgU0VUX0NPTExBUFNFRF9JTkZPX0JPWCA9IFwiSU5GT19CT1g6U0VUX0NPTExBUFNFRFwiLFxyXG5cclxuICBTRVRfUE9QVVBfUklHSFRfQ0xJQ0sgPSBcIlBPUFVQOlNFVF9QT1BVUFwiIiwiZXhwb3J0IGNvbnN0XHJcbiAgU0hPV19OQVZJR0FUSU9OX0JPWCA9IFwiQk9YOlNIT1dfTkFWSUdBVElPTl9CT1hcIixcclxuXHJcbiAgTkFWSUdBVElPTl9GUk9NX1JFUVVFU1QgPSBcIkxPQ0FUSU9OOk5BVklHQVRJT05fRlJPTV9SRVFVRVNUXCIsXHJcblxyXG4gIE5BVklHQVRJT05fVE9fUkVRVUVTVCA9IFwiTE9DQVRJT046TkFWSUdBVElPTl9UT19SRVFVRVNUXCIsXHJcblxyXG4gIE5BVklHQVRJT05fUkVRVUVTVCA9IFwiTE9DQVRJT046TkFWSUdBVElPTl9SRVFVRVNUXCIsXHJcbiAgTkFWSUdBVElPTl9TVUNDRVNTID0gXCJMT0NBVElPTjpOQVZJR0FUSU9OX1NVQ0NFU1NcIixcclxuICBOQVZJR0FUSU9OX0ZBSUwgPSBcIkxPQ0FUSU9OOk5BVklHQVRJT05fRkFJTFwiLFxyXG5cclxuICBTV0FQX1JFUVVFU1QgPSBcIkxPQ0FUSU9OOlNXQVBfUkVRVUVTVFwiLFxyXG5cclxuICBOQVZJR0FUSU9OX1NFTEVDVF9SRVNVTFRfUkVRVUVTVCA9IFwiTE9DQVRJT046U0VMRUNUX1JFU1VMVF9SRVFVRVNUXCIsXHJcbiAgTkFWSUdBVElPTl9TRUxFQ1RfUkVTVUxUX1NVQ0NFU1MgPSBcIkxPQ0FUSU9OOlNFTEVDVF9SRVNVTFRfU1VDQ0VTU1wiLFxyXG5cclxuICBDTEVBUl9SRVNVTFRfUkVRVUVTVCA9IFwiTE9DQVRJT046Q0xFQVJfUkVTVUxUX1JFUVVFU1RcIixcclxuXHJcbiAgQ0xFQVJfUkVRVUVTVCA9IFwiTE9DQVRJT046Q0xFQVJfUkVRVUVTVFwiLFxyXG5cclxuICBUWVBFX0lOUFVUID0gXCJUWVBFX0lOUFVUXCIsXHJcbiAgVFlQRV9MQVRMT05HID0gXCJUWVBFX0xBVExPTkdcIixcclxuICBJTkZPX1JFU1RBVVJBTlQgPSBcIklORk9fUkVTVEFVUkFOVFwiIiwiZXhwb3J0IGNvbnN0XHJcbiAgR0VUX0RFVEFJTF9CWV9JRF9SRVFVRVNUID0gXCJMT0NBVElPTjpHRVRfREVUQUlMX0lEX1JFUVVFU1RcIixcclxuICBHRVRfREVUQUlMX0JZX0lEX1NVQ0NFU1MgPSBcIkxPQ0FUSU9OOkdFVF9ERVRBSUxfSURfU1VDQ0VTU1wiLFxyXG5cclxuICBTRVRfTVlfTE9DQVRJT04gPSBcIkxPQ0FUSU9OOlNFVF9NWV9MT0NBVElPTlwiLFxyXG5cclxuICBHRVRfREVUQUlMX0JZX0xBVExOR19SRVFVRVNUID0gXCJMT0NBVElPTjpHRVRfREVUQUlMX0xBVExOR19SRVFVRVNUXCIsXHJcbiAgR0VUX0RFVEFJTF9CWV9MQVRMTkdfU1VDQ0VTUyA9IFwiTE9DQVRJT046R0VUX0RFVEFJTF9MQVRMTkdfU1VDQ0VTU1wiLFxyXG5cclxuICBSRVNFVF9MT0NBVElPTiA9IFwiTE9DQVRJT046UkVTRVRcIixcclxuICBHRVRfREVUQUlMX0FST1VORF9QTEFDRV9SRVFVRVNUID0gXCJMT0NBVElPTjpHRVRfREVUQUlMX0FST1VORF9QTEFDRV9SRVFVRVNUXCIsXHJcbiAgR0VUX0RFVEFJTF9BUk9VTkRfUExBQ0VfU1VDQ0VTUyA9IFwiTE9DQVRJT046R0VUX0RFVEFJTF9BUk9VTkRfUExBQ0VfU1VDQ0VTU1wiLFxyXG5cclxuICBTRVRfTUFQX1ZJRVdQT1JUX1JFUVVFU1QgPSBcIk1BUDpTRVRfVklFV1BPUlRfUkVRVUVTVFwiLFxyXG4gIFNFVF9DRU5URVJfTEFUTE5HX1JFUVVFU1QgPSBcIk1BUDpTRVRfQ0VOVEVSX0xBVExOR19SRVFVRVNUXCJcclxuIiwiZXhwb3J0IGNvbnN0XHJcbiAgICBTRUFSQ0hfUkVRVUVTVCA9IFwiU0VBUkNIOlNFQVJDSF9SRVFVRVNUXCIsXHJcbiAgICBTRUFSQ0hfU1VDQ0VTUyA9IFwiU0VBUkNIOlNFQVJDSF9TVUNDRVNTXCIsXHJcblxyXG4gICAgU0VBUkNIX0NMRUFSX1JFUVVFU1QgPSBcIlNFQVJDSDpDTEVBUl9SRVFVRVNUXCIsXHJcblxyXG4gICAgU0VBUkNIX0FST1VORF9SRVFVRVNUID0gXCJTRUFSQ0g6U0VBUkNIX0FST1VORF9SRVFVRVNUXCIsXHJcbiAgICBTRUFSQ0hfQVJPVU5EX1NVQ0NFU1MgPSBcIlNFQVJDSDpTRUFSQ0hfQVJPVU5EX1NVQ0NFU1NcIixcclxuXHJcbiAgICBDTEVBUl9TRUFSQ0hfQVJPVU5EX1JFUVVFU1QgPSBcIlNFQVJDSDpDTEVBUl9TRUFSQ0hfQVJPVU5EX1JFUVVFU1RcIixcclxuICAgIFNFTEVDVF9BUk9VTkRfUExBQ0VfTUFSS0VSID0gXCJTRUxFQ1RfQVJPVU5EX1BMQUNFX01BUktFUl9SRVFVRVNUXCIsXHJcblxyXG4gICAgU0VBUkNIX0hJU1RPUlkgPSBcIlNFQVJDSF9ISVNUT1JZXCIsXHJcblxyXG4gICAgU0VBUkNIX0RBVEEgPSBcIlNFQVJDSF9EQVRBXCIsXHJcbiAgICBSRVNUQVVSQU5UX0RBVEEgPSBcIlJFU1RBVVJBTlRfREFUQVwiLFxyXG4gICAgU0VBUkNIX0xPQ0FMX1NUT1JBR0UgPSBcIlNFQVJDSF9MT0NBTF9TVE9SQUdFXCIiLCJpbXBvcnQgKiBhcyBib3ggZnJvbSAnLi4vY29uc3RzL2JveFZpc2libGUnXHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgYm94X3Zpc2libGU6ICdzZWFyY2gnLFxyXG4gIGluZm9fYm94X2NvbGxhcHNlZDogZmFsc2UsXHJcbiAgcmVkX21hcmtlcl92aXNpYmxlOiBmYWxzZSxcclxuICBwb3NpdGlvbl9yZWRfbWFya2VyOiB7fSxcclxuICBwb3B1cF92aXNpYmxlOiBmYWxzZSxcclxuICBwb3NpdGlvbl9wb3B1cDoge30sXHJcbiAgdHlwZV9wb3B1cDogJ25vcm1hbCdcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYm94VmlzaWJsZVJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgYm94LlNIT1dfVklTQkxFX0JPWDpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGJveF92aXNpYmxlOiBhY3Rpb24udHlwZV92aXNpYmxlIH1cclxuICAgIGNhc2UgYm94LlNFVF9SRURfTUFSS0VSOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcmVkX21hcmtlcl92aXNpYmxlOiBhY3Rpb24udmlzaWJsZSwgcG9zaXRpb25fcmVkX21hcmtlcjogYWN0aW9uLmxvY2F0aW9uIH1cclxuICAgIGNhc2UgYm94LlNFVF9DT0xMQVBTRURfSU5GT19CT1g6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBpbmZvX2JveF9jb2xsYXBzZWQ6IGFjdGlvbi5jb2xsYXBzZWQgfVxyXG4gICAgY2FzZSBib3guU0VUX1BPUFVQX1JJR0hUX0NMSUNLOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcG9wdXBfdmlzaWJsZTogYWN0aW9uLnZpc2libGUsIHBvc2l0aW9uX3BvcHVwOiBhY3Rpb24ubG9jYXRpb24sIHR5cGVfcG9wdXA6IGFjdGlvbi50eXBlX3BvcHVwIH1cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlIH1cclxuICB9XHJcbn0iLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCBzZWFyY2hSZWR1Y2VyIGZyb20gJy4vc2VhcmNoUmVkdWNlcidcclxuaW1wb3J0IHBsYWNlUmVkdWNlciBmcm9tICcuL3BsYWNlUmVkdWNlcidcclxuaW1wb3J0IG5hdmlnYXRpb25SZWR1Y2VyIGZyb20gJy4vbmF2aWdhdGlvblJlZHVjZXInXHJcbmltcG9ydCBib3hWaXNpYmxlUmVkdWNlciBmcm9tICcuL2JveFZpc2libGVSZWR1Y2VyJ1xyXG5cclxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMgKHtcclxuICBzZWFyY2hSZWR1Y2VyLFxyXG4gIHBsYWNlUmVkdWNlcixcclxuICBuYXZpZ2F0aW9uUmVkdWNlcixcclxuICBib3hWaXNpYmxlUmVkdWNlclxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyOyIsImltcG9ydCAqIGFzIG5hdmlnYXRpb24gZnJvbSAnLi4vY29uc3RzL25hdmlnYXRpb24nXHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgZnJvbTogbnVsbCxcclxuICB0bzogbnVsbCxcclxuICByZXN1bHQ6IG51bGwsXHJcbiAgdGV4dF90b19pbnB1dDogJycsXHJcbiAgdGV4dF9mcm9tX2lucHV0OiAnJyxcclxuICByZXN1bHRfc2VsZWN0OiAnZmFzdGVzdCcsXHJcbiAgcmVzcG9uc2Vfc3RhdHVzOiB0cnVlLFxyXG4gIHR5cGVfaW5wdXQ6IHRydWUsXHJcbiAgdHlwZV9sYXRsb25nOiAnJyxcclxuICBpbmZvX3Jlc3RhdXJhbnQ6IGZhbHNlXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5hdmlnYXRpb25SZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblxyXG4gICAgY2FzZSBuYXZpZ2F0aW9uLk5BVklHQVRJT05fRlJPTV9SRVFVRVNUOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGZyb206IGFjdGlvbi5wbGFjZSxcclxuICAgICAgICB0ZXh0X2Zyb21faW5wdXQ6IGFjdGlvbi50ZXh0LFxyXG4gICAgICB9XHJcblxyXG4gICAgY2FzZSBuYXZpZ2F0aW9uLk5BVklHQVRJT05fVE9fUkVRVUVTVDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICB0bzogYWN0aW9uLnBsYWNlLFxyXG4gICAgICAgIHRleHRfdG9faW5wdXQ6IGFjdGlvbi50ZXh0LFxyXG4gICAgICB9XHJcblxyXG4gICAgY2FzZSBuYXZpZ2F0aW9uLlNXQVBfUkVRVUVTVDpcclxuICAgICAgY29uc3QgdG1wID0gc3RhdGUuZnJvbTtcclxuICAgICAgY29uc3QgdG1wX3RleHQgPSBzdGF0ZS50ZXh0X2Zyb21faW5wdXQ7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgZnJvbTogc3RhdGUudG8sXHJcbiAgICAgICAgdG86IHRtcCxcclxuICAgICAgICB0ZXh0X2Zyb21faW5wdXQ6IHN0YXRlLnRleHRfdG9faW5wdXQsXHJcbiAgICAgICAgdGV4dF90b19pbnB1dDogdG1wX3RleHRcclxuICAgICAgfVxyXG5cclxuICAgIGNhc2UgbmF2aWdhdGlvbi5OQVZJR0FUSU9OX1NVQ0NFU1M6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCByZXN1bHQ6IGFjdGlvbi5yZXN1bHQsIHJlc3BvbnNlX3N0YXR1czogdHJ1ZSB9XHJcblxyXG4gICAgY2FzZSBuYXZpZ2F0aW9uLk5BVklHQVRJT05fRkFJTDpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHJlc3VsdDogYWN0aW9uLnJlc3VsdCwgcmVzcG9uc2Vfc3RhdHVzOiBmYWxzZSB9XHJcblxyXG4gICAgY2FzZSBuYXZpZ2F0aW9uLk5BVklHQVRJT05fU0VMRUNUX1JFU1VMVF9SRVFVRVNUOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcmVzdWx0X3NlbGVjdDogYWN0aW9uLnJvYWRXYXkgfVxyXG5cclxuICAgIGNhc2UgbmF2aWdhdGlvbi5DTEVBUl9SRVNVTFRfUkVRVUVTVDpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHJlc3VsdDogbnVsbCB9XHJcblxyXG4gICAgY2FzZSBuYXZpZ2F0aW9uLkNMRUFSX1JFUVVFU1Q6XHJcbiAgICAgIHJldHVybiB7IC4uLmluaXRpYWxTdGF0ZSB9XHJcblxyXG4gICAgY2FzZSBuYXZpZ2F0aW9uLlRZUEVfSU5QVVQ6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCB0eXBlX2lucHV0OiBhY3Rpb24udHlwZV9pbnB1dCB9XHJcbiAgICBjYXNlIG5hdmlnYXRpb24uVFlQRV9MQVRMT05HOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgdHlwZV9sYXRsb25nOiBhY3Rpb24udHlwZV9sYXRsb25nIH1cclxuICAgIGNhc2UgbmF2aWdhdGlvbi5JTkZPX1JFU1RBVVJBTlQ6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBpbmZvX3Jlc3RhdXJhbnQ6IGFjdGlvbi5pbmZvX3Jlc3RhdXJhbnQgfVxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUgfVxyXG4gIH1cclxufSIsImltcG9ydCAqIGFzIHBsYWNlIGZyb20gJy4uL2NvbnN0cy9wbGFjZSdcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgY3VycmVudF9wbGFjZTogbnVsbCxcclxuICBuZWFyX3BsYWNlczogW10sXHJcbiAgY2VudGVyOiB7XHJcbiAgICBsYXRpdHVkZTogMjEuMDEzNzIyLFxyXG4gICAgbG9uZ2l0dWRlOiAxMDUuNzk4MjMyXHJcbiAgfSxcclxuICB2aWV3cG9ydDoge1xyXG4gICAgbGF0aXR1ZGU6IDIxLjAxMzcyMixcclxuICAgIGxvbmdpdHVkZTogMTA1Ljc5ODIzMixcclxuICAgIHpvb206IDEyXHJcbiAgfSxcclxuICBteV9sb2NhdGlvbjogbnVsbFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZWFyY2hSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIHBsYWNlLkdFVF9ERVRBSUxfQllfSURfU1VDQ0VTUzpcclxuICAgICAgY29uc3QgcGlkID0gYWN0aW9uLnBpZCB8fCBhY3Rpb24uZGF0YS5wbGFjZV9pZDtcclxuICAgICAgaWYgKHBpZCkge1xyXG4gICAgICAgIFJvdXRlci5wdXNoKHtcclxuICAgICAgICAgIHBhdGhuYW1lOiBgL2AsXHJcbiAgICAgICAgICBxdWVyeTogeyBwaWQ6IGAke3BpZH1gIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBSb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICBwYXRobmFtZTogYC9gLFxyXG4gICAgICAgICAgcXVlcnk6IHsgbG9jYXRpb246IGAke2FjdGlvbi5kYXRhLmdlb21ldHJ5LmxvY2F0aW9uLmxhdH0sJHthY3Rpb24uZGF0YS5nZW9tZXRyeS5sb2NhdGlvbi5sbmd9YCB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGN1cnJlbnRfcGxhY2U6IGFjdGlvbi5kYXRhLCBuZWFyX3BsYWNlczogYWN0aW9uLm5lYXJQbGFjZXMgfVxyXG5cclxuICAgIGNhc2UgcGxhY2UuUkVTRVRfTE9DQVRJT046XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBjdXJyZW50X3BsYWNlOiBpbml0aWFsU3RhdGUuY3VycmVudF9wbGFjZSwgbmVhcl9wbGFjZXM6IGluaXRpYWxTdGF0ZS5uZWFyX3BsYWNlcyB9XHJcblxyXG4gICAgY2FzZSBwbGFjZS5TRVRfTUFQX1ZJRVdQT1JUX1JFUVVFU1Q6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCB2aWV3cG9ydDogYWN0aW9uLnZpZXdwb3J0IH1cclxuXHJcbiAgICBjYXNlIHBsYWNlLlNFVF9DRU5URVJfTEFUTE5HX1JFUVVFU1Q6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBjZW50ZXI6IGFjdGlvbi5sYXRMbmcgfVxyXG5cclxuICAgIGNhc2UgcGxhY2UuR0VUX0RFVEFJTF9BUk9VTkRfUExBQ0VfU1VDQ0VTUzpcclxuICAgICAgY29uc3QgcGlkX2Fyb3VuZCA9IGFjdGlvbi5waWQgfHwgYWN0aW9uLmRhdGEucGxhY2VfaWQ7O1xyXG4gICAgICBpZiAocGlkX2Fyb3VuZCkge1xyXG4gICAgICAgIFJvdXRlci5wdXNoKHtcclxuICAgICAgICAgIHBhdGhuYW1lOiBgL2AsXHJcbiAgICAgICAgICBxdWVyeTogeyBwaWRfYXJvdW5kIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgY3VycmVudF9wbGFjZTogYWN0aW9uLmRhdGEsIG5lYXJfcGxhY2VzOiBhY3Rpb24ubmVhclBsYWNlcyB9XHJcbiAgICBcclxuICAgIGNhc2UgcGxhY2UuU0VUX01ZX0xPQ0FUSU9OOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbXlfbG9jYXRpb246IGFjdGlvbi5sYXRMbmcgfVxyXG5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlIH1cclxuICB9XHJcbn0iLCJpbXBvcnQgKiBhcyBzZWFyY2ggZnJvbSAnLi4vY29uc3RzL3NlYXJjaCdcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBwbGFjZXM6IFtdLFxyXG4gIGFyb3VuZF9wbGFjZXM6IFtdLFxyXG4gIGFyb3VuZF9wbGFjZV9zZWxlY3Q6IG51bGwsXHJcbiAgc2VhcmNoX2hpc3Rvcnk6IHRydWUsXHJcbiAgc2VhcmNoX2RhdGE6IFtdLFxyXG4gIHJlc3RhdXJhbnRfZGF0YTogW10sXHJcbiAgc2VhcmNoX2xvY2FsX3N0b3JhZ2U6IFtdXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNlYXJjaFJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2Ugc2VhcmNoLlNFQVJDSF9TVUNDRVNTOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcGxhY2VzOiBhY3Rpb24ucGxhY2VzIH1cclxuICAgIGNhc2Ugc2VhcmNoLlNFQVJDSF9BUk9VTkRfU1VDQ0VTUzpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGFyb3VuZF9wbGFjZXM6IGFjdGlvbi5hcm91bmRfcGxhY2VzLCBhcm91bmRfcGxhY2VfY2VudGVyOiBhY3Rpb24uY2VudGVyX2xvY2F0aW9uIH1cclxuICAgIGNhc2Ugc2VhcmNoLlNFQVJDSF9DTEVBUl9SRVFVRVNUOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcGxhY2VzOiBpbml0aWFsU3RhdGUucGxhY2VzIH1cclxuICAgIGNhc2Ugc2VhcmNoLkNMRUFSX1NFQVJDSF9BUk9VTkRfUkVRVUVTVDpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGFyb3VuZF9wbGFjZXM6IGluaXRpYWxTdGF0ZS5hcm91bmRfcGxhY2VzLCBhcm91bmRfcGxhY2Vfc2VsZWN0OiBudWxsIH1cclxuICAgIGNhc2Ugc2VhcmNoLlNFTEVDVF9BUk9VTkRfUExBQ0VfTUFSS0VSOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgYXJvdW5kX3BsYWNlX3NlbGVjdDogYWN0aW9uLnBsYWNlIH1cclxuICAgIGNhc2Ugc2VhcmNoLlNFQVJDSF9ISVNUT1JZOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgc2VhcmNoX2hpc3Rvcnk6IGFjdGlvbi5zZWFyY2hfaGlzdG9yeSB9XHJcbiAgICBjYXNlIHNlYXJjaC5TRUFSQ0hfREFUQTpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHNlYXJjaF9kYXRhOiBhY3Rpb24uc2VhcmNoX2RhdGEgfVxyXG4gICAgY2FzZSBzZWFyY2guUkVTVEFVUkFOVF9EQVRBOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcmVzdGF1cmFudF9kYXRhOiBhY3Rpb24ucmVzdGF1cmFudF9kYXRhIH1cclxuICAgIGNhc2Ugc2VhcmNoLlNFQVJDSF9MT0NBTF9TVE9SQUdFOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgc2VhcmNoX2xvY2FsX3N0b3JhZ2U6IGFjdGlvbi5zZWFyY2hfbG9jYWxfc3RvcmFnZSB9XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSB9XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgYWxsLCBmb3JrIH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcclxuaW1wb3J0IHNlYXJjaFNhZ2EgZnJvbScuL3NlYXJjaFNhZ2EnXHJcbmltcG9ydCBwbGFjZVNhZ2EgZnJvbSAnLi9wbGFjZVNhZ2EnO1xyXG5pbXBvcnQgbmF2aWdhdGlvblNhZ2EgZnJvbScuL25hdmlnYXRpb25TYWdhJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiByb290U2FnYSgpIHtcclxuICB5aWVsZCBhbGwoW1xyXG4gICAgZm9yayhzZWFyY2hTYWdhKSxcclxuICAgIGZvcmsocGxhY2VTYWdhKSxcclxuICAgIGZvcmsobmF2aWdhdGlvblNhZ2EpXHJcbiAgXSk7XHJcbn0iLCJpbXBvcnQgeyB0YWtlTGF0ZXN0LCBjYWxsLCBwdXQsIGFsbCB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XHJcbmltcG9ydCAqIGFzIG5hdmlnYXRpb24gZnJvbSAnLi4vY29uc3RzL25hdmlnYXRpb24nO1xyXG5pbXBvcnQgUmVxdWVzdCBmcm9tICcuLi8uLi91dGlscy9yZXF1ZXN0JztcclxuaW1wb3J0IHsgbWVzc2FnZSB9IGZyb20gJ2FudGQnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogbmF2aWdhdGlvblNhZ2EoKSB7XHJcbiAgeWllbGQgYWxsKFtcclxuICAgIHRha2VMYXRlc3QobmF2aWdhdGlvbi5OQVZJR0FUSU9OX1JFUVVFU1QsIG5hdmlnYXRpb25SZXF1ZXN0U2FnYSksXHJcbiAgXSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpcmVjdGlvblNlcnZpY2UocGFyYW1zKSB7XHJcbiAgcmV0dXJuIFJlcXVlc3QuZGlyZWN0aW9uKHBhcmFtcyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBuYXZpZ2F0aW9uUmVxdWVzdFNhZ2EoYWN0aW9uKSB7XHJcbiAgdHJ5IHsgIFxyXG4gICAgY29uc3QgeyBmcm9tX3BsYWNlLCB0b19wbGFjZSwgdmVoaWNsZSB9ID0gYWN0aW9uO1xyXG4gICAgbGV0IHBhcmFtcyA9IHtcclxuICAgICAgb3JpZ2luOiB7IGxhdGl0dWRlOiBmcm9tX3BsYWNlLmdlb21ldHJ5LmxvY2F0aW9uLmxhdCwgbG9uZ2l0dWRlOiBmcm9tX3BsYWNlLmdlb21ldHJ5LmxvY2F0aW9uLmxuZyB9LFxyXG4gICAgICBkZXN0aW5hdGlvbjogeyBsYXRpdHVkZTogdG9fcGxhY2UuZ2VvbWV0cnkubG9jYXRpb24ubGF0LCBsb25naXR1ZGU6IHRvX3BsYWNlLmdlb21ldHJ5LmxvY2F0aW9uLmxuZyB9LFxyXG4gICAgICB2ZWhpY2xlXHJcbiAgICB9XHJcbiAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwoZGlyZWN0aW9uU2VydmljZSwgcGFyYW1zKTtcclxuXHJcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09IDIwMCAmJiByZXNwb25zZS5kYXRhLnJvdXRlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGNvbnN0IHNob3J0ZXN0ID0gcmVzcG9uc2UuZGF0YT8ucm91dGVzPy5zb3J0KChyMSxyMikgPT4ge1xyXG4gICAgICAgIHJldHVybiByMS5sZWdzWzBdLmRpc3RhbmNlLnZhbHVlIC0gcjIubGVnc1swXS5kaXN0YW5jZS52YWx1ZTtcclxuICAgICAgfSlbMF07XHJcbiAgICAgIGNvbnN0IGZhc3Rlc3QgPSByZXNwb25zZS5kYXRhPy5yb3V0ZXM/LnNvcnQoKHIxLHIyKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHIxLmxlZ3NbMF0uZHVyYXRpb24udmFsdWUgLSByMi5sZWdzWzBdLmR1cmF0aW9uLnZhbHVlO1xyXG4gICAgICB9KVswXTtcclxuICAgICAgY29uc3QgcmVzdWx0ID0ge1xyXG4gICAgICAgIGZhc3Rlc3Q6IFtmYXN0ZXN0XSxcclxuICAgICAgICBzaG9ydGVzdDogW3Nob3J0ZXN0XVxyXG4gICAgICB9O1xyXG4gICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgIHR5cGU6IG5hdmlnYXRpb24uTkFWSUdBVElPTl9TVUNDRVNTLFxyXG4gICAgICAgIHJlc3VsdDogcmVzdWx0XHJcbiAgICAgIH0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBtZXNzYWdlLmVycm9yKFwiS2jDtG5nIHTDrG0gdGjhuqV5IMSRxrDhu51uZyDEkWkgIVwiKTtcclxuICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICB0eXBlOiBuYXZpZ2F0aW9uLk5BVklHQVRJT05fRkFJTCxcclxuICAgICAgICByZXN1bHQ6IG51bGxcclxuICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIG1lc3NhZ2UuZXJyb3IoXCJLaMO0bmcgdMOsbSB0aOG6pXkgxJHGsOG7nW5nIMSRaSAhXCIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogbmF2aWdhdGlvbi5OQVZJR0FUSU9OX0ZBSUwsXHJcbiAgICAgIHJlc3VsdDogbnVsbFxyXG4gICAgfSlcclxuICAgIHRocm93IGVycm9yO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyB0YWtlTGF0ZXN0LCBjYWxsLCBwdXQsIGFsbCB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XHJcbmltcG9ydCAqIGFzIHBsYWNlIGZyb20gJy4uL2NvbnN0cy9wbGFjZSc7XHJcbmltcG9ydCBSZXF1ZXN0IGZyb20gJy4uLy4uL3V0aWxzL3JlcXVlc3QnO1xyXG5pbXBvcnQgeyBtZXNzYWdlIH0gZnJvbSAnYW50ZCdcclxuaW1wb3J0IHsgc2VhcmNoU2VydmljZSB9IGZyb20gJy4vc2VhcmNoU2FnYSdcclxuaW1wb3J0IEF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHBsYWNlU2FnYSgpIHtcclxuICB5aWVsZCBhbGwoW1xyXG4gICAgdGFrZUxhdGVzdChwbGFjZS5HRVRfREVUQUlMX0JZX0lEX1JFUVVFU1QsIGdldERldGFpbElkU2FnYSksXHJcbiAgICB0YWtlTGF0ZXN0KHBsYWNlLkdFVF9ERVRBSUxfQllfTEFUTE5HX1JFUVVFU1QsIGdldERldGFpbExhdExuZ1NhZ2EpLFxyXG4gICAgdGFrZUxhdGVzdChwbGFjZS5HRVRfREVUQUlMX0FST1VORF9QTEFDRV9SRVFVRVNULCBnZXREZXRhaWxBcm91bmRQbGFjZVNhZ2EpXHJcbiAgXSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXREZXRhaWxJZFNlcnZpY2UocGlkKSB7XHJcbiAgcmV0dXJuIFJlcXVlc3QucGxhY2VfZGV0YWlsKHBpZCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXREZXRhaWxMYXRMbmdTZXJ2aWNlKGxhdExuZykge1xyXG4gIHJldHVybiBSZXF1ZXN0Lmdlb2NvZGUobGF0TG5nKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldERldGFpbEFyb3VuZFBsYWNlU2VydmljZShpZCkge1xyXG4gIHJldHVybiBBeGlvcy5nZXQoYGh0dHBzOi8vbmFwaS5nb29uZy5pby92MS9tYXJrZXIvZ2V0X21hcmtlcl9kZXRhaWwvJHtpZH1gKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGdldERldGFpbElkU2FnYShhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKGdldERldGFpbElkU2VydmljZSwgYWN0aW9uLnBpZCk7XHJcblxyXG4gICAgY29uc3QgbGF0TG5nID0ge1xyXG4gICAgICBsYXRpdHVkZTogcmVzcG9uc2UuZGF0YS5yZXN1bHQuZ2VvbWV0cnkubG9jYXRpb24ubGF0LFxyXG4gICAgICBsb25naXR1ZGU6IHJlc3BvbnNlLmRhdGEucmVzdWx0Lmdlb21ldHJ5LmxvY2F0aW9uLmxuZ1xyXG4gICAgfVxyXG4gICAgY29uc3QgZ2V0QnlMYXRMbmcgPSB5aWVsZCBjYWxsKGdldERldGFpbExhdExuZ1NlcnZpY2UsIGxhdExuZyk7XHJcbiAgICBpZiAocmVzcG9uc2UuZGF0YS5zdGF0dXMgPT0gJ09LJyAmJiBnZXRCeUxhdExuZy5kYXRhLnJlc3VsdHMubGVuZ3RoID4gMCkge1xyXG4gICAgICBjb25zdCBsb2NhdGlvbiA9IHJlc3BvbnNlLmRhdGEucmVzdWx0Lmdlb21ldHJ5LmxvY2F0aW9uLmxhdCArIFwiLFwiICsgcmVzcG9uc2UuZGF0YS5yZXN1bHQuZ2VvbWV0cnkubG9jYXRpb24ubG5nO1xyXG4gICAgICBjb25zdCByZXNwb25zZV9zZWFyY2ggPSB5aWVsZCBjYWxsKHNlYXJjaFNlcnZpY2UsIHJlc3BvbnNlLmRhdGEucmVzdWx0Lm5hbWUsIGxvY2F0aW9uLCAxMSwgMTApO1xyXG4gICAgICBjb25zdCBuZWFyX3BsYWNlcyA9IHJlc3BvbnNlX3NlYXJjaC5kYXRhLnByZWRpY3Rpb25zPy5maWx0ZXIoaSA9PiBpLnBsYWNlX2lkICE9PSBhY3Rpb24ucGlkKTtcclxuICAgICAgeWllbGQgcHV0KHsgdHlwZTogcGxhY2UuR0VUX0RFVEFJTF9CWV9JRF9TVUNDRVNTLCBkYXRhOiByZXNwb25zZS5kYXRhLnJlc3VsdCwgbmVhclBsYWNlczogbmVhcl9wbGFjZXMsIHBpZDogYWN0aW9uLnBpZCB9KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbWVzc2FnZS5lcnJvcignS2jDtG5nIHTDrG0gdGjhuqV5IMSR4buLYSDEkWnhu4NtICEnKVxyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICB0aHJvdyBlcnJvclxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIGdldERldGFpbExhdExuZ1NhZ2EoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChnZXREZXRhaWxMYXRMbmdTZXJ2aWNlLCBhY3Rpb24ubGF0TG5nKTtcclxuICAgIGlmIChyZXNwb25zZS5kYXRhLnN0YXR1cyA9PSAnT0snICYmIHJlc3BvbnNlLmRhdGEucmVzdWx0cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGNvbnN0IHBsYWNlX3JldHVybiA9IHJlc3BvbnNlLmRhdGEucmVzdWx0c1swXTtcclxuICAgICAgY29uc3QgbmFtZV9wbGFjZSA9IHBsYWNlX3JldHVybi5hZGRyZXNzX2NvbXBvbmVudHNbMF0ubG9uZ19uYW1lO1xyXG5cclxuICAgICAgY29uc3QgbG9jYXRpb24gPSBwbGFjZV9yZXR1cm4uZ2VvbWV0cnkubG9jYXRpb24ubGF0ICsgXCIsXCIgKyBwbGFjZV9yZXR1cm4uZ2VvbWV0cnkubG9jYXRpb24ubG5nO1xyXG4gICAgICBjb25zdCByZXNwb25zZV9zZWFyY2ggPSB5aWVsZCBjYWxsKHNlYXJjaFNlcnZpY2UsIG5hbWVfcGxhY2UsIGxvY2F0aW9uLCAxMSwgMTApO1xyXG4gICAgICBjb25zdCBuZWFyX3BsYWNlcyA9IHJlc3BvbnNlX3NlYXJjaC5kYXRhLnByZWRpY3Rpb25zPy5maWx0ZXIoaSA9PiBpLnBsYWNlX2lkICE9PSBwbGFjZV9yZXR1cm4ucGxhY2VfaWQpO1xyXG4gICAgICBjb25zdCByZXR1cm5fZGF0YSA9IHtcclxuICAgICAgICAuLi5wbGFjZV9yZXR1cm4sXHJcbiAgICAgICAgbmFtZTogbmFtZV9wbGFjZSxcclxuICAgICAgICBmb3JtYXR0ZWRfYWRkcmVzczogZ2V0QWRkcmVzc0dlb2NvZGUocGxhY2VfcmV0dXJuKVxyXG4gICAgICB9XHJcbiAgICAgIHlpZWxkIHB1dCh7IHR5cGU6IHBsYWNlLkdFVF9ERVRBSUxfQllfSURfU1VDQ0VTUywgZGF0YTogcmV0dXJuX2RhdGEsIG5lYXJQbGFjZXM6IG5lYXJfcGxhY2VzIH0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBtZXNzYWdlLmVycm9yKCdLaMO0bmcgdMOsbSB0aOG6pXkgxJHhu4thIMSRaeG7g20gIScpXHJcbiAgICB9XHJcblxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICB0aHJvdyBlcnJvclxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIGdldERldGFpbEFyb3VuZFBsYWNlU2FnYShhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKGdldERldGFpbEFyb3VuZFBsYWNlU2VydmljZSwgYWN0aW9uLmlkKTtcclxuICAgIGNvbnN0IGRhdGEgPSByZXNwb25zZS5kYXRhLmRhdGE7XHJcbiAgICBpZiAoZGF0YSkge1xyXG4gICAgICBjb25zdCByZXR1cm5fZGF0YSA9IHtcclxuICAgICAgICAuLi5kYXRhLFxyXG4gICAgICAgIHBsYWNlX2lkOiBkYXRhLl9pZCxcclxuICAgICAgICBnZW9tZXRyeToge1xyXG4gICAgICAgICAgbG9jYXRpb246IHtcclxuICAgICAgICAgICAgbGF0OiBOdW1iZXIoZGF0YS5sbmdfbGF0WzFdKSxcclxuICAgICAgICAgICAgbG5nOiBOdW1iZXIoZGF0YS5sbmdfbGF0WzBdKSxcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGZvcm1hdHRlZF9hZGRyZXNzOiBkYXRhLmRlc2NyaXB0aW9uLmFkZHJlc3NcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBuYW1lX3BsYWNlID0gcmV0dXJuX2RhdGEubmFtZTtcclxuICAgICAgY29uc3QgbG9jYXRpb24gPSByZXR1cm5fZGF0YS5nZW9tZXRyeS5sb2NhdGlvbi5sYXQgKyBcIixcIiArIHJldHVybl9kYXRhLmdlb21ldHJ5LmxvY2F0aW9uLmxuZztcclxuICAgICAgY29uc3QgcmVzcG9uc2Vfc2VhcmNoID0geWllbGQgY2FsbChzZWFyY2hTZXJ2aWNlLCBuYW1lX3BsYWNlLCBsb2NhdGlvbiwgMTAsIDEwKTtcclxuICAgICAgY29uc3QgbmVhcl9wbGFjZXMgPSByZXNwb25zZV9zZWFyY2guZGF0YS5wcmVkaWN0aW9ucztcclxuICAgICAgeWllbGQgcHV0KHsgdHlwZTogcGxhY2UuR0VUX0RFVEFJTF9BUk9VTkRfUExBQ0VfU1VDQ0VTUywgZGF0YTogcmV0dXJuX2RhdGEsIG5lYXJQbGFjZXM6IG5lYXJfcGxhY2VzIH0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBtZXNzYWdlLmVycm9yKCdLaMO0bmcgdMOsbSB0aOG6pXkgxJHhu4thIMSRaeG7g20gIScpXHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHRocm93IGVycm9yXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWRkcmVzc0dlb2NvZGUocGxhY2UpIHtcclxuICBsZXQgcmVzdWx0ID0gW107XHJcbiAgcGxhY2UuYWRkcmVzc19jb21wb25lbnRzLnNsaWNlKDEpLm1hcChpdGVtID0+IHtcclxuICAgIHJlc3VsdC5wdXNoKGl0ZW0ubG9uZ19uYW1lKTtcclxuICB9KVxyXG4gIHJldHVybiByZXN1bHQuam9pbignLCcpXHJcbn0iLCJpbXBvcnQgeyB0YWtlTGF0ZXN0LCBjYWxsLCBwdXQsIGFsbCB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XHJcbmltcG9ydCAqIGFzIHNlYXJjaCBmcm9tICcuLi9jb25zdHMvc2VhcmNoJztcclxuaW1wb3J0IFJlcXVlc3QgZnJvbSAnLi4vLi4vdXRpbHMvcmVxdWVzdCc7XHJcbmltcG9ydCBBeGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IG1lc3NhZ2UgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgZ2V0RGV0YWlsTGF0TG5nU2VydmljZSwgZ2V0QWRkcmVzc0dlb2NvZGUgfSBmcm9tICcuL3BsYWNlU2FnYSdcclxuXHJcbmxldCBzZWFyY2hSZXF1ZXN0ID0gbnVsbDtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHNlYXJjaFNhZ2EoKSB7XHJcbiAgeWllbGQgYWxsKFtcclxuICAgIHRha2VMYXRlc3Qoc2VhcmNoLlNFQVJDSF9SRVFVRVNULCBzZWFyY2hSZXF1ZXN0U2FnYSksXHJcbiAgICB0YWtlTGF0ZXN0KHNlYXJjaC5TRUFSQ0hfQVJPVU5EX1JFUVVFU1QsIHNlYXJjaEFyb3VuZFNhZ2EpLFxyXG5cclxuICBdKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFNlcnZpY2UocXVlcnksIGxvY2F0aW9uLCByYWRpdXMsIGxpbWl0KSB7XHJcbiAgaWYgKHNlYXJjaFJlcXVlc3QpIHNlYXJjaFJlcXVlc3QuY2FuY2VsKCk7XHJcbiAgc2VhcmNoUmVxdWVzdCA9IFJlcXVlc3QuYXV0b2NvbXBsZXRlKHF1ZXJ5LCBsb2NhdGlvbiwgcmFkaXVzLCBsaW1pdCk7XHJcbiAgcmV0dXJuIHNlYXJjaFJlcXVlc3Q7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNlYXJjaEFyb3VuZFNlcnZpY2UobG9jYXRpb24sIHpvb20pIHtcclxuICByZXR1cm4gQXhpb3MucG9zdCgnaHR0cHM6Ly9uYXBpLmdvb25nLmlvL3YxL21hcmtlci9nZXRfbWFya2Vyc19pbl9iZWFyJywge1xyXG4gICAgXCJsYXRcIjogbG9jYXRpb24ubGF0LFxyXG4gICAgXCJsbmdcIjogbG9jYXRpb24ubG5nLFxyXG4gICAgXCJkaXN0YW5jZVwiOiAxMDAwLFxyXG4gICAgXCJ0eXBlX2NvZGVcIjogW1wiU1VHR0VTVElPTlwiXSwgLy9vciBcImNhdF9jb2RlXCI6W1wiR1RfU1RBVElDXCJdXHJcbiAgICBcImJlYXJpbmdcIjogMCxcclxuICAgIFwiYW5nbGVcIjogMzYwLFxyXG4gICAgXCJsaW1pdFwiOiA1MCxcclxuICAgIFwicGFnZVwiOiAwLFxyXG4gICAgXCJ6b29tXCI6IHpvb21cclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHNlYXJjaFJlcXVlc3RTYWdhKGFjdGlvbikge1xyXG4gIGlmIChhY3Rpb24ucXVlcnkudHJpbSgpID09PSAnJykge1xyXG4gICAgeWllbGQgcHV0KHsgdHlwZTogc2VhcmNoLlNFQVJDSF9TVUNDRVNTLCBwbGFjZXM6IFtdIH0pO1xyXG4gIH1cclxuICBlbHNlIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChzZWFyY2hTZXJ2aWNlLCBhY3Rpb24ucXVlcnksIGFjdGlvbi5sb2NhdGlvbik7XHJcbiAgICAgIGlmIChyZXNwb25zZS5kYXRhLnN0YXR1cyA9PSAnT0snKSB7XHJcbiAgICAgICAgY29uc3QgcGxhY2VzID0gcmVzcG9uc2UuZGF0YS5wcmVkaWN0aW9ucyB8fCBbXTtcclxuICAgICAgICB5aWVsZCBwdXQoeyB0eXBlOiBzZWFyY2guU0VBUkNIX1NVQ0NFU1MsIHBsYWNlczogcGxhY2VzIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7IHR5cGU6IHNlYXJjaC5TRUFSQ0hfU1VDQ0VTUywgcGxhY2VzOiBbXSB9KTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBzZWFyY2hBcm91bmRTYWdhKGFjdGlvbikge1xyXG4gIGlmIChhY3Rpb24ubG9jYXRpb24ubGF0ICYmIGFjdGlvbi5sb2NhdGlvbi5sbmcpIHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChzZWFyY2hBcm91bmRTZXJ2aWNlLCBhY3Rpb24ubG9jYXRpb24sIGFjdGlvbi56b29tKTtcclxuICAgIGlmIChyZXNwb25zZS5kYXRhLmxlbmd0aCA+IDApIHtcclxuICAgICAgY29uc3QgcmVzcG9uc2VfY2VudGVyID0geWllbGQgY2FsbChnZXREZXRhaWxMYXRMbmdTZXJ2aWNlLCB7IGxhdGl0dWRlOiBhY3Rpb24ubG9jYXRpb24ubGF0LCBsb25naXR1ZGU6IGFjdGlvbi5sb2NhdGlvbi5sbmcgfSk7XHJcbiAgICAgIGNvbnN0IHBsYWNlX2NlbnRlciA9IHJlc3BvbnNlX2NlbnRlci5kYXRhLnJlc3VsdHNbMF07XHJcbiAgICAgIGNvbnN0IHBsYWNlX2NlbnRlcl9yZXR1cm4gPSB7XHJcbiAgICAgICAgLi4ucGxhY2VfY2VudGVyLFxyXG4gICAgICAgIG5hbWU6IHBsYWNlX2NlbnRlci5hZGRyZXNzX2NvbXBvbmVudHNbMF0ubG9uZ19uYW1lLFxyXG4gICAgICAgIGZvcm1hdHRlZF9hZGRyZXNzOiBnZXRBZGRyZXNzR2VvY29kZShwbGFjZV9jZW50ZXIpXHJcbiAgICAgIH1cclxuICAgICAgeWllbGQgcHV0KHsgdHlwZTogc2VhcmNoLlNFQVJDSF9BUk9VTkRfU1VDQ0VTUywgYXJvdW5kX3BsYWNlczogcmVzcG9uc2UuZGF0YSwgY2VudGVyX2xvY2F0aW9uOiBwbGFjZV9jZW50ZXJfcmV0dXJuIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbWVzc2FnZS5lcnJvcignS2jDtG5nIGPDsyDEkeG7i2EgxJFp4buDbSBuw6BvIHF1YW5oIMSRw6J5ICEnKVxyXG4gICAgfVxyXG4gIH1cclxufSIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCdcclxuaW1wb3J0IHJvb3RSZWR1Y2VyIGZyb20gJy4vcmVkdWNlcnMvaW5kZXgnXHJcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSBmcm9tICdyZWR1eC1zYWdhJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29uZmlndXJlU3RvcmUoKSB7XHJcbiAgY29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpXHJcbiAgcmV0dXJuIHtcclxuICAgIC4uLmNyZWF0ZVN0b3JlKHJvb3RSZWR1Y2VyLCBhcHBseU1pZGRsZXdhcmUoc2FnYU1pZGRsZXdhcmUpKSxcclxuICAgIHJ1blNhZ2E6IHNhZ2FNaWRkbGV3YXJlLnJ1bixcclxuICB9XHJcbiAgcmV0dXJuIHtcclxuICAgIC4uLmNyZWF0ZVN0b3JlKHJvb3RSZWR1Y2VyLCBhcHBseU1pZGRsZXdhcmUoc2FnYU1pZGRsZXdhcmUpKSxcclxuICAgIHJ1blNhZ2E6IHNhZ2FNaWRkbGV3YXJlLnJ1bixcclxuICB9XHJcbn0iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmNvbnN0IHsgQ2FuY2VsVG9rZW4gfSA9IGF4aW9zO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdFVCA9ICh1cmwsIHBhcmFtcywgb3B0aW9ucyA9IHt9KSA9PiB7XHJcbiAgbGV0IGNhbmNlbDtcclxuICBsZXQgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGF4aW9zLmdldChgJHtvcHRpb25zLmhvc3RfbmFtZSB8fCBBUElfR0FURVdBWV9VUkx9JHt1cmx9YCwge1xyXG4gICAgICBwYXJhbXM6IHtcclxuICAgICAgICAuLi5wYXJhbXMsXHJcbiAgICAgICAgYXBpX2tleTogb3B0aW9ucy5hcGlfa2V5IHx8IEFQSV9LRVlcclxuICAgICAgfSxcclxuICAgICAgY2FuY2VsVG9rZW46IG5ldyBDYW5jZWxUb2tlbihmdW5jdGlvbiBleGVjdXRvcihjKSB7XHJcbiAgICAgICAgY2FuY2VsID0gYztcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgcmVzb2x2ZShyZXMpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgfSk7XHJcbiAgfSk7XHJcbiAgcHJvbWlzZS5jYW5jZWwgPSBjYW5jZWw7XHJcbiAgcmV0dXJuIHByb21pc2U7XHJcbn0gXHJcbiIsImltcG9ydCB7IEdFVCB9IGZyb20gXCIuL2Jhc2VfcmVxdWVzdFwiO1xyXG5pbXBvcnQgeyBBUElfVVJMIH0gZnJvbSBcIi4uL2NvbnN0cy9hcGlfdXJsXCI7XHJcbmltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGdlb2NvZGU6IChsb2NhdGlvbiwgb3B0aW9ucykgPT4ge1xyXG4gICAgcmV0dXJuIEdFVChBUElfVVJMLkdFT0NPREUsIHtcclxuICAgICAgbGF0bG5nOiBgJHtsb2NhdGlvbi5sYXRpdHVkZX0sJHtsb2NhdGlvbi5sb25naXR1ZGV9YFxyXG4gICAgfSwgb3B0aW9ucyk7XHJcbiAgfSxcclxuICBhdXRvY29tcGxldGU6IChpbnB1dCwgbG9jYXRpb24sIGxpbWl0LCByYWRpdXMsIGhhc19jaGlsZHJlbiwgb3B0aW9ucykgPT4ge1xyXG4gICAgcmV0dXJuIEdFVChBUElfVVJMLkFVVE9DT01QTEVURSwge1xyXG4gICAgICBpbnB1dCxcclxuICAgICAgbG9jYXRpb24sXHJcbiAgICAgIHJhZGl1czogcmFkaXVzIHx8IDMwMDAsXHJcbiAgICAgIGxpbWl0OiBsaW1pdCB8fCAxMCxcclxuICAgICAgaGFzX2NoaWxkcmVuOiBoYXNfY2hpbGRyZW4gfHwgZmFsc2VcclxuICAgIH0sIG9wdGlvbnMpO1xyXG4gIH0sXHJcbiAgZGlyZWN0aW9uOiAocGFyYW1zLCBvcHRpb25zKSA9PiB7XHJcbiAgICByZXR1cm4gR0VUKEFQSV9VUkwuRElSRUNUSU9OLCB7XHJcbiAgICAgIG9yaWdpbjogYCR7cGFyYW1zLm9yaWdpbi5sYXRpdHVkZX0sJHtwYXJhbXMub3JpZ2luLmxvbmdpdHVkZX1gLFxyXG4gICAgICBkZXN0aW5hdGlvbjogYCR7cGFyYW1zLmRlc3RpbmF0aW9uLmxhdGl0dWRlfSwke3BhcmFtcy5kZXN0aW5hdGlvbi5sb25naXR1ZGV9YCxcclxuICAgICAgdmVoaWNsZTogcGFyYW1zLnZlaGljbGUgfHwgJ2NhcidcclxuICAgIH0sIG9wdGlvbnMpO1xyXG4gIH0sXHJcbiAgZGlzdGFuY2VtYXRyaXg6IChwYXJhbXMsIG9wdGlvbnMpID0+IHtcclxuICAgIHJldHVybiBHRVQoQVBJX1VSTC5ESVNUQU5DRU1BVFJJWCwge1xyXG4gICAgICBvcmlnaW5zOiBgJHtwYXJhbXMub3JpZ2luLmxhdGl0dWRlfSwke3BhcmFtcy5vcmlnaW4ubG9uZ2l0dWRlfWAsXHJcbiAgICAgIGRlc3RpbmF0aW9uczogYCR7cGFyYW1zLmRlc3RpbmF0aW9uLmxhdGl0dWRlfSwke3BhcmFtcy5kZXN0aW5hdGlvbi5sb25naXR1ZGV9YCxcclxuICAgICAgdmVoaWNsZTogYCR7cGFyYW1zLnZlaGljbGV9YFxyXG4gICAgfSwgb3B0aW9ucyk7XHJcbiAgfSxcclxuICBwbGFjZV9kZXRhaWw6IChwbGFjZWlkLCBvcHRpb25zKSA9PiB7XHJcbiAgICByZXR1cm4gR0VUKEFQSV9VUkwuUExBQ0VfREVUQUlMLCB7XHJcbiAgICAgIHBsYWNlaWRcclxuICAgIH0sIG9wdGlvbnMpO1xyXG4gIH0sXHJcbiAgZ2V0X3dlYXRoZXI6IChsYXRpdHVkZSwgbG9uZ2l0dWRlKSA9PiB7XHJcbiAgICByZXR1cm4gQXhpb3MuZ2V0KGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9sYXQ9JHtsYXRpdHVkZX0mbG9uPSR7bG9uZ2l0dWRlfSZ1bml0cz1tZXRyaWMmbGFuZz12aSZhcHBpZD0ke1dFQVRIRVJfQVBJfWApXHJcbiAgfVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGQvbGliL2NvbmZpZy1wcm92aWRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkL2xpYi9sb2NhbGUtcHJvdmlkZXIvdmlfVk5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZC9saWIvbWVzc2FnZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaGVsbWV0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2FcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYS9lZmZlY3RzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=