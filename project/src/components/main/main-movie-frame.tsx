import { MovieProps, Poster } from '../const/const';
import MovieCardButtons from '../general/movie-card-buttons';
import TopCover from '../general/top-cover';

const TopCoverValues = {
  wtwHidden: true,
  isLogged: true,
};

function MainMovieFrame(film: MovieProps): JSX.Element {
  const {
    poster,
    altPoster,
    title,
    genre,
    year,
  } = film;

  const {
    isInMyList,
    hasAddReview,
  } = film.privateInfoWeb;

  return (
    <section className="film-card">
      <div className="film-card__bg">
        <img src={poster} alt={altPoster} />
      </div>
      {TopCover(TopCoverValues)}
      <div className="film-card__wrap">
        <div className="film-card__info">
          <div className="film-card__poster">
            <img src={poster} alt={altPoster} width={Poster.BigWidth} height={Poster.BigHeight} />
          </div>
          <div className="film-card__desc">
            <h2 className="film-card__title">{title}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{genre}</span>
              <span className="film-card__year">{year}</span>
            </p>
            {MovieCardButtons({isInMyList, hasAddReview})}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainMovieFrame;
