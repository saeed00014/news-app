import HeadNews from "./(routes)/home/headNews";
import Category from "./(routes)/home/category";
import DoubleAdd from "./(routes)/home/doubleAdd";

const Home = () => {
  return (
    <section className="flex flex-col lg:p-0 p-2 md:pb-0 pb-[70px] w-full h-full max-w-[1400px] md:gap-4 gap-2 overflow-y-auto no-scrollbar">
      <HeadNews />
      {/* <DoubleAdd /> */}
      <Category />
    </section>
  );
};

export default Home;
