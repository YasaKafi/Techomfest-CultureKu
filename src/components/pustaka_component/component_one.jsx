import React from "react";
import imageAsset from "../../utils/image";

function ComponentOnePustaka() {
  return (
    <div className="relative font-poppins text-center">
        <div className="flex items-center justify-center">
            <img src={imageAsset.bgPustaka} alt="Background" className="object-cover w-full h-heigh" />
        </div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/5 text-basicColor text-4xl font-bold">
            Jelajahi Warisan Budaya.
        </div>

        <div className="absolute top-2/3 transform translate-x-1/2 -translate-y-1/2 p-2 rounded-full bg-basicColor flex items-center mt-5">
            {/* Search Box */}
            <div className="pr-8 flex items-center">
            <img src={imageAsset.icSearch2} alt="" width="20%" className="ml-7 pr-6" />
            <div className="">Cari Budayamu disini...</div>
            </div>
            
            <div className="ml-284"></div>

            <div className="ml-4 text-basicColor bg-premierColor rounded-full px-8 py-4 font-semibold">
            Temukan Budaya
            </div>

            {/* Filter Button */}
            <div className="ml-4 border border-greyColor rounded-full px-8 py-4 flex font-semibold">
            <div className="text-greyColor">Filter</div>
            <img src={imageAsset.icFilter} alt="" className="ml-4" width="30%" />
            </div>
        </div>

        <div className="absolute top-2/3 translate-y-1/2 p-2 rounded-lg bg-white flex items-center mt-5">
            <div className="flex my-14 mr-32 ml-24">
                <div className="font-bold text-2xl">
                    Tahukah
                </div>
                <div className="font-bold bg-secondaryColor text-basicColor text-2xl py-2 pr-6 pl-2 -mt-2 ml-2">
                    Kamu?
                </div>
            </div>
            <div>
                <div className="font-bold text-3xl">
                    Sulawesi dan Kalimantan
                </div>
                <div className="font-medium text-base">
                    Pulau Sulawesi dan Kalimantan juga memiliki fakta menarik lho
                </div>
            </div>
            <div className="text-basicColor bg-secondaryColor rounded-full px-8 py-5 font-semibold ml-56 mr-32">
                Cek Yuk!
            </div>
        </div>
    </div>
  );
}

export default ComponentOnePustaka;
