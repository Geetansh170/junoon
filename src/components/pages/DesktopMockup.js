import React, { useContext } from "react";
import WallpaperImagesForDesktop from "./wallpaper_images_for_desktop";
import "./Mockup.css";
import { WallPaperContext } from "../../context/WallPaperContext";
import { useEffect } from "react";
import WallpaperCollection from "./WallpaperCollection";

const DesktopMockup = () => {
  const { urlD, indexD, setIndexD, setIsDesk, lengthD } =
    useContext(WallPaperContext);

  useEffect(() => {
    setIsDesk(true);
    //  eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const nextSlide = () => {
    if (indexD >= lengthD - 1) {
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
    <div className='wallpaper-body'>
      <div className='mockups'>
        <div className='controls' onClick={prevSlide}>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
            <path d='M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z' />
          </svg>
        </div>

        <div className='css-mb with-glare'>
          <div className='mb-display-position'>
            <div className='mb-display'>
              <div className='mb-screen-position'>
                <div className='mb-screen'>
                  <section id='mockup-slider' className='owl-carousel'>
                    {urlD && <WallpaperImagesForDesktop data={urlD[indexD]} />}
                  </section>
                </div>
              </div>
            </div>
          </div>
          <div className='mb-body'></div>
          <div className='mb-bottom-cover'></div>
        </div>
        <div className='controls' onClick={nextSlide}>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
            <path d='M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z' />
          </svg>
        </div>
      </div>

      <div className='mini-window'>
        {urlD.map((e, i) => {
          // console.log(e,i);
          return (
            <WallpaperCollection
              data={e}
              active={urlD[indexD]}
              index={i}
              key={i}
            />
          );
        })}
      </div>
    </div>
  );
};

export default DesktopMockup;
