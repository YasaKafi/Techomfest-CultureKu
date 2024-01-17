import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../index.css";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import CardSlider from "../common_component/card_slider_pustaka_page";
import imageAsset from "../../utils/image";

function ComponentFourPustaka() {

  const cardData = [
    {
      name: "Tari Piring",
      asal: "Minangkabau, Sumatera Barat",
      desc: "Tari Piring adalah tarian tradisional Indonesia yang berasal dari Minangkabau, Sumatera Barat. Dalam tarian ini, penari membawakan piring-piring yang ditempatkan di atas telapak tangannya dengan berbagai gerakan dinamis.",
      images: imageAsset.TariPiring,
    },
    {
      name: "Tari Kecak",
      asal: "Bali, Indonesia",
      desc: "Tari Kecak adalah pertunjukan dramatari seni khas Bali yang lebih utama menceritakan mengenai Ramayana dan dimainkan terutama oleh laki-laki.",
      images: imageAsset.TariKecak,
    },
    {
      name: "Tari Saman",
      asal: "Aceh, Indonesia",
      desc: "Tari Saman merupakan salah satu media untuk menyampaikan pesan atau dakwah. Tarian ini mencerminkan pendidikan, keagamaan, sopan santun, kepahlawanan, kekompakan dan kebersamaan.",
      images: imageAsset.TariSaman,
    },
    {
      name: "Tari Serimpi",
      asal: "Jawa Tengah, Indonesia",
      desc: "Tari Serimpi merupakan tarian Jawa klasik yang sudah ada sejak zaman kerajaan. Tarian ini terkenal memiliki gerak yang sangat halus dan cerita yang mengandung nilai simbolis.",
      images: imageAsset.TariSerimpi,
    },
  ];

  return (
    <>
      <div className="w-full h-screen relative flex flex-col pt-20 font-poppins items-center">
        <div className="absolute -bottom-72 right-48 overflow-hidden lg:flex es:hidden  ">
          <img
            src={imageAsset.bgPetaIndonesia2}
            alt=""
            className="h-[500px]  object-cover opacity-5  "
          />
        </div>
        <div className="font-semibold text-[45px] md:text-[35px] sm:text-[25px] es:text-[20px] lg:text-[40px]">
          Budaya Indonesia
        </div>
        <div className="font-regular text-lg lg:text-lg sm:text-sm es:text-xs es:text-center md:px-0 es:px-4">
          Indonesia memiliki beragam kebudayaan, mulai dari sabang sampai
          merauke
        </div>
        <div className="w-full h-[60%]  pt-16">
          <Swiper
            breakpoints={{
              768: {
                spaceBetween: 50,
              },
            }}
            autoplay={true}
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
            {cardData.map((card, index) => (
              <SwiperSlide
                key={index}
                data-swiper-autoplay="2000"
                className="w-full   shadow-none bg-transparent  rounded-3xl h-4/5 "
              >
                <CardSlider
                  name={card.name}
                  asal={card.asal}
                  desc={card.desc}
                  images={card.images}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default ComponentFourPustaka;
