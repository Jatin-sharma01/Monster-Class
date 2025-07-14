// ### Basic Usage of `useState`

// 1. Create a new file called **`Counter.jsx`**.
// 2. Inside this file, create a functional component called **`Counter`**.
// 3. Use `useState` to manage a simple counter state:
//    - Initialize the state with a value of `0`.
//    - Create a button to increment the counter by `1` when clicked.
//    - Display the current value of the counter.


import React from 'react'
import { useState } from 'react';

function Practise1() {
const [counterr, setCounterr] = useState(0);
const increment = () => {
  setCounterr(
    counterr + 1
  )
};
  return (
    <div>
        <h1>Number: {counterr}</h1>
        <button onClick={increment}>+</button>
         <button onClick={ ()=> setCounterr(counterr - 1) }>-</button> 
         {/* you can do it this way also, instead of making a decrement function */}

    </div>
  )
}

export default Practise1