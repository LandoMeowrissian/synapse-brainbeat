import { useState, useEffect, useRef } from 'react';
import * as Tone from 'tone';
import "../../styles/Grid.scss";
import "./Sequencer.scss";

const Sequencer = () => {
  const [bpm, setBpm] = useState(120);
  const notes = ["F3", "Eb3", "C3", "Bb2", "Ab2", "F2"];
  const [grid, setGrid] = useState(makeGrid(notes));
  const [playing, setPlaying] = useState(false);
  const [started, setStarted] = useState(false);
  const [beat, setBeat] = useState(0);
  const beatRef = useRef(beat); 
  const synthRef = useRef(new Tone.Synth({
    ocillator: { type: "sawtooth" },
    envelope: { attack: 0.05 }
  },).toDestination());

  beatRef.current = beat; 

  useEffect(() => {
    const repeat = (time) => {
      const currentBeat = beatRef.current;
      grid.forEach((row, index) => {
        let synth = synthRef.current;
        let note = row[currentBeat];
        if (note.isActive) {
          synth.triggerAttackRelease(note.note, "8n", time);
        }
      });
      setBeat((prevBeat) => (prevBeat + 1) % 16);
    };
    Tone.Transport.cancel();
    if (started) {
      Tone.Transport.bpm.value = bpm;
      Tone.Transport.scheduleRepeat(repeat, "8n");
      Tone.Transport.start();
    } else {
      Tone.Transport.stop();
    }
    return () => {
      if (started) {
        Tone.Transport.cancel();
      }
    };
  }, [started, bpm, grid]);

  function makeGrid(notes) {
    return notes.map(note => new Array(16).fill().map(()=>({ note: note, isActive: false })));
  }

  const handleNoteClick = (rowIndex, noteIndex) => {
    const newGrid = grid.slice(); 
    newGrid[rowIndex][noteIndex].isActive = !newGrid[rowIndex][noteIndex].isActive;
    setGrid(newGrid);
  };

  const handleBpmChange = (newBpm) => {
    setBpm(newBpm);
    Tone.Transport.bpm.value = newBpm;
  };

  const handlePlayButton = () => {
    if (!started) {
      Tone.start();
      setStarted(true);
    }

    if (playing) {
      Tone.Transport.stop();
    } else {
      Tone.Transport.start();
    }

    setPlaying(!playing);
  };

  return (
    <div class="sequencer">
      <input
        type="range"
        id="bpm"
        min="60"
        max="240"
        value={bpm}
        onChange={(e) => handleBpmChange(e.target.value)}
      />
      <span>{bpm} BPM</span>
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
      <button id="play-button" onClick={handlePlayButton}>
        {playing ? 'Stop' : 'Start'}
      </button>
    </div>
  );
};

export default Sequencer;
