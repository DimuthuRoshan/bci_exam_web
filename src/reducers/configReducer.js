import ACTION_TYPES from '../constants/actionTypes';

export default function configReducer(state = {}, action = undefined) {
    switch (action.type) {
        case ACTION_TYPES.APP_CONFIG_DATA.SET_TOKEN:
            return Object.assign({}, state, action.data);
        default:
            return state;
    }
}