// src/components/Sequencer/GridDisplay.js

const GridDisplay = ({ grid, onNoteClick }) => (
  <div className="sequencer-grid">
    {grid.map((row, rowIndex) => (
      <div id="row" className={`button-row-${rowIndex + 1}`} key={`row_${rowIndex}`}>
        {row.map((note, noteIndex) => (
          <button
            id={`step-${noteIndex + 1}`}
            className={`note sequencer-step-${rowIndex}-${noteIndex} ${note.isActive ? 'note-is-active' : ''}`}
            key={`note_${rowIndex}_${noteIndex}`}
            onClick={() => onNoteClick(rowIndex, noteIndex)}
            
          />
        ))}
      </div>
    ))}
  </div>
);

export default GridDisplay;
