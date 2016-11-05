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
import fetch from 'node-fetch';
import Journal from './Journal';
import { host } from '../../config';

export default {

  path: '/journal/:date',

  async action(route, params) {
    const date = moment(params.date);
    const dailyQuote = {
      quote: 'Anyone who has a why to live can bear almost any what.',
      author: 'Nietzche',
    };

    const onSave = (entryDate, body) => {
      const path = 'http://localhost:3001';
      fetch(`${path}/save/${entryDate}`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
      });
    };

    return {
      component: <Journal date={date} dailyQuote={dailyQuote} onSave={onSave} />,
    };
  },

};
