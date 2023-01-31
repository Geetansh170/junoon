import React from "react";

function FromLeft(props) {
  return (

    <div className="js-timeline_item js-ag-animated ag-timeline_item">
      <div className="ag-timeline-card_item">
        <div className="ag-timeline-card_inner">

          <div className="ag-timeline-card_img-box">
            <img
              src={props.src}
              className="ag-timeline-card_img"
              width={640}
              height={360}
              alt=""
            />

          </div>
          <div className="ag-timeline-card_info">
            <div className="ag-timeline-card_title">{props.season}</div>
            <div className="ag-timeline-card_desc">{props.info}</div>
          </div>
        </div>

        <div className="ag-timeline-card_arrow" />
      </div>

      <div className="js-timeline-card_point-box ag-timeline-card_point-box">
        <div className="ag-timeline-card_point">{props.year}</div>
      </div>
      
      <div className="ag-timeline-card_meta-box">
        <div className="ag-timeline-card_meta">{props.season}</div>
      </div>
    </div>
  );
}

export default FromLeft;
