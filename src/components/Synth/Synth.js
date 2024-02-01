import * as Tone from "tone";

const createSynths = () => {
  const notes = ["F3", "Eb3", "C3", "Bb2", "Ab2", "F2"];
  let synths = {};

  for (let i = 0; i < notes.length; i++) {
    const note = notes[i];
    synths[note] = new Tone.Synth({
      ocillator: { type: "square" },
      envelope: { attack: 0.05 },
    }).toDestination();
  }

  synths["C3"] = new Tone.Synth().toDestination();

  return synths;
};

const PentatonicSynths = createSynths();

export default PentatonicSynths;
