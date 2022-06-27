import React, { Component } from 'react'

 class EventBind extends Component {
    
    constructor(props) {
      super(props)
    
      this.state = {
            message:'Hello'
      }
      this.ChangeMessage=this.ChangeMessage.bind(this);
    }
    

    ChangeMessage()
    {
        this.setState({
            message:'Good Bye !'
        })
    }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
          {/* <button onClick={this.ChangeMessage.bind(this)}>Click Me !</button> */}
          {/* <button onClick={()=>this.ChangeMessage()}>Click Me !</button> */}
          <button onClick={this.ChangeMessage}>Click Me !</button>


      </div>
    )
  }
}

export default EventBind
