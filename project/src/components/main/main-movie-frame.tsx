import { KindOfButton, LogoUrl } from '../const/const';
import { MovieInfo } from '../types/types';
import MovieCardButtons from '../general/movie-card-buttons';
import Header from '../general/header';

function MainMovieFrame(props: {film: MovieInfo}): JSX.Element {
  const {
    backgroundImg,
    backgroundImgAlt,
    poster,
    altPoster,
    title,
    genre,
    year,
  } = props.film;

  const {
    isInMyList,
  } = props.film.privateInfoWeb;

  return (
    <section className="film-card">
      <div className="film-card__bg">
        <img src={backgroundImg} alt={backgroundImgAlt} />
      </div>
      <Header film={props.film} wtwHidden logoUrl={LogoUrl.SignIn}/>
      <div className="film-card__wrap">
        <div className="film-card__info">
          <div className="film-card__poster">
            <img src={poster} alt={altPoster} width="218" height="327" />
          </div>
          <div className="film-card__desc">
            <h2 className="film-card__title">{title}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{genre}</span>
              <span className="film-card__year">{year}</span>
            </p>
            <div className="film-card__buttons">
              <MovieCardButtons buttonKind={KindOfButton.Play} />
              <MovieCardButtons buttonKind={isInMyList ? KindOfButton.InMyList : KindOfButton.AddToMyList} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainMovieFrame;
