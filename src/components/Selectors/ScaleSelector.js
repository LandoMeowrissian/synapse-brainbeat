import * as Tone from "tone";
import getMajorScale from "../Scales/MajorScale";
// import getMinorScale from "../Scales/MinorScale";

function ScaleSelector({ onSelectScale }) {
  const notes = [
    "A",
    "A#",
    "B",
    "C",
    "C#",
    "D",
    "D#",
    "E",
    "F",
    "F#",
    "G",
    "G#",
  ];
  return (
    <div className="select" >
      <select
        className="major-selector"
        onChange={(e) => onSelectScale(e.target.value)}
      >
        {notes.map((note, index) => (
          <option key={index} value={note}>
            {note + " Major"}
          </option>
        ))}
      </select>
      {/* <select
        className="minor-selector"
        onChange={(e) => onSelectScale(e.target.value)}
      >
        {notes.map((note, index) => (
          <option key={index} value={note}>
            {note + " Minor"}
          </option>
        ))}
      </select> */}
    </div>
  );
}

export default ScaleSelector;
