import { MovieInfo } from '../types/types';

function BigPicture(props: {film: MovieInfo, className:string}):JSX.Element {
  const {
    poster,
    altPoster,
  } = props.film;

  return (
    <div className= {props.className}>
      <img src={poster} alt={altPoster} width="218" height="327" />
    </div>
  );
}

export default BigPicture;
