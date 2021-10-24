import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../const/const';
import VideoPlayer from '../player/video';
import { MovieInfo } from '../types/types';

function MovieThumbnails(props:{film:MovieInfo, activeStateHandler: (value: number | null) => void}): JSX.Element {
  const {
    previewImg,
    title,
    id,
    scrPreviewVideo,
  } = props.film;

  const {activeStateHandler} = props;
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMouseOn = () => {
    activeStateHandler(id);
    setIsPlaying(true);
  };

  const handleMouseOut = () => {
    activeStateHandler(null);
    setIsPlaying(false);
  };

  return (
    <article className="small-film-card catalog__films-card" onMouseEnter={handleMouseOn} onMouseLeave={handleMouseOut}>
      <div className="small-film-card__image">
        <VideoPlayer
          scrPreviewVideo={scrPreviewVideo}
          previewImg={previewImg}
          isPlaying={isPlaying}
        />
      </div>
      <h3 className="small-film-card__title">
        <Link to={AppRoute.Movie(id)} className="small-film-card__link">{title}</Link>
      </h3>
    </article>
  );
}

export default MovieThumbnails;
