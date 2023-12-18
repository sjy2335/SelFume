import React from "react";
import styles from "./result.css";
import Percent from "./Percent";
import Nav from "../../Nav/Nav";
import { useNavigate, useLocation } from "react-router-dom";

export default function Resultpage() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const nickName = state ? state.nickName : null;
  const story = state ? state.story : null;
  const emotions = state ? state.emotions : null;
  const maxEmotion = state ? state.maxEmotion : null;

  console.log(emotions, maxEmotion);
  const emotionsData = {
    불안: {
      ment: "불안한 마음을 진정시켜 줄",
      base: "파츌리",
      img: "https://cdn1.iconfinder.com/data/icons/emojis-3d-classic/512/fear.png", // Replace with actual file name
    },
    분노: {
      ment: "분노를 가라앉힐 수 있는",
      base: "모스",
      img: "https://cdn1.iconfinder.com/data/icons/emojis-3d-classic/512/fury.png", // Replace with actual file name
    },
    상처: {
      ment: "마음의 상처를 치유하는 데 도움이 되는",
      base: "모스",
      img: "https://cdn2.iconfinder.com/data/icons/3d-emoji-1/512/Emoji___emoticon_emoji_sticker_face_bored_speechless_right2x.png", // Replace with actual file name
    },
    슬픔: {
      ment: "슬픔을 달래줄 위로의",
      base: "파츌리",
      img: "https://cdn2.iconfinder.com/data/icons/3d-emoji-1/512/Emoji___emoticon_emoji_sticker_face_sad_unhappy_cry_center2x.png", // Replace with actual file name
    },
    당황: {
      ment: "당황스러운 상황을 잘 처리할 수 있는 분위기의",
      base: "머스크",
      img: "https://cdn2.iconfinder.com/data/icons/3d-emoji-1/512/Emoji___emoticon_emoji_sticker_face_embarressed_kidding_laugh_left2x.png", // Replace with actual file name
    },
    기쁨: {
      ment: "기쁨을 더욱 배가시킬 수 있는 긍정적인",
      base: "머스크",
      img: "https://cdn1.iconfinder.com/data/icons/emojis-3d-classic/512/happy.png", // Replace with actual file name
    },
  };

  const onClick = async () => {
    console.log(nickName, story, maxEmotion);
    navigate("/make", { state: { nickName, story, emotion: maxEmotion } });
  };

  const emotionData = emotionsData[maxEmotion] || {
    ment: "기본 메시지입니다.",
    img: "default.jpg", // Default image URL
    base: "기본 아로마 base",
  };

  return (
    <div>
      <div>
        <Nav />
      </div>
      <div className="resultpagediv">
        <div className="emotion">
          <h5 className="emotion-notice">
            감정 분석결과, 당신이 느낀 감정은 "{maxEmotion}"입니다.<br></br>
            {emotionData.ment} 향기를 드릴게요.
            <br></br>
          </h5>
          <h5 className="emotion-notice-last">
            {emotionData.base}를 추천드려요!
          </h5>
          <div>
            <img className="emoimg" src={emotionData.img} />
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
