import MessageDelete from "./messageDelete";
import MessageShare from "./messageShare";
import MessagePut from "./messagePut";
import { MessageSqlType } from "@/types/types";

type Props = {
  message: MessageSqlType;
  isMyMessage: boolean;
};

const MessageOptions = ({ message, isMyMessage }: Props) => {
  return (
    <div
      id="messagesOptions"
      className={`flex items-center h-[40px] rounded-[.8rem] gap-3 text-ship ${
        isMyMessage ? "bg-darkgrass" : "bg-darkwater"
      }`}
    >
      <MessageShare />
      {isMyMessage && !message.news && <MessagePut />}
      {isMyMessage && <MessageDelete />}
    </div>
  );
};

export default MessageOptions;
