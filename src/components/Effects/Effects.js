import * as Tone from "tone";
import { useState } from "react";

const Effects = () => {
  const [isDelayActive, setDelayActive] = useState(false);
  const [isDistortionActive, setDistortionActive] = useState(false);
  const [isReverbActive, setReverbActive] = useState(false);

  const synth = new Tone.Synth();
  const delay = new Tone.PingPongDelay("4N", 0.2).toDestination();
  const distortion = new Tone.Distortion(0.2).toDestination();
  const reverb = new Tone.JCReverb(0.8).toDestination();
  const phaser = new Tone.Phaser({
    frequency: 12,
    octaves: 5,
    baseFequency: 1000
  }).toDestination();

  const toggleDelay = () => {
    setDelayActive(!isDelayActive);
    console.log(isDelayActive);
    if (isDelayActive) {
      synth.disconnect(delay);
    } else {
      synth.connect(delay);
    }
  }

  const toggleDistortion = () => {
    setDistortionActive(!isDistortionActive);
    if (!isDistortionActive) {
      distortion.wet.value = 0;
    } else {
      synth.connect(distortion, Tone.Destination);
    }
  };



  return {phaser, feedbackDelay}


  const toggleReverb = () => {
    setReverbActive(!isReverbActive);
    if (isReverbActive) {
      synth.disconnect(reverb);
    } else {
      synth.chain(reverb);
    }
  }

  const handleClickSynth = () => {
    const synth = new Tone.Synth().toDestination();
    Tone.start();
    synth.triggerAttackRelease("C4", "8n");
  };

  return (
    <div>
      <button onClick={handleClickSynth}>play</button>
      {/* <button onClick={toggleDelay}>{isDelayActive ? "off" : "on"} delay</button> */}
      <button onClick={toggleDistortion}>
        {isDistortionActive ? "off" : "on"}
      </button>
      {/* <button onClick={toggleReverb}>{ isReverbActive ? "off" : "on" }</button>  */}
    </div>
  );
};

export default Effects;
