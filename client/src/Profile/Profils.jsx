import React from "react";
import styles from "./profile.css"
import Nav from "../Nav/Nav";
export default function Profile(){
    return(
        <div>
            <Nav/>
                    <div className="profilediv">
            
            <h1 className="profiletitle">MEMBERS</h1>
          <div class="container">
<div class="card">
  <h2>윤상진</h2>
  <div class="title title--epic">백엔드, 아두이노</div>
  
  
    <div class="actions">
    <button class="actions__like">like &nbsp; <i class="fas fa-heart"></i> </button>
    <button class="actions__trade">trade &nbsp; <i class="fas fa-exchange-alt"></i> </button>
    <button class="actions__cancel">close &nbsp; <i class="fas fa-times"></i> </button>
  </div>
</div>
<div class="card">
  <h2>이재림</h2>
  <div class="title title--legendary">프론트엔드, 아두이노</div>
  
 
    
    <div class="actions">
      <button class="actions__like">like &nbsp; <i class="fas fa-heart"></i> </button>
    <button class="actions__trade">trade &nbsp; <i class="fas fa-exchange-alt"></i></button>
    <button class="actions__cancel">close &nbsp; <i class="fas fa-times"></i></button>
  </div>
</div>

       </div></div>
        </div>

  );
}