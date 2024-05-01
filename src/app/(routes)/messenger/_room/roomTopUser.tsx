"use client";
import Image from "next/image";
import defaultImage from "@/assets/default.jpg";
import { useQuery } from "@tanstack/react-query";
import { baseURL } from "@/axios/axios";
import { notFound, useParams } from "next/navigation";
import { ChatRoomContext } from "@/context/context";
import { useContext } from "react";
import Link from "next/link";

const RoomTopUser = () => {
  const { targetUser, setTargetUser } = useContext(ChatRoomContext);
  const chat_id = useParams()?.id;
  const targetUserResult = useQuery({
    queryKey: [`chat${chat_id}`],
    queryFn: async () => {
      try {
        const response = await baseURL.get(
          `/chats/chatUsers?chat_id=${chat_id}`
        );
        if (response.status !== 200) {
          throw new Error(`status=${response.status}`);
        }
        const chatInfo = response.data.result[0];
        const user = response.data.user;
        if (!chatInfo || !user) {
          return [];
        }
        const targetUser_id =
          chatInfo.user_id === user.id
            ? chatInfo.targetUser_id
            : chatInfo.user_id;
        const response2 = await baseURL.get(`/users/userInfo/${targetUser_id}`);
        if (response2.status !== 200) {
          throw new Error(`status=${response.status}`);
        }
        if (!response2.data.result[0]) {
          return [];
        }
        setTargetUser(response2.data.result[0]);
        return response2.data.result;
      } catch (err) {
        //log err
        return [];
      }
    },
    retry: 1
  });

  if (targetUserResult.isPending) {
    return <></>;
  }

  if (!Array.isArray(targetUserResult.data) || !targetUserResult.data[0]) {
    return notFound();
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
      <div className="flex flex-col text-[.9rem]">
        <span className="-mb-1">{targetUser.username}</span>
        <span>{targetUser.name}</span>
      </div>
    </Link>
  );
};

export default RoomTopUser;
