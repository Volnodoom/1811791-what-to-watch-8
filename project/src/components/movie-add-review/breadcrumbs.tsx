/* eslint-disable jsx-a11y/anchor-is-valid */
import { MovieInfo } from '../const/types';

function Breadcrumbs(props: {film: MovieInfo}):JSX.Element {
  const {title} = props.film;

  return (
    <nav className="breadcrumbs">
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <a href="film-page.html" className="breadcrumbs__link">{title}</a>
        </li>
        <li className="breadcrumbs__item">
          <a className="breadcrumbs__link">Add review</a>
        </li>
      </ul>
    </nav>
  );
}

export default Breadcrumbs;
