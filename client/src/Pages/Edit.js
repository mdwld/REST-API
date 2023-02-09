import React, {useEffect, useState} from 'react'
import {Form , Button} from 'react-bootstrap'
import {Link, useNavigate, useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { getOneProduct, editProduct } from '../JS/Action/product'
const Edit = () => {
  const dispatch = useDispatch();
  const [newProduct, setNewProduct] = useState({name: "", description:"", link:""})
  // we want to put the data in fiels of interest to edit
  const productToGetRx = useSelector ((state) =>state.productReducer.productToGet )
  const {id} = useParams();
  //it must be id not _id according to Action
  const navigate = useNavigate();
  const handleChange = (e) => {
    setNewProduct({...newProduct, [e.target.name]: e.target.value})
  }
  useEffect(() => {
    dispatch(getOneProduct(id))
  });

  const handleEdit = () => {
dispatch(editProduct(id,newProduct));
navigate(-1);
  }
  return (
    <div>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>New Product name</Form.Label>
        <Form.Control type="name" placeholder={`${productToGetRx.name}`} name="name" value={newProduct.name} onChange={handleChange}/> 

         <Form.Label>New Product description</Form.Label>
        <Form.Control type="name" placeholder={`${productToGetRx.name}`} name="description" value={newProduct.description} onChange={handleChange}/>

        <Form.Label>New Product link</Form.Label>
        <Form.Control type="name" placeholder={`${productToGetRx.link}`} name="link" value={newProduct.link} onChange={handleChange}/>

      </Form.Group>
      <Link to='/products'>
      <Button variant="primary" type="submit" onClick={()=>handleEdit()}>
        Submit
      </Button>
      </Link>      
    </Form>
    </div>
  )
}

export default Edit