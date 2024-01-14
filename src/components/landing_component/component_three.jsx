import React from "react";
import imageAsset from "../../utils/image";

function ComponentThreeLanding() {
  return (
    <>
      <div className="w-full h-auto pb-40 flex lg:flex-row es:flex-col ">
        <div className="lg:w-2/4 es:w-auto lg:ml-32 es:pl-8 pt-20 flex flex-col">
          <div className="flex flex-row font-poppins font-semibold lg:text-[45px] md:text-[35px] es:text-[25px] ">
            <div className="text-darkColor pt-2">Fakta</div>
            <div className="bg-secondaryColor text-basicColor ml-2 pt-2 pl-3 pb-2 pr-16">
              Menarik!
            </div>
          </div>
          <div className="lg:w-3/4 es:w-11/12 h-[350px] relative mt-20 hover:scale-105 transition-transform duration-300 ">
            <div className="w-full h-[350px] left-0 top-0 absolute bg-gradient-to-b from-black to-black rounded-[30px] shadow "
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
        <div className="lg:w-2/4 es:w-11/12 lg:pt-20 es:pt-10 flex flex-col lg:justify-normal es:justify-center lg:items-start es:items-center">
              <div className="lg:text-[40px] md:text-[30px] es:text-[20px] font-poppins lg:mt-44 es:mt-0 font-bold es:pl-12 lg:pl-0">
              Negara dengan 
              <span className="font-bold text-red-500 font-poppins">
              {" "}Lebih dari 700{" "}
              </span> <br/> Bahasa dan Dialek
              </div>
              
              <div className="lg:text-base sm:text-xs es:text-xs font-poppins lg:mr-36 es:mr-0 mt-12 font-regular es:pl-12 lg:pl-0 ">
              <span className="font-semibold text-base font-poppins ">
                Indonesia{" "}
              </span> di kenal sebagai negara yang memiliki lebih dari 700 bahasa dan dialek yang dipergunakan oleh penduduknya. Bahasa yang sangat beragam ini digunakan di seluruh wilayah di Indonesia dengan satu bahasa resmi nasional yaitu Bahasa Indonesia. Provinsi Papua menjadi satu-satunya wilayah yang memiliki lebih dari 270 bahasa lisan.
              </div>
        </div>
        <div className="absolute right-0 overflow-hidden lg:flex es:hidden  ">
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
