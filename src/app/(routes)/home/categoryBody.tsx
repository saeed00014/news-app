"use client";
import SectionSpliter from "@/components/ui/sectionSpliter";
import ViewAll from "@/components/ui/viewAll";
import CategoryNews from "./categoryNews";
import { useQuery } from "@tanstack/react-query";
import { baseURL } from "@/axios/axios";

const CategoryBody = ({ category }: { category: string }) => {
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
    return <div className="flex flex-col gap-2 md:h-[424px] h-[290px] "></div>;
  }

  const categoryNews = categoryNewsResult.data;

  if (!Array.isArray(categoryNews) || !categoryNews[0]) {
    return <></>;
  }

  return (
    <div className="flex flex-col gap-2 bg-moon">
      <SectionSpliter category={category} />
      <CategoryNews category={category} categoryNews={categoryNews} />
      <ViewAll path={`/${category}`} />
    </div>
  );
};

export default CategoryBody;
