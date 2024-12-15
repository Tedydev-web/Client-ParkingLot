webpackHotUpdate_N_E(1,{

/***/ "./components/DetailsRestaurant.jsx":
/*!******************************************!*\
  !*** ./components/DetailsRestaurant.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/request */ "./utils/request.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _utils_image_type_location__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/image_type_location */ "./utils/image_type_location.js");
/* harmony import */ var _redux_actions_navigation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../redux/actions/navigation */ "./redux/actions/navigation.js");
/* harmony import */ var _redux_actions_place__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../redux/actions/place */ "./redux/actions/place.js");
/* harmony import */ var _redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../redux/actions/boxVisble */ "./redux/actions/boxVisble.js");
/* harmony import */ var _redux_sagas_placeSaga__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../redux/sagas/placeSaga */ "./redux/sagas/placeSaga.js");
/* harmony import */ var _redux_actions_search__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../redux/actions/search */ "./redux/actions/search.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_13__);


var _s = $RefreshSig$();
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }















var DetailsRestaurant = function DetailsRestaurant(props) {
  _s();
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
    inputValue = _useState[0],
    setInputValue = _useState[1];
  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
    autocompleteResults = _useState2[0],
    setAutocompleteResults = _useState2[1];
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
    suggestions = _useState3[0],
    setSuggestions = _useState3[1];
  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
    showSuggestions = _useState4[0],
    setShowSuggestions = _useState4[1];
  var inputRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
    isTooltipVisible = _useState5[0],
    setTooltipVisible = _useState5[1];
  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
    resDataAPI = _useState6[0],
    setResDataAPI = _useState6[1];
  var toggleTooltip = function toggleTooltip() {
    setTooltipVisible(!isTooltipVisible);
  };
  var tooltipRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  var triggerRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  var handleClickOutside = function handleClickOutside(event) {
    if (tooltipRef.current && !tooltipRef.current.contains(event.target) && !triggerRef.current.contains(event.target)) {
      setTooltipVisible(false);
    }
  };
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (isTooltipVisible) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }
    return function () {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isTooltipVisible]);
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_6__["useTranslation"])("common"),
    t = _useTranslation.t;
  var debouncedSearch = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default()(function (newValue, lat, _long) {
    fetchAutocompleteResults(newValue, lat, _long);
  }, 500), []);
  var handleChange = function handleChange(e) {
    props.dispatch(Object(_redux_actions_search__WEBPACK_IMPORTED_MODULE_12__["setRestaurantData"])([]));
    var newValue = e.target.value;
    setInputValue(newValue);
    if (newValue && props.to_place && props.to_place.geometry) {
      var lat = props.to_place.geometry.location.lat;
      var _long2 = props.to_place.geometry.location.lng;
      debouncedSearch(newValue, lat, _long2);
    }
  };
  var handleInputClick = function handleInputClick() {
    setShowSuggestions(true);
  };
  var fetchAutocompleteResults = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(input, lat, _long3) {
      var radius, limit, hasChildren, url, res, restaurantData, _iterator, _step, data, respone, newSuggestions;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            // const newlatlong = `${lat},${long}`;
            // const results = await request.autocomplete(input, newlatlong);
            radius = 3000;
            limit = 10;
            hasChildren = false;
            url = "http://localhost:8000/api/ParkingLots/nearby?location=".concat(lat, ",").concat(_long3, "&radius=").concat(radius, "&limit=").concat(limit, "&has_children=").concat(hasChildren);
            _context.next = 7;
            return axios__WEBPACK_IMPORTED_MODULE_13___default.a.get(url);
          case 7:
            res = _context.sent;
            setAutocompleteResults(res.data.results);
            restaurantData = [];
            _iterator = _createForOfIteratorHelper(res.data.results);
            _context.prev = 11;
            _iterator.s();
          case 13:
            if ((_step = _iterator.n()).done) {
              _context.next = 21;
              break;
            }
            data = _step.value;
            _context.next = 17;
            return _utils_request__WEBPACK_IMPORTED_MODULE_5__["default"].place_detail(data.place_id);
          case 17:
            respone = _context.sent;
            restaurantData.push(respone.data.result);
          case 19:
            _context.next = 13;
            break;
          case 21:
            _context.next = 26;
            break;
          case 23:
            _context.prev = 23;
            _context.t0 = _context["catch"](11);
            _iterator.e(_context.t0);
          case 26:
            _context.prev = 26;
            _iterator.f();
            return _context.finish(26);
          case 29:
            props.dispatch(Object(_redux_actions_search__WEBPACK_IMPORTED_MODULE_12__["setRestaurantData"])(restaurantData));
            newSuggestions = results.data.predictions.map(function (item) {
              return {
                icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["SearchOutlined"], null),
                text: item.structured_formatting.main_text,
                subtext: item.structured_formatting.secondary_text
              };
            });
            setSuggestions(newSuggestions);
            _context.next = 37;
            break;
          case 34:
            _context.prev = 34;
            _context.t1 = _context["catch"](0);
            console.error("Error fetching autocomplete results:", _context.t1);
          case 37:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 34], [11, 23, 26, 29]]);
    }));
    return function fetchAutocompleteResults(_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();

  // useEffect(() => {
  //   if (showSuggestions) {
  //     inputRef.current.style.borderBottomLeftRadius = "0";
  //     inputRef.current.style.borderBottomRightRadius = "0";
  //   } else {
  //     inputRef.current.style.borderBottomLeftRadius = "24px";
  //     inputRef.current.style.borderBottomRightRadius = "24px";
  //   }
  // }, [showSuggestions]);

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var _props$to_place, _props$to_place$geome, _props$to_place$geome2, _props$to_place2, _props$to_place2$geom, _props$to_place2$geom2;
    var lat = (_props$to_place = props.to_place) === null || _props$to_place === void 0 ? void 0 : (_props$to_place$geome = _props$to_place.geometry) === null || _props$to_place$geome === void 0 ? void 0 : (_props$to_place$geome2 = _props$to_place$geome.location) === null || _props$to_place$geome2 === void 0 ? void 0 : _props$to_place$geome2.lat;
    var _long4 = (_props$to_place2 = props.to_place) === null || _props$to_place2 === void 0 ? void 0 : (_props$to_place2$geom = _props$to_place2.geometry) === null || _props$to_place2$geom === void 0 ? void 0 : (_props$to_place2$geom2 = _props$to_place2$geom.location) === null || _props$to_place2$geom2 === void 0 ? void 0 : _props$to_place2$geom2.lng;
    var input = props.type_latlong;
    if (lat && _long4) {
      fetchAutocompleteResults(input, lat, _long4);
    }
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var handleClickOutside = function handleClickOutside(event) {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return function () {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  var onTitleSelect = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(place) {
      var check, data, dataHistory, pid, latLng, response, i, _i, _i2, _pid;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            // props.dispatch(setRestaurantData([]))
            // props.dispatch(clearAction())
            check = true;
            data = JSON.parse(localStorage.getItem("search_history")) || [];
            if (place.location) {
              _context2.next = 13;
              break;
            }
            _context2.next = 5;
            return Object(_redux_sagas_placeSaga__WEBPACK_IMPORTED_MODULE_11__["getDetailIdService"])(place.place_id);
          case 5:
            dataHistory = _context2.sent;
            if (check) {
              if (place != null && data.length < 100) {
                place.location = dataHistory.data.result.geometry.location;
                // place.place_id = "00000000000"
                data.push(place);
              } else if (place != null && data.length >= 100) {
                data.shift();
                data.push(place);
              }
            }
            window.localStorage.setItem("search_history", JSON.stringify(data));
            pid = place.id || place.place_id; // console.log(pid)
            props.dispatch(Object(_redux_actions_place__WEBPACK_IMPORTED_MODULE_9__["getDetailByIdAction"])(pid));
            // setValue(`${place.structured_formatting.main_text} - ${place.structured_formatting.secondary_text}`);
            // props.dispatch(setBoxVisibleAction("info"));
            props.dispatch(Object(_redux_actions_navigation__WEBPACK_IMPORTED_MODULE_8__["setInfoRestaurant"])(true));
            _context2.next = 47;
            break;
          case 13:
            latLng = {
              latitude: place.location.lat,
              longitude: place.location.lng
            };
            _context2.next = 16;
            return Object(_redux_sagas_placeSaga__WEBPACK_IMPORTED_MODULE_11__["getDetailLatLngService"])(latLng);
          case 16:
            response = _context2.sent.data.results;
            i = response.length - 1;
          case 18:
            if (!(i >= 0)) {
              _context2.next = 34;
              break;
            }
            if (!(place.location.lat === response[i].geometry.location.lat && place.location.lng === response[i].geometry.location.lng && place.structured_formatting.main_text === response[i].name && place.place_id != response[i].place_id)) {
              _context2.next = 31;
              break;
            }
            _i = data.length - 1;
          case 21:
            if (!(_i >= 0)) {
              _context2.next = 28;
              break;
            }
            if (!(data[_i].place_id === place.place_id)) {
              _context2.next = 25;
              break;
            }
            data.splice(_i, 1);
            return _context2.abrupt("break", 28);
          case 25:
            _i--;
            _context2.next = 21;
            break;
          case 28:
            place.place_id = response[i].place_id;
            data.push(place);
            return _context2.abrupt("break", 34);
          case 31:
            i--;
            _context2.next = 18;
            break;
          case 34:
            _i2 = data.length - 1;
          case 35:
            if (!(_i2 >= 0)) {
              _context2.next = 43;
              break;
            }
            if (!(data[_i2].place_id === place.place_id)) {
              _context2.next = 40;
              break;
            }
            // place.location = dataHistory.data.result.geometry.location
            data.splice(_i2, 1);
            data.push(place);
            // check = false
            return _context2.abrupt("break", 43);
          case 40:
            _i2--;
            _context2.next = 35;
            break;
          case 43:
            window.localStorage.setItem("search_history", JSON.stringify(data));
            _pid = place.id || place.place_id;
            props.dispatch(Object(_redux_actions_place__WEBPACK_IMPORTED_MODULE_9__["getDetailByIdAction"])(_pid));
            // setValue(`${place.structured_formatting.main_text} - ${place.structured_formatting.secondary_text}`);
            props.dispatch(Object(_redux_actions_navigation__WEBPACK_IMPORTED_MODULE_8__["setInfoRestaurant"])(true));
          case 47:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function onTitleSelect(_x4) {
      return _ref2.apply(this, arguments);
    };
  }();
  var closeBox = /*#__PURE__*/function () {
    var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var _responseToPlace$data, _responseFromPlace$da;
      var toPlaceId, responseToPlace, toPlace, fromPlaceId, responseFromPlace, fromPlace, viewport;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            props.dispatch(Object(_redux_actions_search__WEBPACK_IMPORTED_MODULE_12__["setRestaurantData"])([]));
            toPlaceId = props.to_place.id || props.to_place.place_id;
            _context3.next = 4;
            return _utils_request__WEBPACK_IMPORTED_MODULE_5__["default"].place_detail(toPlaceId);
          case 4:
            responseToPlace = _context3.sent;
            toPlace = (_responseToPlace$data = responseToPlace.data) === null || _responseToPlace$data === void 0 ? void 0 : _responseToPlace$data.result;
            fromPlaceId = props.from_place.id || props.from_place.place_id;
            _context3.next = 9;
            return _utils_request__WEBPACK_IMPORTED_MODULE_5__["default"].place_detail(fromPlaceId);
          case 9:
            responseFromPlace = _context3.sent;
            fromPlace = (_responseFromPlace$da = responseFromPlace.data) === null || _responseFromPlace$da === void 0 ? void 0 : _responseFromPlace$da.result;
            if (toPlace && fromPlace) {
              viewport = {
                longitude: toPlace.geometry.location.lng,
                latitude: toPlace.geometry.location.lat,
                zoom: 15
              };
              props.dispatch(Object(_redux_actions_place__WEBPACK_IMPORTED_MODULE_9__["setMapViewportAction"])(viewport));
              // props.dispatch(setTypeInput(false));
              props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_10__["setBoxVisibleAction"])("navigation"));
              props.dispatch(Object(_redux_actions_navigation__WEBPACK_IMPORTED_MODULE_8__["navigationToAction"])(toPlace, "".concat(toPlace.name, " - ").concat(toPlace.formatted_address)));
              props.dispatch(Object(_redux_actions_navigation__WEBPACK_IMPORTED_MODULE_8__["navigationFromAction"])(fromPlace, "".concat(fromPlace.name, " - ").concat(fromPlace.formatted_address)));
              props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_10__["setRedMarkerAction"])(false));
              props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_10__["setPopupRightClick"])(false));
            } else {
              message.error("Không tìm thấy vị trí của bạn!");
            }
          case 12:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function closeBox() {
      return _ref3.apply(this, arguments);
    };
  }();
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (props.to_place && props.to_place.geometry && props.type_latlong) {
      var lat = props.to_place.geometry.location.lat;
      var _long5 = props.to_place.geometry.location.lng;
      var input = props.type_latlong;
      fetchAutocompleteResults(input, lat, _long5);
    }
  }, [props.to_place, props.type_latlong]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var handleClickOutside = function handleClickOutside(event) {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return function () {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  var iconColor = inputValue ? "#1a73e8" : "inherit";
  return __jsx("div", {
    className: "content-servicedetails"
  }, __jsx("div", {
    className: "id-omnibox-container"
  }, __jsx("div", {
    className: "restaurant-omnibox"
  }, __jsx("div", {
    id: "omnibox-singlebox"
  }, __jsx("div", {
    className: "restaurant-omnibox-singlebox"
  }, __jsx("div", {
    className: "restaurant-active"
  }, __jsx("span", {
    id: "restaurant-header--icon--back",
    style: {
      fontSize: "20px"
    },
    onClick: closeBox
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["ArrowLeftOutlined"], {
    id: "restaurant--icon--top"
  }), __jsx("span", {
    className: "tooltip--comeback--restaurant"
  }, t("route_combeack_i18")))), __jsx("div", {
    className: "restaurant-search--adress",
    id: "searchbox",
    ref: inputRef
  }, __jsx("input", {
    id: "search--box--input",
    placeholder: t("search_input"),
    value: inputValue,
    onChange: handleChange,
    onClick: handleInputClick,
    autoComplete: "off"
  }), autocompleteResults && autocompleteResults.length > 0 && __jsx("div", {
    className: "restaurant-search-results"
  }, autocompleteResults.map(function (item, index) {
    return __jsx("div", {
      className: "restaurant-search-button-container",
      key: index
    }, __jsx("button", {
      className: "restaurant-search-button",
      id: "searchbox-searchbutton",
      onClick: function onClick() {
        onTitleSelect(item);
      },
      disabled: !inputValue.trim()
    }, __jsx("span", {
      style: {
        fontSize: "20px",
        color: iconColor
      }
    }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["SearchOutlined"], {
      id: "searchbox-searchbutton--SearchOutlined"
    }))), __jsx("span", {
      className: "tooltip--search--restaurant"
    }, t("search_button_i18")));
  })), __jsx("div", {
    className: "restaurant-clear-button-container"
  }, __jsx("div", {
    className: "restaurant-clear-button-wrapper"
  }, __jsx("span", {
    className: "restaurant-icon",
    style: {
      fontSize: "15px"
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["EnvironmentOutlined"], null)), __jsx("div", {
    className: "restaurant-clear-button--close"
  }), __jsx("div", {
    className: "vertical-border"
  }, __jsx("button", {
    className: "restaurant-clear-button",
    onClick: closeBox
  }, __jsx("span", {
    style: {
      fontSize: "13px"
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["CloseOutlined"], {
    id: "close--servicedetails"
  }))), __jsx("span", {
    className: "tooltip--Cancel--nearby--search"
  }, t("close_button_i18")))))), __jsx("div", {
    className: "restaurant-results-header--top--scroll"
  }, __jsx("div", {
    className: "restaurant-results-header--top"
  }, __jsx("div", {
    className: "restaurant-results-header"
  }, __jsx("h1", {
    className: "restaurant-results-title"
  }, t("results-title_button_i18")), __jsx("span", {
    className: "restaurant-results-title--span",
    onClick: toggleTooltip,
    ref: triggerRef
  }, __jsx("img", {
    src: "static/images/info_gm_grey_18dp.png",
    alt: "info"
  })))), __jsx("div", {
    "class": "result--tooltip-search--button"
  }, isTooltipVisible && __jsx("div", {
    className: "result--tooltip-search",
    ref: tooltipRef
  }, __jsx("div", {
    className: "result--tooltip-search--title"
  }, t("results-title_button_search_i18")), __jsx("div", {
    className: "result--tooltip-search--text"
  }, t("results-title_button_text_1_i18"), __jsx("span", {
    style: {
      color: "#1890FF"
    }
  }, " ", t("results-title_button_text_2_i18"), " "), t("results-title_button_text_3_i18")))), autocompleteResults && autocompleteResults.length > 0 && autocompleteResults.map(function (item, index) {
    return __jsx("div", {
      className: "restaurant-list-item",
      key: index,
      onClick: function onClick() {
        return onTitleSelect(item);
      }
    }, __jsx("div", {
      className: "text-content"
    }, __jsx("h3", null, item.name), __jsx("p", null, item.formatted_address)), __jsx("a", {
      className: "restaurant-item-image"
    }, __jsx("img", {
      src: item.photos && item.photos[0] && item.photos[0].photo_reference ? Object(_utils_image_type_location__WEBPACK_IMPORTED_MODULE_7__["getImageByType"])("http://localhost:8000".concat(item.photos[0].photo_reference)) : "http://localhost:8000/uploads/parkinglots/d46d0f04-ef77-421d-a721-4db6229d2b58/pl_d46d0f04-ef77-421d-a721-4db6229d2b58_di%E1%BB%83m-d%E1%BB%97-xe-04_main_20241215_102739.png" // Đường dẫn ảnh mặc định
      ,
      width: "80px",
      height: "80px",
      alt: "Image of ".concat(item.name || "restaurant")
    })));
  })))))));
};
_s(DetailsRestaurant, "aA1rnegbTT90cfQFdCEovUyQSYI=", false, function () {
  return [react_i18next__WEBPACK_IMPORTED_MODULE_6__["useTranslation"]];
});
_c = DetailsRestaurant;
var mapStateToProps = function mapStateToProps(state) {
  return {
    from_place: state.navigationReducer.from,
    to_place: state.navigationReducer.to,
    result: state.navigationReducer.result,
    result_select: state.navigationReducer.result_select,
    response_status: state.navigationReducer.response_status,
    my_location: state.placeReducer.my_location,
    typeInput: state.navigationReducer.type_input,
    current_place: state.placeReducer.current_place,
    type_latlong: state.navigationReducer.type_latlong,
    places: state.searchReducer.places,
    boxVisible: state.boxVisibleReducer.box_visible,
    info_box_collapsed: state.boxVisibleReducer.info_box_collapsed,
    latLngCenter: state.placeReducer.center,
    openHistory: state.searchReducer.search_history,
    searchData: state.searchReducer.search_data
  };
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps)(DetailsRestaurant));
var _c;
$RefreshReg$(_c, "DetailsRestaurant");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EZXRhaWxzUmVzdGF1cmFudC5qc3giXSwibmFtZXMiOlsiX3JlZ2VuZXJhdG9yUnVudGltZSIsImUiLCJ0IiwiciIsIk9iamVjdCIsInByb3RvdHlwZSIsIm4iLCJoYXNPd25Qcm9wZXJ0eSIsIm8iLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiaSIsIlN5bWJvbCIsImEiLCJpdGVyYXRvciIsImMiLCJhc3luY0l0ZXJhdG9yIiwidSIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwid3JhcCIsIkdlbmVyYXRvciIsImNyZWF0ZSIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJ0eXBlIiwiYXJnIiwiY2FsbCIsImgiLCJsIiwiZiIsInMiLCJ5IiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsInAiLCJkIiwiZ2V0UHJvdG90eXBlT2YiLCJ2IiwidmFsdWVzIiwiZyIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsImludm9rZSIsInJlc29sdmUiLCJfX2F3YWl0IiwidGhlbiIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwiRXJyb3IiLCJkb25lIiwibWV0aG9kIiwiZGVsZWdhdGUiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJUeXBlRXJyb3IiLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsImlzTmFOIiwibGVuZ3RoIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiY29uc3RydWN0b3IiLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJrZXlzIiwicmV2ZXJzZSIsInBvcCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJydmFsIiwiaGFuZGxlIiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJkZWxlZ2F0ZVlpZWxkIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCJBcnJheSIsImlzQXJyYXkiLCJfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJfbiIsIkYiLCJfYXJyYXlMaWtlVG9BcnJheSIsInRvU3RyaW5nIiwiZnJvbSIsInRlc3QiLCJEZXRhaWxzUmVzdGF1cmFudCIsInByb3BzIiwiX3MiLCJfdXNlU3RhdGUiLCJ1c2VTdGF0ZSIsImlucHV0VmFsdWUiLCJzZXRJbnB1dFZhbHVlIiwiX3VzZVN0YXRlMiIsImF1dG9jb21wbGV0ZVJlc3VsdHMiLCJzZXRBdXRvY29tcGxldGVSZXN1bHRzIiwiX3VzZVN0YXRlMyIsInN1Z2dlc3Rpb25zIiwic2V0U3VnZ2VzdGlvbnMiLCJfdXNlU3RhdGU0Iiwic2hvd1N1Z2dlc3Rpb25zIiwic2V0U2hvd1N1Z2dlc3Rpb25zIiwiaW5wdXRSZWYiLCJ1c2VSZWYiLCJfdXNlU3RhdGU1IiwiaXNUb29sdGlwVmlzaWJsZSIsInNldFRvb2x0aXBWaXNpYmxlIiwiX3VzZVN0YXRlNiIsInJlc0RhdGFBUEkiLCJzZXRSZXNEYXRhQVBJIiwidG9nZ2xlVG9vbHRpcCIsInRvb2x0aXBSZWYiLCJ0cmlnZ2VyUmVmIiwiaGFuZGxlQ2xpY2tPdXRzaWRlIiwiZXZlbnQiLCJjdXJyZW50IiwiY29udGFpbnMiLCJ0YXJnZXQiLCJ1c2VFZmZlY3QiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiX3VzZVRyYW5zbGF0aW9uIiwidXNlVHJhbnNsYXRpb24iLCJkZWJvdW5jZWRTZWFyY2giLCJ1c2VDYWxsYmFjayIsIl9kZWJvdW5jZSIsIm5ld1ZhbHVlIiwibGF0IiwibG9uZyIsImZldGNoQXV0b2NvbXBsZXRlUmVzdWx0cyIsImhhbmRsZUNoYW5nZSIsImRpc3BhdGNoIiwic2V0UmVzdGF1cmFudERhdGEiLCJ0b19wbGFjZSIsImdlb21ldHJ5IiwibG9jYXRpb24iLCJsbmciLCJoYW5kbGVJbnB1dENsaWNrIiwiX3JlZiIsIl9hc3luY1RvR2VuZXJhdG9yIiwiX2NhbGxlZSIsImlucHV0IiwicmFkaXVzIiwibGltaXQiLCJoYXNDaGlsZHJlbiIsInVybCIsInJlcyIsInJlc3RhdXJhbnREYXRhIiwiX2l0ZXJhdG9yIiwiX3N0ZXAiLCJkYXRhIiwicmVzcG9uZSIsIm5ld1N1Z2dlc3Rpb25zIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsImNvbmNhdCIsIkF4aW9zIiwiZ2V0IiwicmVzdWx0cyIsIlJlcXVlc3QiLCJwbGFjZV9kZXRhaWwiLCJwbGFjZV9pZCIsInJlc3VsdCIsInQwIiwicHJlZGljdGlvbnMiLCJtYXAiLCJpdGVtIiwiaWNvbiIsIl9fanN4IiwiU2VhcmNoT3V0bGluZWQiLCJ0ZXh0Iiwic3RydWN0dXJlZF9mb3JtYXR0aW5nIiwibWFpbl90ZXh0Iiwic3VidGV4dCIsInNlY29uZGFyeV90ZXh0IiwidDEiLCJjb25zb2xlIiwiZXJyb3IiLCJfeCIsIl94MiIsIl94MyIsImFwcGx5IiwiYXJndW1lbnRzIiwiX3Byb3BzJHRvX3BsYWNlIiwiX3Byb3BzJHRvX3BsYWNlJGdlb21lIiwiX3Byb3BzJHRvX3BsYWNlJGdlb21lMiIsIl9wcm9wcyR0b19wbGFjZTIiLCJfcHJvcHMkdG9fcGxhY2UyJGdlb20iLCJfcHJvcHMkdG9fcGxhY2UyJGdlb20yIiwidHlwZV9sYXRsb25nIiwib25UaXRsZVNlbGVjdCIsIl9yZWYyIiwiX2NhbGxlZTIiLCJwbGFjZSIsImNoZWNrIiwiZGF0YUhpc3RvcnkiLCJwaWQiLCJsYXRMbmciLCJyZXNwb25zZSIsIl9pIiwiX2kyIiwiX3BpZCIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJnZXREZXRhaWxJZFNlcnZpY2UiLCJzaGlmdCIsIndpbmRvdyIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJpZCIsImdldERldGFpbEJ5SWRBY3Rpb24iLCJzZXRJbmZvUmVzdGF1cmFudCIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwiZ2V0RGV0YWlsTGF0TG5nU2VydmljZSIsInNwbGljZSIsIl94NCIsImNsb3NlQm94IiwiX3JlZjMiLCJfY2FsbGVlMyIsIl9yZXNwb25zZVRvUGxhY2UkZGF0YSIsIl9yZXNwb25zZUZyb21QbGFjZSRkYSIsInRvUGxhY2VJZCIsInJlc3BvbnNlVG9QbGFjZSIsInRvUGxhY2UiLCJmcm9tUGxhY2VJZCIsInJlc3BvbnNlRnJvbVBsYWNlIiwiZnJvbVBsYWNlIiwidmlld3BvcnQiLCJfY2FsbGVlMyQiLCJfY29udGV4dDMiLCJmcm9tX3BsYWNlIiwiem9vbSIsInNldE1hcFZpZXdwb3J0QWN0aW9uIiwic2V0Qm94VmlzaWJsZUFjdGlvbiIsIm5hdmlnYXRpb25Ub0FjdGlvbiIsImZvcm1hdHRlZF9hZGRyZXNzIiwibmF2aWdhdGlvbkZyb21BY3Rpb24iLCJzZXRSZWRNYXJrZXJBY3Rpb24iLCJzZXRQb3B1cFJpZ2h0Q2xpY2siLCJtZXNzYWdlIiwiaWNvbkNvbG9yIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJmb250U2l6ZSIsIm9uQ2xpY2siLCJBcnJvd0xlZnRPdXRsaW5lZCIsInJlZiIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJhdXRvQ29tcGxldGUiLCJpbmRleCIsImtleSIsImRpc2FibGVkIiwidHJpbSIsImNvbG9yIiwiRW52aXJvbm1lbnRPdXRsaW5lZCIsIkNsb3NlT3V0bGluZWQiLCJzcmMiLCJhbHQiLCJwaG90b3MiLCJwaG90b19yZWZlcmVuY2UiLCJnZXRJbWFnZUJ5VHlwZSIsIndpZHRoIiwiaGVpZ2h0IiwiX2MiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsIm5hdmlnYXRpb25SZWR1Y2VyIiwidG8iLCJyZXN1bHRfc2VsZWN0IiwicmVzcG9uc2Vfc3RhdHVzIiwibXlfbG9jYXRpb24iLCJwbGFjZVJlZHVjZXIiLCJ0eXBlSW5wdXQiLCJ0eXBlX2lucHV0IiwiY3VycmVudF9wbGFjZSIsInBsYWNlcyIsInNlYXJjaFJlZHVjZXIiLCJib3hWaXNpYmxlIiwiYm94VmlzaWJsZVJlZHVjZXIiLCJib3hfdmlzaWJsZSIsImluZm9fYm94X2NvbGxhcHNlZCIsImxhdExuZ0NlbnRlciIsImNlbnRlciIsIm9wZW5IaXN0b3J5Iiwic2VhcmNoX2hpc3RvcnkiLCJzZWFyY2hEYXRhIiwic2VhcmNoX2RhdGEiLCJjb25uZWN0IiwiJFJlZnJlc2hSZWckIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrQ0FDQSxxSkFBQUEsbUJBQUEsWUFBQUEsb0JBQUEsV0FBQUMsQ0FBQSxTQUFBQyxDQUFBLEVBQUFELENBQUEsT0FBQUUsQ0FBQSxHQUFBQyxNQUFBLENBQUFDLFNBQUEsRUFBQUMsQ0FBQSxHQUFBSCxDQUFBLENBQUFJLGNBQUEsRUFBQUMsQ0FBQSxHQUFBSixNQUFBLENBQUFLLGNBQUEsY0FBQVAsQ0FBQSxFQUFBRCxDQUFBLEVBQUFFLENBQUEsSUFBQUQsQ0FBQSxDQUFBRCxDQUFBLElBQUFFLENBQUEsQ0FBQU8sS0FBQSxLQUFBQyxDQUFBLHdCQUFBQyxNQUFBLEdBQUFBLE1BQUEsT0FBQUMsQ0FBQSxHQUFBRixDQUFBLENBQUFHLFFBQUEsa0JBQUFDLENBQUEsR0FBQUosQ0FBQSxDQUFBSyxhQUFBLHVCQUFBQyxDQUFBLEdBQUFOLENBQUEsQ0FBQU8sV0FBQSw4QkFBQUMsT0FBQWpCLENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLFdBQUFDLE1BQUEsQ0FBQUssY0FBQSxDQUFBUCxDQUFBLEVBQUFELENBQUEsSUFBQVMsS0FBQSxFQUFB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LENBQUM5RyxNQUFNO0lBQ3RDZ0gsYUFBYSxFQUFFSCxLQUFLLENBQUNDLGlCQUFpQixDQUFDRSxhQUFhO0lBQ3BEQyxlQUFlLEVBQUVKLEtBQUssQ0FBQ0MsaUJBQWlCLENBQUNHLGVBQWU7SUFDeERDLFdBQVcsRUFBRUwsS0FBSyxDQUFDTSxZQUFZLENBQUNELFdBQVc7SUFDM0NFLFNBQVMsRUFBRVAsS0FBSyxDQUFDQyxpQkFBaUIsQ0FBQ08sVUFBVTtJQUM3Q0MsYUFBYSxFQUFFVCxLQUFLLENBQUNNLFlBQVksQ0FBQ0csYUFBYTtJQUMvQzNGLFlBQVksRUFBRWtGLEtBQUssQ0FBQ0MsaUJBQWlCLENBQUNuRixZQUFZO0lBQ2xENEYsTUFBTSxFQUFFVixLQUFLLENBQUNXLGFBQWEsQ0FBQ0QsTUFBTTtJQUNsQ0UsVUFBVSxFQUFFWixLQUFLLENBQUNhLGlCQUFpQixDQUFDQyxXQUFXO0lBQy9DQyxrQkFBa0IsRUFBRWYsS0FBSyxDQUFDYSxpQkFBaUIsQ0FBQ0Usa0JBQWtCO0lBQzlEQyxZQUFZLEVBQUVoQixLQUFLLENBQUNNLFlBQVksQ0FBQ1csTUFBTTtJQUN2Q0MsV0FBVyxFQUFFbEIsS0FBSyxDQUFDVyxhQUFhLENBQUNRLGNBQWM7SUFDL0NDLFVBQVUsRUFBRXBCLEtBQUssQ0FBQ1csYUFBYSxDQUFDVTtFQUNsQyxDQUFDO0FBQUEsQ0FBQztBQUVhQywwSEFBTyxDQUFDdkIsZUFBZSxDQUFDLENBQUN6TCxpQkFBaUIsQ0FBQyxFQUFDO0FBQUEsSUFBQXdMLEVBQUE7QUFBQXlCLFlBQUEsQ0FBQXpCLEVBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svMS41NzQ4MzcyMTU2ZWNmMjgwZjVjYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHtcclxuICBBcnJvd0xlZnRPdXRsaW5lZCxcclxuICBTZWFyY2hPdXRsaW5lZCxcclxuICBFbnZpcm9ubWVudE91dGxpbmVkLFxyXG4gIENsb3NlT3V0bGluZWQsXHJcbn0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XHJcbmltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IHJlcXVlc3QgZnJvbSBcIi4uL3V0aWxzL3JlcXVlc3RcIjtcclxuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tIFwicmVhY3QtaTE4bmV4dFwiO1xyXG5pbXBvcnQgeyBnZXRJbWFnZUJ5VHlwZSB9IGZyb20gXCIuLi91dGlscy9pbWFnZV90eXBlX2xvY2F0aW9uXCI7XHJcbmltcG9ydCB7XHJcbiAgbmF2aWdhdGlvbkZyb21BY3Rpb24sXHJcbiAgbmF2aWdhdGlvblRvQWN0aW9uLFxyXG4gIHNldFR5cGVJbnB1dCxcclxufSBmcm9tIFwiLi4vcmVkdXgvYWN0aW9ucy9uYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCBSZXF1ZXN0IGZyb20gXCIuLi91dGlscy9yZXF1ZXN0XCI7XHJcbmltcG9ydCB7XHJcbiAgZ2V0RGV0YWlsQnlJZEFjdGlvbixcclxuICBzZXRNYXBWaWV3cG9ydEFjdGlvbixcclxufSBmcm9tIFwiLi4vcmVkdXgvYWN0aW9ucy9wbGFjZVwiO1xyXG5pbXBvcnQge1xyXG4gIHNldEJveFZpc2libGVBY3Rpb24sXHJcbiAgc2V0UG9wdXBSaWdodENsaWNrLFxyXG4gIHNldFJlZE1hcmtlckFjdGlvbixcclxufSBmcm9tIFwiLi4vcmVkdXgvYWN0aW9ucy9ib3hWaXNibGVcIjtcclxuaW1wb3J0IHtcclxuICBnZXREZXRhaWxJZFNlcnZpY2UsXHJcbiAgZ2V0RGV0YWlsTGF0TG5nU2VydmljZSxcclxufSBmcm9tIFwiLi4vcmVkdXgvc2FnYXMvcGxhY2VTYWdhXCI7XHJcbmltcG9ydCB7IHNldFJlc3RhdXJhbnREYXRhIH0gZnJvbSBcIi4uL3JlZHV4L2FjdGlvbnMvc2VhcmNoXCI7XHJcbmltcG9ydCB7IGNsZWFyQWN0aW9uIH0gZnJvbSBcIi4uL3JlZHV4L2FjdGlvbnMvbmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgeyBzZXRJbmZvUmVzdGF1cmFudCB9IGZyb20gXCIuLi9yZWR1eC9hY3Rpb25zL25hdmlnYXRpb25cIjtcclxuaW1wb3J0IEF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuY29uc3QgRGV0YWlsc1Jlc3RhdXJhbnQgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBbaW5wdXRWYWx1ZSwgc2V0SW5wdXRWYWx1ZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbYXV0b2NvbXBsZXRlUmVzdWx0cywgc2V0QXV0b2NvbXBsZXRlUmVzdWx0c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3N1Z2dlc3Rpb25zLCBzZXRTdWdnZXN0aW9uc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3Nob3dTdWdnZXN0aW9ucywgc2V0U2hvd1N1Z2dlc3Rpb25zXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBpbnB1dFJlZiA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCBbaXNUb29sdGlwVmlzaWJsZSwgc2V0VG9vbHRpcFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtyZXNEYXRhQVBJLCBzZXRSZXNEYXRhQVBJXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCB0b2dnbGVUb29sdGlwID0gKCkgPT4ge1xyXG4gICAgc2V0VG9vbHRpcFZpc2libGUoIWlzVG9vbHRpcFZpc2libGUpO1xyXG4gIH07XHJcbiAgY29uc3QgdG9vbHRpcFJlZiA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCB0cmlnZ2VyUmVmID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IGhhbmRsZUNsaWNrT3V0c2lkZSA9IChldmVudCkgPT4ge1xyXG4gICAgaWYgKFxyXG4gICAgICB0b29sdGlwUmVmLmN1cnJlbnQgJiZcclxuICAgICAgIXRvb2x0aXBSZWYuY3VycmVudC5jb250YWlucyhldmVudC50YXJnZXQpICYmXHJcbiAgICAgICF0cmlnZ2VyUmVmLmN1cnJlbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KVxyXG4gICAgKSB7XHJcbiAgICAgIHNldFRvb2x0aXBWaXNpYmxlKGZhbHNlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGlzVG9vbHRpcFZpc2libGUpIHtcclxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZUNsaWNrT3V0c2lkZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlQ2xpY2tPdXRzaWRlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlQ2xpY2tPdXRzaWRlKTtcclxuICAgIH07XHJcbiAgfSwgW2lzVG9vbHRpcFZpc2libGVdKTtcclxuXHJcbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbihcImNvbW1vblwiKTtcclxuICBjb25zdCBkZWJvdW5jZWRTZWFyY2ggPSB1c2VDYWxsYmFjayhcclxuICAgIF8uZGVib3VuY2UoKG5ld1ZhbHVlLCBsYXQsIGxvbmcpID0+IHtcclxuICAgICAgZmV0Y2hBdXRvY29tcGxldGVSZXN1bHRzKG5ld1ZhbHVlLCBsYXQsIGxvbmcpO1xyXG4gICAgfSwgNTAwKSxcclxuICAgIFtdXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIHByb3BzLmRpc3BhdGNoKHNldFJlc3RhdXJhbnREYXRhKFtdKSk7XHJcbiAgICBjb25zdCBuZXdWYWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgc2V0SW5wdXRWYWx1ZShuZXdWYWx1ZSk7XHJcblxyXG4gICAgaWYgKG5ld1ZhbHVlICYmIHByb3BzLnRvX3BsYWNlICYmIHByb3BzLnRvX3BsYWNlLmdlb21ldHJ5KSB7XHJcbiAgICAgIGNvbnN0IGxhdCA9IHByb3BzLnRvX3BsYWNlLmdlb21ldHJ5LmxvY2F0aW9uLmxhdDtcclxuICAgICAgY29uc3QgbG9uZyA9IHByb3BzLnRvX3BsYWNlLmdlb21ldHJ5LmxvY2F0aW9uLmxuZztcclxuICAgICAgZGVib3VuY2VkU2VhcmNoKG5ld1ZhbHVlLCBsYXQsIGxvbmcpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUlucHV0Q2xpY2sgPSAoKSA9PiB7XHJcbiAgICBzZXRTaG93U3VnZ2VzdGlvbnModHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZmV0Y2hBdXRvY29tcGxldGVSZXN1bHRzID0gYXN5bmMgKFxyXG4gICAgaW5wdXQsXHJcbiAgICBsYXQsXHJcbiAgICBsb25nXHJcbiAgKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAvLyBjb25zdCBuZXdsYXRsb25nID0gYCR7bGF0fSwke2xvbmd9YDtcclxuICAgICAgLy8gY29uc3QgcmVzdWx0cyA9IGF3YWl0IHJlcXVlc3QuYXV0b2NvbXBsZXRlKGlucHV0LCBuZXdsYXRsb25nKTtcclxuICAgICAgY29uc3QgcmFkaXVzID0gMzAwMDtcclxuICAgICAgY29uc3QgbGltaXQgPSAxMDtcclxuICAgICAgY29uc3QgaGFzQ2hpbGRyZW4gPSBmYWxzZTtcclxuICAgICAgY29uc3QgdXJsID0gYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvUGFya2luZ0xvdHMvbmVhcmJ5P2xvY2F0aW9uPSR7bGF0fSwke2xvbmd9JnJhZGl1cz0ke3JhZGl1c30mbGltaXQ9JHtsaW1pdH0maGFzX2NoaWxkcmVuPSR7aGFzQ2hpbGRyZW59YDtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgQXhpb3MuZ2V0KHVybCk7XHJcbiAgICAgIHNldEF1dG9jb21wbGV0ZVJlc3VsdHMocmVzLmRhdGEucmVzdWx0cyk7XHJcbiAgICAgIGxldCByZXN0YXVyYW50RGF0YSA9IFtdO1xyXG4gICAgICBmb3IgKGxldCBkYXRhIG9mIHJlcy5kYXRhLnJlc3VsdHMpIHtcclxuICAgICAgICBjb25zdCByZXNwb25lID0gYXdhaXQgUmVxdWVzdC5wbGFjZV9kZXRhaWwoZGF0YS5wbGFjZV9pZCk7XHJcbiAgICAgICAgcmVzdGF1cmFudERhdGEucHVzaChyZXNwb25lLmRhdGEucmVzdWx0KTtcclxuICAgICAgfVxyXG4gICAgICBwcm9wcy5kaXNwYXRjaChzZXRSZXN0YXVyYW50RGF0YShyZXN0YXVyYW50RGF0YSkpO1xyXG5cclxuICAgICAgY29uc3QgbmV3U3VnZ2VzdGlvbnMgPSByZXN1bHRzLmRhdGEucHJlZGljdGlvbnMubWFwKChpdGVtKSA9PiAoe1xyXG4gICAgICAgIGljb246IDxTZWFyY2hPdXRsaW5lZCAvPixcclxuICAgICAgICB0ZXh0OiBpdGVtLnN0cnVjdHVyZWRfZm9ybWF0dGluZy5tYWluX3RleHQsXHJcbiAgICAgICAgc3VidGV4dDogaXRlbS5zdHJ1Y3R1cmVkX2Zvcm1hdHRpbmcuc2Vjb25kYXJ5X3RleHQsXHJcbiAgICAgIH0pKTtcclxuICAgICAgc2V0U3VnZ2VzdGlvbnMobmV3U3VnZ2VzdGlvbnMpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGF1dG9jb21wbGV0ZSByZXN1bHRzOlwiLCBlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAvLyAgIGlmIChzaG93U3VnZ2VzdGlvbnMpIHtcclxuICAvLyAgICAgaW5wdXRSZWYuY3VycmVudC5zdHlsZS5ib3JkZXJCb3R0b21MZWZ0UmFkaXVzID0gXCIwXCI7XHJcbiAgLy8gICAgIGlucHV0UmVmLmN1cnJlbnQuc3R5bGUuYm9yZGVyQm90dG9tUmlnaHRSYWRpdXMgPSBcIjBcIjtcclxuICAvLyAgIH0gZWxzZSB7XHJcbiAgLy8gICAgIGlucHV0UmVmLmN1cnJlbnQuc3R5bGUuYm9yZGVyQm90dG9tTGVmdFJhZGl1cyA9IFwiMjRweFwiO1xyXG4gIC8vICAgICBpbnB1dFJlZi5jdXJyZW50LnN0eWxlLmJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzID0gXCIyNHB4XCI7XHJcbiAgLy8gICB9XHJcbiAgLy8gfSwgW3Nob3dTdWdnZXN0aW9uc10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgbGF0ID0gcHJvcHMudG9fcGxhY2U/Lmdlb21ldHJ5Py5sb2NhdGlvbj8ubGF0O1xyXG4gICAgY29uc3QgbG9uZyA9IHByb3BzLnRvX3BsYWNlPy5nZW9tZXRyeT8ubG9jYXRpb24/LmxuZztcclxuICAgIGNvbnN0IGlucHV0ID0gcHJvcHMudHlwZV9sYXRsb25nO1xyXG4gICAgaWYgKGxhdCAmJiBsb25nKSB7XHJcbiAgICAgIGZldGNoQXV0b2NvbXBsZXRlUmVzdWx0cyhpbnB1dCwgbGF0LCBsb25nKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVDbGlja091dHNpZGUgPSAoZXZlbnQpID0+IHtcclxuICAgICAgaWYgKGlucHV0UmVmLmN1cnJlbnQgJiYgIWlucHV0UmVmLmN1cnJlbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xyXG4gICAgICAgIHNldFNob3dTdWdnZXN0aW9ucyhmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBoYW5kbGVDbGlja091dHNpZGUpO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBoYW5kbGVDbGlja091dHNpZGUpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcbiAgY29uc3Qgb25UaXRsZVNlbGVjdCA9IGFzeW5jIChwbGFjZSkgPT4ge1xyXG4gICAgLy8gcHJvcHMuZGlzcGF0Y2goc2V0UmVzdGF1cmFudERhdGEoW10pKVxyXG4gICAgLy8gcHJvcHMuZGlzcGF0Y2goY2xlYXJBY3Rpb24oKSlcclxuICAgIGxldCBjaGVjayA9IHRydWU7XHJcbiAgICBsZXQgZGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzZWFyY2hfaGlzdG9yeVwiKSkgfHwgW107XHJcbiAgICBpZiAoIXBsYWNlLmxvY2F0aW9uKSB7XHJcbiAgICAgIGNvbnN0IGRhdGFIaXN0b3J5ID0gYXdhaXQgZ2V0RGV0YWlsSWRTZXJ2aWNlKHBsYWNlLnBsYWNlX2lkKTtcclxuICAgICAgaWYgKGNoZWNrKSB7XHJcbiAgICAgICAgaWYgKHBsYWNlICE9IG51bGwgJiYgZGF0YS5sZW5ndGggPCAxMDApIHtcclxuICAgICAgICAgIHBsYWNlLmxvY2F0aW9uID0gZGF0YUhpc3RvcnkuZGF0YS5yZXN1bHQuZ2VvbWV0cnkubG9jYXRpb247XHJcbiAgICAgICAgICAvLyBwbGFjZS5wbGFjZV9pZCA9IFwiMDAwMDAwMDAwMDBcIlxyXG4gICAgICAgICAgZGF0YS5wdXNoKHBsYWNlKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHBsYWNlICE9IG51bGwgJiYgZGF0YS5sZW5ndGggPj0gMTAwKSB7XHJcbiAgICAgICAgICBkYXRhLnNoaWZ0KCk7XHJcbiAgICAgICAgICBkYXRhLnB1c2gocGxhY2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzZWFyY2hfaGlzdG9yeVwiLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcbiAgICAgIGNvbnN0IHBpZCA9IHBsYWNlLmlkIHx8IHBsYWNlLnBsYWNlX2lkO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhwaWQpXHJcbiAgICAgIHByb3BzLmRpc3BhdGNoKGdldERldGFpbEJ5SWRBY3Rpb24ocGlkKSk7XHJcbiAgICAgIC8vIHNldFZhbHVlKGAke3BsYWNlLnN0cnVjdHVyZWRfZm9ybWF0dGluZy5tYWluX3RleHR9IC0gJHtwbGFjZS5zdHJ1Y3R1cmVkX2Zvcm1hdHRpbmcuc2Vjb25kYXJ5X3RleHR9YCk7XHJcbiAgICAgIC8vIHByb3BzLmRpc3BhdGNoKHNldEJveFZpc2libGVBY3Rpb24oXCJpbmZvXCIpKTtcclxuICAgICAgcHJvcHMuZGlzcGF0Y2goc2V0SW5mb1Jlc3RhdXJhbnQodHJ1ZSkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgbGF0TG5nID0ge1xyXG4gICAgICAgIGxhdGl0dWRlOiBwbGFjZS5sb2NhdGlvbi5sYXQsXHJcbiAgICAgICAgbG9uZ2l0dWRlOiBwbGFjZS5sb2NhdGlvbi5sbmcsXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCByZXNwb25zZSA9IChhd2FpdCBnZXREZXRhaWxMYXRMbmdTZXJ2aWNlKGxhdExuZykpLmRhdGEucmVzdWx0cztcclxuICAgICAgLy8gY29uc29sZS5sb2coXCJyZXNwb25lX19fX19fXCIsIHJlc3BvbnNlKVxyXG4gICAgICBmb3IgKGxldCBpID0gcmVzcG9uc2UubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICBwbGFjZS5sb2NhdGlvbi5sYXQgPT09IHJlc3BvbnNlW2ldLmdlb21ldHJ5LmxvY2F0aW9uLmxhdCAmJlxyXG4gICAgICAgICAgcGxhY2UubG9jYXRpb24ubG5nID09PSByZXNwb25zZVtpXS5nZW9tZXRyeS5sb2NhdGlvbi5sbmcgJiZcclxuICAgICAgICAgIHBsYWNlLnN0cnVjdHVyZWRfZm9ybWF0dGluZy5tYWluX3RleHQgPT09IHJlc3BvbnNlW2ldLm5hbWUgJiZcclxuICAgICAgICAgIHBsYWNlLnBsYWNlX2lkICE9IHJlc3BvbnNlW2ldLnBsYWNlX2lkXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBmb3IgKGxldCBpID0gZGF0YS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICBpZiAoZGF0YVtpXS5wbGFjZV9pZCA9PT0gcGxhY2UucGxhY2VfaWQpIHtcclxuICAgICAgICAgICAgICBkYXRhLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcGxhY2UucGxhY2VfaWQgPSByZXNwb25zZVtpXS5wbGFjZV9pZDtcclxuICAgICAgICAgIGRhdGEucHVzaChwbGFjZSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgZm9yIChsZXQgaSA9IGRhdGEubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAvLyBO4bq/dSBjw7MgcuG7k2kgdGjDrCDEkeG6o28gbOG6oWkgcGxhY2UgxJHDsyBsw6puXHJcbiAgICAgICAgaWYgKGRhdGFbaV0ucGxhY2VfaWQgPT09IHBsYWNlLnBsYWNlX2lkKSB7XHJcbiAgICAgICAgICAvLyBwbGFjZS5sb2NhdGlvbiA9IGRhdGFIaXN0b3J5LmRhdGEucmVzdWx0Lmdlb21ldHJ5LmxvY2F0aW9uXHJcbiAgICAgICAgICBkYXRhLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgIGRhdGEucHVzaChwbGFjZSk7XHJcbiAgICAgICAgICAvLyBjaGVjayA9IGZhbHNlXHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic2VhcmNoX2hpc3RvcnlcIiwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG4gICAgICBjb25zdCBwaWQgPSBwbGFjZS5pZCB8fCBwbGFjZS5wbGFjZV9pZDtcclxuICAgICAgcHJvcHMuZGlzcGF0Y2goZ2V0RGV0YWlsQnlJZEFjdGlvbihwaWQpKTtcclxuICAgICAgLy8gc2V0VmFsdWUoYCR7cGxhY2Uuc3RydWN0dXJlZF9mb3JtYXR0aW5nLm1haW5fdGV4dH0gLSAke3BsYWNlLnN0cnVjdHVyZWRfZm9ybWF0dGluZy5zZWNvbmRhcnlfdGV4dH1gKTtcclxuICAgICAgcHJvcHMuZGlzcGF0Y2goc2V0SW5mb1Jlc3RhdXJhbnQodHJ1ZSkpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNsb3NlQm94ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgcHJvcHMuZGlzcGF0Y2goc2V0UmVzdGF1cmFudERhdGEoW10pKTtcclxuICAgIGNvbnN0IHRvUGxhY2VJZCA9IHByb3BzLnRvX3BsYWNlLmlkIHx8IHByb3BzLnRvX3BsYWNlLnBsYWNlX2lkO1xyXG4gICAgY29uc3QgcmVzcG9uc2VUb1BsYWNlID0gYXdhaXQgUmVxdWVzdC5wbGFjZV9kZXRhaWwodG9QbGFjZUlkKTtcclxuICAgIGNvbnN0IHRvUGxhY2UgPSByZXNwb25zZVRvUGxhY2UuZGF0YT8ucmVzdWx0O1xyXG4gICAgY29uc3QgZnJvbVBsYWNlSWQgPSBwcm9wcy5mcm9tX3BsYWNlLmlkIHx8IHByb3BzLmZyb21fcGxhY2UucGxhY2VfaWQ7XHJcbiAgICBjb25zdCByZXNwb25zZUZyb21QbGFjZSA9IGF3YWl0IFJlcXVlc3QucGxhY2VfZGV0YWlsKGZyb21QbGFjZUlkKTtcclxuICAgIGNvbnN0IGZyb21QbGFjZSA9IHJlc3BvbnNlRnJvbVBsYWNlLmRhdGE/LnJlc3VsdDtcclxuICAgIGlmICh0b1BsYWNlICYmIGZyb21QbGFjZSkge1xyXG4gICAgICBjb25zdCB2aWV3cG9ydCA9IHtcclxuICAgICAgICBsb25naXR1ZGU6IHRvUGxhY2UuZ2VvbWV0cnkubG9jYXRpb24ubG5nLFxyXG4gICAgICAgIGxhdGl0dWRlOiB0b1BsYWNlLmdlb21ldHJ5LmxvY2F0aW9uLmxhdCxcclxuICAgICAgICB6b29tOiAxNSxcclxuICAgICAgfTtcclxuICAgICAgcHJvcHMuZGlzcGF0Y2goc2V0TWFwVmlld3BvcnRBY3Rpb24odmlld3BvcnQpKTtcclxuICAgICAgLy8gcHJvcHMuZGlzcGF0Y2goc2V0VHlwZUlucHV0KGZhbHNlKSk7XHJcbiAgICAgIHByb3BzLmRpc3BhdGNoKHNldEJveFZpc2libGVBY3Rpb24oXCJuYXZpZ2F0aW9uXCIpKTtcclxuICAgICAgcHJvcHMuZGlzcGF0Y2goXHJcbiAgICAgICAgbmF2aWdhdGlvblRvQWN0aW9uKFxyXG4gICAgICAgICAgdG9QbGFjZSxcclxuICAgICAgICAgIGAke3RvUGxhY2UubmFtZX0gLSAke3RvUGxhY2UuZm9ybWF0dGVkX2FkZHJlc3N9YFxyXG4gICAgICAgIClcclxuICAgICAgKTtcclxuICAgICAgcHJvcHMuZGlzcGF0Y2goXHJcbiAgICAgICAgbmF2aWdhdGlvbkZyb21BY3Rpb24oXHJcbiAgICAgICAgICBmcm9tUGxhY2UsXHJcbiAgICAgICAgICBgJHtmcm9tUGxhY2UubmFtZX0gLSAke2Zyb21QbGFjZS5mb3JtYXR0ZWRfYWRkcmVzc31gXHJcbiAgICAgICAgKVxyXG4gICAgICApO1xyXG4gICAgICBwcm9wcy5kaXNwYXRjaChzZXRSZWRNYXJrZXJBY3Rpb24oZmFsc2UpKTtcclxuICAgICAgcHJvcHMuZGlzcGF0Y2goc2V0UG9wdXBSaWdodENsaWNrKGZhbHNlKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBtZXNzYWdlLmVycm9yKFwiS2jDtG5nIHTDrG0gdGjhuqV5IHbhu4sgdHLDrSBj4bunYSBi4bqhbiFcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChwcm9wcy50b19wbGFjZSAmJiBwcm9wcy50b19wbGFjZS5nZW9tZXRyeSAmJiBwcm9wcy50eXBlX2xhdGxvbmcpIHtcclxuICAgICAgY29uc3QgbGF0ID0gcHJvcHMudG9fcGxhY2UuZ2VvbWV0cnkubG9jYXRpb24ubGF0O1xyXG4gICAgICBjb25zdCBsb25nID0gcHJvcHMudG9fcGxhY2UuZ2VvbWV0cnkubG9jYXRpb24ubG5nO1xyXG4gICAgICBjb25zdCBpbnB1dCA9IHByb3BzLnR5cGVfbGF0bG9uZztcclxuICAgICAgZmV0Y2hBdXRvY29tcGxldGVSZXN1bHRzKGlucHV0LCBsYXQsIGxvbmcpO1xyXG4gICAgfVxyXG4gIH0sIFtwcm9wcy50b19wbGFjZSwgcHJvcHMudHlwZV9sYXRsb25nXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVDbGlja091dHNpZGUgPSAoZXZlbnQpID0+IHtcclxuICAgICAgaWYgKGlucHV0UmVmLmN1cnJlbnQgJiYgIWlucHV0UmVmLmN1cnJlbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xyXG4gICAgICAgIHNldFNob3dTdWdnZXN0aW9ucyhmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBoYW5kbGVDbGlja091dHNpZGUpO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBoYW5kbGVDbGlja091dHNpZGUpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGljb25Db2xvciA9IGlucHV0VmFsdWUgPyBcIiMxYTczZThcIiA6IFwiaW5oZXJpdFwiO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtc2VydmljZWRldGFpbHNcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpZC1vbW5pYm94LWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdGF1cmFudC1vbW5pYm94XCI+XHJcbiAgICAgICAgICA8ZGl2IGlkPVwib21uaWJveC1zaW5nbGVib3hcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXN0YXVyYW50LW9tbmlib3gtc2luZ2xlYm94XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXN0YXVyYW50LWFjdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgaWQ9XCJyZXN0YXVyYW50LWhlYWRlci0taWNvbi0tYmFja1wiXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiBcIjIwcHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtjbG9zZUJveH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPEFycm93TGVmdE91dGxpbmVkIGlkPVwicmVzdGF1cmFudC0taWNvbi0tdG9wXCIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRvb2x0aXAtLWNvbWViYWNrLS1yZXN0YXVyYW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3QoXCJyb3V0ZV9jb21iZWFja19pMThcIil9XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZXN0YXVyYW50LXNlYXJjaC0tYWRyZXNzXCJcclxuICAgICAgICAgICAgICAgIGlkPVwic2VhcmNoYm94XCJcclxuICAgICAgICAgICAgICAgIHJlZj17aW5wdXRSZWZ9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIGlkPVwic2VhcmNoLS1ib3gtLWlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3QoXCJzZWFyY2hfaW5wdXRcIil9XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtpbnB1dFZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVJbnB1dENsaWNrfVxyXG4gICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIHsvKiB7c2hvd1N1Z2dlc3Rpb25zICYmIHN1Z2dlc3Rpb25zLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3VnZ2VzdGlvbnMtbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtzdWdnZXN0aW9ucy5tYXAoKHN1Z2dlc3Rpb24sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3VnZ2VzdGlvbi1pdGVtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGVSZXN1bHRzICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlUmVzdWx0c1tpbmRleF0gJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvblRpdGxlU2VsZWN0KGF1dG9jb21wbGV0ZVJlc3VsdHNbaW5kZXhdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJlc3RhdXJhbnQtc2VhcmNoLS1hZHJlc3MtLWlucHV0LS1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3N1Z2dlc3Rpb24uaWNvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Z2dlc3Rpb24tY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInN1Z2dlc3Rpb24tdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3N1Z2dlc3Rpb24udGV4dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3N1Z2dlc3Rpb24uc3VidGV4dCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzdWdnZXN0aW9uLXN1YnRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N1Z2dlc3Rpb24uc3VidGV4dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICApfSAqL31cclxuICAgICAgICAgICAgICAgIHthdXRvY29tcGxldGVSZXN1bHRzICYmIGF1dG9jb21wbGV0ZVJlc3VsdHMubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdGF1cmFudC1zZWFyY2gtcmVzdWx0c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIHthdXRvY29tcGxldGVSZXN1bHRzLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVzdGF1cmFudC1zZWFyY2gtYnV0dG9uLWNvbnRhaW5lclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZXN0YXVyYW50LXNlYXJjaC1idXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwic2VhcmNoYm94LXNlYXJjaGJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25UaXRsZVNlbGVjdChpdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshaW5wdXRWYWx1ZS50cmltKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogXCIyMHB4XCIsIGNvbG9yOiBpY29uQ29sb3IgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VhcmNoT3V0bGluZWQgaWQ9XCJzZWFyY2hib3gtc2VhcmNoYnV0dG9uLS1TZWFyY2hPdXRsaW5lZFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidG9vbHRpcC0tc2VhcmNoLS1yZXN0YXVyYW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3QoXCJzZWFyY2hfYnV0dG9uX2kxOFwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdGF1cmFudC1jbGVhci1idXR0b24tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdGF1cmFudC1jbGVhci1idXR0b24td3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZXN0YXVyYW50LWljb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6IFwiMTVweFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEVudmlyb25tZW50T3V0bGluZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXN0YXVyYW50LWNsZWFyLWJ1dHRvbi0tY2xvc2VcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZlcnRpY2FsLWJvcmRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZXN0YXVyYW50LWNsZWFyLWJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Nsb3NlQm94fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogXCIxM3B4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPENsb3NlT3V0bGluZWQgaWQ9XCJjbG9zZS0tc2VydmljZWRldGFpbHNcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRvb2x0aXAtLUNhbmNlbC0tbmVhcmJ5LS1zZWFyY2hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3QoXCJjbG9zZV9idXR0b25faTE4XCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc3RhdXJhbnQtcmVzdWx0cy1oZWFkZXItLXRvcC0tc2Nyb2xsXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc3RhdXJhbnQtcmVzdWx0cy1oZWFkZXItLXRvcFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc3RhdXJhbnQtcmVzdWx0cy1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwicmVzdGF1cmFudC1yZXN1bHRzLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7dChcInJlc3VsdHMtdGl0bGVfYnV0dG9uX2kxOFwiKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZXN0YXVyYW50LXJlc3VsdHMtdGl0bGUtLXNwYW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlVG9vbHRpcH1cclxuICAgICAgICAgICAgICAgICAgICAgIHJlZj17dHJpZ2dlclJlZn1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cInN0YXRpYy9pbWFnZXMvaW5mb19nbV9ncmV5XzE4ZHAucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiaW5mb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZXN1bHQtLXRvb2x0aXAtc2VhcmNoLS1idXR0b25cIj5cclxuICAgICAgICAgICAgICAgICAge2lzVG9vbHRpcFZpc2libGUgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdWx0LS10b29sdGlwLXNlYXJjaFwiIHJlZj17dG9vbHRpcFJlZn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc3VsdC0tdG9vbHRpcC1zZWFyY2gtLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0KFwicmVzdWx0cy10aXRsZV9idXR0b25fc2VhcmNoX2kxOFwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXN1bHQtLXRvb2x0aXAtc2VhcmNoLS10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0KFwicmVzdWx0cy10aXRsZV9idXR0b25fdGV4dF8xX2kxOFwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6IFwiIzE4OTBGRlwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7dChcInJlc3VsdHMtdGl0bGVfYnV0dG9uX3RleHRfMl9pMThcIil9e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0KFwicmVzdWx0cy10aXRsZV9idXR0b25fdGV4dF8zX2kxOFwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAge2F1dG9jb21wbGV0ZVJlc3VsdHMgJiZcclxuICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlUmVzdWx0cy5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZVJlc3VsdHMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlc3RhdXJhbnQtbGlzdC1pdGVtXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblRpdGxlU2VsZWN0KGl0ZW0pfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57aXRlbS5uYW1lfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntpdGVtLmZvcm1hdHRlZF9hZGRyZXNzfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicmVzdGF1cmFudC1pdGVtLWltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5waG90b3MgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ucGhvdG9zWzBdICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnBob3Rvc1swXS5waG90b19yZWZlcmVuY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBnZXRJbWFnZUJ5VHlwZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBodHRwOi8vbG9jYWxob3N0OjgwMDAke2l0ZW0ucGhvdG9zWzBdLnBob3RvX3JlZmVyZW5jZX1gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwL3VwbG9hZHMvcGFya2luZ2xvdHMvZDQ2ZDBmMDQtZWY3Ny00MjFkLWE3MjEtNGRiNjIyOWQyYjU4L3BsX2Q0NmQwZjA0LWVmNzctNDIxZC1hNzIxLTRkYjYyMjlkMmI1OF9kaSVFMSVCQiU4M20tZCVFMSVCQiU5Ny14ZS0wNF9tYWluXzIwMjQxMjE1XzEwMjczOS5wbmdcIiAvLyDEkMaw4budbmcgZOG6q24g4bqjbmggbeG6t2MgxJHhu4tuaFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjgwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjgwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17YEltYWdlIG9mICR7aXRlbS5uYW1lIHx8IFwicmVzdGF1cmFudFwifWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XHJcbiAgZnJvbV9wbGFjZTogc3RhdGUubmF2aWdhdGlvblJlZHVjZXIuZnJvbSxcclxuICB0b19wbGFjZTogc3RhdGUubmF2aWdhdGlvblJlZHVjZXIudG8sXHJcbiAgcmVzdWx0OiBzdGF0ZS5uYXZpZ2F0aW9uUmVkdWNlci5yZXN1bHQsXHJcbiAgcmVzdWx0X3NlbGVjdDogc3RhdGUubmF2aWdhdGlvblJlZHVjZXIucmVzdWx0X3NlbGVjdCxcclxuICByZXNwb25zZV9zdGF0dXM6IHN0YXRlLm5hdmlnYXRpb25SZWR1Y2VyLnJlc3BvbnNlX3N0YXR1cyxcclxuICBteV9sb2NhdGlvbjogc3RhdGUucGxhY2VSZWR1Y2VyLm15X2xvY2F0aW9uLFxyXG4gIHR5cGVJbnB1dDogc3RhdGUubmF2aWdhdGlvblJlZHVjZXIudHlwZV9pbnB1dCxcclxuICBjdXJyZW50X3BsYWNlOiBzdGF0ZS5wbGFjZVJlZHVjZXIuY3VycmVudF9wbGFjZSxcclxuICB0eXBlX2xhdGxvbmc6IHN0YXRlLm5hdmlnYXRpb25SZWR1Y2VyLnR5cGVfbGF0bG9uZyxcclxuICBwbGFjZXM6IHN0YXRlLnNlYXJjaFJlZHVjZXIucGxhY2VzLFxyXG4gIGJveFZpc2libGU6IHN0YXRlLmJveFZpc2libGVSZWR1Y2VyLmJveF92aXNpYmxlLFxyXG4gIGluZm9fYm94X2NvbGxhcHNlZDogc3RhdGUuYm94VmlzaWJsZVJlZHVjZXIuaW5mb19ib3hfY29sbGFwc2VkLFxyXG4gIGxhdExuZ0NlbnRlcjogc3RhdGUucGxhY2VSZWR1Y2VyLmNlbnRlcixcclxuICBvcGVuSGlzdG9yeTogc3RhdGUuc2VhcmNoUmVkdWNlci5zZWFyY2hfaGlzdG9yeSxcclxuICBzZWFyY2hEYXRhOiBzdGF0ZS5zZWFyY2hSZWR1Y2VyLnNlYXJjaF9kYXRhLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShEZXRhaWxzUmVzdGF1cmFudCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=