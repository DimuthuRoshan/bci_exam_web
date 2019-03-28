import ACTION_TYPES from '../constants/actionTypes'

export function setInitiState(payload) {
    return { type: ACTION_TYPES.INITIAL_STATE.SET_INITIAL_STATE, payload }
  };