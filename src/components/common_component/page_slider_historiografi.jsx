import React from "react";
import imageAsset from "../../utils/image";

const PageSlider = ({images, titles, desc} ) => {
    return(
        <>
            <div className="w-full h-full flex  items-center justify-center relative ">
                <div
                  className="w-full h-full left-0 top-0 absolute  "
                  style={{
                    backgroundImage: `url(${images})`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                />
                <div className="absolute mb-10 text-stone-100 text-5xl font-bold font-['Poppins'] leading-loose 2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl es:text-xl es:text-center">
                {titles}
                </div>
                <div className=" text-base mt-14  text-basicColor  absolute 2xl:text-base xl:text-base lg:text-base md:text-sm sm:text-xs es:text-[10px] text-center es:mt-16 ">
                  {desc}
                </div>
              </div>
        </>
    );
};

export default PageSlider;