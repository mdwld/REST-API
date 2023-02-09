// import 

import { CURRENT_USER, FAIL_USER, LOAD_USER, LOGOUT_USER, SUCC_USER } from "../ActionType/product";




//initialState 
const initialState = {
    users:null,
    loadUser: false,
    errors:[],
    isAuth: false
};




//pure function 

const userReducer = (state=initialState, {type,payload}) => {
    switch (type) {
        case LOAD_USER:
            return {...state,loadUser: true};
         case SUCC_USER :
            return {...state, loadUser: false, users: payload.users, isAuth: true};
            case FAIL_USER:
                return {...state, loadUser: false, errors: payload};
                case CURRENT_USER:
                    return {...state, users: payload, loadUser: false, isAuth:true};
                    case LOGOUT_USER:
                        return {...state, loadUser: false, users: null, isAuth: false, errors:[]};
           
    
        default:
        return state;
    }
}