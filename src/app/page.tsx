import TopNews from "./(routes)/home/topNews";
import CategoryNews from "./(routes)/home/categoryNews";
import { AddBar } from "@/components/ui/adds";
import Category from "./(routes)/home/category";

const Home = () => {
  return (
    <section className="flex flex-col w-full max-w-[1400px] bg-ship md:gap-4 gap-2">
      <TopNews />
      {/* <div className="flex gap-2">
        <div className="w-full">
          <AddBar />
        </div>
        <div className="w-full md:flex hidden">
          <AddBar />
        </div>
      </div> */}
      <Category />
    </section>
  );
};

export default Home;
