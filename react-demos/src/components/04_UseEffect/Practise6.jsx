import React from 'react'
import { useState, useEffect } from 'react';

function Practise6() {

    const [posts, setPosts] = useState([]);

    // ===============================
// Step 4: useEffect - Fetching Data from API
// ===============================

useEffect(() => {
  // Define an async function to fetch data (because useEffect itself cannot be async)
  const fetchData = async () => {
    // Send a GET request to the API URL to fetch posts
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    );
    // Wait for the response and convert it to JSON format (an array of post objects)
    const data = await response.json();
    // Store the fetched posts in the state variable 'posts'
    setPosts(data);
  };
  // Call the fetchData function to start fetching when component loads
  fetchData();
}, []); // Empty dependency array means this runs only once, after the first render

// ===============================
// Step 5: Rendering (What shows up on the screen)
// ===============================

return (
  <div>
    <h1>title: </h1>
    {
      // If posts have been loaded (array is not empty),
      // show the title of the first post (posts[0].title)
      // Otherwise, show "Loading..." until the data arrives
      posts.length > 0 ? <h2>{posts[0].title}</h2> : <p>Loading...</p>
    }
  </div>
)

}

export default Practise6

