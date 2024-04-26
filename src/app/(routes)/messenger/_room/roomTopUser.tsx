"use client";
import Image from "next/image";
import defaultImage from "@/assets/default.jpg";
import { useQuery } from "@tanstack/react-query";
import { baseURL } from "@/axios/axios";
import { useParams } from "next/navigation";
import { ChatRoomContext } from "@/context/context";
import { useContext } from "react";
import Link from "next/link";

const RoomTopUser = () => {
  const { targetUser, setTargetUser } = useContext(ChatRoomContext);
  const chat_id = useParams()?.id;
  const targetUserResult = useQuery({
    queryKey: [`chat${chat_id}`],
    queryFn: async () => {
      const response = await baseURL.get(`/chats/chatUsers?chat_id=${chat_id}`);
      const chatInfo = response.data.result[0];
      const user = response.data.user;
      const targetUser_id =
        chatInfo.user_id === user.id
          ? chatInfo.targetUser_id
          : chatInfo.user_id;
      const response2 = await baseURL.get(`/users/userInfo/${targetUser_id}`);
      setTargetUser(response2.data.result[0]);
      return response2.data.result;
    },
  });

  if (targetUserResult.isPending) {
    return <></>;
  }

  return (
    <Link
      href={`/profile/${targetUser.id}`}
      className="flex items-center min-w-max gap-2"
    >
      <Image
        src={targetUser.image || defaultImage}
        width={50}
        height={50}
        className="h-[3rem] w-[3rem] object-cover rounded-full"
        alt="user avatar"
      />
        <span>{targetUser.username}</span>
      <div className="flex flex-col">
        <span>{targetUser.name}</span>
      </div>
    </Link>
  );
};

export default RoomTopUser;
