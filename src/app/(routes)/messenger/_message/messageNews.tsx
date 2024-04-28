"use client";
import { baseURL } from "@/axios/axios";
import BackBtn from "@/components/backBtn";
import { NewsCardImage } from "@/components/ui/news";
import { MessageSqlType } from "@/types/types";
import { useQuery } from "@tanstack/react-query";

type Props = {
  message: MessageSqlType;
  handleClick: Function;
  isMyMessage: boolean;
};

const MessageNews = ({ message, handleClick, isMyMessage }: Props) => {
  const newsResult = useQuery({
    queryKey: [`news${message.news}`],
    queryFn: async () => {
      const response = await baseURL.get(`/news/${message.news}`);
      return response.data.result[0];
    },
  });

  if (newsResult.isPending) {
    return <div className="flex w-[280px] h-[160px]"></div>;
  }

  const news = newsResult.data;
  return (
    <div
      className={`flex w-fit ${isMyMessage ? "justify-end" : "justify-start"}`}
    >
      <div className={`relative flex ${isMyMessage ? "flex-row" : "flex-row-reverse"} items-center md:w-[280px] md:h-[160px] w-[220px] h-[140px]`}>
        <span
          className={`md:static absolute ${
            isMyMessage ? "-right-8 " : "-left-8"
          } bottom-0`}
          onClick={() => handleClick({ message: message, mutateble: false })}
        >
          <BackBtn setEvent={() => {}} classNames={`scale-110 ${!isMyMessage && "rotate-180" } `} />
        </span>
        <NewsCardImage newsInfo={news} />
      </div>
    </div>
  );
};

export default MessageNews;
