import React, { useEffect, useRef, useState } from 'react'

function FunctionalTimer() {
    const [timer, setTimer] = useState(0);
    const interval = useRef(null);
    useEffect(() => {
      interval.current=setInterval(()=>{
        setTimer((prevSecond)=>prevSecond+1);
      },1000)
    
      return () => {
        clearInterval(interval.current)
      }
    }, [])
    
  return (
    <div>
        FunctionalTimer - {timer}
        <button onClick={()=>clearInterval(interval.current)}>Stop</button>
     </div>
  )
}

export default FunctionalTimer