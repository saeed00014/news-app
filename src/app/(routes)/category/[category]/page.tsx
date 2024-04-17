"use client";
import { NewsBar, NewsCard, NewsCardImage } from "@/components/ui/news";
import SectionSpliter from "@/components/ui/sectionSpliter";
import TopNews from "../../home/topNews";
import { useQuery } from "@tanstack/react-query";
import { baseURL } from "@/axios/axios";
import { useParams } from "next/navigation";
import { MongoNewsType, NewsInfo } from "@/types/types";

const Category = () => {
  const testNewsInfo = {
    image: "",
    category: "",
    title: "",
    descriptoin: "",
  };
  const category = useParams()?.id;
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
    <section className="flex flex-col justify-center w-full max-w-[1400px] lg:p-0 p-2 gap-4 bg-ship">
      <TopNews />
      <div className="flex flex-col gap-4 px-4">
        {categoryNews.map((news: NewsInfo) => {
          return (
            <div key={news.title}>
              <NewsBar newsInfo={news} />
            </div>
          )
        })}
      </div>
    </section>
  );
};

export default Category;
