import NewsCard from "@/components/newsCard/newsCard";

const TopNews = () => {
  const classNames =
    "[&>div>div]:pb-2 [&>div>div]:px-2 [&>div>div>span]:text-[.6rem] [&>div>div>p]:text-[.7rem] [&>div>div>h2]:text-[.7rem] [&>div>div>h2]:hidden";
  return (
    <section className="grid md:grid-cols-2 md:gap-2 gap-1">
      <div className="flex md:max-h-[400px] max-h-[200px]">
        <NewsCard />
      </div>
      <div className="grid md:grid-rows-3 md:max-h-[400px] max-h-[350px] min-h-[250px]  md:gap-2 gap-1">
        <div className="flex md:gap-2 gap-1">
          <NewsCard classNames={classNames} />
          <NewsCard classNames={classNames} />
        </div>
        <div className="flex  md:gap-2 gap-1">
          <NewsCard classNames={classNames} />
          <NewsCard classNames={classNames} />
        </div>
        <div className="md:flex hidden md:gap-2 gap-1">
          <NewsCard classNames={classNames} />
          <NewsCard classNames={classNames} />
        </div>
      </div>
    </section>
  );
};

export default TopNews;
