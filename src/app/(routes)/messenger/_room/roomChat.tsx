import ContextRoom from "../_context/contextRoom";
import RoomTop from "./roomTop";
import RoomBody from "./roomBody";
import MessageAction from "../_message/messageAction";

const RoomChat = () => {
  return (
    <ContextRoom>
      <RoomTop />
      <RoomBody />
      <MessageAction />
    </ContextRoom>
  );
};

export default RoomChat;
