
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imageAsset from "../../utils/image";
import React, { useState } from 'react';

const GaleriSlider = (props) => {
  const { rtl, budayaData } = props;
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };
  const settings = {
    dots: false,
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
            <div
              key={index}
              className="relative px-[5px] pt-2"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={data.image_budaya}
                alt={`Image ${index + 1} not found`}
                className="w-96 h-48 object-cover"
              />
              {hoveredIndex === index && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                  <p className="text-white">{data.nama_budaya}</p>
                </div>
              )}
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
