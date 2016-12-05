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
import routes from './routes';
import assets from './assets'; // eslint-disable-line import/no-unresolved
import { port, host, auth, databaseUrl } from './config';

const app = express();
const journalUrl = `${databaseUrl}/fiveminutejournal`;

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
    callbackURL: `${host}/login/facebook/return`,
  },
  (accessToken, refreshToken, profile, cb) => {
    cb(null, profile);
  })
);

passport.serializeUser((user, done) => {
  console.log('serial', user);
  done(null, user.id);
});

passport.deserializeUser((user, done) => {
  console.log('deserial', user);
  done(null, user);
});

app.get('/login/facebook', passport.authenticate('facebook'));

const redirects = { successRedirect: '/journal', failureRedirect: '/login' };
app.get('/login/facebook/return', passport.authenticate('facebook', redirects));

app.get('/register', (req, res) => {
  res.redirect('/login');
});

//
// Database connection
// -----------------------------------------------------------------------------
app.post('/save/:date', (req, res, next) => {
  const { date } = req.params;
  const user_id = req.session.passport && req.session.passport.user;

  // check if entry already exists for date
  MongoClient.connect(journalUrl, (err, db) => {
    if (err || !user_id) {
      res.redirect('/error');
    }
    console.log('Connected correctly to server');

    const collection = db.collection('journals');
    const entry = Object.assign({}, req.body);

    // find journal entry
    collection.findOneAndUpdate(
      { date, user_id },
      { $set: { entry } },
      { upsert: true },
      (error, result) => {
        if (error) {
          res.redirect('/error');
        }

        console.log(result);

        next();
      }
    );
  });
});

app.post('/quote', (req, res, next) => {
  const user_id = req.session.passport && req.session.passport.user;

  MongoClient.connect(journalUrl, (err, db) => {
    if (err) {
      console.log(err);
      res.redirect('/error');
    }
    console.log('Connected correctly to server');

    const collection = db.collection('quotes');
    const entry = Object.assign({}, req.body);

    // find journal entry
    collection.findOneAndUpdate(
      entry,
      { $set: entry },
      { upsert: true },
      (error, result) => {
        if (error) {
          res.redirect('/error');
        }

        res.redirect('/quote');

        next();
      }
    );
  });
});

app.get('/journal', (req, res) => {
  const today = moment().format('YYYY-MM-DD');
  res.redirect(`/journal/${today}`);
});

app.get('/journal/:date', (req, res, next) => {
  if (!req.session.passport || !req.session.passport.user) {
    res.redirect('/login');
  } else {
    next();
  }
});

app.post('/journal/:date', (req, res, next) => {
  if (req.session.passport && req.session.passport.user) {
    const { date } = req.params;
    const user_id = req.session.passport.user;

    MongoClient.connect(journalUrl, (err, db) => {
      if (err) {
        res.json(400, {});
      }
      console.log('Connected correctly to server');

      const collection = db.collection('journals');
      db.command({ count: 'quotes' }, (err, count) => {
        db.collection('quotes').aggregate( [ { $sample: {size: 1} } ], (err, quotes) => {
          if (err) {
            res.json(400, {});
          }

          // find journal entry
          collection.findOne({ date, user_id }, (err, result) => {
            if (err) {
              res.json(400, {});
            }

            res.json({
              entry: (result && result.entry) || {},
              quote: quotes[0],
            });
            db.close();
            next();
          });
        });
      });
    });
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

app.listen(port, () => {
  console.log(`The server is running at http://localhost:${port}/`);
});

/* eslint-enable no-console */
