import { useState, useEffect, useRef } from "react";
import * as Tone from "tone";
import Drums from "../Drums/Drums";
import BPMSlider from "./BPMSlider";
import GridDisplay from "./GridDisplay";
import DrumGridDisplay from "./DrumGridDisplay";
import "./Grid.scss";

const Sequencer = () => {
  const [bpm, setBpm] = useState(120);
  const notes = ["F3", "Eb3", "C3", "Bb2", "Ab2", "F2"];
  const drums = ["kick", "snare", "hiHat", "tom1", "tom2", "tom3"];
  const [grid, setGrid] = useState(makeGrid(notes));
  const [drumGrid, setDrumGrid] = useState(makeDrumGrid(drums));
  const [playing, setPlaying] = useState(false);
  const [started, setStarted] = useState(false);
  const [beat, setBeat] = useState(0);
  const beatRef = useRef(beat);
 
  let synthRef = useRef(

    new Tone.Synth({
      oscillator: { type: "sawtooth" },
      envelope: { attack: 0.05 },
    }).toDestination()
  );

  const drumRefs = {
    kick: useRef(Drums.kick),
    snare: useRef(Drums.snare),
    hiHat: useRef(Drums.hiHat),
    tom1: useRef(Drums.tom1),
    tom2: useRef(Drums.tom2),
    tom3: useRef(Drums.tom3),
  };

  beatRef.current = beat;

  const playNote = (synth, note) => {
    if (note.isActive) {
      synth.triggerAttackRelease(note.note, "8n", Tone.now());
    }
  };

  const playDrumSound = (drum, note) => {
    if (note.isActive) {
      drum.triggerAttackRelease("C2", "16n", Tone.now());
    }
  };

  useEffect(() => {
    const repeat = (time) => {
      const currentBeat = beatRef.current;
      grid.forEach((row, index) => {
        let synth = synthRef.current;
        let note = row[currentBeat];
        if (note.isActive) {
          synth.triggerAttackRelease(note.note, "16n", time);
        }
      });
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
    Tone.Transport.stop();

    if (started && playing) {
      Tone.Transport.bpm.value = bpm;
      Tone.Transport.scheduleRepeat(repeat, "8n");
      Tone.Transport.start();
    } else {
      Tone.Transport.stop();
    }
    return () => {
      Tone.Transport.cancel();
      Tone.Transport.stop();
    };
  }, [started, bpm, grid, drumGrid]);

  function makeGrid(notes) {
    return notes.map((note) =>
      new Array(16).fill().map(() => ({ note: note, isActive: false }))
    );
  }
  function makeDrumGrid(drums) {
    return drums.map((note) =>
      new Array(16).fill().map(() => ({ note: note, isActive: false }))
    );
  }

  const handleNoteClick = (gridType, rowIndex, noteIndex) => {
    if (gridType === "synth") {
      const newGrid = grid.map((row, rIndex) =>
        rIndex === rowIndex
          ? row.map((note, nIndex) => {
              if (nIndex === noteIndex) {
                playNote(synthRef.current, {
                  ...note,
                  isActive: !note.isActive,
                });
                return { ...note, isActive: !note.isActive };
              }
              return note;
            })
          : row
      );
      setGrid(newGrid);
    } else if (gridType === "drum") {
      const newDrumGrid = drumGrid.map((row, rIndex) =>
        rIndex === rowIndex
          ? row.map((note, nIndex) => {
              if (nIndex === noteIndex) {
                playDrumSound(drumRefs[drums[rIndex]].current, {
                  ...note,
                  isActive: !note.isActive,
                });
                return { ...note, isActive: !note.isActive };
              }
              return note;
            })
          : row
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

    setPlaying(true);
  };

  const handleStopButton = () => {
    if (started) {
      Tone.Transport.stop();
      Tone.Transport.cancel();
      setStarted(false);
    }
    setPlaying(false);
  };

  

  

  return (
    <div className="sequencer">
      <div className="sequencer-controls">
        <BPMSlider bpm={bpm} onBpmChange={handleBpmChange} />
        <div className="sequencer-controls__buttons">
        <button id="play-button" onClick={handlePlayButton}>
          Start
        </button>
        <button id="stop-button" onClick={handleStopButton}>
          Stop
        </button>
        </div>
       
      </div>

      <div className="sequencer-synth">
        <GridDisplay
          grid={grid}
          onNoteClick={(rowIndex, noteIndex) =>
            handleNoteClick("synth", rowIndex, noteIndex)
          }
        />
      </div>
      <div className="sequencer-drums">
        <DrumGridDisplay
          drumGrid={drumGrid}
          onNoteClick={(rowIndex, noteIndex) =>
            handleNoteClick("drum", rowIndex, noteIndex)
          }
        />
      </div>
    </div>
  );
};

export default Sequencer;
