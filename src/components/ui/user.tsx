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
      <Image
        alt="profile imege"
        width={50}
        height={50}
        className="rounded-full min-w-[50px] min-h-[50px] max-h-[50px] max-w-[50px] object-cover"
        src={user.image || defaultImage}
      />
      <div className="hidden flex-col min-w-max text-[.85rem] font-semibold pt-1">
        <span>{user.username}</span>
        <span>{user.name}</span>
      </div>
    </Link>
  );
};

export { User };
