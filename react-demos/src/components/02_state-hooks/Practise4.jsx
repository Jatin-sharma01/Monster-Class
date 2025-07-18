// ### `useState` with an Array of Objects

// 1. Create a new file called **`ShoppingList.jsx`**.
// 2. Inside this file, create a functional component called **`ShoppingList`**.
// 3. Use `useState` to manage an array of objects, where each object represents a shopping item with `name` and `quantity`:
//    - Initialize the state with an empty array.
//    - Create a form to add new items to the list.
//    - Display the list of items.

import React from 'react'
import { useState } from 'react'


function Practise4() {
const [items, setItems] = useState([]);
const [name, setName] = useState('');
const [quantity, setQuantity] = useState('');

const handleSubmit = (e) => {
  e.preventDefault()

  if(!name || !quantity ) return;

  const newItem = {
    name, quantity: parseInt(quantity)
  };
  setItems((prevItems) => [...prevItems, newItem])
  setName('')
  setQuantity('')

};
  return (
    <div>
        <h1>Shopping List</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='Item Name' value={name} onChange={(e) => setName(e.target.value)}  />
          <input type="number" placeholder='Item Quantity' value={quantity} onChange={(e) => setQuantity(e.target.value)}  />
          <button type='submit'>Add</button>
        </form>
        <ul>
          {items.map((item, index) =>(
            <li key={index}>
              {item.name} - Quantity: {item.quantity}
            </li>
          ) )}
        </ul>
    </div>
  )
}

export default Practise4