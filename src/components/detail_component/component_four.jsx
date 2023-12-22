import React from "react";
import imageAsset from "../../utils/image";

function ComponentFourDetail({namaBudaya, deskripsiBudaya, imageBudaya, imageSide}) {
  return (
    <>
      <div className="w-full h-auto  pb-40 flex flex-row">
        <div className="w-2/4  pt-20 ml-24 flex flex-col justify-center items-center">
          <div className="text-[30px] font-poppins mt-24 font-bold">
            {namaBudaya}
          </div>

          <div className="text-base text-center font-poppins mr-16 mt-6 font-regular">
            <span className="font-semibold text-base font-poppins ">
              {namaBudaya}{" "}
            </span>{" "}
            {deskripsiBudaya}
          </div>
        </div>
        <div className="w-2/4  pt-20 flex flex-row">
          <div className="w-4/5 h-[350px] -right-5 z-10 relative mt-20">
            <div
              className="w-full h-[400px] left-0 top-0 absolute bg-gradient-to-b from-black to-black rounded-[30px] shadow"
              style={{
                backgroundImage: `url(${imageBudaya})`,
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
                backgroundImage: `url(${imageSide})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                borderTopRightRadius: "0",
                borderBottomRightRadius: "0",
              }}
            />
            <div className="  right-0 bottom-5 mb-12 pl-16 w-full  absolute 2xl:text-xl xl:text-xl  text-center  -rotate-90 text-stone-100 text-2xl font-semibold font-['Poppins'] leading-relaxed">
              {namaBudaya}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ComponentFourDetail;
