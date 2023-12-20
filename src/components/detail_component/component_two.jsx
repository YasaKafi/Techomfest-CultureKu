import React, { useState } from "react";
import imageAsset from "../../utils/image";
import { RiInformationFill } from "react-icons/ri";
import { IoMdCloseCircle } from "react-icons/io";

function ComponentTwoDetail() {
  const [showOverlay, setShowOverlay] = useState(false);

  const handleImageClick = () => {
    setShowOverlay(true);
  };

  const closeOverlay = () => {
    setShowOverlay(false);
  };
  return (
    <>
      <div className="w-full h-fit relative">
        <div
          className="custom-width-30  h-16 absolute flex flex-row right-0 justify-start pl-5 items-center top-10 rounded-xl bg-premierColor"
          style={{
            borderBottomRightRadius: "0",
            borderTopRightRadius: "0",
          }}
        >
          <RiInformationFill color="white" size={30} />{" "}
          <span className="font-regular text-white pl-4  text-lg font-poppins">
            {""}Ketuk Untuk Melihat Penjelasan{" "}
          </span>
        </div>
        <div className="w-full h-screen flex flex-col">
          <div className="w-full h-1/5  flex flex-col items-center font-poppins">
            <div className="font-semibold text-[45px]">Tarian Daerah</div>
            <div className="font-regular text-lg">
              Berikut beberapa tarian daerah yang berasal dari Provinsi Aceh
            </div>
          </div>
          <div className="w-full h-4/5 flex flex-row px-32 ">
            <img
              src={imageAsset.TariPiring}
              alt=""
              className="custom-width-30 h-4/5 object-fill mr-5 rounded-[30px] cursor-pointer"
              onClick={handleImageClick}
            />
            <div className="flex custom-width-30 h-4/5 flex-col mr-5 ">
              <img
                src={imageAsset.TariPiring}
                alt=""
                className="w-full custom-height-45 object-fill rounded-[30px] mb-5 cursor-pointer"
                onClick={handleImageClick}
              />
              <img
                src={imageAsset.TariPiring}
                alt=""
                className="w-full custom-height-55 object-fill  rounded-[30px] cursor-pointer"
                onClick={handleImageClick}
              />
            </div>
            <div className="flex custom-width-40 h-4/5 flex-col">
              <img
                src={imageAsset.TariPiring}
                alt=""
                className="w-full h-1/2 object-fill mb-5 rounded-[30px] cursor-pointer"
                onClick={handleImageClick}
              />
              <img
                src={imageAsset.TariPiring}
                alt=""
                className="w-full custom-height-45 object-fill  rounded-[30px] cursor-pointer"
                onClick={handleImageClick}
              />
            </div>
          </div>
        </div>
        {showOverlay && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className=" w-1/2 h-1/2 bg-basicColor p-12 rounded-2xl shadow-2xl relative z-10">
            <span onClick={closeOverlay} className="absolute top-0 right-0 m-3 cursor-pointer">
            <IoMdCloseCircle  size={40} className="hover:text-red-500" />
            </span>
            <div className="font-poppins flex flex-col justify-center items-center">
                <div className="font-semibold text-[45px]">
                Tari Saman
                </div>
                <div className="font-regular text-lg text-justify pt-5">
                Tari Saman adalah tarian tradisional Aceh yang berasal dari masyarakat suku Gayo. Uniknya, tarian ini dilakukan secara berkelompok dengan penari duduk bersila dalam formasi yang rapat, sambil melakukan gerakan tangan, kepala, dan tubuh yang sangat dinamis. Tarian ini tidak hanya memperlihatkan keindahan gerakan, tetapi juga melibatkan nyanyian, di mana penari menyanyikan syair-syair yang bersifat religius atau menceritakan kisah-kisah lokal. Tari Saman sering diartikan sebagai simbol kebersamaan, kerjasama, dan semangat gotong-royong dalam budaya Aceh.
                </div>
            </div>
            {/* Isi konten overlay di sini */}
          </div>
        </div>
      )}
      </div>
      
    </>
  );
}

export default ComponentTwoDetail;
