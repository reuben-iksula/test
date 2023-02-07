import React, { Component } from 'react'
import Input from './Input'

class RefParent extends Component {
    constructor(props) {
      super(props)
      this.componentRef=React.createRef();  
    }
       
  render() {
    return (
      <div>
        <Input ref={this.componentRef}/>
       <button onClick={this.componentRef.focusInput}>Focus</button>
      </div>
    )
  }
}

export default RefParent