// importation 

import { FAIL_UPLOAD, LOAD_UPLOAD, ONE_UPLOAD, SUCC_UPLOAD } from "../ActionType/upload"



// initialState
const initialState = {
    uploads:null,
    loadUpload: false,
    errors:[],
    isAuth: false,
    userToGet : {},
}

//Pure function 
const photoReducer = (state=initialState, {type, payload}) => {
    switch (type) {
        case LOAD_UPLOAD:
            return {...state, loadUpload:true};
            case SUCC_UPLOAD:
                return {...state, uploads: payload.users, isAuth:true, loadUpload:false};
                case ONE_UPLOAD:
                    return {...state, userToGet:payload.userToGet, loadUpload:false, isAuth: true};
                    case FAIL_UPLOAD:
                        return {...state, uploads:null, isAuth: false, loadUpload: false, errors:[]};
            
           
    
        default:
            return state;
    }
};

export default photoReducer;