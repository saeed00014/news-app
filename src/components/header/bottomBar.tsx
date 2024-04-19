"use client";
import React, { useContext } from "react";
import { IconLink } from "../ui/link";
import { FaRegUser } from "react-icons/fa";
import { RiHome2Line } from "react-icons/ri";
import { TiMessages } from "react-icons/ti";
import persian from "@/assets/data";
import { HeaderContext } from "@/context/context";
import { User } from "../ui/user";

const BottomBar = () => {
  const { user } = useContext(HeaderContext);
  return (
    <div className="fixed bottom-0 right-0 left-0 lg:hidden flex justify-between h-[65px] md:px-4 bg-ship">
      <IconLink
        text={persian.messenger}
        icon={<TiMessages className="text-[2rem]" />}
        path="/messenger/inbox"
      />
      <IconLink
        text={persian.firstPage}
        icon={<RiHome2Line className="text-[2rem]" />}
        path="/"
      />
      {user ? (
        <div className="flex items-center justify-center h-[65px] w-[65px] min-w-max">
          <User user={user} />
        </div>
      ) : (
        <IconLink
          text={persian.signInsignUp}
          icon={<FaRegUser className="text-2xl" />}
          path="/login"
        />
      )}
    </div>
  );
};

export default BottomBar;
