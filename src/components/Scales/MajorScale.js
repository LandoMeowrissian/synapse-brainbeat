const getMajorScale = (rootNote) => {
  const majorScaleIntervals = [2, 2, 2, 2, 2, 2];

  const notes = [ 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B',];
  let scale = [rootNote];
  let currentIndex = notes.indexOf(rootNote);

  for (let interval of majorScaleIntervals) {
    currentIndex = (currentIndex + interval) % notes.length ;
    scale.push(notes[currentIndex]);
  }
  return scale.slice(0, -1);
}

export default getMajorScale;
