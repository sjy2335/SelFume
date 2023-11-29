import React, { useEffect } from "react";
import making from "./making.gif";
import { useNavigate } from "react-router-dom";

function LoadMake() {
    const navigate = useNavigate();

    useEffect(() => {
        // 3초 후에 navigate("/result") 호출
        const timeoutId = setTimeout(() => {
            navigate("/first");
        }, 1500);

        // 컴포넌트가 언마운트되면 타이머 해제
        return () => clearTimeout(timeoutId);
    }, [navigate]);

    return (
        <div className="loadresultpage">
            <img src={making} alt="loadimg" className="loadingmake" />
        </div>
    );
}

export default LoadMake;
