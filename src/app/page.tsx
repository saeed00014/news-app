import HeadNews from "./(routes)/home/headNews";
import Category from "./(routes)/home/category";
import DoubleAdd from "./(routes)/home/doubleAdd";

const Home = () => {
  return (
    <section className="flex flex-col w-full max-w-[1400px] md:gap-4 gap-2">
      <HeadNews />
      <DoubleAdd />
      <Category />
    </section>
  );
};

export default Home;
