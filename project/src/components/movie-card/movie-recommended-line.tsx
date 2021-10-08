import { MovieInfo } from '../const/types';
import MovieThumbnails from '../general/movie-thumbanail';

function MovieRecommendedLine(props: {film:MovieInfo}):JSX.Element {
  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>
      <div className="catalog__films-list">
        {new Array(4)
          .fill('')
          // eslint-disable-next-line react/no-array-index-key
          .map((line, index)=> <MovieThumbnails film= {props.film} key= {index}/>)}
      </div>
    </section>
  );
}

export default MovieRecommendedLine;
