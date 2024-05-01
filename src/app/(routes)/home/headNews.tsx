"use client";
import { baseURL } from "@/axios/axios";
import { TopNews } from "@/components/ui/news";
import { useQuery } from "@tanstack/react-query";

const HeadNews = () => {
  const topNewsResult = useQuery({
    queryKey: ["topnewshome"],
    queryFn: async () => {
      try{
        const response = await baseURL.get("/news");
        if(response.status !== 200) {
          throw new Error(`status=${response.status}`)
        }
        return response.data.result;
      } catch(err) {
        //log err
        return []
      }
    },
  });

  if (topNewsResult.isPending) {
    return <div className="w-full md:h-[400px] h-[350px]"></div>
  }

  const news = topNewsResult.data;

  if (!Array.isArray(news) || !news[0]) {
    return <></>;
  }

  return <TopNews news={news} />;
};

export default HeadNews;
