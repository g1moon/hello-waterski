"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/login";
exports.ids = ["pages/api/login"];
exports.modules = {

/***/ "./pages/api/login.js":
/*!****************************!*\
  !*** ./pages/api/login.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((req, res) => {\n  if (req.method === 'POST') {\n    console.log(req.body); //session에 저장\n\n    res.setHeader('Set-Cookie', `a_name=${req.body.id};MAX-Age=3600;HttpOnly,Secure`);\n    res.statusCode = 200;\n    res.json({\n      message: 'ok'\n    });\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvbG9naW4uanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLGlFQUFlLENBQUNBLEdBQUQsRUFBTUMsR0FBTixLQUFjO0FBRXpCLE1BQUlELEdBQUcsQ0FBQ0UsTUFBSixLQUFlLE1BQW5CLEVBQTJCO0FBQ3ZCQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUosR0FBRyxDQUFDSyxJQUFoQixFQUR1QixDQUd2Qjs7QUFDQUosSUFBQUEsR0FBRyxDQUFDSyxTQUFKLENBQWMsWUFBZCxFQUE2QixVQUFTTixHQUFHLENBQUNLLElBQUosQ0FBU0UsRUFBRywrQkFBbEQ7QUFDQU4sSUFBQUEsR0FBRyxDQUFDTyxVQUFKLEdBQWlCLEdBQWpCO0FBQ0FQLElBQUFBLEdBQUcsQ0FBQ1EsSUFBSixDQUFTO0FBQUNDLE1BQUFBLE9BQU8sRUFBRTtBQUFWLEtBQVQ7QUFDSDtBQUNKLENBVkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy9hcGkvbG9naW4uanM/MDM4NCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAocmVxLCByZXMpID0+IHtcblxuICAgIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcbiAgICAgICAgY29uc29sZS5sb2cocmVxLmJvZHkpO1xuXG4gICAgICAgIC8vc2Vzc2lvbuyXkCDsoIDsnqVcbiAgICAgICAgcmVzLnNldEhlYWRlcignU2V0LUNvb2tpZScsIGBhX25hbWU9JHtyZXEuYm9keS5pZH07TUFYLUFnZT0zNjAwO0h0dHBPbmx5LFNlY3VyZWApO1xuICAgICAgICByZXMuc3RhdHVzQ29kZSA9IDIwMDtcbiAgICAgICAgcmVzLmpzb24oe21lc3NhZ2U6ICdvayd9KTtcbiAgICB9XG59OyJdLCJuYW1lcyI6WyJyZXEiLCJyZXMiLCJtZXRob2QiLCJjb25zb2xlIiwibG9nIiwiYm9keSIsInNldEhlYWRlciIsImlkIiwic3RhdHVzQ29kZSIsImpzb24iLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/login.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/login.js"));
module.exports = __webpack_exports__;

})();