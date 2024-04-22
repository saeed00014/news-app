import CloseBtn from "@/components/closeBtn";
import { ChatRoomContext } from "@/context/context";
import { ChatActionMessage } from "@/types/types";
import { useContext } from "react";

const AttachedMessageBar = () => {
  const { actionMessage, setActionMessage } = useContext(ChatRoomContext);

  const handleClick = () => {
    setActionMessage({} as ChatActionMessage);
  };

  return (
    <div
      onClick={handleClick}
      className="flex w-full px-[1.5rem] cursor-pointer"
    >
      <div className="flex justify-between items-center w-full bg-ship/60 hover:brightness-90 gap-2 pr-4 pl-2 rounded-t-[1rem]">
        <span className="py-2">{actionMessage.message.text}</span>
        <CloseBtn
          setEvent={() => {}}
          classNames="px-[.6rem] py-[.6rem] p-0 [&>span]:hover:bg-moon"
        />
      </div>
    </div>
  );
};

export default AttachedMessageBar;
