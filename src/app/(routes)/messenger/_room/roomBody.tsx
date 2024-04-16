"use client";
import { useQuery } from "@tanstack/react-query";
import { baseURL } from "@/axios/axios";
import { useParams } from "next/navigation";
import MessageList from "../_message/messageList";
import LoadingSpin from "@/components/loadingSpin";
import { useContext } from "react";
import { ChatRoomContext } from "@/context/context";

const RoomBody = () => {
  const { setUser, setMessages } = useContext(ChatRoomContext);
  const chat_id = useParams()?.id;
  
  const userInfo = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const response = await baseURL.get("/users/userInfo");
      setUser(response.data.result[0]);
      return;
    },
  });

  const messagesResult = useQuery({
    queryKey: [`messages${chat_id}`],
    queryFn: async () => {
      const response = await baseURL.get(
        `/messages?chat_id=${chat_id}&group=1`
      );
      setMessages(response.data.result);
      return response.data.result;
    },
    retry: 1
  });

  if (messagesResult.isPending || userInfo.isPending) {
    return (
      <div className="flex justify-center items-center w-full h-full">
        <LoadingSpin />
      </div>
    );
  }

  return <MessageList />;
};

export default RoomBody;
