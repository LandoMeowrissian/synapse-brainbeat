import React, { useState } from "react";
import Button from "../Button/Button";
import PentatonicSynths from "./Synth";
import * as Tone from "tone";
import "../../styles/Grid.scss";

const SynthGrid = () => {
  const [isSequencePlaying, setIsSequencePlaying] = useState(false);
  const [activeSteps, setActiveSteps] = useState(new Array(8).fill(false));


  const padKeys = ["C", "D", "E", "G", "A", "C"];
  const createGrid = () => {
    return padKeys.map((padKey, rowIndex) =>
      new Array(8).fill(null).map((_, colIndex) => {
        const handleClick = async () => {
          if (Tone.context.state !== 'running') {
            await Tone.start();
            console.log('Playback resumed successfully');
          }
          const octave = rowIndex === padKey.length - 1 ? 5 : 4;
          const synth = PentatonicSynths[padKey];
          synth.triggerAttackRelease(`${padKey}${octave}`, "8n");
        };
  
        return (
          <Button
            key={`${padKey}-${colIndex}`}
            padKey={padKey}
            className={`button-row-${rowIndex + 1} button-col-${colIndex + 1}`}
            onClick={handleClick}
          />
        );
      })
    );
  };
  
  const handlePlaySequenceStep = (index, time) => {
    padKeys.forEach((padKey, rowIndex) => {
      if (activeSteps[index]) {
        const synth = PentatonicSynths[padKey];
        synth.triggerAttackRelease(`${padKey}4`, "8n", time);
    }
  })
}
  const [grid, setGrid] = useState(createGrid());

  return (
    <div className="grid">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((button, colIndex) =>
            React.cloneElement(button, {
              key: `${rowIndex}-${colIndex}`,
              className: `${button.props.className} button-pos-${rowIndex}-${colIndex}`,
            })
          )}
        </div>
      ))}
    </div>
  );
};

export default SynthGrid;
