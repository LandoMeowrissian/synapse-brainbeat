import React, { useEffect, useState, useRef } from "react";
import * as Tone from "tone";
import "./Buttons.scss";

const Buttons = () => {
  const [playing, setPlaying] = useState(false);
  const [started, setStarted] = useState(false);
  const [beat, setBeat] = useState(0);
  const beatRef = useRef(beat);
  beatRef.current = beat;


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

  // useEffect(() => {
  //   const repeat = (time) => {
  //     const currentBeat = beatRef.current;
  //     grid.forEach((row, index) => {
  //       let synth = synthRef.current;
  //       let note = row[currentBeat];
  //       if (note.isActive) {
  //         synth.triggerAttackRelease(note.note, "16n", time);
  //       }
  //     });
  //     drumGrid.forEach((row, index) => {
  //       let drum = drumRefs[drums[index]].current;
  //       let note = row[currentBeat];
  //       if (note.isActive) {
  //         drum.triggerAttackRelease("C2", "16n", time);
  //       }
  //     });

  //     setBeat((prevBeat) => (prevBeat + 1) % 16);
  //   };

  //   Tone.Transport.cancel();
  //   Tone.Transport.stop();

  //   if (started && playing) {
  //     Tone.Transport.bpm.value = bpm;
  //     Tone.Transport.scheduleRepeat(repeat, "8n");
  //     Tone.Transport.start();
  //   } else {
  //     Tone.Transport.stop();
  //   }
  //   return () => {
  //     Tone.Transport.cancel();
  //     Tone.Transport.stop();
  //   };
  // }, [started, bpm]);

 const StartButton = ({}) => {
    <div className="sequencer-controls__buttons">
      <button id="play-button" onClick={handlePlayButton}>
        Start
      </button>
    </div>;
  };

  const StopButton = ({}) => {
    <div>
      <button id="stop-button" onClick={handleStopButton}>
        Stop
      </button>
    </div>;
  };
  return (
    <div>
      <StartButton />
      <StopButton/>
    </div>
  ) 
};

export default Buttons;
