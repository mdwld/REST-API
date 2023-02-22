// import 

import { CURRENT_USER, FAIL_USER, LOAD_USER, LOGOUT_USER, SUCC_USER } from "../ActionType/product";




//initialState 
const initialState = {
    users:null,
    loadUser: false,
    errors:[],
    isAuth: false,
   
};




//pure function 

const userReducer = (state=initialState, {type,payload}) => {
    switch (type) {
        case LOAD_USER:
            return {...state,loadUser: true};
         case SUCC_USER:
            localStorage.setItem('token', payload.token)// !! to give token to the payload
            return {...state, loadUser: false, users: payload.users, isAuth: true};
            //always veryfi that the users in the payload.users is the same as the route in DB
            case FAIL_USER:
                return {...state, loadUser: false, errors: payload};
                case CURRENT_USER:
                    return {...state, users: payload, loadUser: false, isAuth:true};
                        case LOGOUT_USER:
                            localStorage.removeItem("token")
                            return {...state, loadUser: false, users: null, isAuth: false, errors:[]};
           
    
        default:
        return state;
    }
}; 

export default userReducer;