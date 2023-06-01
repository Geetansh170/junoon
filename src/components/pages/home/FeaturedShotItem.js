import React from "react";

function FeaturedShotItem(props) {
  //   var s = "./featuredShots/h" + props.imgNo + ".jpg";

  return (
    <div className='item col-md-6 col-lg-4'>
      <div className='box bg-inverse p-30'>
        <figure className='main mb-20 overlay overlay1 rounded'>
          <img src={`style/images/featuredShots/h${props.imgNo}.jpg`} alt='' />

          {/* src={require(s + "").default} alt='' /> */}
        </figure>
      </div>
    </div>
  );
}

export default FeaturedShotItem;
