"use client";

import SearchBar from "@/components/searchBar";
import { ResultUser, ResultUserList } from "@/components/ui/resultUser";
import ChatOptions from "./chatOptions";
import BackBtn from "@/components/backBtn";
import { useState } from "react";

const SideBar = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const user = {
    id: 2,
    firstname: "string",
    username: "string",
    image: null,
  };

  return (
    <div className={`md:relative absolute md:top-[initial] top-[72px] md:bottom-[initial] bottom-[70px] md:right-0 ${isSideBarOpen ? "right-2" : "-right-[250px]"} duration-100 flex flex-col min-w-[250px] py-3 gap-3 md:border-t-transparent border-t border-l bg-ship z-20`}>
      <div className="px-2">
        <SearchBar />
      </div>
      <ResultUserList>
        <ResultUser user={user} />
        <ResultUser user={user} />
        <ResultUser user={user} />
        <ResultUser user={user} />
      </ResultUserList>
      <ChatOptions />
      <BackBtn setEvent={setIsSideBarOpen} classNames={`absolute -left-[2rem] top-[1.2rem] md:hidden flex h-fit w-fit bg-ship rotate-180 ${isSideBarOpen && "rotate-0"}`}/>
    </div>
  );
};

export default SideBar;
