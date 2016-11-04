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
  
  var _extends2 = __webpack_require__(4);
  
  var _extends3 = _interopRequireDefault(_extends2);
  
  var _set = __webpack_require__(5);
  
  var _set2 = _interopRequireDefault(_set);
  
  var _asyncToGenerator2 = __webpack_require__(6);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  var _jsxFileName = '/Users/czengg/Documents/interestShit/sideProjects/fiveMinJournal/codebase/src/server.js'; /**
                                                                                                                 * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                                                 *
                                                                                                                 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                                                 *
                                                                                                                 * This source code is licensed under the MIT license found in the
                                                                                                                 * LICENSE.txt file in the root directory of this source tree.
                                                                                                                 */
  
  // eslint-disable-line import/no-unresolved
  
  __webpack_require__(7);
  
  var _path = __webpack_require__(8);
  
  var _path2 = _interopRequireDefault(_path);
  
  var _express = __webpack_require__(9);
  
  var _express2 = _interopRequireDefault(_express);
  
  var _cookieParser = __webpack_require__(10);
  
  var _cookieParser2 = _interopRequireDefault(_cookieParser);
  
  var _bodyParser = __webpack_require__(11);
  
  var _bodyParser2 = _interopRequireDefault(_bodyParser);
  
  var _expressJwt = __webpack_require__(12);
  
  var _expressJwt2 = _interopRequireDefault(_expressJwt);
  
  var _expressGraphql = __webpack_require__(13);
  
  var _expressGraphql2 = _interopRequireDefault(_expressGraphql);
  
  var _jsonwebtoken = __webpack_require__(14);
  
  var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
  
  var _mysql = __webpack_require__(15);
  
  var _mysql2 = _interopRequireDefault(_mysql);
  
  var _moment = __webpack_require__(16);
  
  var _moment2 = _interopRequireDefault(_moment);
  
  var _react = __webpack_require__(17);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _server = __webpack_require__(18);
  
  var _server2 = _interopRequireDefault(_server);
  
  var _universalRouter = __webpack_require__(19);
  
  var _universalRouter2 = _interopRequireDefault(_universalRouter);
  
  var _prettyError = __webpack_require__(20);
  
  var _prettyError2 = _interopRequireDefault(_prettyError);
  
  var _App = __webpack_require__(21);
  
  var _App2 = _interopRequireDefault(_App);
  
  var _Html = __webpack_require__(33);
  
  var _Html2 = _interopRequireDefault(_Html);
  
  var _ErrorPage = __webpack_require__(35);
  
  var _ErrorPage2 = __webpack_require__(37);
  
  var _ErrorPage3 = _interopRequireDefault(_ErrorPage2);
  
  var _passport = __webpack_require__(44);
  
  var _passport2 = _interopRequireDefault(_passport);
  
  var _models = __webpack_require__(47);
  
  var _models2 = _interopRequireDefault(_models);
  
  var _schema = __webpack_require__(54);
  
  var _schema2 = _interopRequireDefault(_schema);
  
  var _routes = __webpack_require__(68);
  
  var _routes2 = _interopRequireDefault(_routes);
  
  var _assets = __webpack_require__(110);
  
  var _assets2 = _interopRequireDefault(_assets);
  
  var _config = __webpack_require__(34);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var app = (0, _express2.default)();
  
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
  
  //
  // Authentication
  // -----------------------------------------------------------------------------
  app.use((0, _expressJwt2.default)({
    secret: _config.auth.jwt.secret,
    credentialsRequired: false,
    getToken: function getToken(req) {
      return req.cookies.id_token;
    }
  }));
  app.use(_passport2.default.initialize());
  
  app.get('/login/facebook', _passport2.default.authenticate('facebook', { scope: ['email', 'user_location'], session: false }));
  app.get('/login/facebook/return', _passport2.default.authenticate('facebook', { failureRedirect: '/login', session: false }), function (req, res) {
    var expiresIn = 60 * 60 * 24 * 180; // 180 days
    var token = _jsonwebtoken2.default.sign(req.user, _config.auth.jwt.secret, { expiresIn: expiresIn });
    res.cookie('id_token', token, { maxAge: 1000 * expiresIn, httpOnly: true });
    res.redirect('/');
  });
  
  app.post('/login', function (req, res) {
    var query = connection.query('SELECT * FROM users WHERE email="' + req.body.email + '"', function (err, result) {
      if (err) {
        res.redirect('/error');
      } else {
        if (result[0].password === req.body.password) {
          req.session = req.session || {};
          req.session.user = result[0];
          res.redirect('/');
        } else {
          res.redirect('/error');
        }
      }
    });
  });
  
  app.post('/register', function (req, res) {
    var user = { email: req.body.email, password: req.body.password };
    var query = connection.query('INSERT INTO users SET ?', user, function (err, result) {
      if (err) {
        res.redirect('/error');
      } else {
        req.session = req.session || {};
        req.session.user = user;
        res.redirect('/');
      }
    });
  });
  
  //
  // Database connection
  // -----------------------------------------------------------------------------
  var connection = _mysql2.default.createConnection({
    host: 'fiveMinJournal.db.10477243.hostedresource.com',
    user: 'fiveMinJournal',
    password: 'JLpJTPrMDBBm@Ee9WJ',
    database: 'fiveMinJournal'
  });
  
  app.get('/save/:date', function (req, res) {
  
    console.log(req.params.date);
    res.redirect('/');
  });
  
  //
  // Register API middleware
  // -----------------------------------------------------------------------------
  app.use('/graphql', (0, _expressGraphql2.default)(function (req) {
    return {
      schema: _schema2.default,
      graphiql: true,
      rootValue: { request: req },
      pretty: ("development") !== 'production'
    };
  }));
  
  //
  // Register server-side rendering middleware
  // -----------------------------------------------------------------------------
  app.get('*', function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(req, res, next) {
      var _ret;
  
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
                          query: req.query
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
  
                        data.children = _server2.default.renderToString(_react2.default.createElement(
                          _App2.default,
                          { context: context, __source: {
                              fileName: _jsxFileName,
                              lineNumber: 159
                            },
                            __self: undefined
                          },
                          route.component
                        ));
                        data.style = [].concat((0, _toConsumableArray3.default)(css)).join('');
                        data.script = _assets2.default.main.js;
                        data.chunk = _assets2.default[route.chunk] && _assets2.default[route.chunk].js;
                        html = _server2.default.renderToStaticMarkup(_react2.default.createElement(_Html2.default, (0, _extends3.default)({}, data, {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 163
                          },
                          __self: undefined
                        })));
  
  
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
              _ret = _context2.t0;
  
              if (!((typeof _ret === 'undefined' ? 'undefined' : (0, _typeof3.default)(_ret)) === "object")) {
                _context2.next = 5;
                break;
              }
  
              return _context2.abrupt('return', _ret.v);
  
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
    var html = _server2.default.renderToStaticMarkup(_react2.default.createElement(
      _Html2.default,
      {
        title: 'Internal Server Error',
        description: err.message,
        style: _ErrorPage3.default._getCss() // eslint-disable-line no-underscore-dangle
        , __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        },
        __self: undefined
      },
      _server2.default.renderToString(_react2.default.createElement(_ErrorPage.ErrorPageWithoutStyle, { error: err, __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        __self: undefined
      }))
    ));
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

  module.exports = require("babel-runtime/helpers/extends");

/***/ },
/* 5 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/core-js/set");

/***/ },
/* 6 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/asyncToGenerator");

/***/ },
/* 7 */
/***/ function(module, exports) {

  module.exports = require("babel-polyfill");

/***/ },
/* 8 */
/***/ function(module, exports) {

  module.exports = require("path");

/***/ },
/* 9 */
/***/ function(module, exports) {

  module.exports = require("express");

/***/ },
/* 10 */
/***/ function(module, exports) {

  module.exports = require("cookie-parser");

/***/ },
/* 11 */
/***/ function(module, exports) {

  module.exports = require("body-parser");

/***/ },
/* 12 */
/***/ function(module, exports) {

  module.exports = require("express-jwt");

/***/ },
/* 13 */
/***/ function(module, exports) {

  module.exports = require("express-graphql");

/***/ },
/* 14 */
/***/ function(module, exports) {

  module.exports = require("jsonwebtoken");

/***/ },
/* 15 */
/***/ function(module, exports) {

  module.exports = require("mysql");

/***/ },
/* 16 */
/***/ function(module, exports) {

  module.exports = require("moment");

/***/ },
/* 17 */
/***/ function(module, exports) {

  module.exports = require("react");

/***/ },
/* 18 */
/***/ function(module, exports) {

  module.exports = require("react-dom/server");

/***/ },
/* 19 */
/***/ function(module, exports) {

  module.exports = require("universal-router");

/***/ },
/* 20 */
/***/ function(module, exports) {

  module.exports = require("pretty-error");

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getPrototypeOf = __webpack_require__(22);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(23);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(24);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(25);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(26);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _jsxFileName = '/Users/czengg/Documents/interestShit/sideProjects/fiveMinJournal/codebase/src/components/App.js'; /**
                                                                                                                         * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                                                         *
                                                                                                                         * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                                                         *
                                                                                                                         * This source code is licensed under the MIT license found in the
                                                                                                                         * LICENSE.txt file in the root directory of this source tree.
                                                                                                                         */
  
  var _react = __webpack_require__(17);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(27);
  
  var _redux = __webpack_require__(28);
  
  var _index = __webpack_require__(29);
  
  var _index2 = _interopRequireDefault(_index);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
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
        return _react2.default.createElement(
          _reactRedux.Provider,
          { store: store, __source: {
              fileName: _jsxFileName,
              lineNumber: 54
            },
            __self: this
          },
          this.props.children
        );
      }
    }]);
    return App;
  }(_react2.default.Component);
  
  App.propTypes = {
    context: _react.PropTypes.shape(ContextType).isRequired,
    children: _react.PropTypes.element.isRequired
  };
  App.childContextTypes = ContextType;
  exports.default = App;

/***/ },
/* 22 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/core-js/object/get-prototype-of");

/***/ },
/* 23 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ },
/* 24 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/createClass");

/***/ },
/* 25 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/possibleConstructorReturn");

/***/ },
/* 26 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/inherits");

/***/ },
/* 27 */
/***/ function(module, exports) {

  module.exports = require("react-redux");

/***/ },
/* 28 */
/***/ function(module, exports) {

  module.exports = require("redux");

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _redux = __webpack_require__(28);
  
  var _journalReducers = __webpack_require__(30);
  
  var _journalReducers2 = _interopRequireDefault(_journalReducers);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var appReducer = (0, _redux.combineReducers)({
    journal: _journalReducers2.default
  });
  
  exports.default = appReducer;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _assign = __webpack_require__(31);
  
  var _assign2 = _interopRequireDefault(_assign);
  
  exports.default = journal;
  
  var _actionTypes = __webpack_require__(32);
  
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
        return (0, _assign2.default)({}, state, action.payload);
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
/* 31 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/core-js/object/assign");

/***/ },
/* 32 */
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
/* 33 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _jsxFileName = '/Users/czengg/Documents/interestShit/sideProjects/fiveMinJournal/codebase/src/components/Html.js'; /**
                                                                                                                          * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                                                          *
                                                                                                                          * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                                                          *
                                                                                                                          * This source code is licensed under the MIT license found in the
                                                                                                                          * LICENSE.txt file in the root directory of this source tree.
                                                                                                                          */
  
  var _react = __webpack_require__(17);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _config = __webpack_require__(34);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function Html(_ref) {
    var title = _ref.title,
        description = _ref.description,
        style = _ref.style,
        script = _ref.script,
        chunk = _ref.chunk,
        children = _ref.children;
  
    return _react2.default.createElement(
      'html',
      { className: 'no-js', lang: 'en', __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      },
      _react2.default.createElement(
        'head',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          },
          __self: this
        },
        _react2.default.createElement('meta', { charSet: 'utf-8', __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          },
          __self: this
        }),
        _react2.default.createElement('meta', { httpEquiv: 'x-ua-compatible', content: 'ie=edge', __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          },
          __self: this
        }),
        _react2.default.createElement(
          'title',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 19
            },
            __self: this
          },
          title
        ),
        _react2.default.createElement('meta', { name: 'description', content: description, __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          },
          __self: this
        }),
        _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1', __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: this
        }),
        _react2.default.createElement('link', { rel: 'apple-touch-icon', href: 'apple-touch-icon.png', __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          __self: this
        }),
        _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Lobster|Playfair+Display:400i|Raleway|Playfair+Display', rel: 'stylesheet', __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        }),
        style && _react2.default.createElement('style', { id: 'css', dangerouslySetInnerHTML: { __html: style }, __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          },
          __self: this
        })
      ),
      _react2.default.createElement(
        'body',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: this
        },
        _react2.default.createElement('div', { id: 'app', style: { flex: 1, display: 'flex' }, dangerouslySetInnerHTML: { __html: children }, __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          },
          __self: this
        }),
        script && _react2.default.createElement('script', { src: script, __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          __self: this
        }),
        chunk && _react2.default.createElement('script', { src: chunk, __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          },
          __self: this
        }),
        _config.analytics.google.trackingId && _react2.default.createElement('script', {
          dangerouslySetInnerHTML: { __html: 'window.ga=function(){ga.q.push(arguments)};ga.q=[];ga.l=+new Date;' + ('ga(\'create\',\'' + _config.analytics.google.trackingId + '\',\'auto\');ga(\'send\',\'pageview\')') },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          __self: this
        }),
        _config.analytics.google.trackingId && _react2.default.createElement('script', { src: 'https://www.google-analytics.com/analytics.js', async: true, defer: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          __self: this
        })
      )
    );
  }
  
  Html.propTypes = {
    title: _react.PropTypes.string.isRequired,
    description: _react.PropTypes.string.isRequired,
    style: _react.PropTypes.string,
    script: _react.PropTypes.string,
    chunk: _react.PropTypes.string,
    children: _react.PropTypes.string
  };
  
  exports.default = Html;

/***/ },
/* 34 */
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
      id: process.env.FACEBOOK_APP_ID || '186244551745631',
      secret: process.env.FACEBOOK_APP_SECRET || 'a970ae3240ab4b9b8aae0f9f0661c6fc'
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
/* 35 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ErrorPageWithoutStyle = undefined;
  var _jsxFileName = '/Users/czengg/Documents/interestShit/sideProjects/fiveMinJournal/codebase/src/routes/error/ErrorPage.js'; /**
                                                                                                                                 * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                                                                 *
                                                                                                                                 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                                                                 *
                                                                                                                                 * This source code is licensed under the MIT license found in the
                                                                                                                                 * LICENSE.txt file in the root directory of this source tree.
                                                                                                                                 */
  
  var _react = __webpack_require__(17);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(36);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _ErrorPage = __webpack_require__(37);
  
  var _ErrorPage2 = _interopRequireDefault(_ErrorPage);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function ErrorPage(_ref) {
    var error = _ref.error;
  
    if (true) {
      return _react2.default.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          },
          __self: this
        },
        _react2.default.createElement(
          'h1',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 18
            },
            __self: this
          },
          error.name
        ),
        _react2.default.createElement(
          'p',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 19
            },
            __self: this
          },
          error.message
        ),
        _react2.default.createElement(
          'pre',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 20
            },
            __self: this
          },
          error.stack
        )
      );
    }
  
    return _react2.default.createElement(
      'div',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      },
      _react2.default.createElement(
        'h1',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          },
          __self: this
        },
        'Error'
      ),
      _react2.default.createElement(
        'p',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          __self: this
        },
        'Sorry, a critical error occurred on this page.'
      )
    );
  }
  
  ErrorPage.propTypes = {
    error: _react.PropTypes.object.isRequired
  };
  
  exports.ErrorPageWithoutStyle = ErrorPage;
  exports.default = (0, _withStyles2.default)(_ErrorPage2.default)(ErrorPage);

