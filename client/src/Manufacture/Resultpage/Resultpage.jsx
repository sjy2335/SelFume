import React from "react";
import styles from "./result.css";
import Percent from "./Percent";
import Nav from "../../Nav/Nav";
import { useLocation, useNavigate } from "react-router-dom";

export default function Resultpage() {
  const navigate = useNavigate();
  const { emotions, maxEmotion } = useLocation().state || {
    emotions: {},
    maxEmotion: "오류",
  };
  const onClick = () => {
    navigate("/make");
  };
  const emotion = "놀람";
  const ment = "오늘 놀랐던 감정을 차분히 할 수 있도록 도와드릴게요.";
  const base = "아로마 base 2";

  return (
    <div>
      <div>
        <Nav />
      </div>

      <div className="resultpagediv">
        <div className="emotion">
          <h5 className="emotion-notice">
            감정 분석결과, 당신이 느낀 감정은 "{maxEmotion}"입니다.<br></br>
            {ment}
            <br></br>
          </h5>
          <h5 className="emotion-notice-last">{base}를 추천드려요!</h5>
          <div>
            <img
              className="emoimg"
              src="https://thumbs.dreamstime.com/b/smile-surprise-upset-emotion-29434452.jpg"
            />
          </div>
        </div>

        <div className="percentarray">
          {Object.entries(emotions).map(([emotion, value]) => (
            <Percent key={emotion} what={emotion} percent={value.toFixed(2)} />
          ))}
          <button className="makebtn" onClick={onClick}>
            만들러 가기
          </button>
        </div>
      </div>
    </div>
  );
}
