import {combineReducers} from 'redux';
import configReducer from './configReducer';
import questionReducer  from './questionReducer'


const rootReducer = combineReducers({
    app_config: configReducer,
    examPaper: questionReducer
});

export default rootReducer;