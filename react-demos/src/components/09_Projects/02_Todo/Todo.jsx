import { useState } from "react"; // Import React's useState hook to manage component state
import "./Todo.css"; // Import CSS for styling

// This function generates a random integer between 0 and 9 (not used in the component)
function generateId() {
  // Math.random() generates a decimal between 0 (inclusive) and 1 (exclusive)
  // Multiplying by 10 scales it to between 0 and 10 (not including 10)
  // Math.floor() removes the decimal part, leaving integers from 0 to 9
  return Math.floor(Math.random() * 10);
}

function Todo() {
  // todos state stores the array of todo objects (each with `text` and `id`)
  const [todos, setTodos] = useState([]);
  // input state holds the current value of the text input field
  const [input, setInput] = useState("");

  // Function called when "Submit" button is clicked
  const handleSubmit = () => {
    // Prevent submission if input is empty or just whitespace
    if (!input.trim()) return;

    // Add new todo item to the list
    setTodos((todos) =>
      todos.concat({
        text: input,      // The todo text entered by the user
        id: Date.now(),   // Unique ID generated using current timestamp in milliseconds
      })
    );

    // Clear the input field after submitting
    setInput("");
  };

  // Function to remove a todo item by filtering out the one with matching id
  const removeTodo = (id) =>
    setTodos((todos) => todos.filter((t) => t.id !== id));

  // Render the component UI
  return (
    <div className="container">
      {/* Controlled input field with value linked to `input` state */}
      <input
        type="text"
        value={input}
        // Update input state whenever user types
        onChange={(e) => setInput(e.target.value)}
        placeholder="New Todo"
      />

      {/* Button triggers handleSubmit function on click */}
      <button onClick={handleSubmit} className="submit-btn">Submit</button>

      {/* List of todos rendered here */}
      <ul className="todos-list">
        {todos.map(({ text, id }) => (
          // Each <li> element gets a unique `key` prop for React's reconciliation
          <li key={id} className="todo">
            <span>{text}</span>
            {/* Clicking this button calls removeTodo with the correct id */}
            <button className="close" onClick={() => removeTodo(id)}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo; // Export the Todo component as default
