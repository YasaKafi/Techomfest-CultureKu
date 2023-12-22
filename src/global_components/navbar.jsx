import { Fragment, useState } from "react";
import imageAssets from "../utils/image";
import { Popover, Transition } from "@headlessui/react";
import { TiThMenuOutline } from "react-icons/ti";
import { useLocation } from "react-router-dom";
import { IoMdCloseCircle } from "react-icons/io";
import { Link } from "react-router-dom";

export default function NavBar({provinsiData}) {
  const location = useLocation();
  const namaProvinsiArray = provinsiData.map(provinsi => provinsi.nama_provinsi);
  const isActive = (path) => {
    return location.pathname === path ? "font-semibold" : "";
  };
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

  console.log(namaProvinsiArray);

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
          <div className="fixed top-0 left-0 w-screen h-screen bg-darkColor  z-50">
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
                Kamu mau cari apa?
              </div>
              <div className="w-72 h-12 relative mt-5">
                <div className="w-72 h-12 left-0 top-0 absolute bg-zinc-800 rounded-3xl border-2 border-zinc-100" />
                <div className="w-56 h-5 left-[29px] top-[21px] absolute text-neutral-400 text-xs font-medium font-['Poppins'] leading-3">
                  Contoh : “Tari Saman”
                </div>
                <img
                  className="w-5 h-5 left-[259px] top-[16px] absolute"
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
                <div className="font-semibold  sm:text-[30px] es:text-lg text-center">
                  Cari Provinsimu disini
                </div>
                <div className="w-full h-full es:flex mt-10 es:flex-col es:pb-10  lg:grid lg:grid-cols-2 lg:gap-4 xl:grid-cols-3 xl:gap-6 overflow-scroll">
                  {namaProvinsiArray.map((provinsi, index) => (
                    <Link
                      className="{`text-lg leading-6 text-neutral-500 hover:text-green-600 px-4 py-2 rounded`}"
                      key={index}
                      to={`/detail-page/${index + 1}`}
                    >
                      {provinsi}
                    </Link>
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
                      href="/detail-page"
                      className={`text-lg leading-6 text-neutral-700 hover:text-green-600  px-4 py-2 rounded ${isActive(
                        "/detail-page"
                      )}`}
                    >
                      Detail Page
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
            className="text-sm font-semibold leading-6 text-black hover:text-green-600  px-4 py-2 rounded"
          >
            Budaya Kita
          </a>
          <a
            href="/pustaka-budaya"
            className="text-sm font-semibold leading-6 text-neutral-500 hover:text-green-600  px-4 py-2 rounded"
          >
            Pustaka Budaya
          </a>

          <a
            href="/detail-page"
            className="text-sm font-semibold leading-6 text-neutral-500 hover:text-green-600  px-4 py-2 rounded"
          >
            Quiz
          </a>

          <a
            href="/historiografi-page"
            className="text-sm font-semibold leading-6 text-neutral-500 hover:text-green-600  px-4 py-2 rounded"
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
