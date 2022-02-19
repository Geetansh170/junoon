import React, { Fragment } from "react";
import "./Collections.css";
import { youtubeLinksData, driveLinksData } from "./collectionPageData";
import CollectionCard from "./CollectionCard";

const Drive_links = () => {
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

        <div className="me"></div>

        <div
          className="yttitle"
          style={{ "margin-top": "8vh", "margin-bottom": "-8vh" }}
        >
          <p>Drive links</p>
          {/* <hr className="hryt"></hr> */}
        </div>


        {/* USING MAP */}

        <div className="hovercontainer1">

          {driveLinksData.map((cardData) => (
            <CollectionCard 
              eventLink= {cardData.eventLink}
              cardClasses= {cardData.cardClasses}
              eventName= {cardData.eventName}
            />
          ))}

        </div>

        <div className="yttitle">
          <p>Youtube links</p>
          {/* <hr className="hryt"></hr> */}
        </div>

        <div className="hovercontainer2">

          {youtubeLinksData.map((cardData) => (
              <CollectionCard 
                eventLink= {cardData.eventLink}
                cardClasses= {cardData.cardClasses}
                eventName= {cardData.eventName}
              />
          ))}

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
