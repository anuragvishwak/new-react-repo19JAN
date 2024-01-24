
import React, { useEffect, useState ,useRef} from 'react'

function UsinguseState() {
    const [initial, setinitial] = useState(0)
    const [count, setcount] = useState(0)

const refer = useRef()
console.log(refer);

  useEffect(()=>{setcount(count+1)},[initial])
  return (
    <div>
        <button onClick={()=>{setinitial(initial+1)}}>CLICK TO INCREASE</button>
        {initial}
        {count}
        <input ref={refer}></input>
        <button onClick={()=>refer.current.focus()}>click to focus</button>
    </div>
  )
}

export default UsinguseState