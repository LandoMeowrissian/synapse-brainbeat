const PlayButton = ({ playing, handlePlayButton }) => (
  <button id="play-button" onClick={handlePlayButton}>
    {playing ? 'Stop' : 'Start'}
  </button>
);

export default PlayButton;
