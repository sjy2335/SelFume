import React from "react";
import styles from "./result.css";
import Percent from "./Percent";
import Nav from "../../Nav/Nav";
import { useNavigate } from "react-router-dom";

export default function Resultpage(){
    const navigate= useNavigate();
    const onClick=() => {
        navigate("/make");
    }
    const emotion ="놀람";
    const ment = "오늘 놀랐던 감정을 차분히 할 수 있도록 도와드릴게요.";
    const base = "아로마 base 2"
    
    return (
        <div>
            <div>
                <Nav/>

            </div>
           
        
            <div className="resultpagediv">
                <div className="emotion">
                    <h5 className="emotion-notice">감정 분석결과, 당신이 느낀 감정은 "{emotion}"입니다.<br></br>
                    {ment}<br></br></h5>
                    <h5 className="emotion-notice-last">{base}를 추천드려요!</h5>
                    <div>
                    <img  className="emoimg" src="https://thumbs.dreamstime.com/b/smile-surprise-upset-emotion-29434452.jpg" />
                </div>
                
            </div>
        
            <div className="percentarray">
                
                <Percent what="놀람" percent="38.1"/>
                <Percent what="분노" percent="1.2"/>
                <Percent what="기쁨" percent="35.9"/>
                <Percent what="슬픔" percent="8.7"/>
                <Percent what="당황" percent="25.0"/>
                <Percent what="상처" percent="12.1"/>
                <button className="makebtn" onClick={onClick}>제작하기</button>
            </div>
            
                        


        </div>

        </div>
        
    );
}