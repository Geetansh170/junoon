import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Virtual } from "swiper";

import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";
import "swiper/modules/navigation/navigation.min.css";
import "swiper/modules/scrollbar/scrollbar.min.css";

import DevCard from "./DevCard";

function Developers() {
  return (
    <div className='dev-body '>
      <div className='dev-slide-container swiper'>
        <Swiper
          modules={[Navigation, Pagination, A11y, Virtual]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
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
