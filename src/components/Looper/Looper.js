import * as Tone from "tone";
import { useState } from "react";

const Looper = () => {
  const [started, setStarted] = useState(false);
  const kick = new Tone.MembraneSynth({
    pitchDecay: 0.05
  }).toDestination();

  const playKick = (time) => {
    kick.triggerAttackRelease("A0", "4n", time);
    console.log(time)
  };

  const synth = new Tone.AMSynth().toDestination();

  const playSynth = (time) => {
    synth.triggerAttackRelease("A4", "4n", time);
  }
 
  const interval = "8n";
  const iterations = 2;
  const steps = new Tone.Loop(playKick, interval); // 16n === notes per measure

  const startAudio = async () => {
    await Tone.Transport.start();
    steps.start(0);
    setStarted(true);
    console.log('started', interval);
  };

  const stopAudio = () => {
    Tone.Transport.stop();
    Tone.Transport.cancel();
    setStarted(false);
    console.log("stopped");
  };

  return (
    <div>
      <button onClick={startAudio}>Start Audio</button>
      <button onClick={stopAudio}>Stop Audio</button>
    </div>
  );
};

export default Looper;
