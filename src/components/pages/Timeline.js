import React from "react";
import TimelineCard from "./TimelineCard";

function timeline() {
  return (
    <div>
    {/* NAVBAR */}
    <nav className="navbar wide transparent absolute inverse-text navbar-expand-lg">
            <div className="container-fluid flex-row justify-content-center">
              <div className="navbar-header">
                <div className="navbar-brand"><a href="/"><img src="#" srcSet="style/images/junoon-white.png 1x, style/images/junoon-white.png 4x" alt="" /></a></div>
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
                  <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="/collection">Collections</a>
                    
                  </li>
                  <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="/about">About</a>
                   
                  </li>
                  <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="/contact_us">Contact</a>
                  </li>

                  <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="/timeline">Timeline</a>
                  </li>
                  {/* <li className="nav-item dropdown" style={{padding: "10px 30px"}}>
                      
                    <button style={{outline:"none", background:"none", border:"none", cursor:"pointer", fontWeight: "700", color:"rgba(255, 255, 255, 1)"}} className="openModelBtn" onClick={() => {setOpenModel(true)}}>Login</button>
                        
                  </li> */}
                  

                  
                </ul>
              </div>
              {/* <div className="login-btn">
                    {openModel && <Model closeModel={setOpenModel}/>}
              </div> */}



              <div className="social-wrapper text-right">
                <ul className="social social-mute social-s mb-0">
            
                  <li><a href="https://www.facebook.com/junoon.nsut/" target="_blank"><i className="fa fa-facebook-f" /></a></li>
                  
                  <li><a href="https://www.instagram.com/junoon.nsut/" target="_blank"><i className="fa fa-instagram" /></a></li>
                </ul>
              </div>
              {/*/.social-wrapper */}
            </div>
          </nav>
    <div className="ag-timeline-block">


    


      <div className="ag-timeline_title-box">
        <div className="ag-timeline_tagline">Welcome to the JUNOON timeline</div>
        {/* <div className="ag-timeline_title">Time Line</div> */}
        <a href="#sec-2">
          <div class="scroll-down"></div>
        </a>
      </div>

      <section className="ag-section" id="sec-2">
        <div className="ag-format-container">
          <div className="js-timeline ag-timeline">
            <div className="js-timeline_line ag-timeline_line">
              <div className="js-timeline_line-progress ag-timeline_line-progress" />
            </div>

            <div className="ag-timeline_list">
              {/* The first card appears from right side, then cards appear alternatively (from left then right then left) */}
              
              <TimelineCard
                season="WE LOVE YOU SENIORS (BATCH OF NSIT'22)"
                src="https://user-images.githubusercontent.com/71789479/163712270-e26fd67e-5c9c-4ecb-be43-9a985cc7ecb3.png"
                info="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula
                      eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
                      montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
                      pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
                      vel, aliquet nec, vulputate eget, arcu."
                year="2022"
              />
              <TimelineCard
                season="JUNOON APPROACHED FROM OUTSIDE TO COVER EVENT"
                src="https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/timeline/images/img-12.png"
                info="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula
                      eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
                      montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
                      pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
                      vel, aliquet nec, vulputate eget, arcu."
                year="2022"
              />
              <TimelineCard
                season="VISIT TO MUSEO CAMERA"
                src="https://user-images.githubusercontent.com/71789479/163712522-cb426b33-9ba5-48fa-9b75-259c1089309b.png"
                info="Junoon, The photography club of NSUT organised an offline meet for our members wherein they explored a photography museum, Museo Camera (@museo_camera) Right in the heart of Gurgaon, this museum tells you the story of the evolution of the camera from the 18th century till date. The collection in this museum is outstanding and the narrative thread that spins through is thought provoking. We would like to extend our gratitude to the entire team of the museum for their warmth, joy and hospitality. Special thanks to Mr. Aditya Arya (@adiarya) for sharing photography tips and experiences."
                      
                year="2022"
              />
              

              <TimelineCard
                season="PHOTOWARS INTRODUCED"
                src="https://user-images.githubusercontent.com/71789479/163713415-2f6db221-0a3d-427d-9c1f-85d64c2b1f1a.png"
                info="Junoon NSUT proudly presents it's new exhilarating project, PhotoWars, wherein we'll be uploading a series of pictures on the story section of our official Instagram handle.
                Follow us on our official handles and stay tuned for further updates since we will be releasing the theme for this competition-cum-project pretty soon."
                year="2021"
              />
              <TimelineCard
                season="ETHINIC DAY"
                src="https://user-images.githubusercontent.com/71789479/163712474-a34c9e6c-cb7b-41ac-933b-e8bc75f50261.png"
                info="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula
                      eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
                      montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
                      pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
                      vel, aliquet nec, vulputate eget, arcu."
                year="2018"
              />
              <TimelineCard
                season="STORYGRAM INTRODUCED"
                src="https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/timeline/images/img-12.png"
                info="Storygram was introduced in 2018. The idea was to express out the story a photograph speaks. Visit:- https://www.instagram.com/junoon.nsut/"
                year="2018"
              />

              <TimelineCard
                season="PROJECT PRESPECTIVE"
                src="https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/timeline/images/img-12.png"
                info="Project Prespective was introduced in 2015."
                year="2015"
              />

              <TimelineCard
                season="FIRST PHOTOWALK"
                src="https://user-images.githubusercontent.com/71789479/163713302-b29ec9d2-fa70-44bb-890a-c0bbe2eb5653.png"
                info="Our first photo-walk was conducted in 2014. The location was Quran Minar. Everyone had a great time interacting with each other. Since then we have not stopped and have conducted 20+ photowalks. We have convered locations like, Humayutomb, Sundar nursery, Qutub Minar etc."
                year="2014"
              />

              <TimelineCard
                season="PROJECT REELS INTRODUCED"
                src="https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/timeline/images/img-12.png"
                info="Project reels was introduced in 2014 by one of the most creative batch of NSIT's Junoon."
                year="2014"
              />

              <TimelineCard
                season="HONSIT (HONSUT Now)"
                src="https://user-images.githubusercontent.com/71789479/163713644-8d86333d-7f45-44d5-8463-8a204c6b85ca.png"
                info="Children with dreamy eyes made way for the adults with accomplished dreams. Our seniors have seen it all, from non working fountains, existing zayca and crazy Mokshas to working fountains, SC, APJ and online classes; they have been on one wild ride. Before they go on another adventure, we at Junoon bring you their stories in their words. Visit:- https://www.instagram.com/humansofnsut/"
                year="2013"
              />

              <TimelineCard
                season="JUNOON FOUNDED"
                src="https://user-images.githubusercontent.com/71789479/163725290-3532a7fc-dc37-431c-8ffb-e4030971750b.png"
                info="2010, the year when the JUNOON was founded in NSIT."
                year="2010"
              />
            </div>
          </div>
        </div>
        
      </section>
    </div>
    </div>
  );
}
export default timeline;