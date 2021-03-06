import React, { useState, useEffect } from 'react';
import './Store.css';
import { firestore } from '../index'
import { Button, Card, Form, Navbar, Nav, FormControl } from 'react-bootstrap';

const Store = (props) => {

  const [tasks, setTask] = useState([])
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState('')
  const [detail, setDetail] = useState('')
  const [amount, setAmount] = useState('')

  useEffect(() => {
    retrivData()
  }, [])

  const retrivData = () => {
    firestore.collection("tasks").onSnapshot((snapshot) => {
      let myTask = snapshot.docs.map(d => {
        const { id, image, name, price,detail,amount } = d.data()
        return { id, image, name, price,detail,amount }
      })
      setTask(myTask)

    })
  }
  const deleteTask = (id) => {
    firestore.collection("tasks").doc(id + '').delete()
  }
  const editTask = (id) => {
    firestore.collection("tasks").doc(id + '').set({ id, image, name, price,detail,amount })
  }
  const rederTask = () => {
    if (tasks && tasks.length)
      return tasks.map((task, index) => {
        return (
          <>
            <Card style={{ width: '18rem', marginTop: 10 }}>
              <Card.Img variant="top" src={task.image} />
              <Card.Body>
                <Card.Title>Name : {task.name}</Card.Title>
                <Card.Text>
                  Price : {task.price}
                </Card.Text>
                <Card.Text>
                  Detail : {task.detail}
                </Card.Text>
                <Card.Text>
                  Amount : {task.amount} ชิ้น
                </Card.Text>
                <Button variant="danger" onClick={() => deleteTask(task.id)}>Delete</Button>
                <Button variant="warning" style={{ marginLeft: 10 }} onClick={() => editTask(task.id)}>Edit</Button>
              </Card.Body>
            </Card>


          </>
        )
      })
    else
      return <li>No Task</li>
  }
  const addTask = () => {
    let id = (tasks.length === 0) ? 1 : tasks[tasks.length - 1].id + 1
    firestore.collection("tasks").doc(id + '').set({ id, image, name, price, detail,amount })
    console.log(id)
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
      <div  style={{ display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center',backgroundColor:'#CC99CC' }}>
        <h1>Cargo</h1>
        <Form >
          <Form.Group controlId="formGroupName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Name" value={name}
              onChange={(e) => { setName(e.target.value) }}
              style={{ width: 300 }}
            />
          </Form.Group>
          <Form.Group controlId="formGroupImage">
            <Form.Label>Image URL</Form.Label>
            <Form.Control type="text"
              placeholder="Image URL"
              value={image}
              onChange={(e) => { setImage(e.target.value) }}
              style={{ width: 300 }}
            />
          </Form.Group>
          <Form.Group controlId="formGroupPrice">
            <Form.Label>Price</Form.Label>
            <Form.Control type="text"
              placeholder="Price" value={price}
              onChange={(e) => { setPrice(e.target.value) }}
              style={{ width: 300 }}
            />
          </Form.Group>
          <Form.Group controlId="formGroupDetail">
            <Form.Label>Detail</Form.Label>
            <Form.Control type="text"
              placeholder="Detail" value={detail}
              onChange={(e) => { setDetail(e.target.value) }}
              style={{ width: 300 }}
            />
          </Form.Group>
          <Form.Group controlId="formGroupDetail">
            <Form.Label>Amount</Form.Label>
            <Form.Control type="text"
              placeholder="Amount" value={amount}
              onChange={(e) => { setAmount(e.target.value) }}
              style={{ width: 300 }}
            />
          </Form.Group>
        </Form>
        <Button variant="success" style={{ margin: 5, alignContent: 'center' }} onClick={addTask}>Add</Button>
        <ul style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>{rederTask()}</ul>
      </div>
    </>
  );
}

export default Store;