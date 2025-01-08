import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_API_URL;

// Функция для получения данных с использованием axios
const fetchMovies = async (endpoint) => {
  const response = await axios.get(`${BASE_URL}/${endpoint}`, {
    params: {
      api_key: API_KEY,
      language: "en-US",
      page: 1,
    },
  });
  return response.data;
};

export const getMovieDetails = async (movieId) => {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}`, {
    params: {
      api_key: API_KEY,
      language: "en-US",
    },
  });
  return response.data;
};

export const getTrending = () => fetchMovies("trending/all/day");
export const searchMovies = (query) =>
  fetchMovies(`search/movie?query=${query}`);
export const searchTvShows = (query) => fetchMovies(`search/tv?query=${query}`);
export const getMovies = () => fetchMovies("movie/popular");
export const getTvShows = () => fetchMovies("tv/popular");
