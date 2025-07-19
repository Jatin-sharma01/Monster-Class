import React from 'react'
import ComponentB from './ComponentB'

function ComponentA(name) {
  return (
    <div>
        <ComponentB name={name} />
    </div>
  )
}

export default ComponentA