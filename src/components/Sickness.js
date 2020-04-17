import React from 'react';
import { Navbar, Button, Form, Nav, FormControl } from 'react-bootstrap';

const Sickness= (props)=>{
    return(
        <>
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
              onClick={() => props.history.push('/store')}
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
          </Form>
        </Navbar.Collapse>
      </Navbar>
        <div>
            <h1>โรค : ไข้หวัด</h1>
            <h3>อาการ : ปวดหัว ตัวร้อน มีน้ำหมูก มีเสมหะ</h3>
            <h3>การจ่ายยา :<li>ยาแก้แพ้</li><li>ยาลดไข้</li><li>ยาฆ่าเชื้อ</li></h3>
            <p>ควรปรึกษาเภสัชก่อนเลือกซื้อ</p>
        </div>
        </>
    )
}
export default Sickness