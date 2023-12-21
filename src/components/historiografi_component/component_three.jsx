import React, { useState } from "react";
import imageAsset from "../../utils/image";
import { RiInformationFill } from "react-icons/ri";
import { IoMdCloseCircle } from "react-icons/io";

function ComponentThreeHistoriografi() {
  const [showOverlay, setShowOverlay] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
    setShowOverlay(true);
  };

  const closeOverlay = () => {
    setShowOverlay(false);
  };

  const titles = [
    "Gunung Bromo",
    "Teluk Cendrawasih",
    "Pura Tanah Lot",
    "Candi Prambanan",
  ];

  const images = [
    imageAsset.gunungBromo,
    imageAsset.telukCendrawasih,
    imageAsset.puraTanahLot,
    imageAsset.candiPrambanan,
  ];

  const descriptions = [
    `Wisata Gunung Bromo adalah salah satu tempat wisata di indonesia yang menjadi favorit bagi wisatawan baik dalam negeri maupun luar negeri. Gunung Bromo terletak di Kabupaten Probolinggo. Gunung Bromo memiliki ketinggian sekitar 2392 mdpl. Memiliki kawah yang menjadi objek utama yang sering dikunjungi oleh wisatawan asing maupun lokal. Untuk sampai di bibir kawah, para wisatawan harus menaiki tangga yang cukup panjang. Gunung Bromo juga di kenal dengan sunrise dan sunsetnya. Tidak hanya pemandangan matahari terbit saja yang menjadi daya tarik utama Gunung Bromo, namun ada banyak sekali tempat wisata di sekitar Gunung Bromo yang jarang di explore oleh wisatawan.`,
    `Teluk Cendrawasih, terletak di ujung barat Pulau Papua, adalah sebuah perwakilan keajaiban alam Indonesia yang menakjubkan. Teluk ini dikenal karena kekayaan alam bawah lautnya yang luar biasa dan keindahan lanskapnya yang memukau. Dengan air laut yang tenang, teluk ini menjadi rumah bagi lebih dari 200 spesies ikan, termasuk hiu paus yang menjadi daya tarik utama. Di antara terumbu karang yang mempesona, keindahan alam Teluk Cendrawasih tak terbantahkan, menyuguhkan pengalaman menyelam yang memukau dan membius setiap pengunjung dengan keajaiban alam yang tak tertandingi.`,
    `Pura Tanah Lot, ikon spiritual di Bali, menghadirkan keindahan alam yang menakjubkan dengan penyangga kuil yang menjulang di atas laut. Tempat suci ini, yang dikaitkan dengan dewa-dewa laut dalam kepercayaan Hindu Bali, sering menjadi tujuan wisatawan yang mencari pemandangan matahari terbenam yang dramatis. Disamping fungsi spiritualnya, pura ini juga menawarkan pengalaman budaya dengan upacara keagamaan dan tarian tradisional yang memikat. Keunikan arsitektur dan lokasinya yang spektakuler menjadikan Pura Tanah Lot sebagai tujuan yang tak terlupakan bagi pengunjung yang ingin merasakan spiritualitas dan keindahan alam Bali secara serentak.`,
    `Candi Prambanan, merupakan kompleks kuil Hindu terbesar di Indonesia, menampilkan kemegahan arsitektur dan warisan sejarah yang luar biasa. Terletak di Yogyakarta, candi ini adalah simbol penting dari kebudayaan Jawa kuno. Dibangun pada abad ke-9 Masehi, candi ini menampilkan relief indah serta kompleks struktural yang mengagumkan, terutama candi utama yang didedikasikan untuk Trimurti Hindu: Brahma, Vishnu, dan Shiva. Pengunjung sering kali terpesona oleh keindahan detil arsitektur yang rumit dan ketinggian candi-candi yang menjulang, menciptakan pengalaman spiritual dan sejarah yang tak terlupakan. Candi Prambanan, dengan keanggunan dan kompleksitasnya, tetap menjadi salah satu tujuan wisata budaya terkemuka di Indonesia.`,
  ];

  return (
    <>
      <div className="w-full h-fit relative">
        <div
          className="w-1/4  h-16 absolute flex flex-row right-0 justify-start pl-5 items-center top-10 rounded-xl bg-premierColor"
          style={{
            borderBottomRightRadius: "0",
            borderTopRightRadius: "0",
          }}
        >
          <RiInformationFill color="white" size={30} />{" "}
          <span className="font-regular text-white pl-4  text-sm font-poppins">
            {""}Ketuk Pada Foto Untuk Melihat Penjelasan{" "}
          </span>
        </div>
        <div className="w-full h-screen flex flex-col">
          <div className="w-full h-1/5  flex flex-col items-center font-poppins">
            <div className="font-semibold text-[40px]">Keindahan Indonesia</div>
            <div className="font-regular text-lg">
              Indonesia memiliki keindahan dari alam ataupun bangunan
              prasejarahnya
            </div>
          </div>
          <div className="w-full h-4/5 flex flex-row px-32" >
            {titles.map((title, index) => (
              <div className="w-1/4 custom-height-70 mr-5 relative" key={index}>
                <div className="absolute bottom-0 left-0 font-poppins font-semibold text-3xl text-white ml-10 mb-16">
                  {title}
                </div>
                <img
                  src={images[index]}
                  alt=""
                  className="w-full h-full object-cover rounded-[30px] cursor-pointer"
                  onClick={() => handleImageClick(index)}
                />
              </div>
            ))}
          </div>
        </div>
        {showOverlay && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className=" w-1/2 h-1/2 bg-basicColor p-12 rounded-2xl shadow-2xl relative z-10">
              <span
                onClick={closeOverlay}
                className="absolute top-0 right-0 m-3 cursor-pointer"
              >
                <IoMdCloseCircle size={40} className="hover:text-red-500" />
              </span>
              <div className="font-poppins flex flex-col justify-center items-center">
                <div className="font-semibold text-[45px]">{titles[selectedImageIndex]}</div>
                <div className="font-regular text-lg text-justify pt-5 lg:text-sm xl:text-sm 2xl:text-lg">
                  {descriptions[selectedImageIndex]}
                </div>
              </div>
              
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default ComponentThreeHistoriografi;
