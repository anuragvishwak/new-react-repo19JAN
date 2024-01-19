
import React, { useEffect, useState } from 'react'

function UsinguseState() {
    const [initial, setinitial] = useState(0)
    const [count, setcount] = useState(0)

  useEffect(()=>{setcount(count+1)},[initial])
  return (
    <div>
        <button onClick={()=>{setinitial(initial+1)}}>CLICK TO INCREASE</button>
        {initial}
        {count}
    </div>
  )
}

export default UsinguseState