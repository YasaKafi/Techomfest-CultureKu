import { Fragment, useState } from "react";
import imageAssets from "../utils/image";
import { Popover, Transition } from "@headlessui/react";

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className=" bg-basicColor  fixed top-0 left-0 right-0 z-50">
      <nav
        className="mx-auto flex flex-row  max-w-7xl items-center  p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="">
          <a href="" className="">
            <span className="sr-only">Your Company</span>
            <img className="h-8 w-auto" src={imageAssets.bgLogo} alt="" />
          </a>
        </div>

        <Popover.Group className="hidden ml-64 lg:flex lg:gap-x-5 mr-10 mt-1">
          <a
            href=""
            className="text-sm font-semibold leading-6 text-black hover:text-green-600  px-4 py-2 rounded"
          >
            Budaya Kita
          </a>
          <a
            href=""
            className="text-sm font-semibold leading-6 text-neutral-500 hover:text-green-600  px-4 py-2 rounded"
          >
            Pustaka Budaya
          </a>

          <a
            href=""
            className="text-sm font-semibold leading-6 text-neutral-500 hover:text-green-600  px-4 py-2 rounded"
          >
            Quiz
          </a>

          <a
            href=""
            className="text-sm font-semibold leading-6 text-neutral-500 hover:text-green-600  px-4 py-2 rounded"
          >
            Historiografi
          </a>
        </Popover.Group>

        <div className="w-36 h-10 relative ml-40 right-0 top-0 flex items-center justify-between bg-gray-900 rounded-3xl">
          <img
            className="w-7 h-7 ml-6"
            src={imageAssets.icSearch}
            alt="Search Icon"
          />
          <div className="w-0.5 h-4 bg-neutral-500"></div>
          <img
            className="w-7 h-7 mr-6"
            src={imageAssets.icMenu}
            alt="Menu Icon"
          />
        </div>
      </nav>
    </header>
  );
}
