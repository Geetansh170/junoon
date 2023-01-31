import React, { Fragment, useEffect } from "react";
import { useState } from "react";
import "./Wallpaper.css";

import DesktopMockup from "./DesktopMockup";
import PhoneMockup from "./PhoneMockup";

const Wallpaper = () => {
  const [show, setShow] = useState();
  const [showMockups, setShowMockups] = useState(false);

  const handleShow = (value) => {
    setShowMockups(true);
    setShow(value);
  };

  useEffect(() => {
    console.log(show);
  });

  return (
    <Fragment>
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
          <div className="dl_txt" style={{}}>
            <h3> WALLPAPERS</h3>
          </div>

          <div className="dl_txt dl_txt_wallpaper">
            <div> CHOOSE YOUR DEVICE : </div>
            <div className="dl_txt_wallpaper radio-option">
              <input
                id="rd1"
                type="radio"
                value="Phone"
                name="device-name"
                onClick={() => handleShow(false)}
              />{" "}
              <label htmlFor="Phone">MOBILE</label>
            </div>
            <div className="dl_txt_wallpaper radio-option">
              <input
                id="rd2"
                type="radio"
                value="Desktop"
                name="device-name"
                onClick={() => handleShow(true)}
              />{" "}
              <label htmlFor="Desktop">DESKTOP</label>
            </div>
          </div>
          {showMockups ? (
            <div>
              {!show ? (
                <div id="dev1" className="device-switch-div">
                  <h5>PHONE VIEW</h5>
                  <PhoneMockup />
                </div>
              ) : (
                <DesktopMockup />
              )}
            </div>
          ) : (
            <div>
              <h3
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  justifySelf: "center",
                }}
              >
                {" "}
                No device selected....
              </h3>
            </div>
          )}

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
      </div>
    </Fragment>
  );
};

export default Wallpaper;
