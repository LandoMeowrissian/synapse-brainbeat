import { useState } from "react";
import * as Tone from "tone";
import Grid from "../../Grid/Grid";
import "./Synth.scss";

function Synth() {
  const [scaleRoot, setScaleRoot] = useState("C");
  const [isToneStarted, setIsToneStarted] = useState(false);
  const startAudio = async () => {
    await Tone.start();
    setIsToneStarted(true);
  };
  return (
    <div className="synth-start">
      {!isToneStarted && (
        <button className="synth-start__button" onClick={startAudio} id="start">
          Start Audio
        </button>
      )}
      {isToneStarted && (
        // Render Grid with scaleRoot and setScaleRoot as props
        <Grid scaleRoot={scaleRoot} setScaleRoot={setScaleRoot} />
      )}
    </div>
  );
}
export default Synth;
