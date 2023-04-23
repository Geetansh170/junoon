import React from "react";
// import { Fragment } from "react";
// import "./Developers.css";
// import Swiper from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Virtual } from "swiper";

import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";
import "swiper/modules/navigation/navigation.min.css";
import "swiper/modules/scrollbar/scrollbar.min.css";

// import Swiper, { Navigation, Pagination } from "swiper";
import DevCard from "./DevCard";

function Developers() {
  //   var swiper = new Swiper(".dev-slide-content", {
  //     slidesPerView: 3,
  //     spaceBetween: 25,
  //     loop: true,
  //     centerSlide: "true",
  //     fade: "true",
  //     grabCursor: "true",
  //     pagination: {
  //       el: ".swiper-pagination",
  //       clickable: true,
  //       dynamicBullets: true,
  //     },
  //     navigation: {
  //       nextEl: ".swiper-button-next",
  //       prevEl: ".swiper-button-prev",
  //     },

  //     breakpoints: {
  //       0: {
  //         slidesPerView: 1,
  //       },
  //       520: {
  //         slidesPerView: 2,
  //       },
  //       950: {
  //         slidesPerView: 3,
  //       },
  //     },
  //   });

  return (
    <div className='dev-body '>
      <div className='dev-slide-container swiper'>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, A11y, Virtual]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          //   a11y={}
          pagination={{ clickable: true }}
          //   scrollbar={{ draggable: true }}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log("slide change")}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            620: {
              slidesPerView: 2,
            },
            950: {
              slidesPerView: 3,
            },
          }}
        >
          <div className='dev-slide-content'>
            <div className='dev-card-wrapper swiper-wrapper'>
              <SwiperSlide>
                <DevCard img={""} name={"Geetansh"} title={"Full Stack Dev"} />
              </SwiperSlide>
              <SwiperSlide>
                <DevCard img={""} name={"Divyanshu"} title={"Full Stack Dev"} />
              </SwiperSlide>
              <SwiperSlide>
                <DevCard img={""} name={"Ishkaran"} title={"Full Stack Dev"} />
              </SwiperSlide>
              <SwiperSlide>
                <DevCard img={""} name={"Armaan"} title={"Full Stack Dev"} />
              </SwiperSlide>
              <SwiperSlide>
                <DevCard
                  img={""}
                  name={"Amrutanshu"}
                  title={"Full Stack Dev"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <DevCard img={""} name={"Jatin"} title={"Full Stack Dev"} />
              </SwiperSlide>
              <SwiperSlide>
                <DevCard img={""} name={"Pranav"} title={"Full Stack Dev"} />
              </SwiperSlide>
              <SwiperSlide>
                <DevCard img={""} name={"Adarsh"} title={"Full Stack Dev"} />
              </SwiperSlide>
              <SwiperSlide>
                <DevCard img={""} name={"Devanshi"} title={"Full Stack Dev"} />
              </SwiperSlide>
            </div>
          </div>
        </Swiper>
      </div>
    </div>
  );
}

export default Developers;
