import React from 'react'

function Person(prps) {
  return (
    <div>
        <h2>{prps.name}</h2>
        <p>{prps.age}</p>
        </div>
  )
}

export default Person