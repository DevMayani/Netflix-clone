import React, { useState, useEffect } from 'react'
import './row.css'
import axios from '../axios';

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movie, setMovie] = useState([]);

  const base_url = 'https://image.tmdb.org/t/p/original/';

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovie(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className="row__posters">
        {movie.map((movies) => (
          (isLargeRow && movies.poster_path) || (!isLargeRow && movies.backdrop_path) ? (
            <img
              key={movies.id}
              className={`row__poster ${isLargeRow && "row__posterLarge"}`} 
              src={`${base_url}${isLargeRow ? movies.poster_path : movies.backdrop_path}`}  
              alt={movies.name || movies.title || 'Untitled'}
            />
          ) : null
        ))}
      </div>
    </div>
  )
}

export default Row;
