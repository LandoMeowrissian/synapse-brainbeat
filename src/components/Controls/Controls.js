import React from "react";
import Buttons from "../Buttons/Buttons";
import BpmSlider from "../BpmSlider/BpmSlider";

const Controls = ({ handleBpmChange, bpm }) => {
  return (
    <>
      <BpmSlider bpm={bpm} onBpmChange={handleBpmChange} />
      <Buttons/>
    </>
  );
};

export default Controls;
