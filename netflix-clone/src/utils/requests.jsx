// const API_key = process.env.REACT_APP_API_KEY;
const API_key = import.meta.env.VITE_API_KEY;

const requests = {
  fetchNetflixOriginals: `/discover/tv?api_key=${API_key}&with_networks=213`,
  fetchTrending: `/trending/all/week?api_key=${API_key}&language=en-US`,
  fetchTopRatedMovies: `/movie/top_rated?api_key=${API_key}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_key}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_key}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_key}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_key}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_key}&with_genres=99`,
  fetchTvShow: `/tv/popular?api_key=${API_key}&language=en-US&page=1`,
  fetchTopRated: `/movie/top_rated?api_key=${API_key}&language=en-US&page=1`,
  fetchKids: `/discover/movie?api_key=${API_key}&certification_country=US&certification.lte=G&sort_by=popularity.desc`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_key}&with_genres=27&language=en-US&sort_by=popularity.desc`,
  fetchAdventureMovies: `/discover/movie?api_key=${API_key}&with_genres=12&language=en-US&sort_by=popularity.desc`,
};

export default requests;
