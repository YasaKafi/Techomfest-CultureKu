import React from "react";
import imageAsset from "../../utils/image";

function ComponentOneDetail (){
    return(
        <>
            <div className="  w-full   pt-32  ">
            <div className="absolute top-52 left-0  ">
          <img
            src={imageAsset.bgPetaSumatera}
            alt=""
            style={{ height: "650px", opacity: "0.1" }}
          />
        </div>
        <div className="flex flex-row  pl-16 pr-16">
          <div className="w-2/5 h-[650px]  px-12  flex flex-col justify-center">
            <div className=" text-gray-900 text-7xl font-bold font-poppins leading-tight">
              Provinsi Aceh
            </div>
            <div className="pt-12 text-base font-poppins font-normal">
              <span className="font-semibold font-poppins">
                Aceh,{" "}
              </span>
              provinsi di ujung barat Sumatera, Indonesia, terkenal dengan warisan budaya Islamnya dan keindahan alamnya yang menakjubkan, menjadi destinasi wisata dengan identitas yang kuat.
            </div>
            
          </div>
          <div className="w-3/5 h-screen relative ">
            <div className="custom-width-40  h-1/2 absolute  custom-left-10 top-32 xl:custom-height-45 2xl:h-1/2  lg:custom-height-45">
              <img src={imageAsset.TariKecak}  alt="" className="h-full w-full object-cover rounded-[50px] " />
            </div>

            <div
              className="custom-width-35  custom-height-45 absolute  custom-left-47 top-12  2xl:custom-left-47  xl:left-2/4 lg:custom-left-54 xl:custom-height-45  lg:custom-height-45 "
            >
                <img src={imageAsset.PatungCandi}  alt="" className="h-full w-full object-cover rounded-[80px] " />
            </div>

            <div
              className="custom-width-70  h-2/6  absolute   custom-left-20 top-[400px] 2xl:h-2/6 xl:custom-height-30 lg:custom-height-30 2xl:custom-width-70 xl:custom-width-70 lg:w-4/5 "
            >
                <img src={imageAsset.TradisiBali}  alt="" className=" w-full max-h-full object-cover  rounded-[80px]" />
            </div>
          </div>
        </div>
      </div>
        </>
    );
}

export default ComponentOneDetail;