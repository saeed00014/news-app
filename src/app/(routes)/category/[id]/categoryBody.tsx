"use client";
import { baseURL } from "@/axios/axios";
import { NewsBar } from "@/components/ui/news";
import { NewsInfo } from "@/types/types";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import React from "react";

const CategoryBody = () => {
  const id = useParams()?.id;
  const categoryResult = useQuery({
    queryKey: [`categoryNews${id}`],
    queryFn: async () => {
      const response = await baseURL.get(`/news/category?category=${id}`);
      return response.data.result;
    },
  });

  if (categoryResult.isPending) {
    return <></>;
  }

  const categoryNews = categoryResult.data;
  return (
    <div className="flex flex-col gap-4 lg:px-4 md:px-2 px-1">
      {categoryNews.map((news: NewsInfo) => {
        return (
          <div key={news.title}>
            <NewsBar newsInfo={news} />
          </div>
        );
      })}
    </div>
  );
};

export default CategoryBody;