// imort 
import {combineReducers} from 'redux';
import productReducer from './product';
import userReducer from './user';
import photoReducer from './upload';
import adminReducer from './admin';
import historiqueReducer from './historique';
// create routReducer

const rootReducer = combineReducers({productReducer, userReducer, photoReducer, adminReducer, historiqueReducer})

export default rootReducer;