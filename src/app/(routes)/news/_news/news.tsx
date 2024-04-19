"use client";
import persian from "@/assets/data";
import Image from "next/image";
import React from "react";
import InDocAdds from "../_adds/inDocAdds";
import InDocReadMore from "../_readMore/inDocReadMore";
import { MongoNewsType } from "@/types/types";
import Content from "./content";

const News = ({ news }: { news: MongoNewsType }) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3">
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
      </div>
      {news.add && <InDocAdds adds={news.add} />}
      {news.readMore && <InDocReadMore readMore={news.readMore} />}
      {news.content && <Content content={news.content} />}
    </div>
  );
};

export default News;
