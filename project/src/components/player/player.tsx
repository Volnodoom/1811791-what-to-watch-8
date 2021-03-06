import { useSelector } from 'react-redux';
import { IdParam } from '../types/types';
import * as selectors from '../../store/selectors';
import { Redirect, useParams } from 'react-router';
import { usePlayer } from '../../hooks/use-player';
import { getTimeForPlayer } from '../../utils/common';
import LoadingScreen from '../loading-screen/loading-screen';
import { State } from '../types/state';
import { AppRoute } from '../const/const';

const ONE_HUNDRED_PERCENT = 100;

type PlayerProps = {
  onExitClick: (id: string | number) => void,
}

function Player(props: PlayerProps):JSX.Element {
  const {onExitClick} = props;
  const { id } = useParams<IdParam>();
  const film = useSelector((state:State) => selectors.getMovieById(state, id));

  const {
    playerRef,
    handleTogglePlayPause,
    handleFullScreen,
    totalTime,
    currentTime,
    handleTimeUpdate,
    movieProgress,
    isLoading,
    isPlayButton,
  } = usePlayer();

  if (!film) {
    return <Redirect to={AppRoute.PageIsNotAvailable}/>;
  }

  const {srcVideo, backgroundImg } = film;

  return(
    <div className="player">
      {isLoading && <LoadingScreen />}
      <video
        src={srcVideo}
        className="player__video"
        poster={backgroundImg}
        ref={playerRef}
        onTimeUpdate={handleTimeUpdate}
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

            <progress
              className="player__progress"
              value={movieProgress}
              max="100"
            >
            </progress>

            <div
              className="player__toggler"
              style={{left: `${currentTime*ONE_HUNDRED_PERCENT/totalTime}%`}}
            >Toggler
            </div>

          </div>

          <div className="player__time-value">
            {getTimeForPlayer(totalTime, currentTime)}
          </div>
        </div>

        <div className="player__controls-row">

          <button
            type="button"
            className="player__play"
            onClick={handleTogglePlayPause}
          >
            {isPlayButton
              ?
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              :
              <svg viewBox="0 0 14 21" width="14" height="21">
                <use xlinkHref="#pause"></use>
              </svg>}
            <span>{isPlayButton ? 'Play' : 'Pause'}</span>
          </button>

          <div className="player__name">{film.title}</div>

          <button
            type="button"
            className="player__full-screen"
            onClick={handleFullScreen}
          >
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
