import "./App.scss";
// import HomePage from "./pages/HomePage/HomePage";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import LeadSequencer from "./components/Sequencers/LeadSequencer";

function App( ) {
 

  return (
    <>
      <LeadSequencer/>
    </>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<HomePage />} />
    //     <Route path="/player" element={<Player />} />
    //     <Route path="/sequence" element={<Sequencer/>}/>
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
