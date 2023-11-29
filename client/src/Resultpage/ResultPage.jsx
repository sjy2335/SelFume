import React from "react";
import resultpic from './놀람.png';
import { useNavigate } from "react-router-dom";

function ResultPage() {
    const navigate = useNavigate();
    const onClick = () => {
        navigate("/first");
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
                <div className="reconotice">
                        <h6 className="reconoticetxt">
                            BASE 2번 우딘을 추천드려요.
                            나무향을 통해서 진정된 효과를 받을 수 있을거예요!
                            <br></br><br></br><br></br>키보드 숫자 키를 이용해, 
                            <br></br>BASE {">"} MID {">"} TOP 순으로
                            향료를 선택해주세요.
                            <br></br>추천 조합은 제작기 LED 조명으로 나타납니다.</h6>
                </div>
                <button onClick={onClick} className="resultbtn">🧪 나만의 향수 만들러가기 🧪</button>
            </div>
        </div>
    );
}

export default ResultPage;