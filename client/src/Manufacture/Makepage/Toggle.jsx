// Toggle.jsx

import React, { useState, useEffect } from "react";
import styles from "./make.css";

export default function Toggle(props) {
  const { num, name, isSelected, onClick } = props;
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // isSelected 값이 변경될 때마다 isActive 상태 초기화
    setIsActive(false);

    // 선택된 경우 3초 후에 클래스 초기화
    if (isSelected) {
      const timer = setTimeout(() => {
        onClick(num); // 선택된 토글의 onClick 함수 호출
      }, 3000);

      // 컴포넌트가 언마운트 되면 타이머 클리어
      return () => clearTimeout(timer);
    }
  }, [isSelected, num, onClick]);

  const toggleActive = () => {
    setIsActive(!isActive);
    // 부모 컴포넌트의 onClick 함수 호출
    onClick(num);
  };

  return (
    <div>
      <section className="light">
        <div
          className={`circle ${isActive ? "active" : ""} ${
            isSelected ? "selected" : ""
          }`}
          onClick={toggleActive}
        >
          <p className="circlename">{props.name}</p>
        </div>
      </section>
    </div>
  );
}
