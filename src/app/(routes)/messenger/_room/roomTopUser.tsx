"use client";
import Image from "next/image";
import defaultImage from "@/assets/default.jpg";
import { useQuery } from "@tanstack/react-query";
import { baseURL } from "@/axios/axios";
import { useParams } from "next/navigation";
import { ChatRoomContext } from "@/context/context";
import { useContext } from "react";

const RoomTopUser = () => {
  const { setTargetUser } = useContext(ChatRoomContext);
  const targetUser_id = useParams().id;

  const targetUserResult = useQuery({
    queryKey: [`targetUser${targetUser_id}`],
    queryFn: async () => {
      const response = await baseURL.get(`/users/userInfo/${targetUser_id}`);
      return response.data.result;
    },
  });

  if (targetUserResult.isPending) {
    return <></>;
  }

  const targetUser = targetUserResult.data[0];
  setTargetUser(targetUser)

  return (
    <div className="flex items-center gap-2">
      <Image
        src={targetUser.image || defaultImage}
        width={50}
        height={50}
        className="h-[3rem] w-[3rem] object-cover rounded-full"
        alt="user avatar"
      />
      <span>{targetUser.username}</span>
      <span>{targetUser.name}</span>
    </div>
  );
};

export default RoomTopUser;
