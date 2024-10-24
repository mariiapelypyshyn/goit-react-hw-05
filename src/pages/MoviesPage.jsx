import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieList from "../components/MovieList/MovieList";
import SearchMovies from "../components/SearchMovies/SearchMovies";
import { fetchMoviesSearch } from "../api/api";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movieList, setMovieList] = useState(null);
  const [page, setPage] = useState(1);

  const onSearch = searchWord => {
    setSearchParams({ query: searchWord });
  };

  const searchQuery = searchParams.get('query');
  // const title = `You were looking for a movie ${searchQuery}`;

   useEffect(() => {
    const searchMovies = async () => {
      if (searchQuery === null) {
        return;
      }
      try {
        const data = await fetchMoviesSearch(searchQuery, page);
        console.log('data: ', data);
        const trend = data.results;
        setMovieList([...trend]);
      } catch (error) {
        console.log(error.message);
      } 
    };
    searchMovies();
  }, [searchQuery, page]);

 return (
    <div >
      <SearchMovies onSearch={onSearch} />
     {
       movieList !== null && (
         <MovieList movieList={movieList}  />
       )
     }</div> );
    
 
};



export default MoviesPage;
