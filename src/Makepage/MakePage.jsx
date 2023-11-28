import React from "react";
import shelf from './선반틀.png';
import { useNavigate } from "react-router-dom";

function MakePage() {
    const Navigate = useNavigate();
    const onClick = () => {
        Navigate("/");
    }
    return(
        <div className="makepagediv">
            <div >
                <div className="recodiv">
                    <h1 className="recoment">“상진” 님,
                        <br></br>BASE 2번  머스크를 추천합니다.
                    </h1>
                </div>
                <div className="reconotice">
                    <h6 className="reconoticetxt">키보드 키를 이용해, 
                        <br></br>BASE {">"} MID {">"} TOP 순으로
                        향료를 선택해주세요.
                        <br></br>추천 조합은 제작기 LED 조명으로 나타납니다.</h6>
                </div>
                <div>
                    <button onClick={onClick} className="finishbtn">다시하기</button>
                </div>
            </div>
            <div>
                <img src={shelf} alt="shelf" className="shelf" />
            </div>
        </div>
    );
}

export default MakePage;