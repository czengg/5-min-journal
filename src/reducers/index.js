import { combineReducers } from 'redux';

import journalReducers from './journal-reducers';

const appReducer = combineReducers({
  journal: journalReducers,
});

export default appReducer;
