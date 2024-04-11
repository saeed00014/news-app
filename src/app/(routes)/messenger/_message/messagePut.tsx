import { ChatRoomContext } from "@/context/context";
import { useContext } from "react";
import { RiPencilFill } from "react-icons/ri";

const MessagePut = () => {
  const { choosedMessage, setActionMessage } = useContext(ChatRoomContext);

  const handleClick = () => {
    setActionMessage({ action: "put", message: choosedMessage });
  };

  return (
    <div
      onClick={handleClick}
      id="messagesOptions"
      className="flex w-full items-center justify-center h-full"
    >
      <RiPencilFill className="text-[1.4rem] w-10 pointer-events-none" />
    </div>
  );
};

export default MessagePut;
