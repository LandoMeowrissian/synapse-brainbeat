import "./App.scss";
// import * as Tone from "tone";
import Header from "./components/Header/Header";
import DrumGrid from "./components/Drums/DrumGrid";
import SynthGrid from "./components/Synth/SynthGrid";
function App() {
  return (
    <div className="App">
      <Header />
      <DrumGrid />
     <SynthGrid/>
    </div>
  );
}

export default App;
