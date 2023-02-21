import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../JS/Action/user';
import {Form, Button} from 'react-bootstrap'; 
import {Link} from 'react-router-dom';

const Login = () => {
  const [user, setUser] = useState({});
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setUser({...user, [e.target.name]:e.target.value})
  };
  const handleEnter = () => {
    dispatch(login(user))
  }
  return (
    <div>
       <Form>
       <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter your email" name="email" value={user.email} onChange={handleChange}/>

        <Form.Label>password</Form.Label>
        <Form.Control type="password" placeholder="Enter your password" name="password" value={user.password} onChange={handleChange}/>

       

        <Link to='/profile'> 
      <Button variant="primary" type="submit" onClick={()=>handleEnter()}>
        Submit
      </Button>
      </Link>

       </Form>
    </div>
  )
}

export default Login