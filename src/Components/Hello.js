import React from 'react';

const Hello =()=>{
    // return (
    //     <div>
    //         <h1>Hello Abanoub</h1>
    //     </div>
    // )
    return React.createElement('div' ,{id:'myId',className:'myClass'} ,
                          React.createElement('h1',null,'Hello Abanoub')
     )


}

export default Hello;