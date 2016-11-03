import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './DateCalendar.css';
import icon from './calendar.png';

function DateCalendar({ date }) {
  const dateString = date.format('MMMM D, YYYY').toUpperCase();

  return (
    <div className={s.dateContainer}>
      <img src={icon} />
      <div className={s.date}>{dateString}</div>
    </div>
  );
}

DateCalendar.propTypes = {
  date: PropTypes.object.isRequired,
};

export default withStyles(s)(DateCalendar);
