import React from 'react'

const Controls = () => {
  const BPMSlider = ({ bpm, onBpmChange }) => (
    <div className="bpm-slider">
      <input
        type="range"
        id="bpm"
        min="60"
        max="240"
        value={bpm}
        onChange={(e) => onBpmChange(e.target.value)}
      />
      <span className="bpm-tempo"> {bpm} </span>
    </div>
  );
  
 
  return (
    <div>
      
    </div>
  )
}

export default Controls
