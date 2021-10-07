import { KindOfButton, LogoUrl, Poster, WTWHiddenLine } from '../const/const';
import { MovieInfo } from '../const/types';
import MovieCardButtons from '../general/movie-card-buttons';
import TopCover from '../general/top-cover';

function MainMovieFrame(props: {film: MovieInfo}): JSX.Element {
  const {
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
        <img src={poster} alt={altPoster} />
      </div>
      <TopCover film= {props.film} wtwHidden = {WTWHiddenLine.MainPage.wtwHidden} logoUrl= {LogoUrl.Main}/>
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
            <div className="film-card__buttons">
              <MovieCardButtons buttonKind= {KindOfButton.Play} />
              <MovieCardButtons buttonKind= {isInMyList ? KindOfButton.InMyList : KindOfButton.AddToMyList} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainMovieFrame;
