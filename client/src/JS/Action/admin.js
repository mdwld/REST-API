import axios from "axios"
import { LOAD_ADMIN, LOGIN_ADMIN, FAIL_ADMIN, CURRENT_ADMIN, LOGOUT_ADMIN, LOAD_USERS, GET_ALLUSERS } from "../ActionType/admin"





export const loginAdmin = (admin) => async (req,res) => {
    dispatch({type :LOAD_ADMIN})
    try {
        let result = await axios.post('/api/admin/loginAdmin',admin)
        dispatch({type:LOGIN_ADMIN, payload :result.data})
    } catch (error) {
        dispatch({type:FAIL_ADMIN , payload : error.response})
    }
};

export const currentAdmin = () => async(req,res)=>{
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
        dimatch({type:FAIL_ADMIN , payload : error.response})
    }
}; 

export const logoutAdmin = () => async(req,res) => {
    dipatch({type: LOGOUT_ADMIN})
};

export const getAllUsers = () => async(req,res) => {
    dispatch({type:LOAD_USERS})
    try {
        const result = await axios.get('/api/admin/users');
        dispatch({type:GET_ALLUSERS, payload : result.data})//.listUsers
    } catch (error) {
        console.log(error)
    }
}