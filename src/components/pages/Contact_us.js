import React, { Fragment } from "react";

const Contact_us = () => {
  return (
    <Fragment>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <link rel='shortcut icon' href='style/images/favicon.png' />
      <title>Missio</title>
      <link
        rel='stylesheet'
        type='text/css'
        href='style/css/bootstrap.min.css'
      />
      <link rel='stylesheet' type='text/css' href='style/css/plugins.css' />
      <link
        rel='stylesheet'
        type='text/css'
        href='style/revolution/css/settings.css'
      />
      <link
        rel='stylesheet'
        type='text/css'
        href='style/revolution/css/layers.css'
      />
      <link
        rel='stylesheet'
        type='text/css'
        href='style/revolution/css/navigation.css'
      />
      <link rel='stylesheet' type='text/css' href='style/type/icons.css' />
      <link rel='stylesheet' type='text/css' href='style.css' />
      <link
        rel='stylesheet'
        type='text/css'
        href='style/css/color/lavender.css'
      />
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
            <div className='row'>
              <div className='col-lg-8 offset-lg-2'>
                <h2 className='section-title text-center'>Get in Touch</h2>
                <p className='text-center'>
                 Let's make something amazing together.
                 Contact us for new creative ideas , collaborations , photowalks and to get to know more about Junoon . 
                </p>
                <br></br>
                <div className='space20' />
                <div className='row text-center'>
                  <div className='col-md-4'>
                    {" "}
                    <span className='icon icon-color color-default fs-48 mb-10'>
                      <a href="https://www.facebook.com/junoon.nsut/"><i className='fa fa-facebook-f' /></a><i className='fa fa-facebook-f' />
                    </span>
                    <p>
                      Junoon The Photography <br></br>club of NSUT
                    </p>
                  </div>
                  {/*/column */}
                  <div className='col-md-4'>
                    {" "}
                    <span className='icon icon-color color-default fs-48 mb-10'>
                      <a href="https://www.instagram.com/junoon.nsut/"><i className='fa fa-instagram' /></a>
                    </span>
                    <p>
                    Junoon.nsut
                    </p>
                  </div>
                  {/*/column */}
                  <div className='col-md-4'>
                    {" "}
                    <span className='icon icon-color color-default fs-48 mb-10'>
                      <i className='si-mail_mail-2' />
                    </span>
                    <p>
                      <a className='nocolor' href='mailto:#'>
                      nsit.junoon@gmail.com
                      </a>
                      <br />
                      
                    </p>
                  </div>
                  {/*/column */}
                </div>
                {/*/.row */}
                <div className='space30' />
                
                {/*/.form-container */}
              </div>
              {/* /column */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container */}
        </div>
        {/* /.wrapper */}
        
      </div>
      {/* /.content-wrapper */}
      {/* SLIDER REVOLUTION 5.0 EXTENSIONS  (Load Extensions only on Local File Systems! The following part can be removed on Server for On Demand Loading) */}
      {/*







*/}
    </Fragment>
  );
};

export default Contact_us;
