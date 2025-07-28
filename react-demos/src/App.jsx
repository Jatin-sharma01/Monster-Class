import React from "react";
import { accordionData } from "./utils/content";
import Accordion from "./components/09_Projects/08_Accordions/Accordion";



function App() {
  return (
<div className="accordion">
  {accordionData.map(({title, content}) => (
    <Accordion title={title} content={content} />
  ))}
</div>
  );
}

export default App;
