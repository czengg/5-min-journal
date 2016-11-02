import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './FiveMinuteJournalHeader.css';

function Header() {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <div className={s.banner}>
          <h1 className={s.bannerTitle}>The Five-Minute Journal</h1>
        </div>
      </div>
    </div>
  );
}

export default withStyles(s)(Header);
