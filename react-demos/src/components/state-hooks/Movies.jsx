import React from 'react'
import { useState } from 'react'

const [movies, setMovies] = useState([
  {id: 1, title: "Spiderman", ratings:3 },
  {id: 2, title: "Superman", ratings:4 },

]);
const handleClick = () => {
  setMovies(
    movies.map((m) => (m.id ===1 ?{...movies, title: "john wick" } : m))
  )
};
function Movies() {
  return (
    <div>
      {movies.map( m =>(
        <li key={Math.random()}>{m.title}</li>
      ))}
      <button onClick={handleClick}></button>
    </div>
  )
}

export default Movies