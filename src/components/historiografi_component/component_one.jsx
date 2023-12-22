import React from "react";
import imageAsset from "../../utils/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../index.css";
import PageSlider from "../common_component/page_slider_historiografi";

function ComponentOneHistoriografi() {
  const images = [
    imageAsset.bgOneHistoriografi,
    imageAsset.bgTwoHistoriografi,
    imageAsset.bgThreeHistoriografi,
  ];

  const titles = [
    "Indonesia Dengan Beragam Keindahan",
    "Bangunan Bersejarah Yang Mendunia",
    "Indonesia Dengan Beragam Kebudayaan",
  ];

  const descriptions = [
    `Menelusuri Kekayaan Indonesia: Dari Pesona Alam Hingga Keunikan Budaya yang Mempesona`,
    `Indonesia memiliki bangunan bersejarah yang cukup terkenal hingga mendunia`,
    `Menggambarkan keberagaman budaya dan etnis yang ada di Indonesia`,
  ];

  return (
    <>
      <div className="w-full h-[600px]  flex flex-col pt-20 items-center">
        <div className="w-full h-full  ">
          <Swiper
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={"1"}
            navigation={{
              nextEl: ".next",
              prevEl: ".prev",
              clickable: true,
            }}
            modules={[Pagination, Navigation, Autoplay]}
            className="w-full  h-full relative"
          >
            <SwiperSlide className="w-full   shadow-none bg-transparent   h-full ">
              <PageSlider
                images={images[0]}
                titles={titles[0]}
                desc={descriptions[0]}
              />
            </SwiperSlide>
            <SwiperSlide className="w-full   shadow-none bg-transparent   h-full ">
              <PageSlider
                images={images[1]}
                titles={titles[1]}
                desc={descriptions[1]}
              />
            </SwiperSlide>
            <SwiperSlide className="w-full   shadow-none bg-transparent   h-full ">
              <PageSlider
                images={images[2]}
                titles={titles[2]}
                desc={descriptions[2]}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default ComponentOneHistoriografi;
