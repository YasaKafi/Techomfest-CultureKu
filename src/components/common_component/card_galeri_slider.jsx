import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imgaeAsset from "../../utils/image";

const GaleriSlider = (props) => {
  const { rtl, budayaData } = props;
  const settings = {
    dots: true,
    rtl: rtl,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    pauseOnHover: false,
    pauseOnFocus: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <div className="w-full">
    <Slider {...settings}>
      {budayaData && budayaData.length > 0 ? (
        budayaData.map((data, index) => (
          <div key={index} className="px-[5px] pt-2">
            <img
              src={data.image_budaya}
              alt={`Image ${index + 1}`}
              className="w-96 h-48 object-cover"
            />
          </div>
        ))
      ) : (
        <div>No images available</div>
      )}
    </Slider>
  </div>
  );
};

export default GaleriSlider;
