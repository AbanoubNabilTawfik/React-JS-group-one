import React from 'react';

// function Greet ()
// {
//     return <h1>Hello World</h1>
// }

const Greet =(props)=>{
   return <h1>Hello {props.name} and his/her age is {props.age} and children is {props.children}</h1>
}


export default Greet;