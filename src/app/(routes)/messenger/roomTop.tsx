import Image from "next/image";
import profileImage from "@/assets/testsuggested.jpg"
import { IoMdMore } from "react-icons/io";
import { FaTrash } from "react-icons/fa";
import persian from "@/assets/data";

const RoomTop = () => {
  return (
    <div className="sticky top-0 flex items-center justify-between px-2 md:h-[65px] md:min-h-[65px] h-[55px] min-h-[55px] gap-2 border-b border-l bg-ship z-20">
      <div className="flex items-center gap-2">
        <Image
          alt=""
          className="h-[3rem] w-[3rem] object-cover rounded-full"
          src={profileImage}
        />
        <span>{persian.economy}</span>
      </div>
      <div className="flex h-fit gap-2">
        <span><FaTrash className="size-[2.8rem] p-3 rounded-full hover:bg-ash cursor-pointer"  /></span>
        <span className=""><IoMdMore className="size-[2.8rem] p-2 rounded-full hover:bg-ash cursor-pointer" /></span>
      </div>
    </div>
  );
};

export default RoomTop;
