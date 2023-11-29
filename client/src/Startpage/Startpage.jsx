import React from "react";
import Styles from "./startpage.css"// eslint-disable-next-line
import mainlogo from './logo.png';
import { Navigate, useNavigate } from "react-router-dom";
function Startpage(){
    const navigate = useNavigate();
    const goNext = () => {
        navigate("/story");
    }
    return(
        <div>
            <div className="startbox">
            
                <div className="logo">
                    <img src={mainlogo} alt="main logo" className="firstlogo" />
                    <div className="nicknamediv">
                        <h5 className="nicknametxt">닉네임</h5>
                        <form>
                            <input className="nicknameinput" type="text" placeholder="닉네임을 입력해주세요" />
                            <input className="nicknamebtn" type="submit" value={"입장"} onClick={goNext} />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Startpage;