import { useEffect, useRef } from 'react';

const DELAY_IN_PLAY = 1000;
type VideoPlayerProps = {
  scrPreviewVideo: string,
  previewImg: string,
  isPlaying: boolean,
}

function VideoPlayer({scrPreviewVideo, previewImg, isPlaying}:VideoPlayerProps): JSX.Element {


  const videoRef = useRef<HTMLVideoElement | null> (null);

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

  return (
    <video
      src={scrPreviewVideo}
      ref={videoRef}
      poster={previewImg}
      width="280"
      height="175"
      style={{objectFit: 'cover'}}
      muted
    />
  );
}

export default VideoPlayer;
