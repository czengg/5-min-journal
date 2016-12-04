/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import 'babel-polyfill';
import path from 'path';
import express from 'express';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import moment from 'moment';
import React from 'react';
import ReactDOM from 'react-dom/server';
import UniversalRouter from 'universal-router';
import PrettyError from 'pretty-error';
import passport from 'passport';
import { Strategy } from 'passport-facebook';
import { MongoClient } from 'mongodb';
import App from './components/App';
import Html from './components/Html';
import { ErrorPageWithoutStyle } from './routes/error/ErrorPage';
import errorPageStyle from './routes/error/ErrorPage.css';
import models from './data/models';
import routes from './routes';
import assets from './assets'; // eslint-disable-line import/no-unresolved
import { port, auth } from './config';

const app = express();
const url = 'mongodb://localhost:27017/fiveminutejournal';

//
// Tell any CSS tooling (such as Material UI) to use all vendor prefixes if the
// user agent is not known.
// -----------------------------------------------------------------------------
global.navigator = global.navigator || {};
global.navigator.userAgent = global.navigator.userAgent || 'all';

//
// Register Node.js middleware
// -----------------------------------------------------------------------------
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true,
  cookie: { secure: false },
}));
app.use(passport.session());

// passport authentication
passport.use(new Strategy(
  {
    clientID: auth.facebook.id,
    clientSecret: auth.facebook.secret,
    callbackURL: 'http://localhost:3001/login/facebook/return',
  },
  function(accessToken, refreshToken, profile, cb) {
    cb(null, profile);
  })
);

passport.serializeUser(function(user, done) {
  console.log('serial', user);
  done(null, user.id);
});

passport.deserializeUser(function(user, done) {
  console.log('deserial', user);
  done(null, user);
});


// app.post('/login', (req, res) => {
//   connection.query(`SELECT * FROM users WHERE email="${req.body.email}"`, (err, result) => {
//     if (err) {
//       res.redirect('/error');
//     } else {
//       if (result[0].password === password) {
//         req.session.user = result[0];
//         res.redirect('/journal');
//       } else {
//         res.redirect('/error');
      
//     }
//   });
// });

app.get('/login/facebook', passport.authenticate('facebook'));

const redirects = { successRedirect: '/journal', failureRedirect: '/login' };
app.get('/login/facebook/return', passport.authenticate('facebook', redirects), (req, res) => {
  console.log('in here');
  req.session.save(() => {
    console.log(req.session);
    res.redirect('/success');
  });
});

app.post('/register', (req, res) => {
  const password = CryptoJS.AES.encrypt(req.body.password, secret).toString();
  const user  = { email: req.body.email, password };
  const query = connection.query('INSERT INTO users SET ?', user, (err, result) => {
    if (err) {
      res.redirect('/error');
    } else {
      req.session.user = user;
      res.redirect('/journal');
    }
  });
});

//
// Database connection
// -----------------------------------------------------------------------------
app.post('/save/:date', (req, res, next) => {
  const { date } = req.params;
  const user_id = req.session.user.id;

  // check if entry already exists for date
  connection.query(`SELECT * FROM entries WHERE date="${date}" AND user_id="${user_id}"`, (err, result) => {
    if (err) {
      res.redirect('/error');
    } else {
      const entry = Object.assign({}, req.body, { user_id, date });
      if (result.length) {
        const { id } = result[0];
        connection.query(`UPDATE entries SET ? WHERE id="${id}"`, entry, (err, result) => {
          if (err) {
            res.redirect('/error');
          } else {
            next();
          }
        });
      } else {
        connection.query('INSERT INTO entries SET ?', entry, (err, result) => {
          if (err) {
            res.redirect('/error');
          } else {
            next();
          }
        });
      }
    }
  });
});

app.get('/journal', (req, res) => {
  const today = moment().format('YYYY-MM-DD');
  res.redirect(`/journal/${today}`);
});

app.get('/journal/:date', (req, res, next) => {
  console.log(req.session);
  if (!req.session.passport || !req.session.passport.user) {
    res.redirect('/login');
  } else {
    next();
  }
});

app.post('/journal/:date', (req, res, next) => {
  console.log(req.session);
  if (req.session.passport && req.session.passport.user) {
    const { date } = req.params;
    const user_id = req.session.passport.user.id;

    // connection.query(`SELECT * FROM entries WHERE date="${date}" AND user_id="${user_id}"`, (err, result) => {
    //   if (err) {
    //     res.json(400, {});
    //   } else if (result.length) {
    //     res.locals.entry = result[0];
    //     delete result[0].id;
    //     delete result[0].user_id;
    //     delete result[0].updated;
    //     res.json(result[0]);
    //     next();
    //   } else {
    //     res.json({});
    //     next();
    //   }
    // });
    res.json({});
  } else {
    res.json({});
    next();
  }
});

//
// Register server-side rendering middleware
// -----------------------------------------------------------------------------
app.get('*', async (req, res, next) => {
  try {
    const css = new Set();

    // Global (context) variables that can be easily accessed from any React component
    // https://facebook.github.io/react/docs/context.html
    const context = {
      // Enables critical path CSS rendering
      // https://github.com/kriasoft/isomorphic-style-loader
      insertCss: (...styles) => {
        // eslint-disable-next-line no-underscore-dangle
        styles.forEach(style => css.add(style._getCss()));
      },
    };

    const route = await UniversalRouter.resolve(routes, {
      path: req.path,
      query: Object.assign({}, req.query, req.params, res.locals),
    });

    if (route.redirect) {
      res.redirect(route.status || 302, route.redirect);
      return;
    }

    const data = { ...route };
    data.children = ReactDOM.renderToString(<App context={context}>{route.component}</App>);
    data.style = [...css].join('');
    data.script = assets.main.js;
    data.chunk = assets[route.chunk] && assets[route.chunk].js;
    const html = ReactDOM.renderToStaticMarkup(<Html {...data} />);

    res.status(route.status || 200);
    res.send(`<!doctype html>${html}`);
  } catch (err) {
    next(err);
  }
});

//
// Error handling
// -----------------------------------------------------------------------------
const pe = new PrettyError();
pe.skipNodeFiles();
pe.skipPackage('express');

app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  console.log(pe.render(err)); // eslint-disable-line no-console
  const html = ReactDOM.renderToStaticMarkup(
    <Html
      title="Internal Server Error"
      description={err.message}
      style={errorPageStyle._getCss()} // eslint-disable-line no-underscore-dangle
    >
      {ReactDOM.renderToString(<ErrorPageWithoutStyle error={err} />)}
    </Html>
  );
  res.status(err.status || 500);
  res.send(`<!doctype html>${html}`);
});

//
// Launch the server
// -----------------------------------------------------------------------------
/* eslint-disable no-console */
models.sync().catch(err => console.error(err.stack)).then(() => {
  app.listen(port, () => {
    console.log(`The server is running at http://localhost:${port}/`);
  });
});
/* eslint-enable no-console */
