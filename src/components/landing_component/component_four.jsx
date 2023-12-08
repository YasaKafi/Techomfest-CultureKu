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
        className="w-full h-screen flex 2xl:pr-20 flex-col pl-36 pt-20 pb-20"
        style={{
          backgroundImage: `url(${imageAsset.bgCandiBorobudur})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "auto",
          objectFit: "cover",
        }}
      >
        <div className="text-basicColor font-poppins text-[45px] font-bold">
          Sederet Kebudayaan <br />
          Indonesia yang Mendunia
        </div>
        <div className="text-zinc-300 font-poppins text-base font-regular mt-10">
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
        <div className="w-full 2xl:w-full h-auto flex flex-row mt-12 gap-6 2xl:gap-5 xl:gap-5">
          {clickedCards.map((isClicked, index) => (
            <div
              key={index}
              className={` ${isClicked ? "custom-width-45" : "custom-width-10"}
               flex flex-col justify-${isClicked ? "end" : "evenly"} items-${
                isClicked ? "start" : "center"
              } bg-darkColor   rounded-3xl h-[480px] xl:h-[400px] 2xl:h-[480px] lg:h-[380px]  `}
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
                  <div className="w-72 h-12 ml-10 text-stone-100 text-4xl font-semibold font-['Poppins'] mb-5 leading-10">
                    {titles[index]}
                  </div>
                  <div className="w-full 2xl:w-auto xl:w-auto h-auto pr-20 mb-16 ml-10 text-justify text-zinc-300 2xl:text-sm xl:text-sm   text-base font-medium font-['Poppins'] leading-relaxed">
                    {descriptions[index]}
                  </div>
                </>
              ) : (
                <>
                  <div className="w-48 h-px -rotate-90 border-2 border-stone-100 rounded-xl"></div>
                  <div className="w-52 h-10 -rotate-90 text-stone-100 text-2xl font-medium font-['Poppins'] leading-7">
                    {titles[index]}
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
