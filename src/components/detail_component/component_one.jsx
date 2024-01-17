import React from "react";
import imageAsset from "../../utils/image";

function ComponentOneDetail ({namaProvinsi,deskripsiProvinsi,imageHeroOne,imageHeroTwo,imageHeroThree}){
    return(
        <>
            <div className=" w-full pt-32  ">
            <div className="absolute top-52 left-0 lg:flex es:hidden ">
          <img
            src={imageAsset.bgPetaSumatera}
            alt=""
            style={{ height: "650px", opacity: "0.1" }}
          />
        </div>
        <div className="flex lg:flex-row es:flex-col lg:px-16 md:px-0">
          <div className="w-full lg:h-[650px] es:h-auto px-12  flex flex-col justify-center">
            <div className=" text-gray-900 2xl:text-7xl xl:text-6xl lg:text-5xl md:text-4xl sm:text-4xl es:text-3xl font-bold font-poppins leading-tight">
              {namaProvinsi}
            </div>
            <div className="pt-12 text-base font-poppins font-normal">
              {/* <span className="font-semibold font-poppins">
                Aceh,{" "}
              </span> */}
              {deskripsiProvinsi}
            </div>
            
          </div>
          <div className="w-full h-[90vh] relative ">
            <div className="lg:custom-width-40 es:custom-width-45 es:left-0 lg:h-1/2 es:h-2/5 es:custom-width-60 absolute  lg:custom-left-10 top-32 xl:custom-height-45 2xl:h-1/2  lg:custom-height-45">
              <img src={imageHeroOne}  alt="" className="h-full w-full object-cover es:rounded-r-[30px] es:rounded-l-none  lg:rounded-[30px]" />
            </div>

            <div
              className="lg:custom-width-35 es:w-1/2 lg:custom-height-45 es:h-3/5 absolute sm:left-3/5 es:custom-left-48 lg:custom-left-53 top-12  2xl:custom-left-53   lg:custom-left-53 xl:custom-height-45  lg:custom-height-45 "
            >
                <img src={imageHeroTwo}  alt="" className="h-full w-full object-cover rounded-[30px] " />
            </div>

            <div
              className="lg:custom-width-70 es:w-11/12 lg:h-2/6 md:h-2/5 sm:h-1/4 es:h-1/4 absolute es:right-0  lg:custom-left-20 top-[450px] 2xl:h-2/6 xl:custom-height-30 lg:custom-height-30 2xl:custom-width-70 xl:custom-width-70 lg:w-4/5 "
            >
                <img src={imageHeroThree}  alt="" className=" w-full max-h-full object-cover  es:rounded-l-[30px] es:rounded-r-none  lg:rounded-[30px]" />
            </div>
          </div>
        </div>
      </div>
        </>
    );
}

export default ComponentOneDetail;