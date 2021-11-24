import MovieThumbnails from './movie-thumbnails';
import { MatchingComponent } from '../const/const';
import { MovieInfo } from '../types/types';

function CatalogMovieThumbnails(props: {movieList:MovieInfo[], componentEqual: string}):JSX.Element {
  const {movieList, componentEqual} = props;

  switch(componentEqual) {
    case MatchingComponent.MovieCard: {
      return(
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <div className="catalog__films-list">
            {movieList
              .map((film)=> <MovieThumbnails film= {film} key= {film.id} />)}
          </div>
        </section>
      );
    }
    case MatchingComponent.Mylist: {
      return(
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <div className="catalog__films-list">
            {movieList
              .map((film) => <MovieThumbnails film= {film} key= {film.id} />)}
          </div>
        </section>
      );
    }
    default : {
      throw new Error('This component does not contain information about this MatchingComponent');
    }
  }
}

export default CatalogMovieThumbnails;


