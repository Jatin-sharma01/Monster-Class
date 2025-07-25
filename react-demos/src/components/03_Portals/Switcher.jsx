import React from 'react'
import { useState } from 'react';

function Switcher() {

    const [sw, setSw] = useState(false);
  return (
    <div>
        
        {sw ? <span>Dark</span>: <span>Light</span> }
        <br />
        <input type="text" key={ sw ? "dark" : "light"} />
        <button onClick={()=> setSw((s) => !s)}>switch</button>
    </div>
  )
}

export default Switcher