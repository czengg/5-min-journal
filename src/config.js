/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/* eslint-disable max-len */

export const port = process.env.PORT || 80;
export const host = process.env.WEBSITE_HOSTNAME || 'http://journal.cindyzeng.com';

export const databaseUrl = process.env.DATABASE_URL || 'mongodb://journal.cindyzeng.com:27017';

export const analytics = {

  // https://analytics.google.com/
  google: {
    trackingId: process.env.GOOGLE_TRACKING_ID, // UA-XXXXX-X
  },

};


export const auth = {

  // https://developers.facebook.com/
  facebook: {
    id: process.env.FACEBOOK_APP_ID || '1788343081389727',
    secret: process.env.FACEBOOK_APP_SECRET || 'bd5073289fcd4a2accc23c5a24bd1e39',
  },

};
