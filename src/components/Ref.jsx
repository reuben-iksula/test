import React, { Component } from 'react'
class Ref extends Component {
   
  constructor(props) {
    super(props)
    this.inputRef=React.createRef()
}

focus=()=>{
  this.inputRef.current.focus()
}
  render() {
    return (
      <div>
         <input type="text" ref={this.inputRef} />
       <button onClick={this.focus}>Focus</button>
      </div>
    )
  }
}

export default Ref