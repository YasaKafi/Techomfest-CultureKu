import React from "react";
import imageAsset from "../../utils/image";

const CardSlider = ({name, asal, desc,images} ) => {
    return(
        <>
            <div className="w-full h-full relative rounded-3xl">
                <div
                  className="w-full h-full left-0 top-0 absolute bg-gradient-to-r from-zinc-800 to-black rounded-3xl"
                  style={{
                    backgroundImage: `url(${images})`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                />
                <div className="w-40 h-10 lg:left-[81px] es:left-5 top-[70px] absolute text-stone-100 lg:text-3xl es:text-xl font-bold font-['Poppins'] leading-loose">
                  {name}
                </div>
                <div className="w-72 h-5 lg:left-[81px] es:left-5 top-[120px] absolute text-stone-100 lg:text-lg es:text-xs font-semibold font-['Poppins'] leading-tight">
                  {asal}
                </div>
                <div className="w-4/5 lg:text-base es:text-[10px]  text-basicColor  lg:custom-top-70 es:top-1/2 mr-24 lg:ml-20 es:ml-5 es:pb-8 lg:pb-0 absolute text-center">
                  {/* <span className="font-semibold text-lg font-poppins">
                    {" "}
                  </span>{" "} */}
                  {desc}
                </div>
              </div>
        </>
    );
};

export default CardSlider;