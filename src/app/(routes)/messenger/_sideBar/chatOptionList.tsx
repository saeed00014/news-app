"use client";
import { FaRegUser } from "react-icons/fa";
import { ReactNode, useState } from "react";
import persian from "@/assets/data";
import UserSearch from "./userSearch";
import UseOutClick from "@/hooks/useOutClick";

type ChatOptionItem = {
  text: string;
  icon: ReactNode;
  setEvent: any;
};

const ChatOptionItem = ({ text, icon, setEvent }: ChatOptionItem) => {
  return (
    <div
      onClick={() => setEvent(true)}
      id="chatOptoins"
      className="flex items-center px-4 py-[.6rem] gap-2 bg-ship hover:brightness-90 cursor-pointer"
    >
      <span className="text-[1.1rem] pointer-events-none">{icon}</span>
      <span className="pointer-events-none">{text}</span>
    </div>
  );
};

type Props = {
  isChatOptions: boolean;
  setIsChatOption: any;
};

const ChatOptionList = ({ isChatOptions, setIsChatOption }: Props) => {
  const [isSearchActive, setIsSearchActive] = useState(false);

  const handleClickOut = () => {
    setIsChatOption(false);
  };

  return (
    <>
      {isChatOptions && (
        <UseOutClick eventFunc={handleClickOut} id="chatOptoins">
          <ul
            id="chatOptoins"
            className="absolute left-[4rem] bottom-[3.5rem] flex shadow-2xl border border-ash rounded-[.5rem] overflow-hidden"
          >
            <ChatOptionItem
              setEvent={setIsSearchActive}
              text={persian.newChat}
              icon={<FaRegUser />}
            />
          </ul>
        </UseOutClick>
      )}
      <UserSearch
        setIsSearchActive={setIsSearchActive}
        isSearchActive={isSearchActive}
      />
    </>
  );
};

export default ChatOptionList;
