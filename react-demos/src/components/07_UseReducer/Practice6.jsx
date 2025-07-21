import { useReducer } from 'react';
import { useState, useEffect } from 'react';

function reducer(state, action) {
  switch(action.type) {
    case 'increment':
      return {
        ...state,
        count: state.count + 1
      };
    case 'decrement':
      return {
        ...state,
        count: state.count - 1
      };
    case 'reset':
      return {
        ...state,
        count: 0
      };
    case 'incrementByAmount':
      return {
        ...state,
        count: state.count + action.payload
      };
    case 'decrementByAmount':
      return {
        ...state,
        count: state.count - action.payload
      };
    default:
      return state;
  }
}

const initialState = {
 count: 0
};

export default function Practice6() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [inputValue, setInputValue] = useState(0);

  return (
   <div>
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={()=> dispatch({ type: "increment" })} >increment</button>
      <button onClick={()=> dispatch({ type: "decrement" })} >decrement</button>
      <button onClick={()=> dispatch({ type: "reset" })} >reset</button>
    </div>
    <div>
      <input type="number" value={inputValue} onChange={ e => setInputValue(e.target.value)}/>
      <button onClick={()=> {dispatch({ type: "incrementByAmount", payload: Number(inputValue)}); setInputValue("")}}>Add</button>
      <button onClick={()=> {dispatch({ type: "decrementByAmount", payload: Number(inputValue)}); setInputValue("")} }>substract</button>
    </div>
    </div>
  );
}

