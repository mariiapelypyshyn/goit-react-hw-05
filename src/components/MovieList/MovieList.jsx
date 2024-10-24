import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";
import { defaultImg } from "../../api/api";

// const MovieList = ({ movies }) => {
    
//   return (
//       <div>
//           {movies !== null && movies.map((movie) => {
//               return (<Link to={`/movies/${movie.id}`} key={movie.id} className={css.movieLink}>{movie.title }</Link>)
//           })}
//               </div>
//   )
// }
const MovieList = ({ movieList, title }) => {
  const location = useLocation();
  return (
    <div>
      {title !== '' && <h2 >{title}</h2>}
      <div >
        {movieList.length > 0 && movieList.map(mov => (
            <Link
                className={css.movieLink}
            state={{ from: location }}
            key={mov.id}
            to={`/movies/${mov.id}`}
            style={{ width: 250 }}
          >
            <p >{mov.title}</p>
            {/* <img
              src={
                mov.backdrop_path
                  ? `https://image.tmdb.org/t/p/w500${mov.backdrop_path}`
                  : defaultImg
              }
              alt={mov.title}
            
            /> */}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
