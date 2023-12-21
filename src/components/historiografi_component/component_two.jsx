import React, { useState } from "react";
import imageAsset from "../../utils/image";

function ComponentTwoHistoriografi() {
  return (
    <>
      <div className="w-full h-screen flex flex-row">
        <div className="w-1/2 h-full pl-20 relative flex items-center justify-center">
          <div className="w-72 h-[450px] ">
            <img
              src={imageAsset.borobudurOne}
              alt=""
              className=" w-full h-full object-fill rounded-[40px]"
              style={{
                borderBottomLeftRadius: "0",
                borderTopRightRadius: "0",
              }}
            />
          </div>
          <div className="flex flex-col ml-5">
            <div className="w-72 h-72  mb-5 ">
              <img
                src={imageAsset.borobudurTwo}
                alt=""
                className=" w-full h-full object-fill rounded-[40px]"
                style={{
                  borderBottomLeftRadius: "0",
                  borderTopRightRadius: "0",
                }}
              />
            </div>
            <div className="w-72 h-72 ">
              <img
                src={imageAsset.borobudurThree}
                alt=""
                className=" w-full h-full object-fill rounded-[40px]"
                style={{
                  borderBottomRightRadius: "0",
                  borderTopLeftRadius: "0",
                }}
              />
            </div>
          </div>
        </div>
        <div className="w-1/2 h-full flex flex-col ">
          <div className="flex flex-row font-poppins font-semibold text-2xl mt-52 mb-20 ">
            <div className="text-darkColor pt-2">Tahukah</div>
            <div className="bg-secondaryColor text-basicColor ml-2 pt-2 pl-3 pb-2 pr-4">
              Kamu?
            </div>
          </div>
          <div className="text-[40px] font-poppins  font-bold">
            <span className="font-bold text-red-500 text-[40px] font-poppins">
              {" "}
              Candi Borobudur{" "}
            </span>{" "}
            Magelang,
            <br /> Jawa Tengah
          </div>

          <div className="text-base font-poppins mr-36 mt-6 font-regular">
            <span className="font-semibold text-base font-poppins ">
            Borobudur{" "}
            </span>{" "}
             diakui sebagai Situs Warisan Dunia UNESCO, dan setiap
            tahun menjadi pusat ziarah bagi umat Buddha selama Festival Waisak.
            Meskipun pernah tertutup oleh abu vulkanik, candi ini "ditemukan
            kembali" pada tahun 1814 oleh Sir Thomas Stamford Raffles. Borobudur
            menghadapi tantangan dari aktivitas gunung berapi, namun telah
            menjalani proyek restorasi besar-besaran untuk mempertahankan
            keasliannya sebagai salah satu keajaiban arsitektur Buddha yang
            paling mengesankan di dunia.
          </div>
        </div>
      </div>
    </>
  );
}
export default ComponentTwoHistoriografi;
