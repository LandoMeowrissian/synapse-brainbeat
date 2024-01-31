import "./App.scss";
import HomePage from "./pages/HomePage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Player from "./pages/Player/Player";
// import DrumGrid from "./components/Drums/DrumGrid"
// import SynthGrid from "./components/Synth/SynthGrid"
// import Header from "./components/Header/Header";
function App( ) {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/player" element={<Player/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
