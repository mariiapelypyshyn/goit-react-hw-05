import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMoviesCredits } from "../../api/api";


const BAZE_IMG_URL = "https://image.tmdb.org/t/p/w500";

const MovieCast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
 
useEffect(() => {
    const addCastDetails = async () => {
      try {
        const castData = await fetchMoviesCredits(movieId);
        console.log('castData: ', castData);
        setCast(castData.cast);
      } catch (error) {
        console.log(error.message)
      } finally {
        setTimeout(() => {
          window.scrollBy({
            top: 525,
            behavior: 'smooth',
          });
        }, 250);
      }
    };
    addCastDetails();
}, [movieId]);
  
  return (
    <ul>
      {cast && cast.map((c) => {
        return (<li key={c.id}>
          <img src={BAZE_IMG_URL + c.profile_path} alt="img" />
          <p>{c.name}</p>
          <p>Character: {c.character }</p>
        </li>)
      })}
    </ul>
  )
}

export default MovieCast;
