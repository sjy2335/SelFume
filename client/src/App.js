import React from "react";
import {Route, Routes} from "react-router-dom";
import Startpage from "./Startpage/Startpage";
import Writepage from "./Manufacture/Writepage/Writepage";
import Loadingpage from "./Load/Loadingpage";
import Resultpage from "./Manufacture/Resultpage/Resultpage";
import Makepage from "./Manufacture/Makepage/Makepage";
function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<Startpage/>} />
        <Route path="/write" element={<Writepage/>} />
        <Route path="/load" element={<Loadingpage/>} />
        <Route path="/result" element={<Resultpage/>} />
        <Route path="/make" element={<Makepage/>} />
      </Routes>
    </div>
  );
}

export default App;


