// importtation 

import { FAIL_UPLOAD, LOAD_UPLOAD, SUCC_UPLOAD, ONE_UPLOAD } from "../ActionType/upload";
import axios from "axios";


// ....upload photo 
//cloudinary POST
// in catch error payload : error .response NOT error.response.data.errors !!!! why!!!!?
export const uploadImg = (form) => async (dispatch) => {
    dispatch({type : LOAD_UPLOAD})
    try {
        const config = {
            headers:{
                authorization : localStorage.getItem('token')
            }
        };
        let result = await axios.post('/api/users/uploadPhoto', form, config)
                                .then((result)=>console.log(result.data)); //result in the .then represent the result of the requet POST
        dispatch({type : SUCC_UPLOAD, payload: result.data})
        //dispatch({type:ONE_UPLOAD, payload: result.data.profile_img})
    } catch (error) {
        dispatch({type:FAIL_UPLOAD, payload: error.response})
    }
};

//Cloudinary GET
export const getOneUser = (id) => async (dispatch) => {
    dispatch({type: LOAD_UPLOAD})
    try {
        let result = await axios.get(`/api/users/${id}`)
        dispatch({ONE_UPLOAD, payload: result.data})
    } catch (error) {
        dispatch({FAIL_UPLOAD, payload: error.response.data.errors})
    }
};
