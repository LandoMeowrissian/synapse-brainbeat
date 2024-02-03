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

  // const toggleDelay = () => {
  //   setDelayActive(!isDelayActive);
  //   if (!isDelayActive) {
  //     synth.chain(delay);
  //   } else {
  //     synth.disconnect(delay);
  //   }
  // }

  // const toggleDistortion = () => {
  //   setDistortionActive(!isDistortionActive);
  //   if (isDistortionActive) {
  //     synth.disconnect(distortion);
  //   } else {
  //     synth.chain(distortion);
  //   }
  // }

  // const toggleReverb = () => {
  //   setReverbActive(!isReverbActive);
  //   if (isReverbActive) {
  //     synth.disconnect(reverb);
  //   } else {
  //     synth.chain(reverb);
  //   }
  // }

  const handleClickSynth = () => {
    synth.triggerAttackRelease("C4", "8n")
    Tone.start();
  }

  return (
    <div>
      <button onClick={handleClickSynth}>play</button>
      {/* <button onClick={toggleDelay}>{isDelayActive ? "off" : "on"} delay</button>
      <button onClick={toggleDistortion}>{isDistortionActive ? "off" : "on"}</button>
      <button onClick={toggleReverb}>{ isReverbActive ? "off" : "on" }</button> */}
    </div>
  )


};

export default Effects;

//   const phaser = new Tone.Phaser({
//     frequency: 12,
//     octaves: 5,
//     baseFequency: 1000
//   }).toDestination();
//   const feedbackDelay = new Tone.FeedbackDelay("8n", 0.5).toDestination();

//   return {phaser, feedbackDelay}
