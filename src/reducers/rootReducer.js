import {combineReducers} from 'redux';
import configReducer from './configReducer';
import questionReducer  from './questionReducer'
import studentLoginReducer from './studentLoginReducer';


const rootReducer = combineReducers({
    app_config: configReducer,
    examPaper: questionReducer,
    login: studentLoginReducer
});

export default rootReducer;