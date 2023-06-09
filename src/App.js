import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Step2 from "./Step2";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/step2" element={<Step2 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
