import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../const/const';
import VideoPlayer from '../player/video-player';
import { MovieInfo } from '../types/types';
import {useHistory} from 'react-router-dom';

function MovieThumbnails(props:{film:MovieInfo}): JSX.Element {
  const {
    previewImg,
    title,
    id,
    scrPreviewVideo,
  } = props.film;

  const history = useHistory();

  const [isPlaying, setIsPlaying] = useState(false);

  const handleMouseOn = () => {
    setIsPlaying(true);
  };

  const handleMouseOut = () => {
    setIsPlaying(false);
  };

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={handleMouseOn}
      onMouseLeave={handleMouseOut}
      onClick={() => history.push(AppRoute.Movie(id))}
    >
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

export default React.memo(MovieThumbnails);
