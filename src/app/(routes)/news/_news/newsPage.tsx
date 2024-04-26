"use client";
import { baseURL } from "@/axios/axios";
import { PreRenderNewsPage } from "@/components/ui/news";
import { useQuery } from "@tanstack/react-query";
import News from "./news";
import RelatedNews from "../_related/relatedNews";
import { useParams } from "next/navigation";

const NewsPage = () => {
  const id = useParams()?.id;
  const newsResult = useQuery({
    queryKey: [`news${id}`],
    queryFn: async () => {
      const response = await baseURL.get(`/news/${id}`);
      return response.data.result[0];
    },
  });

  if (newsResult.isPending) {
    return <PreRenderNewsPage />;
  }

  const news = newsResult.data;

  return (
    <div className="flex flex-col p-2 gap-6 pb-[70px]">
      <News news={news} />
      <RelatedNews category={news.category} />
    </div>
  );
};

export default NewsPage;
