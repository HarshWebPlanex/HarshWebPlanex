// src/redux/rootReducer.js
import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    counter: counterReducer,
    userData: userReducer,
});

export default rootReducer;
