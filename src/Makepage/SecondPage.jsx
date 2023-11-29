import React from "react";
import second from "./둘.png";
import { useNavigate } from "react-router-dom";
function SecondPage() {
    const navigate = useNavigate();
    const handleButtonClick = (buttonNumber) => {
    console.log(`${buttonNumber}번`);
    navigate("/third")
    };

  return (
    <div className="firstpagediv">
      <div className="species">Mid</div>
      <div className="makeimgdiv">
        <img src={second} alt="result img" className="makeimg" />
      </div>
      <div className="makeform">
        <button
          className="firstbtn"
          onClick={() => handleButtonClick(4)}
        ></button>
        <button
          className="secondbtn"
          onClick={() => handleButtonClick(5)}
        ></button>
        <button
          className="thirdbtn"
          onClick={() => handleButtonClick(6)}
        ></button>
      </div>
    </div>
  );
}

export default SecondPage;