import React from 'react'
import { Navbar, Button, Form, Nav, FormControl,Alert, } from 'react-bootstrap';
import './Editadmin'

const Editadmin = (props) => {
  return (
    <div className="App" style={{backgroundColor:"#CC0033"}}>
      <Navbar bg="light" expand="lg">
        <Navbar fixed="top" />
        <Navbar.Brand>
          <img src="https://i.pinimg.com/originals/79/5f/a2/795fa2a19893756633d929cfc218e0e5.png" width="150" height="70"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link
              onClick={() => props.history.push('/home')}>
              ReturnHome
              </Nav.Link>
            <Nav.Link
              onClick={() => props.history.push('/editcargo')}
            >EditCargo
            </Nav.Link>
            <Nav.Link
              onClick={() => props.history.push('/editsick')}
            >EditSick
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
      <h1 >This is Admin Mode </h1>
      <h2>Can Modified Database in this website</h2>
    </div>
  )
}
export default Editadmin