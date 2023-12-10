import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCoverflow,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../index.css";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import CardSlider from "../common_component/card_slider_pustaka_page";

function ComponentFourPustaka() {
  return (
    <>
      <div className="w-full h-screen flex flex-col pt-20 items-center">
        <div className="font-semibold text-[45px] font-poppins ">
          Budaya Indonesia
        </div>
        <div className="text-base font-poppins text-center  mt-6 font-regular">
          Indonesia memiliki beragam kebudayaan, mulai dari sabang sampai
          merauke
        </div>
        <div className="w-full custom-height-60  pt-16">
          <Swiper
            autoplay={true}
            spaceBetween={200}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={"2"}
            coverflowEffect={{
              slideShadows: true,
              rotate: 0,
              stretch: 0,
              depth: 125,
              modifier: 2.5,
            }}
            navigation={{
              nextEl: ".next",
              prevEl: ".prev",
              clickable: true,
            }}
            modules={[Pagination, Navigation, EffectCoverflow]}
            className="w-full  h-full relative"
          >
            <SwiperSlide
              data-swiper-autoplay="2000"
              className="w-full   shadow-none bg-transparent  rounded-3xl h-4/5 "
            >
              <CardSlider />
            </SwiperSlide><SwiperSlide
              data-swiper-autoplay="2000"
              className="w-full   shadow-none bg-transparent  rounded-3xl h-4/5 "
            >
              <CardSlider />
            </SwiperSlide><SwiperSlide
              data-swiper-autoplay="2000"
              className="w-full   shadow-none bg-transparent  rounded-3xl h-4/5 "
            >
              <CardSlider />
            </SwiperSlide><SwiperSlide
              data-swiper-autoplay="2000"
              className="w-full   shadow-none bg-transparent  rounded-3xl h-4/5 "
            >
              <CardSlider />
            </SwiperSlide>

            {/* <div className="absolute top-5 transform flex-row justify-around w-full -translate-y-1/2 flex z-10">
              <div className="prev ">
                <IoIosArrowBack size={40} />
              </div>
              <div className="next">
                <IoIosArrowForward size={40} />
              </div>
            </div> */}
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default ComponentFourPustaka;
