import React, { Component } from 'react'

class ClassTimer extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         timer:0
      }
    }
    componentDidMount(){
        this.intervalId=setInterval(()=>{
            this.setState({
                timer:this.state.timer + 1
            })
        },1000)
    }
    componentWillUnmount(){
        clearInterval(this.intervalId)
    }
    render() {
    return (
      <div>
        ClassTimer: {this.state.timer}
        <button onClick={()=>clearInterval(this.intervalId)}>Stop</button>
      </div>
    )
  }
}

export default ClassTimer