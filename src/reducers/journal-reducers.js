import * as types from '../actions/action-types';

const defaultState = {
  showMorningContent: undefined,
  showEveningContent: undefined,
};

export default function journal(state = defaultState, action) {
  switch (action.type) {
    case types.SET_VALUES:
      return Object.assign({}, state, action.payload);
    case types.SHOW_MORNING_ROUTINE:
      return Object.assign({}, state, { showMorningContent: true });
    case types.HIDE_MORNING_ROUTINE:
      return Object.assign({}, state, { showMorningContent: false });
    case types.SHOW_EVENING_ROUTINE:
      return Object.assign({}, state, { showEveningContent: true });
    case types.HIDE_EVENING_ROUTINE:
      return Object.assign({}, state, { showEveningContent: false });
    default:
      return state;
  }
}
