//importation 

const { LOAD_ADMIN, LOGIN_ADMIN, CURRENT_ADMIN, GET_ALLUSERS, FAIL_ADMIN, LOGOUT_ADMIN } = require("../ActionType/admin")



//initialState 
const initialState = {
admin:null, 
loadAdmin : false, 
errors : [], 
isAuthAdmin: false, 
listUsers : []
}



//pureFunction

const adminReducer = (State=initialState, {type,payload}) => {
    switch (type) {
        case LOAD_ADMIN:
            return {...State, loadAdmin:true};
            case LOGIN_ADMIN: //nael a fait user a la place de admin dans son backend mais au niveau de l'action il a mis admin donc peut etre que le admin de payload.admin est pris de celui de l'action!!!!!
                localStorage.setItem('token',payload.token)
                return{...State, admin: payload.admin, loadAdmin:false, isAuthAdmin:true}
                case CURRENT_ADMIN:
                    return {...State, admin: payload, loadAdmin:false, isAuthAdmin:true}
                    case GET_ALLUSERS:
                        return{...State, lisUsers:payload, loadAdmin:false, isAuthAdmin:true}
                        case LOGOUT_ADMIN:
                            localStorage.removeItem('token')
                            return {...State, admin:null, 
                                loadAdmin : false, 
                                errors : [], 
                                isAuthAdmin: false, 
                                listUsers : []}
                            case FAIL_ADMIN:
                                return{...State, loadAdmin: false, errors:payload}
           

    
        default:
            return State;
    }
}

export default adminReducer