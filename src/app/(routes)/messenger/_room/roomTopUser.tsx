import Image from "next/image";
import defaultImage from "@/assets/default.jpg";
import { UserInfoType } from "@/types/types";

const RoomTopUser = ({ user }: { user: UserInfoType }) => {
  return (
    <div className="flex items-center gap-2">
      <Image
        src={user.image || defaultImage}
        width={50}
        height={50}
        className="h-[3rem] w-[3rem] object-cover rounded-full"
        alt="user avatar"
      />
      <span>{user.username}</span>
      <span>{user.name}</span>
    </div>
  );
};

export default RoomTopUser;
