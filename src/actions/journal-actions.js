import * as types from './action-types';

export function setValues(key, value) {
  const obj = {};
  obj[key] = value;

  return {
    type: types.SET_VALUES,
    payload: obj,
  };
}
