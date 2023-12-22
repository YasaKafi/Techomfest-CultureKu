import React, { useState } from "react";
import imageAsset from "../../utils/image";
import { RiInformationFill } from "react-icons/ri";
import { IoMdCloseCircle } from "react-icons/io";

function ComponentTwoDetail() {
  const [showOverlay, setShowOverlay] = useState(false);
  const [showOverlayInformation, setShowOverlayInformation] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
    setShowOverlay(true);
  };

  const closeOverlay = () => {
    setShowOverlay(false);
    setShowOverlayInformation(false);
  };
  const titles = [
    "Gunung Bromo",
    "Teluk Cendrawasih",
    "Pura Tanah Lot",
    "Candi Prambanan",
    "Tari Kecak",
  ];

  const images = [
    { src: `${imageAsset.TariKecak}`,  },
    { src: `${imageAsset.TariPiring}`, customHeight: 45 },
    { src: `${imageAsset.PatungCandi}`, customHeight: 55 },
    { src: `${imageAsset.TradisiBali}`, customHeight: 30 },
    { src: `${imageAsset.puraTanahLot}`, customHeight: 45 },
    // ... dan seterusnya
  ];

  const descriptions = [
    `Wisata Gunung Bromo adalah salah satu tempat wisata di indonesia yang menjadi favorit bagi wisatawan baik dalam negeri maupun luar negeri. Gunung Bromo terletak di Kabupaten Probolinggo. Gunung Bromo memiliki ketinggian sekitar 2392 mdpl. Memiliki kawah yang menjadi objek utama yang sering dikunjungi oleh wisatawan asing maupun lokal. Untuk sampai di bibir kawah, para wisatawan harus menaiki tangga yang cukup panjang. Gunung Bromo juga di kenal dengan sunrise dan sunsetnya. Tidak hanya pemandangan matahari terbit saja yang menjadi daya tarik utama Gunung Bromo, namun ada banyak sekali tempat wisata di sekitar Gunung Bromo yang jarang di explore oleh wisatawan.`,
    `Teluk Cendrawasih, terletak di ujung barat Pulau Papua, adalah sebuah perwakilan keajaiban alam Indonesia yang menakjubkan. Teluk ini dikenal karena kekayaan alam bawah lautnya yang luar biasa dan keindahan lanskapnya yang memukau. Dengan air laut yang tenang, teluk ini menjadi rumah bagi lebih dari 200 spesies ikan, termasuk hiu paus yang menjadi daya tarik utama. Di antara terumbu karang yang mempesona, keindahan alam Teluk Cendrawasih tak terbantahkan, menyuguhkan pengalaman menyelam yang memukau dan membius setiap pengunjung dengan keajaiban alam yang tak tertandingi.`,
    `Pura Tanah Lot, ikon spiritual di Bali, menghadirkan keindahan alam yang menakjubkan dengan penyangga kuil yang menjulang di atas laut. Tempat suci ini, yang dikaitkan dengan dewa-dewa laut dalam kepercayaan Hindu Bali, sering menjadi tujuan wisatawan yang mencari pemandangan matahari terbenam yang dramatis. Disamping fungsi spiritualnya, pura ini juga menawarkan pengalaman budaya dengan upacara keagamaan dan tarian tradisional yang memikat. Keunikan arsitektur dan lokasinya yang spektakuler menjadikan Pura Tanah Lot sebagai tujuan yang tak terlupakan bagi pengunjung yang ingin merasakan spiritualitas dan keindahan alam Bali secara serentak.`,
    `Candi Prambanan, merupakan kompleks kuil Hindu terbesar di Indonesia, menampilkan kemegahan arsitektur dan warisan sejarah yang luar biasa. Terletak di Yogyakarta, candi ini adalah simbol penting dari kebudayaan Jawa kuno. Dibangun pada abad ke-9 Masehi, candi ini menampilkan relief indah serta kompleks struktural yang mengagumkan, terutama candi utama yang didedikasikan untuk Trimurti Hindu: Brahma, Vishnu, dan Shiva. Pengunjung sering kali terpesona oleh keindahan detil arsitektur yang rumit dan ketinggian candi-candi yang menjulang, menciptakan pengalaman spiritual dan sejarah yang tak terlupakan. .`,
    `Tari Kecak, merupakan kompleks kuil Hindu terbesar di Indonesia, menampilkan kemegahan arsitektur dan warisan sejarah yang luar biasa. Terletak di Yogyakarta, candi ini adalah simbol penting dari kebudayaan Jawa kuno. Dibangun pada abad ke-9 Masehi, candi ini menampilkan relief indah serta kompleks struktural yang mengagumkan, terutama candi utama yang didedikasikan untuk Trimurti Hindu: Brahma, Vishnu, dan Shiva. Pengunjung sering kali terpesona oleh keindahan detil arsitektur yang rumit dan ketinggian candi-candi yang menjulang, menciptakan pengalaman spiritual dan sejarah yang tak terlupakan. .`,
  ];
  return (
    <>
      <div className="w-full h-fit relative">
        <div
          className="w-1/5  h-16 absolute  flex flex-row right-0 justify-start pl-5 items-center top-10 rounded-xl bg-premierColor es:flex lg:flex lg:w-1/5 lg:h-16 sm:w-28 sm:h-12 es:w-20 es:h-10 lg:top-10 sm:top-12 es:top-14"
          style={{
            borderBottomRightRadius: "0",
            borderTopRightRadius: "0",
          }}
          onClick={() => setShowOverlayInformation(true)}
        >
          <RiInformationFill color="white" size={30} />{" "}
          <span className="font-regular text-white pl-4  text-sm font-poppins lg:flex es:hidden">
            {""}Ketuk Pada Foto Untuk Melihat Penjelasan{" "}
          </span>
        </div>
        <div className="w-full h-screen flex flex-col">
          <div className="w-full h-auto mb-16 flex flex-col items-center font-poppins">
            <div className="font-semibold text-[40px] md:text-[30px] sm:text-[25px] es:text-[20px] lg:text-[40px]">
              Tarian Daerah
            </div>
            <div className="font-regular text-lg lg:text-lg sm:text-sm es:text-xs es:text-center md:px-0 es:px-4">
              Berikut beberapa tarian daerah yang berasal dari Provinsi Aceh
            </div>
          </div>
          <div className="w-full h-4/5 flex lg:flex-row es:flex-col es:px-12 lg:px-32 ">
            <div className="lg:h-full es:h-1/2 lg:w-3/5 es:w-full es:flex es:flex-row">
              {images.slice(0, 1).map((image, index) => (
                <img
                  key={index}
                  src={image.src}
                  alt={`Gambar ${index + 1}`}
                  className={`lg:w-3/5 es:w-1/2 lg:h-4/5 es:h-full object-cover lg:mr-5 sm:mr-3 es:mr-2 lg:rounded-[30px] es:rounded-2xl cursor-pointer`}
                  onClick={() => handleImageClick(index)}
                />
              ))}
              <div className="flex es:w-1/2  lg:w-2/5 lg:h-4/5 es:h-full flex-col mr-5 ">
                {images.slice(1, 3).map((image, index) => (
                  <img
                    key={index}
                    src={image.src}
                    alt={`Gambar ${index + 2}`}
                    className={`w-full custom-height-${image.customHeight} object-cover lg:rounded-[30px] es:rounded-2xl lg:mb-5 sm:mb-3 es:mb-2 cursor-pointer`}
                    onClick={() => handleImageClick(index + 1)}
                  />
                ))}
               
              </div>
            </div>

            <div className="flex lg:mt-0 es:mt-3 lg:custom-width-40 es:w-full lg:h-4/5 es:h-1/2 flex-col">
              {images.slice(3,5).map((image, index) => (
                <img
                  key={index}
                  src={image.src}
                  alt={`Gambar ${index + 4}`}
                  className={`w-full lg:h-${
                    index === 0 ? "1/2" : `custom-height-45`
                  } es:${
                    index === 0 ? "custom-height-35" : "custom-height-45"
                  } object-cover lg:rounded-[30px] es:rounded-2xl cursor-pointer mt-2 mb-3`}
                  onClick={() => handleImageClick(index + 3)}
                />
              ))}
            </div>
          </div>
        </div>
        {showOverlay && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className=" sm:w-1/2 sm:h-1/2 es:w-3/4 es:h-2/3   bg-basicColor p-12 rounded-2xl shadow-2xl relative z-10 ">
              <span
                onClick={closeOverlay}
                className="absolute top-0 right-0 m-3 cursor-pointer"
              >
                <IoMdCloseCircle size={40} className="hover:text-red-500" />
              </span>
              <div className="font-poppins flex flex-col justify-center items-center">
                <div className="font-semibold lg:text-[45px] sm:text-[30px] es:text-lg">
                  {titles[selectedImageIndex]}
                </div>
                <div className="font-regular text-lg text-justify pt-5 lg:text-sm xl:text-sm 2xl:text-lg sm:text-xs es:text-[10px] es:leading-4 ">
                  {descriptions[selectedImageIndex]}
                </div>
              </div>
            </div>
          </div>
        )}
        {showOverlayInformation && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className=" lg:w-1/5 lg:h-1/4 es:w-1/2 es:h-2/5 bg-basicColor p-12 rounded-2xl shadow-2xl relative z-10 ">
              <span
                onClick={closeOverlay}
                className="absolute top-0 right-0 m-3 cursor-pointer"
              >
                <IoMdCloseCircle size={40} className="hover:text-red-500" />
              </span>
              <div className="font-poppins flex flex-col justify-center items-center">
                <div className="font-semibold text-[25px]">Information Box</div>
                <div className="font-regular text-lg text-justify pt-5 lg:text-sm xl:text-sm 2xl:text-lg">
                  Ketuk Pada Foto Untuk Melihat Penjelasan
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default ComponentTwoDetail;
