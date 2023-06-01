import React from "react";
import "./Developers.css";

function DevCard(props) {
  let str2 = "./dev-team/" + props.name + ".jpg";
  return (
    <div>
      <div className='dev-card swiper-slide'>
        <div className='dev-image-content'>
          <span className='dev-overlay'></span>

          <div className='dev-card-image'>
            <img
              src={require(str2 + "").default}
              alt=''
              className='dev-card-img'
            />
          </div>
        </div>

        <div className='dev-card-content'>
          <h2 className='dev-name'>{props.name}</h2>
          <p className='dev-description'>{props.title}</p>
        </div>
      </div>
    </div>
  );
}

export default DevCard;
