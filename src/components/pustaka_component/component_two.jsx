import React from "react";
import imageAsset from "../../utils/image";
import { HiChevronRight } from "react-icons/hi";

function ComponentTwoPustaka() {
  return (
    <>
      <div className="w-full h-auto mt-20 lg:pb-40 es:pb-10 flex lg:flex-row es:flex-col">
        <div className="lg:w-2/4 es:w-full  pt-20 flex flex-row">
          <div className="w-1/4 h-[350px]  relative mt-20">
            <div
              className="w-full h-[400px] lg:-left-20 es:-left-5 top-0 absolute bg-gradient-to-b from-black to-black rounded-[30px] shadow"
              style={{
                backgroundImage: `url(${imageAsset.bgSulselOp50})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            />
            <div className="w-full lg:h-60 es:h-48 left-0 bottom-0 mb-12 ml-12 absolute 2xl:text-xl xl:text-xl es:text-base   -rotate-90 text-stone-100 text-2xl font-semibold font-['Poppins'] leading-relaxed">
              Sulawesi Selatan
            </div>
          </div>
          <div className="w-3/4 h-[350px] lg:-left-14 es:right-0 z-10 relative mt-20">
            <div
              className="w-full h-[400px] left-0 top-0 absolute bg-gradient-to-b from-black to-black lg:rounded-[30px] es:rounded-l-[30px] es:rounded-r-none shadow"
              style={{
                backgroundImage: `url(${imageAsset.bgSulsel})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            />
          </div>
        </div>
        <div className="lg:w-2/4 lg:pl-0 es:pl-8 es:w-full  lg:pt-20 es:pt-0 flex flex-col">
          <div className="lg:text-lg es:text-sm font-poppins mr-36 mt-24 font-regular">
            Sulawesi Selatan
          </div>
          <div className="text-[45px] md:text-[35px] sm:text-[25px] es:text-[25px] lg:text-[40px] font-poppins  font-bold">
            Suku Toraja,
            <span className="font-bold text-red-500  font-poppins">
              {" "}
              ‘to riajang’{" "}
            </span>{" "}
          </div>

          <div className="text-base font-poppins lg:mr-36 es:mr-8 mt-6 font-regular">
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
              <div className="text-stone-100 lg:text-xl es:text-base font-semibold font-['Poppins'] leading-tight">
                Sulawesi Selatan
              </div>
              <div className="text-stone-100 text-xl ">
                <HiChevronRight size={30} />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute right-0 overflow-hidden lg:flex es:hidden ">
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
