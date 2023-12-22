import React from "react";

const InformationCard = ({ title, content }) => {
  return (
    <div
      className="lg:w-2/4 es:w-full lg:h-96 md:h-80 sm:h-72 es:h-80 mr-4 ml-4 z-10 flex-col relative bg-zinc-800 es:mb-8 lg:mb-0 es:rounded-3xl lg:rounded-b-none"
    >
      <div className="mt-10 ml-12 lg:text-3xl md:text-2xl sm:text-xl es:text-sm text-basicColor font-poppins font-semibold">
        {title}
      </div>
      <div className="mt-10 w-40 h-2 bg-premierColor rounded-3xl" />
      <div className="lg:mt-10 es:mt-5 mr-12 text-justify ml-12 2xl:text-base xl:text-base md:text-sm sm:text-xs es:text-[10px] text-basicColor font-poppins font-regular">
        {content}
      </div>
    </div>
  );
};

export default InformationCard;
