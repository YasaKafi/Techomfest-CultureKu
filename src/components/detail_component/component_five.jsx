import React from "react";
import imageAsset from "../../utils/image";

function ComponentFiveDetail({namaBudaya, deskripsiBudaya, imageBudaya, imageSide}) {
  return (
    
      <>
      <div className="w-full h-auto flex lg:mt-0 sm:mt-44 es:mt-0 flex-col">
        
        <div className="w-full h-auto  lg:pb-40 es:pb-10 flex lg:flex-row es:flex-col ">
          <div className="lg:w-2/4 es:w-full  flex flex-row">
            <div className="w-1/4 h-[350px]  relative mt-20 ">
              <div
                className="w-full h-[400px] lg:-left-20 es:-left-5 top-0 absolute bg-gradient-to-b from-black to-black rounded-[30px] shadow"
                style={{
                  backgroundImage: `url(${imageSide})`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              />
              <div className="w-full h-60 left-0 bottom-0 mb-12 ml-12 absolute 2xl:text-xl xl:text-xl    -rotate-90 text-stone-100 text-2xl font-semibold font-['Poppins'] leading-relaxed">
              {namaBudaya}
              </div>
            </div>
            <div className="w-3/4 h-[350px] lg:-left-14 es:right-0 z-10 relative mt-20">
              <div
                className="w-full h-[400px] left-0 top-0 absolute bg-gradient-to-b from-black to-black lg:rounded-[30px] es:rounded-l-[30px] es:rounded-r-none shadow"
                style={{
                  backgroundImage: `url(${imageBudaya})`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              />
            </div>
          </div>
          <div className="lg:w-2/4 es:w-full lg:pl-0 es:pl-8 flex flex-col lg:items-start  justify-center">
            <div className="lg:text-[30px] es:text-[25px]  font-poppins mt-24 font-semibold">
              {namaBudaya}
            </div>

            <div className="text-base font-poppins lg:mr-36 es:mr-14 mt-6 font-regular">
              <span className="font-semibold text-base font-poppins ">
                {namaBudaya}{" "}
              </span>{" "}
                {deskripsiBudaya}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ComponentFiveDetail;
