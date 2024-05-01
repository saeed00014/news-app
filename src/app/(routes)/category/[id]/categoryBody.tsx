"use client";
import { baseURL } from "@/axios/axios";
import { NewsBar } from "@/components/ui/news";
import { MongoNewsType } from "@/types/types";
import { useQuery } from "@tanstack/react-query";
import { notFound, useParams } from "next/navigation";
import React from "react";

const CategoryBody = () => {
  const id = useParams()?.id;
  const categoryResult = useQuery({
    queryKey: [`categoryNews${id}`],
    queryFn: async () => {
      try {
        const response = await baseURL.get(`/news/category?category=${id}`);
        if(response.status !== 200) {
          throw new Error(`status=${response.status}`)
        }
        return response.data.result;
      } catch (err) {
        //log error
        return []
      }
    },
  });

  if (categoryResult.isPending) {
    return <></>;
  }

  const categoryNews = categoryResult.data;

  if(!categoryNews[0]) {
    return notFound()
  }

  return (
    <div className="md:flex md:flex-col grid grid-cols-2 md:gap-4 gap-1 lg:px-4 md:px-2 px-1">
      {categoryNews.map((news: MongoNewsType) => {
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
