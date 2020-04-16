import React from 'react';
import './Task.css'

export default(props)=>{
    const {task,editTask,deleteTask} = props
    const {id,image,name,price} = task
    return(
        <li>
            <div className="id">{id}</div>
            <div className="name">{name}</div>
            <img src={image}></img>
            <h1>{price}</h1>
            
            
          <button className="red" onClick={()=>deleteTask(id)}>Delete</button>
          <button className="green" onClick={()=>editTask(id)}>Edit</button>
          </li>
    )
}