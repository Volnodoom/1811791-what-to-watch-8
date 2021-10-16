import { MovieInfo } from '../types/types';
import MovieThumbnails from '../general/movie-thumbanail';

function MovieRecommendedLine(props: {movieList:MovieInfo[]}):JSX.Element {
  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>
      <div className="catalog__films-list">
        {props.movieList
          .map((film)=> <MovieThumbnails film= {film} key= {film.id}/>)}
      </div>
    </section>
  );
}

export default MovieRecommendedLine;
