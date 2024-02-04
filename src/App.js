import "./App.scss";
// import Sequencer from "./components/Sequencer/Sequencer";
// import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<HomePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
