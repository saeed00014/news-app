import { ChatRoomContext } from "@/context/context";
import { useContext } from "react";
import { TbArrowForward } from "react-icons/tb";

const MessageShare = () => {
  const { choosedMessage, setActionMessage } = useContext(ChatRoomContext);

  const handleClick = () => {
    setActionMessage({action: "share", message: choosedMessage})
  };

  return (
    <div
      onClick={handleClick}
      id="messagesOptions"
      className="flex w-full items-center justify-center h-full"
    >
      <TbArrowForward className="text-[1.8rem] w-10 pointer-events-none" />
    </div>
  );
};

export default MessageShare;
