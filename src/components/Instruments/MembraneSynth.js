import * as Tone from "tone";

const createDrums = () => {
  const kick = new Tone.MembraneSynth({
    pitchDecay: 0.055,
    octaves: 2,
    oscillator: { type: "sine" },
  }).toDestination();
  const snare = new Tone.NoiseSynth({
    envelope: { attack: 0.01, decay: 0.25 },
    noise: { type: "white" },
    debug: "true"
  }).toDestination();
  const hiHat = new Tone.MetalSynth({
    frequency: 500,
    envelope: { attack: 0.015, decay: 0.3 },
    harmonicity: 5.1,
    modulationIndex: 12,
    resonance: 4000,
    octaves: 1.5,
  }).toDestination();
  const tom1 = new Tone.MembraneSynth({
    pitchDecay: 0.55,
    octaves: 6,
    oscillator: { type: "square" },
  }).toDestination();
  const tom2 = new Tone.MembraneSynth({
    pitchDecay: 0.55,
    octaves: 4,
    oscillator: { type: "square" },
  }).toDestination();

  // Add more drums as needed

  return { kick, snare, tom1, tom2, hiHat };
};

const Drums = createDrums();

export default Drums;
