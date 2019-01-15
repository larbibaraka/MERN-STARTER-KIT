webpackHotUpdate("main",{

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var _sayHello__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sayHello */ \"./src/reducers/sayHello.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  sayHelloReducer: _sayHello__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVkdWNlcnMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvaW5kZXguanM/NzI4OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgc2F5SGVsbG8gZnJvbSAnLi9zYXlIZWxsbyc7ICBcbmV4cG9ydCBkZWZhdWx0IGNvbWJpbmVSZWR1Y2VycyAoeyBcbiAgICBzYXlIZWxsb1JlZHVjZXIgOiBzYXlIZWxsb1xufSk7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/reducers/index.js\n");

/***/ }),

/***/ "./src/reducers/sayHello.js":
/*!**********************************!*\
  !*** ./src/reducers/sayHello.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/index */ \"./src/constants/index.js\");\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nvar initialState = {\n  textValue: ''\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n\n  switch (action.type) {\n    case _constants_index__WEBPACK_IMPORTED_MODULE_0__[\"SAY_HELLO\"]:\n      state = _objectSpread({}, state, {\n        textValue: action.payload\n      });\n      return state;\n\n    default:\n      return state;\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVkdWNlcnMvc2F5SGVsbG8uanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvc2F5SGVsbG8uanM/ZWVmNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTQVlfSEVMTE8gfSBmcm9tICcuLi9jb25zdGFudHMvaW5kZXgnO1xuXG5cblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICB0ZXh0VmFsdWUgOiAnJ1xufVxuXG5leHBvcnQgZGVmYXVsdCAoc3RhdGUgPSBpbml0aWFsU3RhdGUgLCBhY3Rpb249e30pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgU0FZX0hFTExPOlxuICAgICAgICBzdGF0ZSA9IHsuLi5zdGF0ZSAsIHRleHRWYWx1ZSA6IGFjdGlvbi5wYXlsb2FkfTtcbiAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFJQTtBQUNBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUxBO0FBT0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/reducers/sayHello.js\n");

/***/ })

})