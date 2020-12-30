import React, { Fragment } from "react";

const Home = () => {
  return (
    <Fragment>
        <div className="content-wrapper">
          <nav className="navbar wide transparent absolute inverse-text navbar-expand-lg">
            <div className="container-fluid flex-row justify-content-center">
              <div className="navbar-header">
                <div className="navbar-brand"><a href="/home"><img src="#" srcSet="style/images/junoon-white.png 1x, style/images/junoon-white.png 4x" alt="" /></a></div>
                <div className="navbar-hamburger ml-auto d-lg-none d-xl-none"><button className="hamburger animate" data-toggle="collapse" data-target=".navbar-collapse"><span /></button></div>
              </div>
              {/* /.navbar-header */}
              <div className="navbar-collapse collapse justify-content-between align-items-center">
                <ul className="navbar-nav plain mx-auto text-center">
                  <li className="nav-item"><a className="nav-link" href="/">Home</a>
                    
                    {/*/.dropdown-menu */}
                  </li>
                  
                  <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="/insta">Instagram</a>
                    
                  </li>
                  <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="junoon/drive">Drive</a>
                    
                  </li>
                  <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="/about">About</a>
                   
                  </li>
                  <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="/contact_us">Contact</a>
                   
                  </li>
                  
                  
                </ul>
              </div>
              <div className="social-wrapper text-right">
                <ul className="social social-mute social-s mb-0">
                  
                  <li><a href="https://www.facebook.com/junoon.nsut/" target="_blank"><i className="fa fa-facebook-f" /></a></li>
                  
                  <li><a href="https://www.instagram.com/junoon.nsut/" target="_blank"><i className="fa fa-instagram" /></a></li>
                </ul>
              </div>
              {/*/.social-wrapper */}
            </div>
          </nav>
          <div className="rev_slider_wrapper fullscreen-container">
            <div id="slider10" className="rev_slider fullscreenbanner dark-wrapper" data-version="5.4.7">
              <ul>
                <li data-transition="fade" data-thumb="style/images/cover6.jpg"><img src="style/images/cover6.jpg" alt="" /></li>
                <li data-transition="fade" data-thumb="style/images/cover5.jpeg"><img src="style/images/cover5.jpeg" alt="" /></li>
                <li data-transition="fade" data-thumb="style/images/cover7.jpeg"><img src="style/images/cover7.jpeg" alt="" /></li>
                <li data-transition="fade" data-thumb="style/images/cover4.jpeg"><img src="style/images/cover4.jpeg" alt="" /></li>
              </ul>
              <div className="tp-static-layers">
                <div className="tp-caption tp-static-layer tp-shape tp-shapewrapper tp-gradient" data-frames="[{&quot;delay&quot;:0,&quot;speed&quot;:300,&quot;frame&quot;:&quot;0&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-x="center" data-y="bottom" data-width="full" data-height={200} data-startslide={0} data-endslide={4} data-responsive_offset="on" data-textalign="['center','center','center','center']" data-type="shape" data-basealign="slide" data-whitespace="nowrap" style={{zIndex: 6}} />
                <div className="tp-caption tp-static-layer font-weight-500 color-white text-center" data-x="center" data-y="middle" data-voffset="['-80','-80','-80','-60']" data-fontsize="['55','55','55','35']" data-lineheight="['65','65','65','45']" data-width="['800','800','680','340']" data-textalign="['center','center','center','center']" data-whitespace="['normal','normal','normal','normal']" data-frames="[{&quot;delay&quot;:1000,&quot;speed&quot;:1200,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:-50px;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-startslide={0} data-endslide={4} data-responsive="on" data-responsive_offset="on" style={{zIndex: 9}}>JUNOON</div>
                <div className="tp-caption tp-static-layer font-weight-200 color-white text-center" data-x="center" data-y="middle" data-voffset="['0','0','0','0']" data-fontsize="['26','26','26','20']" data-lineheight="['36','36','36','30']" data-width="['800','800','680','340']" data-textalign="['center','center','center','center']" data-whitespace="['normal','normal','normal','normal']" data-frames="[{&quot;delay&quot;:1500,&quot;speed&quot;:1200,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;x:-50px;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-startslide={0} data-endslide={4} data-responsive="on" data-responsive_offset="on" style={{zIndex: 9, letterSpacing: '1px'}}>The Photography Club Of NSUT</div>
                <a className="tp-caption tp-static-layer btn btn-l btn-white scroll" data-x="center" data-y="middle" data-voffset="['90','90','90','70']" data-width="['auto','auto','auto','auto']" data-textalign="['center','center','center','center']" data-frames="[{&quot;delay&quot;:2000,&quot;speed&quot;:1200,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:50px;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-startslide={0} data-endslide={4} data-responsive="on" data-responsive_offset="on" style={{zIndex: 9}} href="#portfolio">See Our Works</a>
              </div>
              <div className="tp-bannertimer tp-bottom" />
            </div>
            {/* /.rev_slider */}
          </div>
          {/* /.rev_slider_wrapper */}
          <div className="wrapper dark-wrapper inverse-text fullscreen-container">
            <div className="container inner">
              <h2 className="section-title mb-30 text-center">About Junoon</h2>
              <div className="row d-flex align-items-center">
                <div className="col-lg-6 pr-35 pr-sm-15">
                  <figure className="rounded"><img src="style/images/junoon-logo-only.png" alt="" /></figure>
                </div>
                {/* /column */}
                <div className="space30 d-block d-lg-none d-xl-none" />
                <div className="col-lg-6">
                  <p style={{textAlign:"left"}} className="lead">Founded in 2010, Junoon is a platform for photography and videography enthusiasts of NSUT, who can showcase and develop their talents with the help of it. 

Our members excel not just in different genres of photography but also in film making, photo editing and storytelling through pictures. We bring out our flair for photography through three of our main projects:
Project Perspective,Storygram and Humans Of NSUT
Apart from these, Junoon also organizes the Ethnic Day every year, where the students and the faculty come together to showcase and celebrate our rich and diverse culture and tradition.

We at Junoon provide opportunities for all budding photographers to be featured on our Instagram page. We conduct photowalks around Delhi, hence providing a captivating experience for everyone who wants to learn and grow in this field. Additionally, we hold technical workshops for enhanced learning and organize time to time photography competitions.

We also indulge in collborations with other societies to exhibit the best of happenings in NSUT.</p>
                  
                  
                </div>
                {/* /column */}
              </div>
              {/* /.row */}
              <div className="space150" id="portfolio" />
              <h2 className="section-title mb-30 text-center">Featured Shots</h2>
              <div className="tiles">
                <div className="items row boxed grid-view text-center">
                  <div className="item col-md-6 col-lg-4">
                    <div className="box bg-inverse p-30">
                      <figure className="main mb-20 overlay overlay1 rounded"><img src="style/images/h1.jpg" alt="" />
                        <figcaption>
                          <h5 className="text-uppercase from-top mb-0"></h5>
                        </figcaption>
                      </figure>
                      
                    </div>
                    {/* /.box */}
                  </div>
                  {/*/.item */}
                  <div className="item col-md-6 col-lg-4">
                    <div className="box bg-inverse p-30">
                      <figure className="main mb-20 overlay overlay1 rounded"><img src="style/images/h2.jpg" alt="" />
                        <figcaption>
                          <h5 className="text-uppercase from-top mb-0"></h5>
                        </figcaption>
                      </figure>
                      
                    </div>
                    {/* /.box */}
                  </div>
                  {/*/.item */}
                  <div className="item col-md-6 col-lg-4">
                    <div className="box bg-inverse p-30">
                      <figure className="main mb-20 overlay overlay1 rounded"><img src="style/images/h5.jpg" alt="" />
                        <figcaption>
                          <h5 className="text-uppercase from-top mb-0"></h5>
                        </figcaption>
                      </figure>
                      
                    </div>
                    {/* /.box */}
                  </div>
                  {/*/.item */}
                  <div className="item col-md-6 col-lg-4">
                    <div className="box bg-inverse p-30">
                      <figure className="main mb-20 overlay overlay1 rounded"><img src="style/images/h4.jpg" alt="" />
                        <figcaption>
                          <h5 className="text-uppercase from-top mb-0"></h5>
                        </figcaption>
                      </figure>
                      
                    </div>
                    {/* /.box */}
                  </div>
                  {/*/.item */}
                  <div className="item col-md-6 col-lg-4">
                    <div className="box bg-inverse p-30">
                      <figure className="main mb-20 overlay overlay1 rounded"><img src="style/images/h3.jpg" alt="" />
                        <figcaption>
                          <h5 className="text-uppercase from-top mb-0"></h5>
                        </figcaption>
                      </figure>
                      
                    </div>
                    {/* /.box */}
                  </div>
                  {/*/.item */}
                  <div className="item col-md-6 col-lg-4">
                    <div className="box bg-inverse p-30">
                      <figure className="main mb-20 overlay overlay1 rounded"><img src="style/images/h6.jpg" alt="" />
                        <figcaption>
                          <h5 className="text-uppercase from-top mb-0"></h5>
                        </figcaption>
                      </figure>
                    
                    </div>
                    {/* /.box */}
                  </div>
                  {/*/.item */}
                  <div className="item col-md-6 col-lg-4">
                    <div className="box bg-inverse p-30">
                      <figure className="main mb-20 overlay overlay1 rounded"><img src="style/images/h7.jpg" alt="" />
                        <figcaption>
                          <h5 className="text-uppercase from-top mb-0"></h5>
                        </figcaption>
                      </figure>
                    </div>
                    {/* /.box */}
                  </div>
                  {/*/.item */}
                  <div className="item col-md-6 col-lg-4">
                    <div className="box bg-inverse p-30">
                      <figure className="main mb-20 overlay overlay1 rounded"><img src="style/images/h8.jpg" alt="" />
                        <figcaption>
                          <h5 className="text-uppercase from-top mb-0"></h5>
                        </figcaption>
                      </figure>
                      
                    </div>
                    {/* /.box */}
                  </div>
                  {/*/.item */}
                  <div className="item col-md-6 col-lg-4">
                    <div className="box bg-inverse p-30">
                      <figure className="main mb-20 overlay overlay1 rounded"><img src="style/images/h9.jpg" alt="" />
                        <figcaption>
                          <h5 className="text-uppercase from-top mb-0"></h5>
                        </figcaption>
                      </figure>
                      
                    </div>
                    {/* /.box */}
                  </div>
                  {/*/.item */}
                </div>
                {/*/.row */}
              </div>
              {/*/.tiles */}
              <div className="space150" />
              <h2 className="section-title mb-30 text-center">Best of Storygram</h2>
              <div className="blog grid grid-view boxed">
                <div className="row isotope">
                  <div className="item post grid-sizer col-md-6 mb-0">
                    <div className="box bg-inverse">
                      <figure className="main mb-30 overlay overlay1 rounded"><a href="#"> <img src="style/images/story3.jpg" alt="" /></a>
                        <figcaption>
                          <h5 className="text-uppercase from-top mb-0">Story 1</h5>
                        </figcaption>
                      </figure>
          
                      <h2 className="post-title"><a href="#">Storygram 1</a></h2>
                      <div className="post-content">
                        <p>The Bofors Howitzer stood strong in all its glory, and in front it stood two people. The little boy was in absolute awe of the grandiosity of the machine. The giant wheels and the extended barrel left him in wonder. His grandfather had felt the exact same stream of emotions some thirty years ago when he first operated on the beast. It was a long time ago, but being in the presence of the Howitzer again had sent him down the memory lane. He smiled as he remembered some of the most cherished moments he had spent while serving in the Army. It was a cold morning, but warm nostalgia comforted him. It was a cold morning, but he felt at home.</p>
                      </div>
                      {/* /.post-content */}
                      <hr />
                      <div className="meta meta-footer d-flex justify-content-between mb-0"><span className="date">5 Jul 2018</span><span className="comments"><a href="#">3</a></span></div>
                    </div>
                    {/* /.box */}
                  </div>
                  {/* /.post */}
                  <div className="item post grid-sizer col-md-6 mb-0">
                    <div className="box bg-inverse">
                      <figure className="main mb-30 overlay overlay1 rounded"><a href="#"> <img src="style/images/story1.jpg" alt="" /></a>
                        <figcaption>
                          <h5 className="text-uppercase from-top mb-0">Story 2</h5>
                        </figcaption>
                      </figure>
                      
                      <h2 className="post-title"><a href="#">Storygram 2</a></h2>
                      <div className="post-content">
                        <p>
                        A cold and dark December morning. A thick mist hangs over the dawn. His boat pierces through the calm glacial waters. The mist does not deter him, for he has rowed in many such mornings before. What most dearly awaits him, is not the destination nor his duty, but the migratory birds. Over the years, they have become his most cherished friends who come to see him once a year. The only sounds heard in this serenity is that of the flapping of wings and of him sprinkling sunflower seeds around him. The birds create a symphonic chaos around him as he disappears into the mist.
                        </p>
                      </div>
                      {/* /.post-content */}
                      <hr />
                      <div className="meta meta-footer d-flex justify-content-between mb-0"><span className="date">18 Jun 2018</span><span className="comments"><a href="#">5</a></span></div>
                    </div>
                    {/* /.box */}
                  </div>
                  {/* /.post */}
                </div>
                {/* /.row */}
              </div>
              {/* /.blog */}
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
                    srcSet='style/images/junoon-white.png 1x, style/images/junoon-white.png 4x'
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

export default Home;
