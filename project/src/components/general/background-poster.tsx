import { MovieInfo } from '../types/types';

function BackgroundPoster(props: {film: MovieInfo}):JSX.Element {
  const {poster, altPoster} = props.film;

  return (
    <div className="film-card__bg">
      <img src={poster} alt={altPoster} />
    </div>
  );
}

export default BackgroundPoster;
