import { Fragment, useState } from "react";
import imageAssets from "../utils/image";
import { Popover, Transition } from "@headlessui/react";
import { TiThMenuOutline } from "react-icons/ti";
import { useLocation } from "react-router-dom";
import { IoMdCloseCircle } from "react-icons/io";
import { Link } from "react-router-dom";

export default function NavBar({provinsiData, pulauData}) {
  const location = useLocation();
  const namaProvinsiArray = provinsiData.map(provinsi => ({
    id: provinsi.id_provinsi,
    id_pulau: provinsi.id_pulau,
    name: provinsi.nama_provinsi
  }));
  const isActive = (path) => (location.pathname === path ? "text-black" : "font-semibold");
  
  const [inputValue, setInputValue] = useState("");
  const [filteredProvinsi, setFilteredProvinsi] = useState([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [showOverlayFilter, setShowOverlayFilter] = useState(false);
  const toggleOverlay = () => {
    setShowOverlay(!showOverlay);
  };
  const toggleOverlayFilter = () => {
    setShowOverlayFilter(!showOverlayFilter);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    const filtered = provinsiData.filter((item) =>
      item.nama_provinsi.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredProvinsi(filtered);
  };
  
  return (
    <header className=" bg-basicColor shadow-md fixed top-0 left-0 right-0 z-50">
      <nav
        className="mx-auto flex flex-row justify-evenly w-full items-center  p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="">
          <a href="" className="">
            <span className="sr-only">Your Company</span>
            <img className="h-8 w-auto" src={imageAssets.bgLogo} alt="" />
          </a>
        </div>
        {showOverlay && (
          <div className="fixed top-0 left-0 w-screen h-screen bg-darkColor z-50">
            <div className="absolute top-0 right-0 mr-5 mt-5">
              <IoMdCloseCircle
                size={40}
                color="white"
                className=" hover:text-red-500 cursor-pointer"
                onClick={() => setShowOverlay(false)}
              />
            </div>

            <div className="absolute justify-center items-center flex flex-col top-1/2 left-1/2 w-full h-1/2 transform -translate-x-1/2 -translate-y-1/2  p-8 rounded font-poppins text-basicColor">
              <div className="font-semibold  sm:text-[30px] es:text-lg">
                Kamu mau provinsi apa?
              </div>
              <div className="w-72 h-12 relative mt-5">
                <div className="w-72 h-12 left-0 top-0 absolute bg-zinc-800 rounded-3xl border-2 border-zinc-100" />
                <input 
                  type="text" 
                  className="w-56 h-5 left-[25px] top-[15px] absolute bg-zinc-800 text-xs font-medium font-['Poppins'] leading-3"
                  placeholder="Contoh : “Jawa Tengah”"
                  style={{ outline: "none" }}
                  onChange={handleInputChange}
                />
                {filteredProvinsi.length > 0 && inputValue != "" && (
                  <div className="rounded-xl text-left absolute top-full left-1/2 transform -translate-x-1/2 bg-zinc-800 border border-gray-300 shadow-md w-full">
                    <ul className="max-h-40 overflow-y-auto">
                      {filteredProvinsi.map((item, index) => (
                        <a href={`/detail-page/${item.id_provinsi}`}>
                          <li
                            key={index}
                            className="py-2 pl-5 cursor-pointer rounded-xl hover:bg-zinc-600"
                            onClick={() => handleSuggestionClick(item.id_provinsi)}
                          >
                            {item.nama_provinsi}
                          </li>
                        </a>      
                      ))}
                    </ul>
                  </div>
                )}
                <img
                  className="w-5 h-5 left-[250px] top-[13px] absolute"
                  src={imageAssets.icSearch}
                />
              </div>
            </div>
          </div>
        )}
        {showOverlayFilter && (
          <div className="fixed top-0 left-0 w-screen h-screen bg-darkColor  z-40">
            <div className="absolute top-0 right-0 mr-5 mt-5">
              <IoMdCloseCircle
                size={40}
                color="white"
                className=" hover:text-red-500 cursor-pointer z-50 "
                onClick={() => setShowOverlayFilter(false)}
              />
            </div>

            <div className="absolute justify-start items-center flex  flex-col top-1/2 left-1/2 w-full mt-16  h-full  transform -translate-x-1/2 -translate-y-1/2  p-8 rounded font-poppins text-basicColor">
              <div className="w-full h-full flex flex-col ">
                <div className="font-semibold sm:text-[30px] es:text-lg text-center">
                  Cari Provinsimu disini
                </div>
                <div>
                  
                </div>
                <div className="w-full h-full mt-10"
                  style={{ overflowY: "auto" }}
                  >
                  {pulauData.map((pulau, index) => (
                    <div key={index}> 
                      <div className="font-semibold text-lg ml-4">
                      Pulau {pulau.nama_pulau}
                      </div>
                      <div className="es:flex mt-5 es:flex-col es:pb-10 lg:grid lg:grid-cols-2 lg:gap-4 xl:grid-cols-3 xl:gap-6">
                        {namaProvinsiArray
                          .filter(provinsi => provinsi.id_pulau === pulau.id_pulau)
                          .map((filteredProvinsi, index) => (
                            <Link
                              className="text-lg leading-6 text-neutral-500 hover:text-green-600 px-4 py-2 rounded"
                              key={index}
                              to={`/detail-page/${filteredProvinsi.id}`}
                              onClick={() => setShowOverlayFilter(false)}
                            >
                              Provinsi {filteredProvinsi.name}
                            </Link>
                          ))
                        }
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {mobileMenuOpen && (
          <div
            className="lg:hidden fixed inset-0 flex items-end justify-end h-screen bg-black bg-opacity-50"
            onClick={closeMobileMenu}
          >
            <div className="bg-white w-full h-full shadow-lg z-10 px-5 flex flex-col">
              <div className="w-full h-full  flex flex-col items-center justify-center text-center font-poppins">
                <ul className="py-4">
                  <li className="mb-4">
                    <a
                      href="/"
                      className={`text-lg leading-6 text-neutral-700 hover:text-green-600  px-4 py-2 rounded ${isActive(
                        "/"
                      )}`}
                    >
                      Budaya Kita
                    </a>
                  </li>
                  <li className="mb-4 ml-1">
                    <a
                      href="/pustaka-budaya"
                      className={`text-lg leading-6 text-neutral-700 hover:text-green-600  px-4 py-2 rounded ${isActive(
                        "/pustaka-budaya"
                      )}`}
                    >
                      Pustaka Budaya
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="/historiografi-page"
                      className={`text-lg leading-6 text-neutral-700 hover:text-green-600  px-4 py-2 rounded ${isActive(
                        "/historiografi-page"
                      )}`}
                    >
                      Historiografi
                    </a>
                  </li>
                </ul>
                <div className="w-36 h-10  flex items-center justify-between bg-gray-900 rounded-3xl">
                  <img
                    className="w-7 h-7 ml-6 cursor-pointer"
                    src={imageAssets.icSearch}
                    alt="Search Icon"
                    onClick={toggleOverlay}
                  />
                  <div className="w-0.5 h-4 bg-neutral-500"></div>
                  <img
                    className="w-7 h-7 mr-6"
                    src={imageAssets.icMenu}
                    alt="Menu Icon"
                    onClick={toggleOverlayFilter}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        <Popover.Group className="hidden ml-64 lg:flex lg:gap-x-5 mr-10 mt-1">
          <a
            href="/"
            className={`text-sm leading-6 text-neutral-500 hover:text-green-600  px-4 py-2 rounded ${isActive(
              "/"
            )}`}>
            Budaya Kita
          </a>
          <a
            href="/pustaka-budaya"
            className={`text-sm leading-6 text-neutral-500 hover:text-green-600  px-4 py-2 rounded ${isActive(
              "/pustaka-budaya"
            )}`}
          >
            Pustaka Budaya
          </a>

          <a
            href="/historiografi-page"
            className={`text-sm leading-6 text-neutral-500 hover:text-green-600  px-4 py-2 rounded ${isActive(
              "/historiografi-page"
            )}`}
          >
            Historiografi
          </a>

          <div className="w-36 h-10 relative ml-40 right-0 top-0 flex items-center justify-between bg-gray-900 rounded-3xl">
            <img
              className="w-7 h-7 ml-6"
              src={imageAssets.icSearch}
              alt="Search Icon"
              onClick={toggleOverlay}
            />
            <div className="w-0.5 h-4 bg-neutral-500"></div>
            <img
              className="w-7 h-7 mr-6"
              src={imageAssets.icMenu}
              alt="Menu Icon"
              onClick={toggleOverlayFilter}
            />
          </div>
        </Popover.Group>

        <div className=" lg:hidden es:flex relative ml-40 right-0 top-0 flex">
          <TiThMenuOutline size={25} onClick={toggleMobileMenu} />
        </div>
      </nav>
    </header>
  );
}
