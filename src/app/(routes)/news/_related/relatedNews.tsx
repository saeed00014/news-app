import persian from "@/assets/data";
import { NewsCard, SuggestedNews } from "@/components/ui/news";
import React from "react";

const RelatedNews = () => {
  const testNewsInfo = {
    image: "",
    category: "",
    title: "",
    descriptoin: "",
  };
  return (
    <div className="flex flex-col gap-2">
      <span className="lg:text-[1.3rem] text-[1.1rem] font-semibold">
        {persian.relatedNews}
      </span>
      <SuggestedNews>
        <NewsCard newsInfo={testNewsInfo} />
        <NewsCard newsInfo={testNewsInfo} />
      </SuggestedNews>
    </div>
  );
};

export default RelatedNews;
