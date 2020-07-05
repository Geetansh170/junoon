import React, { Fragment } from "react";

const Drive_links = () => {
  return (
    <Fragment>
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
          <div className='container inner'>
            <h2 className='section-title text-center'>Recent Drive Links</h2>
            <div className='space60' />
            <a href="https://drive.google.com/drive/folders/1dY-dSI54Okm9n6cwopTjRt29bfS4Rd5h?usp=sharing" target="_blank">
            <h3 className='text-center'>Ethnic 2019</h3>
            </a>
            <hr />
            <a href="https://drive.google.com/drive/folders/196K7YVOtcdsLX1AkfwHaMo7GRaMAIKs7?usp=sharing" target="_blank">
            <h3 className='text-center'>Colloquium</h3>
            </a>
            <hr />
            <a href="https://drive.google.com/drive/folders/1Qtvnp3uUJ7SEaXBgYZBIhUuVs4bp9z-P?usp=sharing" target="_blank">
            <h3 className='text-center'>Netaji's Birthday 2019</h3>
            </a>
            <hr />
            <a href="https://drive.google.com/drive/folders/1_iaqm99wWh-y1_8x0LoatTXumdQPK4bY?usp=sharing" target="_blank">
            <h3 className='text-center'>Consillium</h3>
            </a>
            <hr />
            <a href="https://drive.google.com/drive/folders/1s72NcvIecT44MYLhK0RQ8gFdrPYsz7zT?usp=sharing" target="_blank">
            <h3 className='text-center'>E Summit</h3>
            </a>
            <hr />
            <a href="https://drive.google.com/drive/folders/1hqVXxmdRxgJShWVHzZ4EuVBU5nwNCE33?usp=sharing" target="_blank">
            <h3 className='text-center'>Crescendo Eve</h3>
            </a>
            <hr />
            

            
            
            {/* <div className='space30' />
            <h3 className='text-center'>Dashed</h3>
            <hr className='dashed' />
            <div className='space30' />
            <h3 className='text-center'>Dotted</h3>
            <hr className='dotted' />
            <div className='space30' />
            <h3 className='text-center'>Double</h3>
            <hr className='double' />
            <h3 className='text-center'>Icon</h3>
            <div className='divider-icon'>
              <i className='fa fa-heart' />
            </div> */}
            {/* <div className='divider-icon w300'>
              <i className='si-photo_aperture' />
            </div> */}
          </div>
          <div className='container inner'>
            <h1 className='section-title text-center'>Most popular Youtube videos</h1>
            <div className='space60' />
            <a href="https://www.youtube.com/watch?v=2Es8VBtzAUU" target="_blank">
            <h3 className='text-center'>College ho to NSIT ho</h3>
            </a>
            <hr />
            <a href="https://www.youtube.com/watch?v=CMB5__0ohdg" target="_blank">
            <h3 className='text-center'>Farewell 2018 Batch</h3>
            </a>
            <hr />
            <a href="https://www.youtube.com/watch?v=vYhuj1A9HwA" target="_blank">
            <h3 className='text-center'>Capella Performance</h3>
            </a>
            <hr />
            <a href="https://www.youtube.com/watch?v=CJ8mzPMi9oA" target="_blank">
            <h3 className='text-center'>Mirage Moksha Performance</h3>
            </a>
            <hr />
            <a href="https://www.youtube.com/watch?v=wbQuUz14088" target="_blank">
            <h3 className='text-center'>Edward Maya at Moksha</h3>
            </a>
            <hr />
           
            
            

            
            
            {/* <div className='space30' />
            <h3 className='text-center'>Dashed</h3>
            <hr className='dashed' />
            <div className='space30' />
            <h3 className='text-center'>Dotted</h3>
            <hr className='dotted' />
            <div className='space30' />
            <h3 className='text-center'>Double</h3>
            <hr className='double' />
            <h3 className='text-center'>Icon</h3>
            <div className='divider-icon'>
              <i className='fa fa-heart' />
            </div> */}
            {/* <div className='divider-icon w300'>
              <i className='si-photo_aperture' />
            </div> */}
          </div>
          {/* /.container */}
        </div>
        {/* /.wrapper */}
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
                  srcSet='
                  style/images/junoon-white.png    1x,
                  style/images/junoon-white.png 4x
                '
                  alt=''
                />
              </div>
              {/*/column */}
              <div className='col-md-4 text-center text-md-right'>
                <ul className='social social-mute social-s mt-10'>
                  
                  <li>
                    <a href='https://www.facebook.com/junoon.nsut/' target="_blank">
                      <i className='fa fa-facebook-f' />
                    </a>
                  </li>
                  
                  <li>
                    <a href='https://www.instagram.com/junoon.nsut/' target="_blank">
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
    </Fragment>
  );
};

export default Drive_links;
