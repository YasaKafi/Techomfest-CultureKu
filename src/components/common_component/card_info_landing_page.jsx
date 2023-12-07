import React from "react";

const InformationCard = ({ title, content }) => {
  return (
    <div
      className="w-2/4 h-96 mr-4 ml-4 z-10 flex-col relative bg-zinc-800 rounded-3xl"
      style={{
        borderBottomLeftRadius: "0",
        borderBottomRightRadius: "0",
      }}
    >
      <div className="mt-10 ml-12 text-3xl text-basicColor font-poppins font-semibold">
        {title}
      </div>
      <div className="mt-10 w-40 h-2 bg-premierColor rounded-3xl" />
      <div className="mt-10 mr-12 text-justify ml-12 text-base text-basicColor font-poppins font-regular">
        {content}
      </div>
    </div>
  );
};

export default InformationCard;
