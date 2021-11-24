import { Link } from 'react-router-dom';
import { AppRoute } from '../const/const';
import { MovieInfo } from '../types/types';

function Breadcrumbs(props: {film: MovieInfo}):JSX.Element {
  const {title, id} = props.film;

  return (
    <nav className="breadcrumbs">
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <Link to={AppRoute.Movie(id)} className="breadcrumbs__link">{title}</Link>
        </li>
        <li className="breadcrumbs__item">
          <Link to={AppRoute.AddReview(id)} className="breadcrumbs__link">Add review</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Breadcrumbs;
