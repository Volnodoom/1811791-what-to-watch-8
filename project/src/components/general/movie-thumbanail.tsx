import { Link } from 'react-router-dom';
import { appRoute } from '../const/const';
import { MovieInfo } from '../types/types';

function MovieThumbnails(props:{film:MovieInfo}): JSX.Element {
  const {
    previewImg,
    title,
    id,
  } = props.film;

  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={previewImg} alt={title} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link to={appRoute.Movie(id)} className="small-film-card__link">{title}</Link>
      </h3>
    </article>
  );
}

export default MovieThumbnails;
