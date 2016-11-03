/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { connect } from 'react-redux';
import Layout from '../../components/Layout';
import MorningRoutine from '../../components/MorningRoutine';
import DateCalendar from '../../components/DateCalendar';
import s from './Home.css';
import { setValues } from '../../actions/journal-actions';

function Home({ date, dailyQuote, setValues }) {
  const { quote, author } = dailyQuote;

  return (
    <Layout header="fiveMinuteJournal">
      <div className={s.root}>
        <div className={s.container}>
          <DateCalendar date={date} />
          <div className={s.quoteContainer}>
            <div className={s.quote}>{quote}</div>
            <div className={s.author}>{author.toUpperCase()}</div>
          </div>
          <MorningRoutine dailyQuote={dailyQuote} onInputChange={setValues} />
        </div>
      </div>
    </Layout>
  );
}

Home.propTypes = {
  date: PropTypes.object.isRequired,
  dailyQuote: PropTypes.object.isRequired,
  setValues: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {};
}

function actions(dispatch) {
  return {
    setValues: (key, value) => dispatch(setValues(key, value)),
  };
}

export default connect(mapStateToProps, actions)(withStyles(s)(Home));
