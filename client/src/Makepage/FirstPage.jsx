import React from "react";
import first from "./하나.png";
import { useNavigate } from "react-router-dom";
function FirstPage() {
    const navigate = useNavigate();
  const handleButtonClick = (buttonNumber) => {
    console.log(`${buttonNumber}번`);
    navigate("/second")
  };

  return (
    <div className="firstpagediv">
      <div className="species">Base</div>
      <div className="makeimgdiv">
        <img src={first} alt="result img" className="makeimg" />
      </div>
      <div className="makeform">
        <button
          className="firstbtn"
          onClick={() => handleButtonClick(1)}
        ></button>
        <button
          className="secondbtn"
          onClick={() => handleButtonClick(2)}
        ></button>
        <button
          className="thirdbtn"
          onClick={() => handleButtonClick(3)}
        ></button>
      </div>
    </div>
  );
}

export default FirstPage;