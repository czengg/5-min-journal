import * as types from '../actions/action-types';

export default function journal(state = {}, action) {
  switch (action.type) {
    case types.SET_VALUES:
      console.log(state);
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}
