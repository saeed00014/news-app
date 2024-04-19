"use client";
import { baseURL } from "@/axios/axios";
import { NewsCardImage, TopNews } from "@/components/ui/news";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

const TopNewsCategory = () => {
  const category = useParams()?.id;
  const topNewsResult = useQuery({
    queryKey: [],
    queryFn: async () => {
      const response = await baseURL.get(
        `/news/category?category=${category}&limit=5`
      );
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

  return (
    <TopNews news={news} classNames="[&>*:nth-child(1)]:md:h-[340px] [&>*:nth-child(1)]:md:max-h-[340px] [&>*:nth-child(1)]:h-[130px] [&>*:nth-child(1)]:max-h-[160px]"/>
  );
};

export default TopNewsCategory;
