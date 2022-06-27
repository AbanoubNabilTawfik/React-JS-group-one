import React from 'react'
import Persons from './Persons'

function NameList() {
    const names=["Mohmamed","Sahar","Maher","Abanoub","Mohmamed"];
    const nameList= names.map((name,index)=><h2 key={index}>{name}</h2>)

    const perosns=[
        {
            "id":1,
            "name":"Mohamed",
            "age":25
        },
        {
            "id":2,
            "name":"Sahar",
            "age":27
        },
        {
            "id":3,
            "name":"Maher",
            "age":30
        }
    ]
    const personList=perosns.map((person)=><Persons personItem={person}/>)
  return (
    <div>
           {/* <h2>{names[0]}</h2>
           <h2>{names[1]}</h2>
           <h2>{names[2]}</h2>
           <h2>{names[3]}</h2> */}
           {/* {
            personList
           } */}
           {
            nameList
           }
    </div>
  )
}

export default NameList
