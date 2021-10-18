import { MovieInfo } from '../types/types';

const SHOW_ACTORS_NUMBER = 4;

function MovieOverview(props: {film: MovieInfo}):JSX.Element {
  const {
    ratingAbsolute,
    ratingCount,
    description,
    director,
    actors,
  } = props.film;

  const actorOutput = () => {
    if (actors.length >= SHOW_ACTORS_NUMBER) {
      return (`${actors.slice(0,4).join(', ')}  and other`);
    }
    return actors.join(', ');
  };

  return(
    <>
      <div className="film-rating">
        <div className="film-rating__score">{ratingAbsolute}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{'Very good'}</span>
          <span className="film-rating__count"> {ratingCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{description}</p>
        <p className="film-card__director"><strong>Director: {director}</strong></p>
        <p className="film-card__starring"><strong>Starring: {actorOutput()}</strong></p>
      </div>
    </>
  );
}

export default MovieOverview;
