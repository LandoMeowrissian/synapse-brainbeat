
const DrumGridDisplay = ({ drumGrid, onNoteClick }) => (
  <div className="sequencer-grid drums">
    {drumGrid.map((row, rowIndex) => (
      <div
        id="row"
        className={`button-row-${rowIndex + 1}`}
        key={`row_${rowIndex}`}
      >
        {row.map((note, noteIndex) => (
          <button
            name="drum-button"
            id={`drum-step-${noteIndex + 1}`}
            className={`note step-${rowIndex}-${noteIndex} ${
              note.isActive ? "note-is-active" : ""
            }`}
            key={`note_${rowIndex}_${noteIndex}`}
            onClick={() => onNoteClick(rowIndex, noteIndex)}
          />
        ))}
      </div>
    ))}
  </div>
);

export default DrumGridDisplay;
