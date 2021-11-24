import { getStringLikeRating } from '../../utils/common';
import { MovieInfo } from '../types/types';

function MovieOverview(props: {film: MovieInfo}):JSX.Element {
  const {
    ratingAbsolute,
    ratingCount,
    description,
    director,
    actors,
  } = props.film;

  return(
    <>
      <div className="film-rating">
        <div className="film-rating__score">{ratingAbsolute.toString().length === 1 ? `${ratingAbsolute}.0` : ratingAbsolute}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{getStringLikeRating(ratingAbsolute)}</span>
          <span className="film-rating__count"> {ratingCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{description}</p>
        <p className="film-card__director"><strong>Director: {director}</strong></p>
        <p className="film-card__starring"><strong>Starring: {actors.join(', ')}</strong></p>
      </div>
    </>
  );
}

export default MovieOverview;
