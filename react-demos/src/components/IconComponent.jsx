import React from 'react'
import { FaRoute } from "react-icons/fa";


function IconComponent() {
    const styles ={
        backgroundColor: "#FFCC00",
        color: "white",
        padding: "15px",
        fontSize: "20px",
        borderRadius: "8px",
    }
  return (
    <div style={styles}>
       <FaRoute />
        <p> title</p>
    </div>
  )
}

export default IconComponent