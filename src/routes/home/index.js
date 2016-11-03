/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import moment from 'moment';
import Home from './Home';

export default {

  path: '/',

  async action() {
    const date = moment();
    const dailyQuote = {
      quote: 'Anyone who has a why to live can bear almost any what.',
      author: 'Nietzche',
    };

    return {
      component: <Home date={date} dailyQuote={dailyQuote} />,
    };
  },

};
