"use client";
import { baseURL } from "@/axios/axios";
import { NewsCardImage } from "@/components/ui/news";
import { useQuery } from "@tanstack/react-query";

const TopNews = () => {
  const topNewsResult = useQuery({
    queryKey: [],
    queryFn: async () => {
      const response = await baseURL.get("/news");
      return response.data.result;
    },
  });

  if (topNewsResult.isPending) {
    return <></>;
  }

  const classNames =
    "[&>div>a]:pb-2 [&>div>a]:px-2 [&>div>a>span]:text-[.6rem] [&>div>a>p]:text-[.7rem] [&>div>a>h2]:text-[.7rem] [&>div>a>h2]:hidden";
  
  const topNews = topNewsResult.data
  console.log(topNews)
  return (
    <section className="grid md:grid-cols-2 md:gap-2 gap-1">
      <div className="flex md:h-[400px] md:max-h-[400px] h-[200px] max-h-[200px]">
        <NewsCardImage newsInfo={topNews[0]} />
      </div>
      <div className="grid md:grid-rows-3 md:max-h-[400px] max-h-[350px] min-h-[250px] md:gap-2 gap-1">
        <div className="flex md:gap-2 gap-1">
          <NewsCardImage newsInfo={topNews[1]} classNames={classNames} />
          <NewsCardImage newsInfo={topNews[2]} classNames={classNames} />
        </div>
        <div className="flex  md:gap-2 gap-1">
          <NewsCardImage newsInfo={topNews[3]} classNames={classNames} />
          <NewsCardImage newsInfo={topNews[4]} classNames={classNames} />
        </div>
        <div className="md:flex hidden md:gap-2 gap-1">
          <NewsCardImage newsInfo={topNews[5]} classNames={classNames} />
          <NewsCardImage newsInfo={topNews[6]} classNames={classNames} />
        </div>
      </div>
    </section>
  );
};

export default TopNews;
