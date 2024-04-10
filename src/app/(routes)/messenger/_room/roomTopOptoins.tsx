import { IoMdMore } from "react-icons/io";
import { FaTrash } from "react-icons/fa";

const RoomTopOptoins = () => {
  return (
    <div className="flex h-fit gap-2">
      <span>
        <FaTrash className="size-[2.8rem] p-3 rounded-full hover:bg-ash cursor-pointer" />
      </span>
      <span className="">
        <IoMdMore className="size-[2.8rem] p-2 rounded-full hover:bg-ash cursor-pointer" />
      </span>
    </div>
  );
};

export default RoomTopOptoins;
