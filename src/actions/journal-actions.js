import * as types from './action-types';

export function setValues(key, value) {
  const obj = {};
  obj[key] = value;

  return {
    type: types.SET_VALUES,
    payload: obj,
  };
}

export function showMorningRoutine() {
  return {
    type: types.SHOW_MORNING_ROUTINE,
  };
}

export function hideMorningRoutine() {
  return {
    type: types.HIDE_MORNING_ROUTINE,
  };
}

export function showEveningRoutine() {
  return {
    type: types.SHOW_EVENING_ROUTINE,
  };
}

export function hideEveningRoutine() {
  return {
    type: types.HIDE_EVENING_ROUTINE,
  };
}
