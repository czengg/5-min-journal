require("source-map-support").install();
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  var _typeof2 = __webpack_require__(1);
  
  var _typeof3 = _interopRequireDefault(_typeof2);
  
  var _regenerator = __webpack_require__(2);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _toConsumableArray2 = __webpack_require__(3);
  
  var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);
  
  var _jsx2 = __webpack_require__(4);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _extends2 = __webpack_require__(5);
  
  var _extends3 = _interopRequireDefault(_extends2);
  
  var _set = __webpack_require__(6);
  
  var _set2 = _interopRequireDefault(_set);
  
  var _asyncToGenerator2 = __webpack_require__(7);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  var _assign = __webpack_require__(8);
  
  var _assign2 = _interopRequireDefault(_assign);
  
  __webpack_require__(9);
  
  var _path = __webpack_require__(10);
  
  var _path2 = _interopRequireDefault(_path);
  
  var _express = __webpack_require__(11);
  
  var _express2 = _interopRequireDefault(_express);
  
  var _expressSession = __webpack_require__(12);
  
  var _expressSession2 = _interopRequireDefault(_expressSession);
  
  var _cookieParser = __webpack_require__(13);
  
  var _cookieParser2 = _interopRequireDefault(_cookieParser);
  
  var _bodyParser = __webpack_require__(14);
  
  var _bodyParser2 = _interopRequireDefault(_bodyParser);
  
  var _moment = __webpack_require__(15);
  
  var _moment2 = _interopRequireDefault(_moment);
  
  var _react = __webpack_require__(16);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _server = __webpack_require__(17);
  
  var _server2 = _interopRequireDefault(_server);
  
  var _universalRouter = __webpack_require__(18);
  
  var _universalRouter2 = _interopRequireDefault(_universalRouter);
  
  var _prettyError = __webpack_require__(19);
  
  var _prettyError2 = _interopRequireDefault(_prettyError);
  
  var _passport = __webpack_require__(20);
  
  var _passport2 = _interopRequireDefault(_passport);
  
  var _passportFacebook = __webpack_require__(21);
  
  var _mongodb = __webpack_require__(22);
  
  var _App = __webpack_require__(23);
  
  var _App2 = _interopRequireDefault(_App);
  
  var _Html = __webpack_require__(34);
  
  var _Html2 = _interopRequireDefault(_Html);
  
  var _ErrorPage = __webpack_require__(36);
  
  var _ErrorPage2 = __webpack_require__(38);
  
  var _ErrorPage3 = _interopRequireDefault(_ErrorPage2);
  
  var _models = __webpack_require__(45);
  
  var _models2 = _interopRequireDefault(_models);
  
  var _routes = __webpack_require__(52);
  
  var _routes2 = _interopRequireDefault(_routes);
  
  var _assets = __webpack_require__(95);
  
  var _assets2 = _interopRequireDefault(_assets);
  
  var _config = __webpack_require__(35);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var app = (0, _express2.default)(); // eslint-disable-line import/no-unresolved
  
  var url = 'mongodb://localhost:27017/fiveminutejournal';
  
  //
  // Tell any CSS tooling (such as Material UI) to use all vendor prefixes if the
  // user agent is not known.
  // -----------------------------------------------------------------------------
  global.navigator = global.navigator || {};
  global.navigator.userAgent = global.navigator.userAgent || 'all';
  
  //
  // Register Node.js middleware
  // -----------------------------------------------------------------------------
  app.use(_express2.default.static(_path2.default.join(__dirname, 'public')));
  app.use((0, _cookieParser2.default)());
  app.use(_bodyParser2.default.urlencoded({ extended: true }));
  app.use(_bodyParser2.default.json());
  app.use(_passport2.default.initialize());
  app.use((0, _expressSession2.default)({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true,
    cookie: { secure: false }
  }));
  app.use(_passport2.default.session());
  
  // passport authentication
  _passport2.default.use(new _passportFacebook.Strategy({
    clientID: _config.auth.facebook.id,
    clientSecret: _config.auth.facebook.secret,
    callbackURL: 'http://localhost:3001/login/facebook/return'
  }, function (accessToken, refreshToken, profile, cb) {
    cb(null, profile);
  }));
  
  _passport2.default.serializeUser(function (user, done) {
    console.log('serial', user);
    done(null, user.id);
  });
  
  _passport2.default.deserializeUser(function (user, done) {
    console.log('deserial', user);
    done(null, user);
  });
  
  app.get('/login/facebook', _passport2.default.authenticate('facebook'));
  
  var redirects = { successRedirect: '/journal', failureRedirect: '/login' };
  app.get('/login/facebook/return', _passport2.default.authenticate('facebook', redirects));
  
  app.get('/register', function (req, res) {
    res.redirect('/login');
  });
  
  //
  // Database connection
  // -----------------------------------------------------------------------------
  app.post('/save/:date', function (req, res, next) {
    var date = req.params.date;
  
    var user_id = req.session.passport && req.session.passport.user;
  
    // check if entry already exists for date
    _mongodb.MongoClient.connect(url, function (err, db) {
      if (err || !user_id) {
        res.redirect('/error');
      }
      console.log('Connected correctly to server');
  
      var collection = db.collection('journals');
      var entry = (0, _assign2.default)({}, req.body);
  
      // find journal entry
      collection.findOneAndUpdate({ date: date, user_id: user_id }, { $set: { entry: entry } }, { upsert: true }, function (error, result) {
        if (error) {
          res.redirect('/error');
        }
  
        console.log(result);
  
        next();
      });
    });
  });
  
  app.post('/quote', function (req, res, next) {
    var user_id = req.session.passport && req.session.passport.user;
  
    _mongodb.MongoClient.connect(url, function (err, db) {
      if (err || !user_id) {
        res.redirect('/error');
      }
      console.log('Connected correctly to server');
  
      var collection = db.collection('quotes');
      var entry = (0, _assign2.default)({}, req.body);
  
      // find journal entry
      collection.insertOne(entry, function (error, result) {
        if (error) {
          res.redirect('/error');
        }
  
        res.redirect('/quote');
  
        next();
      });
    });
  });
  
  app.get('/journal', function (req, res) {
    var today = (0, _moment2.default)().format('YYYY-MM-DD');
    res.redirect('/journal/' + today);
  });
  
  app.get('/journal/:date', function (req, res, next) {
    if (!req.session.passport || !req.session.passport.user) {
      res.redirect('/login');
    } else {
      next();
    }
  });
  
  app.post('/journal/:date', function (req, res, next) {
    if (req.session.passport && req.session.passport.user) {
      (function () {
        var date = req.params.date;
  
        var user_id = req.session.passport.user;
  
        _mongodb.MongoClient.connect(url, function (err, db) {
          if (err) {
            res.json(400, {});
          }
          console.log('Connected correctly to server');
  
          var collection = db.collection('journals');
          db.command({ count: 'quotes' }, function (err, count) {
            db.collection('quotes').aggregate([{ $sample: { size: 1 } }], function (err, quotes) {
              if (err) {
                res.json(400, {});
              }
  
              // find journal entry
              collection.findOne({ date: date, user_id: user_id }, function (err, result) {
                if (err) {
                  res.json(400, {});
                }
  
                res.json({
                  entry: result && result.entry || {},
                  quote: quotes[0]
                });
                db.close();
                next();
              });
            });
          });
        });
      })();
    } else {
      res.json({});
      next();
    }
  });
  
  //
  // Register server-side rendering middleware
  // -----------------------------------------------------------------------------
  app.get('*', function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(req, res, next) {
      var _ret2;
  
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              return _context2.delegateYield(_regenerator2.default.mark(function _callee() {
                var css, context, route, data, html;
                return _regenerator2.default.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        css = new _set2.default();
  
                        // Global (context) variables that can be easily accessed from any React component
                        // https://facebook.github.io/react/docs/context.html
  
                        context = {
                          // Enables critical path CSS rendering
                          // https://github.com/kriasoft/isomorphic-style-loader
                          insertCss: function insertCss() {
                            for (var _len = arguments.length, styles = Array(_len), _key = 0; _key < _len; _key++) {
                              styles[_key] = arguments[_key];
                            }
  
                            // eslint-disable-next-line no-underscore-dangle
                            styles.forEach(function (style) {
                              return css.add(style._getCss());
                            });
                          }
                        };
                        _context.next = 4;
                        return _universalRouter2.default.resolve(_routes2.default, {
                          path: req.path,
                          query: (0, _assign2.default)({}, req.query, req.params, res.locals)
                        });
  
                      case 4:
                        route = _context.sent;
  
                        if (!route.redirect) {
                          _context.next = 8;
                          break;
                        }
  
                        res.redirect(route.status || 302, route.redirect);
                        return _context.abrupt('return', {
                          v: void 0
                        });
  
                      case 8:
                        data = (0, _extends3.default)({}, route);
  
                        data.children = _server2.default.renderToString((0, _jsx3.default)(_App2.default, {
                          context: context
                        }, void 0, route.component));
                        data.style = [].concat((0, _toConsumableArray3.default)(css)).join('');
                        data.script = _assets2.default.main.js;
                        data.chunk = _assets2.default[route.chunk] && _assets2.default[route.chunk].js;
                        html = _server2.default.renderToStaticMarkup(_react2.default.createElement(_Html2.default, data));
  
  
                        res.status(route.status || 200);
                        res.send('<!doctype html>' + html);
  
                      case 16:
                      case 'end':
                        return _context.stop();
                    }
                  }
                }, _callee, undefined);
              })(), 't0', 2);
  
            case 2:
              _ret2 = _context2.t0;
  
              if (!((typeof _ret2 === 'undefined' ? 'undefined' : (0, _typeof3.default)(_ret2)) === "object")) {
                _context2.next = 5;
                break;
              }
  
              return _context2.abrupt('return', _ret2.v);
  
            case 5:
              _context2.next = 10;
              break;
  
            case 7:
              _context2.prev = 7;
              _context2.t1 = _context2['catch'](0);
  
              next(_context2.t1);
  
            case 10:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined, [[0, 7]]);
    }));
  
    return function (_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }());
  
  //
  // Error handling
  // -----------------------------------------------------------------------------
  var pe = new _prettyError2.default();
  pe.skipNodeFiles();
  pe.skipPackage('express');
  
  app.use(function (err, req, res, next) {
    // eslint-disable-line no-unused-vars
    console.log(pe.render(err)); // eslint-disable-line no-console
    var html = _server2.default.renderToStaticMarkup((0, _jsx3.default)(_Html2.default, {
      title: 'Internal Server Error',
      description: err.message,
      style: _ErrorPage3.default._getCss()
    }, void 0, _server2.default.renderToString((0, _jsx3.default)(_ErrorPage.ErrorPageWithoutStyle, {
      error: err
    }))));
    res.status(err.status || 500);
    res.send('<!doctype html>' + html);
  });
  
  //
  // Launch the server
  // -----------------------------------------------------------------------------
  /* eslint-disable no-console */
  _models2.default.sync().catch(function (err) {
    return console.error(err.stack);
  }).then(function () {
    app.listen(_config.port, function () {
      console.log('The server is running at http://localhost:' + _config.port + '/');
    });
  });
  /* eslint-enable no-console */

