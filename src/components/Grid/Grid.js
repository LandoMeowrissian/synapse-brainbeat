import React, { useState, useEffect } from "react";
import Button from "../Button/Button";
import Drums from "../Instruments/MembraneSynth";
import * as Tone from "tone";
import "./Grid.scss";

const padKeys = ["Row1", "Row2", "Row3", "Row4", "Row5"]; // the 5 different pad types

const Grid = () => {
  const createGrid = (rows, cols) => {
    const soundMapping = {
      Row1: Drums.kick,
      Row2: Drums.snare,
      Row3: Drums.hiHat,
      Row4: Drums.tom1,
      Row5: Drums.tom2,
    };

    const allPadKeys =
      rows > padKeys.length
        ? [
            ...Array(Math.ceil(rows / padKeys.length))
              .fill(padKeys)
              .flat()
              .slice(0, rows),
          ]
        : padKeys;

    return allPadKeys.map((padKey, rowIndex) =>
      new Array(cols).fill(null).map((_, colIndex) => {
        const handleClick = async () => {
          // Only call Tone.start() if the context is not running
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

  // Function to determine number of rows based on innerWidth
  const getRowsBasedOnWidth = (width) => {
    return width >= 750 && width <= 890 ? 10 : 5;
  };

  // Function to determine number of columns based on innerWidth
  const getColsBasedOnWidth = (width) => {
    return width >= 750 && width <= 890 ? 4 : 8;
  };

  // Initialize state with an appropriate grid based on window width
  const [grid, setGrid] = useState(
    createGrid(
      getRowsBasedOnWidth(window.innerWidth),
      getColsBasedOnWidth(window.innerWidth)
    )
  );

  useEffect(() => {
    // Handle resize to adjust rows and cols
    const handleResize = () => {
      const updatedRows = getRowsBasedOnWidth(window.innerWidth);
      const updatedCols = getColsBasedOnWidth(window.innerWidth);
      setGrid(createGrid(updatedRows, updatedCols));
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

export default Grid;
