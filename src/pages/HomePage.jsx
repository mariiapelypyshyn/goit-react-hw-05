
import { useEffect, useState } from "react";
import MovieList from "../components/MovieList/MovieList";
import { fetchMoviesTrend } from "../api/api";




const HomePage = () => {
   const [movieList, setMovieList] = useState([]);
  const [page, setPage] = useState(1);
  const title = 'Trending today';

    useEffect(() => {
    const addTrendMovies = async () => {
      try {
      
        const data = await fetchMoviesTrend(page);
        const trend = data.results;
        setMovieList([...trend]);
      } catch (error) {
     console.log(error.message)
      } 
    };
    addTrendMovies();
  }, [page]);

    
  return (
    <div>
          {/* <h2>Trending today</h2> */}
      <MovieList movieList={movieList} title={title} />
    </div>
  )
}

export default HomePage;
