import React from "react";
import imageAsset from "../../utils/image";

function ComponentSixDetail() {
  return (
    <>
      <div className="w-full h-screen flex flex-col relative">
        <div className="absolute top-32 right-[550px] w-1/5 h-3/5 ">
          <img
            src={imageAsset.adatAceh}
            alt=""
            className="w-full h-full object-cover rounded-[30px]"
            style={{
              borderBottomLeftRadius: "0",
              borderBottomRightRadius: "0",
            }}
          />
        </div>
        <div className="absolute top-64 right-28 w-1/5 h-3/5 ">
          <img
            src={imageAsset.adatAceh}
            alt=""
            className="w-full h-full object-cover rounded-[30px]"
            style={{
              borderBottomLeftRadius: "0",
              borderBottomRightRadius: "0",
            }}
          />
        </div>

        <div className="w-full h-1/5  flex flex-col items-center font-poppins">
          <div className="font-semibold text-[45px]">Adat Istiadat</div>
          <div className="font-regular text-lg">
            Salah satu adat yang masih dilakukan adalah upacara
          </div>
        </div>
        <div className="w-full h-3/5 bg-premierColor pl-36 bg-opacity-10 ">
          <div className="w-1/2 h-3/5  pl-36 bg-opacity-10 flex flex-col justify-center mt-24">
            <div className="text-[40px] font-poppins  font-bold">
              Upacara
              <span className="font-bold text-orange-500 text-[40px] font-poppins">
                {" "}
                Peusijuek{" "}
              </span>{" "}
            </div>

            <div className="text-base font-poppins mr-36 mt-6 font-regular">
              <span className="font-semibold text-base font-poppins ">
                Upacara Peusijuek{" "}
              </span>{" "}
              adalah tradisi unik dari masyarakat Aceh yang dilakukan sebagai
              bagian dari prosesi perkawinan. Upacara ini melibatkan proses
              membersihkan calon pengantin wanita dengan air bunga yang dihiasi
              oleh bunga-bunga segar. Air bunga tersebut dianggap sebagai
              lambang kesucian dan kebersihan yang akan menyertai calon
              pengantin dalam memulai hidup baru bersama pasangannya. Selain
              itu, Peusijuek juga mencerminkan simbolisme kebahagiaan dan
              keberkahan untuk mengawali pernikahan dengan tulus dan suci.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ComponentSixDetail;
