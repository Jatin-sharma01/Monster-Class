import React from 'react'

function ComponentC(name) {
  return (
    <div>
        <h1>{name}</h1>
    </div>
  )
}

export default ComponentC

// so this way its going to take alot of time, giving prop to each and every file, in the whole tree, its not possible when there are alot of files, so we gonna use context api which is in 06 folder