/***/ },
/* 36 */
/***/ function(module, exports) {

  module.exports = require("isomorphic-style-loader/lib/withStyles");

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(38);
      var insertCss = __webpack_require__(40);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false}!./../../../node_modules/postcss-loader/index.js?pack=default!./ErrorPage.css", function() {
          content = require("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false}!./../../../node_modules/postcss-loader/index.js?pack=default!./ErrorPage.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(39)();
  // imports
  
  
  // module
  exports.push([module.id, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n* {\n  line-height: 1.2;\n  margin: 0;\n}\n\nhtml {\n  color: #888;\n  display: table;\n  font-family: sans-serif;\n  height: 100%;\n  text-align: center;\n  width: 100%;\n}\n\nbody {\n  display: table-cell;\n  vertical-align: middle;\n  padding: 2em;\n}\n\nh1 {\n  color: #555;\n  font-size: 2em;\n  font-weight: 400;\n}\n\np {\n  margin: 0 auto;\n  width: 280px;\n}\n\npre {\n  text-align: left;\n  margin-top: 32px;\n  margin-top: 2rem;\n}\n\n@media only screen and (max-width: 280px) {\n  body,\n  p {\n    width: 95%;\n  }\n\n  h1 {\n    font-size: 1.5em;\n    margin: 0 0 0.3em;\n  }\n}\n", "", {"version":3,"sources":["/./routes/error/ErrorPage.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;AAEH;EACE,iBAAiB;EACjB,UAAU;CACX;;AAED;EACE,YAAY;EACZ,eAAe;EACf,wBAAwB;EACxB,aAAa;EACb,mBAAmB;EACnB,YAAY;CACb;;AAED;EACE,oBAAoB;EACpB,uBAAuB;EACvB,aAAa;CACd;;AAED;EACE,YAAY;EACZ,eAAe;EACf,iBAAiB;CAClB;;AAED;EACE,eAAe;EACf,aAAa;CACd;;AAED;EACE,iBAAiB;EACjB,iBAAiB;EAAjB,iBAAiB;CAClB;;AAED;EACE;;IAEE,WAAW;GACZ;;EAED;IACE,iBAAiB;IACjB,kBAAkB;GACnB;CACF","file":"ErrorPage.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n* {\n  line-height: 1.2;\n  margin: 0;\n}\n\nhtml {\n  color: #888;\n  display: table;\n  font-family: sans-serif;\n  height: 100%;\n  text-align: center;\n  width: 100%;\n}\n\nbody {\n  display: table-cell;\n  vertical-align: middle;\n  padding: 2em;\n}\n\nh1 {\n  color: #555;\n  font-size: 2em;\n  font-weight: 400;\n}\n\np {\n  margin: 0 auto;\n  width: 280px;\n}\n\npre {\n  text-align: left;\n  margin-top: 2rem;\n}\n\n@media only screen and (max-width: 280px) {\n  body,\n  p {\n    width: 95%;\n  }\n\n  h1 {\n    font-size: 1.5em;\n    margin: 0 0 0.3em;\n  }\n}\n"],"sourceRoot":"webpack://"}]);
  
  // exports


/***/ },
/* 39 */
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
/* 40 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  var _assign = __webpack_require__(31);
  
  var _assign2 = _interopRequireDefault(_assign);
  
  var _stringify = __webpack_require__(41);
  
  var _stringify2 = _interopRequireDefault(_stringify);
  
  var _slicedToArray2 = __webpack_require__(42);
  
  var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);
  
  var _getIterator2 = __webpack_require__(43);
  
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
/* 41 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/core-js/json/stringify");

/***/ },
/* 42 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/slicedToArray");

/***/ },
/* 43 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/core-js/get-iterator");

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _regenerator = __webpack_require__(2);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _asyncToGenerator2 = __webpack_require__(6);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  var _passport = __webpack_require__(45);
  
  var _passport2 = _interopRequireDefault(_passport);
  
  var _passportFacebook = __webpack_require__(46);
  
  var _models = __webpack_require__(47);
  
  var _config = __webpack_require__(34);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * Sign in with Facebook.
   */
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  /**
   * Passport.js reference implementation.
   * The database schema used in this sample is available at
   * https://github.com/membership/membership.db/tree/master/postgres
   */
  
  _passport2.default.use(new _passportFacebook.Strategy({
    clientID: _config.auth.facebook.id,
    clientSecret: _config.auth.facebook.secret,
    callbackURL: '/login/facebook/return',
    profileFields: ['name', 'email', 'link', 'locale', 'timezone'],
    passReqToCallback: true
  }, function (req, accessToken, refreshToken, profile, done) {
    /* eslint-disable no-underscore-dangle */
    var loginName = 'facebook';
    var claimType = 'urn:facebook:access_token';
    var fooBar = function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var userLogin, user, users, _user;
  
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!req.user) {
                  _context.next = 14;
                  break;
                }
  
                _context.next = 3;
                return _models.UserLogin.findOne({
                  attributes: ['name', 'key'],
                  where: { name: loginName, key: profile.id }
                });
  
              case 3:
                userLogin = _context.sent;
  
                if (!userLogin) {
                  _context.next = 8;
                  break;
                }
  
                // There is already a Facebook account that belongs to you.
                // Sign in with that account or delete it, then link it with your current account.
                done();
                _context.next = 12;
                break;
  
              case 8:
                _context.next = 10;
                return _models.User.create({
                  id: req.user.id,
                  email: profile._json.email,
                  logins: [{ name: loginName, key: profile.id }],
                  claims: [{ type: claimType, value: profile.id }],
                  profile: {
                    displayName: profile.displayName,
                    gender: profile._json.gender,
                    picture: 'https://graph.facebook.com/' + profile.id + '/picture?type=large'
                  }
                }, {
                  include: [{ model: _models.UserLogin, as: 'logins' }, { model: _models.UserClaim, as: 'claims' }, { model: _models.UserProfile, as: 'profile' }]
                });
  
              case 10:
                user = _context.sent;
  
                done(null, {
                  id: user.id,
                  email: user.email
                });
  
              case 12:
                _context.next = 32;
                break;
  
              case 14:
                _context.next = 16;
                return _models.User.findAll({
                  attributes: ['id', 'email'],
                  where: { '$logins.name$': loginName, '$logins.key$': profile.id },
                  include: [{
                    attributes: ['name', 'key'],
                    model: _models.UserLogin,
                    as: 'logins',
                    required: true
                  }]
                });
  
              case 16:
                users = _context.sent;
  
                if (!users.length) {
                  _context.next = 21;
                  break;
                }
  
                done(null, users[0]);
                _context.next = 32;
                break;
  
              case 21:
                _context.next = 23;
                return _models.User.findOne({ where: { email: profile._json.email } });
  
              case 23:
                _user = _context.sent;
  
                if (!_user) {
                  _context.next = 28;
                  break;
                }
  
                // There is already an account using this email address. Sign in to
                // that account and link it with Facebook manually from Account Settings.
                done(null);
                _context.next = 32;
                break;
  
              case 28:
                _context.next = 30;
                return _models.User.create({
                  email: profile._json.email,
                  emailConfirmed: true,
                  logins: [{ name: loginName, key: profile.id }],
                  claims: [{ type: claimType, value: accessToken }],
                  profile: {
                    displayName: profile.displayName,
                    gender: profile._json.gender,
                    picture: 'https://graph.facebook.com/' + profile.id + '/picture?type=large'
                  }
                }, {
                  include: [{ model: _models.UserLogin, as: 'logins' }, { model: _models.UserClaim, as: 'claims' }, { model: _models.UserProfile, as: 'profile' }]
                });
  
              case 30:
                _user = _context.sent;
  
                done(null, {
                  id: _user.id,
                  email: _user.email
                });
  
              case 32:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, undefined);
      }));
  
      return function fooBar() {
        return _ref.apply(this, arguments);
      };
    }();
  
    fooBar().catch(done);
  }));
  
  exports.default = _passport2.default;

/***/ },
/* 45 */
/***/ function(module, exports) {

  module.exports = require("passport");

/***/ },
/* 46 */
/***/ function(module, exports) {

  module.exports = require("passport-facebook");

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.UserProfile = exports.UserClaim = exports.UserLogin = exports.User = undefined;
  
  var _sequelize = __webpack_require__(48);
  
  var _sequelize2 = _interopRequireDefault(_sequelize);
  
  var _User = __webpack_require__(50);
  
  var _User2 = _interopRequireDefault(_User);
  
  var _UserLogin = __webpack_require__(51);
  
  var _UserLogin2 = _interopRequireDefault(_UserLogin);
  
  var _UserClaim = __webpack_require__(52);
  
  var _UserClaim2 = _interopRequireDefault(_UserClaim);
  
  var _UserProfile = __webpack_require__(53);
  
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
/* 48 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _sequelize = __webpack_require__(49);
  
  var _sequelize2 = _interopRequireDefault(_sequelize);
  
  var _config = __webpack_require__(34);
  
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
/* 49 */
/***/ function(module, exports) {

  module.exports = require("sequelize");

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _sequelize = __webpack_require__(49);
  
  var _sequelize2 = _interopRequireDefault(_sequelize);
  
  var _sequelize3 = __webpack_require__(48);
  
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
/* 51 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _sequelize = __webpack_require__(49);
  
  var _sequelize2 = _interopRequireDefault(_sequelize);
  
  var _sequelize3 = __webpack_require__(48);
  
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
/* 52 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _sequelize = __webpack_require__(49);
  
  var _sequelize2 = _interopRequireDefault(_sequelize);
  
  var _sequelize3 = __webpack_require__(48);
  
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
/* 53 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _sequelize = __webpack_require__(49);
  
  var _sequelize2 = _interopRequireDefault(_sequelize);
  
  var _sequelize3 = __webpack_require__(48);
  
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
/* 54 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _graphql = __webpack_require__(55);
  
  var _me = __webpack_require__(56);
  
  var _me2 = _interopRequireDefault(_me);
  
  var _content = __webpack_require__(58);
  
  var _content2 = _interopRequireDefault(_content);
  
  var _news = __webpack_require__(64);
  
  var _news2 = _interopRequireDefault(_news);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var schema = new _graphql.GraphQLSchema({
    query: new _graphql.GraphQLObjectType({
      name: 'Query',
      fields: {
        me: _me2.default,
        content: _content2.default,
        news: _news2.default
      }
    })
  });
  
  exports.default = schema;

/***/ },
/* 55 */
/***/ function(module, exports) {

  module.exports = require("graphql");

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _UserType = __webpack_require__(57);
  
  var _UserType2 = _interopRequireDefault(_UserType);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var me = {
    type: _UserType2.default,
    resolve: function resolve(_ref) {
      var request = _ref.request;
  
      return request.user && {
        id: request.user.id,
        email: request.user.email
      };
    }
  }; /**
      * React Starter Kit (https://www.reactstarterkit.com/)
      *
      * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
      *
      * This source code is licensed under the MIT license found in the
      * LICENSE.txt file in the root directory of this source tree.
      */
  
  exports.default = me;

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _graphql = __webpack_require__(55);
  
  var UserType = new _graphql.GraphQLObjectType({
    name: 'User',
    fields: {
      id: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLID) },
      email: { type: _graphql.GraphQLString }
    }
  }); /**
       * React Starter Kit (https://www.reactstarterkit.com/)
       *
       * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE.txt file in the root directory of this source tree.
       */
  
  exports.default = UserType;

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getIterator2 = __webpack_require__(43);
  
  var _getIterator3 = _interopRequireDefault(_getIterator2);
  
  var _regenerator = __webpack_require__(2);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _asyncToGenerator2 = __webpack_require__(6);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  var _assign = __webpack_require__(31);
  
  var _assign2 = _interopRequireDefault(_assign);
  
  var resolveExtension = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(path, extension) {
      var fileNameBase, ext, fileName;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              fileNameBase = (0, _path.join)(CONTENT_DIR, '' + (path === '/' ? '/index' : path));
              ext = extension;
  
              if (!ext.startsWith('.')) {
                ext = '.' + extension;
              }
  
              fileName = fileNameBase + ext;
              _context.next = 6;
              return fileExists(fileName);
  
            case 6:
              if (_context.sent) {
                _context.next = 9;
                break;
              }
  
              fileNameBase = (0, _path.join)(CONTENT_DIR, path + '/index');
              fileName = fileNameBase + ext;
  
            case 9:
              _context.next = 11;
              return fileExists(fileName);
  
            case 11:
              if (_context.sent) {
                _context.next = 13;
                break;
              }
  
              return _context.abrupt('return', { success: false });
  
            case 13:
              return _context.abrupt('return', { success: true, fileName: fileName });
  
            case 14:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));
  
    return function resolveExtension(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
  
  var resolveFileName = function () {
    var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(path) {
      var extensions, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, extension, maybeFileName;
  
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              extensions = ['.md', '.html'];
              _iteratorNormalCompletion = true;
              _didIteratorError = false;
              _iteratorError = undefined;
              _context2.prev = 4;
              _iterator = (0, _getIterator3.default)(extensions);
  
            case 6:
              if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                _context2.next = 16;
                break;
              }
  
              extension = _step.value;
              _context2.next = 10;
              return resolveExtension(path, extension);
  
            case 10:
              maybeFileName = _context2.sent;
  
              if (!maybeFileName.success) {
                _context2.next = 13;
                break;
              }
  
              return _context2.abrupt('return', { success: true, fileName: maybeFileName.fileName, extension: extension });
  
            case 13:
              _iteratorNormalCompletion = true;
              _context2.next = 6;
              break;
  
            case 16:
              _context2.next = 22;
              break;
  
            case 18:
              _context2.prev = 18;
              _context2.t0 = _context2['catch'](4);
              _didIteratorError = true;
              _iteratorError = _context2.t0;
  
            case 22:
              _context2.prev = 22;
              _context2.prev = 23;
  
              if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
              }
  
            case 25:
              _context2.prev = 25;
  
              if (!_didIteratorError) {
                _context2.next = 28;
                break;
              }
  
              throw _iteratorError;
  
            case 28:
              return _context2.finish(25);
  
            case 29:
              return _context2.finish(22);
  
            case 30:
              return _context2.abrupt('return', { success: false, fileName: null, extension: null });
  
            case 31:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this, [[4, 18, 22, 30], [23,, 25, 29]]);
    }));
  
    return function resolveFileName(_x3) {
      return _ref2.apply(this, arguments);
    };
  }();
  
  var _fs = __webpack_require__(59);
  
  var _fs2 = _interopRequireDefault(_fs);
  
  var _path = __webpack_require__(8);
  
  var _bluebird = __webpack_require__(60);
  
  var _bluebird2 = _interopRequireDefault(_bluebird);
  
  var _frontMatter = __webpack_require__(61);
  
  var _frontMatter2 = _interopRequireDefault(_frontMatter);
  
  var _markdownIt = __webpack_require__(62);
  
  var _markdownIt2 = _interopRequireDefault(_markdownIt);
  
  var _graphql = __webpack_require__(55);
  
  var _ContentType = __webpack_require__(63);
  
  var _ContentType2 = _interopRequireDefault(_ContentType);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var md = new _markdownIt2.default();
  
  // A folder with Markdown/HTML content pages
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var CONTENT_DIR = (0, _path.join)(__dirname, './content');
  
  // Extract 'front matter' metadata and generate HTML
  var parseContent = function parseContent(path, fileContent, extension) {
    var fmContent = (0, _frontMatter2.default)(fileContent);
    var htmlContent = void 0;
    switch (extension) {
      case '.md':
        htmlContent = md.render(fmContent.body);
        break;
      case '.html':
        htmlContent = fmContent.body;
        break;
      default:
        return null;
    }
    return (0, _assign2.default)({ path: path, content: htmlContent }, fmContent.attributes);
  };
  
  var readFile = _bluebird2.default.promisify(_fs2.default.readFile);
  var fileExists = function fileExists(filename) {
    return new _bluebird2.default(function (resolve) {
      _fs2.default.exists(filename, resolve);
    });
  };
  
  var content = {
    type: _ContentType2.default,
    args: {
      path: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) }
    },
    resolve: function resolve(_ref3, _ref4) {
      var _this = this;
  
      var request = _ref3.request;
      var path = _ref4.path;
      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
        var _ref5, success, fileName, extension, source;
  
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return resolveFileName(path);
  
              case 2:
                _ref5 = _context3.sent;
                success = _ref5.success;
                fileName = _ref5.fileName;
                extension = _ref5.extension;
  
                if (success) {
                  _context3.next = 8;
                  break;
                }
  
                return _context3.abrupt('return', null);
  
              case 8:
                _context3.next = 10;
                return readFile(fileName, { encoding: 'utf8' });
  
              case 10:
                source = _context3.sent;
                return _context3.abrupt('return', parseContent(path, source, extension));
  
              case 12:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this);
      }))();
    }
  };
  
  exports.default = content;

