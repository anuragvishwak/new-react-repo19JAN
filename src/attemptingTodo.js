import React, { useState } from 'react'

function AttemptingTodo() {
const [activity, setActivity] = useState('')
const [listData, setlistData] = useState([])
function addActivity(){
  setlistData((listData)=>{
    const updatedlist = [...listData, activity]
    console.log(updatedlist)
    //so basically this snippet make the input field error.
    setActivity('');
    return updatedlist
  })
}

  return (
    <div className='container'>
      <h1>TODO LIST</h1>
      <input onChange={(e)=>setActivity(e.target.value)} value={activity} placeholder='add activity' type='text'></input>
      <button onClick={addActivity}>ADD</button>
      <h1>{listData!=[] && listData.map((data,key)=>{return (<p key = {key}>

        <div>{data}</div>
      </p> )})}</h1>
    </div>
  )
}

export default AttemptingTodo