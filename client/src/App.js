import React from "react";
import {Route, Routes} from "react-router-dom";
import Startpage from "./Startpage/Startpage";
import WritePage from "./writePage/WritePage";
import ResultPage from './Resultpage/ResultPage';
import LoadResult from "./LoadingPage/LoadResult";
import FirstPage from "./Makepage/FirstPage";
import SecondPage from "./Makepage/SecondPage";
import ThirdPage from "./Makepage/ThirdPage";
import LoadMake from "./LoadingPage/LoadMake";
function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<Startpage/>} />
        <Route path="/story" element={<WritePage/>} />
        <Route path="/result" element={<ResultPage/>} />
    
        <Route path="/first" element={<FirstPage/>} />
        <Route path="/second" element={<SecondPage/>} />
        <Route path="/third" element={<ThirdPage/>} />
        <Route path="/load" element={<LoadResult/>} />
        <Route path="/loadmaking" element={<LoadMake/>} />
      </Routes>
    </div>
  );
}

export default App;


