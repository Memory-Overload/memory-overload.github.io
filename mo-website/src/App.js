import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage";
import GBL from './Components/GBL/GBL';
import Uncle from './Components/Uncle/Uncle';
import Attempt37 from './Components/Attempt_37/Attempt_37';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/TheGoodBasiliskLuzura" element={<GBL />} />
          <Route path="/Uncle" element={<Uncle />} />
          <Route path="/Attempt37" element={<Attempt37 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
