import React, { useState } from 'react';
import {Form, Button} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'; // make the page go the profile when its clicked
import {register} from '../JS/Action/user';
const Register = () => {
  const [newUser , setNewUser] = useState({});
  const dispatch = useDispatch();
  const handleChange = (e) =>   {
    setNewUser({...newUser, [e.target.name]:e.target.value});
    
  };

  const handleAdd = () => {
      
      dispatch(register(newUser)) //e.prevetnDefault ? the code bug with the e.preventDefault errors[Uncaught TypeError: Cannot read properties of undefined (reading 'preventDefault')]
  }
  return (
    <div>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" name="name" value={newUser.name} onChange={handleChange} />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="email" value={newUser.email} onChange={handleChange}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name="password" value={newUser.password} onChange={handleChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPhone">
        <Form.Label>Phone number</Form.Label>
        <Form.Control type="number" placeholder="Enter your phone number" name="phone" value={newUser.phone} onChange={handleChange}/>
        <Form.Text className="text-muted">
          We'll never share your Phone number with anyone else.
        </Form.Text>
      </Form.Group>
      <Link to='/profile'> 
      <Button variant="primary" type="submit" onClick={()=>handleAdd()}>
        Submit
      </Button>
      </Link>
    </Form>
    </div>
  )
}

export default Register;