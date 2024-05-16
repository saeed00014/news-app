import { baseURL } from "@/axios/axios";
import LoadingSpin from "@/components/loadingSpin";
import NoResult from "@/components/ui/noResult";
import { useQuery } from "@tanstack/react-query";
import ChatList from "./chatList";
import persian from "@/assets/data";

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

  const resultChats = randomChats.data?.result;
  const user = randomChats.data?.user;
  if (resultChats) {
    return <ChatList searchResult={resultChats} user={user} />;
  }

  return (
    <div className="flex flex-col px-2 gap-2 max-w-[250px]">
      <NoResult text={persian.noChat} classNames="flex justify-center w-full" />
      <span>شما میتوانید از مداد پایین کاربر مورد نظر خود را پیدا کنید</span>
    </div>
  );
};

export default ChatDefault;
