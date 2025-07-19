import { UserContext } from "./UserContext";
import { useState, useContext } from 'react';

import React from 'react'

const UpdateUser = () => {
    const { updateUser } = useContext(UserContext)
    const [newName, setNewName] = useState("");  // local input state

    const handleSubmit = e => {
        e.preventDefault()
        if (newName.trim()){
            updateUser(newName); // Update the context's user
            setNewName("") // Clear input
        }
    }
    return (
        <div>
          <h2>Update User Name</h2>
          <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={newName}
                onChange={e => setNewName(e.target.value)}
                placeholder="Enter Your Name"
            />
            <button type="submit">Update</button>
          </form>
        </div>
    )
}
export default UpdateUser

