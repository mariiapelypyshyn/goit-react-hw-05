
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MzIxMTAzZjY3MjQwYzg5YmFjOTNkZjEyMTQ0Y2UxOSIsIm5iZiI6MTcyOTUxMDg4MS42NzAwODksInN1YiI6IjY1NTkyMDYxY2EwZTE3MDExZDE4MDJkZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nGgJoab1-X-XU0EoHnCbo6KOb_lztWGGT-icK2OUAXY",
  },
};
export const defaultImg =
  'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg';
 
export const BAZE_IMG_URL = "https://image.tmdb.org/t/p/w500";

export const fetchMoviesTrend = async page => {
  const response = await fetch(`https://api.themoviedb.org/3/trending/movie/day?page=${page}`, options);
  const data = await response.json();
  return data;
};

export const fetchMovieByID = async (movieId) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
      options
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching videos:", error);
    return [];
  }
};


export const fetchMoviesSearch = async (q, page) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${q}&page=${page}`, options);
  const data = await response.json();
  return data;
};


export const fetchMoviesCredits = async id => {
  const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits`, options);
  console.log('response: ', response);
  const data = await response.json();
  console.log('data: ', data);
  return data;
};

export const fetchMoviesReviews = async id => {
  const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/reviews`, options);
  console.log('response: ', response);
  const data = await response.json();
  console.log('data: ', data);
  return data;
};
