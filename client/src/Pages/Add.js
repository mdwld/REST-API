import React, { useState } from 'react'
import { Form , Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import {addProduct} from '../JS/Action/product'
import {Link} from 'react-router-dom'
const Add = () => {
  const[newProduct, setNewProduct] = useState({name: "", description:"", link:""});
  const dispatch = useDispatch();
  const handleChange = (e) => {
setNewProduct({...newProduct, [e.target.name]:e.target.value});
  };
// addProduct same syntax as the action in redux
  const add = () => {
    dispatch(addProduct(newProduct));
  }
  return (
    //"name" and "description" enter quotes in form control must be indentical in the way of syntax as shema 
    <div>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>New Product name</Form.Label>
        <Form.Control type="name" placeholder="Enter name" name="name" value={newProduct.name} onChange={handleChange}/> 

         <Form.Label>New Product description</Form.Label>
        <Form.Control type="name" placeholder="Enter description" name="description" value={newProduct.description} onChange={handleChange}/>

        <Form.Label>New Product link</Form.Label>
        <Form.Control type="name" placeholder="Enter description" name="link" value={newProduct.link} onChange={handleChange}/>

      </Form.Group>
      <Link to='/products'>
      <Button variant="primary" type="submit" onClick={()=>add()}>
        Submit
      </Button>
      </Link>      
    </Form>
    </div>
  )
}

export default Add