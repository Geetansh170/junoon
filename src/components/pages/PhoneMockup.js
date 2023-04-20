import React, { useEffect, useContext } from "react";
import WallpaperImagesForPhone from "./wallpaper_images_for_phone";
import "./Mockup.css";
import WallpaperCollection from "./WallpaperCollection";

// import {
//   ref,
//   uploadBytes,
//   getDownloadURL,
//   listAll,
//   list,
// } from "firebase-new/storage";
// import { storage } from "../../firebase/wallpaper_firebase";
import { WallPaperContext } from "../../context/WallPaperContext";
// import { v4 } from "uuid";

const PhoneMockup = () => {
  const { url, indexP, setIndexP, setIsDesk, lengthP } =
    useContext(WallPaperContext);

  useEffect(() => {
    setIsDesk(false);
    //  eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const nextSlide = () => {
    if (indexP >= lengthP - 1) {
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
      <div className='wallpaper-body'>
        <div className='mockups'>
          <div className='controls' onClick={prevSlide}>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
              <path d='M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z' />
            </svg>
          </div>

          <div className='device device-iphone-x'>
            <div className='device-frame'>
              <div className='ak c2'>
                <section id='mockup-slider' className='owl-carousel'>
                  {url[indexP] && (
                    <WallpaperImagesForPhone data={url[indexP]} />
                  )}
                </section>
              </div>
            </div>
            <div className='device-stripe'></div>
            <div className='device-header'></div>
            <div className='device-sensors'></div>
            <div className='device-btns'></div>
            <div className='device-power' />
          </div>

          <div className='controls' onClick={nextSlide}>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
              <path d='M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z' />
            </svg>
          </div>
        </div>
        <div className='mini-window'>
          {url.map((e, i) => {
            return (
              <WallpaperCollection
                data={e}
                active={url[indexP]}
                index={i}
                key={i}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PhoneMockup;
