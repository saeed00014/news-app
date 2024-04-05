import { NewsCardImage } from "@/components/ui/news";

const TopNews = () => {
  const testNewsInfo = {
    image: "",
    category: "",
    title: "",
    descriptoin: "",
  };

  const classNames =
    "[&>div>a]:pb-2 [&>div>a]:px-2 [&>div>a>span]:text-[.6rem] [&>div>a>p]:text-[.7rem] [&>div>a>h2]:text-[.7rem] [&>div>a>h2]:hidden";

  return (
    <section className="grid md:grid-cols-2 md:gap-2 gap-1">
      <div className="flex md:max-h-[400px] max-h-[200px]">
        <NewsCardImage newsInfo={testNewsInfo} />
      </div>
      <div className="grid md:grid-rows-3 md:max-h-[400px] max-h-[350px] min-h-[250px] md:gap-2 gap-1">
        <div className="flex md:gap-2 gap-1">
          <NewsCardImage newsInfo={testNewsInfo} classNames={classNames} />
          <NewsCardImage newsInfo={testNewsInfo} classNames={classNames} />
        </div>
        <div className="flex  md:gap-2 gap-1">
          <NewsCardImage newsInfo={testNewsInfo} classNames={classNames} />
          <NewsCardImage newsInfo={testNewsInfo} classNames={classNames} />
        </div>
        <div className="md:flex hidden md:gap-2 gap-1">
          <NewsCardImage newsInfo={testNewsInfo} classNames={classNames} />
          <NewsCardImage newsInfo={testNewsInfo} classNames={classNames} />
        </div>
      </div>
    </section>
  );
};

export default TopNews;
