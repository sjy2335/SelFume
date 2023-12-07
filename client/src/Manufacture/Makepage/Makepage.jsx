// Makepage.jsx
import React, { useState, useEffect } from "react";
import styles from "./make.css";
import Toggle from "./Toggle";
import Nav from "../../Nav/Nav";
import { sendCommand } from "./sendCommand";

const COMMANDS_AND_NOTES = {
  0: { command: "3", note: "아로마" },
  1: { command: "2", note: "머스크" },
  2: { command: "1", note: "우디" },

  3: { command: "6", note: "시트러스" },
  4: { command: "5", note: "옐로우" },
  5: { command: "4", note: "다크" },

  6: { command: "9", note: "플로럴" },
  7: { command: "8", note: "레몬" },
  8: { command: "7", note: "프루티" },
};

export default function Makepage() {
  const [pageTitle, setPageTitle] = useState("Base");
  const [toggleNums, setToggleNums] = useState([0, 1, 2]);

  const handleToggleClick = async (clickedNum) => {
    const command = COMMANDS_AND_NOTES[clickedNum]?.command;
    if (command) {
      const success = await sendCommand(command);
      if (success) {
        // 3초 후에 실행되는 함수
        setTimeout(() => {
          if (pageTitle === "Base") {
            setPageTitle("Mid");
            setToggleNums((prevNums) => prevNums.map((num) => num + 3));
          } else if (pageTitle === "Mid") {
            setPageTitle("Top");
            setToggleNums((prevNums) => prevNums.map((num) => num + 3));
          }
        }, 3000);
      } else {
        // error handling
      }
    }
  };

  return (
    <div>
      <Nav />
      <div className="Makepagediv">
        <h1 className="togglename">{pageTitle}</h1>
        <div className="togglearray">
          {toggleNums.map((num) => (
            <Toggle
              key={num}
              num={num}
              name={COMMANDS_AND_NOTES[num]?.note || "Unknown"}
              onClick={() => handleToggleClick(num)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