/***/ },
/* 59 */
/***/ function(module, exports) {

  module.exports = require("fs");

/***/ },
/* 60 */
/***/ function(module, exports) {

  module.exports = require("bluebird");

/***/ },
/* 61 */
/***/ function(module, exports) {

  module.exports = require("front-matter");

/***/ },
/* 62 */
/***/ function(module, exports) {

  module.exports = require("markdown-it");

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _graphql = __webpack_require__(55);
  
  var ContentType = new _graphql.GraphQLObjectType({
    name: 'Content',
    fields: {
      path: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
      title: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
      content: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
      component: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) }
    }
  }); /**
       * React Starter Kit (https://www.reactstarterkit.com/)
       *
       * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE.txt file in the root directory of this source tree.
       */
  
  exports.default = ContentType;

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _graphql = __webpack_require__(55);
  
  var _fetch = __webpack_require__(65);
  
  var _fetch2 = _interopRequireDefault(_fetch);
  
  var _NewsItemType = __webpack_require__(67);
  
  var _NewsItemType2 = _interopRequireDefault(_NewsItemType);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  // React.js News Feed (RSS)
  var url = 'http://ajax.googleapis.com/ajax/services/feed/load' + '?v=1.0&num=10&q=https://reactjsnews.com/feed.xml'; /**
                                                                                                                        * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                                                        *
                                                                                                                        * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                                                        *
                                                                                                                        * This source code is licensed under the MIT license found in the
                                                                                                                        * LICENSE.txt file in the root directory of this source tree.
                                                                                                                        */
  
  var items = [];
  var lastFetchTask = void 0;
  var lastFetchTime = new Date(1970, 0, 1);
  
  var news = {
    type: new _graphql.GraphQLList(_NewsItemType2.default),
    resolve: function resolve() {
      if (lastFetchTask) {
        return lastFetchTask;
      }
  
      if (new Date() - lastFetchTime > 1000 * 60 * 10 /* 10 mins */) {
          lastFetchTime = new Date();
          lastFetchTask = (0, _fetch2.default)(url).then(function (response) {
            return response.json();
          }).then(function (data) {
            if (data.responseStatus === 200) {
              items = data.responseData.feed.entries;
            }
  
            return items;
          }).finally(function () {
            lastFetchTask = null;
          });
  
          if (items.length) {
            return items;
          }
  
          return lastFetchTask;
        }
  
      return items;
    }
  };
  
  exports.default = news;

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Response = exports.Headers = exports.Request = exports.default = undefined;
  
  var _bluebird = __webpack_require__(60);
  
  var _bluebird2 = _interopRequireDefault(_bluebird);
  
  var _nodeFetch = __webpack_require__(66);
  
  var _nodeFetch2 = _interopRequireDefault(_nodeFetch);
  
  var _config = __webpack_require__(34);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  _nodeFetch2.default.Promise = _bluebird2.default; /**
                                                     * React Starter Kit (https://www.reactstarterkit.com/)
                                                     *
                                                     * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                     *
                                                     * This source code is licensed under the MIT license found in the
                                                     * LICENSE.txt file in the root directory of this source tree.
                                                     */
  
  _nodeFetch.Response.Promise = _bluebird2.default;
  
  function localUrl(url) {
    if (url.startsWith('//')) {
      return 'https:' + url;
    }
  
    if (url.startsWith('http')) {
      return url;
    }
  
    return 'http://' + _config.host + url;
  }
  
  function localFetch(url, options) {
    return (0, _nodeFetch2.default)(localUrl(url), options);
  }
  
  exports.default = localFetch;
  exports.Request = _nodeFetch.Request;
  exports.Headers = _nodeFetch.Headers;
  exports.Response = _nodeFetch.Response;

