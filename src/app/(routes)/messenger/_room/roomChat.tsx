import ContextRoom from "../_context/contextRoom";
import RoomTop from "./roomTop";
import RoomBody from "./roomBody";
import MessageSend from "../_message/messageSend";

const RoomChat = () => {
  return (
    <ContextRoom>
      <RoomTop />
      <RoomBody />
      <MessageSend />
    </ContextRoom>
  );
};

export default RoomChat;
