import React, { Fragment } from "react";
import "./Collections.css";

import Cardcollection from "./Cardcollection";
import img1 from "../pages/imgs/cardimg1.jpg"
import img2 from "../pages/imgs/cardimg2.jpg"
import img3 from "../pages/imgs/cardimg3.jpg"
import img4 from "../pages/imgs/cardimg4.jpg"
import etc from "../pages/imgs/ethniccardimg.jpeg"
const Drive_links = () => {
  const DATA=[
    {
      name:"Ethnic Day 2021",
      link:"https://drive.google.com/drive/u/5/folders/1kCvchFn_Roo4s2M7fioHJAxTZt3HytST",
      img:etc
    },
    {
      name:"Sports Day 2021",
      link:"https://drive.google.com/drive/u/5/folders/1Wet4M8VsGMLFyK9Ksb4EQ6JKQfRZ30kb",
      img:img1
    },
    {
      name:"Guinness World Record Attempt",
      link:"https://drive.google.com/drive/u/1/folders/1b5-iPbqawv6ecTuSZ6JGsq01YUuNdEwg",
      img:img2
    },
    {
      name:"FDP 2021",
      link:"https://drive.google.com/drive/folders/1XhOyxyDbZH3B7uSmtHnLuOz3igpgO-Ug",
      img:img3
    },
    {
      name:"Ethnic Day 2019",
      link:"https://drive.google.com/drive/folders/1dY-dSI54Okm9n6cwopTjRt29bfS4Rd5h",
      img:img4
    },
    {
      name:"Colloquium",
      link:"https://drive.google.com/drive/folders/1_iaqm99wWh-y1_8x0LoatTXumdQPK4bY",
      img:img1
    },
    {
      name:"Parakram Divas 2019",
      link:"https://drive.google.com/drive/folders/1Qtvnp3uUJ7SEaXBgYZBIhUuVs4bp9z-P",
      img:img2
    },
    {
      name:"Consollium",
      link:"https://drive.google.com/drive/folders/196K7YVOtcdsLX1AkfwHaMo7GRaMAIKs7",
      img:img3
    },
    {
      name:"E-Summit",
      link:"https://drive.google.com/drive/folders/1s72NcvIecT44MYLhK0RQ8gFdrPYsz7zT",
      img:img4
    },
    {
      name:"Crescendo Eve",
      link:"https://drive.google.com/drive/folders/1hqVXxmdRxgJShWVHzZ4EuVBU5nwNCE33",
      img:img1
    },

  ]

  const YDATA=[
    {
      name:"College Ho Toh NSIT Ho",
      link:"https://www.youtube.com/watch?v=2Es8VBtzAUU",
      img:img1
    },
    {
      name:"Farewell 2018 Batch",
      link:"https://www.youtube.com/watch?v=CMB5__0ohdg",
      img:img2
    },
    {
      name:"Capella Performance",
      link:"https://www.youtube.com/watch?v=vYhuj1A9HwA",
      img:img3
    },
    {
      name:"Mirage Moksha Performance",
      link:"https://www.youtube.com/watch?v=CJ8mzPMi9oA",
      img:img4
    },
    {
      name:"Edward Maya At Moksha",
      link:"https://www.youtube.com/watch?v=wbQuUz14088",
      img:img1
    },
  ]
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
          <div className="dl_txt">Drive Links</div>
          <div className="drive_links_e">

          {
            DATA.map(e=>{
              return <Cardcollection data={e}/>
            })
          }
          </div>
          <div className="dl_txt">Youtube Links</div>
          <div className="drive_links_e">

          {
            YDATA.map(e=>{
              return <Cardcollection data={e}/>
            })
          }
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
