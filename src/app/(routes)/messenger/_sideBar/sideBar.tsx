"use client";
import ChatOptions from "./chatOptions";
import BackBtn from "@/components/backBtn";
import { useState } from "react";
import ChatSearch from "./chatSearch";
import ChatDefault from "./chatDefault";

const SideBar = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  return (
    <div
      className={`md:relative absolute md:top-[initial] top-0 bottom-0 md:right-0 ${
        isSideBarOpen ? "right-[0px]" : "-right-[260px]"
      } duration-100 flex flex-col min-w-[250px] py-3 gap-3 md:border-t-transparent border-t border-l bg-ship z-[60]`}
    >
      <ChatSearch />
      <ChatDefault />
      <ChatOptions />
      <BackBtn
        setEvent={setIsSideBarOpen}
        classNames={`absolute -left-[2.3rem] top-[4rem] md:hidden flex h-fit w-fit bg-ship rotate-180 ${
          isSideBarOpen && "rotate-0"
        }`}
      />
    </div>
  );
};

export default SideBar;
