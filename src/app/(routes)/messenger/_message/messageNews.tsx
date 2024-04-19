"use client";
import { baseURL } from "@/axios/axios";
import { NewsCardImage } from "@/components/ui/news";
import { useQuery } from "@tanstack/react-query";

const MessageNews = ({ newsId }: { newsId: string }) => {
  const newsResult = useQuery({
    queryKey: [`news${newsId}`],
    queryFn: async () => {
      const response = await baseURL.get(`/news/${newsId}`);
      return response.data.result[0];
    },
  });

  if (newsResult.isPending) {
    return <></>;
  }

  const news = newsResult.data;
  return (
    <div className="flex w-[280px] h-[160px]">
      <NewsCardImage newsInfo={news} />
    </div>
  )
};

export default MessageNews;
