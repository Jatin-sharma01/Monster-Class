import React from 'react'
import { useEffect, useState } from 'react'

function Demos() {

    const [value, setValue] = useState(0);
    const [setsomething, setSomething] = useState(0);
    useEffect(() => {
        console.log('call useEffect');
        document.title = `increment ${value}`;
    }, [value]);

  return (
    <div>
        <h2>{value}</h2>
        <button onClick={e=> setValue(value + 1)}>Increment</button>
        <button onClick={e=> setSomething(value + 1)}>Increment by something</button>
    </div>
  )
}

export default Demos