import React from 'react'

function UserStatus(loggedIn, isAdmin) {
    if (loggedIn && isAdmin) {
        return <h1>Welcome Admin</h1>
    } else {
        return <h1>Welcome User</h1>
    }
  return (
    <div>


    </div>
  )
}

export default UserStatus