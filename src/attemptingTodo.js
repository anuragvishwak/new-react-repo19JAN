import React, { useState } from 'react'
import './attemptingTodo.css'
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function AttemptingTodo() {

  const [title, setTitle] = useState('')
  const [description, setdescription] = useState('')
  const [mainTask, setMainTask] = useState([])
  const [updateTask, setupdatTask] = useState(null)

  //we had taken an form 
  const submitHandler = (event) => {
    event.preventDefault()
     if(updateTask!== null){
      const updatedTasks = [...mainTask];
      updatedTasks[updateTask] = { title, description };
      setMainTask(updatedTasks);
      setupdatTask(null);
     }

     else{
      setMainTask( [...mainTask, { title, description }]);
    }
    
    setTitle('')
    setdescription('')   
  }

  function deleteHandler (iterate){
    let copytask = [...mainTask];
    copytask.splice(iterate, 1);
    setMainTask(copytask);
  }
    
  function updateHandler(iterate){
    setupdatTask(iterate);
    const finallyUpdatting = mainTask[iterate];
    setTitle(finallyUpdatting.title);
    setdescription(finallyUpdatting.description)};
  
  
     
      
    //so here we are creating an rendering function which basically renders the title and description, in rendering we are calling an mapping function which basically maps the title and description and also a key is assigned to the title which will identify the specific title with the description. 
  let render = mainTask.map((tsk,iterate) => {
    return (
       <div className='render' key={iterate}>
      <h2 className='designingDescription'>{"title : "+tsk.title}</h2>
      <div> 
        <p>Details</p>
        <p className='designingDescription'>
          {tsk.description}
        </p>
      </div>
      

     
      <button onClick={()=>{
        deleteHandler(iterate)
      }} className='designingDeleteButton'>  <MdDelete /></button>  

      <button onClick={()=>{
        updateHandler(iterate)
      }} className='designingUpdateButton'> <FaRegEdit /></button>
    </div>
    )
  })



        
  

  return (
    <>
      <h1 id='designingHeading'>TODO LIST</h1>
     <div className='container'>
     <form className='designingForm' onSubmit={submitHandler}>

{/* creation of the title */}
<label>TITLE:</label>
<input
  value={title}
  onChange={(event1) => { setTitle(event1.target.value) }}
  className='designingInput1'
  placeholder='enter your title'
  type='text'>
</input>

{/* creation of the description */}
<label>DESCRIPTION:</label>
<input className='designingInput2'
  value={description}
  onChange={(event2) => { setdescription(event2.target.value) }}
  placeholder='enter your description'
  type='text'>
</input>
<button className='designingButton'>{updateTask !== null ? 'UPDATE' : 'ADD'}</button>
</form><br/><br/>

<div className='designingDisplay'>{render}</div>
     </div>
    </>
  )
}

export default AttemptingTodo