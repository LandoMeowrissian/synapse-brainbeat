import * as Tone from "tone";

const createDrums = () => {
  const kick = new Tone.MembraneSynth({
    pitchDecay: 0.055,
    octaves: 2,
    oscillator: { type: "sine" },
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
    oscillator: { type: "sine" },
  }).toDestination();
  const tom2 = new Tone.MembraneSynth({
    pitchDecay: 0.5,
    octaves: 4,
    oscillator: { type: "sine" },
  }).toDestination();
  const tom3 = new Tone.MembraneSynth({
    pitchDecay: 0.5,
    octaves: 2,
    oscillator: { type: "sine" },
  }).toDestination();
  const snareBody = new Tone.MembraneSynth({
    pitchDecay: 0.005,
    octaves: 4,
    envelope: { attack: 0.001, decay: 0.2, sustain: 0 },
  }).toDestination();
  const snareNoise = new Tone.NoiseSynth({
    noise: { type: "white" },
    envelope: { attack: 0.001, decay: 0.1, sustain: 0 },
  }).toDestination();
  const snareFilter = new Tone.Filter({
    type: "bandpass",
    frequency: 1000,
    Q: 0.5
  });
  snareNoise.connect(snareFilter);
  snareFilter.toDestination();
  const snare = {
    triggerAttackRelease: (note, duration, time) => {
      snareBody.triggerAttackRelease(note, duration, time);
      snareNoise.triggerAttackRelease(duration, time);
    }
  };

  return { kick, snare, tom1, tom2, tom3, hiHat };
};

const Drums = createDrums();

export default Drums;
