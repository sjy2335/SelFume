import React from "react";
import styles from "./last.css";
import Nav from "../Nav/Nav";
import { useLocation } from "react-router-dom";
export default function Lastpage() {
    const perfumeName = "가을 깊은 산속 너의 목청소리" ;
    const perfumetxt = "가을 산속 깊은 메아리를 통해서 마음을 치유어쩌고";
    const { state } = useLocation();
    const nickName = state ? state.nickName : null;
    const message = state ? state.message : null;
    console.log("마지막 페이지 : ",{nickName},{message})
    const choice = ["우딘", "플로럴", "아로마"]
    return(
        <div>
            <Nav />
            <div className="Lastpagediv">
            
            <div className="lastmain">
                <div className="lastmaindiv">
                    <img className="lastimg" src="https://assets-global.website-files.com/5c34b6b890599d7dd2b3f60d/5cad630751e5f8bd0af6889f_bottle%20copy.gif" alt="lastimg" />
                    <div className="choicediv">
                    <h3 className="finish">향수 제작이 완료되었어요!</h3>
                        <h3 className="choicetxt">
                            Base : {choice[0]}<br></br>
                            Mid : {choice[1]}<br></br>
                            TOP : {choice[2]}
                        </h3>
                        <h3 className="nickgo">{nickName}에게 향수 이름을 추천해드릴게요!</h3>
                    </div>
                </div>
                <div>
                    
                    
                    <div className="lasttxtdiv">
                        <h2 className="lasttxt">
                            " {perfumeName} "
                        </h2>
                    </div>
                    <div className="perfumetxtdiv">
                        <h5 className="perfumetxt">
                            {perfumetxt}
                        </h5>

                    </div>
                    
                </div>

            </div>
        </div>
        
            
             
        </div>
    );
}