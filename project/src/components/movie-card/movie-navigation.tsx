import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AppRoute } from '../const/const';
import { IdParam } from '../types/types';

const INACTIVE_STATE = 'film-nav__item';
const ACTIVE_STATE = 'film-nav__item film-nav__item--active';

function MovieNavigation():JSX.Element {
  const{id} = useParams() as IdParam;
  const initialState = {
    overview: true,
    details: false,
    reviews: false,
  };
  const [toggleHighlight, setToggleHighlight] = useState(initialState);

  return (
    <nav className="film-nav film-card__nav">
      <ul className="film-nav__list">

        <li
          className={toggleHighlight.overview ? ACTIVE_STATE : INACTIVE_STATE}
          onClick={() => setToggleHighlight(
            {
              overview: true,
              details: false,
              reviews: false,
            })}
        >
          <Link to={AppRoute.Movie(id)} className="film-nav__link">Overview</Link>
        </li>

        <li
          className={toggleHighlight.details ? ACTIVE_STATE : INACTIVE_STATE}
          onClick={() => setToggleHighlight(
            {
              overview: false,
              details: true,
              reviews: false,
            })}
        >
          <Link to={AppRoute.Details(id)} className="film-nav__link">Details</Link>
        </li>

        <li
          className={toggleHighlight.reviews ? ACTIVE_STATE : INACTIVE_STATE}
          onClick={() => setToggleHighlight(
            {
              overview: false,
              details: false,
              reviews: true,
            })}
        >
          <Link to={AppRoute.Reviews(id)} className="film-nav__link">Reviews</Link>
        </li>

      </ul>
    </nav>
  );
}

export default MovieNavigation;
