import React, { useState, useEffect } from "react";
import imageAsset from "../../utils/image";
import { RiInformationFill } from "react-icons/ri";
import { IoMdCloseCircle } from "react-icons/io";

function ComponentSevenDetail({namaProvinsi, imageBudayaSatu, imageBudayaDua, imageBudayaTiga, imageBudayaEmpat, namaBudayaSatu, namaBudayaDua, namaBudayaTiga, namaBudayaEmpat, deskripsiBudayaSatu, deskripsiBudayaDua, deskripsiBudayaTiga, deskripsiBudayaEmpat}) {
  const [showOverlaySatu, setShowOverlaySatu] = useState(false);
  const [showOverlayDua, setShowOverlayDua] = useState(false);
  const [showOverlayTiga, setShowOverlayTiga] = useState(false);
  const [showOverlayEmpat, setShowOverlayEmpat] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleImageClickSatu = () => {
    setShowOverlaySatu(true);
  };

  const closeOverlaySatu = () => {
    setShowOverlaySatu(false);
  };

  const handleImageClickDua = () => {
    setShowOverlayDua(true);
  };

  const closeOverlayDua = () => {
    setShowOverlayDua(false);
  };

  const handleImageClickTiga = () => {
    setShowOverlayTiga(true);
  };

  const closeOverlayTiga = () => {
    setShowOverlayTiga(false);
  };

  const handleImageClickEmpat = () => {
    setShowOverlayEmpat(true);
  };

  const closeOverlayEmpat = () => {
    setShowOverlayEmpat(false);
  };

  return (
    <>
      <div className="w-full h-fit relative">
       
        <div className="w-full h-screen pt-10 flex flex-col">
        <div className="w-full   flex flex-col items-center font-poppins">
            <div className="font-semibold text-[45px] md:text-[35px] sm:text-[25px] es:text-[20px] lg:text-[40px]">
              Senjata Daerah
            </div>
            <div className="font-regular text-lg lg:text-lg sm:text-sm es:text-xs es:text-center md:px-0 es:px-4">
              {namaProvinsi} memiliki sejata daerah juga lho, berikut beberapa senjata
              daerahnya
            </div>
          </div>
          <div className={`w-full mt-10 h-4/5 flex lg:flex-row es:flex-col lg:px-32 es:px-8 ${windowWidth < 1030 ? 'pb-56' : ''}`}>
            <img
              src={imageBudayaSatu}
              alt=""
              className="lg:custom-width-30 es:w-full lg:h-4/5 es:h-3/5 object-cover mr-5 lg:rounded-[30px] es:rounded-[10px] cursor-pointer"
              onClick={handleImageClickSatu}
            />
            <div className="flex lg:custom-width-70 es:w-full mt-5 h-4/5 flex-col">
              <div className="flex w-full h-3/5 flex-row lg:mr-5 es:mr-0 mb-5 ">
                <img
                  src={imageBudayaDua}
                  alt=""
                  className="custom-width-30 h-full object-fill lg:rounded-[30px] es:rounded-[10px]  cursor-pointer"
                  onClick={handleImageClickDua}
                />
                <img
                  src={imageBudayaTiga}
                  alt=""
                  className="custom-width-70 h-full object-cover  lg:rounded-[30px] es:rounded-[10px] pl-2 cursor-pointer"
                  onClick={handleImageClickTiga}
                />
              </div>

              <div className="w-full h-2/5 ">
                <img
                  src={imageBudayaEmpat}
                  alt=""
                  className="w-full h-full object-cover  lg:rounded-[30px] es:rounded-[10px] cursor-pointer"
                  onClick={handleImageClickEmpat}
                />
              </div>
            </div>
            
            
          </div>
        </div>
        {showOverlaySatu && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className=" w-1/2 h-1/2 bg-basicColor p-12 rounded-2xl shadow-2xl relative z-10">
            <span onClick={closeOverlaySatu} className="absolute top-0 right-0 m-3 cursor-pointer">
            <IoMdCloseCircle  size={40} className="hover:text-red-500" />
            </span>
            <div className="font-poppins flex flex-col justify-center items-center">
                <div className="font-semibold text-[45px]">
                {namaBudayaSatu}
                </div>
                <div className="font-regular text-lg text-justify pt-5">
                {deskripsiBudayaSatu}
                </div>
            </div>
            {/* Isi konten overlay di sini */}
          </div>
        </div>
      )}
      {showOverlayDua && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className=" w-1/2 h-1/2 bg-basicColor p-12 rounded-2xl shadow-2xl relative z-10">
            <span onClick={closeOverlayDua} className="absolute top-0 right-0 m-3 cursor-pointer">
            <IoMdCloseCircle  size={40} className="hover:text-red-500" />
            </span>
            <div className="font-poppins flex flex-col justify-center items-center">
                <div className="font-semibold text-[45px]">
                {namaBudayaDua}
                </div>
                <div className="font-regular text-lg text-justify pt-5">
                {deskripsiBudayaDua}
                </div>
            </div>
            {/* Isi konten overlay di sini */}
          </div>
        </div>
      )}
      {showOverlayTiga && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className=" w-1/2 h-1/2 bg-basicColor p-12 rounded-2xl shadow-2xl relative z-10">
            <span onClick={closeOverlayTiga} className="absolute top-0 right-0 m-3 cursor-pointer">
            <IoMdCloseCircle  size={40} className="hover:text-red-500" />
            </span>
            <div className="font-poppins flex flex-col justify-center items-center">
                <div className="font-semibold text-[45px]">
                {namaBudayaTiga}
                </div>
                <div className="font-regular text-lg text-justify pt-5">
                {deskripsiBudayaTiga}
                </div>
            </div>
            {/* Isi konten overlay di sini */}
          </div>
        </div>
      )}
      {showOverlayEmpat && (
        <div className="fixed top-0 left-0 w-full bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className=" w-1/2 h-1/2 bg-basicColor p-12 rounded-2xl shadow-2xl relative z-10">
            <span onClick={closeOverlayEmpat} className="absolute top-0 right-0 m-3 cursor-pointer">
            <IoMdCloseCircle  size={40} className="hover:text-red-500" />
            </span>
            <div className="font-poppins flex flex-col justify-center items-center">
                <div className="font-semibold text-[45px]">
                {namaBudayaEmpat}
                </div>
                <div className="font-regular text-lg text-justify pt-5">
                {deskripsiBudayaEmpat}
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
