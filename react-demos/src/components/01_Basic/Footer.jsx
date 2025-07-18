import React from 'react'

function Footer() {
    const year = new Date().getFullYear();
  return (
    <p>&copy; {year} My Website </p>
  )
}

export default Footer