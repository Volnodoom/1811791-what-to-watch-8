import { MovieInfo } from '../types/types';

function MovieThumbnails(props:{film:MovieInfo}): JSX.Element {
  const {
    poster,
    altPoster,
    title,
    urlMovie,
  } = props.film;

  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={poster} alt={altPoster} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href={urlMovie}>{title}</a>
      </h3>
    </article>
  );
}

export default MovieThumbnails;
