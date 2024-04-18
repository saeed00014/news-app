import News from "./news";
import Adds from "./adds";
import RelatedNews from "./relatedNews";

const page = () => {
  return (
    <section className="flex w-full max-w-[1400px] h-full bg-ship">
      <div className="flex flex-col w-full max-w-[1000px]">
        <News />
        {/* <RelatedNews />
        <Adds /> */}
      </div>
      {/* <div className="lg:flex hidden w-full max-w-[400px]"></div> */}
    </section>
  );
};

export default page;
