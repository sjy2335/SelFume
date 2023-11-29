import React, { useEffect } from "react";
import Load from "./making.gif";
import { useNavigate } from "react-router-dom";

function LoadResult() {
    const navigate = useNavigate();

    useEffect(() => {
        // 3초 후에 navigate("/result") 호출
        const timeoutId = setTimeout(() => {
            navigate("/result");
        }, 1500);

        // 컴포넌트가 언마운트되면 타이머 해제
        return () => clearTimeout(timeoutId);
    }, [navigate]);

    return (
        <div className="loadresultpage">
            <img src={Load} alt="loadimg" className="loading" />
        </div>
    );
}

export default LoadResult;
