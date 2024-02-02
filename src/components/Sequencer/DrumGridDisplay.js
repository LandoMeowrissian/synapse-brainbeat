// src/components/Sequencer/DrumGridDisplay.js

const DrumGridDisplay = ({ drumGrid, onNoteClick }) => (
  <div className="sequencer-grid" >
    {drumGrid.map((row, rowIndex) => (
      <div className={`button-row-${rowIndex + 1}`} key={`row_${rowIndex}`}>
        {row.map((note, noteIndex) => (
          <button
            className={`note sequencer-step-${rowIndex}-${noteIndex} ${note.isActive ? 'note-is-active' : ''}`}
            key={`note_${rowIndex}_${noteIndex}`}
            onClick={() => onNoteClick(rowIndex, noteIndex)}
            style={{ background: note.isActive ? 'red' : 'grey' }}
          />
        ))}
      </div>
    ))}
  </div>
);

export default DrumGridDisplay;
