import React from 'react'
import {Navbar,Nav,NavDropdown , Form, Container , Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../JS/Action/user';
const NavBar = () => {
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const admin =useSelector((State) => State.adminReducer.admin);
  const isAuthAdmin = useSelector((State) => State.adminReducer.isAuthAdmin);
  
  const dispatch = useDispatch();
  return (
    <div>
         <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">F-LAMBDA</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            {
              isAuth ? ( <Nav.Link href="/"><button onClick={()=>dispatch(logout())}>logout</button></Nav.Link>) : 
              (<div>
            <Nav.Link href="/products">Products</Nav.Link>
            <Nav.Link href="/add">Add</Nav.Link>
              </div>)
            }
            
           
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
           
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
            <Nav.Link href="/login">Login</Nav.Link>
            <p>/</p>
            <Nav.Link href="/register">Register</Nav.Link>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavBar