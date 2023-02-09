// 1 importation 
import axios from 'axios';
import { FAIL_PRODUCT, LOAD_PRODUCT, ONE_PRODUCT, SUCC_PRODUCT } from "../ActionType/product"



// GET ALL products
export const getProducts = () => async (dispatch) => {
dispatch({type : LOAD_PRODUCT});
try {
    let result = await axios.get('/api/products/all') // the path is same as backend (see server.js and routes folder in backend)
    dispatch({type: SUCC_PRODUCT, payload: result.data});
} catch (error) {
    dispatch({type : FAIL_PRODUCT, payload : error.response});
}
}

//ADD PRODUCT 

export const addProduct = (newProduct) => async(dispatch) => {
    dispatch({type: LOAD_PRODUCT}); 
    try {
        await axios.post('/api/products/add', newProduct);
        dispatch(getProducts());
    } catch (error) {
        dispatch({type : FAIL_PRODUCT, payload: error.response});
    }
}

//DELETE PRODUCT 

export const deleteProduct = (id) => async (dispatch) => {
    try {
        await axios.delete(`/api/products/${id}`);
        dispatch(getProducts());
    } catch (error) {
        dispatch ({type: FAIL_PRODUCT , payload: error.response});
    }
}

//EDIT PRODUCT 

export const editProduct = (id, newProduct) => async (dispatch) => {
    try {
        await axios.put(`/api/products/${id}`, newProduct);
        dispatch(getProducts());
    } catch (error) {
        dispatch ({type: FAIL_PRODUCT , payload : error.response});
    }
}

//GET ONE PRODUCT
export const getOneProduct = (id) => async (dispatch) => {
    dispatch({type: LOAD_PRODUCT})
    try {
       let result = await axios.get(`/api/products/${id}`);
        dispatch({type: ONE_PRODUCT, payload: result.data});
    } catch (error) {
        dispatch({type: FAIL_PRODUCT , payloead: error.response})
    }
}