"use client";
import { MessageSqlType } from "@/types/types";
import { useContext } from "react";
import { ChatRoomContext } from "@/context/context";
import MessageOptions from "./messageOptions";
import { thierMessage } from "@/lib/utils/styles";

type Props = {
  message: MessageSqlType;
  handleClick: Function;
  isMyMessage: boolean;
};

const Message = ({ message, handleClick, isMyMessage }: Props) => {
  const { choosedMessage } = useContext(ChatRoomContext);

  return (
    <li
      className={`relative flex w-full gap-2 ${
        isMyMessage ? "" : thierMessage
      }`}
    >
      <div
        onClick={() => handleClick(message)}
        className="flex w-fit gap-1 text-ship"
      >
        <span className="flex py-2 px-3 gap-10 max-w-[20rem] rounded-[.8rem] bg-darkwater">
          {message.text}
        </span>
        {choosedMessage.id === message.id && (
          <MessageOptions isMyMessage={isMyMessage} />
        )}
      </div>
    </li>
  );
};

export default Message;
