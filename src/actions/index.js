import ACTION_TYPES from '../constants/actionTypes'

export function setInitiState(payload) {
    return { type: ACTION_TYPES.INITIAL_STATE.SET_INITIAL_STATE, payload }
  };

export function setTokenState(payload) {
    return { type: ACTION_TYPES.APP_CONFIG_DATA.SET_TOKEN, data:payload }
};

export function getQuestuins(payload) {
    return { type: ACTION_TYPES.QUESTION_DATA.SET_QUESTION_LIST, data:payload }
};

export function setStudentLoginData(payload){
    console.log("setStudentLoginData",payload);
    return { type: ACTION_TYPES.STUDENT_DATA.SET_STUDENT_LOGIN_DATA, data:payload }
}