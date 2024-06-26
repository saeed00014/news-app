import Message from "@/app/(routes)/messenger/_message/message";
import { ChatRoomContext } from "@/context/context";
import { MessageSqlType, UserSqlType } from "@/types/types";
import { useContext } from "react";

const MessageList = ({ loginUser }: { loginUser?: UserSqlType }) => {
  const { user, targetUser, messages, choosedMessage, setChoosedMessage } =
    useContext(ChatRoomContext);

  const handleClick = ({
    message,
    mutateble,
  }: {
    message: MessageSqlType;
    mutateble: boolean;
  }) => {
    if (choosedMessage.id === message.id) {
      if (!mutateble) return;
      setChoosedMessage({} as MessageSqlType);
      return;
    }
    setChoosedMessage(message);
  };

  return (
    <div className="flex flex-col-reverse w-full h-full md:pb-4 pb-2 lg:px-4 px-2 overflow-y-auto overflow-x-hidden">
      <ul className="flex flex-col gap-1 w-full min-h-max">
        {messages.map((message) => {
          return (
            <div key={message.id}>
              <Message
                message={message}
                handleClick={handleClick}
                isMyMessage={(loginUser?.id || user?.id) === message.user_id}
              />
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default MessageList;
