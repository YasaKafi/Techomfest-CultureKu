import React from "react";
import imageAsset from "../../utils/image";
import CustomButton from "../../global_components/custom_button";
import InformationCard from "../common_component/card_info_landing_page";

function ComponentTwoLanding() {
  return (
    <>
      <div className=" w-full h-auto pt-20 mt-20 flex flex-col items-center justify-center bg-darkColor">
        <div className="flex flex-row w-full pl-16 pr-16 h-48 justify-between bg-darkColor">
          <div className="text-3xl text-basicColor font-poppins font-medium">
            <span className="font-medium italic font-poppins">Explore </span>
            Budaya Indonesia dengan <br />
            <span className="font-bold font-poppins">CultureKu</span>
          </div>
          <CustomButton
          bgColor="secondaryColor"
          text="Explore Budaya"
          textColor="basicColor"
          />
        </div>

        <div className="flex flex-row w-full pr-16 pl-16 h-auto justify-between bg-darkColor">
            <InformationCard
                title="Apa itu CultureKu?"
                content="Website Budaya Indonesia yang berfokus pada seluruh provinsi di Indonesia. Kami  menawarkan hiburan melalui media visual berupa foto dan video, namun tetap menyisipkan elemen budaya lokal. Dengan demikian, kita berharap dapat menggugah minat dan rasa bangga warga Indonesia terhadap kekayaan budaya yang dimiliki oleh negara ini.
                "/>

          <InformationCard
            title="Tujuan CultureKu?"
            content="Kami berupaya untuk memperkenalkan dan menjaga keberagaman budaya lokal Indonesia. Hal ini bertujuan agar generasi muda lebih memahami dan menghargai kekayaan budaya yang dimiliki oleh negara ini. Melalui konten yang menarik, kami berharap dapat memberikan wawasan yang lebih dalam tentang berbagai aspek budaya lokal."
          />
        </div>
        <div className="absolute right-0 overflow-hidden  ">
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

export default ComponentTwoLanding;
