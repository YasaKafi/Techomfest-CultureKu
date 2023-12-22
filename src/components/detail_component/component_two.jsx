import React, { useState } from "react";
import imageAsset from "../../utils/image";
import { RiInformationFill } from "react-icons/ri";
import { IoMdCloseCircle } from "react-icons/io";

function ComponentTwoDetail({namaProvinsi, imageBudayaSatu, imageBudayaDua, imageBudayaTiga, imageBudayaEmpat, imageBudayaLima, namaBudayaSatu, namaBudayaDua, namaBudayaTiga, namaBudayaEmpat, namaBudayaLima, deskripsiBudayaSatu, deskripsiBudayaDua, deskripsiBudayaTiga, deskripsiBudayaEmpat, deskripsiBudayaLima}) {
  const [showOverlaySatu, setShowOverlaySatu] = useState(false);
  const [showOverlayDua, setShowOverlayDua] = useState(false);
  const [showOverlayTiga, setShowOverlayTiga] = useState(false);
  const [showOverlayEmpat, setShowOverlayEmpat] = useState(false);
  const [showOverlayLima, setShowOverlayLima] = useState(false);

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

  const handleImageClickLima = () => {
    setShowOverlayLima(true);
  };

  const closeOverlayLima = () => {
    setShowOverlayLima(false);
  };

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
          <div className="w-full h-1/5  flex flex-col items-center font-poppins">
            <div className="font-semibold text-[45px]">Tarian Daerah</div>
            <div className="font-regular text-lg">
              Berikut beberapa tarian daerah yang berasal dari Provinsi { namaProvinsi }
            </div>
          </div>
          <div className="w-full h-4/5 flex flex-row px-32 ">
            <img
              src={imageBudayaSatu}
              alt=""
              className="custom-width-30 h-4/5 object-fill mr-5 rounded-[30px] cursor-pointer"
              onClick={handleImageClickSatu}
            />
            <div className="flex custom-width-30 h-4/5 flex-col mr-5 ">
              <img
                src={imageBudayaDua}
                alt=""
                className="w-full custom-height-45 object-fill rounded-[30px] mb-5 cursor-pointer"
                onClick={handleImageClickDua}
              />
              <img
                src={imageBudayaTiga}
                alt=""
                className="w-full custom-height-55 object-fill  rounded-[30px] cursor-pointer"
                onClick={handleImageClickTiga}
              />
            </div>
            <div className="flex custom-width-40 h-4/5 flex-col">
              <img
                src={imageBudayaEmpat}
                alt=""
                className="w-full h-1/2 object-fill mb-5 rounded-[30px] cursor-pointer"
                onClick={handleImageClickEmpat}
              />
              <img
                src={imageBudayaLima}
                alt=""
                className="w-full custom-height-45 object-fill  rounded-[30px] cursor-pointer"
                onClick={handleImageClickLima}
              />
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
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
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
            {/* Isi konten overlay di sini */}
          </div>
        </div>
      )}{showOverlayLima && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className=" w-1/2 h-1/2 bg-basicColor p-12 rounded-2xl shadow-2xl relative z-10">
            <span onClick={closeOverlayLima} className="absolute top-0 right-0 m-3 cursor-pointer">
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
