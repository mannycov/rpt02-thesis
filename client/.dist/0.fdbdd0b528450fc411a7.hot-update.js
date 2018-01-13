exports.id = 0;
exports.modules = {

/***/ "./database/index.js":
/***/ (function(module, exports, __webpack_require__) {

var mongoose = __webpack_require__("mongoose");

mongoose.connect('mongodb://localhost/competely');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('you da man and connected in more ways than you know ');
});

var userSchema = new Schema({
  user_id: ObjectId,
  first_name: String,
  last_name: String,
  username: String,
  email: String,
  // comments: [{ body: String, date: Date }],
  date_of_birth: { type: Date },
  about_me: String,
  password: String,
  friends_id: Array,
  goals_id: Array,
  competitions_id: Array,
  public_profile: Boolean,
  country: String,
  state: String,
  city: String,
  postal: Number,
  trophies: Number
});

var goalsSchema = new Schema({
  goals_id: ObjectId,
  goals_name: String,
  category_id: Array,
  status: String,
  description: String,
  purpose: String,
  checkpoint_id: Number,
  ongoing_goal: Boolean
});

var competitionsSchema = new Schema({
  competitions_id: ObjectId,
  competitions_name: String,
  start_date: Date,
  end_date: Date,
  category_id: Number,
  members: Array,
  winner: Number,
  ranking_list: Array,
  trophies: Array
});

var competitionsSchema = new Schema({
  checkpoint_id: ObjectId,
  checkpoint_name: String,
  status: String
});

var categorySchema = new Schema({
  category_id: ObjectId,
  category_name: String
});

var competitionsSchema = new Schema({
  trophy_id: ObjectId,
  trophy_name: String
});

module.exports = db;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(db, 'db', '/Users/bmathew/HackReactor/rpt02-thesis/database/index.js');

  __REACT_HOT_LOADER__.register(userSchema, 'userSchema', '/Users/bmathew/HackReactor/rpt02-thesis/database/index.js');

  __REACT_HOT_LOADER__.register(goalsSchema, 'goalsSchema', '/Users/bmathew/HackReactor/rpt02-thesis/database/index.js');

  __REACT_HOT_LOADER__.register(competitionsSchema, 'competitionsSchema', '/Users/bmathew/HackReactor/rpt02-thesis/database/index.js');

  __REACT_HOT_LOADER__.register(categorySchema, 'categorySchema', '/Users/bmathew/HackReactor/rpt02-thesis/database/index.js');
}();

;

/***/ }),

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

/***/ }),

/***/ "mongoose":
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ })

};