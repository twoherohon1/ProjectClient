import React from 'react';
import { Navbar, Button, Form, Nav, FormControl } from 'react-bootstrap';
import './Home.css'
import firebase from 'firebase/app';



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
            onClick={() => props.history.push('/admin')}
          >AdminEdit 
          </Nav.Link>:<div></div>}
          </Form>
        </Navbar.Collapse>
      </Navbar>
      <img src="https://cdn4.vectorstock.com/i/1000x1000/56/08/pharmacy-banner-medicine-medical-supplies-vector-15075608.jpg" width="100%" height="400px"></img>
      </div>
  )
}
export default Home