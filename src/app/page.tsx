import TopNews from "./(routes)/home/topNews";
import CategoryNews from "./(routes)/home/categoryNews";
import AddBar from "@/components/ui/addBar";

const Home = () => {
  return (
    <section className="flex flex-col md:gap-4 gap-2 lg:px-0 md:px-4 px-2 lg:pt-0 pt-2">
      <TopNews />
      <div className="flex gap-2">
        <div className="w-full">
          <AddBar />
        </div>
        <div className="w-full md:flex hidden">
          <AddBar />
        </div>
      </div>
      <CategoryNews />
    </section>
  );
};

export default Home;
