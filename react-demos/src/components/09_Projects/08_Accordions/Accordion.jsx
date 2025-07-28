import React from 'react';
import { useState, useEffect } from 'react';
import "./Accordion.css";

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <section className='accordion-card'>
      <div className="header" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <p className='icon'> {isActive ? "-" : "+"}</p>
      </div>
      <div className="content">
        {isActive && <p className='card-info'>{content}</p>}
      </div>
    </section>
  );
};

export default Accordion;


/* 
App.jsx code for reference:

import React from "react";
import { accordionData } from "./utils/content";
import Accordion from "./components/09_Projects/08_Accordions/Accordion";

function App() {
  return (
    <div className="accordion">
      {accordionData.map(({ title, content }) => (
        <Accordion title={title} content={content} />
      ))}
    </div>
  );
}

export default App;

*/

/*
Summary:

- The App component uses map() to convert each item in accordionData 
  into an Accordion component.
- Each Accordion receives data via props (title, content).
- Accordion internally manages its own active state to show/hide content.

*/
