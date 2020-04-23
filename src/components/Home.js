import React from 'react';
import {
  Navbar, Button,
  Card, Form, Nav, FormControl, Carousel
} from 'react-bootstrap';
import './Home.css'
import firebase from 'firebase/app';



const Home = (props) => {
  return (
    <div className="App2">
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
            {firebase.auth().currentUser.email === "twoherohon1@gmail.com" ?
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
            <h3 style={{ color: "black" }}>This shop sale medicine</h3>
            <p style={{ color: "black" }}>All medicine in shop</p>
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
            <h3 style={{ color: "black" }}>Pharmacy</h3>
            <p style={{ color: "black" }}>If want to buy ciick Store</p>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
      <h1 className="App">อัพเดตข่าวสาร</h1>
      <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <Card style={{ width: '50rem' }}>
          <Card.Img variant="top" src="https://image.bangkokbiznews.com/kt/media/image/news/2020/03/10/869973/750x422_869973_1583811858.png"

          />
          <Card.Body>
            <Card.Title>COVID-19</Card.Title>
            <Card.Text>
              ก่อนอื่นต้องทำความเข้าใจว่าไวรัสโคโรนา (Cov) คือ ไวรัสที่มีเครือข่ายขนาดใหญ่สามารถพบได้ทั้งในคนสัตว์
              โดยไวรัสโคโรนาเป็นสาเหตุของความเจ็บป่วยหลากหลายระดับตั้งแต่ อาการหวัดธรรมดาจนไปถึงโรคระบบทางเดินหายใจ ซึ่งเกี่ยวข้องกับหลายโรคร้ายแรงอย่าง
              MERS และ SARS ส่วนไวรัสโคโรนาในปัจจุบัน คือ โรค COVID-19 โดย คำว่า COVID-19 มีที่มาดังนี้ Co มาจากคำว่า Corona, VI มาจากคำว่า Virus ส่วน
              D มาจาก Disease ซึ่งแปลว่าโรค ส่วน 19 คือ ปี 2019 สำหรับผู้ป่วยจะมีอาการเกี่ยวกับระบบทางเดินหายใจเป็นหลัก
              ซึ่งระดับความรุนแรงคล้ายกันกับโรคทางเดินหายใจทั้งโรค MERS และ SARS
    </Card.Text>

          </Card.Body>
        </Card>
      </div>

      {/* 
      <a href="https://www.bangkokbiznews.com/news/detail/869973">
        <img src="https://image.bangkokbiznews.com/kt/media/image/news/2020/03/10/869973/750x422_869973_1583811858.png" className="App1"></img>
      </a>
      <h2 className="App">COVID-19</h2>
      <p>
        ก่อนอื่นต้องทำความเข้าใจว่าไวรัสโคโรนา (Cov) คือ ไวรัสที่มีเครือข่ายขนาดใหญ่สามารถพบได้ทั้งในคนสัตว์
        โดยไวรัสโคโรนาเป็นสาเหตุของความเจ็บป่วยหลากหลายระดับตั้งแต่ อาการหวัดธรรมดาจนไปถึงโรคระบบทางเดินหายใจ ซึ่งเกี่ยวข้องกับหลายโรคร้ายแรงอย่าง
        MERS และ SARS ส่วนไวรัสโคโรนาในปัจจุบัน คือ โรค COVID-19 โดย คำว่า COVID-19 มีที่มาดังนี้ Co มาจากคำว่า Corona, VI มาจากคำว่า Virus ส่วน
        D มาจาก Disease ซึ่งแปลว่าโรค ส่วน 19 คือ ปี 2019 สำหรับผู้ป่วยจะมีอาการเกี่ยวกับระบบทางเดินหายใจเป็นหลัก
        ซึ่งระดับความรุนแรงคล้ายกันกับโรคทางเดินหายใจทั้งโรค MERS และ SARS
      </p> */}
    </div>
  )
}
export default Home