import React from 'react'
import ChildComponent from './ChildComponent'

const ParentComponent = () => {
    function test(param){
        console.log("parent"+param);
    }
  return (
    <div><ChildComponent fn={test}/></div>
  )
}

export default ParentComponent