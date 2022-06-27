import React from 'react';

// function Greet ()
// {
//     return <h1>Hello World</h1>
// }

const Greet =(props)=>{
   const {name,children,age} = props;
   return <h1>Hello {name} and his/her age is {age} and children is {children}</h1>
}


export default Greet;