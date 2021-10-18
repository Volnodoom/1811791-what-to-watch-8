import { Link } from 'react-router-dom';
import { AppRoute } from '../const/const';
import { MovieInfo } from '../types/types';


function MovieThumbnails(props:{film:MovieInfo, activeState: React.Dispatch<React.SetStateAction<number | null>>}): JSX.Element {
  const {
    previewImg,
    title,
    id,
  } = props.film;

  const {activeState} = props;

  const handleMouseOn = () => {
    activeState(() => id);
  };

  const handleMouseOut = () => {
    activeState(() => null);
  };

  return (
    <article className="small-film-card catalog__films-card" onMouseEnter={handleMouseOn} onMouseLeave={handleMouseOut}>
      <div className="small-film-card__image">
        <img src={previewImg} alt={title} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link to={AppRoute.Movie(id)} className="small-film-card__link">{title}</Link>
      </h3>
    </article>
  );
}

export default MovieThumbnails;
