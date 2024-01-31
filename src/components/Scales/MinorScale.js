const getMinorScale = (rootNote) => {
  const minorScaleIntervals = [2, 2, 1, 1, 2, 2, 1];

  const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
  let scale = [rootNote];
  let currentIndex = notes.indexOf('rootNote');

  for (let interval of minorScaleIntervals) {
    currentIndex = (currentIndex + interval) % notes.length;
    scale.push(notes[currentIndex]);
  }
  return scale.slice(0, -1);
};

export default getMinorScale;
