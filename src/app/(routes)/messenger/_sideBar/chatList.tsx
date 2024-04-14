"use client";
import { ResultUserList } from "@/components/ui/resultUser";
import Chat from "./chat";
import NoResult from "@/components/ui/noResult";
import { UserSqlType } from "@/types/types";

type Props = {
  searchResult: { id: number; targetUser_id: number }[] | undefined;
  user: UserSqlType | undefined;
  classNames?: string;
};

const ChatList = ({ searchResult, user, classNames }: Props) => {
  if (searchResult && user) {
    return (
      <ResultUserList classNames={classNames}>
        {searchResult.map((chat: any) => {
          let chatInfo
          if(chat.user_id === user.id) {
            chatInfo = {id: chat.id, targetUser_id: chat.targetUser_id}
          }else {
            chatInfo = {id: chat.id, targetUser_id: chat.user_id}
          }
          return (
            <div key={chat.id}>
              <Chat chatInfo={chatInfo} />
            </div>
          );
        })}
      </ResultUserList>
    );
  }
  return <NoResult classNames={`flex justify-center w-full ${classNames}`} />;
};

export default ChatList;
