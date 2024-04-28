import CloseBtn from "@/components/closeBtn";
import { ChatRoomContext } from "@/context/context";
import { ChatActionMessage } from "@/types/types";
import { useContext } from "react";

const AttachedMessageBar = () => {
  const { actionMessage, setActionMessage } = useContext(ChatRoomContext);

  const handleClick = () => {
    setActionMessage({} as ChatActionMessage);
  };

  let shareContent;
  if (actionMessage.message.text) {
    shareContent = actionMessage.message.text;
  }

  if (actionMessage.message.news) {
    shareContent = `خبر ${actionMessage.message.news}`;
  }

  return (
    <div
      onClick={handleClick}
      className="flex w-full px-[1.5rem] cursor-pointer"
    >
      <div className="relative flex justify-end items-center w-full bg-ship/60 hover:brightness-90 gap-2 md:pr-4 md:pl-2 rounded-t-[1rem]">
        <span className="absolute py-2 right-1 left-[2.5rem]  overflow-hidden">
          <span className="min-w-max whitespace-nowrap">{shareContent}</span>
        </span>
        <CloseBtn
          setEvent={() => {}}
          classNames="px-[.6rem] py-[.6rem] p-0 [&>span]:hover:bg-moon"
        />
      </div>
    </div>
  );
};

export default AttachedMessageBar;
