import React from "react";
import TimelineCard from "./TimelineCard";
import FooterBlack from "../FooterBlack";
import { TimelineData } from "./TimelineData";
import NavbarBlack from "../NavbarBlack";

function timeline() {
  const timelineCards = TimelineData.map((item, index) => {
    return (
      <TimelineCard
        key={index}
        season={item.season}
        src={item.src}
        info={item.info}
        year={item.year}
      />
    );
  });

  return (
    <div>
      {/* NAVBAR */}
      <NavbarBlack />
      <div className='ag-timeline-block'>
        <div className='ag-timeline_title-box'>
          <div className='ag-timeline_tagline'>
            Welcome to the JUNOON timeline
          </div>
          {/* <div className="ag-timeline_title">Time Line</div> */}
          <a href='#sec-2'>
            <div className='scroll-down'></div>
          </a>
        </div>

        <section className='ag-section' id='sec-2'>
          <div className='ag-format-container'>
            <div className='js-timeline ag-timeline'>
              <div className='js-timeline_line ag-timeline_line'>
                <div className='js-timeline_line-progress ag-timeline_line-progress' />
              </div>

              <div className='ag-timeline_list'>
                {/* The first card appears from right side, then cards appear alternatively (from left then right then left) */}
                {timelineCards}
                {/* <TimelineCard
                  season='JUNOON APPROACHED FROM OUTSIDE TO COVER EVENT'
                  src='https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/timeline/images/img-12.png'
                  info='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula
                      eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
                      montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
                      pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
                      vel, aliquet nec, vulputate eget, arcu.'
                  year='2022'
                /> */}{" "}
              </div>
            </div>
          </div>
        </section>
      </div>
      <FooterBlack />
    </div>
  );
}
export default timeline;
