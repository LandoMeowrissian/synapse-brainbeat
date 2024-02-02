import { useState, useEffect, useRef } from 'react';
import * as Tone from 'tone';
import Drums from "../Drums/Drums";
import BPMSlider from './BPMSlider';
import GridDisplay from './GridDisplay';
import DrumGridDisplay from './DrumGridDisplay';
import "./Grid.scss";

const Sequencer = () => {
  const [bpm, setBpm] = useState(120);
  const notes = ["F3", "Eb3", "C3", "Bb2", "Ab2", "F2"];
  const drums = ["kick", "snare", "hiHat", "tom1", "tom2", "tom3"]
  const [grid, setGrid] = useState(makeGrid(notes));
  const [drumGrid, setDrumGrid] = useState(makeDrumGrid(drums));
  const [playing, setPlaying] = useState(false);
  const [started, setStarted] = useState(false);
  const [beat, setBeat] = useState(0);
  const beatRef = useRef(beat); 
  const synthRef = useRef(new Tone.Synth({
    oscillator: { type: "sawtooth" },
    envelope: { attack: 0.05 }
  }).toDestination());
  const drumRefs = {
    kick: useRef(Drums.kick),
    snare: useRef(Drums.snare),
    hiHat: useRef(Drums.hiHat),
    tom1: useRef(Drums.tom1),
    tom2: useRef(Drums.tom2),
    tom3: useRef(Drums.tom3)
  };

  beatRef.current = beat; 

  useEffect(() => {
    const repeat = (time) => {
      const currentBeat = beatRef.current;
      // Synth
      grid.forEach((row, index) => {
        let synth = synthRef.current;
        let note = row[currentBeat];
        if (note.isActive) {
          synth.triggerAttackRelease(note.note, "16n", time);
        }
      });
      // Drums
      drumGrid.forEach((row, index) => {
        let drum = drumRefs[drums[index]].current;
        let note = row[currentBeat];
        if (note.isActive) {
          drum.triggerAttackRelease("C2", "16n", time);
        }
      });

      setBeat((prevBeat) => (prevBeat + 1) % 16);
    };

    Tone.Transport.cancel();
    if (started) {
      Tone.Transport.bpm.value = bpm;
      Tone.Transport.scheduleRepeat(repeat, "16n");
      Tone.Transport.start();
    } else {
      Tone.Transport.stop();
    }
    return () => {
      if (started) {
        Tone.Transport.cancel();
      }
    };
  }, [started, bpm, grid, drumGrid]);

  function makeGrid(notes) {
    return notes.map(note => new Array(16).fill().map(()=>({ note: note, isActive: false })));
  }
  function makeDrumGrid(drums) {
    return drums.map(note => new Array(16).fill().map(()=>({ note: note, isActive: false })));
  }

  const handleNoteClick = (gridType, rowIndex, noteIndex) => {
    if (gridType === 'synth') {
      const newGrid = grid.map((row, rIndex) => 
        rIndex === rowIndex ? row.map((note, nIndex) => 
          nIndex === noteIndex ? {...note, isActive: !note.isActive} : note
        ) : row
      );
      setGrid(newGrid);
    } else if (gridType === 'drum') {
      const newDrumGrid = drumGrid.map((row, rIndex) => 
        rIndex === rowIndex ? row.map((note, nIndex) => 
          nIndex === noteIndex ? {...note, isActive: !note.isActive} : note
        ) : row
      );
      setDrumGrid(newDrumGrid);
    }
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
    <div className="sequencer">
      <BPMSlider bpm={bpm} onBpmChange={handleBpmChange} />
      <GridDisplay grid={grid} onNoteClick={(rowIndex, noteIndex) => handleNoteClick('synth', rowIndex, noteIndex)} />
      <DrumGridDisplay drumGrid={drumGrid} onNoteClick={(rowIndex, noteIndex) => handleNoteClick('drum', rowIndex, noteIndex)} />
      <button id="play-button" onClick={handlePlayButton}>
        {playing ? 'Stop' : 'Start'}
      </button>
    </div>
  );
};

export default Sequencer;
