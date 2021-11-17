import { useSelector } from 'react-redux';
import { IdParam } from '../types/types';
import * as selectors from '../../store/selectors';
import { useParams } from 'react-router';
import Error404 from '../routing/Error404';
import { usePlayer } from '../../hooks/use-player';
import { useRef } from 'react';
// import LoadingScreen from '../loading-screen/loading-screen';

type PlayerProps = {
  onExitClick: (id: string | number) => void,
}

function Player(props: PlayerProps):JSX.Element {
  const {onExitClick} = props;
  const { id } = useParams<IdParam>();
  const playerRef = useRef<HTMLVideoElement | null> (null);
  const film = useSelector(selectors.getFilms).find((filmCard) => filmCard.id === Number(id));

  const [
    isPlaying,
    handleDesignPlayPause,
  ] = usePlayer(playerRef, id);


  if (!film) {
    return (
      <Error404 />
    );
  }

  // if (isLoading) {
  //   return (
  //     <LoadingScreen />
  //   );
  // }

  const {srcVideo, poster} = film;

  return(
    <div className="player">
      <video
        src={srcVideo}
        className="player__video"
        poster={poster}
        ref={playerRef}
      >
      </video>

      <button
        type="button"
        className="player__exit"
        onClick={() => onExitClick(Number(id))}
      >Exit
      </button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler" >Toggler</div>
          </div>
          <div className="player__time-value">1:30:29</div>
        </div>

        <div className="player__controls-row">

          <button
            type="button"
            className="player__play"
            onClick={handlePlayPauseButton}
          >
            {isPlaying
              ?
              <>
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </>
              :
              <>
                <svg viewBox="0 0 14 21" width="14" height="21">
                  <use xlinkHref="#pause"></use>
                </svg>
                <span>Pause</span>
              </>}
          </button>

          <div className="player__name">Transpotting</div>

          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Player;
