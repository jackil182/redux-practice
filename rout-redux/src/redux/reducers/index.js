import {combineReducers} from 'redux';
import news from './getNewsReducer';

const rootReducer = combineReducers({
    news,
})

export default rootReducer;