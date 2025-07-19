import React, { createContext, useState } from 'react';

// 1. Create a context object
const UserContext = createContext();

// 2. Create a provider component
const UserProvider = ({children}) => {
    // Set up state to store the user information (default name is "john Doe")
    const [user, setUser] = useState({ name: "john Doe"});

    // Function to update the user's name
    const updateUser = (newName) => {
        setUser({ name: newName});
    }

    // 3. Share the value (user object and the update function) with all children
    return (
        <UserContext.Provider value={{ user, updateUser }}>
            {children}
        </UserContext.Provider>
    )
};
export { UserContext, UserProvider };
