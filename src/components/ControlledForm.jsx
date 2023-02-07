import React, { Component } from 'react'

class ControlledForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         input:""
      }
    }
    handleNameChange = (e)=>{
        this.setState({
            input:e.target.value
        })
    }
  render() {
    return (
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" value={this.state.input} onChange={this.handleNameChange} />
        {console.log(this.state.input)}
      </div>
    )
  }
}

export default ControlledForm