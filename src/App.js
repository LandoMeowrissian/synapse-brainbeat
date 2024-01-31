import "./App.scss";
// import * as Tone from "tone";
import Header from "./components/Header/Header";
import DrumGrid from "./components/Grid/DrumGrid";
function App() {
  return (
    <div className="App">
      <Header />
      <DrumGrid />
      <DrumGrid />
    </div>
  );
}

export default App;
