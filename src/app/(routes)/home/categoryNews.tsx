import persian from "@/assets/data";
import { NewsBar } from "@/components/ui/news";
import SectionSpliter from "@/components/ui/sectionSpliter";
import ViewAll from "@/components/ui/viewAll";

const CategoryNews = () => {
  const testNewsInfo = {
    image: "",
    category: "",
    title: "",
    descriptoin: "",
  };
  return (
    <div className="flex flex-col gap-2">
      <SectionSpliter text={persian.economy} />
      <div className="grid lg:grid-cols-2 lg:grid-rows-2 md:grid-cols-1 grid-cols-2 md:gap-2 gap-1 md:-mt-[4.2rem] -mt-[4.6rem]">
        <div>
          <NewsBar newsInfo={testNewsInfo} />
        </div>
        <div>
          <NewsBar newsInfo={testNewsInfo} />
        </div>
        <div className="lg:flex hidden">
          <NewsBar newsInfo={testNewsInfo} />
        </div>
        <div className="lg:flex hidden">
          <NewsBar newsInfo={testNewsInfo} />
        </div>
      </div>
      <ViewAll path={`/${persian.economy}`} />
    </div>
  );
};

export default CategoryNews;
