import React, { useEffect, useState } from 'react';
import './banner.css';
import requests from '../Requests.js';
import axios from '../axios';

const Banner = () => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    let intervalId;

    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginal);
      const movies = request.data.results;

      function setRandomMovie() {
        const randomIndex = Math.floor(Math.random() * movies.length);
        setMovie(movies[randomIndex]);
      }

      setRandomMovie(); // Set one on initial load

      intervalId = setInterval(() => {
        setRandomMovie(); // Update every 8 seconds
      }, 8000);

      return () => clearInterval(intervalId); // Cleanup on unmount
    }

    fetchData();
  }, []);

  function truncate(string, n) {
    return string?.length > n ? string.substring(0, n - 1) + '...' : string;
  }

  return (
    <header
      className='banner'
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
    >
      <div className='banner_contents'>
        <h1 className='banner_title'>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <div className='banner_buttons'>
          <button className='banner_button'>Play</button>
          <button className='banner_button'>My List</button>
        </div>

        <h1 className='banner_description'>
          {truncate(movie?.overview, 150)}
        </h1>
      </div>

      <div className='banner-fadeBottom'></div>
    </header>
  );
};

export default Banner;
