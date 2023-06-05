import React from "react";

function NavbarWhite() {
  return (
    <nav className='navbar center navbar-expand-lg'>
      <div className='container flex-lg-column'>
        <div className='navbar-header'>
          <div className='navbar-brand'>
            <img
              intrinsicsize='922x512'
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
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavbarWhite;
