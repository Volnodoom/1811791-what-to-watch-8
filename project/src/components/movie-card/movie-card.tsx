import { useParams } from 'react-router';
import Error404 from '../routing/Error404';
import { KindOfButton, AppRoute, CardState, MatchingComponent, BACKEND_URL, APIRoute, REQUEST_TIMEOUT } from '../const/const';
import { Comment, IdParam, MovieInfo } from '../types/types';
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
import { useEffect, useState } from 'react';
import axios from 'axios';

type MovieCardProps = {
  movieList:MovieInfo[],
  authorizationStatus: string,
  cardDemonstrate: string,
}

function MovieCard(props: MovieCardProps):JSX.Element {
  const {cardDemonstrate} = props;
  const { id } = useParams() as IdParam;
  const film = props.movieList.find((filmCard) => filmCard.id === Number(id));
  const [feedback, setFeedback] = useState<Comment[]>([]);

  useEffect(() => {
    axios.get<Comment[]>(`${BACKEND_URL}${APIRoute.CommentsGet(Number(id))}`, {timeout: REQUEST_TIMEOUT})
      .then((response) => setFeedback(response.data))
      .catch(() => {throw new Error('It is a bad response concerning "comments-data request"');});
  },[id]);

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
              {cardDemonstrate === CardState.Reviews ? <MovieReviews comments={feedback}/> : ''}
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
