import React from 'react';
// import "./Collections.css"

// Inside the wrapper div their is another div. Which had had 2 class names e.g. className="card card6"
// I have taken them as cardClasses.
// These cardClasses decide the bg image of card (mainly) and few more stuff.

// The 2nd prop is simply the drive link!
const CollectionCard = (props) => {
    return (
        <>
            <div className="wrapper">
            <a
              href={props.eventLink}
              className="mainText"
              target="_blank"
            >
              <div className={props.cardClasses}>
                <p className="headText">{props.eventName}</p>
                <hr className="headUnderline"></hr>
                <i className="fal">
                  <span className="jnlogo"></span>
                </i>
              </div>
            </a>
          </div>
        </>
    )
}

export default CollectionCard;