import React from "react";
import imageAsset from "../../utils/image";

function ComponentOneLanding() {
  return (
    <>
      <div className="w-full h-screen  pt-40  ">
        <div className="absolute top-0 left-0  ">
          <img src={imageAsset.bgPetaIndonesia} alt="" />
        </div>
        <div className="absolute w-1/2 h-44 mr-16 bg-premierColor right-0 bottom-6 rounded-3xl ">
          <div>
            <div className="pr-10 pl-10 pt-6 text-3xl font-regular font-poppins text-stone-100 ">
              Penasaran dengan budaya <br />{" "}
              <span className="font-semibold text-3xl font-poppins">
                Indonesia?{" "}
              </span>
            </div>
            <div className=" pb-6 pr-10 pl-10 mt-2 text-sm font-regular font-poppins text-stone-100">
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
        <div className="flex flex-row pl-16 pr-16">
          <div className="w-2/5 h-screen pt-20 px-12  flex flex-col">
            <div className=" text-gray-900 text-5xl font-bold font-poppins leading-tight">
              Melintasi Warisan:
            </div>
            <div className="pt-8 text-base font-poppins font-normal">
              <span className="font-semibold font-poppins">
                Budaya Indonesia:{" "}
              </span>
              keberagaman dalam bahasa, agama, seni, dan kuliner menciptakan
              identitas unik. Gotong royong dan adaptasi modernitas menonjolkan
              keberagaman yang membanggakan.
            </div>

            <div className="w-52 h-12 relative mt-32 ">
              <div className="w-52 h-12  absolute bg-gray-900 rounded-3xl" />
              <div className="w-52 h-12  absolute text-stone-100 text-base font-medium font-poppins leading-none flex justify-center items-center">
                Jelajahi Sekarang
              </div>
            </div>
          </div>
          <div className="w-3/5 h-screen  flex flex-row gap-5">
            <div
              className="w-3/6 h-2/3 rounded-3xl "
              style={{
                backgroundImage: `url(${imageAsset.TariKecak})`,

                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>

            <div
              className="w-1/5 h-2/3 rounded-3xl "
              style={{
                backgroundImage: `url(${imageAsset.PatungCandi})`,

                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>

            <div
              className="w-1/5 h-2/3 rounded-3xl "
              style={{
                backgroundImage: `url(${imageAsset.TradisiBali})`,

                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ComponentOneLanding;
