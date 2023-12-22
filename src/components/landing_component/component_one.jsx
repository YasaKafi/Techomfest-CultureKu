import React from "react";
import imageAsset from "../../utils/image";
import CustomButton from "../../global_components/custom_button";

function ComponentOneLanding() {
  return (
    <>
      <div className="  w-full h-screen  lg:pt-32 es:pt-16  ">
        <div className="absolute top-5 left-0  lg:flex es:hidden">
          <img
            src={imageAsset.bgPetaIndonesia}
            alt=""
            style={{ height: "1150px", opacity: "0.5" }}
          />
        </div>
        <div className="absolute lg:w-5/12 lg:h-44 es:w-11/12 md:mb-20   lg:mr-16 es:mr-0 bg-premierColor right-0 lg:bottom-6 sm:bottom-44 es:bottom-[350px] lg:rounded-3xl es:rounded-r-none es:rounded-l-3xl ">
          <div>
            <div className="pr-10 pl-10 pt-6 xl:text-4xl lg:text-3xl md:text-3xl sm:text-3xl es:text-xl font-regular font-poppins text-stone-100 ">
              Penasaran dengan budaya{" "}
              <span className="font-semibold  font-poppins">
                Indonesia?{" "}
              </span>
            </div>
            <div className=" pb-6 pr-10 pl-10 mt-2 md:text-sm es:text-xs font-regular font-poppins text-stone-100">
              Jelajahi CultureKu untuk melihat secara luas budaya - budaya di
              Indonesia.
              <br /> Jelajahi budaya Indonesia dengan sekali klik.
            </div>
          </div>
          <img
            src={imageAsset.Wayang}
            alt="Your Image"
            className="absolute bottom-0 right-0 "
            style={{ width: "150px", height: "auto" }}
          />
        </div>
        <div className="flex lg:flex-row es:flex-col-reverse bg-basicColor lg:px-16 es:pt-10">
          <div className="lg:w-2/5 es:w-full lg:h-screen es:h-3/4 lg:pt-20 es:pt-48 px-12  flex flex-col">
            <div className=" text-gray-900 2xl:text-7xl xl:text-6xl lg:text-5xl md:text-4xl sm:text-4xl es:text-3xl font-bold font-poppins leading-tight">
              Melintasi <br /> Warisan:
            </div>
            <div className="lg:pt-12 es:pt-8 text-base font-poppins font-normal">
              <span className="font-semibold font-poppins">
                Budaya Indonesia:{" "}
              </span>
              keberagaman dalam bahasa, agama, seni, dan kuliner menciptakan
              identitas unik. Gotong royong dan adaptasi modernitas menonjolkan
              keberagaman yang membanggakan.
            </div>
            <div className="lg:mt-40 es:mt-8 lg:pb-0 es:pb-8">
              <div className="w-52 h-12 z-10 relative">
                <div
                  className={`w-52 h-12 absolute bg-darkColor rounded-3xl`}
                />
                <div
                  className={`w-52 h-12 absolute text-basicColor text-base font-medium font-poppins leading-none flex justify-center items-center`}
                >
                  Jelajahi Sekarang
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-3/5 es:w-full lg:h-screen es:h-1/4  flex flex-row gap-5">
            <div className="lg:custom-width-45  lg:h-2/3 es:w-1/2 es:h-1/2  lg:ml-10 es:ml-0 ">
              <img
                src={imageAsset.TariKecak}
                alt=""
                className="h-full w-full object-cover lg:rounded-[30px] es:rounded-l-none es:rounded-r-[30px]"
                
              />
            </div>

            <div
              className="lg:custom-width-225 lg:h-2/3 es:w-1/4  rounded-[30px] "
              style={{
                backgroundImage: `url(${imageAsset.PatungCandi})`,

                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            ></div>

            <div
              className="lg:custom-width-225 lg:h-2/3 es:w-1/4  lg:rounded-[30px] es:rounded-r-none es:rounded-l-[30px] lg:mr-10 es:mr-0"
              style={{
                backgroundImage: `url(${imageAsset.TradisiBali})`,
                
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ComponentOneLanding;
