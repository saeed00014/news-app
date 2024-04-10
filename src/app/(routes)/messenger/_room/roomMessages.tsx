"use client";
import { baseURL } from "@/axios/axios";
import LoadingSpin from "@/components/loadingSpin";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { useContext } from "react";
import MessageList from "../_message/messageList";
import { ChatRoomContext } from "@/context/context";

const RoomMessages = () => {
  const { setMessages } = useContext(ChatRoomContext);
  const chat_id = useParams().id;
  const messagesResult = useQuery({
    queryKey: [`messages${chat_id}`],
    queryFn: async () => {
      const response = await baseURL.get(
        `/messages?chat_id=${chat_id}&group=1`
      );
      setMessages(response.data.result);
      return response.data.result;
    },
  });

  if (messagesResult.isPending) {
    return (
      <div className="flex justify-center items-center w-full h-full">
        <LoadingSpin />
      </div>
    );
  }

  return <MessageList />;
};

export default RoomMessages;
