import React from 'react'

function Persons({personItem}) {
  return (
    <div>
        <h1>I'm {personItem.name} I'm {personItem.age}</h1>
    </div>
  )
}

export default Persons
