import React, { ReactNode } from "react";
import Image from "next/image";
import defaultImage from "@/assets/default.jpg";
import { UserInfoType } from "@/types/types";
import { merge } from "@/lib/utils/merge";
import persian from "@/assets/data";

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
      <span className="flex justify-center">
        <Image
          src={defaultImage}
          width={50}
          height={50}
          alt="user picture"
          className="object-cover w-12 min-w-12 rounded-full"
        />
      </span>
      <div className="flex flex-col justify-center items-start text-[.9rem]">
        <span>{persian.follow}</span>
        <span className="line-clamp-1">{persian.chooseChat}</span>
      </div>
    </li>
  );
};

type ResultUserList = {
  children: ReactNode;
};

const ResultUserList = ({ children }: ResultUserList) => {
  return (
    <ul
      style={{ scrollbarWidth: "thin" }}
      className="flex flex-col h-full px-1 gap-2 overflow-y-auto"
    >
      {children}
    </ul>
  );
};

export { ResultUser, ResultUserList };
