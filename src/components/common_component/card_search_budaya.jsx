import imageAsset from "../../utils/image";
import { IoMdCloseCircle } from "react-icons/io";

export default function CardSearchBudaya() {
  return (
    <div className="w-full h-screen">
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className=" sm:w-1/2 sm:h-1/2 es:w-3/4 es:h-2/3   bg-basicColor p-12 rounded-2xl shadow-2xl relative z-10 ">
          <span
            // onClick={closeOverlay}
            className="absolute top-0 right-0 m-3 cursor-pointer"
          >
            <IoMdCloseCircle size={40} className="hover:text-red-500" />
          </span>
          <div className="flex flex-col sm:flex-row  h-[45%] sm:h-full  gap-3">
          <img
                  src={imageAsset.TariSerimpi}
                  alt=""
                  className="sm:w-[45%] w-full h-full object-cover rounded-[30px] cursor-pointer"
                 
                />
          <div className="font-poppins flex flex-col justify-center items-center">
            <div className="font-semibold lg:text-[40px] sm:text-[30px] es:text-lg">
              Tari Serimpi
            </div>
            <div className="font-regular text-lg text-justify pt-5 lg:text-sm xl:text-xs 2xl:text-sm sm:text-xs es:text-[10px] es:leading-4 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum porro, autem reprehenderit id facere animi labore, doloribus accusamus vitae unde amet laudantium! Nemo omnis laboriosam inventore dolores excepturi deserunt quo?
            </div>
          </div>

          </div>
          
        </div>
      </div>
    </div>
  );
}
