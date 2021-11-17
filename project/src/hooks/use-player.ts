import { MutableRefObject, useEffect, useState } from 'react';

type UserPlayHook = [
  isPlaying: boolean,
  handleDesignPlayPause: () => void,
]

export const usePlayer = (playerRef: MutableRefObject<HTMLVideoElement | null>, id: string): UserPlayHook => {
  const[isPlaying, setIsPlaying] = useState<boolean>(true);
  const[isLoading, setIsLoading] = useState<boolean>(true);

  const handleDesignPlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (playerRef.current !== null) {
      playerRef.current.onloadeddata = () => setIsLoading(false);
      // eslint-disable-next-line no-console
      console.log(isLoading);
    }

    return () => {
      if (playerRef.current !== null) {
        playerRef.current.onloadeddata = null;
        playerRef.current = null;
      }
    };
  }, [isLoading]);


  const handlePlayPauseButton = () => {
    handleDesignPlayPause();
    if (playerRef.current !== null && isPlaying === false) {
      playerRef.current.play();
    }
    if (playerRef.current !== null && isPlaying === true) {
      playerRef.current.pause();
    }
  };


  return [
    isPlaying,
    handleDesignPlayPause,
  ];
};
