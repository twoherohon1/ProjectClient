import React from 'react';
import './Task.css'

export default(props)=>{
    const {task,editTask,deleteTask} = props
    const {id,image,name} = task
    return(
        <li>
            <div className="id">{id}</div>
            <img src={image}></img>
            <div className="name">{name}</div>
            
          <button className="red" onClick={()=>deleteTask(id)}>Delete</button>
          <button className="green" onClick={()=>editTask(id)}>Edit</button>
          </li>
    )
}