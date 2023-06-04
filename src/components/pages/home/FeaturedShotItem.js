import React from "react";
import "./featuredshots.css";
import { FSData } from "./featuredshotscredits";

function FeaturedShotItem(props) {
  //   var s = "./featuredShots/h" + props.imgNo + ".jpg";

  return (
    <div className='item col-md-6 col-lg-4'>
      <div className='box bg-inverse p-30 fsbox imgtext'>
      {/* <div className='box p-30'> */}
        <figure className='main mb-20 overlay overlay1 rounded'>
          <img src={`style/images/featuredShots/h${props.imgNo}.jpg`} alt='' />
          <div>Shot by: <a href={FSData[props.imgNo-1].href} target="_blank" rel="noopener noreferrer">{FSData[props.imgNo-1].handle}</a></div>
          {/* src={require(s + "").default} alt='' /> */}
        </figure>
      </div>
    </div>
  );
}

export default FeaturedShotItem;
