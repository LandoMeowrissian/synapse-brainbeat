import React, { useState } from 'react';
import Button from "../Button/Button";

const Row = ({ padKey }) => {
  
  // Initializes a new row with a length of 8 using the pad value associated with padKey
  const createRow = () => new Array(8).fill(pads[padKey]);
  
  // Using useState to manage the grid's state
  const [row, setRow] = useState(createRow());

  return (
    <div className="row">
      <Button onClick="mute" /> 
      {row.map((pad, index) => (

        <Button key={index}>{pad}</Button>  
      ))}
    </div>
  );
};

export default Grid;
