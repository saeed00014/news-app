import { MessageSqlType, UserSqlType } from "@/types/types";
import { createContext } from "react";

export type MessengerContext = {};

export const MessengerContext = createContext<MessengerContext>(
  {} as MessengerContext
);

export type ChatSideBarContext = {
  choosedChatRoom_id: number;
  setChoosedChatRoom_id: React.Dispatch<React.SetStateAction<number>>;
  isEditChatActive: boolean;
  setIsEditChatActive: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ChatSideBarContext = createContext<ChatSideBarContext>(
  {} as ChatSideBarContext
);

export type ChatRoomContext = {
  user: UserSqlType;
  setUser: React.Dispatch<React.SetStateAction<UserSqlType>>;
  messages: MessageSqlType[];
  setMessages: React.Dispatch<React.SetStateAction<MessageSqlType[]>>;
  choosedMessage: MessageSqlType;
  setChoosedMessage: React.Dispatch<React.SetStateAction<MessageSqlType>>;
};

export const ChatRoomContext = createContext<ChatRoomContext>(
  {} as ChatRoomContext
);
