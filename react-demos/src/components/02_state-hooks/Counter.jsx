import React from 'react'

function Counter() {
    const [randomNumber, setRandomNumber] = useState(() => 
    Math.floor(Math.random() * 100));

    const generateNewRandomNumber = () => {
      const newNumber = Math.floor(Math.random() *100)
      setRandomNumber(newNumber)
    };
  return (
    <div>
        <h1>random number: {randomNumber}</h1>
        <button>generate new number</button>
    </div>
  )
}

export default Counter
