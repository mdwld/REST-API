//importation 

const { SUCC_NOTIF, LOAD_NOTIF, FAIL_NOTIF } = require("../ActionType/historique")


//initialState 
const initialState = {
    listHistory :[],
    load : false,
    errors : null
}

//pure function 
const historiqueReducer = (state=initialState , {type , payload}) => {
    switch (type) {
        case LOAD_NOTIF:
            return {...state , load:true};
            case SUCC_NOTIF:
                return {...state, load :false ,listHistory : payload.listHistory};
                case FAIL_NOTIF:
                    return {...state, errors:payload, load:false};
          
    
        default:
            return state;
            
    }
}
export default historiqueReducer;