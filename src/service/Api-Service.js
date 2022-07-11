import axios from 'axios';
const API_KEY = '23b413dd3d69bdbc6c71f278d2b3d43a';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export async function fetchTrending() {
  const { data } = await axios(`trending/movie/day?api_key=${API_KEY}`);
  return data.results;
}

export async function fetchMovieDetails(movieId) {
  const { data } = await axios(`movie/${movieId}?api_key=${API_KEY}`);
  return data;
}

export async function fetchMovieCredits(movieId) {
  const { data } = await axios(`movie/${movieId}/credits?api_key=${API_KEY}`);
  return data.cast;
}

export async function fethMovieReviews(movieId) {
  const { data } = await axios(`/movie/${movieId}/reviews?api_key=${API_KEY}`);
  return data.results;
}

export async function searchMovies(searchQuery) {
  const { data } = await axios(
    `search/movie?api_key=${API_KEY}&query=${searchQuery}`,
  );
  return data.results;
}
