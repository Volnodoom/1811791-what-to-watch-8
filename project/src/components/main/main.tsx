import { MovieInfo } from '../types/types';
import MainGenreFilters from './main-genre-filters';
import MovieThumbnails from '../general/movie-thumbanail';
import MainMovieFrame from './main-movie-frame';
import Footer from '../general/footer';

function Main(props: {film: MovieInfo, authorizationStatus: string}): JSX.Element {
  return(
    <>
      <MainMovieFrame film ={props.film} authorizationStatus={props.authorizationStatus}/>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <MainGenreFilters />
          <div className="catalog__films-list">
            {new Array(20)
              .fill('')
            // eslint-disable-next-line react/no-array-index-key
              .map((line, index) => <MovieThumbnails film={props.film} key = {index} />)}
          </div>
          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default Main;
