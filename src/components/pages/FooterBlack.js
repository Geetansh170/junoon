import React from "react";

function FooterBlack() {
  return (
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
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <i className='fa fa-facebook-f' />
                </a>
              </li>

              <li>
                <a
                  href='https://www.instagram.com/junoon.nsut/'
                  target='_blank'
                  rel='noopener noreferrer'
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
  );
}

export default FooterBlack;
