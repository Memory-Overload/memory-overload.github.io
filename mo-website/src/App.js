import './App.css';
import React from 'react';
import { Link, Route, Routes } from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage";
import Header from './Components/Header/header';
import Reader from './Components/Reader/Reader';

const fics = [
  ["The Good Basilisk Luzura", "TheGoodBasiliskLuzura"],
  ["A Boiling Isle's Yule", "ABoilingIslesYule"],
  ["An Uncommon Case of the Common Mold", "AnUncommonCaseoftheCommonMold"],
  ["A Smile Brighter Than The Sun", "ASmileBrighterThanTheSun"],
  ["Attempt 37", "Attempt37"],
  ["Investigator Amity and the Case of the Missing Muffin", "InvestigatorAmityandtheCaseoftheMissingMuffin"],
  ["My Treasure", "MyTreasure"],
  ["\"So That's What Those Colors Mean!\"", "SoThatsWhatThoseColorsMean"],
  ["The Hexsquad Discovers The Internet", "TheHexsquadDiscoversTheInternet"],
  ["The Life of the (Costume) Party", "TheLifeoftheCostumeParty"],
  ["The Real Me. The Real Vee.", "TheRealMeTheRealVee"],
  ["The Second Re-Vee-al", "TheSecondReVeeal"],
  ["Through Glass Eyes", "ThroughGlassEyes"],
  ["Uncle", "Uncle"],
  ["Vee and Mash Go On a Tour (But Really It's a Date)", "VeeandMashaGoOnaTourButReallyItsaDate"],
  ["Who Can It Be Now?", "WhoCanItBeNow"]
]

function Error() {
  return (
    <div>
      <h1>
        You've entered the Forbidden Stacks.<br /><br />
        Turn back now, before Malphus finds you and feeds you to the bookworms.
      </h1>
      <h3>Translation: That's a 404 Error. You've tried to access a page that doesn't exist.</h3>
    </div>
  )
}

function FicTemplate({ title, folder }) {
  return (
    <div>
      <h1>{title}</h1>
      <h3><Link to="/">← Return to Home</Link></h3>
      <Reader folder={folder} />
    </div>
  )
}


setTimeout(() => Routes)
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/404" element={<h1>really?</h1>} />
        {fics.map(fic => <Route key={fic[1]} path={fic[1]} element={<FicTemplate title={fic[0]} folder={fic[1]} />} />)}
      </Routes>
    </div>
  );
}

export default App;