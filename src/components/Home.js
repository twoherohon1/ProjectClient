import React from 'react';
import { Navbar, Button, Form, Nav, FormControl } from 'react-bootstrap';
import './Home.css'
import firebase from 'firebase/app';
import 'firebase/auth';
import '../config'

const Home = (props) => {
  return (
      <div>
      <Navbar bg="light" expand="lg">
        <Navbar fixed="top" />
        <Navbar.Brand>
        <img src="https://i.pinimg.com/originals/79/5f/a2/795fa2a19893756633d929cfc218e0e5.png" width="150"  height="70"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link
              onClick={() => props.history.push('/home')}>
              Home
              </Nav.Link>
            <Nav.Link
              onClick={() => props.history.push('/storeuser')}
            >Store
            </Nav.Link>
            <Nav.Link
              onClick={() => props.history.push('/sick')}
            >Sick
            </Nav.Link>
          </Nav>
          <Form inline>
            <Nav.Link
              onClick={() => props.history.push('/login')}
            >MyProfile 
            </Nav.Link>
            {firebase.auth().currentUser.email=="twoherohon1@gmail.com"?
            <Nav.Link
            onClick={() => props.history.push('/store')}
          >AdminEdit 
          </Nav.Link>:<div></div>}
          </Form>
        </Navbar.Collapse>
      </Navbar>
      </div>
  )
}
export default Home