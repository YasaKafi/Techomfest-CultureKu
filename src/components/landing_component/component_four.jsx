import React from "react";
import imageAsset from "../../utils/image";
import { useState } from "react";

function ComponentFourLanding() {
  const images = [
    imageAsset.Gamelan,
    imageAsset.Batik,
    imageAsset.Angklung,
    imageAsset.bgWayang,
    imageAsset.TariSaman,
  ];

  const titles = ["Gamelan", "Batik", "Angklung", "Seni Wayang", "Tari Saman"];

  const descriptions = [
    `Gamelan adalah sebuah ansambel musik tradisional dari Indonesia yang terdiri dari berbagai jenis instrumen, seperti gong, kendang, bonang, saron, dan beberapa instrumen lainnya.
     Musik gamelan memiliki suara yang khas dan kompleks, sering kali digunakan dalam upacara adat, pertunjukan seni, atau sebagai hiburan.`,
    `Batik adalah seni tekstil tradisional Indonesia yang melibatkan teknik pewarnaan kain dengan menggunakan lilin untuk membuat pola atau desain yang unik. Proses pembuatan batik bisa melibatkan berbagai macam teknik dan corak yang bervariasi sesuai dengan daerahnya, dan batik sering dianggap sebagai simbol kekayaan budaya Indonesia.`,
    `Kekayaan budaya asal Indonesia yang berbentuk alat musik ini
                    terbuat dari bambu. Cara memainkan alat musik khas Jawa
                    Barat ini dengan digoyangkan. Angklung memperoleh pengakuan
                    dari UNESCO dan termasuk bagian dari World Heritage.`,
    `Seni Wayang merupakan tradisi teater bayangan yang populer di Indonesia, khususnya di Jawa. Wayang dapat berupa boneka kulit atau kayu yang diproyeksikan ke layar putih menggunakan lampu, menceritakan cerita-cerita dari epik Ramayana atau Mahabharata. Pertunjukan wayang sering menggabungkan musik gamelan dengan cerita yang disampaikan melalui dialog dan gerakan boneka.`,
    `Tari Saman adalah tarian tradisional suku Aceh dari Indonesia. Tarian ini dilakukan oleh sekelompok penari yang duduk berjejer dan melakukan gerakan tangan, tubuh, dan kepala dengan cepat serta sinkron, sambil menyanyikan nyanyian khas. Tarian Saman sering dianggap sebagai simbol persatuan, kekompakan, dan kebersamaan dalam budaya Aceh.`,
  ];

  const [clickedCards, setClickedCards] = useState([
    false,
    false,
    true,
    false,
    false,
  ]);

  const handleCardClick = (index) => {
    const updatedClickedCards = clickedCards.map((_, i) =>
      i === index ? true : false
    );
    setClickedCards(updatedClickedCards);
  };

  return (
    <>
      <div
        className="w-full h-screen flex 2xl:pr-20 flex-col md:pl-36 es:pl-8 pt-20 pb-20"
        style={{
          backgroundImage: `url(${imageAsset.bgCandiBorobudur})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "auto",
          objectFit: "cover",
        }}
      >
        <div className="text-basicColor font-poppins lg:text-[45px] md:text-[35px] es:text-[25px] font-bold">
          Sederet Kebudayaan <br />
          Indonesia yang Mendunia
        </div>
        <div className="text-zinc-300 font-poppins lg:text-base sm:text-sm es:text-sm font-regular mt-10">
          <span className="font-semibold font-poppins text-basicColor">
            Indonesia{" "}
          </span>{" "}
          memiliki keragaman budaya tradisi yang sangat melimpah. Hampir di
          setiap daerah memiliki kebudayaan tersendiri yang menjadi ciri <br />{" "}
          khas dan identitas dari daerah tersebut. Tidak heran jika kebudayaan
          dan tradisi asal Indonesia mampu dikenal hingga mancanegara. Hal itu
          tidak <br />
          terlepas dari keunikannya yang syarat akan nilai-nilai tradisi dan
          leluhur nenek moyang.
        </div>
        <div className="w-full 2xl:w-full h-auto flex md:flex-row es:flex-col mt-12 gap-6 2xl:gap-5 xl:gap-5">
          {clickedCards.map((isClicked, index) => (
            <div
              key={index}
              className={` ${isClicked ? "md:custom-width-45 es:w-11/12" : "md:custom-width-10 es:w-11/12"}
               flex flex-col justify-${isClicked ? "end" : "evenly"} items-${
                isClicked ? "start" : "center"
              } bg-darkColor   rounded-3xl
              ${isClicked? "xl:h-[400px] 2xl:h-[480px] md:h-[380px] es:h-[150px] " : "xl:h-[400px] 2xl:h-[480px] md:h-[380px] es:h-[50px] "}
                `}
              onClick={() => handleCardClick(index)}
              style={{
                backgroundImage: `url(${images[index]})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                objectFit: "cover",
              }}
            >
              {isClicked ? (
                <>
                  <div className=" ml-10 text-stone-100 lg:text-4xl md:text-3xl sm:text-xl es:text-lg font-semibold font-['Poppins'] md:mb-5 es:mb-0 leading-10">
                    {titles[index]}
                  </div>
                  <div className="w-full 2xl:w-auto xl:w-auto h-auto md:pr-20 es:px-4 md:mb-16 es:mb-0 md:ml-10 es:ml-0 text-justify text-zinc-300 2xl:text-sm xl:text-sm   lg:text-base sm:text-xs es:text-[10px] font-medium font-['Poppins'] leading-relaxed">
                    {descriptions[index]}
                  </div>
                </>
              ) : (
                <>
                <div className="h-full w-full flex es:flex-row-reverse md:flex-col md:justify-evenly es:justify-around  es:items-center">
                <div className="md:w-48 md:h-px es:h-px es:w-40 md:-rotate-90 es:rotate-0 border-2 border-stone-100 rounded-xl"></div>
                  <div className="md:w-52 md:h-10 md:-rotate-90 es:rotate-0 text-stone-100 xl:text-2xl md:text-xl es:text-sm  font-medium font-['Poppins'] leading-7">
                    {titles[index]}
                  </div>

                </div>
                 
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ComponentFourLanding;
