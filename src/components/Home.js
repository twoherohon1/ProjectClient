import React from 'react';
import { Navbar, Button, Form, Nav, FormControl } from 'react-bootstrap';
import './Home.css'

const Home = (props) => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar fixed="top" />
        <Navbar.Brand
          onClick={() => props.history.push('/home')}
        >Medicine</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link
              onClick={() => props.history.push('/home')}>
              Home
              </Nav.Link>
            <Nav.Link
              onClick={() => props.history.push('/store')}
            >Store
            </Nav.Link>
          </Nav>
          <Form inline>
            <Nav.Link
              onClick={() => props.history.push('/login')}
            >MyProfile
            </Nav.Link>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      <div>123</div>
    </>
  )
}
export default Home