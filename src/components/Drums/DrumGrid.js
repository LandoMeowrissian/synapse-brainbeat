import React, { useState, useEffect } from "react";
import Button from "../Button/Button";
import Drums from "./Drums";
import * as Tone from "tone";
import "../../styles/Grid.scss";

const padKeys = ["Row1", "Row2", "Row3", "Row4", "Row5", "Row6"]; 

const DrumGrid = () => {
  const createGrid = (rows) => {
    const soundMapping = {
      Row1: Drums.kick,
      Row2: Drums.snare,
      Row3: Drums.hiHat,
      Row4: Drums.tom1,
      Row5: Drums.tom2,
      Row6: Drums.tom3,
    };

    return padKeys.map((padKey, rowIndex) =>
      new Array(8).fill(null).map((_, colIndex) => { 
        const handleClick = async () => {
          if (Tone.context.state !== 'running') {
            await Tone.start();
            console.log('Playback resumed successfully');
          }
          const drum = soundMapping[padKey];
          if (drum instanceof Tone.NoiseSynth) {
            drum.triggerAttackRelease("16n");
          } else {
            drum.triggerAttackRelease("C2", "8n");
          }
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

  const [grid, setGrid] = useState(createGrid(padKeys.length));


  return (
    <div className="grid">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} id={`row-${rowIndex + 1}`} className="row">
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

export default DrumGrid;
