import SectionSpliter from "@/components/ui/sectionSpliter";
import ViewAll from "@/components/ui/viewAll";
import CategoryNews from "./categoryNews";

const CategoryBody = ({ category }: { category: string }) => {
  return (
    <div className="flex flex-col gap-2">
      <SectionSpliter category={category} />
      <CategoryNews category={category} />
      <ViewAll path={`/${category}`} />
    </div>
  )
};

export default CategoryBody;
