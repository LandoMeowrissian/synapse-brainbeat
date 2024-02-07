import * as Tone from "tone";
import { useState } from "react";

const Looper = () => {
  const [started, setStarted] = useState(false);
  const bassSynth = new Tone.MembraneSynth({
    pitchDecay: 0.05
  }).toDestination();

  const loop = (time) => {
    bassSynth.triggerAttackRelease("A0", "8n", time);
  };

  const interval = "16n";
  const steps = new Tone.Loop(loop, interval); // 16n === notes per measure

  const startAudio = async () => {
    await Tone.Transport.start();
    steps.start(0);
    setStarted(true);
    console.log(steps);
  };

  const stopAudio = () => {
    Tone.Transport.stop();
    Tone.Transport.cancel();
    setStarted(false);
    console.log("stopped running");
  };

  return (
    <div>
      <button onClick={startAudio}>Start Audio</button>
      <button onClick={stopAudio}>Stop Audio</button>
    </div>
  );
};

export default Looper;
