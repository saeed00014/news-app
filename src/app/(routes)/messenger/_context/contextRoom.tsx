"use client";
import React, { useEffect, useState } from "react";
import { ChatRoomContext } from "@/context/context";
import {
  ChatActionMessage,
  MessageSqlType,
  UserSqlType,
} from "@/types/types";
import { io } from "socket.io-client";
import { useParams } from "next/navigation";

const ContextRoom = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState({} as UserSqlType);
  const [messages, setMessages] = useState([] as MessageSqlType[]);
  const [targetUser, setTargetUser] = useState({} as UserSqlType);
  const [choosedMessage, setChoosedMessage] = useState({} as MessageSqlType);
  const [actionMessage, setActionMessage] = useState({} as ChatActionMessage);
  const [newMessage, setNewMessage] = useState(
    {} as { action: string; message: MessageSqlType }
  );
  const chat_id = useParams()?.id;

  useEffect(() => {
    const socket = io({ path: "/api/socket" });
    socket.emit("join", { chat_id: chat_id });
    socket.emit("newMessage", newMessage);
    socket.on("serverSendMessage", (messageInfo) => {
      if (messageInfo?.action === "post") {
        setMessages((messages) => [...messages, messageInfo.message]);
      }
      if (messageInfo?.action === "put") {
        let newMessages = [] as MessageSqlType[];
        messages.forEach((message) => {
          if (message.id === messageInfo.message.id) {
            newMessages.push(messageInfo.message);
            return;
          }
          newMessages.push(message);
          return;
        });
        newMessages[0] && setMessages(newMessages);
      }
    });
    return () => {
      socket.disconnect();
    };
  }, [newMessage]);

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
        setActionMessage,
        setNewMessage,
      }}
    >
      {children}
    </ChatRoomContext.Provider>
  );
};

export default ContextRoom;
