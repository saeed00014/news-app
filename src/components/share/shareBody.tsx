import { baseURL } from "@/axios/axios";
import LoadingSpin from "@/components/loadingSpin";
import { UseMutationResult, useQuery } from "@tanstack/react-query";
import ResultUserChoose from "./resultUserChoose";
import NoResult from "@/components/ui/noResult";
import ChatList from "@/app/(routes)/messenger/_sideBar/chatList";

type Props = {
  searchResult: UseMutationResult<any, Error, void>;
  searchValue: string;
};

const ShareBody = ({ searchResult, searchValue }: Props) => {
  const userChats = useQuery({
    queryKey: ["userChats"],
    queryFn: async () => {
      const response = await baseURL.get("/chats");
      return response.data;
    },
  });

  if (searchResult.isPending || userChats.isPending) {
    return (
      <div className="flex justify-center items-center w-full h-[4rem]">
        <LoadingSpin />
      </div>
    );
  }

  if (userChats.error) {
    return <></>;
  }

  const resultChats = userChats.data;
  
  if (!searchValue) {
    return (
      <ChatList
        searchResult={resultChats.result}
        user={resultChats.user}
        type="choose"
      />
    );
  }

  const users = searchResult.data?.result;

  if (Array.isArray(users) && users[0]) {
    return users.map((user) => {
      return (
        <div key={user.id}>
          <ResultUserChoose user={user} />
        </div>
      );
    });
  }

  return (
    <div className="flex justify-center items-center w-full h-[4rem]">
      <NoResult classNames="text-ship" />
    </div>
  );
};

export default ShareBody;
