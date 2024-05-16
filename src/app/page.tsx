import HeadNews from "./(routes)/home/headNews";
import Category from "./(routes)/home/category";
import Dashboard from "./(routes)/home/dashboard";

const Home = () => {
  return (
    <section className="fixed lg:right-4 right-0 lg:left-4 left-0 lg:top-[81px] top-[65px] lg:bottom-0 bottom-[65px] flex justify-center">
      <div className="flex flex-col lg:p-0 p-2 w-full h-full max-w-[1400px] gap-4 overflow-y-auto no-scrollbar">
        <HeadNews />
        <Dashboard />
        <div className="flex flex-col gap-2">
          <Category />
        </div>
      </div>
    </section>
  );
};

export default Home;
