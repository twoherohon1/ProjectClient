import React, { useState, useEffect } from 'react';
import './Store.css';
import { firestore } from '../index'
import Task from './Task'

function App() {

  const [tasks, setTask] = useState([])
  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  useEffect(() => {
    retrivData()
  }, [])
  const retrivData = () => {
    firestore.collection("tasks").onSnapshot((snapshot) => {
      let myTask = snapshot.docs.map(d => {
        const { id, image, name } = d.data()
        return { id, image, name }
      })
      setTask(myTask)
    })
  }
  const deleteTask = (id) => {
    firestore.collection("tasks").doc(id + '').delete()
  }
  const editTask = (id) => {
    firestore.collection("tasks").doc(id + '').set({ id,image, name })
  }
  const rederTask = () => {
    if (tasks && tasks.length)
      return tasks.map((task, index) => {
        return (
          <Task key={index} task={task} deleteTask={deleteTask} editTask={editTask} />
        )
      })
    else
      return <li>No Task</li>
  }
  const addTask = () => {
    let id = (tasks.length === 0) ? 1 : tasks[tasks.length - 1].id + 1
    firestore.collection("tasks").doc(id + '').set({ id,image, name })
  }
  return (
    <div>
      <h1>ToDo</h1>
      <input type="text" name="name" onChange={(e) => { setName(e.target.value) }} />
      <input type="text" image="image" onChange={(e) => { setImage(e.target.value) }} />
      <button onClick={addTask}>Submit</button>
      <ul style={{ display: 'flex', listStyle: 'none' }}>{rederTask()}</ul>
    </div>
    //css
  );
}

export default App;