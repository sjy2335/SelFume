// LoadPage.jsx

import React, { useEffect } from "react";
import Load from "./load.gif";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./load.css";

export default function Loadingpage() {
  const navigate = useNavigate();
  const location = useLocation();
  const nickName = location.state.nickName;
  const message = location.state.message;

  useEffect(() => {
    // 3초 후에 navigate("/result") 호출
    const timeoutId = setTimeout(() => {
      navigate("/result", { state: { nickName, message } });
    }, 3000);

    // 컴포넌트가 언마운트되면 타이머 해제
    return () => clearTimeout(timeoutId);
  }, [navigate, nickName, message]);

  return (
    <div className="loadresultpage">
      <img src={Load} alt="loadimg" className="loading" />
    </div>
  );
}
