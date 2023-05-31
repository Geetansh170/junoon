import React from "react";

function NavbarBlack() {
  return (
    <nav className='navbar wide transparent absolute inverse-text navbar-expand-lg'>
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

            {/* <li className='nav-item dropdown'>
              <a className='nav-link dropdown-toggle' href='/insta'>
                Instagram
              </a>
            </li> */}
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
        {/*/.social-wrapper */}
      </div>
    </nav>
  );
}

export default NavbarBlack;
