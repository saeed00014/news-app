"use client";
import chatbg from "@/assets/chatbg.jpg";
import Image from "next/image";
import RoomChat from "./roomChat";
import { notFound, useParams } from "next/navigation";
import RoomInbox from "./roomInbox";

const Room = () => {
  const paramId = useParams()?.id;
  if (!(Number(paramId) > 0) && !(paramId === "inbox")) {
    return notFound();
  }

  return (
    <div className="relative flex flex-col justify-between w-full h-full overflow-hidden">
      {paramId === "inbox" && <RoomInbox />}
      {Number(paramId) > 0 && <RoomChat />}
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
