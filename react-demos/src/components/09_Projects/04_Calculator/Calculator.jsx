import React from 'react';
import { useState, useEffect } from 'react'; // Import React hooks
import "./Calculator.css"; // Import CSS for styling

// Calculator functional component
const Calculator = () => {
  // inputValue stores the current expression shown in the calculator's display
  const [inputValue, setInputValue] = useState("");

  // Function to clear the calculator (reset display to empty string)
  const clear = () => {
    setInputValue("");
  };

  // Function to add a value (number/operator) to the end of inputValue string
  const display = (value) => {
    setInputValue(inputValue + value);
  };

  // Function to evaluate the expression using JavaScript's eval function,
  // then update inputValue with the result
  const calculate = () => {
    // WARNING: eval can be dangerous if input is not controlled; be cautious in real apps!
    setInputValue(eval(inputValue));
  };

  // Render the calculator UI
  return (
    // The calculator form container
    <form className='calculator' name='calc'>
      {/* Calculator display input, controlled by inputValue state */}
      <input type="text" className='value' value={inputValue} />

      {/* Calculator buttons: Each button calls display or specific functions onClick */}
      {/* 'C' button clears the display */}
      <span className="num clear" onClick={() => clear()}>C</span>
      {/* Operator buttons */}
      <span onClick={() => display('/')}>/</span>
      <span onClick={() => display('*')}>*</span>
      {/* Number buttons */}
      <span onClick={() => display('7')}>7</span>
      <span onClick={() => display('8')}>8</span>
      <span onClick={() => display('9')}>9</span>
      {/* More operators */}
      <span onClick={() => display('-')}>-</span>
      {/* More numbers */}
      <span onClick={() => display('4')}>4</span>
      <span onClick={() => display('5')}>5</span>
      <span onClick={() => display('6')}>6</span>
      {/* Plus operator styled differently */}
      <span className='plus' onClick={() => display('+')}>+</span>
      {/* Last row of numbers */}
      <span onClick={() => display('1')}>1</span>
      <span onClick={() => display('2')}>2</span>
      <span onClick={() => display('3')}>3</span>
      {/* Zero and double zero buttons */}
      <span onClick={() => display('0')}>0</span>
      <span onClick={() => display('00')}>00</span>
      {/* Decimal point */}
      <span onClick={() => display('.')}>.</span>
      {/* Equal button calls calculate to compute and display result */}
      <span className='num equal' onClick={() => calculate()}>=</span>
    </form>
  );
}

export default Calculator; // Export the Calculator component as default
