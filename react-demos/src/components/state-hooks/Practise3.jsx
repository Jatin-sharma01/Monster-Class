// ### `useState` with an Object of Data

// 1. Create a new file called **`Profile.jsx`**.
// 2. Inside this file, create a functional component called **`Profile`**.
// 3. Use `useState` to manage an object with user profile information:
//    - Initialize the state with an object containing `name` and `age`.
//    - Provide input fields to update the `name` and `age`.
//    - Display the updated profile information.

import React from 'react'
import { useState } from 'react'


function Practise3() {

const [profile, setProfile] = useState(
    {name: "", age: ""}
);

const handleChange = (e) => {
  const {name, value} = e.target

  setProfile((prevProfile) => ({
    ...prevProfile, [name]: value,
  }))
};
  return (
    <div>
<h2>User Profile:</h2>
    <div>
        <label > Name: 
            <input type="text" name="name" value={profile.name} onChange={handleChange} />
        </label>
    </div>
    <div>
        <label >Age:
            <input type="text" name='age' value={profile.age} onChange={handleChange} />
        </label>
    </div>
    <h3>Profile Information</h3>
    <p>Name: {profile.name}</p>
    <p>Age: {profile.age}</p>
    </div>
  )
}

export default Practise3