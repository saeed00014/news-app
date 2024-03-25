import NewsBar from "@/components/newsCard/newsBar";
import SectionSpliter from "@/components/ui/sectionSpliter";
import ViewAll from "@/components/ui/viewAll";

const CategoryNews = () => {
  return (
    <div className="flex flex-col gap-2">
      <SectionSpliter />
      <div className="grid lg:grid-cols-2 lg:grid-rows-2 md:grid-cols-1 grid-cols-2 md:gap-2 gap-1 md:-mt-[4.2rem] -mt-[4.6rem]">
        <div>
          <NewsBar />
        </div>
        <div>
          <NewsBar />
        </div>
        <div className="lg:flex hidden">
          <NewsBar />
        </div>
        <div className="lg:flex hidden">
          <NewsBar />
        </div>
      </div>
      <ViewAll />
    </div>
  );
};

export default CategoryNews;
