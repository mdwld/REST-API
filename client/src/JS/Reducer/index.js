// imort 
import {combineReducers} from 'redux';
import productReducer from './product';


// create routReducer

const rootReducer = combineReducers({productReducer})

export default rootReducer;