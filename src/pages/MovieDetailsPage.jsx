// import axios from "axios";
import { useEffect, useState } from "react";
import { useParams,  Outlet, NavLink, useLocation, Navigate, useNavigate } from "react-router-dom";
// import MovieList from "../components/MovieList/MovieList";
import { fetchMovieByID } from "../api/api";


// const options = {
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MzIxMTAzZjY3MjQwYzg5YmFjOTNkZjEyMTQ0Y2UxOSIsIm5iZiI6MTcyOTUxMDg4MS42NzAwODksInN1YiI6IjY1NTkyMDYxY2EwZTE3MDExZDE4MDJkZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nGgJoab1-X-XU0EoHnCbo6KOb_lztWGGT-icK2OUAXY'
//   }
// };
 const BASE_URL = 'https://image.tmdb.org/t/p/w500';
const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  console.log(movieId)
  const  location  = useLocation();
   const navigate = useNavigate();
  
  useEffect(() => {
    async function getVideosByID() {
      try {
      
        const data = await fetchMovieByID(movieId);
        console.log(data);
        setMovie(data);
      } catch (error) {
        console.log(error.message)
      }
    }
    getVideosByID();
  }, [movieId]);

     const backUrl = location.state?.from || "/";
    const goBack = ()=> navigate(backUrl);

  return (
    <>
      <button onClick={goBack}>Go back</button>
      {movie && <ul><li>
        <img src={BASE_URL + movie.backdrop_path} alt="img path" />
        <h2>{movie.original_title}</h2>
        <p>User score: {movie.vote_average}</p>
        <h3>Overview </h3>
        <p>{movie.overview}</p>
        <h3>Genres</h3>
        {movie.genres.length > 0 && movie.genres.map((g) => {
          return (<p key={g.id}>{g.name }</p>)
        }) }
      </li>
        <p>Aditional information</p>
        <NavLink state={{
                    from: location
                  }} to="cast">Cast</NavLink>
        <NavLink state={{
                    from: location
                  }} to="reviews">Reviews</NavLink>
        <Outlet/>
      </ul>
    
        
    }
    </>
  )
}

export default MovieDetailsPage;
