import React from "react";
import styles from "./startpage.css";
import perfume  from "./start.png";
import Nav from "../Nav/Nav";
import { useNavigate } from "react-router-dom";
export default function Startpage() {
    const navigate = useNavigate();
    const onClick =() => {
        navigate("/write")
    }
    return(
             <div>
                <Nav/>

                <div class="about">
                <a class="bg_links social portfolio" href="https://www.rafaelalucas.com" target="_blank">
                    <span class="icon"></span>
                </a>
                <a class="bg_links social dribbble" href="https://dribbble.com/rafaelalucas" target="_blank">
                    <span class="icon"></span>
                </a>
                <a class="bg_links social linkedin" href="https://www.linkedin.com/in/rafaelalucas/" target="_blank">
                    <span class="icon"></span>
                </a>
                <a class="bg_links logo"></a>
                </div>

                
                <header class="mainHeading">
                <div class="mainHeading__content">
                    <article class="mainHeading__text">
                     
                        <h2 class="mainHeading__title">Capture Your Emotions in Perfume.</h2>
                        <p class="mainHeading__description">
                            당신의 감정을 담아 향기에 담아주는<br></br> 셀프 향수공방 SelFume입니다.
                        </p>
                        <button onClick={onClick} class="cta">Start</button>
                    </article>

                    <figure class="mainHeading__image">
                        <img
                            src={perfume}
                            alt=""
                            className="perfumeimg "
                        />
                    </figure>
                </div>
                </header>

        </div>
    );
}