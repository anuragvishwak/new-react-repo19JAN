import React from 'react'
import { useState } from 'react';
import axios from 'axios';

function AnotherAxios() {
    const data = {name: '', lastname: ''};
    const [userData, setUserData] = useState(data)
  
    const handleData = (e)=> {
    
    }

    

return (
  <div>
      <h1>USING THE AXIOS POST METHOD</h1>
      <label>FIRST NAME = </label>
        <input onChange={handleData} value={userData.name} name='fname' type='text'></input>
        <button>submit</button><br/><br/>
        <label>LAST NAME = </label>
        <input onChange={handleData} value={userData.lastname} name='lastname' type='text'></input>
        <button>submit</button>
  </div>
)
}
   
  

export default AnotherAxios

