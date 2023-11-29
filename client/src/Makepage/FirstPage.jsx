import React from "react";
import first from "./하나.png";
import { useNavigate } from "react-router-dom";
import { sendCommand } from "./sendCommand";

function FirstPage() {
  const navigate = useNavigate();
  const handleButtonClick = async (buttonNumber) => {
    const success = await sendCommand(buttonNumber.toString());
    if (success) {
      // Navigate to the next page if the command was sent successfully
      navigate("/second");
    } else {
      // Handle error if needed
    }
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
