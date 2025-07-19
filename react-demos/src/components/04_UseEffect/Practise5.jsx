import React from 'react'
import { useState, useEffect } from 'react';

function Practise5() {

    const [count, setCount] = useState(0);
    useEffect(() => {
      document.title = `increment ${count}`;
    }, [count]);

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>increment</button>
    </div>
  )
}

export default Practise5


// inside the file,create a functional component called CounterEffect,
// use "useEffect" to update the document title whenever a counter value changes
// - initialize a count state with 0 using "useState"
// - render a button that increments the count
// - use UseEffect to update the document title whenever Count CHanges