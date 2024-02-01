const Grid = ({ grid, handleNoteClick }) => (
  <>
    {grid.map((row, rowIndex) => (
      <div className={`button-row-${rowIndex + 1}`} key={`row_${rowIndex}`}>
        {row.map((note, noteIndex) => (
          <button
            className={`note sequencer-step-${rowIndex}-${noteIndex} ${note.isActive ? 'note-is-active' : ''}`}
            key={`note_${rowIndex}_${noteIndex}`}
            onClick={() => handleNoteClick(rowIndex, noteIndex)}
          />
        ))}
      </div>
    ))}
  </>
);

export default Grid;
