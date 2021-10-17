import { Fragment } from 'react';
import { getRandomInteger, getTime } from '../../utils/common';
import { MovieInfo } from '../types/types';

const RandomKey = {
  Upper: 9999999999,
  Lower: 0,
};

function MovieDetails(props: {film:MovieInfo}):JSX.Element {
  const {director, actors, runTime, genre, year} = props.film;

  const actorOutput = actors.map((actor) => (
    <Fragment key = {`${actor}-${getRandomInteger(RandomKey.Lower, RandomKey.Upper)}`}>
      {actor} <br/>
    </Fragment>
  ));


  return (
    <div className="film-card__text film-card__row">
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Director</strong>
          <span className="film-card__details-value">{director}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Starring</strong>
          <span className="film-card__details-value">{actorOutput}
          </span>
        </p>
      </div>

      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Run Time</strong>
          <span className="film-card__details-value">{getTime(runTime)}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Genre</strong>
          <span className="film-card__details-value">{genre}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Released</strong>
          <span className="film-card__details-value">{year}</span>
        </p>
      </div>
    </div>
  );
}

export default MovieDetails;
