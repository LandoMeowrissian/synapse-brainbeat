import * as Tone from "tone";

const createDrums = () => {
  const kick = new Tone.MembraneSynth({
    pitchDecay: 0.055,
    octaves: 2,
    oscillator: { type: "sine" },
  }).toDestination();
  const snare = new Tone.NoiseSynth({
    envelope: { attack: 0.01, decay: 0.15 },
    noise: { type: "white" },
    debug: "true"
  }).toDestination();
  const hiHat = new Tone.MetalSynth({
    frequency: 500,
    envelope: { attack: 0.01, decay: 0.05 },
    harmonicity: 2,
    modulationIndex: 2,
    resonance: 4000,
  }).toDestination();
  const tom1 = new Tone.MembraneSynth({
    pitchDecay: 0.5,
    octaves: 6,
    oscillator: { type: "square" },
  }).toDestination();
  const tom2 = new Tone.MembraneSynth({
    pitchDecay: 0.5,
    octaves: 4,
    oscillator: { type: "square" },
  }).toDestination();
  const tom3 = new Tone.MembraneSynth({
    pitchDecay: 0.5,
    octaves: 2,
    oscillator: { type: "square" },
  }).toDestination();


  return { kick, snare, tom1, tom2, tom3, hiHat };
};

const Drums = createDrums();

export default Drums;
