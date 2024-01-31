
import { useState, useEffect } from 'react';
import * as Tone from 'tone';

const Sequencer = ({ synthGrid, drumGrid, isPlaying, onStepChange }) => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const sequence = new Tone.Sequence(
      (time, index) => {
        synthGrid.playSequenceStep(index, time);
        drumGrid.playSequenceStep(index, time);
        setCurrentStep(index);
        onStepChange(index);
      },
      new Array(8).fill().map((_, i) => i), 
      '16n'
    );

    if (isPlaying) {
      Tone.Transport.start();
      sequence.start(0);
    } else {
      Tone.Transport.stop();
      sequence.stop();
    }

    return () => {
      sequence.dispose();
    };
  }, [isPlaying, synthGrid, drumGrid]);

  return (
    <div className="sequencer">
      {new Array(8).fill().map((_, index) => (
        <div key={index} className={`step ${index === currentStep ? 'active' : ''}`}>
          {index + 1}
        </div>
      ))}
    </div>
  );
};

export default Sequencer;
