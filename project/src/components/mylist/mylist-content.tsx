import { MovieInfo } from '../const/types';
import MovieThumbnails from '../general/movie-thumbanail';

function MylistContent(props: {film: MovieInfo}): JSX.Element {
  return(
    <>
      {new Array(9)
        .fill('')
      // eslint-disable-next-line react/no-array-index-key
        .map((line, index) => <MovieThumbnails film={props.film} key = {index} />)}
    </>
  );
}

export default MylistContent;

