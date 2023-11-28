import React from "react";
import mainlogo from './logo.png';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
function WritePage() {
    const name = "진상";
    const navigate = useNavigate();
    const [textValue, setTextValue] = useState("");
    const handleSetValue = (e) => {
        setTextValue(e.target.value);
    };
    const onClick=() => {
        navigate("/result");
    }
    return(
        <div>
            <div className="writepagediv">
                <div className="notivediv">
                    <div className="logo2">
                        <img src={mainlogo} alt="main logo" className="secondlogo" />
                    </div>
                    <div className="noticetxt">
                        <br></br>안녕하세요, {name}님
                        <br></br><br></br>나의 감정을 담은 향수를 직접 만들다.
                        <br></br>셀프 향수 제작소 SELFUME 입니다.

                        <br></br><br></br>오늘 느꼈던 감정, 있었던 일들, 
                        <br></br>또는 특정 대상에게 하고 싶었던 말들을 
                        <br></br>자유롭게 작성해주세요
                    </div>
                </div>

                <div className="storydiv">
                    <div className="storytitle">
                        <h5 className="storytitletxt">나의 사연 담기</h5>
                    </div>
                    <form className="storyform">
                        
                        <textarea onChange={(e) => handleSetValue(e)} value={textValue} className="storyinput"></textarea>
                        
                        <div><input type="submit" className="storybtn" onClick={onClick}/></div>
                        
                    </form>

                </div>
            </div>

        </div>
    );
}

export default WritePage;