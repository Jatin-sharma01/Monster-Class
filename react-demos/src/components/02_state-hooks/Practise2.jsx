// ### `useState` with an Array of Data

// 1. Create a new file called **`TodoList.jsx`**.
// 2. Inside this file, create a functional component called **`TodoList`**.
// 3. Use `useState` to manage an array of todo items:
//    - Initialize the state with an empty array.
//    - Create a form to add new todo items to the list.
//    - Display the list of todo items.

import React from "react";
import { useState } from "react";

function Practise2() {

  const [toDoList, setToDoList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setToDoList([...toDoList, inputValue]);
      setInputValue("");
    }
  };
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Add a new Todo"
        />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {toDoList.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default Practise2;
