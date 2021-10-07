import { Poster } from '../const/const';
import { MovieInfo } from '../const/types';

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
        <img src={poster} alt={altPoster} width={Poster.SmallWidth} height={Poster.SmallHeight} />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href={urlMovie}>{title}</a>
      </h3>
    </article>
  );
}

export default MovieThumbnails;
