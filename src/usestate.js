
import React, { useEffect, useState ,useRef} from 'react'

function UsinguseState() {
    const [initial, setinitial] = useState(0)
    const [count, setcount] = useState(0)

const ref = useRef()
console.log(ref);

  useEffect(()=>{setcount(count+1)},[initial])
  return (
    <div>
        <button onClick={()=>{setinitial(initial+1)}}>CLICK TO INCREASE</button>
        {initial}
        {count}
        <input ref={ref}></input>
        <button onClick={()=>ref.current.focus()}>click to focus</button>
    </div>
  )
}

export default UsinguseState