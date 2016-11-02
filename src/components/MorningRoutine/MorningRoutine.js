import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './MorningRoutine.css';
import icon from './sun.png';

function MorningRoutine({ date }) {
  const dateString = date.format('MMMM D, YYYY');

  return (
    <div className={s.root}>
      <div className={s.container}>
        <div className={s.dateContainer}>
          <img className={s.icon} src={icon} />
          <div className={s.date}>{dateString}</div>
        </div>
      </div>
    </div>
  );
}

MorningRoutine.propTypes = {
  date: PropTypes.object.isRequired,
};

export default withStyles(s)(MorningRoutine);
