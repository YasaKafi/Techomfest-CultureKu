import React from "react";
import imageAsset from "../../utils/image";

function ComponentFiveDetail() {
  return (
    <>
      <div className="w-full h-auto flex flex-col">
        <div className="w-full h-auto  pb-40 flex flex-row ">
          <div className="w-2/4   flex flex-row">
            <div className="w-1/4 h-[350px]  relative mt-20">
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
              Kerak Telur Aceh
              </div>
            </div>
            <div className="w-3/4 h-[350px] -left-14 z-10 relative mt-20">
              <div
                className="w-full h-[400px] left-0 top-0 absolute bg-gradient-to-b from-black to-black rounded-[30px] shadow"
                style={{
                  backgroundImage: `url(${imageAsset.kerakTelorAceh})`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              />
            </div>
          </div>
          <div className="w-2/4   flex flex-col justify-center">
            <div className="text-[30px] font-poppins mt-24 font-semibold">
            Kerak Telur Aceh
            </div>

            <div className="text-base font-poppins mr-36 mt-6 font-regular">
              <span className="font-semibold text-base font-poppins ">
              Kerak Telur Aceh{" "}
              </span>{" "}
               adalah makanan tradisional yang terbuat dari
              campuran telur, kelapa parut, beras ketan, dan bumbu-bumbu khas
              Aceh. Semua bahan ini dicampur dan dipanggang hingga menghasilkan
              lapisan kulit yang renyah dan beraroma khas. Kerak Telur Aceh
              sering dijumpai di warung-warung pinggir jalan dan menjadi camilan
              yang populer di acara-acara tradisional Aceh. Kelezatan hidangan
              ini tak hanya berasal dari rasa yang unik, tetapi juga dari proses
              tradisional dalam pembuatannya yang menjadikannya warisan kuliner
              yang berharga.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ComponentFiveDetail;
