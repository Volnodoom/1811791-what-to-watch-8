import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../const/const';
import { MovieInfo } from '../types/types';

const DELAY_IN_PLAY = 1000;

function MovieThumbnails(props:{film:MovieInfo, activeStateHandler: (value: number | null) => void}): JSX.Element {
  const {
    previewImg,
    title,
    id,
    previewVideo,
  } = props.film;

  const {activeStateHandler} = props;

  const [, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  const videoRef = useRef<HTMLVideoElement | null> (null);

  useEffect(() => {
    if (videoRef.current !== null) {
      videoRef.current.onloadeddata = () => setIsLoading(false);
    }

    return () => {
      if(videoRef.current !== null) {
        videoRef.current.onloadeddata = null;
        videoRef.current = null;
      }
    };
  }, [previewVideo]);

  useEffect(() => {
    if(videoRef.current === null) {
      return;
    }

    if (isPlaying) {
      const timeout = setTimeout(() => {
        if (videoRef.current !== null) {
          videoRef.current.play();
        }
      }, DELAY_IN_PLAY);

      return () => clearTimeout(timeout);
    }

    videoRef.current.load();
  }, [isPlaying]);

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
        <video
          src={previewVideo}
          ref={videoRef}
          poster={previewImg}
          width="280"
          height="175"
          style={{objectFit: 'cover'}}
          muted
        />
        {/* <img src={previewImg} alt={title} width="280" height="175" /> */}
      </div>
      <h3 className="small-film-card__title">
        <Link to={AppRoute.Movie(id)} className="small-film-card__link">{title}</Link>
      </h3>
    </article>
  );
}

export default MovieThumbnails;
