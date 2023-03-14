// importation 

import { FAIL_PRODUCT, LOAD_PRODUCT, ONE_PRODUCT, REVIEW_PRODUCT, SUCC_PRODUCT } from "../ActionType/product"


// initialState 
const initialState = {
    listProduct:[], // the 'listProduct' syntax is the same as in get routes in database 
    errors : null, 
    load: false, 
    isAuth:false,
    productToGet : {}, // productToGet syntax is the same in the router DB
    productView :[],
}

//Pure function
const productReducer = (state=initialState , {type,payload}) => {
    switch (type) {

case LOAD_PRODUCT: 
return {...state, load: true};

case SUCC_PRODUCT: 
return {...state, load : false , isAuth:false,listProduct: payload.listProduct};

case ONE_PRODUCT: 
return {...state, load : false , isAuth:false,productToGet : payload.productToGet};
//in the payload take the productToGet of the DB (see routes in DB )

case REVIEW_PRODUCT:
return {...state, load:false, isAuth:true, productView : payload.productView};

case FAIL_PRODUCT: 
return {...state, load: false, isAuth:false, errors : payload};

        default:
            return state;
    }
};

export default productReducer; 