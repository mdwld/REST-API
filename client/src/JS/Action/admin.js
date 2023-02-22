import axios from "axios";
import { LOAD_ADMIN, LOGIN_ADMIN, FAIL_ADMIN, CURRENT_ADMIN, LOGOUT_ADMIN, LOAD_USERS, GET_ALLUSERS } from "../ActionType/admin";





export const loginAdmin = (admin) => async (dispatch) => {
    dispatch({type :LOAD_ADMIN})
    try {
        let result = await axios.post('/api/admin/loginAdmin',admin)
        dispatch({type:LOGIN_ADMIN, payload :result.data})
    } catch (error) {
        dispatch({type:FAIL_ADMIN , payload : error.response})
    }
};

export const currentAdmin = () => async(dispatch)=>{
    dispatch({type:LOAD_ADMIN})
    try {
        const config = {
            headers : {
                authorization : localStorage.getItem('token')
            }
        }
        let result = await axios.get('/api/admin/currentAdmin',config)
        dispatch({type: CURRENT_ADMIN, payload : result.data})
    } catch (error) {
        dispatch({type:FAIL_ADMIN , payload : error.response})
    }
}; 

export const logoutAdmin = () => async(dispatch) => {
    dispatch({type: LOGOUT_ADMIN})
};

export const getAllUsers = () => async(dispatch) => {
    dispatch({type:LOAD_USERS})
    try {
        const result = await axios.get('/api/admin/users');
        dispatch({type:GET_ALLUSERS, payload : result.data})//.listUsers why ? can be replaced in the adminReducer cos it must take the listUsers from the server (DB):)
    } catch (error) {
        console.log(error)
    }
}