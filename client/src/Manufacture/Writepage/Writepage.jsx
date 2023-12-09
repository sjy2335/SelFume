import React, { useState } from "react";
import styles from "./write.css";
import Nav from "../../Nav/Nav";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Writepage() {
  const navigate = useNavigate();
  const [nickName, setNickName] = useState("");
  const [message, setMessage] = useState("");

  const onClick = async (e) => {
    // Make API call to predict emotion
    // Server-side code에 넣는 게 나을 것 같기도 한데.. 흠
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://8071-35-240-253-184.ngrok-free.app/predict-emotion",
        {
          sentence: message,
        }
      );
      // Extract emotion from the response
      const emotions = response.data.result;
      // Navigate to the result page with emotion as a parameter
      let maxEmotion = Object.keys(emotions).reduce((a, b) =>
        emotions[a] > emotions[b] ? a : b
      );

      navigate("/load", { state: { emotions, maxEmotion } });
    } catch (error) {
      console.error("Error predicting emotion:", error);
    }
  };

  return (
    <div className="writepagediv">
      <Nav />

      <form>
        <h1 className="title text-center mb-4">
          오늘 있었던 일, <br></br>오늘 나의 생각, <br></br> 누군가에게 하고
          싶지만 못했던 말들을 <br></br> 자유롭게 적어주세요.
        </h1>

        <div className="writing">
          <div className="form-group position-relative">
            <label htmlFor="formName" className="d-block">
              <i className="icon" data-feather="user"></i>
            </label>
            <input
              type="text"
              id="formName"
              className="form-control form-control-lg thick"
              placeholder="닉네임"
              onChange={(e) => setNickName(e.target.value)}
            />
          </div>

          <div className="form-group message">
            <textarea
              id="formMessage"
              className="form-control form-control-lg"
              rows="7"
              placeholder="자유롭게 적어주세요"
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
        </div>

        <div className="text-center">
          <button type="button" className="btn btn-primary" onClick={onClick}>
            SAVE
          </button>
        </div>
      </form>
    </div>
  );
}
