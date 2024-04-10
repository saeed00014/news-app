"use client";
import { useQuery } from "@tanstack/react-query";
import { baseURL } from "@/axios/axios";
import { useParams } from "next/navigation";
import RoomTopUser from "./roomTopUser";
import RoomTopOptoins from "./roomTopOptoins";

const RoomTop = () => {
  const targetUser_id = useParams().id;
  const targetUserResult = useQuery({
    queryKey: [""],
    queryFn: async () => {
      const response = await baseURL.get(`/users/userInfo/${targetUser_id}`);
      return response.data.result;
    },
  });

  return (
    <div className="sticky top-0 flex items-center justify-between px-2 md:h-[65px] md:min-h-[65px] h-[55px] min-h-[55px] gap-2 border-b border-l bg-ship z-20">
      {!targetUserResult.isPending && (
        <RoomTopUser user={targetUserResult.data[0]} />
      )}
      <RoomTopOptoins />
    </div>
  );
};

export default RoomTop;
