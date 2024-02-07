import * as Tone from "tone";
import { useState } from "react";

const Looper = () => {
  const [isToneStarted, setIsToneStarted] = useState(false);
  const bassSynth = new Tone.MembraneSynth().toDestination();

  const song = (time) => {
    bassSynth.triggerAttackRelease('C1', '8n', time)
    Tone.now();
    console.log(time)
  }
  const loopBeat = new Tone.Loop(song, "4n");
  Tone.Transport.start();
  loopBeat.start(0);

  const startAudio = async () => {
    await Tone.start();
    setIsToneStarted(true);
    console.log('is running')
  };

  const stopAudio = () => {
    Tone.Transport.stop();
    loopBeat.stop();
   
    console.log('stopped running')
  }
 
  return (
    <div>
      <button onClick={startAudio} >Start Audio</button>
    <button onClick={stopAudio} >Stop Audio</button>
    </div>
    
  )
}

export default Looper;