/***/ },
/* 1 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/typeof");

/***/ },
/* 2 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/regenerator");

/***/ },
/* 3 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/toConsumableArray");

/***/ },
/* 4 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/jsx");

/***/ },
/* 5 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/extends");

/***/ },
/* 6 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/core-js/set");

/***/ },
/* 7 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/asyncToGenerator");

/***/ },
/* 8 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/core-js/object/assign");

/***/ },
/* 9 */
/***/ function(module, exports) {

  module.exports = require("babel-polyfill");

/***/ },
/* 10 */
/***/ function(module, exports) {

  module.exports = require("path");

/***/ },
/* 11 */
/***/ function(module, exports) {

  module.exports = require("express");

/***/ },
/* 12 */
/***/ function(module, exports) {

  module.exports = require("express-session");

/***/ },
/* 13 */
/***/ function(module, exports) {

  module.exports = require("cookie-parser");

/***/ },
/* 14 */
/***/ function(module, exports) {

  module.exports = require("body-parser");

/***/ },
/* 15 */
/***/ function(module, exports) {

  module.exports = require("moment");

/***/ },
/* 16 */
/***/ function(module, exports) {

  module.exports = require("react");

/***/ },
/* 17 */
/***/ function(module, exports) {

  module.exports = require("react-dom/server");

/***/ },
/* 18 */
/***/ function(module, exports) {

  module.exports = require("universal-router");

/***/ },
/* 19 */
/***/ function(module, exports) {

  module.exports = require("pretty-error");

/***/ },
/* 20 */
/***/ function(module, exports) {

  module.exports = require("passport");

/***/ },
/* 21 */
/***/ function(module, exports) {

  module.exports = require("passport-facebook");

/***/ },
/* 22 */
/***/ function(module, exports) {

  module.exports = require("mongodb");

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(4);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(24);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(25);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(26);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(27);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(28);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(16);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(29);
  
  var _redux = __webpack_require__(30);
  
  var _index = __webpack_require__(31);
  
  var _index2 = _interopRequireDefault(_index);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var store = (0, _redux.createStore)(_index2.default);
  
  var ContextType = {
    // Enables critical path CSS rendering
    // https://github.com/kriasoft/isomorphic-style-loader
    insertCss: _react.PropTypes.func.isRequired
  };
  
  /**
   * The top-level React component setting context (global) variables
   * that can be accessed from all the child components.
   *
   * https://facebook.github.io/react/docs/context.html
   *
   * Usage example:
   *
   *   const context = {
   *     history: createBrowserHistory(),
   *     store: createStore(),
   *   };
   *
   *   ReactDOM.render(<App context={context}><HomePage /></App>, container);
   */
  
  var App = function (_React$Component) {
    (0, _inherits3.default)(App, _React$Component);
  
    function App() {
      (0, _classCallCheck3.default)(this, App);
      return (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).apply(this, arguments));
    }
  
    (0, _createClass3.default)(App, [{
      key: 'getChildContext',
      value: function getChildContext() {
        return this.props.context;
      }
    }, {
      key: 'render',
      value: function render() {
        // NOTE: If you need to add or modify header, footer etc. of the app,
        // please do that inside the Layout component.
        return (0, _jsx3.default)(_reactRedux.Provider, {
          store: store
        }, void 0, this.props.children);
      }
    }]);
    return App;
  }(_react2.default.Component);
  
  App.childContextTypes = ContextType;
  exports.default = App;

/***/ },
/* 24 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/core-js/object/get-prototype-of");

/***/ },
/* 25 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ },
/* 26 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/createClass");

/***/ },
/* 27 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/possibleConstructorReturn");

/***/ },
/* 28 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/inherits");

/***/ },
/* 29 */
/***/ function(module, exports) {

  module.exports = require("react-redux");

/***/ },
/* 30 */
/***/ function(module, exports) {

  module.exports = require("redux");

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _redux = __webpack_require__(30);
  
  var _journalReducers = __webpack_require__(32);
  
  var _journalReducers2 = _interopRequireDefault(_journalReducers);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var appReducer = (0, _redux.combineReducers)({
    journal: _journalReducers2.default
  });
  
  exports.default = appReducer;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _assign = __webpack_require__(8);
  
  var _assign2 = _interopRequireDefault(_assign);
  
  exports.default = journal;
  
  var _actionTypes = __webpack_require__(33);
  
  var types = _interopRequireWildcard(_actionTypes);
  
  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var defaultState = {
    showMorningContent: undefined,
    showEveningContent: undefined
  };
  
  function journal() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
    var action = arguments[1];
  
    switch (action.type) {
      case types.SET_VALUES:
        var entry = (0, _assign2.default)(state.entry || {}, action.payload);
        return (0, _assign2.default)({}, state, { entry: entry });
      case types.SHOW_MORNING_ROUTINE:
        return (0, _assign2.default)({}, state, { showMorningContent: true });
      case types.HIDE_MORNING_ROUTINE:
        return (0, _assign2.default)({}, state, { showMorningContent: false });
      case types.SHOW_EVENING_ROUTINE:
        return (0, _assign2.default)({}, state, { showEveningContent: true });
      case types.HIDE_EVENING_ROUTINE:
        return (0, _assign2.default)({}, state, { showEveningContent: false });
      default:
        return state;
    }
  }

/***/ },
/* 33 */
/***/ function(module, exports) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var SET_VALUES = exports.SET_VALUES = 'SET_VALUES';
  var SHOW_MORNING_ROUTINE = exports.SHOW_MORNING_ROUTINE = 'SHOW_MORNING_ROUTINE';
  var HIDE_MORNING_ROUTINE = exports.HIDE_MORNING_ROUTINE = 'HIDE_MORNING_ROUTINE';
  var SHOW_EVENING_ROUTINE = exports.SHOW_EVENING_ROUTINE = 'SHOW_EVENING_ROUTINE';
  var HIDE_EVENING_ROUTINE = exports.HIDE_EVENING_ROUTINE = 'HIDE_EVENING_ROUTINE';

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(4);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(16);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _config = __webpack_require__(35);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var _ref2 = (0, _jsx3.default)('meta', {
    charSet: 'utf-8'
  });
  
  var _ref3 = (0, _jsx3.default)('meta', {
    httpEquiv: 'x-ua-compatible',
    content: 'ie=edge'
  });
  
  var _ref4 = (0, _jsx3.default)('meta', {
    name: 'viewport',
    content: 'width=device-width, initial-scale=1'
  });
  
  var _ref5 = (0, _jsx3.default)('link', {
    rel: 'apple-touch-icon',
    href: 'apple-touch-icon.png'
  });
  
  var _ref6 = (0, _jsx3.default)('link', {
    href: 'https://fonts.googleapis.com/css?family=Lobster|Playfair+Display:400i|Raleway|Playfair+Display',
    rel: 'stylesheet'
  });
  
  var _ref7 = (0, _jsx3.default)('script', {
    src: 'https://www.google-analytics.com/analytics.js',
    async: true,
    defer: true
  });
  
  function Html(_ref) {
    var title = _ref.title,
        description = _ref.description,
        style = _ref.style,
        script = _ref.script,
        chunk = _ref.chunk,
        children = _ref.children;
  
    return (0, _jsx3.default)('html', {
      className: 'no-js',
      lang: 'en'
    }, void 0, (0, _jsx3.default)('head', {}, void 0, _ref2, _ref3, (0, _jsx3.default)('title', {}, void 0, title), (0, _jsx3.default)('meta', {
      name: 'description',
      content: description
    }), _ref4, _ref5, _ref6, style && (0, _jsx3.default)('style', {
      id: 'css',
      dangerouslySetInnerHTML: { __html: style }
    })), (0, _jsx3.default)('body', {}, void 0, (0, _jsx3.default)('div', {
      id: 'app',
      style: { flex: 1, display: 'flex' },
      dangerouslySetInnerHTML: { __html: children }
    }), script && (0, _jsx3.default)('script', {
      src: script
    }), chunk && (0, _jsx3.default)('script', {
      src: chunk
    }), _config.analytics.google.trackingId && (0, _jsx3.default)('script', {
      dangerouslySetInnerHTML: { __html: 'window.ga=function(){ga.q.push(arguments)};ga.q=[];ga.l=+new Date;' + ('ga(\'create\',\'' + _config.analytics.google.trackingId + '\',\'auto\');ga(\'send\',\'pageview\')') }
    }), _config.analytics.google.trackingId && _ref7));
  }
  
  exports.default = Html;

