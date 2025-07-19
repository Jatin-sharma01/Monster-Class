import { useReducer, useState } from 'react';
// useReducer: for complex state
// useState: for simple input value

// Reducer function: decides how state changes in response to actions
function reducer(state, action) {
  // action.type tells us what to do
  switch(action.type) {
    case 'increment': // Increase count by 1
      // ...state copies all other properties (good if state has more than one property)
      return {
        ...state,
        count: state.count + 1
      };
    case 'decrement': // Decrease count by 1
      return {
        ...state,
        count: state.count - 1
      };
    case 'reset': // Set count back to 0
      return {
        ...state,
        count: 0
      };
    case 'incrementByAmount': // Increase count by action.payload
      return {
        ...state,
        count: state.count + action.payload
      };
    case 'decrementByAmount': // Decrease count by action.payload
      return {
        ...state,
        count: state.count - action.payload
      };
    default:
      // If we didn't recognize the action.type, just return the same state (no change)
      return state;
  }
}

// This is the starting state for our useReducer
const initialState = {
  count: 0
};

// Our main React component
// We export it as default (you can export below too; both are correct)
export default function Practice6() {
  // useReducer returns two things:
  // state: current state value (like {count: 0})
  // dispatch: function to send actions to the reducer
  const [state, dispatch] = useReducer(reducer, initialState);

  // inputValue will hold our input field value for custom amounts
  const [inputValue, setInputValue] = useState("");

  // The JSX starts here
  return (
    <div>
      <div>
        {/* Show the current count */}
        <h1>Count: {state.count}</h1>

        {/* Buttons that dispatch actions */}
        <button onClick={() => dispatch({ type: "increment" })}>
          increment
        </button>
        <button onClick={() => dispatch({ type: "decrement" })}>
          decrement
        </button>
        <button onClick={() => dispatch({ type: "reset" })}>
          reset
        </button>
      </div>
      <div>
        {/* Input field for entering custom amount (controlled component) */}
        <input
          type="number"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)} // Updates inputValue as user types
        />

        {/* 
          Button: Add custom amount 
          - dispatches action with payload = inputValue (converted to number)
          - then clears the input field
        */}
        <button
          onClick={() => {
            // Number(inputValue) ensures the payload is a number, not a string!
            dispatch({ type: "incrementByAmount", payload: Number(inputValue) });
            setInputValue(""); // Clear input after action
          }}
        >
          Add
        </button>

        {/* 
          Button: Subtract custom amount 
          - works the same as Add but action type is different
        */}
        <button
          onClick={() => {
            dispatch({ type: "decrementByAmount", payload: Number(inputValue) });
            setInputValue("");
          }}
        >
          substract
        </button>
      </div>
    </div>
  );
}

/* 
========================
==== useReducer NOTES ====
========================

# Structure:
- useReducer(reducer, initialState) returns [state, dispatch]
- "reducer" receives (state, action) and must return new (updated) state
- You update state by calling dispatch({ type: "ACTION_TYPE", payload: optionalValue })

# When to Use UseReducer:
- When state logic is complex (multiple related fields)
- When you need to handle many state transitions (like a mini state machine)
- When state changes depend on previous values

# action object:
- Always has "type": a string describing what you want to do
- Can also have "payload": extra data needed for the update

# Reducer:
- Must be a pure function (only depends on its input, returns new state, does NOT mutate original state)
- Always use ...state to preserve other state properties (good habit in real apps)

========================
*/