/***/ },
/* 66 */
/***/ function(module, exports) {

  module.exports = require("node-fetch");

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _graphql = __webpack_require__(55);
  
  var NewsItemType = new _graphql.GraphQLObjectType({
    name: 'NewsItem',
    fields: {
      title: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
      link: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
      author: { type: _graphql.GraphQLString },
      publishedDate: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
      contentSnippet: { type: _graphql.GraphQLString }
    }
  }); /**
       * React Starter Kit (https://www.reactstarterkit.com/)
       *
       * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE.txt file in the root directory of this source tree.
       */
  
  exports.default = NewsItemType;

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _regenerator = __webpack_require__(2);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _asyncToGenerator2 = __webpack_require__(6);
  
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
    children: [__webpack_require__(69).default, __webpack_require__(93).default, __webpack_require__(97).default, __webpack_require__(101).default,
  
    // place new routes before...
    __webpack_require__(106).default],
  
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
/* 69 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _regenerator = __webpack_require__(2);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _asyncToGenerator2 = __webpack_require__(6);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  var _jsxFileName = '/Users/czengg/Documents/interestShit/sideProjects/fiveMinJournal/codebase/src/routes/home/index.js'; /**
                                                                                                                            * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                                                            *
                                                                                                                            * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                                                            *
                                                                                                                            * This source code is licensed under the MIT license found in the
                                                                                                                            * LICENSE.txt file in the root directory of this source tree.
                                                                                                                            */
  
  var _react = __webpack_require__(17);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _moment = __webpack_require__(16);
  
  var _moment2 = _interopRequireDefault(_moment);
  
  var _Home = __webpack_require__(70);
  
  var _Home2 = _interopRequireDefault(_Home);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = {
  
    path: '/',
  
    action: function action() {
      var _this = this;
  
      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var date, dailyQuote;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                date = (0, _moment2.default)();
                dailyQuote = {
                  quote: 'Anyone who has a why to live can bear almost any what.',
                  author: 'Nietzche'
                };
                return _context.abrupt('return', {
                  component: _react2.default.createElement(_Home2.default, { date: date, dailyQuote: dailyQuote, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 26
                    },
                    __self: _this
                  })
                });
  
              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
  };

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _jsxFileName = '/Users/czengg/Documents/interestShit/sideProjects/fiveMinJournal/codebase/src/routes/home/Home.js'; /**
                                                                                                                           * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                                                           *
                                                                                                                           * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                                                           *
                                                                                                                           * This source code is licensed under the MIT license found in the
                                                                                                                           * LICENSE.txt file in the root directory of this source tree.
                                                                                                                           */
  
  var _react = __webpack_require__(17);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(36);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _reactRedux = __webpack_require__(27);
  
  var _Layout = __webpack_require__(71);
  
  var _Layout2 = _interopRequireDefault(_Layout);
  
  var _MorningRoutine = __webpack_require__(77);
  
  var _MorningRoutine2 = _interopRequireDefault(_MorningRoutine);
  
  var _EveningRoutine = __webpack_require__(82);
  
  var _EveningRoutine2 = _interopRequireDefault(_EveningRoutine);
  
  var _DateCalendar = __webpack_require__(86);
  
  var _DateCalendar2 = _interopRequireDefault(_DateCalendar);
  
  var _Home = __webpack_require__(90);
  
  var _Home2 = _interopRequireDefault(_Home);
  
  var _journalActions = __webpack_require__(92);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function Home(_ref) {
    var date = _ref.date,
        dailyQuote = _ref.dailyQuote,
        setValues = _ref.setValues,
        showMorningRoutine = _ref.showMorningRoutine,
        hideMorningRoutine = _ref.hideMorningRoutine,
        showMorningContent = _ref.showMorningContent,
        showEveningRoutine = _ref.showEveningRoutine,
        hideEveningRoutine = _ref.hideEveningRoutine,
        showEveningContent = _ref.showEveningContent;
    var quote = dailyQuote.quote,
        author = dailyQuote.author;
  
    var defaultShowMorning = void 0;
    if (date.get('hour') < 12) {
      defaultShowMorning = true;
    } else {
      defaultShowMorning = false;
    }
  
    return _react2.default.createElement(
      _Layout2.default,
      { header: 'fiveMinuteJournal', __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      },
      _react2.default.createElement(
        'div',
        { className: _Home2.default.root, __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        },
        _react2.default.createElement(
          'div',
          { className: _Home2.default.container, __source: {
              fileName: _jsxFileName,
              lineNumber: 41
            },
            __self: this
          },
          _react2.default.createElement(_DateCalendar2.default, { date: date, __source: {
              fileName: _jsxFileName,
              lineNumber: 42
            },
            __self: this
          }),
          _react2.default.createElement(
            'div',
            { className: _Home2.default.quoteContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 43
              },
              __self: this
            },
            _react2.default.createElement(
              'div',
              { className: _Home2.default.quote, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 44
                },
                __self: this
              },
              quote
            ),
            _react2.default.createElement(
              'div',
              { className: _Home2.default.author, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 45
                },
                __self: this
              },
              author.toUpperCase()
            )
          ),
          _react2.default.createElement(_MorningRoutine2.default, {
            dailyQuote: dailyQuote,
            onInputChange: setValues,
            show: showMorningRoutine,
            hide: hideMorningRoutine,
            showContent: showMorningContent === undefined ? defaultShowMorning : showMorningContent,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 47
            },
            __self: this
          }),
          _react2.default.createElement(_EveningRoutine2.default, {
            dailyQuote: dailyQuote,
            onInputChange: setValues,
            show: showEveningRoutine,
            hide: hideEveningRoutine,
            showContent: showEveningContent === undefined ? !defaultShowMorning : showEveningContent,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 54
            },
            __self: this
          })
        )
      )
    );
  }
  
  Home.propTypes = {
    date: _react.PropTypes.object.isRequired,
    dailyQuote: _react.PropTypes.object.isRequired,
    setValues: _react.PropTypes.func.isRequired,
    showMorningRoutine: _react.PropTypes.func.isRequired,
    hideMorningRoutine: _react.PropTypes.func.isRequired,
    showMorningContent: _react.PropTypes.bool,
    showEveningRoutine: _react.PropTypes.func.isRequired,
    hideEveningRoutine: _react.PropTypes.func.isRequired,
    showEveningContent: _react.PropTypes.bool
  };
  
  function mapStateToProps(state) {
    return {
      showMorningContent: state.journal.showMorningContent,
      showEveningContent: state.journal.showEveningContent
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
  
  exports.default = (0, _reactRedux.connect)(mapStateToProps, actions)((0, _withStyles2.default)(_Home2.default)(Home));

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _jsxFileName = '/Users/czengg/Documents/interestShit/sideProjects/fiveMinJournal/codebase/src/components/Layout/Layout.js'; /**
                                                                                                                                   * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                                                                   *
                                                                                                                                   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                                                                   *
                                                                                                                                   * This source code is licensed under the MIT license found in the
                                                                                                                                   * LICENSE.txt file in the root directory of this source tree.
                                                                                                                                   */
  
  var _react = __webpack_require__(17);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(36);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _Layout = __webpack_require__(72);
  
  var _Layout2 = _interopRequireDefault(_Layout);
  
  var _FiveMinuteJournalHeader = __webpack_require__(74);
  
  var _FiveMinuteJournalHeader2 = _interopRequireDefault(_FiveMinuteJournalHeader);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function Layout(_ref) {
    var children = _ref.children,
        header = _ref.header;
  
    return _react2.default.createElement(
      'div',
      { className: _Layout2.default.container, __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      },
      header === 'fiveMinuteJournal' && _react2.default.createElement(_FiveMinuteJournalHeader2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }),
      _react2.default.Children.only(children)
    );
  }
  
  Layout.propTypes = {
    children: _react.PropTypes.element.isRequired,
    header: _react.PropTypes.string
  };
  
  exports.default = (0, _withStyles2.default)(_Layout2.default)(Layout);

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(73);
      var insertCss = __webpack_require__(40);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false}!./../../../node_modules/postcss-loader/index.js?pack=default!./Layout.css", function() {
          content = require("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false}!./../../../node_modules/postcss-loader/index.js?pack=default!./Layout.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(39)();
  // imports
  
  
  // module
  exports.push([module.id, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/*! normalize.css v5.0.0 | MIT License | github.com/necolas/normalize.css */\n\n/**\n * 1. Change the default font family in all browsers (opinionated).\n * 2. Correct the line height in all browsers.\n * 3. Prevent adjustments of font size after orientation changes in\n *    IE on Windows Phone and in iOS.\n */\n\n/* Document\n   ========================================================================== */\n\nhtml {\n  font-family: sans-serif;/* 1 */\n  line-height: 1.15;/* 2 */\n  -ms-text-size-adjust: 100%;/* 3 */\n  -webkit-text-size-adjust: 100%;/* 3 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers (opinionated).\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Add the correct display in IE 9-.\n */\n\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in IE.\n */\n\nfigcaption,\nfigure,\nmain {/* 1 */\n  display: block;\n}\n\n/**\n * Add the correct margin in IE 8.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box;/* 1 */\n  height: 0;/* 1 */\n  overflow: visible;/* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace;/* 1 */\n  font-size: 1em;/* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\n\na {\n  background-color: transparent;/* 1 */\n  -webkit-text-decoration-skip: objects;/* 2 */\n}\n\n/**\n * Remove the outline on focused links when they are also active or hovered\n * in all browsers (opinionated).\n */\n\na:active,\na:hover {\n  outline-width: 0;\n}\n\n/**\n * 1. Remove the bottom border in Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none;/* 1 */\n  text-decoration: underline;/* 2 */\n  text-decoration: underline dotted;/* 2 */\n}\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\n\nb,\nstrong {\n  font-weight: inherit;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;/* 1 */\n  font-size: 1em;/* 2 */\n}\n\n/**\n * Add the correct font style in Android 4.3-.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Add the correct background and color in IE 9-.\n */\n\nmark {\n  background-color: #ff0;\n  color: #000;\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\naudio,\nvideo {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in iOS 4-7.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\n\nimg {\n  border-style: none;\n}\n\n/**\n * Hide the overflow in IE.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: sans-serif;/* 1 */\n  font-size: 100%;/* 1 */\n  line-height: 1.15;/* 1 */\n  margin: 0;/* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput {/* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect {/* 1 */\n  text-transform: none;\n}\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\nhtml [type=\"button\"], /* 1 */\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;/* 2 */\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Change the border, margin, and padding in all browsers (opinionated).\n */\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box;/* 1 */\n  color: inherit;/* 2 */\n  display: table;/* 1 */\n  max-width: 100%;/* 1 */\n  padding: 0;/* 3 */\n  white-space: normal;/* 1 */\n}\n\n/**\n * 1. Add the correct display in IE 9-.\n * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  display: inline-block;/* 1 */\n  vertical-align: baseline;/* 2 */\n}\n\n/**\n * Remove the default vertical scrollbar in IE.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box;/* 1 */\n  padding: 0;/* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield;/* 1 */\n  outline-offset: -2px;/* 2 */\n}\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button;/* 1 */\n  font: inherit;/* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n */\n\ndetails, /* 1 */\nmenu {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Scripting\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\ncanvas {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in IE.\n */\n\ntemplate {\n  display: none;\n}\n\n/* Hidden\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10-.\n */\n\n[hidden] {\n  display: none;\n}\n\n/*! React Starter Kit | MIT License | https://www.reactstarterkit.com/ */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {/*\n   * Typography\n   * ======================================================================== *//*\n   * Layout\n   * ======================================================================== *//*\n   * Media queries breakpoints\n   * ======================================================================== *//* Extra small screen / phone *//* Small screen / tablet *//* Medium screen / desktop *//* Large screen / wide desktop */\n}\n\n.Layout-container-1pk24 {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 0%;\n          flex: 1 1 0%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n", "", {"version":3,"sources":["/./components/Layout/Layout.css","/../node_modules/normalize.css/normalize.css","/./components/variables.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;ACPH,4EAA4E;;AAE5E;;;;;GAKG;;AAEH;gFACgF;;AAEhF;EACE,wBAAwB,OAAQ;EAChC,kBAAkB,OAAQ;EAC1B,2BAA2B,OAAQ;EACnC,+BAA+B,OAAQ;CACxC;;AAED;gFACgF;;AAEhF;;GAEG;;AAEH;EACE,UAAU;CACX;;AAED;;GAEG;;AAEH;;;;;;EAME,eAAe;CAChB;;AAED;;;GAGG;;AAEH;EACE,eAAe;EACf,iBAAiB;CAClB;;AAED;gFACgF;;AAEhF;;;GAGG;;AAEH;;MAEO,OAAO;EACZ,eAAe;CAChB;;AAED;;GAEG;;AAEH;EACE,iBAAiB;CAClB;;AAED;;;GAGG;;AAEH;EACE,wBAAwB,OAAQ;EAChC,UAAU,OAAQ;EAClB,kBAAkB,OAAQ;CAC3B;;AAED;;;GAGG;;AAEH;EACE,kCAAkC,OAAQ;EAC1C,eAAe,OAAQ;CACxB;;AAED;gFACgF;;AAEhF;;;GAGG;;AAEH;EACE,8BAA8B,OAAQ;EACtC,sCAAsC,OAAQ;CAC/C;;AAED;;;GAGG;;AAEH;;EAEE,iBAAiB;CAClB;;AAED;;;GAGG;;AAEH;EACE,oBAAoB,OAAQ;EAC5B,2BAA2B,OAAQ;EACnC,kCAAkC,OAAQ;CAC3C;;AAED;;GAEG;;AAEH;;EAEE,qBAAqB;CACtB;;AAED;;GAEG;;AAEH;;EAEE,oBAAoB;CACrB;;AAED;;;GAGG;;AAEH;;;EAGE,kCAAkC,OAAQ;EAC1C,eAAe,OAAQ;CACxB;;AAED;;GAEG;;AAEH;EACE,mBAAmB;CACpB;;AAED;;GAEG;;AAEH;EACE,uBAAuB;EACvB,YAAY;CACb;;AAED;;GAEG;;AAEH;EACE,eAAe;CAChB;;AAED;;;GAGG;;AAEH;;EAEE,eAAe;EACf,eAAe;EACf,mBAAmB;EACnB,yBAAyB;CAC1B;;AAED;EACE,gBAAgB;CACjB;;AAED;EACE,YAAY;CACb;;AAED;gFACgF;;AAEhF;;GAEG;;AAEH;;EAEE,sBAAsB;CACvB;;AAED;;GAEG;;AAEH;EACE,cAAc;EACd,UAAU;CACX;;AAED;;GAEG;;AAEH;EACE,mBAAmB;CACpB;;AAED;;GAEG;;AAEH;EACE,iBAAiB;CAClB;;AAED;gFACgF;;AAEhF;;;GAGG;;AAEH;;;;;EAKE,wBAAwB,OAAQ;EAChC,gBAAgB,OAAQ;EACxB,kBAAkB,OAAQ;EAC1B,UAAU,OAAQ;CACnB;;AAED;;;GAGG;;AAEH;OACQ,OAAO;EACb,kBAAkB;CACnB;;AAED;;;GAGG;;AAEH;QACS,OAAO;EACd,qBAAqB;CACtB;;AAED;;;;GAIG;;AAEH;;;;EAIE,2BAA2B,OAAQ;CACpC;;AAED;;GAEG;;AAEH;;;;EAIE,mBAAmB;EACnB,WAAW;CACZ;;AAED;;GAEG;;AAEH;;;;EAIE,+BAA+B;CAChC;;AAED;;GAEG;;AAEH;EACE,0BAA0B;EAC1B,cAAc;EACd,+BAA+B;CAChC;;AAED;;;;;GAKG;;AAEH;EACE,uBAAuB,OAAQ;EAC/B,eAAe,OAAQ;EACvB,eAAe,OAAQ;EACvB,gBAAgB,OAAQ;EACxB,WAAW,OAAQ;EACnB,oBAAoB,OAAQ;CAC7B;;AAED;;;GAGG;;AAEH;EACE,sBAAsB,OAAQ;EAC9B,yBAAyB,OAAQ;CAClC;;AAED;;GAEG;;AAEH;EACE,eAAe;CAChB;;AAED;;;GAGG;;AAEH;;EAEE,uBAAuB,OAAQ;EAC/B,WAAW,OAAQ;CACpB;;AAED;;GAEG;;AAEH;;EAEE,aAAa;CACd;;AAED;;;GAGG;;AAEH;EACE,8BAA8B,OAAQ;EACtC,qBAAqB,OAAQ;CAC9B;;AAED;;GAEG;;AAEH;;EAEE,yBAAyB;CAC1B;;AAED;;;GAGG;;AAEH;EACE,2BAA2B,OAAQ;EACnC,cAAc,OAAQ;CACvB;;AAED;gFACgF;;AAEhF;;;GAGG;;AAEH;;EAEE,eAAe;CAChB;;AAED;;GAEG;;AAEH;EACE,mBAAmB;CACpB;;AAED;gFACgF;;AAEhF;;GAEG;;AAEH;EACE,sBAAsB;CACvB;;AAED;;GAEG;;AAEH;EACE,cAAc;CACf;;AAED;gFACgF;;AAEhF;;GAEG;;AAEH;EACE,cAAc;CACf;;ADjcD,yEAAyE;;AEXzE;;;;;;;GAOG;;AAEH,OACE;;gFAE8E;;gFAMA;;gFAMA,gCAErB,2BACL,6BACE,iCACI;CAC3D;;AFfD;EACE,oBAAQ;MAAR,iBAAQ;UAAR,aAAQ;EACR,qBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,6BAAuB;EAAvB,8BAAuB;MAAvB,2BAAuB;UAAvB,uBAAuB;EACvB,0BAAoB;MAApB,uBAAoB;UAApB,oBAAoB;EACpB,yBAAwB;MAAxB,sBAAwB;UAAxB,wBAAwB;CACzB","file":"Layout.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@import '../../../node_modules/normalize.css/normalize.css';\n\n/*! React Starter Kit | MIT License | https://www.reactstarterkit.com/ */\n\n@import '../variables.css';\n\n.container {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n","/*! normalize.css v5.0.0 | MIT License | github.com/necolas/normalize.css */\n\n/**\n * 1. Change the default font family in all browsers (opinionated).\n * 2. Correct the line height in all browsers.\n * 3. Prevent adjustments of font size after orientation changes in\n *    IE on Windows Phone and in iOS.\n */\n\n/* Document\n   ========================================================================== */\n\nhtml {\n  font-family: sans-serif; /* 1 */\n  line-height: 1.15; /* 2 */\n  -ms-text-size-adjust: 100%; /* 3 */\n  -webkit-text-size-adjust: 100%; /* 3 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers (opinionated).\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Add the correct display in IE 9-.\n */\n\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in IE.\n */\n\nfigcaption,\nfigure,\nmain { /* 1 */\n  display: block;\n}\n\n/**\n * Add the correct margin in IE 8.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\n\na {\n  background-color: transparent; /* 1 */\n  -webkit-text-decoration-skip: objects; /* 2 */\n}\n\n/**\n * Remove the outline on focused links when they are also active or hovered\n * in all browsers (opinionated).\n */\n\na:active,\na:hover {\n  outline-width: 0;\n}\n\n/**\n * 1. Remove the bottom border in Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\n\nb,\nstrong {\n  font-weight: inherit;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font style in Android 4.3-.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Add the correct background and color in IE 9-.\n */\n\nmark {\n  background-color: #ff0;\n  color: #000;\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\naudio,\nvideo {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in iOS 4-7.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\n\nimg {\n  border-style: none;\n}\n\n/**\n * Hide the overflow in IE.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: sans-serif; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\nhtml [type=\"button\"], /* 1 */\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Change the border, margin, and padding in all browsers (opinionated).\n */\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * 1. Add the correct display in IE 9-.\n * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  display: inline-block; /* 1 */\n  vertical-align: baseline; /* 2 */\n}\n\n/**\n * Remove the default vertical scrollbar in IE.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n */\n\ndetails, /* 1 */\nmenu {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Scripting\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\ncanvas {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in IE.\n */\n\ntemplate {\n  display: none;\n}\n\n/* Hidden\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10-.\n */\n\n[hidden] {\n  display: none;\n}\n","/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"container": "Layout-container-1pk24"
  };

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _jsxFileName = '/Users/czengg/Documents/interestShit/sideProjects/fiveMinJournal/codebase/src/components/FiveMinuteJournalHeader/FiveMinuteJournalHeader.js';
  
  var _react = __webpack_require__(17);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(36);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _FiveMinuteJournalHeader = __webpack_require__(75);
  
  var _FiveMinuteJournalHeader2 = _interopRequireDefault(_FiveMinuteJournalHeader);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function Header() {
    return _react2.default.createElement(
      'div',
      { className: _FiveMinuteJournalHeader2.default.root, __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      },
      _react2.default.createElement(
        'div',
        { className: _FiveMinuteJournalHeader2.default.container, __source: {
            fileName: _jsxFileName,
            lineNumber: 8
          },
          __self: this
        },
        _react2.default.createElement(
          'div',
          { className: _FiveMinuteJournalHeader2.default.banner, __source: {
              fileName: _jsxFileName,
              lineNumber: 9
            },
            __self: this
          },
          _react2.default.createElement(
            'h1',
            { className: _FiveMinuteJournalHeader2.default.bannerTitle, __source: {
                fileName: _jsxFileName,
                lineNumber: 10
              },
              __self: this
            },
            'The Five-Minute Journal'
          )
        )
      )
    );
  }
  
  exports.default = (0, _withStyles2.default)(_FiveMinuteJournalHeader2.default)(Header);

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(76);
      var insertCss = __webpack_require__(40);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false}!./../../../node_modules/postcss-loader/index.js?pack=default!./FiveMinuteJournalHeader.css", function() {
          content = require("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false}!./../../../node_modules/postcss-loader/index.js?pack=default!./FiveMinuteJournalHeader.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(39)();
  // imports
  
  
  // module
  exports.push([module.id, ".FiveMinuteJournalHeader-root-2PU2l {\n  background: #4F4C47;\n  color: #fff;\n  width: 100%;\n}\n\n.FiveMinuteJournalHeader-container-1QiIN {\n  margin: 0 auto;\n  width: 100%;\n}\n\n.FiveMinuteJournalHeader-banner-2MlKO {\n  text-align: center;\n}\n\n.FiveMinuteJournalHeader-bannerTitle-1X-Lx {\n  margin: 0;\n  padding: 10px;\n  font-family: 'Playfair Display';\n  font-style: italic;\n  font-weight: 400;\n  font-size: 30px;\n}\n", "", {"version":3,"sources":["/./components/FiveMinuteJournalHeader/FiveMinuteJournalHeader.css"],"names":[],"mappings":"AAAA;EACE,oBAAoB;EACpB,YAAY;EACZ,YAAY;CACb;;AAED;EACE,eAAe;EACf,YAAY;CACb;;AAED;EACE,mBAAmB;CACpB;;AAED;EACE,UAAU;EACV,cAAc;EACd,gCAAgC;EAChC,mBAAmB;EACnB,iBAAiB;EACjB,gBAAgB;CACjB","file":"FiveMinuteJournalHeader.css","sourcesContent":[".root {\n  background: #4F4C47;\n  color: #fff;\n  width: 100%;\n}\n\n.container {\n  margin: 0 auto;\n  width: 100%;\n}\n\n.banner {\n  text-align: center;\n}\n\n.bannerTitle {\n  margin: 0;\n  padding: 10px;\n  font-family: 'Playfair Display';\n  font-style: italic;\n  font-weight: 400;\n  font-size: 30px;\n}\n"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"root": "FiveMinuteJournalHeader-root-2PU2l",
  	"container": "FiveMinuteJournalHeader-container-1QiIN",
  	"banner": "FiveMinuteJournalHeader-banner-2MlKO",
  	"bannerTitle": "FiveMinuteJournalHeader-bannerTitle-1X-Lx"
  };

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _jsxFileName = '/Users/czengg/Documents/interestShit/sideProjects/fiveMinJournal/codebase/src/components/MorningRoutine/MorningRoutine.js';
  
  var _react = __webpack_require__(17);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(27);
  
  var _withStyles = __webpack_require__(36);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _MorningRoutine = __webpack_require__(78);
  
  var _MorningRoutine2 = _interopRequireDefault(_MorningRoutine);
  
  var _reactTextareaAutosize = __webpack_require__(80);
  
  var _reactTextareaAutosize2 = _interopRequireDefault(_reactTextareaAutosize);
  
  var _arrow = __webpack_require__(81);
  
  var _arrow2 = _interopRequireDefault(_arrow);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function MorningRoutine(_ref) {
    var _this = this;
  
    var onInputChange = _ref.onInputChange,
        show = _ref.show,
        hide = _ref.hide,
        showContent = _ref.showContent;
  
    var gratefulForSample = ['I\'m grateful for the warm bed that I sleep in.', 'I\'m grateful for my body that is working in perfect harmony.', 'I\'m grateful for the incredible firends in my life.'];
    var todayGreatSample = ['Take extra time for myself before leaving work', 'Give a thank you note to Mom', 'Sleep before 10pm'];
    var affirmationSample = 'I am confident and comfortable in my own skin and I live with passion and purpose';
  
    return _react2.default.createElement(
      'div',
      { className: _MorningRoutine2.default.root, __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      },
      _react2.default.createElement(
        'button',
        { className: _MorningRoutine2.default.header, onClick: showContent ? hide : show, __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        },
        _react2.default.createElement(
          'div',
          { className: _MorningRoutine2.default.headerTitle, __source: {
              fileName: _jsxFileName,
              lineNumber: 24
            },
            __self: this
          },
          'MORNING ROUTINE'
        ),
        _react2.default.createElement('img', { className: _MorningRoutine2.default.icon, src: _arrow2.default, style: { transform: showContent ? 'rotate(180deg)' : 'rotate(0deg)' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          },
          __self: this
        })
      ),
      showContent && _react2.default.createElement(
        'div',
        { className: _MorningRoutine2.default.container, __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          },
          __self: this
        },
        _react2.default.createElement(
          'div',
          { className: _MorningRoutine2.default.inputContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 28
            },
            __self: this
          },
          _react2.default.createElement(
            'div',
            { className: _MorningRoutine2.default.inputTitle, __source: {
                fileName: _jsxFileName,
                lineNumber: 29
              },
              __self: this
            },
            'I am grateful for...'
          ),
          _react2.default.createElement(
            'ol',
            { className: _MorningRoutine2.default.inputs, __source: {
                fileName: _jsxFileName,
                lineNumber: 30
              },
              __self: this
            },
            gratefulForSample.map(function (placeholder, index) {
              return _react2.default.createElement(
                'li',
                { className: _MorningRoutine2.default.input, key: 'grateful' + index, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                  },
                  __self: _this
                },
                _react2.default.createElement(_reactTextareaAutosize2.default, {
                  placeholder: placeholder,
                  minRows: 1,
                  onChange: function onChange(e) {
                    return onInputChange('grateful' + index, e.target.value);
                  },
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                  },
                  __self: _this
                })
              );
            })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: _MorningRoutine2.default.inputContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 42
            },
            __self: this
          },
          _react2.default.createElement(
            'div',
            { className: _MorningRoutine2.default.inputTitle, __source: {
                fileName: _jsxFileName,
                lineNumber: 43
              },
              __self: this
            },
            'What would make today great?'
          ),
          _react2.default.createElement(
            'ol',
            { className: _MorningRoutine2.default.inputs, __source: {
                fileName: _jsxFileName,
                lineNumber: 44
              },
              __self: this
            },
            todayGreatSample.map(function (placeholder, index) {
              return _react2.default.createElement(
                'li',
                { className: _MorningRoutine2.default.input, key: 'great' + index, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                  },
                  __self: _this
                },
                _react2.default.createElement(_reactTextareaAutosize2.default, {
                  placeholder: placeholder,
                  minRows: 1,
                  onChange: function onChange(e) {
                    return onInputChange('great' + index, e.target.value);
                  },
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                  },
                  __self: _this
                })
              );
            })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: _MorningRoutine2.default.inputContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 56
            },
            __self: this
          },
          _react2.default.createElement(
            'div',
            { className: _MorningRoutine2.default.inputTitle, __source: {
                fileName: _jsxFileName,
                lineNumber: 57
              },
              __self: this
            },
            'Daily affirmations. I am...'
          ),
          _react2.default.createElement(
            'div',
            { className: _MorningRoutine2.default.input, __source: {
                fileName: _jsxFileName,
                lineNumber: 58
              },
              __self: this
            },
            _react2.default.createElement(_reactTextareaAutosize2.default, {
              placeholder: affirmationSample,
              minRows: 1,
              onChange: function onChange(e) {
                return onInputChange('affirmation', e.target.value);
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 59
              },
              __self: this
            })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: _MorningRoutine2.default.inputContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 66
            },
            __self: this
          },
          _react2.default.createElement(
            'button',
            { className: _MorningRoutine2.default.button, type: 'submit', __source: {
                fileName: _jsxFileName,
                lineNumber: 67
              },
              __self: this
            },
            'Save \u2192'
          )
        )
      )
    );
  }
  
  MorningRoutine.propTypes = {
    onInputChange: _react.PropTypes.func.isRequired,
    show: _react.PropTypes.func.isRequired,
    hide: _react.PropTypes.func.isRequired,
    showContent: _react.PropTypes.bool.isRequired
  };
  
  exports.default = (0, _withStyles2.default)(_MorningRoutine2.default)(MorningRoutine);

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(79);
      var insertCss = __webpack_require__(40);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false}!./../../../node_modules/postcss-loader/index.js?pack=default!./MorningRoutine.css", function() {
          content = require("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false}!./../../../node_modules/postcss-loader/index.js?pack=default!./MorningRoutine.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(39)();
  // imports
  
  
  // module
  exports.push([module.id, ".MorningRoutine-root-2LInD {\n  margin-bottom: 2%;\n}\n\n.MorningRoutine-container-3B86h {\n  padding-top: 1%;\n  padding-left: 3%;\n}\n\n.MorningRoutine-icon-hZ3Ng {\n  width: 10px;\n  height: 5px;\n  vertical-align: middle;\n  margin-left: 1%;\n  display: inline-block;\n}\n\n.MorningRoutine-header-3yisq {\n  border: none;\n  border-bottom: 1px solid #979797;\n  cursor: pointer;\n  padding-bottom: 1px;\n  width: 100%;\n  text-align: left;\n  background: transparent;\n}\n\n.MorningRoutine-header-3yisq:hover .MorningRoutine-headerTitle-3gEQL {\n  font-weight: 700;\n}\n\n.MorningRoutine-header-3yisq:focus {\n  outline: none;\n}\n\n.MorningRoutine-header-3yisq:hover {\n  border-width: 2px;\n  padding-bottom: 0px;\n}\n\n.MorningRoutine-headerTitle-3gEQL {\n  font-family: 'Raleway';\n  font-size: 20px;\n  font-weight: 400;\n  display: inline-block;\n}\n\n.MorningRoutine-inputContainer-LzQ0d {\n  margin-bottom: 30px;\n  margin-top: 10px;\n}\n\n.MorningRoutine-inputTitle-1CbwI {\n  font-family: 'Playfair Display', cursive;\n  font-size: 24px;\n  color: #616161;\n  font-style: italic;\n}\n\n.MorningRoutine-inputs-3gzjC {\n  margin-left: 5px;\n  font-family: 'Playfair Display', serif;\n  font-size: 18px;\n  color: #616161;\n}\n\ndiv.MorningRoutine-input-36VfP {\n  padding-left: 20px;\n}\n\n.MorningRoutine-input-36VfP textarea {\n  box-sizing: border-box;\n  width: 100%;\n  outline: 0;\n  border-radius: 0;\n  color: #000;\n  font-size: 18px;\n  border: none;\n  border-bottom: 1px solid #979797;\n  font-family: 'Playfair Display', serif;\n  background: transparent;\n  padding: 5px;\n  margin-top: 10px;\n}\n\n.MorningRoutine-input-36VfP textarea:focus {\n  border-width: 2px;\n  padding-bottom: 5px;\n}\n\n.MorningRoutine-button-1LDcq {\n  display: block;\n  box-sizing: border-box;\n  margin: 0;\n  padding: 10px 16px;\n  width: 100%;\n  outline: 0;\n  color: #4A4A4A;\n  text-align: center;\n  text-decoration: none;\n  font-size: 18px;\n  line-height: 1.3333333;\n  cursor: pointer;\n  border: none;\n  background: transparent;\n  font-family: 'Playfair Display', serif;\n  font-style: oblique;\n  font-size: 20px;\n}\n\n.MorningRoutine-button-1LDcq:focus, .MorningRoutine-button-1LDcq:hover {\n  color: #979797;\n}\n", "", {"version":3,"sources":["/./components/MorningRoutine/MorningRoutine.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;CACnB;;AAED;EACE,gBAAgB;EAChB,iBAAiB;CAClB;;AAED;EACE,YAAY;EACZ,YAAY;EACZ,uBAAuB;EACvB,gBAAgB;EAChB,sBAAsB;CACvB;;AAED;EACE,aAAa;EACb,iCAAiC;EACjC,gBAAgB;EAChB,oBAAoB;EACpB,YAAY;EACZ,iBAAiB;EACjB,wBAAwB;CACzB;;AAED;EACE,iBAAiB;CAClB;;AAED;EACE,cAAc;CACf;;AAED;EACE,kBAAkB;EAClB,oBAAoB;CACrB;;AAED;EACE,uBAAuB;EACvB,gBAAgB;EAChB,iBAAiB;EACjB,sBAAsB;CACvB;;AAED;EACE,oBAAoB;EACpB,iBAAiB;CAClB;;AAED;EACE,yCAAyC;EACzC,gBAAgB;EAChB,eAAe;EACf,mBAAmB;CACpB;;AAED;EACE,iBAAiB;EACjB,uCAAuC;EACvC,gBAAgB;EAChB,eAAe;CAChB;;AAED;EACE,mBAAmB;CACpB;;AAED;EACE,uBAAuB;EACvB,YAAY;EACZ,WAAW;EACX,iBAAiB;EACjB,YAAY;EACZ,gBAAgB;EAChB,aAAa;EACb,iCAAiC;EACjC,uCAAuC;EACvC,wBAAwB;EACxB,aAAa;EACb,iBAAiB;CAClB;;AAED;EACE,kBAAkB;EAClB,oBAAoB;CACrB;;AAED;EACE,eAAe;EACf,uBAAuB;EACvB,UAAU;EACV,mBAAmB;EACnB,YAAY;EACZ,WAAW;EACX,eAAe;EACf,mBAAmB;EACnB,sBAAsB;EACtB,gBAAgB;EAChB,uBAAuB;EACvB,gBAAgB;EAChB,aAAa;EACb,wBAAwB;EACxB,uCAAuC;EACvC,oBAAoB;EACpB,gBAAgB;CACjB;;AAED;EACE,eAAe;CAChB","file":"MorningRoutine.css","sourcesContent":[".root {\n  margin-bottom: 2%;\n}\n\n.container {\n  padding-top: 1%;\n  padding-left: 3%;\n}\n\n.icon {\n  width: 10px;\n  height: 5px;\n  vertical-align: middle;\n  margin-left: 1%;\n  display: inline-block;\n}\n\n.header {\n  border: none;\n  border-bottom: 1px solid #979797;\n  cursor: pointer;\n  padding-bottom: 1px;\n  width: 100%;\n  text-align: left;\n  background: transparent;\n}\n\n.header:hover .headerTitle {\n  font-weight: 700;\n}\n\n.header:focus {\n  outline: none;\n}\n\n.header:hover {\n  border-width: 2px;\n  padding-bottom: 0px;\n}\n\n.headerTitle {\n  font-family: 'Raleway';\n  font-size: 20px;\n  font-weight: 400;\n  display: inline-block;\n}\n\n.inputContainer {\n  margin-bottom: 30px;\n  margin-top: 10px;\n}\n\n.inputTitle {\n  font-family: 'Playfair Display', cursive;\n  font-size: 24px;\n  color: #616161;\n  font-style: italic;\n}\n\n.inputs {\n  margin-left: 5px;\n  font-family: 'Playfair Display', serif;\n  font-size: 18px;\n  color: #616161;\n}\n\ndiv.input {\n  padding-left: 20px;\n}\n\n.input textarea {\n  box-sizing: border-box;\n  width: 100%;\n  outline: 0;\n  border-radius: 0;\n  color: #000;\n  font-size: 18px;\n  border: none;\n  border-bottom: 1px solid #979797;\n  font-family: 'Playfair Display', serif;\n  background: transparent;\n  padding: 5px;\n  margin-top: 10px;\n}\n\n.input textarea:focus {\n  border-width: 2px;\n  padding-bottom: 5px;\n}\n\n.button {\n  display: block;\n  box-sizing: border-box;\n  margin: 0;\n  padding: 10px 16px;\n  width: 100%;\n  outline: 0;\n  color: #4A4A4A;\n  text-align: center;\n  text-decoration: none;\n  font-size: 18px;\n  line-height: 1.3333333;\n  cursor: pointer;\n  border: none;\n  background: transparent;\n  font-family: 'Playfair Display', serif;\n  font-style: oblique;\n  font-size: 20px;\n}\n\n.button:focus, .button:hover {\n  color: #979797;\n}\n"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"root": "MorningRoutine-root-2LInD",
  	"container": "MorningRoutine-container-3B86h",
  	"icon": "MorningRoutine-icon-hZ3Ng",
  	"header": "MorningRoutine-header-3yisq",
  	"headerTitle": "MorningRoutine-headerTitle-3gEQL",
  	"inputContainer": "MorningRoutine-inputContainer-LzQ0d",
  	"inputTitle": "MorningRoutine-inputTitle-1CbwI",
  	"inputs": "MorningRoutine-inputs-3gzjC",
  	"input": "MorningRoutine-input-36VfP",
  	"button": "MorningRoutine-button-1LDcq"
  };

/***/ },
/* 80 */
/***/ function(module, exports) {

  module.exports = require("react-textarea-autosize");

/***/ },
/* 81 */
/***/ function(module, exports) {

  module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAAAXNSR0IArs4c6QAAAORJREFUKBWdkT8LQWEUh1+RkCQyWGwGq1Jmm80XMPkI8iGkGCmT3aBkMkhKSRaTzWCSjZQiPG/dUydd+XPq6fzec37ndLvHGGM6cIAmeOHX8DHQArujbYen8HAYkAPwbQQxDkHm7S4Th4UqTtAR+BRRDDOQZXN0TIbCiLFqrtAJabrkJLU1yLIROvTq81PoK9MGnXo18U7DFmRZD23/o2vYo3RBzDt0Rjmz6L3qN9Ae1X8r62rIXi8HBTg69Tu5Cj9FDbd86Ql9cd5Xchn+igpTN5DFZ3Txr01qqIS2B1pCXtVd5RNIED0bdIaaMQAAAABJRU5ErkJggg=="

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _jsxFileName = '/Users/czengg/Documents/interestShit/sideProjects/fiveMinJournal/codebase/src/components/EveningRoutine/EveningRoutine.js';
  
  var _react = __webpack_require__(17);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = __webpack_require__(27);
  
  var _withStyles = __webpack_require__(36);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _EveningRoutine = __webpack_require__(83);
  
  var _EveningRoutine2 = _interopRequireDefault(_EveningRoutine);
  
  var _reactTextareaAutosize = __webpack_require__(80);
  
  var _reactTextareaAutosize2 = _interopRequireDefault(_reactTextareaAutosize);
  
  var _arrow = __webpack_require__(85);
  
  var _arrow2 = _interopRequireDefault(_arrow);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function EveningRoutine(_ref) {
    var _this = this;
  
    var onInputChange = _ref.onInputChange,
        show = _ref.show,
        hide = _ref.hide,
        showContent = _ref.showContent;
  
    var happenedSample = ['I remembered to floss.', 'A friend recommended a wonderful book for me.', 'I saw a cute stranger at the cafe'];
    var betterSample = ['I wake up right when the alarm goes off.', 'I go to the gym in the morning.'];
  
    return _react2.default.createElement(
      'div',
      { className: _EveningRoutine2.default.root, __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      },
      _react2.default.createElement(
        'button',
        { className: _EveningRoutine2.default.header, onClick: showContent ? hide : show, __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: this
        },
        _react2.default.createElement(
          'div',
          { className: _EveningRoutine2.default.headerTitle, __source: {
              fileName: _jsxFileName,
              lineNumber: 22
            },
            __self: this
          },
          'EVENING ROUTINE'
        ),
        _react2.default.createElement('img', { className: _EveningRoutine2.default.icon, src: _arrow2.default, style: { transform: showContent ? 'rotate(180deg)' : 'rotate(0deg)' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        })
      ),
      showContent && _react2.default.createElement(
        'div',
        { className: _EveningRoutine2.default.container, __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          },
          __self: this
        },
        _react2.default.createElement(
          'div',
          { className: _EveningRoutine2.default.inputContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 26
            },
            __self: this
          },
          _react2.default.createElement(
            'div',
            { className: _EveningRoutine2.default.inputTitle, __source: {
                fileName: _jsxFileName,
                lineNumber: 27
              },
              __self: this
            },
            '3 Amazing things that happened today...'
          ),
          _react2.default.createElement(
            'ol',
            { className: _EveningRoutine2.default.inputs, __source: {
                fileName: _jsxFileName,
                lineNumber: 28
              },
              __self: this
            },
            happenedSample.map(function (placeholder, index) {
              return _react2.default.createElement(
                'li',
                { className: _EveningRoutine2.default.input, key: 'happened' + index, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                  },
                  __self: _this
                },
                _react2.default.createElement(_reactTextareaAutosize2.default, {
                  placeholder: placeholder,
                  minRows: 1,
                  onChange: function onChange(e) {
                    return onInputChange('happened' + index, e.target.value);
                  },
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                  },
                  __self: _this
                })
              );
            })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: _EveningRoutine2.default.inputContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 40
            },
            __self: this
          },
          _react2.default.createElement(
            'div',
            { className: _EveningRoutine2.default.inputTitle, __source: {
                fileName: _jsxFileName,
                lineNumber: 41
              },
              __self: this
            },
            'How could I have made today even better?'
          ),
          _react2.default.createElement(
            'ol',
            { className: _EveningRoutine2.default.inputs, __source: {
                fileName: _jsxFileName,
                lineNumber: 42
              },
              __self: this
            },
            betterSample.map(function (placeholder, index) {
              return _react2.default.createElement(
                'li',
                { className: _EveningRoutine2.default.input, key: 'better' + index, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                  },
                  __self: _this
                },
                _react2.default.createElement(_reactTextareaAutosize2.default, {
                  placeholder: placeholder,
                  minRows: 1,
                  onChange: function onChange(e) {
                    return onInputChange('better' + index, e.target.value);
                  },
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                  },
                  __self: _this
                })
              );
            })
          )
        )
      )
    );
  }
  
  EveningRoutine.propTypes = {
    onInputChange: _react.PropTypes.func.isRequired,
    show: _react.PropTypes.func.isRequired,
    hide: _react.PropTypes.func.isRequired,
    showContent: _react.PropTypes.bool.isRequired
  };
  
  exports.default = (0, _withStyles2.default)(_EveningRoutine2.default)(EveningRoutine);

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(84);
      var insertCss = __webpack_require__(40);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false}!./../../../node_modules/postcss-loader/index.js?pack=default!./EveningRoutine.css", function() {
          content = require("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false}!./../../../node_modules/postcss-loader/index.js?pack=default!./EveningRoutine.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(39)();
  // imports
  
  
  // module
  exports.push([module.id, "\n.EveningRoutine-container-2evGO {\n  padding-top: 1%;\n  padding-left: 3%;\n}\n\n.EveningRoutine-icon-3vDUw {\n  width: 10px;\n  height: 5px;\n  vertical-align: middle;\n  margin-left: 1%;\n  display: inline-block;\n}\n\n.EveningRoutine-header-3KkET {\n  border: none;\n  border-bottom: 1px solid #979797;\n  cursor: pointer;\n  padding-bottom: 1px;\n  width: 100%;\n  text-align: left;\n  background: transparent;\n}\n\n.EveningRoutine-header-3KkET:hover .EveningRoutine-headerTitle-2ri6- {\n  font-weight: 700;\n}\n\n.EveningRoutine-header-3KkET:focus {\n  outline: none;\n}\n\n.EveningRoutine-header-3KkET:hover {\n  border-width: 2px;\n  padding-bottom: 0px;\n}\n\n.EveningRoutine-headerTitle-2ri6- {\n  font-family: 'Raleway';\n  font-size: 20px;\n  font-weight: 400;\n  display: inline-block;\n}\n\n.EveningRoutine-inputContainer-2pNvJ {\n  margin-bottom: 30px;\n  margin-top: 10px;\n}\n\n.EveningRoutine-inputTitle-3s5a_ {\n  font-family: 'Playfair Display', cursive;\n  font-size: 24px;\n  color: #616161;\n  font-style: italic;\n}\n\n.EveningRoutine-inputs-23FWt {\n  margin-left: 5px;\n  font-family: 'Playfair Display', serif;\n  font-size: 18px;\n  color: #616161;\n}\n\ndiv.EveningRoutine-input-7gDA5 {\n  padding-left: 20px;\n}\n\n.EveningRoutine-input-7gDA5 textarea {\n  box-sizing: border-box;\n  width: 100%;\n  outline: 0;\n  border-radius: 0;\n  color: #000;\n  font-size: 18px;\n  border: none;\n  border-bottom: 1px solid #979797;\n  font-family: 'Playfair Display', serif;\n  background: transparent;\n  padding: 5px;\n  margin-top: 10px;\n}\n\n.EveningRoutine-input-7gDA5 textarea:focus {\n  border-width: 2px;\n  padding-bottom: 5px;\n}\n\n", "", {"version":3,"sources":["/./components/EveningRoutine/EveningRoutine.css"],"names":[],"mappings":";AACA;EACE,gBAAgB;EAChB,iBAAiB;CAClB;;AAED;EACE,YAAY;EACZ,YAAY;EACZ,uBAAuB;EACvB,gBAAgB;EAChB,sBAAsB;CACvB;;AAED;EACE,aAAa;EACb,iCAAiC;EACjC,gBAAgB;EAChB,oBAAoB;EACpB,YAAY;EACZ,iBAAiB;EACjB,wBAAwB;CACzB;;AAED;EACE,iBAAiB;CAClB;;AAED;EACE,cAAc;CACf;;AAED;EACE,kBAAkB;EAClB,oBAAoB;CACrB;;AAED;EACE,uBAAuB;EACvB,gBAAgB;EAChB,iBAAiB;EACjB,sBAAsB;CACvB;;AAED;EACE,oBAAoB;EACpB,iBAAiB;CAClB;;AAED;EACE,yCAAyC;EACzC,gBAAgB;EAChB,eAAe;EACf,mBAAmB;CACpB;;AAED;EACE,iBAAiB;EACjB,uCAAuC;EACvC,gBAAgB;EAChB,eAAe;CAChB;;AAED;EACE,mBAAmB;CACpB;;AAED;EACE,uBAAuB;EACvB,YAAY;EACZ,WAAW;EACX,iBAAiB;EACjB,YAAY;EACZ,gBAAgB;EAChB,aAAa;EACb,iCAAiC;EACjC,uCAAuC;EACvC,wBAAwB;EACxB,aAAa;EACb,iBAAiB;CAClB;;AAED;EACE,kBAAkB;EAClB,oBAAoB;CACrB","file":"EveningRoutine.css","sourcesContent":["\n.container {\n  padding-top: 1%;\n  padding-left: 3%;\n}\n\n.icon {\n  width: 10px;\n  height: 5px;\n  vertical-align: middle;\n  margin-left: 1%;\n  display: inline-block;\n}\n\n.header {\n  border: none;\n  border-bottom: 1px solid #979797;\n  cursor: pointer;\n  padding-bottom: 1px;\n  width: 100%;\n  text-align: left;\n  background: transparent;\n}\n\n.header:hover .headerTitle {\n  font-weight: 700;\n}\n\n.header:focus {\n  outline: none;\n}\n\n.header:hover {\n  border-width: 2px;\n  padding-bottom: 0px;\n}\n\n.headerTitle {\n  font-family: 'Raleway';\n  font-size: 20px;\n  font-weight: 400;\n  display: inline-block;\n}\n\n.inputContainer {\n  margin-bottom: 30px;\n  margin-top: 10px;\n}\n\n.inputTitle {\n  font-family: 'Playfair Display', cursive;\n  font-size: 24px;\n  color: #616161;\n  font-style: italic;\n}\n\n.inputs {\n  margin-left: 5px;\n  font-family: 'Playfair Display', serif;\n  font-size: 18px;\n  color: #616161;\n}\n\ndiv.input {\n  padding-left: 20px;\n}\n\n.input textarea {\n  box-sizing: border-box;\n  width: 100%;\n  outline: 0;\n  border-radius: 0;\n  color: #000;\n  font-size: 18px;\n  border: none;\n  border-bottom: 1px solid #979797;\n  font-family: 'Playfair Display', serif;\n  background: transparent;\n  padding: 5px;\n  margin-top: 10px;\n}\n\n.input textarea:focus {\n  border-width: 2px;\n  padding-bottom: 5px;\n}\n\n"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"container": "EveningRoutine-container-2evGO",
  	"icon": "EveningRoutine-icon-3vDUw",
  	"header": "EveningRoutine-header-3KkET",
  	"headerTitle": "EveningRoutine-headerTitle-2ri6-",
  	"inputContainer": "EveningRoutine-inputContainer-2pNvJ",
  	"inputTitle": "EveningRoutine-inputTitle-3s5a_",
  	"inputs": "EveningRoutine-inputs-23FWt",
  	"input": "EveningRoutine-input-7gDA5"
  };

/***/ },
/* 85 */
/***/ function(module, exports) {

  module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAAAXNSR0IArs4c6QAAAORJREFUKBWdkT8LQWEUh1+RkCQyWGwGq1Jmm80XMPkI8iGkGCmT3aBkMkhKSRaTzWCSjZQiPG/dUydd+XPq6fzec37ndLvHGGM6cIAmeOHX8DHQArujbYen8HAYkAPwbQQxDkHm7S4Th4UqTtAR+BRRDDOQZXN0TIbCiLFqrtAJabrkJLU1yLIROvTq81PoK9MGnXo18U7DFmRZD23/o2vYo3RBzDt0Rjmz6L3qN9Ae1X8r62rIXi8HBTg69Tu5Cj9FDbd86Ql9cd5Xchn+igpTN5DFZ3Txr01qqIS2B1pCXtVd5RNIED0bdIaaMQAAAABJRU5ErkJggg=="

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _jsxFileName = '/Users/czengg/Documents/interestShit/sideProjects/fiveMinJournal/codebase/src/components/DateCalendar/DateCalendar.js';
  
  var _react = __webpack_require__(17);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(36);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _DateCalendar = __webpack_require__(87);
  
  var _DateCalendar2 = _interopRequireDefault(_DateCalendar);
  
  var _calendar = __webpack_require__(89);
  
  var _calendar2 = _interopRequireDefault(_calendar);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function DateCalendar(_ref) {
    var date = _ref.date;
  
    var dateString = date.format('MMMM D, YYYY').toUpperCase();
  
    return _react2.default.createElement(
      'div',
      { className: _DateCalendar2.default.dateContainer, __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      },
      _react2.default.createElement('img', { src: _calendar2.default, __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }),
      _react2.default.createElement(
        'div',
        { className: _DateCalendar2.default.date, __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          },
          __self: this
        },
        dateString
      )
    );
  }
  
  DateCalendar.propTypes = {
    date: _react.PropTypes.object.isRequired
  };
  
  exports.default = (0, _withStyles2.default)(_DateCalendar2.default)(DateCalendar);

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(88);
      var insertCss = __webpack_require__(40);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false}!./../../../node_modules/postcss-loader/index.js?pack=default!./DateCalendar.css", function() {
          content = require("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false}!./../../../node_modules/postcss-loader/index.js?pack=default!./DateCalendar.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(39)();
  // imports
  
  
  // module
  exports.push([module.id, ".DateCalendar-dateContainer-21pl9 img {\n  width: 34px;\n  height: 35px;\n  vertical-align: middle;\n}\n\n.DateCalendar-date-2gZ4K {\n  display: inline-block;\n  vertical-align: middle;\n  padding-left: 15px;\n  font-size: 24px;\n  font-family: 'Raleway';\n  font-weight: 600;\n  margin-top: 3px;\n}\n", "", {"version":3,"sources":["/./components/DateCalendar/DateCalendar.css"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,aAAa;EACb,uBAAuB;CACxB;;AAED;EACE,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,gBAAgB;EAChB,uBAAuB;EACvB,iBAAiB;EACjB,gBAAgB;CACjB","file":"DateCalendar.css","sourcesContent":[".dateContainer img {\n  width: 34px;\n  height: 35px;\n  vertical-align: middle;\n}\n\n.date {\n  display: inline-block;\n  vertical-align: middle;\n  padding-left: 15px;\n  font-size: 24px;\n  font-family: 'Raleway';\n  font-weight: 600;\n  margin-top: 3px;\n}\n"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"dateContainer": "DateCalendar-dateContainer-21pl9",
  	"date": "DateCalendar-date-2gZ4K"
  };

/***/ },
/* 89 */
/***/ function(module, exports) {

  module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABGCAYAAAB12zK5AAAAAXNSR0IArs4c6QAAB1dJREFUeAHtnH1o1VUYx3fv5ta2yJlzvqAlLI0Cw9LNEqMwTNqbU3OiuZT+mIQoREpWEBpotTCR9SKVuKC1wthi02GZmH8Ytg3fSCiHqdgQba5S5zbdS5/nds+Pc4+7u7/7grjtHDj3PM9znvM853x/z3n5/fj9ricuBik3N7cAM8Uej2fn7t2762Jg0rUJfK9FeZrX691YW1v7m+uGQRQTgshdizds2JDQ0NBQ2dvbm0KeQx4BML2uDUShWFBQML2rq+t9MdHd3T2cIicKc76m3mgNHDlyJFnA8NsZXlRUNCxam27bA0a6pjtKoyMmowYkYs93aMOgU4ar7iEkR1Im6X1PTk6+tmvXrn91WX80c1ymkIqg/lRD1uG7Fd/tIRX9CvR/dE9PT8AYWWuu1NTUXA1mI0CZ9cDb2Ni4DCPL8/LyZgFGotmwra2tl7q1LJ4fmHUmn5OTsxkbr5PNqoj46yQAztuzZ8+B/gwsWrQonn7+wJSabeoxtjj61Yp8L+BsYxz1uo4zZfLz8+9jcWygwRcozO4LDH9DD3Uv6kb6oZf0Uxd2FX5l4Z4XqiFgjEfnFjC0dvdCL2WsvwDw9pKSEmfd8wGyYMGC8azSh3H2mNYojlDvge/UM7IW+Hd1vWA0uqXkv/X2UdKnuao7g/lT8rq6unP4/Qy+rQ9/Ss1XMuaVzc3N38rsEIFvynR2dn4DPdanwQ/GPiXvSE9PP1FeXt6h5OGWhPYntJF82xO+S3AqOSDNnz9/JOPNQvg2Wco4QClgcqyDfC+BqVJIdMyUCkkAsQRjX//PDb7f6urqy4xqL+vMPpakcsBYJqOkfAPZdi/z6AU1bMCoGMxgqHFKyW7VnZaWtooxN/vl9wBQvhdkHtcUKzU6JFlYWDiR6NqkK7a3t29kTXKmn14XS5qdYgb21iibDOwBdr9VxcXFqUoWqqyoqLiCjnOrIVjIQjJGNUxISDih6FAlq/NLN27caMLIal2XiFvf0dFxhg4X6fJY0bL44ftj7B0mP6fs0o80fH/Y2tp6ivPHI0oeqgTI45rOGAHEOYuwgl/XKoOSDLaYDuzQ2xrKSTiqZH1aaMijZuvr6z/C98vBDFE3jqg9SLRMCqajy9F3Dnr0eZhvq9EVQtEsPHfT0HdD5dc9RbkY2RTKpeTTIseRl45tXbFixV3CxyJx5R/FzkrN1r74+Pi5XMip+H8FuUwB8S3RUqrpuSad6HDbgoVnIQ5Hiz6duJiYmDjTv3KL6Fe2tf1MpZPoyI3XhJaWFjlIybYedQJgiQyPGML3AU6ZcynVMfg4EXkUHTnFik6hnK+qqqr+FH23KewIwbBEgkpfamD4ZPCXIJxtG2B0fdUuolK3BRBlGhg+ezwPOQhxTBm/efNm2L7DBoROjVIO6dBlRRul3CuolKGIaEv8ObaYEn36RsfxjY6j79Z32IAwX88o44DzrKJViUzCdY7i6aCjr2RRlH+otti9xTe7zwj8T1c60GH7DhsQnFWTe8UpDp+mE5vkqZnwcpPE6l6K/Anh6XQP9HdCxyhVaXbW4et5xcuRHFrOUcP9sgvZ2dk/q3q3pYct1Dc4aZCUlJRurgl9GaIj2wjHNaqOgcsNn+w2DwKAdEylUm60XlNMtKXc1rOoH8KHHMpUOov/izBTkDvPXZDN49Rdo5SClXKeop0cIeQC1kQSIXE8qFlP+0PKCQbTyTPJDhgY/ykzM/MtpROLUo7bbLPLsXVeszcRvzPIOhhb3ICh2XDIiACRp1apqalPMWgBps2xBoHsGuvMq1lZWc+UlZXJo4OYJp52/Y5v2T124qvbMH4e37mAsdaQu2YjmjK6dcI4maN6NldoFNPoUkZGRn00jwx026Fozh3p+JyGnty/nOMiHGU9k2c4rpM5ZcI+mJme/M84Zf+/7Ylzh6xd3yvHRIYiIy4jmjIRexsADQMihCP3ZnaQjgHQ75h1kan+sG4sABAqS8h6/ZCj7ZQxLnlAhLCNbaHe1TMRw86AZZkRU+l8vhpAACDcyr/j5qSqGg+G0r/tOoDYKWNcVQuIBcRAwGBthFhADAQM1kaIBcRAwGBthFhADAQM1kaIBcRAwGBthFhADAQM1kaIBcRAwGBthFhADAQM1kaIBcRAwGBthFhADAQM1kaIBcRAwGBthFhADAQM1kaIBcRAwGBthFhADAQM1kZIf4Dwnau8lj3Ukj7mXokQ52V5Pq3IHGpo8MKMM2boVi9vDTUpEKBnKXqolPqYeem3SSJEfx/8zdvxAeGdAjZvXC4mKp5U/QGcGm9KSsp2iH9ESOUIPvLdzxvCWUppsJa8SiVvXH6ujY/3gGtP+hYUvohYQsVXqhKAulGWLzSPEUZXlXwwlIxrHOPIorxfG89fIvN9Iq+EILYaeiuK8Uo2RMoLfJ5bwEcFjTJeZ/BNTU31kydP/pHoeAj5hCEARhdjLWeci/mYUb718SV9D1ayOBabSUSKLDZjyQF/qOIoDVziCkCcZXz7+VhA/rkiIP0HWYznlOaAeaQAAAAASUVORK5CYII="

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(91);
      var insertCss = __webpack_require__(40);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false}!./../../../node_modules/postcss-loader/index.js?pack=default!./Home.css", function() {
          content = require("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false}!./../../../node_modules/postcss-loader/index.js?pack=default!./Home.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(39)();
  // imports
  
  
  // module
  exports.push([module.id, "html {\n  width: 100%;\n  height: 100%;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  background-color: #FEFEF6;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 0%;\n          flex: 1 1 0%;\n}\n\n.Home-root-2IMq2 {\n  margin-top: 3%;\n  width: 90%;\n}\n\n.Home-container-2Yejq {\n  margin: 0 auto;\n  padding: 0 0 40px;\n}\n\n.Home-quoteContainer-l7woL {\n  padding-left: 20px;\n  font-size: 20px;\n  font-family: 'Playfair Display', serif;\n  line-height: 34px;\n  margin-top: 20px;\n  margin-bottom: 5%;\n  color: #4A4A4A;\n  border-left: 1px solid #4A4A4A;\n}\n\n.Home-quote-2U1_8 {\n  font-style: italic;\n}\n\n.Home-author-WPfc4 {\n  font-style: normal;\n}\n", "", {"version":3,"sources":["/./routes/home/Home.css"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,aAAa;CACd;;AAED;EACE,UAAU;EACV,WAAW;EACX,0BAA0B;EAC1B,qBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,oBAAQ;MAAR,iBAAQ;UAAR,aAAQ;CACT;;AAED;EACE,eAAe;EACf,WAAW;CACZ;;AAED;EACE,eAAe;EACf,kBAAkB;CACnB;;AAED;EACE,mBAAmB;EACnB,gBAAgB;EAChB,uCAAuC;EACvC,kBAAkB;EAClB,iBAAiB;EACjB,kBAAkB;EAClB,eAAe;EACf,+BAA+B;CAChC;;AAED;EACE,mBAAmB;CACpB;;AAED;EACE,mBAAmB;CACpB","file":"Home.css","sourcesContent":["html {\n  width: 100%;\n  height: 100%;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  background-color: #FEFEF6;\n  display: flex;\n  flex: 1;\n}\n\n.root {\n  margin-top: 3%;\n  width: 90%;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n}\n\n.quoteContainer {\n  padding-left: 20px;\n  font-size: 20px;\n  font-family: 'Playfair Display', serif;\n  line-height: 34px;\n  margin-top: 20px;\n  margin-bottom: 5%;\n  color: #4A4A4A;\n  border-left: 1px solid #4A4A4A;\n}\n\n.quote {\n  font-style: italic;\n}\n\n.author {\n  font-style: normal;\n}\n"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"root": "Home-root-2IMq2",
  	"container": "Home-container-2Yejq",
  	"quoteContainer": "Home-quoteContainer-l7woL",
  	"quote": "Home-quote-2U1_8",
  	"author": "Home-author-WPfc4"
  };

/***/ },
/* 92 */
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
  
  var _actionTypes = __webpack_require__(32);
  
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
/* 93 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _jsxFileName = '/Users/czengg/Documents/interestShit/sideProjects/fiveMinJournal/codebase/src/routes/login/index.js'; /**
                                                                                                                             * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                                                             *
                                                                                                                             * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                                                             *
                                                                                                                             * This source code is licensed under the MIT license found in the
                                                                                                                             * LICENSE.txt file in the root directory of this source tree.
                                                                                                                             */
  
  var _react = __webpack_require__(17);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _fetch = __webpack_require__(65);
  
  var _fetch2 = _interopRequireDefault(_fetch);
  
  var _Login = __webpack_require__(94);
  
  var _Login2 = _interopRequireDefault(_Login);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
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
        component: _react2.default.createElement(_Login2.default, { title: title, handleSubmit: handleSubmit, __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          },
          __self: this
        })
      };
    }
  };

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _jsxFileName = '/Users/czengg/Documents/interestShit/sideProjects/fiveMinJournal/codebase/src/routes/login/Login.js'; /**
                                                                                                                             * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                                                             *
                                                                                                                             * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                                                             *
                                                                                                                             * This source code is licensed under the MIT license found in the
                                                                                                                             * LICENSE.txt file in the root directory of this source tree.
                                                                                                                             */
  
  var _react = __webpack_require__(17);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(36);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _Layout = __webpack_require__(71);
  
  var _Layout2 = _interopRequireDefault(_Layout);
  
  var _Login = __webpack_require__(95);
  
  var _Login2 = _interopRequireDefault(_Login);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function Login(_ref) {
    var handleSubmit = _ref.handleSubmit;
  
    return _react2.default.createElement(
      _Layout2.default,
      { header: 'fiveMinuteJournal', __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      },
      _react2.default.createElement(
        'div',
        { className: _Login2.default.root, __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          },
          __self: this
        },
        _react2.default.createElement(
          'div',
          { className: _Login2.default.container, __source: {
              fileName: _jsxFileName,
              lineNumber: 19
            },
            __self: this
          },
          _react2.default.createElement(
            'h1',
            { className: _Login2.default.lead, __source: {
                fileName: _jsxFileName,
                lineNumber: 20
              },
              __self: this
            },
            'Sign In'
          ),
          _react2.default.createElement(
            'form',
            {
              method: 'post',
              onSubmit: handleSubmit,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 21
              },
              __self: this
            },
            _react2.default.createElement(
              'div',
              { className: _Login2.default.formGroup, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 25
                },
                __self: this
              },
              _react2.default.createElement('input', {
                className: _Login2.default.input,
                id: 'email',
                type: 'text',
                name: 'email',
                placeholder: 'email',
                autoFocus: true,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 26
                },
                __self: this
              })
            ),
            _react2.default.createElement(
              'div',
              { className: _Login2.default.formGroup, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 35
                },
                __self: this
              },
              _react2.default.createElement('input', {
                className: _Login2.default.input,
                id: 'password',
                type: 'password',
                name: 'password',
                placeholder: 'password',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 36
                },
                __self: this
              })
            ),
            _react2.default.createElement(
              'div',
              { className: _Login2.default.formGroup, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 44
                },
                __self: this
              },
              _react2.default.createElement(
                'button',
                { className: _Login2.default.button, type: 'submit', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                  },
                  __self: this
                },
                'Log In \u2192'
              )
            )
          )
        )
      )
    );
  }
  
  Login.propTypes = {
    title: _react.PropTypes.string.isRequired,
    handleSubmit: _react.PropTypes.func.isRequired
  };
  
  exports.default = (0, _withStyles2.default)(_Login2.default)(Login);

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(96);
      var insertCss = __webpack_require__(40);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false}!./../../../node_modules/postcss-loader/index.js?pack=default!./Login.css", function() {
          content = require("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false}!./../../../node_modules/postcss-loader/index.js?pack=default!./Login.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(39)();
  // imports
  
  
  // module
  exports.push([module.id, "html {\n  width: 100%;\n  height: 100%;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  background-color: #FEFEF6;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 0%;\n          flex: 1 1 0%;\n}\n\n.Login-root-rQNQN {\n  width: 90%;\n  margin-top: 10%;\n}\n\n.Login-container-2BVuU {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  text-align: center;\n}\n\n.Login-lead-1mJBN {\n  font-family: 'Lobster', cursive;\n  font-size: 48px;\n  color: #4A4A4A;\n}\n\n.Login-formGroup-25Tio {\n  margin-bottom: 15px;\n}\n\n.Login-input-1bTr- {\n  display: block;\n  box-sizing: border-box;\n  width: 100%;\n  height: 46px;\n  outline: 0;\n  border-radius: 0;\n  color: #616161;\n  font-size: 18px;\n  line-height: 1.3333333;\n  -webkit-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n  border: none;\n  border-bottom: 1px solid #979797;\n  font-family: 'Playfair Display', serif;\n  background: transparent;\n}\n\n.Login-input-1bTr-:focus {\n  border-width: 2px;\n  padding-bottom: 0;\n}\n\n.Login-button-11e1X {\n  display: block;\n  box-sizing: border-box;\n  margin: 0;\n  padding: 10px 16px;\n  width: 100%;\n  outline: 0;\n  color: #4A4A4A;\n  text-align: center;\n  text-decoration: none;\n  font-size: 18px;\n  line-height: 1.3333333;\n  cursor: pointer;\n  border: none;\n  background: transparent;\n  font-family: 'Playfair Display', serif;\n  font-style: oblique;\n  font-size: 20px;\n}\n\n.Login-button-11e1X:focus, .Login-button-11e1X:hover {\n  color: #979797;\n}\n", "", {"version":3,"sources":["/./routes/login/Login.css"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,aAAa;CACd;;AAED;EACE,UAAU;EACV,WAAW;EACX,0BAA0B;EAC1B,qBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,oBAAQ;MAAR,iBAAQ;UAAR,aAAQ;CACT;;AAED;EACE,WAAW;EACX,gBAAgB;CACjB;;AAED;EACE,eAAe;EACf,kBAAkB;EAClB,mBAAmB;CACpB;;AAED;EACE,gCAAgC;EAChC,gBAAgB;EAChB,eAAe;CAChB;;AAED;EACE,oBAAoB;CACrB;;AAED;EACE,eAAe;EACf,uBAAuB;EACvB,YAAY;EACZ,aAAa;EACb,WAAW;EACX,iBAAiB;EACjB,eAAe;EACf,gBAAgB;EAChB,uBAAuB;EACvB,iFAAyE;EAAzE,yEAAyE;EACzE,aAAa;EACb,iCAAiC;EACjC,uCAAuC;EACvC,wBAAwB;CACzB;;AAED;EACE,kBAAkB;EAClB,kBAAkB;CACnB;;AAED;EACE,eAAe;EACf,uBAAuB;EACvB,UAAU;EACV,mBAAmB;EACnB,YAAY;EACZ,WAAW;EACX,eAAe;EACf,mBAAmB;EACnB,sBAAsB;EACtB,gBAAgB;EAChB,uBAAuB;EACvB,gBAAgB;EAChB,aAAa;EACb,wBAAwB;EACxB,uCAAuC;EACvC,oBAAoB;EACpB,gBAAgB;CACjB;;AAED;EACE,eAAe;CAChB","file":"Login.css","sourcesContent":["html {\n  width: 100%;\n  height: 100%;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  background-color: #FEFEF6;\n  display: flex;\n  flex: 1;\n}\n\n.root {\n  width: 90%;\n  margin-top: 10%;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  text-align: center;\n}\n\n.lead {\n  font-family: 'Lobster', cursive;\n  font-size: 48px;\n  color: #4A4A4A;\n}\n\n.formGroup {\n  margin-bottom: 15px;\n}\n\n.input {\n  display: block;\n  box-sizing: border-box;\n  width: 100%;\n  height: 46px;\n  outline: 0;\n  border-radius: 0;\n  color: #616161;\n  font-size: 18px;\n  line-height: 1.3333333;\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n  border: none;\n  border-bottom: 1px solid #979797;\n  font-family: 'Playfair Display', serif;\n  background: transparent;\n}\n\n.input:focus {\n  border-width: 2px;\n  padding-bottom: 0;\n}\n\n.button {\n  display: block;\n  box-sizing: border-box;\n  margin: 0;\n  padding: 10px 16px;\n  width: 100%;\n  outline: 0;\n  color: #4A4A4A;\n  text-align: center;\n  text-decoration: none;\n  font-size: 18px;\n  line-height: 1.3333333;\n  cursor: pointer;\n  border: none;\n  background: transparent;\n  font-family: 'Playfair Display', serif;\n  font-style: oblique;\n  font-size: 20px;\n}\n\n.button:focus, .button:hover {\n  color: #979797;\n}\n"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"root": "Login-root-rQNQN",
  	"container": "Login-container-2BVuU",
  	"lead": "Login-lead-1mJBN",
  	"formGroup": "Login-formGroup-25Tio",
  	"input": "Login-input-1bTr-",
  	"button": "Login-button-11e1X"
  };

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _jsxFileName = '/Users/czengg/Documents/interestShit/sideProjects/fiveMinJournal/codebase/src/routes/register/index.js'; /**
                                                                                                                                * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                                                                *
                                                                                                                                * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                                                                *
                                                                                                                                * This source code is licensed under the MIT license found in the
                                                                                                                                * LICENSE.txt file in the root directory of this source tree.
                                                                                                                                */
  
  var _react = __webpack_require__(17);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Register = __webpack_require__(98);
  
  var _Register2 = _interopRequireDefault(_Register);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var title = 'New User Registration';
  
  exports.default = {
  
    path: '/register',
  
    action: function action() {
      return {
        title: title,
        component: _react2.default.createElement(_Register2.default, { title: title, __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          __self: this
        })
      };
    }
  };

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _jsxFileName = '/Users/czengg/Documents/interestShit/sideProjects/fiveMinJournal/codebase/src/routes/register/Register.js'; /**
                                                                                                                                   * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                                                                   *
                                                                                                                                   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                                                                   *
                                                                                                                                   * This source code is licensed under the MIT license found in the
                                                                                                                                   * LICENSE.txt file in the root directory of this source tree.
                                                                                                                                   */
  
  var _react = __webpack_require__(17);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(36);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _Layout = __webpack_require__(71);
  
  var _Layout2 = _interopRequireDefault(_Layout);
  
  var _Register = __webpack_require__(99);
  
  var _Register2 = _interopRequireDefault(_Register);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function Register() {
    return _react2.default.createElement(
      _Layout2.default,
      { header: 'fiveMinuteJournal', __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      },
      _react2.default.createElement(
        'div',
        { className: _Register2.default.root, __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          },
          __self: this
        },
        _react2.default.createElement(
          'div',
          { className: _Register2.default.container, __source: {
              fileName: _jsxFileName,
              lineNumber: 19
            },
            __self: this
          },
          _react2.default.createElement(
            'h1',
            { className: _Register2.default.lead, __source: {
                fileName: _jsxFileName,
                lineNumber: 20
              },
              __self: this
            },
            'Sign Up'
          ),
          _react2.default.createElement(
            'form',
            { method: 'post', __source: {
                fileName: _jsxFileName,
                lineNumber: 21
              },
              __self: this
            },
            _react2.default.createElement(
              'div',
              { className: _Register2.default.formGroup, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 22
                },
                __self: this
              },
              _react2.default.createElement('input', {
                className: _Register2.default.input,
                id: 'email',
                type: 'text',
                name: 'email',
                placeholder: 'email',
                autoFocus: true,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 23
                },
                __self: this
              })
            ),
            _react2.default.createElement(
              'div',
              { className: _Register2.default.formGroup, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 32
                },
                __self: this
              },
              _react2.default.createElement('input', {
                className: _Register2.default.input,
                id: 'password',
                type: 'password',
                name: 'password',
                placeholder: 'password',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 33
                },
                __self: this
              })
            ),
            _react2.default.createElement(
              'div',
              { className: _Register2.default.formGroup, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 41
                },
                __self: this
              },
              _react2.default.createElement(
                'button',
                { className: _Register2.default.button, type: 'submit', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                  },
                  __self: this
                },
                'Register \u2192'
              )
            )
          )
        )
      )
    );
  }
  
  Register.propTypes = { title: _react.PropTypes.string.isRequired };
  
  exports.default = (0, _withStyles2.default)(_Register2.default)(Register);

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(100);
      var insertCss = __webpack_require__(40);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false}!./../../../node_modules/postcss-loader/index.js?pack=default!./Register.css", function() {
          content = require("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false}!./../../../node_modules/postcss-loader/index.js?pack=default!./Register.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(39)();
  // imports
  
  
  // module
  exports.push([module.id, "html {\n  width: 100%;\n  height: 100%;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  background-color: #FEFEF6;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 0%;\n          flex: 1 1 0%;\n}\n\n.Register-root-1hu0P {\n  width: 90%;\n  margin-top: 10%;\n}\n\n.Register-container-OjhIB {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  text-align: center;\n}\n\n.Register-lead-2Uwpf {\n  font-family: 'Lobster', cursive;\n  font-size: 48px;\n  color: #4A4A4A;\n}\n\n.Register-formGroup-3ZVSx {\n  margin-bottom: 15px;\n}\n\n.Register-input-2b_qn {\n  display: block;\n  box-sizing: border-box;\n  width: 100%;\n  height: 46px;\n  outline: 0;\n  border-radius: 0;\n  color: #616161;\n  font-size: 18px;\n  line-height: 1.3333333;\n  -webkit-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n  border: none;\n  border-bottom: 1px solid #979797;\n  font-family: 'Playfair Display', serif;\n  background: transparent;\n}\n\n.Register-input-2b_qn:focus {\n  border-width: 2px;\n  padding-bottom: 0;\n}\n\n.Register-button-3N6JT {\n  display: block;\n  box-sizing: border-box;\n  margin: 0;\n  padding: 10px 16px;\n  width: 100%;\n  outline: 0;\n  color: #4A4A4A;\n  text-align: center;\n  text-decoration: none;\n  font-size: 18px;\n  line-height: 1.3333333;\n  cursor: pointer;\n  border: none;\n  background: transparent;\n  font-family: 'Playfair Display', serif;\n  font-style: oblique;\n  font-size: 20px;\n}\n\n.Register-button-3N6JT:focus, .Register-button-3N6JT:hover {\n  color: #979797;\n}\n", "", {"version":3,"sources":["/./routes/register/Register.css"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,aAAa;CACd;;AAED;EACE,UAAU;EACV,WAAW;EACX,0BAA0B;EAC1B,qBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,oBAAQ;MAAR,iBAAQ;UAAR,aAAQ;CACT;;AAED;EACE,WAAW;EACX,gBAAgB;CACjB;;AAED;EACE,eAAe;EACf,kBAAkB;EAClB,mBAAmB;CACpB;;AAED;EACE,gCAAgC;EAChC,gBAAgB;EAChB,eAAe;CAChB;;AAED;EACE,oBAAoB;CACrB;;AAED;EACE,eAAe;EACf,uBAAuB;EACvB,YAAY;EACZ,aAAa;EACb,WAAW;EACX,iBAAiB;EACjB,eAAe;EACf,gBAAgB;EAChB,uBAAuB;EACvB,iFAAyE;EAAzE,yEAAyE;EACzE,aAAa;EACb,iCAAiC;EACjC,uCAAuC;EACvC,wBAAwB;CACzB;;AAED;EACE,kBAAkB;EAClB,kBAAkB;CACnB;;AAED;EACE,eAAe;EACf,uBAAuB;EACvB,UAAU;EACV,mBAAmB;EACnB,YAAY;EACZ,WAAW;EACX,eAAe;EACf,mBAAmB;EACnB,sBAAsB;EACtB,gBAAgB;EAChB,uBAAuB;EACvB,gBAAgB;EAChB,aAAa;EACb,wBAAwB;EACxB,uCAAuC;EACvC,oBAAoB;EACpB,gBAAgB;CACjB;;AAED;EACE,eAAe;CAChB","file":"Register.css","sourcesContent":["html {\n  width: 100%;\n  height: 100%;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  background-color: #FEFEF6;\n  display: flex;\n  flex: 1;\n}\n\n.root {\n  width: 90%;\n  margin-top: 10%;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  text-align: center;\n}\n\n.lead {\n  font-family: 'Lobster', cursive;\n  font-size: 48px;\n  color: #4A4A4A;\n}\n\n.formGroup {\n  margin-bottom: 15px;\n}\n\n.input {\n  display: block;\n  box-sizing: border-box;\n  width: 100%;\n  height: 46px;\n  outline: 0;\n  border-radius: 0;\n  color: #616161;\n  font-size: 18px;\n  line-height: 1.3333333;\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n  border: none;\n  border-bottom: 1px solid #979797;\n  font-family: 'Playfair Display', serif;\n  background: transparent;\n}\n\n.input:focus {\n  border-width: 2px;\n  padding-bottom: 0;\n}\n\n.button {\n  display: block;\n  box-sizing: border-box;\n  margin: 0;\n  padding: 10px 16px;\n  width: 100%;\n  outline: 0;\n  color: #4A4A4A;\n  text-align: center;\n  text-decoration: none;\n  font-size: 18px;\n  line-height: 1.3333333;\n  cursor: pointer;\n  border: none;\n  background: transparent;\n  font-family: 'Playfair Display', serif;\n  font-style: oblique;\n  font-size: 20px;\n}\n\n.button:focus, .button:hover {\n  color: #979797;\n}\n"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"root": "Register-root-1hu0P",
  	"container": "Register-container-OjhIB",
  	"lead": "Register-lead-2Uwpf",
  	"formGroup": "Register-formGroup-3ZVSx",
  	"input": "Register-input-2b_qn",
  	"button": "Register-button-3N6JT"
  };

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _regenerator = __webpack_require__(2);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _promise = __webpack_require__(102);
  
  var _promise2 = _interopRequireDefault(_promise);
  
  var _asyncToGenerator2 = __webpack_require__(6);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  var _jsxFileName = '/Users/czengg/Documents/interestShit/sideProjects/fiveMinJournal/codebase/src/routes/admin/index.js'; /**
                                                                                                                             * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                                                             *
                                                                                                                             * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                                                             *
                                                                                                                             * This source code is licensed under the MIT license found in the
                                                                                                                             * LICENSE.txt file in the root directory of this source tree.
                                                                                                                             */
  
  var _react = __webpack_require__(17);
  
  var _react2 = _interopRequireDefault(_react);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var title = 'Admin Page';
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
                    return resolve(__webpack_require__(103).default);
                  }(__webpack_require__));
                });
  
              case 4:
                Admin = _context.sent;
                return _context.abrupt('return', {
                  title: title,
                  chunk: 'admin',
                  component: _react2.default.createElement(Admin, { title: title, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 31
                    },
                    __self: _this
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
/* 102 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/core-js/promise");

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _jsxFileName = '/Users/czengg/Documents/interestShit/sideProjects/fiveMinJournal/codebase/src/routes/admin/Admin.js'; /**
                                                                                                                             * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                                                             *
                                                                                                                             * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                                                             *
                                                                                                                             * This source code is licensed under the MIT license found in the
                                                                                                                             * LICENSE.txt file in the root directory of this source tree.
                                                                                                                             */
  
  var _react = __webpack_require__(17);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(36);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _Layout = __webpack_require__(71);
  
  var _Layout2 = _interopRequireDefault(_Layout);
  
  var _Admin = __webpack_require__(104);
  
  var _Admin2 = _interopRequireDefault(_Admin);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function Admin(_ref) {
    var title = _ref.title;
  
    return _react2.default.createElement(
      _Layout2.default,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      },
      _react2.default.createElement(
        'div',
        { className: _Admin2.default.root, __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          },
          __self: this
        },
        _react2.default.createElement(
          'div',
          { className: _Admin2.default.container, __source: {
              fileName: _jsxFileName,
              lineNumber: 19
            },
            __self: this
          },
          _react2.default.createElement(
            'h1',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 20
              },
              __self: this
            },
            title
          ),
          _react2.default.createElement(
            'p',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 21
              },
              __self: this
            },
            '...'
          )
        )
      )
    );
  }
  
  Admin.propTypes = {
    title: _react.PropTypes.string.isRequired
  };
  
  exports.default = (0, _withStyles2.default)(_Admin2.default)(Admin);

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(105);
      var insertCss = __webpack_require__(40);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false}!./../../../node_modules/postcss-loader/index.js?pack=default!./Admin.css", function() {
          content = require("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false}!./../../../node_modules/postcss-loader/index.js?pack=default!./Admin.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(39)();
  // imports
  
  
  // module
  exports.push([module.id, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {/*\n   * Typography\n   * ======================================================================== *//*\n   * Layout\n   * ======================================================================== *//*\n   * Media queries breakpoints\n   * ======================================================================== *//* Extra small screen / phone *//* Small screen / tablet *//* Medium screen / desktop *//* Large screen / wide desktop */\n}\n\n.Admin-root-P91vz {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.Admin-container-301ui {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 1000px;\n}\n", "", {"version":3,"sources":["/./routes/admin/Admin.css","/./components/variables.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;ACPH;;;;;;;GAOG;;AAEH,OACE;;gFAE8E;;gFAMA;;gFAMA,gCAErB,2BACL,6BACE,iCACI;CAC3D;;ADnBD;EACE,mBAAmB;EACnB,oBAAoB;CACrB;;AAED;EACE,eAAe;EACf,kBAAkB;EAClB,kBAAoC;CACrC","file":"Admin.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@import '../../components/variables.css';\n\n.root {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: var(--max-content-width);\n}\n","/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"root": "Admin-root-P91vz",
  	"container": "Admin-container-301ui"
  };

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _jsxFileName = '/Users/czengg/Documents/interestShit/sideProjects/fiveMinJournal/codebase/src/routes/notFound/index.js'; /**
                                                                                                                                * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                                                                *
                                                                                                                                * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                                                                *
                                                                                                                                * This source code is licensed under the MIT license found in the
                                                                                                                                * LICENSE.txt file in the root directory of this source tree.
                                                                                                                                */
  
  var _react = __webpack_require__(17);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _NotFound = __webpack_require__(107);
  
  var _NotFound2 = _interopRequireDefault(_NotFound);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var title = 'Page Not Found';
  
  exports.default = {
  
    path: '*',
  
    action: function action() {
      return {
        title: title,
        component: _react2.default.createElement(_NotFound2.default, { title: title, __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          __self: this
        }),
        status: 404
      };
    }
  };

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _jsxFileName = '/Users/czengg/Documents/interestShit/sideProjects/fiveMinJournal/codebase/src/routes/notFound/NotFound.js'; /**
                                                                                                                                   * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                                                                   *
                                                                                                                                   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                                                                   *
                                                                                                                                   * This source code is licensed under the MIT license found in the
                                                                                                                                   * LICENSE.txt file in the root directory of this source tree.
                                                                                                                                   */
  
  var _react = __webpack_require__(17);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(36);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _Layout = __webpack_require__(71);
  
  var _Layout2 = _interopRequireDefault(_Layout);
  
  var _NotFound = __webpack_require__(108);
  
  var _NotFound2 = _interopRequireDefault(_NotFound);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function NotFound(_ref) {
    var title = _ref.title;
  
    return _react2.default.createElement(
      _Layout2.default,
      { full: false, __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      },
      _react2.default.createElement(
        'div',
        { className: _NotFound2.default.root, __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          },
          __self: this
        },
        _react2.default.createElement(
          'div',
          { className: _NotFound2.default.container, __source: {
              fileName: _jsxFileName,
              lineNumber: 19
            },
            __self: this
          },
          _react2.default.createElement(
            'h1',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 20
              },
              __self: this
            },
            title
          ),
          _react2.default.createElement(
            'p',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 21
              },
              __self: this
            },
            'Sorry, the page you were trying to view does not exist.'
          )
        )
      )
    );
  }
  
  NotFound.propTypes = {
    title: _react.PropTypes.string.isRequired
  };
  
  exports.default = (0, _withStyles2.default)(_NotFound2.default)(NotFound);

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(109);
      var insertCss = __webpack_require__(40);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false}!./../../../node_modules/postcss-loader/index.js?pack=default!./NotFound.css", function() {
          content = require("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false}!./../../../node_modules/postcss-loader/index.js?pack=default!./NotFound.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(39)();
  // imports
  
  
  // module
  exports.push([module.id, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {/*\n   * Typography\n   * ======================================================================== *//*\n   * Layout\n   * ======================================================================== *//*\n   * Media queries breakpoints\n   * ======================================================================== *//* Extra small screen / phone *//* Small screen / tablet *//* Medium screen / desktop *//* Large screen / wide desktop */\n}\n\n.NotFound-root-3whbd {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.NotFound-container-1BOHG {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 1000px;\n}\n", "", {"version":3,"sources":["/./routes/notFound/NotFound.css","/./components/variables.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;ACPH;;;;;;;GAOG;;AAEH,OACE;;gFAE8E;;gFAMA;;gFAMA,gCAErB,2BACL,6BACE,iCACI;CAC3D;;ADnBD;EACE,mBAAmB;EACnB,oBAAoB;CACrB;;AAED;EACE,eAAe;EACf,kBAAkB;EAClB,kBAAoC;CACrC","file":"NotFound.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@import '../../components/variables.css';\n\n.root {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: var(--max-content-width);\n}\n","/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"root": "NotFound-root-3whbd",
  	"container": "NotFound-container-1BOHG"
  };

/***/ },
/* 110 */
/***/ function(module, exports) {

  module.exports = require("./assets");

/***/ }
/******/ ]);
//# sourceMappingURL=server.js.map