/***/ },
/* 35 */
/***/ function(module, exports) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  /* eslint-disable max-len */
  
  var port = exports.port = process.env.PORT || 3000;
  var host = exports.host = process.env.WEBSITE_HOSTNAME || 'localhost:' + port;
  
  var databaseUrl = exports.databaseUrl = process.env.DATABASE_URL || 'sqlite:database.sqlite';
  
  var analytics = exports.analytics = {
  
    // https://analytics.google.com/
    google: {
      trackingId: process.env.GOOGLE_TRACKING_ID }
  
  };
  
  var auth = exports.auth = {
  
    jwt: { secret: process.env.JWT_SECRET || 'React Starter Kit' },
  
    // https://developers.facebook.com/
    facebook: {
      id: process.env.FACEBOOK_APP_ID || '1788343081389727',
      secret: process.env.FACEBOOK_APP_SECRET || 'bd5073289fcd4a2accc23c5a24bd1e39'
    },
  
    // https://cloud.google.com/console/project
    google: {
      id: process.env.GOOGLE_CLIENT_ID || '251410730550-ahcg0ou5mgfhl8hlui1urru7jn5s12km.apps.googleusercontent.com',
      secret: process.env.GOOGLE_CLIENT_SECRET || 'Y8yR9yZAhm9jQ8FKAL8QIEcd'
    },
  
    // https://apps.twitter.com/
    twitter: {
      key: process.env.TWITTER_CONSUMER_KEY || 'Ie20AZvLJI2lQD5Dsgxgjauns',
      secret: process.env.TWITTER_CONSUMER_SECRET || 'KTZ6cxoKnEakQCeSpZlaUCJWGAlTEBJj0y2EMkUBujA7zWSvaQ'
    }
  
  };

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ErrorPageWithoutStyle = undefined;
  
  var _jsx2 = __webpack_require__(4);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(16);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(37);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _ErrorPage = __webpack_require__(38);
  
  var _ErrorPage2 = _interopRequireDefault(_ErrorPage);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref2 = (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)('h1', {}, void 0, 'Error'), (0, _jsx3.default)('p', {}, void 0, 'Sorry, a critical error occurred on this page.')); /**
                                                                                                                                                                                            * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                                                                                                                            *
                                                                                                                                                                                            * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                                                                                                                            *
                                                                                                                                                                                            * This source code is licensed under the MIT license found in the
                                                                                                                                                                                            * LICENSE.txt file in the root directory of this source tree.
                                                                                                                                                                                            */
  
  function ErrorPage(_ref) {
    var error = _ref.error;
  
    if (false) {
      return (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)('h1', {}, void 0, error.name), (0, _jsx3.default)('p', {}, void 0, error.message), (0, _jsx3.default)('pre', {}, void 0, error.stack));
    }
  
    return _ref2;
  }
  
  exports.ErrorPageWithoutStyle = ErrorPage;
  exports.default = (0, _withStyles2.default)(_ErrorPage2.default)(ErrorPage);

/***/ },
/* 37 */
/***/ function(module, exports) {

  module.exports = require("isomorphic-style-loader/lib/withStyles");

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(39);
      var insertCss = __webpack_require__(41);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(40)();
  // imports
  
  
  // module
  exports.push([module.id, "*{line-height:1.2;margin:0}html{color:#888;display:table;font-family:sans-serif;height:100%;text-align:center;width:100%}body{display:table-cell;vertical-align:middle;padding:2em}h1{color:#555;font-size:2em;font-weight:400}p{margin:0 auto;width:280px}pre{text-align:left;margin-top:32px;margin-top:2rem}@media only screen and (max-width:280px){body,p{width:95%}h1{font-size:1.5em;margin:0 0 .3em}}", ""]);
  
  // exports


/***/ },
/* 40 */
/***/ function(module, exports) {

  /*
  	MIT License http://www.opensource.org/licenses/mit-license.php
  	Author Tobias Koppers @sokra
  */
  // css base code, injected by the css-loader
  module.exports = function() {
  	var list = [];
  
  	// return the list of modules as css string
  	list.toString = function toString() {
  		var result = [];
  		for(var i = 0; i < this.length; i++) {
  			var item = this[i];
  			if(item[2]) {
  				result.push("@media " + item[2] + "{" + item[1] + "}");
  			} else {
  				result.push(item[1]);
  			}
  		}
  		return result.join("");
  	};
  
  	// import a list of modules into the list
  	list.i = function(modules, mediaQuery) {
  		if(typeof modules === "string")
  			modules = [[null, modules, ""]];
  		var alreadyImportedModules = {};
  		for(var i = 0; i < this.length; i++) {
  			var id = this[i][0];
  			if(typeof id === "number")
  				alreadyImportedModules[id] = true;
  		}
  		for(i = 0; i < modules.length; i++) {
  			var item = modules[i];
  			// skip already imported module
  			// this implementation is not 100% perfect for weird media query combinations
  			//  when a module is imported multiple times with different media queries.
  			//  I hope this will never occur (Hey this way we have smaller bundles)
  			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
  				if(mediaQuery && !item[2]) {
  					item[2] = mediaQuery;
  				} else if(mediaQuery) {
  					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
  				}
  				list.push(item);
  			}
  		}
  	};
  	return list;
  };


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  var _assign = __webpack_require__(8);
  
  var _assign2 = _interopRequireDefault(_assign);
  
  var _stringify = __webpack_require__(42);
  
  var _stringify2 = _interopRequireDefault(_stringify);
  
  var _slicedToArray2 = __webpack_require__(43);
  
  var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);
  
  var _getIterator2 = __webpack_require__(44);
  
  var _getIterator3 = _interopRequireDefault(_getIterator2);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * Isomorphic CSS style loader for Webpack
   *
   * Copyright © 2015-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var prefix = 's';
  var inserted = {};
  
  // Base64 encoding and decoding - The "Unicode Problem"
  // https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#The_Unicode_Problem
  function b64EncodeUnicode(str) {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
      return String.fromCharCode('0x' + p1);
    }));
  }
  
  /**
   * Remove style/link elements for specified node IDs
   * if they are no longer referenced by UI components.
   */
  function removeCss(ids) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;
  
    try {
      for (var _iterator = (0, _getIterator3.default)(ids), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var id = _step.value;
  
        if (--inserted[id] <= 0) {
          var elem = document.getElementById(prefix + id);
          if (elem) {
            elem.parentNode.removeChild(elem);
          }
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }
  
  /**
   * Example:
   *   // Insert CSS styles object generated by `css-loader` into DOM
   *   var removeCss = insertCss([[1, 'body { color: red; }']]);
   *
   *   // Remove it from the DOM
   *   removeCss();
   */
  function insertCss(styles, options) {
    var _Object$assign = (0, _assign2.default)({
      replace: false,
      prepend: false
    }, options);
  
    var replace = _Object$assign.replace;
    var prepend = _Object$assign.prepend;
  
  
    var ids = [];
    for (var i = 0; i < styles.length; i++) {
      var _styles$i = (0, _slicedToArray3.default)(styles[i], 4);
  
      var moduleId = _styles$i[0];
      var css = _styles$i[1];
      var media = _styles$i[2];
      var sourceMap = _styles$i[3];
  
      var id = moduleId + '-' + i;
  
      ids.push(id);
  
      if (inserted[id]) {
        if (!replace) {
          inserted[id]++;
          continue;
        }
      }
  
      inserted[id] = 1;
  
      var elem = document.getElementById(prefix + id);
      var create = false;
  
      if (!elem) {
        create = true;
  
        elem = document.createElement('style');
        elem.setAttribute('type', 'text/css');
        elem.id = prefix + id;
  
        if (media) {
          elem.setAttribute('media', media);
        }
      }
  
      var cssText = css;
      if (sourceMap) {
        cssText += '\n/*# sourceMappingURL=data:application/json;base64,' + b64EncodeUnicode((0, _stringify2.default)(sourceMap)) + '*/';
        cssText += '\n/*# sourceURL=' + sourceMap.file + '*/';
      }
  
      if ('textContent' in elem) {
        elem.textContent = cssText;
      } else {
        elem.styleSheet.cssText = cssText;
      }
  
      if (create) {
        if (prepend) {
          document.head.insertBefore(elem, document.head.childNodes[0]);
        } else {
          document.head.appendChild(elem);
        }
      }
    }
  
    return removeCss.bind(null, ids);
  }
  
  module.exports = insertCss;

/***/ },
/* 42 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/core-js/json/stringify");

/***/ },
/* 43 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/slicedToArray");

/***/ },
/* 44 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/core-js/get-iterator");

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.UserProfile = exports.UserClaim = exports.UserLogin = exports.User = undefined;
  
  var _sequelize = __webpack_require__(46);
  
  var _sequelize2 = _interopRequireDefault(_sequelize);
  
  var _User = __webpack_require__(48);
  
  var _User2 = _interopRequireDefault(_User);
  
  var _UserLogin = __webpack_require__(49);
  
  var _UserLogin2 = _interopRequireDefault(_UserLogin);
  
  var _UserClaim = __webpack_require__(50);
  
  var _UserClaim2 = _interopRequireDefault(_UserClaim);
  
  var _UserProfile = __webpack_require__(51);
  
  var _UserProfile2 = _interopRequireDefault(_UserProfile);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  _User2.default.hasMany(_UserLogin2.default, {
    foreignKey: 'userId',
    as: 'logins',
    onUpdate: 'cascade',
    onDelete: 'cascade'
  }); /**
       * React Starter Kit (https://www.reactstarterkit.com/)
       *
       * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE.txt file in the root directory of this source tree.
       */
  
  _User2.default.hasMany(_UserClaim2.default, {
    foreignKey: 'userId',
    as: 'claims',
    onUpdate: 'cascade',
    onDelete: 'cascade'
  });
  
  _User2.default.hasOne(_UserProfile2.default, {
    foreignKey: 'userId',
    as: 'profile',
    onUpdate: 'cascade',
    onDelete: 'cascade'
  });
  
  function sync() {
    return _sequelize2.default.sync.apply(_sequelize2.default, arguments);
  }
  
  exports.default = { sync: sync };
  exports.User = _User2.default;
  exports.UserLogin = _UserLogin2.default;
  exports.UserClaim = _UserClaim2.default;
  exports.UserProfile = _UserProfile2.default;

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _sequelize = __webpack_require__(47);
  
  var _sequelize2 = _interopRequireDefault(_sequelize);
  
  var _config = __webpack_require__(35);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var sequelize = new _sequelize2.default(_config.databaseUrl, {
    define: {
      freezeTableName: true
    }
  });
  
  exports.default = sequelize;

