import React from "react";
import logo from "../pages/imgs/junoonlogo.png"
function Cardcollection(props) {
  return ( 
    <div style={{margin:"30px"}}>
        <div class="card" >
            <img src={props.data.img} className="img_d"/>
            <div className="card_overlay">
        <img src={logo} className="logo_junoon"/>
          <div class="content">
            <h2 class="title">{props.data.name}</h2>

            <a href={props.data.link} target="_blank">
              <button class="btn">View More</button>
            </a>
          </div>
            </div>
        </div>
    </div>
  );
}

export default Cardcollection;
