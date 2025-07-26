import React from 'react'
import './ToggleBackground.css'
import { useState } from 'react';

// Toggle between light and dark backgrounds, adjusting text and button styles
const ToggleBackground = () => {
  // State for the section background color
  const [backgroundColor, setBackgroundColor] = useState("white");
  // State for the text color
  const [textColor, setTextColor] = useState("#1b1b1b");
  // State for the button's background color
  const [buttonStyle, setButtonStyle] = useState("white");

  // Function that gets called when you click the button
  function handleClick() {
    // Toggle background: if white, switch to dark, else switch to white
    setBackgroundColor(backgroundColor === "white" ? "#1b1b1b" : "white");
    // Toggle text color between dark gray and orange
    setTextColor(textColor === "#1b1b1b" ? "#ffa31a" : "#1b1b1b");
    // Toggle button background to contrast the section background
    setButtonStyle(backgroundColor === "white" ? "#1b1b1b" : "white");
  }

  // Render the component
  return (
    // The outer <section> has dynamic background & text color
    <section style={{ backgroundColor, color: textColor }}>
      {/* Button toggles the theme on click */}
      <button
        onClick={handleClick}
        style={{
          // Mistake: buttonStyle should be assigned to backgroundColor property, not as buttonStyle.
          backgroundColor: buttonStyle, // Corrected! Use backgroundColor, not 'buttonStyle'
          color: textColor,
          border: `2px solid ${textColor}`,
        }}
      >
        {/* Label on the button changes based on background color */}
        {backgroundColor === "#1b1b1b" ? "Black Theme" : "White Theme"}
      </button>
      {/* Extra section for content */}
      <section className="content">
        <h1>
          Welcome To A <br /> Real World..
        </h1>
      </section>
    </section>
  );
}

export default ToggleBackground;
