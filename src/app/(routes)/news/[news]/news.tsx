"use client";
import persian from "@/assets/data";
import ReadMore from "@/components/ui/readMore";
import Image from "next/image";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { baseURL } from "@/axios/axios";
import { PreRenderNewsPage } from "@/components/ui/news";
import InDocAdds from "../_adds/inDocAdds";
import InDocReadMore from "../_readMore/inDocReadMore";

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
    <div className="flex flex-col gap-2 p-2">
      <h2 className="lg:text-[1.3rem] text-[1rem]">{persian.newsH2Tag}</h2>
      <p className="lg:text-2xl md:text-[1.3rem] text-[1rem] font-semibold">
        {news.title}
      </p>
      <div className="relative flex justify-center w-full">
        <Image
          alt="new image"
          width={0}
          height={0}
          sizes="100vw"
          className="md:h-[400px] h-[250px] w-full max-w-[700px] object-cover"
          src={news.image}
        />
      </div>
      <div className="flex justify-start items-center w-full">
        <p>{news.description}</p>
      </div>
      {news.add && <InDocAdds adds={news.add} />}
      {news.readMore && <InDocReadMore readMore={news.readMore} />}
    </div>
  );
};

export default News;
