import CategoryBody from "./categoryBody";
import TopNewsCategory from "./topNewsCategory";

const Category = () => {
  return (
    <section className="flex flex-col w-full h-full max-w-[1400px] gap-4">
      <TopNewsCategory />
      <CategoryBody />
    </section>
  );
};

export default Category;
