import { NavLink, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import MoviesPage from "./pages/MoviesPage";
import NotFoundPage from "./pages/NotFoundPage";
import MovieCast from "./components/MovieCast/MovieCast";
import MovieReviews from "./components/MovieReviews/MovieReviews";

import clsx from 'clsx';
import css from "./App.module.css";



// const url = 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1';




export const BuildLinkClass = ({ isActive }) => {
   return clsx(css.link, isActive && css.active);
}
 
const App = () => {

  

  return (
    <div className={css.AppContainer}>
      <nav className={css.nav}>
        <NavLink to="/" className={BuildLinkClass}>Home</NavLink>
        <NavLink to="/movies" className={BuildLinkClass}>MoviesPage</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/movies" element={<MoviesPage/>} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage/>} >
          <Route path="cast" element={<MovieCast/> } />
          <Route path="reviews" element={ <MovieReviews/>} />
        </Route>
         <Route path="*" element={<NotFoundPage/> } />
      </Routes>
    </div>
  )
}

export default App;
