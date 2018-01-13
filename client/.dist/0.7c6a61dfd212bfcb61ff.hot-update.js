exports.id = 0;
exports.modules = {

/***/ "./server/server.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__("express");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom_server__ = __webpack_require__("react-dom/server");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_body_parser__ = __webpack_require__("body-parser");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_body_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_express_logging__ = __webpack_require__("express-logging");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_express_logging___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_express_logging__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_logops__ = __webpack_require__("logops");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_logops___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_logops__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__client_src_components_App_jsx__ = __webpack_require__("./client/src/components/App.jsx");









var db = __webpack_require__("./database/index.js");

var app = __WEBPACK_IMPORTED_MODULE_0_express___default()();

app.use(__WEBPACK_IMPORTED_MODULE_4_express_logging___default()(__WEBPACK_IMPORTED_MODULE_5_logops___default.a));

app.use(__WEBPACK_IMPORTED_MODULE_3_body_parser___default.a.urlencoded({ extended: false }));

app.use(__WEBPACK_IMPORTED_MODULE_3_body_parser___default.a.json());

app.get('/testendpoints', function (req, res) {
  res.send('Hello homeboy g money');
});

app.get('*', function (req, res) {
  var application = Object(__WEBPACK_IMPORTED_MODULE_2_react_dom_server__["renderToString"])(__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__client_src_components_App_jsx__["a" /* default */], null));
  var html = '<!doctype html>\n    <html class="no-js" lang="">\n      <head>\n        <meta charset="utf-8">\n        <meta http-equiv="x-ua-compatible" content="ie=edge">\n        <title>HMR all the things!</title>\n        <meta name="description" content="">\n        <meta name="viewport"\n        content="width=device-width,  initial-scale=1">\n        <link rel="stylesheet" type="text/css" href="/client/.dist/styles.css">\n      </head>\n      <body>\n        <div id="root">' + application + '</div>\n        <script src="http://localhost:3001/client.js"></script>\n      </body>\n    </html>';
  res.send(html);
});

var _default = app;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(app, 'app', '/Users/bmathew/HackReactor/rpt02-thesis/server/server.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/bmathew/HackReactor/rpt02-thesis/server/server.js');
}();

;

/***/ })

};