import { MovieInfo } from '../types/types';
import MovieThumbnails from './movie-thumbnails';
import { useState } from 'react';
import { MatchingComponent } from '../const/const';

function CatalogMovieThumbnails(props: {movieList:MovieInfo[], componentEqual: string}):JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeFilm, setActiveFilm] = useState<number | null>(null);

  switch(props.componentEqual) {
    case MatchingComponent.Main: {
      return(
        <div className="catalog__films-list">
          {props.movieList
            .map((film) => <MovieThumbnails film={film} key={film.id} activeState={setActiveFilm}/>)}
        </div>
      );
    }
    case MatchingComponent.MovieCard: {
      return(
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <div className="catalog__films-list">
            {props.movieList
              .map((film)=> <MovieThumbnails film= {film} key= {film.id} activeState={setActiveFilm}/>)}
          </div>
        </section>
      );
    }
    case MatchingComponent.Mylist: {
      return(
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <div className="catalog__films-list">
            {props.movieList
              .map((film) => <MovieThumbnails film= {film} key= {film.id} activeState={setActiveFilm}/>)}
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


