import React from 'react'
import styles from './homescreen.css'
import Navbar from '../../Navbar/navbar'
import Banner from '../../Banner/banner'
import Row from '../../Row/row'
import requests from '../../Requests'
const Homescreen = () => {
  return (
    <div className='home'>
      <Navbar />
      <Banner />
      <Row
        title='NETFLIX ORIGINAL'
        fetchUrl={requests.fetchNetflixOriginal}
        isLargeRow // Optional if you want bigger thumbnails
      />
      <Row
        title='Trending Now'
        fetchUrl={requests.fetchTrending}
        
        
      />
      <Row
        title='Romance Movies'
        fetchUrl={requests.fetchRomanceMovies}
      />
      <Row
        title='Action Movies'
        fetchUrl={requests.fetchActionMovies}
      />
      <Row
      title='Horror Movies'
      fetchUrl={requests.fetchHorrorMovies} />

    
    </div>
  )
}

export default Homescreen
