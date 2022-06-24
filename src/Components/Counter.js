import React, { Component } from 'react'

class Counter extends Component {

     constructor()
     {
        super()
        this.state={
            count:0
        }
     }
     Increment()
     {
        // this.setState({
        //     count:this.state.count+1
        // },()=>{
        //     console.log("CallBack")
        // })

         this.setState((prevData)=>({
            count:prevData.count+1
         }))
     }

     IncrementFive()
     {
        this.Increment()
        this.Increment()
        this.Increment()
        this.Increment()
        this.Increment()

     }

  render() {
    return (
      <div>
         <h1>Count -{this.state.count}</h1> 
         <button onClick={()=>this.IncrementFive()}>Increment</button> 
      </div>
    )
  }
}

export default Counter
