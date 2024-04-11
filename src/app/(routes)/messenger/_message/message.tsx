"use client";
import { MessageSqlType } from "@/types/types";
import { useContext } from "react";
import { ChatRoomContext } from "@/context/context";
import MessageOptions from "./messageOptions";
import { thierMessage } from "@/lib/utils/styles";
import UseOutClick from "@/hooks/useOutClick";
import Link from "next/link";

type Props = {
  message: MessageSqlType;
  handleClick: Function;
  isMyMessage: boolean;
};

const Message = ({ message, handleClick, isMyMessage }: Props) => {
  const { choosedMessage } = useContext(ChatRoomContext);

  return (
    <li
      id={`message${message.id}`}
      className={`relative flex items-center w-full gap-1 ${
        isMyMessage ? "flex-row-reverse [&>div>span]:bg-darkgrass" : ""
      }`}
    >
      <div className="flex flex-col w-fit max-w-[20rem] text-ship gap-1">
        {message?.attached_id && (
          <Link
            href={`#message${message.attached_id}`}
            replace={true}
            className="flex pt-2 pb-4 px-2 rounded-t-[.8rem] text-[.8rem] -mb-3 bg-dark/40 hover:bg-dark/50 cursor-pointer "
          >
            {message.attached}
          </Link>
        )}
        <span
          onClick={() => handleClick({ message: message, mutateble: false })}
          className="flex py-2 px-3 gap-10 min-w-max  rounded-[.8rem] bg-darkwater"
        >
          {message.text}
        </span>
      </div>
      {choosedMessage?.id === message?.id && (
        <UseOutClick
          eventFunc={() => handleClick({ message: message, mutateble: true })}
          id="messagesOptions"
        >
          <MessageOptions isMyMessage={isMyMessage} />
        </UseOutClick>
      )}
    </li>
  );
};

export default Message;
