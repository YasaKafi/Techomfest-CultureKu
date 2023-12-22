import React from "react";
import imageAsset from "../../utils/image";
import { RiSearchLine } from "react-icons/ri";

function ComponentOnePustaka() {
    return (
      <div className="w-full relative font-poppins text-center">
        <div className="flex items-center justify-center">
          <img src={imageAsset.bgPustaka} alt="Background" className="object-cover w-full h-[700px]" />
        </div>
  
        <div className="absolute lg:top-64 es:top-48 left-1/2 transform -translate-x-1/2 -translate-y-1/5 text-basicColor lg:text-4xl sm:text-3xl es:text-2xl font-bold">
          Jelajahi Warisan Budaya.
        </div>
  
        <div className="absolute lg:w-3/5 es:w-4/5 py-4 top-2/4 left-1/2 transform -translate-x-1/2 p-2 rounded-full bg-basicColor flex items-center mt-5">
          {/* Search Box */}
          <div className="pr-8 flex items-center">
            <img src={imageAsset.icSearch2} alt="" width="20%" className="ml-7 pr-6" />
            <div className="">Cari Budayamu disini...</div>
          </div>
  
          <div className="ml-auto"></div>
  
          <div className="ml-4 lg:flex es:hidden text-basicColor bg-premierColor rounded-full px-8 py-4 font-semibold">
            Temukan Budaya
          </div>
  
          {/* Filter Button */}
          <div className="ml-4 lg:flex es:hidden border border-greyColor rounded-full px-8 py-4 flex font-semibold">
            <div className="text-greyColor">Filter</div>
            <img src={imageAsset.icFilter} alt="" className="ml-4" width="30%" />
          </div>
        </div>
  
        <div className="absolute top-[600px] mb-20 left-1/2 transform -translate-x-1/2  p-2 rounded-3xl bg-white flex lg:flex-row es:flex-col items-center justify-evenly mt-5 lg:w-4/5 es:w-11/12">
          <div className="flex lg:text-2xl es:text-xl lg:my-14 es:my-6">
            <div className="font-bold ">
              Tahukah
            </div>
            <div className="font-bold bg-secondaryColor text-basicColor  py-2 pr-6 pl-2 -mt-2 ml-2">
              Kamu?
            </div>
          </div>
          <div className="">
            <div className="font-semibold text-3xl">
              Sulawesi dan Kalimantan
            </div>
            <div className="font-medium lg:mt-0 es:mt-4 text-base">
              Pulau Sulawesi dan Kalimantan juga memiliki fakta menarik lho
            </div>
          </div>
          <div className="text-basicColor bg-secondaryColor rounded-full lg:px-8 es:px-6 lg:py-5 es:py-3 lg:mt-0 es:mt-4 lg:mb-4 es:mb-4 font-semibold ">
            Cek Yuk!
          </div>
        </div>
      </div>
    );
  }
  

export default ComponentOnePustaka;
