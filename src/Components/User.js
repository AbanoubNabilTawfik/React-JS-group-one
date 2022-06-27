import React, { Component } from 'react'

 class User extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
            isLoggedIn:false
       }
     }
     
  render() {
        // if(this.state.isLoggedIn)
        // {
        //     return (
        //         <div>
        //              <h1>Hello Abanoub</h1>
        //         </div>
        //       )
        // }
        // else
        // {
        //     return (
        //         <div>
        //           <h1>Hello Guest</h1>
        //         </div>
        //       )
        // }
        // let message="";
        // if(this.state.isLoggedIn)
        // {
        //     message=<div><h1>Hello Abanoub</h1></div>
        // }
        // else
        // {
        //     message=<div><h1>Hello Guest</h1></div>

        // }

        // return <div> {message}</div>

        // return (
        //         this.state.isLoggedIn ? 
        //         <div>Hello Abanoub</div> : 
        //         <div>Hello Guest</div>
        //  )

        return this.state.isLoggedIn && <div>Welcome Abanoub</div>
      
    
  }
}

export default User
