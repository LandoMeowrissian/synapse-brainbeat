import "./App.scss";
// import HomePage from "./pages/HomePage/HomePage";
// import PlayerPage from "./pages/PlayerPage/PlayerPage";
// import Looper from "./components/Looper/Looper";
import Controls from "./components/Controls/Controls"
// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Controls/>
    </>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path={"/"} element={<HomePage />}></Route>
    //     <Route path={"/player"} element={<PlayerPage />}></Route>
       
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
