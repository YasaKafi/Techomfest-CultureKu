import React from "react";
import imageAsset from "../../utils/image";
import { HiChevronRight } from "react-icons/hi";

function ComponentThreePustaka() {
  return (
    <>
      <div className="w-full h-auto  pb-40 flex flex-row">
        <div className="w-2/4  pt-20 ml-24 flex flex-col">
          <div className="text-lg font-poppins mr-36 mt-24 font-regular">
            Kalimantan Timur
          </div>
          <div className="text-[40px] font-poppins  font-bold">
            Tarian Hudoq,
            <span className="font-bold text-red-500 text-[40px] font-poppins">
              {" "}
              Kaltim{" "}
            </span>{" "}
          </div>

          <div className="text-base font-poppins mr-36 mt-6 font-regular">
            <span className="font-semibold text-base font-poppins ">
              Kalimantan Timur{" "}
            </span>{" "}
            terkenal dengan Tarian Hudoq, sebuah tarian tradisional suku Dayak
            Kenyah yang dijalankan dalam berbagai upacara adat, terutama
            perayaan panen. Tarian ini tidak hanya menggambarkan keterampilan
            gerak yang elegan, tetapi juga menyiratkan makna spiritual dan
            keberlimpahan alam. Selain itu, provinsi ini menawarkan kombinasi
            wisata alam dan budaya, dengan Taman Nasional Kutai yang melindungi
            kehidupan liar seperti orangutan dan situs arkeologi Kutai
            Martadipura yang menandakan sejarah kerajaan Hindu-Buddha.
          </div>

          <div className="w-full pr-32 flex justify-end items-end">
            <div className="w-72 h-16 z-10 mt-10 bg-darkColor  flex flex-row justify-evenly items-center rounded-[40px] ">
              <div className="text-stone-100 text-xl font-semibold font-['Poppins'] leading-tight">
                Kalimantan Timur
              </div>
              <div className="text-stone-100 text-xl ">
                <HiChevronRight size={30} />
              </div>
            </div>
          </div>
        </div>
        <div className="w-2/4  pt-20 flex flex-row">
          <div className="w-4/5 h-[350px] -right-5 z-10 relative mt-20">
            <div
              className="w-full h-[400px] left-0 top-0 absolute bg-gradient-to-b from-black to-black rounded-[30px] shadow"
              style={{
                backgroundImage: `url(${imageAsset.bgKaltim})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            />
          </div>
          <div className="w-1/5 h-[350px] ml-12  relative mt-20">
            <div
              className="w-full h-[400px] -right-0  top-0 absolute bg-gradient-to-b from-black to-black rounded-[30px] shadow"
              style={{
                backgroundImage: `url(${imageAsset.bgKaltimOp50})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                borderTopRightRadius: "0",
                borderBottomRightRadius: "0",
              }}
            />
             <div className="  right-0 bottom-5 mb-12 pl-16 w-full  absolute 2xl:text-xl xl:text-xl  text-center  -rotate-90 text-stone-100 text-2xl font-semibold font-['Poppins'] leading-relaxed">
             Kalimantan Timur
            </div>
          </div>
        </div>

        <div className="absolute left-0 overflow-hidden  ">
          <img
            src={imageAsset.bgPetaKalimantan}
            alt=""
            className="h-[650px]  object-cover opacity-5 "
          />
        </div>
      </div>
    </>
  );
}

export default ComponentThreePustaka;
