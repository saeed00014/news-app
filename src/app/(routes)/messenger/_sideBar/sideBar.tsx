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
      className={`md:relative absolute md:top-[initial] top-[55px] md:bottom-0 bottom-[0px] md:right-0 ${
        isSideBarOpen ? "right-[0px]" : "-right-[250px]"
      } duration-100 flex flex-col min-w-[250px] py-3 gap-3 md:border-t-transparent border-t border-l bg-ship z-20`}
    >
      <ChatSearch />
      <ChatDefault />
      <ChatOptions />
      <BackBtn
        setEvent={setIsSideBarOpen}
        classNames={`absolute -left-[2rem] top-[1.2rem] md:hidden flex h-fit w-fit bg-ship rotate-180 ${
          isSideBarOpen && "rotate-0"
        }`}
      />
    </div>
  );
};

export default SideBar;
