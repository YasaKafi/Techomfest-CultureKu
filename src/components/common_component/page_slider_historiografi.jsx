import React from "react";
import imageAsset from "../../utils/image";

const PageSlider = ({images, titles, desc} ) => {
    return(
        <>
            <div className="w-full h-full flex justify-center items-center relative ">
                <div
                  className="w-full h-full left-0 top-0 absolute  "
                  style={{
                    backgroundImage: `url(${images})`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                />
                <div className="absolute mb-10 text-stone-100 text-5xl font-bold font-['Poppins'] leading-loose">
                {titles}
                </div>
                <div className=" text-base mt-14  text-basicColor    absolute ">
                  {desc}
                </div>
              </div>
        </>
    );
};

export default PageSlider;