import chatbg from "@/assets/chatbg.jpg";
import SendBar from "@/components/sendBar";
import Image from "next/image";
import RoomTop from "./roomTop";
import RoomBody from "./roomBody";

const Room = () => {
  return (
    <div className="relative flex flex-col justify-between w-full h-full overflow-hidden">
      <RoomTop />
      <RoomBody />
      <SendBar />
      <Image
        alt=""
        layout="fill"
        className="w-full object-cover -z-50"
        src={chatbg}
      />
    </div>
  );
};

export default Room;
