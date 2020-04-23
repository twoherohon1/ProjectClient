import React, { useState, useEffect } from 'react';
import './Store.css';
import { firestore } from '../index'
import { Button, Card, Form, Navbar, Nav, FormControl } from 'react-bootstrap';

const Store = (props) => {

  const [tasks1, setTasks1] = useState([])
  const [sickness, setSickness] = useState('')
  const [symptom, setSymptom] = useState('')
  const [dispensing, setDispensing] = useState('')
  const [warning, setWarning] = useState('')

  useEffect(() => {
    retrivData()
  }, [])

  const retrivData = () => {
    firestore.collection("tasks1").onSnapshot((snapshot) => {
      let myTask = snapshot.docs.map(d => {
        const { id, dispensing, sickness, symptom,warning } = d.data()
        return { id, dispensing, sickness, symptom,warning }
      })
      setTasks1(myTask)

    })
  }
  const rederTask = () => {
    if (tasks1 && tasks1.length)
      return tasks1.map((task, index) => {
        return (
          <>
            <Card style={{ width: '50rem', marginTop: 10}}>
              <Card.Body  style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}} >
                <Card.Title style={{ju:'center'}}> โรค : {task.sickness}</Card.Title>
                <Card.Text>
                  อาการ : {task.symptom}
                </Card.Text>
                <Card.Text>
                  อาการ : {task.dispensing}
                </Card.Text>
                <Card.Text>
                  คำเตือน : {task.warning}
                </Card.Text>
                <div  style={{display:'flex',flexDirection : 'row'}}>
                </div>
              
              </Card.Body>
            </Card>


          </>
        )
      })
    else
      return <li>No Task</li>
  }
  return (
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
          </Form>
        </Navbar.Collapse>
      </Navbar>
      <div style={{ display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center',backgroundColor:'#99FF99' }}>
        <h1>แนะนำยาที่ควรซื้อ</h1>
        <ul style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>{rederTask()}</ul>
      </div>
    </>
  );
}

export default Store;