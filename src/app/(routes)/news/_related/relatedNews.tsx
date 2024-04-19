import persian from "@/assets/data";
import { baseURL } from "@/axios/axios";
import { NewsCard, SuggestedNews } from "@/components/ui/news";
import { useQuery } from "@tanstack/react-query";

const RelatedNews = ({ category }: { category: string }) => {
  const relatedResults = useQuery({
    queryKey: [`related${category}`],
    queryFn: async () => {
      const resposne = await baseURL.get(`/news/related?category=${category}`);
      return resposne.data.result;
    },
  });

  if (relatedResults.isPending) {
    return <></>;
  }

  const relateds = relatedResults.data;
  if (Array.isArray(relateds) && relateds[0]) {
    return (
      <div className="flex flex-col gap-2">
        <span className="lg:text-[1.3rem] text-[1.1rem] font-semibold">
          {persian.relatedNews}
        </span>
        <SuggestedNews>
          {relateds.map((related) => {
            return (
              <div key={related.id}>
                <NewsCard newsInfo={related} />
              </div>
            );
          })}
        </SuggestedNews>
      </div>
    );
  }
  
  return <></>
};

export default RelatedNews;
