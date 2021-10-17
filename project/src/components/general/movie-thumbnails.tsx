import { useState } from 'react';
import { Link } from 'react-router-dom';
import { appRoute } from '../const/const';
import { MovieInfo } from '../types/types';

function MovieThumbnails(props:{film:MovieInfo}): JSX.Element {
  const {
    previewImg,
    title,
    id,
  } = props.film;

  const [, setThumbnailState] = useState(false);

  const handleMouseOn = () => {
    setThumbnailState(() => true);
  };

  const handleMouseOut = () => {
    setThumbnailState(() => false);
  };

  return (
    <article className="small-film-card catalog__films-card" onMouseEnter={handleMouseOn} onMouseLeave={handleMouseOut}>
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
