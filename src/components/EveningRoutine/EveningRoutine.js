import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './EveningRoutine.css';
import Textarea from 'react-textarea-autosize';
import icon from './arrow.png';

function EveningRoutine({ onInputChange, show, hide, showContent }) {
  const happenedSample = [
    'I remembered to floss.',
    'A friend recommended a wonderful book for me.',
    'I saw a cute stranger at the cafe',
  ];
  const betterSample = [
    'I wake up right when the alarm goes off.',
    'I go to the gym in the morning.',
  ];

  return (
    <div className={s.root}>
      <button className={s.header} onClick={showContent ? hide : show}>
        <div className={s.headerTitle}>EVENING ROUTINE</div>
        <img className={s.icon} src={icon} style={{ transform: showContent ? 'rotate(180deg)' : 'rotate(0deg)' }} />
      </button>
      {showContent && <div className={s.container}>
        <div className={s.inputContainer}>
          <div className={s.inputTitle}>3 Amazing things that happened today...</div>
          <ol className={s.inputs}>
            {happenedSample.map((placeholder, index) =>
              <li className={s.input}  key={'happened' + index}>
                <Textarea
                  placeholder={placeholder}
                  minRows={1}
                  onChange={(e) => onInputChange('happened' + index, e.target.value)}
                />
              </li>
            )}
          </ol>
        </div>
        <div className={s.inputContainer}>
          <div className={s.inputTitle}>How could I have made today even better?</div>
          <ol className={s.inputs}>
            {betterSample.map((placeholder, index) =>
              <li className={s.input}  key={'better' + index}>
                <Textarea
                  placeholder={placeholder}
                  minRows={1}
                  onChange={(e) => onInputChange('better' + index, e.target.value)}
                />
              </li>
            )}
          </ol>
        </div>
      </div>}
    </div>
  );
}

EveningRoutine.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  show: PropTypes.func.isRequired,
  hide: PropTypes.func.isRequired,
  showContent: PropTypes.bool.isRequired,
};

export default withStyles(s)(EveningRoutine);
