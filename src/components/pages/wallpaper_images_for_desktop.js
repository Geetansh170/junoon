import React, { useEffect, useContext, useState } from "react";
import logo from "../pages/imgs/junoonlogo.png";
import { FaDownload } from "react-icons/fa";
import { WallPaperContext } from "../../context/WallPaperContext";
import { RotatingLines } from "react-loader-spinner";

function Wallpaper_images_for_desktop({ link }) {
  const { url, indexP, indexD, urlD, isDesk } = useContext(WallPaperContext);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // let isDesk = isDesk;
    setLoading(true);
  }, [isDesk, indexD]);

  const handleLoading = () => {
    setLoading(false);
  };

  return (
    <div className="image active">
      <div
        style={{
          width: "100%",
          height: "100%",
          display: loading ? "block" : "none",
          paddingTop: "21%",
        }}
        className="image_d"
      >
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
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
        onLoad={handleLoading}
        className="image_d"
        alt="img"
      />

      <div className="image_overlay">
        <img src={logo} className="logo_junoon_forwallpaper" alt="img"/>
        <div className="wallpaper-content">
          <a href={isDesk ? urlD[indexD] : url[indexP]} target="_blank" rel="noopener noreferrer">
            <button className="btn btn_wallpaper">
              <FaDownload />{" "}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Wallpaper_images_for_desktop;
