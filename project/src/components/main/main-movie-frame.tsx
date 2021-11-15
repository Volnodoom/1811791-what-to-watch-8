import { KindOfButton } from '../const/const';
import { MovieInfo } from '../types/types';
import Header from '../general/header';
import MoviePlayButton from '../general/movie-play-button';
import MovieAddInListButtons from '../general/movie-add-in-list-buttons';

type MainMovieFrameProps = {
  promoFilm?: MovieInfo,
  onPlayFilm: (id: string | number) => void,
}

function MainMovieFrame(props: MainMovieFrameProps): JSX.Element {
  if (props.promoFilm === undefined) {
    return (
      <p>No promo movies</p>
    );
  }

  const {
    id,
    backgroundImg,
    poster,
    title,
    genre,
    year,
    isFavorite,
  } = props.promoFilm;

  const {onPlayFilm} = props;

  return (
    <section className="film-card">
      <div className="film-card__bg">
        <img src={backgroundImg} alt={title} />
      </div>
      <Header wtwHidden />
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
              <MoviePlayButton filmId={id} onPlayFilm={onPlayFilm}/>
              {isFavorite
                ? <MovieAddInListButtons buttonKind={KindOfButton.InMyList} />
                : <MovieAddInListButtons buttonKind={KindOfButton.AddToMyList} />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainMovieFrame;
