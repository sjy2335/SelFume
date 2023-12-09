import React from "react";
import styles from "./last.css";
import Nav from "../Nav/Nav";
export default function Lastpage() {
    return(
        <div className="Lastpagediv">
            <Nav />
            <div className="lastmain">
                <div>
                    <img className="lastimg" src="https://assets-global.website-files.com/5c34b6b890599d7dd2b3f60d/5cad630751e5f8bd0af6889f_bottle%20copy.gif" alt="lastimg" />
                </div>
                <div >
                    <div>
                        <h3 className="lasttxt">ㅇㅇ님이 고르신 향료는 아로마,바닐라,플로럴입니다.
                            <br></br><br></br>향수에 대한 이름을 추천해드릴게요!
                        </h3>
                        
                    </div>
                    
                    <div className="lasttxtdiv">
                        <h2 className="lasttxt">
                            "가을 깊은 산속 너의 목청소리"
                        </h2>
                    </div>
                    
                </div>

            </div>
            
             
        </div>
    );
}