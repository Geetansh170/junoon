import React, { useState, useEffect, useContext } from "react";
import Wallpaper_images_for_phone from "./wallpaper_images_for_phone";
import "./Mockup.css";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase-new/storage";
import { storage } from "../../firebase/wallpaper_firebase";
import { WallPaperContext } from "../../context/WallPaperContext";
// import { v4 } from "uuid";

const PhoneMockup = () => {
  const { url, loading, indexP, setIndexP, setIsDesk, lengthP } =
    useContext(WallPaperContext);

  useEffect(() => {
    setIsDesk(false);
    // console.log(url);
    //console.log(url[index]);
  }, []);
  const nextSlide = () => {
    if (indexP >= lengthP - 2) {
      setIndexP(0);
    } else {
      setIndexP(indexP + 1);
    }

    // console.log(indexP, "inc");
  };
  const prevSlide = () => {
    if (indexP <= 0) {
      setIndexP(lengthP - 1);
    } else {
      setIndexP(indexP - 1);
    }

    // console.log(indexP, "dec");
  };

  return (
    <>
      <div style={{ margin: "30px" }}>
        <div className="mockups">
          <div className="device device-iphone-x">
            <div className="device-frame">
              <div className="ak c2">
                <section id="mockup-slider" className="owl-carousel">
                  {url[indexP] && (
                    <Wallpaper_images_for_phone data={url[indexP]} />
                  )}
                </section>
              </div>
            </div>
            <div className="device-stripe"></div>
            <div className="device-header"></div>
            <div className="device-sensors"></div>
            <div className="device-btns"></div>
            <div className="device-power" />
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
    </>
  );
};

export default PhoneMockup;
