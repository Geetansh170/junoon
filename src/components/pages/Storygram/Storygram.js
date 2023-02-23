import React from "react";
// import { Fragment } from "react";
import "./Storygram.css";

import Pagination from "./Pagination";

export default function Storygram() {
  return (
    <div className='dark-wrapper'>
      <nav className='navbar wide transparent inverse-text navbar-expand-lg'>
        <div className='container-fluid flex-row justify-content-center'>
          <div className='navbar-header'>
            <div className='navbar-brand'>
              <a href='/'>
                <img
                  src='#'
                  srcSet='style/images/junoon-white.png 1x, style/images/junoon-white.png 4x'
                  alt=''
                />
              </a>
            </div>
            <div className='navbar-hamburger ml-auto d-lg-none d-xl-none'>
              <button
                className='hamburger animate'
                data-toggle='collapse'
                data-target='.navbar-collapse'
              >
                <span />
              </button>
            </div>
          </div>
          {/* /.navbar-header */}
          <div className='navbar-collapse collapse justify-content-between align-items-center'>
            <ul className='navbar-nav plain mx-auto text-center'>
              <li className='nav-item'>
                <a className='nav-link' href='/'>
                  Home
                </a>

                {/*/.dropdown-menu */}
              </li>

              <li className='nav-item dropdown'>
                <a className='nav-link dropdown-toggle' href='/insta'>
                  Instagram
                </a>
              </li>
              <li className='nav-item dropdown'>
                <a className='nav-link dropdown-toggle' href='/collection'>
                  Collections
                </a>
              </li>
              <li className='nav-item dropdown'>
                <a className='nav-link dropdown-toggle' href='/wallpaper'>
                  Wallpapers
                </a>
              </li>
              <li className='nav-item dropdown'>
                <a className='nav-link dropdown-toggle' href='/timeline'>
                  Timeline
                </a>
              </li>

              <li className='nav-item dropdown'>
                <a className='nav-link dropdown-toggle' href='/about'>
                  About
                </a>
              </li>
              <li className='nav-item dropdown'>
                <a className='nav-link dropdown-toggle' href='/contact_us'>
                  Contact
                </a>
              </li>

              {/* <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="/timeline">timeline</a>
                  </li> */}
            </ul>
          </div>
          <div className='social-wrapper text-right'>
            <ul className='social social-mute social-s mb-0'>
              <li>
                <a href='https://www.facebook.com/junoon.nsut/' target='_blank' rel="noopener noreferrer">
                  <i className='fa fa-facebook-f' />
                </a>
              </li>

              <li>
                <a
                  href='https://www.instagram.com/junoon.nsut/'
                  target='_blank' rel="noopener noreferrer"
                >
                  <i className='fa fa-instagram' />
                </a>
              </li>
            </ul>
          </div>
          {/*/.social-wrapper */}
        </div>
      </nav>

      <h1 className='text-white m-5'>Storygram</h1>
      <Pagination />

      <footer className='dark-wrapper inverse-text'>
        <div className='container inner'>
          <div className='row d-md-flex align-items-md-center'>
            <div className='col-md-4 text-center text-md-left'>
              <p className='mb-0'></p>
            </div>
            {/*/column */}
            <div className='col-md-4 text-center footy'>
              <img
                src='#'
                srcSet='style/images/junoon-white.png 1x, style/images/junoon-white.png 4x'
                alt=''
              />
            </div>
            {/*/column */}
            <div className='col-md-4 text-center text-md-right'>
              <ul className='social social-mute social-s mt-10'>
                <li>
                  <a
                    href='https://www.facebook.com/junoon.nsut/'
                    target='_blank' rel="noopener noreferrer"
                  >
                    <i className='fa fa-facebook-f' />
                  </a>
                </li>

                <li>
                  <a
                    href='https://www.instagram.com/junoon.nsut/'
                    target='_blank' rel="noopener noreferrer"
                  >
                    <i className='fa fa-instagram' />
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
  );
}
