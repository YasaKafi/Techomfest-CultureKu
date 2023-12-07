import React from 'react';

const CustomButton = ({ bgColor, textColor, text, onClick }) => {
  return (
    <div className="w-52 h-12 z-10 relative">
      <div className={`w-52 h-12 absolute bg-premierColor rounded-3xl`} />
      <div
        className={`w-52 h-12 absolute text-${textColor} text-base font-medium font-poppins leading-none flex justify-center items-center`}
        onClick={onClick}
      >
        {text}
      </div>
    </div>
  );
};

export default CustomButton;