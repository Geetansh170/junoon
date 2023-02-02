import React, { Fragment } from "react";
import "./Collections.css";

import Cardcollection from "./Cardcollection";
import sportsday2021 from "../pages/imgs/sportsday.jpg";
import worldrecord2021 from "../pages/imgs/worldrecord.jpg";
import fdp2021 from "../pages/imgs/fdp2021.jpg";
import edwardmaya from "../pages/imgs/edwardmaya.jpg";
import mirageatnsit from "../pages/imgs/mirageatnsit.png";
import esummit from "../pages/imgs/esummit.jpg";
import capellaperf from "../pages/imgs/capellaperf.png";
import colloquium from "../pages/imgs/colloquium.jpg";
import consolium from "../pages/imgs/consolium.jpg";
import netaji from "../pages/imgs/netaji.jpg";
import ethnicday19 from "../pages/imgs/ethnic19.jpg";
import etc from "../pages/imgs/ethniccardimg.jpeg";
import ethnicday2022 from "../pages/imgs/ethnicday2022.png";
import scribbleday2022 from "../pages/imgs/scribbleday2022.png";
import moksha2022 from "../pages/imgs/moksha2022.png";
import collegeho from "../pages/imgs/collegehotonsitho.png";
import creseve from '../pages/imgs/creseve.jpg';
import farewell2022 from  "../pages/imgs/farewell2022.png";
import ethnic2022 from  "../pages/imgs/ethnic2022.jpg";
import farewell2018 from "../pages/imgs/farewell2018.png";
import reso2022 from  "../pages/imgs/reso2022.jpg";
const Drive_links = () => {

  const Y2022 = [
    {
      name: "Ethnic Day",
      link: "https://drive.google.com/drive/folders/19CmrJBhs5gdUmyAZAnqIcDczgfm3jrjC",
      img: ethnic2022
    },
    {
      name: "Resonanz",
      link: "https://drive.google.com/drive/folders/1Vb4jwVBmxMXApviG4KLK7JbP99lmwIMA",
      img: reso2022
    },
    {
      name: "Farewell",
      link: "https://drive.google.com/drive/folders/1UCrsxPlEyUaF5EtZW7hBqmpx3cqRNkMD",
      img: farewell2022
    },
    {
      name: "Scribble Day",
      link: "https://drive.google.com/drive/folders/1NZcbM2MsvhxwdpAdcL8qOgrjZ0ULvKOp",
      img: scribbleday2022
    },
    {
      name: "Ethnic Day batch of '22",
      link: "https://drive.google.com/drive/folders/1Y_bbWyx3kMu5eJIiz5PjgqEHHLjdkkzk",
      img: ethnicday2022
    },
    {
      name: "Moksha",
      link: "https://drive.google.com/drive/folders/1TRcNoAhShlr4hjbG3efoLX_ayc7u2Pyt",
      img: moksha2022
    },
  ];

  const Y2021 = [
    {
      name: "Ethnic Day",
      link: "https://drive.google.com/drive/u/5/folders/1kCvchFn_Roo4s2M7fioHJAxTZt3HytST",
      img: etc,
    },
    {
      name: "Sports Day",
      link: "https://drive.google.com/drive/u/5/folders/1Wet4M8VsGMLFyK9Ksb4EQ6JKQfRZ30kb",
      img: sportsday2021,
    },
    {
      name: "World Record Attempt",
      link: "https://drive.google.com/drive/u/1/folders/1b5-iPbqawv6ecTuSZ6JGsq01YUuNdEwg",
      img: worldrecord2021,
    },
    {
      name: "FDP 2021",
      link: "https://drive.google.com/drive/folders/1XhOyxyDbZH3B7uSmtHnLuOz3igpgO-Ug",
      img: fdp2021,
    },
  ];

  // const Y2020 = [

  // ];

  const Y2019 = [
    {
      name: "Ethnic Day",
      link: "https://drive.google.com/drive/folders/1dY-dSI54Okm9n6cwopTjRt29bfS4Rd5h",
      img: ethnicday19,
    },
    {
      name: "Colloquium",
      link: "https://drive.google.com/drive/folders/196K7YVOtcdsLX1AkfwHaMo7GRaMAIKs7",
      img: colloquium,
    },
    {
      name: "Parakram Divas",
      link: "https://drive.google.com/drive/folders/1Qtvnp3uUJ7SEaXBgYZBIhUuVs4bp9z-P",
      img: netaji,
    },
  ];

  const Y2018 = [
    {
      name: "Consollium",
      link: "https://drive.google.com/drive/folders/1_iaqm99wWh-y1_8x0LoatTXumdQPK4bY",
      img: consolium,
    },
    {
      name: "E-Summit",
      link: "https://drive.google.com/drive/folders/1s72NcvIecT44MYLhK0RQ8gFdrPYsz7zT",
      img: esummit,
    },
    {
      name: "Crescendo Eve",
      link: "https://drive.google.com/drive/folders/1hqVXxmdRxgJShWVHzZ4EuVBU5nwNCE33",
      img: creseve,
    },
  ];

  // const DATA = [

    
    
    
  // ];

  const YDATA = [
    {
      name: "College Ho Toh NSIT Ho",
      link: "https://www.youtube.com/watch?v=2Es8VBtzAUU",
      img: collegeho,
    },
    {
      name: "Farewell 2018 Batch",
      link: "https://www.youtube.com/watch?v=CMB5__0ohdg",
      img: farewell2018,
    },
    {
      name: "Capella Performance",
      link: "https://www.youtube.com/watch?v=vYhuj1A9HwA",
      img: capellaperf,
    },
    {
      name: "Mirage Moksha Performance",
      link: "https://www.youtube.com/watch?v=CJ8mzPMi9oA",
      img: mirageatnsit,
    },
    {
      name: "Edward Maya At Moksha",
      link: "https://www.youtube.com/watch?v=wbQuUz14088",
      img: edwardmaya,
    },
  ];
  return (
    <Fragment>
      <div class="slider alignTop">
        <div class="slider-row"></div>
      </div>
      <div className="content-wrapper">
        <nav className="navbar center navbar-expand-lg">
          <div className="container flex-lg-column">
            <div className="navbar-header">
              <div className="navbar-brand">
                <img
                  intrinsicsize="1268x512"
                  src="#"
                  srcSet="style/images/junoon-black.png 1x, style/images/junoon-black.png 3x"
                  alt=""
                />
              </div>
              <div className="navbar-hamburger ml-auto d-lg-none d-xl-none">
                <button
                  className="hamburger animate"
                  data-toggle="collapse"
                  data-target=".navbar-collapse"
                >
                  <span />
                </button>
              </div>
            </div>
            {/* /.navbar-header */}
            <div className="navbar-collapse collapse w-100 bg-light">
              <ul className="navbar-nav nav-fill w-100">
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Home
                  </a>

                  {/*/.dropdown-menu */}
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="/insta">
                    Instagram
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="/collection">
                    Collections
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="/wallpaper">
                    Wallpapers
                  </a>
                </li>

                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="/timeline">
                    Timeline
                  </a>
                </li>

                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="/about">
                    About
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="/contact_us">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="drive_links">
          {/* <div className="dl_txt">Drive Links</div>
          <div className="drive_links_e">
            {DATA.map((e) => {
              return <Cardcollection data={e} />;
            })}
          </div> */}
          <div className="dl_txt" style={{fontWeight: 'bold'}}>DRIVE LINKS</div>
          <div className="dl_txt">2022</div>
          <div className="drive_links_e">
            {Y2022.map((e) => {
              return <Cardcollection data={e} />;
            })}
          </div>
          <div className="dl_txt">2021</div>
          <div className="drive_links_e">
            {Y2021.map((e) => {
              return <Cardcollection data={e} />;
            })}
          </div>
            

          <div className="dl_txt">2019</div>
          <div className="drive_links_e">
            {Y2019.map((e) => {
              return <Cardcollection data={e} />;
            })}
          </div>
          <div className="dl_txt">2018</div>
          <div className="drive_links_e">
            {Y2018.map((e) => {
              return <Cardcollection data={e} />;
            })}
          </div>
          <div className="dl_txt" style={{fontWeight: 'bold'}}>Youtube Links</div>
          <div className="drive_links_e">
            {YDATA.map((e) => {
              return <Cardcollection data={e} />;
            })}
          </div>
        </div>

        {/* /.wrapper */}
        <footer className="dark-wrapper inverse-text">
          <div className="container inner">
            <div className="row d-md-flex align-items-md-center">
              <div className="col-md-4 text-center text-md-left">
                <p className="mb-0"></p>
              </div>
              {/*/column */}
              <div className="col-md-4 text-center footy">
                <img
                  src="#"
                  srcSet="
                  style/images/junoon-white.png    1x,
                  style/images/junoon-white.png 4x
                "
                  alt=""
                />
              </div>
              {/*/column */}
              <div className="col-md-4 text-center text-md-right">
                <ul className="social social-mute social-s mt-10">
                  <li>
                    <a
                      href="https://www.facebook.com/junoon.nsut/"
                      target="_blank"
                    >
                      <i className="fa fa-facebook-f" />
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.instagram.com/junoon.nsut/"
                      target="_blank"
                    >
                      <i className="fa fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
              {/*/column */}
            </div>
            {/*/.row */}
          </div>
          {/* /.container */}
        </footer>
      </div>
      {/* /.content-wrapper */}
      {/* SLIDER REVOLUTION 5.0 EXTENSIONS  (Load Extensions only on Local File Systems! The following part can be removed on Server for On Demand Loading) */}
    </Fragment>
  );
};

export default Drive_links;
