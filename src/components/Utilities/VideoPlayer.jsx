'use client';

import { X, YoutubeLogo } from '@phosphor-icons/react';
import { useState } from 'react';
import Youtube from 'react-youtube';

const VideoPlayer = ({ youtubeId }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleVideoPlayer = () => {
    setIsOpen((prevStates) => !prevStates);
  };

  const option = {
    width: '300',
    height: '250',
  };

  const Player = () => {
    return (
      <div className="fixed bottom-2 right-2">
        <button onClick={handleVideoPlayer} className="text-color-primary float-right px-3 mb-1">
          <X size={32} />
        </button>
        <Youtube videoId={youtubeId} onReady={(event) => event.target.pauseVideo()} opts={option} onError={() => alert('Video is broken, please try another.')} />
      </div>
    );
  };

  const ButtonOpenPlayer = () => {
    return (
      <button onClick={handleVideoPlayer} className="fixed bottom-5 right-5 text-color-primary">
        <YoutubeLogo size={32} />
      </button>
    );
  };

  return isOpen ? <Player /> : <ButtonOpenPlayer />;
};

export default VideoPlayer;
