import './App.css';
import React from 'react';
import { Route, Routes } from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage";
import * as stories from "./fics"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        {Object.entries(stories).map(
          // fic[0] is the url version of the title, fic[1] is the related component
          fic => <Route key={fic[0]} path={"/" + fic[0]} element={React.createElement(fic[1], null)} />
        )}
      </Routes>
    </div>
  );
}

export default App;