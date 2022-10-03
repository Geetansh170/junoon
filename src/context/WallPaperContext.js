import React, { createContext, useState, useEffect } from "react";
//import axios from "axios";
//import { useNavigate } from "react-router-dom";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase-new/storage";
import { storage } from "../firebase/wallpaper_firebase";
import axios from "axios";

const WallPaperContext = createContext();

function WallPaperProvider({ children }) {
  //const navigate = useNavigate();
  const phoneImagesListRef = ref(storage, "images/Phone/");
  const deskImagesListRef = ref(storage, "images/Desktop/");

  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState([]);
  const [indexP, setIndexP] = useState(0);
  const [indexD, setIndexD] = useState(0);
  const [isDesk, setIsDesk] = useState(true);
  const [lengthD, setLengthD] = useState(0);
  const [lengthP, setLengthP] = useState(0);

  const [urlD, setUrlD] = useState([]);

  useEffect(() => {
    const apiCall = (baseUrl, type) => {
      const request = axios.get(baseUrl);
      let links = [];
      request.then((response) => {
        //setData(response.data);
        response.data.map((el) => links.push(el.link));
      });
      if (type == "desktop") {
        if (links) {
          setUrlD(links);
          // setLengthD(links.length);
        }
      } else {
        if (links) {
          setUrl(links);
          //  setLengthP(links.length);
        }
      }
    };

    const getImagesPhone = async () => {
      setIsDesk(false);
      await apiCall(
        `https://junoonwallpaperapi.herokuapp.com/wallpaper/phone`,
        `phone`
      );
      console.log(url);
    };

    const getImagesDesktop = async () => {
      await apiCall(
        `https://junoonwallpaperapi.herokuapp.com/wallpaper/desktop`,
        `desktop`
      );
      console.log(urlD);
    };

    getImagesPhone();

    setLengthP(35);

    getImagesDesktop();

    setLengthD(35);

    //setLoading(false);

    //   console.log(list);
  }, []);

  const contextValue = {
    loading,
    url,
    urlD,
    setLoading,
    setUrl,
    setUrlD,
    indexP,
    indexD,
    setIndexP,
    setIndexD,
    isDesk,
    setIsDesk,
    lengthP,
    lengthD,
  };

  return (
    <WallPaperContext.Provider value={contextValue}>
      {children}
    </WallPaperContext.Provider>
  );
}

export { WallPaperProvider, WallPaperContext };
