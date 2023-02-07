import React from 'react'

const ChildComponent = ({fn}) => {
  return (
    <div><button onClick={()=>fn("a")}>Click</button></div>
  )
}

export default ChildComponent