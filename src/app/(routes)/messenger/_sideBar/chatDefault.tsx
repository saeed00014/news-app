import { baseURL } from "@/axios/axios";
import LoadingSpin from "@/components/loadingSpin";
import NoResult from "@/components/ui/noResult";
import { useQuery } from "@tanstack/react-query";
import ChatList from "./chatList";

const ChatDefault = () => {
  const randomChats = useQuery({
    queryKey: ["defaultChats"],
    queryFn: async () => {
      const response = await baseURL.get(`/chats`);
      return response.data;
    },
  });

  if (randomChats.isPending) {
    return (
      <div className="flex justify-center w-full">
        <LoadingSpin />
      </div>
    );
  }

  const resultChats = randomChats.data.result
  const user = randomChats.data.user
  if (resultChats) {
    return <ChatList searchResult={resultChats} user={user} />;
  }

  return <NoResult classNames="flex justify-center w-full" />;
};

export default ChatDefault;
