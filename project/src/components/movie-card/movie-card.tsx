import { useParams } from 'react-router';
import Error404 from '../routing/Error404';
import { AppRoute, AuthorizationStatus, CardState, MatchingComponent } from '../const/const';
import { IdParam, MovieInfo } from '../types/types';
import BasicDescriptionPoster from '../general/basic-description-poster';
import Footer from '../general/footer';
import Header from '../general/header';
import MovieNavigation from './movie-navigation';
import MovieOverview from './movie-overview';
import MovieDetails from './movie-details';
import MovieReviews from './movie-reviews';
import { Link } from 'react-router-dom';
import CatalogMovieThumbnails from '../general/catalog-movie-thumbnails';
import MoviePlayButton from '../general/movie-play-button';
import MovieAddInListButtons from '../general/movie-add-in-list-buttons';
import { useSelector } from 'react-redux';
import * as selectors from '../../store/selectors';
import { State } from '../types/state';

type MovieCardProps = {
  movieList:MovieInfo[],
  cardTab: string,
  onPlayVideoClick: (id: string | number) => void,
}

function MovieCard(props: MovieCardProps):JSX.Element {
  const {cardTab} = props;
  const onPlayFilm = props.onPlayVideoClick;
  const { id } = useParams<IdParam>();
  const film = useSelector((state:State) => selectors.getMovieById(state, id));
  const userStatus = useSelector(selectors.getAuthorizationStatus);

  const authStatus = () => {
    if (userStatus === AuthorizationStatus.NoAuth) {
      return false;
    } else {
      return true;
    }
  };


  if (!film) {
    return (
      <Error404 />
    );
  }

  const {backgroundImg, poster, title} = film;

  return(
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={backgroundImg} alt={title} />
          </div>

          <Header wtwHidden />

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <BasicDescriptionPoster  film= {film}/>
              <div className="film-card__buttons">
                <MoviePlayButton filmId={id} onPlayFilm={onPlayFilm} />
                <MovieAddInListButtons filmId={id}/>
                {authStatus() && <Link to={AppRoute.AddReview(film.id)} className="btn film-card__button">Add review</Link>}
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={poster} alt={title} width="218" height="327" />
            </div>
            <div className="film-card__desc">
              <MovieNavigation />
              {cardTab === CardState.Overview ? <MovieOverview film={film} /> : ''}
              {cardTab === CardState.Details ? <MovieDetails film={film}/> : ''}
              {cardTab === CardState.Reviews ? <MovieReviews /> : ''}
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <CatalogMovieThumbnails movieList={props.movieList} componentEqual={MatchingComponent.MovieCard}/>
        <Footer />
      </div>
    </>
  );
}

export default MovieCard;
