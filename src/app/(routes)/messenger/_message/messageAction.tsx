import { ChatRoomContext } from "@/context/context";
import { useContext } from "react";
import MessageEdit from "./messageEdit";
import MessageSend from "./messageSend";

const MessageAction = () => {
  const { actionMessage } = useContext(ChatRoomContext);

  if (actionMessage?.action === "put") {
    return <MessageEdit />;
  }

  return <MessageSend />;
};

export default MessageAction;
