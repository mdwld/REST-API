import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import {addProduct} from '../JS/Action/product'
import { useNavigate } from "react-router-dom";
//import {Link} from 'react-router-dom'
const Add = () => {
  const[newProduct, setNewProduct] = useState({name: "", description:"", link:"", profile_img:""});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [file, setFile] = useState(null) 

  const uploadImage = (e) => {
    setFile(e.target.files[0])
  }

  
  const handleChange = (e) => {
setNewProduct({...newProduct, [e.target.name]:e.target.value});
  };

  const handleAdd = (e) => {
    const form = new FormData(); 
    form.append("name", newProduct.name);
    form.append("description", newProduct.description);
    form.append("link", newProduct.link);
    form.append("profile_img", file);
    dispatch(addProduct(form));
    navigate('/products')
  }
 
// addProduct same syntax as the action in redux
  //const add = () => { dispatch(addProduct(newProduct)); } 

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
      <input type="file" onChange={uploadImage}/><button onClick={()=> handleAdd()}>upload</button> 
       
    </Form>
    </div>
  )
}

export default Add