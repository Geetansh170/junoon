import React, { useEffect, useContext, useState } from "react";
import logo from "../pages/imgs/junoonlogo.png";
import { FaDownload } from "react-icons/fa";
import { WallPaperContext } from "../../context/WallPaperContext";
import { RotatingLines } from "react-loader-spinner";
function Wallpaper_images_for_phone({ link }) {
  const { url, indexP, indexD, urlD, isDesk } = useContext(WallPaperContext);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // let isDesk = isDesk;
    // setLoading(true);
    // console.log(loading);
  }, [isDesk, indexP]);

  const handleLoading = () => {
    setLoading(false);
  };

  return (
    <div className='image active'>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: loading ? "block" : "none",
          paddingTop: "50%",
        }}
      >
        <RotatingLines
          strokeColor='grey'
          strokeWidth='5'
          animationDuration='0.75'
          width='96'
          visible={true}
        />
      </div>

      <img
        style={{
          width: "100%",
          height: "100%",
          display: loading ? "none" : "block",
        }}
        src={isDesk ? urlD[indexD] : url[indexP]}
        className='image_d'
        onLoad={handleLoading}
        alt=''
      />

      <div className='image_overlay'>
        <img src={logo} className='logo_junoon_forwallpaper_forphone' alt='' />
        <div className='wallpaper-content wallpaper-content-for-phone'>
          <a
            href={isDesk ? urlD[indexD] : url[indexP]}
            target='_blank'
            rel='noreferrer noopener'
          >
            <button className='btn btn_wallpaper btn_wallpaper_for_phone'>
              <FaDownload />{" "}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Wallpaper_images_for_phone;
