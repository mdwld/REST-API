// importation 

import { FAIL_PRODUCT, LOAD_PRODUCT, ONE_PRODUCT, SUCC_PRODUCT } from "../ActionType/product"


// initialState 
const initialState = {
    listProduct:[], // the 'listProduct' syntax is the same as in get routes in database 
    errors : null, 
    load: false, 
    productToGet : {}, // productToGet syntax is the same in the router DB
}

//Pure function
const productReducer = (state=initialState , {type,payload}) => {
    switch (type) {

case LOAD_PRODUCT: 
return {...state, load: true};

case SUCC_PRODUCT: 
return {...state, load : false , listProduct: payload.listProduct};

case ONE_PRODUCT: 
return {...state, load : false , productToGet : payload.productToGet};
//in the payload take the productToGet of the DB (see routes in DB )

case FAIL_PRODUCT: 
return {...state, load: false, errors : payload};

        default:
            return state;
    }
};

export default productReducer; 