import React from "react";
import imageAsset from "../../utils/image";

function ComponentSixDetail({namaBudaya, deskripsiBudaya, imageBudaya, imageSide}) {
  return (
    <>
      <div className="w-full h-screen flex flex-col relative">
        
        <div className="absolute es:left-8 lg:left-auto lg: top-32 right-[550px] lg:w-1/5 es:w-2/5  lg:h-3/5 sm:h-2/5 es:custom-height-30 2xl:right-[550px] xl:right-[450px] lg:right-[350px] ">
          <img
            src={imageBudaya}
            alt=""
            className="w-full h-full object-cover rounded-[30px]"
            style={{
              borderBottomLeftRadius: "0",
              borderBottomRightRadius: "0",
            }}
          />
        </div>
        <div className="absolute es:top-32 es:right-8 lg:top-64 right-28 lg:w-1/5 es:w-2/5 lg:h-3/5 es:custom-height-30 sm:h-2/5 lg:right-20">
          <img
            src={imageSide}
            alt=""
            className="w-full h-full object-cover rounded-[30px]"
            style={{
              borderBottomLeftRadius: "0",
              borderBottomRightRadius: "0",
            }}
          />
        </div>

        <div className="w-full h-1/5  flex flex-col items-center font-poppins">
          <div className="font-semibold text-[45px] md:text-[35px] sm:text-[25px] es:text-[20px] lg:text-[40px]">Adat Istiadat</div>
          <div className="font-regular text-lg lg:text-lg sm:text-sm es:text-xs">
            Salah satu adat yang masih dilakukan adalah upacara
          </div>
        </div>
        <div className="w-full h-4/5 bg-premierColor lg:pt-0 es:pt-52 lg:pl-24 es:pl-8 bg-opacity-10 ">
          <div className="lg:w-1/2 es:w-full h-3/5   bg-opacity-10 flex flex-col justify-center mt-24">
            <div className="text-[40px] md:text-[35px] sm:text-[25px] es:text-[20px] lg:text-[35px] font-poppins  font-bold">
              Upacara
              <span className="font-bold text-orange-500  font-poppins">
                {" "}
                {namaBudaya}{" "}
              </span>{" "}
            </div>

            <div className="text-base font-poppins mr-36 mt-6 font-regular">
              <span className="font-semibold text-base font-poppins ">
                Upacara {namaBudaya}{" "}
              </span>{" "}
              {deskripsiBudaya}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ComponentSixDetail;
