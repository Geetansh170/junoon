import React, { useState, useContext } from "react";
import Wallpaper_images_for_desktop from "./wallpaper_images_for_desktop";
import "./Mockup.css";
import farewell2022 from "../pages/imgs/farewell2022.png";
import { WallPaperContext } from "../../context/WallPaperContext";
import { useEffect } from "react";

const DesktopMockup = () => {
  const { urlD, setUrlD, indexD, setIndexD, isDesk, setIsDesk, lengthD } =
    useContext(WallPaperContext);

  useEffect(() => {
    setIsDesk(true);
    // console.log(urlD);
  }, []);

  const nextSlide = () => {
    if (indexD >= lengthD - 2) {
      setIndexD(0);
    } else {
      setIndexD(indexD + 1);
    }

    // console.log("inc", indexD);
  };
  const prevSlide = () => {
    if (indexD <= 0) {
      setIndexD(lengthD - 1);
    } else {
      setIndexD(indexD - 1);
    }

    // console.log("dec", indexD);
  };

  return (
    <div style={{ margin: "30px" }}>
      <div className="mockups">
        <div className="css-mb with-glare">
          <div className="mb-display-position">
            <div className="mb-display">
              <div className="mb-screen-position">
                <div className="mb-screen">
                  <section id="mockup-slider" className="owl-carousel">
                    {urlD && (
                      <Wallpaper_images_for_desktop data={urlD[indexD]} />
                    )}
                  </section>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-body"></div>
          <div className="mb-bottom-cover"></div>
        </div>

        <div className="controls">
          <a className="prev" onClick={prevSlide}>
            Prev
          </a>
          <a className="next" onClick={nextSlide}>
            Next
          </a>
        </div>
      </div>
    </div>
  );
};

export default DesktopMockup;
