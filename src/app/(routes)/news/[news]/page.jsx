import News from "./news";
import Adds from "./adds";
import RelatedNews from "./relatedNews";

const page = () => {
  return (
    <section className="flex justify-center lg:p-0 p-2 lg:mt-0 mt-2 lg:mx-0 mx-2 bg-ship">
      <div className="flex flex-col w-full h-fit md:p-4 p-2 gap-[4rem] max-w-[800px]">
        <News />
        <RelatedNews />
        <Adds />
      </div>
    </section>
  );
};

export default page;
