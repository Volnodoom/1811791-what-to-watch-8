import { useParams } from 'react-router';
import Error404 from '../routing/Error404';
import { KindOfButton, AppRoute, CardState, MatchingComponent } from '../const/const';
import { IdParam, MovieInfo } from '../types/types';
import BasicDescriptionPoster from '../general/basic-description-poster';
import Footer from '../general/footer';
import Header from '../general/header';
import MovieCardButtons from '../general/movie-card-buttons';
import MovieNavigation from './movie-navigation';
import MovieOverview from './movie-overview';
import MovieDetails from './movie-details';
import MovieReviews from './movie-reviews';
import { Link } from 'react-router-dom';
import CatalogMovieThumbnails from '../general/catalog-movie-thumbnails';
import { useEffect } from 'react';
import { fetchCommentsToMovie } from '../../store/api-actions';
import { bindActionCreators, Dispatch } from 'redux';
import { Actions } from '../types/action-types';
import { connect, ConnectedProps } from 'react-redux';

type MovieCardProps = {
  movieList:MovieInfo[],
  authorizationStatus: string,
  cardDemonstrate: string,
}

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => bindActionCreators({
  onLoadComments: fetchCommentsToMovie,
}, dispatch);

const connector = connect(null, mapDispatchToProps);

type PropsFromReact = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromReact & MovieCardProps;


function MovieCard(props: ConnectedComponentProps):JSX.Element {
  const {cardDemonstrate, onLoadComments} = props;
  const { id } = useParams() as IdParam;
  const film = props.movieList.find((filmCard) => filmCard.id === Number(id));

  useEffect(() => {
    onLoadComments(Number(id));
  });

  if (!film) {
    return (
      <Error404 />
    );
  }

  const {backgroundImg, poster, title, isFavorite} = film;

  return(
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={backgroundImg} alt={title} />
          </div>

          <Header authorizationStatus={props.authorizationStatus} wtwHidden />

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <BasicDescriptionPoster  film= {film}/>
              <div className="film-card__buttons">
                <MovieCardButtons buttonKind= {KindOfButton.Play}/>
                {isFavorite ? <MovieCardButtons buttonKind= {KindOfButton.InMyList}/> : <MovieCardButtons buttonKind= {KindOfButton.AddToMyList}/>}
                <Link to={AppRoute.AddReview(film.id)} className="btn film-card__button">Add review</Link>
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
              {cardDemonstrate === CardState.Overview ? <MovieOverview film={film} /> : ''}
              {cardDemonstrate === CardState.Details ? <MovieDetails film={film}/> : ''}
              {cardDemonstrate === CardState.Reviews ? <MovieReviews /> : ''}
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

export {MovieCard};
export default connector(MovieCard);
