import "./BPMSlider.scss";
const BPMSlider = () => {
  const [bpm, setBpm] = useState(120);

  const handleBpmChange = (newBpm) => {
    setBpm(newBpm);
    Tone.Transport.bpm.value = newBpm;
  };

  return (
    <div className="bpm-slider">
      <input
        type="range"
        id="bpm"
        min="60"
        max="240"
        value={bpm}
        onChange={(e) => onBpmChange(e.target.value)}
      />
      <span className="bpm-tempo"> {bpm} </span>
    </div>
  );
};

export default BPMSlider;
