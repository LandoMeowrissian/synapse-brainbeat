const BpmController = ({ bpm, handleBpmChange }) => (
  <>
    <input
      type="range"
      id="bpm"
      min="60"
      max="240"
      value={bpm}
      onChange={(e) => handleBpmChange(e.target.value)}
    />
    <span>{bpm} BPM</span>
  </>
);

export default BpmController;
