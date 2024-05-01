"use client";
import { baseURL } from "@/axios/axios";
import { PreRenderNewsPage } from "@/components/ui/news";
import { useQuery } from "@tanstack/react-query";
import News from "./news";
import RelatedNews from "../_related/relatedNews";
import { useParams } from "next/navigation";
import { notFound } from "next/navigation";

const NewsPage = () => {
  const id = useParams()?.id;
  const newsResult = useQuery({
    queryKey: [`news${id}`],
    queryFn: async () => {
      try {
        const response = await baseURL.get(`/news/${id}`);
        if (response.status !== 200) {
          throw new Error(`status: ${response.status}`);
        }
        if (response.data.result) {
          return response.data.result;
        }
        return [];
      } catch (err) {
        //log error
        return [];
      }
    },
    retry: 1,
  });

  if (newsResult.isPending) {
    return <PreRenderNewsPage />;
  }

  const news = newsResult.data[0];

  if (!news) {
    notFound();
  }

  return (
    <div className="flex flex-col p-2 gap-6">
      <News news={news} />
      <RelatedNews category={news.category} />
    </div>
  );
};

export default NewsPage;
