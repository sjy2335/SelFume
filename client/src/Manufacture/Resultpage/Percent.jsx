import React from "react";
import styles from "./result.css";

export default function Percent(props) {
  // Calculate the target width based on the percent prop
  const targetWidth = (props.percent * 30) / 100 + "vw";

  return (
    <div className="percent div">
      <div className="percent">
        <div className="out">
          {/* Set a CSS variable for the target width */}
          <div className="in" style={{ "--target-width": targetWidth }}></div>
        </div>
        <span className="what">
          {props.what} {props.percent} %
        </span>
      </div>
    </div>
  );
}
