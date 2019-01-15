webpackHotUpdate("main",{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-logger */ \"./node_modules/redux-logger/dist/redux-logger.js\");\n/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux-thunk */ \"./node_modules/redux-thunk/es/index.js\");\n/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/App */ \"./src/components/App.js\");\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reducers */ \"./src/reducers/index.js\");\n/***************************************\n * *********************\n * created by laridev \n * Baraka Larbi \n * github  :  https://github.com/larbibaraka\n * linkedin : https://www.linkedin.com/in/larbi-baraka-b36651a7/\n * email : laridev@gmail.com\n * *********************\n ******************************************/\n//import react && it's stuff\n\n\n/** redux part */\n\n\n\n\n\n\n/**Reducer */\n\n //init the middleware\n\nvar middleware = [redux_thunk__WEBPACK_IMPORTED_MODULE_5__[\"default\"], Object(redux_logger__WEBPACK_IMPORTED_MODULE_4__[\"createLogger\"])(_reducers__WEBPACK_IMPORTED_MODULE_7__[\"default\"])];\nvar store = Object(redux__WEBPACK_IMPORTED_MODULE_3__[\"createStore\"])(_reducers__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, redux__WEBPACK_IMPORTED_MODULE_3__[\"applyMiddleware\"].apply(void 0, middleware));\nconsole.log(store.getState);\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"Provider\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_App__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n  store: store\n})), document.getElementById('root'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiAqKioqKioqKioqKioqKioqKioqKipcbiAqIGNyZWF0ZWQgYnkgbGFyaWRldiBcbiAqIEJhcmFrYSBMYXJiaSBcbiAqIGdpdGh1YiAgOiAgaHR0cHM6Ly9naXRodWIuY29tL2xhcmJpYmFyYWthXG4gKiBsaW5rZWRpbiA6IGh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9sYXJiaS1iYXJha2EtYjM2NjUxYTcvXG4gKiBlbWFpbCA6IGxhcmlkZXZAZ21haWwuY29tXG4gKiAqKioqKioqKioqKioqKioqKioqKipcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiAvL2ltcG9ydCByZWFjdCAmJiBpdCdzIHN0dWZmXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NICBmcm9tICdyZWFjdC1kb20nO1xuXG4vKiogcmVkdXggcGFydCAqL1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBjcmVhdGVTdG9yZSAsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gXCJyZWR1eFwiO1xuaW1wb3J0IHsgY3JlYXRlTG9nZ2VyIH0gZnJvbSBcInJlZHV4LWxvZ2dlclwiO1xuaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJztcbmltcG9ydCBBcHAgZnJvbSAnLi9jb21wb25lbnRzL0FwcCc7XG4gXG4vKipSZWR1Y2VyICovXG5pbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSAnLi9yZWR1Y2Vycyc7XG5cbi8vaW5pdCB0aGUgbWlkZGxld2FyZVxuY29uc3QgbWlkZGxld2FyZSAgPSBbdGh1bmssIGNyZWF0ZUxvZ2dlcihyb290UmVkdWNlcildO1xuXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJvb3RSZWR1Y2VyICwge30gLGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlKSk7XG5jb25zb2xlLmxvZyhzdG9yZS5nZXRTdGF0ZSlcblJlYWN0RE9NLnJlbmRlcihcbiAgICA8UHJvdmlkZXI+XG4gICAgICAgPEFwcCBzdG9yZSA9IHtzdG9yZX0vPlxuICAgIDwvUHJvdmlkZXI+ICxcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxuKTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ })

})