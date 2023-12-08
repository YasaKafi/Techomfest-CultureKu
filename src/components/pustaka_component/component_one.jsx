import React from "react";
import imageAsset from "../../utils/image";
import { RiSearchLine } from "react-icons/ri";

function ComponentOnePustaka() {
    return (
      <div className="w-full relative font-poppins text-center">
        <div className="flex items-center justify-center">
          <img src={imageAsset.bgPustaka} alt="Background" className="object-cover w-full h-[700px]" />
        </div>
  
        <div className="absolute top-64 left-1/2 transform -translate-x-1/2 -translate-y-1/5 text-basicColor text-4xl font-bold">
          Jelajahi Warisan Budaya.
        </div>
  
        <div className="absolute w-3/5 top-2/4 left-1/2 transform -translate-x-1/2 p-2 rounded-full bg-basicColor flex items-center mt-5">
          {/* Search Box */}
          <div className="pr-8 flex items-center">
            <img src={imageAsset.icSearch2} alt="" width="20%" className="ml-7 pr-6" />
            <div className="">Cari Budayamu disini...</div>
          </div>
  
          <div className="ml-auto"></div>
  
          <div className="ml-4 text-basicColor bg-premierColor rounded-full px-8 py-4 font-semibold">
            Temukan Budaya
          </div>
  
          {/* Filter Button */}
          <div className="ml-4 border border-greyColor rounded-full px-8 py-4 flex font-semibold">
            <div className="text-greyColor">Filter</div>
            <img src={imageAsset.icFilter} alt="" className="ml-4" width="30%" />
          </div>
        </div>
  
        <div className="absolute top-[600px]  left-1/2 transform -translate-x-1/2  p-2 rounded-3xl bg-white flex flex-row items-center justify-evenly mt-5 w-4/5">
          <div className="flex my-14">
            <div className="font-bold text-2xl">
              Tahukah
            </div>
            <div className="font-bold bg-secondaryColor text-basicColor text-2xl py-2 pr-6 pl-2 -mt-2 ml-2">
              Kamu?
            </div>
          </div>
          <div className="">
            <div className="font-bold text-3xl">
              Sulawesi dan Kalimantan
            </div>
            <div className="font-medium text-base">
              Pulau Sulawesi dan Kalimantan juga memiliki fakta menarik lho
            </div>
          </div>
          <div className="text-basicColor bg-secondaryColor rounded-full px-8 py-5 font-semibold ">
            Cek Yuk!
          </div>
        </div>
      </div>
    );
  }
  

export default ComponentOnePustaka;
