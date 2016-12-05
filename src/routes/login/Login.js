/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Layout from '../../components/Layout';
import s from './Login.css';

function Login({ handleSubmit }) {
  return (
    <Layout header="fiveMinuteJournal">
      <div className={s.root}>
        <div className={s.container}>
          <a href='/login/facebook'>
            <h1 className={s.lead}>
              <span className={s.underline}>Sign In With Facebook</span> &rarr;
            </h1>
          </a>
        </div>
      </div>
    </Layout>
  );
}

Login.propTypes = {
  title: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default withStyles(s)(Login);
