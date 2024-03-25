import persian from "@/assets/data";
import { IoIosArrowForward } from "react-icons/io";

const ViewAll = () => {
  return (
    <div className="flex justify-center items-center w-full md:pt-2">
      <div className="group relative flex items-center justify-center md:w-[12rem] w-[10rem] md:h-[2.5rem] h-[2rem] text-darkwater border-2 border-water hover:bg-water duration-200 rounded-full cursor-pointer">
        <span className="group absolute md:right-7 right-4 md:group-hover:right-4 group-hover:right-2 duration-200">
          <IoIosArrowForward />
        </span>
        <span>{persian.veiwAll}</span>
      </div>
    </div>
  );
};

export default ViewAll;
