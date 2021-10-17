import { Link, useParams } from 'react-router-dom';
import { appRoute } from '../const/const';
import { IdParam } from '../types/types';

function MovieNavigation():JSX.Element {
  const{id} = useParams() as IdParam;

  return (
    <nav className="film-nav film-card__nav">
      <ul className="film-nav__list">
        <li className="film-nav__item film-nav__item--active">
          <Link to={appRoute.Movie(id)} className="film-nav__link">Overview</Link>
        </li>
        <li className="film-nav__item">
          <Link to={appRoute.Details(id)} className="film-nav__link">Details</Link>
        </li>
        <li className="film-nav__item">
          <Link to={appRoute.Reviews(id)} className="film-nav__link">Reviews</Link>
        </li>
      </ul>
    </nav>
  );
}

export default MovieNavigation;
