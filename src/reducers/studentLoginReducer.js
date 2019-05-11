import ACTION_TYPES from '../constants/actionTypes';

export default function studentReducer(state = {}, action = undefined) {
    switch (action.type) {
        case ACTION_TYPES.STUDENT_DATA.SET_STUDENT_LOGIN_DATA:
            return Object.assign({}, state, action.data);
        default:
            return state;
    }
}