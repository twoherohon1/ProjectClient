import React from 'react';
import { Navbar, Button, Form, Nav, FormControl, Carousel } from 'react-bootstrap';
import './Home.css'
import firebase from 'firebase/app';



const Home = (props) => {
  return (
    <div>
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
            {firebase.auth().currentUser.email == "twoherohon1@gmail.com" ?
              <Nav.Link
                onClick={() => props.history.push('/admin')}
              >AdminEdit
          </Nav.Link> : <div></div>}
          </Form>
        </Navbar.Collapse>
      </Navbar>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/purple-welcome-church-flyer-template-3f80fcded207c8067465df6b0a3caf0e_screen.jpg?ts=1561468679"
            width="100%"
            height="400px"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Welcome</h3>
            <p>Welcome to Pharmacy</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.pngkey.com/png/detail/205-2050128_directive-on-compulsory-use-of-community-pharmacy-logo.png"
            width="100%"
            height="400px"
            alt="This shop sale medicine"
          />
          <Carousel.Caption>
            <h3 style={{color:"black"}}>This shop sale medicine</h3>
            <p style={{color:"black"}}>All medicine in shop</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://image.freepik.com/free-vector/medical-pharmacy-logo_7888-26.jpg"
            width="100%"
            height="400px"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 style={{color:"black"}}>Pharmacy</h3>
            <p style={{color:"black"}}>If want to buy ciick Store</p>
          </Carousel.Caption>
        </Carousel.Item>
        
      </Carousel>
    </div>
  )
}
export default Home