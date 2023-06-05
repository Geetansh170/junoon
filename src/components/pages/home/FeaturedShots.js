import React from "react";
import FeaturedShotItem from "./FeaturedShotItem";
import "./featuredshots.css";

function FeaturedShots() {
  let itemList = [];
  for (let index = 1; index <= 9; index++) {
    itemList.push(<FeaturedShotItem key={index} imgNo={index} />);
  }

  return (
    <div className='tiles'>
      <div className='items row boxed grid-view text-center'>{itemList}</div>
    </div>
  );
}

export default FeaturedShots;
