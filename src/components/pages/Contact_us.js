import React, { Fragment } from "react";
import NavbarWhite from "./NavbarWhite";

const Contact_us = () => {
  return (
    <Fragment>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <link rel='shortcut icon' href='style/images/favicon.png' />
      <title>Junoon</title>
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
        <NavbarWhite /> 
        <div className='wrapper light-wrapper'>
          <div className='container inner pt-70'>
            <div className='row'>
              <div className='col-lg-8 offset-lg-2'>
                <h2 className='section-title text-center'>Get in Touch</h2>
                <p className='text-center'>
                  Let's make something amazing together. Contact us for new
                  creative ideas, collaborations, photowalks and to get to know
                  more about Junoon .
                </p>
                <br></br>
                <div className='space20' />
                <div className='row text-center'>
                  <div className='col-md-4'>
                    {" "}
                    <span className='icon icon-color color-default fs-48 mb-10'>
                      <a
                        href='https://www.facebook.com/junoon.nsut/'
                        target='_blank'
                        rel='noreferrer noopener'
                      >
                        <i className='fa fa-facebook-f' />
                      </a>
                    </span>
                    <p>
                      <a
                        className='nocolor'
                        href='https://www.facebook.com/junoon.nsut/'
                        target='_blank'
                        rel='noreferrer noopener'
                      >
                        Junoon The Photography <br></br>club of NSUT
                      </a>
                    </p>
                  </div>
                  {/*/column */}
                  <div className='col-md-4'>
                    {" "}
                    <span className='icon icon-color color-default fs-48 mb-10'>
                      <a
                        href='https://www.instagram.com/junoon.nsut/'
                        target='_blank'
                        rel='noreferrer noopener'
                      >
                        <i className='fa fa-instagram' />
                      </a>
                    </span>
                    <p>
                      <a
                        className='nocolor'
                        href='https://www.instagram.com/junoon.nsut'
                        target='_blank'
                        rel='noreferrer noopener'
                      >
                        junoon.nsut
                      </a>
                    </p>
                  </div>
                  {/*/column */}
                  <div className='col-md-4'>
                    {" "}
                    <span className='icon icon-color color-default fs-48 mb-10'>
                      <a
                        href='mailto: junoon@nsut.ac.in'
                        target='_blank'
                        rel='noreferrer noopener'
                      >
                        <i className='fa fa-envelope-o' />
                      </a>
                    </span>
                    <p>
                      <a
                        className='nocolor'
                        href='mailto: junoon@nsut.ac.in'
                        target='_blank'
                        rel='noreferrer noopener'
                      >
                        junoon@nsut.ac.in
                      </a>
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
