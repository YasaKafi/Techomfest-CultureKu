import React, { useState } from "react";
import imageAsset from "../../utils/image";
import { RiSearchLine } from "react-icons/ri";
import { IoMdAddCircle } from "react-icons/io";

function ComponentOnePustaka({handleClick, budaya}) {
  const [inputFocus, setInputFocus] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [filteredBudaya, setFilteredBudaya] = useState([]);
  const [showDetail, setshowDetail] = useState(false);
  const [selectedBudaya, setSelectedBudaya] = useState(null);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    const filtered = budaya.filter((item) =>
      item.nama_budaya.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredBudaya(filtered);
  };

  const handleSuggestionClick = (namaBudaya, imageBudaya, deskripsiBudaya) => {
    setSelectedBudaya({
      nama_budaya: namaBudaya,
      image: imageBudaya,
      deskripsi_budaya: deskripsiBudaya,
    });
    setshowDetail(true);
  };

  const handleOverlayClose = () => {
    setshowDetail(false);
    setInputFocus(false);
  };

  const handleInputFocus = () => {
    setInputFocus(true);
  };

    return (
      <div className="w-full relative font-poppins text-center">
        {showDetail && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="sm:w-1/2 sm:h-1/2 es:w-3/4 es:h-2/3 bg-basicColor p-12 rounded-2xl shadow-2xl relative z-10">
              <span
                onClick={handleOverlayClose}
                className="absolute top-0 right-0 m-3 cursor-pointer"
              >
                <IoMdAddCircle size={40} className="hover:text-red-500" />
              </span>
              {selectedBudaya && (
                <div className="flex flex-col sm:flex-row h-[45%] sm:h-full gap-3">
                  <img
                    src={selectedBudaya.image}
                    alt=""
                    className="sm:w-[45%] w-full h-full object-cover rounded-[30px] cursor-pointer"
                  />
                  <div className="font-poppins flex flex-col justify-center items-center">
                    <div className="font-semibold lg:text-[40px] sm:text-[30px] es:text-lg">
                      {selectedBudaya.nama_budaya}
                    </div>
                    <div className="font-regular text-lg text-justify pt-5 lg:text-sm xl:text-xs 2xl:text-sm sm:text-xs es:text-[10px] es:leading-4 ">
                      {selectedBudaya.deskripsi_budaya}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
        <div className="flex items-center justify-center">
          <img src={imageAsset.bgPustaka} alt="Background" className="object-cover w-full h-[700px]" />
        </div>
  
        <div className="absolute lg:top-64 es:top-48 left-1/2 transform -translate-x-1/2 -translate-y-1/5 text-basicColor lg:text-4xl sm:text-3xl es:text-2xl font-bold">
          Jelajahi Warisan Budaya.
        </div>
  
        <div className="absolute lg:w-3/5 es:w-4/5 py-2 top-2/4 left-1/2 transform -translate-x-1/2 p-2 rounded-full bg-basicColor flex items-center mt-5">
          {/* Search Box */}
          <img src={imageAsset.icSearch2} alt="" width="5%" className="ml-2 pr-2" />
          <input
            type="text"
            className="w-full py-2 pl-4 pr-2 rounded-full bg-basicColor flex items-center focus:outline-none"
            placeholder="Cari Budayamu disini..."
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
          
          <div
            className="ml-4 lg:flex es:hidden text-basicColor bg-premierColor rounded-full px-8 py-2 font-semibold"
            onClick={() => handleSuggestionClick(filteredBudaya[0].nama_budaya, filteredBudaya[0].image_budaya, filteredBudaya[0].deskripsi_budaya)}
          >
            Temukan Provinsi
          </div>
          {filteredBudaya.length > 0 && inputValue != "" && inputFocus && (
            <div className=" rounded-xl text-left absolute top-full left-1/2 transform -translate-x-1/2 bg-basicColor border border-gray-300 shadow-md w-full">
              <ul className="max-h-40 overflow-y-auto">
                {filteredBudaya.map((item, index) => (
                  <li
                    key={index}
                    className="py-2 pl-6 px-4 cursor-pointer hover:bg-gray-100"
                    onClick={() => handleSuggestionClick(item.nama_budaya, item.image_budaya, item.deskripsi_budaya)}
                  >
                    {item.nama_budaya}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>


        <div className="absolute top-[600px] mb-20 left-1/2 transform -translate-x-1/2  p-2 rounded-3xl bg-white flex lg:flex-row es:flex-col items-center justify-evenly mt-5 lg:w-4/5 es:w-11/12">
          <div className="flex lg:text-2xl es:text-xl lg:my-14 es:my-6">
            <div className="font-bold ">
              Tahukah
            </div>
            <div className="font-bold bg-secondaryColor text-basicColor  py-2 pr-6 pl-2 -mt-2 ml-2">
              Kamu?
            </div>
          </div>
          <div className="">
            <div className="font-semibold text-3xl">
              Sulawesi dan Kalimantan
            </div>
            <div className="font-medium lg:mt-0 es:mt-4 text-base">
              Pulau Sulawesi dan Kalimantan juga memiliki fakta menarik lho
            </div>
          </div>
          <button onClick={handleClick} className="text-basicColor bg-secondaryColor rounded-full lg:px-8 es:px-6 lg:py-5 es:py-3 lg:mt-0 es:mt-4 lg:mb-4 es:mb-4 font-semibold ">
            Cek Yuk!
          </button>
        </div>
      </div>
    );
  }
  

export default ComponentOnePustaka;
