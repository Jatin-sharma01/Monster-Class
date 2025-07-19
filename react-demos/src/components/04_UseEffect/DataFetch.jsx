import React from 'react'
import { useState, useEffect } from 'react';

function DataFetch() {
  const [data, setData] = useState([]);
    useEffect(() => {
      async function getData() {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();
        if (data && data.length) setData(data);
      }
      getData();
    }, []);
  return (
    <div>
      {data.map((todo)=>(
        <section key={todo.id}>
          <li>Title: {todo.title}</li>
          <li>Body: {todo.body}</li>
        </section>
      ))}
    </div>
  )
}

export default DataFetch