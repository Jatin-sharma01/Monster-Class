import React from 'react'

function Product({ name, age}) {
  return (
    <div>
        <h1>My name is: {name}</h1>
        <p>My age is: {age}</p>
    </div>
  )
}

export default Product