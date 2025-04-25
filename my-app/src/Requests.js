const API_KEY = "d44c67fa52dd9603b6e8ee0b68e7e7ea";



const requests = {
  fetchTrending:`/discover/movie?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginal:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_networks=213
  `,
  fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35
  `,
  fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749
  `,
  fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`

}


export default requests;




