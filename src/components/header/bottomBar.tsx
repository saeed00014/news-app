import React from "react";
import { IconLink } from "../ui/link";
import { FaRegUser } from "react-icons/fa";
import { RiHome2Line } from "react-icons/ri";
import { TiMessages } from "react-icons/ti";

const BottomBar = () => {
  return (
    <div className="fixed bottom-0 right-0 left-0 lg:hidden flex justify-between h-[65px] md:px-4 bg-ship">
      <IconLink
        icon={<TiMessages className="text-[2rem]" />}
        path="/messenger"
      />
      <IconLink icon={<RiHome2Line className="text-[2rem]" />} path="/" />
      <IconLink icon={<FaRegUser className="text-2xl" />} path="" />
    </div>
  );
};

export default BottomBar;
