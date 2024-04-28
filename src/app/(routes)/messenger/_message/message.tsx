"use client";
import { MessageSqlType } from "@/types/types";
import { useContext } from "react";
import { ChatRoomContext } from "@/context/context";
import MessageText from "./messageText";
import MessageIsChoosed from "./messageIsChoosed";
import MessageNews from "./messageNews";

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
      className={`flex md:flex-row flex-col gap-1 md:items-center  ${
        isMyMessage ? "md:flex-row-reverse items-end" : "items-start"
      }`}
    >
      {message.text && (
        <MessageText
          message={message}
          handleClick={handleClick}
          isMyMessage={isMyMessage}
        />
      )}
      {message.news && (
        <MessageNews
          message={message}
          handleClick={handleClick}
          isMyMessage={isMyMessage}
        />
      )}
      {choosedMessage?.id === message?.id && (
        <MessageIsChoosed
          message={message}
          handleClick={handleClick}
          isMyMessage={isMyMessage}
        />
      )}
    </li>
  );
};

export default Message;
