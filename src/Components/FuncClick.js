import React from 'react'

function FuncClick() {
    
    function ShowMsg()
    {
        console.log("Click from function component")
    }

  return (
    <div>
         <button onClick={ShowMsg}>Click from function component</button>
    </div>
  )
}

export default FuncClick
