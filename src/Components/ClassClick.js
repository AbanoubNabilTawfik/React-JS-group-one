import React, { Component } from 'react'

 class ClassClick extends Component {
    ShowMsg()
    {
        console.log("Click from class component")
    }
  render() {
    return (
      <div>
          <button onClick={this.ShowMsg}>Click from class component</button>
      </div>
    )
  }
}

export default ClassClick
