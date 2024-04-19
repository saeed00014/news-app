"use client";
import { NewsBar } from "@/components/ui/news";
import { MongoNewsType } from "@/types/types";

type Props = {
  category: string;
  categoryNews: MongoNewsType[];
};

const CategoryNews = ({ category, categoryNews }: Props) => {
  return (
    <div
      className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-2 md:gap-2 gap-1 lg:[&>*:nth-child(4)]:flex lg:[&>*:nth-child(3)]:flex [&>*:nth-child(4)]:hidden [&>*:nth-child(3)]:hidden"
    >
      {categoryNews.map((news: MongoNewsType) => {
        return (
          <div key={news._id}>
            <NewsBar newsInfo={news} />
          </div>
        );
      })}
    </div>
  );
};

export default CategoryNews;
