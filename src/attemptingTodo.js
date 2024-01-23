import React, { useState } from 'react'
import './attemptingTodo.css'


function AttemptingTodo() {

  const [title, setTitle] = useState('')
  const [description, setdescription] = useState('')
  const [mainTask, setMainTask] = useState([])



  //we had taken an form 
  const submitHandler = (event) => {
    event.preventDefault()
    setMainTask([...mainTask,{ title, description }])
    setTitle('')
    setdescription('')
      
    //  const deleteHandler = (iterate) => {
    //    let copytask  = [...mainTask]
    //    copytask.splice(iterate,1)
    //    setMainTask(copytask)
    //  }

  }

  let render = mainTask.map((tsk,iterate) => {
    return (
       <div className='render' key={iterate}>
      <h2>{"title : "+tsk.title}</h2>
      <p>{"Details : "+tsk.description}</p>
      {/* <button onClick={()=>{
        setMainTask()
      }}>DELETE</button>
      */}
    </div>
    )
  })

  return (
    <>
      <h1 id='designingHeading'>TODO LIST</h1>
      <form className='designingForm' onSubmit={submitHandler}>

        {/* creation of the title */}
        <label>TITLE</label>
        <input
          value={title}
          onChange={(event1) => { setTitle(event1.target.value) }}
          className='designingInput1'
          placeholder='enter your title'
          type='text'>
        </input>

        {/* creation of the description */}
        <label>DESCRIPTION</label>
        <input className='designingInput2'
          value={description}
          onChange={(event2) => { setdescription(event2.target.value) }}
          placeholder='enter your description'
          type='text'>
        </input>
        <button className='designingButton'>ADD</button>

      </form><br/><br/>

      <div className='designingDisplay'>{render}</div>
    </>
  )
}

export default AttemptingTodo