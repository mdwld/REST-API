// importation 
import axios from "axios";
import { FAIL_NOTIF, LOAD_NOTIF, SUCC_NOTIF } from "../ActionType/historique"


//      

export const addHistory = (newHistory) => async(dispatch) => {
    dispatch({type : LOAD_NOTIF})
    try {
        await axios.post('/api/historique/addHistory', newHistory)
    } catch (error) {
        dispatch({type:FAIL_NOTIF , payload : error.response})
    }
};

export const getAllHistory = () => async(dispatch) => {
    dispatch({type:LOAD_NOTIF})
    try {
        let result = await axios.get('/api/historique/allHistory')
        dispatch({type:SUCC_NOTIF , payload:result.data})
    } catch (error) {
        dispatch({type:FAIL_NOTIF , payload:error.response})
    }
};