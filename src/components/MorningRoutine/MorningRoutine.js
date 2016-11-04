import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './MorningRoutine.css';
import Textarea from 'react-textarea-autosize';
import icon from './arrow.png';

function MorningRoutine({ onInputChange, show, hide, showContent }) {
  const gratefulForSample = [
    'I\'m grateful for the warm bed that I sleep in.',
    'I\'m grateful for my body that is working in perfect harmony.',
    'I\'m grateful for the incredible firends in my life.',
  ];
  const todayGreatSample = [
    'Take extra time for myself before leaving work',
    'Give a thank you note to Mom',
    'Sleep before 10pm',
  ];
  const affirmationSample = 'I am confident and comfortable in my own skin and I live with passion and purpose';

  return (
    <div className={s.root}>
      <button className={s.header} onClick={showContent ? hide : show}>
        <div className={s.headerTitle}>MORNING ROUTINE</div>
        <img className={s.icon} src={icon} style={{ transform: showContent ? 'rotate(180deg)' : 'rotate(0deg)' }} />
      </button>
      {showContent && <div className={s.container}>
        <div className={s.inputContainer}>
          <div className={s.inputTitle}>I am grateful for...</div>
          <ol className={s.inputs}>
            {gratefulForSample.map((placeholder, index) =>
              <li className={s.input} key={'grateful' + index}>
                <Textarea
                  placeholder={placeholder}
                  minRows={1}
                  onChange={(e) => onInputChange('grateful' + index, e.target.value)}
                />
              </li>
            )}
          </ol>
        </div>
        <div className={s.inputContainer}>
          <div className={s.inputTitle}>What would make today great?</div>
          <ol className={s.inputs}>
            {todayGreatSample.map((placeholder, index) =>
              <li className={s.input} key={'great' + index}>
                <Textarea
                  placeholder={placeholder}
                  minRows={1}
                  onChange={(e) => onInputChange('great' + index, e.target.value)}
                />
              </li>
            )}
          </ol>
        </div>
        <div className={s.inputContainer}>
          <div className={s.inputTitle}>Daily affirmations. I am...</div>
          <div className={s.input}>
            <Textarea
              placeholder={affirmationSample}
              minRows={1}
              onChange={(e) => onInputChange('affirmation', e.target.value)}
            />
          </div>
        </div>
      </div>}
    </div>
  );
}

MorningRoutine.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  show: PropTypes.func.isRequired,
  hide: PropTypes.func.isRequired,
  showContent: PropTypes.bool.isRequired,
};

export default withStyles(s)(MorningRoutine);
