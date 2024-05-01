import HeadNews from "./(routes)/home/headNews";
import Category from "./(routes)/home/category";
import DoubleAdd from "./(routes)/home/doubleAdd";

const Home = () => {
  return (
    <section className="fixed right-0 left-0 lg:top-[81px] top-[65px] lg:bottom-0 bottom-[65px] flex justify-center">
      <div className="flex flex-col  lg:p-0 p-2 w-full h-full max-w-[1400px] md:gap-4 gap-2 overflow-y-auto no-scrollbar">
        <HeadNews />
        {/* <DoubleAdd /> */}
        <Category />
      </div>
    </section>
  );
};

export default Home;
