import React, { ReactNode } from "react";
import Image from "next/image";
import defaultImage from "@/assets/default.jpg";
import { UserInfoType } from "@/types/types";
import { merge } from "@/lib/utils/merge";
import Link from "next/link";

const PreRenderResultUser = () => {
  return (
    <li className="relative flex w-full py-2 px-3 gap-2 bg-moon rounded-[1rem] cursor-pointer animate-[fade_2s_ease-in-out_infinite] overflow-hidden">
      <span className="flex justify-center">
        <Image
          src={defaultImage}
          width={50}
          height={50}
          alt="user picture"
          className="object-cover w-12 min-w-12 rounded-full"
        />
      </span>
      <div className="flex flex-col justify-center items-start w-full text-[.9rem] gap-2">
        <span className="flex w-[50%] h-[.7rem] rounded-[1rem] bg-ash"></span>
        <span className="flex w-full h-[.7rem] rounded-[1rem] bg-ash"></span>
      </div>
    </li>
  );
};

type ResultUser = {
  user: UserInfoType;
  classNames?: string;
};

const ResultUser = ({ user, classNames }: ResultUser) => {
  return (
    <li
      className={merge(
        "flex w-full py-2 px-3 gap-2 hover:brightness-90 bg-ship rounded-[1rem] cursor-pointer",
        classNames
      )}
    >
      <Image
        alt="profile imege"
        width={50}
        height={50}
        src={user.image === "default" ? defaultImage : user.image}
        className="rounded-full min-w-[50px] min-h-[50px] max-h-[50px] max-w-[50px] object-cover"
      />
      <div className="flex flex-col justify-center items-start text-[.9rem]">
        <span>{user.name}</span>
        <span className="line-clamp-1">{user.username}</span>
      </div>
    </li>
  );
};

type ResultUserList = {
  children: ReactNode;
  classNames?: string;
};

const ResultUserList = ({ children, classNames }: ResultUserList) => {
  return (
    <ul
      className={merge(
        "flex flex-col h-full px-1 gap-2 overflow-y-auto",
        classNames
      )}
    >
      {children}
    </ul>
  );
};

type ResultUserCard = {
  user: UserInfoType;
  classNames?: string;
};

const ResultUserCard = ({ user, classNames }: ResultUserCard) => {
  return (
    <Link
      href={`/profile/${user.id}`}
      className={merge(
        "flex flex-col items-center py-2 px-3 gap-1 hover:brightness-90 rounded-[1rem] cursor-pointer text-ship",
        classNames
      )}
    >
      <span className="flex justify-center w-[80px] min-w-[80px] max-w-[80px] h-[80px] min-h-[80px] max-h-[80px] rounded-full">
        {user.image && (
          <Image
            src={user.image === "default" ? defaultImage : user.image}
            width={80}
            height={80}
            alt="user picture"
            className="object-cover w-[80px] min-w-[80px] max-w-[80px] h-[80px] min-h-[80px] max-h-[80px] rounded-full"
          />
        )}
      </span>
      <span className="">{user.name}</span>
      <span className="line-clamp-1">{user.username}</span>
    </Link>
  );
};

export { PreRenderResultUser, ResultUser, ResultUserList, ResultUserCard };
