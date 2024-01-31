import * as Tone from "tone";

const createSynths = () => {
  // Note: Pentatonic Scale in C major: C, D, E, G, A
  const notes = ['C', 'D', 'E', 'G', 'A'];
  let synths = {};

  // Create a Tone.Synth for each note in the pentatonic scale
  for (let i = 0; i < notes.length; i++) {
    const note = notes[i];
    synths[note] = new Tone.Synth().toDestination();
  }

  // Adding an extra note C to make it 6 variables
  synths['C3'] = new Tone.Synth().toDestination();

  return synths;
};

const PentatonicSynths = createSynths();

export default PentatonicSynths;
