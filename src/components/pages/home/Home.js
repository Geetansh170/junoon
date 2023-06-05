import React, { Fragment } from "react";
import $ from "jquery";
import "./home.css";

import { StorygramData } from "../Storygram/StorygramData";
import StorygramCard from "../Storygram/StorygramCard";
import NavbarBlack from "../NavbarBlack";
import RevSliderWrapper from "./RevSliderWrapper";
import FooterBlack from "../FooterBlack";
import FeaturedShots from "./FeaturedShots";

/*
Inspired by Florin Pop's coding challenges, you can check them here: https://www.florin-pop.com/blog/2019/03/weekly-coding-challenge/
*/

const Home = () => {
  document.addEventListener("DOMContentLoaded", () => {
    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= -65 &&
        rect.left >= -10 &&
        rect.bottom <=
          (window.innerHeight + 65 ||
            document.documentElement.clientHeight +
              65) /* or $(window).height() */ &&
        rect.right <=
          (window.innerWidth - 10 ||
            document.documentElement.clientWidth -
              10) /* or $(window).width() */
      );
    }

    function onVisibilityChange(el, callback) {
      var old_visible;
      return function () {
        var visible = isElementInViewport(el);
        if (visible !== old_visible) {
          old_visible = visible;
          if (typeof callback == "function") {
            callback();
          }
        }
      };
    }

    var handler = onVisibilityChange(
      document.getElementById("count1"),
      function () {
        /* Your code go here */

        function counter(id, start, end, duration) {
          let obj = document.getElementById(id),
            current = start,
            range = end - start,
            increment = end > start ? 1 : -1,
            step = Math.abs(Math.floor(duration / range)),
            timer = setInterval(() => {
              current += increment;
              obj.textContent = current;
              if (current === end) {
                clearInterval(timer);
              }
            }, step);
        }
        if (isElementInViewport(document.getElementById("count1"))) {
          counter("count1", 0, 142, 1000);
          counter("count2", 0, 63, 1000);
          counter("count3", 0, 74, 1000);
        } else {
          counter("count1", 0, 1, 1);
          counter("count2", 0, 1, 1);
          counter("count3", 0, 1, 1);
        }
      }
    );

    //console.log(handler);

    // jQuery
    $(window).on("DOMContentLoaded load resize scroll", handler);
  });

  return (
    <Fragment>
      <div className='content-wrapper'>
        {/* Navbar */}
        <NavbarBlack />
        {/* rev_slider_wrapper */}
        <RevSliderWrapper />

        <div className='wrapper dark-wrapper inverse-text fullscreen-container'>
          <div className='container inner'>
            <h2 className='section-title mb-30 text-center'>About Junoon</h2>
            <div className='row d-flex align-items-center'>
              <div className='col-lg-6 pr-35 pr-sm-15'>
                <figure className='rounded'>
                  <img src='style/images/junoon-logo-onlywithname.png' alt='' />
                </figure>
              </div>
              {/* /column */}
              <div className='space30 d-block d-lg-none d-xl-none' />
              <div className='col-lg-6'>
                <p style={{ textAlign: "left" }} className='lead'>
                  Founded in 2010, Junoon is a platform for photography and
                  videography enthusiasts of NSUT where they can showcase and
                  nurture their talents. Our members excel not just in
                  different genres of photography but also in film making, photo
                  editing and storytelling through pictures. We bring out our
                  flair for photography through three of our main projects:
                  PhotoWars, Storygram and Humans Of NSUT. One more
                  new project, Project Reels, has been
                  incorporated adding to the rich history of the society. Junoon
                  also organizes the Ethnic Day every year wherein the students
                  and the faculty come together to celebrate and display our
                  fusion of cultures, traditions and harmony. Our society
                  provides the platform to the photography enthusiasts as they
                  exhibit talent through their pictures that we feature on our
                  social media handles. We conduct photowalks around Delhi,
                  hence providing a captivating experience for everyone who
                  wants to learn and grow in this field. We also organise collaborative 
                  photowalks with photography societies from other colleges. Additionally, our team
                  holds technical workshops for enhanced learning and organizes
                  time to time photography competitions. Junoon also indulges in
                  collborations with other societies to exhibit the best of
                  happenings in NSUT. 
                </p>
              </div>
              {/* /column */}
            </div>
            {/* /.row */}

            <div className='wrapper' id='anchor'>
              <br></br>
              <br></br>
              <section>
                <div className='container'>
                  <div className='row justify-content-center text-center'>
                    <div className='col-md-4 col-sm-6'>
                      <p>
                        <span id='count3' style={{ fontSize: "550%" }} />
                        <span> Competitions</span>
                      </p>
                    </div>
                    <div className='col-md-4 col-sm-6'>
                      <p>
                        <span id='count1' style={{ fontSize: "550%" }} />
                        <span> Photowalks</span>
                      </p>
                    </div>
                    <div className='col-md-4 sol-sm-6'>
                      <p>
                        <span id='count2' style={{ fontSize: "550%" }} />
                        <span> Work-Shops</span>
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Add Space */}
            <div className='space150' id='portfolio' />

            {/* Featured Shots */}
            <h2 className='section-title mb-30 text-center'>Featured Shots</h2>

            {/*/.tiles */}
            <FeaturedShots />

            <div className='space150' />
            <h2 className='section-title mb-30 text-center'>
              Best of Storygram
            </h2>
            <div className='blog grid grid-view boxed'>
              {/* <div className='row isotope'> */}
              <div className='flex flex-wrap sg-outer mb-20'>
                <StorygramCard
                  key={0}
                  title={StorygramData.length}
                  imgURL={StorygramData[0].imgURL}
                  href={StorygramData[0].href}
                  postContent={StorygramData[0].postContent}
                  date={StorygramData[0].date}
                />
                {/* /.post */}

                <StorygramCard
                  key={1}
                  title={StorygramData.length - 1}
                  imgURL={StorygramData[1].imgURL}
                  href={StorygramData[1].href}
                  postContent={StorygramData[1].postContent}
                  date={StorygramData[1].date}
                />
                {/* /.post */}
              </div>
              {/* </div> */}
              {/* /.row */}
            </div>
            {/* /.blog */}
            <br />
            <a href='/storygram'>
              <button className='btn btn-trans btn-white hello'>
                View More
              </button>
            </a>
          </div>
          {/* /.container */}
        </div>
        {/* /.wrapper */}
        <FooterBlack />
      </div>
      {/* /.content-wrapper */}
      {/* SLIDER REVOLUTION 5.0 EXTENSIONS  (Load Extensions only on Local File Systems! The following part can be removed on Server for On Demand Loading) */}
    </Fragment>
  );
};

export default Home;
