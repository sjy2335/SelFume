import React, { useState } from "react";
import styles from "./make.css";
import Toggle from "./Toggle";
import Nav from "../../Nav/Nav";
import { sendCommand } from "./sendCommand";
import { useNavigate, useLocation } from "react-router-dom";

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
  const navigate = useNavigate();
  const { state } = useLocation();
  const nickName = state ? state.nickName : null;
  const story = state ? state.story : null;
  const emotion = state ? state.emotion : null;

  const [selectedNotes, setSelectedNotes] = useState([]);

  const [isFadingIn, setIsFadingIn] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const handleToggleClick =  async (clickedNum) => {
    const command = COMMANDS_AND_NOTES[clickedNum]?.command;
    const note = COMMANDS_AND_NOTES[clickedNum]?.note;

    if (command) {
      const success = true;
      await sendCommand(command);
      
      

      setSelectedNotes((prevNotes) => {
        const newNotes = [...prevNotes, note];

        

        return newNotes;
      });

      if (!success) {
        // error handling
      }
    }
  };

  const handleNextButtonClick = async () => {
    let newNotes = selectedNotes; // 현재까지 선택된 노트들을 복사
    setIsFadingIn(true);
    await new Promise((resolve) => setTimeout(resolve, 500));
    setIsFadingIn(false);
    if (pageTitle === "Base") {
      
      setPageTitle("Mid");
      setToggleNums([3, 4, 5]);
    } else if (pageTitle === "Mid") {
      setPageTitle("Top");
      setToggleNums([6, 7, 8]);
    } else if (pageTitle === "Top") {
      navigate("/last", {
        state: { nickName, story, emotion, selectedNotes: newNotes },
      });
    }
  };

  return (
    <div>
      <Nav />
      <div className="Makepagediv">
        <h1
          className={`togglename ${isFadingIn ? "animate-in" : ""} ${
            isFadingOut ? "animate-out" : ""
          }`}
        >
          {pageTitle}
        </h1>{" "}
        <div
          className={`togglearray ${isFadingIn ? "animate-in" : ""} ${
            isFadingOut ? "animate-out" : ""
          }`}
        >
          {toggleNums.map((num) => (
            <Toggle
              key={num}
              num={num}
              onClick={() => handleToggleClick(num)}
              name={COMMANDS_AND_NOTES[num]?.note || "Unknown"}
            />
          ))}
        </div>
        <div className="nextbtndiv">
          <button className="nextbtn" onClick={handleNextButtonClick}>
            다음
          </button>
        </div>
      </div>
    </div>
  );
}
