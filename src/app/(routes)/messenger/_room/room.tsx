"use client";
import chatbg from "@/assets/chatbg.jpg";
import Image from "next/image";
import RoomChat from "./roomChat";

const Room = () => {
  return (
    <div className="relative flex flex-col justify-between w-full h-full overflow-hidden">
      <RoomChat />
      <Image
        alt="chat background"
        layout="fill"
        className="w-full object-cover -z-50"
        src={chatbg}
      />
    </div>
  );
};

export default Room;
