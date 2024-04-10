import { TbArrowForward } from "react-icons/tb";
import { RiPencilFill } from "react-icons/ri";
import { FaTrash } from "react-icons/fa";

const MessageOptions = ({ isMyMessage }: { isMyMessage: boolean }) => {
  
  return (
    <div
      className={`flex items-center h-full rounded-[.8rem] gap-3 text-ship ${
        isMyMessage ? "bg-darkwater" : "bg-darkgrass"
      }`}
    >
      <TbArrowForward className="text-[1.8rem] w-10" />
      <RiPencilFill className="text-[1.4rem] w-10" />
      <FaTrash className="text-[1.1rem] w-10" />
    </div>
  );
};

export default MessageOptions;
