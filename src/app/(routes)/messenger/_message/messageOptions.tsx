import MessageDelete from "./messageDelete";
import MessageShare from "./messageShare";
import MessagePut from "./messagePut";

const MessageOptions = ({ isMyMessage }: { isMyMessage: boolean }) => {
  return (
    <div
      id="messagesOptions"
      className={`flex items-center h-[40px] rounded-[.8rem] gap-4 text-ship ${
        isMyMessage ? "bg-darkgrass" : "bg-darkwater"
      }`}
    >
      <MessageShare />
      {isMyMessage && <MessagePut />}
      {isMyMessage && <MessageDelete />}
    </div>
  );
};

export default MessageOptions;
