// Makepage.jsx

import React, { useState, useEffect } from "react";
import styles from "./make.css";
import Toggle from "./Toggle";
import Nav from "../../Nav/Nav";
export default function Makepage() {
  const [pageTitle, setPageTitle] = useState("Base");
  const [toggleNums, setToggleNums] = useState([0, 1, 2]);
  const [toggleNames, setToggleNames] = useState(["아로마", "머스크", "우디"]);

  const handleToggleClick = (clickedNum) => {
    // 3초 후에 실행되는 함수
    setTimeout(() => {
      if (pageTitle === "Base") {
        setPageTitle("Mid");
        setToggleNums((prevNums) => prevNums.map((num) => num + 3));
        setToggleNames(["시트러스", "옐로우", "다크"]);
      } else if (pageTitle === "Mid") {
        setPageTitle("Top");
        setToggleNums((prevNums) => prevNums.map((num) => num + 3));
        setToggleNames(["플로럴", "레몬", "프루티"]);
      }
    }, 3000);
  };

  return (
    <div>
        <Nav />
        <div className="Makepagediv">
            <h1 className="togglename">{pageTitle}</h1>
            <div className="togglearray">
                <Toggle num={toggleNums[0]} name={toggleNames[0]} onClick={handleToggleClick} />
                <Toggle num={toggleNums[1]} name={toggleNames[1]} onClick={handleToggleClick} />
                <Toggle num={toggleNums[2]} name={toggleNames[2]} onClick={handleToggleClick} />
      </div>
    </div>

    </div>
    
  );
}
