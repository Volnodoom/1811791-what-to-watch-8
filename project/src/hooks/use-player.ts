import { MouseEvent, MutableRefObject, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import { IdParam } from '../components/types/types';
import { getProgress } from '../utils/common';

type UserPlayHook = {
  playerRef: MutableRefObject<HTMLVideoElement | null>,
  handleTogglePlayPause: () => void,
  fullScreen: () => void,
  totalTime: number,
  currentTime: number,
  handleTimeUpdate: () => void,
  movieProgress: number,
  isLoading: boolean,
  isPlayButton: boolean,
  handleManualChangeVideoProgress: (evt: MouseEvent<HTMLProgressElement>) => void,
}

const START_TIME = 0;

export const usePlayer = (): UserPlayHook => {
  const playerRef = useRef<HTMLVideoElement> (null);
  const { id } = useParams<IdParam>();
  const[isPlaying, setIsPlaying] = useState<boolean>(false);
  const[isPlayButton, setIsPlayButton] = useState<boolean>(true);
  const[isLoading, setIsLoading] = useState<boolean>(true);
  const[currentTime, setCurrentTime] = useState<number>(START_TIME);
  const[totalTime, setTotalTime] = useState<number>(START_TIME);
  const[movieProgress, setMovieProgress] = useState<number>(START_TIME);

  const handleTogglePlayPause = () => {
    setIsPlayButton((prevState) => !prevState);
    setIsPlaying((prevState) =>!prevState);
  };

  useEffect(() => {
    if (playerRef.current !== null) {
      playerRef.current.onloadeddata = () => setIsLoading(false);
    }
  }, [id]);

  useEffect(() => {
    if (playerRef.current === null) {
      return;
    }

    if (isPlaying) {
      playerRef.current.play();
      setTotalTime(Math.round(playerRef.current.duration));
      return;
    }

    playerRef.current.pause();
  }, [isPlaying, playerRef, currentTime]);

  const fullScreen = () => {
    if (!playerRef.current) {
      return;
    }

    playerRef.current.requestFullscreen();
  };

  const handleTimeUpdate = () => {
    if (!playerRef.current) {
      return;
    }
    setCurrentTime(playerRef.current.currentTime);
    setMovieProgress(getProgress(totalTime, currentTime));
  };

  const handleManualChangeVideoProgress = (evt: MouseEvent<HTMLProgressElement>) => {
    if (!playerRef.current) {
      return;
    }
    // const target = evt.currentTarget.value
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const BBB = (evt.target as HTMLProgressElement).value;
    // const manualChange = target.
    // eslint-disable-next-line no-debugger
    debugger;
    setCurrentTime(Number((evt.target as HTMLProgressElement).value));
    setMovieProgress(getProgress(totalTime, currentTime));
  };

  return {
    playerRef,
    handleTogglePlayPause,
    fullScreen,
    totalTime,
    currentTime,
    handleTimeUpdate,
    movieProgress,
    isLoading,
    isPlayButton,
    handleManualChangeVideoProgress,
  };
};
