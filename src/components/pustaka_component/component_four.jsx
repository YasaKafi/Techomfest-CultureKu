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
  return (
    <>
      <div className="w-full h-screen relative flex flex-col pt-20 items-center">
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
        <div className="w-full custom-height-60  pt-16">
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
            <SwiperSlide
              data-swiper-autoplay="2000"
              className="w-full   shadow-none bg-transparent  rounded-3xl h-4/5 "
            >
              <CardSlider
                name="Tari Piring"
                asal="Minangkabau, Sumatera Barat"
                desc="Tari Piring adalah tarian tradisional Indonesia yang berasal dari Minangkabau, Sumatera Barat. Dalam tarian ini, penari membawakan piring-piring yang ditempatkan di atas telapak tangannya dengan berbagai gerakan dinamis."
                images={imageAsset.TariPiring} // Ganti dengan sumber gambar yang sesuai
              />
            </SwiperSlide>
            <SwiperSlide
              data-swiper-autoplay="2000"
              className="w-full   shadow-none bg-transparent  rounded-3xl h-4/5 "
            >
              <CardSlider
                name="Tari Kecak"
                asal="Bali, Indonesia"
                desc="Tarian ini terkenal karena penggunaan vokal ( cak ) yang berulang-ulang oleh para penari laki-laki yang duduk bersila dalam formasi lingkaran. Biasanya, tarian ini menggambarkan cerita Ramayana, sebuah kisah epik dari mitologi Hindu. Kecak sering dimainkan dalam upacara keagamaan di Bali, namun juga menjadi atraksi turis yang populer."
                images={imageAsset.TariKecak} // Ganti dengan sumber gambar yang sesuai
              />
            </SwiperSlide>
            <SwiperSlide
              data-swiper-autoplay="2000"
              className="w-full   shadow-none bg-transparent  rounded-3xl h-4/5 "
            >
             <CardSlider
                name="Tari Saman"
                asal="Aceh, Indonesia"
                desc="Tarian ini dilakukan dalam kelompok besar di mana para penari duduk berbaris dan mengeksekusi gerakan-gerakan tangan, tubuh, dan kepala yang terkoordinasi dengan cepat. Musik dan nyanyian juga menjadi bagian integral dari tarian ini. Awalnya, Saman adalah bagian dari tradisi yang dilakukan dalam upacara adat, namun sekarang menjadi tarian yang sering ditampilkan dalam berbagai acara budaya."
                images={imageAsset.TariSaman} // Ganti dengan sumber gambar yang sesuai
              />
            </SwiperSlide>
            <SwiperSlide
              data-swiper-autoplay="2000"
              className="w-full   shadow-none bg-transparent  rounded-3xl h-4/5 "
            >
              <CardSlider
                name="Tari Serimpi"
                asal="Jawa Tengah, Indonesia"
                desc="Tarian ini merupakan tarian keraton Jawa yang anggun dan elegan, biasanya dipentaskan oleh dua penari wanita yang mengenakan kostum tradisional Jawa yang indah. Gerakan yang lemah lembut dan anggun dalam tarian ini menggambarkan kehalusan dan keanggunan, sering kali menjadi bagian dari upacara keagamaan, perayaan kerajaan, atau pentas seni budaya. Tarian ini juga menjadi simbol keindahan dan keanggunan tradisi Jawa."
                images={imageAsset.TariSerimpi} // Ganti dengan sumber gambar yang sesuai
              />
            </SwiperSlide>

          </Swiper>
        </div>
      </div>
    </>
  );
}

export default ComponentFourPustaka;
