import { useState, useEffect } from 'react';
import * as Tone from 'tone';
import "../../styles/Grid.scss";
import classNames from 'classnames';

const Sequencer = () => {
  const [synthType, setSynthType] = useState("MembraneSynth");
  const [bpm, setBpm] = useState(120);
  const notes = ["F3", "Eb3", "C3", "Bb2", "Ab2", "F2"];
  const [grid, setGrid] = useState(makeGrid(notes));
  const [playing, setPlaying] = useState(false);
  const [started, setStarted] = useState(false);
  let beat = 0;

  function makeSynths(count, synthType) {
    const synths = [];
    for (let i = 0; i < count; i++) {
      let synth;
      switch (synthType) {
        case "MembraneSynth":
          synth = new Tone.MembraneSynth();
          break;
        case "PluckSynth":
          synth = new Tone.PluckSynth();
          break;
        case "MetalSynth":
          synth = new Tone.MetalSynth();
          break;
        // Add other synths you want to support
        default:
          throw new Error(`Unrecognized synth type: ${synthType}`);
      }
      synth.toDestination();
      synths.push(synth);
    }
    return synths;
  }

  const [synths, setSynths] = useState(makeSynths(6, synthType));

  useEffect(() => {
    const repeat = (time) => {
      grid.forEach((row, index) => {
        let synth = synths[index];
        let note = row[beat];
        if (note.isActive) {
          synth.triggerAttackRelease(note.note, "8n", time);
        }
      });
      beat = (beat + 1) % 16;
    };

    if (started) {
      Tone.Transport.bpm.value = bpm;
      Tone.Transport.scheduleRepeat(repeat, "8n");
    }

    return () => {
      if (started) {
        Tone.Transport.cancel();
      }
    };
  }, [started, bpm, grid, synths]);

  function makeGrid(notes) {
    return notes.map(note => new Array(16).fill({ note: note, isActive: false }));
  }

  const handleNoteClick = (rowIndex, noteIndex) => {
    const newGrid = grid.slice(); // Copy the grid
    newGrid[rowIndex][noteIndex].isActive = !newGrid[rowIndex][noteIndex].isActive;
    setGrid(newGrid);
  };

  useEffect(() => {
    setSynths(makeSynths(6, synthType));
  }, [synthType]);

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
    <div id="sequencer">
      <select
        id="synthSelect"
        value={synthType}
        onChange={(e) => setSynthType(e.target.value)}
      >
        <option value="MembraneSynth">Membrane Synth</option>
        <option value="PluckSynth">Pluck Synth</option>
        <option value="MetalSynth">Metal Synth</option>
        {/* Add other synth options here */}
      </select>
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
        <div className="row" key={`row_${rowIndex}`}>
          {row.map((note, noteIndex) => (
            <button
              className={classNames('note', { 'note-is-active': note.isActive })}
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
