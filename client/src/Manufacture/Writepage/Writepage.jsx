import React, { useState } from "react";
import styles from "./write.css";
import Nav from "../../Nav/Nav";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Writepage() {
  const navigate = useNavigate();
  const [nickName, setNickName] = useState("");
  const [message, setMessage] = useState("");

  const onClick = async () => {
    console.log(nickName, message);
    try {
      const response = await axios.post("BACKEND_API_ENDPOINT", {
        nickName: nickName,
        message: message,
      });

      console.log(response.data);
    } catch (error) {
      console.error("Error sending data to the backend:", error);
    }
    navigate("/load");
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
