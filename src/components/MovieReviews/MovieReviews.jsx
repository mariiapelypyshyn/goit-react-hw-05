import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMoviesReviews } from "../../api/api";

const MovieReviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const addCastDetails = async () => {
      try {
        const reviewsData = await fetchMoviesReviews(movieId);
        setReviews(reviewsData.results)
        console.log('reviewsData.results: ', reviewsData.results);
        
      }
      catch (error) {
        console.log(error.message)
      }
finally {
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
    <div>
      {/* {reviews.length < 0 && (<p>We dont have any reviews for this movie.</p>)} */}
      {reviews && reviews.map((review) => {
        return (<li key={review.id}>
          <p>{review.author}</p>
          <p>{review.content }</p>
      </li>)
    }) }
    </div>
  )
}

export default MovieReviews;
