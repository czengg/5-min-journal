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
import s from './Layout.css';
import FiveMinuteJournalHeader from '../FiveMinuteJournalHeader';

function Layout({ children, header }) {
  return (
    <div className={s.container}>
      {header === 'fiveMinuteJournal' && <FiveMinuteJournalHeader />}
      {React.Children.only(children)}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
  header: PropTypes.string
};

export default withStyles(s)(Layout);
