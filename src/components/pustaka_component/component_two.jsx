import React from "react";
import imageAsset from "../../utils/image";
import { HiChevronRight } from "react-icons/hi";

function ComponentTwoPustaka() {
  return (
    <>
      <div className="w-full h-auto pt-20 pb-40 flex flex-row ">
        <div className="w-2/4  pt-20 flex flex-row">
          <div className="custom-width-25 h-[350px]  relative mt-20">
            <div
              className="w-full h-[400px] -left-20 top-0 absolute bg-gradient-to-b from-black to-black rounded-[30px] shadow"
              style={{
                backgroundImage: `url(${imageAsset.bgSulselOp50})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            />
            <div className="w-full h-60 left-0 bottom-0 mb-12 ml-12 absolute 2xl:text-xl xl:text-xl    -rotate-90 text-stone-100 text-2xl font-semibold font-['Poppins'] leading-relaxed">
              Sulawesi Selatan
            </div>
          </div>
          <div className="custom-width-75 h-[350px] -left-14 z-10 relative mt-20">
            <div
              className="w-full h-[400px] left-0 top-0 absolute bg-gradient-to-b from-black to-black rounded-[30px] shadow"
              style={{
                backgroundImage: `url(${imageAsset.bgSulsel})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            />
          </div>
        </div>
        <div className="w-2/4  pt-20 flex flex-col">
          <div className="text-lg font-poppins mr-36 mt-24 font-regular">
            Sulawesi Selatan
          </div>
          <div className="text-[40px] font-poppins  font-bold">
            Suku Toraja,
            <span className="font-bold text-red-500 text-[40px] font-poppins">
              {" "}
              ‘to riajang’{" "}
            </span>{" "}
          </div>

          <div className="text-base font-poppins mr-36 mt-6 font-regular">
            <span className="font-semibold text-base font-poppins ">
              Orang Bugis-Sidenreng{" "}
            </span>{" "}
            menyebutnya orang Toraja dengan nama ‘to riajang’ yang artinya
            ‘orang yang berdiam di negeri atas atau pegunungan’. Sementara orang
            Luwu pada zaman Belanda menyebut orang Toraja dengan ‘to riaja’ yang
            berarti ‘orang yang berdiam di sebelah barat’.Masyarakat Toraja di
            Provinsi Sulawesi Selatan terkenal dengan tradisi pemakaman yang
            sangat unik. Pemakaman Rambu Solo adalah upacara pemakaman yang
            mewah dan rumit, melibatkan rangkaian ritual dan perayaan yang
            berlangsung berhari-hari.
          </div>

          <div className="w-full pr-32 flex justify-end items-end">
            <div className="w-72 h-16 z-10 mt-10 bg-darkColor  flex flex-row justify-evenly items-center rounded-[40px] ">
              <div className="text-stone-100 text-xl font-semibold font-['Poppins'] leading-tight">
                Sulawesi Selatan
              </div>
              <div className="text-stone-100 text-xl ">
                <HiChevronRight size={30} />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute right-0 overflow-hidden  ">
          <img
            src={imageAsset.bgPetaSulawesi}
            alt=""
            className="h-[650px]  object-cover opacity-5 "
          />
        </div>
      </div>
    </>
  );
}

export default ComponentTwoPustaka;
