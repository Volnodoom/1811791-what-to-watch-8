import { Link, useParams } from 'react-router-dom';
import { AppRoute } from '../const/const';
import { IdParam } from '../types/types';

function MovieNavigation():JSX.Element {
  const{id} = useParams() as IdParam;

  return (
    <nav className="film-nav film-card__nav">
      <ul className="film-nav__list">
        <li className="film-nav__item film-nav__item--active">
          <Link to={AppRoute.Movie(id)} className="film-nav__link">Overview</Link>
        </li>
        <li className="film-nav__item">
          <Link to={AppRoute.Details(id)} className="film-nav__link">Details</Link>
        </li>
        <li className="film-nav__item">
          <Link to={AppRoute.Reviews(id)} className="film-nav__link">Reviews</Link>
        </li>
      </ul>
    </nav>
  );
}

export default MovieNavigation;
