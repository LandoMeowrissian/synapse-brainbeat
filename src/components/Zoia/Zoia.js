import * as Tone from "tone";

const Zoia = () => {
  const osc = new Tone.Oscillator(440, "sine").toDestination().start();
  const [isOsc, setIsOsc] = useState(true);

  const playOsc = () => {
    
  }
}

export default Zoia;
