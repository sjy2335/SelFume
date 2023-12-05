import React from "react";
import styles from "./result.css";
export default function Percent(props) {
    const size = props.percent * 0.5;
    return(
        <div className="percent div">
            <div className="percent">
                <div className="out">
                    <div className="in" style={{width:`${size}vw`}}>
                       
                    </div>
                </div>
                <span className="what" > 
                    {props.what} {props.percent} %
            </span>
            </div>
            
        </div>
    );
}