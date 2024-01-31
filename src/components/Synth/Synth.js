import * as Tone from "tone";

const createSynths = () => {
  const notes = ["C", "D", "E", "G", "A"];
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
