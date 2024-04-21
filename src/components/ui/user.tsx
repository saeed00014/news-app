import { merge } from "@/lib/utils/merge";
import { UserInfoType } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import defaultImage from "@/assets/default.jpg";

type Props = {
  user: UserInfoType;
  classNames?: string;
};

const User = ({ user, classNames }: Props) => {
  return (
    <Link
      href={`/profile/${user.id}`}
      className={merge("flex items-center justify-center gap-2", classNames)}
    >
      <div className="relative flex justify-center items-center w-[50px] h-[50px]">
        <Image
          alt="user profile"
          layout="fill"
          src={user.image || defaultImage}
          className="w-full h-full object-contain rounded-full"
        />
      </div>
      <div className="hidden flex-col min-w-max text-[.85rem] font-semibold pt-1">
        <span>{user.username}</span>
        <span>{user.name}</span>
      </div>
    </Link>
  );
};

export { User };
