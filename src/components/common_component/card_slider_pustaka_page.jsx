import React from "react";
import imageAsset from "../../utils/image";

const CardSlider = ( ) => {
    return(
        <>
            <div className="w-full h-full relative rounded-3xl">
                <div
                  className="w-full h-full left-0 top-0 absolute bg-gradient-to-r from-zinc-800 to-black rounded-3xl"
                  style={{
                    backgroundImage: `url(${imageAsset.TariPiring})`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                />
                <div className="w-40 h-10 left-[81px] top-[70px] absolute text-stone-100 text-3xl font-bold font-['Poppins'] leading-loose">
                  Tari Piring
                </div>
                <div className="w-72 h-5 left-[81px] top-[120px] absolute text-stone-100 text-lg font-semibold font-['Poppins'] leading-tight">
                  Minangkabau, Sumatera Barat
                </div>
                <div className="w-4/5 text-base  text-basicColor  custom-top-70 mr-24 ml-20  absolute text-center">
                  <span className="font-semibold text-lg font-poppins">
                    Tari Piring{" "}
                  </span>{" "}
                  adalah tarian tradisional Indonesia yang berasal dari
                  Minangkabau, Sumatera Barat. Dalam tarian ini, penari
                  membawakan piring-piring yang ditempatkan di atas telapak
                  tangannya dengan berbagai gerakan dinamis.
                </div>
              </div>
        </>
    );
};

export default CardSlider;