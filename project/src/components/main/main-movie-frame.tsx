import { KindOfButton, appRoute } from '../const/const';
import { MovieInfo } from '../types/types';
import MovieCardButtons from '../general/movie-card-buttons';
import Header from '../general/header';

function MainMovieFrame(props: {film: MovieInfo, authorizationStatus: string,}): JSX.Element {
  const {
    backgroundImg,
    poster,
    title,
    genre,
    year,
    isFavorite,
  } = props.film;

  return (
    <section className="film-card">
      <div className="film-card__bg">
        <img src={backgroundImg} alt={title} />
      </div>
      <Header authorizationStatus={props.authorizationStatus} wtwHidden appRoute={appRoute.SignIn}/>
      <div className="film-card__wrap">
        <div className="film-card__info">
          <div className="film-card__poster">
            <img src={poster} alt={title} width="218" height="327" />
          </div>
          <div className="film-card__desc">
            <h2 className="film-card__title">{title}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{genre}</span>
              <span className="film-card__year">{year}</span>
            </p>
            <div className="film-card__buttons">
              <MovieCardButtons buttonKind={KindOfButton.Play} />
              <MovieCardButtons buttonKind={isFavorite ? KindOfButton.InMyList : KindOfButton.AddToMyList} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainMovieFrame;
