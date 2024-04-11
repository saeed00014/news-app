"use client";
import React, { useState } from "react";
import { ChatRoomContext } from "@/context/context";
import { ChatActionMessage, MessageSqlType, UserSqlType } from "@/types/types";

const ContextRoom = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState({} as UserSqlType);
  const [messages, setMessages] = useState({} as MessageSqlType[]);
  const [targetUser, setTargetUser] = useState({} as UserSqlType);
  const [choosedMessage, setChoosedMessage] = useState({} as MessageSqlType);
  const [actionMessage, setActionMessage] = useState({} as ChatActionMessage);

  return (
    <ChatRoomContext.Provider
      value={{
        user,
        setUser,
        targetUser,
        setTargetUser,
        messages,
        setMessages,
        choosedMessage,
        setChoosedMessage,
        actionMessage,
        setActionMessage
      }}
    >
      {children}
    </ChatRoomContext.Provider>
  );
};

export default ContextRoom;
