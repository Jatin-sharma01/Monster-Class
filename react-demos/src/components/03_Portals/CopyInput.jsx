import React from 'react'
import { useState } from 'react';

function CopyInput() {

    const [inputValue, setInputValue] = useState('');
    const [copied, setCopied] = useState(false);
    const handleCopy = () => {
      navigator.clipboard.writeText(inputValue).then(() =>{
        setCopied(true);
        setTimeout(()=> setCopied(false), 2000);
      });
    };

  return (
    <div>
        <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} />
        <button onClick={handleCopy}>copy</button>
        
    </div>
  )
}

export default CopyInput

/*
  The handleCopy function is triggered when the user clicks the 'copy' button.

  1. navigator.clipboard.writeText(inputValue):
     - This is a modern browser API that asynchronously tries to copy the text
       from the 'inputValue' state variable to the user's clipboard.
     - Because it's asynchronous, it returns a "Promise".

  2. .then(() => { ... }):
     - The code inside .then() only runs if the copy operation was successful.

  3. setCopied(true):
     - Once successful, it sets the 'copied' state to true. This can be used
       to give the user immediate feedback (e.g., changing the button text to "Copied!").

  4. setTimeout(() => setCopied(false), 2000):
     - This schedules the 'copied' state to be set back to false after 2000
       milliseconds (2 seconds). This makes the feedback message temporary.
*/