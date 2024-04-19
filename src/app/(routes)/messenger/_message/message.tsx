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
    <li id={`message${message.id}`}>
      {message.text && (
        <MessageText
          message={message}
          handleClick={handleClick}
          isMyMessage={isMyMessage}
        />
      )}
      {message.news && <MessageNews newsId={message.news} />}
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
