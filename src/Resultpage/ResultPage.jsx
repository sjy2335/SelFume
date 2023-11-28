import React from "react";
import resultpic from './놀람.png';
import { useNavigate } from "react-router-dom";

function ResultPage() {
    const navigate = useNavigate();
    const onClick = () => {
        navigate("/make");
    }
    return(
        <div className="resultdiv">
            <div className="startbox">
                <div className="resultment"><h3>진상님의 감정분석 결과</h3></div>
                <div>
                    <img src={resultpic} alt="result img" className="resultimg" />
                </div>
                    <h6 className="resulttxt">진상님의 사연에서는 "당황"이 느껴져요 <br></br>
                        현재감정에 맞는 향수 베이스를 추천해드릴게요
                    </h6>
            </div>
            <div className="resultbtndiv">
                <button onClick={onClick} className="resultbtn">🧪 나만의 향수 만들러가기 🧪</button>
            </div>
        </div>
    );
}

export default ResultPage;