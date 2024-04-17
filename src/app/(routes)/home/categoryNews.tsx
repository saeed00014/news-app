"use client";
import { baseURL } from "@/axios/axios";
import { NewsBar } from "@/components/ui/news";
import { MongoNewsType } from "@/types/types";
import { useQuery } from "@tanstack/react-query";

const CategoryNews = ({ category }: { category: string }) => {

  const categoryNewsResult = useQuery({
    queryKey: [category],
    queryFn: async () => {
      const response = await baseURL.get(
        `/news/category?category=${category}&limit=4`
      );
      return response.data.result;
    },
  });

  if (categoryNewsResult.isPending) {
    return <></>;
  }

  const categoryNews = categoryNewsResult.data;

  return (
    <div className="grid lg:grid-cols-2 lg:grid-rows-2 md:grid-cols-1 grid-cols-2 md:gap-2 gap-1">
      {Array.isArray(categoryNews) &&
        categoryNews[0] &&
        categoryNews.map((news: MongoNewsType) => {
          return (
            <div key={news.id}>
              <NewsBar newsInfo={news} />
            </div>
          );
        })}
    </div>
  );
};

export default CategoryNews;