/***/ },
/* 47 */
/***/ function(module, exports) {

  module.exports = require("sequelize");

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _sequelize = __webpack_require__(47);
  
  var _sequelize2 = _interopRequireDefault(_sequelize);
  
  var _sequelize3 = __webpack_require__(46);
  
  var _sequelize4 = _interopRequireDefault(_sequelize3);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var User = _sequelize4.default.define('User', {
  
    id: {
      type: _sequelize2.default.UUID,
      defaultValue: _sequelize2.default.UUIDV1,
      primaryKey: true
    },
  
    email: {
      type: _sequelize2.default.STRING(255),
      validate: { isEmail: true }
    },
  
    emailConfirmed: {
      type: _sequelize2.default.BOOLEAN,
      defaultValue: false
    }
  
  }, {
  
    indexes: [{ fields: ['email'] }]
  
  });
  
  exports.default = User;

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _sequelize = __webpack_require__(47);
  
  var _sequelize2 = _interopRequireDefault(_sequelize);
  
  var _sequelize3 = __webpack_require__(46);
  
  var _sequelize4 = _interopRequireDefault(_sequelize3);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var UserLogin = _sequelize4.default.define('UserLogin', {
  
    name: {
      type: _sequelize2.default.STRING(50),
      primaryKey: true
    },
  
    key: {
      type: _sequelize2.default.STRING(100),
      primaryKey: true
    }
  
  });
  
  exports.default = UserLogin;

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _sequelize = __webpack_require__(47);
  
  var _sequelize2 = _interopRequireDefault(_sequelize);
  
  var _sequelize3 = __webpack_require__(46);
  
  var _sequelize4 = _interopRequireDefault(_sequelize3);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var UserClaim = _sequelize4.default.define('UserClaim', {
  
    type: {
      type: _sequelize2.default.STRING
    },
  
    value: {
      type: _sequelize2.default.STRING
    }
  
  });
  
  exports.default = UserClaim;

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _sequelize = __webpack_require__(47);
  
  var _sequelize2 = _interopRequireDefault(_sequelize);
  
  var _sequelize3 = __webpack_require__(46);
  
  var _sequelize4 = _interopRequireDefault(_sequelize3);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var UserProfile = _sequelize4.default.define('UserProfile', {
  
    userId: {
      type: _sequelize2.default.UUID,
      primaryKey: true
    },
  
    displayName: {
      type: _sequelize2.default.STRING(100)
    },
  
    picture: {
      type: _sequelize2.default.STRING(255)
    },
  
    gender: {
      type: _sequelize2.default.STRING(50)
    },
  
    location: {
      type: _sequelize2.default.STRING(100)
    },
  
    website: {
      type: _sequelize2.default.STRING(255)
    }
  
  });
  
  exports.default = UserProfile;

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _regenerator = __webpack_require__(2);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _asyncToGenerator2 = __webpack_require__(7);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  /* eslint-disable global-require */
  
  // The top-level (parent) route
  exports.default = {
  
    path: '/',
  
    // Keep in mind, routes are evaluated in order
    children: [__webpack_require__(53).default, __webpack_require__(78).default, __webpack_require__(82).default, __webpack_require__(86).default,
  
    // place new routes before...
    __webpack_require__(91).default],
  
    action: function action(_ref) {
      var _this = this;
  
      var next = _ref.next;
      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var route;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return next();
  
              case 2:
                route = _context.sent;
  
  
                // Provide default values for title, description etc.
                route.title = (route.title || 'Untitled Page') + ' - www.reactstarterkit.com';
                route.description = route.description || '';
  
                return _context.abrupt('return', route);
  
              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
  };

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _regenerator = __webpack_require__(2);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _jsx2 = __webpack_require__(4);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _stringify = __webpack_require__(42);
  
  var _stringify2 = _interopRequireDefault(_stringify);
  
  var _asyncToGenerator2 = __webpack_require__(7);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  var _react = __webpack_require__(16);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _moment = __webpack_require__(15);
  
  var _moment2 = _interopRequireDefault(_moment);
  
  var _nodeFetch = __webpack_require__(54);
  
  var _nodeFetch2 = _interopRequireDefault(_nodeFetch);
  
  var _Journal = __webpack_require__(55);
  
  var _Journal2 = _interopRequireDefault(_Journal);
  
  var _config = __webpack_require__(35);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var title = 'Journal'; /**
                          * React Starter Kit (https://www.reactstarterkit.com/)
                          *
                          * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                          *
                          * This source code is licensed under the MIT license found in the
                          * LICENSE.txt file in the root directory of this source tree.
                          */
  
  exports.default = {
  
    path: '/journal/:date',
  
    action: function action(route, params) {
      var _this = this;
  
      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var date, defaultQuote, path, onSave, resp, data;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                date = (0, _moment2.default)(params.date);
                defaultQuote = {
                  quote: 'Anyone who has a why to live can bear almost any what.',
                  author: 'Nietzche'
                };
                path = 'http://localhost:3001';
  
                onSave = function onSave(entryDate, body) {
                  (0, _nodeFetch2.default)(path + '/save/' + entryDate, {
                    method: 'POST',
                    body: (0, _stringify2.default)(body),
                    headers: { 'Content-Type': 'application/json' }
                  });
                };
  
                _context.next = 6;
                return (0, _nodeFetch2.default)(path + '/journal/' + params.date, {
                  method: 'POST'
                });
  
              case 6:
                resp = _context.sent;
                _context.next = 9;
                return resp.json();
  
              case 9:
                data = _context.sent;
                return _context.abrupt('return', {
                  title: title,
                  component: (0, _jsx3.default)(_Journal2.default, {
                    date: date,
                    dailyQuote: data.quote || defaultQuote,
                    onSave: onSave,
                    data: data.entry
                  })
                });
  
              case 11:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
  };

/***/ },
/* 54 */
/***/ function(module, exports) {

  module.exports = require("node-fetch");

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(4);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(16);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(37);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _reactRedux = __webpack_require__(29);
  
  var _Layout = __webpack_require__(56);
  
  var _Layout2 = _interopRequireDefault(_Layout);
  
  var _MorningRoutine = __webpack_require__(62);
  
  var _MorningRoutine2 = _interopRequireDefault(_MorningRoutine);
  
  var _EveningRoutine = __webpack_require__(67);
  
  var _EveningRoutine2 = _interopRequireDefault(_EveningRoutine);
  
  var _DateCalendar = __webpack_require__(71);
  
  var _DateCalendar2 = _interopRequireDefault(_DateCalendar);
  
  var _Journal = __webpack_require__(75);
  
  var _Journal2 = _interopRequireDefault(_Journal);
  
  var _journalActions = __webpack_require__(77);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function Journal(_ref) {
    var date = _ref.date,
        dailyQuote = _ref.dailyQuote,
        setValues = _ref.setValues,
        showMorningRoutine = _ref.showMorningRoutine,
        hideMorningRoutine = _ref.hideMorningRoutine,
        showMorningContent = _ref.showMorningContent,
        showEveningRoutine = _ref.showEveningRoutine,
        hideEveningRoutine = _ref.hideEveningRoutine,
        showEveningContent = _ref.showEveningContent,
        onSave = _ref.onSave,
        entry = _ref.entry,
        data = _ref.data;
    var quote = dailyQuote.quote,
        author = dailyQuote.author;
  
    var defaultShowMorning = void 0;
    if (date.get('hour') < 12) {
      defaultShowMorning = true;
    } else {
      defaultShowMorning = false;
    }
  
    return (0, _jsx3.default)(_Layout2.default, {
      header: 'fiveMinuteJournal'
    }, void 0, (0, _jsx3.default)('div', {
      className: _Journal2.default.root
    }, void 0, (0, _jsx3.default)('div', {
      className: _Journal2.default.container
    }, void 0, (0, _jsx3.default)(_DateCalendar2.default, {
      date: date
    }), (0, _jsx3.default)('div', {
      className: _Journal2.default.quoteContainer
    }, void 0, (0, _jsx3.default)('div', {
      className: _Journal2.default.quote
    }, void 0, quote), (0, _jsx3.default)('div', {
      className: _Journal2.default.author
    }, void 0, author.toUpperCase())), (0, _jsx3.default)(_MorningRoutine2.default, {
      dailyQuote: dailyQuote,
      onInputChange: setValues,
      show: showMorningRoutine,
      hide: hideMorningRoutine,
      showContent: showMorningContent === undefined ? defaultShowMorning : showMorningContent,
      entry: data
    }), (0, _jsx3.default)(_EveningRoutine2.default, {
      dailyQuote: dailyQuote,
      onInputChange: setValues,
      show: showEveningRoutine,
      hide: hideEveningRoutine,
      showContent: showEveningContent === undefined ? !defaultShowMorning : showEveningContent,
      entry: data
    }), (0, _jsx3.default)('div', {
      className: _Journal2.default.inputContainer
    }, void 0, (0, _jsx3.default)('button', {
      className: _Journal2.default.button,
      onClick: function onClick() {
        return onSave(date.format('YYYY-MM-DD'), entry);
      }
    }, void 0, 'Save \u2192')))));
  } /**
     * React Starter Kit (https://www.reactstarterkit.com/)
     *
     * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE.txt file in the root directory of this source tree.
     */
  
  function mapStateToProps(state) {
    return {
      showMorningContent: state.journal.showMorningContent,
      showEveningContent: state.journal.showEveningContent,
      entry: state.journal.entry
    };
  }
  
  function actions(dispatch) {
    return {
      setValues: function setValues(key, value) {
        return dispatch((0, _journalActions.setValues)(key, value));
      },
      showMorningRoutine: function showMorningRoutine() {
        return dispatch((0, _journalActions.showMorningRoutine)());
      },
      hideMorningRoutine: function hideMorningRoutine() {
        return dispatch((0, _journalActions.hideMorningRoutine)());
      },
      showEveningRoutine: function showEveningRoutine() {
        return dispatch((0, _journalActions.showEveningRoutine)());
      },
      hideEveningRoutine: function hideEveningRoutine() {
        return dispatch((0, _journalActions.hideEveningRoutine)());
      }
    };
  }
  
  exports.default = (0, _reactRedux.connect)(mapStateToProps, actions)((0, _withStyles2.default)(_Journal2.default)(Journal));

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(4);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(16);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(37);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _Layout = __webpack_require__(57);
  
  var _Layout2 = _interopRequireDefault(_Layout);
  
  var _FiveMinuteJournalHeader = __webpack_require__(59);
  
  var _FiveMinuteJournalHeader2 = _interopRequireDefault(_FiveMinuteJournalHeader);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var _ref2 = (0, _jsx3.default)(_FiveMinuteJournalHeader2.default, {});
  
  function Layout(_ref) {
    var children = _ref.children,
        header = _ref.header;
  
    return (0, _jsx3.default)('div', {
      className: _Layout2.default.container
    }, void 0, header === 'fiveMinuteJournal' && _ref2, _react2.default.Children.only(children));
  }
  
  exports.default = (0, _withStyles2.default)(_Layout2.default)(Layout);

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(58);
      var insertCss = __webpack_require__(41);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(40)();
  // imports
  
  
  // module
  exports.push([module.id, "/*! normalize.css v5.0.0 | MIT License | github.com/necolas/normalize.css */html{font-family:sans-serif;line-height:1.15;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,footer,header,nav,section{display:block}h1{font-size:2em;margin:.67em 0}figcaption,figure,main{display:block}figure{margin:1em 40px}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent;-webkit-text-decoration-skip:objects}a:active,a:hover{outline-width:0}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:inherit;font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}dfn{font-style:italic}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}audio,video{display:inline-block}audio:not([controls]){display:none;height:0}img{border-style:none}svg:not(:root){overflow:hidden}button,input,optgroup,select,textarea{font-family:sans-serif;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{display:inline-block;vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details,menu{display:block}summary{display:list-item}canvas{display:inline-block}[hidden],template{display:none}\n\n/*! React Starter Kit | MIT License | https://www.reactstarterkit.com/ */._1pk24{-webkit-box-flex:1;-ms-flex:1 1 0%;flex:1 1 0%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}", ""]);
  
  // exports
  exports.locals = {
  	"container": "_1pk24"
  };

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(4);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(16);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(37);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _FiveMinuteJournalHeader = __webpack_require__(60);
  
  var _FiveMinuteJournalHeader2 = _interopRequireDefault(_FiveMinuteJournalHeader);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function Header() {
    return (0, _jsx3.default)('div', {
      className: _FiveMinuteJournalHeader2.default.root
    }, void 0, (0, _jsx3.default)('div', {
      className: _FiveMinuteJournalHeader2.default.container
    }, void 0, (0, _jsx3.default)('div', {
      className: _FiveMinuteJournalHeader2.default.banner
    }, void 0, (0, _jsx3.default)('h1', {
      className: _FiveMinuteJournalHeader2.default.bannerTitle
    }, void 0, 'The Five-Minute Journal'))));
  }
  
  exports.default = (0, _withStyles2.default)(_FiveMinuteJournalHeader2.default)(Header);

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(61);
      var insertCss = __webpack_require__(41);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(40)();
  // imports
  
  
  // module
  exports.push([module.id, "._2PU2l{background:#4f4c47;color:#fff;width:100%}._1QiIN{margin:0 auto;width:100%}._2MlKO{text-align:center}._1X-Lx{margin:0;padding:10px;font-family:Playfair Display;font-style:italic;font-weight:400;font-size:30px}", ""]);
  
  // exports
  exports.locals = {
  	"root": "_2PU2l",
  	"container": "_1QiIN",
  	"banner": "_2MlKO",
  	"bannerTitle": "_1X-Lx"
  };

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(4);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(16);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(29);
  
  var _withStyles = __webpack_require__(37);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _MorningRoutine = __webpack_require__(63);
  
  var _MorningRoutine2 = _interopRequireDefault(_MorningRoutine);
  
  var _reactTextareaAutosize = __webpack_require__(65);
  
  var _reactTextareaAutosize2 = _interopRequireDefault(_reactTextareaAutosize);
  
  var _arrow = __webpack_require__(66);
  
  var _arrow2 = _interopRequireDefault(_arrow);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function MorningRoutine(_ref) {
    var onInputChange = _ref.onInputChange,
        show = _ref.show,
        hide = _ref.hide,
        showContent = _ref.showContent,
        entry = _ref.entry;
  
    var gratefulForSample = ['I\'m grateful for the warm bed that I sleep in.', 'I\'m grateful for my body that is working in perfect harmony.', 'I\'m grateful for the incredible firends in my life.'];
    var todayGreatSample = ['Take extra time for myself before leaving work', 'Give a thank you note to Mom', 'Sleep before 10pm'];
    var affirmationSample = 'I am confident and comfortable in my own skin and I live with passion and purpose';
  
    entry = entry || {};
  
    return (0, _jsx3.default)('div', {
      className: _MorningRoutine2.default.root
    }, void 0, (0, _jsx3.default)('button', {
      className: _MorningRoutine2.default.header,
      onClick: showContent ? hide : show
    }, void 0, (0, _jsx3.default)('div', {
      className: _MorningRoutine2.default.headerTitle
    }, void 0, 'MORNING ROUTINE'), (0, _jsx3.default)('img', {
      className: _MorningRoutine2.default.icon,
      src: _arrow2.default,
      style: { transform: showContent ? 'rotate(180deg)' : 'rotate(0deg)' }
    })), showContent && (0, _jsx3.default)('div', {
      className: _MorningRoutine2.default.container
    }, void 0, (0, _jsx3.default)('div', {
      className: _MorningRoutine2.default.inputContainer
    }, void 0, (0, _jsx3.default)('div', {
      className: _MorningRoutine2.default.inputTitle
    }, void 0, 'I am grateful for...'), (0, _jsx3.default)('ol', {
      className: _MorningRoutine2.default.inputs
    }, void 0, gratefulForSample.map(function (placeholder, index) {
      return (0, _jsx3.default)('li', {
        className: _MorningRoutine2.default.input
      }, 'grateful' + index, (0, _jsx3.default)(_reactTextareaAutosize2.default, {
        placeholder: placeholder,
        minRows: 1,
        onChange: function onChange(e) {
          return onInputChange('grateful' + index, e.target.value);
        },
        defaultValue: entry['grateful' + index] || undefined
      }));
    }))), (0, _jsx3.default)('div', {
      className: _MorningRoutine2.default.inputContainer
    }, void 0, (0, _jsx3.default)('div', {
      className: _MorningRoutine2.default.inputTitle
    }, void 0, 'What would make today great?'), (0, _jsx3.default)('ol', {
      className: _MorningRoutine2.default.inputs
    }, void 0, todayGreatSample.map(function (placeholder, index) {
      return (0, _jsx3.default)('li', {
        className: _MorningRoutine2.default.input
      }, 'great' + index, (0, _jsx3.default)(_reactTextareaAutosize2.default, {
        placeholder: placeholder,
        minRows: 1,
        onChange: function onChange(e) {
          return onInputChange('great' + index, e.target.value);
        },
        defaultValue: entry['great' + index] || undefined
      }));
    }))), (0, _jsx3.default)('div', {
      className: _MorningRoutine2.default.inputContainer
    }, void 0, (0, _jsx3.default)('div', {
      className: _MorningRoutine2.default.inputTitle
    }, void 0, 'Daily affirmations. I am...'), (0, _jsx3.default)('div', {
      className: _MorningRoutine2.default.input
    }, void 0, (0, _jsx3.default)(_reactTextareaAutosize2.default, {
      placeholder: affirmationSample,
      minRows: 1,
      onChange: function onChange(e) {
        return onInputChange('affirmation', e.target.value);
      },
      value: entry['affirmation'] || undefined
    })))));
  }
  
  exports.default = (0, _withStyles2.default)(_MorningRoutine2.default)(MorningRoutine);

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(64);
      var insertCss = __webpack_require__(41);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(40)();
  // imports
  
  
  // module
  exports.push([module.id, "._2LInD{margin-bottom:2%}._3B86h{padding-top:1%;padding-left:3%}.hZ3Ng{width:10px;height:5px;vertical-align:middle;margin-left:1%;display:inline-block}._3yisq{border:none;border-bottom:1px solid #979797;cursor:pointer;padding-bottom:1px;width:100%;text-align:left;background:transparent}._3yisq:hover ._3gEQL{font-weight:700}._3yisq:focus{outline:none}._3yisq:hover{border-width:2px;padding-bottom:0}._3gEQL{font-family:Raleway;font-size:20px;font-weight:400;display:inline-block}.LzQ0d{margin-bottom:30px;margin-top:10px}._1CbwI{font-family:Playfair Display,cursive;font-size:24px;color:#616161;font-style:italic}._3gzjC{margin-left:5px;font-family:Playfair Display,serif;font-size:18px;color:#616161}div._36VfP{padding-left:20px}._36VfP textarea{box-sizing:border-box;width:100%;outline:0;border-radius:0;color:#000;font-size:18px;border:none;border-bottom:1px solid #979797;font-family:Playfair Display,serif;background:transparent;padding:5px;margin-top:10px}._36VfP textarea:focus{border-width:2px;padding-bottom:5px}", ""]);
  
  // exports
  exports.locals = {
  	"root": "_2LInD",
  	"container": "_3B86h",
  	"icon": "hZ3Ng",
  	"header": "_3yisq",
  	"headerTitle": "_3gEQL",
  	"inputContainer": "LzQ0d",
  	"inputTitle": "_1CbwI",
  	"inputs": "_3gzjC",
  	"input": "_36VfP"
  };

/***/ },
/* 65 */
/***/ function(module, exports) {

  module.exports = require("react-textarea-autosize");

/***/ },
/* 66 */
/***/ function(module, exports) {

  module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAAAXNSR0IArs4c6QAAAORJREFUKBWdkT8LQWEUh1+RkCQyWGwGq1Jmm80XMPkI8iGkGCmT3aBkMkhKSRaTzWCSjZQiPG/dUydd+XPq6fzec37ndLvHGGM6cIAmeOHX8DHQArujbYen8HAYkAPwbQQxDkHm7S4Th4UqTtAR+BRRDDOQZXN0TIbCiLFqrtAJabrkJLU1yLIROvTq81PoK9MGnXo18U7DFmRZD23/o2vYo3RBzDt0Rjmz6L3qN9Ae1X8r62rIXi8HBTg69Tu5Cj9FDbd86Ql9cd5Xchn+igpTN5DFZ3Txr01qqIS2B1pCXtVd5RNIED0bdIaaMQAAAABJRU5ErkJggg=="

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(4);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(16);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(29);
  
  var _withStyles = __webpack_require__(37);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _EveningRoutine = __webpack_require__(68);
  
  var _EveningRoutine2 = _interopRequireDefault(_EveningRoutine);
  
  var _reactTextareaAutosize = __webpack_require__(65);
  
  var _reactTextareaAutosize2 = _interopRequireDefault(_reactTextareaAutosize);
  
  var _arrow = __webpack_require__(70);
  
  var _arrow2 = _interopRequireDefault(_arrow);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function EveningRoutine(_ref) {
    var onInputChange = _ref.onInputChange,
        show = _ref.show,
        hide = _ref.hide,
        showContent = _ref.showContent,
        entry = _ref.entry;
  
    var happenedSample = ['I remembered to floss.', 'A friend recommended a wonderful book for me.', 'I saw a cute stranger at the cafe'];
    var betterSample = ['I wake up right when the alarm goes off.', 'I go to the gym in the morning.'];
  
    entry = entry || {};
  
    return (0, _jsx3.default)('div', {
      className: _EveningRoutine2.default.root
    }, void 0, (0, _jsx3.default)('button', {
      className: _EveningRoutine2.default.header,
      onClick: showContent ? hide : show
    }, void 0, (0, _jsx3.default)('div', {
      className: _EveningRoutine2.default.headerTitle
    }, void 0, 'EVENING ROUTINE'), (0, _jsx3.default)('img', {
      className: _EveningRoutine2.default.icon,
      src: _arrow2.default,
      style: { transform: showContent ? 'rotate(180deg)' : 'rotate(0deg)' }
    })), showContent && (0, _jsx3.default)('div', {
      className: _EveningRoutine2.default.container
    }, void 0, (0, _jsx3.default)('div', {
      className: _EveningRoutine2.default.inputContainer
    }, void 0, (0, _jsx3.default)('div', {
      className: _EveningRoutine2.default.inputTitle
    }, void 0, '3 Amazing things that happened today...'), (0, _jsx3.default)('ol', {
      className: _EveningRoutine2.default.inputs
    }, void 0, happenedSample.map(function (placeholder, index) {
      return (0, _jsx3.default)('li', {
        className: _EveningRoutine2.default.input
      }, 'happened' + index, (0, _jsx3.default)(_reactTextareaAutosize2.default, {
        placeholder: placeholder,
        minRows: 1,
        onChange: function onChange(e) {
          return onInputChange('happened' + index, e.target.value);
        },
        defaultValue: entry['happened' + index] || undefined
      }));
    }))), (0, _jsx3.default)('div', {
      className: _EveningRoutine2.default.inputContainer
    }, void 0, (0, _jsx3.default)('div', {
      className: _EveningRoutine2.default.inputTitle
    }, void 0, 'How could I have made today even better?'), (0, _jsx3.default)('ol', {
      className: _EveningRoutine2.default.inputs
    }, void 0, betterSample.map(function (placeholder, index) {
      return (0, _jsx3.default)('li', {
        className: _EveningRoutine2.default.input
      }, 'better' + index, (0, _jsx3.default)(_reactTextareaAutosize2.default, {
        placeholder: placeholder,
        minRows: 1,
        onChange: function onChange(e) {
          return onInputChange('better' + index, e.target.value);
        },
        defaultValue: entry['better' + index] || undefined
      }));
    })))));
  }
  
  exports.default = (0, _withStyles2.default)(_EveningRoutine2.default)(EveningRoutine);

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(69);
      var insertCss = __webpack_require__(41);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(40)();
  // imports
  
  
  // module
  exports.push([module.id, "._2evGO{padding-top:1%;padding-left:3%}._3vDUw{width:10px;height:5px;vertical-align:middle;margin-left:1%;display:inline-block}._3KkET{border:none;border-bottom:1px solid #979797;cursor:pointer;padding-bottom:1px;width:100%;text-align:left;background:transparent}._3KkET:hover ._2ri6-{font-weight:700}._3KkET:focus{outline:none}._3KkET:hover{border-width:2px;padding-bottom:0}._2ri6-{font-family:Raleway;font-size:20px;font-weight:400;display:inline-block}._2pNvJ{margin-bottom:30px;margin-top:10px}._3s5a_{font-family:Playfair Display,cursive;font-size:24px;color:#616161;font-style:italic}._23FWt{margin-left:5px;font-family:Playfair Display,serif;font-size:18px;color:#616161}div._7gDA5{padding-left:20px}._7gDA5 textarea{box-sizing:border-box;width:100%;outline:0;border-radius:0;color:#000;font-size:18px;border:none;border-bottom:1px solid #979797;font-family:Playfair Display,serif;background:transparent;padding:5px;margin-top:10px}._7gDA5 textarea:focus{border-width:2px;padding-bottom:5px}", ""]);
  
  // exports
  exports.locals = {
  	"container": "_2evGO",
  	"icon": "_3vDUw",
  	"header": "_3KkET",
  	"headerTitle": "_2ri6-",
  	"inputContainer": "_2pNvJ",
  	"inputTitle": "_3s5a_",
  	"inputs": "_23FWt",
  	"input": "_7gDA5"
  };

/***/ },
/* 70 */
/***/ function(module, exports) {

  module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAAAXNSR0IArs4c6QAAAORJREFUKBWdkT8LQWEUh1+RkCQyWGwGq1Jmm80XMPkI8iGkGCmT3aBkMkhKSRaTzWCSjZQiPG/dUydd+XPq6fzec37ndLvHGGM6cIAmeOHX8DHQArujbYen8HAYkAPwbQQxDkHm7S4Th4UqTtAR+BRRDDOQZXN0TIbCiLFqrtAJabrkJLU1yLIROvTq81PoK9MGnXo18U7DFmRZD23/o2vYo3RBzDt0Rjmz6L3qN9Ae1X8r62rIXi8HBTg69Tu5Cj9FDbd86Ql9cd5Xchn+igpTN5DFZ3Txr01qqIS2B1pCXtVd5RNIED0bdIaaMQAAAABJRU5ErkJggg=="

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(4);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(16);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(37);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _DateCalendar = __webpack_require__(72);
  
  var _DateCalendar2 = _interopRequireDefault(_DateCalendar);
  
  var _calendar = __webpack_require__(74);
  
  var _calendar2 = _interopRequireDefault(_calendar);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref2 = (0, _jsx3.default)('img', {
    src: _calendar2.default
  });
  
  function DateCalendar(_ref) {
    var date = _ref.date;
  
    var dateString = date.format('MMMM D, YYYY').toUpperCase();
  
    return (0, _jsx3.default)('div', {
      className: _DateCalendar2.default.dateContainer
    }, void 0, _ref2, (0, _jsx3.default)('div', {
      className: _DateCalendar2.default.date
    }, void 0, dateString));
  }
  
  exports.default = (0, _withStyles2.default)(_DateCalendar2.default)(DateCalendar);

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(73);
      var insertCss = __webpack_require__(41);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(40)();
  // imports
  
  
  // module
  exports.push([module.id, "._21pl9 img{width:34px;height:35px}._2gZ4K,._21pl9 img{vertical-align:middle}._2gZ4K{display:inline-block;padding-left:15px;font-size:24px;font-family:Raleway;font-weight:600;margin-top:3px}", ""]);
  
  // exports
  exports.locals = {
  	"dateContainer": "_21pl9",
  	"date": "_2gZ4K"
  };

/***/ },
/* 74 */
/***/ function(module, exports) {

  module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABGCAYAAAB12zK5AAAAAXNSR0IArs4c6QAAB1dJREFUeAHtnH1o1VUYx3fv5ta2yJlzvqAlLI0Cw9LNEqMwTNqbU3OiuZT+mIQoREpWEBpotTCR9SKVuKC1wthi02GZmH8Ytg3fSCiHqdgQba5S5zbdS5/nds+Pc4+7u7/7grjtHDj3PM9znvM853x/z3n5/fj9ricuBik3N7cAM8Uej2fn7t2762Jg0rUJfK9FeZrX691YW1v7m+uGQRQTgshdizds2JDQ0NBQ2dvbm0KeQx4BML2uDUShWFBQML2rq+t9MdHd3T2cIicKc76m3mgNHDlyJFnA8NsZXlRUNCxam27bA0a6pjtKoyMmowYkYs93aMOgU4ar7iEkR1Im6X1PTk6+tmvXrn91WX80c1ymkIqg/lRD1uG7Fd/tIRX9CvR/dE9PT8AYWWuu1NTUXA1mI0CZ9cDb2Ni4DCPL8/LyZgFGotmwra2tl7q1LJ4fmHUmn5OTsxkbr5PNqoj46yQAztuzZ8+B/gwsWrQonn7+wJSabeoxtjj61Yp8L+BsYxz1uo4zZfLz8+9jcWygwRcozO4LDH9DD3Uv6kb6oZf0Uxd2FX5l4Z4XqiFgjEfnFjC0dvdCL2WsvwDw9pKSEmfd8wGyYMGC8azSh3H2mNYojlDvge/UM7IW+Hd1vWA0uqXkv/X2UdKnuao7g/lT8rq6unP4/Qy+rQ9/Ss1XMuaVzc3N38rsEIFvynR2dn4DPdanwQ/GPiXvSE9PP1FeXt6h5OGWhPYntJF82xO+S3AqOSDNnz9/JOPNQvg2Wco4QClgcqyDfC+BqVJIdMyUCkkAsQRjX//PDb7f6urqy4xqL+vMPpakcsBYJqOkfAPZdi/z6AU1bMCoGMxgqHFKyW7VnZaWtooxN/vl9wBQvhdkHtcUKzU6JFlYWDiR6NqkK7a3t29kTXKmn14XS5qdYgb21iibDOwBdr9VxcXFqUoWqqyoqLiCjnOrIVjIQjJGNUxISDih6FAlq/NLN27caMLIal2XiFvf0dFxhg4X6fJY0bL44ftj7B0mP6fs0o80fH/Y2tp6ivPHI0oeqgTI45rOGAHEOYuwgl/XKoOSDLaYDuzQ2xrKSTiqZH1aaMijZuvr6z/C98vBDFE3jqg9SLRMCqajy9F3Dnr0eZhvq9EVQtEsPHfT0HdD5dc9RbkY2RTKpeTTIseRl45tXbFixV3CxyJx5R/FzkrN1r74+Pi5XMip+H8FuUwB8S3RUqrpuSad6HDbgoVnIQ5Hiz6duJiYmDjTv3KL6Fe2tf1MpZPoyI3XhJaWFjlIybYedQJgiQyPGML3AU6ZcynVMfg4EXkUHTnFik6hnK+qqqr+FH23KewIwbBEgkpfamD4ZPCXIJxtG2B0fdUuolK3BRBlGhg+ezwPOQhxTBm/efNm2L7DBoROjVIO6dBlRRul3CuolKGIaEv8ObaYEn36RsfxjY6j79Z32IAwX88o44DzrKJViUzCdY7i6aCjr2RRlH+otti9xTe7zwj8T1c60GH7DhsQnFWTe8UpDp+mE5vkqZnwcpPE6l6K/Anh6XQP9HdCxyhVaXbW4et5xcuRHFrOUcP9sgvZ2dk/q3q3pYct1Dc4aZCUlJRurgl9GaIj2wjHNaqOgcsNn+w2DwKAdEylUm60XlNMtKXc1rOoH8KHHMpUOov/izBTkDvPXZDN49Rdo5SClXKeop0cIeQC1kQSIXE8qFlP+0PKCQbTyTPJDhgY/ykzM/MtpROLUo7bbLPLsXVeszcRvzPIOhhb3ICh2XDIiACRp1apqalPMWgBps2xBoHsGuvMq1lZWc+UlZXJo4OYJp52/Y5v2T124qvbMH4e37mAsdaQu2YjmjK6dcI4maN6NldoFNPoUkZGRn00jwx026Fozh3p+JyGnty/nOMiHGU9k2c4rpM5ZcI+mJme/M84Zf+/7Ylzh6xd3yvHRIYiIy4jmjIRexsADQMihCP3ZnaQjgHQ75h1kan+sG4sABAqS8h6/ZCj7ZQxLnlAhLCNbaHe1TMRw86AZZkRU+l8vhpAACDcyr/j5qSqGg+G0r/tOoDYKWNcVQuIBcRAwGBthFhADAQM1kaIBcRAwGBthFhADAQM1kaIBcRAwGBthFhADAQM1kaIBcRAwGBthFhADAQM1kaIBcRAwGBthFhADAQM1kaIBcRAwGBthFhADAQM1kaIBcRAwGBthFhADAQM1kZIf4Dwnau8lj3Ukj7mXokQ52V5Pq3IHGpo8MKMM2boVi9vDTUpEKBnKXqolPqYeem3SSJEfx/8zdvxAeGdAjZvXC4mKp5U/QGcGm9KSsp2iH9ESOUIPvLdzxvCWUppsJa8SiVvXH6ujY/3gGtP+hYUvohYQsVXqhKAulGWLzSPEUZXlXwwlIxrHOPIorxfG89fIvN9Iq+EILYaeiuK8Uo2RMoLfJ5bwEcFjTJeZ/BNTU31kydP/pHoeAj5hCEARhdjLWeci/mYUb718SV9D1ayOBabSUSKLDZjyQF/qOIoDVziCkCcZXz7+VhA/rkiIP0HWYznlOaAeaQAAAAASUVORK5CYII="

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(76);
      var insertCss = __webpack_require__(41);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(40)();
  // imports
  
  
  // module
  exports.push([module.id, "html{width:100%;height:100%}body{margin:0;padding:0;background-color:#fefef6;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1 1 0%;flex:1 1 0%}._2UgH5{margin-top:3%;width:90%}.eBOTk{margin:0 auto;padding:0 0 40px}._2oJHO{padding-left:20px;font-size:20px;font-family:Playfair Display,serif;line-height:34px;margin-top:20px;margin-bottom:5%;color:#4a4a4a;border-left:1px solid #4a4a4a}.xHXyy{font-style:italic}._1I6h9{font-style:normal}._2HPHQ{display:block;box-sizing:border-box;margin:0;padding:10px 16px;width:100%;outline:0;color:#4a4a4a;text-align:center;text-decoration:none;font-size:18px;line-height:1.3333333;cursor:pointer;border:none;background:transparent;font-family:Playfair Display,serif;font-style:oblique;font-size:20px}._2HPHQ:focus,._2HPHQ:hover{color:#979797}", ""]);
  
  // exports
  exports.locals = {
  	"root": "_2UgH5",
  	"container": "eBOTk",
  	"quoteContainer": "_2oJHO",
  	"quote": "xHXyy",
  	"author": "_1I6h9",
  	"button": "_2HPHQ"
  };

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.setValues = setValues;
  exports.showMorningRoutine = showMorningRoutine;
  exports.hideMorningRoutine = hideMorningRoutine;
  exports.showEveningRoutine = showEveningRoutine;
  exports.hideEveningRoutine = hideEveningRoutine;
  
  var _actionTypes = __webpack_require__(33);
  
  var types = _interopRequireWildcard(_actionTypes);
  
  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
  
  function setValues(key, value) {
    var obj = {};
    obj[key] = value;
  
    return {
      type: types.SET_VALUES,
      payload: obj
    };
  }
  
  function showMorningRoutine() {
    return {
      type: types.SHOW_MORNING_ROUTINE
    };
  }
  
  function hideMorningRoutine() {
    return {
      type: types.HIDE_MORNING_ROUTINE
    };
  }
  
  function showEveningRoutine() {
    return {
      type: types.SHOW_EVENING_ROUTINE
    };
  }
  
  function hideEveningRoutine() {
    return {
      type: types.HIDE_EVENING_ROUTINE
    };
  }

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(4);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(16);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Login = __webpack_require__(79);
  
  var _Login2 = _interopRequireDefault(_Login);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var title = 'Log In';
  
  exports.default = {
  
    path: '/login',
  
    action: function action() {
      var _arguments = arguments;
  
      var handleSubmit = function handleSubmit() {
        console.log(_arguments);
      };
  
      return {
        title: title,
        component: (0, _jsx3.default)(_Login2.default, {
          title: title,
          handleSubmit: handleSubmit
        })
      };
    }
  };

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(4);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(16);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(37);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _Layout = __webpack_require__(56);
  
  var _Layout2 = _interopRequireDefault(_Layout);
  
  var _Login = __webpack_require__(80);
  
  var _Login2 = _interopRequireDefault(_Login);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  function Login(_ref) {
    var handleSubmit = _ref.handleSubmit;
  
    return (0, _jsx3.default)(_Layout2.default, {
      header: 'fiveMinuteJournal'
    }, void 0, (0, _jsx3.default)('div', {
      className: _Login2.default.root
    }, void 0, (0, _jsx3.default)('div', {
      className: _Login2.default.container
    }, void 0, (0, _jsx3.default)('a', {
      href: '/login/facebook'
    }, void 0, (0, _jsx3.default)('h1', {
      className: _Login2.default.lead
    }, void 0, (0, _jsx3.default)('span', {
      className: _Login2.default.underline
    }, void 0, 'Sign In With Facebook'), ' \u2192')))));
  }
  
  exports.default = (0, _withStyles2.default)(_Login2.default)(Login);

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(81);
      var insertCss = __webpack_require__(41);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(40)();
  // imports
  
  
  // module
  exports.push([module.id, "html{width:100%;height:100%}body{margin:0;padding:0;background-color:#fefef6;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1 1 0%;flex:1 1 0%}a{text-decoration:none}.rQNQN{width:90%;margin-top:10%}._2BVuU{margin:0 auto;padding:0 0 40px;text-align:center}._1mJBN{font-family:Lobster,cursive;font-size:48px;color:#4a4a4a}._1mJBN:hover{opacity:.9}._1slMJ{text-decoration:underline;display:inline}", ""]);
  
  // exports
  exports.locals = {
  	"root": "rQNQN",
  	"container": "_2BVuU",
  	"lead": "_1mJBN",
  	"underline": "_1slMJ"
  };

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(4);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(16);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Quote = __webpack_require__(83);
  
  var _Quote2 = _interopRequireDefault(_Quote);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var title = 'Add Quote';
  
  var _ref = (0, _jsx3.default)(_Quote2.default, {
    title: title
  });
  
  exports.default = {
  
    path: '/quote',
  
    action: function action() {
      return {
        title: title,
        component: _ref
      };
    }
  };

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(4);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(16);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(37);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _Layout = __webpack_require__(56);
  
  var _Layout2 = _interopRequireDefault(_Layout);
  
  var _Quote = __webpack_require__(84);
  
  var _Quote2 = _interopRequireDefault(_Quote);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  function Quote() {
    return (0, _jsx3.default)(_Layout2.default, {
      header: 'fiveMinuteJournal'
    }, void 0, (0, _jsx3.default)('div', {
      className: _Quote2.default.root
    }, void 0, (0, _jsx3.default)('div', {
      className: _Quote2.default.container
    }, void 0, (0, _jsx3.default)('h1', {
      className: _Quote2.default.lead
    }, void 0, 'Add Quote'), (0, _jsx3.default)('form', {
      method: 'post'
    }, void 0, (0, _jsx3.default)('div', {
      className: _Quote2.default.formGroup
    }, void 0, (0, _jsx3.default)('input', {
      className: _Quote2.default.input,
      id: 'quote',
      type: 'text',
      name: 'quote',
      placeholder: 'quote',
      autoFocus: true
    })), (0, _jsx3.default)('div', {
      className: _Quote2.default.formGroup
    }, void 0, (0, _jsx3.default)('input', {
      className: _Quote2.default.input,
      id: 'author',
      type: 'text',
      name: 'author',
      placeholder: 'author'
    })), (0, _jsx3.default)('div', {
      className: _Quote2.default.formGroup
    }, void 0, (0, _jsx3.default)('button', {
      className: _Quote2.default.button,
      type: 'submit'
    }, void 0, 'Add Quote \u2192'))))));
  }
  
  exports.default = (0, _withStyles2.default)(_Quote2.default)(Quote);

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(85);
      var insertCss = __webpack_require__(41);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(40)();
  // imports
  
  
  // module
  exports.push([module.id, "html{width:100%;height:100%}body{margin:0;padding:0;background-color:#fefef6;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1 1 0%;flex:1 1 0%}._1iUmM{width:90%;margin-top:10%}._4XgJ_{margin:0 auto;padding:0 0 40px;text-align:center}._3cmwp{font-family:Lobster,cursive;font-size:48px;color:#4a4a4a}._25y4A{margin-bottom:15px}.sdM1P{display:block;box-sizing:border-box;width:100%;height:46px;outline:0;border-radius:0;color:#616161;font-size:18px;line-height:1.3333333;-webkit-transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;border:none;border-bottom:1px solid #979797;font-family:Playfair Display,serif;background:transparent}.sdM1P:focus{border-width:2px;padding-bottom:0}._3BFv_{display:block;box-sizing:border-box;margin:0;padding:10px 16px;width:100%;outline:0;color:#4a4a4a;text-align:center;text-decoration:none;font-size:18px;line-height:1.3333333;cursor:pointer;border:none;background:transparent;font-family:Playfair Display,serif;font-style:oblique;font-size:20px}._3BFv_:focus,._3BFv_:hover{color:#979797}", ""]);
  
  // exports
  exports.locals = {
  	"root": "_1iUmM",
  	"container": "_4XgJ_",
  	"lead": "_3cmwp",
  	"formGroup": "_25y4A",
  	"input": "sdM1P",
  	"button": "_3BFv_"
  };

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _regenerator = __webpack_require__(2);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _jsx2 = __webpack_require__(4);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _promise = __webpack_require__(87);
  
  var _promise2 = _interopRequireDefault(_promise);
  
  var _asyncToGenerator2 = __webpack_require__(7);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  var _react = __webpack_require__(16);
  
  var _react2 = _interopRequireDefault(_react);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var title = 'Admin Page'; /**
                             * React Starter Kit (https://www.reactstarterkit.com/)
                             *
                             * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                             *
                             * This source code is licensed under the MIT license found in the
                             * LICENSE.txt file in the root directory of this source tree.
                             */
  
  var isAdmin = false;
  
  exports.default = {
  
    path: '/admin',
  
    action: function action() {
      var _this = this;
  
      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var Admin;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (isAdmin) {
                  _context.next = 2;
                  break;
                }
  
                return _context.abrupt('return', { redirect: '/login' });
  
              case 2:
                _context.next = 4;
                return new _promise2.default(function (resolve) {
                  !/* require.ensure */(function (require) {
                    return resolve(__webpack_require__(88).default);
                  }(__webpack_require__));
                });
  
              case 4:
                Admin = _context.sent;
                return _context.abrupt('return', {
                  title: title,
                  chunk: 'admin',
                  component: (0, _jsx3.default)(Admin, {
                    title: title
                  })
                });
  
              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
  };

/***/ },
/* 87 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/core-js/promise");

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(4);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(16);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(37);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _Layout = __webpack_require__(56);
  
  var _Layout2 = _interopRequireDefault(_Layout);
  
  var _Admin = __webpack_require__(89);
  
  var _Admin2 = _interopRequireDefault(_Admin);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var _ref2 = (0, _jsx3.default)('p', {}, void 0, '...');
  
  function Admin(_ref) {
    var title = _ref.title;
  
    return (0, _jsx3.default)(_Layout2.default, {}, void 0, (0, _jsx3.default)('div', {
      className: _Admin2.default.root
    }, void 0, (0, _jsx3.default)('div', {
      className: _Admin2.default.container
    }, void 0, (0, _jsx3.default)('h1', {}, void 0, title), _ref2)));
  }
  
  exports.default = (0, _withStyles2.default)(_Admin2.default)(Admin);

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(90);
      var insertCss = __webpack_require__(41);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(40)();
  // imports
  
  
  // module
  exports.push([module.id, ".P91vz{padding-left:20px;padding-right:20px}._301ui{margin:0 auto;padding:0 0 40px;max-width:1000px}", ""]);
  
  // exports
  exports.locals = {
  	"root": "P91vz",
  	"container": "_301ui"
  };

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(4);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(16);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _NotFound = __webpack_require__(92);
  
  var _NotFound2 = _interopRequireDefault(_NotFound);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var title = 'Page Not Found';
  
  var _ref = (0, _jsx3.default)(_NotFound2.default, {
    title: title
  });
  
  exports.default = {
  
    path: '*',
  
    action: function action() {
      return {
        title: title,
        component: _ref,
        status: 404
      };
    }
  };

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(4);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(16);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(37);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _Layout = __webpack_require__(56);
  
  var _Layout2 = _interopRequireDefault(_Layout);
  
  var _NotFound = __webpack_require__(93);
  
  var _NotFound2 = _interopRequireDefault(_NotFound);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var _ref2 = (0, _jsx3.default)('p', {}, void 0, 'Sorry, the page you were trying to view does not exist.');
  
  function NotFound(_ref) {
    var title = _ref.title;
  
    return (0, _jsx3.default)(_Layout2.default, {
      full: false
    }, void 0, (0, _jsx3.default)('div', {
      className: _NotFound2.default.root
    }, void 0, (0, _jsx3.default)('div', {
      className: _NotFound2.default.container
    }, void 0, (0, _jsx3.default)('h1', {}, void 0, title), _ref2)));
  }
  
  exports.default = (0, _withStyles2.default)(_NotFound2.default)(NotFound);

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(94);
      var insertCss = __webpack_require__(41);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(40)();
  // imports
  
  
  // module
  exports.push([module.id, "._3whbd{padding-left:20px;padding-right:20px}._1BOHG{margin:0 auto;padding:0 0 40px;max-width:1000px}", ""]);
  
  // exports
  exports.locals = {
  	"root": "_3whbd",
  	"container": "_1BOHG"
  };

/***/ },
/* 95 */
/***/ function(module, exports) {

  module.exports = require("./assets");

/***/ }
/******/ ]);
//# sourceMappingURL=server.js.map