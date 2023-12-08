import React from "react";
import imageAsset from "../../utils/image";
import CustomButton from "../../global_components/custom_button";

function ComponentOneLanding() {
  return (
    <>
      <div className="  w-full h-screen  pt-32  ">
        <div className="absolute top-0 left-0  ">
          <img
            src={imageAsset.bgPetaIndonesia}
            alt=""
            style={{ height: "1150px", opacity: "0.5" }}
          />
        </div>
        <div className="absolute w-5/12 h-44 mb-20 mr-16 bg-premierColor right-0 bottom-6 rounded-3xl ">
          <div>
            <div className="pr-10 pl-10 pt-6 text-4xl font-regular font-poppins text-stone-100 ">
              Penasaran dengan budaya <br />{" "}
              <span className="font-semibold text-4xl font-poppins">
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
            <div className=" text-gray-900 text-7xl font-bold font-poppins leading-tight">
              Melintasi <br /> Warisan:
            </div>
            <div className="pt-12 text-base font-poppins font-normal">
              <span className="font-semibold font-poppins">
                Budaya Indonesia:{" "}
              </span>
              keberagaman dalam bahasa, agama, seni, dan kuliner menciptakan
              identitas unik. Gotong royong dan adaptasi modernitas menonjolkan
              keberagaman yang membanggakan.
            </div>
            <div className="mt-40">
              <CustomButton
                bgColor="darkColor"
                text="Jelajahi Sekarang"
                textColor="basicColor"
              />
            </div>
          </div>
          <div className="w-3/5 h-screen  flex flex-row gap-5">
            <div className="custom-width-45  h-2/3  ml-10 ">
              <img src={imageAsset.TariKecak}  alt="" className="h-full w-full object-cover rounded-[50px] " />
            </div>

            <div
              className="custom-width-225 h-2/3 rounded-[36px] "
              style={{
                backgroundImage: `url(${imageAsset.PatungCandi})`,

                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            ></div>

            <div
              className="custom-width-225  h-2/3 rounded-[60px] mr-10"
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
