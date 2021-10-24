import { MovieInfo } from '../types/types';
import MainGenreFilters from './main-genre-filters';
import MainMovieFrame from './main-movie-frame';
import Footer from '../general/footer';
import CatalogMovieThumbnails from '../general/catalog-movie-thumbnails';
import { MatchingComponent } from '../const/const';

function Main(props: {film: MovieInfo, movieList:MovieInfo[], authorizationStatus: string}): JSX.Element {
  return(
    <>
      <MainMovieFrame film ={props.film} authorizationStatus={props.authorizationStatus}/>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <MainGenreFilters />
          <CatalogMovieThumbnails movieList={props.movieList} componentEqual={MatchingComponent.Main}/>
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
