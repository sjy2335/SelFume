// ThirdPage.jsx
import React from "react";
import third from "./셋.png";
import { useNavigate } from "react-router-dom";
import { sendCommand } from "./sendCommand"; // Adjust the path based on your project structure

function ThirdPage() {
  const navigate = useNavigate();

  const handleButtonClick = async (buttonNumber) => {
    console.log(`${buttonNumber}번`);

    // Example: Sending a command when a button is clicked
    const success = await sendCommand(buttonNumber.toString());

    if (success) {
      // Navigate to the first page if the command was sent successfully
      navigate("/");
    } else {
      // Handle error if needed
    }
  };

  return (
    <div className="firstpagediv">
      <div className="species">Top</div>
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
