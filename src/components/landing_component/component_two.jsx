import React,{forwardRef} from "react";
import imageAsset from "../../utils/image";
import InformationCard from "../common_component/card_info_landing_page";

function ComponentTwoLanding(props, ref) {
  return (
    <>
      <div className=" w-full h-auto pt-20 mt-20 flex flex-col items-center justify-center bg-darkColor">
        <div className="flex flex-row w-full lg:px-32 es:px-12 h-48 justify-between bg-darkColor">
          <div className="lg:text-[40px] md:text-[30px] es:text-[20px] text-basicColor font-poppins font-medium">
            <span className="font-medium italic font-poppins">Explore </span>
            Budaya Indonesia dengan <br />
            <span className="font-bold font-poppins">CultureKu</span>
          </div>
          <div className="w-52 h-12 z-10 relative lg:flex es:hidden">
                <div
                  className={`w-52 h-12 absolute bg-secondaryColor rounded-3xl`}
                />
                <button ref={ref} 
                  className={`w-52 h-12 absolute text-basicColor text-base font-medium font-poppins leading-none flex justify-center items-center`}
                >
                  <a href="/pustaka-budaya">Jelajahi Sekarang</a>
                  
                </button>
              </div>
        </div>

        <div className="flex lg:flex-row es:flex-col w-full lg:px-32 es:px-12 h-auto  lg:justify-between bg-darkColor">
            <InformationCard
                title="Apa itu CultureKu?"
                content="Website Budaya Indonesia yang berfokus pada seluruh provinsi di Indonesia. Kami  menawarkan hiburan melalui media visual berupa foto dan video, namun tetap menyisipkan elemen budaya lokal. Dengan demikian, kita berharap dapat menggugah minat dan rasa bangga warga Indonesia terhadap kekayaan budaya yang dimiliki oleh negara ini.
                "/>

          <InformationCard
            title="Tujuan CultureKu?"
            content="Kami berupaya untuk memperkenalkan dan menjaga keberagaman budaya lokal Indonesia. Hal ini bertujuan agar generasi muda lebih memahami dan menghargai kekayaan budaya yang dimiliki oleh negara ini. Melalui konten yang menarik, kami berharap dapat memberikan wawasan yang lebih dalam tentang berbagai aspek budaya lokal."
          />
        </div>
        <div className="absolute right-0 overflow-hidden lg:flex es:hidden  ">
          <img
            src={imageAsset.Gapura}
            alt=""
            className="h-850px w-auto object-cover opacity-10" 
          />
        </div>
      </div>
    </>
  );
}

export default forwardRef(ComponentTwoLanding);
