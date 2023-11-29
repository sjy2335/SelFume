import React, { useEffect } from "react";
import first from "./하나.png";
import { useNavigate } from "react-router-dom";

function FirstPage() {
    const navigate = useNavigate();

    const handleButtonClick =(buttonNumber) => {
        console.log(`${buttonNumber}번`);
        // 첫 번째 버튼 클릭 시 "/loading"으로 이동
        navigate("/loadmaking");

        // 3초 후에 "/secondPage"로 이동
        setTimeout(() => {
            navigate("/second");
        }, 1000);
    };

    return (
        <div className="firstpagediv">
            <div className="species">Base</div>
            <div className="makeimgdiv">
                <img src={first} alt="result img" className="makeimg" />
            </div>
            <div className="makeform">
                    <button className="firstbtn"
                        onClick={() => handleButtonClick(1)}></button>
                    <button className="secondbtn"
                        onClick={() => handleButtonClick(2)}></button>
                    <button className="thirdbtn"
                        onClick={() => handleButtonClick(3)}></button>
            </div>
        </div>
    );
}

export default FirstPage;
