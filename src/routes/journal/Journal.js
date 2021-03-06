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
import EveningRoutine from '../../components/EveningRoutine';
import DateCalendar from '../../components/DateCalendar';
import s from './Journal.css';
import {
  setValues,
  showMorningRoutine,
  hideMorningRoutine,
  showEveningRoutine,
  hideEveningRoutine,
} from '../../actions/journal-actions';

function Journal({
  date, dailyQuote, setValues, showMorningRoutine,
  hideMorningRoutine, showMorningContent, showEveningRoutine,
  hideEveningRoutine, showEveningContent, onSave, entry, data }) {
  const { quote, author } = dailyQuote;
  let defaultShowMorning;
  if (date.get('hour') < 12) {
    defaultShowMorning = true;
  } else {
    defaultShowMorning = false;
  }

  return (
    <Layout header="fiveMinuteJournal">
      <div className={s.root}>
        <div className={s.container}>
          <DateCalendar date={date} />
          <div className={s.quoteContainer}>
            <div className={s.quote}>{quote}</div>
            <div className={s.author}>{author.toUpperCase()}</div>
          </div>
          <MorningRoutine
            dailyQuote={dailyQuote}
            onInputChange={setValues}
            show={showMorningRoutine}
            hide={hideMorningRoutine}
            showContent={showMorningContent === undefined ? defaultShowMorning : showMorningContent}
            entry={data}
          />
          <EveningRoutine
            dailyQuote={dailyQuote}
            onInputChange={setValues}
            show={showEveningRoutine}
            hide={hideEveningRoutine}
            showContent={
              showEveningContent === undefined ? !defaultShowMorning : showEveningContent
            }
            entry={data}
          />
          <div className={s.inputContainer}>
            <button className={s.button} onClick={() => onSave(date.format('YYYY-MM-DD'), entry)} >
              Save &rarr;
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

Journal.propTypes = {
  date: PropTypes.object.isRequired,
  dailyQuote: PropTypes.object.isRequired,
  setValues: PropTypes.func.isRequired,
  showMorningRoutine: PropTypes.func.isRequired,
  hideMorningRoutine: PropTypes.func.isRequired,
  showMorningContent: PropTypes.bool,
  showEveningRoutine: PropTypes.func.isRequired,
  hideEveningRoutine: PropTypes.func.isRequired,
  showEveningContent: PropTypes.bool,
  onSave: PropTypes.func.isRequired,
  entry: PropTypes.object,
  data: PropTypes.object,
};

function mapStateToProps(state) {
  return {
    showMorningContent: state.journal.showMorningContent,
    showEveningContent: state.journal.showEveningContent,
    entry: state.journal.entry,
  };
}

function actions(dispatch) {
  return {
    setValues: (key, value) => dispatch(setValues(key, value)),
    showMorningRoutine: () => dispatch(showMorningRoutine()),
    hideMorningRoutine: () => dispatch(hideMorningRoutine()),
    showEveningRoutine: () => dispatch(showEveningRoutine()),
    hideEveningRoutine: () => dispatch(hideEveningRoutine()),
  };
}

export default connect(mapStateToProps, actions)(withStyles(s)(Journal));
