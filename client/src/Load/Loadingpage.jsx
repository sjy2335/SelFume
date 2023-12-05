import React from "react";
import Load from "./load.gif";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./load.css";
export default function Loadingpage() {
    
    const navigate = useNavigate();

    useEffect(() => {
        // 3초 후에 navigate("/result") 호출
        const timeoutId = setTimeout(() => {
            navigate("/result");
        }, 3000);

        // 컴포넌트가 언마운트되면 타이머 해제
        return () => clearTimeout(timeoutId);}, [navigate]);

            

    return (
        <div className="loadresultpage">
            <img src={Load} alt="loadimg" className="loading" />
        </div>
    );


}