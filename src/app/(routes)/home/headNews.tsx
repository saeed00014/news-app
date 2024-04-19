"use client";
import { baseURL } from "@/axios/axios";
import { TopNews } from "@/components/ui/news";
import { useQuery } from "@tanstack/react-query";

const HeadNews = () => {
  const topNewsResult = useQuery({
    queryKey: [],
    queryFn: async () => {
      const response = await baseURL.get("/news");
      return response.data.result;
    },
  });

  if (topNewsResult.isPending) {
    return <></>;
  }

  const news = topNewsResult.data;

  if (!Array.isArray(news) || !news[0]) {
    return <></>;
  }

  return <TopNews news={news} />;
};

export default HeadNews;
