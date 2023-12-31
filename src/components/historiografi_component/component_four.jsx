import React, { useState } from "react";
import imageAsset from "../../utils/image";
import { RiInformationFill } from "react-icons/ri";
import { IoMdCloseCircle } from "react-icons/io";

function ComponentFourHistoriografi() {
  const [showOverlay, setShowOverlay] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
    setShowOverlay(true);
  };

  const closeOverlay = () => {
    setShowOverlay(false);
  };

  const titles = ["Garuda", "Ahool", "Leak"];

  const images = [
    imageAsset.garuda,
    imageAsset.ahool,
    imageAsset.leak,
  ];

  const descriptions = [
    `Garuda, makhluk mitologi yang megah dan kuat, merupakan lambang keagungan dan kebebasan bagi masyarakat Indonesia. Diambil dari warisan mitologi Hindu, Garuda digambarkan sebagai burung raksasa dengan sayap yang melambangkan kekuatan dan kecepatan yang luar biasa. Legenda menyebutkan bahwa Garuda adalah kendaraan Dewa Wisnu, simbol kebaikan dan perlindungan. Cerita tentang Garuda sering kali menyoroti ketegasannya dalam melawan kejahatan serta kesetiaannya yang tak tergoyahkan terhadap kebenaran. Garuda bukan sekadar makhluk mitologi, tetapi juga menjadi simbol nasional Indonesia, mewakili semangat persatuan, kebebasan, dan keadilan.`,
    `Ahool, mitos makhluk legendaris yang tersebar di berbagai cerita rakyat Jawa Barat, digambarkan sebagai seekor makhluk mirip kelelawar dengan ukuran yang besar dan sayap yang mengesankan. Legenda lokal menyebutkan bahwa Ahool tinggal di gua-gua tersembunyi, sering terlihat di malam hari, dan dikabarkan memiliki suara yang menakutkan serta mematikan. Kehadirannya menjadi cerita seru dalam folklor setempat, namun hingga saat ini belum ada bukti konkret mengenai keberadaannya. Ahool menjadi bagian dari kekayaan mitos Indonesia, menambah warna dalam warisan lisan yang terus diceritakan dari generasi ke generasi.`,
    `Leak, makhluk legendaris dalam mitologi Bali, dikenal sebagai vampir atau penjahat spiritual yang berwujud perempuan tua di siang hari. Mereka diyakini memiliki kemampuan untuk bermetamorfosis menjadi hewan atau objek tertentu. Leak diyakini mencuri darah, daging, atau organ manusia, terutama anak kecil atau bayi, untuk memperpanjang umur atau meningkatkan kekuatan mereka. Cerita-cerita tentang Leak sering kali menimbulkan rasa takut dan menjadi bagian penting dari budaya dan kepercayaan Bali, memperkaya kisah-kisah tradisional yang terus diwariskan.`,
  ];

  return (
    <>
      <div className="w-full h-fit relative ">
        <div className="w-full  flex lg:flex-row es:flex-col lg:pl-32 es:pl-12 pt-20 pr-10 mb-36">
          <div className="lg:custom-width-30   flex flex-col lg:justify-center es:justify-center es:w-full es:items-center es:text-center lg:text-start font-poppins mr-5">
            <div className="font-semibold md:text-[30px] sm:text-[25px] es:text-[20px] lg:text-[40px]">
              Makhluk Mitologi Indonesia
            </div>
            <div className="font-regular lg:text-lg sm:text-sm es:text-xs lg:mt-10 es:mt-8 lg:mb-0 es:mb-12">
              Menurut Kamus Besar Bahasa Indonesia, mitologi adalah ilmu tentang
              bentuk sastra yang mengandung konsepsi dan dongeng suci mengenai
              kehidupan dewa dan makhluk halus dalam suatu kebudayaan.
            </div>
          </div>
          <div className="lg:custom-width-70  flex es:w-full flex-row lg:flex es:grid es:grid-cols-2 es:grid-rows-2 es:gap-6">
            {titles.map((title, index) => (
              <div className={`lg:custom-width-30 es:w-full lg:h-96 sm:h-64 es:h-48  mr-5 relative ${index === 2 ? 'es:col-span-2 es:row-start-2' : ''}`} key={index}>
                <div className="absolute bottom-0 left-0 font-poppins font-semibold text-3xl text-white lg:ml-10 lg:mb-10 sm:ml-5 sm:mb-5 es:ml-5 es:mb-5 sm:text-2xl lg:text-3xl es:text-sm">
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
            <div className=" sm:w-1/2 sm:h-1/2 es:w-3/4 es:h-2/3 bg-basicColor p-12 rounded-2xl shadow-2xl relative z-10">
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
                <div className="font-regular  text-justify pt-5 lg:text-lg xl:text-sm 2xl:text-lg sm:text-xs md:text-sm es:text-[10px] es:leading-4">
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

export default ComponentFourHistoriografi;
