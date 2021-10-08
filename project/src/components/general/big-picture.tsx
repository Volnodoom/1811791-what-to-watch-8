import { Poster } from '../const/const';
import { MovieInfo } from '../const/types';

function BigPicture(props: {film: MovieInfo, class:string}):JSX.Element {
  const {
    poster,
    altPoster,
  } = props.film;

  return (
    <div className= {props.class}>
      <img src={poster} alt={altPoster} width={Poster.BigWidth} height={Poster.BigHeight} />
    </div>
  );
}

export default BigPicture;
