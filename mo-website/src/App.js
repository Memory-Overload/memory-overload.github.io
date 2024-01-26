import './App.css';
import { Route, Routes } from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage";
import ABoilingIslesYule from "./Components/ABoilingIslesYule/ABoilingIslesYule";
import TheGoodBasiliskLuzura from "./Components/TheGoodBasiliskLuzura/TheGoodBasiliskLuzura";
import TheLifeoftheCostumeParty from "./Components/TheLifeoftheCostumeParty/TheLifeoftheCostumeParty";
import InvestigatorAmityandtheCaseoftheMissingMuffin from "./Components/InvestigatorAmityandtheCaseoftheMissingMuffin/InvestigatorAmityandtheCaseoftheMissingMuffin";
import TheNocedaClawthorneWhispersBunch from "./Components/TheNocedaClawthorneWhispersBunch/TheNocedaClawthorneWhispersBunch";
import Penstagram20butonAO3 from "./Components/Penstagram20butonAO3/Penstagram20butonAO3";
import ASmileBrighterThanTheSun from "./Components/ASmileBrighterThanTheSun/ASmileBrighterThanTheSun";
import TheSecondReVeeal from "./Components/TheSecondReVeeal/TheSecondReVeeal";
import WhoCanItBeNow from "./Components/WhoCanItBeNow/WhoCanItBeNow";
import TheMostNormalMilkshakeDateEver from "./Components/TheMostNormalMilkshakeDateEver/TheMostNormalMilkshakeDateEver";
import TheIslesAccordingtoLuz from "./Components/TheIslesAccordingtoLuz/TheIslesAccordingtoLuz";
import AnUncommonCaseoftheCommonMold from "./Components/AnUncommonCaseoftheCommonMold/AnUncommonCaseoftheCommonMold";
import SoThatsWhatThoseColorsMean from "./Components/SoThatsWhatThoseColorsMean/SoThatsWhatThoseColorsMean";
import MyTreasure from "./Components/MyTreasure/MyTreasure";
import VeeandMashaGoOnaTourButReallyItsaDate from "./Components/VeeandMashaGoOnaTourButReallyItsaDate/VeeandMashaGoOnaTourButReallyItsaDate";
import ThroughGlassEyes from "./Components/ThroughGlassEyes/ThroughGlassEyes";
import TheHexsquadDiscoversTheInternet from "./Components/TheHexsquadDiscoversTheInternet/TheHexsquadDiscoversTheInternet";
import TheRealMeTheRealVee from "./Components/TheRealMeTheRealVee/TheRealMeTheRealVee";
import Attempt37 from "./Components/Attempt37/Attempt37";
import Uncle from "./Components/Uncle/Uncle";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/ABoilingIslesYule" element={<ABoilingIslesYule />} />
        <Route path="/TheGoodBasiliskLuzura" element={<TheGoodBasiliskLuzura />} />
        <Route path="/TheLifeoftheCostumeParty" element={<TheLifeoftheCostumeParty />} />
        <Route path="/InvestigatorAmityandtheCaseoftheMissingMuffin" element={<InvestigatorAmityandtheCaseoftheMissingMuffin />} />
        <Route path="/TheNocedaClawthorneWhispersBunch" element={<TheNocedaClawthorneWhispersBunch />} />
        <Route path="/Penstagram20butonAO3" element={<Penstagram20butonAO3 />} />
        <Route path="/ASmileBrighterThanTheSun" element={<ASmileBrighterThanTheSun />} />
        <Route path="/TheSecondReVeeal" element={<TheSecondReVeeal />} />
        <Route path="/WhoCanItBeNow" element={<WhoCanItBeNow />} />
        <Route path="/TheMostNormalMilkshakeDateEver" element={<TheMostNormalMilkshakeDateEver />} />
        <Route path="/TheIslesAccordingtoLuz" element={<TheIslesAccordingtoLuz />} />
        <Route path="/AnUncommonCaseoftheCommonMold" element={<AnUncommonCaseoftheCommonMold />} />
        <Route path="/SoThatsWhatThoseColorsMean" element={<SoThatsWhatThoseColorsMean />} />
        <Route path="/MyTreasure" element={<MyTreasure />} />
        <Route path="/VeeandMashaGoOnaTourButReallyItsaDate" element={<VeeandMashaGoOnaTourButReallyItsaDate />} />
        <Route path="/ThroughGlassEyes" element={<ThroughGlassEyes />} />
        <Route path="/TheHexsquadDiscoversTheInternet" element={<TheHexsquadDiscoversTheInternet />} />
        <Route path="/TheRealMeTheRealVee" element={<TheRealMeTheRealVee />} />
        <Route path="/Attempt37" element={<Attempt37 />} />
        <Route path="/Uncle" element={<Uncle />} />
      </Routes>
    </div>
  );
}

export default App;