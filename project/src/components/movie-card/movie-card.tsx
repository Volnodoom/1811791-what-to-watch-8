import { KindOfButton, appRoute } from '../const/const';
import { MovieInfo } from '../types/types';
import BasicDescriptionPoster from '../general/basic-description-poster';
import Footer from '../general/footer';
import Header from '../general/header';
import MovieCardButtons from '../general/movie-card-buttons';
import MovieNavigation from './movie-navigation';
import MovieOverview from './movie-overview';
import MovieRecommendedLine from './movie-recommended-line';

function MovieCard(props: {film: MovieInfo, authorizationStatus: string,}):JSX.Element {
  const {backgroundImg, backgroundImgAlt, poster, altPoster} = props.film;
  const {isInMyList}= props.film.privateInfoWeb;

  return(
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={backgroundImg} alt={backgroundImgAlt} />
          </div>

          <Header authorizationStatus={props.authorizationStatus} wtwHidden appRoute= {appRoute.Main} />

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <BasicDescriptionPoster  film= {props.film}/>
              <div className="film-card__buttons">
                <MovieCardButtons buttonKind= {KindOfButton.Play}/>
                {isInMyList ? <MovieCardButtons buttonKind= {KindOfButton.InMyList}/> : <MovieCardButtons buttonKind= {KindOfButton.AddToMyList}/>}
                <a href="add-review.html" className="btn film-card__button">Add review</a>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={poster} alt={altPoster} width="218" height="327" />
            </div>
            <div className="film-card__desc">
              <MovieNavigation />
              <MovieOverview film={props.film} />
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <MovieRecommendedLine film={props.film}/>
        <Footer />
      </div>
    </>
  );
}

export default MovieCard;
