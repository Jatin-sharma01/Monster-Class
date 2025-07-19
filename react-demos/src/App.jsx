import React from "react";
import UserProfile from "./components/06_Context-Api/UserProfile";
import { UserProvider } from "./components/06_Context-Api/UserContext";
import UpdateUser from "./components/06_Context-Api/UpdateUser";

function App() {
  return (
    // Wrap everything in UserProvider to share user info
    <UserProvider>
      <UserProfile />
      <UpdateUser />
    </UserProvider>
  );
}

export default App;
