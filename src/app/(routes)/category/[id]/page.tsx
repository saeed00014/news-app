import CategoryBody from "./categoryBody";
import TopNewsCategory from "./topNewsCategory";

const Category = () => {
  return (
    <section className="flex flex-col lg:p-0 p-2 w-full h-full max-w-[1400px] gap-4 overflow-y-auto no-scrollbar">
      <TopNewsCategory />
      <CategoryBody />
    </section>
  );
};

export default Category;
