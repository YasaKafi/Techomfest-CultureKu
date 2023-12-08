import React from "react";
import imageAsset from "../../utils/image";

function ComponentThreeLanding() {
  return (
    <>
      <div className="w-full h-auto pb-40 flex flex-row ">
        <div className="w-2/4 ml-32 pt-20 flex flex-col">
          <div className="flex flex-row font-poppins font-semibold text-[45px] ">
            <div className="text-darkColor pt-2">Fakta</div>
            <div className="bg-secondaryColor text-basicColor ml-2 pt-2 pl-3 pb-2 pr-16">
              Menarik!
            </div>
          </div>
          <div className="custom-width-75 h-[350px] relative mt-20">
            <div className="w-full h-[350px] left-0 top-0 absolute bg-gradient-to-b from-black to-black rounded-[30px] shadow"
            style={{
                backgroundImage: `url(${imageAsset.bgPapua})`,

                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "auto",
                
              }} />
            <div className="w-56 h-7 left-0 bottom-0 mb-8 ml-16 absolute text-stone-100 text-2xl font-semibold font-['Poppins'] leading-relaxed">
              Papua, Indonesia
            </div>
          </div>
        </div>
        <div className="w-2/4  pt-20 flex flex-col">
              <div className="text-[40px] font-poppins mt-44 font-bold">
              Negara dengan 
              <span className="font-bold text-red-500 text-[40px] font-poppins">
              {" "}Lebih dari 700{" "}
              </span> <br/> Bahasa dan Dialek
              </div>
              
              <div className="text-base font-poppins mr-36 mt-12 font-regular">
              <span className="font-semibold text-base font-poppins ">
                Indonesia{" "}
              </span> di kenal sebagai negara yang memiliki lebih dari 700 bahasa dan dialek yang dipergunakan oleh penduduknya. Bahasa yang sangat beragam ini digunakan di seluruh wilayah di Indonesia dengan satu bahasa resmi nasional yaitu Bahasa Indonesia. Provinsi Papua menjadi satu-satunya wilayah yang memiliki lebih dari 270 bahasa lisan.
              </div>
        </div>
        <div className="absolute right-0 overflow-hidden  ">
          <img
            src={imageAsset.bgPulauPapua}
            alt=""
            className="h-[1050px] w-[1250px] object-cover opacity-5 " 
          />
        </div>
      </div>
    </>
  );
}

export default ComponentThreeLanding;
