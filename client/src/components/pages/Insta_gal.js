import React, { Fragment } from "react";
import axios from 'axios';

const Insta_gal = () => {
  return (
    <Fragment>
      <div>
        <div className='content-wrapper'>
        <nav className='navbar center navbar-expand-lg'>
            <div className='container flex-lg-column'>
              <div className='navbar-header'>
                <div className='navbar-brand'>
                  
                    <img
                      intrinsicsize="1268x512"
                      src='#'
                      srcSet='style/images/junoon-black.png 1x, style/images/junoon-black.png 3x'
                      alt=''
                    />
                 
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
              <div className='navbar-collapse collapse w-100 bg-light'>
                <ul className='navbar-nav nav-fill w-100'>
                  <li className='nav-item'>
                    <a className='nav-link' href='/home'>
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
                    <a className='nav-link dropdown-toggle' href='/drive'>
                      Drive
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
            
                  
                  
                </ul>
              </div>
            </div>
          </nav>
          <div className='wrapper light-wrapper'>
            <div className='container inner pt-70'>
              <h1 className='heading text-center'>THIS  IS  JUNOON</h1>
              <h2 className='sub-heading2 text-center'>
                Our recent Instagram feed
              </h2>
              <div className='space50' />
              <div className='tiles grid'>
                <div className='items row isotope boxed grid-view text-center'>
                  <div className='item grid-sizer col-md-6 col-lg-4'>
                    <div className='box bg-white shadow p-30'>
                      <figure className='main polaroid overlay overlay1'>
                        <a href='#'>
                          <img src='style/images/art/g1.jpg' alt='' />
                        </a>
                        <figcaption>
                          <h5 className='text-uppercase from-top mb-0'>
                            See Post
                          </h5>
                        </figcaption>
                      </figure>
                      
                    </div>
                    {/* /.box */}
                  </div>
                  {/*/.item */}
                  <div className='item grid-sizer col-md-6 col-lg-4'>
                    <div className='box bg-white shadow p-30'>
                      <figure className='main polaroid overlay overlay1'>
                        <a href='#'>
                          <img src='style/images/art/g2.jpg' alt='' />
                        </a>
                        <figcaption>
                          <h5 className='text-uppercase from-top mb-0'>
                            See Post
                          </h5>
                        </figcaption>
                      </figure>
                      
                    </div>
                    {/* /.box */}
                  </div>
                  {/*/.item */}
                  <div className='item grid-sizer col-md-6 col-lg-4'>
                    <div className='box bg-white shadow p-30'>
                      <figure className='main polaroid overlay overlay1'>
                        <a href='#'>
                          <img src='style/images/art/g3.jpg' alt='' />
                        </a>
                        <figcaption>
                          <h5 className='text-uppercase from-top mb-0'>
                            See Post
                          </h5>
                        </figcaption>
                      </figure>
                     
                    </div>
                    {/* /.box */}
                  </div>
                  {/*/.item */}
                  <div className='item grid-sizer col-md-6 col-lg-4'>
                    <div className='box bg-white shadow p-30'>
                      <figure className='main polaroid overlay overlay1'>
                        <a href='#'>
                          <img src='style/images/art/g4.jpg' alt='' />
                        </a>
                        <figcaption>
                          <h5 className='text-uppercase from-top mb-0'>
                            See Post
                          </h5>
                        </figcaption>
                      </figure>
                     
                    </div>
                    {/* /.box */}
                  </div>
                  {/*/.item */}
                  <div className='item grid-sizer col-md-6 col-lg-4'>
                    <div className='box bg-white shadow p-30'>
                      <figure className='main polaroid overlay overlay1'>
                        <a href='#'>
                          <img src='style/images/art/g5.jpg' alt='' />
                        </a>
                        <figcaption>
                          <h5 className='text-uppercase from-top mb-0'>
                            See Post
                          </h5>
                        </figcaption>
                      </figure>
                      
                    </div>
                    {/* /.box */}
                  </div>
                  {/*/.item */}
                  <div className='item grid-sizer col-md-6 col-lg-4'>
                    <div className='box bg-white shadow p-30'>
                      <figure className='main polaroid overlay overlay1'>
                        <a href='#'>
                          <img src='style/images/art/g6.jpg' alt='' />
                        </a>
                        <figcaption>
                          <h5 className='text-uppercase from-top mb-0'>
                            See Post
                          </h5>
                        </figcaption>
                      </figure>
                      
                    </div>
                    {/* /.box */}
                  </div>
                  {/*/.item */}
                  <div className='item grid-sizer col-md-6 col-lg-4'>
                    <div className='box bg-white shadow p-30'>
                      <figure className='main polaroid overlay overlay1'>
                        <a href='#'>
                          <img src='style/images/art/g7.jpg' alt='' />
                        </a>
                        <figcaption>
                          <h5 className='text-uppercase from-top mb-0'>
                            See Post
                          </h5>
                        </figcaption>
                      </figure>
                    
                    </div>
                    {/* /.box */}
                  </div>
                  {/*/.item */}
                  <div className='item grid-sizer col-md-6 col-lg-4'>
                    <div className='box bg-white shadow p-30'>
                      <figure className='main polaroid overlay overlay1'>
                        <a href='#'>
                          <img src='style/images/art/g8.jpg' alt='' />
                        </a>
                        <figcaption>
                          <h5 className='text-uppercase from-top mb-0'>
                            See Post
                          </h5>
                        </figcaption>
                      </figure>
                      
                    </div>
                    {/* /.box */}
                  </div>
                  {/*/.item */}
                  <div className='item grid-sizer col-md-6 col-lg-4'>
                    <div className='box bg-white shadow p-30'>
                      <figure className='main polaroid overlay overlay1'>
                        <a href='#'>
                          <img src='style/images/art/g9.jpg' alt='' />
                        </a>
                        <figcaption>
                          <h5 className='text-uppercase from-top mb-0'>
                            See Post
                          </h5>
                        </figcaption>
                      </figure>
                      
                    </div>
                    {/* /.box */}
                  </div>
                  {/*/.item */}
                </div>
                {/*/.row */}
              </div>
              {/* /.tiles */}
            </div>
            {/* /.container */}
          </div>
          {/* /.wrapper */}
          <footer className='dark-wrapper inverse-text'>
            <div className='container inner'>
              <div className='row d-md-flex align-items-md-center'>
                <div className='col-md-4 text-center text-md-left'>
                  
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
                      <a href='#'>
                        <i className='fa fa-twitter' />
                      </a>
                    </li>
                    <li>
                      <a href='https://www.facebook.com/junoon.nsut/'>
                        <i className='fa fa-facebook-f' />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='fa fa-pinterest' />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='fa fa-vimeo' />
                      </a>
                    </li>
                    <li>
                      <a href='https://www.instagram.com/junoon.nsut/'>
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
        {/* /.content-wrapper */}
        {/* SLIDER REVOLUTION 5.0 EXTENSIONS  (Load Extensions only on Local File Systems! The following part can be removed on Server for On Demand Loading) */}
        {/*







*/}
      </div>
    </Fragment>
  );
};

export default Insta_gal;
