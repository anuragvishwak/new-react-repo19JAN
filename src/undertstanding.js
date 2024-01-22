import { useState } from "react"


function PerformingReactHooks(){
  
const [count, setcount] = useState(0);

function reducing(){
   return setcount(count+1)
}

return (
   <>
   <button onClick={reducing}>click here to increase</button>
   </>
)
}
export default PerformingReactHooks
