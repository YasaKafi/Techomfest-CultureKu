import React, { useState } from "react";
import imageAsset from "../../utils/image";

function ComponentTwoHistoriografi() {
  return (
    <>
      <div className="w-full h-screen flex flex-row 2xl:flex-row xl:flex-row lg:flex-row  es:flex-col  relative">
        <div className=" flex items-center justify-center absolute top-0 w-full font-poppins mt-16 font-semibold text-2xl lg:hidden es:flex" >
          <div className="text-darkColor pt-2">Tahukah</div>
          <div className="bg-secondaryColor text-basicColor ml-2 pt-2 pl-3 pb-2 pr-4">
            Kamu?
          </div>
        </div>
        <div className="w-1/2 h-full pl-20 mr-20 relative flex items-center justify-center lg:h-full lg:w-1/2 lg:pl-20 es:pl-0 lg:mr-20 es:w-full md:w-full md:h-1/2 es:mt-36 lg:mt-0 ">
          <div className="w-72 h-[450px] xl:w-72 xl:h-[450px] lg:w-72 lg:h-[450px] md:w-60 md:h-[350px] sm:w-44 sm:h-[250px] es:w-36 es:h-[200px]">
            <img
              src={imageAsset.borobudurOne}
              alt=""
              className=" w-full h-full object-fill rounded-[40px]"
              style={{
                borderBottomLeftRadius: "0",
                borderTopRightRadius: "0",
              }}
            />
          </div>
          <div className="flex flex-col ml-5">
            <div className="w-72 h-72  mb-5  lg:w-72 lg:h-72 md:w-52 md:h-52 sm:w-40 sm:h-40 es:w-32 es:h-32">
              <img
                src={imageAsset.borobudurTwo}
                alt=""
                className=" w-full h-full object-fill rounded-[40px]"
                style={{
                  borderBottomLeftRadius: "0",
                  borderTopRightRadius: "0",
                }}
              />
            </div>
            <div className="w-72 h-72 lg:w-72 lg:h-72 md:w-52 md:h-52 sm:w-40 sm:h-40 es:w-32 es:h-32">
              <img
                src={imageAsset.borobudurThree}
                alt=""
                className=" w-full h-full object-fill rounded-[40px]"
                style={{
                  borderBottomRightRadius: "0",
                  borderTopLeftRadius: "0",
                }}
              />
            </div>
          </div>
        </div>
        <div className="w-1/2 h-full flex flex-col lg:w-1/2 lg:h-full es:w-full es:justify-center lg:items-start  es:items-center">
          <div className="flex flex-row font-poppins font-semibold text-2xl mt-36 mb-12 2xl:text-2xl xl:text-2xl lg:text-xl es:mt-12 es:hidden lg:flex ">
            <div className="text-darkColor pt-2">Tahukah</div>
            <div className="bg-secondaryColor text-basicColor ml-2 pt-2 pl-3 pb-2 pr-4">
              Kamu?
            </div>
          </div>
          <div className="text-[40px] font-poppins  font-bold 2xl:text-[40px] xl:text-[40px] lg:text-3xl md:text-2xl sm:text-xl es:text-lg md:text-justify">
            <span className="font-bold text-red-500  font-poppins">
              {" "}
              Candi Borobudur{" "}
            </span>{" "}
            Magelang,
            <br /> Jawa Tengah
          </div>

          <div className="text-base font-poppins mr-36 mt-6 font-regular 2xl:text-base xl:text-base lg:text-base md:text-xs sm:text-sm es:text-xs es:text-justify lg:text-start lg:mr-36 lg:ml-0 sm:mx-20 es:mx-10 sm:text-center">
            <span className="font-semibold  font-poppins ">
              Borobudur{" "}
            </span>{" "}
            diakui sebagai Situs Warisan Dunia UNESCO, dan setiap tahun menjadi
            pusat ziarah bagi umat Buddha selama Festival Waisak. Meskipun
            pernah tertutup oleh abu vulkanik, candi ini "ditemukan kembali"
            pada tahun 1814 oleh Sir Thomas Stamford Raffles. Borobudur
            menghadapi tantangan dari aktivitas gunung berapi, namun telah
            menjalani proyek restorasi besar-besaran untuk mempertahankan
            keasliannya sebagai salah satu keajaiban arsitektur Buddha yang
            paling mengesankan di dunia.
          </div>
        </div>
      </div>
    </>
  );
}
export default ComponentTwoHistoriografi;
