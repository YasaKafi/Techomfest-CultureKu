import React, { useState } from "react";
import imageAsset from "../../utils/image";
import { RiInformationFill } from "react-icons/ri";
import { IoMdCloseCircle } from "react-icons/io";

function ComponentSevenDetail() {
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
        <div className="w-full h-screen flex mt-20 flex-col">
          <div className="w-full   flex flex-col items-center font-poppins">
            <div className="font-semibold text-[45px] md:text-[35px] sm:text-[25px] es:text-[20px] lg:text-[40px]">
              Senjata Daerah
            </div>
            <div className="font-regular text-lg lg:text-lg sm:text-sm es:text-xs es:text-center md:px-0 es:px-4">
              Aceh memiliki sejata daerah juga lho, berikut beberapa senjata
              daerahnya
            </div>
          </div>
          <div className="w-full mt-10 h-4/5 flex lg:flex-row es:flex-col lg:px-32 es:px-8 ">
            <img
              src={imageAsset.senjataOne}
              alt=""
              className="lg:custom-width-30 es:w-full lg:h-4/5 es:h-3/5 object-cover mr-5 lg:rounded-[30px] es:rounded-[10px] cursor-pointer"
              onClick={handleImageClick}
            />
            <div className="flex lg:custom-width-70 es:w-full mt-5 h-4/5 flex-col">
              <div className="flex w-full h-3/5 flex-row lg:mr-5 es:mr-0 mb-5 ">
                <img
                  src={imageAsset.senjataTwo}
                  alt=""
                  className="custom-width-30 h-full object-fill lg:rounded-[30px] es:rounded-[10px]  cursor-pointer"
                  onClick={handleImageClick}
                />
                <img
                  src={imageAsset.senjataThree}
                  alt=""
                  className="custom-width-70 h-full object-cover  lg:rounded-[30px] es:rounded-[10px] pl-2 cursor-pointer"
                  onClick={handleImageClick}
                />
              </div>

              <div className="w-full h-2/5 ">
                <img
                  src={imageAsset.senjataFour}
                  alt=""
                  className="w-full h-full object-cover  lg:rounded-[30px] es:rounded-[10px] cursor-pointer"
                  onClick={handleImageClick}
                />
              </div>
            </div>
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
                <div className="font-semibold text-[45px]">Tari Saman</div>
                <div className="font-regular text-lg text-justify pt-5">
                  Tari Saman adalah tarian tradisional Aceh yang berasal dari
                  masyarakat suku Gayo. Uniknya, tarian ini dilakukan secara
                  berkelompok dengan penari duduk bersila dalam formasi yang
                  rapat, sambil melakukan gerakan tangan, kepala, dan tubuh yang
                  sangat dinamis. Tarian ini tidak hanya memperlihatkan
                  keindahan gerakan, tetapi juga melibatkan nyanyian, di mana
                  penari menyanyikan syair-syair yang bersifat religius atau
                  menceritakan kisah-kisah lokal. Tari Saman sering diartikan
                  sebagai simbol kebersamaan, kerjasama, dan semangat
                  gotong-royong dalam budaya Aceh.
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default ComponentSevenDetail;
