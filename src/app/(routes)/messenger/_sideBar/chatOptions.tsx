"use client";
import { useState } from "react";
import PencilButton from "@/components/pencilButton";
import ChatOptionList from "./chatOptionList";

const ChatOptions = () => {
  const [isChatOptions, setIsChatOption] = useState(false);

  return (
    <>
      <PencilButton
        id="chatOptoins"
        event={isChatOptions}
        setEvent={setIsChatOption}
        classNames="left-3 bottom-1"
      />
      <ChatOptionList
        isChatOptions={isChatOptions}
        setIsChatOption={setIsChatOption}
      />
    </>
  );
};

export default ChatOptions;
