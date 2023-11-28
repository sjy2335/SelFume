import React from "react";
import {Route, Routes} from "react-router-dom";
import Startpage from "./Startpage/Startpage";
import WritePage from "./writePage/WritePage";
import ResultPage from './Resultpage/ResultPage';
import MakePage from "./Makepage/MakePage";
function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<Startpage/>} />
        <Route path="/story" element={<WritePage/>} />
        <Route path="/result" element={<ResultPage/>} />
        <Route path="/make" element={<MakePage/>} />
      
      </Routes>
    </div>
  );
}

export default App;


