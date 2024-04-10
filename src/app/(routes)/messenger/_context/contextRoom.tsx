"use client";
import React, { useState } from "react";
import { ChatRoomContext } from "@/context/context";
import { MessageSqlType, UserSqlType } from "@/types/types";
import { useQuery } from "@tanstack/react-query";
import { baseURL } from "@/axios/axios";

const ContextRoom = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState({} as UserSqlType);
  const [messages, setMessages] = useState({} as MessageSqlType[]);
  const [choosedMessage, setChoosedMessage] = useState({} as MessageSqlType);

  const userInfo = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const response = await baseURL.get("/users/userInfo");
      setUser(response.data.result[0]);
      return;
    },
  });

  if(userInfo.isPending) {
    return <></>
  }

  return (
    <ChatRoomContext.Provider
      value={{
        user,
        setUser,
        messages,
        setMessages,
        choosedMessage,
        setChoosedMessage,
      }}
    >
      {children}
    </ChatRoomContext.Provider>
  );
};

export default ContextRoom;
