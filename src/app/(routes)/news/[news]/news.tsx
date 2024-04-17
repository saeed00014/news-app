"use client";
import persian from "@/assets/data";
import ReadMore from "@/components/ui/readMore";
import Image from "next/image";
import React from "react";
import { AddBar } from "@/components/ui/adds";
import { useQuery } from "@tanstack/react-query";
import { baseURL } from "@/axios/axios";
import { PreRenderNewsPage } from "@/components/ui/news";

const News = () => {
  const newsResult = useQuery({
    queryKey: [`messages`],
    queryFn: async () => {
      const response = await baseURL.get("/news/1");
      return response.data.result[0];
    },
  });

  if (newsResult.isPending) {
    return <PreRenderNewsPage />;
  }

  const news = newsResult.data;
  
  return (
    <div className="flex flex-col gap-3">
      <h2 className="lg:text-[1.3rem] text-[1.1rem]">{persian.newsH2Tag}</h2>
      <p className="lg:text-2xl md:text-[1.3rem] text-[1.1rem] font-semibold">
        {news.title}
      </p>
      <div className="flex justify-center w-full">
        <div className="relative flex justify-center w-[700px] h-[400px]">
          <Image alt="new image" layout="fill" src={news.image} />
        </div>
      </div>
      <div className="flex justify-start items-center w-full">
        <p>{news.discription}</p>
      </div>
      {news.add && (
        <AddBar
          link={JSON.parse(news.add).link}
          image={JSON.parse(news.add).image}
        />
      )}
      {news.readMore && <ReadMore link={news.readMore} />}
    </div>
  );
};

export default News;
