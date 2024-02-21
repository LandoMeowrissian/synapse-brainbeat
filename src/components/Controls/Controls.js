import React from "react";

const Controls = ({
  handleBpmChange,
  handlePlayButton,
  handleStopButton
}) => {
 

 

  

  return (
    <>
      <BPMSlider bpm={bpm} onBpmChange={handleBpmChange} />
    </>
  )
};

export default Controls;
