import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { getProducts } from '../JS/Action/product';
import ProductCard from './ProductCard';
const ProductList = () => {
    const listProducts = useSelector(state => state.productReducer.listProduct) 
    //listProduct same syntax as DB
    const dispatch = useDispatch()
    const load = useSelector(state => state.productReducer.load)
    useEffect(() => {
    dispatch(getProducts());
    }, [dispatch]) // [dispatch] to not let the loop goes to the infiny
    // in the map fonction the "_id" is because its saved like this in DB
  return (
    <div>
{load ? <h2>loading...</h2> : listProducts.map((el) =><ProductCard product={el} key={el._id}/>)} 

    </div>
  )
}

export default ProductList