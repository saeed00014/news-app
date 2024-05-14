"use client";
import { useQuery } from "@tanstack/react-query";
import { baseURL } from "@/axios/axios";
import { useParams } from "next/navigation";
import MessageList from "../_message/messageList";
import LoadingSpin from "@/components/loadingSpin";
import { useContext } from "react";
import { ChatRoomContext } from "@/context/context";
import { ResultUserCard } from "@/components/ui/resultUser";

const RoomBody = () => {
  const { setUser, setMessages, targetUser } = useContext(ChatRoomContext);
  const chat_id = useParams()?.id;

  const userInfo = useQuery({
    queryKey: ["userroomchat"],
    queryFn: async () => {
      const response = await baseURL.get("/users/userInfo");
      setUser(response.data.result[0]);
      return [];
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
    retry: 1,
  });

  if (messagesResult.isPending || userInfo.isPending) {
    return (
      <div className="flex justify-center items-center w-full h-full">
        <LoadingSpin />
      </div>
    );
  }
  const loginUser = userInfo.data;
  const messages1 = messagesResult.data;

  if (Array.isArray(messages1) && messages1[0]) {
    return <MessageList loginUser={loginUser} />;
  }

  if (!targetUser) {
    return (
      <div className="flex h-full w-full items-center justify-center text-[1.2rem] text-ship ">
        چت یافت نشد
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center w-full h-full">
      <ResultUserCard user={targetUser} />
    </div>
  );
};

export default RoomBody;
