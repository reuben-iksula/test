import React, { Component } from 'react'

class ClassCounter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         counter:0
      }
    }
    handleIncrement=()=>{
        this.setState({
            counter:this.state.counter+1
        })
    }
    handleDecrement=()=>{
        this.setState({
            counter:this.state.counter-1
        })
    }
    render() {
    return (
        <>
            <button onClick={this.handleIncrement}>+</button>
            <div>ClassCounter - {this.state.counter}</div>
            <button onClick={this.handleDecrement}>-</button>
        </>
    )
  }
}

export default ClassCounter