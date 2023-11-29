import React from "react";
import third from "./셋.png";
import { useNavigate } from "react-router-dom";
function ThirdPage() {
    const navigate = useNavigate();
    const handleButtonClick = (buttonNumber) => {
    console.log(`${buttonNumber}번`);
    navigate("/")
    };

  return (
    <div className="firstpagediv">
      <div className="species">Mid</div>
      <div className="makeimgdiv">
        <img src={third} alt="result img" className="makeimg" />
      </div>
      <div className="makeform">
        <button
          className="firstbtn"
          onClick={() => handleButtonClick(7)}
        ></button>
        <button
          className="secondbtn"
          onClick={() => handleButtonClick(8)}
        ></button>
        <button
          className="thirdbtn"
          onClick={() => handleButtonClick(9)}
        ></button>
      </div>
    </div>
  );
}

export default ThirdPage;