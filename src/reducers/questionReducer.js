import ACTION_TYPES from '../constants/actionTypes';

export default function questionReducer(state = {}, action = undefined) {
    switch (action.type) {
        case ACTION_TYPES.QUESTION_DATA.SET_QUESTION_LIST:
            return Object.assign({}, state, action.data);
        default:
            return state;
    }
}