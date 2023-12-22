import React from "react";
import imageAsset from "../../utils/image";
import GaleriSlider from "../common_component/card_galeri_slider";

function ComponentFivePustaka() {
  return (
    <>
      <div className="w-full h-screen bg-basicColor  flex items-center flex-col">
        <div className="flex flex-row font-poppins font-semibold text-[45px] md:text-[35px] sm:text-[25px] es:text-[20px] lg:text-[40px] ">
          <div className="bg-premierColor text-basicColor mr-2 pt-1 pl-7 pb-1 pr-7">
            Galeri
          </div>
          <div className="text-darkColor pt-2">Budaya</div>
        </div>
        <div className="w-full mt-12">
            <GaleriSlider rtl={true} />
            <GaleriSlider rtl={false} />
            <GaleriSlider rtl={true} />
          </div>
      </div>
    </>
  );
}

export default ComponentFivePustaka;
