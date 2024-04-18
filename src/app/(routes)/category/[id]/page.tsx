"use client";
import { NewsBar } from "@/components/ui/news";
import { useQuery } from "@tanstack/react-query";
import { baseURL } from "@/axios/axios";
import { NewsInfo } from "@/types/types";
import TopNewsCategory from "./topNewsCategory";
import { useParams } from "next/navigation";

const Category = () => {
  const id = useParams()?.id
  const categoryResult = useQuery({
    queryKey: [""],
    queryFn: async () => {
      const response = await baseURL.get("/news/category?category=اقتصاد");
      return response.data.result;
    },
  });

  if (categoryResult.isPending) {
    return <></>;
  }
  
  const categoryNews = categoryResult.data;

  return (
    <section className="flex flex-col w-full h-full max-w-[1400px] gap-4">
      <TopNewsCategory />
      {/* <div className="flex flex-col gap-4 px-4">
        {categoryNews.map((news: NewsInfo) => {
          return (
            <div key={news.title}>
              <NewsBar newsInfo={news} />
            </div>
          )
        })}
      </div> */}
    </section>
  );
};

export default Category;
