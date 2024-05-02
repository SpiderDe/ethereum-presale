import { useState } from 'react';

function VideoPlayPauseButton({handlePlay, isPlayed}) {
  const [isPlaying, setIsPlaying] = useState(isPlayed);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    handlePlay(!isPlaying);
  };

  return (
    <button
      className="relative flex items-center justify-center w-12 h-12 bg-blue-500 rounded-full focus:outline-none"
      onClick={togglePlay}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 text-white"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        {isPlaying ? (
          <path
            fillRule="evenodd"
            d="M5 3h3v14H5V3zm7 0h3v14h-3V3z"
          />
        ) : (
          <path
            fillRule="evenodd"
            d="M8 5v10l8-5-8-5z"
          />
        )}
      </svg>
      {!isPlaying && (
        <div className="absolute w-12 h-12 bg-blue-500 rounded-full opacity-50 animate-ping"></div>
      )}
    </button>
  );
}

export default VideoPlayPauseButton;