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
                  <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="/timeline">Timeline</a>
                  </li>
                  <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="/about">About</a>
                   
                  </li>
                  <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="/contact_us">Contact</a>
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
          <div className="scroll-down"></div>
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
                info="Over these 2 topsy turvy years at NSUT, a crazy 3 day Moksha, HoNsut, burstful photo walks and tiring event coverings, we have found a family in college. Thanks to our seniors, who mentored and nurtured us, gave us treats, scolded us, even rejected our ideas, but no matter what they always had faith in us. 
Here’s to the batch of 2022!
We send you countless love and wishes.
Have a great journey ahead to your newest destinations."
                year="2022"
        
              />
              {/* <TimelineCard
                season="JUNOON APPROACHED FROM OUTSIDE TO COVER EVENT"
                src="https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/timeline/images/img-12.png"
                info="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula
                      eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
                      montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
                      pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
                      vel, aliquet nec, vulputate eget, arcu."
                year="2022"
              />              */}

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
                info="In the era of modernization and westernization when most of the people are moving away from their own culture and history Junoon NSUT conducts Ethnic day each year since 2018. Enabling the young generation to revive love and respect for their own culture and history."
                year="2018"
              />
              <TimelineCard
                season="STORYGRAM INTRODUCED"
                src="https://user-images.githubusercontent.com/71789479/163728580-69983619-39c1-4273-aa6d-905e85c8487b.png"
                info="Every picture has a story behind it! The picture shows its emotions through telling its unique story. A photographer is the one who knows each and every chapter of the photograph he takes. Storygram is a project of Junoon that admires clicking pictures that describe a story. It is just a random capturing of certain moments that are converted into a story. Different sceneries and sentiments in the surrounding are enough to encourage the cameraman to frame them. This project has helped the people to take photos suitable for a storygram. A kid, fruit-sellers, animals, roads, shelters, people, that means anything or anybody can contribute in the storygram. Storygram really makes the soul of a reader cherished by reading such heart-touching posts."
                year="2018"
              />

              <TimelineCard
                season="PROJECT PRESPECTIVE"
                src="https://user-images.githubusercontent.com/71789479/163728384-c469df85-f9ee-4fe9-a440-cff079346b17.png"
                info="An eye of the photographer can see the weirdest things in an impressive fashion! The cameraman is always in a search of such moments. One of the amazing projects of Junoon is Project Perspective which is completely based on this theme. This gives you the freedom of clicking anything that may be real or illusionistic but it should blow the mind of the viewers by its creativity. You can find imaginativeness anywhere in this big sphere. To admire the scene in a different perspective all you need is to grope flora-fauna, architecture, monuments, people and many more things. This project has been going on for many years. People in Junoon have always come out with their unexpected innovativeness followed by their super skills in photography."
                year="2015"
              />

              <TimelineCard
                season="FIRST PHOTOWALK"
                src="https://user-images.githubusercontent.com/71789479/163713302-b29ec9d2-fa70-44bb-890a-c0bbe2eb5653.png"
                info="Our first photo-walk was conducted in 2014. The location was Quran Minar. Everyone had a great time interacting with each other. Since then we have not stopped and have conducted 20+ photowalks. We have convered locations like Rashtrapaty Bhavan, Chandani Chowk, Humayu Tomb, Sundar Nursery etc."
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
                src="https://user-images.githubusercontent.com/71789479/163728537-dbda078b-eff0-4d11-b916-b00411a09990.png"
                info="The world is a stage. We merely tell untold stories through pictures and captions. We talk to different people who are a part of the NSUT family. Be it the seniors who share unfiltered experiences of their college life, the professors who taught us well, or the bhaiya at McCain famous for his Perri Perri fries! Inspired by the Humans of New York, Humans of NSUT is for all the people who contribute directly or indirectly to make these 145 acres in southwest Delhi exciting and fun. Cheers to all the humans out there! we owe it to you."
                year="2013"
              />

              <TimelineCard
                season="JUNOON FOUNDED"
                src="https://user-images.githubusercontent.com/71789479/163728676-750c2ec4-eef9-49a3-859a-bdd859d6fb0c.png"
                info="2010, the year when JUNOON-the photography club of NSUT (formerly NSIT) was founded."
                year="2010"
              />
            </div>
          </div>
        </div>
        
      </section>
    </div>
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
  );
}
export default timeline;