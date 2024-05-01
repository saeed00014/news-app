import CategoryBody from "./categoryBody";
import TopNewsCategory from "./topNewsCategory";

const Category = () => {
  return (
    <section className="fixed lg:right-4 lg:left-4 lg:top-[81px] top-[65px] lg:bottom-0 bottom-[65px] flex justify-center">
      <div className="flex flex-col lg:p-0 p-2 w-full h-full max-w-[1400px] md:gap-4 gap-2 overflow-y-auto no-scrollbar">
        <TopNewsCategory />
        <CategoryBody />
      </div>
    </section>
  );
};

export default Category;
