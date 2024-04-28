"use client";
import UseOutClick from "@/hooks/useOutClick";
import { MessageSqlType } from "@/types/types";
import MessageOptions from "./messageOptions";

type Props = {
  message: MessageSqlType;
  handleClick: Function;
  isMyMessage: boolean;
};

const MessageIsChoosed = ({ message, handleClick, isMyMessage }: Props) => {
  return (
    <UseOutClick
      eventFunc={() => handleClick({ message: message, mutateble: true })}
      id="messagesOptions"
    >
      <MessageOptions message={message} isMyMessage={isMyMessage} />
    </UseOutClick>
  );
};

export default MessageIsChoosed;
